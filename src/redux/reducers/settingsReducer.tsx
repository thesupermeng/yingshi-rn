import { HIDE_VOD_PLAYER_GUIDE, ACCEPT_PRIVACY_POLICY, HANDLE_APP_ORIENTATION, HANDLE_DEVICES_ORIENTATION, LOCK_ORIENTATION } from "../../utility/constants"
import { SearchHistoryActionType, SettingsActionType } from "../../types/actionTypes"
import { VodTopicType, VodType } from "../../types/ajaxTypes"
import Orientation, { OrientationType } from "react-native-orientation-locker";

export interface SettingsReducerState {
    showVodPlayerGuide: boolean,
    isAcceptPrivacyPolicy: boolean,
    appOrientation: OrientationType,
    devicesOrientation: OrientationType,
    isAppOrientationChanged: boolean, 
}

const initialState: SettingsReducerState = {
    showVodPlayerGuide: true,
    isAcceptPrivacyPolicy: false,
    appOrientation: OrientationType.PORTRAIT,
    devicesOrientation: OrientationType.PORTRAIT,
    isAppOrientationChanged: false,
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
        case HANDLE_APP_ORIENTATION:
            return {
                ...state,
                isAppOrientationChanged: true,
                appOrientation: action.payload
            };
        case HANDLE_DEVICES_ORIENTATION:
            return {
                ...state,
                isAppOrientationChanged: false,
                devicesOrientation: action.payload,
            };
        case LOCK_ORIENTATION:
            let orientation: string = state.appOrientation;

            orientation = action.payload!;
            
            switch(action.payload){
                case 'PORTRAIT':
                case 'PORTRAIT-UPSIDEDOWN':
                    Orientation.lockToPortrait();
                    break;
                case 'LANDSCAPE-LEFT':
                    Orientation.lockToLandscapeLeft();
                    break;
                case 'LANDSCAPE-RIGHT':
                    Orientation.lockToLandscapeRight();
                    break;
                case 'LANDSCAPE':
                    if(state.devicesOrientation === 'LANDSCAPE-RIGHT'){
                        Orientation.lockToLandscapeRight();
                        orientation = 'LANDSCAPE-RIGHT'
                    }else{
                        Orientation.lockToLandscapeLeft();
                        orientation = 'LANDSCAPE-LEFT'
                    }
                    break;
            }

            return {
                ...state,
                isAppOrientationChanged: true,
                appOrientation: orientation,
            }
        default:
            return state
    }
}
