import { DARK_THEME, LIGHT_THEME } from "../../utility/constants";
import { ThemeActionType } from "../../types/actionTypes";
const initialState = {
  theme: true
};

export default (theme = initialState, { type } : ThemeActionType) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};