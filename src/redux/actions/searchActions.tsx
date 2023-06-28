import {
    CLEAR_SEARCH_HISTORY, ADD_SEARCH_HISTORY
} from "../../constants";

export const clearSearchHistory = () => (
    {
        type: CLEAR_SEARCH_HISTORY,
        payload: null
    }
)

export const addSearchHistory = (search: string) => (
    {
        type: ADD_SEARCH_HISTORY,
        payload: search,
    }
)