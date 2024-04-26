import { NDisconnectedlogoSlider } from "@redux/reducers/wawa_fast_flipper";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { wawaStatisticsEpisodes } from "../../constants/wawa_ping";
import { getUniqueId } from "react-native-device-info";
import { Socket, io } from "socket.io-client";
import { chatBotMessageFromJson, liveChatRoomFromJson } from "@type/wawa_profilepic_hiad";
import { wawaConfigure } from "@type/wawa_gradlew";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

enum EACIconschedule {
    EACLibreactperfloggerjniForward = 'connect',
    EACFaviconPhoneshare = 'connect_error',
    EACCalendarBackwhite = 'disconnect',
    EACEighteen = 'join',
    EACForwardLoginsuccess = 'leave',
    EACFeedbackGemfile = 'message',
    EACPlus = 'private_message',
    EACComponentPhoneshare = 'announcement_message',
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
} = {}) => async (dispatch: any, getState: () => wawaIconsubssuccess) => {
    try {
        if (roomId === undefined) return;

        dispatch({
            type: isPrivate
                ? NDisconnectedlogoSlider.NShootnogoalFrame
                : NDisconnectedlogoSlider.NSubout,
        });

        if (isPrivate && privateRoomWebsocket) return;
        else if (!isPrivate && liveRoomWebsocket) return;

        const userState = getState().userReducer;
        const uuid = await getUniqueId();

        const roomIdWithPrefix = `${isPrivate ? 'private' : 'live'}:${roomId}`;

        let userId = !wawaLibglog.isLogin(userState.user) ? userState.user!.userId : `guest:${uuid}`;
        let userName = !wawaLibglog.isLogin(userState.user) ? userState.user!.userName : `guest-${uuid.substring(0, 6)}`;

        const ws = io(wawaStatisticsEpisodes.chatSocket, {
            autoConnect: false,
        });

        ws.on(EACIconschedule.EACLibreactperfloggerjniForward, () => {
            ws.emit('join', {
                room_id: roomIdWithPrefix,
                user_id: userId,
                user_name: userName,
                game_type: sportType ?? '',
            });
        });

        ws.on(EACIconschedule.EACFaviconPhoneshare, (e) => {
            dispatch({
                type: isPrivate
                    ? NDisconnectedlogoSlider.NMiddlesoundMintegral
                    : NDisconnectedlogoSlider.NWhistleorangeCountdown,
                payload: e
            });
        });

        ws.on(EACIconschedule.EACEighteen, (response) => {
            
            if (response?.data.user_id !== userId) return;

            if (response?.join === true) {
                ws.on(isPrivate
                    ? EACIconschedule.EACPlus
                    : EACIconschedule.EACFeedbackGemfile,
                    (data: any) => {
                        const result = liveChatRoomFromJson(data);

                        
                        if (result.messages.visibility === 2 && result.messages.userId !== userState.userId) return;

                        dispatch({
                            type: isPrivate
                                ? NDisconnectedlogoSlider.NYellowcirclebgImagemanager
                                : NDisconnectedlogoSlider.NOrangeuparrow,
                            payload: result,
                        });
                    }
                );

                
                if (!isPrivate) {
                    ws.on(EACIconschedule.EACComponentPhoneshare,
                        (data: any) => {
                            const messages = chatBotMessageFromJson(data);
                            const result: wawaConfigure = {
                                roomId: roomIdWithPrefix,
                                messages: messages
                            }

                            dispatch({
                                type: NDisconnectedlogoSlider.NOrangeuparrow,
                                payload: result,
                            });
                        }
                    );
                }

                dispatch({
                    type: isPrivate
                        ? NDisconnectedlogoSlider.NUpgrade
                        : NDisconnectedlogoSlider.NPlayercommon,
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
                        ? NDisconnectedlogoSlider.NMiddlesoundMintegral
                        : NDisconnectedlogoSlider.NWhistleorangeCountdown,
                    payload: response?.message
                });
            }

            
            ws.removeAllListeners(EACIconschedule.EACEighteen);
        });

        ws.on(EACIconschedule.EACCalendarBackwhite, (e) => { });

        ws.connect();

    } catch (e: any) {
        dispatch({
            type: isPrivate
                ? NDisconnectedlogoSlider.NMiddlesoundMintegral
                : NDisconnectedlogoSlider.NWhistleorangeCountdown,
            payload: e
        });
    }
}

export const leaveChatRoom = ({
    isPrivate = false,
}: {
    isPrivate?: boolean,
} = {}) => async (dispatch: any, getState: () => wawaIconsubssuccess) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {

            privateRoomWebsocket?.emit(EACIconschedule.EACForwardLoginsuccess, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(EACIconschedule)) {
                privateRoomWebsocket?.removeAllListeners(event);
            }

            privateRoomWebsocket?.disconnect();
            privateRoomWebsocket = null;

        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(EACIconschedule.EACForwardLoginsuccess, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(EACIconschedule)) {
                liveRoomWebsocket?.removeAllListeners(event);
            }

            liveRoomWebsocket?.disconnect();
            liveRoomWebsocket = null;
        }

        dispatch({
            type: isPrivate
                ? NDisconnectedlogoSlider.NHongkong
                : NDisconnectedlogoSlider.NHookSina,
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
}) => (dispatch: any, getState: () => wawaIconsubssuccess) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {
            privateRoomWebsocket?.emit(EACIconschedule.EACPlus, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(EACIconschedule.EACFeedbackGemfile, {
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
