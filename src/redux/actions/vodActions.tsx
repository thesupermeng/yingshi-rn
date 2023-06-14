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

export const toggleVodFavorites = (vod: VodType) => (
    {
        type: TOGGLE_VOD_FAVORITES,
        payload: vod
    }
)

export const playVod = (vod: VodType) => (
    {
        type: PLAY_VOD,
        payload: vod
    }
)

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

export const addVodToHistory = (vod: VodType) => (
    {
        type: ADD_VOD_TO_HISTORY,
        payload: vod
    }
)

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