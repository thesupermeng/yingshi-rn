import {
    SELECT_MINI_VOD_COLLECTION_ITEM, SET_FROM_MINI_VOD_COLLECTION_ITEM
} from "@utility/mayi_middleware_apps"
import { mayi_Close } from "@type/mayi_analytic_half"
import { mayi_Runtime, mayi_EmptyGradle } from "@type/mayi_green"

export interface mayi_FileBrightness extends mayi_EmptyGradle {
    timeWatched: number,
    recordedAt: Date,
    episodeWatched: number,
}

export interface mayi_GradlewGoogle {
    fromMiniVodCollectionItemIndex: number,
    miniVodCollectionItemIndex: number,
}

const initialState: mayi_GradlewGoogle = {
    fromMiniVodCollectionItemIndex: 0,
    miniVodCollectionItemIndex: 0,
}

export function miniVodReducer(state = initialState, action: mayi_Close) {
    
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