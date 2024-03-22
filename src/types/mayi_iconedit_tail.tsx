import { mayi_Background } from "./mayi_green"


export type mayi_Root = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: mayi_Background[],
}

export type mayi_NavigationCasting = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: mayi_Background[],
}

export type mayi_TypeSheet = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: mayi_Background[],
}

export type mayi_Values = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: mayi_Background[],
}