import { ThunkAction } from 'redux-thunk'

import {
  DARK_THEME, LIGHT_THEME
} from "@utility/yys_ajax_switch";

import { yys_FootballBackground, yys_MintegralLibavdevice } from "../yys_sport_shrink";
export const toggleDarkTheme = () => ({
  type: DARK_THEME,
});
export const toggleLightTheme = () => ({
  type: LIGHT_THEME,
});

export const toggleTheme = (theme: boolean) => {
  if (theme === true) {
    return toggleDarkTheme();
  } else {
    return toggleLightTheme();
  }
}