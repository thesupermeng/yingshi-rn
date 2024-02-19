import { yysEyeopen } from "./yys_ajax"


export type yysIconwatchnowIconsharefriends = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: yysEyeopen[],
}

export type yysNotificationfillempty = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: yysEyeopen[],
}

export type yysAjax = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: yysEyeopen[],
}

export type yysBecome = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: yysEyeopen[],
}