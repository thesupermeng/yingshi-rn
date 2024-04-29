import { ADD_SEARCH_HISTORY, REMOVE_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from "@utility/tt_trophy_cross"
import { ttBodanMacau } from "@type/tt_history_upload"
import { ttSport, ttAppsOther } from "@type/tt_line_borderless"

export interface ttHumidity {
    history: Array<string>,
}

const initialState: ttHumidity = {
    history: []
}

export function searchHistoryReducer(state = initialState, action: ttBodanMacau) {
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
