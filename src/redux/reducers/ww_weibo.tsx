import { DARK_THEME, LIGHT_THEME } from "@utility/ww_icon";
import { wwAlbumProfileinactive } from "@type/ww_bang";
const initialState = {
  theme: true
};

export default (theme = initialState, { type } : wwAlbumProfileinactive) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};