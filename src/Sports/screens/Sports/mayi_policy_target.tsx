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
import ScreenContainer from '../../../components/container/mayi_save';
import MainHeader from '../../../components/header/mayi_iconwatch_other_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { mayi_DownloadingContainer, mayi_Room, mayi_MatchinactivePlash } from '@type/mayi_green';
import VodPlaylist from '../../../components/playlist/mayi_shootyesgoal';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import FastImage from '../../../components/common/mayi_slider';
import mayi_Analytics from '../../middleware/mayi_plash_basketballtrophy';
import { Url } from '../../middleware/mayi_countdown_videovar';
import { formatMatchDate } from '../../utility/utils';
import { mayi_Default, mayi_IconsettingChat } from '../../types/mayi_homeinactive';
import MatchDetailsNav from '../../components/matchDetails/mayi_brightness_minimize_view';
import MatchSchedule from '../../components/matchSchedule/mayi_refresh';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer, { mayi_FootballtrophyGreytick } from '../../../components/videoPlayer/mayi_basketballawayteam';
import { parseVideoURL } from '../../utility/mayi_interstitial_dplus';
import Video from 'react-native-video';
import LiveVideo from '../../components/liveVideo/mayi_pressure_info';
import { VideoLiveType } from '../../global/mayi_green_build';
import {
  mayi_Cast,
  mayi_TempnodatagifHistory,
} from '../../types/mayi_search';
import { mayi_Humidity } from '../../types/mayi_predictionarrow_langkey';
import BeforeLive from '../../components/beforeLive';
import StatisticPage from '../../components/matchDetails/statisticPage';
import { mayi_Related } from '../../types/mayi_basketballtrophy';
import LineUpPage from '../../components/matchDetails/lineUpPage';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/mayi_redirect';
import { screenModel } from '@type/mayi_libfolly_inouttargetred';
import { incrementSportWatchTime } from '@redux/actions/mayi_iconorientation_chatroombackground';
import BecomeVipOverlay from "../../../components/modal/mayi_apps";
import { NON_VIP_STREAM_TIME_SECONDS } from '@utility/mayi_middleware_apps';
import mayi_push from '../../../../Umeng/mayi_push';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mayi_InjuryNewinterstitial } from '@redux/reducers/mayi_libavcodec_nativeex';
import VipRegisterBar from '../../../components/adultVideo/mayi_clock';
import { BannerContainer } from '../../../components/container/mayi_iconarrowright_feedback';
import { mayi_Librrc } from '../../../../mayi_gift';
import { mayi_ConstCheckbox } from '@api';
import LiveChatPage from '../../components/matchDetails/liveChatPage';
import PrivateChatPage from '../../components/matchDetails/privateChatPage';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import { mayi_Gift } from '@models/mayi_libjsinspector';

let insetsTop = 0;
let insetsBottom = 0;

type mayi_EventLibnms = {
  item: mayi_Default;
  index: number;
};

interface mayi_Libhermes {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

type mayi_HuaweiCatalog = {
  type: number;
  url: any;
};

const MatchDetails = ({ navigation, route }: BottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );
  const userState = useSelector<mayi_Baseline>('userReducer');
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<mayi_DownloadingContainer>);
  const [videoSource, setVideoSource] = useState<mayi_HuaweiCatalog>({
    type: 0,
    url: undefined,
  });
  const [isLiveVideoFullScreen, setIsLiveVideoFullScreen] = useState(false);
  const [shouldShowComponents, setShouldShowComponents] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const showCountdown = !mayi_Gift.isVip(userState.user);

  const videoRef = useRef<mayi_FootballtrophyGreytick | null>(null);
  const [bannerAd, setBannerAd] = useState<mayi_Room>();
  const isVip = mayi_Gift.isVip(userState.user);
  const sportTabDetails: mayi_MatchinactivePlash = mayi_Librrc.instance.findTabByKey('体育');

  

  
  useEffect(() => {
    mayi_push.sportDetailsViewsAnalytics();
  }, [])
  

  const { data: match } = useQuery({
    queryKey: ['liveRoomDetails', matchID],
    queryFn: () =>
      mayi_Analytics.call(`${Url.liveRoomDetail}?id=${matchID}`, {}, 'GET').then(
        (res): mayi_Default => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const { data: matchDetails, isFetching: f1 } = useQuery({
    queryKey: ['matchDetails', matchID, streamID],
    queryFn: () =>
      mayi_Analytics.call(`${Url.matchDetails}?id=${matchID}`, {}, 'GET').then(
        (res): mayi_Cast => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: liveRoomUpdate, isFetching: f2 } = useQuery({
    queryKey: ['liveRoomUpdate', matchID, streamID],
    queryFn: () =>
      mayi_Analytics.call(
        `${Url.matchUpdate}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): mayi_Humidity => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const { data: matchLineUp, isFetching: f3 } = useQuery({
    queryKey: ['matchLineUp', matchID, streamID],
    queryFn: () =>
      mayi_Analytics.call(
        `${Url.matchLineup}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): mayi_Related => {
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
       let basketballmatchdetailbgu = String.fromCharCode(115,116,101,112,95,49,95,50,49,0);
    let benefitF = String.fromCharCode(117,110,109,105,110,105,109,105,122,101,95,57,95,49,51,0);
    let ying0 = true;
    let resultJ = String.fromCharCode(109,112,99,100,97,116,97,95,114,95,57,0);
    let footballfield9 = String.fromCharCode(100,101,103,114,101,101,115,95,50,95,51,48,0);
    let iconarrowrightwhiteq = String.fromCharCode(117,115,97,103,101,95,107,95,55,52,0);
    let activeo = 5.0;
    let libnmsq = String.fromCharCode(99,111,110,110,101,99,116,95,116,95,55,48,0);
    let ocopy_19h = String.fromCharCode(108,95,49,51,95,97,99,99,101,112,116,101,100,0);
   let moonA = String.fromCharCode(52,108,108,119,121,49,107,112,0) == benefitF;
   do {
       let baiduN = 3.0;
      let texti = baiduN <= 5128361.0;
      do {
          let lineN: Array<any> = [978, 481];
          let predictionL = String.fromCharCode(102,105,102,111,115,95,53,95,53,51,0);
          let dependencyN = 5.0;
          let activityG: Map<any, any> = new Map([[String.fromCharCode(117,95,53,54,95,104,121,112,104,101,110,97,116,101,100,0),String.fromCharCode(111,117,116,111,117,116,95,117,95,49,55,0)], [String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,56,95,56,52,0),String.fromCharCode(115,116,105,99,107,101,114,95,54,95,49,54,0)]]);
         baiduN /= Math.max(parseFloat(`${3 + parseInt(`${dependencyN}`)}`), 4);
         lineN = [(predictionL == String.fromCharCode(55,0) ? activityG.size : predictionL.length)];
         dependencyN *= parseFloat(`${1 - predictionL.length}`);
         activityG.set(`${predictionL}`, predictionL.length * activityG.size);
         if (texti) {
            break;
         }
      } while ((5.1 > (3.23 * baiduN)) && texti);
      while ((baiduN + baiduN) >= 4.84 && 4.84 >= (baiduN + baiduN)) {
          let reactz: Array<any> = [445, 635];
         baiduN *= parseFloat(`${parseInt(`${baiduN}`)}`);
         reactz = [1];
         break;
      }
       let modulesc = 0.0;
       let customi = 0.0;
      benefitF = `${(resultJ == String.fromCharCode(97,0) ? resultJ.length : parseInt(`${activeo}`))}`;
      if (moonA) {
         break;
      }
   } while (moonA && (!ying0));
   while ((1.31 * activeo) >= 3.20 && (footballfield9.length * activeo) >= 1.31) {
      activeo *= (iconarrowrightwhiteq == String.fromCharCode(107,0) ? iconarrowrightwhiteq.length : (ying0 ? 1 : 4));
      break;
   }
   if (!ying0 && 5 > benefitF.length) {
      benefitF += `${basketballmatchdetailbgu.length}`;
   }
   for (let x = 0; x < 1; x++) {
      basketballmatchdetailbgu = `${basketballmatchdetailbgu.length}`;
   }
      basketballmatchdetailbgu += `${parseInt(`${activeo}`)}`;
      basketballmatchdetailbgu += `${resultJ.length * 1}`;
      benefitF += `${iconarrowrightwhiteq.length ^ 1}`;
      ying0 = basketballmatchdetailbgu.length >= resultJ.length;
       let nterstitiala: Array<any> = [String.fromCharCode(99,114,111,115,115,104,97,105,114,115,95,106,95,52,53,0), String.fromCharCode(116,111,107,101,110,105,122,101,100,95,101,95,52,56,0), String.fromCharCode(97,95,51,52,95,116,104,101,114,101,117,109,0)];
       let schedulerW = 1;
      while (2 > (nterstitiala.length << (Math.min(Math.abs(4), 2)))) {
         nterstitiala.push(1);
         break;
      }
      if ((4 | nterstitiala.length) < 2 && (nterstitiala.length | schedulerW) < 4) {
         schedulerW &= nterstitiala.length / 3;
      }
          let firebase0 = 4;
          let libfollyH = 2.0;
          let mbridgei = 0.0;
         nterstitiala = [2 & schedulerW];
         firebase0 /= Math.max(parseInt(`${mbridgei}`) ^ parseInt(`${libfollyH}`), 3);
         libfollyH += parseFloat(`${firebase0}`);
         mbridgei /= Math.max(4, parseFloat(`${parseInt(`${libfollyH}`) / (Math.max(4, firebase0))}`));
         nterstitiala = [schedulerW];
      while (5 >= (5 & nterstitiala.length) && 1 >= (nterstitiala.length & 5)) {
          let homeactiveF = 1.0;
          let classes9 = 1.0;
          let phonej: Map<any, any> = new Map([[String.fromCharCode(97,112,112,95,55,95,54,53,0),String.fromCharCode(105,110,118,105,116,101,115,95,121,95,51,48,0)], [String.fromCharCode(102,108,101,120,95,110,95,49,50,0),String.fromCharCode(114,95,50,55,95,97,99,104,101,0)]]);
          let configN = String.fromCharCode(119,95,52,55,95,112,114,101,115,115,101,100,0);
         schedulerW &= configN.length;
         homeactiveF -= parseFloat(`${3 ^ phonej.size}`);
         classes9 *= parseInt(`${homeactiveF}`) + phonej.size;
         configN += `${2 - parseInt(`${classes9}`)}`;
         break;
      }
      for (let p = 0; p < 3; p++) {
         nterstitiala = [2];
      }
      resultJ += `${((ying0 ? 2 : 5) | 2)}`;
   for (let a = 0; a < 1; a++) {
       let langkey6: Map<any, any> = new Map([[String.fromCharCode(120,95,49,54,95,109,97,114,107,0),301], [String.fromCharCode(116,114,117,110,99,95,103,95,51,48,0),339]]);
       let modei = String.fromCharCode(102,95,57,54,95,115,116,117,102,102,115,116,0);
       let rulesO = 1.0;
      if (2.43 == (rulesO - 2.27) && (rulesO - 2.27) == 4.25) {
         modei = `${modei.length}`;
      }
      for (let m = 0; m < 3; m++) {
         langkey6.set(`${modei}`, modei.length);
      }
       let footballfiledlayout2: Map<any, any> = new Map([[String.fromCharCode(110,97,110,111,112,98,95,102,95,55,52,0),String.fromCharCode(104,105,101,114,95,106,95,49,48,48,0)], [String.fromCharCode(109,97,112,112,101,114,95,111,95,53,0),String.fromCharCode(97,114,101,116,104,101,114,101,95,122,95,53,50,0)], [String.fromCharCode(103,95,52,51,95,103,108,121,112,104,0),String.fromCharCode(117,109,98,114,101,108,108,97,95,118,95,49,49,0)]]);
       let descX: Map<any, any> = new Map([[String.fromCharCode(116,105,108,101,115,95,119,95,52,57,0),647], [String.fromCharCode(107,95,57,49,95,103,101,110,101,114,97,116,101,0),647], [String.fromCharCode(120,95,50,56,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0),495]]);
      if (descX.get(`${langkey6.size}`) == null) {
         descX.set(`${footballfiledlayout2.size}`, 2 - descX.size);
      }
      for (let v = 0; v < 1; v++) {
         descX.set(modei, 2);
      }
          let homeplayerJ = String.fromCharCode(116,95,52,54,95,114,101,117,112,108,111,97,100,105,110,103,0);
          let reactnativejsG = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,95,56,95,56,52,0);
         langkey6.set(reactnativejsG, 2 ^ reactnativejsG.length);
         homeplayerJ = `${1 << (Math.min(4, homeplayerJ.length))}`;
         modei += `${modei.length * footballfiledlayout2.size}`;
      for (let l = 0; l < 3; l++) {
         langkey6 = new Map([[`${langkey6.size}`, 1]]);
      }
      for (let o = 0; o < 2; o++) {
          let umengr = String.fromCharCode(107,95,55,49,95,102,116,118,100,111,99,0);
         footballfiledlayout2.set(`${modei}`, 3);
         umengr = `${umengr.length}`;
      }
      iconarrowrightwhiteq = `${(String.fromCharCode(112,0) == footballfield9 ? (ying0 ? 3 : 4) : footballfield9.length)}`;
   }
   if (basketballmatchdetailbgu.length <= 1) {
      ying0 = footballfield9.length >= 41;
   }
   let episodesQ = 5902986 <= resultJ.length;
   do {
      resultJ += `${footballfield9.length & 2}`;
      if (episodesQ) {
         break;
      }
   } while ((resultJ.length > 4 || ying0) && episodesQ);
      activeo += 1;
       let redirectG = String.fromCharCode(111,95,54,48,95,99,111,109,112,97,114,101,102,0);
       let v_player3 = 2.0;
          let armvaX: Array<any> = [999, 194];
          let bodanm = 1;
          let goallogoE = 3.0;
         redirectG += `${parseInt(`${v_player3}`)}`;
         armvaX = [bodanm * 3];
         bodanm ^= 2;
         goallogoE *= parseFloat(`${bodanm}`);
          let yellowP = String.fromCharCode(117,95,53,52,95,100,105,114,101,99,116,105,111,110,0);
          let renewY = 4.0;
          let adultI = 3.0;
         v_player3 -= parseFloat(`${yellowP.length + parseInt(`${v_player3}`)}`);
         yellowP = "1";
         renewY -= parseInt(`${adultI}`);
      let securityV = String.fromCharCode(48,107,103,118,0) == redirectG;
      do {
          let listN = 3.0;
          let libfbjnix = String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,106,95,56,57,0);
          let policy8 = 5.0;
          let awayK = String.fromCharCode(104,97,109,98,117,114,103,101,114,95,109,95,56,49,0);
          let mimer = String.fromCharCode(111,95,52,53,95,108,111,99,111,0);
         redirectG = `${1 / (Math.max(4, redirectG.length))}`;
         listN -= 1 - libfbjnix.length;
         libfbjnix = "1";
         policy8 += 2;
         awayK = "3";
         mimer = "2";
         if (securityV) {
            break;
         }
      } while (((parseFloat(`${redirectG.length}`) + v_player3) < 4.93 && (redirectG.length + parseInt(`${v_player3}`)) < 1) && securityV);
          let crownZ = 5.0;
         v_player3 += parseFloat(`${parseInt(`${v_player3}`) >> (Math.min(Math.abs(2), 2))}`);
         crownZ *= parseFloat(`${parseInt(`${crownZ}`)}`);
      let tail0 = v_player3 >= 9742325.0;
      do {
         v_player3 *= parseFloat(`${redirectG.length}`);
         if (tail0) {
            break;
         }
      } while (tail0 && (v_player3 <= 2.11));
         v_player3 += parseFloat(`${2}`);
      footballfield9 = `${redirectG.length}`;
   if (5.14 <= (activeo - 3.65)) {
      activeo *= benefitF.length * 1;
   }
      activeo /= Math.max(((ying0 ? 3 : 1) / (Math.max(parseInt(`${activeo}`), 3))), 4);
       let modulesM = true;
       let black0 = 2;
       let libswresamplea = String.fromCharCode(99,100,97,116,97,95,55,95,49,50,0);
          let merger9 = 0.0;
          let yinge = false;
          let statisticsinactiveU: Array<any> = [String.fromCharCode(112,97,116,104,95,115,95,49,48,0), String.fromCharCode(120,95,56,49,95,99,111,110,97,110,102,105,108,101,0)];
         black0 ^= 3 >> (Math.min(4, statisticsinactiveU.length));
         merger9 *= ((yinge ? 4 : 5) & parseInt(`${merger9}`));
         yinge = !yinge;
         statisticsinactiveU.push(3 << (Math.min(Math.abs(parseInt(`${merger9}`)), 4)));
         libswresamplea = `${libswresamplea.length}`;
       let iconclosewhitewithbgS = 1.0;
       let acceptedA = 5.0;
      if (!modulesM) {
          let short_64 = String.fromCharCode(116,115,99,99,100,97,116,97,95,102,95,57,49,0);
          let expands = String.fromCharCode(119,114,105,116,101,99,98,95,108,95,52,56,0);
          let iconpipexpandH = true;
         acceptedA += parseInt(`${acceptedA}`) << (Math.min(libswresamplea.length, 2));
         short_64 += `${2 << (Math.min(2, expands.length))}`;
         expands += "3";
         iconpipexpandH = short_64.length > 74 || !iconpipexpandH;
      }
         acceptedA *= parseInt(`${iconclosewhitewithbgS}`);
          let circlea = String.fromCharCode(120,95,57,48,95,100,105,115,97,112,112,101,97,114,0);
         libswresamplea = "1";
         circlea += `${2 ^ circlea.length}`;
      for (let t = 0; t < 1; t++) {
          let fastW: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,101,114,95,106,95,56,55,0),true ], [String.fromCharCode(112,111,111,108,114,101,102,95,117,95,53,51,0),true ]]);
          let halffieldimage4: Array<any> = [119, 2, 594];
         modulesM = fastW.size >= 9;
         fastW = new Map([[`${halffieldimage4.length}`, halffieldimage4.length ^ 1]]);
      }
      while ((parseInt(`${iconclosewhitewithbgS}`) / (Math.max(libswresamplea.length, 1))) > 3 && 2 > (parseInt(`${iconclosewhitewithbgS}`) / (Math.max(3, 3)))) {
          let unreadI = String.fromCharCode(115,95,56,57,95,114,101,112,114,111,99,101,115,115,0);
          let upgradeH = String.fromCharCode(115,117,98,116,114,97,99,116,111,114,95,99,95,49,53,0);
          let annerI = String.fromCharCode(112,114,101,115,101,110,116,95,97,95,55,52,0);
          let paget: Array<any> = [String.fromCharCode(100,95,54,55,95,105,100,101,110,116,105,116,105,121,0), String.fromCharCode(111,95,49,49,95,117,110,112,97,99,107,101,100,0), String.fromCharCode(119,101,105,103,104,116,95,117,95,54,55,0)];
         libswresamplea += `${parseInt(`${acceptedA}`)}`;
         unreadI += `${paget.length & 1}`;
         upgradeH = `${2 & unreadI.length}`;
         annerI += `${unreadI.length}`;
         paget = [paget.length * 1];
         break;
      }
      while ((3 & black0) > 4 || 4 > (3 - black0)) {
         black0 |= libswresamplea.length >> (Math.min(Math.abs(1), 3));
         break;
      }
      basketballmatchdetailbgu += "2";

    setIsLiveVideoEnd(true);
  }, []);

  const onLiveLoad = useCallback(() => {
       let libcxxcomponentsI: Array<any> = [136, 448, 482];
    let footballfiledlayoutg = 2.0;
    let schedulerG = 3;
    let watchK = 3.0;
    let turndownL: Array<any> = [503, 632];
    let tickX = 5.0;
    let configo: Map<any, any> = new Map([[String.fromCharCode(117,95,50,49,95,104,97,115,104,116,97,103,115,0),770], [String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,95,114,95,57,52,0),604], [String.fromCharCode(115,95,57,48,95,114,116,99,119,101,98,0),555]]);
    let manifestU = 4;
    let analyticsG: Array<any> = [32, 901];
    let thumbnailT = String.fromCharCode(102,99,109,117,108,95,99,95,50,53,0);
    let libcrashsdk_ = 1.0;
   for (let c = 0; c < 3; c++) {
      libcxxcomponentsI.push(2);
   }
   if (3 <= (schedulerG / 3)) {
      schedulerG |= 3 / (Math.max(schedulerG, 8));
   }
      tickX -= parseFloat(`${turndownL.length}`);
   let q_centerx = footballfiledlayoutg >= 9880637.0;
   do {
      footballfiledlayoutg *= parseInt(`${watchK}`) & parseInt(`${tickX}`);
      if (q_centerx) {
         break;
      }
   } while (q_centerx && ((manifestU | 3) == 3 || 3 == (manifestU + 3)));
       let iconqq_ = String.fromCharCode(114,95,57,49,95,101,97,103,97,105,110,0);
          let huawei8 = 0;
          let download6 = String.fromCharCode(105,95,49,48,95,103,101,116,114,97,110,100,111,109,0);
         iconqq_ = `${iconqq_.length & 1}`;
         huawei8 %= Math.max(huawei8 | download6.length, 2);
         download6 += `${huawei8 << (Math.min(Math.abs(1), 5))}`;
      let libavcodecG = iconqq_.length <= 5789933;
      do {
          let incidentk = 2.0;
          let basketballtrophyb = false;
          let injuryI = String.fromCharCode(109,95,51,95,109,99,111,114,101,0);
          let refreshborderlessq: Array<any> = [327, 875];
          let inviteC = 1.0;
         iconqq_ = `${((basketballtrophyb ? 2 : 3))}`;
         incidentk /= Math.max(parseFloat(`${refreshborderlessq.length}`), 4);
         basketballtrophyb = injuryI.startsWith(`${inviteC}`);
         injuryI += "3";
         refreshborderlessq.push(1);
         inviteC /= Math.max(3, parseInt(`${inviteC}`) * parseInt(`${incidentk}`));
         if (libavcodecG) {
            break;
         }
      } while (libavcodecG && (iconqq_ == String.fromCharCode(87,0)));
      if (iconqq_.length > 5) {
         iconqq_ += `${iconqq_.length / 2}`;
      }
      manifestU <<= Math.min(3, Math.abs(1 << (Math.min(3, thumbnailT.length))));
   let pingd = footballfiledlayoutg <= 8560461.0;
   do {
      footballfiledlayoutg /= Math.max(2, 3);
      if (pingd) {
         break;
      }
   } while (pingd && ((thumbnailT.length & 2) >= 4 || (2 - thumbnailT.length) >= 4));
   for (let x = 0; x < 3; x++) {
       let libfabricjniK = String.fromCharCode(115,115,121,98,95,100,95,54,49,0);
      for (let d = 0; d < 2; d++) {
         libfabricjniK += `${libfabricjniK.length * libfabricjniK.length}`;
      }
         libfabricjniK = `${libfabricjniK.length % 2}`;
      let iconorientation3 = libfabricjniK.length <= 6504540;
      do {
          let weiboD = String.fromCharCode(116,108,101,110,95,102,95,56,51,0);
          let greenB: Array<any> = [738, 579];
          let acopy_nG: Array<any> = [String.fromCharCode(102,97,99,116,111,114,115,95,113,95,51,49,0), String.fromCharCode(99,97,115,99,97,100,101,100,95,53,95,52,50,0), String.fromCharCode(115,115,114,99,115,95,55,95,55,56,0)];
          let delegate_q7 = 1;
         libfabricjniK += `${acopy_nG.length}`;
         weiboD = `${greenB.length & delegate_q7}`;
         greenB.push(greenB.length);
         acopy_nG = [2 - delegate_q7];
         if (iconorientation3) {
            break;
         }
      } while ((libfabricjniK != libfabricjniK) && iconorientation3);
      turndownL.push(1);
   }
      watchK -= parseFloat(`${3 & analyticsG.length}`);
   if (configo.get(`${turndownL.length}`) != null) {
       let phoneshare6 = String.fromCharCode(115,95,55,52,95,115,117,98,100,101,99,111,100,101,114,0);
       let libmapbufferjnit = 4.0;
      for (let r = 0; r < 3; r++) {
         libmapbufferjnit *= phoneshare6.length - 1;
      }
         phoneshare6 += `${phoneshare6.length | 3}`;
      let liveshare6 = 7288761 <= phoneshare6.length;
      do {
          let actionsT = String.fromCharCode(114,95,50,57,95,109,111,100,112,108,117,103,0);
          let iconeditn = 5.0;
          let sportsc = 3.0;
          let historyL = String.fromCharCode(97,95,55,48,95,99,111,108,117,109,110,108,105,115,116,0);
          let iconwatchnowr = String.fromCharCode(116,95,56,53,95,101,118,97,108,117,97,116,101,0);
         phoneshare6 = `${parseInt(`${iconeditn}`) ^ phoneshare6.length}`;
         actionsT = `${parseInt(`${sportsc}`) - iconwatchnowr.length}`;
         iconeditn += parseInt(`${sportsc}`);
         historyL += `${historyL.length}`;
         iconwatchnowr = `${(actionsT == String.fromCharCode(97,0) ? actionsT.length : parseInt(`${sportsc}`))}`;
         if (liveshare6) {
            break;
         }
      } while ((1.100 <= (phoneshare6.length - libmapbufferjnit)) && liveshare6);
       let icondefaultthumbnailo = String.fromCharCode(117,95,51,48,95,97,115,112,101,99,116,0);
      for (let b = 0; b < 3; b++) {
         libmapbufferjnit -= parseInt(`${libmapbufferjnit}`);
      }
         libmapbufferjnit += parseInt(`${libmapbufferjnit}`);
      turndownL.push((thumbnailT == String.fromCharCode(84,0) ? configo.size : thumbnailT.length));
   }
      manifestU /= Math.max(1, 5);
   if (configo.get(`${libcxxcomponentsI.length}`) == null) {
      configo.set(`${tickX}`, parseInt(`${tickX}`));
   }
       let matchinactiveb = false;
      for (let r = 0; r < 3; r++) {
         matchinactiveb = !matchinactiveb;
      }
         matchinactiveb = (matchinactiveb ? matchinactiveb : !matchinactiveb);
         matchinactiveb = !matchinactiveb && matchinactiveb;
      analyticsG = [schedulerG >> (Math.min(5, Math.abs(1)))];
   while (4 > (3 << (Math.min(2, analyticsG.length)))) {
       let darkj = 2.0;
       let libbufferl = 1.0;
       let anythinka = String.fromCharCode(105,95,55,56,95,116,105,109,101,98,97,115,101,0);
      let vietnamm = 9525501.0 >= libbufferl;
      do {
         libbufferl *= parseInt(`${darkj}`);
         if (vietnamm) {
            break;
         }
      } while ((3 > (anythinka.length << (Math.min(Math.abs(4), 4))) && 2.81 > (libbufferl / (Math.max(9, anythinka.length)))) && vietnamm);
       let bgvipsportf = String.fromCharCode(102,95,49,48,48,95,108,115,112,115,0);
       let combinedg = String.fromCharCode(117,95,55,51,95,110,111,110,99,111,110,116,97,99,116,0);
      while (bgvipsportf.length < 5) {
          let navigationx = String.fromCharCode(101,95,50,50,95,112,111,115,116,105,110,105,116,0);
          let penaltyshootN = String.fromCharCode(98,101,104,97,118,105,111,114,115,95,48,95,51,57,0);
          let cornershoote = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,95,103,95,49,51,0);
         combinedg = `${navigationx.length}`;
         navigationx += `${penaltyshootN.length}`;
         penaltyshootN = `${cornershoote.length}`;
         cornershoote += `${(String.fromCharCode(120,0) == penaltyshootN ? penaltyshootN.length : cornershoote.length)}`;
         break;
      }
      if (combinedg == String.fromCharCode(122,0)) {
         anythinka += `${bgvipsportf.length - combinedg.length}`;
      }
      while (parseInt(`${darkj}`) >= bgvipsportf.length) {
         bgvipsportf = `${anythinka.length}`;
         break;
      }
      analyticsG.push(2 * configo.size);
      break;
   }
   while (5 > (4 >> (Math.min(5, thumbnailT.length))) || (turndownL.length >> (Math.min(Math.abs(4), 1))) > 5) {
       let runtimeg = true;
       let submitv = String.fromCharCode(109,95,49,53,95,100,105,100,0);
       let encrypt7 = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,52,95,50,54,0);
       let launcher4 = String.fromCharCode(98,114,111,119,110,95,117,95,52,54,0);
      for (let b = 0; b < 3; b++) {
         runtimeg = (((runtimeg ? 42 : encrypt7.length) & encrypt7.length) == 42);
      }
      if (launcher4 != String.fromCharCode(120,0) && 4 <= encrypt7.length) {
         launcher4 += `${submitv.length}`;
      }
         submitv = `${encrypt7.length}`;
          let modeH = 5;
         runtimeg = launcher4 == String.fromCharCode(114,0);
         modeH /= Math.max(modeH, 1);
         submitv += `${(submitv.length >> (Math.min(2, Math.abs((runtimeg ? 1 : 5)))))}`;
      for (let d = 0; d < 2; d++) {
          let reddownarrowg: Map<any, any> = new Map([[String.fromCharCode(115,95,50,49,95,100,101,115,101,108,101,99,116,0),false ], [String.fromCharCode(105,95,53,57,95,114,101,109,105,110,100,0),false ]]);
          let cornere: Array<any> = [String.fromCharCode(97,102,116,101,114,95,116,95,51,49,0), String.fromCharCode(105,95,50,53,95,108,111,97,100,0), String.fromCharCode(112,95,55,48,95,115,112,97,114,115,101,110,101,115,115,0)];
          let unimplementedviewL = String.fromCharCode(104,95,57,50,95,114,111,117,116,101,114,0);
         encrypt7 = `${(submitv.length ^ (runtimeg ? 3 : 1))}`;
         reddownarrowg.set(unimplementedviewL, 2 & cornere.length);
         cornere.push(reddownarrowg.size & cornere.length);
         unimplementedviewL = "3";
      }
      let goallogoP = submitv == String.fromCharCode(118,121,103,107,53,49,121,57,118,108,0);
      do {
          let awayiconQ = String.fromCharCode(102,105,102,111,95,113,95,54,51,0);
         submitv += `${submitv.length}`;
         awayiconQ = `${1 * awayiconQ.length}`;
         if (goallogoP) {
            break;
         }
      } while ((launcher4 != String.fromCharCode(84,0)) && goallogoP);
      for (let h = 0; h < 1; h++) {
         encrypt7 = `${submitv.length * 2}`;
      }
       let bufferD = 0.0;
      for (let c = 0; c < 3; c++) {
          let favorite3 = String.fromCharCode(117,110,105,111,110,101,100,95,120,95,49,57,0);
          let orangeB = false;
          let langkeyQ = String.fromCharCode(112,99,97,112,95,100,95,53,56,0);
          let halffieldimageJ: Map<any, any> = new Map([[String.fromCharCode(101,95,53,54,0),String.fromCharCode(119,95,52,48,95,115,117,98,105,116,101,109,115,0)], [String.fromCharCode(111,117,116,101,114,95,49,95,57,50,0),String.fromCharCode(103,101,110,101,114,97,108,95,99,95,52,53,0)]]);
         launcher4 = `${((runtimeg ? 4 : 1) / 2)}`;
         favorite3 += `${halffieldimageJ.size << (Math.min(Math.abs(1), 2))}`;
         orangeB = langkeyQ.length > 33;
         langkeyQ += `${(String.fromCharCode(108,0) == favorite3 ? favorite3.length : halffieldimageJ.size)}`;
      }
         encrypt7 += `${submitv.length}`;
         encrypt7 = "2";
      turndownL = [turndownL.length];
      break;
   }
   for (let q = 0; q < 1; q++) {
      configo.set(`${watchK}`, parseInt(`${watchK}`));
   }
      analyticsG.push(1);
      schedulerG *= 3;
      configo.set(`${schedulerG}`, schedulerG);

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

      
      mayi_push.sportDetailsVipPopupTimesAnalytics();
      
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
       let yellowW: Array<any> = [313, 236];
    let reactnativeratingsG: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,97,99,99,101,115,115,111,114,0),true ], [String.fromCharCode(115,101,109,97,112,104,111,114,101,95,52,95,51,57,0),true ]]);
    let foregroundf = String.fromCharCode(101,95,53,57,95,115,117,109,109,101,100,0);
    let textlayoutmanageri = String.fromCharCode(101,110,99,111,100,105,110,103,95,111,95,51,51,0);
    let other7: Array<any> = [793, 40];
    let megaphone9 = 2;
    let backwardA = String.fromCharCode(104,105,103,104,105,103,104,116,95,48,95,55,57,0);
    let orientation6: Map<any, any> = new Map([[String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,95,103,95,50,48,0),false ], [String.fromCharCode(100,117,109,112,105,110,103,95,120,95,51,48,0),true ]]);
    let clubC = false;
    let penaltyshootnogoalL = String.fromCharCode(117,112,109,105,120,95,53,95,49,48,0);
    let huawei9: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,95,98,95,53,54,0),true ], [String.fromCharCode(119,95,55,54,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0),true ], [String.fromCharCode(101,95,56,49,95,105,100,97,116,97,0),true ]]);
   while (4 == orientation6.size) {
      orientation6.set(foregroundf, yellowW.length);
      break;
   }
   for (let z = 0; z < 1; z++) {
      reactnativeratingsG.set(`${megaphone9}`, other7.length);
   }
   if (4 <= (foregroundf.length << (Math.min(Math.abs(4), 5))) || 4 <= (reactnativeratingsG.size << (Math.min(Math.abs(4), 1)))) {
       let xvodL = String.fromCharCode(101,110,100,105,97,110,95,55,95,55,55,0);
       let more8 = String.fromCharCode(100,95,56,53,95,105,110,116,101,114,112,111,108,97,116,101,0);
      if (more8.length == xvodL.length) {
          let imagemanagerN: Map<any, any> = new Map([[String.fromCharCode(103,95,54,55,95,114,102,116,102,115,117,98,0),553], [String.fromCharCode(97,115,115,101,109,98,108,101,95,54,95,50,53,0),914], [String.fromCharCode(106,95,52,49,95,116,105,107,101,114,0),376]]);
          let libbufferC: Map<any, any> = new Map([[String.fromCharCode(102,95,54,52,95,112,114,111,118,105,100,101,114,115,0),true ], [String.fromCharCode(100,105,114,115,95,52,95,57,48,0),false ]]);
         more8 = "2";
         imagemanagerN.set(`${libbufferC.size}`, 2);
         libbufferC = new Map([[`${imagemanagerN.size}`, imagemanagerN.size + libbufferC.size]]);
      }
      let imagenetworkerre = more8.length >= 5006870;
      do {
         more8 = "1";
         if (imagenetworkerre) {
            break;
         }
      } while (imagenetworkerre && (xvodL.length > more8.length));
          let over0 = String.fromCharCode(110,95,56,52,95,119,104,97,116,0);
          let uploadI: Map<any, any> = new Map([[String.fromCharCode(121,95,57,50,95,111,110,118,101,114,115,97,116,105,111,110,0),String.fromCharCode(120,95,51,50,0)], [String.fromCharCode(98,97,99,107,95,102,95,51,52,0),String.fromCharCode(109,101,97,115,117,114,101,115,95,109,95,49,57,0)]]);
         xvodL = `${xvodL.length}`;
         over0 = "2";
         uploadI.set(`${over0}`, (over0 == String.fromCharCode(69,0) ? over0.length : uploadI.size));
       let promotion8 = 5.0;
      for (let x = 0; x < 2; x++) {
          let chatroombackground6 = 3.0;
          let iconclosewhitewithbgQ = false;
         promotion8 *= parseInt(`${chatroombackground6}`);
         iconclosewhitewithbgQ = !iconclosewhitewithbgQ || iconclosewhitewithbgQ;
      }
      if (2 == (parseInt(`${promotion8}`) * more8.length) && (more8.length * parseInt(`${promotion8}`)) == 2) {
         more8 += `${(xvodL == String.fromCharCode(51,0) ? parseInt(`${promotion8}`) : xvodL.length)}`;
      }
      foregroundf += `${reactnativeratingsG.size}`;
   }
   let fastF = 7221788 <= yellowW.length;
   do {
       let trophy8 = 5;
         trophy8 <<= Math.min(3, Math.abs(3 - trophy8));
         trophy8 %= Math.max(trophy8, 1);
         trophy8 >>= Math.min(3, Math.abs(1));
      yellowW.push(reactnativeratingsG.size);
      if (fastF) {
         break;
      }
   } while (fastF && (5 < megaphone9));
   while (clubC) {
      orientation6 = new Map([[`${reactnativeratingsG.size}`, megaphone9]]);
      break;
   }

    const bannerRes = await mayi_ConstCheckbox.getBannerAd(111);

   for (let c = 0; c < 2; c++) {
      megaphone9 -= ((clubC ? 4 : 2) << (Math.min(Math.abs(megaphone9), 4)));
   }
       let libfolly0: Map<any, any> = new Map([[String.fromCharCode(116,101,115,115,101,108,108,97,116,101,95,109,95,50,57,0),392], [String.fromCharCode(118,95,55,95,116,114,97,105,108,105,110,103,0),607]]);
       let scorepopsoundM = String.fromCharCode(101,118,98,117,102,102,101,114,95,104,95,53,56,0);
       let pathm = 2;
         libfolly0.set(scorepopsoundM, 3 & libfolly0.size);
      while (5 <= (2 | pathm) && 5 <= (scorepopsoundM.length | 2)) {
         scorepopsoundM += `${libfolly0.size >> (Math.min(Math.abs(2), 1))}`;
         break;
      }
      while (4 > scorepopsoundM.length) {
         scorepopsoundM = `${scorepopsoundM.length}`;
         break;
      }
      for (let c = 0; c < 2; c++) {
         pathm /= Math.max(4, pathm);
      }
      while ((scorepopsoundM.length >> (Math.min(5, Math.abs(libfolly0.size)))) >= 4) {
         libfolly0 = new Map([[scorepopsoundM, pathm]]);
         break;
      }
          let resultz = 1.0;
         scorepopsoundM = `${parseInt(`${resultz}`) + scorepopsoundM.length}`;
          let mimeg = 5.0;
         pathm |= 2 & scorepopsoundM.length;
         mimeg /= Math.max(parseFloat(`${parseInt(`${mimeg}`) * 2}`), 4);
         libfolly0 = new Map([[`${libfolly0.size}`, 2]]);
      for (let y = 0; y < 2; y++) {
         libfolly0 = new Map([[`${pathm}`, 1]]);
      }
      textlayoutmanageri = `${textlayoutmanageri.length % 1}`;
   if (clubC) {
      clubC = String.fromCharCode(112,0) == textlayoutmanageri;
   }
   let castingC = 8924045 <= other7.length;
   do {
      other7.push(textlayoutmanageri.length - orientation6.size);
      if (castingC) {
         break;
      }
   } while (castingC && (reactnativeratingsG.get(`${other7.length}`) != null));
      orientation6.set(`${megaphone9}`, megaphone9);
    const banner = bannerRes.ads;

   for (let m = 0; m < 3; m++) {
      megaphone9 -= megaphone9;
   }
      other7.push(backwardA.length / (Math.max(3, 2)));
       let predictionbuttonI = String.fromCharCode(97,95,55,51,95,97,118,102,111,114,109,97,116,0);
         predictionbuttonI = `${predictionbuttonI.length << (Math.min(Math.abs(1), 2))}`;
      while (3 > predictionbuttonI.length) {
         predictionbuttonI = "2";
         break;
      }
      while (predictionbuttonI != predictionbuttonI) {
          let iconadslinks = String.fromCharCode(98,99,100,117,105,110,116,95,56,95,54,56,0);
          let yellowscoreballz: Array<any> = [701, 328, 735];
          let huaweiW = 4.0;
          let updatesf = 0.0;
          let matchinactiveh = 5.0;
         predictionbuttonI += `${yellowscoreballz.length}`;
         iconadslinks = `${parseInt(`${updatesf}`) + 3}`;
         yellowscoreballz = [2 << (Math.min(Math.abs(parseInt(`${updatesf}`)), 3))];
         huaweiW /= Math.max(1, parseInt(`${updatesf}`) & 3);
         matchinactiveh += parseFloat(`${2}`);
         break;
      }
      backwardA = `${3 + orientation6.size}`;
      yellowW.push(orientation6.size);
       let promotionb = 1;
      let whiteanimationlivek = promotionb >= 8262196;
      do {
          let detailL = 0.0;
          let pressurek = 5.0;
          let malaysiaT = false;
         promotionb &= 2;
         detailL += (parseInt(`${pressurek}`) / (Math.max(8, (malaysiaT ? 2 : 5))));
         pressurek *= (parseInt(`${pressurek}`) ^ (malaysiaT ? 3 : 3));
         if (whiteanimationlivek) {
            break;
         }
      } while (whiteanimationlivek && (4 >= (promotionb | 3) && 3 >= (promotionb | promotionb)));
         promotionb += 2;
      for (let x = 0; x < 2; x++) {
          let borderless8 = 3.0;
          let hejik = String.fromCharCode(103,95,50,57,95,99,108,105,101,110,116,0);
         promotionb -= (hejik == String.fromCharCode(51,0) ? hejik.length : parseInt(`${borderless8}`));
      }
      yellowW = [3 >> (Math.min(4, other7.length))];

    if (banner) {

   if (1 >= (yellowW.length * 5) && 4 >= (yellowW.length * 5)) {
       let tumbnailQ = String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,95,54,95,49,48,48,0);
       let selectionU: Array<any> = [375, 2, 113];
       let dataz: Array<any> = [34, 76];
       let libreactnativejnit = String.fromCharCode(108,95,53,55,0);
       let nativeh: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,95,97,95,55,55,0),468], [String.fromCharCode(118,95,56,54,95,98,101,103,97,110,0),553], [String.fromCharCode(112,95,57,52,95,104,119,99,111,110,102,105,103,0),419]]);
         selectionU.push(nativeh.size >> (Math.min(Math.abs(1), 2)));
          let expiredb = true;
          let descf = String.fromCharCode(112,105,99,116,121,112,101,95,52,95,53,51,0);
          let libavdeviceK = String.fromCharCode(118,95,55,50,95,117,98,108,105,99,0);
         libreactnativejnit += `${(libavdeviceK == String.fromCharCode(118,0) ? libavdeviceK.length : descf.length)}`;
         expiredb = !expiredb || expiredb;
         descf = `${((expiredb ? 2 : 1) / (Math.max((expiredb ? 3 : 2), 1)))}`;
         dataz.push(3);
          let eabafadfadddbafeddddeeefeaafr: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,98,95,104,95,52,48,0),String.fromCharCode(102,95,53,54,95,105,110,105,116,105,97,108,105,122,101,0)], [String.fromCharCode(105,95,50,52,0),String.fromCharCode(116,95,49,48,48,95,108,97,98,101,108,115,0)], [String.fromCharCode(115,117,98,114,97,110,103,101,95,117,95,52,50,0),String.fromCharCode(117,95,51,57,95,101,120,112,111,114,116,101,100,0)]]);
          let videojsg: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,110,115,95,108,95,50,51,0),false ], [String.fromCharCode(121,95,50,52,95,116,97,105,108,115,0),true ]]);
         libreactnativejnit += `${eabafadfadddbafeddddeeefeaafr.size << (Math.min(tumbnailQ.length, 3))}`;
         eabafadfadddbafeddddeeefeaafr = new Map([[`${videojsg.size}`, videojsg.size | videojsg.size]]);
         nativeh = new Map([[`${selectionU.length}`, 1 & tumbnailQ.length]]);
       let overt: Array<any> = [837, 449, 12];
          let alertp: Array<any> = [40, 166];
          let connectionm: Array<any> = [440, 363, 215];
         overt.push(3 % (Math.max(1, overt.length)));
         alertp.push(alertp.length & 3);
         connectionm = [3];
      for (let i = 0; i < 2; i++) {
         libreactnativejnit = `${overt.length}`;
      }
      if (1 < (1 << (Math.min(2, overt.length))) || 1 < (libreactnativejnit.length << (Math.min(Math.abs(1), 4)))) {
         overt.push(libreactnativejnit.length);
      }
      if (libreactnativejnit.endsWith(`${dataz.length}`)) {
         dataz.push(overt.length);
      }
         nativeh.set(`${selectionU.length}`, selectionU.length + overt.length);
         tumbnailQ += `${tumbnailQ.length << (Math.min(Math.abs(1), 4))}`;
      for (let y = 0; y < 2; y++) {
          let librrcc = String.fromCharCode(115,119,105,102,116,121,95,114,95,52,51,0);
          let adultd: Map<any, any> = new Map([[String.fromCharCode(115,117,98,101,120,112,114,95,102,95,49,49,0),59], [String.fromCharCode(116,109,109,98,95,98,95,53,0),443]]);
          let mbsplashU = 5;
         selectionU = [3 ^ librrcc.length];
         librrcc += `${mbsplashU}`;
         adultd = new Map([[`${adultd.size}`, adultd.size]]);
         mbsplashU &= adultd.size | mbsplashU;
      }
         nativeh.set(`${dataz.length}`, selectionU.length % 3);
         dataz.push(tumbnailQ.length * dataz.length);
      megaphone9 <<= Math.min(5, Math.abs(3 - orientation6.size));
   }
       let renderD = String.fromCharCode(99,95,54,56,95,99,104,111,111,115,105,110,103,0);
       let iconsubssuccessm = 0;
         iconsubssuccessm |= 2;
       let orangedownarrowk = String.fromCharCode(99,95,50,53,0);
       let rnewinterstitialr = String.fromCharCode(112,114,111,99,101,115,115,95,104,95,53,49,0);
          let teamdetailsbgS = String.fromCharCode(98,101,99,97,109,101,95,52,95,53,57,0);
         iconsubssuccessm &= orangedownarrowk.length >> (Math.min(Math.abs(3), 1));
         teamdetailsbgS = `${teamdetailsbgS.length >> (Math.min(5, teamdetailsbgS.length))}`;
       let predictionarrowd: Map<any, any> = new Map([[String.fromCharCode(98,95,48,95,98,105,116,114,101,118,0),String.fromCharCode(104,101,120,105,110,116,95,114,95,49,48,0)], [String.fromCharCode(103,97,112,95,48,95,57,57,0),String.fromCharCode(98,95,53,95,111,110,116,111,0)], [String.fromCharCode(113,95,49,95,111,112,116,105,111,110,0),String.fromCharCode(103,95,57,50,95,112,114,111,109,111,0)]]);
       let yellowcirclebgh = String.fromCharCode(108,95,53,49,95,109,98,112,111,115,116,0);
       let backM = String.fromCharCode(115,95,57,48,95,115,101,103,109,101,110,116,117,114,108,110,111,100,101,0);
         backM = "2";
      yellowW.push(orientation6.size);
      renderD = `${renderD.length / (Math.max(1, 9))}`;
   let eighteenK = 8645086 >= orientation6.size;
   do {
      orientation6 = new Map([[`${megaphone9}`, 2]]);
      if (eighteenK) {
         break;
      }
   } while ((3 >= (2 | orientation6.size) || 2 >= (2 | orientation6.size)) && eighteenK);
      textlayoutmanageri += `${backwardA.length}`;
   while (!foregroundf.startsWith(`${clubC}`)) {
       let clearh = false;
       let eventv = String.fromCharCode(106,95,56,54,95,98,116,110,99,108,105,99,107,0);
       let floaterJ = String.fromCharCode(100,105,103,101,115,116,98,121,110,105,100,95,97,95,55,54,0);
       let championw = true;
         eventv = `${floaterJ.length}`;
       let redscoreballR = String.fromCharCode(120,95,49,54,95,117,99,111,110,115,116,0);
      if (floaterJ.startsWith(`${eventv.length}`)) {
         eventv += `${(redscoreballR == String.fromCharCode(106,0) ? eventv.length : redscoreballR.length)}`;
      }
         eventv += "1";
         floaterJ += `${(redscoreballR == String.fromCharCode(112,0) ? (championw ? 4 : 5) : redscoreballR.length)}`;
      let libavformatZ = redscoreballR == String.fromCharCode(107,98,48,113,55,54,0);
      do {
          let imagenetworkerrk = false;
          let photow = String.fromCharCode(108,95,55,53,95,116,97,98,108,101,108,105,109,0);
         redscoreballR += `${((championw ? 2 : 2) - eventv.length)}`;
         imagenetworkerrk = imagenetworkerrk && photow.length == 34;
         photow += "1";
         if (libavformatZ) {
            break;
         }
      } while ((redscoreballR.length >= 4) && libavformatZ);
       let libsentryg = String.fromCharCode(108,95,53,48,95,101,120,116,0);
      while (5 == floaterJ.length) {
         championw = eventv.length == floaterJ.length;
         break;
      }
          let bannerL: Map<any, any> = new Map([[String.fromCharCode(97,95,53,54,95,117,110,105,102,105,101,100,0),339], [String.fromCharCode(115,116,101,114,101,111,100,95,52,95,49,56,0),766], [String.fromCharCode(111,109,112,114,101,115,115,111,114,95,54,95,55,52,0),689]]);
          let predictiondefault1 = String.fromCharCode(100,95,53,54,95,114,101,100,101,101,109,0);
          let helperU = String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,95,112,95,57,49,0);
         clearh = String.fromCharCode(74,0) == predictiondefault1;
         bannerL = new Map([[`${bannerL.size}`, (helperU == String.fromCharCode(82,0) ? helperU.length : bannerL.size)]]);
         predictiondefault1 = `${(helperU == String.fromCharCode(108,0) ? bannerL.size : helperU.length)}`;
          let commenti = String.fromCharCode(98,117,102,102,101,114,105,110,103,95,110,95,54,54,0);
          let telemetryh = 5.0;
          let iconcloseh = 4.0;
         clearh = commenti == String.fromCharCode(118,0);
         commenti += `${3 ^ parseInt(`${iconcloseh}`)}`;
         telemetryh /= Math.max(1, parseFloat(`${parseInt(`${iconcloseh}`)}`));
         championw = eventv.endsWith(`${championw}`);
      for (let x = 0; x < 2; x++) {
         floaterJ = `${((clearh ? 2 : 2) - eventv.length)}`;
      }
      foregroundf = `${orientation6.size & backwardA.length}`;
      break;
   }
      setBannerAd(banner);
    } else {

   while (backwardA.length == foregroundf.length) {
       let predictionbannersharedk = String.fromCharCode(102,102,109,101,116,97,95,102,95,49,54,0);
       let spec8 = 1;
       let buildH = String.fromCharCode(107,95,57,52,95,112,117,115,104,0);
      for (let a = 0; a < 3; a++) {
         spec8 ^= (buildH == String.fromCharCode(100,0) ? buildH.length : spec8);
      }
         buildH += `${(String.fromCharCode(107,0) == buildH ? predictionbannersharedk.length : buildH.length)}`;
         buildH += "2 & spec8";
      while (predictionbannersharedk.length >= spec8) {
         spec8 += predictionbannersharedk.length;
         break;
      }
          let desc1 = 5.0;
          let moree = String.fromCharCode(105,95,54,95,118,100,97,116,97,0);
          let auto_50k = String.fromCharCode(98,95,54,48,95,102,101,101,100,0);
         spec8 >>= Math.min(Math.abs(1), 2);
         desc1 *= parseFloat(`${moree.length}`);
         moree += "2";
         auto_50k = `${2 << (Math.min(1, auto_50k.length))}`;
      let elements9 = 6350918 >= buildH.length;
      do {
         buildH += `${buildH.length}`;
         if (elements9) {
            break;
         }
      } while ((buildH.length == 2) && elements9);
          let dplusJ = 2.0;
         buildH = `${spec8}`;
         dplusJ -= parseInt(`${dplusJ}`);
      for (let w = 0; w < 2; w++) {
         spec8 %= Math.max(2, 2);
      }
         spec8 /= Math.max(5, predictionbannersharedk.length);
      backwardA += `${(String.fromCharCode(82,0) == buildH ? megaphone9 : buildH.length)}`;
      break;
   }
   while (backwardA.length >= 3) {
       let androidf = 1.0;
      if (androidf == androidf) {
          let icontransferclubc = 2.0;
          let anythink7 = 4.0;
          let file9 = String.fromCharCode(113,95,52,50,95,99,101,110,116,114,97,108,0);
          let annerH = String.fromCharCode(114,101,115,101,116,98,117,102,95,121,95,57,51,0);
          let actionO = String.fromCharCode(117,110,105,116,115,95,54,95,50,53,0);
         androidf -= 3;
         icontransferclubc += parseFloat(`${parseInt(`${anythink7}`)}`);
         file9 = `${2 << (Math.min(2, Math.abs(parseInt(`${anythink7}`))))}`;
         annerH += "1";
         actionO += `${(String.fromCharCode(88,0) == actionO ? actionO.length : annerH.length)}`;
      }
       let over6 = 1;
       let chinaH = 2;
       let binddatasz = 2.0;
       let videovari = 0.0;
      backwardA += `${(String.fromCharCode(75,0) == textlayoutmanageri ? other7.length : textlayoutmanageri.length)}`;
      break;
   }
   for (let y = 0; y < 3; y++) {
       let download8 = String.fromCharCode(103,100,115,112,95,104,95,53,57,0);
       let privatechatbgL = 3.0;
       let langkeyI = true;
       let pingp = String.fromCharCode(100,101,99,108,97,114,101,100,95,106,95,53,54,0);
       let gesturek = 4.0;
         pingp += `${pingp.length}`;
         langkeyI = !langkeyI;
       let sellmathbackground9: Map<any, any> = new Map([[String.fromCharCode(110,95,55,54,95,98,97,99,107,115,105,100,101,0),true ], [String.fromCharCode(111,117,116,111,117,116,95,112,95,50,50,0),true ]]);
      let iconorientation3 = String.fromCharCode(121,103,114,122,117,117,52,55,115,115,0) == download8;
      do {
         download8 += `${(parseInt(`${gesturek}`) ^ (langkeyI ? 3 : 1))}`;
         if (iconorientation3) {
            break;
         }
      } while ((!langkeyI) && iconorientation3);
      while ((3.77 - gesturek) >= 4.62 || 5 >= (3 / (Math.max(2, sellmathbackground9.size)))) {
         gesturek *= (parseFloat(`${(langkeyI ? 1 : 5) ^ parseInt(`${privatechatbgL}`)}`));
         break;
      }
      if (pingp.length == 5 || download8 != String.fromCharCode(66,0)) {
         pingp = "1";
      }
      let mbjscommonC = 4935305.0 >= gesturek;
      do {
          let penaltymatchiconM: Array<any> = [746, 540];
         gesturek -= parseFloat(`${penaltymatchiconM.length}`);
         if (mbjscommonC) {
            break;
         }
      } while (((sellmathbackground9.size | 5) >= 1) && mbjscommonC);
         sellmathbackground9 = new Map([[`${sellmathbackground9.size}`, sellmathbackground9.size]]);
          let executorZ = 1.0;
         download8 = `${1 + download8.length}`;
         executorZ += parseInt(`${executorZ}`);
       let bgvipsportR = String.fromCharCode(98,117,108,108,101,116,95,49,95,49,52,0);
      let routerQ = pingp.length >= 7368469;
      do {
         pingp = "2";
         if (routerQ) {
            break;
         }
      } while (routerQ && (2 < pingp.length && !langkeyI));
         privatechatbgL -= parseFloat(`${bgvipsportR.length}`);
          let default_zt = String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,101,95,53,0);
          let awayteamfieldd = 4.0;
          let modalL = 5.0;
         gesturek -= parseFloat(`${parseInt(`${awayteamfieldd}`) | 1}`);
         default_zt += `${parseInt(`${modalL}`) - default_zt.length}`;
         awayteamfieldd += parseInt(`${modalL}`);
         sellmathbackground9.set(`${langkeyI}`, (3 * (langkeyI ? 3 : 2)));
      let appleG = download8 == String.fromCharCode(107,56,97,50,121,105,111,49,105,107,0);
      do {
         download8 = `${(parseInt(`${privatechatbgL}`) - (langkeyI ? 1 : 1))}`;
         if (appleG) {
            break;
         }
      } while ((download8.startsWith(`${privatechatbgL}`)) && appleG);
      foregroundf += `${yellowW.length - textlayoutmanageri.length}`;
   }
       let gradleR = String.fromCharCode(107,95,56,49,95,103,111,111,103,0);
       let index4 = 5;
       let gmaile = 3;
      for (let x = 0; x < 3; x++) {
         gradleR += "2 - index4";
      }
         gradleR += "2";
      while ((index4 << (Math.min(Math.abs(5), 2))) <= 5) {
          let vietnamL = String.fromCharCode(104,95,56,51,95,101,115,99,97,112,101,0);
          let arrowupB = 3;
          let long_1w: Map<any, any> = new Map([[String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,108,95,57,0),154], [String.fromCharCode(120,95,57,51,95,110,117,109,101,114,105,99,97,108,0),871]]);
          let fastforwardJ = 1;
          let arrow6 = false;
         gradleR += `${gradleR.length >> (Math.min(3, Math.abs(gmaile)))}`;
         vietnamL += `${long_1w.size}`;
         arrowupB *= 1;
         long_1w = new Map([[vietnamL, (String.fromCharCode(115,0) == vietnamL ? arrowupB : vietnamL.length)]]);
         fastforwardJ %= Math.max(1, 5);
         arrow6 = fastforwardJ <= vietnamL.length;
         break;
      }
      while (5 <= (2 >> (Math.min(3, Math.abs(gmaile)))) || 3 <= (gmaile >> (Math.min(Math.abs(2), 1)))) {
         gmaile -= 1 << (Math.min(5, Math.abs(index4)));
         break;
      }
      for (let u = 0; u < 1; u++) {
         index4 &= gmaile;
      }
          let sheet9 = 5.0;
          let renderE = 1.0;
          let homeicon2: Map<any, any> = new Map([[String.fromCharCode(115,117,98,101,120,112,114,95,111,95,49,49,0),909], [String.fromCharCode(100,95,50,55,95,115,101,103,109,101,110,116,0),376]]);
         gmaile %= Math.max(parseInt(`${sheet9}`), 1);
         renderE *= homeicon2.size * parseInt(`${renderE}`);
         homeicon2.set(`${renderE}`, homeicon2.size);
      while (1 == (gradleR.length & index4) || 5 == (1 & gradleR.length)) {
         gradleR += "1";
         break;
      }
         gradleR += `${index4}`;
         index4 += gmaile;
      backwardA += `${other7.length}`;
   while (other7.length >= textlayoutmanageri.length) {
       let predictionarrows = String.fromCharCode(112,111,107,101,114,95,108,95,54,50,0);
      while (predictionarrows.length <= 3 || predictionarrows == String.fromCharCode(81,0)) {
          let groupO = 2.0;
          let main_vb: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,95,108,111,103,105,110,0),741], [String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,112,95,49,48,0),348]]);
          let hongkongX = 3.0;
          let s_titleG = String.fromCharCode(116,99,109,105,95,51,95,54,50,0);
         predictionarrows = `${predictionarrows.length}`;
         groupO -= 3 | parseInt(`${hongkongX}`);
         main_vb = new Map([[`${main_vb.size}`, parseInt(`${hongkongX}`) % 3]]);
         s_titleG = `${1 ^ parseInt(`${hongkongX}`)}`;
         break;
      }
          let malaysiaTp: Map<any, any> = new Map([[String.fromCharCode(108,95,50,53,95,98,101,97,116,0),232], [String.fromCharCode(97,95,57,50,95,112,107,101,121,0),10], [String.fromCharCode(112,95,51,54,95,112,97,114,116,105,99,108,101,0),608]]);
         predictionarrows += `${malaysiaTp.size >> (Math.min(Math.abs(1), 2))}`;
         predictionarrows = "3";
      other7.push(2);
      break;
   }
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchBannerAd();
  }, []);

  const onVipCountdownClick = useCallback(() => {
       let libavcodeck = String.fromCharCode(115,116,100,105,110,116,95,55,95,52,50,0);
    let skipj = true;
    let videobufferloadingz = 5.0;
    let sorta = String.fromCharCode(112,95,57,51,95,120,108,97,98,101,108,104,101,105,103,104,116,0);
    let update_4U = false;
    let libmapbufferjniO = String.fromCharCode(119,95,54,51,95,97,114,99,104,105,118,101,0);
    let homeinactiveE = 4.0;
    let humiditys = 4.0;
   if (update_4U && 3.21 >= (2.80 - homeinactiveE)) {
      homeinactiveE -= ((update_4U ? 2 : 1) % 3);
   }
      libmapbufferjniO = `${((update_4U ? 5 : 1))}`;
   while (!update_4U || 2 > sorta.length) {
      sorta += `${sorta.length}`;
      break;
   }
      libmapbufferjniO += "3";
   for (let a = 0; a < 1; a++) {
      libavcodeck += `${libavcodeck.length % (Math.max(2, 4))}`;
   }

    videoRef.current?.setPause(true);

   if (!update_4U) {
      update_4U = homeinactiveE <= 4.20 || update_4U;
   }
   for (let y = 0; y < 3; y++) {
      libavcodeck += `${parseInt(`${homeinactiveE}`) & 1}`;
   }
   for (let c = 0; c < 1; c++) {
      update_4U = libmapbufferjniO == String.fromCharCode(110,0);
   }
       let backu: Array<any> = [667, 690];
       let regengu: Array<any> = [768, 623];
      let pressureC = 9369966 >= backu.length;
      do {
         backu = [1 | regengu.length];
         if (pressureC) {
            break;
         }
      } while (pressureC && ((backu.length << (Math.min(regengu.length, 1))) > 5));
         backu.push(3);
         regengu.push(backu.length % (Math.max(3, regengu.length)));
      while ((2 * regengu.length) < 1) {
          let whitevideoliveI = 2.0;
          let activityi = 4.0;
          let redirecta = String.fromCharCode(112,112,99,99,111,109,109,111,110,95,120,95,49,52,0);
         backu.push(regengu.length);
         whitevideoliveI *= parseFloat(`${2 / (Math.max(parseInt(`${activityi}`), 1))}`);
         activityi += (redirecta == String.fromCharCode(102,0) ? redirecta.length : parseInt(`${whitevideoliveI}`));
         break;
      }
         regengu = [regengu.length - 3];
      for (let k = 0; k < 1; k++) {
         regengu.push(regengu.length | backu.length);
      }
      update_4U = libavcodeck.length > libmapbufferjniO.length;
      videobufferloadingz /= Math.max(4, ((skipj ? 3 : 3)));
    setShowBecomeVIPOverlay(true);

      update_4U = !sorta.includes(`${homeinactiveE}`);
      libavcodeck = `${(libmapbufferjniO == String.fromCharCode(115,0) ? parseInt(`${homeinactiveE}`) : libmapbufferjniO.length)}`;
   while ((2.69 * homeinactiveE) == 4.37 || homeinactiveE == 2.69) {
       let modelsD: Array<any> = [30, 642, 389];
       let time_zQ = 3.0;
      for (let i = 0; i < 3; i++) {
         time_zQ *= parseFloat(`${modelsD.length % 1}`);
      }
          let armvaG = String.fromCharCode(110,95,53,53,95,111,117,116,100,97,116,101,100,0);
          let manifestu = 3.0;
         time_zQ -= parseFloat(`${parseInt(`${time_zQ}`)}`);
         armvaG += `${(String.fromCharCode(48,0) == armvaG ? armvaG.length : parseInt(`${manifestu}`))}`;
         manifestu *= armvaG.length;
          let libyogaU = String.fromCharCode(104,95,54,57,95,104,97,115,0);
         modelsD.push(libyogaU.length - 3);
       let redirectR: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,55,95,56,0),String.fromCharCode(104,95,50,50,95,102,105,108,116,101,114,103,114,97,112,104,0)], [String.fromCharCode(104,101,97,100,105,110,103,95,119,95,52,49,0),String.fromCharCode(120,95,57,51,95,116,101,109,112,0)], [String.fromCharCode(102,97,110,116,111,109,95,115,95,54,49,0),String.fromCharCode(114,95,53,56,0)]]);
         redirectR = new Map([[`${redirectR.size}`, modelsD.length]]);
      for (let u = 0; u < 3; u++) {
         time_zQ -= parseFloat(`${3}`);
      }
      homeinactiveE -= sorta.length;
      break;
   }
      libmapbufferjniO = `${(libavcodeck == String.fromCharCode(118,0) ? (update_4U ? 1 : 5) : libavcodeck.length)}`;
      libmapbufferjniO = `${(parseInt(`${homeinactiveE}`) | (skipj ? 5 : 4))}`;

    

   while (sorta.length <= 2) {
      skipj = libmapbufferjniO.startsWith(`${homeinactiveE}`);
      break;
   }
       let arrowrightwithtailm = 5.0;
      let footballR = arrowrightwithtailm >= 7348624.0;
      do {
         arrowrightwithtailm -= parseFloat(`${parseInt(`${arrowrightwithtailm}`)}`);
         if (footballR) {
            break;
         }
      } while (footballR && (arrowrightwithtailm >= arrowrightwithtailm));
         arrowrightwithtailm -= parseFloat(`${parseInt(`${arrowrightwithtailm}`)}`);
      if (1.71 == (arrowrightwithtailm / (Math.max(arrowrightwithtailm, 6)))) {
         arrowrightwithtailm -= parseFloat(`${2 + parseInt(`${arrowrightwithtailm}`)}`);
      }
      homeinactiveE -= parseInt(`${videobufferloadingz}`);
      skipj = (humiditys / (Math.max(5, parseFloat(`${sorta.length}`)))) < 91.92;
   if (skipj && 2.78 == (5.32 - videobufferloadingz)) {
       let tickC = true;
       let regengy = 2;
       let libturbomodulejsijniP = true;
       let albumz = 1.0;
       let profileactiveT = String.fromCharCode(102,95,49,56,95,97,116,116,114,105,98,117,116,105,111,110,0);
      for (let g = 0; g < 2; g++) {
          let libcxxcomponentsJ = String.fromCharCode(108,95,55,95,108,105,98,97,118,114,101,115,97,109,112,108,101,0);
          let iconschedule4 = String.fromCharCode(112,116,105,111,110,115,95,119,95,56,55,0);
          let stepV = String.fromCharCode(111,116,111,102,95,106,95,49,55,0);
          let pressures = String.fromCharCode(98,95,51,95,109,101,97,115,117,114,105,110,103,0);
         albumz -= (parseFloat(`${parseInt(`${albumz}`) | (libturbomodulejsijniP ? 2 : 4)}`));
         libcxxcomponentsJ = `${pressures.length + stepV.length}`;
         iconschedule4 = `${stepV.length}`;
         pressures = `${pressures.length}`;
      }
      while (!libturbomodulejsijniP) {
          let homeinactiveg = 0;
          let iconqqx = String.fromCharCode(112,114,111,109,112,101,103,95,100,95,56,0);
          let overlayg = String.fromCharCode(111,95,55,53,95,116,119,105,110,118,113,0);
          let playercommonF: Map<any, any> = new Map([[String.fromCharCode(102,97,113,95,107,95,55,53,0),String.fromCharCode(99,99,105,112,95,121,95,51,57,0)], [String.fromCharCode(112,95,57,95,105,110,116,120,120,0),String.fromCharCode(109,111,99,107,95,49,95,56,56,0)]]);
         libturbomodulejsijniP = playercommonF.size > 84 && String.fromCharCode(78,0) == iconqqx;
         homeinactiveg *= 1 + homeinactiveg;
         iconqqx = `${overlayg.length << (Math.min(Math.abs(1), 5))}`;
         overlayg = `${(String.fromCharCode(70,0) == overlayg ? overlayg.length : homeinactiveg)}`;
         playercommonF = new Map([[overlayg, overlayg.length >> (Math.min(4, Math.abs(homeinactiveg)))]]);
         break;
      }
      for (let y = 0; y < 2; y++) {
         tickC = regengy == 79;
      }
      if (!profileactiveT.endsWith(`${libturbomodulejsijniP}`)) {
         libturbomodulejsijniP = 97 == profileactiveT.length;
      }
      let heartX = albumz >= 7996786.0;
      do {
         albumz -= parseFloat(`${regengy}`);
         if (heartX) {
            break;
         }
      } while (((3 | regengy) < 1 && (parseFloat(`${regengy}`) - albumz) < 2.11) && heartX);
      if (4 <= profileactiveT.length) {
          let libbuffer4 = 3.0;
          let agreementW = String.fromCharCode(99,111,109,98,95,99,95,50,50,0);
          let tickedo = false;
          let sendn = 1.0;
         libturbomodulejsijniP = 52 == (regengy * albumz);
         libbuffer4 *= parseInt(`${sendn}`);
         agreementW += `${3 << (Math.min(2, agreementW.length))}`;
         tickedo = libbuffer4 <= 2.11 && tickedo;
         sendn += (parseFloat(`${parseInt(`${sendn}`) >> (Math.min(1, Math.abs((tickedo ? 3 : 5))))}`));
      }
      for (let u = 0; u < 3; u++) {
         profileactiveT = "1";
      }
      while (albumz == regengy) {
          let libfbN: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,101,110,116,95,48,95,54,53,0),449], [String.fromCharCode(110,95,54,51,95,98,105,116,114,97,116,101,0),306], [String.fromCharCode(114,95,49,51,95,108,105,118,101,100,0),147]]);
          let libsentryF = 0.0;
          let mimec: Array<any> = [832, 438];
          let predictionactiveY: Array<any> = [356, 822, 662];
          let cancelC: Array<any> = [749, 712];
         albumz /= Math.max((parseFloat(`${(libturbomodulejsijniP ? 5 : 2) - parseInt(`${albumz}`)}`)), 2);
         libfbN.set(`${predictionactiveY.length}`, cancelC.length * predictionactiveY.length);
         libsentryF /= Math.max(1, predictionactiveY.length);
         mimec = [libfbN.size / 2];
         cancelC.push(parseInt(`${libsentryF}`));
         break;
      }
         profileactiveT += `${3 / (Math.max(parseInt(`${albumz}`), 7))}`;
       let mimoq = false;
       let select9 = false;
      let borderless4 = select9 ? !select9 : select9;
      do {
         select9 = !mimoq;
         if (borderless4) {
            break;
         }
      } while (borderless4 && (!mimoq && select9));
          let frame_49 = String.fromCharCode(109,105,108,108,101,114,95,114,95,53,50,0);
         albumz *= parseFloat(`${regengy}`);
         frame_49 += `${frame_49.length}`;
      while (!profileactiveT.startsWith(`${select9}`)) {
         profileactiveT = `${2 + parseInt(`${albumz}`)}`;
         break;
      }
      while (select9) {
         select9 = 73 > regengy && tickC;
         break;
      }
      if (!tickC) {
          let controlsn: Array<any> = [124, 8, 174];
          let previeww = 1;
          let football8 = false;
          let penaltyM: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,109,97,108,95,48,95,49,50,0),986], [String.fromCharCode(100,114,97,103,103,101,100,95,98,95,51,56,0),102], [String.fromCharCode(118,97,114,109,97,115,107,95,53,95,57,50,0),91]]);
         tickC = !libturbomodulejsijniP;
         controlsn.push(3);
         previeww &= 3;
         football8 = (((football8 ? 31 : penaltyM.size) | penaltyM.size) == 31);
      }
      skipj = regengy <= parseInt(`${homeinactiveE}`);
   }
   if (3.45 > homeinactiveE) {
       let subbasketballplayer7 = String.fromCharCode(106,95,57,56,95,109,117,108,116,105,0);
       let leftg = String.fromCharCode(105,110,105,116,115,109,111,116,105,111,110,95,52,95,57,0);
      while (!subbasketballplayer7.includes(leftg)) {
         leftg += `${subbasketballplayer7.length + 1}`;
         break;
      }
          let upgradeu = String.fromCharCode(111,109,112,111,115,101,95,49,95,52,48,0);
          let downloadL = String.fromCharCode(97,95,49,50,95,112,116,105,111,110,115,0);
          let matchesT = String.fromCharCode(121,95,50,54,95,115,101,115,115,105,111,110,0);
         leftg += `${downloadL.length}`;
         upgradeu += `${upgradeu.length}`;
         downloadL = `${2 ^ upgradeu.length}`;
         matchesT += `${matchesT.length}`;
         leftg += `${subbasketballplayer7.length}`;
      if (leftg.includes(subbasketballplayer7)) {
         leftg += `${subbasketballplayer7.length}`;
      }
         subbasketballplayer7 += `${subbasketballplayer7.length}`;
      if (subbasketballplayer7 == String.fromCharCode(67,0)) {
         leftg = `${subbasketballplayer7.length - leftg.length}`;
      }
      homeinactiveE -= ((skipj ? 3 : 5));
   }
    mayi_push.sportDetailsVipPopupTimesAnalytics();
    
  }, []);

  const onGoPrivateChatPress = () => {
       let footballfiledlayoutj = false;
    let e_view5 = 4;
    let libjsiw: Map<any, any> = new Map([[String.fromCharCode(111,95,55,48,95,100,101,118,112,111,108,108,0),340], [String.fromCharCode(109,95,55,52,95,97,108,108,0),549]]);
    let reactnavigationh = 2;
    let weatherl: Map<any, any> = new Map([[String.fromCharCode(100,95,52,53,95,103,101,116,102,114,97,109,101,0),true ], [String.fromCharCode(114,105,112,101,109,100,95,121,95,50,53,0),false ]]);
    let pingD = String.fromCharCode(117,110,105,102,111,114,109,115,95,121,95,52,48,0);
    let homeloadingS = 1.0;
    let catalogI: Array<any> = [829, 549, 51];
    let hongkongC = String.fromCharCode(112,111,111,108,114,101,102,95,117,95,50,50,0);
    let confirmationD = true;
    let vietnamq = 0.0;
    let watch8 = 0.0;
    let inactive0 = 1.0;
    let grayT: Array<any> = [999, 653];
    let gifgoalbgW = String.fromCharCode(101,110,99,108,97,118,101,95,105,95,55,56,0);
   while (parseInt(`${watch8}`) == pingD.length) {
      pingD += `${e_view5}`;
      break;
   }
      confirmationD = pingD.includes(`${watch8}`);
       let file3 = 1;
       let libfabricjnil = 4.0;
         file3 >>= Math.min(5, Math.abs(3));
          let gifgoalbgT = String.fromCharCode(98,95,57,95,114,101,115,112,101,99,116,105,110,103,0);
          let unselectedf = 4;
          let actionR = String.fromCharCode(115,95,50,55,95,108,111,103,0);
         libfabricjnil *= 3;
         gifgoalbgT = `${unselectedf}`;
         unselectedf ^= 3;
         actionR += `${(actionR == String.fromCharCode(50,0) ? unselectedf : actionR.length)}`;
         libfabricjnil -= file3;
          let penaltyr = 0.0;
          let iconnotificationnew_ = String.fromCharCode(111,95,55,49,95,102,101,97,116,117,114,101,0);
          let screen8 = String.fromCharCode(99,104,97,110,110,101,108,95,51,95,50,0);
         libfabricjnil -= iconnotificationnew_.length;
         penaltyr /= Math.max(1, parseFloat(`${parseInt(`${penaltyr}`)}`));
         iconnotificationnew_ += "1";
         screen8 = `${parseInt(`${penaltyr}`)}`;
         file3 >>= Math.min(Math.abs(1 - parseInt(`${libfabricjnil}`)), 3);
         file3 &= file3 / (Math.max(7, parseInt(`${libfabricjnil}`)));
      hongkongC = `${weatherl.size}`;
   if (4 >= (3 | pingD.length) || 2 >= (reactnavigationh | 3)) {
      pingD += `${reactnavigationh}`;
   }
   let libnmsW = vietnamq >= 7488936.0;
   do {
       let vignette4 = String.fromCharCode(115,105,103,110,117,109,95,52,95,52,48,0);
      while (5 > vignette4.length) {
         vignette4 += `${vignette4.length << (Math.min(Math.abs(2), 5))}`;
         break;
      }
       let showless8 = 3.0;
       let thailandU = 3.0;
      while (vignette4.includes(`${showless8}`)) {
         vignette4 = "1";
         break;
      }
      vietnamq *= (parseFloat(`${(footballfiledlayoutj ? 2 : 5) << (Math.min(Math.abs(weatherl.size), 5))}`));
      if (libnmsW) {
         break;
      }
   } while (libnmsW && (vietnamq < homeloadingS));
   for (let o = 0; o < 3; o++) {
      reactnavigationh /= Math.max(1, (parseInt(`${watch8}`) * (footballfiledlayoutj ? 5 : 5)));
   }
   if (5 == (weatherl.size & 2)) {
      confirmationD = 31.33 == watch8 && 34 == reactnavigationh;
   }
   let showi = 6804831.0 <= vietnamq;
   do {
       let logouser0 = String.fromCharCode(97,114,103,95,105,95,57,0);
       let yingD: Array<any> = [49, 768];
       let applicationZ: Array<any> = [30, 154, 711];
       let settingsb = String.fromCharCode(117,95,56,55,95,115,97,118,101,0);
       let configurea = 2.0;
          let libffmpegkitm: Map<any, any> = new Map([[String.fromCharCode(117,95,52,56,95,114,105,110,103,105,110,103,0),981], [String.fromCharCode(109,95,52,51,95,102,108,111,97,116,115,0),134], [String.fromCharCode(99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,95,57,95,57,51,0),998]]);
         yingD = [settingsb.length >> (Math.min(Math.abs(2), 2))];
         libffmpegkitm = new Map([[`${libffmpegkitm.size}`, libffmpegkitm.size]]);
         settingsb = `${settingsb.length / 2}`;
         configurea /= Math.max(5, settingsb.length);
       let twitterY = true;
       let area4 = 0.0;
       let membershipW = 0.0;
      for (let n = 0; n < 1; n++) {
          let zhengpianD = 4.0;
         settingsb += `${settingsb.length}`;
         zhengpianD += parseInt(`${zhengpianD}`) - parseInt(`${zhengpianD}`);
      }
         logouser0 = `${2 >> (Math.min(Math.abs(parseInt(`${configurea}`)), 1))}`;
         settingsb = `${(String.fromCharCode(122,0) == logouser0 ? parseInt(`${configurea}`) : logouser0.length)}`;
         configurea /= Math.max(applicationZ.length, 5);
      if (settingsb == logouser0) {
         logouser0 += `${settingsb.length}`;
      }
         logouser0 = `${3 & applicationZ.length}`;
         membershipW -= settingsb.length % (Math.max(9, logouser0.length));
      if (applicationZ.length < settingsb.length) {
         applicationZ = [parseInt(`${configurea}`) >> (Math.min(3, Math.abs(parseInt(`${area4}`))))];
      }
      while (!twitterY) {
          let owngoaln = 1.0;
          let temperature1 = String.fromCharCode(109,98,101,100,103,101,95,106,95,54,52,0);
         twitterY = logouser0.length <= parseInt(`${owngoaln}`);
         owngoaln += parseFloat(`${temperature1.length % 3}`);
         temperature1 = `${temperature1.length & temperature1.length}`;
         break;
      }
          let iconmore8 = false;
         yingD = [parseInt(`${membershipW}`) & 3];
         iconmore8 = (iconmore8 ? iconmore8 : !iconmore8);
      vietnamq -= parseFloat(`${parseInt(`${vietnamq}`)}`);
      if (showi) {
         break;
      }
   } while (showi && (1.8 > vietnamq));

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
        <VipRegisterBar onPress={() => {
          videoRef.current?.setPause(true);
        }} />

        {bannerAd &&  !mayi_Gift.isVip(userState.user) && (
          <View style={{
            
            
            
          }}>
            <BannerContainer
              bannerAd={bannerAd}
              onMount={() => {
                mayi_push.videoPlayerBannerViewAnalytics({
                  playerType: 'sport',
                  ads_slot_id: bannerAd.ads_slot_id,
                  ads_id: bannerAd.ads_id,
                  ads_title: bannerAd.ads_title,
                  ads_name: bannerAd.ads_name,
                });
              }}
              onPress={() => {
                mayi_push.videoPlayerBannerClickAnalytics({
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
              source={require('@static/images/robotoNetwork.gif')}
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
