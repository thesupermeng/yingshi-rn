import { VodTopicType, VodType } from "./ajaxTypes"

export interface ThemeActionType {
    type: string
}

export interface VodActionType {
    type: string,
    payload: VodType 
}

export interface VodPlaylistActionType {
    type: string,
    payload: VodTopicType 
}