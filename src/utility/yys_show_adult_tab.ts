import {UMENG_CHANNEL} from './yys_ajax_switch';

export const isShowAdultTabChannel = (state: any): boolean => {
  return UMENG_CHANNEL === 'WEB_IOS' ? true : state.showAdultTab;
};
