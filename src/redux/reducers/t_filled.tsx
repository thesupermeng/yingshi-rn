import { PYListNext } from '@type/wpk_long';
import { KCollection, DFEFieldRead, EHWPlashLight, IMLRenewCarousel } from '@type/jxf_pause';
import { CHAT_BOX_MAX_ITEM } from '@utility/n_subs_interstitial';

export enum TLMModels {
    TLMLeft = 'JOIN_LIVE_ROOM',
    TLMLayoutTemperature = 'JOIN_LIVE_ROOM_SUCCESS',
    TLMZhengpianTick = 'JOIN_LIVE_ROOM_FAIL',
    TLMFloatingCombined = 'LEAVE_LIVE_ROOM',
    TLMSuccess = 'UPDATE_LIVE_ROOM_MESSAGE',

    TLMProject = 'JOIN_PRIVATE_ROOM',
    TLMChatModels = 'JOIN_PRIVATE_ROOM_SUCCESS',
    TLMPlayUpgrade = 'JOIN_PRIVATE_ROOM_FAIL',
    TLMFootballRead = 'LEAVE_PRIVATE_ROOM',
    TLMStep = 'UPDATE_PRIVATE_ROOM_MESSAGE',
}

export type YData = {
    type: TLMModels,
    payload?: any,
}

export type LOQFloaterDialog = {
    isJoinLiveLoading: boolean,
    joinLiveErrMsg: string | null,

    isJoinPrivateLoading: boolean,
    joinPrivateErrMsg: string | null,

    userId: string | null,
    userName: string | null,

    liveRoom: DFEFieldRead | null,
    liveRoomsHistory: KCollection[],
    privateRoom: IMLRenewCarousel | null,
    privateRoomHistory: EHWPlashLight[],
}

const initialState: LOQFloaterDialog = {
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

export const chatReducer = (state = initialState, action: YData): LOQFloaterDialog => {
    switch (action.type) {
        case TLMModels.TLMLeft: {
            return {
                ...state,
                isJoinLiveLoading: true,
                joinLiveErrMsg: null,
                liveRoom: null,
            }
        }
        case TLMModels.TLMLayoutTemperature: {
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
        case TLMModels.TLMZhengpianTick: {
            return {
                ...state,
                isJoinLiveLoading: false,
                joinLiveErrMsg: action.payload,
            }
        }
        case TLMModels.TLMFloatingCombined: {
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
        case TLMModels.TLMSuccess: {
            const data: PYListNext = action.payload;

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
        case TLMModels.TLMProject: {
            return {
                ...state,
                isJoinPrivateLoading: true,
                joinPrivateErrMsg: null,
                privateRoom: null,
            }
        }
        case TLMModels.TLMChatModels: {
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
        case TLMModels.TLMPlayUpgrade: {
            return {
                ...state,
                isJoinPrivateLoading: false,
                joinPrivateErrMsg: action.payload,
            }
        }
        case TLMModels.TLMFootballRead: {
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
        case TLMModels.TLMStep: {
            const data: PYListNext = action.payload;

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
