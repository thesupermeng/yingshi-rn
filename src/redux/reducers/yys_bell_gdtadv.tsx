import { yys_FlipperLibzeus } from '@type/yys_libzeus';
import { yys_Bell, yys_PageDownloading, yys_Transfer, yys_Shrink } from '@type/yys_step';
import { CHAT_BOX_MAX_ITEM } from '@utility/yys_ajax_switch';

export enum VAVFlyerHiad {
    VAVHook = 'JOIN_LIVE_ROOM',
    VAVLibreactnativeblob = 'JOIN_LIVE_ROOM_SUCCESS',
    VAVNews = 'JOIN_LIVE_ROOM_FAIL',
    VAVDownloading = 'LEAVE_LIVE_ROOM',
    VAVUser = 'UPDATE_LIVE_ROOM_MESSAGE',

    VAVLibffmpegkit = 'JOIN_PRIVATE_ROOM',
    VAVNativemoduleEact = 'JOIN_PRIVATE_ROOM_SUCCESS',
    VAVReminder = 'JOIN_PRIVATE_ROOM_FAIL',
    VAVMegaphoneBanner = 'LEAVE_PRIVATE_ROOM',
    VAVBorderlessBackground = 'UPDATE_PRIVATE_ROOM_MESSAGE',
}

export type yys_Count = {
    type: VAVFlyerHiad,
    payload?: any,
}

export type yys_EmojiUser = {
    isJoinLiveLoading: boolean,
    joinLiveErrMsg: string | null,

    isJoinPrivateLoading: boolean,
    joinPrivateErrMsg: string | null,

    userId: string | null,
    userName: string | null,

    liveRoom: yys_PageDownloading | null,
    liveRoomsHistory: yys_Bell[],
    privateRoom: yys_Shrink | null,
    privateRoomHistory: yys_Transfer[],
}

const initialState: yys_EmojiUser = {
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

export const chatReducer = (state = initialState, action: yys_Count): yys_EmojiUser => {
    switch (action.type) {
        case VAVFlyerHiad.VAVHook: {
            return {
                ...state,
                isJoinLiveLoading: true,
                joinLiveErrMsg: null,
                liveRoom: null,
            }
        }
        case VAVFlyerHiad.VAVLibreactnativeblob: {
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
        case VAVFlyerHiad.VAVNews: {
            return {
                ...state,
                isJoinLiveLoading: false,
                joinLiveErrMsg: action.payload,
            }
        }
        case VAVFlyerHiad.VAVDownloading: {
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
        case VAVFlyerHiad.VAVUser: {
            const data: yys_FlipperLibzeus = action.payload;

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
        case VAVFlyerHiad.VAVLibffmpegkit: {
            return {
                ...state,
                isJoinPrivateLoading: true,
                joinPrivateErrMsg: null,
                privateRoom: null,
            }
        }
        case VAVFlyerHiad.VAVNativemoduleEact: {
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
        case VAVFlyerHiad.VAVReminder: {
            return {
                ...state,
                isJoinPrivateLoading: false,
                joinPrivateErrMsg: action.payload,
            }
        }
        case VAVFlyerHiad.VAVMegaphoneBanner: {
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
        case VAVFlyerHiad.VAVBorderlessBackground: {
            const data: yys_FlipperLibzeus = action.payload;

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
