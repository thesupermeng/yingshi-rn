import { TLMModels } from "@redux/reducers/t_filled";
import { PSmall } from "@redux/fj_prediction_thailand";
import { MVCountry } from "../../constants/i_favorite";
import { getUniqueId } from "react-native-device-info";
import { Socket, io } from "socket.io-client";
import { chatBotMessageFromJson, liveChatRoomFromJson } from "@type/nn_bing";
import { PYListNext } from "@type/wpk_long";
import { KWConstants } from "@models/kl_sheet";

enum WDQPage {
    WDQBlacklistSplash = 'connect',
    WDQReminderAway = 'connect_error',
    WDQBottom = 'disconnect',
    WDQScoreTicked = 'join',
    WDQConstModels = 'leave',
    WDQLayoutAnytime = 'message',
    WDQExpiredRedirect = 'private_message',
    WDQZhengpianService = 'announcement_message',
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
} = {}) => async (dispatch: any, getState: () => PSmall) => {
    try {
        if (roomId === undefined) return;

        dispatch({
            type: isPrivate
                ? TLMModels.TLMProject
                : TLMModels.TLMLeft,
        });

        if (isPrivate && privateRoomWebsocket) return;
        else if (!isPrivate && liveRoomWebsocket) return;

        const userState = getState().userReducer;
        const uuid = await getUniqueId();

        const roomIdWithPrefix = `${isPrivate ? 'private' : 'live'}:${roomId}`;

        let userId = !KWConstants.isLogin(userState.user) ? userState.user!.userId : `guest:${uuid}`;
        let userName = !KWConstants.isLogin(userState.user) ? userState.user!.userName : `guest-${uuid.substring(0, 6)}`;

        const ws = io(MVCountry.chatSocket, {
            autoConnect: false,
        });

        ws.on(WDQPage.WDQBlacklistSplash, () => {
            ws.emit('join', {
                room_id: roomIdWithPrefix,
                user_id: userId,
                user_name: userName,
                game_type: sportType ?? '',
            });
        });

        ws.on(WDQPage.WDQReminderAway, (e) => {
            dispatch({
                type: isPrivate
                    ? TLMModels.TLMPlayUpgrade
                    : TLMModels.TLMZhengpianTick,
                payload: e
            });
        });

        ws.on(WDQPage.WDQScoreTicked, (response) => {
            
            if (response?.data.user_id !== userId) return;

            if (response?.join === true) {
                ws.on(isPrivate
                    ? WDQPage.WDQExpiredRedirect
                    : WDQPage.WDQLayoutAnytime,
                    (data: any) => {
                        const result = liveChatRoomFromJson(data);

                        
                        if (result.messages.visibility === 2 && result.messages.userId !== userState.userId) return;

                        dispatch({
                            type: isPrivate
                                ? TLMModels.TLMStep
                                : TLMModels.TLMSuccess,
                            payload: result,
                        });
                    }
                );

                
                if (!isPrivate) {
                    ws.on(WDQPage.WDQZhengpianService,
                        (data: any) => {
                            const messages = chatBotMessageFromJson(data);
                            const result: PYListNext = {
                                roomId: roomIdWithPrefix,
                                messages: messages
                            }

                            dispatch({
                                type: TLMModels.TLMSuccess,
                                payload: result,
                            });
                        }
                    );
                }

                dispatch({
                    type: isPrivate
                        ? TLMModels.TLMChatModels
                        : TLMModels.TLMLayoutTemperature,
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
                        ? TLMModels.TLMPlayUpgrade
                        : TLMModels.TLMZhengpianTick,
                    payload: response?.message
                });
            }

            
            ws.removeAllListeners(WDQPage.WDQScoreTicked);
        });

        ws.on(WDQPage.WDQBottom, (e) => { });

        ws.connect();

    } catch (e: any) {
        dispatch({
            type: isPrivate
                ? TLMModels.TLMPlayUpgrade
                : TLMModels.TLMZhengpianTick,
            payload: e
        });
    }
}

export const leaveChatRoom = ({
    isPrivate = false,
}: {
    isPrivate?: boolean,
} = {}) => async (dispatch: any, getState: () => PSmall) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {

            privateRoomWebsocket?.emit(WDQPage.WDQConstModels, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(WDQPage)) {
                privateRoomWebsocket?.removeAllListeners(event);
            }

            privateRoomWebsocket?.disconnect();
            privateRoomWebsocket = null;

        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(WDQPage.WDQConstModels, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(WDQPage)) {
                liveRoomWebsocket?.removeAllListeners(event);
            }

            liveRoomWebsocket?.disconnect();
            liveRoomWebsocket = null;
        }

        dispatch({
            type: isPrivate
                ? TLMModels.TLMFootballRead
                : TLMModels.TLMFloatingCombined,
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
}) => (dispatch: any, getState: () => PSmall) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {
            privateRoomWebsocket?.emit(WDQPage.WDQExpiredRedirect, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(WDQPage.WDQLayoutAnytime, {
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
