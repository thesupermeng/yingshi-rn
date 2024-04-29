import {
    CLEAR_SEARCH_HISTORY, ADD_SEARCH_HISTORY
} from "@utility/tt_trophy_cross";

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