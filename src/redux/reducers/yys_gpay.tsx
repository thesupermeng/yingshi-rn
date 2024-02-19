import { yysTemplate } from '@type';
import { yysNotificationfillempty, yysIconwatchnowIconsharefriends, yysBecome, yysAjax } from '@type';
import { CHAT_BOX_MAX_ITEM } from '@utility';

export enum IApplication {
    IRewindChatroombackground = 'JOIN_LIVE_ROOM',
    ICornerkick = 'JOIN_LIVE_ROOM_SUCCESS',
    IFavoriteIconarrowrightwhite = 'JOIN_LIVE_ROOM_FAIL',
    IManager = 'LEAVE_LIVE_ROOM',
    IIconlogoutLargebrightness = 'UPDATE_LIVE_ROOM_MESSAGE',

    IQuesticonMbbanner = 'JOIN_PRIVATE_ROOM',
    IFiled = 'JOIN_PRIVATE_ROOM_SUCCESS',
    IAwayplayer = 'JOIN_PRIVATE_ROOM_FAIL',
    ILibswscaleAnner = 'LEAVE_PRIVATE_ROOM',
    IShielddoneTrash = 'UPDATE_PRIVATE_ROOM_MESSAGE',
}

export type yysComponentregistry = {
    type: IApplication,
    payload?: any,
}

export type yysForward = {
    isJoinLiveLoading: boolean,
    joinLiveErrMsg: string | null,

    isJoinPrivateLoading: boolean,
    joinPrivateErrMsg: string | null,

    userId: string | null,
    userName: string | null,

    liveRoom: yysIconwatchnowIconsharefriends | null,
    liveRoomsHistory: yysNotificationfillempty[],
    privateRoom: yysAjax | null,
    privateRoomHistory: yysBecome[],
}

const initialState: yysForward = {
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

export const chatReducer = (state = initialState, action: yysComponentregistry): yysForward => {
    switch (action.type) {
        case IApplication.IRewindChatroombackground: {
            return {
                ...state,
                isJoinLiveLoading: true,
                joinLiveErrMsg: null,
                liveRoom: null,
            }
        }
        case IApplication.ICornerkick: {
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
        case IApplication.IFavoriteIconarrowrightwhite: {
            return {
                ...state,
                isJoinLiveLoading: false,
                joinLiveErrMsg: action.payload,
            }
        }
        case IApplication.IManager: {
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
        case IApplication.IIconlogoutLargebrightness: {
            const data: yysTemplate = action.payload;

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
        case IApplication.IQuesticonMbbanner: {
            return {
                ...state,
                isJoinPrivateLoading: true,
                joinPrivateErrMsg: null,
                privateRoom: null,
            }
        }
        case IApplication.IFiled: {
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
        case IApplication.IAwayplayer: {
            return {
                ...state,
                isJoinPrivateLoading: false,
                joinPrivateErrMsg: action.payload,
            }
        }
        case IApplication.ILibswscaleAnner: {
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
        case IApplication.IShielddoneTrash: {
            const data: yysTemplate = action.payload;

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
