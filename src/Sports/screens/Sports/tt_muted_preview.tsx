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
import ScreenContainer from '../../../components/container/tt_backward';
import MainHeader from '../../../components/header/tt_inactive_strings_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { ttAnythinkSend, ttAnalytics, ttGrayRoom } from '@type/tt_line_borderless';
import VodPlaylist from '../../../components/playlist/tt_button';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import FastImage from '../../../components/common/tt_connection';
import ttDescTerms from '../../middleware/tt_chat';
import { Url } from '../../middleware/tt_field';
import { formatMatchDate } from '../../utility/utils';
import { ttAway, ttCompleteChampion } from '../../types/tt_zhubo';
import MatchDetailsNav from '../../components/matchDetails/tt_hooks_view';
import MatchSchedule from '../../components/matchSchedule/tt_regeng_center';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer, { ttGreyBorderless } from '../../../components/videoPlayer/tt_strings';
import { parseVideoURL } from '../../utility/tt_foreground_area';
import Video from 'react-native-video';
import LiveVideo from '../../components/liveVideo/tt_collection_injury';
import { VideoLiveType } from '../../global/tt_libcrashsdk_spinner';
import {
  ttVideoSuccess,
  ttHeart,
} from '../../types/tt_sound';
import { ttReminderScreen } from '../../types/tt_handler_prediction';
import BeforeLive from '../../components/beforeLive';
import StatisticPage from '../../components/matchDetails/statisticPage';
import { ttStatsPagination } from '../../types/tt_mbridge';
import LineUpPage from '../../components/matchDetails/lineUpPage';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/tt_spec_download';
import { screenModel } from '@type/tt_twitter_data';
import { incrementSportWatchTime } from '@redux/actions/tt_copy_heji';
import BecomeVipOverlay from "../../../components/modal/tt_type";
import { NON_VIP_STREAM_TIME_SECONDS } from '@utility/tt_trophy_cross';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import { ttOrange } from '@redux/tt_updates_bottom';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ttBaiduNewinterstitial } from '@redux/reducers/tt_center';
import VipRegisterBar from '../../../components/adultVideo/tt_button_spinner';
import { BannerContainer } from '../../../components/container/tt_injury';
import { ttConfigRecommendation } from '../../../../tt_copy_floater';
import { ttDropdown } from '@api';
import LiveChatPage from '../../components/matchDetails/liveChatPage';
import PrivateChatPage from '../../components/matchDetails/privateChatPage';
import { ttGoal } from '@redux/reducers/tt_selected';
import { ttFast } from '@models/tt_stations_right';

let insetsTop = 0;
let insetsBottom = 0;

type ttBing = {
  item: ttAway;
  index: number;
};

interface ttRegister {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

type ttFaviconMoon = {
  type: number;
  url: any;
};

const MatchDetails = ({ navigation, route }: BottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );
  const userState = useSelector<ttGoal>('userReducer');
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<ttAnythinkSend>);
  const [videoSource, setVideoSource] = useState<ttFaviconMoon>({
    type: 0,
    url: undefined,
  });
  const [isLiveVideoFullScreen, setIsLiveVideoFullScreen] = useState(false);
  const [shouldShowComponents, setShouldShowComponents] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const showCountdown = !ttFast.isVip(userState.user);

  const videoRef = useRef<ttGreyBorderless | null>(null);
  const [bannerAd, setBannerAd] = useState<ttAnalytics>();
  const isVip = ttFast.isVip(userState.user);
  const sportTabDetails: ttGrayRoom = ttConfigRecommendation.instance.findTabByKey('体育');

  

  
  useEffect(() => {
    tt_humidity_guide.sportDetailsViewsAnalytics();
  }, [])
  

  const { data: match } = useQuery({
    queryKey: ['liveRoomDetails', matchID],
    queryFn: () =>
      ttDescTerms.call(`${Url.liveRoomDetail}?id=${matchID}`, {}, 'GET').then(
        (res): ttAway => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const { data: matchDetails, isFetching: f1 } = useQuery({
    queryKey: ['matchDetails', matchID, streamID],
    queryFn: () =>
      ttDescTerms.call(`${Url.matchDetails}?id=${matchID}`, {}, 'GET').then(
        (res): ttVideoSuccess => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: liveRoomUpdate, isFetching: f2 } = useQuery({
    queryKey: ['liveRoomUpdate', matchID, streamID],
    queryFn: () =>
      ttDescTerms.call(
        `${Url.matchUpdate}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): ttReminderScreen => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const { data: matchLineUp, isFetching: f3 } = useQuery({
    queryKey: ['matchLineUp', matchID, streamID],
    queryFn: () =>
      ttDescTerms.call(
        `${Url.matchLineup}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): ttStatsPagination => {
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
       let videos = String.fromCharCode(117,108,111,110,103,95,104,95,51,57,0);
    let brightnessy = String.fromCharCode(108,105,98,119,101,98,112,0);
    let shrinkb = true;
    let backwardk = false;
    let plashB = true;
    let typingT = String.fromCharCode(98,107,116,114,0);
    let androidz = String.fromCharCode(97,95,51,57,95,116,111,116,97,108,0);
    let awayx = String.fromCharCode(109,95,48,95,100,101,97,99,116,105,118,97,116,101,100,0);
    let faviconP = String.fromCharCode(117,95,54,50,95,115,113,117,97,114,101,100,0);
    let goal2 = false;
    let historyW = String.fromCharCode(111,95,57,50,0);
    let greyN = String.fromCharCode(102,105,120,116,117,114,101,115,95,116,95,53,52,0);
    let downloadingV: Array<any> = [236, 354];
    let updates6 = 3;
    let sortK: Array<any> = [234, 709];
   let splashS = brightnessy == String.fromCharCode(103,53,49,117,51,57,106,98,100,110,0);
   do {
       let disconnected3 = 1;
       let stringsF = 0.0;
       let zhengpianf: Map<any, any> = new Map([[String.fromCharCode(110,95,57,0),656], [String.fromCharCode(118,95,49,55,95,110,105,115,116,112,0),214], [String.fromCharCode(122,95,49,53,95,111,99,99,117,114,114,101,110,99,101,115,0),72]]);
       let basketballM = String.fromCharCode(117,95,55,54,95,118,105,98,114,97,116,101,0);
       let tooltipsc = String.fromCharCode(97,95,50,54,95,105,110,118,97,114,105,97,110,116,115,0);
      let filledo = String.fromCharCode(106,114,114,0) == tooltipsc;
      do {
          let favoriteu = true;
         tooltipsc += `${(tooltipsc == String.fromCharCode(69,0) ? zhengpianf.size : tooltipsc.length)}`;
         favoriteu = !favoriteu || favoriteu;
         if (filledo) {
            break;
         }
      } while (filledo && (tooltipsc.length > disconnected3));
      if (4.47 <= (3.51 - stringsF) && (zhengpianf.size / 4) <= 3) {
         stringsF /= Math.max(zhengpianf.size, 5);
      }
         tooltipsc += "2";
      if (!basketballM.includes(`${zhengpianf.size}`)) {
         basketballM = `${zhengpianf.size ^ 3}`;
      }
         disconnected3 *= parseInt(`${stringsF}`);
      for (let n = 0; n < 1; n++) {
         disconnected3 |= disconnected3 | parseInt(`${stringsF}`);
      }
      for (let l = 0; l < 3; l++) {
         basketballM = "1";
      }
         zhengpianf = new Map([[basketballM, (String.fromCharCode(110,0) == tooltipsc ? tooltipsc.length : basketballM.length)]]);
      while (4 >= disconnected3) {
         stringsF *= 3 << (Math.min(4, basketballM.length));
         break;
      }
       let navigationy: Array<any> = [892, 603, 891];
       let turns: Array<any> = [15, 574, 64];
         tooltipsc = "2";
         tooltipsc = `${basketballM.length}`;
          let sigmobc: Map<any, any> = new Map([[String.fromCharCode(116,108,117,116,95,51,95,57,50,0),345], [String.fromCharCode(111,114,105,103,110,97,108,95,98,95,52,57,0),902], [String.fromCharCode(104,95,49,54,95,99,111,117,110,116,114,105,101,115,0),761]]);
          let half_ = String.fromCharCode(111,95,55,51,95,115,101,103,0);
          let dropdownv = String.fromCharCode(102,95,50,50,95,97,98,111,117,116,115,0);
         stringsF -= (basketballM == String.fromCharCode(53,0) ? basketballM.length : disconnected3);
         sigmobc.set(half_, dropdownv.length);
         half_ += `${2 << (Math.min(2, half_.length))}`;
         dropdownv = `${sigmobc.size % 2}`;
      let fieldg = String.fromCharCode(116,107,120,50,57,0) == tooltipsc;
      do {
         tooltipsc = `${turns.length}`;
         if (fieldg) {
            break;
         }
      } while (((1 / (Math.max(5, zhengpianf.size))) > 1 && 3 > (zhengpianf.size / (Math.max(1, 5)))) && fieldg);
         disconnected3 |= navigationy.length;
      brightnessy = `${1 >> (Math.min(4, tooltipsc.length))}`;
      if (splashS) {
         break;
      }
   } while ((5 <= brightnessy.length) && splashS);
   for (let n = 0; n < 2; n++) {
       let dragE = String.fromCharCode(105,95,49,95,99,97,118,112,0);
       let ballr = false;
       let settingX = String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,95,111,95,49,48,48,0);
       let clock_: Array<any> = [488, 169, 800];
      let weibom = ballr ? !ballr : ballr;
      do {
          let rulesB = 5;
          let constantsJ = 1.0;
          let scheduleI: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,118,95,108,95,55,54,0),true ], [String.fromCharCode(98,99,109,112,95,99,95,53,57,0),true ]]);
         ballr = scheduleI.size == dragE.length;
         rulesB |= rulesB + 1;
         constantsJ += parseInt(`${constantsJ}`);
         scheduleI.set(`${rulesB}`, rulesB);
         if (weibom) {
            break;
         }
      } while ((settingX.includes(`${ballr}`)) && weibom);
         settingX += `${clock_.length}`;
       let currentw = 0.0;
       let reportC = 2.0;
         currentw *= parseFloat(`${3 * parseInt(`${reportC}`)}`);
      if (settingX.length >= 2 && ballr) {
         settingX = `${(String.fromCharCode(48,0) == dragE ? dragE.length : parseInt(`${currentw}`))}`;
      }
      for (let f = 0; f < 1; f++) {
         settingX += `${parseInt(`${currentw}`)}`;
      }
         ballr = parseFloat(`${clock_.length}`) <= currentw;
      let result2 = 8250690.0 <= currentw;
      do {
          let upload4 = 0.0;
         currentw /= Math.max(2, parseFloat(`${2}`));
         upload4 *= 3 >> (Math.min(Math.abs(parseInt(`${upload4}`)), 5));
         if (result2) {
            break;
         }
      } while (result2 && (3.90 > (currentw + reportC) || 2.35 > (reportC + 3.90)));
         clock_.push(1 * parseInt(`${currentw}`));
       let dropdownA = 4.0;
       let watchT = 5.0;
         currentw /= Math.max(parseFloat(`${parseInt(`${watchT}`) * 2}`), 5);
      while (2 >= (clock_.length ^ 1) || 5 >= (clock_.length >> (Math.min(Math.abs(1), 4)))) {
          let completeV = 0.0;
          let buttona = true;
         clock_.push(settingX.length % 1);
         completeV += ((buttona ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${completeV}`)), 5)));
         buttona = 26.94 < completeV;
         break;
      }
      shrinkb = (92 <= (settingX.length << (Math.min(2, Math.abs((!ballr ? 92 : settingX.length))))));
   }
   if (androidz.length == 5) {
      goal2 = (videos.length & typingT.length) == 8;
   }
      shrinkb = (((goal2 ? 66 : historyW.length) | historyW.length) <= 66);
      plashB = (typingT.length ^ videos.length) == 92;
   let libcrashsdki = shrinkb ? !shrinkb : shrinkb;
   do {
       let moonB = String.fromCharCode(102,105,112,115,95,112,95,53,48,0);
       let handlerM = true;
       let sideq = 4.0;
       let anythinkv: Array<any> = [760, 809, 5];
       let lighta: Map<any, any> = new Map([[String.fromCharCode(110,95,57,52,0),437], [String.fromCharCode(97,99,99,111,114,100,105,110,103,95,53,95,56,54,0),846]]);
          let playercommon_ = 1;
          let teamn = String.fromCharCode(111,99,97,116,105,111,110,95,119,95,50,52,0);
          let large2 = 4.0;
         anythinkv = [moonB.length >> (Math.min(Math.abs(1), 5))];
         playercommon_ /= Math.max(1, teamn.length & parseInt(`${large2}`));
         teamn += `${teamn.length}`;
         large2 -= playercommon_ << (Math.min(teamn.length, 5));
         anythinkv = [((handlerM ? 4 : 4))];
          let shrink9: Array<any> = [499, 951, 598];
          let screen4 = 0.0;
          let weiboN: Array<any> = [974, 17, 758];
         sideq *= ((handlerM ? 5 : 4) ^ moonB.length);
         shrink9.push(shrink9.length | 2);
         screen4 *= parseFloat(`${parseInt(`${screen4}`)}`);
         weiboN.push(1);
      let overp = sideq >= 7701180.0;
      do {
         sideq += parseInt(`${sideq}`) ^ anythinkv.length;
         if (overp) {
            break;
         }
      } while ((sideq <= moonB.length) && overp);
      for (let a = 0; a < 1; a++) {
         lighta.set(`${handlerM}`, ((handlerM ? 1 : 2)));
      }
         anythinkv.push(anythinkv.length);
         anythinkv = [1];
         anythinkv.push(lighta.size);
          let share0 = 3;
          let bufferM = 5.0;
         sideq *= ((handlerM ? 2 : 2) + parseInt(`${sideq}`));
         share0 <<= Math.min(3, Math.abs(1 - parseInt(`${bufferM}`)));
         bufferM *= 1;
      for (let w = 0; w < 2; w++) {
         lighta = new Map([[`${handlerM}`, moonB.length]]);
      }
       let details4 = String.fromCharCode(115,108,105,99,101,116,121,112,101,95,115,95,51,56,0);
          let contextX = 0.0;
         handlerM = (parseInt(`${contextX}`) + lighta.size) < 43;
      for (let i = 0; i < 2; i++) {
         details4 += `${(details4 == String.fromCharCode(67,0) ? lighta.size : details4.length)}`;
      }
      let productW = handlerM ? !handlerM : handlerM;
      do {
         handlerM = 99 >= lighta.size || 99 >= anythinkv.length;
         if (productW) {
            break;
         }
      } while (productW && (!handlerM || 3.94 >= (3.21 + sideq)));
         moonB += `${(moonB.length * (handlerM ? 4 : 3))}`;
      shrinkb = backwardk || historyW.length >= 22;
      if (libcrashsdki) {
         break;
      }
   } while ((typingT.length >= 4) && libcrashsdki);
   while (goal2) {
      faviconP = `${(typingT == String.fromCharCode(116,0) ? historyW.length : typingT.length)}`;
      break;
   }
      typingT += `${1 & androidz.length}`;
      faviconP += `${((backwardk ? 3 : 1))}`;
      faviconP = `${((plashB ? 1 : 5) * 1)}`;
      typingT += `${(androidz.length * (backwardk ? 1 : 5))}`;
       let rightt = 2.0;
       let dialog2: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,112,114,105,110,116,111,117,116,0),550], [String.fromCharCode(109,112,101,103,118,105,100,101,111,95,99,95,53,56,0),284], [String.fromCharCode(116,116,97,103,0),846]]);
       let profileY = String.fromCharCode(119,95,56,48,95,98,117,102,115,0);
         dialog2 = new Map([[profileY, parseInt(`${rightt}`)]]);
         dialog2.set(`${rightt}`, 3 << (Math.min(3, Math.abs(dialog2.size))));
      let z_managerE = String.fromCharCode(102,107,114,115,122,50,106,0) == profileY;
      do {
         profileY += `${profileY.length}`;
         if (z_managerE) {
            break;
         }
      } while ((!profileY.startsWith(`${rightt}`)) && z_managerE);
      while (1 < (4 | dialog2.size) || (5.43 - rightt) < 3.38) {
          let starj = 0.0;
          let middleware4 = 0.0;
         dialog2 = new Map([[`${dialog2.size}`, (profileY == String.fromCharCode(95,0) ? profileY.length : dialog2.size)]]);
         starj -= 2;
         middleware4 /= Math.max(4, parseFloat(`${1 | parseInt(`${middleware4}`)}`));
         break;
      }
       let videol = String.fromCharCode(112,115,101,117,100,111,95,48,95,56,51,0);
         videol += `${profileY.length % (Math.max(6, dialog2.size))}`;
       let logo5: Map<any, any> = new Map([[String.fromCharCode(116,95,57,53,95,114,101,117,112,108,111,97,100,0),16], [String.fromCharCode(102,102,112,108,97,121,0),835]]);
      while (!profileY.startsWith(`${videol.length}`)) {
          let foundw = true;
          let whiteC = String.fromCharCode(104,95,55,52,95,103,114,97,112,104,105,99,0);
          let mbbidi = 2.0;
         videol = `${videol.length}`;
         foundw = !whiteC.endsWith(`${mbbidi}`);
         whiteC = `${((foundw ? 5 : 4) - parseInt(`${mbbidi}`))}`;
         break;
      }
       let subs1: Map<any, any> = new Map([[String.fromCharCode(114,95,50,95,97,112,109,116,101,115,116,0),860], [String.fromCharCode(117,114,105,95,55,95,50,48,0),738]]);
       let sliderQ: Map<any, any> = new Map([[String.fromCharCode(118,95,50,55,0),false ], [String.fromCharCode(116,101,109,112,95,109,95,49,54,0),true ], [String.fromCharCode(103,114,101,97,116,101,114,95,102,95,54,53,0),true ]]);
      greyN += `${1 / (Math.max(9, profileY.length))}`;
      plashB = awayx.length > 54;
      awayx = "2";
   for (let q = 0; q < 1; q++) {
       let anner6: Array<any> = [791, 87, 355];
       let detailsU = String.fromCharCode(106,115,111,110,0);
       let fieldL = true;
       let gemfileF: Map<any, any> = new Map([[String.fromCharCode(105,110,116,108,101,95,97,95,49,50,0),String.fromCharCode(102,95,57,95,97,118,99,111,100,101,99,114,101,115,0)], [String.fromCharCode(112,101,101,114,105,100,95,118,95,53,0),String.fromCharCode(114,101,115,105,115,116,97,110,99,101,95,49,95,50,52,0)]]);
       let downloadE = String.fromCharCode(115,117,109,100,95,114,95,55,53,0);
         fieldL = downloadE.length > 30;
      for (let i = 0; i < 2; i++) {
         fieldL = 18 <= anner6.length;
      }
      while (!detailsU.endsWith(`${anner6.length}`)) {
         detailsU += `${(String.fromCharCode(89,0) == detailsU ? (fieldL ? 1 : 5) : detailsU.length)}`;
         break;
      }
      let searchbar3 = gemfileF.size >= 6573712;
      do {
          let type_y3M = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,51,95,57,53,0);
          let soundl: Map<any, any> = new Map([[String.fromCharCode(109,111,116,105,111,110,115,101,97,114,99,104,95,55,95,55,54,0),435], [String.fromCharCode(100,95,49,52,95,98,112,114,105,110,116,0),467], [String.fromCharCode(104,117,109,97,110,95,56,95,51,54,0),486]]);
         gemfileF = new Map([[`${gemfileF.size}`, 2]]);
         type_y3M = `${type_y3M.length % 3}`;
         soundl = new Map([[`${soundl.size}`, type_y3M.length & soundl.size]]);
         if (searchbar3) {
            break;
         }
      } while ((anner6.length == 2) && searchbar3);
      let update_65 = anner6.length >= 5291833;
      do {
         anner6.push(2 ^ downloadE.length);
         if (update_65) {
            break;
         }
      } while ((!detailsU.includes(`${anner6.length}`)) && update_65);
         anner6 = [anner6.length];
         gemfileF = new Map([[detailsU, detailsU.length]]);
      if (gemfileF.size > 3) {
         gemfileF = new Map([[`${fieldL}`, ((fieldL ? 2 : 4) ^ detailsU.length)]]);
      }
      let stationsM = 6385657 >= detailsU.length;
      do {
         detailsU = "2";
         if (stationsM) {
            break;
         }
      } while ((2 > (5 - detailsU.length)) && stationsM);
      while (detailsU.startsWith(`${fieldL}`)) {
         detailsU += `${(3 - (fieldL ? 1 : 4))}`;
         break;
      }
      while (!Array.from(gemfileF.keys()).includes(`${anner6.length}`)) {
         anner6.push(gemfileF.size);
         break;
      }
      for (let w = 0; w < 3; w++) {
         gemfileF = new Map([[`${anner6.length}`, 2]]);
      }
       let arrowm = String.fromCharCode(112,108,97,121,95,101,95,54,53,0);
          let controlsy = 2.0;
          let configureW: Array<any> = [98, 915, 48];
          let currentD = false;
         fieldL = parseInt(`${controlsy}`) == detailsU.length;
         controlsy *= 3;
         configureW.push(1);
         gemfileF = new Map([[downloadE, 1 >> (Math.min(1, downloadE.length))]]);
      backwardk = (!plashB ? shrinkb : !plashB);
   }
   if (1 > awayx.length) {
      androidz += `${((backwardk ? 3 : 4) - greyN.length)}`;
   }
      downloadingV.push(((shrinkb ? 3 : 3)));
      videos = `${((shrinkb ? 1 : 2))}`;
      faviconP = `${(androidz == String.fromCharCode(51,0) ? (shrinkb ? 5 : 5) : androidz.length)}`;
      shrinkb = greyN.length <= 70;
   for (let o = 0; o < 3; o++) {
      faviconP += "3";
   }
   let analytics0 = brightnessy == String.fromCharCode(112,118,98,102,51,0);
   do {
      brightnessy += `${(brightnessy == String.fromCharCode(120,0) ? (goal2 ? 4 : 4) : brightnessy.length)}`;
      if (analytics0) {
         break;
      }
   } while (analytics0 && (awayx == brightnessy));
   for (let z = 0; z < 3; z++) {
       let update_2nM: Map<any, any> = new Map([[String.fromCharCode(101,100,105,116,95,117,95,50,51,0),81], [String.fromCharCode(108,95,52,57,95,117,110,114,101,118,101,114,115,101,100,0),582], [String.fromCharCode(106,95,50,48,0),744]]);
       let robotob = 3;
         update_2nM.set(`${robotob}`, update_2nM.size % 3);
      while ((3 << (Math.min(3, Math.abs(robotob)))) > 4) {
         robotob *= robotob;
         break;
      }
      for (let w = 0; w < 2; w++) {
         update_2nM.set(`${robotob}`, update_2nM.size << (Math.min(Math.abs(2), 4)));
      }
      for (let e = 0; e < 2; e++) {
         robotob |= robotob << (Math.min(Math.abs(update_2nM.size), 3));
      }
      for (let j = 0; j < 2; j++) {
          let bodani = 0.0;
          let phoneX = 0.0;
         update_2nM.set(`${bodani}`, 1);
         bodani /= Math.max(parseInt(`${phoneX}`) & parseInt(`${phoneX}`), 1);
      }
         robotob %= Math.max(3, 4);
      brightnessy += `${(typingT.length * (goal2 ? 5 : 4))}`;
   }
   for (let j = 0; j < 1; j++) {
      plashB = awayx.length == 75 && shrinkb;
   }
       let muted5 = 2;
         muted5 >>= Math.min(1, Math.abs(muted5));
      let hoverx = 6649024 <= muted5;
      do {
         muted5 <<= Math.min(Math.abs(3 % (Math.max(3, muted5))), 3);
         if (hoverx) {
            break;
         }
      } while (((muted5 - muted5) >= 4 && 1 >= (4 - muted5)) && hoverx);
      while ((5 ^ muted5) < 3) {
         muted5 += muted5;
         break;
      }
      shrinkb = awayx.length < 92;

    setIsLiveVideoEnd(true);
  }, []);

  const onLiveLoad = useCallback(() => {
       let topon3 = 5.0;
    let countryx = String.fromCharCode(101,99,111,117,110,116,95,122,95,49,57,0);
    let animationN = 2;
    let recommendationB: Map<any, any> = new Map([[String.fromCharCode(120,95,51,48,95,109,117,108,116,120,0),true ], [String.fromCharCode(100,111,112,115,95,119,95,49,57,0),false ]]);
    let macau7 = String.fromCharCode(105,109,112,111,114,116,101,114,115,95,118,95,53,49,0);
    let dplusU = String.fromCharCode(115,112,97,109,95,113,95,49,56,0);
    let regengS: Array<any> = [706, 796, 799];
    let stringW = 3.0;
    let switch_9xR = String.fromCharCode(105,108,108,101,103,97,108,95,104,95,57,55,0);
      countryx = `${countryx.length}`;
   let taiwanH = dplusU == String.fromCharCode(108,106,56,54,119,111,0);
   do {
      dplusU = "1";
      if (taiwanH) {
         break;
      }
   } while ((!dplusU.endsWith(`${regengS.length}`)) && taiwanH);
   for (let l = 0; l < 2; l++) {
      stringW += parseFloat(`${3}`);
   }
      regengS = [countryx.length & 2];
      dplusU = `${regengS.length | 2}`;
      switch_9xR = `${(String.fromCharCode(80,0) == countryx ? countryx.length : recommendationB.size)}`;
      macau7 = `${switch_9xR.length * 3}`;
   for (let w = 0; w < 3; w++) {
      countryx += "2";
   }
       let less_ = String.fromCharCode(101,95,57,52,95,99,104,114,111,109,97,116,105,99,0);
          let recommendationS: Array<any> = [String.fromCharCode(120,95,52,48,95,97,118,103,121,0), String.fromCharCode(98,95,53,51,95,114,101,108,97,117,110,99,104,0), String.fromCharCode(108,97,110,101,95,53,95,52,53,0)];
          let alertl = String.fromCharCode(110,95,56,50,95,100,101,115,101,108,101,99,116,101,100,0);
          let spinnerv = String.fromCharCode(102,102,116,115,95,121,95,53,51,0);
         less_ += `${recommendationS.length - 1}`;
         recommendationS.push(3);
         alertl += `${alertl.length / 3}`;
         spinnerv = `${alertl.length}`;
      if (less_.includes(less_)) {
         less_ += "3";
      }
      if (less_ == less_) {
         less_ += `${less_.length}`;
      }
      recommendationB.set(dplusU, 3 >> (Math.min(3, dplusU.length)));
   while (4 > (dplusU.length & animationN)) {
      dplusU += `${3 ^ parseInt(`${topon3}`)}`;
      break;
   }
   for (let b = 0; b < 3; b++) {
       let hookg = 1;
       let description_ahw = 1;
       let tickedu = String.fromCharCode(121,95,55,52,95,101,120,112,108,105,99,105,116,108,121,0);
       let layoutw = String.fromCharCode(108,119,115,115,112,110,0);
         description_ahw %= Math.max(2, hookg - layoutw.length);
      for (let g = 0; g < 2; g++) {
         tickedu += `${hookg / (Math.max(5, layoutw.length))}`;
      }
         tickedu = `${description_ahw | 1}`;
      if (4 == (description_ahw * 2) || (description_ahw * tickedu.length) == 2) {
         description_ahw *= hookg / 2;
      }
         description_ahw *= 2;
         layoutw += `${layoutw.length ^ 2}`;
      for (let h = 0; h < 2; h++) {
         tickedu = `${(layoutw == String.fromCharCode(110,0) ? tickedu.length : layoutw.length)}`;
      }
         description_ahw %= Math.max(4, hookg % (Math.max(10, description_ahw)));
          let appleg: Array<any> = [524, 178];
          let overw = 1;
         tickedu += `${appleg.length >> (Math.min(tickedu.length, 4))}`;
         appleg = [overw];
          let casting9 = 1.0;
          let memberj = 2.0;
          let heartj = String.fromCharCode(99,95,50,95,115,116,97,99,107,118,105,101,119,0);
         layoutw += `${(String.fromCharCode(89,0) == layoutw ? layoutw.length : parseInt(`${memberj}`))}`;
         casting9 /= Math.max(3, (heartj == String.fromCharCode(56,0) ? parseInt(`${casting9}`) : heartj.length));
         memberj += parseInt(`${casting9}`);
      while (hookg <= tickedu.length) {
         tickedu = `${(tickedu == String.fromCharCode(86,0) ? layoutw.length : tickedu.length)}`;
         break;
      }
         layoutw = `${layoutw.length}`;
      animationN ^= layoutw.length;
   }
   while (2 <= (2 * dplusU.length)) {
      dplusU = `${1 % (Math.max(6, recommendationB.size))}`;
      break;
   }
   while (2 == (dplusU.length - parseInt(`${topon3}`)) || 2.28 == (parseFloat(`${dplusU.length}`) - topon3)) {
      topon3 /= Math.max(4, parseFloat(`${1 | recommendationB.size}`));
      break;
   }
      macau7 = "1";
   while (Array.from(recommendationB.keys()).includes(`${animationN}`)) {
      recommendationB = new Map([[`${stringW}`, 3]]);
      break;
   }
       let setting6 = String.fromCharCode(116,95,55,51,95,99,111,108,111,114,109,97,112,0);
       let gestureR = 3;
       let shooti = String.fromCharCode(114,95,52,53,95,105,110,118,97,114,105,97,110,116,115,0);
         shooti = `${setting6.length << (Math.min(4, Math.abs(gestureR)))}`;
      while (shooti != String.fromCharCode(48,0)) {
         setting6 += `${shooti.length + 3}`;
         break;
      }
          let profileD = String.fromCharCode(113,95,56,56,95,109,110,101,109,111,110,105,99,0);
          let carouselG = false;
          let settingsv = 4;
         setting6 += `${(setting6 == String.fromCharCode(89,0) ? (carouselG ? 2 : 4) : setting6.length)}`;
         profileD = `${settingsv}`;
         carouselG = profileD.length > settingsv;
         gestureR *= setting6.length - 1;
      if (setting6.length <= gestureR) {
         setting6 += "2";
      }
         shooti += `${setting6.length}`;
          let appsv = 3.0;
          let main_c2 = 4.0;
          let relatedz: Map<any, any> = new Map([[String.fromCharCode(119,105,116,104,100,114,97,119,95,107,95,51,52,0),true ], [String.fromCharCode(99,104,97,116,0),true ], [String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,110,95,57,0),false ]]);
         gestureR += shooti.length << (Math.min(3, Math.abs(parseInt(`${main_c2}`))));
         appsv -= parseFloat(`${2}`);
         main_c2 += parseFloat(`${parseInt(`${appsv}`) % (Math.max(8, relatedz.size))}`);
         relatedz.set(`${appsv}`, 2 & parseInt(`${appsv}`));
      let analyticsf = 6649807 >= setting6.length;
      do {
         setting6 = `${shooti.length}`;
         if (analyticsf) {
            break;
         }
      } while (((setting6.length % (Math.max(4, 9))) > 3 || (gestureR % 4) > 4) && analyticsf);
       let gmailK = String.fromCharCode(102,109,116,115,95,97,95,57,56,0);
       let incident4 = String.fromCharCode(117,95,54,49,95,102,111,114,119,97,114,100,0);
      regengS = [(String.fromCharCode(117,0) == macau7 ? macau7.length : dplusU.length)];
      animationN -= 3 << (Math.min(1, Math.abs(animationN)));
   if (2 <= (recommendationB.size - 3) && 5 <= (3 - recommendationB.size)) {
      switch_9xR = `${animationN - recommendationB.size}`;
   }
   let popupn = regengS.length <= 9024970;
   do {
       let traminiz = String.fromCharCode(105,95,53,50,95,110,111,104,101,97,100,101,114,0);
         traminiz = `${(String.fromCharCode(67,0) == traminiz ? traminiz.length : traminiz.length)}`;
         traminiz += `${traminiz.length}`;
      let firebasez = traminiz.length <= 7948737;
      do {
         traminiz = `${(traminiz == String.fromCharCode(90,0) ? traminiz.length : traminiz.length)}`;
         if (firebasez) {
            break;
         }
      } while (firebasez && (5 < traminiz.length || traminiz == String.fromCharCode(113,0)));
      regengS.push(parseInt(`${topon3}`));
      if (popupn) {
         break;
      }
   } while ((4 >= (regengS.length / (Math.max(5, 9))) || (topon3 / (Math.max(5.26, 5))) >= 4.40) && popupn);
      macau7 += `${animationN | 1}`;
   if ((topon3 - 3.47) >= 2.35 && (regengS.length * 4) >= 5) {
      topon3 *= parseFloat(`${3}`);
   }
   for (let u = 0; u < 3; u++) {
      recommendationB = new Map([[`${regengS.length}`, regengS.length + macau7.length]]);
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

      
      tt_humidity_guide.sportDetailsVipPopupTimesAnalytics();
      
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
       let specS = String.fromCharCode(112,115,121,109,111,100,101,108,95,103,95,53,56,0);
    let stylee = 3;
    let changeh = 5;
    let nterstitialC = false;
    let main_bJ = 4;
    let networkn = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,48,95,52,49,0);
    let overlay6 = 5.0;
    let middleware5 = String.fromCharCode(116,95,49,48,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0);
    let minia = true;
    let middlez: Array<any> = [793, 863, 30];
    let questN = 4.0;
    let aboutv = 4;
       let p_centeri = String.fromCharCode(99,95,49,48,48,95,97,112,102,115,0);
         p_centeri = `${p_centeri.length}`;
      if (5 <= p_centeri.length) {
         p_centeri += `${p_centeri.length & p_centeri.length}`;
      }
      if (p_centeri.length < 5) {
         p_centeri = `${(p_centeri == String.fromCharCode(118,0) ? p_centeri.length : p_centeri.length)}`;
      }
      minia = overlay6 >= 24.79;
      networkn = "1";
       let launcher6 = 4.0;
         launcher6 /= Math.max(2, 1 >> (Math.min(Math.abs(parseInt(`${launcher6}`)), 5)));
          let videov = false;
          let handleri = String.fromCharCode(111,98,117,115,95,114,95,50,52,0);
          let const_g0 = String.fromCharCode(119,95,50,54,95,109,117,108,116,105,99,97,115,116,0);
         launcher6 /= Math.max(((videov ? 5 : 4) - parseInt(`${launcher6}`)), 1);
         videov = const_g0.length <= 70 && 70 <= handleri.length;
         handleri = `${handleri.length ^ const_g0.length}`;
      let thumbnailo = 6087537.0 >= launcher6;
      do {
         launcher6 *= parseInt(`${launcher6}`) * 1;
         if (thumbnailo) {
            break;
         }
      } while ((3.91 < launcher6) && thumbnailo);
      stylee ^= 1 >> (Math.min(Math.abs(stylee), 3));
       let cleark = String.fromCharCode(107,95,50,53,95,102,97,117,108,116,121,0);
       let faviconG = 0.0;
       let internetJ = String.fromCharCode(121,95,57,48,95,100,111,99,105,100,115,0);
       let grey4 = true;
      let mutedc = internetJ == String.fromCharCode(48,50,113,99,101,108,0);
      do {
         internetJ = `${((grey4 ? 5 : 1) & cleark.length)}`;
         if (mutedc) {
            break;
         }
      } while ((grey4 && 4 <= internetJ.length) && mutedc);
      while (grey4 || internetJ.length >= 4) {
         internetJ += `${(cleark.length << (Math.min(5, Math.abs((grey4 ? 4 : 4)))))}`;
         break;
      }
      for (let a = 0; a < 3; a++) {
         faviconG -= (parseFloat(`${String.fromCharCode(77,0) == internetJ ? parseInt(`${faviconG}`) : internetJ.length}`));
      }
      for (let w = 0; w < 3; w++) {
         grey4 = cleark == String.fromCharCode(54,0);
      }
      while (internetJ.length == cleark.length) {
         internetJ += `${((grey4 ? 5 : 2) * 3)}`;
         break;
      }
         internetJ = `${((grey4 ? 3 : 1) ^ 2)}`;
         cleark = `${((grey4 ? 4 : 3))}`;
          let drag2 = 2.0;
         cleark = `${(cleark == String.fromCharCode(72,0) ? (grey4 ? 3 : 5) : cleark.length)}`;
         drag2 /= Math.max(5, parseFloat(`${3 % (Math.max(3, parseInt(`${drag2}`)))}`));
      minia = String.fromCharCode(78,0) == specS;
       let watcha = String.fromCharCode(100,95,49,53,95,100,101,116,97,105,108,115,0);
       let utilss = String.fromCharCode(116,101,108,101,103,114,97,112,104,95,103,95,53,55,0);
         utilss = `${watcha.length + utilss.length}`;
      let modalE = watcha == String.fromCharCode(48,56,112,0);
      do {
          let selectedb = 5.0;
          let redirecti = 5.0;
         watcha = `${3 & parseInt(`${redirecti}`)}`;
         selectedb += parseFloat(`${parseInt(`${selectedb}`) | parseInt(`${selectedb}`)}`);
         redirecti *= parseInt(`${selectedb}`);
         if (modalE) {
            break;
         }
      } while ((utilss.length >= 3) && modalE);
         watcha += `${utilss.length}`;
      for (let f = 0; f < 1; f++) {
         watcha += `${watcha.length >> (Math.min(utilss.length, 4))}`;
      }
         utilss = `${watcha.length >> (Math.min(Math.abs(1), 4))}`;
         utilss += `${watcha.length}`;
      stylee >>= Math.min(2, Math.abs(2 ^ middlez.length));
   for (let o = 0; o < 1; o++) {
      main_bJ %= Math.max(4, 1);
   }

    const bannerRes = await ttDropdown.getBannerAd(111);

   while (nterstitialC) {
      nterstitialC = (1 > (middleware5.length << (Math.min(3, Math.abs((minia ? 1 : middleware5.length))))));
      break;
   }
       let internetW = 5.0;
         internetW *= parseInt(`${internetW}`);
      while (1.70 <= (3.96 + internetW)) {
         internetW *= parseInt(`${internetW}`) % (Math.max(parseInt(`${internetW}`), 6));
         break;
      }
      if (internetW <= 2.73) {
         internetW += parseInt(`${internetW}`);
      }
      minia = internetW >= 95.47;
      nterstitialC = nterstitialC || changeh <= 52;
       let blacklistA = String.fromCharCode(114,95,49,48,48,95,108,97,121,111,117,116,115,0);
      while (!blacklistA.startsWith(blacklistA)) {
         blacklistA = `${blacklistA.length}`;
         break;
      }
      if (blacklistA.length <= blacklistA.length) {
         blacklistA = `${blacklistA.length}`;
      }
          let champion6 = String.fromCharCode(105,110,112,117,116,116,101,109,95,102,95,52,54,0);
         blacklistA = `${(String.fromCharCode(110,0) == blacklistA ? champion6.length : blacklistA.length)}`;
      networkn = "3";
       let privacyr: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,99,98,95,103,95,57,51,0),188], [String.fromCharCode(116,95,56,53,95,99,114,99,116,97,98,108,101,0),62], [String.fromCharCode(101,95,49,53,95,110,116,105,108,101,0),217]]);
       let launchN = String.fromCharCode(113,95,53,54,95,118,105,101,119,0);
       let zhengpianH = String.fromCharCode(101,95,49,51,95,101,120,116,101,110,116,0);
       let hoverx = String.fromCharCode(104,97,114,100,95,120,95,56,56,0);
      while (zhengpianH.length <= 2) {
         hoverx += `${(String.fromCharCode(81,0) == launchN ? privacyr.size : launchN.length)}`;
         break;
      }
      while ((2 ^ privacyr.size) >= 1 && 5 >= (launchN.length ^ 2)) {
         launchN += `${launchN.length}`;
         break;
      }
       let predictionK = String.fromCharCode(112,95,57,54,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0);
       let policyz = String.fromCharCode(115,116,109,116,95,113,95,53,48,0);
       let filtern = 4;
      overlay6 -= 3;
      networkn = `${((minia ? 3 : 4) / (Math.max(9, parseInt(`${overlay6}`))))}`;
    const banner = bannerRes.ads;

       let memberH = String.fromCharCode(115,95,49,48,48,95,114,117,110,108,111,111,112,0);
       let optionso = String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,117,95,57,52,0);
       let completeg: Map<any, any> = new Map([[String.fromCharCode(106,95,55,52,95,111,100,97,116,97,0),String.fromCharCode(114,95,49,49,95,103,114,97,112,104,99,121,99,108,101,115,0)], [String.fromCharCode(100,101,97,100,108,111,99,107,101,100,95,50,95,52,52,0),String.fromCharCode(104,95,50,49,95,99,117,114,115,111,114,115,0)], [String.fromCharCode(99,108,117,116,95,115,95,51,56,0),String.fromCharCode(113,95,55,55,95,109,97,116,99,104,101,100,0)]]);
       let darkc: Map<any, any> = new Map([[String.fromCharCode(118,99,101,110,99,95,113,95,53,49,0),575], [String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,119,95,49,54,0),601], [String.fromCharCode(106,95,55,57,95,112,116,104,114,101,97,100,0),547]]);
      let megaphoneq = 9580524 >= darkc.size;
      do {
         darkc = new Map([[`${completeg.size}`, 2]]);
         if (megaphoneq) {
            break;
         }
      } while (megaphoneq && ((completeg.size + darkc.size) < 5 || (5 + darkc.size) < 5));
         completeg.set(`${memberH}`, memberH.length / 2);
      if (!optionso.endsWith(`${completeg.size}`)) {
         completeg.set(`${memberH}`, memberH.length << (Math.min(Math.abs(2), 4)));
      }
          let u_titleZ = String.fromCharCode(115,95,54,52,95,101,114,114,111,114,118,0);
          let bingK = String.fromCharCode(111,95,52,50,95,115,116,97,114,116,0);
         optionso = `${darkc.size}`;
         u_titleZ = "3";
         bingK = `${2 | u_titleZ.length}`;
      let moreQ = String.fromCharCode(98,95,55,98,0) == optionso;
      do {
          let colorsw: Map<any, any> = new Map([[String.fromCharCode(121,95,53,95,115,116,114,105,99,116,0),622], [String.fromCharCode(108,95,50,50,95,116,105,108,101,0),231]]);
          let gmail_ = String.fromCharCode(116,95,52,49,95,105,110,116,101,114,115,101,99,116,115,0);
         optionso = `${completeg.size}`;
         colorsw = new Map([[`${colorsw.size}`, colorsw.size]]);
         gmail_ += `${gmail_.length | colorsw.size}`;
         if (moreQ) {
            break;
         }
      } while (moreQ && (optionso.length < completeg.size));
      overlay6 /= Math.max(stylee, 2);
      overlay6 += (middleware5.length + (minia ? 5 : 1));
   for (let d = 0; d < 1; d++) {
       let lightT = true;
       let moviesC = 2.0;
       let routeri = 2;
         moviesC *= 2;
         moviesC += (parseInt(`${moviesC}`) << (Math.min(1, Math.abs((lightT ? 2 : 4)))));
      if (4.12 <= moviesC && (moviesC / 4.12) <= 2.49) {
         moviesC /= Math.max(4, ((lightT ? 1 : 5) % (Math.max(1, routeri))));
      }
      for (let m = 0; m < 1; m++) {
         routeri %= Math.max(1, routeri - parseInt(`${moviesC}`));
      }
       let upload2 = String.fromCharCode(115,97,118,105,110,103,95,52,95,55,49,0);
       let launchJ = String.fromCharCode(102,95,51,95,115,116,97,114,116,0);
          let anytimeJ = false;
          let playp = true;
         routeri *= 2;
         anytimeJ = (!anytimeJ ? !playp : !anytimeJ);
         playp = (!playp ? !anytimeJ : playp);
      while (!launchJ.includes(upload2)) {
         launchJ += `${launchJ.length & routeri}`;
         break;
      }
      for (let n = 0; n < 1; n++) {
          let regeng3 = String.fromCharCode(112,114,101,115,101,114,118,101,95,56,95,51,48,0);
          let mbbid6 = 5.0;
          let appsv = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,54,95,53,54,0);
          let weiboe = 0.0;
          let flyer2 = 2;
         routeri ^= (launchJ == String.fromCharCode(117,0) ? parseInt(`${mbbid6}`) : launchJ.length);
         regeng3 = `${flyer2 ^ 2}`;
         mbbid6 *= 1 ^ regeng3.length;
         appsv = `${appsv.length >> (Math.min(1, Math.abs(parseInt(`${weiboe}`))))}`;
         weiboe += 1 * parseInt(`${weiboe}`);
         flyer2 <<= Math.min(Math.abs(flyer2 + 1), 3);
      }
          let mappingr = 1.0;
          let suggestione = String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,116,95,50,0);
          let weiboz = 1.0;
         moviesC /= Math.max(5, parseInt(`${weiboz}`));
         mappingr *= parseFloat(`${parseInt(`${mappingr}`)}`);
         suggestione += `${2 | parseInt(`${mappingr}`)}`;
      main_bJ %= Math.max(1, 1);
   }
       let annerN: Array<any> = [396, 759];
       let sharedU = 3.0;
      if (2 >= (annerN.length % 4) || 1.3 >= (parseFloat(`${annerN.length}`) * sharedU)) {
         sharedU -= parseFloat(`${1}`);
      }
          let main_aC = false;
          let episodesN = String.fromCharCode(119,95,53,57,95,105,110,116,101,114,97,99,116,105,111,110,0);
         sharedU += (parseFloat(`${parseInt(`${sharedU}`) - (main_aC ? 2 : 3)}`));
         main_aC = 50 > episodesN.length;
         episodesN = `${episodesN.length * 2}`;
         annerN = [parseInt(`${sharedU}`) / (Math.max(3, annerN.length))];
      if (sharedU < 1.8) {
         sharedU -= parseFloat(`${parseInt(`${sharedU}`)}`);
      }
      let shootm = annerN.length <= 6006601;
      do {
         annerN.push(parseInt(`${sharedU}`));
         if (shootm) {
            break;
         }
      } while ((!annerN.includes(sharedU)) && shootm);
      for (let g = 0; g < 2; g++) {
         sharedU *= parseFloat(`${3 % (Math.max(6, parseInt(`${sharedU}`)))}`);
      }
      specS += `${((minia ? 1 : 1) % (Math.max(7, specS.length)))}`;
   for (let h = 0; h < 3; h++) {
      main_bJ *= ((nterstitialC ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${overlay6}`)), 4)));
   }
   let friendsA = specS == String.fromCharCode(115,114,98,50,0);
   do {
      specS += `${((minia ? 1 : 3) | middlez.length)}`;
      if (friendsA) {
         break;
      }
   } while (friendsA && (!specS.includes(`${minia}`)));

    if (banner) {

       let signinup5 = true;
      while (signinup5 || !signinup5) {
         signinup5 = (signinup5 ? !signinup5 : signinup5);
         break;
      }
         signinup5 = !signinup5;
          let pointy: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,95,114,95,56,48,0),223], [String.fromCharCode(108,95,57,48,95,112,97,99,107,115,0),832]]);
         signinup5 = ((pointy.size << (Math.min(4, Math.abs((signinup5 ? 61 : pointy.size))))) <= 61);
      stylee -= 3 >> (Math.min(Math.abs(parseInt(`${overlay6}`)), 1));
   while (!minia) {
       let anner7 = 4.0;
       let championc = String.fromCharCode(118,97,108,0);
          let specf: Array<any> = [String.fromCharCode(110,115,112,97,99,101,115,95,121,95,54,0), String.fromCharCode(117,110,98,111,120,101,100,95,107,95,49,54,0), String.fromCharCode(112,95,51,56,95,97,116,99,104,101,114,0)];
          let dycreatorG = 4.0;
          let s_lockB = String.fromCharCode(100,95,57,53,95,112,108,97,121,103,114,111,117,110,100,0);
         anner7 -= parseFloat(`${3}`);
         specf.push((String.fromCharCode(108,0) == s_lockB ? s_lockB.length : specf.length));
         dycreatorG *= parseInt(`${dycreatorG}`);
         anner7 += parseFloat(`${championc.length % (Math.max(2, parseInt(`${anner7}`)))}`);
          let backwardp = 5.0;
          let viewerz = 0.0;
          let nativee: Map<any, any> = new Map([[String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,55,95,57,54,0),22], [String.fromCharCode(118,95,56,52,95,112,114,111,118,105,100,101,0),36], [String.fromCharCode(114,101,99,101,105,118,101,95,105,95,52,53,0),722]]);
         anner7 += parseFloat(`${parseInt(`${backwardp}`) - 3}`);
         backwardp /= Math.max(nativee.size * 1, 2);
         viewerz -= parseFloat(`${nativee.size}`);
      let firebasez = anner7 <= 8948067.0;
      do {
          let tempo = 5.0;
         anner7 *= parseFloat(`${3}`);
         tempo *= parseInt(`${tempo}`) % 3;
         if (firebasez) {
            break;
         }
      } while (firebasez && ((anner7 - parseFloat(`${championc.length}`)) >= 2.36));
      if (5 <= (championc.length << (Math.min(Math.abs(3), 2))) || 2.30 <= (anner7 / (Math.max(4.78, 1)))) {
         anner7 += (parseFloat(`${String.fromCharCode(82,0) == championc ? championc.length : parseInt(`${anner7}`)}`));
      }
         anner7 /= Math.max(parseFloat(`${1}`), 2);
      minia = String.fromCharCode(121,0) == middleware5;
      break;
   }
   if (3 >= (middlez.length | 3) || (3 | stylee) >= 5) {
       let relatedG: Array<any> = [536, 409, 399];
       let reactnativejsm = 3.0;
       let chinasameX = 4.0;
          let lang3 = 2;
          let refreshy = 4.0;
         reactnativejsm += parseFloat(`${parseInt(`${chinasameX}`) << (Math.min(Math.abs(parseInt(`${reactnativejsm}`)), 3))}`);
         lang3 -= 3;
         refreshy /= Math.max(1, 3);
         relatedG.push(parseInt(`${chinasameX}`) & relatedG.length);
          let aboutU = 3;
          let signinup2 = 2.0;
         reactnativejsm -= parseFloat(`${relatedG.length}`);
         aboutU += 1;
         signinup2 /= Math.max(3, 2);
         reactnativejsm += parseFloat(`${parseInt(`${chinasameX}`)}`);
         reactnativejsm -= parseFloat(`${2 / (Math.max(7, parseInt(`${reactnativejsm}`)))}`);
       let fastH = String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,51,95,54,53,0);
         reactnativejsm -= parseFloat(`${fastH.length % (Math.max(3, parseInt(`${chinasameX}`)))}`);
         chinasameX *= parseFloat(`${relatedG.length + 2}`);
          let private_26: Array<any> = [String.fromCharCode(117,95,49,54,95,98,105,116,109,97,115,107,0), String.fromCharCode(109,111,100,105,102,105,101,100,0), String.fromCharCode(103,95,56,55,95,108,101,103,101,110,100,0)];
          let hongkongh = String.fromCharCode(117,108,116,105,95,108,95,55,0);
          let sinaD = true;
         relatedG.push(relatedG.length);
         private_26.push(3 >> (Math.min(3, hongkongh.length)));
         hongkongh = `${private_26.length ^ 2}`;
         sinaD = !sinaD;
      stylee <<= Math.min(Math.abs(3 ^ changeh), 5);
   }
   while ((4 << (Math.min(1, middlez.length))) <= 2) {
       let arrowS = String.fromCharCode(101,120,97,109,112,108,101,95,102,95,54,55,0);
      let pnewsJ = arrowS.length >= 5650738;
      do {
         arrowS = `${arrowS.length + 1}`;
         if (pnewsJ) {
            break;
         }
      } while ((arrowS.length < arrowS.length) && pnewsJ);
         arrowS = `${arrowS.length % 2}`;
      let gmailh = arrowS.length >= 7350468;
      do {
          let activityz = String.fromCharCode(97,108,112,105,110,101,95,114,95,57,0);
          let middlet = String.fromCharCode(114,101,103,117,108,97,114,95,48,95,49,53,0);
          let closeM = 1;
          let invitet = String.fromCharCode(117,99,111,110,115,116,95,108,95,49,49,0);
          let dycreatorS = String.fromCharCode(115,117,102,102,105,120,95,56,95,50,53,0);
         arrowS = `${dycreatorS.length - 2}`;
         activityz += "1";
         middlet = `${closeM}`;
         closeM ^= (String.fromCharCode(48,0) == invitet ? invitet.length : closeM);
         dycreatorS = `${3 << (Math.min(1, invitet.length))}`;
         if (gmailh) {
            break;
         }
      } while (gmailh && (arrowS.endsWith(arrowS)));
      middlez = [1 * networkn.length];
      break;
   }
      main_bJ <<= Math.min(4, parseInt(`${Math.abs((main_bJ % (Math.max(10, (minia ? 3 : 4)))))}`));
   for (let m = 0; m < 2; m++) {
      minia = middlez.length == parseInt(`${overlay6}`);
   }
      setBannerAd(banner);
    } else {

      nterstitialC = 36.87 == overlay6 && 27 == middlez.length;
   while (!specS.endsWith(`${changeh}`)) {
       let adultc = 4.0;
       let disconnected8 = String.fromCharCode(104,95,50,95,114,101,109,97,105,110,100,101,114,0);
       let megaphone8 = 0.0;
       let o_unlockz: Map<any, any> = new Map([[String.fromCharCode(105,95,52,52,95,118,101,114,115,105,111,110,115,0),String.fromCharCode(115,101,116,116,101,114,95,107,95,53,49,0)], [String.fromCharCode(111,95,52,50,95,101,120,112,97,110,100,97,98,108,101,0),String.fromCharCode(114,95,54,54,95,122,111,110,101,105,110,102,111,0)], [String.fromCharCode(112,105,110,110,101,114,95,116,95,54,49,0),String.fromCharCode(105,95,51,53,95,99,111,108,100,0)]]);
      while (1 <= (5 * o_unlockz.size) || 5 <= (disconnected8.length * o_unlockz.size)) {
         disconnected8 = `${(disconnected8 == String.fromCharCode(119,0) ? parseInt(`${adultc}`) : disconnected8.length)}`;
         break;
      }
      for (let b = 0; b < 3; b++) {
         o_unlockz = new Map([[disconnected8, 3 >> (Math.min(4, disconnected8.length))]]);
      }
      while (1 == (disconnected8.length / (Math.max(4, 9)))) {
          let networks = 2.0;
          let launchA = true;
         disconnected8 += `${((launchA ? 4 : 2) + o_unlockz.size)}`;
         networks /= Math.max(1, parseInt(`${networks}`) | parseInt(`${networks}`));
         launchA = 70.99 > networks;
         break;
      }
      let storem = String.fromCharCode(122,112,118,106,51,99,104,54,110,0) == disconnected8;
      do {
         disconnected8 += `${o_unlockz.size}`;
         if (storem) {
            break;
         }
      } while (storem && (5.6 > (3.49 - adultc)));
         megaphone8 *= parseInt(`${adultc}`) >> (Math.min(Math.abs(parseInt(`${megaphone8}`)), 4));
      while (o_unlockz.get(`${megaphone8}`) != null) {
         megaphone8 /= Math.max(disconnected8.length, 2);
         break;
      }
      for (let k = 0; k < 1; k++) {
         megaphone8 += o_unlockz.size * 1;
      }
         disconnected8 = `${disconnected8.length ^ parseInt(`${megaphone8}`)}`;
      for (let d = 0; d < 2; d++) {
          let detaili: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,105,110,102,101,114,101,100,0),false ], [String.fromCharCode(101,95,49,56,95,107,105,99,107,101,114,0),true ], [String.fromCharCode(99,97,112,105,116,97,108,115,95,49,95,55,57,0),false ]]);
          let middlem: Array<any> = [514, 343, 382];
          let googlej = 4;
          let register_70b = String.fromCharCode(114,101,115,116,114,97,105,110,95,98,95,55,51,0);
         o_unlockz.set(`${adultc}`, 3);
         detaili = new Map([[`${googlej}`, 2]]);
         middlem.push(1 + googlej);
         register_70b = `${detaili.size * 2}`;
      }
      let googleg = 8985160.0 >= megaphone8;
      do {
         megaphone8 /= Math.max(parseInt(`${megaphone8}`) / (Math.max(6, parseInt(`${adultc}`))), 1);
         if (googleg) {
            break;
         }
      } while (googleg && (disconnected8.length <= 3));
          let details6 = String.fromCharCode(98,95,53,54,95,105,100,101,110,116,105,102,105,101,114,115,0);
          let smallB = String.fromCharCode(108,95,49,50,95,97,99,113,117,97,110,116,0);
         adultc -= parseFloat(`${3 % (Math.max(5, disconnected8.length))}`);
         details6 += `${smallB.length + 3}`;
         smallB += `${(details6 == String.fromCharCode(98,0) ? details6.length : smallB.length)}`;
       let const_gQ = 0.0;
       let regengB = 3.0;
      changeh ^= 3 >> (Math.min(4, specS.length));
      break;
   }
       let confirmationm = String.fromCharCode(112,95,51,56,95,99,111,110,116,114,97,115,116,0);
         confirmationm += `${confirmationm.length}`;
          let internetx = 1.0;
         confirmationm = `${parseInt(`${internetx}`) & 3}`;
      let sportsl = 9240266 <= confirmationm.length;
      do {
         confirmationm = `${confirmationm.length ^ 3}`;
         if (sportsl) {
            break;
         }
      } while ((confirmationm.length == confirmationm.length) && sportsl);
      overlay6 -= confirmationm.length / 1;
   for (let a = 0; a < 2; a++) {
       let unread3 = false;
       let becomeW = 2.0;
       let materialI: Map<any, any> = new Map([[String.fromCharCode(118,95,50,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0),671], [String.fromCharCode(117,110,122,105,112,95,111,95,49,56,0),924], [String.fromCharCode(98,95,50,95,112,97,114,101,110,0),355]]);
       let episodesD = 0.0;
       let floaterF = 0.0;
      if (2.99 > (5.60 * episodesD)) {
          let modelsF = String.fromCharCode(97,118,99,111,100,101,99,95,54,95,57,51,0);
         episodesD *= parseFloat(`${parseInt(`${becomeW}`)}`);
         modelsF = `${modelsF.length}`;
      }
          let materialQ = true;
         becomeW += materialI.size;
         materialQ = (!materialQ ? materialQ : !materialQ);
         materialI.set(`${becomeW}`, 1);
          let trashT: Map<any, any> = new Map([[String.fromCharCode(107,95,50,52,95,122,108,105,98,0),String.fromCharCode(118,95,55,56,95,98,111,108,100,0)], [String.fromCharCode(100,97,114,119,105,110,95,48,95,50,48,0),String.fromCharCode(121,95,55,50,95,102,117,110,99,115,0)]]);
          let moduleu = String.fromCharCode(107,95,57,50,95,115,121,110,116,104,101,115,105,122,101,100,0);
         materialI.set(`${episodesD}`, parseInt(`${episodesD}`) / 3);
         trashT = new Map([[`${trashT.size}`, 3 ^ trashT.size]]);
         moduleu = `${moduleu.length | 3}`;
         floaterF /= Math.max(1, parseInt(`${floaterF}`) / (Math.max(6, parseInt(`${episodesD}`))));
      while ((episodesD / 1.25) == 1.91 && 1.25 == (becomeW / (Math.max(9, episodesD)))) {
         becomeW *= parseInt(`${episodesD}`);
         break;
      }
          let basketballs = true;
          let grayT = true;
         materialI.set(`${episodesD}`, materialI.size);
         basketballs = !grayT;
         grayT = (!basketballs ? !grayT : !basketballs);
          let launchn = String.fromCharCode(111,95,57,95,114,111,112,115,116,101,110,0);
          let clearc = 5;
         materialI = new Map([[`${unread3}`, launchn.length]]);
         launchn += `${clearc << (Math.min(Math.abs(clearc), 1))}`;
       let leagueQ = String.fromCharCode(109,97,102,113,95,111,95,57,54,0);
       let androidx = String.fromCharCode(112,107,101,121,95,104,95,57,55,0);
       let benefitT = 2.0;
      for (let k = 0; k < 1; k++) {
         episodesD += parseFloat(`${2 | parseInt(`${becomeW}`)}`);
      }
         benefitT /= Math.max(parseFloat(`${1 + parseInt(`${episodesD}`)}`), 1);
      if (2 == leagueQ.length) {
         benefitT -= parseFloat(`${3 & parseInt(`${floaterF}`)}`);
      }
      for (let m = 0; m < 3; m++) {
          let moditys = 2.0;
          let starA = 5.0;
          let switch_te = true;
         floaterF *= parseInt(`${floaterF}`) | 2;
         moditys *= 2;
         starA += 1 % (Math.max(2, parseInt(`${moditys}`)));
         switch_te = starA > 90.78;
      }
      let orangeK = unread3 ? !unread3 : unread3;
      do {
         unread3 = 45.91 == episodesD;
         if (orangeK) {
            break;
         }
      } while (orangeK && (androidx.length >= 4 || !unread3));
      middlez = [3 >> (Math.min(1, Math.abs(main_bJ)))];
   }
      specS += `${1 & specS.length}`;
      main_bJ += changeh;
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchBannerAd();
  }, []);

  const onVipCountdownClick = useCallback(() => {
       let minimize2 = 5.0;
    let teamb: Array<any> = [319, 620];
    let darkb = String.fromCharCode(117,95,49,95,98,97,99,107,101,110,100,0);
    let skiph = String.fromCharCode(114,101,115,116,111,114,101,95,114,95,52,0);
    let stationf: Array<any> = [437, 137];
    let default_xyZ = false;
    let yingF = 4.0;
    let countdown8: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,116,116,97,100,115,112,0),String.fromCharCode(116,104,114,101,97,100,115,95,97,95,54,52,0)], [String.fromCharCode(97,116,114,97,99,95,107,95,53,55,0),String.fromCharCode(110,117,109,98,101,114,95,115,95,52,52,0)], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,102,95,50,52,0),String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,102,95,51,52,0)]]);
    let feedbackG = String.fromCharCode(122,95,57,53,95,100,101,109,111,0);
    let vignetteg = 0;
    let eacte = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,105,111,110,0);
    let unreadR = 0.0;
    let with_ra = String.fromCharCode(108,95,52,49,95,117,110,113,117,97,110,116,0);
   if (3 >= (3 * teamb.length) && 4 >= (3 * teamb.length)) {
      teamb.push(parseInt(`${minimize2}`) % 3);
   }
   while (default_xyZ) {
       let groupW = String.fromCharCode(121,95,51,50,95,115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0);
       let minig = false;
       let yellowC: Map<any, any> = new Map([[String.fromCharCode(99,95,54,57,95,112,114,101,115,117,98,109,105,116,0),740], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,57,95,52,57,0),173]]);
         minig = ((yellowC.size / (Math.max(4, (minig ? yellowC.size : 22)))) > 75);
      if (minig) {
         minig = groupW.length == 48;
      }
      while (3 >= groupW.length || minig) {
         groupW += `${((minig ? 3 : 1) >> (Math.min(groupW.length, 2)))}`;
         break;
      }
      for (let k = 0; k < 3; k++) {
         minig = ((yellowC.size + (!minig ? yellowC.size : 51)) < 29);
      }
          let layoutV = false;
          let miniv = 4;
         groupW = `${2 * groupW.length}`;
         layoutV = layoutV && 38 == miniv;
         miniv /= Math.max(1, 2);
      if (minig) {
         minig = (92 <= (yellowC.size | (!minig ? yellowC.size : 12)));
      }
      while (1 >= (groupW.length / 3) && (yellowC.size / (Math.max(5, groupW.length))) >= 3) {
          let giftk = 2.0;
          let crossD = 0;
          let vignettep = String.fromCharCode(111,118,101,114,114,105,100,101,0);
          let package_c8q = String.fromCharCode(106,107,101,110,99,95,48,95,57,48,0);
          let telegram7 = 1.0;
         yellowC.set(`${giftk}`, yellowC.size);
         giftk *= parseFloat(`${crossD % 1}`);
         crossD -= package_c8q.length;
         vignettep += "3";
         package_c8q = `${crossD / 3}`;
         telegram7 /= Math.max(4, 2);
         break;
      }
      let gmail6 = yellowC.size <= 5745013;
      do {
         yellowC.set(groupW, groupW.length);
         if (gmail6) {
            break;
         }
      } while (gmail6 && (minig));
       let mintegralA: Map<any, any> = new Map([[String.fromCharCode(108,101,114,112,102,95,104,95,54,52,0),true ], [String.fromCharCode(117,95,54,55,95,115,105,103,105,108,108,0),true ]]);
       let telegramO: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,111,112,101,110,0),587], [String.fromCharCode(106,112,101,103,99,111,109,112,95,49,95,50,55,0),402], [String.fromCharCode(116,104,101,114,101,95,120,95,49,54,0),146]]);
      default_xyZ = vignetteg == 16;
      break;
   }
   while (3 <= stationf.length) {
      stationf = [feedbackG.length ^ 2];
      break;
   }
   while ((countdown8.size ^ vignetteg) >= 1) {
      vignetteg ^= (darkb == String.fromCharCode(89,0) ? stationf.length : darkb.length);
      break;
   }
       let downloader5 = 4.0;
       let context7 = String.fromCharCode(103,95,53,52,95,107,105,108,108,0);
       let logoT = String.fromCharCode(99,104,97,110,103,101,95,48,95,51,55,0);
      if (3 == context7.length) {
         logoT += `${context7.length}`;
      }
         logoT += `${context7.length}`;
         downloader5 /= Math.max(logoT.length + context7.length, 2);
      for (let x = 0; x < 1; x++) {
         logoT += `${2 | logoT.length}`;
      }
         context7 += `${parseInt(`${downloader5}`)}`;
         logoT = "1";
          let successi = 1.0;
          let blacklistB = String.fromCharCode(110,95,56,55,95,104,105,101,114,97,114,99,104,121,0);
          let klevint = 0;
         logoT = `${klevint}`;
         successi /= Math.max(1, parseInt(`${successi}`) - blacklistB.length);
         blacklistB += `${parseInt(`${successi}`)}`;
         klevint <<= Math.min(3, Math.abs(3 & parseInt(`${successi}`)));
          let completes = String.fromCharCode(114,111,103,114,101,115,115,95,102,95,50,51,0);
         context7 = `${logoT.length >> (Math.min(1, completes.length))}`;
      let mbbannere = context7 == String.fromCharCode(113,49,95,114,99,52,0);
      do {
          let awayj = false;
          let playercommonB = 5.0;
          let short_0lY = 3;
          let delegate_plQ = String.fromCharCode(111,95,52,57,0);
         context7 += `${((awayj ? 2 : 1) % (Math.max(delegate_plQ.length, 6)))}`;
         awayj = short_0lY <= parseInt(`${playercommonB}`);
         playercommonB /= Math.max(parseFloat(`${parseInt(`${playercommonB}`) & 3}`), 1);
         short_0lY %= Math.max(parseInt(`${playercommonB}`), 5);
         delegate_plQ = `${parseInt(`${playercommonB}`)}`;
         if (mbbannere) {
            break;
         }
      } while (((context7.length + parseInt(`${downloader5}`)) >= 2 || 5 >= (parseInt(`${downloader5}`) + 2)) && mbbannere);
      darkb += `${(context7 == String.fromCharCode(101,0) ? parseInt(`${downloader5}`) : context7.length)}`;
   while (darkb.startsWith(`${vignetteg}`)) {
      darkb = `${parseInt(`${minimize2}`) + 3}`;
      break;
   }
      default_xyZ = (stationf.length * parseInt(`${unreadR}`)) == 40;
   for (let p = 0; p < 3; p++) {
       let plusV = 2;
       let ying_ = 1;
       let benefitu = false;
       let promotion8 = String.fromCharCode(116,109,109,98,110,95,114,95,55,53,0);
       let fastforwardc = true;
      while (5 == promotion8.length) {
          let streamings: Map<any, any> = new Map([[String.fromCharCode(114,95,53,57,95,110,101,103,97,116,105,118,101,0),837], [String.fromCharCode(101,110,117,109,101,114,97,116,111,114,95,113,95,54,52,0),325], [String.fromCharCode(118,105,115,97,95,106,95,56,53,0),750]]);
         promotion8 += `${streamings.size << (Math.min(Math.abs(2), 5))}`;
         break;
      }
      while (!benefitu || !fastforwardc) {
          let lightj = String.fromCharCode(104,97,115,104,97,98,108,101,95,98,95,51,53,0);
          let submitb: Array<any> = [905, 734];
          let flipperB = true;
          let hejiK = 4.0;
          let androidz = String.fromCharCode(102,95,54,50,95,117,110,100,101,114,0);
         benefitu = plusV > 8;
         lightj += `${parseInt(`${hejiK}`)}`;
         submitb.push(androidz.length);
         flipperB = 70 == lightj.length || hejiK == 26.87;
         androidz = "1";
         break;
      }
         benefitu = !benefitu;
      while (fastforwardc) {
         fastforwardc = !benefitu && 36 == ying_;
         break;
      }
       let activityq = String.fromCharCode(98,95,49,51,95,109,100,97,116,101,0);
         promotion8 = `${((fastforwardc ? 3 : 5) % (Math.max(6, promotion8.length)))}`;
      while ((3 << (Math.min(5, activityq.length))) > 2 || (ying_ << (Math.min(Math.abs(3), 5))) > 5) {
         activityq = `${(String.fromCharCode(97,0) == promotion8 ? promotion8.length : (fastforwardc ? 5 : 5))}`;
         break;
      }
      while (promotion8.length >= 5 || !fastforwardc) {
          let about9: Map<any, any> = new Map([[String.fromCharCode(111,108,100,108,105,115,116,0),484], [String.fromCharCode(109,95,50,51,95,115,121,109,109,101,116,114,105,99,0),743], [String.fromCharCode(114,95,51,53,95,104,117,101,0),813]]);
         promotion8 = `${ying_}`;
         about9.set(`${about9.size}`, about9.size);
         break;
      }
          let soundF = String.fromCharCode(115,95,49,51,95,116,111,111,108,115,0);
         activityq += `${soundF.length / (Math.max(2, 2))}`;
          let c_imagen = 2.0;
         fastforwardc = !benefitu && ying_ == 15;
         c_imagen /= Math.max(5, parseFloat(`${1}`));
      if (3 >= activityq.length && !fastforwardc) {
         fastforwardc = (plusV * activityq.length) == 53;
      }
         benefitu = ying_ == activityq.length;
          let circles = 1.0;
         ying_ >>= Math.min(1, Math.abs(1 + activityq.length));
         circles /= Math.max(parseFloat(`${parseInt(`${circles}`) ^ 3}`), 1);
          let overI = 0;
         activityq += `${activityq.length << (Math.min(Math.abs(1), 4))}`;
         overI += 3 % (Math.max(2, overI));
         promotion8 += `${plusV}`;
      teamb = [promotion8.length];
   }
   let recommendation6 = teamb.length >= 6315208;
   do {
       let hcopy__i = 5.0;
       let floatero = 2.0;
       let popupX = String.fromCharCode(109,97,105,110,108,105,115,116,0);
       let contextt = 0;
       let favoriteX = 5;
      if (3 >= (favoriteX + 1)) {
          let crown0: Array<any> = [572, 451];
          let editX = String.fromCharCode(104,116,109,108,115,117,98,116,105,116,108,101,115,95,48,95,53,48,0);
          let completeF = String.fromCharCode(110,95,56,51,95,109,98,115,116,114,105,110,103,0);
          let regengz = String.fromCharCode(110,101,119,108,105,110,101,115,0);
          let i_viewj = false;
         favoriteX /= Math.max(3, (String.fromCharCode(81,0) == popupX ? popupX.length : parseInt(`${floatero}`)));
         crown0.push(1);
         editX += `${regengz.length >> (Math.min(Math.abs(1), 2))}`;
         completeF = `${1 >> (Math.min(4, crown0.length))}`;
         regengz += `${3 * regengz.length}`;
         i_viewj = editX.length > completeF.length;
      }
         popupX = `${parseInt(`${floatero}`)}`;
          let tooltipsw = false;
         floatero -= parseFloat(`${parseInt(`${hcopy__i}`) / 3}`);
         tooltipsw = (tooltipsw ? tooltipsw : !tooltipsw);
       let trophyJ = String.fromCharCode(115,117,98,116,114,97,99,116,95,99,95,49,56,0);
          let indexN = 5.0;
         contextt &= 3;
         indexN -= parseInt(`${indexN}`) << (Math.min(4, Math.abs(1)));
      let styles5 = String.fromCharCode(118,114,54,112,118,104,57,108,0) == popupX;
      do {
          let downloadO: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,99,116,105,110,103,95,49,95,52,54,0),24], [String.fromCharCode(111,110,101,95,118,95,56,55,0),210], [String.fromCharCode(116,117,110,105,110,103,95,102,95,55,57,0),188]]);
          let saveh = 3;
          let sansC = true;
          let type_osh: Array<any> = [456, 220];
          let shirt5: Array<any> = [205, 793];
         popupX = `${2 << (Math.min(5, type_osh.length))}`;
         downloadO = new Map([[`${shirt5.length}`, (shirt5.length * (sansC ? 1 : 1))]]);
         saveh %= Math.max(shirt5.length | 3, 5);
         type_osh.push(downloadO.size - saveh);
         if (styles5) {
            break;
         }
      } while (styles5 && (2.39 >= (floatero * parseFloat(`${popupX.length}`))));
       let aboutA = String.fromCharCode(97,116,97,98,108,101,115,95,120,95,50,53,0);
       let nativeT = String.fromCharCode(102,114,105,101,110,100,115,95,111,95,55,54,0);
          let bannerA = 1.0;
          let playercommont: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,95,115,95,53,56,0),58], [String.fromCharCode(99,104,111,105,99,101,95,118,95,50,51,0),412], [String.fromCharCode(113,95,52,55,95,117,110,100,101,114,114,117,110,0),585]]);
          let zhengpianc = String.fromCharCode(114,101,115,117,108,116,95,114,95,56,57,0);
         aboutA += `${1 - parseInt(`${floatero}`)}`;
         bannerA /= Math.max(2, (parseFloat(`${String.fromCharCode(48,0) == zhengpianc ? zhengpianc.length : playercommont.size}`)));
         playercommont = new Map([[`${playercommont.size}`, playercommont.size]]);
         trophyJ += `${contextt}`;
      for (let d = 0; d < 3; d++) {
         favoriteX &= contextt * favoriteX;
      }
         aboutA = `${trophyJ.length}`;
         contextt |= 1 + parseInt(`${hcopy__i}`);
          let adultk = 2;
         contextt ^= popupX.length;
         adultk *= adultk | 2;
      if (aboutA.length > 2) {
         aboutA = "3";
      }
         floatero *= parseFloat(`${2 * nativeT.length}`);
      teamb = [popupX.length % (Math.max(3, 10))];
      if (recommendation6) {
         break;
      }
   } while (recommendation6 && (5 > (teamb.length >> (Math.min(Math.abs(2), 5))) || (minimize2 - 3.57) > 3.70));

    videoRef.current?.setPause(true);

       let smallr = 2.0;
       let logoJ = 4.0;
      let storeN = logoJ >= 5568797.0;
      do {
          let mbsplashw = 4;
         logoJ *= parseFloat(`${3 ^ parseInt(`${logoJ}`)}`);
         mbsplashw >>= Math.min(1, Math.abs(1));
         if (storeN) {
            break;
         }
      } while (storeN && ((smallr / 4) >= 4.3));
         logoJ -= parseFloat(`${3}`);
       let readf = 4.0;
       let megaphonev = 2;
       let downloadq = 3;
       let rewindu = String.fromCharCode(121,95,56,48,95,110,111,99,104,101,99,107,0);
      let pathX = readf >= 8067620.0;
      do {
          let shootT = 5;
          let spinnerB = String.fromCharCode(120,95,52,52,95,101,110,97,98,108,101,0);
          let coreb: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,97,95,55,53,0),String.fromCharCode(113,95,54,52,95,113,117,97,100,114,97,116,105,99,0)], [String.fromCharCode(121,95,56,53,95,104,97,114,100,99,111,100,101,100,0),String.fromCharCode(114,102,116,102,115,117,98,95,112,95,49,0)], [String.fromCharCode(117,112,108,111,97,100,105,110,103,95,120,95,54,49,0),String.fromCharCode(99,109,112,97,100,100,114,95,110,95,54,56,0)]]);
          let hookr = true;
         readf -= downloadq;
         shootT += coreb.size;
         spinnerB = `${1 << (Math.min(4, Math.abs(coreb.size)))}`;
         hookr = String.fromCharCode(112,0) == spinnerB && 41 < coreb.size;
         if (pathX) {
            break;
         }
      } while ((1.95 == readf) && pathX);
      feedbackG += "1";
   let confirmationA = String.fromCharCode(112,111,105,50,111,118,49,0) == darkb;
   do {
      darkb += "1";
      if (confirmationA) {
         break;
      }
   } while (confirmationA && ((countdown8.size >> (Math.min(Math.abs(4), 3))) >= 3));
   for (let a = 0; a < 2; a++) {
      default_xyZ = teamb.includes(unreadR);
   }
   for (let o = 0; o < 3; o++) {
       let privilegec = false;
       let n_countW = 0.0;
       let ocopy_l7H = 3.0;
       let filledZ = String.fromCharCode(122,95,57,57,95,108,105,115,116,105,110,103,0);
       let relatedx = 4;
      while (n_countW > 2.100 || (2.100 * n_countW) > 4.30) {
          let hongkongD = 0.0;
          let gmailB = 5.0;
         n_countW /= Math.max(parseInt(`${hongkongD}`), 4);
         gmailB /= Math.max(parseInt(`${gmailB}`) << (Math.min(2, Math.abs(parseInt(`${gmailB}`)))), 3);
         break;
      }
      while (!privilegec) {
         relatedx *= parseInt(`${ocopy_l7H}`) + 1;
         break;
      }
      if (filledZ.startsWith(`${ocopy_l7H}`)) {
         filledZ += `${relatedx}`;
      }
         ocopy_l7H /= Math.max(1, (parseFloat(`${(privilegec ? 2 : 4) / (Math.max(1, filledZ.length))}`)));
      let controlg = 5428900 <= filledZ.length;
      do {
         filledZ = `${filledZ.length}`;
         if (controlg) {
            break;
         }
      } while ((4 == (filledZ.length - 2) || (2 >> (Math.min(1, filledZ.length))) == 2) && controlg);
         filledZ = `${parseInt(`${ocopy_l7H}`) / 2}`;
          let mbnativeo = true;
          let pressure3 = false;
         filledZ = `${(filledZ.length & (privilegec ? 3 : 1))}`;
         mbnativeo = (!mbnativeo ? !pressure3 : mbnativeo);
         pressure3 = (!pressure3 ? mbnativeo : pressure3);
      if (privilegec) {
          let overlayi = true;
          let paginationE = 4;
          let rank8 = String.fromCharCode(109,102,114,97,0);
          let crown7 = 4.0;
          let other8 = 2.0;
         privilegec = filledZ.endsWith(`${paginationE}`);
         overlayi = (parseInt(`${other8}`) * rank8.length) < 92;
         paginationE %= Math.max(1, parseInt(`${crown7}`) % 1);
         rank8 += `${parseInt(`${crown7}`) - 1}`;
         other8 *= (rank8 == String.fromCharCode(86,0) ? rank8.length : (overlayi ? 3 : 4));
      }
      while ((n_countW / 2.92) <= 4.60 || !privilegec) {
         privilegec = !privilegec;
         break;
      }
          let otherV = false;
          let modaly: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,52,95,53,48,0),595], [String.fromCharCode(114,101,110,101,119,97,98,108,101,95,107,95,55,55,0),798]]);
          let typingM = 1.0;
         filledZ += `${(parseInt(`${n_countW}`) ^ (privilegec ? 2 : 3))}`;
         otherV = !otherV;
         modaly = new Map([[`${modaly.size}`, modaly.size << (Math.min(3, Math.abs(parseInt(`${typingM}`))))]]);
         typingM *= ((otherV ? 2 : 1) << (Math.min(Math.abs(1), 4)));
      if ((4 % (Math.max(10, relatedx))) > 5 && (relatedx | 4) > 5) {
         relatedx -= (parseInt(`${n_countW}`) | (privilegec ? 3 : 1));
      }
       let modalI = 4.0;
          let telegrama = String.fromCharCode(116,95,57,50,95,114,101,113,117,105,114,101,109,101,110,116,0);
          let promotionJ = String.fromCharCode(115,99,114,117,98,98,105,110,103,95,110,95,57,52,0);
         ocopy_l7H += parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${modalI}`))))}`);
         telegrama = `${telegrama.length}`;
         promotionJ += `${telegrama.length | promotionJ.length}`;
       let mbsplash5 = 0.0;
      while ((mbsplash5 + 3.38) < 3.20 && (filledZ.length + parseInt(`${mbsplash5}`)) < 2) {
         filledZ += `${parseInt(`${n_countW}`) % 1}`;
         break;
      }
      yingF *= parseFloat(`${2}`);
   }
   if (darkb.endsWith(`${yingF}`)) {
       let react5 = String.fromCharCode(101,110,100,101,100,95,110,95,49,51,0);
       let redirectO = String.fromCharCode(115,117,99,99,101,115,115,95,105,95,51,50,0);
       let firebaseL = 2.0;
       let apps2 = 4.0;
       let floatingx = 1.0;
         redirectO = `${parseInt(`${firebaseL}`)}`;
       let mintegralJ = String.fromCharCode(111,118,101,114,118,105,101,119,0);
       let alertd = String.fromCharCode(108,111,97,100,95,54,95,56,0);
      while ((mintegralJ.length * parseInt(`${apps2}`)) > 1 && 3 > (1 >> (Math.min(5, mintegralJ.length)))) {
          let tickf = String.fromCharCode(103,95,49,50,95,105,110,102,111,114,109,97,116,105,118,101,0);
         apps2 += 1;
         tickf = `${tickf.length}`;
         break;
      }
         redirectO = `${2 >> (Math.min(1, react5.length))}`;
          let descT: Map<any, any> = new Map([[String.fromCharCode(101,114,118,101,114,95,112,95,56,48,0),493], [String.fromCharCode(122,95,54,52,95,98,114,105,110,103,0),780], [String.fromCharCode(106,115,105,109,100,100,99,116,0),16]]);
          let layout8: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,101,100,95,100,95,49,53,0),697], [String.fromCharCode(111,95,57,52,95,118,105,98,114,97,116,105,111,110,0),524]]);
          let skip0 = String.fromCharCode(105,95,51,50,95,105,110,105,116,105,97,116,101,0);
         apps2 *= 2;
         descT = new Map([[`${descT.size}`, descT.size >> (Math.min(Math.abs(2), 3))]]);
         layout8.set(`${layout8.size}`, layout8.size | 1);
         skip0 = `${descT.size}`;
          let banner2 = String.fromCharCode(113,95,49,51,95,120,120,99,104,0);
          let analytick = String.fromCharCode(117,95,52,54,95,105,110,118,101,114,115,101,100,0);
          let vietnamk: Map<any, any> = new Map([[String.fromCharCode(116,97,110,103,101,110,116,95,108,95,51,48,0),false ], [String.fromCharCode(102,95,51,51,95,99,97,108,108,115,0),true ], [String.fromCharCode(119,95,49,55,95,114,101,98,117,105,108,100,0),false ]]);
         apps2 += parseInt(`${apps2}`) + parseInt(`${floatingx}`);
         banner2 += `${banner2.length}`;
         analytick = "1";
         vietnamk.set(`${banner2}`, vietnamk.size << (Math.min(Math.abs(2), 3)));
         floatingx /= Math.max(mintegralJ.length, 2);
      if (mintegralJ.endsWith(`${alertd.length}`)) {
         mintegralJ = `${parseInt(`${apps2}`) >> (Math.min(alertd.length, 2))}`;
      }
      yingF /= Math.max(parseFloat(`${parseInt(`${yingF}`)}`), 3);
   }
      minimize2 /= Math.max(4, vignetteg << (Math.min(Math.abs(parseInt(`${yingF}`)), 3)));
      eacte += `${1 - parseInt(`${yingF}`)}`;
      stationf.push(skiph.length);
   let faviconB = 8548446.0 <= yingF;
   do {
       let viewsB = String.fromCharCode(109,95,51,52,95,115,101,116,116,105,116,108,101,0);
       let gmail8 = 2.0;
      if (3.71 == (gmail8 / (Math.max(3.6, 1))) && 1.60 == (gmail8 / 3.6)) {
         viewsB = `${(viewsB == String.fromCharCode(109,0) ? parseInt(`${gmail8}`) : viewsB.length)}`;
      }
         viewsB += `${viewsB.length}`;
         gmail8 += parseInt(`${gmail8}`) % (Math.max(viewsB.length, 2));
         gmail8 /= Math.max(2, 1 ^ parseInt(`${gmail8}`));
         gmail8 -= viewsB.length;
         viewsB = `${viewsB.length}`;
      yingF += parseFloat(`${3}`);
      if (faviconB) {
         break;
      }
   } while (((parseInt(`${yingF}`) - 1) >= 2 && 3 >= (1 / (Math.max(9, skiph.length)))) && faviconB);
    setShowBecomeVIPOverlay(true);

      yingF *= parseFloat(`${3}`);
      teamb.push(stationf.length);
   if (darkb.startsWith(`${vignetteg}`)) {
      vignetteg >>= Math.min(3, Math.abs(with_ra.length * teamb.length));
   }
      eacte = `${darkb.length ^ 3}`;
       let crossR: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,48,95,53,54,0),String.fromCharCode(110,95,52,53,95,103,111,112,104,101,114,0)], [String.fromCharCode(111,95,57,48,95,102,111,114,105,0),String.fromCharCode(109,95,54,56,95,101,108,101,109,115,0)]]);
       let blacklist3 = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,51,95,56,57,0);
       let mbnativeN = 4.0;
      for (let p = 0; p < 2; p++) {
         blacklist3 += `${crossR.size >> (Math.min(Math.abs(2), 4))}`;
      }
      if (3 == (blacklist3.length + 2)) {
         blacklist3 = `${parseInt(`${mbnativeN}`)}`;
      }
      let vnewso = 8479606 >= blacklist3.length;
      do {
         blacklist3 = `${crossR.size << (Math.min(blacklist3.length, 2))}`;
         if (vnewso) {
            break;
         }
      } while (((blacklist3.length << (Math.min(Math.abs(4), 5))) > 1 && (mbnativeN / (Math.max(parseFloat(`${blacklist3.length}`), 2))) > 5.57) && vnewso);
      while ((blacklist3.length * 2) < 1) {
         blacklist3 = `${crossR.size & blacklist3.length}`;
         break;
      }
         crossR.set(`${blacklist3}`, crossR.size);
      while (blacklist3.startsWith(`${mbnativeN}`)) {
          let gesture4 = String.fromCharCode(97,95,54,57,95,98,110,108,101,0);
          let dropdownM: Map<any, any> = new Map([[String.fromCharCode(117,95,55,48,0),false ], [String.fromCharCode(106,95,54,95,115,101,99,116,111,114,0),false ], [String.fromCharCode(101,110,100,97,95,102,95,50,51,0),true ]]);
         mbnativeN /= Math.max(parseFloat(`${parseInt(`${mbnativeN}`) / (Math.max(1, dropdownM.size))}`), 1);
         gesture4 = `${1 & gesture4.length}`;
         dropdownM.set(gesture4, 1);
         break;
      }
      if (2 == (parseInt(`${mbnativeN}`) / (Math.max(10, blacklist3.length))) && (2 / (Math.max(10, parseInt(`${mbnativeN}`)))) == 5) {
         blacklist3 += `${1 << (Math.min(4, Math.abs(crossR.size)))}`;
      }
       let manifesty = false;
       let time_bqL = false;
       let footballV = String.fromCharCode(111,95,56,48,95,115,101,108,101,99,116,111,112,0);
       let sigmobN = String.fromCharCode(100,95,50,54,95,105,110,116,101,103,114,105,116,121,0);
      unreadR *= parseFloat(`${parseInt(`${yingF}`)}`);
      yingF /= Math.max(parseFloat(`${parseInt(`${yingF}`)}`), 5);
   for (let p = 0; p < 1; p++) {
       let backgroundA = String.fromCharCode(99,111,110,102,101,116,116,105,95,50,95,54,54,0);
       let zcopy__Z = 1;
       let bridgea = 0.0;
       let activityk = String.fromCharCode(107,110,111,119,110,95,107,95,55,53,0);
       let phoneU = String.fromCharCode(111,95,51,50,95,113,99,111,109,0);
         activityk += `${phoneU.length / 1}`;
         activityk += `${(String.fromCharCode(120,0) == phoneU ? zcopy__Z : phoneU.length)}`;
         zcopy__Z &= (String.fromCharCode(114,0) == phoneU ? parseInt(`${bridgea}`) : phoneU.length);
       let notificationt = false;
      let inews4 = 5895829 >= zcopy__Z;
      do {
         zcopy__Z &= (String.fromCharCode(110,0) == backgroundA ? backgroundA.length : zcopy__Z);
         if (inews4) {
            break;
         }
      } while ((notificationt) && inews4);
      while (2.83 >= (bridgea / (Math.max(4.30, 1)))) {
         backgroundA = "3";
         break;
      }
       let areag = 4.0;
       let episodea = 5.0;
          let c_unlock9: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,101,108,95,98,95,55,56,0),true ], [String.fromCharCode(98,95,55,56,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0),false ], [String.fromCharCode(116,97,103,103,101,100,0),false ]]);
          let launchera = 4;
         bridgea /= Math.max(parseInt(`${bridgea}`) & activityk.length, 1);
         c_unlock9 = new Map([[`${c_unlock9.size}`, launchera]]);
         launchera %= Math.max(3 + launchera, 1);
      darkb = "2";
   }
   if ((5 >> (Math.min(1, Math.abs(vignetteg)))) <= 4 && (with_ra.length >> (Math.min(Math.abs(5), 3))) <= 4) {
      vignetteg *= eacte.length / (Math.max(1, 4));
   }
       let gradlen = 0.0;
       let backwarda: Array<any> = [127, 39, 369];
       let bootsplash5 = true;
      if ((gradlen * 2.44) < 5.85 && !bootsplash5) {
          let gesturesR = 0.0;
          let verticalC: Array<any> = [375, 686];
          let stylet = 3;
          let shirtR = 4.0;
          let relatedQ: Map<any, any> = new Map([[String.fromCharCode(114,95,55,55,95,98,105,108,105,110,101,97,114,0),975], [String.fromCharCode(115,97,108,116,108,101,110,0),26], [String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,98,108,101,0),200]]);
         gradlen /= Math.max(3, parseFloat(`${stylet >> (Math.min(Math.abs(relatedQ.size), 4))}`));
         gesturesR /= Math.max(3, parseFloat(`${parseInt(`${shirtR}`) % (Math.max(10, verticalC.length))}`));
         verticalC = [parseInt(`${gesturesR}`) - parseInt(`${shirtR}`)];
         stylet *= 1 | verticalC.length;
         relatedQ = new Map([[`${gesturesR}`, 3]]);
      }
       let temperaturem = true;
          let over0: Array<any> = [243, 981, 772];
          let yellowE = 3.0;
         backwarda = [((temperaturem ? 2 : 1))];
         over0 = [parseInt(`${yellowE}`)];
         yellowE -= parseInt(`${yellowE}`) * over0.length;
      let downloadedX = backwarda.length >= 6343765;
      do {
         backwarda = [backwarda.length | 2];
         if (downloadedX) {
            break;
         }
      } while ((backwarda.includes(gradlen)) && downloadedX);
      if (bootsplash5) {
         bootsplash5 = !temperaturem;
      }
         bootsplash5 = (!bootsplash5 ? !temperaturem : bootsplash5);
      while ((5 & backwarda.length) < 3 && bootsplash5) {
         bootsplash5 = !temperaturem && 33.66 <= gradlen;
         break;
      }
      for (let d = 0; d < 2; d++) {
         temperaturem = backwarda.length == parseInt(`${gradlen}`);
      }
       let thumbnailQ = 1.0;
      feedbackG += `${parseInt(`${unreadR}`)}`;

    

      stationf.push(skiph.length ^ 1);
      stationf = [parseInt(`${yingF}`)];
   let plash_ = with_ra == String.fromCharCode(54,50,120,106,112,119,104,0);
   do {
      with_ra += `${darkb.length}`;
      if (plash_) {
         break;
      }
   } while ((with_ra.endsWith(`${default_xyZ}`)) && plash_);
   if (yingF == 3.28 && (yingF + 3.28) == 4.35) {
      yingF /= Math.max(parseFloat(`${2}`), 5);
   }
   let reducerv = 7879529 >= with_ra.length;
   do {
      with_ra += `${parseInt(`${minimize2}`)}`;
      if (reducerv) {
         break;
      }
   } while ((!with_ra.includes(`${unreadR}`)) && reducerv);
       let i_centerM = 0;
          let detailsD: Map<any, any> = new Map([[String.fromCharCode(99,117,114,108,121,95,103,95,54,48,0),849], [String.fromCharCode(98,95,53,54,95,100,117,112,108,105,99,97,116,101,115,0),507]]);
          let championT = String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,120,95,54,50,0);
          let clear6: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,114,95,49,49,0),774], [String.fromCharCode(101,95,49,55,95,115,116,114,101,97,109,104,101,97,100,101,114,0),727]]);
         i_centerM %= Math.max(detailsD.size | 1, 1);
         detailsD.set(championT, clear6.size);
         championT += `${3 % (Math.max(9, championT.length))}`;
         clear6.set(championT, championT.length);
      if (i_centerM == 1) {
          let selectionp: Array<any> = [String.fromCharCode(107,95,52,95,109,112,101,103,116,115,0), String.fromCharCode(98,95,51,50,95,115,121,109,101,118,101,110,0), String.fromCharCode(112,97,103,101,104,97,115,104,95,111,95,50,0)];
          let traminiq: Map<any, any> = new Map([[String.fromCharCode(104,101,97,112,95,117,95,54,57,0),256], [String.fromCharCode(101,110,99,111,100,101,114,95,57,95,50,0),636]]);
          let megaphoneo = String.fromCharCode(103,95,51,53,95,111,110,116,97,99,116,115,0);
          let searchbarl = 4.0;
         i_centerM %= Math.max(2 - megaphoneo.length, 3);
         selectionp = [parseInt(`${searchbarl}`)];
         traminiq.set(`${searchbarl}`, parseInt(`${searchbarl}`) | selectionp.length);
         megaphoneo += `${traminiq.size + selectionp.length}`;
      }
          let securityZ: Array<any> = [969, 653, 173];
         i_centerM &= i_centerM & securityZ.length;
      countdown8.set(`${teamb.length}`, teamb.length * 3);
   while (!eacte.endsWith(feedbackG)) {
      eacte = `${parseInt(`${yingF}`) * countdown8.size}`;
      break;
   }
      vignetteg %= Math.max(eacte.length, 1);
   for (let r = 0; r < 1; r++) {
      feedbackG += `${eacte.length % 3}`;
   }
    tt_humidity_guide.sportDetailsVipPopupTimesAnalytics();
    
  }, []);

  const onGoPrivateChatPress = () => {
       let action3 = String.fromCharCode(98,108,111,99,107,115,105,122,101,95,108,95,52,57,0);
    let moviesz = 5.0;
    let anews1: Map<any, any> = new Map([[String.fromCharCode(105,95,50,50,95,109,111,100,105,102,105,99,97,116,105,111,110,115,0),287], [String.fromCharCode(120,95,55,53,0),516], [String.fromCharCode(103,95,57,54,95,114,101,118,101,114,116,0),406]]);
    let videojsT = String.fromCharCode(107,95,56,54,95,116,114,97,110,115,105,116,105,111,110,115,0);
    let send7 = 5;
    let trophyM: Array<any> = [String.fromCharCode(110,95,54,54,95,119,104,101,110,0), String.fromCharCode(97,95,57,55,95,114,101,99,116,105,102,121,0)];
    let resultw: Map<any, any> = new Map([[String.fromCharCode(114,101,118,101,114,115,101,95,102,95,53,0),true ], [String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,109,95,50,56,0),false ]]);
    let handlerv = String.fromCharCode(112,117,115,104,98,97,99,107,95,57,95,56,50,0);
    let xvodl = String.fromCharCode(103,95,55,50,95,110,97,108,117,0);
    let pauseu = 2.0;
      moviesz -= parseFloat(`${1 << (Math.min(4, xvodl.length))}`);
   for (let a = 0; a < 2; a++) {
      anews1.set(`${moviesz}`, 2);
   }
       let stylest = 2.0;
         stylest += parseFloat(`${parseInt(`${stylest}`)}`);
      while (3.59 < (stylest / 1.26) && 3.48 < (stylest + 1.26)) {
          let materialM = String.fromCharCode(116,95,57,52,95,114,101,102,105,108,108,0);
          let scoren = 2.0;
          let type_vh = String.fromCharCode(101,95,51,48,95,109,111,99,107,105,110,103,0);
          let private_kM = String.fromCharCode(116,111,112,105,99,97,108,95,117,95,55,52,0);
         stylest *= parseFloat(`${parseInt(`${stylest}`) / (Math.max(3, 1))}`);
         materialM = `${parseInt(`${scoren}`)}`;
         scoren += parseFloat(`${parseInt(`${scoren}`) - 3}`);
         type_vh += `${private_kM.length >> (Math.min(Math.abs(3), 5))}`;
         private_kM += "3";
         break;
      }
       let nterstitial0 = String.fromCharCode(104,95,54,48,95,112,114,111,118,105,100,101,115,0);
      send7 ^= videojsT.length / (Math.max(1, 6));
      resultw.set(handlerv, handlerv.length ^ 3);
   if ((3 / (Math.max(1, resultw.size))) >= 4) {
       let delegate_1kp = 4.0;
       let confirmation0: Array<any> = [877, 842];
       let event6 = 4.0;
       let c_lockH = 3.0;
      while (parseInt(`${delegate_1kp}`) < confirmation0.length) {
          let scoreY = 1.0;
          let containerr = 1.0;
          let pingD = String.fromCharCode(99,95,51,49,95,110,117,109,98,101,114,115,0);
          let lightZ = 5;
         confirmation0 = [lightZ & parseInt(`${scoreY}`)];
         scoreY *= pingD.length - parseInt(`${containerr}`);
         containerr *= parseFloat(`${pingD.length}`);
         lightZ ^= (pingD == String.fromCharCode(55,0) ? parseInt(`${containerr}`) : pingD.length);
         break;
      }
         c_lockH /= Math.max(parseFloat(`${parseInt(`${event6}`)}`), 2);
      while (2.52 < (2.87 * event6)) {
          let short_a07 = 2.0;
          let g_imageL = 4.0;
          let zooms = true;
          let fastB = String.fromCharCode(115,99,114,111,108,108,101,114,95,102,95,49,0);
         event6 /= Math.max(3, parseInt(`${c_lockH}`) >> (Math.min(2, Math.abs(3))));
         short_a07 += (parseInt(`${short_a07}`) & (zooms ? 4 : 1));
         g_imageL /= Math.max(((zooms ? 4 : 1) + parseInt(`${short_a07}`)), 5);
         fastB = `${3 * parseInt(`${short_a07}`)}`;
         break;
      }
         event6 -= confirmation0.length * 3;
      let stylesw = 8688168.0 >= event6;
      do {
          let result1 = String.fromCharCode(103,95,55,53,95,101,120,112,111,114,116,101,100,0);
          let mintegralL = String.fromCharCode(102,111,111,95,112,95,52,56,0);
         event6 *= parseInt(`${c_lockH}`) % 2;
         result1 = `${(String.fromCharCode(84,0) == mintegralL ? mintegralL.length : result1.length)}`;
         if (stylesw) {
            break;
         }
      } while ((3.96 < (delegate_1kp * event6) || 3.34 < (3.96 * event6)) && stylesw);
      for (let u = 0; u < 3; u++) {
          let notificationW = String.fromCharCode(99,95,55,51,95,99,111,110,102,105,103,117,114,97,116,111,114,0);
          let stringso = String.fromCharCode(97,108,115,111,95,101,95,55,57,0);
         delegate_1kp /= Math.max(parseFloat(`${stringso.length}`), 5);
         notificationW = `${notificationW.length >> (Math.min(3, notificationW.length))}`;
         stringso += `${notificationW.length + notificationW.length}`;
      }
          let dialog0 = String.fromCharCode(105,95,49,51,95,118,112,100,101,99,0);
          let photoE = String.fromCharCode(108,111,99,97,108,104,111,115,116,95,50,95,52,0);
          let foregroundC = String.fromCharCode(100,105,102,102,95,113,95,53,0);
         c_lockH *= parseFloat(`${photoE.length}`);
         dialog0 += `${(foregroundC == String.fromCharCode(56,0) ? foregroundC.length : dialog0.length)}`;
         photoE = "1";
      while (5.25 <= (c_lockH + delegate_1kp)) {
          let actionJ = String.fromCharCode(108,101,110,118,108,99,95,108,95,51,53,0);
          let bodanP: Map<any, any> = new Map([[String.fromCharCode(115,95,52,57,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),428], [String.fromCharCode(119,95,53,56,95,116,101,108,101,109,101,116,114,121,0),206], [String.fromCharCode(119,95,56,56,95,114,105,99,101,0),66]]);
         delegate_1kp -= parseFloat(`${1 << (Math.min(1, confirmation0.length))}`);
         actionJ = `${(actionJ == String.fromCharCode(51,0) ? actionJ.length : bodanP.size)}`;
         bodanP.set(actionJ, (actionJ == String.fromCharCode(88,0) ? actionJ.length : bodanP.size));
         break;
      }
          let matchB = 1;
         confirmation0 = [1 ^ parseInt(`${delegate_1kp}`)];
         matchB %= Math.max(3, matchB % 2);
         c_lockH -= parseFloat(`${parseInt(`${c_lockH}`) ^ 1}`);
       let page2 = 4;
       let sport6 = 3;
      if (confirmation0.includes(sport6)) {
         sport6 *= page2 * parseInt(`${delegate_1kp}`);
      }
      resultw.set(handlerv, parseInt(`${moviesz}`));
   }
      resultw = new Map([[`${anews1.size}`, 3]]);

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

        {bannerAd &&  !ttFast.isVip(userState.user) && (
          <View style={{
            
            
            
          }}>
            <BannerContainer
              bannerAd={bannerAd}
              onMount={() => {
                tt_humidity_guide.videoPlayerBannerViewAnalytics({
                  playerType: 'sport',
                  ads_slot_id: bannerAd.ads_slot_id,
                  ads_id: bannerAd.ads_id,
                  ads_title: bannerAd.ads_title,
                  ads_name: bannerAd.ads_name,
                });
              }}
              onPress={() => {
                tt_humidity_guide.videoPlayerBannerClickAnalytics({
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
              source={require('@static/images/toponTerms.gif')}
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
