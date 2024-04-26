import AnalyticsUtil from './wawa_recommendation';
import analytics from '@react-native-firebase/analytics';
import { wawaReactnativejs } from './wawa_whistleorange_mbridge';

 
enum FSliderCenter {
    
    FMiddleBaseline = 'Home-views',
    FProfileinactiveResult = 'Home-clicks',
    FChangeString = 'Home-Carousel_views',
    FBasketballhometeamSend = 'Home-Carousel_clicks',
    FVipsportLibrrc = 'Home-banner_views',
    FSource = 'Home-banner_clicks',

    
    FPlusLibavutil = 'WatchAnytime-Views',
    FGreenarrowupFound = 'WatchAnytime-video_view_times',
    FImage = 'WatchAnytime-X_views',
    FStatsnomoredataStatisticsactive = 'WatchAnytime-X_video_view_times',
    FFloaterPlaceholder = 'WatchAnytime-playlist_clicks',
    FBasketballawayteam = 'WatchAnytime-video_clicks',
    FDependency = 'WatchAnytime-ads_views',
    FSourceReactnativeultimatelistview = 'WatchAnytime-ads_clicks',

    
    FDescription = 'Sport-views',
    FTypingPredictionbutton = 'Sport-clicks',
    FVignette = 'Sport-banner_views',
    FLibswresample = 'Sport-banner_clicks',

    
    FIconviewer = 'SportDetails-views',
    FFrame = 'SportDetails-plays_times',
    FList = 'SportDetails-vip_popup_times',
    FDownloaded = 'SportDetails-vip_clicks',

    
    FDefaultlogoX = 'Playlist-views',
    FArrowright = 'Playlist-clicks',
    FLeft = 'Playlist-topics_views',
    FDownloaderUnlock = 'Playlist-topics_clicks',

    
    FAssets = 'UserCenter-login_success_times',
    FWhatsapp = 'UserCenter-vip_login_success_times',
    FGoallogo = 'UserCenter-pay_vip_views',
    FDelegate = 'UserCenter-invites_vip_views',

    
    FPrivacyComplete = 'Search-result_views',
    FLeakcheckerMain = 'Search-result_clicks',
    FGreenarrowupText = 'Search-keywords',

    
    FRedirect = 'Catalog-views',
    FTeamdetailsbg = 'Catalog-clicks',

    
    FUpload = 'Play-views',
    FCombinedFullscreenmin = 'Play-plays_times',
    FNativeex = 'Play-X_views',
    FEdit = 'Play-X_plays_times',
    FImagenomoredata = 'Play-share_clicks',

    
    FColors = 'Play-ads_views',
    FContext = 'Play-ads_clicks',

    
    FFirebase = 'VideoPlayer-banner_views',
    FReactOverlay = 'VideoPlayer-banner_clicks',

    
    FWeatherPredictionbanner = 'Profile-banner_views',
    FIconmoreScheduler = 'Profile-banner_clicks',
}

enum IIPhoneshare {
    
    FLibjsiBell = 'home_tab',

    
    FIconclosewhitebg = 'watchAnytime',
    FDefaultfootballbgApple = 'watchAnytime_play_times',
    FBrightness = 'watchAnytime_view_video',
    FMiddle = 'watchAnytime_view_playlist',

    FAwayicon = 'watchAnytime_x',
    FCornerkickTime = 'watchAnytime_x_play_times',

    
    FOrange = 'sport',
    FWeibo = 'sportDetail',
    FProfileinactiveQaag = 'sportDetail_play_times',
    FMatchdetailbgCornershoot = 'sportDetail_vip_popup',

    
    FOrangeclockColors = 'playlist',
    FCombine = 'playlist_topics',

    
    FDownloadedArrowrightwithtail = 'userCenter_login_success_times',
    FPhotoTail = 'userCenter_vip_login_success_times',
    FProfileinactive = 'userCenter_view_vip',

    
    FZoom = 'search_keywords',
    FViewer = 'search_result',

    
    FImagemanager = 'catalog',

    
    FIconstarRight = 'play',
    FAbidetectViews = 'play_plays_times',
    FTwitterLogout = 'Play_share',

    FPredictionwin = 'play_x',
    FVideoMovies = 'play_x_plays_times',
}

export default class wawa_dacccfaabfbcbadeebddcabacdffdbc_video {
    static showLog: boolean = false;
    static disabled: boolean = false;
    static disabledUmeng: boolean = false;
    static disabledFirebase: boolean = true;
    static disabledCustom: boolean = false;

    static #triggerUmengEvent = (eventId: FSliderCenter, body: any = {}) => {
        if (this.disabled || this.disabledUmeng) return;

        AnalyticsUtil.onEventWithMap(eventId, body);
        if (this.showLog) console.log('trigger umeng event id:', eventId);
    }

    static #triggerFirebaseCustomEvent = async (eventId: FSliderCenter, body: any = {}) => {
        if (this.disabled || this.disabledFirebase) return;

        await analytics().logEvent(eventId.replace('-', '_'), body);
        if (this.showLog) console.log('trigger firebase event id:', eventId);
    }

    static #triggerFirebaseEvent = async (
        type: 'boot',

    ) => {
        if (this.disabled || this.disabledFirebase) return;

        switch (type) {
            case 'boot': {
                await analytics().logAppOpen();
                break;
            }
        }

        if (this.showLog) console.log('trigger firebase event id:', type);
    }

    static #triggerCustomEvent = (type: 'view' | 'click' | 'count', eventId: IIPhoneshare | string, data: {
        name?: string | undefined;
        ads_slot_id?: number | undefined;
        ads_id?: number | undefined;
        params?: any | undefined;
    } = {}) => {
        if (this.disabled || this.disabledCustom) return;

        wawaReactnativejs.onEvent({
            type: type,
            title: eventId,
            name: data?.name,
            ads_slot_id: data?.ads_slot_id,
            ads_id: data?.ads_id,
            params: data?.params,
        });
        if (this.showLog) console.log('trigger custom event id:', eventId);
    }

    
    static onBootAnalytics = () => {
       let notificationB = String.fromCharCode(122,95,53,49,95,104,101,97,112,0);
    let vignette5 = 5.0;
    let downloader4 = 0;
    let unfillh = String.fromCharCode(111,117,116,103,111,105,110,103,95,113,95,50,52,0);
    let basketballtrophyW = String.fromCharCode(101,120,116,114,97,100,97,116,97,95,104,95,57,55,0);
    let smallorangeman_ = String.fromCharCode(115,95,50,54,95,110,101,119,116,101,107,0);
    let textinputP = false;
    let sendR = 4.0;
    let ninit_b3 = String.fromCharCode(104,95,49,57,95,115,117,99,99,101,115,115,111,114,0);
    let specB = String.fromCharCode(99,95,55,54,95,102,114,97,109,101,99,114,99,0);
    let o_centerl = false;
    let mbridgeg = 0.0;
    let libsgcorew: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,95,100,95,57,50,0),false ], [String.fromCharCode(116,111,108,111,119,101,114,95,57,95,54,50,0),false ], [String.fromCharCode(115,95,50,49,95,102,97,115,116,102,105,114,115,116,112,97,115,115,0),false ]]);
    let chatbotphotoH: Map<any, any> = new Map([[String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,115,95,54,55,0),71], [String.fromCharCode(120,99,111,100,101,95,109,95,55,56,0),56], [String.fromCharCode(102,105,108,101,110,97,109,101,115,95,111,95,53,57,0),810]]);
    let memberR: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,104,95,49,48,0),276], [String.fromCharCode(113,95,56,55,95,100,114,97,119,105,110,103,0),657]]);
    let coreZ = String.fromCharCode(115,104,105,109,109,101,114,105,110,103,95,113,95,51,50,0);
       let libaneY = String.fromCharCode(106,95,53,50,95,114,105,110,100,101,120,0);
       let profileinactiveC: Array<any> = [563, 562, 894];
       let langkeyR = String.fromCharCode(114,95,49,48,48,95,100,101,98,108,111,99,107,0);
         langkeyR = "2";
         libaneY = `${profileinactiveC.length}`;
         profileinactiveC.push(langkeyR.length);
      if ((langkeyR.length - 5) >= 5 && 1 >= (profileinactiveC.length - 5)) {
          let matchdetailbgS = 4.0;
          let calendaru = true;
          let trophyX: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,95,108,95,53,51,0),973], [String.fromCharCode(109,111,117,116,104,95,101,95,51,50,0),180]]);
          let circleJ = 0;
          let cornerkicks: Map<any, any> = new Map([[String.fromCharCode(99,95,53,50,95,112,105,120,101,108,117,116,105,108,115,0),431], [String.fromCharCode(100,105,115,99,111,114,100,95,108,95,56,57,0),128], [String.fromCharCode(99,97,114,114,105,101,114,95,118,95,53,52,0),522]]);
         profileinactiveC.push(2);
         matchdetailbgS *= cornerkicks.size;
         calendaru = !calendaru;
         trophyX = new Map([[`${trophyX.size}`, trophyX.size & 3]]);
         circleJ ^= parseInt(`${matchdetailbgS}`);
         cornerkicks.set(`${circleJ}`, cornerkicks.size & 3);
      }
      for (let q = 0; q < 2; q++) {
          let baiduads0 = 2.0;
          let imageactionlivec: Array<any> = [777, 207, 952];
          let topicR = String.fromCharCode(112,109,107,95,53,95,53,56,0);
         profileinactiveC.push(profileinactiveC.length / (Math.max(1, 1)));
         baiduads0 -= 1 >> (Math.min(3, imageactionlivec.length));
         imageactionlivec = [(topicR == String.fromCharCode(70,0) ? topicR.length : imageactionlivec.length)];
      }
      for (let v = 0; v < 2; v++) {
         langkeyR = `${profileinactiveC.length - langkeyR.length}`;
      }
         libaneY += `${libaneY.length}`;
       let infoC = 2.0;
      for (let b = 0; b < 1; b++) {
          let bootsplashI = String.fromCharCode(101,109,112,116,121,95,97,95,55,55,0);
          let anythinkB: Array<any> = [127, 72];
          let huaweit = true;
          let paginationM = String.fromCharCode(102,95,49,48,48,95,102,111,108,108,111,119,101,114,0);
          let componento: Map<any, any> = new Map([[String.fromCharCode(113,95,54,52,95,116,101,120,116,109,111,118,115,117,98,0),590], [String.fromCharCode(114,101,118,111,107,101,95,108,95,49,50,0),174]]);
         profileinactiveC = [profileinactiveC.length];
         bootsplashI += `${bootsplashI.length}`;
         anythinkB = [((huaweit ? 2 : 2) / 3)];
         huaweit = bootsplashI.length >= 19;
         paginationM = `${bootsplashI.length}`;
         componento = new Map([[`${componento.size}`, componento.size]]);
      }
      basketballtrophyW = `${((textinputP ? 4 : 5))}`;
   for (let v = 0; v < 1; v++) {
      sendR -= parseFloat(`${2}`);
   }
       let clear_ = String.fromCharCode(110,101,119,108,105,110,101,95,107,95,51,50,0);
          let successo = 3.0;
          let positionfield1 = String.fromCharCode(115,116,97,116,117,115,111,114,95,114,95,54,53,0);
          let loginB = String.fromCharCode(102,95,57,57,95,112,97,103,101,108,105,115,116,0);
         clear_ += `${clear_.length}`;
         successo *= 1 ^ positionfield1.length;
         positionfield1 += `${positionfield1.length >> (Math.min(Math.abs(1), 5))}`;
         loginB = `${parseInt(`${successo}`)}`;
          let become8: Map<any, any> = new Map([[String.fromCharCode(99,95,51,54,95,109,118,101,99,0),132], [String.fromCharCode(116,111,110,95,122,95,51,53,0),426], [String.fromCharCode(99,111,109,112,111,115,105,116,101,95,121,95,50,57,0),5]]);
         clear_ = `${1 << (Math.min(3, Math.abs(become8.size)))}`;
      for (let x = 0; x < 2; x++) {
         clear_ += `${clear_.length + clear_.length}`;
      }
      unfillh += `${((textinputP ? 1 : 2) << (Math.min(notificationB.length, 1)))}`;
   for (let i = 0; i < 1; i++) {
       let release_1dz: Array<any> = [580, 626];
       let iconnointernetK = String.fromCharCode(113,95,52,55,95,110,111,116,105,102,121,105,110,103,0);
       let themec = 1.0;
       let u_imageu = 0.0;
       let flagJ: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,119,95,55,49,0),274], [String.fromCharCode(110,112,111,105,110,116,115,95,106,95,56,56,0),678], [String.fromCharCode(105,112,102,115,95,105,95,52,48,0),990]]);
         themec /= Math.max(4, iconnointernetK.length);
      let n_animationN = 9834183 >= flagJ.size;
      do {
         flagJ.set(iconnointernetK, iconnointernetK.length - release_1dz.length);
         if (n_animationN) {
            break;
         }
      } while (((iconnointernetK.length % (Math.max(4, flagJ.size))) == 4 && (4 % (Math.max(2, iconnointernetK.length))) == 5) && n_animationN);
         u_imageu += parseInt(`${themec}`) & flagJ.size;
         flagJ.set(`${u_imageu}`, (iconnointernetK == String.fromCharCode(72,0) ? iconnointernetK.length : parseInt(`${u_imageu}`)));
          let runtimeschedulerw = false;
          let greenarrowupB = String.fromCharCode(111,95,52,48,95,101,110,116,114,111,112,121,109,118,0);
          let sortL = 3.0;
         iconnointernetK = `${parseInt(`${themec}`)}`;
         runtimeschedulerw = 97.99 == sortL;
         greenarrowupB = `${((runtimeschedulerw ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${sortL}`)), 4)))}`;
         u_imageu *= parseInt(`${themec}`);
      let iconcurrentmatchv = flagJ.size <= 7862781;
      do {
          let profileframeS: Array<any> = [897, 928, 446];
         flagJ.set(`${themec}`, iconnointernetK.length);
         profileframeS.push(1);
         if (iconcurrentmatchv) {
            break;
         }
      } while (iconcurrentmatchv && (1.0 == (u_imageu - 4.46) || (parseInt(`${u_imageu}`) - flagJ.size) == 1));
      let goallogoa = String.fromCharCode(117,119,105,56,109,57,55,99,0) == iconnointernetK;
      do {
          let referrer1 = 3;
          let videoV = 1.0;
          let xvodT: Array<any> = [794, 180, 39];
         iconnointernetK += "2";
         referrer1 &= referrer1;
         videoV /= Math.max(3, parseInt(`${videoV}`) ^ 1);
         xvodT.push(1);
         if (goallogoa) {
            break;
         }
      } while (goallogoa && (flagJ.size == iconnointernetK.length));
      while (!Array.from(flagJ.keys()).includes(`${themec}`)) {
         flagJ = new Map([[`${u_imageu}`, parseInt(`${u_imageu}`)]]);
         break;
      }
      if (3 <= flagJ.size) {
          let bggradient1 = String.fromCharCode(108,95,52,51,95,109,97,114,107,117,112,0);
          let iconcurrentmatchW = String.fromCharCode(114,103,98,120,105,95,121,95,51,57,0);
         iconnointernetK = `${parseInt(`${u_imageu}`) - 2}`;
         bggradient1 = `${bggradient1.length ^ iconcurrentmatchW.length}`;
         iconcurrentmatchW = `${bggradient1.length}`;
      }
         flagJ.set(`${u_imageu}`, parseInt(`${u_imageu}`) | 3);
      if (1 < (flagJ.size - iconnointernetK.length) && (1 - flagJ.size) < 4) {
         flagJ = new Map([[`${flagJ.size}`, flagJ.size - 1]]);
      }
      let wind_ = themec >= 6549026.0;
      do {
          let watchc = true;
          let footballfield1: Array<any> = [633, 174, 781];
          let profileframem = String.fromCharCode(117,110,99,108,97,109,112,101,100,95,119,95,56,50,0);
         themec += iconnointernetK.length & 3;
         watchc = footballfield1.length <= 9;
         footballfield1.push((String.fromCharCode(66,0) == profileframem ? footballfield1.length : profileframem.length));
         if (wind_) {
            break;
         }
      } while (wind_ && (themec > iconnointernetK.length));
      let expandS = 6109273.0 >= themec;
      do {
          let shootnogoall = String.fromCharCode(98,95,56,0);
          let leakchecker5 = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,116,95,55,57,0);
          let componentsH: Map<any, any> = new Map([[String.fromCharCode(116,95,52,51,95,105,110,99,114,0),String.fromCharCode(117,95,51,48,95,101,118,114,99,100,97,116,97,0)], [String.fromCharCode(113,95,55,48,95,115,111,117,114,99,101,105,100,0),String.fromCharCode(105,95,50,52,95,111,99,116,101,116,115,0)]]);
         themec += 2 / (Math.max(1, leakchecker5.length));
         shootnogoall += `${componentsH.size}`;
         leakchecker5 = "2";
         componentsH.set(shootnogoall, componentsH.size);
         if (expandS) {
            break;
         }
      } while (expandS && ((u_imageu - 5.29) == 3.48 && (themec - u_imageu) == 5.29));
          let libpangleflippedz = 4;
         themec /= Math.max(3, parseInt(`${themec}`) - flagJ.size);
         libpangleflippedz <<= Math.min(Math.abs(libpangleflippedz << (Math.min(Math.abs(libpangleflippedz), 2))), 4);
      smallorangeman_ += `${unfillh.length ^ 3}`;
   }
   if (!textinputP) {
       let tempnodatagifq: Map<any, any> = new Map([[String.fromCharCode(117,95,51,51,95,118,98,101,122,105,101,114,0),776], [String.fromCharCode(105,95,55,48,95,99,108,101,97,110,0),193], [String.fromCharCode(104,95,54,50,95,99,111,110,118,101,114,116,105,110,103,0),524]]);
          let basketballawayteamg = 3.0;
          let statsnomoredataT = true;
         tempnodatagifq.set(`${basketballawayteamg}`, parseInt(`${basketballawayteamg}`));
         statsnomoredataT = !statsnomoredataT;
      let bufferh = tempnodatagifq.size >= 6119382;
      do {
         tempnodatagifq = new Map([[`${tempnodatagifq.size}`, 2]]);
         if (bufferh) {
            break;
         }
      } while ((Array.from(tempnodatagifq.keys()).includes(`${tempnodatagifq.size}`)) && bufferh);
      for (let v = 0; v < 3; v++) {
         tempnodatagifq = new Map([[`${tempnodatagifq.size}`, tempnodatagifq.size / 3]]);
      }
      o_centerl = basketballtrophyW == String.fromCharCode(106,0);
   }
       let shooth: Array<any> = [158, 709];
       let indicatorl = String.fromCharCode(113,95,51,51,95,114,101,102,108,101,99,116,0);
       let libswresamplef = String.fromCharCode(104,95,54,48,95,111,99,116,101,116,115,0);
          let product6 = 0.0;
          let sinam = String.fromCharCode(117,110,105,113,117,101,108,121,95,102,95,54,50,0);
         indicatorl += `${parseInt(`${product6}`)}`;
         product6 -= parseFloat(`${1}`);
         sinam = "2";
       let imageactionliveq = 3.0;
      while (1 <= (shooth.length + 4) && 1 <= (indicatorl.length + 4)) {
         shooth = [3];
         break;
      }
         shooth = [2];
         libswresamplef += `${1 >> (Math.min(4, shooth.length))}`;
         libswresamplef = `${libswresamplef.length / (Math.max(8, parseInt(`${imageactionliveq}`)))}`;
         libswresamplef += `${libswresamplef.length}`;
      if (4 == libswresamplef.length) {
          let rncoreB = 1.0;
          let wifirouterz: Map<any, any> = new Map([[String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,109,95,56,52,0),String.fromCharCode(98,105,103,100,105,97,95,103,95,56,0)], [String.fromCharCode(99,99,111,117,110,116,95,56,95,54,57,0),String.fromCharCode(106,95,54,48,95,110,97,109,101,115,101,114,118,101,114,0)]]);
         imageactionliveq -= parseInt(`${rncoreB}`);
         rncoreB += parseFloat(`${2}`);
         wifirouterz = new Map([[`${wifirouterz.size}`, 1]]);
      }
          let binddatase = String.fromCharCode(99,111,117,110,116,101,114,95,56,95,53,52,0);
         imageactionliveq *= parseInt(`${imageactionliveq}`);
         binddatase += `${binddatase.length}`;
      notificationB = `${parseInt(`${vignette5}`) * notificationB.length}`;
      mbridgeg /= Math.max(ninit_b3.length % 2, 4);
   let h_unlockS = 7749550 >= downloader4;
   do {
      downloader4 *= unfillh.length;
      if (h_unlockS) {
         break;
      }
   } while ((3 <= downloader4) && h_unlockS);
   if (!textinputP || o_centerl) {
      textinputP = specB.length < libsgcorew.size;
   }
      vignette5 += ninit_b3.length % (Math.max(5, smallorangeman_.length));
   for (let p = 0; p < 3; p++) {
      smallorangeman_ += `${smallorangeman_.length / (Math.max(specB.length, 3))}`;
   }
   if ((parseInt(`${mbridgeg}`) * basketballtrophyW.length) < 4 && 5 < (basketballtrophyW.length ^ 4)) {
       let othermatchdetailbgf = 2.0;
       let entryI: Array<any> = [730, 274];
       let popupu = String.fromCharCode(116,95,54,56,95,115,117,98,102,105,101,108,100,115,0);
       let orangeclockq = String.fromCharCode(112,95,51,51,0);
       let libavfilter4 = String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,115,95,56,95,54,48,0);
      while (orangeclockq.length == 2 || popupu.length == 2) {
         orangeclockq = `${2 & popupu.length}`;
         break;
      }
      let yellowredcardb = popupu == String.fromCharCode(112,116,109,102,53,50,105,0);
      do {
         popupu = `${parseInt(`${othermatchdetailbgf}`) - 2}`;
         if (yellowredcardb) {
            break;
         }
      } while ((othermatchdetailbgf >= 1.29) && yellowredcardb);
       let livenodatabgimgB = String.fromCharCode(112,95,52,52,95,110,111,116,105,99,101,115,0);
       let iconsettingY = String.fromCharCode(117,95,54,57,95,110,112,114,111,98,101,0);
          let playG = 0;
          let expandq = false;
          let placementf = false;
         orangeclockq = `${iconsettingY.length / (Math.max(livenodatabgimgB.length, 5))}`;
         playG /= Math.max(3, (playG + (placementf ? 1 : 5)));
         expandq = placementf && expandq;
      let basketballdetailsbg9 = libavfilter4.length >= 9873821;
      do {
         libavfilter4 = `${entryI.length / (Math.max(libavfilter4.length, 8))}`;
         if (basketballdetailsbg9) {
            break;
         }
      } while ((!libavfilter4.includes(`${livenodatabgimgB.length}`)) && basketballdetailsbg9);
      while (libavfilter4 != String.fromCharCode(68,0)) {
         orangeclockq = `${entryI.length * orangeclockq.length}`;
         break;
      }
       let mappingT: Array<any> = [428, 941];
       let iconbellactiveD: Array<any> = [719, 623, 571];
      for (let k = 0; k < 1; k++) {
          let filedB = 4.0;
          let forward4 = true;
          let lessM = 1.0;
          let scorepopsound8 = 4.0;
         mappingT = [popupu.length];
         filedB += (parseFloat(`${(forward4 ? 5 : 3) + parseInt(`${lessM}`)}`));
         forward4 = filedB == 52.57 && !forward4;
         lessM *= 2;
         scorepopsound8 /= Math.max(parseFloat(`${parseInt(`${lessM}`)}`), 3);
      }
          let fastA = String.fromCharCode(99,95,55,56,95,102,97,110,99,121,0);
          let internetY = String.fromCharCode(111,95,54,95,110,97,109,101,116,111,105,110,100,101,120,0);
         iconsettingY += `${fastA.length | 1}`;
         fastA = `${internetY.length | 3}`;
         internetY += `${(internetY == String.fromCharCode(101,0) ? internetY.length : internetY.length)}`;
      while ((popupu.length >> (Math.min(Math.abs(4), 5))) >= 1 && (entryI.length >> (Math.min(Math.abs(4), 4))) >= 2) {
         popupu = `${popupu.length}`;
         break;
      }
       let bgvipxvods = String.fromCharCode(99,111,110,118,111,108,118,101,95,102,95,52,49,0);
       let stringD = String.fromCharCode(110,95,57,53,95,98,114,105,100,103,105,110,103,0);
          let modulesG = 4.0;
          let exampleimager: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,101,95,49,49,0),417], [String.fromCharCode(100,101,102,108,105,99,107,101,114,95,114,95,55,52,0),623], [String.fromCharCode(100,95,54,54,95,104,97,112,116,105,99,0),947]]);
         livenodatabgimgB = `${(livenodatabgimgB == String.fromCharCode(85,0) ? bgvipxvods.length : livenodatabgimgB.length)}`;
         modulesG *= parseFloat(`${parseInt(`${modulesG}`) / 3}`);
         exampleimager = new Map([[`${exampleimager.size}`, parseInt(`${modulesG}`) >> (Math.min(Math.abs(exampleimager.size), 5))]]);
          let iconnewchat7 = 0;
          let reactnativejsH: Map<any, any> = new Map([[String.fromCharCode(114,101,119,105,110,100,95,104,95,51,49,0),571], [String.fromCharCode(113,95,52,55,95,114,101,118,111,99,97,116,105,111,110,0),124], [String.fromCharCode(101,95,55,95,102,114,97,99,0),872]]);
          let become2: Array<any> = [992, 506, 764];
         libavfilter4 = "2";
         iconnewchat7 &= become2.length;
         reactnativejsH.set(`${iconnewchat7}`, become2.length | 3);
      for (let q = 0; q < 2; q++) {
         mappingT = [(String.fromCharCode(76,0) == iconsettingY ? entryI.length : iconsettingY.length)];
      }
          let heji_ = 0;
         othermatchdetailbgf /= Math.max(1, parseFloat(`${2 + mappingT.length}`));
         heji_ /= Math.max(5, heji_ % (Math.max(1, 2)));
      basketballtrophyW = `${2 ^ notificationB.length}`;
   }
      textinputP = specB.length <= 38;
      mbridgeg += 1;

        

   while ((smallorangeman_.length & 1) >= 2 && 3 >= (smallorangeman_.length * 1)) {
      smallorangeman_ += `${parseInt(`${sendR}`)}`;
      break;
   }
   let controls0 = 6912140 >= unfillh.length;
   do {
      unfillh += `${parseInt(`${sendR}`)}`;
      if (controls0) {
         break;
      }
   } while (controls0 && (!basketballtrophyW.startsWith(`${unfillh.length}`)));
      libsgcorew = new Map([[`${mbridgeg}`, 2]]);
       let klevin4 = String.fromCharCode(117,110,100,111,116,116,101,100,95,114,95,55,49,0);
       let trophy7 = String.fromCharCode(109,95,53,50,95,115,111,99,97,110,116,114,99,118,109,111,114,101,0);
       let componentregistryr = 5.0;
          let analyticso = String.fromCharCode(113,112,105,115,95,101,95,57,0);
         klevin4 += "3";
         analyticso = `${analyticso.length}`;
      let middlewareC = 9584242 >= trophy7.length;
      do {
         trophy7 = `${(String.fromCharCode(119,0) == trophy7 ? trophy7.length : klevin4.length)}`;
         if (middlewareC) {
            break;
         }
      } while ((componentregistryr < 1.80) && middlewareC);
      let circled = componentregistryr >= 9402976.0;
      do {
         componentregistryr /= Math.max(3, 3 / (Math.max(4, parseInt(`${componentregistryr}`))));
         if (circled) {
            break;
         }
      } while (circled && (klevin4.length <= 5));
         klevin4 += `${parseInt(`${componentregistryr}`)}`;
          let basketballhometeamv = 1.0;
          let feedback_ = String.fromCharCode(110,95,56,54,95,114,102,102,116,105,0);
          let basketballmatchdetailbgY = String.fromCharCode(97,108,108,111,99,122,95,118,95,51,0);
         trophy7 += `${parseInt(`${componentregistryr}`)}`;
         basketballhometeamv -= parseInt(`${basketballhometeamv}`) << (Math.min(feedback_.length, 4));
         feedback_ = `${basketballmatchdetailbgY.length}`;
         basketballmatchdetailbgY = `${basketballmatchdetailbgY.length + 1}`;
       let z_titlen = 1;
      while (2 <= (3 & klevin4.length)) {
          let gradlewh = String.fromCharCode(118,105,111,108,97,116,105,111,110,95,119,95,53,54,0);
         klevin4 = `${gradlewh.length & 3}`;
         break;
      }
         z_titlen ^= (klevin4 == String.fromCharCode(80,0) ? klevin4.length : parseInt(`${componentregistryr}`));
          let linkM: Array<any> = [193, 496, 848];
         z_titlen += parseInt(`${componentregistryr}`) / (Math.max(linkM.length, 8));
      libsgcorew = new Map([[`${memberR.size}`, (String.fromCharCode(88,0) == ninit_b3 ? memberR.size : ninit_b3.length)]]);
      vignette5 -= (String.fromCharCode(74,0) == unfillh ? unfillh.length : (textinputP ? 4 : 2));
      vignette5 /= Math.max(3, 2);
      vignette5 /= Math.max(1, parseInt(`${mbridgeg}`));
   while (mbridgeg == 5.88 && (5.88 + mbridgeg) == 2.42) {
      textinputP = (libsgcorew.size & chatbotphotoH.size) > 42;
      break;
   }
      memberR.set(notificationB, (String.fromCharCode(119,0) == notificationB ? (o_centerl ? 5 : 1) : notificationB.length));
   if (3 >= (unfillh.length << (Math.min(3, Math.abs(downloader4)))) && (3 << (Math.min(2, unfillh.length))) >= 2) {
      unfillh += `${(String.fromCharCode(81,0) == smallorangeman_ ? (textinputP ? 5 : 2) : smallorangeman_.length)}`;
   }
      o_centerl = 1 <= notificationB.length && vignette5 <= 58.89;
      notificationB += `${memberR.size & 2}`;
   let refreshb = 8454160 >= memberR.size;
   do {
       let giftbuttonQ = 4.0;
       let share6 = 0.0;
       let delegate_tn = false;
       let vietnamS: Map<any, any> = new Map([[String.fromCharCode(116,114,116,97,98,108,101,95,100,95,55,56,0),819], [String.fromCharCode(109,95,51,56,95,112,97,115,115,112,104,114,97,115,101,0),677]]);
      if (2.80 <= giftbuttonQ) {
         giftbuttonQ -= (2 / (Math.max(6, (delegate_tn ? 3 : 4))));
      }
         giftbuttonQ *= parseInt(`${giftbuttonQ}`);
      while ((share6 / (Math.max(7, giftbuttonQ))) > 2.99 || (2.99 * share6) > 5.98) {
         share6 *= parseInt(`${share6}`) << (Math.min(3, Math.abs(3)));
         break;
      }
      if ((1.17 + share6) == 1.79) {
          let backwhiten = String.fromCharCode(108,105,110,101,95,114,95,57,54,0);
          let traminiE = false;
          let splashR: Map<any, any> = new Map([[String.fromCharCode(116,100,115,102,95,50,95,51,56,0),484], [String.fromCharCode(110,95,51,50,95,115,119,105,116,99,104,0),921], [String.fromCharCode(110,97,118,105,103,97,116,105,110,103,95,115,95,56,57,0),606]]);
          let promotionQ: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,115,111,117,114,99,101,99,108,105,112,0),773], [String.fromCharCode(111,112,99,111,100,101,95,108,95,52,49,0),540]]);
          let libreactnativeblob0: Array<any> = [653, 71, 481];
         delegate_tn = libreactnativeblob0.length > 35;
         backwhiten = `${(backwhiten == String.fromCharCode(105,0) ? backwhiten.length : (traminiE ? 1 : 2))}`;
         traminiE = splashR.size == promotionQ.size;
         splashR.set(backwhiten, 2 & splashR.size);
         promotionQ = new Map([[`${splashR.size}`, 1 >> (Math.min(3, backwhiten.length))]]);
         libreactnativeblob0.push(1);
      }
      if (3.94 < (giftbuttonQ + 3.41) && (giftbuttonQ + 3.41) < 3.66) {
         share6 += parseInt(`${share6}`) + 1;
      }
      if ((giftbuttonQ * 2.63) == 1.73 && delegate_tn) {
         giftbuttonQ *= (vietnamS.size ^ (delegate_tn ? 2 : 4));
      }
         giftbuttonQ /= Math.max(parseInt(`${share6}`) + 1, 1);
          let tickj: Map<any, any> = new Map([[String.fromCharCode(111,95,50,50,95,115,108,105,112,112,97,103,101,0),785], [String.fromCharCode(115,95,55,53,95,102,114,111,109,98,105,110,100,0),652]]);
          let iconpipshrink8 = String.fromCharCode(116,111,117,99,104,101,115,95,53,95,49,57,0);
          let tailI = String.fromCharCode(99,95,55,57,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0);
         delegate_tn = share6 >= 89.49;
         tickj = new Map([[iconpipshrink8, (tailI == String.fromCharCode(117,0) ? tailI.length : iconpipshrink8.length)]]);
         giftbuttonQ += parseInt(`${giftbuttonQ}`) & 3;
      for (let s = 0; s < 2; s++) {
         share6 *= parseInt(`${giftbuttonQ}`) << (Math.min(5, Math.abs(3)));
      }
          let with_wcD: Map<any, any> = new Map([[String.fromCharCode(100,95,53,57,95,98,101,103,105,110,0),String.fromCharCode(122,95,52,56,95,110,118,111,105,99,101,0)], [String.fromCharCode(120,95,57,55,95,117,110,115,101,108,101,99,116,101,100,0),String.fromCharCode(101,120,112,111,114,116,95,118,95,57,53,0)]]);
          let servicet = 2.0;
          let buttonn: Map<any, any> = new Map([[String.fromCharCode(98,110,109,112,105,95,105,95,56,55,0),String.fromCharCode(105,95,54,57,95,111,98,116,97,105,110,0)], [String.fromCharCode(121,95,51,95,102,114,97,109,101,100,97,116,97,0),String.fromCharCode(99,111,108,108,97,112,115,101,95,107,95,52,57,0)], [String.fromCharCode(110,95,54,95,98,111,117,110,100,115,0),String.fromCharCode(121,95,50,50,95,108,105,118,101,115,116,114,101,97,109,0)]]);
         vietnamS = new Map([[`${with_wcD.size}`, parseInt(`${servicet}`)]]);
         with_wcD = new Map([[`${buttonn.size}`, buttonn.size]]);
         servicet *= buttonn.size;
      let mbnativeR = 6952703.0 >= giftbuttonQ;
      do {
          let episodes = String.fromCharCode(100,95,56,56,95,112,114,105,109,101,0);
          let textlayoutmanager4: Map<any, any> = new Map([[String.fromCharCode(120,95,50,52,95,104,101,108,100,0),true ], [String.fromCharCode(112,114,101,100,105,99,97,116,101,95,48,95,50,48,0),true ], [String.fromCharCode(116,95,51,48,95,114,115,116,114,105,112,0),false ]]);
         giftbuttonQ /= Math.max(1, parseInt(`${giftbuttonQ}`) / (Math.max(episodes.length, 10)));
         episodes += `${3 << (Math.min(3, Math.abs(textlayoutmanager4.size)))}`;
         textlayoutmanager4 = new Map([[`${textlayoutmanager4.size}`, 2]]);
         if (mbnativeR) {
            break;
         }
      } while (mbnativeR && (giftbuttonQ < 5.92));
      memberR = new Map([[`${vignette5}`, 3 ^ parseInt(`${vignette5}`)]]);
      if (refreshb) {
         break;
      }
   } while (refreshb && (unfillh.length < memberR.size));
   let const_tkM = downloader4 <= 6012290;
   do {
       let expiredf = String.fromCharCode(122,95,51,53,95,100,101,108,105,118,101,114,0);
       let detail6 = true;
       let rules2 = String.fromCharCode(100,101,116,101,99,116,95,54,95,51,54,0);
       let iconarrowrightorangeQ = String.fromCharCode(112,115,110,114,120,95,114,95,51,53,0);
       let settingsi = 1;
         iconarrowrightorangeQ += `${rules2.length}`;
      while (expiredf.length >= 5) {
          let redgoalw = String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,57,95,56,50,0);
          let foundl = 0.0;
          let plusn = 4.0;
          let e_viewy: Map<any, any> = new Map([[String.fromCharCode(118,105,115,97,95,56,95,49,0),145], [String.fromCharCode(109,101,109,111,114,121,98,97,114,114,105,101,114,95,116,95,55,53,0),856], [String.fromCharCode(112,111,115,116,115,99,97,108,101,95,108,95,49,52,0),676]]);
          let matchU = 2.0;
         detail6 = iconarrowrightorangeQ == String.fromCharCode(122,0);
         redgoalw += `${3 * parseInt(`${plusn}`)}`;
         foundl /= Math.max(3, redgoalw.length << (Math.min(Math.abs(2), 5)));
         plusn /= Math.max((parseFloat(`${String.fromCharCode(82,0) == redgoalw ? redgoalw.length : parseInt(`${foundl}`)}`)), 4);
         e_viewy = new Map([[`${foundl}`, parseInt(`${foundl}`) / (Math.max(redgoalw.length, 1))]]);
         matchU += parseFloat(`${parseInt(`${matchU}`)}`);
         break;
      }
          let relatedo: Map<any, any> = new Map([[String.fromCharCode(97,95,53,49,95,99,117,114,114,101,110,116,0),String.fromCharCode(101,95,54,54,95,115,116,101,110,99,105,108,0)], [String.fromCharCode(107,95,54,56,95,109,97,114,107,115,0),String.fromCharCode(112,95,54,53,95,110,99,104,117,110,107,0)], [String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,95,110,95,51,56,0),String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,95,118,95,49,48,48,0)]]);
         iconarrowrightorangeQ += "3";
         relatedo = new Map([[`${relatedo.size}`, 2 * relatedo.size]]);
      for (let c = 0; c < 2; c++) {
         settingsi |= (2 * (detail6 ? 5 : 5));
      }
      for (let w = 0; w < 3; w++) {
         detail6 = settingsi < 60;
      }
      for (let h = 0; h < 1; h++) {
         detail6 = expiredf.length == 22 || settingsi == 22;
      }
         iconarrowrightorangeQ += `${(expiredf == String.fromCharCode(107,0) ? settingsi : expiredf.length)}`;
         iconarrowrightorangeQ += `${expiredf.length}`;
      for (let p = 0; p < 3; p++) {
         rules2 += `${expiredf.length}`;
      }
      while (rules2.endsWith(iconarrowrightorangeQ)) {
         iconarrowrightorangeQ = `${2 << (Math.min(Math.abs(settingsi), 2))}`;
         break;
      }
         expiredf = `${expiredf.length | iconarrowrightorangeQ.length}`;
         iconarrowrightorangeQ += `${((detail6 ? 5 : 2))}`;
         iconarrowrightorangeQ += `${settingsi}`;
         rules2 += `${rules2.length | expiredf.length}`;
      while (1 >= rules2.length) {
         detail6 = (24 > (rules2.length + (!detail6 ? 24 : rules2.length)));
         break;
      }
      downloader4 += 1;
      if (const_tkM) {
         break;
      }
   } while (const_tkM && (5.31 < (downloader4 / (Math.max(mbridgeg, 8)))));
        this.#triggerFirebaseEvent('boot');
        
    }

    
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        this.#triggerUmengEvent(FSliderCenter.FMiddleBaseline, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FMiddleBaseline, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerCustomEvent('view', IIPhoneshare.FLibjsiBell, {
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        this.#triggerUmengEvent(FSliderCenter.FProfileinactiveResult, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FProfileinactiveResult, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerCustomEvent('click', IIPhoneshare.FLibjsiBell, {
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
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
        this.#triggerUmengEvent(FSliderCenter.FChangeString, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FChangeString, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerCustomEvent('view', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
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
        this.#triggerUmengEvent(FSliderCenter.FBasketballhometeamSend, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FBasketballhometeamSend, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        this.#triggerCustomEvent('click', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
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
        this.#triggerUmengEvent(FSliderCenter.FVipsportLibrrc, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FVipsportLibrrc, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('view', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
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
        this.#triggerUmengEvent(FSliderCenter.FSource, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FSource, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('click', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });
    }

    
    static watchAnytimeViewsAnalytics = ({ isXmode = false }: { isXmode?: boolean } = { isXmode: false }) => {
        let evendId: FSliderCenter = FSliderCenter.FPlusLibavutil;

        if (isXmode) {
            evendId = FSliderCenter.FImage;
        }

        this.#triggerUmengEvent(evendId);
        this.#triggerFirebaseCustomEvent(evendId);
        this.#triggerCustomEvent('view', isXmode
            ? IIPhoneshare.FAwayicon
            : IIPhoneshare.FIconclosewhitebg,
        );
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: FSliderCenter = FSliderCenter.FGreenarrowupFound;

        if (isXmode) {
            evendId = FSliderCenter.FStatsnomoredataStatisticsactive;
        }

        let prefixUserId = '';

        
        if (userId !== '') {
            prefixUserId = 'userId_' + userId;
        } else {
            prefixUserId = 'guest';
        }

        this.#triggerUmengEvent(evendId, {
            [prefixUserId]: vod_id,
        });
        this.#triggerFirebaseCustomEvent(evendId, {
            [prefixUserId]: vod_id,
        });
        this.#triggerCustomEvent('view', isXmode
            ? IIPhoneshare.FCornerkickTime
            : IIPhoneshare.FDefaultfootballbgApple,
            {
                params: {
                    desc_1: 'user.id:' + userId,
                    
                }
            }
        );
    }

    static watchAnytimeVideoClicksAnalytics = () => {
       let h_lockP = 5.0;
    let update_piY: Map<any, any> = new Map([[String.fromCharCode(108,104,115,95,49,95,51,57,0),true ], [String.fromCharCode(104,95,56,54,95,112,114,105,118,107,101,121,0),false ], [String.fromCharCode(113,95,50,52,95,116,111,111,108,116,105,112,115,0),false ]]);
    let statistics5 = String.fromCharCode(100,95,57,53,95,109,111,100,101,114,110,0);
    let livenodatabgimg_ = String.fromCharCode(104,97,110,100,108,101,114,115,95,55,95,50,48,0);
    let basketballicono: Array<any> = [String.fromCharCode(114,101,115,105,100,117,97,108,95,114,95,56,49,0), String.fromCharCode(98,121,116,101,115,104,117,109,97,110,95,55,95,51,48,0)];
    let libjsi5 = 2.0;
    let iconedit_ = String.fromCharCode(114,101,99,111,109,112,111,115,101,95,119,95,50,48,0);
    let regengE = 0.0;
    let dangerS: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,101,115,116,101,114,115,95,100,95,57,53,0),String.fromCharCode(97,99,100,101,99,95,55,95,57,0)], [String.fromCharCode(99,95,55,55,95,115,105,103,105,100,0),String.fromCharCode(113,95,51,55,95,116,111,112,109,111,115,116,0)], [String.fromCharCode(112,95,50,52,95,97,115,116,114,111,110,111,109,105,99,97,108,0),String.fromCharCode(104,101,97,100,108,105,110,101,95,97,95,57,49,0)]]);
    let register__lY: Array<any> = [String.fromCharCode(109,105,112,115,100,115,112,95,111,95,53,50,0), String.fromCharCode(113,116,115,95,102,95,56,49,0), String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,102,95,54,51,0)];
    let middlea = 2;
       let lighty = false;
       let editr = String.fromCharCode(111,108,100,101,114,95,49,95,54,51,0);
       let unreadU = 3;
         unreadU ^= unreadU ^ editr.length;
         lighty = editr.includes(`${unreadU}`);
       let buffer8 = false;
       let ewardedH = true;
      let webviewT = String.fromCharCode(95,55,120,103,0) == editr;
      do {
         editr = `${3 + editr.length}`;
         if (webviewT) {
            break;
         }
      } while ((editr.includes(`${ewardedH}`)) && webviewT);
          let sinaH: Array<any> = [192, 120];
         editr = `${((lighty ? 5 : 5) - editr.length)}`;
         sinaH.push(sinaH.length ^ sinaH.length);
      let predictionbannershared6 = 6520143 <= editr.length;
      do {
         editr += `${((lighty ? 2 : 2) - editr.length)}`;
         if (predictionbannershared6) {
            break;
         }
      } while ((4 == editr.length) && predictionbannershared6);
         ewardedH = 64 < editr.length;
      let interstitialq = ewardedH ? !ewardedH : ewardedH;
      do {
         ewardedH = unreadU == 21;
         if (interstitialq) {
            break;
         }
      } while (interstitialq && (!lighty || ewardedH));
      while (buffer8 && ewardedH) {
         buffer8 = unreadU >= 82;
         break;
      }
      basketballicono.push(parseInt(`${h_lockP}`) / 3);
   for (let q = 0; q < 1; q++) {
       let contextG = String.fromCharCode(98,97,99,107,117,112,95,111,95,52,53,0);
      if (contextG.endsWith(`${contextG.length}`)) {
         contextG += `${contextG.length / (Math.max(9, contextG.length))}`;
      }
      if (2 == contextG.length) {
         contextG = `${contextG.length % (Math.max(contextG.length, 6))}`;
      }
      for (let o = 0; o < 3; o++) {
          let internetk = true;
          let windy: Array<any> = [322, 575, 768];
          let greyr: Array<any> = [754, 623];
         contextG = `${((internetk ? 1 : 3) % (Math.max(2, 7)))}`;
         internetk = 78 > greyr.length;
         windy.push(greyr.length);
      }
      statistics5 = `${parseInt(`${libjsi5}`) % 1}`;
   }
      iconedit_ = `${parseInt(`${regengE}`)}`;
   while ((5.87 - h_lockP) <= 5.61 || (livenodatabgimg_.length - parseInt(`${h_lockP}`)) <= 4) {
      livenodatabgimg_ += `${statistics5.length * basketballicono.length}`;
      break;
   }
   if (4.14 < regengE) {
      statistics5 = `${parseInt(`${libjsi5}`) - basketballicono.length}`;
   }
   if (statistics5.length < update_piY.size) {
      statistics5 += `${iconedit_.length | 3}`;
   }
   for (let y = 0; y < 2; y++) {
      statistics5 += `${(livenodatabgimg_ == String.fromCharCode(117,0) ? statistics5.length : livenodatabgimg_.length)}`;
   }
   while (1 <= (statistics5.length >> (Math.min(Math.abs(5), 5)))) {
      statistics5 = "1";
      break;
   }

        this.#triggerUmengEvent(FSliderCenter.FBasketballawayteam);

   let eventsplasha = livenodatabgimg_ == String.fromCharCode(111,111,109,0);
   do {
       let privacyc = String.fromCharCode(112,102,114,97,109,101,95,104,95,51,50,0);
      for (let w = 0; w < 2; w++) {
          let modityc = false;
          let predictionbuttonu = false;
          let progressV = true;
         privacyc = `${((progressV ? 3 : 4) * 2)}`;
         modityc = modityc && modityc;
         predictionbuttonu = (modityc ? modityc : !modityc);
      }
       let footballtrophy4: Array<any> = [920, 65, 522];
      let questR = 5471086 >= footballtrophy4.length;
      do {
         footballtrophy4 = [3];
         if (questR) {
            break;
         }
      } while (questR && (privacyc.length >= 2));
      livenodatabgimg_ += `${iconedit_.length}`;
      if (eventsplasha) {
         break;
      }
   } while (eventsplasha && (livenodatabgimg_.startsWith(`${regengE}`)));
   let statisticsinactiveR = 6870701 >= update_piY.size;
   do {
       let sideE = true;
       let libaneX = String.fromCharCode(114,95,53,48,95,113,117,101,115,116,105,111,110,0);
       let fcdaebecbcbafcdfceaaeccfeacdbm = String.fromCharCode(103,105,102,95,107,95,57,50,0);
       let ksadX: Map<any, any> = new Map([[String.fromCharCode(109,95,52,55,95,97,100,100,114,0),130], [String.fromCharCode(109,97,108,108,111,99,95,102,95,50,57,0),415], [String.fromCharCode(107,95,53,55,95,114,101,103,97,116,104,101,114,105,110,103,0),835]]);
       let final_fnK = String.fromCharCode(122,95,51,48,95,103,97,112,0);
      if (sideE) {
         final_fnK = `${final_fnK.length}`;
      }
         ksadX = new Map([[libaneX, final_fnK.length | libaneX.length]]);
          let attributedstringl = String.fromCharCode(118,95,51,57,95,100,111,99,108,105,115,116,115,0);
          let subouti = 1;
          let score1 = String.fromCharCode(114,95,55,55,95,115,97,103,97,0);
         final_fnK += "3";
         attributedstringl = `${(String.fromCharCode(111,0) == attributedstringl ? attributedstringl.length : subouti)}`;
         subouti -= 3;
         score1 += `${subouti / 3}`;
         fcdaebecbcbafcdfceaaeccfeacdbm = "1";
          let giftT = 4.0;
          let libavutilp = String.fromCharCode(118,97,108,105,100,97,116,101,100,95,105,95,49,54,0);
          let halffieldimagel: Map<any, any> = new Map([[String.fromCharCode(110,95,48,95,110,104,97,110,99,101,0),74], [String.fromCharCode(115,108,97,118,101,115,95,114,95,49,48,48,0),341], [String.fromCharCode(102,95,49,51,95,112,114,101,100,111,119,110,108,111,97,100,0),344]]);
         sideE = halffieldimagel.size >= 98 || libavutilp == String.fromCharCode(85,0);
         giftT /= Math.max(3, parseFloat(`${parseInt(`${giftT}`)}`));
         libavutilp = `${parseInt(`${giftT}`)}`;
          let dacccfaabfbcbadeebddcabacdffdbp = 4.0;
          let turnV = 0.0;
         ksadX = new Map([[`${ksadX.size}`, 2 - parseInt(`${turnV}`)]]);
         dacccfaabfbcbadeebddcabacdffdbp *= 2 >> (Math.min(Math.abs(parseInt(`${dacccfaabfbcbadeebddcabacdffdbp}`)), 4));
         turnV += parseInt(`${dacccfaabfbcbadeebddcabacdffdbp}`) >> (Math.min(3, Math.abs(1)));
       let schedulerC = String.fromCharCode(101,99,111,117,110,116,95,118,95,56,57,0);
       let plashs = String.fromCharCode(116,109,112,111,95,114,95,50,57,0);
          let brightnesst = 3;
          let leaguedetailsbgs = String.fromCharCode(112,95,54,56,95,108,111,99,97,116,101,0);
          let common1 = false;
         schedulerC = `${(fcdaebecbcbafcdfceaaeccfeacdbm == String.fromCharCode(52,0) ? fcdaebecbcbafcdfceaaeccfeacdbm.length : leaguedetailsbgs.length)}`;
         brightnesst ^= brightnesst;
         leaguedetailsbgs += `${brightnesst << (Math.min(5, Math.abs(2)))}`;
         common1 = !common1;
         ksadX = new Map([[`${ksadX.size}`, 1]]);
      for (let p = 0; p < 2; p++) {
          let defaultplayerimgv = String.fromCharCode(101,95,54,49,95,114,98,115,112,0);
          let iconfeedbackN = String.fromCharCode(111,95,56,56,95,116,114,97,112,0);
          let sharedv = 0;
          let orangeuparrowe: Map<any, any> = new Map([[String.fromCharCode(120,95,52,53,95,115,111,102,116,102,108,111,97,116,0),490], [String.fromCharCode(115,95,54,57,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0),870], [String.fromCharCode(122,95,56,51,95,116,105,108,101,120,0),339]]);
         fcdaebecbcbafcdfceaaeccfeacdbm += `${sharedv}`;
         defaultplayerimgv += `${(iconfeedbackN == String.fromCharCode(86,0) ? iconfeedbackN.length : orangeuparrowe.size)}`;
         sharedv -= defaultplayerimgv.length;
         orangeuparrowe.set(defaultplayerimgv, 1 >> (Math.min(5, iconfeedbackN.length)));
      }
         schedulerC += `${2 & fcdaebecbcbafcdfceaaeccfeacdbm.length}`;
      while (!schedulerC.endsWith(final_fnK)) {
          let interstitial1 = 0;
          let usernameK = String.fromCharCode(102,95,49,50,95,105,110,116,101,103,114,97,116,101,100,0);
          let config8: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,95,114,108,112,0),false ], [String.fromCharCode(115,104,97,114,100,95,117,95,57,55,0),true ]]);
          let watchx: Map<any, any> = new Map([[String.fromCharCode(105,110,115,101,114,116,101,100,95,50,95,51,56,0),55], [String.fromCharCode(103,95,53,51,95,98,117,115,121,0),968]]);
          let source0 = false;
         final_fnK += `${watchx.size ^ schedulerC.length}`;
         interstitial1 -= 3;
         usernameK += `${usernameK.length | 3}`;
         config8.set(usernameK, interstitial1 / (Math.max(3, 5)));
         watchx.set(`${source0}`, ((source0 ? 3 : 3) | interstitial1));
         break;
      }
      let codegenm = 8532459 <= ksadX.size;
      do {
         ksadX.set(plashs, plashs.length + 2);
         if (codegenm) {
            break;
         }
      } while (((1 * libaneX.length) >= 3 || 1 >= (ksadX.size * libaneX.length)) && codegenm);
          let iconlogoutX = String.fromCharCode(112,95,53,50,95,109,112,101,103,116,115,0);
          let xadsdkL = String.fromCharCode(109,95,57,54,95,115,101,97,100,0);
         ksadX.set(libaneX, (String.fromCharCode(68,0) == libaneX ? fcdaebecbcbafcdfceaaeccfeacdbm.length : libaneX.length));
         iconlogoutX = `${xadsdkL.length}`;
         xadsdkL += `${xadsdkL.length << (Math.min(Math.abs(1), 4))}`;
         ksadX = new Map([[`${ksadX.size}`, (String.fromCharCode(54,0) == plashs ? plashs.length : ksadX.size)]]);
      update_piY = new Map([[`${basketballicono.length}`, basketballicono.length]]);
      if (statisticsinactiveR) {
         break;
      }
   } while (statisticsinactiveR && ((3.18 * libjsi5) < 3.34 || 3.18 < (libjsi5 * parseFloat(`${update_piY.size}`))));
   for (let m = 0; m < 3; m++) {
       let downR = 3;
       let episodesd = String.fromCharCode(102,95,54,54,95,105,110,116,101,103,101,114,0);
       let macauv: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,105,110,103,95,117,95,57,49,0),409], [String.fromCharCode(118,109,110,99,95,102,95,50,52,0),919]]);
       let scoreJ = String.fromCharCode(110,95,52,53,95,117,110,112,97,99,107,101,100,0);
         macauv = new Map([[`${macauv.size}`, 2 & macauv.size]]);
      if (!Array.from(macauv.keys()).includes(`${downR}`)) {
         downR %= Math.max(3, (String.fromCharCode(98,0) == episodesd ? macauv.size : episodesd.length));
      }
      while (2 > (macauv.size * 1) && 1 > (scoreJ.length * macauv.size)) {
         scoreJ = `${episodesd.length}`;
         break;
      }
      if (!scoreJ.endsWith(`${downR}`)) {
         downR <<= Math.min(Math.abs(downR ^ 3), 2);
      }
      while (scoreJ != episodesd) {
         episodesd += `${episodesd.length - macauv.size}`;
         break;
      }
         downR %= Math.max(2, scoreJ.length);
      while ((scoreJ.length | macauv.size) < 4 || (4 | scoreJ.length) < 5) {
         scoreJ = `${2 + downR}`;
         break;
      }
      let redcirclebg1 = macauv.size >= 6964814;
      do {
         macauv.set(scoreJ, 1 | scoreJ.length);
         if (redcirclebg1) {
            break;
         }
      } while ((!episodesd.startsWith(`${macauv.size}`)) && redcirclebg1);
         scoreJ += `${3 << (Math.min(3, Math.abs(downR)))}`;
          let playlistY = String.fromCharCode(111,112,101,114,97,116,105,111,110,95,106,95,54,0);
          let mbbannerk = String.fromCharCode(118,95,57,51,95,114,101,103,117,108,97,116,101,0);
         episodesd = `${(String.fromCharCode(105,0) == episodesd ? playlistY.length : episodesd.length)}`;
         playlistY = `${mbbannerk.length}`;
         mbbannerk += `${mbbannerk.length % 2}`;
      let product1 = macauv.size >= 5889829;
      do {
          let runtimescheduler1 = 5.0;
          let configL = String.fromCharCode(97,100,100,109,111,100,95,101,95,56,50,0);
          let coreV = 0;
          let bridge3 = true;
          let googlep = String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,95,100,95,51,56,0);
         macauv = new Map([[`${macauv.size}`, 2]]);
         runtimescheduler1 *= (parseFloat(`${googlep == String.fromCharCode(80,0) ? coreV : googlep.length}`));
         configL += `${2 & configL.length}`;
         coreV /= Math.max(2, 1);
         bridge3 = parseFloat(`${configL.length}`) > runtimescheduler1;
         if (product1) {
            break;
         }
      } while ((!scoreJ.includes(`${macauv.size}`)) && product1);
          let moduleR = 2.0;
          let webviewO = String.fromCharCode(106,95,51,57,95,122,98,117,102,0);
         macauv.set(webviewO, 1 + webviewO.length);
         moduleR /= Math.max(parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${moduleR}`)), 5))}`), 5);
      statistics5 = `${parseInt(`${regengE}`)}`;
   }
   for (let v = 0; v < 1; v++) {
      libjsi5 += parseFloat(`${parseInt(`${h_lockP}`)}`);
   }
   if (5 < (2 << (Math.min(4, iconedit_.length)))) {
      update_piY = new Map([[`${dangerS.size}`, dangerS.size ^ 3]]);
   }
      regengE *= parseFloat(`${iconedit_.length | livenodatabgimg_.length}`);
   let rewindU = dangerS.size <= 7375188;
   do {
      dangerS = new Map([[statistics5, statistics5.length]]);
      if (rewindU) {
         break;
      }
   } while (rewindU && (!statistics5.includes(`${dangerS.size}`)));
   for (let h = 0; h < 3; h++) {
      update_piY.set(livenodatabgimg_, 1 & livenodatabgimg_.length);
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FBasketballawayteam);

      basketballicono.push(3);
       let largesoundb = String.fromCharCode(107,101,121,112,97,116,104,95,121,95,57,54,0);
       let searchbarK: Array<any> = [972, 541];
       let awayteamfielda = false;
         searchbarK = [searchbarK.length];
       let statisticsinactive6 = String.fromCharCode(111,95,56,52,95,116,101,120,116,98,101,0);
       let iconplay5 = String.fromCharCode(100,101,116,95,111,95,52,49,0);
          let greyarrowupe = 3.0;
          let imagewatchliveR = 1.0;
         statisticsinactive6 += `${((awayteamfielda ? 4 : 2))}`;
         greyarrowupe += parseFloat(`${parseInt(`${imagewatchliveR}`)}`);
      for (let l = 0; l < 1; l++) {
          let node6 = String.fromCharCode(101,105,103,104,116,115,118,120,95,112,95,55,52,0);
         statisticsinactive6 += `${((awayteamfielda ? 5 : 5) - largesoundb.length)}`;
         node6 = `${node6.length}`;
      }
          let progressl = String.fromCharCode(121,95,52,95,116,100,115,102,0);
         awayteamfielda = (40 >= (statisticsinactive6.length * (!awayteamfielda ? statisticsinactive6.length : 40)));
         progressl = `${progressl.length - 2}`;
         statisticsinactive6 = `${3 >> (Math.min(5, statisticsinactive6.length))}`;
       let subs3 = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,99,95,56,52,0);
         statisticsinactive6 += `${iconplay5.length}`;
      for (let x = 0; x < 3; x++) {
          let iconcloseO = String.fromCharCode(114,95,51,52,0);
          let iconorientationJ = 3;
          let langkey8 = String.fromCharCode(106,95,54,53,95,114,102,112,115,0);
         statisticsinactive6 = `${iconorientationJ}`;
         iconcloseO = `${(iconcloseO == String.fromCharCode(51,0) ? iconcloseO.length : langkey8.length)}`;
         iconorientationJ -= langkey8.length + iconcloseO.length;
      }
      libjsi5 += parseFloat(`${basketballicono.length % (Math.max(3, 1))}`);
   while (Array.from(dangerS.keys()).includes(`${regengE}`)) {
       let dropdownN = 3.0;
      if ((dropdownN - dropdownN) >= 4.68 && (dropdownN - 4.68) >= 1.25) {
         dropdownN *= parseFloat(`${parseInt(`${dropdownN}`) % (Math.max(3, parseInt(`${dropdownN}`)))}`);
      }
      while ((3.73 * dropdownN) < 4.2) {
         dropdownN *= parseFloat(`${parseInt(`${dropdownN}`)}`);
         break;
      }
      for (let z = 0; z < 1; z++) {
         dropdownN -= parseFloat(`${parseInt(`${dropdownN}`) | parseInt(`${dropdownN}`)}`);
      }
      dangerS.set(`${update_piY.size}`, dangerS.size / (Math.max(10, update_piY.size)));
      break;
   }
   while (Array.from(update_piY.keys()).includes(`${dangerS.size}`)) {
      update_piY = new Map([[`${h_lockP}`, (iconedit_ == String.fromCharCode(117,0) ? parseInt(`${h_lockP}`) : iconedit_.length)]]);
      break;
   }
   if (libjsi5 < 4.9) {
      libjsi5 -= parseFloat(`${parseInt(`${h_lockP}`) & dangerS.size}`);
   }
      basketballicono = [dangerS.size];
      h_lockP -= parseFloat(`${update_piY.size + 2}`);
      basketballicono.push(parseInt(`${regengE}`) - 1);
        this.#triggerCustomEvent('click', IIPhoneshare.FBrightness);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
       let aboutJ = 1;
    let default_mmR = false;
    let giftQ: Array<any> = [163, 161, 479];
    let recommendationm = String.fromCharCode(100,95,49,53,95,107,101,121,118,97,108,0);
    let combined9 = 2.0;
    let clubN: Array<any> = [820, 74, 566];
    let zhengpian_ = 1;
    let kuaishou9 = String.fromCharCode(112,111,112,117,112,115,95,121,95,55,55,0);
    let goallogoB = 1;
   while (3 < (aboutJ + 1) || (1 + zhengpian_) < 1) {
      zhengpian_ += (String.fromCharCode(70,0) == recommendationm ? recommendationm.length : parseInt(`${combined9}`));
      break;
   }
   if ((2 & zhengpian_) < 3 && 2 < (parseInt(`${combined9}`) * zhengpian_)) {
      zhengpian_ -= recommendationm.length >> (Math.min(5, Math.abs(parseInt(`${combined9}`))));
   }
      combined9 -= zhengpian_ - parseInt(`${combined9}`);
      clubN = [giftQ.length | clubN.length];
   let footballtrophyx = clubN.length <= 5330395;
   do {
      clubN.push(parseInt(`${combined9}`) % 3);
      if (footballtrophyx) {
         break;
      }
   } while (((3 + clubN.length) > 3) && footballtrophyx);
   let playlistQ = recommendationm.length <= 7449200;
   do {
       let dicelogo3 = 0.0;
       let phonesharee = String.fromCharCode(120,95,54,49,95,105,110,105,116,105,97,108,105,122,101,100,0);
       let nalytics3 = 4.0;
       let neonD = String.fromCharCode(118,95,49,57,95,116,114,105,108,105,110,101,97,114,0);
       let libswscaled = String.fromCharCode(116,119,111,108,111,111,112,95,103,95,50,49,0);
          let upgradeS: Map<any, any> = new Map([[String.fromCharCode(106,105,116,116,101,114,95,106,95,50,52,0),72], [String.fromCharCode(108,97,122,121,95,51,95,49,56,0),442]]);
          let product3 = 3.0;
         libswscaled += "1";
         upgradeS.set(`${product3}`, upgradeS.size);
         product3 /= Math.max(5, 2);
         dicelogo3 += libswscaled.length;
       let darkd: Map<any, any> = new Map([[String.fromCharCode(118,112,100,120,95,57,95,54,0),String.fromCharCode(110,95,57,57,95,109,111,118,101,0)], [String.fromCharCode(109,95,51,54,95,109,105,115,115,101,115,0),String.fromCharCode(122,111,111,109,105,110,103,95,101,95,56,52,0)]]);
       let selli: Map<any, any> = new Map([[String.fromCharCode(118,109,115,108,95,118,95,53,0),465], [String.fromCharCode(108,95,55,57,95,108,117,109,97,107,101,121,0),814], [String.fromCharCode(115,95,57,50,95,112,111,108,121,115,116,97,114,0),501]]);
       let neonW: Array<any> = [611, 36, 565];
          let libruntimeexecutorK = true;
         selli.set(`${libruntimeexecutorK}`, ((libruntimeexecutorK ? 5 : 1)));
      if ((3 / (Math.max(10, libswscaled.length))) <= 4 || 3 <= (darkd.size / (Math.max(libswscaled.length, 4)))) {
          let tailR = 4.0;
          let settingv = String.fromCharCode(119,95,50,95,105,110,115,101,116,115,0);
          let iconsharefriendsK = 4.0;
         libswscaled += `${libswscaled.length}`;
         tailR -= parseInt(`${iconsharefriendsK}`) - 3;
         settingv = "3";
         iconsharefriendsK *= parseFloat(`${settingv.length}`);
      }
         neonW.push(parseInt(`${dicelogo3}`));
       let dangerl = String.fromCharCode(117,95,55,95,115,116,97,110,100,97,114,100,0);
       let cancelA = String.fromCharCode(116,108,117,116,95,113,95,53,57,0);
       let downarrowT = false;
       let sendW = false;
      let xvodW = sendW ? !sendW : sendW;
      do {
         sendW = !downarrowT || neonD.length > 10;
         if (xvodW) {
            break;
         }
      } while ((neonD.startsWith(`${sendW}`)) && xvodW);
         downarrowT = 20 == selli.size || 20 == darkd.size;
      let cinit_4O = 6582445 <= phonesharee.length;
      do {
          let morey: Map<any, any> = new Map([[String.fromCharCode(114,117,110,116,101,115,116,115,95,99,95,52,51,0),false ], [String.fromCharCode(116,111,109,99,114,121,112,116,95,54,95,56,55,0),false ]]);
          let maile: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,102,95,55,56,0),24], [String.fromCharCode(113,95,53,51,95,102,105,120,117,112,0),554], [String.fromCharCode(102,95,53,48,95,116,119,101,97,107,0),495]]);
         phonesharee += `${(3 ^ (downarrowT ? 1 : 5))}`;
         morey = new Map([[`${maile.size}`, morey.size]]);
         maile.set(`${maile.size}`, maile.size * morey.size);
         if (cinit_4O) {
            break;
         }
      } while (cinit_4O && ((neonW.length + 1) < 1));
      while (dangerl.length <= 1) {
          let positionfieldK = String.fromCharCode(115,117,98,95,105,95,56,50,0);
          let matchdetailbgC = String.fromCharCode(100,95,57,56,95,104,101,97,100,108,105,110,101,0);
         sendW = selli.size <= darkd.size;
         positionfieldK = `${matchdetailbgC.length}`;
         matchdetailbgC = "2";
         break;
      }
          let verticalm: Array<any> = [452, 175];
          let unimplementedviewO = false;
         neonW = [dangerl.length];
         verticalm.push(2 | verticalm.length);
         unimplementedviewO = unimplementedviewO && verticalm.length > 16;
      if (cancelA.endsWith(`${sendW}`)) {
          let chinasamed = 4.0;
         sendW = selli.size >= 84 || neonD.length >= 84;
         chinasamed += parseFloat(`${2 | parseInt(`${chinasamed}`)}`);
      }
      recommendationm = `${(phonesharee == String.fromCharCode(116,0) ? phonesharee.length : parseInt(`${combined9}`))}`;
      if (playlistQ) {
         break;
      }
   } while (playlistQ && (!recommendationm.startsWith(`${zhengpian_}`)));
      default_mmR = giftQ.length > 8 && 8 > aboutJ;
      combined9 /= Math.max(1, 2 + giftQ.length);
   let selectionv = default_mmR ? !default_mmR : default_mmR;
   do {
       let philippiness = String.fromCharCode(101,95,54,57,95,112,114,101,0);
       let modules5 = String.fromCharCode(115,99,104,117,110,99,107,95,109,95,52,54,0);
       let annerj: Array<any> = [537, 52];
      if ((annerj.length - modules5.length) < 4) {
          let iconstari = 1;
          let homeloadingX = String.fromCharCode(109,95,57,95,115,116,97,116,101,112,0);
         modules5 += `${iconstari << (Math.min(Math.abs(3), 1))}`;
         iconstari /= Math.max(1, homeloadingX.length | homeloadingX.length);
      }
       let fcdaebecbcbafcdfceaaeccfeacdbL = false;
      while (3 >= (4 / (Math.max(9, annerj.length)))) {
         annerj = [philippiness.length];
         break;
      }
         philippiness = `${annerj.length ^ 1}`;
      let jingdongJ = modules5.length >= 8521002;
      do {
          let filledM = 1;
          let searchbarJ = 2.0;
          let buttonF = String.fromCharCode(120,95,57,56,95,115,116,97,114,116,105,110,103,0);
          let showc = String.fromCharCode(112,111,108,101,95,113,95,51,48,0);
          let defaultprofilepicU = String.fromCharCode(116,101,115,116,114,101,115,117,108,116,95,54,95,53,54,0);
         modules5 += `${filledM - 1}`;
         filledM *= (buttonF == String.fromCharCode(51,0) ? buttonF.length : parseInt(`${searchbarJ}`));
         searchbarJ /= Math.max(2, 2);
         showc += `${parseInt(`${searchbarJ}`)}`;
         defaultprofilepicU = `${1 * buttonF.length}`;
         if (jingdongJ) {
            break;
         }
      } while ((modules5.length <= philippiness.length) && jingdongJ);
      if (!fcdaebecbcbafcdfceaaeccfeacdbL) {
         modules5 = "3";
      }
      for (let f = 0; f < 3; f++) {
          let dicec = String.fromCharCode(102,95,49,54,95,105,115,122,101,114,111,0);
         fcdaebecbcbafcdfceaaeccfeacdbL = !fcdaebecbcbafcdfceaaeccfeacdbL;
         dicec += "2";
      }
      let r_imagev = fcdaebecbcbafcdfceaaeccfeacdbL ? !fcdaebecbcbafcdfceaaeccfeacdbL : fcdaebecbcbafcdfceaaeccfeacdbL;
      do {
          let greenarrowupm = String.fromCharCode(109,112,101,103,117,116,105,108,115,95,114,95,55,48,0);
          let libfabricjnif = String.fromCharCode(108,95,49,52,95,105,110,104,105,98,105,116,0);
         fcdaebecbcbafcdfceaaeccfeacdbL = modules5.length == 84;
         greenarrowupm += `${libfabricjnif.length}`;
         libfabricjnif = `${greenarrowupm.length}`;
         if (r_imagev) {
            break;
         }
      } while (r_imagev && (fcdaebecbcbafcdfceaaeccfeacdbL));
          let refreshborderlessz = 2.0;
          let clockG: Array<any> = [178, 825];
         fcdaebecbcbafcdfceaaeccfeacdbL = !fcdaebecbcbafcdfceaaeccfeacdbL;
         refreshborderlessz /= Math.max(4, parseInt(`${refreshborderlessz}`));
         clockG.push(parseInt(`${refreshborderlessz}`) >> (Math.min(clockG.length, 1)));
      default_mmR = 57 <= annerj.length;
      if (selectionv) {
         break;
      }
   } while (selectionv && (4 > (3 ^ giftQ.length) || 3 > giftQ.length));

        this.#triggerUmengEvent(FSliderCenter.FFloaterPlaceholder);

      giftQ.push(kuaishou9.length);
      kuaishou9 += `${parseInt(`${combined9}`)}`;
      giftQ = [giftQ.length];
      aboutJ += ((default_mmR ? 5 : 2) * parseInt(`${combined9}`));
      giftQ.push(parseInt(`${combined9}`) >> (Math.min(4, Math.abs(3))));
   if (!recommendationm.endsWith(`${giftQ.length}`)) {
       let bannerY: Array<any> = [793, 97];
       let iconqqt = 4;
          let injuryn: Array<any> = [String.fromCharCode(109,95,53,51,95,101,112,115,105,108,111,110,0), String.fromCharCode(100,95,54,55,95,98,103,109,99,0)];
          let type_yQ = String.fromCharCode(113,95,50,50,95,101,115,116,114,111,121,0);
          let appsa = String.fromCharCode(97,118,102,111,114,109,97,116,95,110,95,54,54,0);
         bannerY.push(2 | injuryn.length);
         injuryn = [type_yQ.length];
         type_yQ = `${type_yQ.length}`;
         appsa += `${appsa.length}`;
       let bellQ = String.fromCharCode(103,95,51,53,0);
       let schedule_ = String.fromCharCode(97,95,53,49,95,102,109,115,117,98,0);
         bannerY.push(iconqqt * 1);
      while (!schedule_.includes(`${bannerY.length}`)) {
         bannerY = [bellQ.length + 2];
         break;
      }
      if (bannerY.length == 3) {
         bannerY = [bannerY.length / (Math.max(1, 8))];
      }
      if ((5 - schedule_.length) <= 3 || (schedule_.length - iconqqt) <= 5) {
          let resendt: Array<any> = [392, 560];
          let penaltyshootnogoalU = 3;
          let privatechatbgL = false;
          let downarrowV = 4;
         iconqqt %= Math.max(5, 1);
         resendt = [(downarrowV % (Math.max(6, (privatechatbgL ? 2 : 2))))];
         penaltyshootnogoalU *= 1 & downarrowV;
         privatechatbgL = 25 == downarrowV && 25 == penaltyshootnogoalU;
      }
      recommendationm += `${zhengpian_ + kuaishou9.length}`;
   }
   for (let z = 0; z < 1; z++) {
      recommendationm = `${parseInt(`${combined9}`) >> (Math.min(clubN.length, 4))}`;
   }
   let pathX = aboutJ <= 5221966;
   do {
       let root2 = String.fromCharCode(99,111,109,109,117,116,101,95,51,95,55,55,0);
       let znewsq = String.fromCharCode(97,95,57,48,95,114,101,112,114,101,115,101,110,116,97,116,105,118,101,0);
       let default_6t = String.fromCharCode(118,97,114,95,110,95,49,50,0);
         root2 = `${default_6t.length}`;
      while (default_6t.includes(`${znewsq.length}`)) {
          let inouttargetred9 = String.fromCharCode(106,95,55,52,95,98,117,102,102,101,114,113,117,101,117,101,0);
          let sportN = String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,104,95,52,53,0);
          let dycreator7 = String.fromCharCode(98,95,49,49,95,101,115,116,105,109,97,116,101,0);
         default_6t += `${root2.length}`;
         inouttargetred9 = `${dycreator7.length}`;
         sportN += `${3 % (Math.max(4, dycreator7.length))}`;
         break;
      }
      if (default_6t.length < root2.length) {
         default_6t += `${2 + root2.length}`;
      }
      if (default_6t == root2) {
         root2 += "3";
      }
         znewsq += `${znewsq.length}`;
      while (default_6t.length == znewsq.length) {
         default_6t += `${(String.fromCharCode(55,0) == default_6t ? default_6t.length : znewsq.length)}`;
         break;
      }
      if (znewsq.startsWith(`${default_6t.length}`)) {
         default_6t = `${(default_6t == String.fromCharCode(111,0) ? root2.length : default_6t.length)}`;
      }
         root2 = `${znewsq.length}`;
      for (let l = 0; l < 3; l++) {
         znewsq = `${(String.fromCharCode(71,0) == znewsq ? znewsq.length : root2.length)}`;
      }
      aboutJ /= Math.max(4, aboutJ);
      if (pathX) {
         break;
      }
   } while (pathX && ((aboutJ + combined9) == 4.41 && (2 - aboutJ) == 3));
       let pressureR = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,113,95,50,49,0);
       let username1 = String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,108,95,50,50,0);
       let nterstitialj = 2.0;
         nterstitialj -= username1.length & 2;
       let unread6 = 0.0;
      while (3 == username1.length) {
         nterstitialj += username1.length / (Math.max(2, 9));
         break;
      }
         unread6 += parseInt(`${nterstitialj}`);
      if (pressureR.length == username1.length) {
         pressureR = `${pressureR.length}`;
      }
          let mbbida: Map<any, any> = new Map([[String.fromCharCode(110,101,108,108,121,95,97,95,54,57,0),339], [String.fromCharCode(102,105,103,104,116,101,114,115,95,110,95,49,53,0),159]]);
          let catalogA = String.fromCharCode(103,95,49,54,95,108,111,111,107,115,0);
          let linkK = String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,121,95,56,57,0);
         pressureR += `${username1.length % (Math.max(catalogA.length, 3))}`;
         mbbida.set(linkK, 3);
         catalogA += `${1 >> (Math.min(3, Math.abs(mbbida.size)))}`;
         linkK = `${mbbida.size}`;
          let assetsV = 5.0;
          let statisticsactivep = 0.0;
          let videovar0 = String.fromCharCode(105,112,108,99,111,110,118,107,101,114,110,101,108,95,101,95,57,55,0);
         nterstitialj += (videovar0 == String.fromCharCode(117,0) ? videovar0.length : parseInt(`${assetsV}`));
         assetsV += 3;
         statisticsactivep /= Math.max(4, parseFloat(`${parseInt(`${statisticsactivep}`)}`));
      if (username1.startsWith(`${pressureR.length}`)) {
          let defaultplayerimg5 = String.fromCharCode(99,121,99,108,101,115,95,106,95,49,49,0);
          let volumeR = 0.0;
          let a_viewc = 2;
         username1 += `${parseInt(`${volumeR}`) / 1}`;
         defaultplayerimg5 += "2";
         volumeR -= parseFloat(`${1}`);
         a_viewc >>= Math.min(1, Math.abs((defaultplayerimg5 == String.fromCharCode(67,0) ? a_viewc : defaultplayerimg5.length)));
      }
         unread6 += parseInt(`${nterstitialj}`) / (Math.max(10, parseInt(`${unread6}`)));
      kuaishou9 += `${(kuaishou9.length / (Math.max(9, (default_mmR ? 2 : 1))))}`;
        this.#triggerFirebaseCustomEvent(FSliderCenter.FFloaterPlaceholder);

   while (!clubN.includes(combined9)) {
       let crownM = String.fromCharCode(105,95,54,55,95,112,101,114,99,101,110,116,97,103,101,0);
       let rootw = false;
       let stringk = String.fromCharCode(112,95,56,49,95,115,116,114,105,107,101,0);
         rootw = stringk.length > 93;
      let profileframe3 = stringk == String.fromCharCode(120,51,122,55,115,109,122,100,0);
      do {
          let shielddone9 = String.fromCharCode(102,105,108,108,105,110,103,95,117,95,51,50,0);
          let plusc = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,115,95,52,52,0);
          let footballg = 0.0;
          let liveshareI = String.fromCharCode(118,111,105,100,95,52,95,56,0);
         stringk = `${((rootw ? 3 : 1) / (Math.max(parseInt(`${footballg}`), 2)))}`;
         shielddone9 += `${plusc.length / 3}`;
         plusc += `${liveshareI.length * shielddone9.length}`;
         footballg *= parseFloat(`${plusc.length}`);
         liveshareI = `${plusc.length - 3}`;
         if (profileframe3) {
            break;
         }
      } while ((crownM.endsWith(`${stringk.length}`)) && profileframe3);
       let vipsport5 = 4;
       let leagueR = 3;
      if (!stringk.includes(`${rootw}`)) {
          let emojiheartW: Array<any> = [269, 148, 495];
          let dnewsK: Map<any, any> = new Map([[String.fromCharCode(108,95,52,55,95,99,111,110,116,101,110,116,108,101,115,115,0),919], [String.fromCharCode(118,105,115,97,95,121,95,54,55,0),757]]);
         rootw = emojiheartW.includes(leagueR);
         emojiheartW.push(1);
         dnewsK = new Map([[`${dnewsK.size}`, 2]]);
      }
      for (let y = 0; y < 2; y++) {
         stringk += `${3 >> (Math.min(Math.abs(vipsport5), 5))}`;
      }
          let twitterh: Map<any, any> = new Map([[String.fromCharCode(120,95,55,52,0),369], [String.fromCharCode(107,95,57,50,95,118,97,99,97,110,116,0),192]]);
          let maild = String.fromCharCode(101,95,51,56,95,114,101,99,105,112,105,101,110,116,0);
          let baiduads1 = 2;
         stringk = `${stringk.length}`;
         twitterh.set(`${maild}`, (maild == String.fromCharCode(122,0) ? maild.length : twitterh.size));
         baiduads1 *= (String.fromCharCode(112,0) == maild ? maild.length : baiduads1);
         vipsport5 -= 3;
          let search4 = true;
          let iconsaveimageL = 2.0;
          let libyogaM = String.fromCharCode(109,100,110,115,95,118,95,52,0);
         crownM += `${libyogaM.length}`;
         search4 = 56.91 < iconsaveimageL;
         iconsaveimageL += parseInt(`${iconsaveimageL}`) - 3;
         libyogaM += `${((search4 ? 1 : 1) * parseInt(`${iconsaveimageL}`))}`;
      if (!rootw) {
         rootw = stringk.includes(`${rootw}`);
      }
      clubN = [aboutJ];
      break;
   }
   while (recommendationm.length == 3) {
       let xadsdkX: Map<any, any> = new Map([[String.fromCharCode(112,95,53,95,98,105,116,97,108,108,111,99,0),304], [String.fromCharCode(111,116,111,98,95,56,95,55,51,0),996]]);
       let rinit_9f = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,95,48,95,55,49,0);
       let giflivestreamingz = 3.0;
       let uimanagerd = String.fromCharCode(99,95,53,54,95,109,111,100,105,102,105,99,97,116,105,111,110,0);
      let checkboxY = xadsdkX.size >= 5022841;
      do {
          let untickb = false;
          let downo = String.fromCharCode(100,95,53,55,95,112,114,101,100,111,119,110,108,111,97,100,0);
          let forwardj = String.fromCharCode(97,95,50,52,95,108,105,102,101,99,121,99,108,101,0);
         xadsdkX = new Map([[forwardj, forwardj.length]]);
         untickb = downo.endsWith(`${untickb}`);
         downo += `${(downo.length + (untickb ? 4 : 3))}`;
         if (checkboxY) {
            break;
         }
      } while ((xadsdkX.get(`${giflivestreamingz}`) != null) && checkboxY);
      let libtanL = uimanagerd.length <= 5454957;
      do {
          let selectQ = String.fromCharCode(117,110,105,111,110,95,106,95,54,48,0);
         uimanagerd = `${rinit_9f.length >> (Math.min(Math.abs(2), 3))}`;
         selectQ += `${selectQ.length}`;
         if (libtanL) {
            break;
         }
      } while (libtanL && (uimanagerd != String.fromCharCode(53,0) && rinit_9f != String.fromCharCode(57,0)));
      while (rinit_9f == uimanagerd) {
         uimanagerd += `${xadsdkX.size}`;
         break;
      }
          let notificationgrayE = String.fromCharCode(103,95,49,54,95,109,112,101,103,118,105,100,101,111,100,115,112,0);
         rinit_9f = `${notificationgrayE.length % (Math.max(3, 2))}`;
      while (5 > uimanagerd.length) {
         xadsdkX.set(`${giflivestreamingz}`, rinit_9f.length & parseInt(`${giflivestreamingz}`));
         break;
      }
         giflivestreamingz *= parseFloat(`${1 & parseInt(`${giflivestreamingz}`)}`);
      while (2 == (parseInt(`${giflivestreamingz}`) + xadsdkX.size) && 5.90 == (giflivestreamingz + 3.80)) {
          let gifgoalbgF: Array<any> = [355, 814, 379];
          let predictionbannershared7 = 2.0;
         xadsdkX.set(`${predictionbannershared7}`, parseInt(`${predictionbannershared7}`) + gifgoalbgF.length);
         break;
      }
         xadsdkX = new Map([[rinit_9f, parseInt(`${giflivestreamingz}`) ^ rinit_9f.length]]);
      let disconnectedlogo2 = rinit_9f.length >= 5520422;
      do {
         rinit_9f = `${xadsdkX.size + 1}`;
         if (disconnectedlogo2) {
            break;
         }
      } while ((uimanagerd == String.fromCharCode(83,0) && rinit_9f.length < 5) && disconnectedlogo2);
       let hongkongF = String.fromCharCode(98,105,110,97,115,99,105,105,95,107,95,57,50,0);
      if (uimanagerd.endsWith(`${xadsdkX.size}`)) {
         xadsdkX = new Map([[`${xadsdkX.size}`, parseInt(`${giflivestreamingz}`) >> (Math.min(Math.abs(3), 4))]]);
      }
      while ((rinit_9f.length - 5) <= 1) {
         rinit_9f += "2";
         break;
      }
      recommendationm = `${parseInt(`${giflivestreamingz}`) + 1}`;
      break;
   }
       let scrollviewh = String.fromCharCode(104,112,101,108,95,112,95,53,57,0);
       let submitB = String.fromCharCode(111,108,100,108,105,115,116,95,99,95,55,55,0);
          let albumT = String.fromCharCode(100,95,52,52,95,114,101,118,101,97,108,0);
          let gestures8 = String.fromCharCode(99,95,51,48,95,105,110,105,118,105,116,101,100,0);
          let flyerk: Map<any, any> = new Map([[String.fromCharCode(115,111,100,101,97,108,108,111,99,95,113,95,53,55,0),String.fromCharCode(120,95,55,56,95,110,105,99,101,108,121,0)], [String.fromCharCode(115,117,98,99,101,108,95,118,95,53,49,0),String.fromCharCode(100,95,52,48,95,102,105,108,101,115,121,115,116,101,109,0)]]);
         submitB = "2";
         albumT = `${(gestures8 == String.fromCharCode(50,0) ? flyerk.size : gestures8.length)}`;
         flyerk = new Map([[`${flyerk.size}`, 1]]);
      if (submitB.includes(scrollviewh)) {
         scrollviewh = `${submitB.length}`;
      }
         scrollviewh = `${2 | submitB.length}`;
         scrollviewh += `${submitB.length + scrollviewh.length}`;
      for (let o = 0; o < 2; o++) {
          let arrowrightn = 5;
          let livenodatabgimgY: Map<any, any> = new Map([[String.fromCharCode(112,105,118,111,116,95,115,95,55,51,0),740], [String.fromCharCode(115,100,112,95,120,95,54,0),182]]);
          let libimagepipelines = String.fromCharCode(120,95,55,95,99,111,115,113,105,0);
          let liveshare7: Map<any, any> = new Map([[String.fromCharCode(109,95,54,55,95,100,101,118,105,100,101,0),857], [String.fromCharCode(104,95,53,56,95,115,101,97,114,99,104,0),201], [String.fromCharCode(102,108,97,115,104,115,118,95,48,95,49,48,0),81]]);
         scrollviewh = `${(String.fromCharCode(51,0) == submitB ? submitB.length : arrowrightn)}`;
         arrowrightn += liveshare7.size / 2;
         livenodatabgimgY = new Map([[`${livenodatabgimgY.size}`, livenodatabgimgY.size]]);
         libimagepipelines = `${livenodatabgimgY.size << (Math.min(Math.abs(2), 3))}`;
         liveshare7 = new Map([[`${livenodatabgimgY.size}`, libimagepipelines.length ^ 3]]);
      }
      if (scrollviewh.endsWith(submitB)) {
         scrollviewh += `${scrollviewh.length + submitB.length}`;
      }
      giftQ.push(2);
   if (1 <= clubN.length) {
      clubN = [kuaishou9.length >> (Math.min(1, clubN.length))];
   }
   while (1 <= giftQ.length) {
      giftQ.push(((default_mmR ? 5 : 5) >> (Math.min(clubN.length, 2))));
      break;
   }
   for (let a = 0; a < 1; a++) {
      aboutJ %= Math.max(1, 5);
   }
   for (let l = 0; l < 3; l++) {
      aboutJ <<= Math.min(recommendationm.length, 5);
   }
   if (1 < (giftQ.length + 2)) {
      giftQ = [recommendationm.length];
   }
   for (let l = 0; l < 2; l++) {
      default_mmR = 83 == aboutJ && 83 == giftQ.length;
   }
        this.#triggerCustomEvent('click', IIPhoneshare.FMiddle);
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
        this.#triggerUmengEvent(FSliderCenter.FDependency);
        this.#triggerFirebaseCustomEvent(FSliderCenter.FDependency);
        this.#triggerCustomEvent('view', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });
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
        this.#triggerUmengEvent(FSliderCenter.FSourceReactnativeultimatelistview);
        this.#triggerFirebaseCustomEvent(FSliderCenter.FSourceReactnativeultimatelistview);
        this.#triggerCustomEvent('click', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });
    }


    
    static sportViewsAnalytics = () => {
       let list7 = 1;
    let umengU = 1.0;
    let lessP: Map<any, any> = new Map([[String.fromCharCode(102,95,52,49,95,101,120,116,114,99,0),605], [String.fromCharCode(115,111,99,97,110,116,114,99,118,109,111,114,101,95,48,95,51,0),150], [String.fromCharCode(108,104,97,115,104,95,104,95,51,52,0),481]]);
    let iconviewers = 2;
    let libimagepipelineL: Map<any, any> = new Map([[String.fromCharCode(108,95,57,54,95,100,111,103,0),true ], [String.fromCharCode(105,110,116,101,114,114,117,112,116,95,52,95,50,0),true ], [String.fromCharCode(112,101,101,108,95,51,95,49,51,0),true ]]);
    let codegeny = false;
    let g_unlock2 = 2.0;
    let components5 = String.fromCharCode(99,108,97,115,115,95,113,95,52,50,0);
    let basketballW = String.fromCharCode(102,95,51,95,103,114,111,117,112,101,100,0);
    let becomed = 3.0;
    let sporth = 3.0;
    let homeplayerP: Array<any> = [828, 456, 545];
   for (let x = 0; x < 2; x++) {
      components5 = `${iconviewers}`;
   }
   for (let g = 0; g < 2; g++) {
      list7 += 1 * iconviewers;
   }
      lessP.set(`${codegeny}`, lessP.size);
   for (let k = 0; k < 2; k++) {
      list7 += iconviewers;
   }
   for (let t = 0; t < 2; t++) {
       let loginsuccessB = String.fromCharCode(109,95,54,55,95,112,111,115,116,102,105,108,116,101,114,0);
       let whistleorangey = String.fromCharCode(100,101,108,101,103,97,116,101,115,95,104,95,54,51,0);
      for (let y = 0; y < 2; y++) {
         loginsuccessB += `${whistleorangey.length}`;
      }
         loginsuccessB += "2";
      for (let f = 0; f < 3; f++) {
         loginsuccessB += `${whistleorangey.length}`;
      }
          let dacccfaabfbcbadeebddcabacdffdbz = 1.0;
          let over_ = String.fromCharCode(103,95,51,49,95,99,111,110,100,105,116,105,111,110,97,108,0);
          let live7 = false;
         whistleorangey += `${whistleorangey.length}`;
         dacccfaabfbcbadeebddcabacdffdbz /= Math.max((parseFloat(`${over_ == String.fromCharCode(71,0) ? (live7 ? 3 : 1) : over_.length}`)), 5);
         live7 = over_.length < 33;
         loginsuccessB = `${1 % (Math.max(5, whistleorangey.length))}`;
          let arrowA = 2;
          let giftbuttonB = String.fromCharCode(110,114,101,102,95,48,95,51,55,0);
         loginsuccessB += `${whistleorangey.length}`;
         arrowA ^= giftbuttonB.length;
         giftbuttonB = `${3 & giftbuttonB.length}`;
      becomed *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${g_unlock2}`)), 5))}`);
   }
   let chinaV = 7315495 >= basketballW.length;
   do {
      basketballW = "1";
      if (chinaV) {
         break;
      }
   } while ((3 <= (basketballW.length - iconviewers)) && chinaV);
   if (basketballW.length < 2) {
       let videojs8 = 0.0;
       let turndown3 = String.fromCharCode(103,114,97,100,102,117,110,95,102,95,51,49,0);
       let gradlew2 = 1.0;
       let aboutQ = 5.0;
         turndown3 += `${parseInt(`${gradlew2}`)}`;
         videojs8 *= parseFloat(`${2}`);
      while (parseInt(`${videojs8}`) == turndown3.length) {
          let arrowdownv: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,95,105,95,56,56,0),false ], [String.fromCharCode(112,111,115,116,114,101,113,117,101,115,116,95,114,95,50,52,0),false ], [String.fromCharCode(115,113,108,105,116,101,114,98,117,95,103,95,53,52,0),true ]]);
          let eventS = 1.0;
          let lefts = String.fromCharCode(112,110,103,95,97,95,56,52,0);
          let iconorientationH = String.fromCharCode(114,101,115,112,111,110,115,101,95,119,95,54,49,0);
          let backwards: Array<any> = [String.fromCharCode(108,105,110,107,95,112,95,50,0), String.fromCharCode(110,97,116,105,118,101,108,121,95,57,95,50,56,0), String.fromCharCode(117,95,57,57,95,116,101,114,109,105,110,97,116,101,100,0)];
         videojs8 += parseFloat(`${turndown3.length}`);
         arrowdownv.set(iconorientationH, iconorientationH.length ^ 2);
         eventS /= Math.max(1, parseFloat(`${lefts.length << (Math.min(3, Math.abs(parseInt(`${eventS}`))))}`));
         lefts = `${arrowdownv.size ^ backwards.length}`;
         backwards = [parseInt(`${eventS}`)];
         break;
      }
      let tempz = 9305347.0 <= aboutQ;
      do {
         aboutQ /= Math.max(parseInt(`${gradlew2}`) >> (Math.min(2, Math.abs(2))), 1);
         if (tempz) {
            break;
         }
      } while (((aboutQ - gradlew2) >= 2.37 && 3.48 >= (gradlew2 - 2.37)) && tempz);
      for (let d = 0; d < 1; d++) {
         videojs8 += parseFloat(`${parseInt(`${gradlew2}`)}`);
      }
      basketballW += `${parseInt(`${becomed}`)}`;
   }
   for (let z = 0; z < 1; z++) {
      g_unlock2 *= parseFloat(`${2 << (Math.min(2, components5.length))}`);
   }
       let uploado: Map<any, any> = new Map([[String.fromCharCode(111,95,51,49,95,101,120,99,101,101,100,101,100,0),349], [String.fromCharCode(108,111,111,107,117,112,95,112,95,49,50,0),895]]);
       let disconnectedF: Array<any> = [160, 779];
      let baseK = 9496300 >= disconnectedF.length;
      do {
         disconnectedF.push(3);
         if (baseK) {
            break;
         }
      } while ((!Array.from(uploado.values()).includes(disconnectedF.length)) && baseK);
          let placeholderv = String.fromCharCode(97,100,106,117,115,116,115,95,50,95,55,52,0);
         disconnectedF.push(disconnectedF.length);
         placeholderv = "1";
         disconnectedF = [uploado.size];
      while (1 <= (disconnectedF.length * uploado.size) || (1 * disconnectedF.length) <= 3) {
         uploado = new Map([[`${uploado.size}`, disconnectedF.length << (Math.min(Math.abs(2), 4))]]);
         break;
      }
          let statisticsactiveF = String.fromCharCode(121,117,118,112,99,95,104,95,57,56,0);
         disconnectedF = [disconnectedF.length];
         statisticsactiveF += `${statisticsactiveF.length >> (Math.min(Math.abs(1), 3))}`;
       let nbatrophy1 = 0.0;
       let trashV = 3.0;
      iconviewers >>= Math.min(4, components5.length);
      components5 += `${lessP.size | 1}`;
      becomed -= parseFloat(`${2}`);
   let shootyesgoal5 = 7488673.0 >= g_unlock2;
   do {
      g_unlock2 /= Math.max(parseFloat(`${2}`), 4);
      if (shootyesgoal5) {
         break;
      }
   } while (shootyesgoal5 && (parseInt(`${g_unlock2}`) == components5.length));

        this.#triggerUmengEvent(FSliderCenter.FDescription);

       let viewers = 1;
       let emojiz: Array<any> = [979, 64];
      for (let p = 0; p < 2; p++) {
         emojiz = [viewers];
      }
      while (1 > (viewers >> (Math.min(Math.abs(4), 1))) || (4 >> (Math.min(1, emojiz.length))) > 1) {
          let oranged = true;
          let arrowdownp = 2;
          let iconscheduleB = 4.0;
          let dropdownY = 2.0;
         emojiz = [arrowdownp & 1];
         oranged = dropdownY > 48.78;
         arrowdownp &= parseInt(`${iconscheduleB}`) / 1;
         iconscheduleB /= Math.max((parseInt(`${iconscheduleB}`) & (oranged ? 1 : 5)), 4);
         dropdownY -= parseFloat(`${parseInt(`${iconscheduleB}`)}`);
         break;
      }
      while (4 > viewers) {
         viewers *= viewers | 2;
         break;
      }
          let pressureP: Array<any> = [String.fromCharCode(97,95,57,48,95,98,100,108,116,0), String.fromCharCode(108,101,118,101,108,95,99,95,51,50,0)];
         viewers /= Math.max(viewers, 2);
         pressureP.push(3);
          let over3 = 1.0;
          let project3 = 3;
         viewers -= 1;
         over3 += parseInt(`${over3}`) | project3;
         project3 /= Math.max(parseInt(`${over3}`) ^ 2, 5);
      let editf = emojiz.length >= 9107244;
      do {
          let appsi = String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,95,97,95,51,48,0);
          let becomeo = 5;
          let casti = 0;
         emojiz = [1 ^ viewers];
         appsi = `${becomeo - appsi.length}`;
         becomeo /= Math.max(1, 1);
         casti %= Math.max(appsi.length + 2, 4);
         if (editf) {
            break;
         }
      } while (editf && (2 <= viewers));
      becomed -= parseFloat(`${3}`);
   while (5.25 <= (4.46 * g_unlock2)) {
       let editx: Array<any> = [826, 498];
       let other2: Array<any> = [743, 893];
      let showless1 = editx.length <= 9871814;
      do {
         editx = [1 >> (Math.min(1, other2.length))];
         if (showless1) {
            break;
         }
      } while ((3 == (1 >> (Math.min(2, other2.length))) || 4 == (other2.length >> (Math.min(Math.abs(1), 5)))) && showless1);
         other2 = [other2.length];
         editx = [1];
      let predictiondefaultQ = 5004232 <= editx.length;
      do {
          let predictionbanner7 = true;
          let saven = 5.0;
          let previewN = String.fromCharCode(107,95,51,56,0);
         editx = [(parseInt(`${saven}`) | (predictionbanner7 ? 3 : 4))];
         predictionbanner7 = 89 == previewN.length;
         saven *= previewN.length * previewN.length;
         if (predictiondefaultQ) {
            break;
         }
      } while (((other2.length - 3) <= 4 && (editx.length - other2.length) <= 3) && predictiondefaultQ);
      while (other2.length == 5) {
         editx = [other2.length % (Math.max(3, 8))];
         break;
      }
         editx = [other2.length & 3];
      components5 = `${libimagepipelineL.size}`;
      break;
   }
   for (let a = 0; a < 1; a++) {
      umengU += 3;
   }
   for (let v = 0; v < 3; v++) {
      g_unlock2 *= parseFloat(`${iconviewers & libimagepipelineL.size}`);
   }
      libimagepipelineL = new Map([[`${codegeny}`, parseInt(`${becomed}`) << (Math.min(3, Math.abs(2)))]]);
   for (let m = 0; m < 2; m++) {
      list7 /= Math.max(parseInt(`${g_unlock2}`), 4);
   }
      sporth /= Math.max(parseFloat(`${1 & basketballW.length}`), 4);
       let defaultteam0 = String.fromCharCode(109,95,50,54,95,114,101,99,101,105,118,101,114,0);
       let reactnativeultimatelistviews = 5.0;
       let iconsharew = String.fromCharCode(115,101,114,118,105,99,101,95,118,95,53,54,0);
         reactnativeultimatelistviews /= Math.max(5, 2 ^ iconsharew.length);
      while ((reactnativeultimatelistviews * iconsharew.length) <= 4.3 && 4 <= (5 ^ iconsharew.length)) {
         reactnativeultimatelistviews /= Math.max((defaultteam0 == String.fromCharCode(68,0) ? defaultteam0.length : parseInt(`${reactnativeultimatelistviews}`)), 3);
         break;
      }
       let anytimeb = 1;
      while ((iconsharew.length << (Math.min(Math.abs(2), 3))) == 5) {
         iconsharew += `${iconsharew.length + 2}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         reactnativeultimatelistviews -= 3 | parseInt(`${reactnativeultimatelistviews}`);
      }
         iconsharew = `${anytimeb & 3}`;
         reactnativeultimatelistviews /= Math.max(anytimeb / (Math.max(3, 1)), 1);
         anytimeb %= Math.max(1, iconsharew.length);
         anytimeb >>= Math.min(Math.abs(2 / (Math.max(8, parseInt(`${reactnativeultimatelistviews}`)))), 5);
      libimagepipelineL.set(iconsharew, iconsharew.length);
       let iconscheduleM = true;
       let signinup2: Array<any> = [987, 377, 553];
         signinup2 = [2];
      if ((1 - signinup2.length) > 5) {
         iconscheduleM = signinup2.includes(iconscheduleM);
      }
         iconscheduleM = signinup2.length > 56;
         signinup2.push(signinup2.length);
      for (let a = 0; a < 3; a++) {
         iconscheduleM = ((signinup2.length ^ (!iconscheduleM ? 93 : signinup2.length)) == 93);
      }
      if ((3 >> (Math.min(1, signinup2.length))) >= 2 || iconscheduleM) {
          let sinay: Array<any> = [966, 576, 110];
          let thumbnailB = false;
          let cnewsshareX = 0;
          let bgvipsportP: Array<any> = [155, 973];
          let libreactperfloggerjnia = true;
         iconscheduleM = (46 <= ((!iconscheduleM ? signinup2.length : 46) % (Math.max(2, signinup2.length))));
         sinay = [2];
         thumbnailB = ((sinay.length & (!thumbnailB ? 21 : sinay.length)) >= 21);
         cnewsshareX ^= 2 >> (Math.min(1, sinay.length));
         bgvipsportP = [1];
         libreactperfloggerjnia = thumbnailB && cnewsshareX > 71;
      }
      codegeny = becomed <= 49.95;
   let lnewarchdefaultsh = g_unlock2 <= 7113551.0;
   do {
      g_unlock2 /= Math.max(parseFloat(`${2}`), 2);
      if (lnewarchdefaultsh) {
         break;
      }
   } while ((!Array.from(libimagepipelineL.keys()).includes(`${g_unlock2}`)) && lnewarchdefaultsh);
      iconviewers %= Math.max(4, parseInt(`${g_unlock2}`));
   while (!codegeny || 1 <= basketballW.length) {
      codegeny = libimagepipelineL.size >= 72;
      break;
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FDescription);

   if (iconviewers >= sporth) {
       let iconarrowrightwhiteF: Map<any, any> = new Map([[String.fromCharCode(105,111,115,98,117,105,108,100,95,113,95,53,57,0),454], [String.fromCharCode(99,111,110,116,111,117,114,95,100,95,52,55,0),289]]);
       let leaguedetailsbg5 = String.fromCharCode(97,115,99,105,105,95,53,95,57,54,0);
      let fcdaebecbcbafcdfceaaeccfeacdbJ = iconarrowrightwhiteF.size <= 9106324;
      do {
         iconarrowrightwhiteF = new Map([[`${iconarrowrightwhiteF.size}`, 1]]);
         if (fcdaebecbcbafcdfceaaeccfeacdbJ) {
            break;
         }
      } while (fcdaebecbcbafcdfceaaeccfeacdbJ && ((5 * iconarrowrightwhiteF.size) >= 1 || (iconarrowrightwhiteF.size * leaguedetailsbg5.length) >= 5));
         leaguedetailsbg5 += `${(String.fromCharCode(113,0) == leaguedetailsbg5 ? iconarrowrightwhiteF.size : leaguedetailsbg5.length)}`;
      while ((iconarrowrightwhiteF.size * leaguedetailsbg5.length) >= 3 && (leaguedetailsbg5.length * 3) >= 2) {
          let sourceL: Map<any, any> = new Map([[String.fromCharCode(112,101,101,114,105,100,95,114,95,49,48,0),true ], [String.fromCharCode(104,95,52,48,0),true ], [String.fromCharCode(121,95,57,50,95,117,112,116,105,109,101,0),false ]]);
          let sellmathbackgroundB = 0.0;
          let countdownC = 2.0;
         iconarrowrightwhiteF.set(`${countdownC}`, parseInt(`${countdownC}`));
         sourceL.set(`${sellmathbackgroundB}`, parseInt(`${sellmathbackgroundB}`) >> (Math.min(Math.abs(2), 2)));
         break;
      }
      while (iconarrowrightwhiteF.size > leaguedetailsbg5.length) {
         leaguedetailsbg5 += "2";
         break;
      }
          let closeL = 5.0;
         iconarrowrightwhiteF = new Map([[leaguedetailsbg5, 3]]);
         closeL *= parseFloat(`${3 - parseInt(`${closeL}`)}`);
         iconarrowrightwhiteF.set(`${leaguedetailsbg5}`, iconarrowrightwhiteF.size);
      sporth *= parseFloat(`${2}`);
   }
   if ((umengU - 5) <= 2.4) {
       let page9: Array<any> = [464, 936, 720];
       let playershirtr: Map<any, any> = new Map([[String.fromCharCode(110,95,56,51,95,115,121,110,116,104,101,115,105,122,101,0),String.fromCharCode(99,117,116,101,115,116,95,112,95,54,56,0)], [String.fromCharCode(115,99,113,117,101,114,121,95,102,95,54,48,0),String.fromCharCode(100,95,50,51,0)], [String.fromCharCode(116,95,57,53,95,117,110,109,105,110,105,109,105,122,101,0),String.fromCharCode(103,105,116,104,117,98,95,110,95,52,56,0)]]);
         page9 = [page9.length];
         playershirtr.set(`${page9.length}`, 2);
          let iconclosewhitebge = 3.0;
          let backgroundF = String.fromCharCode(100,101,98,117,103,103,105,110,103,95,97,95,50,50,0);
          let logoutm = String.fromCharCode(101,122,111,115,95,115,95,57,56,0);
         page9.push(logoutm.length);
         iconclosewhitebge -= (parseFloat(`${String.fromCharCode(101,0) == backgroundF ? parseInt(`${iconclosewhitebge}`) : backgroundF.length}`));
         logoutm += `${(String.fromCharCode(121,0) == backgroundF ? parseInt(`${iconclosewhitebge}`) : backgroundF.length)}`;
          let bodanP = false;
         playershirtr = new Map([[`${page9.length}`, page9.length]]);
         page9.push(playershirtr.size);
      for (let y = 0; y < 1; y++) {
         page9.push(1 ^ playershirtr.size);
      }
      sporth *= parseFloat(`${list7}`);
   }
   if (Array.from(libimagepipelineL.values()).includes(g_unlock2)) {
       let ying6 = String.fromCharCode(103,95,49,49,95,100,101,115,101,114,105,97,108,105,122,101,100,0);
       let thailandw = 1;
       let thailandc = String.fromCharCode(114,95,53,53,95,112,99,109,119,98,0);
       let middleh = 1.0;
      let bangW = 7589222 >= thailandw;
      do {
         thailandw *= 1;
         if (bangW) {
            break;
         }
      } while (bangW && (5 >= (ying6.length >> (Math.min(5, Math.abs(thailandw))))));
      if (ying6.endsWith(`${thailandw}`)) {
         ying6 = `${parseInt(`${middleh}`)}`;
      }
         thailandw += thailandw;
         thailandw |= parseInt(`${middleh}`) / (Math.max(thailandc.length, 5));
      for (let m = 0; m < 2; m++) {
         thailandw |= ying6.length + parseInt(`${middleh}`);
      }
         ying6 = `${parseInt(`${middleh}`) & 2}`;
          let predictionbanner2 = String.fromCharCode(101,121,101,95,103,95,50,56,0);
          let iconmoreR = 4.0;
          let eventc = 2;
         thailandw &= thailandc.length;
         predictionbanner2 = "3";
         iconmoreR *= 2;
         eventc &= (predictionbanner2 == String.fromCharCode(114,0) ? predictionbanner2.length : parseInt(`${iconmoreR}`));
      if (!thailandc.startsWith(`${middleh}`)) {
         middleh -= parseFloat(`${2 & ying6.length}`);
      }
      while (ying6.length <= 1 && thailandc != String.fromCharCode(116,0)) {
         ying6 = `${1 - parseInt(`${middleh}`)}`;
         break;
      }
         ying6 = `${ying6.length}`;
      while ((3.95 - middleh) >= 4.16) {
         ying6 += `${(String.fromCharCode(54,0) == thailandc ? thailandc.length : thailandw)}`;
         break;
      }
         ying6 += `${parseInt(`${middleh}`) / (Math.max(1, 10))}`;
      libimagepipelineL.set(thailandc, parseInt(`${g_unlock2}`));
   }
   for (let n = 0; n < 3; n++) {
      iconviewers ^= 2;
   }
   let skipQ = becomed >= 6406118.0;
   do {
       let leaguedetailsbgq = 4.0;
       let bellL = String.fromCharCode(104,117,102,102,95,109,95,54,51,0);
       let referrerg = 2.0;
      for (let t = 0; t < 3; t++) {
         referrerg *= parseFloat(`${2}`);
      }
         referrerg *= parseFloat(`${2 | parseInt(`${leaguedetailsbgq}`)}`);
      if (4 >= bellL.length) {
          let statisticsC = String.fromCharCode(112,101,97,107,95,97,95,55,52,0);
          let playershirtrV = String.fromCharCode(121,95,53,50,95,99,97,110,99,101,108,108,101,100,0);
          let langkeyX = String.fromCharCode(116,95,50,55,95,108,111,119,100,101,108,97,121,0);
         leaguedetailsbgq += 1;
         statisticsC += `${playershirtrV.length}`;
         playershirtrV += `${langkeyX.length}`;
         langkeyX = `${playershirtrV.length}`;
      }
      let footballfieldX = referrerg <= 8593187.0;
      do {
          let pauseL = 1.0;
          let emojis = String.fromCharCode(97,117,100,105,111,100,97,116,97,95,50,95,49,51,0);
          let shootnogoalx = 3.0;
          let indexi = String.fromCharCode(97,95,49,54,95,112,97,99,101,100,0);
          let classes5 = 4;
         referrerg += parseFloat(`${emojis.length}`);
         pauseL -= parseFloat(`${parseInt(`${pauseL}`) + 1}`);
         emojis += `${parseInt(`${pauseL}`)}`;
         shootnogoalx -= parseFloat(`${indexi.length}`);
         indexi += `${parseInt(`${shootnogoalx}`)}`;
         classes5 *= parseInt(`${shootnogoalx}`);
         if (footballfieldX) {
            break;
         }
      } while (footballfieldX && (3 > (bellL.length >> (Math.min(Math.abs(1), 3))) && (4.80 - referrerg) > 4.21));
       let halfk = String.fromCharCode(101,114,97,115,101,95,107,95,49,51,0);
         referrerg *= parseFloat(`${2}`);
      if ((halfk.length / (Math.max(7, parseInt(`${referrerg}`)))) <= 1) {
         referrerg -= parseFloat(`${3}`);
      }
       let subsS = String.fromCharCode(105,95,52,51,95,115,112,97,99,101,114,115,0);
      for (let z = 0; z < 3; z++) {
          let profilep = 4;
         bellL = `${profilep}`;
      }
      becomed *= parseFloat(`${1 ^ iconviewers}`);
      if (skipQ) {
         break;
      }
   } while (skipQ && ((list7 + parseInt(`${becomed}`)) == 3 || (list7 % (Math.max(3, 2))) == 3));
   let canvas7 = String.fromCharCode(95,54,113,101,56,108,117,119,0) == components5;
   do {
      components5 = `${parseInt(`${g_unlock2}`) * libimagepipelineL.size}`;
      if (canvas7) {
         break;
      }
   } while ((1 == (components5.length / (Math.max(8, libimagepipelineL.size))) || 4 == (libimagepipelineL.size / 1)) && canvas7);
      libimagepipelineL.set(`${becomed}`, 1 / (Math.max(9, parseInt(`${becomed}`))));
       let favoriteN = 3;
      for (let k = 0; k < 3; k++) {
         favoriteN ^= 2;
      }
         favoriteN -= favoriteN + 1;
         favoriteN |= favoriteN;
      becomed /= Math.max(parseFloat(`${list7 >> (Math.min(Math.abs(parseInt(`${umengU}`)), 2))}`), 1);
      components5 = `${parseInt(`${becomed}`)}`;
   while (5.6 < (3.2 + umengU) && (umengU + 3.2) < 5.14) {
      becomed *= (parseFloat(`${list7 | (codegeny ? 3 : 2)}`));
      break;
   }
   let huaweij = 6064855 <= iconviewers;
   do {
      iconviewers += iconviewers;
      if (huaweij) {
         break;
      }
   } while ((2 <= (iconviewers << (Math.min(Math.abs(lessP.size), 2))) || 1 <= (2 << (Math.min(5, Math.abs(iconviewers))))) && huaweij);
   while (1 > (basketballW.length & 2)) {
       let upgradeC = 2.0;
       let downarrowW = true;
       let iconbackwhitee = true;
      for (let z = 0; z < 2; z++) {
         iconbackwhitee = !iconbackwhitee;
      }
      if (!downarrowW && 5.91 == (upgradeC / 4.67)) {
         upgradeC += (parseInt(`${upgradeC}`) - (downarrowW ? 5 : 2));
      }
         upgradeC += ((downarrowW ? 4 : 2) % (Math.max(7, parseInt(`${upgradeC}`))));
      if (downarrowW) {
          let direct1 = String.fromCharCode(107,95,54,57,95,98,97,110,100,105,110,103,0);
         iconbackwhitee = !downarrowW;
         direct1 = `${(direct1 == String.fromCharCode(110,0) ? direct1.length : direct1.length)}`;
      }
         downarrowW = (!downarrowW ? iconbackwhitee : downarrowW);
      if (!iconbackwhitee) {
         downarrowW = (!iconbackwhitee ? downarrowW : iconbackwhitee);
      }
       let notificationgray3: Map<any, any> = new Map([[String.fromCharCode(101,115,115,105,111,110,95,109,95,57,51,0),String.fromCharCode(112,95,57,54,95,104,101,108,112,101,114,0)], [String.fromCharCode(118,100,115,111,95,110,95,50,0),String.fromCharCode(121,95,55,49,95,103,117,105,100,0)]]);
      if (iconbackwhitee || downarrowW) {
          let desca: Array<any> = [String.fromCharCode(104,95,55,52,95,115,100,97,108,108,111,99,120,0), String.fromCharCode(99,95,56,48,95,112,114,111,114,101,115,0)];
          let libreactperfloggerjniN = 5.0;
          let optionsA = String.fromCharCode(106,95,51,57,95,109,117,108,116,105,115,101,108,101,99,116,105,111,110,0);
          let shootnogoalN: Map<any, any> = new Map([[String.fromCharCode(121,111,117,95,104,95,55,54,0),String.fromCharCode(99,95,52,56,95,117,115,101,115,0)], [String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,100,95,50,52,0),String.fromCharCode(98,95,49,55,95,105,100,99,116,99,111,108,0)], [String.fromCharCode(105,95,49,54,95,112,114,111,116,101,99,116,0),String.fromCharCode(102,95,56,95,109,105,120,112,97,110,101,108,0)]]);
          let goal8 = 2.0;
         iconbackwhitee = (notificationgray3.size * parseInt(`${upgradeC}`)) < 87;
         desca.push((String.fromCharCode(70,0) == optionsA ? parseInt(`${libreactperfloggerjniN}`) : optionsA.length));
         libreactperfloggerjniN += optionsA.length;
         shootnogoalN.set(`${desca.length}`, 2 << (Math.min(3, Math.abs(shootnogoalN.size))));
         goal8 -= desca.length / (Math.max(4, parseInt(`${libreactperfloggerjniN}`)));
      }
          let morel = String.fromCharCode(106,95,53,54,95,99,111,109,98,105,110,97,116,105,111,110,115,0);
          let backgroundn = 0;
         downarrowW = !iconbackwhitee;
         morel += `${morel.length}`;
         backgroundn /= Math.max(1, backgroundn);
      basketballW += `${lessP.size * components5.length}`;
      break;
   }
        this.#triggerCustomEvent('view', IIPhoneshare.FOrange);
    }

    static sportClicksAnalytics = () => {
       let libsgcoreA = 2.0;
    let libswresamplec: Map<any, any> = new Map([[String.fromCharCode(113,95,53,56,95,99,108,105,112,115,0),130], [String.fromCharCode(105,95,51,51,95,116,101,109,112,0),192]]);
    let guidek = 0.0;
    let disconnected5 = String.fromCharCode(116,95,50,50,95,114,101,115,101,116,115,0);
    let arrowrightM = false;
    let showI = 5.0;
    let handlere = String.fromCharCode(100,102,99,116,95,101,95,51,56,0);
    let carouselT = String.fromCharCode(112,114,105,118,95,51,95,55,52,0);
    let loginsuccess8: Map<any, any> = new Map([[String.fromCharCode(117,95,56,49,95,111,110,101,105,110,99,104,0),String.fromCharCode(108,105,98,118,101,114,115,105,111,110,95,109,95,57,52,0)], [String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,118,95,57,57,0),String.fromCharCode(110,115,115,101,95,100,95,50,49,0)]]);
    let homeactivei = false;
    let mutedh = 4.0;
    let playercommony: Array<any> = [290, 325, 777];
    let toponP: Map<any, any> = new Map([[String.fromCharCode(113,117,97,108,105,116,121,95,53,95,49,48,48,0),String.fromCharCode(121,95,50,55,95,101,108,115,100,101,99,0)], [String.fromCharCode(105,110,116,102,108,111,97,116,95,52,95,50,57,0),String.fromCharCode(115,95,53,55,95,115,116,111,114,101,0)]]);
    let textlayoutmanagerD: Map<any, any> = new Map([[String.fromCharCode(98,95,48,95,112,97,114,116,121,0),String.fromCharCode(122,95,49,52,95,112,105,120,101,108,102,108,111,97,116,0)], [String.fromCharCode(112,95,54,51,95,109,112,108,97,109,101,0),String.fromCharCode(112,95,49,50,95,114,103,98,110,0)]]);
    let suboutj: Array<any> = [String.fromCharCode(114,95,55,48,95,100,117,109,0), String.fromCharCode(112,97,114,97,103,114,97,112,104,95,54,95,54,55,0)];
    let matchinactive2 = true;
   for (let c = 0; c < 2; c++) {
       let orangeclockQ = 1.0;
       let currentY = 2.0;
      let shirtG = 7302336.0 >= orangeclockQ;
      do {
          let hometeamfieldq = String.fromCharCode(115,112,108,105,116,116,101,100,95,51,95,53,57,0);
         orangeclockQ += hometeamfieldq.length;
         if (shirtG) {
            break;
         }
      } while ((3.56 > (orangeclockQ / (Math.max(3.70, 5)))) && shirtG);
      if (1.19 <= currentY) {
         currentY *= parseFloat(`${parseInt(`${orangeclockQ}`)}`);
      }
      for (let a = 0; a < 1; a++) {
         currentY /= Math.max(3, parseFloat(`${parseInt(`${orangeclockQ}`)}`));
      }
         orangeclockQ -= parseInt(`${currentY}`);
         currentY /= Math.max(5, parseFloat(`${parseInt(`${currentY}`) % 1}`));
         orangeclockQ *= 2 << (Math.min(Math.abs(parseInt(`${currentY}`)), 4));
      libswresamplec = new Map([[`${currentY}`, carouselT.length >> (Math.min(3, Math.abs(parseInt(`${currentY}`))))]]);
   }
      showI /= Math.max(parseFloat(`${libswresamplec.size}`), 3);
      playercommony.push(playercommony.length);
   while (3.21 == (showI + 4.52)) {
       let eighteenQ = 4.0;
       let yellowvideoliveh = 4.0;
       let smallorangeman7 = String.fromCharCode(120,95,55,48,95,105,110,116,114,97,112,114,101,100,0);
      if ((parseInt(`${eighteenQ}`) + smallorangeman7.length) < 2 && 3.4 < (1.7 + eighteenQ)) {
          let dropdownk = 4.0;
          let megaphonea = String.fromCharCode(112,105,110,103,95,111,95,55,51,0);
          let default_hE = 4.0;
          let imagesN = 2.0;
          let defaultplayerimgr = String.fromCharCode(119,95,54,51,95,112,114,101,100,105,99,116,111,114,0);
         smallorangeman7 = `${2 << (Math.min(1, defaultplayerimgr.length))}`;
         dropdownk -= parseFloat(`${megaphonea.length | parseInt(`${default_hE}`)}`);
         megaphonea = `${parseInt(`${imagesN}`)}`;
         default_hE /= Math.max(parseFloat(`${parseInt(`${imagesN}`)}`), 3);
         defaultplayerimgr += `${megaphonea.length}`;
      }
      let sendA = eighteenQ <= 6997171.0;
      do {
         eighteenQ += 3;
         if (sendA) {
            break;
         }
      } while ((5.6 > (eighteenQ - 4.52) && 2.10 > (4.52 * yellowvideoliveh)) && sendA);
       let philippinesA: Map<any, any> = new Map([[String.fromCharCode(98,117,99,107,101,116,115,95,113,95,49,56,0),false ], [String.fromCharCode(110,116,111,108,111,103,121,95,106,95,55,57,0),true ], [String.fromCharCode(104,95,56,54,95,100,105,115,112,97,116,99,104,0),false ]]);
       let basketballtrophyi: Map<any, any> = new Map([[String.fromCharCode(114,95,54,56,95,114,111,117,116,101,115,0),String.fromCharCode(114,101,103,105,115,116,101,114,95,108,95,57,0)], [String.fromCharCode(121,95,52,54,95,102,114,101,97,100,0),String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,117,95,51,52,0)], [String.fromCharCode(112,97,121,101,101,95,121,95,48,0),String.fromCharCode(112,111,114,116,114,97,105,116,95,111,95,52,51,0)]]);
         smallorangeman7 += `${smallorangeman7.length}`;
      while ((philippinesA.size - basketballtrophyi.size) >= 1 && (basketballtrophyi.size - 1) >= 3) {
         basketballtrophyi.set(`${yellowvideoliveh}`, 2);
         break;
      }
          let orangeU: Array<any> = [46, 148];
          let constantsp = String.fromCharCode(122,95,51,49,95,102,114,97,109,101,115,105,122,101,0);
         philippinesA = new Map([[`${basketballtrophyi.size}`, philippinesA.size * 3]]);
         orangeU = [constantsp.length << (Math.min(5, orangeU.length))];
         constantsp = `${constantsp.length}`;
          let catalogK = String.fromCharCode(122,95,52,56,95,108,111,111,107,115,0);
          let appsr = 5.0;
         yellowvideoliveh -= parseInt(`${eighteenQ}`);
         catalogK = `${parseInt(`${appsr}`) / 1}`;
         appsr -= parseFloat(`${parseInt(`${appsr}`) | 1}`);
      if (2.68 >= yellowvideoliveh) {
         smallorangeman7 = "3";
      }
      for (let i = 0; i < 1; i++) {
          let valuesa = String.fromCharCode(106,95,56,51,95,100,101,99,111,109,112,111,115,101,0);
          let dependency3 = true;
         smallorangeman7 += `${basketballtrophyi.size ^ 1}`;
         valuesa = "2";
         dependency3 = valuesa == valuesa;
      }
      arrowrightM = libsgcoreA > 36.11 && yellowvideoliveh > 36.11;
      break;
   }
      playercommony.push(2 ^ parseInt(`${guidek}`));
   while ((4 % (Math.max(9, toponP.size))) < 1 && (4.51 * guidek) < 1.77) {
       let emojis = String.fromCharCode(113,95,55,49,95,108,105,98,115,97,109,112,108,101,0);
       let iconclosewhitewithbgs: Array<any> = [24, 878];
      while ((4 & iconclosewhitewithbgs.length) == 4) {
         emojis = `${2 + emojis.length}`;
         break;
      }
      if (3 >= (emojis.length / (Math.max(9, iconclosewhitewithbgs.length))) || (emojis.length / 3) >= 3) {
          let storeC = 4;
          let episodeV = false;
          let networkg = 4.0;
         emojis = `${iconclosewhitewithbgs.length}`;
         storeC -= ((episodeV ? 2 : 4) ^ parseInt(`${networkg}`));
         episodeV = episodeV || 12.38 == networkg;
      }
      while (2 == (emojis.length / (Math.max(3, 4)))) {
         emojis += `${emojis.length / (Math.max(2, iconclosewhitewithbgs.length))}`;
         break;
      }
       let penaltyshootnogoalx = false;
       let redscoreballE = false;
         iconclosewhitewithbgs.push(((redscoreballE ? 1 : 2) & 3));
      for (let v = 0; v < 1; v++) {
          let distg = 5.0;
          let homeplayerJ = 2.0;
         redscoreballE = iconclosewhitewithbgs.length < 43;
         distg += parseFloat(`${parseInt(`${distg}`) + 3}`);
         homeplayerJ /= Math.max(parseInt(`${distg}`), 1);
      }
      toponP.set(`${guidek}`, 2);
      break;
   }
      libswresamplec = new Map([[`${loginsuccess8.size}`, 3]]);
       let interstitialN: Array<any> = [438, 986, 597];
      if (2 > (interstitialN.length + interstitialN.length) && 2 > (interstitialN.length + interstitialN.length)) {
         interstitialN.push(interstitialN.length + interstitialN.length);
      }
      while ((interstitialN.length << (Math.min(Math.abs(2), 2))) <= 1) {
         interstitialN.push(1 & interstitialN.length);
         break;
      }
      if (2 >= (interstitialN.length % (Math.max(interstitialN.length, 9))) || 4 >= (interstitialN.length % 2)) {
          let bootsplashO = String.fromCharCode(101,95,50,54,95,115,116,97,116,117,115,0);
          let statsnomoredatas = String.fromCharCode(117,95,51,51,95,101,110,116,105,114,101,108,121,0);
         interstitialN = [interstitialN.length - 3];
         bootsplashO = `${statsnomoredatas.length * bootsplashO.length}`;
         statsnomoredatas = `${statsnomoredatas.length & 1}`;
      }
      showI *= (parseFloat(`${carouselT == String.fromCharCode(53,0) ? parseInt(`${libsgcoreA}`) : carouselT.length}`));
      arrowrightM = carouselT.length >= 9 && String.fromCharCode(68,0) == handlere;
   while (1.71 >= (guidek - 3.24) && (3.24 - guidek) >= 1.46) {
       let gradlewo = 3;
       let typingloadingC = 4.0;
       let videoC = String.fromCharCode(105,116,101,114,97,116,105,118,101,95,105,95,51,50,0);
       let animationsj = 0.0;
      let containerj = 8020934.0 >= typingloadingC;
      do {
         typingloadingC += (parseFloat(`${String.fromCharCode(121,0) == videoC ? parseInt(`${animationsj}`) : videoC.length}`));
         if (containerj) {
            break;
         }
      } while (containerj && (3 <= (parseInt(`${typingloadingC}`) * videoC.length)));
       let homeactiveV = false;
       let penaltygoalt = false;
         penaltygoalt = videoC.length >= 55;
         homeactiveV = videoC.startsWith(`${animationsj}`);
          let shootyesgoalJ = String.fromCharCode(106,95,53,49,95,115,108,117,103,0);
         videoC += "3";
         shootyesgoalJ = `${shootyesgoalJ.length >> (Math.min(3, shootyesgoalJ.length))}`;
          let baseX = false;
          let launcherW = String.fromCharCode(99,111,112,121,105,110,105,111,118,95,108,95,56,49,0);
          let bgvipxvodv = String.fromCharCode(120,95,50,53,95,103,101,116,104,100,114,0);
         videoC += `${((baseX ? 1 : 1) + gradlewo)}`;
         baseX = 64 >= bgvipxvodv.length || String.fromCharCode(53,0) == launcherW;
         launcherW += `${bgvipxvodv.length * launcherW.length}`;
         penaltygoalt = 65.98 == typingloadingC;
         typingloadingC /= Math.max(parseFloat(`${gradlewo}`), 1);
      let moviesh = homeactiveV ? !homeactiveV : homeactiveV;
      do {
          let assetsO = 0;
          let minimize_ = String.fromCharCode(118,105,101,119,95,115,95,57,57,0);
          let securityy: Array<any> = [807, 831, 56];
          let fullP = 2.0;
          let iconnointernet1: Map<any, any> = new Map([[String.fromCharCode(106,95,52,95,119,105,110,99,101,0),String.fromCharCode(106,117,108,105,97,110,100,97,121,95,109,95,54,0)], [String.fromCharCode(117,95,51,52,95,117,116,105,108,115,0),String.fromCharCode(114,95,48,95,111,117,116,108,105,110,107,0)]]);
         homeactiveV = !homeactiveV;
         assetsO <<= Math.min(1, Math.abs(parseInt(`${fullP}`) << (Math.min(minimize_.length, 1))));
         minimize_ = `${parseInt(`${fullP}`) + 3}`;
         securityy.push(iconnointernet1.size);
         iconnointernet1 = new Map([[`${assetsO}`, assetsO | minimize_.length]]);
         if (moviesh) {
            break;
         }
      } while (moviesh && (penaltygoalt));
      for (let f = 0; f < 2; f++) {
         penaltygoalt = !penaltygoalt;
      }
      for (let f = 0; f < 1; f++) {
         homeactiveV = gradlewo > 54 || 43.42 > typingloadingC;
      }
         animationsj /= Math.max(4, 3 / (Math.max(7, gradlewo)));
      guidek -= parseFloat(`${2 / (Math.max(10, parseInt(`${guidek}`)))}`);
      break;
   }
   while (4 == (4 | handlere.length) && (1.8 - showI) == 2.0) {
      showI *= parseFloat(`${playercommony.length}`);
      break;
   }
   for (let o = 0; o < 3; o++) {
       let airbnbstarK = 1.0;
      if (airbnbstarK >= 4.55) {
         airbnbstarK /= Math.max(parseFloat(`${parseInt(`${airbnbstarK}`) | 1}`), 5);
      }
      while (5.81 == airbnbstarK) {
         airbnbstarK *= parseFloat(`${parseInt(`${airbnbstarK}`) - 2}`);
         break;
      }
      if ((2.32 * airbnbstarK) >= 2.72 || 2.32 >= (airbnbstarK * airbnbstarK)) {
         airbnbstarK /= Math.max(4, parseFloat(`${parseInt(`${airbnbstarK}`) ^ 1}`));
      }
      libsgcoreA *= loginsuccess8.size - playercommony.length;
   }

        this.#triggerUmengEvent(FSliderCenter.FTypingPredictionbutton);

      disconnected5 = `${parseInt(`${guidek}`) % (Math.max(disconnected5.length, 6))}`;
       let imagesM: Map<any, any> = new Map([[String.fromCharCode(110,95,49,95,114,101,105,109,112,111,114,116,0),false ], [String.fromCharCode(104,95,54,95,114,97,115,116,101,114,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(105,112,104,111,110,101,95,106,95,52,57,0),true ]]);
       let scores: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,114,95,51,57,0),248], [String.fromCharCode(105,95,57,51,95,112,97,114,116,105,99,105,112,97,110,116,115,0),665]]);
      let nextN = 7452383 <= imagesM.size;
      do {
         imagesM = new Map([[`${scores.size}`, imagesM.size % (Math.max(scores.size, 6))]]);
         if (nextN) {
            break;
         }
      } while (nextN && ((scores.size << (Math.min(Math.abs(imagesM.size), 1))) <= 5));
      if ((1 ^ imagesM.size) == 3 && (1 ^ imagesM.size) == 1) {
         scores = new Map([[`${imagesM.size}`, 2 - imagesM.size]]);
      }
      for (let z = 0; z < 2; z++) {
         imagesM.set(`${scores.size}`, 1 * scores.size);
      }
      let icontransferclubA = 9850678 >= scores.size;
      do {
          let whistle1 = 2.0;
          let libflipperC = 4;
         scores = new Map([[`${scores.size}`, scores.size / 2]]);
         whistle1 -= 1 % (Math.max(libflipperC, 2));
         libflipperC &= 1;
         if (icontransferclubA) {
            break;
         }
      } while ((3 >= (imagesM.size | 3) && 2 >= (3 | scores.size)) && icontransferclubA);
         imagesM = new Map([[`${scores.size}`, 2 % (Math.max(1, scores.size))]]);
         imagesM = new Map([[`${scores.size}`, 3 & imagesM.size]]);
      handlere = `${playercommony.length}`;
   while (Array.from(loginsuccess8.values()).includes(libswresamplec.size)) {
       let firebasel = 4;
       let showlessf = 0.0;
       let resenda: Array<any> = [51, 456];
       let predictionbanner5 = 4.0;
       let whitesmalltick_ = String.fromCharCode(108,95,53,49,95,115,105,122,101,114,0);
       let reminderE = String.fromCharCode(117,95,56,49,95,114,101,100,105,114,101,99,116,105,111,110,97,108,0);
          let yellowredcardU = true;
         reminderE = `${resenda.length}`;
         yellowredcardU = (!yellowredcardU ? yellowredcardU : yellowredcardU);
         firebasel += firebasel >> (Math.min(reminderE.length, 4));
      let huaweiD = firebasel >= 8578473;
      do {
          let iconchatsendX = String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,118,95,57,0);
          let final_o7 = String.fromCharCode(112,95,51,49,95,101,120,116,101,110,115,105,111,110,0);
          let libtanS = String.fromCharCode(122,95,53,53,95,102,105,110,97,108,105,122,101,100,0);
          let sigmobh: Array<any> = [328, 189];
         firebasel ^= 1 + reminderE.length;
         iconchatsendX += `${(iconchatsendX == String.fromCharCode(97,0) ? libtanS.length : iconchatsendX.length)}`;
         final_o7 = `${iconchatsendX.length | 2}`;
         libtanS += "1";
         sigmobh = [3 & libtanS.length];
         if (huaweiD) {
            break;
         }
      } while (huaweiD && ((4 >> (Math.min(4, resenda.length))) == 3 || (resenda.length >> (Math.min(Math.abs(4), 1))) == 5));
      while (!whitesmalltick_.startsWith(`${showlessf}`)) {
         showlessf += whitesmalltick_.length;
         break;
      }
          let videobufferloadingJ = 2;
          let whitesmallticks = 4.0;
          let currentJ = false;
         whitesmalltick_ = `${parseInt(`${predictionbanner5}`) + 2}`;
         videobufferloadingJ *= (parseInt(`${whitesmallticks}`) / (Math.max(3, (currentJ ? 1 : 3))));
         whitesmallticks += videobufferloadingJ;
         currentJ = (whitesmallticks - videobufferloadingJ) <= 71;
      for (let t = 0; t < 3; t++) {
         firebasel ^= 3 & whitesmalltick_.length;
      }
      while (whitesmalltick_.endsWith(`${firebasel}`)) {
          let whistle0: Array<any> = [String.fromCharCode(111,95,56,52,95,99,111,108,108,101,99,116,111,114,0), String.fromCharCode(97,101,118,97,108,95,121,95,53,55,0), String.fromCharCode(122,95,57,55,95,109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0)];
          let foregroundz = 4.0;
          let inouttargetyellowl: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,95,120,95,53,50,0),String.fromCharCode(103,114,97,100,108,101,95,102,95,52,53,0)], [String.fromCharCode(116,95,55,48,95,115,121,110,99,119,111,114,100,115,0),String.fromCharCode(120,95,53,50,95,102,114,97,109,101,115,0)]]);
          let cinit_wl = String.fromCharCode(111,95,56,95,103,114,97,110,117,108,97,114,0);
         whitesmalltick_ = `${inouttargetyellowl.size}`;
         whistle0 = [parseInt(`${foregroundz}`) / (Math.max(whistle0.length, 8))];
         foregroundz -= parseFloat(`${parseInt(`${foregroundz}`) >> (Math.min(whistle0.length, 5))}`);
         inouttargetyellowl = new Map([[`${foregroundz}`, cinit_wl.length | 1]]);
         cinit_wl = `${3 & whistle0.length}`;
         break;
      }
       let teamE = String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,117,95,49,48,0);
       let righte = String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,119,95,53,50,0);
      let delegate_wo = righte == String.fromCharCode(109,103,98,114,95,109,109,119,119,109,0);
      do {
          let unreadh = 3.0;
          let shielddonex = false;
          let yellowtoredr = String.fromCharCode(101,95,53,52,95,112,111,115,116,0);
          let found2 = 4;
         righte = `${teamE.length / (Math.max(8, found2))}`;
         unreadh -= (parseFloat(`${(shielddonex ? 3 : 3) * parseInt(`${unreadh}`)}`));
         shielddonex = !shielddonex || 92.42 == unreadh;
         yellowtoredr += `${(yellowtoredr == String.fromCharCode(120,0) ? yellowtoredr.length : parseInt(`${unreadh}`))}`;
         found2 >>= Math.min(3, Math.abs(yellowtoredr.length >> (Math.min(Math.abs(1), 1))));
         if (delegate_wo) {
            break;
         }
      } while (delegate_wo && (teamE != String.fromCharCode(53,0)));
         reminderE += `${whitesmalltick_.length}`;
         whitesmalltick_ = `${parseInt(`${showlessf}`) - firebasel}`;
      loginsuccess8.set(`${disconnected5}`, disconnected5.length << (Math.min(Math.abs(2), 4)));
      break;
   }
       let gifgoalbgl = 5.0;
      for (let f = 0; f < 3; f++) {
         gifgoalbgl += parseFloat(`${3 | parseInt(`${gifgoalbgl}`)}`);
      }
      let fastforwardQ = 8637019.0 >= gifgoalbgl;
      do {
         gifgoalbgl *= parseFloat(`${parseInt(`${gifgoalbgl}`)}`);
         if (fastforwardQ) {
            break;
         }
      } while (((gifgoalbgl / (Math.max(gifgoalbgl, 4))) <= 3.43) && fastforwardQ);
       let defaultfootballbgh = String.fromCharCode(111,95,54,51,95,108,111,117,100,115,112,101,97,107,101,114,0);
      carouselT += `${parseInt(`${showI}`) + 3}`;
       let gifgoal5: Array<any> = [String.fromCharCode(121,95,56,50,95,116,117,110,110,101,108,0), String.fromCharCode(120,95,56,48,95,99,111,110,115,116,114,117,99,116,105,118,101,0), String.fromCharCode(111,95,55,52,95,97,105,110,116,0)];
       let sport9: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,121,95,57,56,0),String.fromCharCode(104,95,56,56,95,109,97,120,98,117,114,115,116,0)], [String.fromCharCode(115,116,115,100,95,111,95,57,54,0),String.fromCharCode(100,95,48,95,100,97,105,0)], [String.fromCharCode(111,95,57,54,0),String.fromCharCode(98,95,49,56,95,97,117,116,111,115,99,114,111,108,108,0)]]);
       let footballfield1 = String.fromCharCode(112,97,99,101,100,95,113,95,50,49,0);
      while (!Array.from(sport9.keys()).includes(`${gifgoal5.length}`)) {
         sport9 = new Map([[`${gifgoal5.length}`, gifgoal5.length]]);
         break;
      }
      if (gifgoal5.length <= 3) {
         gifgoal5 = [sport9.size ^ 2];
      }
      if (!Array.from(sport9.values()).includes(gifgoal5.length)) {
         sport9 = new Map([[`${sport9.size}`, 3]]);
      }
         footballfield1 += `${1 >> (Math.min(1, footballfield1.length))}`;
      let defaultfootballbgx = 9528839 <= sport9.size;
      do {
         sport9 = new Map([[`${sport9.size}`, footballfield1.length % (Math.max(1, 7))]]);
         if (defaultfootballbgx) {
            break;
         }
      } while ((4 > (sport9.size - gifgoal5.length) && 5 > (gifgoal5.length - 4)) && defaultfootballbgx);
         gifgoal5 = [gifgoal5.length];
          let searchbarK: Map<any, any> = new Map([[String.fromCharCode(114,97,116,105,111,110,97,108,95,48,95,54,51,0),48], [String.fromCharCode(119,95,57,48,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0),236]]);
          let back0 = 0.0;
         gifgoal5 = [searchbarK.size ^ 2];
         searchbarK.set(`${back0}`, parseInt(`${back0}`));
          let episodeH = 3;
          let nativeF = true;
         sport9.set(`${episodeH}`, episodeH);
         nativeF = (!nativeF ? nativeF : !nativeF);
          let modityf = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,50,95,53,52,0);
          let filterr = 0;
         sport9 = new Map([[`${filterr}`, 3 + filterr]]);
         modityf = `${modityf.length}`;
      homeactivei = (playercommony.length >> (Math.min(Math.abs(toponP.size), 5))) >= 27;
   if (arrowrightM) {
       let pathO: Map<any, any> = new Map([[String.fromCharCode(101,118,114,112,99,95,114,95,50,52,0),701], [String.fromCharCode(117,95,52,56,95,101,120,97,99,116,0),205]]);
       let exampleimageR = false;
       let descW = 5.0;
          let proxyV = 0;
          let homeloading7 = 2.0;
         pathO = new Map([[`${exampleimageR}`, proxyV]]);
         proxyV -= parseInt(`${homeloading7}`);
      let arrowg = exampleimageR ? !exampleimageR : exampleimageR;
      do {
         exampleimageR = !exampleimageR;
         if (arrowg) {
            break;
         }
      } while (arrowg && (descW == 3.84));
          let sendM: Array<any> = [777, 582];
         exampleimageR = sendM.length <= parseInt(`${descW}`);
         descW /= Math.max((parseFloat(`${(exampleimageR ? 4 : 5) + parseInt(`${descW}`)}`)), 3);
          let iconcurrentmatchh = String.fromCharCode(99,97,112,116,117,114,105,110,103,95,53,95,56,0);
          let basketballplayerplaceholderv = 3;
         exampleimageR = pathO.size == 39 && exampleimageR;
         iconcurrentmatchh += `${basketballplayerplaceholderv | 2}`;
         basketballplayerplaceholderv ^= 2 | basketballplayerplaceholderv;
      while ((2 + pathO.size) < 2 && exampleimageR) {
          let greenarrowupQ = 4.0;
          let shoot5 = String.fromCharCode(99,104,101,99,107,115,117,109,109,101,100,95,97,95,57,51,0);
          let libavcodec3 = 5.0;
         exampleimageR = descW >= greenarrowupQ;
         greenarrowupQ /= Math.max(3, 2);
         shoot5 += `${(shoot5 == String.fromCharCode(120,0) ? parseInt(`${libavcodec3}`) : shoot5.length)}`;
         libavcodec3 -= shoot5.length;
         break;
      }
       let shareI: Array<any> = [482, 365, 880];
       let oranges: Array<any> = [String.fromCharCode(118,95,55,51,95,108,101,97,115,101,0), String.fromCharCode(100,105,121,102,112,95,105,95,57,49,0), String.fromCharCode(104,113,112,101,108,95,97,95,50,54,0)];
          let mbjscommonP = 0;
         exampleimageR = (descW - parseFloat(`${pathO.size}`)) < 82.21;
         mbjscommonP /= Math.max(1 | mbjscommonP, 5);
      let signinup3 = exampleimageR ? !exampleimageR : exampleimageR;
      do {
         exampleimageR = (oranges.length - shareI.length) >= 54;
         if (signinup3) {
            break;
         }
      } while (((pathO.size + 4) >= 2 && exampleimageR) && signinup3);
      arrowrightM = homeactivei;
   }
   while ((playercommony.length >> (Math.min(Math.abs(5), 2))) <= 2) {
      showI -= parseFloat(`${toponP.size}`);
      break;
   }
   while (arrowrightM) {
      homeactivei = carouselT.length > 33;
      break;
   }
   while (!Array.from(libswresamplec.keys()).includes(`${playercommony.length}`)) {
      libswresamplec.set(`${mutedh}`, 3 % (Math.max(parseInt(`${mutedh}`), 5)));
      break;
   }
       let predictionarrowA = 2.0;
       let orientatione = true;
       let l_managerL = String.fromCharCode(98,101,103,97,110,95,118,95,57,54,0);
          let huaweiR = String.fromCharCode(115,95,56,95,114,111,117,116,101,115,0);
          let friendsA: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,122,108,105,98,0),false ], [String.fromCharCode(115,97,103,97,95,57,95,57,48,0),true ]]);
         orientatione = parseInt(`${predictionarrowA}`) <= huaweiR.length;
         huaweiR += `${2 ^ friendsA.size}`;
         friendsA = new Map([[`${friendsA.size}`, 2]]);
          let ballj = String.fromCharCode(102,114,97,109,101,114,95,50,95,51,52,0);
          let pauseD = true;
          let dragK = 4.0;
         orientatione = !l_managerL.startsWith(`${pauseD}`);
         ballj = "1";
         pauseD = !ballj.startsWith(`${dragK}`);
         dragK /= Math.max(2, ballj.length);
      for (let w = 0; w < 1; w++) {
          let lesso = 3;
         predictionarrowA += (parseFloat(`${l_managerL.length >> (Math.min(3, Math.abs((orientatione ? 1 : 1))))}`));
         lesso %= Math.max(lesso, 4);
      }
       let historyT = 4;
       let topon1 = 1;
         historyT <<= Math.min(Math.abs((l_managerL == String.fromCharCode(98,0) ? l_managerL.length : topon1)), 4);
       let penaltye = String.fromCharCode(110,95,53,95,100,101,115,101,108,101,99,116,105,111,110,0);
         topon1 <<= Math.min(5, Math.abs(2));
      let completeK = 5967493 <= l_managerL.length;
      do {
         l_managerL = `${parseInt(`${predictionarrowA}`) >> (Math.min(5, Math.abs(3)))}`;
         if (completeK) {
            break;
         }
      } while (completeK && ((l_managerL.length | 3) >= 3));
         penaltye = `${historyT}`;
      playercommony = [parseInt(`${mutedh}`) << (Math.min(1, Math.abs(1)))];
   let rocket8 = toponP.size >= 7710706;
   do {
      toponP = new Map([[`${loginsuccess8.size}`, loginsuccess8.size]]);
      if (rocket8) {
         break;
      }
   } while ((3 == toponP.size) && rocket8);
      toponP = new Map([[`${playercommony.length}`, ((arrowrightM ? 1 : 5) - playercommony.length)]]);
        this.#triggerFirebaseCustomEvent(FSliderCenter.FTypingPredictionbutton);

      homeactivei = handlere.length < loginsuccess8.size;
      loginsuccess8 = new Map([[`${loginsuccess8.size}`, loginsuccess8.size | 2]]);
      guidek += parseFloat(`${loginsuccess8.size}`);
   let nalyticsU = libsgcoreA <= 7822784.0;
   do {
      libsgcoreA /= Math.max(4, 2 - parseInt(`${mutedh}`));
      if (nalyticsU) {
         break;
      }
   } while (nalyticsU && (showI > libsgcoreA));
       let thailandI = false;
       let profilepicc = 1.0;
       let imageactionlive9 = String.fromCharCode(101,108,101,109,101,110,116,115,95,114,95,55,53,0);
      let imagenomoredata0 = thailandI ? !thailandI : thailandI;
      do {
         thailandI = !thailandI || profilepicc >= 50.89;
         if (imagenomoredata0) {
            break;
         }
      } while (imagenomoredata0 && (!imageactionlive9.endsWith(`${thailandI}`)));
      if ((1.88 / (Math.max(2, profilepicc))) == 2.60 || 1.88 == profilepicc) {
         profilepicc += ((thailandI ? 2 : 1));
      }
         profilepicc -= parseInt(`${profilepicc}`);
       let refreshborderlessr = String.fromCharCode(110,95,57,52,95,120,112,101,114,105,109,101,110,116,97,108,0);
       let orangeuparrowV = String.fromCharCode(117,115,108,116,95,118,95,54,57,0);
      let yellowscoreballn = imageactionlive9.length >= 8439642;
      do {
         imageactionlive9 = `${parseInt(`${profilepicc}`) * 3}`;
         if (yellowscoreballn) {
            break;
         }
      } while (yellowscoreballn && (orangeuparrowV == imageactionlive9));
         thailandI = orangeuparrowV.length <= imageactionlive9.length;
      let emojiheartu = refreshborderlessr.length <= 5104030;
      do {
         refreshborderlessr += `${((thailandI ? 2 : 5))}`;
         if (emojiheartu) {
            break;
         }
      } while (((refreshborderlessr.length + 5) > 5 || 5.65 > (refreshborderlessr.length + profilepicc)) && emojiheartu);
          let libzeuse = String.fromCharCode(114,101,108,102,117,110,99,95,104,95,54,50,0);
          let whatsappe = 0.0;
          let bangH = true;
         profilepicc *= (libzeuse == String.fromCharCode(88,0) ? libzeuse.length : parseInt(`${profilepicc}`));
         whatsappe -= (parseFloat(`${(bangH ? 4 : 4) * parseInt(`${whatsappe}`)}`));
         bangH = whatsappe < 32.98 || !bangH;
       let icondownimgB: Array<any> = [637, 889];
      arrowrightM = (loginsuccess8.size << (Math.min(4, playercommony.length))) <= 30;
      carouselT += `${2 / (Math.max(2, parseInt(`${mutedh}`)))}`;
   for (let w = 0; w < 2; w++) {
       let temperatureu = String.fromCharCode(106,95,49,50,95,100,98,108,112,0);
       let yellowanimationliveO = 0;
          let c_managerZ = true;
          let source4: Array<any> = [905, 749];
          let panglem: Array<any> = [981, 544, 191];
         temperatureu += "2";
         c_managerZ = (((c_managerZ ? 59 : source4.length) << (Math.min(source4.length, 1))) > 59);
         panglem = [source4.length + 2];
      let dicelogoX = yellowanimationliveO <= 6566891;
      do {
         yellowanimationliveO -= yellowanimationliveO;
         if (dicelogoX) {
            break;
         }
      } while ((3 > (temperatureu.length << (Math.min(Math.abs(3), 1))) || (3 << (Math.min(2, temperatureu.length))) > 1) && dicelogoX);
         yellowanimationliveO -= 3 << (Math.min(5, Math.abs(yellowanimationliveO)));
      while ((yellowanimationliveO / (Math.max(temperatureu.length, 10))) <= 5 || 3 <= (temperatureu.length / 5)) {
         temperatureu = `${temperatureu.length}`;
         break;
      }
          let ticked6 = 1;
          let selectp = 2.0;
          let goalj = false;
         temperatureu = "3";
         ticked6 *= parseInt(`${selectp}`) & 3;
         selectp -= 3 - parseInt(`${selectp}`);
         goalj = 31.67 >= selectp;
      let iconbellactiveu = 9535577 <= yellowanimationliveO;
      do {
         yellowanimationliveO *= yellowanimationliveO;
         if (iconbellactiveu) {
            break;
         }
      } while ((1 == (temperatureu.length - yellowanimationliveO)) && iconbellactiveu);
      playercommony.push(carouselT.length);
   }
      toponP.set(`${playercommony.length}`, toponP.size);
      handlere = `${3 / (Math.max(8, textlayoutmanagerD.size))}`;
      arrowrightM = 75.67 > mutedh;
       let orangeW = String.fromCharCode(97,112,112,101,110,100,97,108,108,95,54,95,51,53,0);
         orangeW += `${orangeW.length}`;
          let libreactF = 5;
          let libtanu = String.fromCharCode(100,105,115,116,112,111,105,110,116,95,100,95,57,50,0);
          let moviesu = String.fromCharCode(119,95,55,50,95,109,97,114,107,101,114,0);
         orangeW = `${orangeW.length}`;
         libreactF *= (String.fromCharCode(85,0) == libtanu ? libtanu.length : libreactF);
         moviesu += `${libreactF ^ libtanu.length}`;
         orangeW = `${orangeW.length}`;
      playercommony.push(3 ^ parseInt(`${guidek}`));
      textlayoutmanagerD = new Map([[handlere, (carouselT == String.fromCharCode(72,0) ? handlere.length : carouselT.length)]]);
        this.#triggerCustomEvent('click', IIPhoneshare.FOrange);
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
        this.#triggerUmengEvent(FSliderCenter.FVignette, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FVignette, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('view', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });
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
        this.#triggerUmengEvent(FSliderCenter.FLibswresample, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FLibswresample, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('click', ads_title, {
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });
    }

    
    static sportDetailsViewsAnalytics = () => {
       let complete2: Array<any> = [782, 183];
    let matchactive7 = String.fromCharCode(115,99,116,112,117,116,105,108,95,57,95,53,50,0);
    let iconstar2: Map<any, any> = new Map([[String.fromCharCode(99,111,112,116,115,95,104,95,55,51,0),107], [String.fromCharCode(99,116,114,95,105,95,51,48,0),484], [String.fromCharCode(115,97,109,112,108,101,95,101,95,52,50,0),525]]);
    let skip3: Map<any, any> = new Map([[String.fromCharCode(99,95,54,95,100,101,115,116,0),389], [String.fromCharCode(121,95,56,53,95,98,117,108,108,101,116,0),796]]);
    let link6 = 2;
    let ewardedm = String.fromCharCode(102,95,52,57,95,103,109,116,105,109,101,0);
    let brightnessF = String.fromCharCode(102,111,114,99,105,110,103,95,120,95,50,50,0);
    let teamdetailsbg_ = false;
   while (1 >= (complete2.length + brightnessF.length) || (1 + brightnessF.length) >= 5) {
      brightnessF += `${skip3.size / (Math.max(brightnessF.length, 1))}`;
      break;
   }
       let attributedstringb = String.fromCharCode(111,98,106,101,99,116,105,118,101,95,118,95,56,51,0);
       let editT = 4;
       let arrowselectdownf: Map<any, any> = new Map([[String.fromCharCode(107,95,56,95,97,108,108,114,103,98,0),296], [String.fromCharCode(98,95,53,50,95,99,117,109,117,108,97,116,105,118,101,0),487], [String.fromCharCode(108,111,97,100,95,49,95,49,54,0),24]]);
       let predictionarrowh: Map<any, any> = new Map([[String.fromCharCode(102,95,55,52,95,112,114,101,115,115,101,100,0),614], [String.fromCharCode(122,95,53,48,95,101,110,99,111,100,105,110,103,98,0),66]]);
      let arrowselectdownV = 8350459 <= editT;
      do {
         editT *= editT % (Math.max(predictionarrowh.size, 8));
         if (arrowselectdownV) {
            break;
         }
      } while (arrowselectdownV && ((arrowselectdownf.size + 3) <= 3 && (3 + arrowselectdownf.size) <= 5));
      while (predictionarrowh.get(`${arrowselectdownf.size}`) == null) {
         predictionarrowh.set(`${editT}`, 2 * predictionarrowh.size);
         break;
      }
      let loginsuccessH = 6574584 >= arrowselectdownf.size;
      do {
         arrowselectdownf.set(`${arrowselectdownf.size}`, arrowselectdownf.size);
         if (loginsuccessH) {
            break;
         }
      } while (loginsuccessH && (2 < arrowselectdownf.size));
      for (let p = 0; p < 2; p++) {
         editT |= editT;
      }
          let latnb: Array<any> = [199, 90, 987];
         arrowselectdownf.set(`${editT}`, 2);
         latnb.push(latnb.length >> (Math.min(Math.abs(3), 5)));
      ewardedm += `${skip3.size - 3}`;
      attributedstringb += `${(attributedstringb == String.fromCharCode(73,0) ? attributedstringb.length : attributedstringb.length)}`;
      matchactive7 += `${iconstar2.size ^ 3}`;
       let bangA = String.fromCharCode(105,110,101,116,95,53,95,53,48,0);
       let iconbackwhiteD = 5;
         bangA = "2";
         iconbackwhiteD %= Math.max(iconbackwhiteD ^ 2, 2);
         iconbackwhiteD %= Math.max(4, iconbackwhiteD / (Math.max(bangA.length, 4)));
       let modity0: Map<any, any> = new Map([[String.fromCharCode(105,109,105,116,97,116,101,95,112,95,49,52,0),String.fromCharCode(115,104,97,112,101,115,95,114,95,51,49,0)], [String.fromCharCode(114,101,110,100,105,116,105,111,110,95,104,95,57,49,0),String.fromCharCode(104,121,115,99,97,108,101,95,99,95,49,49,0)]]);
       let whistleorangeo: Map<any, any> = new Map([[String.fromCharCode(109,95,50,53,95,99,111,108,108,97,112,115,105,110,103,0),849], [String.fromCharCode(112,95,51,95,113,115,116,101,112,0),725], [String.fromCharCode(114,101,97,109,95,113,95,55,57,0),572]]);
          let shareblacki: Array<any> = [622, 768, 952];
          let bnewinterstitialB = String.fromCharCode(102,105,108,116,101,114,95,114,95,54,54,0);
         iconbackwhiteD ^= bangA.length;
         shareblacki.push(3);
         bnewinterstitialB = `${bnewinterstitialB.length}`;
      if (5 <= (4 >> (Math.min(1, Math.abs(iconbackwhiteD))))) {
          let gifgoalG = String.fromCharCode(109,95,53,48,95,101,120,116,114,97,99,116,105,111,110,0);
          let disconnectedlogoE = 2.0;
          let playY = 3;
         bangA = `${iconbackwhiteD}`;
         gifgoalG = `${playY}`;
         disconnectedlogoE *= playY + parseInt(`${disconnectedlogoE}`);
      }
      iconstar2 = new Map([[matchactive7, matchactive7.length]]);
   let predictiony = String.fromCharCode(97,104,105,0) == ewardedm;
   do {
      ewardedm = `${complete2.length << (Math.min(matchactive7.length, 1))}`;
      if (predictiony) {
         break;
      }
   } while ((ewardedm.includes(`${link6}`)) && predictiony);
      ewardedm += `${matchactive7.length % 1}`;
   for (let s = 0; s < 3; s++) {
      matchactive7 = `${(String.fromCharCode(97,0) == matchactive7 ? matchactive7.length : skip3.size)}`;
   }
      complete2 = [ewardedm.length % 2];
      matchactive7 = `${3 * skip3.size}`;

        this.#triggerUmengEvent(FSliderCenter.FIconviewer);

       let filedj = String.fromCharCode(105,111,115,116,114,101,97,109,95,119,95,49,51,0);
       let dataS = 0.0;
      if (5 >= (filedj.length + 4) || 3 >= (parseInt(`${dataS}`) + 4)) {
          let rightU = String.fromCharCode(121,118,99,111,110,102,105,103,95,111,95,51,50,0);
         dataS *= parseFloat(`${1}`);
         rightU = "1";
      }
      if (2 > filedj.length) {
         filedj += `${parseInt(`${dataS}`)}`;
      }
      let turndownf = dataS >= 5082519.0;
      do {
          let assist_: Array<any> = [879, 523, 418];
          let blackJ = String.fromCharCode(116,105,102,102,95,107,95,56,50,0);
         dataS -= (parseFloat(`${blackJ == String.fromCharCode(101,0) ? filedj.length : blackJ.length}`));
         assist_.push(assist_.length);
         if (turndownf) {
            break;
         }
      } while ((4.41 <= (dataS + parseFloat(`${filedj.length}`)) || (5 + filedj.length) <= 3) && turndownf);
          let roundv = String.fromCharCode(114,101,111,114,100,101,114,97,98,108,101,95,121,95,56,51,0);
          let iconchatsendP = String.fromCharCode(111,95,57,54,95,105,100,101,116,0);
         filedj = `${filedj.length | parseInt(`${dataS}`)}`;
         roundv = `${3 * iconchatsendP.length}`;
         iconchatsendP += `${(iconchatsendP == String.fromCharCode(109,0) ? iconchatsendP.length : roundv.length)}`;
         dataS /= Math.max(parseFloat(`${filedj.length}`), 4);
      while (1 >= (3 / (Math.max(5, filedj.length)))) {
          let libloggerp = true;
         dataS /= Math.max((parseFloat(`${(libloggerp ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${dataS}`)), 4))}`)), 2);
         break;
      }
      skip3 = new Map([[ewardedm, ewardedm.length + link6]]);
   if (matchactive7.length > skip3.size) {
       let downF = String.fromCharCode(100,95,56,50,95,111,118,101,114,114,105,100,100,101,110,0);
       let result3 = true;
         downF += `${(downF.length * (result3 ? 3 : 4))}`;
         downF += "3";
      if (result3) {
         downF = `${downF.length ^ 2}`;
      }
          let iconwatch2 = 2.0;
         result3 = !downF.endsWith(`${result3}`);
         iconwatch2 += parseInt(`${iconwatch2}`);
         result3 = !result3 && downF.length <= 92;
         result3 = !result3;
      matchactive7 = `${skip3.size}`;
   }
   while (ewardedm.length > 1) {
      iconstar2 = new Map([[`${iconstar2.size}`, iconstar2.size]]);
      break;
   }
      ewardedm += `${3 << (Math.min(2, complete2.length))}`;
   while (brightnessF.length == iconstar2.size) {
      iconstar2 = new Map([[matchactive7, link6]]);
      break;
   }
      complete2 = [matchactive7.length | iconstar2.size];
   if (complete2.length >= brightnessF.length) {
       let controls4 = String.fromCharCode(97,115,112,101,99,116,115,95,113,95,50,50,0);
       let nterstitiale = 4.0;
       let wifiroutery = String.fromCharCode(119,114,105,116,101,99,111,112,121,95,115,95,49,48,48,0);
       let playa: Array<any> = [862, 532];
          let splashh = String.fromCharCode(97,118,102,114,97,109,101,95,48,95,55,49,0);
         wifiroutery += `${controls4.length >> (Math.min(Math.abs(2), 3))}`;
         splashh = `${2 << (Math.min(1, splashh.length))}`;
      if (1.1 >= (nterstitiale / (Math.max(parseFloat(`${playa.length}`), 7))) || 1 >= (playa.length / (Math.max(9, parseInt(`${nterstitiale}`))))) {
          let header7 = String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,102,95,53,54,0);
          let cornerkickK: Map<any, any> = new Map([[String.fromCharCode(110,95,57,56,95,99,104,97,110,103,101,100,0),991], [String.fromCharCode(115,116,114,105,110,103,105,102,121,95,112,95,55,54,0),99], [String.fromCharCode(102,102,105,111,95,98,95,49,48,48,0),952]]);
          let sideX = 3.0;
         nterstitiale *= parseFloat(`${playa.length}`);
         header7 += `${header7.length + 2}`;
         cornerkickK.set(`${header7}`, (header7 == String.fromCharCode(88,0) ? cornerkickK.size : header7.length));
         sideX *= parseFloat(`${2 | cornerkickK.size}`);
      }
      if (playa.length >= parseInt(`${nterstitiale}`)) {
         nterstitiale /= Math.max(1, parseFloat(`${2 << (Math.min(5, controls4.length))}`));
      }
         nterstitiale /= Math.max(parseFloat(`${playa.length}`), 1);
      if (3 > (playa.length & 4)) {
          let reactnativejsG = 1.0;
          let holderq = 2;
          let libfbjni0 = String.fromCharCode(100,95,57,49,95,119,104,101,101,108,0);
          let xadsdkE: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,95,108,95,56,50,0),String.fromCharCode(116,119,111,108,97,109,101,95,49,95,51,51,0)], [String.fromCharCode(120,95,56,57,0),String.fromCharCode(101,95,53,95,105,115,97,99,0)]]);
         playa = [xadsdkE.size];
         reactnativejsG *= parseFloat(`${holderq}`);
         holderq >>= Math.min(libfbjni0.length, 4);
         libfbjni0 += `${holderq << (Math.min(Math.abs(parseInt(`${reactnativejsG}`)), 2))}`;
         xadsdkE = new Map([[`${holderq}`, parseInt(`${reactnativejsG}`) * 3]]);
      }
      if (parseFloat(`${wifiroutery.length}`) == nterstitiale) {
         nterstitiale += parseFloat(`${parseInt(`${nterstitiale}`) / 2}`);
      }
      if (5.73 == nterstitiale) {
         nterstitiale += parseFloat(`${playa.length / 3}`);
      }
       let shootnogoalv: Array<any> = [String.fromCharCode(99,117,114,114,114,101,110,116,95,118,95,54,50,0), String.fromCharCode(115,95,56,52,95,115,99,114,101,101,110,0), String.fromCharCode(119,95,51,56,95,108,97,121,101,114,105,110,103,0)];
      for (let h = 0; h < 3; h++) {
         nterstitiale *= parseFloat(`${parseInt(`${nterstitiale}`)}`);
      }
      let navigation1 = 9876999 <= shootnogoalv.length;
      do {
         shootnogoalv = [wifiroutery.length];
         if (navigation1) {
            break;
         }
      } while ((shootnogoalv.length <= 3) && navigation1);
         playa = [controls4.length & 3];
      for (let a = 0; a < 3; a++) {
          let malaysiay = 4.0;
          let bgvipsportO = 5.0;
          let arrowdownN = String.fromCharCode(120,95,52,48,95,115,121,110,99,104,114,111,110,105,122,101,0);
         nterstitiale += parseFloat(`${shootnogoalv.length & controls4.length}`);
         malaysiay -= (arrowdownN == String.fromCharCode(86,0) ? arrowdownN.length : parseInt(`${bgvipsportO}`));
         bgvipsportO += parseFloat(`${parseInt(`${malaysiay}`)}`);
      }
      brightnessF = `${skip3.size}`;
   }
   if (2 <= (link6 << (Math.min(Math.abs(2), 3))) && 2 <= (link6 << (Math.min(Math.abs(iconstar2.size), 1)))) {
      iconstar2 = new Map([[`${complete2.length}`, (ewardedm == String.fromCharCode(121,0) ? ewardedm.length : complete2.length)]]);
   }
   while (2 > (4 + skip3.size) || (iconstar2.size + skip3.size) > 4) {
      skip3 = new Map([[`${complete2.length}`, ewardedm.length * 1]]);
      break;
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FIconviewer);

   if (4 == (2 | iconstar2.size) || (brightnessF.length | iconstar2.size) == 2) {
       let bgvipxvodO: Array<any> = [907, 80, 735];
       let membership6: Array<any> = [799, 772];
       let cornerkickP = String.fromCharCode(121,95,50,48,95,105,110,116,115,0);
      for (let y = 0; y < 1; y++) {
         membership6 = [2];
      }
      for (let g = 0; g < 3; g++) {
          let librrc7 = true;
          let bootsplashR = true;
          let yellowredcardx: Array<any> = [744, 84];
          let fullscreenminy = 3.0;
         cornerkickP = `${bgvipxvodO.length - parseInt(`${fullscreenminy}`)}`;
         librrc7 = yellowredcardx.includes(librrc7);
         bootsplashR = (((!bootsplashR ? yellowredcardx.length : 17) + yellowredcardx.length) == 17);
         fullscreenminy *= (parseFloat(`${yellowredcardx.length + (librrc7 ? 1 : 3)}`));
      }
       let iconschedulev: Array<any> = [475, 174, 399];
       let routeru: Map<any, any> = new Map([[String.fromCharCode(118,98,108,101,95,117,95,53,49,0),754], [String.fromCharCode(116,114,101,101,99,111,100,101,114,95,52,95,53,52,0),470], [String.fromCharCode(102,95,52,54,95,106,114,101,118,100,99,116,0),746]]);
       let foundF: Map<any, any> = new Map([[String.fromCharCode(98,95,49,53,95,98,105,116,114,97,116,101,115,0),573], [String.fromCharCode(101,95,50,53,95,99,104,97,114,97,99,116,101,114,0),721]]);
          let whistleorangek: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,95,122,95,55,55,0),638], [String.fromCharCode(101,108,115,116,95,104,95,56,0),145]]);
          let modals = String.fromCharCode(115,112,108,105,110,101,95,105,95,49,54,0);
         routeru = new Map([[`${whistleorangek.size}`, foundF.size ^ 2]]);
         whistleorangek.set(modals, (String.fromCharCode(71,0) == modals ? modals.length : modals.length));
         bgvipxvodO.push(2);
         bgvipxvodO = [cornerkickP.length >> (Math.min(Math.abs(1), 5))];
          let popupU = String.fromCharCode(102,95,57,52,95,114,101,104,97,115,104,0);
          let middlesoundq = String.fromCharCode(122,95,56,48,95,102,111,114,103,111,116,0);
          let bangM = 1.0;
         membership6 = [bgvipxvodO.length];
         popupU = `${(middlesoundq == String.fromCharCode(111,0) ? parseInt(`${bangM}`) : middlesoundq.length)}`;
         bangM /= Math.max(parseFloat(`${parseInt(`${bangM}`) >> (Math.min(middlesoundq.length, 1))}`), 5);
      if ((foundF.size & membership6.length) < 4) {
         membership6 = [(cornerkickP == String.fromCharCode(113,0) ? cornerkickP.length : iconschedulev.length)];
      }
      iconstar2.set(brightnessF, brightnessF.length);
   }
       let iconclosewhitebg7 = 2.0;
       let chatroombackgroundM: Map<any, any> = new Map([[String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,97,95,51,56,0),String.fromCharCode(97,99,118,112,95,97,95,56,54,0)], [String.fromCharCode(109,111,118,101,95,109,95,52,49,0),String.fromCharCode(110,95,56,53,95,109,111,100,105,102,105,101,114,115,0)]]);
      let actionH = 6822408 >= chatroombackgroundM.size;
      do {
         chatroombackgroundM = new Map([[`${chatroombackgroundM.size}`, 3]]);
         if (actionH) {
            break;
         }
      } while (actionH && (3.11 > (2.30 - iconclosewhitebg7) || (parseInt(`${iconclosewhitebg7}`) - chatroombackgroundM.size) > 2));
         iconclosewhitebg7 += parseFloat(`${parseInt(`${iconclosewhitebg7}`) & 1}`);
         iconclosewhitebg7 *= parseFloat(`${2}`);
      for (let a = 0; a < 1; a++) {
         chatroombackgroundM = new Map([[`${chatroombackgroundM.size}`, parseInt(`${iconclosewhitebg7}`)]]);
      }
      if ((chatroombackgroundM.size * 5) > 5 || 3.60 > (2.18 / (Math.max(10, iconclosewhitebg7)))) {
          let skipa: Array<any> = [472, 16, 514];
          let notificationfillemptys = 3.0;
          let libflipperq = 5.0;
          let greenarrowup8 = String.fromCharCode(99,111,109,112,108,105,99,97,116,105,111,110,95,120,95,52,49,0);
          let liveshareU = 2.0;
         iconclosewhitebg7 -= parseFloat(`${skipa.length}`);
         skipa.push(3);
         notificationfillemptys /= Math.max(parseInt(`${notificationfillemptys}`) << (Math.min(3, Math.abs(3))), 3);
         libflipperq += parseFloat(`${greenarrowup8.length / (Math.max(2, 5))}`);
         greenarrowup8 = `${3 | parseInt(`${libflipperq}`)}`;
         liveshareU -= parseFloat(`${greenarrowup8.length >> (Math.min(2, Math.abs(parseInt(`${liveshareU}`))))}`);
      }
       let iconb: Map<any, any> = new Map([[String.fromCharCode(102,95,57,48,95,112,114,101,115,101,116,0),false ], [String.fromCharCode(103,95,48,95,118,97,108,105,100,97,116,105,110,103,0),true ], [String.fromCharCode(108,111,99,107,115,99,114,101,101,110,95,112,95,50,56,0),false ]]);
       let vipsport_: Map<any, any> = new Map([[String.fromCharCode(116,114,101,101,95,103,95,53,49,0),true ], [String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,55,95,51,48,0),false ]]);
      brightnessF += `${3 >> (Math.min(2, brightnessF.length))}`;
       let short_zx = true;
       let tickO = String.fromCharCode(101,95,57,53,95,109,101,114,103,101,0);
         short_zx = !short_zx;
      for (let w = 0; w < 2; w++) {
         tickO += `${tickO.length + 3}`;
      }
         tickO += "2";
         short_zx = tickO.length == 72;
      let android2 = 7470825 >= tickO.length;
      do {
         tickO = `${((short_zx ? 1 : 3) & tickO.length)}`;
         if (android2) {
            break;
         }
      } while (android2 && (!tickO.includes(`${short_zx}`)));
      for (let l = 0; l < 1; l++) {
         tickO = `${((short_zx ? 1 : 2) | tickO.length)}`;
      }
      brightnessF = `${(ewardedm == String.fromCharCode(71,0) ? ewardedm.length : brightnessF.length)}`;
       let interstitial2 = String.fromCharCode(115,104,111,116,95,120,95,49,53,0);
      if (4 < interstitial2.length) {
         interstitial2 += `${(interstitial2 == String.fromCharCode(105,0) ? interstitial2.length : interstitial2.length)}`;
      }
      while (interstitial2.endsWith(`${interstitial2.length}`)) {
         interstitial2 = "2";
         break;
      }
          let loadingspinnerY: Array<any> = [592, 173, 109];
          let middleN = String.fromCharCode(113,95,52,53,95,101,113,117,97,108,105,122,101,114,0);
         interstitial2 = "1";
         loadingspinnerY = [middleN.length];
         middleN += `${loadingspinnerY.length - 1}`;
      iconstar2 = new Map([[`${iconstar2.size}`, (String.fromCharCode(88,0) == interstitial2 ? interstitial2.length : iconstar2.size)]]);
   for (let o = 0; o < 3; o++) {
      skip3.set(`${link6}`, link6);
   }
      ewardedm += `${(ewardedm == String.fromCharCode(97,0) ? ewardedm.length : brightnessF.length)}`;
      iconstar2.set(`${link6}`, link6);
       let unfillF: Map<any, any> = new Map([[String.fromCharCode(108,111,115,115,121,95,104,95,55,50,0),118], [String.fromCharCode(105,95,57,53,95,101,120,112,105,114,97,116,105,111,110,115,0),131], [String.fromCharCode(112,95,49,95,115,101,114,105,102,0),892]]);
       let videocommono = String.fromCharCode(108,95,49,52,95,114,101,100,97,99,116,101,100,0);
       let episodeq = String.fromCharCode(109,95,56,54,95,115,117,98,104,101,97,100,101,114,0);
         videocommono += `${unfillF.size}`;
      while ((2 / (Math.max(10, unfillF.size))) >= 3) {
         unfillF.set(episodeq, episodeq.length ^ videocommono.length);
         break;
      }
      while (3 > (videocommono.length + 1) || (unfillF.size + videocommono.length) > 1) {
          let iconorientationy = 3;
          let ticko = String.fromCharCode(115,99,97,116,116,101,114,95,48,95,54,55,0);
          let dangerW = 3.0;
         unfillF.set(`${dangerW}`, 1 << (Math.min(3, Math.abs(parseInt(`${dangerW}`)))));
         iconorientationy %= Math.max(ticko.length, 3);
         ticko = `${iconorientationy / (Math.max(9, ticko.length))}`;
         break;
      }
          let runtime9 = String.fromCharCode(111,95,51,50,95,99,108,117,116,115,0);
          let strj = String.fromCharCode(98,95,54,51,95,115,99,114,101,101,110,0);
          let smallg: Map<any, any> = new Map([[String.fromCharCode(118,95,52,49,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0),false ], [String.fromCharCode(105,95,57,48,95,104,105,100,105,110,103,0),true ], [String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,118,95,49,50,0),false ]]);
         unfillF.set(episodeq, 1);
         runtime9 = `${strj.length & 1}`;
         strj += `${strj.length}`;
         smallg.set(`${runtime9}`, runtime9.length | 2);
      while ((unfillF.size % (Math.max(5, 1))) > 2 || 5 > (5 % (Math.max(5, unfillF.size)))) {
         episodeq = `${videocommono.length}`;
         break;
      }
      if (episodeq.length <= 5) {
         videocommono += `${videocommono.length}`;
      }
          let runtimeschedulerZ = 4.0;
         videocommono = `${episodeq.length}`;
         runtimeschedulerZ /= Math.max(1, parseInt(`${runtimeschedulerZ}`));
      if (episodeq.length == videocommono.length) {
         videocommono += `${1 - unfillF.size}`;
      }
       let profileinactiveN: Map<any, any> = new Map([[String.fromCharCode(119,95,49,49,95,109,111,118,101,100,0),187], [String.fromCharCode(104,119,117,112,108,111,97,100,95,114,95,56,48,0),358], [String.fromCharCode(99,108,111,115,101,112,95,121,95,51,56,0),275]]);
       let iconeditC: Map<any, any> = new Map([[String.fromCharCode(119,101,98,109,95,51,95,57,48,0),true ], [String.fromCharCode(107,95,53,50,95,102,114,101,113,0),false ]]);
      iconstar2 = new Map([[`${iconstar2.size}`, 3 >> (Math.min(3, Math.abs(unfillF.size)))]]);
   let matchesr = ewardedm == String.fromCharCode(55,95,112,51,111,97,0);
   do {
       let dropdownN = true;
       let popupX = String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,104,95,51,48,0);
       let disconnectedlogoJ: Array<any> = [483, 778];
      for (let h = 0; h < 3; h++) {
          let icondefaultthumbnail1 = String.fromCharCode(106,95,51,52,95,99,98,117,102,0);
          let arrowdownR: Array<any> = [753, 128, 169];
         disconnectedlogoJ.push((arrowdownR.length & (dropdownN ? 3 : 3)));
         icondefaultthumbnail1 = `${1 - icondefaultthumbnail1.length}`;
         arrowdownR = [3];
      }
          let reminderQ = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,104,95,53,49,0);
         popupX += "2";
         reminderQ = `${reminderQ.length}`;
          let expand0 = 5;
         disconnectedlogoJ = [1 ^ expand0];
      let xadsdkf = String.fromCharCode(114,56,115,115,115,0) == popupX;
      do {
         popupX = "3";
         if (xadsdkf) {
            break;
         }
      } while (xadsdkf && (5 <= (popupX.length | 4)));
      while ((popupX.length % 2) > 1 || 5 > (disconnectedlogoJ.length % 2)) {
         disconnectedlogoJ = [(popupX == String.fromCharCode(56,0) ? popupX.length : (dropdownN ? 5 : 2))];
         break;
      }
         popupX += `${(1 & (dropdownN ? 1 : 3))}`;
         disconnectedlogoJ = [disconnectedlogoJ.length];
      for (let k = 0; k < 2; k++) {
         dropdownN = 2 >= popupX.length;
      }
         popupX = `${((dropdownN ? 5 : 2) | 3)}`;
      ewardedm += `${3 * brightnessF.length}`;
      if (matchesr) {
         break;
      }
   } while ((1 == (4 * ewardedm.length)) && matchesr);
        this.#triggerCustomEvent('view', IIPhoneshare.FWeibo);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        this.#triggerUmengEvent(FSliderCenter.FFrame, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FFrame, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        this.#triggerCustomEvent('view', IIPhoneshare.FProfileinactiveQaag, {
            params: {
                desc_1: category,
            }
        });
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
       let mathL = 3;
    let subbasketballplayerd = true;
    let matchesa: Array<any> = [47, 684, 619];
    let ksadb = String.fromCharCode(113,95,56,51,95,99,112,111,115,0);
    let spinnerr = 4;
    let distw = String.fromCharCode(99,111,109,112,97,114,97,98,108,101,95,49,95,56,50,0);
    let largesoundm = 3.0;
    let iconfeedbacke = 2.0;
    let about_ = 1.0;
      largesoundm += spinnerr & matchesa.length;
   if (3 <= (mathL / 2)) {
       let cornerG = false;
       let sansM = String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,55,95,54,50,0);
      if (cornerG && 5 >= sansM.length) {
         cornerG = cornerG || sansM.length <= 81;
      }
      while (cornerG) {
          let basketballR = String.fromCharCode(109,95,50,50,95,118,97,114,116,105,109,101,0);
          let memberH = 5.0;
          let smallorangemanu = String.fromCharCode(110,111,110,108,105,110,101,97,114,95,106,95,55,0);
          let libcxxcomponents4 = String.fromCharCode(106,95,49,95,116,97,103,98,105,116,0);
         cornerG = smallorangemanu == String.fromCharCode(103,0);
         basketballR = `${(String.fromCharCode(109,0) == basketballR ? libcxxcomponents4.length : basketballR.length)}`;
         memberH *= (parseFloat(`${String.fromCharCode(104,0) == basketballR ? basketballR.length : parseInt(`${memberH}`)}`));
         smallorangemanu = "1";
         libcxxcomponents4 += `${parseInt(`${memberH}`) - libcxxcomponents4.length}`;
         break;
      }
       let room_: Map<any, any> = new Map([[String.fromCharCode(101,95,52,95,109,97,110,105,102,101,115,116,0),String.fromCharCode(120,95,57,49,95,100,117,112,108,105,99,97,116,101,0)], [String.fromCharCode(111,95,56,48,95,114,101,99,111,118,101,114,101,100,0),String.fromCharCode(115,115,105,109,118,95,97,95,49,52,0)]]);
         cornerG = (sansM.length | room_.size) <= 21;
         room_ = new Map([[sansM, (1 & (cornerG ? 4 : 3))]]);
       let z_positionH = 5.0;
       let fullscreenminw = 4.0;
      mathL |= 2;
   }
       let libimagepipelineb = String.fromCharCode(100,95,52,48,95,105,110,100,97,116,97,0);
       let uploadl = false;
       let shoot2 = String.fromCharCode(115,95,55,50,95,107,105,116,0);
      for (let o = 0; o < 2; o++) {
         shoot2 += `${(1 >> (Math.min(5, Math.abs((uploadl ? 1 : 2)))))}`;
      }
       let topon3: Array<any> = [252, 518, 897];
       let package_wo: Array<any> = [932, 951];
      if (libimagepipelineb.includes(`${uploadl}`)) {
         uploadl = !libimagepipelineb.includes(`${uploadl}`);
      }
      for (let x = 0; x < 1; x++) {
         libimagepipelineb = `${shoot2.length << (Math.min(libimagepipelineb.length, 1))}`;
      }
       let thumbnailx = 5.0;
      let maila = topon3.length <= 6688131;
      do {
         topon3 = [(2 | (uploadl ? 3 : 5))];
         if (maila) {
            break;
         }
      } while (maila && (topon3.length <= package_wo.length));
      if (!libimagepipelineb.includes(`${shoot2.length}`)) {
         shoot2 += `${((uploadl ? 4 : 1))}`;
      }
      if (package_wo.includes(topon3.length)) {
          let resendl = 3.0;
          let progressD = false;
          let completeu = true;
         topon3 = [package_wo.length];
         resendl += (parseFloat(`${parseInt(`${resendl}`) - (completeu ? 2 : 2)}`));
         progressD = !progressD || !completeu;
      }
      largesoundm -= 3 & matchesa.length;
      subbasketballplayerd = !subbasketballplayerd;
       let qaagw = String.fromCharCode(109,97,112,112,101,114,95,119,95,55,56,0);
         qaagw += `${1 - qaagw.length}`;
      if (qaagw == String.fromCharCode(108,0)) {
         qaagw += "2";
      }
         qaagw += `${qaagw.length << (Math.min(2, qaagw.length))}`;
      ksadb += `${ksadb.length ^ parseInt(`${largesoundm}`)}`;
       let agreementq = 5;
      let libavdevice6 = 7789619 >= agreementq;
      do {
         agreementq |= agreementq + 1;
         if (libavdevice6) {
            break;
         }
      } while ((agreementq >= agreementq) && libavdevice6);
      while (3 == (agreementq | 4)) {
         agreementq >>= Math.min(Math.abs(agreementq * agreementq), 2);
         break;
      }
         agreementq |= agreementq;
      mathL %= Math.max(1 << (Math.min(2, distw.length)), 5);
       let libfbG = String.fromCharCode(110,95,50,48,95,101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,0);
       let edit8 = String.fromCharCode(103,101,110,101,114,105,99,95,49,95,53,52,0);
       let statsnomoredataR = 4;
         edit8 += "2";
         edit8 += `${(libfbG == String.fromCharCode(78,0) ? libfbG.length : edit8.length)}`;
         libfbG = `${1 >> (Math.min(3, edit8.length))}`;
          let i_unlockB: Map<any, any> = new Map([[String.fromCharCode(105,95,49,56,95,120,102,111,114,109,101,100,0),734], [String.fromCharCode(109,105,115,109,97,116,99,104,101,115,95,121,95,53,0),530], [String.fromCharCode(111,95,49,51,95,99,102,102,116,105,0),205]]);
          let inouttargetyellowd = 4.0;
         statsnomoredataR <<= Math.min(1, Math.abs((String.fromCharCode(57,0) == libfbG ? libfbG.length : statsnomoredataR)));
         i_unlockB = new Map([[`${i_unlockB.size}`, parseInt(`${inouttargetyellowd}`)]]);
         inouttargetyellowd -= parseFloat(`${1}`);
      for (let v = 0; v < 3; v++) {
          let inewsc = String.fromCharCode(101,95,56,49,95,112,114,111,98,108,101,109,115,0);
          let animationsI = 4.0;
          let runtimeschedulerG = true;
          let predictionN = 4;
          let delegate_a7k: Array<any> = [901, 681];
         statsnomoredataR >>= Math.min(5, Math.abs(statsnomoredataR / 3));
         inewsc = `${inewsc.length / (Math.max(1, 6))}`;
         animationsI *= 3;
         runtimeschedulerG = !runtimeschedulerG;
         predictionN >>= Math.min(2, Math.abs(1));
         delegate_a7k = [((runtimeschedulerG ? 2 : 3) % (Math.max(1, parseInt(`${animationsI}`))))];
      }
      if (!edit8.startsWith(`${statsnomoredataR}`)) {
         edit8 = `${edit8.length % 1}`;
      }
         edit8 += `${edit8.length}`;
      if (statsnomoredataR >= edit8.length) {
         edit8 = `${libfbG.length >> (Math.min(Math.abs(1), 3))}`;
      }
         edit8 += `${3 ^ libfbG.length}`;
      matchesa = [3 * parseInt(`${largesoundm}`)];
   while (2 < (1 + mathL) || 3 < (mathL + 1)) {
      matchesa = [3 * spinnerr];
      break;
   }

        this.#triggerUmengEvent(FSliderCenter.FList);

      mathL *= 2;
      mathL <<= Math.min(5, Math.abs(matchesa.length >> (Math.min(Math.abs(3), 3))));
      ksadb = `${parseInt(`${iconfeedbacke}`) & 1}`;
   for (let j = 0; j < 1; j++) {
       let robotol: Map<any, any> = new Map([[String.fromCharCode(120,95,57,50,95,101,118,101,114,121,119,104,101,114,101,0),820], [String.fromCharCode(112,103,115,122,95,112,95,54,54,0),968], [String.fromCharCode(101,95,51,57,95,109,101,100,105,97,110,0),740]]);
       let searchbar_: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,97,99,116,105,110,103,95,119,95,50,54,0),false ], [String.fromCharCode(114,95,53,55,95,109,97,115,116,101,114,105,110,103,0),false ]]);
       let whitebell9 = String.fromCharCode(105,95,56,50,95,103,101,116,97,115,115,111,99,105,100,0);
       let phoneshareD = 2;
       let homeinactive4 = String.fromCharCode(115,101,116,99,116,120,95,101,95,49,55,0);
      while ((homeinactive4.length ^ searchbar_.size) == 1 || (searchbar_.size ^ homeinactive4.length) == 1) {
         homeinactive4 += `${whitebell9.length * phoneshareD}`;
         break;
      }
         homeinactive4 = "2";
          let icondownimgG = String.fromCharCode(121,95,54,48,95,99,97,114,114,105,97,103,101,0);
         phoneshareD += whitebell9.length;
         icondownimgG = `${icondownimgG.length << (Math.min(icondownimgG.length, 1))}`;
      if (5 >= (searchbar_.size >> (Math.min(whitebell9.length, 4))) || 5 >= (whitebell9.length >> (Math.min(3, Math.abs(searchbar_.size))))) {
         whitebell9 += `${3 + searchbar_.size}`;
      }
      let sportc = phoneshareD >= 7851129;
      do {
          let filedb = String.fromCharCode(102,95,54,52,95,115,112,114,105,110,103,0);
         phoneshareD /= Math.max(5, whitebell9.length | 2);
         filedb = `${filedb.length << (Math.min(Math.abs(2), 1))}`;
         if (sportc) {
            break;
         }
      } while ((2 > (phoneshareD / 4)) && sportc);
      for (let x = 0; x < 1; x++) {
          let yellowscoreballq: Array<any> = [472, 272];
          let pointz = String.fromCharCode(116,95,54,56,95,114,101,112,108,97,121,101,100,0);
          let libswscaleY = String.fromCharCode(115,104,97,112,101,115,95,110,95,54,0);
         searchbar_.set(homeinactive4, whitebell9.length - homeinactive4.length);
         yellowscoreballq.push(yellowscoreballq.length);
         pointz += `${yellowscoreballq.length}`;
         libswscaleY += `${yellowscoreballq.length}`;
      }
      if (whitebell9.length <= 5) {
         searchbar_.set(`${phoneshareD}`, homeinactive4.length >> (Math.min(Math.abs(3), 2)));
      }
      while ((1 * phoneshareD) >= 1 && 1 >= (whitebell9.length * phoneshareD)) {
         phoneshareD *= robotol.size;
         break;
      }
       let playercommona = String.fromCharCode(109,95,50,50,95,112,111,115,105,116,105,111,110,105,110,103,0);
       let templateprocessora = String.fromCharCode(100,95,54,95,100,105,108,97,116,101,0);
         searchbar_.set(`${whitebell9}`, whitebell9.length - 1);
      for (let q = 0; q < 3; q++) {
          let dialog3 = String.fromCharCode(116,97,112,116,95,105,95,57,53,0);
          let photoQ: Array<any> = [882, 15];
          let subinl = 2.0;
          let d_hashG: Array<any> = [847, 626, 959];
          let brightnessR = String.fromCharCode(101,95,53,48,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0);
         robotol.set(`${whitebell9}`, 3 + searchbar_.size);
         dialog3 = `${dialog3.length}`;
         photoQ = [d_hashG.length - brightnessR.length];
         subinl *= photoQ.length;
         d_hashG = [(String.fromCharCode(122,0) == brightnessR ? d_hashG.length : brightnessR.length)];
      }
          let filedG = String.fromCharCode(116,112,105,100,95,108,95,54,57,0);
          let backwhiter = String.fromCharCode(99,95,52,54,95,101,108,108,105,112,116,105,99,0);
          let pagination2 = String.fromCharCode(110,95,54,53,95,117,110,97,117,116,104,111,114,105,122,101,100,0);
         homeinactive4 = `${2 & phoneshareD}`;
         filedG = `${1 + filedG.length}`;
         backwhiter += `${pagination2.length / 3}`;
         pagination2 = `${backwhiter.length}`;
          let backgroundc = String.fromCharCode(117,95,54,48,95,104,97,100,100,0);
          let iconrefreshr: Array<any> = [75, 871, 450];
         searchbar_ = new Map([[`${phoneshareD}`, whitebell9.length & 2]]);
         backgroundc += "3";
         iconrefreshr.push(backgroundc.length << (Math.min(5, iconrefreshr.length)));
      for (let p = 0; p < 1; p++) {
         templateprocessora += `${searchbar_.size}`;
      }
         playercommona += "3";
      matchesa.push(searchbar_.size);
   }
      iconfeedbacke /= Math.max(3, mathL ^ 1);
   if (ksadb.length == 2) {
       let libjsijniprofilerx = true;
       let iconclosewhitebgn = 2.0;
      for (let m = 0; m < 3; m++) {
         libjsijniprofilerx = !libjsijniprofilerx;
      }
      for (let x = 0; x < 1; x++) {
         libjsijniprofilerx = iconclosewhitebgn < 23.75;
      }
      for (let c = 0; c < 2; c++) {
          let turndownQ: Array<any> = [41, 463, 286];
          let sortF = String.fromCharCode(109,95,50,50,95,115,116,100,0);
          let sliderG: Array<any> = [161, 698];
         libjsijniprofilerx = !libjsijniprofilerx;
         turndownQ = [turndownQ.length / (Math.max(6, sortF.length))];
         sortF = "1";
         sliderG.push(turndownQ.length ^ 1);
      }
       let backicon7 = 1;
       let libhermes8 = 4;
      for (let p = 0; p < 3; p++) {
         iconclosewhitebgn *= (parseFloat(`${parseInt(`${iconclosewhitebgn}`) & (libjsijniprofilerx ? 4 : 1)}`));
      }
          let detail4 = false;
          let reactnativejsM = 4.0;
         libhermes8 >>= Math.min(Math.abs(((detail4 ? 3 : 3) * (libjsijniprofilerx ? 5 : 2))), 3);
         detail4 = reactnativejsM >= 2.63 || reactnativejsM >= 2.63;
      ksadb = `${parseInt(`${iconclosewhitebgn}`)}`;
   }
   while ((mathL + ksadb.length) < 3) {
      ksadb += `${3 & matchesa.length}`;
      break;
   }
   let baiduO = matchesa.length >= 8947428;
   do {
      matchesa.push(((subbasketballplayerd ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${iconfeedbacke}`)), 4))));
      if (baiduO) {
         break;
      }
   } while (((ksadb.length % 2) >= 2 && 2 >= (matchesa.length % 2)) && baiduO);
        this.#triggerFirebaseCustomEvent(FSliderCenter.FList);

      iconfeedbacke -= 1;
   for (let i = 0; i < 2; i++) {
      matchesa = [3 << (Math.min(4, matchesa.length))];
   }
   if ((spinnerr % (Math.max(2, ksadb.length))) < 4 && (4 % (Math.max(6, ksadb.length))) < 4) {
      ksadb = `${parseInt(`${largesoundm}`) ^ distw.length}`;
   }
   while (3 > (matchesa.length ^ 5) && 3 > (5 ^ matchesa.length)) {
      matchesa.push(((subbasketballplayerd ? 1 : 5)));
      break;
   }
   let iconeye7 = spinnerr <= 5905922;
   do {
      spinnerr /= Math.max(spinnerr, 4);
      if (iconeye7) {
         break;
      }
   } while (iconeye7 && (1.50 == (largesoundm - 5.85) || (5.85 - largesoundm) == 3.5));
      spinnerr &= 1;
   while (1.56 < (1.73 + largesoundm) || (1.73 + largesoundm) < 2.77) {
      iconfeedbacke /= Math.max(parseInt(`${largesoundm}`), 1);
      break;
   }
   if (!subbasketballplayerd) {
      about_ -= parseFloat(`${distw.length ^ mathL}`);
   }
        this.#triggerCustomEvent('view', IIPhoneshare.FMatchdetailbgCornershoot);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        this.#triggerUmengEvent(FSliderCenter.FDownloaded, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FDownloaded, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        this.#triggerCustomEvent('click', IIPhoneshare.FMatchdetailbgCornershoot, {
            params: {
                desc_1: category,
            }
        });
    }


    
    static playlistViewsAnalytics = () => {
       let gdtadvu = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,95,112,95,56,0);
    let nnewinterstitial8 = String.fromCharCode(114,111,119,107,101,121,95,97,95,52,49,0);
    let hiadu = String.fromCharCode(114,95,52,48,95,109,98,117,102,99,104,97,105,110,0);
    let carousel2 = String.fromCharCode(115,116,97,114,116,115,95,50,95,53,53,0);
    let libimagepipelineL = 0;
    let saveQ: Array<any> = [String.fromCharCode(112,111,105,110,116,115,95,115,95,57,52,0), String.fromCharCode(116,95,53,52,95,97,108,116,101,114,97,98,108,101,0)];
    let watchb = String.fromCharCode(111,95,51,52,95,119,97,108,107,116,104,114,111,117,103,104,0);
    let uploadR: Map<any, any> = new Map([[String.fromCharCode(115,95,55,56,95,98,97,99,107,111,102,102,0),String.fromCharCode(98,109,111,100,101,95,120,95,55,49,0)], [String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,95,51,95,53,49,0),String.fromCharCode(102,112,101,108,95,120,95,49,54,0)]]);
    let attributedstringE = String.fromCharCode(102,95,51,48,0);
    let sentryN = String.fromCharCode(105,110,115,101,99,95,109,95,54,0);
    let pauseK: Map<any, any> = new Map([[String.fromCharCode(106,95,52,55,95,102,111,114,101,118,101,114,0),594], [String.fromCharCode(111,95,55,49,95,115,117,99,99,101,115,115,99,98,0),878], [String.fromCharCode(97,95,57,51,95,98,121,116,101,111,117,116,0),728]]);
    let field6 = false;
    let eighteen5 = String.fromCharCode(106,95,51,54,95,108,97,116,109,0);
    let borderless0 = false;
    let release_fz = 4.0;
    let overa = String.fromCharCode(111,95,51,50,95,114,101,117,112,108,111,97,100,0);
      attributedstringE += `${watchb.length}`;
   let teamG = carousel2 == String.fromCharCode(122,110,54,0);
   do {
      carousel2 += `${carousel2.length}`;
      if (teamG) {
         break;
      }
   } while (teamG && (gdtadvu.length < 3));
   if ((nnewinterstitial8.length << (Math.min(Math.abs(2), 2))) <= 1 && 2 <= (2 << (Math.min(1, nnewinterstitial8.length)))) {
       let giftn = String.fromCharCode(99,111,108,111,117,114,95,117,95,53,52,0);
      let smallorangemanU = giftn == String.fromCharCode(54,108,95,53,100,55,117,98,0);
      do {
          let orientationG = 2.0;
          let emojihearth = String.fromCharCode(106,95,53,53,95,114,117,110,116,105,109,101,0);
          let turnW = false;
         giftn += `${(String.fromCharCode(85,0) == giftn ? parseInt(`${orientationG}`) : giftn.length)}`;
         orientationG *= parseFloat(`${2}`);
         emojihearth += "3";
         if (smallorangemanU) {
            break;
         }
      } while (smallorangemanU && (giftn.length == giftn.length));
         giftn += `${(String.fromCharCode(78,0) == giftn ? giftn.length : giftn.length)}`;
      if (2 > giftn.length) {
          let androids = 1.0;
         giftn = `${2 % (Math.max(6, parseInt(`${androids}`)))}`;
      }
      nnewinterstitial8 = `${2 ^ nnewinterstitial8.length}`;
   }
   for (let p = 0; p < 3; p++) {
      attributedstringE += `${nnewinterstitial8.length % 2}`;
   }
   for (let m = 0; m < 2; m++) {
       let iconnointernet1 = false;
       let eventq = String.fromCharCode(112,117,98,101,120,112,95,51,95,57,53,0);
       let predictionbannersharedE = 4;
       let moviese = String.fromCharCode(112,95,51,50,95,99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0);
       let episodet: Map<any, any> = new Map([[String.fromCharCode(117,108,112,102,101,99,95,116,95,50,55,0),606], [String.fromCharCode(105,95,55,95,104,121,115,116,101,114,101,115,105,115,0),637]]);
         episodet.set(`${eventq}`, episodet.size);
      let screen8 = moviese == String.fromCharCode(112,51,99,115,108,53,119,116,117,52,0);
      do {
         moviese += `${3 % (Math.max(3, moviese.length))}`;
         if (screen8) {
            break;
         }
      } while (screen8 && ((predictionbannersharedE | moviese.length) < 3 && (3 | moviese.length) < 1));
         predictionbannersharedE %= Math.max(2, moviese.length);
      if (5 >= episodet.size) {
         moviese += `${predictionbannersharedE}`;
      }
          let rncoreF = String.fromCharCode(109,120,112,101,103,95,118,95,49,48,0);
          let giftY = String.fromCharCode(114,101,100,117,99,101,100,95,119,95,49,48,48,0);
         eventq += `${moviese.length / (Math.max(2, 9))}`;
         rncoreF = `${giftY.length}`;
         giftY = `${giftY.length - rncoreF.length}`;
       let bingR = 3.0;
       let injury2 = 4.0;
         moviese = `${eventq.length}`;
       let inactiveX = String.fromCharCode(100,95,51,51,0);
       let saveN = String.fromCharCode(112,111,115,116,101,114,115,95,111,95,51,56,0);
          let typesF = 4.0;
         moviese += `${parseInt(`${typesF}`) | saveN.length}`;
         episodet = new Map([[`${bingR}`, parseInt(`${bingR}`) >> (Math.min(2, Math.abs(1)))]]);
         injury2 /= Math.max(5, parseFloat(`${3 ^ parseInt(`${bingR}`)}`));
       let defaultfootballbgi: Array<any> = [742, 996, 407];
          let description_8T = true;
         moviese += `${moviese.length}`;
         description_8T = !description_8T;
      for (let b = 0; b < 1; b++) {
         episodet = new Map([[`${bingR}`, parseInt(`${injury2}`)]]);
      }
          let defaultroombgR = String.fromCharCode(117,95,54,95,99,108,101,97,114,115,0);
         predictionbannersharedE ^= 2 ^ parseInt(`${injury2}`);
         defaultroombgR = `${defaultroombgR.length >> (Math.min(defaultroombgR.length, 2))}`;
      uploadR.set(`${field6}`, 3);
      iconnointernet1 = !iconnointernet1 && !iconnointernet1;
   }
   if (gdtadvu.endsWith(`${uploadR.size}`)) {
       let fulll: Map<any, any> = new Map([[String.fromCharCode(99,95,49,53,95,98,97,103,0),868], [String.fromCharCode(109,97,121,98,101,95,103,95,54,56,0),178]]);
       let checkbox8 = 3.0;
       let downloaderj = String.fromCharCode(104,111,114,105,103,95,118,95,50,0);
       let path0 = true;
       let logouserP = String.fromCharCode(99,111,114,114,101,108,97,116,101,95,114,95,50,55,0);
      for (let a = 0; a < 3; a++) {
         fulll.set(`${checkbox8}`, (logouserP == String.fromCharCode(48,0) ? parseInt(`${checkbox8}`) : logouserP.length));
      }
      while (!path0) {
          let benefit1: Map<any, any> = new Map([[String.fromCharCode(98,108,111,98,95,54,95,55,49,0),true ], [String.fromCharCode(98,95,55,51,95,114,101,102,114,101,115,104,0),true ], [String.fromCharCode(101,100,105,97,95,122,95,57,52,0),false ]]);
          let libavcodect = String.fromCharCode(109,95,57,48,95,100,105,118,105,100,101,0);
          let details1 = true;
         path0 = fulll.size == 16 && details1;
         benefit1 = new Map([[`${benefit1.size}`, libavcodect.length]]);
         libavcodect += `${2 * benefit1.size}`;
         details1 = String.fromCharCode(97,0) == libavcodect || benefit1.size >= 63;
         break;
      }
          let injuryr = 4.0;
         checkbox8 -= parseFloat(`${logouserP.length}`);
         injuryr /= Math.max(3 & parseInt(`${injuryr}`), 5);
      for (let i = 0; i < 1; i++) {
         fulll.set(logouserP, ((path0 ? 4 : 4)));
      }
      while (1 >= downloaderj.length) {
         downloaderj += `${(logouserP == String.fromCharCode(68,0) ? logouserP.length : parseInt(`${checkbox8}`))}`;
         break;
      }
       let launcherg = true;
         fulll.set(logouserP, ((launcherg ? 5 : 1)));
          let sentryw = String.fromCharCode(97,97,110,100,99,116,116,97,98,95,98,95,56,51,0);
         checkbox8 += (parseFloat(`${downloaderj == String.fromCharCode(77,0) ? downloaderj.length : parseInt(`${checkbox8}`)}`));
         sentryw = `${1 % (Math.max(3, sentryw.length))}`;
         checkbox8 *= (parseFloat(`${(launcherg ? 5 : 2)}`));
       let philippinesZ = 4.0;
      while (logouserP != downloaderj) {
         downloaderj += `${(parseInt(`${philippinesZ}`) & (launcherg ? 1 : 4))}`;
         break;
      }
      if (4 == (fulll.size + parseInt(`${checkbox8}`)) && (fulll.size + parseInt(`${checkbox8}`)) == 4) {
         checkbox8 += parseFloat(`${downloaderj.length | 2}`);
      }
         logouserP = `${logouserP.length / 3}`;
          let analyticr = 0.0;
          let iconstarL = 3;
         logouserP += `${parseInt(`${checkbox8}`)}`;
         analyticr *= iconstarL * parseInt(`${analyticr}`);
         iconstarL += iconstarL;
      while (5.42 == (philippinesZ - 2.42) && philippinesZ == 2.42) {
         philippinesZ *= parseFloat(`${logouserP.length >> (Math.min(Math.abs(2), 1))}`);
         break;
      }
      gdtadvu += `${logouserP.length}`;
   }
   let orangen = libimagepipelineL <= 8406915;
   do {
       let fulle: Map<any, any> = new Map([[String.fromCharCode(122,95,57,49,95,97,110,97,108,121,122,101,114,0),842], [String.fromCharCode(99,111,108,111,114,115,112,97,99,101,95,108,95,55,50,0),181]]);
       let utilsk = 5.0;
       let whistleV = true;
       let ksad4: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,105,101,115,95,120,95,52,53,0),false ], [String.fromCharCode(120,114,101,115,95,49,95,55,50,0),false ], [String.fromCharCode(109,95,57,54,95,102,97,99,101,98,111,111,107,0),true ]]);
      let taiwanr = 8062681 >= fulle.size;
      do {
         fulle = new Map([[`${fulle.size}`, fulle.size ^ ksad4.size]]);
         if (taiwanr) {
            break;
         }
      } while (taiwanr && (utilsk >= 1.5));
         fulle.set(`${whistleV}`, ((whistleV ? 5 : 3) >> (Math.min(Math.abs(parseInt(`${utilsk}`)), 5))));
      for (let n = 0; n < 3; n++) {
          let contextC = String.fromCharCode(112,95,49,95,115,101,99,111,110,100,115,0);
          let backwarde: Map<any, any> = new Map([[String.fromCharCode(110,95,51,50,95,98,98,111,120,0),279], [String.fromCharCode(121,95,51,95,111,112,101,110,115,115,108,0),925], [String.fromCharCode(110,95,51,55,95,98,111,111,107,109,97,114,107,115,0),977]]);
          let debug4 = String.fromCharCode(106,95,51,57,95,99,111,110,116,114,97,105,110,116,115,0);
          let awayteamfieldW = 0.0;
          let toponp = 5;
         utilsk *= (debug4 == String.fromCharCode(116,0) ? debug4.length : backwarde.size);
         contextC += "3";
         backwarde = new Map([[contextC, parseInt(`${awayteamfieldW}`)]]);
         awayteamfieldW /= Math.max(3, parseFloat(`${contextC.length | toponp}`));
         toponp += parseInt(`${awayteamfieldW}`) | 1;
      }
       let basketballicon0 = String.fromCharCode(97,102,102,105,110,101,95,102,95,53,50,0);
       let bangL = String.fromCharCode(104,117,102,102,109,97,110,95,113,95,57,52,0);
         whistleV = basketballicon0.length < ksad4.size;
          let controlw = 3.0;
         basketballicon0 += `${parseInt(`${controlw}`)}`;
         basketballicon0 += `${fulle.size}`;
      for (let j = 0; j < 1; j++) {
          let stylesA: Map<any, any> = new Map([[String.fromCharCode(103,95,54,49,95,115,109,106,112,101,103,0),false ], [String.fromCharCode(112,95,54,50,95,100,114,111,112,120,0),true ], [String.fromCharCode(107,95,51,53,95,112,114,101,118,105,101,119,115,0),true ]]);
          let penaltyshootnogoal3 = String.fromCharCode(112,117,116,95,57,95,49,50,0);
         utilsk += bangL.length;
         stylesA = new Map([[`${stylesA.size}`, penaltyshootnogoal3.length]]);
         penaltyshootnogoal3 += `${penaltyshootnogoal3.length % 2}`;
      }
         ksad4 = new Map([[`${ksad4.size}`, 3]]);
         utilsk -= 1;
      if (Array.from(ksad4.values()).includes(fulle.size)) {
         ksad4.set(`${utilsk}`, fulle.size);
      }
         utilsk *= 2;
      libimagepipelineL /= Math.max((String.fromCharCode(106,0) == sentryN ? sentryN.length : (whistleV ? 4 : 5)), 2);
      if (orangen) {
         break;
      }
   } while (orangen && (uploadR.get(`${libimagepipelineL}`) == null));
       let largesoundx: Map<any, any> = new Map([[String.fromCharCode(106,109,108,105,115,116,95,121,95,55,54,0),true ], [String.fromCharCode(99,111,110,102,101,116,116,105,95,53,95,50,51,0),false ]]);
       let predictionarrow3 = String.fromCharCode(100,95,54,48,95,116,106,101,120,97,109,112,108,101,116,101,115,116,0);
         largesoundx = new Map([[`${largesoundx.size}`, predictionarrow3.length]]);
          let iconfeedbackw = String.fromCharCode(116,114,101,97,116,95,52,95,57,49,0);
          let mbridgeL = String.fromCharCode(113,95,52,52,95,97,108,116,101,114,110,97,116,105,118,101,0);
         predictionarrow3 += `${mbridgeL.length}`;
         iconfeedbackw += `${iconfeedbackw.length}`;
         mbridgeL = `${iconfeedbackw.length}`;
      if (1 >= (2 + largesoundx.size)) {
         largesoundx = new Map([[`${largesoundx.size}`, predictionarrow3.length]]);
      }
         largesoundx.set(`${predictionarrow3}`, largesoundx.size & predictionarrow3.length);
      if ((largesoundx.size / 2) <= 2) {
          let iconnewsshare8: Array<any> = [640, 598, 780];
          let project7 = String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,101,95,50,52,0);
          let routerd = String.fromCharCode(103,95,55,95,115,104,97,114,101,103,114,111,117,112,0);
          let modal3 = String.fromCharCode(97,112,102,115,95,110,95,49,48,48,0);
          let friendsi = 0.0;
         largesoundx = new Map([[project7, 3 + routerd.length]]);
         iconnewsshare8 = [3];
         project7 += `${parseInt(`${friendsi}`)}`;
         routerd = `${modal3.length}`;
         modal3 += `${iconnewsshare8.length << (Math.min(modal3.length, 2))}`;
         friendsi *= parseFloat(`${parseInt(`${friendsi}`) % (Math.max(iconnewsshare8.length, 1))}`);
      }
         largesoundx = new Map([[`${largesoundx.size}`, 1]]);
      libimagepipelineL %= Math.max(((field6 ? 4 : 4) >> (Math.min(nnewinterstitial8.length, 1))), 3);
   let selectJ = hiadu == String.fromCharCode(110,48,122,120,105,50,53,101,0);
   do {
       let mapbuffer1 = 1.0;
       let oranged = String.fromCharCode(99,95,52,57,95,102,97,115,116,109,97,116,104,0);
       let nativemoduled = 2.0;
       let t_image0 = 3.0;
          let filtera = String.fromCharCode(98,108,111,119,102,105,115,104,95,108,95,51,50,0);
         t_image0 += 3;
         filtera += `${filtera.length}`;
          let iconpipshrinko = String.fromCharCode(116,95,50,49,95,99,98,114,116,0);
         oranged += `${parseInt(`${t_image0}`) / (Math.max(1, 9))}`;
         iconpipshrinko += `${iconpipshrinko.length ^ iconpipshrinko.length}`;
      if (3.58 > (nativemoduled / (Math.max(1.25, 7)))) {
          let stationc = 4.0;
          let overlay_ = String.fromCharCode(107,105,99,107,101,100,95,100,95,51,57,0);
          let redcirclebgr: Array<any> = [488, 650];
         nativemoduled *= parseInt(`${stationc}`);
         overlay_ = `${overlay_.length + redcirclebgr.length}`;
         redcirclebgr = [overlay_.length];
      }
         oranged += `${oranged.length / (Math.max(3, 6))}`;
      while (4 <= (oranged.length ^ 2)) {
          let utilsb = 5.0;
          let mbbannerx: Array<any> = [986, 473];
          let nativeexl = String.fromCharCode(109,95,55,56,95,114,101,97,100,105,110,0);
          let launcherT = String.fromCharCode(102,95,57,53,95,97,99,116,117,97,108,108,121,0);
          let videojsi: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,53,95,51,51,0),String.fromCharCode(122,95,49,54,95,105,100,101,110,116,105,102,101,114,0)], [String.fromCharCode(119,95,51,48,95,114,101,113,117,105,114,101,100,0),String.fromCharCode(101,120,105,102,95,114,95,51,0)]]);
         oranged = `${nativeexl.length}`;
         utilsb += parseFloat(`${launcherT.length / 2}`);
         mbbannerx.push(parseInt(`${utilsb}`));
         nativeexl = `${(launcherT == String.fromCharCode(52,0) ? videojsi.size : launcherT.length)}`;
         videojsi.set(`${utilsb}`, 2 / (Math.max(parseInt(`${utilsb}`), 5)));
         break;
      }
      hiadu = `${oranged.length}`;
      mapbuffer1 -= parseFloat(`${parseInt(`${mapbuffer1}`)}`);
      if (selectJ) {
         break;
      }
   } while ((gdtadvu == String.fromCharCode(104,0) && hiadu.length < 1) && selectJ);
       let penaltyshootnogoal_ = 3;
      let imagewatchliveR = 9333410 <= penaltyshootnogoal_;
      do {
         penaltyshootnogoal_ -= 3 | penaltyshootnogoal_;
         if (imagewatchliveR) {
            break;
         }
      } while ((4 <= (penaltyshootnogoal_ - penaltyshootnogoal_)) && imagewatchliveR);
      let librrc3 = 7802215 <= penaltyshootnogoal_;
      do {
          let successp = String.fromCharCode(114,116,108,95,52,95,49,55,0);
          let giftbuttons = String.fromCharCode(114,95,50,48,95,115,97,105,122,0);
          let nbatrophyR = String.fromCharCode(110,95,57,56,95,109,112,111,115,0);
          let flyer8 = String.fromCharCode(107,95,53,95,104,111,117,114,115,0);
          let modelsE = 2.0;
         penaltyshootnogoal_ %= Math.max(flyer8.length, 5);
         successp = `${nbatrophyR.length ^ parseInt(`${modelsE}`)}`;
         giftbuttons = `${parseInt(`${modelsE}`)}`;
         nbatrophyR += "2";
         flyer8 += "3";
         if (librrc3) {
            break;
         }
      } while ((4 > penaltyshootnogoal_) && librrc3);
         penaltyshootnogoal_ -= 1 >> (Math.min(2, Math.abs(penaltyshootnogoal_)));
      nnewinterstitial8 = `${saveQ.length}`;
       let showp = true;
       let qaagF = String.fromCharCode(115,112,105,108,108,95,105,95,53,56,0);
      while (2 > qaagF.length || showp) {
         qaagF = `${1 - qaagF.length}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         showp = qaagF.length < 65;
      }
      libimagepipelineL |= 1;
       let teamdetailsbg0 = String.fromCharCode(111,119,110,101,114,115,95,111,95,57,48,0);
       let defaultlogo9 = String.fromCharCode(120,95,54,95,118,105,115,105,116,0);
      while (teamdetailsbg0.length < 5) {
         defaultlogo9 = `${3 + teamdetailsbg0.length}`;
         break;
      }
      if (teamdetailsbg0 != String.fromCharCode(52,0) && defaultlogo9 == String.fromCharCode(118,0)) {
         teamdetailsbg0 = `${3 & defaultlogo9.length}`;
      }
         teamdetailsbg0 += `${teamdetailsbg0.length - 2}`;
      while (defaultlogo9.length >= teamdetailsbg0.length) {
         defaultlogo9 = `${2 ^ teamdetailsbg0.length}`;
         break;
      }
      while (teamdetailsbg0 == defaultlogo9) {
          let iconcalendarS = true;
          let foundW = 5.0;
          let countryL = String.fromCharCode(101,112,105,99,95,52,95,57,51,0);
          let zhengpianC = 2.0;
          let favorite5 = 4;
         defaultlogo9 += `${(parseInt(`${zhengpianC}`) * (iconcalendarS ? 5 : 4))}`;
         iconcalendarS = (countryL.length / (Math.max(8, parseInt(`${foundW}`)))) == 76;
         foundW *= parseFloat(`${3 << (Math.min(5, Math.abs(parseInt(`${foundW}`))))}`);
         countryL = `${(countryL == String.fromCharCode(72,0) ? parseInt(`${foundW}`) : countryL.length)}`;
         zhengpianC /= Math.max(1, favorite5 << (Math.min(countryL.length, 3)));
         favorite5 %= Math.max(favorite5, 2);
         break;
      }
         teamdetailsbg0 += `${defaultlogo9.length}`;
      libimagepipelineL += watchb.length << (Math.min(5, hiadu.length));
   while (carousel2 != String.fromCharCode(69,0)) {
      hiadu = `${libimagepipelineL}`;
      break;
   }

        this.#triggerUmengEvent(FSliderCenter.FDefaultlogoX);

      field6 = attributedstringE.length == 49;
      sentryN += `${2 % (Math.max(10, watchb.length))}`;
      saveQ.push(libimagepipelineL);
   if (!saveQ.includes(libimagepipelineL)) {
      saveQ.push(carousel2.length);
   }
       let predictionZ = 4.0;
       let flipper9 = 3.0;
       let typingH: Array<any> = [169, 158, 71];
       let iconcalendarM = String.fromCharCode(120,95,50,51,95,102,111,111,116,101,114,0);
          let backiconmaskP = 5;
         iconcalendarM += `${parseInt(`${predictionZ}`) / (Math.max(typingH.length, 1))}`;
         backiconmaskP += 2 - backiconmaskP;
      if (3 > (iconcalendarM.length ^ typingH.length) && (3 ^ iconcalendarM.length) > 4) {
         iconcalendarM = `${parseInt(`${flipper9}`) % (Math.max(2, typingH.length))}`;
      }
          let circleu: Map<any, any> = new Map([[String.fromCharCode(116,95,54,48,95,113,111,115,0),191], [String.fromCharCode(117,121,118,121,95,105,95,57,56,0),742], [String.fromCharCode(115,97,110,115,95,115,95,50,53,0),731]]);
          let aboutI: Map<any, any> = new Map([[String.fromCharCode(116,111,114,103,98,95,48,95,57,52,0),String.fromCharCode(116,95,52,49,95,104,101,120,98,115,0)], [String.fromCharCode(98,97,110,100,95,56,95,57,49,0),String.fromCharCode(122,95,50,55,95,110,97,116,105,111,110,97,108,105,116,121,0)], [String.fromCharCode(101,95,54,49,95,109,111,116,99,111,109,112,0),String.fromCharCode(109,97,99,95,102,95,55,53,0)]]);
         typingH = [circleu.size ^ parseInt(`${predictionZ}`)];
         circleu = new Map([[`${aboutI.size}`, aboutI.size]]);
          let targets = true;
          let membershipC = 3.0;
          let pcopy_duv = String.fromCharCode(119,97,105,116,101,114,95,122,95,49,52,0);
         typingH = [parseInt(`${membershipC}`) & parseInt(`${flipper9}`)];
         targets = pcopy_duv.includes(`${targets}`);
         membershipC += 3;
         pcopy_duv = `${(pcopy_duv.length + (targets ? 5 : 4))}`;
      for (let o = 0; o < 2; o++) {
          let heji2 = String.fromCharCode(105,95,57,51,95,112,98,108,111,99,107,115,0);
          let textH = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,95,57,95,50,53,0);
          let livesharei = true;
         iconcalendarM = "2";
         heji2 = `${textH.length}`;
         textH = `${2 | textH.length}`;
         livesharei = heji2.length < 86;
      }
         typingH.push(parseInt(`${flipper9}`) >> (Math.min(5, Math.abs(3))));
         iconcalendarM += `${2 << (Math.min(1, typingH.length))}`;
         typingH.push(3 & parseInt(`${predictionZ}`));
      nnewinterstitial8 = `${uploadR.size}`;
       let linem = String.fromCharCode(103,101,116,95,122,95,55,50,0);
       let unread9 = 2;
       let hiadp = 0.0;
      if ((unread9 % 3) < 5 || 3 < (unread9 % (Math.max(7, linem.length)))) {
          let taiwanK = false;
          let latn3: Array<any> = [277, 120];
          let volume7 = 2.0;
          let debugY: Array<any> = [889, 517];
         unread9 &= 2 << (Math.min(4, latn3.length));
         taiwanK = parseInt(`${volume7}`) < debugY.length;
         latn3 = [debugY.length];
         volume7 += parseFloat(`${3 | debugY.length}`);
      }
          let gmailv = true;
         hiadp *= (parseFloat(`${(gmailv ? 3 : 5) << (Math.min(Math.abs(unread9), 4))}`));
      if (linem.length > 2) {
         linem += `${parseInt(`${hiadp}`) ^ linem.length}`;
      }
       let halffieldimageV = String.fromCharCode(105,95,52,49,95,116,104,101,114,101,117,109,0);
      let usernameY = 8198360 >= linem.length;
      do {
         linem += `${linem.length}`;
         if (usernameY) {
            break;
         }
      } while (((linem.length >> (Math.min(4, Math.abs(unread9)))) == 4 && (unread9 >> (Math.min(linem.length, 1))) == 4) && usernameY);
      let hovern = 9380969.0 <= hiadp;
      do {
         hiadp -= parseFloat(`${halffieldimageV.length}`);
         if (hovern) {
            break;
         }
      } while (hovern && ((hiadp / (Math.max(parseFloat(`${halffieldimageV.length}`), 6))) < 4.38 && 1 < (parseInt(`${hiadp}`) / (Math.max(halffieldimageV.length, 7)))));
         hiadp /= Math.max(parseFloat(`${1 - parseInt(`${hiadp}`)}`), 5);
      while (linem.startsWith(halffieldimageV)) {
          let weiboA = String.fromCharCode(97,100,109,105,110,115,95,98,95,57,53,0);
          let middlebrightnesso = true;
         linem = `${halffieldimageV.length % (Math.max(1, weiboA.length))}`;
         weiboA += `${((middlebrightnesso ? 4 : 3))}`;
         break;
      }
      while (linem.endsWith(`${hiadp}`)) {
          let inactiveM: Array<any> = [643, 537, 731];
          let mintegralk = false;
          let arrowdownY: Array<any> = [666, 534];
          let baidu8 = 5.0;
         hiadp -= (parseFloat(`${String.fromCharCode(100,0) == halffieldimageV ? unread9 : halffieldimageV.length}`));
         inactiveM = [((mintegralk ? 5 : 4) | 2)];
         mintegralk = !mintegralk;
         arrowdownY.push(inactiveM.length ^ 2);
         baidu8 /= Math.max(parseFloat(`${parseInt(`${baidu8}`) / 1}`), 3);
         break;
      }
      uploadR = new Map([[`${unread9}`, 1]]);
       let penaltyshootnogoalN = String.fromCharCode(100,95,56,56,95,97,99,113,117,105,114,101,0);
       let libcxxcomponentsm = String.fromCharCode(109,97,116,99,104,101,114,95,99,95,50,53,0);
       let reminderF = 0.0;
         libcxxcomponentsm += `${penaltyshootnogoalN.length}`;
         libcxxcomponentsm = `${2 * penaltyshootnogoalN.length}`;
         libcxxcomponentsm += `${1 | parseInt(`${reminderF}`)}`;
         libcxxcomponentsm += `${libcxxcomponentsm.length}`;
      while (libcxxcomponentsm != penaltyshootnogoalN) {
         penaltyshootnogoalN = `${(penaltyshootnogoalN == String.fromCharCode(116,0) ? parseInt(`${reminderF}`) : penaltyshootnogoalN.length)}`;
         break;
      }
      if (3 == libcxxcomponentsm.length) {
         libcxxcomponentsm += `${penaltyshootnogoalN.length}`;
      }
       let iconviewergifm = 0;
       let largebrightnessZ = 4;
      if (libcxxcomponentsm.startsWith(`${iconviewergifm}`)) {
         libcxxcomponentsm = `${parseInt(`${reminderF}`) / 3}`;
      }
       let resultV = String.fromCharCode(116,109,112,111,95,117,95,57,56,0);
       let iconbellv = String.fromCharCode(117,110,114,105,115,101,95,100,95,51,57,0);
      attributedstringE = `${attributedstringE.length}`;
       let halffieldimagek = String.fromCharCode(100,95,54,48,95,115,117,112,101,114,119,105,110,100,111,119,0);
          let defaultbasketballbgS = false;
          let commonV = String.fromCharCode(116,114,105,108,105,110,101,97,114,95,120,95,57,54,0);
         halffieldimagek += `${commonV.length}`;
      let loadingB = 8122551 >= halffieldimagek.length;
      do {
         halffieldimagek = `${halffieldimagek.length * 1}`;
         if (loadingB) {
            break;
         }
      } while ((halffieldimagek.includes(`${halffieldimagek.length}`)) && loadingB);
         halffieldimagek += "1";
      field6 = halffieldimagek == String.fromCharCode(67,0);
   while ((saveQ.length % (Math.max(7, pauseK.size))) >= 2) {
      saveQ = [attributedstringE.length << (Math.min(Math.abs(3), 1))];
      break;
   }
       let delegate__7: Map<any, any> = new Map([[String.fromCharCode(104,95,51,50,95,99,111,108,108,101,99,116,97,98,108,101,0),946], [String.fromCharCode(105,95,52,55,95,115,105,120,116,97,112,0),406]]);
         delegate__7 = new Map([[`${delegate__7.size}`, 2 - delegate__7.size]]);
       let downloadingx: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,100,95,56,50,0),String.fromCharCode(100,95,52,57,95,105,110,102,111,115,0)], [String.fromCharCode(99,111,110,99,114,101,116,101,95,97,95,53,57,0),String.fromCharCode(107,108,97,115,115,95,118,95,49,50,0)], [String.fromCharCode(100,95,51,49,95,116,101,115,115,101,108,97,116,101,0),String.fromCharCode(110,95,57,52,95,116,122,102,105,108,101,0)]]);
         downloadingx = new Map([[`${downloadingx.size}`, delegate__7.size]]);
      watchb = `${uploadR.size & 3}`;
      sentryN = `${attributedstringE.length >> (Math.min(Math.abs(3), 4))}`;
   if (hiadu.startsWith(`${field6}`)) {
      hiadu = `${nnewinterstitial8.length & gdtadvu.length}`;
   }
   let submitI = hiadu == String.fromCharCode(118,121,114,50,52,49,116,0);
   do {
      hiadu = `${carousel2.length}`;
      if (submitI) {
         break;
      }
   } while (submitI && (gdtadvu == String.fromCharCode(51,0) && hiadu == String.fromCharCode(109,0)));
        this.#triggerFirebaseCustomEvent(FSliderCenter.FDefaultlogoX);

      watchb = `${uploadR.size}`;
   while ((libimagepipelineL << (Math.min(saveQ.length, 1))) > 3 || (saveQ.length << (Math.min(4, Math.abs(libimagepipelineL)))) > 3) {
      saveQ = [2];
      break;
   }
   if (4 <= (5 << (Math.min(3, Math.abs(libimagepipelineL)))) && 5 <= (attributedstringE.length << (Math.min(5, Math.abs(libimagepipelineL))))) {
       let selectedH: Array<any> = [640, 862, 795];
       let indexc = 1.0;
       let trashx = 2.0;
       let yellowanimationlivew = 2.0;
       let auto_ylb = 3.0;
         yellowanimationlivew -= 2 & parseInt(`${auto_ylb}`);
         auto_ylb += 3;
         trashx -= parseInt(`${indexc}`);
      for (let s = 0; s < 2; s++) {
         auto_ylb /= Math.max(2 / (Math.max(parseInt(`${yellowanimationlivew}`), 2)), 4);
      }
      attributedstringE += `${watchb.length}`;
      selectedH = [selectedH.length];
      indexc += selectedH.length << (Math.min(4, selectedH.length));
   }
   if (2 >= carousel2.length || 2 >= gdtadvu.length) {
       let injuryf = String.fromCharCode(109,105,112,115,100,115,112,95,120,95,56,0);
       let rewardG: Map<any, any> = new Map([[String.fromCharCode(118,95,50,53,95,109,107,118,114,101,97,100,101,114,0),289], [String.fromCharCode(104,95,51,50,95,108,97,109,101,0),915]]);
       let penaltygoal9 = String.fromCharCode(100,110,120,104,100,95,102,95,52,50,0);
       let libreanimatede = 2;
         injuryf += `${(injuryf == String.fromCharCode(99,0) ? injuryf.length : rewardG.size)}`;
       let episodes: Array<any> = [String.fromCharCode(101,95,55,49,95,119,97,116,99,104,101,114,115,0), String.fromCharCode(113,95,52,95,100,101,108,111,103,111,0), String.fromCharCode(102,95,50,95,110,105,108,0)];
         episodes.push(libreanimatede);
          let greytickQ: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,109,101,95,50,95,56,49,0),String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,51,95,56,56,0)], [String.fromCharCode(121,95,57,50,95,118,97,108,0),String.fromCharCode(108,95,48,95,109,97,110,97,103,101,115,0)]]);
          let latnf = String.fromCharCode(102,95,49,57,95,118,111,116,101,114,0);
          let sharewhiteX: Map<any, any> = new Map([[String.fromCharCode(117,102,102,101,114,95,120,95,52,54,0),327], [String.fromCharCode(116,101,109,112,95,105,95,50,55,0),520]]);
         rewardG = new Map([[`${greytickQ.size}`, greytickQ.size]]);
         latnf += `${latnf.length}`;
         sharewhiteX = new Map([[`${sharewhiteX.size}`, sharewhiteX.size]]);
      if (!Array.from(rewardG.values()).includes(libreanimatede)) {
         rewardG = new Map([[`${rewardG.size}`, libreanimatede / (Math.max(rewardG.size, 2))]]);
      }
      if ((libreanimatede << (Math.min(episodes.length, 3))) > 1 || (1 << (Math.min(4, episodes.length))) > 3) {
         libreanimatede ^= penaltygoal9.length;
      }
          let sportsl = 3;
         injuryf = `${sportsl % (Math.max(injuryf.length, 6))}`;
          let resultR: Map<any, any> = new Map([[String.fromCharCode(108,95,55,55,95,109,117,108,116,105,101,110,100,0),false ], [String.fromCharCode(109,95,51,53,95,99,104,97,112,116,101,114,0),true ], [String.fromCharCode(104,95,57,50,95,98,102,108,121,0),true ]]);
          let basketballmatchdetailbgZ = String.fromCharCode(105,110,115,116,114,95,101,95,57,48,0);
          let searchbaru = true;
         rewardG.set(`${libreanimatede}`, (libreanimatede / (Math.max(6, (searchbaru ? 1 : 1)))));
         resultR = new Map([[`${resultR.size}`, 2 - resultR.size]]);
         basketballmatchdetailbgZ = `${1 | basketballmatchdetailbgZ.length}`;
         searchbaru = (resultR.size - basketballmatchdetailbgZ.length) > 16;
      if (1 >= (injuryf.length + 2) && (2 + injuryf.length) >= 1) {
         rewardG = new Map([[`${episodes.length}`, 2]]);
      }
      while (5 <= episodes.length) {
          let const_hkG = 0.0;
          let loadingspinnerJ = 3.0;
          let gpay9 = String.fromCharCode(115,105,109,100,95,118,95,57,51,0);
          let reddownarrowN: Map<any, any> = new Map([[String.fromCharCode(99,95,51,51,95,105,110,105,116,97,108,105,122,101,0),980], [String.fromCharCode(113,95,50,54,95,115,116,105,102,102,110,101,115,115,0),49]]);
          let iconnewsshare9 = 0.0;
         rewardG.set(injuryf, libreanimatede % 1);
         const_hkG -= gpay9.length;
         loadingspinnerJ -= parseFloat(`${2 % (Math.max(2, parseInt(`${iconnewsshare9}`)))}`);
         gpay9 += `${parseInt(`${loadingspinnerJ}`)}`;
         reddownarrowN = new Map([[`${reddownarrowN.size}`, parseInt(`${loadingspinnerJ}`)]]);
         iconnewsshare9 *= gpay9.length;
         break;
      }
      if (penaltygoal9.startsWith(`${rewardG.size}`)) {
         rewardG.set(injuryf, 3);
      }
         episodes = [libreanimatede * penaltygoal9.length];
      carousel2 = `${(penaltygoal9 == String.fromCharCode(107,0) ? penaltygoal9.length : libimagepipelineL)}`;
   }
      nnewinterstitial8 = `${1 | watchb.length}`;
   while (parseInt(`${release_fz}`) == saveQ.length) {
       let libffmpegkith: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,108,121,95,51,95,52,56,0),985], [String.fromCharCode(112,97,114,115,101,100,95,99,95,54,48,0),537], [String.fromCharCode(116,104,97,116,95,100,95,51,48,0),32]]);
       let membership0: Map<any, any> = new Map([[String.fromCharCode(114,101,117,115,101,95,114,95,55,56,0),888], [String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,95,117,95,52,57,0),946]]);
       let flipperl = 1.0;
       let fastt: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,116,111,100,97,121,115,0),true ], [String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,97,95,49,49,0),false ], [String.fromCharCode(97,109,116,95,113,95,53,48,0),true ]]);
       let utilsI: Array<any> = [722, 4];
      while (!Array.from(libffmpegkith.values()).includes(membership0.size)) {
          let type_5xG: Array<any> = [String.fromCharCode(106,118,101,114,115,105,111,110,95,117,95,55,57,0), String.fromCharCode(99,95,53,51,95,97,99,107,110,111,119,108,101,100,103,101,0)];
          let skipE = true;
          let privacys = 5.0;
         libffmpegkith.set(`${fastt.size}`, fastt.size ^ 2);
         type_5xG = [(parseInt(`${privacys}`) ^ (skipE ? 2 : 5))];
         skipE = !skipE;
         privacys /= Math.max(5, (parseFloat(`${parseInt(`${privacys}`) * (skipE ? 1 : 1)}`)));
         break;
      }
      for (let n = 0; n < 3; n++) {
         fastt.set(`${flipperl}`, libffmpegkith.size);
      }
      while (1.61 == (5.79 + flipperl) || (libffmpegkith.size / 3) == 4) {
         flipperl += 1 & fastt.size;
         break;
      }
         fastt = new Map([[`${fastt.size}`, 2 & fastt.size]]);
         membership0.set(`${flipperl}`, fastt.size / 3);
         flipperl += libffmpegkith.size * 2;
         libffmpegkith.set(`${flipperl}`, 3 >> (Math.min(4, Math.abs(fastt.size))));
         membership0 = new Map([[`${utilsI.length}`, 1 % (Math.max(10, parseInt(`${flipperl}`)))]]);
         utilsI = [fastt.size - 1];
         membership0 = new Map([[`${libffmpegkith.size}`, libffmpegkith.size + 1]]);
         utilsI = [parseInt(`${flipperl}`) - membership0.size];
      while (parseInt(`${flipperl}`) >= libffmpegkith.size) {
          let updatesm = 3.0;
          let rightl = false;
          let leakcheckerc = String.fromCharCode(106,112,101,103,116,114,97,110,95,111,95,52,50,0);
          let sportsW = 4;
          let with_5Q = 4.0;
         libffmpegkith = new Map([[`${flipperl}`, parseInt(`${flipperl}`) << (Math.min(2, Math.abs(3)))]]);
         updatesm /= Math.max(2, parseInt(`${updatesm}`) ^ leakcheckerc.length);
         rightl = updatesm <= 55.24 && with_5Q <= 55.24;
         leakcheckerc = `${leakcheckerc.length}`;
         sportsW %= Math.max((parseInt(`${updatesm}`) ^ (rightl ? 2 : 2)), 5);
         with_5Q -= sportsW | 2;
         break;
      }
      let footballfiledlayoutM = membership0.size >= 9089601;
      do {
          let placementk = false;
          let plusc: Array<any> = [496, 752, 747];
          let sellmathbackgroundq = String.fromCharCode(116,95,51,54,95,112,97,101,116,104,0);
          let middlebrightnessD = true;
          let imagemanagery = String.fromCharCode(119,95,56,51,95,119,105,110,97,114,109,0);
         membership0.set(`${flipperl}`, 2 & parseInt(`${flipperl}`));
         placementk = sellmathbackgroundq.length > 49;
         plusc = [sellmathbackgroundq.length];
         middlebrightnessD = !sellmathbackgroundq.includes(`${middlebrightnessD}`);
         imagemanagery += "1";
         if (footballfiledlayoutM) {
            break;
         }
      } while (((membership0.size & 1) > 1 && 4 > (1 & libffmpegkith.size)) && footballfiledlayoutM);
      for (let f = 0; f < 1; f++) {
         libffmpegkith.set(`${fastt.size}`, 3);
      }
         fastt = new Map([[`${libffmpegkith.size}`, libffmpegkith.size ^ parseInt(`${flipperl}`)]]);
      release_fz += membership0.size;
      break;
   }
      field6 = String.fromCharCode(77,0) == sentryN;
      gdtadvu += `${attributedstringE.length}`;
       let schedulerP = 4;
       let manifestx = String.fromCharCode(107,95,52,50,95,103,114,97,110,117,108,101,0);
         schedulerP &= (manifestx == String.fromCharCode(97,0) ? schedulerP : manifestx.length);
       let penaltygoalh = 5.0;
      while (2 <= manifestx.length) {
         manifestx = `${manifestx.length / (Math.max(2, 1))}`;
         break;
      }
      let descM = 9331165.0 <= penaltygoalh;
      do {
          let referreru = false;
          let libcxxcomponentss: Array<any> = [594, 701];
          let v_positionZ = 0;
          let actionsx: Array<any> = [994, 586, 767];
         penaltygoalh -= parseFloat(`${v_positionZ & actionsx.length}`);
         referreru = !referreru && libcxxcomponentss.length < 35;
         libcxxcomponentss = [((referreru ? 4 : 1) + 2)];
         v_positionZ %= Math.max(3, ((referreru ? 1 : 1) % (Math.max(9, libcxxcomponentss.length))));
         actionsx.push(libcxxcomponentss.length);
         if (descM) {
            break;
         }
      } while (((3 / (Math.max(6, manifestx.length))) > 2) && descM);
      if (!manifestx.endsWith(`${penaltygoalh}`)) {
         penaltygoalh /= Math.max(3, parseFloat(`${parseInt(`${penaltygoalh}`) * 3}`));
      }
      if (schedulerP >= manifestx.length) {
         manifestx += `${schedulerP >> (Math.min(manifestx.length, 2))}`;
      }
      borderless0 = uploadR.size == 86 || 86 == libimagepipelineL;
      carousel2 = `${(String.fromCharCode(81,0) == nnewinterstitial8 ? uploadR.size : nnewinterstitial8.length)}`;
       let robotoF = String.fromCharCode(99,111,110,118,115,97,109,112,95,117,95,53,49,0);
      for (let e = 0; e < 2; e++) {
         robotoF = `${2 | robotoF.length}`;
      }
          let backiconmaskh = false;
         robotoF += `${(robotoF == String.fromCharCode(105,0) ? (backiconmaskh ? 1 : 5) : robotoF.length)}`;
         robotoF = `${robotoF.length >> (Math.min(Math.abs(2), 2))}`;
      gdtadvu += `${pauseK.size - 1}`;
   let rewardvideor = watchb.length >= 9110600;
   do {
      watchb = `${attributedstringE.length}`;
      if (rewardvideor) {
         break;
      }
   } while (rewardvideor && (3 == watchb.length));
   while (sentryN.length < 1) {
      uploadR.set(watchb, eighteen5.length ^ 1);
      break;
   }
        this.#triggerCustomEvent('view', IIPhoneshare.FOrangeclockColors);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        this.#triggerUmengEvent(FSliderCenter.FArrowright, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FArrowright, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerCustomEvent('click', IIPhoneshare.FOrangeclockColors, {
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        this.#triggerUmengEvent(FSliderCenter.FLeft, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FLeft, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerCustomEvent('view', IIPhoneshare.FCombine, {
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        this.#triggerUmengEvent(FSliderCenter.FDownloaderUnlock, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FDownloaderUnlock, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        this.#triggerCustomEvent('click', IIPhoneshare.FCombine, {
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });
    }


    
    static userCenterLoginSuccessTimesAnalytics = () => {
       let philippinesv = String.fromCharCode(109,95,52,95,109,111,100,112,108,117,103,0);
    let windC = 5.0;
    let castc: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,104,95,57,48,0),194], [String.fromCharCode(106,95,51,55,95,115,99,104,101,109,101,115,0),204], [String.fromCharCode(105,102,97,100,100,114,115,95,102,95,51,53,0),801]]);
    let kicku = 4;
    let arrowrightwithtaill: Array<any> = [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,98,95,52,0), String.fromCharCode(115,117,103,103,101,115,116,95,107,95,49,51,0)];
    let logoutm: Array<any> = [375, 221, 514];
    let typingu = 5.0;
    let showlessj = 3.0;
    let membershipa = 5;
    let libsentryb = String.fromCharCode(112,111,119,116,97,98,108,101,95,97,95,52,49,0);
    let sendK = String.fromCharCode(109,95,57,56,95,108,111,111,115,101,0);
    let mcopy_ri = String.fromCharCode(98,95,56,53,95,99,111,110,100,0);
    let type_s7 = 0;
       let crownb: Array<any> = [String.fromCharCode(122,95,51,55,95,115,102,114,97,109,101,0), String.fromCharCode(117,117,105,100,117,115,109,116,95,119,95,51,52,0)];
       let bing3 = 2;
      if (4 < (bing3 << (Math.min(crownb.length, 4)))) {
         crownb = [bing3 + crownb.length];
      }
          let incident4: Map<any, any> = new Map([[String.fromCharCode(122,112,98,105,113,117,97,100,115,95,98,95,54,52,0),String.fromCharCode(109,112,99,100,97,116,97,95,54,95,50,52,0)], [String.fromCharCode(104,105,101,114,95,106,95,56,51,0),String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,95,53,95,55,51,0)]]);
         bing3 -= 2;
         incident4 = new Map([[`${incident4.size}`, incident4.size]]);
      if ((4 << (Math.min(5, crownb.length))) <= 4) {
          let whistleorangeF = String.fromCharCode(108,95,54,51,95,116,114,97,110,115,105,101,110,116,0);
          let iconmegaphoneg = String.fromCharCode(109,95,53,55,95,109,97,99,114,111,98,108,111,99,107,0);
         crownb.push(2);
         whistleorangeF = `${whistleorangeF.length * iconmegaphoneg.length}`;
         iconmegaphoneg = `${1 | whistleorangeF.length}`;
      }
      while ((crownb.length - 2) == 1 && 2 == (bing3 - crownb.length)) {
          let promotionm: Array<any> = [328, 24, 198];
          let clubk = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,113,95,56,52,0);
         crownb.push(crownb.length | 2);
         promotionm.push(clubk.length);
         clubk = `${promotionm.length}`;
         break;
      }
      for (let f = 0; f < 1; f++) {
          let casting6 = String.fromCharCode(114,101,108,105,97,98,108,101,95,57,95,50,0);
         bing3 *= bing3 * 3;
         casting6 = "1";
      }
         bing3 %= Math.max(1, bing3);
      typingu -= parseFloat(`${parseInt(`${windC}`)}`);
      logoutm = [parseInt(`${windC}`)];
   let dycreatorj = arrowrightwithtaill.length <= 8988377;
   do {
      arrowrightwithtaill = [libsentryb.length / (Math.max(3, 4))];
      if (dycreatorj) {
         break;
      }
   } while (dycreatorj && (5 == (4 & arrowrightwithtaill.length)));
   while ((3 + logoutm.length) > 3 && 4 > (3 >> (Math.min(5, logoutm.length)))) {
      showlessj -= parseFloat(`${kicku >> (Math.min(Math.abs(3), 3))}`);
      break;
   }
   if (1 == (sendK.length + membershipa) && (1 + sendK.length) == 5) {
      sendK = `${parseInt(`${showlessj}`) ^ logoutm.length}`;
   }
      showlessj *= parseFloat(`${parseInt(`${typingu}`)}`);
   if (!sendK.includes(`${typingu}`)) {
      typingu *= parseFloat(`${arrowrightwithtaill.length * 3}`);
   }
      showlessj /= Math.max(3, parseFloat(`${libsentryb.length << (Math.min(Math.abs(3), 2))}`));
   while (libsentryb.length > castc.size) {
      castc.set(`${membershipa}`, membershipa / 2);
      break;
   }
   let statsK = showlessj >= 8516823.0;
   do {
      showlessj += parseFloat(`${logoutm.length}`);
      if (statsK) {
         break;
      }
   } while (statsK && (3.61 <= (showlessj + 2.68)));
   let privatechatbgP = 7987081.0 <= typingu;
   do {
      typingu -= parseFloat(`${logoutm.length}`);
      if (privatechatbgP) {
         break;
      }
   } while (privatechatbgP && (5 < (parseInt(`${typingu}`) * arrowrightwithtaill.length) || (parseFloat(`${arrowrightwithtaill.length}`) * typingu) < 3.28));
       let const_yE = 0;
       let arrowselectdowne: Map<any, any> = new Map([[String.fromCharCode(109,95,56,48,95,115,107,101,119,101,100,0),484], [String.fromCharCode(99,111,100,101,99,114,97,119,95,54,95,56,56,0),674]]);
       let alertn: Map<any, any> = new Map([[String.fromCharCode(117,95,55,57,95,112,99,98,105,110,102,111,0),false ], [String.fromCharCode(98,101,122,101,108,95,106,95,57,51,0),true ], [String.fromCharCode(108,101,97,107,95,49,95,52,53,0),false ]]);
      while (alertn.get(`${const_yE}`) == null) {
          let reddownarrowV = String.fromCharCode(99,97,108,108,111,117,116,95,121,95,56,53,0);
          let flipperU = String.fromCharCode(100,105,115,99,95,107,95,51,50,0);
          let shootP = String.fromCharCode(100,95,50,56,95,109,98,98,121,0);
          let options1: Array<any> = [113, 568, 203];
          let securityj = String.fromCharCode(113,95,57,51,95,101,116,104,114,101,97,100,105,110,103,0);
         alertn = new Map([[`${alertn.size}`, securityj.length]]);
         reddownarrowV += `${flipperU.length >> (Math.min(Math.abs(2), 5))}`;
         flipperU += "2";
         shootP = `${1 | reddownarrowV.length}`;
         options1 = [options1.length << (Math.min(reddownarrowV.length, 4))];
         securityj += "1";
         break;
      }
      for (let r = 0; r < 3; r++) {
          let chinax = 0;
         alertn.set(`${const_yE}`, const_yE);
         chinax /= Math.max(chinax, 4);
      }
      membershipa %= Math.max(4, kicku);
      mcopy_ri = `${3 << (Math.min(1, sendK.length))}`;

        this.#triggerUmengEvent(FSliderCenter.FAssets);

       let minic = 1;
       let iconshareO = true;
       let fieldX = String.fromCharCode(121,95,56,49,95,114,111,111,116,115,0);
         iconshareO = fieldX == String.fromCharCode(71,0);
         minic |= minic;
       let bdxadsdkA = true;
       let starn = false;
      while (!bdxadsdkA) {
          let expandm = 2.0;
          let dependencyw = String.fromCharCode(114,111,116,114,95,118,95,57,53,0);
          let exampleimage1 = true;
          let core0 = 2.0;
         bdxadsdkA = !exampleimage1;
         expandm -= dependencyw.length;
         dependencyw += `${dependencyw.length}`;
         core0 *= parseFloat(`${parseInt(`${expandm}`)}`);
         break;
      }
      while (!fieldX.endsWith(`${starn}`)) {
         starn = !bdxadsdkA;
         break;
      }
          let statsnomoredataM: Map<any, any> = new Map([[String.fromCharCode(109,95,56,95,104,97,110,100,108,101,114,115,0),212], [String.fromCharCode(117,110,112,105,110,95,101,95,56,48,0),741], [String.fromCharCode(115,101,97,114,99,104,105,110,103,95,54,95,56,0),521]]);
          let temperatureX: Map<any, any> = new Map([[String.fromCharCode(120,99,108,105,95,122,95,56,50,0),572], [String.fromCharCode(98,108,97,107,101,95,109,95,56,48,0),411]]);
          let mbbannery = 4;
         fieldX += `${((iconshareO ? 4 : 5))}`;
         statsnomoredataM = new Map([[`${temperatureX.size}`, mbbannery << (Math.min(Math.abs(3), 1))]]);
         temperatureX = new Map([[`${statsnomoredataM.size}`, statsnomoredataM.size << (Math.min(2, Math.abs(temperatureX.size)))]]);
         mbbannery += 2;
          let moreK = String.fromCharCode(118,95,51,56,95,97,116,111,109,105,99,111,112,115,0);
          let iconclosewhite4 = String.fromCharCode(100,105,97,108,105,110,103,95,111,95,52,53,0);
          let codegenY = String.fromCharCode(114,111,102,105,108,101,95,118,95,52,0);
         bdxadsdkA = !iconshareO && starn;
         moreK = `${codegenY.length}`;
         iconclosewhite4 += `${iconclosewhite4.length | moreK.length}`;
         codegenY += `${codegenY.length}`;
      for (let k = 0; k < 1; k++) {
         starn = !bdxadsdkA;
      }
      while (!bdxadsdkA) {
         iconshareO = fieldX.includes(`${minic}`);
         break;
      }
      showlessj /= Math.max(1, parseFloat(`${1}`));
   let watchnowbgF = showlessj >= 7501810.0;
   do {
       let lesst = 0.0;
      for (let x = 0; x < 3; x++) {
         lesst /= Math.max(4, parseFloat(`${parseInt(`${lesst}`)}`));
      }
         lesst += parseFloat(`${parseInt(`${lesst}`) & 1}`);
      for (let e = 0; e < 3; e++) {
         lesst += parseFloat(`${parseInt(`${lesst}`)}`);
      }
      showlessj -= parseFloat(`${2}`);
      if (watchnowbgF) {
         break;
      }
   } while (((showlessj * windC) >= 5.13) && watchnowbgF);
      sendK = "2";
       let defaultroombgT: Array<any> = [331, 460];
      for (let b = 0; b < 1; b++) {
         defaultroombgT.push(3 & defaultroombgT.length);
      }
         defaultroombgT = [2];
         defaultroombgT = [2];
      libsentryb = `${parseInt(`${windC}`)}`;
   for (let g = 0; g < 1; g++) {
       let flyerC = String.fromCharCode(100,95,49,48,95,108,111,117,112,101,0);
       let greyarrowupO = 4;
       let statisticsinactiveX = String.fromCharCode(102,95,51,95,99,105,110,101,109,97,0);
       let humidityp: Array<any> = [108, 693, 790];
       let heartX = String.fromCharCode(116,95,51,95,99,102,101,110,99,0);
       let textinputD = String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,111,95,57,51,0);
      while (2 >= (humidityp.length + flyerC.length) || 4 >= (flyerC.length + 2)) {
         flyerC = `${3 & greyarrowupO}`;
         break;
      }
      if (2 > heartX.length) {
         flyerC = "3";
      }
          let loginsuccessg = 4.0;
          let resultP: Array<any> = [95, 199];
          let detailsH = 4.0;
         textinputD += `${(heartX == String.fromCharCode(78,0) ? statisticsinactiveX.length : heartX.length)}`;
         loginsuccessg /= Math.max(3, parseInt(`${loginsuccessg}`));
         resultP = [resultP.length];
         detailsH *= parseFloat(`${parseInt(`${loginsuccessg}`)}`);
       let gesturesR = 1;
      let mappingp = gesturesR <= 7400983;
      do {
         gesturesR %= Math.max(1 - flyerC.length, 4);
         if (mappingp) {
            break;
         }
      } while (mappingp && ((3 & flyerC.length) == 2));
       let playlist_: Map<any, any> = new Map([[String.fromCharCode(111,95,55,53,95,115,101,108,101,99,116,105,111,110,115,0),true ], [String.fromCharCode(117,95,49,55,95,109,97,116,114,105,120,102,0),true ]]);
      if (textinputD.length <= 1) {
          let uimanagerR: Array<any> = [String.fromCharCode(97,99,99,101,110,116,95,110,95,50,50,0), String.fromCharCode(115,95,52,53,95,100,113,117,97,110,116,0), String.fromCharCode(97,108,112,110,95,116,95,56,0)];
          let iconpipexpandD = 4.0;
          let play4 = 0.0;
          let gradlew6: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,95,114,95,51,52,0),true ], [String.fromCharCode(116,114,105,108,105,110,101,97,114,95,103,95,56,51,0),false ]]);
          let playercommonC = 0;
         textinputD = `${statisticsinactiveX.length | 3}`;
         uimanagerR.push(playercommonC);
         iconpipexpandD /= Math.max(1, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${play4}`)), 5))}`));
         play4 += uimanagerR.length;
         gradlew6 = new Map([[`${gradlew6.size}`, 2 & gradlew6.size]]);
         playercommonC ^= 3;
      }
         greyarrowupO -= statisticsinactiveX.length;
          let incidentm = 2.0;
          let awayiconY = String.fromCharCode(102,105,108,101,95,55,95,57,49,0);
         heartX += `${parseInt(`${incidentm}`)}`;
         incidentm -= parseFloat(`${awayiconY.length}`);
         awayiconY = `${awayiconY.length}`;
      for (let e = 0; e < 1; e++) {
         humidityp.push(gesturesR);
      }
      while (statisticsinactiveX.length < 4) {
          let neon_ = 2.0;
          let casting6U = String.fromCharCode(97,116,116,101,109,112,116,101,100,95,117,95,54,57,0);
          let questD = String.fromCharCode(104,95,57,56,95,105,102,97,109,115,103,0);
          let anythinkI = 4.0;
         statisticsinactiveX += `${playlist_.size ^ 1}`;
         neon_ *= parseFloat(`${casting6U.length << (Math.min(Math.abs(2), 2))}`);
         casting6U += `${parseInt(`${neon_}`) - parseInt(`${anythinkI}`)}`;
         questD = `${casting6U.length / (Math.max(2, questD.length))}`;
         anythinkI /= Math.max((parseFloat(`${String.fromCharCode(84,0) == questD ? questD.length : parseInt(`${anythinkI}`)}`)), 1);
         break;
      }
      castc = new Map([[`${humidityp.length}`, philippinesv.length % 1]]);
   }
   let movies8 = 5342880.0 >= showlessj;
   do {
      showlessj += parseFloat(`${3}`);
      if (movies8) {
         break;
      }
   } while (movies8 && (5 < (2 + parseInt(`${showlessj}`)) || 5 < (2 << (Math.min(4, mcopy_ri.length)))));
   for (let a = 0; a < 2; a++) {
      kicku <<= Math.min(Math.abs(3 ^ logoutm.length), 5);
   }
      arrowrightwithtaill.push(mcopy_ri.length);
      showlessj *= parseFloat(`${1}`);
      castc.set(libsentryb, 2);
      mcopy_ri = `${kicku * 1}`;
   if (5.54 == windC) {
      windC -= parseFloat(`${membershipa}`);
   }
   for (let k = 0; k < 2; k++) {
      philippinesv += `${1 - kicku}`;
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FAssets);

      libsentryb += `${castc.size & arrowrightwithtaill.length}`;
   if (5 > (sendK.length * 2) && (logoutm.length * 2) > 2) {
      logoutm.push(2);
   }
   let themek = showlessj <= 7981259.0;
   do {
      showlessj += parseFloat(`${parseInt(`${typingu}`)}`);
      if (themek) {
         break;
      }
   } while ((1 >= (4 | logoutm.length) && 3.33 >= (3.38 * showlessj)) && themek);
      membershipa >>= Math.min(Math.abs(parseInt(`${showlessj}`) & mcopy_ri.length), 2);
   let predictionwinY = philippinesv == String.fromCharCode(110,49,113,100,0);
   do {
      philippinesv = `${3 * philippinesv.length}`;
      if (predictionwinY) {
         break;
      }
   } while (((parseInt(`${windC}`) - 1) >= 5 && (2.8 - windC) >= 5.3) && predictionwinY);
      arrowrightwithtaill.push(2 + logoutm.length);
      windC += parseFloat(`${parseInt(`${showlessj}`) % (Math.max(2, kicku))}`);
       let bangC = String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,99,95,55,56,0);
       let backF = String.fromCharCode(104,95,51,57,95,116,105,109,101,102,105,108,116,101,114,0);
       let classesb = String.fromCharCode(100,101,115,99,95,98,95,54,50,0);
      for (let k = 0; k < 1; k++) {
         classesb += `${classesb.length + 3}`;
      }
         classesb = "2";
      for (let c = 0; c < 1; c++) {
         backF += `${1 >> (Math.min(3, bangC.length))}`;
      }
         classesb += `${bangC.length | classesb.length}`;
         classesb += `${3 << (Math.min(2, backF.length))}`;
      while (classesb == String.fromCharCode(78,0) || 4 >= backF.length) {
         backF += `${bangC.length}`;
         break;
      }
      if (backF.endsWith(classesb)) {
         backF = `${backF.length >> (Math.min(bangC.length, 1))}`;
      }
         backF = `${2 / (Math.max(4, backF.length))}`;
      while (backF.endsWith(`${bangC.length}`)) {
         backF += `${bangC.length}`;
         break;
      }
      showlessj /= Math.max(3, parseFloat(`${parseInt(`${windC}`) + membershipa}`));
   while ((5 - sendK.length) == 1 || 3 == (logoutm.length - 5)) {
      logoutm = [parseInt(`${windC}`) << (Math.min(logoutm.length, 4))];
      break;
   }
      arrowrightwithtaill.push(3 + parseInt(`${showlessj}`));
   while (!sendK.includes(`${libsentryb.length}`)) {
      libsentryb = `${3 << (Math.min(1, Math.abs(castc.size)))}`;
      break;
   }
      windC += parseFloat(`${2}`);
      libsentryb = `${1 | libsentryb.length}`;
        this.#triggerCustomEvent('view', IIPhoneshare.FDownloadedArrowrightwithtail);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
       let gmailL = 1.0;
    let moonW = 0.0;
    let auto_oxA = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,52,95,51,53,0);
    let orangetick1 = String.fromCharCode(115,117,109,109,97,114,121,95,102,95,56,51,0);
    let iconmegaphoneu: Array<any> = [167, 279, 796];
    let iconwatchnowQ = String.fromCharCode(110,95,55,49,95,99,108,105,112,112,105,110,103,110,111,100,101,0);
    let plashx = 1.0;
    let iconqq_: Map<any, any> = new Map([[String.fromCharCode(117,95,50,56,95,97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0),716], [String.fromCharCode(104,97,98,108,101,95,105,95,56,56,0),75], [String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,48,95,52,52,0),191]]);
    let iconviewerb = String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,110,95,52,0);
    let libfbjniW: Map<any, any> = new Map([[String.fromCharCode(116,95,52,52,95,112,97,115,119,111,114,100,0),785], [String.fromCharCode(115,111,108,97,110,97,95,108,95,55,53,0),837], [String.fromCharCode(104,95,57,49,95,114,101,99,111,114,100,110,105,110,103,0),22]]);
    let qaag2 = 5.0;
    let sinai: Map<any, any> = new Map([[String.fromCharCode(116,95,57,52,95,98,110,98,105,110,112,97,100,0),783], [String.fromCharCode(99,108,117,115,116,101,114,95,57,95,52,54,0),292], [String.fromCharCode(118,95,49,48,48,95,101,110,99,111,100,97,98,108,101,115,0),685]]);
    let predictionbannershared1 = String.fromCharCode(111,95,54,48,95,114,101,112,101,97,116,101,100,0);
    let predictionS = 5.0;
    let templateprocessory = String.fromCharCode(104,95,53,55,95,102,114,101,113,0);
    let basketballawayteamM = 2;
      plashx -= parseFloat(`${iconmegaphoneu.length}`);
       let libzeusl = 3.0;
       let iconviewergifa = false;
       let middlebrightnessu = 2.0;
         iconviewergifa = !iconviewergifa;
      for (let n = 0; n < 3; n++) {
         libzeusl += parseFloat(`${3 + parseInt(`${middlebrightnessu}`)}`);
      }
      let refreshx = libzeusl <= 7864865.0;
      do {
         libzeusl -= (parseFloat(`${parseInt(`${middlebrightnessu}`) * (iconviewergifa ? 3 : 1)}`));
         if (refreshx) {
            break;
         }
      } while (refreshx && (5.87 == libzeusl));
         libzeusl += (parseFloat(`${(iconviewergifa ? 1 : 5) & parseInt(`${libzeusl}`)}`));
         iconviewergifa = !iconviewergifa;
         iconviewergifa = middlebrightnessu >= 72.66 || !iconviewergifa;
      for (let l = 0; l < 3; l++) {
         middlebrightnessu *= (parseInt(`${libzeusl}`) * (iconviewergifa ? 3 : 5));
      }
          let buildq: Array<any> = [577, 475];
         iconviewergifa = !iconviewergifa && middlebrightnessu < 81.30;
         buildq.push(3 - buildq.length);
      if (!iconviewergifa) {
         iconviewergifa = 87.71 == libzeusl || iconviewergifa;
      }
      iconmegaphoneu.push((parseInt(`${plashx}`) & (iconviewergifa ? 1 : 1)));
   let release_20 = moonW >= 5328121.0;
   do {
       let hoverY = 4.0;
      let combinedh = 7253874.0 >= hoverY;
      do {
         hoverY += parseFloat(`${parseInt(`${hoverY}`) + 3}`);
         if (combinedh) {
            break;
         }
      } while (((hoverY + 4.9) < 1.37 && 4.9 < (hoverY + hoverY)) && combinedh);
      let saveV = 7401712.0 >= hoverY;
      do {
         hoverY *= parseFloat(`${parseInt(`${hoverY}`) * parseInt(`${hoverY}`)}`);
         if (saveV) {
            break;
         }
      } while ((4.80 <= (hoverY - hoverY) && 4.80 <= (hoverY - hoverY)) && saveV);
      while (5.47 > (4.73 + hoverY) || 2.51 > (4.73 + hoverY)) {
          let window_06W = 5.0;
          let cnewinterstitialz = String.fromCharCode(115,108,111,119,95,105,95,49,57,0);
          let largebrightnesse = String.fromCharCode(98,95,57,55,95,108,97,121,111,121,116,0);
          let zhuboW = String.fromCharCode(114,101,109,111,118,105,110,103,95,107,95,57,51,0);
          let shootnogoalW = 5.0;
         hoverY /= Math.max(parseFloat(`${2}`), 3);
         window_06W -= 2 ^ zhuboW.length;
         cnewinterstitialz += `${(cnewinterstitialz == String.fromCharCode(72,0) ? parseInt(`${shootnogoalW}`) : cnewinterstitialz.length)}`;
         largebrightnesse = `${zhuboW.length + 1}`;
         shootnogoalW -= parseInt(`${shootnogoalW}`) << (Math.min(largebrightnesse.length, 4));
         break;
      }
      moonW -= parseFloat(`${1 + parseInt(`${hoverY}`)}`);
      if (release_20) {
         break;
      }
   } while (release_20 && (3 < (iconwatchnowQ.length - parseInt(`${moonW}`))));
   for (let w = 0; w < 3; w++) {
       let otherU: Array<any> = [237, 32, 761];
       let starM = 5;
       let bottomg = String.fromCharCode(97,117,116,111,108,111,99,107,95,111,95,52,51,0);
       let leagueO = String.fromCharCode(111,95,55,50,95,121,118,116,111,117,121,118,121,0);
       let sourceB = String.fromCharCode(102,111,114,109,97,116,115,95,97,95,49,49,0);
      while ((5 >> (Math.min(2, otherU.length))) >= 5) {
          let yellowanimationliveY = 2;
          let successj = String.fromCharCode(99,97,112,97,98,108,101,95,120,95,57,49,0);
          let iconclosew = 4;
         leagueO += `${bottomg.length % (Math.max(sourceB.length, 5))}`;
         yellowanimationliveY %= Math.max(2, iconclosew);
         successj += `${1 * yellowanimationliveY}`;
         iconclosew /= Math.max(successj.length ^ 3, 4);
         break;
      }
          let chinak = 1.0;
          let questa = false;
         starM -= 2 + bottomg.length;
         chinak -= parseFloat(`${3 / (Math.max(9, parseInt(`${chinak}`)))}`);
         questa = !questa;
       let hongkongD = String.fromCharCode(100,95,54,50,95,100,114,111,112,0);
       let eventsplashM = String.fromCharCode(120,95,57,95,100,114,105,118,105,110,103,0);
      if (!eventsplashM.includes(`${otherU.length}`)) {
          let philippinesF = String.fromCharCode(108,111,116,116,105,101,107,101,121,112,97,116,104,95,121,95,50,50,0);
          let codegenA = String.fromCharCode(116,95,50,51,95,100,105,109,109,101,100,0);
         otherU = [3 + leagueO.length];
         philippinesF = `${codegenA.length ^ philippinesF.length}`;
         codegenA = `${philippinesF.length}`;
      }
          let viewsf = String.fromCharCode(98,95,57,48,95,100,108,114,114,0);
          let notificationfillemptyz = String.fromCharCode(105,95,49,49,95,100,97,116,101,0);
          let libjsinspectorj = String.fromCharCode(122,95,52,95,114,100,112,99,109,0);
         sourceB += `${sourceB.length}`;
         viewsf += `${(String.fromCharCode(50,0) == notificationfillemptyz ? viewsf.length : notificationfillemptyz.length)}`;
         libjsinspectorj += `${libjsinspectorj.length}`;
          let singaporeR = 2;
         otherU.push(leagueO.length << (Math.min(4, Math.abs(singaporeR))));
         hongkongD = `${otherU.length | 2}`;
         starM -= 3 & leagueO.length;
         eventsplashM = `${leagueO.length & starM}`;
      let smallorangemanE = 8236123 >= leagueO.length;
      do {
         leagueO = "3";
         if (smallorangemanE) {
            break;
         }
      } while ((leagueO.endsWith(`${otherU.length}`)) && smallorangemanE);
      while (leagueO == String.fromCharCode(109,0)) {
         eventsplashM += `${(String.fromCharCode(69,0) == hongkongD ? hongkongD.length : otherU.length)}`;
         break;
      }
         hongkongD += `${otherU.length}`;
       let searchbarE = String.fromCharCode(116,95,53,57,95,97,117,116,104,111,114,105,116,121,0);
      if ((leagueO.length % (Math.max(3, 8))) >= 5) {
         otherU.push(2 - sourceB.length);
      }
      predictionbannershared1 += `${parseInt(`${gmailL}`) + 3}`;
   }
   let libimagepipelineD = 5261479 >= sinai.size;
   do {
       let reducerG = String.fromCharCode(113,95,54,55,95,116,111,111,108,116,105,112,0);
       let holderO = 3.0;
      for (let m = 0; m < 2; m++) {
         holderO *= reducerG.length;
      }
         holderO *= 2 / (Math.max(10, parseInt(`${holderO}`)));
      while (!reducerG.startsWith(`${holderO}`)) {
         reducerG += `${parseInt(`${holderO}`)}`;
         break;
      }
      while (1 > reducerG.length) {
          let iconarrowrightwhitew = String.fromCharCode(115,116,114,111,107,101,115,95,120,95,53,48,0);
          let dragc = 2.0;
          let unfilld = String.fromCharCode(97,108,105,103,110,101,114,95,118,95,52,51,0);
          let iconnointernetX = String.fromCharCode(104,95,52,54,95,99,111,110,102,105,103,117,114,101,114,0);
         reducerG = `${1 - iconarrowrightwhitew.length}`;
         iconarrowrightwhitew += `${iconnointernetX.length}`;
         dragc += iconnointernetX.length - 2;
         unfilld += `${(unfilld == String.fromCharCode(52,0) ? parseInt(`${dragc}`) : unfilld.length)}`;
         break;
      }
      while (holderO >= 2.2) {
         holderO /= Math.max(1, reducerG.length);
         break;
      }
      if (5.25 == (2.58 * holderO)) {
          let carousel3 = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,120,95,54,49,0);
         holderO /= Math.max(2, 2);
         carousel3 += `${(carousel3 == String.fromCharCode(70,0) ? carousel3.length : carousel3.length)}`;
      }
      sinai = new Map([[`${libfbjniW.size}`, (orangetick1 == String.fromCharCode(80,0) ? orangetick1.length : libfbjniW.size)]]);
      if (libimagepipelineD) {
         break;
      }
   } while (libimagepipelineD && (iconwatchnowQ.includes(`${sinai.size}`)));
   for (let i = 0; i < 2; i++) {
       let statisticsinactivej = String.fromCharCode(104,95,50,48,95,112,105,120,101,108,102,108,111,97,116,0);
       let teamdetailsbgF = String.fromCharCode(97,121,98,114,95,116,95,56,0);
       let iconfeedback3 = 1.0;
       let smallbrightnessG = 1.0;
       let filledD = String.fromCharCode(104,97,115,104,116,97,103,95,114,95,56,53,0);
      for (let m = 0; m < 3; m++) {
         smallbrightnessG -= parseFloat(`${3 | filledD.length}`);
      }
      if (2 <= teamdetailsbgF.length) {
         teamdetailsbgF += `${filledD.length & parseInt(`${smallbrightnessG}`)}`;
      }
       let sentryD = 5.0;
       let detailsc = 0.0;
         smallbrightnessG /= Math.max(parseFloat(`${1 & statisticsinactivej.length}`), 2);
         iconfeedback3 /= Math.max(2, parseInt(`${sentryD}`));
      while (statisticsinactivej != String.fromCharCode(99,0)) {
          let privatechatbgj: Map<any, any> = new Map([[String.fromCharCode(121,97,109,97,104,97,95,105,95,56,49,0),61], [String.fromCharCode(97,95,57,51,95,104,112,97,114,97,109,115,0),851]]);
         teamdetailsbgF = `${3 >> (Math.min(5, Math.abs(parseInt(`${iconfeedback3}`))))}`;
         privatechatbgj.set(`${privatechatbgj.size}`, privatechatbgj.size % 3);
         break;
      }
       let profileinactiveL = 5;
         sentryD -= parseFloat(`${filledD.length + 2}`);
         sentryD -= parseFloat(`${1 & parseInt(`${detailsc}`)}`);
      let typesT = teamdetailsbgF == String.fromCharCode(118,50,109,0);
      do {
          let mbridgee = true;
          let verticalS: Array<any> = [String.fromCharCode(112,108,97,110,101,100,95,105,95,52,51,0), String.fromCharCode(115,116,111,114,101,95,108,95,50,51,0)];
          let resendK = 2.0;
         teamdetailsbgF = `${3 * profileinactiveL}`;
         mbridgee = verticalS.length < 89;
         verticalS = [parseInt(`${resendK}`)];
         resendK -= parseFloat(`${verticalS.length % 2}`);
         if (typesT) {
            break;
         }
      } while (((profileinactiveL << (Math.min(teamdetailsbgF.length, 2))) < 3 && (teamdetailsbgF.length << (Math.min(Math.abs(3), 5))) < 1) && typesT);
      if (!statisticsinactivej.startsWith(filledD)) {
         statisticsinactivej = `${(String.fromCharCode(51,0) == filledD ? filledD.length : parseInt(`${sentryD}`))}`;
      }
      for (let j = 0; j < 3; j++) {
         smallbrightnessG -= parseFloat(`${3 << (Math.min(5, teamdetailsbgF.length))}`);
      }
         sentryD /= Math.max(1, parseFloat(`${3}`));
      while (1.32 >= (detailsc * 4.91) || (4.91 + sentryD) >= 5.19) {
         sentryD -= parseFloat(`${3 + parseInt(`${smallbrightnessG}`)}`);
         break;
      }
       let auto_b6O: Map<any, any> = new Map([[String.fromCharCode(100,95,48,95,102,104,116,120,0),false ], [String.fromCharCode(109,100,99,116,95,57,95,57,53,0),true ], [String.fromCharCode(116,114,97,110,115,112,111,115,101,95,114,95,57,52,0),false ]]);
      iconwatchnowQ = `${parseInt(`${smallbrightnessG}`) >> (Math.min(Math.abs(parseInt(`${iconfeedback3}`)), 1))}`;
   }
   if (iconwatchnowQ.startsWith(`${moonW}`)) {
      moonW /= Math.max(2, parseFloat(`${parseInt(`${plashx}`)}`));
   }
      iconqq_ = new Map([[`${sinai.size}`, iconmegaphoneu.length + 3]]);
      auto_oxA = "1";
   for (let i = 0; i < 3; i++) {
      predictionbannershared1 += `${predictionbannershared1.length & sinai.size}`;
   }
      gmailL *= 1 - parseInt(`${moonW}`);
   for (let r = 0; r < 1; r++) {
      libfbjniW.set(`${gmailL}`, 2 << (Math.min(5, Math.abs(parseInt(`${gmailL}`)))));
   }
   let arrowrightwithtail1 = 9645994.0 >= plashx;
   do {
      plashx -= parseFloat(`${1 * iconwatchnowQ.length}`);
      if (arrowrightwithtail1) {
         break;
      }
   } while (arrowrightwithtail1 && (1.21 == qaag2));
       let filterj = false;
      while (!filterj) {
         filterj = (filterj ? filterj : !filterj);
         break;
      }
      while (!filterj) {
          let attributedstring5 = 1.0;
         filterj = !filterj;
         attributedstring5 *= parseFloat(`${3}`);
         break;
      }
          let fcdaebecbcbafcdfceaaeccfeacdbh: Array<any> = [String.fromCharCode(112,97,100,95,101,95,51,54,0), String.fromCharCode(110,111,116,104,105,110,103,95,57,95,55,55,0)];
          let z_hashN = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,95,120,95,53,56,0);
         filterj = !filterj;
         fcdaebecbcbafcdfceaaeccfeacdbh = [(String.fromCharCode(67,0) == z_hashN ? fcdaebecbcbafcdfceaaeccfeacdbh.length : z_hashN.length)];
      iconqq_.set(`${filterj}`, parseInt(`${qaag2}`) - 2);

        this.#triggerUmengEvent(FSliderCenter.FWhatsapp);

      libfbjniW = new Map([[`${iconqq_.size}`, orangetick1.length >> (Math.min(1, Math.abs(iconqq_.size)))]]);
       let schedulem = String.fromCharCode(112,97,103,101,95,56,95,54,55,0);
       let controlG: Array<any> = [String.fromCharCode(115,101,99,112,107,95,115,95,53,48,0), String.fromCharCode(115,112,101,101,99,104,95,122,95,49,51,0), String.fromCharCode(114,95,56,54,95,116,105,116,108,101,98,97,114,0)];
         schedulem += `${schedulem.length + controlG.length}`;
          let j_managerM = String.fromCharCode(105,95,55,51,95,116,111,117,99,104,101,115,0);
          let connectionG: Array<any> = [String.fromCharCode(115,95,54,51,95,117,110,101,115,99,97,112,101,0), String.fromCharCode(104,101,120,116,105,108,101,95,109,95,57,54,0)];
          let giflivestreamingB = String.fromCharCode(122,95,53,55,95,107,101,121,103,101,110,0);
         controlG = [j_managerM.length + 3];
         j_managerM = `${2 | giflivestreamingB.length}`;
         connectionG = [connectionG.length % (Math.max(giflivestreamingB.length, 3))];
       let stringe: Array<any> = [930, 635, 414];
       let whitebellH: Array<any> = [String.fromCharCode(100,101,112,101,110,100,95,113,95,52,0), String.fromCharCode(121,117,118,116,101,115,116,95,98,95,49,52,0)];
       let libhermesd = true;
       let catagoryl = false;
         libhermesd = stringe.length <= 46;
         schedulem += `${1 / (Math.max(7, controlG.length))}`;
      iconwatchnowQ += `${libfbjniW.size % (Math.max(controlG.length, 4))}`;
      auto_oxA += `${libfbjniW.size << (Math.min(4, Math.abs(parseInt(`${plashx}`))))}`;
   let catagoryX = 8272887 <= iconmegaphoneu.length;
   do {
      iconmegaphoneu = [sinai.size << (Math.min(Math.abs(1), 2))];
      if (catagoryX) {
         break;
      }
   } while ((5 < iconmegaphoneu.length) && catagoryX);
       let anythink8 = 5.0;
       let anytimed = false;
          let moreN: Array<any> = [409, 922];
         anythink8 *= parseFloat(`${3}`);
         moreN.push(moreN.length * 2);
      if (anytimed) {
         anytimed = !anytimed;
      }
         anytimed = !anytimed;
       let bannere = false;
         anythink8 /= Math.max((parseFloat(`${(anytimed ? 4 : 2) | parseInt(`${anythink8}`)}`)), 1);
      if (!bannere) {
          let videojsM = String.fromCharCode(118,95,55,55,95,112,111,114,116,101,114,0);
          let iconchatsendv = false;
          let backiconmaskJ: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,103,122,105,112,112,101,100,0),2], [String.fromCharCode(108,105,118,101,109,111,100,101,95,57,95,50,55,0),863], [String.fromCharCode(105,95,49,50,95,112,104,112,0),770]]);
          let abidetect_ = 2.0;
         anythink8 /= Math.max(4, parseFloat(`${3 / (Math.max(10, backiconmaskJ.size))}`));
         videojsM = "2";
         iconchatsendv = videojsM.length == 40;
         backiconmaskJ = new Map([[videojsM, 2 - videojsM.length]]);
         abidetect_ -= 3;
      }
      iconmegaphoneu.push(iconmegaphoneu.length & iconviewerb.length);
   while (iconviewerb.length == iconqq_.size) {
       let temperatureY = 5.0;
       let editm = 2.0;
       let clubU = 4;
         clubU *= 3;
      for (let j = 0; j < 3; j++) {
          let iconedit6 = String.fromCharCode(97,99,111,100,101,99,95,54,95,52,55,0);
          let play1 = String.fromCharCode(114,105,110,103,98,97,99,107,95,116,95,49,0);
         temperatureY *= play1.length + 1;
         iconedit6 += `${iconedit6.length * iconedit6.length}`;
         play1 = `${(iconedit6 == String.fromCharCode(67,0) ? iconedit6.length : iconedit6.length)}`;
      }
      while ((clubU * 2) == 3 || (clubU >> (Math.min(Math.abs(2), 5))) == 2) {
         editm /= Math.max(5, parseFloat(`${parseInt(`${temperatureY}`) << (Math.min(4, Math.abs(3)))}`));
         break;
      }
      for (let x = 0; x < 1; x++) {
         clubU <<= Math.min(Math.abs(3 / (Math.max(parseInt(`${editm}`), 2))), 4);
      }
      let encryptO = 5437897.0 <= editm;
      do {
          let left3 = 0.0;
         editm -= parseFloat(`${parseInt(`${temperatureY}`)}`);
         left3 += parseInt(`${left3}`) >> (Math.min(5, Math.abs(3)));
         if (encryptO) {
            break;
         }
      } while ((editm > 5.0) && encryptO);
      let alerth = clubU <= 6272545;
      do {
          let colorsN = 2.0;
          let libswresampleF = 0.0;
         clubU -= parseInt(`${temperatureY}`);
         colorsN /= Math.max(4, 3 & parseInt(`${colorsN}`));
         libswresampleF /= Math.max(parseFloat(`${parseInt(`${colorsN}`) * 2}`), 2);
         if (alerth) {
            break;
         }
      } while (((temperatureY / (Math.max(8, clubU))) == 2.69 || 1.82 == (temperatureY / (Math.max(2.69, 4)))) && alerth);
         temperatureY /= Math.max(3, parseInt(`${temperatureY}`) << (Math.min(5, Math.abs(2))));
       let defaultbasketballbgp = 2.0;
          let profile9 = 0.0;
          let activel = 1;
          let matchesg = 0.0;
         editm *= parseFloat(`${parseInt(`${matchesg}`)}`);
         profile9 /= Math.max(4, parseInt(`${profile9}`) - 2);
         activel -= activel;
         matchesg += parseInt(`${profile9}`) % (Math.max(3, activel));
      iconqq_.set(`${sinai.size}`, iconqq_.size << (Math.min(Math.abs(2), 4)));
      break;
   }
      iconwatchnowQ = `${1 >> (Math.min(4, Math.abs(libfbjniW.size)))}`;
      qaag2 += parseFloat(`${predictionbannershared1.length - auto_oxA.length}`);
      iconqq_ = new Map([[`${iconqq_.size}`, (String.fromCharCode(51,0) == predictionbannershared1 ? iconqq_.size : predictionbannershared1.length)]]);
      iconqq_.set(`${iconqq_.size}`, iconqq_.size);
   if (!Array.from(iconqq_.values()).includes(qaag2)) {
       let libflipper2 = 3.0;
       let attributedstringq: Map<any, any> = new Map([[String.fromCharCode(108,95,50,95,105,114,114,101,108,118,97,110,116,0),555], [String.fromCharCode(107,95,50,57,95,116,104,101,110,97,98,108,101,0),728], [String.fromCharCode(97,108,103,115,95,117,95,55,54,0),51]]);
       let upgraded: Array<any> = [312, 317, 815];
      if (Array.from(attributedstringq.keys()).includes(`${libflipper2}`)) {
         attributedstringq.set(`${libflipper2}`, 1 * attributedstringq.size);
      }
      if (!Array.from(attributedstringq.keys()).includes(`${libflipper2}`)) {
          let j_animationl = String.fromCharCode(101,95,51,55,95,116,105,112,0);
         attributedstringq = new Map([[`${upgraded.length}`, (j_animationl == String.fromCharCode(97,0) ? upgraded.length : j_animationl.length)]]);
      }
         upgraded = [1 >> (Math.min(1, upgraded.length))];
         upgraded.push(attributedstringq.size + upgraded.length);
         libflipper2 /= Math.max(attributedstringq.size << (Math.min(upgraded.length, 1)), 3);
         upgraded = [attributedstringq.size];
         attributedstringq = new Map([[`${attributedstringq.size}`, 1]]);
          let formd: Array<any> = [44, 2];
          let libsgcoret = 0.0;
          let league_ = true;
         attributedstringq.set(`${upgraded.length}`, upgraded.length);
         formd.push(parseInt(`${libsgcoret}`) / (Math.max(formd.length, 5)));
         libsgcoret += parseFloat(`${1}`);
         league_ = formd.length == 68;
      for (let q = 0; q < 1; q++) {
         upgraded.push(upgraded.length % (Math.max(2, 3)));
      }
      qaag2 -= parseFloat(`${2 - orangetick1.length}`);
   }
      moonW *= parseFloat(`${orangetick1.length}`);
   let basketballiconH = auto_oxA.length >= 5880722;
   do {
      auto_oxA += `${sinai.size % (Math.max(1, parseInt(`${gmailL}`)))}`;
      if (basketballiconH) {
         break;
      }
   } while ((!auto_oxA.endsWith(`${gmailL}`)) && basketballiconH);
   if ((sinai.size | 5) == 2) {
       let iconshare4 = true;
          let catalogy = 1.0;
          let mounting2 = String.fromCharCode(115,97,109,105,95,106,95,51,51,0);
          let philippinesa: Array<any> = [793, 285, 136];
         iconshare4 = philippinesa.includes(iconshare4);
         catalogy += parseFloat(`${2 | mounting2.length}`);
         mounting2 += "1";
         philippinesa.push(mounting2.length ^ parseInt(`${catalogy}`));
      let icontransferclubS = iconshare4 ? !iconshare4 : iconshare4;
      do {
         iconshare4 = (iconshare4 ? iconshare4 : iconshare4);
         if (icontransferclubS) {
            break;
         }
      } while (icontransferclubS && (!iconshare4 || !iconshare4));
      for (let e = 0; e < 1; e++) {
          let project2: Array<any> = [895, 227, 872];
         iconshare4 = ((project2.length ^ (iconshare4 ? 95 : project2.length)) > 95);
      }
      sinai = new Map([[`${iconqq_.size}`, iconqq_.size]]);
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FWhatsapp);

       let libtanq = String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,95,99,95,54,53,0);
      if (libtanq.length >= libtanq.length) {
         libtanq += `${libtanq.length}`;
      }
       let rounde = String.fromCharCode(107,95,57,52,95,115,105,99,107,0);
       let stationT = String.fromCharCode(118,95,55,51,95,112,101,115,113,0);
         stationT = `${libtanq.length & 3}`;
      predictionS += parseInt(`${moonW}`) + iconmegaphoneu.length;
      plashx += (parseFloat(`${String.fromCharCode(75,0) == orangetick1 ? parseInt(`${moonW}`) : orangetick1.length}`));
   let subsj = 5990063 <= iconmegaphoneu.length;
   do {
       let mbnativea = String.fromCharCode(108,111,111,115,101,95,114,95,51,48,0);
       let bannerU = String.fromCharCode(114,111,103,114,101,115,115,95,103,95,50,55,0);
       let flagT = 0.0;
         flagT *= parseFloat(`${1}`);
      while ((2.35 * flagT) <= 5.53) {
         flagT /= Math.max((parseFloat(`${String.fromCharCode(79,0) == bannerU ? mbnativea.length : bannerU.length}`)), 5);
         break;
      }
         bannerU = "1";
      for (let e = 0; e < 1; e++) {
         bannerU = `${bannerU.length << (Math.min(Math.abs(2), 4))}`;
      }
       let topicW = 4.0;
          let launcherO = 4.0;
          let leftw: Array<any> = [664, 339, 614];
          let orangeclockC: Map<any, any> = new Map([[String.fromCharCode(111,95,50,56,95,101,108,105,109,105,110,97,116,105,111,110,0),915], [String.fromCharCode(119,95,53,57,95,97,114,98,105,116,101,114,0),963], [String.fromCharCode(118,95,51,48,95,116,101,108,101,112,104,111,110,121,0),785]]);
         bannerU += `${mbnativea.length >> (Math.min(3, Math.abs(parseInt(`${launcherO}`))))}`;
         launcherO /= Math.max(4, parseFloat(`${2 + orangeclockC.size}`));
         leftw = [3];
         orangeclockC = new Map([[`${orangeclockC.size}`, 1 - orangeclockC.size]]);
      while ((flagT * parseFloat(`${bannerU.length}`)) == 5.95 || (1 | bannerU.length) == 3) {
         flagT *= parseFloat(`${mbnativea.length ^ 1}`);
         break;
      }
      for (let q = 0; q < 3; q++) {
         bannerU += `${bannerU.length}`;
      }
          let adultB = String.fromCharCode(115,95,51,55,95,114,101,113,117,101,115,116,0);
          let notificationgrayu = String.fromCharCode(111,95,49,52,95,119,104,105,116,101,0);
          let t_animationG: Map<any, any> = new Map([[String.fromCharCode(116,119,105,116,99,104,95,109,95,56,57,0),false ], [String.fromCharCode(101,95,55,95,99,111,110,110,101,99,116,111,114,0),false ]]);
         flagT /= Math.max(parseFloat(`${3 | parseInt(`${topicW}`)}`), 1);
         adultB = `${adultB.length * 2}`;
         notificationgrayu += `${notificationgrayu.length}`;
         t_animationG.set(notificationgrayu, (String.fromCharCode(81,0) == notificationgrayu ? notificationgrayu.length : adultB.length));
      iconmegaphoneu = [iconmegaphoneu.length];
      if (subsj) {
         break;
      }
   } while (subsj && (4 == (3 / (Math.max(1, libfbjniW.size))) && 3 == (iconmegaphoneu.length / (Math.max(libfbjniW.size, 3)))));
   for (let y = 0; y < 1; y++) {
      iconwatchnowQ += "2";
   }
      auto_oxA += "2";
   for (let f = 0; f < 1; f++) {
      moonW += parseFloat(`${2 - iconmegaphoneu.length}`);
   }
      libfbjniW.set(templateprocessory, orangetick1.length);
   let iconuserp = 6080817 >= basketballawayteamM;
   do {
       let zhuboP: Array<any> = [120, 686, 284];
       let sharewhitey = String.fromCharCode(116,95,53,50,95,104,101,97,112,0);
       let layout7 = String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,109,95,54,57,0);
       let basketballmatchdetailbgK: Map<any, any> = new Map([[String.fromCharCode(111,110,101,112,97,115,115,95,52,95,50,54,0),599], [String.fromCharCode(112,95,52,50,95,109,117,108,0),757], [String.fromCharCode(114,101,97,110,97,108,121,122,101,95,48,95,50,54,0),60]]);
       let stylex = String.fromCharCode(114,95,53,95,103,97,117,115,115,105,97,110,105,105,114,100,0);
      let bottomo = basketballmatchdetailbgK.size >= 9123118;
      do {
         basketballmatchdetailbgK = new Map([[stylex, (sharewhitey == String.fromCharCode(72,0) ? sharewhitey.length : stylex.length)]]);
         if (bottomo) {
            break;
         }
      } while ((!stylex.startsWith(`${basketballmatchdetailbgK.size}`)) && bottomo);
         stylex = `${basketballmatchdetailbgK.size << (Math.min(layout7.length, 3))}`;
         stylex += `${layout7.length}`;
          let subbasketballplayerv = 5;
          let orangedownarrowg = 1.0;
         stylex = "2";
         subbasketballplayerv *= 1 / (Math.max(4, subbasketballplayerv));
         orangedownarrowg += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${orangedownarrowg}`)), 2))}`);
         zhuboP = [(String.fromCharCode(74,0) == stylex ? zhuboP.length : stylex.length)];
      while ((1 | sharewhitey.length) > 4) {
         sharewhitey += "2";
         break;
      }
      let long_zr = basketballmatchdetailbgK.size >= 9808396;
      do {
         basketballmatchdetailbgK = new Map([[`${zhuboP.length}`, zhuboP.length]]);
         if (long_zr) {
            break;
         }
      } while (long_zr && (!Array.from(basketballmatchdetailbgK.values()).includes(zhuboP.length)));
          let basketballdetailsbg8 = 1.0;
          let greyarrowup9 = String.fromCharCode(100,95,55,48,0);
         stylex = `${1 >> (Math.min(4, greyarrowup9.length))}`;
         basketballdetailsbg8 /= Math.max(2, parseFloat(`${1 & parseInt(`${basketballdetailsbg8}`)}`));
         greyarrowup9 = "3";
         sharewhitey = `${sharewhitey.length % (Math.max(10, basketballmatchdetailbgK.size))}`;
      for (let a = 0; a < 2; a++) {
          let push_ = String.fromCharCode(106,95,52,57,95,99,111,110,99,97,116,101,110,97,116,105,111,110,0);
          let const__mE = 4.0;
         sharewhitey = `${stylex.length}`;
         push_ = `${(String.fromCharCode(88,0) == push_ ? parseInt(`${const__mE}`) : push_.length)}`;
         const__mE /= Math.max(3, 3);
      }
         sharewhitey += "2";
         stylex += `${(sharewhitey == String.fromCharCode(90,0) ? sharewhitey.length : zhuboP.length)}`;
      for (let t = 0; t < 1; t++) {
         zhuboP = [zhuboP.length];
      }
          let gesture3 = 5.0;
          let modalR = String.fromCharCode(119,101,98,115,95,107,95,50,55,0);
          let libaneB = 4.0;
         sharewhitey = "3";
         gesture3 /= Math.max(parseFloat(`${parseInt(`${libaneB}`)}`), 4);
         modalR = `${(String.fromCharCode(87,0) == modalR ? modalR.length : parseInt(`${libaneB}`))}`;
      if ((layout7.length % (Math.max(5, 2))) > 4) {
         zhuboP.push((layout7 == String.fromCharCode(101,0) ? stylex.length : layout7.length));
      }
      basketballawayteamM += (predictionbannershared1 == String.fromCharCode(117,0) ? predictionbannershared1.length : parseInt(`${qaag2}`));
      if (iconuserp) {
         break;
      }
   } while (iconuserp && (basketballawayteamM > gmailL));
       let nextU: Map<any, any> = new Map([[String.fromCharCode(103,98,114,97,112,95,102,95,56,0),727], [String.fromCharCode(117,112,99,111,109,105,110,103,95,57,95,50,56,0),644], [String.fromCharCode(116,95,50,95,97,100,97,112,116,105,118,101,0),287]]);
         nextU = new Map([[`${nextU.size}`, nextU.size + 3]]);
          let layoutn = 0;
          let thumbnaili = 3.0;
         nextU.set(`${thumbnaili}`, parseInt(`${thumbnaili}`) >> (Math.min(4, Math.abs(2))));
         layoutn %= Math.max(2, layoutn);
      while (5 >= (nextU.size & 3) || (nextU.size & nextU.size) >= 3) {
          let codegenh = String.fromCharCode(120,95,54,49,95,104,97,110,100,108,101,115,0);
          let iconsettingF = 2.0;
         nextU = new Map([[codegenh, codegenh.length & 3]]);
         iconsettingF *= parseFloat(`${3}`);
         break;
      }
      moonW *= parseFloat(`${templateprocessory.length & predictionbannershared1.length}`);
      orangetick1 = `${(iconviewerb == String.fromCharCode(71,0) ? predictionbannershared1.length : iconviewerb.length)}`;
      libfbjniW.set(predictionbannershared1, predictionbannershared1.length);
   if (sinai.get(`${basketballawayteamM}`) == null) {
       let username6 = 4.0;
       let backwardA = 5;
       let bangY: Map<any, any> = new Map([[String.fromCharCode(120,95,56,48,95,105,115,115,117,105,110,103,0),960], [String.fromCharCode(119,95,51,50,95,97,108,101,114,116,0),35]]);
       let onewsy = 1.0;
       let traminib = String.fromCharCode(119,95,56,50,95,97,117,116,111,99,108,111,115,101,0);
      let arrowrightb = username6 >= 6891018.0;
      do {
         username6 /= Math.max(4, backwardA);
         if (arrowrightb) {
            break;
         }
      } while ((2 == backwardA) && arrowrightb);
      if (bangY.size >= 1) {
         bangY = new Map([[`${bangY.size}`, 2 >> (Math.min(1, Math.abs(bangY.size)))]]);
      }
          let graphS = String.fromCharCode(110,95,53,55,95,115,101,116,114,97,110,103,101,0);
          let nodeQ = 5.0;
          let lessW: Map<any, any> = new Map([[String.fromCharCode(111,95,54,50,95,115,112,97,99,105,110,103,0),95], [String.fromCharCode(105,95,49,53,95,97,117,116,111,97,114,99,104,105,118,101,0),797]]);
         traminib = `${graphS.length - parseInt(`${username6}`)}`;
         graphS += `${parseInt(`${nodeQ}`)}`;
         nodeQ /= Math.max(parseFloat(`${lessW.size}`), 5);
         lessW = new Map([[`${lessW.size}`, parseInt(`${nodeQ}`) & lessW.size]]);
      let anythinkE = backwardA <= 5638238;
      do {
         backwardA <<= Math.min(Math.abs(traminib.length << (Math.min(Math.abs(3), 1))), 1);
         if (anythinkE) {
            break;
         }
      } while ((3 > (backwardA + 3)) && anythinkE);
      let dragL = String.fromCharCode(52,98,99,111,99,0) == traminib;
      do {
         traminib += `${backwardA}`;
         if (dragL) {
            break;
         }
      } while (((5 - traminib.length) >= 3 || (bangY.size - traminib.length) >= 5) && dragL);
      while ((4 % (Math.max(10, backwardA))) < 1 && (backwardA % (Math.max(5, bangY.size))) < 4) {
          let themel = String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,117,95,57,57,0);
         backwardA /= Math.max(parseInt(`${onewsy}`), 5);
         themel += `${themel.length}`;
         break;
      }
      let shielddoneM = 7832538.0 <= onewsy;
      do {
          let settingsM: Array<any> = [198, 115, 908];
          let t_positiont = 3.0;
          let assists: Array<any> = [String.fromCharCode(114,101,108,111,97,100,95,122,95,54,48,0), String.fromCharCode(112,97,103,105,110,103,95,107,95,52,52,0), String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,113,95,54,52,0)];
         onewsy *= parseFloat(`${3}`);
         settingsM.push(parseInt(`${t_positiont}`));
         t_positiont -= settingsM.length * 3;
         assists = [parseInt(`${t_positiont}`) >> (Math.min(settingsM.length, 5))];
         if (shielddoneM) {
            break;
         }
      } while (shielddoneM && ((bangY.size % 5) < 3));
         onewsy /= Math.max(parseFloat(`${bangY.size}`), 5);
         backwardA <<= Math.min(3, Math.abs(parseInt(`${username6}`) ^ backwardA));
         username6 += (String.fromCharCode(98,0) == traminib ? parseInt(`${onewsy}`) : traminib.length);
      if (1 > (traminib.length - parseInt(`${onewsy}`)) || 2.15 > (4.5 - onewsy)) {
         onewsy *= parseFloat(`${3}`);
      }
          let condensed7: Map<any, any> = new Map([[String.fromCharCode(110,95,56,51,95,105,110,116,114,97,120,109,98,117,118,0),586], [String.fromCharCode(118,95,49,54,95,112,114,101,115,117,109,101,0),689]]);
          let awayteamfield0 = 1.0;
          let sportZ = String.fromCharCode(108,95,51,54,95,102,109,97,100,100,0);
         username6 -= bangY.size & traminib.length;
         condensed7 = new Map([[sportZ, sportZ.length << (Math.min(1, Math.abs(parseInt(`${awayteamfield0}`))))]]);
         awayteamfield0 -= (parseFloat(`${sportZ == String.fromCharCode(90,0) ? sportZ.length : parseInt(`${awayteamfield0}`)}`));
      while ((backwardA / (Math.max(parseInt(`${username6}`), 9))) < 3 && (backwardA / (Math.max(6, username6))) < 5.13) {
         backwardA -= bangY.size & parseInt(`${username6}`);
         break;
      }
      while (2.61 >= (username6 / 5.70)) {
         username6 -= parseInt(`${onewsy}`);
         break;
      }
      for (let f = 0; f < 1; f++) {
          let hoverC: Array<any> = [564, 417];
         username6 /= Math.max((traminib == String.fromCharCode(111,0) ? traminib.length : parseInt(`${onewsy}`)), 2);
         hoverC = [hoverC.length];
      }
      basketballawayteamM *= auto_oxA.length << (Math.min(Math.abs(1), 4));
   }
      predictionS -= parseInt(`${predictionS}`);
      iconmegaphoneu = [2 ^ iconmegaphoneu.length];
        this.#triggerCustomEvent('view', IIPhoneshare.FPhotoTail);
    }

    static userCenterVipPayViewsAnalytics = () => {
       let halfq: Array<any> = [54, 760, 193];
    let basketballplayerplaceholderc = 0.0;
    let mutedB = String.fromCharCode(114,97,99,101,95,51,95,49,56,0);
    let jingdongV = 2.0;
    let theme8 = 0.0;
    let middlesoundu = String.fromCharCode(105,95,53,51,95,111,118,101,114,114,105,100,101,0);
    let iconeye0 = true;
    let policyT: Map<any, any> = new Map([[String.fromCharCode(99,95,51,52,95,112,117,98,107,101,121,0),String.fromCharCode(114,95,55,53,95,114,101,97,100,111,110,108,121,0)], [String.fromCharCode(115,111,119,97,107,101,117,112,95,49,95,49,48,0),String.fromCharCode(104,97,114,100,119,97,114,101,95,121,95,50,56,0)], [String.fromCharCode(99,111,111,107,100,97,116,97,95,121,95,49,50,0),String.fromCharCode(117,95,52,57,95,118,111,105,99,101,109,97,105,108,0)]]);
    let whatsappT = 5;
    let yellowK = String.fromCharCode(110,101,119,116,101,107,95,109,95,55,50,0);
    let entryr = true;
    let disconnectedlogoR = String.fromCharCode(118,95,57,50,95,103,114,97,116,105,99,117,108,101,0);
    let d_lockX = String.fromCharCode(117,95,51,51,95,97,118,115,116,114,105,110,103,0);
    let libfabricjniX = 2.0;
      middlesoundu += `${parseInt(`${basketballplayerplaceholderc}`)}`;
       let libreanimatedi = String.fromCharCode(106,95,55,48,95,114,101,102,105,110,101,114,0);
          let awayw = 0.0;
          let sliderZ = 2.0;
         libreanimatedi = `${parseInt(`${awayw}`) - 1}`;
         awayw -= parseInt(`${sliderZ}`);
      while (libreanimatedi == String.fromCharCode(70,0)) {
         libreanimatedi = `${3 ^ libreanimatedi.length}`;
         break;
      }
         libreanimatedi = `${2 % (Math.max(4, libreanimatedi.length))}`;
      iconeye0 = middlesoundu.length <= policyT.size;
      yellowK += "1";
   if (1.60 <= (jingdongV + 2.77) || (basketballplayerplaceholderc + 2.77) <= 5.10) {
      basketballplayerplaceholderc -= 1;
   }
       let incidentc = String.fromCharCode(110,99,98,99,95,104,95,52,57,0);
      if (incidentc == String.fromCharCode(104,0) && incidentc == String.fromCharCode(54,0)) {
         incidentc = `${incidentc.length}`;
      }
      if (incidentc != String.fromCharCode(52,0)) {
         incidentc = `${1 | incidentc.length}`;
      }
         incidentc = `${incidentc.length >> (Math.min(Math.abs(3), 3))}`;
      mutedB += `${(String.fromCharCode(73,0) == mutedB ? mutedB.length : parseInt(`${jingdongV}`))}`;
      middlesoundu = `${policyT.size}`;

        this.#triggerUmengEvent(FSliderCenter.FGoallogo);

       let gifgoalbgu = 1.0;
       let themee = 3.0;
      for (let q = 0; q < 1; q++) {
          let dragcloseI = String.fromCharCode(115,105,103,104,95,52,95,57,57,0);
          let twitteri = String.fromCharCode(115,107,105,112,112,97,98,108,101,95,111,95,51,49,0);
          let matchinactive2 = String.fromCharCode(101,120,112,97,110,100,101,114,95,98,95,56,51,0);
         themee *= (matchinactive2 == String.fromCharCode(80,0) ? parseInt(`${gifgoalbgu}`) : matchinactive2.length);
         dragcloseI = `${3 + twitteri.length}`;
         twitteri += `${twitteri.length}`;
      }
          let temperatured = 1;
          let redscoreballi = true;
         themee -= 2 + parseInt(`${themee}`);
         temperatured <<= Math.min(Math.abs(temperatured), 1);
         redscoreballi = redscoreballi || 89 > temperatured;
         themee -= 3;
      let playercommon4 = gifgoalbgu <= 7934759.0;
      do {
          let eventsplashC = String.fromCharCode(99,111,109,109,105,116,95,104,95,54,0);
          let unreadU = String.fromCharCode(110,95,56,55,95,114,101,112,111,114,116,101,114,0);
          let short_euC = String.fromCharCode(122,95,49,50,95,97,99,116,111,114,0);
          let yellowvideoliveT: Array<any> = [812, 313];
          let faviconL = String.fromCharCode(109,117,115,105,99,95,48,95,57,0);
         gifgoalbgu /= Math.max(faviconL.length, 1);
         eventsplashC += `${eventsplashC.length}`;
         unreadU += `${short_euC.length & eventsplashC.length}`;
         short_euC += `${short_euC.length}`;
         yellowvideoliveT.push((eventsplashC == String.fromCharCode(117,0) ? eventsplashC.length : short_euC.length));
         faviconL = `${unreadU.length / 3}`;
         if (playercommon4) {
            break;
         }
      } while ((themee == 1.41) && playercommon4);
      if (gifgoalbgu <= 2.58) {
         gifgoalbgu += 1 / (Math.max(parseInt(`${gifgoalbgu}`), 8));
      }
      for (let g = 0; g < 2; g++) {
          let rewindM = true;
          let homeinactivey: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,116,121,112,101,115,95,106,95,55,49,0),true ], [String.fromCharCode(115,116,114,105,100,101,98,95,116,95,50,51,0),false ], [String.fromCharCode(103,114,97,100,105,101,110,116,115,95,105,95,50,49,0),true ]]);
          let roundp = true;
          let libcxxcomponentsF = String.fromCharCode(99,117,116,101,115,116,95,114,95,53,55,0);
          let kuaishouv = String.fromCharCode(118,95,52,52,95,101,108,101,118,97,116,101,0);
         gifgoalbgu *= 3;
         rewindM = libcxxcomponentsF.length == kuaishouv.length;
         homeinactivey = new Map([[`${homeinactivey.size}`, ((rewindM ? 3 : 1) * 3)]]);
         roundp = (22 <= ((rewindM ? 22 : homeinactivey.size) ^ homeinactivey.size));
         libcxxcomponentsF = `${(3 * (rewindM ? 5 : 5))}`;
         kuaishouv += `${((rewindM ? 2 : 5) - 3)}`;
      }
      yellowK = `${parseInt(`${theme8}`) / 1}`;
       let yellowcirclebgl = String.fromCharCode(111,95,50,54,95,115,98,114,100,115,112,0);
       let gradlewH = String.fromCharCode(109,95,50,51,95,97,117,116,111,99,111,114,114,0);
       let yellowanimationliveR: Array<any> = [436, 500, 34];
      while (yellowcirclebgl.startsWith(gradlewH)) {
          let league3 = 3;
          let p_playera: Map<any, any> = new Map([[String.fromCharCode(122,95,52,49,95,114,101,110,100,101,114,105,110,103,0),514], [String.fromCharCode(113,95,56,49,95,101,110,100,105,110,103,0),603], [String.fromCharCode(104,97,115,104,101,100,95,97,95,49,52,0),973]]);
          let colorsW = 5.0;
          let dicelogo_ = String.fromCharCode(111,95,52,57,95,115,101,97,0);
          let showJ: Array<any> = [151, 533];
         yellowcirclebgl = `${gradlewH.length}`;
         league3 -= 3 / (Math.max(6, p_playera.size));
         p_playera = new Map([[`${p_playera.size}`, league3 | 1]]);
         colorsW /= Math.max(1, 2 << (Math.min(Math.abs(league3), 1)));
         dicelogo_ = `${parseInt(`${colorsW}`) ^ league3}`;
         showJ.push(p_playera.size >> (Math.min(Math.abs(1), 4)));
         break;
      }
       let playlistH = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,115,95,117,95,55,51,0);
      while (1 <= yellowanimationliveR.length) {
         yellowcirclebgl = `${yellowcirclebgl.length}`;
         break;
      }
      if (2 > (yellowanimationliveR.length >> (Math.min(playlistH.length, 3))) || 4 > (2 >> (Math.min(4, yellowanimationliveR.length)))) {
         playlistH += `${yellowanimationliveR.length - playlistH.length}`;
      }
         yellowanimationliveR = [yellowanimationliveR.length & gradlewH.length];
          let footballtrophyw: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,104,108,105,116,0),783], [String.fromCharCode(114,95,57,48,95,99,111,110,116,114,111,108,108,101,114,0),955]]);
          let libavformatM: Array<any> = [String.fromCharCode(97,95,50,50,95,112,114,105,109,97,108,105,116,121,0), String.fromCharCode(117,99,111,110,115,116,95,51,95,53,55,0), String.fromCharCode(116,95,55,50,95,99,111,110,103,101,115,116,105,111,110,0)];
          let hiad6: Map<any, any> = new Map([[String.fromCharCode(115,95,56,52,95,115,101,109,97,110,116,105,99,0),940], [String.fromCharCode(118,95,55,57,95,112,97,103,0),361]]);
         yellowcirclebgl = `${footballtrophyw.size - 3}`;
         footballtrophyw.set(`${libavformatM.length}`, 1);
         libavformatM = [libavformatM.length + hiad6.size];
         hiad6.set(`${libavformatM.length}`, 3);
         yellowcirclebgl += `${1 * gradlewH.length}`;
         yellowcirclebgl += `${yellowcirclebgl.length + gradlewH.length}`;
         yellowanimationliveR = [yellowanimationliveR.length ^ 1];
      theme8 *= parseFloat(`${yellowcirclebgl.length >> (Math.min(Math.abs(3), 3))}`);
       let eyecloseZ: Array<any> = [236, 739, 971];
       let privilege_ = String.fromCharCode(112,105,101,95,49,95,56,0);
       let dragcloseX = String.fromCharCode(118,95,55,95,118,105,100,101,111,115,116,114,101,97,109,0);
      if (privilege_.endsWith(`${eyecloseZ.length}`)) {
          let brightnessu = String.fromCharCode(98,97,115,105,99,95,111,95,53,49,0);
         privilege_ = `${privilege_.length * 3}`;
         brightnessu = `${brightnessu.length % (Math.max(brightnessu.length, 10))}`;
      }
         privilege_ = "1";
      for (let r = 0; r < 1; r++) {
         privilege_ += `${2 >> (Math.min(3, eyecloseZ.length))}`;
      }
       let loadingb = String.fromCharCode(102,95,57,49,95,100,105,115,99,111,118,101,114,101,100,0);
       let matchesj = String.fromCharCode(121,95,50,49,95,115,105,103,110,97,108,115,0);
      if (privilege_.length > matchesj.length) {
          let p_lock0: Map<any, any> = new Map([[String.fromCharCode(121,95,50,50,95,102,102,109,97,116,104,0),734], [String.fromCharCode(104,95,51,95,118,97,114,105,110,116,115,0),408]]);
          let iconscheduleH = String.fromCharCode(109,98,101,100,95,99,95,50,48,0);
         privilege_ += "3";
         p_lock0.set(`${iconscheduleH}`, 2);
         iconscheduleH = `${(iconscheduleH == String.fromCharCode(77,0) ? iconscheduleH.length : p_lock0.size)}`;
      }
         privilege_ = `${matchesj.length}`;
      if (matchesj == String.fromCharCode(74,0)) {
         loadingb += `${matchesj.length % (Math.max(2, 6))}`;
      }
          let redcirclebgd = 1;
          let iconsettingj = false;
         loadingb += `${redcirclebgd}`;
         redcirclebgd &= ((iconsettingj ? 2 : 5) & (iconsettingj ? 5 : 1));
      if (1 <= (privilege_.length << (Math.min(Math.abs(2), 1))) || 1 <= (privilege_.length << (Math.min(Math.abs(2), 3)))) {
          let weibog: Array<any> = [String.fromCharCode(109,106,112,101,103,98,95,115,95,51,52,0), String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,106,95,57,49,0)];
          let arrow5 = false;
          let iconarrowleftH: Map<any, any> = new Map([[String.fromCharCode(99,111,114,101,105,109,97,103,101,95,110,95,55,57,0),String.fromCharCode(113,95,53,51,95,113,117,97,100,116,114,101,101,0)], [String.fromCharCode(118,95,56,55,95,98,115,102,115,0),String.fromCharCode(115,110,111,119,100,97,116,97,95,115,95,51,55,0)]]);
         eyecloseZ = [((arrow5 ? 4 : 1) & weibog.length)];
         weibog.push(iconarrowleftH.size / (Math.max(4, iconarrowleftH.size)));
         arrow5 = 60 == iconarrowleftH.size && 60 == iconarrowleftH.size;
      }
      basketballplayerplaceholderc += 1;
   for (let r = 0; r < 2; r++) {
       let neon8 = 1;
       let stringj = String.fromCharCode(117,110,114,101,115,111,108,118,101,100,95,110,95,53,52,0);
       let penaltymatchicon9 = String.fromCharCode(106,95,52,57,95,114,101,111,114,100,101,114,97,98,108,101,0);
       let jingdong8 = 5.0;
      while (2 > (3 + penaltymatchicon9.length)) {
         penaltymatchicon9 = `${(String.fromCharCode(117,0) == penaltymatchicon9 ? penaltymatchicon9.length : parseInt(`${jingdong8}`))}`;
         break;
      }
       let tickj = 0.0;
       let chatroombackgroundW = 2.0;
          let episodel = String.fromCharCode(104,95,57,56,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0);
          let taiwanP: Map<any, any> = new Map([[String.fromCharCode(121,95,54,48,95,104,111,110,101,121,0),79], [String.fromCharCode(106,95,56,51,95,97,103,103,114,101,103,97,116,101,115,0),96], [String.fromCharCode(119,95,49,51,95,100,101,99,105,115,105,111,110,0),776]]);
          let expireds = String.fromCharCode(101,95,52,57,95,117,110,97,114,99,104,105,118,101,0);
         jingdong8 -= 1;
         episodel += `${episodel.length >> (Math.min(Math.abs(2), 5))}`;
         taiwanP.set(`${expireds}`, 1 + expireds.length);
      if (5 < penaltymatchicon9.length) {
         penaltymatchicon9 += `${(String.fromCharCode(116,0) == stringj ? neon8 : stringj.length)}`;
      }
         neon8 |= parseInt(`${chatroombackgroundW}`) << (Math.min(4, Math.abs(2)));
      while (3.35 <= jingdong8) {
         jingdong8 += neon8 / (Math.max(parseInt(`${jingdong8}`), 5));
         break;
      }
         neon8 %= Math.max(5, stringj.length);
      if (chatroombackgroundW <= 3.60) {
          let sendW = String.fromCharCode(104,95,49,50,95,100,105,115,99,117,115,115,105,111,110,0);
          let analyticn = 5.0;
         stringj = `${parseInt(`${tickj}`) & parseInt(`${chatroombackgroundW}`)}`;
         sendW += `${2 >> (Math.min(1, Math.abs(parseInt(`${analyticn}`))))}`;
         analyticn -= (sendW == String.fromCharCode(106,0) ? sendW.length : parseInt(`${analyticn}`));
      }
      if ((4 & neon8) == 5) {
         jingdong8 *= neon8;
      }
         penaltymatchicon9 += `${(stringj == String.fromCharCode(121,0) ? stringj.length : parseInt(`${chatroombackgroundW}`))}`;
          let iconwechato: Array<any> = [98, 806];
          let detailS = String.fromCharCode(114,95,55,54,95,108,108,110,119,0);
         stringj += `${iconwechato.length}`;
         iconwechato = [detailS.length];
         detailS = `${(String.fromCharCode(67,0) == detailS ? detailS.length : detailS.length)}`;
          let hover6 = 3;
          let bootsplashG = 5.0;
          let pusho = 1.0;
         tickj /= Math.max(parseFloat(`${hover6}`), 2);
         bootsplashG += parseFloat(`${parseInt(`${pusho}`) ^ 2}`);
         pusho += parseInt(`${bootsplashG}`) & parseInt(`${pusho}`);
      iconeye0 = mutedB.length >= 59;
   }
       let windg: Array<any> = [String.fromCharCode(114,101,115,105,122,101,95,97,95,49,57,0), String.fromCharCode(115,105,103,110,97,108,95,56,95,52,56,0), String.fromCharCode(119,95,55,95,118,105,111,108,101,116,0)];
       let become9 = 5.0;
       let mountingY = 5.0;
          let predictionbannersharedf = 1.0;
          let gmailW = String.fromCharCode(116,95,54,50,95,100,105,118,105,100,101,114,115,0);
         windg = [gmailW.length >> (Math.min(Math.abs(1), 5))];
         predictionbannersharedf *= parseInt(`${predictionbannersharedf}`);
         gmailW += `${parseInt(`${predictionbannersharedf}`)}`;
         mountingY /= Math.max(5, parseInt(`${mountingY}`) & 2);
      if ((2.95 + become9) > 2.19 && (become9 + mountingY) > 2.95) {
         mountingY -= windg.length;
      }
         become9 /= Math.max(4, windg.length | 3);
         become9 /= Math.max(3, 3);
      iconeye0 = 9 == whatsappT;
   if (jingdongV > theme8) {
      theme8 /= Math.max(1, parseFloat(`${middlesoundu.length}`));
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FGoallogo);

   if ((halfq.length + basketballplayerplaceholderc) > 2.63 || (2.63 + basketballplayerplaceholderc) > 4.54) {
      basketballplayerplaceholderc += 1 * policyT.size;
   }
   if (theme8 == 3.83 && (theme8 - 3.83) == 4.0) {
      theme8 *= parseFloat(`${1}`);
   }
   if ((2 << (Math.min(4, yellowK.length))) == 4) {
       let nativeexk = String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,95,109,95,57,54,0);
         nativeexk += "1";
         nativeexk = `${nativeexk.length + 3}`;
         nativeexk = `${nativeexk.length + nativeexk.length}`;
      whatsappT <<= Math.min(2, Math.abs(3 * whatsappT));
   }
      basketballplayerplaceholderc += (String.fromCharCode(115,0) == mutedB ? middlesoundu.length : mutedB.length);
   let penaltygoalk = entryr ? !entryr : entryr;
   do {
      entryr = jingdongV < 64.63;
      if (penaltygoalk) {
         break;
      }
   } while (penaltygoalk && (entryr));
   while ((yellowK.length | whatsappT) == 4 || 4 == (yellowK.length | 4)) {
      yellowK += "3";
      break;
   }
        this.#triggerCustomEvent('view', IIPhoneshare.FProfileinactive, {
            params: {
                desc_1: 'pay',
            }
        });
    }

    static userCenterVipInviteViewsAnalytics = () => {
       let t_unlockL = String.fromCharCode(117,95,56,57,95,112,111,115,115,105,98,108,101,0);
    let imagenetworkerrO = String.fromCharCode(112,95,52,48,95,114,101,113,117,101,115,116,0);
    let animationsx: Array<any> = [String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,53,95,51,55,0), String.fromCharCode(109,95,49,55,95,112,107,103,99,111,110,102,105,103,0)];
    let cancelk: Map<any, any> = new Map([[String.fromCharCode(99,95,48,95,114,101,97,100,108,105,110,101,0),570], [String.fromCharCode(102,95,56,48,95,116,111,111,108,98,97,114,0),499], [String.fromCharCode(103,117,97,114,100,95,114,95,55,48,0),410]]);
    let huaweiO: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,95,48,95,51,48,0),743], [String.fromCharCode(110,101,119,101,114,95,52,95,55,54,0),980]]);
    let middleG = String.fromCharCode(116,101,120,116,115,95,104,95,52,52,0);
    let sportsB = 3;
    let analytics6 = 4;
    let holderV = String.fromCharCode(105,95,56,52,95,99,111,100,101,115,0);
    let componentregistryc: Array<any> = [String.fromCharCode(101,95,57,95,110,111,116,105,99,101,115,0), String.fromCharCode(108,111,97,116,95,108,95,51,52,0)];
    let termsZ = String.fromCharCode(99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,95,119,95,57,52,0);
    let castO = 4.0;
   for (let k = 0; k < 1; k++) {
       let stringv = 0.0;
       let refreshborderlessM = 1.0;
       let libreactperfloggerjniq = true;
       let profile2: Array<any> = [String.fromCharCode(97,103,101,110,116,115,95,115,95,52,0), String.fromCharCode(112,95,51,57,95,110,100,101,102,0), String.fromCharCode(119,95,49,56,95,109,112,108,97,109,101,0)];
       let libturbomodulejsijniv = 5;
         libreactperfloggerjniq = !libreactperfloggerjniq;
         libreactperfloggerjniq = 84 <= libturbomodulejsijniv;
      while (3 == (profile2.length & 2) || !libreactperfloggerjniq) {
         profile2.push((profile2.length % (Math.max(3, (libreactperfloggerjniq ? 3 : 5)))));
         break;
      }
          let memberE = String.fromCharCode(99,98,108,107,95,102,95,56,0);
         stringv -= parseFloat(`${memberE.length}`);
         refreshborderlessM /= Math.max(2 - parseInt(`${stringv}`), 5);
         profile2 = [libturbomodulejsijniv];
         stringv *= parseFloat(`${libturbomodulejsijniv}`);
      for (let e = 0; e < 1; e++) {
         refreshborderlessM -= parseInt(`${stringv}`) * 3;
      }
      while (5.66 < (4.82 - stringv) && 4.82 < stringv) {
          let reactnativeultimatelistviewH: Array<any> = [693, 66];
          let iconshareg = 2.0;
          let private_ovk = 3.0;
         libreactperfloggerjniq = parseFloat(`${libturbomodulejsijniv}`) <= stringv;
         reactnativeultimatelistviewH = [parseInt(`${private_ovk}`) & 3];
         iconshareg += parseInt(`${iconshareg}`) << (Math.min(1, Math.abs(3)));
         private_ovk -= parseInt(`${iconshareg}`) | reactnativeultimatelistviewH.length;
         break;
      }
         profile2.push(parseInt(`${refreshborderlessM}`) ^ 1);
      for (let h = 0; h < 1; h++) {
         libreactperfloggerjniq = profile2.length >= parseInt(`${stringv}`);
      }
          let baidug = 2.0;
          let previewf = false;
         profile2.push(parseInt(`${refreshborderlessM}`) * 3);
         baidug -= 3 / (Math.max(parseInt(`${baidug}`), 9));
         previewf = 99.99 > baidug && !previewf;
      if (profile2.length > 3) {
         profile2 = [parseInt(`${refreshborderlessM}`) - 1];
      }
         profile2.push(profile2.length);
         profile2.push(libturbomodulejsijniv);
      huaweiO.set(holderV, 1);
   }
       let privilegeH = 5.0;
       let libpangleflippedZ: Array<any> = [359, 297, 774];
       let iconuserr = 3.0;
       let benefitM = 5.0;
       let emojiheartt: Map<any, any> = new Map([[String.fromCharCode(103,95,49,51,95,102,108,105,112,0),0], [String.fromCharCode(107,95,50,52,95,101,113,117,105,118,97,108,101,110,99,101,0),609]]);
         libpangleflippedZ = [2 + libpangleflippedZ.length];
      let libmapbufferjniU = 5151345.0 >= iconuserr;
      do {
         iconuserr /= Math.max(parseInt(`${benefitM}`), 1);
         if (libmapbufferjniU) {
            break;
         }
      } while ((1.33 <= (2 / (Math.max(2, benefitM)))) && libmapbufferjniU);
      let cinit_07 = emojiheartt.size >= 6869289;
      do {
         emojiheartt.set(`${privilegeH}`, parseInt(`${benefitM}`));
         if (cinit_07) {
            break;
         }
      } while (cinit_07 && (!Array.from(emojiheartt.values()).includes(privilegeH)));
         libpangleflippedZ.push(3);
      holderV += `${analytics6 * 1}`;
      sportsB &= (String.fromCharCode(83,0) == middleG ? middleG.length : sportsB);
      cancelk.set(`${analytics6}`, analytics6);
   if (2 > (sportsB * 5) || (sportsB * t_unlockL.length) > 5) {
      t_unlockL = `${t_unlockL.length & animationsx.length}`;
   }
   if (4 == (analytics6 % (Math.max(4, 2))) || 4 == (analytics6 % 4)) {
       let iconeyeo = String.fromCharCode(108,95,54,55,95,104,119,102,114,97,109,101,0);
       let user8 = String.fromCharCode(105,109,109,101,100,105,97,116,101,95,99,95,50,50,0);
       let libcxxcomponentsc = 1.0;
       let gmailk = 5;
      if (1 >= user8.length) {
         libcxxcomponentsc -= parseFloat(`${1 ^ gmailk}`);
      }
      while (!iconeyeo.startsWith(`${libcxxcomponentsc}`)) {
         libcxxcomponentsc += parseFloat(`${parseInt(`${libcxxcomponentsc}`)}`);
         break;
      }
       let smallbrightnessA = String.fromCharCode(102,95,57,53,95,114,101,108,97,117,110,99,104,0);
         iconeyeo = `${user8.length}`;
          let stepo = false;
         gmailk >>= Math.min(Math.abs(3 ^ smallbrightnessA.length), 2);
         stepo = (stepo ? !stepo : !stepo);
      for (let y = 0; y < 1; y++) {
         user8 += `${3 - parseInt(`${libcxxcomponentsc}`)}`;
      }
      let iconeyeS = gmailk <= 6418503;
      do {
         gmailk >>= Math.min(Math.abs((String.fromCharCode(114,0) == smallbrightnessA ? user8.length : smallbrightnessA.length)), 4);
         if (iconeyeS) {
            break;
         }
      } while ((gmailk >= 3) && iconeyeS);
         smallbrightnessA = `${gmailk / (Math.max(8, user8.length))}`;
      while ((2 * iconeyeo.length) < 5) {
          let libreactperfloggerjnig = true;
          let moviesF = 0.0;
          let temperatureh = String.fromCharCode(97,110,103,101,95,101,95,56,0);
          let bottomc: Array<any> = [303, 248];
          let statisticsinactiveL = String.fromCharCode(116,95,51,57,95,110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0);
         iconeyeo = `${((libreactperfloggerjnig ? 5 : 2))}`;
         libreactperfloggerjnig = temperatureh.length == bottomc.length;
         moviesF *= (parseFloat(`${String.fromCharCode(82,0) == temperatureh ? temperatureh.length : bottomc.length}`));
         statisticsinactiveL += `${statisticsinactiveL.length}`;
         break;
      }
      while (2 >= (gmailk | 5) || 1 >= (iconeyeo.length | 5)) {
         iconeyeo += `${1 & parseInt(`${libcxxcomponentsc}`)}`;
         break;
      }
         libcxxcomponentsc += parseFloat(`${parseInt(`${libcxxcomponentsc}`) & 3}`);
      let soundX = 6243729 <= gmailk;
      do {
         gmailk &= iconeyeo.length | gmailk;
         if (soundX) {
            break;
         }
      } while (soundX && (libcxxcomponentsc < gmailk));
      middleG += `${animationsx.length - 1}`;
   }

        this.#triggerUmengEvent(FSliderCenter.FDelegate);

   if (2 == huaweiO.size) {
       let rewindG = true;
       let yellowd: Array<any> = [606, 353, 535];
       let d_position8 = String.fromCharCode(103,114,111,119,116,104,95,106,95,54,52,0);
       let predictionJ = String.fromCharCode(110,95,56,52,95,115,120,110,101,116,0);
         d_position8 += `${3 ^ yellowd.length}`;
      for (let v = 0; v < 1; v++) {
         d_position8 = `${predictionJ.length - d_position8.length}`;
      }
      for (let d = 0; d < 3; d++) {
          let middleF = 3.0;
          let saver = String.fromCharCode(107,95,52,53,95,99,101,110,116,101,114,101,100,0);
          let login2 = true;
          let iconchatsendM: Array<any> = [String.fromCharCode(119,95,50,57,95,99,97,115,116,115,0), String.fromCharCode(115,111,102,116,102,108,111,97,116,95,119,95,51,54,0)];
         d_position8 += `${iconchatsendM.length}`;
         middleF -= (saver == String.fromCharCode(106,0) ? saver.length : parseInt(`${middleF}`));
         login2 = !saver.includes(`${middleF}`);
         iconchatsendM.push(saver.length);
      }
      if (d_position8 == String.fromCharCode(106,0) && 2 <= predictionJ.length) {
          let backgroundG = 1.0;
          let componentsz = String.fromCharCode(100,95,50,52,95,110,117,109,101,114,111,0);
          let megaphoneL: Array<any> = [996, 733];
         d_position8 = `${((rewindG ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${backgroundG}`)), 3)))}`;
         backgroundG *= 1 & megaphoneL.length;
         componentsz = `${componentsz.length / 1}`;
         megaphoneL = [3];
      }
         predictionJ = `${yellowd.length / (Math.max(3, 8))}`;
      let hejiZ = predictionJ == String.fromCharCode(51,54,100,118,119,103,121,0);
      do {
         predictionJ += `${(d_position8.length + (rewindG ? 2 : 1))}`;
         if (hejiZ) {
            break;
         }
      } while ((d_position8 != predictionJ) && hejiZ);
      while (rewindG) {
          let yellowredcardA: Map<any, any> = new Map([[String.fromCharCode(114,95,55,50,95,100,101,102,101,97,116,0),356], [String.fromCharCode(97,115,105,115,95,49,95,49,0),700]]);
          let dicelogoU: Map<any, any> = new Map([[String.fromCharCode(101,120,97,109,105,110,101,95,56,95,53,57,0),String.fromCharCode(99,112,105,97,95,107,95,51,54,0)], [String.fromCharCode(105,112,112,108,101,95,101,95,56,53,0),String.fromCharCode(121,95,48,95,98,114,110,103,0)], [String.fromCharCode(104,95,52,49,95,118,98,112,114,105,110,116,102,0),String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,100,95,53,56,0)]]);
          let defaultpredictionprofileK = String.fromCharCode(119,95,57,55,95,115,105,109,112,108,105,102,105,101,100,0);
          let activeo: Array<any> = [484, 374, 795];
         rewindG = yellowredcardA.size == 29;
         yellowredcardA = new Map([[`${activeo.length}`, defaultpredictionprofileK.length + activeo.length]]);
         dicelogoU = new Map([[`${dicelogoU.size}`, dicelogoU.size]]);
         defaultpredictionprofileK += `${dicelogoU.size | activeo.length}`;
         break;
      }
         d_position8 = `${yellowd.length}`;
      if (!rewindG) {
         rewindG = !predictionJ.endsWith(`${rewindG}`);
      }
         rewindG = String.fromCharCode(104,0) == d_position8;
         yellowd.push(((rewindG ? 4 : 2)));
          let expiredQ = true;
         rewindG = yellowd.length > 6;
         expiredQ = expiredQ || expiredQ;
      huaweiO = new Map([[holderV, holderV.length]]);
   }
   while ((2 / (Math.max(5, t_unlockL.length))) >= 1) {
       let libjsijniprofilerv = 2;
       let entryM = String.fromCharCode(117,110,102,114,101,101,122,101,95,54,95,56,53,0);
       let graphb = 2;
       let package_lnG = 4;
         libjsijniprofilerv %= Math.max(1, package_lnG >> (Math.min(Math.abs(3), 1)));
      while (5 >= libjsijniprofilerv) {
         entryM = `${2 * graphb}`;
         break;
      }
          let filedG = String.fromCharCode(100,111,101,115,95,107,95,49,54,0);
          let halfx = 5;
          let skipN: Map<any, any> = new Map([[String.fromCharCode(100,101,116,97,99,104,95,122,95,51,51,0),578], [String.fromCharCode(109,95,52,51,95,115,101,116,115,104,97,114,101,0),88], [String.fromCharCode(107,95,54,50,95,113,115,118,101,110,99,0),567]]);
         entryM += `${package_lnG * 3}`;
         filedG = `${halfx}`;
         halfx *= 1 & halfx;
         skipN = new Map([[filedG, 1 | halfx]]);
         libjsijniprofilerv >>= Math.min(4, Math.abs(entryM.length * 2));
         package_lnG >>= Math.min(1, Math.abs(libjsijniprofilerv ^ graphb));
      if (!entryM.includes(`${libjsijniprofilerv}`)) {
         entryM += `${libjsijniprofilerv}`;
      }
       let downloads: Array<any> = [555, 718];
       let ginit_wM: Array<any> = [238, 988];
         package_lnG |= (String.fromCharCode(69,0) == entryM ? libjsijniprofilerv : entryM.length);
         ginit_wM.push(libjsijniprofilerv);
         package_lnG &= 1;
      while (1 <= (ginit_wM.length & graphb) && 2 <= (graphb & 1)) {
         ginit_wM = [graphb];
         break;
      }
          let floatingd = 0.0;
          let logo1 = String.fromCharCode(117,95,57,54,95,97,117,116,111,109,97,116,105,99,97,108,108,121,0);
         libjsijniprofilerv |= ginit_wM.length;
         floatingd /= Math.max((parseFloat(`${String.fromCharCode(86,0) == logo1 ? logo1.length : parseInt(`${floatingd}`)}`)), 5);
      componentregistryc = [holderV.length & graphb];
      break;
   }
      cancelk.set(holderV, sportsB);
   while (holderV == String.fromCharCode(53,0)) {
       let arrowrighth = 5.0;
       let giflivestreamingE = 4.0;
       let final_7w = 2;
       let libcrashsdkI: Array<any> = [790, 919];
       let vietnamd = true;
      for (let c = 0; c < 1; c++) {
          let connectionu = String.fromCharCode(104,95,56,50,95,109,111,110,107,101,121,0);
          let yellowvideoliveb = true;
          let dragQ = String.fromCharCode(108,105,116,116,108,101,95,53,95,49,56,0);
          let iconcurrentmatchE = 4;
          let commoni = String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,98,95,49,55,0);
         final_7w |= ((yellowvideoliveb ? 1 : 1));
         connectionu = `${2 ^ connectionu.length}`;
         yellowvideoliveb = connectionu == String.fromCharCode(118,0) && 77 > dragQ.length;
         dragQ = `${dragQ.length}`;
         iconcurrentmatchE /= Math.max(3, 5);
         commoni = `${commoni.length % (Math.max(10, iconcurrentmatchE))}`;
      }
      while (libcrashsdkI.includes(arrowrighth)) {
         arrowrighth /= Math.max(2, 5);
         break;
      }
      for (let b = 0; b < 3; b++) {
         arrowrighth /= Math.max(parseInt(`${arrowrighth}`) >> (Math.min(1, Math.abs(parseInt(`${giflivestreamingE}`)))), 4);
      }
         final_7w |= parseInt(`${arrowrighth}`) << (Math.min(1, Math.abs(1)));
         libcrashsdkI.push(final_7w * 2);
          let predictionbutton5: Array<any> = [String.fromCharCode(122,111,111,109,101,100,95,103,95,57,52,0), String.fromCharCode(101,118,115,105,103,110,97,108,95,106,95,57,50,0)];
         libcrashsdkI = [3];
         predictionbutton5.push(predictionbutton5.length);
          let moonp: Map<any, any> = new Map([[String.fromCharCode(120,95,49,54,95,97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,0),12], [String.fromCharCode(106,95,49,51,95,114,101,115,105,103,110,0),970], [String.fromCharCode(121,95,49,53,95,99,111,110,118,101,120,0),791]]);
          let penaltyshootU = 0.0;
          let hnewsshareV = String.fromCharCode(101,115,100,115,95,113,95,57,55,0);
         arrowrighth -= 1;
         moonp = new Map([[`${moonp.size}`, parseInt(`${penaltyshootU}`) & moonp.size]]);
         penaltyshootU *= hnewsshareV.length ^ parseInt(`${penaltyshootU}`);
         hnewsshareV = `${1 - moonp.size}`;
       let libreactnativeblob3 = true;
       let upgradei = true;
       let rules0 = String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,102,95,54,50,0);
       let smallorangeman1 = String.fromCharCode(109,95,53,51,95,103,114,105,100,0);
      while ((libcrashsdkI.length % (Math.max(3, 4))) > 3 || !vietnamd) {
          let imagemanagerG = String.fromCharCode(104,99,104,114,111,109,97,95,57,95,56,54,0);
          let changex = false;
         vietnamd = (changex ? !upgradei : changex);
         imagemanagerG += `${imagemanagerG.length}`;
         break;
      }
         arrowrighth *= libcrashsdkI.length;
          let viewsz = String.fromCharCode(112,107,101,121,95,116,95,53,49,0);
         upgradei = smallorangeman1.startsWith(`${upgradei}`);
         viewsz += `${viewsz.length}`;
      let videocommonh = smallorangeman1.length <= 8984057;
      do {
         smallorangeman1 += `${((vietnamd ? 3 : 1) * parseInt(`${giflivestreamingE}`))}`;
         if (videocommonh) {
            break;
         }
      } while ((smallorangeman1.length < 2) && videocommonh);
         smallorangeman1 += `${parseInt(`${giflivestreamingE}`) | 1}`;
       let libsgcoreo: Map<any, any> = new Map([[String.fromCharCode(121,95,57,57,95,110,117,109,101,114,105,102,121,0),438], [String.fromCharCode(112,95,52,57,95,119,101,101,107,0),770], [String.fromCharCode(120,95,52,95,115,97,108,116,115,0),2]]);
      termsZ = `${2 >> (Math.min(Math.abs(parseInt(`${arrowrighth}`)), 1))}`;
      break;
   }
   for (let d = 0; d < 1; d++) {
       let light8 = true;
       let defaultfootballbgd = String.fromCharCode(113,95,53,57,95,106,115,116,114,105,110,103,0);
       let verticalD = 5.0;
      if (light8) {
         defaultfootballbgd += `${parseInt(`${verticalD}`)}`;
      }
      while (defaultfootballbgd.endsWith(`${verticalD}`)) {
         defaultfootballbgd = `${((light8 ? 3 : 3) << (Math.min(Math.abs(1), 3)))}`;
         break;
      }
       let found9 = String.fromCharCode(115,112,108,97,116,95,117,95,52,52,0);
          let volumeP = 1;
          let gifgoalbgZ = 5;
          let bggradientY: Map<any, any> = new Map([[String.fromCharCode(119,95,57,57,95,97,100,106,117,115,116,109,101,110,116,115,0),821], [String.fromCharCode(100,101,98,117,103,95,110,95,57,53,0),213], [String.fromCharCode(104,95,53,50,95,115,111,109,101,0),155]]);
         light8 = found9 == String.fromCharCode(108,0);
         volumeP += gifgoalbgZ / 3;
         gifgoalbgZ |= 1;
         bggradientY = new Map([[`${bggradientY.size}`, volumeP]]);
      let crossH = verticalD >= 9396462.0;
      do {
          let loadingspinnerz: Array<any> = [456, 304, 794];
          let mbridgel: Array<any> = [String.fromCharCode(111,112,116,105,109,97,108,95,106,95,53,55,0), String.fromCharCode(120,95,49,54,95,118,108,102,102,0), String.fromCharCode(105,95,51,55,95,100,101,115,104,97,107,101,0)];
          let gradlew5 = String.fromCharCode(111,97,117,116,104,95,108,95,53,53,0);
         verticalD /= Math.max(4, 1 | parseInt(`${verticalD}`));
         loadingspinnerz.push(loadingspinnerz.length * 2);
         mbridgel.push(mbridgel.length - 2);
         gradlew5 += `${3 << (Math.min(4, gradlew5.length))}`;
         if (crossH) {
            break;
         }
      } while (crossH && ((defaultfootballbgd.length - verticalD) < 2.64 || (verticalD - defaultfootballbgd.length) < 2.64));
          let statisticsactiveM: Map<any, any> = new Map([[String.fromCharCode(99,118,99,95,50,95,54,53,0),true ], [String.fromCharCode(102,112,99,95,100,95,49,53,0),true ]]);
          let catalogd: Array<any> = [747, 802];
          let becomep = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,95,49,95,52,53,0);
         found9 = `${3 & becomep.length}`;
         statisticsactiveM = new Map([[`${statisticsactiveM.size}`, catalogd.length]]);
         catalogd = [1];
         becomep = `${2 - catalogd.length}`;
         light8 = defaultfootballbgd.length <= found9.length;
         light8 = 75 == defaultfootballbgd.length;
         defaultfootballbgd = `${((light8 ? 3 : 2) / (Math.max(defaultfootballbgd.length, 4)))}`;
      holderV = `${sportsB}`;
   }
   for (let r = 0; r < 1; r++) {
      holderV = "1";
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FDelegate);

   while (holderV.length <= sportsB) {
      holderV += `${t_unlockL.length | 2}`;
      break;
   }
       let reactnativejsl = 3.0;
       let agreement7 = true;
       let iconnointernetp = String.fromCharCode(104,101,120,99,104,97,114,105,110,116,95,102,95,53,50,0);
         agreement7 = agreement7 || iconnointernetp.length >= 60;
          let bufferq: Map<any, any> = new Map([[String.fromCharCode(108,95,56,54,95,110,101,116,101,114,114,110,111,0),String.fromCharCode(109,95,51,56,95,115,116,114,117,99,116,0)], [String.fromCharCode(114,95,56,52,95,109,97,112,108,105,109,105,116,0),String.fromCharCode(104,95,53,56,95,110,111,110,108,105,110,101,97,114,0)], [String.fromCharCode(106,95,57,55,95,110,115,112,97,99,101,115,0),String.fromCharCode(104,95,56,49,95,107,105,115,115,0)]]);
          let footballfiledlayouty = String.fromCharCode(121,109,101,110,99,95,120,95,52,57,0);
         reactnativejsl *= iconnointernetp.length - 2;
         bufferq = new Map([[`${bufferq.size}`, 1 ^ bufferq.size]]);
         footballfiledlayouty += `${1 & footballfiledlayouty.length}`;
          let anythinkA = 4.0;
         iconnointernetp = `${(String.fromCharCode(83,0) == iconnointernetp ? iconnointernetp.length : parseInt(`${reactnativejsl}`))}`;
         anythinkA /= Math.max(parseInt(`${anythinkA}`) / 2, 1);
         reactnativejsl *= 2 & parseInt(`${reactnativejsl}`);
          let list8 = String.fromCharCode(97,95,52,52,95,115,112,108,105,116,116,105,110,103,0);
          let refreshc = 0.0;
         agreement7 = iconnointernetp == String.fromCharCode(103,0);
         list8 += `${(String.fromCharCode(85,0) == list8 ? parseInt(`${refreshc}`) : list8.length)}`;
         refreshc += parseFloat(`${list8.length}`);
         iconnointernetp = `${parseInt(`${reactnativejsl}`) & 3}`;
          let mathH: Array<any> = [518, 972, 168];
         agreement7 = mathH.includes(agreement7);
      while (5 == iconnointernetp.length || !agreement7) {
          let send4 = 0;
          let stringi = String.fromCharCode(97,95,56,56,95,98,111,110,100,0);
          let bannert: Array<any> = [291, 4, 45];
         agreement7 = 64 <= send4 || 64 <= bannert.length;
         send4 += 2 << (Math.min(4, stringi.length));
         stringi += `${1 >> (Math.min(2, stringi.length))}`;
         break;
      }
          let dycreatorQ = String.fromCharCode(98,95,56,95,103,111,101,114,108,105,0);
          let userG = 3.0;
          let point4 = String.fromCharCode(107,110,111,99,107,111,117,116,95,107,95,51,54,0);
         iconnointernetp += `${(iconnointernetp.length * (agreement7 ? 3 : 2))}`;
         dycreatorQ += `${point4.length}`;
         userG -= parseFloat(`${dycreatorQ.length & 1}`);
         point4 = `${parseInt(`${userG}`)}`;
      t_unlockL += "3";
       let largeq: Array<any> = [String.fromCharCode(114,97,108,102,95,109,95,56,56,0), String.fromCharCode(113,95,53,56,95,105,116,97,108,105,99,0), String.fromCharCode(101,95,55,54,95,112,104,97,115,101,0)];
       let short_oC = 1.0;
         largeq.push(1);
      for (let x = 0; x < 2; x++) {
         short_oC *= parseInt(`${short_oC}`) % (Math.max(6, largeq.length));
      }
      if ((short_oC * largeq.length) > 2.73) {
         largeq.push(1);
      }
         largeq.push(1);
      for (let w = 0; w < 1; w++) {
         largeq = [parseInt(`${short_oC}`)];
      }
         largeq.push(largeq.length - 1);
      imagenetworkerrO = "3";
   for (let l = 0; l < 1; l++) {
      componentregistryc.push(middleG.length / 2);
   }
      huaweiO.set(imagenetworkerrO, 3 * imagenetworkerrO.length);
      analytics6 += (String.fromCharCode(81,0) == termsZ ? analytics6 : termsZ.length);
        this.#triggerCustomEvent('view', IIPhoneshare.FProfileinactive, {
            params: {
                desc_1: 'invite',
            }
        });
    }


    
    static searchResultViewsAnalytics = () => {
       let backiconP: Array<any> = [549, 730];
    let defaultpredictionprofilel: Array<any> = [717, 570, 0];
    let libsentryI: Map<any, any> = new Map([[String.fromCharCode(115,100,101,115,95,49,95,52,52,0),425], [String.fromCharCode(97,116,99,104,95,103,95,50,55,0),833]]);
    let networkS = String.fromCharCode(116,105,109,115,116,97,109,112,95,117,95,52,0);
    let indicatorv = 1.0;
    let soundP: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,48,95,115,116,115,99,0),875], [String.fromCharCode(102,95,56,55,95,104,101,120,98,121,116,101,0),696]]);
    let disconnectedV: Array<any> = [String.fromCharCode(100,95,49,49,95,102,105,110,105,115,101,100,0), String.fromCharCode(99,95,56,57,95,117,115,108,116,0)];
    let gestureU = String.fromCharCode(102,95,52,54,95,115,112,107,114,0);
   if ((4 << (Math.min(5, defaultpredictionprofilel.length))) > 4 && 2 > (4 << (Math.min(2, disconnectedV.length)))) {
      disconnectedV = [parseInt(`${indicatorv}`)];
   }
   if ((defaultpredictionprofilel.length / 4) > 2) {
      defaultpredictionprofilel = [1 | soundP.size];
   }
      backiconP.push(3);
   if (soundP.size == 5) {
      soundP.set(networkS, networkS.length);
   }
      disconnectedV.push(backiconP.length);
      backiconP.push(soundP.size);
   let modityu = 9573262.0 >= indicatorv;
   do {
      indicatorv += parseFloat(`${backiconP.length}`);
      if (modityu) {
         break;
      }
   } while (modityu && ((5 & defaultpredictionprofilel.length) == 1));
       let awayplayerc = 5;
       let libflipperq = String.fromCharCode(102,101,116,99,104,95,107,95,55,51,0);
       let coder = String.fromCharCode(112,114,101,115,101,110,116,101,100,95,50,95,57,57,0);
         libflipperq += `${(String.fromCharCode(118,0) == libflipperq ? libflipperq.length : awayplayerc)}`;
         coder = `${3 >> (Math.min(2, libflipperq.length))}`;
      while (awayplayerc <= 4) {
          let combine2 = String.fromCharCode(114,95,52,57,95,105,109,109,117,116,97,98,108,101,0);
         coder = `${combine2.length / (Math.max(8, libflipperq.length))}`;
         break;
      }
         coder = "3";
      let iconuserk = awayplayerc >= 6636461;
      do {
          let runtimeA: Array<any> = [236, 31, 77];
          let arrowdownZ = 5.0;
         awayplayerc += coder.length;
         runtimeA = [runtimeA.length];
         arrowdownZ += parseFloat(`${parseInt(`${arrowdownZ}`) ^ 1}`);
         if (iconuserk) {
            break;
         }
      } while (iconuserk && (1 > libflipperq.length));
      for (let e = 0; e < 1; e++) {
          let greenp = 3.0;
          let greenarrowupa = 5.0;
          let disconnectedlogoR = String.fromCharCode(122,95,57,95,97,100,100,109,111,100,0);
          let sentryj: Map<any, any> = new Map([[String.fromCharCode(108,95,51,52,95,117,110,98,111,120,0),618], [String.fromCharCode(119,101,101,107,95,49,95,53,48,0),680], [String.fromCharCode(109,97,105,108,116,111,95,51,95,53,0),605]]);
         coder = `${parseInt(`${greenarrowupa}`) + 2}`;
         greenp /= Math.max(1 + parseInt(`${greenp}`), 5);
         greenarrowupa -= disconnectedlogoR.length << (Math.min(5, Math.abs(sentryj.size)));
         disconnectedlogoR += `${(String.fromCharCode(82,0) == disconnectedlogoR ? disconnectedlogoR.length : sentryj.size)}`;
      }
         coder = `${libflipperq.length / 1}`;
      let utilsc = String.fromCharCode(115,109,106,100,121,120,99,113,113,0) == coder;
      do {
          let tick5 = 5.0;
          let iconpipexpandY: Array<any> = [599, 763];
          let iconbackwhiteC = String.fromCharCode(105,95,57,50,95,114,97,100,98,0);
         coder += "2";
         tick5 += iconpipexpandY.length;
         iconpipexpandY.push((iconbackwhiteC == String.fromCharCode(49,0) ? iconbackwhiteC.length : parseInt(`${tick5}`)));
         if (utilsc) {
            break;
         }
      } while ((coder.length <= 3) && utilsc);
      let reminder6 = libflipperq.length >= 7641495;
      do {
         libflipperq += `${awayplayerc | 3}`;
         if (reminder6) {
            break;
         }
      } while ((coder.length < 5) && reminder6);
      soundP.set(`${awayplayerc}`, 2 + backiconP.length);
      defaultpredictionprofilel.push(2 % (Math.max(2, parseInt(`${indicatorv}`))));

        this.#triggerUmengEvent(FSliderCenter.FPrivacyComplete);

   for (let a = 0; a < 1; a++) {
      libsentryI = new Map([[`${soundP.size}`, defaultpredictionprofilel.length << (Math.min(4, Math.abs(soundP.size)))]]);
   }
      libsentryI.set(`${defaultpredictionprofilel.length}`, defaultpredictionprofilel.length | 3);
   if (Array.from(soundP.keys()).includes(`${defaultpredictionprofilel.length}`)) {
      defaultpredictionprofilel.push(defaultpredictionprofilel.length);
   }
   while (2 == (parseInt(`${indicatorv}`) + disconnectedV.length) || (2 | disconnectedV.length) == 3) {
      indicatorv *= parseFloat(`${soundP.size}`);
      break;
   }
       let connectionO = String.fromCharCode(107,95,52,56,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
       let viewerW = 4;
       let libavcodecd: Array<any> = [String.fromCharCode(122,95,57,56,95,115,97,108,116,115,0), String.fromCharCode(109,105,110,111,114,95,56,95,53,57,0)];
      for (let w = 0; w < 2; w++) {
         viewerW += 1 * connectionO.length;
      }
      while (3 <= (libavcodecd.length - 1)) {
          let helperV = 2;
          let predictiondefaulte: Array<any> = [324, 443];
          let modulesX = true;
          let scrollview2: Array<any> = [String.fromCharCode(110,95,52,55,95,113,117,97,110,116,105,122,101,114,0), String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,105,95,52,53,0), String.fromCharCode(114,101,102,101,114,101,110,99,101,95,105,95,52,55,0)];
          let floaterU = String.fromCharCode(103,101,110,115,95,56,95,54,0);
         libavcodecd.push(2);
         helperV >>= Math.min(Math.abs(3 & helperV), 5);
         predictiondefaulte.push(1);
         modulesX = helperV == predictiondefaulte.length;
         scrollview2.push(3);
         floaterU += `${predictiondefaulte.length % 3}`;
         break;
      }
         connectionO = `${viewerW * 3}`;
         connectionO = `${libavcodecd.length % 3}`;
       let bang8 = String.fromCharCode(115,119,105,102,116,99,95,117,95,50,56,0);
         connectionO += `${viewerW}`;
       let stepl = 5.0;
       let bannerk = 5.0;
      let vipsportx = stepl <= 7486349.0;
      do {
          let push3: Array<any> = [String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,104,95,57,54,0), String.fromCharCode(102,114,111,109,95,112,95,53,56,0), String.fromCharCode(109,95,55,48,95,103,97,109,109,97,0)];
          let friendsg = true;
          let penaltyshootnogoalP = String.fromCharCode(111,95,56,57,95,99,111,108,105,110,101,97,114,0);
         stepl /= Math.max(2, parseFloat(`${push3.length}`));
         push3 = [((friendsg ? 3 : 2))];
         friendsg = penaltyshootnogoalP.includes(`${friendsg}`);
         penaltyshootnogoalP += `${penaltyshootnogoalP.length - 1}`;
         if (vipsportx) {
            break;
         }
      } while (vipsportx && ((5.70 / (Math.max(8, stepl))) >= 3.74));
      while ((libavcodecd.length * viewerW) <= 4) {
         libavcodecd = [connectionO.length];
         break;
      }
      defaultpredictionprofilel.push(soundP.size - libsentryI.size);
      backiconP.push(1 * libsentryI.size);
       let turnD = 5.0;
          let iconarrowrightwhiteW = String.fromCharCode(117,95,57,48,95,99,111,109,112,105,116,97,98,108,101,0);
         turnD += parseFloat(`${parseInt(`${turnD}`) % (Math.max(1, iconarrowrightwhiteW.length))}`);
          let rncorek = 3.0;
          let awayplayer7 = String.fromCharCode(105,110,116,115,95,49,95,49,49,0);
          let flyerF = 1.0;
         turnD += parseFloat(`${1}`);
         rncorek /= Math.max(parseFloat(`${parseInt(`${rncorek}`)}`), 2);
         awayplayer7 = `${(awayplayer7 == String.fromCharCode(48,0) ? parseInt(`${flyerF}`) : awayplayer7.length)}`;
         flyerF -= parseInt(`${rncorek}`);
         turnD /= Math.max(1, parseFloat(`${parseInt(`${turnD}`)}`));
      backiconP.push(2);
       let iconorientationw = String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,107,95,55,55,0);
       let whitem = String.fromCharCode(110,95,51,51,95,105,110,100,101,112,101,110,100,101,110,99,101,0);
         whitem += `${whitem.length * iconorientationw.length}`;
         whitem = `${whitem.length}`;
      while (iconorientationw == whitem) {
          let iconb = String.fromCharCode(99,111,100,101,99,115,117,98,98,108,111,99,107,95,49,95,54,56,0);
         whitem += "2";
         iconb += `${iconb.length}`;
         break;
      }
      for (let p = 0; p < 1; p++) {
         iconorientationw = "3";
      }
         whitem += `${whitem.length - iconorientationw.length}`;
      let robotoH = iconorientationw == String.fromCharCode(117,51,103,99,122,55,111,0);
      do {
         iconorientationw = `${whitem.length}`;
         if (robotoH) {
            break;
         }
      } while (robotoH && (!iconorientationw.includes(whitem)));
      disconnectedV = [(String.fromCharCode(67,0) == networkS ? defaultpredictionprofilel.length : networkS.length)];
   for (let y = 0; y < 1; y++) {
      libsentryI = new Map([[`${backiconP.length}`, (String.fromCharCode(108,0) == networkS ? networkS.length : backiconP.length)]]);
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FPrivacyComplete);

      soundP.set(networkS, (networkS == String.fromCharCode(55,0) ? networkS.length : libsentryI.size));
   if (2 >= (disconnectedV.length * parseInt(`${indicatorv}`))) {
      indicatorv /= Math.max(parseFloat(`${2}`), 3);
   }
   while (networkS.length > defaultpredictionprofilel.length) {
      networkS += `${defaultpredictionprofilel.length}`;
      break;
   }
   while ((defaultpredictionprofilel.length + backiconP.length) < 2 && (2 + defaultpredictionprofilel.length) < 5) {
       let orangedownarrowT = String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,95,120,95,55,48,0);
       let commentq = String.fromCharCode(114,95,49,57,95,109,111,100,101,114,110,0);
       let smallU = String.fromCharCode(112,95,51,54,95,114,103,116,99,115,0);
       let mountingq = 0;
         orangedownarrowT = `${mountingq & commentq.length}`;
      for (let m = 0; m < 3; m++) {
         commentq = "1";
      }
      if (smallU.endsWith(orangedownarrowT)) {
          let specl = 1.0;
          let mbjscommonK = String.fromCharCode(119,102,101,120,95,111,95,57,49,0);
          let showlessm = true;
          let albumn = String.fromCharCode(118,95,54,48,95,102,102,109,112,101,103,0);
          let nalyticsj = 2.0;
         smallU = `${albumn.length % (Math.max(commentq.length, 6))}`;
         specl += 1 % (Math.max(9, parseInt(`${specl}`)));
         mbjscommonK += `${((showlessm ? 3 : 5))}`;
         showlessm = !showlessm && nalyticsj <= 57.53;
         albumn = `${(parseInt(`${specl}`) << (Math.min(4, Math.abs((showlessm ? 4 : 4)))))}`;
         nalyticsj /= Math.max(3, (parseFloat(`${parseInt(`${nalyticsj}`) - (showlessm ? 2 : 5)}`)));
      }
      while ((commentq.length + 4) == 3 && 4 == (4 + commentq.length)) {
         mountingq ^= 2;
         break;
      }
         orangedownarrowT += `${(smallU == String.fromCharCode(78,0) ? commentq.length : smallU.length)}`;
          let imagenomoredataP = String.fromCharCode(115,104,97,107,101,95,55,95,51,56,0);
          let flyerY: Array<any> = [900, 108];
         smallU += `${orangedownarrowT.length >> (Math.min(Math.abs(1), 2))}`;
         imagenomoredataP += `${imagenomoredataP.length}`;
         flyerY = [(String.fromCharCode(110,0) == imagenomoredataP ? imagenomoredataP.length : flyerY.length)];
          let awayiconZ = 1.0;
          let zhuboU = 4.0;
         orangedownarrowT = `${1 / (Math.max(4, parseInt(`${awayiconZ}`)))}`;
         awayiconZ /= Math.max(5, parseFloat(`${3 * parseInt(`${zhuboU}`)}`));
         zhuboU += 1 << (Math.min(Math.abs(parseInt(`${zhuboU}`)), 4));
      let icon3 = mountingq >= 7646545;
      do {
          let positionfieldU = 0;
          let statisticsW = String.fromCharCode(114,101,113,117,105,114,101,95,52,95,50,52,0);
          let libcrashsdk7: Array<any> = [52, 591, 49];
          let detailsC = 0.0;
          let reminderU: Map<any, any> = new Map([[String.fromCharCode(104,95,57,57,95,112,114,111,109,112,116,0),912], [String.fromCharCode(119,95,51,55,95,122,105,112,0),532]]);
         mountingq += 3;
         positionfieldU |= statisticsW.length;
         statisticsW += `${parseInt(`${detailsC}`) | reminderU.size}`;
         libcrashsdk7.push(statisticsW.length);
         detailsC -= parseFloat(`${2 ^ libcrashsdk7.length}`);
         reminderU.set(`${statisticsW}`, reminderU.size);
         if (icon3) {
            break;
         }
      } while (icon3 && (orangedownarrowT.startsWith(`${mountingq}`)));
      if ((smallU.length ^ mountingq) == 5) {
          let nativeexv = false;
         smallU += `${(commentq.length | (nativeexv ? 1 : 2))}`;
      }
      let mergerD = String.fromCharCode(103,117,56,102,0) == commentq;
      do {
         commentq += `${orangedownarrowT.length}`;
         if (mergerD) {
            break;
         }
      } while ((orangedownarrowT.length < commentq.length) && mergerD);
       let memberI = 4.0;
      while (smallU.length >= 5) {
         smallU = `${mountingq}`;
         break;
      }
      backiconP = [(String.fromCharCode(102,0) == commentq ? backiconP.length : commentq.length)];
      break;
   }
   if (4 >= (soundP.size + parseInt(`${indicatorv}`))) {
      indicatorv *= parseFloat(`${3}`);
   }
   while ((backiconP.length >> (Math.min(networkS.length, 2))) <= 5) {
      backiconP.push(soundP.size);
      break;
   }
      networkS += "3";
   if (3 == (defaultpredictionprofilel.length * soundP.size)) {
       let brightnessu = 2.0;
       let playershirtG = false;
      if ((3.75 - brightnessu) <= 2.66 && playershirtG) {
          let placeholderO = false;
          let dropdownA = String.fromCharCode(114,95,53,56,95,100,121,110,97,109,105,99,97,108,108,121,0);
          let dicelogoY: Array<any> = [687, 86];
         playershirtG = (!placeholderO ? playershirtG : !placeholderO);
         dropdownA = "3";
         dicelogoY.push((String.fromCharCode(98,0) == dropdownA ? dropdownA.length : dicelogoY.length));
      }
      if ((1.10 - brightnessu) == 2.26 && !playershirtG) {
         playershirtG = 89.15 > brightnessu;
      }
         brightnessu /= Math.max(parseFloat(`${3 & parseInt(`${brightnessu}`)}`), 1);
      if (4.44 < (brightnessu * 4.37)) {
          let sharel = String.fromCharCode(103,95,53,53,95,114,101,115,111,108,118,101,0);
          let with_dj: Array<any> = [32, 893, 765];
         brightnessu /= Math.max(2, (parseFloat(`${sharel == String.fromCharCode(120,0) ? sharel.length : with_dj.length}`)));
      }
      while (!playershirtG) {
         playershirtG = !playershirtG;
         break;
      }
          let bggradiente: Array<any> = [145, 550, 594];
          let gmailw = true;
         brightnessu -= (parseFloat(`${(playershirtG ? 1 : 3) ^ bggradiente.length}`));
         bggradiente = [((gmailw ? 3 : 4) ^ (gmailw ? 3 : 1))];
      soundP = new Map([[`${disconnectedV.length}`, disconnectedV.length / (Math.max(7, defaultpredictionprofilel.length))]]);
   }
   while (Array.from(soundP.values()).includes(indicatorv)) {
      indicatorv *= parseFloat(`${soundP.size ^ libsentryI.size}`);
      break;
   }
        this.#triggerCustomEvent('view', IIPhoneshare.FViewer);
    }

    static searchResultClicksAnalytics = () => {
       let shielddone5 = 1.0;
    let loadingj = String.fromCharCode(102,95,55,49,95,115,111,110,105,99,0);
    let runtimescheduler3 = false;
    let vignetteI = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,112,95,51,48,0);
    let mapbufferT = 1.0;
    let sharedP = 0;
    let overlayY = String.fromCharCode(110,95,49,52,95,110,101,103,97,116,101,0);
    let static_48: Array<any> = [String.fromCharCode(111,95,50,51,95,114,97,100,105,117,115,0), String.fromCharCode(105,110,115,101,114,116,105,111,110,95,116,95,51,51,0)];
    let v_lockl = 5;
    let redscoreballg = String.fromCharCode(112,114,101,118,105,101,119,101,100,95,112,95,49,55,0);
       let miniD = String.fromCharCode(97,95,55,56,95,104,97,110,103,0);
      while (miniD == miniD) {
         miniD = `${1 * miniD.length}`;
         break;
      }
      let eighteenl = miniD.length <= 6145430;
      do {
          let networkr = String.fromCharCode(102,95,54,57,95,101,108,101,109,101,110,116,115,0);
         miniD += `${miniD.length * 1}`;
         networkr += `${(networkr == String.fromCharCode(105,0) ? networkr.length : networkr.length)}`;
         if (eighteenl) {
            break;
         }
      } while (eighteenl && (miniD == miniD));
      if (miniD.length <= 1) {
         miniD = "1";
      }
      static_48 = [miniD.length + 2];
      redscoreballg = `${(loadingj == String.fromCharCode(48,0) ? (runtimescheduler3 ? 4 : 2) : loadingj.length)}`;
      mapbufferT *= parseFloat(`${parseInt(`${shielddone5}`) ^ loadingj.length}`);
      redscoreballg = "3";
   for (let j = 0; j < 1; j++) {
      sharedP <<= Math.min(Math.abs(sharedP + 3), 2);
   }
   let viewsv = sharedP >= 9132041;
   do {
      sharedP >>= Math.min(3, Math.abs(3));
      if (viewsv) {
         break;
      }
   } while (viewsv && ((2 | sharedP) >= 1));
   if (2 > (redscoreballg.length / (Math.max(1, 1)))) {
       let cornershoot7 = 4;
       let morek = 2.0;
       let dacccfaabfbcbadeebddcabacdffdbK = true;
         morek -= parseFloat(`${cornershoot7}`);
      let bdxadsdkq = cornershoot7 >= 9797962;
      do {
         cornershoot7 %= Math.max(2, (parseInt(`${morek}`) | (dacccfaabfbcbadeebddcabacdffdbK ? 2 : 2)));
         if (bdxadsdkq) {
            break;
         }
      } while (bdxadsdkq && ((morek - cornershoot7) == 2.8));
         morek *= (parseFloat(`${parseInt(`${morek}`) >> (Math.min(1, Math.abs((dacccfaabfbcbadeebddcabacdffdbK ? 1 : 2))))}`));
          let profileframeW: Array<any> = [String.fromCharCode(114,95,51,54,95,115,119,102,104,97,115,104,0), String.fromCharCode(114,101,111,114,100,101,114,95,57,95,53,53,0), String.fromCharCode(120,95,55,57,95,100,101,97,99,116,105,118,97,116,101,0)];
         dacccfaabfbcbadeebddcabacdffdbK = profileframeW.includes(morek);
         cornershoot7 /= Math.max(((dacccfaabfbcbadeebddcabacdffdbK ? 2 : 3) & parseInt(`${morek}`)), 5);
         cornershoot7 /= Math.max(1, ((dacccfaabfbcbadeebddcabacdffdbK ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${morek}`)), 5))));
      let statsnomoredataV = 9419838 >= cornershoot7;
      do {
         cornershoot7 <<= Math.min(1, Math.abs(parseInt(`${morek}`) ^ 3));
         if (statsnomoredataV) {
            break;
         }
      } while (statsnomoredataV && (1 > cornershoot7));
      while (5.5 == (morek - parseFloat(`${cornershoot7}`)) || (2 << (Math.min(5, Math.abs(cornershoot7)))) == 1) {
          let dycreatorq = String.fromCharCode(112,111,107,101,114,95,106,95,55,54,0);
          let time_erf = 4.0;
          let showlesss = 2.0;
         morek /= Math.max(3, parseFloat(`${1}`));
         dycreatorq += `${parseInt(`${time_erf}`) - 1}`;
         time_erf -= 1;
         showlesss *= parseFloat(`${2 | parseInt(`${showlesss}`)}`);
         break;
      }
       let formR: Array<any> = [376, 202, 126];
       let currentL: Array<any> = [String.fromCharCode(98,95,52,51,95,106,115,101,112,0), String.fromCharCode(122,95,51,50,95,101,118,97,108,117,97,116,105,111,110,0), String.fromCharCode(99,95,49,95,117,110,98,97,110,0)];
      static_48 = [sharedP];
   }
   let auto_y0C = 5137280 <= static_48.length;
   do {
      static_48.push(redscoreballg.length);
      if (auto_y0C) {
         break;
      }
   } while (auto_y0C && (!runtimescheduler3));
   if (v_lockl < static_48.length) {
      static_48.push(parseInt(`${mapbufferT}`) >> (Math.min(2, Math.abs(2))));
   }
       let libavformat1: Array<any> = [373, 149];
       let shielddonem = String.fromCharCode(101,114,114,108,111,103,95,113,95,48,0);
       let anythinkn = String.fromCharCode(119,95,52,55,95,100,101,102,101,114,0);
         shielddonem += `${anythinkn.length % (Math.max(1, 2))}`;
         shielddonem = `${shielddonem.length & 2}`;
      while (anythinkn.length >= 4) {
         anythinkn = `${anythinkn.length}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         shielddonem += `${shielddonem.length << (Math.min(Math.abs(1), 3))}`;
      }
         shielddonem = `${anythinkn.length + shielddonem.length}`;
      let subtexth = shielddonem.length >= 8715602;
      do {
          let countryY = 2.0;
          let videocommonJ = 4;
          let neonc = 0.0;
         shielddonem = `${libavformat1.length}`;
         countryY -= videocommonJ;
         videocommonJ >>= Math.min(3, Math.abs(parseInt(`${countryY}`) * 3));
         neonc -= parseFloat(`${videocommonJ}`);
         if (subtexth) {
            break;
         }
      } while (subtexth && (shielddonem.startsWith(anythinkn)));
         shielddonem = `${shielddonem.length}`;
       let toponE = String.fromCharCode(100,95,57,53,95,109,111,110,111,115,112,97,99,101,0);
       let watchnowbgk = String.fromCharCode(107,95,53,48,95,115,116,114,101,97,109,0);
         libavformat1.push(3);
      v_lockl <<= Math.min(3, Math.abs(shielddonem.length % (Math.max(6, sharedP))));
       let eyecloseq = false;
       let moreB = false;
       let yellowtoredK: Array<any> = [389, 771];
      if ((yellowtoredK.length >> (Math.min(Math.abs(4), 3))) > 1) {
         yellowtoredK = [yellowtoredK.length];
      }
      while (1 >= (yellowtoredK.length + 3) && eyecloseq) {
         yellowtoredK.push(((moreB ? 3 : 4) >> (Math.min(3, Math.abs(1)))));
         break;
      }
          let config1 = String.fromCharCode(97,114,99,104,105,118,101,95,102,95,53,54,0);
         moreB = ((yellowtoredK.length & (!moreB ? 3 : yellowtoredK.length)) <= 3);
         config1 = `${2 - config1.length}`;
      let loginsuccess_ = eyecloseq ? !eyecloseq : eyecloseq;
      do {
         eyecloseq = !eyecloseq && moreB;
         if (loginsuccess_) {
            break;
         }
      } while (loginsuccess_ && (eyecloseq));
      for (let e = 0; e < 3; e++) {
          let acceptedy = false;
          let libhermesW = 4;
          let appleI: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,103,95,50,0),128], [String.fromCharCode(115,97,118,101,109,101,100,105,97,95,114,95,54,55,0),457]]);
          let hiadt: Map<any, any> = new Map([[String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,100,95,55,49,0),152], [String.fromCharCode(98,95,50,52,95,110,111,110,122,101,114,111,0),255], [String.fromCharCode(101,120,116,101,110,100,105,110,103,95,110,95,56,56,0),801]]);
          let defaultfootballbg8: Map<any, any> = new Map([[String.fromCharCode(109,109,105,117,116,105,108,115,95,56,95,56,48,0),String.fromCharCode(105,95,51,54,95,116,98,109,108,0)], [String.fromCharCode(108,95,54,54,95,112,108,97,99,101,104,111,108,100,101,114,115,0),String.fromCharCode(100,95,49,51,95,118,108,102,102,0)]]);
         moreB = hiadt.size >= 100;
         acceptedy = appleI.size >= 48;
         libhermesW |= ((acceptedy ? 4 : 4) ^ 1);
         appleI = new Map([[`${appleI.size}`, libhermesW]]);
         hiadt = new Map([[`${defaultfootballbg8.size}`, defaultfootballbg8.size]]);
      }
         eyecloseq = !moreB && yellowtoredK.length == 10;
         eyecloseq = yellowtoredK.includes(moreB);
      if ((yellowtoredK.length >> (Math.min(Math.abs(3), 1))) <= 1) {
          let select7 = 5;
         yellowtoredK.push(select7);
      }
      if (3 <= yellowtoredK.length && (3 - yellowtoredK.length) <= 1) {
          let libjsinspectorY = String.fromCharCode(98,97,100,103,101,95,113,95,54,48,0);
          let downloadedp = String.fromCharCode(118,95,57,57,95,103,100,112,114,0);
          let dropdownl: Array<any> = [450, 27, 582];
          let iconclosewhitebgY = true;
          let apples = String.fromCharCode(112,97,114,116,121,95,117,95,50,51,0);
         yellowtoredK = [3 % (Math.max(4, dropdownl.length))];
         libjsinspectorY = `${1 * apples.length}`;
         downloadedp = `${libjsinspectorY.length >> (Math.min(Math.abs(2), 4))}`;
         dropdownl = [downloadedp.length];
         iconclosewhitebgY = apples.length > 29 && iconclosewhitebgY;
      }
      sharedP %= Math.max((1 | (moreB ? 1 : 1)), 1);
       let iconarrowrightB: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,95,114,95,52,48,0),String.fromCharCode(97,95,56,95,109,97,120,105,109,105,122,101,100,0)], [String.fromCharCode(97,95,53,50,95,99,108,105,112,112,101,100,0),String.fromCharCode(105,100,99,105,110,95,115,95,54,50,0)], [String.fromCharCode(117,110,105,120,95,122,95,52,51,0),String.fromCharCode(109,105,116,101,114,95,107,95,56,53,0)]]);
       let inouttargetyellowa: Map<any, any> = new Map([[String.fromCharCode(122,95,54,52,95,97,117,116,104,111,114,0),147], [String.fromCharCode(119,95,51,49,95,112,97,114,97,109,115,116,114,105,110,103,0),704]]);
      for (let p = 0; p < 2; p++) {
         inouttargetyellowa = new Map([[`${iconarrowrightB.size}`, inouttargetyellowa.size | 3]]);
      }
          let notificationgray8: Array<any> = [674, 260];
          let awayplayert: Map<any, any> = new Map([[String.fromCharCode(115,116,115,122,95,112,95,53,51,0),451], [String.fromCharCode(117,95,57,50,95,97,98,99,115,0),56]]);
         inouttargetyellowa.set(`${notificationgray8.length}`, 2);
         notificationgray8.push(awayplayert.size);
         awayplayert.set(`${awayplayert.size}`, awayplayert.size);
      while (!Array.from(inouttargetyellowa.keys()).includes(`${iconarrowrightB.size}`)) {
         inouttargetyellowa = new Map([[`${iconarrowrightB.size}`, 1]]);
         break;
      }
         iconarrowrightB.set(`${iconarrowrightB.size}`, iconarrowrightB.size * 3);
      while (iconarrowrightB.get(`${inouttargetyellowa.size}`) != null) {
         iconarrowrightB = new Map([[`${inouttargetyellowa.size}`, inouttargetyellowa.size << (Math.min(2, Math.abs(iconarrowrightB.size)))]]);
         break;
      }
      if (3 > (inouttargetyellowa.size & 1)) {
         iconarrowrightB = new Map([[`${inouttargetyellowa.size}`, 1]]);
      }
      v_lockl &= 3;

        this.#triggerUmengEvent(FSliderCenter.FLeakcheckerMain);

       let combineL = String.fromCharCode(108,111,103,105,110,95,113,95,51,52,0);
       let componentregistry9: Array<any> = [806, 822, 73];
       let awaym: Array<any> = [732, 922, 842];
      while (componentregistry9.length >= 5) {
         componentregistry9.push(componentregistry9.length);
         break;
      }
          let bingb = String.fromCharCode(100,95,52,53,95,100,117,109,112,101,114,0);
          let jnewsT = 2.0;
          let shrinkW = false;
         awaym.push(componentregistry9.length);
         bingb = `${bingb.length}`;
         jnewsT /= Math.max(5, parseFloat(`${bingb.length / 1}`));
         shrinkW = !shrinkW;
      while (4 <= combineL.length) {
          let orangedownarrowz: Map<any, any> = new Map([[String.fromCharCode(106,97,99,107,95,98,95,53,53,0),326], [String.fromCharCode(117,112,115,104,105,102,116,95,54,95,57,53,0),252], [String.fromCharCode(100,117,112,108,105,99,97,116,101,95,54,95,56,56,0),373]]);
          let typingy = 2.0;
         componentregistry9.push((String.fromCharCode(50,0) == combineL ? parseInt(`${typingy}`) : combineL.length));
         orangedownarrowz = new Map([[`${orangedownarrowz.size}`, orangedownarrowz.size]]);
         typingy /= Math.max(3, parseFloat(`${1 | orangedownarrowz.size}`));
         break;
      }
          let ping7 = String.fromCharCode(112,114,101,99,101,110,99,101,95,52,95,55,50,0);
          let matchinactiveX = 3;
         combineL += `${componentregistry9.length % 2}`;
         ping7 = `${ping7.length / (Math.max(9, matchinactiveX))}`;
         matchinactiveX |= matchinactiveX - 1;
      while (3 > (combineL.length * 5) || 5 > (combineL.length * awaym.length)) {
          let langkeyb = false;
          let darkp = 1;
          let whitetickX: Array<any> = [624, 480];
         combineL = `${whitetickX.length}`;
         langkeyb = 95 >= darkp && langkeyb;
         darkp ^= 3;
         whitetickX = [darkp];
         break;
      }
      for (let z = 0; z < 2; z++) {
         componentregistry9 = [3 / (Math.max(9, awaym.length))];
      }
      let componentregistryc = combineL == String.fromCharCode(117,121,100,0);
      do {
          let yellowvideolivea = 0;
         combineL += `${awaym.length % 1}`;
         yellowvideolivea >>= Math.min(Math.abs(3), 1);
         if (componentregistryc) {
            break;
         }
      } while (componentregistryc && (awaym.length >= 4));
          let debugg = String.fromCharCode(112,117,115,104,98,97,99,107,95,106,95,49,49,0);
          let fullW = 3.0;
          let downloadingQ = 2.0;
         componentregistry9.push(componentregistry9.length);
         debugg += "2";
         fullW += parseFloat(`${3}`);
         downloadingQ /= Math.max(parseInt(`${downloadingQ}`), 2);
         componentregistry9 = [(combineL == String.fromCharCode(109,0) ? awaym.length : combineL.length)];
      overlayY += `${(String.fromCharCode(97,0) == loadingj ? loadingj.length : parseInt(`${mapbufferT}`))}`;
   if ((parseInt(`${shielddone5}`) + overlayY.length) <= 5 && (parseInt(`${shielddone5}`) + overlayY.length) <= 5) {
      shielddone5 /= Math.max(1, 2);
   }
   while ((5.30 / (Math.max(3, shielddone5))) >= 2.10) {
       let reactnativeratingso = false;
       let brightness9 = 2;
       let privacyR = 0;
      let currentF = reactnativeratingso ? !reactnativeratingso : reactnativeratingso;
      do {
         reactnativeratingso = 74 == brightness9;
         if (currentF) {
            break;
         }
      } while (currentF && (!reactnativeratingso));
          let iconviewer0: Array<any> = [659, 280];
          let tempnodatagifK = String.fromCharCode(113,95,49,57,95,109,117,108,116,105,112,108,101,0);
          let awayiconz = 4.0;
         brightness9 &= ((reactnativeratingso ? 2 : 1) | parseInt(`${awayiconz}`));
         iconviewer0 = [iconviewer0.length | tempnodatagifK.length];
         tempnodatagifK = `${(tempnodatagifK == String.fromCharCode(103,0) ? iconviewer0.length : tempnodatagifK.length)}`;
         awayiconz *= tempnodatagifK.length;
      shielddone5 += v_lockl;
      break;
   }
      vignetteI = `${overlayY.length & vignetteI.length}`;
      sharedP >>= Math.min(5, Math.abs(static_48.length & 3));
      vignetteI = `${(vignetteI == String.fromCharCode(107,0) ? overlayY.length : vignetteI.length)}`;
   let suggestiony = static_48.length <= 8193941;
   do {
      static_48.push(3);
      if (suggestiony) {
         break;
      }
   } while (((sharedP % (Math.max(static_48.length, 4))) <= 1) && suggestiony);
   while (2 == (static_48.length & vignetteI.length) || (2 & vignetteI.length) == 2) {
       let goallogoG = 0.0;
       let nodeg = 3.0;
       let middlesoundK: Map<any, any> = new Map([[String.fromCharCode(122,95,57,50,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0),String.fromCharCode(107,95,56,49,95,114,103,98,116,111,121,118,0)], [String.fromCharCode(116,95,54,56,95,105,112,118,105,100,101,111,0),String.fromCharCode(112,95,49,57,95,120,100,99,97,109,0)]]);
         middlesoundK = new Map([[`${goallogoG}`, parseInt(`${nodeg}`) - parseInt(`${goallogoG}`)]]);
      for (let l = 0; l < 2; l++) {
         nodeg /= Math.max(5, middlesoundK.size);
      }
      let phoneshare4 = 6822618.0 >= goallogoG;
      do {
         goallogoG /= Math.max(4, parseFloat(`${parseInt(`${nodeg}`) / (Math.max(4, middlesoundK.size))}`));
         if (phoneshare4) {
            break;
         }
      } while (phoneshare4 && ((goallogoG - 4.64) == 4.90 && 3 == (middlesoundK.size - parseInt(`${goallogoG}`))));
      let yellowanimationliveC = nodeg <= 5261195.0;
      do {
          let screen6 = String.fromCharCode(98,95,57,51,95,115,116,114,101,97,109,115,0);
          let telemetry9 = 0.0;
          let placeholderp = 0.0;
          let fullF = 2.0;
          let gifgoalbgf = 2;
         nodeg /= Math.max(4, 2);
         screen6 = `${(String.fromCharCode(116,0) == screen6 ? parseInt(`${placeholderp}`) : screen6.length)}`;
         telemetry9 *= gifgoalbgf >> (Math.min(4, Math.abs(3)));
         placeholderp += parseFloat(`${parseInt(`${placeholderp}`) * 3}`);
         fullF /= Math.max(2, parseFloat(`${parseInt(`${telemetry9}`) / (Math.max(5, parseInt(`${placeholderp}`)))}`));
         gifgoalbgf &= 3 * parseInt(`${placeholderp}`);
         if (yellowanimationliveC) {
            break;
         }
      } while (yellowanimationliveC && (!Array.from(middlesoundK.keys()).includes(`${nodeg}`)));
      if ((goallogoG + 1) == 2.59) {
         nodeg *= parseInt(`${nodeg}`) % 3;
      }
      while ((1 ^ middlesoundK.size) == 1) {
         middlesoundK = new Map([[`${goallogoG}`, parseInt(`${goallogoG}`) | 2]]);
         break;
      }
         nodeg /= Math.max(2, parseInt(`${goallogoG}`) + 2);
       let modeP = String.fromCharCode(98,111,111,116,115,116,114,97,112,95,57,95,49,57,0);
      for (let s = 0; s < 1; s++) {
         nodeg += 2;
      }
      vignetteI = `${2 >> (Math.min(Math.abs(parseInt(`${nodeg}`)), 1))}`;
      break;
   }
       let scrollviewM = String.fromCharCode(112,114,101,102,101,114,95,109,95,57,50,0);
       let previewZ = 1;
       let rightD = 5;
         previewZ |= previewZ * 1;
      if (1 >= (1 * rightD) || 4 >= (scrollviewM.length * 1)) {
          let emoji8 = true;
          let otherB = String.fromCharCode(103,95,49,52,95,102,111,115,115,105,108,0);
          let g_imageF = 2.0;
          let loginsuccessC = 5;
          let filter2 = 3;
         rightD += 2 / (Math.max(8, loginsuccessC));
         emoji8 = 70 < filter2;
         otherB += `${(otherB == String.fromCharCode(104,0) ? otherB.length : filter2)}`;
         g_imageF += parseFloat(`${1 << (Math.min(Math.abs(filter2), 5))}`);
         loginsuccessC <<= Math.min(1, Math.abs(filter2));
      }
      if (previewZ <= 1) {
         previewZ ^= 3 << (Math.min(4, Math.abs(rightD)));
      }
      while (rightD < 4) {
         rightD |= 3 * scrollviewM.length;
         break;
      }
       let basketballplayerplaceholderb = 2.0;
      while (!scrollviewM.endsWith(`${previewZ}`)) {
         previewZ += scrollviewM.length % 2;
         break;
      }
         previewZ <<= Math.min(2, Math.abs(parseInt(`${basketballplayerplaceholderb}`)));
      while (3 < previewZ) {
         basketballplayerplaceholderb += parseFloat(`${rightD / 3}`);
         break;
      }
      while (!scrollviewM.endsWith(`${previewZ}`)) {
         scrollviewM = `${parseInt(`${basketballplayerplaceholderb}`)}`;
         break;
      }
      overlayY = `${parseInt(`${shielddone5}`)}`;
      loadingj = `${1 << (Math.min(3, static_48.length))}`;
   while (5 < overlayY.length) {
       let ajaxh: Map<any, any> = new Map([[String.fromCharCode(109,105,115,109,97,116,99,104,101,115,95,118,95,54,49,0),909], [String.fromCharCode(104,97,115,120,95,118,95,52,52,0),603], [String.fromCharCode(117,95,49,57,95,107,112,115,0),117]]);
       let weathero = 5.0;
       let iconarrowleftM = String.fromCharCode(101,120,116,114,97,115,95,98,95,55,50,0);
       let malaysiao = false;
       let windF: Array<any> = [580, 657];
          let mbjscommonB = String.fromCharCode(113,95,54,53,95,111,99,115,112,105,100,0);
         malaysiao = ajaxh.get(`${malaysiao}`) == null;
         mbjscommonB = `${mbjscommonB.length & mbjscommonB.length}`;
      for (let k = 0; k < 3; k++) {
          let airbnbstarselectedD = 0;
         iconarrowleftM = `${parseInt(`${weathero}`) * ajaxh.size}`;
         airbnbstarselectedD /= Math.max(3, 1);
      }
          let langkeyz = false;
          let chinae = true;
          let mbbannerf = 5;
         malaysiao = !malaysiao;
         langkeyz = !langkeyz;
         chinae = !langkeyz;
         mbbannerf /= Math.max(1, 3 | mbbannerf);
      while (malaysiao) {
         malaysiao = weathero > 63.13 || 31 > windF.length;
         break;
      }
         malaysiao = (63 > (windF.length - (malaysiao ? 63 : windF.length)));
       let distl = 5;
      if (!iconarrowleftM.includes(`${malaysiao}`)) {
         iconarrowleftM = "2";
      }
      while (malaysiao) {
          let whitesmalltickf = String.fromCharCode(97,95,51,50,95,114,101,115,112,111,110,100,101,114,0);
          let catalogs: Map<any, any> = new Map([[String.fromCharCode(100,118,98,115,117,98,95,120,95,52,56,0),385], [String.fromCharCode(119,95,53,56,95,115,99,97,108,101,0),679]]);
         windF.push(distl / 1);
         whitesmalltickf += `${3 << (Math.min(1, whitesmalltickf.length))}`;
         catalogs.set(`${whitesmalltickf}`, whitesmalltickf.length | 2);
         break;
      }
      let iconarrowleftH = 5629491 <= ajaxh.size;
      do {
         ajaxh = new Map([[`${ajaxh.size}`, 3]]);
         if (iconarrowleftH) {
            break;
         }
      } while ((2 == (iconarrowleftM.length - ajaxh.size) && 3 == (2 - ajaxh.size)) && iconarrowleftH);
         ajaxh = new Map([[iconarrowleftM, 1]]);
         ajaxh.set(`${weathero}`, parseInt(`${weathero}`));
       let runtimeschedulers = 0.0;
      let showV = runtimeschedulers <= 6902660.0;
      do {
          let playershirtG = String.fromCharCode(112,95,52,95,105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,0);
          let whitebell0 = false;
          let type_t5o = String.fromCharCode(118,95,49,48,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0);
          let mbbanners = String.fromCharCode(110,95,53,56,95,100,112,99,109,0);
          let paginationI = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,52,95,53,48,0);
         runtimeschedulers -= parseFloat(`${parseInt(`${runtimeschedulers}`) - 2}`);
         playershirtG = `${mbbanners.length << (Math.min(paginationI.length, 5))}`;
         whitebell0 = String.fromCharCode(73,0) == playershirtG;
         type_t5o += `${(playershirtG == String.fromCharCode(67,0) ? mbbanners.length : playershirtG.length)}`;
         paginationI = `${(paginationI == String.fromCharCode(53,0) ? mbbanners.length : paginationI.length)}`;
         if (showV) {
            break;
         }
      } while ((5 >= (iconarrowleftM.length / (Math.max(4, 5))) || 1.49 >= (runtimeschedulers * parseFloat(`${iconarrowleftM.length}`))) && showV);
      for (let b = 0; b < 3; b++) {
         malaysiao = !malaysiao;
      }
         malaysiao = distl >= 91;
      overlayY += `${iconarrowleftM.length}`;
      break;
   }
   for (let l = 0; l < 1; l++) {
      mapbufferT /= Math.max(parseFloat(`${redscoreballg.length & static_48.length}`), 3);
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FLeakcheckerMain);

   while ((loadingj.length & 1) == 5 && 4 == (1 & v_lockl)) {
      v_lockl ^= 2 | v_lockl;
      break;
   }
      mapbufferT *= (parseFloat(`${parseInt(`${mapbufferT}`) - (runtimescheduler3 ? 5 : 3)}`));
      v_lockl |= loadingj.length;
   let signinuph = 8727557.0 >= shielddone5;
   do {
      shielddone5 *= 2;
      if (signinuph) {
         break;
      }
   } while (signinuph && (5 > (parseInt(`${shielddone5}`) + v_lockl) || (shielddone5 + 5.69) > 4.75));
   while (5 <= redscoreballg.length || runtimescheduler3) {
      redscoreballg += `${(static_48.length ^ (runtimescheduler3 ? 1 : 1))}`;
      break;
   }
      overlayY = "3";
   while (runtimescheduler3) {
      runtimescheduler3 = (v_lockl / (Math.max(redscoreballg.length, 6))) <= 16;
      break;
   }
   while ((shielddone5 * 2.100) <= 1.97) {
      shielddone5 += ((runtimescheduler3 ? 1 : 4));
      break;
   }
   let memberj = 6945573 >= vignetteI.length;
   do {
      vignetteI += `${parseInt(`${shielddone5}`) / 3}`;
      if (memberj) {
         break;
      }
   } while (memberj && (runtimescheduler3));
   while (!static_48.includes(mapbufferT)) {
      mapbufferT += parseFloat(`${v_lockl | 1}`);
      break;
   }
      vignetteI = `${parseInt(`${shielddone5}`)}`;
      sharedP |= vignetteI.length % 3;
        this.#triggerCustomEvent('click', IIPhoneshare.FViewer);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        this.#triggerUmengEvent(FSliderCenter.FGreenarrowupText, {
            'keyword': keyword,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FGreenarrowupText, {
            'keyword': keyword,
        });
        this.#triggerCustomEvent('view', IIPhoneshare.FZoom, {
            params: {
                desc_1: keyword,
            }
        });
    }


    
    static catalogViewsAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        this.#triggerUmengEvent(FSliderCenter.FRedirect, {
            'category_id': category_id,
            'category_name': category_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FRedirect, {
            'category_id': category_id,
            'category_name': category_name,
        });
        this.#triggerCustomEvent('view', IIPhoneshare.FImagemanager, {
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });
    }

    static catalogClicksAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        this.#triggerUmengEvent(FSliderCenter.FTeamdetailsbg, {
            'category_id': category_id,
            'category_name': category_name,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FTeamdetailsbg, {
            'category_id': category_id,
            'category_name': category_name,
        });
        this.#triggerCustomEvent('click', IIPhoneshare.FImagemanager, {
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });
    }


    
    static playsViewsAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: FSliderCenter = FSliderCenter.FUpload;

        if (isXmode) {
            eventId = FSliderCenter.FNativeex;
        }

        this.#triggerUmengEvent(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        this.#triggerFirebaseCustomEvent(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        this.#triggerCustomEvent('view', isXmode
            ? IIPhoneshare.FPredictionwin
            : IIPhoneshare.FIconstarRight,
            {
                params: {
                    desc_1: 'vod.id:' + vod_id,
                    desc_2: 'vod.name:' + vod_name,
                }
            },
        );
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: FSliderCenter = FSliderCenter.FCombinedFullscreenmin;

        if (isXmode) {
            eventId = FSliderCenter.FEdit;
        }

        this.#triggerUmengEvent(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        this.#triggerFirebaseCustomEvent(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        this.#triggerCustomEvent('view', isXmode
            ? IIPhoneshare.FVideoMovies
            : IIPhoneshare.FAbidetectViews,
            {
                params: {
                    desc_1: 'vod.id:' + vod_id,
                    desc_2: 'vod.name:' + vod_name,
                }
            },
        );
    }

    static playsShareClicksAnalytics = () => {
       let reactY = String.fromCharCode(97,108,105,103,110,105,110,103,95,113,95,54,57,0);
    let gestureH = String.fromCharCode(109,107,118,114,101,97,100,101,114,95,53,95,57,52,0);
    let u_centerR: Map<any, any> = new Map([[String.fromCharCode(114,116,114,101,101,110,111,100,101,95,109,95,56,50,0),889], [String.fromCharCode(99,95,51,57,95,115,101,112,97,114,97,116,111,114,115,0),735], [String.fromCharCode(115,111,108,118,101,114,95,55,95,50,48,0),451]]);
    let arrowO = 2;
    let iconpipshrinkV = String.fromCharCode(102,95,51,48,95,97,98,111,117,116,0);
    let activeI = 0.0;
    let popupY = String.fromCharCode(114,95,51,53,95,115,105,100,101,100,97,116,97,0);
    let container8 = String.fromCharCode(105,95,53,51,95,120,99,117,114,115,111,114,0);
    let fileY = String.fromCharCode(114,115,104,105,102,116,95,109,95,50,54,0);
    let traminii = 3;
    let root8 = 4.0;
    let inviteR = 4;
    let floaterU = 2;
       let release_8hM = String.fromCharCode(98,97,99,107,105,110,103,95,107,95,57,52,0);
       let libswscaleh = false;
       let whitetickV = 5;
         libswscaleh = !libswscaleh;
         libswscaleh = release_8hM.length == 17;
      let goallogoh = 9279359 <= whitetickV;
      do {
         whitetickV -= release_8hM.length & 1;
         if (goallogoh) {
            break;
         }
      } while ((release_8hM.length >= 2) && goallogoh);
      while (5 < (4 - whitetickV) || 4 < (whitetickV - 4)) {
         whitetickV ^= whitetickV;
         break;
      }
          let showmorep = String.fromCharCode(104,101,105,103,104,116,115,95,117,95,57,52,0);
          let modityt = String.fromCharCode(112,114,111,112,111,115,101,95,57,95,53,57,0);
          let iconcloseI = String.fromCharCode(102,109,117,108,95,48,95,49,48,48,0);
         libswscaleh = (modityt.length >> (Math.min(release_8hM.length, 2))) <= 3;
         showmorep += `${iconcloseI.length / 3}`;
         modityt += `${(String.fromCharCode(104,0) == iconcloseI ? showmorep.length : iconcloseI.length)}`;
      if (!libswscaleh) {
         release_8hM += `${whitetickV}`;
      }
         libswscaleh = whitetickV == 80;
         libswscaleh = !libswscaleh;
         release_8hM += `${(String.fromCharCode(50,0) == release_8hM ? (libswscaleh ? 4 : 1) : release_8hM.length)}`;
      activeI += parseFloat(`${whitetickV}`);
   if (u_centerR.size < popupY.length) {
       let dataT = 2.0;
       let guideH = String.fromCharCode(99,119,110,100,95,106,95,53,0);
       let crossb = false;
       let airbnbstarselected8 = 0;
         guideH = `${airbnbstarselected8 * parseInt(`${dataT}`)}`;
      while (2 < guideH.length) {
         guideH += `${parseInt(`${dataT}`) / (Math.max(3, 8))}`;
         break;
      }
      while (2 == (airbnbstarselected8 % 5)) {
         crossb = airbnbstarselected8 >= 76;
         break;
      }
       let giflivestreamingv = 1.0;
       let fnewinterstitialg = 5.0;
      u_centerR.set(`${activeI}`, popupY.length & 3);
   }
   if ((3 - traminii) < 4 && 3 < (traminii - iconpipshrinkV.length)) {
       let styles8 = 1.0;
       let footballT = String.fromCharCode(117,95,49,55,95,98,105,114,116,104,0);
      if (3 == (footballT.length / 3) || (3 * parseInt(`${styles8}`)) == 5) {
          let backK = String.fromCharCode(115,95,56,95,115,116,114,105,100,0);
          let dicelogox = String.fromCharCode(101,95,52,55,95,112,115,121,109,111,100,101,108,0);
         styles8 *= parseFloat(`${1}`);
         backK += "3";
         dicelogox += `${dicelogox.length}`;
      }
      let eact1 = styles8 >= 5413736.0;
      do {
         styles8 *= parseFloat(`${2 >> (Math.min(1, footballT.length))}`);
         if (eact1) {
            break;
         }
      } while ((!footballT.endsWith(`${styles8}`)) && eact1);
       let verticall: Array<any> = [String.fromCharCode(99,104,97,110,95,109,95,55,48,0), String.fromCharCode(115,95,51,95,99,105,114,99,117,108,97,114,0), String.fromCharCode(108,106,112,101,103,95,102,95,51,51,0)];
       let sansk: Array<any> = [677, 937, 500];
       let unfills = 0.0;
       let fullD = 4.0;
          let description_av = false;
          let checkboxy = String.fromCharCode(121,95,51,49,95,115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0);
          let basketballawayteamL = 5.0;
         fullD *= parseFloat(`${2}`);
         description_av = basketballawayteamL >= 1.89;
         checkboxy = `${parseInt(`${basketballawayteamL}`)}`;
      traminii ^= arrowO | 3;
   }
   while (!iconpipshrinkV.includes(`${fileY.length}`)) {
      iconpipshrinkV = `${arrowO / (Math.max(5, container8.length))}`;
      break;
   }
   while (5 < (fileY.length + arrowO)) {
      fileY = `${container8.length}`;
      break;
   }
      traminii += popupY.length << (Math.min(Math.abs(3), 5));
       let ranky = String.fromCharCode(119,95,54,53,95,99,97,112,105,0);
       let predictionv: Array<any> = [853, 8];
       let emojiE = String.fromCharCode(107,95,53,48,95,108,104,97,115,104,0);
      while (3 < predictionv.length) {
         ranky += `${emojiE.length}`;
         break;
      }
         emojiE = `${emojiE.length}`;
         emojiE = `${emojiE.length ^ predictionv.length}`;
      let executorN = emojiE.length <= 6278558;
      do {
         emojiE += `${emojiE.length & 3}`;
         if (executorN) {
            break;
         }
      } while (((predictionv.length % (Math.max(2, 5))) < 5) && executorN);
          let actionn = String.fromCharCode(113,95,51,52,95,116,108,117,116,0);
          let backwhiteF = String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,103,95,56,48,0);
         emojiE = `${ranky.length / 1}`;
         actionn += `${(backwhiteF == String.fromCharCode(82,0) ? actionn.length : backwhiteF.length)}`;
      for (let r = 0; r < 3; r++) {
         emojiE += `${(String.fromCharCode(83,0) == emojiE ? emojiE.length : predictionv.length)}`;
      }
         predictionv = [(ranky == String.fromCharCode(51,0) ? predictionv.length : ranky.length)];
      if ((predictionv.length + emojiE.length) == 1 || (emojiE.length + 1) == 3) {
         predictionv = [3];
      }
         ranky = `${emojiE.length}`;
      fileY = `${parseInt(`${root8}`)}`;
      activeI -= parseFloat(`${iconpipshrinkV.length % (Math.max(2, 4))}`);
      container8 = `${2 ^ traminii}`;
      u_centerR = new Map([[`${arrowO}`, traminii]]);
       let orangedownarrowF = String.fromCharCode(107,95,49,48,48,95,99,111,110,116,105,110,117,97,108,0);
       let stationsp = false;
      for (let o = 0; o < 3; o++) {
          let sendt = 0.0;
          let indicatorX = 1.0;
          let heartr: Array<any> = [863, 368];
          let internetQ: Map<any, any> = new Map([[String.fromCharCode(110,101,109,111,110,105,99,95,107,95,55,56,0),765], [String.fromCharCode(110,95,53,50,95,112,114,101,115,115,101,100,0),809], [String.fromCharCode(114,95,57,49,95,98,108,97,99,107,0),986]]);
          let libzeus3 = String.fromCharCode(102,109,97,100,100,95,104,95,49,0);
         stationsp = (heartr.length % (Math.max(internetQ.size, 2))) < 96;
         sendt /= Math.max(parseFloat(`${libzeus3.length}`), 3);
         indicatorX /= Math.max(5, libzeus3.length);
         heartr.push(libzeus3.length ^ parseInt(`${indicatorX}`));
         internetQ = new Map([[`${sendt}`, 3]]);
      }
      while (orangedownarrowF.length < 2) {
         stationsp = (58 == ((stationsp ? orangedownarrowF.length : 58) << (Math.min(orangedownarrowF.length, 5))));
         break;
      }
         stationsp = orangedownarrowF.length <= 47 || !stationsp;
         stationsp = !stationsp;
      while (stationsp) {
         stationsp = !stationsp;
         break;
      }
          let soundA = 2.0;
          let searchA = String.fromCharCode(117,110,99,97,99,104,101,100,95,54,95,51,57,0);
         stationsp = soundA < 66.81;
         soundA *= (searchA == String.fromCharCode(52,0) ? searchA.length : searchA.length);
      gestureH += `${orangedownarrowF.length * gestureH.length}`;
      gestureH += "3";
       let connection7 = false;
       let pauseY: Array<any> = [528, 531];
       let loginv = String.fromCharCode(110,95,56,52,95,100,111,99,105,100,115,0);
       let bellh = String.fromCharCode(102,97,118,111,114,105,116,101,95,121,95,49,48,48,0);
          let dycreatorG = String.fromCharCode(122,95,50,55,95,115,112,108,97,115,104,0);
          let toponj = 1.0;
         connection7 = bellh.length == 35;
         dycreatorG += `${dycreatorG.length}`;
         toponj += dycreatorG.length;
      if (pauseY.length == 2 || (pauseY.length << (Math.min(Math.abs(2), 4))) == 2) {
          let components7 = String.fromCharCode(104,118,99,99,95,114,95,55,55,0);
          let libreactnativejniD = 5;
          let footballfiledlayout0 = String.fromCharCode(117,109,102,97,118,114,95,113,95,54,50,0);
          let libavdeviceM = 0.0;
          let flyerS = 3;
         connection7 = loginv.length < 87;
         components7 = `${components7.length}`;
         libreactnativejniD |= 3 >> (Math.min(2, Math.abs(libreactnativejniD)));
         footballfiledlayout0 = `${parseInt(`${libavdeviceM}`) >> (Math.min(Math.abs(1), 1))}`;
         libavdeviceM -= parseFloat(`${1 | parseInt(`${libavdeviceM}`)}`);
         flyerS ^= flyerS * 1;
      }
      for (let r = 0; r < 1; r++) {
         connection7 = 80 == bellh.length;
      }
         pauseY = [pauseY.length % 1];
          let championY = 1.0;
          let actionsZ: Map<any, any> = new Map([[String.fromCharCode(114,95,51,51,95,120,97,115,109,0),461], [String.fromCharCode(117,95,52,51,95,99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0),909]]);
          let placementa: Map<any, any> = new Map([[String.fromCharCode(121,95,50,52,95,117,110,105,116,121,0),229], [String.fromCharCode(115,95,56,49,95,119,97,116,99,104,101,100,0),533], [String.fromCharCode(109,95,56,49,95,112,114,105,110,116,99,111,109,112,0),448]]);
         pauseY.push((2 ^ (connection7 ? 3 : 3)));
         championY += 1;
         actionsZ.set(`${actionsZ.size}`, 3);
         placementa.set(`${championY}`, 3);
      activeI /= Math.max(2, parseFloat(`${container8.length}`));

        this.#triggerUmengEvent(FSliderCenter.FImagenomoredata);

      root8 += (parseFloat(`${fileY == String.fromCharCode(100,0) ? fileY.length : arrowO}`));
   while (5 > u_centerR.size) {
       let terms9 = 2.0;
       let renewR = String.fromCharCode(103,95,51,95,115,117,110,114,97,115,116,0);
       let adultY = 0.0;
       let googleX = 3;
         renewR = "3";
         adultY /= Math.max(4, 1 | parseInt(`${terms9}`));
      let questicony = 5115665 >= googleX;
      do {
         googleX -= parseInt(`${adultY}`) | 3;
         if (questicony) {
            break;
         }
      } while (((2 + renewR.length) > 3 || (googleX + renewR.length) > 2) && questicony);
         terms9 += renewR.length;
         adultY *= 1 - googleX;
         adultY += (String.fromCharCode(121,0) == renewR ? renewR.length : googleX);
      let iconnotificationnewq = googleX <= 8573323;
      do {
          let static_kQ = String.fromCharCode(114,101,108,102,117,110,99,95,49,95,49,0);
          let libhermesS = false;
         googleX <<= Math.min(Math.abs(static_kQ.length << (Math.min(3, Math.abs(parseInt(`${adultY}`))))), 3);
         static_kQ = "3";
         if (iconnotificationnewq) {
            break;
         }
      } while (iconnotificationnewq && ((adultY - 1.100) < 3.48 && 5.82 < (1.100 - adultY)));
         terms9 *= 1 << (Math.min(4, renewR.length));
          let iconcurrentmatchX = 5.0;
         adultY -= 1 + parseInt(`${iconcurrentmatchX}`);
         adultY *= 1;
       let profilepicA = String.fromCharCode(99,95,54,50,95,117,110,113,117,97,110,116,105,122,101,0);
      let selectionH = 7593773 <= googleX;
      do {
          let u_unlocka = String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,98,95,52,0);
         googleX %= Math.max(1, 1);
         u_unlocka = `${u_unlocka.length % 3}`;
         if (selectionH) {
            break;
         }
      } while (selectionH && (3 > (profilepicA.length & 1) && (1 & profilepicA.length) > 4));
      popupY += `${(iconpipshrinkV == String.fromCharCode(122,0) ? parseInt(`${adultY}`) : iconpipshrinkV.length)}`;
      break;
   }
       let description_27 = 1;
       let zhuboM = 3.0;
       let arrowdownK = true;
       let themep: Map<any, any> = new Map([[String.fromCharCode(109,95,54,95,97,98,111,114,116,97,98,108,101,0),String.fromCharCode(112,95,51,51,95,112,115,115,104,0)], [String.fromCharCode(112,95,57,50,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0),String.fromCharCode(100,95,49,55,95,102,117,108,108,121,0)]]);
          let statsb = String.fromCharCode(118,95,55,48,95,118,101,114,105,102,105,97,98,108,101,0);
         zhuboM += ((arrowdownK ? 5 : 5) / (Math.max(parseInt(`${zhuboM}`), 3)));
         statsb = `${statsb.length}`;
      for (let n = 0; n < 1; n++) {
         arrowdownK = (10 == ((!arrowdownK ? 10 : themep.size) + themep.size));
      }
         arrowdownK = 70 >= description_27;
          let encrypt2 = String.fromCharCode(100,95,55,57,95,98,101,115,115,101,108,0);
          let loadinge = 4.0;
         zhuboM += parseInt(`${loadinge}`) & parseInt(`${zhuboM}`);
         encrypt2 += `${encrypt2.length}`;
         loadinge -= parseFloat(`${encrypt2.length}`);
         themep = new Map([[`${zhuboM}`, parseInt(`${zhuboM}`) ^ 2]]);
      while ((themep.size / (Math.max(2, 10))) < 1 || 3 < (2 << (Math.min(3, Math.abs(themep.size))))) {
         themep.set(`${arrowdownK}`, 1);
         break;
      }
      while (arrowdownK) {
          let cornerkickx = String.fromCharCode(119,95,52,51,95,99,111,110,116,97,105,110,101,100,0);
          let bggradientx = false;
          let sellA = 4.0;
         arrowdownK = bggradientx;
         cornerkickx += `${cornerkickx.length * 2}`;
         sellA *= cornerkickx.length | parseInt(`${sellA}`);
         break;
      }
      if ((themep.size + 2) < 2 && 2 < themep.size) {
          let basketballmatchdetailbg9: Map<any, any> = new Map([[String.fromCharCode(97,95,50,48,95,101,109,117,101,100,103,101,0),true ], [String.fromCharCode(99,116,105,109,101,95,119,95,50,54,0),true ], [String.fromCharCode(118,95,52,48,95,115,117,98,112,97,114,116,0),false ]]);
         themep = new Map([[`${themep.size}`, themep.size]]);
         basketballmatchdetailbg9.set(`${basketballmatchdetailbg9.size}`, basketballmatchdetailbg9.size ^ 3);
      }
      iconpipshrinkV = `${(String.fromCharCode(65,0) == popupY ? parseInt(`${activeI}`) : popupY.length)}`;
      inviteR &= u_centerR.size & 2;
      activeI *= parseFloat(`${1}`);
      root8 *= parseFloat(`${container8.length + 2}`);
       let static_21g = String.fromCharCode(115,101,101,95,108,95,49,55,0);
       let mbbannerR: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,103,114,97,116,105,99,117,108,101,0),false ], [String.fromCharCode(97,95,54,56,95,100,101,115,116,114,117,99,116,111,114,0),true ]]);
       let foundu = String.fromCharCode(102,97,108,115,101,95,57,95,52,52,0);
      while (2 >= (static_21g.length + mbbannerR.size)) {
          let castingj = false;
          let fcdaebecbcbafcdfceaaeccfeacdbq = 3.0;
         mbbannerR = new Map([[`${mbbannerR.size}`, foundu.length >> (Math.min(2, Math.abs(mbbannerR.size)))]]);
         castingj = !castingj;
         fcdaebecbcbafcdfceaaeccfeacdbq /= Math.max(3, ((castingj ? 5 : 3) % (Math.max(parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbq}`), 5))));
         break;
      }
      for (let e = 0; e < 1; e++) {
          let zhengpianV = 1.0;
          let watchQ = String.fromCharCode(119,111,114,100,108,101,110,95,98,95,50,51,0);
         static_21g = `${watchQ.length}`;
         zhengpianV += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${zhengpianV}`)), 5))}`);
         watchQ += "1";
      }
      while (mbbannerR.size > foundu.length) {
         mbbannerR.set(foundu, foundu.length);
         break;
      }
         mbbannerR.set(static_21g, foundu.length);
      for (let e = 0; e < 2; e++) {
          let gmaill = 2.0;
         mbbannerR.set(`${static_21g}`, mbbannerR.size & 3);
         gmaill -= parseFloat(`${parseInt(`${gmaill}`)}`);
      }
      gestureH += `${traminii}`;
      u_centerR = new Map([[`${activeI}`, parseInt(`${activeI}`)]]);
       let scorepopsoundJ = 0.0;
      for (let c = 0; c < 1; c++) {
         scorepopsoundJ /= Math.max(3, parseInt(`${scorepopsoundJ}`));
      }
      for (let z = 0; z < 1; z++) {
         scorepopsoundJ += parseInt(`${scorepopsoundJ}`) * parseInt(`${scorepopsoundJ}`);
      }
      for (let u = 0; u < 1; u++) {
         scorepopsoundJ -= 3;
      }
      container8 += `${3 / (Math.max(7, fileY.length))}`;
   let disconnected1 = 6081037.0 >= activeI;
   do {
      activeI += parseFloat(`${parseInt(`${root8}`) % 2}`);
      if (disconnected1) {
         break;
      }
   } while (((parseInt(`${activeI}`) * u_centerR.size) >= 2) && disconnected1);
       let livenodatabgimga: Array<any> = [String.fromCharCode(119,95,50,54,95,99,111,110,110,101,99,116,105,111,110,99,98,0), String.fromCharCode(100,105,97,108,111,103,95,119,95,49,51,0)];
          let whiteanimationliveb = String.fromCharCode(107,95,57,57,95,102,105,108,108,101,114,0);
          let typingB = String.fromCharCode(120,95,52,57,95,115,99,97,110,116,97,98,108,101,115,0);
         livenodatabgimga = [whiteanimationliveb.length % (Math.max(1, 10))];
         whiteanimationliveb += `${typingB.length}`;
         typingB = `${typingB.length / 2}`;
      for (let i = 0; i < 2; i++) {
          let huaweiE = String.fromCharCode(109,95,51,57,95,110,101,120,116,108,0);
          let rulesn = 0.0;
          let predictionO: Array<any> = [String.fromCharCode(113,95,53,54,95,98,97,115,101,108,105,110,101,0), String.fromCharCode(115,119,105,112,101,95,54,95,56,54,0)];
          let placementu = 5;
         livenodatabgimga.push(2);
         huaweiE = `${huaweiE.length << (Math.min(Math.abs(1), 3))}`;
         rulesn *= predictionO.length;
         predictionO = [parseInt(`${rulesn}`) | placementu];
         placementu <<= Math.min(2, Math.abs(placementu + predictionO.length));
      }
      while (livenodatabgimga.length == 2) {
         livenodatabgimga.push(2);
         break;
      }
      inviteR <<= Math.min(2, Math.abs(reactY.length & 1));
       let untickS = false;
       let mbjscommonh = String.fromCharCode(116,95,57,49,0);
       let matchdetailbgt = true;
         mbjscommonh += `${((untickS ? 5 : 5))}`;
         matchdetailbgt = mbjscommonh.length == 80;
      let iconarrowrightj = mbjscommonh == String.fromCharCode(55,121,122,0);
      do {
         mbjscommonh = `${(mbjscommonh == String.fromCharCode(71,0) ? mbjscommonh.length : (matchdetailbgt ? 5 : 4))}`;
         if (iconarrowrightj) {
            break;
         }
      } while (iconarrowrightj && (2 < mbjscommonh.length));
      if (mbjscommonh.length == 1) {
         mbjscommonh += `${((matchdetailbgt ? 5 : 5) * mbjscommonh.length)}`;
      }
         matchdetailbgt = untickS;
      while (mbjscommonh.endsWith(`${matchdetailbgt}`)) {
          let stylesc = String.fromCharCode(104,105,103,104,119,97,116,101,114,95,51,95,51,49,0);
          let launchM = String.fromCharCode(110,95,49,51,95,97,117,100,105,111,99,111,110,118,101,114,116,0);
         matchdetailbgt = (((!matchdetailbgt ? stylesc.length : 22) + stylesc.length) <= 22);
         launchM += "1";
         break;
      }
          let orangeuparrowb = 4.0;
         matchdetailbgt = mbjscommonh == String.fromCharCode(115,0);
         orangeuparrowb -= parseFloat(`${parseInt(`${orangeuparrowb}`)}`);
      if (!untickS) {
         untickS = !untickS;
      }
         matchdetailbgt = mbjscommonh.length >= 90;
      iconpipshrinkV = `${3 - fileY.length}`;
   while (container8 == String.fromCharCode(103,0)) {
      fileY += `${gestureH.length}`;
      break;
   }
        this.#triggerFirebaseCustomEvent(FSliderCenter.FImagenomoredata);

      root8 += parseFloat(`${2 % (Math.max(1, iconpipshrinkV.length))}`);
   let relateds = u_centerR.size >= 8823969;
   do {
      u_centerR.set(`${traminii}`, traminii);
      if (relateds) {
         break;
      }
   } while ((Array.from(u_centerR.values()).includes(traminii)) && relateds);
      activeI *= parseFloat(`${1 % (Math.max(4, gestureH.length))}`);
   if (gestureH.length >= 1) {
       let paginationK = false;
       let unselected_ = 2.0;
         paginationK = 73.46 < unselected_ || paginationK;
         paginationK = unselected_ <= 1.25;
         unselected_ -= (parseInt(`${unselected_}`) + (paginationK ? 5 : 5));
          let regengY = 3;
         paginationK = 98.99 == unselected_ || paginationK;
         regengY -= regengY % (Math.max(3, regengY));
         unselected_ *= (parseInt(`${unselected_}`) << (Math.min(3, Math.abs((paginationK ? 3 : 1)))));
      for (let q = 0; q < 1; q++) {
         paginationK = !paginationK;
      }
      popupY += `${u_centerR.size % 1}`;
   }
   while (4.60 <= (3.28 - root8)) {
      inviteR ^= fileY.length;
      break;
   }
      arrowO &= (String.fromCharCode(72,0) == iconpipshrinkV ? arrowO : iconpipshrinkV.length);
   for (let q = 0; q < 3; q++) {
      activeI /= Math.max(5, parseFloat(`${parseInt(`${activeI}`)}`));
   }
   let description_4sn = 8133720 >= u_centerR.size;
   do {
       let gestures7 = 1;
       let upgradet: Array<any> = [291, 670];
       let crownk: Array<any> = [913, 892];
         gestures7 *= upgradet.length;
         gestures7 <<= Math.min(1, Math.abs(3));
         upgradet = [crownk.length];
         crownk.push(2 * crownk.length);
      let navigation2 = 9776312 <= crownk.length;
      do {
         crownk.push(gestures7);
         if (navigation2) {
            break;
         }
      } while ((4 >= (upgradet.length / 4) || (4 / (Math.max(3, upgradet.length))) >= 2) && navigation2);
         gestures7 &= 1;
      let dacccfaabfbcbadeebddcabacdffdbp = 6132681 >= upgradet.length;
      do {
         upgradet = [3 << (Math.min(2, crownk.length))];
         if (dacccfaabfbcbadeebddcabacdffdbp) {
            break;
         }
      } while (dacccfaabfbcbadeebddcabacdffdbp && (4 >= (2 + upgradet.length) || (upgradet.length + 2) >= 4));
         crownk.push(upgradet.length);
      for (let m = 0; m < 3; m++) {
         gestures7 *= crownk.length ^ upgradet.length;
      }
      u_centerR = new Map([[fileY, 2]]);
      if (description_4sn) {
         break;
      }
   } while (description_4sn && ((u_centerR.size & arrowO) > 2));
   let collectionA = String.fromCharCode(56,99,111,99,0) == container8;
   do {
      container8 = `${popupY.length}`;
      if (collectionA) {
         break;
      }
   } while (collectionA && ((inviteR * 3) >= 1 || 3 >= (inviteR * container8.length)));
   let logoutI = 5978014 <= container8.length;
   do {
       let pushN: Map<any, any> = new Map([[String.fromCharCode(114,95,54,49,95,105,110,118,97,108,105,100,97,116,101,100,0),false ], [String.fromCharCode(106,95,53,55,95,114,101,113,117,101,115,116,0),false ]]);
       let hooksF = true;
       let rankb = String.fromCharCode(109,95,50,55,95,103,101,110,101,114,97,108,105,115,101,100,0);
       let guide2 = 0.0;
      for (let x = 0; x < 1; x++) {
         guide2 *= 3;
      }
          let inouttargetredx = 2;
          let configurev = 1.0;
          let rewardvideo4 = 5.0;
         rankb += `${(parseInt(`${rewardvideo4}`) - (hooksF ? 3 : 3))}`;
         inouttargetredx <<= Math.min(Math.abs(inouttargetredx / (Math.max(parseInt(`${configurev}`), 9))), 3);
         configurev += parseInt(`${configurev}`) - inouttargetredx;
         rewardvideo4 *= parseInt(`${configurev}`) << (Math.min(4, Math.abs(inouttargetredx)));
       let faviconQ: Array<any> = [938, 432, 93];
          let iconsaveimage8 = 1.0;
         hooksF = faviconQ.length > pushN.size;
         iconsaveimage8 /= Math.max(2, parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${iconsaveimage8}`)), 4))}`));
          let catalogJ = 1.0;
          let borderless6 = 1;
          let chatroombackgrounde: Map<any, any> = new Map([[String.fromCharCode(109,97,121,95,98,95,51,53,0),772], [String.fromCharCode(116,105,109,101,122,111,110,101,95,110,95,54,0),893]]);
         pushN = new Map([[`${pushN.size}`, pushN.size]]);
         catalogJ *= parseFloat(`${borderless6}`);
         borderless6 -= parseInt(`${catalogJ}`) % (Math.max(3, 3));
         chatroombackgrounde.set(`${borderless6}`, borderless6 % 2);
       let cornershootJ = String.fromCharCode(97,95,56,57,95,112,101,101,107,0);
      let chinag = rankb == String.fromCharCode(122,120,110,119,113,52,119,0);
      do {
          let promotiong = String.fromCharCode(120,95,54,49,95,101,116,105,109,101,0);
          let icondefaultthumbnailq = 3.0;
         rankb = `${pushN.size}`;
         promotiong = `${promotiong.length / 2}`;
         icondefaultthumbnailq *= promotiong.length;
         if (chinag) {
            break;
         }
      } while ((rankb.length >= faviconQ.length) && chinag);
         hooksF = rankb.length < 41;
         guide2 /= Math.max(pushN.size, 2);
      let owngoalC = faviconQ.length >= 8875066;
      do {
         faviconQ = [(parseInt(`${guide2}`) * (hooksF ? 1 : 5))];
         if (owngoalC) {
            break;
         }
      } while (owngoalC && (5 > (faviconQ.length << (Math.min(Math.abs(4), 2)))));
         guide2 /= Math.max(2, 2 >> (Math.min(4, Math.abs(parseInt(`${guide2}`)))));
          let nativeexd = 5.0;
         faviconQ.push(cornershootJ.length);
         nativeexd *= parseInt(`${nativeexd}`);
      container8 += `${(container8 == String.fromCharCode(67,0) ? arrowO : container8.length)}`;
      if (logoutI) {
         break;
      }
   } while (logoutI && ((3 + inviteR) > 2 && 3 > (container8.length + inviteR)));
       let matchdetailbgh = String.fromCharCode(97,99,107,101,100,95,122,95,53,51,0);
      while (matchdetailbgh.length == 2 || 2 == matchdetailbgh.length) {
         matchdetailbgh += "2";
         break;
      }
      while (matchdetailbgh.length >= matchdetailbgh.length) {
         matchdetailbgh += `${matchdetailbgh.length - 1}`;
         break;
      }
         matchdetailbgh = `${matchdetailbgh.length << (Math.min(matchdetailbgh.length, 5))}`;
      reactY += `${3 | matchdetailbgh.length}`;
   while (fileY != String.fromCharCode(57,0) && popupY != String.fromCharCode(75,0)) {
       let privacyl = 4;
       let positionfieldh = String.fromCharCode(108,95,50,56,95,110,111,116,0);
       let predictionbannersharede = false;
       let dacccfaabfbcbadeebddcabacdffdbE = String.fromCharCode(100,95,49,52,95,105,110,115,116,114,0);
      let videod = predictionbannersharede ? !predictionbannersharede : predictionbannersharede;
      do {
         predictionbannersharede = positionfieldh == String.fromCharCode(122,0) && privacyl > 54;
         if (videod) {
            break;
         }
      } while (videod && (!predictionbannersharede));
          let search1 = String.fromCharCode(106,95,53,49,95,111,114,100,101,114,105,110,103,0);
          let defaultteamh = 5.0;
         dacccfaabfbcbadeebddcabacdffdbE = `${1 << (Math.min(5, dacccfaabfbcbadeebddcabacdffdbE.length))}`;
         search1 += `${search1.length - 2}`;
         defaultteamh += 2 & search1.length;
          let google4 = 2.0;
         privacyl -= 1 << (Math.min(4, dacccfaabfbcbadeebddcabacdffdbE.length));
         google4 += 1;
         predictionbannersharede = !predictionbannersharede;
         predictionbannersharede = (((!predictionbannersharede ? positionfieldh.length : 13) % (Math.max(positionfieldh.length, 2))) <= 13);
          let iconsettingQ = String.fromCharCode(121,95,57,53,95,112,108,97,121,105,110,103,0);
          let mbbannerz = 4.0;
          let bellreminderM: Array<any> = [729, 467];
         privacyl ^= positionfieldh.length;
         iconsettingQ = `${iconsettingQ.length * 2}`;
         mbbannerz *= parseFloat(`${parseInt(`${mbbannerz}`) - 2}`);
         bellreminderM = [bellreminderM.length % 1];
       let statisticsq: Map<any, any> = new Map([[String.fromCharCode(112,95,50,95,115,97,98,101,114,0),false ], [String.fromCharCode(105,110,112,117,116,121,95,119,95,52,54,0),false ], [String.fromCharCode(109,97,120,95,56,95,49,57,0),false ]]);
       let placeholder0: Map<any, any> = new Map([[String.fromCharCode(115,95,55,48,95,105,102,97,99,101,0),400], [String.fromCharCode(118,105,98,114,97,116,101,95,105,95,50,0),409], [String.fromCharCode(122,95,54,53,95,100,115,112,114,0),468]]);
      while (statisticsq.get(`${placeholder0.size}`) == null) {
          let containerb: Array<any> = [938, 251];
         statisticsq = new Map([[`${placeholder0.size}`, 2]]);
         containerb = [containerb.length * 3];
         break;
      }
      if (2 < positionfieldh.length) {
         predictionbannersharede = positionfieldh.includes(`${privacyl}`);
      }
         positionfieldh += `${((predictionbannersharede ? 2 : 3))}`;
      while (3 >= (positionfieldh.length + statisticsq.size) && 5 >= (statisticsq.size + 3)) {
         positionfieldh = `${positionfieldh.length}`;
         break;
      }
         statisticsq.set(`${predictionbannersharede}`, ((predictionbannersharede ? 1 : 3) + placeholder0.size));
      popupY += `${3 >> (Math.min(5, Math.abs(traminii)))}`;
      break;
   }
      popupY = `${3 * fileY.length}`;
        this.#triggerCustomEvent('click', IIPhoneshare.FTwitterLogout);
    }

    static playsAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title = FSliderCenter.FColors,
        ads_name,
    }: {
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    }) => {
        this.#triggerUmengEvent(FSliderCenter.FColors);
        this.#triggerFirebaseCustomEvent(FSliderCenter.FColors);
        this.#triggerCustomEvent('view', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });
    }

    static playsAdsClickAnalytics = ({
        url,
        ads_slot_id,
        ads_id,
        ads_title = FSliderCenter.FContext,
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

        this.#triggerUmengEvent(FSliderCenter.FContext, params);
        this.#triggerFirebaseCustomEvent(FSliderCenter.FContext, params);
        this.#triggerCustomEvent('click', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: url ?? 'none',
            }
        });
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
        this.#triggerUmengEvent(FSliderCenter.FFirebase, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FFirebase, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('view', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });
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
        this.#triggerUmengEvent(FSliderCenter.FReactOverlay, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FReactOverlay, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('click', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });
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
        this.#triggerUmengEvent(FSliderCenter.FWeatherPredictionbanner, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FWeatherPredictionbanner, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('view', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });
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
        this.#triggerUmengEvent(FSliderCenter.FIconmoreScheduler, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerFirebaseCustomEvent(FSliderCenter.FIconmoreScheduler, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        this.#triggerCustomEvent('click', ads_title, {
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });
    }
}
