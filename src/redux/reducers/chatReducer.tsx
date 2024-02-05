import { LiveChatRoomType } from '@type/ajaxTypes';
import { LiveRoomHistoryType, LiveRoomType, PrivateRoomHistoryType, PrivateRoomType } from '@type/chatTypes';
import { CHAT_BOX_MAX_ITEM } from '@utility/constants';

export enum ChatActionEventType {
    JOIN_LIVE_ROOM = 'JOIN_LIVE_ROOM',
    JOIN_LIVE_ROOM_SUCCESS = 'JOIN_LIVE_ROOM_SUCCESS',
    JOIN_LIVE_ROOM_FAIL = 'JOIN_LIVE_ROOM_FAIL',
    LEAVE_LIVE_ROOM = 'LEAVE_LIVE_ROOM',
    UPDATE_LIVE_ROOM_MESSAGE = 'UPDATE_LIVE_ROOM_MESSAGE',

    JOIN_PRIVATE_ROOM = 'JOIN_PRIVATE_ROOM',
    JOIN_PRIVATE_ROOM_SUCCESS = 'JOIN_PRIVATE_ROOM_SUCCESS',
    JOIN_PRIVATE_ROOM_FAIL = 'JOIN_PRIVATE_ROOM_FAIL',
    LEAVE_PRIVATE_ROOM = 'LEAVE_PRIVATE_ROOM',
    UPDATE_PRIVATE_ROOM_MESSAGE = 'UPDATE_PRIVATE_ROOM_MESSAGE',
}

export type ChatActionType = {
    type: ChatActionEventType,
    payload?: any,
}

export type ChatType = {
    isJoinLiveLoading: boolean,
    joinLiveErrMsg: string | null,

    isJoinPrivateLoading: boolean,
    joinPrivateErrMsg: string | null,

    userId: string | null,
    userName: string | null,

    liveRoom: LiveRoomType | null,
    liveRoomsHistory: LiveRoomHistoryType[],
    privateRoom: PrivateRoomType | null,
    privateRoomHistory: PrivateRoomHistoryType[],
}

const initialState: ChatType = {
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

export const chatReducer = (state = initialState, action: ChatActionType): ChatType => {
    switch (action.type) {
        case ChatActionEventType.JOIN_LIVE_ROOM: {
            return {
                ...state,
                isJoinLiveLoading: true,
                joinLiveErrMsg: null,
                liveRoom: null,
            }
        }
        case ChatActionEventType.JOIN_LIVE_ROOM_SUCCESS: {
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
        case ChatActionEventType.JOIN_LIVE_ROOM_FAIL: {
            return {
                ...state,
                isJoinLiveLoading: false,
                joinLiveErrMsg: action.payload,
            }
        }
        case ChatActionEventType.LEAVE_LIVE_ROOM: {
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
        case ChatActionEventType.UPDATE_LIVE_ROOM_MESSAGE: {
            const data: LiveChatRoomType = action.payload;

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
        case ChatActionEventType.JOIN_PRIVATE_ROOM: {
            return {
                ...state,
                isJoinPrivateLoading: true,
                joinPrivateErrMsg: null,
                privateRoom: null,
            }
        }
        case ChatActionEventType.JOIN_PRIVATE_ROOM_SUCCESS: {
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
        case ChatActionEventType.JOIN_PRIVATE_ROOM_FAIL: {
            return {
                ...state,
                isJoinPrivateLoading: false,
                joinPrivateErrMsg: action.payload,
            }
        }
        case ChatActionEventType.LEAVE_PRIVATE_ROOM: {
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
        case ChatActionEventType.UPDATE_PRIVATE_ROOM_MESSAGE: {
            const data: LiveChatRoomType = action.payload;

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
