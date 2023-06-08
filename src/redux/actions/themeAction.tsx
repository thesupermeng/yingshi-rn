import {
  DARK_THEME,LIGHT_THEME
} from "../../constants";

import { ThemeConstantsType } from "../../types/constantTypes";
export const ToggleDarkTheme = () => ({
  type: DARK_THEME,
});
export const ToggleLightTheme = () => ({
  type: LIGHT_THEME,
});

export const ToggleTheme = (theme:boolean) => {
  return async (dispatch) => {
      if (theme === true) {
          dispatch(ToggleDarkTheme())
      } else {
          dispatch(ToggleLightTheme())
      }

  }
}