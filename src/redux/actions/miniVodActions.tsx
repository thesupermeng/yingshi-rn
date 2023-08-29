import {
    SELECT_MINI_VOD_COLLECTION_ITEM, SET_FROM_MINI_VOD_COLLECTION_ITEM
} from "../../utility/constants";

export const selectMiniVodCollection = (index: number = 0) => {
    return {
        type: SELECT_MINI_VOD_COLLECTION_ITEM,
        miniVodCollectionItemIndex: index,
    }
}

export const setFromMiniVodCollection = (index: number = 0) => {
    return {
        type: SET_FROM_MINI_VOD_COLLECTION_ITEM,
        fromMiniVodCollectionItemIndex: index,
    }
}