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
import ScreenContainer from '../../../components/container/yys_executor_expand';
import MainHeader from '../../../components/header/yys_classes_count_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { yys_ArrowApple, yys_Xadsdk, yys_StatsHeji } from '@type/yys_libzeus';
import VodPlaylist from '../../../components/playlist/yys_reminder_gift';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import FastImage from '../../../components/common/yys_vertical_collection';
import yys_Matches from '../../middleware/yys_libjsi';
import { Url } from '../../middleware/yys_desc_resend';
import { formatMatchDate } from '../../utility/utils';
import { yys_List, yys_MimoMode } from '../../types/yys_league_mounting';
import MatchDetailsNav from '../../components/matchDetails/yys_const_view';
import MatchSchedule from '../../components/matchSchedule/yys_text';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer, { yys_CountdownInactive } from '../../../components/videoPlayer/yys_heji';
import { parseVideoURL } from '../../utility/yys_codegen';
import Video from 'react-native-video';
import LiveVideo from '../../components/liveVideo/yys_textlayoutmanager_schedule';
import { VideoLiveType } from '../../global/yys_dice_kuaishou';
import {
  yys_PlusFilter,
  yys_Videojs,
} from '../../types/yys_live_libyoga';
import { yys_YellowHover } from '../../types/yys_white_tick';
import BeforeLive from '../../components/beforeLive';
import StatisticPage from '../../components/matchDetails/statisticPage';
import { yys_Bootsplash } from '../../types/yys_canvas';
import LineUpPage from '../../components/matchDetails/lineUpPage';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/yys_frame';
import { screenModel } from '@type/yys_service_setting';
import { incrementSportWatchTime } from '@redux/actions/yys_runtimescheduler';
import BecomeVipOverlay from "../../../components/modal/yys_next_drag";
import { NON_VIP_STREAM_TIME_SECONDS } from '@utility/yys_ajax_switch';
import yys_event_common from '../../../../Umeng/yys_event_common';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { yys_Videocommon } from '@redux/reducers/yys_libavdevice';
import VipRegisterBar from '../../../components/adultVideo/yys_telegram';
import { BannerContainer } from '../../../components/container/yys_armva_streaming';
import { yys_MinivodPangle } from '../../../../yys_mimo_vignette';
import { yys_CurrentLang } from '@api';
import LiveChatPage from '../../components/matchDetails/liveChatPage';
import PrivateChatPage from '../../components/matchDetails/privateChatPage';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';

let insetsTop = 0;
let insetsBottom = 0;

type yys_Mbsplash = {
  item: yys_List;
  index: number;
};

interface yys_ControlsVolume {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

type yys_GuideScheduler = {
  type: number;
  url: any;
};

const MatchDetails = ({ navigation, route }: BottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<yys_ArrowApple>);
  const [videoSource, setVideoSource] = useState<yys_GuideScheduler>({
    type: 0,
    url: undefined,
  });
  const [isLiveVideoFullScreen, setIsLiveVideoFullScreen] = useState(false);
  const [shouldShowComponents, setShouldShowComponents] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const showCountdown = !yys_RelatedTooltips.isVip(userState.user);

  const videoRef = useRef<yys_CountdownInactive | null>(null);
  const [bannerAd, setBannerAd] = useState<yys_Xadsdk>();
  const isVip = yys_RelatedTooltips.isVip(userState.user);
  const sportTabDetails: yys_StatsHeji = yys_MinivodPangle.instance.findTabByKey('体育');

  

  
  useEffect(() => {
    yys_event_common.sportDetailsViewsAnalytics();
  }, [])
  

  const { data: match } = useQuery({
    queryKey: ['liveRoomDetails', matchID],
    queryFn: () =>
      yys_Matches.call(`${Url.liveRoomDetail}?id=${matchID}`, {}, 'GET').then(
        (res): yys_List => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const { data: matchDetails, isFetching: f1 } = useQuery({
    queryKey: ['matchDetails', matchID, streamID],
    queryFn: () =>
      yys_Matches.call(`${Url.matchDetails}?id=${matchID}`, {}, 'GET').then(
        (res): yys_PlusFilter => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: liveRoomUpdate, isFetching: f2 } = useQuery({
    queryKey: ['liveRoomUpdate', matchID, streamID],
    queryFn: () =>
      yys_Matches.call(
        `${Url.matchUpdate}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): yys_YellowHover => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const { data: matchLineUp, isFetching: f3 } = useQuery({
    queryKey: ['matchLineUp', matchID, streamID],
    queryFn: () =>
      yys_Matches.call(
        `${Url.matchLineup}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): yys_Bootsplash => {
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
       let floatingc: Map<any, any> = new Map([[String.fromCharCode(105,95,53,50,95,98,105,116,0),936], [String.fromCharCode(111,95,55,49,95,116,101,100,99,97,112,116,105,111,110,115,0),13], [String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,112,95,50,52,0),977]]);
    let screeny = String.fromCharCode(98,95,52,54,95,101,110,101,114,103,121,0);
    let playercommonp = 1.0;
    let binddatasv = 0;
    let sorte = String.fromCharCode(114,101,112,101,97,116,105,110,103,95,49,95,52,48,0);
    let libyogaM = String.fromCharCode(97,95,51,50,95,117,110,105,119,103,116,0);
    let traminiX = 1;
    let binddatas8 = false;
    let detaili: Array<any> = [685, 621];
       let placeholder5 = 4.0;
       let libfollyQ = String.fromCharCode(114,95,53,95,113,117,111,116,97,0);
      if (4.16 == (parseFloat(`${libfollyQ.length}`) + placeholder5) && (placeholder5 + 4.16) == 3.83) {
         placeholder5 -= (parseFloat(`${libfollyQ == String.fromCharCode(90,0) ? parseInt(`${placeholder5}`) : libfollyQ.length}`));
      }
       let textlayoutmanagerL = String.fromCharCode(107,95,50,51,95,119,109,118,100,115,112,0);
       let successF = String.fromCharCode(105,95,53,54,95,105,110,116,101,102,97,99,101,0);
      let nextT = String.fromCharCode(51,97,100,53,120,101,50,111,102,110,0) == successF;
      do {
          let hiadt = 5.0;
          let commono = 2.0;
          let descA: Array<any> = [581, 827];
         successF = `${1 - parseInt(`${commono}`)}`;
         hiadt *= descA.length >> (Math.min(5, Math.abs(parseInt(`${hiadt}`))));
         commono += 2 >> (Math.min(Math.abs(parseInt(`${hiadt}`)), 2));
         descA = [parseInt(`${hiadt}`)];
         if (nextT) {
            break;
         }
      } while (((successF.length << (Math.min(Math.abs(3), 4))) == 5) && nextT);
         libfollyQ += "3";
         textlayoutmanagerL = `${(textlayoutmanagerL == String.fromCharCode(104,0) ? textlayoutmanagerL.length : successF.length)}`;
      let f_managerQ = successF == String.fromCharCode(110,50,107,107,97,114,103,108,0);
      do {
          let libsentryR = 3.0;
         successF += "1";
         libsentryR /= Math.max(parseInt(`${libsentryR}`) % (Math.max(parseInt(`${libsentryR}`), 6)), 3);
         if (f_managerQ) {
            break;
         }
      } while ((5.0 > placeholder5) && f_managerQ);
      binddatasv -= 3 - sorte.length;
       let videojsf = 4.0;
         videojsf -= parseFloat(`${parseInt(`${videojsf}`) >> (Math.min(5, Math.abs(1)))}`);
         videojsf /= Math.max(2, parseFloat(`${parseInt(`${videojsf}`) >> (Math.min(4, Math.abs(2)))}`));
      while ((videojsf / (Math.max(9, videojsf))) <= 4.49) {
         videojsf /= Math.max(parseFloat(`${parseInt(`${videojsf}`)}`), 3);
         break;
      }
      floatingc.set(`${playercommonp}`, 2 - parseInt(`${playercommonp}`));
      screeny += `${2 | screeny.length}`;
   let backgroundc = binddatasv >= 7548151;
   do {
       let playg = true;
       let tooltipsN = 0.0;
       let matchess = 2.0;
          let calendarB = String.fromCharCode(122,95,49,51,95,114,101,99,111,103,110,105,122,101,114,115,0);
          let updates5 = true;
         tooltipsN += parseFloat(`${parseInt(`${matchess}`) + calendarB.length}`);
         calendarB = `${(3 - (updates5 ? 4 : 3))}`;
          let regengY = String.fromCharCode(109,111,100,105,102,121,95,121,95,49,55,0);
          let flyerc: Array<any> = [501, 834, 982];
         playg = !playg && matchess == 25.30;
         regengY += `${(String.fromCharCode(97,0) == regengY ? flyerc.length : regengY.length)}`;
         flyerc = [flyerc.length % (Math.max(regengY.length, 7))];
      binddatasv <<= Math.min(sorte.length, 1);
      if (backgroundc) {
         break;
      }
   } while ((traminiX >= 1) && backgroundc);
   if ((binddatasv | 2) < 1 && 2 < (traminiX | binddatasv)) {
      binddatasv += screeny.length & libyogaM.length;
   }
   while (libyogaM.length >= 5) {
      sorte = `${floatingc.size}`;
      break;
   }
      libyogaM = "1";
   if (3 == (screeny.length ^ floatingc.size) || (floatingc.size ^ screeny.length) == 3) {
      screeny = `${(String.fromCharCode(52,0) == screeny ? floatingc.size : screeny.length)}`;
   }
   let placeholderS = sorte.length >= 7568921;
   do {
      sorte = `${binddatasv}`;
      if (placeholderS) {
         break;
      }
   } while (placeholderS && (3 == sorte.length));
      traminiX += libyogaM.length & binddatasv;
   for (let f = 0; f < 2; f++) {
      sorte += `${(String.fromCharCode(112,0) == sorte ? sorte.length : binddatasv)}`;
   }
      sorte += `${3 % (Math.max(6, floatingc.size))}`;
   if (4 > sorte.length) {
       let stationsw = String.fromCharCode(100,95,50,50,95,97,98,98,114,0);
       let muted3: Map<any, any> = new Map([[String.fromCharCode(99,95,55,50,95,115,101,116,98,105,116,0),String.fromCharCode(99,95,51,53,95,115,117,98,114,101,115,117,108,116,115,0)], [String.fromCharCode(101,95,53,50,95,111,116,104,0),String.fromCharCode(101,95,52,55,95,104,97,115,104,105,110,105,116,0)], [String.fromCharCode(118,95,51,51,95,115,101,115,115,105,111,110,115,0),String.fromCharCode(116,111,109,105,99,95,118,95,53,55,0)]]);
      let infoa = stationsw == String.fromCharCode(118,99,48,52,108,95,52,113,111,0);
      do {
         stationsw += `${muted3.size / (Math.max(stationsw.length, 1))}`;
         if (infoa) {
            break;
         }
      } while ((3 < (muted3.size / 5)) && infoa);
      let selectedD = 7255391 >= muted3.size;
      do {
         muted3.set(`${stationsw}`, 2 & stationsw.length);
         if (selectedD) {
            break;
         }
      } while (selectedD && (!stationsw.includes(`${muted3.size}`)));
         muted3.set(`${stationsw}`, (String.fromCharCode(108,0) == stationsw ? muted3.size : stationsw.length));
       let containerW = true;
         stationsw += `${3 ^ muted3.size}`;
      if (4 <= (stationsw.length | muted3.size)) {
         muted3 = new Map([[`${muted3.size}`, stationsw.length << (Math.min(Math.abs(3), 5))]]);
      }
      traminiX &= traminiX | stationsw.length;
   }
   while (traminiX > 5) {
      playercommonp += 3 | libyogaM.length;
      break;
   }
      floatingc.set(screeny, sorte.length);
   if (3 > (screeny.length ^ traminiX)) {
       let commentV: Array<any> = [72, 894];
       let neonO = 2.0;
       let clubh = 2.0;
       let mbridge5 = String.fromCharCode(110,102,116,95,103,95,49,50,0);
          let result9 = 1;
          let anythinkr = 0.0;
         commentV = [result9 ^ parseInt(`${clubh}`)];
         result9 |= parseInt(`${anythinkr}`) >> (Math.min(5, Math.abs(2)));
         anythinkr += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${anythinkr}`)), 1))}`);
      if ((4.51 * clubh) >= 4.8 && 3 >= (mbridge5.length * parseInt(`${clubh}`))) {
         clubh *= parseFloat(`${2}`);
      }
         neonO *= parseFloat(`${3 >> (Math.min(5, Math.abs(parseInt(`${neonO}`))))}`);
          let eighteen1 = 4;
         clubh /= Math.max(parseFloat(`${eighteen1}`), 5);
         commentV.push(commentV.length);
          let controlso = 3.0;
         clubh *= parseFloat(`${commentV.length}`);
         controlso /= Math.max(parseInt(`${controlso}`), 3);
         mbridge5 += `${mbridge5.length | commentV.length}`;
      let package_q5j = 7454195 <= commentV.length;
      do {
         commentV.push(parseInt(`${clubh}`));
         if (package_q5j) {
            break;
         }
      } while (package_q5j && (3 < (1 / (Math.max(6, commentV.length))) && (parseFloat(`${commentV.length}`) - neonO) < 5.9));
       let sortg = String.fromCharCode(100,95,50,95,119,105,116,104,105,110,0);
       let filledD = String.fromCharCode(122,95,55,51,95,99,111,108,111,114,109,97,112,0);
         sortg = `${(sortg == String.fromCharCode(71,0) ? commentV.length : sortg.length)}`;
      let suggestionR = sortg == String.fromCharCode(49,102,101,0);
      do {
         sortg = `${(String.fromCharCode(113,0) == sortg ? sortg.length : parseInt(`${clubh}`))}`;
         if (suggestionR) {
            break;
         }
      } while ((2 <= sortg.length) && suggestionR);
       let core9 = String.fromCharCode(118,95,52,48,95,111,98,115,101,114,118,97,116,105,111,110,115,0);
      traminiX &= 3 >> (Math.min(2, Math.abs(binddatasv)));
   }

    setIsLiveVideoEnd(true);
  }, []);

  const onLiveLoad = useCallback(() => {
       let tooltipsX = String.fromCharCode(99,95,57,48,95,112,97,114,116,105,99,105,112,97,110,116,115,0);
    let kickv: Array<any> = [754, 168, 751];
    let imagemanager0 = String.fromCharCode(100,95,51,48,95,116,111,108,108,0);
    let greenT: Array<any> = [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,107,95,52,54,0), String.fromCharCode(103,95,56,56,95,99,121,112,114,101,115,115,0)];
    let middle6: Map<any, any> = new Map([[String.fromCharCode(120,99,117,114,115,111,114,95,116,95,57,57,0),73], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,113,95,55,52,0),801], [String.fromCharCode(109,95,53,55,95,104,111,111,107,115,0),227]]);
    let interstitialJ = String.fromCharCode(101,95,57,54,95,110,111,101,120,112,0);
    let ajaxM = true;
    let greyB = String.fromCharCode(98,95,49,53,95,101,120,116,101,110,100,101,101,0);
    let sliderc = 4.0;
    let traminif = String.fromCharCode(115,116,111,112,112,101,100,95,54,95,53,54,0);
    let watchT: Map<any, any> = new Map([[String.fromCharCode(117,118,104,111,114,105,122,111,110,116,97,108,95,117,95,56,54,0),677], [String.fromCharCode(106,115,116,121,112,101,95,116,95,53,57,0),139]]);
      watchT.set(greyB, greyB.length / 2);
   for (let x = 0; x < 1; x++) {
       let leftj: Map<any, any> = new Map([[String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,95,107,95,57,51,0),124], [String.fromCharCode(122,95,50,52,95,109,101,115,97,103,101,115,0),864]]);
       let suggestion1: Map<any, any> = new Map([[String.fromCharCode(119,95,51,50,95,98,100,115,0),String.fromCharCode(102,95,52,52,95,116,121,112,0)], [String.fromCharCode(102,95,55,49,95,112,114,101,100,105,99,116,105,111,110,115,0),String.fromCharCode(114,95,49,56,95,109,97,116,104,101,109,97,116,105,99,115,0)]]);
       let crowna = 1.0;
       let drag5 = String.fromCharCode(106,100,99,111,101,102,99,116,95,49,95,53,56,0);
       let pausel = String.fromCharCode(106,115,105,109,100,95,107,95,54,52,0);
       let backx: Map<any, any> = new Map([[String.fromCharCode(115,104,105,109,109,101,114,95,104,95,53,56,0),504], [String.fromCharCode(122,95,53,49,95,116,114,97,110,115,112,111,110,101,100,0),504]]);
       let h_centerW = String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,95,97,95,52,55,0);
      while (2 >= drag5.length && pausel == String.fromCharCode(79,0)) {
          let coreO = String.fromCharCode(98,95,50,95,108,105,110,107,0);
         pausel = `${backx.size | 1}`;
         coreO = "3";
         break;
      }
      while (5 >= h_centerW.length) {
         drag5 = `${h_centerW.length}`;
         break;
      }
          let anytimeh: Array<any> = [243, 827];
          let favicont: Array<any> = [String.fromCharCode(109,95,50,49,95,98,108,111,99,107,101,100,0), String.fromCharCode(97,95,56,53,95,102,116,115,105,115,115,112,97,99,101,0), String.fromCharCode(115,97,110,100,98,111,120,95,119,95,49,56,0)];
          let mergerI = 0;
         backx.set(pausel, 2);
         anytimeh = [favicont.length];
         favicont = [anytimeh.length ^ mergerI];
         mergerI ^= 2;
      if (5 < (1 + parseInt(`${crowna}`)) && (parseInt(`${crowna}`) + drag5.length) < 1) {
         crowna -= pausel.length / (Math.max(1, 7));
      }
      while (5 == leftj.size) {
         h_centerW += `${2 << (Math.min(5, drag5.length))}`;
         break;
      }
          let updates8: Array<any> = [String.fromCharCode(115,95,57,54,95,119,104,105,116,101,108,105,115,116,101,100,0), String.fromCharCode(115,95,49,53,95,113,112,102,105,108,101,0), String.fromCharCode(98,95,54,56,95,108,105,98,106,112,101,103,116,117,114,98,111,0)];
          let libpangleflippedb = 3.0;
         backx = new Map([[`${leftj.size}`, leftj.size | pausel.length]]);
         updates8 = [1];
         libpangleflippedb -= parseFloat(`${parseInt(`${libpangleflippedb}`) & 1}`);
       let chinasame2 = 1;
       let resulte = 0;
      while (2 <= leftj.size) {
         leftj.set(`${crowna}`, parseInt(`${crowna}`) ^ 1);
         break;
      }
         pausel = `${2 & resulte}`;
         chinasame2 <<= Math.min(Math.abs(parseInt(`${crowna}`) << (Math.min(drag5.length, 2))), 1);
         chinasame2 ^= 3 / (Math.max(7, chinasame2));
          let statistics6 = String.fromCharCode(108,105,115,116,110,101,114,115,95,102,95,49,0);
          let navigationQ = 4;
          let holder9: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,101,100,95,104,95,50,54,0),414], [String.fromCharCode(101,95,52,48,95,111,109,105,116,116,105,110,103,0),618], [String.fromCharCode(99,95,49,54,95,112,111,115,116,102,105,108,116,101,114,0),306]]);
         h_centerW += `${drag5.length}`;
         statistics6 += "1";
         navigationQ ^= 1;
         holder9.set(`${navigationQ}`, holder9.size + 3);
         drag5 = "3";
      traminif += "1";
      suggestion1.set(`${suggestion1.size}`, suggestion1.size | suggestion1.size);
   }
      watchT = new Map([[interstitialJ, greyB.length >> (Math.min(5, interstitialJ.length))]]);
   let libreanimated_ = tooltipsX == String.fromCharCode(100,109,53,102,115,48,119,107,99,0);
   do {
       let alertM = String.fromCharCode(104,95,54,51,95,112,114,101,100,105,99,116,111,114,115,98,0);
       let templateprocessorr = 4;
       let greeny = String.fromCharCode(110,95,52,56,95,105,112,118,0);
       let gesturesf = String.fromCharCode(112,95,57,49,95,99,111,110,116,114,111,108,115,0);
       let basketballE = 2.0;
      while (!greeny.includes(`${gesturesf.length}`)) {
         greeny = `${1 | templateprocessorr}`;
         break;
      }
         gesturesf = `${templateprocessorr}`;
      while (2 < (5 / (Math.max(6, greeny.length)))) {
         templateprocessorr /= Math.max(4, parseInt(`${basketballE}`));
         break;
      }
          let incidentX = 5.0;
          let loginJ = false;
         templateprocessorr <<= Math.min(Math.abs(1), 3);
         incidentX *= (parseFloat(`${parseInt(`${incidentX}`) ^ (loginJ ? 2 : 4)}`));
         loginJ = incidentX == 30.59 || loginJ;
          let stylesV = false;
          let iconv = 4.0;
          let klevinx: Array<any> = [897, 951];
         templateprocessorr ^= 2;
         stylesV = 26.36 > iconv;
         iconv /= Math.max(3, ((stylesV ? 5 : 2) % (Math.max(parseInt(`${iconv}`), 6))));
         klevinx = [klevinx.length];
         alertM += `${alertM.length}`;
         gesturesf += `${greeny.length}`;
         templateprocessorr %= Math.max(alertM.length, 1);
          let incidentq = String.fromCharCode(103,95,52,56,95,112,112,102,108,97,103,115,0);
          let serviceU: Array<any> = [String.fromCharCode(100,101,116,101,99,116,111,114,95,48,95,51,54,0), String.fromCharCode(99,95,53,49,95,99,97,110,99,101,108,0), String.fromCharCode(112,95,53,50,95,104,100,114,115,0)];
         alertM += `${gesturesf.length / (Math.max(7, templateprocessorr))}`;
         incidentq += `${2 * incidentq.length}`;
         serviceU.push(serviceU.length * incidentq.length);
         greeny = "1";
      if ((alertM.length << (Math.min(Math.abs(4), 2))) >= 5) {
          let unimplementedviewt = 0;
          let checkboxQ = String.fromCharCode(97,99,99,111,114,100,105,110,103,95,108,95,51,52,0);
          let binddatasz = String.fromCharCode(121,95,49,57,95,103,97,105,110,0);
          let libavdevice_ = 4;
          let vignettej = false;
         alertM += `${greeny.length >> (Math.min(Math.abs(1), 3))}`;
         unimplementedviewt >>= Math.min(3, Math.abs(1));
         checkboxQ += `${binddatasz.length - 3}`;
         binddatasz = `${((vignettej ? 5 : 4) | 2)}`;
         libavdevice_ <<= Math.min(5, Math.abs(unimplementedviewt >> (Math.min(Math.abs(1), 2))));
         vignettej = unimplementedviewt > checkboxQ.length;
      }
         greeny += `${alertM.length}`;
      if ((1 * templateprocessorr) == 4 || (1 * templateprocessorr) == 1) {
          let accepted3 = false;
          let libyogaf = false;
          let modeF = String.fromCharCode(118,100,112,97,117,99,111,110,116,101,120,116,95,113,95,51,57,0);
         greeny += `${modeF.length + alertM.length}`;
         accepted3 = libyogaf || !accepted3;
         libyogaf = libyogaf && accepted3;
         modeF = `${((accepted3 ? 4 : 2))}`;
      }
      if (5 >= (gesturesf.length ^ 5) || 5 >= (gesturesf.length / (Math.max(3, parseInt(`${basketballE}`))))) {
          let chatn = String.fromCharCode(119,95,56,56,95,97,110,111,116,104,101,114,0);
          let screenC = String.fromCharCode(118,95,51,53,95,98,111,100,121,115,105,100,0);
          let runtimeschedulerg = false;
          let filen = String.fromCharCode(122,95,51,57,95,109,112,101,103,100,97,116,97,0);
          let starP = String.fromCharCode(118,97,114,105,97,98,108,101,95,116,95,55,53,0);
         basketballE *= parseFloat(`${chatn.length ^ alertM.length}`);
         chatn += `${screenC.length}`;
         screenC += `${3 | filen.length}`;
         runtimeschedulerg = filen == String.fromCharCode(90,0);
         starP += `${starP.length % (Math.max(3, 8))}`;
      }
      let areaf = greeny.length <= 6681710;
      do {
          let championi: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,116,97,110,0),true ], [String.fromCharCode(97,117,100,105,111,95,112,95,55,55,0),false ], [String.fromCharCode(102,95,54,50,95,115,101,101,107,97,98,108,101,0),false ]]);
          let favoriteM: Map<any, any> = new Map([[String.fromCharCode(100,95,49,53,95,118,105,115,117,97,108,105,122,97,116,105,111,110,0),299], [String.fromCharCode(97,95,51,55,95,112,108,97,121,111,117,116,0),182]]);
          let indicatort = String.fromCharCode(97,110,99,104,111,114,115,95,114,95,53,50,0);
         greeny += `${1 - championi.size}`;
         championi.set(indicatort, favoriteM.size << (Math.min(indicatort.length, 1)));
         favoriteM.set(indicatort, favoriteM.size);
         if (areaf) {
            break;
         }
      } while ((greeny.startsWith(`${templateprocessorr}`)) && areaf);
      tooltipsX = `${1 * parseInt(`${sliderc}`)}`;
      if (libreanimated_) {
         break;
      }
   } while ((5 == (tooltipsX.length & 3)) && libreanimated_);
      traminif += `${kickv.length % (Math.max(3, 10))}`;
   let successg = 5647279.0 >= sliderc;
   do {
      sliderc -= parseFloat(`${parseInt(`${sliderc}`) * greenT.length}`);
      if (successg) {
         break;
      }
   } while (successg && (interstitialJ.length < 5));
      watchT = new Map([[`${kickv.length}`, 2]]);
      traminif = `${kickv.length ^ 1}`;
      sliderc += parseFloat(`${parseInt(`${sliderc}`) + 2}`);
      tooltipsX += `${((ajaxM ? 3 : 1) * greyB.length)}`;
   while (tooltipsX == imagemanager0) {
       let flyerB = String.fromCharCode(100,95,57,49,95,97,103,103,114,101,103,97,116,111,114,0);
       let b_managerf = String.fromCharCode(101,95,51,95,108,111,103,100,98,0);
       let videocommonu = String.fromCharCode(116,105,101,114,95,118,95,57,50,0);
       let libflipper1 = 2.0;
          let areay = 1.0;
          let matchesK: Array<any> = [60, 120, 172];
          let othera: Map<any, any> = new Map([[String.fromCharCode(100,101,98,108,111,99,107,95,118,95,52,56,0),702], [String.fromCharCode(102,95,50,53,95,99,111,101,114,99,101,0),658], [String.fromCharCode(115,101,99,111,110,100,115,95,97,95,55,56,0),322]]);
         flyerB += `${parseInt(`${libflipper1}`) / (Math.max(5, videocommonu.length))}`;
         areay -= parseFloat(`${matchesK.length}`);
         matchesK.push(matchesK.length | 2);
         othera = new Map([[`${othera.size}`, matchesK.length - othera.size]]);
       let dropdownd: Array<any> = [199, 872];
      for (let i = 0; i < 2; i++) {
         videocommonu = `${b_managerf.length - 1}`;
      }
      let classesG = libflipper1 <= 5055674.0;
      do {
         libflipper1 /= Math.max(3, videocommonu.length);
         if (classesG) {
            break;
         }
      } while (classesG && (3 >= (parseInt(`${libflipper1}`) + videocommonu.length) && (5.75 + libflipper1) >= 4.4));
          let datan: Map<any, any> = new Map([[String.fromCharCode(117,110,105,119,103,116,95,111,95,52,56,0),964], [String.fromCharCode(105,95,53,49,95,100,115,112,117,116,105,108,0),130], [String.fromCharCode(103,95,53,57,95,109,111,116,105,111,110,112,105,120,101,108,115,0),671]]);
         flyerB += `${2 | parseInt(`${libflipper1}`)}`;
         datan.set(`${datan.size}`, 1);
      for (let w = 0; w < 1; w++) {
         dropdownd = [b_managerf.length];
      }
      for (let q = 0; q < 1; q++) {
         videocommonu = `${(String.fromCharCode(99,0) == videocommonu ? videocommonu.length : flyerB.length)}`;
      }
      if (b_managerf != flyerB) {
          let shootW = 2;
         flyerB += `${b_managerf.length & flyerB.length}`;
         shootW |= shootW ^ 3;
      }
      let clockp = dropdownd.length >= 6212727;
      do {
         dropdownd = [b_managerf.length << (Math.min(Math.abs(1), 1))];
         if (clockp) {
            break;
         }
      } while (clockp && ((2 * dropdownd.length) >= 4 || (libflipper1 - 2.20) >= 1.67));
      if (2 >= (parseInt(`${libflipper1}`) + dropdownd.length) || (parseInt(`${libflipper1}`) + dropdownd.length) >= 2) {
         libflipper1 -= (String.fromCharCode(76,0) == b_managerf ? b_managerf.length : flyerB.length);
      }
         videocommonu = `${flyerB.length / 2}`;
          let libmapbufferjniF = 3;
          let g_titlef = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,52,95,53,55,0);
         libflipper1 /= Math.max(dropdownd.length, 3);
         libmapbufferjniF /= Math.max(libmapbufferjniF - g_titlef.length, 5);
         g_titlef += `${g_titlef.length - 2}`;
      imagemanager0 = "1";
      break;
   }
   for (let p = 0; p < 2; p++) {
      traminif += `${imagemanager0.length ^ interstitialJ.length}`;
   }
   let setting0 = 8267623 >= kickv.length;
   do {
      kickv.push((greyB == String.fromCharCode(108,0) ? greyB.length : parseInt(`${sliderc}`)));
      if (setting0) {
         break;
      }
   } while (setting0 && ((kickv.length % (Math.max(8, interstitialJ.length))) <= 1 || 4 <= (1 % (Math.max(7, kickv.length)))));
   if (ajaxM) {
       let gemfile9 = true;
       let fastforwardH = true;
       let mergerG: Array<any> = [995, 601, 964];
         fastforwardH = (!gemfile9 ? fastforwardH : !gemfile9);
         fastforwardH = fastforwardH && mergerG.length < 89;
      let utilsr = gemfile9 ? !gemfile9 : gemfile9;
      do {
          let graphq = 4.0;
          let bufferh = String.fromCharCode(122,95,50,51,95,102,116,118,118,101,114,116,108,105,110,101,0);
          let plashX = 1.0;
          let modelC = String.fromCharCode(100,121,110,97,114,114,97,121,95,119,95,57,53,0);
         gemfile9 = (modelC.length * parseInt(`${plashX}`)) < 81;
         graphq *= parseFloat(`${1}`);
         bufferh = `${1 * bufferh.length}`;
         plashX -= (parseFloat(`${String.fromCharCode(75,0) == bufferh ? bufferh.length : parseInt(`${graphq}`)}`));
         modelC = `${parseInt(`${graphq}`) & bufferh.length}`;
         if (utilsr) {
            break;
         }
      } while (utilsr && (gemfile9));
         gemfile9 = (!gemfile9 ? !fastforwardH : !gemfile9);
      while (fastforwardH && gemfile9) {
         gemfile9 = ((mergerG.length & (!fastforwardH ? 74 : mergerG.length)) <= 74);
         break;
      }
      if (fastforwardH || !gemfile9) {
          let combinedj = String.fromCharCode(104,105,103,104,112,97,115,115,95,102,95,57,54,0);
          let bannerp: Map<any, any> = new Map([[String.fromCharCode(117,95,57,54,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0),false ], [String.fromCharCode(109,95,56,56,95,114,102,102,116,102,0),false ]]);
          let filterC = 5.0;
         fastforwardH = !gemfile9;
         combinedj += `${bannerp.size | 2}`;
         bannerp = new Map([[`${bannerp.size}`, 1]]);
         filterC += parseFloat(`${3 + combinedj.length}`);
      }
      let graphx = fastforwardH ? !fastforwardH : fastforwardH;
      do {
         fastforwardH = !gemfile9;
         if (graphx) {
            break;
         }
      } while ((gemfile9) && graphx);
         fastforwardH = mergerG.length >= 39;
       let commentI = String.fromCharCode(114,101,115,117,108,116,105,110,103,95,57,95,51,53,0);
      ajaxM = tooltipsX.length <= 21;
   }
   let backgroundX = 9740824 <= kickv.length;
   do {
       let libfbR: Array<any> = [845, 992, 387];
       let eventR = 1;
         libfbR = [eventR & 3];
         eventR += 1 / (Math.max(4, libfbR.length));
         libfbR.push(libfbR.length);
      for (let p = 0; p < 3; p++) {
         eventR >>= Math.min(2, libfbR.length);
      }
      for (let x = 0; x < 1; x++) {
         eventR <<= Math.min(1, Math.abs(eventR >> (Math.min(2, Math.abs(1)))));
      }
      if ((libfbR.length + eventR) > 5 || (5 + libfbR.length) > 1) {
          let androidP = 2.0;
          let overf: Array<any> = [986, 258, 146];
          let megaphonel: Map<any, any> = new Map([[String.fromCharCode(108,95,51,57,95,102,111,114,101,104,101,97,100,0),31], [String.fromCharCode(110,117,108,108,115,95,48,95,49,53,0),509], [String.fromCharCode(108,95,56,51,95,109,117,108,116,120,0),432]]);
          let launch7: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,108,111,103,103,97,98,108,101,0),503], [String.fromCharCode(121,95,55,49,95,98,117,115,121,0),167], [String.fromCharCode(115,109,112,116,101,95,122,95,51,48,0),649]]);
         eventR -= 2;
         androidP /= Math.max(5, megaphonel.size);
         overf.push(launch7.size ^ parseInt(`${androidP}`));
         megaphonel.set(`${androidP}`, launch7.size >> (Math.min(Math.abs(1), 1)));
      }
      kickv.push(greyB.length);
      if (backgroundX) {
         break;
      }
   } while (backgroundX && (3 <= (2 * traminif.length)));
       let nterstitial2 = String.fromCharCode(107,95,57,50,95,97,108,103,111,114,105,116,104,109,115,0);
       let libfabricjniE = String.fromCharCode(101,95,49,55,95,110,117,108,108,115,0);
      for (let h = 0; h < 3; h++) {
         libfabricjniE = `${nterstitial2.length}`;
      }
         nterstitial2 += `${2 ^ nterstitial2.length}`;
       let showW: Array<any> = [String.fromCharCode(113,115,118,118,112,112,95,50,95,55,56,0), String.fromCharCode(110,95,52,50,95,98,97,100,0), String.fromCharCode(118,111,114,100,105,112,108,111,109,95,49,95,57,57,0)];
       let questH: Array<any> = [834, 871, 24];
         libfabricjniE += `${3 * showW.length}`;
         showW = [2];
         nterstitial2 += `${(libfabricjniE == String.fromCharCode(106,0) ? libfabricjniE.length : nterstitial2.length)}`;
      watchT.set(`${sliderc}`, parseInt(`${sliderc}`) * interstitialJ.length);
      kickv.push(3);
      kickv = [(traminif == String.fromCharCode(100,0) ? traminif.length : greyB.length)];
   if (kickv.length > 3) {
      kickv.push((traminif == String.fromCharCode(81,0) ? traminif.length : interstitialJ.length));
   }
   for (let w = 0; w < 1; w++) {
      watchT.set(tooltipsX, (tooltipsX == String.fromCharCode(82,0) ? greenT.length : tooltipsX.length));
   }
      watchT = new Map([[`${middle6.size}`, traminif.length]]);
   for (let h = 0; h < 2; h++) {
      middle6 = new Map([[`${kickv.length}`, 1 >> (Math.min(1, greyB.length))]]);
   }
   if (!interstitialJ.endsWith(traminif)) {
      traminif = `${((ajaxM ? 3 : 5) & greenT.length)}`;
   }
   while (interstitialJ.includes(`${ajaxM}`)) {
      interstitialJ += "3";
      break;
   }
   for (let n = 0; n < 3; n++) {
      middle6 = new Map([[traminif, imagemanager0.length ^ traminif.length]]);
   }
   for (let p = 0; p < 1; p++) {
      tooltipsX += `${(String.fromCharCode(98,0) == traminif ? traminif.length : greenT.length)}`;
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

      
      yys_event_common.sportDetailsVipPopupTimesAnalytics();
      
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
       let bannerj = String.fromCharCode(102,95,49,57,95,115,101,118,101,114,105,116,121,0);
    let rncorev: Array<any> = [98, 244];
    let fileK = 1;
    let clubC = 5;
    let libavdevice0: Array<any> = [50, 270, 201];
    let shirt_ = String.fromCharCode(109,95,53,49,95,98,114,111,107,101,110,0);
    let fullW = String.fromCharCode(104,95,57,50,95,114,101,110,100,105,116,105,111,110,0);
    let videojs5 = String.fromCharCode(98,95,57,50,95,116,101,115,116,110,101,116,0);
    let countryc = String.fromCharCode(106,95,56,48,95,111,112,101,110,0);
    let brightness1 = 3.0;
       let searchbarQ: Map<any, any> = new Map([[String.fromCharCode(107,95,54,49,95,111,99,97,108,105,122,97,116,105,111,110,0),732], [String.fromCharCode(115,111,109,101,95,52,95,54,48,0),270]]);
       let long_fA = true;
       let libpangleflippedc = 5.0;
       let time_8oj = 4.0;
         long_fA = !long_fA;
          let sellF: Map<any, any> = new Map([[String.fromCharCode(116,95,51,54,95,97,108,116,101,114,110,97,116,101,0),String.fromCharCode(109,95,50,95,109,101,116,97,0)], [String.fromCharCode(121,95,49,53,95,97,99,118,112,0),String.fromCharCode(111,95,55,53,95,114,101,103,0)]]);
          let analyticsX = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,98,95,56,57,0);
         long_fA = (11 <= (searchbarQ.size * (long_fA ? 11 : searchbarQ.size)));
         sellF = new Map([[`${sellF.size}`, analyticsX.length]]);
         analyticsX = `${sellF.size}`;
      for (let h = 0; h < 2; h++) {
         libpangleflippedc -= parseFloat(`${1 / (Math.max(parseInt(`${time_8oj}`), 5))}`);
      }
          let abidetecty = 4.0;
          let rncoreS: Array<any> = [String.fromCharCode(117,95,50,51,95,97,108,103,111,114,0), String.fromCharCode(103,95,49,48,48,95,108,111,103,103,101,114,0)];
         long_fA = abidetecty <= 47.26 || 3 <= rncoreS.length;
      while (5.21 <= libpangleflippedc || 5.59 <= (libpangleflippedc * 5.21)) {
         long_fA = (52 < (searchbarQ.size - (!long_fA ? 52 : searchbarQ.size)));
         break;
      }
      countryc += `${3 * rncorev.length}`;
   let internet4 = 5547129 <= rncorev.length;
   do {
      rncorev = [libavdevice0.length % (Math.max(4, fullW.length))];
      if (internet4) {
         break;
      }
   } while ((bannerj.includes(`${rncorev.length}`)) && internet4);
       let bottomj: Array<any> = [588, 41, 222];
       let projectJ = String.fromCharCode(109,95,55,56,95,115,101,110,99,0);
       let humidityf = true;
      let alerte = humidityf ? !humidityf : humidityf;
      do {
         humidityf = (((!humidityf ? 35 : projectJ.length) % (Math.max(5, projectJ.length))) == 35);
         if (alerte) {
            break;
         }
      } while ((2 <= projectJ.length && !humidityf) && alerte);
      while (projectJ.includes(`${bottomj.length}`)) {
         bottomj = [((humidityf ? 1 : 1) + projectJ.length)];
         break;
      }
          let pinge: Map<any, any> = new Map([[String.fromCharCode(109,105,109,105,99,95,114,95,50,56,0),String.fromCharCode(100,95,52,57,95,108,105,98,118,101,114,115,105,111,110,0)], [String.fromCharCode(112,114,111,112,111,115,101,114,95,120,95,55,56,0),String.fromCharCode(100,97,114,107,95,50,95,56,56,0)]]);
          let statisticsy: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,115,95,51,0),619], [String.fromCharCode(97,118,111,105,100,95,100,95,53,48,0),871]]);
         bottomj = [1 | pinge.size];
         pinge.set(`${statisticsy.size}`, 3);
         statisticsy.set(`${statisticsy.size}`, statisticsy.size >> (Math.min(Math.abs(3), 2)));
      let hejik = humidityf ? !humidityf : humidityf;
      do {
         humidityf = projectJ.length > 82 || !humidityf;
         if (hejik) {
            break;
         }
      } while (hejik && (projectJ.endsWith(`${humidityf}`)));
          let textM = String.fromCharCode(98,95,54,50,95,102,105,108,116,101,114,102,110,0);
         bottomj = [textM.length / 2];
      for (let i = 0; i < 2; i++) {
          let mbnativeadvancedg = String.fromCharCode(100,95,57,49,95,111,118,101,114,115,104,111,111,116,0);
          let eighteene: Map<any, any> = new Map([[String.fromCharCode(99,95,54,57,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0),804], [String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,95,105,95,55,57,0),832], [String.fromCharCode(120,109,117,108,116,95,52,95,49,48,0),821]]);
         humidityf = eighteene.size <= 30;
         mbnativeadvancedg = `${mbnativeadvancedg.length + mbnativeadvancedg.length}`;
         eighteene = new Map([[mbnativeadvancedg, mbnativeadvancedg.length / (Math.max(mbnativeadvancedg.length, 1))]]);
      }
         humidityf = projectJ.length <= 5;
      if (2 <= bottomj.length) {
         humidityf = (62 <= ((humidityf ? bottomj.length : 62) ^ bottomj.length));
      }
          let templateprocessord = String.fromCharCode(114,95,55,55,95,101,99,104,111,0);
          let profilev = 3.0;
          let small4 = 5.0;
         bottomj = [2];
         templateprocessord = `${parseInt(`${profilev}`)}`;
         profilev += parseFloat(`${templateprocessord.length * 1}`);
         small4 /= Math.max(parseFloat(`${parseInt(`${profilev}`) % 2}`), 3);
      videojs5 = "1";
      fullW += `${fullW.length * 2}`;
   if (rncorev.length >= libavdevice0.length) {
       let graphd: Array<any> = [String.fromCharCode(114,95,52,51,95,115,116,114,101,97,109,105,110,102,111,0), String.fromCharCode(113,95,57,54,95,106,100,99,111,101,102,99,116,0), String.fromCharCode(97,101,115,110,105,95,119,95,52,52,0)];
       let themeF = 0.0;
       let favoritei = false;
       let inactive9 = String.fromCharCode(100,101,110,111,109,95,99,95,55,53,0);
       let nterstitialF = 0;
      for (let n = 0; n < 3; n++) {
         inactive9 += `${((favoritei ? 1 : 4) * graphd.length)}`;
      }
      let videoc = favoritei ? !favoritei : favoritei;
      do {
         favoritei = nterstitialF < graphd.length;
         if (videoc) {
            break;
         }
      } while (videoc && (favoritei));
      while ((5 >> (Math.min(4, inactive9.length))) <= 3) {
         inactive9 = `${((favoritei ? 3 : 2) ^ inactive9.length)}`;
         break;
      }
          let libglog4 = String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,95,117,95,54,57,0);
          let executorC = 4.0;
          let reactnativejsQ = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,112,95,51,53,0);
         graphd.push(nterstitialF);
         libglog4 = `${libglog4.length}`;
         executorC += parseFloat(`${1}`);
         reactnativejsQ += "3";
      for (let r = 0; r < 3; r++) {
         graphd.push(graphd.length - parseInt(`${themeF}`));
      }
         graphd = [nterstitialF];
         favoritei = inactive9.length == 33;
      let vietnamf = favoritei ? !favoritei : favoritei;
      do {
         favoritei = (parseFloat(`${graphd.length}`) * themeF) <= 27.78;
         if (vietnamf) {
            break;
         }
      } while (((graphd.length >> (Math.min(Math.abs(3), 4))) > 1 || 3 > graphd.length) && vietnamf);
      for (let p = 0; p < 2; p++) {
         themeF -= (parseFloat(`${parseInt(`${themeF}`) >> (Math.min(1, Math.abs((favoritei ? 2 : 3))))}`));
      }
          let chinasameP = String.fromCharCode(115,95,53,49,95,111,112,116,105,111,110,97,108,108,121,0);
          let contextQ = 2;
         nterstitialF >>= Math.min(3, Math.abs(3));
         chinasameP += `${(chinasameP == String.fromCharCode(48,0) ? chinasameP.length : contextQ)}`;
         contextQ *= contextQ % 1;
         graphd.push(2);
      let vertical0 = 6211268.0 <= themeF;
      do {
          let commonD = String.fromCharCode(114,95,56,51,95,100,99,116,0);
          let temperaturep = String.fromCharCode(112,111,105,110,116,101,114,95,52,95,53,56,0);
         themeF -= (parseFloat(`${String.fromCharCode(53,0) == inactive9 ? parseInt(`${themeF}`) : inactive9.length}`));
         commonD = `${temperaturep.length}`;
         temperaturep = "2";
         if (vertical0) {
            break;
         }
      } while ((!favoritei && 5.70 < (themeF * 5.33)) && vertical0);
          let crossm = 1;
          let calendarL = true;
          let service1 = 3;
         graphd.push(crossm / 1);
         crossm += service1 | 3;
         calendarL = service1 <= 45;
         nterstitialF -= graphd.length | parseInt(`${themeF}`);
      for (let d = 0; d < 1; d++) {
         favoritei = inactive9.length >= 33;
      }
      libavdevice0.push((bannerj == String.fromCharCode(108,0) ? bannerj.length : shirt_.length));
   }

    const bannerRes = await yys_CurrentLang.getBannerAd(111);

       let libavformatT = 5.0;
       let current_: Array<any> = [674, 30];
       let combinep: Map<any, any> = new Map([[String.fromCharCode(101,95,56,95,99,114,108,115,0),false ], [String.fromCharCode(120,95,49,56,95,97,100,105,100,0),false ]]);
         current_ = [current_.length];
          let largeO = 4.0;
          let halfw = 5.0;
         current_ = [combinep.size - 2];
         largeO -= parseFloat(`${parseInt(`${halfw}`)}`);
         halfw += parseInt(`${largeO}`) | 1;
      if (1 < (combinep.size - 1) || 1 < (current_.length - combinep.size)) {
         current_.push(2 ^ combinep.size);
      }
      let textlayoutmanagerQ = 5215387 >= combinep.size;
      do {
         combinep = new Map([[`${combinep.size}`, 1]]);
         if (textlayoutmanagerQ) {
            break;
         }
      } while ((!Array.from(combinep.values()).includes(current_.length)) && textlayoutmanagerQ);
         combinep = new Map([[`${combinep.size}`, 1 - combinep.size]]);
       let default_a0M = 1;
       let whiteH: Map<any, any> = new Map([[String.fromCharCode(113,95,48,95,115,117,112,112,114,101,115,115,0),String.fromCharCode(114,111,103,114,101,115,115,95,102,95,48,0)], [String.fromCharCode(115,117,98,106,101,99,116,115,95,98,95,55,54,0),String.fromCharCode(106,95,57,48,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0)]]);
       let toponB: Map<any, any> = new Map([[String.fromCharCode(117,116,120,111,115,95,119,95,54,57,0),true ], [String.fromCharCode(111,95,50,95,100,105,115,109,105,115,115,0),false ], [String.fromCharCode(111,116,111,105,95,98,95,55,48,0),true ]]);
      let xvodC = 7117388 >= current_.length;
      do {
          let injuryM = String.fromCharCode(112,101,99,101,110,116,95,104,95,52,55,0);
         current_.push(parseInt(`${libavformatT}`));
         injuryM = `${injuryM.length}`;
         if (xvodC) {
            break;
         }
      } while (xvodC && (Array.from(whiteH.values()).includes(current_.length)));
          let assistD = String.fromCharCode(109,95,53,50,95,114,97,110,100,111,109,110,101,115,115,0);
          let diceG = 5.0;
          let gpayk = String.fromCharCode(111,95,55,56,95,99,108,116,111,115,116,114,0);
         libavformatT *= default_a0M;
         assistD = `${2 ^ parseInt(`${diceG}`)}`;
         diceG -= parseFloat(`${parseInt(`${diceG}`) * 1}`);
         gpayk += `${3 * gpayk.length}`;
      fileK %= Math.max(libavdevice0.length + 3, 2);
      libavdevice0.push(2 + videojs5.length);
      countryc = "2";
   while (shirt_.length < 1) {
      bannerj = `${3 | rncorev.length}`;
      break;
   }
   for (let u = 0; u < 1; u++) {
      fileK >>= Math.min(Math.abs((String.fromCharCode(118,0) == countryc ? bannerj.length : countryc.length)), 2);
   }
    const banner = bannerRes.ads;

      rncorev.push(videojs5.length);
       let flipperB: Array<any> = [806, 207];
       let g_imagel: Map<any, any> = new Map([[String.fromCharCode(112,95,50,51,95,99,111,108,108,97,116,101,0),864], [String.fromCharCode(115,109,97,114,116,95,106,95,57,54,0),447], [String.fromCharCode(100,95,57,95,116,105,99,107,105,110,103,0),682]]);
       let crossf: Array<any> = [805, 139, 927];
         g_imagel = new Map([[`${g_imagel.size}`, g_imagel.size >> (Math.min(flipperB.length, 4))]]);
      if (!Array.from(g_imagel.values()).includes(flipperB.length)) {
          let saveI = false;
          let event0 = false;
          let recommendationM = false;
         g_imagel = new Map([[`${flipperB.length}`, 3]]);
         saveI = (recommendationM ? !event0 : recommendationM);
         event0 = recommendationM;
      }
          let feedbackg = 5.0;
         g_imagel = new Map([[`${crossf.length}`, crossf.length]]);
         feedbackg += parseFloat(`${parseInt(`${feedbackg}`)}`);
       let update_3tn = 3.0;
      if (4.30 > update_3tn) {
         crossf = [flipperB.length - 2];
      }
         flipperB.push(crossf.length ^ flipperB.length);
      if (3 <= crossf.length) {
          let modalm = 1.0;
         g_imagel.set(`${update_3tn}`, parseInt(`${update_3tn}`) ^ g_imagel.size);
         modalm += parseInt(`${modalm}`);
      }
          let areaM = String.fromCharCode(117,110,102,111,99,117,115,101,100,95,121,95,56,0);
          let baiduO = 5.0;
         flipperB = [crossf.length | 3];
         areaM += `${parseInt(`${baiduO}`) ^ 1}`;
         baiduO += parseFloat(`${areaM.length + parseInt(`${baiduO}`)}`);
      if (crossf.includes(update_3tn)) {
         crossf = [g_imagel.size];
      }
      rncorev.push(shirt_.length + rncorev.length);
       let nalyticsT = true;
       let sansc = 4;
          let mergerB = String.fromCharCode(115,115,114,99,115,95,114,95,53,50,0);
         nalyticsT = (55 < ((nalyticsT ? mergerB.length : 55) ^ mergerB.length));
          let libavfilterF = 2.0;
         sansc *= (sansc % (Math.max(1, (nalyticsT ? 1 : 5))));
         libavfilterF /= Math.max(3, parseFloat(`${parseInt(`${libavfilterF}`) & 3}`));
         sansc -= 1;
         sansc -= (sansc & (nalyticsT ? 4 : 5));
          let catagoryi = 4.0;
         nalyticsT = nalyticsT && 31 <= sansc;
         catagoryi -= 3;
          let sans9: Array<any> = [939, 393];
          let kuaishouU = 2.0;
          let sentry3 = false;
         nalyticsT = !nalyticsT;
         sans9.push(((sentry3 ? 2 : 4) % (Math.max(6, parseInt(`${kuaishouU}`)))));
         kuaishouU /= Math.max(4, 1 ^ parseInt(`${kuaishouU}`));
         sentry3 = sentry3 || sans9.length <= 9;
      rncorev = [1];
   if (2 == libavdevice0.length) {
      libavdevice0 = [3 & fileK];
   }
      videojs5 = "2";

    if (banner) {

   while ((clubC << (Math.min(Math.abs(3), 1))) >= 4 && 2 >= (clubC << (Math.min(Math.abs(3), 5)))) {
      rncorev = [(String.fromCharCode(76,0) == bannerj ? rncorev.length : bannerj.length)];
      break;
   }
   while ((fullW.length * fileK) >= 3 && 3 >= (fileK * fullW.length)) {
      fullW = `${clubC ^ bannerj.length}`;
      break;
   }
   for (let s = 0; s < 2; s++) {
      rncorev.push(videojs5.length * clubC);
   }
   if (3 > (libavdevice0.length * countryc.length)) {
      libavdevice0 = [bannerj.length & 2];
   }
       let chinaZ = String.fromCharCode(116,95,57,50,95,100,117,112,108,101,120,0);
         chinaZ = "2";
      for (let g = 0; g < 3; g++) {
         chinaZ += `${2 / (Math.max(4, chinaZ.length))}`;
      }
      if (chinaZ.length >= 4) {
         chinaZ = `${chinaZ.length / 3}`;
      }
      bannerj += `${1 % (Math.max(parseInt(`${brightness1}`), 9))}`;
      setBannerAd(banner);
    } else {

      bannerj = "1";
      clubC *= (shirt_ == String.fromCharCode(108,0) ? shirt_.length : clubC);
       let custom_ = String.fromCharCode(121,95,56,49,95,101,110,100,120,0);
       let cnewinterstitialU = String.fromCharCode(98,108,97,109,101,100,95,109,95,57,48,0);
       let typingm = 4;
         typingm |= (custom_ == String.fromCharCode(97,0) ? cnewinterstitialU.length : custom_.length);
         custom_ += `${cnewinterstitialU.length % (Math.max(2, 4))}`;
      if (5 <= typingm) {
         typingm %= Math.max(2, cnewinterstitialU.length);
      }
      if ((custom_.length & typingm) < 4 || (4 & typingm) < 4) {
         typingm %= Math.max((String.fromCharCode(101,0) == cnewinterstitialU ? cnewinterstitialU.length : custom_.length), 1);
      }
      if ((custom_.length + 5) < 3) {
         typingm /= Math.max(typingm, 4);
      }
      if ((typingm ^ 4) >= 2) {
         typingm &= (String.fromCharCode(122,0) == custom_ ? custom_.length : typingm);
      }
      for (let t = 0; t < 3; t++) {
         cnewinterstitialU = "1";
      }
         cnewinterstitialU = `${cnewinterstitialU.length % (Math.max(custom_.length, 9))}`;
       let latnf = 4.0;
       let pageK = 1.0;
      libavdevice0 = [bannerj.length % 1];
   if (brightness1 > 3.49) {
      clubC >>= Math.min(3, Math.abs(2));
   }
       let xvodf = false;
       let valuesg = String.fromCharCode(102,95,49,52,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0);
      while (1 == valuesg.length) {
          let submitV: Map<any, any> = new Map([[String.fromCharCode(118,101,114,98,111,115,101,95,102,95,57,53,0),String.fromCharCode(97,95,54,48,95,119,101,98,118,116,116,0)], [String.fromCharCode(104,95,55,49,95,112,95,56,57,0),String.fromCharCode(100,95,51,50,95,107,116,111,112,0)]]);
         xvodf = submitV.size >= valuesg.length;
         break;
      }
         valuesg += `${valuesg.length}`;
         valuesg += `${((xvodf ? 5 : 2))}`;
      let manifestC = xvodf ? !xvodf : xvodf;
      do {
         xvodf = valuesg.startsWith(`${xvodf}`);
         if (manifestC) {
            break;
         }
      } while ((!xvodf) && manifestC);
         xvodf = valuesg.length == 78;
         valuesg += `${valuesg.length - 2}`;
      shirt_ = `${shirt_.length}`;
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchBannerAd();
  }, []);

  const onVipCountdownClick = useCallback(() => {
       let eventE = 1.0;
    let whatsapps: Array<any> = [String.fromCharCode(119,95,54,53,95,114,101,97,112,101,114,0), String.fromCharCode(117,118,109,118,95,115,95,49,48,0), String.fromCharCode(110,95,54,54,95,117,115,114,115,99,116,112,0)];
    let lineI = String.fromCharCode(97,100,106,117,115,116,101,100,95,105,95,57,49,0);
    let proxyj = 0.0;
    let private_dD: Array<any> = [717, 693];
    let gpayJ = 2.0;
    let gmailB = String.fromCharCode(100,95,51,54,95,115,112,97,99,101,114,0);
    let eventR = 1.0;
    let libswresampleu: Array<any> = [String.fromCharCode(115,109,117,115,104,95,56,95,51,52,0), String.fromCharCode(99,97,112,116,117,114,101,95,56,95,50,51,0), String.fromCharCode(115,95,49,48,95,97,118,99,105,110,116,114,97,0)];
    let bottomp = 1.0;
   while (5.26 < (2.98 + eventE) || (eventE * 2.98) < 2.81) {
       let private_517 = String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,108,95,51,53,0);
       let unselectedX = 3;
       let configureX: Array<any> = [571, 243];
       let libsentryo = String.fromCharCode(105,110,116,101,114,95,116,95,57,53,0);
          let materialB: Map<any, any> = new Map([[String.fromCharCode(99,95,48,95,113,100,101,108,116,97,0),372], [String.fromCharCode(115,95,56,48,95,118,98,108,101,0),617]]);
          let moviesp = 0.0;
         configureX.push(materialB.size / 3);
         materialB = new Map([[`${moviesp}`, parseInt(`${moviesp}`) / (Math.max(parseInt(`${moviesp}`), 7))]]);
      let libavformatK = 7475512 >= unselectedX;
      do {
         unselectedX |= (String.fromCharCode(80,0) == libsentryo ? unselectedX : libsentryo.length);
         if (libavformatK) {
            break;
         }
      } while ((!private_517.endsWith(`${unselectedX}`)) && libavformatK);
      while (1 == (libsentryo.length % 1)) {
         libsentryo = `${(private_517 == String.fromCharCode(101,0) ? private_517.length : unselectedX)}`;
         break;
      }
         configureX.push((String.fromCharCode(87,0) == libsentryo ? libsentryo.length : configureX.length));
         configureX = [(String.fromCharCode(66,0) == private_517 ? private_517.length : unselectedX)];
         libsentryo = `${unselectedX % 3}`;
         libsentryo += `${unselectedX | 2}`;
         libsentryo += `${private_517.length}`;
          let stro = 5;
         configureX.push(unselectedX);
         stro ^= stro - 3;
      if (5 > (configureX.length | libsentryo.length)) {
         configureX = [libsentryo.length];
      }
         libsentryo = `${private_517.length}`;
      while ((private_517.length - 1) <= 4 && (1 - unselectedX) <= 2) {
         unselectedX <<= Math.min(1, Math.abs(2 ^ unselectedX));
         break;
      }
      eventE *= parseFloat(`${private_dD.length}`);
      break;
   }
      private_dD = [whatsapps.length & 3];
   if (2.83 <= (gpayJ / (Math.max(2, eventE))) && 2.83 <= (eventE / (Math.max(6, gpayJ)))) {
      eventE += parseFloat(`${lineI.length}`);
   }
   if (gmailB.length < eventR) {
      gmailB += `${whatsapps.length}`;
   }
      eventE /= Math.max(3, parseFloat(`${gmailB.length / (Math.max(4, parseInt(`${eventR}`)))}`));
      whatsapps.push(private_dD.length & 3);

    videoRef.current?.setPause(true);

       let hiada = 4.0;
       let acceptedY = 1;
      while (acceptedY > hiada) {
         hiada /= Math.max(parseFloat(`${parseInt(`${hiada}`) * acceptedY}`), 3);
         break;
      }
         hiada -= parseFloat(`${parseInt(`${hiada}`)}`);
         acceptedY &= 2;
         acceptedY += acceptedY;
      if (5.91 <= hiada) {
          let schedulerY = 2.0;
         acceptedY *= 3;
         schedulerY += parseFloat(`${1 * parseInt(`${schedulerY}`)}`);
      }
      for (let v = 0; v < 1; v++) {
         hiada -= parseFloat(`${parseInt(`${hiada}`)}`);
      }
      eventR -= 2 >> (Math.min(5, gmailB.length));
      eventE -= parseFloat(`${2}`);
   while (private_dD.includes(gpayJ)) {
       let completeA = false;
       let fillL = 2.0;
          let corea = 3;
          let overu: Array<any> = [385, 865, 392];
         fillL /= Math.max(corea, 3);
         corea >>= Math.min(Math.abs(3), 3);
         overu.push(2);
      while (5.87 <= (fillL / 5.18)) {
          let favoriteG = 0.0;
          let kickV = String.fromCharCode(105,110,116,111,95,106,95,54,52,0);
          let leakcheckere = 1.0;
         completeA = leakcheckere > 68.1;
         favoriteG *= parseFloat(`${parseInt(`${favoriteG}`) + kickV.length}`);
         kickV += `${kickV.length}`;
         leakcheckere -= (parseFloat(`${kickV == String.fromCharCode(101,0) ? parseInt(`${favoriteG}`) : kickV.length}`));
         break;
      }
          let delegate_pG = String.fromCharCode(105,115,112,111,115,97,98,108,101,95,105,95,51,53,0);
         fillL += parseInt(`${fillL}`) >> (Math.min(3, Math.abs(3)));
         delegate_pG = `${delegate_pG.length}`;
          let with_dn = 1;
         completeA = with_dn == parseInt(`${fillL}`);
          let macau_ = 4.0;
          let weiboz = String.fromCharCode(114,101,100,101,116,101,99,116,95,122,95,53,55,0);
         completeA = !completeA;
         macau_ += weiboz.length & parseInt(`${macau_}`);
         weiboz = `${weiboz.length}`;
          let resendD = 0.0;
          let libcrashsdk4: Array<any> = [929, 389];
          let linku = 0;
         fillL *= parseInt(`${fillL}`) / 1;
         resendD *= linku;
         libcrashsdk4.push(parseInt(`${resendD}`) & libcrashsdk4.length);
         linku += 1 % (Math.max(6, linku));
      private_dD.push(libswresampleu.length >> (Math.min(Math.abs(2), 1)));
      break;
   }
      eventR *= 2;
   let foundT = 7210808 <= libswresampleu.length;
   do {
      libswresampleu = [private_dD.length];
      if (foundT) {
         break;
      }
   } while ((lineI.endsWith(`${libswresampleu.length}`)) && foundT);
   while (5 == (libswresampleu.length + 5)) {
       let main_o9 = String.fromCharCode(109,117,108,116,120,109,117,108,116,95,51,95,57,56,0);
          let mergerv = String.fromCharCode(113,95,55,56,95,111,114,105,101,110,116,97,116,105,111,110,0);
          let zoomG = 0.0;
         main_o9 += `${parseInt(`${zoomG}`)}`;
         mergerv = `${(String.fromCharCode(97,0) == mergerv ? mergerv.length : mergerv.length)}`;
         zoomG /= Math.max(1, parseFloat(`${3}`));
      if (main_o9.length < 1) {
         main_o9 += "3";
      }
         main_o9 = `${(main_o9 == String.fromCharCode(72,0) ? main_o9.length : main_o9.length)}`;
      libswresampleu.push(lineI.length >> (Math.min(Math.abs(1), 4)));
      break;
   }
    setShowBecomeVIPOverlay(true);

   for (let i = 0; i < 1; i++) {
      lineI += `${libswresampleu.length * 1}`;
   }
      libswresampleu = [parseInt(`${gpayJ}`)];
   for (let w = 0; w < 2; w++) {
      lineI += `${gmailB.length >> (Math.min(Math.abs(1), 3))}`;
   }
   let whitef = String.fromCharCode(104,117,50,98,116,109,0) == gmailB;
   do {
      gmailB += `${1 - parseInt(`${gpayJ}`)}`;
      if (whitef) {
         break;
      }
   } while (whitef && ((private_dD.length ^ 2) > 4));
   while ((4.27 + eventR) == 4.98) {
      eventR -= parseInt(`${gpayJ}`) + 2;
      break;
   }
       let gestureF: Map<any, any> = new Map([[String.fromCharCode(115,95,52,56,95,115,99,97,108,97,114,109,117,108,116,0),715], [String.fromCharCode(99,95,57,52,95,97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,0),968]]);
       let areaa = String.fromCharCode(101,95,54,53,95,116,116,97,101,110,99,0);
         gestureF.set(areaa, 3);
      for (let b = 0; b < 1; b++) {
          let vignetteX = true;
          let nativeexp: Map<any, any> = new Map([[String.fromCharCode(100,101,110,111,114,109,97,108,95,101,95,56,49,0),401], [String.fromCharCode(98,95,49,49,95,109,101,114,103,101,97,98,108,101,0),573], [String.fromCharCode(113,95,56,53,95,100,105,114,101,99,116,0),988]]);
          let abidetect1 = 5.0;
          let indexd = String.fromCharCode(108,95,50,52,95,97,116,111,110,0);
         areaa += `${nativeexp.size}`;
         vignetteX = parseInt(`${abidetect1}`) > indexd.length;
         nativeexp = new Map([[`${abidetect1}`, 3]]);
         indexd = `${((vignetteX ? 1 : 3) % (Math.max(parseInt(`${abidetect1}`), 1)))}`;
      }
      private_dD = [parseInt(`${gpayJ}`) + parseInt(`${eventE}`)];

    

       let attributedstringc = 1.0;
         attributedstringc -= parseFloat(`${parseInt(`${attributedstringc}`) - 2}`);
      for (let t = 0; t < 1; t++) {
          let feedbackh: Array<any> = [138, 16];
          let matcht: Map<any, any> = new Map([[String.fromCharCode(107,97,116,95,112,95,57,49,0),713], [String.fromCharCode(101,110,97,98,108,101,95,55,95,52,0),753], [String.fromCharCode(101,95,51,48,95,99,111,110,118,101,114,116,101,114,0),316]]);
         attributedstringc *= parseFloat(`${parseInt(`${attributedstringc}`) / (Math.max(matcht.size, 6))}`);
         feedbackh = [feedbackh.length];
         matcht = new Map([[`${feedbackh.length}`, feedbackh.length * 2]]);
      }
          let fadfdeebbbfdabbbabdadfaaddaaa = String.fromCharCode(98,108,111,99,107,99,104,97,105,110,115,95,56,95,55,50,0);
         attributedstringc -= parseFloat(`${fadfdeebbbfdabbbabdadfaaddaaa.length | parseInt(`${attributedstringc}`)}`);
      private_dD.push(parseInt(`${attributedstringc}`) ^ 3);
   if (!libswresampleu.includes(eventR)) {
       let proxyI = String.fromCharCode(109,111,110,111,115,112,97,99,101,95,120,95,50,48,0);
       let cricketw = 5.0;
      let calendarY = cricketw <= 5425982.0;
      do {
          let modalk = 2.0;
          let update_8az: Map<any, any> = new Map([[String.fromCharCode(100,95,56,55,95,97,112,112,114,101,99,105,97,116,101,100,104,0),String.fromCharCode(115,95,55,55,95,99,111,112,121,118,0)], [String.fromCharCode(109,97,114,107,101,114,115,95,105,95,52,50,0),String.fromCharCode(119,95,53,53,95,99,111,108,117,109,110,115,0)]]);
          let libfollyQ = 1.0;
         cricketw -= parseFloat(`${parseInt(`${modalk}`)}`);
         modalk += 3;
         update_8az.set(`${libfollyQ}`, update_8az.size + 3);
         libfollyQ -= parseInt(`${libfollyQ}`);
         if (calendarY) {
            break;
         }
      } while (calendarY && (proxyI.includes(`${cricketw}`)));
          let dataC = String.fromCharCode(101,120,105,115,116,105,110,103,95,106,95,55,50,0);
         proxyI += `${parseInt(`${cricketw}`)}`;
         dataC += `${(dataC == String.fromCharCode(115,0) ? dataC.length : dataC.length)}`;
       let tooltipsa: Array<any> = [760, 870];
      let chat2 = 5601770 <= tooltipsa.length;
      do {
          let libavdeviceG = String.fromCharCode(108,95,53,56,95,108,111,99,97,108,104,111,115,116,0);
          let aboutm: Array<any> = [301, 707, 248];
         tooltipsa.push(2 << (Math.min(3, aboutm.length)));
         libavdeviceG = "3";
         aboutm = [libavdeviceG.length];
         if (chat2) {
            break;
         }
      } while (chat2 && (proxyI.includes(`${tooltipsa.length}`)));
          let mapbufferF = String.fromCharCode(99,111,110,115,116,114,97,105,110,95,98,95,53,51,0);
         tooltipsa.push(2);
         mapbufferF = `${mapbufferF.length % (Math.max(mapbufferF.length, 4))}`;
          let libffmpegkitN: Map<any, any> = new Map([[String.fromCharCode(116,95,54,57,95,116,101,109,112,115,0),362], [String.fromCharCode(109,95,49,48,48,95,113,116,115,0),755]]);
         cricketw /= Math.max(parseFloat(`${libffmpegkitN.size}`), 4);
      eventR /= Math.max(proxyI.length + 1, 5);
   }
   for (let h = 0; h < 2; h++) {
      private_dD.push(parseInt(`${proxyj}`));
   }
   while ((proxyj + 3.77) >= 4.0) {
       let rewardvideo1 = 3;
       let stationa = String.fromCharCode(103,95,50,50,95,97,99,113,117,97,110,116,0);
       let gradleJ = String.fromCharCode(112,95,52,51,95,109,118,101,99,0);
       let kuaishouy: Map<any, any> = new Map([[String.fromCharCode(115,99,114,97,116,99,104,95,54,95,54,52,0),String.fromCharCode(99,111,109,112,97,115,115,95,118,95,56,0)], [String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,106,95,49,55,0),String.fromCharCode(108,111,103,111,115,95,117,95,56,53,0)]]);
       let typesj = String.fromCharCode(105,95,51,54,95,104,117,102,102,121,117,118,100,115,112,0);
         kuaishouy = new Map([[`${kuaishouy.size}`, kuaishouy.size + 2]]);
      let gesturesJ = rewardvideo1 <= 6515552;
      do {
         rewardvideo1 <<= Math.min(5, Math.abs((stationa == String.fromCharCode(81,0) ? stationa.length : kuaishouy.size)));
         if (gesturesJ) {
            break;
         }
      } while ((rewardvideo1 <= typesj.length) && gesturesJ);
      let tempt = 7792916 >= typesj.length;
      do {
          let nexto = 3.0;
          let stringsb = String.fromCharCode(104,95,52,95,102,109,116,112,0);
          let condensed9 = 3;
          let matchesa = String.fromCharCode(98,95,48,95,115,119,114,101,115,97,109,112,108,101,0);
         typesj = `${(String.fromCharCode(103,0) == stringsb ? stringsb.length : typesj.length)}`;
         nexto *= parseFloat(`${2}`);
         condensed9 *= condensed9;
         matchesa += `${3 ^ parseInt(`${nexto}`)}`;
         if (tempt) {
            break;
         }
      } while ((gradleJ != String.fromCharCode(73,0)) && tempt);
      if (typesj != String.fromCharCode(48,0)) {
         gradleJ = `${stationa.length}`;
      }
         gradleJ += `${rewardvideo1 & 3}`;
         kuaishouy = new Map([[gradleJ, (String.fromCharCode(95,0) == stationa ? stationa.length : gradleJ.length)]]);
      while (gradleJ.length <= kuaishouy.size) {
          let other7 = 3.0;
          let d_viewG = String.fromCharCode(116,114,97,105,116,95,105,95,53,0);
          let libsgcore5 = 3;
          let zoomq = false;
         kuaishouy.set(`${libsgcore5}`, 2 - kuaishouy.size);
         other7 /= Math.max(parseFloat(`${d_viewG.length}`), 5);
         d_viewG = `${(d_viewG == String.fromCharCode(55,0) ? parseInt(`${other7}`) : d_viewG.length)}`;
         libsgcore5 <<= Math.min(3, Math.abs(1));
         zoomq = !d_viewG.endsWith(`${zoomq}`);
         break;
      }
         rewardvideo1 += 3;
      while (5 >= (rewardvideo1 << (Math.min(Math.abs(4), 4))) && (rewardvideo1 << (Math.min(Math.abs(4), 1))) >= 1) {
         rewardvideo1 -= gradleJ.length >> (Math.min(Math.abs(1), 5));
         break;
      }
      if (gradleJ.length <= 2) {
         rewardvideo1 ^= typesj.length - 2;
      }
      if (!Array.from(kuaishouy.keys()).includes(`${rewardvideo1}`)) {
         rewardvideo1 -= 2 << (Math.min(5, Math.abs(rewardvideo1)));
      }
          let agreementd = String.fromCharCode(98,105,110,97,115,99,105,105,95,105,95,53,55,0);
         kuaishouy.set(`${agreementd}`, kuaishouy.size);
          let tickedA = 1;
          let redirectA: Map<any, any> = new Map([[String.fromCharCode(115,104,97,100,101,114,95,107,95,54,50,0),879], [String.fromCharCode(112,105,120,115,99,111,112,101,95,98,95,53,54,0),336], [String.fromCharCode(107,98,112,115,95,108,95,50,48,0),1000]]);
         typesj = `${stationa.length}`;
         tickedA *= redirectA.size;
         redirectA = new Map([[`${redirectA.size}`, 2]]);
       let vietnamW = 4.0;
         rewardvideo1 /= Math.max(3, 2);
      proxyj *= parseFloat(`${1}`);
      break;
   }
      whatsapps = [parseInt(`${eventE}`) & 2];
      lineI += "1";
    yys_event_common.sportDetailsVipPopupTimesAnalytics();
    
  }, []);

  const onGoPrivateChatPress = () => {
       let moono = false;
    let attributedstringP: Array<any> = [111, 361];
    let resendg = String.fromCharCode(97,95,53,53,95,102,117,110,99,116,105,111,110,115,0);
    let libglogD: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,116,95,52,57,0),861], [String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,105,95,56,50,0),619], [String.fromCharCode(121,95,49,54,95,116,116,97,101,110,99,100,115,112,0),380]]);
    let thailandF = 4.0;
    let questE: Map<any, any> = new Map([[String.fromCharCode(104,95,55,95,112,114,105,111,114,0),true ], [String.fromCharCode(106,95,50,49,95,116,106,98,101,110,99,104,116,101,115,116,0),false ], [String.fromCharCode(97,95,52,50,95,115,99,97,108,105,110,103,0),false ]]);
    let footballJ = 5.0;
    let iconL: Map<any, any> = new Map([[String.fromCharCode(97,108,116,101,114,110,97,116,105,111,110,95,97,95,49,49,0),236], [String.fromCharCode(115,116,114,105,112,112,101,100,95,99,95,53,54,0),68], [String.fromCharCode(98,95,57,50,95,98,108,101,110,100,0),179]]);
    let whiter = String.fromCharCode(110,101,119,115,95,54,95,50,0);
    let a_positione = String.fromCharCode(104,95,55,52,95,99,108,105,112,0);
    let colorsu = String.fromCharCode(106,95,51,55,95,97,108,108,111,119,105,0);
    let statisticsK: Map<any, any> = new Map([[String.fromCharCode(114,95,54,49,0),186], [String.fromCharCode(114,95,48,95,97,115,107,105,110,103,0),340]]);
    let selectK = String.fromCharCode(97,95,55,53,95,99,97,112,97,99,105,116,121,0);
    let register_umh = false;
    let entry1 = String.fromCharCode(102,95,56,51,95,114,101,110,100,101,114,0);
    let middlek: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,109,101,110,116,95,49,95,56,48,0),660], [String.fromCharCode(115,105,103,118,101,114,95,107,95,50,50,0),679]]);
   if (!moono) {
      a_positione += `${(1 << (Math.min(3, Math.abs((moono ? 2 : 4)))))}`;
   }
      libglogD = new Map([[colorsu, a_positione.length]]);
      footballJ *= questE.size;
   let mbsplashb = libglogD.size <= 5469434;
   do {
       let modalB = false;
       let commonM = String.fromCharCode(98,95,50,49,95,112,97,103,101,110,117,109,98,101,114,0);
       let placeholderh = 1;
       let emptyL = String.fromCharCode(109,95,56,53,95,99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0);
         emptyL += `${(String.fromCharCode(85,0) == emptyL ? placeholderh : emptyL.length)}`;
         emptyL = `${placeholderh % (Math.max(commonM.length, 5))}`;
      for (let h = 0; h < 2; h++) {
         modalB = commonM.endsWith(`${placeholderh}`);
      }
          let dropdownE = 0.0;
         commonM += `${(String.fromCharCode(106,0) == emptyL ? placeholderh : emptyL.length)}`;
         dropdownE *= parseFloat(`${3 ^ parseInt(`${dropdownE}`)}`);
      while (!commonM.startsWith(`${placeholderh}`)) {
          let greyu = String.fromCharCode(103,95,54,56,95,114,101,117,112,108,111,97,100,0);
         commonM = `${placeholderh}`;
         greyu += `${greyu.length}`;
         break;
      }
      for (let o = 0; o < 2; o++) {
         commonM += `${1 & placeholderh}`;
      }
       let layoutb = 4.0;
         placeholderh %= Math.max(3 * commonM.length, 4);
          let uimanagere = 1.0;
         placeholderh |= 1;
         uimanagere /= Math.max(parseFloat(`${parseInt(`${uimanagere}`)}`), 4);
      while (1 == (1 << (Math.min(4, emptyL.length))) || 1.17 == (layoutb + 5.90)) {
         layoutb *= parseFloat(`${1 >> (Math.min(4, commonM.length))}`);
         break;
      }
         commonM += "3";
          let baidun: Array<any> = [454, 641, 882];
          let libavfilterv = 2.0;
          let teamd = String.fromCharCode(117,110,99,97,99,104,101,100,95,110,95,56,54,0);
         commonM += `${1 * placeholderh}`;
         baidun.push(parseInt(`${libavfilterv}`) >> (Math.min(teamd.length, 4)));
         libavfilterv -= 2;
         teamd += `${baidun.length}`;
      libglogD.set(colorsu, attributedstringP.length);
      if (mbsplashb) {
         break;
      }
   } while ((!a_positione.includes(`${libglogD.size}`)) && mbsplashb);
      footballJ /= Math.max((whiter == String.fromCharCode(122,0) ? iconL.size : whiter.length), 2);
      a_positione = `${attributedstringP.length << (Math.min(Math.abs(1), 1))}`;
   let libsgcore9 = attributedstringP.length <= 9167273;
   do {
       let profileR = 1;
       let memberI = 2;
       let libtan4 = 0;
       let photoA: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,121,98,111,97,114,100,95,109,95,53,49,0),614], [String.fromCharCode(107,101,121,105,100,95,98,95,50,53,0),321]]);
          let pnewarchdefaults2 = String.fromCharCode(113,95,55,53,95,101,112,122,115,0);
         photoA = new Map([[`${memberI}`, 3]]);
         pnewarchdefaults2 += `${pnewarchdefaults2.length * pnewarchdefaults2.length}`;
         profileR >>= Math.min(3, Math.abs(photoA.size * libtan4));
         profileR >>= Math.min(2, Math.abs(memberI));
          let floater0 = String.fromCharCode(115,101,99,116,105,111,110,115,95,121,95,50,53,0);
          let editx = String.fromCharCode(100,95,55,48,95,103,101,111,112,111,108,121,0);
         libtan4 *= 3 << (Math.min(3, Math.abs(libtan4)));
         floater0 += `${editx.length}`;
         editx += `${(editx == String.fromCharCode(82,0) ? editx.length : floater0.length)}`;
       let final__1b = true;
       let humidityH = false;
         humidityH = !humidityH;
         memberI -= 2;
      let scheduleF = humidityH ? !humidityH : humidityH;
      do {
         humidityH = photoA.size > 89;
         if (scheduleF) {
            break;
         }
      } while (scheduleF && (5 < (4 + photoA.size) || 4 < photoA.size));
         memberI -= profileR % (Math.max(3, 5));
      let canvasP = 9509802 <= photoA.size;
      do {
         photoA = new Map([[`${final__1b}`, ((humidityH ? 1 : 4) & 2)]]);
         if (canvasP) {
            break;
         }
      } while (canvasP && (5 == (4 ^ photoA.size)));
         final__1b = profileR >= 64;
       let b_titlel: Array<any> = [726, 55];
       let constantsK: Array<any> = [672, 906];
      attributedstringP = [profileR];
      if (libsgcore9) {
         break;
      }
   } while (((attributedstringP.length * colorsu.length) > 2 && (colorsu.length * attributedstringP.length) > 2) && libsgcore9);

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

        {bannerAd &&  !yys_RelatedTooltips.isVip(userState.user) && (
          <View style={{
            
            
            
          }}>
            <BannerContainer
              bannerAd={bannerAd}
              onMount={() => {
                yys_event_common.videoPlayerBannerViewAnalytics({
                  playerType: 'sport',
                  ads_slot_id: bannerAd.ads_slot_id,
                  ads_id: bannerAd.ads_id,
                  ads_title: bannerAd.ads_title,
                  ads_name: bannerAd.ads_name,
                });
              }}
              onPress={() => {
                yys_event_common.videoPlayerBannerClickAnalytics({
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
              source={require('@static/images/cancelSigmobLibzeus.gif')}
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
