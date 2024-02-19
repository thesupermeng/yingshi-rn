import { ThunkAction } from 'redux-thunk'

import {
  DARK_THEME, LIGHT_THEME
} from "@utility";

import { yysThemeShrunk, yysIconclosewhiteBaiduads } from "../yys_button_tramini";
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