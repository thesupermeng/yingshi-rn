import {
    SELECT_MINI_VOD_COLLECTION_ITEM, SET_FROM_MINI_VOD_COLLECTION_ITEM
} from "@utility/constants"
import { MiniVodActionType } from "@type/actionTypes"
import { Vod } from "@models";

export interface VodRecordType extends Vod {
    timeWatched: number,
    recordedAt: Date,
    episodeWatched: number,
}

export interface MiniVodReducerState {
    fromMiniVodCollectionItemIndex: number,
    miniVodCollectionItemIndex: number,
}

const initialState: MiniVodReducerState = {
    fromMiniVodCollectionItemIndex: 0,
    miniVodCollectionItemIndex: 0,
}

export function miniVodReducer(state = initialState, action: MiniVodActionType) {
    // console.log(action.miniVodCollectionItemIndex);
    switch (action.type) {
        case SELECT_MINI_VOD_COLLECTION_ITEM: {
            return {
                ...state,
                miniVodCollectionItemIndex: action.miniVodCollectionItemIndex
            };
        }
        case SET_FROM_MINI_VOD_COLLECTION_ITEM: {
            return {
                ...state,
                fromMiniVodCollectionItemIndex: action.fromMiniVodCollectionItemIndex
            };
        }
        default:
            return state
    }
}