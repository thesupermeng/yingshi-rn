import {
    CLEAR_SEARCH_HISTORY, ADD_SEARCH_HISTORY
} from "@utility/constants";

export const clearSearchHistory = () => (
    {
        type: CLEAR_SEARCH_HISTORY
    }
)

export const addSearchHistory = (search: string) => (
    {
        type: ADD_SEARCH_HISTORY,
        payload: search,
    }
)