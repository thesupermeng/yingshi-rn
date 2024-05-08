import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, CLEAR_HISTORY, PLAY_VOD, TOGGLE_VOD_FAVORITES, SELECT_MINI_VOD_COLLECTION_ITEM,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, REMOVE_VOD_HISTORY
} from "@utility/constants";
import { VodActionType } from "@type/actionTypes";
import { PlayList, Vod } from "@models";

export const addVodToFavorites = (vod: Vod, playMode: 'adult' | 'normal' = 'normal') => {
    console.debug('playmode added', playMode)
    return (
        {
            type: ADD_VOD_TO_FAVORITES,
            payload: { ...vod, playMode: playMode },
            playMode: playMode
        }
    )
}
export const removeVodFromFavorites = (vod: Vod) => (
    {
        type: REMOVE_VOD_FROM_FAVORITES,
        payload: vod
    }
)

// export const toggleVodFavorites = (vod: Vod) => (
//     {
//         type: TOGGLE_VOD_FAVORITES,
//         payload: [vod]
//     }
// )

export const playVod = (vod: Vod, timeWatched?: number, episodeToPlay?: number, vodSourceId?: number) => {
    return {
        type: PLAY_VOD,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeToPlay,
        vodSourceId: vodSourceId
    }
}

export const togglePlaylistFavorites = (playlist: PlayList) => (
    {
        type: TOGGLE_PLAYLIST_FAVORITES,
        payload: playlist
    }
)

export const viewPlaylistDetails = (playlist: PlayList) => (
    {
        type: VIEW_PLAYLIST,
        payload: playlist
    }
)

export const addVodToHistory = (vod: Vod, timeWatched: number, episodeWatched: number = 0, isAdultMode = false, vodSourceId: number = 0) => {
    return {
        type: ADD_VOD_TO_HISTORY,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeWatched,
        isAdultVideo: isAdultMode,
        vodSourceId: vodSourceId
    }
}

export const removeVodsFromHistory = (vods: Vod[]) => (
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