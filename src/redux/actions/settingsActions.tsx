import {
    CLEAR_STORAGE_MEMORY, HIDE_VOD_PLAYER_GUIDE
} from "../../utility/constants";

export const clearStorageMemory = () => (
    {
        type: CLEAR_STORAGE_MEMORY,
    }
);

export const hideVodGestureGuide = () => (
    {
        type: HIDE_VOD_PLAYER_GUIDE,
    }
);