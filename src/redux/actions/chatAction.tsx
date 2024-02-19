import { ChatActionEventType } from "@redux";
import { RootState } from "@redux";
import { CEndpoint } from "../../constants/api";
import { getUniqueId } from "react-native-device-info";
import { Socket, io } from "socket.io-client";
import { chatBotMessageFromJson, liveChatRoomFromJson } from "@type";
import { LiveChatRoomType } from "@type";

enum SocketEvent {
    Connect = 'connect',
    ConnectError = 'connect_error',
    Disonnect = 'disconnect',
    Join = 'join',
    Leave = 'leave',
    Message = 'message',
    PrivateMessage = 'private_message',
    AnnouncementMessage = 'announcement_message',
}

let liveRoomWebsocket: Socket | null = null;
let privateRoomWebsocket: Socket | null = null;

export const joinChatRoom = ({
    roomId,
    isPrivate = false,
    sportType,
}: {
    roomId?: string,
    isPrivate?: boolean,
    sportType?: string,
} = {}) => async (dispatch: any, getState: () => RootState) => {
    try {
        if (roomId === undefined) return;

        dispatch({
            type: isPrivate
                ? ChatActionEventType.JOIN_PRIVATE_ROOM
                : ChatActionEventType.JOIN_LIVE_ROOM,
        });

        if (isPrivate && privateRoomWebsocket) return;
        else if (!isPrivate && liveRoomWebsocket) return;

        const userState = getState().userReducer;
        const uuid = await getUniqueId();

        const roomIdWithPrefix = `${isPrivate ? 'private' : 'live'}:${roomId}`;
        // TODO: need change when done guest user
        let userId = userState.userId !== undefined && userState.userId !== '' ? userState.userId : `guest:${uuid}`;
        let userName = userState.userId !== undefined && userState.userId !== '' ? userState.userName : `guest-${uuid.substring(0, 6)}`;

        const ws = io(CEndpoint.chatSocket, {
            autoConnect: false,
        });

        ws.on(SocketEvent.Connect, () => {
            ws.emit('join', {
                room_id: roomIdWithPrefix,
                user_id: userId,
                user_name: userName,
                game_type: sportType ?? '',
            });
        });

        ws.on(SocketEvent.ConnectError, (e) => {
            dispatch({
                type: isPrivate
                    ? ChatActionEventType.JOIN_PRIVATE_ROOM_FAIL
                    : ChatActionEventType.JOIN_LIVE_ROOM_FAIL,
                payload: e
            });
        });

        ws.on(SocketEvent.Join, (response) => {
            // filter if the join is other users
            if (response?.data.user_id !== userId) return;

            if (response?.join === true) {
                ws.on(isPrivate
                    ? SocketEvent.PrivateMessage
                    : SocketEvent.Message,
                    (data: any) => {
                        const result = liveChatRoomFromJson(data);

                        // filter if the message is other users
                        if (result.messages.visibility === 2 && result.messages.userId !== userState.userId) return;

                        dispatch({
                            type: isPrivate
                                ? ChatActionEventType.UPDATE_PRIVATE_ROOM_MESSAGE
                                : ChatActionEventType.UPDATE_LIVE_ROOM_MESSAGE,
                            payload: result,
                        });
                    }
                );

                // only live room need bot chat
                if (!isPrivate) {
                    ws.on(SocketEvent.AnnouncementMessage,
                        (data: any) => {
                            const messages = chatBotMessageFromJson(data);
                            const result: LiveChatRoomType = {
                                roomId: roomIdWithPrefix,
                                messages: messages
                            }

                            dispatch({
                                type: ChatActionEventType.UPDATE_LIVE_ROOM_MESSAGE,
                                payload: result,
                            });
                        }
                    );
                }

                dispatch({
                    type: isPrivate
                        ? ChatActionEventType.JOIN_PRIVATE_ROOM_SUCCESS
                        : ChatActionEventType.JOIN_LIVE_ROOM_SUCCESS,
                    payload: {
                        roomId: roomIdWithPrefix,
                        userId: userId,
                        userName: userName,
                    }
                });

                if (isPrivate) privateRoomWebsocket = ws;
                else liveRoomWebsocket = ws;

            } else {
                dispatch({
                    type: isPrivate
                        ? ChatActionEventType.JOIN_PRIVATE_ROOM_FAIL
                        : ChatActionEventType.JOIN_LIVE_ROOM_FAIL,
                    payload: response?.message
                });
            }

            // after join just remove listen (prevent duplicate listen when same account different deveice join a same room)
            ws.removeAllListeners(SocketEvent.Join);
        });

        ws.on(SocketEvent.Disonnect, (e) => { });

        ws.connect();

    } catch (e: any) {
        dispatch({
            type: isPrivate
                ? ChatActionEventType.JOIN_PRIVATE_ROOM_FAIL
                : ChatActionEventType.JOIN_LIVE_ROOM_FAIL,
            payload: e
        });
    }
}

export const leaveChatRoom = ({
    isPrivate = false,
}: {
    isPrivate?: boolean,
} = {}) => async (dispatch: any, getState: () => RootState) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {

            privateRoomWebsocket?.emit(SocketEvent.Leave, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(SocketEvent)) {
                privateRoomWebsocket?.removeAllListeners(event);
            }

            privateRoomWebsocket?.disconnect();
            privateRoomWebsocket = null;

        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(SocketEvent.Leave, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(SocketEvent)) {
                liveRoomWebsocket?.removeAllListeners(event);
            }

            liveRoomWebsocket?.disconnect();
            liveRoomWebsocket = null;
        }

        dispatch({
            type: isPrivate
                ? ChatActionEventType.LEAVE_PRIVATE_ROOM
                : ChatActionEventType.LEAVE_LIVE_ROOM,
        });

    } catch (e: any) {
        console.warn(e);
    }
}

export const sendChatMessage = ({
    message,
    isPrivate = false,
}: {
    message: string,
    isPrivate?: boolean,
}) => (dispatch: any, getState: () => RootState) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {
            privateRoomWebsocket?.emit(SocketEvent.PrivateMessage, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(SocketEvent.Message, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        }

    } catch (e: any) {
        console.warn(e);
    }
}
