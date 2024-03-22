import { ADD_SEARCH_HISTORY, REMOVE_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from "@utility/n_subs_interstitial"
import { YJHMegaphone } from "@type/qkf_bell"
import { RBEmojiEwarded, XVSScoreDark } from "@type/wpk_long"

export interface UCompleteLock {
    history: Array<string>,
}

const initialState: UCompleteLock = {
    history: []
}

export function searchHistoryReducer(state = initialState, action: YJHMegaphone) {
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
