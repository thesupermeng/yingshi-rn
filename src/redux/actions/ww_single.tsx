import { YRewind } from "@redux/reducers/ww_mbbanner";
import { wwEighteenShirt } from "@redux/ww_small";
import { wwCollection } from "../../constants/ww_klevin";
import { getUniqueId } from "react-native-device-info";
import { Socket, io } from "socket.io-client";
import { chatBotMessageFromJson, liveChatRoomFromJson } from "@type/ww_renew";
import { wwIconfeedback } from "@type/ww_dycreator_result";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

enum WBLibmapbufferjniHuawei {
    WBNalyticsDownarrow = 'connect',
    WBPolicyScheduler = 'connect_error',
    WBLoginsuccessSelect = 'disconnect',
    WBAnimationsMoon = 'join',
    WBReward = 'leave',
    WBWhistleorangeLivenodatabgimg = 'message',
    WBCollectionMapping = 'private_message',
    WBUtils = 'announcement_message',
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
} = {}) => async (dispatch: any, getState: () => wwEighteenShirt) => {
    try {
        if (roomId === undefined) return;

        dispatch({
            type: isPrivate
                ? YRewind.YPressureLaunch
                : YRewind.YLibswresampleDetail,
        });

        if (isPrivate && privateRoomWebsocket) return;
        else if (!isPrivate && liveRoomWebsocket) return;

        const userState = getState().userReducer;
        const uuid = await getUniqueId();

        const roomIdWithPrefix = `${isPrivate ? 'private' : 'live'}:${roomId}`;

        let userId = !wwBodan.isLogin(userState.user) ? userState.user!.userId : `guest:${uuid}`;
        let userName = !wwBodan.isLogin(userState.user) ? userState.user!.userName : `guest-${uuid.substring(0, 6)}`;

        const ws = io(wwCollection.chatSocket, {
            autoConnect: false,
        });

        ws.on(WBLibmapbufferjniHuawei.WBNalyticsDownarrow, () => {
            ws.emit('join', {
                room_id: roomIdWithPrefix,
                user_id: userId,
                user_name: userName,
                game_type: sportType ?? '',
            });
        });

        ws.on(WBLibmapbufferjniHuawei.WBPolicyScheduler, (e) => {
            dispatch({
                type: isPrivate
                    ? YRewind.YPenaltygoalWatch
                    : YRewind.YCondensedLargebrightness,
                payload: e
            });
        });

        ws.on(WBLibmapbufferjniHuawei.WBAnimationsMoon, (response) => {
            
            if (response?.data.user_id !== userId) return;

            if (response?.join === true) {
                ws.on(isPrivate
                    ? WBLibmapbufferjniHuawei.WBCollectionMapping
                    : WBLibmapbufferjniHuawei.WBWhistleorangeLivenodatabgimg,
                    (data: any) => {
                        const result = liveChatRoomFromJson(data);

                        
                        if (result.messages.visibility === 2 && result.messages.userId !== userState.userId) return;

                        dispatch({
                            type: isPrivate
                                ? YRewind.YSaveBaseline
                                : YRewind.YSwitchChart,
                            payload: result,
                        });
                    }
                );

                
                if (!isPrivate) {
                    ws.on(WBLibmapbufferjniHuawei.WBUtils,
                        (data: any) => {
                            const messages = chatBotMessageFromJson(data);
                            const result: wwIconfeedback = {
                                roomId: roomIdWithPrefix,
                                messages: messages
                            }

                            dispatch({
                                type: YRewind.YSwitchChart,
                                payload: result,
                            });
                        }
                    );
                }

                dispatch({
                    type: isPrivate
                        ? YRewind.YConfigBack
                        : YRewind.YSearchbar,
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
                        ? YRewind.YPenaltygoalWatch
                        : YRewind.YCondensedLargebrightness,
                    payload: response?.message
                });
            }

            
            ws.removeAllListeners(WBLibmapbufferjniHuawei.WBAnimationsMoon);
        });

        ws.on(WBLibmapbufferjniHuawei.WBLoginsuccessSelect, (e) => { });

        ws.connect();

    } catch (e: any) {
        dispatch({
            type: isPrivate
                ? YRewind.YPenaltygoalWatch
                : YRewind.YCondensedLargebrightness,
            payload: e
        });
    }
}

export const leaveChatRoom = ({
    isPrivate = false,
}: {
    isPrivate?: boolean,
} = {}) => async (dispatch: any, getState: () => wwEighteenShirt) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {

            privateRoomWebsocket?.emit(WBLibmapbufferjniHuawei.WBReward, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(WBLibmapbufferjniHuawei)) {
                privateRoomWebsocket?.removeAllListeners(event);
            }

            privateRoomWebsocket?.disconnect();
            privateRoomWebsocket = null;

        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(WBLibmapbufferjniHuawei.WBReward, {
                room_id: chatState.liveRoom.roomId,
                user_id: chatState.userId!,
                user_name: chatState.userName!,
            });

            for (let event of Object.values(WBLibmapbufferjniHuawei)) {
                liveRoomWebsocket?.removeAllListeners(event);
            }

            liveRoomWebsocket?.disconnect();
            liveRoomWebsocket = null;
        }

        dispatch({
            type: isPrivate
                ? YRewind.YCondensedMbbid
                : YRewind.YLibaneIconsaveimage,
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
}) => (dispatch: any, getState: () => wwEighteenShirt) => {
    try {
        const chatState = getState().chatReducer;

        if (isPrivate && chatState.privateRoom) {
            privateRoomWebsocket?.emit(WBLibmapbufferjniHuawei.WBCollectionMapping, {
                room_id: chatState.privateRoom.roomId,
                user_id: chatState.userId,
                user_name: chatState.userName,
                role: 2,
                message: message
            });
        } else if (!isPrivate && chatState.liveRoom) {
            liveRoomWebsocket?.emit(WBLibmapbufferjniHuawei.WBWhistleorangeLivenodatabgimg, {
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
