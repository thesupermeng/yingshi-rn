import { GET_VOD_FAVORITES, ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, PLAY_VOD } from "../../constants"
import { VodActionType } from "../../types/actionTypes"
import { VodType } from "../../types/ajaxTypes"

interface VodProps {
    favorites: Array<VodType>,
    history: Array<VodType>,
}
const initialState: VodProps = {
    favorites: [],
    history: []
}

export function vodReducer(state = initialState, action: VodActionType) {
    switch (action.type) {
        case GET_VOD_FAVORITES:
            return { ...state, favorites: action.payload }
        case ADD_VOD_TO_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.payload] }
        case REMOVE_VOD_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(vod => vod.vod_id !== action.payload.vod_id)
            };
        default:
            return state
    }
}

interface PlayVodType {
    vod: VodType | null
}

const initial_vod_play : PlayVodType = {
    vod: null
}

export function playVodReducer(state = initial_vod_play, action: VodActionType) : PlayVodType{
    switch (action.type) {
        case PLAY_VOD:
            return {vod: action.payload};
        default:
            return state;
    }
}