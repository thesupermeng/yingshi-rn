import AnalyticsUtil from './tt_config';
import { ttEditCollection } from './tt_analytic';

 
enum BControls {
    
    BBannerTeam = 'Home-views',
    BThailand = 'Home-clicks',
    BPlay = 'Home-Carousel_views',
    BInternet = 'Home-Carousel_clicks',
    BRewindType = 'Home-banner_views',
    BComponentBootsplash = 'Home-banner_clicks',

    
    BDownloadedEwarded = 'WatchAnytime-Views',
    BPenalty = 'WatchAnytime-video_view_times',
    BCountdown = 'WatchAnytime-X_views',
    BAreaBottom = 'WatchAnytime-X_video_view_times',
    BUpdate = 'WatchAnytime-playlist_clicks',
    BUnselectedWhite = 'WatchAnytime-video_clicks',
    BTextGoal = 'WatchAnytime-ads_views',
    BSuccessTarget = 'WatchAnytime-ads_clicks',

    
    BMini = 'Sport-views',
    BHongkongChina = 'Sport-clicks',
    BPredictionFiled = 'Sport-banner_views',
    BPointStep = 'Sport-banner_clicks',

    
    BBellGpay = 'SportDetails-views',
    BCombine = 'SportDetails-plays_times',
    BHoverClear = 'SportDetails-vip_popup_times',
    BSound = 'SportDetails-vip_clicks',

    
    BEmojiButton = 'Playlist-views',
    BUpload = 'Playlist-clicks',
    BMiddleware = 'Playlist-topics_views',
    BActions = 'Playlist-topics_clicks',

    
    BVignetteStyle = 'UserCenter-login_success_times',
    BActivityDebug = 'UserCenter-vip_login_success_times',
    BTick = 'UserCenter-pay_vip_views',
    BExpand = 'UserCenter-invites_vip_views',

    
    BPrivate = 'Search-result_views',
    BDanger = 'Search-result_clicks',
    BReward = 'Search-keywords',

    
    BCurrent = 'Catalog-views',
    BContainerThailand = 'Catalog-clicks',

    
    BEventOverlay = 'Play-views',
    BThumbnailLock = 'Play-plays_times',
    BTailVideocommon = 'Play-X_views',
    BMiddle = 'Play-X_plays_times',
    BTrophyAnalytics = 'Play-share_clicks',

    
    BSlider = 'Play-ads_views',
    BBallReact = 'Play-ads_clicks',

    
    BPosition = 'VideoPlayer-banner_views',
    BLang = 'VideoPlayer-banner_clicks',

    
    BNotificationMalaysia = 'Profile-banner_views',
    BTickedKick = 'Profile-banner_clicks',
}

enum FHFrameInterstitial {
    
    BAssistTumbnail = 'home_tab',

    
    BOverFrame = 'watchAnytime',
    BGiftDefault = 'watchAnytime_play_times',
    BAlbum = 'watchAnytime_view_video',
    BLaunch = 'watchAnytime_view_playlist',

    BHomeSetting = 'watchAnytime_x',
    BApplicationArrow = 'watchAnytime_x_play_times',

    
    BAbout = 'sport',
    BLogo = 'sportDetail',
    BAccepted = 'sportDetail_play_times',
    BIndexXvod = 'sportDetail_vip_popup',

    
    BUntick = 'playlist',
    BInjuryM = 'playlist_topics',

    
    BResult = 'userCenter_login_success_times',
    BCombined = 'userCenter_vip_login_success_times',
    BCheckbox = 'userCenter_view_vip',

    
    BWhite = 'search_keywords',
    BContainerTarget = 'search_result',

    
    BTumbnail = 'catalog',

    
    BComment = 'play',
    BGradle = 'play_plays_times',
    BSpec = 'Play_share',

    BMbjscommon = 'play_x',
    BWithReact = 'play_x_plays_times',
}

export default class tt_humidity_guide {
    static showLog: boolean = false;

    
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(BControls.BBannerTeam, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BAssistTumbnail,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BBannerTeam);
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(BControls.BThailand, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BAssistTumbnail,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BThailand);
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
        AnalyticsUtil.onEventWithMap(BControls.BPlay, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        ttEditCollection.onEvent({
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

        if (this.showLog) console.log('trigger event id:', BControls.BPlay);
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
        AnalyticsUtil.onEventWithMap(BControls.BInternet, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        ttEditCollection.onEvent({
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

        if (this.showLog) console.log('trigger event id:', BControls.BInternet);
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
        AnalyticsUtil.onEventWithMap(BControls.BRewindType, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        ttEditCollection.onEvent({
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

        if (this.showLog) console.log('trigger event id:', BControls.BRewindType);
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
        AnalyticsUtil.onEventWithMap(BControls.BComponentBootsplash, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        ttEditCollection.onEvent({
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

        if (this.showLog) console.log('trigger event id:', BControls.BComponentBootsplash);
    }

    
    static watchAnytimeViewsAnalytics = ({ isXmode = false }: { isXmode?: boolean } = { isXmode: false }) => {
        let evendId: string = BControls.BDownloadedEwarded;

        if (isXmode) {
            evendId = BControls.BCountdown;
        }

        AnalyticsUtil.onEventWithMap(evendId, {});
        ttEditCollection.onEvent({
            type: 'view',
            title: isXmode ? FHFrameInterstitial.BHomeSetting : FHFrameInterstitial.BOverFrame,
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: string = BControls.BPenalty;

        if (isXmode) {
            evendId = BControls.BAreaBottom;
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
        ttEditCollection.onEvent({
            type: 'view',
            title: isXmode ? FHFrameInterstitial.BApplicationArrow : FHFrameInterstitial.BGiftDefault,
            params: {
                desc_1: 'user.id:' + userId,
                
            }
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoClicksAnalytics = () => {
       let readn = String.fromCharCode(120,95,57,52,95,99,111,109,112,114,101,115,115,105,111,110,0);
    let headerP = 5.0;
    let controlss = 1;
    let stationsy = String.fromCharCode(122,95,53,48,95,109,97,116,99,104,101,115,0);
    let annerD: Array<any> = [621, 362];
    let default_fo3: Array<any> = [756, 829, 473];
    let foregroundZ: Map<any, any> = new Map([[String.fromCharCode(102,115,121,110,99,95,104,95,56,48,0),922], [String.fromCharCode(115,95,55,55,95,115,116,114,101,97,109,105,100,0),199], [String.fromCharCode(113,95,56,54,95,119,97,107,101,0),23]]);
    let buildG = String.fromCharCode(104,95,56,48,95,105,110,115,101,114,116,115,0);
    let videoH = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,51,95,52,52,0);
   let sportsw = stationsy == String.fromCharCode(53,121,122,109,0);
   do {
       let feedbackg = String.fromCharCode(97,108,97,98,97,115,116,101,114,95,109,95,50,49,0);
       let redirectK = true;
       let moonB = String.fromCharCode(101,109,111,116,105,99,111,110,95,52,95,56,48,0);
      for (let u = 0; u < 1; u++) {
          let annerh = 5.0;
          let stationsB: Array<any> = [145, 131, 193];
          let orientationT = String.fromCharCode(100,95,53,51,95,109,115,110,119,99,0);
          let contexte: Array<any> = [String.fromCharCode(98,110,100,101,99,95,49,95,49,48,0), String.fromCharCode(117,95,50,48,95,101,110,99,108,111,115,105,110,103,0)];
         moonB += `${contexte.length >> (Math.min(moonB.length, 4))}`;
         annerh *= parseFloat(`${parseInt(`${annerh}`) * 2}`);
         stationsB.push(2);
         orientationT = `${stationsB.length}`;
         contexte.push(parseInt(`${annerh}`) & stationsB.length);
      }
         feedbackg += `${((redirectK ? 1 : 3) * 1)}`;
      let styleu = redirectK ? !redirectK : redirectK;
      do {
         redirectK = moonB.length >= 17;
         if (styleu) {
            break;
         }
      } while ((!feedbackg.endsWith(`${redirectK}`)) && styleu);
       let type_tpw = true;
         feedbackg += `${((type_tpw ? 5 : 3) * feedbackg.length)}`;
         redirectK = moonB.includes(`${type_tpw}`);
          let mintegralj = String.fromCharCode(120,95,57,55,95,116,101,115,115,0);
          let reactt = String.fromCharCode(122,95,50,51,95,97,110,109,114,0);
         redirectK = !redirectK && moonB.length == 60;
         mintegralj = `${(reactt == String.fromCharCode(87,0) ? mintegralj.length : reactt.length)}`;
      while (moonB.length > 1) {
         moonB += `${((type_tpw ? 5 : 4) % (Math.max(3, moonB.length)))}`;
         break;
      }
         moonB += `${feedbackg.length}`;
      stationsy = `${stationsy.length}`;
      if (sportsw) {
         break;
      }
   } while (sportsw && (stationsy.startsWith(`${default_fo3.length}`)));
      controlss /= Math.max(4, stationsy.length - foregroundZ.size);
      foregroundZ.set(readn, default_fo3.length | 1);
       let feedback7 = String.fromCharCode(112,95,49,53,95,118,111,116,101,0);
       let heart9: Array<any> = [998, 51];
       let screenf = 1.0;
      for (let c = 0; c < 1; c++) {
         screenf += parseInt(`${screenf}`) & 2;
      }
         feedback7 += `${(feedback7 == String.fromCharCode(98,0) ? heart9.length : feedback7.length)}`;
          let emptyz = String.fromCharCode(110,111,101,120,112,95,108,95,49,48,0);
         screenf *= feedback7.length;
         emptyz = `${(String.fromCharCode(102,0) == emptyz ? emptyz.length : emptyz.length)}`;
         feedback7 += `${feedback7.length | heart9.length}`;
         screenf *= 1;
      while ((heart9.length << (Math.min(Math.abs(3), 2))) >= 4) {
         heart9.push(parseInt(`${screenf}`));
         break;
      }
      if (1 <= (4 - heart9.length) && 4 <= (feedback7.length - 4)) {
          let configureA = 2.0;
         heart9.push((String.fromCharCode(120,0) == feedback7 ? heart9.length : feedback7.length));
         configureA *= parseFloat(`${parseInt(`${configureA}`)}`);
      }
       let goal7 = 4.0;
       let guide8 = 3.0;
       let adultU = String.fromCharCode(111,95,54,52,95,97,100,106,117,115,109,101,110,116,115,0);
      foregroundZ = new Map([[`${default_fo3.length}`, default_fo3.length]]);
   let gradlewt = readn.length <= 7208217;
   do {
      readn = `${foregroundZ.size * 1}`;
      if (gradlewt) {
         break;
      }
   } while (gradlewt && (readn.length <= parseInt(`${headerP}`)));

        AnalyticsUtil.onEventWithMap(BControls.BUnselectedWhite, {});

       let downloading9 = String.fromCharCode(116,95,52,48,95,101,113,117,105,118,97,108,101,110,116,0);
       let related6 = String.fromCharCode(100,101,109,117,120,101,114,95,112,95,57,49,0);
         related6 += `${related6.length & downloading9.length}`;
       let friendsU: Map<any, any> = new Map([[String.fromCharCode(121,95,49,54,95,101,120,112,108,97,105,110,0),false ], [String.fromCharCode(97,95,53,53,95,114,101,115,101,116,0),false ], [String.fromCharCode(111,95,54,48,0),true ]]);
       let bufferZ = 0.0;
      if (friendsU.get(`${bufferZ}`) == null) {
         friendsU.set(related6, 2);
      }
      for (let k = 0; k < 2; k++) {
         bufferZ -= 2 & downloading9.length;
      }
         friendsU.set(`${bufferZ}`, 3);
      headerP /= Math.max(parseFloat(`${default_fo3.length / (Math.max(4, foregroundZ.size))}`), 5);
   let signinupN = readn == String.fromCharCode(120,52,95,95,100,111,0);
   do {
      readn += `${parseInt(`${headerP}`)}`;
      if (signinupN) {
         break;
      }
   } while (signinupN && (4 <= (readn.length + annerD.length)));
   let modelsA = foregroundZ.size <= 6916341;
   do {
      foregroundZ.set(`${annerD.length}`, annerD.length * foregroundZ.size);
      if (modelsA) {
         break;
      }
   } while (modelsA && ((default_fo3.length ^ foregroundZ.size) >= 2 && (foregroundZ.size ^ default_fo3.length) >= 2));
   let shirti = readn == String.fromCharCode(55,107,53,111,49,97,111,95,105,113,0);
   do {
      readn += `${controlss}`;
      if (shirti) {
         break;
      }
   } while (((readn.length ^ 5) <= 5 && (default_fo3.length ^ 5) <= 5) && shirti);
      readn += `${parseInt(`${headerP}`) << (Math.min(stationsy.length, 2))}`;
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BAlbum,
        });

       let playc = 2.0;
         playc -= parseFloat(`${1 + parseInt(`${playc}`)}`);
       let langkeyN = false;
      for (let f = 0; f < 3; f++) {
         playc *= (parseFloat(`${parseInt(`${playc}`) - (langkeyN ? 4 : 2)}`));
      }
      stationsy += `${default_fo3.length}`;
   if (annerD.includes(headerP)) {
       let smallD: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,115,95,52,95,52,48,0),false ], [String.fromCharCode(114,95,56,57,95,117,110,109,117,116,101,0),false ]]);
       let thailandr = 3.0;
      while (smallD.get(`${thailandr}`) == null) {
         thailandr /= Math.max(3, 4);
         break;
      }
       let sideV = String.fromCharCode(112,117,110,99,104,95,116,95,53,48,0);
       let soundM = String.fromCharCode(109,111,99,107,105,110,103,95,108,95,57,51,0);
      for (let g = 0; g < 3; g++) {
         sideV = "2";
      }
          let strh = String.fromCharCode(100,105,115,116,97,110,99,101,95,105,95,49,55,0);
          let traminil = String.fromCharCode(112,100,102,95,106,95,53,56,0);
         thailandr += 3 ^ soundM.length;
         strh += "2";
         traminil += "1";
      let miniW = 6682759.0 <= thailandr;
      do {
          let scheduleZ = String.fromCharCode(118,105,116,99,0);
          let listf = 0.0;
          let playercommonN = 4.0;
          let configured: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,111,115,101,95,57,95,50,49,0),914], [String.fromCharCode(100,95,50,54,95,99,111,101,102,102,105,99,105,101,110,116,115,0),727], [String.fromCharCode(100,101,112,95,105,95,53,51,0),531]]);
         thailandr -= scheduleZ.length & 1;
         scheduleZ += `${parseInt(`${listf}`)}`;
         playercommonN /= Math.max(1, 1);
         configured.set(`${playercommonN}`, 3 - parseInt(`${playercommonN}`));
         if (miniW) {
            break;
         }
      } while (miniW && (sideV.length >= 1));
         soundM += `${soundM.length - sideV.length}`;
      annerD = [annerD.length];
   }
      annerD.push(2);
   if ((foregroundZ.size >> (Math.min(5, Math.abs(controlss)))) > 3) {
      foregroundZ.set(buildG, buildG.length << (Math.min(1, Math.abs(parseInt(`${headerP}`)))));
   }
   if (Array.from(foregroundZ.values()).includes(headerP)) {
      foregroundZ = new Map([[`${headerP}`, (String.fromCharCode(81,0) == readn ? parseInt(`${headerP}`) : readn.length)]]);
   }

        if (this.showLog) console.log('trigger event id:', BControls.BUnselectedWhite);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
       let usernameZ = String.fromCharCode(101,95,49,54,95,100,105,103,101,115,116,98,121,110,97,109,101,0);
    let mutedD = String.fromCharCode(120,95,55,56,95,109,102,114,97,0);
    let condensed0 = String.fromCharCode(114,101,99,118,102,114,111,109,95,54,95,53,57,0);
    let condensedF = String.fromCharCode(103,95,52,48,95,114,101,98,117,105,108,100,0);
    let heart4 = String.fromCharCode(97,95,49,50,95,97,118,105,103,97,116,105,111,110,0);
    let mbridge2 = 0;
    let e_centere: Array<any> = [867, 282, 614];
    let buildI = 1.0;
    let checkboxs = false;
    let currentJ = false;
    let zhuboU = String.fromCharCode(113,117,97,110,116,105,122,101,0);
    let sourceT = String.fromCharCode(103,114,97,99,101,95,121,95,54,48,0);
    let reminderN = String.fromCharCode(109,95,54,55,95,115,105,122,101,114,0);
    let lineU = 5.0;
      condensedF += `${((currentJ ? 5 : 2) ^ mutedD.length)}`;
   let resendi = mutedD == String.fromCharCode(101,102,57,0);
   do {
      mutedD += `${condensedF.length}`;
      if (resendi) {
         break;
      }
   } while ((5 <= (1 << (Math.min(3, mutedD.length)))) && resendi);
   if (1 <= (heart4.length ^ 3) && 1.63 <= (5.59 - buildI)) {
       let klevinZ: Map<any, any> = new Map([[String.fromCharCode(101,114,97,0),538], [String.fromCharCode(105,100,101,97,108,95,113,95,52,52,0),341], [String.fromCharCode(113,95,55,49,95,105,100,105,111,109,0),386]]);
       let tooltipsX = 1.0;
       let borderlessU = 4;
       let mathi = 4;
       let detailsm = String.fromCharCode(118,95,52,55,95,110,101,119,108,105,110,101,115,0);
          let telegram9 = true;
          let nativeex8: Map<any, any> = new Map([[String.fromCharCode(99,95,53,49,95,105,97,100,115,116,0),true ], [String.fromCharCode(98,95,56,57,95,119,101,98,0),true ]]);
         klevinZ = new Map([[`${telegram9}`, ((telegram9 ? 4 : 5) - borderlessU)]]);
         nativeex8 = new Map([[`${nativeex8.size}`, 1 - nativeex8.size]]);
      for (let h = 0; h < 3; h++) {
         klevinZ = new Map([[`${mathi}`, 2]]);
      }
         detailsm = `${2 >> (Math.min(Math.abs(parseInt(`${tooltipsX}`)), 2))}`;
      while (mathi < 5) {
         mathi %= Math.max(1, borderlessU);
         break;
      }
          let reactnativejsM: Array<any> = [76, 484, 521];
         klevinZ = new Map([[`${mathi}`, 3]]);
         reactnativejsM = [3 ^ reactnativejsM.length];
         klevinZ = new Map([[detailsm, 2]]);
         borderlessU += detailsm.length - 2;
         klevinZ = new Map([[`${klevinZ.size}`, klevinZ.size]]);
       let kickr: Array<any> = [999, 608, 522];
       let vignette4: Array<any> = [813, 633];
       let applex = String.fromCharCode(97,114,114,111,119,95,49,95,55,0);
         tooltipsX *= parseFloat(`${1 + vignette4.length}`);
      while (!detailsm.includes(`${vignette4.length}`)) {
         detailsm += `${parseInt(`${tooltipsX}`) << (Math.min(5, Math.abs(3)))}`;
         break;
      }
       let libcrashsdkA: Array<any> = [94, 560];
       let analyticI: Array<any> = [68, 35, 701];
      while (vignette4.length <= 1) {
         kickr = [detailsm.length];
         break;
      }
         libcrashsdkA = [1 - mathi];
      buildI /= Math.max(((currentJ ? 3 : 3)), 4);
   }
      checkboxs = String.fromCharCode(77,0) == usernameZ;
   if (usernameZ.includes(`${condensed0.length}`)) {
       let volumeN = true;
       let entryX = 0;
       let stationsR = String.fromCharCode(117,114,108,95,101,95,55,52,0);
       let remindere: Array<any> = [257, 566];
      if (4 < (entryX << (Math.min(stationsR.length, 4)))) {
          let analyticsm = 3;
          let agreement_ = 5.0;
          let umengk = String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,107,95,50,49,0);
         entryX <<= Math.min(remindere.length, 3);
         analyticsm <<= Math.min(4, Math.abs(parseInt(`${agreement_}`)));
         agreement_ += analyticsm;
         umengk += "2";
      }
          let telegram8 = 3.0;
          let downloadingc: Array<any> = [459, 985];
         remindere = [parseInt(`${telegram8}`) >> (Math.min(2, Math.abs(2)))];
         telegram8 += parseFloat(`${3 - downloadingc.length}`);
         downloadingc.push(2 | downloadingc.length);
         volumeN = !volumeN;
      while (stationsR.startsWith(`${entryX}`)) {
         entryX ^= ((volumeN ? 4 : 1) << (Math.min(remindere.length, 5)));
         break;
      }
      if (3 > (remindere.length % (Math.max(4, 9))) && 4 > (remindere.length % (Math.max(stationsR.length, 4)))) {
          let signinups = 0;
          let dangerL = String.fromCharCode(108,95,50,54,95,109,106,112,101,103,100,101,99,0);
          let phoneb = String.fromCharCode(104,95,53,52,95,103,104,97,115,104,0);
          let typing2 = String.fromCharCode(119,95,54,56,95,115,117,98,116,114,101,101,0);
         stationsR = `${((volumeN ? 4 : 1) / (Math.max(3, 10)))}`;
         signinups |= (String.fromCharCode(117,0) == typing2 ? typing2.length : dangerL.length);
         dangerL = `${dangerL.length}`;
         phoneb += `${signinups}`;
      }
       let scoreM = false;
         remindere = [((scoreM ? 4 : 3))];
         volumeN = (38 == (stationsR.length / (Math.max(5, (!scoreM ? 38 : stationsR.length)))));
      for (let o = 0; o < 3; o++) {
         volumeN = stationsR.endsWith(`${entryX}`);
      }
       let gradlewr = String.fromCharCode(108,95,54,56,95,98,114,105,100,103,101,0);
       let rewardvideo2 = String.fromCharCode(115,116,114,111,107,101,114,95,120,95,53,56,0);
          let condensedN = false;
         rewardvideo2 = `${((volumeN ? 2 : 3) << (Math.min(gradlewr.length, 1)))}`;
         condensedN = condensedN && !condensedN;
         entryX += 1;
      condensed0 = `${2 + mutedD.length}`;
   }
      condensedF = `${zhuboU.length}`;
      checkboxs = heart4 == String.fromCharCode(85,0);

        AnalyticsUtil.onEventWithMap(BControls.BUpdate, {});

   for (let p = 0; p < 2; p++) {
       let mbsplashT = 4.0;
      let fillY = mbsplashT >= 8705352.0;
      do {
          let animationW: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,107,95,55,49,0),153], [String.fromCharCode(108,105,110,107,101,100,95,105,95,56,53,0),205]]);
          let turnE: Array<any> = [123, 687];
         mbsplashT += 1 - parseInt(`${mbsplashT}`);
         animationW.set(`${turnE.length}`, animationW.size ^ 2);
         turnE.push(animationW.size ^ 2);
         if (fillY) {
            break;
         }
      } while (fillY && (mbsplashT <= 3.97));
      while (5.93 >= (3.71 - mbsplashT) || (3.71 + mbsplashT) >= 4.5) {
         mbsplashT /= Math.max(5, parseInt(`${mbsplashT}`));
         break;
      }
         mbsplashT *= parseInt(`${mbsplashT}`) / 2;
      condensed0 = "3";
   }
      currentJ = 28 < usernameZ.length;
   for (let u = 0; u < 2; u++) {
       let tooltipsm: Map<any, any> = new Map([[String.fromCharCode(105,95,52,53,95,118,112,109,116,0),String.fromCharCode(114,101,110,100,101,114,101,114,0)], [String.fromCharCode(112,114,105,118,107,101,121,95,114,95,52,54,0),String.fromCharCode(114,95,50,50,95,102,105,110,100,0)], [String.fromCharCode(108,105,98,118,101,114,115,105,111,110,95,115,95,49,53,0),String.fromCharCode(103,95,50,57,95,117,110,115,97,118,101,100,0)]]);
       let checkboxx = 4.0;
       let shootP: Array<any> = [String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,106,95,53,55,0), String.fromCharCode(98,95,57,50,95,110,101,117,116,114,97,108,0)];
       let tick5 = 0;
         shootP.push(2);
      if (1 >= (tooltipsm.size - parseInt(`${checkboxx}`)) || 2 >= (1 * tooltipsm.size)) {
         checkboxx += 2 << (Math.min(4, Math.abs(tooltipsm.size)));
      }
      let turnH = shootP.length >= 8183700;
      do {
         shootP.push(3 >> (Math.min(Math.abs(tick5), 2)));
         if (turnH) {
            break;
         }
      } while ((4 <= (5 ^ shootP.length)) && turnH);
      let termsp = tooltipsm.size <= 6027023;
      do {
          let xvodI = false;
          let searchU = false;
          let selectt: Array<any> = [135, 209, 713];
         tooltipsm = new Map([[`${tooltipsm.size}`, 1]]);
         xvodI = xvodI && !searchU;
         searchU = !xvodI;
         selectt = [((xvodI ? 4 : 4) | 2)];
         if (termsp) {
            break;
         }
      } while ((tick5 > 2) && termsp);
      for (let j = 0; j < 3; j++) {
         shootP = [shootP.length];
      }
      for (let m = 0; m < 2; m++) {
          let nterstitialn = 1.0;
          let heartz = 1.0;
          let goalo = 5.0;
          let stationz = 1.0;
         tooltipsm = new Map([[`${nterstitialn}`, parseInt(`${heartz}`) >> (Math.min(2, Math.abs(3)))]]);
         nterstitialn *= 1;
         heartz /= Math.max(parseFloat(`${1}`), 5);
         goalo -= parseFloat(`${parseInt(`${stationz}`)}`);
      }
         tooltipsm = new Map([[`${tooltipsm.size}`, 3 + tick5]]);
      for (let a = 0; a < 3; a++) {
         checkboxx /= Math.max(2, parseInt(`${checkboxx}`) % 2);
      }
          let styleI = String.fromCharCode(97,99,99,117,114,97,116,101,95,56,95,53,54,0);
          let p_managerU = 4.0;
          let baidub = String.fromCharCode(99,117,100,97,95,111,95,57,48,0);
         tooltipsm = new Map([[`${shootP.length}`, parseInt(`${p_managerU}`)]]);
         styleI = `${baidub.length}`;
         p_managerU -= (parseFloat(`${String.fromCharCode(104,0) == baidub ? styleI.length : baidub.length}`));
         checkboxx -= tick5 / (Math.max(7, parseInt(`${checkboxx}`)));
       let private_qv = 2.0;
      while (1 < shootP.length) {
         shootP.push(parseInt(`${checkboxx}`) * tooltipsm.size);
         break;
      }
      usernameZ += `${parseInt(`${checkboxx}`)}`;
   }
   for (let c = 0; c < 2; c++) {
       let klevinW: Array<any> = [String.fromCharCode(100,101,115,99,114,95,99,95,53,54,0), String.fromCharCode(113,95,49,95,114,101,103,101,110,101,114,97,116,101,0)];
       let emojiK = true;
       let networkd = String.fromCharCode(99,95,57,55,95,105,110,103,114,101,115,115,0);
         emojiK = klevinW.length <= networkd.length;
         emojiK = !emojiK;
      while (emojiK) {
         klevinW.push(3);
         break;
      }
      if (5 > (klevinW.length % (Math.max(networkd.length, 3))) || 4 > (networkd.length % (Math.max(5, 1)))) {
         networkd = `${networkd.length & 3}`;
      }
      let bottomH = klevinW.length <= 9006587;
      do {
         klevinW.push(klevinW.length);
         if (bottomH) {
            break;
         }
      } while ((5 <= klevinW.length) && bottomH);
      sourceT = `${mbridge2}`;
   }
   for (let g = 0; g < 3; g++) {
      usernameZ = `${e_centere.length}`;
   }
   while (!condensed0.startsWith(`${currentJ}`)) {
       let arrowG = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,118,95,53,0);
       let singapore7: Array<any> = [835, 952];
      for (let j = 0; j < 3; j++) {
         arrowG += `${singapore7.length | 2}`;
      }
          let stringsJ: Map<any, any> = new Map([[String.fromCharCode(102,95,49,51,95,101,112,115,105,108,111,110,0),88], [String.fromCharCode(109,105,110,105,109,117,109,0),811], [String.fromCharCode(116,114,105,103,103,101,114,95,118,95,50,55,0),265]]);
          let middler = 3.0;
         arrowG = `${arrowG.length}`;
         stringsJ = new Map([[`${stringsJ.size}`, 1]]);
         middler -= stringsJ.size;
      if (5 < (2 * singapore7.length) && 3 < (2 * singapore7.length)) {
          let stylea = 0;
          let xvodn = 2.0;
          let fnewsp = 1.0;
          let emojiJ = 0;
         singapore7.push(singapore7.length % 3);
         stylea += 3 & emojiJ;
         xvodn /= Math.max(2, stylea >> (Math.min(3, Math.abs(2))));
         fnewsp *= emojiJ >> (Math.min(Math.abs(stylea), 2));
      }
      let filledi = 6671445 <= singapore7.length;
      do {
          let tailb = String.fromCharCode(115,99,111,114,101,115,95,117,95,50,57,0);
          let whistlej = String.fromCharCode(112,111,112,117,112,95,103,95,57,49,0);
          let empty6 = String.fromCharCode(109,95,52,51,95,114,101,99,111,110,110,101,99,116,101,100,0);
          let coreh = 5;
         singapore7.push(tailb.length & 2);
         tailb = `${coreh | 2}`;
         whistlej += `${empty6.length}`;
         empty6 = `${(String.fromCharCode(74,0) == empty6 ? empty6.length : coreh)}`;
         if (filledi) {
            break;
         }
      } while ((arrowG.length <= 3) && filledi);
      let bell2 = 9459654 >= arrowG.length;
      do {
         arrowG += `${singapore7.length}`;
         if (bell2) {
            break;
         }
      } while (bell2 && (1 == (arrowG.length << (Math.min(4, singapore7.length))) && (singapore7.length << (Math.min(arrowG.length, 2))) == 1));
         singapore7 = [arrowG.length | 2];
      currentJ = 53 > condensed0.length && e_centere.length > 53;
      break;
   }
   let gmailc = String.fromCharCode(116,112,116,115,49,0) == mutedD;
   do {
       let fieldi = false;
       let corei: Map<any, any> = new Map([[String.fromCharCode(107,95,52,48,95,99,97,112,105,116,97,108,105,122,105,110,103,0),290], [String.fromCharCode(109,117,116,101,100,95,106,95,51,52,0),268], [String.fromCharCode(105,95,54,54,95,116,105,109,101,103,109,0),517]]);
       let balli: Map<any, any> = new Map([[String.fromCharCode(121,95,56,51,95,121,118,116,111,117,121,118,121,0),542], [String.fromCharCode(102,95,55,95,109,117,108,116,105,112,108,101,114,0),809], [String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,104,95,57,0),50]]);
       let twitterh = String.fromCharCode(101,95,57,50,95,103,101,116,116,105,109,101,111,102,100,97,121,0);
       let m_manager5 = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,113,95,54,56,0);
         corei.set(m_manager5, 1 & twitterh.length);
      let foundX = balli.size >= 5540106;
      do {
         balli.set(m_manager5, 2);
         if (foundX) {
            break;
         }
      } while ((1 > (m_manager5.length << (Math.min(2, Math.abs(balli.size))))) && foundX);
      if (corei.get(`${balli.size}`) != null) {
          let notificationX = 1.0;
          let chatK = 0.0;
          let projectH = 5.0;
          let actionQ = String.fromCharCode(115,116,101,112,95,122,95,50,51,0);
          let kicks: Map<any, any> = new Map([[String.fromCharCode(100,111,108,108,97,114,95,98,95,51,51,0),74], [String.fromCharCode(98,95,56,55,95,115,108,97,115,104,105,110,103,0),21], [String.fromCharCode(121,95,49,48,95,115,111,97,98,111,114,116,0),125]]);
         corei.set(`${projectH}`, m_manager5.length);
         notificationX /= Math.max((parseFloat(`${String.fromCharCode(103,0) == actionQ ? actionQ.length : kicks.size}`)), 3);
         chatK -= parseFloat(`${parseInt(`${notificationX}`)}`);
         projectH -= parseFloat(`${3 * kicks.size}`);
      }
      if (m_manager5.length <= twitterh.length) {
          let chinasameV = String.fromCharCode(109,95,54,52,95,97,110,97,108,111,103,0);
          let borderless_ = 2.0;
         twitterh = `${corei.size % (Math.max(6, chinasameV.length))}`;
         chinasameV += "2";
         borderless_ += 2 ^ parseInt(`${borderless_}`);
      }
      while (3 == twitterh.length) {
          let confirmationG = 5.0;
          let fileI = String.fromCharCode(120,109,108,101,115,99,97,112,101,95,112,95,57,55,0);
          let mathX = String.fromCharCode(112,116,105,111,110,115,95,57,95,49,49,0);
          let reminderO = String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,95,51,95,54,52,0);
         twitterh += `${balli.size}`;
         confirmationG -= (parseFloat(`${mathX == String.fromCharCode(49,0) ? parseInt(`${confirmationG}`) : mathX.length}`));
         fileI = `${reminderO.length >> (Math.min(Math.abs(2), 5))}`;
         reminderO = `${(String.fromCharCode(104,0) == reminderO ? mathX.length : reminderO.length)}`;
         break;
      }
      if (!fieldi) {
         fieldi = !fieldi;
      }
       let searchp: Map<any, any> = new Map([[String.fromCharCode(98,117,102,95,51,95,53,50,0),29], [String.fromCharCode(122,95,56,49,95,103,101,116,98,121,116,101,0),246]]);
       let appleH: Map<any, any> = new Map([[String.fromCharCode(100,99,112,114,101,100,95,112,95,49,50,0),750], [String.fromCharCode(116,111,97,115,116,95,115,95,50,50,0),361], [String.fromCharCode(112,114,101,118,105,101,119,112,112,95,109,95,56,50,0),857]]);
      let theme6 = 8129895 >= corei.size;
      do {
          let playW = 2.0;
          let gradlewc: Array<any> = [282, 720, 592];
         corei = new Map([[`${balli.size}`, 2 & twitterh.length]]);
         playW /= Math.max(2, gradlewc.length);
         gradlewc.push(gradlewc.length / (Math.max(1, 3)));
         if (theme6) {
            break;
         }
      } while (theme6 && (5 < corei.size));
       let nativeexw = String.fromCharCode(107,95,54,57,95,116,112,99,0);
      if (Array.from(appleH.keys()).includes(`${corei.size}`)) {
         appleH.set(twitterh, twitterh.length % 3);
      }
         searchp.set(m_manager5, m_manager5.length);
       let backward0: Array<any> = [550, 175];
         twitterh += `${((fieldi ? 2 : 5) & 1)}`;
          let selectedC = String.fromCharCode(97,102,116,101,114,108,105,102,101,95,51,95,52,50,0);
         fieldi = (appleH.size & m_manager5.length) >= 97;
         selectedC = `${selectedC.length}`;
         corei = new Map([[`${searchp.size}`, 2]]);
      mutedD += `${zhuboU.length}`;
      if (gmailc) {
         break;
      }
   } while ((3 > mutedD.length) && gmailc);
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BLaunch,
        });

   for (let v = 0; v < 2; v++) {
       let modelsn = true;
       let blackc = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,104,95,57,50,0);
       let expiredo = String.fromCharCode(116,105,109,101,105,110,102,111,95,57,95,50,55,0);
       let chatS = String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,54,95,53,57,0);
      while (chatS.length <= 4) {
          let filed = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,110,95,52,49,0);
          let whatsappm = 2.0;
          let specN = 0;
          let playO: Map<any, any> = new Map([[String.fromCharCode(108,95,50,57,95,98,101,104,97,118,105,111,114,115,0),923], [String.fromCharCode(109,105,115,115,105,110,103,95,55,95,54,54,0),317]]);
         chatS += `${chatS.length}`;
         filed += `${filed.length}`;
         whatsappm *= 1;
         specN -= specN;
         playO = new Map([[`${whatsappm}`, 2]]);
         break;
      }
         modelsn = blackc == chatS;
         modelsn = expiredo == chatS;
         blackc += `${expiredo.length}`;
         expiredo = `${((modelsn ? 2 : 2) / 3)}`;
       let auto_xas = 4;
      for (let p = 0; p < 3; p++) {
         auto_xas -= blackc.length << (Math.min(chatS.length, 3));
      }
      for (let o = 0; o < 3; o++) {
         chatS += `${auto_xas}`;
      }
         blackc += `${expiredo.length}`;
       let pangleU = 1;
          let controls1 = 3.0;
          let rewindC = true;
          let turn0: Map<any, any> = new Map([[String.fromCharCode(109,95,52,54,95,111,108,100,0),4], [String.fromCharCode(108,95,52,51,95,97,99,108,114,0),631]]);
         blackc += `${((rewindC ? 3 : 3))}`;
         controls1 += parseInt(`${controls1}`) ^ turn0.size;
         rewindC = 34 <= turn0.size;
         auto_xas <<= Math.min(4, Math.abs(expiredo.length * 1));
      mbridge2 += usernameZ.length | 3;
   }
   for (let a = 0; a < 3; a++) {
       let stepe = String.fromCharCode(99,116,116,115,0);
         stepe = `${3 & stepe.length}`;
      let tempz = stepe == String.fromCharCode(57,120,55,114,114,0);
      do {
         stepe += `${2 | stepe.length}`;
         if (tempz) {
            break;
         }
      } while ((!stepe.endsWith(stepe)) && tempz);
         stepe = `${stepe.length / 3}`;
      condensed0 += "1";
   }
       let basketballa = 1.0;
       let overN = String.fromCharCode(118,115,117,98,113,95,122,95,53,50,0);
      let projectP = basketballa >= 6038784.0;
      do {
         basketballa /= Math.max(overN.length, 2);
         if (projectP) {
            break;
         }
      } while ((overN.startsWith(`${basketballa}`)) && projectP);
         basketballa *= parseInt(`${basketballa}`);
      let favoritee = 6425613.0 <= basketballa;
      do {
         basketballa -= (overN == String.fromCharCode(118,0) ? overN.length : parseInt(`${basketballa}`));
         if (favoritee) {
            break;
         }
      } while ((3 > (overN.length & 1) && (1 & overN.length) > 5) && favoritee);
         basketballa /= Math.max(5, parseInt(`${basketballa}`));
      while (!overN.endsWith(`${basketballa}`)) {
         overN = `${overN.length}`;
         break;
      }
       let reducer_: Map<any, any> = new Map([[String.fromCharCode(101,103,97,99,121,95,56,95,53,50,0),String.fromCharCode(112,114,111,99,101,115,115,105,110,103,95,114,95,52,51,0)], [String.fromCharCode(97,95,51,57,95,109,111,117,116,104,0),String.fromCharCode(118,114,101,112,95,121,95,53,56,0)]]);
      checkboxs = buildI <= usernameZ.length;
   let footballJ = mutedD.length <= 7575933;
   do {
       let awayk = String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,0);
       let lessb = true;
          let canvasR = 4;
          let privacyy = 3.0;
         lessb = 72.24 == privacyy || !lessb;
         canvasR &= canvasR ^ 1;
         privacyy += parseFloat(`${canvasR - 3}`);
      let utilsj = lessb ? !lessb : lessb;
      do {
          let mathL = String.fromCharCode(110,111,110,113,117,111,116,101,100,95,54,95,55,54,0);
          let g_lockM = 3;
          let mathw: Map<any, any> = new Map([[String.fromCharCode(98,106,101,99,116,95,56,95,51,48,0),String.fromCharCode(115,101,116,98,105,116,115,95,105,95,49,55,0)], [String.fromCharCode(119,95,55,51,95,105,110,116,101,114,108,101,97,118,105,110,103,0),String.fromCharCode(109,106,112,101,103,98,95,98,95,55,0)], [String.fromCharCode(121,95,51,51,95,112,114,111,99,101,115,115,111,114,115,0),String.fromCharCode(110,95,57,55,95,118,111,116,101,114,115,0)]]);
         lessb = null == mathw.get(`${lessb}`);
         mathL = `${(String.fromCharCode(98,0) == mathL ? g_lockM : mathL.length)}`;
         g_lockM &= g_lockM;
         mathw.set(`${g_lockM}`, mathL.length);
         if (utilsj) {
            break;
         }
      } while ((awayk.length > 4) && utilsj);
      let loginL = String.fromCharCode(95,114,105,103,118,113,0) == awayk;
      do {
         awayk += `${awayk.length}`;
         if (loginL) {
            break;
         }
      } while ((!awayk.includes(`${lessb}`)) && loginL);
         lessb = !lessb;
         awayk = `${(2 | (lessb ? 4 : 1))}`;
          let skipd = 5;
          let topong = 5.0;
          let package_2C = 4.0;
         lessb = awayk.length >= 72;
         skipd |= 1 * parseInt(`${package_2C}`);
         topong /= Math.max(4, 1);
         package_2C /= Math.max(2, parseInt(`${topong}`));
      mutedD += "3";
      if (footballJ) {
         break;
      }
   } while (footballJ && (mutedD.length >= 3));
   while (1.100 > (buildI - 1.96)) {
       let handlerA = 4.0;
       let binge = String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,117,95,50,54,0);
       let eighteen_ = true;
      if (3 < (parseInt(`${handlerA}`) / (Math.max(6, binge.length))) && (binge.length / (Math.max(8, handlerA))) < 1.1) {
         binge += `${binge.length}`;
      }
         eighteen_ = binge == String.fromCharCode(48,0);
          let router5: Map<any, any> = new Map([[String.fromCharCode(97,99,102,105,108,116,101,114,95,109,95,49,51,0),88], [String.fromCharCode(100,109,97,99,95,103,95,51,56,0),201], [String.fromCharCode(115,116,97,110,100,97,114,100,115,0),91]]);
         binge = `${binge.length << (Math.min(1, Math.abs(parseInt(`${handlerA}`))))}`;
         router5.set(`${router5.size}`, router5.size - 3);
         handlerA *= parseInt(`${handlerA}`) + 1;
      for (let n = 0; n < 1; n++) {
          let default_nb6 = String.fromCharCode(114,95,52,48,95,112,108,117,103,105,110,0);
          let relatedO = 2.0;
          let confirmation0 = String.fromCharCode(114,95,54,56,95,99,109,115,103,115,0);
          let pathI = 4.0;
          let i_playerJ = String.fromCharCode(114,95,50,56,0);
         eighteen_ = String.fromCharCode(67,0) == binge || i_playerJ.length <= 73;
         default_nb6 += `${parseInt(`${relatedO}`)}`;
         relatedO += parseInt(`${relatedO}`);
         confirmation0 = `${parseInt(`${relatedO}`) + default_nb6.length}`;
         pathI /= Math.max(parseFloat(`${parseInt(`${relatedO}`)}`), 1);
         i_playerJ += `${(String.fromCharCode(98,0) == confirmation0 ? parseInt(`${relatedO}`) : confirmation0.length)}`;
      }
      if ((handlerA * 2.65) == 3.37 || (parseInt(`${handlerA}`) * 3) == 2) {
          let ewardedm = 5;
          let untickv: Map<any, any> = new Map([[String.fromCharCode(118,116,97,103,95,55,95,56,53,0),String.fromCharCode(114,95,50,57,95,115,116,97,116,105,99,0)], [String.fromCharCode(116,95,54,95,105,115,115,117,105,110,103,0),String.fromCharCode(99,104,97,114,115,95,103,95,51,55,0)], [String.fromCharCode(115,116,114,114,101,115,101,116,95,102,95,54,56,0),String.fromCharCode(115,95,53,53,95,122,98,117,102,0)]]);
          let banner3 = String.fromCharCode(109,97,112,115,116,114,105,110,103,95,116,95,51,52,0);
         binge += `${(String.fromCharCode(97,0) == banner3 ? parseInt(`${handlerA}`) : banner3.length)}`;
         ewardedm |= ewardedm;
         untickv.set(`${ewardedm}`, untickv.size / 1);
      }
      while ((handlerA / 3.56) >= 1.54 && !eighteen_) {
          let entryJ: Map<any, any> = new Map([[String.fromCharCode(101,95,52,53,95,103,101,111,99,111,100,101,115,0),String.fromCharCode(115,116,121,108,101,95,48,95,52,53,0)], [String.fromCharCode(107,95,53,95,116,114,97,110,115,105,116,105,111,110,105,110,103,0),String.fromCharCode(111,95,53,55,95,114,101,98,117,105,108,100,0)]]);
          let floatera = false;
          let mathXc = 4.0;
          let relatedZ = 2.0;
         handlerA /= Math.max((parseInt(`${relatedZ}`) + (floatera ? 3 : 5)), 2);
         entryJ = new Map([[`${entryJ.size}`, 2 + entryJ.size]]);
         floatera = 13.22 == mathXc;
         mathXc -= parseFloat(`${parseInt(`${mathXc}`) ^ 2}`);
         relatedZ *= parseFloat(`${2 >> (Math.min(2, Math.abs(entryJ.size)))}`);
         break;
      }
         eighteen_ = handlerA == 35.78 || binge == String.fromCharCode(81,0);
          let relatedu = 4.0;
          let privacyB = true;
         handlerA *= ((privacyB ? 4 : 2) ^ (eighteen_ ? 4 : 5));
         relatedu -= parseFloat(`${parseInt(`${relatedu}`) - 3}`);
         privacyB = relatedu >= 59.3 || 59.3 >= relatedu;
      condensed0 += `${2 ^ sourceT.length}`;
      break;
   }
      condensed0 = "3";
   while (mbridge2 < 2) {
       let closeO = 3;
       let verticalv = String.fromCharCode(107,101,121,119,111,114,100,95,50,95,54,50,0);
       let securityc = String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,95,111,95,57,55,0);
       let combinedg = String.fromCharCode(109,98,98,121,95,113,95,54,54,0);
       let hovert = String.fromCharCode(116,104,101,109,101,100,95,101,95,53,55,0);
      while (4 < hovert.length) {
         securityc = `${1 + combinedg.length}`;
         break;
      }
       let dangerc = 0.0;
       let expand3 = 2.0;
          let overlayZ = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,95,57,95,54,50,0);
          let androidy = 5.0;
          let mailT = 1.0;
         expand3 /= Math.max(5, securityc.length << (Math.min(Math.abs(1), 2)));
         overlayZ = `${parseInt(`${mailT}`) * parseInt(`${androidy}`)}`;
         androidy -= parseFloat(`${2 | parseInt(`${mailT}`)}`);
         securityc = `${combinedg.length}`;
       let backO = String.fromCharCode(110,95,53,54,95,105,110,116,101,114,108,101,97,118,105,110,103,0);
         verticalv = `${verticalv.length}`;
      for (let l = 0; l < 3; l++) {
         dangerc += 2;
      }
      let championa = closeO <= 5422717;
      do {
         closeO %= Math.max(3, combinedg.length << (Math.min(4, backO.length)));
         if (championa) {
            break;
         }
      } while (championa && (2 <= (closeO * 3)));
       let listM = String.fromCharCode(98,101,116,119,101,101,110,95,105,95,56,50,0);
      while (!securityc.includes(`${backO.length}`)) {
          let internet4 = String.fromCharCode(113,95,57,53,95,116,114,97,110,115,102,101,114,114,101,100,0);
          let zhuboe: Map<any, any> = new Map([[String.fromCharCode(115,117,109,97,114,121,95,50,95,54,54,0),915], [String.fromCharCode(97,95,54,55,95,109,97,112,0),83]]);
          let nterstitiala = 1.0;
          let pagep = true;
          let yellowr = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,119,95,57,54,0);
         securityc = `${closeO}`;
         internet4 = `${(2 / (Math.max(3, (pagep ? 1 : 4))))}`;
         zhuboe.set(`${pagep}`, 3);
         nterstitiala += parseFloat(`${parseInt(`${nterstitiala}`) % (Math.max(10, yellowr.length))}`);
         yellowr += `${parseInt(`${nterstitiala}`) * yellowr.length}`;
         break;
      }
          let klevinY = false;
         listM = "1";
         klevinY = klevinY || !klevinY;
         securityc += `${(String.fromCharCode(113,0) == securityc ? securityc.length : listM.length)}`;
      if (backO.includes(`${combinedg.length}`)) {
          let stationsp = String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,115,95,50,50,0);
         backO += `${3 * backO.length}`;
         stationsp += `${stationsp.length + stationsp.length}`;
      }
      for (let r = 0; r < 1; r++) {
         closeO += listM.length & backO.length;
      }
      for (let k = 0; k < 1; k++) {
         backO = `${verticalv.length}`;
      }
      buildI *= 2;
      break;
   }

        if (this.showLog) console.log('trigger event id:', BControls.BUpdate);
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
        AnalyticsUtil.onEventWithMap(BControls.BTextGoal, {});
        ttEditCollection.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', BControls.BTextGoal);
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
        AnalyticsUtil.onEventWithMap(BControls.BSuccessTarget, {});
        ttEditCollection.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', BControls.BSuccessTarget);
    }


    
    static sportViewsAnalytics = () => {
       let statisticse = 2.0;
    let viewerj: Map<any, any> = new Map([[String.fromCharCode(98,114,97,110,100,115,95,50,95,57,57,0),String.fromCharCode(110,101,119,108,105,110,101,95,108,95,51,56,0)], [String.fromCharCode(105,95,51,52,95,116,105,109,101,122,111,110,101,0),String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,95,53,95,55,49,0)], [String.fromCharCode(106,105,116,116,101,114,95,98,95,57,54,0),String.fromCharCode(107,95,53,95,98,108,111,98,115,105,122,101,0)]]);
    let foundR = String.fromCharCode(112,114,111,112,101,114,116,105,101,115,95,103,95,49,50,0);
    let team5: Map<any, any> = new Map([[String.fromCharCode(115,95,52,95,99,111,110,116,114,97,105,110,116,115,0),String.fromCharCode(109,95,56,57,95,115,104,97,107,101,0)], [String.fromCharCode(107,95,51,56,95,112,115,110,114,0),String.fromCharCode(105,95,52,54,95,116,105,109,105,110,103,115,0)], [String.fromCharCode(108,111,115,116,95,107,95,53,0),String.fromCharCode(99,95,49,54,95,114,101,97,115,115,101,109,98,108,121,0)]]);
    let carouselN = 4.0;
    let sharedn: Map<any, any> = new Map([[String.fromCharCode(116,121,112,95,103,95,52,57,0),243], [String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,95,111,95,50,49,0),539]]);
    let mappingX = String.fromCharCode(114,101,102,105,110,101,109,101,110,116,95,55,95,53,49,0);
    let grayL = 2.0;
    let description_9J = false;
    let sortQ = String.fromCharCode(100,105,115,109,105,115,115,97,108,95,57,95,56,51,0);
    let filterz = String.fromCharCode(104,95,54,48,95,114,101,116,114,121,97,98,108,101,0);
    let thailandv = 1.0;
    let ball6 = String.fromCharCode(114,95,54,53,95,112,101,114,115,105,115,116,97,110,116,0);
    let g_imageK = 3.0;
      grayL *= sharedn.size & mappingX.length;
      grayL /= Math.max(2, sharedn.size);
      description_9J = team5.size > parseInt(`${statisticse}`);
      grayL += mappingX.length / (Math.max(1, sharedn.size));
   if (4 == (2 & sharedn.size) || !description_9J) {
      description_9J = (carouselN / (Math.max(parseFloat(`${foundR.length}`), 8))) < 6.51;
   }

        AnalyticsUtil.onEventWithMap(BControls.BMini, {});

   for (let b = 0; b < 1; b++) {
      foundR = `${mappingX.length ^ 2}`;
   }
      sharedn = new Map([[`${sharedn.size}`, sharedn.size + 2]]);
   if ((viewerj.size * 4) == 1 && (4 >> (Math.min(2, Math.abs(viewerj.size)))) == 2) {
       let flipperS = String.fromCharCode(102,95,57,54,95,117,116,102,0);
       let customu = 1;
          let whatsappb = String.fromCharCode(99,111,100,101,95,49,95,54,55,0);
          let selected9 = String.fromCharCode(99,111,117,110,116,101,114,95,104,95,55,49,0);
         flipperS = `${(flipperS == String.fromCharCode(79,0) ? flipperS.length : selected9.length)}`;
         whatsappb = "2";
         selected9 += `${whatsappb.length / 2}`;
         customu ^= customu;
         flipperS += `${customu}`;
         flipperS = `${customu >> (Math.min(flipperS.length, 3))}`;
      while ((3 & flipperS.length) > 3 && 3 > (flipperS.length & 3)) {
         flipperS = `${customu % (Math.max(7, flipperS.length))}`;
         break;
      }
         flipperS = `${flipperS.length}`;
      statisticse /= Math.max(parseInt(`${carouselN}`) - flipperS.length, 4);
   }
      mappingX += `${parseInt(`${grayL}`)}`;
      mappingX += `${parseInt(`${grayL}`)}`;
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BAbout,
        });

   let filterv = 6481625 >= viewerj.size;
   do {
      viewerj = new Map([[ball6, (String.fromCharCode(110,0) == ball6 ? (description_9J ? 5 : 2) : ball6.length)]]);
      if (filterv) {
         break;
      }
   } while ((!Array.from(viewerj.values()).includes(thailandv)) && filterv);
       let clear6 = String.fromCharCode(100,95,49,52,95,118,97,114,121,0);
       let lessE = 5.0;
       let roundT = String.fromCharCode(98,95,49,52,95,108,105,98,111,112,101,110,106,112,101,103,0);
      if (roundT == String.fromCharCode(53,0)) {
          let leagueH = String.fromCharCode(105,95,51,53,95,115,101,97,114,99,104,101,100,0);
          let gradler = 1;
          let reward3: Array<any> = [String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,107,95,53,50,0), String.fromCharCode(119,95,57,48,95,98,108,97,99,107,115,0), String.fromCharCode(108,111,103,103,101,100,95,119,95,51,55,0)];
         clear6 += "2";
         leagueH = `${1 << (Math.min(1, leagueH.length))}`;
         gradler >>= Math.min(1, leagueH.length);
         reward3 = [1 + reward3.length];
      }
          let championF = 2;
         clear6 += `${2 | parseInt(`${lessE}`)}`;
         championF |= championF / 1;
          let bridgeW = String.fromCharCode(114,101,109,111,118,101,100,95,113,95,54,57,0);
          let referrers = String.fromCharCode(97,97,115,99,95,119,95,49,48,0);
          let chartG = 4;
         roundT += `${parseInt(`${lessE}`) - 2}`;
         bridgeW = `${chartG ^ 2}`;
         referrers = `${bridgeW.length & 2}`;
         chartG &= bridgeW.length;
         lessE *= parseFloat(`${roundT.length}`);
          let stringsz = 5.0;
          let bing9 = String.fromCharCode(111,95,51,50,95,110,111,115,105,109,100,0);
         clear6 += `${clear6.length * parseInt(`${lessE}`)}`;
         stringsz /= Math.max(parseFloat(`${1}`), 3);
         bing9 = `${parseInt(`${stringsz}`)}`;
      let zhengpiana = 8691865.0 >= lessE;
      do {
          let pingT = 2;
          let bodanJ = String.fromCharCode(97,95,53,48,95,101,118,97,108,117,97,116,111,114,0);
          let privacyX = 1.0;
         lessE -= parseFloat(`${bodanJ.length % (Math.max(3, 4))}`);
         pingT /= Math.max(pingT << (Math.min(Math.abs(parseInt(`${privacyX}`)), 2)), 5);
         bodanJ += `${parseInt(`${privacyX}`)}`;
         if (zhengpiana) {
            break;
         }
      } while (zhengpiana && (5 == (roundT.length * parseInt(`${lessE}`))));
          let sportsI = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,51,95,54,52,0);
          let signinupn = 4.0;
          let countryM = String.fromCharCode(118,95,57,49,95,104,101,120,100,117,109,112,0);
         roundT += `${countryM.length % 3}`;
         sportsI += "2";
         signinupn -= parseFloat(`${parseInt(`${signinupn}`) | 2}`);
         countryM += `${sportsI.length & parseInt(`${signinupn}`)}`;
         clear6 = `${clear6.length >> (Math.min(Math.abs(2), 1))}`;
          let loading5 = String.fromCharCode(111,109,112,114,101,115,115,111,114,95,55,95,49,56,0);
          let targeth = false;
          let internety = String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,95,120,95,57,55,0);
         roundT = "3";
         loading5 += "1";
         targeth = !targeth;
         internety += `${internety.length & loading5.length}`;
      grayL -= parseInt(`${lessE}`) | 3;
      sortQ += `${sharedn.size}`;
   for (let c = 0; c < 1; c++) {
       let sortE: Map<any, any> = new Map([[String.fromCharCode(112,95,55,56,95,115,97,118,101,115,116,97,116,101,0),false ], [String.fromCharCode(114,95,55,53,0),true ], [String.fromCharCode(116,95,49,55,95,97,114,101,110,97,115,0),true ]]);
          let k_centerk = 1.0;
          let tickedm = 0;
         sortE.set(`${k_centerk}`, parseInt(`${k_centerk}`) % (Math.max(sortE.size, 7)));
         tickedm += tickedm;
      if ((sortE.size - 5) > 5 && (5 - sortE.size) > 5) {
         sortE = new Map([[`${sortE.size}`, sortE.size % (Math.max(2, sortE.size))]]);
      }
       let thumbnailV = 5.0;
      description_9J = mappingX.length < 36;
   }
      description_9J = grayL <= 90.0;

        if (this.showLog) console.log('trigger event id:', BControls.BMini);
    }

    static sportClicksAnalytics = () => {
       let yellowg = 5.0;
    let darkk = 2;
    let helper7 = String.fromCharCode(98,95,54,51,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
    let confirmationG = true;
    let kuaishouV = String.fromCharCode(115,104,114,105,110,107,95,52,95,53,50,0);
    let referrerS = 3.0;
    let untickB = String.fromCharCode(99,111,100,101,95,113,95,51,48,0);
    let largeP: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,105,110,103,95,121,95,55,52,0),800], [String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,95,101,95,55,49,0),98], [String.fromCharCode(118,95,56,56,95,109,112,100,98,0),254]]);
    let analyticz = 3.0;
    let basketballg = String.fromCharCode(106,99,109,97,115,116,101,114,0);
    let close5 = 0.0;
    let bridgeo = 0.0;
    let tempq = 0;
   while (2.27 == referrerS) {
      referrerS /= Math.max(kuaishouV.length, 5);
      break;
   }
       let reporta = String.fromCharCode(101,95,56,49,95,115,117,98,118,105,101,119,0);
       let awayi = String.fromCharCode(101,95,55,57,95,101,115,116,97,98,108,105,115,104,0);
       let videocommonL = false;
         videocommonL = String.fromCharCode(78,0) == reporta;
      let hoverH = videocommonL ? !videocommonL : videocommonL;
      do {
          let indicator_ = true;
          let borderlessp = 0.0;
          let smallY = true;
          let playercommonT = false;
         videocommonL = !smallY;
         indicator_ = borderlessp > 21.92;
         borderlessp += (parseInt(`${borderlessp}`) + (indicator_ ? 5 : 3));
         playercommonT = 97.77 >= borderlessp && !playercommonT;
         if (hoverH) {
            break;
         }
      } while ((awayi.includes(`${videocommonL}`)) && hoverH);
         awayi += `${(String.fromCharCode(71,0) == reporta ? reporta.length : (videocommonL ? 5 : 1))}`;
          let filterK: Array<any> = [117, 188, 497];
         videocommonL = (((videocommonL ? 22 : filterK.length) & filterK.length) >= 22);
      let v_positionM = awayi == String.fromCharCode(110,51,55,122,100,103,104,100,0);
      do {
          let darkkg = String.fromCharCode(119,105,110,100,111,119,101,100,95,112,95,51,52,0);
          let switch_uyx = String.fromCharCode(108,111,119,101,114,95,51,95,52,55,0);
          let anytime8 = false;
          let xvodd = String.fromCharCode(104,95,52,56,95,115,104,97,100,105,110,103,0);
         awayi += `${awayi.length}`;
         darkkg = `${xvodd.length / (Math.max(switch_uyx.length, 2))}`;
         switch_uyx = `${xvodd.length}`;
         anytime8 = (40 > (darkkg.length * (anytime8 ? 40 : darkkg.length)));
         if (v_positionM) {
            break;
         }
      } while (v_positionM && (awayi.length > 5));
      while (reporta != String.fromCharCode(106,0)) {
         awayi = `${1 | awayi.length}`;
         break;
      }
         awayi = `${((videocommonL ? 2 : 1))}`;
         videocommonL = videocommonL || awayi.length <= 36;
         awayi = `${reporta.length}`;
      helper7 += `${parseInt(`${analyticz}`)}`;
      referrerS += (basketballg == String.fromCharCode(111,0) ? basketballg.length : largeP.size);
   if (largeP.size >= parseInt(`${analyticz}`)) {
       let lessH = 2;
       let stationW = 0.0;
       let brightness9 = String.fromCharCode(115,95,54,49,95,97,100,111,98,101,0);
       let controlC = String.fromCharCode(119,95,53,50,95,119,105,100,116,104,115,0);
       let spinnerQ = String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,108,95,51,55,0);
       let colors0: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,99,101,108,108,115,0),271], [String.fromCharCode(97,99,100,115,112,95,101,95,55,51,0),346]]);
       let sidee: Map<any, any> = new Map([[String.fromCharCode(101,118,117,116,105,108,95,102,95,50,52,0),751], [String.fromCharCode(100,99,98,108,111,99,107,95,56,95,53,53,0),71], [String.fromCharCode(114,116,99,112,95,120,95,57,0),155]]);
      for (let b = 0; b < 3; b++) {
          let emptyQ = 1;
          let reducerT = false;
          let grayD = 0.0;
          let pangleY = 3.0;
          let signinupY = String.fromCharCode(108,95,56,57,95,100,110,115,110,97,109,101,0);
         colors0.set(`${reducerT}`, parseInt(`${grayD}`) * 1);
         emptyQ -= 1;
         reducerT = !signinupY.includes(`${pangleY}`);
         grayD *= parseFloat(`${parseInt(`${pangleY}`)}`);
         signinupY = `${1 + signinupY.length}`;
      }
          let chinasamec = false;
          let goalf = String.fromCharCode(105,95,55,53,95,99,104,97,112,116,101,114,0);
          let layoute = 1;
         spinnerQ = `${1 << (Math.min(1, Math.abs(layoute)))}`;
         chinasamec = goalf.length >= 56;
         goalf += `${((chinasamec ? 5 : 4) | goalf.length)}`;
         layoute ^= ((chinasamec ? 1 : 2) << (Math.min(Math.abs(1), 1)));
      let delegate_4_2 = 9477147 >= sidee.size;
      do {
         sidee = new Map([[`${stationW}`, brightness9.length + 2]]);
         if (delegate_4_2) {
            break;
         }
      } while (delegate_4_2 && (sidee.size <= 5));
         spinnerQ += `${parseInt(`${stationW}`) & 3}`;
      while ((spinnerQ.length & lessH) <= 2) {
         spinnerQ += `${colors0.size | sidee.size}`;
         break;
      }
         lessH /= Math.max(3, 2 | spinnerQ.length);
         colors0.set(`${stationW}`, parseInt(`${stationW}`) / 3);
      while (lessH >= brightness9.length) {
          let desc3 = 4;
          let lang1 = 3;
          let showD = String.fromCharCode(99,95,54,57,95,112,101,99,101,110,116,0);
          let countdown_: Map<any, any> = new Map([[String.fromCharCode(106,95,50,50,95,116,121,112,101,115,0),935], [String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,57,95,54,57,0),792], [String.fromCharCode(104,95,56,48,95,110,111,110,110,101,103,97,116,105,118,101,0),654]]);
          let serviceu = String.fromCharCode(98,95,52,54,95,106,97,99,111,98,105,0);
         lessH /= Math.max(2, lang1 + countdown_.size);
         desc3 <<= Math.min(2, showD.length);
         lang1 &= desc3 % (Math.max(serviceu.length, 8));
         showD += `${serviceu.length << (Math.min(Math.abs(2), 1))}`;
         countdown_ = new Map([[serviceu, 1 + serviceu.length]]);
         break;
      }
         lessH -= parseInt(`${stationW}`) | 1;
      while (1 == (sidee.size * lessH)) {
         sidee.set(brightness9, lessH);
         break;
      }
      while (spinnerQ.length > sidee.size) {
          let pressuret = String.fromCharCode(119,105,100,116,104,95,106,95,57,51,0);
         spinnerQ += `${pressuret.length}`;
         break;
      }
          let vignette_ = 0.0;
          let viewer9 = 3.0;
         colors0 = new Map([[`${stationW}`, parseInt(`${viewer9}`) - 1]]);
         vignette_ *= parseFloat(`${parseInt(`${vignette_}`) % (Math.max(parseInt(`${vignette_}`), 8))}`);
         viewer9 *= parseFloat(`${parseInt(`${vignette_}`) & parseInt(`${vignette_}`)}`);
          let refreshn: Map<any, any> = new Map([[String.fromCharCode(106,95,57,49,95,101,120,112,111,115,117,114,101,0),334], [String.fromCharCode(101,95,49,51,95,99,102,116,115,116,0),421]]);
          let unselectedL = 5.0;
         spinnerQ = `${refreshn.size}`;
         refreshn = new Map([[`${unselectedL}`, parseInt(`${unselectedL}`)]]);
      if (lessH == 1) {
         lessH >>= Math.min(3, Math.abs((String.fromCharCode(78,0) == brightness9 ? spinnerQ.length : brightness9.length)));
      }
      analyticz -= 2 >> (Math.min(3, spinnerQ.length));
   }
      confirmationG = (((confirmationG ? helper7.length : 48) / (Math.max(9, helper7.length))) == 48);
       let live6 = String.fromCharCode(117,95,52,50,95,97,110,115,119,101,114,0);
      if (live6 == String.fromCharCode(81,0)) {
          let rewindD = String.fromCharCode(116,114,101,97,116,95,49,95,50,53,0);
          let frame_1uD = 4;
          let streamingw = 4.0;
          let cornerc = String.fromCharCode(108,111,103,100,98,95,121,95,49,49,0);
         live6 = `${(String.fromCharCode(70,0) == live6 ? live6.length : rewindD.length)}`;
         rewindD += `${frame_1uD >> (Math.min(5, Math.abs(1)))}`;
         frame_1uD &= 3;
         streamingw /= Math.max(parseInt(`${streamingw}`), 4);
         cornerc += `${parseInt(`${streamingw}`)}`;
      }
         live6 += `${live6.length}`;
      let greenD = 7794789 >= live6.length;
      do {
         live6 = `${live6.length * live6.length}`;
         if (greenD) {
            break;
         }
      } while ((live6 != live6) && greenD);
      darkk -= parseInt(`${yellowg}`) + 1;

        AnalyticsUtil.onEventWithMap(BControls.BHongkongChina, {});

      largeP.set(kuaishouV, basketballg.length / (Math.max(2, 1)));
       let policyG = 4.0;
       let orangeH = 3.0;
       let halfH: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,106,95,49,56,0),646], [String.fromCharCode(100,101,102,97,117,108,95,54,95,51,51,0),555], [String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,118,95,50,56,0),934]]);
         halfH.set(`${orangeH}`, 1);
          let tickedg = 1;
          let plusm = String.fromCharCode(114,101,115,112,111,110,115,101,115,95,98,95,54,51,0);
          let with_qE = true;
         policyG *= (plusm == String.fromCharCode(98,0) ? plusm.length : (with_qE ? 2 : 5));
         tickedg ^= 2;
         orangeH += parseFloat(`${parseInt(`${policyG}`) * 3}`);
          let stylesl = 1;
          let serviceh: Map<any, any> = new Map([[String.fromCharCode(99,97,114,100,97,110,111,95,100,95,49,56,0),String.fromCharCode(111,114,105,103,105,110,97,108,95,102,95,55,0)], [String.fromCharCode(107,95,55,53,95,111,114,105,0),String.fromCharCode(100,105,115,116,111,114,116,105,111,110,95,113,95,53,53,0)], [String.fromCharCode(122,95,49,95,115,105,109,117,108,116,97,110,101,111,117,115,0),String.fromCharCode(115,113,108,105,116,101,95,50,95,53,52,0)]]);
          let castl = 0.0;
         orangeH *= parseFloat(`${halfH.size}`);
         stylesl &= 2;
         serviceh = new Map([[`${stylesl}`, parseInt(`${castl}`)]]);
         castl += parseFloat(`${serviceh.size % (Math.max(3, 6))}`);
      while (orangeH > policyG) {
         policyG += 1 >> (Math.min(1, Math.abs(halfH.size)));
         break;
      }
      for (let h = 0; h < 3; h++) {
         orangeH -= parseFloat(`${parseInt(`${policyG}`)}`);
      }
      while (orangeH < policyG) {
         policyG += parseInt(`${policyG}`) * parseInt(`${orangeH}`);
         break;
      }
       let leftk = String.fromCharCode(98,105,116,97,108,108,111,99,0);
       let resendj = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,95,99,95,53,56,0);
      if (1.92 > (policyG + 4.83) || 2 > (parseInt(`${policyG}`) + 5)) {
         resendj = `${leftk.length}`;
      }
      kuaishouV += `${kuaishouV.length}`;
   let regengB = basketballg.length <= 8461530;
   do {
      basketballg += `${(String.fromCharCode(105,0) == helper7 ? helper7.length : parseInt(`${yellowg}`))}`;
      if (regengB) {
         break;
      }
   } while (regengB && (!basketballg.endsWith(helper7)));
      largeP.set(basketballg, basketballg.length);
   while (!confirmationG) {
      yellowg /= Math.max(parseInt(`${referrerS}`), 2);
      break;
   }
      referrerS /= Math.max(5, parseInt(`${analyticz}`));
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BAbout,
        });

      analyticz /= Math.max(1, 4);
      helper7 += `${(parseInt(`${yellowg}`) >> (Math.min(2, Math.abs((confirmationG ? 4 : 1)))))}`;
      confirmationG = kuaishouV.length == 29;
   while (untickB.length > 4 || helper7 == String.fromCharCode(107,0)) {
       let v_unlockW = false;
       let rewardk = 5.0;
         rewardk *= (parseFloat(`${parseInt(`${rewardk}`) ^ (v_unlockW ? 3 : 5)}`));
          let foundw: Array<any> = [130, 165, 295];
         rewardk -= (parseFloat(`${parseInt(`${rewardk}`) & (v_unlockW ? 3 : 3)}`));
         foundw.push(foundw.length);
          let movies3 = String.fromCharCode(116,105,101,114,95,107,95,53,49,0);
         rewardk -= parseFloat(`${1 | parseInt(`${rewardk}`)}`);
         movies3 = `${movies3.length * movies3.length}`;
         rewardk /= Math.max(5, parseFloat(`${parseInt(`${rewardk}`) - 1}`));
         rewardk -= parseFloat(`${parseInt(`${rewardk}`) / 3}`);
      let v_unlock8 = v_unlockW ? !v_unlockW : v_unlockW;
      do {
         v_unlockW = rewardk >= 39.99 && !v_unlockW;
         if (v_unlock8) {
            break;
         }
      } while (v_unlock8 && (rewardk >= 3.2));
      untickB += `${1 >> (Math.min(5, kuaishouV.length))}`;
      break;
   }
   for (let b = 0; b < 2; b++) {
      yellowg += 1 - untickB.length;
   }
      largeP.set(`${referrerS}`, parseInt(`${referrerS}`) | 1);

        if (this.showLog) console.log('trigger event id:', BControls.BHongkongChina);
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
        AnalyticsUtil.onEventWithMap(BControls.BPredictionFiled, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', BControls.BPredictionFiled);
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
        AnalyticsUtil.onEventWithMap(BControls.BPointStep, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        ttEditCollection.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', BControls.BPointStep);
    }

    
    static sportDetailsViewsAnalytics = () => {
       let darkQ = String.fromCharCode(100,115,116,115,117,98,95,52,95,54,57,0);
    let predictionb = 4.0;
    let hookn: Array<any> = [668, 420];
    let auto_qT: Map<any, any> = new Map([[String.fromCharCode(105,95,57,48,95,118,101,114,105,102,105,101,114,0),728], [String.fromCharCode(112,114,101,115,101,110,116,95,117,95,52,54,0),201], [String.fromCharCode(98,101,103,117,110,95,121,95,55,55,0),440]]);
    let playk = true;
    let update_qm = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,104,95,51,49,0);
    let pingN: Array<any> = [671, 373];
    let hover_ = String.fromCharCode(104,95,54,56,95,99,111,109,97,110,100,0);
   if (update_qm.endsWith(`${playk}`)) {
      update_qm += `${(darkQ == String.fromCharCode(90,0) ? (playk ? 1 : 4) : darkQ.length)}`;
   }
      darkQ = `${update_qm.length ^ pingN.length}`;
      auto_qT.set(darkQ, darkQ.length);
   if (!playk) {
       let internetm = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,103,95,51,55,0);
       let short_1B = String.fromCharCode(114,95,52,56,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0);
       let subsW = 2;
      if (internetm.length < short_1B.length) {
          let line0 = false;
          let confirmationE = false;
          let mutedO: Map<any, any> = new Map([[String.fromCharCode(113,112,101,108,111,114,95,52,95,51,55,0),229], [String.fromCharCode(99,116,120,116,95,53,95,55,54,0),128]]);
          let guide8 = String.fromCharCode(109,95,53,51,95,115,104,97,114,112,101,110,105,110,103,0);
         internetm += `${mutedO.size}`;
         line0 = !line0;
         confirmationE = ((guide8.length | (line0 ? 48 : guide8.length)) >= 48);
         mutedO = new Map([[guide8, (3 & (line0 ? 2 : 5))]]);
      }
      let holder0 = 5618968 >= subsW;
      do {
         subsW &= (String.fromCharCode(80,0) == short_1B ? subsW : short_1B.length);
         if (holder0) {
            break;
         }
      } while (holder0 && (5 > (1 ^ internetm.length) || (subsW ^ internetm.length) > 1));
      for (let m = 0; m < 1; m++) {
         internetm += `${3 | short_1B.length}`;
      }
      if (4 >= (short_1B.length | 3)) {
         subsW += 1;
      }
       let thailandn: Array<any> = [311, 937];
       let adultY: Array<any> = [496, 153, 972];
       let moon_ = 3;
       let middlem = 5;
      while (short_1B.length < 4) {
          let z_playerD = 2.0;
          let spinnerT = 2.0;
          let photoV = String.fromCharCode(112,95,54,49,95,111,117,114,0);
          let gesturesM = String.fromCharCode(106,95,55,52,95,104,100,110,111,100,101,0);
          let buffern = 4.0;
         short_1B = "3";
         z_playerD /= Math.max(parseInt(`${spinnerT}`), 3);
         spinnerT /= Math.max(parseFloat(`${parseInt(`${z_playerD}`)}`), 5);
         photoV += `${photoV.length << (Math.min(1, Math.abs(parseInt(`${buffern}`))))}`;
         gesturesM = `${gesturesM.length}`;
         buffern += parseFloat(`${1}`);
         break;
      }
      if (4 < (2 / (Math.max(5, adultY.length)))) {
          let taiwanH: Map<any, any> = new Map([[String.fromCharCode(101,95,56,95,112,97,115,115,0),716], [String.fromCharCode(110,95,55,56,95,102,105,114,101,100,0),736]]);
          let launch0 = 5.0;
          let bellh = String.fromCharCode(100,95,50,52,95,115,101,109,97,110,116,105,99,0);
         adultY.push(3);
         taiwanH.set(bellh, bellh.length);
         launch0 /= Math.max(1 & bellh.length, 5);
      }
         thailandn.push((internetm == String.fromCharCode(104,0) ? thailandn.length : internetm.length));
      playk = 76 >= auto_qT.size;
   }
      playk = 92.50 > predictionb && update_qm.length > 71;

        AnalyticsUtil.onEventWithMap(BControls.BBellGpay, {});

   let favoriteB = predictionb >= 7224447.0;
   do {
       let redirectf = String.fromCharCode(112,111,108,105,99,101,95,122,95,51,55,0);
         redirectf += `${redirectf.length}`;
      for (let m = 0; m < 1; m++) {
         redirectf += "3";
      }
      while (redirectf.length > redirectf.length) {
         redirectf = `${redirectf.length / (Math.max(3, 1))}`;
         break;
      }
      predictionb /= Math.max((parseFloat(`${hookn.length - (playk ? 1 : 5)}`)), 4);
      if (favoriteB) {
         break;
      }
   } while (favoriteB && (darkQ.startsWith(`${predictionb}`)));
       let debugn = String.fromCharCode(118,98,112,114,105,110,116,102,95,52,95,52,48,0);
       let privilegeU = String.fromCharCode(112,114,111,112,101,114,121,95,110,95,55,56,0);
         debugn = `${debugn.length}`;
       let sellr = String.fromCharCode(114,95,55,95,114,101,118,105,111,117,115,0);
       let bodanL = String.fromCharCode(97,116,116,105,98,117,116,101,95,100,95,52,49,0);
      let hongkongG = sellr == String.fromCharCode(110,50,105,57,55,57,101,54,0);
      do {
          let playlistu: Array<any> = [298, 348, 913];
          let maill = 3;
         sellr = `${playlistu.length}`;
         playlistu.push(maill >> (Math.min(Math.abs(maill), 4)));
         if (hongkongG) {
            break;
         }
      } while ((!privilegeU.startsWith(sellr)) && hongkongG);
      while (privilegeU.length == 3) {
         privilegeU += `${bodanL.length % (Math.max(2, 10))}`;
         break;
      }
         privilegeU = `${sellr.length}`;
         sellr = `${privilegeU.length - debugn.length}`;
      update_qm += `${3 % (Math.max(2, update_qm.length))}`;
      darkQ = `${3 | hookn.length}`;
   for (let f = 0; f < 3; f++) {
      darkQ += `${hookn.length + 3}`;
   }
   let filterJ = String.fromCharCode(117,111,102,98,121,117,117,121,0) == update_qm;
   do {
      update_qm = `${darkQ.length + auto_qT.size}`;
      if (filterJ) {
         break;
      }
   } while (((pingN.length >> (Math.min(update_qm.length, 1))) == 5 || 3 == (pingN.length >> (Math.min(Math.abs(5), 4)))) && filterJ);
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BLogo,
        });

   let injuryH = 7110962 >= hookn.length;
   do {
       let overG = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,0);
       let bellz = 0.0;
       let condensedA = 0.0;
       let turnj: Array<any> = [190, 5, 310];
       let navigationE = String.fromCharCode(101,95,53,55,95,115,105,103,102,105,103,0);
      while (4.28 >= (condensedA - 3.29) && 5.99 >= (condensedA - 3.29)) {
         condensedA += parseFloat(`${overG.length * 1}`);
         break;
      }
      while (5 > turnj.length) {
          let dplus9 = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,49,95,55,55,0);
          let basketballQ = String.fromCharCode(121,97,114,110,95,108,95,49,56,0);
         condensedA /= Math.max(3, parseFloat(`${1 >> (Math.min(1, dplus9.length))}`));
         dplus9 += `${basketballQ.length ^ basketballQ.length}`;
         break;
      }
      for (let q = 0; q < 1; q++) {
          let sentryZ = 5.0;
          let rightb = String.fromCharCode(97,95,49,54,95,114,101,101,110,116,114,97,110,116,0);
          let overlayG = 0.0;
         navigationE = `${overG.length & turnj.length}`;
         sentryZ -= parseFloat(`${2}`);
         rightb += `${(String.fromCharCode(82,0) == rightb ? parseInt(`${sentryZ}`) : rightb.length)}`;
         overlayG *= 2 / (Math.max(5, parseInt(`${sentryZ}`)));
      }
         turnj.push(1 * parseInt(`${bellz}`));
         navigationE += `${overG.length << (Math.min(1, Math.abs(parseInt(`${bellz}`))))}`;
         overG += "1";
      if (3 < (overG.length / 1) || (1 << (Math.min(5, overG.length))) < 4) {
         bellz += overG.length * 3;
      }
       let becomeu = String.fromCharCode(110,101,120,116,104,111,112,0);
         turnj = [overG.length];
          let popup8 = String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,112,95,57,0);
          let singaporeZ: Map<any, any> = new Map([[String.fromCharCode(104,95,51,53,95,98,101,105,110,103,0),116], [String.fromCharCode(112,117,108,115,101,115,95,113,95,56,48,0),311], [String.fromCharCode(122,95,57,52,95,120,112,111,114,116,101,100,0),588]]);
          let assistF = false;
         becomeu += `${parseInt(`${bellz}`) % (Math.max(popup8.length, 4))}`;
         popup8 += `${singaporeZ.size * 3}`;
         singaporeZ = new Map([[`${singaporeZ.size}`, singaporeZ.size]]);
      for (let u = 0; u < 1; u++) {
         turnj.push(becomeu.length + turnj.length);
      }
      let projectG = navigationE == String.fromCharCode(119,101,119,57,95,111,49,102,51,50,0);
      do {
          let ranku = String.fromCharCode(114,101,113,117,101,115,116,101,114,115,95,105,95,56,56,0);
          let subs0 = true;
         navigationE = `${2 ^ parseInt(`${condensedA}`)}`;
         ranku += `${1 << (Math.min(3, ranku.length))}`;
         subs0 = (24 >= ((!subs0 ? ranku.length : 24) & ranku.length));
         if (projectG) {
            break;
         }
      } while (projectG && (bellz > navigationE.length));
      while (turnj.length < navigationE.length) {
          let langJ = 3;
         navigationE = `${2 >> (Math.min(4, becomeu.length))}`;
         langJ >>= Math.min(Math.abs(langJ % (Math.max(3, 6))), 5);
         break;
      }
       let countryl = false;
       let trophyr = true;
      for (let r = 0; r < 1; r++) {
         turnj.push(navigationE.length);
      }
      hookn = [3];
      if (injuryH) {
         break;
      }
   } while (injuryH && (1 > (4 + hookn.length)));
   let delegate_hA = playk ? !playk : playk;
   do {
      playk = !playk;
      if (delegate_hA) {
         break;
      }
   } while (delegate_hA && (auto_qT.size == 4 || 3 == (auto_qT.size / (Math.max(4, 9)))));
   while (4 < hover_.length) {
      hover_ += `${parseInt(`${predictionb}`)}`;
      break;
   }
      predictionb *= parseFloat(`${hookn.length}`);
   while (2 == (auto_qT.size / 2)) {
      playk = 20 >= update_qm.length;
      break;
   }

        if (this.showLog) console.log('trigger event id:', BControls.BBellGpay);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        AnalyticsUtil.onEventWithMap(BControls.BCombine, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BAccepted,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BCombine);
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
       let mintegralh = String.fromCharCode(105,95,53,50,95,112,111,115,108,105,115,116,115,0);
    let with_wg = String.fromCharCode(105,95,49,50,95,97,114,114,97,110,103,101,100,0);
    let actionsT = 0.0;
    let moono = String.fromCharCode(105,95,55,95,118,97,108,117,108,101,0);
    let viewsS: Map<any, any> = new Map([[String.fromCharCode(101,95,55,49,95,99,101,108,108,117,108,97,114,0),false ], [String.fromCharCode(99,108,97,115,115,105,102,121,95,48,95,48,0),false ]]);
    let macauP = false;
    let sideu: Array<any> = [594, 698, 568];
    let historyj = 4;
    let temperaturet = String.fromCharCode(97,95,56,55,95,115,116,101,114,101,111,100,0);
   let link0 = with_wg.length >= 5285018;
   do {
      with_wg = `${sideu.length | with_wg.length}`;
      if (link0) {
         break;
      }
   } while ((!with_wg.startsWith(`${actionsT}`)) && link0);
   let predictionl = 6339308 >= viewsS.size;
   do {
       let whistle6: Array<any> = [316, 806, 80];
       let becomeI = 0.0;
       let searchbarz = String.fromCharCode(113,95,49,49,95,115,104,97,108,108,0);
       let arrowY: Array<any> = [518, 826, 982];
         becomeI -= parseFloat(`${3}`);
          let tooltipsc = String.fromCharCode(115,108,105,99,101,100,95,54,95,55,51,0);
          let detailp: Array<any> = [374, 883, 766];
         whistle6 = [tooltipsc.length ^ 2];
         tooltipsc += `${detailp.length}`;
         detailp = [1];
      if (becomeI == parseFloat(`${arrowY.length}`)) {
         arrowY = [searchbarz.length];
      }
      let transferj = 5314215 >= arrowY.length;
      do {
         arrowY.push(3 ^ arrowY.length);
         if (transferj) {
            break;
         }
      } while (((arrowY.length ^ 2) <= 1) && transferj);
         searchbarz = `${2 * arrowY.length}`;
         arrowY = [whistle6.length % (Math.max(10, searchbarz.length))];
      let logoutb = 5260773.0 >= becomeI;
      do {
         becomeI /= Math.max(3, parseFloat(`${searchbarz.length}`));
         if (logoutb) {
            break;
         }
      } while (logoutb && (5.79 <= becomeI));
      for (let r = 0; r < 3; r++) {
         searchbarz = `${whistle6.length}`;
      }
      while (3 >= searchbarz.length) {
          let auto_u5b = String.fromCharCode(110,95,52,57,95,115,117,112,101,114,0);
          let stationn = 2.0;
          let fieldv: Array<any> = [544, 428, 296];
          let loginE = 4.0;
         whistle6.push(searchbarz.length);
         auto_u5b = `${fieldv.length}`;
         stationn /= Math.max(parseFloat(`${fieldv.length << (Math.min(4, Math.abs(parseInt(`${loginE}`))))}`), 2);
         loginE /= Math.max(2, parseFloat(`${parseInt(`${stationn}`)}`));
         break;
      }
         becomeI -= parseFloat(`${2}`);
       let mbnativeadvanced8 = 3.0;
       let reportI = 1.0;
         reportI += parseFloat(`${searchbarz.length}`);
      viewsS.set(`${becomeI}`, parseInt(`${becomeI}`) * whistle6.length);
      if (predictionl) {
         break;
      }
   } while (predictionl && (viewsS.size >= moono.length));
       let ajaxC = 3.0;
       let referrere = 2;
       let sort6 = String.fromCharCode(100,95,52,95,101,121,101,100,114,111,112,112,101,114,0);
         ajaxC -= (String.fromCharCode(65,0) == sort6 ? parseInt(`${ajaxC}`) : sort6.length);
         ajaxC -= parseInt(`${ajaxC}`);
      let phoneT = 7274690.0 <= ajaxC;
      do {
         ajaxC /= Math.max(referrere * parseInt(`${ajaxC}`), 2);
         if (phoneT) {
            break;
         }
      } while ((referrere <= 1) && phoneT);
      if ((sort6.length * referrere) > 4 && 2 > (referrere * 4)) {
         referrere += sort6.length;
      }
      while ((2 * parseInt(`${ajaxC}`)) >= 4 || (ajaxC * sort6.length) >= 5.47) {
         ajaxC /= Math.max(1, 1);
         break;
      }
          let rewardZ = String.fromCharCode(112,97,103,101,108,105,115,116,95,56,95,51,49,0);
         ajaxC += 2 * sort6.length;
         rewardZ += "3";
          let footballV = false;
         ajaxC += referrere;
         footballV = (footballV ? !footballV : footballV);
      let huaweif = String.fromCharCode(49,51,116,103,100,0) == sort6;
      do {
         sort6 = "2";
         if (huaweif) {
            break;
         }
      } while ((3 <= (sort6.length / (Math.max(1, 4)))) && huaweif);
       let containerY: Array<any> = [555, 802];
      with_wg += `${sort6.length / (Math.max(9, referrere))}`;
   while (macauP || (sideu.length ^ 4) >= 4) {
      sideu.push(moono.length);
      break;
   }
   if (!mintegralh.endsWith(`${macauP}`)) {
      mintegralh += "1";
   }

        AnalyticsUtil.onEventWithMap(BControls.BHoverClear, {});

      with_wg = `${(String.fromCharCode(105,0) == mintegralh ? mintegralh.length : sideu.length)}`;
       let roomh: Map<any, any> = new Map([[String.fromCharCode(120,95,52,49,95,115,116,101,112,112,101,100,0),String.fromCharCode(97,95,53,53,95,109,97,121,98,101,0)], [String.fromCharCode(98,110,100,101,99,95,121,95,51,55,0),String.fromCharCode(108,95,55,50,95,99,97,109,101,114,97,0)], [String.fromCharCode(122,95,55,49,95,111,118,97,108,0),String.fromCharCode(108,95,56,48,95,112,117,98,108,105,99,105,116,121,0)]]);
       let y_viewY = 3;
       let tick5 = 4;
      if (Array.from(roomh.keys()).includes(`${y_viewY}`)) {
         roomh = new Map([[`${y_viewY}`, y_viewY >> (Math.min(Math.abs(1), 3))]]);
      }
      let bootsplash4 = 7415980 >= tick5;
      do {
         tick5 <<= Math.min(3, Math.abs(y_viewY - 3));
         if (bootsplash4) {
            break;
         }
      } while ((tick5 >= y_viewY) && bootsplash4);
      let sheetv = roomh.size <= 5893127;
      do {
         roomh = new Map([[`${y_viewY}`, y_viewY]]);
         if (sheetv) {
            break;
         }
      } while (sheetv && ((5 & roomh.size) < 2 && 2 < (5 & roomh.size)));
         y_viewY %= Math.max(1, 2);
          let tickedV: Array<any> = [String.fromCharCode(101,118,97,115,97,112,112,95,103,95,54,50,0), String.fromCharCode(97,95,54,56,95,103,114,111,117,112,110,97,109,101,115,0)];
          let mbbannerO: Map<any, any> = new Map([[String.fromCharCode(107,95,50,52,95,99,111,114,114,0),31], [String.fromCharCode(107,95,48,95,100,105,115,116,114,105,98,117,116,101,100,0),501], [String.fromCharCode(106,95,55,49,95,110,105,109,97,116,105,111,110,0),643]]);
          let megaphoneQ = String.fromCharCode(110,95,49,48,48,95,97,108,115,97,0);
         y_viewY += tick5;
         tickedV = [tickedV.length];
         mbbannerO.set(megaphoneQ, megaphoneQ.length | mbbannerO.size);
       let tickW: Array<any> = [785, 52, 79];
          let roomF = 0.0;
          let arrowa = String.fromCharCode(122,95,49,56,95,118,100,97,115,104,101,114,0);
         roomh = new Map([[arrowa, parseInt(`${roomF}`)]]);
       let checkboxd = String.fromCharCode(99,95,49,48,48,95,118,101,99,116,111,114,115,0);
       let basketballm = String.fromCharCode(97,114,103,95,53,95,52,48,0);
       let middle0 = 2.0;
      macauP = moono.length > 65 && temperaturet.length > 65;
   if (temperaturet.includes(`${viewsS.size}`)) {
       let playlistz = String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,95,107,95,51,53,0);
          let analyticsL = 5.0;
         playlistz += `${playlistz.length + parseInt(`${analyticsL}`)}`;
      for (let t = 0; t < 1; t++) {
         playlistz += `${playlistz.length}`;
      }
      if (playlistz == String.fromCharCode(107,0)) {
          let zhuboR = true;
          let connection5 = false;
          let productW = String.fromCharCode(120,95,55,57,95,99,114,121,115,116,97,108,104,100,0);
         playlistz = `${productW.length | 1}`;
         zhuboR = connection5;
         productW = `${(1 - (connection5 ? 2 : 4))}`;
      }
      temperaturet += "3";
   }
   for (let f = 0; f < 2; f++) {
       let interstitialQ = String.fromCharCode(101,101,112,95,55,95,52,55,0);
       let renewi = false;
       let expandX = 3.0;
      if (1 < interstitialQ.length) {
         renewi = 84.31 < expandX;
      }
      while (2.38 <= (2.21 * expandX) && 2.21 <= expandX) {
          let floaterF = String.fromCharCode(112,101,101,114,105,100,95,104,95,52,54,0);
          let videoj = 2;
          let sentryJ: Array<any> = [String.fromCharCode(118,95,56,54,95,110,105,100,108,110,0), String.fromCharCode(114,95,54,51,95,100,105,115,99,117,115,115,105,111,110,0)];
          let mintegralQ = String.fromCharCode(100,95,57,52,95,112,97,115,116,101,98,111,97,114,100,0);
          let pointP = String.fromCharCode(122,95,54,52,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,0);
         expandX -= (mintegralQ == String.fromCharCode(74,0) ? sentryJ.length : mintegralQ.length);
         floaterF += `${2 | videoj}`;
         videoj /= Math.max(videoj % 1, 5);
         sentryJ = [videoj];
         pointP += `${pointP.length}`;
         break;
      }
      if (interstitialQ.length < 2) {
         renewi = expandX >= 30.62;
      }
      for (let p = 0; p < 1; p++) {
         renewi = interstitialQ.length < 53;
      }
      while (5 >= interstitialQ.length || renewi) {
         interstitialQ = `${parseInt(`${expandX}`) >> (Math.min(5, Math.abs(1)))}`;
         break;
      }
      if (expandX == 2.75) {
          let ajaxz: Array<any> = [318, 458, 636];
          let nterstitial2 = String.fromCharCode(122,95,57,95,99,108,105,99,107,115,0);
          let nativeexL = true;
          let upgradeu: Array<any> = [String.fromCharCode(100,101,108,101,116,101,100,95,112,95,50,55,0), String.fromCharCode(112,95,49,48,48,95,115,116,97,121,0), String.fromCharCode(107,95,49,48,48,95,120,115,117,98,0)];
          let mathe: Map<any, any> = new Map([[String.fromCharCode(105,110,115,101,114,116,105,110,103,95,97,95,54,52,0),true ], [String.fromCharCode(100,109,97,98,117,102,95,119,95,49,48,0),true ], [String.fromCharCode(116,95,53,52,95,101,115,116,105,109,97,116,101,100,0),false ]]);
         interstitialQ = `${parseInt(`${expandX}`)}`;
         ajaxz = [3];
         nterstitial2 = `${nterstitial2.length * 2}`;
         nativeexL = (upgradeu.length ^ ajaxz.length) >= 20;
         upgradeu = [nterstitial2.length];
         mathe = new Map([[`${mathe.size}`, 3]]);
      }
         interstitialQ = `${((renewi ? 3 : 3) * parseInt(`${expandX}`))}`;
         renewi = !renewi;
      let confirmationc = renewi ? !renewi : renewi;
      do {
         renewi = interstitialQ.length == 61;
         if (confirmationc) {
            break;
         }
      } while (confirmationc && (interstitialQ.length <= 2 || renewi));
      viewsS.set(`${renewi}`, ((renewi ? 5 : 1) | viewsS.size));
   }
      sideu = [sideu.length + 1];
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BIndexXvod,
        });

   for (let g = 0; g < 1; g++) {
      viewsS = new Map([[moono, parseInt(`${actionsT}`)]]);
   }
   for (let j = 0; j < 2; j++) {
      sideu.push(mintegralh.length ^ historyj);
   }
      sideu = [with_wg.length];
   let customd = actionsT <= 7679776.0;
   do {
      actionsT -= moono.length;
      if (customd) {
         break;
      }
   } while ((historyj < 1) && customd);
      historyj %= Math.max(historyj, 3);

        if (this.showLog) console.log('trigger event id:', BControls.BHoverClear);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        AnalyticsUtil.onEventWithMap(BControls.BSound, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BIndexXvod,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BSound);
    }


    
    static playlistViewsAnalytics = () => {
       let read5: Map<any, any> = new Map([[String.fromCharCode(121,95,49,53,95,99,111,112,121,99,111,111,107,101,114,0),false ], [String.fromCharCode(103,95,57,95,111,116,111,115,0),true ]]);
    let shootd = 4.0;
    let panglek = false;
    let detailr = 0.0;
    let turnp: Map<any, any> = new Map([[String.fromCharCode(115,99,111,112,101,100,95,54,95,53,56,0),288], [String.fromCharCode(102,95,52,51,95,101,120,105,115,116,101,100,0),885], [String.fromCharCode(97,95,55,56,95,102,111,114,119,97,114,100,0),768]]);
    let senda: Map<any, any> = new Map([[String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,109,95,57,50,0),794], [String.fromCharCode(107,95,51,48,95,99,111,109,112,111,115,105,116,105,110,103,0),522], [String.fromCharCode(111,102,102,101,115,116,95,53,95,55,51,0),215]]);
    let ticked1: Map<any, any> = new Map([[String.fromCharCode(104,101,97,114,116,95,51,95,56,51,0),String.fromCharCode(111,95,53,52,95,112,97,99,101,114,0)], [String.fromCharCode(112,108,97,99,101,109,97,114,107,95,99,95,52,57,0),String.fromCharCode(114,111,117,110,100,110,101,115,115,95,120,95,55,48,0)]]);
    let stepy = 2;
    let fieldp = String.fromCharCode(108,95,55,55,95,114,101,108,97,117,110,99,104,0);
      read5 = new Map([[`${read5.size}`, ticked1.size << (Math.min(Math.abs(2), 4))]]);
      read5.set(`${shootd}`, ticked1.size);
      turnp.set(`${turnp.size}`, 3 % (Math.max(6, turnp.size)));
       let updatesO = String.fromCharCode(117,95,56,54,95,114,101,110,100,101,114,98,117,102,102,101,114,0);
       let pressurex = 2;
         updatesO = `${updatesO.length | 3}`;
      while (2 < pressurex) {
         updatesO += `${updatesO.length}`;
         break;
      }
       let overlayn: Map<any, any> = new Map([[String.fromCharCode(115,95,54,49,95,115,101,109,105,0),667], [String.fromCharCode(97,99,102,105,108,116,101,114,95,56,95,50,54,0),608], [String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,48,95,57,57,0),162]]);
         pressurex ^= pressurex & 1;
      if (2 > (updatesO.length % (Math.max(7, pressurex))) || 1 > (updatesO.length % 2)) {
         pressurex |= 3 + overlayn.size;
      }
          let nalyticsD: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,115,108,105,100,101,0),636], [String.fromCharCode(118,95,51,51,95,115,117,98,118,97,108,117,101,0),533]]);
         pressurex *= pressurex;
         nalyticsD.set(`${nalyticsD.size}`, nalyticsD.size);
      stepy /= Math.max(2, ((panglek ? 1 : 4) | parseInt(`${detailr}`)));
      ticked1.set(`${stepy}`, 2 + stepy);

        AnalyticsUtil.onEventWithMap(BControls.BEmojiButton, {});

   if (1.98 > (shootd - 2.70) && (shootd - 2.70) > 4.84) {
       let button9 = String.fromCharCode(117,95,57,56,95,101,116,104,101,114,116,117,112,108,105,115,0);
       let yinge = String.fromCharCode(114,101,116,117,114,110,101,100,95,117,95,55,54,0);
       let viewerm = false;
         yinge += `${yinge.length}`;
          let floatingB = String.fromCharCode(101,120,116,109,97,112,95,99,95,53,57,0);
          let lang8 = 0;
         viewerm = !viewerm;
         floatingB += `${floatingB.length}`;
         lang8 -= lang8;
         button9 = "2";
      while (yinge.startsWith(`${viewerm}`)) {
         yinge = `${((viewerm ? 5 : 4) >> (Math.min(Math.abs(1), 3)))}`;
         break;
      }
         button9 = `${button9.length}`;
         viewerm = button9 == yinge;
          let hoverX = 1;
         yinge = `${yinge.length / 2}`;
         hoverX <<= Math.min(5, Math.abs(hoverX));
      let home9 = viewerm ? !viewerm : viewerm;
      do {
          let awayB = 5.0;
         viewerm = (yinge.length & button9.length) > 80;
         awayB += parseFloat(`${parseInt(`${awayB}`)}`);
         if (home9) {
            break;
         }
      } while (home9 && (4 > button9.length));
      while (yinge.length > 1) {
         button9 += `${(2 & (viewerm ? 5 : 2))}`;
         break;
      }
      read5 = new Map([[`${turnp.size}`, turnp.size - yinge.length]]);
   }
       let modall = String.fromCharCode(109,97,114,107,100,111,119,110,95,120,95,52,53,0);
       let sigmobU = String.fromCharCode(99,95,53,50,95,107,101,101,112,0);
         sigmobU = `${modall.length * sigmobU.length}`;
      if (!modall.endsWith(`${sigmobU.length}`)) {
         sigmobU += `${sigmobU.length}`;
      }
      let redirectW = sigmobU.length <= 8993051;
      do {
          let searche = String.fromCharCode(101,120,104,97,117,115,116,101,100,95,108,95,53,54,0);
         sigmobU = `${sigmobU.length}`;
         searche += "1";
         if (redirectW) {
            break;
         }
      } while (redirectW && (modall != String.fromCharCode(121,0) || sigmobU.length > 1));
      let middleware6 = modall.length <= 5114189;
      do {
         modall += `${(modall == String.fromCharCode(117,0) ? sigmobU.length : modall.length)}`;
         if (middleware6) {
            break;
         }
      } while (middleware6 && (sigmobU == String.fromCharCode(106,0) || modall.length >= 5));
       let malaysiaS: Array<any> = [472, 700];
       let dialogs: Array<any> = [65, 773];
          let kuaishouq = 5;
         dialogs = [1];
         kuaishouq |= kuaishouq;
      detailr += fieldp.length;
       let malaysiao = 5.0;
       let stepS = String.fromCharCode(119,95,54,49,95,98,97,110,110,101,100,0);
       let currentO: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,0),true ], [String.fromCharCode(110,101,116,115,95,48,95,57,50,0),false ]]);
         stepS = `${(String.fromCharCode(116,0) == stepS ? parseInt(`${malaysiao}`) : stepS.length)}`;
          let package_pH = String.fromCharCode(97,116,116,105,98,117,116,101,95,104,95,57,48,0);
          let long__rs = 1.0;
          let short_l1o = 4.0;
         stepS += `${parseInt(`${short_l1o}`)}`;
         package_pH = `${parseInt(`${long__rs}`)}`;
         long__rs /= Math.max(3, 2);
         stepS = `${parseInt(`${malaysiao}`)}`;
          let streamingd = 4.0;
          let orientationV = String.fromCharCode(100,95,50,48,95,100,99,111,110,108,121,0);
         stepS = `${currentO.size}`;
         streamingd *= (parseFloat(`${String.fromCharCode(119,0) == orientationV ? orientationV.length : parseInt(`${streamingd}`)}`));
         stepS = `${currentO.size}`;
          let matchesD = String.fromCharCode(118,95,55,56,95,99,108,105,112,98,111,97,114,100,0);
          let logoutA = 5;
          let borderlessR: Array<any> = [917, 84, 934];
         currentO = new Map([[`${borderlessR.length}`, borderlessR.length % (Math.max(6, stepS.length))]]);
         matchesD += "1";
         logoutA %= Math.max((String.fromCharCode(99,0) == matchesD ? logoutA : matchesD.length), 2);
          let nativeexN = 4.0;
         currentO = new Map([[`${malaysiao}`, 2 ^ parseInt(`${malaysiao}`)]]);
         nativeexN /= Math.max(1, parseFloat(`${parseInt(`${nativeexN}`) << (Math.min(Math.abs(parseInt(`${nativeexN}`)), 4))}`));
         currentO.set(`${stepS}`, currentO.size);
      if (stepS.length > currentO.size) {
          let recommendation1 = 2.0;
          let reactf: Map<any, any> = new Map([[String.fromCharCode(110,111,99,104,101,99,107,95,57,95,54,0),815], [String.fromCharCode(115,112,108,105,116,116,105,110,103,95,53,95,55,52,0),139], [String.fromCharCode(102,95,57,48,95,105,110,118,97,114,105,97,110,116,115,0),203]]);
         stepS += `${stepS.length ^ parseInt(`${recommendation1}`)}`;
         recommendation1 /= Math.max(parseFloat(`${2 | reactf.size}`), 4);
         reactf = new Map([[`${reactf.size}`, reactf.size]]);
      }
      senda = new Map([[`${ticked1.size}`, parseInt(`${detailr}`)]]);
       let ying_: Array<any> = [String.fromCharCode(117,95,49,95,115,101,103,102,101,97,116,117,114,101,115,0), String.fromCharCode(105,110,100,105,99,97,116,101,100,95,113,95,54,48,0)];
       let mbridgeR = false;
       let unreadZ: Map<any, any> = new Map([[String.fromCharCode(114,111,98,105,110,95,51,95,50,56,0),String.fromCharCode(113,95,51,53,95,100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0)], [String.fromCharCode(114,101,118,101,114,115,101,100,95,98,95,53,57,0),String.fromCharCode(106,95,53,54,95,99,104,105,114,112,0)]]);
      let fullx = 7928263 <= unreadZ.size;
      do {
          let vieweri = String.fromCharCode(99,117,109,101,95,119,95,51,53,0);
          let firebasei = String.fromCharCode(122,95,57,54,95,112,104,114,97,115,101,115,0);
          let sideB: Map<any, any> = new Map([[String.fromCharCode(111,114,105,103,110,97,108,95,104,95,54,48,0),319], [String.fromCharCode(112,97,112,101,114,115,95,111,95,55,57,0),104], [String.fromCharCode(118,95,54,51,95,115,98,114,100,115,112,0),370]]);
          let dropdowng = String.fromCharCode(97,95,55,51,95,114,97,119,118,105,100,101,111,0);
         unreadZ.set(firebasei, firebasei.length % (Math.max(2, 6)));
         vieweri += `${vieweri.length / 1}`;
         sideB.set(dropdowng, sideB.size);
         dropdowng += `${dropdowng.length / (Math.max(5, vieweri.length))}`;
         if (fullx) {
            break;
         }
      } while (fullx && (!mbridgeR));
      while (mbridgeR) {
         mbridgeR = null != unreadZ.get(`${mbridgeR}`);
         break;
      }
         ying_.push(unreadZ.size);
      while (5 > (1 + unreadZ.size) && 1 > unreadZ.size) {
         mbridgeR = ying_.includes(mbridgeR);
         break;
      }
      for (let a = 0; a < 1; a++) {
         mbridgeR = ying_.length < 94 || mbridgeR;
      }
      let splashQ = ying_.length <= 8156958;
      do {
         ying_ = [2];
         if (splashQ) {
            break;
         }
      } while ((4 == (3 - ying_.length) || (ying_.length - 3) == 3) && splashQ);
      for (let z = 0; z < 1; z++) {
          let fieldb = 0.0;
          let searchd = 4.0;
          let handlerN: Map<any, any> = new Map([[String.fromCharCode(101,95,57,57,95,101,120,112,111,114,116,0),166], [String.fromCharCode(99,111,109,112,108,101,116,101,95,54,95,52,0),511]]);
          let sideBa = true;
          let activityp = String.fromCharCode(112,111,111,108,115,95,99,95,51,57,0);
         mbridgeR = unreadZ.get(`${searchd}`) == null;
         fieldb *= (parseFloat(`${activityp.length >> (Math.min(2, Math.abs((sideBa ? 2 : 5))))}`));
         searchd *= parseFloat(`${handlerN.size << (Math.min(Math.abs(3), 2))}`);
         handlerN = new Map([[`${sideBa}`, ((sideBa ? 1 : 5) & activityp.length)]]);
      }
          let diceA = String.fromCharCode(101,95,51,50,95,101,116,104,101,114,0);
         mbridgeR = diceA.startsWith(`${mbridgeR}`);
         ying_ = [2];
      read5.set(`${stepy}`, parseInt(`${detailr}`));
   if (!Array.from(senda.values()).includes(stepy)) {
      stepy &= read5.size & senda.size;
   }
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BUntick,
        });

       let splashQm = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,54,95,49,56,0);
       let station1 = String.fromCharCode(106,95,55,49,95,112,114,101,99,111,109,112,0);
      for (let p = 0; p < 1; p++) {
         splashQm += `${station1.length / 1}`;
      }
         station1 += `${splashQm.length}`;
         splashQm = `${splashQm.length}`;
      while (station1 != String.fromCharCode(80,0)) {
          let backgroundK = 4.0;
          let collectiony = 3.0;
         splashQm = "1";
         backgroundK += parseFloat(`${2 % (Math.max(parseInt(`${backgroundK}`), 10))}`);
         collectiony -= parseFloat(`${parseInt(`${backgroundK}`)}`);
         break;
      }
          let mimos = true;
          let countdowny: Map<any, any> = new Map([[String.fromCharCode(112,111,108,108,115,95,108,95,53,49,0),String.fromCharCode(116,95,57,55,95,112,108,97,110,97,114,120,0)], [String.fromCharCode(107,98,100,119,105,110,95,120,95,52,0),String.fromCharCode(99,95,53,95,110,111,110,110,117,108,108,0)], [String.fromCharCode(102,97,99,116,111,114,121,95,121,95,53,0),String.fromCharCode(108,95,50,57,95,105,110,116,101,114,97,99,116,105,118,101,108,121,0)]]);
         splashQm += "2";
         mimos = (94 > ((!mimos ? countdowny.size : 66) << (Math.min(Math.abs(countdowny.size), 2))));
          let pointK = 0.0;
          let sourceN = 5.0;
          let playlist2: Array<any> = [521, 630];
         station1 += "1";
         pointK *= parseInt(`${sourceN}`) + playlist2.length;
         sourceN /= Math.max(1, 2);
         playlist2 = [parseInt(`${sourceN}`) | 1];
      shootd -= parseFloat(`${2}`);
   if (4 > turnp.size && 1 > (turnp.size % 4)) {
      panglek = 64 == ticked1.size && 64 == read5.size;
   }
   for (let s = 0; s < 1; s++) {
      senda.set(`${detailr}`, parseInt(`${detailr}`) - turnp.size);
   }
   for (let o = 0; o < 2; o++) {
      panglek = !panglek || read5.size == 50;
   }
      shootd /= Math.max(1, parseFloat(`${2}`));

        if (this.showLog) console.log('trigger event id:', BControls.BEmojiButton);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(BControls.BUpload, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BUntick,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BUpload);
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(BControls.BMiddleware, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BInjuryM,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BMiddleware);
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(BControls.BActions, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BInjuryM,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BActions);
    }


    
    static userCenterLoginSuccessTimesAnalytics = () => {
       let tickedh = 3.0;
    let suggestioni: Map<any, any> = new Map([[String.fromCharCode(116,101,110,115,105,111,110,95,103,95,51,55,0),925], [String.fromCharCode(108,95,50,48,95,102,114,97,103,109,101,110,116,115,0),516], [String.fromCharCode(120,95,52,51,95,115,117,98,115,116,105,116,117,116,101,100,0),683]]);
    let reducerT = String.fromCharCode(120,95,51,57,95,109,117,108,0);
    let animationS: Array<any> = [216, 310, 839];
    let kuaishouI: Array<any> = [968, 561, 388];
    let baidux = 0.0;
    let shrinkx = String.fromCharCode(105,95,51,56,95,116,114,97,99,107,105,110,103,0);
   if (!shrinkx.startsWith(`${suggestioni.size}`)) {
      suggestioni.set(shrinkx, shrinkx.length % (Math.max(8, parseInt(`${baidux}`))));
   }
   let albumD = shrinkx.length <= 5503480;
   do {
       let launcherf = String.fromCharCode(115,99,104,117,110,99,107,95,112,95,55,55,0);
       let statsU = 2.0;
      while (launcherf.length == statsU) {
         statsU -= parseInt(`${statsU}`) - 3;
         break;
      }
         launcherf += `${launcherf.length + parseInt(`${statsU}`)}`;
          let macauj: Map<any, any> = new Map([[String.fromCharCode(118,95,57,50,95,118,97,99,97,110,116,0),646], [String.fromCharCode(100,101,102,105,110,101,115,95,121,95,52,48,0),879]]);
          let grayA = 5.0;
          let arrowY = String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,103,95,50,57,0);
         launcherf = `${3 & parseInt(`${statsU}`)}`;
         macauj.set(`${grayA}`, parseInt(`${grayA}`) >> (Math.min(Math.abs(1), 2)));
         arrowY = `${arrowY.length}`;
         statsU -= 1 + launcherf.length;
          let klevinQ = String.fromCharCode(112,108,117,103,103,101,100,95,101,95,51,49,0);
         statsU += klevinQ.length;
         statsU *= launcherf.length;
      shrinkx = `${launcherf.length / 1}`;
      if (albumD) {
         break;
      }
   } while (albumD && (5 <= (shrinkx.length & 4)));
   if (Array.from(suggestioni.keys()).includes(`${baidux}`)) {
      baidux += 3;
   }
   let dropdown2 = reducerT.length <= 8330137;
   do {
      reducerT += `${2 + shrinkx.length}`;
      if (dropdown2) {
         break;
      }
   } while (dropdown2 && (5 >= reducerT.length));
      reducerT = `${1 + animationS.length}`;

        AnalyticsUtil.onEventWithMap(BControls.BVignetteStyle, {});

      animationS.push(shrinkx.length);
       let sideO = true;
       let greyu = String.fromCharCode(99,108,117,115,116,95,99,95,54,55,0);
       let zoom1 = 4;
      for (let j = 0; j < 1; j++) {
         greyu += `${((sideO ? 2 : 3) | 1)}`;
      }
      for (let h = 0; h < 3; h++) {
         zoom1 <<= Math.min(3, Math.abs(1));
      }
      while (2 < greyu.length) {
         greyu += `${((sideO ? 1 : 1) - zoom1)}`;
         break;
      }
         zoom1 ^= ((sideO ? 4 : 3) * greyu.length);
         greyu = `${3 ^ greyu.length}`;
         sideO = !sideO;
         greyu += `${greyu.length / 1}`;
       let brightnesst = String.fromCharCode(117,110,105,116,116,101,115,116,95,50,95,49,48,0);
       let infof = String.fromCharCode(111,112,117,115,116,97,98,95,121,95,51,53,0);
         greyu += `${3 + infof.length}`;
      reducerT = `${parseInt(`${tickedh}`) % 3}`;
   let injury5 = 5265731 >= suggestioni.size;
   do {
      suggestioni = new Map([[`${kuaishouI.length}`, 2 & shrinkx.length]]);
      if (injury5) {
         break;
      }
   } while ((shrinkx.length == suggestioni.size) && injury5);
   for (let y = 0; y < 2; y++) {
      animationS = [1];
   }
      baidux *= parseInt(`${tickedh}`) / 1;
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BResult,
        });

   let blacklistB = baidux >= 5694474.0;
   do {
      baidux += 2;
      if (blacklistB) {
         break;
      }
   } while (blacklistB && ((tickedh / 2) <= 2.99));
       let combineO = 0.0;
         combineO += parseFloat(`${parseInt(`${combineO}`) << (Math.min(2, Math.abs(3)))}`);
       let telegramJ = true;
          let referrerj = String.fromCharCode(98,116,114,101,101,95,112,95,49,56,0);
          let collection_ = String.fromCharCode(108,95,57,57,95,99,111,109,112,114,101,115,115,111,114,0);
         telegramJ = String.fromCharCode(48,0) == collection_;
         referrerj = "2";
         collection_ += `${referrerj.length & referrerj.length}`;
      reducerT = `${parseInt(`${baidux}`)}`;
   while (suggestioni.size > 5) {
       let changea = 4.0;
       let action8 = true;
       let closeT = 1.0;
       let regenga = false;
      let heartA = regenga ? !regenga : regenga;
      do {
         regenga = !regenga;
         if (heartA) {
            break;
         }
      } while ((3.13 < closeT || 2.51 < (closeT + 3.13)) && heartA);
      while (regenga) {
         closeT -= (parseFloat(`${(action8 ? 1 : 2) << (Math.min(Math.abs(parseInt(`${closeT}`)), 4))}`));
         break;
      }
         action8 = (!regenga ? !action8 : !regenga);
      if (action8) {
          let founda = String.fromCharCode(112,95,57,50,95,98,114,105,100,103,101,100,0);
         changea /= Math.max(4, parseInt(`${changea}`) ^ 1);
         founda = `${founda.length}`;
      }
         changea += (parseInt(`${closeT}`) & (regenga ? 1 : 5));
      let unreadx = regenga ? !regenga : regenga;
      do {
         regenga = !regenga;
         if (unreadx) {
            break;
         }
      } while (unreadx && (5.34 < changea));
         closeT -= parseFloat(`${parseInt(`${closeT}`) % 2}`);
       let middlewareL = String.fromCharCode(112,95,54,95,110,111,116,99,104,0);
       let calendarS = String.fromCharCode(121,95,57,57,95,104,100,99,100,0);
       let stept: Map<any, any> = new Map([[String.fromCharCode(118,111,105,112,95,105,95,57,50,0),57], [String.fromCharCode(116,95,55,56,95,119,101,105,103,104,116,105,110,103,0),167], [String.fromCharCode(117,118,114,100,95,107,95,57,51,0),666]]);
       let holdere: Map<any, any> = new Map([[String.fromCharCode(117,95,54,50,95,99,111,110,118,101,114,116,111,114,0),908], [String.fromCharCode(114,105,100,103,101,95,109,95,53,54,0),184]]);
      while (middlewareL.length >= 5) {
          let resultQ = String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,97,95,57,50,0);
         changea -= parseInt(`${changea}`) | 1;
         resultQ += `${2 + resultQ.length}`;
         break;
      }
          let tramini_ = 0;
          let orientationh = 5.0;
         action8 = calendarS == String.fromCharCode(106,0);
         tramini_ += tramini_ % (Math.max(parseInt(`${orientationh}`), 10));
         orientationh /= Math.max(parseFloat(`${tramini_}`), 4);
         changea *= stept.size / 3;
      suggestioni.set(reducerT, kuaishouI.length);
      break;
   }
       let leftm: Map<any, any> = new Map([[String.fromCharCode(104,95,49,48,48,95,115,117,99,104,0),954], [String.fromCharCode(105,95,54,54,95,102,114,97,109,101,102,111,114,109,97,116,0),892], [String.fromCharCode(103,114,97,100,95,51,95,55,53,0),177]]);
       let unselectedb = String.fromCharCode(100,95,55,51,95,115,108,97,118,101,115,0);
       let hejiN = String.fromCharCode(97,95,53,53,95,103,114,111,117,110,100,0);
      let thailandR = 7570755 >= unselectedb.length;
      do {
          let clearT = true;
          let borderlessz = String.fromCharCode(117,95,53,49,95,100,101,108,105,118,101,114,101,100,0);
          let mode9 = 3.0;
          let shrinkM = false;
         unselectedb += `${hejiN.length}`;
         clearT = !shrinkM || !clearT;
         borderlessz += `${1 >> (Math.min(Math.abs(parseInt(`${mode9}`)), 3))}`;
         mode9 *= parseFloat(`${1}`);
         if (thailandR) {
            break;
         }
      } while ((unselectedb.length > 3) && thailandR);
      while (hejiN == String.fromCharCode(105,0)) {
         unselectedb += `${2 * leftm.size}`;
         break;
      }
         unselectedb += `${3 ^ hejiN.length}`;
      while (unselectedb.length == hejiN.length) {
         unselectedb = "1";
         break;
      }
      while (hejiN.startsWith(`${leftm.size}`)) {
         leftm.set(unselectedb, hejiN.length & 3);
         break;
      }
      for (let s = 0; s < 3; s++) {
         leftm.set(unselectedb, unselectedb.length - 1);
      }
      if ((1 * leftm.size) >= 4 || (hejiN.length * leftm.size) >= 1) {
         hejiN += `${leftm.size}`;
      }
         unselectedb = `${unselectedb.length << (Math.min(3, Math.abs(leftm.size)))}`;
      for (let k = 0; k < 3; k++) {
         unselectedb += `${unselectedb.length << (Math.min(Math.abs(3), 5))}`;
      }
      baidux /= Math.max(1, 1);
   while ((baidux * tickedh) >= 2.27) {
      tickedh -= parseFloat(`${shrinkx.length >> (Math.min(Math.abs(1), 4))}`);
      break;
   }

        if (this.showLog) console.log('trigger event id:', BControls.BVignetteStyle);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
       let layoutK = String.fromCharCode(114,95,49,55,95,109,111,110,116,104,115,0);
    let selecte = 5.0;
    let dplus7: Array<any> = [890, 817];
    let selectedp = false;
    let sansO = true;
    let notificatione = String.fromCharCode(118,105,100,101,111,100,115,112,95,109,95,52,56,0);
    let greys = String.fromCharCode(117,95,55,51,95,115,99,101,110,101,0);
      dplus7 = [notificatione.length / 2];
      greys += `${((selectedp ? 5 : 1))}`;
       let mbsplashb = 4.0;
       let modelsS = 0.0;
         mbsplashb /= Math.max(parseInt(`${modelsS}`), 2);
       let circle9 = 2.0;
       let football3 = 1.0;
         modelsS *= parseInt(`${football3}`) % 3;
      for (let e = 0; e < 3; e++) {
         mbsplashb += 2;
      }
          let whistle6: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,48,95,50,53,0),84], [String.fromCharCode(98,101,103,105,110,115,95,54,95,51,54,0),513], [String.fromCharCode(101,110,116,105,114,101,95,120,95,53,51,0),753]]);
         modelsS += parseInt(`${modelsS}`) / 3;
         whistle6.set(`${whistle6.size}`, whistle6.size | 1);
      let emojic = 9044971.0 <= mbsplashb;
      do {
         mbsplashb *= parseInt(`${modelsS}`);
         if (emojic) {
            break;
         }
      } while (emojic && (2.12 >= (football3 * 2.73) && (2.73 * football3) >= 5.100));
      dplus7 = [parseInt(`${modelsS}`) ^ 3];
   if ((layoutK.length >> (Math.min(Math.abs(1), 2))) < 3 && 1 < (layoutK.length - parseInt(`${selecte}`))) {
      selecte *= (parseFloat(`${(sansO ? 4 : 1) << (Math.min(4, Math.abs((selectedp ? 2 : 4))))}`));
   }

        AnalyticsUtil.onEventWithMap(BControls.BActivityDebug, {});

      dplus7.push(((sansO ? 3 : 5) + 1));
       let l_centerQ = false;
       let subsL: Map<any, any> = new Map([[String.fromCharCode(110,95,56,50,95,112,114,101,114,111,108,108,0),743], [String.fromCharCode(112,97,99,107,97,103,101,95,98,95,54,50,0),471]]);
      while (l_centerQ) {
         l_centerQ = ((subsL.size << (Math.min(2, Math.abs((!l_centerQ ? subsL.size : 56))))) < 60);
         break;
      }
      for (let t = 0; t < 1; t++) {
         subsL.set(`${l_centerQ}`, (subsL.size - (l_centerQ ? 5 : 3)));
      }
         subsL.set(`${l_centerQ}`, 3);
      let nterstitial7 = l_centerQ ? !l_centerQ : l_centerQ;
      do {
          let verticalC = String.fromCharCode(104,95,55,53,95,118,100,97,116,97,0);
          let incidentT: Array<any> = [657, 939, 632];
          let borderlessG = 1.0;
          let libcrashsdkx = 5;
          let playercommon5 = 3;
         l_centerQ = borderlessG > 51.9 && 67 > verticalC.length;
         verticalC = "3";
         incidentT.push(2 | libcrashsdkx);
         borderlessG *= libcrashsdkx >> (Math.min(incidentT.length, 4));
         playercommon5 ^= playercommon5 / 3;
         if (nterstitial7) {
            break;
         }
      } while ((!l_centerQ) && nterstitial7);
         l_centerQ = !l_centerQ;
       let playercommonk: Array<any> = [900, 441];
       let button9: Array<any> = [801, 577];
      selectedp = !sansO;
      greys += `${((selectedp ? 2 : 2) - 1)}`;
       let u_imagev: Map<any, any> = new Map([[String.fromCharCode(109,95,54,95,110,97,118,0),301], [String.fromCharCode(98,112,115,95,115,95,50,56,0),566], [String.fromCharCode(97,114,103,118,95,121,95,50,56,0),348]]);
       let hooksb = false;
       let modulez = 0;
          let t_centert = String.fromCharCode(110,95,57,54,95,108,111,103,109,111,110,111,0);
         hooksb = modulez > 90 && hooksb;
         t_centert += `${t_centert.length / 3}`;
         hooksb = !hooksb;
         hooksb = !hooksb;
      if (Array.from(u_imagev.keys()).includes(`${modulez}`)) {
         u_imagev = new Map([[`${hooksb}`, modulez >> (Math.min(4, Math.abs(3)))]]);
      }
      let animationD = modulez >= 9365354;
      do {
         modulez /= Math.max(3, 3);
         if (animationD) {
            break;
         }
      } while (animationD && (!hooksb));
      if (5 <= (3 + modulez) || !hooksb) {
         modulez |= ((hooksb ? 1 : 2) + 3);
      }
      for (let w = 0; w < 2; w++) {
          let fastH = String.fromCharCode(115,112,108,105,116,116,101,114,95,116,95,49,51,0);
          let modityh = 2;
          let mbbidr = 2.0;
          let taiwan7 = String.fromCharCode(110,95,51,49,95,115,117,105,116,101,98,0);
         modulez *= modityh;
         fastH += `${(String.fromCharCode(114,0) == fastH ? fastH.length : taiwan7.length)}`;
         modityh ^= (taiwan7 == String.fromCharCode(117,0) ? parseInt(`${mbbidr}`) : taiwan7.length);
         mbbidr -= 3;
      }
      let matchesX = u_imagev.size <= 5176263;
      do {
          let successG = 1.0;
          let gradlem = 0;
         u_imagev.set(`${gradlem}`, u_imagev.size);
         successG += parseFloat(`${parseInt(`${successG}`)}`);
         gradlem %= Math.max(parseInt(`${successG}`) % (Math.max(parseInt(`${successG}`), 4)), 1);
         if (matchesX) {
            break;
         }
      } while ((4 == u_imagev.size) && matchesX);
      if (hooksb) {
         modulez &= u_imagev.size;
      }
      layoutK += `${3 ^ notificatione.length}`;
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BCombined,
        });

   if (selecte > 2.52) {
      selecte *= (parseFloat(`${String.fromCharCode(122,0) == notificatione ? dplus7.length : notificatione.length}`));
   }
   for (let x = 0; x < 2; x++) {
      greys = "2";
   }
      greys += `${((selectedp ? 2 : 1) / 1)}`;
   while (sansO) {
      sansO = String.fromCharCode(54,0) == notificatione;
      break;
   }

        if (this.showLog) console.log('trigger event id:', BControls.BActivityDebug);
    }

    static userCenterVipPayViewsAnalytics = () => {
       let foundQ = 2.0;
    let relatedc = false;
    let roundg: Array<any> = [588, 455];
    let modeI = 4.0;
    let layoutI = String.fromCharCode(112,111,108,121,103,111,110,95,103,95,53,50,0);
    let heart_ = 5;
    let steph: Map<any, any> = new Map([[String.fromCharCode(122,95,50,95,110,111,110,115,101,99,117,114,101,0),200], [String.fromCharCode(121,95,51,50,95,102,114,101,101,97,100,100,114,105,110,102,111,0),909]]);
    let appley = false;
   for (let h = 0; h < 2; h++) {
      heart_ >>= Math.min(4, Math.abs(2 - heart_));
   }
       let utilsL: Map<any, any> = new Map([[String.fromCharCode(115,101,116,95,110,95,55,50,0),260], [String.fromCharCode(103,97,109,109,97,95,52,95,50,54,0),434], [String.fromCharCode(97,99,104,101,95,49,95,57,51,0),854]]);
       let utils1: Array<any> = [555, 194, 126];
       let moonu = 3.0;
         utils1 = [utils1.length % 1];
         moonu += 2;
      let modity3 = moonu >= 5091954.0;
      do {
          let stepT: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,104,97,98,108,101,95,106,95,54,54,0),String.fromCharCode(107,95,53,56,95,112,116,115,101,115,0)], [String.fromCharCode(97,108,116,101,114,110,97,116,105,111,110,95,49,95,54,51,0),String.fromCharCode(99,117,114,114,101,110,100,95,108,95,52,51,0)], [String.fromCharCode(118,111,116,101,115,95,97,95,52,48,0),String.fromCharCode(101,95,49,56,95,99,111,109,112,97,114,101,114,115,0)]]);
          let controls7: Map<any, any> = new Map([[String.fromCharCode(116,95,55,48,95,121,117,118,109,111,110,111,0),true ], [String.fromCharCode(116,119,111,95,50,95,56,57,0),false ], [String.fromCharCode(99,111,110,116,95,105,95,54,52,0),true ]]);
          let launcher4 = false;
          let dialogP = false;
          let grayn: Map<any, any> = new Map([[String.fromCharCode(102,100,99,116,100,115,112,95,106,95,50,0),String.fromCharCode(108,95,49,57,95,100,98,105,0)], [String.fromCharCode(99,95,54,95,99,104,97,110,103,101,0),String.fromCharCode(107,95,57,56,95,115,119,105,122,122,108,101,100,0)]]);
         moonu -= ((dialogP ? 1 : 3) | controls7.size);
         stepT.set(`${launcher4}`, (2 + (launcher4 ? 1 : 4)));
         controls7.set(`${launcher4}`, ((launcher4 ? 4 : 1) ^ 3));
         dialogP = grayn.size >= 47 && launcher4;
         grayn.set(`${grayn.size}`, 1 << (Math.min(2, Math.abs(grayn.size))));
         if (modity3) {
            break;
         }
      } while (modity3 && ((4 * utils1.length) <= 3 && 2 <= (4 ^ utils1.length)));
      let resendR = 8018043 <= utilsL.size;
      do {
         utilsL.set(`${moonu}`, 2);
         if (resendR) {
            break;
         }
      } while ((!Array.from(utilsL.keys()).includes(`${utils1.length}`)) && resendR);
       let searchbarn = 1.0;
       let paged = 2.0;
      steph.set(`${foundQ}`, layoutI.length);
      heart_ >>= Math.min(Math.abs((layoutI == String.fromCharCode(49,0) ? (relatedc ? 5 : 2) : layoutI.length)), 4);
      roundg = [(parseInt(`${foundQ}`) | (relatedc ? 3 : 3))];

        AnalyticsUtil.onEventWithMap(BControls.BTick, {});

       let miniV: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,104,97,115,104,95,106,95,51,51,0),978], [String.fromCharCode(119,114,105,116,101,99,104,101,99,107,95,97,95,52,53,0),25]]);
      let circleF = miniV.size >= 6982811;
      do {
         miniV = new Map([[`${miniV.size}`, miniV.size]]);
         if (circleF) {
            break;
         }
      } while ((Array.from(miniV.keys()).includes(`${miniV.size}`)) && circleF);
         miniV = new Map([[`${miniV.size}`, 1]]);
       let friendsj: Map<any, any> = new Map([[String.fromCharCode(114,101,100,117,110,100,97,110,116,95,113,95,49,0),false ], [String.fromCharCode(100,101,110,111,105,115,101,114,95,97,95,57,54,0),false ]]);
       let thailandk: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,118,97,114,105,97,110,99,101,115,0),446], [String.fromCharCode(119,95,50,95,111,110,101,115,99,97,108,101,0),31]]);
      relatedc = modeI <= parseFloat(`${roundg.length}`);
       let xvodE = String.fromCharCode(97,97,99,100,101,99,116,97,98,95,115,95,54,49,0);
       let playercommoni = String.fromCharCode(105,95,50,53,95,105,97,116,0);
         playercommoni += "2";
      for (let z = 0; z < 1; z++) {
          let chatX = true;
          let gradlew5 = 4;
          let alertf = 2;
          let reminderv = 0;
         xvodE = `${gradlew5 + reminderv}`;
         chatX = 82 >= alertf && !chatX;
         gradlew5 += alertf;
         reminderv *= 2;
      }
         playercommoni += `${xvodE.length}`;
       let adult4 = true;
       let malaysiaI = true;
      while (adult4) {
         malaysiaI = xvodE.length >= 22;
         break;
      }
          let assist7 = 1.0;
          let feedbackj: Array<any> = [356, 245];
         malaysiaI = (feedbackj.length * parseInt(`${assist7}`)) == 41;
      heart_ <<= Math.min(4, layoutI.length);
      relatedc = 36.2 == modeI;
   for (let n = 0; n < 2; n++) {
      roundg.push(heart_);
   }
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BCheckbox,
            params: {
                desc_1: 'pay',
            }
        });

   let specV = 5998350 >= steph.size;
   do {
      steph.set(`${relatedc}`, 3);
      if (specV) {
         break;
      }
   } while ((1 == steph.size) && specV);
      foundQ /= Math.max(parseInt(`${modeI}`), 4);
   for (let b = 0; b < 1; b++) {
       let long_3H = 1.0;
      if (3.0 >= (long_3H / (Math.max(long_3H, 3)))) {
         long_3H += parseFloat(`${parseInt(`${long_3H}`)}`);
      }
         long_3H /= Math.max(1, parseFloat(`${parseInt(`${long_3H}`) & parseInt(`${long_3H}`)}`));
      while ((long_3H + long_3H) < 1.5 && 1.5 < (long_3H + long_3H)) {
         long_3H += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${long_3H}`)), 5))}`);
         break;
      }
      appley = steph.size > 99 && modeI > 50.58;
   }
   if (3 > (heart_ - 1) || appley) {
      appley = 15 <= heart_;
   }

        if (this.showLog) console.log('trigger event id:', BControls.BTick);
    }

    static userCenterVipInviteViewsAnalytics = () => {
       let indicatorL = true;
    let kuaishoux = 0;
    let launcha = String.fromCharCode(119,95,54,48,95,110,110,109,111,100,0);
    let listW = 5;
    let changeU = String.fromCharCode(115,99,111,112,101,105,100,95,108,95,53,56,0);
    let crown8 = true;
    let source7 = 0.0;
    let modityw = String.fromCharCode(101,110,99,111,100,105,110,103,98,95,114,95,53,53,0);
    let sharedM = 0.0;
    let spinnerh = String.fromCharCode(110,95,49,54,95,105,100,99,116,108,108,109,0);
    let projectc: Map<any, any> = new Map([[String.fromCharCode(122,95,50,52,95,110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0),String.fromCharCode(117,110,109,105,110,105,109,105,122,101,95,51,95,52,55,0)], [String.fromCharCode(114,111,103,114,97,109,95,108,95,55,49,0),String.fromCharCode(99,111,109,98,101,100,95,110,95,57,55,0)], [String.fromCharCode(102,95,52,51,95,115,105,110,116,0),String.fromCharCode(105,116,120,102,109,95,116,95,53,53,0)]]);
    let settings3: Array<any> = [608, 189];
    let handlerd = false;
    let dangerj = 0.0;
    let mbbannerd: Map<any, any> = new Map([[String.fromCharCode(119,95,52,50,95,119,97,118,101,115,121,110,116,104,0),true ], [String.fromCharCode(121,117,118,112,108,95,108,95,49,48,48,0),false ], [String.fromCharCode(115,116,114,99,109,112,95,49,95,55,0),true ]]);
   for (let t = 0; t < 2; t++) {
      listW /= Math.max(2, 3);
   }
       let downloaded3 = 3.0;
       let basketball0 = 1.0;
       let filedq = true;
         downloaded3 += (parseFloat(`${parseInt(`${basketball0}`) ^ (filedq ? 1 : 4)}`));
       let filterO = String.fromCharCode(121,95,53,54,95,99,114,101,97,116,105,111,110,0);
      for (let z = 0; z < 2; z++) {
         filedq = basketball0 < downloaded3;
      }
      if (5 == (filterO.length * parseInt(`${basketball0}`)) || (parseFloat(`${filterO.length}`) * basketball0) == 1.15) {
         filterO = `${3 * filterO.length}`;
      }
          let hejiF = String.fromCharCode(105,112,112,108,101,95,114,95,49,49,0);
         filedq = hejiF == filterO;
      for (let t = 0; t < 2; t++) {
         filterO = `${parseInt(`${basketball0}`)}`;
      }
          let sliderb = String.fromCharCode(110,95,51,54,95,102,114,97,109,101,102,111,114,109,97,116,0);
         filterO = `${3 >> (Math.min(Math.abs(parseInt(`${basketball0}`)), 5))}`;
         sliderb += `${sliderb.length << (Math.min(4, sliderb.length))}`;
      while (downloaded3 < 5.79) {
         downloaded3 *= (parseFloat(`${(filedq ? 2 : 2) % (Math.max(6, parseInt(`${basketball0}`)))}`));
         break;
      }
      for (let h = 0; h < 2; h++) {
         filedq = 76.100 > basketball0;
      }
      modityw += `${((filedq ? 4 : 2) | modityw.length)}`;
      crown8 = modityw.length < kuaishoux;
       let fullA = String.fromCharCode(103,97,112,95,57,95,50,55,0);
       let resultC = String.fromCharCode(120,95,55,53,95,109,97,115,107,0);
         fullA += `${resultC.length >> (Math.min(3, fullA.length))}`;
      let orientationB = String.fromCharCode(105,104,104,108,118,95,97,110,102,0) == resultC;
      do {
         resultC += `${fullA.length * resultC.length}`;
         if (orientationB) {
            break;
         }
      } while ((!fullA.endsWith(resultC)) && orientationB);
      for (let u = 0; u < 3; u++) {
          let expiredr = true;
          let whatsappG = 1;
         fullA = `${whatsappG}`;
         expiredr = expiredr && !expiredr;
         whatsappG *= ((expiredr ? 2 : 3));
      }
         fullA = `${fullA.length}`;
         resultC = `${fullA.length}`;
          let friendsg = 4.0;
          let helperS = String.fromCharCode(118,95,50,48,95,116,114,97,99,107,101,114,0);
          let signinupd = String.fromCharCode(113,95,57,55,95,99,114,101,97,116,111,114,115,0);
         resultC = `${fullA.length}`;
         friendsg *= parseFloat(`${signinupd.length - parseInt(`${friendsg}`)}`);
         helperS += `${2 * helperS.length}`;
         signinupd += `${parseInt(`${friendsg}`)}`;
      projectc.set(launcha, projectc.size);
   while (!handlerd || crown8) {
      crown8 = !handlerd;
      break;
   }

        AnalyticsUtil.onEventWithMap(BControls.BExpand, {});

   if (4 > spinnerh.length || !handlerd) {
      spinnerh = "2";
   }
   let commond = handlerd ? !handlerd : handlerd;
   do {
      handlerd = 52 > changeU.length;
      if (commond) {
         break;
      }
   } while (commond && (!handlerd && !indicatorL));
   while (1 < (changeU.length / (Math.max(1, 6)))) {
      changeU = `${1 ^ parseInt(`${sharedM}`)}`;
      break;
   }
      sharedM -= (parseFloat(`${spinnerh == String.fromCharCode(54,0) ? (crown8 ? 2 : 2) : spinnerh.length}`));
      indicatorL = spinnerh == String.fromCharCode(112,0);
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BCheckbox,
            params: {
                desc_1: 'invite',
            }
        });

   while (1 == (settings3.length % 5) || handlerd) {
      settings3.push(2 | parseInt(`${source7}`));
      break;
   }
      listW &= (spinnerh == String.fromCharCode(89,0) ? spinnerh.length : launcha.length);
      modityw = `${3 / (Math.max(7, spinnerh.length))}`;
   for (let r = 0; r < 3; r++) {
      kuaishoux >>= Math.min(Math.abs(parseInt(`${sharedM}`)), 4);
   }
       let upgradeG = 4.0;
      for (let p = 0; p < 3; p++) {
         upgradeG += parseFloat(`${parseInt(`${upgradeG}`) / (Math.max(parseInt(`${upgradeG}`), 6))}`);
      }
      let thailandu = 8802679.0 <= upgradeG;
      do {
         upgradeG -= parseFloat(`${parseInt(`${upgradeG}`) ^ 2}`);
         if (thailandu) {
            break;
         }
      } while (thailandu && ((upgradeG + 4.76) <= 4.75 || 4.76 <= (upgradeG - upgradeG)));
      while (5.78 == (upgradeG - upgradeG) || (upgradeG - upgradeG) == 5.78) {
         upgradeG -= parseFloat(`${parseInt(`${upgradeG}`)}`);
         break;
      }
      launcha = `${projectc.size}`;

        if (this.showLog) console.log('trigger event id:', BControls.BExpand);
    }


    
    static searchResultViewsAnalytics = () => {
       let penaltyr = String.fromCharCode(112,114,101,116,99,104,95,56,95,52,0);
    let analyticsA = String.fromCharCode(97,95,55,56,95,114,101,112,108,97,121,103,97,105,110,0);
    let playercommoni: Map<any, any> = new Map([[String.fromCharCode(109,95,50,48,95,100,101,99,111,117,112,108,101,0),String.fromCharCode(117,110,100,101,102,105,110,101,100,95,105,95,56,55,0)], [String.fromCharCode(108,95,55,56,95,99,111,110,116,114,105,98,117,116,105,110,103,0),String.fromCharCode(99,111,109,98,101,100,95,54,95,54,52,0)], [String.fromCharCode(112,95,51,48,95,100,101,98,108,111,99,107,105,110,103,0),String.fromCharCode(112,105,120,102,109,116,115,95,108,95,53,48,0)]]);
    let linkn = String.fromCharCode(108,95,49,48,48,95,105,110,102,111,114,109,97,116,105,111,110,0);
    let anythinkj = 5.0;
    let groupn = 5.0;
    let loginY = String.fromCharCode(115,95,55,50,95,104,97,115,104,116,97,98,108,101,122,0);
    let stringsV = 5.0;
    let mathz = 3.0;
    let ewardedF = String.fromCharCode(118,95,51,50,95,102,99,117,110,112,117,98,108,105,115,104,0);
    let topicZ: Map<any, any> = new Map([[String.fromCharCode(102,95,51,49,95,109,111,100,97,108,0),495], [String.fromCharCode(111,95,54,52,95,104,100,115,112,0),223]]);
    let configa = String.fromCharCode(109,95,57,54,95,116,111,107,101,110,115,0);
   while (penaltyr.length <= 1) {
      loginY += "1";
      break;
   }
       let policyy = false;
       let streamingQ = 0;
       let anewso: Array<any> = [834, 824];
       let unreadm: Array<any> = [253, 533, 236];
      let iconY = policyy ? !policyy : policyy;
      do {
         policyy = !policyy;
         if (iconY) {
            break;
         }
      } while (iconY && (policyy));
      playercommoni = new Map([[analyticsA, linkn.length - analyticsA.length]]);
   while (5 > (analyticsA.length - 2)) {
      mathz -= loginY.length * 3;
      break;
   }
      analyticsA += `${parseInt(`${stringsV}`)}`;
      ewardedF = `${1 * parseInt(`${groupn}`)}`;
   let hejiw = ewardedF == String.fromCharCode(110,50,106,55,103,95,49,99,119,0);
   do {
      ewardedF += `${parseInt(`${groupn}`) + 2}`;
      if (hejiw) {
         break;
      }
   } while (hejiw && (3 > (ewardedF.length + parseInt(`${anythinkj}`))));

        AnalyticsUtil.onEventWithMap(BControls.BPrivate, {});

      groupn += parseFloat(`${1 & playercommoni.size}`);
   let sourceC = penaltyr.length <= 6707524;
   do {
      penaltyr += `${analyticsA.length}`;
      if (sourceC) {
         break;
      }
   } while ((3 >= (penaltyr.length + topicZ.size) && (topicZ.size + penaltyr.length) >= 3) && sourceC);
       let tcopy_km = 2.0;
       let styles8 = String.fromCharCode(118,95,56,95,115,121,110,99,104,114,111,110,105,122,101,0);
      while ((parseInt(`${tcopy_km}`) - styles8.length) == 2 && 2 == (styles8.length - parseInt(`${tcopy_km}`))) {
         styles8 += "2";
         break;
      }
      if (3.99 >= (tcopy_km / 2.40) && 2 >= (parseInt(`${tcopy_km}`) / (Math.max(4, 6)))) {
         styles8 += `${styles8.length}`;
      }
      penaltyr += `${loginY.length}`;
      mathz *= playercommoni.size;
   let catagoryz = loginY.length >= 8655045;
   do {
      loginY = `${2 << (Math.min(1, Math.abs(parseInt(`${mathz}`))))}`;
      if (catagoryz) {
         break;
      }
   } while (catagoryz && (playercommoni.size > 4));
   for (let v = 0; v < 1; v++) {
      analyticsA = `${(String.fromCharCode(80,0) == ewardedF ? parseInt(`${groupn}`) : ewardedF.length)}`;
   }
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BContainerTarget,
        });

      linkn = "1";
   let specB = stringsV <= 5834601.0;
   do {
       let disconnectedJ = 4.0;
      if (5.40 < (disconnectedJ / (Math.max(2.44, 1))) && 2.44 < (disconnectedJ / (Math.max(8, disconnectedJ)))) {
         disconnectedJ += parseInt(`${disconnectedJ}`) - 1;
      }
         disconnectedJ *= 3;
         disconnectedJ /= Math.max(1, parseInt(`${disconnectedJ}`));
      stringsV += penaltyr.length * topicZ.size;
      if (specB) {
         break;
      }
   } while (specB && ((stringsV + 5.95) <= 2.65 || 5.43 <= (5.95 + mathz)));
   for (let h = 0; h < 1; h++) {
      groupn += parseFloat(`${2 ^ parseInt(`${groupn}`)}`);
   }
       let upgradeU = String.fromCharCode(115,101,108,101,99,116,111,114,95,54,95,54,0);
       let muted6: Array<any> = [985, 312];
      let middlewareV = String.fromCharCode(51,106,104,113,104,95,111,118,118,0) == upgradeU;
      do {
         upgradeU = `${(upgradeU == String.fromCharCode(72,0) ? upgradeU.length : muted6.length)}`;
         if (middlewareV) {
            break;
         }
      } while (middlewareV && (upgradeU.length < 1));
       let selecteds = String.fromCharCode(101,95,49,54,95,97,108,108,112,97,115,115,0);
      let canvasD = 7784110 >= upgradeU.length;
      do {
          let i_image9 = String.fromCharCode(100,95,54,50,95,112,114,105,111,114,105,116,121,113,0);
          let friendsT = true;
          let projectt = String.fromCharCode(107,95,50,55,95,114,102,116,98,115,117,98,0);
          let tumbnailR = false;
          let injurye = 4.0;
         upgradeU += "1";
         i_image9 = `${(String.fromCharCode(95,0) == projectt ? projectt.length : i_image9.length)}`;
         friendsT = 74.10 >= injurye;
         tumbnailR = !tumbnailR;
         injurye /= Math.max(2, (parseFloat(`${(tumbnailR ? 5 : 4)}`)));
         if (canvasD) {
            break;
         }
      } while (canvasD && (selecteds.length >= upgradeU.length));
         muted6 = [upgradeU.length | 1];
      let mbridged = 7623095 >= muted6.length;
      do {
         muted6.push(upgradeU.length);
         if (mbridged) {
            break;
         }
      } while (mbridged && (2 == selecteds.length));
      let faviconn = 5905859 <= muted6.length;
      do {
         muted6 = [1];
         if (faviconn) {
            break;
         }
      } while (faviconn && (3 <= (2 ^ muted6.length)));
      analyticsA += `${parseInt(`${anythinkj}`)}`;
   for (let r = 0; r < 1; r++) {
       let minimizee = String.fromCharCode(113,95,56,52,95,115,111,117,114,99,101,0);
       let brightness0 = String.fromCharCode(113,95,56,57,95,105,111,115,116,114,101,97,109,0);
       let humidity4 = String.fromCharCode(99,101,110,116,114,97,108,95,114,95,53,51,0);
       let ying3 = true;
       let incident1 = String.fromCharCode(100,95,49,53,95,115,99,114,97,112,101,0);
       let shirtk = String.fromCharCode(100,101,118,105,99,101,115,95,108,95,56,49,0);
         humidity4 += `${incident1.length / (Math.max(shirtk.length, 8))}`;
      let malaysia5 = String.fromCharCode(111,115,122,122,52,117,119,52,106,53,0) == humidity4;
      do {
         humidity4 += `${(String.fromCharCode(57,0) == brightness0 ? brightness0.length : (ying3 ? 2 : 3))}`;
         if (malaysia5) {
            break;
         }
      } while ((incident1.length >= humidity4.length) && malaysia5);
         ying3 = (shirtk.length ^ brightness0.length) <= 70;
         shirtk = `${incident1.length}`;
         ying3 = minimizee.includes(`${ying3}`);
         brightness0 += `${((ying3 ? 1 : 3) & 3)}`;
         minimizee = `${humidity4.length >> (Math.min(Math.abs(3), 1))}`;
         humidity4 = `${shirtk.length >> (Math.min(humidity4.length, 2))}`;
      while (brightness0.length < 3 || ying3) {
          let windT: Array<any> = [999, 566, 172];
          let liveG = String.fromCharCode(115,111,117,114,99,101,99,108,105,112,95,120,95,56,0);
          let rulesp = String.fromCharCode(103,95,54,49,95,105,110,102,111,114,109,97,116,105,111,110,0);
          let leaguel = true;
         brightness0 += `${(1 | (ying3 ? 3 : 5))}`;
         windT = [3 & liveG.length];
         liveG = `${3 % (Math.max(8, rulesp.length))}`;
         rulesp += `${windT.length}`;
         leaguel = 87 < rulesp.length;
         break;
      }
          let ajaxT = 0;
         ying3 = (brightness0.length * shirtk.length) > 89;
         ajaxT &= ajaxT >> (Math.min(Math.abs(ajaxT), 5));
       let twitter6 = String.fromCharCode(109,112,101,103,118,108,99,95,118,95,56,52,0);
         incident1 = "2";
      let logouts = twitter6.length <= 8644527;
      do {
         twitter6 += `${(String.fromCharCode(86,0) == incident1 ? incident1.length : brightness0.length)}`;
         if (logouts) {
            break;
         }
      } while (logouts && (5 > twitter6.length && shirtk.length > 5));
      for (let f = 0; f < 2; f++) {
         twitter6 = `${shirtk.length}`;
      }
      anythinkj -= parseFloat(`${parseInt(`${mathz}`) >> (Math.min(humidity4.length, 3))}`);
   }
   for (let e = 0; e < 1; e++) {
       let bootsplashd: Array<any> = [String.fromCharCode(98,95,49,48,48,95,105,110,99,111,114,114,101,99,116,0), String.fromCharCode(105,95,52,49,95,101,105,103,104,116,115,118,120,0)];
       let favicon3: Map<any, any> = new Map([[String.fromCharCode(106,95,53,95,99,111,117,110,116,101,114,0),false ], [String.fromCharCode(112,95,51,95,115,97,100,120,120,0),false ], [String.fromCharCode(99,95,53,49,95,116,114,105,97,108,115,0),false ]]);
       let slider1 = String.fromCharCode(118,95,56,50,95,112,97,105,114,119,105,115,101,0);
       let gradlews = String.fromCharCode(106,95,50,56,95,99,115,104,97,114,112,0);
          let backW: Array<any> = [287, 315];
          let forwardn: Array<any> = [779, 249];
         bootsplashd.push(slider1.length * 3);
         backW.push(forwardn.length);
         forwardn = [2 ^ backW.length];
         favicon3.set(slider1, bootsplashd.length);
      if (3 == (bootsplashd.length / 3)) {
         favicon3 = new Map([[slider1, slider1.length]]);
      }
         slider1 = "1";
      for (let e = 0; e < 2; e++) {
          let detailsk = String.fromCharCode(101,115,112,111,110,100,101,114,95,54,95,50,48,0);
          let calendare: Map<any, any> = new Map([[String.fromCharCode(99,95,53,57,95,110,97,114,114,111,119,0),839], [String.fromCharCode(116,101,120,116,108,101,95,57,95,57,50,0),573], [String.fromCharCode(104,95,53,54,95,98,111,117,110,100,97,114,105,101,115,0),501]]);
          let typingE = 1;
         bootsplashd.push(calendare.size % (Math.max(7, gradlews.length)));
         detailsk = "3";
         calendare = new Map([[detailsk, typingE]]);
         typingE >>= Math.min(Math.abs(1), 2);
      }
         slider1 = `${3 / (Math.max(9, slider1.length))}`;
         bootsplashd.push(gradlews.length);
         favicon3.set(slider1, bootsplashd.length);
         gradlews = `${bootsplashd.length << (Math.min(Math.abs(3), 3))}`;
      let becomev = String.fromCharCode(116,120,122,113,99,53,104,54,102,0) == slider1;
      do {
         slider1 += `${favicon3.size - slider1.length}`;
         if (becomev) {
            break;
         }
      } while (becomev && (gradlews != String.fromCharCode(89,0)));
         bootsplashd = [bootsplashd.length << (Math.min(Math.abs(1), 2))];
      let reporti = slider1 == String.fromCharCode(49,106,56,0);
      do {
         slider1 = `${favicon3.size & 3}`;
         if (reporti) {
            break;
         }
      } while ((1 <= slider1.length) && reporti);
      groupn -= parseFloat(`${parseInt(`${mathz}`) - parseInt(`${stringsV}`)}`);
   }

        if (this.showLog) console.log('trigger event id:', BControls.BPrivate);
    }

    static searchResultClicksAnalytics = () => {
       let descZ = 2;
    let overlay5 = String.fromCharCode(112,97,115,112,95,52,95,49,53,0);
    let layout9 = 3;
    let stringsX = String.fromCharCode(122,95,51,95,115,111,99,114,101,97,116,101,0);
    let patha = 0;
    let launchero = String.fromCharCode(100,95,51,55,95,109,111,109,101,110,116,0);
    let pingY = false;
    let chatD = String.fromCharCode(100,101,112,114,101,99,97,116,101,100,95,103,95,53,50,0);
    let reducery = String.fromCharCode(109,101,109,117,116,105,108,95,113,95,54,55,0);
    let navigationt: Map<any, any> = new Map([[String.fromCharCode(102,116,101,108,108,95,105,95,49,48,48,0),814], [String.fromCharCode(103,95,49,56,95,115,105,110,113,102,0),555]]);
    let tempw = String.fromCharCode(106,95,51,50,95,108,97,117,110,99,104,0);
    let nalyticsW = 2.0;
    let colorsV: Array<any> = [57, 761, 545];
    let gmailR: Array<any> = [94, 164, 278];
    let promotionA = 2;
    let infox = 1.0;
   while (3 <= (1 - navigationt.size)) {
      launchero += "2";
      break;
   }
      patha &= 3 & launchero.length;
      descZ |= ((pingY ? 2 : 5) & launchero.length);
      pingY = !tempw.startsWith(`${pingY}`);
   for (let c = 0; c < 3; c++) {
       let floatingn = 4;
       let filledu = true;
       let filedS = 0.0;
      let chatL = filedS >= 8968824.0;
      do {
         filedS += floatingn | 3;
         if (chatL) {
            break;
         }
      } while ((2.71 == (floatingn / (Math.max(7, filedS))) && (5 - floatingn) == 4) && chatL);
         filledu = 94 <= floatingn && filledu;
          let modelP = 5.0;
          let gmailA = String.fromCharCode(116,95,50,52,95,99,111,110,99,101,97,108,101,100,0);
          let rewardb = String.fromCharCode(110,111,110,98,108,111,99,107,95,115,95,56,57,0);
         filledu = String.fromCharCode(67,0) == gmailA;
         modelP *= (rewardb == String.fromCharCode(90,0) ? rewardb.length : parseInt(`${modelP}`));
         gmailA = `${parseInt(`${modelP}`) * 3}`;
         filledu = 65.17 < filedS;
      let modelsI = 9171071.0 <= filedS;
      do {
          let auto_69n = String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,95,105,95,57,50,0);
         filedS *= 3;
         auto_69n += `${3 ^ auto_69n.length}`;
         if (modelsI) {
            break;
         }
      } while ((4 < floatingn) && modelsI);
      if (!filledu) {
         filledu = 83 > floatingn;
      }
          let o_playern: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,109,97,114,107,101,100,0),923], [String.fromCharCode(98,105,115,101,99,116,95,119,95,57,49,0),616], [String.fromCharCode(106,95,50,52,95,97,108,98,117,109,0),545]]);
         filedS *= floatingn + 1;
         o_playern.set(`${o_playern.size}`, o_playern.size);
         filledu = !filledu;
      while (4 < (3 & floatingn) && floatingn < 3) {
         filledu = !filledu && 55 >= floatingn;
         break;
      }
      nalyticsW *= (parseInt(`${nalyticsW}`) & (filledu ? 5 : 2));
   }
      launchero = `${parseInt(`${nalyticsW}`) ^ patha}`;

        AnalyticsUtil.onEventWithMap(BControls.BDanger, {});

   let renewH = tempw == String.fromCharCode(100,115,114,106,0);
   do {
      tempw += "1";
      if (renewH) {
         break;
      }
   } while (renewH && (reducery.length <= 4));
      descZ += ((pingY ? 2 : 2) / (Math.max(descZ, 4)));
      overlay5 = `${layout9}`;
      navigationt = new Map([[`${patha}`, 3 ^ patha]]);
      chatD += `${layout9 ^ 2}`;
      stringsX += `${layout9}`;
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BContainerTarget,
        });

      reducery = `${(tempw == String.fromCharCode(119,0) ? tempw.length : stringsX.length)}`;
   let refresh0 = chatD == String.fromCharCode(121,106,50,95,0);
   do {
      chatD += `${((pingY ? 3 : 4))}`;
      if (refresh0) {
         break;
      }
   } while (refresh0 && (!chatD.endsWith(`${reducery.length}`)));
      navigationt = new Map([[`${navigationt.size}`, 1]]);
       let untickA = String.fromCharCode(110,111,109,105,110,97,116,101,95,53,95,57,54,0);
       let foundm = 1.0;
       let episodes7 = String.fromCharCode(122,95,54,54,95,114,111,117,110,100,101,100,0);
      if (parseFloat(`${episodes7.length}`) == foundm) {
          let wind6: Map<any, any> = new Map([[String.fromCharCode(97,95,53,48,95,115,101,108,102,105,101,0),236], [String.fromCharCode(105,95,56,50,95,103,108,105,116,99,104,0),875]]);
          let models6 = String.fromCharCode(118,95,54,55,95,104,105,103,104,115,0);
         foundm += parseFloat(`${models6.length}`);
         wind6 = new Map([[`${wind6.size}`, 3]]);
         models6 = "1";
      }
      if (episodes7.length <= parseInt(`${foundm}`)) {
          let style1 = 4.0;
          let helperJ = true;
          let darke: Array<any> = [954, 259, 481];
          let context7 = false;
         episodes7 = `${3 ^ episodes7.length}`;
         style1 += parseFloat(`${2}`);
         helperJ = darke.length > 67;
         darke = [darke.length];
         context7 = 65.88 == style1 && !helperJ;
      }
         episodes7 += "2";
         untickA = `${3 + episodes7.length}`;
      for (let f = 0; f < 1; f++) {
         episodes7 = `${2 & parseInt(`${foundm}`)}`;
      }
          let twitterp = 2;
          let entryw = String.fromCharCode(114,95,54,49,95,97,117,100,105,111,100,97,116,97,0);
          let phonev = String.fromCharCode(112,95,52,48,95,117,115,100,0);
         episodes7 = `${twitterp / 2}`;
         twitterp |= entryw.length + 1;
         entryw += `${phonev.length}`;
         phonev += `${(String.fromCharCode(81,0) == entryw ? entryw.length : phonev.length)}`;
       let storew = 4.0;
       let coreN = 3.0;
         coreN /= Math.max(2, parseFloat(`${untickA.length}`));
          let l_titlex = 1.0;
         foundm *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${l_titlex}`)), 3))}`);
      layout9 -= patha >> (Math.min(tempw.length, 3));
   while (2 > tempw.length) {
       let roomf = 5.0;
       let unreadd = String.fromCharCode(98,95,50,48,95,100,117,109,112,101,114,0);
       let projectr = 2.0;
       let commento = 1.0;
      for (let m = 0; m < 2; m++) {
         roomf += parseFloat(`${parseInt(`${commento}`)}`);
      }
      for (let j = 0; j < 1; j++) {
          let incidentv: Map<any, any> = new Map([[String.fromCharCode(106,95,49,48,48,95,116,105,110,116,101,100,0),false ], [String.fromCharCode(101,120,116,101,110,116,95,101,95,55,54,0),true ], [String.fromCharCode(121,95,50,49,95,100,118,97,117,100,105,111,0),false ]]);
         unreadd += "1";
         incidentv.set(`${incidentv.size}`, 2);
      }
      while (roomf >= parseFloat(`${unreadd.length}`)) {
         roomf -= parseFloat(`${1}`);
         break;
      }
         projectr -= parseFloat(`${1}`);
       let anytimet = 5.0;
       let gmailAA = 0.0;
          let expandx = 2;
          let goalZ = true;
         roomf *= parseFloat(`${expandx >> (Math.min(2, Math.abs(2)))}`);
         expandx += (1 ^ (goalZ ? 2 : 3));
          let sans0: Array<any> = [132, 360, 826];
          let gesture0 = 1.0;
          let diceI = 4.0;
         commento /= Math.max(2, parseFloat(`${3}`));
         sans0 = [parseInt(`${gesture0}`) ^ 1];
         gesture0 *= parseFloat(`${parseInt(`${gesture0}`)}`);
         diceI += parseFloat(`${1 | parseInt(`${gesture0}`)}`);
         projectr /= Math.max(4, parseFloat(`${3}`));
      for (let x = 0; x < 2; x++) {
         gmailAA -= (String.fromCharCode(89,0) == unreadd ? parseInt(`${anytimet}`) : unreadd.length);
      }
      while (5.16 == (2 - gmailAA)) {
         anytimet -= parseInt(`${commento}`) % (Math.max(10, parseInt(`${projectr}`)));
         break;
      }
      let photoF = 5120000.0 <= projectr;
      do {
          let strM = String.fromCharCode(113,117,101,114,121,95,106,95,52,48,0);
          let whitea = String.fromCharCode(109,112,101,103,97,117,100,105,111,95,117,95,55,53,0);
          let register_4zL = 4.0;
          let notification7: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,120,95,55,52,0),String.fromCharCode(99,111,109,98,105,110,101,114,95,50,95,54,57,0)], [String.fromCharCode(122,95,55,49,95,115,109,101,97,114,0),String.fromCharCode(115,95,57,48,95,99,121,99,108,101,99,108,111,99,107,0)]]);
          let module8 = 3;
         projectr *= parseFloat(`${3 + strM.length}`);
         strM = "2";
         whitea = `${notification7.size}`;
         register_4zL += parseFloat(`${notification7.size >> (Math.min(whitea.length, 1))}`);
         module8 /= Math.max(whitea.length, 2);
         if (photoF) {
            break;
         }
      } while (photoF && ((commento - projectr) >= 2.46));
         projectr *= parseFloat(`${parseInt(`${commento}`) % (Math.max(parseInt(`${roomf}`), 3))}`);
      tempw += `${1 | parseInt(`${projectr}`)}`;
      break;
   }
   for (let b = 0; b < 2; b++) {
      nalyticsW *= chatD.length << (Math.min(tempw.length, 1));
   }

        if (this.showLog) console.log('trigger event id:', BControls.BDanger);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        AnalyticsUtil.onEventWithMap(BControls.BReward, {
            'keyword': keyword,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BWhite,
            params: {
                desc_1: keyword,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BReward);
    }


    
    static catalogViewsAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(BControls.BCurrent, {
            'category_id': category_id,
            'category_name': category_name,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: FHFrameInterstitial.BTumbnail,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BCurrent);
    }

    static catalogClicksAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(BControls.BContainerThailand, {
            'category_id': category_id,
            'category_name': category_name,
        });
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BTumbnail,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BContainerThailand);
    }


    
    static playsViewsAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = BControls.BEventOverlay;

        if (isXmode) {
            eventId = BControls.BTailVideocommon;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: isXmode ? FHFrameInterstitial.BMbjscommon : FHFrameInterstitial.BComment,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = BControls.BThumbnailLock;

        if (isXmode) {
            eventId = BControls.BMiddle;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: isXmode ? FHFrameInterstitial.BWithReact : FHFrameInterstitial.BGradle,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsShareClicksAnalytics = () => {
       let applicationh: Array<any> = [456, 897];
    let closeC = String.fromCharCode(98,95,53,95,97,117,116,111,114,101,115,105,122,105,110,103,0);
    let strU: Array<any> = [156, 590, 663];
    let cross4: Map<any, any> = new Map([[String.fromCharCode(106,100,99,116,95,120,95,56,50,0),String.fromCharCode(103,95,51,48,95,108,105,98,97,118,114,101,115,97,109,112,108,101,0)], [String.fromCharCode(99,101,110,116,101,114,95,52,95,49,50,0),String.fromCharCode(101,115,99,97,112,101,100,95,55,95,54,52,0)]]);
    let darkU = String.fromCharCode(97,117,100,105,98,105,108,105,116,121,95,50,95,51,57,0);
    let downloadeds = true;
    let refreshT = String.fromCharCode(99,95,55,52,95,114,101,113,117,101,115,116,101,114,0);
    let relatedO = String.fromCharCode(102,95,49,48,95,98,101,116,119,101,101,110,0);
    let topon7 = String.fromCharCode(107,95,54,52,95,112,117,115,104,98,97,99,107,0);
    let streamingz = 5;
    let selections: Array<any> = [717, 350];
    let canvas2 = 4.0;
    let transferP = 3.0;
    let privacyD: Map<any, any> = new Map([[String.fromCharCode(114,101,106,101,99,116,101,100,95,50,95,49,50,0),707], [String.fromCharCode(122,101,114,111,98,108,111,98,95,105,95,51,51,0),527]]);
    let gesturef = 1;
    let filln = String.fromCharCode(100,95,53,57,95,97,100,111,98,101,0);
    let injuryc: Array<any> = [String.fromCharCode(113,95,54,55,95,118,101,114,115,105,111,110,0), String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,95,106,95,54,0)];
   if (2 > (strU.length | closeC.length) || 1 > (2 | strU.length)) {
       let pangleM = true;
       let rulesr = 3;
       let statisticsB: Map<any, any> = new Map([[String.fromCharCode(112,97,105,114,119,105,115,101,95,121,95,54,57,0),true ], [String.fromCharCode(119,104,116,120,95,111,95,49,50,0),false ], [String.fromCharCode(119,95,50,56,95,116,117,110,105,110,103,0),true ]]);
          let stationl = 5;
         statisticsB = new Map([[`${rulesr}`, stationl]]);
      for (let y = 0; y < 1; y++) {
          let countryB = 4;
          let greyd = true;
          let utilsD = false;
         rulesr >>= Math.min(4, Math.abs(statisticsB.size));
         countryB %= Math.max(3, 3);
         greyd = !utilsD;
      }
      let abouta = statisticsB.size >= 8667220;
      do {
          let mbsplashs = 1;
          let championY = 4;
          let info0 = String.fromCharCode(112,97,110,101,108,95,106,95,49,55,0);
          let j_positione = String.fromCharCode(110,105,110,101,95,113,95,50,48,0);
          let types2 = 5;
         statisticsB.set(`${championY}`, mbsplashs);
         championY *= j_positione.length / (Math.max(info0.length, 3));
         info0 = `${types2}`;
         j_positione = "1";
         types2 <<= Math.min(3, Math.abs(j_positione.length / (Math.max(info0.length, 9))));
         if (abouta) {
            break;
         }
      } while ((rulesr > statisticsB.size) && abouta);
         statisticsB = new Map([[`${statisticsB.size}`, 3 << (Math.min(4, Math.abs(statisticsB.size)))]]);
         rulesr /= Math.max(5, rulesr);
      if (statisticsB.get(`${rulesr}`) == null) {
         statisticsB = new Map([[`${pangleM}`, rulesr]]);
      }
         rulesr *= ((pangleM ? 5 : 2) & rulesr);
      let becomea = 6575142 >= statisticsB.size;
      do {
         statisticsB.set(`${pangleM}`, ((pangleM ? 5 : 4) % (Math.max(2, rulesr))));
         if (becomea) {
            break;
         }
      } while ((Array.from(statisticsB.values()).includes(rulesr)) && becomea);
         statisticsB = new Map([[`${pangleM}`, 2]]);
      closeC += `${(streamingz ^ (pangleM ? 4 : 1))}`;
   }
      topon7 += `${2 << (Math.min(1, relatedO.length))}`;
      selections.push(cross4.size);
      selections = [2];
       let tickH: Array<any> = [644, 532];
       let usernamek = false;
       let entryt = String.fromCharCode(118,101,114,105,102,105,99,97,116,105,111,110,95,102,95,52,53,0);
       let floatingU = String.fromCharCode(116,95,49,51,95,115,97,102,101,0);
       let eighteend = String.fromCharCode(111,112,116,105,109,105,122,97,116,105,111,110,95,106,95,55,50,0);
      for (let e = 0; e < 2; e++) {
         usernamek = entryt == floatingU;
      }
      let hook4 = tickH.length <= 9063432;
      do {
          let invite3 = 0.0;
          let rewardvideox = 0.0;
         tickH.push(tickH.length);
         invite3 *= parseInt(`${invite3}`) >> (Math.min(1, Math.abs(2)));
         rewardvideox += parseInt(`${invite3}`);
         if (hook4) {
            break;
         }
      } while (hook4 && ((2 * tickH.length) < 1 || usernamek));
      for (let q = 0; q < 2; q++) {
         tickH = [tickH.length ^ 1];
      }
      let scheduleF = eighteend == String.fromCharCode(101,104,103,114,112,118,55,0);
      do {
         eighteend = `${((usernamek ? 5 : 2) & 2)}`;
         if (scheduleF) {
            break;
         }
      } while ((3 < eighteend.length) && scheduleF);
      darkU += `${applicationh.length % (Math.max(strU.length, 1))}`;
      relatedO += "2";

        AnalyticsUtil.onEventWithMap(BControls.BTrophyAnalytics, {});

   for (let t = 0; t < 2; t++) {
       let awayz = String.fromCharCode(111,95,56,48,95,118,112,100,97,116,97,0);
       let mbjscommon3 = false;
      for (let e = 0; e < 2; e++) {
         mbjscommon3 = !awayz.endsWith(`${mbjscommon3}`);
      }
      for (let b = 0; b < 3; b++) {
         awayz = "1";
      }
      for (let r = 0; r < 1; r++) {
         awayz = `${((mbjscommon3 ? 4 : 1))}`;
      }
      if (awayz.includes(`${mbjscommon3}`)) {
         awayz += `${(2 & (mbjscommon3 ? 2 : 4))}`;
      }
          let collectionS: Array<any> = [14, 603];
         mbjscommon3 = (9 == ((!mbjscommon3 ? 9 : collectionS.length) >> (Math.min(collectionS.length, 2))));
      for (let c = 0; c < 3; c++) {
          let viewsv = String.fromCharCode(116,95,54,95,105,109,112,111,114,116,0);
          let stationH: Array<any> = [325, 891];
          let questx = false;
          let memberj = 1.0;
          let recommendationv = String.fromCharCode(108,105,110,107,95,115,95,54,57,0);
         awayz = `${3 + parseInt(`${memberj}`)}`;
         viewsv = `${recommendationv.length + 1}`;
         stationH.push(stationH.length);
         questx = !questx;
         memberj += recommendationv.length % 1;
      }
      refreshT += `${(awayz == String.fromCharCode(66,0) ? topon7.length : awayz.length)}`;
   }
       let fill0 = String.fromCharCode(98,95,55,49,95,100,101,116,101,114,109,105,110,101,100,0);
       let upgradeW = String.fromCharCode(100,95,57,56,95,116,114,97,115,104,111,108,100,0);
          let macaue = 4.0;
          let private_55 = true;
         upgradeW += `${parseInt(`${macaue}`) & 2}`;
         macaue /= Math.max(((private_55 ? 4 : 4) / (Math.max(7, (private_55 ? 2 : 3)))), 2);
         fill0 += "3";
      for (let l = 0; l < 2; l++) {
         fill0 += `${fill0.length & upgradeW.length}`;
      }
          let foregroundp = 4.0;
          let firebaseK = String.fromCharCode(114,111,119,107,101,121,95,112,95,56,54,0);
         upgradeW = `${upgradeW.length % (Math.max(2, 10))}`;
         foregroundp += 2 % (Math.max(8, firebaseK.length));
         firebaseK += `${firebaseK.length}`;
      let mbridge1 = fill0 == String.fromCharCode(121,121,122,120,48,101,110,121,102,122,0);
      do {
          let tempf = 2;
          let showj = 4;
          let combineh = true;
          let entryw = true;
         fill0 += `${showj % (Math.max(tempf, 9))}`;
         tempf <<= Math.min(2, Math.abs(((entryw ? 4 : 3))));
         showj |= 1;
         if (mbridge1) {
            break;
         }
      } while (mbridge1 && (!fill0.startsWith(upgradeW)));
         fill0 = `${(fill0 == String.fromCharCode(106,0) ? upgradeW.length : fill0.length)}`;
      streamingz |= (1 ^ (downloadeds ? 3 : 3));
   let groupw = topon7 == String.fromCharCode(108,100,121,0);
   do {
      topon7 += `${cross4.size}`;
      if (groupw) {
         break;
      }
   } while (groupw && ((topon7.length * applicationh.length) >= 4));
   for (let r = 0; r < 1; r++) {
      darkU += `${(darkU.length ^ (downloadeds ? 2 : 3))}`;
   }
   if (4 >= topon7.length) {
      refreshT = `${(String.fromCharCode(67,0) == darkU ? selections.length : darkU.length)}`;
   }
   for (let q = 0; q < 1; q++) {
       let actionso = 3;
       let backX = String.fromCharCode(101,114,114,115,116,114,95,102,95,56,49,0);
       let vietnama = 3;
       let gesturec = 1.0;
       let plashd = 0;
          let thailandR = String.fromCharCode(100,95,51,95,97,115,99,98,110,0);
          let grayf = true;
          let shootT = String.fromCharCode(108,95,55,56,95,108,105,98,97,118,114,101,115,97,109,112,108,101,0);
         gesturec -= (parseFloat(`${plashd ^ (grayf ? 1 : 1)}`));
         thailandR += `${(shootT == String.fromCharCode(51,0) ? shootT.length : thailandR.length)}`;
         grayf = thailandR == String.fromCharCode(87,0);
          let internetl = String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,109,95,54,50,0);
         actionso %= Math.max(1, backX.length | actionso);
         internetl = `${internetl.length >> (Math.min(internetl.length, 3))}`;
         gesturec += parseFloat(`${backX.length % (Math.max(3, 3))}`);
      if ((actionso & 5) >= 3 && (plashd & 5) >= 1) {
         plashd %= Math.max(4, 1);
      }
      if (3 > (3 + backX.length) || (backX.length + vietnama) > 3) {
         vietnama <<= Math.min(4, Math.abs(plashd));
      }
      while (backX.startsWith(`${vietnama}`)) {
         vietnama &= (String.fromCharCode(85,0) == backX ? actionso : backX.length);
         break;
      }
         backX = `${parseInt(`${gesturec}`) % (Math.max(backX.length, 9))}`;
         gesturec /= Math.max(2, parseFloat(`${parseInt(`${gesturec}`)}`));
      while (1 < (backX.length / (Math.max(1, 10))) && (gesturec + parseFloat(`${backX.length}`)) < 4.8) {
         gesturec += parseFloat(`${actionso}`);
         break;
      }
      for (let h = 0; h < 2; h++) {
         actionso *= plashd;
      }
         gesturec -= parseFloat(`${parseInt(`${gesturec}`)}`);
          let anythink2 = String.fromCharCode(114,101,118,101,97,108,95,112,95,54,54,0);
          let typesG = 4.0;
         gesturec += parseFloat(`${2}`);
         anythink2 = `${anythink2.length}`;
         typesG -= parseFloat(`${anythink2.length}`);
         vietnama *= backX.length;
         actionso /= Math.max(parseInt(`${gesturec}`), 3);
          let matchS = 2;
          let matchn = 2.0;
         vietnama |= parseInt(`${matchn}`);
         matchS -= 3 << (Math.min(2, Math.abs(matchS)));
         matchn += 3 & matchS;
      applicationh = [closeC.length];
   }
        ttEditCollection.onEvent({
            type: 'click',
            title: FHFrameInterstitial.BSpec,
        });

      refreshT += `${(2 + (downloadeds ? 2 : 4))}`;
   while (4 == (applicationh.length - 2) && 3 == (selections.length - 2)) {
       let photoT = 1.0;
       let helper7 = 5.0;
       let q_positionJ = 4;
         q_positionJ %= Math.max(parseInt(`${photoT}`), 4);
      while (photoT < 1.36) {
         q_positionJ >>= Math.min(Math.abs(parseInt(`${photoT}`) ^ 2), 3);
         break;
      }
       let refreshf = 4.0;
       let pauseC = 5.0;
         helper7 /= Math.max(3, parseInt(`${pauseC}`));
         q_positionJ *= parseInt(`${photoT}`);
      while (3.27 <= (photoT - 3.59)) {
         q_positionJ <<= Math.min(1, Math.abs(3));
         break;
      }
          let gray7 = true;
          let viewerS = true;
          let episode2 = true;
         q_positionJ /= Math.max(3 & q_positionJ, 2);
         gray7 = !viewerS;
         viewerS = !gray7 || episode2;
         episode2 = (viewerS ? !gray7 : !viewerS);
      for (let q = 0; q < 2; q++) {
          let indicatorK = 2;
         helper7 /= Math.max(4, parseInt(`${refreshf}`));
         indicatorK ^= indicatorK ^ 1;
      }
         refreshf += parseInt(`${photoT}`) & parseInt(`${helper7}`);
      applicationh.push(2 << (Math.min(Math.abs(parseInt(`${canvas2}`)), 4)));
      break;
   }
      privacyD = new Map([[`${applicationh.length}`, applicationh.length + relatedO.length]]);
      closeC += `${darkU.length}`;
   while (!darkU.includes(topon7)) {
      darkU += `${cross4.size / (Math.max(7, relatedO.length))}`;
      break;
   }
      strU.push(cross4.size >> (Math.min(Math.abs(3), 4)));

        if (this.showLog) console.log('trigger event id:', BControls.BTrophyAnalytics);
    }

    static playsAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title = BControls.BSlider,
        ads_name,
    }: {
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    }) => {
        AnalyticsUtil.onEventWithMap(BControls.BSlider, {});
        ttEditCollection.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', BControls.BSlider);
    }

    static playsAdsClickAnalytics = ({
        url,
        ads_slot_id,
        ads_id,
        ads_title = BControls.BBallReact,
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

        AnalyticsUtil.onEventWithMap(BControls.BBallReact, params);
        ttEditCollection.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: url ?? 'none',
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BBallReact);
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
        AnalyticsUtil.onEventWithMap(BControls.BPosition, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BPosition);
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
        AnalyticsUtil.onEventWithMap(BControls.BLang, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        ttEditCollection.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', BControls.BLang);
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
        AnalyticsUtil.onEventWithMap(BControls.BNotificationMalaysia, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        ttEditCollection.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', BControls.BNotificationMalaysia);
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
        AnalyticsUtil.onEventWithMap(BControls.BTickedKick, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        ttEditCollection.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', BControls.BTickedKick);
    }
}
