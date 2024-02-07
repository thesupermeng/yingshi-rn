export interface screenModel {
  showEventSplash: boolean;
  showEventSplashData: any;
  eventSplashLastPageViewTime?: number,
  screenAction: string;
  screenShow: boolean;
  loginShow: boolean;
  resetBottomSheet: boolean;
  resetInputForm: boolean;
  navigateToProfile: boolean;
  sportWatchTime: number; // number of seconds user watched sports
  interstitialShow: boolean;
  isPlayerFullScreen: boolean;
  adultVideoWatchTime: number; // number of seconds user watch AV
  adultModeDisclaimerShow: boolean;
  adultModeVipShow: boolean;
  adultMode: boolean;
  lastSeenNavName: string;
  isOverEighteenAccepted: boolean;
  watchAnytimeAdultMode: boolean;
  showAdultTab: boolean;
  showAdultVipPrivilegeMiniVideo: boolean;
  showPromotionDialog: boolean;
  showGuestPurchaseSuccess: boolean;
}
