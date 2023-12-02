import { VodTopicType, VodType } from "./ajaxTypes"

export interface ThemeActionType {
    type: string
}

export interface VodActionType {
    type: string,
    payload: Array<VodType>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
}

export interface FavoriteVodActionType {
    type: string,
    payload: VodType
}

export interface VodPlaylistActionType {
    type: string,
    payload: VodTopicType
}

export interface SearchHistoryActionType {
    type: string,
    payload: string
}

export interface ClearStorageActionType {
    type: string
}

export interface SettingsActionType {
    type: string,
    payload?: any
}

export interface MiniVodActionType {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface OneTimeActionActionType {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}