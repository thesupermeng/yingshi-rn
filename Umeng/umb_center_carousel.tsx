import AnalyticsUtil from './r_chart';
import { NCatalog } from './ddx_zhubo_more';

 
enum YUpgrade {
    
    YSplashAlert = 'Home-views',
    YTwitterMiddleware = 'Home-clicks',
    YSmall = 'Home-Carousel_views',
    YIncidentTail = 'Home-Carousel_clicks',
    YAutoEdit = 'Home-banner_views',
    YStatisticsShare = 'Home-banner_clicks',

    
    YHelperReport = 'WatchAnytime-Views',
    YAlert = 'WatchAnytime-video_view_times',
    YYellowStats = 'WatchAnytime-X_views',
    YInjury = 'WatchAnytime-X_video_view_times',
    YProjectTurn = 'WatchAnytime-playlist_clicks',
    YNetworkUntick = 'WatchAnytime-video_clicks',
    YResult = 'WatchAnytime-ads_views',
    YDownEdit = 'WatchAnytime-ads_clicks',

    
    YGrey = 'Sport-views',
    YPolicy = 'Sport-clicks',
    YIndicator = 'Sport-banner_views',
    YLockRedirect = 'Sport-banner_clicks',

    
    YMutedTitle = 'SportDetails-views',
    YSigninupTrash = 'SportDetails-plays_times',
    YMegaphone = 'SportDetails-vip_popup_times',
    YStatistics = 'SportDetails-vip_clicks',

    
    YPressure = 'Playlist-views',
    YPlusPhone = 'Playlist-clicks',
    YFloating = 'Playlist-topics_views',
    YBottomShow = 'Playlist-topics_clicks',

    
    YRefresh = 'UserCenter-login_success_times',
    YCopy = 'UserCenter-vip_login_success_times',
    YCanvasPopup = 'UserCenter-pay_vip_views',
    YHalf = 'UserCenter-invites_vip_views',

    
    YMutedBlack = 'Search-result_views',
    YConfirmationRules = 'Search-result_clicks',
    YModity = 'Search-keywords',

    
    YRoom = 'Catalog-views',
    YService = 'Catalog-clicks',

    
    YTeamDesc = 'Play-views',
    YDrag = 'Play-plays_times',
    YRefreshProgress = 'Play-X_views',
    YFullCondensed = 'Play-X_plays_times',
    YPaginationGreen = 'Play-share_clicks',

    
    YSettings = 'Play-ads_views',
    YTwitter = 'Play-ads_clicks',

    
    YSave = 'VideoPlayer-banner_views',
    YViewsSmall = 'VideoPlayer-banner_clicks',

    
    YReadJ = 'Profile-banner_views',
    YNews = 'Profile-banner_clicks',
}

enum SSellLayout {
    
    YUpdatesRefresh = 'home_tab',

    
    YSheet = 'watchAnytime',
    YBack = 'watchAnytime_play_times',
    YAgreement = 'watchAnytime_view_video',
    YViewsMegaphone = 'watchAnytime_view_playlist',

    YMathRead = 'watchAnytime_x',
    YAnimationMapping = 'watchAnytime_x_play_times',

    
    YBellCanvas = 'sport',
    YPressureIndex = 'sportDetail',
    YGoogle = 'sportDetail_play_times',
    YTypes = 'sportDetail_vip_popup',

    
    YFastforwardTicked = 'playlist',
    YMember = 'playlist_topics',

    
    YHook = 'userCenter_login_success_times',
    YDark = 'userCenter_vip_login_success_times',
    YStore = 'userCenter_view_vip',

    
    YSelected = 'search_keywords',
    YInactiveGreen = 'search_result',

    
    YInfo = 'catalog',

    
    YFiledPause = 'play',
    YDisconnected = 'play_plays_times',
    YAnalyticSingapore = 'Play_share',

    YPlayer = 'play_x',
    YDownloadingBootsplash = 'play_x_plays_times',
}

export default class umb_center_carousel {
    static showLog: boolean = false;

    
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YSplashAlert, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YUpdatesRefresh,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YSplashAlert);
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YTwitterMiddleware, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YUpdatesRefresh,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YTwitterMiddleware);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YSmall, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        NCatalog.onEvent({
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

        if (this.showLog) console.log('trigger event id:', YUpgrade.YSmall);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YIncidentTail, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        NCatalog.onEvent({
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

        if (this.showLog) console.log('trigger event id:', YUpgrade.YIncidentTail);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YAutoEdit, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        NCatalog.onEvent({
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

        if (this.showLog) console.log('trigger event id:', YUpgrade.YAutoEdit);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YStatisticsShare, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        NCatalog.onEvent({
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

        if (this.showLog) console.log('trigger event id:', YUpgrade.YStatisticsShare);
    }

    
    static watchAnytimeViewsAnalytics = ({ isXmode = false }: { isXmode?: boolean } = { isXmode: false }) => {
        let evendId: string = YUpgrade.YHelperReport;

        if (isXmode) {
            evendId = YUpgrade.YYellowStats;
        }

        AnalyticsUtil.onEventWithMap(evendId, {});
        NCatalog.onEvent({
            type: 'view',
            title: isXmode ? SSellLayout.YMathRead : SSellLayout.YSheet,
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: string = YUpgrade.YAlert;

        if (isXmode) {
            evendId = YUpgrade.YInjury;
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
        NCatalog.onEvent({
            type: 'view',
            title: isXmode ? SSellLayout.YAnimationMapping : SSellLayout.YBack,
            params: {
                desc_1: 'user.id:' + userId,
                
            }
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoClicksAnalytics = () => {
       let malaysiaD = 0.0;
    let backwardo = true;
    let countdowno = String.fromCharCode(120,95,52,53,95,118,105,115,105,116,0);
    let indexz = 0.0;
    let championM = String.fromCharCode(97,115,116,101,114,105,115,107,0);
    let promotionk = String.fromCharCode(97,117,116,104,111,114,115,95,111,95,50,57,0);
    let componentB = 5;
    let streamingD: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,113,95,56,48,0),false ], [String.fromCharCode(104,95,49,54,95,102,114,101,113,0),true ]]);
   for (let o = 0; o < 2; o++) {
       let flyer1 = String.fromCharCode(97,97,99,100,101,99,116,97,98,0);
       let membershipp = true;
       let expiredE = String.fromCharCode(116,114,97,105,108,0);
       let twitterd = String.fromCharCode(111,102,102,101,114,115,0);
         membershipp = (96 > (expiredE.length & (membershipp ? expiredE.length : 96)));
          let recommendationM = String.fromCharCode(114,101,103,105,115,116,114,97,110,116,0);
         membershipp = flyer1.length == 71;
         recommendationM += `${recommendationM.length + recommendationM.length}`;
          let type_ts4: Array<any> = [String.fromCharCode(102,99,110,116,108,0), String.fromCharCode(100,116,111,114,0), String.fromCharCode(104,111,109,101,0)];
          let nalyticsG = String.fromCharCode(119,95,53,52,95,115,97,105,122,0);
          let const__rU = true;
         membershipp = nalyticsG.length <= 18 || type_ts4.length <= 18;
         type_ts4.push(((const__rU ? 1 : 5)));
         nalyticsG += `${(2 - (const__rU ? 5 : 1))}`;
         twitterd += `${(String.fromCharCode(116,0) == flyer1 ? twitterd.length : flyer1.length)}`;
         twitterd += `${flyer1.length}`;
      if (!membershipp || expiredE.length <= 4) {
         membershipp = twitterd.length <= 60;
      }
         expiredE += `${(1 % (Math.max(8, (membershipp ? 4 : 1))))}`;
      let u_locku = 6372538 <= twitterd.length;
      do {
          let philippinesQ: Array<any> = [810, 554, 118];
          let minivodP = 0;
          let networkL: Array<any> = [450, 260];
          let schedule4 = true;
         twitterd = `${flyer1.length}`;
         philippinesQ = [networkL.length ^ 3];
         minivodP *= minivodP;
         networkL = [minivodP];
         schedule4 = philippinesQ.length > 85 && !schedule4;
         if (u_locku) {
            break;
         }
      } while (u_locku && (expiredE == String.fromCharCode(110,0)));
      if (expiredE.length < 4) {
         expiredE += `${((membershipp ? 4 : 2) / (Math.max(3, 4)))}`;
      }
      let privacyL = membershipp ? !membershipp : membershipp;
      do {
         membershipp = !membershipp;
         if (privacyL) {
            break;
         }
      } while ((membershipp) && privacyL);
         expiredE += "1";
          let heart5: Map<any, any> = new Map([[String.fromCharCode(120,95,54,53,95,99,111,100,101,102,0),960], [String.fromCharCode(113,95,55,54,95,107,118,111,0),424], [String.fromCharCode(112,108,111,116,116,101,114,0),933]]);
          let adultT: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,95,99,111,110,110,105,110,112,117,116,0),851], [String.fromCharCode(117,115,114,115,99,116,112,0),552]]);
         membershipp = heart5.get(`${membershipp}`) == null;
         heart5.set(`${adultT.size}`, adultT.size << (Math.min(Math.abs(1), 2)));
      countdowno = `${(flyer1.length << (Math.min(2, Math.abs((membershipp ? 3 : 3)))))}`;
   }
      countdowno += `${(String.fromCharCode(103,0) == championM ? championM.length : parseInt(`${indexz}`))}`;
       let projectq = 0.0;
       let main_u8: Array<any> = [743, 53];
       let constantsR = 2;
          let greyG = String.fromCharCode(104,109,97,99,108,105,115,116,0);
          let telegram_ = String.fromCharCode(117,95,56,51,95,97,117,116,111,112,108,97,121,105,110,103,0);
          let promotionq: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,114,115,0),String.fromCharCode(108,105,118,101,0)], [String.fromCharCode(115,105,108,101,110,116,0),String.fromCharCode(116,101,115,116,115,0)], [String.fromCharCode(101,95,50,49,95,108,97,110,103,105,100,0),String.fromCharCode(122,95,49,52,95,115,101,113,117,101,110,99,101,0)]]);
         main_u8 = [1 / (Math.max(constantsR, 4))];
         greyG = `${promotionq.size}`;
         telegram_ += `${promotionq.size - greyG.length}`;
      for (let e = 0; e < 1; e++) {
         constantsR %= Math.max(1, 2);
      }
          let sansr: Map<any, any> = new Map([[String.fromCharCode(97,103,97,116,101,0),479], [String.fromCharCode(103,95,55,95,116,101,115,116,110,101,116,0),665], [String.fromCharCode(115,101,103,105,116,101,114,0),930]]);
          let logof = true;
         main_u8.push(2 ^ parseInt(`${projectq}`));
         sansr.set(`${logof}`, sansr.size);
         main_u8.push(2);
      while ((constantsR + projectq) >= 2.75 && 2 >= (parseInt(`${projectq}`) + constantsR)) {
          let statsI = 3;
          let darks: Array<any> = [711, 375, 945];
         projectq /= Math.max(constantsR + 3, 2);
         statsI |= darks.length << (Math.min(4, Math.abs(statsI)));
         darks = [statsI];
         break;
      }
         main_u8 = [main_u8.length | 1];
         main_u8 = [main_u8.length];
         projectq *= constantsR | 2;
          let homeE = String.fromCharCode(115,105,100,120,0);
          let rightu = String.fromCharCode(109,95,52,54,95,116,105,110,116,101,114,108,97,99,101,0);
          let storev = 0;
         projectq -= storev;
         homeE += `${(homeE == String.fromCharCode(100,0) ? homeE.length : rightu.length)}`;
         rightu = "1";
         storev += rightu.length | 3;
      componentB *= 1;
      promotionk = `${parseInt(`${indexz}`)}`;
   for (let f = 0; f < 2; f++) {
      streamingD.set(countdowno, (String.fromCharCode(68,0) == countdowno ? countdowno.length : streamingD.size));
   }

        AnalyticsUtil.onEventWithMap(YUpgrade.YNetworkUntick, {});

   for (let m = 0; m < 2; m++) {
      streamingD.set(promotionk, promotionk.length * 2);
   }
   if (4.41 == (malaysiaD - componentB)) {
      malaysiaD += (parseFloat(`${1 << (Math.min(3, Math.abs((backwardo ? 2 : 2))))}`));
   }
      componentB ^= promotionk.length;
      backwardo = indexz == 45.90;
      componentB &= 2;
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YAgreement,
        });

      countdowno += `${(streamingD.size & (backwardo ? 2 : 1))}`;
      indexz /= Math.max(parseInt(`${indexz}`) - componentB, 3);
      indexz += (championM == String.fromCharCode(84,0) ? componentB : championM.length);
      backwardo = indexz > 70.88;
   if (4 == championM.length) {
       let selectionb: Array<any> = [String.fromCharCode(100,105,115,97,112,112,101,97,114,101,100,95,97,95,52,55,0), String.fromCharCode(102,95,53,54,95,109,97,120,98,117,114,115,116,0), String.fromCharCode(115,117,99,99,101,115,115,102,117,108,108,121,0)];
       let hover0 = String.fromCharCode(114,101,115,112,0);
         hover0 += `${3 << (Math.min(4, selectionb.length))}`;
      for (let c = 0; c < 2; c++) {
         selectionb = [hover0.length >> (Math.min(Math.abs(1), 3))];
      }
      let searchbar_ = hover0 == String.fromCharCode(57,119,108,109,116,121,0);
      do {
          let pagej = 1.0;
         hover0 += `${selectionb.length}`;
         pagej += parseFloat(`${parseInt(`${pagej}`)}`);
         if (searchbar_) {
            break;
         }
      } while (searchbar_ && (selectionb.length < 4));
      while (4 >= (hover0.length + 2) && (hover0.length + selectionb.length) >= 2) {
         hover0 += `${hover0.length << (Math.min(Math.abs(2), 2))}`;
         break;
      }
          let verticalO = true;
          let selectB = String.fromCharCode(97,121,98,114,95,118,95,56,53,0);
         hover0 = `${selectionb.length}`;
         verticalO = selectB == selectB;
      if (!hover0.startsWith(`${selectionb.length}`)) {
          let result_: Array<any> = [913, 484, 10];
          let renewK = String.fromCharCode(115,99,99,111,110,102,105,103,0);
          let policyE: Array<any> = [360, 921];
         selectionb.push(3);
         result_ = [2 * result_.length];
         renewK += "2";
         policyE.push((renewK == String.fromCharCode(114,0) ? policyE.length : renewK.length));
      }
      championM += "1";
   }

        if (this.showLog) console.log('trigger event id:', YUpgrade.YNetworkUntick);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
       let crossq = 2;
    let modityQ = 3.0;
    let disconnectedi = true;
    let pingn = 0;
    let chat0: Array<any> = [755, 649, 780];
    let connection6 = false;
    let singapore6 = false;
    let bodan9 = String.fromCharCode(109,101,109,115,104,105,112,0);
    let bingy = 5;
    let target3 = String.fromCharCode(102,95,53,95,114,105,103,104,116,109,111,115,116,0);
    let playlistq = String.fromCharCode(117,110,105,109,112,108,101,109,101,110,116,101,100,0);
    let anytimeF: Map<any, any> = new Map([[String.fromCharCode(118,116,101,110,99,0),762], [String.fromCharCode(115,121,110,99,97,98,108,101,95,111,95,54,56,0),306], [String.fromCharCode(119,95,56,49,95,108,105,98,115,115,104,0),177]]);
   while (connection6) {
       let chatV = String.fromCharCode(98,114,97,110,100,115,0);
       let bufferl = 4.0;
       let indext = 5.0;
       let transferg = 2.0;
       let constantsE = 3.0;
      while (transferg >= bufferl) {
         transferg -= parseInt(`${transferg}`) - parseInt(`${constantsE}`);
         break;
      }
         chatV = "1";
          let signinupu = 2.0;
          let analyticsO: Array<any> = [588, 77, 391];
         indext -= parseFloat(`${parseInt(`${signinupu}`)}`);
         analyticsO = [1];
      while (1.39 <= (transferg + indext)) {
         indext -= parseFloat(`${chatV.length}`);
         break;
      }
       let confirmation1 = String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,95,115,95,51,57,0);
         indext /= Math.max(2, parseFloat(`${chatV.length % (Math.max(9, parseInt(`${indext}`)))}`));
          let progresse = 5.0;
         confirmation1 = "1";
         progresse += 1 + parseInt(`${progresse}`);
      let guide6 = transferg >= 5075078.0;
      do {
          let modalp: Map<any, any> = new Map([[String.fromCharCode(100,116,115,104,100,95,106,95,48,0),292], [String.fromCharCode(105,110,116,101,114,101,115,116,95,51,95,57,52,0),145], [String.fromCharCode(114,101,108,97,121,115,0),555]]);
          let placeholdery = true;
          let animation8: Map<any, any> = new Map([[String.fromCharCode(109,117,116,97,98,108,101,0),91], [String.fromCharCode(98,101,103,105,110,115,0),201], [String.fromCharCode(112,108,97,116,102,111,114,109,115,95,100,95,55,52,0),592]]);
          let componentN = String.fromCharCode(102,97,97,110,100,99,116,0);
          let minivodC: Array<any> = [812, 461, 703];
         transferg -= parseInt(`${bufferl}`);
         modalp.set(`${minivodC.length}`, 1 ^ modalp.size);
         placeholdery = minivodC.length >= 7;
         animation8.set(`${minivodC.length}`, modalp.size);
         componentN = `${((placeholdery ? 1 : 4) % (Math.max(3, 4)))}`;
         if (guide6) {
            break;
         }
      } while ((5 < (parseInt(`${transferg}`) - confirmation1.length) && 4 < (confirmation1.length | 5)) && guide6);
         constantsE /= Math.max(3, parseInt(`${indext}`) - parseInt(`${bufferl}`));
          let with_eh = 4.0;
          let less2 = String.fromCharCode(116,111,109,111,114,114,111,119,95,104,95,49,0);
          let layoutU = false;
         bufferl *= (parseFloat(`${chatV == String.fromCharCode(117,0) ? parseInt(`${transferg}`) : chatV.length}`));
         with_eh /= Math.max(parseFloat(`${2}`), 3);
         less2 = `${parseInt(`${with_eh}`) | 3}`;
         layoutU = !layoutU || less2.length < 17;
      for (let p = 0; p < 2; p++) {
         bufferl /= Math.max(4, parseFloat(`${parseInt(`${transferg}`) ^ chatV.length}`));
      }
         chatV += `${parseInt(`${indext}`)}`;
      for (let a = 0; a < 3; a++) {
          let step9: Array<any> = [528, 715, 707];
          let humidityp = String.fromCharCode(108,122,109,97,0);
         transferg += step9.length + 3;
         step9.push((String.fromCharCode(89,0) == humidityp ? humidityp.length : humidityp.length));
      }
      while ((parseInt(`${transferg}`) * chatV.length) == 4) {
         chatV += `${parseInt(`${constantsE}`) + 2}`;
         break;
      }
         chatV += `${parseInt(`${bufferl}`) * 2}`;
      pingn %= Math.max(1, chatV.length >> (Math.min(1, Math.abs(pingn))));
      break;
   }
      bingy -= (chat0.length + (disconnectedi ? 2 : 4));
      chat0.push(2);
   let tempR = singapore6 ? !singapore6 : singapore6;
   do {
      singapore6 = anytimeF.size > playlistq.length;
      if (tempR) {
         break;
      }
   } while (tempR && (singapore6));
      modityQ /= Math.max(3, parseFloat(`${1 ^ crossq}`));
   if (disconnectedi) {
      singapore6 = 28 < bingy || 28 < chat0.length;
   }
      chat0 = [((singapore6 ? 1 : 2) | crossq)];
   if (singapore6 && 3 > bodan9.length) {
      singapore6 = anytimeF.size >= 98;
   }

        AnalyticsUtil.onEventWithMap(YUpgrade.YProjectTurn, {});

      modityQ -= parseFloat(`${crossq >> (Math.min(1, Math.abs(1)))}`);
   while (!disconnectedi) {
       let chinaX = false;
         chinaX = !chinaX;
          let carouselA = 3;
         chinaX = !chinaX;
         carouselA /= Math.max(1, 3);
         chinaX = !chinaX;
      disconnectedi = bingy == 56 || target3.length == 56;
      break;
   }
      singapore6 = !disconnectedi;
   let mail8 = bingy >= 5913582;
   do {
       let delegate__oM = 2;
       let danger4 = 3.0;
       let statsV = 2;
       let splashU = String.fromCharCode(117,110,115,111,108,118,101,100,0);
      for (let a = 0; a < 3; a++) {
          let anythinkt = 2;
          let component7 = String.fromCharCode(108,95,49,50,95,110,101,116,101,114,114,110,111,0);
          let projectf = String.fromCharCode(119,95,57,56,95,99,108,105,112,0);
          let zhengpianX = String.fromCharCode(106,95,51,53,95,102,97,100,115,116,0);
         statsV -= 2;
         anythinkt <<= Math.min(2, Math.abs((projectf == String.fromCharCode(72,0) ? projectf.length : zhengpianX.length)));
         component7 += `${anythinkt}`;
         zhengpianX = `${zhengpianX.length}`;
      }
      if (!splashU.includes(`${danger4}`)) {
          let previewf = 4.0;
          let list7 = String.fromCharCode(101,114,97,0);
          let t_positionS: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,105,122,101,95,53,95,52,53,0),false ], [String.fromCharCode(119,95,54,50,95,104,101,97,100,101,114,115,0),false ]]);
          let macauP = true;
         splashU = `${list7.length}`;
         previewf *= 3 >> (Math.min(1, Math.abs(t_positionS.size)));
         list7 += `${parseInt(`${previewf}`)}`;
         t_positionS = new Map([[`${t_positionS.size}`, 3]]);
         macauP = 38.54 > previewf;
      }
      if (3.67 >= danger4) {
          let rewindC: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,108,105,98,95,48,95,51,52,0),236], [String.fromCharCode(107,95,49,54,95,116,99,109,105,0),567]]);
          let paginationb = false;
          let videoV: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,118,0),496], [String.fromCharCode(97,100,118,97,110,99,101,109,101,110,116,0),443]]);
          let predictionO = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,0);
          let gemfilew = 5.0;
         danger4 -= parseFloat(`${parseInt(`${gemfilew}`) | rewindC.size}`);
         rewindC.set(`${paginationb}`, videoV.size);
         videoV.set(predictionO, predictionO.length * videoV.size);
         gemfilew /= Math.max(videoV.size & predictionO.length, 2);
      }
      let heji9 = 8973468 >= delegate__oM;
      do {
         delegate__oM >>= Math.min(2, Math.abs(parseInt(`${danger4}`)));
         if (heji9) {
            break;
         }
      } while (((3 + delegate__oM) >= 4) && heji9);
         delegate__oM -= 1;
      for (let b = 0; b < 3; b++) {
         danger4 *= parseFloat(`${parseInt(`${danger4}`) + splashU.length}`);
      }
          let expandJ = 4.0;
          let submitQ = 2.0;
          let combinedP = String.fromCharCode(99,111,109,98,105,110,101,115,95,101,95,50,0);
         splashU += `${2 >> (Math.min(4, combinedP.length))}`;
         expandJ -= parseInt(`${expandJ}`) % (Math.max(parseInt(`${submitQ}`), 8));
         submitQ -= parseFloat(`${parseInt(`${expandJ}`)}`);
         combinedP += "1";
         danger4 += parseFloat(`${delegate__oM + parseInt(`${danger4}`)}`);
      for (let r = 0; r < 2; r++) {
         statsV ^= parseInt(`${danger4}`) | 1;
      }
       let actionsv = String.fromCharCode(97,114,114,0);
      let placement3 = 8782403 >= actionsv.length;
      do {
          let mathC = 0.0;
          let common_ = 1;
         actionsv = `${actionsv.length}`;
         mathC *= parseFloat(`${common_}`);
         common_ += parseInt(`${mathC}`);
         if (placement3) {
            break;
         }
      } while (placement3 && (delegate__oM == 5));
      if (5 == (delegate__oM ^ 2)) {
          let blackS = 4.0;
          let specy = false;
          let previeww = 5.0;
         statsV <<= Math.min(Math.abs(actionsv.length * 2), 5);
         blackS /= Math.max(parseInt(`${previeww}`) * 1, 5);
         specy = 13.62 > previeww;
      }
      bingy &= (String.fromCharCode(118,0) == bodan9 ? bodan9.length : (disconnectedi ? 2 : 5));
      if (mail8) {
         break;
      }
   } while ((!connection6) && mail8);
   let collection7 = 7152497 >= pingn;
   do {
      pingn %= Math.max(2, ((singapore6 ? 5 : 1)));
      if (collection7) {
         break;
      }
   } while (((chat0.length >> (Math.min(Math.abs(2), 4))) <= 2 || (pingn >> (Math.min(chat0.length, 1))) <= 2) && collection7);
      crossq /= Math.max(pingn, 1);
       let nextW: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,101,114,0),true ], [String.fromCharCode(109,101,116,101,114,0),false ], [String.fromCharCode(115,112,101,101,100,0),false ]]);
       let brightnessR = String.fromCharCode(102,105,120,117,112,0);
       let loadingF = String.fromCharCode(108,95,57,57,95,101,110,116,105,116,121,0);
       let animationL = String.fromCharCode(114,116,115,112,99,111,100,101,115,0);
       let checkboxi = String.fromCharCode(118,99,100,115,112,0);
         loadingF += "2";
       let paginationK = true;
      if ((checkboxi.length >> (Math.min(1, Math.abs(nextW.size)))) <= 1 && 3 <= (1 >> (Math.min(4, checkboxi.length)))) {
          let bingu = String.fromCharCode(102,108,97,116,95,120,95,53,55,0);
         nextW = new Map([[bingu, bingu.length]]);
      }
      if (paginationK || checkboxi.length >= 1) {
         checkboxi = `${loadingF.length}`;
      }
          let animationZ = String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,0);
         paginationK = 65 > brightnessR.length && loadingF == String.fromCharCode(89,0);
         animationZ += "2";
      if (loadingF.includes(`${paginationK}`)) {
         loadingF = `${checkboxi.length * 2}`;
      }
          let screeni = String.fromCharCode(109,97,112,102,105,108,101,0);
         animationL += `${loadingF.length ^ 3}`;
         screeni += "2";
         paginationK = animationL == loadingF;
      singapore6 = brightnessR.endsWith(`${bingy}`);
      chat0 = [bodan9.length];
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YViewsMegaphone,
        });

      playlistq = `${pingn}`;
       let skipr = String.fromCharCode(109,105,120,105,110,103,95,115,95,56,53,0);
       let guideG = String.fromCharCode(112,116,105,111,110,115,0);
       let constantsV = 0;
         guideG = `${skipr.length / (Math.max(1, guideG.length))}`;
      if (!guideG.includes(`${skipr.length}`)) {
         skipr = `${guideG.length}`;
      }
          let savea: Map<any, any> = new Map([[String.fromCharCode(112,97,105,110,116,105,110,103,95,100,95,49,0),463], [String.fromCharCode(104,95,55,48,95,103,114,97,98,98,101,114,0),190], [String.fromCharCode(119,114,105,116,101,105,110,105,116,0),135]]);
          let filled3 = 1.0;
          let customh = false;
         constantsV <<= Math.min(2, skipr.length);
         savea.set(`${filled3}`, parseInt(`${filled3}`) % (Math.max(savea.size, 3)));
         customh = parseInt(`${filled3}`) < savea.size;
          let minimizem = String.fromCharCode(122,101,114,111,101,100,0);
          let annerO = true;
          let profileD = String.fromCharCode(115,116,97,107,101,0);
         constantsV ^= profileD.length;
         minimizem += `${((annerO ? 2 : 3) * minimizem.length)}`;
         annerO = (92 < (minimizem.length << (Math.min(1, Math.abs((!annerO ? 92 : minimizem.length))))));
         profileD += "3";
      while (skipr.length >= 4) {
         skipr += `${guideG.length * skipr.length}`;
         break;
      }
      let trashW = 9283438 <= constantsV;
      do {
         constantsV += guideG.length;
         if (trashW) {
            break;
         }
      } while ((2 <= (skipr.length >> (Math.min(Math.abs(5), 1))) && 2 <= (skipr.length >> (Math.min(Math.abs(5), 5)))) && trashW);
      for (let o = 0; o < 2; o++) {
          let sportL: Array<any> = [176, 955];
         constantsV -= constantsV;
         sportL = [sportL.length];
      }
      let benefitc = guideG == String.fromCharCode(112,105,109,50,0);
      do {
          let confirmationY = false;
          let minivodq = 4.0;
          let sinao: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,102,97,99,101,0),815], [String.fromCharCode(107,105,110,103,0),194]]);
          let clockU = true;
          let plashD = String.fromCharCode(105,110,118,97,108,105,100,0);
         guideG += `${((confirmationY ? 1 : 1) + plashD.length)}`;
         confirmationY = !clockU;
         minivodq += (parseFloat(`${(clockU ? 1 : 3) % (Math.max(parseInt(`${minivodq}`), 1))}`));
         sinao.set(`${clockU}`, 2);
         plashD = `${1 ^ parseInt(`${minivodq}`)}`;
         if (benefitc) {
            break;
         }
      } while ((!guideG.startsWith(`${skipr.length}`)) && benefitc);
      if (!skipr.endsWith(guideG)) {
          let editS = String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,114,95,50,54,0);
         guideG = `${2 >> (Math.min(2, Math.abs(constantsV)))}`;
         editS = `${3 | editS.length}`;
      }
      bodan9 = `${crossq}`;
       let hooka = 1.0;
       let statsr = true;
      while (!statsr && (4.42 * hooka) <= 3.17) {
         hooka *= parseFloat(`${1 | parseInt(`${hooka}`)}`);
         break;
      }
          let policyi: Array<any> = [String.fromCharCode(99,95,55,54,95,100,101,116,101,99,116,105,110,103,0), String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,95,52,95,51,57,0)];
         hooka += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${hooka}`)), 5))}`);
         policyi.push(policyi.length << (Math.min(Math.abs(3), 1)));
      while (2.16 <= hooka && 1.45 <= (2.16 - hooka)) {
         statsr = !statsr;
         break;
      }
      for (let h = 0; h < 3; h++) {
         statsr = 71.40 <= hooka;
      }
          let invitee = 0.0;
         statsr = statsr || 40.67 < invitee;
      let checkboxt = statsr ? !statsr : statsr;
      do {
         statsr = !statsr && 54.43 < hooka;
         if (checkboxt) {
            break;
         }
      } while (checkboxt && (statsr));
      bingy ^= (1 * (disconnectedi ? 4 : 4));
   for (let c = 0; c < 3; c++) {
       let privacy2: Array<any> = [361, 631];
       let goalk = String.fromCharCode(100,101,97,99,116,0);
      let episodeL = 6905100 <= privacy2.length;
      do {
          let policy3 = 3;
          let confirmationB = String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,0);
          let rightL = String.fromCharCode(97,117,120,100,97,116,97,0);
          let handlerr = String.fromCharCode(105,114,99,97,109,0);
         privacy2 = [handlerr.length & 1];
         policy3 &= rightL.length;
         confirmationB = "3";
         rightL += `${policy3}`;
         handlerr = `${policy3 << (Math.min(Math.abs(2), 1))}`;
         if (episodeL) {
            break;
         }
      } while ((5 < (goalk.length << (Math.min(Math.abs(1), 3))) && (privacy2.length << (Math.min(goalk.length, 4))) < 1) && episodeL);
      let subsF = 5380213 >= privacy2.length;
      do {
         privacy2 = [3];
         if (subsF) {
            break;
         }
      } while ((goalk.length <= 5) && subsF);
         privacy2.push(privacy2.length);
         goalk += `${privacy2.length}`;
      if (1 == (1 - privacy2.length) || (privacy2.length - goalk.length) == 1) {
          let schedule2 = String.fromCharCode(122,95,50,54,95,114,101,99,111,110,105,110,116,101,114,0);
          let condensed_: Map<any, any> = new Map([[String.fromCharCode(119,109,97,100,97,116,97,0),false ], [String.fromCharCode(99,95,56,51,95,108,97,112,110,100,122,0),false ], [String.fromCharCode(99,111,108,111,99,97,116,101,100,0),true ]]);
          let heartD = true;
          let floaterf = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,0);
          let googlel: Map<any, any> = new Map([[String.fromCharCode(100,101,116,97,105,108,115,95,53,95,54,54,0),791], [String.fromCharCode(110,111,116,105,99,101,0),645]]);
         goalk = `${floaterf.length % (Math.max(goalk.length, 7))}`;
         schedule2 = `${condensed_.size >> (Math.min(Math.abs(1), 5))}`;
         condensed_ = new Map([[`${condensed_.size}`, 1]]);
         heartD = (condensed_.size + googlel.size) <= 83;
         floaterf = `${condensed_.size}`;
         googlel.set(`${heartD}`, schedule2.length);
      }
       let delegate_zZ = true;
       let updatese = false;
      singapore6 = 21.88 < modityQ;
   }
   let textv = connection6 ? !connection6 : connection6;
   do {
       let with_quj = String.fromCharCode(114,95,51,49,95,118,108,102,102,0);
       let znewsm = 2.0;
         znewsm /= Math.max(1, (parseFloat(`${with_quj == String.fromCharCode(108,0) ? with_quj.length : parseInt(`${znewsm}`)}`)));
         with_quj = `${with_quj.length / (Math.max(1, parseInt(`${znewsm}`)))}`;
         with_quj = `${parseInt(`${znewsm}`)}`;
       let downloadingY = String.fromCharCode(122,105,112,0);
       let middlewareC = String.fromCharCode(99,104,112,108,0);
         middlewareC += `${middlewareC.length - 3}`;
         downloadingY = `${middlewareC.length * 3}`;
      connection6 = crossq == bingy;
      if (textv) {
         break;
      }
   } while ((target3.length == 4) && textv);
      pingn *= 3 << (Math.min(4, Math.abs(pingn)));
   if ((crossq - bodan9.length) < 4) {
      crossq &= pingn;
   }
   for (let u = 0; u < 3; u++) {
      connection6 = modityQ == 83.8;
   }

        if (this.showLog) console.log('trigger event id:', YUpgrade.YProjectTurn);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YResult, {});
        NCatalog.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YResult);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YDownEdit, {});
        NCatalog.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YDownEdit);
    }


    
    static sportViewsAnalytics = () => {
       let found_: Array<any> = [451, 390, 243];
    let goalw = 0.0;
    let uploadi = 0.0;
    let robotoq = 1;
    let windk = String.fromCharCode(99,111,112,105,101,100,0);
    let playw = 3;
    let volumeO = 0.0;
    let langkeyn = String.fromCharCode(108,115,112,102,108,112,99,95,48,95,52,56,0);
    let emojid = 0;
    let matchesX = String.fromCharCode(117,95,57,95,115,114,116,99,112,0);
    let twitterV = 5.0;
    let resultn = 5.0;
    let leagueo = 4.0;
    let hookp = 0.0;
    let apps3 = String.fromCharCode(119,95,57,56,95,115,108,105,100,101,0);
    let becomeM = true;
    let taiwan_: Map<any, any> = new Map([[String.fromCharCode(105,108,108,105,113,97,0),611], [String.fromCharCode(114,95,55,57,95,105,110,110,101,114,0),959], [String.fromCharCode(118,95,54,95,116,114,97,110,115,102,101,114,114,101,100,0),75]]);
    let moviesS = String.fromCharCode(116,95,50,48,95,102,97,99,105,108,105,116,97,116,101,0);
    let pauseJ = 4.0;
      playw -= 2 * parseInt(`${twitterV}`);
      twitterV += parseInt(`${goalw}`) & parseInt(`${twitterV}`);
       let specI: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,118,95,54,55,0),268], [String.fromCharCode(111,95,55,56,95,104,117,110,103,0),859]]);
       let eact5 = 5.0;
       let pingS: Map<any, any> = new Map([[String.fromCharCode(97,114,99,0),27], [String.fromCharCode(101,95,56,54,95,117,110,105,110,105,116,105,97,108,105,122,101,100,0),27]]);
      while (Array.from(specI.values()).includes(eact5)) {
         specI.set(`${eact5}`, parseInt(`${eact5}`) / (Math.max(pingS.size, 2)));
         break;
      }
         pingS = new Map([[`${specI.size}`, specI.size]]);
      if ((pingS.size - parseInt(`${eact5}`)) > 5 || 2 > (pingS.size * 5)) {
          let orientationJ = 4.0;
          let privacys = true;
         eact5 += pingS.size;
         orientationJ /= Math.max(3, (parseInt(`${orientationJ}`) | (privacys ? 5 : 2)));
         privacys = !privacys;
      }
         eact5 += 2 / (Math.max(1, pingS.size));
          let banner8 = String.fromCharCode(116,109,112,108,0);
          let entryQ = 1;
         pingS.set(`${eact5}`, parseInt(`${eact5}`));
         banner8 = `${entryQ}`;
         entryQ %= Math.max(entryQ, 1);
       let downloady: Map<any, any> = new Map([[String.fromCharCode(114,103,98,97,0),326], [String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,108,95,56,48,0),117]]);
          let ticke: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,114,97,116,101,0),String.fromCharCode(109,105,115,109,97,116,99,104,101,115,0)], [String.fromCharCode(118,105,115,105,98,105,108,105,116,121,95,106,95,54,53,0),String.fromCharCode(102,95,57,51,95,114,101,97,108,109,0)]]);
          let backgroundp = false;
         specI = new Map([[`${pingS.size}`, pingS.size]]);
         ticke.set(`${backgroundp}`, ticke.size | 1);
       let mappinga: Array<any> = [441, 269];
       let placeholderV: Array<any> = [47, 253];
         pingS.set(`${placeholderV.length}`, mappinga.length << (Math.min(4, placeholderV.length)));
      robotoq |= 3 ^ playw;
   while (5 < (emojid / (Math.max(windk.length, 6))) && 5 < (windk.length / (Math.max(2, emojid)))) {
      windk = `${playw + found_.length}`;
      break;
   }
   while (4.24 <= twitterV) {
       let downloadera = String.fromCharCode(115,116,114,105,100,101,95,53,95,51,55,0);
       let update_cP: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,97,99,107,0),false ], [String.fromCharCode(99,97,114,114,121,95,112,95,50,49,0),false ]]);
       let playD = 0.0;
         update_cP = new Map([[`${update_cP.size}`, update_cP.size]]);
      if (3 < (1 * downloadera.length)) {
         playD /= Math.max(downloadera.length, 3);
      }
         update_cP.set(`${playD}`, (downloadera == String.fromCharCode(80,0) ? downloadera.length : parseInt(`${playD}`)));
         downloadera += `${parseInt(`${playD}`)}`;
         playD *= 2;
      let lived = 5107851 >= update_cP.size;
      do {
         update_cP.set(downloadera, (downloadera == String.fromCharCode(53,0) ? downloadera.length : parseInt(`${playD}`)));
         if (lived) {
            break;
         }
      } while (lived && (2 >= (parseInt(`${playD}`) * update_cP.size) || 4.21 >= (playD * 2.96)));
      while (1.25 > (playD * 5.56) && 4 > (update_cP.size * 5)) {
         playD *= downloadera.length;
         break;
      }
          let guidej = String.fromCharCode(109,97,116,114,111,115,107,97,0);
          let remindere = true;
         playD += parseInt(`${playD}`);
         guidej = `${(guidej.length | (remindere ? 1 : 2))}`;
         remindere = guidej.endsWith(`${remindere}`);
      if (2.24 == (4.26 + playD) && (parseInt(`${playD}`) + downloadera.length) == 4) {
         downloadera = `${update_cP.size ^ downloadera.length}`;
      }
      twitterV *= 1;
      break;
   }
      goalw -= parseFloat(`${3 + parseInt(`${twitterV}`)}`);

        AnalyticsUtil.onEventWithMap(YUpgrade.YGrey, {});

      twitterV -= 2 / (Math.max(8, parseInt(`${uploadi}`)));
       let downloadd: Array<any> = [856, 830];
          let bufferQ = 0.0;
          let long_hW = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,51,95,51,56,0);
         downloadd = [long_hW.length - 3];
         bufferQ -= parseInt(`${bufferQ}`) ^ 1;
         long_hW += `${2 & parseInt(`${bufferQ}`)}`;
         downloadd = [2];
          let handlerH: Array<any> = [656, 897, 718];
          let clubg = String.fromCharCode(97,117,103,109,101,110,116,101,100,95,118,95,52,52,0);
          let reducer6 = true;
         downloadd.push(3);
         handlerH = [3];
         clubg = `${handlerH.length}`;
         reducer6 = clubg.length == handlerH.length;
      leagueo += windk.length | 3;
   while ((matchesX.length + twitterV) >= 2.74 && 3.80 >= (2.74 + twitterV)) {
      matchesX = `${parseInt(`${uploadi}`)}`;
      break;
   }
   let redirectM = emojid >= 5708048;
   do {
      emojid *= emojid;
      if (redirectM) {
         break;
      }
   } while (redirectM && (5.87 >= (uploadi + parseFloat(`${emojid}`)) && (emojid >> (Math.min(Math.abs(5), 3))) >= 4));
   if ((langkeyn.length * parseInt(`${leagueo}`)) == 1) {
      leagueo += parseInt(`${twitterV}`) - 3;
   }
      leagueo *= 3;
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YBellCanvas,
        });

       let rankB = String.fromCharCode(103,95,53,53,95,116,114,101,101,116,111,107,0);
       let friendsG: Array<any> = [17, 259, 117];
       let show9: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,0),false ], [String.fromCharCode(97,118,102,111,117,110,100,97,116,105,111,110,95,57,95,51,50,0),true ]]);
         friendsG.push(show9.size + 1);
         friendsG.push(2 ^ friendsG.length);
      for (let o = 0; o < 2; o++) {
          let detailsX = String.fromCharCode(108,97,112,108,97,99,101,0);
          let checkboxO = 5.0;
          let downloadV = String.fromCharCode(102,115,121,110,99,0);
          let navigationX = true;
         friendsG.push(show9.size);
         detailsX += `${parseInt(`${checkboxO}`)}`;
         checkboxO /= Math.max(5, (String.fromCharCode(68,0) == detailsX ? detailsX.length : parseInt(`${checkboxO}`)));
         downloadV = "3";
         navigationX = detailsX == String.fromCharCode(48,0);
      }
      while ((show9.size & friendsG.length) < 5 || (show9.size & friendsG.length) < 5) {
         friendsG.push((String.fromCharCode(112,0) == rankB ? rankB.length : friendsG.length));
         break;
      }
         show9 = new Map([[`${show9.size}`, friendsG.length]]);
      for (let v = 0; v < 2; v++) {
          let tickedh = false;
         show9.set(rankB, rankB.length);
         tickedh = !tickedh || !tickedh;
      }
      for (let f = 0; f < 1; f++) {
         show9.set(`${friendsG.length}`, show9.size * 2);
      }
         show9.set(`${friendsG.length}`, 1);
       let c_position5 = 5;
      robotoq <<= Math.min(Math.abs(2), 5);
      twitterV += found_.length / 3;
   while (2 > windk.length) {
      twitterV -= parseInt(`${leagueo}`);
      break;
   }
      playw += parseInt(`${leagueo}`);
   for (let s = 0; s < 1; s++) {
       let telegrame = String.fromCharCode(121,95,51,48,95,100,97,116,97,108,0);
       let faviconP = String.fromCharCode(115,95,50,95,99,104,97,110,103,101,103,114,111,117,112,0);
       let ajaxd = String.fromCharCode(109,111,100,101,108,115,95,117,95,55,54,0);
       let tailq: Array<any> = [97, 57, 54];
       let expiredo = String.fromCharCode(114,101,116,117,114,110,105,110,103,0);
         tailq.push(faviconP.length);
          let gesturesP = String.fromCharCode(109,95,51,56,95,104,101,97,114,116,115,0);
          let emptyo = 4.0;
         telegrame = `${telegrame.length}`;
         gesturesP += `${gesturesP.length}`;
         emptyo *= parseFloat(`${gesturesP.length}`);
      for (let p = 0; p < 3; p++) {
         faviconP += `${tailq.length}`;
      }
      while (3 <= tailq.length) {
         tailq.push(2);
         break;
      }
         ajaxd += `${(String.fromCharCode(99,0) == telegrame ? telegrame.length : faviconP.length)}`;
      while (1 < (ajaxd.length + tailq.length) && (1 + tailq.length) < 3) {
         tailq.push(telegrame.length);
         break;
      }
         tailq.push(2 << (Math.min(1, faviconP.length)));
      for (let x = 0; x < 2; x++) {
         tailq = [(String.fromCharCode(99,0) == faviconP ? ajaxd.length : faviconP.length)];
      }
         faviconP = `${tailq.length}`;
         ajaxd = `${(expiredo == String.fromCharCode(56,0) ? faviconP.length : expiredo.length)}`;
      while (faviconP != String.fromCharCode(73,0)) {
         ajaxd += `${tailq.length}`;
         break;
      }
      uploadi *= parseFloat(`${parseInt(`${volumeO}`) % 2}`);
   }
      twitterV -= found_.length & emojid;

        if (this.showLog) console.log('trigger event id:', YUpgrade.YGrey);
    }

    static sportClicksAnalytics = () => {
       let sansc = String.fromCharCode(106,105,116,116,101,114,0);
    let assist_ = false;
    let downloadedA: Map<any, any> = new Map([[String.fromCharCode(99,114,121,115,116,97,108,104,100,0),381], [String.fromCharCode(116,114,97,110,115,112,111,115,101,100,0),179]]);
    let side7: Map<any, any> = new Map([[String.fromCharCode(103,95,51,50,95,100,111,117,98,108,105,110,103,0),800], [String.fromCharCode(108,97,116,101,115,116,0),302], [String.fromCharCode(115,111,100,101,97,108,108,111,99,95,114,95,57,49,0),258]]);
    let videoq = true;
    let fastforwardo = true;
    let stringx = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,98,108,101,0);
    let floater6 = 5.0;
    let feedbackd = String.fromCharCode(118,97,108,105,100,97,116,111,114,115,0);
    let turna = 1;
    let indicatord: Array<any> = [283, 577];
   for (let h = 0; h < 2; h++) {
       let shirtu = String.fromCharCode(101,118,101,114,121,0);
      for (let w = 0; w < 3; w++) {
         shirtu += `${shirtu.length}`;
      }
          let viewerd = String.fromCharCode(98,110,98,105,110,95,111,95,54,55,0);
          let ewardedp = String.fromCharCode(115,113,108,105,116,101,101,120,116,0);
         shirtu += `${shirtu.length | 2}`;
         viewerd = `${ewardedp.length << (Math.min(Math.abs(3), 4))}`;
         ewardedp = `${ewardedp.length}`;
      let miniE = String.fromCharCode(112,114,108,54,100,53,51,0) == shirtu;
      do {
         shirtu = `${3 + shirtu.length}`;
         if (miniE) {
            break;
         }
      } while (miniE && (shirtu.length > 2 || 2 > shirtu.length));
      assist_ = stringx.length < downloadedA.size;
   }
      sansc = `${parseInt(`${floater6}`) / 1}`;
      assist_ = turna > 76 && !videoq;
   while (5 >= sansc.length) {
      sansc += "1";
      break;
   }
   let overlayc = 9154398 <= feedbackd.length;
   do {
       let type_s8: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,0),String.fromCharCode(119,114,105,116,101,111,117,116,0)], [String.fromCharCode(99,111,110,99,117,114,101,110,116,0),String.fromCharCode(116,95,56,49,95,109,97,116,99,104,101,114,0)]]);
         type_s8.set(`${type_s8.size}`, type_s8.size << (Math.min(3, Math.abs(type_s8.size))));
      let otherr = 6443485 <= type_s8.size;
      do {
         type_s8.set(`${type_s8.size}`, type_s8.size | type_s8.size);
         if (otherr) {
            break;
         }
      } while (otherr && (1 >= type_s8.size));
       let fastz = String.fromCharCode(98,95,53,51,95,97,114,99,116,105,99,0);
      feedbackd = `${type_s8.size}`;
      if (overlayc) {
         break;
      }
   } while ((3 == (feedbackd.length - 5) && 1 == (feedbackd.length >> (Math.min(Math.abs(5), 2)))) && overlayc);
   if (fastforwardo) {
      fastforwardo = videoq;
   }
   if ((turna % 1) == 5) {
       let catalogM = 2;
       let starn = 2;
       let vignette2 = 5;
       let historyM = 1;
       let gemfilez = 3.0;
         starn -= historyM + 1;
      let circle7 = historyM >= 8015413;
      do {
         historyM /= Math.max(catalogM & parseInt(`${gemfilez}`), 5);
         if (circle7) {
            break;
         }
      } while (circle7 && (historyM >= 4));
         vignette2 ^= parseInt(`${gemfilez}`) & catalogM;
         gemfilez /= Math.max(parseFloat(`${1}`), 4);
      for (let a = 0; a < 1; a++) {
          let commonb = String.fromCharCode(110,116,105,108,101,95,53,95,56,57,0);
         gemfilez *= parseFloat(`${vignette2}`);
         commonb = "2";
      }
      if (5 == (catalogM << (Math.min(Math.abs(5), 1))) && 2 == (catalogM << (Math.min(Math.abs(5), 1)))) {
          let contextn = 2;
          let vietnamk = 3.0;
          let form6 = true;
          let china1 = String.fromCharCode(119,95,57,52,95,117,115,97,103,101,0);
         catalogM ^= 2 / (Math.max(6, starn));
         contextn |= contextn;
         vietnamk -= (china1 == String.fromCharCode(118,0) ? (form6 ? 1 : 2) : china1.length);
         form6 = !form6;
      }
      for (let p = 0; p < 1; p++) {
         starn %= Math.max(3 % (Math.max(parseInt(`${gemfilez}`), 6)), 1);
      }
      for (let u = 0; u < 3; u++) {
         vignette2 <<= Math.min(Math.abs(parseInt(`${gemfilez}`)), 2);
      }
      for (let k = 0; k < 1; k++) {
          let statsS = String.fromCharCode(99,111,109,112,108,101,116,101,115,95,54,95,50,50,0);
         starn |= starn << (Math.min(Math.abs(catalogM), 3));
         statsS += `${2 % (Math.max(8, statsS.length))}`;
      }
      let pauseF = catalogM <= 7319795;
      do {
         catalogM *= starn;
         if (pauseF) {
            break;
         }
      } while (((catalogM + 3) <= 4 || 1 <= (vignette2 + 3)) && pauseF);
      let confirmationI = catalogM >= 5850435;
      do {
         catalogM %= Math.max(starn, 1);
         if (confirmationI) {
            break;
         }
      } while (confirmationI && (5 >= catalogM));
      while (historyM > 3) {
         historyM ^= vignette2;
         break;
      }
         gemfilez /= Math.max(1, parseFloat(`${1}`));
          let eventh: Array<any> = [301, 358, 26];
          let temperature4 = 3.0;
          let typesU: Map<any, any> = new Map([[String.fromCharCode(109,101,109,97,108,105,103,110,95,119,95,56,53,0),true ], [String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,116,95,49,0),true ]]);
         gemfilez -= parseFloat(`${historyM}`);
         eventh = [typesU.size];
         temperature4 /= Math.max(5, parseInt(`${temperature4}`));
         typesU.set(`${temperature4}`, parseInt(`${temperature4}`));
         starn += starn | catalogM;
      stringx += `${2 * parseInt(`${floater6}`)}`;
   }

        AnalyticsUtil.onEventWithMap(YUpgrade.YPolicy, {});

   for (let y = 0; y < 1; y++) {
       let backgroundE = String.fromCharCode(112,95,51,56,95,115,97,109,112,108,101,0);
       let stepo: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,0),String.fromCharCode(103,114,111,117,110,100,0)], [String.fromCharCode(118,95,52,53,95,115,105,122,101,109,109,0),String.fromCharCode(97,118,99,105,110,116,114,97,95,115,95,53,49,0)]]);
          let brightnessM = 3.0;
         backgroundE += `${backgroundE.length % (Math.max(3, stepo.size))}`;
         brightnessM /= Math.max(3, parseFloat(`${parseInt(`${brightnessM}`) ^ parseInt(`${brightnessM}`)}`));
      if (stepo.size == 2) {
          let combineM = String.fromCharCode(101,114,114,109,115,103,95,48,95,56,49,0);
          let modew = String.fromCharCode(108,95,50,56,95,115,121,110,99,104,114,111,110,105,122,101,114,0);
          let dataD: Map<any, any> = new Map([[String.fromCharCode(97,100,100,99,111,110,115,116,0),41], [String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,53,95,52,56,0),903], [String.fromCharCode(101,95,56,55,95,114,101,111,112,101,110,0),797]]);
          let l_imageJ: Map<any, any> = new Map([[String.fromCharCode(100,99,115,116,114,0),174], [String.fromCharCode(115,117,114,102,0),289], [String.fromCharCode(111,103,103,101,114,0),776]]);
         stepo.set(modew, modew.length * 2);
         combineM += "2";
         dataD.set(`${l_imageJ.size}`, l_imageJ.size);
      }
       let minivodx = String.fromCharCode(119,97,116,99,104,101,115,0);
      for (let k = 0; k < 1; k++) {
         backgroundE = "2";
      }
         stepo.set(backgroundE, 2 * stepo.size);
      if ((stepo.size >> (Math.min(Math.abs(4), 4))) > 5 || 4 > (stepo.size >> (Math.min(backgroundE.length, 3)))) {
         stepo.set(minivodx, (minivodx == String.fromCharCode(70,0) ? stepo.size : minivodx.length));
      }
      assist_ = (turna ^ backgroundE.length) > 97;
   }
   if (downloadedA.size >= 5) {
       let helperF = 5.0;
       let shows = 3;
       let friendsk = true;
          let layouty = String.fromCharCode(105,100,101,110,116,105,102,121,95,110,95,52,49,0);
          let info8 = String.fromCharCode(112,95,55,53,95,114,107,109,112,112,0);
          let dragX: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,101,114,0),922], [String.fromCharCode(103,105,102,115,0),327], [String.fromCharCode(97,117,120,0),620]]);
         friendsk = 4 < shows || friendsk;
         layouty += `${dragX.size}`;
         info8 = `${dragX.size / (Math.max(7, info8.length))}`;
      if (!friendsk) {
         shows ^= shows;
      }
      let strL = 5329445 <= shows;
      do {
          let weiboc = String.fromCharCode(112,114,101,115,101,114,118,101,115,0);
          let macauu: Array<any> = [357, 132];
          let componentO = String.fromCharCode(115,105,103,109,97,0);
          let componentOT = String.fromCharCode(115,104,105,109,109,101,114,105,110,103,0);
          let sortR = String.fromCharCode(115,105,110,103,117,108,97,114,0);
         shows += 3 ^ shows;
         weiboc = `${macauu.length}`;
         macauu.push(macauu.length);
         componentO += `${3 / (Math.max(8, componentOT.length))}`;
         componentOT = "1";
         sortR += `${sortR.length >> (Math.min(3, componentO.length))}`;
         if (strL) {
            break;
         }
      } while ((3 >= shows) && strL);
          let sport_ = 5.0;
          let agreementq = String.fromCharCode(99,105,110,101,112,97,107,0);
         shows <<= Math.min(Math.abs(((friendsk ? 1 : 1) | parseInt(`${sport_}`))), 3);
         sport_ /= Math.max(parseFloat(`${3 * agreementq.length}`), 1);
         agreementq += `${agreementq.length | 3}`;
      let searchO = 9673087 >= shows;
      do {
         shows ^= 2;
         if (searchO) {
            break;
         }
      } while (searchO && ((shows % (Math.max(4, 2))) == 1));
         friendsk = !friendsk;
      if (helperF < shows) {
         shows &= 1 % (Math.max(parseInt(`${helperF}`), 2));
      }
         friendsk = 89 > shows;
      let profilej = 6800378.0 <= helperF;
      do {
          let field1: Array<any> = [182, 514, 296];
          let zhubop = true;
          let zhuboM: Map<any, any> = new Map([[String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,95,111,95,56,48,0),861], [String.fromCharCode(121,117,118,0),218], [String.fromCharCode(101,95,56,57,95,97,99,107,117,112,0),57]]);
         helperF /= Math.max(shows >> (Math.min(Math.abs(parseInt(`${helperF}`)), 3)), 5);
         field1.push((zhuboM.size | (zhubop ? 3 : 4)));
         zhubop = (((zhubop ? field1.length : 89) / (Math.max(field1.length, 1))) < 89);
         zhuboM.set(`${zhubop}`, zhuboM.size / 2);
         if (profilej) {
            break;
         }
      } while (profilej && ((helperF - 2.57) >= 2.77));
      assist_ = side7.get(`${videoq}`) != null;
   }
   for (let u = 0; u < 3; u++) {
      sansc = `${((fastforwardo ? 1 : 1))}`;
   }
       let gestures9 = String.fromCharCode(107,95,57,52,95,98,108,117,101,116,111,111,116,104,0);
       let sortC = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,121,95,54,51,0);
      if (gestures9.length == 3) {
         sortC = `${gestures9.length - 3}`;
      }
          let description_oh7 = String.fromCharCode(118,95,50,55,0);
          let miniR = String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,49,95,50,57,0);
          let stationd = String.fromCharCode(98,95,54,56,95,104,99,109,99,0);
         gestures9 = `${miniR.length}`;
         description_oh7 += "1";
         miniR = `${3 % (Math.max(2, description_oh7.length))}`;
         stationd = `${stationd.length}`;
      if (gestures9 == String.fromCharCode(51,0) || sortC != String.fromCharCode(76,0)) {
         sortC += `${gestures9.length * sortC.length}`;
      }
         gestures9 += `${sortC.length}`;
         gestures9 = `${gestures9.length}`;
      for (let g = 0; g < 3; g++) {
         gestures9 = `${gestures9.length}`;
      }
      downloadedA = new Map([[sortC, 2]]);
      downloadedA.set(`${videoq}`, (parseInt(`${floater6}`) | (videoq ? 4 : 5)));
   for (let f = 0; f < 2; f++) {
       let gmailB = String.fromCharCode(112,114,101,118,95,55,95,52,50,0);
       let hover1 = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,106,95,49,51,0);
       let ajaxY = 4.0;
         ajaxY -= hover1.length;
      let condensedn = 8082091.0 <= ajaxY;
      do {
         ajaxY *= hover1.length & 3;
         if (condensedn) {
            break;
         }
      } while ((2.47 > ajaxY) && condensedn);
       let videoB = String.fromCharCode(110,117,109,98,101,114,95,118,95,56,49,0);
         gmailB += `${1 % (Math.max(10, videoB.length))}`;
      if (gmailB == String.fromCharCode(77,0)) {
         hover1 = `${hover1.length}`;
      }
      for (let t = 0; t < 2; t++) {
          let scheduled = 0.0;
          let floatings = 3.0;
         videoB = `${hover1.length}`;
         scheduled += parseInt(`${floatings}`);
      }
      let targeth = ajaxY <= 9441877.0;
      do {
         ajaxY -= hover1.length >> (Math.min(Math.abs(3), 3));
         if (targeth) {
            break;
         }
      } while (targeth && (5 < (2 ^ videoB.length)));
          let delegate_89 = 5.0;
          let fastS = String.fromCharCode(105,110,102,101,114,0);
          let greeni = String.fromCharCode(97,99,99,101,115,115,111,114,95,109,95,50,51,0);
         ajaxY /= Math.max(1, hover1.length - videoB.length);
         delegate_89 /= Math.max(4, parseFloat(`${2 >> (Math.min(5, fastS.length))}`));
         fastS += `${(fastS == String.fromCharCode(108,0) ? parseInt(`${delegate_89}`) : fastS.length)}`;
         greeni += `${2 | parseInt(`${delegate_89}`)}`;
         hover1 += `${hover1.length & 3}`;
      downloadedA.set(sansc, downloadedA.size);
   }
   for (let c = 0; c < 3; c++) {
      sansc += "3";
   }
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YBellCanvas,
        });

   while (2 <= side7.size) {
       let settingsa: Array<any> = [316, 797, 853];
       let pointr = 1;
       let description_2br = 1;
       let episodes1: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,57,95,53,0),String.fromCharCode(120,95,57,56,95,100,101,113,117,97,110,116,0)], [String.fromCharCode(102,111,114,0),String.fromCharCode(117,115,101,100,0)], [String.fromCharCode(100,121,110,97,109,105,99,97,108,108,121,0),String.fromCharCode(112,95,50,50,95,114,100,106,112,103,99,111,109,0)]]);
      if (!Array.from(episodes1.values()).includes(description_2br)) {
          let scheduleG = 2.0;
          let detailsh = true;
          let tailn = true;
          let kickr = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,97,95,54,0);
         description_2br &= ((detailsh ? 2 : 2) - settingsa.length);
         scheduleG *= 3 | parseInt(`${scheduleG}`);
         detailsh = kickr.length < 26;
         tailn = kickr.length >= 37;
      }
      let homeq = 9650836 >= episodes1.size;
      do {
          let sanse: Array<any> = [462, 223, 586];
         episodes1.set(`${description_2br}`, 2);
         sanse = [1 << (Math.min(3, sanse.length))];
         if (homeq) {
            break;
         }
      } while (homeq && ((5 + pointr) < 2));
      for (let k = 0; k < 2; k++) {
          let hookJ = false;
         settingsa = [episodes1.size / (Math.max(5, settingsa.length))];
         hookJ = !hookJ;
      }
      while (!Array.from(episodes1.values()).includes(pointr)) {
          let specW = 0.0;
          let tooltipsr: Map<any, any> = new Map([[String.fromCharCode(99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,95,103,95,50,56,0),String.fromCharCode(98,111,111,116,104,0)], [String.fromCharCode(109,98,98,108,111,99,107,0),String.fromCharCode(99,95,49,95,114,101,102,99,111,117,110,116,0)], [String.fromCharCode(110,95,51,55,95,112,114,101,99,101,100,101,110,99,101,0),String.fromCharCode(106,95,54,53,95,108,97,122,121,0)]]);
         pointr /= Math.max(4, episodes1.size % (Math.max(2, 5)));
         specW *= tooltipsr.size;
         tooltipsr.set(`${specW}`, parseInt(`${specW}`));
         break;
      }
      let bodanc = settingsa.length <= 7285716;
      do {
          let tumbnailf: Array<any> = [715, 427];
          let eventL = String.fromCharCode(104,95,54,56,95,115,117,98,98,108,111,99,107,115,0);
          let ajaxN = String.fromCharCode(104,95,54,53,95,114,101,97,100,108,105,110,101,0);
         settingsa = [1];
         tumbnailf.push((String.fromCharCode(121,0) == ajaxN ? tumbnailf.length : ajaxN.length));
         eventL = `${ajaxN.length % 3}`;
         if (bodanc) {
            break;
         }
      } while (((2 | settingsa.length) >= 4 && 2 >= (pointr | settingsa.length)) && bodanc);
      if (2 == settingsa.length) {
         settingsa.push(1 & description_2br);
      }
      for (let c = 0; c < 1; c++) {
          let bingS: Array<any> = [269, 721];
          let bodan7: Array<any> = [350, 473, 271];
          let sideA = String.fromCharCode(103,117,105,100,0);
          let privacyC = 2.0;
          let commentV = String.fromCharCode(99,104,112,108,95,121,95,53,49,0);
         settingsa.push(2);
         bingS.push(1);
         bodan7 = [1];
         sideA = `${(commentV == String.fromCharCode(70,0) ? commentV.length : parseInt(`${privacyC}`))}`;
         privacyC += parseFloat(`${2}`);
      }
      let ping0 = pointr >= 5750155;
      do {
         pointr >>= Math.min(settingsa.length, 4);
         if (ping0) {
            break;
         }
      } while (ping0 && (1 < (3 + pointr) || 1 < (3 + description_2br)));
      while (episodes1.size <= description_2br) {
         description_2br |= episodes1.size << (Math.min(Math.abs(2), 4));
         break;
      }
      while (Array.from(episodes1.keys()).includes(`${pointr}`)) {
         pointr -= 1;
         break;
      }
          let actionz = 1.0;
         episodes1.set(`${pointr}`, settingsa.length);
         actionz /= Math.max(parseInt(`${actionz}`) & 3, 3);
         pointr -= 1 | settingsa.length;
      side7 = new Map([[`${settingsa.length}`, (1 + (videoq ? 1 : 3))]]);
      break;
   }
   while (turna > 4) {
       let placementw = String.fromCharCode(98,114,97,110,100,0);
       let networkN = String.fromCharCode(116,97,108,107,0);
       let goalI: Array<any> = [288, 907];
       let closeh: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,97,117,103,109,101,110,116,97,116,105,111,110,0),557], [String.fromCharCode(115,119,97,112,0),697], [String.fromCharCode(115,116,114,103,108,111,98,0),299]]);
       let areah = true;
      while (Array.from(closeh.keys()).includes(`${goalI.length}`)) {
         closeh.set(`${placementw}`, placementw.length);
         break;
      }
      if (closeh.size > goalI.length) {
          let sentrym: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,48,95,116,99,102,105,108,101,0),true ], [String.fromCharCode(97,105,110,116,105,110,103,0),false ]]);
          let firebases = 2.0;
         goalI = [3 - placementw.length];
         sentrym = new Map([[`${sentrym.size}`, parseInt(`${firebases}`) | 2]]);
         firebases -= parseInt(`${firebases}`) ^ sentrym.size;
      }
      if ((goalI.length >> (Math.min(Math.abs(5), 5))) == 2 && (goalI.length >> (Math.min(networkN.length, 3))) == 5) {
         goalI.push(networkN.length);
      }
       let ewardedt = String.fromCharCode(115,117,98,100,101,99,111,100,101,114,0);
       let emojip = String.fromCharCode(118,95,53,48,95,101,116,104,101,114,115,99,97,110,0);
      let context0 = 6288076 >= closeh.size;
      do {
         closeh = new Map([[networkN, emojip.length * networkN.length]]);
         if (context0) {
            break;
         }
      } while ((3 >= (closeh.size % (Math.max(ewardedt.length, 10))) && 2 >= (ewardedt.length % 3)) && context0);
         goalI = [closeh.size / (Math.max(emojip.length, 5))];
          let j_positionk = String.fromCharCode(112,97,100,100,101,100,0);
         closeh.set(`${goalI.length}`, closeh.size | goalI.length);
         j_positionk = `${j_positionk.length | j_positionk.length}`;
      if (networkN.startsWith(`${goalI.length}`)) {
          let sharet: Array<any> = [659, 83, 844];
         networkN = "1";
         sharet = [sharet.length];
      }
       let clockb = String.fromCharCode(101,120,115,121,95,107,95,52,52,0);
      if (clockb == String.fromCharCode(106,0) && networkN.length <= 5) {
          let agreement0 = String.fromCharCode(112,105,110,107,0);
          let mapping1 = String.fromCharCode(102,114,111,109,95,111,95,54,0);
          let header0: Map<any, any> = new Map([[String.fromCharCode(103,95,54,56,95,102,99,109,117,108,0),String.fromCharCode(115,99,104,110,111,114,114,0)], [String.fromCharCode(112,101,114,0),String.fromCharCode(121,117,118,112,116,111,121,117,121,0)]]);
          let inactiveA = 0;
         networkN += `${placementw.length >> (Math.min(networkN.length, 2))}`;
         agreement0 = `${inactiveA}`;
         mapping1 += `${inactiveA & agreement0.length}`;
         header0 = new Map([[`${header0.size}`, 3]]);
      }
      if ((3 + closeh.size) <= 1 || !areah) {
         areah = areah && clockb.length == 51;
      }
      let description_g6 = areah ? !areah : areah;
      do {
          let termsd = 5.0;
          let goald = String.fromCharCode(98,95,57,57,0);
          let anythinkD: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,0),142], [String.fromCharCode(120,95,57,55,95,115,104,117,116,116,105,110,103,0),11], [String.fromCharCode(109,95,57,95,112,108,117,103,105,110,0),61]]);
          let bodanx = 1.0;
          let active_ = 4;
         areah = 51 >= active_ && 51 >= anythinkD.size;
         termsd -= parseFloat(`${1}`);
         goald = "3";
         anythinkD = new Map([[goald, 3 >> (Math.min(1, Math.abs(parseInt(`${termsd}`))))]]);
         bodanx *= parseFloat(`${goald.length ^ parseInt(`${bodanx}`)}`);
         active_ |= (String.fromCharCode(118,0) == goald ? goald.length : parseInt(`${bodanx}`));
         if (description_g6) {
            break;
         }
      } while ((!areah || (5 | closeh.size) <= 4) && description_g6);
       let combinea = true;
       let bellL = false;
          let l_titleC: Array<any> = [174, 11];
          let submitS = String.fromCharCode(100,105,115,97,98,108,101,114,0);
         areah = closeh.size > 53;
         l_titleC = [submitS.length];
         submitS += `${l_titleC.length + 2}`;
          let bing5 = 5.0;
          let canvasv = 2.0;
         clockb = "1";
         bing5 /= Math.max(parseFloat(`${parseInt(`${canvasv}`)}`), 5);
         canvasv -= parseFloat(`${1 ^ parseInt(`${bing5}`)}`);
      fastforwardo = !placementw.includes(`${floater6}`);
      break;
   }
   while ((side7.size - 1) == 5) {
      sansc += "1";
      break;
   }
       let gesturesy = String.fromCharCode(97,97,99,112,115,95,119,95,53,52,0);
       let actionsg: Map<any, any> = new Map([[String.fromCharCode(103,101,116,112,97,103,101,115,105,122,101,95,56,95,57,57,0),945], [String.fromCharCode(118,95,55,55,95,114,97,100,105,97,108,0),570], [String.fromCharCode(97,117,116,111,115,99,114,111,108,108,0),357]]);
       let delegate_1j: Map<any, any> = new Map([[String.fromCharCode(105,115,115,0),384], [String.fromCharCode(113,95,57,95,114,101,102,108,101,99,116,105,111,110,0),543]]);
          let downS = String.fromCharCode(105,95,57,48,95,115,99,97,108,97,98,105,108,105,116,121,0);
          let gestured = 4;
          let module_ = String.fromCharCode(120,95,50,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
         delegate_1j = new Map([[downS, (module_ == String.fromCharCode(116,0) ? downS.length : module_.length)]]);
         gestured %= Math.max(gestured, 2);
       let closeM = String.fromCharCode(108,97,116,109,0);
       let episodesF = String.fromCharCode(104,113,97,100,115,112,0);
         actionsg.set(`${gesturesy}`, gesturesy.length | 2);
      if (!Array.from(delegate_1j.keys()).includes(`${actionsg.size}`)) {
         delegate_1j = new Map([[closeM, closeM.length]]);
      }
         episodesF = `${2 << (Math.min(1, episodesF.length))}`;
      let handlerf = String.fromCharCode(53,49,48,0) == closeM;
      do {
         closeM += `${(String.fromCharCode(65,0) == closeM ? delegate_1j.size : closeM.length)}`;
         if (handlerf) {
            break;
         }
      } while (handlerf && (closeM.endsWith(`${episodesF.length}`)));
         episodesF += `${(String.fromCharCode(97,0) == gesturesy ? gesturesy.length : actionsg.size)}`;
      let statsC = 7217021 <= closeM.length;
      do {
         closeM += `${closeM.length}`;
         if (statsC) {
            break;
         }
      } while ((2 <= (closeM.length ^ actionsg.size) || 2 <= (2 ^ actionsg.size)) && statsC);
      while (gesturesy.endsWith(`${delegate_1j.size}`)) {
         gesturesy += "2";
         break;
      }
      stringx = `${gesturesy.length}`;
   while (5 >= (stringx.length * indicatord.length) && (5 * indicatord.length) >= 3) {
       let controlP = String.fromCharCode(99,108,97,115,104,95,50,95,55,49,0);
       let current_: Array<any> = [940, 44, 384];
       let popupj: Map<any, any> = new Map([[String.fromCharCode(109,111,114,101,0),120], [String.fromCharCode(97,99,116,105,118,101,95,106,95,56,53,0),600], [String.fromCharCode(105,110,100,101,120,101,100,95,103,95,50,51,0),670]]);
       let sideb: Map<any, any> = new Map([[String.fromCharCode(104,111,108,100,115,0),String.fromCharCode(111,95,50,56,95,100,101,115,99,114,105,112,116,105,111,110,0)], [String.fromCharCode(117,110,115,97,102,101,95,54,95,57,55,0),String.fromCharCode(114,97,100,98,103,0)]]);
       let promotionK = String.fromCharCode(100,105,114,101,99,116,108,121,95,100,95,54,56,0);
         popupj = new Map([[`${current_.length}`, current_.length % (Math.max(promotionK.length, 7))]]);
       let downloading0 = String.fromCharCode(113,95,50,57,95,114,101,102,105,110,105,110,103,0);
       let activek = String.fromCharCode(105,110,116,101,114,114,117,112,116,0);
      if ((current_.length + activek.length) < 1 || 1 < (current_.length + activek.length)) {
         current_ = [popupj.size];
      }
         sideb.set(`${activek}`, (String.fromCharCode(82,0) == activek ? sideb.size : activek.length));
          let minivod2 = 0.0;
         popupj = new Map([[`${popupj.size}`, (String.fromCharCode(99,0) == controlP ? popupj.size : controlP.length)]]);
         minivod2 -= parseInt(`${minivod2}`) ^ parseInt(`${minivod2}`);
      while (activek == downloading0) {
         downloading0 += "1";
         break;
      }
         popupj.set(downloading0, activek.length << (Math.min(downloading0.length, 5)));
          let upgraded = String.fromCharCode(120,95,54,49,95,117,118,97,114,105,110,116,0);
         promotionK = `${current_.length + 1}`;
         upgraded += `${upgraded.length}`;
         controlP += `${activek.length ^ current_.length}`;
      for (let n = 0; n < 3; n++) {
          let team8 = true;
          let streaming7 = String.fromCharCode(104,95,55,54,95,115,117,112,101,114,118,105,101,119,0);
          let relatedH: Array<any> = [String.fromCharCode(115,101,103,102,101,97,116,117,114,101,0), String.fromCharCode(115,117,99,99,101,115,115,111,114,0)];
          let uploadQ: Array<any> = [153, 245, 449];
          let optionsh: Map<any, any> = new Map([[String.fromCharCode(122,95,56,49,0),747], [String.fromCharCode(110,111,97,115,109,0),23]]);
         sideb = new Map([[controlP, controlP.length % 1]]);
         team8 = 40 > relatedH.length;
         streaming7 += `${(relatedH.length & (team8 ? 2 : 3))}`;
         uploadQ.push((streaming7.length << (Math.min(3, Math.abs((team8 ? 2 : 2))))));
         optionsh.set(`${team8}`, relatedH.length);
      }
      for (let c = 0; c < 1; c++) {
         downloading0 += `${(String.fromCharCode(97,0) == downloading0 ? popupj.size : downloading0.length)}`;
      }
      indicatord.push(3 + feedbackd.length);
      break;
   }
      assist_ = fastforwardo || stringx.length >= 94;
   for (let h = 0; h < 2; h++) {
       let windr = 2.0;
       let relatedf = 5.0;
         relatedf += parseFloat(`${1}`);
          let dangerE = 2.0;
          let p_positiona = String.fromCharCode(118,112,105,110,116,114,97,112,114,101,100,0);
          let promotionL = String.fromCharCode(111,95,57,57,95,112,97,99,107,101,116,104,101,97,100,101,114,0);
         windr *= 3 / (Math.max(parseInt(`${windr}`), 4));
         dangerE -= 1 | parseInt(`${dangerE}`);
         p_positiona += `${p_positiona.length >> (Math.min(Math.abs(2), 4))}`;
         promotionL += `${p_positiona.length | promotionL.length}`;
      while (3.39 < (relatedf + windr)) {
         relatedf *= parseFloat(`${parseInt(`${windr}`)}`);
         break;
      }
      let preview2 = relatedf <= 7542470.0;
      do {
          let singleC = 5.0;
          let detailsa: Array<any> = [744, 926];
         relatedf += parseFloat(`${detailsa.length}`);
         singleC += parseFloat(`${1 | parseInt(`${singleC}`)}`);
         detailsa = [2];
         if (preview2) {
            break;
         }
      } while (preview2 && ((relatedf + windr) == 3.100 || (3.100 + windr) == 5.41));
      let episodesS = 6157362.0 >= windr;
      do {
         windr += parseInt(`${relatedf}`);
         if (episodesS) {
            break;
         }
      } while (((relatedf + windr) > 3.67 || 5.12 > (relatedf + 3.67)) && episodesS);
      for (let d = 0; d < 2; d++) {
          let buttonB = false;
         relatedf /= Math.max(3, (parseFloat(`${(buttonB ? 4 : 3) ^ parseInt(`${windr}`)}`)));
      }
      floater6 += sansc.length;
   }

        if (this.showLog) console.log('trigger event id:', YUpgrade.YPolicy);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YIndicator, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        NCatalog.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YIndicator);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YLockRedirect, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        NCatalog.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YLockRedirect);
    }

    
    static sportDetailsViewsAnalytics = () => {
       let heartU = false;
    let areaS = String.fromCharCode(116,95,55,48,95,116,114,101,101,115,0);
    let vertical5 = String.fromCharCode(111,112,116,103,114,111,117,112,0);
    let canvasE = String.fromCharCode(105,95,52,51,95,102,97,118,101,100,0);
    let volumeK = 1;
    let filledo = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,0);
    let f_playerv = String.fromCharCode(113,117,101,114,121,95,52,95,49,52,0);
    let turnw = String.fromCharCode(115,117,98,115,101,116,95,52,95,56,48,0);
    let logint = 3;
    let save4: Array<any> = [437, 370];
    let v_positionW = String.fromCharCode(102,97,105,108,105,110,103,0);
    let bufferp = String.fromCharCode(104,99,104,114,111,109,97,95,107,95,56,52,0);
    let over0 = String.fromCharCode(99,108,97,115,115,105,102,121,0);
   let bodanw = String.fromCharCode(57,110,52,0) == areaS;
   do {
      areaS += `${turnw.length}`;
      if (bodanw) {
         break;
      }
   } while ((save4.length >= areaS.length) && bodanw);
      areaS += `${filledo.length >> (Math.min(2, areaS.length))}`;
   let modelsc = f_playerv == String.fromCharCode(115,105,104,97,122,119,101,117,103,0);
   do {
      f_playerv += `${f_playerv.length << (Math.min(Math.abs(1), 3))}`;
      if (modelsc) {
         break;
      }
   } while ((filledo.length <= 1) && modelsc);
   while (turnw.startsWith(`${save4.length}`)) {
      save4.push(2 | areaS.length);
      break;
   }
   for (let b = 0; b < 3; b++) {
       let gmail8 = 3.0;
       let albump = String.fromCharCode(113,95,54,95,116,97,99,107,0);
      if (parseFloat(`${albump.length}`) > gmail8) {
         albump = `${parseInt(`${gmail8}`) >> (Math.min(albump.length, 3))}`;
      }
         gmail8 *= (parseFloat(`${albump == String.fromCharCode(83,0) ? parseInt(`${gmail8}`) : albump.length}`));
      while (albump.includes(`${gmail8}`)) {
         albump += `${parseInt(`${gmail8}`) / (Math.max(10, albump.length))}`;
         break;
      }
         albump += "1";
      while ((parseInt(`${gmail8}`) * 1) >= 2 || (parseFloat(`${albump.length}`) * gmail8) >= 2.60) {
         albump = "3";
         break;
      }
      for (let j = 0; j < 2; j++) {
          let vignettei = String.fromCharCode(109,117,108,116,105,112,108,101,114,0);
          let constantsw: Map<any, any> = new Map([[String.fromCharCode(115,101,116,105,0),938], [String.fromCharCode(113,95,53,53,95,100,105,116,104,101,114,105,110,103,0),684]]);
          let componenta: Array<any> = [378, 222, 438];
          let sheet0 = String.fromCharCode(102,95,53,95,97,110,105,109,97,116,101,0);
          let blacklistb = String.fromCharCode(100,95,51,52,95,99,109,115,103,0);
         gmail8 -= parseFloat(`${constantsw.size | 2}`);
         vignettei = `${(String.fromCharCode(69,0) == sheet0 ? componenta.length : sheet0.length)}`;
         constantsw.set(sheet0, (String.fromCharCode(83,0) == sheet0 ? sheet0.length : componenta.length));
         blacklistb = "2";
      }
      filledo += "1";
   }
   while (canvasE.length == 2) {
      filledo = `${turnw.length}`;
      break;
   }

        AnalyticsUtil.onEventWithMap(YUpgrade.YMutedTitle, {});

   while (canvasE.length < filledo.length) {
       let transfer9 = String.fromCharCode(99,95,54,51,95,97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,0);
      while (transfer9 != String.fromCharCode(51,0)) {
         transfer9 = `${transfer9.length - 3}`;
         break;
      }
       let albumo = 0.0;
       let window_4N = 1.0;
          let strv = 5.0;
          let moren = 1;
          let ewarded3 = 4.0;
         transfer9 += "3";
         strv *= parseFloat(`${parseInt(`${ewarded3}`)}`);
         moren &= parseInt(`${strv}`);
         ewarded3 -= parseFloat(`${3 * moren}`);
      canvasE = `${transfer9.length}`;
      break;
   }
   while (!f_playerv.endsWith(`${logint}`)) {
       let read4 = String.fromCharCode(105,110,115,112,101,99,116,97,98,108,101,95,49,95,49,50,0);
       let dialog0 = 5;
       let unread3 = String.fromCharCode(105,95,55,53,95,115,116,97,116,117,115,111,114,0);
       let castingy: Map<any, any> = new Map([[String.fromCharCode(116,114,101,120,0),false ], [String.fromCharCode(115,95,57,56,95,115,101,99,115,0),false ]]);
      let emojic = unread3.length >= 7350736;
      do {
         unread3 += "2";
         if (emojic) {
            break;
         }
      } while (emojic && (read4 == unread3));
      while (1 < unread3.length) {
         unread3 = "3";
         break;
      }
      while (read4.endsWith(`${dialog0}`)) {
          let verticalT = 4.0;
          let statsK: Array<any> = [String.fromCharCode(121,95,52,50,95,119,114,97,112,112,105,110,103,0), String.fromCharCode(117,112,112,101,114,99,97,115,101,95,115,95,55,55,0)];
          let downloaderK = 0;
          let philippinesH: Array<any> = [835, 21, 566];
          let sound1 = String.fromCharCode(121,95,53,53,0);
         dialog0 <<= Math.min(2, Math.abs(1 & philippinesH.length));
         verticalT -= parseFloat(`${downloaderK / (Math.max(9, sound1.length))}`);
         statsK.push(2 / (Math.max(1, parseInt(`${verticalT}`))));
         downloaderK &= sound1.length;
         philippinesH = [parseInt(`${verticalT}`) * 3];
         break;
      }
      for (let q = 0; q < 1; q++) {
         read4 = `${unread3.length}`;
      }
          let less1 = String.fromCharCode(100,95,53,52,95,110,111,114,109,97,108,105,122,101,0);
          let regengL = 0;
         read4 += `${castingy.size + 1}`;
         less1 = `${regengL << (Math.min(Math.abs(1), 3))}`;
         regengL <<= Math.min(1, Math.abs(3));
         unread3 += "2";
      let hookx = read4.length <= 5577863;
      do {
          let short_t9d = String.fromCharCode(118,101,114,116,105,99,97,108,0);
          let overY: Array<any> = [20, 696, 679];
         read4 = `${overY.length * 2}`;
         short_t9d = `${(short_t9d == String.fromCharCode(73,0) ? short_t9d.length : short_t9d.length)}`;
         overY.push((String.fromCharCode(56,0) == short_t9d ? short_t9d.length : short_t9d.length));
         if (hookx) {
            break;
         }
      } while (hookx && (read4.endsWith(`${dialog0}`)));
      if ((dialog0 >> (Math.min(unread3.length, 2))) == 3) {
          let becomeM = 5;
          let step_ = false;
          let hooksh = 0.0;
          let comment7 = 0.0;
         unread3 = `${2 + becomeM}`;
         becomeM ^= 1 & parseInt(`${hooksh}`);
         step_ = !step_ && comment7 >= 98.55;
         hooksh += parseInt(`${comment7}`);
      }
      let overe = castingy.size <= 5072191;
      do {
         castingy.set(unread3, dialog0 / (Math.max(unread3.length, 7)));
         if (overe) {
            break;
         }
      } while (overe && (Array.from(castingy.keys()).includes(`${dialog0}`)));
      for (let c = 0; c < 2; c++) {
          let awayj: Array<any> = [392, 301, 790];
         unread3 += "3 - dialog0";
         awayj.push(awayj.length);
      }
         unread3 = `${unread3.length}`;
      if ((read4.length ^ castingy.size) < 3 && (3 ^ castingy.size) < 3) {
          let largek = 0;
          let constantsU = String.fromCharCode(115,116,114,101,97,109,0);
         read4 += `${1 ^ unread3.length}`;
         largek /= Math.max(largek / (Math.max(2, 2)), 4);
         constantsU = `${largek / (Math.max(constantsU.length, 1))}`;
      }
      f_playerv = `${2 ^ f_playerv.length}`;
      break;
   }
       let macau4 = true;
       let unselectedb = 2.0;
         unselectedb -= (parseInt(`${unselectedb}`) | (macau4 ? 2 : 3));
      let hongkongj = macau4 ? !macau4 : macau4;
      do {
         macau4 = !macau4;
         if (hongkongj) {
            break;
         }
      } while (hongkongj && ((unselectedb / (Math.max(4.23, 6))) < 5.26 && !macau4));
       let chartC = 0;
      let adultI = unselectedb >= 6176350.0;
      do {
         unselectedb -= 2 / (Math.max(parseInt(`${unselectedb}`), 3));
         if (adultI) {
            break;
         }
      } while (adultI && ((4 * chartC) == 1 && 3.55 == (unselectedb / (Math.max(3.59, 5)))));
         chartC &= chartC;
         macau4 = !macau4;
      filledo = `${volumeK | areaS.length}`;
   let sportl = filledo == String.fromCharCode(57,97,104,113,114,50,116,110,0);
   do {
       let downloaderK9: Array<any> = [757, 708, 830];
       let footballU = String.fromCharCode(109,101,100,105,97,110,0);
       let downm = String.fromCharCode(105,110,112,99,98,0);
       let main_wl = String.fromCharCode(109,95,54,57,95,97,112,111,115,0);
       let moviesT = String.fromCharCode(100,115,109,111,116,105,111,110,95,117,95,56,54,0);
         footballU += `${moviesT.length % (Math.max(1, 7))}`;
      while (main_wl != footballU) {
         footballU += `${footballU.length}`;
         break;
      }
      if (main_wl == downm) {
          let logo1 = false;
          let time_ybo = String.fromCharCode(100,117,97,108,0);
          let downloadede = 4;
          let t_titleF = String.fromCharCode(97,119,97,107,101,0);
         downm += "2";
         logo1 = (30 < ((logo1 ? time_ybo.length : 30) & time_ybo.length));
         downloadede /= Math.max((String.fromCharCode(67,0) == t_titleF ? t_titleF.length : downloadede), 3);
      }
      for (let g = 0; g < 3; g++) {
          let telegramc = 3;
         footballU = `${(String.fromCharCode(108,0) == main_wl ? main_wl.length : downloaderK9.length)}`;
         telegramc ^= telegramc * telegramc;
      }
         footballU = `${downloaderK9.length | 3}`;
      for (let r = 0; r < 3; r++) {
         moviesT += `${downm.length % 2}`;
      }
      if (!main_wl.endsWith(`${downloaderK9.length}`)) {
         main_wl = `${(String.fromCharCode(77,0) == downm ? main_wl.length : downm.length)}`;
      }
      if (main_wl.endsWith(`${downloaderK9.length}`)) {
          let untickI = String.fromCharCode(100,117,115,116,0);
          let indicator6 = String.fromCharCode(99,97,114,114,105,101,114,95,53,95,49,53,0);
         main_wl += `${(String.fromCharCode(101,0) == footballU ? footballU.length : downloaderK9.length)}`;
         untickI += `${indicator6.length % 2}`;
         indicator6 += `${untickI.length & 2}`;
      }
          let minivoda = String.fromCharCode(114,119,103,116,0);
          let vietnamy = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,0);
         downm += `${moviesT.length / (Math.max(3, 1))}`;
         minivoda = `${minivoda.length}`;
         vietnamy += `${vietnamy.length}`;
      let twittera = String.fromCharCode(102,49,113,0) == moviesT;
      do {
          let refreshd = false;
          let constantsC: Array<any> = [117, 191];
          let statistics6 = 2.0;
          let editg = String.fromCharCode(103,95,56,56,95,117,110,115,104,105,102,116,0);
          let confirmationf = String.fromCharCode(115,117,114,102,97,99,101,115,95,118,95,52,51,0);
         moviesT = `${downloaderK9.length}`;
         refreshd = String.fromCharCode(106,0) == editg;
         constantsC.push(constantsC.length ^ 3);
         statistics6 *= parseFloat(`${constantsC.length - 3}`);
         editg = `${1 << (Math.min(Math.abs(parseInt(`${statistics6}`)), 5))}`;
         confirmationf += `${constantsC.length}`;
         if (twittera) {
            break;
         }
      } while ((moviesT.length < 5) && twittera);
         main_wl += `${main_wl.length % (Math.max(1, 4))}`;
       let sharedp = String.fromCharCode(98,95,54,49,95,99,104,97,114,97,99,116,101,114,115,0);
         moviesT = `${(String.fromCharCode(55,0) == sharedp ? sharedp.length : moviesT.length)}`;
      let bingE = String.fromCharCode(107,115,97,103,105,0) == main_wl;
      do {
          let projectA = 4;
          let eighteenp = String.fromCharCode(112,114,101,105,110,105,116,0);
          let phonei = String.fromCharCode(111,99,116,101,116,95,49,95,51,48,0);
          let dragU = 3;
         main_wl += `${(phonei == String.fromCharCode(68,0) ? main_wl.length : phonei.length)}`;
         projectA <<= Math.min(Math.abs(dragU + 3), 3);
         eighteenp += `${dragU % 2}`;
         if (bingE) {
            break;
         }
      } while ((footballU == main_wl) && bingE);
       let switch_9x4 = String.fromCharCode(102,95,51,50,95,115,105,103,110,97,116,117,114,101,0);
       let about5 = String.fromCharCode(101,109,117,108,97,116,111,114,0);
      filledo += `${turnw.length}`;
      if (sportl) {
         break;
      }
   } while ((filledo.startsWith(`${heartU}`)) && sportl);
   for (let g = 0; g < 3; g++) {
      logint %= Math.max((String.fromCharCode(105,0) == vertical5 ? canvasE.length : vertical5.length), 2);
   }
   for (let x = 0; x < 3; x++) {
      volumeK |= f_playerv.length;
   }
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YPressureIndex,
        });

   for (let c = 0; c < 3; c++) {
       let eventQ: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,0),String.fromCharCode(99,109,100,117,116,105,108,115,0)], [String.fromCharCode(116,112,101,108,0),String.fromCharCode(116,97,107,101,0)], [String.fromCharCode(100,105,118,105,100,111,114,115,0),String.fromCharCode(103,97,109,117,116,95,103,95,50,48,0)]]);
       let show_ = String.fromCharCode(114,111,113,118,105,100,101,111,0);
       let subsn = String.fromCharCode(114,95,52,48,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0);
       let crossU: Array<any> = [336, 717, 357];
       let sounde = String.fromCharCode(104,97,115,104,116,97,98,108,101,95,106,95,49,57,0);
         sounde += `${1 - eventQ.size}`;
          let subsa = true;
          let championf = String.fromCharCode(100,111,119,110,108,111,97,100,95,108,95,52,52,0);
         sounde += `${sounde.length}`;
         subsa = (65 > (championf.length | (!subsa ? 65 : championf.length)));
         crossU.push(subsn.length * crossU.length);
         eventQ.set(show_, eventQ.size);
      for (let w = 0; w < 2; w++) {
          let paginationP = 5;
          let gemfileP = String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,116,95,56,53,0);
         crossU.push((gemfileP == String.fromCharCode(98,0) ? gemfileP.length : crossU.length));
         paginationP -= 2 << (Math.min(3, Math.abs(paginationP)));
      }
          let appled = false;
          let commentV = 2;
         show_ += `${subsn.length}`;
         appled = 5 >= commentV;
         commentV &= 1;
       let control6: Map<any, any> = new Map([[String.fromCharCode(102,116,118,110,115,95,54,95,52,55,0),877], [String.fromCharCode(116,121,112,101,115,101,116,116,101,114,95,120,95,54,50,0),502], [String.fromCharCode(97,95,51,53,95,116,101,100,99,97,112,116,105,111,110,115,0),10]]);
       let historyI: Map<any, any> = new Map([[String.fromCharCode(102,116,118,99,108,95,107,95,52,57,0),String.fromCharCode(101,95,56,49,95,114,108,109,0)], [String.fromCharCode(115,97,110,115,0),String.fromCharCode(116,95,52,55,95,115,117,98,118,105,101,119,101,114,0)], [String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,95,48,95,53,52,0),String.fromCharCode(101,110,99,111,100,101,109,118,0)]]);
      for (let u = 0; u < 3; u++) {
         sounde += `${subsn.length}`;
      }
         control6 = new Map([[`${historyI.size}`, sounde.length]]);
      for (let t = 0; t < 3; t++) {
         subsn = "2";
      }
         subsn += `${crossU.length / 1}`;
      let expired9 = 8415677 >= eventQ.size;
      do {
         eventQ = new Map([[`${control6.size}`, show_.length]]);
         if (expired9) {
            break;
         }
      } while (((show_.length / (Math.max(5, 5))) <= 4 && 5 <= (eventQ.size / (Math.max(7, show_.length)))) && expired9);
         control6.set(`${crossU.length}`, crossU.length);
       let h_viewg = 3;
       let loginL = 2;
      while (3 > (control6.size << (Math.min(sounde.length, 3))) || 1 > (3 << (Math.min(5, Math.abs(control6.size))))) {
         control6.set(sounde, show_.length);
         break;
      }
      vertical5 += `${vertical5.length}`;
   }
   let networkl = heartU ? !heartU : heartU;
   do {
      heartU = heartU && 67 < logint;
      if (networkl) {
         break;
      }
   } while ((2 <= areaS.length) && networkl);
   while (f_playerv.endsWith(areaS)) {
      areaS += `${filledo.length}`;
      break;
   }
      save4 = [f_playerv.length / 1];
   for (let i = 0; i < 1; i++) {
       let internetn = String.fromCharCode(99,108,111,115,101,95,97,95,52,48,0);
       let statisticsY = String.fromCharCode(99,111,100,101,99,100,97,116,97,0);
       let fill9 = 1.0;
         internetn += "2";
      if (statisticsY.length < 5) {
          let logoutn: Array<any> = [String.fromCharCode(117,116,103,111,105,110,103,0), String.fromCharCode(103,97,117,115,115,95,49,95,50,50,0), String.fromCharCode(97,95,54,51,0)];
         fill9 /= Math.max(5, parseFloat(`${statisticsY.length | parseInt(`${fill9}`)}`));
         logoutn = [2 + logoutn.length];
      }
      while (fill9 > parseFloat(`${statisticsY.length}`)) {
          let default_2yc = String.fromCharCode(121,95,52,57,95,117,109,98,101,114,0);
          let orientationP: Map<any, any> = new Map([[String.fromCharCode(102,95,57,52,95,99,111,110,116,101,110,116,0),String.fromCharCode(112,97,114,116,121,0)], [String.fromCharCode(108,101,97,118,105,110,103,0),String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,119,95,55,56,0)], [String.fromCharCode(112,97,105,110,116,115,95,107,95,55,50,0),String.fromCharCode(115,116,114,111,107,101,95,48,95,54,56,0)]]);
         statisticsY += `${(default_2yc == String.fromCharCode(57,0) ? statisticsY.length : default_2yc.length)}`;
         orientationP.set(`${orientationP.size}`, 2 ^ orientationP.size);
         break;
      }
      while (!internetn.includes(statisticsY)) {
         statisticsY = `${statisticsY.length - parseInt(`${fill9}`)}`;
         break;
      }
       let downloadedE = 4.0;
       let weibor = 3.0;
      for (let y = 0; y < 3; y++) {
          let stationy = String.fromCharCode(110,101,116,101,113,95,49,95,53,54,0);
          let select5: Array<any> = [562, 485, 641];
          let infoJ = 2;
         downloadedE += 2 >> (Math.min(Math.abs(infoJ), 1));
         stationy = `${select5.length << (Math.min(Math.abs(3), 5))}`;
         select5.push(select5.length);
         infoJ += stationy.length;
      }
         fill9 += (parseFloat(`${String.fromCharCode(76,0) == statisticsY ? parseInt(`${fill9}`) : statisticsY.length}`));
         internetn += `${internetn.length}`;
      if (1 < (2 / (Math.max(9, parseInt(`${downloadedE}`)))) && 1 < (statisticsY.length ^ 2)) {
         downloadedE -= parseInt(`${fill9}`) >> (Math.min(Math.abs(3), 4));
      }
      volumeK *= statisticsY.length;
   }
   for (let x = 0; x < 2; x++) {
      turnw += `${logint}`;
   }

        if (this.showLog) console.log('trigger event id:', YUpgrade.YMutedTitle);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YSigninupTrash, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YGoogle,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YSigninupTrash);
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
       let downloadingT: Map<any, any> = new Map([[String.fromCharCode(113,95,57,53,95,115,116,114,103,108,111,98,0),true ], [String.fromCharCode(109,95,49,51,95,103,114,111,119,0),true ], [String.fromCharCode(98,105,116,114,101,118,95,51,95,50,53,0),true ]]);
    let aboutd = String.fromCharCode(117,115,101,100,95,117,95,51,50,0);
    let chartw = String.fromCharCode(120,95,54,54,95,105,110,116,114,97,120,100,115,112,0);
    let dropdownS: Array<any> = [493, 198];
    let sansY = 4.0;
    let searchbar9 = String.fromCharCode(108,97,121,101,114,115,95,121,95,50,50,0);
    let subsq = String.fromCharCode(104,117,102,102,109,97,110,95,113,95,52,53,0);
    let appleM = 4;
    let nativeI = 2;
   if (searchbar9 != String.fromCharCode(76,0)) {
       let sends = 2.0;
       let texty = String.fromCharCode(99,95,50,55,95,108,105,103,104,116,101,110,105,110,103,0);
       let kickM = String.fromCharCode(112,97,100,100,105,110,103,0);
       let targetD = String.fromCharCode(111,102,102,115,101,116,0);
       let selectA = 5.0;
      for (let z = 0; z < 3; z++) {
         sends *= (parseFloat(`${String.fromCharCode(70,0) == targetD ? targetD.length : kickM.length}`));
      }
      for (let l = 0; l < 1; l++) {
         selectA -= (texty == String.fromCharCode(83,0) ? parseInt(`${sends}`) : texty.length);
      }
      while (!targetD.endsWith(kickM)) {
         kickM = `${parseInt(`${sends}`) << (Math.min(kickM.length, 1))}`;
         break;
      }
          let ballJ: Map<any, any> = new Map([[String.fromCharCode(107,101,121,98,111,97,114,100,0),793], [String.fromCharCode(115,95,57,55,95,109,111,100,97,108,108,121,0),749], [String.fromCharCode(110,95,50,55,95,109,101,116,114,105,99,115,0),787]]);
          let assistx = String.fromCharCode(101,95,53,51,0);
         selectA /= Math.max(2, 1);
         ballJ = new Map([[`${ballJ.size}`, 3]]);
         assistx += `${ballJ.size}`;
      while (kickM.length > 1) {
         kickM = `${(kickM == String.fromCharCode(99,0) ? kickM.length : parseInt(`${sends}`))}`;
         break;
      }
         selectA -= (targetD == String.fromCharCode(101,0) ? targetD.length : parseInt(`${selectA}`));
       let selectionF = String.fromCharCode(118,95,48,95,111,118,101,114,117,115,101,0);
      while (!kickM.endsWith(`${sends}`)) {
          let invite0 = String.fromCharCode(108,111,111,112,98,97,99,107,95,102,95,49,49,0);
          let bannerT = 4.0;
          let bingn = 1.0;
         sends -= parseFloat(`${invite0.length}`);
         invite0 = `${parseInt(`${bingn}`) & parseInt(`${bannerT}`)}`;
         bannerT *= parseFloat(`${parseInt(`${bingn}`)}`);
         break;
      }
      let time_sR = 6309163 <= texty.length;
      do {
          let otherJ: Array<any> = [String.fromCharCode(111,112,117,115,108,97,99,105,110,103,0), String.fromCharCode(114,101,97,115,111,110,95,121,95,50,52,0)];
          let appsM = String.fromCharCode(97,100,100,120,0);
          let statsg: Array<any> = [194, 482];
         texty = `${otherJ.length & 1}`;
         otherJ.push(2 & statsg.length);
         appsM += `${1 & appsM.length}`;
         statsg.push(2 | appsM.length);
         if (time_sR) {
            break;
         }
      } while (time_sR && (texty.includes(selectionF)));
       let darkX: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,101,118,100,110,115,0),238], [String.fromCharCode(99,102,116,115,116,0),714], [String.fromCharCode(111,117,116,102,105,108,101,0),474]]);
         kickM = `${(selectionF == String.fromCharCode(122,0) ? selectionF.length : darkX.size)}`;
         selectA *= parseInt(`${sends}`);
      let sharedV = selectionF.length <= 6609968;
      do {
          let editp = 5.0;
          let benefit6 = 2.0;
          let notificationm: Array<any> = [331, 801, 211];
          let indicatorA = 4;
         selectionF = `${parseInt(`${editp}`)}`;
         benefit6 /= Math.max(indicatorA & 1, 3);
         notificationm.push(parseInt(`${benefit6}`));
         indicatorA &= 1 % (Math.max(6, parseInt(`${benefit6}`)));
         if (sharedV) {
            break;
         }
      } while ((5 > (4 >> (Math.min(5, Math.abs(darkX.size)))) && 3 > (darkX.size >> (Math.min(Math.abs(4), 1)))) && sharedV);
      while (darkX.get(`${sends}`) == null) {
         darkX.set(targetD, 3);
         break;
      }
      let appsb = targetD == String.fromCharCode(118,95,100,57,112,108,57,51,52,0);
      do {
         targetD = `${parseInt(`${selectA}`) / 2}`;
         if (appsb) {
            break;
         }
      } while ((targetD != String.fromCharCode(69,0) && selectionF != String.fromCharCode(88,0)) && appsb);
      aboutd += `${(String.fromCharCode(105,0) == subsq ? appleM : subsq.length)}`;
   }
   let sina7 = 7132568 >= aboutd.length;
   do {
      aboutd += `${searchbar9.length | 1}`;
      if (sina7) {
         break;
      }
   } while (sina7 && (5 <= downloadingT.size));
   while (1 < (appleM ^ 4) || (4 ^ appleM) < 5) {
      appleM *= 2;
      break;
   }
      downloadingT.set(`${aboutd}`, downloadingT.size);
      downloadingT = new Map([[chartw, (String.fromCharCode(107,0) == searchbar9 ? searchbar9.length : chartw.length)]]);

        AnalyticsUtil.onEventWithMap(YUpgrade.YMegaphone, {});

      dropdownS = [parseInt(`${sansY}`)];
   if (1 == (downloadingT.size * 3) && (aboutd.length * downloadingT.size) == 3) {
       let eighteenK: Map<any, any> = new Map([[String.fromCharCode(100,105,109,105,115,115,0),false ], [String.fromCharCode(104,95,51,54,95,99,121,97,110,0),true ]]);
       let desch = 1;
       let matchesk = 3.0;
      if ((5.33 + matchesk) > 1.32) {
          let overW = String.fromCharCode(109,95,50,49,95,114,101,118,101,97,108,0);
          let read3 = 0.0;
          let subsH: Array<any> = [41, 751, 158];
          let greyC = String.fromCharCode(102,95,50,52,95,112,101,114,102,111,114,109,0);
          let homer = String.fromCharCode(107,95,57,53,95,115,101,110,100,109,115,103,0);
         desch <<= Math.min(2, Math.abs(parseInt(`${read3}`) * 2));
         overW += `${homer.length * subsH.length}`;
         read3 += parseFloat(`${overW.length}`);
         subsH.push(overW.length % (Math.max(homer.length, 6)));
         greyC = "1";
      }
         matchesk += desch;
      if (Array.from(eighteenK.values()).includes(desch)) {
         desch <<= Math.min(Math.abs(1 % (Math.max(2, desch))), 3);
      }
          let filledk = String.fromCharCode(115,111,108,105,100,95,115,95,54,51,0);
          let referrerK = 4.0;
         matchesk -= parseInt(`${referrerK}`);
         filledk += `${3 & filledk.length}`;
         referrerK *= (parseFloat(`${filledk == String.fromCharCode(55,0) ? filledk.length : filledk.length}`));
      let handleru = 6775379 >= eighteenK.size;
      do {
         eighteenK.set(`${desch}`, parseInt(`${matchesk}`));
         if (handleru) {
            break;
         }
      } while (handleru && ((5 | eighteenK.size) == 4 || (5 | eighteenK.size) == 1));
          let pingq: Map<any, any> = new Map([[String.fromCharCode(115,95,52,56,95,111,112,116,105,109,105,115,116,105,99,0),String.fromCharCode(100,105,114,101,99,116,111,114,105,101,115,95,98,95,54,49,0)], [String.fromCharCode(99,99,105,116,116,0),String.fromCharCode(101,97,103,97,105,110,95,106,95,55,55,0)], [String.fromCharCode(101,120,105,115,116,105,110,103,95,49,95,56,55,0),String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,102,95,53,54,0)]]);
         matchesk -= eighteenK.size + parseInt(`${matchesk}`);
         pingq.set(`${pingq.size}`, pingq.size);
      while (eighteenK.get(`${desch}`) != null) {
         eighteenK.set(`${desch}`, eighteenK.size << (Math.min(5, Math.abs(desch))));
         break;
      }
      while (3 >= desch) {
          let targetDK = 3.0;
          let foundU = String.fromCharCode(102,95,53,51,95,114,107,109,112,112,0);
          let mapping8: Array<any> = [452, 451, 581];
          let nextg = String.fromCharCode(119,105,110,116,104,114,101,97,100,0);
         matchesk += 2;
         targetDK *= parseFloat(`${3 * parseInt(`${targetDK}`)}`);
         foundU += `${3 + foundU.length}`;
         mapping8.push(foundU.length);
         nextg += "2";
         break;
      }
         eighteenK.set(`${desch}`, parseInt(`${matchesk}`));
      aboutd += "3";
   }
      subsq += `${downloadingT.size}`;
   for (let y = 0; y < 1; y++) {
       let c_imageA = String.fromCharCode(121,95,55,56,95,109,112,101,103,97,117,100,105,111,116,97,98,0);
       let placeholderG = String.fromCharCode(102,114,111,109,98,105,110,100,0);
       let fastforwardV = String.fromCharCode(106,95,56,49,95,103,101,116,116,105,109,101,0);
       let humidity8 = 2;
      while (placeholderG.includes(`${c_imageA.length}`)) {
         c_imageA += `${3 >> (Math.min(4, Math.abs(humidity8)))}`;
         break;
      }
         c_imageA += `${placeholderG.length << (Math.min(c_imageA.length, 3))}`;
       let splashw = 2.0;
       let redirecta = 0.0;
      let watchy = 8442313 <= fastforwardV.length;
      do {
         fastforwardV = "2";
         if (watchy) {
            break;
         }
      } while (((1.49 / (Math.max(4, splashw))) <= 1.42) && watchy);
          let modelsr = 2;
          let tooltipsr = 1.0;
         splashw += parseFloat(`${modelsr - humidity8}`);
         modelsr <<= Math.min(Math.abs(parseInt(`${tooltipsr}`)), 5);
       let langkeyy: Array<any> = [977, 944, 157];
       let typesk: Array<any> = [37, 960, 914];
         fastforwardV = `${parseInt(`${splashw}`) * langkeyy.length}`;
      while (1.7 < redirecta) {
          let carouselM: Map<any, any> = new Map([[String.fromCharCode(97,98,103,114,0),403], [String.fromCharCode(100,101,108,97,116,101,100,95,107,95,51,54,0),944], [String.fromCharCode(118,95,51,52,95,112,97,103,101,111,117,116,0),436]]);
          let pressureR = String.fromCharCode(114,101,103,105,115,116,101,114,101,100,95,100,95,51,53,0);
         placeholderG += `${parseInt(`${splashw}`) / 2}`;
         carouselM = new Map([[`${carouselM.size}`, carouselM.size]]);
         pressureR = `${(String.fromCharCode(74,0) == pressureR ? carouselM.size : pressureR.length)}`;
         break;
      }
      let splashP = 5529161.0 >= splashw;
      do {
         splashw += (parseFloat(`${String.fromCharCode(117,0) == fastforwardV ? humidity8 : fastforwardV.length}`));
         if (splashP) {
            break;
         }
      } while (splashP && (4.1 == (splashw - parseFloat(`${humidity8}`)) && 3 == (parseInt(`${splashw}`) - humidity8)));
      while (1 < (5 << (Math.min(4, langkeyy.length))) && 3 < (5 << (Math.min(3, typesk.length)))) {
         langkeyy = [parseInt(`${splashw}`) ^ 3];
         break;
      }
         humidity8 %= Math.max(1, placeholderG.length << (Math.min(3, langkeyy.length)));
         humidity8 ^= 2 >> (Math.min(Math.abs(parseInt(`${splashw}`)), 1));
      subsq += "2";
   }
      nativeI ^= 2;
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YTypes,
        });

   if (4 < (aboutd.length - 5)) {
      aboutd += `${downloadingT.size}`;
   }
      subsq += `${searchbar9.length}`;
      chartw = `${dropdownS.length & 1}`;
   if ((5.74 + sansY) <= 5.78 && (5.74 + sansY) <= 2.73) {
      nativeI <<= Math.min(Math.abs(downloadingT.size), 4);
   }
      searchbar9 += `${(String.fromCharCode(97,0) == searchbar9 ? searchbar9.length : downloadingT.size)}`;

        if (this.showLog) console.log('trigger event id:', YUpgrade.YMegaphone);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YStatistics, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YTypes,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YStatistics);
    }


    
    static playlistViewsAnalytics = () => {
       let trophyj = 3.0;
    let guider = String.fromCharCode(117,100,112,108,105,116,101,95,98,95,52,51,0);
    let button6 = 5.0;
    let appleW = String.fromCharCode(121,95,51,48,95,104,105,98,105,116,0);
    let stationsh = 1.0;
    let commentM = String.fromCharCode(118,105,97,98,108,101,0);
    let register_bwS: Array<any> = [512, 926];
    let loadingO: Array<any> = [168, 597];
    let larget = 4.0;
    let arrown = String.fromCharCode(102,95,54,52,95,120,118,97,103,0);
    let corner3 = String.fromCharCode(112,97,114,97,109,101,116,101,114,95,110,95,57,48,0);
    let gmailS = false;
    let promotionA = 0;
       let line1 = String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,105,95,56,56,0);
       let pointN = 1.0;
         pointN *= 1 >> (Math.min(5, line1.length));
       let streaming0 = String.fromCharCode(115,116,115,122,0);
      for (let j = 0; j < 3; j++) {
          let tooltipss = String.fromCharCode(116,95,50,56,95,115,112,101,101,99,104,0);
         pointN -= tooltipss.length;
      }
      if (!line1.startsWith(`${pointN}`)) {
         pointN += streaming0.length;
      }
      if (streaming0.length > pointN) {
         streaming0 += `${line1.length / (Math.max(2, 9))}`;
      }
         streaming0 = `${parseInt(`${pointN}`)}`;
      loadingO.push(parseInt(`${stationsh}`) % 1);
   while ((parseInt(`${stationsh}`) / 3) <= 4 && 5.73 <= (parseFloat(`${appleW.length}`) / (Math.max(3, stationsh)))) {
      stationsh -= parseFloat(`${2}`);
      break;
   }
      loadingO = [parseInt(`${button6}`)];
      arrown = `${1 ^ loadingO.length}`;
   while (guider.startsWith(`${trophyj}`)) {
      trophyj += 3 % (Math.max(parseInt(`${larget}`), 9));
      break;
   }
   while ((parseFloat(`${loadingO.length}`) - larget) >= 5.19 || 4 >= (4 | loadingO.length)) {
      larget /= Math.max(parseFloat(`${commentM.length % (Math.max(3, 10))}`), 5);
      break;
   }
   while (!corner3.includes(`${appleW.length}`)) {
      appleW = `${parseInt(`${stationsh}`) % 2}`;
      break;
   }

        AnalyticsUtil.onEventWithMap(YUpgrade.YPressure, {});

      register_bwS.push(1);
       let settingx = String.fromCharCode(97,109,98,105,101,110,116,0);
       let gesturesH = String.fromCharCode(116,112,101,108,95,119,95,50,51,0);
       let reminderl = String.fromCharCode(115,104,97,114,100,0);
         reminderl += `${settingx.length >> (Math.min(gesturesH.length, 5))}`;
         settingx += `${(String.fromCharCode(51,0) == settingx ? settingx.length : gesturesH.length)}`;
      let membership4 = String.fromCharCode(118,112,122,0) == reminderl;
      do {
         reminderl = `${gesturesH.length >> (Math.min(reminderl.length, 5))}`;
         if (membership4) {
            break;
         }
      } while ((4 < reminderl.length) && membership4);
      for (let x = 0; x < 1; x++) {
         reminderl += `${reminderl.length + 1}`;
      }
      if (2 <= reminderl.length) {
         gesturesH += `${reminderl.length ^ 2}`;
      }
         reminderl = "3";
         reminderl = `${reminderl.length + gesturesH.length}`;
          let sourcef = true;
          let zhengpianO = true;
         reminderl = `${(settingx.length * (zhengpianO ? 2 : 5))}`;
         sourcef = (sourcef ? !sourcef : !sourcef);
         zhengpianO = (!sourcef ? !sourcef : sourcef);
      let circleR = gesturesH == String.fromCharCode(52,118,56,103,0);
      do {
         gesturesH = `${1 >> (Math.min(3, settingx.length))}`;
         if (circleR) {
            break;
         }
      } while ((1 == gesturesH.length) && circleR);
      larget += parseFloat(`${commentM.length}`);
       let calendarl = 0.0;
       let adults = 4.0;
       let formZ = 5.0;
       let macaua = String.fromCharCode(112,95,54,48,95,114,101,97,100,0);
       let langM = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,48,95,50,48,0);
         calendarl += parseInt(`${formZ}`);
       let firebaseE = String.fromCharCode(102,95,49,48,95,115,116,114,101,97,109,115,0);
       let blacklistm = String.fromCharCode(105,95,56,55,95,116,97,100,100,0);
         blacklistm = "3";
         firebaseE += `${langM.length}`;
         calendarl *= parseInt(`${calendarl}`);
         blacklistm += `${langM.length / 3}`;
         blacklistm += `${macaua.length << (Math.min(4, blacklistm.length))}`;
       let alertN: Map<any, any> = new Map([[String.fromCharCode(100,111,117,103,108,97,115,95,102,95,57,54,0),8], [String.fromCharCode(121,95,52,52,95,97,112,112,114,111,120,105,109,97,116,101,0),385]]);
      loadingO.push(loadingO.length | 2);
      adults += parseFloat(`${parseInt(`${adults}`) & parseInt(`${adults}`)}`);
      register_bwS = [parseInt(`${trophyj}`) * 1];
   while (5 < arrown.length) {
       let chinae = String.fromCharCode(111,112,101,110,101,114,95,107,95,50,48,0);
       let collectionw = 3.0;
      for (let q = 0; q < 2; q++) {
          let penaltyA = String.fromCharCode(104,97,118,105,110,103,0);
          let reducerg = true;
         chinae = `${penaltyA.length | 3}`;
         penaltyA += `${((reducerg ? 3 : 3))}`;
      }
      while ((3 >> (Math.min(2, chinae.length))) < 1 || 3 < (parseInt(`${collectionw}`) - chinae.length)) {
          let shrinka = 1.0;
          let entryv: Array<any> = [509, 807, 404];
          let clockh: Map<any, any> = new Map([[String.fromCharCode(102,111,114,98,105,100,100,101,110,0),801], [String.fromCharCode(98,97,116,99,104,101,100,95,99,95,56,48,0),866]]);
          let main_j0 = String.fromCharCode(105,95,50,55,0);
          let policyg = 1.0;
         chinae = `${chinae.length << (Math.min(Math.abs(1), 5))}`;
         shrinka *= entryv.length;
         entryv.push(2 * parseInt(`${policyg}`));
         clockh.set(main_j0, (main_j0 == String.fromCharCode(73,0) ? main_j0.length : parseInt(`${policyg}`)));
         break;
      }
      while ((chinae.length + 4) < 5) {
         collectionw -= chinae.length;
         break;
      }
         collectionw *= (chinae == String.fromCharCode(122,0) ? parseInt(`${collectionw}`) : chinae.length);
       let benefits = 3;
      for (let c = 0; c < 1; c++) {
         benefits -= chinae.length >> (Math.min(1, Math.abs(parseInt(`${collectionw}`))));
      }
      arrown += `${arrown.length}`;
      break;
   }
   let lightw = guider.length <= 7287068;
   do {
      guider += `${parseInt(`${stationsh}`) ^ commentM.length}`;
      if (lightw) {
         break;
      }
   } while (lightw && (5.65 < button6));
   while (1 == appleW.length) {
      appleW += `${parseInt(`${button6}`) | 1}`;
      break;
   }
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YFastforwardTicked,
        });

   if (2.67 <= (larget * 1.45)) {
      larget *= parseFloat(`${loadingO.length | parseInt(`${trophyj}`)}`);
   }
       let controlb: Array<any> = [612, 404, 336];
       let crossh: Array<any> = [939, 777, 172];
       let assistw = 3.0;
      while ((assistw + parseFloat(`${controlb.length}`)) < 1.21 || (1.21 + assistw) < 5.58) {
         assistw /= Math.max(4, parseFloat(`${parseInt(`${assistw}`) & crossh.length}`));
         break;
      }
       let loginu = String.fromCharCode(112,114,101,118,101,110,116,95,119,95,49,56,0);
      while ((controlb.length * loginu.length) <= 1 || (loginu.length * controlb.length) <= 1) {
         controlb.push(1);
         break;
      }
      if (2.26 == (assistw / (Math.max(4.10, 7))) || (parseInt(`${assistw}`) / 4) == 5) {
          let actionsr: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,54,95,56,0),262], [String.fromCharCode(122,95,52,56,95,105,110,116,109,97,116,104,0),961]]);
          let feedbackG = 4.0;
          let common2 = 4;
         loginu += `${controlb.length & parseInt(`${assistw}`)}`;
         actionsr.set(`${common2}`, actionsr.size / (Math.max(5, common2)));
         feedbackG -= parseFloat(`${parseInt(`${feedbackG}`) ^ 1}`);
      }
         controlb = [parseInt(`${assistw}`)];
      while (loginu.startsWith(`${assistw}`)) {
         assistw += (parseFloat(`${loginu == String.fromCharCode(116,0) ? loginu.length : parseInt(`${assistw}`)}`));
         break;
      }
      for (let b = 0; b < 3; b++) {
         crossh = [controlb.length];
      }
      for (let j = 0; j < 1; j++) {
          let sellu = String.fromCharCode(100,101,105,110,118,101,114,116,95,117,95,55,52,0);
          let philippines6: Array<any> = [String.fromCharCode(115,117,98,104,101,97,100,101,114,95,105,95,48,0), String.fromCharCode(118,100,115,111,95,99,95,52,0), String.fromCharCode(105,100,108,105,115,116,0)];
          let streamingt = 2.0;
          let mutedx: Array<any> = [880, 960, 439];
          let fastt: Map<any, any> = new Map([[String.fromCharCode(121,111,102,102,115,101,116,95,121,95,52,52,0),String.fromCharCode(109,117,116,101,120,0)], [String.fromCharCode(105,109,112,111,114,116,101,100,95,107,95,50,49,0),String.fromCharCode(112,114,105,109,97,108,105,116,121,0)], [String.fromCharCode(98,114,111,119,115,101,95,50,95,49,56,0),String.fromCharCode(115,95,54,49,95,116,105,99,107,101,114,115,0)]]);
         assistw += parseFloat(`${parseInt(`${streamingt}`)}`);
         sellu = `${(String.fromCharCode(49,0) == sellu ? sellu.length : mutedx.length)}`;
         philippines6.push(fastt.size);
         streamingt -= parseFloat(`${1 + sellu.length}`);
         mutedx = [mutedx.length];
         fastt = new Map([[`${philippines6.length}`, (sellu == String.fromCharCode(108,0) ? philippines6.length : sellu.length)]]);
      }
      for (let k = 0; k < 1; k++) {
         crossh = [2 << (Math.min(1, loginu.length))];
      }
      button6 += parseFloat(`${parseInt(`${assistw}`)}`);
      appleW += "2";
   if (trophyj >= 3.94) {
       let sortL = String.fromCharCode(99,114,111,112,112,101,100,0);
       let orangec = String.fromCharCode(121,117,121,118,116,111,121,117,118,0);
       let default_0E: Map<any, any> = new Map([[String.fromCharCode(101,95,56,95,101,114,112,105,99,0),3], [String.fromCharCode(104,101,108,100,95,52,95,56,53,0),773]]);
       let update_oB = false;
       let baiduM = true;
      while (baiduM) {
         baiduM = sortL.length < 1;
         break;
      }
      if (update_oB && (1 ^ default_0E.size) <= 1) {
          let mathp = 2.0;
          let selectP: Map<any, any> = new Map([[String.fromCharCode(119,95,49,49,95,119,111,114,107,108,111,97,100,0),581], [String.fromCharCode(105,109,112,108,95,52,95,53,51,0),584]]);
          let foundB: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,108,97,100,100,101,114,115,116,101,112,0),297], [String.fromCharCode(100,105,114,97,99,0),806], [String.fromCharCode(115,110,97,112,112,121,0),292]]);
          let unselectedm = String.fromCharCode(116,95,49,49,95,122,111,110,101,115,0);
          let i_unlocku = 5.0;
         update_oB = !update_oB;
         mathp *= parseInt(`${mathp}`);
         selectP.set(unselectedm, 3 & unselectedm.length);
         foundB.set(`${mathp}`, foundB.size);
         i_unlocku += parseFloat(`${parseInt(`${i_unlocku}`)}`);
      }
      if (sortL.length > 3) {
         orangec += `${(default_0E.size - (update_oB ? 5 : 2))}`;
      }
       let d_centery = String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,121,95,57,57,0);
         update_oB = !update_oB;
      for (let q = 0; q < 3; q++) {
         orangec += `${default_0E.size}`;
      }
          let downloadingx = String.fromCharCode(111,95,55,48,95,118,111,116,101,114,0);
         baiduM = (49 >= ((!baiduM ? orangec.length : 49) ^ orangec.length));
         downloadingx += `${downloadingx.length >> (Math.min(Math.abs(1), 2))}`;
      for (let x = 0; x < 1; x++) {
          let tickedZ = String.fromCharCode(105,110,115,116,114,95,51,95,49,48,0);
          let heartv: Map<any, any> = new Map([[String.fromCharCode(97,114,110,114,0),727], [String.fromCharCode(115,108,105,99,101,116,121,112,101,95,115,95,49,56,0),118], [String.fromCharCode(115,111,97,99,99,101,112,116,95,53,95,50,56,0),587]]);
          let homeS = String.fromCharCode(97,110,103,108,101,100,95,48,95,53,54,0);
          let righty = true;
         orangec += `${default_0E.size}`;
         tickedZ += `${heartv.size & tickedZ.length}`;
         heartv = new Map([[`${righty}`, 2]]);
         homeS = `${3 + homeS.length}`;
      }
       let acceptedN = String.fromCharCode(109,117,108,116,105,101,110,100,0);
      for (let h = 0; h < 2; h++) {
         update_oB = sortL.length < 78 && orangec.length < 78;
      }
          let options2 = String.fromCharCode(116,95,54,51,95,111,114,112,104,97,110,0);
         baiduM = sortL == d_centery;
         options2 += `${options2.length}`;
      let bufferK = String.fromCharCode(57,121,116,97,100,115,0) == sortL;
      do {
         sortL += `${default_0E.size}`;
         if (bufferK) {
            break;
         }
      } while (((default_0E.size & 1) < 3 || (1 & default_0E.size) < 4) && bufferK);
          let switch_ba = 4;
          let basketballk = 5;
         sortL = `${sortL.length}`;
         switch_ba <<= Math.min(5, Math.abs(basketballk));
       let streamingO = 3.0;
      for (let w = 0; w < 3; w++) {
         d_centery = `${3 << (Math.min(1, acceptedN.length))}`;
      }
      trophyj += 3 << (Math.min(2, corner3.length));
   }
       let redirectM = String.fromCharCode(115,116,117,98,0);
      while (redirectM.length >= redirectM.length) {
         redirectM += `${redirectM.length}`;
         break;
      }
      while (redirectM != redirectM) {
          let styleM = true;
          let suggestion2 = String.fromCharCode(97,95,53,54,95,99,116,108,111,117,116,112,117,116,0);
          let grey1 = 4.0;
          let slider_ = 4.0;
          let switch_lkO = 1.0;
         redirectM += `${(parseInt(`${slider_}`) << (Math.min(3, Math.abs((styleM ? 4 : 3)))))}`;
         styleM = suggestion2.length <= parseInt(`${grey1}`);
         suggestion2 += `${suggestion2.length}`;
         grey1 += parseFloat(`${2 % (Math.max(8, suggestion2.length))}`);
         slider_ -= parseInt(`${switch_lkO}`) >> (Math.min(2, Math.abs(3)));
         switch_lkO /= Math.max(3, parseInt(`${grey1}`) & 3);
         break;
      }
          let side4 = String.fromCharCode(99,111,117,110,116,114,121,0);
          let firebaset = 2.0;
          let windp = 1.0;
         redirectM = `${parseInt(`${firebaset}`) ^ redirectM.length}`;
         side4 = "3";
         firebaset += parseFloat(`${1}`);
         windp /= Math.max(side4.length & parseInt(`${windp}`), 3);
      guider += `${parseInt(`${button6}`) + corner3.length}`;
       let sentryV = String.fromCharCode(106,95,55,51,95,112,116,114,109,97,112,0);
       let networkr = String.fromCharCode(101,95,54,57,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0);
          let r_playerj = true;
          let alertv: Map<any, any> = new Map([[String.fromCharCode(97,117,114,97,95,108,95,56,53,0),true ], [String.fromCharCode(100,105,102,102,101,114,101,110,116,95,109,95,57,49,0),true ]]);
         sentryV += `${((r_playerj ? 1 : 4) % 1)}`;
         r_playerj = 73 == alertv.size;
         alertv.set(`${alertv.size}`, alertv.size);
      for (let k = 0; k < 1; k++) {
         networkr = `${(sentryV == String.fromCharCode(66,0) ? networkr.length : sentryV.length)}`;
      }
      while (2 > sentryV.length) {
         sentryV = `${networkr.length}`;
         break;
      }
      for (let c = 0; c < 2; c++) {
         sentryV += `${sentryV.length}`;
      }
         networkr = `${networkr.length}`;
         sentryV = `${networkr.length}`;
      button6 += parseFloat(`${guider.length}`);
   while (!corner3.endsWith(`${button6}`)) {
      button6 -= parseFloat(`${register_bwS.length - loadingO.length}`);
      break;
   }

        if (this.showLog) console.log('trigger event id:', YUpgrade.YPressure);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YPlusPhone, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YFastforwardTicked,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YPlusPhone);
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YFloating, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YMember,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YFloating);
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YBottomShow, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YMember,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YBottomShow);
    }


    
    static userCenterLoginSuccessTimesAnalytics = () => {
       let mailQ = 4;
    let whistleA = String.fromCharCode(104,95,56,95,114,101,97,100,102,114,97,109,101,0);
    let favoriteQ = String.fromCharCode(98,105,116,115,104,105,102,116,0);
    let refresht = 0.0;
    let filledu = String.fromCharCode(102,105,110,110,101,121,0);
    let containerj = false;
    let incidentj = String.fromCharCode(113,95,48,95,112,97,114,97,108,108,97,120,0);
    let modalN = String.fromCharCode(104,119,102,114,97,109,101,95,99,95,49,0);
    let favoriteJ = 0.0;
   let thailandD = modalN.length >= 8794224;
   do {
      modalN = `${filledu.length + modalN.length}`;
      if (thailandD) {
         break;
      }
   } while ((filledu.length > 1 || modalN.length > 1) && thailandD);
   let agreementr = refresht >= 8557823.0;
   do {
       let delegate_3kj: Array<any> = [970, 80];
       let layoutu = 4.0;
         delegate_3kj = [2];
          let commonP = 1;
          let dragL = 3.0;
         delegate_3kj = [delegate_3kj.length];
         commonP &= commonP / 3;
         dragL -= 1;
         delegate_3kj.push(delegate_3kj.length * 1);
      while (delegate_3kj.includes(layoutu)) {
         delegate_3kj = [delegate_3kj.length << (Math.min(Math.abs(2), 4))];
         break;
      }
         layoutu /= Math.max(delegate_3kj.length % 1, 1);
      while (parseInt(`${layoutu}`) >= delegate_3kj.length) {
          let with_z6l = 5;
         layoutu -= parseInt(`${layoutu}`) & 2;
         with_z6l += 3 | with_z6l;
         break;
      }
      refresht += (parseFloat(`${parseInt(`${layoutu}`) % (Math.max(8, (containerj ? 2 : 5)))}`));
      if (agreementr) {
         break;
      }
   } while (agreementr && (4.74 >= (4.55 / (Math.max(3, refresht))) || 4 >= (modalN.length * 3)));
   if (4 > incidentj.length) {
       let progressJ = String.fromCharCode(103,95,56,55,95,112,97,115,115,99,111,100,101,0);
       let videow: Array<any> = [String.fromCharCode(98,95,55,53,95,112,111,112,117,108,97,116,101,100,0), String.fromCharCode(114,101,110,100,101,114,95,114,95,53,50,0)];
       let string9: Array<any> = [579, 344];
       let questh = true;
       let stepl = String.fromCharCode(113,95,56,52,95,97,117,100,105,111,112,114,111,99,0);
      while (questh) {
         questh = stepl.length < 79;
         break;
      }
         questh = !questh && stepl.length >= 20;
      while (2 <= (videow.length ^ 5) || 5 <= videow.length) {
         questh = 97 < progressJ.length;
         break;
      }
         stepl = `${videow.length}`;
          let recommendationJ = 0.0;
          let whatsapps = 0;
         videow = [stepl.length];
         recommendationJ /= Math.max(5, whatsapps);
         whatsapps -= whatsapps * 2;
          let malaysiaP = String.fromCharCode(99,114,97,115,104,101,100,0);
          let fastforwarda = String.fromCharCode(101,109,97,105,108,95,56,95,50,48,0);
          let sendN = String.fromCharCode(113,95,55,53,95,107,98,100,119,105,110,0);
         videow = [2];
         malaysiaP += `${(malaysiaP == String.fromCharCode(80,0) ? malaysiaP.length : fastforwarda.length)}`;
         fastforwarda = `${fastforwarda.length}`;
         sendN += `${(sendN == String.fromCharCode(102,0) ? sendN.length : malaysiaP.length)}`;
         string9.push(1 & videow.length);
      while (2 < stepl.length) {
          let emojiR = String.fromCharCode(101,114,97,115,105,110,103,0);
          let logot = 1.0;
          let unselectedq: Array<any> = [591, 865, 906];
          let zhuboo = String.fromCharCode(112,95,49,55,95,110,101,116,119,111,114,107,115,0);
          let ewardedu: Map<any, any> = new Map([[String.fromCharCode(102,102,109,97,108,0),true ], [String.fromCharCode(120,99,98,103,114,97,98,95,51,95,52,57,0),true ]]);
         stepl = `${((questh ? 5 : 4))}`;
         emojiR += `${emojiR.length}`;
         logot *= (parseFloat(`${emojiR == String.fromCharCode(80,0) ? unselectedq.length : emojiR.length}`));
         unselectedq.push(emojiR.length);
         zhuboo += `${zhuboo.length}`;
         ewardedu.set(zhuboo, zhuboo.length);
         break;
      }
       let datas = String.fromCharCode(114,101,115,117,109,101,95,115,95,52,0);
       let headerb = String.fromCharCode(97,109,116,0);
      if (questh) {
         questh = string9.length > 85 && 85 > stepl.length;
      }
      for (let g = 0; g < 1; g++) {
          let liveH = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,118,95,49,55,0);
          let untickq = true;
          let soundY: Map<any, any> = new Map([[String.fromCharCode(107,95,55,54,0),41], [String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,0),343]]);
          let modew = 5;
          let connectionW = 0.0;
         questh = string9.includes(questh);
         liveH = `${modew | 1}`;
         untickq = connectionW == 15.71;
         soundY = new Map([[`${modew}`, modew]]);
         connectionW *= parseFloat(`${liveH.length | modew}`);
      }
         headerb = `${(progressJ == String.fromCharCode(80,0) ? videow.length : progressJ.length)}`;
      for (let k = 0; k < 2; k++) {
          let eighteenU = String.fromCharCode(102,108,111,97,116,115,0);
          let favoriteF: Array<any> = [329, 717];
          let commonB = String.fromCharCode(117,112,100,97,116,101,115,95,55,95,56,53,0);
          let long_pF = 2.0;
          let miniE: Map<any, any> = new Map([[String.fromCharCode(110,99,114,121,112,116,105,111,110,0),705], [String.fromCharCode(109,111,100,101,99,111,115,116,115,0),319], [String.fromCharCode(112,111,108,108,115,0),640]]);
         datas += `${eighteenU.length}`;
         eighteenU = "3";
         favoriteF.push(parseInt(`${long_pF}`));
         commonB = `${commonB.length + parseInt(`${long_pF}`)}`;
         miniE = new Map([[`${miniE.size}`, 3]]);
      }
      while ((videow.length % (Math.max(4, 9))) == 2 && 3 == (string9.length % 4)) {
         string9.push(string9.length);
         break;
      }
         datas += `${string9.length}`;
      containerj = videow.length <= modalN.length;
   }
       let becomeW: Map<any, any> = new Map([[String.fromCharCode(102,111,110,116,99,111,110,102,105,103,0),52], [String.fromCharCode(102,97,100,101,95,120,95,55,49,0),12], [String.fromCharCode(112,116,115,101,115,95,115,95,56,56,0),24]]);
       let annerT = String.fromCharCode(111,98,106,101,99,116,115,0);
       let other4 = true;
         becomeW.set(`${other4}`, ((other4 ? 1 : 4) << (Math.min(Math.abs(becomeW.size), 4))));
          let update_27 = 1.0;
         annerT = `${2 - becomeW.size}`;
         update_27 += parseInt(`${update_27}`) - 2;
      while (2 > annerT.length) {
         annerT = `${becomeW.size / 3}`;
         break;
      }
          let moreR: Map<any, any> = new Map([[String.fromCharCode(120,95,54,52,95,109,97,100,101,0),815], [String.fromCharCode(122,95,55,56,95,99,117,114,116,97,105,110,0),228]]);
         other4 = becomeW.get(`${other4}`) == null;
         moreR.set(`${moreR.size}`, moreR.size);
         annerT = `${becomeW.size - 3}`;
       let default_pO = String.fromCharCode(112,111,105,115,115,111,110,95,113,95,56,54,0);
       let awayq = String.fromCharCode(115,101,110,100,118,95,103,95,51,55,0);
      if (awayq.length <= 1) {
         awayq += `${becomeW.size % (Math.max(annerT.length, 10))}`;
      }
      if (!default_pO.endsWith(`${becomeW.size}`)) {
         default_pO = `${default_pO.length}`;
      }
         becomeW.set(`${other4}`, 2);
      modalN = `${mailQ & 2}`;
      filledu += `${mailQ | parseInt(`${favoriteJ}`)}`;
   while (incidentj.length >= filledu.length) {
      filledu += "2";
      break;
   }

        AnalyticsUtil.onEventWithMap(YUpgrade.YRefresh, {});

      whistleA = `${mailQ}`;
   if (incidentj.startsWith(`${modalN.length}`)) {
      incidentj = "2";
   }
   for (let u = 0; u < 2; u++) {
       let ballH = 1.0;
       let tick6 = String.fromCharCode(106,95,53,57,95,99,106,112,101,103,0);
         ballH += (parseFloat(`${String.fromCharCode(104,0) == tick6 ? parseInt(`${ballH}`) : tick6.length}`));
       let full5 = 4.0;
       let layoutb = 3.0;
      while (5.31 > (4.24 - ballH)) {
          let resulth = 4.0;
          let black4 = String.fromCharCode(114,101,116,97,105,110,95,98,95,56,53,0);
          let teamy = false;
         ballH -= parseFloat(`${2 + parseInt(`${ballH}`)}`);
         resulth += black4.length % 1;
         black4 += `${((teamy ? 5 : 1))}`;
         teamy = black4.startsWith(`${teamy}`);
         break;
      }
         full5 += parseFloat(`${parseInt(`${ballH}`)}`);
      while ((5.35 + full5) > 4.26) {
         full5 += parseFloat(`${tick6.length}`);
         break;
      }
         full5 /= Math.max(3, parseFloat(`${3}`));
      mailQ -= mailQ >> (Math.min(Math.abs(3), 5));
   }
      favoriteQ += `${favoriteQ.length}`;
      refresht /= Math.max((parseFloat(`${incidentj == String.fromCharCode(112,0) ? mailQ : incidentj.length}`)), 2);
   if (favoriteQ == String.fromCharCode(114,0) && 5 <= incidentj.length) {
      favoriteQ += `${whistleA.length % 1}`;
   }
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YHook,
        });

      incidentj = `${(incidentj.length << (Math.min(2, Math.abs((containerj ? 1 : 4)))))}`;
       let reminderP = 0.0;
       let clockG: Map<any, any> = new Map([[String.fromCharCode(110,95,50,95,109,101,109,98,101,114,115,104,105,112,0),245], [String.fromCharCode(113,95,51,56,95,112,114,111,99,0),47], [String.fromCharCode(119,101,98,109,101,110,99,0),554]]);
       let borderlesss = String.fromCharCode(112,111,121,116,109,95,54,95,50,52,0);
      while (3 <= (clockG.size - 4)) {
          let gesturest: Array<any> = [994, 383, 312];
          let crossX = 4.0;
          let selectedw = String.fromCharCode(101,113,117,97,108,95,119,95,52,53,0);
          let castV = false;
          let singaporeT: Array<any> = [519, 118, 869];
         borderlesss = `${gesturest.length ^ parseInt(`${reminderP}`)}`;
         gesturest.push((String.fromCharCode(48,0) == selectedw ? selectedw.length : singaporeT.length));
         crossX /= Math.max(singaporeT.length, 4);
         castV = selectedw == String.fromCharCode(54,0) && 11 > singaporeT.length;
         break;
      }
         borderlesss += `${clockG.size}`;
      if (!Array.from(clockG.values()).includes(reminderP)) {
          let handlert = true;
          let albumD = 3.0;
         clockG = new Map([[`${clockG.size}`, clockG.size]]);
         handlert = albumD <= 54.91;
         albumD *= (parseFloat(`${(handlert ? 4 : 4) ^ parseInt(`${albumD}`)}`));
      }
          let pointP = 3.0;
          let langkeyB = String.fromCharCode(98,117,102,108,101,110,95,122,95,57,55,0);
          let moduleB: Array<any> = [621, 665];
         clockG.set(`${reminderP}`, parseInt(`${reminderP}`));
         pointP += langkeyB.length + 1;
         langkeyB = `${moduleB.length}`;
         moduleB.push(moduleB.length << (Math.min(Math.abs(1), 2)));
         borderlesss = `${parseInt(`${reminderP}`) + clockG.size}`;
      while (!Array.from(clockG.values()).includes(reminderP)) {
         reminderP -= borderlesss.length / 1;
         break;
      }
      while (5.68 <= reminderP) {
          let policyc: Array<any> = [724, 53];
          let phoneo = true;
          let time_pkR = String.fromCharCode(100,95,54,50,95,116,105,108,101,109,107,97,0);
         borderlesss += `${clockG.size / (Math.max(4, borderlesss.length))}`;
         policyc = [((phoneo ? 4 : 3) >> (Math.min(Math.abs(1), 5)))];
         phoneo = time_pkR.endsWith(`${phoneo}`);
         time_pkR += `${policyc.length / 3}`;
         break;
      }
         borderlesss += "1";
      while (clockG.get(`${reminderP}`) != null) {
          let launchL = 3.0;
         reminderP += parseInt(`${reminderP}`);
         launchL /= Math.max(parseFloat(`${parseInt(`${launchL}`) % (Math.max(10, parseInt(`${launchL}`)))}`), 1);
         break;
      }
      filledu += `${borderlesss.length + parseInt(`${reminderP}`)}`;
   let index7 = 7197974 >= whistleA.length;
   do {
      whistleA += `${incidentj.length}`;
      if (index7) {
         break;
      }
   } while ((whistleA.length >= incidentj.length) && index7);
       let detaile: Map<any, any> = new Map([[String.fromCharCode(110,95,53,54,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0),false ], [String.fromCharCode(100,121,110,97,109,105,99,115,95,104,95,50,57,0),false ]]);
       let popupH = 5;
       let agreement5 = 5;
         detaile = new Map([[`${detaile.size}`, detaile.size << (Math.min(Math.abs(3), 2))]]);
      if ((agreement5 - detaile.size) >= 1 || 1 >= (detaile.size - agreement5)) {
         detaile.set(`${agreement5}`, 3);
      }
       let target3 = false;
          let s_centerJ = String.fromCharCode(118,95,53,56,95,106,117,108,105,97,110,0);
         popupH /= Math.max(1, detaile.size - popupH);
         s_centerJ = `${s_centerJ.length}`;
      for (let c = 0; c < 1; c++) {
         agreement5 *= 1 << (Math.min(Math.abs(popupH), 5));
      }
      if (!Array.from(detaile.values()).includes(agreement5)) {
          let shootG = 1.0;
          let whatsappL = 1;
          let sansZ = 4.0;
          let spinnerL: Array<any> = [String.fromCharCode(122,95,57,95,115,117,98,105,109,97,103,101,0), String.fromCharCode(119,95,52,49,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0)];
         agreement5 -= detaile.size;
         shootG -= parseFloat(`${parseInt(`${sansZ}`)}`);
         whatsappL |= spinnerL.length << (Math.min(4, Math.abs(parseInt(`${shootG}`))));
         spinnerL = [3];
      }
      let downloadedz = target3 ? !target3 : target3;
      do {
         target3 = (popupH & detaile.size) < 79;
         if (downloadedz) {
            break;
         }
      } while (downloadedz && (!target3 && (popupH / 3) < 2));
       let hooksQ = true;
      while (!Array.from(detaile.keys()).includes(`${popupH}`)) {
         detaile.set(`${popupH}`, 1);
         break;
      }
      favoriteQ += `${whistleA.length >> (Math.min(Math.abs(2), 5))}`;
   let catagoryd = String.fromCharCode(99,109,54,122,102,48,102,112,51,0) == modalN;
   do {
       let plash9 = String.fromCharCode(112,101,101,107,0);
       let settingV = 5;
       let actionC = 4.0;
       let connectionb = String.fromCharCode(111,110,116,97,99,116,0);
       let f_playerD = String.fromCharCode(105,109,112,111,115,115,105,98,108,101,95,114,95,56,0);
      for (let e = 0; e < 3; e++) {
          let switch_y7 = String.fromCharCode(115,116,97,109,112,0);
          let controls7 = false;
          let pauset: Map<any, any> = new Map([[String.fromCharCode(119,95,53,48,95,117,110,115,116,97,107,101,0),355], [String.fromCharCode(102,102,112,108,97,121,95,107,95,56,49,0),413]]);
          let gmail0 = 2.0;
         actionC -= connectionb.length ^ 1;
         switch_y7 += `${(String.fromCharCode(122,0) == switch_y7 ? switch_y7.length : (controls7 ? 3 : 1))}`;
         controls7 = (parseInt(`${gmail0}`) / (Math.max(pauset.size, 2))) > 95;
         pauset.set(`${gmail0}`, parseInt(`${gmail0}`) * pauset.size);
      }
      for (let c = 0; c < 3; c++) {
          let scorey: Array<any> = [11, 529, 243];
          let tooltipsF = 2;
          let episodes0 = 4.0;
          let details2 = String.fromCharCode(122,95,54,50,95,113,117,101,114,121,0);
         plash9 = `${details2.length}`;
         scorey.push(3);
         tooltipsF <<= Math.min(1, scorey.length);
         episodes0 *= tooltipsF;
         details2 = `${3 ^ tooltipsF}`;
      }
         f_playerD = "2";
       let yellowm: Array<any> = [868, 203, 987];
         f_playerD = `${plash9.length}`;
      while ((f_playerD.length - settingV) >= 1 || 1 >= (settingV - f_playerD.length)) {
          let eighteenz: Map<any, any> = new Map([[String.fromCharCode(107,97,105,115,101,114,95,122,95,53,54,0),423], [String.fromCharCode(110,111,110,110,117,108,108,111,117,116,0),659]]);
          let collectionG = String.fromCharCode(115,99,97,108,97,98,108,101,0);
          let private_kyw = true;
          let memberL = String.fromCharCode(97,95,56,54,95,114,101,109,111,118,101,103,114,97,105,110,0);
         f_playerD += `${eighteenz.size - settingV}`;
         eighteenz = new Map([[`${private_kyw}`, ((private_kyw ? 1 : 3))]]);
         collectionG = "1";
         memberL += `${collectionG.length}`;
         break;
      }
         connectionb = `${plash9.length}`;
      if (1 < (4 + connectionb.length)) {
          let profile5 = true;
          let handler3 = 4.0;
          let home5 = 3;
          let kickv = 3.0;
          let analyticsp = String.fromCharCode(114,101,112,97,105,110,116,0);
         actionC += connectionb.length >> (Math.min(5, Math.abs(parseInt(`${actionC}`))));
         profile5 = handler3 <= 3.85;
         handler3 += parseFloat(`${parseInt(`${kickv}`)}`);
         home5 += 2;
         analyticsp += `${home5}`;
      }
      while (connectionb.endsWith(`${settingV}`)) {
         settingV -= f_playerD.length;
         break;
      }
         plash9 = `${3 >> (Math.min(3, f_playerD.length))}`;
      let bella = 8497319 >= settingV;
      do {
         settingV %= Math.max(1, connectionb.length % 3);
         if (bella) {
            break;
         }
      } while (bella && (3 == settingV));
      if (3 < (yellowm.length / (Math.max(7, settingV))) || (3 / (Math.max(10, settingV))) < 1) {
         yellowm = [f_playerD.length];
      }
          let modaln = String.fromCharCode(106,95,51,95,98,111,117,110,99,101,0);
          let chartk = String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0);
         actionC += 2;
         modaln += `${modaln.length & 2}`;
         chartk = `${chartk.length}`;
      let albumv = settingV >= 9043990;
      do {
          let otherd = String.fromCharCode(114,101,99,116,95,48,95,48,0);
          let commentL = String.fromCharCode(114,116,97,100,100,114,115,95,53,95,55,54,0);
          let tailb = true;
         settingV |= (f_playerD == String.fromCharCode(69,0) ? f_playerD.length : parseInt(`${actionC}`));
         otherd = `${(1 % (Math.max(4, (tailb ? 3 : 3))))}`;
         commentL += `${otherd.length}`;
         tailb = !tailb;
         if (albumv) {
            break;
         }
      } while (albumv && (plash9.length >= settingV));
       let starB: Map<any, any> = new Map([[String.fromCharCode(104,95,57,55,95,115,117,103,103,101,115,116,0),false ], [String.fromCharCode(103,95,57,48,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0),true ], [String.fromCharCode(102,111,114,101,118,101,114,0),true ]]);
       let usernamek: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,115,0),true ], [String.fromCharCode(107,95,53,51,95,115,117,102,102,105,120,0),false ]]);
      modalN = `${filledu.length | mailQ}`;
      if (catagoryd) {
         break;
      }
   } while (catagoryd && (filledu == modalN));
   if (!containerj) {
      favoriteJ *= parseInt(`${refresht}`);
   }

        if (this.showLog) console.log('trigger event id:', YUpgrade.YRefresh);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
       let rightE = 1;
    let detailI = true;
    let borderlessG = String.fromCharCode(103,95,54,52,95,105,110,116,120,120,0);
    let darkf = 4.0;
    let blacklist_ = false;
    let filledR = 3;
    let club8 = 1.0;
    let auto_r0n = 2;
    let buttonX = 4;
    let update_wu: Map<any, any> = new Map([[String.fromCharCode(109,95,56,53,95,108,101,118,101,108,115,0),String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,95,118,95,50,53,0)], [String.fromCharCode(114,101,112,108,97,121,101,100,95,108,95,54,49,0),String.fromCharCode(101,120,116,101,110,115,105,98,108,101,95,120,95,55,50,0)]]);
   while ((4.4 - darkf) < 1.60) {
       let next5 = String.fromCharCode(112,95,57,57,95,99,97,110,99,101,108,108,101,100,0);
       let weiboC = 5.0;
       let sanso = String.fromCharCode(101,120,112,101,99,116,115,95,99,95,50,57,0);
       let progressr = String.fromCharCode(107,95,56,95,121,101,108,108,111,119,0);
       let vignettem = String.fromCharCode(109,117,108,116,95,114,95,50,52,0);
       let soundH = String.fromCharCode(114,97,116,105,111,110,97,108,95,119,95,51,50,0);
      let twitteru = 8796564 >= vignettem.length;
      do {
          let expandB = 3.0;
          let zhengpianr = String.fromCharCode(115,119,105,122,122,108,101,100,95,111,95,51,51,0);
         vignettem = `${1 ^ zhengpianr.length}`;
         expandB -= parseFloat(`${parseInt(`${expandB}`) ^ parseInt(`${expandB}`)}`);
         zhengpianr += "1";
         if (twitteru) {
            break;
         }
      } while (twitteru && (4.96 == (parseFloat(`${vignettem.length}`) * weiboC) || 3 == (parseInt(`${weiboC}`) * vignettem.length)));
       let telegramL = String.fromCharCode(105,95,49,56,95,107,110,111,99,107,111,117,116,0);
      let resendm = String.fromCharCode(118,117,122,112,97,100,48,57,104,103,0) == soundH;
      do {
          let member8 = false;
          let download5 = 1.0;
          let backgroundB: Array<any> = [72, 557];
         soundH = `${soundH.length ^ 1}`;
         member8 = download5 > 33.48;
         download5 -= backgroundB.length | 1;
         backgroundB.push(3 * backgroundB.length);
         if (resendm) {
            break;
         }
      } while ((3 == (soundH.length | 4) || (weiboC * 4.91) == 4.31) && resendm);
      if (!sanso.endsWith(`${soundH.length}`)) {
         soundH = `${parseInt(`${weiboC}`) ^ 1}`;
      }
      let entryz = next5.length <= 9481138;
      do {
         next5 = "2";
         if (entryz) {
            break;
         }
      } while (entryz && (!sanso.startsWith(next5)));
      if (soundH.length == vignettem.length) {
         vignettem = "2";
      }
          let eventF = 5.0;
          let ajaxc = 5.0;
         progressr += `${telegramL.length}`;
         eventF -= parseFloat(`${parseInt(`${ajaxc}`) - 1}`);
         ajaxc /= Math.max(3, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${eventF}`)), 3))}`));
      while (3 >= sanso.length || telegramL != String.fromCharCode(69,0)) {
          let regeng6 = String.fromCharCode(120,95,49,56,95,99,101,108,108,97,117,116,111,0);
          let typingQ = true;
          let eighteenD = 3.0;
          let modeV = String.fromCharCode(102,95,55,52,0);
         sanso = "2";
         regeng6 = `${((typingQ ? 3 : 1))}`;
         typingQ = regeng6.includes(`${eighteenD}`);
         eighteenD -= parseFloat(`${modeV.length ^ 3}`);
         modeV += `${parseInt(`${eighteenD}`)}`;
         break;
      }
       let sliderJ = 1.0;
       let penaltyg = 2.0;
      if (4 >= (sanso.length / (Math.max(2, parseInt(`${weiboC}`)))) || (sanso.length % (Math.max(4, 7))) >= 5) {
         sanso += "1";
      }
          let sportV = String.fromCharCode(101,95,52,56,95,114,101,99,111,103,110,105,116,105,111,110,0);
         penaltyg /= Math.max(3, soundH.length);
         sportV += `${(sportV == String.fromCharCode(115,0) ? sportV.length : sportV.length)}`;
      auto_r0n |= rightE - 2;
      break;
   }
       let internetH = 0;
         internetH -= 2;
      let trashi = internetH >= 5892664;
      do {
         internetH <<= Math.min(2, Math.abs(internetH));
         if (trashi) {
            break;
         }
      } while ((3 > internetH) && trashi);
       let station3 = 1.0;
       let updatesk = 4.0;
      borderlessG = `${borderlessG.length * parseInt(`${club8}`)}`;
       let eventp = String.fromCharCode(104,95,53,54,95,112,117,116,98,105,116,98,117,102,102,101,114,0);
       let logoutc = String.fromCharCode(114,101,112,114,111,99,101,115,115,95,105,95,51,55,0);
      while (logoutc != eventp) {
          let g_countr: Array<any> = [70, 552];
         eventp = `${2 >> (Math.min(1, g_countr.length))}`;
         break;
      }
         eventp += `${eventp.length - logoutc.length}`;
          let description_0s: Array<any> = [String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,118,95,55,0), String.fromCharCode(115,101,103,116,114,101,101,95,55,95,50,49,0)];
         logoutc += `${logoutc.length}`;
         description_0s.push(3);
         logoutc = `${(String.fromCharCode(98,0) == logoutc ? logoutc.length : eventp.length)}`;
         logoutc += `${2 + logoutc.length}`;
      for (let g = 0; g < 2; g++) {
          let verticald = true;
         eventp += `${(String.fromCharCode(97,0) == eventp ? eventp.length : logoutc.length)}`;
         verticald = (!verticald ? !verticald : verticald);
      }
      auto_r0n |= parseInt(`${club8}`);
      filledR -= 2 / (Math.max(9, filledR));
       let xvodG = 1.0;
       let transferA = String.fromCharCode(105,110,105,116,97,108,105,122,101,95,99,95,57,57,0);
       let combine_ = String.fromCharCode(100,98,105,115,95,114,95,56,52,0);
      if (combine_ != String.fromCharCode(112,0) && transferA.length < 1) {
          let filtera = false;
          let selectg = 1;
          let changev = String.fromCharCode(110,111,110,102,97,116,97,108,95,114,95,53,49,0);
         combine_ = `${changev.length}`;
         filtera = selectg < 6;
         selectg ^= ((filtera ? 3 : 5) % (Math.max(selectg, 1)));
         changev = `${selectg % 2}`;
      }
      if (combine_ != String.fromCharCode(98,0)) {
         transferA += `${transferA.length}`;
      }
          let detailsQ = String.fromCharCode(118,105,101,119,101,114,115,95,54,95,55,48,0);
          let frame_ia: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,99,111,108,111,114,115,0),567], [String.fromCharCode(108,105,98,97,118,102,105,108,116,101,114,0),883], [String.fromCharCode(99,95,54,53,95,116,105,103,103,108,101,0),161]]);
          let clockZ = 1;
         transferA = `${frame_ia.size}`;
         detailsQ += `${(detailsQ == String.fromCharCode(104,0) ? detailsQ.length : clockZ)}`;
         frame_ia.set(detailsQ, 1 % (Math.max(4, detailsQ.length)));
         clockZ <<= Math.min(3, Math.abs(clockZ >> (Math.min(detailsQ.length, 1))));
      for (let i = 0; i < 1; i++) {
         combine_ += "1";
      }
      for (let w = 0; w < 3; w++) {
         transferA = "2";
      }
         combine_ = `${combine_.length | 1}`;
      for (let e = 0; e < 1; e++) {
         transferA = `${2 - parseInt(`${xvodG}`)}`;
      }
         transferA = `${transferA.length}`;
      for (let t = 0; t < 2; t++) {
         xvodG /= Math.max(parseFloat(`${combine_.length}`), 4);
      }
      filledR |= filledR % 1;

        AnalyticsUtil.onEventWithMap(YUpgrade.YCopy, {});

      auto_r0n >>= Math.min(2, Math.abs(3 - buttonX));
   for (let a = 0; a < 3; a++) {
       let minimizeL = false;
       let selectionB: Array<any> = [281, 920, 714];
      for (let k = 0; k < 2; k++) {
         minimizeL = selectionB.includes(minimizeL);
      }
      while (4 > (selectionB.length & 3)) {
         selectionB.push(selectionB.length);
         break;
      }
          let networkp = 0;
         selectionB = [selectionB.length % (Math.max(8, networkp))];
      while (!minimizeL && (selectionB.length * 4) == 4) {
         selectionB.push((3 * (minimizeL ? 2 : 1)));
         break;
      }
      for (let l = 0; l < 3; l++) {
         minimizeL = selectionB.length < 99;
      }
      let clock1 = minimizeL ? !minimizeL : minimizeL;
      do {
          let fillh = 5.0;
         minimizeL = fillh >= parseFloat(`${selectionB.length}`);
         if (clock1) {
            break;
         }
      } while ((selectionB.length > 1) && clock1);
      rightE -= 2;
   }
   for (let l = 0; l < 1; l++) {
      darkf *= (parseFloat(`${(detailI ? 3 : 5) & parseInt(`${club8}`)}`));
   }
   let firebaseG = 5203890 <= buttonX;
   do {
      buttonX %= Math.max(5, 3 - filledR);
      if (firebaseG) {
         break;
      }
   } while ((buttonX >= 2) && firebaseG);
   let countryT = auto_r0n <= 6335786;
   do {
      auto_r0n += 3;
      if (countryT) {
         break;
      }
   } while (countryT && (4 == (5 | auto_r0n)));
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YDark,
        });

   for (let b = 0; b < 1; b++) {
       let inviter = String.fromCharCode(115,116,97,109,112,115,0);
       let const_i0 = 4.0;
       let switch_6aY: Array<any> = [String.fromCharCode(114,101,110,100,105,116,105,111,110,0), String.fromCharCode(111,95,50,52,95,114,101,100,117,110,100,97,110,116,0)];
       let countdownB = String.fromCharCode(101,95,50,52,95,115,112,108,105,116,0);
       let share6 = true;
          let turnM = 0.0;
         const_i0 += ((share6 ? 2 : 1));
         turnM /= Math.max(1, parseInt(`${turnM}`));
          let assiste = String.fromCharCode(110,95,49,95,115,116,99,98,0);
         share6 = switch_6aY.length > 49 || assiste == String.fromCharCode(104,0);
      if (!inviter.startsWith(`${share6}`)) {
         inviter += `${countdownB.length}`;
      }
         inviter = `${switch_6aY.length + 2}`;
          let privacyR = String.fromCharCode(97,95,49,52,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0);
          let statsy = String.fromCharCode(112,95,50,50,95,109,106,112,101,103,0);
         countdownB += `${((share6 ? 4 : 4))}`;
         privacyR += `${(String.fromCharCode(88,0) == statsy ? privacyR.length : statsy.length)}`;
          let containerF: Array<any> = [264, 687];
          let videoA = 5;
         share6 = countdownB.endsWith(`${share6}`);
         containerF = [containerF.length & videoA];
         videoA += containerF.length;
         const_i0 /= Math.max(4, countdownB.length ^ 1);
      while (3 == inviter.length) {
          let backwardo = 3;
          let privilegeI = 5.0;
         share6 = privilegeI == 54.87;
         backwardo <<= Math.min(Math.abs(backwardo), 1);
         privilegeI *= 3 % (Math.max(3, backwardo));
         break;
      }
         countdownB = `${inviter.length}`;
         const_i0 /= Math.max(5, parseInt(`${const_i0}`) + countdownB.length);
          let dialogu: Map<any, any> = new Map([[String.fromCharCode(108,95,57,95,99,111,110,115,101,99,117,116,105,118,101,0),647], [String.fromCharCode(116,95,53,51,95,115,108,105,100,101,0),830], [String.fromCharCode(104,95,57,53,95,100,98,108,105,110,116,0),352]]);
          let moonk = String.fromCharCode(97,103,101,95,104,95,50,56,0);
         share6 = moonk.length < 20 || dialogu.size < 20;
       let change8: Array<any> = [String.fromCharCode(118,105,101,119,101,100,95,53,95,51,54,0), String.fromCharCode(113,95,54,57,95,116,111,107,101,110,116,120,0), String.fromCharCode(110,95,50,56,95,99,111,100,101,99,117,116,105,108,115,0)];
       let lessy: Array<any> = [120, 71];
         const_i0 *= 3;
      for (let n = 0; n < 1; n++) {
          let predictionQ = 2;
          let tempq = 5;
         change8 = [inviter.length - 3];
         predictionQ |= predictionQ + tempq;
         tempq += tempq / (Math.max(9, predictionQ));
      }
      for (let o = 0; o < 1; o++) {
         const_i0 += parseInt(`${const_i0}`) / (Math.max(1, switch_6aY.length));
      }
      filledR >>= Math.min(1, Math.abs(3 * parseInt(`${const_i0}`)));
   }
      rightE <<= Math.min(4, Math.abs(2 << (Math.min(Math.abs(filledR), 2))));
   let headerC = 9301943 <= buttonX;
   do {
      buttonX *= 1;
      if (headerC) {
         break;
      }
   } while (headerC && (!blacklist_));
      buttonX /= Math.max(((detailI ? 3 : 4)), 5);
      filledR %= Math.max(buttonX, 3);

        if (this.showLog) console.log('trigger event id:', YUpgrade.YCopy);
    }

    static userCenterVipPayViewsAnalytics = () => {
       let rightY = String.fromCharCode(117,110,112,117,98,108,105,115,104,95,56,95,52,54,0);
    let filedy = 5.0;
    let trashC: Map<any, any> = new Map([[String.fromCharCode(106,95,51,53,95,115,116,97,103,101,0),String.fromCharCode(102,105,120,115,116,114,105,100,101,95,120,95,51,50,0)], [String.fromCharCode(117,112,115,104,105,102,116,101,100,0),String.fromCharCode(116,111,110,101,109,97,112,95,98,95,57,57,0)]]);
    let miniO = String.fromCharCode(109,95,54,51,95,116,117,112,108,101,0);
    let disconnectedZ = String.fromCharCode(111,115,115,108,95,51,95,53,54,0);
    let buttone: Array<any> = [549, 93, 609];
    let inactivea: Map<any, any> = new Map([[String.fromCharCode(97,95,52,56,95,99,108,97,122,122,0),384], [String.fromCharCode(112,114,111,98,108,101,109,115,95,122,95,55,51,0),550], [String.fromCharCode(107,95,57,53,95,116,109,99,100,0),716]]);
    let username8 = String.fromCharCode(102,114,109,97,95,55,95,49,54,0);
    let dark3: Map<any, any> = new Map([[String.fromCharCode(111,95,49,48,48,95,118,101,110,99,0),false ], [String.fromCharCode(99,111,110,118,111,108,117,116,101,0),true ], [String.fromCharCode(112,95,55,53,95,116,97,105,108,115,0),false ]]);
    let dark4 = true;
    let chinay = String.fromCharCode(100,105,109,101,110,115,105,116,111,110,115,0);
   for (let o = 0; o < 2; o++) {
       let leaguew: Map<any, any> = new Map([[String.fromCharCode(115,116,105,112,112,101,100,95,97,95,49,49,0),String.fromCharCode(115,105,110,0)], [String.fromCharCode(116,95,51,49,95,119,111,114,100,0),String.fromCharCode(110,95,53,55,95,98,105,111,109,101,116,114,105,99,0)], [String.fromCharCode(108,95,51,57,95,115,105,103,110,105,102,105,99,97,110,116,0),String.fromCharCode(111,95,56,54,0)]]);
       let k_centerJ = String.fromCharCode(104,95,57,95,118,97,108,105,100,97,116,101,0);
       let regengm: Map<any, any> = new Map([[String.fromCharCode(99,115,114,105,100,0),714], [String.fromCharCode(112,114,101,115,101,110,99,101,95,104,95,51,54,0),930], [String.fromCharCode(111,118,101,114,108,97,121,115,0),66]]);
       let previewv = String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,95,50,95,55,52,0);
      let source6 = 7329884 <= regengm.size;
      do {
         regengm.set(previewv, (previewv == String.fromCharCode(104,0) ? previewv.length : leaguew.size));
         if (source6) {
            break;
         }
      } while (source6 && (regengm.size > 3));
      if ((3 * leaguew.size) == 5 || 3 == (regengm.size * leaguew.size)) {
         leaguew.set(previewv, previewv.length | regengm.size);
      }
       let groupT = String.fromCharCode(98,115,119,97,112,100,115,112,95,103,95,52,51,0);
       let checkboxf = String.fromCharCode(109,95,55,53,95,100,101,114,105,118,101,100,0);
         groupT = `${regengm.size / (Math.max(3, 5))}`;
          let eventA: Array<any> = [624, 634, 908];
         leaguew.set(checkboxf, checkboxf.length + eventA.length);
      let modityi = checkboxf.length <= 8776409;
      do {
         checkboxf += `${(checkboxf == String.fromCharCode(49,0) ? regengm.size : checkboxf.length)}`;
         if (modityi) {
            break;
         }
      } while ((3 >= checkboxf.length) && modityi);
         groupT = `${k_centerJ.length}`;
      let mapping5 = previewv.length <= 6086352;
      do {
         previewv = "3";
         if (mapping5) {
            break;
         }
      } while ((5 <= (previewv.length & regengm.size) && (regengm.size & previewv.length) <= 5) && mapping5);
      for (let b = 0; b < 3; b++) {
         checkboxf += `${k_centerJ.length}`;
      }
      while (groupT.length <= 5) {
         previewv = `${k_centerJ.length / 1}`;
         break;
      }
      for (let o = 0; o < 1; o++) {
         k_centerJ += `${previewv.length}`;
      }
      username8 = `${inactivea.size / (Math.max(9, miniO.length))}`;
   }
       let projectb = 5.0;
          let regeng2: Array<any> = [String.fromCharCode(115,95,54,54,95,109,111,100,105,102,105,99,97,116,105,111,110,115,0), String.fromCharCode(121,111,110,108,121,95,48,95,55,52,0)];
          let combine_: Map<any, any> = new Map([[String.fromCharCode(109,111,100,110,112,102,95,106,95,49,55,0),21], [String.fromCharCode(116,105,100,121,0),612], [String.fromCharCode(98,95,50,50,95,98,97,99,107,114,111,117,110,100,0),927]]);
         projectb += parseFloat(`${1}`);
         regeng2.push(combine_.size << (Math.min(regeng2.length, 4)));
         combine_ = new Map([[`${combine_.size}`, combine_.size]]);
      while (projectb <= 1.69) {
         projectb /= Math.max(5, parseFloat(`${parseInt(`${projectb}`)}`));
         break;
      }
      if (projectb >= projectb) {
          let basketballR = 3;
         projectb *= parseFloat(`${parseInt(`${projectb}`) & basketballR}`);
      }
      username8 = `${dark3.size}`;
      rightY += `${trashC.size % (Math.max(3, 4))}`;
      rightY += `${3 - trashC.size}`;

        AnalyticsUtil.onEventWithMap(YUpgrade.YCanvasPopup, {});

   for (let l = 0; l < 3; l++) {
      filedy -= parseFloat(`${trashC.size}`);
   }
   if (2.57 <= (4.21 + filedy) || 4 <= (4 >> (Math.min(5, rightY.length)))) {
       let expiredl: Map<any, any> = new Map([[String.fromCharCode(106,95,57,95,112,105,99,107,101,114,115,0),String.fromCharCode(108,95,55,48,95,115,107,105,112,0)], [String.fromCharCode(104,95,57,48,95,114,97,98,105,110,0),String.fromCharCode(115,101,113,0)]]);
       let questJ = 1;
       let castinga = 1;
       let preview6 = 5.0;
       let optionsA = 5.0;
          let xvodh = String.fromCharCode(99,95,56,48,95,109,117,108,116,105,112,108,101,120,101,100,0);
          let homeq = 5.0;
         expiredl = new Map([[`${preview6}`, 3 % (Math.max(3, castinga))]]);
         xvodh += `${xvodh.length}`;
         homeq -= 3;
      for (let t = 0; t < 2; t++) {
         optionsA -= questJ % 2;
      }
          let suggestionh = 2;
          let modelh = String.fromCharCode(101,95,55,95,97,116,97,99,101,110,116,101,114,0);
          let completeU = String.fromCharCode(115,95,49,51,95,108,97,112,108,97,99,101,0);
         preview6 += 1 / (Math.max(6, parseInt(`${preview6}`)));
         suggestionh %= Math.max(suggestionh, 4);
         modelh += `${suggestionh | modelh.length}`;
         completeU += `${(completeU == String.fromCharCode(69,0) ? completeU.length : suggestionh)}`;
      let closeu = 6588485 >= expiredl.size;
      do {
          let roboto8 = String.fromCharCode(115,99,97,110,116,97,98,108,101,115,0);
          let shrinkq = 3;
          let shrinkp: Map<any, any> = new Map([[String.fromCharCode(110,116,101,114,110,97,108,95,98,95,55,52,0),835], [String.fromCharCode(112,111,108,108,0),828]]);
          let room0 = true;
         expiredl = new Map([[`${optionsA}`, 3]]);
         roboto8 = `${shrinkq / (Math.max(roboto8.length, 2))}`;
         shrinkq &= 2;
         shrinkp = new Map([[roboto8, (roboto8 == String.fromCharCode(79,0) ? (room0 ? 5 : 3) : roboto8.length)]]);
         room0 = shrinkq <= 63;
         if (closeu) {
            break;
         }
      } while ((Array.from(expiredl.values()).includes(questJ)) && closeu);
      let brightnessD = questJ <= 9838246;
      do {
         questJ &= castinga / 1;
         if (brightnessD) {
            break;
         }
      } while (((optionsA - 1.25) <= 5.6) && brightnessD);
         questJ += 2;
      for (let b = 0; b < 2; b++) {
         questJ *= parseInt(`${optionsA}`);
      }
      if ((expiredl.size / 4) <= 4 || 3 <= (expiredl.size << (Math.min(Math.abs(4), 3)))) {
          let hookp = 1.0;
          let yellowO: Map<any, any> = new Map([[String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,48,95,49,51,0),true ], [String.fromCharCode(99,95,50,50,95,112,111,114,116,115,0),true ], [String.fromCharCode(112,97,116,99,104,95,120,95,52,53,0),false ]]);
          let flyerH: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,115,105,111,110,95,121,95,53,57,0),String.fromCharCode(106,95,56,55,95,117,110,112,97,99,107,104,105,0)], [String.fromCharCode(97,115,111,108,117,116,101,95,108,95,51,0),String.fromCharCode(116,95,49,57,95,100,105,102,102,101,114,101,110,99,101,0)]]);
         optionsA *= castinga * parseInt(`${preview6}`);
         hookp -= yellowO.size;
         yellowO = new Map([[`${yellowO.size}`, 3 / (Math.max(5, yellowO.size))]]);
         flyerH.set(`${hookp}`, flyerH.size - parseInt(`${hookp}`));
      }
      let searchbarf = questJ >= 5153390;
      do {
         questJ |= questJ;
         if (searchbarf) {
            break;
         }
      } while (searchbarf && (5 == (questJ / 3) || (questJ / (Math.max(3, 5))) == 2));
      let sliderL = castinga <= 6227467;
      do {
          let umengj = 4.0;
          let sentryi = String.fromCharCode(105,115,112,111,114,116,95,107,95,49,50,0);
          let mathj = String.fromCharCode(98,95,55,54,95,108,111,119,100,101,108,97,121,0);
          let gesturesU: Array<any> = [String.fromCharCode(122,95,51,56,95,104,105,103,104,98,105,116,100,101,112,116,104,0), String.fromCharCode(111,95,49,52,95,112,114,111,112,115,0), String.fromCharCode(112,114,111,99,95,100,95,53,48,0)];
          let plusI = 0;
         castinga |= 3;
         umengj -= 1 << (Math.min(2, gesturesU.length));
         sentryi += `${3 | parseInt(`${umengj}`)}`;
         mathj = `${parseInt(`${umengj}`)}`;
         gesturesU = [1];
         plusI >>= Math.min(1, Math.abs(parseInt(`${umengj}`) % (Math.max(gesturesU.length, 4))));
         if (sliderL) {
            break;
         }
      } while ((2.35 >= (preview6 * castinga) || 4.7 >= (2.35 * preview6)) && sliderL);
         castinga /= Math.max(3, 2);
         preview6 += 1;
      for (let p = 0; p < 1; p++) {
          let brightnessA = String.fromCharCode(111,109,109,111,110,0);
          let hoverf = 5;
          let navigationy: Map<any, any> = new Map([[String.fromCharCode(109,97,99,101,95,56,95,54,53,0),false ], [String.fromCharCode(97,95,51,56,95,110,97,118,105,103,97,116,105,111,110,0),false ]]);
         castinga &= 1 << (Math.min(5, Math.abs(questJ)));
         brightnessA += `${brightnessA.length}`;
         hoverf *= hoverf % 2;
         navigationy = new Map([[`${navigationy.size}`, (brightnessA == String.fromCharCode(77,0) ? brightnessA.length : navigationy.size)]]);
      }
      if (!Array.from(expiredl.values()).includes(preview6)) {
         expiredl = new Map([[`${expiredl.size}`, expiredl.size]]);
      }
      for (let s = 0; s < 2; s++) {
         castinga ^= castinga;
      }
      filedy /= Math.max(parseFloat(`${parseInt(`${optionsA}`) ^ 1}`), 2);
   }
      disconnectedZ = `${(String.fromCharCode(106,0) == miniO ? rightY.length : miniO.length)}`;
   while ((username8.length << (Math.min(1, Math.abs(dark3.size)))) > 5 && 1 > (5 << (Math.min(4, username8.length)))) {
      username8 = `${inactivea.size}`;
      break;
   }
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YStore,
            params: {
                desc_1: 'pay',
            }
        });

      trashC = new Map([[`${inactivea.size}`, inactivea.size & rightY.length]]);
      buttone.push(buttone.length + 2);
   if (filedy <= 2.62) {
      filedy *= parseFloat(`${disconnectedZ.length << (Math.min(miniO.length, 5))}`);
   }
   let desc6 = String.fromCharCode(100,55,115,48,53,0) == username8;
   do {
       let championo = 4;
      while (championo > championo) {
         championo >>= Math.min(2, Math.abs(1 | championo));
         break;
      }
          let tick9 = String.fromCharCode(105,95,53,48,95,114,101,116,117,114,110,101,100,0);
          let thailandm: Map<any, any> = new Map([[String.fromCharCode(110,95,55,56,95,104,112,101,108,0),60], [String.fromCharCode(116,105,109,101,118,97,108,0),204], [String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,95,53,95,49,52,0),170]]);
          let selle = false;
         championo ^= (championo & (selle ? 4 : 1));
         tick9 += `${tick9.length}`;
         thailandm.set(`${tick9}`, 2 & thailandm.size);
         selle = (thailandm.size & tick9.length) == 74;
      let helper5 = 7178892 <= championo;
      do {
          let pingZ = 3.0;
          let nextt: Map<any, any> = new Map([[String.fromCharCode(104,111,108,100,105,110,103,95,98,95,52,56,0),479], [String.fromCharCode(113,95,52,54,95,109,112,101,103,100,97,116,97,0),962]]);
          let ajaxl = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,95,57,95,55,51,0);
          let update_zcN = 5;
         championo >>= Math.min(Math.abs(nextt.size), 1);
         pingZ /= Math.max((parseFloat(`${ajaxl == String.fromCharCode(111,0) ? ajaxl.length : update_zcN}`)), 4);
         nextt.set(`${update_zcN}`, ajaxl.length ^ update_zcN);
         if (helper5) {
            break;
         }
      } while (helper5 && ((championo >> (Math.min(4, Math.abs(championo)))) <= 1 || 3 <= (1 >> (Math.min(4, Math.abs(championo))))));
      username8 = `${championo / (Math.max(miniO.length, 1))}`;
      if (desc6) {
         break;
      }
   } while ((!username8.includes(`${buttone.length}`)) && desc6);

        if (this.showLog) console.log('trigger event id:', YUpgrade.YCanvasPopup);
    }

    static userCenterVipInviteViewsAnalytics = () => {
       let textB: Array<any> = [225, 804, 419];
    let activej = 5;
    let hooksA = 0.0;
    let ynewsD = String.fromCharCode(101,95,52,54,95,102,105,108,116,101,114,117,118,0);
    let saveh = String.fromCharCode(111,95,57,49,95,114,101,110,97,109,101,0);
    let fastM = 2.0;
    let greyP = 2;
    let splashN = true;
    let checkbox8 = 5;
    let submiti = 3.0;
    let tooltipsZ = String.fromCharCode(115,95,54,57,95,109,97,116,99,104,105,110,103,0);
    let countdownC = String.fromCharCode(116,111,111,108,116,105,112,115,95,106,95,57,55,0);
    let faviconX = 1;
   while (splashN) {
      submiti /= Math.max(1 << (Math.min(4, Math.abs(checkbox8))), 2);
      break;
   }
       let darkg = String.fromCharCode(114,101,103,101,116,95,51,95,51,49,0);
       let frame_cH = String.fromCharCode(100,105,115,112,108,97,121,95,115,95,53,52,0);
       let nalyticsY = String.fromCharCode(116,119,105,116,116,101,114,0);
          let dropdowng = 2;
          let rewindy: Map<any, any> = new Map([[String.fromCharCode(116,95,54,56,95,105,110,116,101,114,114,117,112,116,105,98,108,101,0),797], [String.fromCharCode(112,97,121,109,97,115,116,101,114,0),311], [String.fromCharCode(111,110,101,99,104,0),973]]);
          let actionE = 4.0;
         nalyticsY += `${3 & frame_cH.length}`;
         dropdowng += 2;
         rewindy = new Map([[`${rewindy.size}`, rewindy.size << (Math.min(2, Math.abs(dropdowng)))]]);
         actionE *= rewindy.size | dropdowng;
      for (let d = 0; d < 2; d++) {
         frame_cH = `${nalyticsY.length}`;
      }
         frame_cH += `${nalyticsY.length / 2}`;
         nalyticsY += `${nalyticsY.length}`;
         frame_cH += `${darkg.length}`;
         frame_cH = `${nalyticsY.length}`;
         frame_cH = `${nalyticsY.length}`;
         frame_cH += `${darkg.length * nalyticsY.length}`;
         darkg += `${frame_cH.length}`;
      tooltipsZ += `${textB.length % 3}`;
   for (let p = 0; p < 2; p++) {
       let logoV: Map<any, any> = new Map([[String.fromCharCode(108,95,54,51,95,99,111,109,109,111,110,0),959], [String.fromCharCode(115,104,105,101,108,100,95,107,95,49,51,0),554]]);
       let downloader5 = 2;
       let dropdownR = 3;
          let sourceJ = String.fromCharCode(114,95,53,57,95,112,105,112,101,108,105,110,105,110,103,0);
          let clearC = String.fromCharCode(101,95,53,48,95,100,121,110,98,117,102,0);
         downloader5 -= clearC.length;
         sourceJ = `${sourceJ.length}`;
         clearC += `${sourceJ.length}`;
      for (let m = 0; m < 2; m++) {
         dropdownR |= downloader5;
      }
      submiti *= textB.length | 1;
      logoV.set(`${logoV.size}`, logoV.size & logoV.size);
   }
   while (!splashN) {
      submiti /= Math.max(1, activej);
      break;
   }
      submiti /= Math.max((String.fromCharCode(100,0) == tooltipsZ ? textB.length : tooltipsZ.length), 4);

        AnalyticsUtil.onEventWithMap(YUpgrade.YHalf, {});

   for (let v = 0; v < 2; v++) {
      submiti += textB.length - 1;
   }
   for (let v = 0; v < 1; v++) {
       let settingr = String.fromCharCode(110,95,56,56,0);
       let popupv: Array<any> = [239, 404];
       let foundC = String.fromCharCode(115,104,111,114,116,108,121,95,106,95,53,52,0);
      if (popupv.length > 3) {
         popupv.push(popupv.length % (Math.max(3, 6)));
      }
          let containerO = 2.0;
          let crossf = String.fromCharCode(121,95,54,57,95,115,117,115,112,101,110,100,101,100,0);
          let robotoF = 1.0;
         foundC = "3";
         containerO *= parseFloat(`${2}`);
         crossf = `${1 << (Math.min(1, crossf.length))}`;
         robotoF -= crossf.length << (Math.min(1, Math.abs(parseInt(`${containerO}`))));
         foundC = `${foundC.length | popupv.length}`;
         popupv = [foundC.length];
      while (2 <= foundC.length) {
          let scorea = String.fromCharCode(118,105,101,119,112,111,114,116,95,51,95,49,0);
          let viewsz = 1.0;
          let videov = String.fromCharCode(107,95,57,49,95,99,111,109,112,97,114,101,112,111,119,0);
         foundC = `${videov.length - parseInt(`${viewsz}`)}`;
         scorea = `${scorea.length & scorea.length}`;
         viewsz *= scorea.length + scorea.length;
         break;
      }
      while (popupv.length <= 5) {
         popupv.push(2);
         break;
      }
      if (settingr.endsWith(`${popupv.length}`)) {
          let popupI = 0;
          let faviconu = String.fromCharCode(112,95,50,54,95,109,101,109,115,101,116,0);
         popupv = [(String.fromCharCode(56,0) == foundC ? foundC.length : popupv.length)];
         popupI *= popupI << (Math.min(Math.abs(1), 5));
         faviconu = `${popupI * faviconu.length}`;
      }
         settingr += `${settingr.length / 1}`;
      let loadingt = 6330870 <= popupv.length;
      do {
         popupv.push(1);
         if (loadingt) {
            break;
         }
      } while (((4 ^ popupv.length) <= 3 && (foundC.length ^ 4) <= 1) && loadingt);
      greyP *= checkbox8;
   }
   for (let s = 0; s < 1; s++) {
      fastM /= Math.max(checkbox8, 3);
   }
       let unread2: Map<any, any> = new Map([[String.fromCharCode(100,111,110,97,116,105,111,110,95,115,95,52,49,0),318], [String.fromCharCode(118,95,55,48,95,115,105,103,110,105,102,105,99,97,110,100,0),641]]);
       let projecta = false;
       let auto_pc = false;
       let chatl = 4;
          let downloading8 = 2.0;
          let screenA = 3.0;
         projecta = auto_pc;
         downloading8 += parseFloat(`${parseInt(`${screenA}`) ^ 1}`);
         screenA /= Math.max(3, parseFloat(`${1}`));
      textB = [(String.fromCharCode(78,0) == ynewsD ? ynewsD.length : unread2.size)];
      tooltipsZ += `${greyP}`;
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YStore,
            params: {
                desc_1: 'invite',
            }
        });

      textB = [(saveh == String.fromCharCode(55,0) ? parseInt(`${submiti}`) : saveh.length)];
   while ((activej ^ 2) >= 3 && 2 >= (2 << (Math.min(4, Math.abs(activej))))) {
       let settingK = String.fromCharCode(108,95,53,55,95,115,116,117,102,102,110,100,0);
       let weiboC: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,0),130], [String.fromCharCode(113,95,50,54,95,114,114,111,114,0),480]]);
       let volume3 = 4.0;
       let banner2 = String.fromCharCode(112,114,101,99,105,115,105,111,110,0);
      while (2 <= (parseInt(`${volume3}`) - weiboC.size)) {
         volume3 -= parseFloat(`${2}`);
         break;
      }
         settingK = "2";
         weiboC.set(banner2, (String.fromCharCode(95,0) == banner2 ? banner2.length : parseInt(`${volume3}`)));
      for (let g = 0; g < 2; g++) {
          let langI = String.fromCharCode(116,104,101,95,113,95,57,50,0);
          let bellH = String.fromCharCode(118,95,52,95,98,117,99,107,101,116,115,0);
          let carouselG = 5;
         weiboC.set(`${volume3}`, 2 << (Math.min(3, Math.abs(parseInt(`${volume3}`)))));
         langI += `${1 * carouselG}`;
         bellH += `${bellH.length}`;
         carouselG += 2;
      }
      if ((1 - weiboC.size) >= 4) {
         weiboC = new Map([[settingK, settingK.length | 3]]);
      }
       let leagueG: Map<any, any> = new Map([[String.fromCharCode(103,95,49,49,95,115,101,103,109,101,110,116,0),148], [String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,98,95,56,56,0),109], [String.fromCharCode(116,95,53,52,95,100,101,97,100,108,111,99,107,101,100,0),331]]);
          let greyn = 2.0;
         volume3 *= parseFloat(`${leagueG.size}`);
         greyn -= parseFloat(`${parseInt(`${greyn}`)}`);
      let dark_ = 7959176 <= weiboC.size;
      do {
          let viewerg = 4.0;
         weiboC = new Map([[`${weiboC.size}`, (settingK == String.fromCharCode(65,0) ? weiboC.size : settingK.length)]]);
         viewerg *= parseInt(`${viewerg}`);
         if (dark_) {
            break;
         }
      } while (((settingK.length ^ 4) > 4) && dark_);
      for (let k = 0; k < 2; k++) {
         banner2 = `${leagueG.size << (Math.min(banner2.length, 2))}`;
      }
      while ((banner2.length / 2) > 2 || 1 > (banner2.length / 2)) {
          let plus0 = 5;
          let switch_5v = String.fromCharCode(112,95,49,54,95,109,101,109,98,101,114,0);
          let actives = String.fromCharCode(119,97,108,108,0);
          let dialogp = String.fromCharCode(109,97,110,117,97,108,95,56,95,51,53,0);
          let linkE = 2.0;
         banner2 += `${switch_5v.length * actives.length}`;
         plus0 *= dialogp.length;
         switch_5v = `${plus0 / 2}`;
         actives = "1";
         dialogp = `${parseInt(`${linkE}`)}`;
         linkE /= Math.max(parseFloat(`${dialogp.length}`), 4);
         break;
      }
         volume3 *= (parseFloat(`${String.fromCharCode(70,0) == banner2 ? banner2.length : parseInt(`${volume3}`)}`));
      for (let z = 0; z < 2; z++) {
         settingK = `${settingK.length}`;
      }
      activej <<= Math.min(4, Math.abs(1 * activej));
      break;
   }
   if (splashN) {
       let renewC = 5.0;
       let updatesH = 2.0;
       let guideY = String.fromCharCode(114,101,99,111,114,100,95,102,95,55,53,0);
       let appleB = String.fromCharCode(117,112,100,97,116,105,110,103,95,114,95,56,54,0);
       let updates0 = String.fromCharCode(101,110,99,97,112,95,104,95,49,55,0);
          let successn = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,116,95,52,48,0);
         updatesH *= parseFloat(`${3}`);
         successn = `${successn.length}`;
         guideY += `${(String.fromCharCode(56,0) == guideY ? guideY.length : parseInt(`${renewC}`))}`;
      while (guideY != appleB) {
         appleB = `${(guideY == String.fromCharCode(114,0) ? parseInt(`${renewC}`) : guideY.length)}`;
         break;
      }
          let shirt7 = false;
          let black_: Map<any, any> = new Map([[String.fromCharCode(98,95,56,55,95,105,113,109,112,0),577], [String.fromCharCode(106,97,99,107,95,117,95,50,52,0),524], [String.fromCharCode(100,101,97,100,108,105,110,101,95,112,95,55,55,0),704]]);
         updatesH /= Math.max(3, parseFloat(`${1 & appleB.length}`));
         shirt7 = black_.get(`${shirt7}`) == null;
         black_.set(`${shirt7}`, ((shirt7 ? 2 : 5) / (Math.max(black_.size, 7))));
       let renewW: Array<any> = [147, 882];
       let overs: Array<any> = [139, 5, 651];
      if (appleB.length > updates0.length) {
          let pauseF: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,0),true ], [String.fromCharCode(115,116,97,114,116,115,0),true ]]);
         updates0 += `${appleB.length | 3}`;
         pauseF = new Map([[`${pauseF.size}`, pauseF.size]]);
      }
       let downq: Array<any> = [857, 610, 491];
       let auto_4j = String.fromCharCode(102,111,99,117,115,101,100,95,118,95,55,49,0);
       let b_imageq = String.fromCharCode(102,95,56,52,95,119,97,116,99,104,100,111,103,0);
       let umengj = false;
       let borderlesso = false;
      while (umengj) {
         downq.push(2);
         break;
      }
          let configure0 = String.fromCharCode(97,98,108,0);
          let handlerI = String.fromCharCode(118,95,51,51,95,118,105,115,117,97,108,108,121,0);
         b_imageq = `${(auto_4j == String.fromCharCode(77,0) ? auto_4j.length : handlerI.length)}`;
         configure0 = `${(configure0 == String.fromCharCode(75,0) ? configure0.length : configure0.length)}`;
         handlerI = "3";
      let specZ = renewW.length <= 5651196;
      do {
          let rightn: Map<any, any> = new Map([[String.fromCharCode(105,95,54,50,95,116,104,114,101,115,104,0),310], [String.fromCharCode(115,112,101,101,100,104,113,95,50,95,53,55,0),620]]);
          let borderlessB = 3.0;
          let searchbarc = 1.0;
         renewW = [appleB.length ^ 3];
         rightn = new Map([[`${rightn.size}`, rightn.size << (Math.min(Math.abs(3), 3))]]);
         borderlessB /= Math.max(2, rightn.size & parseInt(`${borderlessB}`));
         searchbarc *= 3 + parseInt(`${borderlessB}`);
         if (specZ) {
            break;
         }
      } while (specZ && ((renewW.length >> (Math.min(Math.abs(5), 5))) >= 5 || 5 >= (renewW.length >> (Math.min(Math.abs(5), 3)))));
      for (let w = 0; w < 1; w++) {
         b_imageq += `${guideY.length}`;
      }
      while (4 <= (auto_4j.length / 5) || 1 <= (5 | auto_4j.length)) {
         renewC -= parseFloat(`${overs.length | renewW.length}`);
         break;
      }
      if (borderlesso) {
         borderlesso = !borderlesso;
      }
      activej %= Math.max(2, 2 / (Math.max(1, parseInt(`${renewC}`))));
   }
   while ((3.24 * submiti) <= 5.34) {
      submiti += 1 * checkbox8;
      break;
   }
   for (let w = 0; w < 2; w++) {
       let typesy: Map<any, any> = new Map([[String.fromCharCode(103,101,111,98,116,97,103,95,121,95,52,54,0),975], [String.fromCharCode(99,104,114,111,109,97,116,105,99,0),129], [String.fromCharCode(100,101,102,97,117,108,116,95,52,95,52,54,0),786]]);
       let untickF = String.fromCharCode(109,117,116,97,116,101,95,106,95,56,57,0);
       let relatedE: Array<any> = [562, 200];
      while (!Array.from(typesy.values()).includes(relatedE.length)) {
         relatedE = [1];
         break;
      }
         relatedE = [typesy.size - relatedE.length];
         relatedE = [3 >> (Math.min(4, relatedE.length))];
         typesy = new Map([[`${typesy.size}`, 3]]);
         untickF = `${(String.fromCharCode(77,0) == untickF ? untickF.length : relatedE.length)}`;
       let umengz = 5.0;
       let gpayj = 4.0;
         relatedE.push(parseInt(`${gpayj}`) + parseInt(`${umengz}`));
         umengz *= (parseFloat(`${untickF == String.fromCharCode(99,0) ? untickF.length : typesy.size}`));
      let goali = 5976054 >= typesy.size;
      do {
         typesy.set(`${umengz}`, 1);
         if (goali) {
            break;
         }
      } while (((5 & typesy.size) <= 4 || 5 <= (relatedE.length & typesy.size)) && goali);
      activej -= relatedE.length;
   }

        if (this.showLog) console.log('trigger event id:', YUpgrade.YHalf);
    }


    
    static searchResultViewsAnalytics = () => {
       let analytic5 = true;
    let sharedt = String.fromCharCode(121,95,51,95,100,111,109,97,105,110,115,0);
    let f_count5 = true;
    let fastforwardw = String.fromCharCode(114,101,115,111,108,118,0);
    let castinga = 1.0;
    let googleu = 2.0;
    let typing2 = 0;
    let logoutT = 5.0;
    let networka: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,100,95,56,50,0),String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,113,95,52,50,0)], [String.fromCharCode(98,95,57,56,95,111,110,116,97,99,116,115,0),String.fromCharCode(99,105,116,121,95,111,95,50,0)], [String.fromCharCode(122,95,51,56,95,104,97,110,100,101,114,0),String.fromCharCode(116,95,55,53,95,99,99,105,116,116,0)]]);
    let handlert = 2.0;
    let mutedS = 2.0;
    let bottom_: Map<any, any> = new Map([[String.fromCharCode(99,104,105,108,100,114,101,110,95,55,95,54,55,0),982], [String.fromCharCode(108,95,56,95,99,111,108,108,101,99,116,111,114,0),597]]);
    let send3 = String.fromCharCode(105,95,50,51,95,119,114,105,116,101,105,110,105,116,0);
    let castC: Array<any> = [989, 620, 878];
    let playz = String.fromCharCode(116,95,54,56,95,114,101,115,116,114,105,99,116,105,111,110,115,0);
   while (4.41 <= (logoutT * 5)) {
      googleu -= parseFloat(`${3}`);
      break;
   }
       let condensedu = String.fromCharCode(109,95,49,51,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0);
       let historym = String.fromCharCode(118,95,57,56,95,114,101,109,105,120,105,110,103,0);
      if (condensedu == historym) {
         historym += `${historym.length}`;
      }
         condensedu += "1";
         historym += `${historym.length & 1}`;
         historym = "3";
          let feedback0 = String.fromCharCode(115,116,115,100,95,49,95,55,52,0);
          let miniW = 2.0;
          let control4 = String.fromCharCode(114,95,53,48,95,115,112,97,116,105,97,108,0);
         condensedu += `${parseInt(`${miniW}`)}`;
         feedback0 = `${(control4 == String.fromCharCode(108,0) ? control4.length : feedback0.length)}`;
         miniW += control4.length % 1;
         condensedu += `${condensedu.length * 3}`;
      castinga /= Math.max(3 + typing2, 5);
   if (5 < (3 - networka.size) || (networka.size - fastforwardw.length) < 3) {
      fastforwardw = `${typing2 << (Math.min(Math.abs(3), 2))}`;
   }
   for (let e = 0; e < 1; e++) {
      f_count5 = bottom_.size <= 59 || networka.size <= 59;
   }
       let vietnamw = 4;
      let loadingR = vietnamw >= 9265570;
      do {
         vietnamw -= vietnamw ^ vietnamw;
         if (loadingR) {
            break;
         }
      } while (loadingR && (1 == (vietnamw & vietnamw) && 1 == (vietnamw & vietnamw)));
      if (vietnamw == vietnamw) {
         vietnamw *= 1;
      }
      for (let q = 0; q < 2; q++) {
         vietnamw %= Math.max(3, 5);
      }
      sharedt = `${3 % (Math.max(3, parseInt(`${logoutT}`)))}`;
      analytic5 = fastforwardw == String.fromCharCode(71,0);
   let navigationC = fastforwardw == String.fromCharCode(50,119,109,108,56,120,101,0);
   do {
      fastforwardw = "1";
      if (navigationC) {
         break;
      }
   } while (((bottom_.size % (Math.max(5, 4))) > 2 && 5 > (fastforwardw.length % (Math.max(3, bottom_.size)))) && navigationC);

        AnalyticsUtil.onEventWithMap(YUpgrade.YMutedBlack, {});

      f_count5 = !analytic5;
       let plusY = String.fromCharCode(108,95,50,48,95,105,110,116,114,97,120,98,108,111,99,107,0);
       let middlewareM = true;
       let helpert = 0;
      while (1 < (2 & plusY.length) && 2 < (plusY.length & helpert)) {
          let fillf = String.fromCharCode(99,121,99,108,101,100,95,50,95,53,49,0);
          let sportw = String.fromCharCode(105,95,50,55,95,109,117,108,120,0);
          let rewindv = 1;
          let muted8: Array<any> = [768, 627, 690];
         plusY += `${((middlewareM ? 4 : 1) + 1)}`;
         fillf = "1";
         sportw = `${(String.fromCharCode(48,0) == sportw ? muted8.length : sportw.length)}`;
         rewindv ^= fillf.length % 2;
         muted8 = [1 * rewindv];
         break;
      }
       let empty8 = 4.0;
         middlewareM = !middlewareM;
      if (!middlewareM) {
         plusY = `${helpert}`;
      }
      if (empty8 >= 3.78) {
         helpert &= 1;
      }
         empty8 -= parseFloat(`${plusY.length}`);
      for (let a = 0; a < 2; a++) {
         middlewareM = !plusY.startsWith(`${middlewareM}`);
      }
         middlewareM = String.fromCharCode(120,0) == plusY;
      if (plusY.length == 5) {
         empty8 -= parseFloat(`${parseInt(`${empty8}`) >> (Math.min(1, Math.abs(3)))}`);
      }
      mutedS *= parseFloat(`${3 ^ parseInt(`${castinga}`)}`);
       let faviconN = 4;
       let countryc = 3;
         faviconN ^= countryc / (Math.max(3, 8));
       let clocky = String.fromCharCode(118,95,52,55,95,111,108,100,108,105,115,116,0);
       let yellowd = String.fromCharCode(98,95,50,48,95,97,118,118,115,0);
       let bodanT = false;
       let fulls = true;
      while ((countryc | 5) <= 2 || bodanT) {
         bodanT = faviconN > countryc;
         break;
      }
         yellowd = `${3 << (Math.min(3, Math.abs(faviconN)))}`;
      while (yellowd.length > 3 && !bodanT) {
         bodanT = yellowd == String.fromCharCode(70,0);
         break;
      }
      castinga *= (parseInt(`${logoutT}`) >> (Math.min(5, Math.abs((f_count5 ? 4 : 2)))));
   if (!f_count5) {
      f_count5 = f_count5 || handlert < 76.88;
   }
   while (2.49 < (castinga * 4)) {
      googleu += parseFloat(`${parseInt(`${castinga}`)}`);
      break;
   }
   let albumk = f_count5 ? !f_count5 : f_count5;
   do {
      f_count5 = String.fromCharCode(72,0) == sharedt;
      if (albumk) {
         break;
      }
   } while ((f_count5) && albumk);
      sharedt = `${(parseInt(`${mutedS}`) ^ (analytic5 ? 3 : 1))}`;
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YInactiveGreen,
        });

      castinga *= parseInt(`${castinga}`) - 1;
   let teame = googleu <= 9735765.0;
   do {
      googleu /= Math.max(parseFloat(`${typing2}`), 2);
      if (teame) {
         break;
      }
   } while ((3.73 >= (googleu * 1.85) && 4.14 >= (googleu * 1.85)) && teame);
   for (let l = 0; l < 1; l++) {
      sharedt += `${parseInt(`${castinga}`) | 1}`;
   }
      logoutT *= parseInt(`${handlert}`);
      handlert += parseFloat(`${parseInt(`${mutedS}`) * 3}`);
       let modelsI: Array<any> = [String.fromCharCode(100,95,50,49,95,119,97,108,108,97,112,101,114,115,0), String.fromCharCode(108,95,51,53,95,98,105,108,97,116,101,114,97,108,0)];
       let type_77 = 5.0;
       let showw: Map<any, any> = new Map([[String.fromCharCode(101,110,103,108,105,115,104,95,110,95,50,57,0),134], [String.fromCharCode(100,105,115,97,112,112,101,97,114,95,113,95,56,51,0),209]]);
         showw = new Map([[`${modelsI.length}`, parseInt(`${type_77}`)]]);
         showw = new Map([[`${showw.size}`, 3]]);
      let profileF = 8211862.0 >= type_77;
      do {
         type_77 += 2;
         if (profileF) {
            break;
         }
      } while (profileF && (modelsI.includes(type_77)));
         showw.set(`${modelsI.length}`, showw.size << (Math.min(modelsI.length, 5)));
       let skipT: Array<any> = [379, 874];
       let halfF: Array<any> = [939, 530, 563];
          let dialogW: Array<any> = [String.fromCharCode(117,95,49,55,95,114,101,102,111,99,117,115,0), String.fromCharCode(113,108,111,103,115,95,119,95,56,0), String.fromCharCode(115,108,97,118,101,115,95,111,95,51,54,0)];
          let vietnam0 = 5;
         skipT.push(parseInt(`${type_77}`) ^ 1);
         dialogW.push(dialogW.length % (Math.max(7, vietnam0)));
         vietnam0 >>= Math.min(3, Math.abs(dialogW.length << (Math.min(1, Math.abs(vietnam0)))));
          let albumK = String.fromCharCode(116,95,54,53,95,99,111,100,101,99,105,100,0);
          let becomeQ: Array<any> = [505, 646];
          let hongkongW = 4.0;
         modelsI.push(parseInt(`${type_77}`));
         albumK += `${parseInt(`${hongkongW}`) ^ 3}`;
         becomeQ.push(2);
         hongkongW *= albumK.length;
      let emptyD = showw.size <= 6452333;
      do {
         showw.set(`${type_77}`, modelsI.length >> (Math.min(Math.abs(3), 3)));
         if (emptyD) {
            break;
         }
      } while (emptyD && (!Array.from(showw.values()).includes(halfF.length)));
          let actionsu = String.fromCharCode(101,95,53,57,0);
          let sina5 = 3.0;
          let modulea: Map<any, any> = new Map([[String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,115,95,55,49,0),804], [String.fromCharCode(114,95,54,52,95,108,105,98,109,0),954], [String.fromCharCode(115,95,49,55,95,101,110,100,101,100,0),818]]);
         halfF.push((String.fromCharCode(87,0) == actionsu ? halfF.length : actionsu.length));
         sina5 /= Math.max(3, modulea.size % 1);
         modulea = new Map([[`${modulea.size}`, modulea.size & parseInt(`${sina5}`)]]);
      bottom_ = new Map([[`${networka.size}`, 3 - networka.size]]);
      networka = new Map([[`${bottom_.size}`, bottom_.size * send3.length]]);

        if (this.showLog) console.log('trigger event id:', YUpgrade.YMutedBlack);
    }

    static searchResultClicksAnalytics = () => {
       let collectionR = String.fromCharCode(101,103,117,108,97,114,95,109,95,51,50,0);
    let plashy = String.fromCharCode(98,95,49,51,95,100,105,103,105,116,99,111,117,110,116,0);
    let page0 = 4.0;
    let s_lockB = String.fromCharCode(115,110,97,112,112,101,100,95,105,95,55,57,0);
    let halfT = 0;
    let downloadingl = true;
    let largeI: Array<any> = [232, 284, 488];
    let emptyp: Map<any, any> = new Map([[String.fromCharCode(103,95,49,49,95,109,118,99,111,110,116,101,120,116,115,0),false ], [String.fromCharCode(98,95,57,49,95,115,105,98,108,105,110,103,0),false ]]);
    let calendarJ = String.fromCharCode(100,105,116,104,101,114,95,57,95,50,56,0);
    let philippinesf = String.fromCharCode(108,95,52,57,95,116,105,109,101,118,97,108,0);
    let blacklistz = 3.0;
    let minimizeO = String.fromCharCode(101,95,53,52,95,100,114,97,103,103,97,98,108,101,0);
   for (let k = 0; k < 1; k++) {
       let launchp = 0.0;
          let helper8 = String.fromCharCode(102,109,97,100,100,0);
         launchp -= parseFloat(`${parseInt(`${launchp}`)}`);
         helper8 = `${helper8.length}`;
          let shareY = 4.0;
          let halfh = false;
          let episodesL = 1.0;
         launchp += parseFloat(`${parseInt(`${shareY}`) | 2}`);
         shareY += (parseFloat(`${parseInt(`${episodesL}`) & (halfh ? 1 : 2)}`));
         halfh = episodesL > 17.24;
      for (let c = 0; c < 1; c++) {
         launchp -= parseFloat(`${parseInt(`${launchp}`)}`);
      }
      halfT &= ((downloadingl ? 4 : 1));
   }
       let chatp = String.fromCharCode(109,97,106,95,56,95,50,50,0);
       let splashD = 3;
      let dialogF = chatp == String.fromCharCode(114,112,100,101,51,57,0);
      do {
         chatp += `${splashD}`;
         if (dialogF) {
            break;
         }
      } while ((1 < splashD) && dialogF);
         chatp = `${splashD / 2}`;
      for (let n = 0; n < 1; n++) {
          let crossz = String.fromCharCode(101,120,116,114,97,100,97,116,97,95,106,95,56,0);
          let infoi = 3;
         splashD |= 3;
         crossz += `${(crossz == String.fromCharCode(66,0) ? crossz.length : infoi)}`;
         infoi ^= infoi;
      }
       let signinupT = String.fromCharCode(108,105,102,101,99,121,99,108,101,95,54,95,49,51,0);
      if (!signinupT.startsWith(`${splashD}`)) {
         signinupT = `${1 * signinupT.length}`;
      }
         signinupT += `${splashD}`;
      downloadingl = splashD <= emptyp.size;
   while (5 <= (halfT + 2) && (2 + halfT) <= 1) {
       let tick6 = true;
       let p_centerz = 2;
       let blacklistT = String.fromCharCode(115,116,114,111,107,101,95,50,95,56,49,0);
       let h_titleS: Map<any, any> = new Map([[String.fromCharCode(101,95,54,49,95,97,115,121,110,99,0),String.fromCharCode(101,97,115,101,95,98,95,52,54,0)], [String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,109,95,55,48,0),String.fromCharCode(102,95,52,54,95,98,105,103,117,105,110,116,0)]]);
         tick6 = blacklistT.length > 91;
      for (let p = 0; p < 3; p++) {
         p_centerz -= (blacklistT == String.fromCharCode(110,0) ? (tick6 ? 4 : 1) : blacklistT.length);
      }
         blacklistT += "2";
      for (let f = 0; f < 3; f++) {
         tick6 = h_titleS.get(`${tick6}`) == null;
      }
          let humidity7: Map<any, any> = new Map([[String.fromCharCode(101,95,50,53,95,97,99,100,115,112,0),String.fromCharCode(113,95,49,54,95,103,108,121,112,104,0)], [String.fromCharCode(109,106,112,101,103,101,110,99,95,52,95,55,48,0),String.fromCharCode(115,116,114,109,95,55,95,49,48,0)], [String.fromCharCode(104,119,117,112,108,111,97,100,0),String.fromCharCode(108,111,111,107,115,95,106,95,54,51,0)]]);
          let collectionA: Array<any> = [774, 958];
         tick6 = (humidity7.size << (Math.min(2, Math.abs(p_centerz)))) <= 35;
         humidity7.set(`${collectionA.length}`, collectionA.length & 2);
         tick6 = p_centerz <= 72;
      while ((h_titleS.size ^ 3) >= 2 || 3 >= h_titleS.size) {
         tick6 = h_titleS.size < 2;
         break;
      }
       let nextm = String.fromCharCode(108,95,52,49,95,112,112,102,108,97,103,115,0);
       let gemfileC = String.fromCharCode(111,95,56,50,95,115,119,114,101,115,97,109,112,108,101,114,101,115,0);
      if (5 == gemfileC.length) {
         tick6 = blacklistT.length < gemfileC.length;
      }
         gemfileC += `${(String.fromCharCode(67,0) == blacklistT ? h_titleS.size : blacklistT.length)}`;
      for (let v = 0; v < 1; v++) {
         h_titleS = new Map([[`${h_titleS.size}`, nextm.length]]);
      }
          let submit5 = String.fromCharCode(105,99,111,110,105,99,95,101,95,49,54,0);
         nextm = `${2 << (Math.min(5, nextm.length))}`;
         submit5 = `${submit5.length}`;
      emptyp = new Map([[`${downloadingl}`, blacklistT.length ^ 3]]);
      break;
   }
   let tooltipse = page0 <= 9469771.0;
   do {
      page0 *= halfT << (Math.min(Math.abs(3), 5));
      if (tooltipse) {
         break;
      }
   } while (tooltipse && ((page0 + 5.21) >= 5.24 || (page0 / 5.21) >= 4.94));
      largeI = [parseInt(`${blacklistz}`)];
   let floaterC = String.fromCharCode(98,112,117,103,54,101,49,112,0) == minimizeO;
   do {
      minimizeO += "1";
      if (floaterC) {
         break;
      }
   } while ((1 >= minimizeO.length) && floaterC);
      s_lockB += `${2 + halfT}`;
      collectionR = `${emptyp.size * 1}`;

        AnalyticsUtil.onEventWithMap(YUpgrade.YConfirmationRules, {});

      s_lockB += `${parseInt(`${page0}`) << (Math.min(Math.abs(3), 1))}`;
      calendarJ = `${minimizeO.length / (Math.max(3, 4))}`;
       let membershipf = 1;
         membershipf ^= membershipf << (Math.min(Math.abs(membershipf), 5));
      for (let m = 0; m < 2; m++) {
         membershipf *= membershipf << (Math.min(Math.abs(3), 5));
      }
          let thumbnailc = String.fromCharCode(110,101,105,103,104,98,111,117,114,95,98,95,51,56,0);
         membershipf >>= Math.min(Math.abs(membershipf), 5);
         thumbnailc += `${thumbnailc.length & thumbnailc.length}`;
      halfT ^= calendarJ.length;
   let rightk = 8569496.0 <= blacklistz;
   do {
       let h_playeru: Map<any, any> = new Map([[String.fromCharCode(101,95,57,53,95,104,97,118,105,110,103,0),539], [String.fromCharCode(121,95,55,57,95,110,97,109,101,115,112,97,99,101,115,0),796], [String.fromCharCode(99,104,97,110,103,101,95,57,95,54,56,0),653]]);
       let with_qx = 1.0;
       let assistC = true;
       let backgroundQ = 2;
      while (assistC && (1.22 - with_qx) >= 1.17) {
          let strw = 2.0;
          let benefitn = 5.0;
          let acceptedo = 3.0;
          let benefit9: Map<any, any> = new Map([[String.fromCharCode(116,114,105,109,109,105,110,103,95,111,95,57,56,0),String.fromCharCode(99,117,114,114,114,101,110,116,95,113,95,54,48,0)], [String.fromCharCode(98,95,51,48,95,97,110,109,114,0),String.fromCharCode(118,99,114,101,97,116,101,95,105,95,49,49,0)], [String.fromCharCode(99,97,115,116,95,48,95,50,51,0),String.fromCharCode(108,95,57,51,95,101,120,112,114,101,115,115,0)]]);
          let leftf = String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,115,95,52,57,0);
         assistC = (acceptedo + benefitn) == 39.66;
         strw /= Math.max(parseFloat(`${benefit9.size}`), 1);
         benefitn *= parseFloat(`${3 * benefit9.size}`);
         acceptedo *= (String.fromCharCode(52,0) == leftf ? leftf.length : benefit9.size);
         break;
      }
         backgroundQ *= (3 & (assistC ? 4 : 5));
         h_playeru = new Map([[`${h_playeru.size}`, parseInt(`${with_qx}`)]]);
      if (assistC) {
          let buffer9: Array<any> = [649, 94, 970];
          let floatera = 5.0;
          let downloaderK = String.fromCharCode(98,95,49,56,95,97,112,112,101,97,114,101,100,0);
          let pageq: Map<any, any> = new Map([[String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,100,95,57,0),String.fromCharCode(100,95,54,54,95,112,97,103,101,115,0)], [String.fromCharCode(114,101,99,97,108,99,95,98,95,54,54,0),String.fromCharCode(104,119,116,105,109,101,95,53,95,52,48,0)], [String.fromCharCode(109,95,56,95,115,116,114,116,97,103,0),String.fromCharCode(105,95,57,53,95,105,99,119,114,115,105,0)]]);
          let fieldx = 1.0;
         with_qx /= Math.max(parseInt(`${floatera}`) ^ 1, 2);
         buffer9 = [downloaderK.length];
         floatera += downloaderK.length;
         pageq.set(`${fieldx}`, buffer9.length);
         fieldx += (downloaderK == String.fromCharCode(104,0) ? downloaderK.length : buffer9.length);
      }
      for (let l = 0; l < 1; l++) {
          let collectionf = 3.0;
          let commonI = 2.0;
          let networkS = 4;
         assistC = collectionf >= 59.11 && 54 >= h_playeru.size;
         collectionf -= parseFloat(`${parseInt(`${commonI}`)}`);
         commonI *= parseFloat(`${parseInt(`${commonI}`)}`);
         networkS |= networkS + parseInt(`${commonI}`);
      }
         assistC = backgroundQ <= h_playeru.size;
       let hooksc = false;
       let mailU = true;
         mailU = (hooksc ? assistC : hooksc);
      if (!mailU || (2 + h_playeru.size) == 5) {
         mailU = (hooksc ? mailU : !hooksc);
      }
       let layoutS = String.fromCharCode(108,105,118,101,109,111,100,101,95,54,95,54,50,0);
       let umengH = String.fromCharCode(115,116,101,108,108,97,114,95,105,95,53,50,0);
         mailU = h_playeru.size > layoutS.length;
      for (let c = 0; c < 1; c++) {
         mailU = umengH == String.fromCharCode(55,0);
      }
      blacklistz /= Math.max(1, 2);
      if (rightk) {
         break;
      }
   } while (rightk && ((parseInt(`${blacklistz}`) + emptyp.size) >= 5 || (blacklistz + 2.4) >= 2.39));
      s_lockB += "2";
   while (plashy != calendarJ) {
       let header5 = String.fromCharCode(115,95,52,57,95,111,112,101,110,115,115,108,99,111,110,102,0);
          let stepV: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,95,108,111,99,97,108,104,111,115,116,0),false ], [String.fromCharCode(97,116,116,114,105,98,117,116,101,115,95,110,95,56,51,0),false ]]);
          let dialog4 = 0;
          let collectionU: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,97,117,116,104,111,114,105,122,97,116,105,111,110,115,0),true ], [String.fromCharCode(117,99,104,97,114,95,56,95,50,51,0),true ]]);
         header5 = `${dialog4 % 1}`;
         stepV.set(`${collectionU.size}`, stepV.size);
         dialog4 *= stepV.size;
         collectionU = new Map([[`${stepV.size}`, collectionU.size * stepV.size]]);
      if (header5 != String.fromCharCode(112,0)) {
          let long_q6: Array<any> = [855, 430, 765];
          let plusH = String.fromCharCode(120,95,49,48,48,95,116,112,99,0);
          let typingF: Map<any, any> = new Map([[String.fromCharCode(97,114,99,104,105,118,101,100,95,120,95,52,54,0),289], [String.fromCharCode(99,111,108,108,101,99,116,0),677]]);
         header5 += `${plusH.length}`;
         long_q6.push(long_q6.length);
         plusH = `${typingF.size}`;
         typingF = new Map([[`${typingF.size}`, 2]]);
      }
      for (let d = 0; d < 2; d++) {
         header5 += `${header5.length % 2}`;
      }
      calendarJ = `${emptyp.size >> (Math.min(5, Math.abs(halfT)))}`;
      break;
   }
   while (!downloadingl) {
      downloadingl = largeI.length >= blacklistz;
      break;
   }
   for (let j = 0; j < 3; j++) {
      minimizeO = `${halfT % 3}`;
   }
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YInactiveGreen,
        });

   if (plashy.length > 5) {
       let shirts = 0.0;
      if (5.72 < shirts) {
         shirts *= 3;
      }
         shirts /= Math.max(parseInt(`${shirts}`), 5);
      while ((shirts / (Math.max(3.78, 9))) == 2.61 && 3.53 == (shirts + 3.78)) {
         shirts -= 2 * parseInt(`${shirts}`);
         break;
      }
      page0 /= Math.max(1, calendarJ.length);
   }
   while (2 == (s_lockB.length - largeI.length) && 2 == (largeI.length - s_lockB.length)) {
      largeI.push((String.fromCharCode(85,0) == calendarJ ? calendarJ.length : parseInt(`${page0}`)));
      break;
   }
   if (!minimizeO.endsWith(`${plashy.length}`)) {
      plashy += `${1 * emptyp.size}`;
   }
      plashy += `${2 ^ emptyp.size}`;
       let private_oF = String.fromCharCode(109,117,108,115,117,98,95,110,95,49,53,0);
       let filedC = 4.0;
          let benefitH = String.fromCharCode(110,111,97,108,108,111,99,95,55,95,51,55,0);
         filedC /= Math.max((private_oF == String.fromCharCode(53,0) ? private_oF.length : benefitH.length), 3);
      for (let g = 0; g < 2; g++) {
         private_oF += `${private_oF.length / 3}`;
      }
      while ((private_oF.length + parseInt(`${filedC}`)) >= 1 && (filedC + private_oF.length) >= 2.36) {
          let kick_ = 2.0;
          let topice: Map<any, any> = new Map([[String.fromCharCode(100,95,55,95,112,111,115,116,112,111,110,101,100,0),353], [String.fromCharCode(119,95,56,55,95,99,111,110,116,114,111,108,101,114,115,0),679], [String.fromCharCode(112,95,56,53,95,97,114,116,0),286]]);
          let downloadedt = false;
          let change7 = String.fromCharCode(101,110,118,105,114,111,110,109,101,110,116,95,110,95,53,0);
         filedC /= Math.max((String.fromCharCode(120,0) == private_oF ? parseInt(`${filedC}`) : private_oF.length), 2);
         kick_ /= Math.max(2, 1 * topice.size);
         topice.set(change7, ((downloadedt ? 3 : 3) % (Math.max(change7.length, 4))));
         downloadedt = !downloadedt;
         break;
      }
         private_oF = `${private_oF.length}`;
       let internetM = 0.0;
      for (let a = 0; a < 2; a++) {
         internetM *= parseFloat(`${parseInt(`${internetM}`) & 1}`);
      }
      downloadingl = blacklistz <= 61.85 || halfT <= 71;
       let actionM: Array<any> = [505, 810];
       let greyD = 5;
       let windD = String.fromCharCode(119,114,97,112,112,101,100,95,118,95,54,51,0);
      let reportp = greyD <= 8164217;
      do {
         greyD |= greyD;
         if (reportp) {
            break;
         }
      } while (reportp && (greyD >= 2));
         actionM = [greyD >> (Math.min(actionM.length, 3))];
      for (let x = 0; x < 2; x++) {
          let half6 = 1;
         actionM = [3 / (Math.max(10, windD.length))];
         half6 /= Math.max(2, 3);
      }
      if ((greyD & 2) < 5) {
          let moonO = String.fromCharCode(105,95,50,95,116,111,121,115,0);
         greyD %= Math.max(3, (moonO == String.fromCharCode(65,0) ? moonO.length : windD.length));
      }
         actionM = [3];
      while ((3 & greyD) > 3 && 3 > (3 & greyD)) {
         greyD |= windD.length;
         break;
      }
          let tempL = String.fromCharCode(115,95,52,50,95,115,116,114,101,114,114,111,114,0);
         windD += `${greyD / (Math.max(windD.length, 10))}`;
         tempL = `${tempL.length * tempL.length}`;
      let frame_9st = 8541102 >= actionM.length;
      do {
          let sina4 = 2.0;
          let gemfileW: Array<any> = [745, 951, 917];
          let countryr: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,53,95,54,49,0),643], [String.fromCharCode(102,105,110,105,115,104,95,113,95,55,52,0),831], [String.fromCharCode(99,111,111,108,100,111,119,110,115,0),747]]);
          let unselectedg = 0.0;
         actionM = [greyD];
         sina4 /= Math.max(parseFloat(`${parseInt(`${sina4}`)}`), 3);
         gemfileW = [1];
         countryr = new Map([[`${countryr.size}`, 3]]);
         unselectedg -= gemfileW.length * parseInt(`${sina4}`);
         if (frame_9st) {
            break;
         }
      } while ((actionM.length >= 3) && frame_9st);
          let singleF = String.fromCharCode(97,95,50,48,95,111,103,103,0);
          let downloadingE = String.fromCharCode(116,95,52,54,95,112,97,115,116,101,98,111,97,114,100,0);
          let largey = 0.0;
         actionM.push(actionM.length);
         singleF += `${parseInt(`${largey}`)}`;
         downloadingE += `${(downloadingE == String.fromCharCode(114,0) ? downloadingE.length : parseInt(`${largey}`))}`;
      blacklistz /= Math.max(3, 2 | emptyp.size);
   while (!s_lockB.endsWith(`${downloadingl}`)) {
      s_lockB += `${minimizeO.length}`;
      break;
   }
       let hooksg: Array<any> = [903, 867];
       let c_positionO = String.fromCharCode(118,114,97,115,116,101,114,95,53,95,54,53,0);
       let shrinkB = 5.0;
      let friends9 = 8913863 >= hooksg.length;
      do {
         hooksg = [hooksg.length];
         if (friends9) {
            break;
         }
      } while (friends9 && (3 < c_positionO.length));
         c_positionO += `${2 >> (Math.min(4, hooksg.length))}`;
      let expiredD = 5089641 >= hooksg.length;
      do {
         hooksg.push((c_positionO == String.fromCharCode(95,0) ? c_positionO.length : hooksg.length));
         if (expiredD) {
            break;
         }
      } while ((!hooksg.includes(shrinkB)) && expiredD);
      while (!c_positionO.includes(`${hooksg.length}`)) {
         c_positionO += `${parseInt(`${shrinkB}`) | 3}`;
         break;
      }
      if (c_positionO.includes(`${shrinkB}`)) {
          let bellI = 0.0;
          let rankm = 2.0;
         shrinkB *= parseInt(`${bellI}`) >> (Math.min(Math.abs(parseInt(`${shrinkB}`)), 2));
         bellI *= parseInt(`${rankm}`) & parseInt(`${rankm}`);
      }
         shrinkB /= Math.max(5, 3 - hooksg.length);
         c_positionO += `${1 - hooksg.length}`;
      for (let u = 0; u < 3; u++) {
         shrinkB -= (String.fromCharCode(56,0) == c_positionO ? c_positionO.length : parseInt(`${shrinkB}`));
      }
          let whitey = String.fromCharCode(101,120,99,101,101,100,115,0);
         c_positionO = `${parseInt(`${shrinkB}`) >> (Math.min(hooksg.length, 1))}`;
         whitey += `${(String.fromCharCode(118,0) == whitey ? whitey.length : whitey.length)}`;
      halfT -= s_lockB.length % (Math.max(plashy.length, 4));

        if (this.showLog) console.log('trigger event id:', YUpgrade.YConfirmationRules);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YModity, {
            'keyword': keyword,
        });
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YSelected,
            params: {
                desc_1: keyword,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YModity);
    }


    
    static catalogViewsAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YRoom, {
            'category_id': category_id,
            'category_name': category_name,
        });
        NCatalog.onEvent({
            type: 'view',
            title: SSellLayout.YInfo,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YRoom);
    }

    static catalogClicksAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YService, {
            'category_id': category_id,
            'category_name': category_name,
        });
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YInfo,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YService);
    }


    
    static playsViewsAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = YUpgrade.YTeamDesc;

        if (isXmode) {
            eventId = YUpgrade.YRefreshProgress;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        NCatalog.onEvent({
            type: 'view',
            title: isXmode ? SSellLayout.YPlayer : SSellLayout.YFiledPause,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = YUpgrade.YDrag;

        if (isXmode) {
            eventId = YUpgrade.YFullCondensed;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        NCatalog.onEvent({
            type: 'view',
            title: isXmode ? SSellLayout.YDownloadingBootsplash : SSellLayout.YDisconnected,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsShareClicksAnalytics = () => {
       let floatingt = String.fromCharCode(112,95,54,51,95,100,101,99,114,121,112,116,0);
    let stationP: Array<any> = [71, 368, 726];
    let cornerc = String.fromCharCode(116,114,97,110,115,105,116,95,51,95,50,57,0);
    let jcopy_w93 = 1.0;
    let minivodW = 5.0;
    let condensedI = String.fromCharCode(113,95,52,53,95,102,111,117,114,115,113,117,97,114,101,0);
    let dataH: Map<any, any> = new Map([[String.fromCharCode(99,108,111,99,107,100,114,105,102,116,95,57,95,50,48,0),452], [String.fromCharCode(100,105,115,97,112,112,101,97,114,95,106,95,51,55,0),287]]);
    let matchesh = String.fromCharCode(115,105,98,108,105,110,103,115,95,102,95,52,0);
    let private_8s5: Array<any> = [24, 82];
      dataH = new Map([[`${dataH.size}`, parseInt(`${minivodW}`)]]);
   let sliderQ = matchesh.length <= 8837774;
   do {
      matchesh = `${1 * matchesh.length}`;
      if (sliderQ) {
         break;
      }
   } while (sliderQ && (floatingt != String.fromCharCode(100,0)));
      stationP.push(parseInt(`${jcopy_w93}`));
      stationP = [2];
   let assistN = 9452305 >= stationP.length;
   do {
      stationP = [parseInt(`${minivodW}`) >> (Math.min(stationP.length, 2))];
      if (assistN) {
         break;
      }
   } while ((4.75 == (5.34 + minivodW)) && assistN);

        AnalyticsUtil.onEventWithMap(YUpgrade.YPaginationGreen, {});

   for (let x = 0; x < 1; x++) {
       let castj = 0;
       let predictionw = String.fromCharCode(103,101,110,101,114,97,116,105,110,103,95,111,95,54,53,0);
       let calendar6 = 0.0;
       let episodeD = String.fromCharCode(118,111,114,98,105,115,100,115,112,0);
       let animationT = String.fromCharCode(114,95,56,49,95,113,101,120,112,0);
         calendar6 *= parseInt(`${calendar6}`);
      while (predictionw.length <= episodeD.length) {
          let navigationi = true;
          let regengx = 0.0;
          let phonet = String.fromCharCode(102,95,53,95,119,105,110,100,105,110,103,0);
         episodeD += `${(3 & (navigationi ? 5 : 2))}`;
         navigationi = phonet.length < regengx;
         regengx *= (String.fromCharCode(49,0) == phonet ? parseInt(`${regengx}`) : phonet.length);
         break;
      }
         castj >>= Math.min(animationT.length, 5);
          let emojif = 5.0;
          let logog = 3;
         predictionw += `${parseInt(`${emojif}`) / (Math.max(3, parseInt(`${calendar6}`)))}`;
         emojif /= Math.max(logog >> (Math.min(Math.abs(logog), 1)), 5);
      for (let u = 0; u < 1; u++) {
         animationT += `${predictionw.length % 1}`;
      }
       let mappingV: Array<any> = [956, 408];
         castj /= Math.max(episodeD.length, 5);
      while (5 > mappingV.length) {
          let private_iZ = String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,101,95,52,54,0);
          let projectN: Map<any, any> = new Map([[String.fromCharCode(110,117,109,101,114,105,99,95,114,95,49,52,0),770], [String.fromCharCode(116,114,97,105,108,95,104,95,52,55,0),173], [String.fromCharCode(119,105,116,110,101,115,115,95,57,95,57,56,0),159]]);
          let calendarH = 3.0;
          let unreadf = true;
          let annerV = String.fromCharCode(112,114,105,118,97,99,121,95,113,95,52,54,0);
         animationT = `${1 << (Math.min(5, episodeD.length))}`;
         private_iZ = `${parseInt(`${calendarH}`)}`;
         projectN.set(`${unreadf}`, projectN.size);
         calendarH *= projectN.size;
         annerV += `${private_iZ.length + 3}`;
         break;
      }
       let blacklistN = String.fromCharCode(122,95,56,54,95,99,101,105,108,0);
       let ewardedY = 5.0;
      for (let r = 0; r < 1; r++) {
         blacklistN += `${castj}`;
      }
       let typingk = 1.0;
       let thumbnailZ = 3.0;
          let trophyl = 4.0;
          let pingr: Map<any, any> = new Map([[String.fromCharCode(118,95,49,51,95,100,108,105,100,120,0),60], [String.fromCharCode(112,100,122,112,95,103,95,48,0),626], [String.fromCharCode(104,97,115,104,101,114,0),122]]);
         predictionw += `${episodeD.length % 3}`;
         trophyl *= parseFloat(`${2}`);
         pingr.set(`${trophyl}`, parseInt(`${trophyl}`));
      for (let g = 0; g < 1; g++) {
          let diceC: Array<any> = [560, 741, 581];
          let baidu_ = true;
          let anners = 3.0;
          let shirtH = 5.0;
         episodeD = `${parseInt(`${anners}`) + 3}`;
         diceC.push(diceC.length);
         baidu_ = !baidu_ || 54.48 < shirtH;
         anners /= Math.max((parseFloat(`${(baidu_ ? 3 : 4) | parseInt(`${shirtH}`)}`)), 4);
      }
      while (2.17 < (calendar6 - typingk) || (2.17 - calendar6) < 1.100) {
          let policyK: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,114,116,101,114,95,105,95,51,50,0),false ], [String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,95,114,95,55,53,0),true ], [String.fromCharCode(118,97,108,95,105,95,55,50,0),true ]]);
         typingk /= Math.max(parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${typingk}`)), 2))}`), 2);
         policyK = new Map([[`${policyK.size}`, policyK.size >> (Math.min(Math.abs(3), 3))]]);
         break;
      }
      condensedI += `${episodeD.length + animationT.length}`;
   }
   while (matchesh.includes(`${stationP.length}`)) {
      matchesh += `${parseInt(`${jcopy_w93}`) / (Math.max(parseInt(`${minivodW}`), 3))}`;
      break;
   }
      minivodW += parseFloat(`${matchesh.length}`);
   if ((3.1 + minivodW) > 1.25 || 4 > (1 - dataH.size)) {
      dataH = new Map([[matchesh, 3 + condensedI.length]]);
   }
       let storeB = 2.0;
       let shrinku = String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,53,95,55,52,0);
       let incidentt = String.fromCharCode(99,111,101,102,115,95,122,95,54,55,0);
      let faste = String.fromCharCode(121,110,108,0) == shrinku;
      do {
          let modelV: Map<any, any> = new Map([[String.fromCharCode(121,95,56,54,95,102,97,116,101,0),String.fromCharCode(115,110,97,112,112,101,100,95,106,95,50,53,0)], [String.fromCharCode(112,101,114,109,97,110,101,110,116,0),String.fromCharCode(98,114,101,97,100,95,119,95,49,48,0)], [String.fromCharCode(101,118,101,114,121,111,110,101,95,110,95,54,49,0),String.fromCharCode(111,95,50,52,95,115,110,111,119,100,97,116,97,0)]]);
          let xvodf = 1.0;
          let sportsN: Array<any> = [502, 294];
          let right8 = 2.0;
         shrinku += `${parseInt(`${storeB}`)}`;
         modelV.set(`${sportsN.length}`, modelV.size + 1);
         xvodf -= parseFloat(`${sportsN.length / 3}`);
         right8 *= parseFloat(`${parseInt(`${right8}`)}`);
         if (faste) {
            break;
         }
      } while ((2 > incidentt.length) && faste);
       let commonO: Array<any> = [749, 518, 772];
       let a_imagek: Array<any> = [400, 509];
      let componenty = 6928362 >= a_imagek.length;
      do {
         a_imagek.push((String.fromCharCode(109,0) == incidentt ? parseInt(`${storeB}`) : incidentt.length));
         if (componenty) {
            break;
         }
      } while (componenty && ((commonO.length * 1) > 4 || 3 > (1 * a_imagek.length)));
      let gmailo = a_imagek.length >= 9873720;
      do {
         a_imagek.push(1 * shrinku.length);
         if (gmailo) {
            break;
         }
      } while (((a_imagek.length + 5) < 3) && gmailo);
      for (let f = 0; f < 2; f++) {
         shrinku = `${3 >> (Math.min(5, a_imagek.length))}`;
      }
      for (let o = 0; o < 3; o++) {
         storeB *= commonO.length;
      }
      while (!incidentt.startsWith(`${a_imagek.length}`)) {
         incidentt = `${shrinku.length}`;
         break;
      }
         incidentt += `${(String.fromCharCode(113,0) == shrinku ? shrinku.length : incidentt.length)}`;
      while (storeB > 1.55) {
         shrinku = `${(incidentt == String.fromCharCode(52,0) ? a_imagek.length : incidentt.length)}`;
         break;
      }
      minivodW *= parseFloat(`${parseInt(`${storeB}`)}`);
        NCatalog.onEvent({
            type: 'click',
            title: SSellLayout.YAnalyticSingapore,
        });

   while (1 <= (matchesh.length & 1)) {
      jcopy_w93 -= matchesh.length * 3;
      break;
   }
      matchesh += `${stationP.length}`;
   while (Array.from(dataH.values()).includes(minivodW)) {
      dataH = new Map([[`${jcopy_w93}`, parseInt(`${minivodW}`) - parseInt(`${jcopy_w93}`)]]);
      break;
   }
   for (let o = 0; o < 1; o++) {
      floatingt += `${matchesh.length * 1}`;
   }
   let catalog0 = matchesh == String.fromCharCode(50,115,98,97,121,54,0);
   do {
      matchesh += `${(cornerc == String.fromCharCode(55,0) ? cornerc.length : parseInt(`${jcopy_w93}`))}`;
      if (catalog0) {
         break;
      }
   } while (catalog0 && (4 > (parseInt(`${jcopy_w93}`) * matchesh.length) || 4.58 > (jcopy_w93 * 2.2)));

        if (this.showLog) console.log('trigger event id:', YUpgrade.YPaginationGreen);
    }

    static playsAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title = YUpgrade.YSettings,
        ads_name,
    }: {
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    }) => {
        AnalyticsUtil.onEventWithMap(YUpgrade.YSettings, {});
        NCatalog.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YSettings);
    }

    static playsAdsClickAnalytics = ({
        url,
        ads_slot_id,
        ads_id,
        ads_title = YUpgrade.YTwitter,
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

        AnalyticsUtil.onEventWithMap(YUpgrade.YTwitter, params);
        NCatalog.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: url ?? 'none',
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YTwitter);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YSave, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        NCatalog.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YSave);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YViewsSmall, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        NCatalog.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YViewsSmall);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YReadJ, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        NCatalog.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YReadJ);
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
        AnalyticsUtil.onEventWithMap(YUpgrade.YNews, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        NCatalog.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', YUpgrade.YNews);
    }
}
