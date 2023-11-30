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

export const showRegisterAction = () => ({
  type: "show_register_action",
});

export const hideRegisterAction = () => ({
  type: "hide_register_action",
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
  type: "increment_adult_video_watch_time"
})

export const resetAdultVideoWatchTime = () => ({
  type: "reset_adult_video_watch_time"
})

export const showAdultModeDisclaimer = () => ({
  type: "show_adult_mode_disclaimer"
})

export const hideAdultModeDisclaimer = () => ({
  type: "hide_adult_mode_disclaimer"
})

export const showAdultModeVip = () => ({
  type: "show_adult_mode_vip"
})

export const hideAdultModeVip = () => ({
  type: "hide_adult_mode_vip"
})

export const enableAdultMode = () => ({
  type: "enable_adult_mode"
})

export const disableAdultMode = () => ({
  type: "disable_adult_mode"
})

export const updateLastSeenNavName = (action: string) => ({
  type: 'set_last_seen_nav_name', 
  payload: action
})

export const acceptOverEighteen = () => ({
  type: "accept_over_eighteen"
})

export const resetOverEighteen = () => ({
  type: 'reset_over_eighteen'
})

export const enableWatchAnytimeAdultMode = () => ({
  type: 'enable_watch_anytime_adult_mode'
})

export const disableWatchAnytimeAdultMode = () => ({
  type: 'disable_watch_anytime_adult_mode'
})