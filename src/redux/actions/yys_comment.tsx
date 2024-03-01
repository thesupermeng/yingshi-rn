import {
    CLEAR_STORAGE_MEMORY, HIDE_VOD_PLAYER_GUIDE, ACCEPT_PRIVACY_POLICY, HANDLE_APP_ORIENTATION, HANDLE_DEVICES_ORIENTATION, LOCK_ORIENTATION, UPDATE_NETWORK_INFO
} from "@utility/yys_ajax_switch";

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

export const handleAppOrientation = (orientation: string) => (
    {
        type: HANDLE_APP_ORIENTATION,
        payload: orientation,
    }
);

export const handleDevicesOrientation = (orientation: string) => (
    {
        type: HANDLE_DEVICES_ORIENTATION,
        payload: orientation,
    }
);

export const lockAppOrientation = (orientation: string) => (
    {
        type: LOCK_ORIENTATION,
        payload: orientation,
    }
)

export const updateNetworkInfo = (state: any) => (
    {
        type: UPDATE_NETWORK_INFO,
        payload: state,
    }
)