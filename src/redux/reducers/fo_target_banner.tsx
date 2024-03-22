import { DARK_THEME, LIGHT_THEME } from "@utility/n_subs_interstitial";
import { MAgreement } from "@type/qkf_bell";
const initialState = {
  theme: true
};

export default (theme = initialState, { type } : MAgreement) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};