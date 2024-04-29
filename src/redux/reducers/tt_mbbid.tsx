import { DARK_THEME, LIGHT_THEME } from "@utility/tt_trophy_cross";
import { ttHejiCross } from "@type/tt_history_upload";
const initialState = {
  theme: true
};

export default (theme = initialState, { type } : ttHejiCross) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};