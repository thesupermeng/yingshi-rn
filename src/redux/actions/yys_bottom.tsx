import { IApplication } from "@redux";
import { yysIconclosewhiteBaiduads } from "@redux";
import { yysPangleCommon } from "../../constants/yys_manifest";
import { getUniqueId } from "react-native-device-info";
import { Socket, io } from "socket.io-client";
import { chatBotMessageFromJson, liveChatRoomFromJson } from "@type";
import { yysTemplate } from "@type";

enum PLibswresample {
    PSettingsMbnative = 'connect',
    PInit = 'connect_error',
    PSearchbar = 'disconnect',
    PGiftbutton = 'join',
    PRoboto = 'leave',
    PIconschedule = 'message',
    PChatFlipper = 'private_message',
    PImages = 'announcement_message',
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
} = {}) => async (dispatch: any, getState: () => yysIconclosewhiteBaiduads) => {
    try {
        if (roomId === undefined) return;

        dispatch({
            type: isPrivate
                ? IApplication.IQuesticonMbbanner
                : IApplication.IRewindChatroombackground,
        });

        if (isPrivate && privateRoomWebsocket) return;
        else if (!isPrivate && liveRoomWebsocket) return;

        const userState = getState().userReducer;
        const uuid = await getUniqueId();

        const roomIdWithPrefix = `${isPrivate ? 'private' : 'live'}:${roomId}`;
        
        let userId = userState.userId !== undefined && userState.userId !== '' ? userState.userId : `guest:${uuid}`;
        let userName = userState.userId !== undefined && userState.userId !== '' ? userState.userName : `guest-${uuid.substring(0, 6)}`;

        const ws = io(yysPangleCommon.chatSocket, {
            autoConnect: false,
        });

        ws.on(PLibswresample.PSettingsMbnative, () => {
            ws.emit('join', {
                room_id: roomIdWithPrefix,
                user_id: userId,
                user_name: userName,
                game_type: sportType ?? '',
            });
        });

        ws.on(PLibswresample.PInit, (e) => {
            dispatch({
                type: isPrivate
                    ? IApplication.IAwayplayer
                    : IApplication.IFavoriteIconarrowrightwhite,
                payload: e
            });
        });

        ws.on(PLibswresample.PGiftbutton, (response) => {
            
            if (response?.data.user_id !== userId) return;

            if (response?.join === true) {
                ws.on(isPrivate
                    ? PLibswresample.PChatFlipper
                    : PLibswresample.PIconschedule,
                    (data: any) => {
                        const result = liveChatRoomFromJson(data);

                        
                        if (result.messages.visibility === 2 && result.messages.userId !== userState.userId) return;

                        dispatch({
                            type: isPrivate
                                ? IApplication.IShielddoneTrash
                                : IApplication.IIconlogoutLargebrightness,
                            payload: result,
                        });
                    }
                );

                
                if (!isPrivate) {
                    ws.on(PLibswresample.PImages,
                        (data: any) => {
                            const messages = chatBotMessageFromJson(data);
                            const result: yysTemplate = {
                                roomId: roomIdWithPrefix,
                                messages: messages
                            }

                            dispatch({
                                type: IApplication.IIconlogoutLargebrightness,
                                payload: result,
                            });
                        }
                    );
                }

                dispatch({
                    type: isPrivate
                        ? IApplication.IFiled
                        : IApplication.ICornerkick,
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
                        ? IApplication.IAwayplayer
                        : IApplication.IFavoriteIconarrowrightwhite,
                    payload: response?.message
                });
            }

            
            ws.removeAllListeners(PLibswresample.PGiftbutton);
        });

        ws.on(PLibswresample.PSearchbar, (e) => { });

        ws.connect();

    } catch (e: any) {
        dispatch({
            type: isPrivate
                ? IApplication.IAwayplayer
                : IApplication.IFavoriteIconarrowrightwhite,
            payload: e
        });
    }
}

export const leaveChatRoom = ({
    isPrivate = false,
}: {
    isPrivate?: boolean,
} = {}) => async (dispatch: any, getState: () => yysIconclosewhiteBaiduads) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {

            privateRoomWebsocket?.emit(PLibswresample.PRoboto, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(PLibswresample)) {
                privateRoomWebsocket?.removeAllListeners(event);
            }

            privateRoomWebsocket?.disconnect();
            privateRoomWebsocket = null;

        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(PLibswresample.PRoboto, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(PLibswresample)) {
                liveRoomWebsocket?.removeAllListeners(event);
            }

            liveRoomWebsocket?.disconnect();
            liveRoomWebsocket = null;
        }

        dispatch({
            type: isPrivate
                ? IApplication.ILibswscaleAnner
                : IApplication.IManager,
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
}) => (dispatch: any, getState: () => yysIconclosewhiteBaiduads) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {
            privateRoomWebsocket?.emit(PLibswresample.PChatFlipper, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(PLibswresample.PIconschedule, {
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
