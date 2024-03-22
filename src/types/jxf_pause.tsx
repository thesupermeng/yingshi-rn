import { NETempEmoji } from "./wpk_long"


export type DFEFieldRead = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: NETempEmoji[],
}

export type KCollection = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: NETempEmoji[],
}

export type IMLRenewCarousel = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: NETempEmoji[],
}

export type EHWPlashLight = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: NETempEmoji[],
}