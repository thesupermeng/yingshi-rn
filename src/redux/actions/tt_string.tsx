import { XBecome } from "@redux/reducers/tt_dycreator_reactnativejs";
import { ttOrange } from "@redux/tt_updates_bottom";
import { ttGemfile } from "../../constants/tt_chat";
import { getUniqueId } from "react-native-device-info";
import { Socket, io } from "socket.io-client";
import { chatBotMessageFromJson, liveChatRoomFromJson } from "@type/tt_team_empty";
import { ttMiddle } from "@type/tt_line_borderless";
import { ttFast } from "@models/tt_stations_right";

enum YONTemperatureSubs {
    YONFast = 'connect',
    YONPressure = 'connect_error',
    YONApplication = 'disconnect',
    YONCatalogCurrent = 'join',
    YONMembershipNativeex = 'leave',
    YONNterstitialRegeng = 'message',
    YONInfoSchedule = 'private_message',
    YONStats = 'announcement_message',
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
} = {}) => async (dispatch: any, getState: () => ttOrange) => {
    try {
        if (roomId === undefined) return;

        dispatch({
            type: isPrivate
                ? XBecome.XIncidentOrientation
                : XBecome.XInactive,
        });

        if (isPrivate && privateRoomWebsocket) return;
        else if (!isPrivate && liveRoomWebsocket) return;

        const userState = getState().userReducer;
        const uuid = await getUniqueId();

        const roomIdWithPrefix = `${isPrivate ? 'private' : 'live'}:${roomId}`;

        let userId = !ttFast.isLogin(userState.user) ? userState.user!.userId : `guest:${uuid}`;
        let userName = !ttFast.isLogin(userState.user) ? userState.user!.userName : `guest-${uuid.substring(0, 6)}`;

        const ws = io(ttGemfile.chatSocket, {
            autoConnect: false,
        });

        ws.on(YONTemperatureSubs.YONFast, () => {
            ws.emit('join', {
                room_id: roomIdWithPrefix,
                user_id: userId,
                user_name: userName,
                game_type: sportType ?? '',
            });
        });

        ws.on(YONTemperatureSubs.YONPressure, (e) => {
            dispatch({
                type: isPrivate
                    ? XBecome.XFrameSport
                    : XBecome.XViews,
                payload: e
            });
        });

        ws.on(YONTemperatureSubs.YONCatalogCurrent, (response) => {
            
            if (response?.data.user_id !== userId) return;

            if (response?.join === true) {
                ws.on(isPrivate
                    ? YONTemperatureSubs.YONInfoSchedule
                    : YONTemperatureSubs.YONNterstitialRegeng,
                    (data: any) => {
                        const result = liveChatRoomFromJson(data);

                        
                        if (result.messages.visibility === 2 && result.messages.userId !== userState.userId) return;

                        dispatch({
                            type: isPrivate
                                ? XBecome.XDownloaded
                                : XBecome.XNavigation,
                            payload: result,
                        });
                    }
                );

                
                if (!isPrivate) {
                    ws.on(YONTemperatureSubs.YONStats,
                        (data: any) => {
                            const messages = chatBotMessageFromJson(data);
                            const result: ttMiddle = {
                                roomId: roomIdWithPrefix,
                                messages: messages
                            }

                            dispatch({
                                type: XBecome.XNavigation,
                                payload: result,
                            });
                        }
                    );
                }

                dispatch({
                    type: isPrivate
                        ? XBecome.XSentry
                        : XBecome.XAdult,
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
                        ? XBecome.XFrameSport
                        : XBecome.XViews,
                    payload: response?.message
                });
            }

            
            ws.removeAllListeners(YONTemperatureSubs.YONCatalogCurrent);
        });

        ws.on(YONTemperatureSubs.YONApplication, (e) => { });

        ws.connect();

    } catch (e: any) {
        dispatch({
            type: isPrivate
                ? XBecome.XFrameSport
                : XBecome.XViews,
            payload: e
        });
    }
}

export const leaveChatRoom = ({
    isPrivate = false,
}: {
    isPrivate?: boolean,
} = {}) => async (dispatch: any, getState: () => ttOrange) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {

            privateRoomWebsocket?.emit(YONTemperatureSubs.YONMembershipNativeex, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(YONTemperatureSubs)) {
                privateRoomWebsocket?.removeAllListeners(event);
            }

            privateRoomWebsocket?.disconnect();
            privateRoomWebsocket = null;

        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(YONTemperatureSubs.YONMembershipNativeex, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(YONTemperatureSubs)) {
                liveRoomWebsocket?.removeAllListeners(event);
            }

            liveRoomWebsocket?.disconnect();
            liveRoomWebsocket = null;
        }

        dispatch({
            type: isPrivate
                ? XBecome.XBorderlessGradle
                : XBecome.XRead,
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
}) => (dispatch: any, getState: () => ttOrange) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {
            privateRoomWebsocket?.emit(YONTemperatureSubs.YONInfoSchedule, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(YONTemperatureSubs.YONNterstitialRegeng, {
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
