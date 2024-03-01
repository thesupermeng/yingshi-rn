import {
    SELECT_MINI_VOD_COLLECTION_ITEM, SET_FROM_MINI_VOD_COLLECTION_ITEM
} from "@utility/yys_ajax_switch"
import { yys_Reminder } from "@type/yys_basketball"
import { yys_BrightnessCopy, yys_Bing } from "@type/yys_libzeus"

export interface yys_CountdownSubmit extends yys_Bing {
    timeWatched: number,
    recordedAt: Date,
    episodeWatched: number,
}

export interface yys_GemfileLibcrashsdk {
    fromMiniVodCollectionItemIndex: number,
    miniVodCollectionItemIndex: number,
}

const initialState: yys_GemfileLibcrashsdk = {
    fromMiniVodCollectionItemIndex: 0,
    miniVodCollectionItemIndex: 0,
}

export function miniVodReducer(state = initialState, action: yys_Reminder) {
    
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