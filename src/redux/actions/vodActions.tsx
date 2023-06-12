import { ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, GET_VOD_FAVORITES, PLAY_VOD, TOGGLE_VOD_FAVORITES } from "../../constants";
import { VodActionType } from "../../types/actionTypes";
import { VodType } from "../../types/ajaxTypes";

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
