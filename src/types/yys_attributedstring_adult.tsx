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
  sportWatchTime: number; 
  interstitialShow: boolean;
  isPlayerFullScreen: boolean;
  adultVideoWatchTime: number; 
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
