import { DARK_THEME, LIGHT_THEME } from "../../constants";
import { ThemeConstantsType } from "../../types/constantTypes";
const initialState = {
  theme: true
};

export default (theme = initialState, { type } : ThemeConstantsType) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};