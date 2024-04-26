import { ADD_SEARCH_HISTORY, REMOVE_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from "@utility/ww_icon"
import { wwZoomInvite } from "@type/ww_bang"
import { wwFirebase, wwControl } from "@type/ww_dycreator_result"

export interface wwRoom {
    history: Array<string>,
}

const initialState: wwRoom = {
    history: []
}

export function searchHistoryReducer(state = initialState, action: wwZoomInvite) {
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
