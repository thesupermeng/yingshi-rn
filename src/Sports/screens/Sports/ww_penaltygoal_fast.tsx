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
import ScreenContainer from '../../../components/container/ww_collection';
import MainHeader from '../../../components/header/ww_schedule_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { wwIconnewsshareShoot, wwSendBuild, wwRender } from '@type/ww_dycreator_result';
import VodPlaylist from '../../../components/playlist/ww_package';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import FastImage from '../../../components/common/ww_result';
import wwShirtPhilippines from '../../middleware/ww_klevin';
import { Url } from '../../middleware/ww_phone_langkey';
import { formatMatchDate } from '../../utility/utils';
import { wwInfo, wwControls } from '../../types/ww_dice';
import MatchDetailsNav from '../../components/matchDetails/ww_style_view';
import MatchSchedule from '../../components/matchSchedule/ww_libavformat';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer, { wwBinddatasHandler } from '../../../components/videoPlayer/ww_libreanimated';
import { parseVideoURL } from '../../utility/ww_stats';
import Video from 'react-native-video';
import LiveVideo from '../../components/liveVideo/ww_guide';
import { VideoLiveType } from '../../global/ww_libswresample';
import {
  wwShirtBdxadsdk,
  wwStaticSearch,
} from '../../types/ww_sina_liblogger';
import { wwWhistleorange } from '../../types/ww_chinasame';
import BeforeLive from '../../components/beforeLive';
import StatisticPage from '../../components/matchDetails/statisticPage';
import { wwFlag } from '../../types/ww_config';
import LineUpPage from '../../components/matchDetails/lineUpPage';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import { screenModel } from '@type/ww_jingdong_libavfilter';
import { incrementSportWatchTime } from '@redux/actions/ww_hash';
import BecomeVipOverlay from "../../../components/modal/ww_animation";
import { INVITE_FRIEND, NON_VIP_STREAM_TIME_SECONDS } from '@utility/ww_icon';
import ww_runtime from '../../../../Umeng/ww_runtime';
import { wwEighteenShirt } from '@redux/ww_small';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wwShielddoneAlbum } from '@redux/reducers/ww_detail_mbsplash';
import VipRegisterBar from '../../../components/adultVideo/ww_danger_predictionbannershared';
import { BannerContainer } from '../../../components/container/ww_runtime_iconarrowright';
import { wwAbidetect } from '../../../../ww_leakchecker';
import { wwLivenodatabgimg } from '@api';
import LiveChatPage from '../../components/matchDetails/liveChatPage';
import PrivateChatPage from '../../components/matchDetails/privateChatPage';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';

let insetsTop = 0;
let insetsBottom = 0;

type wwCasting = {
  item: wwInfo;
  index: number;
};

interface wwPlayDetail {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

type wwStar = {
  type: number;
  url: any;
};

const MatchDetails = ({ navigation, route }: BottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );
  const userState = useSelector<wwVertical>('userReducer');
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<wwIconnewsshareShoot>);
  const [videoSource, setVideoSource] = useState<wwStar>({
    type: 0,
    url: undefined,
  });
  const [isLiveVideoFullScreen, setIsLiveVideoFullScreen] = useState(false);
  const [shouldShowComponents, setShouldShowComponents] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const showCountdown = !wwBodan.fakeIsVip(userState.user);

  const videoRef = useRef<wwBinddatasHandler | null>(null);
  const [bannerAd, setBannerAd] = useState<wwSendBuild>();
  const isVip = wwBodan.fakeIsVip(userState.user);
  const sportTabDetails: wwRender = wwAbidetect.instance.findTabByKey('体育');

  

  
  useEffect(() => {
    ww_runtime.sportDetailsViewsAnalytics();
  }, [])
  

  const { data: match } = useQuery({
    queryKey: ['liveRoomDetails', matchID],
    queryFn: () =>
      wwShirtPhilippines.call(`${Url.liveRoomDetail}?id=${matchID}`, {}, 'GET').then(
        (res): wwInfo => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const { data: matchDetails, isFetching: f1 } = useQuery({
    queryKey: ['matchDetails', matchID, streamID],
    queryFn: () =>
      wwShirtPhilippines.call(`${Url.matchDetails}?id=${matchID}`, {}, 'GET').then(
        (res): wwShirtBdxadsdk => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: liveRoomUpdate, isFetching: f2 } = useQuery({
    queryKey: ['liveRoomUpdate', matchID, streamID],
    queryFn: () =>
      wwShirtPhilippines.call(
        `${Url.matchUpdate}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): wwWhistleorange => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const { data: matchLineUp, isFetching: f3 } = useQuery({
    queryKey: ['matchLineUp', matchID, streamID],
    queryFn: () =>
      wwShirtPhilippines.call(
        `${Url.matchLineup}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): wwFlag => {
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
       let firebaseu = String.fromCharCode(113,95,56,52,95,119,104,105,116,101,115,112,97,99,101,115,0);
    let contextd = 2.0;
    let bdxadsdkH = String.fromCharCode(118,95,53,49,95,100,114,105,118,105,110,103,0);
    let point9 = String.fromCharCode(97,115,99,95,101,95,50,54,0);
    let thumbnail9 = false;
    let render3 = String.fromCharCode(104,95,55,50,95,109,97,106,0);
    let volumed = 3;
    let mbbannerY = String.fromCharCode(100,105,102,102,115,95,117,95,52,48,0);
    let iconrefreshk = String.fromCharCode(105,95,55,95,101,114,97,115,101,0);
    let android4 = 1.0;
    let webviewO = true;
    let buildY: Map<any, any> = new Map([[String.fromCharCode(109,97,115,116,101,114,105,110,103,95,100,95,57,55,0),String.fromCharCode(122,95,57,52,95,100,101,112,114,101,99,97,116,105,111,110,115,0)], [String.fromCharCode(100,95,52,95,100,105,114,97,99,0),String.fromCharCode(108,95,57,49,95,116,97,112,101,0)], [String.fromCharCode(101,120,101,99,117,116,101,95,118,95,50,54,0),String.fromCharCode(108,95,49,54,95,98,117,98,98,108,101,0)]]);
    let promotioni = String.fromCharCode(103,95,52,54,95,109,105,99,114,111,100,118,100,0);
    let libffmpegkitZ: Map<any, any> = new Map([[String.fromCharCode(97,116,111,98,111,111,108,95,53,95,56,51,0),String.fromCharCode(100,111,99,116,111,116,97,108,95,101,95,50,48,0)], [String.fromCharCode(111,95,49,95,114,101,109,97,112,112,105,110,103,0),String.fromCharCode(115,95,52,57,95,116,104,114,111,116,116,108,105,110,103,0)]]);
    let watchnowbgy = 3.0;
      thumbnail9 = firebaseu == mbbannerY;
   while (point9.includes(`${volumed}`)) {
      volumed &= 3;
      break;
   }
   if (render3.length > 4) {
      iconrefreshk += `${parseInt(`${android4}`)}`;
   }
      webviewO = mbbannerY.length == 79;
   let libcxxcomponentsB = webviewO ? !webviewO : webviewO;
   do {
      webviewO = (parseInt(`${android4}`) - iconrefreshk.length) >= 100;
      if (libcxxcomponentsB) {
         break;
      }
   } while (libcxxcomponentsB && (!webviewO));
   while (bdxadsdkH.length > 1) {
      bdxadsdkH = `${bdxadsdkH.length}`;
      break;
   }
       let sportsm = String.fromCharCode(99,111,102,102,105,110,95,57,95,55,51,0);
       let currentq = String.fromCharCode(108,95,56,53,95,99,97,108,108,108,0);
          let libreactF: Map<any, any> = new Map([[String.fromCharCode(115,95,57,53,95,100,101,112,108,111,121,109,101,110,116,0),String.fromCharCode(114,114,116,114,95,116,95,52,53,0)], [String.fromCharCode(120,95,51,54,95,118,99,104,113,0),String.fromCharCode(116,95,52,48,95,99,111,110,116,114,111,108,101,114,115,0)]]);
         currentq = "2";
         libreactF = new Map([[`${libreactF.size}`, libreactF.size % (Math.max(3, 3))]]);
         sportsm += `${sportsm.length & 3}`;
          let gradleI = false;
          let productx = false;
          let countryx = String.fromCharCode(99,104,101,99,107,105,110,103,95,112,95,53,52,0);
         sportsm = "3";
         gradleI = countryx.length <= 43 && !productx;
         productx = !productx && gradleI;
         countryx += `${((gradleI ? 5 : 1) - (productx ? 2 : 2))}`;
         sportsm += `${currentq.length}`;
      while (sportsm.startsWith(currentq)) {
         sportsm = `${currentq.length & sportsm.length}`;
         break;
      }
          let progressF = 5.0;
         sportsm = `${sportsm.length << (Math.min(Math.abs(3), 1))}`;
         progressF += parseInt(`${progressF}`);
      firebaseu += `${parseInt(`${android4}`)}`;
   while (volumed >= iconrefreshk.length) {
       let stepW = 0.0;
       let trashj: Array<any> = [360, 287, 845];
       let playlistE = String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,95,51,95,52,54,0);
       let questN = 5;
       let goal5 = 0.0;
      let tailz = 7291374.0 >= stepW;
      do {
         stepW += parseInt(`${goal5}`) - 1;
         if (tailz) {
            break;
         }
      } while ((4 <= (4 ^ questN) || 1.65 <= (stepW / 3.88)) && tailz);
      if (playlistE.length >= 2) {
         playlistE = `${parseInt(`${stepW}`) << (Math.min(trashj.length, 5))}`;
      }
      if (trashj.length <= 2) {
          let stationT = 5;
          let closer = String.fromCharCode(106,95,55,49,95,109,105,115,109,97,116,99,104,0);
         trashj.push(trashj.length & stationT);
         stationT -= 1;
         closer = `${3 + closer.length}`;
      }
      while (2 > (3 << (Math.min(3, Math.abs(questN)))) && (3 << (Math.min(5, trashj.length))) > 2) {
         questN *= questN;
         break;
      }
      while (questN == 1) {
         questN |= questN ^ parseInt(`${stepW}`);
         break;
      }
      let o_positionJ = trashj.length <= 5661177;
      do {
         trashj = [questN];
         if (o_positionJ) {
            break;
         }
      } while (o_positionJ && ((trashj.length * playlistE.length) < 5));
         stepW *= questN;
      if (questN <= playlistE.length) {
         questN /= Math.max(1, 1);
      }
         stepW /= Math.max(parseInt(`${stepW}`) >> (Math.min(Math.abs(1), 2)), 2);
         trashj.push(questN);
      if ((2 >> (Math.min(4, playlistE.length))) < 1 || (parseInt(`${stepW}`) - 2) < 2) {
         stepW -= 2;
      }
       let upgradeP = String.fromCharCode(109,95,57,54,95,108,115,102,108,115,112,100,0);
       let thailandj = String.fromCharCode(112,101,110,100,105,110,103,115,95,48,95,48,0);
      if (2 > (upgradeP.length + trashj.length) || 3 > (2 + trashj.length)) {
          let cornerX = String.fromCharCode(112,97,114,109,115,95,106,95,51,55,0);
          let toponR = String.fromCharCode(109,95,52,53,95,111,98,115,101,114,118,101,100,0);
          let mbnativeadvancedk = 3.0;
         trashj.push(trashj.length + 3);
         cornerX = "2";
         toponR = `${3 ^ cornerX.length}`;
         mbnativeadvancedk *= parseFloat(`${cornerX.length}`);
      }
      let pangleM = String.fromCharCode(118,51,110,114,112,113,106,106,0) == upgradeP;
      do {
          let plashX = String.fromCharCode(108,95,52,48,95,110,117,109,101,114,105,102,121,0);
         upgradeP = `${thailandj.length}`;
         plashX += `${plashX.length}`;
         if (pangleM) {
            break;
         }
      } while (((1 << (Math.min(3, upgradeP.length))) > 3 || (trashj.length << (Math.min(Math.abs(1), 1))) > 1) && pangleM);
      if (stepW <= 4.31) {
         upgradeP += `${upgradeP.length}`;
      }
      iconrefreshk += `${((thumbnail9 ? 5 : 4))}`;
      break;
   }
   for (let r = 0; r < 1; r++) {
      android4 /= Math.max(5, (parseFloat(`${String.fromCharCode(85,0) == bdxadsdkH ? bdxadsdkH.length : (thumbnail9 ? 4 : 4)}`)));
   }
   let selectionQ = 9119319 >= volumed;
   do {
      volumed *= 1;
      if (selectionQ) {
         break;
      }
   } while (selectionQ && ((volumed + 4) <= 5 || (4 + buildY.size) <= 5));
   for (let e = 0; e < 3; e++) {
      thumbnail9 = !point9.includes(`${webviewO}`);
   }
       let footballfieldN = 5;
         footballfieldN *= footballfieldN;
      if (footballfieldN < footballfieldN) {
         footballfieldN *= footballfieldN;
      }
       let penaltyy = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,95,97,95,51,51,0);
       let untickf = String.fromCharCode(97,95,52,52,95,100,111,103,115,0);
      mbbannerY = `${footballfieldN}`;
       let libturbomodulejsijniG = true;
       let rightj = true;
       let over0: Array<any> = [664, 640, 488];
       let twitterL: Map<any, any> = new Map([[String.fromCharCode(117,95,57,53,95,112,114,101,100,101,99,111,100,101,0),String.fromCharCode(118,95,56,56,95,109,105,103,114,97,116,101,100,0)], [String.fromCharCode(99,95,55,54,95,116,111,117,99,104,101,100,0),String.fromCharCode(116,95,49,53,95,112,111,115,116,0)]]);
      while (Array.from(twitterL.values()).includes(over0.length)) {
         twitterL = new Map([[`${twitterL.size}`, 3 + twitterL.size]]);
         break;
      }
      for (let j = 0; j < 1; j++) {
          let yellowvideoliveZ: Array<any> = [String.fromCharCode(106,95,51,52,95,119,97,110,116,115,0), String.fromCharCode(98,95,56,56,95,112,110,103,100,115,112,0)];
          let internetb = String.fromCharCode(115,101,115,115,111,110,95,99,95,54,49,0);
          let mintegralA: Map<any, any> = new Map([[String.fromCharCode(117,95,49,51,95,115,108,105,99,101,99,111,110,116,101,120,116,0),String.fromCharCode(122,95,51,57,95,100,117,112,115,111,114,116,0)], [String.fromCharCode(119,95,49,95,114,100,102,116,0),String.fromCharCode(117,95,50,48,95,112,97,114,116,105,116,105,111,110,105,110,103,0)]]);
         over0.push(((libturbomodulejsijniG ? 1 : 4)));
         yellowvideoliveZ.push(3);
         internetb = `${mintegralA.size + 2}`;
         mintegralA.set(`${yellowvideoliveZ.length}`, 1);
      }
         over0 = [3];
         rightj = 12 > twitterL.size;
         over0.push((2 % (Math.max(7, (libturbomodulejsijniG ? 5 : 1)))));
          let indicator_ = String.fromCharCode(97,114,97,98,105,99,95,112,95,52,55,0);
          let signinupg = String.fromCharCode(116,121,112,101,95,104,95,56,57,0);
         rightj = 21 >= signinupg.length && over0.length >= 21;
         indicator_ = "1";
         signinupg = `${3 + indicator_.length}`;
         over0 = [((libturbomodulejsijniG ? 1 : 3) & 3)];
         over0.push(((libturbomodulejsijniG ? 5 : 4)));
      mbbannerY += `${buildY.size % 1}`;
      webviewO = (mbbannerY.length + parseInt(`${contextd}`)) > 11;
       let rewardvideow = 1;
      while (4 == (rewardvideow << (Math.min(2, Math.abs(rewardvideow)))) || (rewardvideow << (Math.min(Math.abs(4), 2))) == 2) {
         rewardvideow *= rewardvideow >> (Math.min(5, Math.abs(rewardvideow)));
         break;
      }
          let photoJ = false;
         rewardvideow >>= Math.min(parseInt(`${Math.abs(((photoJ ? 4 : 4) / (Math.max(rewardvideow, 6))))}`), 2);
          let iconwechatW = 3;
          let appleu: Map<any, any> = new Map([[String.fromCharCode(117,95,53,52,95,99,111,110,99,114,101,116,101,0),String.fromCharCode(111,95,52,57,95,116,114,97,105,110,0)], [String.fromCharCode(100,95,52,57,95,102,99,112,117,98,108,105,115,104,0),String.fromCharCode(116,95,49,51,95,112,114,102,0)]]);
         rewardvideow <<= Math.min(1, Math.abs(appleu.size));
         iconwechatW %= Math.max(iconwechatW * 1, 1);
         appleu = new Map([[`${iconwechatW}`, iconwechatW * iconwechatW]]);
      buildY = new Map([[mbbannerY, (String.fromCharCode(120,0) == mbbannerY ? (webviewO ? 5 : 1) : mbbannerY.length)]]);
       let scheduleX = 4.0;
       let auto_8O = 5.0;
      while ((scheduleX / (Math.max(3, 10))) > 4.56) {
          let telemetry3: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,105,122,101,95,115,95,57,51,0),560], [String.fromCharCode(122,95,51,49,95,117,110,115,112,105,108,108,0),263], [String.fromCharCode(111,95,57,57,95,102,97,99,116,111,114,115,0),149]]);
         auto_8O -= telemetry3.size;
         break;
      }
         scheduleX /= Math.max(parseFloat(`${1}`), 4);
         scheduleX += parseFloat(`${parseInt(`${auto_8O}`)}`);
          let sharet: Map<any, any> = new Map([[String.fromCharCode(100,95,51,49,95,101,114,97,0),874], [String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,109,95,53,50,0),328]]);
          let stringg = String.fromCharCode(112,107,99,114,121,112,116,95,115,95,54,52,0);
         auto_8O -= parseInt(`${scheduleX}`) >> (Math.min(4, Math.abs(1)));
         sharet.set(`${stringg}`, (String.fromCharCode(82,0) == stringg ? sharet.size : stringg.length));
      while (4.75 <= auto_8O) {
          let livez = String.fromCharCode(117,105,111,116,111,109,98,117,102,95,107,95,56,56,0);
          let iconnointernet1: Array<any> = [634, 413, 25];
          let sharemodalM = String.fromCharCode(114,95,51,51,95,101,101,112,0);
          let goalw: Array<any> = [String.fromCharCode(117,95,53,53,95,100,114,97,103,0), String.fromCharCode(107,95,57,53,95,109,97,99,104,105,110,101,0)];
          let moreg = 2;
         auto_8O /= Math.max(3 + moreg, 1);
         livez = `${iconnointernet1.length | 2}`;
         iconnointernet1 = [goalw.length % (Math.max(3, 3))];
         sharemodalM += "2";
         goalw.push(goalw.length % (Math.max(livez.length, 9)));
         moreg += sharemodalM.length;
         break;
      }
      while ((4.69 - auto_8O) <= 4.12 && (auto_8O * 4.69) <= 3.56) {
          let bridgeg = 5;
          let libmapbufferjniT = String.fromCharCode(114,108,109,95,106,95,57,54,0);
          let librrcM = String.fromCharCode(116,95,52,52,95,102,111,114,109,97,116,116,105,110,103,0);
         auto_8O += bridgeg & parseInt(`${auto_8O}`);
         bridgeg <<= Math.min(librrcM.length, 3);
         libmapbufferjniT = `${libmapbufferjniT.length}`;
         librrcM += `${(librrcM == String.fromCharCode(82,0) ? librrcM.length : libmapbufferjniT.length)}`;
         break;
      }
      mbbannerY = `${point9.length >> (Math.min(2, Math.abs(buildY.size)))}`;
   while (point9.length <= 3) {
      point9 = "3";
      break;
   }
      webviewO = bdxadsdkH == point9;
   let awayteamfieldu = render3 == String.fromCharCode(99,102,109,120,102,110,0);
   do {
      render3 = `${point9.length}`;
      if (awayteamfieldu) {
         break;
      }
   } while (awayteamfieldu && (2 > render3.length));
       let vertical1: Array<any> = [String.fromCharCode(112,95,55,54,95,112,105,110,115,0), String.fromCharCode(103,114,111,117,112,101,100,95,105,95,52,56,0)];
      let login7 = vertical1.length >= 7190715;
      do {
         vertical1.push(vertical1.length);
         if (login7) {
            break;
         }
      } while (login7 && ((vertical1.length * 5) >= 1));
      let with_3pi = vertical1.length <= 9388976;
      do {
         vertical1.push(3 * vertical1.length);
         if (with_3pi) {
            break;
         }
      } while (with_3pi && (5 < (vertical1.length ^ vertical1.length) && 3 < (5 ^ vertical1.length)));
          let latn6: Map<any, any> = new Map([[String.fromCharCode(103,95,55,50,95,114,111,119,107,101,121,0),790], [String.fromCharCode(115,116,99,111,95,118,95,52,51,0),412]]);
          let iconwatchnowJ = String.fromCharCode(119,95,52,53,95,119,104,116,120,0);
         vertical1 = [iconwatchnowJ.length >> (Math.min(4, Math.abs(latn6.size)))];
      firebaseu = `${(3 * (thumbnail9 ? 2 : 3))}`;
   while (iconrefreshk.includes(render3)) {
      iconrefreshk = `${buildY.size}`;
      break;
   }
       let room9 = String.fromCharCode(108,95,53,54,95,115,117,98,99,101,108,0);
       let mbjscommonQ: Map<any, any> = new Map([[String.fromCharCode(105,95,55,57,95,110,101,116,119,111,114,107,105,110,103,0),true ], [String.fromCharCode(108,95,57,48,95,97,118,114,101,115,97,109,112,108,101,0),true ], [String.fromCharCode(101,95,57,49,95,99,111,110,116,101,120,116,0),false ]]);
         room9 = `${room9.length >> (Math.min(Math.abs(2), 4))}`;
       let giflivestreamingS = String.fromCharCode(115,99,116,112,117,116,105,108,95,120,95,54,50,0);
       let send4 = 1;
          let editz = String.fromCharCode(106,95,49,53,95,99,97,112,105,116,97,108,105,122,105,110,103,0);
         mbjscommonQ.set(giflivestreamingS, 2);
         editz += `${editz.length}`;
         giflivestreamingS = `${send4}`;
      while (!giflivestreamingS.includes(`${send4}`)) {
         send4 /= Math.max(2, 2 >> (Math.min(4, Math.abs(send4))));
         break;
      }
      buildY = new Map([[`${thumbnail9}`, 3]]);
   let config_ = volumed >= 7637306;
   do {
      volumed -= iconrefreshk.length;
      if (config_) {
         break;
      }
   } while (config_ && (3 > volumed && (3 * volumed) > 1));
   while ((bdxadsdkH.length | 3) > 1 && 3 > (bdxadsdkH.length * parseInt(`${android4}`))) {
      bdxadsdkH += `${promotioni.length & 2}`;
      break;
   }

    setIsLiveVideoEnd(true);
  }, []);

  const onLiveLoad = useCallback(() => {
       let arrowm = String.fromCharCode(103,95,50,49,95,108,115,112,114,0);
    let iconsettingn = 3.0;
    let trashy = 0.0;
    let actionsQ = 3.0;
    let predictionbannershared4 = 0.0;
    let full_ = 4;
    let orientationo: Array<any> = [14, 501];
      iconsettingn += (parseFloat(`${arrowm == String.fromCharCode(107,0) ? parseInt(`${actionsQ}`) : arrowm.length}`));
   let whiteanimationliveZ = 5234635.0 <= actionsQ;
   do {
       let delegate_aB: Array<any> = [454, 764, 519];
       let videovarp: Array<any> = [String.fromCharCode(121,101,108,108,111,119,95,121,95,57,52,0), String.fromCharCode(119,95,53,49,95,100,101,116,101,114,109,105,110,101,0)];
       let iconuser4: Array<any> = [156, 392];
       let einit_b1 = 0.0;
         delegate_aB = [videovarp.length];
      for (let z = 0; z < 1; z++) {
         iconuser4.push(videovarp.length * 3);
      }
      if (2 < (4 ^ delegate_aB.length) || 4 < (videovarp.length ^ delegate_aB.length)) {
         videovarp.push(1 * iconuser4.length);
      }
          let logino = String.fromCharCode(101,95,52,56,95,105,100,101,110,116,0);
         videovarp.push(3 * parseInt(`${einit_b1}`));
         logino = "3";
         delegate_aB = [1];
      let entry6 = 9260209 >= iconuser4.length;
      do {
         iconuser4 = [2 % (Math.max(10, parseInt(`${einit_b1}`)))];
         if (entry6) {
            break;
         }
      } while (entry6 && ((delegate_aB.length >> (Math.min(5, iconuser4.length))) < 4 || (iconuser4.length >> (Math.min(Math.abs(4), 5))) < 3));
         iconuser4 = [2 >> (Math.min(Math.abs(parseInt(`${einit_b1}`)), 5))];
       let hooks0 = 5.0;
      actionsQ += 3;
      if (whiteanimationliveZ) {
         break;
      }
   } while (whiteanimationliveZ && ((trashy / 2) <= 5.42));
      iconsettingn *= parseFloat(`${parseInt(`${predictionbannershared4}`)}`);
       let privacyq = false;
       let controlsw = 4;
       let placeholders = 5.0;
       let iconmoreM = 4.0;
         iconmoreM *= parseFloat(`${parseInt(`${placeholders}`) << (Math.min(4, Math.abs(controlsw)))}`);
      for (let q = 0; q < 3; q++) {
         controlsw += parseInt(`${iconmoreM}`) / 3;
      }
      for (let d = 0; d < 2; d++) {
          let viewsg: Array<any> = [392, 908];
          let libzeusg: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,109,95,50,55,0),true ], [String.fromCharCode(114,95,55,57,95,117,112,100,97,116,101,115,0),true ], [String.fromCharCode(121,95,55,53,0),false ]]);
         iconmoreM /= Math.max(1, parseFloat(`${2 ^ viewsg.length}`));
         viewsg.push(libzeusg.size);
         libzeusg = new Map([[`${libzeusg.size}`, 3 | libzeusg.size]]);
      }
          let smallS = String.fromCharCode(119,95,53,50,95,112,114,101,115,101,116,115,0);
         controlsw -= ((privacyq ? 2 : 3) ^ controlsw);
         smallS += `${smallS.length}`;
         privacyq = !privacyq;
      predictionbannershared4 /= Math.max(parseFloat(`${orientationo.length}`), 1);
      orientationo.push(arrowm.length);
       let calendarU = String.fromCharCode(121,95,57,57,95,101,109,105,116,0);
       let redirectA = String.fromCharCode(117,118,109,118,95,112,95,52,57,0);
       let bdxadsdkO = String.fromCharCode(111,95,55,51,95,112,117,116,98,105,116,98,117,102,102,101,114,0);
      let libcrashsdk6 = 6130958 >= redirectA.length;
      do {
          let defaultplayerimg_: Array<any> = [504, 934, 360];
          let privacyr = String.fromCharCode(102,111,117,114,120,109,95,102,95,53,48,0);
         redirectA += `${bdxadsdkO.length | redirectA.length}`;
         defaultplayerimg_ = [defaultplayerimg_.length ^ 3];
         privacyr = `${defaultplayerimg_.length}`;
         if (libcrashsdk6) {
            break;
         }
      } while ((bdxadsdkO != String.fromCharCode(82,0)) && libcrashsdk6);
      if (bdxadsdkO.endsWith(redirectA)) {
         redirectA = `${bdxadsdkO.length}`;
      }
         calendarU = `${calendarU.length}`;
          let classesV = String.fromCharCode(100,95,55,52,95,99,97,118,115,118,105,100,101,111,0);
         bdxadsdkO = `${2 + classesV.length}`;
         calendarU = `${redirectA.length - bdxadsdkO.length}`;
      while (calendarU == redirectA) {
         redirectA += "3";
         break;
      }
      let videovar6 = 7789198 <= redirectA.length;
      do {
         redirectA += `${(String.fromCharCode(108,0) == bdxadsdkO ? redirectA.length : bdxadsdkO.length)}`;
         if (videovar6) {
            break;
         }
      } while (videovar6 && (4 >= redirectA.length));
         redirectA = `${calendarU.length}`;
      for (let i = 0; i < 3; i++) {
          let libmapbufferjniH = true;
          let mbbannerM: Array<any> = [String.fromCharCode(97,114,101,95,57,95,49,54,0), String.fromCharCode(100,95,49,57,95,99,117,114,115,111,114,0)];
         bdxadsdkO += `${calendarU.length}`;
         libmapbufferjniH = ((mbbannerM.length - (libmapbufferjniH ? 87 : mbbannerM.length)) < 87);
      }
      arrowm += `${parseInt(`${predictionbannershared4}`) - 1}`;
       let constantsr = 5;
      let rightR = 6087595 <= constantsr;
      do {
         constantsr <<= Math.min(4, Math.abs(constantsr | constantsr));
         if (rightR) {
            break;
         }
      } while (rightR && (4 <= (constantsr * constantsr)));
          let interstitialo = 0.0;
         constantsr %= Math.max(4, parseInt(`${interstitialo}`));
       let mutedH = String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,109,95,57,0);
      full_ >>= Math.min(Math.abs(parseInt(`${predictionbannershared4}`)), 2);
      iconsettingn += parseFloat(`${1 / (Math.max(full_, 9))}`);
      full_ *= arrowm.length;
   let libturbomodulejsijni_ = 5438536.0 >= iconsettingn;
   do {
      iconsettingn += parseFloat(`${orientationo.length & parseInt(`${iconsettingn}`)}`);
      if (libturbomodulejsijni_) {
         break;
      }
   } while (((3.14 + iconsettingn) >= 1.91) && libturbomodulejsijni_);
      actionsQ *= orientationo.length | 2;
      trashy -= 3;
   for (let a = 0; a < 2; a++) {
       let membershipn = String.fromCharCode(114,101,116,97,105,110,101,100,95,102,95,56,56,0);
       let greyarrowupN = String.fromCharCode(99,95,51,50,95,101,115,112,111,110,100,101,114,0);
       let selectionq = 1;
       let libimagepipelineE = String.fromCharCode(115,117,98,109,105,116,95,54,95,56,0);
       let basketballhometeamc = String.fromCharCode(97,95,50,95,118,97,114,105,97,110,99,101,120,0);
      let typesV = 9027624 <= greyarrowupN.length;
      do {
          let grayF = String.fromCharCode(109,95,52,56,95,115,112,97,99,101,0);
          let hooksV = 1;
          let default_okU = 0.0;
         greyarrowupN += `${membershipn.length >> (Math.min(5, libimagepipelineE.length))}`;
         grayF = `${grayF.length * 1}`;
         hooksV += 2;
         default_okU += parseFloat(`${2}`);
         if (typesV) {
            break;
         }
      } while (typesV && (4 == (greyarrowupN.length | selectionq) && 1 == (4 | selectionq)));
      for (let u = 0; u < 2; u++) {
          let liveendmodallogo7 = true;
          let controlu = String.fromCharCode(109,95,49,49,95,115,117,98,110,111,100,101,0);
          let baseW = 1.0;
         selectionq += greyarrowupN.length;
         liveendmodallogo7 = 34.95 <= baseW || controlu == String.fromCharCode(68,0);
         controlu = `${controlu.length << (Math.min(4, Math.abs(parseInt(`${baseW}`))))}`;
      }
         membershipn += `${selectionq}`;
      for (let w = 0; w < 3; w++) {
         greyarrowupN += `${selectionq}`;
      }
      if (5 > libimagepipelineE.length && basketballhometeamc != String.fromCharCode(116,0)) {
          let completec = 1;
          let giftbuttonj = String.fromCharCode(98,111,117,110,99,105,110,103,95,111,95,51,52,0);
          let debugx = false;
          let libjsinspectorp = String.fromCharCode(115,99,111,114,101,95,53,95,50,50,0);
         basketballhometeamc = `${(basketballhometeamc.length >> (Math.min(2, Math.abs((debugx ? 5 : 3)))))}`;
         completec *= 1;
         giftbuttonj = `${3 - completec}`;
         debugx = String.fromCharCode(89,0) == giftbuttonj;
         libjsinspectorp = "3";
      }
      for (let l = 0; l < 2; l++) {
         basketballhometeamc = `${3 - selectionq}`;
      }
      for (let h = 0; h < 3; h++) {
         libimagepipelineE += `${basketballhometeamc.length}`;
      }
      for (let a = 0; a < 3; a++) {
          let movies2 = 0;
         membershipn += `${selectionq << (Math.min(Math.abs(1), 3))}`;
         movies2 &= 3;
      }
          let bgvipxvodg = 3.0;
          let qnewinterstitialP: Array<any> = [692, 950];
         libimagepipelineE += `${greyarrowupN.length & basketballhometeamc.length}`;
         bgvipxvodg += parseFloat(`${parseInt(`${bgvipxvodg}`) - 2}`);
         qnewinterstitialP.push(3 - qnewinterstitialP.length);
      let default__hu = membershipn == String.fromCharCode(117,118,103,104,115,114,49,114,0);
      do {
          let vipsportO = String.fromCharCode(99,111,112,121,95,56,95,51,50,0);
          let codegenv = 2.0;
         membershipn = `${(vipsportO == String.fromCharCode(81,0) ? selectionq : vipsportO.length)}`;
         codegenv += parseFloat(`${parseInt(`${codegenv}`) & parseInt(`${codegenv}`)}`);
         if (default__hu) {
            break;
         }
      } while (default__hu && (membershipn != String.fromCharCode(116,0) && 3 == basketballhometeamc.length));
      while (greyarrowupN == String.fromCharCode(101,0)) {
          let vietname: Map<any, any> = new Map([[String.fromCharCode(99,95,50,50,95,118,116,97,98,0),304], [String.fromCharCode(102,95,51,51,95,102,117,108,108,115,99,114,101,101,110,0),926], [String.fromCharCode(104,97,115,104,97,98,108,101,95,100,95,52,53,0),701]]);
          let defaultpredictionprofileK: Array<any> = [403, 271, 914];
          let langT = 4.0;
          let penaltyA = String.fromCharCode(116,95,50,56,95,112,114,105,110,116,101,100,0);
          let mapbuffer4: Map<any, any> = new Map([[String.fromCharCode(118,95,56,49,95,114,97,116,101,0),946], [String.fromCharCode(105,109,112,111,114,116,115,95,55,95,50,0),136], [String.fromCharCode(102,111,108,100,95,108,95,50,53,0),35]]);
         membershipn += `${penaltyA.length}`;
         vietname.set(`${defaultpredictionprofileK.length}`, 1 % (Math.max(1, defaultpredictionprofileK.length)));
         langT /= Math.max(mapbuffer4.size, 3);
         penaltyA = `${defaultpredictionprofileK.length}`;
         mapbuffer4.set(`${vietname.size}`, vietname.size - mapbuffer4.size);
         break;
      }
      let logoE = greyarrowupN.length >= 7104508;
      do {
         greyarrowupN += `${membershipn.length}`;
         if (logoE) {
            break;
         }
      } while (logoE && (greyarrowupN.endsWith(`${selectionq}`)));
       let searchM = true;
         basketballhometeamc = `${((searchM ? 4 : 5) | 3)}`;
      if (basketballhometeamc.length >= 5 || searchM) {
         basketballhometeamc += `${membershipn.length}`;
      }
      iconsettingn -= parseFloat(`${2}`);
   }
   let malaysiaQ = 7682659.0 <= iconsettingn;
   do {
      iconsettingn /= Math.max(parseFloat(`${parseInt(`${trashy}`) - full_}`), 5);
      if (malaysiaQ) {
         break;
      }
   } while (malaysiaQ && (3 <= (parseInt(`${iconsettingn}`) - arrowm.length) && (iconsettingn - 5.28) <= 1.27));
      iconsettingn *= parseFloat(`${arrowm.length % 2}`);
   for (let d = 0; d < 2; d++) {
      full_ <<= Math.min(Math.abs(parseInt(`${iconsettingn}`)), 4);
   }
   if (iconsettingn < trashy) {
      iconsettingn += parseFloat(`${parseInt(`${predictionbannershared4}`)}`);
   }
   while ((5 >> (Math.min(5, arrowm.length))) <= 5 || 2.71 <= (iconsettingn - 2.48)) {
       let animationY = 2.0;
       let downg: Map<any, any> = new Map([[String.fromCharCode(101,95,49,55,95,115,117,98,116,114,97,99,116,111,114,0),656], [String.fromCharCode(103,95,53,50,95,105,110,115,101,116,115,0),881], [String.fromCharCode(97,95,51,48,95,116,104,111,117,115,97,110,100,115,0),28]]);
       let adultI = String.fromCharCode(122,95,53,54,95,119,97,108,108,97,112,101,114,115,0);
       let m_positionk = 3.0;
       let friendsV = String.fromCharCode(99,111,112,121,105,110,103,95,52,95,57,51,0);
      for (let m = 0; m < 2; m++) {
         adultI = `${parseInt(`${m_positionk}`)}`;
      }
          let ewardedn = String.fromCharCode(118,111,114,98,105,115,100,115,112,95,99,95,54,0);
          let yellowvideoliveE = 3.0;
          let cornerp = 2;
         m_positionk += parseInt(`${animationY}`) / (Math.max(3, parseInt(`${yellowvideoliveE}`)));
         ewardedn += `${(ewardedn == String.fromCharCode(56,0) ? ewardedn.length : cornerp)}`;
         yellowvideoliveE -= parseFloat(`${cornerp + ewardedn.length}`);
          let libjsinspectorL = 5.0;
         friendsV += `${1 / (Math.max(6, adultI.length))}`;
         libjsinspectorL += 2 >> (Math.min(Math.abs(parseInt(`${libjsinspectorL}`)), 1));
         adultI += `${adultI.length}`;
       let iconnewsshareH = String.fromCharCode(112,114,101,97,109,98,108,101,95,118,95,55,51,0);
       let unimplementedviewE = String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,101,95,54,52,0);
          let brightnessd = String.fromCharCode(97,100,115,97,114,109,97,115,109,95,52,95,55,54,0);
          let arrowX: Array<any> = [539, 240];
         downg.set(`${animationY}`, parseInt(`${animationY}`));
         brightnessd = `${2 * brightnessd.length}`;
         arrowX = [3 % (Math.max(5, arrowX.length))];
         iconnewsshareH = "2";
      if (iconnewsshareH != String.fromCharCode(120,0) && unimplementedviewE.length >= 4) {
          let frame_8w1 = 3.0;
          let homeS = String.fromCharCode(97,112,112,101,110,100,99,104,97,114,95,54,95,49,50,0);
          let savew = 5.0;
         iconnewsshareH += "2";
         frame_8w1 *= parseFloat(`${parseInt(`${frame_8w1}`) & parseInt(`${savew}`)}`);
         homeS += "3";
         savew /= Math.max(parseFloat(`${3}`), 4);
      }
          let annerF = String.fromCharCode(115,105,110,101,95,52,95,56,49,0);
         iconnewsshareH += `${1 % (Math.max(8, unimplementedviewE.length))}`;
         annerF += `${annerF.length}`;
      while (!iconnewsshareH.endsWith(`${downg.size}`)) {
         downg = new Map([[friendsV, parseInt(`${m_positionk}`) >> (Math.min(Math.abs(3), 4))]]);
         break;
      }
      let nterstitial2 = String.fromCharCode(50,50,106,121,101,106,114,54,0) == unimplementedviewE;
      do {
         unimplementedviewE = `${parseInt(`${animationY}`)}`;
         if (nterstitial2) {
            break;
         }
      } while (nterstitial2 && (unimplementedviewE.length <= 3));
         m_positionk -= parseInt(`${m_positionk}`) | friendsV.length;
      if (unimplementedviewE.length > iconnewsshareH.length) {
         iconnewsshareH += `${iconnewsshareH.length}`;
      }
         iconnewsshareH = `${(String.fromCharCode(101,0) == adultI ? adultI.length : parseInt(`${m_positionk}`))}`;
      while (!unimplementedviewE.includes(`${m_positionk}`)) {
         unimplementedviewE = `${3 * iconnewsshareH.length}`;
         break;
      }
      iconsettingn += parseFloat(`${full_ >> (Math.min(1, Math.abs(2)))}`);
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

      
      ww_runtime.sportDetailsVipPopupTimesAnalytics();
      
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
       let controls4 = String.fromCharCode(109,95,51,52,95,109,111,118,101,116,111,0);
    let arrowl = false;
    let anytimeh = String.fromCharCode(104,95,57,52,95,115,116,101,112,112,101,114,0);
    let statisticsm = false;
    let interstitialT = String.fromCharCode(101,95,49,49,0);
    let xvodS = 0;
    let editZ = String.fromCharCode(100,105,115,97,112,112,101,97,114,101,100,95,108,95,53,56,0);
    let rootk = 1.0;
    let roots = 1.0;
    let tailM: Array<any> = [String.fromCharCode(99,108,105,112,95,119,95,54,51,0), String.fromCharCode(115,101,99,111,110,100,95,109,95,52,48,0), String.fromCharCode(107,95,55,52,95,114,114,116,114,0)];
    let libreact3 = String.fromCharCode(117,95,57,52,95,115,116,105,114,110,103,0);
    let lista = 3;
    let flyerS = String.fromCharCode(100,114,97,103,95,117,95,51,53,0);
   while (tailM.length > 5) {
      tailM = [((arrowl ? 3 : 2) ^ parseInt(`${rootk}`))];
      break;
   }
   let y_unlock7 = String.fromCharCode(110,107,54,0) == controls4;
   do {
      controls4 = `${((arrowl ? 4 : 4) % (Math.max(xvodS, 4)))}`;
      if (y_unlock7) {
         break;
      }
   } while ((2 > controls4.length) && y_unlock7);
   for (let l = 0; l < 3; l++) {
      interstitialT += `${editZ.length}`;
   }
   let rncoreg = 7898936 <= tailM.length;
   do {
       let largeh: Map<any, any> = new Map([[String.fromCharCode(120,95,54,50,95,99,101,108,101,98,114,97,116,101,0),504], [String.fromCharCode(103,102,105,110,116,95,120,95,57,0),192], [String.fromCharCode(110,95,57,95,99,111,109,112,111,110,101,110,116,115,0),840]]);
       let notificationfillemptyV = String.fromCharCode(118,95,50,52,95,109,115,105,122,101,0);
         largeh = new Map([[`${largeh.size}`, largeh.size / (Math.max(2, notificationfillemptyV.length))]]);
         largeh = new Map([[`${largeh.size}`, largeh.size]]);
      if (notificationfillemptyV.includes(`${largeh.size}`)) {
         notificationfillemptyV = `${notificationfillemptyV.length | 1}`;
      }
       let descV = true;
       let switch_m8Y = false;
      while (largeh.size <= 5) {
          let sharedk = String.fromCharCode(108,95,50,57,95,99,97,109,112,97,105,103,110,0);
          let libreactnativeblobp: Array<any> = [402, 772, 713];
          let notification1 = String.fromCharCode(114,101,105,110,100,101,120,95,99,95,51,55,0);
         descV = notification1 == String.fromCharCode(48,0);
         sharedk = `${sharedk.length ^ 3}`;
         libreactnativeblobp.push(libreactnativeblobp.length << (Math.min(sharedk.length, 1)));
         notification1 += "1";
         break;
      }
          let logout1 = false;
          let mintegral1 = false;
         notificationfillemptyV += `${notificationfillemptyV.length - 3}`;
         logout1 = !mintegral1;
      tailM.push(tailM.length | 1);
      if (rncoreg) {
         break;
      }
   } while ((!editZ.endsWith(`${tailM.length}`)) && rncoreg);
   for (let d = 0; d < 1; d++) {
      statisticsm = anytimeh.length == 7 || roots == 41.42;
   }

    const bannerRes = await wwLivenodatabgimg.getBannerAd(111);

       let viewerS: Array<any> = [604, 525, 211];
       let targetr = String.fromCharCode(112,95,52,52,95,97,114,103,98,105,0);
          let unewsw = String.fromCharCode(117,95,52,55,95,100,101,115,112,105,108,108,0);
         viewerS = [targetr.length];
         unewsw = "2";
       let skipa = 5.0;
       let whistleS = 1.0;
      if ((viewerS.length ^ 2) >= 5 && 5.68 >= (3.25 / (Math.max(1, whistleS)))) {
         whistleS -= parseFloat(`${viewerS.length}`);
      }
      for (let y = 0; y < 2; y++) {
          let modityQ = String.fromCharCode(102,108,111,97,116,105,110,103,95,112,95,53,48,0);
          let settingsS = 4;
          let basketballR: Array<any> = [String.fromCharCode(109,112,101,103,118,105,100,101,111,95,121,95,51,50,0), String.fromCharCode(114,95,53,55,95,115,117,98,118,105,101,119,101,114,0)];
         targetr = `${3 * modityQ.length}`;
         modityQ += `${3 - basketballR.length}`;
         settingsS %= Math.max(5, settingsS);
         basketballR.push(3);
      }
          let selection7: Array<any> = [642, 16];
          let libimagepipelinee = 2.0;
          let invite8: Map<any, any> = new Map([[String.fromCharCode(109,95,54,56,95,100,105,97,108,108,101,100,0),true ], [String.fromCharCode(100,111,110,101,95,111,95,54,57,0),true ]]);
         whistleS *= parseFloat(`${parseInt(`${skipa}`)}`);
         selection7 = [selection7.length & 3];
         libimagepipelinee -= 2;
         invite8 = new Map([[`${selection7.length}`, selection7.length]]);
          let unimplementedviewy = String.fromCharCode(97,116,114,95,49,95,55,54,0);
          let ranka = 0;
          let arrowupk = String.fromCharCode(100,111,115,100,97,116,101,95,111,95,56,56,0);
         targetr += `${parseInt(`${whistleS}`) + parseInt(`${skipa}`)}`;
         unimplementedviewy = `${(String.fromCharCode(69,0) == arrowupk ? arrowupk.length : ranka)}`;
         ranka *= (String.fromCharCode(87,0) == arrowupk ? ranka : arrowupk.length);
      rootk *= editZ.length;
       let gpay9 = String.fromCharCode(117,95,50,56,95,98,111,114,100,101,114,115,0);
       let helperV = String.fromCharCode(102,119,104,116,95,49,95,54,56,0);
      if (4 <= helperV.length) {
          let stepH = String.fromCharCode(112,111,111,108,115,95,115,95,53,50,0);
          let grayj: Array<any> = [494, 500, 489];
          let matchesO = 3.0;
          let transferX: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,101,95,55,50,0),704], [String.fromCharCode(120,99,111,114,114,95,50,95,57,56,0),386]]);
         helperV = "2";
         stepH = `${stepH.length}`;
         grayj = [3 | parseInt(`${matchesO}`)];
         matchesO *= parseFloat(`${2}`);
         transferX.set(stepH, grayj.length);
      }
       let statsE = String.fromCharCode(109,111,100,117,108,117,115,95,99,95,56,57,0);
       let redirectK = String.fromCharCode(109,97,115,107,95,57,95,50,56,0);
      anytimeh = `${(interstitialT.length ^ (statisticsm ? 5 : 2))}`;
      gpay9 = "3";
      tailM = [3 >> (Math.min(2, interstitialT.length))];
      editZ = "2";
   while (arrowl) {
      xvodS &= parseInt(`${rootk}`);
      break;
   }
    const banner = bannerRes.ads;

   let livec = roots <= 5595419.0;
   do {
      roots /= Math.max(((arrowl ? 4 : 4) - libreact3.length), 1);
      if (livec) {
         break;
      }
   } while (livec && (1.61 >= (3.87 * roots) && (5 * parseInt(`${roots}`)) >= 3));
   if (anytimeh.length == 2) {
      statisticsm = (libreact3.length * parseInt(`${rootk}`)) == 43;
   }
       let clearM: Array<any> = [42, 598, 891];
         clearM = [clearM.length];
       let unreadh = String.fromCharCode(120,95,52,49,95,109,111,110,116,104,115,0);
       let predictionwinS = String.fromCharCode(110,95,50,51,95,115,101,99,116,105,111,110,0);
         predictionwinS += `${predictionwinS.length}`;
      arrowl = controls4.length < 36;
       let goalv: Array<any> = [String.fromCharCode(107,95,55,54,0), String.fromCharCode(120,95,56,48,95,113,117,101,117,101,0)];
       let bodanU = String.fromCharCode(101,118,101,110,108,121,95,53,95,56,0);
      for (let h = 0; h < 2; h++) {
          let manifestd: Array<any> = [962, 115, 266];
          let vipsport9 = 4.0;
          let exampleimageX = String.fromCharCode(114,101,112,108,97,99,101,100,95,119,95,54,49,0);
          let privatechatbg2: Map<any, any> = new Map([[String.fromCharCode(117,116,117,114,101,95,109,95,53,0),String.fromCharCode(111,110,115,101,116,95,118,95,52,53,0)], [String.fromCharCode(100,95,51,57,95,103,114,97,121,115,99,97,108,101,0),String.fromCharCode(119,95,51,53,95,97,110,110,101,120,98,0)]]);
         bodanU = `${manifestd.length | goalv.length}`;
         manifestd = [exampleimageX.length];
         vipsport9 += 1 >> (Math.min(4, exampleimageX.length));
         privatechatbg2.set(`${vipsport9}`, exampleimageX.length);
      }
      if (bodanU.length > goalv.length) {
          let stringsf = true;
          let megaphone2 = String.fromCharCode(101,95,49,95,115,116,111,114,101,0);
         goalv = [((stringsf ? 1 : 1))];
         stringsf = megaphone2 == megaphone2;
      }
      if ((4 ^ bodanU.length) <= 2 || 5 <= (4 ^ goalv.length)) {
          let detailsN = 5.0;
          let reactj = String.fromCharCode(100,95,49,56,95,99,111,110,115,116,114,97,105,110,101,100,0);
          let questE: Array<any> = [608, 682, 391];
         bodanU = `${3 - parseInt(`${detailsN}`)}`;
         detailsN -= parseFloat(`${3 & questE.length}`);
         reactj = `${reactj.length - 2}`;
         questE.push(2 ^ reactj.length);
      }
      let subbasketballplayer9 = 7187065 >= goalv.length;
      do {
         goalv = [bodanU.length];
         if (subbasketballplayer9) {
            break;
         }
      } while (subbasketballplayer9 && (3 > (goalv.length ^ bodanU.length) && 3 > (bodanU.length ^ goalv.length)));
      let middleware3 = 7666782 <= goalv.length;
      do {
          let libpangleflippedK = true;
          let statsz = 4;
         goalv.push(statsz / 3);
         libpangleflippedK = !libpangleflippedK;
         statsz -= ((libpangleflippedK ? 4 : 4) - (libpangleflippedK ? 5 : 5));
         if (middleware3) {
            break;
         }
      } while (middleware3 && (4 == (bodanU.length << (Math.min(Math.abs(4), 1))) && 2 == (goalv.length << (Math.min(Math.abs(4), 4)))));
         goalv.push(bodanU.length * 2);
      lista *= ((arrowl ? 2 : 2) % (Math.max(1, 7)));
      interstitialT += "1";

    if (banner) {

       let string5 = 2.0;
       let iconwatchnow2: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,115,95,117,95,51,55,0),378], [String.fromCharCode(111,95,56,50,95,115,99,113,117,101,114,121,0),340], [String.fromCharCode(111,112,101,110,115,115,108,95,106,95,53,54,0),418]]);
       let nextD = String.fromCharCode(115,116,114,102,116,105,109,101,95,116,95,53,51,0);
      while (iconwatchnow2.get(`${string5}`) != null) {
         string5 /= Math.max(2, 3);
         break;
      }
         iconwatchnow2.set(nextD, nextD.length % 2);
      if ((nextD.length - 5) == 2 && 5 == (5 - iconwatchnow2.size)) {
          let teamdetailsbg0 = 0.0;
          let componentsd = String.fromCharCode(109,95,53,49,95,114,101,116,114,105,101,118,101,100,0);
          let banner4 = String.fromCharCode(97,95,51,54,95,97,116,116,114,97,99,116,105,110,103,0);
         nextD += `${nextD.length / 3}`;
         teamdetailsbg0 *= banner4.length;
         componentsd += `${banner4.length}`;
      }
      while ((nextD.length << (Math.min(Math.abs(1), 1))) <= 4 || (1 << (Math.min(3, Math.abs(iconwatchnow2.size)))) <= 2) {
         nextD = `${1 << (Math.min(4, nextD.length))}`;
         break;
      }
         iconwatchnow2 = new Map([[`${iconwatchnow2.size}`, iconwatchnow2.size ^ 3]]);
      for (let t = 0; t < 3; t++) {
         iconwatchnow2.set(`${string5}`, 1);
      }
          let libreanimateda = String.fromCharCode(119,95,53,50,95,115,119,105,102,116,99,0);
          let backiconm = 1;
          let libsgcoreg = 3;
         string5 += 2;
         libreanimateda = `${backiconm % (Math.max(2, 10))}`;
         backiconm ^= 1;
         libsgcoreg >>= Math.min(2, Math.abs(1));
         string5 -= parseInt(`${string5}`);
         iconwatchnow2.set(nextD, 1 % (Math.max(6, iconwatchnow2.size)));
      interstitialT += `${parseInt(`${roots}`) << (Math.min(libreact3.length, 2))}`;
   let basketballhometeamC = String.fromCharCode(104,113,51,112,0) == controls4;
   do {
      controls4 += `${xvodS ^ parseInt(`${rootk}`)}`;
      if (basketballhometeamC) {
         break;
      }
   } while ((!statisticsm && controls4.length == 5) && basketballhometeamC);
   if (anytimeh.length < 1) {
      interstitialT = `${tailM.length}`;
   }
   if ((interstitialT.length + 1) == 4) {
      roots += 2;
   }
   for (let x = 0; x < 3; x++) {
      xvodS &= libreact3.length;
   }
      setBannerAd(banner);
    } else {

   if (rootk >= roots) {
       let umengU = String.fromCharCode(100,99,111,110,108,121,95,115,95,49,49,0);
      for (let r = 0; r < 1; r++) {
         umengU += `${umengU.length >> (Math.min(umengU.length, 5))}`;
      }
      for (let n = 0; n < 1; n++) {
          let profileQ = 2;
          let matchq = String.fromCharCode(110,95,55,54,95,100,115,100,112,99,109,0);
         umengU = `${umengU.length}`;
         profileQ ^= profileQ;
         matchq = `${matchq.length - 1}`;
      }
      while (umengU != umengU) {
         umengU += `${(umengU == String.fromCharCode(111,0) ? umengU.length : umengU.length)}`;
         break;
      }
      roots *= (String.fromCharCode(121,0) == libreact3 ? libreact3.length : (statisticsm ? 5 : 1));
   }
   if (1 < (libreact3.length & xvodS) && 2 < (1 & xvodS)) {
      libreact3 = `${1 & tailM.length}`;
   }
       let mountingA = 2;
       let contextN = String.fromCharCode(97,107,97,114,111,115,95,118,95,49,52,0);
       let miniB = 3;
      while ((contextN.length / (Math.max(8, mountingA))) >= 5) {
          let libturbomodulejsijnit = 1;
          let sigmobq = String.fromCharCode(114,95,55,57,95,108,115,112,102,108,112,99,0);
          let currentj = 3.0;
         contextN = "2";
         libturbomodulejsijnit += parseInt(`${currentj}`);
         sigmobq += `${parseInt(`${currentj}`)}`;
         break;
      }
          let mountingN = 2.0;
          let policyX = String.fromCharCode(109,101,100,105,97,110,95,104,95,52,51,0);
          let photo6 = 3;
         contextN += `${miniB + mountingA}`;
         mountingN += parseInt(`${mountingN}`);
         policyX += `${policyX.length | 1}`;
         photo6 *= policyX.length;
         contextN = `${2 * contextN.length}`;
      if ((miniB / (Math.max(9, mountingA))) == 4) {
         miniB <<= Math.min(2, Math.abs(contextN.length * miniB));
      }
      while (1 == (contextN.length % (Math.max(4, 8)))) {
          let half1 = String.fromCharCode(102,108,97,99,101,110,99,95,103,95,57,50,0);
         contextN += "1";
         half1 = `${1 & half1.length}`;
         break;
      }
         miniB >>= Math.min(Math.abs(contextN.length % 3), 4);
         mountingA %= Math.max(1, 2);
       let internet6: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,105,110,116,101,114,0),435], [String.fromCharCode(105,110,99,114,109,101,114,103,101,95,52,95,54,49,0),672]]);
       let eighteenQ: Map<any, any> = new Map([[String.fromCharCode(111,119,110,101,114,115,104,105,112,95,113,95,54,52,0),String.fromCharCode(104,97,110,100,108,101,95,100,95,57,0)], [String.fromCharCode(110,111,116,105,102,105,101,115,95,109,95,50,51,0),String.fromCharCode(111,95,54,55,95,116,114,97,110,115,105,101,110,116,0)], [String.fromCharCode(102,99,116,108,95,57,95,53,52,0),String.fromCharCode(99,111,108,108,101,116,105,111,110,95,102,95,57,50,0)]]);
          let umengv = String.fromCharCode(102,105,110,100,95,97,95,51,54,0);
         mountingA %= Math.max(3, 5);
         umengv = `${umengv.length / (Math.max(2, 5))}`;
      controls4 = `${(interstitialT == String.fromCharCode(69,0) ? interstitialT.length : parseInt(`${rootk}`))}`;
   let targetO = editZ.length <= 6056452;
   do {
      editZ = `${parseInt(`${roots}`)}`;
      if (targetO) {
         break;
      }
   } while (((rootk + 4.62) <= 3.37 || (editZ.length + 5) <= 4) && targetO);
   let reactnativejsR = tailM.length <= 9010788;
   do {
       let umeng5 = String.fromCharCode(114,95,56,51,95,99,112,108,120,0);
       let videov = true;
       let spinnerc = String.fromCharCode(118,99,120,112,114,111,106,95,52,95,53,54,0);
       let predictionactivee = true;
       let backwardp = String.fromCharCode(105,110,99,114,98,108,111,98,95,49,95,49,57,0);
      while (spinnerc != String.fromCharCode(109,0)) {
         backwardp += "1";
         break;
      }
       let profileactiveZ = String.fromCharCode(118,95,50,52,95,112,111,115,116,101,110,99,111,100,101,0);
       let launcherQ = String.fromCharCode(114,95,52,54,95,97,110,105,109,97,116,101,100,0);
       let eventsplashd: Array<any> = [String.fromCharCode(121,117,118,121,97,95,108,95,55,51,0), String.fromCharCode(101,95,49,95,114,97,119,118,105,100,101,111,0)];
       let filedY: Array<any> = [962, 52, 137];
         backwardp += "1";
      if (!predictionactivee) {
         predictionactivee = eventsplashd.length >= 29 && filedY.length >= 29;
      }
      while (!predictionactivee) {
          let malaysiaN = String.fromCharCode(111,95,54,55,95,100,105,114,110,97,109,101,0);
         predictionactivee = umeng5.length == 32 || 32 == spinnerc.length;
         malaysiaN += `${malaysiaN.length}`;
         break;
      }
         profileactiveZ += `${launcherQ.length % (Math.max(4, umeng5.length))}`;
      if (!predictionactivee && 5 >= backwardp.length) {
          let defaultfootballbgh = 2.0;
          let ajax6 = 2.0;
          let activeU = String.fromCharCode(108,95,52,50,95,98,119,103,116,0);
          let fastforward2 = String.fromCharCode(104,95,51,54,95,115,101,116,97,99,116,105,118,101,107,101,121,0);
         backwardp += "2";
         defaultfootballbgh -= parseInt(`${ajax6}`) & parseInt(`${defaultfootballbgh}`);
         ajax6 -= parseFloat(`${parseInt(`${defaultfootballbgh}`) + 3}`);
         activeU = `${1 >> (Math.min(1, Math.abs(parseInt(`${ajax6}`))))}`;
         fastforward2 = `${activeU.length}`;
      }
         profileactiveZ = `${spinnerc.length}`;
      let settingd = String.fromCharCode(53,118,98,0) == spinnerc;
      do {
         spinnerc += `${profileactiveZ.length}`;
         if (settingd) {
            break;
         }
      } while ((!spinnerc.includes(`${videov}`)) && settingd);
      if (backwardp == spinnerc) {
          let libjsijniprofilerP: Array<any> = [943, 582];
          let default_w3H = 1.0;
          let corel: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,115,95,99,95,50,48,0),279], [String.fromCharCode(110,95,49,95,100,101,112,114,101,99,97,116,105,111,110,0),456]]);
          let reminderr: Map<any, any> = new Map([[String.fromCharCode(97,115,116,101,114,105,115,107,95,105,95,53,56,0),571], [String.fromCharCode(114,101,108,101,97,115,101,95,97,95,50,52,0),645]]);
          let watchS = String.fromCharCode(117,108,116,105,95,112,95,49,52,0);
         spinnerc = `${libjsijniprofilerP.length + parseInt(`${default_w3H}`)}`;
         libjsijniprofilerP.push(reminderr.size);
         default_w3H += corel.size << (Math.min(watchS.length, 1));
         corel.set(`${watchS}`, watchS.length);
         reminderr.set(`${corel.size}`, reminderr.size * corel.size);
      }
      let fileB = videov ? !videov : videov;
      do {
         videov = eventsplashd.length < 96 || filedY.length < 96;
         if (fileB) {
            break;
         }
      } while (fileB && (filedY.length == 4));
       let libreactB: Map<any, any> = new Map([[String.fromCharCode(97,100,109,105,110,101,100,95,106,95,55,55,0),false ], [String.fromCharCode(120,95,55,53,95,99,111,109,109,97,110,100,0),false ], [String.fromCharCode(112,108,97,110,101,95,112,95,56,0),false ]]);
          let logouserz = 0.0;
          let tooltipsO = 0;
         profileactiveZ = `${eventsplashd.length}`;
         logouserz += parseFloat(`${parseInt(`${logouserz}`) + tooltipsO}`);
         tooltipsO <<= Math.min(Math.abs(tooltipsO), 4);
      if (!umeng5.includes(`${videov}`)) {
         umeng5 += `${umeng5.length >> (Math.min(Math.abs(2), 3))}`;
      }
      tailM = [2 * lista];
      if (reactnativejsR) {
         break;
      }
   } while ((!editZ.startsWith(`${tailM.length}`)) && reactnativejsR);
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchBannerAd();
  }, []);

  const onVipCountdownClick = useCallback(() => {
       let suggestion0 = 5;
    let activec = String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,95,117,95,50,52,0);
    let iconstarQ: Map<any, any> = new Map([[String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,121,95,56,56,0),false ], [String.fromCharCode(121,95,55,55,95,101,99,117,114,115,105,118,101,0),false ], [String.fromCharCode(115,98,111,120,95,111,95,50,51,0),false ]]);
    let ballw = String.fromCharCode(116,97,107,101,111,118,101,114,95,55,95,50,51,0);
    let whistlet = String.fromCharCode(115,121,109,98,111,108,115,95,121,95,50,51,0);
    let volume5 = String.fromCharCode(106,95,54,48,95,112,100,102,0);
    let defaultpredictionprofileR = String.fromCharCode(117,110,97,108,105,103,110,95,52,95,56,54,0);
    let types8 = 2;
    let libswscaleY = String.fromCharCode(117,110,115,111,114,116,101,100,95,49,95,53,48,0);
    let greytickO = 4.0;
    let tempnodatagifd = false;
    let headerK = String.fromCharCode(99,97,118,115,100,115,112,95,53,95,56,56,0);
    let stringsq = 0.0;
   for (let n = 0; n < 3; n++) {
      iconstarQ = new Map([[activec, volume5.length]]);
   }
      ballw += `${libswscaleY.length}`;
       let mbbidc = String.fromCharCode(98,114,117,115,104,101,115,95,102,95,56,49,0);
       let baidu4 = 5;
       let filedQ = String.fromCharCode(118,95,57,51,95,115,116,114,117,99,116,117,114,97,108,0);
      let taiwan6 = 5965457 <= baidu4;
      do {
          let baseb = 5.0;
          let libzeusE = 5.0;
          let arrowup6 = String.fromCharCode(97,95,53,49,95,102,112,117,116,115,0);
         baidu4 &= 3;
         baseb -= parseFloat(`${parseInt(`${libzeusE}`) % 2}`);
         libzeusE *= parseInt(`${libzeusE}`);
         arrowup6 = `${parseInt(`${baseb}`) - 3}`;
         if (taiwan6) {
            break;
         }
      } while ((mbbidc.includes(`${baidu4}`)) && taiwan6);
         mbbidc = `${mbbidc.length / 2}`;
       let libavformat_ = true;
       let nativeexh = true;
      if (baidu4 <= 2) {
         filedQ += `${mbbidc.length ^ 2}`;
      }
      for (let b = 0; b < 2; b++) {
         nativeexh = String.fromCharCode(103,0) == mbbidc;
      }
      for (let w = 0; w < 1; w++) {
         filedQ = `${((libavformat_ ? 1 : 5))}`;
      }
      while (1 == baidu4) {
          let anytimec = true;
          let floaterR = String.fromCharCode(114,101,118,101,114,116,95,99,95,54,50,0);
          let side2 = 2.0;
          let kick5: Array<any> = [62, 944];
         libavformat_ = libavformat_ && baidu4 > 77;
         anytimec = floaterR.length >= 38;
         floaterR += `${kick5.length >> (Math.min(4, Math.abs(parseInt(`${side2}`))))}`;
         side2 *= parseFloat(`${1}`);
         kick5 = [((anytimec ? 2 : 3) | parseInt(`${side2}`))];
         break;
      }
         filedQ = `${baidu4 | 2}`;
       let send0: Map<any, any> = new Map([[String.fromCharCode(102,102,106,110,105,95,54,95,51,54,0),true ], [String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,95,99,95,49,55,0),true ]]);
       let tumbnail9: Map<any, any> = new Map([[String.fromCharCode(103,95,52,53,95,100,101,112,111,115,105,116,0),true ], [String.fromCharCode(109,100,112,114,95,110,95,55,51,0),true ]]);
      defaultpredictionprofileR = `${(String.fromCharCode(76,0) == activec ? types8 : activec.length)}`;
       let defaultroombgH = String.fromCharCode(102,111,99,117,115,97,98,108,101,95,102,95,56,49,0);
       let successx = String.fromCharCode(108,95,54,49,95,109,111,118,101,99,98,0);
       let privatechatbgS = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,49,95,57,53,0);
         defaultroombgH += `${privatechatbgS.length}`;
         defaultroombgH += `${3 | defaultroombgH.length}`;
      let middlebrightness2 = defaultroombgH == String.fromCharCode(98,95,112,95,116,0);
      do {
          let link6 = 2.0;
          let backicon4 = String.fromCharCode(111,98,116,97,105,110,95,120,95,57,48,0);
          let footballfiledlayoutC = String.fromCharCode(111,95,54,48,95,102,108,105,103,104,116,0);
          let const_s7 = true;
          let vnewsv: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,95,120,95,48,0),997], [String.fromCharCode(115,95,53,54,95,121,115,108,111,103,0),460]]);
         defaultroombgH += `${(String.fromCharCode(87,0) == backicon4 ? (const_s7 ? 1 : 1) : backicon4.length)}`;
         link6 *= (String.fromCharCode(112,0) == footballfiledlayoutC ? footballfiledlayoutC.length : parseInt(`${link6}`));
         const_s7 = 24 == footballfiledlayoutC.length;
         vnewsv.set(`${link6}`, 1);
         if (middlebrightness2) {
            break;
         }
      } while (middlebrightness2 && (successx == String.fromCharCode(99,0)));
      if (4 == successx.length) {
         privatechatbgS = `${(defaultroombgH == String.fromCharCode(78,0) ? defaultroombgH.length : privatechatbgS.length)}`;
      }
      let updatesM = String.fromCharCode(107,109,52,99,113,95,49,119,106,114,0) == successx;
      do {
         successx = `${successx.length}`;
         if (updatesM) {
            break;
         }
      } while ((defaultroombgH == successx) && updatesM);
       let libjsijniprofilerD = 1.0;
       let hejim = 2.0;
       let routere = 4.0;
       let defaultroombg5 = 1.0;
          let librrcV = 4.0;
         defaultroombg5 -= parseFloat(`${parseInt(`${librrcV}`) << (Math.min(Math.abs(1), 2))}`);
          let animationsM = 1;
         defaultroombgH += `${(successx == String.fromCharCode(95,0) ? successx.length : defaultroombgH.length)}`;
         animationsM &= animationsM % (Math.max(4, animationsM));
      types8 *= defaultpredictionprofileR.length;
   while (volume5 != String.fromCharCode(106,0)) {
      libswscaleY = `${activec.length | 2}`;
      break;
   }
       let mbridged = 1.0;
       let predictionbannersharedn = String.fromCharCode(113,95,49,57,95,114,117,110,116,105,109,101,0);
       let mintegralP = String.fromCharCode(118,95,49,53,95,115,116,114,101,97,109,97,98,108,101,0);
      for (let m = 0; m < 2; m++) {
          let sansc = 3.0;
          let gmailq = 4;
          let trashz = 4;
         predictionbannersharedn = `${predictionbannersharedn.length << (Math.min(1, Math.abs(parseInt(`${sansc}`))))}`;
         sansc += parseFloat(`${trashz ^ gmailq}`);
         gmailq &= trashz;
      }
         predictionbannersharedn = `${predictionbannersharedn.length * parseInt(`${mbridged}`)}`;
      activec = `${(libswscaleY == String.fromCharCode(114,0) ? parseInt(`${greytickO}`) : libswscaleY.length)}`;
       let backl = String.fromCharCode(98,105,116,115,104,105,102,116,95,120,95,57,50,0);
      while (backl.length < 4) {
         backl = `${backl.length}`;
         break;
      }
          let rankZ: Array<any> = [662, 821];
         backl += `${rankZ.length}`;
         backl = `${backl.length}`;
      libswscaleY += `${activec.length % (Math.max(7, backl.length))}`;

    videoRef.current?.setPause(true);

   while (types8 >= 5) {
       let zoom0 = true;
       let networkt = String.fromCharCode(116,114,97,110,115,112,111,115,101,120,95,120,95,51,52,0);
       let half9 = 0;
       let long_gj = 2.0;
         networkt += `${half9 / (Math.max(parseInt(`${long_gj}`), 9))}`;
      for (let s = 0; s < 2; s++) {
         long_gj -= (parseInt(`${long_gj}`) ^ (zoom0 ? 1 : 1));
      }
         networkt = `${2 * networkt.length}`;
          let livenodatabgimg6 = 2;
          let verticale = 2.0;
         long_gj *= ((zoom0 ? 1 : 3) << (Math.min(Math.abs(parseInt(`${long_gj}`)), 4)));
         livenodatabgimg6 |= 3;
         verticale += parseFloat(`${2 / (Math.max(livenodatabgimg6, 4))}`);
          let jingdongC = 1;
          let temperaturen: Map<any, any> = new Map([[String.fromCharCode(121,95,55,53,95,102,108,117,115,104,105,110,103,0),24], [String.fromCharCode(99,95,53,48,95,115,97,102,101,0),710]]);
         networkt += "2";
         jingdongC %= Math.max(2, temperaturen.size - 2);
         temperaturen.set(`${jingdongC}`, temperaturen.size ^ 3);
       let huaweia = String.fromCharCode(97,110,97,110,100,97,110,95,57,95,49,52,0);
          let middleR = String.fromCharCode(105,95,52,55,95,105,110,102,111,115,0);
         half9 += (huaweia == String.fromCharCode(97,0) ? huaweia.length : networkt.length);
         middleR += `${middleR.length + 1}`;
          let iconeditO: Array<any> = [String.fromCharCode(103,95,56,50,95,104,113,100,110,100,0), String.fromCharCode(112,114,111,95,100,95,52,55,0), String.fromCharCode(106,95,54,55,95,109,102,114,97,0)];
          let iconwatchnowJ = 1.0;
          let untickU: Map<any, any> = new Map([[String.fromCharCode(113,95,53,48,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0),928], [String.fromCharCode(115,119,105,116,99,104,105,110,103,95,106,95,55,53,0),18], [String.fromCharCode(110,95,56,95,99,120,100,97,116,97,0),19]]);
         huaweia = `${untickU.size}`;
         iconeditO = [1 - parseInt(`${iconwatchnowJ}`)];
         iconwatchnowJ -= parseFloat(`${1}`);
         untickU = new Map([[`${iconeditO.length}`, 1]]);
         half9 >>= Math.min(Math.abs(((zoom0 ? 3 : 2))), 2);
         networkt += "3";
      let yellowvideoliveh = zoom0 ? !zoom0 : zoom0;
      do {
          let internetj = 3.0;
          let friendsZ = String.fromCharCode(98,95,56,48,95,97,116,111,109,105,99,97,108,108,121,0);
          let faviconz: Map<any, any> = new Map([[String.fromCharCode(109,95,56,51,95,105,99,111,110,115,0),519], [String.fromCharCode(118,101,110,100,111,114,95,57,95,57,49,0),530]]);
          let completet = 2.0;
          let dplusQ = 4;
         zoom0 = 85 == friendsZ.length;
         internetj += 3 ^ faviconz.size;
         friendsZ = `${faviconz.size % (Math.max(3, 9))}`;
         completet *= parseFloat(`${faviconz.size << (Math.min(Math.abs(3), 5))}`);
         dplusQ >>= Math.min(Math.abs(faviconz.size), 4);
         if (yellowvideoliveh) {
            break;
         }
      } while (yellowvideoliveh && (!zoom0));
         half9 *= 1 % (Math.max(parseInt(`${long_gj}`), 7));
      suggestion0 += 1;
      break;
   }
       let scoreI = String.fromCharCode(105,110,101,116,95,114,95,51,52,0);
       let privilegen: Array<any> = [991, 634, 962];
         scoreI += `${scoreI.length & 1}`;
      if (scoreI.endsWith(`${privilegen.length}`)) {
         scoreI = `${privilegen.length}`;
      }
      types8 ^= 2;
       let codegenc = String.fromCharCode(100,95,54,52,95,112,115,110,114,0);
       let activityh = false;
       let recommendationC = String.fromCharCode(102,114,97,109,101,108,101,115,115,95,53,95,56,55,0);
         activityh = 90 < codegenc.length;
         codegenc += `${codegenc.length}`;
         activityh = String.fromCharCode(82,0) == recommendationC && codegenc.length == 56;
      while (activityh) {
         activityh = recommendationC.length < codegenc.length;
         break;
      }
         activityh = recommendationC.length <= 14 && !activityh;
         recommendationC += `${3 & recommendationC.length}`;
       let yingJ: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,48,95,50,51,0),true ], [String.fromCharCode(121,95,53,54,95,118,105,115,105,98,105,108,105,116,105,101,115,0),true ]]);
      if (recommendationC.length == codegenc.length) {
         codegenc += `${yingJ.size % (Math.max(3, 3))}`;
      }
       let footballl = String.fromCharCode(100,95,54,55,95,99,108,105,101,110,116,0);
       let connection1 = String.fromCharCode(97,112,112,114,116,99,95,111,95,52,50,0);
      types8 += parseInt(`${greytickO}`) ^ codegenc.length;
   while (defaultpredictionprofileR.length < 2) {
      defaultpredictionprofileR += "1";
      break;
   }
   while (libswscaleY == String.fromCharCode(84,0) && volume5 == String.fromCharCode(110,0)) {
       let right9 = String.fromCharCode(97,110,97,108,121,122,101,95,113,95,50,48,0);
       let dangers = String.fromCharCode(110,95,50,49,95,119,115,118,113,97,0);
       let upgrade5 = 0.0;
       let disconnectedl = false;
      if (2.97 == (2.34 / (Math.max(6, upgrade5)))) {
         upgrade5 += parseFloat(`${right9.length}`);
      }
         dangers += `${(dangers == String.fromCharCode(76,0) ? dangers.length : (disconnectedl ? 2 : 2))}`;
      while (1.43 < (upgrade5 - 4.51)) {
          let defaultplayerimgI = 1.0;
          let whistleb = 1;
          let mappingy: Array<any> = [119, 793];
         upgrade5 *= parseFloat(`${1 * parseInt(`${defaultplayerimgI}`)}`);
         defaultplayerimgI /= Math.max(parseFloat(`${whistleb}`), 2);
         whistleb &= 3 << (Math.min(Math.abs(whistleb), 2));
         mappingy.push(2 << (Math.min(4, mappingy.length)));
         break;
      }
          let playercommonf = 2.0;
          let mini6 = String.fromCharCode(107,101,121,105,100,95,117,95,56,50,0);
          let gradlewD = false;
         dangers += `${3 - parseInt(`${playercommonf}`)}`;
         playercommonf /= Math.max(1, (parseFloat(`${mini6 == String.fromCharCode(84,0) ? mini6.length : (gradlewD ? 5 : 2)}`)));
         gradlewD = mini6.length == 46 || !gradlewD;
      while (5 >= dangers.length) {
         dangers = `${3 - parseInt(`${upgrade5}`)}`;
         break;
      }
      if (upgrade5 == 4.66) {
          let matchactiveY = 1.0;
          let calendarJ = true;
          let storen = String.fromCharCode(100,111,110,101,95,101,95,49,49,0);
          let executorA = 1.0;
          let sansR = 3;
         upgrade5 -= parseFloat(`${1 + dangers.length}`);
         matchactiveY *= (parseFloat(`${(calendarJ ? 2 : 3) + parseInt(`${executorA}`)}`));
         calendarJ = 73 <= sansR;
         storen += `${parseInt(`${matchactiveY}`)}`;
         executorA += (parseFloat(`${(calendarJ ? 3 : 4) ^ parseInt(`${matchactiveY}`)}`));
         sansR *= 3;
      }
      while (!disconnectedl || dangers.length > 2) {
          let navigationO = String.fromCharCode(112,95,52,52,95,117,105,111,109,111,118,101,0);
          let reactnavigationF = String.fromCharCode(103,114,111,117,112,115,95,53,95,52,55,0);
          let libflipperX = String.fromCharCode(102,95,57,49,95,115,113,114,116,110,101,103,0);
          let catalogG = String.fromCharCode(115,95,49,55,95,116,111,111,108,116,105,112,115,0);
          let jingdongZ: Map<any, any> = new Map([[String.fromCharCode(100,115,109,111,116,105,111,110,95,99,95,50,55,0),911], [String.fromCharCode(117,95,51,53,95,112,97,116,116,101,114,110,0),778]]);
         dangers += `${(dangers == String.fromCharCode(115,0) ? dangers.length : jingdongZ.size)}`;
         navigationO += `${(String.fromCharCode(73,0) == catalogG ? catalogG.length : reactnavigationF.length)}`;
         reactnavigationF += `${(String.fromCharCode(110,0) == navigationO ? navigationO.length : reactnavigationF.length)}`;
         libflipperX = `${(String.fromCharCode(84,0) == navigationO ? navigationO.length : reactnavigationF.length)}`;
         jingdongZ.set(navigationO, 2 * catalogG.length);
         break;
      }
         disconnectedl = (((disconnectedl ? dangers.length : 67) + dangers.length) <= 67);
          let switch_ic = String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,117,95,48,0);
         disconnectedl = switch_ic.length < parseInt(`${upgrade5}`);
          let libavformatM = 4.0;
          let disconnectedlogor = 5.0;
          let currentS = String.fromCharCode(121,95,50,51,95,114,101,97,100,105,110,103,0);
         right9 += `${parseInt(`${libavformatM}`) * 2}`;
         libavformatM -= parseFloat(`${1}`);
         disconnectedlogor -= (currentS == String.fromCharCode(97,0) ? currentS.length : parseInt(`${disconnectedlogor}`));
      let subtextq = 5884285 >= dangers.length;
      do {
          let controlp = String.fromCharCode(111,103,103,108,101,95,113,95,53,52,0);
          let qaagN = String.fromCharCode(112,114,101,97,108,108,111,99,95,48,95,55,49,0);
          let const_rV = String.fromCharCode(99,116,116,115,95,118,95,50,54,0);
          let notification9 = String.fromCharCode(104,95,49,57,95,118,105,98,114,97,110,99,101,0);
         dangers += `${qaagN.length * controlp.length}`;
         controlp = `${const_rV.length}`;
         qaagN = `${(notification9 == String.fromCharCode(107,0) ? const_rV.length : notification9.length)}`;
         if (subtextq) {
            break;
         }
      } while ((right9.length == dangers.length) && subtextq);
         right9 += `${dangers.length}`;
      volume5 = "2";
      break;
   }
   let backwardm = String.fromCharCode(113,108,108,103,0) == whistlet;
   do {
       let r_hashN = String.fromCharCode(113,95,51,57,95,101,120,116,114,97,99,116,101,100,0);
       let league5 = false;
       let utilsH = true;
       let sportsm: Map<any, any> = new Map([[String.fromCharCode(116,95,57,51,95,105,116,115,101,108,102,0),119], [String.fromCharCode(111,117,116,108,105,110,101,95,122,95,49,55,0),801]]);
      let moviesU = String.fromCharCode(48,110,111,0) == r_hashN;
      do {
         r_hashN += `${sportsm.size | r_hashN.length}`;
         if (moviesU) {
            break;
         }
      } while ((1 < r_hashN.length) && moviesU);
      while (5 == sportsm.size && 4 == (sportsm.size << (Math.min(Math.abs(5), 2)))) {
         utilsH = league5;
         break;
      }
          let livep = 5.0;
          let defaultprofilepicl = 0.0;
          let bottomi: Map<any, any> = new Map([[String.fromCharCode(101,95,56,51,95,111,98,106,101,99,116,115,0),false ], [String.fromCharCode(102,95,56,53,0),false ]]);
         sportsm = new Map([[`${sportsm.size}`, sportsm.size]]);
         livep /= Math.max(4, parseInt(`${defaultprofilepicl}`));
         defaultprofilepicl += parseInt(`${livep}`) | 1;
         bottomi.set(`${defaultprofilepicl}`, parseInt(`${defaultprofilepicl}`));
         league5 = sportsm.get(`${utilsH}`) == null;
          let renderN = 0.0;
         sportsm.set(`${renderN}`, parseInt(`${renderN}`) << (Math.min(Math.abs(1), 5)));
          let smallw = String.fromCharCode(100,105,97,103,114,97,109,95,110,95,56,49,0);
          let anytimes = String.fromCharCode(99,95,54,51,95,118,105,97,0);
         utilsH = league5;
         smallw += `${1 ^ anytimes.length}`;
         anytimes += "1";
      let lineO = 8630327 >= sportsm.size;
      do {
         sportsm.set(`${utilsH}`, 3 & sportsm.size);
         if (lineO) {
            break;
         }
      } while ((sportsm.size >= 5) && lineO);
          let video3 = String.fromCharCode(116,100,108,116,95,115,95,56,53,0);
          let progressk = String.fromCharCode(112,114,111,108,111,110,103,95,50,95,53,50,0);
         utilsH = (progressk.length ^ r_hashN.length) > 13;
         video3 += `${(String.fromCharCode(86,0) == video3 ? video3.length : video3.length)}`;
         progressk = `${(String.fromCharCode(119,0) == video3 ? video3.length : video3.length)}`;
         utilsH = (80 > (r_hashN.length & (!league5 ? r_hashN.length : 80)));
      for (let q = 0; q < 2; q++) {
         utilsH = r_hashN.includes(`${league5}`);
      }
         r_hashN = `${sportsm.size}`;
         sportsm.set(`${utilsH}`, (3 * (utilsH ? 2 : 4)));
      whistlet = `${(String.fromCharCode(89,0) == libswscaleY ? types8 : libswscaleY.length)}`;
      if (backwardm) {
         break;
      }
   } while ((4 <= whistlet.length) && backwardm);
   let redirectl = tempnodatagifd ? !tempnodatagifd : tempnodatagifd;
   do {
      tempnodatagifd = !tempnodatagifd && greytickO == 15.33;
      if (redirectl) {
         break;
      }
   } while ((4 > (1 ^ suggestion0)) && redirectl);
    setShowBecomeVIPOverlay(true);

      tempnodatagifd = !tempnodatagifd;
      suggestion0 |= ((tempnodatagifd ? 1 : 2) << (Math.min(Math.abs(types8), 5)));
      stringsq *= iconstarQ.size * 3;
   let profileS = iconstarQ.size <= 8919688;
   do {
      iconstarQ = new Map([[`${greytickO}`, 1]]);
      if (profileS) {
         break;
      }
   } while (profileS && (types8 <= 4));
       let settingsN: Map<any, any> = new Map([[String.fromCharCode(113,112,101,108,100,115,112,95,108,95,55,54,0),69], [String.fromCharCode(119,104,105,116,101,108,105,115,116,95,54,95,57,52,0),460], [String.fromCharCode(97,95,50,95,108,111,110,103,0),912]]);
         settingsN.set(`${settingsN.size}`, settingsN.size << (Math.min(Math.abs(settingsN.size), 2)));
         settingsN.set(`${settingsN.size}`, settingsN.size);
      if (Array.from(settingsN.values()).includes(settingsN.size)) {
          let libjsijniprofilere = String.fromCharCode(97,116,111,109,105,99,97,108,108,121,95,122,95,55,57,0);
          let mbnativef = String.fromCharCode(97,115,99,98,110,95,51,95,50,57,0);
          let iconfeedbackr: Map<any, any> = new Map([[String.fromCharCode(115,105,98,108,105,110,103,95,100,95,49,52,0),String.fromCharCode(99,111,110,116,111,117,114,95,121,95,54,48,0)], [String.fromCharCode(108,105,98,99,101,108,116,95,49,95,51,54,0),String.fromCharCode(99,95,52,48,95,115,116,105,114,110,103,0)], [String.fromCharCode(101,95,52,49,95,99,111,100,101,99,112,114,105,118,0),String.fromCharCode(112,111,107,101,114,95,114,95,50,55,0)]]);
          let whistleJ: Array<any> = [190, 538, 801];
          let package_cmd = String.fromCharCode(122,95,54,56,95,98,117,110,100,108,101,0);
         settingsN.set(`${whistleJ.length}`, iconfeedbackr.size);
         libjsijniprofilere += "2";
         mbnativef += `${libjsijniprofilere.length >> (Math.min(Math.abs(3), 5))}`;
         iconfeedbackr = new Map([[mbnativef, mbnativef.length]]);
         whistleJ.push((mbnativef == String.fromCharCode(120,0) ? mbnativef.length : package_cmd.length));
         package_cmd = `${mbnativef.length * package_cmd.length}`;
      }
      types8 *= 3;
   let xvodm = volume5.length <= 8876408;
   do {
      volume5 = `${whistlet.length - 2}`;
      if (xvodm) {
         break;
      }
   } while (xvodm && (!defaultpredictionprofileR.includes(`${volume5.length}`)));
   for (let x = 0; x < 1; x++) {
      volume5 += `${parseInt(`${greytickO}`)}`;
   }

    

   while (tempnodatagifd) {
      whistlet = "3";
      break;
   }
   if (tempnodatagifd) {
      tempnodatagifd = String.fromCharCode(90,0) == activec;
   }
      stringsq /= Math.max(iconstarQ.size, 4);
   if ((suggestion0 - 4) > 2) {
      defaultpredictionprofileR += `${libswscaleY.length}`;
   }
      suggestion0 >>= Math.min(5, Math.abs(3));
   while (defaultpredictionprofileR == String.fromCharCode(104,0) && headerK.length >= 3) {
      defaultpredictionprofileR += `${suggestion0}`;
      break;
   }
   for (let i = 0; i < 1; i++) {
      headerK += `${(parseInt(`${stringsq}`) << (Math.min(4, Math.abs((tempnodatagifd ? 4 : 4)))))}`;
   }
    ww_runtime.sportDetailsVipPopupTimesAnalytics();
    
  }, []);

  const onGoPrivateChatPress = () => {
       let downarrow4 = 2.0;
    let utils_ = true;
    let register_7w = 4;
    let inouttargetredD = 2;
    let stepU = 1.0;
    let sheeta: Array<any> = [String.fromCharCode(104,109,109,116,95,109,95,51,54,0), String.fromCharCode(115,101,97,114,99,104,105,110,103,95,48,95,54,51,0), String.fromCharCode(107,108,97,121,116,110,95,112,95,51,51,0)];
    let crownT = 1.0;
    let user2 = String.fromCharCode(99,101,110,116,114,101,95,103,95,50,56,0);
    let analyticsx: Map<any, any> = new Map([[String.fromCharCode(115,99,104,117,110,99,107,95,50,95,52,57,0),303], [String.fromCharCode(115,99,104,101,100,117,108,101,95,52,95,50,53,0),698]]);
    let materialR: Array<any> = [434, 925, 817];
    let roundJ = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,97,95,52,0);
    let leakcheckert = 3;
    let mbbidG = String.fromCharCode(114,95,52,54,0);
    let network_ = 2;
   while (4 > inouttargetredD) {
       let package_jx: Map<any, any> = new Map([[String.fromCharCode(112,95,51,55,95,97,108,108,111,99,99,111,109,109,111,110,0),173], [String.fromCharCode(116,114,101,101,115,95,55,95,54,50,0),43], [String.fromCharCode(115,111,102,97,95,111,95,54,48,0),509]]);
         package_jx = new Map([[`${package_jx.size}`, 1 - package_jx.size]]);
         package_jx = new Map([[`${package_jx.size}`, 3]]);
         package_jx.set(`${package_jx.size}`, 1);
      inouttargetredD -= sheeta.length;
      break;
   }
   if (materialR.length <= 2) {
      crownT += parseFloat(`${parseInt(`${crownT}`) & parseInt(`${downarrow4}`)}`);
   }
      crownT /= Math.max(2, parseFloat(`${3}`));
       let suggestiont = String.fromCharCode(111,95,49,52,95,103,122,105,112,112,101,100,0);
       let albumE = 4;
       let bootsplash_: Map<any, any> = new Map([[String.fromCharCode(105,95,54,95,115,116,97,116,105,115,116,105,99,115,0),211], [String.fromCharCode(103,95,56,56,95,109,111,111,118,0),133], [String.fromCharCode(112,100,102,95,98,95,54,51,0),241]]);
      while (!suggestiont.startsWith(`${bootsplash_.size}`)) {
          let iconnointernetc = String.fromCharCode(101,110,100,112,111,105,110,116,115,95,111,95,56,56,0);
          let stringsB = 5.0;
          let aboutq = String.fromCharCode(111,110,116,114,111,108,115,95,100,95,55,53,0);
          let libcxxcomponentsa = String.fromCharCode(117,95,52,49,95,105,100,102,118,0);
          let securityR = String.fromCharCode(104,95,55,53,95,105,100,115,117,98,116,121,112,101,0);
         bootsplash_.set(`${albumE}`, albumE & iconnointernetc.length);
         iconnointernetc += `${libcxxcomponentsa.length << (Math.min(Math.abs(1), 4))}`;
         stringsB *= 2;
         aboutq += `${parseInt(`${stringsB}`) + 2}`;
         libcxxcomponentsa += "2";
         securityR += `${aboutq.length}`;
         break;
      }
         albumE |= bootsplash_.size >> (Math.min(suggestiont.length, 1));
      while (4 > suggestiont.length) {
         suggestiont = `${bootsplash_.size >> (Math.min(5, Math.abs(albumE)))}`;
         break;
      }
          let penaltygoalu = String.fromCharCode(104,95,55,49,95,104,100,97,116,97,0);
         albumE -= (penaltygoalu == String.fromCharCode(85,0) ? penaltygoalu.length : suggestiont.length);
       let armvac = 1;
       let matchactiveu = 5;
         armvac <<= Math.min(2, Math.abs((String.fromCharCode(73,0) == suggestiont ? albumE : suggestiont.length)));
      for (let j = 0; j < 1; j++) {
         bootsplash_ = new Map([[`${albumE}`, armvac | 3]]);
      }
      while (5 < (bootsplash_.size % (Math.max(3, 3))) && 2 < (suggestiont.length % 3)) {
         bootsplash_.set(`${albumE}`, albumE << (Math.min(Math.abs(1), 5)));
         break;
      }
         albumE += 1 | armvac;
      stepU += parseFloat(`${parseInt(`${downarrow4}`) + 3}`);
      register_7w -= analyticsx.size;
   if (utils_) {
       let filex = String.fromCharCode(110,95,50,49,95,112,114,101,115,117,109,101,0);
         filex += `${(filex == String.fromCharCode(85,0) ? filex.length : filex.length)}`;
         filex = `${filex.length >> (Math.min(2, filex.length))}`;
       let typingw = 4.0;
       let libavdeviceO = 0.0;
      register_7w %= Math.max(2, filex.length);
   }
   while (stepU <= downarrow4) {
       let championJ = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,113,95,50,0);
       let roundg: Array<any> = [713, 662];
      if (5 > (roundg.length * 1) || (championJ.length * 1) > 5) {
          let bannerQ = 1;
          let bridgeX = 4.0;
          let clearJ = String.fromCharCode(97,114,101,97,95,57,95,54,0);
          let whitetickQ = 2.0;
         championJ += `${3 << (Math.min(3, Math.abs(parseInt(`${bridgeX}`))))}`;
         bannerQ <<= Math.min(2, Math.abs((String.fromCharCode(95,0) == clearJ ? parseInt(`${whitetickQ}`) : clearJ.length)));
         bridgeX *= 3;
         whitetickQ -= 1;
      }
         roundg = [3];
      while ((2 | championJ.length) > 5 || (roundg.length | 2) > 3) {
         roundg = [2 / (Math.max(1, roundg.length))];
         break;
      }
         roundg = [(String.fromCharCode(87,0) == championJ ? roundg.length : championJ.length)];
       let libswresample6 = 1.0;
         championJ += `${championJ.length ^ 1}`;
      stepU /= Math.max(parseFloat(`${2 << (Math.min(3, roundg.length))}`), 4);
      break;
   }

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

        {bannerAd && !wwBodan.isVip(userState.user) && (
          <View style={{
            
            
            
          }}>
            <BannerContainer
              bannerAd={bannerAd}
              onMount={() => {
                ww_runtime.videoPlayerBannerViewAnalytics({
                  playerType: 'sport',
                  ads_slot_id: bannerAd.ads_slot_id,
                  ads_id: bannerAd.ads_id,
                  ads_title: bannerAd.ads_title,
                  ads_name: bannerAd.ads_name,
                });
              }}
              onPress={() => {
                ww_runtime.videoPlayerBannerClickAnalytics({
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
              source={require('@static/images/runtimeschedulerPromotion.gif')}
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
