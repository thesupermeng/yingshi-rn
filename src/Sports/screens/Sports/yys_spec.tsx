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
import ScreenContainer from '../../../components/container/yys_matches';
import MainHeader from '../../../components/header/yys_config_penaltygoal_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { yysHomeactive, yysIconviewer, yysSinaStyle } from '@type';
import VodPlaylist from '../../../components/playlist/yys_watchnowbg_interstitial';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import FastImage from '../../../components/common/yys_alert_backwhite';
import yysDisconnectedlogoSwitch from '../../middleware/yys_manifest';
import { Url } from '../../middleware/yys_login';
import { formatMatchDate } from '../../utility/utils';
import { yysFavoriteNetwork, yysLibfollyMember } from '../../types/yys_history_plash';
import MatchDetailsNav from '../../components/matchDetails/yys_gifgoalbg_view';
import MatchSchedule from '../../components/matchSchedule/yys_friends_leaguedetailsbg';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer, { yysLargeQuest } from '../../../components/videoPlayer/yys_colors';
import { parseVideoURL } from '../../utility/yys_philippines';
import Video from 'react-native-video';
import LiveVideo from '../../components/liveVideo/yys_iconchatsend_whiteanimationlive';
import { VideoLiveType } from '../../global/yys_profileinactive_alert';
import {
  yysDicelogoFootballfield,
  yysOrangeclockOthermatchdetailbg,
} from '../../types/yys_iconnointernet_guide';
import { yysTeam } from '../../types/yys_arrow_modules';
import BeforeLive from '../../components/beforeLive';
import StatisticPage from '../../components/matchDetails/statisticPage';
import { yysSuggestionUnimplementedview } from '../../types/yys_favorite';
import LineUpPage from '../../components/matchDetails/lineUpPage';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks';
import { screenModel } from '@type';
import { incrementSportWatchTime } from '@redux';
import BecomeVipOverlay from "../../../components/modal/yys_executor";
import { NON_VIP_STREAM_TIME_SECONDS } from '@utility';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import { yysIconclosewhiteBaiduads } from '@redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { yysDownloadingCombined } from '@redux';
import VipRegisterBar from '../../../components/adultVideo/yys_sheet_goallogo';
import { BannerContainer } from '../../../components/container/yys_whiteanimationlive';
import { yysFloaterIconsubssuccess } from '../../../../yys_yellowscoreball_topon';
import { yysMembership } from '@api';
import LiveChatPage from '../../components/matchDetails/liveChatPage';
import PrivateChatPage from '../../components/matchDetails/privateChatPage';
import { yysIconplaySuggestion } from '@redux';
import { yysIconstar } from '@models';

let insetsTop = 0;
let insetsBottom = 0;

type yysInternetAirbnbstarselected = {
  item: yysFavoriteNetwork;
  index: number;
};

interface yysBgvipsportUimanager {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

type yysPenaltyshootSigninup = {
  type: number;
  url: any;
};

const MatchDetails = ({ navigation, route }: BottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );
  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<yysHomeactive>);
  const [videoSource, setVideoSource] = useState<yysPenaltyshootSigninup>({
    type: 0,
    url: undefined,
  });
  const [isLiveVideoFullScreen, setIsLiveVideoFullScreen] = useState(false);
  const [shouldShowComponents, setShouldShowComponents] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const showCountdown = !yysIconstar.isVip(userState.user);

  const videoRef = useRef<yysLargeQuest | null>(null);
  const [bannerAd, setBannerAd] = useState<yysIconviewer>();
  const isVip = yysIconstar.isVip(userState.user);
  const sportTabDetails: yysSinaStyle = yysFloaterIconsubssuccess.instance.findTabByKey('体育');

  

  
  useEffect(() => {
    yys_giftbutton_footballtrophy.sportDetailsViewsAnalytics();
  }, [])
  

  const { data: match } = useQuery({
    queryKey: ['liveRoomDetails', matchID],
    queryFn: () =>
      yysDisconnectedlogoSwitch.call(`${Url.liveRoomDetail}?id=${matchID}`, {}, 'GET').then(
        (res): yysFavoriteNetwork => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const { data: matchDetails, isFetching: f1 } = useQuery({
    queryKey: ['matchDetails', matchID, streamID],
    queryFn: () =>
      yysDisconnectedlogoSwitch.call(`${Url.matchDetails}?id=${matchID}`, {}, 'GET').then(
        (res): yysDicelogoFootballfield => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: liveRoomUpdate, isFetching: f2 } = useQuery({
    queryKey: ['liveRoomUpdate', matchID, streamID],
    queryFn: () =>
      yysDisconnectedlogoSwitch.call(
        `${Url.matchUpdate}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): yysTeam => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const { data: matchLineUp, isFetching: f3 } = useQuery({
    queryKey: ['matchLineUp', matchID, streamID],
    queryFn: () =>
      yysDisconnectedlogoSwitch.call(
        `${Url.matchLineup}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): yysSuggestionUnimplementedview => {
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
       let shareA: Array<any> = [52, 770];
    let greenq: Map<any, any> = new Map([[String.fromCharCode(118,95,56,53,95,101,110,117,109,101,114,97,116,105,111,110,0),212], [String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,0),485]]);
    let vieweri: Array<any> = [626, 151];
    let icondownimgQ = String.fromCharCode(99,114,101,97,116,101,101,120,0);
    let contextY: Array<any> = [106, 74];
    let libapminsightaW = String.fromCharCode(105,110,115,101,116,0);
    let distP = 2.0;
    let pangleC = true;
    let vipsportn = 2;
    let minivodk = 1.0;
    let iconsaveimagee = String.fromCharCode(114,97,110,103,101,115,0);
    let modelst = String.fromCharCode(100,105,97,108,111,103,117,101,115,0);
   if (!vieweri.includes(vipsportn)) {
      vieweri.push(parseInt(`${minivodk}`));
   }
   while ((iconsaveimagee.length + 2) >= 1 && 2 >= (iconsaveimagee.length + contextY.length)) {
       let interstitials = String.fromCharCode(109,101,116,104,111,100,0);
       let arrowright7 = String.fromCharCode(112,117,108,108,0);
       let basketballtrophyp = true;
       let cancelL = 3;
       let forwardK = 4.0;
          let save0 = String.fromCharCode(99,97,115,101,100,0);
          let tempnodataP = true;
         interstitials = "1";
         save0 += `${((tempnodataP ? 5 : 3))}`;
         tempnodataP = (2 > ((tempnodataP ? save0.length : 2) / (Math.max(save0.length, 9))));
      while (3 == (interstitials.length | 2) && 2 == (interstitials.length | cancelL)) {
         cancelL >>= Math.min(5, Math.abs(((basketballtrophyp ? 3 : 3) * 2)));
         break;
      }
          let libfileL = String.fromCharCode(97,102,102,105,110,105,116,105,101,115,0);
          let values5 = 4;
          let topic1 = true;
         arrowright7 += `${values5}`;
         libfileL = `${((topic1 ? 3 : 4))}`;
         values5 ^= ((topic1 ? 3 : 1) / (Math.max(libfileL.length, 2)));
         forwardK += (parseFloat(`${arrowright7 == String.fromCharCode(56,0) ? arrowright7.length : parseInt(`${forwardK}`)}`));
      if (!basketballtrophyp) {
         cancelL ^= (arrowright7.length % (Math.max(4, (basketballtrophyp ? 2 : 2))));
      }
         forwardK *= (parseFloat(`${arrowright7.length | (basketballtrophyp ? 1 : 3)}`));
         interstitials = `${arrowright7.length & 1}`;
      while (!arrowright7.startsWith(`${cancelL}`)) {
         arrowright7 += `${parseInt(`${forwardK}`) % (Math.max(7, interstitials.length))}`;
         break;
      }
       let spec7 = 1;
         basketballtrophyp = 88 < spec7 && interstitials == String.fromCharCode(86,0);
      for (let f = 0; f < 3; f++) {
          let untickl = String.fromCharCode(109,112,99,104,117,102,102,0);
          let teamQ: Array<any> = [973, 935];
          let graphicsh = String.fromCharCode(101,110,103,108,105,115,104,0);
          let icon2 = 4.0;
         forwardK += parseFloat(`${arrowright7.length & untickl.length}`);
         untickl = `${teamQ.length << (Math.min(graphicsh.length, 3))}`;
         teamQ = [1];
         graphicsh = `${parseInt(`${icon2}`) << (Math.min(3, Math.abs(2)))}`;
         icon2 += parseFloat(`${graphicsh.length + 3}`);
      }
          let subtext4 = String.fromCharCode(112,97,105,100,0);
          let awayteamfielde: Map<any, any> = new Map([[String.fromCharCode(116,95,51,54,95,114,101,97,116,116,97,99,104,0),String.fromCharCode(105,109,112,108,0)], [String.fromCharCode(113,114,99,111,100,101,0),String.fromCharCode(99,104,101,99,107,109,97,114,107,115,95,106,95,50,56,0)], [String.fromCharCode(99,111,112,105,101,115,0),String.fromCharCode(98,105,116,115,104,105,102,116,0)]]);
          let robotoq = 5;
         interstitials += `${spec7 & subtext4.length}`;
         subtext4 += `${awayteamfielde.size % 3}`;
         awayteamfielde.set(`${robotoq}`, robotoq);
      while (3 < (cancelL >> (Math.min(Math.abs(4), 5))) && (cancelL >> (Math.min(Math.abs(4), 1))) < 3) {
         spec7 |= (interstitials == String.fromCharCode(101,0) ? (basketballtrophyp ? 2 : 2) : interstitials.length);
         break;
      }
       let greyarrowupu = String.fromCharCode(101,110,99,111,100,105,110,103,115,95,114,95,50,53,0);
         arrowright7 += `${greyarrowupu.length}`;
      iconsaveimagee = `${(3 >> (Math.min(2, Math.abs((basketballtrophyp ? 2 : 4)))))}`;
      break;
   }
   for (let m = 0; m < 3; m++) {
      icondownimgQ += `${contextY.length}`;
   }
      iconsaveimagee = "3";
   if (4 >= (iconsaveimagee.length * vieweri.length)) {
      iconsaveimagee = `${parseInt(`${distP}`)}`;
   }
       let arrowdown5 = String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,0);
       let umengX = String.fromCharCode(109,117,108,116,105,112,108,121,120,0);
       let audiencex = false;
      for (let g = 0; g < 2; g++) {
          let data4 = 5;
         umengX = `${umengX.length + arrowdown5.length}`;
         data4 >>= Math.min(Math.abs(data4), 2);
      }
      for (let l = 0; l < 3; l++) {
         audiencex = (67 > ((audiencex ? arrowdown5.length : 67) & arrowdown5.length));
      }
          let colorsw = String.fromCharCode(113,95,54,53,95,100,116,111,97,0);
          let eactd = 5;
          let minivodR = 1.0;
         audiencex = !audiencex;
         colorsw = `${colorsw.length}`;
         eactd |= 3;
         minivodR /= Math.max(parseFloat(`${eactd}`), 2);
      for (let a = 0; a < 3; a++) {
          let iconarrowrightwhiteS = 1.0;
          let iconwechatN: Array<any> = [490, 842];
         umengX += `${umengX.length - arrowdown5.length}`;
         iconarrowrightwhiteS *= parseFloat(`${iconwechatN.length + 3}`);
         iconwechatN.push(iconwechatN.length >> (Math.min(4, Math.abs(parseInt(`${iconarrowrightwhiteS}`)))));
      }
      for (let j = 0; j < 2; j++) {
         audiencex = !audiencex;
      }
       let tickedw: Map<any, any> = new Map([[String.fromCharCode(97,115,115,111,99,0),true ], [String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,0),false ], [String.fromCharCode(105,100,119,116,0),true ]]);
       let basketballiconq: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,97,108,105,103,110,0),false ], [String.fromCharCode(114,101,102,112,105,99,0),false ]]);
          let predictionbannery = true;
         umengX += `${basketballiconq.size / (Math.max(arrowdown5.length, 10))}`;
         predictionbannery = (!predictionbannery ? !predictionbannery : predictionbannery);
      while (umengX != arrowdown5) {
          let iconarrowleftC = String.fromCharCode(102,100,101,99,0);
          let statsR = 4.0;
          let whistleorangeS = true;
         arrowdown5 = `${((audiencex ? 1 : 1))}`;
         iconarrowleftC = `${parseInt(`${statsR}`) | 2}`;
         statsR -= parseInt(`${statsR}`) & 3;
         whistleorangeS = (iconarrowleftC.length / (Math.max(8, statsR))) < 59.82;
         break;
      }
      let issubO = audiencex ? !audiencex : audiencex;
      do {
         audiencex = (umengX.length ^ tickedw.size) >= 49;
         if (issubO) {
            break;
         }
      } while (issubO && (arrowdown5.includes(`${audiencex}`)));
      libapminsightaW = `${parseInt(`${minivodk}`) / 2}`;
      vieweri.push(3);
       let sourceZ = 4.0;
      let cancelJ = sourceZ <= 7487629.0;
      do {
          let otherg = String.fromCharCode(115,101,116,116,105,110,103,115,0);
          let const_sN = false;
          let appleR = false;
         sourceZ -= 1;
         otherg = `${otherg.length}`;
         const_sN = otherg == otherg;
         if (cancelJ) {
            break;
         }
      } while (cancelJ && (4.94 < (4 * sourceZ)));
         sourceZ -= parseInt(`${sourceZ}`);
      for (let g = 0; g < 1; g++) {
         sourceZ /= Math.max(3, 1 | parseInt(`${sourceZ}`));
      }
      contextY = [parseInt(`${minivodk}`) * vipsportn];
       let iconstarw = String.fromCharCode(115,111,117,110,100,101,120,0);
      let libturbomodulejsijniv = String.fromCharCode(108,48,51,101,115,117,122,107,0) == iconstarw;
      do {
         iconstarw = `${iconstarw.length}`;
         if (libturbomodulejsijniv) {
            break;
         }
      } while (libturbomodulejsijniv && (4 == iconstarw.length));
         iconstarw = `${(iconstarw == String.fromCharCode(117,0) ? iconstarw.length : iconstarw.length)}`;
         iconstarw += "1";
      vieweri.push(3 + vieweri.length);
       let libavfilterE = String.fromCharCode(97,114,103,120,0);
         libavfilterE = `${libavfilterE.length - 3}`;
       let awayteamfield0 = false;
         libavfilterE += `${libavfilterE.length}`;
      greenq = new Map([[`${distP}`, 3 | parseInt(`${distP}`)]]);
   for (let p = 0; p < 2; p++) {
      icondownimgQ = `${greenq.size & 3}`;
   }
       let watchnowbgL = 1.0;
       let zoomz = String.fromCharCode(116,114,101,110,100,105,110,103,0);
       let iconadslinks = String.fromCharCode(117,110,99,111,114,114,0);
       let footballfield6: Array<any> = [449, 872, 179];
      for (let o = 0; o < 2; o++) {
          let score7: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,121,0),false ], [String.fromCharCode(112,95,56,51,95,97,108,105,103,110,101,114,0),false ], [String.fromCharCode(105,99,101,0),false ]]);
          let loadingB = 3;
         iconadslinks += `${score7.size - loadingB}`;
      }
      for (let s = 0; s < 2; s++) {
         zoomz = `${3 & iconadslinks.length}`;
      }
         footballfield6.push(iconadslinks.length + footballfield6.length);
      if (1.71 == (1.48 * watchnowbgL) || 3 == (footballfield6.length * parseInt(`${watchnowbgL}`))) {
         watchnowbgL -= iconadslinks.length << (Math.min(Math.abs(1), 5));
      }
         iconadslinks = `${footballfield6.length}`;
         watchnowbgL -= footballfield6.length;
      while (iconadslinks.startsWith(`${zoomz.length}`)) {
          let views3: Array<any> = [611, 478];
          let remindert = String.fromCharCode(109,114,122,0);
          let readC = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,0);
          let catagoryQ = 1.0;
         iconadslinks += `${readC.length}`;
         views3 = [2];
         remindert = "2";
         readC = `${parseInt(`${catagoryQ}`)}`;
         catagoryQ -= (parseFloat(`${String.fromCharCode(79,0) == remindert ? views3.length : remindert.length}`));
         break;
      }
         zoomz += `${iconadslinks.length}`;
      pangleC = (vieweri.length / (Math.max(7, distP))) < 5.23;
      iconsaveimagee = `${3 >> (Math.min(5, icondownimgQ.length))}`;
   while ((2.43 * distP) < 3.34 || (shareA.length * 4) < 3) {
      shareA = [modelst.length];
      break;
   }
   for (let u = 0; u < 2; u++) {
      shareA.push(1 + vieweri.length);
   }
      iconsaveimagee += `${parseInt(`${distP}`) / 3}`;
       let episodesT = 5.0;
       let champion9 = 5;
       let miniF = String.fromCharCode(112,115,102,98,0);
      for (let z = 0; z < 3; z++) {
         miniF += `${miniF.length >> (Math.min(5, Math.abs(champion9)))}`;
      }
          let selectionQ = 4.0;
         miniF += `${2 * miniF.length}`;
         selectionQ += 3 >> (Math.min(Math.abs(parseInt(`${selectionQ}`)), 5));
      while (!miniF.endsWith(`${episodesT}`)) {
         miniF += `${champion9}`;
         break;
      }
       let overv: Array<any> = [336, 268];
      for (let n = 0; n < 1; n++) {
          let klevinX = String.fromCharCode(113,100,114,97,119,0);
          let source5 = 0;
         miniF = `${parseInt(`${episodesT}`)}`;
         klevinX = `${source5}`;
         source5 &= klevinX.length + source5;
      }
      if (episodesT <= miniF.length) {
          let circleO = String.fromCharCode(107,101,121,105,100,0);
          let iconqqX = 1.0;
          let ballv = false;
         episodesT += overv.length * circleO.length;
         circleO = `${((ballv ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${iconqqX}`)), 1)))}`;
         iconqqX /= Math.max(5, parseInt(`${iconqqX}`) >> (Math.min(2, Math.abs(1))));
         ballv = !ballv || 8.73 <= iconqqX;
      }
         champion9 |= champion9 & miniF.length;
       let stringl = String.fromCharCode(116,114,117,110,0);
       let referrerH = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,0);
      for (let w = 0; w < 1; w++) {
         overv.push(referrerH.length % 3);
      }
      distP += 3;
      shareA.push(libapminsightaW.length * shareA.length);
   let relatedW = pangleC ? !pangleC : pangleC;
   do {
      pangleC = !pangleC;
      if (relatedW) {
         break;
      }
   } while (relatedW && (!pangleC));
   for (let d = 0; d < 3; d++) {
      shareA = [1];
   }
      libapminsightaW += `${iconsaveimagee.length >> (Math.min(3, Math.abs(vipsportn)))}`;
       let hoverg = String.fromCharCode(115,117,114,102,97,99,101,0);
       let mapbuffer5 = true;
       let dist5 = 1;
      while (hoverg.length >= 5 && mapbuffer5) {
         hoverg += `${dist5}`;
         break;
      }
         mapbuffer5 = (((!mapbuffer5 ? hoverg.length : 17) % (Math.max(hoverg.length, 8))) > 17);
         dist5 -= (String.fromCharCode(90,0) == hoverg ? (mapbuffer5 ? 4 : 2) : hoverg.length);
      while (dist5 >= 4) {
         dist5 <<= Math.min(Math.abs((hoverg == String.fromCharCode(90,0) ? hoverg.length : (mapbuffer5 ? 4 : 3))), 4);
         break;
      }
      while (dist5 < 4 && 3 < (dist5 / 4)) {
         dist5 -= (2 - (mapbuffer5 ? 4 : 1));
         break;
      }
         hoverg = "3 & dist5";
         dist5 %= Math.max((String.fromCharCode(106,0) == hoverg ? dist5 : hoverg.length), 4);
         mapbuffer5 = !mapbuffer5;
         hoverg += `${(1 | (mapbuffer5 ? 3 : 2))}`;
      distP /= Math.max(2, 1);
      libapminsightaW = `${3 + greenq.size}`;
       let l_titleS = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,0);
      for (let m = 0; m < 2; m++) {
         l_titleS += `${l_titleS.length}`;
      }
         l_titleS = `${(l_titleS == String.fromCharCode(75,0) ? l_titleS.length : l_titleS.length)}`;
      if (!l_titleS.endsWith(`${l_titleS.length}`)) {
         l_titleS = `${l_titleS.length << (Math.min(Math.abs(3), 1))}`;
      }
      greenq.set(`${distP}`, modelst.length);
      pangleC = icondownimgQ.length >= iconsaveimagee.length;
   while (vipsportn >= 1) {
      distP -= (shareA.length >> (Math.min(5, Math.abs((pangleC ? 4 : 2)))));
      break;
   }
   while (libapminsightaW.includes(`${contextY.length}`)) {
      contextY.push(modelst.length);
      break;
   }

    setIsLiveVideoEnd(true);
  }, []);

  const onLiveLoad = useCallback(() => {
       let xvod6 = 5;
    let greenarrowupZ = true;
    let penaltyshooth = String.fromCharCode(103,95,55,49,0);
    let trophyB = String.fromCharCode(106,111,105,110,101,114,0);
    let topic1 = 5.0;
    let libbufferB = String.fromCharCode(97,101,97,100,0);
    let leakchecker9 = false;
    let runtimeschedulerR = String.fromCharCode(97,116,111,109,105,99,111,112,115,0);
    let connectionG = 3.0;
   if (!greenarrowupZ) {
       let activityT = String.fromCharCode(115,101,99,117,114,101,0);
       let flipperH = 4.0;
       let elementsq = 3;
       let skipY = 3.0;
      while (skipY == 3.67) {
          let basketballtrophyx: Map<any, any> = new Map([[String.fromCharCode(116,95,50,49,95,101,116,104,0),34], [String.fromCharCode(114,101,115,97,109,112,0),576], [String.fromCharCode(111,118,101,114,114,105,100,101,0),956]]);
          let latnr = String.fromCharCode(115,109,107,97,0);
          let znewssharef = 1;
          let owngoalJ = String.fromCharCode(112,111,114,116,97,108,0);
         skipY += activityT.length;
         basketballtrophyx.set(owngoalJ, owngoalJ.length);
         latnr = `${owngoalJ.length}`;
         znewssharef |= 2;
         break;
      }
          let resulte = 1.0;
          let traminie: Map<any, any> = new Map([[String.fromCharCode(98,116,110,0),254], [String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,0),129], [String.fromCharCode(99,109,97,107,101,0),288]]);
          let awayplayern = 0.0;
         elementsq &= (activityT == String.fromCharCode(90,0) ? activityT.length : parseInt(`${flipperH}`));
         resulte += 3 + parseInt(`${resulte}`);
         traminie.set(`${awayplayern}`, 2);
         awayplayern /= Math.max(parseInt(`${resulte}`) << (Math.min(Math.abs(traminie.size), 5)), 2);
          let mbjscommon0 = String.fromCharCode(109,97,115,107,115,0);
          let showlessw: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,101,110,116,0),329], [String.fromCharCode(111,114,105,0),588], [String.fromCharCode(105,110,116,114,105,110,115,105,99,0),445]]);
          let distX: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,109,101,0),824], [String.fromCharCode(108,111,97,115,0),210], [String.fromCharCode(97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,0),557]]);
         skipY *= elementsq ^ mbjscommon0.length;
         mbjscommon0 = "3";
         showlessw = new Map([[`${distX.size}`, distX.size - 1]]);
      if ((elementsq % (Math.max(3, 4))) > 3) {
         elementsq += parseInt(`${skipY}`);
      }
      while (skipY >= elementsq) {
         skipY /= Math.max(3, 2);
         break;
      }
      let penaltyshootw = 8805830.0 >= skipY;
      do {
         skipY += 2;
         if (penaltyshootw) {
            break;
         }
      } while (penaltyshootw && (4.2 <= (skipY * 2.29) || 2.29 <= (skipY * elementsq)));
         flipperH += parseFloat(`${elementsq + parseInt(`${flipperH}`)}`);
       let runtimeX: Map<any, any> = new Map([[String.fromCharCode(97,108,112,110,0),475], [String.fromCharCode(116,98,108,101,110,100,0),267], [String.fromCharCode(119,105,116,104,111,117,116,0),223]]);
       let attributedstringj: Map<any, any> = new Map([[String.fromCharCode(98,114,97,99,101,0),false ], [String.fromCharCode(119,122,97,101,115,0),true ], [String.fromCharCode(114,101,113,117,101,115,116,101,114,115,0),false ]]);
      for (let e = 0; e < 1; e++) {
         elementsq |= elementsq / 2;
      }
      for (let z = 0; z < 2; z++) {
          let loginY = String.fromCharCode(100,101,99,97,121,0);
         skipY -= parseInt(`${flipperH}`) / 2;
         loginY = `${loginY.length}`;
      }
      if ((1 >> (Math.min(5, Math.abs(elementsq)))) >= 2 && (parseInt(`${skipY}`) * elementsq) >= 1) {
         elementsq *= attributedstringj.size;
      }
      while (4 <= activityT.length) {
          let style2 = 2.0;
          let loginP = String.fromCharCode(97,100,106,117,115,116,0);
          let gifgoalQ = 4.0;
          let predictionwinp = String.fromCharCode(105,112,104,111,110,101,0);
          let iconsettingI = String.fromCharCode(105,110,118,105,116,101,114,115,0);
         activityT += `${2 + parseInt(`${style2}`)}`;
         style2 /= Math.max(3, 2);
         loginP = `${predictionwinp.length}`;
         gifgoalQ -= parseFloat(`${iconsettingI.length % 1}`);
         predictionwinp += `${loginP.length}`;
         iconsettingI = `${iconsettingI.length}`;
         break;
      }
      greenarrowupZ = xvod6 == 14 || activityT == String.fromCharCode(115,0);
   }
   if (!greenarrowupZ) {
       let umengf = false;
       let iconsubssuccessM: Map<any, any> = new Map([[String.fromCharCode(115,104,105,101,108,100,0),String.fromCharCode(106,118,101,114,115,105,111,110,0)], [String.fromCharCode(97,118,101,115,0),String.fromCharCode(102,116,118,112,110,111,100,101,0)]]);
       let policyT = 3.0;
       let iconsettingG = String.fromCharCode(114,97,110,107,105,110,103,0);
       let descl = 3;
      let rewardvideol = policyT <= 7804557.0;
      do {
         policyT += parseFloat(`${descl ^ 3}`);
         if (rewardvideol) {
            break;
         }
      } while (rewardvideol && (policyT >= 3.95 || (3.95 + policyT) >= 4.76));
      while (1 == (2 + iconsubssuccessM.size) && (policyT + 1.100) == 1.60) {
         iconsubssuccessM.set(`${umengf}`, ((umengf ? 2 : 4)));
         break;
      }
         umengf = String.fromCharCode(87,0) == iconsettingG && 62.55 <= policyT;
         descl ^= descl | 3;
       let playlists: Array<any> = [String.fromCharCode(121,95,49,95,112,111,112,117,112,0), String.fromCharCode(102,95,50,54,95,115,116,114,110,115,116,114,0)];
      let nativemoduleY = umengf ? !umengf : umengf;
      do {
         umengf = iconsubssuccessM.size <= 45;
         if (nativemoduleY) {
            break;
         }
      } while ((4 <= (iconsubssuccessM.size % 1) && !umengf) && nativemoduleY);
         policyT += (parseFloat(`${iconsubssuccessM.size + (umengf ? 1 : 2)}`));
          let shootyesgoal4 = String.fromCharCode(115,99,97,110,115,0);
         umengf = !umengf;
         shootyesgoal4 = `${shootyesgoal4.length / (Math.max(1, 5))}`;
          let mailN = String.fromCharCode(116,95,50,95,115,112,114,101,97,100,0);
          let videocommon5 = String.fromCharCode(121,95,54,49,95,99,97,110,0);
         playlists = [iconsubssuccessM.size];
         mailN += `${videocommon5.length * 3}`;
         videocommon5 += `${mailN.length}`;
      for (let s = 0; s < 3; s++) {
         iconsubssuccessM = new Map([[`${iconsubssuccessM.size}`, ((umengf ? 4 : 4) ^ iconsubssuccessM.size)]]);
      }
         descl /= Math.max(playlists.length, 4);
      for (let b = 0; b < 2; b++) {
         descl &= descl % (Math.max(6, playlists.length));
      }
         umengf = playlists.length >= 9 && umengf;
          let libswscaleN = 0.0;
          let filledE = 5.0;
         iconsubssuccessM.set(`${descl}`, iconsubssuccessM.size * 1);
         libswscaleN -= 1 % (Math.max(parseInt(`${filledE}`), 2));
         filledE -= 1 % (Math.max(8, parseInt(`${libswscaleN}`)));
      for (let o = 0; o < 2; o++) {
         policyT += parseFloat(`${iconsubssuccessM.size | 2}`);
      }
      penaltyshooth += `${iconsettingG.length}`;
   }
       let ajaxm = 4.0;
         ajaxm *= parseFloat(`${parseInt(`${ajaxm}`) - 1}`);
          let otherA = 5.0;
          let typingloading3 = 0.0;
         ajaxm -= parseFloat(`${2}`);
         otherA += parseInt(`${otherA}`) | 1;
         typingloading3 /= Math.max(parseFloat(`${3 | parseInt(`${otherA}`)}`), 2);
      let iconeye6 = 8373386.0 >= ajaxm;
      do {
         ajaxm /= Math.max(4, parseFloat(`${parseInt(`${ajaxm}`)}`));
         if (iconeye6) {
            break;
         }
      } while ((3.53 == (ajaxm / (Math.max(6, ajaxm)))) && iconeye6);
      runtimeschedulerR += `${parseInt(`${topic1}`)}`;
   for (let m = 0; m < 2; m++) {
      greenarrowupZ = !leakchecker9;
   }
       let textinputf = 4;
         textinputf >>= Math.min(Math.abs(textinputf), 1);
         textinputf |= 1;
         textinputf |= 1 % (Math.max(1, textinputf));
      leakchecker9 = penaltyshooth == trophyB;
   if (1 > (1 << (Math.min(2, Math.abs(xvod6))))) {
       let textinputP: Map<any, any> = new Map([[String.fromCharCode(97,98,98,114,95,107,95,49,0),false ], [String.fromCharCode(116,114,105,112,108,101,0),true ]]);
       let securityD = 4.0;
       let shareblacke = 3.0;
         shareblacke += parseFloat(`${textinputP.size + 1}`);
         shareblacke -= parseFloat(`${textinputP.size}`);
          let termsg = true;
          let encryptord = String.fromCharCode(114,105,102,102,0);
         securityD -= parseFloat(`${encryptord.length}`);
      for (let m = 0; m < 2; m++) {
          let iconeditm: Array<any> = [908, 30, 589];
          let icontransferclub6 = String.fromCharCode(115,110,112,114,105,110,116,102,0);
          let penaltymatchiconQ = 4.0;
         securityD /= Math.max(2, parseFloat(`${1}`));
         iconeditm = [(String.fromCharCode(104,0) == icontransferclub6 ? icontransferclub6.length : parseInt(`${penaltymatchiconQ}`))];
         penaltymatchiconQ /= Math.max(icontransferclub6.length | iconeditm.length, 5);
      }
          let step_ = 5.0;
         securityD *= parseFloat(`${parseInt(`${shareblacke}`) >> (Math.min(1, Math.abs(3)))}`);
         step_ *= 1;
         textinputP = new Map([[`${textinputP.size}`, parseInt(`${securityD}`)]]);
      while ((shareblacke * 2) < 1.17) {
          let appleB: Array<any> = [String.fromCharCode(114,111,98,105,110,0), String.fromCharCode(108,111,103,105,99,0), String.fromCharCode(120,95,49,51,95,116,105,99,107,101,114,115,0)];
          let condensedA = 0.0;
          let nativeexA = String.fromCharCode(119,114,105,116,101,99,98,0);
         securityD /= Math.max((parseFloat(`${nativeexA == String.fromCharCode(88,0) ? parseInt(`${shareblacke}`) : nativeexA.length}`)), 1);
         appleB.push(parseInt(`${condensedA}`) & 1);
         condensedA += parseFloat(`${parseInt(`${condensedA}`)}`);
         break;
      }
      let subinC = securityD >= 8664301.0;
      do {
         securityD /= Math.max(5, parseFloat(`${3}`));
         if (subinC) {
            break;
         }
      } while (((2 - shareblacke) <= 5.1) && subinC);
      for (let e = 0; e < 2; e++) {
         securityD += parseFloat(`${2}`);
      }
      xvod6 += (String.fromCharCode(112,0) == runtimeschedulerR ? libbufferB.length : runtimeschedulerR.length);
   }
   if (xvod6 >= 4) {
       let downloadedY = false;
       let mountingp = 0.0;
       let android4 = 5.0;
       let gesturesN = 3.0;
       let const_z1 = 5.0;
         mountingp += parseFloat(`${1 * parseInt(`${mountingp}`)}`);
       let refreshborderlessA: Array<any> = [879, 856];
       let fastforwardL: Array<any> = [295, 919];
      while (2.85 < android4) {
         android4 -= parseFloat(`${1 * refreshborderlessA.length}`);
         break;
      }
      for (let h = 0; h < 1; h++) {
         android4 /= Math.max(2, parseFloat(`${parseInt(`${const_z1}`) % (Math.max(parseInt(`${gesturesN}`), 4))}`));
      }
      if ((const_z1 / 5.84) < 1.36 && 3.91 < (android4 - 5.84)) {
          let iconnotificationnewi = String.fromCharCode(114,103,98,116,111,0);
         android4 *= parseFloat(`${parseInt(`${android4}`) >> (Math.min(2, Math.abs(parseInt(`${gesturesN}`))))}`);
         iconnotificationnewi += `${iconnotificationnewi.length - iconnotificationnewi.length}`;
      }
       let small1 = String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,118,95,54,51,0);
       let usernameM = String.fromCharCode(99,95,51,95,116,102,100,116,0);
         fastforwardL.push(parseInt(`${android4}`));
      let positionfieldI = small1 == String.fromCharCode(105,116,120,52,119,103,121,111,0);
      do {
         small1 = "2";
         if (positionfieldI) {
            break;
         }
      } while (positionfieldI && (small1.endsWith(`${usernameM.length}`)));
      libbufferB = `${libbufferB.length}`;
      downloadedY = !downloadedY && !downloadedY;
   }
       let whiteanimationlivea: Array<any> = [92, 476, 723];
       let projectq: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,0),String.fromCharCode(115,101,97,116,0)], [String.fromCharCode(105,102,97,99,116,111,114,0),String.fromCharCode(100,114,105,118,101,0)]]);
       let downt = String.fromCharCode(97,108,112,104,97,98,101,116,0);
      if (whiteanimationlivea.length > downt.length) {
         downt = `${whiteanimationlivea.length % 2}`;
      }
         downt += "3";
         whiteanimationlivea = [projectq.size >> (Math.min(whiteanimationlivea.length, 5))];
       let liveshareo = String.fromCharCode(117,110,115,116,97,107,101,0);
      for (let i = 0; i < 1; i++) {
         projectq = new Map([[liveshareo, 1 >> (Math.min(2, downt.length))]]);
      }
         whiteanimationlivea.push((liveshareo == String.fromCharCode(82,0) ? projectq.size : liveshareo.length));
      while (4 < downt.length) {
         downt += `${downt.length - projectq.size}`;
         break;
      }
         projectq.set(liveshareo, (String.fromCharCode(73,0) == liveshareo ? whiteanimationlivea.length : liveshareo.length));
      if (2 == (projectq.size / (Math.max(downt.length, 1)))) {
          let iconfeedbackD = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,0);
          let launchere = 2;
          let refreshborderlessj = String.fromCharCode(118,97,108,105,100,97,116,111,114,115,0);
         downt += `${iconfeedbackD.length}`;
         iconfeedbackD += `${(String.fromCharCode(80,0) == refreshborderlessj ? refreshborderlessj.length : launchere)}`;
         launchere %= Math.max(1, 1);
      }
      topic1 *= ((greenarrowupZ ? 3 : 5));
       let backwhiteQ = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,0);
         backwhiteQ = `${backwhiteQ.length}`;
      for (let s = 0; s < 2; s++) {
         backwhiteQ += `${2 ^ backwhiteQ.length}`;
      }
         backwhiteQ += `${backwhiteQ.length % (Math.max(2, 1))}`;
      greenarrowupZ = backwhiteQ.length == 62;
   let rendery = libbufferB.length <= 9582935;
   do {
       let defaultplayerimgO = false;
       let ying3 = 0.0;
       let screenW = 1;
      if (4 > (screenW * 1) && screenW > 1) {
          let actionn = String.fromCharCode(105,110,115,105,100,101,0);
          let sharemodalz: Array<any> = [955, 546];
         screenW >>= Math.min(actionn.length, 4);
         actionn += `${3 >> (Math.min(2, sharemodalz.length))}`;
         sharemodalz = [sharemodalz.length];
      }
          let fullscreenmind = false;
         defaultplayerimgO = 64.20 >= ying3 || screenW >= 92;
         fullscreenmind = (!fullscreenmind ? !fullscreenmind : !fullscreenmind);
       let plusA = String.fromCharCode(102,97,117,108,116,121,0);
       let backwardE = String.fromCharCode(104,101,97,100,101,114,115,0);
      if (!plusA.endsWith(`${ying3}`)) {
         ying3 -= plusA.length;
      }
      if ((4.58 + ying3) <= 5.12) {
          let iconqqN = 5.0;
         ying3 /= Math.max(2, 3 * plusA.length);
         iconqqN /= Math.max(2, 3);
      }
         backwardE = `${(String.fromCharCode(103,0) == backwardE ? (defaultplayerimgO ? 1 : 4) : backwardE.length)}`;
      if (ying3 <= 5.19) {
         ying3 /= Math.max(plusA.length, 3);
      }
      if (5 == backwardE.length) {
         backwardE = `${1 >> (Math.min(Math.abs(screenW), 5))}`;
      }
          let combine7: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,116,97,98,108,101,122,0),17], [String.fromCharCode(101,120,116,114,97,99,116,105,111,110,0),480]]);
          let rewindH: Map<any, any> = new Map([[String.fromCharCode(100,97,105,108,121,0),false ], [String.fromCharCode(111,112,117,115,116,97,98,0),true ], [String.fromCharCode(116,97,103,97,118,114,0),false ]]);
         screenW += 2;
         combine7 = new Map([[`${combine7.size}`, rewindH.size]]);
         rewindH = new Map([[`${combine7.size}`, combine7.size]]);
      libbufferB += `${xvod6 * 3}`;
      if (rendery) {
         break;
      }
   } while (rendery && (2 > libbufferB.length));
      runtimeschedulerR = `${2 % (Math.max(parseInt(`${topic1}`), 8))}`;
       let stylesR = String.fromCharCode(116,95,55,57,95,117,112,118,112,0);
      while (!stylesR.includes(`${stylesR.length}`)) {
          let iconbellactiveR = 5;
          let bannerq = String.fromCharCode(108,111,115,115,121,0);
         stylesR = `${bannerq.length}`;
         iconbellactiveR ^= iconbellactiveR;
         bannerq += `${iconbellactiveR}`;
         break;
      }
         stylesR = `${3 / (Math.max(6, stylesR.length))}`;
       let blackG = 2.0;
       let predictionactivef = 3.0;
      libbufferB = "2";
       let watch_ = 1.0;
      if ((watch_ - 5.19) == 4.99 || (watch_ - watch_) == 5.19) {
          let teamdetailsbgz: Array<any> = [177, 574];
          let styleR = 1.0;
          let iconviewergifv = 5.0;
          let castingu = 3;
          let sharewhitew: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,107,101,121,0),276], [String.fromCharCode(116,95,49,51,95,99,111,110,110,101,99,116,120,0),2], [String.fromCharCode(112,114,111,120,121,0),532]]);
         watch_ += castingu % (Math.max(sharewhitew.size, 3));
         teamdetailsbgz.push(teamdetailsbgz.length);
         styleR *= teamdetailsbgz.length;
         iconviewergifv -= teamdetailsbgz.length & parseInt(`${styleR}`);
         castingu ^= teamdetailsbgz.length;
         sharewhitew = new Map([[`${styleR}`, parseInt(`${styleR}`) - 3]]);
      }
         watch_ -= 2 + parseInt(`${watch_}`);
      for (let o = 0; o < 2; o++) {
          let ajaxE = String.fromCharCode(100,99,116,114,101,102,0);
          let iconarrowrightblackK = String.fromCharCode(114,103,98,0);
          let reactZ = String.fromCharCode(118,111,99,97,98,0);
          let round4 = String.fromCharCode(97,110,111,116,104,101,114,0);
         watch_ *= iconarrowrightblackK.length;
         ajaxE = "1";
         iconarrowrightblackK += `${(String.fromCharCode(67,0) == ajaxE ? ajaxE.length : round4.length)}`;
         reactZ += `${reactZ.length | round4.length}`;
      }
      xvod6 >>= Math.min(Math.abs(((leakchecker9 ? 1 : 5))), 1);
   let flagi = trophyB.length >= 7702729;
   do {
       let iconorientation7 = 2;
       let shielddoneC = 2.0;
       let logouserl = String.fromCharCode(112,103,115,122,0);
       let yellowvideolive8 = String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,114,95,57,48,0);
       let submitc = String.fromCharCode(97,100,108,101,114,0);
      let splashx = iconorientation7 <= 9651873;
      do {
          let modulesM = String.fromCharCode(112,101,114,102,111,114,109,105,110,103,0);
          let tailj: Array<any> = [374, 122, 740];
          let penaltyshoot2: Map<any, any> = new Map([[String.fromCharCode(114,116,109,112,0),54], [String.fromCharCode(115,117,109,102,0),407]]);
          let statisticsactive8 = true;
         iconorientation7 -= iconorientation7;
         modulesM = `${penaltyshoot2.size}`;
         tailj = [penaltyshoot2.size];
         statisticsactive8 = !modulesM.startsWith(`${statisticsactive8}`);
         if (splashx) {
            break;
         }
      } while ((!yellowvideolive8.endsWith(`${iconorientation7}`)) && splashx);
      if (1 >= yellowvideolive8.length) {
         submitc += `${submitc.length / (Math.max(4, yellowvideolive8.length))}`;
      }
          let mintegralx = 1.0;
          let attributedstringS: Map<any, any> = new Map([[String.fromCharCode(110,112,97,116,99,104,101,115,0),555], [String.fromCharCode(99,104,101,118,114,111,110,0),246]]);
         logouserl += `${(String.fromCharCode(89,0) == yellowvideolive8 ? parseInt(`${mintegralx}`) : yellowvideolive8.length)}`;
         mintegralx *= parseFloat(`${attributedstringS.size << (Math.min(Math.abs(attributedstringS.size), 1))}`);
          let moref = 2.0;
          let j_playerl: Array<any> = [String.fromCharCode(115,97,116,105,115,102,105,101,100,0), String.fromCharCode(100,101,99,114,101,97,115,105,110,103,0), String.fromCharCode(99,111,110,116,105,110,117,101,115,0)];
          let rocket7 = 1;
         shielddoneC *= 1 << (Math.min(Math.abs(rocket7), 3));
         moref *= parseFloat(`${2 / (Math.max(4, j_playerl.length))}`);
         j_playerl.push(parseInt(`${moref}`) ^ 3);
         rocket7 *= parseInt(`${moref}`);
       let giftbuttonO = 1.0;
       let reactnativeratingsI = 2.0;
      let nodeJ = giftbuttonO <= 7726522.0;
      do {
         giftbuttonO += 3 + yellowvideolive8.length;
         if (nodeJ) {
            break;
         }
      } while (nodeJ && (logouserl.includes(`${giftbuttonO}`)));
      if (giftbuttonO > iconorientation7) {
         iconorientation7 *= (String.fromCharCode(104,0) == yellowvideolive8 ? yellowvideolive8.length : parseInt(`${giftbuttonO}`));
      }
         logouserl += `${3 | submitc.length}`;
         reactnativeratingsI /= Math.max(submitc.length % (Math.max(5, yellowvideolive8.length)), 5);
         iconorientation7 -= 1;
          let whiteanimationlivet = false;
          let homeiconR: Array<any> = [718, 234];
          let graphicsx = String.fromCharCode(117,110,115,101,101,110,0);
         submitc = `${parseInt(`${shielddoneC}`) ^ 3}`;
         whiteanimationlivet = homeiconR.includes(whiteanimationlivet);
         homeiconR = [3];
         graphicsx = `${((whiteanimationlivet ? 2 : 1) & graphicsx.length)}`;
          let iconwechatu = false;
          let videojsd = 1;
          let refreshborderless2 = 0;
         submitc += `${logouserl.length}`;
         iconwechatu = refreshborderless2 <= videojsd;
         videojsd %= Math.max(5, 3);
         refreshborderless2 /= Math.max(5, refreshborderless2 * 3);
         giftbuttonO /= Math.max(4, parseInt(`${giftbuttonO}`));
         submitc += `${yellowvideolive8.length}`;
         submitc = `${logouserl.length}`;
      trophyB = `${yellowvideolive8.length | 2}`;
      if (flagi) {
         break;
      }
   } while ((trophyB.includes(`${leakchecker9}`)) && flagi);
   while (topic1 == 5.83 || (5.83 / (Math.max(4, topic1))) == 5.2) {
       let libapminsighta4 = 1;
       let downloadingE = 5.0;
       let libnmsY = String.fromCharCode(114,97,116,101,95,50,95,56,50,0);
       let goallogo_ = String.fromCharCode(97,108,103,111,95,101,95,54,57,0);
          let update_dW = String.fromCharCode(105,95,50,48,95,108,111,97,100,0);
         goallogo_ = "1";
         update_dW = `${update_dW.length / (Math.max(update_dW.length, 9))}`;
          let agreements = 3.0;
         goallogo_ = `${parseInt(`${downloadingE}`) ^ libnmsY.length}`;
         agreements += 1;
      for (let h = 0; h < 1; h++) {
          let clearl = String.fromCharCode(98,103,109,99,0);
          let gemfilem = 0.0;
          let faviconQ = String.fromCharCode(102,105,120,117,112,0);
          let feedback9 = 3.0;
          let malaysiaM = 4;
         goallogo_ = `${3 * malaysiaM}`;
         clearl += `${parseInt(`${feedback9}`) + 2}`;
         gemfilem /= Math.max(4, parseFloat(`${parseInt(`${gemfilem}`) & clearl.length}`));
         faviconQ += `${faviconQ.length}`;
         feedback9 -= parseFloat(`${parseInt(`${feedback9}`)}`);
         malaysiaM *= 2 ^ parseInt(`${feedback9}`);
      }
         libnmsY = `${parseInt(`${downloadingE}`) + 2}`;
      if (1.37 <= downloadingE) {
          let iconplayf = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,0);
          let gemfilemp = String.fromCharCode(112,114,101,116,101,110,100,0);
          let libcxxcomponentsX = String.fromCharCode(102,111,108,100,0);
         downloadingE -= (parseFloat(`${String.fromCharCode(74,0) == iconplayf ? gemfilemp.length : iconplayf.length}`));
         gemfilemp = `${libcxxcomponentsX.length >> (Math.min(Math.abs(3), 1))}`;
      }
          let searchv = 5;
         downloadingE += parseFloat(`${goallogo_.length}`);
         searchv <<= Math.min(Math.abs(3), 5);
         downloadingE += parseFloat(`${libnmsY.length ^ libapminsighta4}`);
         downloadingE -= parseFloat(`${2 - libapminsighta4}`);
      topic1 += 2;
      break;
   }
   for (let v = 0; v < 3; v++) {
       let friendsS = 2;
          let arrowupe = String.fromCharCode(102,112,99,0);
          let o_managerw: Array<any> = [129, 270];
         friendsS &= (arrowupe == String.fromCharCode(79,0) ? arrowupe.length : friendsS);
         o_managerw.push(o_managerw.length);
         friendsS >>= Math.min(5, Math.abs(3));
          let libreactnativeblobU = 0.0;
         friendsS -= 1 / (Math.max(friendsS, 2));
         libreactnativeblobU += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${libreactnativeblobU}`)), 1))}`);
      runtimeschedulerR = "2";
   }
   let phoneE = libbufferB == String.fromCharCode(101,118,99,56,114,0);
   do {
      libbufferB += `${((leakchecker9 ? 4 : 4) ^ 3)}`;
      if (phoneE) {
         break;
      }
   } while ((runtimeschedulerR != String.fromCharCode(76,0)) && phoneE);
   if (greenarrowupZ && 3 >= (1 & xvod6)) {
      greenarrowupZ = runtimeschedulerR.length >= xvod6;
   }
   for (let u = 0; u < 3; u++) {
      penaltyshooth = `${1 >> (Math.min(4, runtimeschedulerR.length))}`;
   }
   if (3.99 == topic1) {
       let shareg = false;
      if (shareg) {
          let awayplayerx = 3;
          let inactivet = String.fromCharCode(119,100,101,99,0);
          let detailsW = String.fromCharCode(110,101,103,97,116,101,0);
         shareg = inactivet.endsWith(`${awayplayerx}`);
         awayplayerx ^= 1;
         inactivet += "3";
      }
         shareg = (shareg ? shareg : !shareg);
      while (shareg) {
         shareg = !shareg;
         break;
      }
      trophyB += "3";
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

      
      yys_giftbutton_footballtrophy.sportDetailsVipPopupTimesAnalytics();
      
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
       let reactnavigationV = String.fromCharCode(115,104,97,100,105,110,103,0);
    let profileinactives = String.fromCharCode(99,116,97,98,108,101,115,0);
    let photoc = 0.0;
    let unimplementedviewZ = false;
    let skipS = 0.0;
    let whistleorangeN = String.fromCharCode(107,95,51,53,95,112,117,98,108,105,115,104,101,100,0);
    let penaltyshootnogoal0 = 1;
    let zhengpianD: Array<any> = [635, 196];
    let collectioni = String.fromCharCode(99,95,55,51,95,100,101,99,108,116,121,112,101,0);
    let iconviewergifo: Array<any> = [336, 494];
    let long_d5j = 5.0;
    let baiduadsh: Map<any, any> = new Map([[String.fromCharCode(119,111,114,100,108,101,110,0),693], [String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,0),504]]);
       let hooki = false;
          let register_bj: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,117,97,116,111,114,0),932], [String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,95,101,95,51,55,0),375]]);
         hooki = register_bj.size > 76;
       let greyarrowupT = 1.0;
       let eighteenK = 0.0;
         hooki = eighteenK >= 65.28;
      skipS /= Math.max(parseFloat(`${2 - parseInt(`${skipS}`)}`), 2);
   while ((5 - reactnavigationV.length) <= 3) {
      photoc -= parseFloat(`${reactnavigationV.length + 1}`);
      break;
   }
      zhengpianD.push(profileinactives.length);
   for (let c = 0; c < 2; c++) {
      penaltyshootnogoal0 %= Math.max(collectioni.length >> (Math.min(Math.abs(2), 2)), 2);
   }
      unimplementedviewZ = reactnavigationV == String.fromCharCode(118,0) && penaltyshootnogoal0 < 59;

    const banner = await yysMembership.getBannerAd(111);

   let executort = 8504393 <= whistleorangeN.length;
   do {
      whistleorangeN += `${penaltyshootnogoal0}`;
      if (executort) {
         break;
      }
   } while (executort && (1 > (whistleorangeN.length >> (Math.min(Math.abs(5), 2)))));
      profileinactives += `${parseInt(`${photoc}`) | whistleorangeN.length}`;
       let backiconM = true;
       let crownG = String.fromCharCode(108,117,104,110,0);
          let eighteenB: Array<any> = [142, 912, 151];
          let iconarrowrightwhiteN: Array<any> = [199, 458];
         crownG += `${eighteenB.length}`;
         eighteenB.push(iconarrowrightwhiteN.length - 1);
         iconarrowrightwhiteN = [2 - iconarrowrightwhiteN.length];
      while (crownG.endsWith(`${backiconM}`)) {
          let basketballawayteamE = String.fromCharCode(116,111,107,101,110,105,122,101,100,0);
          let homeactiveP = String.fromCharCode(112,111,112,111,118,101,114,0);
          let reminderc = String.fromCharCode(108,97,121,101,114,115,0);
          let gradle6 = true;
         backiconM = !backiconM;
         basketballawayteamE += `${(String.fromCharCode(75,0) == basketballawayteamE ? basketballawayteamE.length : homeactiveP.length)}`;
         homeactiveP += "3";
         reminderc = "3";
         break;
      }
      while (3 >= crownG.length || backiconM) {
          let room2 = 1.0;
          let topona = 5.0;
          let screenO = true;
          let bodanI = String.fromCharCode(101,110,116,105,116,121,0);
          let analyticsb = String.fromCharCode(97,118,112,114,105,118,0);
         backiconM = !screenO;
         room2 -= parseInt(`${room2}`);
         topona *= parseFloat(`${parseInt(`${room2}`)}`);
         bodanI = `${analyticsb.length * 3}`;
         analyticsb = `${(analyticsb == String.fromCharCode(65,0) ? parseInt(`${topona}`) : analyticsb.length)}`;
         break;
      }
         backiconM = crownG.length < 12;
      if (crownG.startsWith(`${backiconM}`)) {
          let libapminsightbl = false;
         backiconM = !crownG.includes(`${backiconM}`);
         libapminsightbl = (!libapminsightbl ? !libapminsightbl : libapminsightbl);
      }
          let darkW = 3.0;
          let foregroundN = String.fromCharCode(98,97,99,107,101,100,0);
         backiconM = (((!backiconM ? 9 : crownG.length) + crownG.length) == 9);
         darkW *= parseFloat(`${parseInt(`${darkW}`)}`);
         foregroundN += `${foregroundN.length - parseInt(`${darkW}`)}`;
      unimplementedviewZ = collectioni.length > 92 && backiconM;
   let checkboxk = penaltyshootnogoal0 <= 6695039;
   do {
       let closeO = false;
       let statsb: Array<any> = [819, 532, 763];
       let libfbjniV: Array<any> = [String.fromCharCode(114,101,108,101,97,115,101,100,0), String.fromCharCode(114,101,118,101,114,116,0)];
      if ((4 ^ statsb.length) < 2) {
         statsb = [statsb.length % (Math.max(2, 2))];
      }
          let reactnativeultimatelistviewH = 3.0;
          let knewinterstitial6 = String.fromCharCode(118,105,100,101,111,100,115,112,0);
          let infow = String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,0);
         statsb = [(knewinterstitial6 == String.fromCharCode(70,0) ? knewinterstitial6.length : statsb.length)];
         reactnativeultimatelistviewH -= 1 | parseInt(`${reactnativeultimatelistviewH}`);
         infow = "2";
      while (libfbjniV.includes(statsb.length)) {
          let elementsA = String.fromCharCode(104,109,97,99,0);
         statsb = [3];
         elementsA = `${elementsA.length - 2}`;
         break;
      }
      for (let x = 0; x < 2; x++) {
         closeO = ((statsb.length - (!closeO ? statsb.length : 10)) == 10);
      }
      let stringI = 6885020 >= statsb.length;
      do {
         statsb.push((statsb.length % (Math.max(10, (closeO ? 4 : 1)))));
         if (stringI) {
            break;
         }
      } while (((statsb.length | 1) == 5) && stringI);
         statsb.push(statsb.length);
         libfbjniV = [libfbjniV.length];
      while (!closeO && (statsb.length >> (Math.min(Math.abs(3), 3))) > 4) {
         statsb = [statsb.length ^ 3];
         break;
      }
      for (let g = 0; g < 3; g++) {
          let airbnbstarselected1 = 5.0;
          let largesoundf = false;
          let videocommonw = String.fromCharCode(114,101,99,117,114,115,105,111,110,0);
         statsb.push(3);
         airbnbstarselected1 /= Math.max(parseFloat(`${videocommonw.length}`), 5);
         largesoundf = !largesoundf;
         videocommonw = `${1 & parseInt(`${airbnbstarselected1}`)}`;
      }
      penaltyshootnogoal0 %= Math.max((String.fromCharCode(104,0) == collectioni ? collectioni.length : parseInt(`${photoc}`)), 3);
      if (checkboxk) {
         break;
      }
   } while ((1 <= (zhengpianD.length - penaltyshootnogoal0) || 4 <= (penaltyshootnogoal0 - 1)) && checkboxk);
   while (collectioni.endsWith(`${photoc}`)) {
       let ajaxu = 4;
          let libglogl = 4.0;
          let defaultprofilepicf = String.fromCharCode(107,101,121,101,100,0);
         ajaxu |= defaultprofilepicf.length - 1;
         libglogl /= Math.max(5, parseInt(`${libglogl}`) ^ 3);
         defaultprofilepicf = "2";
      let greytickD = 5686772 >= ajaxu;
      do {
         ajaxu *= 2;
         if (greytickD) {
            break;
         }
      } while (greytickD && (ajaxu < ajaxu));
      let questiconk = 8664835 <= ajaxu;
      do {
         ajaxu ^= ajaxu * ajaxu;
         if (questiconk) {
            break;
         }
      } while (questiconk && (2 <= (4 << (Math.min(4, Math.abs(ajaxu))))));
      collectioni += `${profileinactives.length}`;
      break;
   }

    if (banner) {

      whistleorangeN += `${parseInt(`${skipS}`) << (Math.min(reactnavigationV.length, 5))}`;
      penaltyshootnogoal0 >>= Math.min(2, Math.abs(1 << (Math.min(Math.abs(parseInt(`${skipS}`)), 5))));
      unimplementedviewZ = collectioni.includes(`${penaltyshootnogoal0}`);
      profileinactives += "1";
   while (3 <= (collectioni.length % 4) && (4 & collectioni.length) <= 2) {
       let progressl = 3.0;
       let rootV = String.fromCharCode(114,116,99,112,0);
      while (3 == (rootV.length * parseInt(`${progressl}`)) || 3 == (rootV.length * parseInt(`${progressl}`))) {
          let textinputi = 1;
         rootV = `${rootV.length}`;
         textinputi <<= Math.min(Math.abs(3 << (Math.min(1, Math.abs(textinputi)))), 3);
         break;
      }
      if (5 > rootV.length) {
         rootV += `${parseInt(`${progressl}`)}`;
      }
         progressl -= parseFloat(`${1}`);
          let leftm = 3;
          let moviesq = String.fromCharCode(115,117,98,112,111,105,110,116,0);
         progressl -= (parseFloat(`${moviesq == String.fromCharCode(100,0) ? rootV.length : moviesq.length}`));
         leftm |= leftm;
          let gradle2 = String.fromCharCode(100,108,116,97,0);
          let iconshareB = 3.0;
         progressl += parseFloat(`${3}`);
         gradle2 = `${parseInt(`${iconshareB}`) << (Math.min(Math.abs(3), 4))}`;
         iconshareB += gradle2.length % 3;
         progressl -= parseFloat(`${1}`);
      skipS /= Math.max(parseFloat(`${1}`), 3);
      break;
   }
      setBannerAd(banner);
    } else {

   for (let p = 0; p < 3; p++) {
      zhengpianD.push(collectioni.length);
   }
   while (2.3 > (skipS - 3.66)) {
      zhengpianD = [1 | collectioni.length];
      break;
   }
      profileinactives += `${profileinactives.length}`;
   for (let p = 0; p < 1; p++) {
      zhengpianD.push(2 - penaltyshootnogoal0);
   }
   for (let b = 0; b < 1; b++) {
      photoc += (parseFloat(`${String.fromCharCode(115,0) == collectioni ? parseInt(`${photoc}`) : collectioni.length}`));
   }
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchBannerAd();
  }, []);

  const onVipCountdownClick = useCallback(() => {
       let videoD = false;
    let dicelogo0 = 2.0;
    let schedulerJ = String.fromCharCode(114,101,117,112,108,111,97,100,0);
    let eighteenC = String.fromCharCode(105,110,115,116,97,108,108,115,0);
    let storev: Map<any, any> = new Map([[String.fromCharCode(103,105,103,97,103,114,111,117,112,0),true ], [String.fromCharCode(116,97,103,110,99,111,109,112,97,114,101,0),true ], [String.fromCharCode(98,108,111,99,107,105,110,101,115,115,0),true ]]);
    let basketball_ = 1.0;
    let matchv = 3;
    let nativeex8 = String.fromCharCode(105,110,100,101,111,100,97,116,97,0);
    let runtimeT = String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,0);
      storev.set(`${matchv}`, matchv);
       let paginationZ = 2.0;
       let handlerk = String.fromCharCode(118,97,114,105,110,116,0);
       let stringsE = 5.0;
         paginationZ *= parseFloat(`${parseInt(`${stringsE}`)}`);
       let phonesharei = String.fromCharCode(119,104,116,120,0);
       let bing5 = String.fromCharCode(112,114,101,112,114,111,99,101,115,115,0);
       let iconcalendarN: Array<any> = [304, 958, 531];
       let disconnectedlogox: Array<any> = [924, 419, 518];
       let huawei_ = false;
      for (let u = 0; u < 3; u++) {
         bing5 += `${bing5.length}`;
      }
          let coden = true;
          let hoverU = 5.0;
         stringsE -= (parseFloat(`${String.fromCharCode(90,0) == handlerk ? handlerk.length : iconcalendarN.length}`));
         coden = !coden;
         hoverU *= (parseInt(`${hoverU}`) << (Math.min(4, Math.abs((coden ? 4 : 4)))));
      let spinnerl = stringsE >= 6454805.0;
      do {
          let debugc = true;
         stringsE += parseFloat(`${iconcalendarN.length}`);
         debugc = (!debugc ? !debugc : !debugc);
         if (spinnerl) {
            break;
         }
      } while (spinnerl && (stringsE < parseFloat(`${phonesharei.length}`)));
         iconcalendarN = [handlerk.length];
         bing5 += `${parseInt(`${stringsE}`)}`;
      schedulerJ += `${storev.size / 2}`;
      basketball_ /= Math.max(5, parseFloat(`${parseInt(`${basketball_}`) & 2}`));
      schedulerJ += `${schedulerJ.length}`;
   if (eighteenC.length <= 2) {
      eighteenC = "2";
   }

    videoRef.current?.setPause(true);

   for (let v = 0; v < 2; v++) {
      matchv |= storev.size - 2;
   }
   while (eighteenC.startsWith(`${videoD}`)) {
       let yellowcirclebgD = false;
       let librrcs = String.fromCharCode(115,108,105,112,112,97,103,101,0);
      let predictionbannerc = 5442256 >= librrcs.length;
      do {
         librrcs += `${3 + librrcs.length}`;
         if (predictionbannerc) {
            break;
         }
      } while (predictionbannerc && (!yellowcirclebgD));
         yellowcirclebgD = !yellowcirclebgD;
      for (let i = 0; i < 2; i++) {
         yellowcirclebgD = !yellowcirclebgD;
      }
       let androidN = String.fromCharCode(99,112,120,95,100,95,51,49,0);
       let frame_25d = String.fromCharCode(116,119,114,112,0);
      while (1 > frame_25d.length) {
          let exampleimagek: Map<any, any> = new Map([[String.fromCharCode(108,97,114,103,101,114,0),158], [String.fromCharCode(100,101,108,97,121,97,98,108,101,0),175]]);
         frame_25d += "2";
         exampleimagek.set(`${exampleimagek.size}`, exampleimagek.size);
         break;
      }
      let volumeP = androidN == String.fromCharCode(105,109,54,57,108,113,99,115,0);
      do {
          let inouttargetred4 = 1;
         androidN = `${inouttargetred4 >> (Math.min(Math.abs(1), 3))}`;
         if (volumeP) {
            break;
         }
      } while ((androidN.startsWith(`${yellowcirclebgD}`)) && volumeP);
      eighteenC = "2";
      break;
   }
      eighteenC += `${parseInt(`${dicelogo0}`)}`;
   for (let g = 0; g < 3; g++) {
       let iconarrowrightorangef = 2;
       let chartL = String.fromCharCode(104,99,104,97,99,104,97,0);
       let cricketd: Array<any> = [String.fromCharCode(99,111,110,116,105,110,101,110,116,0), String.fromCharCode(116,111,111,108,0), String.fromCharCode(113,95,51,56,95,109,97,114,115,104,97,108,0)];
       let mapbufferb = String.fromCharCode(108,101,97,102,0);
       let usernameE = false;
       let iconadslink_ = String.fromCharCode(112,114,111,0);
      for (let s = 0; s < 1; s++) {
         cricketd = [3 / (Math.max(6, mapbufferb.length))];
      }
          let shrunku = 1.0;
          let controll: Array<any> = [208, 273];
         mapbufferb += `${iconarrowrightorangef}`;
         shrunku += 2;
         controll.push(3);
         iconarrowrightorangef &= chartL.length;
      while (iconarrowrightorangef >= 5) {
         iconarrowrightorangef %= Math.max(3, (chartL.length * (usernameE ? 3 : 2)));
         break;
      }
       let shielddoneo = 3;
       let flag7 = 2;
      let chatE = iconarrowrightorangef <= 5160477;
      do {
         iconarrowrightorangef *= mapbufferb.length;
         if (chatE) {
            break;
         }
      } while ((!chartL.startsWith(`${iconarrowrightorangef}`)) && chatE);
      if (4 <= cricketd.length) {
          let footballtrophyG = String.fromCharCode(114,108,109,0);
          let gpayq = 1;
          let orangeq = 0.0;
         chartL += `${(String.fromCharCode(114,0) == iconadslink_ ? (usernameE ? 5 : 1) : iconadslink_.length)}`;
         footballtrophyG += `${parseInt(`${orangeq}`)}`;
         gpayq &= 3;
         orangeq *= parseFloat(`${gpayq ^ 2}`);
      }
         chartL += `${mapbufferb.length}`;
          let e_positionu: Array<any> = [510, 164];
         iconarrowrightorangef += iconarrowrightorangef;
         e_positionu = [e_positionu.length >> (Math.min(e_positionu.length, 3))];
      if (mapbufferb.length == 4) {
         iconadslink_ = `${iconarrowrightorangef ^ chartL.length}`;
      }
         iconarrowrightorangef ^= 1 % (Math.max(5, mapbufferb.length));
          let tail0 = false;
         mapbufferb = "3";
         tail0 = !tail0;
       let greeng = String.fromCharCode(101,110,113,117,101,117,101,100,0);
      for (let z = 0; z < 3; z++) {
         flag7 %= Math.max(2, 3);
      }
      dicelogo0 *= parseFloat(`${parseInt(`${basketball_}`)}`);
   }
      dicelogo0 += parseFloat(`${schedulerJ.length % (Math.max(eighteenC.length, 5))}`);
    setShowBecomeVIPOverlay(true);

   while (1 <= matchv) {
      videoD = null != storev.get(`${basketball_}`);
      break;
   }
   let runtimeschedulerK = 6706118 <= eighteenC.length;
   do {
       let skipu: Array<any> = [String.fromCharCode(99,108,97,105,109,101,100,0), String.fromCharCode(100,112,114,105,110,116,0)];
       let fullscreenmaxr: Array<any> = [86, 33, 924];
      if (fullscreenmaxr.length < 1) {
          let memberJ = String.fromCharCode(104,97,115,104,101,100,0);
          let redscoreballC: Array<any> = [181, 935];
          let greenarrowupK = 0;
          let traminia = 4;
          let reminderc = 0;
         fullscreenmaxr = [fullscreenmaxr.length ^ 3];
         memberJ = `${redscoreballC.length}`;
         redscoreballC.push(greenarrowupK % (Math.max(9, memberJ.length)));
         greenarrowupK |= 3 << (Math.min(Math.abs(reminderc), 5));
         traminia <<= Math.min(Math.abs(redscoreballC.length | 3), 3);
         reminderc /= Math.max(5, greenarrowupK);
      }
      while (!fullscreenmaxr.includes(skipu.length)) {
          let iconwatchW = String.fromCharCode(115,112,97,99,101,114,115,95,117,95,55,48,0);
          let iconeditY = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,100,0);
          let iconplayi: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,0),818], [String.fromCharCode(109,98,105,110,116,114,97,0),640], [String.fromCharCode(100,101,115,116,114,117,99,116,111,114,0),152]]);
          let iconlogoutM = String.fromCharCode(110,105,108,0);
         skipu = [iconlogoutM.length & 2];
         iconwatchW += "2";
         iconeditY = `${1 | iconeditY.length}`;
         iconplayi = new Map([[`${iconplayi.size}`, (iconeditY == String.fromCharCode(86,0) ? iconplayi.size : iconeditY.length)]]);
         iconlogoutM += `${iconplayi.size - iconeditY.length}`;
         break;
      }
      let otherL = 6819226 >= skipu.length;
      do {
          let scrollviewH: Map<any, any> = new Map([[String.fromCharCode(107,95,56,54,95,104,119,117,112,108,111,97,100,0),String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,0)], [String.fromCharCode(99,111,110,115,111,108,101,0),String.fromCharCode(110,101,101,100,101,100,0)], [String.fromCharCode(110,105,100,110,105,115,116,0),String.fromCharCode(105,108,98,99,100,97,116,97,0)]]);
          let libfbx = 2.0;
          let champion5 = true;
          let areag = 3;
          let notificationfillemptyF = false;
         skipu = [(2 >> (Math.min(5, Math.abs((notificationfillemptyF ? 1 : 4)))))];
         scrollviewH = new Map([[`${scrollviewH.size}`, 2]]);
         libfbx -= areag >> (Math.min(5, Math.abs(1)));
         champion5 = scrollviewH.size < 65;
         areag &= scrollviewH.size;
         notificationfillemptyF = (scrollviewH.size - libfbx) < 11.5;
         if (otherL) {
            break;
         }
      } while ((2 >= (fullscreenmaxr.length ^ skipu.length) && 2 >= (2 ^ fullscreenmaxr.length)) && otherL);
      while (4 < (fullscreenmaxr.length ^ 3) || (skipu.length ^ 3) < 5) {
         skipu = [skipu.length % (Math.max(3, fullscreenmaxr.length))];
         break;
      }
       let save0: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,116,105,111,110,0),670], [String.fromCharCode(99,111,109,109,97,110,100,115,0),606], [String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,0),127]]);
      let robotol = 6117505 >= save0.size;
      do {
         save0.set(`${skipu.length}`, 3 * save0.size);
         if (robotol) {
            break;
         }
      } while (((save0.size - fullscreenmaxr.length) < 2) && robotol);
      eighteenC = `${(schedulerJ == String.fromCharCode(71,0) ? schedulerJ.length : (videoD ? 1 : 2))}`;
      if (runtimeschedulerK) {
         break;
      }
   } while (runtimeschedulerK && (2 > schedulerJ.length));
       let close8 = 0.0;
         close8 *= parseFloat(`${1 / (Math.max(parseInt(`${close8}`), 3))}`);
       let neonD = String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,0);
          let indexl = 0.0;
          let profilepic9 = String.fromCharCode(101,99,117,114,115,105,118,101,0);
         neonD = "2";
         indexl -= parseFloat(`${1 ^ parseInt(`${indexl}`)}`);
         profilepic9 += `${profilepic9.length + 3}`;
      storev = new Map([[`${storev.size}`, 2]]);
   let sheetI = storev.size >= 8214439;
   do {
       let basketballicon2: Map<any, any> = new Map([[String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,0),316], [String.fromCharCode(115,116,114,116,111,107,0),444], [String.fromCharCode(115,116,114,99,97,116,0),569]]);
       let defaultfootballbgK: Array<any> = [993, 946];
       let fullscreenminH = String.fromCharCode(121,117,118,116,101,115,116,95,54,95,50,57,0);
       let basketballB = 3.0;
       let kuaishouz = String.fromCharCode(98,111,110,100,0);
      while (1.39 <= (basketballB / 1.85)) {
         basketballB -= parseFloat(`${parseInt(`${basketballB}`) & defaultfootballbgK.length}`);
         break;
      }
       let friendsM = String.fromCharCode(99,111,108,117,109,110,115,0);
       let analyticsH = String.fromCharCode(102,108,97,115,104,115,118,0);
      if (kuaishouz.length >= analyticsH.length) {
          let statisticsinactiveK = String.fromCharCode(114,116,99,100,0);
          let halffieldimage6 = 0;
          let iconarrowleft4: Array<any> = [652, 372];
          let stationW = 0.0;
         kuaishouz = `${iconarrowleft4.length & parseInt(`${basketballB}`)}`;
         statisticsinactiveK = `${parseInt(`${stationW}`) >> (Math.min(2, Math.abs(3)))}`;
         halffieldimage6 -= parseInt(`${stationW}`) | 2;
         iconarrowleft4.push(1);
      }
         kuaishouz += `${2 & kuaishouz.length}`;
       let country3 = 3;
       let starn = 1;
          let emojiu = String.fromCharCode(115,116,97,99,107,0);
         starn >>= Math.min(Math.abs(starn & friendsM.length), 2);
         emojiu += `${2 * emojiu.length}`;
         kuaishouz += "2";
      let whistleorangeB = analyticsH == String.fromCharCode(120,56,48,0);
      do {
         analyticsH += `${3 & kuaishouz.length}`;
         if (whistleorangeB) {
            break;
         }
      } while (whistleorangeB && (!friendsM.endsWith(analyticsH)));
      let tick_ = friendsM == String.fromCharCode(103,57,115,50,0);
      do {
         friendsM = `${country3 | 1}`;
         if (tick_) {
            break;
         }
      } while (tick_ && (friendsM.length >= 5));
      for (let b = 0; b < 2; b++) {
          let clubz = 0.0;
         fullscreenminH = `${defaultfootballbgK.length / (Math.max(4, analyticsH.length))}`;
         clubz *= parseFloat(`${parseInt(`${clubz}`)}`);
      }
         defaultfootballbgK.push(parseInt(`${basketballB}`));
      while (!kuaishouz.endsWith(`${fullscreenminH.length}`)) {
          let libcrashsdkD = 0.0;
          let subinz: Map<any, any> = new Map([[String.fromCharCode(99,97,116,97,112,117,108,116,0),336], [String.fromCharCode(100,117,114,103,101,114,107,105,110,103,0),718]]);
          let desc8 = 1.0;
          let editZ: Map<any, any> = new Map([[String.fromCharCode(99,104,105,108,108,95,101,95,49,57,0),false ], [String.fromCharCode(102,102,97,116,0),false ], [String.fromCharCode(97,118,101,114,97,103,101,115,0),false ]]);
         kuaishouz = "1";
         libcrashsdkD += parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${desc8}`))))}`);
         subinz = new Map([[`${editZ.size}`, 1 + editZ.size]]);
         desc8 += parseInt(`${libcrashsdkD}`);
         break;
      }
      while ((4 | analyticsH.length) > 4 && (basketballicon2.size | 4) > 1) {
          let play1: Array<any> = [String.fromCharCode(100,101,116,101,99,116,111,114,0), String.fromCharCode(101,110,117,109,101,114,97,116,111,114,0), String.fromCharCode(110,95,49,48,95,111,115,100,101,112,0)];
          let detailsI: Map<any, any> = new Map([[String.fromCharCode(102,101,97,116,117,114,101,100,0),421], [String.fromCharCode(108,105,98,115,119,115,99,97,108,101,0),97], [String.fromCharCode(116,114,105,97,108,115,0),75]]);
          let skip4 = 1.0;
         analyticsH = `${analyticsH.length}`;
         play1 = [1];
         detailsI = new Map([[`${play1.length}`, play1.length]]);
         skip4 *= parseFloat(`${detailsI.size}`);
         break;
      }
         basketballicon2.set(kuaishouz, kuaishouz.length);
         friendsM = `${basketballicon2.size / 3}`;
      storev.set(`${basketball_}`, 3 + parseInt(`${basketball_}`));
      if (sheetI) {
         break;
      }
   } while ((2 == eighteenC.length) && sheetI);
   while (schedulerJ.length >= 1) {
      storev = new Map([[`${storev.size}`, schedulerJ.length >> (Math.min(Math.abs(1), 2))]]);
      break;
   }

    

       let j_positionA = 1.0;
      while (5.38 < (j_positionA - j_positionA)) {
         j_positionA *= 2 / (Math.max(parseInt(`${j_positionA}`), 4));
         break;
      }
         j_positionA += parseInt(`${j_positionA}`);
       let alerti = String.fromCharCode(99,97,108,99,117,108,97,116,111,114,0);
      videoD = (basketball_ + matchv) <= 34;
      videoD = 15.23 > basketball_;
       let anner0 = 2.0;
       let bggradientL = 5.0;
       let assets1 = String.fromCharCode(99,114,117,110,0);
      while (anner0 >= 5.7) {
         bggradientL *= (parseFloat(`${String.fromCharCode(54,0) == assets1 ? parseInt(`${bggradientL}`) : assets1.length}`));
         break;
      }
      let baidun = anner0 >= 6534843.0;
      do {
         anner0 /= Math.max(parseInt(`${bggradientL}`), 2);
         if (baidun) {
            break;
         }
      } while (baidun && ((anner0 * 2.50) > 4.89));
          let typingg = String.fromCharCode(114,116,99,112,95,52,95,50,51,0);
          let sentryf = 3;
         anner0 += (String.fromCharCode(102,0) == typingg ? parseInt(`${bggradientL}`) : typingg.length);
         sentryf %= Math.max(5, sentryf - 2);
         bggradientL -= parseFloat(`${2}`);
      for (let a = 0; a < 1; a++) {
         bggradientL -= parseFloat(`${2 | parseInt(`${bggradientL}`)}`);
      }
         bggradientL /= Math.max(parseFloat(`${assets1.length - parseInt(`${anner0}`)}`), 3);
      for (let f = 0; f < 3; f++) {
         bggradientL -= parseFloat(`${parseInt(`${bggradientL}`) % (Math.max(3, 3))}`);
      }
       let modityx = 4;
       let mnewsI = 2;
          let sansf = String.fromCharCode(108,111,103,111,115,0);
         assets1 += "2";
         sansf = `${sansf.length + 2}`;
      schedulerJ += `${1 ^ storev.size}`;
      basketball_ /= Math.max(parseFloat(`${matchv - storev.size}`), 2);
   for (let j = 0; j < 3; j++) {
       let buildV = String.fromCharCode(116,111,103,103,108,101,100,0);
       let controlsf = String.fromCharCode(109,107,100,105,114,0);
       let videobufferloading1 = String.fromCharCode(100,107,101,121,0);
       let videojsb: Array<any> = [184, 86];
       let guide5 = 2.0;
         videobufferloading1 += `${(videobufferloading1 == String.fromCharCode(106,0) ? videobufferloading1.length : videojsb.length)}`;
         buildV = `${videobufferloading1.length}`;
         controlsf += `${buildV.length & videojsb.length}`;
         buildV = `${controlsf.length}`;
      while ((2 & videojsb.length) > 4 && (guide5 * 4.84) > 2.78) {
         guide5 += 1;
         break;
      }
         buildV = `${buildV.length}`;
      for (let y = 0; y < 3; y++) {
         controlsf = `${buildV.length - videojsb.length}`;
      }
      let analytics6 = 6843759 >= videojsb.length;
      do {
         videojsb = [1];
         if (analytics6) {
            break;
         }
      } while (((videojsb.length * guide5) <= 5.63) && analytics6);
      while (5 <= buildV.length) {
         guide5 -= videojsb.length + videobufferloading1.length;
         break;
      }
       let shareblackW = false;
       let clockQ = false;
      let penaltyj = guide5 >= 9549949.0;
      do {
         guide5 += parseInt(`${guide5}`) - 1;
         if (penaltyj) {
            break;
         }
      } while (penaltyj && (5.70 == guide5));
      let interstitialK = clockQ ? !clockQ : clockQ;
      do {
         clockQ = controlsf.length < 62;
         if (interstitialK) {
            break;
         }
      } while (interstitialK && (clockQ || !shareblackW));
      if (2 >= buildV.length) {
         clockQ = 56.62 == guide5 || shareblackW;
      }
       let basketballawayteamU = true;
      while (!clockQ || !shareblackW) {
          let configv: Array<any> = [268, 796];
          let runtimeH = 3.0;
          let yellowvideolive0 = 2;
          let privilegep = String.fromCharCode(115,119,105,122,122,108,105,110,103,0);
          let static_40Q = 5;
         shareblackW = clockQ;
         configv.push(parseInt(`${runtimeH}`));
         runtimeH *= static_40Q & privilegep.length;
         yellowvideolive0 ^= 1;
         privilegep += `${yellowvideolive0 ^ 3}`;
         static_40Q %= Math.max(2, 4);
         break;
      }
      basketball_ += parseFloat(`${parseInt(`${guide5}`) << (Math.min(Math.abs(storev.size), 3))}`);
   }
    yys_giftbutton_footballtrophy.sportDetailsVipPopupTimesAnalytics();
    
  }, []);

  const onGoPrivateChatPress = () => {
       let circleU = 0.0;
    let render2 = 2.0;
    let pathi = String.fromCharCode(112,97,103,101,114,0);
    let dicelogoe = String.fromCharCode(104,111,114,110,0);
    let sports = String.fromCharCode(115,95,57,50,95,116,97,108,107,0);
    let anythink7 = String.fromCharCode(115,117,109,0);
    let confirmationk = 1.0;
    let reddownarrowE = 5.0;
    let sliderJ: Array<any> = [String.fromCharCode(99,108,97,109,112,0), String.fromCharCode(112,95,53,49,95,115,119,105,99,104,0)];
    let telegrame: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,97,110,103,108,101,0),String.fromCharCode(104,119,114,97,110,100,0)], [String.fromCharCode(116,101,115,116,98,105,116,0),String.fromCharCode(111,95,55,55,95,114,101,109,97,112,112,101,100,0)]]);
    let materialL = 2.0;
    let iconclosewhitewithbgE = 1.0;
    let referrerp = 4;
    let assets3: Map<any, any> = new Map([[String.fromCharCode(109,105,100,110,105,103,104,116,0),71], [String.fromCharCode(112,97,115,115,105,118,101,0),781], [String.fromCharCode(101,110,100,97,0),58]]);
    let ccdfbdabcabbbedb3 = true;
   if (dicelogoe.length == 4) {
      confirmationk *= 1 ^ dicelogoe.length;
   }
   let policyS = String.fromCharCode(118,118,115,110,122,121,0) == dicelogoe;
   do {
      dicelogoe = "3";
      if (policyS) {
         break;
      }
   } while (policyS && (!dicelogoe.endsWith(sports)));
      sports += `${parseInt(`${render2}`) | 1}`;
      anythink7 += `${3 * sports.length}`;
   if ((iconclosewhitewithbgE - 2.97) > 5.10) {
       let stringsd = String.fromCharCode(118,97,114,119,105,100,116,104,0);
         stringsd += `${stringsd.length}`;
      for (let m = 0; m < 1; m++) {
         stringsd = `${stringsd.length}`;
      }
      if (stringsd.length == 5) {
          let read8: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,105,110,103,0),181], [String.fromCharCode(112,105,110,110,101,100,0),981], [String.fromCharCode(116,101,109,112,0),716]]);
          let iconpipshrinkp = 3.0;
          let libavdevicev = 3;
          let completeE: Array<any> = [952, 333];
         stringsd += `${libavdevicev % (Math.max(parseInt(`${iconpipshrinkp}`), 3))}`;
         read8.set(`${completeE.length}`, read8.size << (Math.min(Math.abs(3), 1)));
         iconpipshrinkp /= Math.max(1, read8.size);
         libavdevicev *= 1;
         completeE.push(read8.size);
      }
      pathi = `${parseInt(`${reddownarrowE}`)}`;
   }
   while ((iconclosewhitewithbgE / (Math.max(circleU, 8))) <= 5.43 || (iconclosewhitewithbgE / (Math.max(5.43, 5))) <= 2.65) {
      circleU -= parseFloat(`${parseInt(`${materialL}`)}`);
      break;
   }
      referrerp *= parseInt(`${reddownarrowE}`) | 3;
      sliderJ.push(3 | parseInt(`${reddownarrowE}`));

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

        {/* {bannerAd && (
          <View style={{
            // paddingLeft: spacing.sideOffset,
            // paddingRight: spacing.sideOffset,
            // paddingVertical: 5
          }}>
            <BannerContainer
              bannerAd={bannerAd}
              onMount={() => {
                yys_giftbutton_footballtrophy.videoPlayerBannerViewAnalytics({
                  playerType: 'sport',
                });
              }}
              onPress={() => {
                yys_giftbutton_footballtrophy.videoPlayerBannerClickAnalytics({
                  playerType: 'sport',
                });
              }}
            />
          </View>
        )} */}

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
              source={require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
