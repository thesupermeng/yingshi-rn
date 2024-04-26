export interface screenActionType {
  type: string;
  payload: string;
}

import { screenModel } from "@type/wawa_rules";

const initialState: screenModel = {
  showEventSplash: true,
  showEventSplashData: [],
  eventSplashLastPageViewTime: undefined,
  screenAction: "",
  screenShow: false,
  loginShow: false,
  resetBottomSheet: false,
  resetInputForm: false,
  navigateToProfile: false,
  sportWatchTime: 0,
  interstitialShow: false,
  isPlayerFullScreen: false,
  adultVideoWatchTime: 0,
  lastSeenNavName: "推荐",
  adultMode: false,
  adultModeDisclaimerShow: false,
  adultModeVipShow: false,
  isOverEighteenAccepted: false,
  watchAnytimeAdultMode: false,
  showAdultTab: false,
  showAdultVipPrivilegeMiniVideo: false,
  showPromotionDialog: false,
  showGuestPurchaseSuccess: false,
  showPurchasePending:false,
  isHomeGuideShown : 'null', 
  isMiniVodGuideShown : false, 
  isPlayGuideShown : false, 
  isPlayGuideShown2 :  false, 
  isSportGuideShown : false, 
  autoSelectSport : false, 
  manualShowPopAds : false, 
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
      if (state.isOverEighteenAccepted) {
        return state;
      } else
        return {
          ...state,
          adultModeDisclaimerShow: true,
        };
    case "hide_adult_mode_disclaimer":
      return {
        ...state,
        adultModeDisclaimerShow: false,
      };
    case "show_adult_mode_vip":
      return {
        ...state,
        adultModeVipShow: true,
      };
    case "hide_adult_mode_vip":
      return {
        ...state,
        adultModeVipShow: false,
      };
    case "enable_adult_mode":
      return {
        ...state,
        adultMode: true,
      };
    case "disable_adult_mode":
      return {
        ...state,
        adultMode: false,
      };
    case "set_last_seen_nav_name":
      return {
        ...state,
        lastSeenNavName: action.payload,
      };
    case "accept_over_eighteen":
      return {
        ...state,
        isOverEighteenAccepted: true,
      };
    case "reset_over_eighteen":
      return {
        ...state,
        isOverEighteenAccepted: false,
      };
    case "enable_watch_anytime_adult_mode":
      console.log("enable wa adult");
      return {
        ...state,
        watchAnytimeAdultMode: true,
      };
    case "disable_watch_anytime_adult_mode":
      console.log("disable wa adult");
      return {
        ...state,
        watchAnytimeAdultMode: false,
      };
    case "set_show_adult_tab":
      return {
        ...state,
        showAdultTab: action.payload,
      };
    case "show_adult_vip_privilege_mini_video":
      return {
        ...state,
        showAdultVipPrivilegeMiniVideo: true,
      };
    case "hide_adult_vip_privilege_mini_video":
      return {
        ...state,
        showAdultVipPrivilegeMiniVideo: false,
      };
    case "set_show_event_splash":
      return {
        ...state,
        showEventSplash: action.payload,
      };

    case "set_show_event_splash_data":
      return {
        ...state,
        showEventSplashData: action.payload,
      };
    case "set_event_splash_last_page_view_time":
      return {
        ...state,
        eventSplashLastPageViewTime: Date.now(),
      }
    case "clear_event_splash_last_page_view_time":
      return {
        ...state,
        eventSplashLastPageViewTime: undefined,
      }
    case "set_show_promotion_dialog":
      return {
        ...state,
        showPromotionDialog: action.payload,
      };
    case "set_show_guest_purchase_success":
      return {
        ...state,
        showGuestPurchaseSuccess: action.payload,
      };
      case "set_show_purchase_pending":
        return {
          ...state,
          showPurchasePending: action.payload,
        };
        
        case "set_is_home_guide_shown":
          return {
            ...state,
            isHomeGuideShown: action.payload,
          };
                  
        case "set_is_mini_vod_guide_shown":
          return {
            ...state,
            isMiniVodGuideShown: action.payload,
          };
                  
        case "set_is_play_guide_shown":
          return {
            ...state,
            isPlayGuideShown: action.payload,
          };
                  
        case "set_is_play_guide_shown_2":
          return {
            ...state,
            isPlayGuideShown2: action.payload,
          };
                  
        case "set_is_sport_guide_shown":
          return {
            ...state,
            isSportGuideShown: action.payload,
          };
                        
        case "set_auto_select_sport":
          return {
            ...state,
            autoSelectSport: action.payload,
          };
            
        case "set_manual_show_pop_ads":
          return {
            ...state,
            manualShowPopAds: action.payload,
          };
    default:
      return state;
  }
}
