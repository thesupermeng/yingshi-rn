import { HIDE_VOD_PLAYER_GUIDE, ACCEPT_PRIVACY_POLICY, HANDLE_APP_ORIENTATION, HANDLE_DEVICES_ORIENTATION, LOCK_ORIENTATION, UPDATE_NETWORK_INFO } from "@utility/wawa_iconpointscore"
import { wawaChinasameIncident, wawaSubsFlag } from "@type/wawa_reward_logo"
import { wawaWithCrown, wawaSellProfileinactive } from "@type/wawa_gradlew"
import Orientation, { OrientationType } from "react-native-orientation-locker";

export interface wawaBackground {
    showVodPlayerGuide: boolean,
    isAcceptPrivacyPolicy: boolean,
    appOrientation: OrientationType,
    devicesOrientation: OrientationType,
    isAppOrientationChanged: boolean,
    isOffline: boolean;
}

const initialState: wawaBackground = {
    showVodPlayerGuide: true,
    isAcceptPrivacyPolicy: false,
    appOrientation: OrientationType.PORTRAIT,
    devicesOrientation: OrientationType.PORTRAIT,
    isAppOrientationChanged: false,
    isOffline: false,
}

export function settingsReducer(state = initialState, action: wawaSubsFlag) {
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

            switch (action.payload) {
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
                    if (state.devicesOrientation === 'LANDSCAPE-RIGHT') {
                        Orientation.lockToLandscapeRight();
                        orientation = 'LANDSCAPE-RIGHT'
                    } else {
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
        case UPDATE_NETWORK_INFO:
            return {
                ...state,
                isOffline: !(action.payload?.isConnected && ((action.payload?.isInternetReachable === true || action.payload?.isInternetReachable === null) ? true : false)),
            }
            
        default:
            return state
    }
}