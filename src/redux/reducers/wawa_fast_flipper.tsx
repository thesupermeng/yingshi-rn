import { wawaConfigure } from '@type/wawa_gradlew';
import { wawaHeader, wawaForegroundInouttargetyellow, wawaContainerFloating, wawaBackwhite } from '@type/wawa_newsshare_privatechatbg';
import { CHAT_BOX_MAX_ITEM } from '@utility/wawa_iconpointscore';

export enum NDisconnectedlogoSlider {
    NSubout = 'JOIN_LIVE_ROOM',
    NPlayercommon = 'JOIN_LIVE_ROOM_SUCCESS',
    NWhistleorangeCountdown = 'JOIN_LIVE_ROOM_FAIL',
    NHookSina = 'LEAVE_LIVE_ROOM',
    NOrangeuparrow = 'UPDATE_LIVE_ROOM_MESSAGE',

    NShootnogoalFrame = 'JOIN_PRIVATE_ROOM',
    NUpgrade = 'JOIN_PRIVATE_ROOM_SUCCESS',
    NMiddlesoundMintegral = 'JOIN_PRIVATE_ROOM_FAIL',
    NHongkong = 'LEAVE_PRIVATE_ROOM',
    NYellowcirclebgImagemanager = 'UPDATE_PRIVATE_ROOM_MESSAGE',
}

export type wawaIcondefaultthumbnailNewinterstitial = {
    type: NDisconnectedlogoSlider,
    payload?: any,
}

export type wawaLeague = {
    isJoinLiveLoading: boolean,
    joinLiveErrMsg: string | null,

    isJoinPrivateLoading: boolean,
    joinPrivateErrMsg: string | null,

    userId: string | null,
    userName: string | null,

    liveRoom: wawaForegroundInouttargetyellow | null,
    liveRoomsHistory: wawaHeader[],
    privateRoom: wawaBackwhite | null,
    privateRoomHistory: wawaContainerFloating[],
}

const initialState: wawaLeague = {
    isJoinLiveLoading: false,
    joinLiveErrMsg: null,

    isJoinPrivateLoading: false,
    joinPrivateErrMsg: null,

    userId: null,
    userName: null,

    liveRoom: null,
    liveRoomsHistory: [],
    privateRoom: null,
    privateRoomHistory: [],
}

export const chatReducer = (state = initialState, action: wawaIcondefaultthumbnailNewinterstitial): wawaLeague => {
    switch (action.type) {
        case NDisconnectedlogoSlider.NSubout: {
            return {
                ...state,
                isJoinLiveLoading: true,
                joinLiveErrMsg: null,
                liveRoom: null,
            }
        }
        case NDisconnectedlogoSlider.NPlayercommon: {
            return {
                ...state,
                isJoinLiveLoading: false,
                userId: action.payload.userId,
                userName: action.payload.userName,
                liveRoom: {
                    isJoin: true,
                    joinDate: new Date().toISOString(),
                    roomId: action.payload.roomId,
                    messages: [],
                },
            }
        }
        case NDisconnectedlogoSlider.NWhistleorangeCountdown: {
            return {
                ...state,
                isJoinLiveLoading: false,
                joinLiveErrMsg: action.payload,
            }
        }
        case NDisconnectedlogoSlider.NHookSina: {
            const liveRoomsHistory = state.liveRoomsHistory ?? [];

            const indexFound = liveRoomsHistory?.findIndex((e) => {
                return e.roomId === state.liveRoom?.roomId;
            }) ?? -1;

            if (indexFound === -1 && state.liveRoom) {
                liveRoomsHistory.push({
                    ...state.liveRoom,
                    userId: state.userId,
                });

            } else if (indexFound !== -1 && state.liveRoom) {
                const oldMessage = liveRoomsHistory[indexFound].messages;

                liveRoomsHistory.splice(indexFound, 1);
                liveRoomsHistory.push({
                    ...state.liveRoom,
                    userId: state.userId,
                    messages: [...oldMessage, ...state.liveRoom.messages],
                });
            }

            return {
                ...state,
                liveRoom: null,
                liveRoomsHistory: liveRoomsHistory,
            }
        }
        case NDisconnectedlogoSlider.NOrangeuparrow: {
            const data: wawaConfigure = action.payload;

            if (data.roomId !== state.liveRoom?.roomId) return state;

            const messages = state.liveRoom?.messages;

            messages?.push({
                userId: data.messages.userId,
                userName: data.messages.userName,
                role: data.messages.role,
                message: data.messages.message,
                visibility: data.messages.visibility,
                createAt: data.messages.createAt,
            });

            while (messages.length > CHAT_BOX_MAX_ITEM) {
                messages.shift();
            }

            return {
                ...state,
                liveRoom: {
                    ...state.liveRoom,
                    messages,
                }
            }
        }
        case NDisconnectedlogoSlider.NShootnogoalFrame: {
            return {
                ...state,
                isJoinPrivateLoading: true,
                joinPrivateErrMsg: null,
                privateRoom: null,
            }
        }
        case NDisconnectedlogoSlider.NUpgrade: {
            return {
                ...state,
                isJoinPrivateLoading: false,
                userId: action.payload.userId,
                userName: action.payload.userName,
                privateRoom: {
                    isJoin: true,
                    joinDate: new Date().toISOString(),
                    roomId: action.payload.roomId,
                    messages: [],
                },
            }
        }
        case NDisconnectedlogoSlider.NMiddlesoundMintegral: {
            return {
                ...state,
                isJoinPrivateLoading: false,
                joinPrivateErrMsg: action.payload,
            }
        }
        case NDisconnectedlogoSlider.NHongkong: {
            const privateRoomHistory = state.privateRoomHistory ?? [];

            if (state.privateRoom && state.privateRoom.messages.length > 0) {
                privateRoomHistory.push({
                    ...state.privateRoom,
                    userId: state.userId,
                });
            }

            return {
                ...state,
                privateRoom: null,
                privateRoomHistory: privateRoomHistory,
            }
        }
        case NDisconnectedlogoSlider.NYellowcirclebgImagemanager: {
            const data: wawaConfigure = action.payload;

            if (data.roomId !== state.privateRoom?.roomId) return state;

            const messages = state.privateRoom?.messages;

            messages?.push({
                userId: data.messages.userId,
                userName: data.messages.userName,
                role: data.messages.role,
                message: data.messages.message,
                visibility: data.messages.visibility,
                createAt: data.messages.createAt,
            });

            while (messages.length > CHAT_BOX_MAX_ITEM) {
                messages.shift();
            }

            return {
                ...state,
                privateRoom: {
                    ...state.privateRoom,
                    messages,
                }
            }
        }
        default: return state;
    }
}
