import { ADD_SEARCH_HISTORY, REMOVE_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY } from "@utility"
import { yysChart } from "@type"
import { yysArrowup, yysPenaltyshoot } from "@type"

export interface yysBecomeEighteen {
    history: Array<string>,
}

const initialState: yysBecomeEighteen = {
    history: []
}

export function searchHistoryReducer(state = initialState, action: yysChart) {
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