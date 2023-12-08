import { ADD_SEARCH_HISTORY, REMOVE_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from "@utility/constants"
import { SearchHistoryActionType } from "../../types/actionTypes"
import { VodTopicType, VodType } from "../../types/ajaxTypes"

export interface SearchHistoryState {
    history: Array<string>,
}

const initialState: SearchHistoryState = {
    history: []
}

export function searchHistoryReducer(state = initialState, action: SearchHistoryActionType) {
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
