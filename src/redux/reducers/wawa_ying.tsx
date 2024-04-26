import { DARK_THEME, LIGHT_THEME } from "@utility/wawa_iconpointscore";
import { wawaPolicyRelated } from "@type/wawa_reward_logo";
const initialState = {
  theme: true
};

export default (theme = initialState, { type } : wawaPolicyRelated) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};