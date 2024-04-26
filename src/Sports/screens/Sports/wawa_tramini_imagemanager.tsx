import React, {
  Component,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import ScreenContainer from '../../../components/container/wawa_nterstitial_iconpipexpand';
import MainHeader from '../../../components/header/wawa_favorite_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { wawaUtilsVignette, wawaLeaguedetailsbgMbbid, wawaNavigation } from '@type/wawa_gradlew';
import VodPlaylist from '../../../components/playlist/wawa_arrowright';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import FastImage from '../../../components/common/wawa_iconarrowrightblack';
import wawaLibjsinspector from '../../middleware/wawa_ping';
import { Url } from '../../middleware/wawa_iconfeedback';
import { formatMatchDate } from '../../utility/utils';
import { wawaPhone, wawaText } from '../../types/wawa_klevin_iconwechat';
import MatchDetailsNav from '../../components/matchDetails/wawa_mimo_view';
import MatchSchedule from '../../components/matchSchedule/wawa_iconwatchnow_bgvipxvod';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer, { wawaImage } from '../../../components/videoPlayer/wawa_orangetick_giftbutton';
import { parseVideoURL } from '../../utility/wawa_arrowrightwithtail_spec';
import Video from 'react-native-video';
import LiveVideo from '../../components/liveVideo/wawa_away';
import { VideoLiveType } from '../../global/wawa_plash_home';
import {
  wawaReactnativeultimatelistviewDisconnected,
  wawaShootnogoal,
} from '../../types/wawa_phoneshare_reactnavigation';
import { wawaScrollviewMiddlesound } from '../../types/wawa_feedback_hash';
import BeforeLive from '../../components/beforeLive';
import StatisticPage from '../../components/matchDetails/statisticPage';
import { wawaIconsharefriends } from '../../types/wawa_disconnectedlogo';
import LineUpPage from '../../components/matchDetails/lineUpPage';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/wawa_root';
import { screenModel } from '@type/wawa_rules';
import { incrementSportWatchTime } from '@redux/actions/wawa_related';
import BecomeVipOverlay from "../../../components/modal/wawa_arrowrightwithtail";
import { INVITE_FRIEND, NON_VIP_STREAM_TIME_SECONDS } from '@utility/wawa_iconpointscore';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wawaBackground } from '@redux/reducers/wawa_comment';
import VipRegisterBar from '../../../components/adultVideo/wawa_transfer_tempnodata';
import { BannerContainer } from '../../../components/container/wawa_typing_libfabricjni';
import { wawaBasketballiconPenaltyshootnogoal } from '../../../../wawa_shareblack_orientation';
import { wawaFlagStations } from '@api';
import LiveChatPage from '../../components/matchDetails/liveChatPage';
import PrivateChatPage from '../../components/matchDetails/privateChatPage';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';

let insetsTop = 0;
let insetsBottom = 0;

type wawaBellreminderDisconnected = {
  item: wawaPhone;
  index: number;
};

interface wawaFullscreenminIconarrowleft {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

type wawaIconfeedback = {
  type: number;
  url: any;
};

const MatchDetails = ({ navigation, route }: BottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<wawaUtilsVignette>);
  const [videoSource, setVideoSource] = useState<wawaIconfeedback>({
    type: 0,
    url: undefined,
  });
  const [isLiveVideoFullScreen, setIsLiveVideoFullScreen] = useState(false);
  const [shouldShowComponents, setShouldShowComponents] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const showCountdown = !wawaLibglog.fakeIsVip(userState.user);

  const videoRef = useRef<wawaImage | null>(null);
  const [bannerAd, setBannerAd] = useState<wawaLeaguedetailsbgMbbid>();
  const isVip = wawaLibglog.fakeIsVip(userState.user);
  const sportTabDetails: wawaNavigation = wawaBasketballiconPenaltyshootnogoal.instance.findTabByKey('体育');

  

  
  useEffect(() => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportDetailsViewsAnalytics();
  }, [])
  

  const { data: match } = useQuery({
    queryKey: ['liveRoomDetails', matchID],
    queryFn: () =>
      wawaLibjsinspector.call(`${Url.liveRoomDetail}?id=${matchID}`, {}, 'GET').then(
        (res): wawaPhone => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const { data: matchDetails, isFetching: f1 } = useQuery({
    queryKey: ['matchDetails', matchID, streamID],
    queryFn: () =>
      wawaLibjsinspector.call(`${Url.matchDetails}?id=${matchID}`, {}, 'GET').then(
        (res): wawaReactnativeultimatelistviewDisconnected => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: liveRoomUpdate, isFetching: f2 } = useQuery({
    queryKey: ['liveRoomUpdate', matchID, streamID],
    queryFn: () =>
      wawaLibjsinspector.call(
        `${Url.matchUpdate}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): wawaScrollviewMiddlesound => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const { data: matchLineUp, isFetching: f3 } = useQuery({
    queryKey: ['matchLineUp', matchID, streamID],
    queryFn: () =>
      wawaLibjsinspector.call(
        `${Url.matchLineup}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): wawaIconsharefriends => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const streamer = (match === undefined || match?.streams === undefined || match.streams.length === 0)
    ? null
    : match.streams[0].streamer;

  const isEnableChatRoom = sportTabDetails.settings.enabled_sports_chatroom.toLowerCase() !== 'n' && matchDetails !== undefined;
  const sportType = matchDetails?.sports_type === 1 ? 'football' : matchDetails?.sports_type === 2 ? 'basketball' : '';

  useEffect(() => {
    setTabList([
      ...(isEnableChatRoom && streamer ? [
        {
          name: 'LiveChat',
          title: '聊天室',
          page: (
            <LiveChatPage
              matchID={matchID.toString()}
              streamer={streamer}
              sportType={sportType}
              onPrivateChatPress={onGoPrivateChatPress}
              onInputFocus={onInputFocus}
            />
          ),
        },
        {
          name: 'PrivateChat',
          title: '私聊',
          page: (
            <PrivateChatPage
              matchID={matchID.toString()}
              streamer={streamer}
              sportType={sportType}
              onInputFocus={onInputFocus}
            />
          ),
        },
      ] : []),
      {
        name: 'Live',
        title: '直播',
        page: (
          <LiveStatPage
            liveRoomUpdate={liveRoomUpdate}
            liveRoomMatchDetails={matchDetails}
          />
        ),
      },
      {
        name: 'TeamData',
        title: '数据',
        page: <TeamDataPage liveRoomMatchDetails={matchDetails} />,
      },
      matchDetails?.sports_type == 1
        ? {
          name: 'Lineup',
          title: '阵容',
          page: (
            <LineUpPage
              liveRoomLineup={matchLineUp}
              liveRoomMatchDetails={matchDetails}
            />
          ),
        }
        : {
          name: 'Statistic',
          title: '统计',
          page: (
            <StatisticPage
              liveRoomMatchDetails={matchDetails}
              liveRoomUpdate={liveRoomUpdate}
            />
          ),
        },
    ]);
  }, [streamer, liveRoomUpdate, matchLineUp, matchDetails]);

  const onLiveEnd = useCallback(() => {
       let traminih = String.fromCharCode(113,95,51,52,95,99,111,117,110,116,100,111,119,110,0);
    let bggradientn: Map<any, any> = new Map([[String.fromCharCode(97,112,111,108,108,111,95,104,95,51,57,0),436], [String.fromCharCode(104,95,54,52,95,113,99,101,108,112,0),637], [String.fromCharCode(107,110,111,119,110,95,120,95,55,57,0),454]]);
    let holderf = 4.0;
    let subbasketballplayerd: Map<any, any> = new Map([[String.fromCharCode(108,115,112,114,95,122,95,57,0),575], [String.fromCharCode(115,116,97,116,105,111,110,97,114,121,95,50,95,52,53,0),800]]);
    let libffmpegkitJ: Map<any, any> = new Map([[String.fromCharCode(99,108,105,101,110,116,95,117,95,52,49,0),559], [String.fromCharCode(103,95,57,57,95,99,97,114,116,101,115,105,97,110,0),891]]);
    let splashP = true;
    let iconrightorange6 = 5;
    let playershirt0 = 1.0;
    let yellowanimationliveg = true;
    let actionS = String.fromCharCode(100,97,116,97,95,114,95,54,51,0);
    let icondefaultthumbnailb: Map<any, any> = new Map([[String.fromCharCode(112,95,55,55,95,115,116,100,105,110,116,0),440], [String.fromCharCode(117,110,98,111,110,100,95,99,95,56,54,0),434], [String.fromCharCode(97,95,49,53,95,97,100,97,112,116,97,116,105,111,110,0),566]]);
    let mbnativev = 0.0;
    let bggradient6 = 0.0;
    let iconadslinkk = String.fromCharCode(106,95,49,48,95,115,117,109,102,0);
    let flipperl: Map<any, any> = new Map([[String.fromCharCode(102,111,111,116,101,114,95,48,95,55,57,0),75], [String.fromCharCode(114,95,57,95,112,105,101,0),208]]);
    let ball4 = 1.0;
    let anewarchdefaultsn = false;
    let libswresample5: Array<any> = [834, 378, 582];
    let matchactive8 = String.fromCharCode(104,101,99,107,95,105,95,54,49,0);
      traminih += `${libffmpegkitJ.size}`;
   while (splashP) {
      splashP = (53 >= (actionS.length - (yellowanimationliveg ? actionS.length : 53)));
      break;
   }
   for (let a = 0; a < 1; a++) {
       let iconarrowrightwhitek = String.fromCharCode(101,108,101,118,97,116,101,95,104,95,49,48,0);
       let aboutc = String.fromCharCode(98,95,54,95,112,101,114,115,105,115,116,97,110,116,0);
       let areat = String.fromCharCode(111,95,52,48,95,106,99,109,97,115,116,101,114,0);
       let floaterZ = String.fromCharCode(111,112,97,99,105,116,121,95,111,95,56,49,0);
       let renewx = 4.0;
         renewx -= areat.length;
      let const_cyS = areat.length <= 6219544;
      do {
         areat = `${(String.fromCharCode(81,0) == iconarrowrightwhitek ? areat.length : iconarrowrightwhitek.length)}`;
         if (const_cyS) {
            break;
         }
      } while (const_cyS && (!aboutc.startsWith(areat)));
      for (let l = 0; l < 3; l++) {
          let inviteE = String.fromCharCode(110,98,105,116,115,95,99,95,49,49,0);
          let whitebellD = true;
          let questiconV = false;
          let minih = String.fromCharCode(100,95,51,48,95,105,116,117,110,101,115,0);
         aboutc += `${(String.fromCharCode(68,0) == areat ? (whitebellD ? 4 : 1) : areat.length)}`;
         inviteE += "3";
         whitebellD = inviteE.length == 96;
         questiconV = !questiconV;
         minih += `${2 << (Math.min(4, minih.length))}`;
      }
      let annerN = renewx >= 5405151.0;
      do {
          let codes: Map<any, any> = new Map([[String.fromCharCode(102,95,57,53,95,117,112,103,114,97,100,101,0),249], [String.fromCharCode(120,95,52,48,95,114,99,118,100,0),546]]);
          let statsnomoredata4 = String.fromCharCode(100,111,116,95,97,95,55,56,0);
         renewx *= areat.length;
         codes.set(statsnomoredata4, statsnomoredata4.length & 2);
         if (annerN) {
            break;
         }
      } while ((aboutc.length <= 4) && annerN);
      let basketballtrophyg = String.fromCharCode(100,53,119,56,119,54,0) == floaterZ;
      do {
          let redcirclebgM = String.fromCharCode(121,95,56,49,95,109,111,100,101,110,97,109,101,0);
         floaterZ += `${iconarrowrightwhitek.length}`;
         redcirclebgM += `${(redcirclebgM == String.fromCharCode(105,0) ? redcirclebgM.length : redcirclebgM.length)}`;
         if (basketballtrophyg) {
            break;
         }
      } while ((iconarrowrightwhitek.length >= floaterZ.length) && basketballtrophyg);
         areat = `${floaterZ.length | parseInt(`${renewx}`)}`;
         iconarrowrightwhitek = `${aboutc.length * 2}`;
      let apple1 = areat.length >= 4929396;
      do {
         areat = `${areat.length}`;
         if (apple1) {
            break;
         }
      } while (apple1 && (areat != String.fromCharCode(105,0) || aboutc.length == 5));
          let friendsy = String.fromCharCode(107,95,49,48,95,119,101,98,112,0);
         aboutc += `${floaterZ.length}`;
         friendsy += `${friendsy.length & 1}`;
          let release_3cy: Array<any> = [String.fromCharCode(105,108,101,97,118,101,95,118,95,51,48,0), String.fromCharCode(107,95,53,51,95,108,117,109,97,107,101,121,0)];
          let remindert = String.fromCharCode(122,95,53,57,95,100,105,97,103,111,110,97,108,0);
          let s_titleH = 1.0;
         areat += "3";
         release_3cy.push(1 ^ release_3cy.length);
         remindert = `${remindert.length}`;
         s_titleH /= Math.max(parseInt(`${s_titleH}`) / 1, 3);
      while (!aboutc.endsWith(areat)) {
         aboutc += `${iconarrowrightwhitek.length & aboutc.length}`;
         break;
      }
          let scheduleU = 3.0;
         iconarrowrightwhitek = `${parseInt(`${renewx}`)}`;
         scheduleU -= parseInt(`${scheduleU}`) % 3;
       let castk = String.fromCharCode(111,112,101,110,95,117,95,57,49,0);
       let circleo = String.fromCharCode(101,97,115,101,95,105,95,50,48,0);
      let dependencyr = castk.length >= 5097962;
      do {
          let filledo = String.fromCharCode(117,95,50,49,95,115,121,110,116,97,120,0);
          let reactF = 0.0;
          let greenE = 2.0;
          let flipper_: Array<any> = [931, 246];
         castk += `${2 ^ castk.length}`;
         filledo = `${parseInt(`${greenE}`)}`;
         reactF += 1;
         flipper_ = [filledo.length];
         if (dependencyr) {
            break;
         }
      } while ((3.77 == (castk.length / (Math.max(3, renewx))) && 2 == (1 + castk.length)) && dependencyr);
         circleo = `${aboutc.length}`;
      bggradientn.set(`${bggradient6}`, parseInt(`${bggradient6}`));
   }
      actionS += `${traminih.length / 1}`;
      bggradientn.set(`${iconrightorange6}`, 3 ^ iconrightorange6);
   if (icondefaultthumbnailb.get(`${playershirt0}`) == null) {
      icondefaultthumbnailb.set(`${yellowanimationliveg}`, 2 >> (Math.min(Math.abs(parseInt(`${bggradient6}`)), 3)));
   }
   let gifgoalbgu = icondefaultthumbnailb.size >= 6231866;
   do {
      icondefaultthumbnailb = new Map([[`${bggradient6}`, parseInt(`${bggradient6}`) ^ 1]]);
      if (gifgoalbgu) {
         break;
      }
   } while (gifgoalbgu && (4 <= (5 | icondefaultthumbnailb.size)));
       let reminderd = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,54,95,54,54,0);
      while (reminderd.length >= reminderd.length) {
         reminderd = `${reminderd.length | reminderd.length}`;
         break;
      }
       let dicelogoP = String.fromCharCode(108,117,109,97,95,51,95,56,53,0);
       let modalX = String.fromCharCode(97,110,103,117,108,97,114,95,57,95,57,54,0);
          let trophyH = String.fromCharCode(111,112,101,110,115,115,108,99,111,110,102,95,97,95,54,52,0);
          let iconnewsshareO = String.fromCharCode(121,95,50,53,95,102,97,99,101,0);
         dicelogoP += `${trophyH.length}`;
         trophyH = `${iconnewsshareO.length}`;
         iconnewsshareO += `${iconnewsshareO.length}`;
      traminih += `${parseInt(`${bggradient6}`)}`;
   for (let p = 0; p < 3; p++) {
      actionS += "2";
   }
       let defaultfootballbgX: Array<any> = [771, 645, 964];
       let langr = 3.0;
      if (3.4 < langr) {
          let iconnotificationnewk: Map<any, any> = new Map([[String.fromCharCode(118,95,53,95,119,101,98,112,0),398], [String.fromCharCode(108,95,55,48,95,97,108,103,111,0),858]]);
         langr -= 1 % (Math.max(parseInt(`${langr}`), 6));
         iconnotificationnewk.set(`${iconnotificationnewk.size}`, iconnotificationnewk.size);
      }
         langr *= 1;
      let sendM = langr <= 8409366.0;
      do {
         langr /= Math.max(parseInt(`${langr}`), 3);
         if (sendM) {
            break;
         }
      } while (sendM && (defaultfootballbgX.length > parseInt(`${langr}`)));
       let analyticsd = 0.0;
      let iconlogoutt = defaultfootballbgX.length >= 9385047;
      do {
         defaultfootballbgX.push(1 + defaultfootballbgX.length);
         if (iconlogoutt) {
            break;
         }
      } while (iconlogoutt && (!defaultfootballbgX.includes(langr)));
         langr *= 1;
      actionS = `${iconadslinkk.length ^ 3}`;
   while (5 >= (5 & actionS.length)) {
      bggradientn.set(`${bggradient6}`, ((yellowanimationliveg ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${bggradient6}`)), 5))));
      break;
   }
   if (5 == traminih.length) {
      traminih = `${parseInt(`${bggradient6}`) | 1}`;
   }
   for (let m = 0; m < 3; m++) {
      actionS = `${bggradientn.size << (Math.min(traminih.length, 4))}`;
   }
   while (splashP) {
      bggradient6 /= Math.max(4, parseFloat(`${parseInt(`${playershirt0}`)}`));
      break;
   }
   while (subbasketballplayerd.get(`${libffmpegkitJ.size}`) != null) {
      subbasketballplayerd.set(`${holderf}`, subbasketballplayerd.size >> (Math.min(4, Math.abs(parseInt(`${holderf}`)))));
      break;
   }
   for (let u = 0; u < 3; u++) {
      bggradientn = new Map([[`${bggradientn.size}`, 1]]);
   }
   let sidel = iconrightorange6 >= 5633776;
   do {
      iconrightorange6 -= libffmpegkitJ.size + parseInt(`${mbnativev}`);
      if (sidel) {
         break;
      }
   } while (((iconrightorange6 + 4) <= 3 && 4.52 <= (4.41 * mbnativev)) && sidel);
   while (1.58 <= (iconrightorange6 / (Math.max(holderf, 7)))) {
      iconrightorange6 /= Math.max(libffmpegkitJ.size % 2, 1);
      break;
   }
   if (3 < libffmpegkitJ.size && (3 - libffmpegkitJ.size) < 4) {
      splashP = !yellowanimationliveg && !splashP;
   }
   if (actionS == String.fromCharCode(85,0)) {
       let libavutilf = 1;
       let qaag1 = 1;
       let iconwatchq = String.fromCharCode(110,101,116,115,95,49,95,53,53,0);
       let basketballmatchdetailbgI: Array<any> = [718, 368];
      if (iconwatchq.length >= qaag1) {
          let androidN = 5.0;
          let moviesR: Map<any, any> = new Map([[String.fromCharCode(97,115,97,110,95,114,95,54,0),779], [String.fromCharCode(115,95,51,51,95,115,116,105,112,112,101,100,0),588]]);
          let mimo3: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,115,105,110,103,95,111,95,57,0),524], [String.fromCharCode(112,97,99,107,115,95,122,95,51,0),223], [String.fromCharCode(119,95,54,49,95,99,111,109,112,105,116,97,98,108,101,0),280]]);
         iconwatchq = `${qaag1 % (Math.max(1, basketballmatchdetailbgI.length))}`;
         androidN *= 1 | parseInt(`${androidN}`);
         moviesR = new Map([[`${moviesR.size}`, moviesR.size]]);
         mimo3.set(`${androidN}`, parseInt(`${androidN}`));
      }
       let closeK = 3.0;
          let holderQ = true;
         qaag1 |= iconwatchq.length;
         holderQ = !holderQ;
      while (4 < (3 & basketballmatchdetailbgI.length)) {
         libavutilf %= Math.max(1 ^ libavutilf, 3);
         break;
      }
      for (let k = 0; k < 2; k++) {
          let uploadE = String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,115,95,54,55,0);
          let sellx = 3;
          let sourceC = String.fromCharCode(97,116,97,98,97,115,101,95,51,95,57,56,0);
          let executorB = 2.0;
         iconwatchq = "3";
         uploadE += `${sellx ^ 3}`;
         sellx >>= Math.min(Math.abs(sourceC.length << (Math.min(Math.abs(2), 3))), 1);
         sourceC += `${parseInt(`${executorB}`)}`;
         executorB /= Math.max(parseFloat(`${sourceC.length}`), 5);
      }
      for (let t = 0; t < 2; t++) {
          let referrerP = false;
          let iconwatchnowN = String.fromCharCode(104,95,50,54,95,114,101,97,115,111,110,115,0);
         basketballmatchdetailbgI.push(iconwatchnowN.length);
         referrerP = !referrerP;
         iconwatchnowN = `${(3 / (Math.max(6, (referrerP ? 2 : 3))))}`;
      }
      let nterstitial5 = 6164110 >= basketballmatchdetailbgI.length;
      do {
          let castB: Map<any, any> = new Map([[String.fromCharCode(116,114,101,110,100,105,110,103,95,117,95,57,51,0),175], [String.fromCharCode(121,95,51,49,95,97,116,97,98,108,101,115,0),4], [String.fromCharCode(113,95,49,48,95,109,97,116,104,0),936]]);
         basketballmatchdetailbgI.push(iconwatchq.length);
         castB.set(`${castB.size}`, castB.size);
         if (nterstitial5) {
            break;
         }
      } while (nterstitial5 && ((libavutilf % 5) > 3 && 5 > (libavutilf % (Math.max(basketballmatchdetailbgI.length, 1)))));
      while (libavutilf > qaag1) {
         qaag1 -= parseInt(`${closeK}`);
         break;
      }
         qaag1 += libavutilf;
         iconwatchq = `${qaag1 % 2}`;
      for (let y = 0; y < 2; y++) {
         iconwatchq += `${(String.fromCharCode(121,0) == iconwatchq ? iconwatchq.length : qaag1)}`;
      }
         basketballmatchdetailbgI = [1 % (Math.max(10, iconwatchq.length))];
      iconadslinkk = `${1 + iconwatchq.length}`;
   }
       let pingd = String.fromCharCode(115,101,118,101,114,105,116,121,95,52,95,52,0);
       let searchj: Array<any> = [808, 992, 339];
       let issubq = 2.0;
         pingd = `${searchj.length}`;
      while (!pingd.startsWith(`${searchj.length}`)) {
          let update_3yI = String.fromCharCode(122,95,51,56,95,97,114,101,110,97,115,0);
         searchj = [(update_3yI == String.fromCharCode(67,0) ? pingd.length : update_3yI.length)];
         break;
      }
      for (let b = 0; b < 2; b++) {
         searchj = [pingd.length ^ parseInt(`${issubq}`)];
      }
          let iconclosewhitewithbgE = String.fromCharCode(115,95,57,49,95,110,111,110,108,105,110,101,97,114,0);
          let mountingo = 1.0;
          let networkG: Array<any> = [636, 373];
         issubq -= networkG.length / (Math.max(2, 2));
         iconclosewhitewithbgE += "3";
         mountingo *= parseFloat(`${parseInt(`${mountingo}`)}`);
         networkG.push(iconclosewhitewithbgE.length | parseInt(`${mountingo}`));
          let pressurek = String.fromCharCode(105,115,116,97,112,95,119,95,53,56,0);
         issubq -= searchj.length;
         pressurek = `${(String.fromCharCode(113,0) == pressurek ? pressurek.length : pressurek.length)}`;
         searchj = [(String.fromCharCode(97,0) == pingd ? parseInt(`${issubq}`) : pingd.length)];
       let shootyesgoalZ = 4.0;
       let fcdaebecbcbafcdfceaaeccfeacdbB = 3.0;
      while ((1 * pingd.length) > 4) {
          let configureZ = String.fromCharCode(104,95,53,50,95,109,97,110,97,103,101,115,0);
          let hiad5 = String.fromCharCode(114,95,53,53,95,97,121,98,114,105,0);
          let statsnomoredatao = String.fromCharCode(104,95,49,55,95,99,114,111,115,115,111,118,101,114,0);
         pingd += `${parseInt(`${issubq}`)}`;
         configureZ += `${hiad5.length << (Math.min(configureZ.length, 2))}`;
         hiad5 += `${statsnomoredatao.length}`;
         statsnomoredatao += `${hiad5.length}`;
         break;
      }
      if ((parseFloat(`${pingd.length}`) - fcdaebecbcbafcdfceaaeccfeacdbB) == 5.85 || (5.85 - fcdaebecbcbafcdfceaaeccfeacdbB) == 3.68) {
         fcdaebecbcbafcdfceaaeccfeacdbB += parseFloat(`${searchj.length << (Math.min(pingd.length, 4))}`);
      }
      subbasketballplayerd = new Map([[`${subbasketballplayerd.size}`, subbasketballplayerd.size + 2]]);
   while ((actionS.length / (Math.max(5, playershirt0))) > 4.66 && (4.66 / (Math.max(1, playershirt0))) > 5.41) {
      playershirt0 /= Math.max(bggradientn.size, 2);
      break;
   }
   let corem = splashP ? !splashP : splashP;
   do {
      splashP = (libffmpegkitJ.size / (Math.max(6, playershirt0))) >= 64.42;
      if (corem) {
         break;
      }
   } while ((!splashP) && corem);
   while (2.8 <= (3.57 - bggradient6) && (bggradient6 - 3.57) <= 5.78) {
      flipperl.set(`${bggradient6}`, 2 << (Math.min(1, iconadslinkk.length)));
      break;
   }
   let iconsubssuccessr = splashP ? !splashP : splashP;
   do {
       let cancelP = String.fromCharCode(98,95,57,57,95,104,114,115,115,0);
      let awayy = cancelP.length <= 6136663;
      do {
         cancelP += "1";
         if (awayy) {
            break;
         }
      } while (awayy && (cancelP.length == cancelP.length));
          let libmapbufferjniN = String.fromCharCode(111,103,103,101,114,95,105,95,52,51,0);
          let libreactperfloggerjni2: Array<any> = [String.fromCharCode(117,116,105,108,95,50,95,57,57,0), String.fromCharCode(115,95,50,51,95,99,102,101,110,99,0)];
          let assistI = String.fromCharCode(99,100,97,116,97,95,97,95,57,0);
         cancelP += `${cancelP.length}`;
         libmapbufferjniN += "1";
         libreactperfloggerjni2.push(assistI.length);
         assistI += `${libmapbufferjniN.length << (Math.min(Math.abs(3), 1))}`;
      let shoot2 = 6854635 >= cancelP.length;
      do {
         cancelP = `${cancelP.length >> (Math.min(Math.abs(3), 1))}`;
         if (shoot2) {
            break;
         }
      } while ((cancelP.length > 4) && shoot2);
      splashP = 21 <= cancelP.length;
      if (iconsubssuccessr) {
         break;
      }
   } while (iconsubssuccessr && (1 < traminih.length));

    setIsLiveVideoEnd(true);
  }, []);

  const onLiveLoad = useCallback(() => {
       let textT: Map<any, any> = new Map([[String.fromCharCode(116,105,108,101,95,108,95,54,54,0),String.fromCharCode(112,114,101,102,101,114,115,95,52,95,52,51,0)], [String.fromCharCode(115,116,114,105,100,101,115,95,115,95,55,49,0),String.fromCharCode(109,103,109,116,95,48,95,51,53,0)]]);
    let collectionY: Array<any> = [430, 590];
    let pushq = 2;
    let tickg = String.fromCharCode(101,95,53,53,95,119,111,114,100,108,101,110,0);
    let predictiondefault3 = String.fromCharCode(119,95,49,48,95,102,117,115,101,0);
    let switch_yuI = 3.0;
    let path6 = String.fromCharCode(106,95,53,48,95,97,114,101,116,104,101,114,101,0);
    let minimize2: Map<any, any> = new Map([[String.fromCharCode(107,95,55,54,95,108,97,110,103,0),String.fromCharCode(116,114,97,99,107,105,110,103,95,122,95,50,53,0)], [String.fromCharCode(119,97,118,112,97,99,107,95,57,95,50,57,0),String.fromCharCode(98,121,116,101,105,110,95,48,95,53,48,0)]]);
    let librrcz = 4;
    let success9: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,115,105,122,101,95,121,95,55,49,0),true ], [String.fromCharCode(109,95,57,57,95,109,105,103,104,116,0),true ], [String.fromCharCode(114,117,101,95,100,95,57,53,0),true ]]);
    let buildH: Array<any> = [389, 915, 884];
    let relatedy = 5;
    let iconsettingc: Array<any> = [776, 387];
    let anytimel = String.fromCharCode(117,110,114,105,115,101,95,55,95,57,0);
    let greeny = 3.0;
    let iconlogoutQ = 3.0;
   while ((3 >> (Math.min(2, Math.abs(textT.size)))) >= 3) {
      path6 = `${predictiondefault3.length & tickg.length}`;
      break;
   }
   let iconrightorangeI = 7855884 <= minimize2.size;
   do {
       let livenodatabgimgO = String.fromCharCode(119,95,49,48,95,99,108,111,115,101,0);
       let vietnamo = 4;
       let pauses = String.fromCharCode(98,95,55,49,95,112,97,105,114,115,0);
       let disconnectedJ = String.fromCharCode(117,95,57,57,95,100,111,108,108,97,114,0);
       let ksadU = 1.0;
      let tickedg = 5911519.0 <= ksadU;
      do {
         ksadU -= parseFloat(`${pauses.length >> (Math.min(Math.abs(1), 3))}`);
         if (tickedg) {
            break;
         }
      } while (tickedg && ((vietnamo / (Math.max(5, ksadU))) > 4.78));
      while ((vietnamo >> (Math.min(pauses.length, 5))) < 3) {
         pauses = `${disconnectedJ.length}`;
         break;
      }
          let submitB = 5.0;
          let statsnomoredatar = 4;
         vietnamo &= 3 % (Math.max(parseInt(`${ksadU}`), 3));
         submitB /= Math.max(1, parseInt(`${submitB}`));
         statsnomoredatar %= Math.max(statsnomoredatar, 3);
         vietnamo %= Math.max(livenodatabgimgO.length % 2, 3);
      for (let a = 0; a < 1; a++) {
         vietnamo %= Math.max(4, vietnamo << (Math.min(Math.abs(2), 5)));
      }
      while (pauses.length > 3) {
          let sportF = 3;
          let loadingY = String.fromCharCode(112,95,55,54,95,109,111,99,107,101,100,0);
          let giflivestreamingD = true;
         pauses += `${vietnamo}`;
         sportF >>= Math.min(parseInt(`${Math.abs(((giflivestreamingD ? 4 : 4) / (Math.max(sportF, 7))))}`), 2);
         loadingY = `${(String.fromCharCode(82,0) == loadingY ? sportF : loadingY.length)}`;
         giflivestreamingD = loadingY.length <= 48;
         break;
      }
          let goalz = String.fromCharCode(117,95,57,51,95,104,109,97,99,108,105,115,116,0);
          let iconarrowrightq: Array<any> = [205, 176, 660];
          let heartt: Array<any> = [541, 289];
         livenodatabgimgO = `${vietnamo << (Math.min(goalz.length, 2))}`;
         goalz += "3";
         iconarrowrightq.push(2 - iconarrowrightq.length);
         heartt = [heartt.length ^ iconarrowrightq.length];
         disconnectedJ += `${3 >> (Math.min(5, pauses.length))}`;
      for (let d = 0; d < 3; d++) {
         vietnamo /= Math.max(1, 3);
      }
      if (4 <= vietnamo) {
         pauses += `${disconnectedJ.length}`;
      }
      while (1 <= pauses.length) {
          let baiduF = false;
          let baselineS = 4.0;
          let penalty1 = String.fromCharCode(97,108,115,97,95,111,95,50,48,0);
          let yellowscoreballp = String.fromCharCode(115,104,97,114,112,101,110,95,99,95,56,54,0);
         vietnamo /= Math.max(2, 2);
         baiduF = (79 < (penalty1.length - (!baiduF ? penalty1.length : 79)));
         baselineS *= ((baiduF ? 4 : 5) & 1);
         yellowscoreballp = "1";
         break;
      }
         ksadU /= Math.max(parseFloat(`${3 + vietnamo}`), 2);
         ksadU *= parseFloat(`${1}`);
       let submitX: Array<any> = [305, 924, 542];
       let bridgeM: Array<any> = [629, 629];
      while (submitX.length <= pauses.length) {
         submitX = [disconnectedJ.length];
         break;
      }
      minimize2.set(`${ksadU}`, parseInt(`${ksadU}`));
      if (iconrightorangeI) {
         break;
      }
   } while (iconrightorangeI && ((minimize2.size + parseInt(`${switch_yuI}`)) < 1 && (minimize2.size / (Math.max(1, 8))) < 1));
   for (let r = 0; r < 3; r++) {
      buildH.push(success9.size | predictiondefault3.length);
   }
      switch_yuI *= parseFloat(`${1 >> (Math.min(3, tickg.length))}`);
      relatedy -= parseInt(`${switch_yuI}`);
      collectionY.push(2);
   if (5 == (predictiondefault3.length | 2)) {
       let shootnogoalS: Map<any, any> = new Map([[String.fromCharCode(97,95,50,53,95,98,97,99,107,105,110,103,0),false ], [String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,103,95,55,55,0),true ]]);
       let upgradeZ: Array<any> = [String.fromCharCode(115,105,103,105,100,95,109,95,57,50,0), String.fromCharCode(116,97,98,108,101,112,114,105,110,116,95,112,95,55,50,0), String.fromCharCode(119,111,114,107,115,95,107,95,51,48,0)];
      while ((upgradeZ.length % (Math.max(3, shootnogoalS.size))) <= 3 || (shootnogoalS.size % 3) <= 4) {
          let vietnamv = 3;
         shootnogoalS = new Map([[`${shootnogoalS.size}`, upgradeZ.length * shootnogoalS.size]]);
         vietnamv %= Math.max(4, vietnamv);
         break;
      }
          let stringsd = String.fromCharCode(109,115,115,100,115,112,95,121,95,56,55,0);
          let frame_hb_ = String.fromCharCode(115,116,111,112,95,99,95,49,0);
         shootnogoalS.set(stringsd, (stringsd == String.fromCharCode(112,0) ? shootnogoalS.size : stringsd.length));
         frame_hb_ = `${frame_hb_.length}`;
       let favoriteJ: Map<any, any> = new Map([[String.fromCharCode(110,95,55,53,0),String.fromCharCode(118,95,50,55,95,97,105,110,116,105,110,103,0)], [String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,95,57,95,49,48,48,0),String.fromCharCode(121,95,53,50,95,101,109,105,116,116,101,114,0)]]);
       let selectionD: Map<any, any> = new Map([[String.fromCharCode(106,95,55,54,95,115,121,110,99,104,114,111,110,105,122,97,98,108,101,0),44], [String.fromCharCode(107,105,99,107,95,111,95,54,53,0),675], [String.fromCharCode(111,95,50,56,95,101,120,99,108,117,100,101,0),903]]);
      for (let r = 0; r < 3; r++) {
         shootnogoalS = new Map([[`${shootnogoalS.size}`, shootnogoalS.size * upgradeZ.length]]);
      }
      for (let b = 0; b < 1; b++) {
          let basketballM = 3.0;
          let iconplayt = String.fromCharCode(116,95,50,54,95,112,117,98,107,101,121,0);
          let shareblacku = String.fromCharCode(112,110,103,95,102,95,55,48,0);
         upgradeZ = [2];
         basketballM *= (parseFloat(`${shareblacku == String.fromCharCode(51,0) ? parseInt(`${basketballM}`) : shareblacku.length}`));
         iconplayt += `${parseInt(`${basketballM}`)}`;
      }
       let pageu = String.fromCharCode(99,100,110,95,119,95,50,55,0);
      textT = new Map([[`${buildH.length}`, iconsettingc.length % 3]]);
   }
   if ((2 << (Math.min(1, anytimel.length))) > 1) {
      anytimel += `${path6.length + buildH.length}`;
   }
   let defaultplayerimg7 = 5530498 <= relatedy;
   do {
      relatedy *= 2;
      if (defaultplayerimg7) {
         break;
      }
   } while (((2 >> (Math.min(2, path6.length))) > 1) && defaultplayerimg7);
       let cornerl = true;
       let nativeexX = 1.0;
         nativeexX /= Math.max(3, (parseFloat(`${(cornerl ? 4 : 2) - parseInt(`${nativeexX}`)}`)));
         nativeexX -= (parseFloat(`${(cornerl ? 2 : 2) | parseInt(`${nativeexX}`)}`));
       let networkA = String.fromCharCode(111,95,57,51,95,114,103,116,99,117,0);
       let searchbarw = String.fromCharCode(115,101,114,118,101,114,115,95,118,95,55,51,0);
      for (let x = 0; x < 1; x++) {
         nativeexX *= parseFloat(`${searchbarw.length}`);
      }
      for (let k = 0; k < 3; k++) {
          let livenodatabgimgi: Array<any> = [String.fromCharCode(105,95,49,56,95,114,101,112,111,114,116,105,110,103,0), String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,105,95,50,55,0), String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,49,95,52,49,0)];
          let matchinactiveg = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,122,95,54,54,0);
          let gemfileE: Array<any> = [742, 632, 181];
          let specW: Map<any, any> = new Map([[String.fromCharCode(105,112,113,102,95,97,95,49,56,0),true ], [String.fromCharCode(104,105,110,116,115,95,122,95,52,54,0),true ]]);
          let logouser1 = 4;
         cornerl = gemfileE.length > livenodatabgimgi.length;
         livenodatabgimgi.push(specW.size & matchinactiveg.length);
         matchinactiveg += `${logouser1}`;
         gemfileE.push(logouser1);
         specW.set(`${matchinactiveg}`, (matchinactiveg == String.fromCharCode(80,0) ? specW.size : matchinactiveg.length));
      }
      path6 = `${minimize2.size << (Math.min(Math.abs(3), 1))}`;
   let mathj = 7435179 >= success9.size;
   do {
       let type_1ae = String.fromCharCode(122,95,50,48,95,115,112,101,97,107,101,114,115,0);
       let data0 = String.fromCharCode(121,95,49,95,114,112,99,0);
       let mimoG = String.fromCharCode(115,111,102,116,119,97,114,101,95,102,95,55,0);
       let penaltyshootR = 4.0;
       let hooksD = true;
      for (let w = 0; w < 3; w++) {
         data0 += `${(data0 == String.fromCharCode(55,0) ? mimoG.length : data0.length)}`;
      }
      if (3 < (parseInt(`${penaltyshootR}`) - 5) || 3 < (5 | data0.length)) {
         data0 += `${3 + parseInt(`${penaltyshootR}`)}`;
      }
         data0 += `${type_1ae.length}`;
       let iconclosewhitewithbgO = 4.0;
      for (let v = 0; v < 2; v++) {
          let libavutilC = true;
          let v_animationL = true;
          let smallF = String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,95,112,95,56,57,0);
          let iconclosewhiteS = String.fromCharCode(102,111,114,107,95,112,95,52,55,0);
         data0 = `${(mimoG == String.fromCharCode(77,0) ? mimoG.length : type_1ae.length)}`;
         libavutilC = smallF.includes(`${v_animationL}`);
         v_animationL = smallF.length > 22 && iconclosewhiteS.length > 22;
         iconclosewhiteS = "2";
      }
         mimoG += `${data0.length | 2}`;
      let defaultroombgO = String.fromCharCode(51,101,57,50,49,119,100,56,100,113,0) == data0;
      do {
         data0 += `${parseInt(`${iconclosewhitewithbgO}`) << (Math.min(mimoG.length, 1))}`;
         if (defaultroombgO) {
            break;
         }
      } while (defaultroombgO && (3 == (2 ^ data0.length) && 4 == (parseInt(`${penaltyshootR}`) / (Math.max(2, 8)))));
         data0 += `${3 >> (Math.min(4, mimoG.length))}`;
      for (let v = 0; v < 2; v++) {
          let selectionr = String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,107,95,57,51,0);
          let viewsw: Map<any, any> = new Map([[String.fromCharCode(101,95,57,48,95,102,111,108,108,111,119,101,114,115,0),254], [String.fromCharCode(116,95,50,57,95,109,97,121,98,101,0),582]]);
          let z_hashe = String.fromCharCode(112,112,107,104,95,57,95,53,51,0);
          let giftbuttonT = 0.0;
          let recommendation8 = String.fromCharCode(114,101,115,116,97,107,101,95,108,95,57,48,0);
         data0 = `${(z_hashe == String.fromCharCode(70,0) ? viewsw.size : z_hashe.length)}`;
         selectionr = `${recommendation8.length}`;
         viewsw = new Map([[`${giftbuttonT}`, (String.fromCharCode(54,0) == recommendation8 ? recommendation8.length : parseInt(`${giftbuttonT}`))]]);
      }
          let bellreminderd = 2.0;
          let imagenomoredataJ = 3.0;
         hooksD = parseInt(`${penaltyshootR}`) < mimoG.length;
         bellreminderd /= Math.max(4, parseFloat(`${2}`));
         imagenomoredataJ *= 3;
      let time_r8O = type_1ae == String.fromCharCode(109,57,103,53,117,103,113,0);
      do {
         type_1ae = `${1 << (Math.min(2, Math.abs(parseInt(`${iconclosewhitewithbgO}`))))}`;
         if (time_r8O) {
            break;
         }
      } while ((!type_1ae.startsWith(`${penaltyshootR}`)) && time_r8O);
      if ((iconclosewhitewithbgO + 3.37) >= 3.28 || hooksD) {
          let bell0 = String.fromCharCode(100,95,52,55,95,114,99,118,100,0);
         hooksD = 51.82 == iconclosewhitewithbgO;
         bell0 = `${bell0.length}`;
      }
      let static_qM = data0 == String.fromCharCode(95,108,120,100,97,53,118,57,102,50,0);
      do {
         data0 += `${1 >> (Math.min(Math.abs(parseInt(`${penaltyshootR}`)), 5))}`;
         if (static_qM) {
            break;
         }
      } while (static_qM && (data0.length <= type_1ae.length));
       let grayN = String.fromCharCode(110,95,55,53,95,115,101,114,105,97,108,105,122,101,114,0);
       let tempnodatagifn = String.fromCharCode(114,102,116,98,115,117,98,95,49,95,50,57,0);
         tempnodatagifn = "3";
      success9 = new Map([[`${success9.size}`, path6.length]]);
      if (mathj) {
         break;
      }
   } while (((5 >> (Math.min(2, Math.abs(librrcz)))) == 2 || (5 >> (Math.min(1, Math.abs(librrcz)))) == 5) && mathj);
   while (5.67 <= greeny) {
       let awayplayerm = String.fromCharCode(111,95,53,57,95,99,111,111,114,100,115,0);
       let libimagepipelineI: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,111,110,95,57,95,49,51,0),970], [String.fromCharCode(115,116,114,105,112,112,101,100,95,54,95,51,57,0),449], [String.fromCharCode(100,101,98,97,110,100,95,121,95,52,49,0),145]]);
       let membershipv = 0.0;
       let scrollviewa = 1;
         membershipv /= Math.max(parseInt(`${membershipv}`), 4);
          let iconclosek: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,54,95,50,54,0),String.fromCharCode(102,95,52,52,95,109,105,103,114,97,116,101,0)], [String.fromCharCode(114,95,52,49,95,102,105,120,101,100,0),String.fromCharCode(112,114,111,99,101,115,115,95,114,95,51,55,0)]]);
         membershipv += awayplayerm.length << (Math.min(Math.abs(3), 3));
         iconclosek = new Map([[`${iconclosek.size}`, iconclosek.size % 1]]);
      let time_gh = scrollviewa <= 7856131;
      do {
         scrollviewa |= parseInt(`${membershipv}`) << (Math.min(Math.abs(libimagepipelineI.size), 4));
         if (time_gh) {
            break;
         }
      } while ((4 <= (libimagepipelineI.size * 5)) && time_gh);
          let imagenetworkerrK = false;
          let pageq = 2;
          let volumed = String.fromCharCode(108,95,51,56,0);
         scrollviewa %= Math.max((awayplayerm == String.fromCharCode(82,0) ? awayplayerm.length : libimagepipelineI.size), 1);
         imagenetworkerrK = volumed.length > 29 || !imagenetworkerrK;
         pageq ^= pageq;
         volumed += `${volumed.length / 3}`;
      let inactiveM = 5809621.0 <= membershipv;
      do {
         membershipv += 1;
         if (inactiveM) {
            break;
         }
      } while (((awayplayerm.length << (Math.min(Math.abs(2), 1))) == 3) && inactiveM);
         awayplayerm += `${parseInt(`${membershipv}`) * awayplayerm.length}`;
         membershipv -= (awayplayerm == String.fromCharCode(69,0) ? awayplayerm.length : scrollviewa);
      for (let v = 0; v < 3; v++) {
          let giflivestreamingL = String.fromCharCode(119,95,53,55,95,99,111,109,112,111,115,101,114,0);
          let signinup_ = 3;
          let filledi = String.fromCharCode(120,95,53,55,95,106,112,101,103,105,110,116,0);
          let eighteen1 = true;
         awayplayerm += `${(String.fromCharCode(88,0) == awayplayerm ? awayplayerm.length : scrollviewa)}`;
         giflivestreamingL = `${filledi.length << (Math.min(Math.abs(3), 4))}`;
         signinup_ &= (3 / (Math.max(8, (eighteen1 ? 4 : 3))));
         filledi = `${signinup_}`;
      }
         scrollviewa &= 2 & awayplayerm.length;
      for (let v = 0; v < 1; v++) {
          let libcxxcomponentsl = String.fromCharCode(105,112,102,115,95,99,95,56,48,0);
          let watchW = 1.0;
          let libreactnativeblobd: Array<any> = [83, 778, 603];
         membershipv -= 2;
         libcxxcomponentsl = `${libcxxcomponentsl.length | libreactnativeblobd.length}`;
         watchW *= 1;
         libreactnativeblobd.push(1);
      }
      while (awayplayerm.length >= libimagepipelineI.size) {
         libimagepipelineI.set(awayplayerm, libimagepipelineI.size % (Math.max(awayplayerm.length, 8)));
         break;
      }
       let userl = String.fromCharCode(101,95,57,54,95,110,118,111,105,99,101,0);
      greeny /= Math.max(5, 1 >> (Math.min(2, iconsettingc.length)));
      break;
   }
   if (4 > collectionY.length) {
      collectionY.push(1);
   }
   if ((buildH.length << (Math.min(4, collectionY.length))) < 3) {
      collectionY = [librrcz ^ relatedy];
   }
       let expandm = String.fromCharCode(119,95,54,56,95,105,110,116,101,110,116,115,0);
       let viewerb = String.fromCharCode(99,95,49,48,95,108,111,99,0);
       let headerJ = String.fromCharCode(117,115,101,114,115,95,51,95,57,55,0);
       let teamdetailsbgk = 0.0;
       let iconclosewhitebgd = 2;
      greeny -= minimize2.size & parseInt(`${switch_yuI}`);
      expandm = `${expandm.length}`;
      tickg = `${tickg.length % (Math.max(predictiondefault3.length, 3))}`;
       let paginationO: Array<any> = [578, 973, 908];
       let tempY: Array<any> = [258, 373, 859];
       let referreri = true;
         referreri = tempY.length == 87;
      if (!referreri && 1 >= (4 | paginationO.length)) {
         referreri = paginationO.includes(tempY[tempY.length - 1]);
      }
      let videovarh = 5091038 >= paginationO.length;
      do {
         paginationO.push(paginationO.length * 3);
         if (videovarh) {
            break;
         }
      } while (videovarh && ((1 ^ tempY.length) <= 4));
      if (!referreri) {
         paginationO = [tempY.length];
      }
      if (paginationO.includes(tempY.length)) {
         tempY.push(((referreri ? 5 : 4) ^ tempY.length));
      }
         referreri = paginationO.length <= 63;
      let temps = 7960221 >= tempY.length;
      do {
          let iconarrowrightwhiteS = 5.0;
         tempY.push(3);
         iconarrowrightwhiteS -= parseFloat(`${parseInt(`${iconarrowrightwhiteS}`)}`);
         if (temps) {
            break;
         }
      } while (((tempY.length % (Math.max(paginationO.length, 4))) == 1 || 1 == (paginationO.length % 1)) && temps);
      if (4 <= tempY.length) {
          let basketballplayerplaceholderz: Map<any, any> = new Map([[String.fromCharCode(114,111,112,115,116,101,110,95,122,95,51,52,0),136], [String.fromCharCode(99,114,111,115,115,111,118,101,114,95,101,95,54,0),903], [String.fromCharCode(109,115,101,120,95,102,95,51,49,0),111]]);
          let anythinkL = String.fromCharCode(122,95,56,48,95,100,111,99,117,109,101,110,116,0);
         referreri = 69 < paginationO.length;
         basketballplayerplaceholderz = new Map([[`${basketballplayerplaceholderz.size}`, 3]]);
         anythinkL += `${basketballplayerplaceholderz.size * anythinkL.length}`;
      }
      let scorepopsound9 = 8530673 >= paginationO.length;
      do {
         paginationO.push(tempY.length * 2);
         if (scorepopsound9) {
            break;
         }
      } while (((paginationO.length + tempY.length) > 4 && (4 + tempY.length) > 3) && scorepopsound9);
      path6 = `${parseInt(`${greeny}`) * 1}`;
      minimize2 = new Map([[`${iconsettingc.length}`, (anytimel == String.fromCharCode(100,0) ? anytimel.length : iconsettingc.length)]]);
   for (let u = 0; u < 2; u++) {
      buildH.push(iconsettingc.length * textT.size);
   }
      anytimel += `${(String.fromCharCode(106,0) == predictiondefault3 ? predictiondefault3.length : collectionY.length)}`;
   while (success9.size == 2) {
      success9 = new Map([[tickg, 1]]);
      break;
   }
   let targetm = 8508102 >= minimize2.size;
   do {
      minimize2 = new Map([[path6, path6.length + tickg.length]]);
      if (targetm) {
         break;
      }
   } while (targetm && (1 < minimize2.size));
      predictiondefault3 += `${relatedy ^ tickg.length}`;
   for (let x = 0; x < 2; x++) {
      greeny *= iconsettingc.length;
   }
   while ((tickg.length - success9.size) == 5 && (5 - tickg.length) == 2) {
      tickg += "3";
      break;
   }
   while ((textT.size * path6.length) < 1 && 1 < (1 * path6.length)) {
      path6 = "1";
      break;
   }

    setIsLiveVideoEnd(false);
  }, []);

  useEffect(() => {
    if (match != undefined && match.streams != undefined) {
      const videoUrl = parseVideoURL(match?.streams[0].src);
      setVideoSource({ type: VideoLiveType.LIVE, url: videoUrl });
    }
  }, [match]);

  const handleFullscreenChange = (isFullscreen: boolean) => {
    if (isFullscreen) {
      
      setIsNavVisible(false);

      
      setTimeout(() => {
        setIsNavVisible(true);
      }, 3000); 
    }
  };

  useEffect(() => {
    handleFullscreenChange(screenState.isPlayerFullScreen);
  }, [screenState.isPlayerFullScreen]);
  
  
  

  
  
  
  
  

  //   return () => clearInterval(hideNavInterval);
  

  
  
  
  

  //   return () => clearInterval(unsub)
  

  useEffect(() => {
    if (!showBecomeVIPOverlay && screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !isVip) {
      setShowBecomeVIPOverlay(true);

      
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportDetailsVipPopupTimesAnalytics();
      
    }

  }, [screenState.sportWatchTime, showBecomeVIPOverlay])

  useFocusEffect(useCallback(() => {
    if (!showBecomeVIPOverlay && screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !isVip) {

      setShowBecomeVIPOverlay(true);
    } else if (!showBecomeVIPOverlay) {
      videoRef.current?.setPause(false);
    }
  }, [showBecomeVIPOverlay]))

  const isFullyLoaded = !f1 && !f2 && !f3;

  

  const insets = useSafeAreaInsets();

  if (Platform.OS === 'android') {
    insetsTop = insets.top;
    insetsBottom = insets.bottom;
  } else {
    insetsTop = insetsTop == 0 ? insets.top : insetsTop;
    insetsBottom = insetsBottom == 0 ? insets.bottom : insets.bottom;
  }

  const fetchBannerAd = async () => {
       let saveG: Map<any, any> = new Map([[String.fromCharCode(106,109,108,105,115,116,95,99,95,49,49,0),true ], [String.fromCharCode(113,95,55,55,95,109,117,108,109,111,100,0),true ]]);
    let sheetz = String.fromCharCode(98,111,117,110,100,97,114,105,101,115,95,106,95,49,48,48,0);
    let livenodatabgimgq: Map<any, any> = new Map([[String.fromCharCode(108,95,52,54,95,98,97,110,100,101,100,0),126], [String.fromCharCode(120,95,53,54,95,99,111,110,116,114,97,99,116,115,0),915], [String.fromCharCode(107,95,55,53,95,100,105,115,112,97,116,99,104,0),820]]);
    let layoutV = String.fromCharCode(120,102,105,120,101,115,95,48,95,55,50,0);
    let terms6 = true;
    let libhermesZ = String.fromCharCode(115,101,97,114,99,104,105,110,103,95,103,95,53,48,0);
    let libreactj = 1.0;
    let iconmorek = true;
    let emojihearth = 4.0;
    let goallogoq: Map<any, any> = new Map([[String.fromCharCode(118,108,99,111,100,101,99,95,106,95,56,48,0),498], [String.fromCharCode(97,95,52,52,95,100,97,116,97,104,97,115,104,0),319]]);
   let abouto = 7161664 <= livenodatabgimgq.size;
   do {
      livenodatabgimgq = new Map([[layoutV, (layoutV.length + (terms6 ? 3 : 4))]]);
      if (abouto) {
         break;
      }
   } while (((sheetz.length & livenodatabgimgq.size) < 2 || 2 < (sheetz.length & livenodatabgimgq.size)) && abouto);
   let mappingz = terms6 ? !terms6 : terms6;
   do {
      terms6 = libhermesZ == String.fromCharCode(99,0);
      if (mappingz) {
         break;
      }
   } while ((sheetz.length < 1) && mappingz);
   let model6 = 7615039 <= livenodatabgimgq.size;
   do {
      livenodatabgimgq.set(libhermesZ, libhermesZ.length / 3);
      if (model6) {
         break;
      }
   } while (model6 && (saveG.size <= 1));
   for (let c = 0; c < 3; c++) {
      terms6 = sheetz.length < 14;
   }

    const bannerRes = await wawaFlagStations.getBannerAd(111);

   let final_18 = sheetz == String.fromCharCode(108,55,113,51,0);
   do {
       let orangedownarrow6 = String.fromCharCode(119,95,57,55,0);
       let iconmegaphoneq = true;
         orangedownarrow6 += `${((iconmegaphoneq ? 1 : 3))}`;
         orangedownarrow6 = `${((iconmegaphoneq ? 5 : 3) >> (Math.min(Math.abs(1), 1)))}`;
          let foregroundM = 2;
         iconmegaphoneq = (46 > ((iconmegaphoneq ? orangedownarrow6.length : 46) / (Math.max(orangedownarrow6.length, 9))));
         foregroundM |= foregroundM;
      while (!orangedownarrow6.startsWith(`${iconmegaphoneq}`)) {
         orangedownarrow6 = `${3 >> (Math.min(2, orangedownarrow6.length))}`;
         break;
      }
      for (let t = 0; t < 3; t++) {
          let register_0M = String.fromCharCode(105,108,98,99,100,97,116,97,95,112,95,50,55,0);
          let leakcheckerS = String.fromCharCode(100,105,115,99,111,118,101,114,95,110,95,50,55,0);
          let c_titlee = false;
         iconmegaphoneq = c_titlee;
         register_0M = `${register_0M.length % 2}`;
         leakcheckerS += `${leakcheckerS.length}`;
      }
          let cornershootQ = 1;
          let libreanimatedW = false;
         iconmegaphoneq = !libreanimatedW || orangedownarrow6.length == 65;
         cornershootQ &= cornershootQ;
         libreanimatedW = cornershootQ < cornershootQ;
      sheetz = `${((terms6 ? 4 : 1) % (Math.max(sheetz.length, 6)))}`;
      if (final_18) {
         break;
      }
   } while (final_18 && ((saveG.size - sheetz.length) == 2));
   while (1 > (saveG.size & 3) || 4 > (saveG.size & 3)) {
      saveG.set(`${libreactj}`, parseInt(`${libreactj}`));
      break;
   }
   for (let j = 0; j < 1; j++) {
       let baseH: Map<any, any> = new Map([[String.fromCharCode(115,95,57,53,95,116,97,98,108,101,103,101,110,0),713], [String.fromCharCode(114,101,108,97,121,115,95,114,95,52,49,0),393], [String.fromCharCode(112,114,111,109,105,115,101,95,55,95,49,56,0),173]]);
       let bodanS = String.fromCharCode(116,95,49,51,95,100,111,119,110,115,116,114,101,97,109,0);
      if (bodanS.includes(`${baseH.size}`)) {
         baseH.set(`${bodanS}`, baseH.size);
      }
          let fastj = 5.0;
          let basketballdetailsbgu: Map<any, any> = new Map([[String.fromCharCode(115,95,53,54,95,109,115,101,112,115,110,114,0),108], [String.fromCharCode(120,95,55,51,95,101,120,112,111,110,101,110,116,0),809]]);
         baseH.set(`${fastj}`, 2);
         fastj /= Math.max(4, basketballdetailsbgu.size >> (Math.min(Math.abs(basketballdetailsbgu.size), 4)));
      if ((2 << (Math.min(2, Math.abs(baseH.size)))) < 1) {
         bodanS += `${baseH.size}`;
      }
         bodanS += `${bodanS.length - 1}`;
         baseH = new Map([[`${baseH.size}`, bodanS.length / 1]]);
         bodanS += `${(String.fromCharCode(82,0) == bodanS ? bodanS.length : baseH.size)}`;
      sheetz = `${parseInt(`${libreactj}`)}`;
   }
   while (sheetz.endsWith(`${saveG.size}`)) {
       let kick5 = String.fromCharCode(101,112,111,99,104,95,104,95,49,52,0);
       let bellreminder4 = String.fromCharCode(114,101,97,115,115,101,109,98,108,101,114,95,109,95,57,0);
       let fill8: Array<any> = [347, 449];
       let libimagepipelineI = 0.0;
       let soundh = String.fromCharCode(97,95,49,52,95,110,105,98,0);
      let componentsb = bellreminder4.length <= 5947343;
      do {
         bellreminder4 = `${soundh.length & bellreminder4.length}`;
         if (componentsb) {
            break;
         }
      } while ((kick5.length == bellreminder4.length) && componentsb);
      while (bellreminder4.length == kick5.length) {
          let actionsK: Map<any, any> = new Map([[String.fromCharCode(120,95,51,53,95,100,101,99,108,97,114,101,100,0),901], [String.fromCharCode(114,101,112,111,114,116,105,110,103,95,55,95,52,48,0),232], [String.fromCharCode(119,95,51,56,95,117,100,112,108,105,116,101,0),873]]);
          let matchdetailbgT = 3;
          let dist0 = 3.0;
          let basketballplayerplaceholderK: Array<any> = [14, 52];
          let langkeyM = String.fromCharCode(113,95,56,49,95,104,97,110,100,108,101,0);
         bellreminder4 = `${kick5.length % (Math.max(langkeyM.length, 4))}`;
         actionsK.set(`${basketballplayerplaceholderK.length}`, basketballplayerplaceholderK.length % 3);
         matchdetailbgT %= Math.max(2, parseInt(`${dist0}`) - 3);
         dist0 += 1;
         langkeyM = `${actionsK.size * 3}`;
         break;
      }
         fill8 = [2];
      if ((soundh.length / (Math.max(4, parseInt(`${libimagepipelineI}`)))) <= 2 && (libimagepipelineI / 5.16) <= 1.44) {
          let sellI = 3.0;
         soundh = `${(bellreminder4 == String.fromCharCode(83,0) ? bellreminder4.length : fill8.length)}`;
         sellI /= Math.max(5, parseFloat(`${parseInt(`${sellI}`) >> (Math.min(2, Math.abs(2)))}`));
      }
      if (libimagepipelineI > 3.0) {
          let iconorientation2 = false;
          let inouttargetyellowr = String.fromCharCode(114,105,110,103,95,105,95,51,48,0);
          let playershirtH = String.fromCharCode(101,95,52,51,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0);
          let benefitr: Array<any> = [848, 544];
          let librrcc: Array<any> = [364, 674, 891];
         soundh = `${2 | bellreminder4.length}`;
         iconorientation2 = ((benefitr.length % (Math.max(4, (iconorientation2 ? 49 : benefitr.length)))) <= 49);
         inouttargetyellowr += `${(playershirtH.length & (iconorientation2 ? 5 : 4))}`;
         playershirtH = `${playershirtH.length}`;
         librrcc.push((playershirtH == String.fromCharCode(78,0) ? benefitr.length : playershirtH.length));
      }
      if ((kick5.length / 4) > 2) {
         kick5 += `${soundh.length}`;
      }
      if (libimagepipelineI >= parseFloat(`${kick5.length}`)) {
          let awayteamfieldc = true;
          let invites = String.fromCharCode(115,116,111,114,97,103,101,115,95,49,95,52,55,0);
          let main_jW = 0.0;
          let leaguedetailsbgZ = String.fromCharCode(98,108,111,99,107,100,115,112,95,99,95,51,49,0);
          let fullscreenmaxD = 3.0;
         libimagepipelineI -= parseFloat(`${parseInt(`${main_jW}`)}`);
         awayteamfieldc = ((invites.length << (Math.min(4, Math.abs((awayteamfieldc ? invites.length : 83))))) < 83);
         main_jW += leaguedetailsbgZ.length / 1;
         leaguedetailsbgZ += `${parseInt(`${fullscreenmaxD}`) % (Math.max(invites.length, 7))}`;
         fullscreenmaxD /= Math.max(parseInt(`${fullscreenmaxD}`), 1);
      }
          let viewerb = 2;
          let ksadb = String.fromCharCode(100,105,115,115,111,108,118,101,95,112,95,54,48,0);
         fill8.push(3);
         viewerb &= (String.fromCharCode(85,0) == ksadb ? viewerb : ksadb.length);
         soundh = `${(String.fromCharCode(49,0) == bellreminder4 ? bellreminder4.length : kick5.length)}`;
      let iconarrowrightblackG = 8889503 >= bellreminder4.length;
      do {
         bellreminder4 += `${fill8.length}`;
         if (iconarrowrightblackG) {
            break;
         }
      } while ((soundh.length > 5) && iconarrowrightblackG);
         bellreminder4 = `${fill8.length}`;
      while (2.12 <= (libimagepipelineI + 2.51)) {
         libimagepipelineI *= parseFloat(`${3}`);
         break;
      }
          let sendd = String.fromCharCode(120,95,57,57,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0);
          let ksadt = String.fromCharCode(121,95,53,49,95,99,108,105,112,0);
          let sharewhiteo = 5.0;
         kick5 = `${soundh.length - 2}`;
         sendd = `${ksadt.length % (Math.max(10, sendd.length))}`;
         ksadt += `${parseInt(`${sharewhiteo}`) >> (Math.min(ksadt.length, 1))}`;
         sharewhiteo -= parseFloat(`${sendd.length}`);
      while (fill8.length >= soundh.length) {
         fill8.push(fill8.length << (Math.min(Math.abs(1), 1)));
         break;
      }
          let infoo: Array<any> = [901, 284, 841];
         bellreminder4 += `${2 >> (Math.min(5, infoo.length))}`;
      saveG = new Map([[`${libimagepipelineI}`, parseInt(`${libimagepipelineI}`)]]);
      break;
   }
    const banner = bannerRes.ads;

       let fillc = String.fromCharCode(99,95,52,57,95,105,109,112,111,115,115,105,98,108,101,0);
         fillc = `${fillc.length >> (Math.min(fillc.length, 1))}`;
      while (fillc != fillc) {
         fillc += `${fillc.length & fillc.length}`;
         break;
      }
          let modey = String.fromCharCode(99,111,114,114,95,48,95,55,55,0);
          let arrowdownn = 3.0;
         fillc = `${parseInt(`${arrowdownn}`)}`;
         modey = `${(modey == String.fromCharCode(66,0) ? modey.length : modey.length)}`;
         arrowdownn += 2;
      layoutV += `${livenodatabgimgq.size << (Math.min(Math.abs(2), 1))}`;
   while (libhermesZ == String.fromCharCode(68,0)) {
       let iconsettinga = 0.0;
       let libfabricjnih = false;
       let minis: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,114,114,97,121,95,106,95,55,48,0),973], [String.fromCharCode(101,120,112,95,104,95,51,53,0),16], [String.fromCharCode(97,99,99,117,114,97,116,101,95,115,95,57,53,0),326]]);
       let grey1 = false;
      while (iconsettinga < 5.53 && (iconsettinga * 5.53) < 4.74) {
         iconsettinga -= (parseFloat(`${(grey1 ? 1 : 4) << (Math.min(Math.abs(parseInt(`${iconsettinga}`)), 5))}`));
         break;
      }
      if (1 >= minis.size || 2 >= (1 >> (Math.min(2, Math.abs(minis.size))))) {
         minis.set(`${iconsettinga}`, parseInt(`${iconsettinga}`));
      }
         iconsettinga /= Math.max(2, (parseFloat(`${(grey1 ? 1 : 3) << (Math.min(Math.abs(parseInt(`${iconsettinga}`)), 2))}`)));
       let mbbidk: Array<any> = [266, 528, 439];
         grey1 = minis.size > 90;
      let dragE = minis.size >= 9222662;
      do {
          let graphM = 5.0;
         minis.set(`${grey1}`, ((grey1 ? 3 : 4) & minis.size));
         graphM -= parseInt(`${graphM}`);
         if (dragE) {
            break;
         }
      } while (dragE && (!grey1 && 5 < (5 | minis.size)));
      if (1 == (4 * mbbidk.length) || 3.26 == (iconsettinga - 4.45)) {
         mbbidk = [2];
      }
      for (let u = 0; u < 1; u++) {
         libfabricjnih = (libfabricjnih ? grey1 : !libfabricjnih);
      }
      while (5.23 > iconsettinga) {
         iconsettinga /= Math.max(4, (parseFloat(`${1 >> (Math.min(1, Math.abs((grey1 ? 5 : 3))))}`)));
         break;
      }
          let iconclosewhitewithbgI: Array<any> = [227, 740, 728];
          let iconarrowleftu = 3.0;
         iconsettinga /= Math.max((parseFloat(`${3 >> (Math.min(2, Math.abs((grey1 ? 1 : 1))))}`)), 5);
         iconclosewhitewithbgI.push(3);
         iconarrowleftu /= Math.max(iconclosewhitewithbgI.length, 1);
      while ((5 ^ minis.size) <= 1) {
         minis.set(`${libfabricjnih}`, ((libfabricjnih ? 1 : 4) * mbbidk.length));
         break;
      }
       let indexe = String.fromCharCode(110,95,57,53,95,116,97,112,101,115,0);
      layoutV += `${livenodatabgimgq.size & saveG.size}`;
      break;
   }
   if (!terms6) {
       let basketballplayerplaceholderD = 4.0;
       let assistd = 3;
       let iconuserq = String.fromCharCode(118,95,49,95,119,114,105,116,101,99,108,101,97,114,0);
       let whistle8: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,115,95,118,95,49,52,0),String.fromCharCode(115,101,116,102,100,95,55,95,54,57,0)], [String.fromCharCode(113,95,54,52,95,113,117,97,100,0),String.fromCharCode(97,115,115,101,116,115,95,117,95,54,57,0)]]);
       let incident5: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,111,110,115,95,51,95,55,55,0),0], [String.fromCharCode(109,111,100,101,99,111,110,116,95,119,95,57,52,0),382], [String.fromCharCode(117,95,57,48,95,108,105,110,107,105,110,103,0),859]]);
      for (let z = 0; z < 1; z++) {
          let shootnogoalv: Array<any> = [836, 693];
         basketballplayerplaceholderD *= parseFloat(`${whistle8.size}`);
         shootnogoalv.push(2);
      }
         assistd %= Math.max(3, 1);
      while ((2 * iconuserq.length) < 5 && (2 * iconuserq.length) < 5) {
         iconuserq += `${assistd & 1}`;
         break;
      }
         basketballplayerplaceholderD *= parseFloat(`${assistd - incident5.size}`);
       let iconpipexpandQ = 2.0;
      if (4 == (whistle8.size - parseInt(`${basketballplayerplaceholderD}`))) {
         whistle8.set(iconuserq, 2);
      }
       let p_centerP = false;
       let foregroundV = true;
          let owngoalE: Map<any, any> = new Map([[String.fromCharCode(114,101,115,117,108,116,115,95,111,95,50,54,0),false ], [String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,106,95,56,50,0),true ]]);
         foregroundV = 9.23 <= iconpipexpandQ;
         owngoalE = new Map([[`${owngoalE.size}`, owngoalE.size / (Math.max(owngoalE.size, 10))]]);
      terms6 = sheetz == String.fromCharCode(95,0);
   }
   let refreshborderlessF = 9037448 >= layoutV.length;
   do {
      layoutV = `${livenodatabgimgq.size}`;
      if (refreshborderlessF) {
         break;
      }
   } while ((layoutV.length > livenodatabgimgq.size) && refreshborderlessF);

    if (banner) {

   if (4.42 > (libreactj - 3.69)) {
       let questicony: Array<any> = [650, 246, 46];
       let cast8 = 3;
       let typingloadingx = String.fromCharCode(102,95,56,95,115,99,97,110,0);
       let sellmathbackgroundA = false;
      while (5 >= (cast8 - 2)) {
         cast8 += cast8 ^ 2;
         break;
      }
       let libreactperfloggerjnit = String.fromCharCode(110,111,114,109,97,108,105,122,101,95,110,95,55,49,0);
      if (typingloadingx.startsWith(`${sellmathbackgroundA}`)) {
         sellmathbackgroundA = typingloadingx.length > 26 || !sellmathbackgroundA;
      }
      let mbridgei = String.fromCharCode(98,112,107,105,117,98,98,118,51,0) == typingloadingx;
      do {
         typingloadingx += `${((sellmathbackgroundA ? 3 : 4))}`;
         if (mbridgei) {
            break;
         }
      } while ((!sellmathbackgroundA) && mbridgei);
      if (2 < libreactperfloggerjnit.length) {
         libreactperfloggerjnit += `${cast8}`;
      }
      for (let f = 0; f < 3; f++) {
          let textinputI: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,116,97,107,101,111,117,116,0),String.fromCharCode(102,95,55,50,95,98,117,108,108,101,116,0)], [String.fromCharCode(108,95,50,53,95,98,116,111,98,105,110,0),String.fromCharCode(99,100,97,116,97,95,100,95,50,49,0)], [String.fromCharCode(119,95,49,56,95,103,101,111,109,101,116,114,121,0),String.fromCharCode(114,95,57,55,95,116,114,101,102,0)]]);
         sellmathbackgroundA = questicony.length == 48;
         textinputI.set(`${textinputI.size}`, 1 >> (Math.min(5, Math.abs(textinputI.size))));
      }
       let turndownZ = 5.0;
       let policyI = 0.0;
      if (policyI >= turndownZ) {
         turndownZ -= parseFloat(`${cast8 - 3}`);
      }
         questicony = [parseInt(`${turndownZ}`) % (Math.max(libreactperfloggerjnit.length, 4))];
      if ((policyI + 4.27) == 4.40 && (turndownZ / 4.27) == 5.23) {
          let disconnectedlogom = 2;
          let sinao = 3.0;
          let iconclosewhitewithbgE = String.fromCharCode(99,97,108,99,117,97,108,116,101,95,107,95,56,0);
          let iconsettingL = String.fromCharCode(101,95,52,48,95,97,97,99,115,98,114,100,97,116,97,0);
          let reactnativeratingsf: Array<any> = [237, 790, 119];
         policyI += parseFloat(`${questicony.length + iconsettingL.length}`);
         disconnectedlogom >>= Math.min(2, Math.abs(parseInt(`${sinao}`) | 3));
         sinao /= Math.max(4, disconnectedlogom + 2);
         iconclosewhitewithbgE += `${iconclosewhitewithbgE.length}`;
         iconsettingL = `${reactnativeratingsf.length - 3}`;
         reactnativeratingsf.push((String.fromCharCode(120,0) == iconclosewhitewithbgE ? iconclosewhitewithbgE.length : parseInt(`${sinao}`)));
      }
       let iconarrowleftf = String.fromCharCode(100,101,112,116,104,95,104,95,51,52,0);
       let iconshare2 = String.fromCharCode(117,95,54,51,95,109,111,100,105,102,121,0);
      if (!iconarrowleftf.startsWith(`${typingloadingx.length}`)) {
         iconarrowleftf = `${parseInt(`${policyI}`) / 2}`;
      }
      livenodatabgimgq.set(`${libreactj}`, questicony.length);
   }
      sheetz += `${3 ^ saveG.size}`;
   if (!iconmorek) {
      saveG = new Map([[`${libreactj}`, libhermesZ.length]]);
   }
   while (2 > (2 << (Math.min(3, Math.abs(saveG.size)))) || (sheetz.length << (Math.min(Math.abs(2), 4))) > 3) {
       let hongkongv = 1.0;
         hongkongv /= Math.max(5, 1 & parseInt(`${hongkongv}`));
       let cores = 3.0;
       let dist2 = 4.0;
         cores -= parseFloat(`${parseInt(`${dist2}`)}`);
      sheetz += `${((iconmorek ? 1 : 3))}`;
      break;
   }
      setBannerAd(banner);
    } else {

      iconmorek = sheetz.length >= 2;
       let plusn = String.fromCharCode(99,104,97,110,103,101,114,101,102,95,110,95,50,0);
       let statsw = String.fromCharCode(111,103,103,100,101,99,95,111,95,56,50,0);
          let livenodatabgimgw = false;
          let dependenciesA = String.fromCharCode(122,95,57,54,95,104,112,114,101,100,0);
          let arrowselectdownt = 1.0;
         statsw = `${((livenodatabgimgw ? 1 : 1))}`;
         livenodatabgimgw = String.fromCharCode(114,0) == dependenciesA;
         dependenciesA = `${1 - parseInt(`${arrowselectdownt}`)}`;
         arrowselectdownt /= Math.max(1, 3);
      if (plusn.endsWith(`${statsw.length}`)) {
         plusn = `${statsw.length ^ plusn.length}`;
      }
      terms6 = layoutV.length <= livenodatabgimgq.size;
   while (!sheetz.includes(`${libreactj}`)) {
      libreactj += parseFloat(`${3}`);
      break;
   }
       let predictionbuttonh = 2;
       let orangedownarrowQ = 1.0;
       let bannerU = 4.0;
      for (let r = 0; r < 1; r++) {
          let emojin = String.fromCharCode(99,95,56,57,95,97,105,116,101,114,0);
          let contextp: Map<any, any> = new Map([[String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,113,95,54,51,0),false ], [String.fromCharCode(115,105,109,117,108,97,116,101,95,49,95,49,51,0),false ]]);
          let bell2 = 5.0;
          let middleK = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,52,95,50,56,0);
          let mail2 = String.fromCharCode(114,95,53,55,95,114,101,108,111,103,105,110,0);
         orangedownarrowQ += middleK.length + parseInt(`${bannerU}`);
         emojin += `${mail2.length}`;
         contextp.set(`${mail2}`, 2 >> (Math.min(4, mail2.length)));
         bell2 -= parseFloat(`${contextp.size | emojin.length}`);
         middleK += `${emojin.length ^ 3}`;
      }
          let modew = String.fromCharCode(99,111,110,116,105,110,117,101,100,95,117,95,52,51,0);
          let imagenetworkerrw = String.fromCharCode(120,95,50,54,95,99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0);
          let questiconz = 2.0;
         orangedownarrowQ -= 3;
         modew = `${(modew == String.fromCharCode(48,0) ? imagenetworkerrw.length : modew.length)}`;
         imagenetworkerrw += `${imagenetworkerrw.length / 3}`;
         questiconz += parseFloat(`${1 - parseInt(`${questiconz}`)}`);
      let bottomN = 8997325.0 <= orangedownarrowQ;
      do {
          let orientation6 = 1.0;
          let umengf: Array<any> = [856, 837, 87];
          let dependencyj: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,101,101,114,95,104,95,57,54,0),false ], [String.fromCharCode(113,95,52,55,95,104,109,97,99,108,105,115,116,0),false ]]);
          let homeplayerJ: Array<any> = [144, 484, 436];
          let reactnativejs7 = String.fromCharCode(114,95,50,50,0);
         orangedownarrowQ *= 2;
         orientation6 += parseFloat(`${1 ^ dependencyj.size}`);
         umengf = [umengf.length];
         dependencyj = new Map([[`${umengf.length}`, umengf.length | 3]]);
         homeplayerJ = [homeplayerJ.length >> (Math.min(Math.abs(2), 1))];
         reactnativejs7 += "1";
         if (bottomN) {
            break;
         }
      } while ((orangedownarrowQ < 4.99) && bottomN);
      let libhermes4 = 7154485.0 <= bannerU;
      do {
         bannerU *= parseFloat(`${1 % (Math.max(2, parseInt(`${orangedownarrowQ}`)))}`);
         if (libhermes4) {
            break;
         }
      } while ((3 < (predictionbuttonh / (Math.max(1, 1))) || 3 < (1 % (Math.max(8, predictionbuttonh)))) && libhermes4);
       let popupu = 2.0;
      let whiteanimationlivei = predictionbuttonh <= 6896287;
      do {
          let awayi = false;
          let sourceg = 2.0;
          let anythinkX = String.fromCharCode(100,101,99,111,100,101,114,115,95,102,95,52,51,0);
         predictionbuttonh *= 3;
         awayi = 56.68 < sourceg;
         sourceg /= Math.max(((awayi ? 2 : 4) % (Math.max(anythinkX.length, 8))), 4);
         anythinkX = `${2 & parseInt(`${sourceg}`)}`;
         if (whiteanimationlivei) {
            break;
         }
      } while ((2.33 <= (orangedownarrowQ - predictionbuttonh)) && whiteanimationlivei);
          let commentG = String.fromCharCode(114,95,57,48,95,116,98,108,104,100,114,0);
          let expired8 = String.fromCharCode(101,95,49,57,95,115,107,101,121,0);
         popupu *= 1;
         commentG += `${expired8.length}`;
         expired8 += `${expired8.length * commentG.length}`;
          let redcirclebgG: Map<any, any> = new Map([[String.fromCharCode(106,95,51,51,95,117,116,117,114,101,0),String.fromCharCode(105,95,54,54,95,99,111,112,121,0)], [String.fromCharCode(103,95,52,51,95,105,112,100,111,112,100,0),String.fromCharCode(114,101,115,95,106,95,51,57,0)]]);
         bannerU *= parseFloat(`${3 % (Math.max(5, predictionbuttonh))}`);
         redcirclebgG = new Map([[`${redcirclebgG.size}`, redcirclebgG.size / (Math.max(2, redcirclebgG.size))]]);
      if (3.31 == (popupu + 5.29)) {
         predictionbuttonh += parseInt(`${orangedownarrowQ}`);
      }
      sheetz += `${saveG.size}`;
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchBannerAd();
  }, []);

  const onVipCountdownClick = useCallback(() => {
       let successf = String.fromCharCode(109,95,51,53,95,114,105,110,100,101,120,0);
    let switch_hx = String.fromCharCode(103,95,51,55,95,108,97,118,102,117,116,105,108,115,0);
    let videobufferloadingW = true;
    let orangedownarrown = String.fromCharCode(97,117,116,111,102,105,108,108,95,109,95,49,51,0);
    let notificationfilledC = String.fromCharCode(116,95,57,51,95,112,105,99,107,109,111,100,101,0);
    let direct6: Map<any, any> = new Map([[String.fromCharCode(108,95,51,48,95,116,111,103,103,108,101,0),960], [String.fromCharCode(112,105,101,95,106,95,57,52,0),547], [String.fromCharCode(100,101,98,117,103,95,53,95,57,52,0),787]]);
    let reactnativejsD = String.fromCharCode(101,110,118,101,108,111,112,101,95,112,95,54,49,0);
    let turndownb = 4;
    let eighteens = 4.0;
    let windm = 2.0;
    let gradle7 = String.fromCharCode(117,95,55,51,95,98,105,110,107,98,0);
    let condensedX = 3.0;
    let gpayY: Array<any> = [228, 785, 283];
      successf = `${orangedownarrown.length}`;
      notificationfilledC += `${((videobufferloadingW ? 3 : 5))}`;
   let giftbuttonN = 9879551 >= turndownb;
   do {
      turndownb += parseInt(`${eighteens}`);
      if (giftbuttonN) {
         break;
      }
   } while (giftbuttonN && ((4 * direct6.size) > 3 || (4 * turndownb) > 1));
      switch_hx = `${2 << (Math.min(2, Math.abs(parseInt(`${eighteens}`))))}`;
       let countryQ = String.fromCharCode(116,95,49,48,48,95,97,100,109,105,110,101,100,0);
      while (1 < countryQ.length) {
         countryQ += `${countryQ.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
      while (countryQ.length == 2) {
         countryQ += "1";
         break;
      }
       let plus0 = String.fromCharCode(115,116,114,102,116,105,109,101,95,51,95,49,48,0);
      videobufferloadingW = countryQ.startsWith(`${turndownb}`);
      direct6.set(`${switch_hx}`, 2);

    videoRef.current?.setPause(true);

      successf = `${direct6.size & 3}`;
       let iconviewergif6: Array<any> = [126, 785, 183];
       let placeholderc = String.fromCharCode(110,95,55,49,95,115,115,108,114,111,111,116,115,0);
      while ((iconviewergif6.length / (Math.max(1, placeholderc.length))) >= 2 || (iconviewergif6.length / 2) >= 5) {
          let classesk = String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,111,95,53,49,0);
         placeholderc = `${2 * placeholderc.length}`;
         classesk = `${classesk.length - 2}`;
         break;
      }
         placeholderc += "3";
      while (5 <= (iconviewergif6.length * 3)) {
         iconviewergif6 = [iconviewergif6.length];
         break;
      }
         iconviewergif6.push(placeholderc.length);
      while (2 < iconviewergif6.length) {
         iconviewergif6 = [iconviewergif6.length];
         break;
      }
      while (4 < (placeholderc.length | 1) || (1 | placeholderc.length) < 2) {
          let fullscreenmaxf = false;
          let projectq = String.fromCharCode(100,95,51,54,95,117,115,108,116,0);
          let emptyg = 0;
         iconviewergif6.push(emptyg);
         fullscreenmaxf = projectq.length >= 34;
         projectq = `${projectq.length >> (Math.min(Math.abs(1), 1))}`;
         emptyg &= ((fullscreenmaxf ? 5 : 2) | 2);
         break;
      }
      reactnativejsD += "1";
   let zhengpianz = reactnativejsD == String.fromCharCode(119,100,122,107,122,0);
   do {
       let reactnativejsH: Array<any> = [String.fromCharCode(105,110,111,100,101,115,95,120,95,50,52,0), String.fromCharCode(120,95,51,48,95,115,101,114,105,97,108,105,122,101,114,0)];
       let resendY = 5;
       let matchinactivet = String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,95,48,95,56,54,0);
       let member5 = String.fromCharCode(120,95,48,95,116,114,97,110,115,102,111,114,109,101,100,0);
      for (let o = 0; o < 2; o++) {
         resendY >>= Math.min(Math.abs(resendY - matchinactivet.length), 2);
      }
         reactnativejsH.push(reactnativejsH.length);
      for (let x = 0; x < 1; x++) {
         resendY *= resendY % (Math.max(8, reactnativejsH.length));
      }
          let reviewP = false;
          let loadingz: Array<any> = [854, 660, 620];
          let castingr: Array<any> = [204, 924];
         matchinactivet = "3";
         reviewP = 18 >= castingr.length;
         loadingz.push(loadingz.length);
         castingr = [((reviewP ? 2 : 2) & 2)];
         matchinactivet = "1";
      reactnativejsD += `${reactnativejsD.length}`;
      if (zhengpianz) {
         break;
      }
   } while (zhengpianz && (4 <= (reactnativejsD.length * turndownb) && 3 <= (4 * reactnativejsD.length)));
   while (1.99 >= (2.5 + eighteens) || (successf.length | 3) >= 5) {
       let searchh: Map<any, any> = new Map([[String.fromCharCode(117,110,98,108,111,99,107,95,102,95,54,51,0),542], [String.fromCharCode(118,95,54,95,115,105,108,101,110,99,101,100,0),555]]);
      while (searchh.size <= 3) {
         searchh.set(`${searchh.size}`, searchh.size);
         break;
      }
       let redgoalq = false;
          let upgradeS = String.fromCharCode(118,95,50,0);
          let greyarrowupa = String.fromCharCode(116,95,50,50,95,113,117,97,108,105,102,105,101,114,115,0);
          let fieldH = false;
         redgoalq = greyarrowupa.includes(`${fieldH}`);
         upgradeS = `${upgradeS.length << (Math.min(Math.abs(2), 2))}`;
         greyarrowupa += `${upgradeS.length}`;
      successf = `${((videobufferloadingW ? 5 : 5))}`;
      break;
   }
      videobufferloadingW = !switch_hx.includes(`${windm}`);
   let streamingb = 6716320 >= turndownb;
   do {
      turndownb >>= Math.min(successf.length, 3);
      if (streamingb) {
         break;
      }
   } while (((turndownb % 4) == 2) && streamingb);
    setShowBecomeVIPOverlay(true);

      videobufferloadingW = 71 >= direct6.size || 71 >= notificationfilledC.length;
   let actionsu = orangedownarrown == String.fromCharCode(109,101,51,0);
   do {
      orangedownarrown = "3";
      if (actionsu) {
         break;
      }
   } while ((windm == parseFloat(`${orangedownarrown.length}`)) && actionsu);
   while ((1 % (Math.max(2, turndownb))) >= 2 || 1 >= (notificationfilledC.length % (Math.max(7, turndownb)))) {
      turndownb ^= 1;
      break;
   }
       let cancelO = 4.0;
         cancelO -= 2 & parseInt(`${cancelO}`);
      if ((cancelO + cancelO) < 2.68) {
         cancelO /= Math.max(parseInt(`${cancelO}`), 4);
      }
      if (1.58 <= (1.78 + cancelO) && (1.78 + cancelO) <= 4.35) {
          let actionm: Array<any> = [900, 556];
          let defaultplayerimgb: Array<any> = [String.fromCharCode(97,103,114,101,101,109,101,110,116,95,99,95,51,49,0), String.fromCharCode(97,116,111,109,105,99,97,108,108,121,95,114,95,52,48,0), String.fromCharCode(121,113,117,97,110,116,95,101,95,52,57,0)];
          let pointr: Array<any> = [465, 692];
         cancelO *= actionm.length;
         actionm = [defaultplayerimgb.length + 3];
         defaultplayerimgb = [pointr.length];
         pointr.push(1);
      }
      orangedownarrown = `${parseInt(`${eighteens}`) ^ 3}`;
   if (1.16 <= (windm + parseFloat(`${orangedownarrown.length}`))) {
      windm += parseFloat(`${1 + parseInt(`${eighteens}`)}`);
   }
       let trashe: Array<any> = [24, 748, 839];
         trashe.push(2);
          let zhengpianq = false;
         trashe = [trashe.length];
      while (trashe.length == trashe.length) {
         trashe.push(3);
         break;
      }
      eighteens += direct6.size + parseInt(`${windm}`);

    

   let viewerX = 5169604.0 >= eighteens;
   do {
      eighteens -= parseInt(`${windm}`);
      if (viewerX) {
         break;
      }
   } while (viewerX && (1 < (switch_hx.length * 1)));
   for (let u = 0; u < 2; u++) {
       let league8 = false;
       let orangetick2 = String.fromCharCode(109,111,109,101,110,116,117,109,95,112,95,49,52,0);
       let buttonf = 0.0;
       let backF = 0;
         orangetick2 = `${parseInt(`${buttonf}`)}`;
      for (let s = 0; s < 1; s++) {
          let qaags = String.fromCharCode(106,95,50,48,95,105,109,101,114,0);
         orangetick2 = `${qaags.length}`;
      }
          let videog = String.fromCharCode(102,105,102,111,95,109,95,55,51,0);
         buttonf *= videog.length - parseInt(`${buttonf}`);
      if (league8) {
          let annerS = String.fromCharCode(106,95,53,50,95,109,111,118,101,115,0);
          let heartO: Map<any, any> = new Map([[String.fromCharCode(100,95,49,55,95,115,112,101,114,97,116,111,114,0),77], [String.fromCharCode(116,95,49,50,95,103,108,121,112,104,0),945], [String.fromCharCode(111,112,116,105,111,110,115,95,114,95,53,53,0),713]]);
         buttonf *= 1 + orangetick2.length;
         annerS += `${heartO.size * annerS.length}`;
         heartO.set(`${annerS}`, 2 + annerS.length);
      }
         league8 = buttonf == 50.39 || 92 == backF;
         league8 = ((orangetick2.length % (Math.max(6, (league8 ? 41 : orangetick2.length)))) > 41);
       let subbasketballplayers = String.fromCharCode(117,112,115,116,114,101,97,109,95,101,95,54,54,0);
          let liveshare7: Map<any, any> = new Map([[String.fromCharCode(116,95,49,53,95,99,116,120,0),264], [String.fromCharCode(114,95,49,54,95,105,109,112,111,114,116,101,114,0),711]]);
          let klevin4 = String.fromCharCode(104,97,115,104,101,115,95,107,95,53,56,0);
         orangetick2 = `${orangetick2.length}`;
         liveshare7 = new Map([[`${liveshare7.size}`, 2]]);
         klevin4 += `${(klevin4 == String.fromCharCode(75,0) ? liveshare7.size : klevin4.length)}`;
      while (orangetick2.includes(`${league8}`)) {
         league8 = 8.26 >= buttonf || !league8;
         break;
      }
       let recommendationr = String.fromCharCode(99,97,108,108,101,100,95,101,95,56,54,0);
       let icontransferclubq = String.fromCharCode(112,114,111,112,111,115,101,95,104,95,55,48,0);
       let fullscreenmaxv = String.fromCharCode(105,97,100,115,116,95,109,95,54,53,0);
          let loadingy = true;
         backF <<= Math.min(Math.abs(((loadingy ? 3 : 3))), 5);
      switch_hx = "3";
   }
      notificationfilledC = `${2 >> (Math.min(2, reactnativejsD.length))}`;
   while (windm < 2.36) {
       let privatechatbgb = 2;
       let viewsK = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,52,95,56,49,0);
       let backgroundn = String.fromCharCode(116,114,97,110,115,99,116,105,111,110,95,117,95,54,0);
       let downloadingv = 2.0;
      while (privatechatbgb == viewsK.length) {
          let indicatorD = String.fromCharCode(105,116,101,114,95,53,95,56,56,0);
          let type_7S: Map<any, any> = new Map([[String.fromCharCode(104,108,115,101,110,99,95,117,95,54,48,0),29], [String.fromCharCode(99,111,110,116,114,111,108,95,52,95,51,56,0),529]]);
          let watchi: Array<any> = [289, 784, 820];
          let stationsE = String.fromCharCode(100,101,116,101,114,109,105,110,101,95,54,95,57,52,0);
         privatechatbgb >>= Math.min(3, Math.abs(privatechatbgb));
         indicatorD = `${type_7S.size / (Math.max(10, watchi.length))}`;
         type_7S = new Map([[`${type_7S.size}`, 3]]);
         watchi = [stationsE.length >> (Math.min(4, watchi.length))];
         stationsE += "1";
         break;
      }
       let side6 = true;
      for (let a = 0; a < 3; a++) {
          let sina7 = String.fromCharCode(113,117,105,110,116,95,114,95,56,48,0);
          let fieldd = String.fromCharCode(122,95,50,50,95,104,97,110,100,108,101,115,0);
          let rewardL: Map<any, any> = new Map([[String.fromCharCode(115,105,110,107,115,95,48,95,49,50,0),true ], [String.fromCharCode(115,116,97,99,107,115,95,115,95,51,51,0),false ]]);
          let roomG = String.fromCharCode(106,95,57,55,95,114,101,97,115,109,0);
         downloadingv *= 2;
         sina7 += `${rewardL.size ^ 3}`;
         fieldd = `${(String.fromCharCode(89,0) == sina7 ? sina7.length : rewardL.size)}`;
         roomG += `${sina7.length}`;
      }
      if (3 > (privatechatbgb << (Math.min(Math.abs(1), 2)))) {
          let greyarrowup7 = 2.0;
          let baselineV = String.fromCharCode(110,95,57,49,95,101,100,105,116,0);
          let filterv = String.fromCharCode(109,97,107,101,100,112,107,103,95,103,95,57,55,0);
          let buffero = String.fromCharCode(116,95,56,48,95,99,97,112,115,0);
          let filtert: Map<any, any> = new Map([[String.fromCharCode(102,108,105,112,95,118,95,55,50,0),228], [String.fromCharCode(101,95,57,54,95,122,98,117,102,0),870]]);
         side6 = (backgroundn.length + parseInt(`${downloadingv}`)) < 18;
         greyarrowup7 *= 2 >> (Math.min(4, buffero.length));
         baselineV += `${baselineV.length / 3}`;
         filterv += `${1 - baselineV.length}`;
         buffero += `${parseInt(`${greyarrowup7}`) << (Math.min(filterv.length, 4))}`;
         filtert.set(baselineV, filterv.length + 1);
      }
         downloadingv -= ((side6 ? 3 : 4));
      if (1 >= privatechatbgb || (privatechatbgb + 1) >= 3) {
          let hejiK: Map<any, any> = new Map([[String.fromCharCode(105,110,99,111,114,114,101,99,116,95,119,95,53,50,0),52], [String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,95,49,95,50,53,0),836]]);
          let debugZ: Array<any> = [327, 154, 361];
          let textlayoutmanagerP = false;
          let small0 = 0.0;
          let notificationgrayq = 4.0;
         privatechatbgb ^= 1 / (Math.max(privatechatbgb, 3));
         hejiK = new Map([[`${notificationgrayq}`, parseInt(`${small0}`)]]);
         debugZ.push(1);
         textlayoutmanagerP = hejiK.size <= 99;
         notificationgrayq *= ((textlayoutmanagerP ? 3 : 2) % (Math.max(parseInt(`${notificationgrayq}`), 9)));
      }
          let less2 = 0;
          let phoneshareE = String.fromCharCode(100,95,49,48,95,99,117,109,101,0);
          let dycreatorK = true;
         backgroundn += `${privatechatbgb * 3}`;
         less2 <<= Math.min(Math.abs(2), 3);
         phoneshareE += `${(String.fromCharCode(84,0) == phoneshareE ? less2 : phoneshareE.length)}`;
         dycreatorK = (less2 / (Math.max(7, phoneshareE.length))) == 33;
       let nterstitialH = String.fromCharCode(99,95,50,51,95,114,101,115,105,103,110,105,110,103,0);
       let aboutw = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,106,95,52,50,0);
      while (4 > viewsK.length) {
         privatechatbgb += ((side6 ? 4 : 3) & backgroundn.length);
         break;
      }
         aboutw += `${parseInt(`${downloadingv}`) | 2}`;
          let enewinterstitiale = false;
         aboutw += `${nterstitialH.length}`;
         enewinterstitiale = (!enewinterstitiale ? enewinterstitiale : enewinterstitiale);
      let libfabricjniG = privatechatbgb <= 9810952;
      do {
          let iconclosek: Array<any> = [String.fromCharCode(115,112,101,99,116,105,109,101,95,121,95,52,49,0), String.fromCharCode(111,95,49,57,95,115,105,110,117,115,111,105,100,97,108,0), String.fromCharCode(111,95,52,50,95,109,97,99,101,0)];
          let modityk = String.fromCharCode(120,95,50,49,95,100,101,113,117,97,110,116,0);
         privatechatbgb *= modityk.length;
         iconclosek = [iconclosek.length];
         modityk = `${iconclosek.length & 1}`;
         if (libfabricjniG) {
            break;
         }
      } while (libfabricjniG && ((aboutw.length | privatechatbgb) >= 3));
      eighteens -= 2 * parseInt(`${windm}`);
      break;
   }
   for (let p = 0; p < 3; p++) {
      videobufferloadingW = !videobufferloadingW;
   }
      videobufferloadingW = switch_hx.length > 64;
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportDetailsVipPopupTimesAnalytics();
    
  }, []);

  const onGoPrivateChatPress = () => {
       let loginsuccess7 = true;
    let upgradeM = 0.0;
    let directq = String.fromCharCode(113,95,57,50,95,118,99,101,110,99,0);
    let shareD: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,97,109,112,95,113,95,54,55,0),String.fromCharCode(116,98,108,101,110,100,95,119,95,49,51,0)], [String.fromCharCode(122,95,49,48,48,95,97,99,107,100,114,111,112,0),String.fromCharCode(108,95,52,53,95,113,115,99,97,108,101,113,108,111,103,0)], [String.fromCharCode(113,117,97,110,116,95,105,95,55,54,0),String.fromCharCode(111,95,57,50,95,115,101,114,105,102,0)]]);
    let history5 = 1.0;
    let layoutq = String.fromCharCode(117,95,52,55,95,97,100,100,114,105,110,102,111,0);
    let soundd = 4.0;
    let i_manager8: Map<any, any> = new Map([[String.fromCharCode(109,95,52,54,95,100,105,97,108,111,103,115,0),740], [String.fromCharCode(101,95,53,53,95,103,101,116,109,0),181]]);
    let footballfiledlayoutk = 5;
    let plash6: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,103,95,54,50,0),String.fromCharCode(112,97,99,101,100,95,102,95,54,56,0)], [String.fromCharCode(115,101,109,97,110,116,105,99,115,95,57,95,55,57,0),String.fromCharCode(119,95,49,48,48,95,101,120,112,111,115,117,114,101,0)], [String.fromCharCode(116,104,114,101,97,100,105,110,103,95,48,95,53,54,0),String.fromCharCode(112,97,116,99,104,95,50,95,54,53,0)]]);
    let liveendmodallogog = String.fromCharCode(115,101,97,114,99,104,98,97,114,95,108,95,53,51,0);
   while (2.68 <= (2.6 + soundd) && (soundd / 2.6) <= 4.99) {
      soundd += directq.length;
      break;
   }
   if (history5 == 5.64) {
       let iconlogoutV = 3.0;
       let sinan = 4.0;
         iconlogoutV /= Math.max(parseFloat(`${2}`), 5);
      if (sinan == 3.89) {
         sinan += parseInt(`${iconlogoutV}`);
      }
      let nodei = 9489013.0 >= sinan;
      do {
         sinan /= Math.max(2, 1);
         if (nodei) {
            break;
         }
      } while (nodei && (1.19 <= (2 - iconlogoutV)));
      while (5.58 >= (iconlogoutV * sinan) || 4.38 >= (5.58 * iconlogoutV)) {
          let orangedownarrowe = true;
          let paginationS = String.fromCharCode(112,95,55,53,95,115,112,101,99,116,114,97,108,0);
          let gesturesA: Array<any> = [228, 154];
          let kuaishou5: Map<any, any> = new Map([[String.fromCharCode(112,104,121,115,95,109,95,50,50,0),749], [String.fromCharCode(115,110,97,112,104,111,116,95,48,95,52,53,0),356]]);
          let armvad = String.fromCharCode(102,111,115,115,105,108,95,118,95,54,51,0);
         sinan /= Math.max(1, parseInt(`${iconlogoutV}`) * paginationS.length);
         orangedownarrowe = kuaishou5.size == 34;
         paginationS += `${kuaishou5.size << (Math.min(Math.abs(3), 3))}`;
         gesturesA = [armvad.length];
         armvad += `${gesturesA.length * 3}`;
         break;
      }
          let nativemodule2: Map<any, any> = new Map([[String.fromCharCode(122,95,57,55,95,119,105,100,103,101,116,0),false ], [String.fromCharCode(114,100,112,99,109,95,113,95,52,57,0),true ], [String.fromCharCode(114,97,110,103,101,99,111,100,101,114,95,102,95,56,51,0),true ]]);
          let backiconmaskr = 3.0;
         iconlogoutV += parseFloat(`${1}`);
         nativemodule2.set(`${backiconmaskr}`, nativemodule2.size);
         backiconmaskr -= 1 ^ nativemodule2.size;
       let diceO = 0;
      shareD = new Map([[directq, parseInt(`${soundd}`)]]);
   }
       let default_nb: Array<any> = [128, 957, 86];
       let catalogy: Map<any, any> = new Map([[String.fromCharCode(108,95,54,57,95,100,101,105,110,118,101,114,116,0),546], [String.fromCharCode(105,110,118,101,114,116,95,111,95,55,50,0),253]]);
       let long_fg: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,119,116,95,55,95,49,0),90], [String.fromCharCode(100,101,102,101,114,95,49,95,57,49,0),752]]);
         catalogy.set(`${default_nb.length}`, 3);
      while (!Array.from(catalogy.keys()).includes(`${default_nb.length}`)) {
         catalogy = new Map([[`${catalogy.size}`, 1]]);
         break;
      }
         catalogy = new Map([[`${catalogy.size}`, 1 + long_fg.size]]);
      let textlayoutmanagerd = 9527194 >= default_nb.length;
      do {
          let controlu: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,98,95,53,50,0),true ], [String.fromCharCode(105,110,116,114,110,108,95,50,95,51,53,0),false ], [String.fromCharCode(118,95,57,57,95,112,111,115,116,115,99,97,108,101,0),true ]]);
          let hometeamfielde = String.fromCharCode(115,95,57,57,95,102,117,110,110,121,0);
          let mappingJ = String.fromCharCode(116,101,115,115,101,108,97,116,101,95,106,95,50,0);
          let profilepicf = 2.0;
         default_nb = [long_fg.size];
         controlu.set(mappingJ, mappingJ.length);
         hometeamfielde += `${mappingJ.length ^ parseInt(`${profilepicf}`)}`;
         profilepicf /= Math.max(1, mappingJ.length);
         if (textlayoutmanagerd) {
            break;
         }
      } while (textlayoutmanagerd && ((default_nb.length & catalogy.size) > 5 || 4 > (5 & default_nb.length)));
      if (1 > catalogy.size) {
         catalogy.set(`${default_nb.length}`, 1);
      }
         default_nb = [1 | catalogy.size];
      for (let m = 0; m < 1; m++) {
          let private_qeE: Array<any> = [762, 585, 685];
          let homeinactiveX = 4;
         long_fg.set(`${homeinactiveX}`, long_fg.size);
         private_qeE = [private_qeE.length];
         homeinactiveX |= 3;
      }
       let connectionw = String.fromCharCode(121,95,55,48,95,115,117,114,102,97,99,101,115,0);
      let whistleZ = 6251705 >= default_nb.length;
      do {
          let activeA = String.fromCharCode(100,101,115,116,95,98,95,57,57,0);
         default_nb.push(long_fg.size);
         activeA += `${(String.fromCharCode(66,0) == activeA ? activeA.length : activeA.length)}`;
         if (whistleZ) {
            break;
         }
      } while (whistleZ && ((long_fg.size * default_nb.length) >= 5));
      loginsuccess7 = directq.length < long_fg.size;
   while (3.83 < history5 || (history5 / (Math.max(3.83, 9))) < 2.37) {
      loginsuccess7 = 44.53 == soundd;
      break;
   }
       let iconfeedbackw = String.fromCharCode(122,95,51,48,95,103,101,116,117,114,108,99,111,110,116,101,120,116,0);
          let interstitialu = 3;
         iconfeedbackw += "3";
         interstitialu &= interstitialu & 2;
       let fullscreenmax0 = true;
       let starR = true;
         starR = !fullscreenmax0;
      layoutq = `${((loginsuccess7 ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${soundd}`)), 4)))}`;

    navigation.navigate('体育详情', {
      matchId: matchID,
      streamerId: route?.params?.streamerId,
      sportType: route?.params?.sportType,
      screen: 'PrivateChat',
    });
  }

  const onInputFocus = (isFocus: boolean) => {
    if (isFocus === false) {
      Keyboard.dismiss();
    }
    
  }

  return (
    <ScreenContainer
      isPlay={true}
      containerStyle={{
        flex: 1,
        paddingRight: 0,
        paddingLeft: 0,
        
        
        paddingTop: screenState.isPlayerFullScreen ? 0 : insetsTop,
        paddingBottom: screenState.isPlayerFullScreen ? 0 : insetsBottom,
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1, }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <BecomeVipOverlay
          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
          showBecomeVIPOverlay={showBecomeVIPOverlay}
          isJustClose={showCountdown && NON_VIP_STREAM_TIME_SECONDS > screenState.sportWatchTime}
          selectedTab='sport'
          onClose={() => {
            videoRef.current?.setPause(false);

            if (!(showCountdown && NON_VIP_STREAM_TIME_SECONDS > screenState.sportWatchTime) && route.name === '体育详情') {
              navigation.goBack();
            }
          }}
        />
        {videoSource.url &&
          ((videoSource.type === VideoLiveType.LIVE &&
            match?.streams?.some(streamer => streamer.status == 3)) ||
            videoSource.type === VideoLiveType.ANIMATION) ? (
          <LiveVideo
            videoRef={videoRef}
            liveDataState={match}
            
            streamID={streamID}
            setVideoSource={setVideoSource}
            matchID={matchID}
            onLiveEnd={onLiveEnd}
            onLoad={onLiveLoad}
            videoSource={videoSource}
            onGoBack={navigation.goBack}
            
            showCountdown={showCountdown}
            countdownTime={NON_VIP_STREAM_TIME_SECONDS - screenState.sportWatchTime}
            onVipCountdownClick={onVipCountdownClick}
          />
        ) : (
          <BeforeLive
            dataLive={match?.streams}
            onOpenLive={() => {
              if (match?.streams && match?.streams?.length > 0) {
                
                const { streamer_id, src } = match?.streams[0];
                setStreamID(streamer_id);
                setIsLiveVideoEnd(false);
                setVideoSource({
                  type: VideoLiveType.LIVE,
                  url: parseVideoURL(src),
                });
              }
            }}
            onOpenAnimation={(url: string) => {
              
              setIsLiveVideoEnd(false);
              setVideoSource({ type: VideoLiveType.ANIMATION, url: url });
            }}
            listLiveDetails={matchDetails}
            setVideoSource={setVideoSource}
            liveDataState={match}
            listLiveMatchDetailsUpdates={liveRoomUpdate}
          />
        )}
        {INVITE_FRIEND &&
          <VipRegisterBar onPress={() => {
            videoRef.current?.setPause(true);
          }} />
        }

        {bannerAd && !wawaLibglog.isVip(userState.user) && (
          <View style={{
            
            
            
          }}>
            <BannerContainer
              bannerAd={bannerAd}
              onMount={() => {
                wawa_dacccfaabfbcbadeebddcabacdffdbc_video.videoPlayerBannerViewAnalytics({
                  playerType: 'sport',
                  ads_slot_id: bannerAd.ads_slot_id,
                  ads_id: bannerAd.ads_id,
                  ads_title: bannerAd.ads_title,
                  ads_name: bannerAd.ads_name,
                });
              }}
              onPress={() => {
                wawa_dacccfaabfbcbadeebddcabacdffdbc_video.videoPlayerBannerClickAnalytics({
                  playerType: 'sport',
                  ads_slot_id: bannerAd.ads_slot_id,
                  ads_id: bannerAd.ads_id,
                  ads_title: bannerAd.ads_title,
                  ads_name: bannerAd.ads_name,
                });
              }}
            />
          </View>
        )}

        {settingsReducer.appOrientation === 'PORTRAIT' && ((isNavVisible &&
          isFullyLoaded && tabList.length > 0) ? (
          <MatchDetailsNav
            streamId={10001}
            tabList={tabList}
            defaultTabName={'Live'}
          
          />
        ) : (
          <View style={styles.fetching}>
            <FastImage
              source={require('@static/images/iconnewsshareDist.gif')}
              style={{ width: 100, height: 80, marginBottom: -20 }}
              resizeMode="contain"
            />
            {/* <Text style={{ ...textVariants.body, color: colors.muted, textAlign: 'center' }}>加载中。。。</Text> */}
          </View>
        )
        )}
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default memo(MatchDetails)

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  backButtonIcon: {
    height: 18,
    width: 16,
  },
  backButtonTouch: {
    height: 60,
    width: 66,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
    position: 'absolute',
    zIndex: 2,
  },
  topBannerCotainer: {
    
    
    
    
    
    
  },
  fetching: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingBottom: '50%',
  },
});
