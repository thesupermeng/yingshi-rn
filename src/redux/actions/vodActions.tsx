import { ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, GET_VOD_FAVORITES, PLAY_VOD } from "../../constants";
import { VodActionType } from "../../types/actionTypes";
import { VodType } from "../../types/ajaxTypes";

export const addVodToFavorites = (vod: VodType) => (dispatch: (arg0: VodActionType) => any)  => (
    dispatch(
        {
            type: ADD_VOD_TO_FAVORITES,
            payload: vod
        }
    )
)

export const removeVodFromFavorites = (vod: VodType) => (dispatch: (arg0: VodActionType) => any) => (
    dispatch(
        {
            type: REMOVE_VOD_FROM_FAVORITES,
            payload: vod
        }
    )
)

export const playVod = (vod: VodType) => (
    {
        type: PLAY_VOD,
        payload: vod
    }
)
