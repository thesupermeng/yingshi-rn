import { wwIconfeedback } from '@type/ww_dycreator_result';
import { wwNativeex, wwSearchbar, wwLibrrc, wwLargebrightnessWhite } from '@type/ww_mail_redgoal';
import { CHAT_BOX_MAX_ITEM } from '@utility/ww_icon';

export enum YRewind {
    YLibswresampleDetail = 'JOIN_LIVE_ROOM',
    YSearchbar = 'JOIN_LIVE_ROOM_SUCCESS',
    YCondensedLargebrightness = 'JOIN_LIVE_ROOM_FAIL',
    YLibaneIconsaveimage = 'LEAVE_LIVE_ROOM',
    YSwitchChart = 'UPDATE_LIVE_ROOM_MESSAGE',

    YPressureLaunch = 'JOIN_PRIVATE_ROOM',
    YConfigBack = 'JOIN_PRIVATE_ROOM_SUCCESS',
    YPenaltygoalWatch = 'JOIN_PRIVATE_ROOM_FAIL',
    YCondensedMbbid = 'LEAVE_PRIVATE_ROOM',
    YSaveBaseline = 'UPDATE_PRIVATE_ROOM_MESSAGE',
}

export type wwCombineCollection = {
    type: YRewind,
    payload?: any,
}

export type wwDacccfaabfbcbadeebddcabacdffdbcEventsplash = {
    isJoinLiveLoading: boolean,
    joinLiveErrMsg: string | null,

    isJoinPrivateLoading: boolean,
    joinPrivateErrMsg: string | null,

    userId: string | null,
    userName: string | null,

    liveRoom: wwSearchbar | null,
    liveRoomsHistory: wwNativeex[],
    privateRoom: wwLargebrightnessWhite | null,
    privateRoomHistory: wwLibrrc[],
}

const initialState: wwDacccfaabfbcbadeebddcabacdffdbcEventsplash = {
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

export const chatReducer = (state = initialState, action: wwCombineCollection): wwDacccfaabfbcbadeebddcabacdffdbcEventsplash => {
    switch (action.type) {
        case YRewind.YLibswresampleDetail: {
            return {
                ...state,
                isJoinLiveLoading: true,
                joinLiveErrMsg: null,
                liveRoom: null,
            }
        }
        case YRewind.YSearchbar: {
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
        case YRewind.YCondensedLargebrightness: {
            return {
                ...state,
                isJoinLiveLoading: false,
                joinLiveErrMsg: action.payload,
            }
        }
        case YRewind.YLibaneIconsaveimage: {
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
        case YRewind.YSwitchChart: {
            const data: wwIconfeedback = action.payload;

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
        case YRewind.YPressureLaunch: {
            return {
                ...state,
                isJoinPrivateLoading: true,
                joinPrivateErrMsg: null,
                privateRoom: null,
            }
        }
        case YRewind.YConfigBack: {
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
        case YRewind.YPenaltygoalWatch: {
            return {
                ...state,
                isJoinPrivateLoading: false,
                joinPrivateErrMsg: action.payload,
            }
        }
        case YRewind.YCondensedMbbid: {
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
        case YRewind.YSaveBaseline: {
            const data: wwIconfeedback = action.payload;

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
