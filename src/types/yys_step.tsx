import { yys_TooltipsKlevin } from "./yys_libzeus"


export type yys_PageDownloading = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: yys_TooltipsKlevin[],
}

export type yys_Bell = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: yys_TooltipsKlevin[],
}

export type yys_Shrink = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: yys_TooltipsKlevin[],
}

export type yys_Transfer = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: yys_TooltipsKlevin[],
}