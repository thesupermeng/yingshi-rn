import { ttResult } from "./tt_line_borderless"


export type ttKuaishou = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: ttResult[],
}

export type ttPagePolicy = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: ttResult[],
}

export type ttPrivateMini = {
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: ttResult[],
}

export type ttAccepted = {
    userId: string | null,
    isJoin: boolean,
    joinDate: string | null,
    roomId: string,
    messages: ttResult[],
}