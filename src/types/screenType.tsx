export interface screenModel {
  screenAction: string;
  screenShow: boolean;
  loginShow: boolean;
  registerShow: boolean;
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
}
