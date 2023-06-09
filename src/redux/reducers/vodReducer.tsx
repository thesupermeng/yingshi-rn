import { GET_VOD_FAVORITES, ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, PLAY_VOD, TOGGLE_VOD_FAVORITES } from "../../constants"
import { VodActionType } from "../../types/actionTypes"
import { VodType } from "../../types/ajaxTypes"

interface PlayVodType {
    vod: VodType | null,
    isFavorite: boolean
}

export interface VodReducerState {
    favorites: Array<VodType>,
    history: Array<VodType>,
    playVod: PlayVodType,
}

const initialState: VodReducerState = {
    favorites: [],
    history: [],
    playVod: {
        vod: null,
        isFavorite: true
    }
}

export function vodReducer(state = initialState, action: VodActionType) {
    switch (action.type) {
        case PLAY_VOD:
            return {
                ...state,
                playVod: {
                    vod: action.payload,
                    isFavorite: initialState.favorites.some(x => x.vod_id === action.payload.vod_id)
                }
            };
        case TOGGLE_VOD_FAVORITES:
            let new_fav = [];
            let isVodFavorite = false;
            if (state.favorites.some(vod => vod.vod_id === action.payload.vod_id)) {
                new_fav = state.favorites.filter(vod => vod.vod_id !== action.payload.vod_id);
            } else {
                new_fav = [action.payload, ...state.favorites];
                isVodFavorite = true;
            }
            return {
                ...state, favorites: new_fav, playVod: {
                    vod: action.payload,
                    isFavorite: isVodFavorite
                }
            };
        case GET_VOD_FAVORITES:
            return { ...state, favorites: action.payload }
        case ADD_VOD_TO_FAVORITES:
            return {
                ...state, favorites: [action.payload, ...state.favorites], playVod: {
                    vod: action.payload,
                    isFavorite: true
                }
            };
        case REMOVE_VOD_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(vod => vod.vod_id !== action.payload.vod_id),
                playVod: {
                    vod: action.payload,
                    isFavorite: false
                }
            };
        default:
            return state
    }
}