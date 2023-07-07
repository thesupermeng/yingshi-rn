import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, CLEAR_HISTORY, PLAY_VOD, TOGGLE_VOD_FAVORITES,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, REMOVE_VOD_HISTORY
} from "../../constants";
import { VodActionType } from "../../types/actionTypes";
import { VodTopicType, VodType } from "../../types/ajaxTypes";

export const addVodToFavorites = (vod: VodType) => (
    {
        type: ADD_VOD_TO_FAVORITES,
        payload: vod
    }
)

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

export const playVod = (vod: VodType, timeWatched: number = 0, episodeToPlay: number = 0) => {
    return {
        type: PLAY_VOD,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeToPlay
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

export const addVodToHistory = (vod: VodType, timeWatched: number, episodeWatched: number = 0) => {
    return {
        type: ADD_VOD_TO_HISTORY,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeWatched
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