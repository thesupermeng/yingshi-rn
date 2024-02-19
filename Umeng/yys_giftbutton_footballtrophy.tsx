import AnalyticsUtil from './yys_templateprocessor';
import { yysIconstarReact } from './yys_iconbell_renew';

 
enum GDRLibbuffer {
    
    GDRLibavformatLauncher = 'Home-views',
    GDRSharemodalTelegram = 'Home-clicks',
    GDRRelated = 'Home-Carousel_views',
    GDRStyleRound = 'Home-Carousel_clicks',
    GDRPhoneTextlayoutmanager = 'Home-banner_views',
    GDRGreytickNewsshare = 'Home-banner_clicks',

    
    GDRClock = 'WatchAnytime-Views',
    GDRMember = 'WatchAnytime-video_view_times',
    GDRDist = 'WatchAnytime-X_views',
    GDRCloseLibavcodec = 'WatchAnytime-X_video_view_times',
    GDRIconnointernet = 'WatchAnytime-playlist_clicks',
    GDRLibcrashsdk = 'WatchAnytime-video_clicks',
    GDRMatchLine = 'WatchAnytime-ads_views',
    GDRClearLibbuffer = 'WatchAnytime-ads_clicks',

    
    GDRFavoriteIconshare = 'Sport-views',
    GDRSina = 'Sport-clicks',
    GDRTurnIndex = 'Sport-banner_views',
    GDRFloatingIconsetting = 'Sport-banner_clicks',

    
    GDRLessAndroid = 'SportDetails-views',
    GDRXvodTail = 'SportDetails-plays_times',
    GDRCcdfbdabcabbbedbLibfb = 'SportDetails-vip_popup_times',
    GDRMatchdetailbg = 'SportDetails-vip_clicks',

    
    GDRPageTumbnail = 'Playlist-views',
    GDRIncidentBackiconmask = 'Playlist-clicks',
    GDRFastforward = 'Playlist-topics_views',
    GDRLiveHash = 'Playlist-topics_clicks',

    
    GDRPlay = 'UserCenter-login_success_times',
    GDRSelectedLight = 'UserCenter-vip_login_success_times',
    GDREncryptorEyeopen = 'UserCenter-pay_vip_views',
    GDRActionGesture = 'UserCenter-invites_vip_views',

    
    GDRDefaultfootballbg = 'Search-result_views',
    GDRTurndown = 'Search-result_clicks',
    GDRSharedWeibo = 'Search-keywords',

    
    GDRTurndownZ = 'Catalog-views',
    GDRDefaultpredictionprofileTyping = 'Catalog-clicks',

    
    GDRCarousel = 'Play-views',
    GDRField = 'Play-plays_times',
    GDRQuest = 'Play-X_views',
    GDRPrediction = 'Play-X_plays_times',
    GDRTooltipsFile = 'Play-share_clicks',

    
    GDRCorner = 'Play-ads_views',
    GDRModalComponent = 'Play-ads_clicks',

    
    GDRIconwatchnowRenew = 'VideoPlayer-banner_views',
    GDROtherRedirect = 'VideoPlayer-banner_clicks',

    
    GDRMiniTarget = 'Profile-banner_views',
    GDRDebug = 'Profile-banner_clicks',
}

enum GDRBasketballtrophyIcondefaultthumbnail {
    
    GDRSubbasketballplayer = 'home_tab',

    
    GDRWhiteEmojiheart = 'watchAnytime',
    GDRViewsPrivate = 'watchAnytime_play_times',
    GDRWhitevideolive = 'watchAnytime_view_video',
    GDRLibglogIconrefresh = 'watchAnytime_view_playlist',

    GDRSubs = 'watchAnytime_x',
    GDRLatnRedcirclebg = 'watchAnytime_x_play_times',

    
    GDRCondensedPenaltyshoot = 'sport',
    GDRPrivatechatbg = 'sportDetail',
    GDRDefaultpredictionprofile = 'sportDetail_play_times',
    GDRDetailIconarrowrightorange = 'sportDetail_vip_popup',

    
    GDRYellowtoredCatagory = 'playlist',
    GDRMbbanner = 'playlist_topics',

    
    GDRLibyogaThailand = 'userCenter_login_success_times',
    GDREwardedProduct = 'userCenter_vip_login_success_times',
    GDRHeart = 'userCenter_view_vip',

    
    GDRIconsharefriendsStation = 'search_keywords',
    GDRRobotoCancel = 'search_result',

    
    GDRBallProfileinactive = 'catalog',

    
    GDREncryptorYellowvideolive = 'play',
    GDRWhitesmalltick = 'play_plays_times',
    GDRDefaultpredictionprofilePredictionbutton = 'Play_share',

    GDRZhuboTerms = 'play_x',
    GDRDropdownMapbuffer = 'play_x_plays_times',
}

export default class yys_giftbutton_footballtrophy {
    static showLog: boolean = false;

    
    static homeTabViewsAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRLibavformatLauncher, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRSubbasketballplayer,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRLibavformatLauncher);
    }

    static homeTabClicksAnalytics = ({ tab_id, tab_name }: { tab_id: string, tab_name: string }) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRSharemodalTelegram, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRSubbasketballplayer,
            params: {
                desc_1: 'tab.id:' + tab_id,
                desc_2: 'tab.name:' + tab_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRSharemodalTelegram);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRRelated, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        yysIconstarReact.onEvent({
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

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRRelated);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRStyleRound, {
            'tab_id': tab_id,
            'tab_name': tab_name,
        });
        yysIconstarReact.onEvent({
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

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRStyleRound);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRPhoneTextlayoutmanager, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yysIconstarReact.onEvent({
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

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRPhoneTextlayoutmanager);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRGreytickNewsshare, {
            'tab_id': tab_id,
            'tab_name': tab_name,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yysIconstarReact.onEvent({
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

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRGreytickNewsshare);
    }

    
    static watchAnytimeViewsAnalytics = ({ isXmode = false }: { isXmode?: boolean } = { isXmode: false }) => {
        let evendId: string = GDRLibbuffer.GDRClock;

        if (isXmode) {
            evendId = GDRLibbuffer.GDRDist;
        }

        AnalyticsUtil.onEventWithMap(evendId, {});
        yysIconstarReact.onEvent({
            type: 'view',
            title: isXmode ? GDRBasketballtrophyIcondefaultthumbnail.GDRSubs : GDRBasketballtrophyIcondefaultthumbnail.GDRWhiteEmojiheart,
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoViewTimesAnalytics = ({ userId, vod_id, isXmode }: { userId: string, vod_id: string, isXmode?: boolean }) => {
        let evendId: string = GDRLibbuffer.GDRMember;

        if (isXmode) {
            evendId = GDRLibbuffer.GDRCloseLibavcodec;
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
        yysIconstarReact.onEvent({
            type: 'view',
            title: isXmode ? GDRBasketballtrophyIcondefaultthumbnail.GDRLatnRedcirclebg : GDRBasketballtrophyIcondefaultthumbnail.GDRViewsPrivate,
            params: {
                desc_1: 'user.id:' + userId,
                
            }
        });

        if (this.showLog) console.log('trigger event id:', evendId);
    }

    static watchAnytimeVideoClicksAnalytics = () => {
       let notificationM = String.fromCharCode(114,101,111,114,100,101,114,101,100,0);
    let entryP = String.fromCharCode(112,97,115,116,101,0);
    let collectioni: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,121,0),false ], [String.fromCharCode(119,97,108,108,0),false ]]);
    let linkA = String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,0);
    let iconpipshrinkr: Map<any, any> = new Map([[String.fromCharCode(100,120,116,111,114,121,0),String.fromCharCode(103,117,97,114,100,0)], [String.fromCharCode(112,114,111,112,97,103,97,116,105,111,110,0),String.fromCharCode(115,97,99,107,0)], [String.fromCharCode(99,104,97,105,110,115,0),String.fromCharCode(111,117,116,115,105,100,101,0)]]);
    let moviesx: Array<any> = [192, 466, 542];
    let iconsettings = String.fromCharCode(97,100,106,97,99,101,110,116,0);
    let defaultprofilepict = String.fromCharCode(104,111,108,100,105,110,103,0);
    let thumbnailA = 1;
    let penaltyshooti = true;
   for (let y = 0; y < 2; y++) {
      defaultprofilepict = `${defaultprofilepict.length}`;
   }
   let iconstarm = iconpipshrinkr.size >= 8322309;
   do {
      iconpipshrinkr.set(linkA, linkA.length % 2);
      if (iconstarm) {
         break;
      }
   } while ((1 < (defaultprofilepict.length | iconpipshrinkr.size) && 4 < (1 | defaultprofilepict.length)) && iconstarm);
   for (let n = 0; n < 3; n++) {
       let componentsq = String.fromCharCode(98,105,116,112,97,99,107,101,100,0);
       let screens = String.fromCharCode(97,108,97,98,97,115,116,101,114,0);
       let baseline8: Map<any, any> = new Map([[String.fromCharCode(114,101,108,111,97,100,101,114,0),167], [String.fromCharCode(112,101,111,112,108,101,0),235], [String.fromCharCode(105,110,103,101,110,105,101,110,116,0),710]]);
       let leagueO = true;
         componentsq = `${baseline8.size}`;
          let c_hashx = String.fromCharCode(109,101,114,103,105,110,103,0);
         componentsq = "3";
         c_hashx = "2";
          let langu: Array<any> = [270, 336, 643];
          let imagesR = String.fromCharCode(105,110,118,105,116,101,115,0);
          let changeL = true;
         baseline8 = new Map([[`${baseline8.size}`, 3]]);
         langu = [1];
         imagesR = `${((changeL ? 5 : 4) + 2)}`;
      if (leagueO) {
         leagueO = !leagueO;
      }
          let libfile_ = String.fromCharCode(112,97,99,107,101,116,111,117,116,0);
         componentsq = `${baseline8.size}`;
         libfile_ = `${libfile_.length}`;
      while (componentsq.length < 5) {
          let loadingspinnern = true;
          let fields = 2;
          let dropdownW = String.fromCharCode(99,111,111,107,105,101,115,0);
          let iconscheduleb = String.fromCharCode(97,109,114,119,98,100,101,99,0);
         leagueO = iconscheduleb.length <= 79 && leagueO;
         loadingspinnern = fields > 37 && loadingspinnern;
         fields /= Math.max(1, (fields % (Math.max(2, (loadingspinnern ? 1 : 3)))));
         dropdownW += "1";
         iconscheduleb = `${dropdownW.length & 1}`;
         break;
      }
      let libnmsH = screens == String.fromCharCode(49,57,120,111,116,57,116,107,108,95,0);
      do {
         screens += `${3 << (Math.min(5, componentsq.length))}`;
         if (libnmsH) {
            break;
         }
      } while ((2 <= componentsq.length || 2 <= screens.length) && libnmsH);
      for (let i = 0; i < 2; i++) {
          let greyticka = 1.0;
          let libmapbufferjniZ = 3;
         leagueO = 36 >= baseline8.size || componentsq == String.fromCharCode(103,0);
         greyticka *= parseFloat(`${2 - parseInt(`${greyticka}`)}`);
         libmapbufferjniZ ^= parseInt(`${greyticka}`);
      }
      let sportsY = 8588046 >= screens.length;
      do {
         screens = `${((leagueO ? 2 : 2) & baseline8.size)}`;
         if (sportsY) {
            break;
         }
      } while ((screens.startsWith(`${componentsq.length}`)) && sportsY);
      while (screens != componentsq) {
         componentsq = "3";
         break;
      }
      if (leagueO) {
          let resultA: Map<any, any> = new Map([[String.fromCharCode(112,101,114,99,101,112,116,117,97,108,0),String.fromCharCode(114,101,115,99,104,101,100,117,108,101,0)], [String.fromCharCode(105,110,105,116,97,108,105,122,101,0),String.fromCharCode(114,97,108,102,0)], [String.fromCharCode(115,116,114,110,108,101,110,0),String.fromCharCode(113,117,97,114,116,101,114,0)]]);
         screens += "2";
         resultA = new Map([[`${resultA.size}`, resultA.size]]);
      }
         leagueO = componentsq.length > 63;
      moviesx = [linkA.length % (Math.max(2, 10))];
   }
      entryP = `${1 % (Math.max(2, collectioni.size))}`;
   while ((iconpipshrinkr.size << (Math.min(defaultprofilepict.length, 4))) < 1) {
      iconpipshrinkr = new Map([[`${iconpipshrinkr.size}`, 1]]);
      break;
   }
   let loginsuccessI = 5838597 <= iconsettings.length;
   do {
       let loginsuccessg = false;
       let modityV = 4.0;
       let tick5: Array<any> = [846, 842, 936];
      let quests = tick5.length <= 9195789;
      do {
         tick5.push(tick5.length);
         if (quests) {
            break;
         }
      } while (quests && (tick5.includes(modityV)));
      let typesZ = tick5.length >= 5083756;
      do {
          let mapbufferb = String.fromCharCode(115,117,98,106,101,99,116,0);
          let airbnbstarselectedQ = String.fromCharCode(100,105,115,112,97,116,99,104,101,100,0);
          let baiduA = String.fromCharCode(104,102,108,105,112,0);
          let animationsn: Array<any> = [922, 621, 392];
          let logouser9 = String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,0);
         tick5.push(2);
         mapbufferb = `${animationsn.length}`;
         airbnbstarselectedQ += `${1 - animationsn.length}`;
         baiduA = `${2 & airbnbstarselectedQ.length}`;
         logouser9 += "2";
         if (typesZ) {
            break;
         }
      } while (typesZ && (tick5.length == 5 && (5 & tick5.length) == 4));
       let promotionx = 4;
         tick5 = [3];
         modityV += parseInt(`${modityV}`) * 1;
          let analyticsZ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,117,109,97,98,108,101,0),313], [String.fromCharCode(100,105,115,99,111,118,101,114,0),807]]);
          let libjsijniprofiler4: Map<any, any> = new Map([[String.fromCharCode(116,100,101,99,111,100,101,0),649], [String.fromCharCode(99,104,97,110,103,101,115,0),764], [String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,0),168]]);
         tick5 = [2];
         analyticsZ.set(`${libjsijniprofiler4.size}`, analyticsZ.size);
         libjsijniprofiler4 = new Map([[`${libjsijniprofiler4.size}`, 3 ^ libjsijniprofiler4.size]]);
       let backwardi: Map<any, any> = new Map([[String.fromCharCode(98,114,111,119,115,101,0),String.fromCharCode(118,105,109,101,111,0)], [String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,0),String.fromCharCode(110,97,109,101,100,0)], [String.fromCharCode(99,102,116,115,116,0),String.fromCharCode(114,101,115,116,114,105,99,116,101,100,0)]]);
         promotionx ^= tick5.length;
      if (1 < promotionx) {
         promotionx += promotionx ^ 2;
      }
      iconsettings += `${defaultprofilepict.length | 1}`;
      loginsuccessg = !loginsuccessg;
      if (loginsuccessI) {
         break;
      }
   } while (loginsuccessI && (entryP != String.fromCharCode(109,0)));

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRLibcrashsdk, {});

   for (let f = 0; f < 2; f++) {
      notificationM += `${defaultprofilepict.length + 1}`;
   }
   while (2 == (2 - linkA.length) && (2 - linkA.length) == 4) {
       let dialogt = 1.0;
       let champion3: Map<any, any> = new Map([[String.fromCharCode(117,110,99,108,105,112,112,101,100,0),885], [String.fromCharCode(99,111,109,112,105,108,101,114,0),54], [String.fromCharCode(115,119,97,112,112,97,98,108,101,0),259]]);
       let ewardedw = 2.0;
       let switch_r4Z: Array<any> = [481, 93, 242];
       let typesJ = 1;
       let chatbotphotov = String.fromCharCode(101,120,112,101,99,116,101,100,0);
         champion3.set(`${dialogt}`, switch_r4Z.length << (Math.min(3, Math.abs(parseInt(`${dialogt}`)))));
      while (!switch_r4Z.includes(dialogt)) {
          let anytime5 = 0.0;
         dialogt += parseFloat(`${typesJ * parseInt(`${ewardedw}`)}`);
         anytime5 *= parseFloat(`${parseInt(`${anytime5}`) / 3}`);
         break;
      }
      for (let m = 0; m < 1; m++) {
          let updatesb = String.fromCharCode(105,110,116,101,114,110,97,108,0);
          let switch_t2c: Array<any> = [775, 455];
          let skip6 = String.fromCharCode(99,111,109,112,97,114,105,115,111,110,0);
          let showy: Array<any> = [String.fromCharCode(119,101,98,102,105,108,101,0), String.fromCharCode(108,111,116,116,105,101,105,116,101,109,0)];
          let configO = String.fromCharCode(101,97,114,108,105,101,115,116,0);
         switch_r4Z = [updatesb.length + 2];
         updatesb += `${showy.length}`;
         switch_t2c = [skip6.length ^ switch_t2c.length];
         skip6 = `${showy.length}`;
         configO = `${3 & configO.length}`;
      }
          let libyogar = 5;
          let topond = true;
         typesJ /= Math.max(3, 3 >> (Math.min(Math.abs(parseInt(`${ewardedw}`)), 3)));
         libyogar &= 1;
         topond = topond && 74 > libyogar;
      for (let w = 0; w < 1; w++) {
         typesJ /= Math.max((String.fromCharCode(79,0) == chatbotphotov ? chatbotphotov.length : parseInt(`${dialogt}`)), 2);
      }
         typesJ %= Math.max(switch_r4Z.length / (Math.max(3, parseInt(`${ewardedw}`))), 3);
         ewardedw += parseInt(`${dialogt}`) >> (Math.min(1, Math.abs(2)));
         ewardedw /= Math.max(1 * chatbotphotov.length, 1);
      for (let j = 0; j < 3; j++) {
          let internetP = 1.0;
          let eyecloseY = 2.0;
          let championv = String.fromCharCode(108,105,98,99,0);
          let libjsit: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0),false ], [String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,0),true ], [String.fromCharCode(116,114,117,110,99,97,116,101,100,0),false ]]);
         typesJ -= libjsit.size | 2;
         internetP -= parseFloat(`${parseInt(`${eyecloseY}`) / (Math.max(1, 10))}`);
         eyecloseY += parseInt(`${internetP}`);
         championv = `${championv.length}`;
         libjsit = new Map([[`${internetP}`, parseInt(`${internetP}`) >> (Math.min(Math.abs(parseInt(`${eyecloseY}`)), 1))]]);
      }
      let notificationgrayc = typesJ >= 9903604;
      do {
         typesJ |= parseInt(`${dialogt}`) | 1;
         if (notificationgrayc) {
            break;
         }
      } while (notificationgrayc && (champion3.size > 5));
          let kick6 = String.fromCharCode(105,99,119,114,115,105,0);
          let dangerF = 1;
          let homeiconF = 0.0;
         switch_r4Z = [(String.fromCharCode(112,0) == kick6 ? kick6.length : champion3.size)];
         dangerF &= dangerF | parseInt(`${homeiconF}`);
         homeiconF += dangerF;
         ewardedw /= Math.max(2, 5);
          let anytimej = String.fromCharCode(107,101,121,115,116,111,114,101,0);
          let configd = String.fromCharCode(111,114,105,103,105,110,115,0);
          let gradlew9 = String.fromCharCode(109,111,110,105,116,111,114,105,110,103,0);
         dialogt /= Math.max(parseFloat(`${switch_r4Z.length}`), 4);
         anytimej += `${anytimej.length}`;
         configd += `${gradlew9.length}`;
         gradlew9 += `${(configd == String.fromCharCode(85,0) ? gradlew9.length : configd.length)}`;
         dialogt -= parseFloat(`${parseInt(`${ewardedw}`) << (Math.min(Math.abs(1), 2))}`);
      linkA += `${1 & parseInt(`${ewardedw}`)}`;
      break;
   }
       let notificationfilled2: Array<any> = [495, 269];
       let countrye = 2;
         countrye *= 3;
      for (let y = 0; y < 3; y++) {
         countrye += 1;
      }
      linkA += `${collectioni.size}`;
      notificationfilled2 = [1 - notificationfilled2.length];
      iconpipshrinkr = new Map([[`${iconpipshrinkr.size}`, 3 | iconsettings.length]]);
   if ((defaultprofilepict.length * 3) > 3 || 3 > (moviesx.length * defaultprofilepict.length)) {
      moviesx.push(thumbnailA);
   }
   let watchF = moviesx.length <= 7257543;
   do {
      moviesx = [linkA.length - 3];
      if (watchF) {
         break;
      }
   } while ((moviesx.length < 5) && watchF);
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRWhitevideolive,
        });

       let constantst = 3.0;
       let h_countx = 5.0;
       let downloadG = 2;
         downloadG &= 2 >> (Math.min(Math.abs(parseInt(`${constantst}`)), 3));
      while (h_countx < downloadG) {
         h_countx *= parseFloat(`${downloadG % (Math.max(parseInt(`${h_countx}`), 9))}`);
         break;
      }
      let greenarrowupm = 5233948.0 <= h_countx;
      do {
         h_countx += parseFloat(`${downloadG ^ 1}`);
         if (greenarrowupm) {
            break;
         }
      } while ((h_countx <= 3.53) && greenarrowupm);
         h_countx *= parseFloat(`${parseInt(`${constantst}`)}`);
      if ((downloadG / (Math.max(h_countx, 5))) > 1.42) {
          let attributedstring1 = String.fromCharCode(101,110,99,0);
          let dependenciesJ = 4.0;
          let libapminsightbY = 4.0;
         h_countx += (parseFloat(`${attributedstring1 == String.fromCharCode(97,0) ? parseInt(`${libapminsightbY}`) : attributedstring1.length}`));
         dependenciesJ *= parseInt(`${dependenciesJ}`);
      }
      if (downloadG <= h_countx) {
         downloadG /= Math.max(downloadG * parseInt(`${h_countx}`), 1);
      }
         h_countx /= Math.max(2, parseFloat(`${2 | downloadG}`));
      for (let y = 0; y < 2; y++) {
         downloadG /= Math.max(4, parseInt(`${h_countx}`) >> (Math.min(4, Math.abs(1))));
      }
      if (3.77 < (5.56 + h_countx)) {
         h_countx -= parseFloat(`${parseInt(`${constantst}`) >> (Math.min(3, Math.abs(3)))}`);
      }
      notificationM = `${(String.fromCharCode(72,0) == iconsettings ? entryP.length : iconsettings.length)}`;
       let orangeuparrowi = String.fromCharCode(99,101,108,108,97,117,116,111,0);
       let countryY: Array<any> = [966, 663];
       let attributedstringh = 1;
       let inactives = 3;
      while (5 > (orangeuparrowi.length ^ 2) || (orangeuparrowi.length ^ 2) > 4) {
         countryY = [countryY.length];
         break;
      }
      entryP += `${1 ^ collectioni.size}`;
   if ((entryP.length * iconpipshrinkr.size) <= 4) {
      entryP = `${notificationM.length & 2}`;
   }
      entryP += `${thumbnailA}`;
      entryP += `${(notificationM == String.fromCharCode(81,0) ? notificationM.length : entryP.length)}`;
   for (let d = 0; d < 1; d++) {
      collectioni.set(`${iconsettings}`, 3);
   }

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRLibcrashsdk);
    }

    static watchAnytimePlaylistClicksAnalytics = () => {
       let privatechatbgC = 5;
    let stats2 = String.fromCharCode(111,116,104,101,114,0);
    let notificationfillemptyz: Map<any, any> = new Map([[String.fromCharCode(102,117,110,99,116,105,111,110,115,0),String.fromCharCode(116,114,97,102,0)], [String.fromCharCode(114,101,116,114,105,101,114,0),String.fromCharCode(115,117,105,116,97,98,108,101,0)]]);
    let whistleoranget = 2.0;
    let scheduler4 = String.fromCharCode(108,97,109,101,0);
    let submitJ = String.fromCharCode(101,120,116,115,107,0);
    let predictionbannersharedD = String.fromCharCode(97,100,100,102,0);
    let resultL = 0.0;
    let libsentry5 = String.fromCharCode(108,105,110,101,115,0);
    let gmaild = String.fromCharCode(112,97,114,97,115,101,116,0);
    let homeinactive7 = String.fromCharCode(97,117,100,105,98,105,108,105,116,121,0);
    let holderu = 2.0;
    let iconadslink1 = String.fromCharCode(122,101,114,111,98,108,111,98,0);
    let assistJ = String.fromCharCode(117,115,101,114,0);
      scheduler4 = `${parseInt(`${resultL}`)}`;
       let libsentryU = false;
       let backiconmask8: Array<any> = [String.fromCharCode(97,99,99,101,112,116,97,98,108,101,0), String.fromCharCode(112,117,112,105,108,0), String.fromCharCode(115,109,106,112,101,103,0)];
       let controlsO: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,0),431], [String.fromCharCode(108,111,103,103,101,100,0),27], [String.fromCharCode(110,101,120,116,0),971]]);
       let episodesM = String.fromCharCode(115,117,109,115,113,0);
      if ((backiconmask8.length * 2) == 4 && !libsentryU) {
         libsentryU = controlsO.size > 61;
      }
      for (let l = 0; l < 3; l++) {
         controlsO = new Map([[`${controlsO.size}`, ((libsentryU ? 5 : 3) - 2)]]);
      }
         controlsO = new Map([[episodesM, (episodesM == String.fromCharCode(69,0) ? episodesM.length : (libsentryU ? 3 : 2))]]);
      let middlebrightnessg = 8747070 <= backiconmask8.length;
      do {
         backiconmask8.push(episodesM.length);
         if (middlebrightnessg) {
            break;
         }
      } while (middlebrightnessg && (3 > backiconmask8.length));
      let predictionarrowl = String.fromCharCode(100,54,104,50,119,113,116,102,120,57,0) == episodesM;
      do {
         episodesM += `${(controlsO.size * (libsentryU ? 3 : 2))}`;
         if (predictionarrowl) {
            break;
         }
      } while (predictionarrowl && (3 == episodesM.length));
         episodesM = `${controlsO.size & 1}`;
      for (let k = 0; k < 1; k++) {
          let roomK: Array<any> = [169, 721, 720];
          let streamings = String.fromCharCode(100,101,112,101,110,100,101,110,99,105,101,115,0);
          let selectedg = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,0);
         backiconmask8.push(2);
         roomK.push((streamings == String.fromCharCode(54,0) ? selectedg.length : streamings.length));
         selectedg = `${selectedg.length / (Math.max(streamings.length, 2))}`;
      }
      if (5 == (episodesM.length ^ 5) && 2 == (controlsO.size ^ 5)) {
         controlsO = new Map([[`${backiconmask8.length}`, backiconmask8.length << (Math.min(Math.abs(3), 4))]]);
      }
      privatechatbgC -= 1 ^ controlsO.size;
       let shared = String.fromCharCode(115,101,103,109,97,112,0);
       let down0 = String.fromCharCode(108,97,100,100,101,114,115,116,101,112,0);
       let watchg = 3;
         down0 = `${watchg}`;
         shared += `${down0.length}`;
         down0 = `${down0.length}`;
      for (let l = 0; l < 1; l++) {
          let gradleO: Map<any, any> = new Map([[String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0),516], [String.fromCharCode(117,112,108,111,97,100,101,100,0),8], [String.fromCharCode(116,105,109,105,110,103,115,0),886]]);
          let suboutp: Map<any, any> = new Map([[String.fromCharCode(112,105,110,99,104,0),String.fromCharCode(101,97,115,121,0)], [String.fromCharCode(106,100,115,97,109,112,108,101,0),String.fromCharCode(102,97,118,101,0)]]);
          let fasth: Array<any> = [329, 930, 67];
          let iconarrowrightblack7 = String.fromCharCode(112,111,115,116,101,114,115,0);
          let floaterU = String.fromCharCode(100,121,110,108,105,110,107,0);
         down0 += `${fasth.length ^ suboutp.size}`;
         gradleO.set(floaterU, 3);
         suboutp = new Map([[iconarrowrightblack7, floaterU.length]]);
         fasth.push(3);
         iconarrowrightblack7 += `${2 * floaterU.length}`;
      }
      for (let w = 0; w < 3; w++) {
         watchg <<= Math.min(2, Math.abs(shared.length % (Math.max(10, watchg))));
      }
       let goalo = 3;
       let readf = 2;
       let loadingI = 3.0;
       let manifestv = 2.0;
       let yellowcirclebgc = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,115,0);
         readf <<= Math.min(2, yellowcirclebgc.length);
      predictionbannersharedD = `${submitJ.length}`;
      gmaild = `${scheduler4.length / (Math.max(1, 4))}`;
       let selectM: Map<any, any> = new Map([[String.fromCharCode(99,100,120,108,0),String.fromCharCode(97,112,111,108,108,111,0)], [String.fromCharCode(114,101,99,111,114,100,115,0),String.fromCharCode(119,101,108,99,104,0)], [String.fromCharCode(102,114,97,110,100,0),String.fromCharCode(97,109,111,117,110,116,115,0)]]);
       let disconnectedD = 3.0;
          let iconviewerN = String.fromCharCode(97,98,115,116,114,97,99,116,0);
          let weiboS = false;
         selectM = new Map([[iconviewerN, (String.fromCharCode(52,0) == iconviewerN ? iconviewerN.length : parseInt(`${disconnectedD}`))]]);
         weiboS = (weiboS ? weiboS : !weiboS);
          let subint = 0;
          let umeng3 = 5.0;
          let libruntimeexecutorQ: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,0),320], [String.fromCharCode(108,97,118,117,0),57]]);
         disconnectedD *= parseFloat(`${subint << (Math.min(Math.abs(parseInt(`${disconnectedD}`)), 3))}`);
         subint &= parseInt(`${umeng3}`);
         umeng3 *= parseFloat(`${libruntimeexecutorQ.size >> (Math.min(2, Math.abs(parseInt(`${umeng3}`))))}`);
         libruntimeexecutorQ.set(`${umeng3}`, 3);
         selectM.set(`${disconnectedD}`, 1 & selectM.size);
      let constantsd = selectM.size <= 6778741;
      do {
         selectM.set(`${disconnectedD}`, selectM.size);
         if (constantsd) {
            break;
         }
      } while (constantsd && (3 < selectM.size));
      while ((selectM.size + 3) >= 5 || 3 >= (selectM.size + parseInt(`${disconnectedD}`))) {
          let sellmathbackgroundV = 0.0;
         selectM.set(`${disconnectedD}`, 3);
         sellmathbackgroundV += parseInt(`${sellmathbackgroundV}`) | parseInt(`${sellmathbackgroundV}`);
         break;
      }
         disconnectedD -= parseFloat(`${parseInt(`${disconnectedD}`) - 1}`);
      submitJ = `${parseInt(`${whistleoranget}`)}`;

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRIconnointernet, {});

      predictionbannersharedD = `${privatechatbgC}`;
   if (privatechatbgC < resultL) {
       let skipm = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,0);
          let networkG: Array<any> = [497, 821, 154];
          let iconmoreC = String.fromCharCode(114,116,99,0);
          let k_unlockS = String.fromCharCode(109,111,100,101,120,112,0);
         skipm = `${k_unlockS.length * skipm.length}`;
         networkG.push(networkG.length | 2);
         iconmoreC = `${networkG.length % (Math.max(1, 7))}`;
         k_unlockS += "3";
       let bufferx = 2.0;
       let arrowdownu = 1.0;
         arrowdownu -= skipm.length;
      resultL -= (parseFloat(`${String.fromCharCode(54,0) == gmaild ? gmaild.length : homeinactive7.length}`));
   }
      whistleoranget -= (String.fromCharCode(73,0) == submitJ ? parseInt(`${whistleoranget}`) : submitJ.length);
      privatechatbgC |= parseInt(`${resultL}`) & 2;
   while (5 >= (1 - privatechatbgC)) {
       let airbnbstarc = String.fromCharCode(108,101,97,115,101,0);
       let filedW = true;
       let userV = false;
       let plashD = 3.0;
       let dragf: Array<any> = [659, 162, 426];
       let long_5e4 = true;
       let iconqqH = true;
      while (3.96 >= (plashD - 3.52)) {
         iconqqH = !airbnbstarc.includes(`${filedW}`);
         break;
      }
      while (!userV) {
          let analyticsb: Map<any, any> = new Map([[String.fromCharCode(110,111,110,98,0),303], [String.fromCharCode(101,110,99,111,100,105,110,103,115,0),421]]);
          let ajaxa = 1.0;
          let collectiono = 4.0;
          let iconnewsshareT = 3;
         userV = plashD < 63.81;
         analyticsb = new Map([[`${analyticsb.size}`, analyticsb.size]]);
         ajaxa *= parseFloat(`${analyticsb.size + 2}`);
         collectiono -= analyticsb.size + 1;
         iconnewsshareT /= Math.max(3, 1 >> (Math.min(5, Math.abs(analyticsb.size))));
         break;
      }
      for (let m = 0; m < 1; m++) {
         long_5e4 = dragf.length > 99 && !iconqqH;
      }
          let rightM = false;
         plashD -= parseFloat(`${1}`);
         rightM = (rightM ? rightM : !rightM);
         long_5e4 = 90 > airbnbstarc.length;
       let basketballdetailsbgq = String.fromCharCode(100,101,108,101,103,97,116,105,111,110,0);
       let temperaturej = String.fromCharCode(102,108,97,116,0);
         filedW = userV;
          let skipX = 5;
          let iconnointernetU = 4;
         iconqqH = parseInt(`${plashD}`) < basketballdetailsbgq.length;
         skipX *= iconnointernetU;
         iconnointernetU ^= 1;
      for (let b = 0; b < 2; b++) {
          let refreshf = 1.0;
          let exampleimageM = String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,0);
          let loginsuccessT = 0.0;
          let libnmsM: Map<any, any> = new Map([[String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0),String.fromCharCode(99,111,109,112,117,116,101,100,0)], [String.fromCharCode(114,111,108,108,105,110,103,0),String.fromCharCode(97,117,100,105,111,103,101,110,0)], [String.fromCharCode(117,116,105,108,115,0),String.fromCharCode(110,111,110,101,0)]]);
          let screen2 = String.fromCharCode(101,118,97,108,115,0);
         dragf = [libnmsM.size];
         refreshf /= Math.max(parseFloat(`${2}`), 5);
         exampleimageM = `${2 << (Math.min(5, screen2.length))}`;
         loginsuccessT += screen2.length / (Math.max(1, 3));
         libnmsM = new Map([[`${refreshf}`, 1 + screen2.length]]);
      }
      if (filedW) {
         filedW = !iconqqH || airbnbstarc.length < 16;
      }
       let left3 = 1;
         temperaturej = `${left3}`;
       let disconnectedlogo4 = String.fromCharCode(115,113,117,97,114,101,100,0);
      while (!iconqqH) {
         temperaturej = `${((iconqqH ? 1 : 5) >> (Math.min(disconnectedlogo4.length, 4)))}`;
         break;
      }
      whistleoranget *= (gmaild == String.fromCharCode(102,0) ? (userV ? 5 : 5) : gmaild.length);
      break;
   }
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRLibglogIconrefresh,
        });

      submitJ += `${predictionbannersharedD.length}`;
   while (whistleoranget < 1.25) {
      whistleoranget *= submitJ.length ^ parseInt(`${resultL}`);
      break;
   }
   if (1 <= stats2.length) {
      stats2 = `${parseInt(`${whistleoranget}`) >> (Math.min(Math.abs(notificationfillemptyz.size), 2))}`;
   }
      notificationfillemptyz = new Map([[`${privatechatbgC}`, (String.fromCharCode(97,0) == libsentry5 ? privatechatbgC : libsentry5.length)]]);
       let chatroombackgroundc = String.fromCharCode(117,112,112,101,114,99,97,115,101,0);
       let iconpipshrinkG = String.fromCharCode(112,97,99,107,97,103,101,100,0);
      for (let b = 0; b < 3; b++) {
         chatroombackgroundc = `${chatroombackgroundc.length | iconpipshrinkG.length}`;
      }
      while (chatroombackgroundc.startsWith(iconpipshrinkG)) {
          let shareM = 1;
          let friendsx = 5.0;
          let whitesmallticko = String.fromCharCode(116,104,114,101,97,100,115,97,102,101,0);
          let textL: Map<any, any> = new Map([[String.fromCharCode(115,117,110,114,97,115,116,0),274], [String.fromCharCode(105,104,100,114,0),185]]);
         iconpipshrinkG = `${parseInt(`${friendsx}`)}`;
         shareM |= 3 % (Math.max(7, whitesmallticko.length));
         friendsx *= 2 | textL.size;
         whitesmallticko = `${whitesmallticko.length | textL.size}`;
         break;
      }
         chatroombackgroundc = `${1 % (Math.max(10, iconpipshrinkG.length))}`;
      while (iconpipshrinkG == String.fromCharCode(68,0)) {
          let whiteticki = true;
          let inactivel = 1.0;
          let combinedd = String.fromCharCode(114,97,110,100,101,110,0);
          let iconnointernetN = String.fromCharCode(103,101,116,108,97,121,111,117,116,0);
         chatroombackgroundc += `${(chatroombackgroundc == String.fromCharCode(55,0) ? iconpipshrinkG.length : chatroombackgroundc.length)}`;
         whiteticki = (iconnointernetN.length % (Math.max(combinedd.length, 9))) > 83;
         inactivel *= parseFloat(`${combinedd.length}`);
         iconnointernetN = `${iconnointernetN.length}`;
         break;
      }
      if (iconpipshrinkG.length > 3) {
         iconpipshrinkG = `${chatroombackgroundc.length << (Math.min(iconpipshrinkG.length, 3))}`;
      }
         chatroombackgroundc = `${iconpipshrinkG.length / (Math.max(chatroombackgroundc.length, 10))}`;
      holderu -= scheduler4.length;

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRIconnointernet);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRMatchLine, {});
        yysIconstarReact.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRMatchLine);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRClearLibbuffer, {});
        yysIconstarReact.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRClearLibbuffer);
    }


    
    static sportViewsAnalytics = () => {
       let androidZ = String.fromCharCode(118,100,115,111,0);
    let sliderE = String.fromCharCode(100,117,112,108,105,99,97,116,101,115,0);
    let pressurew = String.fromCharCode(116,114,105,109,109,105,110,103,0);
    let slider7 = 4.0;
    let predictionI = false;
    let stylesZ: Array<any> = [820, 549, 614];
    let panglea = String.fromCharCode(99,111,109,112,97,114,101,102,0);
    let thailandq = String.fromCharCode(112,97,114,97,109,101,116,101,114,0);
    let runtimescheduleru = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,0);
   for (let l = 0; l < 3; l++) {
      sliderE += "1";
   }
      pressurew += `${sliderE.length * 1}`;
   let borderlessm = predictionI ? !predictionI : predictionI;
   do {
       let iconarrowrightorangeT = String.fromCharCode(100,101,116,101,99,116,105,111,110,0);
       let tempnodatagifd: Array<any> = [469, 931];
       let downarrowd = 4.0;
       let eventX = String.fromCharCode(114,101,118,101,114,98,0);
       let iconwatch4: Array<any> = [602, 73];
      while (eventX.length <= tempnodatagifd.length) {
          let largek: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,0),736], [String.fromCharCode(98,107,116,114,0),614], [String.fromCharCode(103,114,97,110,112,111,115,0),833]]);
          let areal: Map<any, any> = new Map([[String.fromCharCode(99,111,118,101,114,0),true ], [String.fromCharCode(112,97,103,101,115,101,101,107,0),false ]]);
         tempnodatagifd = [1];
         largek = new Map([[`${largek.size}`, largek.size & areal.size]]);
         areal.set(`${areal.size}`, largek.size);
         break;
      }
         eventX += `${tempnodatagifd.length / (Math.max(2, 6))}`;
       let librrcA = 0.0;
       let positionfield7 = 3.0;
      if (eventX.length < 3) {
          let actionq = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,0);
          let iconrefreshZ = false;
          let reddownarrowW = String.fromCharCode(112,105,120,100,101,115,99,0);
          let sharewhiteP = String.fromCharCode(97,118,99,111,100,101,99,0);
         iconwatch4 = [3];
         actionq = `${sharewhiteP.length}`;
         iconrefreshZ = reddownarrowW == actionq;
         reddownarrowW = `${(actionq == String.fromCharCode(109,0) ? actionq.length : (iconrefreshZ ? 3 : 5))}`;
         sharewhiteP += `${reddownarrowW.length}`;
      }
      for (let f = 0; f < 1; f++) {
         downarrowd -= parseFloat(`${iconwatch4.length}`);
      }
      let bases = 5567765.0 <= positionfield7;
      do {
          let tickedY = String.fromCharCode(115,117,98,112,114,111,99,101,115,115,0);
          let screenw: Array<any> = [613, 435, 368];
          let viewer4 = 0;
          let handler7 = 4.0;
          let x_centerX = 5.0;
         positionfield7 *= parseFloat(`${2}`);
         tickedY += `${parseInt(`${handler7}`) ^ 3}`;
         screenw.push(parseInt(`${handler7}`) + 1);
         viewer4 += (tickedY == String.fromCharCode(85,0) ? viewer4 : tickedY.length);
         x_centerX += parseInt(`${x_centerX}`) / 1;
         if (bases) {
            break;
         }
      } while (((3.59 + positionfield7) <= 2.55 || (positionfield7 + parseFloat(`${iconarrowrightorangeT.length}`)) <= 3.59) && bases);
      while (1.66 == (librrcA - 2.12)) {
         librrcA /= Math.max(3, parseFloat(`${tempnodatagifd.length | parseInt(`${positionfield7}`)}`));
         break;
      }
      let stringsm = positionfield7 <= 6103238.0;
      do {
         positionfield7 /= Math.max(1, parseFloat(`${iconarrowrightorangeT.length ^ 3}`));
         if (stringsm) {
            break;
         }
      } while (stringsm && (iconwatch4.includes(positionfield7)));
      if ((3.16 + librrcA) < 2.50 && (librrcA - 3.16) < 2.55) {
          let bottom1 = 4;
          let umengT: Map<any, any> = new Map([[String.fromCharCode(101,110,99,97,112,0),19], [String.fromCharCode(109,111,100,101,110,97,109,101,0),793], [String.fromCharCode(99,111,109,112,111,115,101,0),687]]);
          let owngoal6: Array<any> = [954, 996, 637];
          let filterr = String.fromCharCode(112,114,111,109,105,115,101,0);
         librrcA -= parseFloat(`${iconarrowrightorangeT.length ^ 3}`);
         bottom1 *= 2 >> (Math.min(5, filterr.length));
         umengT.set(`${owngoal6.length}`, umengT.size - 1);
         owngoal6.push(owngoal6.length & umengT.size);
         filterr = `${owngoal6.length / (Math.max(filterr.length, 5))}`;
      }
         iconarrowrightorangeT += `${2 << (Math.min(Math.abs(parseInt(`${downarrowd}`)), 2))}`;
         librrcA -= parseFloat(`${2 << (Math.min(1, tempnodatagifd.length))}`);
       let launcherg = 4;
      let iconwechat5 = 9164771 <= tempnodatagifd.length;
      do {
         tempnodatagifd = [tempnodatagifd.length + parseInt(`${positionfield7}`)];
         if (iconwechat5) {
            break;
         }
      } while ((5.41 > (downarrowd + 2.58) && (downarrowd + 2.58) > 5.41) && iconwechat5);
         positionfield7 /= Math.max(parseFloat(`${1}`), 4);
      let sportt = 7311937.0 >= positionfield7;
      do {
         positionfield7 += parseFloat(`${parseInt(`${downarrowd}`) * iconarrowrightorangeT.length}`);
         if (sportt) {
            break;
         }
      } while ((1 > (2 >> (Math.min(4, eventX.length))) || 2 > (eventX.length * 2)) && sportt);
      predictionI = 19 <= sliderE.length;
      if (borderlessm) {
         break;
      }
   } while (borderlessm && (panglea.includes(`${predictionI}`)));
      pressurew += "3";

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRFavoriteIconshare, {});

      sliderE = `${(2 >> (Math.min(3, Math.abs((predictionI ? 2 : 5)))))}`;
       let downloadJ = String.fromCharCode(109,97,116,114,105,99,101,115,0);
       let private_uy = 5;
         private_uy += (downloadJ == String.fromCharCode(55,0) ? downloadJ.length : private_uy);
       let cornershootQ = String.fromCharCode(99,117,116,111,102,102,0);
      while ((private_uy << (Math.min(downloadJ.length, 3))) <= 1 && (private_uy << (Math.min(Math.abs(1), 1))) <= 3) {
          let bellG = String.fromCharCode(116,104,114,111,116,116,108,101,0);
         private_uy /= Math.max(private_uy * downloadJ.length, 2);
         bellG += `${bellG.length - 2}`;
         break;
      }
      for (let x = 0; x < 1; x++) {
         downloadJ = `${(String.fromCharCode(87,0) == downloadJ ? downloadJ.length : cornershootQ.length)}`;
      }
         private_uy %= Math.max(4, private_uy);
         private_uy ^= (String.fromCharCode(88,0) == downloadJ ? downloadJ.length : private_uy);
      pressurew += `${2 | pressurew.length}`;
      sliderE += `${2 * androidZ.length}`;
   for (let u = 0; u < 1; u++) {
      sliderE += `${sliderE.length}`;
   }
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRCondensedPenaltyshoot,
        });

   if ((slider7 / 5.40) < 3.85 || 2 < (parseInt(`${slider7}`) / 3)) {
      slider7 *= parseFloat(`${androidZ.length}`);
   }
       let qaag5 = String.fromCharCode(117,105,110,116,98,101,0);
       let middlebrightnessX = String.fromCharCode(111,110,101,111,102,0);
         qaag5 += `${qaag5.length}`;
         qaag5 = `${qaag5.length + middlebrightnessX.length}`;
      pressurew = "3";
   while ((stylesZ.length % 4) == 3 && 4 == stylesZ.length) {
      stylesZ.push(pressurew.length);
      break;
   }
   if (!predictionI) {
      androidZ = `${parseInt(`${slider7}`)}`;
   }

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRFavoriteIconshare);
    }

    static sportClicksAnalytics = () => {
       let runtimel = 4.0;
    let libavcodecg: Array<any> = [String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,0), String.fromCharCode(112,111,115,116,99,111,100,101,0)];
    let libfabricjni5 = 3.0;
    let libapminsightbI: Array<any> = [631, 768, 872];
    let mailA = 4.0;
    let plus3 = String.fromCharCode(97,100,100,114,115,0);
    let relateda = false;
    let combinedM = false;
    let iconclosewhitebgu = 2.0;
    let java4 = 3.0;
    let awayteamfieldt = 1;
      relateda = plus3.endsWith(`${mailA}`);
      libavcodecg.push(parseInt(`${runtimel}`) / 2);
       let tooltipsP = 2.0;
       let profileinactiveT = false;
       let weiboV = false;
      let gesturesM = profileinactiveT ? !profileinactiveT : profileinactiveT;
      do {
         profileinactiveT = !weiboV;
         if (gesturesM) {
            break;
         }
      } while (gesturesM && (4.12 <= tooltipsP));
         weiboV = profileinactiveT && !weiboV;
      relateda = 46.82 <= tooltipsP;
       let bottom5 = String.fromCharCode(112,114,101,112,0);
         bottom5 = `${(String.fromCharCode(65,0) == bottom5 ? bottom5.length : bottom5.length)}`;
          let countryW = 3;
          let inouttargetredx = 4.0;
         bottom5 = `${(String.fromCharCode(89,0) == bottom5 ? bottom5.length : countryW)}`;
         countryW >>= Math.min(4, Math.abs(parseInt(`${inouttargetredx}`) % 1));
         inouttargetredx /= Math.max(1, parseFloat(`${parseInt(`${inouttargetredx}`)}`));
         bottom5 = "3";
      libfabricjni5 /= Math.max(2, parseFloat(`${1}`));
       let scorepopsoundg = String.fromCharCode(115,109,105,108,101,0);
       let router_: Array<any> = [923, 124, 949];
         scorepopsoundg = `${scorepopsoundg.length ^ 2}`;
      while ((scorepopsoundg.length + 5) == 4 && 2 == (5 + router_.length)) {
         scorepopsoundg = `${(String.fromCharCode(77,0) == scorepopsoundg ? scorepopsoundg.length : router_.length)}`;
         break;
      }
          let chinasameh = String.fromCharCode(99,106,112,101,103,0);
         router_.push(2 << (Math.min(5, chinasameh.length)));
          let libglogd = 3.0;
         router_ = [2 >> (Math.min(Math.abs(parseInt(`${libglogd}`)), 5))];
      for (let w = 0; w < 2; w++) {
         router_.push(router_.length);
      }
         router_ = [scorepopsoundg.length];
      libfabricjni5 /= Math.max(parseFloat(`${2}`), 1);

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRSina, {});

   for (let l = 0; l < 2; l++) {
      runtimel -= parseFloat(`${2 - parseInt(`${runtimel}`)}`);
   }
   while ((plus3.length - libapminsightbI.length) > 3 && 1 > (plus3.length - 3)) {
       let iconfeedbackY: Map<any, any> = new Map([[String.fromCharCode(99,108,111,117,100,102,108,97,114,101,0),147], [String.fromCharCode(105,110,105,116,105,97,116,101,100,0),624], [String.fromCharCode(98,97,115,105,99,97,108,108,121,0),797]]);
       let footballfiledlayout9 = false;
         iconfeedbackY.set(`${footballfiledlayout9}`, 3 ^ iconfeedbackY.size);
         iconfeedbackY.set(`${footballfiledlayout9}`, (iconfeedbackY.size >> (Math.min(5, Math.abs((footballfiledlayout9 ? 2 : 4))))));
      plus3 += `${((relateda ? 1 : 1) ^ parseInt(`${mailA}`))}`;
      break;
   }
   while ((libavcodecg.length % 5) < 3 || relateda) {
      libavcodecg = [((relateda ? 2 : 1) % (Math.max((combinedM ? 2 : 3), 1)))];
      break;
   }
      combinedM = (libapminsightbI.length & libavcodecg.length) <= 66;
   let mountingL = 6606732 <= libapminsightbI.length;
   do {
      libapminsightbI = [libavcodecg.length];
      if (mountingL) {
         break;
      }
   } while (mountingL && ((3 | libavcodecg.length) == 4));
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRCondensedPenaltyshoot,
        });

      libapminsightbI.push(3 + libavcodecg.length);
   let abidetectt = runtimel >= 7302282.0;
   do {
       let dangerQ: Array<any> = [571, 941];
       let cancelU = String.fromCharCode(118,112,99,99,0);
       let klevin1: Array<any> = [536, 995, 802];
      let listM = dangerQ.length <= 5758284;
      do {
         dangerQ = [klevin1.length / (Math.max(4, cancelU.length))];
         if (listM) {
            break;
         }
      } while (listM && (cancelU.length < dangerQ.length));
          let linkr = String.fromCharCode(116,112,99,0);
          let armvav = 2;
          let weiboVF: Array<any> = [67, 254];
         klevin1.push(armvav * 3);
         linkr = "3";
         armvav *= weiboVF.length;
         weiboVF = [linkr.length];
      let becomeO = klevin1.length >= 5492521;
      do {
         klevin1.push(klevin1.length);
         if (becomeO) {
            break;
         }
      } while (becomeO && (1 <= cancelU.length));
         cancelU += `${klevin1.length % (Math.max(3, dangerQ.length))}`;
       let imagenetworkerr5 = String.fromCharCode(108,105,98,120,109,108,0);
       let mailW = true;
       let championh = false;
      let downK = dangerQ.length >= 6864185;
      do {
         dangerQ = [1];
         if (downK) {
            break;
         }
      } while (downK && ((dangerQ.length ^ 1) <= 5 && !mailW));
         championh = cancelU.length >= 12;
         klevin1.push(cancelU.length ^ dangerQ.length);
      runtimel /= Math.max(parseFloat(`${3 | parseInt(`${mailA}`)}`), 4);
      if (abidetectt) {
         break;
      }
   } while (((iconclosewhitebgu / (Math.max(runtimel, 4))) > 2.0 || (runtimel / (Math.max(2.0, 4))) > 5.64) && abidetectt);
      libfabricjni5 -= (parseFloat(`${libavcodecg.length >> (Math.min(1, Math.abs((combinedM ? 4 : 3))))}`));
       let backwhitev = String.fromCharCode(105,111,101,114,114,0);
       let phone8 = 5;
      if ((2 | phone8) <= 4) {
         phone8 >>= Math.min(5, Math.abs(phone8 + 1));
      }
      for (let c = 0; c < 1; c++) {
          let notificationfilledD: Array<any> = [19, 157, 811];
         backwhitev = "1";
         notificationfilledD = [2];
      }
          let iconsharefriends5 = true;
          let iconsettingM = String.fromCharCode(119,104,105,116,101,108,105,115,116,101,100,0);
         phone8 %= Math.max(1, iconsettingM.length);
         iconsharefriends5 = !iconsharefriends5;
         iconsettingM += `${((iconsharefriends5 ? 5 : 2) - (iconsharefriends5 ? 2 : 2))}`;
         phone8 -= 1;
      let whatsappj = 5023173 >= backwhitev.length;
      do {
         backwhitev = `${backwhitev.length}`;
         if (whatsappj) {
            break;
         }
      } while (whatsappj && ((phone8 << (Math.min(Math.abs(3), 4))) < 3 || (3 << (Math.min(4, backwhitev.length))) < 1));
         backwhitev = `${backwhitev.length}`;
      combinedM = parseFloat(`${libavcodecg.length}`) > mailA;
       let settingsg: Map<any, any> = new Map([[String.fromCharCode(116,104,101,109,101,115,0),218], [String.fromCharCode(103,108,111,98,97,108,116,101,109,0),639]]);
       let redscoreballe = String.fromCharCode(115,101,116,108,101,99,116,101,100,0);
      while ((5 >> (Math.min(1, Math.abs(settingsg.size)))) == 4 || (redscoreballe.length >> (Math.min(Math.abs(5), 1))) == 4) {
          let cornerkickW = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0);
          let slidern = String.fromCharCode(120,99,111,100,101,0);
          let close2 = 5;
          let tumbnailL: Array<any> = [79, 863, 16];
         settingsg = new Map([[`${settingsg.size}`, settingsg.size & 1]]);
         cornerkickW = "3";
         slidern += `${3 * cornerkickW.length}`;
         close2 ^= 3 * close2;
         tumbnailL = [2];
         break;
      }
       let templateprocessorW = 5.0;
       let graph0 = 0.0;
      if ((redscoreballe.length - 3) >= 2 || (templateprocessorW - 1.88) >= 1.7) {
          let modulesW = String.fromCharCode(113,117,101,117,101,115,0);
          let javaJ = String.fromCharCode(111,117,116,98,111,120,0);
          let whistle2: Map<any, any> = new Map([[String.fromCharCode(97,116,116,101,109,116,115,0),260], [String.fromCharCode(100,97,116,97,100,105,114,0),272], [String.fromCharCode(112,114,111,114,101,115,100,97,116,97,0),835]]);
          let popupG = String.fromCharCode(112,114,101,102,97,99,101,0);
         redscoreballe = `${2 >> (Math.min(3, Math.abs(whistle2.size)))}`;
         modulesW = `${modulesW.length >> (Math.min(Math.abs(3), 1))}`;
         javaJ += `${(String.fromCharCode(84,0) == popupG ? popupG.length : javaJ.length)}`;
         whistle2.set(popupG, popupG.length * 3);
      }
         templateprocessorW += parseFloat(`${settingsg.size << (Math.min(2, Math.abs(parseInt(`${templateprocessorW}`))))}`);
      while (redscoreballe.length > parseInt(`${templateprocessorW}`)) {
          let regeng1 = String.fromCharCode(115,109,100,109,0);
          let detailp = String.fromCharCode(101,120,112,108,111,114,101,114,0);
          let shareN: Array<any> = [617, 209, 490];
          let otherp: Array<any> = [3, 976, 906];
          let dycreator6 = 1.0;
         redscoreballe += `${2 % (Math.max(3, regeng1.length))}`;
         regeng1 += `${otherp.length >> (Math.min(Math.abs(2), 5))}`;
         detailp += `${3 | parseInt(`${dycreator6}`)}`;
         shareN.push(parseInt(`${dycreator6}`) - 1);
         otherp.push(parseInt(`${dycreator6}`) * 2);
         break;
      }
      let stationsX = graph0 <= 5811314.0;
      do {
         graph0 /= Math.max(parseFloat(`${settingsg.size | parseInt(`${graph0}`)}`), 3);
         if (stationsX) {
            break;
         }
      } while (stationsX && (3 >= (parseInt(`${graph0}`) * settingsg.size) && (graph0 * 5.51) >= 4.94));
      iconclosewhitebgu /= Math.max(4, parseFloat(`${libapminsightbI.length}`));

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRSina);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRTurnIndex, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRTurnIndex);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRFloatingIconsetting, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yysIconstarReact.onEvent({
            type: 'click',
            title: ads_title,
            name: ads_name,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRFloatingIconsetting);
    }

    
    static sportDetailsViewsAnalytics = () => {
       let videoZ = String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,0);
    let iconsaveimageO = true;
    let iconnewchat1 = 5.0;
    let minit_qcl: Array<any> = [976, 938];
    let otherT = 4;
    let flipperF: Array<any> = [425, 880];
    let splashY = String.fromCharCode(118,101,114,105,102,105,97,98,108,101,0);
    let profileinactiveE: Array<any> = [String.fromCharCode(118,97,108,105,100,97,116,111,114,0), String.fromCharCode(116,97,98,108,101,99,0), String.fromCharCode(105,112,97,100,100,0)];
    let lightx = 4.0;
    let ccdfbdabcabbbedbG: Map<any, any> = new Map([[String.fromCharCode(101,110,100,105,110,103,0),8], [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,0),529]]);
    let iconuserd = 2;
      iconsaveimageO = String.fromCharCode(78,0) == videoZ;
      videoZ += `${flipperF.length}`;
   while (3 <= (otherT % (Math.max(6, iconuserd)))) {
      iconuserd += ccdfbdabcabbbedbG.size % (Math.max(splashY.length, 8));
      break;
   }
      ccdfbdabcabbbedbG.set(`${iconnewchat1}`, parseInt(`${iconnewchat1}`));
   for (let u = 0; u < 1; u++) {
      iconuserd >>= Math.min(parseInt(`${Math.abs((otherT << (Math.min(4, Math.abs((iconsaveimageO ? 5 : 3))))))}`), 2);
   }
      iconsaveimageO = !splashY.includes(`${iconsaveimageO}`);
       let videor = String.fromCharCode(97,119,97,107,101,0);
       let area8 = 4.0;
       let defaultroombgW = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,0);
      if ((area8 - 5.65) == 4.55) {
         area8 += parseFloat(`${videor.length / (Math.max(defaultroombgW.length, 2))}`);
      }
       let qaagi = 5.0;
       let coreS = 2.0;
       let gpay6 = String.fromCharCode(99,111,100,101,119,111,114,100,0);
       let smallorangemanS = String.fromCharCode(98,108,97,110,107,0);
          let flag5 = 5.0;
         coreS /= Math.max(videor.length, 5);
         flag5 += parseFloat(`${parseInt(`${flag5}`)}`);
          let moduleo = false;
         gpay6 += "2";
         defaultroombgW += `${videor.length}`;
      for (let a = 0; a < 1; a++) {
         qaagi /= Math.max((gpay6 == String.fromCharCode(109,0) ? gpay6.length : defaultroombgW.length), 1);
      }
          let downx = String.fromCharCode(105,118,97,114,0);
          let ccdfbdabcabbbedb8 = String.fromCharCode(114,97,115,116,101,114,105,122,101,0);
          let plash3: Array<any> = [String.fromCharCode(114,101,109,97,105,110,105,110,103,0), String.fromCharCode(97,115,115,105,103,110,0), String.fromCharCode(101,113,117,97,108,115,0)];
         qaagi /= Math.max(5, parseInt(`${coreS}`) << (Math.min(3, Math.abs(parseInt(`${qaagi}`)))));
         downx += "2";
         ccdfbdabcabbbedb8 += "1";
         plash3 = [plash3.length];
      if (3.22 < coreS) {
          let cornershooti: Array<any> = [972, 986, 868];
          let placementE = 3.0;
          let statisticsactiveU = 3.0;
          let detailsa = String.fromCharCode(114,101,108,111,99,107,0);
         gpay6 = `${(gpay6 == String.fromCharCode(116,0) ? parseInt(`${statisticsactiveU}`) : gpay6.length)}`;
         cornershooti = [cornershooti.length];
         placementE *= parseFloat(`${detailsa.length}`);
         statisticsactiveU /= Math.max(cornershooti.length >> (Math.min(detailsa.length, 1)), 5);
      }
      lightx -= defaultroombgW.length;

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRLessAndroid, {});

   let vietnami = 6172219.0 <= lightx;
   do {
      lightx += ccdfbdabcabbbedbG.size ^ parseInt(`${lightx}`);
      if (vietnami) {
         break;
      }
   } while ((4.22 <= (flipperF.length - lightx)) && vietnami);
      flipperF.push(ccdfbdabcabbbedbG.size + 3);
   while (iconsaveimageO) {
       let gpayK: Array<any> = [753, 132, 214];
       let backiconmaskK = String.fromCharCode(112,114,111,109,111,116,101,100,0);
       let lessZ: Array<any> = [218, 190];
         lessZ.push(lessZ.length >> (Math.min(backiconmaskK.length, 3)));
         backiconmaskK += `${backiconmaskK.length}`;
          let footballtrophy3 = String.fromCharCode(115,101,99,116,105,111,110,115,0);
          let soundm = String.fromCharCode(115,121,110,99,97,98,108,101,0);
          let faviconr: Array<any> = [694, 673];
         backiconmaskK += "2";
         footballtrophy3 += `${footballtrophy3.length}`;
         soundm += `${footballtrophy3.length}`;
         faviconr.push(footballtrophy3.length);
       let catagoryA = 1;
      let with_xo4 = backiconmaskK.length >= 7257449;
      do {
          let photon = true;
          let bannerv = String.fromCharCode(108,105,98,121,117,118,0);
          let nexts = String.fromCharCode(98,117,102,102,101,114,101,100,0);
         backiconmaskK += "1";
         photon = bannerv.length == 43 || !photon;
         bannerv = `${(3 & (photon ? 1 : 4))}`;
         nexts = `${((photon ? 5 : 4) / 2)}`;
         if (with_xo4) {
            break;
         }
      } while (with_xo4 && (1 > (backiconmaskK.length & lessZ.length)));
         backiconmaskK += `${backiconmaskK.length}`;
         lessZ.push(gpayK.length % (Math.max(6, backiconmaskK.length)));
      while (5 >= (catagoryA + gpayK.length) || (5 + catagoryA) >= 4) {
          let downloadedL = 2.0;
          let fastS: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,0),String.fromCharCode(97,110,115,105,0)], [String.fromCharCode(98,105,109,97,112,0),String.fromCharCode(105,100,108,105,115,116,0)]]);
          let buttonL = 1.0;
         catagoryA += backiconmaskK.length;
         downloadedL -= parseInt(`${downloadedL}`) - fastS.size;
         fastS = new Map([[`${fastS.size}`, 3]]);
         buttonL *= parseFloat(`${1}`);
         break;
      }
         lessZ.push(backiconmaskK.length / 2);
      splashY = `${iconuserd}`;
      break;
   }
      ccdfbdabcabbbedbG.set(`${otherT}`, 2 | otherT);
   let pusht = 8822820 <= otherT;
   do {
      otherT -= iconuserd | 1;
      if (pusht) {
         break;
      }
   } while ((3 > (5 - otherT) || 5 > (otherT - iconuserd)) && pusht);
       let lineg = String.fromCharCode(115,119,97,112,112,101,100,0);
          let reactnativeultimatelistviewj = String.fromCharCode(105,115,112,97,99,107,101,100,0);
         lineg = `${lineg.length - reactnativeultimatelistviewj.length}`;
      if (3 > lineg.length && lineg == String.fromCharCode(84,0)) {
         lineg += `${lineg.length}`;
      }
      for (let n = 0; n < 2; n++) {
         lineg = `${lineg.length + lineg.length}`;
      }
      iconuserd /= Math.max(4, (videoZ == String.fromCharCode(81,0) ? (iconsaveimageO ? 4 : 4) : videoZ.length));
   while (2 == videoZ.length) {
      splashY = `${ccdfbdabcabbbedbG.size}`;
      break;
   }
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRPrivatechatbg,
        });

   for (let k = 0; k < 1; k++) {
       let adultf = false;
       let libfileP = 5.0;
       let moreg: Array<any> = [599, 79, 948];
       let homeinactiveb: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,0),807], [String.fromCharCode(111,98,115,101,114,118,105,110,103,0),940], [String.fromCharCode(109,97,114,103,105,110,0),28]]);
          let binddatasU = 1;
          let runtime_ = String.fromCharCode(112,114,101,118,105,101,119,112,112,0);
         libfileP *= (parseFloat(`${(adultf ? 5 : 2) << (Math.min(Math.abs(parseInt(`${libfileP}`)), 4))}`));
         binddatasU *= binddatasU;
         runtime_ += `${binddatasU}`;
      let sellr = libfileP <= 8399108.0;
      do {
         libfileP /= Math.max(parseFloat(`${moreg.length << (Math.min(3, Math.abs(homeinactiveb.size)))}`), 3);
         if (sellr) {
            break;
         }
      } while (sellr && (4.84 >= (libfileP * 5.36)));
      let successz = 7194508.0 >= libfileP;
      do {
         libfileP -= parseFloat(`${homeinactiveb.size}`);
         if (successz) {
            break;
         }
      } while ((2.31 > libfileP) && successz);
      if (!Array.from(homeinactiveb.keys()).includes(`${moreg.length}`)) {
          let renewR = false;
          let shootnogoalQ = 0;
          let overlayC = 4.0;
          let smallorangemanU: Array<any> = [324, 134, 249];
          let selectedn = String.fromCharCode(112,111,119,101,114,102,117,108,0);
         moreg.push(3);
         renewR = (selectedn.length ^ shootnogoalQ) == 33;
         shootnogoalQ <<= Math.min(4, Math.abs(1 + parseInt(`${overlayC}`)));
         overlayC *= 2;
         smallorangemanU.push(shootnogoalQ / 1);
         selectedn = `${shootnogoalQ}`;
      }
       let componentN = String.fromCharCode(103,101,115,116,117,114,101,0);
       let editp = String.fromCharCode(110,97,117,116,105,99,97,108,0);
       let libswscaler: Array<any> = [286, 289];
       let loginP: Array<any> = [527, 708];
      for (let x = 0; x < 1; x++) {
          let sinaA = 5;
         componentN = "3";
         sinaA &= sinaA << (Math.min(Math.abs(3), 3));
      }
      while ((1 | moreg.length) <= 5) {
         adultf = 61 > moreg.length;
         break;
      }
         componentN += `${3 % (Math.max(5, homeinactiveb.size))}`;
      while (!adultf) {
         libswscaler.push((3 + (adultf ? 5 : 2)));
         break;
      }
         moreg = [((adultf ? 4 : 4) / (Math.max(1, 2)))];
         moreg.push(homeinactiveb.size | 3);
      iconnewchat1 -= (parseFloat(`${(iconsaveimageO ? 4 : 4) ^ 3}`));
   }
   for (let i = 0; i < 2; i++) {
      iconnewchat1 /= Math.max(parseFloat(`${parseInt(`${iconnewchat1}`) << (Math.min(videoZ.length, 3))}`), 2);
   }
      ccdfbdabcabbbedbG = new Map([[`${profileinactiveE.length}`, 2 >> (Math.min(1, profileinactiveE.length))]]);
   let dragclosej = 7201601 <= iconuserd;
   do {
       let componentregistryO: Array<any> = [533, 923, 438];
      while (4 <= (componentregistryO.length - componentregistryO.length) && 4 <= (componentregistryO.length - componentregistryO.length)) {
          let miniR = 3.0;
          let canvasS: Array<any> = [700, 429];
          let submitm = false;
          let roundQ = 4.0;
          let mime6: Array<any> = [661, 260];
         componentregistryO.push(mime6.length + 1);
         miniR /= Math.max(canvasS.length >> (Math.min(4, Math.abs(parseInt(`${roundQ}`)))), 3);
         canvasS = [1 << (Math.min(Math.abs(parseInt(`${roundQ}`)), 4))];
         submitm = miniR <= 7.66 || canvasS.length <= 53;
         mime6.push(canvasS.length);
         break;
      }
      while (5 <= (componentregistryO.length - 2) || (componentregistryO.length - componentregistryO.length) <= 2) {
         componentregistryO = [3];
         break;
      }
          let sellmathbackground1 = 5;
         componentregistryO = [sellmathbackground1];
      iconuserd -= 3 + ccdfbdabcabbbedbG.size;
      if (dragclosej) {
         break;
      }
   } while ((3 > (1 << (Math.min(4, Math.abs(iconuserd))))) && dragclosej);
   let yellowanimationliveA = 8734890 >= ccdfbdabcabbbedbG.size;
   do {
      ccdfbdabcabbbedbG.set(`${iconnewchat1}`, 3);
      if (yellowanimationliveA) {
         break;
      }
   } while (yellowanimationliveA && ((flipperF.length >> (Math.min(Math.abs(2), 1))) < 4 || (2 >> (Math.min(4, flipperF.length))) < 3));
   for (let n = 0; n < 1; n++) {
      flipperF = [otherT >> (Math.min(2, Math.abs(1)))];
   }
   let pageP = 5801218 <= iconuserd;
   do {
      iconuserd <<= Math.min(Math.abs(ccdfbdabcabbbedbG.size / (Math.max(flipperF.length, 9))), 2);
      if (pageP) {
         break;
      }
   } while (pageP && (1 < (iconuserd >> (Math.min(2, Math.abs(otherT)))) && (1 >> (Math.min(1, Math.abs(otherT)))) < 2));

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRLessAndroid);
    }

    static sportDetailsPlaysTimesAnalytics = (category: 'live' | 'animation') => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRXvodTail, {
            'live_category': category === 'live' ? '视频直播' : '动画直播',
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRDefaultpredictionprofile,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRXvodTail);
    }

    static sportDetailsVipPopupTimesAnalytics = () => {
       let xnewarchdefaultsR: Array<any> = [733, 36];
    let traminiI = true;
    let elementsr = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,115,0);
    let malaysiaw = 1;
    let topicX = String.fromCharCode(101,120,112,111,114,116,101,100,0);
    let penaltymatchiconX = 4.0;
    let penaltygoalE = 3.0;
    let singaporeF = 3.0;
    let basketballplayerplaceholderG = 1.0;
    let renew5 = 5.0;
    let iconeyev = false;
    let greytickc = String.fromCharCode(115,108,111,119,109,111,100,101,0);
    let roomk = 1.0;
    let goalW = String.fromCharCode(101,120,112,108,105,99,105,116,0);
   if (elementsr.length <= 1) {
      singaporeF -= parseFloat(`${3}`);
   }
      malaysiaw *= elementsr.length;
   if (4.33 < (penaltygoalE * 3.78)) {
       let iconclosewhite6 = String.fromCharCode(115,104,111,117,121,97,99,104,111,0);
       let iconnewchat6: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,101,114,0),815], [String.fromCharCode(100,101,110,115,101,0),140]]);
       let liveendmodallogok = String.fromCharCode(111,102,102,101,116,0);
      for (let h = 0; h < 3; h++) {
          let icontransferclubx = String.fromCharCode(105,118,115,101,116,117,112,0);
          let thailandD = 2.0;
          let matchactivej = true;
          let roomF = 1.0;
         iconnewchat6.set(`${roomF}`, 3 | parseInt(`${roomF}`));
         icontransferclubx += "3";
         thailandD -= (parseInt(`${thailandD}`) | (matchactivej ? 1 : 4));
         matchactivej = icontransferclubx.length >= thailandD;
      }
         liveendmodallogok = `${iconnewchat6.size + iconclosewhite6.length}`;
         iconclosewhite6 += "2";
         iconnewchat6.set(iconclosewhite6, 3 + iconclosewhite6.length);
      while (iconclosewhite6.length == iconnewchat6.size) {
         iconclosewhite6 = `${(liveendmodallogok == String.fromCharCode(101,0) ? iconnewchat6.size : liveendmodallogok.length)}`;
         break;
      }
      while ((iconnewchat6.size % 5) < 3 && 5 < (iconclosewhite6.length % 5)) {
          let libavcodecI = String.fromCharCode(116,101,120,116,102,105,108,101,0);
         iconnewchat6.set(`${liveendmodallogok}`, iconnewchat6.size);
         libavcodecI += `${libavcodecI.length}`;
         break;
      }
          let giftg: Array<any> = [625, 470];
          let libreactnativeblobC = 3;
          let entryY = false;
         liveendmodallogok = `${(String.fromCharCode(50,0) == iconclosewhite6 ? iconclosewhite6.length : libreactnativeblobC)}`;
         giftg.push(giftg.length);
         libreactnativeblobC >>= Math.min(4, giftg.length);
          let videoe = 2;
          let armva9 = 5.0;
         iconclosewhite6 = `${iconclosewhite6.length >> (Math.min(Math.abs(3), 2))}`;
         videoe *= 2 ^ parseInt(`${armva9}`);
         armva9 *= 2;
      while (iconclosewhite6.length > 2) {
          let shrinkt = String.fromCharCode(97,101,115,0);
         liveendmodallogok = `${iconclosewhite6.length * liveendmodallogok.length}`;
         shrinkt += `${shrinkt.length & shrinkt.length}`;
         break;
      }
      traminiI = (penaltymatchiconX + parseFloat(`${liveendmodallogok.length}`)) >= 51.40;
   }
      penaltygoalE *= (elementsr == String.fromCharCode(101,0) ? elementsr.length : parseInt(`${penaltygoalE}`));

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRCcdfbdabcabbbedbLibfb, {});

   if (topicX.endsWith(`${penaltymatchiconX}`)) {
      topicX += `${parseInt(`${singaporeF}`) << (Math.min(3, Math.abs(parseInt(`${penaltygoalE}`))))}`;
   }
      topicX = `${malaysiaw}`;
   while (3.5 <= (4.6 / (Math.max(3, singaporeF))) || traminiI) {
       let predictionbuttonA = 5;
       let libreanimatedd: Map<any, any> = new Map([[String.fromCharCode(109,101,109,98,101,114,0),472], [String.fromCharCode(105,110,116,101,114,118,97,108,115,0),551]]);
      if (!Array.from(libreanimatedd.values()).includes(predictionbuttonA)) {
         predictionbuttonA ^= 2;
      }
      for (let b = 0; b < 2; b++) {
         libreanimatedd.set(`${predictionbuttonA}`, libreanimatedd.size);
      }
      for (let d = 0; d < 1; d++) {
         libreanimatedd.set(`${predictionbuttonA}`, 3 / (Math.max(4, libreanimatedd.size)));
      }
         predictionbuttonA &= libreanimatedd.size;
      if (libreanimatedd.get(`${predictionbuttonA}`) != null) {
          let libswscaleN: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,116,121,0),417], [String.fromCharCode(110,105,110,101,0),443]]);
          let stringk = String.fromCharCode(102,117,110,99,0);
          let livenodatabgimgU = 0;
         libreanimatedd.set(stringk, libswscaleN.size + 1);
         libswscaleN = new Map([[`${livenodatabgimgU}`, livenodatabgimgU ^ livenodatabgimgU]]);
         stringk += `${livenodatabgimgU}`;
      }
      let time_1ub = libreanimatedd.size >= 8513477;
      do {
         libreanimatedd.set(`${predictionbuttonA}`, 1);
         if (time_1ub) {
            break;
         }
      } while ((!Array.from(libreanimatedd.values()).includes(predictionbuttonA)) && time_1ub);
      singaporeF /= Math.max(2, parseFloat(`${1 / (Math.max(1, parseInt(`${basketballplayerplaceholderG}`)))}`));
      break;
   }
       let libapminsightb9 = String.fromCharCode(109,97,116,114,105,120,102,0);
         libapminsightb9 += `${libapminsightb9.length + 1}`;
         libapminsightb9 += `${libapminsightb9.length}`;
       let reactnavigationJ = 3.0;
      malaysiaw -= (String.fromCharCode(83,0) == elementsr ? elementsr.length : malaysiaw);
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRDetailIconarrowrightorange,
        });

       let whatsappI = String.fromCharCode(108,97,115,116,0);
       let bgvipsportf = String.fromCharCode(115,101,109,97,110,116,105,99,115,0);
         bgvipsportf += `${(String.fromCharCode(80,0) == bgvipsportf ? whatsappI.length : bgvipsportf.length)}`;
      if (bgvipsportf.startsWith(whatsappI)) {
         bgvipsportf += `${bgvipsportf.length}`;
      }
      while (5 <= bgvipsportf.length && whatsappI.length <= 5) {
          let relatedg = 0;
          let fillz = 0;
         bgvipsportf = `${relatedg >> (Math.min(bgvipsportf.length, 4))}`;
         relatedg <<= Math.min(2, Math.abs(2 - fillz));
         fillz ^= fillz | 2;
         break;
      }
      while (whatsappI.length == 3 || bgvipsportf == String.fromCharCode(49,0)) {
          let areaa: Map<any, any> = new Map([[String.fromCharCode(112,111,105,110,116,99,98,98,0),390], [String.fromCharCode(105,110,105,116,105,97,116,101,0),602], [String.fromCharCode(111,108,100,110,101,119,0),550]]);
         whatsappI += `${bgvipsportf.length >> (Math.min(Math.abs(1), 5))}`;
         areaa.set(`${areaa.size}`, areaa.size);
         break;
      }
         bgvipsportf = `${bgvipsportf.length + 3}`;
          let modulesy = String.fromCharCode(114,101,102,108,101,99,116,105,111,110,0);
          let delegate_d6Z = String.fromCharCode(115,121,110,111,110,121,109,115,0);
          let weatherc = String.fromCharCode(110,111,100,101,115,0);
         whatsappI = `${1 + bgvipsportf.length}`;
         modulesy += `${modulesy.length - 1}`;
         delegate_d6Z += "3";
         weatherc = "2";
      singaporeF += parseFloat(`${bgvipsportf.length % 2}`);
       let shirtc = String.fromCharCode(112,111,108,121,109,111,100,0);
       let liveh = 0.0;
       let valuesc: Map<any, any> = new Map([[String.fromCharCode(108,111,117,100,110,101,115,115,0),false ], [String.fromCharCode(115,116,114,116,97,103,0),false ], [String.fromCharCode(111,112,101,110,115,101,97,0),true ]]);
         shirtc += `${parseInt(`${liveh}`) / (Math.max(valuesc.size, 2))}`;
         valuesc = new Map([[shirtc, 3]]);
         shirtc += `${valuesc.size >> (Math.min(Math.abs(2), 1))}`;
          let sport9 = 3;
         valuesc.set(`${liveh}`, 2 % (Math.max(parseInt(`${liveh}`), 8)));
         sport9 ^= sport9;
      while (shirtc.length == valuesc.size) {
         shirtc = `${shirtc.length & parseInt(`${liveh}`)}`;
         break;
      }
         shirtc += `${valuesc.size}`;
      while (valuesc.get(`${liveh}`) != null) {
         valuesc.set(`${liveh}`, valuesc.size % (Math.max(2, 8)));
         break;
      }
      if (4.87 < (5.66 - liveh)) {
         liveh -= parseInt(`${liveh}`) << (Math.min(Math.abs(valuesc.size), 1));
      }
      while ((liveh - 4.54) >= 4.85 && (4.54 - liveh) >= 4.70) {
         liveh -= 1;
         break;
      }
      penaltygoalE -= topicX.length + 3;
      malaysiaw ^= (2 - (traminiI ? 4 : 2));
   if ((2.54 + basketballplayerplaceholderG) == 4.11) {
      basketballplayerplaceholderG -= parseFloat(`${parseInt(`${singaporeF}`)}`);
   }

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRCcdfbdabcabbbedbLibfb);
    }

    static sportDetailsVipPopupClicksAnalytics = (category: 'pay' | 'invite') => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRMatchdetailbg, {
            'click_category': category === 'pay' ? '购买' : '邀请',
        });
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRDetailIconarrowrightorange,
            params: {
                desc_1: category,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRMatchdetailbg);
    }


    
    static playlistViewsAnalytics = () => {
       let filedA = 2.0;
    let profileframey = false;
    let chinasame9: Array<any> = [547, 224];
    let kuaishoub: Array<any> = [String.fromCharCode(114,101,103,114,101,115,115,0), String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,115,0), String.fromCharCode(98,121,116,101,108,101,110,0)];
    let successU = true;
    let flagB = 2;
    let nativemoduleS = String.fromCharCode(101,118,98,117,102,102,101,114,0);
    let videojsL = String.fromCharCode(119,101,98,114,116,99,0);
    let feedbackw: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,108,121,0),false ], [String.fromCharCode(99,108,97,117,115,101,0),true ]]);
    let dplusV = 3.0;
   for (let y = 0; y < 1; y++) {
       let teamdetailsbgJ = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,0);
       let profileF: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,111,114,121,0),true ], [String.fromCharCode(116,105,99,107,0),false ], [String.fromCharCode(99,104,111,112,0),true ]]);
       let defaultteam3 = 1.0;
          let faviconN = 0;
          let logoutm: Array<any> = [437, 267];
          let reactnativeratingss = String.fromCharCode(115,111,110,105,99,0);
         profileF = new Map([[`${profileF.size}`, 3]]);
         faviconN |= 2 + logoutm.length;
         logoutm = [logoutm.length << (Math.min(4, Math.abs(faviconN)))];
         reactnativeratingss = `${logoutm.length ^ 3}`;
      for (let q = 0; q < 3; q++) {
          let greenarrowupF = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,0);
          let membershipC = true;
         profileF = new Map([[`${defaultteam3}`, teamdetailsbgJ.length]]);
         greenarrowupF = `${((membershipC ? 1 : 3) / (Math.max(2, greenarrowupF.length)))}`;
         membershipC = !greenarrowupF.startsWith(`${membershipC}`);
      }
          let exampleimagen = String.fromCharCode(97,117,116,104,0);
          let iconadslinku = 0;
         teamdetailsbgJ = `${iconadslinku}`;
         exampleimagen += `${exampleimagen.length}`;
         iconadslinku += exampleimagen.length ^ 2;
          let subbasketballplayerk = 3;
          let iconplays: Array<any> = [759, 577];
          let invitez = String.fromCharCode(112,114,111,116,101,99,116,0);
         teamdetailsbgJ = "1";
         subbasketballplayerk += subbasketballplayerk;
         iconplays.push(iconplays.length ^ subbasketballplayerk);
         invitez = `${invitez.length & iconplays.length}`;
          let scrollviewq = String.fromCharCode(110,111,114,109,97,108,105,122,101,100,0);
         profileF.set(teamdetailsbgJ, teamdetailsbgJ.length - profileF.size);
         scrollviewq += "2";
      if (!teamdetailsbgJ.endsWith(`${profileF.size}`)) {
         teamdetailsbgJ = `${3 & parseInt(`${defaultteam3}`)}`;
      }
       let sourceN = String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,0);
       let overt = String.fromCharCode(115,99,101,110,101,0);
          let customI = 5;
          let kuaishouV = 4.0;
         teamdetailsbgJ += `${parseInt(`${defaultteam3}`) & 2}`;
         customI /= Math.max(customI, 1);
         kuaishouV /= Math.max(parseFloat(`${customI | 3}`), 3);
         overt = `${(teamdetailsbgJ == String.fromCharCode(122,0) ? teamdetailsbgJ.length : parseInt(`${defaultteam3}`))}`;
      kuaishoub.push(2);
   }
      profileframey = videojsL.length == 63;
      profileframey = String.fromCharCode(85,0) == videojsL;
      chinasame9.push((nativemoduleS == String.fromCharCode(84,0) ? kuaishoub.length : nativemoduleS.length));
       let projectX = String.fromCharCode(98,101,115,115,101,108,0);
       let libcrashsdkW = 3.0;
       let catagorym = 3.0;
          let kuaishouS = String.fromCharCode(101,120,116,114,97,102,105,101,108,100,0);
          let suggestionJ: Map<any, any> = new Map([[String.fromCharCode(115,116,115,100,0),767], [String.fromCharCode(115,101,116,115,104,97,114,101,0),789]]);
          let manifestY = String.fromCharCode(110,97,110,111,115,0);
         libcrashsdkW *= parseFloat(`${projectX.length ^ kuaishouS.length}`);
         kuaishouS = "2";
         suggestionJ.set(manifestY, (String.fromCharCode(112,0) == manifestY ? suggestionJ.size : manifestY.length));
       let dragcloseN: Map<any, any> = new Map([[String.fromCharCode(100,108,114,114,0),116], [String.fromCharCode(99,111,117,110,116,101,100,0),61]]);
       let profileH: Map<any, any> = new Map([[String.fromCharCode(115,111,117,110,0),384], [String.fromCharCode(110,111,100,111,119,110,0),903]]);
      if ((profileH.size * 3) == 4 || (3 << (Math.min(2, Math.abs(profileH.size)))) == 4) {
         catagorym += dragcloseN.size;
      }
          let matchinactiveT: Array<any> = [983, 503, 540];
          let phoneshare5 = 0;
          let placeholderg: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,109,105,116,116,101,100,0),110], [String.fromCharCode(99,109,111,118,0),813]]);
         catagorym += placeholderg.size;
         matchinactiveT = [phoneshare5];
         phoneshare5 &= 2 % (Math.max(3, matchinactiveT.length));
         placeholderg.set(`${phoneshare5}`, phoneshare5 << (Math.min(matchinactiveT.length, 5)));
         catagorym /= Math.max(4, dragcloseN.size / 2);
          let utilsO = false;
          let embedW: Array<any> = [842, 6];
         projectX += `${((utilsO ? 2 : 1) >> (Math.min(embedW.length, 2)))}`;
       let libapminsightbd = String.fromCharCode(120,118,105,100,0);
         dragcloseN.set(`${libcrashsdkW}`, parseInt(`${libcrashsdkW}`) ^ 2);
         catagorym -= 1;
      successU = projectX.length > 36;

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRPageTumbnail, {});

       let videovarb = true;
      if (!videovarb && !videovarb) {
          let sliderO = false;
          let statisticsinactivel: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,0),true ], [String.fromCharCode(98,117,105,108,116,105,110,0),true ], [String.fromCharCode(110,116,104,0),false ]]);
          let subin4 = 1;
          let unread0 = String.fromCharCode(111,112,116,105,109,117,109,0);
          let runtimescheduleri = String.fromCharCode(114,102,99,116,0);
         videovarb = ((statisticsinactivel.size & (videovarb ? 87 : statisticsinactivel.size)) <= 87);
         sliderO = 86 >= subin4 || sliderO;
         subin4 -= runtimescheduleri.length;
         unread0 = `${1 & runtimescheduleri.length}`;
      }
      if (videovarb) {
          let gradlewv = 4;
          let floaterm = true;
          let iconclosee = 1;
          let leftQ = 1.0;
          let binddatasd = String.fromCharCode(114,101,118,105,115,105,111,110,0);
         videovarb = !floaterm;
         gradlewv -= gradlewv;
         iconclosee %= Math.max(iconclosee, 1);
         leftQ += parseFloat(`${3 / (Math.max(gradlewv, 10))}`);
         binddatasd += `${parseInt(`${leftQ}`)}`;
      }
      for (let m = 0; m < 3; m++) {
         videovarb = !videovarb;
      }
      successU = profileframey;
   let z_titleK = successU ? !successU : successU;
   do {
      successU = videojsL.includes(`${flagB}`);
      if (z_titleK) {
         break;
      }
   } while (z_titleK && (videojsL.length > 2));
      flagB >>= Math.min(5, Math.abs(nativemoduleS.length + 3));
   if (4.10 > (1.27 * filedA)) {
      filedA += parseFloat(`${chinasame9.length ^ 2}`);
   }
   let foregroundZ = videojsL == String.fromCharCode(119,111,109,121,115,98,49,54,115,50,0);
   do {
      videojsL = `${1 % (Math.max(10, parseInt(`${filedA}`)))}`;
      if (foregroundZ) {
         break;
      }
   } while ((!videojsL.startsWith(`${feedbackw.size}`)) && foregroundZ);
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRYellowtoredCatagory,
        });

   let with_nly = profileframey ? !profileframey : profileframey;
   do {
       let predictiono = String.fromCharCode(115,109,111,111,116,104,108,121,0);
       let productB = String.fromCharCode(99,111,114,101,115,0);
       let neon1 = 5.0;
       let down7 = String.fromCharCode(97,112,112,114,111,118,101,114,0);
       let analytics7 = 1.0;
          let mbnativeadvancedc: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,108,121,0),false ], [String.fromCharCode(116,111,100,97,121,0),true ]]);
          let bodana: Array<any> = [107, 680];
         neon1 *= parseInt(`${neon1}`) | down7.length;
         mbnativeadvancedc.set(`${bodana.length}`, mbnativeadvancedc.size ^ bodana.length);
      if (4.72 < (5.6 * analytics7)) {
          let catalogK = false;
          let shrunkm = 2.0;
          let imagenomoredatav = true;
         analytics7 *= parseInt(`${shrunkm}`) | 2;
         catalogK = imagenomoredatav;
         shrunkm -= ((catalogK ? 1 : 5));
      }
      for (let s = 0; s < 1; s++) {
          let floater4: Map<any, any> = new Map([[String.fromCharCode(104,105,115,116,111,114,121,0),223], [String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,0),32], [String.fromCharCode(117,110,99,111,110,102,105,114,109,101,100,0),506]]);
          let imagewatchliveU: Array<any> = [103, 504, 486];
          let gifgoalbgZ: Array<any> = [String.fromCharCode(115,97,100,120,0), String.fromCharCode(108,111,103,102,110,0), String.fromCharCode(122,99,111,110,118,111,108,118,101,0)];
          let klevin0 = true;
          let combinev = 1;
         down7 = `${(productB == String.fromCharCode(50,0) ? down7.length : productB.length)}`;
         floater4.set(`${combinev}`, 1 % (Math.max(9, gifgoalbgZ.length)));
         imagewatchliveU.push(imagewatchliveU.length);
         gifgoalbgZ.push((gifgoalbgZ.length + (klevin0 ? 3 : 4)));
         klevin0 = 11 <= floater4.size;
         combinev /= Math.max((2 << (Math.min(4, Math.abs((klevin0 ? 2 : 3))))), 3);
      }
       let homeinactivet = String.fromCharCode(114,97,115,116,101,114,0);
       let libturbomodulejsijniX = String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,0);
          let hoverb = String.fromCharCode(108,111,99,97,108,0);
          let tempnodatat = String.fromCharCode(119,111,114,100,0);
          let commonq = 4.0;
         libturbomodulejsijniX += `${2 >> (Math.min(5, Math.abs(parseInt(`${commonq}`))))}`;
         hoverb = `${(tempnodatat == String.fromCharCode(100,0) ? tempnodatat.length : hoverb.length)}`;
         commonq -= parseFloat(`${1}`);
         homeinactivet += `${predictiono.length << (Math.min(libturbomodulejsijniX.length, 1))}`;
      while ((parseInt(`${analytics7}`) + down7.length) < 4 || (parseInt(`${analytics7}`) + down7.length) < 4) {
         analytics7 -= parseInt(`${neon1}`) | parseInt(`${analytics7}`);
         break;
      }
         predictiono += `${homeinactivet.length}`;
       let libbufferK = 2;
       let photoS = 0;
          let iconviewergifU = true;
          let controlz = 2.0;
          let launcherp = String.fromCharCode(102,105,120,0);
         neon1 -= (down7 == String.fromCharCode(113,0) ? down7.length : parseInt(`${controlz}`));
         iconviewergifU = (((!iconviewergifU ? 66 : launcherp.length) % (Math.max(launcherp.length, 4))) == 66);
         controlz -= 2 | launcherp.length;
       let iconclosewhitebgL = String.fromCharCode(116,101,108,101,103,114,97,109,0);
       let iconnointernet0 = String.fromCharCode(112,101,114,105,111,100,0);
         predictiono += `${(libturbomodulejsijniX == String.fromCharCode(77,0) ? photoS : libturbomodulejsijniX.length)}`;
         neon1 -= productB.length * 2;
          let teamdetailsbgV = 3.0;
          let sharemodalF = 0.0;
         iconclosewhitebgL = `${iconclosewhitebgL.length / (Math.max(down7.length, 1))}`;
         teamdetailsbgV += parseFloat(`${parseInt(`${teamdetailsbgV}`) >> (Math.min(Math.abs(parseInt(`${sharemodalF}`)), 5))}`);
         sharemodalF += parseFloat(`${parseInt(`${sharemodalF}`) - 1}`);
      for (let v = 0; v < 2; v++) {
         libbufferK &= iconnointernet0.length;
      }
      profileframey = kuaishoub.length >= feedbackw.size;
      if (with_nly) {
         break;
      }
   } while (with_nly && (!successU));
   while (profileframey) {
      profileframey = videojsL.endsWith(`${successU}`);
      break;
   }
      filedA *= parseFloat(`${chinasame9.length}`);
   while (!successU) {
      kuaishoub.push(kuaishoub.length % (Math.max(1, 2)));
      break;
   }
   if ((videojsL.length * 5) < 1 && 3 < (videojsL.length * 5)) {
      videojsL += `${nativemoduleS.length}`;
   }

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRPageTumbnail);
    }

    static playlistClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRIncidentBackiconmask, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRYellowtoredCatagory,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRIncidentBackiconmask);
    }

    static playlistTopicsViewsAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRFastforward, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRMbbanner,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRFastforward);
    }

    static playlistTopicsClickAnalytics = ({ topic_id, topic_name }: { topic_id: string, topic_name: string }) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRLiveHash, {
            'topic_id': topic_id,
            'topic_name': topic_name,
        });
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRMbbanner,
            params: {
                desc_1: 'topic.id:' + topic_id,
                desc_2: 'topic.name:' + topic_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRLiveHash);
    }


    
    static userCenterLoginSuccessTimesAnalytics = () => {
       let termsK: Array<any> = [652, 870];
    let libjsijniprofiler0 = String.fromCharCode(109,111,117,115,0);
    let animationsW = String.fromCharCode(100,114,111,112,112,101,114,0);
    let signinupr = String.fromCharCode(109,117,108,114,101,115,0);
    let dependencyO = String.fromCharCode(98,97,114,99,111,100,101,0);
    let favoriteX = 1.0;
    let upgrade0 = 0.0;
    let iconorientationA = String.fromCharCode(118,111,105,99,101,115,0);
    let pageN = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,0);
    let policy8 = 1.0;
      upgrade0 *= parseFloat(`${2 % (Math.max(2, animationsW.length))}`);
   let iconnewchatz = favoriteX >= 9756312.0;
   do {
       let handlerX = 0.0;
       let penaltygoalA = String.fromCharCode(115,101,113,117,101,110,99,101,114,0);
       let penaltygoal6 = String.fromCharCode(103,111,116,111,0);
      for (let o = 0; o < 2; o++) {
         penaltygoal6 = "3";
      }
      for (let e = 0; e < 3; e++) {
          let r_imaged: Array<any> = [String.fromCharCode(119,105,102,105,0), String.fromCharCode(115,111,114,116,105,110,103,0), String.fromCharCode(119,111,114,100,115,0)];
         penaltygoalA = `${(penaltygoalA == String.fromCharCode(102,0) ? parseInt(`${handlerX}`) : penaltygoalA.length)}`;
         r_imaged = [1];
      }
       let exampleimage9 = String.fromCharCode(99,97,99,104,101,115,105,122,101,0);
       let smalle = String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,0);
          let jcopy_d0 = 2.0;
         penaltygoal6 += `${(String.fromCharCode(120,0) == smalle ? penaltygoal6.length : smalle.length)}`;
         jcopy_d0 += parseFloat(`${parseInt(`${jcopy_d0}`) + parseInt(`${jcopy_d0}`)}`);
      for (let l = 0; l < 1; l++) {
         exampleimage9 = `${parseInt(`${handlerX}`)}`;
      }
      if (exampleimage9.length <= 4) {
         exampleimage9 += `${parseInt(`${handlerX}`)}`;
      }
       let qaag0 = 5;
       let iconpipshrinkg = 5;
         handlerX *= penaltygoalA.length & exampleimage9.length;
      let libreanimateda = 9091824 >= penaltygoalA.length;
      do {
          let eyeopeny: Array<any> = [979, 108, 301];
         penaltygoalA += "1";
         eyeopeny.push(2);
         if (libreanimateda) {
            break;
         }
      } while ((2 == (penaltygoalA.length & 4) && (penaltygoalA.length & 4) == 1) && libreanimateda);
      favoriteX -= parseFloat(`${1}`);
      if (iconnewchatz) {
         break;
      }
   } while ((5.3 <= (upgrade0 * favoriteX)) && iconnewchatz);
       let imagenomoredataQ = String.fromCharCode(108,111,117,100,110,111,114,109,0);
       let neon3 = String.fromCharCode(115,117,98,116,97,115,107,0);
       let handler3 = 4.0;
      for (let k = 0; k < 3; k++) {
          let airbnbstarselectede = 0.0;
          let downloadedX = false;
         neon3 = `${1 ^ imagenomoredataQ.length}`;
         airbnbstarselectede -= parseInt(`${airbnbstarselectede}`);
         downloadedX = airbnbstarselectede <= 92.42 || 92.42 <= airbnbstarselectede;
      }
          let backiconmaskS = String.fromCharCode(103,117,105,100,0);
          let iconfeedback0 = 3.0;
         imagenomoredataQ += `${imagenomoredataQ.length + 3}`;
         backiconmaskS = `${backiconmaskS.length}`;
         iconfeedback0 -= (backiconmaskS == String.fromCharCode(103,0) ? backiconmaskS.length : parseInt(`${iconfeedback0}`));
       let goalI = 3;
       let tempnodataC = 4;
         tempnodataC /= Math.max(3, 3);
          let pinge = 3.0;
         tempnodataC ^= tempnodataC * 3;
         pinge += 3 >> (Math.min(Math.abs(parseInt(`${pinge}`)), 5));
      if (neon3.length < 4) {
         goalI += tempnodataC;
      }
      while (parseInt(`${handler3}`) < neon3.length) {
          let guide0: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,0),false ], [String.fromCharCode(116,114,117,115,116,101,100,0),true ], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,105,110,103,0),true ]]);
          let storeZ = String.fromCharCode(102,105,108,109,95,103,95,52,51,0);
         handler3 *= tempnodataC;
         guide0.set(storeZ, storeZ.length);
         break;
      }
         imagenomoredataQ = `${goalI - tempnodataC}`;
      while (4 > imagenomoredataQ.length) {
         neon3 = `${parseInt(`${handler3}`) | tempnodataC}`;
         break;
      }
      libjsijniprofiler0 = `${neon3.length - dependencyO.length}`;
   if ((animationsW.length % (Math.max(3, 10))) < 3 && (termsK.length % (Math.max(animationsW.length, 6))) < 3) {
       let subtextx = false;
       let miniz = true;
         miniz = !subtextx;
      while (!subtextx) {
         miniz = !miniz && !subtextx;
         break;
      }
      animationsW += `${2 | libjsijniprofiler0.length}`;
   }
      favoriteX *= (parseFloat(`${String.fromCharCode(56,0) == dependencyO ? dependencyO.length : parseInt(`${favoriteX}`)}`));

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRPlay, {});

   let plash7 = 8672675 <= animationsW.length;
   do {
      animationsW = `${(String.fromCharCode(85,0) == animationsW ? libjsijniprofiler0.length : animationsW.length)}`;
      if (plash7) {
         break;
      }
   } while (plash7 && ((4 >> (Math.min(3, animationsW.length))) >= 3));
   let libavdevicer = animationsW == String.fromCharCode(108,111,99,56,119,0);
   do {
       let yellowtoredW: Map<any, any> = new Map([[String.fromCharCode(112,114,101,117,112,100,97,116,101,0),String.fromCharCode(99,111,117,110,116,115,0)], [String.fromCharCode(101,120,99,108,117,100,105,110,103,0),String.fromCharCode(105,116,117,110,101,115,0)]]);
       let qnewssharec = String.fromCharCode(114,101,115,111,117,114,99,101,0);
       let refreshborderlessc = 1.0;
       let playercommonl = 0.0;
       let javai = 3.0;
      if (playercommonl == 4.36) {
          let main_k_: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,98,108,105,110,103,0),441], [String.fromCharCode(98,121,116,101,115,0),858], [String.fromCharCode(99,114,101,100,101,110,116,105,97,108,0),870]]);
          let rulesA = String.fromCharCode(119,97,118,112,97,99,107,0);
         javai /= Math.max(3, 2);
         main_k_ = new Map([[`${main_k_.size}`, 1 & main_k_.size]]);
         rulesA += `${2 << (Math.min(5, Math.abs(main_k_.size)))}`;
      }
      for (let p = 0; p < 1; p++) {
         yellowtoredW = new Map([[`${playercommonl}`, parseInt(`${javai}`)]]);
      }
       let javaC = 5.0;
          let base5: Array<any> = [907, 100];
          let lnewarchdefaultsD = 1;
         refreshborderlessc -= parseFloat(`${3 | yellowtoredW.size}`);
         base5.push(base5.length + 1);
         lnewarchdefaultsD -= lnewarchdefaultsD % (Math.max(base5.length, 3));
       let canceln = 4.0;
         qnewssharec = `${parseInt(`${playercommonl}`)}`;
      for (let k = 0; k < 1; k++) {
         javai -= 3 | yellowtoredW.size;
      }
          let suggestionh = 0;
          let iconshared = 0.0;
         canceln *= parseInt(`${javaC}`) >> (Math.min(4, Math.abs(2)));
         suggestionh |= parseInt(`${iconshared}`);
         iconshared -= parseFloat(`${parseInt(`${iconshared}`) & suggestionh}`);
      let baseF = 5943898.0 >= refreshborderlessc;
      do {
         refreshborderlessc -= parseFloat(`${parseInt(`${canceln}`) % (Math.max(6, parseInt(`${playercommonl}`)))}`);
         if (baseF) {
            break;
         }
      } while ((4.13 > (2.95 * refreshborderlessc)) && baseF);
      for (let w = 0; w < 3; w++) {
         refreshborderlessc -= parseFloat(`${parseInt(`${javai}`) - qnewssharec.length}`);
      }
      let minimizeJ = 6820539.0 >= canceln;
      do {
          let dialogb = false;
          let placement_ = String.fromCharCode(100,105,109,101,110,115,105,111,110,115,0);
          let yingK = 1;
         canceln /= Math.max(1, 3);
         dialogb = 60 > placement_.length;
         placement_ = `${placement_.length}`;
         yingK *= 1;
         if (minimizeJ) {
            break;
         }
      } while (minimizeJ && ((javaC + canceln) >= 3.93));
         canceln /= Math.max(parseInt(`${playercommonl}`), 5);
       let play5 = String.fromCharCode(101,118,105,99,116,0);
         javaC *= parseFloat(`${parseInt(`${refreshborderlessc}`)}`);
       let streaming6: Map<any, any> = new Map([[String.fromCharCode(102,101,101,100,98,97,99,107,0),314], [String.fromCharCode(99,111,109,112,111,110,101,110,116,115,0),913]]);
      animationsW += `${parseInt(`${playercommonl}`) | 2}`;
      if (libavdevicer) {
         break;
      }
   } while ((animationsW == String.fromCharCode(108,0) || dependencyO.length < 2) && libavdevicer);
      signinupr += `${(iconorientationA == String.fromCharCode(54,0) ? iconorientationA.length : termsK.length)}`;
   if (1 < (libjsijniprofiler0.length % 2) || (favoriteX + parseFloat(`${libjsijniprofiler0.length}`)) < 2.66) {
      favoriteX /= Math.max(parseFloat(`${dependencyO.length % (Math.max(3, 6))}`), 1);
   }
      libjsijniprofiler0 = `${libjsijniprofiler0.length}`;
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRLibyogaThailand,
        });

      pageN += `${dependencyO.length & pageN.length}`;
   if (pageN.length > parseInt(`${upgrade0}`)) {
      pageN += "2";
   }
   while (4 <= termsK.length) {
       let libcxxcomponentsW = 1.0;
       let watchnowbgw = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0);
       let privatechatbgy = 2.0;
       let signinupj = true;
          let gray5 = 0;
          let episodesn: Array<any> = [361, 894];
          let owngoalZ = 1.0;
         privatechatbgy += parseFloat(`${parseInt(`${privatechatbgy}`)}`);
         gray5 <<= Math.min(5, Math.abs(2 << (Math.min(4, episodesn.length))));
         episodesn = [episodesn.length & 3];
         owngoalZ -= parseFloat(`${2}`);
         libcxxcomponentsW -= watchnowbgw.length * parseInt(`${libcxxcomponentsW}`);
         signinupj = privatechatbgy == 14.28;
      if ((4 - parseInt(`${privatechatbgy}`)) >= 1 && (privatechatbgy - parseFloat(`${watchnowbgw.length}`)) >= 2.94) {
         privatechatbgy -= parseFloat(`${parseInt(`${libcxxcomponentsW}`)}`);
      }
      while (!signinupj) {
         privatechatbgy /= Math.max(5, parseFloat(`${parseInt(`${libcxxcomponentsW}`) + 1}`));
         break;
      }
          let libfbjnie = String.fromCharCode(110,101,101,100,115,0);
         watchnowbgw += `${((signinupj ? 4 : 2) & parseInt(`${privatechatbgy}`))}`;
         libfbjnie += "1";
         watchnowbgw += `${parseInt(`${libcxxcomponentsW}`)}`;
      for (let y = 0; y < 3; y++) {
          let defaultpredictionprofileT = 5;
         libcxxcomponentsW += 3;
         defaultpredictionprofileT /= Math.max(4, defaultpredictionprofileT);
      }
      for (let l = 0; l < 3; l++) {
         signinupj = !signinupj || libcxxcomponentsW > 69.30;
      }
      if ((3.61 * libcxxcomponentsW) == 3.68) {
         signinupj = 44.36 > libcxxcomponentsW;
      }
          let rounda = String.fromCharCode(97,116,116,114,97,99,116,105,111,110,0);
         libcxxcomponentsW /= Math.max((watchnowbgw == String.fromCharCode(57,0) ? watchnowbgw.length : rounda.length), 2);
          let penaltymatchiconK = String.fromCharCode(99,97,118,115,105,100,99,116,0);
          let l_countX = String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,0);
          let templateprocessorV = false;
         privatechatbgy *= (parseFloat(`${(templateprocessorV ? 4 : 1)}`));
         penaltymatchiconK = `${penaltymatchiconK.length << (Math.min(Math.abs(3), 3))}`;
         l_countX += `${penaltymatchiconK.length % (Math.max(2, 9))}`;
         templateprocessorV = (l_countX.length ^ penaltymatchiconK.length) >= 88;
      termsK = [termsK.length >> (Math.min(Math.abs(1), 3))];
      break;
   }
   if (1 == animationsW.length && signinupr == String.fromCharCode(88,0)) {
       let javaa = String.fromCharCode(99,118,99,0);
       let verticalX = false;
       let privacys = String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,0);
       let floaterj = 5.0;
       let sportt = 2;
         javaa = `${((verticalX ? 1 : 5))}`;
         javaa += "3";
         floaterj *= (parseFloat(`${javaa == String.fromCharCode(113,0) ? javaa.length : (verticalX ? 3 : 4)}`));
      while (verticalX) {
          let securityD = false;
          let penalty1: Array<any> = [630, 717];
          let positionfieldk = 3;
          let footballfiledlayoutK = String.fromCharCode(114,108,118,108,99,0);
         sportt /= Math.max(privacys.length | footballfiledlayoutK.length, 5);
         securityD = !securityD;
         penalty1.push(1);
         positionfieldk ^= penalty1.length;
         footballfiledlayoutK += "2";
         break;
      }
       let round2 = true;
      if (1 <= (javaa.length * 1) || 1 <= (parseInt(`${floaterj}`) / (Math.max(3, javaa.length)))) {
         floaterj -= parseFloat(`${javaa.length << (Math.min(Math.abs(3), 1))}`);
      }
      let libswscaleZ = round2 ? !round2 : round2;
      do {
         round2 = !javaa.startsWith(`${verticalX}`);
         if (libswscaleZ) {
            break;
         }
      } while (libswscaleZ && (round2));
         round2 = (parseInt(`${floaterj}`) * privacys.length) >= 13;
         sportt += 3;
       let emojiA = 2.0;
      let carouselu = 5648311.0 <= floaterj;
      do {
         floaterj -= (parseFloat(`${String.fromCharCode(49,0) == javaa ? javaa.length : sportt}`));
         if (carouselu) {
            break;
         }
      } while ((5.66 < floaterj) && carouselu);
      let scorepopsoundv = sportt >= 6697891;
      do {
          let backgroundL = 4.0;
          let dicelogoV = String.fromCharCode(115,105,122,101,109,109,0);
          let defaultteamf = 5;
          let reactnativejsR = 4;
          let overA = 3.0;
         sportt ^= reactnativejsR;
         backgroundL /= Math.max(dicelogoV.length + parseInt(`${backgroundL}`), 1);
         dicelogoV = `${defaultteamf / (Math.max(parseInt(`${overA}`), 3))}`;
         defaultteamf %= Math.max(3, 1);
         reactnativejsR /= Math.max(2, (dicelogoV == String.fromCharCode(84,0) ? parseInt(`${backgroundL}`) : dicelogoV.length));
         overA *= parseFloat(`${parseInt(`${backgroundL}`) * 3}`);
         if (scorepopsoundv) {
            break;
         }
      } while (((2 << (Math.min(5, Math.abs(sportt)))) >= 4 && 4 >= (2 / (Math.max(6, sportt)))) && scorepopsoundv);
          let movies9 = String.fromCharCode(108,109,108,109,0);
          let style8 = 3.0;
         verticalX = privacys == String.fromCharCode(97,0);
         movies9 += `${2 << (Math.min(4, movies9.length))}`;
         style8 -= parseFloat(`${1}`);
      while ((2 >> (Math.min(3, javaa.length))) < 5 || 3 < (2 << (Math.min(4, javaa.length)))) {
         javaa += `${2 * parseInt(`${emojiA}`)}`;
         break;
      }
      while (2 <= sportt) {
         sportt /= Math.max(3, javaa.length);
         break;
      }
      animationsW = `${termsK.length}`;
   }
   if (1.60 > (upgrade0 * 2.99)) {
      animationsW += "1";
   }

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRPlay);
    }

    static userCenterVipLoginSuccessTimesAnalytics = () => {
       let mbbanner7 = 5.0;
    let stringsj = false;
    let basketballdetailsbgs = 4;
    let launchl = 0.0;
    let read9 = false;
    let subsP = String.fromCharCode(116,102,104,100,0);
    let tempnodata7 = String.fromCharCode(102,101,119,0);
    let renderB = true;
    let play5 = String.fromCharCode(120,112,97,116,104,0);
    let appsK = String.fromCharCode(112,108,117,114,97,108,0);
    let largesound8: Map<any, any> = new Map([[String.fromCharCode(99,111,109,101,0),false ], [String.fromCharCode(102,105,101,108,100,109,97,116,99,104,0),true ]]);
    let progressd: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,0),975], [String.fromCharCode(113,117,101,115,116,105,111,110,115,0),418], [String.fromCharCode(110,111,115,99,97,108,101,0),253]]);
      renderB = play5.length > 69 || stringsj;
   for (let n = 0; n < 3; n++) {
       let actionl: Map<any, any> = new Map([[String.fromCharCode(97,118,117,116,105,108,114,101,115,0),382], [String.fromCharCode(99,111,108,114,97,109,0),790], [String.fromCharCode(105,110,105,116,100,101,99,0),228]]);
       let privatechatbg_ = 4.0;
          let yellowredcardq = String.fromCharCode(114,111,117,110,100,101,100,0);
         actionl = new Map([[`${actionl.size}`, parseInt(`${privatechatbg_}`)]]);
         yellowredcardq += `${1 >> (Math.min(4, yellowredcardq.length))}`;
      for (let d = 0; d < 2; d++) {
         privatechatbg_ += 3 >> (Math.min(2, Math.abs(parseInt(`${privatechatbg_}`))));
      }
      for (let p = 0; p < 1; p++) {
          let cancelX = 5;
          let predictiondefault5 = String.fromCharCode(115,116,97,99,104,0);
          let gifgoal1 = 4.0;
         actionl = new Map([[predictiondefault5, predictiondefault5.length]]);
         cancelX &= parseInt(`${gifgoal1}`) / (Math.max(9, cancelX));
         gifgoal1 *= parseFloat(`${cancelX | parseInt(`${gifgoal1}`)}`);
      }
      for (let s = 0; s < 1; s++) {
         actionl = new Map([[`${actionl.size}`, parseInt(`${privatechatbg_}`) << (Math.min(Math.abs(2), 1))]]);
      }
      let middleI = 5394123 <= actionl.size;
      do {
         actionl = new Map([[`${actionl.size}`, actionl.size]]);
         if (middleI) {
            break;
         }
      } while (middleI && ((parseInt(`${privatechatbg_}`) * actionl.size) == 1 && (actionl.size + 1) == 5));
         privatechatbg_ += actionl.size;
      stringsj = (83 < ((!stringsj ? tempnodata7.length : 83) / (Math.max(tempnodata7.length, 5))));
   }
       let inouttargetyellowI: Array<any> = [String.fromCharCode(114,101,99,118,118,0), String.fromCharCode(97,110,105,109,97,116,101,100,0), String.fromCharCode(118,99,111,100,101,99,0)];
       let iconschedulez = 0;
       let iconpipexpand8 = String.fromCharCode(99,104,97,110,110,101,108,115,0);
      for (let o = 0; o < 2; o++) {
         inouttargetyellowI.push(1 + iconschedulez);
      }
       let twitter9 = String.fromCharCode(97,95,53,0);
       let redgoal2 = String.fromCharCode(119,109,118,100,97,116,97,0);
      let libglog2 = 9818107 >= twitter9.length;
      do {
          let material5 = 4;
          let countdownr: Map<any, any> = new Map([[String.fromCharCode(115,112,108,97,110,101,0),401], [String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,0),696], [String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,0),812]]);
          let awayplayer4 = String.fromCharCode(109,117,108,116,105,112,108,121,0);
         twitter9 += `${2 << (Math.min(1, Math.abs(iconschedulez)))}`;
         material5 &= 3 ^ countdownr.size;
         countdownr = new Map([[`${material5}`, material5]]);
         awayplayer4 = `${1 * awayplayer4.length}`;
         if (libglog2) {
            break;
         }
      } while (((inouttargetyellowI.length | 2) < 5 || 2 < (twitter9.length | inouttargetyellowI.length)) && libglog2);
         redgoal2 += "1";
      while (!inouttargetyellowI.includes(iconschedulez)) {
         iconschedulez >>= Math.min(Math.abs(redgoal2.length - 3), 2);
         break;
      }
          let type_0dU = 1;
          let libhermesu = String.fromCharCode(112,97,114,116,115,0);
          let dialogw = 2.0;
         iconpipexpand8 = `${iconschedulez}`;
         type_0dU *= 3;
         libhermesu = "3";
         dialogw += parseInt(`${dialogw}`) >> (Math.min(2, Math.abs(2)));
      for (let e = 0; e < 2; e++) {
         redgoal2 += `${redgoal2.length + 2}`;
      }
       let airbnbstarselectedw = 1;
       let closej = 4;
         twitter9 += `${airbnbstarselectedw}`;
      play5 = `${parseInt(`${mbbanner7}`) | 2}`;
       let smallsoundh: Array<any> = [798, 465];
       let inviteT = false;
       let submito: Array<any> = [155, 768, 966];
         smallsoundh = [1];
      for (let r = 0; r < 3; r++) {
         inviteT = submito.length == 6 || !inviteT;
      }
         smallsoundh = [((inviteT ? 3 : 1) * 1)];
      let teamdetailsbgm = 5708321 <= smallsoundh.length;
      do {
          let nbatrophyD = true;
          let assetsL = 1.0;
          let scorepopsoundh = String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,107,95,57,52,0);
          let halfU: Map<any, any> = new Map([[String.fromCharCode(114,101,117,115,97,98,108,101,0),String.fromCharCode(115,97,98,101,114,0)], [String.fromCharCode(100,114,105,118,101,114,115,0),String.fromCharCode(97,118,114,101,115,97,109,112,108,101,0)], [String.fromCharCode(115,116,97,114,116,114,101,101,0),String.fromCharCode(102,111,117,114,116,104,0)]]);
          let iconsetting7 = String.fromCharCode(101,120,112,105,114,105,110,103,0);
         smallsoundh = [((inviteT ? 5 : 2) * parseInt(`${assetsL}`))];
         nbatrophyD = halfU.size == scorepopsoundh.length;
         assetsL *= parseFloat(`${scorepopsoundh.length}`);
         halfU.set(`${nbatrophyD}`, ((nbatrophyD ? 5 : 5) * 3));
         iconsetting7 += `${3 ^ halfU.size}`;
         if (teamdetailsbgm) {
            break;
         }
      } while (teamdetailsbgm && (inviteT));
      let modules = inviteT ? !inviteT : inviteT;
      do {
         inviteT = smallsoundh.includes(inviteT);
         if (modules) {
            break;
         }
      } while (modules && ((2 | submito.length) == 5));
      let resultR = inviteT ? !inviteT : inviteT;
      do {
         inviteT = ((submito.length << (Math.min(3, Math.abs((inviteT ? submito.length : 71))))) <= 71);
         if (resultR) {
            break;
         }
      } while ((inviteT) && resultR);
         smallsoundh.push((1 * (inviteT ? 5 : 3)));
         inviteT = inviteT && smallsoundh.length > 42;
         inviteT = !inviteT;
      tempnodata7 = "3";
   for (let w = 0; w < 2; w++) {
      subsP = `${(String.fromCharCode(66,0) == tempnodata7 ? tempnodata7.length : subsP.length)}`;
   }
       let iconeyeR = true;
       let downi: Array<any> = [761, 254, 287];
       let playi = true;
      while (downi.length >= 4 || 2 >= (4 & downi.length)) {
         downi.push((2 << (Math.min(2, Math.abs((playi ? 5 : 5))))));
         break;
      }
      while (playi) {
          let topon8: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,115,0),596], [String.fromCharCode(99,97,115,116,0),823], [String.fromCharCode(109,97,115,107,105,110,103,0),445]]);
         iconeyeR = !iconeyeR;
         topon8.set(`${topon8.size}`, topon8.size - topon8.size);
         break;
      }
         iconeyeR = downi.length >= 34;
      let bang7 = downi.length <= 8149237;
      do {
         downi.push(1);
         if (bang7) {
            break;
         }
      } while ((downi.length <= 2) && bang7);
      for (let w = 0; w < 1; w++) {
         iconeyeR = !iconeyeR;
      }
      launchl -= 3;

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRSelectedLight, {});

       let circle4 = 2;
       let scheduleV = String.fromCharCode(111,116,105,102,105,99,97,116,105,111,110,0);
       let backiconmaskB = true;
         circle4 += (scheduleV == String.fromCharCode(79,0) ? scheduleV.length : circle4);
         backiconmaskB = scheduleV.startsWith(`${circle4}`);
         backiconmaskB = !backiconmaskB;
          let bggradients: Array<any> = [811, 310, 258];
          let promotiona = String.fromCharCode(101,97,115,105,110,103,0);
         circle4 &= promotiona.length * scheduleV.length;
         bggradients = [bggradients.length ^ 2];
         promotiona = `${bggradients.length | bggradients.length}`;
      while (scheduleV.length == circle4) {
          let acceptedM = 3.0;
          let libtobE = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,0);
         circle4 *= 1;
         acceptedM *= libtobE.length - parseInt(`${acceptedM}`);
         libtobE += `${(String.fromCharCode(107,0) == libtobE ? parseInt(`${acceptedM}`) : libtobE.length)}`;
         break;
      }
      if (!backiconmaskB) {
         circle4 %= Math.max(2, circle4);
      }
      let nativeexo = 9310833 <= scheduleV.length;
      do {
         scheduleV = `${scheduleV.length % (Math.max(7, circle4))}`;
         if (nativeexo) {
            break;
         }
      } while (nativeexo && (!backiconmaskB));
          let sharemodal8 = false;
          let arrowrightwithtailP = 4;
         backiconmaskB = scheduleV.length <= 15;
         sharemodal8 = !sharemodal8;
         arrowrightwithtailP -= 3;
          let sinar = 1;
          let yellow0 = 2.0;
         scheduleV = `${sinar << (Math.min(4, Math.abs(circle4)))}`;
         sinar *= parseInt(`${yellow0}`) ^ 3;
         yellow0 *= parseFloat(`${parseInt(`${yellow0}`) * parseInt(`${yellow0}`)}`);
      renderB = 99 > basketballdetailsbgs;
       let redscoreballc = 0.0;
       let loginsuccessS = 5.0;
       let defaultprofilepicQ = String.fromCharCode(100,101,112,108,111,121,109,101,110,116,0);
       let templateprocessorj = String.fromCharCode(114,101,110,100,101,114,101,114,115,0);
      while ((redscoreballc / (Math.max(5.22, 4))) < 1.75) {
          let filterk: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,102,105,110,105,116,101,0),312], [String.fromCharCode(102,95,54,95,99,98,117,102,0),44]]);
          let cornerh: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,105,102,115,0),394], [String.fromCharCode(97,117,116,111,114,101,109,111,118,101,0),614]]);
         defaultprofilepicQ += `${cornerh.size}`;
         filterk.set(`${filterk.size}`, filterk.size - filterk.size);
         cornerh = new Map([[`${filterk.size}`, 3]]);
         break;
      }
      let animationE = 9742385 <= templateprocessorj.length;
      do {
          let abidetect7 = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,117,95,57,50,0);
         templateprocessorj += `${abidetect7.length}`;
         if (animationE) {
            break;
         }
      } while (animationE && (templateprocessorj.startsWith(`${loginsuccessS}`)));
         templateprocessorj = "1";
         templateprocessorj += `${2 * parseInt(`${loginsuccessS}`)}`;
         defaultprofilepicQ += `${parseInt(`${redscoreballc}`) >> (Math.min(2, Math.abs(1)))}`;
      read9 = subsP == tempnodata7;
      play5 = `${((stringsj ? 5 : 3) >> (Math.min(Math.abs(basketballdetailsbgs), 5)))}`;
       let shootD: Array<any> = [634, 441];
       let tramini9 = 3;
          let commentO = String.fromCharCode(114,101,112,97,105,110,116,0);
          let injury0 = String.fromCharCode(117,105,100,115,0);
          let minivodw = String.fromCharCode(110,98,105,111,0);
         shootD = [1];
         commentO += `${minivodw.length - 1}`;
         injury0 = `${minivodw.length >> (Math.min(Math.abs(3), 2))}`;
         shootD.push(tramini9 % (Math.max(shootD.length, 2)));
      read9 = mbbanner7 > parseFloat(`${play5.length}`);
   while (play5.startsWith(`${read9}`)) {
      read9 = play5.length >= subsP.length;
      break;
   }
      tempnodata7 += "1";
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDREwardedProduct,
        });

      read9 = launchl >= 16.99;
   if (subsP.length >= 1) {
      subsP += `${subsP.length ^ 2}`;
   }
      basketballdetailsbgs <<= Math.min(play5.length, 4);
       let penaltymatchiconF = 5;
       let orangedownarrow4 = String.fromCharCode(112,117,108,115,101,0);
      for (let w = 0; w < 2; w++) {
         penaltymatchiconF += (String.fromCharCode(55,0) == orangedownarrow4 ? orangedownarrow4.length : penaltymatchiconF);
      }
         orangedownarrow4 += `${(orangedownarrow4 == String.fromCharCode(57,0) ? orangedownarrow4.length : penaltymatchiconF)}`;
      while (orangedownarrow4.includes(`${penaltymatchiconF}`)) {
         orangedownarrow4 += "1";
         break;
      }
         orangedownarrow4 += `${orangedownarrow4.length << (Math.min(2, Math.abs(penaltymatchiconF)))}`;
       let inouttargetyellowJ = String.fromCharCode(97,114,99,104,105,118,101,100,0);
      while (5 <= inouttargetyellowJ.length) {
         inouttargetyellowJ = `${2 * orangedownarrow4.length}`;
         break;
      }
      tempnodata7 += `${basketballdetailsbgs & subsP.length}`;
   while (1 == play5.length) {
      play5 += `${subsP.length ^ basketballdetailsbgs}`;
      break;
   }
      tempnodata7 = `${subsP.length}`;

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRSelectedLight);
    }

    static userCenterVipPayViewsAnalytics = () => {
       let linka = true;
    let awayiconu = String.fromCharCode(100,117,97,108,0);
    let shirto = String.fromCharCode(112,114,102,116,0);
    let launcherp = String.fromCharCode(111,109,112,114,101,115,115,111,114,0);
    let minimizel: Array<any> = [85, 983, 632];
    let iconviewergifM = 0.0;
    let sendi = String.fromCharCode(99,111,108,111,99,97,116,101,100,0);
    let iconorientation6: Array<any> = [535, 47, 47];
    let imagemanagery = String.fromCharCode(114,101,99,101,105,118,101,114,0);
    let middlesoundg = 1.0;
    let libavformatk = 4.0;
    let overi = 1.0;
    let largen = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,0);
    let iconmoreQ = 1.0;
      awayiconu = `${parseInt(`${libavformatk}`) << (Math.min(4, Math.abs(1)))}`;
      iconorientation6.push(sendi.length);
   if (sendi.length > parseInt(`${libavformatk}`)) {
      libavformatk += (parseFloat(`${sendi == String.fromCharCode(74,0) ? sendi.length : parseInt(`${iconviewergifM}`)}`));
   }
   let yellowL = launcherp.length >= 9715649;
   do {
       let libjsim = String.fromCharCode(115,115,101,114,116,0);
         libjsim = `${(libjsim == String.fromCharCode(90,0) ? libjsim.length : libjsim.length)}`;
          let layouta: Map<any, any> = new Map([[String.fromCharCode(121,109,111,100,101,0),245], [String.fromCharCode(99,104,114,111,109,105,117,109,0),945]]);
         libjsim += `${(libjsim == String.fromCharCode(82,0) ? libjsim.length : layouta.size)}`;
      let grayA = libjsim == String.fromCharCode(98,97,98,102,120,117,102,111,105,0);
      do {
         libjsim += `${libjsim.length * 1}`;
         if (grayA) {
            break;
         }
      } while (grayA && (libjsim.includes(libjsim)));
      launcherp = `${parseInt(`${middlesoundg}`)}`;
      if (yellowL) {
         break;
      }
   } while (yellowL && (2.39 <= (libavformatk / (Math.max(2.70, 6)))));
   for (let x = 0; x < 3; x++) {
      imagemanagery += `${((linka ? 1 : 4) * 3)}`;
   }

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDREncryptorEyeopen, {});

       let smallbrightnessR = String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,99,95,57,51,0);
      if (smallbrightnessR.length == 5 || smallbrightnessR != String.fromCharCode(83,0)) {
          let tempnodatagifB = false;
          let reddownarrowG = 1.0;
         smallbrightnessR = `${parseInt(`${reddownarrowG}`)}`;
         tempnodatagifB = (!tempnodatagifB ? !tempnodatagifB : tempnodatagifB);
         reddownarrowG -= (parseFloat(`${(tempnodatagifB ? 2 : 5)}`));
      }
         smallbrightnessR = `${(String.fromCharCode(50,0) == smallbrightnessR ? smallbrightnessR.length : smallbrightnessR.length)}`;
         smallbrightnessR = `${3 + smallbrightnessR.length}`;
      shirto = `${minimizel.length}`;
   for (let x = 0; x < 3; x++) {
      iconviewergifM *= shirto.length >> (Math.min(launcherp.length, 2));
   }
       let service5 = String.fromCharCode(111,114,105,103,105,110,0);
       let langU = 4.0;
         service5 += "1";
          let robotoz = 3;
          let friendsL = 2;
          let inouttargetyellowh = true;
         langU /= Math.max(2 & service5.length, 3);
         robotoz -= friendsL * robotoz;
         friendsL -= robotoz;
         inouttargetyellowh = 22 > robotoz;
         langU += service5.length;
         service5 += `${service5.length}`;
      let splash9 = 9573644.0 >= langU;
      do {
          let goalx = 5;
         langU -= 1 * service5.length;
         goalx &= 3 % (Math.max(8, goalx));
         if (splash9) {
            break;
         }
      } while (splash9 && ((parseInt(`${langU}`) + service5.length) == 5));
         service5 += "3";
      overi += (parseFloat(`${(linka ? 4 : 4)}`));
   if (3 <= awayiconu.length) {
       let redscoreballt = String.fromCharCode(111,110,121,120,100,0);
       let themeF: Array<any> = [154, 542];
       let unselectedU: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,99,101,0),884], [String.fromCharCode(114,101,112,114,101,112,97,114,101,0),492]]);
       let castingK = false;
         redscoreballt += "3";
      let catalogN = 8467353 >= redscoreballt.length;
      do {
         redscoreballt += `${((castingK ? 3 : 1) * redscoreballt.length)}`;
         if (catalogN) {
            break;
         }
      } while (catalogN && (redscoreballt.length >= 2));
         castingK = themeF.length == unselectedU.size;
       let rewindw = String.fromCharCode(104,97,100,100,0);
         redscoreballt += `${themeF.length}`;
      for (let i = 0; i < 1; i++) {
          let matchv: Array<any> = [String.fromCharCode(118,97,110,99,0), String.fromCharCode(115,121,110,116,97,120,0)];
          let reactnativejsA = 3;
          let privacyr = 1;
          let androidc = 1;
         castingK = rewindw.length <= 7;
         matchv = [matchv.length];
         reactnativejsA -= matchv.length << (Math.min(Math.abs(1), 3));
         privacyr %= Math.max(1, 3);
         androidc += reactnativejsA;
      }
      while (rewindw.includes(`${castingK}`)) {
         rewindw += "2";
         break;
      }
         castingK = rewindw == String.fromCharCode(115,0);
      if ((4 - rewindw.length) == 2) {
         themeF.push(redscoreballt.length);
      }
          let googleg = String.fromCharCode(99,97,108,108,111,99,0);
          let stringw = String.fromCharCode(108,105,98,115,97,109,112,108,101,0);
          let chatbotphotoc = true;
         rewindw = `${1 - stringw.length}`;
         googleg += "1";
         stringw += `${((chatbotphotoc ? 5 : 2) % 3)}`;
         castingK = !castingK;
         themeF = [(String.fromCharCode(88,0) == redscoreballt ? redscoreballt.length : (castingK ? 4 : 3))];
      shirto += `${imagemanagery.length >> (Math.min(Math.abs(2), 1))}`;
   }
       let javaM = 5.0;
       let actionN = String.fromCharCode(114,97,100,102,103,0);
         actionN += `${(actionN == String.fromCharCode(71,0) ? parseInt(`${javaM}`) : actionN.length)}`;
         javaM -= 2 + actionN.length;
      let reddownarrow8 = 8703118.0 <= javaM;
      do {
         javaM /= Math.max(3, actionN.length);
         if (reddownarrow8) {
            break;
         }
      } while (reddownarrow8 && (4.66 < (javaM / 5.7) && 5 < (5 / (Math.max(10, parseInt(`${javaM}`))))));
          let iconeyeU = 1;
         actionN += `${(String.fromCharCode(115,0) == actionN ? actionN.length : iconeyeU)}`;
      if ((javaM - 1.56) <= 4.70) {
         actionN = "1";
      }
         actionN += `${(actionN == String.fromCharCode(105,0) ? actionN.length : parseInt(`${javaM}`))}`;
      minimizel = [parseInt(`${overi}`) / (Math.max(shirto.length, 8))];
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRHeart,
            params: {
                desc_1: 'pay',
            }
        });

      minimizel = [awayiconu.length >> (Math.min(Math.abs(3), 4))];
   let appsp = linka ? !linka : linka;
   do {
      linka = 6.73 >= libavformatk;
      if (appsp) {
         break;
      }
   } while ((linka) && appsp);
      launcherp = `${parseInt(`${middlesoundg}`) ^ launcherp.length}`;
   let assistG = sendi.length <= 5066984;
   do {
      sendi = `${1 / (Math.max(4, parseInt(`${iconviewergifM}`)))}`;
      if (assistG) {
         break;
      }
   } while ((sendi.length > awayiconu.length) && assistG);
      shirto += "1";

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDREncryptorEyeopen);
    }

    static userCenterVipInviteViewsAnalytics = () => {
       let emojihearth = false;
    let episodeX = 4.0;
    let qaagi = 2.0;
    let common7 = 0.0;
    let yellown = String.fromCharCode(114,97,115,116,101,114,105,122,97,116,105,111,110,0);
    let others = String.fromCharCode(100,97,105,0);
    let weatherr = 2;
    let exampleimageb: Map<any, any> = new Map([[String.fromCharCode(108,105,98,119,101,98,112,0),String.fromCharCode(99,111,111,114,100,0)], [String.fromCharCode(119,101,98,118,105,101,119,0),String.fromCharCode(99,97,118,108,99,0)]]);
    let goallogoa = 4.0;
    let countdown4 = String.fromCharCode(109,111,100,101,108,0);
    let dycreatorc = false;
       let t_unlock0 = String.fromCharCode(97,116,116,114,98,117,116,101,0);
       let nterstitialQ = String.fromCharCode(117,110,97,108,105,103,110,101,100,0);
          let data1 = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,0);
         nterstitialQ += `${nterstitialQ.length ^ 1}`;
         data1 += `${data1.length}`;
         t_unlock0 = `${nterstitialQ.length % (Math.max(t_unlock0.length, 1))}`;
       let largesoundJ = 2;
       let phoneshareI = 3;
          let reminderI = 3.0;
         nterstitialQ = `${(t_unlock0 == String.fromCharCode(84,0) ? parseInt(`${reminderI}`) : t_unlock0.length)}`;
         t_unlock0 = `${largesoundJ}`;
       let countdownN: Map<any, any> = new Map([[String.fromCharCode(116,97,112,112,105,110,103,0),String.fromCharCode(114,101,102,99,111,117,110,116,0)], [String.fromCharCode(97,119,97,121,0),String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,0)]]);
       let icontransferclub9: Map<any, any> = new Map([[String.fromCharCode(116,111,117,116,0),904], [String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,0),618]]);
      goallogoa *= parseFloat(`${parseInt(`${episodeX}`)}`);
       let gpayS = String.fromCharCode(112,111,108,121,0);
      let libfabricjniR = gpayS.length <= 9898802;
      do {
         gpayS = `${gpayS.length}`;
         if (libfabricjniR) {
            break;
         }
      } while ((1 >= gpayS.length) && libfabricjniR);
      let codegenR = 6982221 <= gpayS.length;
      do {
         gpayS = `${gpayS.length * gpayS.length}`;
         if (codegenR) {
            break;
         }
      } while ((gpayS == gpayS) && codegenR);
         gpayS += `${1 + gpayS.length}`;
      yellown = `${(String.fromCharCode(54,0) == yellown ? parseInt(`${common7}`) : yellown.length)}`;
      episodeX += 2 * exampleimageb.size;
   let iconarrowrightwhite3 = episodeX <= 7967297.0;
   do {
      episodeX -= (others == String.fromCharCode(81,0) ? others.length : parseInt(`${goallogoa}`));
      if (iconarrowrightwhite3) {
         break;
      }
   } while ((common7 > episodeX) && iconarrowrightwhite3);

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRActionGesture, {});

      goallogoa += parseFloat(`${others.length}`);
      qaagi += parseFloat(`${weatherr}`);
   let tempnodataY = qaagi >= 7120541.0;
   do {
      qaagi -= parseFloat(`${2 + exampleimageb.size}`);
      if (tempnodataY) {
         break;
      }
   } while ((5.27 == (episodeX / 3)) && tempnodataY);
      qaagi *= parseFloat(`${parseInt(`${episodeX}`)}`);
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRHeart,
            params: {
                desc_1: 'invite',
            }
        });

      common7 /= Math.max(parseInt(`${episodeX}`) + parseInt(`${qaagi}`), 1);
   for (let s = 0; s < 1; s++) {
      yellown += `${parseInt(`${common7}`)}`;
   }
   while (4 == (1 ^ exampleimageb.size)) {
      exampleimageb.set(yellown, yellown.length * parseInt(`${qaagi}`));
      break;
   }
   if (1.36 >= (parseFloat(`${weatherr}`) / (Math.max(goallogoa, 4))) && 5.39 >= (goallogoa / 1.36)) {
      goallogoa *= parseFloat(`${2}`);
   }

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRActionGesture);
    }


    
    static searchResultViewsAnalytics = () => {
       let textlayoutmanagerS = 5;
    let dependencyt = 1;
    let icondefaultthumbnaill = 1.0;
    let sentryJ = String.fromCharCode(99,102,102,116,105,0);
    let bellreminderT = String.fromCharCode(115,104,105,102,116,115,0);
    let applicationo = false;
    let baiduadsj = String.fromCharCode(99,97,112,97,98,105,108,105,116,121,0);
    let halffieldimageu = 2.0;
    let statsnomoredataE = 2;
      halffieldimageu -= (parseFloat(`${1 / (Math.max(7, (applicationo ? 1 : 2)))}`));
   while (4 <= (dependencyt / (Math.max(3, 7)))) {
      dependencyt &= 3 | dependencyt;
      break;
   }
   let yellowtoredH = String.fromCharCode(115,98,49,0) == baiduadsj;
   do {
       let configurei = 1.0;
       let register_k8A = String.fromCharCode(102,105,102,97,0);
       let circleH: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,115,0),false ], [String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,0),false ]]);
       let static_tbh = false;
       let libmapbufferjniG: Map<any, any> = new Map([[String.fromCharCode(117,105,111,109,111,118,101,0),680], [String.fromCharCode(98,105,103,100,105,97,0),175], [String.fromCharCode(100,101,110,111,105,115,101,102,105,108,116,101,114,0),967]]);
         configurei /= Math.max(parseFloat(`${libmapbufferjniG.size}`), 1);
         static_tbh = register_k8A.length >= 70;
          let videobufferloadingI = true;
         circleH.set(`${videobufferloadingI}`, 1);
         circleH = new Map([[`${libmapbufferjniG.size}`, (libmapbufferjniG.size | (static_tbh ? 3 : 5))]]);
      if (1 == (5 << (Math.min(2, Math.abs(circleH.size)))) && !static_tbh) {
         static_tbh = 35.3 == configurei;
      }
          let mailW = String.fromCharCode(99,101,110,116,114,97,108,105,116,121,0);
          let resendr = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,0);
          let filterE: Array<any> = [655, 554];
         register_k8A += `${2 * libmapbufferjniG.size}`;
         mailW += `${1 / (Math.max(5, filterE.length))}`;
         resendr = "1";
         filterE.push(mailW.length);
      let libjsiw = circleH.size >= 9161284;
      do {
          let friendsg: Array<any> = [180, 454, 937];
          let iconuserK = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,0);
          let infoS = String.fromCharCode(111,109,109,111,110,0);
         circleH = new Map([[`${friendsg.length}`, parseInt(`${configurei}`)]]);
         friendsg.push((String.fromCharCode(98,0) == iconuserK ? iconuserK.length : infoS.length));
         infoS += `${2 & infoS.length}`;
         if (libjsiw) {
            break;
         }
      } while (libjsiw && (2 < (circleH.size >> (Math.min(Math.abs(4), 1)))));
          let pathn = false;
          let reactnavigationR = 5.0;
         libmapbufferjniG = new Map([[`${libmapbufferjniG.size}`, libmapbufferjniG.size]]);
         pathn = !pathn;
         reactnavigationR -= parseFloat(`${3 - parseInt(`${reactnavigationR}`)}`);
      for (let n = 0; n < 1; n++) {
         configurei += parseFloat(`${parseInt(`${configurei}`) * 3}`);
      }
          let targetv = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,108,121,0);
          let moreP = false;
          let iconsettingq = String.fromCharCode(104,105,103,104,112,111,114,116,0);
         static_tbh = libmapbufferjniG.size == 48 && 48 == targetv.length;
         targetv = `${((moreP ? 1 : 2) >> (Math.min(Math.abs(2), 1)))}`;
         moreP = iconsettingq.length <= 56;
         iconsettingq = "2";
          let zhuboe = String.fromCharCode(118,97,114,105,97,116,105,111,110,0);
          let penaltyV = 1.0;
         register_k8A = `${(zhuboe == String.fromCharCode(85,0) ? libmapbufferjniG.size : zhuboe.length)}`;
         penaltyV *= parseFloat(`${parseInt(`${penaltyV}`)}`);
       let drags = String.fromCharCode(116,104,101,109,101,0);
      for (let h = 0; h < 2; h++) {
         configurei -= parseFloat(`${3}`);
      }
      if (4 > drags.length) {
         drags += `${circleH.size ^ drags.length}`;
      }
         configurei += parseFloat(`${1}`);
      baiduadsj += "3";
      if (yellowtoredH) {
         break;
      }
   } while (yellowtoredH && ((parseInt(`${icondefaultthumbnaill}`) * baiduadsj.length) >= 5));
      applicationo = bellreminderT == sentryJ;
   if (1 >= (1 & bellreminderT.length) || (dependencyt & 1) >= 5) {
      bellreminderT = `${baiduadsj.length}`;
   }
      statsnomoredataE >>= Math.min(3, Math.abs(3));

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRDefaultfootballbg, {});

       let lefth: Array<any> = [628, 496];
       let libruntimeexecutord = false;
       let history4: Array<any> = [String.fromCharCode(97,114,109,116,104,95,49,95,50,57,0), String.fromCharCode(117,110,105,120,0), String.fromCharCode(109,111,100,105,102,105,101,100,0)];
         libruntimeexecutord = history4.length == 25;
         libruntimeexecutord = ((history4.length >> (Math.min(5, Math.abs((!libruntimeexecutord ? 77 : history4.length))))) > 77);
         lefth = [lefth.length - 2];
      if (3 == history4.length) {
          let videoS = String.fromCharCode(109,97,103,121,0);
          let whitetickv = true;
         libruntimeexecutord = !libruntimeexecutord;
         videoS += `${((whitetickv ? 4 : 5))}`;
         whitetickv = !whitetickv;
      }
         history4.push(history4.length);
         libruntimeexecutord = history4.length >= 68 && 68 >= lefth.length;
      let binddatasu = history4.length <= 6677069;
      do {
         history4 = [(1 + (libruntimeexecutord ? 1 : 2))];
         if (binddatasu) {
            break;
         }
      } while (binddatasu && (libruntimeexecutord));
      if (2 == (history4.length % (Math.max(4, 7))) && 4 == (history4.length % (Math.max(lefth.length, 8)))) {
         history4 = [2];
      }
          let i_position6 = String.fromCharCode(111,114,105,103,105,110,97,108,0);
         libruntimeexecutord = 95 >= i_position6.length;
      textlayoutmanagerS %= Math.max(4, ((applicationo ? 2 : 5) % 1));
      icondefaultthumbnaill += sentryJ.length - baiduadsj.length;
   let right6 = statsnomoredataE >= 8219511;
   do {
       let dangerH = 0.0;
       let audienceo = String.fromCharCode(98,101,110,99,104,115,0);
       let privatechatbgb = 4;
       let backl = String.fromCharCode(115,101,110,100,97,108,108,0);
       let private_uX = 5.0;
       let tempnodatad: Array<any> = [468, 16, 843];
       let trashl: Array<any> = [814, 862];
         backl += "3";
       let constantsY: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,101,100,0),true ], [String.fromCharCode(109,97,106,0),false ], [String.fromCharCode(108,111,99,111,0),true ]]);
          let tickk: Map<any, any> = new Map([[String.fromCharCode(108,117,109,97,0),575], [String.fromCharCode(112,111,114,116,97,105,116,0),591]]);
          let forwardh = 5.0;
          let indexe: Array<any> = [967, 690];
         backl += `${privatechatbgb}`;
         tickk = new Map([[`${indexe.length}`, parseInt(`${forwardh}`) >> (Math.min(2, Math.abs(2)))]]);
         forwardh += tickk.size | 2;
         indexe = [parseInt(`${forwardh}`)];
       let datat = String.fromCharCode(100,101,110,105,97,108,0);
      let schedulerv = private_uX <= 8337702.0;
      do {
         private_uX += parseFloat(`${tempnodatad.length}`);
         if (schedulerv) {
            break;
         }
      } while (schedulerv && (5.38 >= (private_uX * parseFloat(`${audienceo.length}`)) && (5.38 * private_uX) >= 1.13));
       let icondefaultthumbnailA = String.fromCharCode(115,116,100,101,114,114,0);
       let distp = String.fromCharCode(116,104,114,111,117,103,104,112,117,116,0);
         icondefaultthumbnailA = `${backl.length / (Math.max(icondefaultthumbnailA.length, 7))}`;
       let brightnessh = String.fromCharCode(121,113,117,97,110,116,0);
         distp = `${backl.length - icondefaultthumbnailA.length}`;
       let debugh = 2.0;
         constantsY = new Map([[`${constantsY.size}`, 3]]);
         icondefaultthumbnailA = `${brightnessh.length}`;
         backl = `${parseInt(`${dangerH}`)}`;
      let banner8 = brightnessh.length >= 9534706;
      do {
         brightnessh += `${(datat == String.fromCharCode(50,0) ? constantsY.size : datat.length)}`;
         if (banner8) {
            break;
         }
      } while ((brightnessh.endsWith(`${debugh}`)) && banner8);
      statsnomoredataE /= Math.max(4, 3 << (Math.min(2, backl.length)));
      if (right6) {
         break;
      }
   } while (right6 && (4 > (statsnomoredataE & 2) || (statsnomoredataE & baiduadsj.length) > 2));
   for (let o = 0; o < 1; o++) {
      statsnomoredataE ^= 2 - sentryJ.length;
   }
      sentryJ += `${parseInt(`${icondefaultthumbnaill}`) + 1}`;
   while (5.59 < icondefaultthumbnaill) {
      sentryJ += `${baiduadsj.length}`;
      break;
   }
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRRobotoCancel,
        });

      halffieldimageu /= Math.max(4, (parseFloat(`${String.fromCharCode(84,0) == bellreminderT ? bellreminderT.length : (applicationo ? 4 : 3)}`)));
   while (baiduadsj != String.fromCharCode(68,0)) {
      sentryJ += `${dependencyt & 2}`;
      break;
   }
      icondefaultthumbnaill /= Math.max(4, (sentryJ == String.fromCharCode(119,0) ? parseInt(`${halffieldimageu}`) : sentryJ.length));
   let yellowcirclebgG = applicationo ? !applicationo : applicationo;
   do {
      applicationo = dependencyt >= 43 || bellreminderT.length >= 43;
      if (yellowcirclebgG) {
         break;
      }
   } while ((applicationo) && yellowcirclebgG);
   for (let d = 0; d < 1; d++) {
      sentryJ += `${baiduadsj.length >> (Math.min(2, Math.abs(statsnomoredataE)))}`;
   }
   while ((statsnomoredataE ^ 1) == 5 && (halffieldimageu * 4.24) == 1.87) {
      halffieldimageu -= parseFloat(`${sentryJ.length}`);
      break;
   }

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRDefaultfootballbg);
    }

    static searchResultClicksAnalytics = () => {
       let left4 = String.fromCharCode(116,114,101,101,99,111,100,101,114,0);
    let nativeex2 = 1.0;
    let sentry0 = 0.0;
    let nativeexT = String.fromCharCode(112,116,111,110,0);
    let data4 = String.fromCharCode(118,115,110,112,114,105,110,116,102,0);
    let nativeB = String.fromCharCode(109,111,100,101,114,110,0);
    let crowng: Map<any, any> = new Map([[String.fromCharCode(99,97,116,101,103,111,114,105,101,115,0),String.fromCharCode(109,97,107,101,102,105,108,101,0)], [String.fromCharCode(97,97,117,100,105,111,0),String.fromCharCode(113,115,99,97,108,101,113,108,111,103,0)], [String.fromCharCode(105,100,99,116,120,0),String.fromCharCode(115,104,97,112,101,115,0)]]);
    let castingb = String.fromCharCode(111,111,108,98,97,114,0);
    let predictionactivez: Array<any> = [939, 290, 735];
   let carouself = 5179091 <= crowng.size;
   do {
      crowng.set(nativeB, 3);
      if (carouself) {
         break;
      }
   } while (carouself && (Array.from(crowng.values()).includes(nativeex2)));
       let reddownarrow5: Array<any> = [421, 495, 862];
      let iconsharefriendsY = 9365147 <= reddownarrow5.length;
      do {
          let downloadN = 5;
          let profileinactivez = 3.0;
          let uimanagerD = 3.0;
         reddownarrow5.push(parseInt(`${uimanagerD}`));
         downloadN %= Math.max(5, 2);
         profileinactivez += 3 + parseInt(`${profileinactivez}`);
         uimanagerD -= parseFloat(`${3 - downloadN}`);
         if (iconsharefriendsY) {
            break;
         }
      } while ((5 >= (1 ^ reddownarrow5.length)) && iconsharefriendsY);
       let friendsg = String.fromCharCode(105,100,115,0);
      if ((reddownarrow5.length & 5) == 2 || 5 == (friendsg.length & reddownarrow5.length)) {
         friendsg += `${reddownarrow5.length}`;
      }
      nativeexT = "1";
   for (let j = 0; j < 1; j++) {
       let libswscaleI = String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,0);
          let subout9 = String.fromCharCode(102,111,99,117,115,97,98,108,101,0);
          let scorei = String.fromCharCode(121,109,105,110,112,117,116,0);
         libswscaleI += `${(String.fromCharCode(118,0) == libswscaleI ? libswscaleI.length : scorei.length)}`;
         subout9 += `${subout9.length + subout9.length}`;
         scorei = `${3 + subout9.length}`;
          let libavcodecC = 3.0;
         libswscaleI += `${parseInt(`${libavcodecC}`)}`;
      while (libswscaleI == String.fromCharCode(102,0)) {
         libswscaleI += `${libswscaleI.length}`;
         break;
      }
      crowng.set(nativeB, 1 >> (Math.min(1, left4.length)));
   }
   if (nativeex2 >= parseFloat(`${crowng.size}`)) {
       let update_pv0: Array<any> = [String.fromCharCode(115,101,97,114,99,104,101,100,0), String.fromCharCode(97,118,111,112,116,105,111,110,115,0)];
       let attributedstringB: Array<any> = [264, 719, 997];
       let questU: Array<any> = [93, 554];
       let phonesharep = String.fromCharCode(100,101,101,112,108,105,110,107,0);
       let infoX = String.fromCharCode(97,99,116,111,114,115,0);
          let smallsoundi = String.fromCharCode(109,115,118,105,100,101,111,0);
          let iconsubssuccessU = 2;
          let penaltyshootP: Array<any> = [928, 903, 993];
         questU = [attributedstringB.length];
         smallsoundi = `${iconsubssuccessU}`;
         iconsubssuccessU /= Math.max(5, 3 << (Math.min(2, smallsoundi.length)));
         penaltyshootP = [penaltyshootP.length << (Math.min(3, Math.abs(iconsubssuccessU)))];
         phonesharep += `${phonesharep.length % (Math.max(infoX.length, 7))}`;
      if (phonesharep.length < 3) {
          let signinupo = String.fromCharCode(114,101,116,97,105,110,0);
          let encryptorl = String.fromCharCode(97,114,116,105,99,108,101,115,0);
          let liveshareQ = 0.0;
          let refreshborderlessw = 0.0;
         questU.push(1 | encryptorl.length);
         signinupo += `${3 * parseInt(`${liveshareQ}`)}`;
         encryptorl = `${parseInt(`${liveshareQ}`) << (Math.min(4, Math.abs(parseInt(`${refreshborderlessw}`))))}`;
         refreshborderlessw += signinupo.length >> (Math.min(1, Math.abs(parseInt(`${liveshareQ}`))));
      }
         infoX = `${2 - phonesharep.length}`;
      let leagueT = infoX == String.fromCharCode(55,56,54,97,120,0);
      do {
         infoX += `${questU.length}`;
         if (leagueT) {
            break;
         }
      } while ((infoX.length <= 2 || phonesharep != String.fromCharCode(102,0)) && leagueT);
         phonesharep += `${questU.length}`;
      if (infoX.includes(`${questU.length}`)) {
          let baiduo: Array<any> = [20, 715];
          let libturbomodulejsijniv = String.fromCharCode(103,114,97,121,115,99,97,108,101,0);
          let penaltymatchicona: Map<any, any> = new Map([[String.fromCharCode(114,101,100,114,97,119,0),971], [String.fromCharCode(102,97,107,101,0),489]]);
          let basketballmatchdetailbgT = String.fromCharCode(100,101,99,111,100,101,114,0);
         infoX += "1";
         baiduo = [(libturbomodulejsijniv == String.fromCharCode(65,0) ? penaltymatchicona.size : libturbomodulejsijniv.length)];
         penaltymatchicona.set(`${libturbomodulejsijniv}`, penaltymatchicona.size << (Math.min(libturbomodulejsijniv.length, 3)));
         basketballmatchdetailbgT = `${libturbomodulejsijniv.length / 2}`;
      }
          let zhuboC = true;
          let nterstitialV: Map<any, any> = new Map([[String.fromCharCode(107,101,121,0),7], [String.fromCharCode(101,110,117,109,101,114,97,116,101,0),851]]);
          let logoutC = 0.0;
         phonesharep = `${2 >> (Math.min(3, Math.abs(nterstitialV.size)))}`;
         zhuboC = 43.25 <= logoutC || 43.25 <= logoutC;
         nterstitialV = new Map([[`${logoutC}`, parseInt(`${logoutC}`)]]);
         questU.push(update_pv0.length);
         phonesharep = `${update_pv0.length % 1}`;
      for (let f = 0; f < 3; f++) {
         questU = [attributedstringB.length];
      }
      let privilegeQ = update_pv0.length >= 9680796;
      do {
          let defaultteamv = false;
          let iconcalendarB = String.fromCharCode(114,101,116,117,114,110,0);
          let darkT = String.fromCharCode(97,110,103,117,108,97,114,0);
          let zoome = String.fromCharCode(111,117,116,111,117,116,0);
          let eighteenI = 0.0;
         update_pv0.push(3 & zoome.length);
         defaultteamv = !defaultteamv;
         iconcalendarB += `${parseInt(`${eighteenI}`) * iconcalendarB.length}`;
         darkT += `${1 ^ darkT.length}`;
         zoome = `${(3 * (defaultteamv ? 3 : 2))}`;
         eighteenI += (parseFloat(`${iconcalendarB == String.fromCharCode(111,0) ? iconcalendarB.length : (defaultteamv ? 4 : 5)}`));
         if (privilegeQ) {
            break;
         }
      } while ((update_pv0.length <= phonesharep.length) && privilegeQ);
          let cancel6 = 5;
          let suggestion1 = 5.0;
          let moduleZ = 1.0;
         phonesharep = `${parseInt(`${suggestion1}`)}`;
         cancel6 %= Math.max(parseInt(`${moduleZ}`) - 1, 2);
         suggestion1 /= Math.max(2, parseFloat(`${parseInt(`${moduleZ}`) ^ 2}`));
      let updatess = attributedstringB.length <= 8018210;
      do {
          let sharewhiteQ: Array<any> = [687, 182];
          let wifiroutern = 3;
         attributedstringB.push(update_pv0.length);
         sharewhiteQ.push(wifiroutern / (Math.max(sharewhiteQ.length, 5)));
         wifiroutern -= 3;
         if (updatess) {
            break;
         }
      } while ((2 == update_pv0.length) && updatess);
      for (let i = 0; i < 2; i++) {
         questU.push((infoX == String.fromCharCode(76,0) ? attributedstringB.length : infoX.length));
      }
      nativeex2 -= parseFloat(`${parseInt(`${nativeex2}`) % (Math.max(6, left4.length))}`);
   }
   while (crowng.get(`${sentry0}`) == null) {
      crowng = new Map([[`${crowng.size}`, parseInt(`${sentry0}`) ^ crowng.size]]);
      break;
   }

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRTurndown, {});

      left4 = `${nativeB.length}`;
   let sort1 = 9342601 <= nativeexT.length;
   do {
      nativeexT += `${parseInt(`${nativeex2}`) - 1}`;
      if (sort1) {
         break;
      }
   } while ((parseInt(`${nativeex2}`) == nativeexT.length) && sort1);
   let mbbannerH = nativeexT.length <= 7807257;
   do {
       let collectionR = 5;
       let flagQ = 2.0;
       let turnn = String.fromCharCode(116,101,99,104,110,111,108,111,103,121,0);
       let gemfileQ = String.fromCharCode(97,117,116,104,111,114,115,0);
       let reactnavigationd: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,105,98,0),String.fromCharCode(114,101,99,116,97,110,103,108,101,115,0)], [String.fromCharCode(114,109,115,105,112,114,0),String.fromCharCode(117,110,108,105,110,107,0)]]);
          let push4 = 1.0;
         collectionR <<= Math.min(4, Math.abs(collectionR & parseInt(`${flagQ}`)));
         push4 /= Math.max(4, parseFloat(`${parseInt(`${push4}`)}`));
       let feedbackj = 1.0;
       let send6 = 4.0;
      for (let x = 0; x < 1; x++) {
         gemfileQ += `${reactnavigationd.size}`;
      }
      if (Array.from(reactnavigationd.keys()).includes(`${feedbackj}`)) {
          let settinga = 1.0;
         reactnavigationd = new Map([[`${send6}`, parseInt(`${send6}`)]]);
         settinga /= Math.max(1, 2 | parseInt(`${settinga}`));
      }
      if (Array.from(reactnavigationd.values()).includes(send6)) {
         send6 -= parseFloat(`${1}`);
      }
      let componentregistryS = flagQ >= 8765551.0;
      do {
         flagQ /= Math.max(parseFloat(`${gemfileQ.length}`), 1);
         if (componentregistryS) {
            break;
         }
      } while (componentregistryS && (turnn.length < 5));
      if ((feedbackj + 4.63) == 2.96 || 1.84 == (feedbackj + 4.63)) {
         send6 += parseFloat(`${2 | collectionR}`);
      }
         turnn += `${parseInt(`${feedbackj}`) & 3}`;
         flagQ /= Math.max((parseFloat(`${String.fromCharCode(75,0) == turnn ? parseInt(`${send6}`) : turnn.length}`)), 3);
          let fullscreenmax_ = 2;
          let register_1wV = 3.0;
         feedbackj /= Math.max(5, (parseFloat(`${String.fromCharCode(108,0) == turnn ? turnn.length : parseInt(`${register_1wV}`)}`)));
         fullscreenmax_ -= fullscreenmax_;
         register_1wV -= fullscreenmax_ - fullscreenmax_;
      while ((send6 * 1.59) <= 5.35) {
          let roundb = String.fromCharCode(99,111,110,99,101,97,108,101,100,0);
          let anythinkw = false;
          let humiditym = String.fromCharCode(97,116,111,110,0);
          let smallsoundW = true;
          let borderlessX: Map<any, any> = new Map([[String.fromCharCode(118,105,115,105,98,108,101,0),String.fromCharCode(100,101,113,117,97,110,116,0)], [String.fromCharCode(113,117,97,110,116,105,122,101,0),String.fromCharCode(121,117,118,112,99,0)]]);
         send6 += (parseFloat(`${(smallsoundW ? 5 : 1) + 2}`));
         roundb = `${humiditym.length + roundb.length}`;
         anythinkw = borderlessX.size <= 93 || humiditym.length <= 93;
         smallsoundW = null != borderlessX.get(`${anythinkw}`);
         break;
      }
       let stylev = String.fromCharCode(97,115,104,105,110,103,0);
       let logouta = String.fromCharCode(103,111,101,114,108,105,0);
       let predictionactivea = String.fromCharCode(116,114,105,112,108,101,116,0);
         turnn = "2";
         turnn += `${turnn.length}`;
      nativeexT = `${(gemfileQ == String.fromCharCode(56,0) ? gemfileQ.length : parseInt(`${sentry0}`))}`;
      if (mbbannerH) {
         break;
      }
   } while (mbbannerH && (1 > nativeexT.length));
      nativeex2 -= parseFloat(`${left4.length / 2}`);
   for (let i = 0; i < 2; i++) {
      crowng = new Map([[`${crowng.size}`, crowng.size]]);
   }
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRRobotoCancel,
        });

       let castg = 1.0;
       let loginp = String.fromCharCode(105,110,116,101,114,114,117,112,116,0);
         loginp = `${loginp.length - parseInt(`${castg}`)}`;
         loginp += `${loginp.length}`;
      let build2 = 5091119 <= loginp.length;
      do {
         loginp += `${parseInt(`${castg}`) | loginp.length}`;
         if (build2) {
            break;
         }
      } while (build2 && (loginp.includes(`${castg}`)));
         loginp += `${parseInt(`${castg}`)}`;
      let arrowupW = 9670395.0 >= castg;
      do {
         castg *= loginp.length;
         if (arrowupW) {
            break;
         }
      } while (((5 * loginp.length) >= 4) && arrowupW);
      if ((loginp.length << (Math.min(Math.abs(2), 4))) < 3 || (loginp.length + parseInt(`${castg}`)) < 2) {
         castg -= 2 & loginp.length;
      }
      nativeexT += `${nativeexT.length}`;
      sentry0 -= parseFloat(`${1}`);
       let cnewarchdefaultsw = String.fromCharCode(111,112,116,97,114,103,0);
       let malaysiaD = String.fromCharCode(98,105,116,119,114,105,116,101,114,0);
       let coret = 4;
         coret %= Math.max(1, malaysiaD.length);
      let stringsv = coret >= 5832077;
      do {
         coret &= malaysiaD.length * 2;
         if (stringsv) {
            break;
         }
      } while (((coret & malaysiaD.length) > 4) && stringsv);
         cnewarchdefaultsw += "1";
         malaysiaD += `${cnewarchdefaultsw.length | 1}`;
      while (malaysiaD != String.fromCharCode(104,0)) {
         cnewarchdefaultsw += "3";
         break;
      }
          let roboto5 = String.fromCharCode(110,105,103,104,116,115,104,111,116,0);
          let backicong = String.fromCharCode(115,104,111,119,105,110,103,0);
          let rewardvideon = 4.0;
         coret %= Math.max(1, (String.fromCharCode(56,0) == cnewarchdefaultsw ? coret : cnewarchdefaultsw.length));
         roboto5 = `${roboto5.length}`;
         backicong += "3";
         rewardvideon += parseFloat(`${parseInt(`${rewardvideon}`)}`);
       let iconsharek = false;
       let baseq = true;
      for (let l = 0; l < 1; l++) {
         baseq = !iconsharek;
      }
         baseq = 55 < cnewarchdefaultsw.length;
      nativeB = `${parseInt(`${sentry0}`) - 2}`;
   let mbnativez = String.fromCharCode(98,97,99,103,49,48,49,95,107,0) == data4;
   do {
       let tempnodataO = String.fromCharCode(100,105,115,112,108,97,121,101,100,0);
       let eventt = 2.0;
      let classest = tempnodataO == String.fromCharCode(102,50,119,51,110,119,0);
      do {
          let plashD = 1.0;
          let iconnewchatd = 1;
         tempnodataO += `${iconnewchatd}`;
         plashD *= 1;
         iconnewchatd <<= Math.min(3, Math.abs(1));
         if (classest) {
            break;
         }
      } while (classest && (2 == tempnodataO.length));
         eventt /= Math.max(parseFloat(`${2}`), 3);
       let javal: Array<any> = [368, 508, 517];
       let tumbnail6: Array<any> = [36, 415, 625];
      if (tumbnail6.length > tempnodataO.length) {
         tumbnail6 = [(tempnodataO == String.fromCharCode(119,0) ? javal.length : tempnodataO.length)];
      }
       let signinupW = String.fromCharCode(114,101,115,116,114,105,99,116,0);
       let typingloadingL = String.fromCharCode(102,108,105,99,0);
      let yellowredcardL = 7553567 <= javal.length;
      do {
          let reactnativeratings4 = String.fromCharCode(102,108,97,116,116,101,110,0);
          let pageK: Array<any> = [874, 407];
          let spinnerY: Array<any> = [511, 462, 764];
         javal.push(2);
         reactnativeratings4 = `${spinnerY.length << (Math.min(1, pageK.length))}`;
         pageK.push(pageK.length);
         spinnerY = [2];
         if (yellowredcardL) {
            break;
         }
      } while ((!tumbnail6.includes(javal.length)) && yellowredcardL);
      data4 += `${parseInt(`${sentry0}`)}`;
      if (mbnativez) {
         break;
      }
   } while ((data4.length >= nativeexT.length) && mbnativez);
      nativeex2 *= (parseFloat(`${String.fromCharCode(110,0) == castingb ? castingb.length : crowng.size}`));

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRTurndown);
    }

    static searchKeywordAnalytics = (keyword: string) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRSharedWeibo, {
            'keyword': keyword,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRIconsharefriendsStation,
            params: {
                desc_1: keyword,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRSharedWeibo);
    }


    
    static catalogViewsAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRTurndownZ, {
            'category_id': category_id,
            'category_name': category_name,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRBallProfileinactive,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRTurndownZ);
    }

    static catalogClicksAnalytics = ({ category_id, category_name }: { category_id: string, category_name: string }) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRDefaultpredictionprofileTyping, {
            'category_id': category_id,
            'category_name': category_name,
        });
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRBallProfileinactive,
            params: {
                desc_1: 'category.id:' + category_id,
                desc_2: 'category.name:' + category_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRDefaultpredictionprofileTyping);
    }


    
    static playsViewsAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = GDRLibbuffer.GDRCarousel;

        if (isXmode) {
            eventId = GDRLibbuffer.GDRQuest;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: isXmode ? GDRBasketballtrophyIcondefaultthumbnail.GDRZhuboTerms : GDRBasketballtrophyIcondefaultthumbnail.GDREncryptorYellowvideolive,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        let eventId: string = GDRLibbuffer.GDRField;

        if (isXmode) {
            eventId = GDRLibbuffer.GDRPrediction;
        }

        AnalyticsUtil.onEventWithMap(eventId, {
            'vod_id': vod_id,
            'vod_name': vod_name,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: isXmode ? GDRBasketballtrophyIcondefaultthumbnail.GDRDropdownMapbuffer : GDRBasketballtrophyIcondefaultthumbnail.GDRWhitesmalltick,
            params: {
                desc_1: 'vod.id:' + vod_id,
                desc_2: 'vod.name:' + vod_name,
            }
        });

        if (this.showLog) console.log('trigger event id:', eventId);
    }

    static playsShareClicksAnalytics = () => {
       let embedd = 4.0;
    let tumbnailg = 2.0;
    let giflivestreamingT: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,99,98,0),false ], [String.fromCharCode(115,117,110,112,111,115,0),true ]]);
    let package_bvH = String.fromCharCode(99,97,110,111,112,117,115,0);
    let login2 = 4;
    let disconnectedlogok = 5.0;
    let humidity1 = String.fromCharCode(98,114,111,107,101,110,0);
    let suboutv = 3;
    let icondownimg1 = 4.0;
    let typingo = 5;
    let airbnbstarx = 1.0;
    let commentu: Array<any> = [133, 378, 706];
    let brightnessF = String.fromCharCode(99,111,108,108,101,99,116,111,114,0);
    let commonK = String.fromCharCode(115,104,111,114,116,99,117,116,0);
    let runtimet: Array<any> = [645, 891, 416];
    let bing1: Array<any> = [144, 395];
      embedd += parseFloat(`${suboutv / 3}`);
   let predictionL = humidity1.length >= 6491867;
   do {
      humidity1 = `${login2 % 1}`;
      if (predictionL) {
         break;
      }
   } while (((humidity1.length * 5) == 5 && (suboutv * 5) == 4) && predictionL);
   while (!Array.from(giflivestreamingT.values()).includes(login2)) {
       let singleA = String.fromCharCode(116,121,112,101,110,97,109,101,0);
       let qaagr = 2.0;
       let minivodA = 0;
       let shared4 = 0;
       let playlistQ: Array<any> = [String.fromCharCode(100,105,115,116,111,114,116,105,111,110,0), String.fromCharCode(112,117,116,115,0), String.fromCharCode(119,101,98,109,100,101,99,0)];
      if (playlistQ.length > parseInt(`${qaagr}`)) {
         qaagr *= parseFloat(`${minivodA >> (Math.min(Math.abs(3), 4))}`);
      }
          let gifgoalbgi = String.fromCharCode(110,97,114,114,111,119,0);
          let launchj = 3.0;
         qaagr *= parseFloat(`${2 - playlistQ.length}`);
         gifgoalbgi = `${1 & parseInt(`${launchj}`)}`;
         launchj -= (parseFloat(`${String.fromCharCode(102,0) == gifgoalbgi ? gifgoalbgi.length : parseInt(`${launchj}`)}`));
         singleA = `${parseInt(`${qaagr}`)}`;
      let redcirclebgE = String.fromCharCode(52,115,109,114,51,103,109,0) == singleA;
      do {
         singleA += `${3 << (Math.min(1, Math.abs(shared4)))}`;
         if (redcirclebgE) {
            break;
         }
      } while (redcirclebgE && (5 <= (singleA.length >> (Math.min(1, Math.abs(minivodA)))) || (singleA.length >> (Math.min(Math.abs(5), 1))) <= 2));
          let videocommonY = String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,0);
          let darkq = String.fromCharCode(100,105,109,105,110,115,105,111,110,115,0);
         playlistQ.push((darkq == String.fromCharCode(56,0) ? darkq.length : shared4));
         videocommonY += `${videocommonY.length}`;
         qaagr *= parseFloat(`${3 | minivodA}`);
      if (!singleA.endsWith(`${playlistQ.length}`)) {
         singleA = `${shared4 | 3}`;
      }
       let dependenciesR: Map<any, any> = new Map([[String.fromCharCode(102,116,115,121,121,0),278], [String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0),478], [String.fromCharCode(99,112,117,117,115,101,100,0),365]]);
         singleA += `${parseInt(`${qaagr}`) / 2}`;
       let mintegralR: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,101,99,111,100,101,0),String.fromCharCode(105,109,112,111,115,116,101,114,0)], [String.fromCharCode(120,116,101,97,0),String.fromCharCode(105,110,116,109,97,116,104,0)], [String.fromCharCode(114,101,99,111,110,102,105,103,0),String.fromCharCode(101,120,112,114,101,115,115,105,111,110,0)]]);
          let iconH = 5.0;
          let grayv: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,0),860], [String.fromCharCode(116,105,108,101,0),53]]);
         minivodA <<= Math.min(5, Math.abs(3));
         iconH -= parseFloat(`${parseInt(`${iconH}`)}`);
         grayv = new Map([[`${grayv.size}`, grayv.size]]);
      let libtob9 = playlistQ.length >= 6700936;
      do {
          let libjsijniprofilerV = String.fromCharCode(118,97,114,105,97,110,99,101,120,0);
          let root8 = 2.0;
          let tempnodata7: Map<any, any> = new Map([[String.fromCharCode(101,114,97,0),String.fromCharCode(99,111,110,115,117,109,101,0)], [String.fromCharCode(113,122,98,105,110,0),String.fromCharCode(100,99,97,109,97,116,104,0)], [String.fromCharCode(114,101,109,98,0),String.fromCharCode(101,120,112,111,114,116,0)]]);
         playlistQ = [2];
         libjsijniprofilerV += "1";
         root8 += tempnodata7.size - 1;
         tempnodata7 = new Map([[`${tempnodata7.size}`, libjsijniprofilerV.length | 3]]);
         if (libtob9) {
            break;
         }
      } while (((1 | mintegralR.size) > 2 && (1 | mintegralR.size) > 5) && libtob9);
      while (dependenciesR.get(`${mintegralR.size}`) != null) {
          let rewardM = 2;
          let login6 = String.fromCharCode(113,117,105,99,0);
         dependenciesR.set(`${qaagr}`, parseInt(`${qaagr}`));
         rewardM ^= login6.length * rewardM;
         login6 += `${(login6 == String.fromCharCode(97,0) ? login6.length : rewardM)}`;
         break;
      }
         mintegralR.set(`${shared4}`, 1);
         playlistQ.push(mintegralR.size >> (Math.min(3, Math.abs(minivodA))));
      login2 &= 3;
      break;
   }
      airbnbstarx *= 2 % (Math.max(6, package_bvH.length));
      disconnectedlogok /= Math.max(5, parseFloat(`${login2 / (Math.max(parseInt(`${tumbnailg}`), 4))}`));
      login2 |= parseInt(`${icondownimg1}`);

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRTooltipsFile, {});

   while (3 >= suboutv) {
      login2 ^= typingo;
      break;
   }
   for (let c = 0; c < 2; c++) {
       let securityd = 2.0;
      if ((securityd / (Math.max(securityd, 8))) < 1.7) {
          let playlistx = String.fromCharCode(115,101,103,119,105,116,0);
         securityd /= Math.max(4, parseFloat(`${parseInt(`${securityd}`)}`));
         playlistx += `${playlistx.length}`;
      }
         securityd += parseFloat(`${parseInt(`${securityd}`)}`);
      for (let q = 0; q < 2; q++) {
          let zhengpianx = 3;
          let whistleorangea: Array<any> = [995, 891, 425];
          let base0: Map<any, any> = new Map([[String.fromCharCode(105,103,110,111,114,105,110,103,95,115,95,57,57,0),String.fromCharCode(116,105,108,101,115,0)], [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,0),String.fromCharCode(115,121,115,99,116,108,115,0)], [String.fromCharCode(114,111,108,108,98,97,99,107,0),String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,0)]]);
          let iconrefresh5: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,105,99,105,116,0),571], [String.fromCharCode(117,110,115,105,103,110,101,100,0),99], [String.fromCharCode(118,105,122,105,101,114,0),659]]);
         securityd -= parseFloat(`${parseInt(`${securityd}`) << (Math.min(Math.abs(2), 4))}`);
         zhengpianx |= iconrefresh5.size;
         whistleorangea = [1];
         base0.set(`${zhengpianx}`, zhengpianx * whistleorangea.length);
         iconrefresh5.set(`${iconrefresh5.size}`, base0.size);
      }
      suboutv -= humidity1.length / 3;
   }
   while ((humidity1.length / (Math.max(3, 2))) == 4) {
      humidity1 += `${parseInt(`${icondownimg1}`)}`;
      break;
   }
      embedd -= parseFloat(`${parseInt(`${airbnbstarx}`) >> (Math.min(Math.abs(3), 1))}`);
      typingo -= parseInt(`${icondownimg1}`) - 1;
       let type_17Q: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,0),false ], [String.fromCharCode(101,109,98,101,100,0),true ], [String.fromCharCode(112,111,105,110,116,111,99,116,0),false ]]);
       let defaultprofilepicc = String.fromCharCode(116,121,112,101,0);
       let recommendationu = 5;
          let green0 = String.fromCharCode(119,97,108,0);
         defaultprofilepicc += `${defaultprofilepicc.length + green0.length}`;
         defaultprofilepicc += `${1 % (Math.max(1, recommendationu))}`;
      let dice0 = defaultprofilepicc == String.fromCharCode(95,107,54,51,0);
      do {
          let videocommonP: Array<any> = [29, 151, 337];
          let indicatorc = 4.0;
         defaultprofilepicc = `${parseInt(`${indicatorc}`)}`;
         videocommonP = [3];
         indicatorc *= parseFloat(`${videocommonP.length + 1}`);
         if (dice0) {
            break;
         }
      } while (dice0 && ((defaultprofilepicc.length & 1) == 3 && (recommendationu & 1) == 1));
         defaultprofilepicc = `${defaultprofilepicc.length << (Math.min(2, Math.abs(recommendationu)))}`;
      if ((type_17Q.size / 2) > 2) {
         type_17Q = new Map([[`${type_17Q.size}`, 2]]);
      }
      if (type_17Q.size == defaultprofilepicc.length) {
          let homeiconJ: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,116,101,115,116,0),true ], [String.fromCharCode(99,110,116,0),false ], [String.fromCharCode(99,97,108,99,119,0),true ]]);
          let thailand0 = String.fromCharCode(115,99,97,108,97,98,108,101,0);
          let infob = true;
         type_17Q = new Map([[thailand0, thailand0.length ^ 1]]);
         homeiconJ = new Map([[`${homeiconJ.size}`, homeiconJ.size]]);
         infob = infob && homeiconJ.size < 19;
      }
         defaultprofilepicc = `${type_17Q.size & 2}`;
      let latnB = recommendationu <= 6529734;
      do {
          let analyticm = 1;
          let routerd: Map<any, any> = new Map([[String.fromCharCode(115,105,110,100,101,120,0),73], [String.fromCharCode(105,110,118,111,107,101,0),232], [String.fromCharCode(100,121,110,98,117,102,0),909]]);
          let orangedownarrowb = 5.0;
          let controlsl = String.fromCharCode(99,97,114,111,117,115,101,108,0);
         recommendationu /= Math.max(defaultprofilepicc.length, 2);
         analyticm ^= parseInt(`${orangedownarrowb}`);
         routerd = new Map([[`${routerd.size}`, controlsl.length | routerd.size]]);
         orangedownarrowb -= controlsl.length;
         if (latnB) {
            break;
         }
      } while (latnB && (type_17Q.get(`${recommendationu}`) != null));
         type_17Q.set(`${recommendationu}`, recommendationu);
      embedd -= parseFloat(`${typingo / (Math.max(suboutv, 6))}`);
        yysIconstarReact.onEvent({
            type: 'click',
            title: GDRBasketballtrophyIcondefaultthumbnail.GDRDefaultpredictionprofilePredictionbutton,
        });

      humidity1 += `${suboutv}`;
      typingo >>= Math.min(package_bvH.length, 1);
   let leagueA = 6991982.0 >= icondownimg1;
   do {
      icondownimg1 += parseFloat(`${parseInt(`${tumbnailg}`)}`);
      if (leagueA) {
         break;
      }
   } while (leagueA && (humidity1.startsWith(`${icondownimg1}`)));
      humidity1 += `${parseInt(`${airbnbstarx}`)}`;
      tumbnailg /= Math.max(parseFloat(`${2}`), 1);
   if (tumbnailg < airbnbstarx) {
       let manifest9 = String.fromCharCode(103,101,116,115,111,99,107,111,112,116,0);
       let libfilel: Array<any> = [String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,0), String.fromCharCode(112,97,105,114,119,105,115,101,0), String.fromCharCode(120,117,116,105,108,0)];
       let static_o1N = String.fromCharCode(114,101,102,105,110,101,114,0);
       let whitetick4 = 0.0;
       let yellowanimationliveZ = String.fromCharCode(97,110,103,108,101,115,0);
       let orientationF = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,0);
      for (let y = 0; y < 3; y++) {
         static_o1N = `${orientationF.length}`;
      }
      while (static_o1N.includes(orientationF)) {
          let positionfieldB: Array<any> = [String.fromCharCode(105,103,104,108,105,103,104,116,115,0), String.fromCharCode(99,104,97,114,115,0)];
         orientationF += "1";
         positionfieldB = [positionfieldB.length];
         break;
      }
          let libreactnativejniM = true;
          let qaag_: Array<any> = [String.fromCharCode(105,110,104,105,98,105,116,115,0), String.fromCharCode(97,98,111,114,116,0), String.fromCharCode(111,118,101,114,102,108,111,119,0)];
         static_o1N += `${static_o1N.length}`;
         libreactnativejniM = qaag_.length == 28 && !libreactnativejniM;
         qaag_.push(qaag_.length % 2);
         manifest9 = `${parseInt(`${whitetick4}`) + manifest9.length}`;
         static_o1N += `${libfilel.length}`;
          let orangedownarrowA = 5.0;
          let libswscale4: Map<any, any> = new Map([[String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0),232], [String.fromCharCode(111,118,112,97,103,101,0),533], [String.fromCharCode(104,97,110,103,117,112,0),57]]);
         yellowanimationliveZ = "1";
         orangedownarrowA *= libswscale4.size / (Math.max(1, 1));
         libswscale4 = new Map([[`${libswscale4.size}`, 1 + parseInt(`${orangedownarrowA}`)]]);
      if (!static_o1N.startsWith(`${libfilel.length}`)) {
         libfilel.push(2 + orientationF.length);
      }
          let sheet1 = false;
         manifest9 = `${orientationF.length}`;
         sheet1 = (!sheet1 ? sheet1 : sheet1);
       let libreactnativeblobl = 3;
         manifest9 += `${manifest9.length}`;
      for (let w = 0; w < 1; w++) {
         static_o1N += `${2 << (Math.min(Math.abs(libreactnativeblobl), 4))}`;
      }
      tumbnailg /= Math.max(2, parseFloat(`${2 + libfilel.length}`));
   }

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRTooltipsFile);
    }

    static playsAdsViewAnalytics = ({
        ads_slot_id,
        ads_id,
        ads_title = GDRLibbuffer.GDRCorner,
        ads_name,
    }: {
        ads_slot_id?: number,
        ads_id?: number,
        ads_title?: string,
        ads_name?: string,
    }) => {
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRCorner, {});
        yysIconstarReact.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRCorner);
    }

    static playsAdsClickAnalytics = ({
        url,
        ads_slot_id,
        ads_id,
        ads_title = GDRLibbuffer.GDRModalComponent,
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

        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRModalComponent, params);
        yysIconstarReact.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: url ?? 'none',
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRModalComponent);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRIconwatchnowRenew, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRIconwatchnowRenew);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDROtherRedirect, {
            'player_type': playerType,
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yysIconstarReact.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
            params: {
                desc_1: playerType,
            }
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDROtherRedirect);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRMiniTarget, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yysIconstarReact.onEvent({
            type: 'view',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRMiniTarget);
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
        AnalyticsUtil.onEventWithMap(GDRLibbuffer.GDRDebug, {
            'ads_id': ads_id,
            'ads_name': ads_title,
        });
        yysIconstarReact.onEvent({
            type: 'click',
            title: ads_title,
            ads_slot_id: ads_slot_id,
            ads_id: ads_id,
            name: ads_name,
        });

        if (this.showLog) console.log('trigger event id:', GDRLibbuffer.GDRDebug);
    }
}
