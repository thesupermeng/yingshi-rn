import { ThunkAction } from 'redux-thunk'

import {
  DARK_THEME, LIGHT_THEME
} from "@utility/n_subs_interstitial";

import { EPrivate, PSmall } from "../fj_prediction_thailand";
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