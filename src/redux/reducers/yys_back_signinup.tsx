import { ADD_SEARCH_HISTORY, REMOVE_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from "@utility/yys_ajax_switch"
import { yys_MiniOverlay } from "@type/yys_basketball"
import { yys_BrightnessCopy, yys_Bing } from "@type/yys_libzeus"

export interface yys_LibturbomodulejsijniNativemodule {
    history: Array<string>,
}

const initialState: yys_LibturbomodulejsijniNativemodule = {
    history: []
}

export function searchHistoryReducer(state = initialState, action: yys_MiniOverlay) {
    switch (action.type) {
        case CLEAR_SEARCH_HISTORY:
            return {
                history: []
            };
        case ADD_SEARCH_HISTORY: {
            const hst = state.history.filter(hst => hst !== action.payload).slice(0, 8);
            hst.unshift(action.payload);
            return {
                history: hst
            };
        }
        case REMOVE_SEARCH_HISTORY:
            return {
                history: state.history.filter(hst => hst !== action.payload),
            };
        default:
            return state
    }
}
