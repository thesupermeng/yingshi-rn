import { ADD_SEARCH_HISTORY, REMOVE_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from "@utility/wawa_iconpointscore"
import { wawaChinasameIncident } from "@type/wawa_reward_logo"
import { wawaWithCrown, wawaSellProfileinactive } from "@type/wawa_gradlew"

export interface wawaEncrypt {
    history: Array<string>,
}

const initialState: wawaEncrypt = {
    history: []
}

export function searchHistoryReducer(state = initialState, action: wawaChinasameIncident) {
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
