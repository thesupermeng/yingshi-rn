import { mayi_BaiduHalffieldimage } from '@type/mayi_green';
import { mayi_NavigationCasting, mayi_Root, mayi_Values, mayi_TypeSheet } from '@type/mayi_iconedit_tail';
import { CHAT_BOX_MAX_ITEM } from '@utility/mayi_middleware_apps';

export enum AJEStore {
    AJEIconarrowleft = 'JOIN_LIVE_ROOM',
    AJELibapminsighta = 'JOIN_LIVE_ROOM_SUCCESS',
    AJEBackiconLibapminsighta = 'JOIN_LIVE_ROOM_FAIL',
    AJETypeFirebase = 'LEAVE_LIVE_ROOM',
    AJENewarchdefaultsShoot = 'UPDATE_LIVE_ROOM_MESSAGE',

    AJEDependencyScrollview = 'JOIN_PRIVATE_ROOM',
    AJEPlashAlbum = 'JOIN_PRIVATE_ROOM_SUCCESS',
    AJEUtilsIconpipexpand = 'JOIN_PRIVATE_ROOM_FAIL',
    AJERncoreLogouser = 'LEAVE_PRIVATE_ROOM',
    AJELibswresampleSlider = 'UPDATE_PRIVATE_ROOM_MESSAGE',
}

export type mayi_Unlock = {
    type: AJEStore,
    payload?: any,
}

export type mayi_SportHalffieldimage = {
    isJoinLiveLoading: boolean,
    joinLiveErrMsg: string | null,

    isJoinPrivateLoading: boolean,
    joinPrivateErrMsg: string | null,

    userId: string | null,
    userName: string | null,

    liveRoom: mayi_Root | null,
    liveRoomsHistory: mayi_NavigationCasting[],
    privateRoom: mayi_TypeSheet | null,
    privateRoomHistory: mayi_Values[],
}

const initialState: mayi_SportHalffieldimage = {
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

export const chatReducer = (state = initialState, action: mayi_Unlock): mayi_SportHalffieldimage => {
    switch (action.type) {
        case AJEStore.AJEIconarrowleft: {
            return {
                ...state,
                isJoinLiveLoading: true,
                joinLiveErrMsg: null,
                liveRoom: null,
            }
        }
        case AJEStore.AJELibapminsighta: {
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
        case AJEStore.AJEBackiconLibapminsighta: {
            return {
                ...state,
                isJoinLiveLoading: false,
                joinLiveErrMsg: action.payload,
            }
        }
        case AJEStore.AJETypeFirebase: {
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
        case AJEStore.AJENewarchdefaultsShoot: {
            const data: mayi_BaiduHalffieldimage = action.payload;

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
        case AJEStore.AJEDependencyScrollview: {
            return {
                ...state,
                isJoinPrivateLoading: true,
                joinPrivateErrMsg: null,
                privateRoom: null,
            }
        }
        case AJEStore.AJEPlashAlbum: {
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
        case AJEStore.AJEUtilsIconpipexpand: {
            return {
                ...state,
                isJoinPrivateLoading: false,
                joinPrivateErrMsg: action.payload,
            }
        }
        case AJEStore.AJERncoreLogouser: {
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
        case AJEStore.AJELibswresampleSlider: {
            const data: mayi_BaiduHalffieldimage = action.payload;

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
