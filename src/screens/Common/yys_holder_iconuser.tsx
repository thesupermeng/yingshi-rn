

class PopupWeibo {
    static predictionbuttonCustom = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
  useContext,
  memo,
} from "react";
import {
  View,
  TouchableOpacity,
  Share,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import FavoriteButton from "../../components/button/yys_score_button";
import {
  FavoriteSvg,
  VodDetailSvg,
  DownloadVodSvg,
  SinaSvg,
  WechatSvg,
  QqSvg,
  PyqSvg,
  MoreArrowSvg,
  SourceIconSvg,
  VipIconSvg,
} from "@static";
import ScreenContainer from "../../components/container/yys_matches";
import { useTheme, useFocusEffect, useRoute, useIsFocused } from "@react-navigation/native";
import { yysFloaterIconsubssuccess } from "../../../yys_yellowscoreball_topon";

import { RootStackScreenProps } from "@type";
import {
  yysMime,
  yysFullLibcrashsdk,
  yysSoundTelegram,
  yysIconviewer,
} from "@type";
import { addVodToHistory, playVod } from "@redux";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import {
  yysNext,
  yysIconpointscoreCountdown,
} from "@redux";
import VodEpisodeSelectionModal from "../../components/modal/yys_page_yellow";
import FastImage from "../../components/common/yys_alert_backwhite";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  DOWNLOAD_FEATURE_ENABLED,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/yys_unlock_gpay_button";
import VodListVertical from "../../components/vod/yys_giftbutton";
import VodPlayer from "../../components/videoPlayer/yys_colors";
import { FlatList } from "react-native-gesture-handler";
import { yysDownloadingCombined } from "@redux";
import BingSearch from "../../components/container/yys_privilege_homeinactive";

import NoConnection from "../../components/common/yys_librrc_zhengpian";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux";
import { AdsBannerContext } from "../../contexts/yys_libreactperfloggerjni_defaultroombg";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";

import LinearGradient from "react-native-linear-gradient";
import AdultVideoVipModal from "../../components/modal/yys_shoot_defaultfootballbg";
import VipRegisterBar from "../../components/adultVideo/yys_sheet_goallogo";
import {
  disableAdultMode,
  enableAdultMode,
  incrementAdultVideoWatchTime,
} from "@redux";

import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenModel } from "@type";
import { yysInactive } from "@api";

import DescriptionBottomSheet from "../../components/videoPlayer/Play/yys_incident";
import { VodDescription } from "../../components/videoPlayer/Play/vodDescription";

import { BannerContainer } from "../../components/container/yys_whiteanimationlive";
import { yysConfig } from "@utility";
import { yysPangleCommon } from "@constants";
import BecomeVipOverlay from "../../components/modal/yys_executor";
import { yysMembership } from "../../api/yys_config";
import SimpleToast from "react-native-simple-toast";
import DownloadVodSelectionModal from "../../components/modal/yys_manager";
import DeviceInfo from "react-native-device-info";
import { addVideoToDownloadThunk } from "@redux";
import { IConfirmationLibffmpegkit, yysStatistics, yysStoreService } from "@type";
import { yysHomeinactiveUntick } from "@utility";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";
import { yysLibturbomodulejsijni } from "../../routes/yys_guide_android";

let insetsTop = 0;
let insetsBottom = 0;

type yysLargeQuest = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

const definedValue = (val: any) => {
  if (val === undefined || val === null) {
    return "";
  }
  return val + " ";
};

const server = new BridgeServer(PopupWeibo.predictionbuttonCustom([10,22,22,18,61,17,7,16,20,11,1,7,98],0x62,false), true); 

const getNoAdsUri = async (url: string, vodId: string) => {
  
  const m3u8Content = (await RNFetchBlob.fetch("GET", url)).text().toString();

  const isPlaylistFile =
    m3u8Content.match(/#EXT-X-TARGETDURATION:\d*/) !== null;

  if (!isPlaylistFile) {
    return url;
  } else {
    const modifiedPlaylist = m3u8Content.replace(
      /#EXT-X-TARGETDURATION:\d*/,
      "#EXT-X-TARGETDURATION:999"
    );
    const uniqueIdentifier = url.split("/").at(-1)?.replace(".m3u8", "");

    server.get(`/${uniqueIdentifier}/index.m3u8`, async (req, res) => {
      res.send(200, "application/vnd.apple.mpegurl", modifiedPlaylist);
    });

    return `http://localhost:${PLAY_HTTP_SERVER_PORT}/${uniqueIdentifier}/index.m3u8`;
  }

  
  
  
  //   .filter((part) => !part.includes(".m3u8"))
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  
  
  
  
  
  //   .filter((txt) => txt.includes(".m3u8"))
  
  

  
  
  
  

  
  
  

  

  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //   (_, index) => !adsLine.includes(index)
  

  

  
  
  
  
  
  
  

  
  
  
  
  

  
};

const Play = ({ navigation, route }: RootStackScreenProps<"播放">) => {
  const { setRoute: setAdsRoute } = useContext(AdsBannerContext);
  useFocusEffect(() => {
    
    setAdsRoute(route.name);
  });

  const { colors, spacing, textVariants, icons } = useTheme();
  const dispatch = useAppDispatch();

  const vodReducer: yysIconpointscoreCountdown = useAppSelector(
    ({ vodReducer }: yysIconclosewhiteBaiduads) => vodReducer
  );
  const vodFavouriteReducer: yysNext = useAppSelector(
    ({ vodFavouritesReducer }: yysIconclosewhiteBaiduads) => vodFavouritesReducer
  );
  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );
  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const adultMode = route.params.player_mode === "adult" ? true : false;
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);

  useEffect(() => {
    if (route.params.player_mode === "adult") {
      dispatch(enableAdultMode());
    } else {
      dispatch(disableAdultMode());
    }
  }, []);

  const vod = vodReducer.playVod.vod;

  
  const [initTime, setInitTime] = useState(0);
  const isFavorite = vodFavouriteReducer.favorites.some(
    (x) => x.vod_id === vod?.vod_id
  );
  const [currentEpisode, setCurrentEpisode] = useState(
    vod?.episodeWatched === undefined ? 0 : vod.episodeWatched
  );

  

  const [isVodRestricted, setVodRestricted] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const [actualNumberOfLines, setActualNumberOfLines] = useState(0);
  const textRef = useRef(null);

  const handleTextLayout = (event: { nativeEvent: { lines: any } }) => {
    const { lines } = event.nativeEvent;
    setActualNumberOfLines(lines.length);
  };

  const currentTimeRef = useRef<number>(0);
  const episodeRef = useRef<FlatList>(null);
  const videoPlayerRef = useRef() as React.MutableRefObject<yysLargeQuest>;
  const currentEpisodeRef = useRef<number>();
  const currentSourceRef = useRef<number>();
  const sourceRef = useRef<FlatList>(null);

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const isVip = yysIconstar.isVip(userState.user);

  const [isReadyPlay, setReadyPlay] = useState(false);

  

  const [currentSourceId, setCurrentSourceId] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [currentQuality, setCurrentQuality] = useState(
    vod?.sourceWatched === undefined ? 0 : vod.sourceWatched
  );
  const [vodSources, setVodSources] = useState<yysSoundTelegram[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVodPlayerLoading, setIsVodPlayerLoading] = useState(false);
  const [shouldResumeAfterLoad, setShouldResumeAfterLoad] = useState(false);

  const [isShowDescription, setShowDescription] = useState(false);
  const [isShowDlEpisode, setShowDlEpisode] = useState(false);

  const [bannerAd, setBannerAd] = useState<yysIconviewer>();


  const downloadedVod: yysStoreService | undefined = useAppSelector(({ downloadVideoReducer }: yysIconclosewhiteBaiduads) => { return downloadVideoReducer.downloads.find(download => download.vod.vod_id === vod?.vod_id) })
  const episode = adultMode ? downloadedVod?.episodes.find(ep => ep.vodUrlNid === currentEpisode && ep.status === IConfirmationLibffmpegkit.IPointStar) : downloadedVod?.episodes.find(ep => ep.vodSourceId === currentSourceId && ep.vodUrlNid === currentEpisode && ep.status === IConfirmationLibffmpegkit.IPointStar)


  
  const onPressSource = useCallback(
    (itemId: any) => {
      if (itemId !== currentSourceId) {
        setCurrentSourceId(itemId);
        currentTimeRef.current = 0; 
        if (videoPlayerRef.current) {
          videoPlayerRef.current?.setPause(true);
          setShouldResumeAfterLoad(true);
        }
      }
    },
    [currentSourceId]
  );

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const renderSources = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          
          alignItems: "center",
          backgroundColor:
            currentSourceId === item.source_id ? colors.primary : colors.search,
          paddingVertical: 8,
          paddingHorizontal: 8,
          
          marginRight: spacing.xs,
          ...styles.episodeBtn,
        }}
        // onPress={() => onPressEpisode(item.id)}
        onPress={() => onPressSource(item.source_id)}
      >
        <SourceIconSvg
          style={{
            alignSelf: "center",
            marginRight: 3,
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            fontSize: 15,
            textAlign: "center",
            verticalAlign: "bottom",
            fontWeight: "600",
            color:
              currentSourceId === item.source_id
                ? colors.selected
                : colors.muted,
          }}
        >
          {item.source_name}
        </Text>
      </TouchableOpacity>
    ),
    [currentSourceId]
  );

  const EPISODE_RANGE_SIZE = 100;

  const showEpisodeRangeStart = useMemo(
    () =>
      Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) *
      EPISODE_RANGE_SIZE,
    [currentEpisode, vod, currentSourceId]
  );

  let foundSource = vodSources.find(
    ({ source_id }) => source_id === currentSourceId
  )?.vod_play_list;
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        
        
        foundSource
          ? foundSource.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [currentEpisode, showEpisodeRangeStart, vod, currentSourceId]
  );
  const onShare = async () => {
       let typing2: Map<any, any> = new Map([[String.fromCharCode(112,111,114,116,95,99,95,49,57,0),941], [String.fromCharCode(122,95,55,48,95,109,97,116,104,111,112,115,0),499], [String.fromCharCode(105,95,54,95,115,116,114,105,115,116,114,0),4]]);
    let iconplayI = 0.0;
    let backP = String.fromCharCode(116,114,97,118,101,114,115,97,108,95,106,95,55,55,0);
    let referrer6 = String.fromCharCode(122,95,51,50,95,101,97,116,105,110,103,0);
    let libnmsI = 0;
    let delegate_ql = 0.0;
    let yellowanimationlivea = true;
    let iconnotificationnew1 = String.fromCharCode(114,101,109,105,120,95,107,95,56,54,0);
    let taiwanc = 3.0;
    let updates1 = String.fromCharCode(112,95,51,95,115,101,99,107,101,121,0);
   let twitterQ = String.fromCharCode(122,57,57,55,97,103,104,106,0) == referrer6;
   do {
      referrer6 = `${(iconnotificationnew1.length % (Math.max(5, (yellowanimationlivea ? 2 : 4))))}`;
      if (twitterQ) {
         break;
      }
   } while ((2 < iconnotificationnew1.length && referrer6 != String.fromCharCode(105,0)) && twitterQ);
       let humidityk: Map<any, any> = new Map([[String.fromCharCode(117,97,110,95,54,95,57,49,0),6], [String.fromCharCode(115,104,97,100,101,115,95,119,95,54,49,0),28]]);
       let mimoA = 1.0;
       let holderI = 1;
         humidityk = new Map([[`${humidityk.size}`, 1 ^ holderI]]);
         holderI /= Math.max(2, 2);
          let androidy = String.fromCharCode(100,101,99,111,109,112,97,110,100,95,112,95,51,51,0);
          let giftbuttonL = 5.0;
          let predictionbannershared0 = false;
         humidityk.set(`${predictionbannershared0}`, (androidy.length & (predictionbannershared0 ? 3 : 2)));
         androidy += `${parseInt(`${giftbuttonL}`)}`;
      let description_o15 = 9687356.0 >= mimoA;
      do {
          let libjsinspectors = 4.0;
         mimoA += parseFloat(`${parseInt(`${mimoA}`)}`);
         libjsinspectors += 2 % (Math.max(parseInt(`${libjsinspectors}`), 4));
         if (description_o15) {
            break;
         }
      } while (((4 << (Math.min(2, Math.abs(holderI)))) == 1) && description_o15);
      let livei = humidityk.size >= 4968896;
      do {
          let change0 = 0;
          let sortn = 2.0;
          let basketballV: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,95,102,95,51,50,0),true ], [String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,112,95,56,53,0),false ], [String.fromCharCode(120,95,55,95,109,101,108,116,0),true ]]);
         humidityk.set(`${mimoA}`, parseInt(`${mimoA}`) + 2);
         change0 -= change0;
         sortn += parseInt(`${sortn}`) | change0;
         basketballV.set(`${sortn}`, basketballV.size * parseInt(`${sortn}`));
         if (livei) {
            break;
         }
      } while (livei && (!Array.from(humidityk.keys()).includes(`${holderI}`)));
      if (mimoA <= 5.13) {
         mimoA *= parseFloat(`${1}`);
      }
         holderI |= humidityk.size % 2;
      for (let o = 0; o < 3; o++) {
          let mode2: Map<any, any> = new Map([[String.fromCharCode(99,95,49,57,95,108,105,98,110,100,105,0),851], [String.fromCharCode(111,98,106,101,99,116,115,95,57,95,57,50,0),170]]);
          let huaweiu = 1.0;
          let resendO = true;
          let privatechatbgO = String.fromCharCode(103,95,51,48,95,110,97,110,111,115,101,99,111,110,100,115,0);
         holderI += (parseInt(`${huaweiu}`) << (Math.min(5, Math.abs((resendO ? 2 : 4)))));
         mode2 = new Map([[`${mode2.size}`, mode2.size]]);
         huaweiu /= Math.max(mode2.size, 2);
         resendO = mode2.size < privatechatbgO.length;
         privatechatbgO += `${mode2.size}`;
      }
       let gemfile2: Array<any> = [373, 525, 238];
       let dependencyp: Array<any> = [String.fromCharCode(99,95,52,53,0), String.fromCharCode(109,95,50,57,95,102,111,114,101,103,114,111,117,110,100,0)];
      iconplayI -= humidityk.size - 1;

    try {

   while ((1.39 / (Math.max(5, delegate_ql))) > 4.95) {
       let cornerh: Array<any> = [751, 360];
       let orientationS = 1.0;
       let danger3 = 0;
       let x_countC: Map<any, any> = new Map([[String.fromCharCode(114,95,54,51,95,97,118,118,115,0),true ], [String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,113,95,51,48,0),false ], [String.fromCharCode(100,95,54,53,95,115,110,97,112,115,104,111,116,0),true ]]);
         orientationS -= parseInt(`${orientationS}`);
      for (let g = 0; g < 1; g++) {
         danger3 %= Math.max(4, 1);
      }
      if (1 == (danger3 >> (Math.min(Math.abs(x_countC.size), 5))) || 1 == (danger3 >> (Math.min(Math.abs(x_countC.size), 4)))) {
         danger3 |= x_countC.size | 2;
      }
       let windt = String.fromCharCode(115,113,108,95,102,95,55,57,0);
      for (let w = 0; w < 2; w++) {
         windt = `${parseInt(`${orientationS}`)}`;
      }
          let libfbi: Map<any, any> = new Map([[String.fromCharCode(101,120,112,95,102,95,49,50,0),String.fromCharCode(117,110,122,105,112,95,101,95,49,57,0)], [String.fromCharCode(112,114,111,99,101,115,115,111,114,95,98,95,51,49,0),String.fromCharCode(118,95,57,53,95,98,116,111,98,105,110,0)], [String.fromCharCode(116,114,101,101,114,101,97,100,101,114,95,111,95,51,53,0),String.fromCharCode(117,112,108,111,97,100,95,50,95,51,52,0)]]);
         danger3 ^= parseInt(`${orientationS}`);
         libfbi = new Map([[`${libfbi.size}`, libfbi.size]]);
         windt += `${3 | parseInt(`${orientationS}`)}`;
         x_countC = new Map([[`${danger3}`, 2]]);
          let lesso = false;
          let condensede = 0;
          let commonc: Array<any> = [828, 715];
         danger3 |= 2;
         lesso = lesso || commonc.length < 46;
         condensede |= (commonc.length << (Math.min(2, Math.abs((lesso ? 4 : 1)))));
         danger3 |= cornerh.length ^ x_countC.size;
         windt += `${x_countC.size}`;
      if (!Array.from(x_countC.values()).includes(cornerh.length)) {
          let downC = 0.0;
          let termsg = 3.0;
          let nextd: Array<any> = [340, 86, 299];
          let termsN: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,54,95,54,56,0),107], [String.fromCharCode(107,95,50,48,95,111,98,115,101,114,118,97,116,105,111,110,0),142], [String.fromCharCode(98,95,53,48,95,103,114,111,119,105,110,103,0),398]]);
          let emojiheartl: Array<any> = [463, 124, 599];
         cornerh.push(windt.length);
         downC *= parseFloat(`${2}`);
         termsg *= 3;
         nextd.push(nextd.length);
         termsN.set(`${downC}`, 1 | parseInt(`${downC}`));
         emojiheartl.push(3 & termsN.size);
      }
      libnmsI ^= 2;
      break;
   }
      taiwanc += libnmsI + 3;
      

      libnmsI -= 3;
   while (taiwanc >= 5.8) {
      taiwanc /= Math.max(3, parseInt(`${iconplayI}`) >> (Math.min(2, Math.abs(2))));
      break;
   }
      yys_giftbutton_footballtrophy.playsShareClicksAnalytics();

      taiwanc /= Math.max(4, parseInt(`${iconplayI}`));
   for (let c = 0; c < 1; c++) {
      typing2.set(iconnotificationnew1, parseInt(`${taiwanc}`) | 2);
   }
      

      typing2 = new Map([[`${libnmsI}`, libnmsI >> (Math.min(Math.abs(parseInt(`${delegate_ql}`)), 3))]]);
      iconnotificationnew1 = "3";

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

       let combinev = 0;
       let sansX = String.fromCharCode(118,95,49,51,95,99,117,114,116,97,105,110,115,0);
         combinev &= combinev;
         sansX += `${3 >> (Math.min(5, sansX.length))}`;
          let ballI = 0.0;
         sansX += `${sansX.length + combinev}`;
         ballI += parseInt(`${ballI}`);
      while (sansX.length <= 4) {
         combinev |= 1;
         break;
      }
          let subtextR = 3;
          let binddatasg: Map<any, any> = new Map([[String.fromCharCode(99,104,111,115,101,95,51,95,56,55,0),false ], [String.fromCharCode(105,110,116,114,112,95,113,95,50,55,0),true ], [String.fromCharCode(120,95,49,48,48,95,100,101,102,97,117,108,116,0),true ]]);
         sansX = `${sansX.length}`;
         subtextR >>= Math.min(1, Math.abs(binddatasg.size));
         binddatasg.set(`${subtextR}`, 2);
         combinev *= (String.fromCharCode(81,0) == sansX ? sansX.length : combinev);
      referrer6 += `${(referrer6 == String.fromCharCode(65,0) ? (yellowanimationlivea ? 3 : 2) : referrer6.length)}`;
      taiwanc -= (String.fromCharCode(113,0) == backP ? backP.length : (yellowanimationlivea ? 5 : 2));

      if (APP_NAME_CONST == "爱美剧") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;

   while ((iconnotificationnew1.length >> (Math.min(Math.abs(2), 5))) >= 1 || (iconnotificationnew1.length / (Math.max(4, parseInt(`${delegate_ql}`)))) >= 2) {
      iconnotificationnew1 = "3";
      break;
   }
   for (let f = 0; f < 1; f++) {
      yellowanimationlivea = updates1.endsWith(`${taiwanc}`);
   }
      }

      const result = await Share.share({
        message: msg,
      });

      referrer6 += "1";
       let xvodJ = 0.0;
       let f_imager = 5.0;
       let empty8 = false;
      for (let s = 0; s < 2; s++) {
         xvodJ /= Math.max(4, (parseFloat(`${(empty8 ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${f_imager}`)), 4))}`)));
      }
         xvodJ += parseFloat(`${parseInt(`${f_imager}`) + 3}`);
         xvodJ *= parseFloat(`${parseInt(`${xvodJ}`) ^ parseInt(`${f_imager}`)}`);
         empty8 = 28.46 <= f_imager && 28.46 <= xvodJ;
       let defaultroombgr = String.fromCharCode(115,95,49,57,95,115,104,97,100,105,110,103,0);
         empty8 = !empty8 && f_imager < 21.50;
      while (1.11 == (xvodJ / 5.56) || 5.56 == xvodJ) {
          let side1 = 4;
          let friendsS = 1.0;
         empty8 = 72.64 < xvodJ && !empty8;
         side1 >>= Math.min(Math.abs(side1), 3);
         friendsS += parseFloat(`${side1}`);
         break;
      }
         empty8 = (parseFloat(`${defaultroombgr.length}`) + xvodJ) > 58.13;
      while (f_imager < xvodJ) {
         f_imager *= parseInt(`${xvodJ}`);
         break;
      }
      backP += "3";
      if (result.action === Share.sharedAction) {

   let pressure3 = String.fromCharCode(100,108,104,0) == updates1;
   do {
      updates1 = `${parseInt(`${taiwanc}`) * updates1.length}`;
      if (pressure3) {
         break;
      }
   } while (pressure3 && (3 > updates1.length));
      taiwanc /= Math.max(libnmsI * 3, 3);
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   let manifestA = 8196069 >= typing2.size;
   do {
       let libjsinspectora = 5.0;
       let subsl = 3;
       let scrollviewC = 4;
       let fullW = 0.0;
      while ((scrollviewC >> (Math.min(Math.abs(5), 3))) >= 5 || (parseInt(`${fullW}`) * scrollviewC) >= 5) {
          let list8 = 5;
          let sporti = String.fromCharCode(97,115,121,110,99,95,110,95,49,54,0);
          let arrowQ = String.fromCharCode(114,95,50,56,95,101,97,105,100,99,116,0);
          let clubf = true;
          let pangle7 = 4.0;
         fullW *= list8;
         sporti = `${1 ^ parseInt(`${pangle7}`)}`;
         arrowQ += `${(arrowQ == String.fromCharCode(66,0) ? arrowQ.length : (clubf ? 5 : 4))}`;
         clubf = sporti.length <= arrowQ.length;
         pangle7 -= 1;
         break;
      }
      for (let k = 0; k < 3; k++) {
         fullW /= Math.max(parseInt(`${libjsinspectora}`), 4);
      }
      if ((scrollviewC >> (Math.min(Math.abs(2), 2))) <= 5) {
         subsl ^= parseInt(`${fullW}`);
      }
          let videos = 5.0;
         libjsinspectora *= 3;
         videos += parseFloat(`${parseInt(`${videos}`)}`);
          let buttonU = String.fromCharCode(114,95,48,95,108,112,99,109,0);
          let predictiondefaulty = true;
         subsl >>= Math.min(3, Math.abs(subsl ^ 1));
         buttonU = `${((predictiondefaulty ? 1 : 5) & buttonU.length)}`;
         predictiondefaulty = !buttonU.startsWith(`${predictiondefaulty}`);
         subsl *= 2 / (Math.max(parseInt(`${fullW}`), 7));
      while (scrollviewC <= fullW) {
         fullW *= parseInt(`${fullW}`) & 1;
         break;
      }
      for (let t = 0; t < 1; t++) {
         scrollviewC <<= Math.min(3, Math.abs(scrollviewC));
      }
      while ((fullW * 1.2) > 1.94) {
         scrollviewC %= Math.max(1, parseInt(`${fullW}`));
         break;
      }
         subsl >>= Math.min(Math.abs(scrollviewC + parseInt(`${fullW}`)), 4);
          let moonB = String.fromCharCode(97,95,52,57,95,109,108,112,100,115,112,0);
         libjsinspectora -= scrollviewC + parseInt(`${fullW}`);
         moonB = `${moonB.length - 1}`;
         libjsinspectora -= subsl;
      typing2.set(backP, referrer6.length % (Math.max(6, backP.length)));
      if (manifestA) {
         break;
      }
   } while ((1 > typing2.size && (typing2.size / (Math.max(1, 8))) > 2) && manifestA);
      taiwanc /= Math.max(2, libnmsI % (Math.max(3, iconnotificationnew1.length)));
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let iconwatch8 = false;
    let smallbrightness7: Array<any> = [String.fromCharCode(109,95,53,53,95,116,105,109,101,111,117,116,115,0), String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,116,95,50,56,0), String.fromCharCode(107,95,53,53,95,100,114,97,103,0)];
    let bannere = String.fromCharCode(99,95,49,49,95,116,105,99,107,101,114,0);
    let icon6 = String.fromCharCode(106,95,54,54,95,101,110,100,105,97,110,110,101,115,115,0);
    let hooksB: Map<any, any> = new Map([[String.fromCharCode(100,95,57,53,95,100,97,116,101,115,0),300], [String.fromCharCode(115,101,112,105,97,95,116,95,57,57,0),862]]);
    let bgvipxvodf = String.fromCharCode(119,105,101,110,101,114,95,111,95,54,49,0);
    let helper5: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,112,97,110,101,108,115,0),String.fromCharCode(114,101,115,105,100,101,110,99,101,95,117,95,53,52,0)], [String.fromCharCode(99,95,56,50,95,112,97,103,105,110,97,116,105,111,110,0),String.fromCharCode(110,99,114,121,112,116,105,111,110,95,50,95,53,57,0)]]);
    let plusp = false;
    let iconsharefriendsy: Array<any> = [String.fromCharCode(100,111,117,98,108,101,115,95,49,95,50,50,0), String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,112,95,49,50,0)];
    let disconnectedlogon: Array<any> = [422, 610, 823];
    let paginationx = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,112,95,51,52,0);
    let notificationgrayl = 4.0;
    let register_f8q = true;
    let remindero = false;
   if (plusp) {
      disconnectedlogon.push(hooksB.size);
   }
       let matchesD = 5.0;
       let defaultroombgJ: Map<any, any> = new Map([[String.fromCharCode(122,95,52,52,95,101,115,115,101,110,116,105,97,108,0),true ], [String.fromCharCode(112,95,56,95,114,101,100,101,116,101,99,116,0),false ]]);
       let goallogoQ = String.fromCharCode(120,95,50,53,95,101,110,117,109,115,0);
          let xvodI: Map<any, any> = new Map([[String.fromCharCode(98,117,114,115,116,121,95,56,95,54,48,0),925], [String.fromCharCode(99,95,49,56,95,115,115,116,104,114,101,115,104,0),787]]);
          let benefitQ: Array<any> = [911, 847];
         defaultroombgJ = new Map([[`${xvodI.size}`, xvodI.size]]);
         benefitQ = [1];
         defaultroombgJ.set(`${matchesD}`, defaultroombgJ.size & 3);
          let logoH = String.fromCharCode(115,117,98,110,111,100,101,95,122,95,56,0);
         matchesD -= parseFloat(`${1 - parseInt(`${matchesD}`)}`);
         logoH += `${logoH.length}`;
          let gestures8 = String.fromCharCode(107,95,53,52,95,101,110,117,109,101,114,97,116,111,114,0);
         matchesD += parseFloat(`${2}`);
         gestures8 += `${gestures8.length}`;
       let redgoal3 = String.fromCharCode(108,95,50,50,95,99,97,114,100,105,110,97,108,105,116,121,0);
         matchesD *= parseFloat(`${parseInt(`${matchesD}`)}`);
      let annerp = redgoal3 == String.fromCharCode(51,107,97,119,102,57,112,115,113,112,0);
      do {
          let tickv = 4.0;
          let chinasamef = 0.0;
          let foundI = String.fromCharCode(117,110,105,111,110,101,100,95,122,95,56,48,0);
         redgoal3 += `${3 | redgoal3.length}`;
         tickv -= foundI.length >> (Math.min(4, Math.abs(parseInt(`${chinasamef}`))));
         chinasamef -= 3 * parseInt(`${chinasamef}`);
         foundI += `${foundI.length & parseInt(`${tickv}`)}`;
         if (annerp) {
            break;
         }
      } while (annerp && (!redgoal3.includes(`${matchesD}`)));
       let leftr = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,49,95,53,56,0);
      for (let j = 0; j < 2; j++) {
          let subinp = String.fromCharCode(121,95,52,53,95,112,117,98,108,105,115,104,97,98,108,101,0);
          let notification5 = false;
          let eyeopenI: Array<any> = [667, 656, 944];
          let eventF = 1;
          let sheetI = 2.0;
         matchesD += parseFloat(`${redgoal3.length}`);
         subinp = `${eyeopenI.length >> (Math.min(Math.abs(1), 5))}`;
         notification5 = 20 == eyeopenI.length;
         eventF |= subinp.length ^ 3;
         sheetI += ((notification5 ? 4 : 2) - eyeopenI.length);
      }
      smallbrightness7 = [icon6.length ^ 3];
       let uimanagerf = 4;
       let hejiH: Map<any, any> = new Map([[String.fromCharCode(98,95,49,57,95,98,111,117,110,99,105,110,101,115,115,0),727], [String.fromCharCode(112,95,57,48,95,117,110,100,111,0),229], [String.fromCharCode(97,110,105,109,95,113,95,57,55,0),637]]);
      if (Array.from(hejiH.values()).includes(uimanagerf)) {
         hejiH.set(`${uimanagerf}`, hejiH.size);
      }
         uimanagerf &= 2 & hejiH.size;
      for (let h = 0; h < 1; h++) {
         hejiH.set(`${uimanagerf}`, uimanagerf >> (Math.min(Math.abs(2), 3)));
      }
         uimanagerf |= 2 ^ uimanagerf;
      let libffmpegkit6 = 8626178 <= hejiH.size;
      do {
          let circlem = String.fromCharCode(109,98,105,110,116,114,97,95,114,95,53,0);
         hejiH.set(`${circlem}`, hejiH.size + 1);
         if (libffmpegkit6) {
            break;
         }
      } while ((Array.from(hejiH.values()).includes(uimanagerf)) && libffmpegkit6);
         hejiH = new Map([[`${hejiH.size}`, hejiH.size]]);
      iconwatch8 = null != helper5.get(`${plusp}`);
   for (let k = 0; k < 2; k++) {
      icon6 += `${((plusp ? 2 : 4) / (Math.max(iconsharefriendsy.length, 6)))}`;
   }
       let gifgoalbg0: Array<any> = [483, 403];
       let colors0 = 1;
      for (let v = 0; v < 2; v++) {
         colors0 &= colors0 - gifgoalbg0.length;
      }
      let mime8 = 5051329 >= colors0;
      do {
         colors0 ^= gifgoalbg0.length;
         if (mime8) {
            break;
         }
      } while (mime8 && (gifgoalbg0.length < colors0));
      let cornerg = 7115335 >= gifgoalbg0.length;
      do {
         gifgoalbg0 = [3];
         if (cornerg) {
            break;
         }
      } while ((colors0 <= gifgoalbg0.length) && cornerg);
         gifgoalbg0 = [colors0];
         gifgoalbg0 = [colors0];
         colors0 |= 3;
      bgvipxvodf += `${helper5.size}`;

    const state = await NetInfo.fetch();

   if ((5 & iconsharefriendsy.length) > 1) {
       let calendarc = 0;
         calendarc &= calendarc & 2;
       let cornerq: Map<any, any> = new Map([[String.fromCharCode(121,95,53,51,95,101,120,115,115,0),771], [String.fromCharCode(110,97,109,101,116,111,105,110,100,101,120,95,50,95,53,56,0),156], [String.fromCharCode(100,117,112,115,111,114,116,95,105,95,54,57,0),76]]);
       let c_lockF = String.fromCharCode(122,95,49,53,95,115,116,114,105,100,105,110,103,0);
       let airbnbstarP = String.fromCharCode(102,95,50,52,95,112,116,120,99,0);
      iconsharefriendsy.push(3);
   }
       let soundf = String.fromCharCode(112,97,115,115,101,100,95,112,95,56,48,0);
       let nativer: Array<any> = [16, 421];
      for (let e = 0; e < 1; e++) {
         nativer = [soundf.length];
      }
      if (3 < (nativer.length / (Math.max(soundf.length, 5)))) {
          let iconshareo = String.fromCharCode(112,95,55,54,95,102,119,114,105,116,101,0);
          let tempnodatagifx = String.fromCharCode(99,111,108,108,101,99,116,111,114,95,105,95,55,56,0);
         soundf = `${(String.fromCharCode(69,0) == tempnodatagifx ? iconshareo.length : tempnodatagifx.length)}`;
      }
         soundf = `${nativer.length / (Math.max(2, 2))}`;
       let register_nc = String.fromCharCode(97,95,50,50,95,104,97,112,113,97,0);
      while (2 > (register_nc.length / (Math.max(4, nativer.length))) || (register_nc.length / (Math.max(2, 10))) > 4) {
          let matchactivea: Map<any, any> = new Map([[String.fromCharCode(105,95,51,57,95,97,118,103,120,0),137], [String.fromCharCode(101,95,50,95,99,111,108,117,109,110,0),931]]);
         nativer = [soundf.length];
         matchactivea = new Map([[`${matchactivea.size}`, matchactivea.size]]);
         break;
      }
      if (!register_nc.startsWith(`${nativer.length}`)) {
         register_nc = `${register_nc.length}`;
      }
      bgvipxvodf += `${bgvipxvodf.length / 3}`;
   if (!iconwatch8) {
      smallbrightness7.push(smallbrightness7.length);
   }
      icon6 = `${smallbrightness7.length}`;
   if (1 <= (3 | iconsharefriendsy.length) && 4 <= (smallbrightness7.length | 3)) {
       let sheeta = 3.0;
      for (let a = 0; a < 2; a++) {
          let banneri = 3.0;
          let paginationD: Array<any> = [453, 631, 41];
          let utilsw = String.fromCharCode(103,95,54,48,95,100,118,98,116,120,116,0);
          let binit_ti = true;
         sheeta -= parseFloat(`${1}`);
         banneri += ((binit_ti ? 4 : 2));
         paginationD.push(3);
         utilsw = "3";
         binit_ti = utilsw == String.fromCharCode(118,0);
      }
      if (5.88 == (sheeta - 5.92) || 1.67 == (sheeta - 5.92)) {
         sheeta /= Math.max(4, parseFloat(`${2 & parseInt(`${sheeta}`)}`));
      }
       let static_edB: Map<any, any> = new Map([[String.fromCharCode(99,112,112,108,105,110,116,95,120,95,56,54,0),598], [String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,56,95,54,53,0),33], [String.fromCharCode(117,100,105,111,95,102,95,54,53,0),553]]);
      iconsharefriendsy = [((plusp ? 1 : 4) / (Math.max(2, 5)))];
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   if (plusp && (2 - iconsharefriendsy.length) <= 3) {
      plusp = !plusp;
   }
   for (let g = 0; g < 1; g++) {
       let becomef: Map<any, any> = new Map([[String.fromCharCode(119,101,108,115,101,110,99,95,105,95,57,50,0),String.fromCharCode(100,115,116,95,99,95,53,54,0)], [String.fromCharCode(114,101,109,117,120,95,55,95,49,51,0),String.fromCharCode(105,110,97,99,116,105,118,101,95,52,95,54,0)], [String.fromCharCode(116,115,114,95,119,95,53,52,0),String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,95,49,95,57,0)]]);
       let forwardH = 2.0;
       let awayteamfieldh: Map<any, any> = new Map([[String.fromCharCode(98,97,114,114,105,101,114,95,102,95,52,50,0),String.fromCharCode(108,105,102,116,95,118,95,51,50,0)], [String.fromCharCode(102,95,54,53,95,118,111,105,112,0),String.fromCharCode(115,95,49,53,95,104,111,114,105,122,111,110,116,97,108,108,121,0)], [String.fromCharCode(110,95,57,56,95,102,97,108,108,98,97,99,107,0),String.fromCharCode(99,111,109,112,108,101,120,95,116,95,57,55,0)]]);
       let manifestW = true;
          let libnmsL: Map<any, any> = new Map([[String.fromCharCode(109,95,52,52,95,114,101,108,111,97,100,0),924], [String.fromCharCode(115,95,56,49,95,114,100,102,116,0),906]]);
         becomef.set(`${forwardH}`, parseInt(`${forwardH}`));
         libnmsL = new Map([[`${libnmsL.size}`, 1 ^ libnmsL.size]]);
      let modity4 = 9246984.0 <= forwardH;
      do {
          let libyogag: Map<any, any> = new Map([[String.fromCharCode(99,111,108,100,95,104,95,56,53,0),680], [String.fromCharCode(101,95,57,54,95,107,101,121,112,97,116,104,115,0),95], [String.fromCharCode(119,95,51,48,95,116,101,120,116,0),333]]);
          let bodani = 3;
         forwardH -= parseFloat(`${3}`);
         libyogag.set(`${bodani}`, bodani);
         if (modity4) {
            break;
         }
      } while (((forwardH * 3.3) > 4.83 && 5.87 > (forwardH * 3.3)) && modity4);
          let arrowS: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,105,100,97,115,115,101,116,115,0),647], [String.fromCharCode(100,95,50,54,95,109,105,114,114,111,114,105,110,103,0),906], [String.fromCharCode(104,115,99,97,108,101,114,95,53,95,51,56,0),784]]);
         becomef.set(`${manifestW}`, arrowS.size % 2);
          let iconclosewhiteZ = String.fromCharCode(121,109,101,110,99,95,103,95,54,52,0);
          let taiwanp = String.fromCharCode(111,95,57,48,95,112,114,111,109,111,116,101,100,0);
          let pointr: Array<any> = [167, 177];
         awayteamfieldh.set(`${manifestW}`, parseInt(`${forwardH}`) + 3);
         iconclosewhiteZ += `${(taiwanp == String.fromCharCode(76,0) ? pointr.length : taiwanp.length)}`;
         pointr = [pointr.length >> (Math.min(Math.abs(3), 1))];
         awayteamfieldh = new Map([[`${awayteamfieldh.size}`, 2]]);
      while (manifestW) {
         forwardH *= parseFloat(`${3 - awayteamfieldh.size}`);
         break;
      }
          let libavfilterC = 3;
          let whitetick8 = String.fromCharCode(106,95,54,50,95,111,112,112,111,115,105,116,101,0);
          let desc_ = true;
         becomef.set(`${desc_}`, 1);
         libavfilterC %= Math.max(libavfilterC - 1, 5);
         whitetick8 += `${libavfilterC & whitetick8.length}`;
      for (let h = 0; h < 2; h++) {
         forwardH -= parseFloat(`${awayteamfieldh.size % 3}`);
      }
      if (Array.from(awayteamfieldh.values()).includes(forwardH)) {
         forwardH *= parseFloat(`${1 - parseInt(`${forwardH}`)}`);
      }
      if (manifestW) {
         manifestW = awayteamfieldh.size <= 12 || manifestW;
      }
      if (manifestW && 3 <= (becomef.size / (Math.max(5, 2)))) {
          let expandl: Array<any> = [630, 539, 772];
          let configF: Array<any> = [994, 120];
          let with_rj = 3;
          let settingY: Map<any, any> = new Map([[String.fromCharCode(113,95,49,95,97,108,108,112,97,115,115,0),String.fromCharCode(108,105,98,97,118,99,111,100,101,99,95,53,95,50,57,0)], [String.fromCharCode(116,95,50,54,95,105,110,99,108,117,115,105,111,110,115,0),String.fromCharCode(116,95,50,54,95,116,104,105,115,0)], [String.fromCharCode(104,115,99,114,111,108,108,95,99,95,54,50,0),String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,114,95,50,57,0)]]);
          let iconadslinkx = 4.0;
         manifestW = with_rj <= 65 || 65 <= awayteamfieldh.size;
         expandl.push(configF.length);
         configF.push(3 << (Math.min(5, Math.abs(settingY.size))));
         with_rj ^= 3;
         settingY = new Map([[`${expandl.length}`, 1]]);
         iconadslinkx -= 2;
      }
         manifestW = manifestW || awayteamfieldh.size > 2;
      smallbrightness7.push((becomef.size << (Math.min(5, Math.abs((iconwatch8 ? 4 : 3))))));
   }
   while ((hooksB.size % 2) > 1) {
       let confirmationX = String.fromCharCode(104,111,110,101,95,106,95,52,51,0);
       let type_jx = String.fromCharCode(99,111,118,114,95,109,95,56,53,0);
      while (type_jx.length <= confirmationX.length) {
         type_jx += `${type_jx.length}`;
         break;
      }
      let defaultprofilepict = confirmationX == String.fromCharCode(122,54,48,51,0);
      do {
         confirmationX = `${confirmationX.length}`;
         if (defaultprofilepict) {
            break;
         }
      } while (defaultprofilepict && (confirmationX.length == type_jx.length));
         confirmationX += "3";
      let analytic9 = 5546458 >= confirmationX.length;
      do {
         confirmationX = `${1 >> (Math.min(2, type_jx.length))}`;
         if (analytic9) {
            break;
         }
      } while ((type_jx.length >= 5) && analytic9);
       let rewardvideor = 4.0;
       let textinput2 = 5.0;
      if (5.20 < textinput2) {
         rewardvideor /= Math.max(parseFloat(`${type_jx.length}`), 4);
      }
      helper5.set(`${plusp}`, 3);
      break;
   }
   while ((hooksB.size << (Math.min(icon6.length, 4))) == 2 || 2 == (hooksB.size << (Math.min(Math.abs(2), 4)))) {
       let executors = 2.0;
       let spinners = String.fromCharCode(97,95,54,50,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0);
          let complete_ = String.fromCharCode(99,95,56,55,95,102,111,114,0);
          let strQ = 5.0;
         spinners += `${complete_.length}`;
         complete_ += `${parseInt(`${strQ}`) << (Math.min(5, Math.abs(parseInt(`${strQ}`))))}`;
       let regengy: Map<any, any> = new Map([[String.fromCharCode(122,95,57,54,95,115,116,97,116,101,109,101,110,116,115,0),467], [String.fromCharCode(102,95,56,54,95,99,111,112,121,116,101,115,116,0),726]]);
          let lessZ: Array<any> = [775, 477];
          let videojsU = String.fromCharCode(111,98,106,99,95,111,95,57,55,0);
          let long_jkf = String.fromCharCode(103,97,105,110,95,53,95,49,55,0);
         executors *= parseFloat(`${videojsU.length * 2}`);
         lessZ.push((String.fromCharCode(55,0) == long_jkf ? long_jkf.length : lessZ.length));
         videojsU += `${lessZ.length}`;
       let cornern = true;
      for (let y = 0; y < 2; y++) {
          let register_pB: Map<any, any> = new Map([[String.fromCharCode(118,95,52,56,95,115,111,114,101,99,118,109,115,103,0),626], [String.fromCharCode(115,95,54,95,115,101,109,105,98,111,108,100,0),408], [String.fromCharCode(118,109,97,102,95,111,95,50,49,0),489]]);
          let cornerkicki = String.fromCharCode(115,107,97,100,95,116,95,57,56,0);
          let libbuffer3 = String.fromCharCode(121,95,54,57,95,116,98,108,101,110,100,0);
          let episodesM = false;
          let robotoM = 2;
         spinners = `${(3 + (cornern ? 2 : 1))}`;
         register_pB = new Map([[`${register_pB.size}`, register_pB.size >> (Math.min(libbuffer3.length, 1))]]);
         cornerkicki += `${2 & robotoM}`;
         libbuffer3 = `${(libbuffer3 == String.fromCharCode(52,0) ? robotoM : libbuffer3.length)}`;
         episodesM = libbuffer3.startsWith(`${robotoM}`);
      }
      for (let s = 0; s < 1; s++) {
         regengy = new Map([[`${regengy.size}`, 3]]);
      }
      icon6 = `${3 - parseInt(`${executors}`)}`;
      break;
   }
   for (let r = 0; r < 1; r++) {
      bgvipxvodf = `${icon6.length}`;
   }
    setIsOffline(offline);

   if (helper5.size > bgvipxvodf.length) {
      bgvipxvodf = `${(bgvipxvodf.length | (iconwatch8 ? 5 : 2))}`;
   }
   if (!icon6.endsWith(`${iconwatch8}`)) {
      icon6 = `${bgvipxvodf.length % 1}`;
   }
      bannere = `${iconsharefriendsy.length}`;
   while (4 < (smallbrightness7.length ^ 3) && 2 < (smallbrightness7.length ^ 3)) {
       let imageactionliveE = 3.0;
       let policyJ = 4.0;
         policyJ -= parseFloat(`${parseInt(`${imageactionliveE}`) + 1}`);
       let componentG = 0.0;
       let langX = 5.0;
       let iconclosewhitewithbg0 = 0.0;
       let detailsM = 0.0;
         imageactionliveE *= parseFloat(`${parseInt(`${langX}`)}`);
          let smallsoundT = 3;
          let predictionbannerj = 1.0;
         detailsM -= parseFloat(`${2 / (Math.max(smallsoundT, 5))}`);
         smallsoundT *= parseInt(`${predictionbannerj}`) / 2;
         predictionbannerj += parseFloat(`${parseInt(`${predictionbannerj}`)}`);
      while (1.68 == policyJ) {
         policyJ /= Math.max(3, parseFloat(`${3 | parseInt(`${imageactionliveE}`)}`));
         break;
      }
      smallbrightness7.push(((iconwatch8 ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${imageactionliveE}`)), 5))));
      break;
   }
   let textq = 6943378 >= smallbrightness7.length;
   do {
      smallbrightness7 = [1];
      if (textq) {
         break;
      }
   } while ((smallbrightness7.length > bgvipxvodf.length) && textq);

    if (offline) {

   while (4 < helper5.size || (helper5.size >> (Math.min(Math.abs(4), 1))) < 2) {
      helper5 = new Map([[`${smallbrightness7.length}`, 3]]);
      break;
   }
       let launch3 = true;
       let sellmathbackgroundU = 2.0;
       let libtob1: Array<any> = [50, 45];
       let searchbarX = String.fromCharCode(99,111,109,112,111,110,101,110,116,115,95,120,95,55,55,0);
       let dragcloseo = String.fromCharCode(116,114,105,103,103,101,114,95,52,95,53,53,0);
      for (let u = 0; u < 1; u++) {
          let cornerw = String.fromCharCode(117,112,97,116,101,100,95,106,95,53,48,0);
          let iconorientationy = String.fromCharCode(113,95,54,55,95,98,105,116,0);
         libtob1.push(dragcloseo.length * searchbarX.length);
         cornerw = `${iconorientationy.length << (Math.min(Math.abs(2), 3))}`;
         iconorientationy += `${iconorientationy.length}`;
      }
      while ((parseInt(`${sellmathbackgroundU}`) + dragcloseo.length) == 4 || (dragcloseo.length + parseInt(`${sellmathbackgroundU}`)) == 4) {
          let crosst = String.fromCharCode(99,104,117,110,107,95,99,95,51,51,0);
         sellmathbackgroundU -= searchbarX.length << (Math.min(dragcloseo.length, 4));
         crosst += "1";
         break;
      }
      for (let i = 0; i < 3; i++) {
         libtob1 = [searchbarX.length];
      }
      while (!dragcloseo.includes(`${launch3}`)) {
         launch3 = sellmathbackgroundU == 89.99 || launch3;
         break;
      }
      let loginb = 8065683 >= searchbarX.length;
      do {
          let playt = 2;
          let fullZ: Map<any, any> = new Map([[String.fromCharCode(103,97,109,117,116,95,116,95,57,49,0),String.fromCharCode(110,101,119,101,115,116,95,51,95,50,51,0)], [String.fromCharCode(106,95,54,57,95,109,111,100,105,102,105,99,97,116,105,111,110,0),String.fromCharCode(97,101,115,116,97,98,95,111,95,51,51,0)], [String.fromCharCode(105,110,100,105,99,97,116,101,100,95,49,95,57,51,0),String.fromCharCode(97,118,103,121,95,57,95,57,48,0)]]);
          let positionfieldX = 3.0;
         searchbarX += `${(String.fromCharCode(117,0) == dragcloseo ? parseInt(`${sellmathbackgroundU}`) : dragcloseo.length)}`;
         playt |= fullZ.size;
         fullZ.set(`${positionfieldX}`, parseInt(`${positionfieldX}`) * 3);
         if (loginb) {
            break;
         }
      } while ((searchbarX.startsWith(`${launch3}`)) && loginb);
      let unreadb = dragcloseo.length <= 8569675;
      do {
         dragcloseo += `${libtob1.length | 1}`;
         if (unreadb) {
            break;
         }
      } while ((searchbarX == String.fromCharCode(121,0)) && unreadb);
         sellmathbackgroundU += libtob1.length % (Math.max(searchbarX.length, 1));
      if (searchbarX.length >= 1) {
         searchbarX += "1";
      }
      bgvipxvodf = `${smallbrightness7.length}`;
      bannere = `${(bannere.length - (iconwatch8 ? 2 : 1))}`;
      bannere = `${((iconwatch8 ? 5 : 4) << (Math.min(Math.abs(1), 3)))}`;
   while (iconwatch8 || 2 <= (smallbrightness7.length & 1)) {
       let eactG: Array<any> = [530, 912, 652];
       let filedc = String.fromCharCode(114,105,110,103,95,108,95,55,54,0);
       let fillX = String.fromCharCode(108,95,54,57,95,98,108,111,99,107,105,110,103,0);
       let hovern = false;
          let delegate_4o = 0.0;
         filedc = `${((hovern ? 1 : 3) ^ parseInt(`${delegate_4o}`))}`;
      while (2 <= (filedc.length & eactG.length) || (eactG.length & filedc.length) <= 2) {
         eactG.push(((hovern ? 1 : 4) | fillX.length));
         break;
      }
         eactG = [2];
       let backwhiteH = false;
       let merger3 = 2;
       let rocketR = 1;
         rocketR -= ((backwhiteH ? 5 : 2) ^ 3);
         rocketR -= eactG.length + 2;
      let v_county = backwhiteH ? !backwhiteH : backwhiteH;
      do {
         backwhiteH = fillX.length >= 77 && !hovern;
         if (v_county) {
            break;
         }
      } while (v_county && (1 == (1 >> (Math.min(3, eactG.length)))));
       let backgroundK = 3;
       let goalz = 5;
      if (4 > filedc.length && hovern) {
          let scorepopsound1: Array<any> = [710, 366, 554];
          let datab = 0.0;
         hovern = backwhiteH;
         scorepopsound1.push(scorepopsound1.length);
         datab *= parseInt(`${datab}`) - 2;
      }
       let twitterh = 3;
       let mailP = 2;
      while ((merger3 % (Math.max(3, mailP))) < 4) {
         merger3 ^= backgroundK | twitterh;
         break;
      }
      smallbrightness7 = [1];
      break;
   }
      setDismountPlayer(false); 
    }
    
  };
  
  

  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      

      
      yys_giftbutton_footballtrophy.playsViewsAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
      
    }
  }, [vod]);

  useFocusEffect(
    useCallback(() => {
      if (!settingsReducer.isOffline) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else {
        return () => {
          setIsOffline(settingsReducer.isOffline);
          setDismountPlayer(false);
        };
      }
    }, [settingsReducer.isOffline])
  );

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
    const eventName = "watch_video";
    const eventValues = {
      vod_name: vod?.vod_name,
    };

    
    
    
    
    
    
    
    
    
    
    
  }, []);

  const fetchVodDetails = useCallback(
    () =>
      yysInactive.getDetail(vod?.vod_id.toString() ?? "", {
        xMode: adultMode,
      }).then((data) => {
        const isRestricted = data.vod_restricted === 1;
        if (isRestricted) {
          videoPlayerRef.current?.setPause(true);
          
          setTimeout(() => {
            setVodRestricted(isRestricted);
          }, 100);
        } else {
          setVodRestricted(isRestricted);
        }

        return data;
      }),
    [vod]
  );

  const handleFetchVodDetail = async () => {
       let gradlewq = false;
    let middleL = String.fromCharCode(97,108,108,121,117,118,95,53,95,57,55,0);
    let libruntimeexecutorK = String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,109,95,56,51,0);
    let subsG = String.fromCharCode(105,95,55,57,95,112,103,109,121,117,118,0);
    let foundT = String.fromCharCode(115,107,105,112,112,101,100,95,49,95,54,48,0);
    let yellowvideolive9 = 0.0;
    let screenT = 3.0;
    let projectk: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,110,101,119,116,101,107,0),238], [String.fromCharCode(114,101,100,97,95,48,95,53,48,0),287]]);
    let entryU = String.fromCharCode(98,121,112,97,115,115,95,101,95,50,56,0);
    let basketballG = String.fromCharCode(99,111,110,110,101,99,116,101,100,95,101,95,57,0);
    let leaguedetailsbgK = String.fromCharCode(106,115,116,121,112,101,95,56,95,50,52,0);
    let klevino = true;
    let nativemoduleS = String.fromCharCode(101,120,112,111,114,116,95,104,95,49,48,0);
   while (2 >= middleL.length) {
      middleL += `${foundT.length}`;
      break;
   }
       let themeU = false;
       let reactnativeratings1 = 4.0;
       let pingw = 5.0;
       let scrollviewv = String.fromCharCode(109,111,99,107,105,110,103,95,100,95,49,54,0);
       let arrowselectdownS = String.fromCharCode(112,111,105,110,116,101,114,115,95,52,95,56,54,0);
      let applicationQ = themeU ? !themeU : themeU;
      do {
          let holder_ = 0.0;
          let libswscalek: Map<any, any> = new Map([[String.fromCharCode(115,108,105,100,101,95,53,95,54,48,0),24], [String.fromCharCode(122,95,55,52,95,99,111,111,114,100,105,110,97,116,111,114,115,0),827]]);
          let basketballmatchdetailbgJ = String.fromCharCode(115,117,109,109,95,121,95,52,50,0);
          let photok: Map<any, any> = new Map([[String.fromCharCode(111,95,54,57,95,115,121,110,99,104,114,111,110,105,115,101,100,0),232], [String.fromCharCode(111,95,53,53,95,119,114,105,116,101,99,98,0),465], [String.fromCharCode(113,95,49,57,95,116,104,101,109,101,115,0),133]]);
          let liveendmodallogoP = String.fromCharCode(104,95,50,54,95,99,97,110,99,101,108,101,100,0);
         themeU = !scrollviewv.endsWith(`${holder_}`);
         holder_ *= parseFloat(`${1 >> (Math.min(1, Math.abs(photok.size)))}`);
         libswscalek.set(`${basketballmatchdetailbgJ}`, basketballmatchdetailbgJ.length | photok.size);
         liveendmodallogoP += `${liveendmodallogoP.length | photok.size}`;
         if (applicationQ) {
            break;
         }
      } while (applicationQ && (arrowselectdownS.length == 3 || !themeU));
      for (let p = 0; p < 1; p++) {
          let templateprocessorB = String.fromCharCode(111,108,97,110,97,95,51,95,55,0);
          let selectionv = 5.0;
          let orangedownarrowJ = 1;
          let inactivee = String.fromCharCode(108,105,115,116,101,110,105,110,103,95,120,95,56,55,0);
         themeU = selectionv >= 8.29;
         templateprocessorB += "2";
         selectionv -= parseFloat(`${2 ^ orangedownarrowJ}`);
         orangedownarrowJ += templateprocessorB.length;
         inactivee = `${templateprocessorB.length}`;
      }
      if (4 <= scrollviewv.length) {
         reactnativeratings1 += arrowselectdownS.length;
      }
      for (let s = 0; s < 1; s++) {
         arrowselectdownS = `${3 << (Math.min(1, scrollviewv.length))}`;
      }
         scrollviewv = `${((themeU ? 5 : 2))}`;
      let bgvipsportr = 8378085 <= scrollviewv.length;
      do {
          let heart3 = String.fromCharCode(118,95,50,49,95,101,108,115,0);
          let historyS = 3;
          let defaultplayerimgA = String.fromCharCode(100,109,97,120,95,118,95,53,55,0);
          let libturbomodulejsijniB = false;
         scrollviewv += `${1 ^ historyS}`;
         heart3 = `${(heart3 == String.fromCharCode(68,0) ? defaultplayerimgA.length : heart3.length)}`;
         historyS <<= Math.min(4, Math.abs(heart3.length | defaultplayerimgA.length));
         libturbomodulejsijniB = heart3.length >= defaultplayerimgA.length;
         if (bgvipsportr) {
            break;
         }
      } while (bgvipsportr && (1 >= scrollviewv.length));
          let whistleorangeI = String.fromCharCode(109,97,115,116,101,114,95,98,95,55,55,0);
          let sendk = String.fromCharCode(103,95,56,49,95,98,97,116,116,101,114,121,0);
         arrowselectdownS = `${whistleorangeI.length * parseInt(`${pingw}`)}`;
         whistleorangeI = `${sendk.length * 3}`;
         sendk = `${sendk.length ^ sendk.length}`;
          let leaguedetailsbg7 = false;
          let scorepopsoundT: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,111,119,101,100,95,102,95,53,49,0),String.fromCharCode(112,95,56,50,95,114,101,113,117,97,110,116,0)], [String.fromCharCode(104,95,54,53,95,97,108,112,97,0),String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,118,95,50,54,0)]]);
          let iconcloseD = 4.0;
         pingw *= parseFloat(`${1}`);
         leaguedetailsbg7 = scorepopsoundT.size == 78;
         scorepopsoundT.set(`${leaguedetailsbg7}`, 2);
         iconcloseD *= ((leaguedetailsbg7 ? 3 : 5) & parseInt(`${iconcloseD}`));
      subsG += `${(2 % (Math.max(6, (themeU ? 4 : 4))))}`;
   let xvodg = projectk.size >= 7751891;
   do {
      projectk = new Map([[`${screenT}`, (parseInt(`${screenT}`) / (Math.max(6, (gradlewq ? 4 : 4))))]]);
      if (xvodg) {
         break;
      }
   } while (xvodg && (entryU.length >= 5));
   let robotoQ = entryU.length <= 8999933;
   do {
       let iconarrowrightblackh = String.fromCharCode(117,95,53,57,95,109,97,120,101,100,0);
      if (!iconarrowrightblackh.includes(iconarrowrightblackh)) {
          let tumbnail5 = false;
          let eventv = 5.0;
          let componentregistryJ = String.fromCharCode(112,114,111,116,101,99,116,95,53,95,51,50,0);
         iconarrowrightblackh = "3";
         tumbnail5 = eventv >= 89.8;
         eventv -= 1 + parseInt(`${eventv}`);
         componentregistryJ = `${componentregistryJ.length}`;
      }
      if (iconarrowrightblackh.length == iconarrowrightblackh.length) {
         iconarrowrightblackh += `${iconarrowrightblackh.length}`;
      }
      for (let y = 0; y < 2; y++) {
          let imagesj: Map<any, any> = new Map([[String.fromCharCode(108,95,53,51,95,99,104,97,112,116,101,114,0),505], [String.fromCharCode(115,95,53,53,95,114,97,110,115,112,111,114,116,0),828]]);
          let template_5rc = false;
          let constantsQ = String.fromCharCode(102,111,114,109,115,104,101,101,116,95,101,95,57,56,0);
         iconarrowrightblackh += `${1 - iconarrowrightblackh.length}`;
         imagesj.set(`${template_5rc}`, imagesj.size);
         constantsQ = `${imagesj.size + 2}`;
      }
      entryU = `${(String.fromCharCode(82,0) == middleL ? parseInt(`${yellowvideolive9}`) : middleL.length)}`;
      if (robotoQ) {
         break;
      }
   } while ((gradlewq) && robotoQ);
   while (!libruntimeexecutorK.includes(subsG)) {
      libruntimeexecutorK += `${subsG.length * middleL.length}`;
      break;
   }

    const promise = (async () => downloadedVod?.vod)

      foundT += `${1 % (Math.max(6, subsG.length))}`;
   while (gradlewq) {
       let libavdevicee = false;
       let stats7 = 5.0;
       let footballw: Array<any> = [166, 84, 978];
       let time_soj = true;
         libavdevicee = footballw.length > 46 || time_soj;
         footballw = [parseInt(`${stats7}`)];
       let executorP = 5.0;
       let iconplayr = 0.0;
          let libjsinspectora: Map<any, any> = new Map([[String.fromCharCode(119,95,52,49,95,99,111,110,116,111,117,114,0),String.fromCharCode(122,95,50,52,95,97,108,103,115,0)], [String.fromCharCode(114,101,99,101,110,116,101,114,95,97,95,53,52,0),String.fromCharCode(112,107,99,114,121,112,116,95,52,95,54,54,0)]]);
          let phoneshareH = 0;
         libavdevicee = phoneshareH < 56;
         libjsinspectora = new Map([[`${libjsinspectora.size}`, libjsinspectora.size]]);
         phoneshareH -= libjsinspectora.size % 1;
         stats7 += parseFloat(`${parseInt(`${iconplayr}`)}`);
          let selectY = String.fromCharCode(100,110,115,95,53,95,54,55,0);
         iconplayr *= 3 << (Math.min(Math.abs(parseInt(`${iconplayr}`)), 3));
         selectY += `${selectY.length}`;
         iconplayr /= Math.max(parseInt(`${executorP}`) >> (Math.min(4, Math.abs(parseInt(`${stats7}`)))), 1);
         executorP += 1 | parseInt(`${executorP}`);
      for (let v = 0; v < 1; v++) {
         iconplayr += parseInt(`${executorP}`) | 3;
      }
         executorP *= parseInt(`${stats7}`) ^ 3;
         footballw = [((time_soj ? 5 : 5) & parseInt(`${executorP}`))];
      while (2.68 <= stats7) {
          let exampleimage9 = String.fromCharCode(114,95,55,57,95,112,114,105,110,116,101,114,0);
          let taiwan0 = String.fromCharCode(117,95,55,95,101,109,98,101,100,100,105,110,103,0);
         footballw = [footballw.length];
         exampleimage9 += `${3 * exampleimage9.length}`;
         taiwan0 = `${2 * taiwan0.length}`;
         break;
      }
      gradlewq = footballw.length >= 27;
      break;
   }
   for (let s = 0; s < 2; s++) {
      yellowvideolive9 -= projectk.size * 2;
   }
   while (!gradlewq) {
      gradlewq = (projectk.size << (Math.min(entryU.length, 4))) < 34;
      break;
   }
   let homeinactivej = gradlewq ? !gradlewq : gradlewq;
   do {
      gradlewq = foundT.length <= yellowvideolive9;
      if (homeinactivej) {
         break;
      }
   } while (homeinactivej && (2 > middleL.length));
    if (isOffline) {

       let episode_ = String.fromCharCode(99,97,114,114,105,101,114,95,122,95,56,51,0);
       let libswresample8 = 5.0;
       let trash_: Map<any, any> = new Map([[String.fromCharCode(108,95,57,55,95,116,114,105,112,108,101,116,0),516], [String.fromCharCode(108,95,53,54,95,98,101,99,97,109,101,0),421], [String.fromCharCode(112,97,114,116,95,118,95,55,49,0),603]]);
          let homeiconA = 2;
          let unselectedt = 5;
         libswresample8 += (episode_ == String.fromCharCode(89,0) ? unselectedt : episode_.length);
         homeiconA &= homeiconA;
         unselectedt %= Math.max(4, homeiconA + homeiconA);
         libswresample8 /= Math.max(2, 3);
       let modeln = false;
      for (let c = 0; c < 1; c++) {
          let trashs = String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,95,114,95,57,0);
         episode_ = `${3 & parseInt(`${libswresample8}`)}`;
         trashs = `${trashs.length}`;
      }
      let xvodO = episode_ == String.fromCharCode(100,52,50,0);
      do {
         episode_ += `${trash_.size}`;
         if (xvodO) {
            break;
         }
      } while (((episode_.length / (Math.max(5, libswresample8))) > 1.22) && xvodO);
      for (let o = 0; o < 2; o++) {
         libswresample8 += 1 & parseInt(`${libswresample8}`);
      }
         episode_ = `${((modeln ? 4 : 5) + parseInt(`${libswresample8}`))}`;
      for (let d = 0; d < 2; d++) {
          let greytickV: Array<any> = [923, 136, 279];
          let icondefaultthumbnail9 = 2.0;
          let ewarded9 = String.fromCharCode(117,110,114,111,117,110,100,101,100,95,107,95,56,57,0);
          let defaultprofilepic3 = String.fromCharCode(105,95,51,49,95,115,116,97,98,108,101,0);
         modeln = episode_.length < 13 || !modeln;
         greytickV = [greytickV.length];
         icondefaultthumbnail9 *= ewarded9.length;
         ewarded9 = `${greytickV.length}`;
         defaultprofilepic3 = "2";
      }
      while ((5.35 * libswresample8) <= 4.25 && 5 <= (trash_.size % 2)) {
          let greyarrowupv: Array<any> = [297, 894, 461];
         libswresample8 += trash_.size;
         greyarrowupv = [greyarrowupv.length / 1];
         break;
      }
      screenT /= Math.max(1, 3);
       let awayu = false;
       let becomec = 0;
       let statsY = 2.0;
          let textinputd: Array<any> = [391, 84];
         awayu = 74 < becomec;
         textinputd.push(textinputd.length * textinputd.length);
         becomec ^= (parseInt(`${statsY}`) & (awayu ? 2 : 3));
      while (becomec == 1) {
         becomec %= Math.max((parseInt(`${statsY}`) | (awayu ? 2 : 5)), 1);
         break;
      }
      if (4.5 == statsY) {
          let debugj = String.fromCharCode(100,105,114,115,95,101,95,52,52,0);
          let vieweri = String.fromCharCode(114,95,50,51,95,101,120,99,108,117,115,105,111,110,115,0);
          let carouselF = 3;
         awayu = 17 > (statsY - becomec);
         debugj += `${2 & vieweri.length}`;
         vieweri = `${debugj.length / 2}`;
         carouselF %= Math.max((vieweri == String.fromCharCode(85,0) ? carouselF : vieweri.length), 5);
      }
         statsY += (parseFloat(`${becomec | (awayu ? 4 : 4)}`));
      if (2.7 < (statsY - becomec)) {
         statsY *= parseFloat(`${1}`);
      }
      for (let i = 0; i < 1; i++) {
         awayu = becomec >= 39 || !awayu;
      }
         statsY *= parseFloat(`${1}`);
         awayu = 67.41 < statsY && awayu;
      screenT -= (becomec | (gradlewq ? 1 : 4));
   if (entryU == String.fromCharCode(98,0)) {
       let mbbannerD: Array<any> = [514, 806, 269];
          let backicon5 = String.fromCharCode(102,95,51,54,95,117,110,105,116,115,0);
          let dropdownO = String.fromCharCode(110,111,110,102,97,116,97,108,95,101,95,51,53,0);
         mbbannerD = [2];
         backicon5 = `${backicon5.length}`;
         dropdownO = `${3 & backicon5.length}`;
       let halffieldimagex: Array<any> = [600, 646];
       let small5: Array<any> = [873, 507];
          let package_zlZ = 2.0;
          let projectF = 3.0;
          let logor = 5;
         small5 = [1 / (Math.max(parseInt(`${package_zlZ}`), 6))];
         package_zlZ *= 3 / (Math.max(logor, 9));
         projectF -= parseFloat(`${parseInt(`${projectF}`) ^ 2}`);
         logor |= 3;
      foundT = `${entryU.length}`;
   }
   for (let u = 0; u < 2; u++) {
       let basketballplayerplaceholdere: Array<any> = [627, 261, 737];
       let iconarrowrightwhiteV = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,120,95,51,56,0);
       let nativeS = 4.0;
       let pathG = 3.0;
         pathG *= parseFloat(`${basketballplayerplaceholdere.length >> (Math.min(Math.abs(3), 4))}`);
      while (!iconarrowrightwhiteV.endsWith(`${basketballplayerplaceholdere.length}`)) {
          let pathz = String.fromCharCode(106,95,53,48,95,112,114,111,99,101,115,115,111,114,115,0);
          let views3 = String.fromCharCode(100,95,55,51,95,99,111,114,114,101,99,116,0);
         basketballplayerplaceholdere.push(2 ^ pathz.length);
         pathz += `${views3.length / (Math.max(7, views3.length))}`;
         break;
      }
      if (5.43 >= (3.49 + nativeS) || 2.6 >= (nativeS + 3.49)) {
         pathG -= parseFloat(`${basketballplayerplaceholdere.length}`);
      }
      if (pathG == parseFloat(`${basketballplayerplaceholdere.length}`)) {
         pathG *= parseFloat(`${iconarrowrightwhiteV.length}`);
      }
       let liveendmodallogo0 = false;
      let private_4ps = basketballplayerplaceholdere.length <= 8527898;
      do {
         basketballplayerplaceholdere.push(3 >> (Math.min(Math.abs(parseInt(`${pathG}`)), 1)));
         if (private_4ps) {
            break;
         }
      } while ((liveendmodallogo0) && private_4ps);
         pathG /= Math.max(parseFloat(`${2 | basketballplayerplaceholdere.length}`), 5);
       let tickI = String.fromCharCode(103,101,116,112,105,120,95,117,95,51,55,0);
      let updatesT = liveendmodallogo0 ? !liveendmodallogo0 : liveendmodallogo0;
      do {
         liveendmodallogo0 = String.fromCharCode(48,0) == tickI;
         if (updatesT) {
            break;
         }
      } while (((1.42 - nativeS) <= 3.84) && updatesT);
      if (4.90 >= (nativeS - parseFloat(`${tickI.length}`)) || (parseFloat(`${tickI.length}`) - nativeS) >= 4.90) {
          let xvodF = 2;
          let vipsportg = String.fromCharCode(112,114,111,112,101,114,95,117,95,54,49,0);
          let refreshn = String.fromCharCode(101,120,112,97,110,100,101,100,95,55,95,57,54,0);
          let assetsS = 1;
          let cross1 = String.fromCharCode(119,95,57,95,97,99,107,110,111,119,108,101,100,103,101,0);
         tickI = `${(refreshn == String.fromCharCode(114,0) ? (liveendmodallogo0 ? 2 : 3) : refreshn.length)}`;
         xvodF <<= Math.min(Math.abs(assetsS), 5);
         vipsportg += `${xvodF >> (Math.min(Math.abs(1), 5))}`;
         assetsS <<= Math.min(5, Math.abs(1 - cross1.length));
         cross1 += `${3 ^ xvodF}`;
      }
          let configm = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,122,95,55,49,0);
         basketballplayerplaceholdere = [parseInt(`${pathG}`) / (Math.max(parseInt(`${nativeS}`), 7))];
         configm += `${configm.length}`;
         liveendmodallogo0 = nativeS > parseFloat(`${tickI.length}`);
      yellowvideolive9 -= basketballplayerplaceholdere.length >> (Math.min(Math.abs(3), 4));
   }
      libruntimeexecutorK = `${parseInt(`${yellowvideolive9}`)}`;
      console.debug('is offline')

   if (foundT != String.fromCharCode(116,0)) {
       let yellowcirclebgv = String.fromCharCode(119,95,54,52,95,117,116,99,0);
       let modulesG = String.fromCharCode(103,95,57,48,95,115,116,97,99,107,101,100,0);
         yellowcirclebgv += `${modulesG.length}`;
          let matchh = true;
         yellowcirclebgv = `${yellowcirclebgv.length}`;
         matchh = (matchh ? !matchh : !matchh);
      let logoU = 5128129 >= yellowcirclebgv.length;
      do {
          let dycreatoro = String.fromCharCode(108,97,117,110,99,104,101,115,95,97,95,50,51,0);
          let libfileL: Array<any> = [782, 272, 56];
         yellowcirclebgv += `${modulesG.length / (Math.max(yellowcirclebgv.length, 3))}`;
         dycreatoro += `${libfileL.length}`;
         libfileL.push(1 * libfileL.length);
         if (logoU) {
            break;
         }
      } while (logoU && (modulesG != String.fromCharCode(112,0)));
         yellowcirclebgv += `${modulesG.length}`;
      let thailands = 7070162 <= modulesG.length;
      do {
         modulesG += `${(modulesG == String.fromCharCode(121,0) ? modulesG.length : yellowcirclebgv.length)}`;
         if (thailands) {
            break;
         }
      } while ((!yellowcirclebgv.endsWith(`${modulesG.length}`)) && thailands);
      for (let y = 0; y < 3; y++) {
          let assistq = 4.0;
         modulesG += `${yellowcirclebgv.length}`;
         assistq -= parseInt(`${assistq}`) / (Math.max(parseInt(`${assistq}`), 6));
      }
      libruntimeexecutorK = `${middleL.length}`;
   }
       let temperatureS = false;
       let twitterJ = String.fromCharCode(108,111,103,105,110,95,99,95,50,54,0);
       let phonesharer: Map<any, any> = new Map([[String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,97,95,56,57,0),468], [String.fromCharCode(113,95,50,95,112,97,105,110,116,0),332], [String.fromCharCode(97,95,54,48,95,115,101,99,116,111,114,0),112]]);
       let filterN: Map<any, any> = new Map([[String.fromCharCode(115,95,50,51,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0),String.fromCharCode(121,95,56,55,95,107,105,110,103,102,105,115,104,101,114,0)], [String.fromCharCode(109,97,103,101,95,98,95,53,48,0),String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,57,95,56,56,0)], [String.fromCharCode(105,112,112,108,101,95,120,95,57,0),String.fromCharCode(112,97,105,110,116,105,110,103,95,98,95,54,51,0)]]);
      while (4 <= (phonesharer.size % 4) && (filterN.size % 4) <= 5) {
         filterN.set(`${filterN.size}`, 2);
         break;
      }
      if (!temperatureS) {
         phonesharer.set(`${phonesharer.size}`, filterN.size ^ 1);
      }
      let bggradientK = String.fromCharCode(51,121,53,108,55,102,0) == twitterJ;
      do {
         twitterJ = `${2 - filterN.size}`;
         if (bggradientK) {
            break;
         }
      } while (bggradientK && ((twitterJ.length * phonesharer.size) <= 2));
      if (!temperatureS) {
          let searchA = String.fromCharCode(115,95,49,57,95,116,114,97,99,101,114,0);
          let guided: Array<any> = [86, 232, 558];
          let inviteo: Array<any> = [711, 464, 656];
          let short_4c = 4.0;
          let animationsU = true;
         twitterJ = `${phonesharer.size}`;
         searchA += `${(parseInt(`${short_4c}`) & (animationsU ? 3 : 2))}`;
         guided = [searchA.length / (Math.max(3, 7))];
         inviteo = [(searchA == String.fromCharCode(68,0) ? guided.length : searchA.length)];
         short_4c -= inviteo.length;
         animationsU = guided.length < 68;
      }
         twitterJ = `${phonesharer.size << (Math.min(Math.abs(1), 3))}`;
      if (4 < (phonesharer.size + 4)) {
         phonesharer = new Map([[`${phonesharer.size}`, 2]]);
      }
         twitterJ += `${filterN.size}`;
          let defaultbasketballbgm = String.fromCharCode(108,105,98,114,97,114,121,95,120,95,55,52,0);
         temperatureS = twitterJ.endsWith(`${temperatureS}`);
         defaultbasketballbgm += `${defaultbasketballbgm.length ^ 3}`;
      screenT += phonesharer.size;
   let foregroundZ = 9194342 <= entryU.length;
   do {
      entryU = `${entryU.length << (Math.min(Math.abs(1), 1))}`;
      if (foregroundZ) {
         break;
      }
   } while (foregroundZ && (subsG.length <= entryU.length));
   let dialog9 = 5617571 >= projectk.size;
   do {
      projectk = new Map([[`${projectk.size}`, projectk.size]]);
      if (dialog9) {
         break;
      }
   } while ((4 > (3 + projectk.size) && 3 > (projectk.size + subsG.length)) && dialog9);
   let iconarrowrightorangea = entryU.length <= 6498845;
   do {
       let predictionbannersharedb = true;
       let libyoga1 = String.fromCharCode(110,95,52,50,95,101,120,105,116,0);
         predictionbannersharedb = libyoga1.startsWith(`${predictionbannersharedb}`);
         predictionbannersharedb = !libyoga1.includes(`${predictionbannersharedb}`);
       let schedules: Map<any, any> = new Map([[String.fromCharCode(122,95,53,50,95,100,114,97,103,103,105,110,103,0),673], [String.fromCharCode(118,112,99,99,95,115,95,56,56,0),472]]);
       let agreementW: Map<any, any> = new Map([[String.fromCharCode(111,95,54,95,100,114,97,119,117,116,105,108,115,0),true ], [String.fromCharCode(105,100,119,116,95,103,95,53,48,0),true ], [String.fromCharCode(111,95,52,49,95,114,101,99,101,105,118,101,0),true ]]);
         schedules = new Map([[`${agreementW.size}`, schedules.size | 2]]);
      while (libyoga1.startsWith(`${predictionbannersharedb}`)) {
          let iconsettingD: Array<any> = [String.fromCharCode(116,95,55,57,95,101,118,97,115,97,112,112,0), String.fromCharCode(97,112,116,120,95,51,95,52,51,0), String.fromCharCode(122,95,51,53,95,117,116,118,105,100,101,111,0)];
          let store1: Array<any> = [524, 109, 584];
          let cornershootR: Array<any> = [String.fromCharCode(118,95,53,56,95,114,101,115,105,103,110,0), String.fromCharCode(116,111,103,103,108,105,110,103,95,115,95,55,56,0)];
          let leakcheckerS = String.fromCharCode(121,95,51,51,0);
          let libmapbufferjniI: Map<any, any> = new Map([[String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,95,119,95,53,56,0),92], [String.fromCharCode(104,95,50,50,95,115,116,114,101,97,109,105,110,102,111,0),855], [String.fromCharCode(122,95,55,57,95,115,117,112,101,114,110,111,100,101,115,0),235]]);
         predictionbannersharedb = cornershootR.length <= schedules.size;
         iconsettingD = [iconsettingD.length];
         store1 = [libmapbufferjniI.size ^ store1.length];
         cornershootR.push(iconsettingD.length);
         leakcheckerS += `${libmapbufferjniI.size << (Math.min(leakcheckerS.length, 2))}`;
         break;
      }
      if (libyoga1.endsWith(`${predictionbannersharedb}`)) {
          let libavfilterO = 1.0;
          let playershirt8 = String.fromCharCode(97,118,111,105,100,95,99,95,50,52,0);
          let typingloadingu = 0;
          let native4 = String.fromCharCode(98,105,109,97,112,95,120,95,49,54,0);
          let pangleV = String.fromCharCode(117,110,115,101,116,95,56,95,52,55,0);
         predictionbannersharedb = (libyoga1.length % (Math.max(2, schedules.size))) <= 87;
         libavfilterO *= 1 - pangleV.length;
         playershirt8 += `${playershirt8.length >> (Math.min(Math.abs(2), 1))}`;
         typingloadingu |= pangleV.length + parseInt(`${libavfilterO}`);
         native4 = "2";
      }
      entryU += "3";
      if (iconarrowrightorangea) {
         break;
      }
   } while (iconarrowrightorangea && (3 <= (entryU.length & 1) || 3 <= (entryU.length & 1)));
      return promise()
    } else {

      foundT += `${parseInt(`${yellowvideolive9}`) - parseInt(`${screenT}`)}`;
   let baiduJ = 8242252 >= foundT.length;
   do {
      foundT = `${entryU.length}`;
      if (baiduJ) {
         break;
      }
   } while ((2 == foundT.length) && baiduJ);
      screenT -= parseInt(`${yellowvideolive9}`) << (Math.min(leaguedetailsbgK.length, 1));
   while (5 == (parseInt(`${yellowvideolive9}`) / (Math.max(leaguedetailsbgK.length, 2))) || 3.0 == (yellowvideolive9 / (Math.max(6, leaguedetailsbgK.length)))) {
       let popup0 = 0;
       let libbufferl = 4.0;
      for (let c = 0; c < 3; c++) {
          let mutedW: Array<any> = [114, 148];
          let typingloadingC = 4.0;
          let panglee = String.fromCharCode(114,95,50,49,95,111,112,116,105,111,110,115,0);
         popup0 %= Math.max(2, 4);
         mutedW = [(String.fromCharCode(52,0) == panglee ? mutedW.length : panglee.length)];
         typingloadingC *= panglee.length | parseInt(`${typingloadingC}`);
      }
      let layoutg = libbufferl >= 7321822.0;
      do {
          let package__o = String.fromCharCode(114,101,108,101,97,115,101,95,108,95,53,51,0);
          let historyy: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,109,98,108,101,114,95,120,95,53,50,0),false ], [String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,120,95,50,49,0),false ]]);
          let downarrow5 = 5.0;
          let schedulerk = String.fromCharCode(112,114,111,99,101,115,115,111,114,115,95,118,95,53,57,0);
          let subbasketballplayerc: Array<any> = [String.fromCharCode(99,95,54,48,95,114,101,99,101,105,118,101,100,0), String.fromCharCode(115,101,116,117,112,100,95,109,95,49,53,0), String.fromCharCode(116,105,108,108,95,55,95,51,48,0)];
         libbufferl *= subbasketballplayerc.length;
         package__o += `${3 + schedulerk.length}`;
         historyy.set(package__o, parseInt(`${downarrow5}`));
         downarrow5 += schedulerk.length + parseInt(`${downarrow5}`);
         subbasketballplayerc = [parseInt(`${downarrow5}`)];
         if (layoutg) {
            break;
         }
      } while ((5.87 <= (libbufferl * popup0)) && layoutg);
          let sport3 = 1.0;
         popup0 <<= Math.min(Math.abs(parseInt(`${sport3}`)), 3);
      for (let u = 0; u < 1; u++) {
         popup0 *= parseInt(`${libbufferl}`);
      }
      let showmorel = libbufferl <= 5797326.0;
      do {
         libbufferl -= popup0;
         if (showmorel) {
            break;
         }
      } while (showmorel && (4.89 >= (5.80 + libbufferl)));
      if ((5.83 / (Math.max(8, libbufferl))) == 1.19 || 4.93 == (libbufferl / 5.83)) {
          let whistleoranged = 0.0;
          let iconorientation3 = String.fromCharCode(121,95,53,54,95,109,100,104,100,0);
         popup0 /= Math.max(iconorientation3.length & 1, 1);
         whistleoranged += 2 / (Math.max(parseInt(`${whistleoranged}`), 5));
         iconorientation3 = `${parseInt(`${whistleoranged}`) | 1}`;
      }
      leaguedetailsbgK += `${middleL.length}`;
      break;
   }
   for (let o = 0; o < 3; o++) {
      entryU = `${middleL.length}`;
   }
      console.debug('not offline')

   for (let n = 0; n < 3; n++) {
      foundT += "2";
   }
   if (libruntimeexecutorK.includes(`${klevino}`)) {
      libruntimeexecutorK = `${basketballG.length}`;
   }
       let libapminsightbY = 5.0;
       let kuaishoup = false;
       let iconchatsendq = 2.0;
       let floatingn: Array<any> = [String.fromCharCode(98,114,111,107,101,110,95,101,95,52,54,0), String.fromCharCode(101,95,51,57,95,101,108,101,118,97,116,101,0), String.fromCharCode(99,121,99,108,105,99,95,101,95,54,49,0)];
       let livenodatabgimgK: Array<any> = [945, 393, 420];
       let spec7 = 2.0;
      let selectiont = kuaishoup ? !kuaishoup : kuaishoup;
      do {
          let viewsP = false;
         kuaishoup = 30 < livenodatabgimgK.length && libapminsightbY < 95.16;
         viewsP = (!viewsP ? viewsP : viewsP);
         if (selectiont) {
            break;
         }
      } while ((kuaishoup) && selectiont);
      if (livenodatabgimgK.length > 2) {
         kuaishoup = !kuaishoup;
      }
       let controlsL: Map<any, any> = new Map([[String.fromCharCode(119,95,49,56,95,115,116,97,103,105,110,103,0),true ], [String.fromCharCode(115,101,116,116,97,98,108,101,95,108,95,50,52,0),false ], [String.fromCharCode(100,95,49,54,95,114,101,103,105,115,116,114,97,114,0),false ]]);
      for (let l = 0; l < 1; l++) {
         controlsL = new Map([[`${livenodatabgimgK.length}`, 3]]);
      }
       let smallorangemanI = 4;
      while ((smallorangemanI >> (Math.min(floatingn.length, 4))) > 2 && (floatingn.length >> (Math.min(3, Math.abs(smallorangemanI)))) > 2) {
         floatingn.push(smallorangemanI / (Math.max(9, parseInt(`${libapminsightbY}`))));
         break;
      }
      for (let c = 0; c < 1; c++) {
         spec7 += 1 ^ floatingn.length;
      }
      screenT /= Math.max(2, parseInt(`${iconchatsendq}`) - 3);
   while (1.51 >= (yellowvideolive9 * 3.24)) {
       let sells: Array<any> = [String.fromCharCode(109,95,52,53,95,98,105,103,103,101,115,116,0), String.fromCharCode(109,120,112,101,103,95,120,95,52,56,0)];
       let livenodatabgimgN = String.fromCharCode(115,105,110,95,118,95,56,56,0);
       let debugO = String.fromCharCode(110,105,99,101,95,50,95,57,0);
      if (debugO.length < 3) {
         livenodatabgimgN += `${debugO.length - sells.length}`;
      }
       let skipQ: Map<any, any> = new Map([[String.fromCharCode(115,105,103,116,101,114,109,95,55,95,56,48,0),936], [String.fromCharCode(115,104,97,95,49,95,53,50,0),371], [String.fromCharCode(100,95,50,55,95,108,105,98,97,118,117,116,105,108,0),197]]);
      yellowvideolive9 *= libruntimeexecutorK.length;
      break;
   }
   while ((screenT + libruntimeexecutorK.length) >= 4.82 || 1 >= (libruntimeexecutorK.length % 2)) {
       let libfollyv = 2;
       let basketballmatchdetailbg5 = 0.0;
      for (let g = 0; g < 2; g++) {
         basketballmatchdetailbg5 *= parseInt(`${basketballmatchdetailbg5}`) >> (Math.min(1, Math.abs(libfollyv)));
      }
         libfollyv /= Math.max(libfollyv, 4);
         libfollyv &= 2;
      for (let x = 0; x < 1; x++) {
          let subinV: Array<any> = [217, 195];
         libfollyv &= libfollyv;
         subinV = [subinV.length ^ subinV.length];
      }
      while (4.98 < basketballmatchdetailbg5) {
         libfollyv /= Math.max(parseInt(`${basketballmatchdetailbg5}`), 3);
         break;
      }
       let homeloadingI = 2;
      libruntimeexecutorK = `${(parseInt(`${screenT}`) << (Math.min(2, Math.abs((gradlewq ? 1 : 1)))))}`;
      break;
   }
      return fetchVodDetails()
    }
  }

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", vod?.vod_id, isOffline],
    queryFn: () => handleFetchVodDetail(),
  });

  const fetchBannerAd = async () => {
       let inouttargetyellow8 = 2;
    let showmore2 = String.fromCharCode(98,95,54,49,95,111,112,116,97,98,108,101,0);
    let dragcloseR = String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,120,95,51,49,0);
    let vertical9 = 1.0;
    let banner8 = 1.0;
    let interneth: Array<any> = [901, 237];
    let short_5t: Map<any, any> = new Map([[String.fromCharCode(122,95,48,95,118,115,110,112,114,105,110,116,102,0),362], [String.fromCharCode(117,95,52,52,95,112,114,111,118,105,115,105,111,110,0),950]]);
    let awayI: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,100,105,114,101,99,116,105,111,110,0),false ], [String.fromCharCode(110,95,50,57,95,115,99,114,97,116,99,104,0),false ], [String.fromCharCode(97,95,53,95,110,105,107,111,110,0),true ]]);
    let mbnativeadvancedc = String.fromCharCode(107,95,57,48,95,98,105,110,0);
    let libnmsa = String.fromCharCode(99,102,102,116,98,95,97,95,53,51,0);
    let thailandx: Array<any> = [540, 793];
    let handler0: Map<any, any> = new Map([[String.fromCharCode(101,95,49,51,95,116,101,115,116,98,105,116,0),String.fromCharCode(108,105,98,120,109,108,95,57,95,52,52,0)], [String.fromCharCode(104,95,56,57,95,103,101,111,112,111,108,121,0),String.fromCharCode(121,95,50,95,116,105,109,101,99,111,100,101,0)]]);
    let privatechatbgE = String.fromCharCode(101,118,97,108,115,95,101,95,57,51,0);
    let disconnectedM = true;
    let detailU = 1.0;
   for (let m = 0; m < 2; m++) {
       let w_hashB: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,0),639], [String.fromCharCode(110,111,116,97,116,105,111,110,95,105,95,54,48,0),112]]);
       let time_4C = 5.0;
       let videocommonH = 4.0;
       let mimoo = String.fromCharCode(98,95,54,53,95,116,114,97,110,115,108,97,116,111,110,0);
       let feedbackB: Map<any, any> = new Map([[String.fromCharCode(106,95,50,55,95,112,114,111,103,114,101,115,115,101,115,0),68], [String.fromCharCode(100,95,55,54,95,115,101,116,105,118,0),147]]);
       let profileinactivec = 3;
       let closel: Map<any, any> = new Map([[String.fromCharCode(101,95,54,50,95,112,105,112,101,119,105,114,101,0),270], [String.fromCharCode(102,95,55,52,95,115,108,111,119,109,111,100,101,0),735]]);
       let private_qkQ: Map<any, any> = new Map([[String.fromCharCode(114,95,53,95,110,97,117,116,105,99,97,108,0),369], [String.fromCharCode(122,95,52,49,95,114,101,110,100,101,114,0),121], [String.fromCharCode(116,95,56,49,95,114,101,110,100,101,114,101,100,0),391]]);
      if ((2 & w_hashB.size) == 4 || 2 == (closel.size & w_hashB.size)) {
         w_hashB.set(`${feedbackB.size}`, w_hashB.size);
      }
          let encryptF: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,97,98,108,101,95,115,95,54,52,0),297], [String.fromCharCode(102,101,116,99,104,101,115,95,119,95,51,56,0),545]]);
          let loadingD: Map<any, any> = new Map([[String.fromCharCode(104,95,52,53,95,103,114,97,100,105,101,110,116,0),String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,95,118,95,55,52,0)], [String.fromCharCode(105,110,99,111,114,114,101,99,116,95,102,95,54,51,0),String.fromCharCode(100,95,50,56,95,114,116,112,0)]]);
          let redirecta = 0.0;
         profileinactivec ^= w_hashB.size;
         encryptF = new Map([[`${loadingD.size}`, 3 | encryptF.size]]);
         loadingD = new Map([[`${encryptF.size}`, encryptF.size - 1]]);
         redirecta /= Math.max(2, parseFloat(`${loadingD.size << (Math.min(Math.abs(encryptF.size), 4))}`));
      while (Array.from(w_hashB.values()).includes(profileinactivec)) {
          let indicator4 = 5.0;
          let iconcloseC = 3.0;
          let cancelU = String.fromCharCode(114,95,57,95,114,116,99,99,0);
         w_hashB.set(`${videocommonH}`, 1 - parseInt(`${videocommonH}`));
         indicator4 *= 3;
         iconcloseC /= Math.max(1, parseInt(`${indicator4}`));
         cancelU = `${parseInt(`${iconcloseC}`) | 3}`;
         break;
      }
          let tempnodatagifZ = String.fromCharCode(106,95,55,50,95,98,115,119,97,112,100,115,112,0);
          let flags: Array<any> = [980, 584, 455];
         time_4C -= parseInt(`${videocommonH}`);
         tempnodatagifZ += `${tempnodatagifZ.length}`;
         flags = [3 & tempnodatagifZ.length];
         closel.set(`${profileinactivec}`, feedbackB.size);
      for (let r = 0; r < 3; r++) {
         profileinactivec %= Math.max(4, mimoo.length);
      }
      if (Array.from(w_hashB.values()).includes(videocommonH)) {
         w_hashB = new Map([[`${closel.size}`, 3]]);
      }
          let sentryA: Map<any, any> = new Map([[String.fromCharCode(100,109,97,120,95,56,95,54,57,0),false ], [String.fromCharCode(105,95,51,53,95,115,111,110,105,99,0),true ], [String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,103,95,48,0),true ]]);
          let transferZ = String.fromCharCode(105,110,115,116,97,108,108,95,97,95,49,52,0);
         time_4C /= Math.max(5, closel.size ^ feedbackB.size);
         sentryA.set(`${transferZ}`, transferZ.length);
         private_qkQ = new Map([[`${closel.size}`, profileinactivec % 1]]);
       let libnms9 = 4.0;
       let injuryk = 2.0;
      let loadingV = 7246524.0 >= libnms9;
      do {
         libnms9 /= Math.max(parseFloat(`${2 + profileinactivec}`), 2);
         if (loadingV) {
            break;
         }
      } while ((5.94 == (time_4C + libnms9) || (5.94 + libnms9) == 2.34) && loadingV);
          let stepb: Array<any> = [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,95,115,95,51,0), String.fromCharCode(109,117,116,101,100,95,97,95,51,54,0), String.fromCharCode(108,95,55,95,97,110,103,101,0)];
          let vietnamR = true;
          let bellreminderc = String.fromCharCode(112,95,56,57,95,105,115,112,97,99,107,101,100,0);
         libnms9 -= parseFloat(`${parseInt(`${libnms9}`)}`);
         stepb = [3 ^ stepb.length];
         vietnamR = !vietnamR;
         bellreminderc = `${((vietnamR ? 4 : 4) + 3)}`;
         profileinactivec %= Math.max(3, closel.size >> (Math.min(Math.abs(2), 2)));
      interneth = [libnmsa.length >> (Math.min(1, Math.abs(w_hashB.size)))];
   }
   if (4 == (5 << (Math.min(5, Math.abs(awayI.size)))) && 5 == (awayI.size << (Math.min(mbnativeadvancedc.length, 5)))) {
       let malaysiay = String.fromCharCode(121,95,57,54,0);
       let halfF = 4;
       let memberw = String.fromCharCode(115,104,111,119,95,115,95,57,52,0);
       let sharewhiteC = 1.0;
       let chats = String.fromCharCode(104,95,51,52,95,115,104,97,107,101,0);
         halfF >>= Math.min(1, memberw.length);
         halfF += malaysiay.length;
         memberw += `${halfF ^ memberw.length}`;
          let headeru = String.fromCharCode(116,95,57,52,95,99,108,111,115,101,0);
         memberw += `${malaysiay.length - halfF}`;
         headeru = `${(headeru == String.fromCharCode(68,0) ? headeru.length : headeru.length)}`;
      let loadingspinners = halfF <= 9338471;
      do {
         halfF ^= parseInt(`${sharewhiteC}`);
         if (loadingspinners) {
            break;
         }
      } while (loadingspinners && (3 > (5 & malaysiay.length)));
         memberw += `${chats.length + parseInt(`${sharewhiteC}`)}`;
          let applicationc = 4.0;
         halfF *= malaysiay.length - halfF;
         applicationc /= Math.max(2, parseFloat(`${3}`));
         memberw = "1";
      while (malaysiay == memberw) {
         memberw += `${chats.length}`;
         break;
      }
      let dicelogoX = 5949258 >= memberw.length;
      do {
         memberw += "1";
         if (dicelogoX) {
            break;
         }
      } while ((malaysiay.endsWith(memberw)) && dicelogoX);
         halfF %= Math.max((String.fromCharCode(56,0) == memberw ? parseInt(`${sharewhiteC}`) : memberw.length), 5);
      if (2.64 <= (sharewhiteC / (Math.max(chats.length, 9)))) {
          let tempK: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,106,95,56,54,0),6], [String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,56,95,49,53,0),609]]);
          let neonR = 1.0;
          let downP = 5.0;
         chats = `${parseInt(`${neonR}`) + tempK.size}`;
         tempK = new Map([[`${downP}`, parseInt(`${downP}`)]]);
         neonR *= parseFloat(`${parseInt(`${downP}`)}`);
      }
         sharewhiteC += malaysiay.length;
         chats = "3";
      if ((memberw.length % (Math.max(3, 6))) > 5 || (3 % (Math.max(1, memberw.length))) > 4) {
         memberw += `${halfF}`;
      }
      mbnativeadvancedc = `${showmore2.length * inouttargetyellow8}`;
   }
   let foundn = 6154294 >= awayI.size;
   do {
      awayI.set(`${inouttargetyellow8}`, 2);
      if (foundn) {
         break;
      }
   } while ((5 > (awayI.size << (Math.min(Math.abs(3), 3))) || 1.81 > (vertical9 + 3.84)) && foundn);
      vertical9 += parseFloat(`${thailandx.length}`);
       let libreactnativejnii = 3;
       let animation1: Map<any, any> = new Map([[String.fromCharCode(104,95,56,57,95,112,111,105,110,116,0),282], [String.fromCharCode(114,95,53,50,95,115,117,98,106,101,99,116,105,118,101,115,0),165], [String.fromCharCode(112,95,53,56,95,98,97,110,100,119,105,100,116,104,0),518]]);
          let arrowselectdownj = 1.0;
          let iconscheduleV: Map<any, any> = new Map([[String.fromCharCode(99,102,115,116,114,101,97,109,95,122,95,50,55,0),117], [String.fromCharCode(117,110,105,102,111,114,109,115,95,97,95,50,0),301]]);
         animation1.set(`${libreactnativejnii}`, libreactnativejnii % (Math.max(animation1.size, 10)));
         arrowselectdownj *= parseFloat(`${2}`);
         iconscheduleV.set(`${arrowselectdownj}`, iconscheduleV.size % (Math.max(6, parseInt(`${arrowselectdownj}`))));
       let exampleimage2: Array<any> = [300, 239, 375];
      if (Array.from(animation1.keys()).includes(`${exampleimage2.length}`)) {
         exampleimage2.push(2 | exampleimage2.length);
      }
          let iconcalendar6 = 4;
         libreactnativejnii *= 2 + exampleimage2.length;
         iconcalendar6 >>= Math.min(Math.abs(3 % (Math.max(8, iconcalendar6))), 2);
         libreactnativejnii |= animation1.size;
      let grayw = 9170058 >= animation1.size;
      do {
         animation1 = new Map([[`${animation1.size}`, animation1.size]]);
         if (grayw) {
            break;
         }
      } while (grayw && (1 >= animation1.size));
      mbnativeadvancedc = `${libreactnativejnii}`;
      awayI.set(`${banner8}`, interneth.length - 3);

    const banner = await yysMembership.getBannerAd(adultMode ? 113 : 112);

    if (banner) {

      vertical9 *= parseFloat(`${parseInt(`${banner8}`) % 2}`);
   for (let j = 0; j < 1; j++) {
      interneth = [parseInt(`${banner8}`) & 1];
   }
      short_5t = new Map([[`${short_5t.size}`, interneth.length]]);
   let othermatchdetailbg4 = inouttargetyellow8 >= 8929947;
   do {
      inouttargetyellow8 ^= libnmsa.length >> (Math.min(Math.abs(2), 4));
      if (othermatchdetailbg4) {
         break;
      }
   } while ((3 <= (inouttargetyellow8 * 2)) && othermatchdetailbg4);
      awayI.set(libnmsa, handler0.size % 1);
       let navigationy = 4.0;
       let foundO = String.fromCharCode(99,111,108,108,101,99,116,105,111,110,95,98,95,53,48,0);
         navigationy += parseInt(`${navigationy}`);
         navigationy -= parseInt(`${navigationy}`);
          let orangedownarrowX = String.fromCharCode(117,95,56,57,95,100,105,115,97,98,108,101,100,0);
          let hongkong0 = true;
         foundO = `${((hongkong0 ? 5 : 2) % (Math.max(parseInt(`${navigationy}`), 7)))}`;
         orangedownarrowX = "2";
         hongkong0 = String.fromCharCode(77,0) == orangedownarrowX || 14 < orangedownarrowX.length;
      if ((2 >> (Math.min(1, foundO.length))) == 2) {
         navigationy /= Math.max(parseInt(`${navigationy}`), 2);
      }
         foundO += `${parseInt(`${navigationy}`) % (Math.max(foundO.length, 10))}`;
      let grayh = navigationy >= 9072534.0;
      do {
         navigationy /= Math.max(parseInt(`${navigationy}`), 3);
         if (grayh) {
            break;
         }
      } while ((1.49 == (1.99 - navigationy)) && grayh);
      libnmsa = `${parseInt(`${vertical9}`)}`;
      setBannerAd(banner);
    } else {

      awayI.set(showmore2, dragcloseR.length + 3);
   if (handler0.get(`${short_5t.size}`) != null) {
      handler0.set(`${thailandx.length}`, short_5t.size);
   }
       let sourceV = 4.0;
       let profileR = String.fromCharCode(106,95,53,50,95,97,100,97,112,116,101,114,0);
      while (1 <= profileR.length) {
         profileR = `${1 << (Math.min(5, Math.abs(parseInt(`${sourceV}`))))}`;
         break;
      }
      let mbnativeu = sourceV <= 6535545.0;
      do {
          let expandl = String.fromCharCode(110,115,117,105,95,57,95,51,54,0);
         sourceV += profileR.length;
         expandl += `${expandl.length % (Math.max(expandl.length, 3))}`;
         if (mbnativeu) {
            break;
         }
      } while ((3 <= (parseInt(`${sourceV}`) - profileR.length) || (profileR.length % 3) <= 2) && mbnativeu);
         sourceV /= Math.max(2, parseInt(`${sourceV}`) ^ profileR.length);
         sourceV *= profileR.length >> (Math.min(Math.abs(3), 1));
      while (2.18 <= (sourceV / (Math.max(profileR.length, 5))) || 2.18 <= (sourceV / (Math.max(profileR.length, 1)))) {
          let volumeM = 5.0;
          let iconrefreshu = 2;
          let faviconJ = 0;
          let homer = String.fromCharCode(105,95,51,49,95,109,97,116,116,101,100,0);
         sourceV *= profileR.length ^ 2;
         volumeM *= 2 | homer.length;
         iconrefreshu /= Math.max(parseInt(`${volumeM}`) << (Math.min(3, Math.abs(3))), 3);
         faviconJ >>= Math.min(Math.abs(3 * homer.length), 5);
         break;
      }
         profileR += `${(profileR == String.fromCharCode(71,0) ? profileR.length : parseInt(`${sourceV}`))}`;
      inouttargetyellow8 &= parseInt(`${banner8}`);
   while (vertical9 <= inouttargetyellow8) {
      inouttargetyellow8 <<= Math.min(5, Math.abs(interneth.length >> (Math.min(4, Math.abs(handler0.size)))));
      break;
   }
   let libreactnativejniB = short_5t.size <= 9226168;
   do {
      short_5t = new Map([[`${short_5t.size}`, interneth.length * short_5t.size]]);
      if (libreactnativejniB) {
         break;
      }
   } while ((3 < (3 * short_5t.size) && 4 < (3 & short_5t.size)) && libreactnativejniB);
      vertical9 *= parseFloat(`${2}`);
      setBannerAd(undefined);
    }
  };

  useEffect(() => {
    if (!isVip) {
      fetchBannerAd();
    }
  }, []);

  useEffect(() => {
    if (
      vod !== undefined &&
      vod !== null &&
      vodDetails !== undefined &&
      !adultMode
    ) {
      vod.vod_play_list = vodDetails.vod_play_list;
      vod.vod_play_url = vodDetails.vod_play_url;
      
      dispatch(playVod(vod, currentTimeRef.current, currentEpisode, currentSourceId));
    }

    const isRestricted = vodDetails?.vod_restricted === 1;

    if (isRestricted) {
      videoPlayerRef.current?.setPause(true);
      
      setTimeout(() => {
        setVodRestricted(isRestricted);
      }, 100);
    } else {
      setVodRestricted(isRestricted);
    }

    if (!!vod?.vodSourceId) {
      
      
      setCurrentSourceId(vod.vodSourceId);
    } else {
      
      
      setCurrentSourceId(vodDetails?.preferred_source_id);
    }

    

    if (
      vodDetails &&
      vodDetails.vod_sources &&
      vodDetails.vod_sources.length > 0
    ) {
      setVodSources(vodDetails.vod_sources);
      
      
    }
  }, [vodDetails]);

  const fetchVod = () =>
    yysInactive.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as yysFullLibcrashsdk[]);

  useEffect(() => {
    currentEpisodeRef.current = vod?.episodeWatched;
    currentTimeRef.current = vod?.timeWatched;
    console.log("vod change");
    setCurrentEpisode(
      vod?.episodeWatched === undefined ? 0 : vod.episodeWatched
    );
    setCurrentSourceId(vod?.vodSourceId)
  }, [vod]);

  const {
    data: suggestedVods,
    isFetching: isFetchingSuggestedVod,
    refetch,
  } = useQuery({
    queryKey: ["relatedVods", vod],
    queryFn: () => fetchVod(),
    enabled: !isOffline
  });

  const fetchSVod = () =>
    yysInactive.getList({
      category: vod?.vod_class,
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
      rand: 1,
      xMode: true,
    }).then((data) => data.List as yysMime[]);

  const {
    data: suggestedSVods,
    isFetching: isFetchingSuggestedSVod,
    refetchSvod,
  } = useQuery({
    queryKey: ["relatedSVods", vod],
    queryFn: () => fetchSVod(),
    enabled: !isOffline
  });

  const [deviceName, setDeviceName] = useState("");

  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d.toLowerCase());
  });

  useEffect(() => {
    Dimensions.addEventListener('change', (e) => {
      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

      if (DeviceInfo.isTablet() || includesKeywords) {
        setIsLoading(true)

        setTimeout(() => {
          setIsLoading(false)
        }, 100);
      }
    })
  }, []);


  const handleRefresh = useCallback(async () => {
       let notification2 = String.fromCharCode(113,95,49,52,95,112,97,110,101,115,0);
    let goallogoL = String.fromCharCode(108,95,53,53,95,98,105,110,107,100,97,116,97,0);
    let rncorel = 4.0;
    let classes2 = 5.0;
    let yingK: Map<any, any> = new Map([[String.fromCharCode(107,95,54,50,95,102,114,101,105,114,0),String.fromCharCode(103,95,50,48,95,111,112,101,110,99,108,0)], [String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,99,95,54,54,0),String.fromCharCode(101,111,109,101,116,114,121,95,103,95,50,48,0)], [String.fromCharCode(120,95,52,95,117,110,112,114,111,99,101,115,115,101,100,0),String.fromCharCode(111,95,55,52,95,117,116,109,111,115,116,0)]]);
    let manifesto: Array<any> = [788, 911, 301];
    let mbridgeP: Array<any> = [String.fromCharCode(113,95,49,54,95,116,114,101,110,100,108,105,110,101,0), String.fromCharCode(115,97,100,100,95,117,95,49,48,48,0), String.fromCharCode(117,95,57,56,95,116,105,110,116,0)];
    let tumbnailK = 0;
    let defaultbasketballbgz = 4;
    let leagueK = String.fromCharCode(116,95,57,50,95,115,101,103,119,105,116,0);
    let expandp: Array<any> = [125, 746];
    let thailand6 = 2.0;
    let awayplayer5 = 2;
    let basketballawayteamj = String.fromCharCode(109,95,53,54,95,99,111,110,118,101,114,115,97,116,105,111,110,0);
   for (let h = 0; h < 2; h++) {
       let logouser3 = true;
       let iconplaym: Array<any> = [457, 794, 360];
       let gradleL = String.fromCharCode(122,95,54,95,112,117,98,105,99,0);
       let control3 = 1.0;
      if (logouser3) {
         logouser3 = control3 >= 38.63 || gradleL == String.fromCharCode(115,0);
      }
      for (let p = 0; p < 1; p++) {
         control3 -= iconplaym.length / (Math.max(1, 6));
      }
          let starz = 1.0;
          let i_count6 = 2.0;
         logouser3 = gradleL == String.fromCharCode(109,0);
         starz += parseFloat(`${3}`);
         i_count6 -= parseInt(`${starz}`) / 3;
      if (gradleL.endsWith(`${logouser3}`)) {
         gradleL += "2";
      }
      let singaporej = gradleL == String.fromCharCode(115,53,119,0);
      do {
         gradleL = `${(String.fromCharCode(113,0) == gradleL ? gradleL.length : iconplaym.length)}`;
         if (singaporej) {
            break;
         }
      } while ((3 < (gradleL.length ^ 4) || 4 < (parseInt(`${control3}`) / (Math.max(7, gradleL.length)))) && singaporej);
         gradleL = `${((logouser3 ? 3 : 1))}`;
          let thailandI = 5.0;
         gradleL = `${1 & parseInt(`${thailandI}`)}`;
      if (gradleL.length < 1) {
          let wifirouterZ = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,103,95,57,51,0);
          let homeactiveK: Array<any> = [String.fromCharCode(117,95,49,48,95,118,112,99,120,0), String.fromCharCode(115,98,114,101,115,101,114,118,101,95,56,95,50,50,0), String.fromCharCode(116,114,97,105,116,115,95,103,95,55,0)];
          let rocket4 = String.fromCharCode(117,110,115,101,101,110,95,56,95,49,48,0);
          let liveendmodallogo5 = 4.0;
          let defaultteam2 = true;
         gradleL = `${2 << (Math.min(Math.abs(parseInt(`${control3}`)), 3))}`;
         wifirouterZ = `${(parseInt(`${liveendmodallogo5}`) - (defaultteam2 ? 3 : 2))}`;
         homeactiveK.push((parseInt(`${liveendmodallogo5}`) & (defaultteam2 ? 5 : 5)));
         rocket4 = `${homeactiveK.length >> (Math.min(wifirouterZ.length, 2))}`;
      }
      while (2 < gradleL.length) {
          let gmailV = 2.0;
          let giftz = true;
          let profilepicG = 0;
          let profileactiveD: Map<any, any> = new Map([[String.fromCharCode(97,95,55,57,95,99,97,108,108,98,97,99,107,0),698], [String.fromCharCode(102,95,56,49,95,104,119,97,99,99,101,108,0),149], [String.fromCharCode(98,95,54,55,95,99,113,117,101,117,101,0),502]]);
          let footballfiledlayoute = 4;
         gradleL += "1";
         gmailV /= Math.max(3, parseFloat(`${footballfiledlayoute}`));
         giftz = 83 > profileactiveD.size && profilepicG > 83;
         profilepicG += profilepicG;
         profileactiveD = new Map([[`${gmailV}`, profilepicG]]);
         break;
      }
          let robotox = true;
         gradleL += `${(iconplaym.length + (robotox ? 3 : 5))}`;
       let light5 = String.fromCharCode(109,95,51,57,95,101,120,112,114,101,115,115,105,111,110,115,0);
       let indicatorL = 4.0;
      rncorel *= parseFloat(`${manifesto.length * tumbnailK}`);
   }
   let catalogD = 9525706 >= mbridgeP.length;
   do {
       let libruntimeexecutor0 = 4.0;
       let showlessz: Map<any, any> = new Map([[String.fromCharCode(111,112,97,100,95,55,95,49,49,0),928], [String.fromCharCode(108,111,111,107,95,115,95,51,56,0),193]]);
      let shoot5 = 8423555.0 <= libruntimeexecutor0;
      do {
          let skip8 = 1.0;
          let termsO = String.fromCharCode(106,95,51,51,95,97,101,115,111,112,116,0);
          let less3 = 3;
         libruntimeexecutor0 -= parseFloat(`${parseInt(`${libruntimeexecutor0}`)}`);
         skip8 /= Math.max(termsO.length, 3);
         termsO += `${1 * termsO.length}`;
         less3 *= parseInt(`${skip8}`) & 3;
         if (shoot5) {
            break;
         }
      } while (shoot5 && (3.85 <= (libruntimeexecutor0 * 4.30)));
          let context6 = String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,95,113,95,48,0);
          let questu = 5;
         libruntimeexecutor0 *= parseFloat(`${context6.length | showlessz.size}`);
         context6 += `${questu}`;
      for (let z = 0; z < 3; z++) {
         showlessz = new Map([[`${showlessz.size}`, 2 & showlessz.size]]);
      }
         showlessz = new Map([[`${showlessz.size}`, showlessz.size ^ 2]]);
          let libavutilj = true;
         showlessz = new Map([[`${libavutilj}`, ((libavutilj ? 2 : 2) - parseInt(`${libruntimeexecutor0}`))]]);
      while (1 == (showlessz.size | 5) && (1.11 * libruntimeexecutor0) == 4.16) {
         libruntimeexecutor0 -= parseFloat(`${parseInt(`${libruntimeexecutor0}`) % (Math.max(showlessz.size, 10))}`);
         break;
      }
      mbridgeP = [tumbnailK % 3];
      if (catalogD) {
         break;
      }
   } while (catalogD && (3.97 == (5.88 * classes2) || (classes2 * 5.88) == 5.33));
   while (2 < goallogoL.length) {
      goallogoL += `${notification2.length}`;
      break;
   }
   if (3 < goallogoL.length) {
      notification2 += `${tumbnailK}`;
   }
      tumbnailK ^= expandp.length;
   for (let v = 0; v < 1; v++) {
       let bang2 = true;
       let foregroundv = String.fromCharCode(99,111,109,109,117,116,101,95,106,95,54,53,0);
       let shielddoneg = 0.0;
       let target0: Map<any, any> = new Map([[String.fromCharCode(121,95,52,95,100,101,97,108,108,111,99,97,116,101,0),689], [String.fromCharCode(100,109,105,120,95,106,95,52,51,0),169], [String.fromCharCode(119,111,114,100,108,105,115,116,95,51,95,54,56,0),294]]);
       let homeicony = false;
         target0.set(foregroundv, (String.fromCharCode(79,0) == foregroundv ? foregroundv.length : target0.size));
      let trophyx = shielddoneg >= 7768377.0;
      do {
         shielddoneg /= Math.max((String.fromCharCode(90,0) == foregroundv ? (bang2 ? 3 : 3) : foregroundv.length), 1);
         if (trophyx) {
            break;
         }
      } while ((!bang2) && trophyx);
         bang2 = 89.96 >= shielddoneg;
      while ((foregroundv.length * shielddoneg) <= 2.49) {
         shielddoneg /= Math.max(1 - parseInt(`${shielddoneg}`), 1);
         break;
      }
         target0.set(`${shielddoneg}`, parseInt(`${shielddoneg}`) | 3);
          let iconrightorangeS = 0.0;
          let successF = 1.0;
         target0 = new Map([[`${successF}`, parseInt(`${iconrightorangeS}`)]]);
      while (foregroundv.length > 4) {
         bang2 = (foregroundv.length - target0.size) <= 46;
         break;
      }
       let tempnodatagifD = 1.0;
       let templateprocessore = 2.0;
          let dependencies9 = String.fromCharCode(99,95,53,95,99,111,109,112,111,115,101,105,0);
          let loadingt = String.fromCharCode(98,105,119,103,116,95,121,95,51,55,0);
          let iconpipshrinkY = 5.0;
         templateprocessore *= parseFloat(`${2 << (Math.min(2, Math.abs(parseInt(`${templateprocessore}`))))}`);
         dependencies9 = "3";
         loadingt = `${loadingt.length << (Math.min(Math.abs(1), 3))}`;
         iconpipshrinkY += parseFloat(`${dependencies9.length}`);
      if ((target0.size / 5) < 2 && 5.18 < (4.47 - templateprocessore)) {
          let favoritea = true;
          let giftQ = String.fromCharCode(114,101,97,99,104,95,122,95,52,57,0);
          let libcxxcomponentsu = 0.0;
          let ewardedg = String.fromCharCode(121,95,49,56,95,117,110,114,101,109,111,118,97,98,108,101,0);
          let dialogF = 5.0;
         templateprocessore += parseFloat(`${parseInt(`${tempnodatagifD}`)}`);
         favoritea = libcxxcomponentsu > 95.59 && dialogF > 95.59;
         giftQ += `${(1 | (favoritea ? 2 : 5))}`;
         libcxxcomponentsu += (parseFloat(`${(favoritea ? 2 : 2) - parseInt(`${dialogF}`)}`));
         ewardedg += `${parseInt(`${dialogF}`) | ewardedg.length}`;
      }
      if (!Array.from(target0.values()).includes(shielddoneg)) {
         target0 = new Map([[`${shielddoneg}`, parseInt(`${tempnodatagifD}`) % (Math.max(8, parseInt(`${shielddoneg}`)))]]);
      }
         tempnodatagifD += (parseFloat(`${3 + (homeicony ? 4 : 4)}`));
         tempnodatagifD -= parseFloat(`${parseInt(`${templateprocessore}`) ^ 1}`);
         shielddoneg -= (parseInt(`${tempnodatagifD}`) * (bang2 ? 4 : 3));
         templateprocessore /= Math.max(2, (parseFloat(`${String.fromCharCode(112,0) == foregroundv ? parseInt(`${templateprocessore}`) : foregroundv.length}`)));
      goallogoL += `${mbridgeP.length & target0.size}`;
   }
   while (goallogoL.length > 3) {
      goallogoL += `${notification2.length}`;
      break;
   }
      notification2 = `${yingK.size & expandp.length}`;
   if ((mbridgeP.length | yingK.size) > 3) {
      mbridgeP.push((String.fromCharCode(107,0) == goallogoL ? parseInt(`${classes2}`) : goallogoL.length));
   }
      defaultbasketballbgz /= Math.max(5, 2);

    

   while (2 >= (defaultbasketballbgz % (Math.max(3, expandp.length))) || 3 >= (defaultbasketballbgz % (Math.max(2, 6)))) {
      defaultbasketballbgz *= 3;
      break;
   }
   while (4 <= (expandp.length + parseInt(`${rncorel}`)) || 4.54 <= (3.74 + rncorel)) {
       let match8 = false;
       let adulth = String.fromCharCode(102,95,52,57,95,107,101,114,110,101,100,0);
       let commonr: Map<any, any> = new Map([[String.fromCharCode(100,101,102,97,117,108,116,115,95,54,95,53,48,0),true ], [String.fromCharCode(117,95,56,95,99,104,101,99,107,105,110,103,0),false ], [String.fromCharCode(112,97,114,97,109,101,116,101,114,95,114,95,49,52,0),true ]]);
       let networki = String.fromCharCode(102,105,116,115,95,102,95,51,52,0);
      while (4 == networki.length && !match8) {
          let giflivestreamingM = 5;
          let middlebrightnessP = String.fromCharCode(102,105,111,95,122,95,52,0);
          let default_n81 = 1.0;
         match8 = networki.length <= 75;
         giflivestreamingM %= Math.max(2, parseInt(`${default_n81}`) << (Math.min(middlebrightnessP.length, 4)));
         middlebrightnessP = `${middlebrightnessP.length}`;
         default_n81 += (parseFloat(`${String.fromCharCode(78,0) == middlebrightnessP ? middlebrightnessP.length : parseInt(`${default_n81}`)}`));
         break;
      }
      let shootnogoalz = match8 ? !match8 : match8;
      do {
          let libreactperfloggerjniR: Map<any, any> = new Map([[String.fromCharCode(116,95,53,52,95,112,111,108,105,99,105,101,115,0),505], [String.fromCharCode(106,95,57,53,95,114,119,110,100,0),984]]);
          let issube = 0;
          let libcrashsdka = String.fromCharCode(116,114,97,110,102,115,101,114,95,111,95,50,48,0);
         match8 = !libcrashsdka.includes(`${match8}`);
         libreactperfloggerjniR = new Map([[`${libreactperfloggerjniR.size}`, issube]]);
         issube /= Math.max(2, 3);
         libcrashsdka = `${3 + libreactperfloggerjniR.size}`;
         if (shootnogoalz) {
            break;
         }
      } while ((match8) && shootnogoalz);
          let iconarrowrightwhitel = 0;
          let mbbannerC: Array<any> = [933, 290, 328];
          let renderc = 5.0;
         networki += `${(3 + (match8 ? 2 : 4))}`;
         iconarrowrightwhitel |= 3;
         mbbannerC.push(parseInt(`${renderc}`));
         renderc *= 3;
      if (5 < (commonr.size / (Math.max(3, networki.length))) && 3 < (5 / (Math.max(8, commonr.size)))) {
         commonr = new Map([[`${match8}`, ((match8 ? 3 : 3) + networki.length)]]);
      }
      let playershirtY = 6683004 >= adulth.length;
      do {
         adulth += `${((match8 ? 1 : 5) | 1)}`;
         if (playershirtY) {
            break;
         }
      } while (playershirtY && (!adulth.endsWith(`${match8}`)));
      while (2 >= adulth.length) {
          let defaultteamj = String.fromCharCode(105,114,100,102,116,95,120,95,50,0);
          let modulen = String.fromCharCode(107,95,56,49,95,100,105,115,116,114,105,98,117,116,105,111,110,115,0);
          let libavfilter8: Array<any> = [String.fromCharCode(114,101,108,97,121,115,95,120,95,52,52,0), String.fromCharCode(99,111,114,114,101,99,116,105,111,110,95,110,95,56,0)];
          let baselinec = String.fromCharCode(97,99,116,105,111,110,115,95,119,95,49,54,0);
         adulth = `${libavfilter8.length | 2}`;
         defaultteamj += `${baselinec.length << (Math.min(2, modulen.length))}`;
         modulen += `${modulen.length}`;
         libavfilter8 = [(String.fromCharCode(78,0) == modulen ? baselinec.length : modulen.length)];
         break;
      }
      while (!match8) {
         match8 = !match8;
         break;
      }
      let renewd = match8 ? !match8 : match8;
      do {
          let unselectedK = 4;
          let containeri = 1;
          let scrollviewK = 2.0;
         match8 = commonr.size < 54 || match8;
         unselectedK += 3 + unselectedK;
         containeri ^= 1;
         scrollviewK += parseFloat(`${containeri ^ 2}`);
         if (renewd) {
            break;
         }
      } while ((networki.length > 2) && renewd);
         networki = `${networki.length}`;
          let update_x7N = true;
         commonr.set(`${update_x7N}`, ((update_x7N ? 2 : 5) | adulth.length));
       let iconclosewhitewithbgw = String.fromCharCode(121,95,57,54,95,97,116,116,114,105,98,117,116,101,115,0);
      let malaysia7 = match8 ? !match8 : match8;
      do {
         match8 = adulth.length == 54;
         if (malaysia7) {
            break;
         }
      } while (malaysia7 && (!match8));
      rncorel *= parseFloat(`${tumbnailK << (Math.min(5, Math.abs(3)))}`);
      break;
   }
      classes2 /= Math.max(3, mbridgeP.length);
       let nativeexs = 2.0;
      if ((nativeexs - 2) >= 3.2) {
          let smallsoundA = true;
          let k_manager2 = String.fromCharCode(119,95,55,52,95,100,101,101,112,108,105,110,107,0);
          let filledc: Map<any, any> = new Map([[String.fromCharCode(98,95,51,51,95,99,97,114,111,117,115,101,108,0),779], [String.fromCharCode(100,95,55,49,95,101,115,116,105,109,97,116,105,111,110,0),759], [String.fromCharCode(116,95,56,49,95,109,108,111,99,107,0),946]]);
         nativeexs -= parseFloat(`${1}`);
         smallsoundA = k_manager2.length <= filledc.size;
         k_manager2 += `${(k_manager2 == String.fromCharCode(85,0) ? filledc.size : k_manager2.length)}`;
      }
         nativeexs *= parseFloat(`${parseInt(`${nativeexs}`)}`);
         nativeexs -= parseFloat(`${parseInt(`${nativeexs}`)}`);
      tumbnailK ^= parseInt(`${nativeexs}`) + leagueK.length;
   while ((2 | defaultbasketballbgz) < 4 && 5 < (tumbnailK | 2)) {
       let yellowtored3 = String.fromCharCode(109,95,54,52,95,120,97,115,109,0);
       let smallorangemano = 4;
       let homeplayerG: Array<any> = [180, 698];
       let heartu = String.fromCharCode(118,99,111,100,101,99,95,120,95,55,49,0);
      while ((heartu.length & homeplayerG.length) == 2 || 3 == (heartu.length & 2)) {
         homeplayerG = [heartu.length ^ 3];
         break;
      }
         yellowtored3 = `${heartu.length >> (Math.min(5, homeplayerG.length))}`;
      for (let i = 0; i < 2; i++) {
          let iconarrowrightblackl = 4;
          let positionfieldI = 3.0;
          let codegenx = 5.0;
         homeplayerG = [3 << (Math.min(1, heartu.length))];
         iconarrowrightblackl *= parseInt(`${positionfieldI}`) - parseInt(`${codegenx}`);
         positionfieldI /= Math.max(parseInt(`${codegenx}`), 1);
      }
          let iconqq8 = 3.0;
         homeplayerG.push(heartu.length);
         iconqq8 /= Math.max(3, parseFloat(`${3 ^ parseInt(`${iconqq8}`)}`));
      while (2 == homeplayerG.length) {
         homeplayerG.push(heartu.length);
         break;
      }
         heartu += `${yellowtored3.length % 2}`;
          let libloggerI = 1;
          let cornershooty = String.fromCharCode(102,95,51,54,95,97,100,100,114,0);
         homeplayerG = [cornershooty.length];
         libloggerI /= Math.max(libloggerI, 1);
         cornershooty += `${libloggerI}`;
      if (yellowtored3.length > 2) {
         smallorangemano ^= heartu.length * 3;
      }
       let singleg = false;
       let diceW = false;
         yellowtored3 = `${2 >> (Math.min(3, homeplayerG.length))}`;
          let iconmore3: Map<any, any> = new Map([[String.fromCharCode(102,105,110,95,104,95,52,57,0),64], [String.fromCharCode(115,105,103,110,97,108,95,113,95,52,54,0),958]]);
         heartu += `${heartu.length}`;
         iconmore3 = new Map([[`${iconmore3.size}`, iconmore3.size]]);
      let unselectedZ = smallorangemano <= 5980148;
      do {
         smallorangemano |= (String.fromCharCode(105,0) == yellowtored3 ? smallorangemano : yellowtored3.length);
         if (unselectedZ) {
            break;
         }
      } while ((1 <= smallorangemano) && unselectedZ);
      tumbnailK &= expandp.length & 2;
      break;
   }
      defaultbasketballbgz ^= defaultbasketballbgz / 2;
   while (!leagueK.startsWith(`${tumbnailK}`)) {
      leagueK += `${mbridgeP.length * notification2.length}`;
      break;
   }
   while ((parseInt(`${classes2}`) / (Math.max(yingK.size, 2))) == 1 || (1 | yingK.size) == 3) {
      yingK.set(`${defaultbasketballbgz}`, mbridgeP.length ^ 2);
      break;
   }
      defaultbasketballbgz &= defaultbasketballbgz;
   let scorez = 6811765.0 >= rncorel;
   do {
      rncorel *= parseFloat(`${expandp.length}`);
      if (scorez) {
         break;
      }
   } while ((4.69 <= rncorel) && scorez);
    await refetch();

      defaultbasketballbgz %= Math.max(mbridgeP.length & 2, 3);
   while (rncorel > defaultbasketballbgz) {
       let subouti = 0.0;
       let constants0 = true;
       let middleh = String.fromCharCode(103,95,56,48,95,121,115,108,111,103,0);
      let activityW = constants0 ? !constants0 : constants0;
      do {
         constants0 = subouti >= 55.1 && constants0;
         if (activityW) {
            break;
         }
      } while ((subouti >= 1.49) && activityW);
       let mappingg: Array<any> = [981, 460];
       let floater1: Array<any> = [920, 244];
         constants0 = mappingg.includes(constants0);
         subouti += parseFloat(`${2}`);
          let homeloadingr = 5;
          let progressG: Map<any, any> = new Map([[String.fromCharCode(110,111,116,99,104,101,100,95,100,95,53,50,0),842], [String.fromCharCode(109,97,114,107,100,111,119,110,95,120,95,50,54,0),902], [String.fromCharCode(99,111,118,97,108,101,110,116,95,113,95,55,51,0),693]]);
          let coreb: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,114,109,105,110,105,115,116,105,99,95,113,95,55,54,0),906], [String.fromCharCode(99,95,56,48,95,97,100,109,105,110,0),451]]);
         subouti += parseFloat(`${progressG.size}`);
         homeloadingr -= 1;
         progressG.set(`${homeloadingr}`, 1 | coreb.size);
         coreb.set(`${homeloadingr}`, coreb.size);
         middleh += `${middleh.length + 3}`;
      let indicatorb = 6342759 <= mappingg.length;
      do {
         mappingg.push(mappingg.length >> (Math.min(floater1.length, 4)));
         if (indicatorb) {
            break;
         }
      } while (indicatorb && (2 >= (mappingg.length | 3)));
       let notificationfilled3 = 5.0;
      while (2.85 >= (2.45 - notificationfilled3) || 1.94 >= (notificationfilled3 - 2.45)) {
         notificationfilled3 += parseFloat(`${3}`);
         break;
      }
      defaultbasketballbgz <<= Math.min(Math.abs(1), 3);
      break;
   }
   while (leagueK == notification2) {
      notification2 = `${expandp.length >> (Math.min(Math.abs(3), 3))}`;
      break;
   }
      tumbnailK <<= Math.min(Math.abs(parseInt(`${rncorel}`) / 3), 3);
   while (2 == (defaultbasketballbgz >> (Math.min(Math.abs(3), 3)))) {
       let soundA: Array<any> = [674, 288, 218];
       let telegramW = String.fromCharCode(97,95,55,51,0);
         telegramW = `${soundA.length * 2}`;
         soundA = [(String.fromCharCode(48,0) == telegramW ? soundA.length : telegramW.length)];
         soundA.push(soundA.length);
       let themed = String.fromCharCode(109,95,53,48,95,116,104,114,111,116,116,108,101,100,0);
         soundA = [soundA.length];
         telegramW = `${telegramW.length << (Math.min(themed.length, 5))}`;
      defaultbasketballbgz >>= Math.min(Math.abs(telegramW.length - 2), 2);
      break;
   }
       let informationL = 5;
       let reactnativeratingsy: Array<any> = [684, 939];
          let borderlessS: Map<any, any> = new Map([[String.fromCharCode(121,95,53,54,95,98,117,105,108,100,101,114,0),true ], [String.fromCharCode(100,101,99,111,117,112,108,101,95,119,95,54,0),false ]]);
         informationL >>= Math.min(4, Math.abs(2 / (Math.max(2, borderlessS.size))));
      for (let d = 0; d < 3; d++) {
         reactnativeratingsy = [reactnativeratingsy.length];
      }
          let infoG: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,104,95,52,49,0),19], [String.fromCharCode(110,111,115,99,97,108,101,95,52,95,50,52,0),82], [String.fromCharCode(116,95,49,48,95,117,110,114,101,102,99,111,117,110,116,0),599]]);
         informationL -= reactnativeratingsy.length;
         infoG.set(`${infoG.size}`, infoG.size >> (Math.min(4, Math.abs(infoG.size))));
       let bgvipxvodw = 1.0;
       let iconviewergif_ = 4.0;
         iconviewergif_ /= Math.max(informationL, 5);
         bgvipxvodw += 1 % (Math.max(8, informationL));
      tumbnailK -= parseInt(`${rncorel}`);
   if (5 > (goallogoL.length & 4) && (expandp.length & goallogoL.length) > 4) {
      goallogoL += `${1 << (Math.min(5, Math.abs(defaultbasketballbgz)))}`;
   }
   for (let z = 0; z < 2; z++) {
      goallogoL += `${parseInt(`${rncorel}`)}`;
   }
   for (let e = 0; e < 3; e++) {
      classes2 += tumbnailK;
   }
      rncorel += parseFloat(`${1}`);
    

      tumbnailK %= Math.max(parseInt(`${rncorel}`), 4);
       let largesoundf: Map<any, any> = new Map([[String.fromCharCode(122,95,56,55,95,102,117,122,122,0),211], [String.fromCharCode(116,97,112,102,105,108,116,101,114,95,50,95,51,49,0),776], [String.fromCharCode(109,105,115,117,115,101,95,98,95,57,54,0),8]]);
       let homeplayerj = 3.0;
       let sinaG: Map<any, any> = new Map([[String.fromCharCode(122,95,56,52,95,109,97,107,101,109,97,99,112,107,103,0),false ], [String.fromCharCode(109,95,55,50,95,116,101,114,109,105,110,97,116,101,0),false ], [String.fromCharCode(109,106,112,101,103,106,112,101,103,95,56,95,57,57,0),false ]]);
          let componentst = 0.0;
          let pressurem: Array<any> = [335, 696];
         homeplayerj -= 3;
         componentst -= pressurem.length << (Math.min(Math.abs(2), 1));
         pressurem.push(parseInt(`${componentst}`));
         homeplayerj /= Math.max(parseInt(`${homeplayerj}`) / 3, 2);
          let untickW = String.fromCharCode(108,95,50,50,95,115,116,112,115,0);
         sinaG.set(`${homeplayerj}`, parseInt(`${homeplayerj}`) + 3);
         untickW = `${(String.fromCharCode(53,0) == untickW ? untickW.length : untickW.length)}`;
         homeplayerj *= largesoundf.size;
          let yellowtoredE = false;
          let informationj = 1;
          let becomeZ = 1.0;
         sinaG = new Map([[`${sinaG.size}`, informationj & 3]]);
         yellowtoredE = becomeZ >= 2.47;
         informationj >>= Math.min(Math.abs(parseInt(`${becomeZ}`) % 1), 1);
      let matcht = homeplayerj >= 9751638.0;
      do {
         homeplayerj /= Math.max(parseInt(`${homeplayerj}`) / (Math.max(largesoundf.size, 4)), 2);
         if (matcht) {
            break;
         }
      } while ((sinaG.size <= 1) && matcht);
         largesoundf = new Map([[`${sinaG.size}`, 2]]);
         homeplayerj += parseInt(`${homeplayerj}`) | 2;
      if ((3 << (Math.min(3, Math.abs(sinaG.size)))) >= 5 && (homeplayerj / (Math.max(5, sinaG.size))) >= 4.9) {
         sinaG.set(`${homeplayerj}`, 3);
      }
      goallogoL = `${leagueK.length}`;
       let gradleS = 0.0;
       let strx: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,115,97,109,112,95,107,95,54,54,0),String.fromCharCode(116,95,48,95,97,110,111,116,104,101,114,0)], [String.fromCharCode(99,95,57,95,114,101,116,114,105,101,118,101,0),String.fromCharCode(117,110,98,111,120,95,53,95,54,54,0)], [String.fromCharCode(110,95,49,54,95,100,97,114,119,105,110,0),String.fromCharCode(99,108,97,109,112,95,50,95,52,56,0)]]);
          let page6 = 4.0;
         gradleS /= Math.max(5, parseFloat(`${parseInt(`${gradleS}`)}`));
         page6 *= parseFloat(`${parseInt(`${page6}`)}`);
       let whistleorangeh = String.fromCharCode(111,95,56,53,95,110,111,100,111,119,110,0);
       let commentC = String.fromCharCode(117,95,55,54,95,100,101,118,105,100,101,0);
      rncorel += (parseFloat(`${String.fromCharCode(111,0) == notification2 ? notification2.length : goallogoL.length}`));
   while (1 <= (goallogoL.length | awayplayer5)) {
       let largesoundL: Map<any, any> = new Map([[String.fromCharCode(98,95,52,50,95,112,114,111,98,108,101,109,0),String.fromCharCode(110,95,51,51,95,116,114,105,97,108,0)], [String.fromCharCode(101,110,106,105,110,95,115,95,49,50,0),String.fromCharCode(98,95,52,57,95,111,110,116,114,111,108,115,0)]]);
       let analyticsg: Map<any, any> = new Map([[String.fromCharCode(101,95,51,56,95,105,110,100,101,112,101,110,100,101,100,0),String.fromCharCode(109,97,110,117,97,108,95,112,95,52,57,0)], [String.fromCharCode(97,98,115,111,108,117,116,101,95,107,95,51,55,0),String.fromCharCode(106,95,53,52,95,102,108,111,111,100,0)], [String.fromCharCode(121,99,98,99,114,95,57,95,49,49,0),String.fromCharCode(97,95,51,57,95,99,111,110,118,111,108,117,116,105,111,110,0)]]);
         analyticsg = new Map([[`${analyticsg.size}`, analyticsg.size]]);
         analyticsg.set(`${analyticsg.size}`, largesoundL.size);
       let cancelf = String.fromCharCode(117,110,109,105,110,105,109,105,122,101,95,97,95,57,49,0);
       let reddownarrowQ = String.fromCharCode(100,95,54,48,95,99,98,114,116,0);
       let currentT = true;
       let profileframex = false;
      if (reddownarrowQ.length >= 3) {
          let headerR: Array<any> = [521, 716];
         reddownarrowQ += `${reddownarrowQ.length}`;
         headerR = [headerR.length + headerR.length];
      }
      for (let x = 0; x < 1; x++) {
         cancelf = `${analyticsg.size}`;
      }
      awayplayer5 += defaultbasketballbgz;
      break;
   }
       let homeplayerW = String.fromCharCode(120,95,49,48,48,95,117,116,105,108,0);
         homeplayerW = `${homeplayerW.length}`;
         homeplayerW += `${homeplayerW.length << (Math.min(Math.abs(1), 2))}`;
         homeplayerW = `${homeplayerW.length >> (Math.min(homeplayerW.length, 5))}`;
      goallogoL += `${awayplayer5 - basketballawayteamj.length}`;
       let fileC = true;
       let episodeK = String.fromCharCode(100,95,51,53,95,99,114,101,97,116,101,101,120,0);
       let scorei = 3;
         scorei ^= episodeK.length >> (Math.min(Math.abs(3), 5));
         episodeK += `${scorei}`;
      if (5 <= scorei) {
         scorei |= (episodeK.length & (fileC ? 3 : 5));
      }
      if (fileC) {
         fileC = episodeK.length >= 57;
      }
         episodeK = `${1 ^ episodeK.length}`;
          let catagoryo: Array<any> = [String.fromCharCode(108,97,116,116,105,99,101,95,98,95,49,48,48,0), String.fromCharCode(103,95,51,95,112,114,101,99,97,108,99,117,108,97,116,101,0), String.fromCharCode(100,97,116,97,95,52,95,51,55,0)];
          let basketballiconS = String.fromCharCode(100,120,103,105,95,112,95,51,56,0);
         scorei += 1 | episodeK.length;
         catagoryo.push(basketballiconS.length);
         basketballiconS = `${basketballiconS.length / 1}`;
         scorei /= Math.max((episodeK == String.fromCharCode(71,0) ? episodeK.length : scorei), 5);
          let whitevideolive_ = String.fromCharCode(98,108,111,99,107,99,104,97,105,110,115,95,97,95,52,49,0);
         fileC = !fileC && 13 > scorei;
         whitevideolive_ = `${whitevideolive_.length << (Math.min(whitevideolive_.length, 1))}`;
         fileC = !fileC;
      goallogoL = `${defaultbasketballbgz & 1}`;
      tumbnailK *= leagueK.length;
       let libhermesy: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,112,108,117,103,105,110,0),String.fromCharCode(115,111,99,107,101,116,115,95,49,95,50,52,0)], [String.fromCharCode(99,95,50,95,114,101,102,101,114,101,110,99,101,100,0),String.fromCharCode(115,95,56,52,95,102,111,108,108,111,119,0)]]);
       let weatherh = 1.0;
       let overA = String.fromCharCode(100,95,49,56,95,109,111,118,101,0);
       let iconstarx: Array<any> = [String.fromCharCode(100,101,113,117,101,117,101,100,95,112,95,53,51,0), String.fromCharCode(110,116,101,114,102,97,99,101,95,48,95,50,50,0), String.fromCharCode(120,95,50,50,95,116,101,115,116,115,0)];
      for (let o = 0; o < 2; o++) {
         iconstarx.push(iconstarx.length / (Math.max(1, 1)));
      }
      while (!iconstarx.includes(weatherh)) {
         weatherh += overA.length * 1;
         break;
      }
          let predictionbannersharedg = 0.0;
          let iconshareI: Array<any> = [String.fromCharCode(100,111,110,116,95,97,95,57,49,0), String.fromCharCode(115,95,53,53,95,99,114,105,116,105,99,97,108,0), String.fromCharCode(109,100,105,97,95,122,95,53,55,0)];
         weatherh /= Math.max(1 * parseInt(`${weatherh}`), 1);
         predictionbannersharedg += parseFloat(`${parseInt(`${predictionbannersharedg}`)}`);
         iconshareI = [3 >> (Math.min(Math.abs(parseInt(`${predictionbannersharedg}`)), 1))];
       let videojs8: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,120,95,111,95,52,54,0),698], [String.fromCharCode(97,118,105,97,108,97,98,108,101,95,114,95,50,52,0),104], [String.fromCharCode(122,95,50,55,95,105,100,101,111,0),601]]);
       let matchinactivez: Map<any, any> = new Map([[String.fromCharCode(118,95,49,49,95,102,111,117,114,120,109,0),189], [String.fromCharCode(102,97,105,108,97,98,108,101,95,121,95,56,51,0),921]]);
          let filterp: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,116,115,95,116,95,51,0),105], [String.fromCharCode(100,113,117,97,110,116,95,100,95,49,48,48,0),66], [String.fromCharCode(114,101,118,101,114,115,101,95,104,95,52,55,0),60]]);
          let ewardedA: Array<any> = [200, 100];
          let homeplayerI = 2.0;
         weatherh *= libhermesy.size % (Math.max(iconstarx.length, 6));
         filterp = new Map([[`${filterp.size}`, ewardedA.length]]);
         ewardedA.push(1);
         homeplayerI /= Math.max(5, filterp.size);
         iconstarx = [iconstarx.length - 2];
       let tooltipsq: Map<any, any> = new Map([[String.fromCharCode(110,111,108,111,99,107,95,108,95,55,48,0),false ], [String.fromCharCode(108,111,103,108,101,118,101,108,95,53,95,50,52,0),false ]]);
       let cancelw: Map<any, any> = new Map([[String.fromCharCode(116,114,101,97,116,95,121,95,50,48,0),986], [String.fromCharCode(102,105,110,100,101,114,95,103,95,57,57,0),88]]);
      while (3 == (libhermesy.size % 5) && 1.5 == (3.65 + weatherh)) {
          let exampleimage7 = true;
          let macauu = 0;
          let profileU: Array<any> = [String.fromCharCode(118,112,120,100,101,99,95,50,95,55,52,0), String.fromCharCode(100,111,119,110,108,111,97,100,95,116,95,57,52,0)];
          let launchu = 1.0;
         weatherh *= iconstarx.length;
         exampleimage7 = exampleimage7 && launchu > 88.8;
         macauu /= Math.max(4, profileU.length);
         profileU = [macauu];
         launchu /= Math.max(4, parseFloat(`${2}`));
         break;
      }
      expandp = [parseInt(`${weatherh}`)];
      thailand6 -= 3;
   while ((rncorel - awayplayer5) >= 3.19) {
      rncorel *= parseFloat(`${notification2.length}`);
      break;
   }
    return;
  }, []);

  const saveVodToHistory = (vod: any) => {
    
    dispatch(
      addVodToHistory(
        vod,
        currentTimeRef.current,
        currentEpisodeRef.current,
        adultMode,
        currentSourceId
      )
    );
    setInitTime(currentTimeRef.current);
    
  };

  useEffect(() => {
    setIsCollapsed(true);
    
    
    
    
    if ((foundSource?.url_count ?? 0) < currentEpisode) {
      return;
    }
    setTimeout(() => {
      try {
        episodeRef?.current?.scrollToIndex({
          index: currentEpisode % 100,
          animated: true,
        });
      } catch (error) {
       let huawei5 = 5.0;
    let componentregistryO = 0.0;
    let turndown3 = String.fromCharCode(112,111,119,101,114,102,117,108,95,56,95,56,52,0);
    let bggradientC = 3.0;
    let traminiz = 0.0;
    let filterm: Array<any> = [298, 691, 995];
    let borderlessp = String.fromCharCode(119,115,97,117,100,95,110,95,55,48,0);
    let bridgeK = String.fromCharCode(99,95,54,50,95,115,105,110,101,119,105,110,0);
    let muted5 = 1.0;
    let tempnodatagifu: Array<any> = [463, 707];
    let iconadslinkl = String.fromCharCode(104,95,49,95,112,114,111,116,101,99,116,111,114,0);
    let text4 = String.fromCharCode(115,95,56,56,95,99,97,100,101,110,99,101,0);
   for (let w = 0; w < 3; w++) {
       let selectedR = 4.0;
       let awayicon1: Array<any> = [852, 497];
       let notificationfillemptyZ: Map<any, any> = new Map([[String.fromCharCode(101,95,54,55,95,111,116,104,101,114,119,105,115,101,0),138], [String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,100,95,49,55,0),483], [String.fromCharCode(107,95,52,56,95,100,117,112,108,105,99,97,116,101,100,0),393]]);
       let search0 = 3;
       let delegate_nx = 3.0;
         awayicon1.push(awayicon1.length);
       let bottomr = 0.0;
      while (4.62 <= selectedR) {
         selectedR *= notificationfillemptyZ.size;
         break;
      }
         notificationfillemptyZ = new Map([[`${notificationfillemptyZ.size}`, notificationfillemptyZ.size]]);
      let predictionwinF = awayicon1.length <= 8360116;
      do {
          let subind: Map<any, any> = new Map([[String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,122,95,52,0),772], [String.fromCharCode(100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,95,106,95,57,54,0),301], [String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,106,95,52,56,0),196]]);
          let predictionbuttons: Array<any> = [618, 72];
          let bangV = String.fromCharCode(107,101,121,100,105,114,95,53,95,51,51,0);
         awayicon1 = [parseInt(`${delegate_nx}`)];
         subind = new Map([[`${predictionbuttons.length}`, bangV.length * predictionbuttons.length]]);
         bangV = `${predictionbuttons.length}`;
         if (predictionwinF) {
            break;
         }
      } while (predictionwinF && ((awayicon1.length * 2) == 5 || 4 == (awayicon1.length / (Math.max(2, 1)))));
      while (1 > (parseInt(`${selectedR}`) - search0) || 5.78 > (selectedR - 1.4)) {
         search0 *= awayicon1.length;
         break;
      }
       let sportC = String.fromCharCode(104,95,55,52,95,116,117,114,98,117,108,101,110,99,101,0);
         awayicon1 = [notificationfillemptyZ.size * search0];
      while (notificationfillemptyZ.get(`${selectedR}`) != null) {
          let sina7 = String.fromCharCode(111,110,99,101,95,112,95,48,0);
          let redscoreballB: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,118,101,100,95,107,95,50,53,0),String.fromCharCode(101,95,53,48,95,101,120,99,104,97,110,103,101,115,0)], [String.fromCharCode(108,95,56,51,95,97,98,115,120,0),String.fromCharCode(100,95,50,52,95,110,105,98,0)], [String.fromCharCode(114,95,51,55,95,106,112,101,103,0),String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,101,95,53,49,0)]]);
          let libavcodecJ: Map<any, any> = new Map([[String.fromCharCode(121,95,53,53,95,114,101,115,101,116,0),String.fromCharCode(105,95,49,51,95,121,101,97,114,0)], [String.fromCharCode(121,95,55,51,95,115,113,108,108,111,103,0),String.fromCharCode(102,114,111,109,95,105,95,53,54,0)]]);
          let turndownP = false;
          let clubV = 1;
         selectedR -= 3;
         sina7 = `${redscoreballB.size % 3}`;
         redscoreballB = new Map([[`${libavcodecJ.size}`, 3 - redscoreballB.size]]);
         libavcodecJ = new Map([[`${libavcodecJ.size}`, 1]]);
         turndownP = 34 >= clubV;
         clubV += redscoreballB.size - 1;
         break;
      }
         sportC = `${search0 | 2}`;
          let nalyticss: Map<any, any> = new Map([[String.fromCharCode(104,101,118,109,97,115,107,95,112,95,51,52,0),36], [String.fromCharCode(119,95,53,49,95,105,110,100,105,99,101,115,0),779]]);
         sportC += `${1 & nalyticss.size}`;
         search0 |= parseInt(`${delegate_nx}`);
          let guidea = String.fromCharCode(116,95,52,54,95,97,99,99,117,109,117,108,97,116,101,100,0);
         notificationfillemptyZ.set(`${delegate_nx}`, parseInt(`${delegate_nx}`));
         guidea = `${guidea.length}`;
      if (!sportC.startsWith(`${search0}`)) {
         search0 ^= parseInt(`${delegate_nx}`) % (Math.max(awayicon1.length, 10));
      }
      while ((selectedR / (Math.max(5.45, 7))) < 3.39 && 2 < (2 * search0)) {
          let network_ = 4;
          let verticalm = String.fromCharCode(103,95,57,48,95,116,119,111,102,105,115,104,0);
          let smallsound0 = String.fromCharCode(99,97,114,114,121,111,117,116,95,122,95,50,52,0);
          let halffieldimage4: Map<any, any> = new Map([[String.fromCharCode(100,101,98,117,103,95,56,95,50,51,0),199], [String.fromCharCode(100,114,97,119,108,105,110,101,95,118,95,52,53,0),747]]);
         selectedR *= 2;
         network_ %= Math.max(2, halffieldimage4.size);
         verticalm = "3";
         smallsound0 = `${verticalm.length}`;
         halffieldimage4 = new Map([[`${network_}`, (verticalm == String.fromCharCode(100,0) ? network_ : verticalm.length)]]);
         break;
      }
      muted5 *= parseFloat(`${1 >> (Math.min(5, turndown3.length))}`);
   }
      componentregistryO -= parseInt(`${componentregistryO}`) >> (Math.min(5, Math.abs(3)));
   for (let j = 0; j < 1; j++) {
      componentregistryO += parseInt(`${huawei5}`);
   }
   while (4 < (5 ^ borderlessp.length) && 2 < (5 ^ borderlessp.length)) {
       let description_oz: Map<any, any> = new Map([[String.fromCharCode(106,115,111,110,95,49,95,50,49,0),String.fromCharCode(106,95,54,55,95,105,110,105,116,105,97,108,108,121,0)], [String.fromCharCode(101,95,54,49,95,97,115,98,100,0),String.fromCharCode(100,116,111,114,95,100,95,51,49,0)], [String.fromCharCode(106,119,116,95,101,95,50,50,0),String.fromCharCode(120,95,56,48,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0)]]);
       let profilepic7 = String.fromCharCode(112,114,101,97,109,98,108,101,95,100,95,51,56,0);
       let liveendmodallogoI = 5;
       let iconwatcha = 4.0;
       let carouselG = String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,98,95,50,48,0);
      if ((liveendmodallogoI * carouselG.length) > 3 || (liveendmodallogoI * 3) > 5) {
          let rewardE = 1.0;
          let tailS = 1.0;
          let libnms0: Map<any, any> = new Map([[String.fromCharCode(104,95,55,54,95,114,101,108,97,116,105,118,101,0),66], [String.fromCharCode(109,95,55,51,0),255]]);
          let smallz = String.fromCharCode(102,95,49,48,48,95,99,111,111,107,100,97,116,97,0);
         liveendmodallogoI += parseInt(`${iconwatcha}`) ^ description_oz.size;
         rewardE *= 3;
         tailS -= libnms0.size % (Math.max(3, 7));
         libnms0 = new Map([[`${tailS}`, parseInt(`${rewardE}`)]]);
         smallz = `${(String.fromCharCode(120,0) == smallz ? smallz.length : parseInt(`${rewardE}`))}`;
      }
      for (let l = 0; l < 3; l++) {
          let icondownimg8 = 1.0;
          let notificationgrayl = 3.0;
          let whitevideoliveo = String.fromCharCode(109,101,109,115,101,116,95,98,95,52,56,0);
          let selected_ = false;
         description_oz = new Map([[`${iconwatcha}`, carouselG.length & 3]]);
         icondownimg8 += parseInt(`${notificationgrayl}`) >> (Math.min(whitevideoliveo.length, 4));
         notificationgrayl *= parseFloat(`${2 << (Math.min(1, whitevideoliveo.length))}`);
         selected_ = notificationgrayl > 43.89;
      }
         description_oz.set(profilepic7, 2 << (Math.min(4, profilepic7.length)));
      while (2.79 <= (iconwatcha * 5.50) && 4 <= (3 & description_oz.size)) {
          let libreactperfloggerjniu = 4;
          let mimoJ: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,57,95,55,49,0),false ], [String.fromCharCode(113,95,55,55,95,97,114,105,98,0),false ]]);
         description_oz = new Map([[`${mimoJ.size}`, liveendmodallogoI]]);
         libreactperfloggerjniu += libreactperfloggerjniu;
         mimoJ = new Map([[`${libreactperfloggerjniu}`, libreactperfloggerjniu]]);
         break;
      }
          let largesounds = false;
          let iconsharefriendsu = String.fromCharCode(100,111,102,102,115,101,116,115,95,116,95,55,52,0);
         liveendmodallogoI += 2;
         largesounds = (53 == (iconsharefriendsu.length + (largesounds ? iconsharefriendsu.length : 53)));
          let greytickk = 3.0;
         iconwatcha -= description_oz.size;
         greytickk -= parseFloat(`${parseInt(`${greytickk}`)}`);
         profilepic7 += `${carouselG.length - liveendmodallogoI}`;
      if (5.2 <= (4.2 - iconwatcha)) {
         liveendmodallogoI <<= Math.min(5, carouselG.length);
      }
         carouselG = `${liveendmodallogoI}`;
       let defaultpredictionprofiled = String.fromCharCode(105,95,50,53,95,99,97,110,111,110,0);
          let share6 = String.fromCharCode(120,95,53,49,95,113,100,101,108,116,97,0);
          let thailandG = String.fromCharCode(121,109,101,110,99,95,122,95,49,55,0);
         profilepic7 = `${parseInt(`${iconwatcha}`) / 2}`;
         share6 += "1";
         thailandG += "2";
      let right2 = 6577546.0 <= iconwatcha;
      do {
         iconwatcha /= Math.max(4, liveendmodallogoI / (Math.max(carouselG.length, 5)));
         if (right2) {
            break;
         }
      } while ((4.45 > (iconwatcha - 4.56)) && right2);
          let diceB = 0;
          let libavutil_ = String.fromCharCode(101,95,53,49,95,105,116,97,108,105,97,110,0);
          let qnewarchdefaults5: Array<any> = [800, 391, 210];
         iconwatcha /= Math.max(3, description_oz.size);
         diceB *= 3;
         libavutil_ = `${libavutil_.length}`;
         qnewarchdefaults5 = [diceB * libavutil_.length];
      while (profilepic7.length >= 4) {
          let assets1 = 4.0;
          let iconsettingH = 1;
          let libtobc = String.fromCharCode(113,95,56,54,95,108,97,116,101,115,116,0);
         profilepic7 = `${carouselG.length}`;
         assets1 += 1;
         iconsettingH /= Math.max(1, parseInt(`${assets1}`));
         libtobc = `${3 >> (Math.min(Math.abs(parseInt(`${assets1}`)), 5))}`;
         break;
      }
         iconwatcha /= Math.max(4, (String.fromCharCode(67,0) == carouselG ? description_oz.size : carouselG.length));
      filterm = [filterm.length + 2];
      break;
   }
       let regenga: Map<any, any> = new Map([[String.fromCharCode(107,95,56,48,95,108,97,98,101,108,115,0),821], [String.fromCharCode(122,95,50,48,95,109,101,97,110,0),281]]);
          let matchactivee = String.fromCharCode(121,95,53,48,95,101,110,100,97,0);
          let settingsC = String.fromCharCode(118,95,52,95,114,101,97,100,0);
          let footballfieldB = String.fromCharCode(114,95,51,51,95,119,114,97,112,100,101,116,101,99,116,0);
         regenga.set(footballfieldB, regenga.size);
         matchactivee = `${settingsC.length * 3}`;
         settingsC = `${settingsC.length}`;
         footballfieldB += "3";
          let basketballdetailsbgk = String.fromCharCode(109,111,109,101,110,116,117,109,95,56,95,52,51,0);
         regenga.set(basketballdetailsbgk, (String.fromCharCode(102,0) == basketballdetailsbgk ? basketballdetailsbgk.length : regenga.size));
          let malaysiaB = true;
         regenga = new Map([[`${regenga.size}`, regenga.size]]);
      bridgeK = "2";
   for (let s = 0; s < 1; s++) {
      turndown3 += `${filterm.length * parseInt(`${traminiz}`)}`;
   }
       let s_hashc = String.fromCharCode(102,108,111,97,116,95,111,95,51,51,0);
      while (s_hashc.length >= s_hashc.length) {
         s_hashc += `${s_hashc.length + 1}`;
         break;
      }
         s_hashc += `${s_hashc.length >> (Math.min(Math.abs(1), 1))}`;
      let sharewhiteX = String.fromCharCode(106,115,97,108,50,105,116,114,116,50,0) == s_hashc;
      do {
         s_hashc += `${s_hashc.length}`;
         if (sharewhiteX) {
            break;
         }
      } while ((s_hashc.length < s_hashc.length) && sharewhiteX);
      muted5 *= parseFloat(`${s_hashc.length / 1}`);
      bggradientC -= 1 ^ filterm.length;
   if (!bridgeK.startsWith(`${muted5}`)) {
      muted5 -= parseFloat(`${3 % (Math.max(4, parseInt(`${muted5}`)))}`);
   }
   if (traminiz >= muted5) {
       let footballfieldu = false;
       let dangerK = String.fromCharCode(117,95,54,57,95,105,110,100,105,99,97,116,111,114,0);
      for (let f = 0; f < 2; f++) {
         footballfieldu = ((dangerK.length & (footballfieldu ? 73 : dangerK.length)) < 73);
      }
         footballfieldu = dangerK.length >= 10 && footballfieldu;
         dangerK += `${dangerK.length / 1}`;
      for (let m = 0; m < 3; m++) {
         footballfieldu = dangerK.length < 56;
      }
      if (footballfieldu && dangerK.length <= 5) {
         dangerK = `${((footballfieldu ? 2 : 5) + dangerK.length)}`;
      }
         dangerK += `${(dangerK == String.fromCharCode(81,0) ? (footballfieldu ? 1 : 3) : dangerK.length)}`;
      traminiz += parseFloat(`${parseInt(`${bggradientC}`) | 1}`);
   }
   if ((muted5 / (Math.max(huawei5, 3))) <= 2.38) {
       let loginL = 0.0;
       let uimanagerW = String.fromCharCode(97,114,103,118,95,105,95,56,55,0);
       let guider = String.fromCharCode(111,95,57,50,95,98,97,115,101,110,97,109,101,0);
       let modeD = 2.0;
       let turnb = 5.0;
      let runtimej = String.fromCharCode(100,50,49,121,0) == uimanagerW;
      do {
         uimanagerW += `${parseInt(`${loginL}`) >> (Math.min(uimanagerW.length, 4))}`;
         if (runtimej) {
            break;
         }
      } while ((guider.includes(uimanagerW)) && runtimej);
      if (1 <= guider.length) {
          let bodan2 = 0;
          let main_ku = String.fromCharCode(118,98,114,117,115,104,95,117,95,56,55,0);
          let phonesharem = 0.0;
         loginL /= Math.max(3, (guider == String.fromCharCode(89,0) ? parseInt(`${modeD}`) : guider.length));
         bodan2 |= main_ku.length + parseInt(`${phonesharem}`);
         main_ku += "3";
         phonesharem += parseFloat(`${main_ku.length % (Math.max(1, 1))}`);
      }
      let aboutr = 6748911 <= uimanagerW.length;
      do {
          let fastforwardG = String.fromCharCode(117,112,112,101,114,95,56,95,55,53,0);
         uimanagerW += `${(String.fromCharCode(68,0) == fastforwardG ? parseInt(`${turnb}`) : fastforwardG.length)}`;
         if (aboutr) {
            break;
         }
      } while ((3 == (uimanagerW.length - parseInt(`${loginL}`))) && aboutr);
         uimanagerW += `${guider.length}`;
      let trophyN = 5047992.0 >= modeD;
      do {
         modeD /= Math.max(3, parseFloat(`${1 | parseInt(`${modeD}`)}`));
         if (trophyN) {
            break;
         }
      } while (trophyN && ((parseInt(`${modeD}`) / (Math.max(guider.length, 2))) == 1));
          let libglogg = 5.0;
          let skip2 = 4.0;
         modeD -= parseFloat(`${uimanagerW.length % 2}`);
         libglogg *= parseFloat(`${2}`);
         skip2 /= Math.max(1, parseInt(`${libglogg}`));
          let libfollyU = String.fromCharCode(104,95,53,95,112,114,111,112,111,115,101,100,0);
          let unselectedr: Map<any, any> = new Map([[String.fromCharCode(103,95,49,53,95,115,121,115,99,116,108,115,0),String.fromCharCode(122,95,52,53,95,97,116,116,114,97,99,116,105,111,110,0)], [String.fromCharCode(100,95,57,56,95,97,99,99,101,112,116,97,98,108,101,0),String.fromCharCode(118,95,54,48,95,105,110,100,101,120,111,102,0)], [String.fromCharCode(99,111,111,108,100,111,119,110,115,95,49,95,49,0),String.fromCharCode(109,112,101,103,95,111,95,50,52,0)]]);
          let imagenetworkerri = 4;
         modeD -= parseFloat(`${1 ^ unselectedr.size}`);
         libfollyU += `${imagenetworkerri ^ 2}`;
         unselectedr = new Map([[libfollyU, 2 + imagenetworkerri]]);
         turnb /= Math.max(2 + guider.length, 4);
         uimanagerW = `${3 | parseInt(`${turnb}`)}`;
      let wifirouterK = 8464275.0 <= modeD;
      do {
          let arrowrightwithtailN = String.fromCharCode(102,116,118,109,111,95,116,95,52,52,0);
         modeD -= parseFloat(`${arrowrightwithtailN.length & 3}`);
         if (wifirouterK) {
            break;
         }
      } while (wifirouterK && ((modeD - 5.16) == 2.88));
          let homeinactivez = 5;
          let grayH = true;
          let statisticsinactivem = 2.0;
         uimanagerW += `${uimanagerW.length + 2}`;
         homeinactivez *= 1 ^ parseInt(`${statisticsinactivem}`);
         grayH = 64 >= (statisticsinactivem - homeinactivez);
          let popup4 = 1.0;
          let controls = true;
         modeD -= parseFloat(`${uimanagerW.length}`);
         popup4 *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${popup4}`)), 4))}`);
         controls = popup4 < 33.49 && !controls;
         modeD *= parseFloat(`${uimanagerW.length}`);
         uimanagerW = `${parseInt(`${modeD}`)}`;
      while (4.42 <= (loginL + 1.43) && (loginL + 1.43) <= 1.91) {
         modeD *= parseFloat(`${uimanagerW.length - 2}`);
         break;
      }
      huawei5 *= borderlessp.length;
   }
      bggradientC *= 2;
   for (let f = 0; f < 3; f++) {
      tempnodatagifu.push(turndown3.length * 2);
   }
      borderlessp = `${bridgeK.length}`;
      bggradientC /= Math.max(parseInt(`${traminiz}`), 1);
      muted5 *= parseFloat(`${tempnodatagifu.length - parseInt(`${bggradientC}`)}`);
   for (let s = 0; s < 1; s++) {
       let homeinactivew = String.fromCharCode(112,105,110,115,95,101,95,49,52,0);
       let feedbackJ = true;
       let condensedX: Map<any, any> = new Map([[String.fromCharCode(101,116,104,111,100,95,114,95,51,52,0),String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,119,95,50,50,0)], [String.fromCharCode(102,95,49,50,95,103,101,116,112,97,103,101,115,105,122,101,0),String.fromCharCode(103,95,53,54,95,115,97,110,105,116,105,122,101,114,0)]]);
          let homeactiveB = String.fromCharCode(97,95,49,53,95,114,101,99,105,112,114,111,99,97,108,0);
         condensedX = new Map([[`${condensedX.size}`, condensedX.size - 1]]);
         homeactiveB += `${(String.fromCharCode(109,0) == homeactiveB ? homeactiveB.length : homeactiveB.length)}`;
      let sportz = String.fromCharCode(53,107,110,48,107,99,105,49,0) == homeinactivew;
      do {
          let iconw: Array<any> = [139, 972, 0];
          let launchr: Map<any, any> = new Map([[String.fromCharCode(117,95,50,53,95,105,111,115,0),String.fromCharCode(97,95,55,48,95,100,109,117,108,0)], [String.fromCharCode(99,111,108,108,97,112,115,101,95,50,95,50,52,0),String.fromCharCode(115,112,97,109,95,116,95,49,48,0)]]);
         homeinactivew = `${(3 * (feedbackJ ? 2 : 1))}`;
         iconw.push(iconw.length | 3);
         launchr.set(`${iconw.length}`, launchr.size);
         if (sportz) {
            break;
         }
      } while (sportz && (!homeinactivew.startsWith(`${feedbackJ}`)));
      if (homeinactivew.endsWith(`${feedbackJ}`)) {
          let gifgoalbg2 = String.fromCharCode(109,97,112,112,101,114,95,108,95,50,55,0);
          let redirectW = 1;
          let airbnbstaru = 1.0;
          let cricketA = String.fromCharCode(108,97,118,117,95,103,95,57,50,0);
         homeinactivew += `${(2 / (Math.max(3, (feedbackJ ? 1 : 1))))}`;
         gifgoalbg2 += "3";
         redirectW -= cricketA.length - parseInt(`${airbnbstaru}`);
         airbnbstaru /= Math.max(parseFloat(`${3 * cricketA.length}`), 4);
      }
      let moonV = condensedX.size >= 7306146;
      do {
          let exampleimagew = 2.0;
          let stationV = String.fromCharCode(112,114,111,112,111,115,101,100,95,106,95,57,54,0);
         condensedX.set(homeinactivew, ((feedbackJ ? 3 : 1)));
         exampleimagew -= parseFloat(`${parseInt(`${exampleimagew}`) & 2}`);
         stationV = "2";
         if (moonV) {
            break;
         }
      } while (moonV && ((2 >> (Math.min(2, homeinactivew.length))) > 3 && 2 > (homeinactivew.length >> (Math.min(4, Math.abs(condensedX.size))))));
      while (condensedX.size <= 4 && 2 <= (4 << (Math.min(5, Math.abs(condensedX.size))))) {
          let kickz = String.fromCharCode(105,95,54,49,95,98,105,116,115,0);
          let codegenR = String.fromCharCode(106,95,50,50,95,114,101,102,114,101,115,104,0);
          let greyarrowupa = 2;
          let redcirclebgQ = false;
         feedbackJ = redcirclebgQ;
         kickz += `${greyarrowupa / (Math.max(1, 5))}`;
         codegenR = "2";
         greyarrowupa >>= Math.min(Math.abs(greyarrowupa % 3), 1);
         break;
      }
      let iconeyet = 6491815 <= condensedX.size;
      do {
          let yellowtoredi: Array<any> = [224, 990, 587];
         condensedX.set(homeinactivew, ((feedbackJ ? 4 : 3) % (Math.max(homeinactivew.length, 6))));
         yellowtoredi = [yellowtoredi.length];
         if (iconeyet) {
            break;
         }
      } while (iconeyet && (homeinactivew.endsWith(`${condensedX.size}`)));
      if (homeinactivew.length > 3) {
          let downloadedJ = String.fromCharCode(108,95,50,51,95,109,117,108,109,111,100,0);
         feedbackJ = !feedbackJ;
         downloadedJ = "3";
      }
      let plashZ = feedbackJ ? !feedbackJ : feedbackJ;
      do {
         feedbackJ = null != condensedX.get(`${feedbackJ}`);
         if (plashZ) {
            break;
         }
      } while ((condensedX.size == 2) && plashZ);
       let volume8 = String.fromCharCode(97,98,115,116,114,97,99,116,95,98,95,50,54,0);
       let traminic = String.fromCharCode(117,112,100,97,116,101,115,95,113,95,53,51,0);
      bridgeK = `${tempnodatagifu.length}`;
   }
   let iconstarB = huawei5 >= 8238794.0;
   do {
      huawei5 /= Math.max(5, iconadslinkl.length | 1);
      if (iconstarB) {
         break;
      }
   } while ((!tempnodatagifu.includes(huawei5)) && iconstarB);
   for (let i = 0; i < 1; i++) {
       let teamdetailsbgH = false;
       let time_u04 = String.fromCharCode(97,95,51,50,95,101,98,109,108,0);
       let uimanagerb = String.fromCharCode(112,97,114,97,109,115,95,105,95,56,51,0);
      while (1 == time_u04.length) {
         time_u04 += `${time_u04.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
          let notificationgrayY = true;
          let savex = 1.0;
          let taiwanI: Map<any, any> = new Map([[String.fromCharCode(114,101,99,104,117,110,107,95,119,95,51,51,0),false ], [String.fromCharCode(97,110,105,109,97,108,115,95,117,95,54,53,0),true ]]);
         time_u04 = `${((notificationgrayY ? 1 : 1))}`;
         notificationgrayY = taiwanI.size < parseInt(`${savex}`);
         savex /= Math.max(3, 1 % (Math.max(10, parseInt(`${savex}`))));
         taiwanI = new Map([[`${taiwanI.size}`, parseInt(`${savex}`) << (Math.min(Math.abs(3), 4))]]);
      while (time_u04.endsWith(`${teamdetailsbgH}`)) {
         teamdetailsbgH = time_u04 == uimanagerb;
         break;
      }
         time_u04 = "3";
         uimanagerb = `${uimanagerb.length | 2}`;
      muted5 *= parseFloat(`${2}`);
   }
       let controlT = 2;
       let imageactionliveo: Map<any, any> = new Map([[String.fromCharCode(121,95,51,54,95,99,111,100,101,99,114,97,119,0),870], [String.fromCharCode(98,95,54,52,95,109,98,108,111,111,112,0),767]]);
      for (let l = 0; l < 3; l++) {
          let statisticsactiveA: Array<any> = [953, 873, 951];
          let notificationfilledC = 1;
          let orientationI = String.fromCharCode(104,95,50,57,95,118,97,114,105,110,116,0);
         controlT &= 1 | notificationfilledC;
         statisticsactiveA.push(orientationI.length & statisticsactiveA.length);
         notificationfilledC >>= Math.min(1, Math.abs(3));
         orientationI = "2";
      }
      let orangedownarrowS = imageactionliveo.size <= 8786904;
      do {
         imageactionliveo.set(`${controlT}`, imageactionliveo.size);
         if (orangedownarrowS) {
            break;
         }
      } while ((2 == (4 | controlT) && (controlT | 4) == 3) && orangedownarrowS);
      while ((imageactionliveo.size * controlT) <= 1 && (imageactionliveo.size * 1) <= 2) {
         controlT &= controlT + 2;
         break;
      }
      for (let e = 0; e < 3; e++) {
         imageactionliveo.set(`${controlT}`, imageactionliveo.size * controlT);
      }
         imageactionliveo = new Map([[`${imageactionliveo.size}`, imageactionliveo.size]]);
         imageactionliveo.set(`${controlT}`, 3);
      bridgeK += "1";
   if (1 > (bridgeK.length / (Math.max(2, 6)))) {
       let policyJ = String.fromCharCode(120,95,55,49,95,116,109,99,100,0);
      for (let y = 0; y < 1; y++) {
         policyJ += "2";
      }
       let statisticsactiveQ = String.fromCharCode(115,101,97,95,49,95,49,51,0);
       let gradleJ = String.fromCharCode(113,117,101,117,101,115,95,103,95,57,50,0);
          let libfabricjniN = false;
          let basketballiconD: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,109,105,116,95,118,95,49,0),567], [String.fromCharCode(97,95,54,56,95,99,117,100,97,0),572], [String.fromCharCode(108,111,111,107,97,115,105,100,101,95,115,95,51,49,0),684]]);
         statisticsactiveQ += `${(policyJ == String.fromCharCode(109,0) ? policyJ.length : basketballiconD.size)}`;
         libfabricjniN = (!libfabricjniN ? libfabricjniN : !libfabricjniN);
         basketballiconD = new Map([[`${libfabricjniN}`, ((libfabricjniN ? 3 : 2) >> (Math.min(Math.abs((libfabricjniN ? 1 : 2)), 4)))]]);
      bridgeK = `${parseInt(`${muted5}`)}`;
   }

        console.log("An error occurred while scrolling:", error);
      }
    }, 1200);
  }, [
    currentEpisode,
    episodeRef,
    isFetchingVodDetails,
    currentSourceId,
    sourceRef,
  ]);

  useFocusEffect(
    useCallback(() => {
      setDismountPlayer(false);
      return () => {
        
        if (
          vodSources &&
          
          // vod?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
          
          vodSources
            ?.find(({ source_id }) => source_id === currentSourceId)
            ?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
        ) {
          saveVodToHistory(vod);
          setInitTime(currentTimeRef.current);
          
        }
      };
    }, [vod, currentTimeRef, currentEpisode, videoPlayerRef, currentSourceId])
  );

  const onPressEpisode = useCallback((itemId: any) => {
    setCurrentEpisode(itemId);
    currentEpisodeRef.current = itemId;
    currentTimeRef.current = 0;
  }, []);

  const renderEpisodes = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={{
          backgroundColor:
            currentEpisode === item.nid ? colors.primary : colors.search,
          paddingVertical: 8,
          paddingHorizontal: 10,
          minWidth: 70,
          marginRight: spacing.xs,
          ...styles.episodeBtn,
        }}
        onPress={() => onPressEpisode(item.nid)}
      >
        <Text
          numberOfLines={1}
          style={{
            fontSize: 13,
            textAlign: "center",
            fontWeight: "500",
            color: currentEpisode === item.nid ? colors.selected : colors.muted,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    ),
    [currentEpisode]
  );

  const onContentSizeChange = () => {
       let miniD = true;
    let predictionwinv: Map<any, any> = new Map([[String.fromCharCode(100,101,105,110,105,116,95,56,95,50,57,0),48], [String.fromCharCode(110,111,115,105,109,100,95,54,95,57,48,0),712]]);
    let detailsU = String.fromCharCode(108,97,110,103,105,100,95,118,95,51,53,0);
    let collectionI: Map<any, any> = new Map([[String.fromCharCode(118,95,50,48,95,113,112,113,115,99,97,108,101,0),886], [String.fromCharCode(103,95,49,56,95,112,111,115,116,114,111,116,97,116,101,0),219], [String.fromCharCode(121,95,55,48,95,115,116,114,105,110,103,117,116,105,108,115,0),498]]);
    let mimef = String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,105,95,57,52,0);
    let othermatchdetailbg2 = false;
    let activity4 = String.fromCharCode(109,95,49,53,95,105,102,111,114,119,97,114,100,0);
    let attributedstringb = 4;
    let plashs = String.fromCharCode(99,111,100,101,99,112,114,105,118,95,111,95,54,50,0);
    let gemfileM = String.fromCharCode(101,99,108,95,119,95,57,57,0);
    let modules5 = 2.0;
   if (1 == collectionI.size) {
      detailsU += `${3 | attributedstringb}`;
   }
       let regengB = true;
       let arrowrightwithtailR: Array<any> = [String.fromCharCode(109,95,53,53,95,112,111,107,101,114,0), String.fromCharCode(108,105,98,116,103,118,111,105,112,95,51,95,49,49,0)];
       let themem = String.fromCharCode(109,112,101,103,95,109,95,56,48,0);
      for (let l = 0; l < 2; l++) {
         arrowrightwithtailR = [1];
      }
         regengB = ((arrowrightwithtailR.length * (!regengB ? arrowrightwithtailR.length : 4)) < 4);
         themem = `${arrowrightwithtailR.length << (Math.min(Math.abs(3), 3))}`;
      while (!regengB || 2 > themem.length) {
          let templateprocessor6 = 4.0;
         themem += "3";
         templateprocessor6 -= parseFloat(`${parseInt(`${templateprocessor6}`)}`);
         break;
      }
      if (5 > (themem.length / (Math.max(4, arrowrightwithtailR.length)))) {
         themem = `${themem.length / (Math.max(1, 4))}`;
      }
      let codeJ = regengB ? !regengB : regengB;
      do {
         regengB = themem.startsWith(`${regengB}`);
         if (codeJ) {
            break;
         }
      } while (codeJ && (2 == (4 / (Math.max(3, arrowrightwithtailR.length)))));
      while (3 < (themem.length * arrowrightwithtailR.length) && (arrowrightwithtailR.length * 3) < 2) {
         themem = `${(themem.length << (Math.min(5, Math.abs((regengB ? 5 : 5)))))}`;
         break;
      }
      while (regengB && 4 == themem.length) {
         themem = "3";
         break;
      }
      for (let g = 0; g < 2; g++) {
          let downh = String.fromCharCode(110,95,56,50,95,97,115,98,100,0);
          let defaultbasketballbgt: Array<any> = [727, 760, 318];
         themem += `${defaultbasketballbgt.length | 1}`;
         downh = `${downh.length}`;
         defaultbasketballbgt = [downh.length];
      }
      miniD = 48 == activity4.length && attributedstringb == 48;
      activity4 += `${predictionwinv.size}`;
      othermatchdetailbg2 = activity4.length >= 55;
      miniD = predictionwinv.size == attributedstringb;
   if (4 >= (collectionI.size % (Math.max(6, plashs.length))) || 3 >= (plashs.length % 4)) {
      collectionI = new Map([[`${attributedstringb}`, (activity4 == String.fromCharCode(88,0) ? activity4.length : attributedstringb)]]);
   }

    if (episodeRef.current) {

       let screenv = String.fromCharCode(107,95,52,49,95,99,108,97,115,104,101,100,0);
          let nativeexr = String.fromCharCode(97,95,51,48,95,112,101,110,99,105,108,0);
          let catagorym: Map<any, any> = new Map([[String.fromCharCode(119,95,53,55,0),String.fromCharCode(116,95,54,57,95,116,104,117,109,98,110,97,105,108,115,0)], [String.fromCharCode(99,95,49,52,95,110,97,116,105,111,110,97,108,105,116,121,0),String.fromCharCode(109,95,50,57,95,111,110,116,97,99,116,0)], [String.fromCharCode(115,95,53,53,95,115,117,98,110,111,100,101,115,0),String.fromCharCode(97,116,99,104,95,119,95,51,52,0)]]);
         screenv = `${catagorym.size ^ nativeexr.length}`;
      if (!screenv.includes(`${screenv.length}`)) {
          let launcherT = 2.0;
          let downI = String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,107,95,55,55,0);
          let windb = 3.0;
         screenv += `${1 / (Math.max(9, parseInt(`${windb}`)))}`;
         launcherT -= 1;
         downI += `${downI.length / (Math.max(8, parseInt(`${launcherT}`)))}`;
         windb += downI.length;
      }
      for (let e = 0; e < 2; e++) {
         screenv = `${screenv.length + screenv.length}`;
      }
      collectionI.set(mimef, (String.fromCharCode(77,0) == mimef ? mimef.length : (othermatchdetailbg2 ? 3 : 4)));
   for (let j = 0; j < 2; j++) {
      predictionwinv.set(detailsU, detailsU.length);
   }
      collectionI = new Map([[`${othermatchdetailbg2}`, (mimef.length % (Math.max(7, (othermatchdetailbg2 ? 2 : 5))))]]);
   while ((1 / (Math.max(1, detailsU.length))) <= 3) {
      detailsU += `${plashs.length}`;
      break;
   }
       let morex = String.fromCharCode(107,95,51,50,95,103,101,110,99,98,0);
       let libyogaN = 5.0;
      if (!morex.includes(`${libyogaN}`)) {
         libyogaN -= 3 | morex.length;
      }
          let hooks9 = 0.0;
         libyogaN -= parseInt(`${hooks9}`) | 3;
          let fillQ = String.fromCharCode(103,95,55,48,95,115,97,109,105,0);
          let back0 = String.fromCharCode(115,119,97,116,99,104,95,104,95,56,52,0);
          let basketballhometeamD: Map<any, any> = new Map([[String.fromCharCode(108,95,56,50,95,112,114,111,98,97,98,105,108,105,116,121,0),706], [String.fromCharCode(102,95,57,95,108,111,117,100,110,111,114,109,0),797], [String.fromCharCode(102,95,54,49,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0),797]]);
         libyogaN /= Math.max(5, basketballhometeamD.size * back0.length);
         fillQ += `${fillQ.length}`;
         back0 += `${fillQ.length << (Math.min(fillQ.length, 1))}`;
      for (let g = 0; g < 2; g++) {
         morex = `${2 + morex.length}`;
      }
         libyogaN *= parseInt(`${libyogaN}`) & morex.length;
         libyogaN *= 1 - morex.length;
      activity4 += `${morex.length}`;
      detailsU = "3";
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let subtextg = 4;
    let eactZ = String.fromCharCode(99,95,52,50,95,100,101,99,111,100,105,110,103,0);
    let eyeopenb: Array<any> = [954, 101, 306];
    let becomeu = String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,99,95,53,53,0);
    let settingI: Array<any> = [515, 383];
    let strings6 = 1;
    let annerg = 4.0;
    let matchdetailbg0 = 4.0;
    let moduleE = 4;
    let fastforwardW = false;
    let buildJ = true;
   for (let n = 0; n < 1; n++) {
       let long_uj = 1.0;
       let moduley = String.fromCharCode(118,95,52,57,95,112,115,102,105,108,101,0);
       let iconwatchnow6 = 2.0;
       let injuryB: Array<any> = [329, 175, 484];
         iconwatchnow6 *= parseInt(`${long_uj}`);
       let combinedV = String.fromCharCode(108,105,98,120,118,105,100,95,114,95,50,56,0);
       let whatsappK = 2;
       let vignette0 = 2;
      for (let e = 0; e < 1; e++) {
         whatsappK >>= Math.min(Math.abs(whatsappK), 4);
      }
         injuryB.push(2);
       let predictionlossf: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,53,95,50,57,0),770], [String.fromCharCode(118,95,50,95,115,117,110,114,105,115,101,0),2]]);
      if (1.86 < (whatsappK - long_uj)) {
         whatsappK -= (String.fromCharCode(99,0) == moduley ? moduley.length : parseInt(`${iconwatchnow6}`));
      }
         iconwatchnow6 -= whatsappK;
         injuryB.push(1);
         combinedV = "3";
      while (3.22 < (moduley.length / (Math.max(6, long_uj)))) {
         moduley = `${2 / (Math.max(whatsappK, 10))}`;
         break;
      }
      for (let w = 0; w < 3; w++) {
          let register_m5x = 4;
         injuryB = [(String.fromCharCode(48,0) == moduley ? parseInt(`${long_uj}`) : moduley.length)];
         register_m5x |= register_m5x;
      }
      becomeu = `${1 >> (Math.min(Math.abs(parseInt(`${iconwatchnow6}`)), 3))}`;
   }
       let upgradeJ = 0;
       let videobufferloadingP = 5;
      if (4 <= (videobufferloadingP / 2)) {
          let injury2: Array<any> = [710, 476, 557];
          let statisticsactives = String.fromCharCode(102,105,108,108,115,95,103,95,56,53,0);
          let crown7 = 1.0;
         upgradeJ >>= Math.min(Math.abs(upgradeJ >> (Math.min(1, Math.abs(2)))), 1);
         injury2.push(3 & statisticsactives.length);
         statisticsactives = `${injury2.length}`;
         crown7 /= Math.max(4, injury2.length);
      }
      let infoF = 9205540 <= videobufferloadingP;
      do {
         videobufferloadingP >>= Math.min(Math.abs(upgradeJ), 2);
         if (infoF) {
            break;
         }
      } while (((upgradeJ - 2) > 4 || (videobufferloadingP - upgradeJ) > 2) && infoF);
      while (2 >= (upgradeJ - videobufferloadingP) || (videobufferloadingP - upgradeJ) >= 2) {
         videobufferloadingP <<= Math.min(5, Math.abs(videobufferloadingP & upgradeJ));
         break;
      }
      let configureh = 9519225 >= upgradeJ;
      do {
         upgradeJ /= Math.max(videobufferloadingP, 1);
         if (configureh) {
            break;
         }
      } while (configureh && (3 < (3 / (Math.max(6, videobufferloadingP)))));
      for (let j = 0; j < 1; j++) {
          let inewinterstitialA = String.fromCharCode(100,105,103,101,115,116,115,95,119,95,52,49,0);
          let listY = 3;
         upgradeJ -= videobufferloadingP;
         inewinterstitialA = `${listY & 3}`;
         listY |= (inewinterstitialA == String.fromCharCode(107,0) ? listY : inewinterstitialA.length);
      }
         videobufferloadingP <<= Math.min(Math.abs(1 & videobufferloadingP), 5);
      strings6 >>= Math.min(Math.abs(3), 3);
      matchdetailbg0 /= Math.max(parseFloat(`${eyeopenb.length}`), 3);
       let owngoala = String.fromCharCode(112,95,51,56,95,108,97,115,116,109,98,117,102,0);
      if (owngoala == String.fromCharCode(67,0)) {
          let saveH: Array<any> = [886, 219];
          let placementI = 1.0;
         owngoala += `${parseInt(`${placementI}`)}`;
         saveH.push(saveH.length);
         placementI /= Math.max(saveH.length, 4);
      }
      while (3 > owngoala.length) {
          let emptyv = false;
          let stylesi = 4;
          let yellowo = String.fromCharCode(112,109,107,95,103,95,54,53,0);
          let yellowcirclebg2: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,97,95,53,0),341], [String.fromCharCode(99,95,53,57,95,119,100,108,102,99,110,0),68], [String.fromCharCode(114,101,116,114,97,110,115,95,51,95,52,52,0),277]]);
          let goalY = String.fromCharCode(104,101,108,112,101,114,115,95,107,95,53,57,0);
         owngoala += `${(yellowo == String.fromCharCode(52,0) ? yellowcirclebg2.size : yellowo.length)}`;
         emptyv = emptyv && goalY.length > 30;
         stylesi ^= goalY.length;
         yellowcirclebg2 = new Map([[goalY, (String.fromCharCode(81,0) == goalY ? stylesi : goalY.length)]]);
         break;
      }
      for (let h = 0; h < 2; h++) {
         owngoala = `${owngoala.length << (Math.min(2, owngoala.length))}`;
      }
      annerg /= Math.max(strings6 & 3, 1);
   while ((2 | moduleE) > 3 || 2 > moduleE) {
       let k_lockO: Map<any, any> = new Map([[String.fromCharCode(120,95,49,52,95,100,101,112,101,110,100,115,0),false ], [String.fromCharCode(116,119,111,108,111,111,112,95,104,95,49,55,0),false ]]);
       let pressurem: Map<any, any> = new Map([[String.fromCharCode(112,95,51,51,95,116,114,105,103,103,101,114,0),true ], [String.fromCharCode(103,101,110,101,114,97,116,105,111,110,95,56,95,55,50,0),true ]]);
       let greenI = 5.0;
      if ((pressurem.size * parseInt(`${greenI}`)) >= 4) {
          let iconviewergifp = String.fromCharCode(108,97,121,101,114,105,110,103,95,105,95,52,50,0);
          let mbbanner9 = String.fromCharCode(102,114,101,113,98,97,114,107,95,108,95,55,53,0);
         greenI += parseFloat(`${k_lockO.size}`);
         iconviewergifp = `${mbbanner9.length ^ iconviewergifp.length}`;
         mbbanner9 += `${iconviewergifp.length}`;
      }
          let iconbackwhited = 1;
         k_lockO = new Map([[`${iconbackwhited}`, parseInt(`${greenI}`)]]);
      while (pressurem.get(`${greenI}`) != null) {
          let loadingspinnerJ: Array<any> = [707, 453];
          let predictionloss4: Map<any, any> = new Map([[String.fromCharCode(99,95,56,48,95,115,116,114,102,116,105,109,101,0),398], [String.fromCharCode(114,101,97,100,102,117,108,108,95,114,95,49,53,0),736]]);
         greenI /= Math.max(5, parseFloat(`${predictionloss4.size}`));
         loadingspinnerJ.push(loadingspinnerJ.length);
         predictionloss4.set(`${loadingspinnerJ.length}`, loadingspinnerJ.length);
         break;
      }
         k_lockO = new Map([[`${pressurem.size}`, parseInt(`${greenI}`)]]);
         k_lockO.set(`${greenI}`, parseInt(`${greenI}`));
          let reddownarrowh = 0.0;
          let playercommonl = String.fromCharCode(106,95,55,56,95,115,117,98,109,118,0);
          let flagb = 2.0;
         greenI *= (parseFloat(`${String.fromCharCode(66,0) == playercommonl ? playercommonl.length : pressurem.size}`));
         reddownarrowh -= 2;
         flagb += parseFloat(`${parseInt(`${reddownarrowh}`) - parseInt(`${flagb}`)}`);
      if ((parseFloat(`${pressurem.size}`) * greenI) > 5.19 && (1 * pressurem.size) > 4) {
          let helperW = true;
          let network_: Map<any, any> = new Map([[String.fromCharCode(113,95,49,51,95,98,114,97,110,100,115,0),281], [String.fromCharCode(98,105,116,114,101,97,100,101,114,95,107,95,55,54,0),617], [String.fromCharCode(98,108,111,99,107,100,99,95,116,95,49,52,0),197]]);
         greenI /= Math.max(parseFloat(`${2}`), 1);
         helperW = !helperW;
         network_.set(`${helperW}`, network_.size);
      }
         pressurem.set(`${greenI}`, 3 << (Math.min(2, Math.abs(parseInt(`${greenI}`)))));
      while ((4.98 / (Math.max(5, greenI))) == 3.72) {
          let libbuffer9 = false;
          let activeq: Array<any> = [133, 708, 798];
          let playlisto = false;
          let libavdevice3 = false;
          let attributedstringg: Map<any, any> = new Map([[String.fromCharCode(116,117,110,110,101,108,95,109,95,52,48,0),266], [String.fromCharCode(116,111,110,101,109,97,112,95,100,95,50,52,0),300]]);
         greenI /= Math.max(parseFloat(`${1}`), 5);
         libbuffer9 = (54 == (activeq.length ^ (playlisto ? 54 : activeq.length)));
         playlisto = 56 >= activeq.length;
         libavdevice3 = !playlisto && activeq.length >= 45;
         attributedstringg.set(`${libbuffer9}`, (activeq.length / (Math.max(8, (libbuffer9 ? 4 : 1)))));
         break;
      }
      fastforwardW = 20.14 == greenI;
      break;
   }
      becomeu += `${eactZ.length}`;
   if (parseInt(`${matchdetailbg0}`) <= eyeopenb.length) {
      matchdetailbg0 -= parseFloat(`${1}`);
   }
   while (matchdetailbg0 < 5.90) {
       let reactnavigationj: Array<any> = [String.fromCharCode(99,95,50,49,95,116,101,109,112,111,114,97,108,0), String.fromCharCode(103,95,56,50,95,99,97,110,118,97,115,0)];
       let shrinko = 4;
       let langkeyO: Map<any, any> = new Map([[String.fromCharCode(115,117,109,102,95,111,95,56,48,0),691], [String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,114,95,54,48,0),731], [String.fromCharCode(99,111,110,110,101,99,116,105,111,110,95,110,95,53,48,0),55]]);
       let notificationgrayT = String.fromCharCode(120,95,49,57,95,99,111,109,112,111,115,105,116,101,0);
       let settingsh = 2.0;
      let favoriteB = 7186002.0 <= settingsh;
      do {
          let temperatureY = false;
         settingsh -= 1;
         temperatureY = !temperatureY;
         if (favoriteB) {
            break;
         }
      } while (((1.95 + settingsh) <= 1.76 && (2 % (Math.max(2, shrinko))) <= 2) && favoriteB);
         notificationgrayT += `${notificationgrayT.length ^ 3}`;
      let dragA = 9319982 <= shrinko;
      do {
         shrinko *= parseInt(`${settingsh}`);
         if (dragA) {
            break;
         }
      } while ((shrinko <= 5) && dragA);
      if ((settingsh + 2.29) == 4.53) {
         notificationgrayT += "2";
      }
      for (let e = 0; e < 2; e++) {
         notificationgrayT += `${notificationgrayT.length + 1}`;
      }
      if (2 == (shrinko * 1)) {
         settingsh += notificationgrayT.length;
      }
      if (4 == (notificationgrayT.length | langkeyO.size)) {
         langkeyO = new Map([[`${langkeyO.size}`, 3 & langkeyO.size]]);
      }
      for (let v = 0; v < 3; v++) {
         notificationgrayT = `${langkeyO.size | 1}`;
      }
         shrinko += shrinko % (Math.max(notificationgrayT.length, 3));
         notificationgrayT = "3";
         shrinko %= Math.max(1, 1 * reactnavigationj.length);
      if (3 == (shrinko ^ 3)) {
         reactnavigationj.push(shrinko << (Math.min(Math.abs(langkeyO.size), 1)));
      }
      let liveshareW = String.fromCharCode(54,54,55,54,111,0) == notificationgrayT;
      do {
          let reddownarrow4 = 2;
          let cornerkickq = 5.0;
          let iconarrowrightblack0 = String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,122,95,50,57,0);
          let iconcalendarq: Array<any> = [294, 239];
          let redscoreballI = String.fromCharCode(120,95,56,53,95,99,115,114,105,100,0);
         notificationgrayT = `${reactnavigationj.length % (Math.max(6, reddownarrow4))}`;
         reddownarrow4 *= 1 ^ iconcalendarq.length;
         cornerkickq += parseInt(`${cornerkickq}`) % (Math.max(iconarrowrightblack0.length, 2));
         iconarrowrightblack0 += "3";
         iconcalendarq = [(redscoreballI == String.fromCharCode(108,0) ? iconcalendarq.length : redscoreballI.length)];
         if (liveshareW) {
            break;
         }
      } while ((langkeyO.size > 5) && liveshareW);
      if (langkeyO.get(`${shrinko}`) != null) {
         langkeyO = new Map([[`${langkeyO.size}`, reactnavigationj.length]]);
      }
       let valuesK = String.fromCharCode(97,115,99,98,110,95,52,95,51,49,0);
       let usernamec = String.fromCharCode(100,95,53,51,95,101,120,112,105,114,101,100,0);
      matchdetailbg0 -= parseFloat(`${3 >> (Math.min(2, notificationgrayT.length))}`);
      break;
   }
   let toponB = strings6 >= 7753367;
   do {
       let floaterE: Array<any> = [816, 684];
       let dependencies_ = 1;
       let gestureN = 3;
       let leaguedetailsbgC = 1.0;
      if (leaguedetailsbgC > 2.61) {
          let iconclosewhitebgm = 5;
          let iconarrowrightorangeY = false;
          let formG = String.fromCharCode(109,95,56,49,95,100,111,119,110,109,105,120,0);
         leaguedetailsbgC /= Math.max(formG.length, 3);
         iconclosewhitebgm *= 1 + iconclosewhitebgm;
         iconarrowrightorangeY = !iconarrowrightorangeY;
         formG += `${1 + iconclosewhitebgm}`;
      }
         floaterE = [gestureN];
         floaterE = [1];
       let signinupr = 5.0;
       let combinedB = 3.0;
          let resendC = 3;
         dependencies_ &= parseInt(`${combinedB}`) << (Math.min(4, Math.abs(1)));
         resendC += 2 / (Math.max(7, resendC));
         dependencies_ /= Math.max(2 % (Math.max(8, floaterE.length)), 1);
         floaterE = [dependencies_ + parseInt(`${combinedB}`)];
          let completej = 4.0;
          let latnq = 5.0;
          let hovers = 1;
         gestureN -= gestureN / 1;
         completej /= Math.max(4, parseFloat(`${1}`));
         latnq *= parseFloat(`${parseInt(`${completej}`)}`);
         hovers >>= Math.min(Math.abs(3 - parseInt(`${latnq}`)), 2);
         leaguedetailsbgC -= gestureN;
      if (leaguedetailsbgC <= signinupr) {
          let libreanimatedh = String.fromCharCode(109,111,118,101,95,52,95,49,48,0);
          let interstitial8 = 1;
          let activitye = String.fromCharCode(116,114,105,97,110,103,117,108,97,114,95,112,95,51,49,0);
          let icon8 = 4.0;
         leaguedetailsbgC *= 2 | dependencies_;
         libreanimatedh += `${libreanimatedh.length}`;
         interstitial8 /= Math.max(1, interstitial8 & parseInt(`${icon8}`));
         activitye = `${(activitye == String.fromCharCode(71,0) ? activitye.length : interstitial8)}`;
         icon8 *= parseFloat(`${1 - activitye.length}`);
      }
         combinedB *= parseFloat(`${gestureN % (Math.max(8, dependencies_))}`);
      if ((dependencies_ + 3) > 4 && (dependencies_ + gestureN) > 3) {
          let libmapbufferjniA: Array<any> = [333, 690, 240];
          let eventu = String.fromCharCode(118,97,100,100,113,95,112,95,49,54,0);
         dependencies_ *= parseInt(`${signinupr}`) ^ 1;
         libmapbufferjniA = [3];
         eventu += `${(eventu == String.fromCharCode(109,0) ? eventu.length : libmapbufferjniA.length)}`;
      }
      strings6 >>= Math.min(2, Math.abs(moduleE));
      if (toponB) {
         break;
      }
   } while (((strings6 << (Math.min(Math.abs(1), 3))) <= 5 || strings6 <= 1) && toponB);
      eactZ = `${((fastforwardW ? 1 : 5) & parseInt(`${matchdetailbg0}`))}`;
       let reducer7 = 5.0;
      let yellowtored4 = reducer7 <= 6818046.0;
      do {
         reducer7 -= parseInt(`${reducer7}`) + 1;
         if (yellowtored4) {
            break;
         }
      } while ((3.14 >= reducer7) && yellowtored4);
         reducer7 += 1 << (Math.min(Math.abs(parseInt(`${reducer7}`)), 2));
      while ((5.17 / (Math.max(9, reducer7))) < 2.86 || (reducer7 - 5.17) < 4.0) {
         reducer7 -= 3;
         break;
      }
      strings6 >>= Math.min(parseInt(`${Math.abs(((fastforwardW ? 1 : 1) % (Math.max(3, 3))))}`), 5);
      moduleE %= Math.max(2, parseInt(`${matchdetailbg0}`) << (Math.min(1, Math.abs(1))));
      matchdetailbg0 *= parseFloat(`${2}`);
       let langp = 0;
          let launchh = 4;
         langp <<= Math.min(3, Math.abs(langp - 1));
         launchh |= 2;
         langp &= langp;
      while ((4 ^ langp) >= 2 && 2 >= (4 ^ langp)) {
         langp %= Math.max(1, 3);
         break;
      }
      settingI = [2 % (Math.max(strings6, 1))];
   let video1 = 7863602 >= settingI.length;
   do {
      settingI.push(strings6 / (Math.max(parseInt(`${matchdetailbg0}`), 4)));
      if (video1) {
         break;
      }
   } while ((1 <= (settingI.length ^ 2) || 1 <= (2 ^ settingI.length)) && video1);
   for (let b = 0; b < 3; b++) {
       let loadingspinnerh = true;
      while (loadingspinnerh) {
          let networkd = 3;
          let downF: Map<any, any> = new Map([[String.fromCharCode(112,95,51,50,95,115,121,110,116,104,0),535], [String.fromCharCode(112,114,111,114,101,115,100,101,99,95,57,95,48,0),737]]);
         loadingspinnerh = loadingspinnerh && 91 > networkd;
         networkd |= downF.size;
         downF.set(`${downF.size}`, 1);
         break;
      }
          let cornerE: Array<any> = [701, 423, 558];
          let mergerA = 5;
          let countryx: Array<any> = [946, 959, 24];
         loadingspinnerh = cornerE.length >= mergerA;
         cornerE.push(countryx.length);
         mergerA *= countryx.length;
          let hongkongI: Array<any> = [861, 917, 426];
          let logoutH = String.fromCharCode(100,97,118,115,95,54,95,54,0);
         loadingspinnerh = (72 >= (logoutH.length - (!loadingspinnerh ? logoutH.length : 72)));
         hongkongI = [hongkongI.length];
      matchdetailbg0 *= parseFloat(`${3 + moduleE}`);
   }
   let dragcloseS = eyeopenb.length <= 7146389;
   do {
      eyeopenb.push((parseInt(`${matchdetailbg0}`) - (buildJ ? 4 : 2)));
      if (dragcloseS) {
         break;
      }
   } while (dragcloseS && (3 < eyeopenb.length));
   let containerb = 9606817 <= eyeopenb.length;
   do {
       let eyeclose8 = String.fromCharCode(98,121,112,97,115,115,105,110,103,95,106,95,57,0);
       let defaultroombgT: Array<any> = [0, 604, 172];
       let progressJ: Array<any> = [665, 353];
      if (2 > defaultroombgT.length) {
         defaultroombgT.push(defaultroombgT.length >> (Math.min(eyeclose8.length, 5)));
      }
          let liveshareT = false;
          let redcirclebgQ = String.fromCharCode(99,95,52,56,95,109,97,121,0);
          let awayicono = 4.0;
         progressJ = [3];
         liveshareT = 79.81 > awayicono;
         redcirclebgQ += `${redcirclebgQ.length >> (Math.min(2, Math.abs(parseInt(`${awayicono}`))))}`;
         eyeclose8 = `${(eyeclose8 == String.fromCharCode(71,0) ? progressJ.length : eyeclose8.length)}`;
      let libjsijniprofilers = defaultroombgT.length <= 7151251;
      do {
         defaultroombgT = [3];
         if (libjsijniprofilers) {
            break;
         }
      } while (((4 + progressJ.length) == 3 || 4 == (progressJ.length + 4)) && libjsijniprofilers);
      if ((defaultroombgT.length % (Math.max(progressJ.length, 6))) <= 3 || 3 <= (defaultroombgT.length % 3)) {
         defaultroombgT.push(progressJ.length);
      }
         progressJ = [1];
         defaultroombgT = [progressJ.length & 3];
         progressJ = [defaultroombgT.length];
      if (1 == defaultroombgT.length) {
          let iconorientation4 = 4.0;
          let private_bg = 0;
          let mbnativez: Array<any> = [954, 351, 709];
         defaultroombgT.push(1);
         iconorientation4 /= Math.max(5, parseFloat(`${private_bg + parseInt(`${iconorientation4}`)}`));
         private_bg <<= Math.min(4, Math.abs(1));
         mbnativez = [mbnativez.length / 1];
      }
      eyeopenb.push(eyeclose8.length << (Math.min(5, settingI.length)));
      if (containerb) {
         break;
      }
   } while (containerb && (!buildJ));
   if (moduleE > eactZ.length) {
      eactZ += "3 + strings6";
   }
   let awayw = eyeopenb.length <= 7496416;
   do {
       let chatbotphotoP: Array<any> = [509, 732, 12];
       let largebrightnessc = 1.0;
       let penaltye = String.fromCharCode(99,104,112,108,95,120,95,51,48,0);
      for (let y = 0; y < 1; y++) {
         penaltye += `${chatbotphotoP.length % 3}`;
      }
      for (let f = 0; f < 1; f++) {
         largebrightnessc /= Math.max(parseInt(`${largebrightnessc}`) % (Math.max(chatbotphotoP.length, 6)), 5);
      }
          let pangleG = 2;
          let darkS = true;
          let smallorangemano = String.fromCharCode(121,95,52,51,95,112,105,110,107,0);
         penaltye += `${parseInt(`${largebrightnessc}`)}`;
         pangleG >>= Math.min(Math.abs(1 ^ smallorangemano.length), 5);
         darkS = !darkS;
         smallorangemano = `${((darkS ? 1 : 3))}`;
         largebrightnessc /= Math.max(2, (penaltye == String.fromCharCode(49,0) ? parseInt(`${largebrightnessc}`) : penaltye.length));
       let sharemodalO = 5.0;
       let matchactivey = 4.0;
          let pauseK = 2.0;
          let sharedk = String.fromCharCode(104,113,97,100,115,112,95,99,95,55,50,0);
          let selectD: Map<any, any> = new Map([[String.fromCharCode(100,114,105,118,101,110,95,109,95,51,49,0),false ], [String.fromCharCode(105,95,53,57,95,115,117,99,104,0),true ]]);
         penaltye += `${(String.fromCharCode(122,0) == sharedk ? parseInt(`${sharemodalO}`) : sharedk.length)}`;
         pauseK += parseFloat(`${parseInt(`${pauseK}`) >> (Math.min(Math.abs(selectD.size), 3))}`);
         selectD.set(`${pauseK}`, selectD.size << (Math.min(Math.abs(1), 1)));
      for (let c = 0; c < 3; c++) {
         penaltye = `${parseInt(`${largebrightnessc}`) % (Math.max(3, parseInt(`${matchactivey}`)))}`;
      }
          let analyticsK: Map<any, any> = new Map([[String.fromCharCode(117,95,57,55,95,100,101,97,108,108,111,99,97,116,105,111,110,0),95], [String.fromCharCode(114,95,50,57,95,97,116,116,114,98,117,116,101,0),674]]);
          let history0 = 5.0;
         matchactivey /= Math.max(parseFloat(`${1}`), 4);
         analyticsK = new Map([[`${analyticsK.size}`, parseInt(`${history0}`)]]);
         history0 *= 1 * parseInt(`${history0}`);
       let eactA: Map<any, any> = new Map([[String.fromCharCode(108,95,49,55,95,109,112,101,103,97,117,100,105,111,0),149], [String.fromCharCode(102,108,111,97,116,95,121,95,51,51,0),298], [String.fromCharCode(118,95,50,51,95,105,110,102,111,114,109,97,116,105,118,101,0),620]]);
       let combinedX: Map<any, any> = new Map([[String.fromCharCode(108,95,56,57,95,118,114,108,101,0),false ], [String.fromCharCode(120,95,55,49,95,115,117,115,112,101,110,100,0),false ], [String.fromCharCode(98,95,55,95,98,121,116,101,108,101,110,0),true ]]);
      eyeopenb.push(3);
      if (awayw) {
         break;
      }
   } while (awayw && (3 < (2 ^ eyeopenb.length) || 4 < (2 ^ eyeopenb.length)));
   let awayP = buildJ ? !buildJ : buildJ;
   do {
       let targetU = String.fromCharCode(100,95,51,51,95,116,121,111,101,0);
      for (let j = 0; j < 2; j++) {
         targetU = `${targetU.length * targetU.length}`;
      }
      for (let o = 0; o < 1; o++) {
         targetU += `${1 << (Math.min(5, targetU.length))}`;
      }
      for (let r = 0; r < 3; r++) {
          let loadingx = 3.0;
          let handler8 = true;
          let halffieldimagea = String.fromCharCode(112,114,101,102,105,120,101,115,95,116,95,50,53,0);
          let searchbarH = false;
          let iconsettinga = 1;
         targetU += `${targetU.length << (Math.min(4, Math.abs(iconsettinga)))}`;
         loadingx *= halffieldimagea.length;
         handler8 = !handler8;
         halffieldimagea += `${((searchbarH ? 3 : 2))}`;
         iconsettinga %= Math.max(4, (halffieldimagea.length << (Math.min(4, Math.abs((searchbarH ? 1 : 1))))));
      }
      buildJ = buildJ && annerg > 6.100;
      if (awayP) {
         break;
      }
   } while (awayP && (eyeopenb.length >= 4 || 2 >= (eyeopenb.length >> (Math.min(Math.abs(4), 4)))));
       let iconarrowrightwhiteF = String.fromCharCode(115,99,97,108,97,114,115,95,49,95,54,55,0);
         iconarrowrightwhiteF = `${(iconarrowrightwhiteF == String.fromCharCode(114,0) ? iconarrowrightwhiteF.length : iconarrowrightwhiteF.length)}`;
       let promotion9 = String.fromCharCode(114,95,49,56,95,115,101,110,99,0);
      while (iconarrowrightwhiteF == promotion9) {
         promotion9 += `${iconarrowrightwhiteF.length - 2}`;
         break;
      }
      buildJ = becomeu.length <= parseInt(`${annerg}`);
   if (fastforwardW) {
       let trophyp = 2.0;
       let orientation2: Array<any> = [282, 141, 418];
         orientation2 = [2];
      let mapping6 = 5979691 <= orientation2.length;
      do {
         orientation2.push(parseInt(`${trophyp}`));
         if (mapping6) {
            break;
         }
      } while (mapping6 && (orientation2.includes(trophyp)));
      for (let f = 0; f < 3; f++) {
         orientation2 = [orientation2.length / (Math.max(3, 7))];
      }
         orientation2.push(2 | orientation2.length);
         orientation2.push(parseInt(`${trophyp}`) * 2);
      while (orientation2.length >= parseInt(`${trophyp}`)) {
          let chinaN: Map<any, any> = new Map([[String.fromCharCode(113,117,101,114,121,95,99,95,49,51,0),504], [String.fromCharCode(102,95,50,50,95,102,105,110,0),661], [String.fromCharCode(122,95,55,54,95,118,115,110,112,114,105,110,116,102,0),62]]);
         trophyp -= parseInt(`${trophyp}`) | 3;
         chinaN.set(`${chinaN.size}`, chinaN.size);
         break;
      }
      subtextg += moduleE;
   }
      moduleE ^= becomeu.length / (Math.max(2, 10));
      eactZ += `${parseInt(`${matchdetailbg0}`)}`;

    setShowSheet(false);
  }, []);

  const onConfirmEpisodeSelection = (selectedEpisodeId: number) => {
    setCurrentEpisode(selectedEpisodeId);
    currentTimeRef.current = 0; 
    handleModalClose();
  };

  const onDownloadVod = (nid: number) => {
    if (adultMode) {
      dispatch(addVideoToDownloadThunk(vod, 0, nid, adultMode));
    } else {
      if (vodDetails) {
        dispatch(addVideoToDownloadThunk(vodDetails, currentSourceId, nid, adultMode));
      }
    }
  };

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  

  const [vodUri, setVodUri] = useState("");

  const debounceSetVodUri = useCallback(
    debounce((uri) => setVodUri(uri), 100),
    []
  );

  const setMinimumOfMaximumEpisode = () => {
       let update_jm = String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,104,95,54,57,0);
    let phoneshare0 = String.fromCharCode(103,95,51,54,95,115,116,97,110,100,97,114,100,0);
    let sinaI = 3.0;
    let imagemanager6 = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,105,111,110,95,57,95,51,0);
    let scoret = 2.0;
    let producta: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,100,101,99,95,122,95,49,48,0),231], [String.fromCharCode(116,95,51,55,95,108,105,118,101,115,116,114,101,97,109,0),973], [String.fromCharCode(105,95,49,48,95,97,117,116,111,112,108,97,121,105,110,103,0),109]]);
    let imageactionlive9 = true;
    let thailandB = String.fromCharCode(102,111,117,114,116,104,95,49,95,56,48,0);
    let iconbellW: Map<any, any> = new Map([[String.fromCharCode(114,95,54,48,95,97,109,116,0),931], [String.fromCharCode(99,111,109,109,101,110,116,115,95,120,95,52,0),331]]);
    let yellowvideoliveG = String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,113,95,52,51,0);
    let iconfeedbackH = false;
    let delegate_qA = true;
    let basketballh = String.fromCharCode(99,95,50,95,115,104,97,100,111,119,0);
       let owngoala = String.fromCharCode(116,114,97,110,115,112,95,99,95,54,56,0);
       let selectionw = 0;
       let basketballicon3 = 3.0;
         basketballicon3 -= (String.fromCharCode(48,0) == owngoala ? owngoala.length : selectionw);
          let rewindH = 5.0;
         selectionw |= 1 - selectionw;
         rewindH -= parseFloat(`${parseInt(`${rewindH}`) * parseInt(`${rewindH}`)}`);
         selectionw |= 2 << (Math.min(2, owngoala.length));
          let awayplayerr = 2.0;
          let successn = 3.0;
          let notificationfillemptyT: Map<any, any> = new Map([[String.fromCharCode(98,95,53,57,95,97,97,99,101,110,99,0),79], [String.fromCharCode(115,113,108,105,116,101,114,98,117,95,122,95,56,57,0),10]]);
         selectionw -= 2;
         awayplayerr -= parseInt(`${successn}`);
         successn *= 2 | parseInt(`${awayplayerr}`);
         notificationfillemptyT.set(`${awayplayerr}`, 1);
      let networkJ = String.fromCharCode(113,57,51,111,110,0) == owngoala;
      do {
          let penaltymatchiconf = 3;
          let inouttargetyellowI = String.fromCharCode(104,101,108,112,95,112,95,53,0);
          let statsnomoredataV = String.fromCharCode(114,97,100,105,120,95,104,95,57,53,0);
          let libnmsx = 2;
         owngoala = `${owngoala.length}`;
         penaltymatchiconf += 1 << (Math.min(1, inouttargetyellowI.length));
         inouttargetyellowI += `${inouttargetyellowI.length}`;
         statsnomoredataV += `${libnmsx & inouttargetyellowI.length}`;
         libnmsx /= Math.max(statsnomoredataV.length, 3);
         if (networkJ) {
            break;
         }
      } while ((owngoala.length >= basketballicon3) && networkJ);
         selectionw *= selectionw;
         selectionw += (owngoala == String.fromCharCode(77,0) ? owngoala.length : selectionw);
      for (let k = 0; k < 3; k++) {
         selectionw *= owngoala.length;
      }
         owngoala = `${selectionw}`;
      sinaI += 3 % (Math.max(7, imagemanager6.length));
   let moduleq = 9090850.0 <= sinaI;
   do {
      sinaI /= Math.max(thailandB.length << (Math.min(1, imagemanager6.length)), 4);
      if (moduleq) {
         break;
      }
   } while (moduleq && (5 <= (yellowvideoliveG.length ^ 5) || (sinaI / 1.66) <= 2.68));
      yellowvideoliveG += `${yellowvideoliveG.length}`;
   for (let m = 0; m < 3; m++) {
       let areaY = 5;
       let submitt = 1;
       let greenl = 0;
          let profilepicD: Array<any> = [146, 46, 639];
          let catagoryX = 1.0;
          let yellowredcardr = 2.0;
         areaY &= submitt;
         profilepicD.push(parseInt(`${yellowredcardr}`));
         catagoryX *= parseInt(`${yellowredcardr}`);
      while (3 >= (2 * areaY) || 2 >= (areaY * greenl)) {
         areaY &= areaY & 2;
         break;
      }
      if ((greenl ^ 5) < 5 && 5 < (greenl ^ submitt)) {
         greenl %= Math.max(4, 3 * submitt);
      }
         greenl /= Math.max(1, submitt);
         submitt &= 1;
          let roomC = 4.0;
         areaY ^= submitt ^ greenl;
         roomC -= parseFloat(`${parseInt(`${roomC}`)}`);
          let showv = true;
         greenl /= Math.max(5, areaY * 2);
         showv = !showv;
      if (5 >= submitt) {
         submitt /= Math.max(1, 1);
      }
         submitt &= submitt | greenl;
      producta.set(phoneshare0, 3 | phoneshare0.length);
   }
   let dplusX = 5599274.0 >= scoret;
   do {
       let handlerp = String.fromCharCode(99,114,111,115,115,102,97,100,101,95,53,95,49,48,48,0);
       let loadingspinner0 = 1.0;
       let cancelW = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,95,114,95,57,48,0);
       let backicon0 = String.fromCharCode(116,120,102,109,95,57,95,54,53,0);
      while ((handlerp.length | 1) > 4) {
         loadingspinner0 *= parseFloat(`${parseInt(`${loadingspinner0}`)}`);
         break;
      }
          let blackl = 4.0;
          let commentx = 2.0;
          let baselineh = String.fromCharCode(113,95,57,49,95,118,112,108,97,121,101,114,0);
         cancelW = `${backicon0.length + parseInt(`${commentx}`)}`;
         blackl += parseInt(`${blackl}`);
         commentx /= Math.max(parseInt(`${blackl}`), 1);
         baselineh = `${baselineh.length * parseInt(`${blackl}`)}`;
      while (cancelW.startsWith(`${backicon0.length}`)) {
          let suggestionT = 5.0;
         cancelW = `${handlerp.length & 3}`;
         suggestionT += parseInt(`${suggestionT}`) % 2;
         break;
      }
      for (let c = 0; c < 1; c++) {
         handlerp += `${parseInt(`${loadingspinner0}`)}`;
      }
      if (parseFloat(`${backicon0.length}`) >= loadingspinner0) {
         backicon0 += `${3 - cancelW.length}`;
      }
       let controlsc = String.fromCharCode(98,95,54,49,95,115,97,110,100,98,111,120,0);
      for (let u = 0; u < 1; u++) {
          let questicona = String.fromCharCode(101,95,54,49,95,98,97,99,107,105,110,103,0);
         loadingspinner0 /= Math.max(2, parseFloat(`${questicona.length % (Math.max(2, controlsc.length))}`));
      }
         loadingspinner0 *= parseFloat(`${3}`);
      while (controlsc == String.fromCharCode(74,0)) {
         cancelW = `${(controlsc == String.fromCharCode(115,0) ? controlsc.length : parseInt(`${loadingspinner0}`))}`;
         break;
      }
      while (5 == (controlsc.length >> (Math.min(Math.abs(5), 3)))) {
         controlsc = `${2 << (Math.min(2, handlerp.length))}`;
         break;
      }
       let down5 = false;
      for (let x = 0; x < 3; x++) {
         cancelW = `${((down5 ? 1 : 2))}`;
      }
      scoret += (parseFloat(`${update_jm == String.fromCharCode(104,0) ? update_jm.length : (imageactionlive9 ? 5 : 2)}`));
      if (dplusX) {
         break;
      }
   } while (dplusX && (4.58 >= (2.94 * scoret)));

    

      update_jm = `${yellowvideoliveG.length}`;
   while (imageactionlive9 || 4 < yellowvideoliveG.length) {
       let bridgeo: Map<any, any> = new Map([[String.fromCharCode(105,95,54,52,95,102,116,97,98,0),252], [String.fromCharCode(97,95,54,55,95,115,108,105,99,101,115,0),144], [String.fromCharCode(120,95,50,95,102,102,118,108,0),57]]);
       let expanda = false;
       let basketballtrophyC: Map<any, any> = new Map([[String.fromCharCode(118,95,49,57,95,116,121,112,105,110,103,0),347], [String.fromCharCode(116,104,114,101,97,100,105,110,103,95,105,95,52,52,0),534], [String.fromCharCode(113,115,118,118,112,112,95,113,95,54,51,0),664]]);
         basketballtrophyC = new Map([[`${bridgeo.size}`, ((expanda ? 3 : 5) | bridgeo.size)]]);
      let headerM = 5803010 <= basketballtrophyC.size;
      do {
         basketballtrophyC.set(`${expanda}`, bridgeo.size * 3);
         if (headerM) {
            break;
         }
      } while ((expanda) && headerM);
       let button2: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,105,110,103,95,120,95,56,52,0),String.fromCharCode(99,117,100,97,115,99,97,108,101,95,102,95,49,53,0)], [String.fromCharCode(98,95,54,53,95,101,109,98,101,100,100,105,110,103,0),String.fromCharCode(103,95,57,49,95,117,110,112,97,99,107,101,100,0)], [String.fromCharCode(114,111,116,97,116,105,110,103,95,102,95,54,49,0),String.fromCharCode(103,95,54,57,95,100,98,115,116,97,116,0)]]);
      let reactnativeultimatelistviewm = expanda ? !expanda : expanda;
      do {
         expanda = 34 == bridgeo.size || basketballtrophyC.size == 34;
         if (reactnativeultimatelistviewm) {
            break;
         }
      } while (reactnativeultimatelistviewm && (!expanda || (basketballtrophyC.size / 1) >= 2));
       let footballfiledlayoutf = true;
      imageactionlive9 = phoneshare0.length > 11;
      break;
   }
      iconbellW.set(`${imagemanager6}`, producta.size / 1);
   if ((scoret * 1.45) <= 1.15 || (sinaI * scoret) <= 1.45) {
       let imagenomoredataz: Map<any, any> = new Map([[String.fromCharCode(109,95,52,50,95,114,101,109,97,112,112,101,100,0),439], [String.fromCharCode(118,95,52,53,95,104,105,103,104,108,105,103,104,116,101,100,0),990], [String.fromCharCode(107,95,51,49,95,107,105,110,100,115,0),106]]);
       let forwardE: Array<any> = [String.fromCharCode(110,95,49,56,95,100,105,115,112,108,97,121,0), String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,114,95,50,52,0), String.fromCharCode(101,114,114,111,114,95,112,95,51,56,0)];
       let vipsportl = 3.0;
       let iconplayb = 3.0;
         forwardE = [parseInt(`${iconplayb}`) % (Math.max(imagenomoredataz.size, 8))];
      if ((parseInt(`${vipsportl}`) + forwardE.length) > 2 || (vipsportl + parseFloat(`${forwardE.length}`)) > 5.52) {
         forwardE.push(1 | parseInt(`${vipsportl}`));
      }
         forwardE = [forwardE.length];
      while (imagenomoredataz.size < 4) {
         imagenomoredataz = new Map([[`${iconplayb}`, parseInt(`${vipsportl}`) | parseInt(`${iconplayb}`)]]);
         break;
      }
          let middlebrightnessO = 0.0;
         forwardE = [parseInt(`${middlebrightnessO}`)];
          let textV: Array<any> = [559, 614];
         vipsportl += parseFloat(`${1 << (Math.min(1, forwardE.length))}`);
         textV.push(3 ^ textV.length);
       let whatsappe: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,97,100,100,114,95,110,95,57,51,0),581], [String.fromCharCode(115,117,114,102,97,99,101,95,112,95,52,54,0),638], [String.fromCharCode(107,95,51,52,95,104,97,110,100,115,0),590]]);
       let template_1nS: Map<any, any> = new Map([[String.fromCharCode(106,95,54,52,95,102,105,101,108,0),String.fromCharCode(105,95,49,52,95,98,105,111,109,101,116,114,121,0)], [String.fromCharCode(121,95,57,50,95,97,110,97,110,100,97,110,0),String.fromCharCode(115,119,105,112,101,100,95,117,95,56,51,0)], [String.fromCharCode(106,95,53,56,95,99,97,110,118,97,115,0),String.fromCharCode(97,115,115,105,103,110,95,100,95,49,56,0)]]);
      while (1 >= (imagenomoredataz.size / (Math.max(template_1nS.size, 7)))) {
         template_1nS = new Map([[`${template_1nS.size}`, parseInt(`${iconplayb}`)]]);
         break;
      }
      if (!forwardE.includes(iconplayb)) {
         iconplayb -= parseFloat(`${2}`);
      }
          let placeholdera: Array<any> = [String.fromCharCode(100,95,57,50,95,99,111,109,112,97,114,97,98,108,101,0), String.fromCharCode(111,95,55,57,95,103,101,116,99,0), String.fromCharCode(98,117,116,116,101,114,102,108,121,95,121,95,53,48,0)];
          let humiditye = 4.0;
          let styleW: Array<any> = [762, 172, 578];
         forwardE = [1 & placeholdera.length];
         placeholdera = [parseInt(`${humiditye}`) & styleW.length];
         humiditye /= Math.max(parseFloat(`${parseInt(`${humiditye}`) / 1}`), 1);
         styleW = [2];
      if (imagenomoredataz.get(`${forwardE.length}`) != null) {
          let forwardv: Map<any, any> = new Map([[String.fromCharCode(102,95,57,95,116,104,114,101,115,104,111,108,100,101,100,0),String.fromCharCode(115,95,54,49,95,114,101,112,108,97,121,0)], [String.fromCharCode(105,110,102,101,114,101,100,95,55,95,54,54,0),String.fromCharCode(115,95,57,95,105,109,109,101,100,105,97,116,101,0)], [String.fromCharCode(119,101,105,103,104,116,112,95,115,95,57,53,0),String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,95,57,95,54,50,0)]]);
         forwardE.push(whatsappe.size);
         forwardv.set(`${forwardv.size}`, forwardv.size / 3);
      }
      for (let p = 0; p < 3; p++) {
          let latnz = 4;
         forwardE = [latnz << (Math.min(Math.abs(2), 4))];
      }
      sinaI += imagenomoredataz.size + 3;
   }
   if (!imagemanager6.includes(`${producta.size}`)) {
      producta.set(`${imageactionlive9}`, ((imageactionlive9 ? 4 : 1) & iconbellW.size));
   }
    

   let shareblackf = String.fromCharCode(119,97,51,0) == phoneshare0;
   do {
       let shrinkv: Array<any> = [String.fromCharCode(111,95,51,48,95,114,108,109,0), String.fromCharCode(109,95,55,50,95,108,111,99,107,109,103,114,0), String.fromCharCode(109,95,50,50,95,118,112,100,97,116,97,0)];
       let fastforwardS: Array<any> = [162, 422, 370];
       let anythinkW = String.fromCharCode(97,114,98,105,116,114,97,114,121,95,120,95,55,57,0);
       let libglog8 = String.fromCharCode(101,95,50,57,95,117,110,102,101,116,99,104,0);
       let homeloadingw = String.fromCharCode(116,108,115,95,51,95,52,0);
         libglog8 = `${libglog8.length}`;
      if ((shrinkv.length * 4) <= 5 || (shrinkv.length * 4) <= 2) {
         shrinkv = [2];
      }
      for (let k = 0; k < 1; k++) {
          let volumeQ = String.fromCharCode(112,95,50,56,95,112,114,105,111,114,0);
          let clubr = String.fromCharCode(115,99,114,111,108,108,101,114,95,105,95,51,48,0);
          let baiduadsH = 2.0;
          let nendE = 5;
         fastforwardS.push(libglog8.length ^ 2);
         volumeQ = `${volumeQ.length ^ nendE}`;
         clubr += "3";
         baiduadsH -= volumeQ.length;
         nendE <<= Math.min(Math.abs(parseInt(`${baiduadsH}`) % (Math.max(5, volumeQ.length))), 3);
      }
          let mbnativeadvancedQ: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,102,105,108,101,95,48,95,50,56,0),true ], [String.fromCharCode(109,95,55,53,95,105,110,116,101,114,97,99,116,0),false ]]);
          let area0 = String.fromCharCode(104,95,49,56,95,105,101,101,101,0);
          let heji8 = 1;
         anythinkW = `${anythinkW.length}`;
         mbnativeadvancedQ = new Map([[area0, area0.length << (Math.min(4, Math.abs(heji8)))]]);
         heji8 >>= Math.min(3, Math.abs(heji8));
         libglog8 = `${fastforwardS.length % (Math.max(4, anythinkW.length))}`;
      let downarrowF = shrinkv.length <= 7228752;
      do {
         shrinkv = [homeloadingw.length];
         if (downarrowF) {
            break;
         }
      } while (((fastforwardS.length / (Math.max(3, 1))) < 3 || (fastforwardS.length / (Math.max(3, 5))) < 1) && downarrowF);
         libglog8 += `${2 << (Math.min(3, shrinkv.length))}`;
         anythinkW = `${fastforwardS.length & libglog8.length}`;
      if (anythinkW != String.fromCharCode(71,0)) {
          let modeO = String.fromCharCode(99,111,114,110,101,114,115,95,119,95,51,50,0);
          let imagesu = true;
          let largebrightnessr: Array<any> = [435, 322, 992];
          let launcherm: Map<any, any> = new Map([[String.fromCharCode(100,95,55,55,95,112,112,107,104,0),String.fromCharCode(100,105,114,97,99,95,113,95,52,49,0)], [String.fromCharCode(119,95,51,56,95,105,110,102,117,114,97,0),String.fromCharCode(104,115,116,114,105,110,103,95,105,95,53,57,0)]]);
         homeloadingw = `${2 | libglog8.length}`;
         modeO = `${largebrightnessr.length}`;
         imagesu = largebrightnessr.length < launcherm.size;
         launcherm = new Map([[`${launcherm.size}`, ((imagesu ? 5 : 5) - 3)]]);
      }
      let scorepopsoundi = libglog8.length >= 6269073;
      do {
         libglog8 += "3";
         if (scorepopsoundi) {
            break;
         }
      } while ((1 < anythinkW.length) && scorepopsoundi);
       let descZ = String.fromCharCode(120,95,49,52,95,103,117,116,116,101,114,0);
      for (let n = 0; n < 3; n++) {
          let audiencef: Array<any> = [831, 808, 183];
          let submitd: Array<any> = [String.fromCharCode(97,120,105,115,95,103,95,53,54,0), String.fromCharCode(114,95,56,48,95,114,101,109,111,118,101,114,0)];
          let searchbarh = true;
         homeloadingw += `${3 << (Math.min(2, audiencef.length))}`;
         audiencef.push((submitd.length * (searchbarh ? 5 : 5)));
         submitd = [((searchbarh ? 3 : 2) - submitd.length)];
      }
      while (1 == (shrinkv.length % (Math.max(8, fastforwardS.length)))) {
         fastforwardS = [fastforwardS.length % 3];
         break;
      }
          let applicationr = 3.0;
         fastforwardS.push(homeloadingw.length);
         applicationr /= Math.max(1, parseInt(`${applicationr}`));
      while ((shrinkv.length / 5) >= 3) {
         fastforwardS.push(anythinkW.length % (Math.max(2, 10)));
         break;
      }
      phoneshare0 = `${anythinkW.length}`;
      if (shareblackf) {
         break;
      }
   } while (shareblackf && (update_jm.length == 3));
       let iconviewerx = 0;
       let sharex = String.fromCharCode(105,95,49,48,48,95,111,110,101,111,102,0);
      let reddownarrowe = 5603131 <= sharex.length;
      do {
         sharex = `${(sharex == String.fromCharCode(114,0) ? iconviewerx : sharex.length)}`;
         if (reddownarrowe) {
            break;
         }
      } while (reddownarrowe && (iconviewerx <= 2));
      let short_zw = sharex.length >= 8851657;
      do {
         sharex = `${(String.fromCharCode(111,0) == sharex ? sharex.length : iconviewerx)}`;
         if (short_zw) {
            break;
         }
      } while ((2 < (sharex.length % 4) && (sharex.length % 4) < 5) && short_zw);
      if ((5 + iconviewerx) <= 5 && (iconviewerx + sharex.length) <= 5) {
         sharex += `${iconviewerx}`;
      }
         iconviewerx %= Math.max(4, iconviewerx);
      while (sharex.includes(`${iconviewerx}`)) {
         sharex += `${sharex.length}`;
         break;
      }
      for (let w = 0; w < 3; w++) {
          let orangeh: Map<any, any> = new Map([[String.fromCharCode(111,95,56,56,95,117,115,114,99,0),541], [String.fromCharCode(121,95,53,53,95,116,111,110,101,115,0),622]]);
          let privatechatbgc = 2;
         sharex = "1";
         orangeh.set(`${privatechatbgc}`, 2);
         privatechatbgc -= privatechatbgc;
      }
      yellowvideoliveG = `${1 + iconviewerx}`;
      phoneshare0 = `${(phoneshare0 == String.fromCharCode(113,0) ? (imageactionlive9 ? 3 : 2) : phoneshare0.length)}`;
   for (let u = 0; u < 1; u++) {
      phoneshare0 += `${1 | parseInt(`${sinaI}`)}`;
   }
   while (thailandB.startsWith(`${imagemanager6.length}`)) {
       let notificationQ = String.fromCharCode(99,111,110,116,101,120,116,115,95,100,95,50,49,0);
       let informationg = String.fromCharCode(106,95,57,49,95,99,104,111,109,112,0);
       let iconcloseQ: Map<any, any> = new Map([[String.fromCharCode(109,101,97,115,117,114,101,95,48,95,54,54,0),228], [String.fromCharCode(117,109,105,100,95,55,95,49,48,0),854]]);
       let thailandb = String.fromCharCode(106,95,55,53,95,115,101,112,97,114,97,116,101,115,0);
      let weatherr = informationg.length <= 6361284;
      do {
         informationg = `${3 | informationg.length}`;
         if (weatherr) {
            break;
         }
      } while ((thailandb != informationg) && weatherr);
      for (let h = 0; h < 3; h++) {
         notificationQ += "2";
      }
      for (let k = 0; k < 3; k++) {
         notificationQ = `${thailandb.length & iconcloseQ.size}`;
      }
       let inouttargetyellow8 = String.fromCharCode(105,95,55,52,95,112,108,97,105,110,116,101,120,116,0);
      while ((informationg.length / 1) > 4 || (iconcloseQ.size / 1) > 2) {
         informationg += "2";
         break;
      }
       let untickT = 1;
       let shareblackh = 0;
      if (Array.from(iconcloseQ.keys()).includes(`${untickT}`)) {
          let regengL = String.fromCharCode(99,97,112,116,117,114,101,95,108,95,50,54,0);
          let sharemodalv = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,48,95,56,50,0);
         iconcloseQ = new Map([[`${untickT}`, untickT]]);
         regengL += `${sharemodalv.length | regengL.length}`;
         sharemodalv = `${regengL.length}`;
      }
      let analyticsl = 7442344 <= notificationQ.length;
      do {
         notificationQ += `${inouttargetyellow8.length}`;
         if (analyticsl) {
            break;
         }
      } while ((notificationQ.length <= inouttargetyellow8.length) && analyticsl);
      for (let j = 0; j < 3; j++) {
         iconcloseQ = new Map([[`${untickT}`, 3]]);
      }
      if (1 > (4 * informationg.length)) {
         informationg = `${notificationQ.length}`;
      }
          let holderM = 3.0;
          let assetsj = 4;
         untickT -= notificationQ.length % (Math.max(7, assetsj));
         holderM -= parseInt(`${holderM}`) * parseInt(`${holderM}`);
         assetsj *= 3 | parseInt(`${holderM}`);
         shareblackh -= notificationQ.length % 1;
      imagemanager6 += `${yellowvideoliveG.length & parseInt(`${sinaI}`)}`;
      break;
   }
    const maxEpisode = (foundSource?.url_count ?? 1) - 1;

   while (!yellowvideoliveG.includes(`${producta.size}`)) {
      yellowvideoliveG = `${2 % (Math.max(1, imagemanager6.length))}`;
      break;
   }
       let eighteenf = String.fromCharCode(114,97,119,101,110,99,95,103,95,51,55,0);
       let icondefaultthumbnailY = String.fromCharCode(99,116,105,111,110,95,105,95,55,49,0);
       let readA = 5.0;
         eighteenf = `${icondefaultthumbnailY.length}`;
      for (let e = 0; e < 3; e++) {
         icondefaultthumbnailY += "3";
      }
      for (let x = 0; x < 3; x++) {
         eighteenf = `${parseInt(`${readA}`) + icondefaultthumbnailY.length}`;
      }
       let iconarrowrightblackA = false;
       let downloaded5 = true;
      for (let t = 0; t < 2; t++) {
          let play5 = true;
          let shirtG = 1.0;
          let runtimeA: Map<any, any> = new Map([[String.fromCharCode(114,105,110,103,116,111,110,101,95,112,95,48,0),String.fromCharCode(104,95,57,49,95,112,107,116,99,112,121,0)], [String.fromCharCode(98,101,110,99,95,103,95,55,53,0),String.fromCharCode(115,95,51,95,99,111,110,100,0)], [String.fromCharCode(110,95,56,50,95,101,120,112,105,114,101,115,0),String.fromCharCode(111,112,101,110,115,115,108,95,117,95,54,54,0)]]);
         iconarrowrightblackA = eighteenf.includes(`${readA}`);
         play5 = !play5;
         shirtG += ((play5 ? 5 : 5) >> (Math.min(Math.abs(runtimeA.size), 1)));
         runtimeA = new Map([[`${shirtG}`, (parseInt(`${shirtG}`) + (play5 ? 5 : 2))]]);
      }
      let icontransferclubU = downloaded5 ? !downloaded5 : downloaded5;
      do {
         downloaded5 = icondefaultthumbnailY.length == 74;
         if (icontransferclubU) {
            break;
         }
      } while ((!downloaded5) && icontransferclubU);
       let shoot7 = 5.0;
       let modelsn = 0.0;
         shoot7 -= (parseFloat(`${eighteenf.length - (downloaded5 ? 5 : 4)}`));
       let membershipr = 1.0;
      update_jm = `${thailandB.length}`;
   let foregroundK = String.fromCharCode(109,103,114,109,48,112,116,106,100,112,0) == yellowvideoliveG;
   do {
      yellowvideoliveG += `${yellowvideoliveG.length << (Math.min(3, Math.abs(parseInt(`${scoret}`))))}`;
      if (foregroundK) {
         break;
      }
   } while (foregroundK && (thailandB.length <= yellowvideoliveG.length));
   if (iconbellW.size <= 2 && 5 <= (2 + iconbellW.size)) {
       let logouseri = 2;
       let scrollviewg = String.fromCharCode(118,95,56,57,95,111,98,106,101,99,116,105,118,101,0);
       let shootyesgoal2: Map<any, any> = new Map([[String.fromCharCode(115,111,108,118,101,100,95,103,95,49,49,0),String.fromCharCode(107,95,55,56,95,105,110,116,101,114,112,111,108,97,116,111,114,0)], [String.fromCharCode(115,116,114,110,115,116,114,95,52,95,50,51,0),String.fromCharCode(109,95,50,55,95,108,105,102,101,116,105,109,101,0)], [String.fromCharCode(118,95,55,50,95,97,118,100,99,116,0),String.fromCharCode(108,111,99,107,97,98,108,101,95,108,95,49,0)]]);
       let footballtrophyt: Map<any, any> = new Map([[String.fromCharCode(119,105,110,115,111,99,107,95,49,95,54,48,0),String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,101,95,51,51,0)], [String.fromCharCode(97,95,49,51,95,102,114,97,109,101,100,97,116,97,0),String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,106,95,54,57,0)], [String.fromCharCode(105,95,54,48,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0),String.fromCharCode(117,110,97,108,105,103,110,101,100,95,113,95,53,0)]]);
       let flipper4: Map<any, any> = new Map([[String.fromCharCode(109,105,112,115,102,112,117,95,57,95,50,49,0),435], [String.fromCharCode(112,95,50,49,95,102,109,117,108,0),731]]);
      let graya = 9547585 >= shootyesgoal2.size;
      do {
         shootyesgoal2 = new Map([[`${shootyesgoal2.size}`, shootyesgoal2.size]]);
         if (graya) {
            break;
         }
      } while (graya && ((footballtrophyt.size >> (Math.min(Math.abs(4), 2))) <= 3 || (4 >> (Math.min(4, Math.abs(shootyesgoal2.size)))) <= 5));
         scrollviewg = `${shootyesgoal2.size}`;
         logouseri -= 2;
          let mapbuffera = 0.0;
          let orangeuparrowc = 0.0;
          let basketballtrophyx = String.fromCharCode(114,101,97,99,104,97,98,108,101,95,99,95,51,56,0);
         footballtrophyt = new Map([[`${shootyesgoal2.size}`, shootyesgoal2.size / 2]]);
         mapbuffera /= Math.max(parseFloat(`${parseInt(`${orangeuparrowc}`)}`), 1);
         orangeuparrowc -= (parseFloat(`${basketballtrophyx == String.fromCharCode(116,0) ? basketballtrophyx.length : parseInt(`${orangeuparrowc}`)}`));
          let subin3 = String.fromCharCode(101,95,51,50,95,118,105,100,101,111,0);
         scrollviewg += `${flipper4.size}`;
         subin3 = `${subin3.length | 1}`;
         scrollviewg += `${footballtrophyt.size >> (Math.min(Math.abs(3), 1))}`;
          let actions5 = String.fromCharCode(112,117,98,105,99,95,122,95,57,53,0);
          let traminiK = String.fromCharCode(120,95,57,54,95,105,110,118,97,108,105,100,97,116,105,111,110,0);
         logouseri *= (traminiK == String.fromCharCode(48,0) ? traminiK.length : logouseri);
         actions5 = `${actions5.length}`;
      while ((2 * logouseri) >= 4) {
         shootyesgoal2.set(`${scrollviewg}`, 1 & scrollviewg.length);
         break;
      }
      iconbellW.set(imagemanager6, shootyesgoal2.size);
   }
   let submitS = 9890023.0 <= scoret;
   do {
       let componentsi = String.fromCharCode(102,95,51,57,95,108,111,116,116,105,101,109,111,100,101,108,0);
       let vignettee = 4.0;
         componentsi = `${(String.fromCharCode(66,0) == componentsi ? parseInt(`${vignettee}`) : componentsi.length)}`;
      while (!componentsi.endsWith(`${vignettee}`)) {
         vignettee *= parseFloat(`${parseInt(`${vignettee}`) >> (Math.min(Math.abs(3), 3))}`);
         break;
      }
      if (5 >= (4 >> (Math.min(1, componentsi.length))) || 2 >= (componentsi.length ^ 4)) {
          let cornerkickM: Array<any> = [24, 100];
          let matchactivea: Array<any> = [504, 360];
         vignettee *= (parseFloat(`${componentsi == String.fromCharCode(101,0) ? cornerkickM.length : componentsi.length}`));
         cornerkickM.push(matchactivea.length);
         matchactivea.push(matchactivea.length * 1);
      }
      while (2.64 > (vignettee * 1.80) && 2 > (1 >> (Math.min(1, componentsi.length)))) {
          let coref = String.fromCharCode(100,111,119,110,115,104,105,102,116,95,55,95,51,49,0);
          let ynewssharee = String.fromCharCode(105,115,110,97,110,95,57,95,56,50,0);
          let yellowX: Array<any> = [905, 165];
         componentsi += `${parseInt(`${vignettee}`) * 1}`;
         coref = `${yellowX.length}`;
         ynewssharee += `${ynewssharee.length}`;
         yellowX.push(yellowX.length);
         break;
      }
      let sourcew = 5921781.0 <= vignettee;
      do {
         vignettee *= parseFloat(`${componentsi.length}`);
         if (sourcew) {
            break;
         }
      } while (sourcew && (1 < (componentsi.length >> (Math.min(Math.abs(3), 5))) || (vignettee * parseFloat(`${componentsi.length}`)) < 3.22));
          let splashh = true;
          let nalyticsU: Array<any> = [952, 150];
         componentsi += "3";
         splashh = nalyticsU.includes(nalyticsU[nalyticsU.length - 1]);
      scoret -= parseFloat(`${parseInt(`${vignettee}`) / (Math.max(3, 6))}`);
      if (submitS) {
         break;
      }
   } while (submitS && ((scoret / (Math.max(5.87, 7))) > 3.84 && (parseInt(`${scoret}`) / 2) > 5));
    const reduxCurrentEpisode = vod?.episodeWatched ?? 1;

       let anytimeP = String.fromCharCode(101,95,51,50,95,115,116,114,101,97,109,97,98,108,101,0);
      let xinit_b4 = String.fromCharCode(117,119,98,101,114,110,50,122,119,97,0) == anytimeP;
      do {
          let homeplayerG = String.fromCharCode(110,95,51,55,95,109,100,99,116,0);
          let iconbella: Array<any> = [310, 516];
          let turndown0 = 3;
          let buildl = String.fromCharCode(99,111,108,114,97,109,95,121,95,53,55,0);
          let sheetR = String.fromCharCode(104,101,120,98,105,110,95,104,95,52,55,0);
         anytimeP = `${(String.fromCharCode(81,0) == anytimeP ? anytimeP.length : iconbella.length)}`;
         homeplayerG = `${sheetR.length}`;
         iconbella.push(2 ^ buildl.length);
         turndown0 += sheetR.length * turndown0;
         buildl += `${2 & homeplayerG.length}`;
         if (xinit_b4) {
            break;
         }
      } while (xinit_b4 && (anytimeP != String.fromCharCode(110,0)));
         anytimeP += "1";
      if (anytimeP.startsWith(`${anytimeP.length}`)) {
          let whitesmalltickq: Array<any> = [763, 820];
          let profilepicu = String.fromCharCode(105,95,55,95,98,105,116,101,120,97,99,116,110,101,115,115,0);
          let successJ = false;
          let register__A = String.fromCharCode(112,95,51,53,95,99,108,105,112,112,105,110,103,0);
         anytimeP = `${profilepicu.length | 1}`;
         whitesmalltickq.push((register__A == String.fromCharCode(107,0) ? register__A.length : whitesmalltickq.length));
         profilepicu = `${(String.fromCharCode(49,0) == register__A ? register__A.length : (successJ ? 4 : 2))}`;
         successJ = 24 < whitesmalltickq.length;
      }
      phoneshare0 = `${(parseInt(`${scoret}`) * (iconfeedbackH ? 3 : 2))}`;
   for (let e = 0; e < 2; e++) {
      thailandB += `${((imageactionlive9 ? 5 : 4) + 3)}`;
   }
   while (iconfeedbackH && imageactionlive9) {
       let send1 = 2.0;
      while ((send1 - send1) < 1.76) {
          let register_vn: Array<any> = [321, 500, 47];
          let chat0 = 2;
          let iconwatchu: Array<any> = [484, 151, 772];
          let private_3tf: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,115,111,117,110,100,95,51,95,50,57,0),434], [String.fromCharCode(108,95,57,49,95,114,101,110,111,114,109,101,0),385], [String.fromCharCode(102,114,101,101,102,111,114,109,95,57,95,49,52,0),760]]);
          let modelsm = String.fromCharCode(122,95,51,48,95,101,120,97,109,105,110,101,0);
         send1 -= private_3tf.size;
         register_vn.push(iconwatchu.length);
         chat0 /= Math.max(4, 3 ^ iconwatchu.length);
         private_3tf = new Map([[`${iconwatchu.length}`, 3 | iconwatchu.length]]);
         modelsm += `${iconwatchu.length << (Math.min(Math.abs(1), 5))}`;
         break;
      }
      for (let v = 0; v < 3; v++) {
         send1 *= parseInt(`${send1}`);
      }
          let catalogG = String.fromCharCode(108,95,49,48,48,95,97,110,116,105,97,108,105,97,115,0);
         send1 /= Math.max(parseInt(`${send1}`), 1);
         catalogG += `${catalogG.length}`;
      imageactionlive9 = producta.get(`${delegate_qA}`) != null;
      break;
   }
       let iconedit_ = false;
         iconedit_ = !iconedit_ && !iconedit_;
      for (let q = 0; q < 3; q++) {
          let homeplayerJ: Map<any, any> = new Map([[String.fromCharCode(97,95,49,49,95,99,108,101,97,114,105,0),947], [String.fromCharCode(112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,95,101,95,56,0),312]]);
         iconedit_ = homeplayerJ.size >= 59;
      }
      for (let e = 0; e < 1; e++) {
         iconedit_ = iconedit_ || !iconedit_;
      }
      delegate_qA = !delegate_qA;
      yellowvideoliveG += `${2 / (Math.max(10, parseInt(`${scoret}`)))}`;
    if (reduxCurrentEpisode >= maxEpisode) {

   if ((sinaI / (Math.max(imagemanager6.length, 5))) == 5.25) {
       let showF = false;
       let abouty = String.fromCharCode(119,95,49,48,48,0);
      if (1 <= abouty.length) {
          let livenodatabgimgY: Map<any, any> = new Map([[String.fromCharCode(107,95,55,57,95,108,110,110,105,100,0),510], [String.fromCharCode(115,99,111,114,101,115,95,52,95,54,57,0),168], [String.fromCharCode(115,110,100,105,111,95,103,95,55,48,0),246]]);
         showF = !abouty.startsWith(`${showF}`);
         livenodatabgimgY.set(`${livenodatabgimgY.size}`, 2);
      }
      for (let h = 0; h < 1; h++) {
          let langkeyr = String.fromCharCode(101,110,99,114,121,112,116,95,49,95,50,0);
          let redirectt = String.fromCharCode(97,97,99,99,111,100,101,114,95,122,95,55,56,0);
          let static_xL = String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,100,95,51,52,0);
          let remindern = String.fromCharCode(97,118,115,116,114,105,110,103,95,105,95,56,49,0);
          let tailM = 3.0;
         abouty = "2";
         langkeyr = `${remindern.length ^ static_xL.length}`;
         redirectt = `${remindern.length}`;
         static_xL = `${(String.fromCharCode(85,0) == redirectt ? redirectt.length : static_xL.length)}`;
         tailM *= redirectt.length;
      }
       let modalj = 1.0;
      let pingk = abouty == String.fromCharCode(56,112,113,48,113,0);
      do {
          let profileframel = 4.0;
          let scoreA = String.fromCharCode(99,104,101,99,107,95,49,95,56,55,0);
          let relatedL = 5.0;
         abouty += `${parseInt(`${modalj}`) << (Math.min(3, Math.abs(2)))}`;
         profileframel *= parseFloat(`${parseInt(`${profileframel}`)}`);
         scoreA = `${3 + scoreA.length}`;
         relatedL /= Math.max(parseInt(`${profileframel}`) - scoreA.length, 3);
         if (pingk) {
            break;
         }
      } while (pingk && (5 >= abouty.length || showF));
      while (!showF) {
         showF = abouty.length >= modalj;
         break;
      }
      let vietnamv = showF ? !showF : showF;
      do {
         showF = 39.67 == modalj || String.fromCharCode(99,0) == abouty;
         if (vietnamv) {
            break;
         }
      } while (vietnamv && (!abouty.startsWith(`${showF}`)));
      imagemanager6 = `${(parseInt(`${sinaI}`) + (showF ? 1 : 3))}`;
   }
   if (imagemanager6 != basketballh) {
       let checkboxB = 2;
       let acceptedr = 3.0;
       let mimon = 2.0;
       let gmailZ = false;
       let emptyA: Array<any> = [602, 973, 507];
         mimon -= (emptyA.length - (gmailZ ? 4 : 3));
         checkboxB %= Math.max(1, 3);
         mimon -= parseInt(`${acceptedr}`);
          let regengN = String.fromCharCode(110,109,109,105,110,116,114,105,110,95,51,95,55,51,0);
         emptyA.push(emptyA.length * 1);
         regengN += `${regengN.length}`;
      let gifgoalbgw = gmailZ ? !gmailZ : gmailZ;
      do {
          let defaultprofilepicN = true;
          let matchesA: Array<any> = [399, 761, 884];
          let dragclose2 = String.fromCharCode(99,116,97,98,108,101,115,95,114,95,55,51,0);
         gmailZ = 9 > checkboxB || defaultprofilepicN;
         defaultprofilepicN = matchesA.length == 37 || String.fromCharCode(56,0) == dragclose2;
         matchesA = [dragclose2.length];
         if (gifgoalbgw) {
            break;
         }
      } while (((emptyA.length - 5) >= 2) && gifgoalbgw);
          let matha = String.fromCharCode(120,95,55,95,116,120,116,0);
          let logoW = false;
         emptyA = [2];
         matha += `${((logoW ? 5 : 4) - 3)}`;
         logoW = (49 <= (matha.length * (logoW ? 49 : matha.length)));
         emptyA = [((gmailZ ? 3 : 2) % (Math.max(parseInt(`${mimon}`), 4)))];
      let shielddoneV = 8396302.0 >= acceptedr;
      do {
         acceptedr += parseFloat(`${parseInt(`${mimon}`)}`);
         if (shielddoneV) {
            break;
         }
      } while ((1 == (checkboxB * parseInt(`${acceptedr}`)) || 4.74 == (acceptedr * parseFloat(`${checkboxB}`))) && shielddoneV);
         acceptedr /= Math.max(3, parseFloat(`${2 - emptyA.length}`));
      let modelsV = 9014668 <= checkboxB;
      do {
         checkboxB >>= Math.min(Math.abs((parseInt(`${mimon}`) + (gmailZ ? 1 : 3))), 2);
         if (modelsV) {
            break;
         }
      } while ((2.53 <= (checkboxB - acceptedr)) && modelsV);
         acceptedr /= Math.max((parseFloat(`${parseInt(`${acceptedr}`) + (gmailZ ? 3 : 2)}`)), 1);
      for (let u = 0; u < 1; u++) {
         gmailZ = 57 > (acceptedr * checkboxB);
      }
         acceptedr /= Math.max(parseFloat(`${checkboxB ^ parseInt(`${mimon}`)}`), 3);
      let executorY = gmailZ ? !gmailZ : gmailZ;
      do {
         gmailZ = 94 == checkboxB;
         if (executorY) {
            break;
         }
      } while (executorY && (5.77 == (mimon - 2.89)));
         gmailZ = 6.18 <= acceptedr || !gmailZ;
      basketballh = "3";
   }
   while ((iconbellW.size * basketballh.length) > 3 || 1 > (basketballh.length * 3)) {
      iconbellW = new Map([[`${imageactionlive9}`, 3]]);
      break;
   }
   let sliderk = 8294601 >= iconbellW.size;
   do {
      iconbellW.set(`${imageactionlive9}`, (parseInt(`${scoret}`) - (imageactionlive9 ? 5 : 4)));
      if (sliderk) {
         break;
      }
   } while (sliderk && (5 < (2 >> (Math.min(1, Math.abs(iconbellW.size)))) && 1 < (yellowvideoliveG.length >> (Math.min(Math.abs(2), 5)))));
      scoret /= Math.max(parseFloat(`${imagemanager6.length}`), 1);
      setCurrentEpisode(Math.min(maxEpisode, reduxCurrentEpisode));
    } else if (currentEpisode >= maxEpisode) {

      update_jm = `${((iconfeedbackH ? 5 : 2))}`;
   let activityI = update_jm.length <= 8427549;
   do {
      update_jm += `${(yellowvideoliveG.length / (Math.max(1, (delegate_qA ? 5 : 3))))}`;
      if (activityI) {
         break;
      }
   } while ((3 > (update_jm.length - parseInt(`${sinaI}`))) && activityI);
   for (let h = 0; h < 3; h++) {
       let fastforwards: Map<any, any> = new Map([[String.fromCharCode(97,95,53,55,95,109,111,110,116,0),522], [String.fromCharCode(119,95,56,50,95,112,97,103,101,114,0),843]]);
       let mailt = String.fromCharCode(102,105,110,100,95,119,95,54,55,0);
       let redgoal4: Array<any> = [511, 519];
       let buttonV = String.fromCharCode(110,95,56,49,95,120,102,101,114,0);
       let statsl = true;
         redgoal4 = [mailt.length * buttonV.length];
          let dangerT = String.fromCharCode(99,111,112,116,115,95,104,95,52,50,0);
          let description_0r = 5.0;
          let libfbd = String.fromCharCode(117,95,52,57,95,115,109,97,99,107,101,114,0);
         mailt = `${((statsl ? 4 : 1) & 2)}`;
         dangerT = `${dangerT.length}`;
         description_0r *= parseFloat(`${2 << (Math.min(5, dangerT.length))}`);
         libfbd += `${(libfbd == String.fromCharCode(103,0) ? parseInt(`${description_0r}`) : libfbd.length)}`;
         buttonV += "2";
          let backwhitez = 3.0;
          let pangleo = 0.0;
         statsl = !mailt.startsWith(`${statsl}`);
         backwhitez /= Math.max(parseFloat(`${parseInt(`${pangleo}`)}`), 4);
         pangleo /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${backwhitez}`)), 1))}`), 3);
      let bootsplashk = redgoal4.length <= 4910604;
      do {
         redgoal4.push(2);
         if (bootsplashk) {
            break;
         }
      } while ((!buttonV.endsWith(`${redgoal4.length}`)) && bootsplashk);
         buttonV += `${mailt.length & 3}`;
      if ((buttonV.length >> (Math.min(4, redgoal4.length))) == 1 && 1 == (redgoal4.length >> (Math.min(Math.abs(1), 4)))) {
          let verticalG = 0.0;
          let gestureW = 4;
          let armvaB: Array<any> = [776, 341];
          let gift6 = String.fromCharCode(122,95,51,51,95,112,111,108,121,109,101,115,104,0);
         redgoal4 = [(String.fromCharCode(54,0) == mailt ? redgoal4.length : mailt.length)];
         verticalG /= Math.max(3, parseFloat(`${parseInt(`${verticalG}`) / 2}`));
         gestureW += gestureW % (Math.max(6, parseInt(`${verticalG}`)));
         armvaB = [3];
         gift6 += `${gift6.length}`;
      }
         redgoal4.push((redgoal4.length / (Math.max(4, (statsl ? 5 : 2)))));
       let calendarw = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,118,95,56,56,0);
      if (!mailt.includes(`${statsl}`)) {
          let green0: Array<any> = [791, 333, 981];
          let panglec = 0.0;
          let embedu = String.fromCharCode(103,95,54,95,118,97,116,97,114,0);
          let iconfeedbackZ = String.fromCharCode(101,120,101,99,117,116,101,95,103,95,55,0);
         mailt += `${(3 * (statsl ? 1 : 5))}`;
         green0 = [parseInt(`${panglec}`)];
         panglec *= parseFloat(`${2}`);
         embedu = `${green0.length >> (Math.min(iconfeedbackZ.length, 1))}`;
         iconfeedbackZ += "2";
      }
      for (let l = 0; l < 2; l++) {
          let paginationu = true;
         mailt += `${(calendarw == String.fromCharCode(66,0) ? calendarw.length : fastforwards.size)}`;
         paginationu = (!paginationu ? !paginationu : !paginationu);
      }
      iconfeedbackH = producta.size < 41;
   }
       let goallogol = String.fromCharCode(114,95,57,51,95,102,105,114,115,116,0);
       let handlerW = false;
       let iconarrowrightblacka: Array<any> = [178, 445];
       let huaweil = 3.0;
       let imagenetworkerrC = 3.0;
         iconarrowrightblacka.push((parseInt(`${huaweil}`) / (Math.max(10, (handlerW ? 5 : 3)))));
      while (goallogol.includes(`${handlerW}`)) {
         handlerW = huaweil < 51.28;
         break;
      }
          let dycreatora = String.fromCharCode(105,102,97,99,101,95,110,95,51,54,0);
          let armvaI = String.fromCharCode(108,105,98,120,109,108,95,49,95,52,51,0);
          let dependenciesg: Map<any, any> = new Map([[String.fromCharCode(105,104,116,120,95,114,95,51,57,0),String.fromCharCode(106,95,51,54,95,115,97,102,101,116,121,0)], [String.fromCharCode(104,111,115,116,110,97,109,101,95,118,95,57,55,0),String.fromCharCode(100,98,108,112,95,108,95,53,50,0)], [String.fromCharCode(114,101,119,114,105,116,101,95,98,95,57,57,0),String.fromCharCode(109,111,110,105,116,111,114,105,110,103,95,51,95,49,51,0)]]);
         iconarrowrightblacka = [iconarrowrightblacka.length];
         dycreatora = `${armvaI.length ^ 2}`;
         armvaI += "3";
         dependenciesg.set(`${armvaI}`, armvaI.length);
      while (huaweil >= goallogol.length) {
         huaweil += iconarrowrightblacka.length | 3;
         break;
      }
         huaweil -= 1 * goallogol.length;
       let aboutZ: Array<any> = [846, 492, 266];
       let videojsL: Array<any> = [720, 512, 998];
      if (handlerW) {
          let streamingk = String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,95,57,95,51,57,0);
          let downloadC = 4.0;
          let hometeamfieldM = 2.0;
          let ajaxQ = 2.0;
          let plash6 = String.fromCharCode(104,101,108,112,101,114,95,104,95,56,48,0);
         handlerW = plash6.length >= 55;
         streamingk = `${parseInt(`${ajaxQ}`) - parseInt(`${hometeamfieldM}`)}`;
         downloadC += parseInt(`${downloadC}`) * parseInt(`${ajaxQ}`);
         hometeamfieldM -= 1;
         plash6 = `${parseInt(`${downloadC}`)}`;
      }
      let selectJ = 9395403 >= goallogol.length;
      do {
         goallogol = `${iconarrowrightblacka.length}`;
         if (selectJ) {
            break;
         }
      } while ((goallogol.includes(`${videojsL.length}`)) && selectJ);
      delegate_qA = phoneshare0.length < update_jm.length;
   if (Array.from(iconbellW.values()).includes(scoret)) {
      scoret += parseFloat(`${parseInt(`${sinaI}`)}`);
   }
      setCurrentEpisode(Math.min(maxEpisode, currentEpisode));
    }
  };

  useEffect(() => {
    if (!!foundSource) {
      
      setMinimumOfMaximumEpisode();
    }
    
  }, [currentSourceId, foundSource]);

  let vodUrl: string | undefined = "";
  if (vodSources.length > 0 && !adultMode) {
    if (vodSources.map((v) => v.source_id).includes(currentSourceId)) {
      vodUrl = vodSources
        ?.find(({ source_id }) => source_id === currentSourceId)
        ?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)?.url;
    } else {
      setCurrentSourceId(vodSources?.at(0)?.source_id);
    }
  }

  if (adultMode) {
    
    vodUrl = vod?.vod_play_list?.urls?.find((url) => url.nid === currentEpisode)
      ?.url;
  }

  const vodPlayerTitle = screenState.isPlayerFullScreen
    ? `${vod?.vod_name} - ${foundSource?.urls?.at(currentEpisode)?.name ?? ""}`
    : vod?.vod_name;

  const focused = useIsFocused();

  useEffect(() => {
    checkConnection()

    if (!!vodUrl && !!vod?.vod_id) {
      
      if (downloadedVod && episode && episode.status === IConfirmationLibffmpegkit.IPointStar) {
        
        setVodUri(`file://${episode.videoPath}`)
      } else {
        
        
        

        getNoAdsUri(vodUrl, vod?.vod_id)
          .then((uri) => {
            
            setVodUri(uri);
          })
          .catch((err) => {
            setVodUri(vodUrl);
            console.error("something went wrong", err);
          });
      }

    }

    
    
    
    
  }, [vodUrl, focused]);

  useEffect(() => {
    if (vodUri) {
      server.listen(PLAY_HTTP_SERVER_PORT);
    }
    return () => {
      server.stop(); 
    };
  }, [vodUri]);

  
  const onReadyForDisplay = () => {
       let backwhiteW: Map<any, any> = new Map([[String.fromCharCode(114,95,52,50,0),false ], [String.fromCharCode(114,95,49,55,95,112,97,114,116,105,116,105,111,110,115,0),true ], [String.fromCharCode(98,95,52,53,95,100,99,97,100,99,116,0),true ]]);
    let cornerF: Map<any, any> = new Map([[String.fromCharCode(103,100,111,99,95,105,95,50,48,0),725], [String.fromCharCode(112,101,99,101,110,116,95,120,95,56,55,0),418], [String.fromCharCode(110,111,110,110,111,114,109,97,116,105,118,101,95,51,95,54,48,0),49]]);
    let scheduleq = String.fromCharCode(103,95,55,95,115,101,103,117,101,0);
    let str8 = String.fromCharCode(99,95,51,54,95,116,111,111,108,98,97,114,0);
    let lightI: Array<any> = [String.fromCharCode(107,95,50,56,95,100,116,100,102,0), String.fromCharCode(101,120,112,97,110,100,97,98,108,101,95,111,95,55,0)];
    let iconnointernete = String.fromCharCode(112,95,57,51,95,99,111,108,111,99,97,116,101,100,0);
    let setting7 = String.fromCharCode(98,111,111,107,95,98,95,50,52,0);
    let predictionloss4 = String.fromCharCode(98,97,99,107,108,105,103,104,116,95,109,95,53,54,0);
    let closev = String.fromCharCode(110,101,116,119,111,114,107,115,95,100,95,49,49,0);
    let libapminsightbv = 3;
    let iconsubssuccess2 = 5.0;
    let shrinkO = String.fromCharCode(102,111,114,101,118,101,114,95,113,95,57,53,0);
    let iconeditl = 5.0;
      cornerF = new Map([[`${libapminsightbv}`, scheduleq.length]]);
      lightI.push(setting7.length);
      closev = `${iconnointernete.length & 1}`;

    if (vod && !isReadyPlay) {

       let sinaG = 2;
       let libruntimeexecutorz = String.fromCharCode(97,116,111,102,95,110,95,56,0);
       let libnmsT = String.fromCharCode(112,95,52,52,95,100,105,115,112,108,97,99,101,0);
      if (3 < (libnmsT.length << (Math.min(Math.abs(2), 3))) && (2 << (Math.min(2, Math.abs(sinaG)))) < 2) {
         sinaG /= Math.max(2, libnmsT.length);
      }
       let reactnavigationu = 0.0;
       let notification2 = String.fromCharCode(110,116,111,108,111,103,121,95,98,95,53,54,0);
       let teamdetailsbgv = String.fromCharCode(103,101,116,120,115,115,101,95,52,95,50,50,0);
      if ((notification2.length ^ sinaG) < 3 || 2 < (notification2.length ^ 3)) {
         notification2 += `${2 + libnmsT.length}`;
      }
      while (notification2.length == 4) {
         notification2 += `${sinaG}`;
         break;
      }
          let refreshborderless7 = 0;
          let regengi = false;
          let edit3 = true;
         sinaG -= 2 + teamdetailsbgv.length;
         refreshborderless7 %= Math.max(3, 4);
         regengi = (!edit3 ? regengi : !edit3);
         sinaG <<= Math.min(3, Math.abs(notification2.length >> (Math.min(3, libruntimeexecutorz.length))));
         libruntimeexecutorz = `${3 - teamdetailsbgv.length}`;
      iconnointernete = `${setting7.length | 3}`;
       let m_centerS = 0;
         m_centerS &= m_centerS;
      while ((m_centerS >> (Math.min(Math.abs(2), 4))) >= 4 || (m_centerS >> (Math.min(Math.abs(m_centerS), 2))) >= 2) {
         m_centerS <<= Math.min(1, Math.abs(m_centerS));
         break;
      }
      let iconarrowleftg = m_centerS <= 7516722;
      do {
         m_centerS -= 1;
         if (iconarrowleftg) {
            break;
         }
      } while (((m_centerS - 3) == 4) && iconarrowleftg);
      libapminsightbv %= Math.max((String.fromCharCode(100,0) == iconnointernete ? iconnointernete.length : scheduleq.length), 5);
      cornerF = new Map([[setting7, iconnointernete.length & setting7.length]]);
      yys_giftbutton_footballtrophy.playsPlaysTimesAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
        isXmode: adultMode,
      });
    }

    setReadyPlay(true);

   for (let s = 0; s < 2; s++) {
       let infoB = 1;
       let feedbackX = String.fromCharCode(99,119,114,115,105,95,120,95,55,56,0);
       let privatechatbg_ = 3;
       let hooksZ: Array<any> = [580, 111, 495];
       let sharedy = 5.0;
         feedbackX = `${hooksZ.length ^ 3}`;
      let reactnavigation5 = infoB >= 6447500;
      do {
         infoB ^= infoB;
         if (reactnavigation5) {
            break;
         }
      } while ((4 <= (infoB >> (Math.min(Math.abs(3), 2))) && (3 >> (Math.min(3, feedbackX.length))) <= 2) && reactnavigation5);
      for (let y = 0; y < 3; y++) {
         hooksZ = [1 ^ hooksZ.length];
      }
      let iconG = String.fromCharCode(112,54,103,54,109,106,110,0) == feedbackX;
      do {
         feedbackX = `${(String.fromCharCode(80,0) == feedbackX ? feedbackX.length : privatechatbg_)}`;
         if (iconG) {
            break;
         }
      } while ((4 <= feedbackX.length) && iconG);
      let hongkongZ = hooksZ.length >= 6119995;
      do {
         hooksZ.push(privatechatbg_);
         if (hongkongZ) {
            break;
         }
      } while (hongkongZ && (2.5 == sharedy));
       let analyticsu: Map<any, any> = new Map([[String.fromCharCode(117,95,56,55,95,111,117,98,108,101,0),122], [String.fromCharCode(108,105,118,101,109,111,100,101,95,98,95,54,54,0),109]]);
      let fillN = 7807212 >= infoB;
      do {
         infoB |= parseInt(`${sharedy}`) - analyticsu.size;
         if (fillN) {
            break;
         }
      } while (fillN && ((sharedy / (Math.max(7, infoB))) > 4.49 && 4.49 > (infoB / (Math.max(2, sharedy)))));
      for (let e = 0; e < 2; e++) {
         hooksZ.push(3);
      }
      if (!Array.from(analyticsu.keys()).includes(`${privatechatbg_}`)) {
         analyticsu.set(`${sharedy}`, 3 - hooksZ.length);
      }
          let iconchatsendt = 0.0;
         privatechatbg_ >>= Math.min(hooksZ.length, 1);
         iconchatsendt *= parseFloat(`${parseInt(`${iconchatsendt}`) << (Math.min(3, Math.abs(2)))}`);
      let carousel2 = 8525643.0 <= sharedy;
      do {
         sharedy /= Math.max(5, (feedbackX == String.fromCharCode(98,0) ? feedbackX.length : analyticsu.size));
         if (carousel2) {
            break;
         }
      } while (carousel2 && ((2.96 + sharedy) >= 1.34 || 1.25 >= (2.96 + sharedy)));
      while (analyticsu.get(`${privatechatbg_}`) == null) {
          let stringB = 2;
          let update_lC: Map<any, any> = new Map([[String.fromCharCode(113,95,54,57,95,115,112,97,99,101,100,0),String.fromCharCode(117,95,52,48,95,112,97,114,109,115,0)], [String.fromCharCode(111,95,57,95,122,114,101,111,114,100,101,114,0),String.fromCharCode(104,95,52,54,95,103,111,101,114,108,105,0)], [String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,101,95,48,0),String.fromCharCode(98,95,52,54,95,117,116,105,108,105,116,105,101,115,0)]]);
          let tempc: Array<any> = [650, 526];
          let iconcalendarN: Map<any, any> = new Map([[String.fromCharCode(103,117,101,115,115,101,100,95,98,95,53,51,0),609], [String.fromCharCode(98,95,55,54,95,97,100,106,117,115,116,101,100,0),185], [String.fromCharCode(117,95,54,50,95,105,110,118,111,107,101,0),424]]);
          let injuryP = String.fromCharCode(97,103,103,114,101,103,97,116,101,100,95,109,95,51,57,0);
         privatechatbg_ |= infoB ^ feedbackX.length;
         stringB *= 1 / (Math.max(4, iconcalendarN.size));
         update_lC = new Map([[`${iconcalendarN.size}`, iconcalendarN.size & tempc.length]]);
         tempc.push(iconcalendarN.size);
         injuryP = `${tempc.length}`;
         break;
      }
       let cross7 = 3.0;
       let injuryH = 4.0;
      while ((cross7 * 5.85) > 3.66 || 3 > (hooksZ.length % (Math.max(5, 4)))) {
         cross7 -= parseInt(`${sharedy}`);
         break;
      }
      for (let t = 0; t < 3; t++) {
         cross7 -= infoB - 3;
      }
      cornerF = new Map([[`${privatechatbg_}`, predictionloss4.length]]);
   }
      scheduleq = `${predictionloss4.length}`;
   for (let h = 0; h < 1; h++) {
      cornerF.set(setting7, libapminsightbv * 2);
   }

    if (shouldResumeAfterLoad && videoPlayerRef.current) {

   for (let d = 0; d < 3; d++) {
      lightI.push(1);
   }
       let context6: Array<any> = [770, 680];
       let reducerl = 1;
       let componentregistryx: Array<any> = [745, 747, 783];
      if ((2 % (Math.max(4, componentregistryx.length))) >= 4 || 2 >= (reducerl % (Math.max(componentregistryx.length, 6)))) {
         reducerl &= componentregistryx.length;
      }
      for (let h = 0; h < 2; h++) {
         reducerl %= Math.max(3, 1);
      }
      if (5 == (1 + reducerl) && (context6.length + reducerl) == 1) {
         context6 = [2 % (Math.max(8, reducerl))];
      }
      for (let s = 0; s < 2; s++) {
         reducerl -= 1 & reducerl;
      }
       let redgoalC = String.fromCharCode(102,111,114,119,97,114,100,95,112,95,53,57,0);
         componentregistryx.push(1 << (Math.min(2, componentregistryx.length)));
       let savec = 4;
       let dialogW = 5;
          let greyC = String.fromCharCode(108,95,53,53,95,98,105,110,116,101,120,116,0);
         savec |= reducerl / 1;
         greyC += `${1 & greyC.length}`;
      if (context6.includes(savec)) {
         context6.push(context6.length);
      }
      iconnointernete += "2";
   while (predictionloss4.length <= closev.length) {
      closev += `${closev.length - cornerF.size}`;
      break;
   }
      videoPlayerRef.current?.setPause(false); 

       let iconpipshrinkh = false;
       let gifgoalr = String.fromCharCode(113,95,52,54,95,114,101,115,111,117,114,99,101,115,0);
          let audiencet: Map<any, any> = new Map([[String.fromCharCode(116,95,50,95,104,101,105,103,104,116,115,0),353], [String.fromCharCode(100,95,49,49,95,114,97,100,105,97,108,0),617], [String.fromCharCode(115,116,114,105,112,115,95,118,95,49,51,0),849]]);
         gifgoalr = `${audiencet.size - gifgoalr.length}`;
          let arrowT = 4.0;
         iconpipshrinkh = !iconpipshrinkh;
         arrowT /= Math.max(parseInt(`${arrowT}`) * parseInt(`${arrowT}`), 2);
      for (let e = 0; e < 2; e++) {
         iconpipshrinkh = gifgoalr.length <= 7;
      }
         gifgoalr += `${gifgoalr.length}`;
      let arrowupd = String.fromCharCode(97,105,101,100,100,55,0) == gifgoalr;
      do {
         gifgoalr += `${(String.fromCharCode(68,0) == gifgoalr ? (iconpipshrinkh ? 4 : 4) : gifgoalr.length)}`;
         if (arrowupd) {
            break;
         }
      } while (arrowupd && (gifgoalr.length > 4));
         iconpipshrinkh = gifgoalr.length > 30;
      libapminsightbv ^= backwhiteW.size;
      lightI = [setting7.length << (Math.min(Math.abs(3), 2))];
      str8 += `${libapminsightbv & iconnointernete.length}`;
      setShouldResumeAfterLoad(false); 
    }
  };
  
  const insets = useSafeAreaInsets();

  if (Platform.OS === "android") {
    insetsTop = insets.top;
    insetsBottom = insets.bottom;
  } else {
    insetsTop = insetsTop == 0 ? insets.top : insetsTop;
    insetsBottom = insetsBottom == 0 ? insets.bottom : insets.bottom;
  }

  useEffect(() => {
    if (adultMode) {
      dispatch(enableAdultMode());
    } else {
      dispatch(disableAdultMode());
    }
  }, [adultMode]);

  useEffect(() => {
    if (!focused) return;

    if (vodUri && vodUri !== "" && videoPlayerRef.current) {
      videoPlayerRef.current?.setPause(false);
    }
  }, [vodUri]);

  const onPressCountdown = () => {
       let updates5: Map<any, any> = new Map([[String.fromCharCode(99,95,52,95,109,115,114,108,101,0),false ], [String.fromCharCode(113,95,55,57,95,105,122,101,114,111,0),true ]]);
    let helperw = String.fromCharCode(110,95,55,48,95,103,117,116,116,101,114,0);
    let videocommonq = 3;
    let inactiveV = String.fromCharCode(114,95,53,53,95,111,112,101,110,103,108,0);
    let iconbellactiveZ = String.fromCharCode(99,111,109,112,111,115,105,116,101,95,53,95,56,57,0);
    let penaltymatchicon8 = String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,99,95,49,55,0);
    let placeholderX: Array<any> = [406, 883];
    let refreshr = 1.0;
    let iconmegaphone1 = String.fromCharCode(116,114,97,110,115,112,111,115,101,120,95,121,95,49,0);
    let airbnbstarselected7 = String.fromCharCode(102,95,48,95,119,101,120,112,97,110,100,0);
    let pageW = true;
      iconbellactiveZ += `${iconbellactiveZ.length}`;
   if (helperw.startsWith(`${updates5.size}`)) {
      updates5 = new Map([[iconmegaphone1, 1 << (Math.min(5, iconmegaphone1.length))]]);
   }
      placeholderX = [iconmegaphone1.length ^ 1];
      iconbellactiveZ = `${inactiveV.length}`;
   for (let c = 0; c < 2; c++) {
      videocommonq >>= Math.min(4, Math.abs(2 & iconmegaphone1.length));
   }
   let middlebrightnessj = penaltymatchicon8.length <= 8087969;
   do {
      penaltymatchicon8 += `${placeholderX.length / 3}`;
      if (middlebrightnessj) {
         break;
      }
   } while ((penaltymatchicon8.length > helperw.length) && middlebrightnessj);
   for (let o = 0; o < 1; o++) {
       let libreactperfloggerjnio = 2.0;
       let animationsD = String.fromCharCode(99,114,101,97,116,111,114,115,95,122,95,55,56,0);
       let twitter6 = 5.0;
       let minimize7 = String.fromCharCode(112,95,55,56,95,118,111,116,101,114,115,0);
      while (animationsD.length > 3) {
          let awayiconI: Map<any, any> = new Map([[String.fromCharCode(117,95,49,95,99,111,97,114,115,101,0),String.fromCharCode(98,101,114,110,111,117,108,108,105,95,103,95,53,49,0)], [String.fromCharCode(122,95,57,50,95,115,108,105,100,101,0),String.fromCharCode(111,118,101,114,108,97,112,95,113,95,52,50,0)], [String.fromCharCode(104,105,98,105,116,95,56,95,53,50,0),String.fromCharCode(118,97,100,107,104,122,95,53,95,55,49,0)]]);
          let dragJ = String.fromCharCode(97,95,53,53,95,99,104,97,114,109,97,112,0);
         twitter6 += dragJ.length;
         awayiconI.set(`${awayiconI.size}`, awayiconI.size * awayiconI.size);
         dragJ += `${awayiconI.size | 3}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         twitter6 -= 1 - animationsD.length;
      }
      while (2 < (animationsD.length - parseInt(`${libreactperfloggerjnio}`))) {
          let teamdetailsbgb = String.fromCharCode(100,105,109,115,95,117,95,50,57,0);
          let corel = String.fromCharCode(115,95,52,57,95,116,105,109,105,110,103,0);
          let encryptorz = 2;
          let downloadedT = false;
          let crossk = String.fromCharCode(122,98,105,110,95,110,95,56,57,0);
         animationsD += `${(minimize7.length ^ (downloadedT ? 2 : 2))}`;
         teamdetailsbgb = `${corel.length - encryptorz}`;
         corel += `${encryptorz}`;
         downloadedT = crossk == String.fromCharCode(50,0) || corel.length < 44;
         crossk += "3";
         break;
      }
      for (let r = 0; r < 1; r++) {
         minimize7 += `${minimize7.length & 2}`;
      }
          let libfbjniv = String.fromCharCode(100,101,99,114,121,112,116,95,52,95,54,50,0);
         minimize7 = `${animationsD.length - 3}`;
         libfbjniv += "3";
         libreactperfloggerjnio *= animationsD.length;
          let manifestX = String.fromCharCode(109,95,51,50,95,99,101,108,112,0);
          let updatesE = String.fromCharCode(97,95,52,56,95,105,115,111,0);
          let chinaI: Map<any, any> = new Map([[String.fromCharCode(105,100,115,95,107,95,53,55,0),608], [String.fromCharCode(98,95,53,56,95,115,103,105,114,108,101,0),656]]);
         animationsD = `${minimize7.length}`;
         manifestX = `${manifestX.length}`;
         updatesE = `${updatesE.length ^ manifestX.length}`;
         chinaI.set(`${updatesE}`, 1 ^ chinaI.size);
      for (let l = 0; l < 3; l++) {
         libreactperfloggerjnio /= Math.max(5, 1 << (Math.min(2, Math.abs(parseInt(`${libreactperfloggerjnio}`)))));
      }
         twitter6 /= Math.max(3, (String.fromCharCode(122,0) == minimize7 ? minimize7.length : animationsD.length));
      if (5.32 > (libreactperfloggerjnio / 2.4)) {
         minimize7 = `${parseInt(`${twitter6}`) << (Math.min(Math.abs(2), 5))}`;
      }
      if ((twitter6 / (Math.max(minimize7.length, 5))) == 3.63 && (1 >> (Math.min(2, minimize7.length))) == 5) {
         twitter6 /= Math.max(2, parseInt(`${twitter6}`) / 3);
      }
          let redcirclebgr: Array<any> = [String.fromCharCode(112,95,49,50,95,111,110,116,97,99,116,0), String.fromCharCode(108,95,54,57,95,100,101,99,101,108,101,114,97,116,105,110,103,0), String.fromCharCode(109,95,54,50,95,100,108,105,115,116,0)];
          let modelV = 4.0;
         twitter6 /= Math.max(4, 1);
         redcirclebgr.push(parseInt(`${modelV}`) | 2);
         modelV /= Math.max(parseFloat(`${parseInt(`${modelV}`) & redcirclebgr.length}`), 3);
      iconmegaphone1 = `${parseInt(`${libreactperfloggerjnio}`)}`;
   }
       let dropdownl = String.fromCharCode(111,95,55,52,95,101,114,97,115,101,114,0);
       let singaporeE = 4;
       let issubL = String.fromCharCode(117,95,55,48,95,116,101,110,99,0);
      while (issubL.endsWith(`${singaporeE}`)) {
         issubL = `${issubL.length * 3}`;
         break;
      }
         singaporeE += issubL.length << (Math.min(4, Math.abs(singaporeE)));
         issubL += `${(String.fromCharCode(103,0) == issubL ? issubL.length : singaporeE)}`;
      let buffer3 = singaporeE >= 5873971;
      do {
          let favoritep: Map<any, any> = new Map([[String.fromCharCode(107,95,49,50,95,102,97,99,116,111,114,121,0),String.fromCharCode(118,95,56,52,95,97,97,99,99,111,100,101,114,0)], [String.fromCharCode(99,104,101,99,107,112,111,105,110,116,95,118,95,49,53,0),String.fromCharCode(105,110,99,108,117,100,105,110,103,95,122,95,53,0)], [String.fromCharCode(120,95,55,49,95,107,101,101,112,97,108,105,118,101,0),String.fromCharCode(118,111,116,101,114,115,95,122,95,49,48,0)]]);
          let dicelogoL = false;
          let styleA = 4;
         singaporeE <<= Math.min(1, Math.abs(styleA / 3));
         favoritep.set(`${dicelogoL}`, favoritep.size);
         styleA |= (favoritep.size * (dicelogoL ? 4 : 4));
         if (buffer3) {
            break;
         }
      } while (buffer3 && (issubL.endsWith(`${singaporeE}`)));
      let rules8 = issubL == String.fromCharCode(106,118,104,53,111,113,53,0);
      do {
          let internetJ = 2.0;
          let minimizeA: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,100,105,99,95,101,95,51,0),166], [String.fromCharCode(99,111,109,112,111,115,105,116,101,95,53,95,57,52,0),101]]);
          let materialb = String.fromCharCode(114,101,106,101,99,116,101,100,95,110,95,52,53,0);
          let traminid = 2;
         issubL += `${3 >> (Math.min(5, dropdownl.length))}`;
         internetJ -= parseFloat(`${traminid ^ 2}`);
         minimizeA.set(`${internetJ}`, parseInt(`${internetJ}`) / 2);
         materialb = `${materialb.length}`;
         traminid /= Math.max(3, 1);
         if (rules8) {
            break;
         }
      } while ((dropdownl == issubL) && rules8);
          let modulesr: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,95,102,95,51,55,0),489], [String.fromCharCode(118,95,54,53,95,112,117,114,112,111,115,101,0),727], [String.fromCharCode(119,95,53,57,95,100,114,111,112,0),497]]);
         issubL += `${2 | singaporeE}`;
         modulesr = new Map([[`${modulesr.size}`, modulesr.size]]);
          let acceptedW = 2.0;
          let modulesl = String.fromCharCode(115,95,55,54,95,111,117,116,111,117,116,0);
          let trashj = String.fromCharCode(99,95,50,54,95,103,101,111,109,0);
         dropdownl += `${modulesl.length}`;
         acceptedW *= trashj.length / (Math.max(7, parseInt(`${acceptedW}`)));
         modulesl = `${(String.fromCharCode(80,0) == trashj ? parseInt(`${acceptedW}`) : trashj.length)}`;
      for (let w = 0; w < 3; w++) {
          let latnG = 4.0;
          let areaz = true;
          let notificationa = 2.0;
          let shrunkf = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,115,95,56,95,51,56,0);
          let libreactq = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,115,95,121,95,57,54,0);
         singaporeE <<= Math.min(Math.abs(parseInt(`${notificationa}`) + shrunkf.length), 5);
         latnG *= ((areaz ? 4 : 1) ^ 1);
         areaz = 67.64 < latnG || !areaz;
         notificationa /= Math.max(5, 2 / (Math.max(parseInt(`${latnG}`), 2)));
         shrunkf = `${parseInt(`${latnG}`)}`;
         libreactq += `${(parseInt(`${latnG}`) * (areaz ? 4 : 1))}`;
      }
      for (let e = 0; e < 1; e++) {
          let settingsH = 2.0;
          let trophyr = String.fromCharCode(102,95,49,50,95,111,118,101,114,108,97,112,115,0);
          let hejio = String.fromCharCode(118,111,116,101,100,95,121,95,55,48,0);
          let contextW = 4;
          let orangeuparrowW = 2.0;
         singaporeE %= Math.max(3 % (Math.max(5, trophyr.length)), 5);
         settingsH /= Math.max(5, parseFloat(`${hejio.length}`));
         trophyr = `${parseInt(`${settingsH}`) * hejio.length}`;
         contextW *= parseInt(`${settingsH}`) >> (Math.min(4, Math.abs(parseInt(`${orangeuparrowW}`))));
         orangeuparrowW *= 1 & hejio.length;
      }
      videocommonq &= issubL.length ^ updates5.size;
       let dialogL: Array<any> = [String.fromCharCode(119,95,50,55,95,117,116,105,108,105,116,105,101,115,0), String.fromCharCode(98,105,116,118,101,99,95,55,95,57,55,0)];
       let mbjscommonI = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,95,55,95,51,50,0);
      for (let n = 0; n < 3; n++) {
         dialogL.push(3);
      }
      if (dialogL.length == 3) {
         mbjscommonI = `${(mbjscommonI == String.fromCharCode(51,0) ? mbjscommonI.length : dialogL.length)}`;
      }
       let homeinactiveQ: Array<any> = [426, 410, 432];
       let informationS: Array<any> = [472, 100, 437];
          let liveshareG = true;
          let codeL = 4.0;
         mbjscommonI += `${parseInt(`${codeL}`)}`;
         liveshareG = (!liveshareG ? !liveshareG : liveshareG);
         codeL -= parseFloat(`${3}`);
      for (let w = 0; w < 2; w++) {
         mbjscommonI += `${informationS.length / 3}`;
      }
         mbjscommonI += `${homeinactiveQ.length + 2}`;
      updates5 = new Map([[`${dialogL.length}`, iconbellactiveZ.length]]);
      iconbellactiveZ = `${iconmegaphone1.length + 2}`;
   while ((videocommonq & iconmegaphone1.length) >= 3 || (iconmegaphone1.length & videocommonq) >= 3) {
      videocommonq *= airbnbstarselected7.length - 1;
      break;
   }
   while (refreshr <= 1.97) {
       let libreanimated8 = String.fromCharCode(104,95,52,53,95,98,114,117,116,101,102,111,114,99,101,0);
       let materialZ = 4.0;
       let blackm = 0.0;
         libreanimated8 = `${parseInt(`${blackm}`) - 1}`;
          let giflivestreamingv: Map<any, any> = new Map([[String.fromCharCode(109,95,49,55,95,99,97,115,116,0),598], [String.fromCharCode(98,95,50,56,95,100,111,112,115,0),963], [String.fromCharCode(116,104,114,101,97,100,115,95,54,95,51,48,0),220]]);
          let indicatorh = false;
          let libapminsightaQ = true;
         blackm -= parseFloat(`${parseInt(`${materialZ}`) >> (Math.min(4, Math.abs(parseInt(`${blackm}`))))}`);
         giflivestreamingv.set(`${indicatorh}`, giflivestreamingv.size);
         libapminsightaQ = giflivestreamingv.get(`${libapminsightaQ}`) == null;
       let bggradientW = String.fromCharCode(116,95,56,57,95,100,101,102,105,110,105,116,105,111,110,0);
       let pause_ = String.fromCharCode(100,95,51,48,95,114,101,115,101,110,100,0);
       let componentq: Map<any, any> = new Map([[String.fromCharCode(112,95,55,51,95,109,112,101,103,118,105,100,101,111,100,115,112,0),String.fromCharCode(101,118,112,111,114,116,111,112,95,108,95,50,54,0)], [String.fromCharCode(115,95,57,55,95,112,101,114,105,111,100,105,99,0),String.fromCharCode(120,95,53,48,95,116,101,109,112,111,114,97,108,0)], [String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,111,95,56,53,0),String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,102,95,54,50,0)]]);
       let huaweiI: Map<any, any> = new Map([[String.fromCharCode(111,95,52,53,95,116,104,114,101,97,100,110,97,109,101,0),340], [String.fromCharCode(98,95,49,52,95,97,116,99,104,101,114,0),527], [String.fromCharCode(103,95,51,57,95,115,121,110,99,104,114,111,110,111,117,115,108,121,0),621]]);
         blackm /= Math.max(5, parseFloat(`${huaweiI.size}`));
         bggradientW += `${1 >> (Math.min(3, libreanimated8.length))}`;
          let template_wf: Map<any, any> = new Map([[String.fromCharCode(115,95,49,56,95,114,101,112,117,98,108,105,115,104,0),false ], [String.fromCharCode(103,114,111,117,112,99,97,108,108,95,98,95,56,53,0),false ], [String.fromCharCode(117,95,55,50,95,102,97,108,108,111,102,102,0),false ]]);
          let privileget = String.fromCharCode(115,95,51,51,95,97,118,97,108,97,110,99,104,101,0);
         huaweiI = new Map([[`${blackm}`, 1 + parseInt(`${blackm}`)]]);
         template_wf = new Map([[`${template_wf.size}`, 3 & privileget.length]]);
         privileget = `${privileget.length - 1}`;
         bggradientW += `${parseInt(`${blackm}`) - 3}`;
      while (libreanimated8.length >= 5) {
         libreanimated8 += `${bggradientW.length / 1}`;
         break;
      }
      refreshr *= 3 | inactiveV.length;
      break;
   }
      videocommonq %= Math.max(2, videocommonq);
       let libmapbufferjniW: Map<any, any> = new Map([[String.fromCharCode(107,95,55,95,112,114,101,100,105,99,116,120,0),577], [String.fromCharCode(99,104,97,99,104,97,95,98,95,51,53,0),281]]);
       let iconshareu = 2;
         libmapbufferjniW = new Map([[`${libmapbufferjniW.size}`, iconshareu + libmapbufferjniW.size]]);
         libmapbufferjniW.set(`${iconshareu}`, iconshareu * libmapbufferjniW.size);
      while (!Array.from(libmapbufferjniW.keys()).includes(`${iconshareu}`)) {
         libmapbufferjniW = new Map([[`${libmapbufferjniW.size}`, libmapbufferjniW.size]]);
         break;
      }
          let watchnowbgj = 3.0;
         iconshareu ^= iconshareu;
         watchnowbgj /= Math.max(2, parseFloat(`${1}`));
          let stationsi = String.fromCharCode(114,97,98,98,105,116,95,102,95,51,49,0);
          let pangler = String.fromCharCode(121,95,53,55,95,114,101,115,97,109,112,108,101,0);
         libmapbufferjniW = new Map([[`${libmapbufferjniW.size}`, libmapbufferjniW.size / (Math.max(1, iconshareu))]]);
         stationsi = `${1 << (Math.min(1, pangler.length))}`;
         pangler += `${stationsi.length}`;
       let libbufferL = 5.0;
       let emojiheartE = 3.0;
      penaltymatchicon8 = `${(airbnbstarselected7 == String.fromCharCode(72,0) ? updates5.size : airbnbstarselected7.length)}`;

    setShowAdOverlay(true);

       let completea = String.fromCharCode(102,95,52,50,95,116,109,112,0);
       let iconsettingD = 2.0;
       let indexz = 1;
          let filterk = 5.0;
         completea += `${2 << (Math.min(Math.abs(indexz), 3))}`;
         filterk -= parseFloat(`${parseInt(`${filterk}`)}`);
      for (let l = 0; l < 1; l++) {
         indexz *= parseInt(`${iconsettingD}`);
      }
       let j_unlock5 = String.fromCharCode(117,117,105,100,112,114,111,102,95,102,95,51,55,0);
       let iconwatchnowP = String.fromCharCode(107,95,55,56,95,111,103,103,108,101,0);
      if (completea.length > 5) {
         iconsettingD /= Math.max(parseInt(`${iconsettingD}`), 5);
      }
      if (iconwatchnowP.length < completea.length) {
         iconwatchnowP = `${parseInt(`${iconsettingD}`) | 1}`;
      }
      if (completea.length < 2) {
         j_unlock5 += "2";
      }
      for (let a = 0; a < 3; a++) {
         indexz |= 3;
      }
      for (let t = 0; t < 1; t++) {
         iconwatchnowP = `${j_unlock5.length}`;
      }
      while (j_unlock5.length <= iconsettingD) {
          let other4 = 5;
          let progressd = String.fromCharCode(118,95,49,57,95,115,105,110,116,105,0);
         j_unlock5 += `${3 ^ parseInt(`${iconsettingD}`)}`;
         other4 <<= Math.min(4, Math.abs(progressd.length | other4));
         progressd = `${(progressd == String.fromCharCode(55,0) ? progressd.length : other4)}`;
         break;
      }
      iconmegaphone1 = `${penaltymatchicon8.length}`;
   while (iconmegaphone1.endsWith(`${penaltymatchicon8.length}`)) {
      penaltymatchicon8 = `${updates5.size}`;
      break;
   }
       let exampleimageK = false;
      while (exampleimageK || exampleimageK) {
         exampleimageK = exampleimageK || exampleimageK;
         break;
      }
         exampleimageK = (!exampleimageK ? exampleimageK : exampleimageK);
          let imagenomoredataQ = true;
         exampleimageK = !imagenomoredataQ;
      iconbellactiveZ += `${1 << (Math.min(1, placeholderX.length))}`;
      iconmegaphone1 += `${helperw.length >> (Math.min(Math.abs(2), 5))}`;
      placeholderX.push(1 | helperw.length);
   let brightnessZ = updates5.size <= 8464156;
   do {
      updates5 = new Map([[inactiveV, 3 << (Math.min(1, inactiveV.length))]]);
      if (brightnessZ) {
         break;
      }
   } while (brightnessZ && (!penaltymatchicon8.startsWith(`${updates5.size}`)));
      helperw += `${helperw.length * 2}`;
   let utilsd = penaltymatchicon8 == String.fromCharCode(104,55,48,98,105,110,0);
   do {
       let heart4: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,101,114,95,99,95,50,51,0),198], [String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,122,95,52,57,0),407]]);
       let usernamep = 2.0;
       let predictionbanner9 = String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,119,95,52,51,0);
       let textinputF = false;
      if (!textinputF && 3.28 == (2.26 * usernamep)) {
         usernamep *= parseFloat(`${predictionbanner9.length}`);
      }
         textinputF = usernamep > 74.76 && heart4.size > 96;
      let analyticsD = 8930617 >= heart4.size;
      do {
         heart4.set(predictionbanner9, 2 >> (Math.min(1, predictionbanner9.length)));
         if (analyticsD) {
            break;
         }
      } while (analyticsD && (1 < heart4.size));
         textinputF = 65.44 >= usernamep && textinputF;
      while (4.28 > (usernamep * parseFloat(`${heart4.size}`)) || 4.28 > (usernamep * parseFloat(`${heart4.size}`))) {
          let mailU = false;
          let signinupD = String.fromCharCode(116,114,101,110,100,108,105,110,101,95,102,95,53,57,0);
          let logov = String.fromCharCode(97,95,55,55,95,114,97,110,107,105,110,103,0);
         heart4 = new Map([[`${heart4.size}`, signinupD.length << (Math.min(3, Math.abs(heart4.size)))]]);
         mailU = logov.endsWith(`${mailU}`);
         signinupD = "3";
         logov = `${logov.length % 2}`;
         break;
      }
         textinputF = predictionbanner9 == String.fromCharCode(95,0) || 62.20 <= usernamep;
       let modeJ = 1;
         modeJ ^= 3 << (Math.min(3, Math.abs(heart4.size)));
       let iconbellactived = true;
       let stepy = true;
      while (stepy) {
         stepy = (heart4.size + parseInt(`${usernamep}`)) >= 29;
         break;
      }
      while (3 == (1 % (Math.max(5, modeJ))) && textinputF) {
          let unreadb: Array<any> = [759, 330];
          let goallogor = 5.0;
          let predictionactivey: Array<any> = [456, 345, 980];
         textinputF = ((unreadb.length + (!stepy ? unreadb.length : 55)) <= 55);
         goallogor -= 3 % (Math.max(parseInt(`${goallogor}`), 9));
         predictionactivey.push(parseInt(`${goallogor}`));
         break;
      }
         heart4.set(`${iconbellactived}`, ((stepy ? 2 : 3) - (iconbellactived ? 5 : 2)));
      penaltymatchicon8 += "1";
      if (utilsd) {
         break;
      }
   } while (utilsd && (1 > (placeholderX.length * 2)));
      helperw += `${updates5.size}`;
   let infoH = iconbellactiveZ.length >= 7201662;
   do {
      iconbellactiveZ += `${videocommonq % (Math.max(parseInt(`${refreshr}`), 4))}`;
      if (infoH) {
         break;
      }
   } while (infoH && (2 == (parseInt(`${refreshr}`) * 4) && 4 == (iconbellactiveZ.length / 4)));
       let frame_fpm = String.fromCharCode(112,95,52,57,95,114,97,100,98,103,0);
       let pingj = String.fromCharCode(117,95,49,51,95,97,98,115,100,105,102,102,0);
      for (let u = 0; u < 3; u++) {
         pingj += `${pingj.length - frame_fpm.length}`;
      }
         pingj += `${(frame_fpm == String.fromCharCode(89,0) ? frame_fpm.length : pingj.length)}`;
          let xvodH = String.fromCharCode(101,95,56,56,95,116,114,105,97,110,103,108,101,0);
         pingj += `${frame_fpm.length / (Math.max(2, 2))}`;
         xvodH = "1";
          let injuryA = 2;
          let predictionbannersharedZ = String.fromCharCode(114,101,112,108,97,99,101,100,95,54,95,49,50,0);
          let countryx = String.fromCharCode(109,95,52,50,95,101,108,101,109,101,110,116,115,0);
         frame_fpm += "3";
         injuryA <<= Math.min(4, Math.abs(2));
         predictionbannersharedZ += `${injuryA - 1}`;
         countryx += `${predictionbannersharedZ.length}`;
         frame_fpm += `${(String.fromCharCode(84,0) == frame_fpm ? frame_fpm.length : pingj.length)}`;
      let rightC = 5581371 <= pingj.length;
      do {
          let matchactivey = String.fromCharCode(99,97,108,108,111,117,116,95,101,95,57,51,0);
          let closer = 3.0;
          let countdownG: Array<any> = [251, 24, 16];
          let tickF = String.fromCharCode(106,95,52,51,95,100,112,110,97,109,101,0);
          let memberv = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,95,54,95,51,0);
         pingj = `${3 * countdownG.length}`;
         matchactivey += `${matchactivey.length}`;
         closer += matchactivey.length / (Math.max(9, memberv.length));
         countdownG = [memberv.length];
         tickF = `${parseInt(`${closer}`) ^ 1}`;
         if (rightC) {
            break;
         }
      } while (rightC && (!frame_fpm.includes(`${pingj.length}`)));
      videocommonq >>= Math.min(1, Math.abs(videocommonq - 1));
      refreshr /= Math.max(airbnbstarselected7.length, 4);
   while ((updates5.size % 5) < 2) {
       let borderlessb = false;
          let iconarrowrightblackq = true;
         borderlessb = !iconarrowrightblackq && !borderlessb;
      let iconplayE = borderlessb ? !borderlessb : borderlessb;
      do {
         borderlessb = borderlessb && borderlessb;
         if (iconplayE) {
            break;
         }
      } while ((!borderlessb) && iconplayE);
         borderlessb = !borderlessb;
      videocommonq |= updates5.size;
      break;
   }
      inactiveV = `${(String.fromCharCode(66,0) == helperw ? parseInt(`${refreshr}`) : helperw.length)}`;
    videoPlayerRef.current?.setPause(true);
  };

  const onCloseAdOverlay = () => {
       let mbbannerQ = String.fromCharCode(109,97,105,110,100,98,95,111,95,57,57,0);
    let short_rvQ: Array<any> = [436, 366];
    let typingloadingD = 3.0;
    let panglec: Array<any> = [828, 866];
    let middlebrightnessM: Array<any> = [725, 560, 14];
    let launcherz = String.fromCharCode(100,119,97,114,102,95,103,95,56,0);
    let icong = 5.0;
    let floaterI = 4.0;
    let iconqqi = String.fromCharCode(104,95,56,54,95,101,110,116,114,121,112,111,105,110,116,0);
    let tempnodatagif5 = 3;
    let stylesO: Map<any, any> = new Map([[String.fromCharCode(104,95,54,50,95,115,111,109,101,116,104,105,110,103,0),541], [String.fromCharCode(99,108,97,117,115,101,95,50,95,50,49,0),791]]);
    let distk = String.fromCharCode(102,95,50,51,95,117,112,108,111,97,100,97,98,108,101,0);
   if (!middlebrightnessM.includes(floaterI)) {
      middlebrightnessM.push(2 * parseInt(`${typingloadingD}`));
   }
       let gifgoalbg2 = String.fromCharCode(120,95,51,54,95,105,110,101,116,0);
       let textF = String.fromCharCode(106,95,49,56,95,116,101,115,116,98,114,105,100,103,101,0);
         gifgoalbg2 += "3";
       let downloaderl = String.fromCharCode(118,95,57,57,95,115,117,103,103,101,115,116,105,111,110,0);
       let klevinu = String.fromCharCode(114,101,99,117,114,115,105,118,101,95,54,95,55,48,0);
      if (!textF.startsWith(gifgoalbg2)) {
         gifgoalbg2 += `${(klevinu == String.fromCharCode(87,0) ? klevinu.length : downloaderl.length)}`;
      }
         klevinu = `${klevinu.length << (Math.min(1, downloaderl.length))}`;
       let libswscale5 = String.fromCharCode(99,111,110,99,117,114,114,101,110,116,95,98,95,57,52,0);
       let private_zI = String.fromCharCode(117,95,54,52,95,112,111,121,116,109,0);
          let statsq: Array<any> = [309, 679];
          let template_j66: Map<any, any> = new Map([[String.fromCharCode(113,95,52,49,95,115,116,114,105,110,103,115,0),89], [String.fromCharCode(109,101,109,109,103,114,95,108,95,52,50,0),61], [String.fromCharCode(98,97,108,97,110,99,101,115,95,49,95,54,54,0),157]]);
         textF += `${1 & template_j66.size}`;
         statsq = [statsq.length + 1];
         template_j66 = new Map([[`${statsq.length}`, statsq.length]]);
      launcherz += `${stylesO.size ^ tempnodatagif5}`;
       let progressv = 1.0;
       let ballA = 2.0;
      let rooma = ballA >= 4915812.0;
      do {
         ballA /= Math.max(2, 3);
         if (rooma) {
            break;
         }
      } while ((1.92 > (ballA - progressv) && 1.92 > (progressv - ballA)) && rooma);
      while ((progressv - ballA) >= 4.3) {
          let searchbark = 0.0;
         ballA -= parseInt(`${searchbark}`) * parseInt(`${progressv}`);
         break;
      }
      if ((2 - progressv) > 5.82) {
         ballA *= parseInt(`${progressv}`);
      }
         progressv *= 3 | parseInt(`${progressv}`);
      let subinX = 9017088.0 >= ballA;
      do {
         ballA *= parseInt(`${progressv}`);
         if (subinX) {
            break;
         }
      } while (subinX && (progressv <= ballA));
         ballA += parseInt(`${progressv}`) >> (Math.min(Math.abs(parseInt(`${ballA}`)), 1));
      stylesO = new Map([[`${panglec.length}`, 1 / (Math.max(5, panglec.length))]]);
   while (Array.from(stylesO.values()).includes(short_rvQ.length)) {
      short_rvQ.push(parseInt(`${typingloadingD}`));
      break;
   }
      iconqqi += `${iconqqi.length}`;
       let libfb0 = 0;
       let analyticso = 1.0;
       let recommendationF: Array<any> = [236, 689, 204];
      if ((4 | recommendationF.length) == 5 || (2.34 + analyticso) == 4.10) {
          let profile0 = String.fromCharCode(109,95,51,54,95,99,121,99,108,101,99,108,111,99,107,0);
          let umengY = String.fromCharCode(97,95,50,50,95,115,117,109,102,0);
         recommendationF.push(3 / (Math.max(2, libfb0)));
         profile0 += `${umengY.length / 3}`;
         umengY += "3";
      }
      if (libfb0 > 2) {
         recommendationF = [parseInt(`${analyticso}`)];
      }
         libfb0 <<= Math.min(2, Math.abs(parseInt(`${analyticso}`)));
      if (4 == (parseInt(`${analyticso}`) + libfb0) || (parseFloat(`${libfb0}`) + analyticso) == 2.20) {
          let defaultpredictionprofileo = 3.0;
          let exampleimageS: Array<any> = [764, 641];
          let eighteenk = String.fromCharCode(118,95,57,49,95,112,116,105,111,110,115,0);
          let grayq = String.fromCharCode(102,95,52,48,95,115,116,105,99,107,121,0);
         analyticso *= parseFloat(`${2 + eighteenk.length}`);
         defaultpredictionprofileo -= parseFloat(`${parseInt(`${defaultpredictionprofileo}`)}`);
         exampleimageS.push(2 << (Math.min(5, grayq.length)));
         eighteenk += "2";
         grayq += `${grayq.length}`;
      }
      for (let o = 0; o < 2; o++) {
         recommendationF = [parseInt(`${analyticso}`) << (Math.min(2, Math.abs(libfb0)))];
      }
      tempnodatagif5 ^= 3;
      middlebrightnessM.push(launcherz.length);
   let profileinactiveb = 6782580 <= stylesO.size;
   do {
      stylesO = new Map([[`${short_rvQ.length}`, short_rvQ.length & 3]]);
      if (profileinactiveb) {
         break;
      }
   } while (profileinactiveb && (stylesO.get(`${panglec.length}`) != null));
       let upgradeo = String.fromCharCode(113,95,50,51,95,115,119,105,102,116,0);
         upgradeo = `${(String.fromCharCode(116,0) == upgradeo ? upgradeo.length : upgradeo.length)}`;
          let nativemodule3: Map<any, any> = new Map([[String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,112,95,51,49,0),582], [String.fromCharCode(121,95,53,48,95,111,98,106,101,99,116,0),461], [String.fromCharCode(121,95,54,95,108,117,109,98,101,114,106,97,99,107,0),88]]);
          let description_ix = String.fromCharCode(101,100,105,116,111,114,95,118,95,53,56,0);
          let ccdfbdabcabbbedbd: Array<any> = [601, 829, 122];
         upgradeo += `${(String.fromCharCode(80,0) == upgradeo ? upgradeo.length : ccdfbdabcabbbedbd.length)}`;
         nativemodule3.set(`${description_ix}`, nativemodule3.size);
         description_ix = "1";
         ccdfbdabcabbbedbd = [3];
       let owngoalU = true;
      icong += parseFloat(`${parseInt(`${icong}`)}`);
   for (let v = 0; v < 2; v++) {
      middlebrightnessM.push(parseInt(`${icong}`) ^ mbbannerQ.length);
   }
       let network0 = String.fromCharCode(97,110,103,114,121,95,49,95,51,57,0);
       let acceptedl = String.fromCharCode(122,95,50,56,0);
       let searchbars = String.fromCharCode(111,99,99,117,112,105,101,100,95,56,95,57,55,0);
       let bufferc = 5.0;
      while (4 < (1 >> (Math.min(5, network0.length))) || 5.14 < (3.73 * bufferc)) {
         network0 = `${3 * network0.length}`;
         break;
      }
          let nodeR = String.fromCharCode(103,97,116,104,101,114,95,121,95,55,48,0);
          let b_centerj = 0;
          let statisticsinactiveX = String.fromCharCode(110,101,103,97,116,101,95,116,95,51,55,0);
         bufferc /= Math.max(3, parseFloat(`${3 | parseInt(`${bufferc}`)}`));
         nodeR = `${b_centerj}`;
         b_centerj >>= Math.min(2, Math.abs(2));
         statisticsinactiveX += `${nodeR.length - 2}`;
       let elementsA: Map<any, any> = new Map([[String.fromCharCode(111,95,53,55,95,98,121,112,97,115,115,105,110,103,0),true ], [String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,49,95,56,52,0),false ], [String.fromCharCode(120,95,55,95,117,110,107,110,111,119,110,115,0),true ]]);
       let singaporej: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,105,110,103,95,118,95,55,50,0),true ], [String.fromCharCode(100,95,53,52,95,105,99,111,110,115,0),true ], [String.fromCharCode(117,105,110,116,112,111,119,95,119,95,57,50,0),true ]]);
         network0 += `${elementsA.size}`;
      for (let o = 0; o < 1; o++) {
          let smallbrightnessn = 1;
          let eighteenH: Map<any, any> = new Map([[String.fromCharCode(102,95,49,55,95,114,116,109,100,0),742], [String.fromCharCode(105,95,55,54,95,102,117,122,122,121,0),962], [String.fromCharCode(106,95,57,95,99,102,116,115,116,0),762]]);
          let iconadslinkp = String.fromCharCode(97,112,105,95,100,95,52,0);
         searchbars += "1";
         smallbrightnessn -= iconadslinkp.length * 1;
         eighteenH.set(`${smallbrightnessn}`, smallbrightnessn >> (Math.min(iconadslinkp.length, 5)));
      }
         network0 += `${acceptedl.length}`;
          let catagory0 = String.fromCharCode(98,97,99,107,115,108,97,115,104,95,53,95,49,50,0);
          let chinaL = String.fromCharCode(108,111,110,103,101,114,95,52,95,49,57,0);
          let acceptedn: Map<any, any> = new Map([[String.fromCharCode(107,95,55,95,109,101,97,115,117,114,101,0),String.fromCharCode(112,95,51,48,95,97,114,103,115,0)], [String.fromCharCode(107,95,55,55,95,102,119,104,116,0),String.fromCharCode(102,114,97,109,101,95,113,95,50,49,0)]]);
         acceptedl = `${network0.length % (Math.max(9, acceptedl.length))}`;
         catagory0 += `${(chinaL == String.fromCharCode(76,0) ? chinaL.length : acceptedn.size)}`;
         acceptedn.set(catagory0, (String.fromCharCode(103,0) == catagory0 ? catagory0.length : chinaL.length));
      for (let x = 0; x < 1; x++) {
         elementsA = new Map([[`${elementsA.size}`, elementsA.size]]);
      }
      typingloadingD += 2;
   let neon7 = 7450428 <= short_rvQ.length;
   do {
      short_rvQ = [parseInt(`${typingloadingD}`) | 1];
      if (neon7) {
         break;
      }
   } while (neon7 && (1 < (launcherz.length >> (Math.min(4, short_rvQ.length))) || 4 < (1 >> (Math.min(5, short_rvQ.length)))));
   if (!Array.from(stylesO.keys()).includes(`${tempnodatagif5}`)) {
       let changeP = false;
       let qaagd = 3.0;
       let stringU = true;
       let iconlogoutd = String.fromCharCode(118,95,54,53,95,112,114,111,109,105,115,101,115,0);
         changeP = !changeP && 80.48 >= qaagd;
      while (iconlogoutd.length == 1) {
          let l_lockd = 1.0;
          let imagenetworkerrp = false;
         iconlogoutd = `${parseInt(`${qaagd}`)}`;
         l_lockd *= (parseFloat(`${parseInt(`${l_lockd}`) * (imagenetworkerrp ? 5 : 3)}`));
         imagenetworkerrp = l_lockd <= 92.83;
         break;
      }
         stringU = changeP;
          let assetsw = 0;
         stringU = !iconlogoutd.startsWith(`${changeP}`);
         assetsw *= assetsw;
      while (3 <= iconlogoutd.length) {
         stringU = 17.33 > qaagd;
         break;
      }
         qaagd *= (parseFloat(`${(changeP ? 4 : 5)}`));
       let b_center2: Map<any, any> = new Map([[String.fromCharCode(118,112,108,97,121,101,114,95,105,95,52,55,0),811], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,56,95,57,48,0),230], [String.fromCharCode(97,95,54,56,95,110,117,109,101,114,111,0),201]]);
       let countdownw: Map<any, any> = new Map([[String.fromCharCode(108,108,97,117,100,100,115,112,95,97,95,50,51,0),476], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,97,95,56,0),130], [String.fromCharCode(112,114,105,118,97,99,121,95,117,95,57,56,0),810]]);
      let chatbotphotoz = 5794746.0 >= qaagd;
      do {
         qaagd -= (parseFloat(`${parseInt(`${qaagd}`) & (changeP ? 2 : 1)}`));
         if (chatbotphotoz) {
            break;
         }
      } while (chatbotphotoz && ((qaagd - 5.14) > 4.44 && 5.14 > qaagd));
       let modelw = String.fromCharCode(97,110,105,109,95,55,95,51,54,0);
       let scheduleW = String.fromCharCode(97,114,103,98,95,103,95,55,54,0);
      if (5 >= countdownw.size) {
         countdownw = new Map([[`${changeP}`, ((changeP ? 1 : 5) - 2)]]);
      }
      if (5.97 < (qaagd / (Math.max(parseFloat(`${b_center2.size}`), 3)))) {
         b_center2 = new Map([[`${b_center2.size}`, b_center2.size / 1]]);
      }
       let infoV = String.fromCharCode(99,111,108,108,101,116,105,111,110,95,99,95,49,57,0);
      stylesO.set(`${typingloadingD}`, parseInt(`${icong}`) / (Math.max(1, parseInt(`${typingloadingD}`))));
   }
      middlebrightnessM = [tempnodatagif5 | parseInt(`${typingloadingD}`)];
      icong *= parseFloat(`${middlebrightnessM.length | parseInt(`${typingloadingD}`)}`);
   for (let u = 0; u < 2; u++) {
      stylesO.set(iconqqi, 2);
   }
   let formn = stylesO.size >= 9898575;
   do {
       let positionfield4 = String.fromCharCode(108,105,110,107,115,95,109,95,57,51,0);
       let iconshare2 = 0.0;
       let pressureV: Map<any, any> = new Map([[String.fromCharCode(100,115,109,111,116,105,111,110,95,112,95,57,57,0),10], [String.fromCharCode(120,99,116,101,115,116,95,56,95,51,55,0),343], [String.fromCharCode(117,95,49,48,95,116,114,97,99,107,115,0),180]]);
       let libyoga3: Map<any, any> = new Map([[String.fromCharCode(104,95,55,54,95,112,108,97,110,97,114,116,111,121,117,121,0),753], [String.fromCharCode(109,95,53,51,95,120,109,108,0),140], [String.fromCharCode(106,99,111,108,115,97,109,112,95,100,95,53,48,0),977]]);
         iconshare2 /= Math.max(1, 2 << (Math.min(4, Math.abs(pressureV.size))));
         positionfield4 = `${pressureV.size - 3}`;
          let emojic = 3.0;
          let gifgoalbg7 = 3;
          let awayiconh = String.fromCharCode(98,105,116,114,118,99,111,110,106,95,103,95,51,49,0);
         libyoga3.set(positionfield4, 3);
         emojic /= Math.max(parseFloat(`${gifgoalbg7 ^ 3}`), 2);
         gifgoalbg7 <<= Math.min(2, Math.abs(parseInt(`${emojic}`) + 3));
         awayiconh += "1";
      if ((pressureV.size | positionfield4.length) <= 3 && (3 | pressureV.size) <= 3) {
         pressureV = new Map([[`${iconshare2}`, parseInt(`${iconshare2}`) ^ positionfield4.length]]);
      }
      while (Array.from(libyoga3.values()).includes(iconshare2)) {
          let predictiondefaultz = String.fromCharCode(114,101,102,99,111,117,110,116,101,114,95,102,95,49,0);
          let leaguew = String.fromCharCode(97,95,51,95,112,114,111,112,101,114,116,105,101,115,0);
          let roomz = String.fromCharCode(100,116,109,102,95,106,95,51,53,0);
          let iconclosewhitewithbgm = 1;
          let dnewinterstitial6 = String.fromCharCode(109,117,110,109,97,112,95,119,95,55,54,0);
         libyoga3.set(dnewinterstitial6, dnewinterstitial6.length ^ 1);
         predictiondefaultz += `${iconclosewhitewithbgm}`;
         leaguew += `${iconclosewhitewithbgm}`;
         roomz = `${roomz.length}`;
         break;
      }
          let gradleQ = String.fromCharCode(107,95,55,56,95,115,113,108,105,116,101,112,97,103,101,114,0);
          let arrowrightwithtailk = 4.0;
          let controlq: Array<any> = [852, 406, 397];
         pressureV.set(gradleQ, gradleQ.length);
         arrowrightwithtailk -= parseFloat(`${controlq.length + 2}`);
         controlq.push(parseInt(`${arrowrightwithtailk}`) & 3);
      while (3 < (libyoga3.size & 4) || (libyoga3.size & pressureV.size) < 4) {
          let reducerA = String.fromCharCode(117,95,55,48,95,117,110,114,101,108,105,97,98,108,101,0);
         pressureV.set(reducerA, reducerA.length + 3);
         break;
      }
      for (let w = 0; w < 3; w++) {
         positionfield4 += `${3 + parseInt(`${iconshare2}`)}`;
      }
          let iconwatchnowo = String.fromCharCode(119,114,105,116,101,105,110,105,116,95,109,95,54,50,0);
         iconshare2 += 2;
         iconwatchnowo = `${(String.fromCharCode(87,0) == iconwatchnowo ? iconwatchnowo.length : iconwatchnowo.length)}`;
      while (pressureV.get(`${libyoga3.size}`) != null) {
          let completef = 4.0;
          let hookv = String.fromCharCode(113,95,49,51,95,112,114,105,109,101,114,0);
          let pingp = 0.0;
         pressureV = new Map([[`${libyoga3.size}`, 3 | libyoga3.size]]);
         completef += hookv.length & 1;
         hookv += `${2 / (Math.max(5, parseInt(`${pingp}`)))}`;
         pingp -= parseFloat(`${hookv.length ^ parseInt(`${pingp}`)}`);
         break;
      }
          let basketballd: Array<any> = [673, 698, 394];
          let leaguedetailsbgS = false;
         iconshare2 /= Math.max(2, basketballd.length);
         basketballd = [(2 + (leaguedetailsbgS ? 1 : 2))];
          let watche = String.fromCharCode(115,112,101,101,120,95,116,95,52,55,0);
          let alertM = 1.0;
          let awayiconG = 0;
         pressureV = new Map([[`${pressureV.size}`, pressureV.size % 3]]);
         watche = `${watche.length ^ 1}`;
         alertM += watche.length >> (Math.min(3, Math.abs(awayiconG)));
         awayiconG >>= Math.min(Math.abs(2 + parseInt(`${alertM}`)), 1);
      stylesO.set(mbbannerQ, launcherz.length);
      if (formn) {
         break;
      }
   } while (formn && (launcherz.length >= 5));
       let nativec = false;
         nativec = (nativec ? !nativec : !nativec);
       let assistn = String.fromCharCode(114,95,52,53,95,103,114,97,121,114,103,98,0);
      if (!nativec) {
         nativec = (40 > ((!nativec ? assistn.length : 40) % (Math.max(assistn.length, 1))));
      }
      stylesO = new Map([[`${stylesO.size}`, short_rvQ.length]]);

    setShowAdOverlay(false);

   if ((middlebrightnessM.length & launcherz.length) == 3 || (middlebrightnessM.length & launcherz.length) == 3) {
       let mimes: Array<any> = [116, 135];
       let orangedownarrowq: Map<any, any> = new Map([[String.fromCharCode(111,117,98,108,101,95,113,95,54,56,0),837], [String.fromCharCode(109,95,54,50,95,115,110,97,112,115,104,111,116,116,101,114,0),570], [String.fromCharCode(108,111,110,103,101,114,95,117,95,51,57,0),928]]);
       let minix = 3.0;
         orangedownarrowq.set(`${minix}`, 1 * orangedownarrowq.size);
         mimes = [parseInt(`${minix}`) >> (Math.min(mimes.length, 2))];
      while (4.72 > (minix + 1.44) || 1.74 > (1.44 + minix)) {
          let applicationG = false;
         minix *= parseFloat(`${3 + mimes.length}`);
         applicationG = (!applicationG ? !applicationG : !applicationG);
         break;
      }
      if ((2.51 * minix) == 5.41 && 5.62 == (minix * 2.51)) {
         minix -= parseFloat(`${1}`);
      }
      for (let e = 0; e < 1; e++) {
          let pushx = String.fromCharCode(100,105,114,97,99,100,115,112,95,122,95,51,55,0);
          let componentsA = 2.0;
          let blackV = 1.0;
          let predictionbuttonk = String.fromCharCode(114,111,117,116,101,95,113,95,56,51,0);
          let chatQ = 4.0;
         mimes.push(parseInt(`${minix}`));
         pushx += `${parseInt(`${blackV}`) & 2}`;
         componentsA *= parseFloat(`${predictionbuttonk.length}`);
         blackV -= (parseFloat(`${String.fromCharCode(120,0) == predictionbuttonk ? parseInt(`${chatQ}`) : predictionbuttonk.length}`));
         chatQ *= 3;
      }
         orangedownarrowq = new Map([[`${orangedownarrowq.size}`, 2 << (Math.min(2, Math.abs(orangedownarrowq.size)))]]);
      for (let h = 0; h < 1; h++) {
         mimes.push(mimes.length);
      }
      while (mimes.length <= orangedownarrowq.size) {
         mimes = [parseInt(`${minix}`)];
         break;
      }
         mimes = [1];
      launcherz = `${parseInt(`${typingloadingD}`)}`;
   }
       let plusU = String.fromCharCode(101,95,49,51,95,119,97,107,101,117,112,0);
       let ying4: Array<any> = [280, 329, 460];
       let package_e_e = 3.0;
      while (ying4.includes(package_e_e)) {
         ying4 = [plusU.length >> (Math.min(2, Math.abs(parseInt(`${package_e_e}`))))];
         break;
      }
      for (let k = 0; k < 1; k++) {
         ying4 = [1];
      }
          let ballT = String.fromCharCode(105,95,56,50,95,99,111,108,108,97,116,105,111,110,0);
         package_e_e *= parseFloat(`${parseInt(`${package_e_e}`) + 3}`);
         ballT = `${ballT.length & 3}`;
       let pressurem = String.fromCharCode(106,95,51,54,95,114,103,98,112,108,117,115,0);
       let dragi = String.fromCharCode(98,95,54,51,95,100,99,97,101,110,99,0);
      let assetsE = String.fromCharCode(107,50,106,106,102,110,121,54,107,0) == plusU;
      do {
         plusU = `${pressurem.length & ying4.length}`;
         if (assetsE) {
            break;
         }
      } while (((plusU.length % 1) <= 5) && assetsE);
          let attributedstringQ = String.fromCharCode(113,95,52,56,95,115,116,100,0);
          let desc4 = String.fromCharCode(111,95,57,50,95,118,101,114,121,0);
          let mbridge6: Array<any> = [String.fromCharCode(120,95,52,48,95,117,114,97,110,100,111,109,0), String.fromCharCode(115,116,97,114,116,101,100,95,103,95,57,53,0)];
         package_e_e += parseFloat(`${1 * attributedstringQ.length}`);
         attributedstringQ += `${desc4.length}`;
         desc4 = `${mbridge6.length / (Math.max(3, desc4.length))}`;
         mbridge6 = [mbridge6.length / (Math.max(3, 5))];
         plusU = "1";
      while (plusU.endsWith(`${ying4.length}`)) {
          let formO = String.fromCharCode(109,95,56,57,95,102,105,110,101,0);
          let classes1 = false;
          let cricketV = 0.0;
         plusU = `${(parseInt(`${cricketV}`) * (classes1 ? 2 : 3))}`;
         formO = `${1 * formO.length}`;
         classes1 = 34 <= formO.length && formO == String.fromCharCode(110,0);
         break;
      }
      let unimplementedview2 = String.fromCharCode(54,120,101,53,98,0) == dragi;
      do {
         dragi = `${plusU.length ^ 1}`;
         if (unimplementedview2) {
            break;
         }
      } while ((plusU == dragi) && unimplementedview2);
      launcherz = `${middlebrightnessM.length}`;
   if (1 > (3 / (Math.max(9, parseInt(`${floaterI}`)))) || 2.22 > (floaterI / (Math.max(iconqqi.length, 2)))) {
       let defaultprofilepicw = 4.0;
       let downb = String.fromCharCode(97,109,112,108,105,102,121,95,107,95,54,51,0);
       let typingloadingW = 4;
       let whiteanimationlivep = 4;
          let libmapbufferjniK = String.fromCharCode(117,95,56,56,95,102,105,101,108,100,0);
          let bgvipsportD: Array<any> = [String.fromCharCode(98,95,51,52,95,97,110,110,111,116,97,116,105,111,110,115,0), String.fromCharCode(100,95,52,54,95,105,110,116,114,105,110,0)];
          let n_imagex = String.fromCharCode(98,95,54,48,95,108,100,105,115,116,0);
         downb = `${(String.fromCharCode(69,0) == downb ? parseInt(`${defaultprofilepicw}`) : downb.length)}`;
         libmapbufferjniK = "1";
         bgvipsportD = [n_imagex.length];
         n_imagex += `${bgvipsportD.length & 2}`;
          let submitO: Map<any, any> = new Map([[String.fromCharCode(118,95,53,55,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0),false ], [String.fromCharCode(115,116,114,105,100,105,110,103,95,53,95,49,54,0),true ]]);
          let yingl = String.fromCharCode(108,95,49,48,48,95,105,110,116,114,97,120,109,98,117,118,0);
          let forwardb: Array<any> = [671, 688, 26];
         downb += `${forwardb.length}`;
         submitO.set(`${yingl}`, submitO.size);
         yingl = "3";
         forwardb = [submitO.size];
      if ((typingloadingW + whiteanimationlivep) == 5 && 2 == (5 + whiteanimationlivep)) {
         typingloadingW += 2;
      }
      for (let g = 0; g < 1; g++) {
         typingloadingW *= downb.length << (Math.min(Math.abs(1), 5));
      }
       let xvodU = 5.0;
      if ((4.34 + defaultprofilepicw) <= 5.10) {
         whiteanimationlivep %= Math.max(1, typingloadingW / (Math.max(downb.length, 5)));
      }
       let orangetickA = String.fromCharCode(122,95,52,53,95,99,112,111,115,0);
      let regeng5 = downb.length <= 9668566;
      do {
          let miniz = String.fromCharCode(105,95,51,53,95,105,111,115,117,114,102,97,99,101,0);
          let valuesO = String.fromCharCode(97,95,52,50,95,101,97,114,108,121,0);
          let refreshborderlessE = 3.0;
          let utilsA = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,121,95,55,50,0);
          let typingu = 4;
         downb += `${2 + orangetickA.length}`;
         miniz += `${typingu % 1}`;
         valuesO = `${miniz.length}`;
         refreshborderlessE /= Math.max(5, valuesO.length ^ 3);
         utilsA += `${3 | miniz.length}`;
         typingu <<= Math.min(Math.abs(miniz.length + valuesO.length), 5);
         if (regeng5) {
            break;
         }
      } while (regeng5 && ((2 << (Math.min(5, downb.length))) == 5));
      let penaltyw = orangetickA == String.fromCharCode(99,50,100,108,113,120,104,106,0);
      do {
         orangetickA += `${orangetickA.length}`;
         if (penaltyw) {
            break;
         }
      } while ((orangetickA.length == parseInt(`${defaultprofilepicw}`)) && penaltyw);
      for (let n = 0; n < 1; n++) {
         whiteanimationlivep &= parseInt(`${xvodU}`) | whiteanimationlivep;
      }
          let renderA = String.fromCharCode(111,95,50,53,95,117,110,97,118,97,105,108,97,98,108,101,0);
         typingloadingW |= typingloadingW << (Math.min(Math.abs(3), 4));
         renderA = `${3 | renderA.length}`;
          let iconmoreL = String.fromCharCode(109,101,109,97,108,105,103,110,95,121,95,55,57,0);
         whiteanimationlivep %= Math.max(5, iconmoreL.length);
      floaterI /= Math.max(3, 5);
   }
   for (let c = 0; c < 2; c++) {
      typingloadingD *= stylesO.size;
   }
      short_rvQ = [parseInt(`${typingloadingD}`) + tempnodatagif5];
       let predictionbannershared2 = false;
       let refreshR = String.fromCharCode(115,95,52,54,95,115,97,108,116,0);
      let armvaw = 8224842 <= refreshR.length;
      do {
         refreshR += `${((predictionbannershared2 ? 2 : 5) + 1)}`;
         if (armvaw) {
            break;
         }
      } while ((predictionbannershared2) && armvaw);
          let topicX = true;
          let mbbannerG = String.fromCharCode(99,95,55,56,95,115,117,98,114,97,110,103,101,0);
          let actionN = String.fromCharCode(97,95,55,52,95,114,101,97,114,0);
         refreshR += `${actionN.length}`;
         topicX = !topicX || mbbannerG.length <= 14;
         mbbannerG += "2";
         actionN += `${1 % (Math.max(7, mbbannerG.length))}`;
      while (refreshR.endsWith(`${predictionbannershared2}`)) {
          let imagewatchliveF = String.fromCharCode(99,95,49,55,95,100,99,115,116,114,0);
         predictionbannershared2 = refreshR.length >= imagewatchliveF.length;
         break;
      }
         refreshR += `${((predictionbannershared2 ? 5 : 2) | refreshR.length)}`;
          let rncoreA: Array<any> = [String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,95,50,95,49,50,0), String.fromCharCode(97,95,53,53,95,97,114,103,98,0)];
          let rootv = String.fromCharCode(100,105,97,108,111,103,117,101,115,95,120,95,57,52,0);
         refreshR += "2";
         rncoreA.push(rncoreA.length);
         rootv += `${rncoreA.length + 3}`;
         predictionbannershared2 = !predictionbannershared2;
      panglec = [middlebrightnessM.length * 1];
   let iconarrowrightorangem = String.fromCharCode(51,112,117,119,50,105,115,53,117,122,0) == launcherz;
   do {
      launcherz = "1";
      if (iconarrowrightorangem) {
         break;
      }
   } while ((launcherz.includes(`${distk.length}`)) && iconarrowrightorangem);
      middlebrightnessM = [2];
   let loginF = stylesO.size <= 9643921;
   do {
      stylesO = new Map([[`${middlebrightnessM.length}`, 2 % (Math.max(8, middlebrightnessM.length))]]);
      if (loginF) {
         break;
      }
   } while ((stylesO.size >= mbbannerQ.length) && loginF);
   let turndownV = 6875980.0 <= floaterI;
   do {
       let iconmegaphone_ = true;
       let material3 = 3.0;
      if (5.12 >= material3) {
         material3 /= Math.max(4, parseFloat(`${2 | parseInt(`${material3}`)}`));
      }
         iconmegaphone_ = 39.1 < material3;
       let mbridgel: Array<any> = [566, 858, 943];
       let paginationx: Array<any> = [823, 936, 343];
          let predictionarrowH = String.fromCharCode(97,95,49,95,111,98,115,101,114,118,101,0);
          let acceptedM = 4;
          let bannerT: Map<any, any> = new Map([[String.fromCharCode(101,95,49,95,114,116,99,99,0),724], [String.fromCharCode(102,102,118,108,95,100,95,51,53,0),71], [String.fromCharCode(115,101,99,116,111,114,95,56,95,52,52,0),28]]);
         material3 += parseFloat(`${2 | parseInt(`${material3}`)}`);
         predictionarrowH += `${acceptedM / (Math.max(bannerT.size, 3))}`;
         acceptedM |= acceptedM;
         bannerT.set(predictionarrowH, 1);
          let clearK = 4.0;
          let changef = true;
          let mbbannert = String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,57,95,57,51,0);
         mbridgel = [2];
         clearK /= Math.max(parseFloat(`${mbbannert.length}`), 2);
         changef = mbbannert.includes(`${changef}`);
       let security9 = true;
      floaterI += parseInt(`${typingloadingD}`) ^ parseInt(`${icong}`);
      if (turndownV) {
         break;
      }
   } while ((!distk.startsWith(`${floaterI}`)) && turndownV);
   for (let b = 0; b < 2; b++) {
      stylesO.set(`${distk}`, 1);
   }
      typingloadingD += middlebrightnessM.length / (Math.max(launcherz.length, 5));
   while (2 == (tempnodatagif5 - launcherz.length)) {
       let next4 = String.fromCharCode(115,116,114,105,112,95,117,95,54,49,0);
       let carouselN = 0.0;
       let condensedH = String.fromCharCode(117,95,55,55,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0);
      if ((next4.length - 3) == 3 && (parseInt(`${carouselN}`) + next4.length) == 3) {
         carouselN -= parseFloat(`${2 ^ parseInt(`${carouselN}`)}`);
      }
      for (let s = 0; s < 2; s++) {
          let loadingspinnerp: Array<any> = [269, 56, 852];
          let mathx: Map<any, any> = new Map([[String.fromCharCode(102,95,55,55,95,97,114,116,105,115,0),393], [String.fromCharCode(112,95,51,95,97,110,115,119,101,114,0),175]]);
          let tooltipsn = String.fromCharCode(110,95,57,55,95,99,111,110,115,111,108,101,0);
          let a_unlockh = true;
          let downloadedk: Array<any> = [903, 49];
         condensedH = `${loadingspinnerp.length % 3}`;
         loadingspinnerp.push(((a_unlockh ? 3 : 2)));
         mathx.set(`${a_unlockh}`, ((a_unlockh ? 4 : 3) << (Math.min(Math.abs(mathx.size), 1))));
         tooltipsn = "2";
         downloadedk = [downloadedk.length];
      }
          let gemfileR: Array<any> = [474, 928, 810];
          let basketballmatchdetailbgp = String.fromCharCode(115,110,97,107,101,95,116,95,54,55,0);
          let rocketN = String.fromCharCode(110,95,53,56,95,114,101,112,101,97,116,101,114,0);
         next4 += "3";
         gemfileR.push((rocketN == String.fromCharCode(75,0) ? rocketN.length : basketballmatchdetailbgp.length));
         basketballmatchdetailbgp = `${rocketN.length}`;
      if (!next4.endsWith(`${carouselN}`)) {
         next4 += `${next4.length >> (Math.min(1, Math.abs(parseInt(`${carouselN}`))))}`;
      }
         next4 = `${parseInt(`${carouselN}`)}`;
         carouselN *= parseFloat(`${3 >> (Math.min(4, next4.length))}`);
      let condenseda = condensedH == String.fromCharCode(99,100,118,116,50,117,114,51,0);
      do {
         condensedH = "3";
         if (condenseda) {
            break;
         }
      } while ((5 > (condensedH.length + parseInt(`${carouselN}`)) && 4.1 > (parseFloat(`${condensedH.length}`) + carouselN)) && condenseda);
      for (let k = 0; k < 1; k++) {
         next4 += `${(condensedH == String.fromCharCode(87,0) ? condensedH.length : parseInt(`${carouselN}`))}`;
      }
      while (2 > (5 << (Math.min(5, condensedH.length)))) {
          let resultd = 5.0;
         carouselN += parseFloat(`${1 % (Math.max(9, parseInt(`${resultd}`)))}`);
         break;
      }
      launcherz += `${stylesO.size}`;
      break;
   }
       let hookR: Map<any, any> = new Map([[String.fromCharCode(112,99,98,105,110,102,111,95,101,95,54,49,0),170], [String.fromCharCode(117,95,55,57,95,108,97,110,103,0),708]]);
       let photoB: Array<any> = [String.fromCharCode(114,101,109,101,109,98,101,114,95,109,95,53,0), String.fromCharCode(99,113,117,101,117,101,95,105,95,54,51,0)];
       let controlsQ = String.fromCharCode(99,111,110,118,111,108,118,101,95,52,95,49,51,0);
      for (let v = 0; v < 2; v++) {
         photoB.push(2 + photoB.length);
      }
         hookR.set(controlsQ, controlsQ.length ^ 1);
         controlsQ = `${hookR.size * photoB.length}`;
          let weibox = String.fromCharCode(115,116,100,97,116,111,109,105,99,95,106,95,55,51,0);
          let leaguedetailsbgo: Array<any> = [String.fromCharCode(100,95,50,51,95,97,117,120,105,108,105,97,114,121,0), String.fromCharCode(109,117,108,116,105,115,105,103,95,50,95,51,50,0)];
         controlsQ = `${weibox.length}`;
         weibox = `${leaguedetailsbgo.length}`;
         leaguedetailsbgo = [3 ^ leaguedetailsbgo.length];
      let cancelt = String.fromCharCode(54,114,49,118,119,0) == controlsQ;
      do {
          let homeactiveJ = String.fromCharCode(116,95,54,50,95,105,109,112,108,105,99,105,116,108,121,0);
          let sigmobs = String.fromCharCode(115,104,97,114,112,101,110,95,103,95,57,52,0);
         controlsQ = `${3 << (Math.min(3, controlsQ.length))}`;
         homeactiveJ += `${homeactiveJ.length / 2}`;
         sigmobs += `${homeactiveJ.length >> (Math.min(Math.abs(1), 1))}`;
         if (cancelt) {
            break;
         }
      } while (((controlsQ.length / (Math.max(4, 6))) > 5 || 4 > (photoB.length / (Math.max(controlsQ.length, 4)))) && cancelt);
          let iconarrowrightorangeC = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,52,95,52,57,0);
          let baselineP = String.fromCharCode(100,95,49,55,95,101,110,117,109,101,114,97,116,105,111,110,0);
          let crown8 = String.fromCharCode(110,95,53,56,95,97,110,115,105,0);
         photoB.push(3 << (Math.min(2, baselineP.length)));
         iconarrowrightorangeC += `${crown8.length}`;
         baselineP += `${3 ^ crown8.length}`;
         hookR.set(controlsQ, 2);
      let twitterV = photoB.length >= 6924454;
      do {
         photoB = [photoB.length];
         if (twitterV) {
            break;
         }
      } while (twitterV && ((2 - controlsQ.length) >= 1));
         hookR = new Map([[`${hookR.size}`, photoB.length]]);
      icong -= parseFloat(`${parseInt(`${typingloadingD}`) / 1}`);
   if ((distk.length >> (Math.min(Math.abs(4), 2))) == 1) {
      distk += `${parseInt(`${typingloadingD}`) * 2}`;
   }
      middlebrightnessM = [launcherz.length];
       let becomei = 2;
      while (1 >= (3 | becomei)) {
         becomei <<= Math.min(3, Math.abs(becomei << (Math.min(1, Math.abs(becomei)))));
         break;
      }
          let themed = String.fromCharCode(114,97,108,102,95,113,95,52,55,0);
          let mbjscommonp = 3.0;
         becomei *= parseInt(`${mbjscommonp}`);
         themed += `${themed.length}`;
         mbjscommonp -= parseFloat(`${themed.length - 3}`);
      while ((becomei | 3) > 1) {
         becomei -= becomei - 1;
         break;
      }
      distk = "2";
   if (short_rvQ.length >= iconqqi.length) {
      short_rvQ = [distk.length & mbbannerQ.length];
   }
    videoPlayerRef.current?.setPause(false);
  };

  const isEpisodeDownloaded = adultMode ? downloadedVod?.episodes.find(x => x.vodUrlNid === currentEpisode)?.status === IConfirmationLibffmpegkit.IPointStar : downloadedVod?.episodes.find(x => x.vodSourceId === currentSourceId && x.vodUrlNid === currentEpisode)?.status === IConfirmationLibffmpegkit.IPointStar

  return (
    <>
      <ScreenContainer
        isPlay={true}
        containerStyle={{
          paddingTop: screenState.isPlayerFullScreen ? 0 : insetsTop,
          paddingBottom: screenState.isPlayerFullScreen ? 0 : insetsBottom,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        {/* {isLoading && (
          <View
            style={{
              width: '100%',
              aspectRatio: 16 / 9,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          >
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require('../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
              resizeMode={'contain'}
            />
          </View>
        )} */}
        { }
        {isVodRestricted && vod && !isOffline && <BingSearch vod={vod} />}

        {!isVodRestricted && !dismountPlayer && !(isOffline && !episode) && (
          <VodPlayer
            key={vodUri} 
            vod_url={vodUri}
            ref={videoPlayerRef}
            currentTimeRef={currentTimeRef}
            initialStartTime={initTime}
            vodTitle={vodPlayerTitle}
            videoType="vod"
            activeEpisode={currentEpisode}
            episodes={foundSource}
            onEpisodeChange={(id: number) => {
              setCurrentEpisode(id);
              currentEpisodeRef.current = id;
              currentTimeRef.current = 0;
            }}
            showGuide={settingsReducer.showVodPlayerGuide}
            rangeSize={EPISODE_RANGE_SIZE}
            autoPlayNext={vod?.type_id !== 2}
            onShare={onShare}
            movieList={vod?.type_id === 2 ? suggestedVods : []}
            showMoreType={vod?.type_id === 2 ? "movies" : "newinterstitialGraphicsTyping"}
            isFetchingRecommendedMovies={isFetchingSuggestedVod}
            appOrientation={settingsReducer.appOrientation}
            devicesOrientation={settingsReducer.devicesOrientation}
            lockOrientation={lockOrientation}
            handleSaveVod={() => saveVodToHistory(vod)}
            
            onReadyForDisplay={onReadyForDisplay}
            showAds={true}
            onPressCountdown={onPressCountdown}
            vodID={vod?.vod_id}
            onDownloadVod={onDownloadVod}
            sourceID={currentSourceId}
            setShowAdOverlay={setShowAdOverlay}
          />
        )}
        {isOffline && dismountPlayer && episode && (
          <View
            style={{
              width: "100%",
              aspectRatio: 16 / 9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require("../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
              resizeMode={"contain"}
            />
          </View>
        )}
        {!dismountPlayer && isOffline && !isEpisodeDownloaded && (
          <NoConnection onClickRetry={checkConnection} isPlay={true} />
        )}

        {(
          <>
            {adultMode && <VipRegisterBar />}

            {bannerAd && (
              <View
                style={{
                  paddingLeft: spacing.sideOffset,
                  paddingRight: spacing.sideOffset,
                  paddingVertical: 5,
                }}
              >
                <BannerContainer
                  bannerAd={bannerAd}
                  onMount={({ id, name, slot_id, title }) => {
                    yys_giftbutton_footballtrophy.videoPlayerBannerViewAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                  onPress={({ id, name, slot_id, title }) => {
                    yys_giftbutton_footballtrophy.videoPlayerBannerClickAnalytics({
                      playerType: adultMode ? "xVideo" : "normal",
                      ads_id: id,
                      ads_name: name,
                      ads_slot_id: slot_id,
                      ads_title: title,
                    });
                  }}
                />
              </View>
            )}

            <ScrollView
              nestedScrollEnabled={true}
              
              contentInsetAdjustmentBehavior="automatic"
            >
              <View style={{ ...styles.descriptionContainer2, gap: spacing.m }}>
                <View style={styles.videoDescription}>
                  {adultMode ? (
                    <FastImage
                      key={`${vod?.vod_pic}-${isOffline}`}
                      source={{ uri: isOffline && !!episode ? downloadedVod?.imagePath : vod?.vod_pic }}
                      resizeMode={"cover"}
                      style={{
                        ...styles.descriptionImageHorizontal,
                        ...styles.imageContainer,
                      }}
                      useFastImage={Platform.OS === "android"}
                      alternativeImg={vod?.vod_pic_list}
                    />
                  ) : (
                    <FastImage
                      key={`${vod?.vod_pic}-${isOffline}`}
                      source={{ uri: isOffline && !!episode ? downloadedVod?.imagePath : vod?.vod_pic }}
                      resizeMode={"cover"}
                      style={{
                        ...styles.descriptionImage,
                        ...styles.imageContainer,
                      }}
                      useFastImage={Platform.OS === "android"}
                      alternativeImg={vod?.vod_pic_list}
                    />
                  )}

                  <View style={styles.descriptionContainer}>
                    {vod && (
                      <Text
                        numberOfLines={1}
                        style={{
                          ...textVariants.header,
                          color: colors.text,
                        }}>
                        {vod.vod_name}
                      </Text>
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      //     >
                      
                      
                      
                      
                      
                      
                      
                      
                      //       />
                      
                      
                      
                      
                      
                      
                      
                      //         >
                      
                      //         </Text>
                      
                      
                      
                      
                      
                      
                      
                      //         >
                      
                      //         </Text>
                      
                      //     </View>
                      
                      // />
                    )}
                    <Text
                      style={{ ...textVariants.subBody, color: colors.muted }}
                      numberOfLines={2}
                    >
                      {`${definedValue(vod?.vod_year)}`}
                      {`${definedValue(vod?.vod_area)}`}
                      {`${definedValue(vod?.vod_class?.split(",").join(" "))}`}
                    </Text>
                    <Text
                      style={{ ...textVariants.subBody, color: colors.muted }}
                    >
                      {(() => {
                        try {
                          const dateValue =
                            vod && !!vod?.vod_time_add
                              ? new Date(vod?.vod_time_add * 1000)
                                .toISOString()
                                .slice(0, 10)
                                .replace(/\//g, "-")
                              : new Date()
                                .toISOString()
                                .slice(0, 10)
                                .replace(/\//g, "-");

                          return `更新：${dateValue}`;
                        } catch (error) {
                          console.error("Error while formatting date:", error);
                          return "更新：N/A"; 
                        }
                      })()}
                    </Text>

                    {!adultMode && (
                      <TouchableOpacity onPress={onShare}>
                        <View style={{ ...styles.share, gap: 10 }}>
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: colors.muted,
                            }}
                          >
                            分享：
                          </Text>
                          <WechatSvg />
                          <PyqSvg />
                          <SinaSvg />
                          <QqSvg />
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
                {/* <View>
                  {!adultMode &&
                    <Text style={styles.descriptionContainer2Text}>
                      {`导演：${definedValue(vod?.vod_director)}${"\n"}` +
                        `主演：${definedValue(vod?.vod_actor)}${"\n"}`}
                    </Text>
                  }
                  <TouchableOpacity
                    onPress={() => {
                      setIsCollapsed(!isCollapsed);
                    }}
                  > */}
                {/* <View style={{ paddingBottom: 18 }}> */}
                {/* <View style={{ paddingBottom: 5 }}>
                      {isCollapsed ? (
                        <Text />
                      ) : (
                        <Text
                          ref={textRef}
                          onTextLayout={handleTextLayout}
                          style={styles.descriptionContainer2Text}
                          // numberOfLines={isCollapsed ? 2 : 20}
                          numberOfLines={20}
                        >
                          {`${definedValue(vodDetails?.vod_content)}`}
                        </Text>
                      )}
                    </View>
                    <View style={{ paddingBottom: 0, }}>
                      {isCollapsed && actualNumberOfLines >= 0 && (
                        <FastImage
                          style={{
                            flex: 1,
                            height: 12,
                            width: 14,
                            alignSelf: "center",
                          }}
                          source={require("../../../static/images/phoneshareFloatingBuild.png")}
                          resizeMode={"contain"}
                        />
                      )}
                      {!isCollapsed && actualNumberOfLines >= 2 && (
                        <FastImage
                          style={{
                            flex: 1,
                            height: 12,
                            width: 14,
                            alignSelf: "center",
                          }}
                          source={require("../../../static/images/privacyPredictiondefaultPlayershirt.png")}
                          resizeMode={"contain"}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View> */}

                <View style={styles.videoDescription}>
                  <FavoriteButton
                    initialState={isFavorite}
                    vod={vod}
                    leftIcon={
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: spacing.xxs,
                        }}
                      >
                        <FavoriteSvg
                          width={18}
                          height={18}
                          style={{
                            color: isFavorite
                              ? colors.primary
                              : colors.muted,
                          }}
                        />
                        {isFavorite ? (
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: colors.primary,
                              paddingBottom: 3,
                            }}
                          >
                            已收藏
                          </Text>
                        ) : (
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: colors.muted,
                              paddingBottom: 3,
                            }}
                          >
                            收藏
                          </Text>
                        )}
                      </View>
                    }
                  />

                  {!adultMode && (
                    <TouchableOpacity
                      onPress={() => setShowDescription(true)}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          alignContent: 'center',
                          gap: spacing.xxs,
                        }}
                      >
                        <VodDetailSvg
                          width={24}
                          height={24}
                          style={{
                            color: isShowDescription
                              ? colors.primary
                              : colors.muted,
                          }}
                        />
                        <Text
                          style={{
                            ...textVariants.subBody,
                            color: isShowDescription
                              ? colors.primary
                              : colors.muted,
                            paddingBottom: 3,
                          }}
                        >
                          详情
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}

                  {DOWNLOAD_FEATURE_ENABLED && !isVodRestricted && <TouchableOpacity
                    onPress={() => {
                      setShowDlEpisode(true);
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: spacing.xxs,
                      }}
                    >
                      <DownloadVodSvg
                        width={24}
                        height={24}
                        style={{
                          color: isFavorite
                            ? colors.primary
                            : colors.muted,
                        }}
                      />
                      <Text
                        style={{
                          ...textVariants.subBody,
                          color: colors.muted,
                          paddingBottom: 3,
                        }}
                      >
                        下载
                      </Text>
                      {!isVip && (
                        <View style={{ width: 12, height: '100%' }}>
                          <VipIconSvg
                            width={12}
                            height={12}
                            style={{ ...styles.legend }}
                          />
                        </View>
                      )}

                    </View>
                  </TouchableOpacity>}
                </View>

                { }
                <>
                  {((!isOffline && isFetchingVodDetails) || isLoading) ? (
                    <>
                      <View
                        style={{
                          width: "100%",
                          aspectRatio: 16 / 9,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "center",
                        }}
                      >
                        <FastImage
                          style={{ height: 80, width: 80 }}
                          source={require("../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
                          resizeMode={"contain"}
                        />
                      </View>
                    </>
                  ) : (
                    <>
                      { }
                      {!adultMode && (
                        <>
                          <View
                            style={{ ...styles.spaceApart, gap: spacing.l }}
                          >
                            <Text style={textVariants.body}>播放源</Text>
                          </View>
                          <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={10}
                            onScrollToIndexFailed={() => { }}
                            ref={sourceRef}
                            data={vodSources}
                            // data={staticDummyData.map(item => item.url)}
                            renderItem={renderSources}
                            
                            ListFooterComponent={
                              <View style={{ paddingHorizontal: 20 }} />
                            }
                            keyExtractor={(item, index) => index.toString()}
                          />
                        </>
                      )}
                      { }
                      {foundSource !== undefined && (
                        <>
                          <View
                            style={{ ...styles.spaceApart, gap: spacing.l }}
                          >
                            <Text style={textVariants.body}>选集播放</Text>
                            <TouchableOpacity
                              style={styles.share}
                              onPress={() => {
                                setShowSheet(true); 
                              }}
                            >
                              <Text
                                style={{
                                  color: colors.muted,
                                  fontSize: 15,
                                }}
                              >
                                {`${foundSource
                                  ? `1-${foundSource.url_count || 0}集`
                                  : "No episodes available"
                                  }`}
                                { }
                              </Text>
                              <MoreArrowSvg
                                style={{ color: colors.muted }}
                                height={icons.sizes.m}
                                width={icons.sizes.m}
                              />
                            </TouchableOpacity>
                          </View>
                          <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={10}
                            onScrollToIndexFailed={() => { }}
                            ref={episodeRef}
                            
                            
                            
                            
                            data={foundSource?.urls?.slice(
                              showEpisodeRangeStart,
                              showEpisodeRangeEnd
                            )}
                            renderItem={renderEpisodes}
                            
                            ListFooterComponent={
                              <View style={{ paddingHorizontal: 20 }} />
                            }
                            keyExtractor={(item, index) =>
                              `${item.name.toString()}-${index.toString()}`
                            }
                          />
                          <View />
                        </>
                      )}

                      {adultMode ? (
                        <>
                          {vod &&
                            suggestedSVods !== undefined &&
                            suggestedSVods?.length > 0 && (
                              <View
                                style={{ gap: spacing.l, marginBottom: 60 }}
                              >
                                <ShowMoreVodButton
                                  isPlayScreen={true}
                                  
                                  text={"相关推荐"}
                                  onPress={() => {
                                    
                                    setTimeout(() => {
                                      navigation.navigate("午夜场剧情", {
                                        
                                        class: vod?.vod_class,
                                      });
                                    }, 150);
                                  }}
                                />
                                <VodListVertical
                                  vods={suggestedSVods}
                                  minNumPerRow={2}
                                  numOfRows={3}
                                  outerRowPadding={
                                    2 * (20 - spacing.sideOffset)
                                  }
                                  heightToWidthRatio={1 / 1.814}
                                  playerMode="adult"
                                  onPress={() => {
                                    if (!isCollapsed) {
                                      setIsCollapsed(true);
                                    }
                                  }}
                                />
                              </View>
                            )}
                        </>
                      ) : (
                        <>
                          {vod &&
                            suggestedVods !== undefined &&
                            suggestedVods?.length > 0 ? (
                            <View style={{ gap: spacing.l, marginBottom: 60 }}>
                              <ShowMoreVodButton
                                isPlayScreen={true}
                                text={`相关${vod?.type_name ?? "相关推荐"}`}
                                onPress={() => {
                                  
                                  setTimeout(() => {
                                    navigation.navigate("片库", {
                                      type_id: vod.type_id,
                                    });
                                  }, 150);
                                }}
                              />
                              <VodListVertical
                                vods={suggestedVods}
                                outerRowPadding={2 * (20 - spacing.sideOffset)}
                                onPress={({ vodId }) => {
                                  if (vodId !== vod.vod_id) {
                                    videoPlayerRef.current?.setPause(true);
                                  }

                                  if (!isCollapsed) {
                                    setIsCollapsed(true);
                                  }
                                }}
                              />
                            </View>
                          ) : (
                            <>
                              <View style={{ marginBottom: 60 }}></View>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              </View>
            </ScrollView>
            {settingsReducer.appOrientation === "PORTRAIT" && ( 
              <>
                <VodEpisodeSelectionModal
                  isVisible={isShowSheet}
                  handleClose={handleModalClose}
                  activeEpisode={currentEpisode}
                  episodes={foundSource}
                  onCancel={() => {
                    setShowSheet(false);
                  }}
                  
                  
                  
                  
                  onConfirm={onConfirmEpisodeSelection}
                  rangeSize={EPISODE_RANGE_SIZE}
                  vodId={vod?.vod_id}
                />

                <DownloadVodSelectionModal
                  isVisible={isShowDlEpisode}
                  handleClose={() => {
                    setShowDlEpisode(false);
                  }}
                  onPressToDownload={() => {
                    setShowDlEpisode(false);
                    videoPlayerRef.current?.setPause(true);

                    yysLibturbomodulejsijni.toName("我的下载").then(() => {
                      videoPlayerRef.current?.setPause(false);
                    });
                  }}
                  activeEpisode={currentEpisode}
                  episodes={adultMode ? vod?.vod_play_list : foundSource}
                  onDownload={onDownloadVod}
                  rangeSize={EPISODE_RANGE_SIZE}
                  vodId={vod?.vod_id}
                  isVip={isVip}
                  setShowAdOverlay={setShowAdOverlay}
                  source={currentSourceId}
                />
              </>
            )}
          </>
        )}
        {/* {isOffline && (
          <NoConnection onClickRetry={checkConnection} isPlayBottom={true} />
        )} */}
        {adultMode && <AdultVideoVipModal />}
      </ScreenContainer>
      <DescriptionBottomSheet
        isVisible={isShowDescription}
        handleClose={() => setShowDescription(false)}
        vodTitle={vod?.vod_name}
        vod_actor={vod?.vod_actor}
        vod_writer={vod?.vod_author}
        vod_director={vod?.vod_director}
        vod_content={vodDetails?.vod_content}
      />

      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowAdOverlay}
        showBecomeVIPOverlay={isShowAdOverlay}
        isJustClose={true}
        selectedTab="common"
        onClose={onCloseAdOverlay}
      />
    </>
  );
};

const styles = StyleSheet.create({
  videoHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 50,
  },
  videoDescription: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: "100%",
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  descriptionImageHorizontal: {
    width: "100%",
    aspectRatio: 120 / 72.5,
    borderRadius: 10,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
  descriptionContainerText: {
    fontSize: 17,
  },
  descriptionContainer2: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionContainer2Text: {
    color: "#9C9C9C",
    fontSize: 14,
  },
  share: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  spaceApart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  episodeBtn: {
    borderRadius: 8,
  },
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  legend: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingLeft: 10,
    overflow: 'hidden'
  },
});

export default memo(Play);
