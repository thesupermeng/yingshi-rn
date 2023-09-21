import {
    CLEAR_STORAGE_MEMORY, 
    HIDE_VOD_PLAYER_GUIDE, 
    ACCEPT_PRIVACY_POLICY,
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

export const acceptPrivacyPolicy = () => (
    {
        type: ACCEPT_PRIVACY_POLICY
    }
);