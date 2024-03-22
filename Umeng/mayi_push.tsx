import AnalyticsUtil from './mayi_iconsaveimage';
import { mayi_Foreground } from './mayi_init_predictionarrow';

 
enum KReactnativeultimatelistviewDanger {
    
    KLibfbImagenomoredata = 'Home-views',
    KClock = 'Home-clicks',
    KTailGreyarrowup = 'Home-Carousel_views',
    KIconwatch = 'Home-Carousel_clicks',
    KDown = 'Home-banner_views',
    KBackwhiteShare = 'Home-banner_clicks',

    
    KOwngoalService = 'WatchAnytime-Views',
    KDefault = 'WatchAnytime-video_view_times',
    KPredictiondefault = 'WatchAnytime-X_views',
    KIconmoreLibfb = 'WatchAnytime-X_video_view_times',
    KProduct = 'WatchAnytime-playlist_clicks',
    KZhengpian = 'WatchAnytime-video_clicks',
    KDefaultroombg = 'WatchAnytime-ads_views',
    KFootballfieldMbnative = 'WatchAnytime-ads_clicks',

    
    KGreyarrowup = 'Sport-views',
    KLibfabricjni = 'Sport-clicks',
    KPenaltymatchicon = 'Sport-banner_views',
    KCastShow = 'Sport-banner_clicks',

    
    KBodanHome = 'SportDetails-views',
    KMimo = 'SportDetails-plays_times',
    KTemperatureLibreactnativeblob = 'SportDetails-vip_popup_times',
    KSinglePush = 'SportDetails-vip_clicks',

    
    KAnythink = 'Playlist-views',
    KPlaceholder = 'Playlist-clicks',
    KBridge = 'Playlist-topics_views',
    KYellowtored = 'Playlist-topics_clicks',

    
    KSave = 'UserCenter-login_success_times',
    KPackageIconviewergif = 'UserCenter-vip_login_success_times',
    KPenaltyshootnogoalHeart = 'UserCenter-pay_vip_views',
    KMalaysia = 'UserCenter-invites_vip_views',

    
    KPressureAwayteamfield = 'Search-result_views',
    KMbridge = 'Search-result_clicks',
    KTelemetry = 'Search-keywords',

    
    KDialog = 'Catalog-views',
    KFrameNend = 'Catalog-clicks',

    
    KCatalogImage = 'Play-views',
    KSentryTramini = 'Play-plays_times',
    KFootballtrophyLibreanimated = 'Play-X_views',
    KFloating = 'Play-X_plays_times',
    KMerger = 'Play-share_clicks',

    
    KNeon = 'Play-ads_views',
    KNend = 'Play-ads_clicks',

    
    KSinaGray = 'VideoPlayer-banner_views',
    KOrangeuparrowMounting = 'VideoPlayer-banner_clicks',

    
    KNalyticsRoot = 'Profile-banner_views',
    KRuntime = 'Profile-banner_clicks',
}

enum BDSLibreactnativejniBlacklist {
    
    KGiftbutton = 'home_tab',

    
    KBall = 'watchAnytime',
    KIconstar = 'watchAnytime_play_times',
    KIconuser = 'watchAnytime_view_video',
    KRocketRegister = 'watchAnytime_view_playlist',

    KLibturbomodulejsijni = 'watchAnytime_x',
    KSharedModal = 'watchAnytime_x_play_times',

    
    KPrivate = 'sport',
    KGiftbuttonSettings = 'sportDetail',
    KDown4 = 'sportDetail_play_times',
    KIssub = 'sportDetail_vip_popup',

    
    KDanger = 'playlist',
    KPlash = 'playlist_topics',

    
    KHeji = 'userCenter_login_success_times',
    KDangerWhistle = 'userCenter_vip_login_success_times',
    KZoomDycreator = 'userCenter_view_vip',

    
    KMime = 'search_keywords',
    KYellowanimationliveLibturbomodulejsijni = 'search_result',

    
    KContextLibreanimated = 'catalog',

    
    KBallNotificationfillempty = 'play',
    KRender = 'play_plays_times',
    KSpinnerRoot = 'Play_share',

    KStats = 'play_x',
    KRuntimeConfirmation = 'play_x_plays_times',
}

export default class mayi_push {
    static showLog: boolean = false;

    
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KLibfbImagenomoredata, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KGiftbutton,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KLibfbImagenomoredata);
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KClock, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KGiftbutton,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KClock);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KTailGreyarrowup, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        mayi_Foreground.onEvent({
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

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KTailGreyarrowup);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KIconwatch, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        mayi_Foreground.onEvent({
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

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KIconwatch);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KDown, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        mayi_Foreground.onEvent({
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

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KDown);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KBackwhiteShare, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        mayi_Foreground.onEvent({
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

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KBackwhiteShare);
    }

    
    static watchAnytimeViewsAnalytics = ({ isXmode = false }: { isXmode?: boolean } = { isXmode: false }) => {
        let evendId: string = KReactnativeultimatelistviewDanger.KOwngoalService;

        if (isXmode) {
            evendId = KReactnativeultimatelistviewDanger.KPredictiondefault;
        }

        AnalyticsUtil.onEventWithMap(evendId, {});
        mayi_Foreground.onEvent({
            type: 'view',
            title: isXmode ? BDSLibreactnativejniBlacklist.KLibturbomodulejsijni : BDSLibreactnativejniBlacklist.KBall,
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: string = KReactnativeultimatelistviewDanger.KDefault;

        if (isXmode) {
            evendId = KReactnativeultimatelistviewDanger.KIconmoreLibfb;
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
        mayi_Foreground.onEvent({
            type: 'view',
            title: isXmode ? BDSLibreactnativejniBlacklist.KSharedModal : BDSLibreactnativejniBlacklist.KIconstar,
            params: {
                desc_1: 'user.id:' + userId,
                
            }
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoClicksAnalytics = () => {
       let libruntimeexecutor2 = 1.0;
    let referrerO: Map<any, any> = new Map([[String.fromCharCode(98,108,97,107,101,0),547], [String.fromCharCode(102,116,115,97,117,120,0),500]]);
    let selectionQ = 1.0;
    let placementY = 1.0;
    let modalp = true;
    let yellowk: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,0),String.fromCharCode(116,119,105,116,116,101,114,0)], [String.fromCharCode(101,110,99,111,100,101,0),String.fromCharCode(100,102,108,97,0)]]);
    let armvaf = String.fromCharCode(119,111,114,107,101,114,0);
    let analyticsd = 4;
    let lessG = 1.0;
      placementY += parseFloat(`${yellowk.size & parseInt(`${selectionQ}`)}`);
   while (modalp) {
      modalp = 74.74 == libruntimeexecutor2 && modalp;
      break;
   }
   while (placementY > selectionQ) {
       let thumbnailg = String.fromCharCode(109,98,112,111,115,116,0);
       let tempR = String.fromCharCode(119,105,100,101,0);
       let linkK = 5;
       let liveshareX = String.fromCharCode(118,111,105,99,101,0);
       let rankP = String.fromCharCode(117,110,112,105,110,0);
      if (tempR.includes(rankP)) {
         tempR += `${rankP.length}`;
      }
      while (!liveshareX.endsWith(`${rankP.length}`)) {
         rankP = `${liveshareX.length - linkK}`;
         break;
      }
         linkK >>= Math.min(Math.abs(2 * tempR.length), 2);
         rankP = `${linkK % 1}`;
      while (!rankP.endsWith(thumbnailg)) {
          let clocko = String.fromCharCode(97,108,108,0);
         rankP = `${rankP.length & tempR.length}`;
         clocko = `${clocko.length}`;
         break;
      }
         liveshareX += `${thumbnailg.length}`;
      let shows = tempR.length >= 6013675;
      do {
         tempR = `${(tempR == String.fromCharCode(122,0) ? tempR.length : thumbnailg.length)}`;
         if (shows) {
            break;
         }
      } while (shows && (thumbnailg.length <= tempR.length));
          let l_imagej = 0;
          let attributedstringa: Array<any> = [String.fromCharCode(108,111,119,0), String.fromCharCode(115,97,116,117,114,97,116,105,111,110,0)];
          let bango = String.fromCharCode(103,117,105,100,101,115,0);
         tempR = "2";
         l_imagej %= Math.max(1, 1 + l_imagej);
         attributedstringa.push(l_imagej - 3);
         bango = `${attributedstringa.length}`;
      while (linkK >= 2) {
          let castP = String.fromCharCode(104,95,50,49,95,100,101,101,112,108,105,110,107,0);
          let fastforwardW = String.fromCharCode(99,111,109,112,97,115,115,0);
          let reddownarrowl = 3;
         liveshareX += `${linkK}`;
         castP = "3";
         fastforwardW = `${(String.fromCharCode(111,0) == fastforwardW ? fastforwardW.length : castP.length)}`;
         reddownarrowl |= 1;
         break;
      }
      if (3 > tempR.length || 3 > thumbnailg.length) {
         tempR += `${3 >> (Math.min(1, liveshareX.length))}`;
      }
          let paginationa = String.fromCharCode(97,110,100,0);
          let cornershootY = true;
          let componentregistryH: Array<any> = [834, 920];
         linkK ^= liveshareX.length + paginationa.length;
         paginationa += `${componentregistryH.length}`;
         cornershootY = (((cornershootY ? 28 : componentregistryH.length) % (Math.max(6, componentregistryH.length))) <= 28);
          let themeB = 3;
         tempR = `${themeB}`;
      let listk = linkK <= 5128701;
      do {
         linkK += liveshareX.length;
         if (listk) {
            break;
         }
      } while ((4 >= (liveshareX.length - linkK) || 4 >= (linkK - liveshareX.length)) && listk);
         linkK &= thumbnailg.length;
          let sharewhiteR: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,0),577], [String.fromCharCode(104,97,109,98,117,114,103,101,114,0),365]]);
         tempR = `${tempR.length - 2}`;
         sharewhiteR.set(`${sharewhiteR.size}`, 2 + sharewhiteR.size);
      selectionQ /= Math.max(2, 4);
      break;
   }
   let middleZ = 8095814 <= armvaf.length;
   do {
       let buildt = 3.0;
         buildt += parseFloat(`${parseInt(`${buildt}`)}`);
         buildt /= Math.max(5, parseFloat(`${parseInt(`${buildt}`) / 2}`));
      let large9 = 6685454.0 >= buildt;
      do {
         buildt += parseFloat(`${parseInt(`${buildt}`)}`);
         if (large9) {
            break;
         }
      } while ((1.31 >= buildt) && large9);
      armvaf += "1";
      if (middleZ) {
         break;
      }
   } while (middleZ && (!armvaf.startsWith(`${libruntimeexecutor2}`)));

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KZhengpian, {});

       let yellowanimationlive8 = 4;
         yellowanimationlive8 &= yellowanimationlive8 % (Math.max(yellowanimationlive8, 3));
       let with_b0B = String.fromCharCode(108,105,107,101,0);
      while (!with_b0B.includes(`${yellowanimationlive8}`)) {
         yellowanimationlive8 *= 2 | with_b0B.length;
         break;
      }
      yellowk.set(armvaf, (armvaf == String.fromCharCode(100,0) ? parseInt(`${placementY}`) : armvaf.length));
   let inouttargetredj = armvaf.length >= 9734428;
   do {
      armvaf += `${(String.fromCharCode(105,0) == armvaf ? armvaf.length : parseInt(`${placementY}`))}`;
      if (inouttargetredj) {
         break;
      }
   } while (inouttargetredj && (5 <= (yellowk.size + 5)));
      modalp = (placementY / (Math.max(libruntimeexecutor2, 5))) >= 66.14;
   let productB = 9835393.0 <= placementY;
   do {
      placementY += parseFloat(`${yellowk.size}`);
      if (productB) {
         break;
      }
   } while ((placementY == 3.86) && productB);
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KIconuser,
        });

      selectionQ *= ((modalp ? 2 : 4) % (Math.max(yellowk.size, 5)));
      selectionQ /= Math.max(2 + parseInt(`${libruntimeexecutor2}`), 5);
   while (4 == referrerO.size) {
      modalp = !modalp;
      break;
   }
   let thumbnaila = 6334524.0 >= libruntimeexecutor2;
   do {
      libruntimeexecutor2 /= Math.max(5, parseFloat(`${parseInt(`${libruntimeexecutor2}`) & 2}`));
      if (thumbnaila) {
         break;
      }
   } while ((libruntimeexecutor2 < selectionQ) && thumbnaila);

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KZhengpian);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
       let l_lockA = String.fromCharCode(110,101,105,103,104,98,111,117,114,115,0);
    let redscoreballE: Map<any, any> = new Map([[String.fromCharCode(118,111,98,115,117,98,0),560], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,100,0),699], [String.fromCharCode(99,111,100,101,0),772]]);
    let smallbrightnesss = 1.0;
    let homeplayera = String.fromCharCode(112,114,111,109,111,116,105,110,103,0);
    let selecti: Array<any> = [285, 965, 653];
    let expiredq = 2.0;
    let libflipperw = String.fromCharCode(112,104,97,115,101,0);
    let penaltymatchiconv: Array<any> = [911, 782, 757];
    let libtob_ = String.fromCharCode(115,104,97,114,101,115,0);
    let hongkongx = false;
    let libreactnativejniQ = String.fromCharCode(108,111,103,103,97,98,108,101,0);
    let membershipw = String.fromCharCode(117,110,115,101,110,100,0);
    let anythinkY = 4;
   for (let i = 0; i < 3; i++) {
      penaltymatchiconv = [redscoreballE.size & libreactnativejniQ.length];
   }
   let defaultplayerimgd = homeplayera.length >= 7984863;
   do {
       let predictionbuttonM: Array<any> = [307, 449];
       let commonL = 4;
       let iconclosewhitewithbgH = 3.0;
      let gradlew0 = predictionbuttonM.length >= 5541522;
      do {
          let time_4X = String.fromCharCode(115,99,116,112,117,116,105,108,0);
          let filled4 = 0.0;
          let policyR = String.fromCharCode(115,116,97,116,105,115,116,105,99,0);
          let updatesJ = String.fromCharCode(115,101,110,100,109,98,117,102,0);
         predictionbuttonM = [commonL];
         time_4X = `${policyR.length + 1}`;
         filled4 /= Math.max(2 ^ policyR.length, 3);
         updatesJ = `${parseInt(`${filled4}`)}`;
         if (gradlew0) {
            break;
         }
      } while (((5 ^ predictionbuttonM.length) < 4 || (predictionbuttonM.length ^ commonL) < 5) && gradlew0);
         commonL |= 1;
      while (iconclosewhitewithbgH > commonL) {
         iconclosewhitewithbgH *= parseFloat(`${predictionbuttonM.length}`);
         break;
      }
       let weiboU = String.fromCharCode(100,105,114,97,99,100,115,112,0);
       let completeM: Array<any> = [394, 23];
       let listM: Array<any> = [718, 475];
      if (listM.includes(completeM.length)) {
         completeM.push(weiboU.length ^ parseInt(`${iconclosewhitewithbgH}`));
      }
         completeM.push(completeM.length);
          let cornershootW: Map<any, any> = new Map([[String.fromCharCode(115,105,110,117,115,111,105,100,97,108,0),false ], [String.fromCharCode(115,111,114,116,101,100,0),true ]]);
          let league6 = String.fromCharCode(118,97,114,105,97,116,105,111,110,0);
          let e_playerY = 2;
         listM = [league6.length];
         cornershootW.set(`${e_playerY}`, 3 / (Math.max(1, e_playerY)));
         league6 += `${cornershootW.size}`;
      let filedw = predictionbuttonM.length <= 5261320;
      do {
         predictionbuttonM = [listM.length * predictionbuttonM.length];
         if (filedw) {
            break;
         }
      } while (filedw && (3 == (predictionbuttonM.length % (Math.max(1, 7))) || (1 % (Math.max(6, completeM.length))) == 2));
      homeplayera += `${(String.fromCharCode(101,0) == homeplayera ? homeplayera.length : redscoreballE.size)}`;
      if (defaultplayerimgd) {
         break;
      }
   } while ((1.100 == (expiredq * 3.6) || (3.6 * expiredq) == 4.52) && defaultplayerimgd);
   let forwardC = redscoreballE.size >= 9027009;
   do {
      redscoreballE = new Map([[`${smallbrightnesss}`, parseInt(`${smallbrightnesss}`) + libreactnativejniQ.length]]);
      if (forwardC) {
         break;
      }
   } while (((parseFloat(`${redscoreballE.size}`) * smallbrightnesss) <= 4.33 && 1 <= (redscoreballE.size / 5)) && forwardC);
      l_lockA = `${l_lockA.length}`;
   for (let b = 0; b < 3; b++) {
      libtob_ += "3";
   }
   for (let p = 0; p < 2; p++) {
      redscoreballE = new Map([[`${selecti.length}`, libtob_.length & selecti.length]]);
   }
   if (2 >= (1 ^ homeplayera.length)) {
       let libreactnativeblobU: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,116,111,0),32], [String.fromCharCode(97,117,116,111,117,112,100,97,116,101,0),980]]);
         libreactnativeblobU = new Map([[`${libreactnativeblobU.size}`, libreactnativeblobU.size]]);
      for (let r = 0; r < 2; r++) {
          let condensedU = 1.0;
          let liveshareB = String.fromCharCode(114,101,103,105,115,116,101,114,0);
         libreactnativeblobU = new Map([[liveshareB, (String.fromCharCode(84,0) == liveshareB ? parseInt(`${condensedU}`) : liveshareB.length)]]);
      }
      for (let e = 0; e < 3; e++) {
          let airbnbstarw = 3.0;
          let mappingE = 4.0;
         libreactnativeblobU.set(`${airbnbstarw}`, parseInt(`${airbnbstarw}`));
         mappingE *= 1 - parseInt(`${mappingE}`);
      }
      redscoreballE = new Map([[`${selecti.length}`, selecti.length - homeplayera.length]]);
   }

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KProduct, {});

   for (let r = 0; r < 3; r++) {
      selecti = [parseInt(`${smallbrightnesss}`) / (Math.max(4, parseInt(`${expiredq}`)))];
   }
      expiredq -= 2 - penaltymatchiconv.length;
   while ((penaltymatchiconv.length * libflipperw.length) <= 3) {
       let iconclosewhitewithbgq = true;
       let clear2 = false;
         iconclosewhitewithbgq = (iconclosewhitewithbgq ? !clear2 : !iconclosewhitewithbgq);
       let const_l3 = String.fromCharCode(115,116,97,114,116,101,100,0);
       let iconsubssuccessg = String.fromCharCode(115,117,109,109,101,100,0);
      while (iconsubssuccessg.length > const_l3.length) {
         const_l3 += `${const_l3.length}`;
         break;
      }
          let stringk = 4.0;
         clear2 = iconsubssuccessg.length == parseInt(`${stringk}`);
         iconsubssuccessg += `${iconsubssuccessg.length}`;
         clear2 = !iconclosewhitewithbgq;
      penaltymatchiconv = [libreactnativejniQ.length / 3];
      break;
   }
   while (hongkongx) {
       let alert5 = 0.0;
       let holderk = String.fromCharCode(114,101,115,105,100,117,101,115,0);
       let libffmpegkitX = 1.0;
       let charth = String.fromCharCode(97,117,116,104,111,114,0);
       let topicT = String.fromCharCode(99,111,110,116,101,110,116,105,111,110,0);
       let iconarrowright6 = String.fromCharCode(102,95,49,95,98,101,116,104,115,111,102,116,118,105,100,0);
         charth += `${parseInt(`${libffmpegkitX}`) % (Math.max(iconarrowright6.length, 4))}`;
         holderk = `${charth.length / (Math.max(1, 7))}`;
      if (1 >= charth.length) {
         holderk = `${topicT.length}`;
      }
      if (iconarrowright6 == topicT) {
         topicT = "1";
      }
      let sideI = String.fromCharCode(116,50,116,112,0) == iconarrowright6;
      do {
          let vignetteA = 3.0;
          let fieldi = String.fromCharCode(99,104,97,114,108,101,110,0);
          let spinnerh: Array<any> = [786, 322, 565];
         iconarrowright6 += `${2 << (Math.min(3, fieldi.length))}`;
         vignetteA -= parseInt(`${vignetteA}`) % 3;
         fieldi = "1";
         spinnerh.push(parseInt(`${vignetteA}`));
         if (sideI) {
            break;
         }
      } while (sideI && ((parseFloat(`${iconarrowright6.length}`) / (Math.max(1, libffmpegkitX))) > 4.84));
      while (charth != topicT) {
         topicT += `${holderk.length}`;
         break;
      }
         holderk += "2";
      if ((topicT.length - parseInt(`${alert5}`)) == 4) {
         topicT = `${topicT.length}`;
      }
          let defaultteamr = 4;
          let holderM = String.fromCharCode(118,108,99,111,100,101,99,0);
         libffmpegkitX /= Math.max(2, parseFloat(`${1}`));
         defaultteamr ^= 3;
         holderM += `${holderM.length}`;
      while (5.8 == (parseFloat(`${charth.length}`) - libffmpegkitX) || (charth.length / 4) == 5) {
         libffmpegkitX -= parseFloat(`${holderk.length * 1}`);
         break;
      }
      let nodex = 9359750.0 >= alert5;
      do {
         alert5 /= Math.max(parseFloat(`${charth.length ^ topicT.length}`), 2);
         if (nodex) {
            break;
         }
      } while ((5.74 == alert5) && nodex);
      libtob_ = `${membershipw.length}`;
      break;
   }
      libtob_ += "1";
   let tailQ = hongkongx ? !hongkongx : hongkongx;
   do {
       let smallorangemanJ = String.fromCharCode(97,99,116,105,111,110,115,0);
       let update_vhS = 0;
       let notificationC: Array<any> = [768, 873];
      while (smallorangemanJ.startsWith(`${update_vhS}`)) {
         update_vhS >>= Math.min(1, Math.abs(update_vhS));
         break;
      }
      let iconarrowrightwhiteX = 8149003 <= notificationC.length;
      do {
         notificationC.push(notificationC.length);
         if (iconarrowrightwhiteX) {
            break;
         }
      } while (iconarrowrightwhiteX && (1 <= (update_vhS ^ 3)));
          let minimizeA: Array<any> = [369, 710, 933];
         update_vhS |= update_vhS;
         minimizeA.push(minimizeA.length);
      while (!smallorangemanJ.includes(`${update_vhS}`)) {
          let rightJ: Array<any> = [285, 791];
          let castN = String.fromCharCode(97,112,101,116,97,103,0);
          let libjsijniprofilerP = String.fromCharCode(100,101,115,116,114,117,99,116,105,118,101,0);
         smallorangemanJ += "2";
         rightJ.push(castN.length);
         castN += `${rightJ.length}`;
         libjsijniprofilerP += "3";
         break;
      }
         update_vhS += smallorangemanJ.length;
      if (2 < (update_vhS & smallorangemanJ.length)) {
         update_vhS &= (smallorangemanJ == String.fromCharCode(54,0) ? smallorangemanJ.length : update_vhS);
      }
       let resendo = String.fromCharCode(109,97,114,115,104,97,108,0);
         update_vhS <<= Math.min(4, notificationC.length);
          let nextY: Array<any> = [824, 182];
          let loginy = 4;
         update_vhS |= nextY.length + 2;
         nextY = [3];
         loginy /= Math.max(2, loginy % (Math.max(loginy, 2)));
      hongkongx = 50 == smallorangemanJ.length;
      if (tailQ) {
         break;
      }
   } while (tailQ && (!homeplayera.includes(`${hongkongx}`)));
   let bgvipsportR = 8770728 >= redscoreballE.size;
   do {
      redscoreballE.set(membershipw, libtob_.length);
      if (bgvipsportR) {
         break;
      }
   } while (((3 - redscoreballE.size) == 5 || (redscoreballE.size - homeplayera.length) == 3) && bgvipsportR);
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KRocketRegister,
        });

   for (let v = 0; v < 1; v++) {
      membershipw += `${parseInt(`${expiredq}`)}`;
   }
       let subtexty: Map<any, any> = new Map([[String.fromCharCode(107,109,101,97,110,115,0),false ], [String.fromCharCode(100,105,102,102,101,114,101,110,99,101,0),false ], [String.fromCharCode(100,111,119,110,108,111,97,100,0),false ]]);
       let yingr = String.fromCharCode(104,97,115,104,101,100,0);
       let iconeditL: Array<any> = [31, 310];
       let gifgoalbgf = String.fromCharCode(118,97,114,105,97,110,99,101,120,104,0);
       let libfbjniY = String.fromCharCode(109,105,115,115,0);
          let canvasI = 0.0;
         subtexty = new Map([[`${canvasI}`, 2 + libfbjniY.length]]);
         libfbjniY += `${subtexty.size}`;
         yingr = `${3 >> (Math.min(1, gifgoalbgf.length))}`;
          let iconlogoutu = false;
          let bottomy = 2;
         subtexty.set(`${iconlogoutu}`, ((iconlogoutu ? 5 : 1) * 1));
         bottomy <<= Math.min(2, Math.abs(bottomy));
      for (let s = 0; s < 3; s++) {
         subtexty.set(`${iconeditL.length}`, 1);
      }
      if (4 >= (1 % (Math.max(6, subtexty.size)))) {
         libfbjniY += `${gifgoalbgf.length}`;
      }
       let libyoga4 = String.fromCharCode(112,111,115,116,112,111,110,101,100,0);
       let flipperE = 4.0;
      l_lockA = `${yingr.length}`;
      smallbrightnesss /= Math.max(1, parseFloat(`${parseInt(`${smallbrightnesss}`)}`));
      redscoreballE = new Map([[`${penaltymatchiconv.length}`, penaltymatchiconv.length]]);
      membershipw = `${((hongkongx ? 2 : 5) * redscoreballE.size)}`;
      membershipw = `${libreactnativejniQ.length}`;
   let videojsO = 6012585 >= selecti.length;
   do {
      selecti = [parseInt(`${expiredq}`) | 2];
      if (videojsO) {
         break;
      }
   } while (((selecti.length - 2) >= 2) && videojsO);

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KProduct);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KDefaultroombg, {});
        mayi_Foreground.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KDefaultroombg);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KFootballfieldMbnative, {});
        mayi_Foreground.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KFootballfieldMbnative);
    }


    
    static sportViewsAnalytics = () => {
       let kuaishouS = 5.0;
    let componentregistryY = String.fromCharCode(104,109,104,100,0);
    let aboutU = 4.0;
    let movies7: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,102,105,120,0),String.fromCharCode(116,111,109,105,99,0)], [String.fromCharCode(102,109,117,108,0),String.fromCharCode(100,121,110,108,111,97,100,0)]]);
    let sentryn = String.fromCharCode(115,117,98,109,111,100,117,108,101,0);
    let themep: Array<any> = [102, 151];
    let regengS = 4.0;
   if (componentregistryY.includes(`${kuaishouS}`)) {
      componentregistryY += `${parseInt(`${regengS}`) & componentregistryY.length}`;
   }
   if (5 == (themep.length * sentryn.length)) {
       let forwardd: Map<any, any> = new Map([[String.fromCharCode(105,109,109,117,116,97,98,108,101,0),String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,0)], [String.fromCharCode(116,114,117,110,99,97,116,101,100,0),String.fromCharCode(111,102,111,114,109,97,116,0)]]);
         forwardd.set(`${forwardd.size}`, 3);
      while ((forwardd.size % 1) > 5 && (forwardd.size % (Math.max(2, forwardd.size))) > 1) {
         forwardd = new Map([[`${forwardd.size}`, forwardd.size]]);
         break;
      }
          let linkE: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,100,0),442], [String.fromCharCode(114,101,103,105,115,116,114,97,114,0),15], [String.fromCharCode(114,99,111,110,0),734]]);
          let inouttargetredB = 4.0;
          let gradlew9 = 2.0;
         forwardd.set(`${inouttargetredB}`, 1);
         linkE.set(`${gradlew9}`, 3);
         inouttargetredB *= parseFloat(`${parseInt(`${gradlew9}`) & 3}`);
      themep = [parseInt(`${aboutU}`)];
   }
   for (let q = 0; q < 1; q++) {
      themep.push(parseInt(`${kuaishouS}`) * sentryn.length);
   }
      themep.push(sentryn.length);
      regengS += parseInt(`${kuaishouS}`) - 3;

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KGreyarrowup, {});

   let team3 = 9854132.0 >= kuaishouS;
   do {
       let application5 = 1;
       let circlea = String.fromCharCode(114,116,99,100,0);
       let appsW = String.fromCharCode(98,108,117,114,114,97,98,108,101,0);
          let iconclosewhiteb = 2.0;
          let private_ngi = String.fromCharCode(99,104,101,99,107,98,111,120,0);
         appsW = `${1 + parseInt(`${iconclosewhiteb}`)}`;
         iconclosewhiteb -= private_ngi.length;
         private_ngi = `${3 ^ private_ngi.length}`;
       let disconnectedN = 5;
       let homeplayerf = 4;
      kuaishouS /= Math.max(application5 - 2, 3);
      if (team3) {
         break;
      }
   } while ((sentryn.includes(`${kuaishouS}`)) && team3);
   if ((parseFloat(`${componentregistryY.length}`) - aboutU) == 2.84 || (1 | componentregistryY.length) == 5) {
      aboutU += parseFloat(`${componentregistryY.length & parseInt(`${kuaishouS}`)}`);
   }
      componentregistryY += `${parseInt(`${regengS}`)}`;
   if (2 >= (5 ^ themep.length) || 4 >= (5 ^ themep.length)) {
      movies7.set(`${regengS}`, componentregistryY.length);
   }
   while (aboutU <= 2.73) {
      movies7.set(`${regengS}`, 1);
      break;
   }
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KPrivate,
        });

       let datax = String.fromCharCode(110,105,109,97,116,105,111,110,0);
      if (datax.length <= 1 || datax == String.fromCharCode(118,0)) {
          let libfbK: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,101,115,0),String.fromCharCode(116,104,117,109,98,115,0)], [String.fromCharCode(116,97,112,112,101,100,0),String.fromCharCode(114,101,112,111,114,116,115,0)], [String.fromCharCode(112,114,111,109,111,0),String.fromCharCode(112,114,101,115,101,110,116,105,110,103,0)]]);
          let yellowanimationliveU = 4;
         datax = `${yellowanimationliveU / 1}`;
         libfbK = new Map([[`${libfbK.size}`, 2 ^ libfbK.size]]);
         yellowanimationliveU -= libfbK.size - 1;
      }
         datax += `${(String.fromCharCode(108,0) == datax ? datax.length : datax.length)}`;
      let iconclose2 = String.fromCharCode(53,110,101,57,48,55,114,102,115,0) == datax;
      do {
         datax += "2";
         if (iconclose2) {
            break;
         }
      } while ((datax != String.fromCharCode(53,0) || datax != String.fromCharCode(66,0)) && iconclose2);
      themep.push(3);
   while ((componentregistryY.length - 4) == 1 && 2 == (componentregistryY.length - 4)) {
      componentregistryY = `${3 << (Math.min(2, componentregistryY.length))}`;
      break;
   }
      regengS += 1 + movies7.size;
   for (let i = 0; i < 1; i++) {
       let vipsportQ: Array<any> = [656, 824];
       let register_asu = String.fromCharCode(101,114,97,115,105,110,103,0);
       let bgvipsportO = String.fromCharCode(99,109,97,107,101,0);
       let chinasameI = false;
         register_asu += `${vipsportQ.length * 3}`;
         register_asu = `${bgvipsportO.length - 1}`;
      if (bgvipsportO.length <= 1) {
          let iconarrowrightorangeo = String.fromCharCode(110,111,110,109,117,108,116,0);
          let dycreatorJ: Map<any, any> = new Map([[String.fromCharCode(103,97,109,109,97,118,97,108,0),720], [String.fromCharCode(104,97,110,100,108,105,110,103,0),77]]);
         chinasameI = bgvipsportO.startsWith(`${chinasameI}`);
         iconarrowrightorangeo += "3";
         dycreatorJ.set(iconarrowrightorangeo, iconarrowrightorangeo.length * 3);
      }
         bgvipsportO = `${2 >> (Math.min(3, register_asu.length))}`;
         vipsportQ.push(2);
          let type_iK: Array<any> = [484, 612, 876];
          let malaysiaz = 0.0;
         chinasameI = bgvipsportO.length <= 63;
         type_iK.push(parseInt(`${malaysiaz}`) | 2);
         malaysiaz *= parseInt(`${malaysiaz}`) >> (Math.min(2, Math.abs(2)));
      let hongkongg = chinasameI ? !chinasameI : chinasameI;
      do {
          let forwardo = String.fromCharCode(109,105,115,99,0);
          let imagesy: Map<any, any> = new Map([[String.fromCharCode(101,110,100,120,0),430], [String.fromCharCode(101,115,116,105,109,97,116,101,0),596], [String.fromCharCode(97,118,115,115,0),260]]);
          let uploadN = String.fromCharCode(100,101,113,117,111,116,101,0);
          let mintegrala = String.fromCharCode(101,109,105,116,0);
          let controls2 = String.fromCharCode(99,111,110,116,111,117,114,0);
         chinasameI = controls2.length <= bgvipsportO.length;
         forwardo = `${imagesy.size / (Math.max(forwardo.length, 6))}`;
         imagesy.set(mintegrala, (String.fromCharCode(80,0) == mintegrala ? mintegrala.length : imagesy.size));
         uploadN = `${imagesy.size | 3}`;
         controls2 = "2";
         if (hongkongg) {
            break;
         }
      } while ((bgvipsportO.endsWith(`${chinasameI}`)) && hongkongg);
         register_asu += `${((chinasameI ? 5 : 4) << (Math.min(bgvipsportO.length, 2)))}`;
      if (!chinasameI) {
         chinasameI = bgvipsportO == register_asu;
      }
      for (let t = 0; t < 1; t++) {
          let temperaturew = String.fromCharCode(106,95,56,55,95,112,111,108,108,0);
         register_asu += `${3 + temperaturew.length}`;
      }
         bgvipsportO = `${((chinasameI ? 5 : 1))}`;
      let auto_9B = 7564282 >= register_asu.length;
      do {
         register_asu = `${register_asu.length | 3}`;
         if (auto_9B) {
            break;
         }
      } while (auto_9B && (bgvipsportO != register_asu));
      componentregistryY += `${vipsportQ.length / (Math.max(1, parseInt(`${kuaishouS}`)))}`;
   }
   while (sentryn.startsWith(`${movies7.size}`)) {
       let analyticD: Map<any, any> = new Map([[String.fromCharCode(115,108,97,110,116,0),885], [String.fromCharCode(116,101,120,116,108,101,0),670]]);
       let bgvipsportm = String.fromCharCode(101,110,111,117,103,104,0);
       let countdownH = false;
       let fullW: Map<any, any> = new Map([[String.fromCharCode(112,101,111,112,108,101,0),String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,0)], [String.fromCharCode(112,101,114,109,105,115,115,105,111,110,0),String.fromCharCode(120,112,111,114,116,101,100,0)]]);
      for (let w = 0; w < 1; w++) {
         countdownH = bgvipsportm == String.fromCharCode(55,0);
      }
      for (let m = 0; m < 3; m++) {
         countdownH = bgvipsportm.includes(`${countdownH}`);
      }
      for (let u = 0; u < 2; u++) {
         bgvipsportm = `${analyticD.size}`;
      }
      if (fullW.size == 3) {
         countdownH = String.fromCharCode(53,0) == bgvipsportm;
      }
       let modeU: Array<any> = [228, 292];
       let homez: Array<any> = [917, 908];
       let hometeamfieldR = String.fromCharCode(112,116,114,109,97,112,0);
       let orientation0 = String.fromCharCode(101,114,114,109,115,103,0);
         analyticD.set(`${homez.length}`, 2);
       let privacy6: Array<any> = [410, 292];
      if ((4 << (Math.min(1, orientation0.length))) == 2) {
         orientation0 = `${homez.length}`;
      }
      if (3 <= (homez.length & 3)) {
         hometeamfieldR += `${(bgvipsportm.length >> (Math.min(3, Math.abs((countdownH ? 5 : 1)))))}`;
      }
         homez.push(privacy6.length ^ fullW.size);
         homez = [(1 * (countdownH ? 1 : 4))];
      sentryn += `${((countdownH ? 5 : 1) + componentregistryY.length)}`;
      break;
   }

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KGreyarrowup);
    }

    static sportClicksAnalytics = () => {
       let nativeI = String.fromCharCode(120,112,111,115,117,114,101,0);
    let libreactnativejniT = false;
    let mutedN = 5.0;
    let iconadslinky = String.fromCharCode(115,109,111,111,116,104,0);
    let bingY = 3.0;
    let q_playeri = 2.0;
    let rightI = 4.0;
    let episodeo = String.fromCharCode(114,101,108,102,117,110,99,0);
    let tickedo = false;
    let rinit_kN = String.fromCharCode(114,101,99,121,99,108,101,0);
    let yingQ = 4.0;
       let flyerf = 1;
       let updatesL = String.fromCharCode(115,101,115,115,105,111,110,0);
       let pressurew = String.fromCharCode(109,111,100,97,108,108,121,0);
         pressurew = `${updatesL.length << (Math.min(Math.abs(1), 2))}`;
      for (let n = 0; n < 3; n++) {
         pressurew += "2";
      }
      while (pressurew.length <= flyerf) {
          let turndownp = String.fromCharCode(105,100,101,116,0);
          let reactD = true;
          let libjsi9 = 1;
          let castv = 4;
         pressurew += `${turndownp.length}`;
         turndownp += "1";
         reactD = libjsi9 >= 44;
         libjsi9 &= libjsi9 + castv;
         castv <<= Math.min(4, Math.abs(libjsi9));
         break;
      }
       let bridgeI = String.fromCharCode(100,105,116,97,98,108,101,0);
         flyerf <<= Math.min(1, Math.abs(pressurew.length % (Math.max(updatesL.length, 8))));
      let iconsharefriendsr = String.fromCharCode(48,99,109,99,115,56,97,98,99,52,0) == pressurew;
      do {
          let analyticQ = String.fromCharCode(118,101,114,98,97,116,105,109,0);
          let guided: Array<any> = [752, 356];
          let blacklist8 = 1;
          let n_imagek: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,118,101,99,0),false ], [String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,0),true ], [String.fromCharCode(102,111,114,109,97,116,116,101,100,0),false ]]);
         pressurew += `${1 ^ pressurew.length}`;
         analyticQ += `${guided.length / (Math.max(analyticQ.length, 5))}`;
         guided = [guided.length >> (Math.min(Math.abs(1), 2))];
         blacklist8 -= analyticQ.length;
         n_imagek.set(analyticQ, guided.length);
         if (iconsharefriendsr) {
            break;
         }
      } while ((3 < pressurew.length) && iconsharefriendsr);
          let circle_: Array<any> = [48, 470];
          let upload1: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,0),345], [String.fromCharCode(97,110,110,101,120,0),820]]);
          let refreshborderlessa = String.fromCharCode(105,99,101,99,97,115,116,0);
         pressurew += `${pressurew.length}`;
         circle_ = [refreshborderlessa.length];
         upload1.set(refreshborderlessa, refreshborderlessa.length);
         updatesL = "1";
      if (bridgeI != updatesL) {
         updatesL += `${updatesL.length - flyerf}`;
      }
      tickedo = String.fromCharCode(71,0) == pressurew;
       let pointK = String.fromCharCode(115,105,103,101,120,112,0);
       let window_taJ = String.fromCharCode(100,105,118,105,100,101,100,0);
      for (let i = 0; i < 2; i++) {
         window_taJ += "1";
      }
      while (pointK == String.fromCharCode(53,0) || 5 <= window_taJ.length) {
         window_taJ = `${(pointK == String.fromCharCode(105,0) ? window_taJ.length : pointK.length)}`;
         break;
      }
         pointK = `${window_taJ.length >> (Math.min(3, pointK.length))}`;
      let modelsY = window_taJ == String.fromCharCode(100,98,121,100,122,103,120,99,111,0);
      do {
         window_taJ = `${(String.fromCharCode(116,0) == pointK ? window_taJ.length : pointK.length)}`;
         if (modelsY) {
            break;
         }
      } while ((pointK.length == window_taJ.length) && modelsY);
          let iconpointscores = String.fromCharCode(117,116,99,116,105,109,101,0);
         window_taJ = `${window_taJ.length}`;
         iconpointscores = "3";
         pointK = `${pointK.length & window_taJ.length}`;
      bingY *= nativeI.length % (Math.max(1, 6));
       let actionsg: Array<any> = [792, 353];
          let cornerO = 1.0;
          let shirts: Array<any> = [319, 166];
         actionsg = [actionsg.length * 2];
         cornerO += 3 << (Math.min(4, shirts.length));
         shirts = [3];
      if ((actionsg.length ^ 4) <= 4) {
          let yellowtoredV = 5.0;
          let bootsplashZ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,101,0),900], [String.fromCharCode(115,117,98,115,101,108,101,99,116,0),935]]);
          let pagez = String.fromCharCode(105,115,116,115,0);
          let roundy = String.fromCharCode(109,97,116,114,105,120,102,95,104,95,57,51,0);
         actionsg.push((String.fromCharCode(69,0) == roundy ? parseInt(`${yellowtoredV}`) : roundy.length));
         yellowtoredV += bootsplashZ.size | 2;
         bootsplashZ = new Map([[`${bootsplashZ.size}`, pagez.length % 3]]);
         pagez = `${2 / (Math.max(4, bootsplashZ.size))}`;
      }
      while (4 >= (1 << (Math.min(2, actionsg.length))) && 2 >= (1 << (Math.min(2, actionsg.length)))) {
          let lineU = 0.0;
          let predictionbannersharedX = String.fromCharCode(99,111,109,109,105,116,116,101,100,0);
          let selections = 5.0;
          let penaltyH: Map<any, any> = new Map([[String.fromCharCode(106,95,49,53,0),848], [String.fromCharCode(116,97,116,105,99,0),403]]);
          let minivoda = String.fromCharCode(111,102,102,101,116,0);
         actionsg = [parseInt(`${lineU}`)];
         lineU *= 1 & penaltyH.size;
         predictionbannersharedX = "1";
         selections += parseFloat(`${minivoda.length + predictionbannersharedX.length}`);
         penaltyH = new Map([[predictionbannersharedX, parseInt(`${selections}`) % 2]]);
         minivoda = `${2 + predictionbannersharedX.length}`;
         break;
      }
      episodeo += `${iconadslinky.length}`;
      libreactnativejniT = rightI > 73.6 || mutedN > 73.6;
       let libavdeviceY: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,0),665], [String.fromCharCode(100,111,119,110,114,105,103,104,116,0),662]]);
       let default_asJ: Array<any> = [44, 766];
       let lessJ = 3.0;
         libavdeviceY.set(`${default_asJ.length}`, 1 + default_asJ.length);
         libavdeviceY.set(`${lessJ}`, libavdeviceY.size);
         lessJ += parseFloat(`${2}`);
      if (libavdeviceY.get(`${lessJ}`) == null) {
         lessJ += parseFloat(`${libavdeviceY.size}`);
      }
       let launch3: Array<any> = [498, 382, 637];
      for (let q = 0; q < 2; q++) {
         lessJ -= parseFloat(`${3 >> (Math.min(5, Math.abs(parseInt(`${lessJ}`))))}`);
      }
         libavdeviceY = new Map([[`${libavdeviceY.size}`, parseInt(`${lessJ}`)]]);
      while (1 < (default_asJ.length * 3) && 4 < (libavdeviceY.size * 3)) {
          let informationh = String.fromCharCode(111,118,112,97,103,101,0);
         default_asJ = [1 / (Math.max(5, parseInt(`${lessJ}`)))];
         informationh = `${informationh.length}`;
         break;
      }
      while (launch3.includes(default_asJ.length)) {
         default_asJ.push(launch3.length);
         break;
      }
      q_playeri -= parseFloat(`${parseInt(`${rightI}`) / (Math.max(8, parseInt(`${q_playeri}`)))}`);
   let tempnodataM = libreactnativejniT ? !libreactnativejniT : libreactnativejniT;
   do {
       let libreactperfloggerjniY = true;
       let componentregistryu: Map<any, any> = new Map([[String.fromCharCode(99,102,101,110,99,115,116,114,0),String.fromCharCode(101,98,117,108,97,115,0)], [String.fromCharCode(102,108,97,103,115,0),String.fromCharCode(99,104,101,99,107,109,97,114,107,115,0)]]);
       let defaultroombgB = String.fromCharCode(102,105,102,111,0);
      let awayD = 5175752 >= componentregistryu.size;
      do {
         componentregistryu.set(defaultroombgB, 3);
         if (awayD) {
            break;
         }
      } while (awayD && ((componentregistryu.size % 3) < 4));
      if (3 < (4 ^ defaultroombgB.length) || 4 < (componentregistryu.size ^ defaultroombgB.length)) {
          let popupf = String.fromCharCode(118,100,101,98,117,103,0);
         componentregistryu = new Map([[`${componentregistryu.size}`, (popupf == String.fromCharCode(85,0) ? componentregistryu.size : popupf.length)]]);
      }
      let readh = libreactperfloggerjniY ? !libreactperfloggerjniY : libreactperfloggerjniY;
      do {
         libreactperfloggerjniY = 56 <= defaultroombgB.length;
         if (readh) {
            break;
         }
      } while (readh && (!libreactperfloggerjniY));
          let libfbjniL = String.fromCharCode(107,105,110,100,115,0);
          let sideg = 1.0;
          let cornerY = String.fromCharCode(116,114,97,110,115,112,111,114,116,115,0);
         componentregistryu.set(defaultroombgB, cornerY.length);
         libfbjniL += `${parseInt(`${sideg}`) | libfbjniL.length}`;
         sideg /= Math.max(parseFloat(`${3 - libfbjniL.length}`), 4);
         cornerY = `${libfbjniL.length}`;
      if (3 > (componentregistryu.size + 1)) {
         componentregistryu.set(`${libreactperfloggerjniY}`, componentregistryu.size);
      }
          let smallorangemanU = true;
         libreactperfloggerjniY = !defaultroombgB.includes(`${libreactperfloggerjniY}`);
         smallorangemanU = smallorangemanU || smallorangemanU;
       let logoZ = 5.0;
       let roundI = 3.0;
      for (let z = 0; z < 3; z++) {
         defaultroombgB = `${parseInt(`${logoZ}`)}`;
      }
         roundI /= Math.max(5, 1 - parseInt(`${roundI}`));
      libreactnativejniT = !libreactnativejniT;
      if (tempnodataM) {
         break;
      }
   } while ((libreactnativejniT && !tickedo) && tempnodataM);

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KLibfabricjni, {});

   for (let n = 0; n < 3; n++) {
      q_playeri *= parseFloat(`${parseInt(`${bingY}`)}`);
   }
      mutedN -= (parseFloat(`${String.fromCharCode(119,0) == rinit_kN ? parseInt(`${q_playeri}`) : rinit_kN.length}`));
       let constantsZ = 1;
       let closei = 5.0;
       let penaltyshootnogoala = 1;
       let coreM = 5;
      if (4 > (penaltyshootnogoala ^ 4) && 4 > (penaltyshootnogoala / (Math.max(4, parseInt(`${closei}`))))) {
          let libavformatq = false;
          let predictionarrowL = String.fromCharCode(99,97,110,111,110,105,99,97,108,0);
          let encryptv = String.fromCharCode(97,103,114,101,101,109,101,110,116,0);
          let detailsl = 0;
          let renewV = true;
         penaltyshootnogoala &= (coreM << (Math.min(5, Math.abs((renewV ? 4 : 3)))));
         libavformatq = encryptv.length > 7;
         predictionarrowL = "2";
         encryptv = `${predictionarrowL.length}`;
         detailsl |= ((libavformatq ? 4 : 1) & 1);
         renewV = encryptv.endsWith(`${libavformatq}`);
      }
         penaltyshootnogoala /= Math.max(2, coreM);
      while (2 > constantsZ) {
         closei += parseFloat(`${constantsZ - parseInt(`${closei}`)}`);
         break;
      }
         closei /= Math.max(parseFloat(`${penaltyshootnogoala % (Math.max(coreM, 8))}`), 4);
      if ((penaltyshootnogoala * closei) < 3.39) {
         penaltyshootnogoala -= 3;
      }
      tickedo = nativeI.length > 5;
   while (5.19 <= rightI) {
      q_playeri *= parseFloat(`${iconadslinky.length % (Math.max(rinit_kN.length, 7))}`);
      break;
   }
   if (iconadslinky == episodeo) {
       let delegate_eJ = 0.0;
         delegate_eJ /= Math.max(4, parseInt(`${delegate_eJ}`));
         delegate_eJ -= parseInt(`${delegate_eJ}`) - 1;
      let alerth = delegate_eJ <= 5554168.0;
      do {
         delegate_eJ /= Math.max(parseInt(`${delegate_eJ}`) - 1, 5);
         if (alerth) {
            break;
         }
      } while (alerth && (3.88 == (delegate_eJ + delegate_eJ) || (3.88 / (Math.max(5, delegate_eJ))) == 5.37));
      episodeo = `${parseInt(`${delegate_eJ}`) << (Math.min(2, Math.abs(1)))}`;
   }
   while (libreactnativejniT || !tickedo) {
       let tempY = 0.0;
       let whistlei = String.fromCharCode(101,112,105,99,0);
      if (parseFloat(`${whistlei.length}`) <= tempY) {
         whistlei += `${parseInt(`${tempY}`) * whistlei.length}`;
      }
         whistlei = `${parseInt(`${tempY}`) * 1}`;
          let exampleimagev = 2.0;
          let backiconD = true;
          let libavfilterh = 2;
         whistlei += `${1 ^ whistlei.length}`;
         exampleimagev /= Math.max(parseFloat(`${2}`), 3);
         backiconD = !backiconD;
         libavfilterh *= 1;
      while ((tempY - 4.33) >= 1.5) {
         whistlei += `${whistlei.length}`;
         break;
      }
         tempY *= parseFloat(`${parseInt(`${tempY}`)}`);
      while (whistlei.startsWith(`${tempY}`)) {
         whistlei += "2";
         break;
      }
      tickedo = 12 == whistlei.length;
      break;
   }
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KPrivate,
        });

       let bridgeX = 4.0;
       let wnewinterstitial7 = 5.0;
       let predictionactivee = 1;
       let runtimeY = 0;
      let halfZ = runtimeY <= 5761022;
      do {
          let iconorientationz = true;
          let graph4 = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,0);
         runtimeY <<= Math.min(1, Math.abs(runtimeY));
         iconorientationz = !graph4.includes(`${iconorientationz}`);
         graph4 += `${graph4.length & 1}`;
         if (halfZ) {
            break;
         }
      } while (halfZ && (predictionactivee == runtimeY));
         bridgeX += parseInt(`${wnewinterstitial7}`);
       let episode4 = String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0);
       let znewarchdefaultsK = String.fromCharCode(105,110,118,116,114,97,110,115,0);
      if ((1 ^ episode4.length) == 4) {
         runtimeY *= episode4.length;
      }
          let searchK = String.fromCharCode(115,104,97,100,101,0);
         episode4 += `${parseInt(`${wnewinterstitial7}`)}`;
         searchK += `${(String.fromCharCode(51,0) == searchK ? searchK.length : searchK.length)}`;
      rightI -= parseFloat(`${parseInt(`${rightI}`) / (Math.max(rinit_kN.length, 4))}`);
      nativeI = `${iconadslinky.length}`;
   if (mutedN >= 4.48 || (4.48 / (Math.max(1, mutedN))) >= 2.79) {
      mutedN /= Math.max(2, parseFloat(`${parseInt(`${rightI}`)}`));
   }
   let ajaxu = episodeo.length >= 5770887;
   do {
      episodeo = "2";
      if (ajaxu) {
         break;
      }
   } while (ajaxu && (q_playeri <= 1.30));
   while (1 <= episodeo.length) {
      tickedo = !episodeo.endsWith(`${q_playeri}`);
      break;
   }
      iconadslinky += `${episodeo.length & iconadslinky.length}`;

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KLibfabricjni);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KPenaltymatchicon, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KPenaltymatchicon);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KCastShow, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        mayi_Foreground.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KCastShow);
    }

    
    static sportDetailsViewsAnalytics = () => {
       let stylesV = 5;
    let libavformat2: Map<any, any> = new Map([[String.fromCharCode(114,101,117,112,108,111,97,100,105,110,103,0),String.fromCharCode(117,110,98,111,120,0)], [String.fromCharCode(115,111,97,108,108,111,99,0),String.fromCharCode(114,95,54,53,95,102,114,101,101,100,0)]]);
    let kuaishouI = false;
    let componentregistryk = String.fromCharCode(100,101,99,111,100,101,120,0);
    let shootY = 4;
    let build4 = 1.0;
    let brightnessC: Map<any, any> = new Map([[String.fromCharCode(108,97,98,101,108,101,100,0),String.fromCharCode(117,117,105,100,117,115,109,116,0)], [String.fromCharCode(114,101,103,114,101,115,115,0),String.fromCharCode(97,98,115,116,114,97,99,116,0)], [String.fromCharCode(109,117,108,116,105,112,108,105,101,100,0),String.fromCharCode(109,117,115,105,99,0)]]);
    let privacyd: Array<any> = [561, 920, 599];
    let defaultplayerimgt = 5.0;
    let historyw = String.fromCharCode(112,97,105,114,0);
    let fill9 = String.fromCharCode(115,108,97,115,104,0);
    let orangedownarrowK = String.fromCharCode(101,121,98,111,97,114,100,0);
   while (stylesV == libavformat2.size) {
      stylesV <<= Math.min(2, Math.abs(parseInt(`${build4}`)));
      break;
   }
   if ((2 - brightnessC.size) > 4 || (brightnessC.size - 2) > 3) {
       let mbbidG = String.fromCharCode(118,114,101,112,0);
       let description_td3 = true;
         description_td3 = mbbidG.length > 65 || !description_td3;
         mbbidG = `${(String.fromCharCode(88,0) == mbbidG ? mbbidG.length : (description_td3 ? 3 : 5))}`;
      shootY -= (privacyd.length & (kuaishouI ? 4 : 5));
   }
      brightnessC.set(`${stylesV}`, stylesV - 2);
       let eabafadfadddbafeddddeeefeaaf6 = false;
       let combined9: Array<any> = [501, 676, 379];
       let iconbackwhiteh = String.fromCharCode(97,115,98,100,0);
         combined9 = [(iconbackwhiteh == String.fromCharCode(89,0) ? combined9.length : iconbackwhiteh.length)];
         eabafadfadddbafeddddeeefeaaf6 = !eabafadfadddbafeddddeeefeaaf6;
          let temperatureF: Map<any, any> = new Map([[String.fromCharCode(118,112,100,115,112,0),748], [String.fromCharCode(118,101,114,116,105,99,97,108,108,121,0),241]]);
         combined9.push(temperatureF.size);
      let entryz = iconbackwhiteh == String.fromCharCode(119,108,55,122,105,113,49,106,52,0);
      do {
         iconbackwhiteh = `${iconbackwhiteh.length - combined9.length}`;
         if (entryz) {
            break;
         }
      } while (((iconbackwhiteh.length & combined9.length) == 5 || (combined9.length & iconbackwhiteh.length) == 5) && entryz);
         combined9.push(2);
         iconbackwhiteh += `${iconbackwhiteh.length & combined9.length}`;
         iconbackwhiteh = `${(combined9.length - (eabafadfadddbafeddddeeefeaaf6 ? 3 : 4))}`;
         combined9 = [combined9.length];
      let giftbuttonR = 8570539 >= combined9.length;
      do {
         combined9 = [3];
         if (giftbuttonR) {
            break;
         }
      } while (giftbuttonR && (5 >= (iconbackwhiteh.length % (Math.max(2, 8))) || (iconbackwhiteh.length % (Math.max(2, 10))) >= 4));
      defaultplayerimgt -= ((eabafadfadddbafeddddeeefeaaf6 ? 1 : 4) / (Math.max(parseInt(`${defaultplayerimgt}`), 8)));
   for (let i = 0; i < 1; i++) {
      componentregistryk = `${shootY & parseInt(`${build4}`)}`;
   }
   let productq = shootY <= 7492025;
   do {
       let flippern = String.fromCharCode(98,110,109,112,105,0);
       let closeX = 0.0;
       let catagory9 = String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0);
       let cornershootJ = 0;
         closeX += parseFloat(`${2}`);
         closeX /= Math.max(parseFloat(`${flippern.length}`), 1);
         catagory9 += "1";
          let helper9 = 3.0;
          let auto_qa = String.fromCharCode(102,111,99,117,115,97,98,108,101,0);
          let teamk: Array<any> = [707, 50];
         flippern += `${3 & auto_qa.length}`;
         helper9 -= parseFloat(`${1 % (Math.max(6, teamk.length))}`);
         auto_qa = `${parseInt(`${helper9}`) & teamk.length}`;
         closeX *= parseFloat(`${flippern.length | 1}`);
         catagory9 = "1";
       let libavfilterC: Map<any, any> = new Map([[String.fromCharCode(115,98,112,114,111,0),761], [String.fromCharCode(115,112,97,114,115,101,110,101,115,115,0),775], [String.fromCharCode(118,99,97,99,100,97,116,97,0),659]]);
       let whistlev: Map<any, any> = new Map([[String.fromCharCode(102,97,107,101,0),false ], [String.fromCharCode(109,97,110,116,105,115,115,97,115,0),false ]]);
         flippern = `${catagory9.length - parseInt(`${closeX}`)}`;
       let carouselu = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0);
      if (carouselu.length < libavfilterC.size) {
          let detaild: Array<any> = [344, 927, 687];
          let render4 = String.fromCharCode(108,105,98,111,112,117,115,0);
          let modalM = 4;
          let crownB: Array<any> = [916, 238];
          let popupZ = false;
         libavfilterC = new Map([[`${popupZ}`, render4.length]]);
         detaild.push(detaild.length);
         render4 += `${detaild.length % 3}`;
         modalM ^= 1 & crownB.length;
         crownB = [detaild.length];
      }
       let loadingk = 4.0;
       let auto_5k = 4.0;
       let sortw: Map<any, any> = new Map([[String.fromCharCode(108,111,116,115,0),811], [String.fromCharCode(113,100,101,108,116,97,0),65]]);
      shootY ^= stylesV / (Math.max(9, privacyd.length));
      if (productq) {
         break;
      }
   } while (productq && ((1 - privacyd.length) == 2 && 1 == (shootY - privacyd.length)));

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KBodanHome, {});

       let tumbnailu = String.fromCharCode(110,97,109,101,115,112,97,99,101,115,0);
       let sliderP = 5;
      for (let s = 0; s < 1; s++) {
          let entryw = 5;
          let basketballplayerplaceholder4 = 2.0;
         sliderP %= Math.max(1, 2);
         entryw += parseInt(`${basketballplayerplaceholder4}`);
         basketballplayerplaceholder4 -= parseFloat(`${parseInt(`${basketballplayerplaceholder4}`)}`);
      }
          let hejiF = 1.0;
         tumbnailu += `${sliderP - tumbnailu.length}`;
         hejiF -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${hejiF}`)), 1))}`);
       let root_ = String.fromCharCode(115,101,101,107,97,98,108,101,0);
       let previewr = String.fromCharCode(116,114,101,110,100,108,105,110,101,0);
      if (2 >= (previewr.length * sliderP) && (previewr.length * sliderP) >= 2) {
         previewr += `${(String.fromCharCode(75,0) == tumbnailu ? sliderP : tumbnailu.length)}`;
      }
      let middlewarec = sliderP <= 5879017;
      do {
         sliderP %= Math.max(1, 3);
         if (middlewarec) {
            break;
         }
      } while (middlewarec && ((sliderP << (Math.min(Math.abs(5), 1))) > 5));
       let faviconM = 3;
       let penaltyshootg = 2;
      shootY += parseInt(`${build4}`) / (Math.max(2, libavformat2.size));
       let benefitD = String.fromCharCode(115,115,101,116,0);
          let livesharel: Map<any, any> = new Map([[String.fromCharCode(98,97,115,105,99,115,0),323], [String.fromCharCode(102,102,116,103,0),454]]);
         benefitD += `${1 - benefitD.length}`;
         livesharel.set(`${livesharel.size}`, 2);
      let previewl = benefitD.length <= 5577733;
      do {
         benefitD = `${(String.fromCharCode(95,0) == benefitD ? benefitD.length : benefitD.length)}`;
         if (previewl) {
            break;
         }
      } while ((benefitD.length <= benefitD.length) && previewl);
      for (let y = 0; y < 1; y++) {
         benefitD += `${(String.fromCharCode(53,0) == benefitD ? benefitD.length : benefitD.length)}`;
      }
      kuaishouI = libavformat2.get(`${stylesV}`) != null;
   let back2 = 8548734.0 >= build4;
   do {
      build4 *= 1;
      if (back2) {
         break;
      }
   } while ((4.34 < (build4 * defaultplayerimgt) || (4.34 * build4) < 2.66) && back2);
   let register_3h = 7042817.0 >= build4;
   do {
      build4 *= shootY * 2;
      if (register_3h) {
         break;
      }
   } while (register_3h && ((defaultplayerimgt + build4) <= 4.16));
      libavformat2.set(`${defaultplayerimgt}`, parseInt(`${defaultplayerimgt}`));
      kuaishouI = stylesV <= 43;
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KGiftbuttonSettings,
        });

   for (let n = 0; n < 1; n++) {
       let fill3 = 3;
         fill3 ^= fill3;
         fill3 <<= Math.min(Math.abs(fill3), 5);
          let vipsportk: Array<any> = [511, 355, 919];
         fill3 <<= Math.min(4, Math.abs(2 / (Math.max(3, fill3))));
         vipsportk.push(vipsportk.length);
      componentregistryk = "1";
   }
       let internetc: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,115,0),true ], [String.fromCharCode(113,117,97,100,114,97,116,105,99,0),false ], [String.fromCharCode(121,98,114,105,0),false ]]);
      while (Array.from(internetc.values()).includes(internetc.size)) {
         internetc = new Map([[`${internetc.size}`, internetc.size]]);
         break;
      }
          let tnews0 = String.fromCharCode(100,101,99,111,100,101,114,115,0);
          let popupK: Map<any, any> = new Map([[String.fromCharCode(99,116,114,0),370], [String.fromCharCode(110,105,115,116,112,0),972]]);
          let agreementK = 3;
         internetc.set(`${popupK.size}`, internetc.size / (Math.max(1, popupK.size)));
         tnews0 += "3";
         agreementK /= Math.max(1, (String.fromCharCode(69,0) == tnews0 ? tnews0.length : agreementK));
      if (4 < (internetc.size | internetc.size) || (internetc.size | 4) < 5) {
         internetc.set(`${internetc.size}`, 3);
      }
      build4 += shootY >> (Math.min(4, Math.abs(1)));
      stylesV %= Math.max(1, 1 << (Math.min(3, Math.abs(brightnessC.size))));
   for (let v = 0; v < 3; v++) {
      shootY *= 2;
   }
      kuaishouI = componentregistryk.includes(`${kuaishouI}`);
   if ((historyw.length << (Math.min(Math.abs(4), 2))) <= 5 || (parseInt(`${defaultplayerimgt}`) * historyw.length) <= 4) {
      defaultplayerimgt += libavformat2.size;
   }

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KBodanHome);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KMimo, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KDown4,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KMimo);
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
       let splash4 = false;
    let firebasek: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,98,111,97,114,100,0),60], [String.fromCharCode(109,101,114,103,101,100,0),94]]);
    let libreactnativejniD = String.fromCharCode(104,105,103,104,112,111,114,116,0);
    let textinputj: Map<any, any> = new Map([[String.fromCharCode(114,111,103,114,101,115,115,0),String.fromCharCode(108,105,98,99,0)], [String.fromCharCode(100,101,99,111,100,101,109,118,0),String.fromCharCode(119,101,97,107,0)], [String.fromCharCode(106,117,108,105,97,110,0),String.fromCharCode(119,115,119,111,114,100,0)]]);
    let predictionbannerM = 2;
    let stepK = 0;
    let skipL: Map<any, any> = new Map([[String.fromCharCode(102,108,116,117,105,110,116,0),495], [String.fromCharCode(107,101,121,115,116,111,114,101,0),803], [String.fromCharCode(115,108,97,118,101,0),782]]);
    let heartb: Map<any, any> = new Map([[String.fromCharCode(111,116,104,101,114,119,105,115,101,0),204], [String.fromCharCode(104,97,115,104,97,98,108,101,0),94]]);
    let acceptedC = 0;
    let fillS = 1.0;
    let whiteanimationlivel = String.fromCharCode(103,114,97,118,105,116,121,0);
   if (!Array.from(textinputj.keys()).includes(`${predictionbannerM}`)) {
      textinputj.set(`${predictionbannerM}`, predictionbannerM);
   }
      textinputj.set(`${libreactnativejniD}`, libreactnativejniD.length * skipL.size);
      splash4 = predictionbannerM < 49 && splash4;
       let fullscreenminS = 5;
       let combinedF: Array<any> = [632, 87, 206];
       let trashA = String.fromCharCode(115,109,106,112,101,103,0);
         trashA += `${(String.fromCharCode(57,0) == trashA ? trashA.length : fullscreenminS)}`;
      while (!trashA.endsWith(`${combinedF.length}`)) {
          let thailandj: Array<any> = [964, 283];
          let dependencyq = String.fromCharCode(97,108,116,101,114,110,97,116,101,0);
          let privatechatbg1 = String.fromCharCode(115,101,112,97,114,97,116,111,114,115,0);
          let friendsr = 2.0;
         combinedF = [3];
         thailandj = [dependencyq.length];
         dependencyq += `${2 << (Math.min(5, dependencyq.length))}`;
         privatechatbg1 = `${dependencyq.length - privatechatbg1.length}`;
         friendsr /= Math.max(3, (String.fromCharCode(81,0) == privatechatbg1 ? parseInt(`${friendsr}`) : privatechatbg1.length));
         break;
      }
         combinedF = [fullscreenminS - 3];
      let reducer9 = fullscreenminS >= 9019660;
      do {
         fullscreenminS -= trashA.length;
         if (reducer9) {
            break;
         }
      } while ((5 >= (fullscreenminS >> (Math.min(combinedF.length, 2)))) && reducer9);
      if (trashA.includes(`${combinedF.length}`)) {
         combinedF = [(trashA == String.fromCharCode(81,0) ? trashA.length : combinedF.length)];
      }
      while ((fullscreenminS + combinedF.length) >= 2 || (fullscreenminS + combinedF.length) >= 2) {
         fullscreenminS <<= Math.min(2, combinedF.length);
         break;
      }
      let guide2 = trashA == String.fromCharCode(121,116,98,56,119,0);
      do {
         trashA = "3";
         if (guide2) {
            break;
         }
      } while ((2 >= (trashA.length + 3)) && guide2);
          let incidentH = 5.0;
         fullscreenminS >>= Math.min(4, Math.abs((trashA == String.fromCharCode(114,0) ? trashA.length : parseInt(`${incidentH}`))));
      for (let x = 0; x < 1; x++) {
          let trophye = true;
          let rootV = true;
          let middlewareE = String.fromCharCode(99,111,108,111,110,115,0);
          let linkH = 1.0;
          let mountingC: Map<any, any> = new Map([[String.fromCharCode(105,112,118,105,100,101,111,0),false ], [String.fromCharCode(101,110,113,117,101,117,101,100,0),true ]]);
         fullscreenminS &= fullscreenminS;
         trophye = !middlewareE.endsWith(`${linkH}`);
         rootV = !trophye;
         middlewareE += `${((trophye ? 2 : 2))}`;
         linkH += parseFloat(`${2}`);
         mountingC.set(`${middlewareE}`, middlewareE.length);
      }
      heartb.set(`${fullscreenminS}`, 3 & fullscreenminS);
   if (2 > textinputj.size && 2 > (2 ^ textinputj.size)) {
      textinputj = new Map([[`${firebasek.size}`, firebasek.size]]);
   }

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KTemperatureLibreactnativeblob, {});

   for (let c = 0; c < 2; c++) {
      firebasek = new Map([[`${firebasek.size}`, (2 % (Math.max(9, (splash4 ? 3 : 2))))]]);
   }
   while (Array.from(heartb.keys()).includes(`${predictionbannerM}`)) {
       let iconsharefriends5 = String.fromCharCode(101,120,116,101,110,115,105,98,108,101,0);
       let libjsijniprofilerS = 0.0;
       let penaltyshootnogoalh: Array<any> = [905, 289, 858];
       let graphN = 4.0;
       let libimagepipelines = String.fromCharCode(121,95,55,54,95,116,101,114,109,105,110,97,116,111,114,0);
       let fill6 = 0.0;
         penaltyshootnogoalh.push(1);
      while (iconsharefriends5.includes(libimagepipelines)) {
         iconsharefriends5 = `${(iconsharefriends5 == String.fromCharCode(115,0) ? parseInt(`${libjsijniprofilerS}`) : iconsharefriends5.length)}`;
         break;
      }
         libimagepipelines += `${1 % (Math.max(9, parseInt(`${libjsijniprofilerS}`)))}`;
         libjsijniprofilerS /= Math.max(3, 2);
         fill6 -= 1;
      while (graphN == 5.31) {
         graphN *= parseFloat(`${parseInt(`${graphN}`) / 1}`);
         break;
      }
         libjsijniprofilerS += parseInt(`${fill6}`) - penaltyshootnogoalh.length;
         libimagepipelines += "1";
          let render8: Map<any, any> = new Map([[String.fromCharCode(100,120,116,121,0),989], [String.fromCharCode(99,100,106,112,101,103,0),489]]);
          let list_: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,97,100,100,114,0),String.fromCharCode(118,101,99,116,111,114,115,0)], [String.fromCharCode(114,116,109,112,100,104,0),String.fromCharCode(105,111,118,101,99,105,110,0)], [String.fromCharCode(108,111,103,115,116,101,114,101,111,0),String.fromCharCode(110,101,108,108,121,0)]]);
         graphN *= parseFloat(`${parseInt(`${graphN}`) ^ parseInt(`${fill6}`)}`);
         render8 = new Map([[`${list_.size}`, 3 / (Math.max(7, list_.size))]]);
      while (!penaltyshootnogoalh.includes(fill6)) {
         penaltyshootnogoalh = [parseInt(`${libjsijniprofilerS}`) % (Math.max(iconsharefriends5.length, 7))];
         break;
      }
         libjsijniprofilerS *= parseInt(`${libjsijniprofilerS}`);
         graphN *= parseFloat(`${parseInt(`${libjsijniprofilerS}`)}`);
         penaltyshootnogoalh = [3];
          let termsM: Array<any> = [100, 379, 0];
          let tumbnailU = false;
          let statisticsinactiveF = 0.0;
         libimagepipelines += `${3 + libimagepipelines.length}`;
         termsM = [2];
         tumbnailU = termsM.length > 48 || !tumbnailU;
         statisticsinactiveF *= ((tumbnailU ? 4 : 4) % (Math.max(parseInt(`${statisticsinactiveF}`), 8)));
      heartb.set(`${splash4}`, 1);
      break;
   }
      libreactnativejniD += `${((splash4 ? 1 : 4) + acceptedC)}`;
       let time_ziB = 4.0;
          let libbufferu: Map<any, any> = new Map([[String.fromCharCode(102,116,118,110,115,0),164], [String.fromCharCode(111,112,101,110,115,101,97,0),218]]);
         time_ziB *= parseInt(`${time_ziB}`);
         libbufferu.set(`${libbufferu.size}`, 1);
         time_ziB -= 1;
         time_ziB -= parseInt(`${time_ziB}`);
      textinputj = new Map([[`${splash4}`, ((splash4 ? 4 : 5) - parseInt(`${time_ziB}`))]]);
       let containerd: Array<any> = [String.fromCharCode(118,114,101,99,116,0), String.fromCharCode(109,101,114,103,101,114,0)];
       let bang3 = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,0);
       let text5 = String.fromCharCode(110,111,110,99,101,0);
      for (let o = 0; o < 3; o++) {
          let feedbacke: Map<any, any> = new Map([[String.fromCharCode(110,111,110,101,0),786], [String.fromCharCode(102,105,100,99,116,0),80], [String.fromCharCode(111,116,111,105,95,102,95,50,49,0),89]]);
          let libnmsv = String.fromCharCode(112,114,101,115,101,116,0);
          let result6: Array<any> = [449, 406, 828];
          let predictionbannerW: Array<any> = [315, 725];
         bang3 = `${result6.length - 3}`;
         feedbacke = new Map([[`${predictionbannerW.length}`, predictionbannerW.length - 3]]);
         libnmsv = `${libnmsv.length}`;
         result6 = [libnmsv.length];
      }
         containerd.push(2 << (Math.min(4, containerd.length)));
      if (3 <= bang3.length) {
         bang3 += `${containerd.length * text5.length}`;
      }
       let livex = String.fromCharCode(114,101,97,108,108,111,99,112,0);
       let moonF = String.fromCharCode(108,122,115,115,0);
         containerd = [bang3.length % (Math.max(2, 4))];
          let reactnativeratingsh = 0.0;
          let whatsappM = String.fromCharCode(98,105,116,0);
         bang3 = `${whatsappM.length}`;
         reactnativeratingsh += parseFloat(`${parseInt(`${reactnativeratingsh}`)}`);
         whatsappM += `${parseInt(`${reactnativeratingsh}`)}`;
      if (livex == text5) {
         text5 = `${containerd.length}`;
      }
      if (text5.length >= 1) {
          let closex = 2.0;
          let awayiconk: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,101,115,116,101,100,0),924], [String.fromCharCode(103,111,100,101,112,115,0),946]]);
          let whitevideolive4 = 5.0;
          let iconbackwhite7 = true;
         moonF = `${2 / (Math.max(1, livex.length))}`;
         closex += parseFloat(`${3}`);
         awayiconk.set(`${whitevideolive4}`, parseInt(`${closex}`) ^ parseInt(`${whitevideolive4}`));
         iconbackwhite7 = closex > 61.24;
      }
         text5 = `${1 | livex.length}`;
      textinputj = new Map([[`${textinputj.size}`, text5.length / (Math.max(3, 1))]]);
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KIssub,
        });

       let drag8 = String.fromCharCode(109,97,110,117,97,108,0);
      for (let e = 0; e < 3; e++) {
         drag8 += `${(String.fromCharCode(73,0) == drag8 ? drag8.length : drag8.length)}`;
      }
         drag8 += `${drag8.length ^ drag8.length}`;
          let friendss = false;
          let embed0 = String.fromCharCode(116,104,114,111,119,105,110,103,0);
          let modulesI = String.fromCharCode(113,111,115,0);
         drag8 = `${modulesI.length | embed0.length}`;
         friendss = (!friendss ? !friendss : friendss);
         embed0 += `${((friendss ? 1 : 3) % (Math.max((friendss ? 2 : 5), 4)))}`;
      splash4 = textinputj.size < 26;
      libreactnativejniD += `${stepK}`;
   if (heartb.size > 4) {
      textinputj.set(`${predictionbannerM}`, predictionbannerM);
   }
   let helperJ = 9509876 <= heartb.size;
   do {
       let nalytics6 = 0;
       let downarrowl = 5.0;
       let catalogQ = 2.0;
       let g_centerZ = 1;
       let blacklistD = String.fromCharCode(114,111,116,97,116,105,111,110,0);
       let resend3 = 4.0;
       let specV = 2.0;
       let prediction5 = String.fromCharCode(102,101,119,0);
       let vipsportD = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,0);
         prediction5 += `${parseInt(`${downarrowl}`)}`;
      if ((parseInt(`${catalogQ}`) - vipsportD.length) == 4 || (parseInt(`${catalogQ}`) - vipsportD.length) == 4) {
          let otherb: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,0),123], [String.fromCharCode(104,97,114,100,95,99,95,50,50,0),410]]);
          let successe = String.fromCharCode(109,101,115,115,97,103,105,110,103,0);
          let google1 = false;
          let champion8: Array<any> = [230, 992, 327];
         catalogQ /= Math.max(2, prediction5.length << (Math.min(Math.abs(2), 5)));
         otherb = new Map([[`${champion8.length}`, champion8.length]]);
         successe = `${((google1 ? 1 : 4) << (Math.min(champion8.length, 1)))}`;
         google1 = otherb.get(`${google1}`) == null;
      }
       let singlev: Map<any, any> = new Map([[String.fromCharCode(98,98,111,120,0),22], [String.fromCharCode(111,117,116,102,105,108,101,0),406], [String.fromCharCode(109,99,100,101,99,0),857]]);
      if (prediction5.length > 2) {
         vipsportD += `${parseInt(`${catalogQ}`) | g_centerZ}`;
      }
      if (2.13 > (specV / 5.77)) {
          let icontransferclubl = String.fromCharCode(118,115,114,99,0);
          let cornerw = String.fromCharCode(101,115,116,114,111,121,0);
          let telegram3 = 0;
          let libhermesn = String.fromCharCode(111,112,97,99,105,116,121,0);
          let anythink6 = String.fromCharCode(101,100,105,116,101,100,0);
         specV *= parseFloat(`${parseInt(`${resend3}`)}`);
         icontransferclubl = `${anythink6.length}`;
         cornerw += "3";
         telegram3 >>= Math.min(4, Math.abs(telegram3 / (Math.max(1, 2))));
         libhermesn = `${telegram3 / 1}`;
         anythink6 = `${telegram3}`;
      }
         resend3 -= parseFloat(`${parseInt(`${specV}`) * 3}`);
          let minivodL = String.fromCharCode(114,101,108,97,116,101,100,0);
          let sharek: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,0),355], [String.fromCharCode(104,97,112,113,97,0),929]]);
          let notificationQ = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,0);
         specV *= (parseFloat(`${vipsportD == String.fromCharCode(89,0) ? parseInt(`${specV}`) : vipsportD.length}`));
         minivodL = `${notificationQ.length}`;
         sharek = new Map([[`${sharek.size}`, minivodL.length | sharek.size]]);
         notificationQ = `${2 - notificationQ.length}`;
          let orangedownarrowH = String.fromCharCode(112,111,115,108,105,115,116,0);
          let modaln = String.fromCharCode(117,110,105,110,105,116,0);
         prediction5 += `${g_centerZ}`;
         orangedownarrowH += `${3 + modaln.length}`;
         modaln += `${orangedownarrowH.length & modaln.length}`;
         downarrowl /= Math.max(parseFloat(`${parseInt(`${downarrowl}`) + 2}`), 2);
       let redirectI = String.fromCharCode(112,97,108,108,101,116,101,0);
       let reactnativeultimatelistview_ = String.fromCharCode(110,118,99,0);
         catalogQ /= Math.max(3, nalytics6 % (Math.max(singlev.size, 3)));
      while (!redirectI.startsWith(`${singlev.size}`)) {
          let orangedownarrowb = String.fromCharCode(110,95,54,54,0);
          let page3: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0),false ], [String.fromCharCode(112,101,114,109,117,116,101,115,0),true ], [String.fromCharCode(100,101,108,101,103,97,116,101,0),true ]]);
         redirectI += `${singlev.size}`;
         orangedownarrowb = `${orangedownarrowb.length & 3}`;
         page3 = new Map([[`${page3.size}`, page3.size & 1]]);
         break;
      }
      for (let f = 0; f < 3; f++) {
         nalytics6 |= parseInt(`${downarrowl}`) ^ singlev.size;
      }
      heartb = new Map([[`${nalytics6}`, nalytics6]]);
      if (helperJ) {
         break;
      }
   } while ((heartb.get(`${skipL.size}`) != null) && helperJ);
   for (let m = 0; m < 2; m++) {
       let faviconT = String.fromCharCode(116,101,120,105,100,101,112,0);
       let selectX = String.fromCharCode(99,112,108,115,99,97,108,101,115,0);
       let photo3 = 5.0;
       let tooltipsu: Array<any> = [197, 694, 310];
      if (tooltipsu.length < 5) {
          let rootl = 0.0;
          let modalW = String.fromCharCode(115,105,98,108,105,110,103,0);
          let awayiconp = 0.0;
         selectX = `${tooltipsu.length}`;
         rootl *= parseFloat(`${parseInt(`${awayiconp}`) | modalW.length}`);
         modalW += "2";
         awayiconp *= (modalW == String.fromCharCode(76,0) ? parseInt(`${rootl}`) : modalW.length);
      }
       let moreO = 3;
       let trophyp = 0;
      while (!selectX.includes(`${moreO}`)) {
          let cross9 = false;
         selectX = `${parseInt(`${photo3}`) ^ faviconT.length}`;
         cross9 = !cross9 || cross9;
         break;
      }
         moreO |= tooltipsu.length;
      if (parseInt(`${photo3}`) >= tooltipsu.length) {
          let whistleV = String.fromCharCode(100,99,97,100,97,116,97,0);
          let release_8q = 3;
         photo3 *= 3;
         whistleV = `${release_8q << (Math.min(Math.abs(2), 2))}`;
         release_8q >>= Math.min(whistleV.length, 5);
      }
      for (let i = 0; i < 1; i++) {
          let projectY: Map<any, any> = new Map([[String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,0),true ], [String.fromCharCode(114,97,103,103,97,98,108,101,0),false ], [String.fromCharCode(97,98,115,101,105,108,0),false ]]);
          let popupG = String.fromCharCode(102,111,108,108,111,119,115,0);
          let penaltyJ = false;
          let videovarp: Array<any> = [String.fromCharCode(122,108,105,98,0), String.fromCharCode(112,114,101,116,116,121,119,114,105,116,101,114,0), String.fromCharCode(115,105,103,110,97,108,115,0)];
          let redirectc = 4.0;
         faviconT = "3";
         projectY.set(`${redirectc}`, 2 >> (Math.min(4, Math.abs(projectY.size))));
         popupG += `${3 ^ parseInt(`${redirectc}`)}`;
         penaltyJ = (projectY.size & videovarp.length) < 55;
         videovarp = [(String.fromCharCode(84,0) == popupG ? (penaltyJ ? 3 : 2) : popupG.length)];
      }
         moreO ^= 1;
      while (tooltipsu.length == 1) {
         selectX = `${trophyp}`;
         break;
      }
      let gesturesL = moreO <= 7752556;
      do {
          let delegate_cvA: Map<any, any> = new Map([[String.fromCharCode(116,109,112,0),816], [String.fromCharCode(121,101,116,0),933], [String.fromCharCode(100,105,115,112,108,97,121,115,0),917]]);
          let miniA = 4;
          let libfabricjnir = String.fromCharCode(103,101,110,101,114,97,116,101,95,114,95,53,0);
          let videojs2 = String.fromCharCode(97,114,103,120,105,0);
          let minik = String.fromCharCode(116,116,97,100,115,112,95,118,95,54,50,0);
         moreO |= 3 * selectX.length;
         delegate_cvA = new Map([[`${delegate_cvA.size}`, miniA]]);
         miniA -= delegate_cvA.size % 1;
         libfabricjnir += "1";
         videojs2 += `${minik.length >> (Math.min(2, Math.abs(delegate_cvA.size)))}`;
         minik = `${miniA}`;
         if (gesturesL) {
            break;
         }
      } while (((tooltipsu.length / 3) < 2 || 3 < (moreO / (Math.max(tooltipsu.length, 3)))) && gesturesL);
         trophyp += faviconT.length % (Math.max(1, 4));
          let gifgoalbgR: Array<any> = [304, 180];
          let cornershootq = String.fromCharCode(106,97,99,111,115,117,98,0);
         trophyp |= cornershootq.length;
         gifgoalbgR = [gifgoalbgR.length];
         cornershootq = `${3 - gifgoalbgR.length}`;
         moreO *= moreO;
      libreactnativejniD += `${stepK}`;
   }

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KTemperatureLibreactnativeblob);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KSinglePush, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KIssub,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KSinglePush);
    }


    
    static playlistViewsAnalytics = () => {
       let defaultlogo9 = false;
    let awayU = true;
    let settingsN = true;
    let playlistm: Array<any> = [439, 376, 213];
    let switch_6a = String.fromCharCode(110,97,117,116,105,99,97,108,0);
    let iconpipexpand_ = 1.0;
    let stats7 = 3.0;
    let actionf = 3.0;
    let previewo = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,0);
    let tooltipst = String.fromCharCode(103,97,117,115,115,105,97,110,0);
    let armvaN = 5.0;
    let backwardg: Map<any, any> = new Map([[String.fromCharCode(99,121,99,108,105,99,0),false ], [String.fromCharCode(107,95,54,0),false ], [String.fromCharCode(98,105,110,111,109,105,97,108,0),true ]]);
    let securityF = String.fromCharCode(112,114,101,118,111,105,117,115,0);
    let tempnodatagifM = 4;
    let mime5 = String.fromCharCode(97,114,114,97,121,115,0);
   while (backwardg.size < 4) {
      previewo = `${parseInt(`${stats7}`) + 2}`;
      break;
   }
      actionf *= (parseFloat(`${(defaultlogo9 ? 5 : 4) << (Math.min(Math.abs(parseInt(`${actionf}`)), 5))}`));
   if (actionf <= 2.79) {
      actionf += parseFloat(`${1 & switch_6a.length}`);
   }
   for (let i = 0; i < 2; i++) {
      switch_6a += `${((awayU ? 5 : 2) >> (Math.min(playlistm.length, 3)))}`;
   }
       let libffmpegkitM = String.fromCharCode(97,95,51,55,95,100,105,102,102,105,99,117,108,116,121,0);
       let miniy = false;
       let yellowM = String.fromCharCode(99,104,101,99,107,115,117,109,115,0);
         yellowM = `${yellowM.length + 2}`;
       let x_counth = String.fromCharCode(110,111,100,101,0);
       let xvodL = String.fromCharCode(114,101,118,105,101,119,0);
       let sortr = 0;
       let sliderV = 3;
         miniy = yellowM.includes(`${sortr}`);
      for (let y = 0; y < 1; y++) {
          let middlewareO = 5.0;
          let updatesY = String.fromCharCode(101,110,100,101,100,0);
          let annerq = String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,0);
         libffmpegkitM += "2";
         middlewareO /= Math.max(5, annerq.length >> (Math.min(updatesY.length, 1)));
         updatesY = `${annerq.length}`;
      }
      while (5 > (x_counth.length ^ 4)) {
         sortr ^= 2;
         break;
      }
         x_counth += `${2 << (Math.min(4, Math.abs(sortr)))}`;
         xvodL += "2";
         sortr &= 1;
      settingsN = !awayU;
      settingsN = null != backwardg.get(`${armvaN}`);
      playlistm.push(parseInt(`${actionf}`) % 2);

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KAnythink, {});

      defaultlogo9 = !tooltipst.startsWith(`${actionf}`);
   while (3.25 > (armvaN / 2.0)) {
      armvaN *= (parseFloat(`${(awayU ? 2 : 4) | switch_6a.length}`));
      break;
   }
      actionf /= Math.max(parseFloat(`${previewo.length}`), 5);
   while (settingsN && previewo.length <= 2) {
      settingsN = 11.5 >= iconpipexpand_ && awayU;
      break;
   }
      settingsN = 40.19 > iconpipexpand_;
   let liveshare0 = playlistm.length >= 5281573;
   do {
       let router1 = 1.0;
       let videojs9 = String.fromCharCode(116,101,109,112,102,105,108,101,0);
       let templateprocessorG = 1;
      while ((videojs9.length >> (Math.min(2, Math.abs(templateprocessorG)))) >= 3 && 1 >= (templateprocessorG >> (Math.min(Math.abs(3), 2)))) {
         videojs9 = `${videojs9.length}`;
         break;
      }
      for (let z = 0; z < 3; z++) {
          let areaR: Map<any, any> = new Map([[String.fromCharCode(99,105,110,101,0),709], [String.fromCharCode(112,114,105,110,116,102,0),39]]);
          let langR = String.fromCharCode(103,101,110,104,0);
          let audienceH = String.fromCharCode(112,101,114,102,0);
          let iconwatchl = 3.0;
         router1 -= parseFloat(`${langR.length}`);
         areaR.set(`${iconwatchl}`, audienceH.length);
         langR += `${parseInt(`${iconwatchl}`) / 3}`;
         audienceH = `${parseInt(`${iconwatchl}`) + 3}`;
      }
         videojs9 += `${templateprocessorG << (Math.min(1, Math.abs(3)))}`;
      if ((router1 * 5.87) > 2.65) {
          let basketballawayteamL: Map<any, any> = new Map([[String.fromCharCode(101,95,55,53,95,117,110,97,108,105,103,110,0),771], [String.fromCharCode(112,105,120,99,116,120,0),549]]);
          let fileA = String.fromCharCode(98,105,110,97,115,99,105,105,0);
          let turndownT = String.fromCharCode(99,111,100,97,98,108,101,0);
          let groupj = false;
         templateprocessorG += 1 ^ videojs9.length;
         basketballawayteamL = new Map([[`${basketballawayteamL.size}`, 2 * basketballawayteamL.size]]);
         fileA += `${basketballawayteamL.size | 2}`;
         turndownT += "3";
         groupj = basketballawayteamL.size > turndownT.length;
      }
       let targetF = false;
       let iconqq7 = false;
         iconqq7 = (targetF ? iconqq7 : !targetF);
      if (4.33 >= (5.12 * router1)) {
          let whiteticke: Array<any> = [519, 448, 863];
          let backu = String.fromCharCode(99,97,110,100,108,101,0);
         router1 += parseFloat(`${parseInt(`${router1}`) ^ whiteticke.length}`);
         whiteticke.push(backu.length ^ backu.length);
      }
       let basketballtrophys = 3;
       let neonh = 5;
      while (4 <= basketballtrophys) {
         basketballtrophys *= 1;
         break;
      }
      playlistm.push((1 / (Math.max(10, (awayU ? 1 : 3)))));
      if (liveshare0) {
         break;
      }
   } while ((playlistm.includes(actionf)) && liveshare0);
   if ((5.31 - actionf) < 1.50) {
      defaultlogo9 = (stats7 * tooltipst.length) < 22.19;
   }
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KDanger,
        });

   let screen5 = awayU ? !awayU : awayU;
   do {
       let mail2 = String.fromCharCode(103,109,97,116,99,104,0);
       let bufferJ = 4.0;
       let update_eT = 5;
       let friendsi = String.fromCharCode(112,97,99,107,101,116,105,122,101,114,95,109,95,53,0);
          let emptyg = 1;
         bufferJ *= parseFloat(`${update_eT - 2}`);
         emptyg >>= Math.min(3, Math.abs(emptyg ^ 3));
         mail2 += `${mail2.length}`;
      if (5.98 == bufferJ) {
         update_eT <<= Math.min(Math.abs(mail2.length + 2), 1);
      }
       let chatA: Array<any> = [651, 998, 499];
       let downarrowF = 0.0;
       let fastforwardh = 5.0;
       let downloader_ = 5;
       let bottomS = 0;
      for (let j = 0; j < 1; j++) {
         friendsi += "1";
      }
      let modalO = fastforwardh <= 9859218.0;
      do {
          let f_counto: Array<any> = [String.fromCharCode(110,101,103,97,116,101,0), String.fromCharCode(97,99,108,114,0), String.fromCharCode(116,114,120,116,0)];
          let libfabricjni4 = 4;
          let bootw = String.fromCharCode(110,111,116,0);
          let goalM: Array<any> = [91, 886];
          let whiteS = false;
         fastforwardh -= parseFloat(`${2 * chatA.length}`);
         f_counto = [f_counto.length ^ libfabricjni4];
         libfabricjni4 += 1 - f_counto.length;
         bootw += `${libfabricjni4}`;
         goalM = [(String.fromCharCode(49,0) == bootw ? goalM.length : bootw.length)];
         whiteS = 90 == libfabricjni4;
         if (modalO) {
            break;
         }
      } while ((fastforwardh < 2.74) && modalO);
       let xvodd = String.fromCharCode(100,95,48,95,122,111,110,101,115,0);
       let executorl = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,0);
      if (!executorl.endsWith(xvodd)) {
         xvodd += `${downloader_}`;
      }
      if (3 > (bottomS & 5)) {
         downloader_ ^= mail2.length;
      }
         friendsi = "3";
      awayU = bufferJ <= 31.42 && 31.42 <= actionf;
      if (screen5) {
         break;
      }
   } while (screen5 && (5 > (backwardg.size + 5)));
      stats7 -= previewo.length;
   for (let m = 0; m < 2; m++) {
       let penaltyshootE = true;
       let areaJ = false;
       let predictionbannerU = 2.0;
       let fasta = String.fromCharCode(111,98,106,101,99,116,115,0);
       let reactnativeratings5 = String.fromCharCode(118,112,108,112,102,0);
      while (5.51 <= (3.49 + predictionbannerU) && (predictionbannerU + 3.49) <= 4.22) {
         fasta = `${fasta.length}`;
         break;
      }
      if ((reactnativeratings5.length + 1) > 5) {
         reactnativeratings5 = `${(fasta == String.fromCharCode(66,0) ? fasta.length : (areaJ ? 4 : 2))}`;
      }
         predictionbannerU += (1 << (Math.min(Math.abs((areaJ ? 1 : 3)), 5)));
         reactnativeratings5 = `${reactnativeratings5.length * parseInt(`${predictionbannerU}`)}`;
      let show7 = 7095377.0 >= predictionbannerU;
      do {
          let o_players = 4.0;
         predictionbannerU /= Math.max(((areaJ ? 2 : 1) - parseInt(`${predictionbannerU}`)), 3);
         o_players *= parseFloat(`${parseInt(`${o_players}`) & parseInt(`${o_players}`)}`);
         if (show7) {
            break;
         }
      } while (show7 && (5 >= (reactnativeratings5.length | 3) && (3 - reactnativeratings5.length) >= 5));
      let encrypt0 = 9761303.0 <= predictionbannerU;
      do {
         predictionbannerU *= fasta.length;
         if (encrypt0) {
            break;
         }
      } while ((predictionbannerU <= 1.65) && encrypt0);
          let launchX = String.fromCharCode(116,111,107,104,122,0);
          let expiredI = 3.0;
          let countdownK = true;
         predictionbannerU /= Math.max(3, 2);
         launchX = "1";
         expiredI -= parseFloat(`${parseInt(`${expiredI}`) | 2}`);
         countdownK = !countdownK;
      if ((3 + parseInt(`${predictionbannerU}`)) <= 2 && 2.2 <= (predictionbannerU + 3.20)) {
         predictionbannerU -= fasta.length;
      }
         fasta += "2";
      let plashh = 5327080.0 >= predictionbannerU;
      do {
         predictionbannerU += ((penaltyshootE ? 5 : 2) % (Math.max(parseInt(`${predictionbannerU}`), 2)));
         if (plashh) {
            break;
         }
      } while (plashh && (5.12 == (predictionbannerU / (Math.max(fasta.length, 3))) && 5.12 == (predictionbannerU / (Math.max(1, fasta.length)))));
         areaJ = (12 > ((penaltyshootE ? fasta.length : 12) / (Math.max(fasta.length, 7))));
         reactnativeratings5 = `${((penaltyshootE ? 1 : 4) % (Math.max(3, 9)))}`;
          let linkd = String.fromCharCode(108,111,99,107,109,103,114,0);
          let emojiD = false;
         areaJ = 61.86 >= predictionbannerU;
         linkd += `${((emojiD ? 5 : 1) << (Math.min(Math.abs(2), 1)))}`;
         emojiD = linkd.length == 68 && !emojiD;
       let libreactY = String.fromCharCode(105,122,101,114,111,0);
         fasta = `${(2 << (Math.min(4, Math.abs((areaJ ? 5 : 5)))))}`;
      stats7 -= (3 & (settingsN ? 1 : 4));
   }
   for (let g = 0; g < 2; g++) {
      defaultlogo9 = playlistm.includes(awayU);
   }
   let privatechatbg9 = defaultlogo9 ? !defaultlogo9 : defaultlogo9;
   do {
      defaultlogo9 = (armvaN / (Math.max(parseFloat(`${securityF.length}`), 6))) < 92.79;
      if (privatechatbg9) {
         break;
      }
   } while ((backwardg.size <= 1 && (backwardg.size * 1) <= 4) && privatechatbg9);
   while (previewo.startsWith(`${stats7}`)) {
      stats7 -= parseInt(`${iconpipexpand_}`) / 3;
      break;
   }
      actionf *= parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${stats7}`))))}`);

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KAnythink);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KPlaceholder, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KDanger,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KPlaceholder);
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KBridge, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KPlash,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KBridge);
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KYellowtored, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KPlash,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KYellowtored);
    }


    
    static userCenterLoginSuccessTimesAnalytics = () => {
       let graphicsM = 0.0;
    let merger5 = String.fromCharCode(112,114,101,104,101,97,116,0);
    let crossY = 1;
    let qaage = true;
    let bridgeI = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,0);
    let mergerC: Array<any> = [String.fromCharCode(102,111,117,114,116,104,0), String.fromCharCode(98,111,110,106,111,117,114,0)];
    let typingM = String.fromCharCode(102,114,97,99,116,105,111,110,0);
    let mbsplashK = String.fromCharCode(99,108,111,117,100,0);
    let libjsiN: Array<any> = [957, 19, 287];
    let runtime5 = 1;
   while (bridgeI.startsWith(`${qaage}`)) {
      qaage = mbsplashK.length > 36;
      break;
   }
   let long_nbn = 9120319 <= mergerC.length;
   do {
       let sharedz = String.fromCharCode(99,111,109,112,117,116,101,100,0);
       let chinasamef = 2.0;
         chinasamef *= sharedz.length;
          let whatsappm: Array<any> = [822, 821];
          let nativemoduleJ = 2;
          let unselectedH = String.fromCharCode(99,111,110,115,101,110,116,0);
         chinasamef += nativemoduleJ / (Math.max(parseInt(`${chinasamef}`), 6));
         whatsappm.push(unselectedH.length + whatsappm.length);
         nativemoduleJ *= 3 & unselectedH.length;
          let statsnomoredata5 = false;
         chinasamef += sharedz.length / (Math.max(3, 9));
         statsnomoredata5 = statsnomoredata5 || !statsnomoredata5;
      let mbbidb = String.fromCharCode(95,115,110,49,99,99,0) == sharedz;
      do {
          let subin7 = 4.0;
          let shooth = 3.0;
          let fullscreenmaxn = String.fromCharCode(112,114,101,100,105,99,116,111,114,115,0);
          let step_ = 4.0;
          let clockx = 1.0;
         sharedz += `${sharedz.length}`;
         subin7 += parseFloat(`${fullscreenmaxn.length / 2}`);
         shooth -= parseInt(`${shooth}`) + 1;
         fullscreenmaxn = `${(String.fromCharCode(75,0) == fullscreenmaxn ? fullscreenmaxn.length : parseInt(`${shooth}`))}`;
         step_ /= Math.max(parseFloat(`${parseInt(`${clockx}`)}`), 5);
         if (mbbidb) {
            break;
         }
      } while (mbbidb && (parseInt(`${chinasamef}`) == sharedz.length));
      while ((chinasamef + sharedz.length) == 2.52 || 4.39 == (chinasamef + 2.52)) {
         sharedz += `${3 ^ parseInt(`${chinasamef}`)}`;
         break;
      }
       let skipu: Map<any, any> = new Map([[String.fromCharCode(115,107,101,108,101,116,111,110,0),true ], [String.fromCharCode(107,101,109,112,102,0),false ]]);
       let borderlessh: Map<any, any> = new Map([[String.fromCharCode(114,101,109,101,109,98,101,114,0),675], [String.fromCharCode(99,111,109,112,111,115,105,116,105,111,110,0),933], [String.fromCharCode(109,111,115,97,105,99,0),851]]);
      mergerC = [((qaage ? 4 : 5) ^ 2)];
      if (long_nbn) {
         break;
      }
   } while ((3 == bridgeI.length) && long_nbn);
   for (let f = 0; f < 2; f++) {
       let libswscale6 = String.fromCharCode(121,95,50,51,95,104,97,115,0);
       let o_playerX = 1;
       let patho = String.fromCharCode(104,97,100,111,119,115,0);
       let time_ws7: Map<any, any> = new Map([[String.fromCharCode(110,111,116,99,104,0),true ], [String.fromCharCode(115,119,105,112,101,100,0),false ]]);
       let libapminsightbx = true;
      while (4 > (libswscale6.length >> (Math.min(4, Math.abs(o_playerX)))) && 4 > (4 >> (Math.min(2, libswscale6.length)))) {
         o_playerX |= 2;
         break;
      }
      while (!libapminsightbx) {
          let componentP = 5;
          let vietnamc: Array<any> = [765, 120, 240];
          let launchQ = 4.0;
         time_ws7 = new Map([[patho, patho.length + o_playerX]]);
         componentP &= 1 & vietnamc.length;
         vietnamc = [componentP];
         launchQ += parseFloat(`${componentP}`);
         break;
      }
      let starC = 9066333 >= libswscale6.length;
      do {
         libswscale6 += `${((libapminsightbx ? 4 : 3) ^ time_ws7.size)}`;
         if (starC) {
            break;
         }
      } while (starC && (libswscale6.endsWith(`${o_playerX}`)));
         time_ws7 = new Map([[libswscale6, patho.length & libswscale6.length]]);
      let castS = 7363888 >= o_playerX;
      do {
         o_playerX += patho.length * time_ws7.size;
         if (castS) {
            break;
         }
      } while (castS && (2 == (o_playerX / 1) || 3 == (o_playerX / (Math.max(1, 10)))));
          let typingg: Map<any, any> = new Map([[String.fromCharCode(100,101,110,111,105,115,101,102,105,108,116,101,114,0),280], [String.fromCharCode(119,101,108,115,101,110,99,0),613], [String.fromCharCode(109,111,98,105,117,115,0),180]]);
          let twitterq = String.fromCharCode(101,102,102,101,99,116,115,0);
         time_ws7.set(patho, 1 ^ patho.length);
         typingg.set(twitterq, 1);
         twitterq = `${typingg.size % 1}`;
          let transferk = true;
          let topicX = 0.0;
         libapminsightbx = 28 < o_playerX && patho.length < 28;
         transferk = topicX > 54.60;
         topicX -= ((transferk ? 5 : 2) % (Math.max(parseInt(`${topicX}`), 1)));
         time_ws7.set(libswscale6, (libswscale6 == String.fromCharCode(86,0) ? o_playerX : libswscale6.length));
      for (let x = 0; x < 3; x++) {
         o_playerX *= 2;
      }
         patho += `${time_ws7.size - 3}`;
       let views9 = String.fromCharCode(99,97,99,104,101,115,0);
       let iconviewergif_ = String.fromCharCode(102,105,120,101,100,0);
      for (let h = 0; h < 1; h++) {
          let mbridgeX = 4.0;
          let rulesB = String.fromCharCode(115,117,98,112,101,108,0);
          let spec4 = String.fromCharCode(115,113,117,101,101,122,101,0);
          let mimop = String.fromCharCode(97,116,116,114,97,99,116,105,111,110,0);
          let catagoryu = String.fromCharCode(121,117,118,112,108,0);
         views9 = `${1 - time_ws7.size}`;
         mbridgeX -= mimop.length;
         rulesB = `${3 & catagoryu.length}`;
         spec4 += `${3 ^ mimop.length}`;
         catagoryu = `${(String.fromCharCode(67,0) == catagoryu ? catagoryu.length : parseInt(`${mbridgeX}`))}`;
      }
      if (!libswscale6.includes(`${libapminsightbx}`)) {
          let chart0 = String.fromCharCode(109,117,108,116,105,112,108,101,0);
          let redscoreballX = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0);
          let bottomB = String.fromCharCode(112,108,97,121,103,114,111,117,110,100,0);
          let sellmathbackgroundk = 0.0;
         libswscale6 += `${redscoreballX.length % 2}`;
         chart0 = `${(bottomB == String.fromCharCode(110,0) ? parseInt(`${sellmathbackgroundk}`) : bottomB.length)}`;
         redscoreballX += `${chart0.length}`;
         sellmathbackgroundk += (bottomB == String.fromCharCode(74,0) ? bottomB.length : parseInt(`${sellmathbackgroundk}`));
      }
       let iconclosewhitewithbgd = 0.0;
       let dialogg = 2.0;
       let recommendation8 = true;
       let scrollviewo = true;
      mbsplashK = "1";
   }
   while (!typingM.endsWith(`${mergerC.length}`)) {
      mergerC = [2 / (Math.max(6, merger5.length))];
      break;
   }
   if (mbsplashK == String.fromCharCode(53,0)) {
      typingM += `${merger5.length}`;
   }

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KSave, {});

   for (let c = 0; c < 1; c++) {
      bridgeI = `${crossY - parseInt(`${graphicsM}`)}`;
   }
   while (mbsplashK.startsWith(`${typingM.length}`)) {
      typingM += `${((qaage ? 2 : 2))}`;
      break;
   }
       let ewarded0 = false;
       let sharewhiteH = true;
       let cornerkickN = 3.0;
      if (cornerkickN <= 4.3) {
         cornerkickN -= parseFloat(`${parseInt(`${cornerkickN}`) >> (Math.min(4, Math.abs(2)))}`);
      }
          let loadingB = 3;
          let rulesi = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,0);
         ewarded0 = sharewhiteH;
         loadingB *= rulesi.length >> (Math.min(5, Math.abs(loadingB)));
         rulesi += `${rulesi.length}`;
         ewarded0 = cornerkickN <= 92.18;
          let dark9 = true;
         sharewhiteH = 54.71 <= cornerkickN || dark9;
         sharewhiteH = !ewarded0;
          let iconrightorangeY = String.fromCharCode(115,116,114,101,110,103,116,104,0);
          let becomeL = String.fromCharCode(115,112,101,99,116,114,97,108,0);
          let inouttargetredw = 2.0;
         sharewhiteH = (sharewhiteH ? !ewarded0 : !sharewhiteH);
         iconrightorangeY = `${3 * iconrightorangeY.length}`;
         becomeL = `${iconrightorangeY.length}`;
         inouttargetredw /= Math.max(becomeL.length ^ iconrightorangeY.length, 2);
          let borderlessht = String.fromCharCode(99,100,99,105,0);
         sharewhiteH = cornerkickN < 91.52;
         borderlessht = "3";
         sharewhiteH = ewarded0 && !sharewhiteH;
         sharewhiteH = 91.63 < cornerkickN;
      crossY >>= Math.min(Math.abs(1), 1);
      bridgeI = `${1 / (Math.max(crossY, 3))}`;
   for (let f = 0; f < 1; f++) {
      bridgeI = `${(String.fromCharCode(115,0) == mbsplashK ? mbsplashK.length : parseInt(`${graphicsM}`))}`;
   }
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KHeji,
        });

   while (!mbsplashK.startsWith(bridgeI)) {
       let iconviewergif_S = 5.0;
       let giftL: Array<any> = [338, 616];
       let phoneshared = 4.0;
       let reducer1 = String.fromCharCode(115,116,114,101,116,99,104,0);
      for (let f = 0; f < 3; f++) {
         iconviewergif_S /= Math.max(3, parseInt(`${phoneshared}`));
      }
         phoneshared /= Math.max(parseInt(`${iconviewergif_S}`), 4);
       let audienceo = String.fromCharCode(119,109,118,100,115,112,0);
      let canvasC = iconviewergif_S <= 9809379.0;
      do {
         iconviewergif_S *= parseInt(`${phoneshared}`) & giftL.length;
         if (canvasC) {
            break;
         }
      } while (canvasC && (4.12 <= iconviewergif_S));
      while (giftL.length > 4) {
         audienceo = `${parseInt(`${phoneshared}`) / (Math.max(giftL.length, 5))}`;
         break;
      }
      while ((audienceo.length % (Math.max(5, 7))) < 5 && 5.5 < (phoneshared / 4.84)) {
         phoneshared -= parseInt(`${phoneshared}`) >> (Math.min(audienceo.length, 1));
         break;
      }
      while (4.0 <= (3.2 / (Math.max(8, iconviewergif_S))) || (iconviewergif_S / (Math.max(6, audienceo.length))) <= 3.2) {
          let iconarrowleftP = String.fromCharCode(120,99,104,103,0);
          let str4: Array<any> = [238, 312, 940];
          let predictionbuttonL = String.fromCharCode(99,111,110,116,114,111,108,101,114,115,0);
          let vignetteK = String.fromCharCode(102,111,99,117,115,0);
          let typingk = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,0);
         iconviewergif_S *= reducer1.length << (Math.min(Math.abs(1), 2));
         iconarrowleftP = `${iconarrowleftP.length}`;
         str4 = [typingk.length >> (Math.min(Math.abs(2), 1))];
         predictionbuttonL += `${str4.length >> (Math.min(Math.abs(1), 4))}`;
         vignetteK = `${vignetteK.length & 1}`;
         typingk = `${(String.fromCharCode(53,0) == iconarrowleftP ? str4.length : iconarrowleftP.length)}`;
         break;
      }
         giftL.push(reducer1.length);
          let iconpipexpandG = String.fromCharCode(97,109,98,105,101,110,116,0);
          let backwhiteK = String.fromCharCode(99,97,108,99,108,117,108,97,116,101,0);
          let show1: Array<any> = [604, 991];
         audienceo = `${giftL.length % (Math.max(reducer1.length, 5))}`;
         iconpipexpandG = `${iconpipexpandG.length ^ backwhiteK.length}`;
         backwhiteK = `${backwhiteK.length << (Math.min(iconpipexpandG.length, 3))}`;
         show1.push(1 % (Math.max(7, iconpipexpandG.length)));
      let membern = String.fromCharCode(102,112,121,122,105,55,107,0) == reducer1;
      do {
         reducer1 = `${(String.fromCharCode(75,0) == audienceo ? audienceo.length : giftL.length)}`;
         if (membern) {
            break;
         }
      } while ((audienceo.length >= 4) && membern);
         reducer1 = `${parseInt(`${phoneshared}`)}`;
         audienceo += `${audienceo.length + 2}`;
      bridgeI = `${parseInt(`${graphicsM}`) | 2}`;
      break;
   }
   if (1 <= (2 - mbsplashK.length) || (mbsplashK.length - mergerC.length) <= 2) {
       let reactnavigationJ = false;
         reactnavigationJ = (reactnavigationJ ? !reactnavigationJ : !reactnavigationJ);
       let blacklist2 = false;
       let icontransferclubf = true;
         icontransferclubf = (icontransferclubf ? blacklist2 : icontransferclubf);
      mbsplashK = `${typingM.length}`;
   }
      graphicsM -= parseFloat(`${1}`);
   for (let r = 0; r < 2; r++) {
      typingM = `${3 >> (Math.min(3, Math.abs(parseInt(`${graphicsM}`))))}`;
   }
      qaage = typingM.length > 50 && mergerC.length > 50;

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KSave);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
       let teamQ: Map<any, any> = new Map([[String.fromCharCode(119,104,101,116,104,101,114,0),277], [String.fromCharCode(100,105,118,105,100,111,114,0),270]]);
    let package_a4V = 2.0;
    let countryL: Array<any> = [536, 263, 608];
    let debuga = String.fromCharCode(101,120,99,104,97,110,103,101,115,0);
    let cornershootH = 4;
    let playlistl = String.fromCharCode(97,99,100,99,0);
    let questl = false;
    let defaultroombgx = String.fromCharCode(108,105,99,101,110,115,101,0);
    let episodese = false;
    let album7 = String.fromCharCode(97,112,97,114,97,109,115,0);
    let rewardG = 3.0;
   while (3 < defaultroombgx.length) {
      teamQ.set(`${cornershootH}`, 3);
      break;
   }
      defaultroombgx += `${3 << (Math.min(3, defaultroombgx.length))}`;
   if (4 <= (debuga.length + 3) && (package_a4V + 2.45) <= 3.63) {
      debuga += "3";
   }
       let iconwatchnowi = String.fromCharCode(112,111,105,110,116,115,0);
       let fieldH = String.fromCharCode(112,108,117,103,103,101,100,0);
          let successl = 1.0;
          let interstitiald = 1;
          let viewerh = 2.0;
         fieldH = `${interstitiald / (Math.max(parseInt(`${successl}`), 5))}`;
         successl /= Math.max(2 + parseInt(`${viewerh}`), 4);
         interstitiald += 1 | parseInt(`${viewerh}`);
      for (let x = 0; x < 1; x++) {
          let libbufferU = String.fromCharCode(106,112,101,103,108,105,98,0);
          let klevinP = 0.0;
          let sliderz = true;
          let dplus7 = 0;
         fieldH += `${iconwatchnowi.length | libbufferU.length}`;
         libbufferU += `${dplus7}`;
         klevinP -= dplus7 >> (Math.min(5, Math.abs(1)));
         sliderz = dplus7 > parseInt(`${klevinP}`);
      }
         fieldH += `${iconwatchnowi.length}`;
         iconwatchnowi += `${fieldH.length ^ 2}`;
         iconwatchnowi += `${iconwatchnowi.length % (Math.max(3, 10))}`;
         fieldH = `${fieldH.length}`;
      teamQ.set(`${episodese}`, iconwatchnowi.length);
   while (!episodese) {
      package_a4V += parseInt(`${package_a4V}`);
      break;
   }

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KPackageIconviewergif, {});

   if (!episodese) {
       let gmaill = 0;
       let bgvipsportk = String.fromCharCode(112,117,108,115,101,115,98,105,116,115,0);
       let indicatorq: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,101,114,0),680], [String.fromCharCode(114,101,97,108,0),636], [String.fromCharCode(115,119,97,112,112,101,114,0),203]]);
      if (4 >= (5 ^ gmaill) && 4 >= (5 ^ bgvipsportk.length)) {
         gmaill <<= Math.min(5, Math.abs(gmaill));
      }
         gmaill >>= Math.min(4, bgvipsportk.length);
         indicatorq.set(`${gmaill}`, gmaill | 2);
      if (!bgvipsportk.endsWith(`${gmaill}`)) {
         gmaill <<= Math.min(1, Math.abs((bgvipsportk == String.fromCharCode(95,0) ? indicatorq.size : bgvipsportk.length)));
      }
          let notificationfillemptyc = true;
          let updatesc = String.fromCharCode(114,101,99,97,108,99,0);
          let predictionbuttonR: Map<any, any> = new Map([[String.fromCharCode(101,103,97,99,121,0),String.fromCharCode(105,99,111,110,0)], [String.fromCharCode(112,97,121,109,97,115,116,101,114,0),String.fromCharCode(115,116,101,112,112,101,114,0)]]);
         indicatorq.set(bgvipsportk, (bgvipsportk == String.fromCharCode(89,0) ? bgvipsportk.length : indicatorq.size));
         notificationfillemptyc = (((!notificationfillemptyc ? 14 : updatesc.length) / (Math.max(1, updatesc.length))) >= 14);
         predictionbuttonR.set(updatesc, ((notificationfillemptyc ? 5 : 2) << (Math.min(updatesc.length, 1))));
          let iconclosewhitewithbgq: Map<any, any> = new Map([[String.fromCharCode(103,97,109,109,97,0),456], [String.fromCharCode(99,97,108,108,115,0),217], [String.fromCharCode(118,115,105,110,107,0),41]]);
          let lang_: Array<any> = [759, 432];
         indicatorq = new Map([[`${gmaill}`, 2]]);
         iconclosewhitewithbgq.set(`${lang_.length}`, iconclosewhitewithbgq.size);
         lang_ = [iconclosewhitewithbgq.size];
       let rulesc = 4.0;
         bgvipsportk += `${indicatorq.size & 1}`;
      if (5 > (bgvipsportk.length | gmaill) && 5 > (bgvipsportk.length | gmaill)) {
         gmaill >>= Math.min(2, Math.abs(parseInt(`${rulesc}`) | gmaill));
      }
      episodese = !questl && package_a4V > 4.10;
   }
   let libloggerr = package_a4V <= 6053091.0;
   do {
      package_a4V -= (defaultroombgx.length - (questl ? 3 : 1));
      if (libloggerr) {
         break;
      }
   } while ((2 < (countryL.length + 1)) && libloggerr);
      countryL.push((playlistl == String.fromCharCode(78,0) ? debuga.length : playlistl.length));
      album7 = "3";
       let backwhiteu = 5.0;
       let matchinactiveO = String.fromCharCode(99,104,97,110,103,105,110,103,0);
       let dicev = String.fromCharCode(116,114,97,112,0);
      let imagesi = String.fromCharCode(55,111,98,102,49,116,0) == dicev;
      do {
         dicev = `${(String.fromCharCode(79,0) == dicev ? dicev.length : matchinactiveO.length)}`;
         if (imagesi) {
            break;
         }
      } while (imagesi && (5 >= matchinactiveO.length));
          let tempnodataH = String.fromCharCode(100,97,114,107,95,50,95,55,48,0);
          let mbnativeN: Array<any> = [786, 643, 541];
          let pingC = String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,0);
         dicev = `${matchinactiveO.length * 2}`;
         tempnodataH = `${mbnativeN.length | tempnodataH.length}`;
         mbnativeN = [3];
         pingC += `${tempnodataH.length & 1}`;
      let rulesT = dicev.length <= 7702841;
      do {
         dicev = `${(dicev == String.fromCharCode(111,0) ? dicev.length : matchinactiveO.length)}`;
         if (rulesT) {
            break;
         }
      } while (rulesT && (dicev.length < 4));
      while (5 == (matchinactiveO.length * parseInt(`${backwhiteu}`)) && 4.49 == (1.58 * backwhiteu)) {
         backwhiteu /= Math.max(3, (parseFloat(`${String.fromCharCode(109,0) == matchinactiveO ? matchinactiveO.length : parseInt(`${backwhiteu}`)}`)));
         break;
      }
         matchinactiveO += `${parseInt(`${backwhiteu}`)}`;
      package_a4V += 3 & album7.length;
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KDangerWhistle,
        });

   while (defaultroombgx.length > 4) {
       let xvodr = String.fromCharCode(112,97,114,115,105,110,103,0);
       let huaweiE = String.fromCharCode(114,101,100,117,99,116,105,111,110,115,0);
         huaweiE = `${(String.fromCharCode(53,0) == xvodr ? xvodr.length : huaweiE.length)}`;
      let animatione = 6902143 >= xvodr.length;
      do {
          let eighteenW = 2;
          let router0: Map<any, any> = new Map([[String.fromCharCode(114,97,99,105,110,103,0),String.fromCharCode(109,97,120,107,101,121,115,105,122,101,0)], [String.fromCharCode(115,109,111,111,116,104,110,101,115,115,0),String.fromCharCode(101,120,101,99,117,116,111,114,0)], [String.fromCharCode(116,95,50,52,95,105,109,112,111,114,116,115,0),String.fromCharCode(101,95,52,49,95,105,100,115,117,98,116,121,112,101,0)]]);
          let libyoga0 = 3.0;
         xvodr = `${3 + xvodr.length}`;
         eighteenW %= Math.max(3, router0.size * eighteenW);
         router0 = new Map([[`${router0.size}`, parseInt(`${libyoga0}`) ^ 2]]);
         libyoga0 += 2 | parseInt(`${libyoga0}`);
         if (animatione) {
            break;
         }
      } while ((!huaweiE.endsWith(`${xvodr.length}`)) && animatione);
       let nterstitialN = String.fromCharCode(118,97,108,117,101,0);
       let application7 = String.fromCharCode(115,97,100,120,0);
         application7 += `${nterstitialN.length + huaweiE.length}`;
          let becomea = String.fromCharCode(106,95,50,52,0);
         huaweiE = `${huaweiE.length / (Math.max(1, 2))}`;
         becomea += `${becomea.length}`;
      let twitterp = nterstitialN == String.fromCharCode(48,115,57,53,122,104,104,113,117,0);
      do {
         nterstitialN = `${nterstitialN.length & 1}`;
         if (twitterp) {
            break;
         }
      } while (twitterp && (application7 != nterstitialN));
      debuga = `${parseInt(`${package_a4V}`)}`;
      break;
   }
   if (defaultroombgx.length < playlistl.length) {
      playlistl = `${2 ^ debuga.length}`;
   }
      episodese = !episodese;
      questl = 89 == cornershootH;
   if ((album7.length & 4) < 4) {
      countryL = [1];
   }

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KPackageIconviewergif);
    }

    static userCenterVipPayViewsAnalytics = () => {
       let p_positionB = 1.0;
    let linkM = String.fromCharCode(100,97,105,108,121,0);
    let shielddone7 = 5;
    let libhermesN = String.fromCharCode(112,105,110,99,104,0);
    let actionsO = 0;
    let previewj = 5;
    let action6 = 0.0;
    let mbridges = String.fromCharCode(104,99,104,97,99,104,97,0);
    let sharewhite0 = String.fromCharCode(117,110,115,101,116,0);
    let background7 = true;
    let condensedg: Map<any, any> = new Map([[String.fromCharCode(98,107,116,114,0),942], [String.fromCharCode(115,101,109,105,99,111,108,111,110,0),702], [String.fromCharCode(109,97,120,105,109,105,122,101,100,0),187]]);
    let episodesh: Array<any> = [675, 899, 108];
    let minimizet = String.fromCharCode(115,116,111,112,112,105,110,103,0);
    let libhermesb = true;
    let dialogr: Array<any> = [661, 652, 705];
      background7 = (p_positionB - parseFloat(`${linkM.length}`)) == 1.33;
       let jnewss = 3.0;
      while (jnewss <= jnewss) {
         jnewss -= parseInt(`${jnewss}`);
         break;
      }
      let mappingT = 5851790.0 <= jnewss;
      do {
         jnewss += parseInt(`${jnewss}`) * 1;
         if (mappingT) {
            break;
         }
      } while ((1.69 > (jnewss + jnewss)) && mappingT);
      while (2.52 <= (jnewss - 1.60) || (jnewss - 1.60) <= 3.27) {
          let orientation0 = String.fromCharCode(119,97,105,116,101,114,0);
          let annerK = 1.0;
         jnewss += parseInt(`${annerK}`) | 1;
         orientation0 += `${orientation0.length * 2}`;
         annerK -= 3;
         break;
      }
      linkM += `${parseInt(`${p_positionB}`) - 1}`;
   for (let q = 0; q < 3; q++) {
      libhermesN = "1";
   }
       let suggestionI = 5.0;
       let iconclosewhitebg9 = String.fromCharCode(97,109,114,110,98,0);
       let basketballtrophyh: Map<any, any> = new Map([[String.fromCharCode(115,111,98,105,110,100,0),429], [String.fromCharCode(105,100,101,110,116,105,102,101,114,0),697]]);
       let defaultlogox: Map<any, any> = new Map([[String.fromCharCode(103,114,111,101,115,116,108,0),240], [String.fromCharCode(116,95,56,55,95,105,110,100,105,118,105,100,117,97,108,0),902]]);
          let defaultlogoW = 5.0;
         suggestionI /= Math.max(parseInt(`${suggestionI}`) ^ 1, 2);
         defaultlogoW += parseFloat(`${parseInt(`${defaultlogoW}`) % 3}`);
      if (iconclosewhitebg9.startsWith(`${suggestionI}`)) {
          let graphE = 1;
         iconclosewhitebg9 = `${parseInt(`${suggestionI}`)}`;
         graphE |= 1 + graphE;
      }
      for (let h = 0; h < 2; h++) {
          let icontransferclub3: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,0),337], [String.fromCharCode(99,111,99,111,115,100,120,0),707], [String.fromCharCode(99,111,114,100,0),696]]);
          let themeg: Array<any> = [153, 532, 395];
          let activity1 = String.fromCharCode(100,105,115,97,98,108,101,115,0);
         basketballtrophyh.set(`${suggestionI}`, parseInt(`${suggestionI}`));
         icontransferclub3 = new Map([[`${icontransferclub3.size}`, themeg.length]]);
         themeg = [icontransferclub3.size];
         activity1 = `${icontransferclub3.size}`;
      }
      for (let z = 0; z < 2; z++) {
          let mergerb = String.fromCharCode(109,101,109,109,103,114,0);
          let rewardT = String.fromCharCode(115,99,116,112,0);
         suggestionI += 3;
         mergerb = `${mergerb.length}`;
         rewardT = `${3 | rewardT.length}`;
      }
         iconclosewhitebg9 += `${defaultlogox.size - 2}`;
      actionsO >>= Math.min(linkM.length, 1);
   if (3.30 >= (5.86 + action6) || (5.86 + action6) >= 4.19) {
      action6 /= Math.max(3, parseFloat(`${parseInt(`${action6}`) - linkM.length}`));
   }

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KPenaltyshootnogoalHeart, {});

   for (let h = 0; h < 3; h++) {
      previewj %= Math.max(2, mbridges.length / 2);
   }
   let thailandP = background7 ? !background7 : background7;
   do {
      background7 = 53 < libhermesN.length || 53 < episodesh.length;
      if (thailandP) {
         break;
      }
   } while ((!background7) && thailandP);
       let c_centerm = String.fromCharCode(102,101,108,101,109,0);
       let videocommonh = true;
       let sendi: Map<any, any> = new Map([[String.fromCharCode(105,118,97,114,0),586], [String.fromCharCode(110,98,112,112,0),702], [String.fromCharCode(117,112,100,97,116,101,115,0),733]]);
      let penaltym = videocommonh ? !videocommonh : videocommonh;
      do {
         videocommonh = 60 <= c_centerm.length;
         if (penaltym) {
            break;
         }
      } while (penaltym && (3 == sendi.size && (sendi.size * 3) == 2));
          let linei: Map<any, any> = new Map([[String.fromCharCode(100,116,115,104,100,0),90], [String.fromCharCode(105,109,112,111,114,116,101,114,0),881]]);
          let libavutilD = 0.0;
         c_centerm = "1";
         linei = new Map([[`${linei.size}`, parseInt(`${libavutilD}`) >> (Math.min(Math.abs(3), 3))]]);
         libavutilD += parseInt(`${libavutilD}`);
      let catalog8 = c_centerm.length >= 8062411;
      do {
          let mbnativeadvancedB = 2;
          let z_centerz = 0.0;
          let nterstitials = true;
         c_centerm = "1";
         mbnativeadvancedB %= Math.max(2, (parseInt(`${z_centerz}`) & (nterstitials ? 2 : 4)));
         z_centerz *= 2;
         nterstitials = 13 >= mbnativeadvancedB || !nterstitials;
         if (catalog8) {
            break;
         }
      } while (catalog8 && (1 <= (sendi.size / (Math.max(2, c_centerm.length)))));
         c_centerm = `${(c_centerm.length ^ (videocommonh ? 3 : 1))}`;
         videocommonh = (((videocommonh ? 97 : sendi.size) & sendi.size) < 97);
         sendi.set(`${videocommonh}`, (sendi.size ^ (videocommonh ? 2 : 5)));
          let skipP = String.fromCharCode(112,97,114,115,101,95,122,95,56,55,0);
         c_centerm += `${((videocommonh ? 1 : 3))}`;
         skipP += `${skipP.length}`;
      if (2 > c_centerm.length) {
         c_centerm = "1";
      }
          let predictionw = String.fromCharCode(102,95,53,57,95,101,110,117,109,118,97,108,117,101,0);
          let plusF: Array<any> = [296, 106];
         sendi.set(`${plusF.length}`, 2 ^ plusF.length);
         predictionw = `${predictionw.length}`;
      linkM += `${3 - c_centerm.length}`;
   if (mbridges.length <= 4) {
      mbridges = `${2 << (Math.min(5, episodesh.length))}`;
   }
      linkM = `${episodesh.length}`;
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KZoomDycreator,
            params: {
                desc_1: 'pay',
            }
        });

      actionsO *= (linkM == String.fromCharCode(89,0) ? actionsO : linkM.length);
   if (libhermesN.endsWith(`${shielddone7}`)) {
      libhermesN += `${previewj >> (Math.min(5, Math.abs(3)))}`;
   }
   let filterW = 5944925 >= mbridges.length;
   do {
       let goallogou = 1.0;
       let downarrowr = String.fromCharCode(100,105,115,99,114,101,116,101,0);
      for (let g = 0; g < 2; g++) {
          let statsnomoredataC = 4.0;
         goallogou *= parseFloat(`${parseInt(`${goallogou}`) >> (Math.min(Math.abs(2), 3))}`);
         statsnomoredataC -= parseInt(`${statsnomoredataC}`) - parseInt(`${statsnomoredataC}`);
      }
          let membershipd: Map<any, any> = new Map([[String.fromCharCode(104,99,108,114,0),883], [String.fromCharCode(101,110,99,111,100,101,109,98,0),496]]);
          let indexK = false;
         goallogou /= Math.max(3, parseFloat(`${membershipd.size * 1}`));
      let schedulew = goallogou >= 8334854.0;
      do {
         goallogou /= Math.max(4, parseFloat(`${parseInt(`${goallogou}`) - downarrowr.length}`));
         if (schedulew) {
            break;
         }
      } while (((downarrowr.length % 2) > 2 || 1 > (2 & downarrowr.length)) && schedulew);
         goallogou -= parseFloat(`${1}`);
      while (3.96 >= (5.5 - goallogou)) {
          let modeW = 4;
          let currentx = String.fromCharCode(102,102,116,115,0);
          let iconbackwhiteN: Array<any> = [156, 318, 743];
          let m_countK = 5;
         downarrowr = "3";
         modeW &= m_countK;
         currentx = `${currentx.length ^ iconbackwhiteN.length}`;
         iconbackwhiteN = [m_countK];
         break;
      }
         goallogou *= parseFloat(`${1}`);
      mbridges = "3";
      if (filterW) {
         break;
      }
   } while (filterW && (1 == sharewhite0.length));
   let previewN = p_positionB <= 5214401.0;
   do {
       let reddownarrowp = true;
       let incidentM = 0;
       let mimes: Array<any> = [9, 736, 715];
       let iconclosewhitewithbgj = 0;
      for (let g = 0; g < 3; g++) {
         incidentM |= incidentM & 1;
      }
         iconclosewhitewithbgj %= Math.max(2, mimes.length % (Math.max(3, 5)));
      while ((5 / (Math.max(7, mimes.length))) < 1 && !reddownarrowp) {
         reddownarrowp = incidentM > 44;
         break;
      }
         reddownarrowp = (25 <= ((!reddownarrowp ? 25 : mimes.length) & mimes.length));
         incidentM /= Math.max(2, 3 % (Math.max(1, incidentM)));
         reddownarrowp = mimes.length <= 13 || 13 <= incidentM;
          let libavdevicem = false;
          let mutedJ = 3;
         incidentM %= Math.max(2, 1);
         libavdevicem = 61 >= mutedJ;
         mutedJ |= 1;
      while ((iconclosewhitewithbgj - 1) < 1) {
         iconclosewhitewithbgj *= incidentM;
         break;
      }
          let china8 = String.fromCharCode(115,112,101,101,120,0);
         mimes = [china8.length];
      while (!reddownarrowp) {
         iconclosewhitewithbgj &= 3 | iconclosewhitewithbgj;
         break;
      }
      while ((iconclosewhitewithbgj % 2) == 4) {
         mimes = [mimes.length | 1];
         break;
      }
      for (let u = 0; u < 1; u++) {
         reddownarrowp = 21 == incidentM;
      }
      p_positionB *= parseFloat(`${2}`);
      if (previewN) {
         break;
      }
   } while ((5 == minimizet.length) && previewN);
   while (linkM.length >= sharewhite0.length) {
      linkM = "2";
      break;
   }

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KPenaltyshootnogoalHeart);
    }

    static userCenterVipInviteViewsAnalytics = () => {
       let pressureq = true;
    let away7 = String.fromCharCode(116,95,49,95,102,108,111,97,116,115,0);
    let libjsijniprofiler7 = 2.0;
    let downloade = String.fromCharCode(97,116,111,98,111,111,108,0);
    let iconarrowrightwhiteM = 3.0;
    let videovarh = 1.0;
    let minivod1: Array<any> = [525, 530, 534];
    let statisticsS = 1;
    let castT = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,0);
   if ((parseFloat(`${away7.length}`) / (Math.max(5, videovarh))) == 3.84 && 3.70 == (videovarh / 3.84)) {
      videovarh -= parseFloat(`${1}`);
   }
      statisticsS /= Math.max(3, away7.length);
   for (let w = 0; w < 1; w++) {
      downloade = `${((pressureq ? 2 : 5) ^ minivod1.length)}`;
   }
   for (let d = 0; d < 2; d++) {
      libjsijniprofiler7 -= 3 ^ statisticsS;
   }

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KMalaysia, {});

   while (pressureq) {
       let reducer3 = true;
       let controlsz = String.fromCharCode(116,117,110,105,110,103,0);
         controlsz = `${(String.fromCharCode(100,0) == controlsz ? (reducer3 ? 1 : 3) : controlsz.length)}`;
         reducer3 = controlsz.length < 98;
      if (controlsz.length <= 3) {
         reducer3 = controlsz.length == 78 || reducer3;
      }
      for (let m = 0; m < 1; m++) {
         reducer3 = controlsz.length <= 92;
      }
      for (let a = 0; a < 3; a++) {
          let fullscreenminc: Array<any> = [166, 146, 642];
         reducer3 = (fullscreenminc.length % (Math.max(controlsz.length, 6))) >= 37;
      }
         controlsz = "1";
      iconarrowrightwhiteM += (away7 == String.fromCharCode(105,0) ? away7.length : parseInt(`${iconarrowrightwhiteM}`));
      break;
   }
   for (let a = 0; a < 2; a++) {
       let readw = 2;
         readw *= readw;
      for (let j = 0; j < 2; j++) {
         readw *= readw;
      }
      while (readw >= readw) {
         readw >>= Math.min(4, Math.abs(readw % 2));
         break;
      }
      pressureq = 2 <= minivod1.length;
   }
      libjsijniprofiler7 *= minivod1.length & 3;
   for (let j = 0; j < 3; j++) {
      away7 += `${minivod1.length | statisticsS}`;
   }
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KZoomDycreator,
            params: {
                desc_1: 'invite',
            }
        });

      pressureq = statisticsS <= parseInt(`${libjsijniprofiler7}`);
      statisticsS += 1;
      libjsijniprofiler7 += statisticsS;
       let qaagl = String.fromCharCode(105,100,101,110,116,105,102,105,101,100,0);
         qaagl += `${1 | qaagl.length}`;
         qaagl = `${qaagl.length ^ qaagl.length}`;
      while (qaagl.length <= qaagl.length) {
         qaagl = `${qaagl.length + qaagl.length}`;
         break;
      }
      iconarrowrightwhiteM /= Math.max(3, 1);

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KMalaysia);
    }


    
    static searchResultViewsAnalytics = () => {
       let footballtrophyD = true;
    let uploadR: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,105,110,115,0),675], [String.fromCharCode(99,98,115,110,105,100,0),813]]);
    let eact8 = true;
    let sentryO = false;
    let configr = 1.0;
    let videojsa = 3.0;
    let userT = String.fromCharCode(119,95,52,50,95,111,119,110,101,114,115,104,105,112,0);
    let internetq = String.fromCharCode(112,111,119,0);
    let layoutH = 1.0;
    let inactiveI = true;
    let desc6 = 0.0;
    let libreactnativeblobS = 4.0;
    let linen: Map<any, any> = new Map([[String.fromCharCode(117,110,112,97,99,107,104,105,0),true ], [String.fromCharCode(117,110,101,120,112,101,99,116,101,100,0),false ], [String.fromCharCode(112,97,114,101,110,116,115,0),true ]]);
   for (let l = 0; l < 3; l++) {
      internetq = `${parseInt(`${desc6}`) << (Math.min(2, Math.abs(1)))}`;
   }
   for (let h = 0; h < 1; h++) {
       let dataM = String.fromCharCode(105,102,97,115,116,0);
       let settingZ: Array<any> = [String.fromCharCode(104,111,116,111,0), String.fromCharCode(98,97,99,107,100,114,111,112,0)];
       let currentY: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,105,110,103,0),900], [String.fromCharCode(102,97,99,105,108,105,116,97,116,101,0),419]]);
      while (!dataM.startsWith(`${settingZ.length}`)) {
         settingZ.push(currentY.size);
         break;
      }
       let o_unlockr = 2.0;
          let libreactperfloggerjniA = 2.0;
         o_unlockr -= 1 >> (Math.min(5, settingZ.length));
         libreactperfloggerjniA -= parseFloat(`${parseInt(`${libreactperfloggerjniA}`) % (Math.max(parseInt(`${libreactperfloggerjniA}`), 5))}`);
      while (settingZ.length == dataM.length) {
         settingZ = [(String.fromCharCode(109,0) == dataM ? dataM.length : settingZ.length)];
         break;
      }
      if (o_unlockr <= currentY.size) {
          let more7 = String.fromCharCode(111,95,50,49,95,115,108,105,99,101,116,121,112,101,0);
         o_unlockr /= Math.max(2, 2);
         more7 += `${more7.length}`;
      }
          let huawei3 = 4.0;
          let more1 = false;
         currentY.set(`${more1}`, currentY.size);
         huawei3 -= parseInt(`${huawei3}`);
         settingZ.push((dataM == String.fromCharCode(119,0) ? dataM.length : settingZ.length));
         settingZ.push(1);
      let mbsplashN = 8068007 >= currentY.size;
      do {
         currentY = new Map([[`${currentY.size}`, 2]]);
         if (mbsplashN) {
            break;
         }
      } while (mbsplashN && (4 < (currentY.size - parseInt(`${o_unlockr}`)) && (o_unlockr - currentY.size) < 2.97));
      eact8 = !sentryO;
   }
      inactiveI = ((internetq.length & (!footballtrophyD ? internetq.length : 93)) == 93);
      eact8 = 43 < internetq.length || layoutH < 48.4;
      sentryO = eact8 || 26.77 == configr;
      desc6 += ((eact8 ? 2 : 3));
   let resultu = eact8 ? !eact8 : eact8;
   do {
      eact8 = 47.66 < videojsa;
      if (resultu) {
         break;
      }
   } while (resultu && (5.23 <= desc6));

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KPressureAwayteamfield, {});

      videojsa += parseFloat(`${parseInt(`${videojsa}`) - 3}`);
       let footballfielda = String.fromCharCode(115,100,97,108,108,111,99,120,0);
       let homeinactivej = String.fromCharCode(105,110,115,116,97,108,108,105,110,103,95,101,95,57,56,0);
       let lessS = false;
         homeinactivej = `${homeinactivej.length}`;
          let textlayoutmanagerL = String.fromCharCode(115,112,114,105,110,103,0);
          let dialogb = String.fromCharCode(118,101,110,117,101,95,109,95,51,0);
          let t_hashI: Map<any, any> = new Map([[String.fromCharCode(105,110,116,108,101,0),String.fromCharCode(109,101,116,114,105,99,115,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,0),String.fromCharCode(105,95,54,51,95,104,97,110,103,117,112,0)]]);
         footballfielda += `${footballfielda.length}`;
         textlayoutmanagerL = "3";
         dialogb = `${textlayoutmanagerL.length | 3}`;
         t_hashI.set(textlayoutmanagerL, textlayoutmanagerL.length);
      let matchinactiveW = 6164494 <= footballfielda.length;
      do {
         footballfielda = `${homeinactivej.length >> (Math.min(footballfielda.length, 2))}`;
         if (matchinactiveW) {
            break;
         }
      } while (matchinactiveW && (!lessS));
      for (let l = 0; l < 2; l++) {
         footballfielda = `${homeinactivej.length}`;
      }
       let controlsi = 1;
         lessS = homeinactivej.endsWith(`${lessS}`);
         lessS = controlsi < 12 || lessS;
      if (homeinactivej.includes(`${lessS}`)) {
         homeinactivej += `${((lessS ? 5 : 1) ^ controlsi)}`;
      }
      while ((controlsi >> (Math.min(Math.abs(4), 1))) >= 5 && 1 >= (footballfielda.length >> (Math.min(Math.abs(4), 2)))) {
         footballfielda += "2";
         break;
      }
      configr -= (parseFloat(`${(sentryO ? 4 : 4)}`));
      layoutH += (3 << (Math.min(2, Math.abs((sentryO ? 3 : 1)))));
   if (5 < internetq.length && eact8) {
      internetq += "1";
   }
      configr /= Math.max((parseFloat(`${parseInt(`${configr}`) >> (Math.min(4, Math.abs((sentryO ? 1 : 4))))}`)), 2);
       let yellowtoredW: Map<any, any> = new Map([[String.fromCharCode(111,95,56,50,95,112,117,98,108,105,99,0),567], [String.fromCharCode(112,114,101,97,109,98,108,101,0),519], [String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,0),242]]);
       let reactP = String.fromCharCode(97,99,116,117,97,108,95,106,95,50,55,0);
       let privatechatbgS: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,98,100,0),489], [String.fromCharCode(108,95,56,56,95,99,111,108,115,112,97,110,0),453], [String.fromCharCode(102,114,97,103,109,101,110,116,115,0),446]]);
         reactP = `${(String.fromCharCode(73,0) == reactP ? reactP.length : yellowtoredW.size)}`;
         yellowtoredW.set(reactP, privatechatbgS.size << (Math.min(Math.abs(1), 4)));
      if (yellowtoredW.size == 4) {
         privatechatbgS.set(reactP, 2);
      }
      if (!Array.from(yellowtoredW.keys()).includes(`${privatechatbgS.size}`)) {
         yellowtoredW.set(`${reactP}`, yellowtoredW.size & reactP.length);
      }
          let componentregistryX = 1;
          let nendG = String.fromCharCode(108,97,115,116,110,111,100,101,0);
         reactP += "1";
         componentregistryX -= 2;
         nendG += "1";
         reactP = `${reactP.length * privatechatbgS.size}`;
      for (let t = 0; t < 1; t++) {
         reactP = `${privatechatbgS.size}`;
      }
      while (5 <= (5 | reactP.length)) {
         reactP += `${3 << (Math.min(2, Math.abs(privatechatbgS.size)))}`;
         break;
      }
          let homeo = String.fromCharCode(97,100,100,101,114,0);
          let lines = String.fromCharCode(100,95,51,95,113,115,118,118,112,112,0);
         privatechatbgS = new Map([[`${privatechatbgS.size}`, 1 - privatechatbgS.size]]);
         homeo = `${homeo.length / (Math.max(1, 9))}`;
         lines = `${homeo.length}`;
      uploadR = new Map([[internetq, parseInt(`${configr}`) << (Math.min(internetq.length, 5))]]);
       let refreshH = String.fromCharCode(113,101,120,112,0);
       let footballfieldt: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,108,97,99,101,100,0),true ], [String.fromCharCode(101,120,116,101,114,110,97,108,108,121,0),true ]]);
         footballfieldt = new Map([[`${footballfieldt.size}`, (String.fromCharCode(108,0) == refreshH ? refreshH.length : footballfieldt.size)]]);
          let librrc_ = 2.0;
          let humidityQ = String.fromCharCode(104,105,103,104,101,115,116,0);
         footballfieldt.set(`${refreshH}`, refreshH.length);
         librrc_ -= parseFloat(`${parseInt(`${librrc_}`) & 1}`);
         humidityQ = `${(humidityQ == String.fromCharCode(109,0) ? humidityQ.length : parseInt(`${librrc_}`))}`;
         footballfieldt = new Map([[`${footballfieldt.size}`, 1 * footballfieldt.size]]);
         refreshH = `${(refreshH == String.fromCharCode(108,0) ? footballfieldt.size : refreshH.length)}`;
      if ((footballfieldt.size % (Math.max(3, refreshH.length))) == 2 && 2 == (footballfieldt.size % (Math.max(refreshH.length, 3)))) {
         refreshH = "1";
      }
          let videovard = String.fromCharCode(97,116,116,101,109,112,116,101,100,0);
          let loginX = 2;
          let largeS = 3.0;
         footballfieldt.set(videovard, (String.fromCharCode(74,0) == videovard ? loginX : videovard.length));
         loginX >>= Math.min(Math.abs(parseInt(`${largeS}`)), 3);
      videojsa /= Math.max(3, parseFloat(`${parseInt(`${desc6}`) * 3}`));
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KYellowanimationliveLibturbomodulejsijni,
        });

   if (uploadR.size < 1 || 2 < (uploadR.size << (Math.min(Math.abs(1), 2)))) {
       let xvodB = 1.0;
       let dycreatorE = String.fromCharCode(109,109,97,112,95,50,95,54,52,0);
      if (2.81 < (xvodB - 3.11) && 2.9 < (xvodB - 3.11)) {
         dycreatorE += `${dycreatorE.length}`;
      }
      let analyticN = xvodB <= 7591778.0;
      do {
         xvodB /= Math.max(2, parseFloat(`${parseInt(`${xvodB}`)}`));
         if (analyticN) {
            break;
         }
      } while (((dycreatorE.length % 1) <= 2) && analyticN);
         xvodB -= parseFloat(`${dycreatorE.length}`);
          let hook8: Array<any> = [String.fromCharCode(97,114,114,97,121,115,105,122,101,0), String.fromCharCode(101,110,99,114,121,112,116,105,110,103,0)];
         xvodB /= Math.max(parseFloat(`${parseInt(`${xvodB}`) & 1}`), 4);
         hook8.push(hook8.length % 1);
      if (3.44 == (parseFloat(`${dycreatorE.length}`) * xvodB) || 3 == (dycreatorE.length - 2)) {
         xvodB -= (parseFloat(`${String.fromCharCode(75,0) == dycreatorE ? dycreatorE.length : parseInt(`${xvodB}`)}`));
      }
      let bootsplashy = String.fromCharCode(101,119,113,120,117,114,115,112,0) == dycreatorE;
      do {
         dycreatorE = `${dycreatorE.length}`;
         if (bootsplashy) {
            break;
         }
      } while (bootsplashy && (xvodB < 5.78));
      eact8 = userT.length > 22 && 22 > dycreatorE.length;
   }
      internetq += `${(parseInt(`${desc6}`) << (Math.min(3, Math.abs((footballtrophyD ? 4 : 3)))))}`;
      inactiveI = 13 >= uploadR.size && String.fromCharCode(48,0) == userT;
   for (let q = 0; q < 2; q++) {
      userT += "2";
   }
   for (let r = 0; r < 3; r++) {
       let appsQ: Array<any> = [885, 900, 446];
      while (2 >= appsQ.length) {
         appsQ = [appsQ.length % (Math.max(appsQ.length, 5))];
         break;
      }
         appsQ.push(2 & appsQ.length);
         appsQ = [appsQ.length];
      internetq += `${(parseInt(`${libreactnativeblobS}`) - (footballtrophyD ? 5 : 4))}`;
   }
      footballtrophyD = 15.80 < (videojsa + configr);
   for (let t = 0; t < 1; t++) {
       let awayl = 1;
       let homeactivex = 1.0;
       let videocommonz: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,115,0),462], [String.fromCharCode(97,114,114,111,119,0),869]]);
          let foundr: Map<any, any> = new Map([[String.fromCharCode(117,95,50,51,0),578], [String.fromCharCode(114,111,117,112,0),90]]);
         videocommonz.set(`${foundr.size}`, videocommonz.size >> (Math.min(1, Math.abs(foundr.size))));
         homeactivex -= parseFloat(`${parseInt(`${homeactivex}`) & 2}`);
      while (homeactivex < parseFloat(`${videocommonz.size}`)) {
          let emojiU: Array<any> = [739, 490];
          let gesturep = 0.0;
          let traminiC = 4;
         homeactivex /= Math.max(5, parseFloat(`${3 % (Math.max(2, traminiC))}`));
         emojiU = [parseInt(`${gesturep}`) & 1];
         gesturep *= parseFloat(`${parseInt(`${gesturep}`)}`);
         traminiC *= 2 / (Math.max(parseInt(`${gesturep}`), 1));
         break;
      }
      if ((awayl + parseInt(`${homeactivex}`)) < 3 || 5 < (3 - awayl)) {
         homeactivex /= Math.max(parseFloat(`${awayl}`), 3);
      }
      while (1.49 == (parseFloat(`${awayl}`) / (Math.max(5, homeactivex))) || 5.56 == (homeactivex / (Math.max(1.49, 10)))) {
          let telemetrym = 4;
          let pushZ = String.fromCharCode(115,117,98,112,105,120,101,108,0);
          let neonW = String.fromCharCode(106,95,51,57,0);
          let nativeexU = 1;
          let securityy = 0.0;
         homeactivex /= Math.max(4, parseFloat(`${telemetrym - neonW.length}`));
         telemetrym %= Math.max(pushZ.length ^ 1, 1);
         pushZ += `${3 ^ parseInt(`${securityy}`)}`;
         neonW += "1";
         nativeexU >>= Math.min(3, Math.abs(nativeexU));
         securityy -= parseFloat(`${3 ^ parseInt(`${securityy}`)}`);
         break;
      }
      let i_titlex = homeactivex <= 7092925.0;
      do {
          let holderw = String.fromCharCode(109,111,110,111,116,111,110,121,0);
          let chat2: Array<any> = [905, 659];
         homeactivex -= parseFloat(`${3 << (Math.min(4, Math.abs(awayl)))}`);
         holderw += `${chat2.length}`;
         chat2 = [chat2.length];
         if (i_titlex) {
            break;
         }
      } while (i_titlex && (3 < (parseInt(`${homeactivex}`) * videocommonz.size) && 5 < (videocommonz.size >> (Math.min(Math.abs(3), 2)))));
          let suggestionz = true;
          let acceptedo = String.fromCharCode(112,117,98,108,105,115,104,0);
          let x_hash9: Map<any, any> = new Map([[String.fromCharCode(97,110,103,114,121,95,101,95,49,52,0),823], [String.fromCharCode(117,110,115,101,108,101,99,116,101,100,0),257], [String.fromCharCode(109,107,118,114,101,97,100,101,114,0),533]]);
         awayl |= x_hash9.size;
         suggestionz = acceptedo.length < 29;
         acceptedo = `${(acceptedo.length ^ (suggestionz ? 4 : 1))}`;
         x_hash9.set(`${suggestionz}`, 1);
          let main_i3 = String.fromCharCode(108,95,51,55,95,118,100,114,97,119,97,98,108,101,0);
          let shirtQ = String.fromCharCode(116,114,116,97,98,108,101,0);
         homeactivex *= parseFloat(`${3}`);
         main_i3 += `${shirtQ.length - 1}`;
         shirtQ = "1";
         videocommonz = new Map([[`${videocommonz.size}`, 1 + videocommonz.size]]);
      uploadR = new Map([[`${footballtrophyD}`, 2 << (Math.min(Math.abs(parseInt(`${layoutH}`)), 4))]]);
   }

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KPressureAwayteamfield);
    }

    static searchResultClicksAnalytics = () => {
       let libavutilL = 1.0;
    let chart7 = String.fromCharCode(118,112,114,105,110,116,102,0);
    let lighth = 2;
    let submitZ = 3;
    let with__tV: Map<any, any> = new Map([[String.fromCharCode(116,109,112,111,0),279], [String.fromCharCode(115,112,108,97,115,104,0),805]]);
    let humidityJ = String.fromCharCode(99,114,101,97,116,111,114,0);
    let moref = false;
    let active3: Array<any> = [String.fromCharCode(114,111,116,114,0), String.fromCharCode(115,121,110,116,104,101,115,105,122,101,0), String.fromCharCode(106,115,111,110,114,112,99,0)];
    let humidityu = 2.0;
      submitZ += with__tV.size + 3;
      with__tV = new Map([[`${with__tV.size}`, with__tV.size]]);
   for (let o = 0; o < 2; o++) {
      lighth /= Math.max(5, (String.fromCharCode(121,0) == chart7 ? lighth : chart7.length));
   }
      humidityJ += `${chart7.length + 2}`;

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KMbridge, {});

   if (moref) {
      chart7 = `${(1 ^ (moref ? 4 : 5))}`;
   }
   let predictiondefaultY = 5505949.0 <= libavutilL;
   do {
      libavutilL -= parseFloat(`${parseInt(`${libavutilL}`) << (Math.min(3, Math.abs(3)))}`);
      if (predictiondefaultY) {
         break;
      }
   } while ((4 == (with__tV.size + parseInt(`${libavutilL}`))) && predictiondefaultY);
      moref = humidityJ.length <= 59;
   let helperm = humidityJ == String.fromCharCode(102,116,97,57,105,104,111,0);
   do {
      humidityJ = `${chart7.length + parseInt(`${libavutilL}`)}`;
      if (helperm) {
         break;
      }
   } while (helperm && ((with__tV.size | humidityJ.length) > 2 && 2 > (with__tV.size | humidityJ.length)));
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KYellowanimationliveLibturbomodulejsijni,
        });

      chart7 = `${with__tV.size % (Math.max(1, chart7.length))}`;
   while (!chart7.endsWith(`${moref}`)) {
      chart7 = `${submitZ + 3}`;
      break;
   }
       let profilepic9 = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,0);
          let profilepicz = String.fromCharCode(114,101,99,108,97,105,109,0);
          let downloading6 = String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,0);
         profilepic9 += `${downloading6.length % (Math.max(9, profilepic9.length))}`;
         profilepicz = "2";
         downloading6 = `${profilepicz.length}`;
          let listz = String.fromCharCode(106,112,101,103,100,119,116,0);
         profilepic9 = `${(listz == String.fromCharCode(120,0) ? profilepic9.length : listz.length)}`;
      let sideW = String.fromCharCode(102,108,100,104,97,114,49,0) == profilepic9;
      do {
          let animationsu: Map<any, any> = new Map([[String.fromCharCode(99,111,114,101,0),242], [String.fromCharCode(98,114,97,110,99,104,0),26]]);
          let graphicsQ = 0;
         profilepic9 += `${graphicsQ}`;
         animationsu = new Map([[`${animationsu.size}`, 2]]);
         graphicsQ >>= Math.min(Math.abs(animationsu.size), 1);
         if (sideW) {
            break;
         }
      } while (sideW && (5 <= profilepic9.length));
      libavutilL *= parseFloat(`${1 - chart7.length}`);
      active3.push((String.fromCharCode(66,0) == chart7 ? active3.length : chart7.length));

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KMbridge);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KTelemetry, {
            'keyword': keyword,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KMime,
            params: {
                desc_1: keyword,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KTelemetry);
    }


    
    static catalogViewsAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KDialog, {
            'category_id': category_id,
            'category_name': category_name,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: BDSLibreactnativejniBlacklist.KContextLibreanimated,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KDialog);
    }

    static catalogClicksAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KFrameNend, {
            'category_id': category_id,
            'category_name': category_name,
        });
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KContextLibreanimated,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KFrameNend);
    }


    
    static playsViewsAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = KReactnativeultimatelistviewDanger.KCatalogImage;

        if (isXmode) {
            eventId = KReactnativeultimatelistviewDanger.KFootballtrophyLibreanimated;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: isXmode ? BDSLibreactnativejniBlacklist.KStats : BDSLibreactnativejniBlacklist.KBallNotificationfillempty,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = KReactnativeultimatelistviewDanger.KSentryTramini;

        if (isXmode) {
            eventId = KReactnativeultimatelistviewDanger.KFloating;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: isXmode ? BDSLibreactnativejniBlacklist.KRuntimeConfirmation : BDSLibreactnativejniBlacklist.KRender,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsShareClicksAnalytics = () => {
       let iconsharefriends_ = 4.0;
    let clearP = String.fromCharCode(112,114,111,112,97,103,97,116,105,111,110,0);
    let audienceo = 3.0;
    let graphicsg: Map<any, any> = new Map([[String.fromCharCode(109,111,99,107,101,100,0),String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0)], [String.fromCharCode(115,101,116,116,101,114,0),String.fromCharCode(115,116,117,110,0)]]);
    let libtobn = 1.0;
    let placeholderG = String.fromCharCode(98,105,110,107,97,117,100,105,111,0);
    let relatedQ = 5.0;
    let streamingF = String.fromCharCode(115,116,101,114,101,111,100,0);
    let sortm = String.fromCharCode(101,120,101,99,117,116,101,0);
    let fullt = 2;
    let networkU = String.fromCharCode(106,99,109,97,115,116,101,114,0);
    let searchbar3 = 1.0;
    let emojiR = true;
      libtobn *= parseInt(`${searchbar3}`) | parseInt(`${iconsharefriends_}`);
      fullt |= fullt + 2;
      relatedQ *= parseInt(`${iconsharefriends_}`);
   while (3 >= (parseInt(`${searchbar3}`) / (Math.max(streamingF.length, 10))) && 3 >= (streamingF.length / (Math.max(7, parseInt(`${searchbar3}`))))) {
      searchbar3 += parseFloat(`${parseInt(`${relatedQ}`) % 1}`);
      break;
   }
   if (5 >= (graphicsg.size * placeholderG.length) || (placeholderG.length * 5) >= 2) {
       let libfollyw = String.fromCharCode(120,95,51,48,95,109,97,116,114,105,120,102,0);
         libfollyw = `${(String.fromCharCode(86,0) == libfollyw ? libfollyw.length : libfollyw.length)}`;
      while (3 > libfollyw.length) {
          let baiduC = 3.0;
          let defaultteamj = 2.0;
          let goallogoe = true;
          let libjsijniprofilerO = 4;
         libfollyw = `${((goallogoe ? 2 : 2))}`;
         baiduC /= Math.max(5, 2 / (Math.max(10, libjsijniprofilerO)));
         defaultteamj -= 2;
         goallogoe = 91 > (libjsijniprofilerO - defaultteamj);
         break;
      }
      if (libfollyw != libfollyw) {
         libfollyw += `${3 + libfollyw.length}`;
      }
      placeholderG += `${fullt / (Math.max(libfollyw.length, 8))}`;
   }
      networkU = `${1 ^ parseInt(`${iconsharefriends_}`)}`;
      searchbar3 -= parseFloat(`${1}`);
       let topicM = String.fromCharCode(109,97,103,110,105,116,117,100,101,0);
       let launchn: Array<any> = [978, 440, 864];
          let predictionactivet: Array<any> = [560, 73];
         topicM = `${launchn.length >> (Math.min(Math.abs(1), 2))}`;
         predictionactivet = [2];
      for (let m = 0; m < 2; m++) {
          let muteda = String.fromCharCode(99,114,111,115,115,102,97,100,101,95,56,95,54,50,0);
          let spece: Array<any> = [995, 518];
          let release_xZ: Map<any, any> = new Map([[String.fromCharCode(118,116,101,115,116,0),true ], [String.fromCharCode(101,110,99,111,100,105,110,103,0),false ], [String.fromCharCode(118,114,108,101,0),true ]]);
          let libbufferT = String.fromCharCode(105,114,114,101,108,101,118,97,110,116,0);
          let searchbar6 = 3;
         launchn = [spece.length];
         muteda += `${(libbufferT == String.fromCharCode(105,0) ? libbufferT.length : muteda.length)}`;
         spece.push(3);
         release_xZ = new Map([[muteda, searchbar6 / (Math.max(9, muteda.length))]]);
         searchbar6 |= libbufferT.length + muteda.length;
      }
      if ((topicM.length + 2) == 4 && 2 == (topicM.length + launchn.length)) {
         topicM = `${(topicM == String.fromCharCode(101,0) ? topicM.length : launchn.length)}`;
      }
         launchn.push(topicM.length | 3);
      let nnewinterstitialT = 9234336 >= launchn.length;
      do {
         launchn.push(1);
         if (nnewinterstitialT) {
            break;
         }
      } while ((1 >= (topicM.length | launchn.length) || 3 >= (1 | topicM.length)) && nnewinterstitialT);
       let upload5: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,101,114,95,56,95,53,49,0),String.fromCharCode(101,99,100,115,97,0)], [String.fromCharCode(115,99,111,114,101,115,0),String.fromCharCode(102,111,114,103,101,116,0)]]);
      networkU += `${fullt >> (Math.min(3, Math.abs(2)))}`;

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KMerger, {});

   while (graphicsg.get(`${searchbar3}`) != null) {
       let userb: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,102,114,97,109,101,0),String.fromCharCode(101,115,101,110,100,0)], [String.fromCharCode(101,99,117,114,115,105,118,101,0),String.fromCharCode(109,114,122,0)], [String.fromCharCode(99,108,117,115,116,101,114,115,0),String.fromCharCode(120,98,105,110,0)]]);
       let statsc = true;
      for (let r = 0; r < 1; r++) {
          let questF = String.fromCharCode(115,116,114,109,0);
          let dangerX = 4;
          let hoverz = 0;
         statsc = questF.startsWith(`${dangerX}`);
         questF = "1";
         dangerX *= hoverz;
      }
      if (2 < userb.size || (2 * userb.size) < 3) {
         statsc = !statsc;
      }
         statsc = null != userb.get(`${statsc}`);
          let matchdetailbgj = String.fromCharCode(109,95,51,52,95,101,97,114,108,105,101,115,116,0);
          let register_oC = true;
          let libcrashsdkc: Array<any> = [String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,95,107,95,49,52,0), String.fromCharCode(116,97,98,108,101,99,0)];
         statsc = (matchdetailbgj.length * userb.size) > 68;
         matchdetailbgj += `${libcrashsdkc.length}`;
         register_oC = libcrashsdkc.includes(register_oC);
      if (!statsc) {
          let libflippert = String.fromCharCode(112,114,101,99,105,115,105,111,110,0);
          let turndownY = 3;
          let hometeamfieldx = String.fromCharCode(115,104,111,116,0);
          let acceptedA = String.fromCharCode(119,101,114,101,0);
         userb.set(libflippert, 3);
         libflippert += `${(String.fromCharCode(122,0) == acceptedA ? acceptedA.length : turndownY)}`;
         turndownY *= hometeamfieldx.length;
         hometeamfieldx += `${hometeamfieldx.length | 3}`;
      }
         statsc = userb.size == 47;
      graphicsg.set(`${libtobn}`, parseInt(`${libtobn}`) | 1);
      break;
   }
   if (!sortm.endsWith(`${graphicsg.size}`)) {
      graphicsg = new Map([[`${relatedQ}`, 2]]);
   }
      streamingF = `${parseInt(`${searchbar3}`)}`;
      graphicsg.set(clearP, 1);
      placeholderG += `${sortm.length}`;
   let minimizeu = iconsharefriends_ <= 8605568.0;
   do {
      iconsharefriends_ /= Math.max(parseInt(`${libtobn}`), 1);
      if (minimizeu) {
         break;
      }
   } while (minimizeu && (3.70 > iconsharefriends_));
       let subinT = String.fromCharCode(97,112,112,101,110,100,99,104,97,114,0);
       let fullm = 3.0;
          let episodeF = String.fromCharCode(101,95,57,53,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0);
          let sentryU = String.fromCharCode(116,111,114,99,104,0);
         subinT += `${(String.fromCharCode(57,0) == subinT ? subinT.length : parseInt(`${fullm}`))}`;
         episodeF += `${sentryU.length + episodeF.length}`;
         sentryU = `${episodeF.length >> (Math.min(sentryU.length, 3))}`;
         fullm *= parseFloat(`${2 / (Math.max(4, parseInt(`${fullm}`)))}`);
      let sentryu = fullm >= 5760520.0;
      do {
          let gifgoalbgz = true;
          let specf = String.fromCharCode(102,117,116,117,114,101,0);
          let activeO: Map<any, any> = new Map([[String.fromCharCode(120,95,53,50,0),872], [String.fromCharCode(109,118,112,114,101,100,95,113,95,51,50,0),529], [String.fromCharCode(115,97,105,111,0),954]]);
          let projectp: Array<any> = [616, 236];
         fullm *= parseFloat(`${activeO.size}`);
         gifgoalbgz = specf.length == 30;
         specf = `${specf.length}`;
         activeO = new Map([[`${projectp.length}`, (specf == String.fromCharCode(95,0) ? projectp.length : specf.length)]]);
         if (sentryu) {
            break;
         }
      } while ((1.63 > (fullm + 1.14)) && sentryu);
      if (4.97 == (fullm / (Math.max(parseFloat(`${subinT.length}`), 7)))) {
          let long_41l: Array<any> = [964, 150];
          let uploado = String.fromCharCode(116,114,105,0);
          let whiteD = 3.0;
          let j_imagez = String.fromCharCode(99,101,108,116,0);
          let libflipper4 = String.fromCharCode(115,101,97,114,99,104,105,110,103,0);
         subinT += "2";
         long_41l.push(2);
         uploado = `${(j_imagez == String.fromCharCode(100,0) ? parseInt(`${whiteD}`) : j_imagez.length)}`;
         whiteD += uploado.length | j_imagez.length;
         libflipper4 = `${j_imagez.length * 2}`;
      }
         subinT += "2";
      if ((3 >> (Math.min(3, subinT.length))) < 5 || 5.39 < (fullm + 4.97)) {
          let selectionV: Map<any, any> = new Map([[String.fromCharCode(97,97,97,97,0),String.fromCharCode(115,99,99,111,110,102,105,103,0)], [String.fromCharCode(104,105,103,104,108,105,103,104,116,0),String.fromCharCode(100,118,98,115,117,98,0)], [String.fromCharCode(109,105,110,117,116,101,115,0),String.fromCharCode(100,101,115,116,114,117,99,116,111,114,0)]]);
          let cornerN = false;
          let time_jx = String.fromCharCode(114,101,115,111,108,118,101,100,95,98,95,53,57,0);
         subinT = `${((cornerN ? 4 : 4) >> (Math.min(Math.abs(1), 3)))}`;
         selectionV.set(`${time_jx}`, selectionV.size + time_jx.length);
         cornerN = (time_jx.length >> (Math.min(1, Math.abs(selectionV.size)))) > 1;
      }
      audienceo += parseFloat(`${parseInt(`${relatedQ}`) / (Math.max(placeholderG.length, 5))}`);
       let smallorangemano = 2;
       let crossv = String.fromCharCode(105,109,112,111,114,116,101,100,0);
       let areal = 1;
         crossv = `${areal}`;
         crossv = `${crossv.length}`;
         smallorangemano >>= Math.min(1, Math.abs(areal << (Math.min(crossv.length, 4))));
         areal %= Math.max(1, smallorangemano);
         smallorangemano |= areal << (Math.min(Math.abs(2), 1));
      while (areal == smallorangemano) {
         areal <<= Math.min(Math.abs((crossv == String.fromCharCode(48,0) ? crossv.length : smallorangemano)), 1);
         break;
      }
      if (1 >= (5 - crossv.length) || 3 >= (5 - smallorangemano)) {
         crossv += `${crossv.length - areal}`;
      }
         crossv = `${areal}`;
          let iconwechatw = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,115,0);
          let embedl = 2;
          let libreactm = String.fromCharCode(118,97,114,108,101,110,0);
         areal <<= Math.min(iconwechatw.length, 1);
         iconwechatw += `${libreactm.length + 3}`;
         embedl += libreactm.length % 1;
      clearP += "1";
        mayi_Foreground.onEvent({
            type: 'click',
            title: BDSLibreactnativejniBlacklist.KSpinnerRoot,
        });

      streamingF = `${3 >> (Math.min(1, networkU.length))}`;
       let liblogger_ = String.fromCharCode(101,115,116,97,98,108,105,115,104,0);
       let modelso: Map<any, any> = new Map([[String.fromCharCode(101,110,100,115,0),5], [String.fromCharCode(115,116,101,114,101,111,0),486]]);
          let sinah = 5.0;
          let expiredR = 3;
         liblogger_ += `${(String.fromCharCode(57,0) == liblogger_ ? liblogger_.length : expiredR)}`;
         sinah += parseFloat(`${parseInt(`${sinah}`) + 2}`);
         expiredR <<= Math.min(Math.abs(1), 4);
         liblogger_ = `${liblogger_.length}`;
         liblogger_ += "2";
      let libbufferi = liblogger_.length <= 9391617;
      do {
         liblogger_ += `${modelso.size % (Math.max(liblogger_.length, 4))}`;
         if (libbufferi) {
            break;
         }
      } while ((liblogger_.includes(`${modelso.size}`)) && libbufferi);
       let danger9 = String.fromCharCode(103,114,97,98,0);
       let flipperJ = 0.0;
       let gesture6 = 5.0;
      audienceo /= Math.max(5, parseFloat(`${fullt & 3}`));
   while ((audienceo + 4) == 4.44) {
      searchbar3 *= parseFloat(`${placeholderG.length}`);
      break;
   }
   for (let l = 0; l < 3; l++) {
      libtobn /= Math.max(parseInt(`${relatedQ}`), 2);
   }
   if (3 >= (graphicsg.size / 2) && (searchbar3 + parseFloat(`${graphicsg.size}`)) >= 5.84) {
      graphicsg = new Map([[networkU, networkU.length + 3]]);
   }
   if (iconsharefriends_ > audienceo) {
      audienceo += parseFloat(`${1 << (Math.min(1, clearP.length))}`);
   }
   if (sortm != streamingF) {
      streamingF += `${2 << (Math.min(4, clearP.length))}`;
   }
       let shielddoneA: Map<any, any> = new Map([[String.fromCharCode(111,99,116,101,116,115,0),639], [String.fromCharCode(98,97,99,107,101,100,0),919]]);
          let gemfileT = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,0);
          let whistleorangeA: Array<any> = [303, 234];
          let stringsk: Array<any> = [205, 869];
         shielddoneA.set(gemfileT, gemfileT.length);
         whistleorangeA.push(whistleorangeA.length);
         stringsk.push(1);
      while (Array.from(shielddoneA.keys()).includes(`${shielddoneA.size}`)) {
         shielddoneA.set(`${shielddoneA.size}`, shielddoneA.size);
         break;
      }
         shielddoneA.set(`${shielddoneA.size}`, shielddoneA.size / 3);
      libtobn -= parseInt(`${searchbar3}`);

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KMerger);
    }

    static playsAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title = KReactnativeultimatelistviewDanger.KNeon,
        ads_name,
    }: {
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    }) => {
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KNeon, {});
        mayi_Foreground.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KNeon);
    }

    static playsAdsClickAnalytics = ({
        url,
        ads_slot_id,
        ads_id,
        ads_title = KReactnativeultimatelistviewDanger.KNend,
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

        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KNend, params);
        mayi_Foreground.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: url ?? 'none',
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KNend);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KSinaGray, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KSinaGray);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KOrangeuparrowMounting, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        mayi_Foreground.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KOrangeuparrowMounting);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KNalyticsRoot, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        mayi_Foreground.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KNalyticsRoot);
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
        AnalyticsUtil.onEventWithMap(KReactnativeultimatelistviewDanger.KRuntime, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        mayi_Foreground.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', KReactnativeultimatelistviewDanger.KRuntime);
    }
}
