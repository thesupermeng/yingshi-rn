import {
    SELECT_MINI_VOD_COLLECTION_ITEM, SET_FROM_MINI_VOD_COLLECTION_ITEM
} from "@utility/constants"
import { MiniVodActionType } from "../../types/actionTypes"
import { VodTopicType, VodType } from "../../types/ajaxTypes"

export interface VodRecordType extends VodType {
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