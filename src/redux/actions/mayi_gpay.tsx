import { AJEStore } from "@redux/reducers/mayi_yellow_gemfile";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { mayi_Iconclosewhitewithbg } from "../../constants/mayi_plash_basketballtrophy";
import { getUniqueId } from "react-native-device-info";
import { Socket, io } from "socket.io-client";
import { chatBotMessageFromJson, liveChatRoomFromJson } from "@type/mayi_basketball_wind";
import { mayi_BaiduHalffieldimage } from "@type/mayi_green";
import { mayi_Gift } from "@models/mayi_libjsinspector";

enum IIDShareOrange {
    IIDLibjsiInternet = 'connect',
    IIDIconsharefriends = 'connect_error',
    IIDBorderlessIconbackwhite = 'disconnect',
    IIDMbnative = 'join',
    IIDIconorientation = 'leave',
    IIDCenterReact = 'message',
    IIDImagenetworkerrEdit = 'private_message',
    IIDTickProject = 'announcement_message',
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
} = {}) => async (dispatch: any, getState: () => mayi_Libapminsightb) => {
    try {
        if (roomId === undefined) return;

        dispatch({
            type: isPrivate
                ? AJEStore.AJEDependencyScrollview
                : AJEStore.AJEIconarrowleft,
        });

        if (isPrivate && privateRoomWebsocket) return;
        else if (!isPrivate && liveRoomWebsocket) return;

        const userState = getState().userReducer;
        const uuid = await getUniqueId();

        const roomIdWithPrefix = `${isPrivate ? 'private' : 'live'}:${roomId}`;

        let userId = !mayi_Gift.isLogin(userState.user) ? userState.user!.userId : `guest:${uuid}`;
        let userName = !mayi_Gift.isLogin(userState.user) ? userState.user!.userName : `guest-${uuid.substring(0, 6)}`;

        const ws = io(mayi_Iconclosewhitewithbg.chatSocket, {
            autoConnect: false,
        });

        ws.on(IIDShareOrange.IIDLibjsiInternet, () => {
            ws.emit('join', {
                room_id: roomIdWithPrefix,
                user_id: userId,
                user_name: userName,
                game_type: sportType ?? '',
            });
        });

        ws.on(IIDShareOrange.IIDIconsharefriends, (e) => {
            dispatch({
                type: isPrivate
                    ? AJEStore.AJEUtilsIconpipexpand
                    : AJEStore.AJEBackiconLibapminsighta,
                payload: e
            });
        });

        ws.on(IIDShareOrange.IIDMbnative, (response) => {
            
            if (response?.data.user_id !== userId) return;

            if (response?.join === true) {
                ws.on(isPrivate
                    ? IIDShareOrange.IIDImagenetworkerrEdit
                    : IIDShareOrange.IIDCenterReact,
                    (data: any) => {
                        const result = liveChatRoomFromJson(data);

                        
                        if (result.messages.visibility === 2 && result.messages.userId !== userState.userId) return;

                        dispatch({
                            type: isPrivate
                                ? AJEStore.AJELibswresampleSlider
                                : AJEStore.AJENewarchdefaultsShoot,
                            payload: result,
                        });
                    }
                );

                
                if (!isPrivate) {
                    ws.on(IIDShareOrange.IIDTickProject,
                        (data: any) => {
                            const messages = chatBotMessageFromJson(data);
                            const result: mayi_BaiduHalffieldimage = {
                                roomId: roomIdWithPrefix,
                                messages: messages
                            }

                            dispatch({
                                type: AJEStore.AJENewarchdefaultsShoot,
                                payload: result,
                            });
                        }
                    );
                }

                dispatch({
                    type: isPrivate
                        ? AJEStore.AJEPlashAlbum
                        : AJEStore.AJELibapminsighta,
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
                        ? AJEStore.AJEUtilsIconpipexpand
                        : AJEStore.AJEBackiconLibapminsighta,
                    payload: response?.message
                });
            }

            
            ws.removeAllListeners(IIDShareOrange.IIDMbnative);
        });

        ws.on(IIDShareOrange.IIDBorderlessIconbackwhite, (e) => { });

        ws.connect();

    } catch (e: any) {
        dispatch({
            type: isPrivate
                ? AJEStore.AJEUtilsIconpipexpand
                : AJEStore.AJEBackiconLibapminsighta,
            payload: e
        });
    }
}

export const leaveChatRoom = ({
    isPrivate = false,
}: {
    isPrivate?: boolean,
} = {}) => async (dispatch: any, getState: () => mayi_Libapminsightb) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {

            privateRoomWebsocket?.emit(IIDShareOrange.IIDIconorientation, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(IIDShareOrange)) {
                privateRoomWebsocket?.removeAllListeners(event);
            }

            privateRoomWebsocket?.disconnect();
            privateRoomWebsocket = null;

        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(IIDShareOrange.IIDIconorientation, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(IIDShareOrange)) {
                liveRoomWebsocket?.removeAllListeners(event);
            }

            liveRoomWebsocket?.disconnect();
            liveRoomWebsocket = null;
        }

        dispatch({
            type: isPrivate
                ? AJEStore.AJERncoreLogouser
                : AJEStore.AJETypeFirebase,
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
}) => (dispatch: any, getState: () => mayi_Libapminsightb) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {
            privateRoomWebsocket?.emit(IIDShareOrange.IIDImagenetworkerrEdit, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(IIDShareOrange.IIDCenterReact, {
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
