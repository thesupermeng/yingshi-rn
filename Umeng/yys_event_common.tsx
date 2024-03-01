import AnalyticsUtil from './yys_download_package';
import { yys_ChatNeon } from './yys_search_cancel';

 
enum KISPhoto {
    
    KISRewardvideo = 'Home-views',
    KISSendLibflipper = 'Home-clicks',
    KISVerticalDice = 'Home-Carousel_views',
    KISPauseModels = 'Home-Carousel_clicks',
    KISUpgrade = 'Home-banner_views',
    KISVideocommon = 'Home-banner_clicks',

    
    KISLibreactnativeblob = 'WatchAnytime-Views',
    KISNativemodule = 'WatchAnytime-video_view_times',
    KISStats = 'WatchAnytime-X_views',
    KISManifestConstants = 'WatchAnytime-X_video_view_times',
    KISRedirect = 'WatchAnytime-playlist_clicks',
    KISBasketballPlaceholder = 'WatchAnytime-video_clicks',
    KISStringsSettings = 'WatchAnytime-ads_views',
    KISButtonRules = 'WatchAnytime-ads_clicks',

    
    KISCustom = 'Sport-views',
    KISGmail = 'Sport-clicks',
    KISAdultSecurity = 'Sport-banner_views',
    KISShared = 'Sport-banner_clicks',

    
    KISHooksLibtan = 'SportDetails-views',
    KISKickForm = 'SportDetails-plays_times',
    KISSpecRecommendation = 'SportDetails-vip_popup_times',
    KISShared9 = 'SportDetails-vip_clicks',

    
    KISAttributedstring = 'Playlist-views',
    KISReward = 'Playlist-clicks',
    KISLibsentry = 'Playlist-topics_views',
    KISLoginLess = 'Playlist-topics_clicks',

    
    KISSuccess = 'UserCenter-login_success_times',
    KISDirectFloater = 'UserCenter-vip_login_success_times',
    KISBaidu = 'UserCenter-pay_vip_views',
    KISNewinterstitial = 'UserCenter-invites_vip_views',

    
    KISStrings = 'Search-result_views',
    KISApps = 'Search-result_clicks',
    KISModity = 'Search-keywords',

    
    KISCatagoryBorderless = 'Catalog-views',
    KISOver = 'Catalog-clicks',

    
    KISHiadRedirect = 'Play-views',
    KISHome = 'Play-plays_times',
    KISIcon = 'Play-X_views',
    KISNetworkLibavcodec = 'Play-X_plays_times',
    KISDetails = 'Play-share_clicks',

    
    KISAgreement = 'Play-ads_views',
    KISCornerMuted = 'Play-ads_clicks',

    
    KISCastBuild = 'VideoPlayer-banner_views',
    KISConfirmationSchedule = 'VideoPlayer-banner_clicks',

    
    KISThumbnailLogin = 'Profile-banner_views',
    KISLibreactnativejni = 'Profile-banner_clicks',
}

enum ENLKsad {
    
    KISRuntimeDropdown = 'home_tab',

    
    KISDplus = 'watchAnytime',
    KISAndroid = 'watchAnytime_play_times',
    KISComplete = 'watchAnytime_view_video',
    KISUnimplementedview = 'watchAnytime_view_playlist',

    KISTumbnailCenter = 'watchAnytime_x',
    KISTaiwanReminder = 'watchAnytime_x_play_times',

    
    KISHiadDrag = 'sport',
    KISBing = 'sportDetail',
    KISSwitch = 'sportDetail_play_times',
    KISLarge = 'sportDetail_vip_popup',

    
    KISLoading = 'playlist',
    KISDebugMimo = 'playlist_topics',

    
    KISTailZoom = 'userCenter_login_success_times',
    KISConstantsIndicator = 'userCenter_vip_login_success_times',
    KISCommonAnimations = 'userCenter_view_vip',

    
    KISPath = 'search_keywords',
    KISStylesBack = 'search_result',

    
    KISRefreshf = 'catalog',

    
    KISAbidetectSound = 'play',
    KISFastforward = 'play_plays_times',
    KISStats0 = 'Play_share',

    KISFrameHeji = 'play_x',
    KISKsad = 'play_x_plays_times',
}

export default class yys_event_common {
    static showLog: boolean = false;

    
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISRewardvideo, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISRuntimeDropdown,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISRewardvideo);
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISSendLibflipper, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISRuntimeDropdown,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISSendLibflipper);
    }

    static homeTabCarouselViewAnalytics = ({
        tab_id,
        tab_name,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        tab_id: string,
        tab_name: string,
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISVerticalDice, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISVerticalDice);
    }

    static homeTabCarouselClickAnalytics = ({
        tab_id,
        tab_name,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        tab_id: string,
        tab_name: string,
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISPauseModels, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISPauseModels);
    }

    static homeTabBannerViewAnalytics = ({
        tab_id,
        tab_name,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        tab_id: string,
        tab_name: string,
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISUpgrade, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISUpgrade);
    }

    static homeTabBannerClickAnalytics = ({
        tab_id,
        tab_name,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name
    }: {
        tab_id: string,
        tab_name: string,
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISVideocommon, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISVideocommon);
    }

    
    static watchAnytimeViewsAnalytics = ({ isXmode = false }: { isXmode?: boolean } = { isXmode: false }) => {
        let evendId: string = KISPhoto.KISLibreactnativeblob;

        if (isXmode) {
            evendId = KISPhoto.KISStats;
        }

        AnalyticsUtil.onEventWithMap(evendId, {});
        yys_ChatNeon.onEvent({
            type: 'view',
            title: isXmode ? ENLKsad.KISTumbnailCenter : ENLKsad.KISDplus,
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: string = KISPhoto.KISNativemodule;

        if (isXmode) {
            evendId = KISPhoto.KISManifestConstants;
        }

        let prefixUserId = '';

        
        if (userId !== '') {
            prefixUserId = 'userId-' + userId;
        } else {
            prefixUserId = 'guest';
        }

        AnalyticsUtil.onEventWithMap(evendId, {
            [prefixUserId]: vod_id,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: isXmode ? ENLKsad.KISTaiwanReminder : ENLKsad.KISAndroid,
            params: {
                desc_1: 'user.id:' + userId,
                
            }
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoClicksAnalytics = () => {
       let icond = 2;
    let emptyG = String.fromCharCode(114,101,112,101,97,116,95,53,95,56,49,0);
    let reducerD: Array<any> = [365, 50];
    let overz: Array<any> = [String.fromCharCode(115,95,54,54,95,117,110,107,110,111,119,110,115,0), String.fromCharCode(122,95,51,48,95,102,97,100,101,0), String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,0)];
    let kickp: Array<any> = [928, 213, 473];
    let templateprocessorb = 1.0;
    let circleD = String.fromCharCode(112,111,108,121,109,101,115,104,95,116,95,49,54,0);
    let downloadingn = String.fromCharCode(101,95,54,50,95,100,101,110,121,0);
    let alert9 = 2;
    let untickS = 3;
    let r_centerX = String.fromCharCode(114,101,97,115,115,101,109,98,108,101,114,95,110,95,53,51,0);
    let forwardX: Array<any> = [String.fromCharCode(108,111,99,107,105,110,103,95,112,95,50,0), String.fromCharCode(107,95,52,56,95,102,111,114,0)];
    let controla = 1.0;
    let promotionC = String.fromCharCode(109,97,114,107,105,110,103,115,95,110,95,54,51,0);
      kickp = [kickp.length];
   if (1 < (downloadingn.length | 5) && 3 < (5 | overz.length)) {
      downloadingn += "2";
   }
   let mergerP = 8172923.0 >= templateprocessorb;
   do {
      templateprocessorb *= alert9 / (Math.max(5, r_centerX.length));
      if (mergerP) {
         break;
      }
   } while (mergerP && (templateprocessorb <= overz.length));
      overz = [parseInt(`${templateprocessorb}`) >> (Math.min(downloadingn.length, 5))];
   if (2.71 > templateprocessorb) {
       let animationJ = String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,104,95,53,52,0);
       let benefitv = String.fromCharCode(107,95,55,95,104,97,100,0);
       let confirmationq = false;
       let baseL = true;
      for (let l = 0; l < 1; l++) {
          let commenth = true;
          let projectI = true;
          let popupX: Array<any> = [String.fromCharCode(105,115,99,111,118,101,114,95,118,95,56,57,0), String.fromCharCode(97,95,55,95,98,117,102,102,101,114,101,100,0), String.fromCharCode(100,105,115,116,105,110,99,116,95,57,95,56,57,0)];
         benefitv += `${popupX.length >> (Math.min(benefitv.length, 4))}`;
         commenth = (projectI ? !commenth : !projectI);
         popupX.push(2);
      }
         animationJ = `${((confirmationq ? 3 : 3))}`;
      let dropdownc = 8981514 >= animationJ.length;
      do {
         animationJ = `${((confirmationq ? 2 : 4) - (baseL ? 1 : 3))}`;
         if (dropdownc) {
            break;
         }
      } while (dropdownc && (benefitv.endsWith(animationJ)));
         confirmationq = benefitv.length < animationJ.length;
      if (animationJ.length == 2 && !confirmationq) {
          let buffer3 = String.fromCharCode(100,95,53,52,95,109,97,116,120,0);
          let downloadb: Map<any, any> = new Map([[String.fromCharCode(122,95,54,54,95,115,117,98,101,120,112,114,0),509], [String.fromCharCode(115,95,49,95,115,116,114,101,116,99,104,0),717]]);
          let watchh = 5;
          let nativemoduleR = String.fromCharCode(104,95,56,50,95,106,117,115,116,0);
         animationJ = `${watchh & 2}`;
         buffer3 = `${3 & downloadb.size}`;
         downloadb.set(`${buffer3}`, (buffer3 == String.fromCharCode(85,0) ? downloadb.size : buffer3.length));
         watchh |= 3;
         nativemoduleR += `${nativemoduleR.length}`;
      }
      for (let q = 0; q < 1; q++) {
          let k_countG: Map<any, any> = new Map([[String.fromCharCode(112,99,109,117,95,49,95,57,48,0),356], [String.fromCharCode(113,105,110,100,101,120,95,116,95,49,57,0),627], [String.fromCharCode(97,112,112,114,111,118,101,114,95,109,95,50,51,0),959]]);
          let share1 = 1.0;
          let left0: Array<any> = [469, 177, 846];
          let connectionX = 1;
         animationJ += `${left0.length | connectionX}`;
         k_countG.set(`${share1}`, parseInt(`${share1}`));
         left0 = [parseInt(`${share1}`)];
         connectionX |= k_countG.size ^ parseInt(`${share1}`);
      }
          let custom1: Array<any> = [41, 486];
          let paginationH = String.fromCharCode(101,95,54,50,95,108,105,115,116,0);
          let downs: Array<any> = [365, 698, 723];
         baseL = animationJ.includes(`${baseL}`);
         custom1 = [(paginationH == String.fromCharCode(114,0) ? paginationH.length : custom1.length)];
         downs.push(paginationH.length ^ downs.length);
      while (baseL) {
          let transfer7 = false;
          let nativeS = String.fromCharCode(115,116,114,101,97,109,115,95,56,95,49,51,0);
          let userx = String.fromCharCode(111,95,56,56,95,115,115,115,101,0);
          let floatern = 2.0;
         benefitv = "2";
         transfer7 = 40.76 == floatern;
         nativeS = `${userx.length}`;
         userx += `${userx.length}`;
         floatern *= (parseFloat(`${(transfer7 ? 2 : 5)}`));
         break;
      }
       let interstitialv = String.fromCharCode(102,117,122,122,101,114,115,0);
       let mapbufferh = String.fromCharCode(118,95,50,48,95,110,111,110,110,117,108,108,115,99,104,101,109,101,115,0);
          let libruntimeexecutorE = 3;
          let volumeP = String.fromCharCode(105,110,100,97,116,97,95,55,95,57,51,0);
          let untick3 = String.fromCharCode(109,95,52,50,95,109,106,112,101,103,0);
         interstitialv += `${untick3.length}`;
         libruntimeexecutorE >>= Math.min(Math.abs(1), 4);
         volumeP = `${volumeP.length / (Math.max(2, 10))}`;
         untick3 = `${libruntimeexecutorE}`;
      let i_playerP = mapbufferh.length >= 9032952;
      do {
          let reminderc: Map<any, any> = new Map([[String.fromCharCode(117,110,105,113,117,101,100,95,54,95,53,57,0),62], [String.fromCharCode(97,114,110,114,95,97,95,54,49,0),644]]);
          let favorite9 = String.fromCharCode(109,117,108,120,95,49,95,49,50,0);
          let searchbarJ = true;
          let containerf = String.fromCharCode(98,105,110,116,114,101,101,95,109,95,53,54,0);
          let specX: Array<any> = [String.fromCharCode(115,116,97,109,112,95,52,95,52,51,0), String.fromCharCode(97,100,100,102,95,117,95,57,53,0)];
         mapbufferh = `${1 >> (Math.min(1, Math.abs(reminderc.size)))}`;
         reminderc.set(`${searchbarJ}`, (favorite9.length - (searchbarJ ? 3 : 5)));
         favorite9 += `${((searchbarJ ? 5 : 3))}`;
         containerf = `${containerf.length % 2}`;
         specX.push(specX.length << (Math.min(containerf.length, 5)));
         if (i_playerP) {
            break;
         }
      } while (i_playerP && (!confirmationq));
      let klevinK = animationJ == String.fromCharCode(48,112,101,104,117,120,111,116,119,105,0);
      do {
         animationJ = `${(benefitv == String.fromCharCode(67,0) ? (confirmationq ? 1 : 2) : benefitv.length)}`;
         if (klevinK) {
            break;
         }
      } while ((!animationJ.startsWith(`${baseL}`)) && klevinK);
      downloadingn = `${alert9}`;
   }
       let emojif = 5;
       let selectT: Array<any> = [605, 435];
       let servicee: Map<any, any> = new Map([[String.fromCharCode(115,115,121,98,95,110,95,50,50,0),false ], [String.fromCharCode(108,95,57,95,112,108,97,99,101,104,111,108,100,101,114,0),false ]]);
      while (!selectT.includes(emojif)) {
         selectT = [selectT.length | 1];
         break;
      }
         servicee.set(`${emojif}`, selectT.length & 2);
      if (selectT.length == emojif) {
         emojif -= 1;
      }
      let sportm = servicee.size <= 8942871;
      do {
          let reactnativejsY = false;
         servicee.set(`${reactnativejsY}`, (emojif & (reactnativejsY ? 3 : 4)));
         if (sportm) {
            break;
         }
      } while (sportm && (!Array.from(servicee.values()).includes(selectT.length)));
         servicee.set(`${selectT.length}`, 1 & servicee.size);
       let filter0 = String.fromCharCode(97,112,112,101,97,114,101,100,95,106,95,50,52,0);
       let backward8 = String.fromCharCode(115,97,117,99,101,95,114,95,54,51,0);
          let pressureX = 2;
          let episode2 = 1.0;
          let updatesr = false;
         servicee = new Map([[`${servicee.size}`, servicee.size]]);
         pressureX *= pressureX + parseInt(`${episode2}`);
         episode2 *= 3 + parseInt(`${episode2}`);
         updatesr = episode2 > 88.20;
      let showg = 6808048 >= servicee.size;
      do {
         servicee = new Map([[`${servicee.size}`, servicee.size]]);
         if (showg) {
            break;
         }
      } while (((servicee.size / (Math.max(9, backward8.length))) < 4 && 1 < (backward8.length / 4)) && showg);
         filter0 += `${2 << (Math.min(5, filter0.length))}`;
      alert9 *= emptyG.length;
   let options6 = templateprocessorb <= 6474601.0;
   do {
      templateprocessorb /= Math.max(3 - reducerD.length, 5);
      if (options6) {
         break;
      }
   } while (options6 && ((icond * 2) >= 2));

        AnalyticsUtil.onEventWithMap(KISPhoto.KISBasketballPlaceholder, {});

   let user8 = templateprocessorb <= 9863523.0;
   do {
       let classesa = true;
       let eventG = 0.0;
       let libzeusV: Map<any, any> = new Map([[String.fromCharCode(97,95,57,54,95,105,115,110,111,116,116,97,112,0),false ], [String.fromCharCode(115,105,103,110,108,101,95,113,95,57,52,0),false ], [String.fromCharCode(109,95,55,52,0),false ]]);
       let episodek: Map<any, any> = new Map([[String.fromCharCode(116,95,52,54,95,107,110,111,99,107,111,117,116,0),503], [String.fromCharCode(98,121,116,101,115,104,117,109,97,110,95,106,95,55,54,0),52]]);
       let unimplementedviewH = String.fromCharCode(110,111,110,110,111,114,109,97,116,105,118,101,95,48,95,51,48,0);
       let promotionR = String.fromCharCode(116,111,111,108,98,97,114,0);
         libzeusV.set(promotionR, promotionR.length);
         episodek.set(promotionR, (promotionR == String.fromCharCode(80,0) ? promotionR.length : unimplementedviewH.length));
      let nalyticsH = eventG >= 6218609.0;
      do {
         eventG -= ((classesa ? 3 : 5));
         if (nalyticsH) {
            break;
         }
      } while ((3.59 <= eventG || 5.27 <= (3.59 * eventG)) && nalyticsH);
      while (Array.from(episodek.keys()).includes(`${eventG}`)) {
         eventG += parseInt(`${eventG}`) - episodek.size;
         break;
      }
      if ((libzeusV.size / (Math.max(promotionR.length, 10))) <= 5) {
         promotionR = `${(parseInt(`${eventG}`) << (Math.min(3, Math.abs((classesa ? 5 : 5)))))}`;
      }
      let auto_eu = classesa ? !classesa : classesa;
      do {
         classesa = 63 == episodek.size || eventG == 47.56;
         if (auto_eu) {
            break;
         }
      } while (((eventG - 4.50) > 5.67) && auto_eu);
      for (let p = 0; p < 1; p++) {
         episodek = new Map([[unimplementedviewH, 2]]);
      }
       let tumbnail1 = 0.0;
      for (let s = 0; s < 2; s++) {
         episodek.set(`${classesa}`, libzeusV.size);
      }
          let schedulerI = String.fromCharCode(118,95,49,53,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0);
          let watche: Map<any, any> = new Map([[String.fromCharCode(105,110,102,101,114,101,100,95,49,95,55,57,0),true ], [String.fromCharCode(114,95,51,56,95,100,117,97,108,0),false ]]);
         episodek.set(`${tumbnail1}`, libzeusV.size - 2);
         schedulerI = `${2 + watche.size}`;
         watche = new Map([[`${watche.size}`, 3 % (Math.max(5, schedulerI.length))]]);
         episodek.set(`${classesa}`, libzeusV.size);
      templateprocessorb -= parseInt(`${eventG}`);
      if (user8) {
         break;
      }
   } while ((3.26 < (templateprocessorb + 1.10) || 1.10 < (forwardX.length + templateprocessorb)) && user8);
      icond *= downloadingn.length / (Math.max(2, circleD.length));
   while (3.35 >= (1.72 - templateprocessorb) || (1.72 - templateprocessorb) >= 5.76) {
      overz.push(reducerD.length + 1);
      break;
   }
   while (alert9 <= 3) {
      alert9 *= emptyG.length;
      break;
   }
       let libfb1 = String.fromCharCode(107,95,51,49,95,112,97,121,109,97,115,116,101,114,0);
          let rulesN = 2;
          let alertg = String.fromCharCode(121,95,57,54,95,99,97,100,101,110,99,101,0);
         libfb1 += `${alertg.length}`;
         rulesN |= rulesN;
         alertg += `${rulesN * rulesN}`;
          let collectionG = String.fromCharCode(97,116,116,95,103,95,52,53,0);
          let fastforwardJ: Map<any, any> = new Map([[String.fromCharCode(111,95,52,50,95,112,105,110,0),783], [String.fromCharCode(114,95,54,53,95,114,110,103,115,0),424]]);
          let liveW: Array<any> = [328, 657, 114];
         libfb1 += `${libfb1.length >> (Math.min(collectionG.length, 2))}`;
         collectionG = `${2 << (Math.min(1, Math.abs(fastforwardJ.size)))}`;
         fastforwardJ.set(`${liveW.length}`, fastforwardJ.size & liveW.length);
      if (libfb1.length < 5) {
         libfb1 = `${(libfb1 == String.fromCharCode(103,0) ? libfb1.length : libfb1.length)}`;
      }
      r_centerX += `${overz.length}`;
      r_centerX = `${(String.fromCharCode(86,0) == emptyG ? forwardX.length : emptyG.length)}`;
      overz = [overz.length];
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISComplete,
        });

      r_centerX += "2";
   while (kickp.length == emptyG.length) {
       let goalB = 2;
      if (3 >= (goalB + 4)) {
         goalB += goalB * 1;
      }
      for (let b = 0; b < 1; b++) {
         goalB /= Math.max(goalB * 2, 1);
      }
         goalB >>= Math.min(Math.abs(goalB << (Math.min(Math.abs(goalB), 5))), 1);
      emptyG = `${(downloadingn == String.fromCharCode(76,0) ? downloadingn.length : circleD.length)}`;
      break;
   }
   for (let i = 0; i < 1; i++) {
      overz.push(3);
   }
      emptyG = `${overz.length * r_centerX.length}`;
       let libjsinspector9 = String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,113,95,52,57,0);
       let libturbomodulejsijniM = 4.0;
       let gradleV: Array<any> = [763, 958];
         gradleV = [libjsinspector9.length << (Math.min(Math.abs(3), 5))];
         libturbomodulejsijniM += parseFloat(`${2}`);
         libturbomodulejsijniM /= Math.max(parseFloat(`${parseInt(`${libturbomodulejsijniM}`) ^ 1}`), 5);
         libjsinspector9 = `${parseInt(`${libturbomodulejsijniM}`)}`;
          let selectedd = true;
          let result3 = true;
         libturbomodulejsijniM += parseFloat(`${gradleV.length - 3}`);
         selectedd = selectedd && selectedd;
         result3 = (selectedd ? selectedd : !selectedd);
      while (libjsinspector9.includes(`${gradleV.length}`)) {
          let launchz = String.fromCharCode(112,111,115,116,115,99,97,108,101,95,102,95,57,50,0);
          let skipO = 0.0;
         libjsinspector9 = `${launchz.length}`;
         launchz = `${parseInt(`${skipO}`)}`;
         break;
      }
         libturbomodulejsijniM /= Math.max(parseFloat(`${parseInt(`${libturbomodulejsijniM}`) ^ libjsinspector9.length}`), 4);
      let taiwanF = libturbomodulejsijniM >= 7845934.0;
      do {
         libturbomodulejsijniM += parseFloat(`${gradleV.length >> (Math.min(libjsinspector9.length, 4))}`);
         if (taiwanF) {
            break;
         }
      } while (((parseFloat(`${gradleV.length}`) / (Math.max(6, libturbomodulejsijniM))) > 3.49 || (parseFloat(`${gradleV.length}`) / (Math.max(6, libturbomodulejsijniM))) > 3.49) && taiwanF);
       let team8: Array<any> = [537, 152];
      kickp = [alert9];
       let referrerk = String.fromCharCode(119,101,98,115,95,116,95,57,0);
         referrerk = `${(referrerk == String.fromCharCode(103,0) ? referrerk.length : referrerk.length)}`;
      for (let r = 0; r < 1; r++) {
         referrerk += `${(String.fromCharCode(81,0) == referrerk ? referrerk.length : referrerk.length)}`;
      }
      let k_unlockP = String.fromCharCode(120,118,113,99,116,108,116,55,120,116,0) == referrerk;
      do {
         referrerk += `${3 + referrerk.length}`;
         if (k_unlockP) {
            break;
         }
      } while (k_unlockP && (referrerk != referrerk));
      emptyG = `${parseInt(`${templateprocessorb}`)}`;
   let single9 = r_centerX.length >= 8136513;
   do {
      r_centerX = `${downloadingn.length * 1}`;
      if (single9) {
         break;
      }
   } while (single9 && (4 >= icond));

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISBasketballPlaceholder);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
       let libavformatY = 3;
    let baidue = String.fromCharCode(103,95,50,57,95,97,99,99,101,115,115,105,98,105,108,105,116,121,0);
    let xadsdkZ = String.fromCharCode(115,112,101,99,105,102,105,101,114,95,115,95,55,55,0);
    let encryptw = 2.0;
    let anythinkq = 2.0;
    let libjsinspectoru = 5.0;
    let arrowT = 2.0;
    let controlsv = String.fromCharCode(117,114,97,110,100,111,109,95,102,95,55,50,0);
    let rewardM = false;
    let forwardS = 1.0;
    let baiduU = 1.0;
    let eactS: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,101,100,95,107,95,55,51,0),String.fromCharCode(110,95,56,95,102,99,102,115,0)], [String.fromCharCode(121,95,49,52,95,115,116,117,110,0),String.fromCharCode(117,95,55,56,95,103,101,111,99,111,100,101,115,0)]]);
    let taiwanT = String.fromCharCode(113,95,51,53,95,115,112,107,114,0);
    let favicon_ = 3;
      libavformatY -= (controlsv == String.fromCharCode(122,0) ? controlsv.length : parseInt(`${baiduU}`));
   while (controlsv != String.fromCharCode(70,0)) {
      xadsdkZ += `${((rewardM ? 4 : 5) % (Math.max(parseInt(`${libjsinspectoru}`), 9)))}`;
      break;
   }
      libavformatY >>= Math.min(Math.abs(2), 4);
      encryptw *= parseFloat(`${parseInt(`${forwardS}`) | parseInt(`${baiduU}`)}`);
   for (let h = 0; h < 1; h++) {
      forwardS -= parseFloat(`${1}`);
   }
      xadsdkZ = `${1 | xadsdkZ.length}`;
      controlsv = `${(xadsdkZ == String.fromCharCode(95,0) ? xadsdkZ.length : parseInt(`${arrowT}`))}`;

        AnalyticsUtil.onEventWithMap(KISPhoto.KISRedirect, {});

   let configT = baiduU <= 9157342.0;
   do {
       let flyer3 = 0;
       let mergerV = String.fromCharCode(97,95,54,51,0);
       let collectiont = String.fromCharCode(102,101,116,99,104,101,100,95,107,95,55,54,0);
       let armvaH = String.fromCharCode(120,95,55,52,95,100,101,102,97,117,108,116,0);
      if (collectiont.length < mergerV.length) {
          let xvodD = 2.0;
          let largep: Array<any> = [708, 805, 614];
          let nalytics7: Array<any> = [482, 933];
          let thailandQ = String.fromCharCode(115,99,97,110,105,110,100,101,120,95,97,95,49,50,0);
          let commentL = 2;
         collectiont = `${commentL ^ mergerV.length}`;
         xvodD *= parseInt(`${xvodD}`);
         largep.push(largep.length << (Math.min(Math.abs(2), 3)));
         nalytics7 = [2];
         thailandQ += `${nalytics7.length % (Math.max(6, largep.length))}`;
         commentL >>= Math.min(2, Math.abs(parseInt(`${xvodD}`)));
      }
          let tnews6 = 5;
         mergerV = `${flyer3}`;
         tnews6 %= Math.max(1, tnews6);
       let emoji4 = String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,56,95,49,49,0);
         flyer3 &= armvaH.length;
      while (collectiont.length == mergerV.length) {
         collectiont = `${armvaH.length}`;
         break;
      }
      baiduU /= Math.max(parseFloat(`${2}`), 2);
      if (configT) {
         break;
      }
   } while ((baiduU > 2.64) && configT);
       let topice = 2.0;
       let sportA = String.fromCharCode(97,95,56,53,95,116,101,108,101,116,101,120,116,0);
         topice += parseFloat(`${parseInt(`${topice}`)}`);
      if (parseFloat(`${sportA.length}`) <= topice) {
         sportA += "3";
      }
          let progress5: Array<any> = [719, 938, 218];
          let toponi = String.fromCharCode(109,117,116,97,98,108,101,95,113,95,49,57,0);
          let fieldw = false;
         topice += parseFloat(`${1 ^ progress5.length}`);
         progress5 = [toponi.length];
         toponi = `${((fieldw ? 2 : 2))}`;
      if (!sportA.includes(`${topice}`)) {
         sportA = `${parseInt(`${topice}`)}`;
      }
       let filterl: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,102,95,54,95,54,52,0),573], [String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,99,95,54,53,0),157], [String.fromCharCode(112,95,56,56,95,100,101,99,114,101,102,0),219]]);
       let carouselo: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,111,110,95,106,95,48,0),216], [String.fromCharCode(99,112,120,95,48,95,51,55,0),28]]);
         sportA = `${carouselo.size}`;
      xadsdkZ += `${parseInt(`${baiduU}`)}`;
   let topont = encryptw <= 6915015.0;
   do {
      encryptw /= Math.max(parseFloat(`${1 & parseInt(`${arrowT}`)}`), 5);
      if (topont) {
         break;
      }
   } while ((1.46 <= (encryptw / 5.64)) && topont);
      arrowT *= parseFloat(`${controlsv.length ^ parseInt(`${anythinkq}`)}`);
      libavformatY >>= Math.min(5, Math.abs(2));
      baidue += "1";
      baiduU *= parseFloat(`${xadsdkZ.length >> (Math.min(Math.abs(3), 3))}`);
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISUnimplementedview,
        });

   while (encryptw < 4.44) {
      xadsdkZ += `${baidue.length}`;
      break;
   }
   while ((1.98 * forwardS) >= 2.15 || 1.38 >= (1.98 * anythinkq)) {
       let handlerC = 3.0;
         handlerC -= parseFloat(`${parseInt(`${handlerC}`) % (Math.max(parseInt(`${handlerC}`), 2))}`);
      let libsentryR = handlerC <= 7253324.0;
      do {
         handlerC *= parseFloat(`${parseInt(`${handlerC}`) + 3}`);
         if (libsentryR) {
            break;
         }
      } while ((1.60 <= handlerC) && libsentryR);
         handlerC += parseFloat(`${3 * parseInt(`${handlerC}`)}`);
      forwardS -= parseFloat(`${parseInt(`${arrowT}`) | libavformatY}`);
      break;
   }
      arrowT -= parseFloat(`${3 / (Math.max(parseInt(`${forwardS}`), 1))}`);
       let statisticsv = String.fromCharCode(105,95,49,48,48,95,116,114,101,101,116,111,107,0);
         statisticsv = "3";
      while (statisticsv.startsWith(statisticsv)) {
         statisticsv = `${statisticsv.length % 3}`;
         break;
      }
          let windx = String.fromCharCode(111,114,105,103,105,110,115,95,116,95,49,56,0);
         statisticsv = `${(String.fromCharCode(51,0) == statisticsv ? windx.length : statisticsv.length)}`;
      forwardS += parseFloat(`${1}`);
   for (let f = 0; f < 1; f++) {
       let closeB = true;
       let formL = 0;
       let libreactnativejniZ = 1.0;
       let libloggerE: Map<any, any> = new Map([[String.fromCharCode(98,95,49,56,95,107,109,115,0),String.fromCharCode(97,110,105,109,97,116,101,100,95,110,95,57,48,0)], [String.fromCharCode(101,95,53,54,95,105,100,99,116,100,115,112,0),String.fromCharCode(115,95,52,54,95,119,114,105,116,101,99,108,101,97,114,0)]]);
      while (1 > formL) {
         closeB = null != libloggerE.get(`${libreactnativejniZ}`);
         break;
      }
         formL *= 1;
         formL %= Math.max(4, 3 - parseInt(`${libreactnativejniZ}`));
      while (1 == (libloggerE.size + 5) && !closeB) {
         closeB = closeB || libreactnativejniZ > 54.76;
         break;
      }
      if (Array.from(libloggerE.keys()).includes(`${libreactnativejniZ}`)) {
         libloggerE.set(`${libreactnativejniZ}`, formL);
      }
          let floatingx = false;
         closeB = !closeB;
         floatingx = (floatingx ? floatingx : floatingx);
      while ((4 + formL) > 3) {
         formL -= libloggerE.size & 2;
         break;
      }
       let membershipy = false;
       let away7: Map<any, any> = new Map([[String.fromCharCode(115,117,98,118,105,101,119,115,95,119,95,52,52,0),579], [String.fromCharCode(98,97,99,107,105,110,103,95,110,95,51,52,0),285]]);
      for (let t = 0; t < 1; t++) {
         formL /= Math.max(formL | 3, 4);
      }
      while (!Array.from(libloggerE.keys()).includes(`${formL}`)) {
          let chinaE = String.fromCharCode(118,95,57,56,95,108,122,111,120,0);
          let grayJ = 1.0;
          let carouselw: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,110,101,97,114,109,118,95,101,95,50,51,0),98], [String.fromCharCode(108,101,102,116,95,118,95,57,48,0),365], [String.fromCharCode(117,112,108,111,97,100,101,100,95,113,95,51,51,0),883]]);
         libloggerE = new Map([[`${carouselw.size}`, 2 ^ parseInt(`${grayJ}`)]]);
         chinaE += `${(String.fromCharCode(106,0) == chinaE ? chinaE.length : chinaE.length)}`;
         grayJ /= Math.max(chinaE.length, 1);
         break;
      }
          let searchl = 3.0;
          let whistlex = false;
         formL <<= Math.min(parseInt(`${Math.abs(((whistlex ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${searchl}`)), 3))))}`), 3);
      arrowT /= Math.max((parseFloat(`${(closeB ? 1 : 5) | parseInt(`${baiduU}`)}`)), 1);
   }
       let headerh: Map<any, any> = new Map([[String.fromCharCode(102,109,115,117,98,0),String.fromCharCode(99,95,56,95,109,100,99,116,0)], [String.fromCharCode(97,110,105,109,97,116,105,111,110,115,95,112,95,57,52,0),String.fromCharCode(101,95,57,95,97,112,112,101,110,100,0)]]);
       let mutedI: Map<any, any> = new Map([[String.fromCharCode(115,119,97,98,95,98,95,57,51,0),String.fromCharCode(106,95,52,52,0)], [String.fromCharCode(113,95,57,48,95,98,117,102,115,0),String.fromCharCode(112,108,97,121,98,97,99,107,95,119,95,49,49,0)]]);
       let base_ = 4;
         headerh = new Map([[`${mutedI.size}`, headerh.size % (Math.max(mutedI.size, 9))]]);
      for (let v = 0; v < 3; v++) {
         headerh = new Map([[`${mutedI.size}`, headerh.size % (Math.max(mutedI.size, 10))]]);
      }
       let baiduX = String.fromCharCode(116,117,112,108,101,95,116,95,52,56,0);
      while (headerh.get(`${mutedI.size}`) != null) {
          let leagueX = false;
         headerh = new Map([[`${headerh.size}`, headerh.size]]);
         leagueX = (!leagueX ? !leagueX : leagueX);
         break;
      }
      for (let a = 0; a < 1; a++) {
          let overc = 5.0;
         baiduX = "1";
         overc *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${overc}`)), 4))}`);
      }
          let topona = String.fromCharCode(114,100,112,99,109,95,111,95,51,51,0);
          let incidentY = true;
          let libloggerL = 4.0;
         base_ /= Math.max(5, (baiduX == String.fromCharCode(113,0) ? mutedI.size : baiduX.length));
         topona += `${1 * parseInt(`${libloggerL}`)}`;
         incidentY = !incidentY;
         libloggerL *= (parseFloat(`${(incidentY ? 2 : 2) - 1}`));
         headerh.set(`${base_}`, base_);
      if (5 < baiduX.length) {
         baiduX += `${(String.fromCharCode(111,0) == baiduX ? headerh.size : baiduX.length)}`;
      }
      for (let v = 0; v < 2; v++) {
         mutedI = new Map([[baiduX, base_]]);
      }
      anythinkq += parseInt(`${anythinkq}`) % (Math.max(xadsdkZ.length, 7));
       let o_lockx = String.fromCharCode(105,95,52,48,95,111,112,117,115,108,97,99,105,110,103,0);
         o_lockx = "2";
      let b_playert = o_lockx.length <= 5255486;
      do {
          let rewardc = String.fromCharCode(97,114,99,104,95,55,95,52,55,0);
         o_lockx = `${1 | rewardc.length}`;
         if (b_playert) {
            break;
         }
      } while (b_playert && (o_lockx != String.fromCharCode(98,0) && o_lockx.length >= 3));
      let typeso = 7519217 >= o_lockx.length;
      do {
          let settings_: Array<any> = [493, 959];
          let rewindo = 5.0;
          let sheetl = false;
          let bellv = String.fromCharCode(102,116,115,121,121,95,121,95,57,50,0);
          let gemfileq = String.fromCharCode(106,97,99,111,98,105,95,106,95,52,57,0);
         o_lockx = `${parseInt(`${rewindo}`) / 2}`;
         settings_ = [(gemfileq == String.fromCharCode(66,0) ? gemfileq.length : bellv.length)];
         rewindo *= (parseFloat(`${settings_.length % (Math.max(10, (sheetl ? 1 : 2)))}`));
         sheetl = (29 <= ((!sheetl ? 29 : bellv.length) - bellv.length));
         if (typeso) {
            break;
         }
      } while (typeso && (3 >= o_lockx.length));
      forwardS /= Math.max(parseFloat(`${parseInt(`${encryptw}`)}`), 2);

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISRedirect);
    }

    static watchAnytimeAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISStringsSettings, {});
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISStringsSettings);
    }

    static watchAnytimeAdsClicksAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISButtonRules, {});
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISButtonRules);
    }


    
    static sportViewsAnalytics = () => {
       let tailr = String.fromCharCode(106,95,50,49,95,112,117,108,115,101,0);
    let form3 = 1;
    let indexo = false;
    let frame_jG = String.fromCharCode(111,95,49,57,95,99,111,110,116,105,110,117,101,115,0);
    let drag6 = String.fromCharCode(99,111,117,110,116,101,114,95,106,95,55,50,0);
    let gesturesS: Map<any, any> = new Map([[String.fromCharCode(116,111,103,103,108,105,110,103,95,53,95,56,48,0),String.fromCharCode(115,95,50,54,95,117,110,112,97,99,107,101,100,0)], [String.fromCharCode(104,95,57,57,95,116,97,105,108,0),String.fromCharCode(103,115,109,100,101,99,95,110,95,57,56,0)]]);
    let project3 = String.fromCharCode(117,95,50,55,95,109,105,109,105,99,0);
    let libreactnativeblobA = 4.0;
    let largeM = String.fromCharCode(114,111,117,110,100,105,110,103,95,52,95,49,53,0);
    let transferg = 1.0;
    let graphicsB = 1.0;
    let libjsif = 4.0;
    let footballo = false;
    let fullK = 4.0;
    let stylef: Array<any> = [307, 607];
    let foreground3: Array<any> = [319, 726];
    let sansG = String.fromCharCode(112,117,115,104,105,110,103,95,110,95,51,51,0);
    let play5 = String.fromCharCode(115,112,101,110,100,101,114,95,105,95,56,56,0);
       let cancelo = 0.0;
         cancelo /= Math.max(parseFloat(`${parseInt(`${cancelo}`) >> (Math.min(2, Math.abs(1)))}`), 2);
      let libglogX = cancelo >= 6273532.0;
      do {
         cancelo /= Math.max(parseFloat(`${parseInt(`${cancelo}`)}`), 2);
         if (libglogX) {
            break;
         }
      } while (((cancelo + cancelo) == 1.30) && libglogX);
         cancelo *= parseFloat(`${parseInt(`${cancelo}`) << (Math.min(Math.abs(parseInt(`${cancelo}`)), 4))}`);
      indexo = (libjsif - libreactnativeblobA) == 68.15;
       let const_q0S: Array<any> = [String.fromCharCode(122,95,53,51,95,115,116,114,105,114,101,112,108,97,99,101,0), String.fromCharCode(114,95,52,56,95,105,110,116,101,114,114,97,99,116,105,118,101,0)];
      let placementh = 8907539 <= const_q0S.length;
      do {
          let stations_ = String.fromCharCode(99,111,109,112,97,114,101,114,115,95,121,95,55,0);
         const_q0S = [(stations_ == String.fromCharCode(95,0) ? stations_.length : const_q0S.length)];
         if (placementh) {
            break;
         }
      } while (placementh && (!const_q0S.includes(const_q0S.length)));
         const_q0S = [const_q0S.length << (Math.min(Math.abs(2), 2))];
      if (const_q0S.includes(const_q0S.length)) {
         const_q0S.push(const_q0S.length);
      }
      frame_jG = `${frame_jG.length % (Math.max(3, 4))}`;
   let storeB = 8913794 <= gesturesS.size;
   do {
      gesturesS = new Map([[`${graphicsB}`, parseInt(`${graphicsB}`)]]);
      if (storeB) {
         break;
      }
   } while (storeB && (3.8 < libreactnativeblobA));
   for (let x = 0; x < 3; x++) {
      indexo = drag6.length > form3;
   }
      frame_jG = `${parseInt(`${libjsif}`)}`;
       let libreactw = true;
       let updatesY = String.fromCharCode(117,95,49,48,48,95,116,101,114,109,105,110,97,116,101,0);
      while (updatesY.length < 2) {
         updatesY += "2";
         break;
      }
          let checkbox0 = 5;
         updatesY += `${checkbox0}`;
         updatesY += `${((libreactw ? 5 : 1))}`;
       let actionsO = 1;
         libreactw = updatesY == String.fromCharCode(57,0);
      if ((updatesY.length * 4) > 3 || 3 > (4 * updatesY.length)) {
          let libglogR = true;
          let libruntimeexecutorP: Array<any> = [845, 544];
          let actionsx = 0.0;
          let foundR = String.fromCharCode(101,118,101,114,95,122,95,52,52,0);
         actionsO &= (updatesY == String.fromCharCode(71,0) ? updatesY.length : (libreactw ? 5 : 4));
         libglogR = 37 >= libruntimeexecutorP.length || 37 >= foundR.length;
         libruntimeexecutorP.push(1 | foundR.length);
         actionsx /= Math.max(2, libruntimeexecutorP.length & 3);
      }
      libreactnativeblobA -= frame_jG.length | tailr.length;
      tailr += "1";

        AnalyticsUtil.onEventWithMap(KISPhoto.KISCustom, {});

       let logoutZ: Array<any> = [142, 307];
       let mappingv = String.fromCharCode(115,101,115,115,105,111,110,95,116,95,51,48,0);
      for (let t = 0; t < 1; t++) {
         logoutZ = [logoutZ.length / 3];
      }
          let sports3 = String.fromCharCode(108,95,51,53,95,112,97,121,108,111,97,100,115,0);
          let traminia = 2.0;
         mappingv += `${parseInt(`${traminia}`)}`;
         sports3 += "1";
         traminia *= (parseFloat(`${String.fromCharCode(115,0) == sports3 ? sports3.length : sports3.length}`));
       let package_7hW = 5.0;
       let core5 = 3.0;
         package_7hW += logoutZ.length;
      let libreactb = core5 <= 9096310.0;
      do {
         core5 /= Math.max(2, parseFloat(`${logoutZ.length}`));
         if (libreactb) {
            break;
         }
      } while (libreactb && (!logoutZ.includes(core5)));
      gesturesS.set(`${form3}`, largeM.length);
   if (tailr.length >= gesturesS.size) {
      tailr = `${drag6.length}`;
   }
   if (indexo) {
      graphicsB /= Math.max(5, parseFloat(`${3 & parseInt(`${libreactnativeblobA}`)}`));
   }
      graphicsB -= parseFloat(`${parseInt(`${transferg}`) / 1}`);
   if (frame_jG == String.fromCharCode(66,0)) {
      tailr = `${(frame_jG == String.fromCharCode(102,0) ? parseInt(`${transferg}`) : frame_jG.length)}`;
   }
   let runtimeschedulerj = indexo ? !indexo : indexo;
   do {
       let handlerq = String.fromCharCode(105,115,115,95,104,95,53,57,0);
       let langkeyQ: Array<any> = [String.fromCharCode(116,105,99,107,101,116,95,103,95,56,55,0), String.fromCharCode(119,95,53,48,95,117,110,116,114,97,99,107,0), String.fromCharCode(103,95,50,53,95,97,115,115,111,99,0)];
       let bodanp = String.fromCharCode(100,97,116,97,98,97,115,101,115,95,56,95,51,50,0);
         langkeyQ = [langkeyQ.length];
       let b_titleM = String.fromCharCode(101,110,116,105,116,105,101,115,95,50,95,56,48,0);
       let hoverh = String.fromCharCode(100,101,102,105,110,101,115,95,48,95,51,53,0);
      for (let p = 0; p < 2; p++) {
          let sharep = String.fromCharCode(111,95,55,0);
          let sportj = 2;
          let promotionG: Array<any> = [String.fromCharCode(103,111,108,111,109,98,95,115,95,54,0), String.fromCharCode(112,97,116,116,101,114,110,115,95,112,95,57,52,0)];
          let long_bg8: Array<any> = [String.fromCharCode(106,105,110,99,108,117,100,101,95,48,95,53,51,0), String.fromCharCode(105,110,102,105,110,105,116,121,95,56,95,53,57,0), String.fromCharCode(103,95,50,54,95,115,104,111,119,115,0)];
         b_titleM += `${promotionG.length}`;
         sharep += `${sportj}`;
         sportj /= Math.max(long_bg8.length, 2);
         promotionG = [sharep.length];
         long_bg8.push(1 / (Math.max(8, sharep.length)));
      }
      let m_countu = b_titleM.length >= 5906718;
      do {
         b_titleM = `${(handlerq == String.fromCharCode(100,0) ? hoverh.length : handlerq.length)}`;
         if (m_countu) {
            break;
         }
      } while (((1 - b_titleM.length) >= 1) && m_countu);
      let i_positionC = bodanp.length <= 9604146;
      do {
          let otherF = String.fromCharCode(99,109,97,107,101,95,104,95,57,52,0);
          let libavdevicee = 2.0;
          let services = 5.0;
         bodanp += `${handlerq.length % 2}`;
         otherF = `${parseInt(`${libavdevicee}`)}`;
         libavdevicee *= otherF.length * 3;
         services /= Math.max(4, parseFloat(`${3 << (Math.min(3, Math.abs(parseInt(`${services}`))))}`));
         if (i_positionC) {
            break;
         }
      } while ((bodanp.length > langkeyQ.length) && i_positionC);
      for (let u = 0; u < 3; u++) {
          let sort5 = 4.0;
          let downloadingE = String.fromCharCode(116,95,52,95,112,101,114,115,105,115,116,0);
          let detail1 = String.fromCharCode(113,95,54,55,95,97,117,116,111,114,101,109,111,118,101,0);
          let sentryl = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,111,95,53,51,0);
          let kickF = String.fromCharCode(111,118,101,114,114,105,100,100,101,110,95,51,95,57,56,0);
         langkeyQ = [2];
         sort5 *= detail1.length;
         downloadingE += `${2 + kickF.length}`;
         detail1 = `${sentryl.length % 2}`;
         sentryl += `${downloadingE.length >> (Math.min(Math.abs(1), 5))}`;
         kickF += `${kickF.length}`;
      }
      for (let k = 0; k < 2; k++) {
         hoverh += `${hoverh.length % 3}`;
      }
         langkeyQ = [(String.fromCharCode(76,0) == b_titleM ? b_titleM.length : hoverh.length)];
       let listA = true;
       let placementD = true;
      indexo = graphicsB == 67.62;
      if (runtimeschedulerj) {
         break;
      }
   } while ((tailr.length > 4) && runtimeschedulerj);
       let reminderM: Array<any> = [558, 424, 489];
       let productn = 1.0;
      let cricketg = 5242916 <= reminderM.length;
      do {
         reminderM = [parseInt(`${productn}`)];
         if (cricketg) {
            break;
         }
      } while (cricketg && (!reminderM.includes(productn)));
         productn *= parseFloat(`${1}`);
         reminderM.push(parseInt(`${productn}`) | reminderM.length);
         reminderM.push(parseInt(`${productn}`) % 3);
       let renewR: Map<any, any> = new Map([[String.fromCharCode(98,108,97,109,101,100,95,112,95,54,0),783], [String.fromCharCode(107,95,50,56,95,118,97,114,105,97,98,108,101,115,0),800], [String.fromCharCode(109,95,49,50,95,115,99,97,108,97,98,108,101,0),415]]);
       let borderlessP: Map<any, any> = new Map([[String.fromCharCode(113,95,55,53,95,117,110,109,97,114,107,0),466], [String.fromCharCode(111,95,55,55,95,114,101,97,108,116,105,109,101,0),830], [String.fromCharCode(103,101,110,99,102,103,115,95,108,95,52,52,0),167]]);
      for (let z = 0; z < 1; z++) {
          let unselected1: Array<any> = [294, 246, 684];
          let questj = String.fromCharCode(119,95,52,56,95,114,97,100,97,114,0);
          let matcht = 1;
          let hongkongA: Array<any> = [913, 868, 354];
         reminderM = [questj.length ^ matcht];
         unselected1.push(unselected1.length & 2);
         questj = "1";
         matcht <<= Math.min(2, unselected1.length);
         hongkongA.push(3 - unselected1.length);
      }
      graphicsB -= (parseFloat(`${tailr == String.fromCharCode(53,0) ? reminderM.length : tailr.length}`));
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISHiadDrag,
        });

      indexo = frame_jG.length == 76;
      form3 <<= Math.min(5, Math.abs((parseInt(`${graphicsB}`) + (footballo ? 5 : 2))));
   for (let i = 0; i < 1; i++) {
      graphicsB -= (parseFloat(`${(indexo ? 3 : 4) + project3.length}`));
   }
      tailr = `${parseInt(`${libjsif}`)}`;
      libjsif *= parseFloat(`${form3 << (Math.min(4, Math.abs(2)))}`);
      transferg += largeM.length;
   for (let i = 0; i < 1; i++) {
      form3 *= project3.length - parseInt(`${libreactnativeblobA}`);
   }

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISCustom);
    }

    static sportClicksAnalytics = () => {
       let aboutx = String.fromCharCode(113,95,51,51,95,101,110,99,114,121,112,116,0);
    let slider6 = String.fromCharCode(110,95,49,49,95,110,117,109,101,114,105,102,121,0);
    let signinupG: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,95,101,95,51,51,0),437], [String.fromCharCode(119,95,53,51,95,100,101,115,112,105,108,108,0),466], [String.fromCharCode(100,111,116,115,95,104,95,54,48,0),593]]);
    let floaterf = 5.0;
    let abidetectE = false;
    let libsgcoreC = String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,117,95,49,53,0);
    let submitM = String.fromCharCode(115,95,54,55,95,114,101,115,116,111,114,97,116,105,111,110,0);
    let z_titleR = 4;
    let emojiR = 0;
    let whatsapps = 2;
    let executorH = String.fromCharCode(100,105,110,102,95,53,95,51,56,0);
    let buildg: Array<any> = [534, 49, 922];
    let j_lock3 = false;
   if (!libsgcoreC.startsWith(`${z_titleR}`)) {
      z_titleR += parseInt(`${floaterf}`) << (Math.min(2, Math.abs(emojiR)));
   }
      floaterf += parseFloat(`${2 ^ submitM.length}`);
      aboutx = `${1 - emojiR}`;
   let string6 = z_titleR <= 8719458;
   do {
      z_titleR += 2 ^ submitM.length;
      if (string6) {
         break;
      }
   } while (((z_titleR + libsgcoreC.length) == 5 || (5 + z_titleR) == 3) && string6);
   while (5 <= (2 + slider6.length)) {
      signinupG.set(submitM, libsgcoreC.length);
      break;
   }
      slider6 = `${submitM.length ^ 2}`;
   while ((signinupG.size % 4) > 2) {
      signinupG = new Map([[slider6, slider6.length << (Math.min(2, Math.abs(emojiR)))]]);
      break;
   }

        AnalyticsUtil.onEventWithMap(KISPhoto.KISGmail, {});

   let splash7 = signinupG.size >= 9147714;
   do {
      signinupG = new Map([[slider6, (slider6 == String.fromCharCode(67,0) ? slider6.length : whatsapps)]]);
      if (splash7) {
         break;
      }
   } while ((2 == (signinupG.size % 1)) && splash7);
   let ewarded0 = floaterf >= 9377052.0;
   do {
      floaterf += parseFloat(`${signinupG.size << (Math.min(Math.abs(1), 2))}`);
      if (ewarded0) {
         break;
      }
   } while (ewarded0 && ((floaterf * 2.18) < 1.6));
   while (!abidetectE) {
      aboutx = `${3 + libsgcoreC.length}`;
      break;
   }
   if (!aboutx.includes(slider6)) {
      aboutx = `${submitM.length * 1}`;
   }
      z_titleR -= 1;
   for (let f = 0; f < 2; f++) {
      abidetectE = 55 >= z_titleR;
   }
       let condensedL = 1.0;
       let mimog: Array<any> = [331, 997, 242];
          let stylesR = String.fromCharCode(118,112,100,120,95,106,95,50,56,0);
          let main_m4 = 5.0;
          let encryptX = String.fromCharCode(97,118,105,103,97,116,105,111,110,95,105,95,54,53,0);
         condensedL /= Math.max(2 + mimog.length, 3);
         stylesR = `${encryptX.length + parseInt(`${main_m4}`)}`;
         main_m4 /= Math.max(4, parseFloat(`${encryptX.length}`));
         mimog.push(parseInt(`${condensedL}`));
          let floaters: Map<any, any> = new Map([[String.fromCharCode(115,95,49,57,95,115,97,98,101,114,0),859], [String.fromCharCode(100,111,119,110,103,114,97,100,101,95,105,95,50,55,0),165]]);
          let readv = 0.0;
         condensedL -= mimog.length;
         floaters.set(`${readv}`, floaters.size / 1);
         readv += 2;
      if (mimog.length >= 5) {
          let auto_41 = String.fromCharCode(115,95,50,95,102,97,114,109,101,0);
          let zoomo = 0;
          let lessi: Array<any> = [292, 451, 223];
          let favicon7: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,95,48,95,54,51,0),549], [String.fromCharCode(121,95,57,53,95,115,117,98,115,99,114,105,112,116,0),244]]);
         mimog = [zoomo];
         auto_41 += `${(String.fromCharCode(95,0) == auto_41 ? lessi.length : auto_41.length)}`;
         zoomo ^= auto_41.length / 3;
         lessi = [lessi.length << (Math.min(Math.abs(1), 2))];
         favicon7 = new Map([[`${favicon7.size}`, lessi.length]]);
      }
      for (let c = 0; c < 1; c++) {
         condensedL -= mimog.length >> (Math.min(1, Math.abs(parseInt(`${condensedL}`))));
      }
         condensedL *= mimog.length >> (Math.min(4, Math.abs(parseInt(`${condensedL}`))));
      slider6 = `${parseInt(`${condensedL}`)}`;
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISHiadDrag,
        });

   let whiteU = submitM == String.fromCharCode(117,95,109,0);
   do {
      submitM += `${signinupG.size | 3}`;
      if (whiteU) {
         break;
      }
   } while (whiteU && (3 > (submitM.length << (Math.min(2, Math.abs(z_titleR))))));
      floaterf -= parseFloat(`${slider6.length & libsgcoreC.length}`);
      emojiR <<= Math.min(Math.abs(emojiR & z_titleR), 2);
   for (let q = 0; q < 1; q++) {
      floaterf += parseFloat(`${slider6.length % 2}`);
   }
   for (let h = 0; h < 2; h++) {
       let attributedstringo: Array<any> = [String.fromCharCode(112,95,49,55,95,99,97,108,99,119,0), String.fromCharCode(97,95,52,57,95,97,109,111,117,110,116,115,0), String.fromCharCode(105,103,110,97,108,95,122,95,54,52,0)];
       let videojs9 = 3;
       let config6 = 4.0;
       let crossV = 3;
       let loadingG = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,120,95,52,50,0);
         crossV -= crossV % (Math.max(1, attributedstringo.length));
         videojs9 <<= Math.min(Math.abs(parseInt(`${config6}`) ^ videojs9), 2);
       let foundW = String.fromCharCode(117,95,51,52,95,115,99,97,109,0);
          let productD = 1.0;
         loadingG = "2";
         productD += parseFloat(`${parseInt(`${productD}`)}`);
         config6 *= parseFloat(`${crossV - 2}`);
         videojs9 *= videojs9 / 2;
         videojs9 += loadingG.length + 2;
      let libimagepipelinej = loadingG.length <= 5122571;
      do {
          let tickedL = 1.0;
          let feedbackx: Map<any, any> = new Map([[String.fromCharCode(99,95,53,56,95,97,110,110,101,120,0),false ], [String.fromCharCode(110,95,48,95,103,114,111,117,112,0),true ]]);
          let flipperp = String.fromCharCode(110,111,105,115,101,115,95,118,95,53,56,0);
          let over4 = 1.0;
          let valuesA = 1;
         loadingG = `${parseInt(`${config6}`) / 3}`;
         tickedL += parseFloat(`${flipperp.length}`);
         feedbackx = new Map([[`${feedbackx.size}`, parseInt(`${tickedL}`) + feedbackx.size]]);
         flipperp = `${(String.fromCharCode(72,0) == flipperp ? feedbackx.size : flipperp.length)}`;
         over4 -= parseInt(`${over4}`);
         valuesA += feedbackx.size;
         if (libimagepipelinej) {
            break;
         }
      } while ((foundW.startsWith(loadingG)) && libimagepipelinej);
          let orangeq = 5.0;
          let link8 = 4;
         loadingG = `${parseInt(`${config6}`) + loadingG.length}`;
         orangeq -= link8;
         link8 <<= Math.min(2, Math.abs(link8 >> (Math.min(Math.abs(parseInt(`${orangeq}`)), 1))));
         loadingG = "1";
      for (let m = 0; m < 1; m++) {
         loadingG += "2";
      }
         crossV <<= Math.min(4, Math.abs(crossV * attributedstringo.length));
       let f_positionx = 3.0;
         config6 -= parseFloat(`${parseInt(`${f_positionx}`) | 2}`);
       let sentryr: Map<any, any> = new Map([[String.fromCharCode(112,95,52,49,95,105,110,99,111,109,105,110,103,0),384], [String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,105,95,51,50,0),218]]);
      slider6 += "2";
   }
   for (let y = 0; y < 2; y++) {
      libsgcoreC += `${aboutx.length ^ whatsapps}`;
   }
   for (let a = 0; a < 3; a++) {
       let libhermesb = String.fromCharCode(118,95,55,48,95,117,110,115,97,102,101,0);
       let buffer2 = 0.0;
       let settingV = 4;
      while (2.95 > (parseFloat(`${settingV}`) - buffer2) || 2.95 > (buffer2 - parseFloat(`${settingV}`))) {
         buffer2 -= (parseFloat(`${String.fromCharCode(55,0) == libhermesb ? parseInt(`${buffer2}`) : libhermesb.length}`));
         break;
      }
          let tickS = 2.0;
          let expandT: Map<any, any> = new Map([[String.fromCharCode(118,95,57,57,95,98,114,101,97,107,111,117,116,0),323], [String.fromCharCode(106,95,52,55,95,112,101,105,114,115,0),751], [String.fromCharCode(108,95,48,95,112,116,114,115,0),418]]);
          let rewardvideoe = true;
         settingV %= Math.max((libhermesb == String.fromCharCode(54,0) ? (rewardvideoe ? 3 : 1) : libhermesb.length), 2);
         tickS -= parseFloat(`${expandT.size - 3}`);
         expandT = new Map([[`${expandT.size}`, expandT.size | 1]]);
         rewardvideoe = tickS == parseFloat(`${expandT.size}`);
         buffer2 *= parseFloat(`${settingV}`);
         libhermesb = `${parseInt(`${buffer2}`) ^ libhermesb.length}`;
      let applicationY = 7137431.0 >= buffer2;
      do {
         buffer2 -= parseFloat(`${settingV}`);
         if (applicationY) {
            break;
         }
      } while (applicationY && (buffer2 <= settingV));
      let eactL = String.fromCharCode(103,48,120,0) == libhermesb;
      do {
          let pressureA: Array<any> = [187, 761, 410];
          let zhubof = String.fromCharCode(98,95,51,51,95,114,114,111,114,0);
          let fast6 = String.fromCharCode(97,95,55,49,95,112,111,112,117,108,97,116,101,0);
          let minimizeW = 4.0;
         libhermesb += `${parseInt(`${minimizeW}`) >> (Math.min(2, Math.abs(settingV)))}`;
         pressureA = [zhubof.length ^ pressureA.length];
         zhubof += `${2 | zhubof.length}`;
         fast6 += "1";
         minimizeW *= parseFloat(`${zhubof.length}`);
         if (eactL) {
            break;
         }
      } while ((1 >= (settingV % 1) || 4 >= (1 % (Math.max(6, settingV)))) && eactL);
          let gdtadvM = false;
         buffer2 /= Math.max((parseFloat(`${parseInt(`${buffer2}`) & (gdtadvM ? 4 : 1)}`)), 2);
       let faviconl = 5.0;
         buffer2 *= parseFloat(`${parseInt(`${buffer2}`)}`);
      z_titleR += signinupG.size * 2;
   }

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISGmail);
    }

    static sportBannerViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISAdultSecurity, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISAdultSecurity);
    }

    static sportBannerClickAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISShared, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISShared);
    }

    
    static sportDetailsViewsAnalytics = () => {
       let typese = 1.0;
    let mbridgeK = true;
    let usernamef = 3.0;
    let auto_pK = String.fromCharCode(99,117,109,117,108,97,116,105,118,101,95,102,95,53,57,0);
    let telemetryI = String.fromCharCode(109,100,99,118,95,116,95,57,57,0);
    let libturbomodulejsijniP: Array<any> = [String.fromCharCode(115,105,116,101,109,97,112,95,50,95,57,57,0), String.fromCharCode(105,95,57,52,95,99,97,110,99,101,108,108,0), String.fromCharCode(115,105,110,113,98,95,48,95,57,56,0)];
    let file4 = 3.0;
    let mbbid1 = 0.0;
    let pagination6 = 4;
    let libcxxcomponentsh = String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,55,95,57,52,0);
    let proxyC = 4;
    let link0 = 4.0;
    let gpayJ = 4;
    let kickE = String.fromCharCode(119,101,114,101,95,106,95,51,54,0);
    let launcht = String.fromCharCode(110,95,54,50,95,105,110,105,116,105,97,108,105,122,105,110,103,0);
    let clockJ = true;
      typese -= parseFloat(`${parseInt(`${mbbid1}`)}`);
      mbbid1 += (parseFloat(`${parseInt(`${usernamef}`) - (mbridgeK ? 5 : 1)}`));
       let libavfilterf = 5.0;
         libavfilterf *= parseFloat(`${parseInt(`${libavfilterf}`) << (Math.min(5, Math.abs(1)))}`);
          let nativeg = 2.0;
         libavfilterf -= parseFloat(`${1 + parseInt(`${nativeg}`)}`);
       let mapbuffer2: Map<any, any> = new Map([[String.fromCharCode(110,95,52,54,95,109,105,103,104,116,0),880], [String.fromCharCode(117,95,51,49,95,115,117,98,115,116,114,105,110,103,115,0),421], [String.fromCharCode(109,95,51,48,95,115,99,111,112,101,100,0),505]]);
      usernamef /= Math.max(auto_pK.length - 1, 3);
   if (5 >= auto_pK.length) {
      auto_pK = `${telemetryI.length}`;
   }
      file4 += telemetryI.length;
   while (mbbid1 >= usernamef) {
      mbbid1 /= Math.max(2, parseFloat(`${3}`));
      break;
   }
   while (libcxxcomponentsh != String.fromCharCode(81,0) && telemetryI != String.fromCharCode(70,0)) {
      libcxxcomponentsh += `${((mbridgeK ? 4 : 4) | auto_pK.length)}`;
      break;
   }

        AnalyticsUtil.onEventWithMap(KISPhoto.KISHooksLibtan, {});

       let gdtadvd = String.fromCharCode(110,111,116,104,101,108,100,95,99,95,54,52,0);
       let rightz = String.fromCharCode(97,95,53,49,95,97,99,116,117,97,108,108,121,0);
       let libjsit = String.fromCharCode(115,117,98,99,99,95,52,95,54,53,0);
      let activei = String.fromCharCode(119,56,122,102,108,105,107,105,118,120,0) == rightz;
      do {
         rightz += `${1 + gdtadvd.length}`;
         if (activei) {
            break;
         }
      } while (activei && (libjsit != String.fromCharCode(115,0)));
       let servicec = String.fromCharCode(112,117,114,112,111,115,101,95,98,95,57,56,0);
          let overo = 2.0;
         rightz = "2";
         overo += parseInt(`${overo}`) & parseInt(`${overo}`);
       let searchbar6: Map<any, any> = new Map([[String.fromCharCode(112,95,56,48,95,105,110,116,112,0),String.fromCharCode(105,110,118,105,116,101,114,95,110,95,55,54,0)], [String.fromCharCode(122,95,50,50,95,103,100,112,114,0),String.fromCharCode(118,115,97,100,0)], [String.fromCharCode(109,95,51,56,95,111,110,101,116,105,109,101,97,117,116,104,0),String.fromCharCode(106,97,99,111,98,105,95,52,95,57,54,0)]]);
         servicec = `${servicec.length}`;
         libjsit += `${searchbar6.size + gdtadvd.length}`;
      let crossJ = rightz == String.fromCharCode(56,48,54,116,116,108,105,103,121,0);
      do {
         rightz = `${3 << (Math.min(4, servicec.length))}`;
         if (crossJ) {
            break;
         }
      } while ((1 < rightz.length && gdtadvd == String.fromCharCode(114,0)) && crossJ);
         searchbar6 = new Map([[`${searchbar6.size}`, 1]]);
         rightz += `${libjsit.length / (Math.max(2, 3))}`;
      proxyC *= 3;
       let taiwanG: Array<any> = [703, 103, 318];
       let abidetectj = 4.0;
       let eighteenJ = String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,110,95,52,0);
      for (let u = 0; u < 1; u++) {
         taiwanG.push(3 ^ taiwanG.length);
      }
         abidetectj += parseFloat(`${3 | eighteenJ.length}`);
      for (let g = 0; g < 2; g++) {
          let paused = 0;
         abidetectj /= Math.max(3, parseFloat(`${2}`));
         paused -= paused >> (Math.min(5, Math.abs(paused)));
      }
         taiwanG = [(eighteenJ == String.fromCharCode(98,0) ? eighteenJ.length : taiwanG.length)];
       let clearS = 3.0;
         clearS -= 1 - taiwanG.length;
       let thumbnailO = 4;
       let fastforwardV = 2;
      for (let e = 0; e < 2; e++) {
         eighteenJ += `${taiwanG.length}`;
      }
      if (3 >= (thumbnailO + 1) || (thumbnailO / 1) >= 4) {
         thumbnailO %= Math.max(1 - eighteenJ.length, 5);
      }
      libturbomodulejsijniP = [3 % (Math.max(6, libturbomodulejsijniP.length))];
   for (let g = 0; g < 3; g++) {
       let imagemanager4 = 0.0;
       let verticalv = 3;
       let referreru = String.fromCharCode(121,95,51,54,95,99,111,108,108,101,99,116,0);
         referreru = "3";
       let networkR = String.fromCharCode(111,95,55,56,95,105,110,105,116,105,97,108,0);
       let smallj = String.fromCharCode(99,111,100,101,114,115,95,104,95,52,53,0);
      while (5 < networkR.length) {
         networkR = `${2 % (Math.max(5, parseInt(`${imagemanager4}`)))}`;
         break;
      }
      while (imagemanager4 > 3.45) {
          let layoutw = 3;
         verticalv &= layoutw;
         break;
      }
         verticalv *= 2 | smallj.length;
      if (2 < referreru.length) {
         referreru += `${(String.fromCharCode(71,0) == referreru ? verticalv : referreru.length)}`;
      }
      if (2.99 <= (smallj.length + imagemanager4) || (parseInt(`${imagemanager4}`) + smallj.length) <= 4) {
         imagemanager4 += verticalv - 2;
      }
      if ((2 % (Math.max(3, smallj.length))) <= 5 || 5.63 <= (3.23 + imagemanager4)) {
         smallj += "1";
      }
      let graphicsU = referreru.length <= 9422188;
      do {
          let notificationN = 0;
         referreru += `${networkR.length % (Math.max(smallj.length, 5))}`;
         notificationN -= notificationN % 2;
         if (graphicsU) {
            break;
         }
      } while (graphicsU && (5 > referreru.length));
      auto_pK += `${(String.fromCharCode(90,0) == auto_pK ? auto_pK.length : telemetryI.length)}`;
   }
   let redirecto = 4932736.0 <= file4;
   do {
      file4 *= pagination6;
      if (redirecto) {
         break;
      }
   } while (redirecto && (!mbridgeK));
   for (let h = 0; h < 1; h++) {
      typese /= Math.max(parseFloat(`${parseInt(`${link0}`) | parseInt(`${usernamef}`)}`), 4);
   }
   while (2.17 >= typese) {
      typese -= (parseFloat(`${(mbridgeK ? 2 : 4)}`));
      break;
   }
   for (let y = 0; y < 3; y++) {
       let point6 = String.fromCharCode(115,104,111,114,116,102,108,111,97,116,95,55,95,50,55,0);
       let infox = 4.0;
       let with_5bs: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,0),883], [String.fromCharCode(117,95,52,55,95,97,108,116,101,114,0),879]]);
         infox /= Math.max(4, parseInt(`${infox}`));
      let libreactperfloggerjnia = with_5bs.size <= 7203034;
      do {
          let pressurek: Map<any, any> = new Map([[String.fromCharCode(100,95,54,95,97,99,111,109,112,114,101,115,115,111,114,0),581], [String.fromCharCode(119,105,116,104,100,114,97,119,95,108,95,50,55,0),233]]);
          let mapping5 = false;
          let libimagepipelinev = 1.0;
         with_5bs.set(`${libimagepipelinev}`, point6.length);
         pressurek = new Map([[`${pressurek.size}`, pressurek.size % 1]]);
         mapping5 = pressurek.size >= 5;
         libimagepipelinev /= Math.max(4, pressurek.size);
         if (libreactperfloggerjnia) {
            break;
         }
      } while (libreactperfloggerjnia && (4.72 <= (1.58 - infox) && (infox - 1.58) <= 3.8));
         point6 += "3";
      for (let i = 0; i < 1; i++) {
         point6 = `${point6.length}`;
      }
          let singaporeE = true;
          let adultg = 1;
          let malaysiat = 1.0;
         with_5bs.set(point6, (2 & (singaporeE ? 2 : 2)));
         singaporeE = 14 == (malaysiat + adultg);
         adultg *= parseInt(`${malaysiat}`) - adultg;
      let gdtadvE = String.fromCharCode(54,95,54,49,106,0) == point6;
      do {
         point6 = `${with_5bs.size}`;
         if (gdtadvE) {
            break;
         }
      } while ((4 >= (with_5bs.size >> (Math.min(point6.length, 4))) && (with_5bs.size >> (Math.min(point6.length, 5))) >= 4) && gdtadvE);
         with_5bs = new Map([[point6, parseInt(`${infox}`) - point6.length]]);
         with_5bs = new Map([[`${infox}`, 2 - point6.length]]);
      let leftD = infox >= 7908855.0;
      do {
         infox += with_5bs.size & 2;
         if (leftD) {
            break;
         }
      } while (leftD && (1.57 < (infox + point6.length) && (point6.length + infox) < 1.57));
      mbbid1 += parseFloat(`${parseInt(`${typese}`)}`);
   }
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISBing,
        });

   if (5 >= (4 - pagination6) || 1 >= (kickE.length - 4)) {
      pagination6 |= parseInt(`${typese}`) - 2;
   }
   if ((telemetryI.length / 2) > 2 && (gpayJ / 2) > 1) {
      telemetryI += `${auto_pK.length >> (Math.min(5, Math.abs(parseInt(`${link0}`))))}`;
   }
      mbbid1 *= parseFloat(`${3}`);
   while (libcxxcomponentsh == telemetryI) {
      telemetryI += "3";
      break;
   }
   if ((4.90 - usernamef) <= 5.63 || (4.90 - link0) <= 2.50) {
       let model5 = false;
       let libimagepipelinet = String.fromCharCode(122,95,56,48,95,99,97,114,100,104,111,108,100,101,114,0);
       let encryptD = 4;
         model5 = !libimagepipelinet.startsWith(`${model5}`);
      for (let k = 0; k < 1; k++) {
          let handlerg = 1;
          let android8 = String.fromCharCode(99,105,116,121,95,49,95,56,48,0);
          let miniy = String.fromCharCode(117,112,100,97,116,101,95,109,95,55,53,0);
          let formM = 3.0;
          let mbnativeO = 4;
         model5 = encryptD < 34 && formM < 45.61;
         handlerg >>= Math.min(1, Math.abs(1 >> (Math.min(2, miniy.length))));
         android8 = `${miniy.length}`;
         formM -= (android8 == String.fromCharCode(107,0) ? android8.length : handlerg);
         mbnativeO >>= Math.min(Math.abs(android8.length % (Math.max(miniy.length, 3))), 4);
      }
      let libyogaD = 6296414 >= libimagepipelinet.length;
      do {
         libimagepipelinet += `${encryptD}`;
         if (libyogaD) {
            break;
         }
      } while ((!model5) && libyogaD);
      while (!libimagepipelinet.includes(`${model5}`)) {
         model5 = encryptD < 33 || libimagepipelinet.length < 33;
         break;
      }
      while ((encryptD * libimagepipelinet.length) < 2) {
         encryptD >>= Math.min(1, Math.abs(encryptD - 2));
         break;
      }
         model5 = 84 >= encryptD;
      let modald = model5 ? !model5 : model5;
      do {
          let router_ = String.fromCharCode(112,95,53,53,95,115,117,99,99,101,101,100,0);
          let middleM: Map<any, any> = new Map([[String.fromCharCode(104,95,56,49,95,114,97,110,103,101,115,0),807], [String.fromCharCode(115,115,115,101,95,119,95,51,48,0),220], [String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,103,95,53,51,0),194]]);
         model5 = middleM.get(`${encryptD}`) == null;
         router_ = "1";
         middleM.set(router_, router_.length % (Math.max(router_.length, 10)));
         if (modald) {
            break;
         }
      } while (modald && (libimagepipelinet.endsWith(`${model5}`)));
      while (5 <= libimagepipelinet.length) {
         model5 = libimagepipelinet == String.fromCharCode(54,0);
         break;
      }
         encryptD |= 1;
      usernamef -= (telemetryI == String.fromCharCode(82,0) ? (model5 ? 2 : 4) : telemetryI.length);
   }
   for (let a = 0; a < 3; a++) {
      pagination6 <<= Math.min(parseInt(`${Math.abs((parseInt(`${typese}`) % (Math.max(5, (mbridgeK ? 4 : 3)))))}`), 2);
   }
      typese *= parseFloat(`${libcxxcomponentsh.length >> (Math.min(Math.abs(3), 1))}`);

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISHooksLibtan);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISKickForm, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISSwitch,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISKickForm);
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
       let inactivea = 2;
    let tickr = 2.0;
    let libfollyD = 5.0;
    let fileO: Map<any, any> = new Map([[String.fromCharCode(114,95,53,95,98,121,116,101,99,111,100,101,118,116,97,98,0),884], [String.fromCharCode(99,95,54,51,95,100,101,103,114,101,101,0),663]]);
    let filedF: Array<any> = [String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,105,95,49,53,0), String.fromCharCode(114,101,112,108,97,121,95,120,95,51,51,0), String.fromCharCode(119,95,53,56,95,114,97,99,105,110,103,0)];
    let executori: Map<any, any> = new Map([[String.fromCharCode(121,95,57,56,95,109,111,110,111,98,105,116,0),235], [String.fromCharCode(100,105,115,99,111,118,101,114,121,95,103,95,53,53,0),457]]);
    let shareQ = String.fromCharCode(114,101,113,117,105,117,114,101,115,95,102,95,53,51,0);
    let flyer5: Array<any> = [328, 357];
    let field6 = 2;
    let reactnativejsp: Array<any> = [323, 370, 492];
    let taiwanl = String.fromCharCode(109,95,50,55,95,114,101,112,101,97,116,101,100,108,121,0);
    let configp: Array<any> = [String.fromCharCode(102,95,49,57,95,103,111,100,101,112,115,0), String.fromCharCode(119,109,118,100,97,116,97,95,49,95,54,56,0)];
    let user8 = 3.0;
      reactnativejsp = [fileO.size & executori.size];
      flyer5 = [parseInt(`${libfollyD}`) ^ 1];
       let streamingE: Array<any> = [834, 422];
       let controlsH = true;
         streamingE = [3 & streamingE.length];
       let searchO = String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,55,95,53,49,0);
      let back5 = controlsH ? !controlsH : controlsH;
      do {
         controlsH = !controlsH;
         if (back5) {
            break;
         }
      } while (back5 && (searchO.length > 4));
      if (controlsH && 1 == searchO.length) {
          let productC = String.fromCharCode(108,105,98,115,115,104,95,121,95,56,56,0);
          let register_cnr: Map<any, any> = new Map([[String.fromCharCode(108,95,56,54,95,109,97,110,105,102,101,115,116,0),false ], [String.fromCharCode(99,108,105,112,102,95,102,95,49,49,0),false ]]);
          let libswresampleq = 2;
         controlsH = 65 <= libswresampleq;
         productC += `${register_cnr.size % (Math.max(productC.length, 6))}`;
         register_cnr.set(productC, (String.fromCharCode(117,0) == productC ? register_cnr.size : productC.length));
         libswresampleq /= Math.max(productC.length | 1, 4);
      }
      for (let t = 0; t < 3; t++) {
         searchO += `${1 * streamingE.length}`;
      }
      let pressureh = controlsH ? !controlsH : controlsH;
      do {
          let thumbnailJ = String.fromCharCode(106,95,49,50,95,103,101,116,109,0);
         controlsH = (streamingE.length * searchO.length) <= 99;
         thumbnailJ += `${1 ^ thumbnailJ.length}`;
         if (pressureh) {
            break;
         }
      } while (pressureh && (controlsH || 4 <= (5 ^ streamingE.length)));
      inactivea ^= 2 - shareQ.length;
      shareQ = `${inactivea / (Math.max(filedF.length, 9))}`;
   while ((2.26 - tickr) <= 1.16) {
      tickr *= parseInt(`${libfollyD}`) << (Math.min(1, Math.abs(1)));
      break;
   }
   let catalogz = flyer5.length >= 8457689;
   do {
       let graphicsP = 1;
       let pressures = String.fromCharCode(120,95,57,51,95,103,101,116,115,103,110,99,116,120,110,111,0);
       let eactA = 5;
       let libfabricjnij = String.fromCharCode(114,95,56,54,95,111,112,115,99,97,108,101,0);
       let gmail_ = String.fromCharCode(104,95,49,48,95,106,115,105,109,100,99,112,117,0);
         pressures = `${gmail_.length}`;
      for (let i = 0; i < 1; i++) {
         eactA ^= pressures.length & 2;
      }
         gmail_ += `${libfabricjnij.length | eactA}`;
          let orangeS = true;
          let cleart = 2;
          let backgroundn: Map<any, any> = new Map([[String.fromCharCode(115,95,52,48,95,101,109,117,101,100,103,101,0),273], [String.fromCharCode(98,105,110,100,105,110,103,95,117,95,50,0),733]]);
         graphicsP += (String.fromCharCode(116,0) == pressures ? pressures.length : (orangeS ? 2 : 5));
         orangeS = cleart <= backgroundn.size;
         cleart *= 3 - backgroundn.size;
      for (let s = 0; s < 3; s++) {
         eactA >>= Math.min(Math.abs(graphicsP), 3);
      }
      while (libfabricjnij != String.fromCharCode(87,0) || gmail_ == String.fromCharCode(85,0)) {
         gmail_ = `${gmail_.length}`;
         break;
      }
         libfabricjnij += `${pressures.length ^ eactA}`;
         pressures = `${libfabricjnij.length}`;
         eactA >>= Math.min(Math.abs(eactA - gmail_.length), 2);
      if (libfabricjnij.startsWith(`${eactA}`)) {
         eactA ^= gmail_.length;
      }
         graphicsP ^= graphicsP;
      for (let k = 0; k < 3; k++) {
         pressures = `${pressures.length / (Math.max(1, 7))}`;
      }
       let becomex = 5.0;
       let mintegralp = 4.0;
          let uimanagerR: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,0),478], [String.fromCharCode(103,101,116,108,97,121,111,117,116,95,113,95,49,48,0),316], [String.fromCharCode(109,116,105,109,101,95,113,95,56,57,0),895]]);
          let minivod3: Map<any, any> = new Map([[String.fromCharCode(122,95,49,56,95,115,98,97,100,0),String.fromCharCode(116,112,101,108,95,110,95,56,54,0)], [String.fromCharCode(115,116,114,116,111,100,95,51,95,52,56,0),String.fromCharCode(100,95,55,95,102,114,111,110,116,115,105,100,101,0)], [String.fromCharCode(98,95,53,48,95,105,112,100,111,112,100,0),String.fromCharCode(98,117,102,108,101,110,95,48,95,50,0)]]);
         libfabricjnij = `${minivod3.size * 1}`;
         uimanagerR = new Map([[`${uimanagerR.size}`, uimanagerR.size]]);
         minivod3.set(`${uimanagerR.size}`, uimanagerR.size);
      while (pressures.length <= 3) {
         graphicsP -= graphicsP;
         break;
      }
      flyer5.push(inactivea);
      if (catalogz) {
         break;
      }
   } while (((fileO.size / 4) >= 4) && catalogz);

        AnalyticsUtil.onEventWithMap(KISPhoto.KISSpecRecommendation, {});

      field6 += 1;
      inactivea <<= Math.min(2, Math.abs(shareQ.length & fileO.size));
       let shootR = String.fromCharCode(115,97,100,120,120,95,116,95,50,53,0);
      if (shootR.length == 2) {
         shootR += `${(String.fromCharCode(78,0) == shootR ? shootR.length : shootR.length)}`;
      }
       let strD: Map<any, any> = new Map([[String.fromCharCode(122,95,51,55,95,108,105,115,116,101,110,101,114,0),String.fromCharCode(103,95,51,57,95,116,114,97,110,115,117,112,112,0)], [String.fromCharCode(100,95,49,48,95,105,116,117,110,101,115,0),String.fromCharCode(100,101,105,110,118,101,114,116,95,107,95,57,51,0)]]);
       let footballT: Map<any, any> = new Map([[String.fromCharCode(98,95,57,52,95,110,101,120,116,104,111,112,0),318], [String.fromCharCode(108,101,103,101,110,100,95,101,95,56,52,0),585], [String.fromCharCode(120,95,52,57,95,98,97,108,97,110,99,101,115,0),347]]);
      while (1 <= (footballT.size ^ shootR.length) || (1 ^ shootR.length) <= 1) {
         shootR += `${strD.size >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
      shareQ = `${reactnativejsp.length}`;
      inactivea <<= Math.min(5, Math.abs(field6 ^ parseInt(`${libfollyD}`)));
      libfollyD -= executori.size | 2;
   while ((4 % (Math.max(8, shareQ.length))) >= 5 && 1 >= (reactnativejsp.length % 4)) {
      shareQ += `${reactnativejsp.length}`;
      break;
   }
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISLarge,
        });

   if (Array.from(executori.keys()).includes(`${filedF.length}`)) {
       let pausey = String.fromCharCode(103,101,110,101,114,97,116,101,95,113,95,52,52,0);
       let corner5 = 0;
       let with_mS: Array<any> = [189, 316];
       let executorI = 0.0;
       let chartR = String.fromCharCode(112,95,51,57,95,99,117,100,97,0);
         chartR = `${1 ^ pausey.length}`;
      let downV = corner5 >= 8823405;
      do {
          let logoutX = 2;
          let directA = String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,111,95,57,52,0);
         corner5 /= Math.max(with_mS.length - parseInt(`${executorI}`), 5);
         logoutX ^= (directA == String.fromCharCode(101,0) ? directA.length : logoutX);
         if (downV) {
            break;
         }
      } while (downV && (corner5 >= 3));
      while ((chartR.length + parseInt(`${executorI}`)) > 4 && 5 > (parseInt(`${executorI}`) + 4)) {
         executorI -= chartR.length >> (Math.min(Math.abs(3), 4));
         break;
      }
         with_mS.push(1);
      if (2 > (with_mS.length / 3) || (with_mS.length / 3) > 4) {
          let y_centerG = 4.0;
         with_mS.push(with_mS.length % (Math.max(3, parseInt(`${executorI}`))));
         y_centerG /= Math.max(parseInt(`${y_centerG}`), 2);
      }
      let emojiw = with_mS.length <= 9433386;
      do {
         with_mS = [chartR.length ^ pausey.length];
         if (emojiw) {
            break;
         }
      } while (((pausey.length ^ 2) >= 3) && emojiw);
      if ((with_mS.length * executorI) == 1.1 || (with_mS.length / 3) == 5) {
         executorI += with_mS.length / 3;
      }
      if ((chartR.length % (Math.max(5, 5))) > 1 || 5 > (corner5 % (Math.max(6, chartR.length)))) {
          let viewerw = 0;
          let rinit_gpg = 5;
          let backwardm = 1;
         corner5 >>= Math.min(3, Math.abs(parseInt(`${executorI}`) * viewerw));
         viewerw <<= Math.min(Math.abs(1), 3);
         rinit_gpg >>= Math.min(Math.abs(backwardm & 3), 4);
         backwardm /= Math.max(2 & rinit_gpg, 3);
      }
      for (let b = 0; b < 3; b++) {
          let mbnativeB: Map<any, any> = new Map([[String.fromCharCode(101,95,54,0),361], [String.fromCharCode(108,105,115,116,105,110,103,115,95,55,95,55,52,0),947], [String.fromCharCode(116,104,114,109,97,116,95,104,95,55,55,0),344]]);
          let libmapbufferjnih = 0.0;
          let mbbannerj = String.fromCharCode(120,95,51,55,95,114,101,99,111,110,110,101,99,116,105,111,110,0);
          let emptyH: Map<any, any> = new Map([[String.fromCharCode(100,111,99,115,105,122,101,95,122,95,55,57,0),String.fromCharCode(111,118,101,114,114,105,100,101,115,95,108,95,52,0)], [String.fromCharCode(102,95,54,55,95,104,97,110,103,117,112,0),String.fromCharCode(100,95,55,55,95,104,111,108,100,101,114,0)], [String.fromCharCode(114,95,50,50,95,103,114,111,117,112,105,110,103,0),String.fromCharCode(100,95,53,57,95,97,99,99,101,112,116,0)]]);
         corner5 |= (chartR == String.fromCharCode(106,0) ? chartR.length : mbbannerj.length);
         mbnativeB.set(`${libmapbufferjnih}`, mbnativeB.size);
         libmapbufferjnih /= Math.max(emptyH.size << (Math.min(Math.abs(mbnativeB.size), 4)), 2);
         mbbannerj = `${1 - parseInt(`${libmapbufferjnih}`)}`;
         emptyH.set(`${libmapbufferjnih}`, 2);
      }
       let weiboF = String.fromCharCode(109,95,55,48,95,100,111,117,98,108,101,115,115,116,114,0);
      if ((4 ^ chartR.length) >= 2 || (executorI * chartR.length) >= 3.21) {
          let time_8nd: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,100,101,108,105,109,105,116,101,114,0),String.fromCharCode(114,116,99,112,95,107,95,51,57,0)], [String.fromCharCode(100,101,99,101,108,101,114,97,116,101,100,95,105,95,50,56,0),String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,117,95,49,49,0)]]);
          let armva9 = String.fromCharCode(107,95,55,56,95,115,116,105,99,107,0);
          let small7 = String.fromCharCode(100,99,116,101,108,101,109,95,105,95,51,53,0);
          let networkK: Array<any> = [String.fromCharCode(115,116,114,108,95,98,95,51,48,0), String.fromCharCode(110,99,111,109,105,110,103,95,114,95,54,56,0)];
          let activey = String.fromCharCode(99,111,109,109,101,110,116,95,57,95,56,56,0);
         chartR += `${networkK.length}`;
         time_8nd.set(armva9, 3 & armva9.length);
         small7 += `${(String.fromCharCode(84,0) == armva9 ? armva9.length : time_8nd.size)}`;
         networkK.push(2 ^ small7.length);
         activey = `${armva9.length}`;
      }
         corner5 /= Math.max(5, weiboF.length << (Math.min(1, Math.abs(parseInt(`${executorI}`)))));
      while (weiboF != String.fromCharCode(115,0)) {
         chartR = `${chartR.length}`;
         break;
      }
         pausey = `${chartR.length}`;
      let goalY = with_mS.length <= 9841209;
      do {
          let update_qf = String.fromCharCode(99,111,112,121,104,95,52,95,50,54,0);
          let executorv: Map<any, any> = new Map([[String.fromCharCode(109,95,54,48,95,114,111,111,116,0),214], [String.fromCharCode(120,95,52,53,95,110,105,103,104,116,115,104,111,116,0),486]]);
          let indexx = false;
          let targete = 4.0;
          let profileV = String.fromCharCode(118,95,50,95,105,110,102,0);
         with_mS.push((2 & (indexx ? 4 : 4)));
         update_qf += `${(String.fromCharCode(113,0) == profileV ? profileV.length : update_qf.length)}`;
         executorv = new Map([[`${executorv.size}`, 2 ^ update_qf.length]]);
         indexx = (executorv.size & update_qf.length) >= 36;
         targete -= parseFloat(`${profileV.length >> (Math.min(Math.abs(3), 2))}`);
         if (goalY) {
            break;
         }
      } while (((weiboF.length | 2) <= 3 || (2 | weiboF.length) <= 2) && goalY);
      filedF = [3];
   }
   let libjsijniprofilerC = 6752748 >= executori.size;
   do {
      executori = new Map([[`${executori.size}`, inactivea << (Math.min(Math.abs(executori.size), 2))]]);
      if (libjsijniprofilerC) {
         break;
      }
   } while (libjsijniprofilerC && (Array.from(executori.keys()).includes(`${flyer5.length}`)));
   while ((fileO.size ^ 2) <= 4 || 3 <= (2 ^ fileO.size)) {
      fileO.set(`${shareQ}`, fileO.size);
      break;
   }
   if ((4 * filedF.length) < 3 && 5 < (4 * filedF.length)) {
      shareQ += `${flyer5.length >> (Math.min(4, Math.abs(parseInt(`${tickr}`))))}`;
   }
   if (tickr < libfollyD) {
      libfollyD -= executori.size;
   }
       let right5: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,98,95,53,48,0),104], [String.fromCharCode(103,95,49,53,95,111,110,116,114,111,108,0),49]]);
          let whatsappN: Map<any, any> = new Map([[String.fromCharCode(107,95,57,54,95,109,97,116,116,101,0),76], [String.fromCharCode(115,116,97,114,116,95,102,95,52,56,0),355]]);
          let stationso = true;
          let yingX = 3;
         right5.set(`${whatsappN.size}`, whatsappN.size);
         stationso = !stationso;
         yingX &= 2;
      for (let w = 0; w < 2; w++) {
         right5 = new Map([[`${right5.size}`, 1]]);
      }
       let schedulerB: Array<any> = [String.fromCharCode(111,110,110,101,99,116,105,111,110,95,56,95,54,52,0), String.fromCharCode(100,95,50,55,95,109,117,108,116,105,99,97,115,116,0)];
      inactivea *= parseInt(`${tickr}`);

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISSpecRecommendation);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISShared9, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISLarge,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISShared9);
    }


    
    static playlistViewsAnalytics = () => {
       let dplus8: Array<any> = [506, 961];
    let heartx = 2.0;
    let mbsplashn = String.fromCharCode(119,95,57,53,95,119,101,101,107,100,97,121,0);
    let utilsp = 5.0;
    let thumbnail3: Map<any, any> = new Map([[String.fromCharCode(122,95,50,53,95,103,101,116,97,117,120,118,97,108,0),String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,100,95,54,50,0)], [String.fromCharCode(111,111,117,114,97,95,103,95,49,50,0),String.fromCharCode(100,95,54,0)]]);
    let searchbarz = 4;
    let referrerh = String.fromCharCode(117,112,108,111,97,100,105,110,103,95,52,95,55,57,0);
    let libturbomodulejsijnik = String.fromCharCode(109,101,109,95,116,95,56,51,0);
    let armva0 = 0.0;
    let mbbidJ = 2.0;
    let libfbjniO = String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,95,104,95,55,52,0);
    let chinaU: Map<any, any> = new Map([[String.fromCharCode(120,95,54,52,95,99,111,100,101,98,108,111,99,107,115,0),608], [String.fromCharCode(101,95,55,54,95,104,97,110,100,108,101,0),949], [String.fromCharCode(108,95,53,50,95,114,101,100,117,99,116,105,111,110,115,0),105]]);
    let corner4: Array<any> = [String.fromCharCode(99,108,108,105,95,111,95,51,53,0), String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,51,95,51,50,0), String.fromCharCode(100,114,105,118,101,95,103,95,56,55,0)];
    let viewsc: Map<any, any> = new Map([[String.fromCharCode(117,110,101,115,99,97,112,101,95,101,95,51,49,0),339], [String.fromCharCode(106,97,99,111,98,105,95,101,95,52,49,0),219]]);
    let containero = String.fromCharCode(97,114,99,104,105,118,101,95,109,95,52,48,0);
    let handlerv = 1;
    let edit2: Array<any> = [String.fromCharCode(103,95,56,48,95,102,105,120,101,100,0), String.fromCharCode(102,95,51,49,95,114,116,109,100,0)];
   if (chinaU.get(`${utilsp}`) != null) {
      utilsp += parseFloat(`${3 | parseInt(`${heartx}`)}`);
   }
      libturbomodulejsijnik = "3";
      mbbidJ -= parseInt(`${utilsp}`) | 1;
      libturbomodulejsijnik += `${(String.fromCharCode(82,0) == libturbomodulejsijnik ? parseInt(`${utilsp}`) : libturbomodulejsijnik.length)}`;
       let unselectedw = String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,121,95,54,50,0);
       let mode5: Map<any, any> = new Map([[String.fromCharCode(103,95,51,50,95,107,101,114,110,101,100,0),true ], [String.fromCharCode(112,95,55,51,95,102,111,114,119,97,114,100,0),true ]]);
      let kickk = 7740407 >= unselectedw.length;
      do {
          let libjsie = String.fromCharCode(121,95,57,52,95,116,104,111,117,103,104,0);
          let render2 = 1.0;
         unselectedw = `${libjsie.length}`;
         libjsie = `${parseInt(`${render2}`)}`;
         if (kickk) {
            break;
         }
      } while (kickk && (5 >= mode5.size));
      for (let l = 0; l < 2; l++) {
         unselectedw = `${1 >> (Math.min(1, unselectedw.length))}`;
      }
         unselectedw += `${unselectedw.length}`;
      if (mode5.size <= unselectedw.length) {
         unselectedw = `${2 | mode5.size}`;
      }
      for (let b = 0; b < 1; b++) {
         mode5.set(unselectedw, 2);
      }
      while ((unselectedw.length ^ mode5.size) <= 1 || (mode5.size ^ unselectedw.length) <= 1) {
         unselectedw = `${mode5.size}`;
         break;
      }
      libfbjniO = `${searchbarz & dplus8.length}`;
   for (let a = 0; a < 1; a++) {
      libfbjniO = `${chinaU.size}`;
   }

        AnalyticsUtil.onEventWithMap(KISPhoto.KISAttributedstring, {});

      utilsp += parseFloat(`${parseInt(`${utilsp}`)}`);
      utilsp -= parseFloat(`${referrerh.length & 1}`);
      referrerh = `${libfbjniO.length + 3}`;
   for (let o = 0; o < 3; o++) {
       let textinputw = String.fromCharCode(117,95,49,51,95,105,110,105,116,100,101,99,0);
       let leakcheckers = String.fromCharCode(105,110,108,105,110,107,95,57,95,51,53,0);
       let promotion2: Array<any> = [String.fromCharCode(97,118,115,116,114,105,110,103,95,112,95,53,54,0), String.fromCharCode(104,97,110,100,95,52,95,49,52,0), String.fromCharCode(106,95,53,55,95,99,111,110,116,114,105,98,0)];
       let sinaW = String.fromCharCode(99,95,56,56,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
       let loginF: Map<any, any> = new Map([[String.fromCharCode(117,95,53,55,95,115,111,114,101,99,101,105,118,101,0),824], [String.fromCharCode(109,95,51,51,95,114,101,100,101,116,101,99,116,0),821], [String.fromCharCode(99,111,117,112,108,105,110,103,95,112,95,56,57,0),291]]);
         sinaW = `${leakcheckers.length}`;
         leakcheckers += `${(sinaW == String.fromCharCode(105,0) ? loginF.size : sinaW.length)}`;
      for (let z = 0; z < 1; z++) {
          let stationR = String.fromCharCode(107,95,55,49,95,115,116,97,98,108,101,0);
          let ajaxA: Array<any> = [String.fromCharCode(105,110,100,105,99,97,116,101,100,95,115,95,57,55,0), String.fromCharCode(104,95,52,55,95,104,112,101,108,0)];
         promotion2.push(leakcheckers.length);
         stationR += `${1 >> (Math.min(3, stationR.length))}`;
         ajaxA = [ajaxA.length & 1];
      }
         leakcheckers = `${sinaW.length ^ 3}`;
         loginF = new Map([[`${loginF.size}`, (String.fromCharCode(90,0) == leakcheckers ? loginF.size : leakcheckers.length)]]);
      for (let a = 0; a < 2; a++) {
         loginF = new Map([[`${promotion2.length}`, textinputw.length % 1]]);
      }
      for (let x = 0; x < 2; x++) {
          let const_gz = 0.0;
          let paginationt = String.fromCharCode(107,95,53,52,95,99,117,100,97,0);
          let telemetryr = 3.0;
          let listb = String.fromCharCode(105,95,53,57,95,116,111,108,101,114,97,110,99,101,0);
          let codegenD: Array<any> = [64, 492];
         sinaW = `${(textinputw == String.fromCharCode(90,0) ? textinputw.length : codegenD.length)}`;
         const_gz += (listb == String.fromCharCode(54,0) ? parseInt(`${telemetryr}`) : listb.length);
         paginationt += "1";
         telemetryr += parseFloat(`${listb.length % (Math.max(paginationt.length, 7))}`);
         codegenD = [3];
      }
      if (!textinputw.startsWith(`${leakcheckers.length}`)) {
          let refresh5 = String.fromCharCode(116,111,108,111,119,101,114,95,120,95,54,50,0);
          let starZ = String.fromCharCode(103,95,57,56,95,97,117,116,104,111,114,105,122,101,0);
          let more6 = true;
         leakcheckers += `${refresh5.length}`;
         refresh5 += `${starZ.length >> (Math.min(starZ.length, 4))}`;
      }
          let networkH = 4;
          let foundH = String.fromCharCode(107,101,121,104,97,115,104,95,100,95,54,57,0);
          let mappinge: Array<any> = [113, 565, 184];
         leakcheckers = `${3 / (Math.max(6, textinputw.length))}`;
         networkH <<= Math.min(Math.abs(networkH * 2), 1);
         foundH += "1";
         mappinge = [foundH.length];
         promotion2.push(loginF.size >> (Math.min(Math.abs(2), 2)));
      for (let a = 0; a < 1; a++) {
          let grapho = true;
          let libffmpegkitL = String.fromCharCode(113,95,54,55,95,105,100,101,110,116,105,116,105,121,0);
          let textlayoutmanagerk: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,104,100,95,105,95,56,0),160], [String.fromCharCode(102,108,105,103,104,116,95,54,95,53,0),132]]);
          let nativeexO = String.fromCharCode(113,117,111,116,101,115,95,108,95,53,57,0);
          let componentregistryz: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,115,105,122,101,95,48,95,54,55,0),true ], [String.fromCharCode(105,110,100,105,99,116,111,114,95,102,95,57,48,0),false ]]);
         leakcheckers = `${sinaW.length}`;
         grapho = (((grapho ? 47 : textlayoutmanagerk.size) | textlayoutmanagerk.size) > 47);
         libffmpegkitL += `${nativeexO.length / 2}`;
         nativeexO += `${(nativeexO.length & (grapho ? 4 : 2))}`;
         componentregistryz.set(`${textlayoutmanagerk.size}`, textlayoutmanagerk.size ^ 1);
      }
      if (promotion2.length <= 5) {
          let humidityP: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,105,111,110,95,100,95,51,57,0),String.fromCharCode(106,95,57,49,95,105,111,101,114,114,0)], [String.fromCharCode(112,97,116,104,110,97,109,101,95,105,95,54,48,0),String.fromCharCode(102,114,111,122,101,110,95,101,95,51,52,0)]]);
         promotion2.push((sinaW == String.fromCharCode(56,0) ? sinaW.length : loginF.size));
         humidityP = new Map([[`${humidityP.size}`, humidityP.size << (Math.min(Math.abs(3), 1))]]);
      }
         promotion2 = [textinputw.length];
      if (leakcheckers.length == sinaW.length) {
          let xvodk: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,115,116,114,110,108,101,110,0),56], [String.fromCharCode(114,95,50,55,95,99,111,101,102,102,115,112,0),209], [String.fromCharCode(105,110,112,99,98,95,57,95,57,50,0),579]]);
         leakcheckers = `${promotion2.length}`;
         xvodk.set(`${xvodk.size}`, xvodk.size << (Math.min(Math.abs(xvodk.size), 2)));
      }
         sinaW += `${textinputw.length}`;
      referrerh += `${promotion2.length >> (Math.min(2, Math.abs(parseInt(`${mbbidJ}`))))}`;
   }
   for (let l = 0; l < 3; l++) {
      heartx /= Math.max(5, parseInt(`${heartx}`) - referrerh.length);
   }
      dplus8.push(libfbjniO.length & libturbomodulejsijnik.length);
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISLoading,
        });

   if (4 == (referrerh.length % 3) || 5 == (referrerh.length % (Math.max(3, 10)))) {
       let runtimeF: Map<any, any> = new Map([[String.fromCharCode(109,97,102,113,95,99,95,54,0),26], [String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,53,95,56,51,0),504]]);
       let typesJ = 1.0;
       let assistx = String.fromCharCode(105,95,51,54,95,99,111,108,108,101,99,116,0);
       let refreshX = 5.0;
          let langY = 1.0;
          let overlayE = String.fromCharCode(104,95,54,56,95,118,112,120,115,116,97,116,115,0);
          let mbbidH = 2;
         typesJ += parseFloat(`${runtimeF.size << (Math.min(Math.abs(2), 4))}`);
         langY /= Math.max(5, parseFloat(`${overlayE.length + mbbidH}`));
         overlayE = `${overlayE.length | 1}`;
         mbbidH += parseInt(`${langY}`);
      while (5.32 <= (1.21 - refreshX) && (1.21 - refreshX) <= 3.96) {
         refreshX *= parseFloat(`${1}`);
         break;
      }
      while (4.14 > (refreshX * 5.26)) {
         refreshX -= parseFloat(`${assistx.length}`);
         break;
      }
          let settingsw = 3.0;
          let linkK = false;
          let applicationf: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,116,105,109,101,115,116,97,109,112,101,100,0),902], [String.fromCharCode(106,111,105,110,95,117,95,52,55,0),867]]);
         assistx += `${parseInt(`${refreshX}`) | 1}`;
         settingsw += applicationf.size;
         linkK = 35.60 == settingsw;
         applicationf.set(`${linkK}`, 2);
      while (!assistx.includes(`${runtimeF.size}`)) {
         assistx = "2";
         break;
      }
      while (assistx.endsWith(`${refreshX}`)) {
         refreshX -= parseFloat(`${runtimeF.size}`);
         break;
      }
         typesJ /= Math.max(2, parseFloat(`${assistx.length}`));
         assistx += `${parseInt(`${typesJ}`) & 2}`;
          let time_evM = String.fromCharCode(104,119,97,99,99,101,108,0);
          let circleK = 1.0;
          let debugQ = 2.0;
         assistx = `${parseInt(`${typesJ}`) - assistx.length}`;
         time_evM += `${time_evM.length}`;
         circleK *= (String.fromCharCode(98,0) == time_evM ? parseInt(`${debugQ}`) : time_evM.length);
         debugQ += parseFloat(`${time_evM.length}`);
          let nativeexI = 2.0;
          let homes = 3.0;
          let libtani = String.fromCharCode(112,104,111,116,111,95,55,95,57,48,0);
         typesJ *= parseFloat(`${parseInt(`${typesJ}`) & 2}`);
         nativeexI -= (parseFloat(`${libtani == String.fromCharCode(86,0) ? libtani.length : parseInt(`${homes}`)}`));
         homes += parseFloat(`${parseInt(`${homes}`) - 1}`);
         runtimeF.set(assistx, (String.fromCharCode(81,0) == assistx ? assistx.length : runtimeF.size));
      for (let g = 0; g < 1; g++) {
         runtimeF.set(assistx, runtimeF.size & 3);
      }
      referrerh = `${runtimeF.size << (Math.min(Math.abs(3), 3))}`;
   }
   let watch6 = utilsp <= 9581782.0;
   do {
      utilsp += parseFloat(`${thumbnail3.size}`);
      if (watch6) {
         break;
      }
   } while (((3.38 - utilsp) == 1.1 || (3.38 - utilsp) == 1.63) && watch6);
   let latnE = 7173968.0 <= mbbidJ;
   do {
      mbbidJ -= thumbnail3.size * libturbomodulejsijnik.length;
      if (latnE) {
         break;
      }
   } while ((3.7 > (armva0 + 2)) && latnE);
   for (let s = 0; s < 1; s++) {
      utilsp -= (parseFloat(`${String.fromCharCode(49,0) == mbsplashn ? libturbomodulejsijnik.length : mbsplashn.length}`));
   }
      searchbarz *= 3 - referrerh.length;
   for (let k = 0; k < 3; k++) {
      thumbnail3.set(libfbjniO, libfbjniO.length);
   }

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISAttributedstring);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISReward, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISLoading,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISReward);
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISLibsentry, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISDebugMimo,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISLibsentry);
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISLoginLess, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISDebugMimo,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISLoginLess);
    }


    
    static userCenterLoginSuccessTimesAnalytics = () => {
       let entryU = 3;
    let recommendation5 = 4.0;
    let textR: Array<any> = [81, 41];
    let linkr = 3.0;
    let greyR = String.fromCharCode(116,114,97,105,110,95,117,95,50,49,0);
    let libswscalea = true;
    let arrowd = false;
    let twitterU = true;
    let robotos: Map<any, any> = new Map([[String.fromCharCode(115,101,116,99,116,120,95,97,95,55,56,0),String.fromCharCode(120,95,57,51,95,109,101,115,115,115,97,103,101,0)], [String.fromCharCode(120,95,57,50,95,100,101,97,99,116,105,118,97,116,101,100,0),String.fromCharCode(115,95,52,50,95,105,109,105,113,0)]]);
    let danger2 = 1;
       let renewg = 4.0;
       let xadsdk4 = false;
       let cornerj = String.fromCharCode(119,95,51,50,95,119,109,97,118,111,105,99,101,0);
         xadsdk4 = (((xadsdk4 ? 76 : cornerj.length) & cornerj.length) <= 76);
         cornerj = `${((xadsdk4 ? 1 : 5))}`;
         cornerj += `${parseInt(`${renewg}`) << (Math.min(4, Math.abs(2)))}`;
      if (!xadsdk4) {
         renewg /= Math.max((parseFloat(`${cornerj == String.fromCharCode(90,0) ? cornerj.length : (xadsdk4 ? 4 : 1)}`)), 4);
      }
      let eact1 = String.fromCharCode(56,106,101,51,108,0) == cornerj;
      do {
         cornerj += `${cornerj.length % (Math.max(1, 9))}`;
         if (eact1) {
            break;
         }
      } while ((cornerj.includes(`${renewg}`)) && eact1);
      while (1 <= cornerj.length) {
         cornerj = `${parseInt(`${renewg}`) << (Math.min(1, Math.abs(1)))}`;
         break;
      }
      while (1 < cornerj.length) {
          let latnM: Map<any, any> = new Map([[String.fromCharCode(112,108,117,103,103,101,100,95,122,95,53,56,0),String.fromCharCode(112,105,112,95,121,95,53,50,0)], [String.fromCharCode(101,120,99,108,117,115,105,111,110,115,95,105,95,55,50,0),String.fromCharCode(112,117,114,112,111,115,101,102,117,108,95,50,95,55,49,0)], [String.fromCharCode(117,95,56,50,95,104,115,99,97,108,101,0),String.fromCharCode(99,95,52,55,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0)]]);
          let typesG = true;
          let downloaderM: Map<any, any> = new Map([[String.fromCharCode(115,116,105,114,110,103,95,106,95,51,51,0),898], [String.fromCharCode(100,118,118,105,100,101,111,95,116,95,52,55,0),674]]);
          let share_ = 2;
          let castM = true;
         cornerj = `${3 & parseInt(`${renewg}`)}`;
         latnM = new Map([[`${downloaderM.size}`, (downloaderM.size + (castM ? 5 : 4))]]);
         typesG = latnM.size <= 57;
         share_ += share_;
         castM = ((latnM.size - (!typesG ? 44 : latnM.size)) == 44);
         break;
      }
         cornerj = `${parseInt(`${renewg}`) | cornerj.length}`;
          let upgradeN = 0;
         renewg *= parseFloat(`${2}`);
         upgradeN &= upgradeN;
      greyR = `${parseInt(`${linkr}`)}`;
   let cancelE = 6684464.0 >= recommendation5;
   do {
      recommendation5 *= (parseFloat(`${(libswscalea ? 3 : 2) ^ parseInt(`${linkr}`)}`));
      if (cancelE) {
         break;
      }
   } while (cancelE && (1.97 < (parseFloat(`${greyR.length}`) - recommendation5) || (greyR.length / 4) < 5));
      textR.push(parseInt(`${recommendation5}`));
       let overn = 4.0;
      if (3.58 >= (overn + overn) || 5.57 >= (overn + 3.58)) {
         overn += parseFloat(`${3 ^ parseInt(`${overn}`)}`);
      }
          let directR: Map<any, any> = new Map([[String.fromCharCode(117,95,55,55,95,100,105,115,116,111,114,116,105,111,110,0),285], [String.fromCharCode(102,108,111,111,114,115,95,54,95,56,51,0),983], [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,108,95,55,52,0),895]]);
          let temperaturey = true;
          let crossT = 3.0;
         overn *= parseFloat(`${parseInt(`${overn}`) | 3}`);
         directR.set(`${temperaturey}`, 2);
         crossT *= parseFloat(`${2 + directR.size}`);
      while ((overn / (Math.max(overn, 5))) == 2.2) {
         overn /= Math.max(parseFloat(`${2 * parseInt(`${overn}`)}`), 5);
         break;
      }
      recommendation5 /= Math.max(3, parseFloat(`${parseInt(`${linkr}`)}`));
   if (!libswscalea) {
       let matches3 = String.fromCharCode(101,95,53,52,95,112,97,114,97,115,101,116,0);
       let analyticsx = String.fromCharCode(111,95,57,51,95,112,114,111,116,101,99,116,101,100,0);
       let gradle0 = true;
       let libyogah = String.fromCharCode(99,111,108,108,101,99,116,95,51,95,56,54,0);
       let libtanZ = String.fromCharCode(115,95,49,55,95,112,97,103,105,110,97,116,105,111,110,0);
      for (let a = 0; a < 2; a++) {
          let libhermes_ = true;
          let short_1sw: Array<any> = [String.fromCharCode(113,95,51,54,95,102,102,97,116,0), String.fromCharCode(102,95,54,52,95,108,101,110,103,116,104,0), String.fromCharCode(119,95,49,51,95,115,121,115,108,111,103,0)];
          let clockq = String.fromCharCode(99,111,109,112,101,110,115,97,116,105,111,110,95,103,95,54,51,0);
          let white_ = 0.0;
         matches3 = `${short_1sw.length / 1}`;
         libhermes_ = white_ > 80.28;
         short_1sw.push(1 ^ clockq.length);
         clockq += `${((libhermes_ ? 4 : 3) - parseInt(`${white_}`))}`;
      }
         libtanZ = `${libtanZ.length}`;
      for (let w = 0; w < 1; w++) {
          let componentr = 1;
          let hejiA = 4;
          let stationF = String.fromCharCode(114,95,54,95,104,101,120,98,105,110,0);
          let historyy = 3;
         analyticsx = `${1 | libyogah.length}`;
         componentr <<= Math.min(2, Math.abs(stationF.length << (Math.min(3, Math.abs(componentr)))));
         hejiA |= 3;
         stationF += `${componentr}`;
         historyy %= Math.max(historyy % (Math.max(4, componentr)), 4);
      }
          let privacya = false;
          let mathh = String.fromCharCode(97,114,103,98,95,55,95,56,0);
          let libglogZ = true;
         libyogah = "2";
         privacya = (libglogZ ? privacya : libglogZ);
         mathh += `${mathh.length}`;
          let crownw = 2.0;
         libyogah += `${libyogah.length}`;
         crownw += 3 & parseInt(`${crownw}`);
      while (analyticsx.length < 5) {
         libtanZ = `${(matches3 == String.fromCharCode(104,0) ? libyogah.length : matches3.length)}`;
         break;
      }
         libtanZ += `${matches3.length}`;
       let fastU = 2.0;
       let xadsdkm = 1.0;
          let live1 = 3.0;
         analyticsx = `${2 / (Math.max(1, libtanZ.length))}`;
         live1 -= parseInt(`${live1}`) % (Math.max(8, parseInt(`${live1}`)));
      while (gradle0 || 5 <= libyogah.length) {
         libyogah = `${libyogah.length}`;
         break;
      }
      for (let g = 0; g < 2; g++) {
         analyticsx = "3";
      }
      if ((parseFloat(`${libtanZ.length}`) - fastU) > 5.51) {
         fastU += (parseFloat(`${libtanZ == String.fromCharCode(76,0) ? libtanZ.length : libyogah.length}`));
      }
      if ((parseInt(`${xadsdkm}`) / 2) <= 4 || 1 <= (analyticsx.length - 2)) {
          let rulesh = 5.0;
         xadsdkm += (parseFloat(`${(gradle0 ? 2 : 1) * parseInt(`${rulesh}`)}`));
      }
      for (let j = 0; j < 3; j++) {
         analyticsx = `${1 | matches3.length}`;
      }
      while (gradle0 && 2 <= libtanZ.length) {
         gradle0 = String.fromCharCode(81,0) == libyogah;
         break;
      }
      twitterU = libtanZ.length == 9 && twitterU;
   }

        AnalyticsUtil.onEventWithMap(KISPhoto.KISSuccess, {});

      libswscalea = (!arrowd ? twitterU : !arrowd);
   for (let s = 0; s < 2; s++) {
       let libyogaG = 3;
          let unselectedu = false;
          let canvasG = 5.0;
          let loading3 = false;
         libyogaG <<= Math.min(1, Math.abs(1 ^ libyogaG));
         unselectedu = !loading3 && canvasG > 16.1;
         canvasG -= ((unselectedu ? 1 : 1) / (Math.max(5, parseInt(`${canvasG}`))));
         loading3 = 68.31 == canvasG || unselectedu;
      for (let u = 0; u < 2; u++) {
         libyogaG ^= libyogaG;
      }
      let libmapbufferjniW = libyogaG >= 5764309;
      do {
         libyogaG /= Math.max(4, libyogaG >> (Math.min(Math.abs(1), 2)));
         if (libmapbufferjniW) {
            break;
         }
      } while ((libyogaG < 1) && libmapbufferjniW);
      twitterU = linkr < 81.83;
   }
       let starN = String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,100,95,101,95,53,56,0);
       let mountingt = 5;
       let tickedf = 2;
       let securityv = 0.0;
      let arear = securityv >= 9880584.0;
      do {
         securityv += parseInt(`${securityv}`);
         if (arear) {
            break;
         }
      } while ((1.69 >= (securityv - 3.89) || (tickedf - parseInt(`${securityv}`)) >= 1) && arear);
      twitterU = starN.endsWith(`${twitterU}`);
   for (let b = 0; b < 3; b++) {
      entryU ^= parseInt(`${linkr}`);
   }
      greyR += `${(2 + (libswscalea ? 5 : 5))}`;
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISTailZoom,
        });

      textR = [2 + greyR.length];
   if (!twitterU && 5 > (textR.length % 1)) {
      twitterU = twitterU && recommendation5 > 46.3;
   }
      greyR += `${parseInt(`${linkr}`)}`;
   let photoa = textR.length <= 8028946;
   do {
      textR.push(entryU / (Math.max(parseInt(`${linkr}`), 10)));
      if (photoa) {
         break;
      }
   } while (((1 + textR.length) == 2) && photoa);
   for (let m = 0; m < 1; m++) {
      entryU &= greyR.length;
   }

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISSuccess);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
       let referrerF = 5.0;
    let ksad6 = String.fromCharCode(113,95,53,52,95,100,105,102,102,120,0);
    let actived = false;
    let transferV = String.fromCharCode(114,101,108,97,121,111,117,116,95,103,95,57,48,0);
    let logog = String.fromCharCode(115,99,113,117,101,114,121,95,55,95,49,55,0);
    let policyh = 5.0;
    let heji6 = String.fromCharCode(100,114,97,119,95,100,95,51,49,0);
    let nnewarchdefaultsG = String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,100,95,53,52,0);
    let yellowL = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,95,48,95,51,48,0);
    let matchesp = String.fromCharCode(97,112,112,114,111,120,95,101,95,49,57,0);
    let gmailn = String.fromCharCode(98,95,50,52,95,112,117,110,99,116,117,97,116,105,111,110,0);
    let mapbufferL = String.fromCharCode(97,98,99,115,95,53,95,51,52,0);
    let expiredU = 0;
   let toponv = referrerF <= 8587926.0;
   do {
       let incidentU = true;
         incidentU = !incidentU;
         incidentU = (!incidentU ? !incidentU : !incidentU);
      let reminderV = incidentU ? !incidentU : incidentU;
      do {
         incidentU = incidentU || incidentU;
         if (reminderV) {
            break;
         }
      } while ((incidentU) && reminderV);
      referrerF *= parseFloat(`${3}`);
      if (toponv) {
         break;
      }
   } while (toponv && (4.82 >= (referrerF + parseFloat(`${nnewarchdefaultsG.length}`))));
   if (logog == String.fromCharCode(115,0)) {
      ksad6 = `${transferV.length}`;
   }
       let unreadW = String.fromCharCode(115,112,101,101,100,111,109,101,116,101,114,95,98,95,52,56,0);
       let recommendation3 = 3;
       let faviconJ = 2.0;
       let footballk = 2;
       let sortV = 4;
      while (recommendation3 >= 3) {
          let sentryJ = 0.0;
          let episodef = 0;
          let areat: Map<any, any> = new Map([[String.fromCharCode(119,95,52,57,95,118,97,108,105,100,97,116,101,0),true ], [String.fromCharCode(120,95,57,48,95,106,117,103,103,108,101,0),false ]]);
          let singleX = 2.0;
          let bridgeX = String.fromCharCode(99,95,55,50,95,111,110,101,111,102,115,0);
         sortV <<= Math.min(Math.abs(parseInt(`${sentryJ}`)), 1);
         sentryJ /= Math.max(2, parseFloat(`${2}`));
         episodef >>= Math.min(5, Math.abs((bridgeX == String.fromCharCode(54,0) ? parseInt(`${singleX}`) : bridgeX.length)));
         areat = new Map([[`${areat.size}`, areat.size * episodef]]);
         singleX -= parseFloat(`${3}`);
         break;
      }
         sortV /= Math.max(4, 3);
      if (4 >= (unreadW.length % 1)) {
          let emptyU = String.fromCharCode(120,95,52,48,0);
          let teamC = 2.0;
          let macaur = 3;
          let backgroundB: Map<any, any> = new Map([[String.fromCharCode(99,95,53,52,95,100,121,110,108,105,110,107,0),true ], [String.fromCharCode(109,97,116,114,105,120,95,107,95,49,55,0),true ], [String.fromCharCode(98,95,53,49,95,115,108,105,99,101,116,104,114,101,97,100,0),false ]]);
         unreadW = `${footballk}`;
         emptyU += `${parseInt(`${teamC}`) << (Math.min(Math.abs(backgroundB.size), 5))}`;
         teamC -= parseFloat(`${parseInt(`${teamC}`) * emptyU.length}`);
         macaur |= 2 * parseInt(`${teamC}`);
         backgroundB.set(`${macaur}`, backgroundB.size);
      }
      for (let r = 0; r < 1; r++) {
          let resendS = String.fromCharCode(122,95,53,54,95,99,105,112,104,101,114,115,0);
          let type_3J = String.fromCharCode(107,95,57,53,95,118,99,97,99,100,97,116,97,0);
         unreadW = `${type_3J.length}`;
         resendS += "3";
         type_3J = `${resendS.length ^ resendS.length}`;
      }
      while ((unreadW.length & 5) < 5) {
          let playt: Array<any> = [String.fromCharCode(99,111,110,118,101,114,103,101,110,99,101,95,54,95,50,49,0), String.fromCharCode(105,110,116,101,110,116,95,50,95,51,54,0)];
          let templateprocessorE: Map<any, any> = new Map([[String.fromCharCode(105,95,52,51,95,109,115,103,115,109,100,101,99,0),true ], [String.fromCharCode(114,95,54,54,95,106,117,115,116,105,102,105,101,100,0),false ]]);
         unreadW += `${1 - parseInt(`${faviconJ}`)}`;
         playt.push(playt.length);
         templateprocessorE = new Map([[`${templateprocessorE.size}`, playt.length]]);
         break;
      }
      while (4.98 > faviconJ) {
         faviconJ -= parseFloat(`${recommendation3}`);
         break;
      }
      if (faviconJ <= 4.17) {
         faviconJ /= Math.max(parseFloat(`${recommendation3}`), 2);
      }
      for (let k = 0; k < 3; k++) {
          let classest = String.fromCharCode(112,114,111,116,111,98,117,102,95,120,95,57,54,0);
          let zhubog: Array<any> = [584, 331, 880];
          let pageU: Map<any, any> = new Map([[String.fromCharCode(97,108,98,117,109,95,101,95,50,0),990], [String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,95,56,95,55,55,0),733], [String.fromCharCode(107,95,56,51,95,115,116,97,109,112,0),36]]);
          let qaagO = 3;
         unreadW += `${footballk / (Math.max(5, sortV))}`;
         classest += "1";
         zhubog = [qaagO >> (Math.min(Math.abs(pageU.size), 4))];
         pageU = new Map([[`${zhubog.length}`, 2 % (Math.max(qaagO, 9))]]);
      }
      nnewarchdefaultsG = `${heji6.length}`;
       let thailandG = 3.0;
      for (let t = 0; t < 3; t++) {
         thailandG -= parseFloat(`${parseInt(`${thailandG}`) & parseInt(`${thailandG}`)}`);
      }
         thailandG *= parseFloat(`${parseInt(`${thailandG}`)}`);
      let videojsJ = 8577285.0 <= thailandG;
      do {
         thailandG *= parseFloat(`${parseInt(`${thailandG}`)}`);
         if (videojsJ) {
            break;
         }
      } while ((5.32 <= thailandG) && videojsJ);
      actived = String.fromCharCode(66,0) == nnewarchdefaultsG;
   if ((transferV.length % 3) < 4 || (3 + transferV.length) < 1) {
      policyh /= Math.max(3, parseFloat(`${logog.length}`));
   }
   for (let m = 0; m < 2; m++) {
       let graphn: Map<any, any> = new Map([[String.fromCharCode(115,95,57,53,95,97,112,112,101,97,114,105,110,103,0),931], [String.fromCharCode(102,114,97,109,101,99,114,99,95,117,95,56,53,0),240], [String.fromCharCode(115,95,51,48,95,101,120,112,97,110,100,101,100,0),439]]);
       let matchF: Array<any> = [String.fromCharCode(108,105,109,105,116,101,114,95,100,95,56,48,0), String.fromCharCode(104,95,51,95,105,100,101,116,0), String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,55,95,51,48,0)];
      for (let l = 0; l < 1; l++) {
          let componentR = 2;
          let anytimes = true;
          let clockS = String.fromCharCode(119,115,118,113,97,95,99,95,49,53,0);
         matchF = [matchF.length ^ componentR];
         componentR <<= Math.min(Math.abs(((anytimes ? 1 : 3))), 3);
         anytimes = ((clockS.length & (!anytimes ? clockS.length : 66)) < 66);
      }
      while ((1 % (Math.max(6, graphn.size))) >= 3 || (matchF.length % (Math.max(graphn.size, 3))) >= 1) {
         graphn.set(`${matchF.length}`, 1 + graphn.size);
         break;
      }
      let libpangleflippedr = graphn.size >= 6445929;
      do {
          let analyticx = false;
         graphn = new Map([[`${graphn.size}`, ((analyticx ? 5 : 1) % (Math.max(graphn.size, 5)))]]);
         if (libpangleflippedr) {
            break;
         }
      } while (((1 ^ graphn.size) == 5 || 2 == (1 ^ matchF.length)) && libpangleflippedr);
         matchF.push(2 ^ matchF.length);
          let valueso: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,120,105,116,121,95,57,95,56,52,0),47], [String.fromCharCode(100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,95,51,95,49,48,0),579], [String.fromCharCode(110,95,54,57,95,104,101,120,98,115,0),295]]);
          let holder0 = String.fromCharCode(98,95,53,57,95,118,105,98,114,97,116,101,0);
         graphn = new Map([[`${valueso.size}`, valueso.size % 3]]);
         holder0 = `${holder0.length - holder0.length}`;
         matchF.push(matchF.length);
      heji6 += "3";
   }

        AnalyticsUtil.onEventWithMap(KISPhoto.KISDirectFloater, {});

   let libjsijniprofilerq = heji6.length <= 8212012;
   do {
      heji6 = `${parseInt(`${policyh}`) * logog.length}`;
      if (libjsijniprofilerq) {
         break;
      }
   } while ((heji6.startsWith(`${referrerF}`)) && libjsijniprofilerq);
   let gemfiles = transferV == String.fromCharCode(55,101,51,52,119,51,56,109,116,0);
   do {
       let combinedz = false;
       let middlep = String.fromCharCode(102,102,112,108,97,121,95,107,95,54,57,0);
       let configy = String.fromCharCode(111,112,101,110,115,108,101,115,95,110,95,50,52,0);
         configy += `${middlep.length}`;
      while (middlep.length < 1) {
          let scrollviewh = String.fromCharCode(107,101,99,99,97,107,95,111,95,56,49,0);
          let tickedP = 5.0;
          let hearte: Map<any, any> = new Map([[String.fromCharCode(101,95,50,51,95,115,109,105,109,101,0),405], [String.fromCharCode(114,95,49,49,95,115,105,120,116,97,112,0),220]]);
          let tickB = String.fromCharCode(97,100,118,97,110,99,101,95,111,95,53,55,0);
          let over8: Array<any> = [714, 243];
         middlep += `${3 * over8.length}`;
         scrollviewh += `${tickB.length ^ 3}`;
         tickedP += tickB.length;
         hearte = new Map([[scrollviewh, parseInt(`${tickedP}`) % 3]]);
         over8 = [(scrollviewh == String.fromCharCode(109,0) ? scrollviewh.length : hearte.size)];
         break;
      }
      while (middlep.length >= 4) {
         combinedz = (((combinedz ? 94 : configy.length) / (Math.max(configy.length, 10))) == 94);
         break;
      }
       let transfers = 0;
      let orientationw = combinedz ? !combinedz : combinedz;
      do {
         combinedz = configy == middlep;
         if (orientationw) {
            break;
         }
      } while ((1 <= middlep.length && combinedz) && orientationw);
      transferV += `${3 >> (Math.min(4, Math.abs(parseInt(`${referrerF}`))))}`;
      if (gemfiles) {
         break;
      }
   } while (gemfiles && (transferV.length <= heji6.length));
   if (3 > (yellowL.length * 1)) {
      referrerF += (parseFloat(`${logog.length - (actived ? 2 : 5)}`));
   }
       let righta = 4;
       let plus_: Map<any, any> = new Map([[String.fromCharCode(114,95,55,50,95,103,97,105,110,115,0),182], [String.fromCharCode(101,121,101,95,115,95,53,50,0),463]]);
       let profileQ: Map<any, any> = new Map([[String.fromCharCode(111,95,56,49,95,115,101,99,117,114,101,100,0),530], [String.fromCharCode(102,95,57,57,95,115,116,114,117,99,116,115,0),131], [String.fromCharCode(103,95,57,48,95,105,110,118,105,116,97,116,105,111,110,0),375]]);
         profileQ = new Map([[`${profileQ.size}`, plus_.size]]);
       let listt = true;
      while (1 == (righta * 1) && 5 == (plus_.size * 1)) {
          let xvodq = 3.0;
         righta >>= Math.min(4, Math.abs(((listt ? 5 : 2) & righta)));
         xvodq /= Math.max(1, 2);
         break;
      }
      while (!listt && (plus_.size ^ 3) < 1) {
         plus_ = new Map([[`${plus_.size}`, 3]]);
         break;
      }
       let skipn = String.fromCharCode(98,95,54,53,95,112,101,114,109,117,116,101,0);
         listt = ((profileQ.size + (!listt ? profileQ.size : 17)) > 36);
         plus_ = new Map([[`${listt}`, skipn.length]]);
      while (5 >= (righta << (Math.min(Math.abs(2), 1)))) {
          let dplusY = true;
          let combinedl: Array<any> = [654, 91, 594];
         righta %= Math.max(1, (combinedl.length >> (Math.min(3, Math.abs((dplusY ? 4 : 1))))));
         break;
      }
      while (!listt) {
         listt = righta > 90 && listt;
         break;
      }
      nnewarchdefaultsG += `${(String.fromCharCode(77,0) == logog ? heji6.length : logog.length)}`;
      logog = `${logog.length}`;
   for (let s = 0; s < 1; s++) {
      yellowL = `${(String.fromCharCode(82,0) == matchesp ? yellowL.length : matchesp.length)}`;
   }
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISConstantsIndicator,
        });

       let rewind5 = String.fromCharCode(104,95,57,48,95,111,108,100,110,101,119,0);
      while (rewind5.length == 5 && 5 == rewind5.length) {
         rewind5 = `${rewind5.length % (Math.max(3, 5))}`;
         break;
      }
      while (rewind5 != String.fromCharCode(50,0)) {
         rewind5 = `${(String.fromCharCode(90,0) == rewind5 ? rewind5.length : rewind5.length)}`;
         break;
      }
      if (!rewind5.endsWith(rewind5)) {
          let lived = String.fromCharCode(111,95,57,95,98,105,114,116,104,100,97,121,0);
          let downloadingR = String.fromCharCode(100,114,97,110,100,95,101,95,53,56,0);
          let configureJ = false;
         rewind5 = `${(1 | (configureJ ? 4 : 2))}`;
         lived = `${1 << (Math.min(5, lived.length))}`;
         downloadingR = `${(downloadingR == String.fromCharCode(86,0) ? lived.length : downloadingR.length)}`;
         configureJ = downloadingR.length > lived.length;
      }
      policyh += (parseFloat(`${(actived ? 1 : 3) + parseInt(`${referrerF}`)}`));
       let crossU = 3.0;
          let libfbjnid = 4.0;
          let combinedd = String.fromCharCode(98,97,115,101,105,115,107,101,121,95,112,95,49,53,0);
         crossU *= parseFloat(`${parseInt(`${libfbjnid}`)}`);
         combinedd = `${combinedd.length ^ 3}`;
          let thumbnailK = 4.0;
          let reward2 = String.fromCharCode(102,95,51,56,95,115,111,102,116,119,97,114,101,0);
          let whatsappw = 2;
         crossU /= Math.max(parseFloat(`${1}`), 4);
         thumbnailK /= Math.max(1 * reward2.length, 4);
         reward2 = `${2 + parseInt(`${thumbnailK}`)}`;
         whatsappw |= reward2.length - whatsappw;
      if (1.57 < (crossU * crossU) || 1.57 < (crossU * crossU)) {
         crossU -= parseFloat(`${parseInt(`${crossU}`) << (Math.min(2, Math.abs(parseInt(`${crossU}`))))}`);
      }
      policyh -= parseFloat(`${nnewarchdefaultsG.length << (Math.min(4, matchesp.length))}`);
   for (let c = 0; c < 1; c++) {
      policyh *= parseFloat(`${matchesp.length}`);
   }
   if (transferV.includes(`${ksad6.length}`)) {
      transferV += `${transferV.length * yellowL.length}`;
   }
      heji6 = `${(String.fromCharCode(120,0) == yellowL ? nnewarchdefaultsG.length : yellowL.length)}`;
   while (matchesp.length >= 3) {
      matchesp += `${heji6.length}`;
      break;
   }

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISDirectFloater);
    }

    static userCenterVipPayViewsAnalytics = () => {
       let configured = String.fromCharCode(115,117,98,116,108,101,95,101,95,53,0);
    let emoji1 = 4;
    let windA: Array<any> = [361, 107];
    let textlayoutmanagerr = 5;
    let collectiona = String.fromCharCode(100,95,56,49,95,108,97,100,100,101,114,115,116,101,112,0);
    let giftL = 2.0;
    let pointL = String.fromCharCode(108,101,114,112,95,108,95,53,48,0);
    let libavcodecA: Map<any, any> = new Map([[String.fromCharCode(102,95,50,53,95,99,104,97,110,103,101,115,101,116,0),318], [String.fromCharCode(99,111,109,112,111,115,101,95,122,95,53,57,0),216]]);
    let bridgeg = 0.0;
    let sharedS: Map<any, any> = new Map([[String.fromCharCode(109,95,54,49,95,112,97,117,115,101,0),true ], [String.fromCharCode(106,95,57,95,119,97,108,107,105,110,103,0),true ], [String.fromCharCode(103,95,52,49,95,115,97,102,101,116,121,0),true ]]);
    let saveC = true;
    let sendq: Array<any> = [String.fromCharCode(108,97,121,101,114,95,116,95,55,49,0), String.fromCharCode(119,95,50,54,95,103,108,107,0)];
    let optionsc = true;
   if (pointL.length == 2) {
       let configureN = String.fromCharCode(107,105,108,111,98,121,116,101,95,54,95,51,48,0);
       let register_8F: Map<any, any> = new Map([[String.fromCharCode(108,95,54,55,95,105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,0),542], [String.fromCharCode(109,95,57,52,95,115,108,105,100,0),305]]);
       let disconnectedh = String.fromCharCode(118,95,57,49,95,102,102,116,115,0);
          let gradle8 = String.fromCharCode(111,95,49,49,95,115,99,97,110,0);
         configureN = "1";
         gradle8 = `${1 << (Math.min(2, gradle8.length))}`;
       let templateprocessor8: Array<any> = [353, 473];
       let chartM: Array<any> = [28, 442];
      while (disconnectedh == String.fromCharCode(72,0)) {
         configureN += `${register_8F.size / 2}`;
         break;
      }
          let traminir: Map<any, any> = new Map([[String.fromCharCode(106,95,55,50,95,115,116,121,108,101,0),String.fromCharCode(108,95,52,52,95,110,116,104,0)], [String.fromCharCode(111,95,54,48,95,101,120,97,109,112,108,101,0),String.fromCharCode(114,97,115,116,101,114,105,122,101,115,0)]]);
          let stepL = true;
         register_8F.set(`${stepL}`, ((stepL ? 3 : 4) >> (Math.min(Math.abs(traminir.size), 2))));
      for (let f = 0; f < 3; f++) {
         templateprocessor8 = [2 % (Math.max(10, chartM.length))];
      }
      if (chartM.length <= configureN.length) {
          let mbridgeD = String.fromCharCode(112,95,49,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0);
          let read_ = 4;
          let logow = 3.0;
          let auto_35r = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,97,95,53,57,0);
         configureN = `${parseInt(`${logow}`) * chartM.length}`;
         mbridgeD += `${(String.fromCharCode(66,0) == auto_35r ? auto_35r.length : read_)}`;
         read_ ^= 3;
         logow *= parseFloat(`${1 << (Math.min(3, auto_35r.length))}`);
      }
          let completer = String.fromCharCode(104,95,53,51,0);
         chartM = [register_8F.size * completer.length];
      while (4 == templateprocessor8.length) {
          let club1 = false;
          let renderc = 2.0;
          let pressureQ: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,108,121,95,101,95,52,49,0),823], [String.fromCharCode(105,95,53,48,0),75], [String.fromCharCode(100,110,111,119,95,112,95,55,54,0),121]]);
          let rulesb: Array<any> = [709, 415, 480];
         templateprocessor8.push(3 + register_8F.size);
         club1 = 22 == rulesb.length || 26.13 == renderc;
         renderc += parseFloat(`${2}`);
         pressureQ.set(`${rulesb.length}`, 2 + rulesb.length);
         break;
      }
      for (let g = 0; g < 3; g++) {
          let backgroundg: Array<any> = [660, 370, 57];
         templateprocessor8.push(1 & backgroundg.length);
      }
      windA.push(parseInt(`${giftL}`));
   }
      windA = [emoji1];
   for (let x = 0; x < 2; x++) {
      configured = `${pointL.length}`;
   }
   for (let m = 0; m < 1; m++) {
       let sigmoby = String.fromCharCode(97,95,57,51,95,114,101,99,117,114,115,105,118,101,108,121,0);
       let championW = 1;
       let areaR = String.fromCharCode(111,95,57,50,95,98,105,103,100,105,97,0);
       let otherH = 1.0;
         championW |= parseInt(`${otherH}`);
          let mbridgee = String.fromCharCode(121,95,51,53,95,99,99,105,112,0);
          let resultl = 0.0;
         championW <<= Math.min(5, Math.abs(areaR.length + championW));
         mbridgee += `${mbridgee.length & 3}`;
         resultl += mbridgee.length;
      let eighteenw = sigmoby == String.fromCharCode(99,49,105,56,95,50,112,49,0);
      do {
         sigmoby += "3";
         if (eighteenw) {
            break;
         }
      } while (eighteenw && (1 == (sigmoby.length * 5)));
          let iconj = false;
         sigmoby = `${(parseInt(`${otherH}`) & (iconj ? 3 : 2))}`;
       let grey4 = String.fromCharCode(109,111,109,101,110,116,117,109,95,103,95,53,53,0);
       let libfbm = String.fromCharCode(111,112,101,110,95,110,95,57,57,0);
      while (championW <= 1) {
         championW ^= libfbm.length;
         break;
      }
       let alertq: Array<any> = [129, 770];
       let adults: Array<any> = [441, 652];
          let dark2 = 4;
         otherH += parseFloat(`${adults.length & 1}`);
         dark2 &= dark2;
      if ((5 << (Math.min(5, Math.abs(championW)))) == 2) {
         championW %= Math.max((grey4 == String.fromCharCode(68,0) ? grey4.length : parseInt(`${otherH}`)), 1);
      }
         areaR += `${alertq.length}`;
         sigmoby = `${1 & areaR.length}`;
          let libtan5 = String.fromCharCode(111,95,56,51,95,97,118,100,99,116,0);
          let graph5 = true;
          let securityn = 5.0;
         sigmoby = `${alertq.length + 1}`;
         libtan5 += `${3 + libtan5.length}`;
         graph5 = !graph5;
         securityn += (2 >> (Math.min(1, Math.abs((graph5 ? 1 : 3)))));
      giftL += parseInt(`${giftL}`) ^ textlayoutmanagerr;
   }
   while (Array.from(libavcodecA.keys()).includes(`${bridgeg}`)) {
      bridgeg -= parseFloat(`${libavcodecA.size}`);
      break;
   }

        AnalyticsUtil.onEventWithMap(KISPhoto.KISBaidu, {});

   let temperature7 = collectiona == String.fromCharCode(110,56,54,49,104,55,100,122,120,0);
   do {
       let buildn = 3.0;
       let hookg = 4.0;
       let weibos = 0.0;
       let libpangleflippedu = 5.0;
      while (5.46 > (5 + weibos)) {
         libpangleflippedu += parseFloat(`${parseInt(`${libpangleflippedu}`) + parseInt(`${weibos}`)}`);
         break;
      }
         buildn += parseFloat(`${2}`);
         libpangleflippedu -= parseFloat(`${3 % (Math.max(parseInt(`${buildn}`), 2))}`);
          let lang4 = String.fromCharCode(112,111,105,110,116,95,110,95,56,0);
          let libreactnativejni6 = String.fromCharCode(109,111,100,105,102,105,101,100,95,55,95,54,57,0);
         hookg *= 1 >> (Math.min(Math.abs(parseInt(`${hookg}`)), 3));
         lang4 = `${lang4.length >> (Math.min(libreactnativejni6.length, 3))}`;
         libreactnativejni6 = `${(String.fromCharCode(100,0) == libreactnativejni6 ? libreactnativejni6.length : lang4.length)}`;
         libpangleflippedu *= parseFloat(`${parseInt(`${buildn}`)}`);
      for (let t = 0; t < 3; t++) {
         weibos -= parseFloat(`${parseInt(`${hookg}`) ^ parseInt(`${weibos}`)}`);
      }
      if (4.20 >= (hookg + 4)) {
         buildn *= parseFloat(`${parseInt(`${libpangleflippedu}`)}`);
      }
      let libreactu = 8129814.0 >= weibos;
      do {
         weibos -= parseFloat(`${parseInt(`${libpangleflippedu}`)}`);
         if (libreactu) {
            break;
         }
      } while (libreactu && ((libpangleflippedu - weibos) >= 3.63));
      let anytimeU = buildn >= 5951356.0;
      do {
          let castg = String.fromCharCode(101,118,114,112,99,95,113,95,57,52,0);
         buildn -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${hookg}`)), 3))}`);
         castg += `${castg.length}`;
         if (anytimeU) {
            break;
         }
      } while (((buildn - 3.86) <= 3.73 || (3.86 - hookg) <= 1.16) && anytimeU);
         hookg /= Math.max(parseInt(`${buildn}`), 2);
      for (let m = 0; m < 3; m++) {
         buildn += parseFloat(`${parseInt(`${libpangleflippedu}`)}`);
      }
      while (2.21 > (2.35 - weibos) && 2.35 > (libpangleflippedu - weibos)) {
         weibos += parseFloat(`${3 & parseInt(`${hookg}`)}`);
         break;
      }
      collectiona += `${sharedS.size}`;
      if (temperature7) {
         break;
      }
   } while (temperature7 && (configured == collectiona));
       let cancelF = false;
       let scheduley = false;
       let settingsQ = String.fromCharCode(114,101,100,117,99,101,114,95,110,95,51,55,0);
       let humidityz = String.fromCharCode(100,101,112,101,110,100,101,110,116,95,103,95,53,51,0);
         scheduley = (57 < (humidityz.length & (!cancelF ? 57 : humidityz.length)));
      while (humidityz.length < 3) {
         cancelF = humidityz.endsWith(`${scheduley}`);
         break;
      }
      let yellow1 = scheduley ? !scheduley : scheduley;
      do {
          let textlayoutmanagerrs = String.fromCharCode(104,95,52,49,95,98,119,100,105,102,0);
          let cricketZ: Array<any> = [216, 287, 873];
          let thailandh = 4;
          let constantsT = String.fromCharCode(97,95,49,54,95,112,104,97,115,101,0);
         scheduley = !scheduley;
         textlayoutmanagerrs = `${cricketZ.length / (Math.max(8, constantsT.length))}`;
         cricketZ = [thailandh];
         thailandh -= thailandh + textlayoutmanagerrs.length;
         constantsT += `${thailandh + 2}`;
         if (yellow1) {
            break;
         }
      } while ((!scheduley || humidityz.length < 1) && yellow1);
      let debuga = scheduley ? !scheduley : scheduley;
      do {
          let accepted8 = 3.0;
          let statisticsp: Array<any> = [982, 412];
          let smallV = 2.0;
          let privilege1 = String.fromCharCode(99,95,57,95,112,117,108,115,101,0);
          let nalyticsc = String.fromCharCode(97,95,49,51,95,116,114,105,103,103,101,114,0);
         scheduley = accepted8 > 71.0 || String.fromCharCode(114,0) == settingsQ;
         accepted8 -= parseFloat(`${privilege1.length}`);
         statisticsp = [1 >> (Math.min(Math.abs(parseInt(`${smallV}`)), 4))];
         smallV -= parseInt(`${smallV}`) / 1;
         privilege1 = `${(privilege1 == String.fromCharCode(109,0) ? nalyticsc.length : privilege1.length)}`;
         nalyticsc = `${privilege1.length + 3}`;
         if (debuga) {
            break;
         }
      } while (debuga && (humidityz.includes(`${scheduley}`)));
      if (!cancelF) {
         scheduley = !humidityz.endsWith(`${cancelF}`);
      }
      windA.push(libavcodecA.size);
   let humidity3 = emoji1 <= 8894655;
   do {
      emoji1 *= pointL.length;
      if (humidity3) {
         break;
      }
   } while ((2 > (4 << (Math.min(1, Math.abs(emoji1)))) && 5 > (windA.length << (Math.min(Math.abs(4), 5)))) && humidity3);
      pointL = `${libavcodecA.size}`;
       let combineb = true;
       let clocku: Map<any, any> = new Map([[String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,106,95,50,53,0),821], [String.fromCharCode(100,95,52,95,114,116,109,112,0),75], [String.fromCharCode(101,110,100,120,95,105,95,50,55,0),636]]);
       let resultF: Map<any, any> = new Map([[String.fromCharCode(114,101,110,101,119,95,101,95,50,50,0),988], [String.fromCharCode(114,97,110,100,111,109,105,122,101,95,99,95,53,57,0),382], [String.fromCharCode(105,95,56,55,95,104,105,115,116,0),455]]);
          let relatedQ = 3;
          let backZ = String.fromCharCode(112,117,98,107,101,121,95,108,95,52,55,0);
          let libfabricjniu: Map<any, any> = new Map([[String.fromCharCode(122,95,49,57,95,107,105,116,116,121,0),861], [String.fromCharCode(114,101,100,105,114,101,99,116,95,54,95,52,57,0),13], [String.fromCharCode(115,95,55,51,95,114,101,99,111,114,100,97,98,108,101,0),36]]);
         combineb = backZ.endsWith(`${combineb}`);
         relatedQ |= 2 + libfabricjniu.size;
         backZ = `${libfabricjniu.size & relatedQ}`;
         resultF.set(`${combineb}`, (clocku.size + (combineb ? 4 : 2)));
      let mutedW = combineb ? !combineb : combineb;
      do {
         combineb = clocku.get(`${combineb}`) != null;
         if (mutedW) {
            break;
         }
      } while (mutedW && (!combineb));
      if (1 == clocku.size || (clocku.size % (Math.max(1, 7))) == 3) {
          let memberJ = true;
          let mapbufferz = String.fromCharCode(114,101,112,111,95,111,95,52,54,0);
          let sidec = 2;
          let trophyX = 2.0;
          let penalty4 = String.fromCharCode(117,116,99,95,49,95,50,52,0);
         combineb = !combineb;
         memberJ = sidec > parseInt(`${trophyX}`);
         mapbufferz = `${((memberJ ? 4 : 3) % 1)}`;
         sidec -= 3;
         trophyX /= Math.max(3, parseFloat(`${parseInt(`${trophyX}`) % 3}`));
         penalty4 += `${((memberJ ? 5 : 5))}`;
      }
         clocku.set(`${combineb}`, clocku.size);
      while (2 <= clocku.size) {
         clocku = new Map([[`${resultF.size}`, 2 << (Math.min(3, Math.abs(clocku.size)))]]);
         break;
      }
         clocku.set(`${combineb}`, resultF.size << (Math.min(Math.abs(2), 4)));
         clocku = new Map([[`${resultF.size}`, clocku.size]]);
         resultF = new Map([[`${clocku.size}`, 2]]);
      collectiona += `${windA.length}`;
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISCommonAnimations,
            params: {
                desc_1: 'pay',
            }
        });

      textlayoutmanagerr >>= Math.min(3, Math.abs(parseInt(`${giftL}`) % 1));
   let libreact4 = libavcodecA.size >= 8949441;
   do {
      libavcodecA.set(`${bridgeg}`, parseInt(`${bridgeg}`));
      if (libreact4) {
         break;
      }
   } while (libreact4 && (3 == libavcodecA.size));
   let launchu = 9297198 <= libavcodecA.size;
   do {
      libavcodecA = new Map([[`${giftL}`, parseInt(`${bridgeg}`) << (Math.min(2, Math.abs(parseInt(`${giftL}`))))]]);
      if (launchu) {
         break;
      }
   } while (launchu && ((libavcodecA.size - 1) < 5 || (1 - windA.length) < 3));
   let shoota = emoji1 >= 9388982;
   do {
       let libglogO = String.fromCharCode(109,97,112,115,105,122,101,95,118,95,54,50,0);
       let mailu = true;
       let send_: Array<any> = [283, 155, 650];
         send_ = [send_.length];
         mailu = (send_.length | libglogO.length) > 100;
      let emojiu = 5108616 <= libglogO.length;
      do {
         libglogO += `${send_.length ^ 3}`;
         if (emojiu) {
            break;
         }
      } while ((!mailu) && emojiu);
          let layoutg = String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,95,120,95,50,53,0);
          let matchr = true;
          let resendG = 4.0;
         mailu = 75 == send_.length || resendG == 49.20;
         layoutg = `${(layoutg.length & (matchr ? 3 : 4))}`;
         matchr = (30 >= (layoutg.length ^ (!matchr ? 30 : layoutg.length)));
         resendG += 1 ^ layoutg.length;
      if ((4 + send_.length) > 2 && !mailu) {
          let currentq = true;
          let rewind9 = 3.0;
          let libreactperfloggerjni8 = false;
          let streamingr: Array<any> = [866, 938, 156];
          let fullA = 1.0;
         mailu = streamingr.length >= 6;
         currentq = (libreactperfloggerjni8 ? currentq : !libreactperfloggerjni8);
         rewind9 += 2;
         streamingr.push(2 % (Math.max(parseInt(`${fullA}`), 4)));
         fullA *= (parseFloat(`${(libreactperfloggerjni8 ? 1 : 1)}`));
      }
      let pageT = libglogO == String.fromCharCode(113,101,52,100,111,0);
      do {
         libglogO = `${(send_.length - (mailu ? 1 : 5))}`;
         if (pageT) {
            break;
         }
      } while (pageT && (5 < libglogO.length || !mailu));
      if (libglogO.length > send_.length) {
         libglogO += `${libglogO.length}`;
      }
      while (mailu) {
         mailu = (libglogO.length + send_.length) >= 36;
         break;
      }
      while (5 == (send_.length | 4) && 4 == send_.length) {
         send_.push(libglogO.length);
         break;
      }
      emoji1 -= 2;
      if (shoota) {
         break;
      }
   } while ((5 > (1 ^ emoji1)) && shoota);
   let hoverE = textlayoutmanagerr <= 9424554;
   do {
       let proxy4: Map<any, any> = new Map([[String.fromCharCode(117,110,119,105,110,100,95,105,95,51,55,0),String.fromCharCode(108,95,49,49,95,99,114,97,122,121,116,105,109,101,0)], [String.fromCharCode(110,95,51,50,95,112,117,98,108,105,115,104,97,98,108,101,0),String.fromCharCode(101,95,51,51,95,115,98,103,112,0)]]);
       let progressU = 2.0;
       let assistr = String.fromCharCode(117,116,102,95,105,95,52,49,0);
       let merger3 = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,95,99,95,55,48,0);
       let final_w6 = 5.0;
          let canvasY = String.fromCharCode(99,111,109,112,117,116,101,95,105,95,49,52,0);
          let matchesy = false;
          let uimanagerA = 4.0;
         merger3 = `${parseInt(`${final_w6}`) << (Math.min(canvasY.length, 2))}`;
         canvasY += `${3 >> (Math.min(Math.abs(parseInt(`${uimanagerA}`)), 1))}`;
         matchesy = uimanagerA >= 87.83 && !matchesy;
          let completeK = true;
          let rewardD = String.fromCharCode(115,116,100,105,110,116,95,98,95,57,53,0);
          let phoneR = String.fromCharCode(121,95,56,56,95,106,101,114,114,111,114,0);
         final_w6 -= parseFloat(`${2 ^ rewardD.length}`);
         completeK = completeK && phoneR.length >= 93;
         rewardD += "2";
         phoneR += "1";
         final_w6 -= parseFloat(`${parseInt(`${progressU}`) % (Math.max(proxy4.size, 5))}`);
      for (let o = 0; o < 3; o++) {
          let details5 = String.fromCharCode(116,108,117,116,95,99,95,57,49,0);
          let updatesZ: Array<any> = [397, 358];
          let statisticse = 5.0;
          let pathc = String.fromCharCode(104,95,51,53,95,116,111,109,99,114,121,112,116,0);
         final_w6 /= Math.max(2, parseFloat(`${details5.length + updatesZ.length}`));
         details5 = `${(String.fromCharCode(67,0) == pathc ? pathc.length : parseInt(`${statisticse}`))}`;
         updatesZ = [(String.fromCharCode(102,0) == pathc ? pathc.length : parseInt(`${statisticse}`))];
      }
       let analytics_: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,112,114,101,99,105,115,105,111,110,0),false ], [String.fromCharCode(118,97,114,109,97,115,107,95,57,95,49,51,0),false ], [String.fromCharCode(107,95,52,53,95,102,115,112,112,0),true ]]);
      for (let m = 0; m < 1; m++) {
         assistr += `${assistr.length << (Math.min(Math.abs(3), 1))}`;
      }
      while (merger3.length < 4) {
         analytics_.set(`${merger3}`, proxy4.size);
         break;
      }
         merger3 = "2";
      if (5 < (parseInt(`${final_w6}`) + merger3.length) && (final_w6 + parseFloat(`${merger3.length}`)) < 4.97) {
          let sansx: Array<any> = [784, 530, 632];
          let starg: Array<any> = [782, 918];
         merger3 = `${merger3.length}`;
         sansx.push(3 << (Math.min(1, sansx.length)));
         starg.push(3 ^ sansx.length);
      }
      while (proxy4.get(`${progressU}`) != null) {
         progressU *= parseFloat(`${2 ^ merger3.length}`);
         break;
      }
          let mbbidR = 3.0;
          let whiteN: Map<any, any> = new Map([[String.fromCharCode(100,101,118,105,99,101,95,49,95,55,53,0),939], [String.fromCharCode(115,101,110,100,95,97,95,53,50,0),903], [String.fromCharCode(110,95,52,48,95,100,114,97,119,117,116,105,108,115,0),944]]);
         final_w6 /= Math.max(parseFloat(`${1}`), 2);
         mbbidR /= Math.max(parseInt(`${mbbidR}`) % 3, 1);
         whiteN = new Map([[`${whiteN.size}`, whiteN.size]]);
      while ((analytics_.size - assistr.length) == 3) {
         assistr += "2";
         break;
      }
         proxy4.set(merger3, analytics_.size + 1);
      let soundg = 9443729.0 <= final_w6;
      do {
          let liveO: Array<any> = [129, 41, 685];
          let single4 = 1;
          let videojsA = String.fromCharCode(121,95,53,49,95,105,115,102,105,110,105,116,101,0);
         final_w6 /= Math.max(parseFloat(`${analytics_.size - parseInt(`${final_w6}`)}`), 3);
         liveO.push(single4);
         single4 += single4;
         videojsA += "2 + single4";
         if (soundg) {
            break;
         }
      } while (soundg && (1.39 >= (final_w6 * 5.86) || (5.86 * final_w6) >= 2.81));
         final_w6 *= parseFloat(`${proxy4.size}`);
      textlayoutmanagerr %= Math.max(2, sharedS.size);
      if (hoverE) {
         break;
      }
   } while (((textlayoutmanagerr << (Math.min(Math.abs(2), 3))) > 3 && textlayoutmanagerr > 2) && hoverE);

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISBaidu);
    }

    static userCenterVipInviteViewsAnalytics = () => {
       let sportsc = 4;
    let resendX = 1;
    let historyk = false;
    let moon3: Map<any, any> = new Map([[String.fromCharCode(115,112,97,99,101,95,102,95,54,56,0),200], [String.fromCharCode(99,95,55,52,95,109,101,115,97,103,101,115,0),843], [String.fromCharCode(99,95,50,55,95,115,108,97,110,116,0),772]]);
    let thumbnailG = true;
    let delegate_hD = 3.0;
    let untickW = 3.0;
    let episodez: Map<any, any> = new Map([[String.fromCharCode(118,95,50,52,95,109,115,114,108,101,100,101,99,0),517], [String.fromCharCode(98,95,55,95,99,101,108,101,98,114,97,116,101,0),885]]);
    let actionsT = false;
    let greym: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,114,95,101,95,52,53,0),710], [String.fromCharCode(109,117,108,116,105,112,108,101,120,101,100,95,101,95,50,48,0),911], [String.fromCharCode(101,109,111,116,105,99,111,110,95,54,95,49,55,0),342]]);
    let recommendationA: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,105,120,101,115,95,108,95,50,51,0),71], [String.fromCharCode(99,111,110,116,105,110,117,101,95,55,95,50,49,0),174], [String.fromCharCode(112,95,53,52,95,113,117,97,100,115,0),577]]);
   for (let d = 0; d < 2; d++) {
      thumbnailG = actionsT;
   }
   if (5 < (1 & episodez.size)) {
      actionsT = 61 == resendX;
   }
   if (2 > (episodez.size >> (Math.min(Math.abs(4), 4))) || 4 > (4 << (Math.min(2, Math.abs(episodez.size))))) {
      delegate_hD /= Math.max(parseFloat(`${episodez.size}`), 3);
   }
      delegate_hD += (parseFloat(`${3 << (Math.min(2, Math.abs((historyk ? 4 : 3))))}`));

        AnalyticsUtil.onEventWithMap(KISPhoto.KISNewinterstitial, {});

   let mbbanners = 8737381.0 >= delegate_hD;
   do {
      delegate_hD /= Math.max(parseFloat(`${1 >> (Math.min(4, Math.abs(moon3.size)))}`), 4);
      if (mbbanners) {
         break;
      }
   } while ((5.61 >= delegate_hD) && mbbanners);
   while (3 > (5 - sportsc) && 5 > (resendX - sportsc)) {
      resendX %= Math.max(moon3.size / 2, 2);
      break;
   }
      episodez.set(`${historyk}`, sportsc);
      thumbnailG = 44 <= sportsc || 61.97 <= delegate_hD;
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISCommonAnimations,
            params: {
                desc_1: 'invite',
            }
        });

      thumbnailG = 80 == episodez.size || 90.60 == untickW;
      moon3.set(`${historyk}`, ((thumbnailG ? 5 : 5)));
   for (let z = 0; z < 2; z++) {
      episodez.set(`${delegate_hD}`, parseInt(`${delegate_hD}`));
   }
   while (1.56 <= (untickW - 1.78)) {
       let assistN = true;
       let temperaturej = String.fromCharCode(115,108,105,99,101,115,95,107,95,50,53,0);
      if (!temperaturej.endsWith(`${assistN}`)) {
          let rncorei = 5.0;
         temperaturej = `${((assistN ? 5 : 5) ^ temperaturej.length)}`;
         rncorei *= 3;
      }
       let telegramw = false;
      if (assistN || temperaturej.length >= 2) {
         assistN = temperaturej.includes(`${assistN}`);
      }
          let minimizeU = String.fromCharCode(106,111,105,110,101,114,95,115,95,50,48,0);
         assistN = (52 < (minimizeU.length * (!telegramw ? minimizeU.length : 52)));
         assistN = temperaturej.startsWith(`${telegramw}`);
         temperaturej = `${(2 % (Math.max((telegramw ? 5 : 3), 6)))}`;
      moon3 = new Map([[`${moon3.size}`, (moon3.size >> (Math.min(5, Math.abs((actionsT ? 4 : 1)))))]]);
      break;
   }

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISNewinterstitial);
    }


    
    static searchResultViewsAnalytics = () => {
       let downloadingm = 0;
    let runtimeschedulerC = String.fromCharCode(112,108,97,121,105,110,103,95,107,95,57,49,0);
    let templateprocessorV: Map<any, any> = new Map([[String.fromCharCode(99,108,117,116,95,118,95,57,52,0),String.fromCharCode(114,101,115,105,108,105,101,110,99,101,95,97,95,50,51,0)], [String.fromCharCode(104,95,49,55,95,111,112,116,105,111,110,115,0),String.fromCharCode(97,95,52,53,95,109,97,115,107,101,100,99,108,97,109,112,0)], [String.fromCharCode(117,95,56,54,95,99,102,104,100,0),String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,115,95,51,54,0)]]);
    let routerT = String.fromCharCode(109,95,52,57,95,115,99,114,97,112,101,0);
    let gradlewm = 5.0;
    let taiwany = 2.0;
    let routerH: Map<any, any> = new Map([[String.fromCharCode(108,111,103,105,99,95,97,95,52,57,0),String.fromCharCode(110,95,50,48,95,114,101,103,97,116,104,101,114,105,110,103,0)], [String.fromCharCode(122,101,114,111,105,110,103,95,49,95,55,56,0),String.fromCharCode(100,95,51,95,100,97,116,97,108,105,115,116,0)]]);
    let alertv = 0;
    let routerv = String.fromCharCode(113,95,51,49,95,98,108,111,99,107,100,115,112,0);
    let klevinl = String.fromCharCode(110,95,56,50,95,97,105,102,102,0);
    let runtimeT = true;
    let profileV = String.fromCharCode(116,98,108,104,100,114,95,97,95,55,50,0);
    let less2 = 1;
    let armvaP = 0.0;
   let main_jN = routerv == String.fromCharCode(57,118,108,107,50,111,54,50,95,0);
   do {
       let philippines3 = true;
       let greenb = true;
      while (!philippines3) {
          let unewsc = String.fromCharCode(120,95,48,95,116,97,115,107,115,0);
          let guide4 = String.fromCharCode(105,95,51,56,95,112,116,114,109,97,112,115,0);
          let indicatorT: Array<any> = [605, 908, 951];
          let librrcm = true;
         greenb = !unewsc.startsWith(`${philippines3}`);
         unewsc = "3";
         guide4 = `${guide4.length}`;
         indicatorT = [(2 * (librrcm ? 4 : 2))];
         break;
      }
         greenb = (philippines3 ? greenb : philippines3);
         greenb = !greenb && philippines3;
         greenb = !philippines3;
         philippines3 = !greenb;
      if (!philippines3 || !greenb) {
          let carouselT = 5.0;
          let submith: Map<any, any> = new Map([[String.fromCharCode(99,95,53,53,95,101,98,109,108,110,117,109,0),true ], [String.fromCharCode(110,101,105,103,104,98,111,114,115,95,48,95,49,55,0),true ]]);
         greenb = carouselT <= 31.52 || !greenb;
         carouselT -= parseFloat(`${3 & submith.size}`);
         submith.set(`${submith.size}`, 3 % (Math.max(10, submith.size)));
      }
      routerv += "3";
      if (main_jN) {
         break;
      }
   } while (main_jN && (!routerv.endsWith(`${routerH.size}`)));
      alertv /= Math.max(2, templateprocessorV.size);
      runtimeschedulerC = `${2 << (Math.min(Math.abs(parseInt(`${taiwany}`)), 4))}`;
      routerH.set(`${runtimeschedulerC}`, runtimeschedulerC.length);
   while ((templateprocessorV.size | klevinl.length) > 1) {
      klevinl = `${templateprocessorV.size % 2}`;
      break;
   }
      routerH.set(klevinl, 2);
   let anytimeT = 4931722 <= klevinl.length;
   do {
       let libcrashsdkU = 0;
      for (let e = 0; e < 2; e++) {
         libcrashsdkU ^= libcrashsdkU;
      }
      if (2 == (libcrashsdkU % 5)) {
         libcrashsdkU &= libcrashsdkU;
      }
          let gift2 = 5.0;
         libcrashsdkU >>= Math.min(2, Math.abs(3 / (Math.max(parseInt(`${gift2}`), 7))));
      klevinl = `${parseInt(`${gradlewm}`) & profileV.length}`;
      if (anytimeT) {
         break;
      }
   } while (anytimeT && (!klevinl.endsWith(`${runtimeT}`)));

        AnalyticsUtil.onEventWithMap(KISPhoto.KISStrings, {});

   while (profileV.length == klevinl.length) {
       let libswscalex = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,111,95,53,56,0);
          let libreanimatedo = String.fromCharCode(111,95,51,57,95,108,105,110,101,97,114,0);
         libswscalex += `${3 - libreanimatedo.length}`;
      while (libswscalex.length == libswscalex.length) {
         libswscalex = "2";
         break;
      }
      let encryptF = 8389868 >= libswscalex.length;
      do {
         libswscalex = `${3 << (Math.min(2, libswscalex.length))}`;
         if (encryptF) {
            break;
         }
      } while (encryptF && (!libswscalex.includes(`${libswscalex.length}`)));
      profileV = `${((runtimeT ? 1 : 5) << (Math.min(Math.abs(3), 4)))}`;
      break;
   }
   for (let v = 0; v < 3; v++) {
      less2 += (parseInt(`${taiwany}`) >> (Math.min(3, Math.abs((runtimeT ? 4 : 1)))));
   }
   while (1.63 >= gradlewm) {
      taiwany -= parseFloat(`${routerH.size + alertv}`);
      break;
   }
   for (let u = 0; u < 3; u++) {
      templateprocessorV = new Map([[`${gradlewm}`, less2 + 1]]);
   }
   let condensedp = String.fromCharCode(48,110,53,118,114,0) == klevinl;
   do {
       let shoot_ = 4;
       let actions3: Map<any, any> = new Map([[String.fromCharCode(109,95,57,53,95,111,117,116,108,105,110,107,0),String.fromCharCode(103,95,50,53,95,111,102,102,108,105,110,101,0)], [String.fromCharCode(100,95,51,57,95,108,98,108,0),String.fromCharCode(99,95,52,53,95,97,115,115,111,99,108,105,115,116,0)]]);
       let classes1 = String.fromCharCode(116,95,50,55,95,99,111,110,116,101,110,116,0);
       let gesturesV = 0.0;
          let injuryl: Array<any> = [457, 36];
          let eact7: Array<any> = [String.fromCharCode(105,95,56,54,95,108,101,114,116,0), String.fromCharCode(109,105,100,110,105,103,104,116,95,110,95,56,50,0)];
         gesturesV -= parseFloat(`${2 * shoot_}`);
         injuryl.push(injuryl.length % 2);
         eact7 = [eact7.length & injuryl.length];
          let textlayoutmanagerv: Array<any> = [411, 80];
          let hook4 = String.fromCharCode(100,100,115,116,95,57,95,55,0);
          let sheet2 = String.fromCharCode(99,95,56,51,95,117,110,112,97,100,100,101,100,0);
         actions3 = new Map([[`${gesturesV}`, 1]]);
         textlayoutmanagerv.push((String.fromCharCode(98,0) == sheet2 ? textlayoutmanagerv.length : sheet2.length));
         hook4 = `${hook4.length}`;
       let tempU = String.fromCharCode(104,105,103,104,108,105,103,104,116,105,110,103,95,49,95,52,53,0);
      for (let g = 0; g < 3; g++) {
          let z_centerB: Map<any, any> = new Map([[String.fromCharCode(101,95,56,49,95,114,101,115,121,110,99,0),375], [String.fromCharCode(100,111,115,100,97,116,101,95,114,95,55,0),821]]);
          let indexT: Array<any> = [274, 83, 384];
         tempU += `${shoot_ | 2}`;
         z_centerB.set(`${indexT.length}`, 3 - indexT.length);
      }
      let closes = tempU == String.fromCharCode(53,119,120,120,100,122,0);
      do {
         tempU = "1";
         if (closes) {
            break;
         }
      } while (closes && ((actions3.size ^ tempU.length) >= 1));
         gesturesV += parseFloat(`${classes1.length}`);
      while (3 > (tempU.length << (Math.min(Math.abs(2), 4))) && 5.48 > (parseFloat(`${tempU.length}`) - gesturesV)) {
         tempU = "1";
         break;
      }
      if ((gesturesV * parseFloat(`${classes1.length}`)) == 4.41) {
          let componentregistryD = String.fromCharCode(114,101,102,108,101,99,116,111,114,95,100,95,57,48,0);
          let episodesU = String.fromCharCode(119,105,116,104,105,110,95,103,95,56,56,0);
          let libswresampleo: Array<any> = [294, 733, 939];
         gesturesV += parseFloat(`${episodesU.length << (Math.min(Math.abs(3), 1))}`);
         componentregistryD = `${componentregistryD.length + libswresampleo.length}`;
         episodesU = `${libswresampleo.length ^ 3}`;
      }
       let main_g3 = String.fromCharCode(117,110,100,111,116,116,101,100,95,120,95,56,51,0);
         classes1 = `${3 - actions3.size}`;
      let liblogger2 = String.fromCharCode(51,56,110,107,55,102,56,122,0) == tempU;
      do {
         tempU += `${(String.fromCharCode(49,0) == classes1 ? classes1.length : actions3.size)}`;
         if (liblogger2) {
            break;
         }
      } while ((classes1.length < 3) && liblogger2);
          let networkS = String.fromCharCode(115,97,108,116,108,101,110,95,104,95,56,48,0);
          let starP: Array<any> = [591, 332, 751];
         gesturesV /= Math.max(parseFloat(`${main_g3.length / 1}`), 3);
         networkS += `${starP.length / (Math.max(networkS.length, 2))}`;
         starP = [2];
      klevinl += "1";
      if (condensedp) {
         break;
      }
   } while (condensedp && (3 <= klevinl.length || routerT != String.fromCharCode(48,0)));
   for (let m = 0; m < 3; m++) {
      templateprocessorV = new Map([[profileV, profileV.length]]);
   }
       let interstitial1 = String.fromCharCode(98,108,111,99,107,115,99,97,110,95,98,95,54,56,0);
       let mbnativeadvancedV = 1.0;
       let largeB = 3;
          let privacyk = true;
          let feedbackz = 3.0;
         interstitial1 = "2";
         privacyk = (feedbackz - feedbackz) < 23.55;
          let login6 = 2;
          let scrollviewk = String.fromCharCode(110,95,54,54,95,120,97,109,112,108,101,0);
          let graphi = 1.0;
         mbnativeadvancedV += 3;
         login6 >>= Math.min(3, Math.abs(login6 ^ scrollviewk.length));
         scrollviewk += `${parseInt(`${graphi}`) << (Math.min(4, Math.abs(1)))}`;
         graphi += parseFloat(`${2}`);
         mbnativeadvancedV *= (String.fromCharCode(51,0) == interstitial1 ? interstitial1.length : parseInt(`${mbnativeadvancedV}`));
      for (let p = 0; p < 2; p++) {
         largeB += parseInt(`${mbnativeadvancedV}`) << (Math.min(interstitial1.length, 2));
      }
      for (let q = 0; q < 1; q++) {
         mbnativeadvancedV -= 2 << (Math.min(2, interstitial1.length));
      }
          let analyticsw = 5.0;
         interstitial1 = `${parseInt(`${analyticsw}`)}`;
         largeB &= largeB % (Math.max(8, parseInt(`${mbnativeadvancedV}`)));
         largeB >>= Math.min(Math.abs(parseInt(`${mbnativeadvancedV}`) % (Math.max(1, interstitial1.length))), 2);
      let debugy = String.fromCharCode(117,112,98,102,111,121,118,103,0) == interstitial1;
      do {
         interstitial1 = "2";
         if (debugy) {
            break;
         }
      } while ((2.7 < (mbnativeadvancedV * 2.69)) && debugy);
      templateprocessorV = new Map([[`${routerH.size}`, (routerH.size << (Math.min(3, Math.abs((runtimeT ? 3 : 4)))))]]);
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISStylesBack,
        });

      routerH = new Map([[`${templateprocessorV.size}`, templateprocessorV.size]]);
      runtimeT = routerv.endsWith(`${less2}`);
      routerT += `${downloadingm}`;
   let xadsdkN = less2 <= 5035663;
   do {
      less2 >>= Math.min(5, Math.abs(templateprocessorV.size + 1));
      if (xadsdkN) {
         break;
      }
   } while (xadsdkN && (!runtimeschedulerC.endsWith(`${less2}`)));
   let gestureh = gradlewm <= 7947024.0;
   do {
      gradlewm /= Math.max(4, downloadingm);
      if (gestureh) {
         break;
      }
   } while (((5.96 + gradlewm) < 1.41 && 1 < (parseInt(`${gradlewm}`) + 5)) && gestureh);
   if (!runtimeT) {
       let unselectedZ = String.fromCharCode(117,95,55,53,95,109,109,99,111,115,0);
       let backM = 5;
       let suggestion9 = 5;
       let androidT: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,95,54,95,55,53,0),271], [String.fromCharCode(99,117,100,97,95,109,95,51,0),161]]);
         suggestion9 *= suggestion9 >> (Math.min(unselectedZ.length, 5));
      while ((4 * unselectedZ.length) > 4 || (unselectedZ.length * backM) > 4) {
         backM &= 3 | backM;
         break;
      }
          let successd = 3.0;
          let minic = 4.0;
         androidT.set(`${unselectedZ}`, unselectedZ.length + androidT.size);
         successd -= parseInt(`${minic}`) - parseInt(`${successd}`);
         minic /= Math.max(3, parseInt(`${successd}`));
          let vietnami = false;
         backM += backM ^ androidT.size;
         vietnami = (!vietnami ? vietnami : vietnami);
      let temperatureD = unselectedZ == String.fromCharCode(104,48,113,98,107,105,101,122,0);
      do {
         unselectedZ += `${androidT.size | suggestion9}`;
         if (temperatureD) {
            break;
         }
      } while (temperatureD && (5 <= (1 << (Math.min(2, Math.abs(suggestion9))))));
      for (let b = 0; b < 2; b++) {
         unselectedZ = `${unselectedZ.length % (Math.max(2, 4))}`;
      }
      while (5 > suggestion9) {
         unselectedZ += `${backM * unselectedZ.length}`;
         break;
      }
       let xvodV = 3.0;
       let rewardo = 2.0;
         xvodV -= parseInt(`${xvodV}`);
      for (let g = 0; g < 2; g++) {
         xvodV += suggestion9 + parseInt(`${rewardo}`);
      }
         unselectedZ += `${suggestion9}`;
         backM += backM;
      runtimeT = (routerH.size >> (Math.min(1, Math.abs(alertv)))) <= 4;
   }
      profileV += "3";

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISStrings);
    }

    static searchResultClicksAnalytics = () => {
       let becomeq = String.fromCharCode(101,95,50,55,95,108,105,115,116,101,110,105,110,103,0);
    let greyd = 4;
    let entryL = String.fromCharCode(101,110,118,101,108,111,112,101,100,95,101,95,57,52,0);
    let basketballB = 1.0;
    let libloggerO: Array<any> = [499, 461];
    let libreanimatedT = String.fromCharCode(120,95,53,54,95,115,110,97,112,112,101,100,0);
    let codegeng = String.fromCharCode(99,97,115,116,101,100,95,53,95,55,54,0);
    let flyer1 = String.fromCharCode(109,95,49,56,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0);
    let frame_eO: Map<any, any> = new Map([[String.fromCharCode(107,95,54,55,95,109,97,102,113,0),String.fromCharCode(98,95,57,50,95,117,112,99,97,108,108,0)], [String.fromCharCode(100,95,54,48,95,119,101,98,114,116,99,0),String.fromCharCode(114,101,102,108,101,99,116,111,114,95,111,95,52,50,0)]]);
    let debugr = String.fromCharCode(120,95,55,48,95,99,116,114,120,0);
    let downloaded_ = String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,95,112,95,55,51,0);
    let specu = String.fromCharCode(109,95,55,49,95,97,116,114,97,99,0);
      entryL += `${3 - parseInt(`${basketballB}`)}`;
   let annerO = 8629276 <= entryL.length;
   do {
      entryL = "1";
      if (annerO) {
         break;
      }
   } while (annerO && (4 > entryL.length));
   let mailj = String.fromCharCode(102,119,108,118,114,109,0) == becomeq;
   do {
      becomeq += `${3 % (Math.max(8, greyd))}`;
      if (mailj) {
         break;
      }
   } while ((codegeng == becomeq) && mailj);
   let chinasameA = libloggerO.length >= 6459897;
   do {
      libloggerO = [libreanimatedT.length];
      if (chinasameA) {
         break;
      }
   } while (chinasameA && (libloggerO.length < libreanimatedT.length));
   let graphicsi = codegeng == String.fromCharCode(106,108,113,0);
   do {
      codegeng = "2";
      if (graphicsi) {
         break;
      }
   } while ((codegeng.length > 1) && graphicsi);

        AnalyticsUtil.onEventWithMap(KISPhoto.KISApps, {});

      entryL = "2";
      codegeng += `${entryL.length}`;
   if (5 > (libloggerO.length * entryL.length)) {
      libloggerO = [libreanimatedT.length / (Math.max(2, 3))];
   }
       let profilel = String.fromCharCode(117,95,57,50,95,113,117,97,110,116,105,122,101,0);
       let libreactnativejnip = String.fromCharCode(97,117,100,105,116,105,110,103,95,107,95,55,57,0);
       let incidentN = 5;
      while (profilel.endsWith(`${incidentN}`)) {
         incidentN %= Math.max(2, 3 & libreactnativejnip.length);
         break;
      }
          let dplusJ: Array<any> = [303, 405, 808];
          let downloaded1 = String.fromCharCode(121,95,56,49,95,120,112,111,114,116,101,100,0);
         libreactnativejnip = `${1 % (Math.max(incidentN, 4))}`;
         dplusJ = [downloaded1.length];
         downloaded1 = `${dplusJ.length % 3}`;
      if (libreactnativejnip.length >= 1) {
          let runtimeschedulerR = 5.0;
          let specd = String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,119,95,56,53,0);
          let latnd = String.fromCharCode(115,95,49,56,95,108,101,97,107,0);
         libreactnativejnip += `${2 ^ incidentN}`;
         runtimeschedulerR -= 1;
         specd = `${specd.length}`;
         latnd += "1";
      }
       let corea: Map<any, any> = new Map([[String.fromCharCode(111,95,53,49,95,105,110,116,114,105,110,0),String.fromCharCode(113,95,55,53,95,109,107,118,112,97,114,115,101,114,0)], [String.fromCharCode(114,95,55,49,95,115,117,98,109,105,116,0),String.fromCharCode(114,99,118,100,95,100,95,54,57,0)]]);
       let windG: Map<any, any> = new Map([[String.fromCharCode(108,95,54,50,95,112,101,97,107,115,0),980], [String.fromCharCode(101,95,49,49,95,116,97,115,107,115,0),848], [String.fromCharCode(114,111,116,111,95,111,95,51,56,0),573]]);
      if ((5 << (Math.min(4, Math.abs(corea.size)))) < 1 && (windG.size << (Math.min(1, Math.abs(corea.size)))) < 5) {
         windG.set(`${incidentN}`, libreactnativejnip.length + incidentN);
      }
      if (profilel.length < 4) {
         libreactnativejnip = `${corea.size}`;
      }
      while (windG.size > corea.size) {
         windG.set(profilel, libreactnativejnip.length << (Math.min(profilel.length, 3)));
         break;
      }
      let expandT = libreactnativejnip == String.fromCharCode(101,114,57,109,103,98,49,53,116,119,0);
      do {
         libreactnativejnip += `${(String.fromCharCode(69,0) == libreactnativejnip ? libreactnativejnip.length : incidentN)}`;
         if (expandT) {
            break;
         }
      } while (expandT && ((2 % (Math.max(5, libreactnativejnip.length))) >= 3));
      if (4 > (2 << (Math.min(2, Math.abs(incidentN)))) || (incidentN << (Math.min(profilel.length, 4))) > 2) {
         profilel = `${profilel.length}`;
      }
      libloggerO = [(String.fromCharCode(84,0) == entryL ? codegeng.length : entryL.length)];
       let applicatione = 0.0;
      if (applicatione <= applicatione) {
         applicatione *= parseFloat(`${parseInt(`${applicatione}`)}`);
      }
      if (applicatione <= 5.53) {
         applicatione += parseFloat(`${2}`);
      }
         applicatione *= parseFloat(`${parseInt(`${applicatione}`)}`);
      flyer1 += `${2 - entryL.length}`;
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISStylesBack,
        });

      codegeng = `${becomeq.length}`;
   for (let u = 0; u < 1; u++) {
      flyer1 += "1";
   }
   while ((3 * libloggerO.length) < 4 || 1 < (codegeng.length * 3)) {
       let filedo = 0.0;
       let s_position0 = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,111,95,54,53,0);
       let windI: Map<any, any> = new Map([[String.fromCharCode(112,114,110,103,95,57,95,50,51,0),251], [String.fromCharCode(101,95,54,51,95,109,105,109,105,99,0),388], [String.fromCharCode(118,95,56,52,0),527]]);
         s_position0 = "2";
          let loginx = 5;
          let lists = String.fromCharCode(109,109,105,117,116,105,108,115,95,118,95,49,53,0);
          let libfollyw = String.fromCharCode(105,110,118,101,114,115,101,95,99,95,50,56,0);
         s_position0 += `${parseInt(`${filedo}`) * windI.size}`;
         loginx -= (lists == String.fromCharCode(72,0) ? libfollyw.length : lists.length);
         libfollyw += `${libfollyw.length % (Math.max(2, 4))}`;
          let emptyH = 1.0;
          let libmapbufferjnio = 3;
          let proxy4 = false;
         filedo += parseInt(`${emptyH}`);
         emptyH *= parseFloat(`${2 / (Math.max(4, libmapbufferjnio))}`);
         libmapbufferjnio >>= Math.min(Math.abs(libmapbufferjnio), 2);
         proxy4 = !proxy4;
       let xvodd = 5;
         filedo += s_position0.length / 2;
         windI = new Map([[`${filedo}`, parseInt(`${filedo}`) ^ xvodd]]);
      if (s_position0.endsWith(`${filedo}`)) {
         s_position0 = `${parseInt(`${filedo}`)}`;
      }
       let matchP = false;
         filedo += parseInt(`${filedo}`);
      codegeng = `${greyd}`;
      break;
   }
      flyer1 += `${(flyer1 == String.fromCharCode(104,0) ? greyd : flyer1.length)}`;
       let libavfilter3 = 4;
       let shirt6 = String.fromCharCode(102,95,52,56,95,101,100,105,116,101,100,0);
       let agreementJ = 4.0;
          let backgroundx = false;
          let libcrashsdku = String.fromCharCode(114,95,49,57,95,112,114,101,108,105,109,105,110,97,114,121,0);
          let v_unlockC = String.fromCharCode(97,95,51,53,95,116,104,97,116,0);
         shirt6 = `${((backgroundx ? 3 : 5) * 3)}`;
         backgroundx = libcrashsdku == v_unlockC;
         libcrashsdku = `${libcrashsdku.length & 3}`;
         v_unlockC = "1";
         agreementJ += 3 + parseInt(`${agreementJ}`);
          let nalyticsn = String.fromCharCode(120,112,111,114,116,101,100,95,103,95,55,0);
         agreementJ += nalyticsn.length;
      while ((shirt6.length ^ 3) <= 2) {
         shirt6 += `${(shirt6 == String.fromCharCode(49,0) ? shirt6.length : parseInt(`${agreementJ}`))}`;
         break;
      }
      for (let r = 0; r < 2; r++) {
          let mapping0 = 3;
         agreementJ -= 3 + shirt6.length;
         mapping0 *= 1;
      }
      for (let r = 0; r < 1; r++) {
          let huaweiG = 2.0;
          let submitV = 5.0;
          let shoote: Array<any> = [456, 584];
         shirt6 = `${shirt6.length + libavfilter3}`;
         huaweiG *= parseInt(`${huaweiG}`) % (Math.max(shoote.length, 6));
         submitV -= parseFloat(`${shoote.length}`);
      }
      if (3 >= (shirt6.length >> (Math.min(Math.abs(2), 1)))) {
          let attributedstringC: Map<any, any> = new Map([[String.fromCharCode(97,108,97,110,103,117,97,103,101,95,116,95,55,48,0),false ], [String.fromCharCode(101,108,98,103,95,51,95,51,49,0),false ], [String.fromCharCode(112,95,53,48,95,117,112,108,111,97,100,0),true ]]);
         shirt6 += `${parseInt(`${agreementJ}`)}`;
         attributedstringC = new Map([[`${attributedstringC.size}`, 1 << (Math.min(2, Math.abs(attributedstringC.size)))]]);
      }
      if (libavfilter3 < agreementJ) {
         libavfilter3 /= Math.max(2 / (Math.max(6, shirt6.length)), 4);
      }
      for (let d = 0; d < 1; d++) {
         libavfilter3 += 3 << (Math.min(3, Math.abs(parseInt(`${agreementJ}`))));
      }
      libreanimatedT = `${1 - greyd}`;

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISApps);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISModity, {
            'keyword': keyword,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISPath,
            params: {
                desc_1: keyword,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISModity);
    }


    
    static catalogViewsAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISCatagoryBorderless, {
            'category_id': category_id,
            'category_name': category_name,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ENLKsad.KISRefreshf,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISCatagoryBorderless);
    }

    static catalogClicksAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISOver, {
            'category_id': category_id,
            'category_name': category_name,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISRefreshf,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISOver);
    }


    
    static playsViewsAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = KISPhoto.KISHiadRedirect;

        if (isXmode) {
            eventId = KISPhoto.KISIcon;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: isXmode ? ENLKsad.KISFrameHeji : ENLKsad.KISAbidetectSound,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = KISPhoto.KISHome;

        if (isXmode) {
            eventId = KISPhoto.KISNetworkLibavcodec;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: isXmode ? ENLKsad.KISKsad : ENLKsad.KISFastforward,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsShareClicksAnalytics = () => {
       let turnF = String.fromCharCode(109,95,51,52,95,112,116,114,109,97,112,115,0);
    let nativemodule3 = String.fromCharCode(97,95,57,51,95,114,103,116,99,0);
    let shirt6 = String.fromCharCode(100,115,112,114,95,120,95,55,56,0);
    let codegen9 = String.fromCharCode(97,95,49,50,95,97,99,116,117,97,108,0);
    let topicI = String.fromCharCode(102,114,101,97,100,95,100,95,49,54,0);
    let textA = String.fromCharCode(100,105,115,116,105,110,99,116,95,105,95,57,0);
    let searchbarl = false;
    let sellx = String.fromCharCode(122,95,50,54,95,108,101,116,115,0);
      turnF += `${(textA == String.fromCharCode(122,0) ? textA.length : (searchbarl ? 2 : 1))}`;
   let reminderE = topicI == String.fromCharCode(109,53,115,109,56,115,118,100,117,122,0);
   do {
      topicI = `${shirt6.length}`;
      if (reminderE) {
         break;
      }
   } while ((shirt6 == String.fromCharCode(115,0)) && reminderE);
      textA += `${turnF.length << (Math.min(Math.abs(1), 3))}`;
   while (topicI.length < textA.length) {
       let librrcj = String.fromCharCode(117,110,112,97,99,107,108,111,95,56,95,51,49,0);
       let side0: Map<any, any> = new Map([[String.fromCharCode(100,105,114,112,95,56,95,50,53,0),false ], [String.fromCharCode(112,114,111,109,105,115,101,115,95,104,95,51,0),false ]]);
         librrcj += `${(librrcj == String.fromCharCode(49,0) ? side0.size : librrcj.length)}`;
      while ((librrcj.length ^ 2) == 2 && (2 ^ side0.size) == 5) {
         side0.set(librrcj, 2);
         break;
      }
          let shared7 = 4.0;
          let auto_9g: Map<any, any> = new Map([[String.fromCharCode(98,95,57,55,95,99,97,108,108,0),39], [String.fromCharCode(114,111,119,95,118,95,55,51,0),480]]);
         side0 = new Map([[`${side0.size}`, librrcj.length + 1]]);
         shared7 *= parseInt(`${shared7}`);
         auto_9g = new Map([[`${auto_9g.size}`, auto_9g.size | parseInt(`${shared7}`)]]);
      for (let x = 0; x < 1; x++) {
         librrcj = `${librrcj.length ^ 3}`;
      }
      while (!librrcj.endsWith(`${side0.size}`)) {
          let largeu = String.fromCharCode(122,95,55,48,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0);
          let favicon_: Map<any, any> = new Map([[String.fromCharCode(100,95,51,48,95,104,101,97,114,116,115,0),String.fromCharCode(120,95,53,54,95,97,116,116,114,115,0)], [String.fromCharCode(114,100,111,112,116,95,51,95,50,48,0),String.fromCharCode(99,111,110,115,117,109,97,98,108,101,95,98,95,52,48,0)], [String.fromCharCode(118,95,55,54,95,112,111,107,101,114,0),String.fromCharCode(98,95,52,49,95,100,101,113,117,97,110,116,105,122,101,114,0)]]);
          let dangerA = 0;
          let tooltipsX: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,118,101,114,121,95,103,95,52,56,0),567], [String.fromCharCode(118,95,55,57,95,108,105,98,99,0),973], [String.fromCharCode(103,95,52,48,95,112,97,103,101,110,117,109,98,101,114,0),646]]);
         librrcj = `${(String.fromCharCode(103,0) == librrcj ? librrcj.length : side0.size)}`;
         largeu = `${2 + tooltipsX.size}`;
         favicon_ = new Map([[largeu, 2 * largeu.length]]);
         dangerA <<= Math.min(Math.abs(favicon_.size), 1);
         tooltipsX.set(`${dangerA}`, (String.fromCharCode(80,0) == largeu ? largeu.length : dangerA));
         break;
      }
      while (3 == side0.size) {
         side0.set(`${librrcj}`, 2);
         break;
      }
      topicI += `${turnF.length}`;
      break;
   }
   while (nativemodule3.endsWith(`${codegen9.length}`)) {
      codegen9 += `${(codegen9 == String.fromCharCode(81,0) ? codegen9.length : topicI.length)}`;
      break;
   }

        AnalyticsUtil.onEventWithMap(KISPhoto.KISDetails, {});

   while (searchbarl || 4 < topicI.length) {
      searchbarl = shirt6.length <= nativemodule3.length;
      break;
   }
      topicI = `${(topicI == String.fromCharCode(109,0) ? textA.length : topicI.length)}`;
   for (let a = 0; a < 3; a++) {
      codegen9 += "2";
   }
      topicI = "3";
      nativemodule3 = `${nativemodule3.length << (Math.min(Math.abs(3), 2))}`;
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ENLKsad.KISStats0,
        });

      searchbarl = !searchbarl;
   while (textA.length <= 1) {
      shirt6 = `${(String.fromCharCode(90,0) == shirt6 ? (searchbarl ? 2 : 5) : shirt6.length)}`;
      break;
   }
       let libavcodecB = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,115,95,120,95,53,50,0);
       let controli = 4.0;
          let final_cC = String.fromCharCode(97,95,54,56,95,118,100,101,98,117,103,0);
         libavcodecB += `${parseInt(`${controli}`) + 3}`;
         final_cC = `${final_cC.length & 2}`;
         libavcodecB += `${3 ^ parseInt(`${controli}`)}`;
         libavcodecB = `${3 - libavcodecB.length}`;
      let photoF = 8060283.0 >= controli;
      do {
          let pointK = 4.0;
         controli /= Math.max(4, parseFloat(`${parseInt(`${controli}`) / 3}`));
         pointK /= Math.max(5, parseInt(`${pointK}`));
         if (photoF) {
            break;
         }
      } while (photoF && ((parseInt(`${controli}`) + libavcodecB.length) >= 5 || 2 >= (5 >> (Math.min(5, libavcodecB.length)))));
         controli *= (parseFloat(`${libavcodecB == String.fromCharCode(56,0) ? libavcodecB.length : parseInt(`${controli}`)}`));
         libavcodecB = "2";
      codegen9 = `${codegen9.length << (Math.min(Math.abs(1), 1))}`;
       let sportM = String.fromCharCode(109,95,53,51,95,111,99,97,116,105,111,110,0);
       let reducer1: Array<any> = [624, 831, 811];
       let nativeexT: Array<any> = [664, 870];
         nativeexT.push(2 - reducer1.length);
         sportM += `${1 - nativeexT.length}`;
      while ((nativeexT.length | 3) == 3 && (sportM.length | nativeexT.length) == 3) {
         sportM = `${nativeexT.length}`;
         break;
      }
         reducer1.push(reducer1.length % (Math.max(1, 5)));
      if ((nativeexT.length + 3) >= 4 || 1 >= (reducer1.length + 3)) {
         reducer1.push(2 >> (Math.min(2, reducer1.length)));
      }
      shirt6 += `${shirt6.length}`;
       let mountingP: Map<any, any> = new Map([[String.fromCharCode(115,98,114,101,115,101,114,118,101,95,117,95,53,54,0),188], [String.fromCharCode(100,95,53,95,115,101,101,0),640], [String.fromCharCode(114,95,49,52,95,118,100,101,98,117,103,0),876]]);
       let leftd = String.fromCharCode(99,114,111,115,115,111,118,101,114,95,109,95,51,56,0);
       let base0 = String.fromCharCode(112,95,49,53,95,111,118,101,114,115,99,114,111,108,108,0);
      for (let x = 0; x < 2; x++) {
         base0 = `${leftd.length}`;
      }
      let gradle0 = leftd.length <= 7091561;
      do {
          let mintegralI = 4;
          let historyv = String.fromCharCode(118,95,50,50,95,104,101,114,109,105,116,101,0);
         leftd = `${(String.fromCharCode(66,0) == leftd ? leftd.length : historyv.length)}`;
         mintegralI >>= Math.min(Math.abs(3), 4);
         historyv += `${mintegralI}`;
         if (gradle0) {
            break;
         }
      } while (gradle0 && (!leftd.includes(`${mountingP.size}`)));
         leftd = `${mountingP.size}`;
         mountingP.set(leftd, mountingP.size | leftd.length);
          let shrinkd = String.fromCharCode(97,95,49,50,95,115,117,112,101,114,115,99,114,105,112,116,0);
         base0 = "3";
         shrinkd += `${(shrinkd == String.fromCharCode(85,0) ? shrinkd.length : shrinkd.length)}`;
         leftd = `${base0.length}`;
      if ((mountingP.size + 1) < 4) {
          let statsM = String.fromCharCode(98,115,102,115,95,117,95,56,57,0);
          let graphics4: Array<any> = [23, 400, 459];
          let taiwanh = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,113,95,54,57,0);
         leftd += "1";
         statsM += `${graphics4.length % (Math.max(2, 7))}`;
         graphics4.push(graphics4.length + 3);
         taiwanh = "3";
      }
      let cnewarchdefaultsD = leftd == String.fromCharCode(103,115,102,56,112,118,98,110,98,103,0);
      do {
         leftd += `${leftd.length & 3}`;
         if (cnewarchdefaultsD) {
            break;
         }
      } while (cnewarchdefaultsD && ((mountingP.size | 2) <= 1 || (mountingP.size | 2) <= 2));
      while (leftd.length <= 4) {
         leftd += `${(base0 == String.fromCharCode(68,0) ? leftd.length : base0.length)}`;
         break;
      }
      textA += `${mountingP.size & base0.length}`;

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISDetails);
    }

    static playsAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title = KISPhoto.KISAgreement,
        ads_name,
    }: {
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISAgreement, {});
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISAgreement);
    }

    static playsAdsClickAnalytics = ({
        url,
        ads_slot_id,
        ads_id,
        ads_title = KISPhoto.KISCornerMuted,
        ads_name,
    }: {
        url?: string
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    } = {}) => {
        let params = {}

        if (url === undefined || url === '') {
            params = {
                'url': 'none',
            }
        } else {
            params = {
                'url': url,
            }
        }

        AnalyticsUtil.onEventWithMap(KISPhoto.KISCornerMuted, params);
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: url ?? 'none',
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISCornerMuted);
    }


    
    static videoPlayerBannerViewAnalytics = ({
        playerType,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        playerType: 'normal' | 'xVideo' | 'sport',
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISCastBuild, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISCastBuild);
    }

    static videoPlayerBannerClickAnalytics = ({
        playerType,
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        playerType: 'normal' | 'xVideo' | 'sport',
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISConfirmationSchedule, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISConfirmationSchedule);
    }


    
    static profileBannerViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISThumbnailLogin, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yys_ChatNeon.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISThumbnailLogin);
    }

    static profileBannerClickAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title,
        ads_name,
    }: {
        ads_slot_id: number,
        ads_id: number,
        ads_title: string,
        ads_name: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KISPhoto.KISLibreactnativejni, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yys_ChatNeon.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', KISPhoto.KISLibreactnativejni);
    }
}
