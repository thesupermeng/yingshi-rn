import {
    SELECT_MINI_VOD_COLLECTION_ITEM, SET_FROM_MINI_VOD_COLLECTION_ITEM
} from "@utility/n_subs_interstitial"
import { ETheme } from "@type/qkf_bell"
import { RBEmojiEwarded, XVSScoreDark } from "@type/wpk_long"

export interface VFMode extends XVSScoreDark {
    timeWatched: number,
    recordedAt: Date,
    episodeWatched: number,
}

export interface TLYWhatsapp {
    fromMiniVodCollectionItemIndex: number,
    miniVodCollectionItemIndex: number,
}

const initialState: TLYWhatsapp = {
    fromMiniVodCollectionItemIndex: 0,
    miniVodCollectionItemIndex: 0,
}

export function miniVodReducer(state = initialState, action: ETheme) {
    
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