import { ThunkAction } from 'redux-thunk'

import {
  DARK_THEME, LIGHT_THEME
} from "@utility/constants";

import { AppDispatchType, RootState } from "../store";
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