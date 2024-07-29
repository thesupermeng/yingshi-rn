import { LiveChatMessageType } from "./ajaxTypes"


export type LiveRoomType = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: LiveChatMessageType[],
}

export type LiveRoomHistoryType = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: LiveChatMessageType[],
}

export type PrivateRoomType = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: LiveChatMessageType[],
}

export type PrivateRoomHistoryType = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: LiveChatMessageType[],
}