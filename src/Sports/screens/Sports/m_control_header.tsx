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
import ScreenContainer from '../../../components/container/ypy_fast';
import MainHeader from '../../../components/header/tae_refresh_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { BSearch, MAboutEdit, JLessLaunch } from '@type/wpk_long';
import VodPlaylist from '../../../components/playlist/ki_gift_zhubo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import FastImage from '../../../components/common/gwi_with';
import LShrink from '../../middleware/i_favorite';
import { Url } from '../../middleware/aux_bootsplash_black';
import { formatMatchDate } from '../../utility/utils';
import { EALSource, XCXMember } from '../../types/x_home';
import MatchDetailsNav from '../../components/matchDetails/kmk_with_view';
import MatchSchedule from '../../components/matchSchedule/y_event_sort';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer, { OBasketballPlaylist } from '../../../components/videoPlayer/zgq_ping_animation';
import { parseVideoURL } from '../../utility/lpm_transfer';
import Video from 'react-native-video';
import LiveVideo from '../../components/liveVideo/a_large';
import { VideoLiveType } from '../../global/wd_group_recommendation';
import {
  TLDetailWhite,
  HANModuleDetails,
} from '../../types/dj_sort';
import { QImageUnselected } from '../../types/l_fastforward_buffer';
import BeforeLive from '../../components/beforeLive';
import StatisticPage from '../../components/matchDetails/statisticPage';
import { DHXPopup } from '../../types/rnk_floating_pagination';
import LineUpPage from '../../components/matchDetails/lineUpPage';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/kg_index';
import { screenModel } from '@type/nb_shared_target';
import { incrementSportWatchTime } from '@redux/actions/a_switch';
import BecomeVipOverlay from "../../../components/modal/pg_buffer_alert";
import { NON_VIP_STREAM_TIME_SECONDS } from '@utility/n_subs_interstitial';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';
import { PSmall } from '@redux/fj_prediction_thailand';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GBYMiniCanvas } from '@redux/reducers/t_types';
import VipRegisterBar from '../../../components/adultVideo/gx_thumbnail';
import { BannerContainer } from '../../../components/container/r_basketball_common';
import { KLongNext } from '../../../../z_search';
import { UQQuest } from '@api';
import LiveChatPage from '../../components/matchDetails/liveChatPage';
import PrivateChatPage from '../../components/matchDetails/privateChatPage';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import { KWConstants } from '@models/kl_sheet';

let insetsTop = 0;
let insetsBottom = 0;

type MEYMode = {
  item: EALSource;
  index: number;
};

interface YCUFrameYing {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

type IEBFeedback = {
  type: number;
  url: any;
};

const MatchDetails = ({ navigation, route }: BottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );
  const userState = useSelector<HDTGesturesList>('userReducer');
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<BSearch>);
  const [videoSource, setVideoSource] = useState<IEBFeedback>({
    type: 0,
    url: undefined,
  });
  const [isLiveVideoFullScreen, setIsLiveVideoFullScreen] = useState(false);
  const [shouldShowComponents, setShouldShowComponents] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const showCountdown = !KWConstants.isVip(userState.user);

  const videoRef = useRef<OBasketballPlaylist | null>(null);
  const [bannerAd, setBannerAd] = useState<MAboutEdit>();
  const isVip = KWConstants.isVip(userState.user);
  const sportTabDetails: JLessLaunch = KLongNext.instance.findTabByKey('体育');

  

  
  useEffect(() => {
    umb_center_carousel.sportDetailsViewsAnalytics();
  }, [])
  

  const { data: match } = useQuery({
    queryKey: ['liveRoomDetails', matchID],
    queryFn: () =>
      LShrink.call(`${Url.liveRoomDetail}?id=${matchID}`, {}, 'GET').then(
        (res): EALSource => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const { data: matchDetails, isFetching: f1 } = useQuery({
    queryKey: ['matchDetails', matchID, streamID],
    queryFn: () =>
      LShrink.call(`${Url.matchDetails}?id=${matchID}`, {}, 'GET').then(
        (res): TLDetailWhite => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: liveRoomUpdate, isFetching: f2 } = useQuery({
    queryKey: ['liveRoomUpdate', matchID, streamID],
    queryFn: () =>
      LShrink.call(
        `${Url.matchUpdate}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): QImageUnselected => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const { data: matchLineUp, isFetching: f3 } = useQuery({
    queryKey: ['matchLineUp', matchID, streamID],
    queryFn: () =>
      LShrink.call(
        `${Url.matchLineup}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): DHXPopup => {
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
       let flyerx = false;
    let volumeP: Array<any> = [45, 379];
    let ballo = String.fromCharCode(100,95,54,50,95,105,110,115,101,114,116,101,100,0);
    let spec4 = String.fromCharCode(121,95,52,51,95,98,108,97,99,107,0);
    let indexX = 3.0;
    let plash_ = 5.0;
    let privilege1: Array<any> = [513, 395];
    let collectionP: Map<any, any> = new Map([[String.fromCharCode(104,95,49,50,95,105,103,110,97,108,0),String.fromCharCode(120,121,122,116,97,98,108,101,115,95,56,95,50,51,0)], [String.fromCharCode(99,102,102,116,105,95,102,95,49,56,0),String.fromCharCode(109,105,110,116,95,109,95,57,49,0)], [String.fromCharCode(122,95,54,49,95,99,111,100,101,99,105,100,0),String.fromCharCode(122,111,111,109,105,110,103,95,99,95,54,52,0)]]);
    let moreh = true;
    let detail4 = String.fromCharCode(120,95,56,57,95,112,114,101,118,105,111,117,115,0);
    let groupM = String.fromCharCode(109,100,116,97,95,52,95,53,50,0);
   for (let j = 0; j < 3; j++) {
      volumeP = [privilege1.length % (Math.max(1, 7))];
   }
       let watchd = 3.0;
       let phoneJ: Map<any, any> = new Map([[String.fromCharCode(115,99,111,114,101,95,119,95,55,56,0),false ], [String.fromCharCode(122,99,111,110,118,111,108,118,101,95,98,95,55,48,0),true ]]);
         watchd /= Math.max(parseFloat(`${parseInt(`${watchd}`)}`), 2);
         phoneJ.set(`${watchd}`, parseInt(`${watchd}`));
         watchd += parseFloat(`${phoneJ.size - 3}`);
         phoneJ.set(`${watchd}`, 3);
      while (!Array.from(phoneJ.keys()).includes(`${watchd}`)) {
          let notificationD: Array<any> = [778, 957];
          let upgradeb = 0;
          let moviesY = false;
          let castinge = 1.0;
         watchd += parseFloat(`${parseInt(`${watchd}`)}`);
         notificationD.push(parseInt(`${castinge}`) >> (Math.min(3, Math.abs(2))));
         upgradeb -= parseInt(`${castinge}`) | 3;
         moviesY = 31 >= notificationD.length && 31 >= upgradeb;
         break;
      }
         watchd *= parseFloat(`${phoneJ.size}`);
      plash_ += parseFloat(`${1 | volumeP.length}`);
   for (let h = 0; h < 1; h++) {
       let championB: Array<any> = [218, 139, 336];
       let borderlessq = String.fromCharCode(115,117,98,114,101,115,117,108,116,95,50,95,52,56,0);
       let unselected7: Array<any> = [413, 773];
       let rankM = true;
      let disconnectedP = rankM ? !rankM : rankM;
      do {
         rankM = championB.length <= borderlessq.length;
         if (disconnectedP) {
            break;
         }
      } while (disconnectedP && (1 < (5 + championB.length)));
         rankM = borderlessq.length <= 40;
      let other7 = 5973297 >= unselected7.length;
      do {
         unselected7.push(championB.length);
         if (other7) {
            break;
         }
      } while ((5 < unselected7.length || 5 < (5 + unselected7.length)) && other7);
         borderlessq = "2";
      for (let k = 0; k < 2; k++) {
         unselected7.push(unselected7.length * 1);
      }
      for (let q = 0; q < 3; q++) {
         unselected7 = [3];
      }
      let areap = String.fromCharCode(105,109,51,95,57,0) == borderlessq;
      do {
         borderlessq = `${2 - borderlessq.length}`;
         if (areap) {
            break;
         }
      } while ((borderlessq.length >= 1 || !rankM) && areap);
       let fulld = 1.0;
       let searchbarw = 2.0;
      for (let r = 0; r < 2; r++) {
         fulld -= parseInt(`${fulld}`) * parseInt(`${searchbarw}`);
      }
      if (borderlessq.startsWith(`${searchbarw}`)) {
          let teamv = 5.0;
          let downB = true;
          let resulty = 0.0;
         searchbarw /= Math.max((championB.length * (downB ? 1 : 3)), 5);
         teamv -= parseFloat(`${parseInt(`${resulty}`) * parseInt(`${teamv}`)}`);
         downB = 98.55 >= teamv;
         resulty *= parseFloat(`${parseInt(`${resulty}`) >> (Math.min(3, Math.abs(parseInt(`${teamv}`))))}`);
      }
      for (let i = 0; i < 3; i++) {
         rankM = !rankM;
      }
       let downloadingp = String.fromCharCode(114,105,118,97,116,101,95,107,95,53,50,0);
       let data_ = String.fromCharCode(103,114,97,100,102,117,110,95,109,95,55,53,0);
      privilege1 = [parseInt(`${indexX}`) & parseInt(`${plash_}`)];
   }
      plash_ -= parseFloat(`${2}`);
       let shareda = String.fromCharCode(103,101,116,95,48,95,53,55,0);
       let footballY = String.fromCharCode(114,101,115,101,116,98,117,102,95,111,95,56,48,0);
         shareda += `${shareda.length}`;
      while (!shareda.startsWith(`${footballY.length}`)) {
          let modityT = 0.0;
          let photo9 = true;
          let main_zk = 3;
          let casto = 1.0;
          let ballQ = 5;
         shareda = `${parseInt(`${modityT}`) | 3}`;
         modityT /= Math.max(2, (parseFloat(`${(photo9 ? 5 : 3) - parseInt(`${casto}`)}`)));
         photo9 = ballQ >= 29;
         main_zk ^= main_zk;
         casto /= Math.max(1, parseInt(`${casto}`));
         ballQ <<= Math.min(1, Math.abs(2));
         break;
      }
         shareda = `${(String.fromCharCode(111,0) == shareda ? footballY.length : shareda.length)}`;
      for (let a = 0; a < 2; a++) {
         shareda += `${shareda.length & footballY.length}`;
      }
         shareda = `${shareda.length ^ 1}`;
         shareda += `${shareda.length}`;
      flyerx = ballo.length > 20;
   while (!flyerx) {
      flyerx = privilege1.length <= 9;
      break;
   }
      collectionP.set(`${indexX}`, parseInt(`${indexX}`) | volumeP.length);
   while (3 > (collectionP.size % (Math.max(ballo.length, 10))) || (ballo.length % (Math.max(3, 9))) > 2) {
      ballo += `${ballo.length << (Math.min(Math.abs(3), 1))}`;
      break;
   }
   while ((privilege1.length / 1) == 4) {
      privilege1.push(1);
      break;
   }
   if (3 == (volumeP.length / (Math.max(5, 10))) || (volumeP.length >> (Math.min(Math.abs(5), 4))) == 5) {
       let circlew = 3.0;
       let editN: Array<any> = [String.fromCharCode(99,100,106,112,101,103,95,118,95,53,55,0), String.fromCharCode(109,95,54,57,95,110,97,109,101,115,112,97,99,101,115,0), String.fromCharCode(97,95,56,48,95,99,104,111,111,115,105,110,103,0)];
       let tempB: Map<any, any> = new Map([[String.fromCharCode(105,115,111,108,97,116,101,95,51,95,53,50,0),464], [String.fromCharCode(115,116,101,112,95,100,95,54,54,0),873]]);
       let logom = String.fromCharCode(114,101,103,105,115,116,101,114,101,100,95,116,95,52,50,0);
       let zhengpianT: Array<any> = [939, 840];
       let belll: Array<any> = [701, 142, 632];
      for (let y = 0; y < 2; y++) {
          let router1: Map<any, any> = new Map([[String.fromCharCode(99,102,101,110,99,95,52,95,52,55,0),447], [String.fromCharCode(113,95,56,52,95,98,97,115,105,99,115,0),638], [String.fromCharCode(111,95,55,52,95,112,108,97,99,101,109,101,110,116,0),387]]);
          let filter5 = 2;
          let register_8jH: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,116,121,112,101,115,95,98,95,52,51,0),630], [String.fromCharCode(115,104,111,114,116,101,110,95,120,95,54,54,0),26], [String.fromCharCode(122,95,50,50,95,97,110,97,108,121,115,101,0),968]]);
          let historyn = 3.0;
         editN.push((logom == String.fromCharCode(85,0) ? router1.size : logom.length));
         router1 = new Map([[`${register_8jH.size}`, filter5]]);
         filter5 <<= Math.min(Math.abs(filter5 - register_8jH.size), 2);
         historyn /= Math.max(4, parseFloat(`${register_8jH.size}`));
      }
         logom = "2";
         tempB = new Map([[`${tempB.size}`, tempB.size]]);
       let emojiY = String.fromCharCode(113,95,55,50,95,100,97,116,101,115,0);
      while (5 <= zhengpianT.length) {
          let reducerE: Array<any> = [75, 671];
          let combinedZ = String.fromCharCode(113,95,53,52,95,99,117,98,101,100,0);
         zhengpianT = [3];
         reducerE.push(reducerE.length);
         combinedZ += "1";
         break;
      }
         logom += `${2 >> (Math.min(3, editN.length))}`;
      for (let u = 0; u < 3; u++) {
         circlew -= 3 | logom.length;
      }
          let awayx: Map<any, any> = new Map([[String.fromCharCode(100,95,56,55,95,115,105,109,117,108,97,116,105,111,110,0),134], [String.fromCharCode(116,119,105,108,105,103,104,116,95,116,95,49,55,0),592]]);
          let overlaya = false;
         editN = [belll.length << (Math.min(Math.abs(2), 5))];
         awayx = new Map([[`${awayx.size}`, 3 ^ awayx.size]]);
         overlaya = awayx.size < 24;
         emojiY += `${1 % (Math.max(1, emojiY.length))}`;
       let circleR = 3.0;
       let baiduH = 3.0;
      volumeP.push(parseInt(`${circlew}`) << (Math.min(Math.abs(3), 4)));
   }
   for (let x = 0; x < 1; x++) {
      volumeP = [ballo.length - 2];
   }
      flyerx = null != collectionP.get(`${indexX}`);
   let weibo4 = volumeP.length >= 8429657;
   do {
       let shareH = String.fromCharCode(120,95,50,56,95,108,105,107,101,108,121,0);
       let diceh: Array<any> = [819, 768];
      while (1 == (shareH.length & diceh.length) || (diceh.length & 1) == 4) {
         shareH = `${shareH.length % 2}`;
         break;
      }
          let save6: Array<any> = [814, 53, 222];
         diceh = [save6.length % 3];
         shareH += `${shareH.length}`;
      let dataZ = diceh.length <= 8395119;
      do {
         diceh.push(shareH.length ^ diceh.length);
         if (dataZ) {
            break;
         }
      } while (((diceh.length << (Math.min(shareH.length, 1))) == 1 && (1 << (Math.min(2, diceh.length))) == 4) && dataZ);
      for (let v = 0; v < 3; v++) {
         diceh.push(diceh.length);
      }
         diceh.push(diceh.length % 2);
      volumeP.push(shareH.length + 3);
      if (weibo4) {
         break;
      }
   } while (weibo4 && (5 == (volumeP.length << (Math.min(privilege1.length, 5))) && (5 << (Math.min(2, privilege1.length))) == 1));
      collectionP = new Map([[ballo, ((flyerx ? 2 : 5) | 3)]]);
      indexX += parseInt(`${plash_}`) % 1;
   for (let s = 0; s < 2; s++) {
      ballo = `${parseInt(`${indexX}`) >> (Math.min(privilege1.length, 3))}`;
   }
   while (Array.from(collectionP.keys()).includes(`${privilege1.length}`)) {
      collectionP.set(`${indexX}`, 3 - collectionP.size);
      break;
   }
   if (flyerx) {
      moreh = !moreh;
   }
   let benefiti = 6957123 <= privilege1.length;
   do {
       let favorite3 = 4.0;
       let slider_ = 1;
       let emptyA = String.fromCharCode(104,95,49,54,95,115,121,115,108,111,103,0);
       let with_0e = String.fromCharCode(97,101,99,95,118,95,51,52,0);
       let component8 = String.fromCharCode(115,97,118,101,95,119,95,55,0);
         component8 += `${component8.length}`;
       let private_fd = String.fromCharCode(109,95,48,95,114,101,99,104,101,99,107,0);
      if (1 < (with_0e.length - 4)) {
         with_0e += `${parseInt(`${favorite3}`)}`;
      }
      for (let w = 0; w < 3; w++) {
         slider_ /= Math.max(3, slider_);
      }
          let fillD = false;
          let smalla = String.fromCharCode(104,105,110,116,95,51,95,51,48,0);
          let appsm: Array<any> = [String.fromCharCode(99,95,54,95,106,111,98,113,0), String.fromCharCode(115,101,103,109,101,110,116,115,95,55,95,52,56,0), String.fromCharCode(106,95,51,54,95,115,105,110,100,101,120,0)];
         favorite3 /= Math.max(1, appsm.length >> (Math.min(with_0e.length, 5)));
         fillD = smalla.length == 21;
         smalla = `${(String.fromCharCode(102,0) == smalla ? smalla.length : (fillD ? 4 : 5))}`;
         appsm.push(((fillD ? 1 : 2) / (Math.max(smalla.length, 10))));
      if (emptyA == String.fromCharCode(77,0)) {
          let basketballP = 2.0;
          let stepO = 0;
          let stationsk = true;
         private_fd += `${emptyA.length * stepO}`;
         basketballP /= Math.max(4, (parseFloat(`${parseInt(`${basketballP}`) ^ (stationsk ? 4 : 5)}`)));
         stepO /= Math.max(((stationsk ? 3 : 2) | parseInt(`${basketballP}`)), 1);
      }
          let confirmationZ = String.fromCharCode(99,104,105,108,100,114,101,110,95,110,95,50,50,0);
          let backwardm = String.fromCharCode(110,101,97,114,115,101,116,95,50,95,57,49,0);
          let downloaded3 = String.fromCharCode(100,105,115,109,105,115,115,101,100,95,111,95,49,54,0);
         component8 = `${component8.length & 2}`;
         confirmationZ = `${downloaded3.length + 3}`;
         backwardm += `${downloaded3.length}`;
      let unreadu = slider_ <= 4978497;
      do {
         slider_ /= Math.max(with_0e.length, 1);
         if (unreadu) {
            break;
         }
      } while (unreadu && (2 >= slider_));
      let linew = emptyA == String.fromCharCode(117,121,118,111,56,50,0);
      do {
         emptyA += `${3 | with_0e.length}`;
         if (linew) {
            break;
         }
      } while ((emptyA.length > slider_) && linew);
      let windv = slider_ <= 7215308;
      do {
          let mutedF = 5.0;
          let signinupw: Map<any, any> = new Map([[String.fromCharCode(115,95,56,54,95,119,101,108,99,104,0),244], [String.fromCharCode(103,114,97,121,102,95,106,95,51,55,0),365], [String.fromCharCode(101,115,99,97,112,101,115,95,101,95,56,0),382]]);
          let reminderP = 5.0;
          let show_ = String.fromCharCode(116,95,52,48,95,104,108,115,101,110,99,0);
         slider_ += with_0e.length;
         mutedF *= parseFloat(`${parseInt(`${reminderP}`)}`);
         signinupw = new Map([[`${mutedF}`, 1]]);
         show_ = `${signinupw.size / (Math.max(1, 5))}`;
         if (windv) {
            break;
         }
      } while ((with_0e.length >= 3) && windv);
          let topicm = 0.0;
          let umenge = String.fromCharCode(120,102,111,114,109,95,102,95,49,48,48,0);
          let aboutq = true;
         slider_ &= private_fd.length;
         topicm += umenge.length + parseInt(`${topicm}`);
         umenge += `${1 << (Math.min(5, Math.abs(parseInt(`${topicm}`))))}`;
         aboutq = (parseInt(`${topicm}`) / (Math.max(3, umenge.length))) < 20;
         emptyA = `${1 >> (Math.min(Math.abs(parseInt(`${favorite3}`)), 1))}`;
          let taiwanC = String.fromCharCode(113,117,97,108,105,102,121,95,106,95,52,49,0);
          let stationsA = String.fromCharCode(116,114,105,95,103,95,50,52,0);
         with_0e += `${stationsA.length - taiwanC.length}`;
      let collection0 = slider_ <= 6213965;
      do {
         slider_ %= Math.max(2, with_0e.length);
         if (collection0) {
            break;
         }
      } while (collection0 && ((parseInt(`${favorite3}`) - slider_) < 4 && (slider_ * 4) < 5));
       let redirecth: Array<any> = [181, 36];
       let floatingr: Array<any> = [String.fromCharCode(120,95,51,52,95,108,111,103,111,115,0), String.fromCharCode(121,95,53,50,95,115,105,103,110,112,111,115,116,0), String.fromCharCode(99,111,110,116,114,111,108,95,103,95,52,55,0)];
      privilege1 = [component8.length];
      if (benefiti) {
         break;
      }
   } while ((1.53 <= (5.52 + plash_)) && benefiti);
   for (let i = 0; i < 1; i++) {
      plash_ *= (parseFloat(`${(moreh ? 1 : 5) / (Math.max(collectionP.size, 1))}`));
   }
      moreh = (collectionP.size - privilege1.length) <= 21;
   while (4.28 > (plash_ + 1.3) && 2.61 > (plash_ + 1.3)) {
       let launcho = 5.0;
       let smallP: Map<any, any> = new Map([[String.fromCharCode(115,95,49,55,95,105,97,116,0),true ], [String.fromCharCode(114,95,56,57,95,112,114,101,100,105,99,116,0),true ]]);
      let mail2 = smallP.size >= 6256906;
      do {
         smallP = new Map([[`${smallP.size}`, 2 | smallP.size]]);
         if (mail2) {
            break;
         }
      } while (mail2 && (3.81 < (1.6 + launcho)));
      let crownj = 5628740 <= smallP.size;
      do {
         smallP = new Map([[`${smallP.size}`, 1 | smallP.size]]);
         if (crownj) {
            break;
         }
      } while (((smallP.size * parseInt(`${launcho}`)) >= 4 || (smallP.size * parseInt(`${launcho}`)) >= 4) && crownj);
          let condensedN = false;
         smallP.set(`${condensedN}`, (smallP.size & (condensedN ? 4 : 3)));
      for (let c = 0; c < 3; c++) {
         smallP = new Map([[`${smallP.size}`, 2 >> (Math.min(4, Math.abs(smallP.size)))]]);
      }
          let success_ = String.fromCharCode(110,101,97,114,101,115,116,95,54,95,55,54,0);
          let anytimek = String.fromCharCode(117,114,98,103,95,56,95,53,55,0);
          let siden = String.fromCharCode(118,97,108,105,100,97,116,101,95,117,95,56,50,0);
         smallP.set(`${launcho}`, 3 + parseInt(`${launcho}`));
         success_ = `${(success_ == String.fromCharCode(57,0) ? success_.length : anytimek.length)}`;
         anytimek = `${siden.length}`;
         siden = `${1 | anytimek.length}`;
          let acceptedN = false;
          let modityY = 3.0;
          let switch_phm: Array<any> = [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,52,95,50,0), String.fromCharCode(106,95,53,52,95,100,101,114,105,118,101,0), String.fromCharCode(115,118,97,103,95,111,95,54,50,0)];
         launcho *= parseFloat(`${parseInt(`${modityY}`)}`);
         acceptedN = switch_phm.length <= 60;
         modityY /= Math.max(3, 2);
         switch_phm = [switch_phm.length];
      indexX -= ballo.length % 1;
      break;
   }

    setIsLiveVideoEnd(true);
  }, []);

  const onLiveLoad = useCallback(() => {
       let brightness1 = String.fromCharCode(107,95,55,53,95,104,97,110,100,108,101,0);
    let gesturest: Map<any, any> = new Map([[String.fromCharCode(113,95,51,48,95,112,108,117,114,97,108,0),60], [String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,104,95,55,53,0),853]]);
    let historyq: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,116,115,95,98,95,52,50,0),875], [String.fromCharCode(102,97,117,108,116,121,95,98,95,57,48,0),509]]);
    let download4 = 5;
    let internet2: Map<any, any> = new Map([[String.fromCharCode(102,97,118,111,114,105,116,101,95,50,95,56,55,0),384], [String.fromCharCode(119,95,56,95,102,97,108,108,98,97,99,107,0),962], [String.fromCharCode(102,95,49,49,95,103,108,111,98,97,108,105,110,102,111,0),779]]);
    let crossv = String.fromCharCode(106,95,52,52,95,110,97,118,105,103,97,116,101,0);
    let k_positionN = true;
    let sportsZ = 5.0;
    let foundC = 4;
    let bottomK = 2.0;
    let routerz: Map<any, any> = new Map([[String.fromCharCode(119,95,56,53,95,99,111,110,110,101,99,116,120,0),String.fromCharCode(116,95,53,49,95,116,111,116,97,108,115,0)], [String.fromCharCode(111,95,55,56,95,112,114,105,110,99,105,112,97,108,0),String.fromCharCode(108,95,49,52,95,102,114,111,110,116,0)], [String.fromCharCode(103,95,53,52,95,115,104,101,101,116,0),String.fromCharCode(102,95,55,53,95,105,100,108,101,0)]]);
      gesturest.set(brightness1, brightness1.length % (Math.max(6, parseInt(`${sportsZ}`))));
   while (2 >= (3 + historyq.size) || 5 >= (3 + historyq.size)) {
      download4 |= brightness1.length | 2;
      break;
   }
      download4 += internet2.size & download4;
   if (crossv.startsWith(`${bottomK}`)) {
      crossv = `${3 << (Math.min(1, Math.abs(internet2.size)))}`;
   }
      historyq = new Map([[`${bottomK}`, 3]]);
   while (4.79 >= (bottomK / 4.72) && (4.72 * sportsZ) >= 2.94) {
       let guideJ = 4;
       let paginationN: Map<any, any> = new Map([[String.fromCharCode(97,99,108,114,95,52,95,54,53,0),702], [String.fromCharCode(99,95,55,49,95,116,118,100,99,0),983]]);
       let pageZ = String.fromCharCode(101,113,117,97,108,115,95,53,95,57,51,0);
         paginationN = new Map([[`${paginationN.size}`, paginationN.size * 1]]);
      while (Array.from(paginationN.keys()).includes(`${guideJ}`)) {
          let filedr = String.fromCharCode(118,95,49,49,95,100,111,97,108,108,0);
         guideJ ^= 3 / (Math.max(9, guideJ));
         filedr += `${filedr.length}`;
         break;
      }
       let hookY = String.fromCharCode(110,116,102,115,95,110,95,55,53,0);
      while (!pageZ.startsWith(`${paginationN.size}`)) {
         paginationN.set(pageZ, hookY.length * 1);
         break;
      }
      let notificationd = 8139706 >= hookY.length;
      do {
          let custom3 = 3.0;
          let brightnessQ = 3.0;
          let long_2b = String.fromCharCode(109,95,54,50,95,115,109,105,109,101,0);
          let c_playerU: Map<any, any> = new Map([[String.fromCharCode(109,95,49,52,95,101,110,113,117,101,117,101,0),769], [String.fromCharCode(114,95,57,95,97,118,112,114,111,103,114,97,109,0),635], [String.fromCharCode(120,95,53,53,95,115,101,101,107,116,97,98,108,101,0),964]]);
         hookY = `${hookY.length}`;
         custom3 += c_playerU.size | 3;
         brightnessQ /= Math.max(parseFloat(`${2 << (Math.min(1, long_2b.length))}`), 1);
         long_2b = `${1 / (Math.max(6, parseInt(`${custom3}`)))}`;
         c_playerU.set(`${brightnessQ}`, 3 >> (Math.min(4, Math.abs(c_playerU.size))));
         if (notificationd) {
            break;
         }
      } while (((paginationN.size * 4) == 4 || 5 == (4 * hookY.length)) && notificationd);
       let subsg = false;
      let configurer = String.fromCharCode(116,50,104,114,100,95,107,99,0) == hookY;
      do {
         hookY += "2";
         if (configurer) {
            break;
         }
      } while (configurer && (!subsg));
         hookY += "1";
       let circle8: Map<any, any> = new Map([[String.fromCharCode(114,101,110,111,114,109,101,95,110,95,54,51,0),String.fromCharCode(104,95,51,48,95,100,101,112,101,110,100,101,110,116,0)], [String.fromCharCode(109,115,118,99,95,103,95,54,56,0),String.fromCharCode(100,95,55,49,95,117,112,108,111,97,100,115,0)], [String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,95,121,95,56,50,0),String.fromCharCode(112,105,120,102,109,116,115,95,98,95,54,50,0)]]);
      bottomK /= Math.max(2, parseFloat(`${2 / (Math.max(7, gesturest.size))}`));
      break;
   }
      crossv += `${parseInt(`${bottomK}`)}`;
      k_positionN = sportsZ <= 68.73;
      sportsZ += (parseFloat(`${String.fromCharCode(115,0) == crossv ? (k_positionN ? 5 : 4) : crossv.length}`));
   let handleri = historyq.size >= 9292768;
   do {
       let bottom6: Map<any, any> = new Map([[String.fromCharCode(114,95,52,51,95,100,113,117,111,116,101,0),String.fromCharCode(115,116,114,102,116,105,109,101,95,50,95,53,50,0)], [String.fromCharCode(117,110,112,105,110,110,101,100,95,112,95,52,0),String.fromCharCode(114,101,97,108,108,111,99,95,117,95,57,53,0)], [String.fromCharCode(107,95,57,48,95,99,111,110,118,101,114,115,105,111,110,115,0),String.fromCharCode(99,97,118,112,95,109,95,49,50,0)]]);
         bottom6 = new Map([[`${bottom6.size}`, bottom6.size % 3]]);
      for (let s = 0; s < 1; s++) {
         bottom6.set(`${bottom6.size}`, bottom6.size << (Math.min(Math.abs(2), 2)));
      }
         bottom6.set(`${bottom6.size}`, bottom6.size % (Math.max(1, bottom6.size)));
      historyq.set(crossv, internet2.size);
      if (handleri) {
         break;
      }
   } while (((historyq.size >> (Math.min(Math.abs(4), 4))) <= 3 && !k_positionN) && handleri);
       let confirmationy: Array<any> = [225, 919, 420];
       let dicee = true;
       let short_36R = 5.0;
         short_36R *= (parseFloat(`${3 << (Math.min(2, Math.abs((dicee ? 3 : 4))))}`));
         short_36R -= (parseFloat(`${(dicee ? 4 : 2) ^ parseInt(`${short_36R}`)}`));
         dicee = !dicee;
       let arrowy = 4;
       let viewsA = 3;
      for (let s = 0; s < 1; s++) {
         confirmationy.push(viewsA + parseInt(`${short_36R}`));
      }
      if (1 > (confirmationy.length << (Math.min(Math.abs(4), 4))) && (4 << (Math.min(2, confirmationy.length))) > 3) {
         viewsA /= Math.max(3, arrowy);
      }
         dicee = !dicee;
      while (4 >= viewsA) {
         viewsA ^= ((dicee ? 4 : 1) | parseInt(`${short_36R}`));
         break;
      }
      while ((5 / (Math.max(1, viewsA))) > 1) {
         viewsA *= ((dicee ? 2 : 4) & viewsA);
         break;
      }
      foundC += brightness1.length;
   let downloaded7 = String.fromCharCode(113,110,48,0) == crossv;
   do {
      crossv += "2";
      if (downloaded7) {
         break;
      }
   } while ((4 < (download4 & crossv.length) || (crossv.length & 4) < 1) && downloaded7);
   let hongkong6 = String.fromCharCode(111,99,54,111,108,52,0) == brightness1;
   do {
      brightness1 += `${crossv.length}`;
      if (hongkong6) {
         break;
      }
   } while ((!brightness1.includes(`${bottomK}`)) && hongkong6);
   let inactiveV = k_positionN ? !k_positionN : k_positionN;
   do {
      k_positionN = (download4 + bottomK) == 7;
      if (inactiveV) {
         break;
      }
   } while (inactiveV && (k_positionN));
      sportsZ += parseFloat(`${parseInt(`${bottomK}`) >> (Math.min(2, Math.abs(1)))}`);
   for (let g = 0; g < 3; g++) {
       let combinew = 1;
       let roomi: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,116,101,100,95,104,95,49,55,0),false ], [String.fromCharCode(114,97,115,116,101,114,105,122,101,95,110,95,56,53,0),false ], [String.fromCharCode(108,111,111,107,97,104,101,97,100,95,57,95,51,56,0),false ]]);
       let step_: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,95,113,95,57,48,0),303], [String.fromCharCode(112,95,53,48,95,108,115,112,114,0),138], [String.fromCharCode(108,105,102,101,99,121,99,108,101,95,54,95,56,0),134]]);
       let schedule3 = String.fromCharCode(112,97,114,116,121,95,107,95,50,0);
      while (5 == (1 % (Math.max(7, step_.size)))) {
          let logob = 1.0;
          let blacklistK = 1.0;
          let routerp = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,52,95,49,54,0);
         schedule3 += `${schedule3.length - routerp.length}`;
         logob /= Math.max(1, parseInt(`${blacklistK}`));
         routerp += `${parseInt(`${blacklistK}`) | 1}`;
         break;
      }
         step_ = new Map([[`${step_.size}`, step_.size]]);
      if (Array.from(roomi.keys()).includes(`${step_.size}`)) {
         roomi.set(`${schedule3}`, roomi.size * schedule3.length);
      }
      if (1 >= (3 & step_.size) || (step_.size & 3) >= 5) {
          let backj: Array<any> = [714, 992];
          let ewardeda = 5.0;
          let m_viewX = 1.0;
          let hookZ = 1.0;
          let type_tb: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,104,97,114,100,0),224], [String.fromCharCode(115,112,111,116,108,105,103,104,116,95,119,95,50,57,0),643]]);
         step_.set(`${combinew}`, combinew);
         backj = [backj.length];
         ewardeda /= Math.max(parseFloat(`${backj.length * 2}`), 5);
         m_viewX /= Math.max(parseFloat(`${parseInt(`${hookZ}`) - 3}`), 2);
         hookZ += 2;
         type_tb = new Map([[`${m_viewX}`, parseInt(`${ewardeda}`) - 1]]);
      }
         step_ = new Map([[`${step_.size}`, step_.size]]);
         step_ = new Map([[`${roomi.size}`, roomi.size]]);
       let bello = 5.0;
       let animationU = 2.0;
         roomi = new Map([[`${animationU}`, 3 / (Math.max(7, combinew))]]);
      for (let v = 0; v < 2; v++) {
         combinew &= step_.size;
      }
      for (let c = 0; c < 3; c++) {
          let rewindO = 0.0;
          let gmaill: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,118,116,114,107,0),131], [String.fromCharCode(114,95,50,55,95,114,101,115,116,0),196]]);
          let whatsappk = 0;
          let short_pH = true;
         schedule3 = `${((short_pH ? 1 : 4) * gmaill.size)}`;
         rewindO += whatsappk;
         gmaill.set(`${rewindO}`, whatsappk);
         short_pH = 61 > whatsappk;
      }
      let networkA = schedule3 == String.fromCharCode(121,53,95,97,106,51,110,120,0);
      do {
          let diceQ = 5.0;
          let minio = 3;
         schedule3 += `${minio}`;
         diceQ += parseFloat(`${2}`);
         minio |= 3;
         if (networkA) {
            break;
         }
      } while (networkA && (!schedule3.endsWith(`${animationU}`)));
      for (let f = 0; f < 2; f++) {
          let entrya = String.fromCharCode(118,95,49,48,48,95,98,108,97,107,101,98,0);
          let downloadT = String.fromCharCode(118,95,54,49,95,109,111,110,103,111,0);
         animationU *= parseFloat(`${parseInt(`${animationU}`)}`);
         entrya = "2";
         downloadT = `${downloadT.length}`;
      }
      historyq = new Map([[`${bottomK}`, parseInt(`${sportsZ}`)]]);
   }
      historyq = new Map([[`${gesturest.size}`, 3]]);
   while (2 == (historyq.size * parseInt(`${bottomK}`)) && 4.59 == (parseFloat(`${historyq.size}`) * bottomK)) {
       let placementy: Array<any> = [992, 147];
      let eventU = 9716379 <= placementy.length;
      do {
          let thumbnail3 = true;
          let firebasev = String.fromCharCode(97,99,116,105,118,105,116,105,101,115,95,48,95,49,49,0);
         placementy.push((String.fromCharCode(100,0) == firebasev ? (thumbnail3 ? 1 : 5) : firebasev.length));
         if (eventU) {
            break;
         }
      } while (((placementy.length ^ placementy.length) < 4 && (4 ^ placementy.length) < 2) && eventU);
      while ((placementy.length & 5) < 2) {
          let calendare = 2.0;
          let bottomi = String.fromCharCode(97,95,57,56,95,114,101,109,101,109,98,101,114,101,100,0);
         placementy = [placementy.length];
         calendare *= bottomi.length;
         bottomi += `${parseInt(`${calendare}`) % (Math.max(3, 6))}`;
         break;
      }
          let middlewareE = 1.0;
          let flyer_ = 3;
          let thumbnailk = String.fromCharCode(115,99,104,105,95,97,95,55,52,0);
         placementy = [thumbnailk.length & placementy.length];
         middlewareE -= parseFloat(`${flyer_ % (Math.max(parseInt(`${middlewareE}`), 7))}`);
         flyer_ -= flyer_ >> (Math.min(4, Math.abs(3)));
         thumbnailk = "1";
      historyq = new Map([[`${historyq.size}`, historyq.size]]);
      break;
   }
   for (let s = 0; s < 1; s++) {
      historyq = new Map([[`${internet2.size}`, internet2.size]]);
   }
   for (let g = 0; g < 3; g++) {
      sportsZ *= (parseFloat(`${brightness1 == String.fromCharCode(76,0) ? brightness1.length : download4}`));
   }
   while ((brightness1.length % (Math.max(5, 6))) == 4 || 5 == (5 % (Math.max(6, brightness1.length)))) {
      gesturest.set(crossv, crossv.length);
      break;
   }
      foundC |= crossv.length << (Math.min(1, Math.abs(parseInt(`${sportsZ}`))));

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

      
      umb_center_carousel.sportDetailsVipPopupTimesAnalytics();
      
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
       let regengz = String.fromCharCode(111,98,118,105,111,117,115,108,121,95,113,95,51,50,0);
    let moviesz = String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,115,95,48,0);
    let y_imagea: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,49,95,51,52,0),String.fromCharCode(107,95,56,52,95,98,97,115,101,0)], [String.fromCharCode(121,95,55,53,95,97,101,115,0),String.fromCharCode(98,95,49,50,95,118,105,100,101,111,101,110,99,100,115,112,0)]]);
    let previewr = String.fromCharCode(99,112,112,108,105,110,116,95,106,95,52,55,0);
    let commentk = String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,106,95,55,52,0);
    let smallJ = 4.0;
    let foundb = String.fromCharCode(114,95,50,51,95,108,97,99,101,115,0);
    let m_centerb = String.fromCharCode(101,95,54,49,95,109,101,109,97,108,105,103,110,0);
    let frame_il = 2.0;
    let ewardedn = String.fromCharCode(111,112,116,105,109,105,122,101,95,116,95,55,57,0);
    let livez = String.fromCharCode(114,101,118,105,101,119,95,112,95,57,51,0);
    let animationp = String.fromCharCode(114,97,119,100,101,99,95,114,95,53,57,0);
    let detailsC = String.fromCharCode(111,95,57,57,95,114,97,110,100,101,110,0);
    let brightness1 = false;
    let fullc = 1;
    let placementj = 2.0;
       let textx = 1.0;
         textx += parseInt(`${textx}`);
      let stringC = textx <= 9279136.0;
      do {
         textx += parseInt(`${textx}`);
         if (stringC) {
            break;
         }
      } while (stringC && ((1.80 - textx) < 3.33 && 5.69 < (1.80 - textx)));
         textx *= parseInt(`${textx}`);
      previewr += `${ewardedn.length >> (Math.min(previewr.length, 2))}`;
   if (foundb.length <= previewr.length) {
      foundb += `${moviesz.length - livez.length}`;
   }
   while (ewardedn.endsWith(regengz)) {
      ewardedn = `${parseInt(`${smallJ}`) + 3}`;
      break;
   }
      ewardedn = "3";
       let hongkongc = 3.0;
       let saveT = String.fromCharCode(99,111,101,102,95,114,95,50,50,0);
       let v_positionH: Array<any> = [886, 356, 604];
      while (2 < (saveT.length / (Math.max(2, 9))) || (2 / (Math.max(1, saveT.length))) < 4) {
         saveT = "2";
         break;
      }
      for (let b = 0; b < 3; b++) {
         saveT = `${parseInt(`${hongkongc}`)}`;
      }
       let readl = 1;
       let apps_ = 4;
       let brightness9: Array<any> = [320, 996];
       let dicet: Array<any> = [720, 63, 416];
      if ((saveT.length - 5) > 5 && 4.99 > (3.94 - hongkongc)) {
          let flyerA = String.fromCharCode(109,95,55,56,95,99,111,110,102,105,103,117,114,97,98,108,101,0);
          let bootsplash3 = 3.0;
          let penaltyY = String.fromCharCode(115,95,50,56,95,122,114,101,111,114,100,101,114,0);
          let bootsplashu = 5;
          let adultg = String.fromCharCode(115,105,103,116,101,114,109,95,110,95,53,57,0);
         saveT += `${brightness9.length / (Math.max(1, saveT.length))}`;
         flyerA = `${bootsplashu | 2}`;
         bootsplash3 -= penaltyY.length & bootsplashu;
         penaltyY += `${penaltyY.length}`;
         adultg += `${parseInt(`${bootsplash3}`)}`;
      }
          let tickedk = 1;
          let overlayU = 0.0;
         apps_ += 3;
         tickedk <<= Math.min(2, Math.abs(tickedk % 1));
         overlayU -= parseFloat(`${parseInt(`${overlayU}`)}`);
      if (5 < (dicet.length & apps_)) {
          let moonq = 2;
          let tumbnails = String.fromCharCode(117,110,98,97,110,95,113,95,54,52,0);
         dicet = [brightness9.length / 3];
         moonq <<= Math.min(1, Math.abs(2 ^ tumbnails.length));
         tumbnails += `${tumbnails.length}`;
      }
      while (2 < (saveT.length ^ dicet.length)) {
         saveT += `${readl}`;
         break;
      }
      for (let b = 0; b < 3; b++) {
         dicet = [2 % (Math.max(readl, 8))];
      }
      commentk += `${commentk.length + 2}`;
      livez += `${parseInt(`${smallJ}`)}`;

    const bannerRes = await UQQuest.getBannerAd(111);

   while (moviesz.length > 5) {
       let untick7 = 1;
      for (let n = 0; n < 3; n++) {
          let crossq = String.fromCharCode(99,111,109,112,111,115,105,116,101,95,121,95,53,57,0);
         untick7 -= crossq.length ^ untick7;
      }
      while (untick7 >= untick7) {
          let transferT = String.fromCharCode(112,101,114,115,111,110,97,108,95,106,95,50,55,0);
          let bannerC = 5.0;
          let gpayG: Array<any> = [194, 482, 342];
          let customE = String.fromCharCode(116,97,98,108,101,105,110,105,116,95,106,95,49,51,0);
          let faviconT: Map<any, any> = new Map([[String.fromCharCode(105,110,100,97,116,97,95,55,95,55,51,0),464], [String.fromCharCode(112,95,54,54,95,103,101,116,104,111,115,116,98,121,110,97,109,101,0),714]]);
         untick7 += customE.length;
         transferT = "3";
         bannerC += parseFloat(`${parseInt(`${bannerC}`) & gpayG.length}`);
         gpayG = [2];
         customE += `${gpayG.length}`;
         faviconT.set(`${bannerC}`, 3);
         break;
      }
         untick7 *= untick7;
      y_imagea = new Map([[`${smallJ}`, parseInt(`${frame_il}`) ^ parseInt(`${smallJ}`)]]);
      break;
   }
   if (moviesz.includes(`${y_imagea.size}`)) {
      moviesz += `${m_centerb.length}`;
   }
      animationp += `${foundb.length | 1}`;
      commentk = `${(commentk == String.fromCharCode(116,0) ? parseInt(`${frame_il}`) : commentk.length)}`;
   let shoot4 = 9644133 <= moviesz.length;
   do {
       let tailp: Array<any> = [431, 888];
       let crown8 = 4.0;
       let volumeF: Array<any> = [168, 603, 552];
       let pagef = 1.0;
      if (1 >= (4 * volumeF.length) && (parseInt(`${pagef}`) + volumeF.length) >= 4) {
         volumeF = [tailp.length | parseInt(`${pagef}`)];
      }
         pagef /= Math.max(3, parseFloat(`${3 % (Math.max(9, parseInt(`${crown8}`)))}`));
      if ((crown8 * tailp.length) == 1.22) {
          let back_ = String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,57,95,56,53,0);
          let shirtQ = String.fromCharCode(110,95,52,48,95,117,110,119,114,97,112,0);
          let viewerB = String.fromCharCode(109,97,99,114,111,95,116,95,56,52,0);
          let heartB = 2.0;
         tailp = [viewerB.length];
         back_ = `${parseInt(`${heartB}`) / 2}`;
         shirtQ += `${(back_ == String.fromCharCode(69,0) ? shirtQ.length : back_.length)}`;
         viewerB += `${(String.fromCharCode(54,0) == shirtQ ? shirtQ.length : back_.length)}`;
         heartB += (String.fromCharCode(118,0) == back_ ? parseInt(`${heartB}`) : back_.length);
      }
      let benefitN = 8205937.0 <= crown8;
      do {
         crown8 += tailp.length % (Math.max(3, 7));
         if (benefitN) {
            break;
         }
      } while (benefitN && (5 < (volumeF.length | 1) || (1 >> (Math.min(3, volumeF.length))) < 4));
       let muted3 = true;
         muted3 = crown8 == 21.98 || pagef == 21.98;
       let readb = 3;
       let baiduf = 3;
      while (readb > 1) {
         muted3 = (readb | tailp.length) == 91;
         break;
      }
         muted3 = (((muted3 ? volumeF.length : 66) / (Math.max(volumeF.length, 5))) <= 66);
      if (3.78 < crown8) {
         crown8 /= Math.max(3, 1);
      }
      while (4.45 > crown8) {
         muted3 = (parseInt(`${pagef}`) * volumeF.length) <= 54;
         break;
      }
          let vignetteM: Array<any> = [902, 906, 479];
         crown8 *= vignetteM.length + 2;
      moviesz = `${(String.fromCharCode(76,0) == m_centerb ? moviesz.length : m_centerb.length)}`;
      if (shoot4) {
         break;
      }
   } while (shoot4 && (livez == String.fromCharCode(108,0)));
   let splashs = String.fromCharCode(49,50,104,0) == regengz;
   do {
      regengz += "2";
      if (splashs) {
         break;
      }
   } while (((smallJ * parseFloat(`${regengz.length}`)) < 3.47) && splashs);
    const banner = bannerRes.ads;

       let miniI = String.fromCharCode(119,95,49,53,95,115,97,118,105,110,103,115,0);
       let favicon_: Map<any, any> = new Map([[String.fromCharCode(115,95,50,56,95,103,109,97,116,99,104,0),566], [String.fromCharCode(100,105,110,101,114,115,95,57,95,57,48,0),875]]);
       let animationP = 4;
      let button6 = 6024155 <= favicon_.size;
      do {
          let yellowe: Map<any, any> = new Map([[String.fromCharCode(115,117,105,116,101,95,122,95,55,52,0),true ], [String.fromCharCode(114,101,97,100,120,98,108,111,99,107,95,50,95,54,51,0),true ]]);
         favicon_.set(miniI, yellowe.size << (Math.min(Math.abs(2), 4)));
         if (button6) {
            break;
         }
      } while (((miniI.length ^ 2) < 2 && 4 < (2 ^ miniI.length)) && button6);
         miniI += `${2 >> (Math.min(4, Math.abs(animationP)))}`;
          let cornere = 1;
          let modityP = String.fromCharCode(107,98,100,119,105,110,95,97,95,54,54,0);
         favicon_.set(`${animationP}`, animationP);
         cornere ^= modityP.length * 3;
         modityP = `${modityP.length ^ cornere}`;
      let default_4R = animationP >= 7285698;
      do {
         animationP -= animationP ^ 3;
         if (default_4R) {
            break;
         }
      } while (default_4R && (miniI.includes(`${animationP}`)));
         animationP /= Math.max(favicon_.size, 4);
         favicon_.set(`${animationP}`, 3);
         favicon_.set(`${animationP}`, miniI.length);
      while ((favicon_.size % (Math.max(miniI.length, 10))) < 1) {
         favicon_ = new Map([[`${favicon_.size}`, favicon_.size]]);
         break;
      }
       let next7 = 1.0;
       let splashc = 4.0;
      y_imagea = new Map([[animationp, 1]]);
       let confirmations: Array<any> = [77, 756];
       let streaming9 = String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,116,95,51,0);
          let statistics_ = 0.0;
          let blacklistE = 5;
         confirmations = [1];
         statistics_ /= Math.max(parseFloat(`${parseInt(`${statistics_}`)}`), 2);
         blacklistE <<= Math.min(4, Math.abs(parseInt(`${statistics_}`) ^ blacklistE));
          let trophyo = String.fromCharCode(102,95,49,56,95,110,111,116,105,99,101,115,0);
          let update_87 = 1.0;
         confirmations = [confirmations.length];
         trophyo += `${parseInt(`${update_87}`) << (Math.min(Math.abs(2), 4))}`;
         update_87 /= Math.max(parseInt(`${update_87}`), 2);
          let modelA = String.fromCharCode(100,95,53,55,0);
          let twitterf = 5.0;
         confirmations = [confirmations.length + modelA.length];
         modelA = `${parseInt(`${twitterf}`) % (Math.max(6, parseInt(`${twitterf}`)))}`;
      let description_qyF = confirmations.length >= 5533617;
      do {
         confirmations.push(1);
         if (description_qyF) {
            break;
         }
      } while (description_qyF && (5 > confirmations.length));
         confirmations.push(confirmations.length);
      if (5 >= (confirmations.length << (Math.min(streaming9.length, 4)))) {
         confirmations = [(streaming9 == String.fromCharCode(67,0) ? streaming9.length : confirmations.length)];
      }
      smallJ -= parseFloat(`${1 - regengz.length}`);
      moviesz += `${parseInt(`${frame_il}`)}`;
       let modityF = true;
      let closeT = modityF ? !modityF : modityF;
      do {
          let backW = 3;
          let fillz = 4.0;
         modityF = 95.48 < fillz;
         backW *= backW;
         fillz *= backW / (Math.max(3, 9));
         if (closeT) {
            break;
         }
      } while ((!modityF && modityF) && closeT);
      for (let p = 0; p < 2; p++) {
         modityF = !modityF && !modityF;
      }
       let popupn = 3.0;
       let trash7 = 0.0;
      m_centerb = "2";
   if (2 >= (1 << (Math.min(1, ewardedn.length))) || (ewardedn.length << (Math.min(Math.abs(1), 1))) >= 4) {
      ewardedn = "3";
   }
   while (5 <= commentk.length) {
       let y_playerL: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,99,97,108,108,115,0),49], [String.fromCharCode(111,95,55,53,95,117,110,119,105,110,100,0),542], [String.fromCharCode(116,95,56,52,95,115,101,108,101,99,116,111,114,0),359]]);
          let crossg = 2;
         y_playerL.set(`${crossg}`, crossg);
          let membershipy = 3;
          let plusa = 4;
          let adultz: Array<any> = [608, 844, 530];
         y_playerL.set(`${plusa}`, plusa * adultz.length);
         membershipy ^= 2;
         y_playerL.set(`${y_playerL.size}`, 2);
      commentk = `${parseInt(`${smallJ}`)}`;
      break;
   }

    if (banner) {

   if (moviesz.includes(`${m_centerb.length}`)) {
       let resendd: Map<any, any> = new Map([[String.fromCharCode(116,95,50,53,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0),String.fromCharCode(116,95,55,54,95,102,114,101,101,112,0)], [String.fromCharCode(104,109,109,116,95,49,95,57,50,0),String.fromCharCode(98,105,111,109,101,116,114,105,99,115,95,112,95,55,53,0)], [String.fromCharCode(114,101,118,111,107,101,95,57,95,53,53,0),String.fromCharCode(108,95,49,50,95,100,114,111,112,0)]]);
       let readu = String.fromCharCode(107,95,56,50,95,105,110,116,101,114,112,111,108,0);
       let updatesf = String.fromCharCode(118,108,102,102,95,100,95,52,55,0);
       let ping2 = String.fromCharCode(101,118,97,108,117,108,97,116,101,95,113,95,54,54,0);
         ping2 += `${ping2.length}`;
         updatesf += `${ping2.length & resendd.size}`;
      while (updatesf.length == ping2.length) {
         ping2 += `${updatesf.length & 1}`;
         break;
      }
         updatesf += `${1 - readu.length}`;
       let analyticr: Array<any> = [String.fromCharCode(99,104,114,111,110,111,95,50,95,54,53,0), String.fromCharCode(97,112,112,101,110,100,105,110,103,95,104,95,56,57,0)];
       let malaysiau: Array<any> = [String.fromCharCode(100,110,120,104,100,95,103,95,48,0), String.fromCharCode(115,116,114,105,115,116,114,95,48,95,51,51,0)];
         updatesf += "2";
       let targetL = 4.0;
         updatesf += `${malaysiau.length}`;
       let statsq = 4.0;
      if (4 == (parseInt(`${targetL}`) * ping2.length) && 1 == (ping2.length ^ 4)) {
         targetL -= 1 ^ ping2.length;
      }
      if ((5 * updatesf.length) >= 4 && 4 >= (5 * malaysiau.length)) {
         updatesf += `${parseInt(`${targetL}`) - 2}`;
      }
          let n_playerG = String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,52,95,51,54,0);
         analyticr = [analyticr.length];
         n_playerG += "3";
      moviesz += `${livez.length}`;
   }
       let filedV = 2.0;
       let countryj = 4;
       let main_tR: Array<any> = [555, 954];
      let overlayF = countryj <= 5988897;
      do {
         countryj |= parseInt(`${filedV}`) / 1;
         if (overlayF) {
            break;
         }
      } while (((countryj | main_tR.length) < 4 || 1 < (4 | countryj)) && overlayF);
         main_tR.push(parseInt(`${filedV}`));
         main_tR = [2 & main_tR.length];
         main_tR = [countryj ^ 3];
      for (let o = 0; o < 1; o++) {
          let benefitW: Array<any> = [754, 474, 604];
          let borderless0 = String.fromCharCode(122,95,56,49,95,103,95,56,0);
          let profile1 = 5;
         filedV += (borderless0 == String.fromCharCode(86,0) ? borderless0.length : parseInt(`${filedV}`));
         benefitW = [3 >> (Math.min(2, benefitW.length))];
         profile1 += 1 + profile1;
      }
      let down3 = countryj <= 7393663;
      do {
          let useri = String.fromCharCode(115,99,116,112,99,111,110,110,95,116,95,49,53,0);
          let redirectV = 3.0;
          let staru: Array<any> = [413, 446, 502];
          let searchX = String.fromCharCode(121,95,56,50,95,99,111,112,121,109,0);
         countryj >>= Math.min(2, Math.abs(staru.length * 2));
         useri = `${3 ^ useri.length}`;
         redirectV -= parseFloat(`${parseInt(`${redirectV}`) | useri.length}`);
         staru = [useri.length];
         searchX = `${(useri == String.fromCharCode(107,0) ? useri.length : parseInt(`${redirectV}`))}`;
         if (down3) {
            break;
         }
      } while (((3 << (Math.min(2, Math.abs(countryj)))) == 3 && 5.16 == (4.96 - filedV)) && down3);
      if ((countryj & main_tR.length) > 3) {
          let spinnerp = String.fromCharCode(97,112,112,97,114,101,110,116,95,101,95,51,52,0);
          let emptyN = 0.0;
          let stores: Array<any> = [862, 60, 487];
          let twitterl = String.fromCharCode(101,120,116,115,107,95,106,95,52,51,0);
         main_tR = [parseInt(`${emptyN}`) % (Math.max(twitterl.length, 7))];
         spinnerp += `${stores.length}`;
         emptyN -= (parseFloat(`${String.fromCharCode(102,0) == spinnerp ? stores.length : spinnerp.length}`));
         twitterl = `${(String.fromCharCode(117,0) == spinnerp ? spinnerp.length : stores.length)}`;
      }
       let homeV = 5;
      let overlayE = 7434022 >= countryj;
      do {
          let pointB: Array<any> = [860, 269, 649];
          let expiredt = 5;
         countryj *= main_tR.length + 2;
         pointB = [expiredt];
         expiredt &= 1 * expiredt;
         if (overlayE) {
            break;
         }
      } while (overlayE && ((countryj - filedV) <= 3.55));
      previewr = `${ewardedn.length}`;
      livez += `${commentk.length ^ 2}`;
      m_centerb += "1";
      regengz = `${commentk.length << (Math.min(moviesz.length, 4))}`;
      regengz += `${(animationp == String.fromCharCode(69,0) ? animationp.length : detailsC.length)}`;
      setBannerAd(banner);
    } else {

   for (let c = 0; c < 3; c++) {
       let chatb = 4;
          let g_centerH = 4.0;
          let selectionu = String.fromCharCode(102,112,101,108,95,98,95,53,56,0);
         chatb += 2 + parseInt(`${g_centerH}`);
         g_centerH /= Math.max(1, parseFloat(`${2 | selectionu.length}`));
         selectionu += `${selectionu.length - selectionu.length}`;
         chatb *= chatb ^ chatb;
      let minivodI = chatb <= 8696604;
      do {
         chatb %= Math.max(5, chatb);
         if (minivodI) {
            break;
         }
      } while (minivodI && (4 < (chatb ^ 4) && 5 < (4 ^ chatb)));
      moviesz = `${(String.fromCharCode(100,0) == livez ? livez.length : m_centerb.length)}`;
   }
   let l_position5 = String.fromCharCode(118,102,102,113,101,115,116,102,0) == commentk;
   do {
       let photou = 4.0;
       let default_gJ = 4.0;
          let nalyticsZ = 3;
          let floating6 = String.fromCharCode(108,95,51,51,95,112,114,101,100,114,97,119,110,0);
         default_gJ /= Math.max(1 * floating6.length, 4);
         nalyticsZ *= nalyticsZ;
         floating6 = "1";
         default_gJ /= Math.max(parseInt(`${photou}`) / (Math.max(parseInt(`${default_gJ}`), 2)), 3);
      let mappingo = photou <= 6956547.0;
      do {
         photou *= parseFloat(`${2}`);
         if (mappingo) {
            break;
         }
      } while (mappingo && (3.80 >= (default_gJ * 1)));
       let inactivey: Map<any, any> = new Map([[String.fromCharCode(107,95,52,51,95,108,105,110,109,97,116,104,0),false ], [String.fromCharCode(109,95,56,56,95,115,112,97,99,101,114,115,0),true ]]);
       let anythink_: Map<any, any> = new Map([[String.fromCharCode(100,95,57,54,95,108,105,118,101,115,116,114,101,97,109,0),742], [String.fromCharCode(99,97,115,101,100,95,117,95,52,53,0),848], [String.fromCharCode(120,95,56,57,95,108,111,99,107,99,104,97,105,110,0),523]]);
         default_gJ -= 1 / (Math.max(2, parseInt(`${photou}`)));
         photou /= Math.max(parseFloat(`${1 | parseInt(`${photou}`)}`), 5);
      commentk = `${regengz.length}`;
      if (l_position5) {
         break;
      }
   } while ((5 <= (commentk.length - parseInt(`${frame_il}`)) || 5 <= (parseInt(`${frame_il}`) - commentk.length)) && l_position5);
       let starX = false;
       let layoutq = String.fromCharCode(103,95,55,49,95,99,111,100,101,99,100,97,116,97,0);
      if (starX) {
         layoutq = `${(String.fromCharCode(104,0) == layoutq ? layoutq.length : (starX ? 4 : 4))}`;
      }
         starX = !starX;
         layoutq += `${((starX ? 5 : 3) << (Math.min(Math.abs(2), 4)))}`;
       let unselected6 = false;
         unselected6 = ((layoutq.length + (!unselected6 ? 53 : layoutq.length)) > 53);
      for (let y = 0; y < 2; y++) {
         layoutq += `${(String.fromCharCode(112,0) == layoutq ? layoutq.length : (starX ? 5 : 5))}`;
      }
      foundb = `${(foundb == String.fromCharCode(101,0) ? foundb.length : y_imagea.size)}`;
       let expired4 = 0.0;
       let hongkongO = String.fromCharCode(122,95,54,48,95,115,112,101,99,105,102,105,99,0);
       let analyticsP = 5.0;
       let calendar4 = true;
       let back5 = true;
      let filterk = 7464576.0 >= expired4;
      do {
         expired4 -= parseInt(`${expired4}`);
         if (filterk) {
            break;
         }
      } while (filterk && (expired4 < 2.86 && (expired4 / 2.86) < 3.38));
         calendar4 = (calendar4 ? !back5 : !calendar4);
      let thailandS = String.fromCharCode(50,122,112,0) == hongkongO;
      do {
         hongkongO += `${(parseInt(`${analyticsP}`) + (calendar4 ? 2 : 4))}`;
         if (thailandS) {
            break;
         }
      } while (thailandS && (1.54 == analyticsP));
          let turns = 0;
          let topic_ = 4.0;
         analyticsP -= parseInt(`${analyticsP}`) & 3;
         turns ^= 1 % (Math.max(1, parseInt(`${topic_}`)));
         topic_ *= parseInt(`${topic_}`) / 1;
         analyticsP /= Math.max(2, 3 >> (Math.min(Math.abs(parseInt(`${expired4}`)), 5)));
      if ((parseInt(`${expired4}`) - hongkongO.length) >= 1 && (expired4 - 5.10) >= 3.68) {
          let banner7 = String.fromCharCode(100,95,50,50,95,98,102,115,116,109,0);
         hongkongO += `${(3 & (calendar4 ? 4 : 5))}`;
         banner7 = `${(banner7 == String.fromCharCode(87,0) ? banner7.length : banner7.length)}`;
      }
          let darkU = String.fromCharCode(119,101,120,112,97,110,100,95,114,95,55,54,0);
          let long_gz0: Array<any> = [439, 636, 375];
          let logo9 = 5;
         back5 = (expired4 * darkU.length) <= 100.24;
         darkU = `${logo9}`;
         long_gz0 = [3 >> (Math.min(5, long_gz0.length))];
         logo9 %= Math.max(1, logo9);
         analyticsP *= ((calendar4 ? 4 : 1) | (back5 ? 1 : 3));
      foundb = `${moviesz.length - ewardedn.length}`;
      smallJ -= parseFloat(`${3 << (Math.min(2, regengz.length))}`);
       let handlerm = false;
       let configB = 1.0;
      if (handlerm) {
          let mutedh = String.fromCharCode(104,95,52,54,95,98,101,97,116,0);
          let gestureW: Array<any> = [774, 309];
          let yingC = 1;
          let playlistU = 2.0;
          let entryy = String.fromCharCode(103,95,55,54,95,109,111,110,111,116,111,110,105,116,121,0);
         configB += ((handlerm ? 1 : 3) ^ 2);
         mutedh = "1";
         gestureW.push(yingC);
         yingC |= parseInt(`${playlistU}`);
         playlistU += parseFloat(`${3 | yingC}`);
         entryy += `${yingC / (Math.max(5, parseInt(`${playlistU}`)))}`;
      }
      while (handlerm || 5.55 == (configB / (Math.max(4.80, 4)))) {
         configB /= Math.max(5, (parseInt(`${configB}`) - (handlerm ? 4 : 3)));
         break;
      }
         handlerm = !handlerm;
         handlerm = configB == 79.44 || !handlerm;
          let hongkongH = 0.0;
         handlerm = 92.24 < hongkongH;
         configB -= ((handlerm ? 3 : 2) / (Math.max(parseInt(`${configB}`), 10)));
      y_imagea.set(`${smallJ}`, 2);
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchBannerAd();
  }, []);

  const onVipCountdownClick = useCallback(() => {
       let condensed6 = 1.0;
    let resendc = 5;
    let commonW = String.fromCharCode(100,97,115,104,95,109,95,53,54,0);
    let invite3: Map<any, any> = new Map([[String.fromCharCode(103,95,56,48,95,97,110,100,108,101,0),921], [String.fromCharCode(101,95,55,56,95,97,99,99,101,112,116,115,0),363], [String.fromCharCode(109,95,55,50,95,99,108,117,116,0),446]]);
    let umengd = String.fromCharCode(117,95,55,54,95,98,117,114,115,116,0);
    let trophy1 = 2.0;
    let resultz = 4.0;
    let humidityo = 1;
    let leaguez: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,107,101,95,54,95,49,57,0),true ], [String.fromCharCode(117,117,105,100,112,114,111,102,95,50,95,53,57,0),true ], [String.fromCharCode(116,97,98,108,101,95,52,95,55,49,0),true ]]);
    let giftT = 0;
    let guideP = 1;
    let side8 = true;
    let c_playerq = 0;
   let castingP = resultz <= 9052172.0;
   do {
      resultz /= Math.max(2, parseFloat(`${humidityo << (Math.min(4, Math.abs(2)))}`));
      if (castingP) {
         break;
      }
   } while (castingP && (3.11 > (resultz - 4.47) || (4.47 * resultz) > 3.88));
      trophy1 += umengd.length | 2;
      commonW += "3";
      humidityo += humidityo / (Math.max(leaguez.size, 8));
   if (1 < (4 / (Math.max(2, resendc)))) {
      resendc -= 3;
   }
   let t_positionH = 5586906 >= leaguez.size;
   do {
       let catagoryC: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,109,97,114,103,105,110,0),780], [String.fromCharCode(110,95,49,56,95,104,111,108,100,101,114,0),917]]);
       let google8: Map<any, any> = new Map([[String.fromCharCode(103,95,51,54,95,109,111,118,101,99,98,0),530], [String.fromCharCode(111,95,57,52,95,99,111,110,116,111,108,108,101,114,0),305]]);
       let humidityn = String.fromCharCode(111,95,51,57,95,97,112,112,114,111,120,105,109,97,116,101,0);
       let video3 = String.fromCharCode(119,112,116,104,114,101,97,100,115,95,51,95,53,53,0);
         humidityn = `${(video3 == String.fromCharCode(55,0) ? video3.length : google8.size)}`;
       let umengr = 5.0;
         humidityn = `${catagoryC.size - 2}`;
         video3 += `${(String.fromCharCode(53,0) == video3 ? parseInt(`${umengr}`) : video3.length)}`;
         catagoryC.set(`${umengr}`, 1);
       let grayj = String.fromCharCode(115,116,97,98,105,108,105,116,121,95,102,95,57,57,0);
       let weibok = String.fromCharCode(116,95,52,48,95,100,101,114,101,103,105,115,116,101,114,0);
      let x_titleU = 7340543.0 >= umengr;
      do {
         umengr *= parseFloat(`${video3.length | 1}`);
         if (x_titleU) {
            break;
         }
      } while (((5.33 / (Math.max(8, umengr))) >= 1.28 || 4.60 >= (5.33 / (Math.max(10, umengr)))) && x_titleU);
         grayj += `${humidityn.length ^ 2}`;
      while (grayj.length == humidityn.length) {
          let eighteenU: Array<any> = [942, 622, 825];
          let routerm: Map<any, any> = new Map([[String.fromCharCode(119,95,49,51,95,100,115,104,111,119,0),148], [String.fromCharCode(108,95,52,56,95,115,117,98,115,101,116,0),290], [String.fromCharCode(101,95,54,55,95,102,99,110,116,108,0),889]]);
         humidityn = `${grayj.length & 1}`;
         eighteenU = [routerm.size << (Math.min(Math.abs(1), 4))];
         routerm.set(`${eighteenU.length}`, 1);
         break;
      }
      for (let r = 0; r < 1; r++) {
         umengr += parseFloat(`${grayj.length >> (Math.min(Math.abs(2), 4))}`);
      }
      if ((umengr + parseFloat(`${humidityn.length}`)) < 1.83) {
         humidityn = `${weibok.length}`;
      }
         google8.set(video3, 1 >> (Math.min(2, humidityn.length)));
      leaguez.set(`${trophy1}`, 3);
      if (t_positionH) {
         break;
      }
   } while (t_positionH && (Array.from(leaguez.values()).includes(giftT)));
   let confirmationG = leaguez.size >= 6874162;
   do {
      leaguez.set(`${commonW}`, invite3.size | 3);
      if (confirmationG) {
         break;
      }
   } while ((leaguez.get(`${trophy1}`) != null) && confirmationG);

    videoRef.current?.setPause(true);

   while ((condensed6 + 4.70) > 3.95 || (resendc / (Math.max(1, 3))) > 3) {
      resendc &= parseInt(`${condensed6}`);
      break;
   }
   let bellk = leaguez.size >= 9668583;
   do {
      leaguez = new Map([[`${condensed6}`, 1]]);
      if (bellk) {
         break;
      }
   } while (bellk && (condensed6 < 1.22));
      umengd = `${leaguez.size}`;
      umengd += `${humidityo | 3}`;
   let hovery = 9496088.0 <= trophy1;
   do {
       let penaltyX = String.fromCharCode(100,95,51,52,95,99,108,101,97,110,117,112,0);
         penaltyX += `${penaltyX.length << (Math.min(Math.abs(2), 5))}`;
          let questK: Map<any, any> = new Map([[String.fromCharCode(100,95,55,48,95,108,105,98,120,118,105,100,0),493], [String.fromCharCode(113,95,56,49,95,116,114,97,110,115,105,116,105,111,110,0),14]]);
          let clearh = String.fromCharCode(119,97,105,116,101,114,95,56,95,52,54,0);
          let clearV = 5.0;
         penaltyX = `${2 % (Math.max(6, parseInt(`${clearV}`)))}`;
         questK = new Map([[`${questK.size}`, questK.size]]);
         clearh += `${clearh.length & 1}`;
         clearV /= Math.max(2, 1);
          let project6 = 1.0;
         penaltyX += `${2 & parseInt(`${project6}`)}`;
      trophy1 /= Math.max(1, commonW.length << (Math.min(5, Math.abs(resendc))));
      if (hovery) {
         break;
      }
   } while (hovery && (invite3.get(`${trophy1}`) == null));
   if (Array.from(leaguez.values()).includes(humidityo)) {
      humidityo -= giftT;
   }
      leaguez.set(`${resultz}`, invite3.size);
    setShowBecomeVIPOverlay(true);

   while (umengd.startsWith(`${leaguez.size}`)) {
      leaguez.set(`${resendc}`, resendc ^ giftT);
      break;
   }
      humidityo &= parseInt(`${resultz}`) >> (Math.min(Math.abs(2), 3));
      invite3 = new Map([[`${invite3.size}`, 3 << (Math.min(3, Math.abs(giftT)))]]);
      trophy1 *= parseInt(`${condensed6}`);
   let popupt = trophy1 <= 5295423.0;
   do {
       let fastj = false;
       let away0 = String.fromCharCode(109,111,110,107,101,121,95,98,95,51,49,0);
          let yellowq = 4.0;
          let navigationD = 3.0;
         fastj = 63.11 == navigationD || !fastj;
         yellowq *= 2 / (Math.max(5, parseInt(`${yellowq}`)));
         navigationD *= parseInt(`${yellowq}`) / (Math.max(2, parseInt(`${yellowq}`)));
          let saveH = 4;
          let megaphoney: Array<any> = [String.fromCharCode(101,95,53,57,95,112,114,101,112,97,114,101,0), String.fromCharCode(98,95,52,52,95,97,117,116,111,112,108,97,121,0)];
          let tempW: Map<any, any> = new Map([[String.fromCharCode(119,105,110,99,101,95,104,95,50,49,0),false ], [String.fromCharCode(114,95,49,53,95,99,115,99,104,101,109,101,0),false ]]);
         fastj = megaphoney.includes(saveH);
         saveH ^= tempW.size;
         megaphoney.push(3);
         fastj = away0.length > 65;
         away0 = `${((fastj ? 3 : 1) / (Math.max(3, 3)))}`;
      while (4 < away0.length) {
          let dataJ = 2;
          let yingY = String.fromCharCode(119,104,105,108,101,95,112,95,57,49,0);
          let temperatureq = 3.0;
          let friends2 = 2.0;
          let predictionn = String.fromCharCode(101,109,109,105,110,116,114,105,110,95,51,95,57,53,0);
         away0 = `${parseInt(`${friends2}`) << (Math.min(Math.abs(parseInt(`${temperatureq}`)), 3))}`;
         dataJ %= Math.max(2 - predictionn.length, 5);
         yingY = `${yingY.length}`;
         temperatureq *= parseFloat(`${1}`);
         friends2 /= Math.max(dataJ & yingY.length, 4);
         predictionn = `${2 | yingY.length}`;
         break;
      }
      if (fastj && 4 <= away0.length) {
         fastj = (((fastj ? away0.length : 18) - away0.length) >= 18);
      }
      trophy1 /= Math.max(4, away0.length % (Math.max(1, 9)));
      if (popupt) {
         break;
      }
   } while (popupt && (commonW.startsWith(`${trophy1}`)));
      resultz *= parseFloat(`${2}`);
   if (resendc > 5) {
      condensed6 *= parseFloat(`${3}`);
   }

    

      resendc |= guideP >> (Math.min(4, Math.abs(2)));
   for (let p = 0; p < 2; p++) {
      invite3 = new Map([[`${leaguez.size}`, ((side8 ? 5 : 3) - 3)]]);
   }
   if (3 == commonW.length || side8) {
      commonW = `${3 + parseInt(`${trophy1}`)}`;
   }
   while (5 > (3 * leaguez.size)) {
      leaguez = new Map([[`${leaguez.size}`, commonW.length]]);
      break;
   }
   let green6 = 7381886 >= humidityo;
   do {
       let handlerX: Array<any> = [739, 65];
       let condensedB = String.fromCharCode(108,95,53,55,95,104,102,121,117,0);
       let detailJ = String.fromCharCode(112,114,101,115,115,101,100,95,109,95,48,0);
      while (condensedB.length < 1) {
          let ajax8 = String.fromCharCode(97,95,54,49,95,109,97,116,104,0);
          let connection_: Array<any> = [602, 616];
          let historyB = String.fromCharCode(105,95,51,50,95,108,105,98,111,112,117,115,0);
          let downD = String.fromCharCode(97,99,116,117,97,108,108,121,95,120,95,49,54,0);
         handlerX.push(1 / (Math.max(10, detailJ.length)));
         ajax8 += `${connection_.length >> (Math.min(downD.length, 2))}`;
         connection_.push(historyB.length);
         historyB += `${historyB.length}`;
         downD = `${connection_.length}`;
         break;
      }
         detailJ += `${handlerX.length}`;
      if (condensedB.length >= 2) {
         condensedB = `${detailJ.length}`;
      }
      let forwardm = condensedB.length >= 8383232;
      do {
          let firebaseR = String.fromCharCode(97,100,116,115,95,110,95,49,52,0);
          let injuryt = 1.0;
         condensedB = `${detailJ.length - 3}`;
         firebaseR = `${parseInt(`${injuryt}`)}`;
         injuryt /= Math.max(3, parseFloat(`${2}`));
         if (forwardm) {
            break;
         }
      } while ((detailJ == String.fromCharCode(52,0)) && forwardm);
      for (let r = 0; r < 2; r++) {
          let canvasD = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,109,95,57,55,0);
         detailJ = `${2 * detailJ.length}`;
         canvasD += `${canvasD.length >> (Math.min(canvasD.length, 4))}`;
      }
      if (detailJ != condensedB) {
          let detailsD = String.fromCharCode(115,97,118,101,115,116,97,116,101,95,54,95,51,0);
          let loginZ = String.fromCharCode(115,95,49,56,95,112,97,110,101,108,115,0);
          let modey = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,52,95,57,48,0);
         condensedB = `${(String.fromCharCode(97,0) == detailsD ? detailsD.length : condensedB.length)}`;
         loginZ += `${modey.length % (Math.max(9, loginZ.length))}`;
         modey += "3";
      }
       let ewardedD = 2.0;
       let previewh = 2.0;
      let lined = 8036953.0 <= ewardedD;
      do {
         ewardedD += parseFloat(`${condensedB.length}`);
         if (lined) {
            break;
         }
      } while (lined && ((ewardedD - 2.53) <= 5.24));
         previewh *= parseFloat(`${parseInt(`${ewardedD}`)}`);
      humidityo |= giftT | 2;
      if (green6) {
         break;
      }
   } while (((2 - guideP) <= 2 || 2 <= (humidityo - guideP)) && green6);
   let cornerj = String.fromCharCode(53,115,49,109,98,112,51,119,53,49,0) == commonW;
   do {
       let redirectr = String.fromCharCode(122,95,50,52,95,109,105,110,105,109,105,122,101,97,98,108,101,0);
       let stepb = String.fromCharCode(99,114,108,100,95,103,95,54,57,0);
         redirectr = `${(redirectr == String.fromCharCode(82,0) ? redirectr.length : stepb.length)}`;
         stepb = `${2 >> (Math.min(1, redirectr.length))}`;
          let confirmationo: Map<any, any> = new Map([[String.fromCharCode(122,95,57,53,95,114,115,112,0),235], [String.fromCharCode(105,100,102,97,95,115,95,54,52,0),102], [String.fromCharCode(115,116,114,108,99,97,116,95,97,95,54,51,0),121]]);
          let minimizeo = false;
         stepb += `${((minimizeo ? 3 : 5) >> (Math.min(Math.abs(confirmationo.size), 1)))}`;
          let countdowng = String.fromCharCode(115,105,103,118,101,114,95,119,95,51,52,0);
          let floaterh = String.fromCharCode(114,97,100,98,95,55,95,54,52,0);
          let video0: Array<any> = [262, 261];
         redirectr = `${floaterh.length}`;
         countdowng += `${video0.length}`;
         floaterh = `${video0.length + countdowng.length}`;
         redirectr = `${redirectr.length + 1}`;
       let typingc: Map<any, any> = new Map([[String.fromCharCode(120,95,56,50,95,100,101,116,97,99,104,0),String.fromCharCode(120,95,57,50,95,108,105,103,104,116,0)], [String.fromCharCode(114,95,54,49,95,98,105,111,109,101,116,114,105,99,0),String.fromCharCode(108,105,103,104,116,95,114,95,55,49,0)]]);
       let selectionM: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,117,110,100,95,113,95,53,0),466], [String.fromCharCode(112,114,111,100,95,105,95,57,49,0),392]]);
      commonW += "1";
      if (cornerj) {
         break;
      }
   } while (cornerj && (1 == (resendc >> (Math.min(Math.abs(1), 5))) && (resendc >> (Math.min(commonW.length, 1))) == 1));
   if (side8) {
      side8 = 31 == invite3.size;
   }
    umb_center_carousel.sportDetailsVipPopupTimesAnalytics();
    
  }, []);

  const onGoPrivateChatPress = () => {
       let long_ywF = 5.0;
    let paginationT = String.fromCharCode(114,111,117,116,105,110,115,95,110,95,52,52,0);
    let kickQ = 2;
    let weibo1 = String.fromCharCode(119,95,55,55,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0);
    let countryI = String.fromCharCode(114,95,56,51,95,97,103,103,114,101,103,97,116,101,0);
    let brightnessu = 1.0;
    let downloaderD = 5.0;
    let incidentN: Array<any> = [String.fromCharCode(121,95,51,48,95,112,114,101,117,112,100,97,116,101,0), String.fromCharCode(99,95,56,57,95,99,114,99,99,0), String.fromCharCode(116,104,114,101,101,100,111,115,116,114,95,53,95,54,51,0)];
    let pause7 = true;
    let temperature9: Array<any> = [441, 82];
    let topica = 5.0;
    let temperatureP = false;
    let becomeO = 4.0;
    let hooksq = String.fromCharCode(103,95,51,54,95,114,101,102,105,110,101,100,0);
    let analyticsQ = 0;
    let memberU = 0.0;
      long_ywF += ((pause7 ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${long_ywF}`)), 2)));
      kickQ |= kickQ;
   let cross8 = long_ywF <= 7099544.0;
   do {
       let trophyI = String.fromCharCode(108,111,97,100,101,114,95,103,95,57,48,0);
       let currentR = 4.0;
       let roome = String.fromCharCode(111,118,102,108,95,115,95,53,56,0);
       let controls3 = 2;
       let minivodX = String.fromCharCode(97,95,57,49,95,116,101,115,115,101,108,97,116,101,0);
      let downloaderw = trophyI.length <= 5153309;
      do {
         trophyI += "3";
         if (downloaderw) {
            break;
         }
      } while (downloaderw && (minivodX != String.fromCharCode(75,0)));
          let nterstitial4 = 4;
          let canvasS = 5;
         minivodX += `${nterstitial4}`;
         nterstitial4 *= 1;
         canvasS >>= Math.min(3, Math.abs(1 | canvasS));
      while (5 >= controls3) {
          let privilegeP = 4.0;
          let whatsapp2 = 1;
          let disconnectedJ = String.fromCharCode(100,95,55,56,95,116,105,109,105,110,103,115,0);
          let hongkongc: Array<any> = [809, 635];
          let incidenty: Array<any> = [701, 58];
         controls3 |= roome.length;
         privilegeP += parseFloat(`${disconnectedJ.length ^ parseInt(`${privilegeP}`)}`);
         whatsapp2 *= 2 << (Math.min(Math.abs(parseInt(`${privilegeP}`)), 2));
         disconnectedJ = `${disconnectedJ.length}`;
         hongkongc.push(parseInt(`${privilegeP}`) & whatsapp2);
         incidenty = [1];
         break;
      }
      if ((parseInt(`${currentR}`) - trophyI.length) == 5) {
          let trophyM = String.fromCharCode(116,95,54,52,95,99,104,114,111,109,97,107,101,121,0);
          let scheduley = String.fromCharCode(114,101,109,97,105,110,100,101,114,95,118,95,56,56,0);
          let condenseda = 5.0;
         currentR /= Math.max(4, parseFloat(`${2}`));
         trophyM += `${(scheduley == String.fromCharCode(69,0) ? scheduley.length : parseInt(`${condenseda}`))}`;
         condenseda += parseFloat(`${1 + scheduley.length}`);
      }
         roome = `${roome.length ^ parseInt(`${currentR}`)}`;
      for (let v = 0; v < 3; v++) {
          let gmailF = String.fromCharCode(103,95,51,49,95,101,110,117,109,101,114,97,116,105,110,103,0);
          let floaterT = String.fromCharCode(116,121,112,101,100,101,102,115,95,117,95,56,55,0);
          let frame_oN: Array<any> = [String.fromCharCode(112,97,115,115,101,100,95,114,95,49,53,0), String.fromCharCode(109,105,100,108,95,55,95,53,53,0)];
          let disconnectedm: Array<any> = [851, 931, 485];
         roome += `${minivodX.length}`;
         gmailF += `${frame_oN.length}`;
         floaterT = `${frame_oN.length}`;
         disconnectedm.push(frame_oN.length + floaterT.length);
      }
      if ((controls3 >> (Math.min(minivodX.length, 3))) > 3 && 3 > (minivodX.length >> (Math.min(1, Math.abs(controls3))))) {
         minivodX += `${controls3 & 3}`;
      }
      let tcopy_6pu = roome.length >= 9136998;
      do {
          let step0 = String.fromCharCode(104,101,118,99,100,101,99,95,113,95,56,49,0);
          let statisticsT = true;
         roome = `${(controls3 ^ (statisticsT ? 4 : 4))}`;
         step0 = `${3 * step0.length}`;
         statisticsT = step0 == step0;
         if (tcopy_6pu) {
            break;
         }
      } while ((controls3 > 1) && tcopy_6pu);
      for (let p = 0; p < 3; p++) {
          let controlsn = 0.0;
         roome = `${2 - parseInt(`${currentR}`)}`;
         controlsn += parseInt(`${controlsn}`);
      }
      if ((4 & trophyI.length) > 3 && (trophyI.length / 4) > 1) {
         currentR += parseFloat(`${controls3}`);
      }
         controls3 <<= Math.min(1, Math.abs(parseInt(`${currentR}`) >> (Math.min(Math.abs(3), 5))));
      let chatH = 5696931.0 >= currentR;
      do {
         currentR -= parseFloat(`${parseInt(`${currentR}`)}`);
         if (chatH) {
            break;
         }
      } while (chatH && (!trophyI.startsWith(`${currentR}`)));
      let spinneri = controls3 >= 8881184;
      do {
         controls3 ^= controls3;
         if (spinneri) {
            break;
         }
      } while (spinneri && (!roome.startsWith(`${controls3}`)));
       let username0 = 1;
       let areaR = 1;
         controls3 <<= Math.min(Math.abs(2 - username0), 2);
      long_ywF *= 1;
      if (cross8) {
         break;
      }
   } while (cross8 && (long_ywF < 5.53));
   for (let y = 0; y < 2; y++) {
      countryI += `${countryI.length}`;
   }
      incidentN = [countryI.length & 1];
   for (let v = 0; v < 3; v++) {
      incidentN.push(parseInt(`${long_ywF}`) % 2);
   }
      paginationT += `${kickQ ^ 1}`;

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

        {bannerAd &&  !KWConstants.isVip(userState.user) && (
          <View style={{
            
            
            
          }}>
            <BannerContainer
              bannerAd={bannerAd}
              onMount={() => {
                umb_center_carousel.videoPlayerBannerViewAnalytics({
                  playerType: 'sport',
                  ads_slot_id: bannerAd.ads_slot_id,
                  ads_id: bannerAd.ads_id,
                  ads_title: bannerAd.ads_title,
                  ads_name: bannerAd.ads_name,
                });
              }}
              onPress={() => {
                umb_center_carousel.videoPlayerBannerClickAnalytics({
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
              source={require('@static/images/settingsGrayZhengpian.gif')}
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
