import { HIDE_VOD_PLAYER_GUIDE } from "../../utility/constants"
import { SearchHistoryActionType, SettingsActionType } from "../../types/actionTypes"
import { VodTopicType, VodType } from "../../types/ajaxTypes"

export interface SettingsReducerState {
    showVodPlayerGuide: boolean,
}

const initialState: SettingsReducerState = {
    showVodPlayerGuide: true
}

export function settingsReducer(state = initialState, action: SettingsActionType) {
    switch (action.type) {
        case HIDE_VOD_PLAYER_GUIDE:
            return {
                showVodPlayerGuide: false
            };
        default:
            return state
    }
}
