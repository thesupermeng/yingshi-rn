import { VAVFlyerHiad } from "@redux/reducers/yys_bell_gdtadv";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { yys_FavoriteCustom } from "../../constants/yys_libjsi";
import { getUniqueId } from "react-native-device-info";
import { Socket, io } from "socket.io-client";
import { chatBotMessageFromJson, liveChatRoomFromJson } from "@type/yys_large";
import { yys_FlipperLibzeus } from "@type/yys_libzeus";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

enum PBLess {
    PBPointExecutor = 'connect',
    PBString = 'connect_error',
    PBSplash = 'disconnect',
    PBSports = 'join',
    PBEditCommon = 'leave',
    PBMaterialRecommendation = 'message',
    PBFaviconApplication = 'private_message',
    PBClear = 'announcement_message',
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
} = {}) => async (dispatch: any, getState: () => yys_MintegralLibavdevice) => {
    try {
        if (roomId === undefined) return;

        dispatch({
            type: isPrivate
                ? VAVFlyerHiad.VAVLibffmpegkit
                : VAVFlyerHiad.VAVHook,
        });

        if (isPrivate && privateRoomWebsocket) return;
        else if (!isPrivate && liveRoomWebsocket) return;

        const userState = getState().userReducer;
        const uuid = await getUniqueId();

        const roomIdWithPrefix = `${isPrivate ? 'private' : 'live'}:${roomId}`;

        let userId = !yys_RelatedTooltips.isLogin(userState.user) ? userState.user!.userId : `guest:${uuid}`;
        let userName = !yys_RelatedTooltips.isLogin(userState.user) ? userState.user!.userName : `guest-${uuid.substring(0, 6)}`;

        const ws = io(yys_FavoriteCustom.chatSocket, {
            autoConnect: false,
        });

        ws.on(PBLess.PBPointExecutor, () => {
            ws.emit('join', {
                room_id: roomIdWithPrefix,
                user_id: userId,
                user_name: userName,
                game_type: sportType ?? '',
            });
        });

        ws.on(PBLess.PBString, (e) => {
            dispatch({
                type: isPrivate
                    ? VAVFlyerHiad.VAVReminder
                    : VAVFlyerHiad.VAVNews,
                payload: e
            });
        });

        ws.on(PBLess.PBSports, (response) => {
            
            if (response?.data.user_id !== userId) return;

            if (response?.join === true) {
                ws.on(isPrivate
                    ? PBLess.PBFaviconApplication
                    : PBLess.PBMaterialRecommendation,
                    (data: any) => {
                        const result = liveChatRoomFromJson(data);

                        
                        if (result.messages.visibility === 2 && result.messages.userId !== userState.userId) return;

                        dispatch({
                            type: isPrivate
                                ? VAVFlyerHiad.VAVBorderlessBackground
                                : VAVFlyerHiad.VAVUser,
                            payload: result,
                        });
                    }
                );

                
                if (!isPrivate) {
                    ws.on(PBLess.PBClear,
                        (data: any) => {
                            const messages = chatBotMessageFromJson(data);
                            const result: yys_FlipperLibzeus = {
                                roomId: roomIdWithPrefix,
                                messages: messages
                            }

                            dispatch({
                                type: VAVFlyerHiad.VAVUser,
                                payload: result,
                            });
                        }
                    );
                }

                dispatch({
                    type: isPrivate
                        ? VAVFlyerHiad.VAVNativemoduleEact
                        : VAVFlyerHiad.VAVLibreactnativeblob,
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
                        ? VAVFlyerHiad.VAVReminder
                        : VAVFlyerHiad.VAVNews,
                    payload: response?.message
                });
            }

            
            ws.removeAllListeners(PBLess.PBSports);
        });

        ws.on(PBLess.PBSplash, (e) => { });

        ws.connect();

    } catch (e: any) {
        dispatch({
            type: isPrivate
                ? VAVFlyerHiad.VAVReminder
                : VAVFlyerHiad.VAVNews,
            payload: e
        });
    }
}

export const leaveChatRoom = ({
    isPrivate = false,
}: {
    isPrivate?: boolean,
} = {}) => async (dispatch: any, getState: () => yys_MintegralLibavdevice) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {

            privateRoomWebsocket?.emit(PBLess.PBEditCommon, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(PBLess)) {
                privateRoomWebsocket?.removeAllListeners(event);
            }

            privateRoomWebsocket?.disconnect();
            privateRoomWebsocket = null;

        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(PBLess.PBEditCommon, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(PBLess)) {
                liveRoomWebsocket?.removeAllListeners(event);
            }

            liveRoomWebsocket?.disconnect();
            liveRoomWebsocket = null;
        }

        dispatch({
            type: isPrivate
                ? VAVFlyerHiad.VAVMegaphoneBanner
                : VAVFlyerHiad.VAVDownloading,
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
}) => (dispatch: any, getState: () => yys_MintegralLibavdevice) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {
            privateRoomWebsocket?.emit(PBLess.PBFaviconApplication, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(PBLess.PBMaterialRecommendation, {
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
