import {
    SELECT_MINI_VOD_COLLECTION_ITEM, SET_FROM_MINI_VOD_COLLECTION_ITEM
} from "@utility/wawa_iconpointscore"
import { wawaWifirouter } from "@type/wawa_reward_logo"
import { wawaWithCrown, wawaSellProfileinactive } from "@type/wawa_gradlew"

export interface wawaGuideSelect extends wawaSellProfileinactive {
    timeWatched: number,
    recordedAt: Date,
    episodeWatched: number,
}

export interface wawaPrediction {
    fromMiniVodCollectionItemIndex: number,
    miniVodCollectionItemIndex: number,
}

const initialState: wawaPrediction = {
    fromMiniVodCollectionItemIndex: 0,
    miniVodCollectionItemIndex: 0,
}

export function miniVodReducer(state = initialState, action: wawaWifirouter) {
    
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