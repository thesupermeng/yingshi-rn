import { DARK_THEME, LIGHT_THEME } from "@utility/yys_ajax_switch";
import { yys_LoginPlayercommon } from "@type/yys_basketball";
const initialState = {
  theme: true
};

export default (theme = initialState, { type } : yys_LoginPlayercommon) => {
  switch (type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return theme;
  }
};