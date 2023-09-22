import { HIDE_VOD_PLAYER_GUIDE, ACCEPT_PRIVACY_POLICY } from "../../utility/constants"
import { SearchHistoryActionType, SettingsActionType } from "../../types/actionTypes"
import { VodTopicType, VodType } from "../../types/ajaxTypes"

export interface SettingsReducerState {
    showVodPlayerGuide: boolean,
    isAcceptPrivacyPolicy: boolean,
}

const initialState: SettingsReducerState = {
    showVodPlayerGuide: true,
    isAcceptPrivacyPolicy: false,
}

export function settingsReducer(state = initialState, action: SettingsActionType) {
    switch (action.type) {
        case HIDE_VOD_PLAYER_GUIDE:
            return {
                ...state,
                showVodPlayerGuide: false
            };
        case ACCEPT_PRIVACY_POLICY:
            return {
                ...state,
                isAcceptPrivacyPolicy: true,
            };
        default:
            return state
    }
}
