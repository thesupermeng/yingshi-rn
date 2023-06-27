import { VodTopicType, VodType } from "./ajaxTypes"

export interface ThemeActionType {
    type: string
}

export interface VodActionType {
    type: string,
    payload:  Array<VodType>
    timeWatched?: number,
    episodeWatched?: number
}

export interface VodPlaylistActionType {
    type: string,
    payload: VodTopicType 
}

export interface SearchHistoryActionType {
    type: string,
    payload: string
}