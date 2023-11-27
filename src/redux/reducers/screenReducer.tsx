export interface screenActionType {
  type: string;
  payload: string;
}

import { screenModel } from "../../types/screenType";

const initialState: screenModel = {
  screenAction: "",
  screenShow: false,
  loginShow: false,
  registerShow: false,
  resetBottomSheet: false,
  resetInputForm: false,
  navigateToProfile: false,
  sportWatchTime: 0,
  interstitialShow: false,
  isPlayerFullScreen: false,
  adultVideoWatchTime: 0,
  lastSeenNavName: '推荐', 
  adultMode: false, 
  adultModeDisclaimerShow: false, 
  adultModeVipShow: false, 
  isOverEighteenAccepted: false
};

export function screenReducer(state = initialState, action: screenActionType) {
  switch (action.type) {
    case "remove_screen_action":
      return {
        ...state,
        screenShow: false,
      };
    case "change_screen_action":
      return {
        ...state,
        screenShow: true,
        screenAction: action.payload,
      };
    case "show_login_action":
      return {
        ...state,
        loginShow: true,
      };
    case "hide_login_action":
      return {
        ...state,
        loginShow: false,
      };
    case "show_register_action":
      return {
        ...state,
        registerShow: true,
      };
    case "hide_register_action":
      return {
        ...state,
        registerShow: false,
      };
    case "hide_bottom_sheet_action":
      return {
        ...state,
        resetBottomSheet: true,
      };
    case "reset_bottom_sheet_action":
      return {
        ...state,
        resetBottomSheet: false,
      };

    case "initial_bottom_sheet_from":
      return {
        ...state,
        resetInputForm: false,
      };
    case "reset_bottom_sheet_form":
      return {
        ...state,
        resetInputForm: true,
      };
    case "navigate_to_profile_screen":
      return {
        ...state,
        navigateToProfile: true,
      };
    case "reset_profile_screen":
      return {
        ...state,
        navigateToProfile: false,
      };
    case "increment_sport_watch_time":
      return {
        ...state,
        sportWatchTime: state.sportWatchTime + 1,
      };
    case "reset_sport_watch_time":
      return {
        ...state,
        sportWatchTime: 0,
      };
    case "interstitial_show":
      return {
        ...state,
        interstitialShow: true,
      };
    case "interstitial_close":
      return {
        ...state,
        interstitialShow: false,
      };
    case "set_player_fullscreen":
      return {
        ...state,
        isPlayerFullScreen: action.payload,
      };
      
    case "increment_adult_video_watch_time":
      return {
        ...state,
        adultVideoWatchTime: state.adultVideoWatchTime + 1,
      };
    case "reset_adult_video_watch_time":
      return {
        ...state,
        adultVideoWatchTime: 0,
      };
    case "show_adult_mode_disclaimer": 
      return {
        ...state, 
        adultModeDisclaimerShow: true
      }
    case "hide_adult_mode_disclaimer": 
      return {
        ...state, 
        adultModeDisclaimerShow: false
      }
    case "show_adult_mode_vip": 
      return {
        ...state, 
        adultModeVipShow: true
      }
    case "hide_adult_mode_vip": 
      return {
        ...state, 
        adultModeVipShow: false
      }
    case "enable_adult_mode": 
      return {
        ...state, 
        adultMode: true
      }
    case "disable_adult_mode": 
      return {
        ...state, 
        adultMode: false
      }
    case "set_last_seen_nav_name": 
      return {
        ...state, 
        lastSeenNavName: action.payload
      }
    case "accept_over_eighteen": 
      return {
        ...state, 
        isOverEighteenAccepted: true
      }
    case "reset_over_eighteen":
      return {
        ...state, 
        isOverEighteenAccepted: false
      }
    default:
      return state;
  }
}
