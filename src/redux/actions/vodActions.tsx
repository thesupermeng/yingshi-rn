import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, CLEAR_HISTORY, PLAY_VOD, TOGGLE_VOD_FAVORITES, SELECT_MINI_VOD_COLLECTION_ITEM,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, REMOVE_VOD_HISTORY
} from "@utility";
import { VodActionType } from "@type";
import { VodSourceType, VodTopicType, VodType } from "@type";

export const addVodToFavorites = (vod: VodType, playMode: 'adult' | 'normal' = 'normal') => {
    console.debug('playmode added', playMode)
    return (
        {
            type: ADD_VOD_TO_FAVORITES,
            payload: { ...vod, playMode: playMode },
            playMode: playMode
        }
    )
}
export const removeVodFromFavorites = (vod: VodType) => (
    {
        type: REMOVE_VOD_FROM_FAVORITES,
        payload: vod
    }
)

// export const toggleVodFavorites = (vod: VodType) => (
//     {
//         type: TOGGLE_VOD_FAVORITES,
//         payload: [vod]
//     }
// )

export const playVod = (vod: VodType, timeWatched?: number, episodeToPlay?: number, vodSourceId?: number) => {
    return {
        type: PLAY_VOD,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeToPlay,
        vodSourceId: vodSourceId
    }
}

export const togglePlaylistFavorites = (playlist: VodTopicType) => (
    {
        type: TOGGLE_PLAYLIST_FAVORITES,
        payload: playlist
    }
)

export const viewPlaylistDetails = (playlist: VodTopicType) => (
    {
        type: VIEW_PLAYLIST,
        payload: playlist
    }
)

export const addVodToHistory = (vod: VodType, timeWatched: number, episodeWatched: number = 0, isAdultMode = false, vodSourceId: number = 0) => {
    return {
        type: ADD_VOD_TO_HISTORY,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeWatched,
        isAdultVideo: isAdultMode,
        vodSourceId: vodSourceId
    }
}

export const removeVodsFromHistory = (vods: Array<VodType>) => (
    {
        type: REMOVE_VOD_HISTORY,
        payload: vods
    }
)

export const clearHistory = () => (
    {
        type: CLEAR_HISTORY,
        payload: null
    }
)