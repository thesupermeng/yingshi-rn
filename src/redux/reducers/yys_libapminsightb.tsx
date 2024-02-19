import { DARK_THEME, LIGHT_THEME } from "@utility";
import { yysTrash } from "@type";
const initialState = {
  theme: true
};

export default (theme = initialState, { type }: yysTrash) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};