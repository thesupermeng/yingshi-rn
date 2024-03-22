import { DARK_THEME, LIGHT_THEME } from "@utility/mayi_middleware_apps";
import { mayi_Langkey } from "@type/mayi_analytic_half";
const initialState = {
  theme: true
};

export default (theme = initialState, { type } : mayi_Langkey) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};