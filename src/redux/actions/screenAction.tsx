// dont use constants first to prevent conflict in other file

// export const showScreenAction = (action: boolean) => ({
//   type: 'show_screen_action',
//   payload: action,
// });

export const changeScreenAction = (action: string) => ({
  type: "change_screen_action",
  payload: action,
});

export const removeScreenAction = () => ({
  type: "remove_screen_action",
});

export const showLoginAction = () => ({
  type: "show_login_action",
});

export const hideLoginAction = () => ({
  type: "hide_login_action",
});

export const hideBottomSheetAction = () => ({
  type: "hide_bottom_sheet_action",
});
export const resetBottomSheetAction = () => ({
  type: "reset_bottom_sheet_action",
});

export const resetBottomSheetForm = () => ({
  type: "reset_bottom_sheet_form",
});
export const initialBottomSheetForm = () => ({
  type: "initial_bottom_sheet_from",
});

export const navigateToProfileScreen = () => ({
  type: "navigate_to_profile_screen",
});

export const resetProfileScreen = () => ({
  type: "reset_profile_screen",
});

export const incrementSportWatchTime = () => ({
  type: "increment_sport_watch_time",
});

export const resetSportWatchTime = () => ({
  type: "reset_sport_watch_time",
});

export const interstitialShow = () => ({
  type: "interstitial_show",
});

export const interstitialClose = () => ({
  type: "interstitial_close",
});

export const setFullscreenState = (action: boolean) => ({
  type: "set_player_fullscreen",
  payload: action,
});

export const incrementAdultVideoWatchTime = () => ({
  type: "increment_adult_video_watch_time",
});

export const resetAdultVideoWatchTime = () => ({
  type: "reset_adult_video_watch_time",
});

export const showAdultModeDisclaimer = () => ({
  type: "show_adult_mode_disclaimer",
});

export const hideAdultModeDisclaimer = () => ({
  type: "hide_adult_mode_disclaimer",
});

export const showAdultModeVip = () => ({
  type: "show_adult_mode_vip",
});

export const hideAdultModeVip = () => ({
  type: "hide_adult_mode_vip",
});

export const enableAdultMode = () => ({
  type: "enable_adult_mode",
});

export const disableAdultMode = () => ({
  type: "disable_adult_mode",
});

export const updateLastSeenNavName = (action: string) => ({
  type: "set_last_seen_nav_name",
  payload: action,
});

export const acceptOverEighteen = () => ({
  type: "accept_over_eighteen",
});

export const resetOverEighteen = () => ({
  type: "reset_over_eighteen",
});

export const enableWatchAnytimeAdultMode = () => ({
  type: "enable_watch_anytime_adult_mode",
});

export const disableWatchAnytimeAdultMode = () => ({
  type: "disable_watch_anytime_adult_mode",
});

export const setShowAdultTab = (action: boolean) => ({
  type: "set_show_adult_tab",
  payload: action,
});

export const showAdultVipPrivilegeMiniVideoAction = () => ({
  type: "show_adult_vip_privilege_mini_video",
});

export const hideAdultVipPrivilegeMiniVideoAction = () => ({
  type: "hide_adult_vip_privilege_mini_video",
});

export const setShowEventSplash = (action: boolean) => ({
  type: "set_show_event_splash",
  payload: action,
});

export const setShowEventSplashData = (action: any) => ({
  type: "set_show_event_splash_data",
  payload: action,
});

export const setEventSplashLastPageViewTime = () => ({
  type: "set_event_splash_last_page_view_time",
});

export const clearEventSplashLastPageViewTime = () => ({
  type: "clear_event_splash_last_page_view_time",
});

export const setShowPromotionDialog = (action: any) => ({
  type: "set_show_promotion_dialog",
  payload: action,
});
export const setShowGuestPurchaseSuccess = (action: any) => ({
  type: "set_show_guest_purchase_success",
  payload: action,
});

export const setShowPurchasePending = (action: any) => ({
  type: "set_show_purchase_pending",
  payload: action,
});


// 1
export const setIsHomeGuideShown = (action: any) => ({
  type: "set_is_home_guide_shown",
  payload: action,
});

// 2
export const setIsMiniVodGuideShown = (action: any) => ({
  type: "set_is_mini_vod_guide_shown",
  payload: action,
});

// 3
export const setIsPlayGuideShown = (action: any) => ({
  type: "set_is_play_guide_shown",
  payload: action,
});

// 4
export const setIsPlayGuideShown2 = (action: any) => ({
  type: "set_is_play_guide_shown_2",
  payload: action,
});

// 5
export const setIsSportGuideShown = (action: any) => ({
  type: "set_is_sport_guide_shown",
  payload: action,
});


// 6
export const setAutoSelectSport = (action: any) => ({
  type: "set_auto_select_sport",
  payload: action,
});


// 7
export const setManualShowPopAds = (action: any) => ({
  type: "set_manual_show_pop_ads",
  payload: action,
});
