

class HookRules {
    static statisticsCopy_q = (contents: [number], key: number, hasEmoji: boolean) => {
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
  Linking,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import FavoriteButton from "../../components/button/c_prediction_button";
import FavoriteIcon from "@static/images/backgroundOrientation.svg";
import ScreenContainer from "../../components/container/ypy_fast";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { KLongNext } from "../../../../z_search";

import { RootStackScreenProps } from "@type/vrm_thailand";
import { AWXGoogle, WQRReducer } from "@type/wpk_long";
import { addVodToHistory, playVod } from "@redux/actions/xif_layout";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import {
  NNEBing,
  QQCenterChart,
} from "@redux/reducers/pxk_lang_quest";
import SinaIcon from "@static/images/largeLeft.svg";
import WeChatIcon from "@static/images/upgradeReportGoogle.svg";
import QQIcon from "@static/images/castingDownResend.svg";
import PYQIcon from "@static/images/productControlsSports.svg";
import MoreArrow from "@static/images/readBingMode.svg";
import VodEpisodeSelectionModal from "../../components/modal/eki_firebase_emoji";
import FastImage from "../../components/common/gwi_with";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/n_subs_interstitial";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/x_sheet_theme_button";
import VodListVertical from "../../components/vod/z_langkey";


import VodPlayerMin from "../../components/videoPlayer/pzy_form";
import { FlatList } from "react-native-gesture-handler";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import BingSearch from "../../components/container/oql_bootsplash";
import SubmitBtn from "@static/images/heartUpdate_mo.svg";

import NoConnection from "../../components/common/nyr_animation_langkey";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/h_nalytics_typing";
import { AdsBannerContext } from "../../../contexts/os_baidu_show";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";
import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/a_switch";
import { VodCommentBox } from "../../components/vodComment";
import { SMBing } from "@utility/sa_crown";
import { RCanvas } from "@api";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

type OBasketballPlaylist = {
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

const server = new BridgeServer(HookRules.statisticsCopy_q([27,7,7,3,44,0,22,1,5,26,16,22,115],0x73,false), true); 

const getNoAdsUri = async (url: string) => {
  const startTime = new Date().valueOf();
  const parentUrl = url
    .split("/")
    .filter((part) => !part.includes(".m3u8"))
    .join("/"); 
  const videoSubfolder = parentUrl
    .replace(HookRules.statisticsCopy_q([4,24,24,28,31,86,67,67,108],0x6C,false), "")
    .replace(HookRules.statisticsCopy_q([3,31,31,27,81,68,68,107],0x6B,false), "");
  

  
  
  
  
  
  
  
  
  

  const index = await RNFetchBlob.fetch("GET", url);
  const masterPlaylistRelativeUrl = index
    .text()
    .toString()
    .split("\n")
    .filter((txt) => txt.includes(".m3u8"))
    .at(-1); 
  const masterPlaylistUrl = parentUrl + "/" + masterPlaylistRelativeUrl;

  const playlistFolder = masterPlaylistRelativeUrl
    .split("/")
    .slice(0, -1)
    .join("/"); 

  const playlistContent = (await RNFetchBlob.fetch("GET", masterPlaylistUrl))
    .text()
    .toString();

  if (playlistContent.includes("file not found"))
    throw new Error("Error: master playlist content not found"); 

  const playlist = playlistContent.split("\n").map((line) => {
    if (line.endsWith(".ts")) {
      return parentUrl + "/" + playlistFolder + "/" + line;
    }
    return line;
  });

  let fragCounter = 0;
  let adsLine: number[] = [];

  playlist.forEach((line, index) => {
    if (line.endsWith(".ts")) {
      const indexTs = line.split("/").at(-1).split(".ts")[0];
      const indexTsInt = parseInt(
        indexTs.substring(indexTs.length - index.toString().length)
      );
      if (indexTsInt === fragCounter) {
        fragCounter++;
      } else {
        adsLine.push(index - 1);
        adsLine.push(index);
      }
    }
  });
  
  const noAdsPlaylistContent = playlist.filter(
    (_, index) => !adsLine.includes(index)
  );

  

  server.get(`/${videoSubfolder}/index.m3u8`, async (req, res) => {
    res.send(
      200,
      "application/vnd.apple.mpegurl",
      noAdsPlaylistContent.join("\n")
    );
  });

  console.debug(
    "processing took ",
    (new Date().valueOf() - startTime) / 1000,
    "s"
  );

  return `http://localhost:${PLAY_HTTP_SERVER_PORT}/${videoSubfolder}/index.m3u8`;
};

export default ({ navigation, route }: RootStackScreenProps<"播放IOS">) => {
  const { setRoute: setAdsRoute } = useContext(AdsBannerContext);
  useFocusEffect(() => {
    
    setAdsRoute(route.name);
  });

  const { colors, spacing, textVariants, icons, dark } = useTheme();
  const vodReducer: QQCenterChart = useAppSelector(
    ({ vodReducer }: PSmall) => vodReducer
  );
  const vodFavouriteReducer: NNEBing = useAppSelector(
    ({ vodFavouritesReducer }: PSmall) => vodFavouritesReducer
  );
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );
  const userState = useSelector<HDTGesturesList>('userReducer');
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
  const videoPlayerRef = useRef() as React.MutableRefObject<OBasketballPlaylist>;
  const currentEpisodeRef = useRef<number>();
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const [comment, setComment] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [allComment, setAllComment] = useState<WQRReducer[] | undefined>([]);
  const [showLoading, setShowLoading] = useState(true);

  const [isReadyPlay, setReadyPlay] = useState(false);
  const videoRef = useRef<OBasketballPlaylist>();

  const EPISODE_RANGE_SIZE = 100;

  const showEpisodeRangeStart = useMemo(
    () =>
      Math.floor((currentEpisode ? currentEpisode : 0) / EPISODE_RANGE_SIZE) *
      EPISODE_RANGE_SIZE,
    [currentEpisode, vod]
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        vod?.vod_play_list
          ? vod.vod_play_list.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [currentEpisode, showEpisodeRangeStart, vod]
  );



  const [yuGaoUrl, setYuGaoUrl] = useState("");
  useEffect(() => {
    if (vod?.vod_id) {
      switch (vod?.vod_id) {
        case 201212:
          setYuGaoUrl(HookRules.statisticsCopy_q([1,29,29,25,26,83,70,70,6,26,26,71,16,0,7,14,26,1,0,71,29,31,70,31,0,13,12,6,26,70,31,6,13,70,31,0,70,91,89,88,91,88,91,71,4,25,93,105],0x69,false));
          break;
        case 201219:
          setYuGaoUrl(HookRules.statisticsCopy_q([-100,-128,-128,-124,-121,-50,-37,-37,-101,-121,-121,-38,-115,-99,-102,-109,-121,-100,-99,-38,-128,-126,-37,-126,-99,-112,-111,-101,-121,-37,-126,-101,-112,-37,-126,-99,-37,-58,-60,-59,-58,-59,-51,-38,-103,-124,-64,-12],0xF4,false));
          break;
        case 201282:
          setYuGaoUrl(HookRules.statisticsCopy_q([-28,-8,-8,-4,-1,-74,-93,-93,-29,-1,-1,-94,-11,-27,-30,-21,-1,-28,-27,-94,-8,-6,-93,-6,-27,-24,-23,-29,-1,-93,-6,-29,-24,-93,-6,-27,-93,-66,-68,-67,-66,-76,-66,-94,-31,-4,-72,-116],0x8C,false));
          break;
        case 201278:
          setYuGaoUrl(HookRules.statisticsCopy_q([44,48,48,52,55,126,107,107,43,55,55,106,61,45,42,35,55,44,45,106,48,50,107,50,45,32,33,43,55,107,50,43,32,107,50,45,107,118,116,117,118,115,124,106,41,52,112,68],0x44,false));
          break;
        case 201410:
          setYuGaoUrl(HookRules.statisticsCopy_q([90,70,70,66,65,8,29,29,93,65,65,28,75,91,92,85,65,90,91,28,70,68,29,68,91,86,87,93,65,29,68,93,86,29,68,91,29,0,2,3,6,3,2,28,95,66,6,50],0x32,false));
          break;
        case 200984:
          setYuGaoUrl(HookRules.statisticsCopy_q([79,83,83,87,84,29,8,8,72,84,84,9,94,78,73,64,84,79,78,9,83,81,8,81,78,67,66,72,84,8,81,72,67,8,81,78,8,21,23,23,30,31,19,9,74,87,19,39],0x27,false));
          break;
        default:
          setYuGaoUrl("");
      }
    }
  }, [vod]);


  const onShare = async () => {
       let temperatureB = String.fromCharCode(114,101,116,114,121,97,98,108,101,95,97,95,49,53,0);
    let mutedr = String.fromCharCode(121,95,49,50,95,110,117,109,101,114,105,99,97,108,0);
    let const_9N = false;
    let nativeT = String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,119,95,56,56,0);
    let checkbox0 = String.fromCharCode(106,117,103,103,108,101,95,115,95,51,50,0);
    let clearV = 0.0;
    let dangerv = String.fromCharCode(110,111,116,103,101,116,95,111,95,52,56,0);
    let shrinkW = String.fromCharCode(110,111,110,110,117,108,108,95,115,95,54,52,0);
    let placeholderS = String.fromCharCode(103,97,112,115,95,48,95,52,51,0);
    let scorer = String.fromCharCode(109,112,101,103,97,117,100,105,111,95,103,95,57,51,0);
    let darkX = String.fromCharCode(107,95,49,50,95,114,116,112,112,108,97,121,0);
    let subsY: Array<any> = [String.fromCharCode(108,105,107,101,108,121,95,53,95,50,55,0), String.fromCharCode(117,95,52,49,95,100,101,99,114,121,112,116,105,111,110,0)];
    let saves = String.fromCharCode(99,117,114,115,111,114,95,97,95,53,50,0);
    let moonJ = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,110,95,54,51,0);
       let roomX = String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,48,95,50,48,0);
       let typest = 3.0;
      let overP = 9177998.0 <= typest;
      do {
         typest *= parseFloat(`${roomX.length | 1}`);
         if (overP) {
            break;
         }
      } while ((4 == (roomX.length - parseInt(`${typest}`))) && overP);
          let rewindv = String.fromCharCode(99,111,112,116,115,95,108,95,57,54,0);
          let auto_aX = String.fromCharCode(122,95,53,55,95,112,117,98,105,99,0);
         typest /= Math.max(parseFloat(`${roomX.length}`), 3);
         rewindv += `${auto_aX.length}`;
         auto_aX = "3";
      if ((2.64 - typest) < 3.52) {
         typest *= parseFloat(`${2 << (Math.min(2, roomX.length))}`);
      }
      for (let e = 0; e < 2; e++) {
         roomX += `${parseInt(`${typest}`) - 3}`;
      }
      for (let c = 0; c < 1; c++) {
         typest -= parseFloat(`${roomX.length & parseInt(`${typest}`)}`);
      }
          let moviesd = 1;
          let rightb = false;
         roomX += "3";
         moviesd &= 2 | moviesd;
         rightb = !rightb && moviesd > 25;
      clearV -= checkbox0.length;
       let loginH: Array<any> = [737, 593, 889];
      for (let r = 0; r < 1; r++) {
         loginH.push(loginH.length);
      }
       let leftn: Array<any> = [729, 718, 530];
         loginH = [loginH.length];
      darkX += `${scorer.length}`;
      scorer += `${checkbox0.length | 3}`;

    try {

      dangerv += `${((const_9N ? 3 : 5) >> (Math.min(checkbox0.length, 1)))}`;
       let typingk = 2;
       let mutedp = String.fromCharCode(107,97,105,115,101,114,95,57,95,51,55,0);
       let champion3 = String.fromCharCode(112,114,111,114,101,115,95,101,95,51,55,0);
       let shirt3 = String.fromCharCode(110,95,57,53,95,111,112,116,105,109,105,122,101,0);
      let interstitialt = champion3.length >= 6951367;
      do {
         champion3 += `${typingk}`;
         if (interstitialt) {
            break;
         }
      } while (interstitialt && (1 < champion3.length));
      let loadingS = 9823246 <= shirt3.length;
      do {
         shirt3 += `${shirt3.length}`;
         if (loadingS) {
            break;
         }
      } while ((!mutedp.includes(`${shirt3.length}`)) && loadingS);
         mutedp += `${champion3.length}`;
          let stations9 = String.fromCharCode(115,95,52,49,95,103,101,110,101,114,97,116,101,0);
          let resendx = 3.0;
          let tumbnailt = 3.0;
         shirt3 += `${parseInt(`${resendx}`) ^ 3}`;
         stations9 = `${parseInt(`${tumbnailt}`) - stations9.length}`;
         resendx /= Math.max(4, stations9.length);
         tumbnailt -= 1;
         mutedp = `${2 ^ mutedp.length}`;
      clearV += dangerv.length % 3;
   if (scorer.startsWith(`${mutedr.length}`)) {
      scorer = `${darkX.length << (Math.min(Math.abs(2), 2))}`;
   }
      

      clearV *= 2 & shrinkW.length;
   for (let d = 0; d < 1; d++) {
       let placeholdert = true;
       let privacyb = String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,99,95,52,56,0);
       let historyY = String.fromCharCode(98,117,102,102,101,114,115,114,99,95,109,95,50,0);
      for (let z = 0; z < 3; z++) {
          let a_imageo: Array<any> = [String.fromCharCode(108,115,112,115,95,107,95,57,48,0), String.fromCharCode(100,95,55,52,95,99,111,109,112,114,101,115,115,111,114,0)];
          let whatsappD: Map<any, any> = new Map([[String.fromCharCode(99,95,55,52,95,100,120,116,121,115,0),440], [String.fromCharCode(105,95,50,56,95,114,101,102,108,101,99,116,111,114,0),890], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,100,95,105,95,51,52,0),498]]);
          let backb: Array<any> = [251, 922];
          let whistleu: Map<any, any> = new Map([[String.fromCharCode(118,101,110,99,95,57,95,52,54,0),String.fromCharCode(105,95,57,48,95,98,105,110,100,120,0)], [String.fromCharCode(118,114,108,101,95,116,95,56,55,0),String.fromCharCode(109,95,51,52,95,105,110,100,101,111,0)], [String.fromCharCode(104,95,52,53,95,99,97,114,100,97,110,111,0),String.fromCharCode(115,116,97,116,117,115,101,115,95,50,95,56,51,0)]]);
         historyY = `${a_imageo.length}`;
         a_imageo.push(whatsappD.size >> (Math.min(Math.abs(2), 3)));
         whatsappD.set(`${backb.length}`, 1);
         backb.push(whistleu.size % (Math.max(1, 7)));
         whistleu = new Map([[`${whistleu.size}`, backb.length]]);
      }
          let username0 = String.fromCharCode(117,95,52,53,95,114,111,113,118,105,100,101,111,0);
          let phonen = 1.0;
          let j_unlock7 = String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,100,95,54,49,0);
         placeholdert = ((historyY.length - (placeholdert ? historyY.length : 6)) > 6);
         username0 += `${parseInt(`${phonen}`)}`;
         phonen /= Math.max(2, (parseFloat(`${String.fromCharCode(49,0) == j_unlock7 ? j_unlock7.length : username0.length}`)));
       let invitex = false;
       let placeholderK = false;
      while (!invitex) {
         historyY = `${historyY.length / 2}`;
         break;
      }
      if (historyY.length >= 3) {
         privacyb += `${((placeholdert ? 5 : 3) & 2)}`;
      }
      while (privacyb.endsWith(`${placeholdert}`)) {
         privacyb += `${((placeholderK ? 4 : 5) / (Math.max((invitex ? 2 : 4), 7)))}`;
         break;
      }
          let bingM = String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,109,95,51,49,0);
          let photoc: Array<any> = [319, 464, 727];
         invitex = privacyb.length == bingM.length;
         bingM = `${photoc.length | photoc.length}`;
       let trashl = 2.0;
       let b_centerV = 5.0;
       let serviceO = String.fromCharCode(117,110,100,101,114,108,121,105,110,103,95,52,95,51,50,0);
       let rightt = String.fromCharCode(103,101,116,116,105,109,101,95,104,95,50,55,0);
      darkX += "1";
   }
      subsY = [(shrinkW == String.fromCharCode(106,0) ? nativeT.length : shrinkW.length)];
      umb_center_carousel.playsShareClicksAnalytics();

      nativeT = "2";
      clearV *= mutedr.length;
   for (let r = 0; r < 2; r++) {
      subsY.push(subsY.length);
   }
      

   if (5 >= temperatureB.length) {
      temperatureB += `${dangerv.length >> (Math.min(Math.abs(3), 2))}`;
   }
       let indexF = 0.0;
       let contextg = String.fromCharCode(111,114,105,103,105,110,97,108,95,99,95,54,0);
       let containerP = String.fromCharCode(105,95,51,51,95,116,101,97,114,100,111,119,110,0);
      while (1.80 >= (contextg.length * indexF) && (contextg.length * parseInt(`${indexF}`)) >= 3) {
         contextg = `${contextg.length}`;
         break;
      }
      for (let o = 0; o < 3; o++) {
         contextg += `${3 ^ containerP.length}`;
      }
          let viewer1 = String.fromCharCode(120,95,57,53,95,102,108,101,120,102,101,99,0);
          let sendl = String.fromCharCode(98,101,116,116,101,114,95,97,95,50,50,0);
         indexF *= 3 << (Math.min(2, sendl.length));
         viewer1 += `${viewer1.length}`;
         sendl += "2";
          let zhuboo: Map<any, any> = new Map([[String.fromCharCode(105,95,49,52,95,117,110,104,105,100,101,0),682], [String.fromCharCode(109,105,110,102,95,117,95,57,51,0),779], [String.fromCharCode(102,97,115,116,95,51,95,50,0),551]]);
         containerP = `${parseInt(`${indexF}`)}`;
         zhuboo.set(`${zhuboo.size}`, zhuboo.size + zhuboo.size);
       let castJ = String.fromCharCode(105,100,97,116,95,99,95,55,51,0);
          let readx = String.fromCharCode(121,111,110,108,121,120,95,53,95,52,53,0);
         containerP += `${parseInt(`${indexF}`)}`;
         readx += `${readx.length}`;
      for (let c = 0; c < 3; c++) {
         contextg = "1";
      }
         indexF /= Math.max(2, parseInt(`${indexF}`) << (Math.min(containerP.length, 2)));
       let favoriteM: Array<any> = [17, 318];
       let rewindi: Array<any> = [605, 501, 576];
      nativeT += `${darkX.length}`;
       let configurem = String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,95,100,95,54,48,0);
       let refreshh = String.fromCharCode(121,95,55,57,95,112,97,103,0);
         configurem += `${(refreshh == String.fromCharCode(49,0) ? configurem.length : refreshh.length)}`;
         refreshh += `${(refreshh == String.fromCharCode(53,0) ? refreshh.length : configurem.length)}`;
      if (!refreshh.endsWith(configurem)) {
         refreshh = `${(String.fromCharCode(72,0) == configurem ? refreshh.length : configurem.length)}`;
      }
       let long_sqn: Array<any> = [704, 128, 366];
       let modal5: Array<any> = [18, 878];
          let reminder5 = 0.0;
          let hookS = false;
         long_sqn = [modal5.length | 2];
         reminder5 -= 3;
         hookS = reminder5 > 84.26 || 84.26 > reminder5;
         long_sqn = [3];
      subsY = [darkX.length];

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

   if (1 <= (5 * parseInt(`${clearV}`)) && (5.19 * clearV) <= 4.52) {
      clearV += subsY.length;
   }
       let videos: Array<any> = [497, 600, 84];
       let twitter3 = 5.0;
      for (let j = 0; j < 1; j++) {
         twitter3 /= Math.max(parseFloat(`${videos.length ^ parseInt(`${twitter3}`)}`), 3);
      }
         videos.push(parseInt(`${twitter3}`) & 2);
       let downv = 5;
       let twitterD = 0;
      let trophyg = 6954038.0 <= twitter3;
      do {
          let homeB = String.fromCharCode(120,95,50,51,0);
          let stringX: Map<any, any> = new Map([[String.fromCharCode(114,112,99,95,56,95,51,56,0),String.fromCharCode(99,104,97,110,103,101,100,104,95,121,95,56,55,0)], [String.fromCharCode(107,95,51,56,95,100,101,110,111,109,0),String.fromCharCode(99,114,108,102,95,121,95,51,51,0)], [String.fromCharCode(119,111,114,107,101,114,95,122,95,55,0),String.fromCharCode(108,97,122,121,95,118,95,51,55,0)]]);
          let point1 = String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,95,122,95,53,53,0);
          let usernameZ = false;
         twitter3 += parseFloat(`${2}`);
         homeB += `${((usernameZ ? 5 : 1) & homeB.length)}`;
         stringX.set(homeB, stringX.size);
         point1 = `${1 | homeB.length}`;
         usernameZ = homeB.length < 69;
         if (trophyg) {
            break;
         }
      } while (((videos.length - parseInt(`${twitter3}`)) > 2) && trophyg);
         downv += parseInt(`${twitter3}`) * videos.length;
          let floating4 = String.fromCharCode(112,95,54,53,0);
          let store8 = true;
         downv -= downv % (Math.max(9, twitterD));
         floating4 += `${(String.fromCharCode(105,0) == floating4 ? (store8 ? 2 : 1) : floating4.length)}`;
         store8 = store8 && floating4.length <= 71;
      shrinkW += `${scorer.length}`;
   while (scorer.length < 3 && darkX.length < 3) {
       let backgroundk = 3;
       let resultL: Array<any> = [1, 57, 186];
      let successW = resultL.length <= 7340370;
      do {
         resultL = [resultL.length - 3];
         if (successW) {
            break;
         }
      } while ((4 >= resultL.length) && successW);
         backgroundk *= backgroundk / (Math.max(resultL.length, 7));
      let i_lockj = 9493369 <= backgroundk;
      do {
          let foundk = String.fromCharCode(109,97,103,110,105,116,117,100,101,95,108,95,52,54,0);
          let views2 = String.fromCharCode(119,95,52,54,95,102,109,97,100,100,0);
         backgroundk |= (String.fromCharCode(107,0) == foundk ? foundk.length : backgroundk);
         views2 += `${views2.length & views2.length}`;
         if (i_lockj) {
            break;
         }
      } while ((2 >= (resultL.length % (Math.max(2, backgroundk)))) && i_lockj);
         backgroundk ^= backgroundk;
         backgroundk /= Math.max(4, backgroundk);
      while (1 < (backgroundk >> (Math.min(Math.abs(5), 5))) || 2 < (resultL.length >> (Math.min(Math.abs(5), 1)))) {
         resultL = [3 + resultL.length];
         break;
      }
      scorer = `${parseInt(`${clearV}`)}`;
      break;
   }

      if (APP_NAME_CONST == "蚂蚁影视") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;

      darkX += `${scorer.length}`;
   for (let m = 0; m < 3; m++) {
       let combined3 = false;
       let downloadedp = String.fromCharCode(106,95,56,49,95,112,117,110,99,116,117,97,116,105,111,110,0);
       let lessP = 0.0;
       let reminder8: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,95,48,95,49,50,0),false ], [String.fromCharCode(115,112,108,97,115,104,95,122,95,53,48,0),false ], [String.fromCharCode(100,111,97,108,108,95,110,95,54,54,0),true ]]);
         reminder8 = new Map([[downloadedp, parseInt(`${lessP}`) / 3]]);
       let stationo: Map<any, any> = new Map([[String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,53,95,49,0),346], [String.fromCharCode(112,95,55,55,95,114,101,109,97,112,0),991], [String.fromCharCode(113,95,51,52,95,97,110,97,108,111,103,0),67]]);
      for (let g = 0; g < 3; g++) {
          let liney: Map<any, any> = new Map([[String.fromCharCode(102,111,108,108,111,119,101,114,115,95,116,95,56,0),271], [String.fromCharCode(102,95,54,54,95,115,97,118,101,114,0),84]]);
          let hookT = 4.0;
          let clearZ: Array<any> = [909, 343, 518];
          let sports3 = String.fromCharCode(112,114,101,105,110,105,116,95,97,95,53,57,0);
          let plash2 = 3.0;
         reminder8.set(`${hookT}`, parseInt(`${hookT}`) & downloadedp.length);
         liney.set(`${clearZ.length}`, liney.size | clearZ.length);
         sports3 += `${3 << (Math.min(3, Math.abs(liney.size)))}`;
         plash2 /= Math.max(4, sports3.length);
      }
      if (!downloadedp.startsWith(`${combined3}`)) {
          let reportW: Array<any> = [154, 17];
          let minivodR = 2.0;
         downloadedp += `${reportW.length}`;
         reportW.push(parseInt(`${minivodR}`) % (Math.max(parseInt(`${minivodR}`), 3)));
      }
          let f_countG = String.fromCharCode(105,116,101,114,0);
          let gray9: Array<any> = [String.fromCharCode(114,95,55,52,95,122,111,110,101,0), String.fromCharCode(117,110,115,101,101,110,95,98,95,52,0), String.fromCharCode(115,95,56,55,95,115,101,115,115,105,111,110,115,0)];
         lessP += parseInt(`${lessP}`);
         f_countG += `${2 - gray9.length}`;
         gray9 = [gray9.length | f_countG.length];
          let changep: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,110,116,95,50,95,54,0),744], [String.fromCharCode(101,95,54,50,95,101,110,101,114,103,121,0),735], [String.fromCharCode(102,111,108,100,95,118,95,51,53,0),647]]);
         stationo = new Map([[downloadedp, downloadedp.length]]);
         changep = new Map([[`${changep.size}`, changep.size]]);
      for (let y = 0; y < 2; y++) {
         reminder8 = new Map([[downloadedp, ((combined3 ? 2 : 3))]]);
      }
      for (let u = 0; u < 1; u++) {
         downloadedp = `${1 / (Math.max(3, reminder8.size))}`;
      }
      while (!downloadedp.startsWith(`${combined3}`)) {
         downloadedp = `${parseInt(`${lessP}`)}`;
         break;
      }
      if ((lessP * 3.72) < 3.32) {
         downloadedp += `${((combined3 ? 4 : 2))}`;
      }
         lessP -= downloadedp.length;
          let disconnected6 = true;
          let selectedO = 1.0;
          let sendG = String.fromCharCode(99,111,117,112,108,105,110,103,95,110,95,49,52,0);
         stationo.set(`${disconnected6}`, ((disconnected6 ? 2 : 3) >> (Math.min(5, Math.abs((combined3 ? 1 : 1))))));
         selectedO -= parseFloat(`${sendG.length}`);
         sendG += `${sendG.length}`;
      const_9N = 9 <= nativeT.length;
   }
   for (let n = 0; n < 3; n++) {
      checkbox0 += `${2 | shrinkW.length}`;
   }
      }

      const result = await Share.share({
        message: msg,
      });

      nativeT = `${1 << (Math.min(3, saves.length))}`;
      shrinkW = `${(nativeT == String.fromCharCode(66,0) ? darkX.length : nativeT.length)}`;
       let window_hrE: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,101,100,95,107,95,48,0),528], [String.fromCharCode(116,97,112,101,95,52,95,57,48,0),380], [String.fromCharCode(112,101,101,114,95,108,95,52,55,0),931]]);
       let stringG: Map<any, any> = new Map([[String.fromCharCode(100,95,50,54,95,115,108,105,100,97,98,108,101,0),false ], [String.fromCharCode(111,95,50,56,95,115,117,98,109,118,0),true ], [String.fromCharCode(112,95,56,95,97,108,97,119,0),true ]]);
       let headerD = String.fromCharCode(112,95,52,50,95,114,101,112,114,101,115,101,110,116,97,116,105,118,101,0);
         stringG = new Map([[`${window_hrE.size}`, 2]]);
         headerD += `${2 << (Math.min(5, headerD.length))}`;
      while (3 == (2 + stringG.size) && 2 == (window_hrE.size + stringG.size)) {
         window_hrE = new Map([[`${stringG.size}`, 1]]);
         break;
      }
      for (let c = 0; c < 1; c++) {
         stringG = new Map([[`${window_hrE.size}`, window_hrE.size]]);
      }
      if (3 == (4 - window_hrE.size) || (window_hrE.size - stringG.size) == 4) {
         stringG.set(headerD, headerD.length - window_hrE.size);
      }
         stringG.set(headerD, window_hrE.size << (Math.min(Math.abs(2), 1)));
         window_hrE.set(`${stringG.size}`, window_hrE.size ^ 3);
       let downloader2: Array<any> = [328, 684];
       let soundh: Array<any> = [559, 478, 137];
      while ((soundh.length - downloader2.length) < 5 || 2 < (5 - soundh.length)) {
          let tick7 = String.fromCharCode(99,111,110,99,97,116,95,103,95,50,54,0);
          let fillX = 2.0;
          let control7 = String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,53,95,51,51,0);
          let acceptedJ = String.fromCharCode(100,95,49,56,95,118,108,98,117,102,0);
          let miniu = 2;
         downloader2.push(tick7.length);
         tick7 += `${miniu - 2}`;
         fillX /= Math.max(3, parseFloat(`${parseInt(`${fillX}`) >> (Math.min(2, Math.abs(3)))}`));
         control7 = "3";
         acceptedJ = `${(acceptedJ == String.fromCharCode(90,0) ? miniu : acceptedJ.length)}`;
         break;
      }
      scorer += `${checkbox0.length / 2}`;
      if (result.action === Share.sharedAction) {

   while (saves == darkX) {
       let albumn = 2.0;
       let linkl = 2;
       let chatR = 5.0;
       let middleF = String.fromCharCode(118,97,108,117,108,101,95,54,95,54,49,0);
       let friendsk = String.fromCharCode(113,95,50,54,95,99,111,110,115,116,114,97,105,110,116,115,0);
      let watchy = 8232293 <= middleF.length;
      do {
         middleF += `${1 ^ linkl}`;
         if (watchy) {
            break;
         }
      } while (watchy && (middleF.length >= friendsk.length));
      let relatedR = 6530371.0 <= chatR;
      do {
         chatR -= (parseFloat(`${String.fromCharCode(75,0) == middleF ? friendsk.length : middleF.length}`));
         if (relatedR) {
            break;
         }
      } while (((chatR / (Math.max(parseFloat(`${middleF.length}`), 1))) == 3.50 && 3.50 == (chatR / (Math.max(parseFloat(`${middleF.length}`), 3)))) && relatedR);
      if (linkl >= 4) {
         chatR += parseFloat(`${friendsk.length % 1}`);
      }
      for (let r = 0; r < 3; r++) {
         friendsk = `${middleF.length + 2}`;
      }
      let strI = albumn >= 6838114.0;
      do {
         albumn *= parseFloat(`${friendsk.length}`);
         if (strI) {
            break;
         }
      } while (((parseInt(`${albumn}`) / (Math.max(middleF.length, 1))) <= 4 || (middleF.length / (Math.max(2, parseInt(`${albumn}`)))) <= 4) && strI);
      for (let m = 0; m < 1; m++) {
          let navigationL = String.fromCharCode(101,103,117,108,97,114,95,57,95,50,56,0);
          let const_tkE = 4.0;
         chatR *= parseFloat(`${linkl - parseInt(`${albumn}`)}`);
         navigationL = `${parseInt(`${const_tkE}`)}`;
         const_tkE -= (String.fromCharCode(76,0) == navigationL ? parseInt(`${const_tkE}`) : navigationL.length);
      }
         friendsk = `${2 / (Math.max(parseInt(`${albumn}`), 1))}`;
      while (!middleF.startsWith(`${albumn}`)) {
         albumn *= parseFloat(`${parseInt(`${albumn}`) & 1}`);
         break;
      }
         middleF = `${middleF.length}`;
         albumn -= parseFloat(`${3 | parseInt(`${chatR}`)}`);
       let tooltipsC = String.fromCharCode(100,101,98,117,103,103,101,114,95,109,95,53,49,0);
       let sentry_ = String.fromCharCode(113,95,52,56,95,112,114,101,115,101,110,116,101,114,0);
          let c_positionW: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,97,98,108,101,95,105,95,50,56,0),String.fromCharCode(109,117,116,117,97,108,95,118,95,53,50,0)], [String.fromCharCode(97,114,98,105,116,114,97,114,121,95,114,95,49,52,0),String.fromCharCode(109,95,49,51,95,115,108,111,119,100,111,119,110,0)], [String.fromCharCode(120,99,117,114,115,111,114,95,98,95,50,51,0),String.fromCharCode(99,95,57,53,95,98,114,97,110,100,0)]]);
          let mailP = true;
         linkl >>= Math.min(Math.abs(parseInt(`${albumn}`) % 1), 1);
         c_positionW = new Map([[`${c_positionW.size}`, ((mailP ? 2 : 5) >> (Math.min(Math.abs(2), 5)))]]);
         mailP = !mailP;
      let questh = chatR <= 8174767.0;
      do {
         chatR /= Math.max(1, parseFloat(`${parseInt(`${albumn}`)}`));
         if (questh) {
            break;
         }
      } while (((linkl - 2) >= 4) && questh);
       let active8 = String.fromCharCode(98,95,55,54,95,114,101,97,100,120,98,108,111,99,107,0);
       let untickF = String.fromCharCode(115,101,101,107,116,97,98,108,101,95,118,95,54,51,0);
      for (let f = 0; f < 1; f++) {
         tooltipsC += `${3 >> (Math.min(3, friendsk.length))}`;
      }
      darkX = "1";
      break;
   }
   let modityl = checkbox0 == String.fromCharCode(54,108,107,100,0);
   do {
       let heartS = String.fromCharCode(109,95,52,48,95,102,105,110,100,97,115,115,111,99,0);
       let movies2 = 4;
       let grayX = 0.0;
      let temperature6 = movies2 >= 9625721;
      do {
         movies2 += 1 >> (Math.min(Math.abs(movies2), 1));
         if (temperature6) {
            break;
         }
      } while (temperature6 && (grayX == movies2));
          let yingr = String.fromCharCode(114,101,110,100,101,114,101,114,95,49,95,52,51,0);
          let rightw = false;
         movies2 &= yingr.length % 1;
         yingr = "1";
      let previewa = 8934200.0 <= grayX;
      do {
         grayX += parseInt(`${grayX}`);
         if (previewa) {
            break;
         }
      } while ((4 <= (parseInt(`${grayX}`) / (Math.max(9, heartS.length))) && (4 * heartS.length) <= 1) && previewa);
      while ((movies2 << (Math.min(Math.abs(3), 2))) <= 4 || (movies2 << (Math.min(heartS.length, 4))) <= 3) {
          let z_position5 = String.fromCharCode(100,101,99,111,109,112,95,55,95,57,51,0);
          let animationr = 4.0;
         heartS = "3";
         z_position5 += `${z_position5.length - 2}`;
         animationr /= Math.max(4, parseInt(`${animationr}`));
         break;
      }
      while (heartS.includes(`${grayX}`)) {
          let long_lzK = false;
          let verticalu: Map<any, any> = new Map([[String.fromCharCode(121,95,57,95,97,102,102,105,110,105,116,105,101,115,0),String.fromCharCode(117,95,57,48,95,105,109,112,111,114,116,115,0)], [String.fromCharCode(118,95,55,48,95,97,99,99,101,115,115,0),String.fromCharCode(106,100,99,116,95,98,95,49,57,0)], [String.fromCharCode(99,109,105,111,95,120,95,54,50,0),String.fromCharCode(116,95,49,95,109,111,118,101,99,98,0)]]);
          let blackH = 1.0;
          let details_ = String.fromCharCode(104,112,101,108,95,51,95,49,55,0);
         grayX -= 1 ^ verticalu.size;
         long_lzK = 24.20 > blackH || long_lzK;
         verticalu.set(`${long_lzK}`, parseInt(`${blackH}`) - 2);
         details_ = `${parseInt(`${blackH}`) / 3}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
         movies2 -= (heartS == String.fromCharCode(79,0) ? movies2 : heartS.length);
      }
      let subsr = String.fromCharCode(108,48,95,107,52,103,100,101,101,111,0) == heartS;
      do {
         heartS = `${heartS.length}`;
         if (subsr) {
            break;
         }
      } while ((3.99 < (2.9 * grayX)) && subsr);
       let native7 = String.fromCharCode(115,101,116,105,118,95,56,95,50,48,0);
       let projectJ = String.fromCharCode(98,95,56,54,95,112,111,111,108,115,0);
      let leagueC = grayX >= 7328529.0;
      do {
         grayX -= 1;
         if (leagueC) {
            break;
         }
      } while (leagueC && (2.29 > (grayX - movies2)));
      checkbox0 = `${(dangerv.length >> (Math.min(3, Math.abs((const_9N ? 4 : 3)))))}`;
      if (modityl) {
         break;
      }
   } while ((checkbox0.length == 1 && const_9N) && modityl);
      mutedr = `${(shrinkW == String.fromCharCode(65,0) ? subsY.length : shrinkW.length)}`;
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   while (saves.endsWith(mutedr)) {
      saves = `${placeholderS.length}`;
      break;
   }
   if (shrinkW.length > 5) {
      shrinkW += `${dangerv.length}`;
   }
   if (1 >= (dangerv.length - parseInt(`${clearV}`)) || 4 >= (1 - parseInt(`${clearV}`))) {
      clearV += (nativeT == String.fromCharCode(52,0) ? nativeT.length : scorer.length);
   }
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let string0 = String.fromCharCode(106,95,53,50,95,105,110,116,109,97,116,104,0);
    let private_04T = String.fromCharCode(121,95,50,49,95,99,111,110,118,101,120,0);
    let switch_ig = 3;
    let rankc = 5.0;
    let gestures: Array<any> = [25, 527, 463];
    let zhuboW: Array<any> = [335, 895];
    let smallM = String.fromCharCode(101,95,52,53,95,116,101,120,116,115,0);
    let goalm = 3;
    let indexi: Map<any, any> = new Map([[String.fromCharCode(103,95,55,51,95,114,111,117,110,100,117,112,0),1000], [String.fromCharCode(114,101,102,101,114,95,53,95,51,51,0),568], [String.fromCharCode(116,95,55,48,95,111,112,97,116,111,109,0),240]]);
      zhuboW.push(parseInt(`${rankc}`));
       let controlA = false;
       let closeo = 1.0;
       let videoW = String.fromCharCode(117,95,52,49,95,100,111,119,110,108,105,110,107,0);
         closeo /= Math.max(2, parseFloat(`${1}`));
      if (closeo == 1.18 && (1.18 + closeo) == 2.52) {
          let countdown2: Map<any, any> = new Map([[String.fromCharCode(107,95,54,54,95,97,114,110,114,0),63], [String.fromCharCode(100,95,56,52,95,113,115,99,97,108,101,113,112,0),236], [String.fromCharCode(116,114,121,95,113,95,52,53,0),63]]);
          let crossq = false;
         closeo *= parseFloat(`${parseInt(`${closeo}`) & 2}`);
         countdown2 = new Map([[`${countdown2.size}`, ((crossq ? 1 : 2) ^ 1)]]);
         crossq = countdown2.size == 85 && !crossq;
      }
          let middlewareL = 5;
          let whiteT = String.fromCharCode(119,97,116,99,104,101,115,95,55,95,55,0);
          let window_9ks = 1.0;
         controlA = 36 < whiteT.length;
         middlewareL -= parseInt(`${window_9ks}`) / (Math.max(2, middlewareL));
         whiteT += `${middlewareL}`;
         window_9ks /= Math.max(2, parseFloat(`${2 * middlewareL}`));
         controlA = !controlA;
      while (4 <= videoW.length) {
         videoW += `${parseInt(`${closeo}`)}`;
         break;
      }
      let langj = controlA ? !controlA : controlA;
      do {
         controlA = videoW.length >= 46;
         if (langj) {
            break;
         }
      } while (langj && (controlA && 5.63 <= (4.66 - closeo)));
      while ((closeo / (Math.max(2.86, 9))) >= 5.62 && !controlA) {
         controlA = (100 < ((!controlA ? videoW.length : 100) | videoW.length));
         break;
      }
      let sinaU = videoW == String.fromCharCode(100,95,100,106,100,120,120,105,0);
      do {
         videoW += `${parseInt(`${closeo}`) / 3}`;
         if (sinaU) {
            break;
         }
      } while ((videoW.includes(`${closeo}`)) && sinaU);
      for (let w = 0; w < 2; w++) {
         controlA = String.fromCharCode(100,0) == videoW || closeo <= 77.14;
      }
      zhuboW.push(3 ^ smallM.length);
      gestures = [1 ^ parseInt(`${rankc}`)];
   while ((1 + private_04T.length) == 4 && 1 == (gestures.length + 1)) {
      private_04T += `${parseInt(`${rankc}`)}`;
      break;
   }
   for (let a = 0; a < 2; a++) {
      private_04T += `${(private_04T == String.fromCharCode(105,0) ? private_04T.length : smallM.length)}`;
   }
      switch_ig &= (String.fromCharCode(115,0) == private_04T ? private_04T.length : zhuboW.length);

    const state = await NetInfo.fetch();

      private_04T += `${gestures.length}`;
   let main_lC = string0 == String.fromCharCode(97,52,105,121,97,115,118,51,56,0);
   do {
      string0 += `${2 | gestures.length}`;
      if (main_lC) {
         break;
      }
   } while (main_lC && (1 > string0.length));
   if ((gestures.length + parseInt(`${rankc}`)) < 3 && (3.2 + rankc) < 2.91) {
       let blacklistR: Map<any, any> = new Map([[String.fromCharCode(99,95,49,50,95,99,111,111,114,100,105,110,97,116,101,115,0),583], [String.fromCharCode(115,116,121,112,95,57,95,49,48,48,0),40]]);
       let containerB = String.fromCharCode(116,95,55,53,95,99,111,109,109,105,116,0);
       let fastforward3 = String.fromCharCode(108,115,102,112,111,108,121,0);
      if (fastforward3.length > containerB.length) {
         fastforward3 += `${containerB.length | 2}`;
      }
      let indexb = 8314635 >= blacklistR.size;
      do {
         blacklistR = new Map([[`${blacklistR.size}`, (String.fromCharCode(87,0) == fastforward3 ? blacklistR.size : fastforward3.length)]]);
         if (indexb) {
            break;
         }
      } while (indexb && (4 == (5 * blacklistR.size) && 5 == (containerB.length * blacklistR.size)));
          let darkt = String.fromCharCode(100,99,113,117,97,110,116,95,107,95,57,57,0);
         blacklistR.set(`${containerB}`, (containerB == String.fromCharCode(79,0) ? blacklistR.size : containerB.length));
         darkt += `${darkt.length % 3}`;
       let animationO = String.fromCharCode(120,95,52,55,95,101,99,114,101,100,0);
       let iconr = String.fromCharCode(100,95,56,56,95,115,116,114,116,111,105,110,116,0);
      if (blacklistR.size <= 2) {
         blacklistR.set(iconr, iconr.length);
      }
          let modulev = 1.0;
          let castingm = 1.0;
         containerB += `${parseInt(`${castingm}`)}`;
         modulev *= parseFloat(`${parseInt(`${modulev}`) % (Math.max(3, parseInt(`${modulev}`)))}`);
         castingm += 2 >> (Math.min(Math.abs(parseInt(`${modulev}`)), 1));
       let context_ = String.fromCharCode(100,105,115,116,105,110,99,116,95,120,95,50,53,0);
      for (let a = 0; a < 3; a++) {
         fastforward3 += "3";
      }
      while ((blacklistR.size << (Math.min(context_.length, 1))) <= 2 || 1 <= (2 << (Math.min(1, Math.abs(blacklistR.size))))) {
          let service7: Map<any, any> = new Map([[String.fromCharCode(100,99,116,120,100,99,95,54,95,53,55,0),647], [String.fromCharCode(111,95,49,48,95,119,101,98,112,97,103,101,115,0),710], [String.fromCharCode(112,95,56,54,95,97,100,100,105,110,103,0),756]]);
          let private_u5G: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,110,116,95,48,95,50,57,0),String.fromCharCode(109,115,103,95,53,95,54,55,0)], [String.fromCharCode(105,95,57,51,95,114,110,110,111,105,115,101,0),String.fromCharCode(102,105,120,115,116,114,105,100,101,95,108,95,53,50,0)]]);
          let moon6: Map<any, any> = new Map([[String.fromCharCode(114,101,97,112,95,100,95,56,0),71], [String.fromCharCode(105,115,109,101,109,115,101,116,95,109,95,53,0),112], [String.fromCharCode(112,95,50,95,115,105,98,108,105,110,103,115,0),266]]);
          let stationU: Map<any, any> = new Map([[String.fromCharCode(108,101,100,103,101,114,95,100,95,50,51,0),337], [String.fromCharCode(97,99,117,116,111,102,102,95,111,95,52,52,0),80]]);
          let u_positiona = false;
         blacklistR = new Map([[`${stationU.size}`, (containerB == String.fromCharCode(118,0) ? containerB.length : stationU.size)]]);
         service7.set(`${u_positiona}`, (3 ^ (u_positiona ? 5 : 2)));
         private_u5G.set(`${service7.size}`, 3);
         moon6 = new Map([[`${service7.size}`, service7.size >> (Math.min(Math.abs(3), 5))]]);
         break;
      }
      rankc -= (string0 == String.fromCharCode(118,0) ? goalm : string0.length);
   }
       let tickx: Map<any, any> = new Map([[String.fromCharCode(117,95,55,52,95,117,112,108,111,97,100,101,100,0),790], [String.fromCharCode(101,120,101,99,95,52,95,53,55,0),834], [String.fromCharCode(107,95,56,95,100,101,115,99,114,105,112,116,111,114,115,0),598]]);
       let banners = 2.0;
         banners += 1;
       let searchbarC = String.fromCharCode(110,95,56,57,95,111,118,101,114,114,105,100,101,115,0);
      if ((4 / (Math.max(8, tickx.size))) > 4 || (tickx.size / 4) > 4) {
          let homeA = String.fromCharCode(106,95,57,53,95,97,114,101,97,0);
          let sheetQ = String.fromCharCode(100,114,97,103,103,101,100,95,99,95,49,53,0);
          let bannerP = 1.0;
          let tempm = String.fromCharCode(114,95,55,49,95,99,97,115,116,115,0);
          let downloader6: Array<any> = [366, 535, 655];
         tickx = new Map([[`${tickx.size}`, parseInt(`${bannerP}`)]]);
         homeA += `${tempm.length}`;
         sheetQ = `${sheetQ.length}`;
         bannerP += (String.fromCharCode(65,0) == tempm ? downloader6.length : tempm.length);
         downloader6.push(tempm.length | 2);
      }
          let expiredy = String.fromCharCode(110,101,120,116,108,95,101,95,57,55,0);
         searchbarC = `${searchbarC.length % (Math.max(7, expiredy.length))}`;
      while ((banners * 2.28) < 3.36 && 1 < (tickx.size * parseInt(`${banners}`))) {
         banners += searchbarC.length;
         break;
      }
      if (4 > (2 << (Math.min(1, searchbarC.length)))) {
         searchbarC = `${1 & tickx.size}`;
      }
      rankc /= Math.max(tickx.size + zhuboW.length, 1);
   while (1 <= (string0.length * goalm) || 1 <= (goalm * string0.length)) {
      goalm <<= Math.min(Math.abs(2 ^ zhuboW.length), 4);
      break;
   }
       let tempT: Map<any, any> = new Map([[String.fromCharCode(109,95,51,50,95,109,117,108,116,105,102,114,97,109,101,0),516], [String.fromCharCode(120,106,112,101,103,95,55,95,50,53,0),581]]);
       let backY = String.fromCharCode(111,112,116,105,109,117,109,95,53,95,51,49,0);
       let selection7 = String.fromCharCode(100,105,115,109,105,115,115,95,118,95,55,51,0);
       let benefitN = 0;
      let firebasei = backY == String.fromCharCode(113,118,106,101,98,0);
      do {
         backY = "2";
         if (firebasei) {
            break;
         }
      } while (firebasei && (1 >= tempT.size));
         selection7 += `${benefitN}`;
      let with_98 = 9552340 >= tempT.size;
      do {
         tempT.set(`${benefitN}`, benefitN);
         if (with_98) {
            break;
         }
      } while ((3 < (backY.length - 5) && 1 < (backY.length - 5)) && with_98);
      if ((tempT.size % 1) > 5 && 5 > (tempT.size % 1)) {
          let previewa: Map<any, any> = new Map([[String.fromCharCode(109,102,113,101,95,101,95,57,53,0),198], [String.fromCharCode(111,95,56,49,95,116,104,105,115,0),900], [String.fromCharCode(111,110,101,99,104,95,56,95,50,48,0),759]]);
          let downH = String.fromCharCode(117,95,49,51,95,106,117,108,105,97,110,100,97,121,0);
          let shirtj = String.fromCharCode(122,95,55,53,95,98,102,114,97,99,116,105,111,110,0);
         backY += `${backY.length}`;
         previewa = new Map([[downH, downH.length / (Math.max(shirtj.length, 9))]]);
         shirtj = `${previewa.size << (Math.min(Math.abs(1), 4))}`;
      }
         benefitN &= selection7.length;
      while (tempT.get(`${benefitN}`) == null) {
         benefitN += benefitN + 3;
         break;
      }
      while (3 >= (selection7.length << (Math.min(3, Math.abs(benefitN))))) {
         benefitN %= Math.max(5, tempT.size);
         break;
      }
       let logoutX = true;
       let taiwand = false;
      goalm <<= Math.min(4, gestures.length);
    const offline = !(state.isConnected && state.isInternetReachable);

       let contexto = 2.0;
       let controlR = false;
       let righth = String.fromCharCode(116,95,49,49,95,104,97,115,104,97,98,108,101,0);
      let miniF = controlR ? !controlR : controlR;
      do {
         controlR = contexto <= 36.69 || controlR;
         if (miniF) {
            break;
         }
      } while ((controlR) && miniF);
      let philippinesd = controlR ? !controlR : controlR;
      do {
         controlR = parseFloat(`${righth.length}`) > contexto;
         if (philippinesd) {
            break;
         }
      } while ((controlR && (contexto + 5.10) >= 1.11) && philippinesd);
      if (controlR) {
         controlR = righth.length >= 100;
      }
         controlR = righth.length > 78;
      let right0 = contexto <= 5314924.0;
      do {
         contexto += (parseFloat(`${(controlR ? 1 : 3) - 1}`));
         if (right0) {
            break;
         }
      } while ((!controlR && 2.5 <= (5.99 - contexto)) && right0);
      while (!righth.endsWith(`${controlR}`)) {
         righth = `${(parseInt(`${contexto}`) ^ (controlR ? 1 : 3))}`;
         break;
      }
         contexto -= (parseFloat(`${(controlR ? 4 : 1) & parseInt(`${contexto}`)}`));
      while (controlR) {
         controlR = (contexto * parseFloat(`${righth.length}`)) == 17.94;
         break;
      }
         contexto += parseFloat(`${3}`);
      rankc += switch_ig << (Math.min(4, Math.abs(goalm)));
   while (!smallM.endsWith(`${zhuboW.length}`)) {
      zhuboW.push(gestures.length);
      break;
   }
   while (!smallM.includes(`${rankc}`)) {
      rankc -= switch_ig;
      break;
   }
       let playlistI: Array<any> = [216, 399];
       let areay = 1.0;
       let verticalJ = 0;
      for (let h = 0; h < 3; h++) {
         verticalJ += 1;
      }
       let interstitial5 = String.fromCharCode(104,111,111,107,115,95,118,95,57,52,0);
       let activeF = String.fromCharCode(97,95,55,50,95,97,99,99,101,112,116,101,100,0);
         playlistI.push(activeF.length ^ 3);
         areay += parseFloat(`${2}`);
         activeF += `${activeF.length}`;
         verticalJ ^= parseInt(`${areay}`) >> (Math.min(playlistI.length, 1));
      if (playlistI.length == 4) {
         playlistI.push(2);
      }
         playlistI = [verticalJ];
          let minimizeY = 5;
          let windT = String.fromCharCode(102,102,116,115,95,109,95,56,55,0);
          let backward8: Array<any> = [162, 963];
         activeF = `${parseInt(`${areay}`)}`;
         minimizeY >>= Math.min(Math.abs((windT == String.fromCharCode(76,0) ? windT.length : minimizeY)), 1);
         backward8 = [windT.length | backward8.length];
      goalm *= switch_ig * 3;
       let regengo = 3;
       let macauo = String.fromCharCode(115,109,101,97,114,95,121,95,55,56,0);
         regengo |= macauo.length / 2;
       let viewerW = String.fromCharCode(100,95,53,56,95,111,116,104,0);
         viewerW += `${macauo.length ^ viewerW.length}`;
         macauo += `${macauo.length << (Math.min(Math.abs(1), 5))}`;
       let minimizeQ = 1.0;
       let stepZ = 2.0;
      for (let o = 0; o < 3; o++) {
          let stats7 = 3;
          let telegramw = 0.0;
          let invitet: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,48,0),222], [String.fromCharCode(109,105,100,108,95,116,95,56,0),114]]);
          let privilegev: Array<any> = [741, 17];
         viewerW = `${regengo}`;
         stats7 ^= privilegev.length - stats7;
         telegramw += parseInt(`${telegramw}`);
         invitet.set(`${stats7}`, stats7 / (Math.max(invitet.size, 1)));
         privilegev.push(stats7);
      }
      goalm ^= string0.length * goalm;
      string0 += `${switch_ig << (Math.min(Math.abs(2), 1))}`;
    setIsOffline(offline);

   while (4 <= string0.length) {
      private_04T += `${string0.length | 1}`;
      break;
   }
      private_04T += `${3 % (Math.max(goalm, 1))}`;
      private_04T += `${smallM.length}`;
   for (let e = 0; e < 2; e++) {
      rankc -= private_04T.length >> (Math.min(Math.abs(3), 1));
   }
      smallM += `${goalm ^ private_04T.length}`;
      gestures.push(zhuboW.length);
    setDismountPlayer(false); 
    
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      
      umb_center_carousel.playsViewsAnalytics({
        vod_id: vod.vod_id.toString(),
        vod_name: vod.vod_name,
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

  const fetchVodDetails = () =>
    RCanvas.getDetail(vod?.vod_id.toString() ?? "").then((data) => {
      const isRestricted = data.vod_restricted === 1;

      if (isRestricted) {
        
        
        setTimeout(() => {
          setVodRestricted(isRestricted);
        }, 100);
      } else {
        setVodRestricted(isRestricted);
      }

      return data;
    });

  const { data: vodDetails, isFetching: isFetchingVodDetails } = useQuery({
    queryKey: ["vodDetails", vod?.vod_id],
    queryFn: () => fetchVodDetails(),
  });

  useEffect(() => {
    if (vod !== undefined && vod !== null && vodDetails !== undefined) {
      vod.vod_play_list = vodDetails.vod_play_list;
      vod.vod_play_url = vodDetails.vod_play_url;
      
      dispatch(playVod(vod));
    }

    const isRestricted = vodDetails?.vod_restricted === 1;

    if (isRestricted) {
      
      
      setTimeout(() => {
        setVodRestricted(isRestricted);
      }, 100);
    } else {
      setVodRestricted(isRestricted);
    }
  }, [vodDetails]);

  const fetchVod = () =>
    RCanvas.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as AWXGoogle[]);

  useEffect(() => {
    currentEpisodeRef.current = vod?.episodeWatched;
    setCurrentEpisode(
      vod?.episodeWatched === undefined ? 0 : vod.episodeWatched
    );
  }, [vod]);

  const {
    data: suggestedVods,
    isFetching: isFetchingSuggestedVod,
    refetch,
  } = useQuery({
    queryKey: ["relatedVods", vod],
    queryFn: () => fetchVod(),
  });

  const handleRefresh = useCallback(async () => {
       let detail1: Array<any> = [520, 323, 695];
    let sourcez = 5;
    let malaysiag = true;
    let middle1 = false;
    let productx: Map<any, any> = new Map([[String.fromCharCode(115,95,55,57,95,99,111,109,109,105,115,115,105,111,110,0),String.fromCharCode(110,95,49,57,95,101,120,99,101,112,116,0)], [String.fromCharCode(110,95,55,53,95,108,111,116,116,105,101,108,111,97,100,101,114,0),String.fromCharCode(107,95,51,52,95,110,117,109,101,114,105,102,121,0)]]);
    let t_centerW = 4.0;
    let actives = String.fromCharCode(107,95,55,51,95,109,105,120,105,110,0);
    let tickedi = true;
    let darkD = String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,115,95,54,0);
    let mailR = 5.0;
    let anytime0 = String.fromCharCode(105,95,55,57,95,101,108,105,109,105,110,97,116,105,111,110,0);
    let anytime0I = 0;
    let friendsL = String.fromCharCode(110,95,49,49,95,100,111,119,110,0);
    let fieldL = String.fromCharCode(116,109,112,95,50,95,52,52,0);
      actives += "1";
      t_centerW /= Math.max(parseFloat(`${sourcez & 2}`), 1);
   while (darkD.length >= 3) {
       let filedI = String.fromCharCode(103,95,49,53,95,117,110,122,116,101,108,108,0);
       let main_nV = String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,54,95,53,56,0);
       let uploadG = String.fromCharCode(107,95,56,50,95,104,101,97,118,121,0);
         uploadG += `${3 + uploadG.length}`;
          let field_ = String.fromCharCode(108,105,115,116,110,101,114,115,95,101,95,55,49,0);
          let greyu = String.fromCharCode(114,95,49,48,48,95,112,114,111,109,112,116,0);
          let buttony = String.fromCharCode(103,95,55,55,95,112,105,99,107,105,110,116,101,114,0);
         main_nV += `${field_.length * 3}`;
         field_ = `${(greyu == String.fromCharCode(118,0) ? greyu.length : buttony.length)}`;
         buttony += `${greyu.length / (Math.max(3, 10))}`;
      while (main_nV != uploadG) {
         uploadG = `${main_nV.length}`;
         break;
      }
         main_nV = `${(filedI == String.fromCharCode(85,0) ? filedI.length : main_nV.length)}`;
         filedI = `${uploadG.length}`;
          let nterstitialP = 0;
          let topicW = 3;
          let groupJ = String.fromCharCode(109,95,55,95,115,117,103,103,101,115,116,101,100,0);
         main_nV += `${nterstitialP}`;
         nterstitialP &= groupJ.length;
         topicW += groupJ.length % 2;
          let lightn: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,101,100,95,103,95,54,55,0),188], [String.fromCharCode(115,95,54,95,105,104,116,120,0),212]]);
          let chatl: Array<any> = [String.fromCharCode(113,95,53,53,95,114,105,115,101,0), String.fromCharCode(120,95,56,53,95,97,114,101,97,115,0), String.fromCharCode(103,95,49,49,95,103,101,116,105,110,116,0)];
          let hejiI = String.fromCharCode(111,95,49,55,95,115,105,110,99,0);
         uploadG = `${uploadG.length}`;
         lightn = new Map([[`${lightn.size}`, chatl.length]]);
         chatl.push(3);
         hejiI = `${chatl.length / (Math.max(hejiI.length, 9))}`;
         filedI += `${main_nV.length}`;
      if (main_nV.length > filedI.length) {
         filedI += "1";
      }
      darkD += `${filedI.length}`;
      break;
   }
       let logine = 1.0;
       let emojiI = 0;
      if ((1.18 - logine) <= 5.54) {
         emojiI <<= Math.min(Math.abs(parseInt(`${logine}`)), 3);
      }
          let signinupO: Array<any> = [13, 555, 889];
          let moonM: Map<any, any> = new Map([[String.fromCharCode(102,95,51,54,95,100,101,115,116,114,111,121,0),false ], [String.fromCharCode(114,101,100,97,99,116,101,100,95,111,95,57,54,0),true ], [String.fromCharCode(115,116,114,115,101,112,95,56,95,49,48,48,0),true ]]);
          let overlayw: Array<any> = [234, 411];
         logine *= parseFloat(`${2}`);
         signinupO.push(moonM.size);
         moonM.set(`${signinupO.length}`, 3 | signinupO.length);
         overlayw = [moonM.size % (Math.max(10, signinupO.length))];
      if (3.63 < (logine / (Math.max(4.91, 7)))) {
         logine *= parseFloat(`${parseInt(`${logine}`)}`);
      }
          let playlist4: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,105,110,103,95,98,95,49,54,0),669], [String.fromCharCode(106,95,53,54,95,102,114,97,109,101,98,117,102,102,101,114,0),260]]);
         emojiI *= 2 - emojiI;
         playlist4 = new Map([[`${playlist4.size}`, 3 - playlist4.size]]);
         emojiI <<= Math.min(5, Math.abs(parseInt(`${logine}`)));
      if (2.30 < (logine / (Math.max(4.62, 3)))) {
         logine -= parseFloat(`${2 ^ emojiI}`);
      }
      detail1.push(parseInt(`${t_centerW}`) << (Math.min(3, Math.abs(1))));
   while (!middle1) {
      middle1 = 72.12 <= t_centerW;
      break;
   }
   while (3.52 <= t_centerW) {
       let selectd: Array<any> = [String.fromCharCode(120,95,49,56,95,109,98,98,121,0), String.fromCharCode(116,95,53,54,95,99,111,110,115,116,116,105,109,101,0)];
         selectd.push(3 ^ selectd.length);
      if (selectd.length < 4) {
         selectd = [selectd.length + selectd.length];
      }
         selectd.push(selectd.length);
      actives += `${parseInt(`${mailR}`) << (Math.min(3, Math.abs(2)))}`;
      break;
   }
   for (let g = 0; g < 1; g++) {
      mailR -= parseInt(`${mailR}`) / 3;
   }
   while (1 == (1 & darkD.length) && (2.97 * t_centerW) == 1.10) {
      t_centerW += parseFloat(`${parseInt(`${mailR}`) ^ detail1.length}`);
      break;
   }
      sourcez >>= Math.min(5, Math.abs(((tickedi ? 1 : 2))));

    

      sourcez -= ((tickedi ? 5 : 4) >> (Math.min(Math.abs(3), 2)));
       let viewerv = 4;
       let configureX = String.fromCharCode(115,99,104,110,111,114,114,95,53,95,57,55,0);
          let action5 = String.fromCharCode(104,95,56,48,95,103,114,111,117,112,110,97,109,101,115,0);
          let logoutp = String.fromCharCode(98,95,50,53,95,97,118,101,114,0);
         configureX += `${1 * viewerv}`;
         action5 = `${action5.length}`;
         logoutp = `${logoutp.length >> (Math.min(action5.length, 2))}`;
      let middlew = viewerv >= 8201460;
      do {
         viewerv >>= Math.min(Math.abs(3), 3);
         if (middlew) {
            break;
         }
      } while ((5 <= (5 & configureX.length) || 5 <= (viewerv & 5)) && middlew);
      while (!configureX.endsWith(`${viewerv}`)) {
          let matchesq = String.fromCharCode(105,109,112,108,95,118,95,51,52,0);
          let sendE = 1;
          let robotoQ = 5;
         configureX = "2";
         matchesq += `${matchesq.length ^ 2}`;
         sendE -= 3 + robotoQ;
         robotoQ += matchesq.length & 1;
         break;
      }
         configureX += "2";
      if (!configureX.startsWith(`${viewerv}`)) {
         configureX += `${configureX.length >> (Math.min(2, Math.abs(viewerv)))}`;
      }
      if ((viewerv + configureX.length) <= 4 && 4 <= (configureX.length + viewerv)) {
         viewerv <<= Math.min(3, Math.abs(1));
      }
      t_centerW /= Math.max(parseFloat(`${3 & darkD.length}`), 5);
      t_centerW /= Math.max(parseFloat(`${2 / (Math.max(4, parseInt(`${t_centerW}`)))}`), 2);
   for (let d = 0; d < 1; d++) {
      anytime0 += `${(parseInt(`${mailR}`) << (Math.min(2, Math.abs((tickedi ? 2 : 3)))))}`;
   }
   if (!tickedi) {
       let buttonX = String.fromCharCode(119,101,98,109,105,100,115,95,106,95,50,51,0);
       let singleO = String.fromCharCode(122,95,55,48,95,109,97,121,98,101,0);
       let areaN = String.fromCharCode(98,95,52,51,95,112,114,111,98,101,114,0);
       let volumee = String.fromCharCode(100,105,115,97,112,112,101,97,114,95,105,95,56,55,0);
       let sendx = String.fromCharCode(119,111,114,107,105,110,103,95,120,95,49,53,0);
         singleO = "1";
       let background5 = 4.0;
       let privilegei = 3.0;
      if (sendx.length > 2) {
          let reducerR: Array<any> = [String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,121,95,54,52,0), String.fromCharCode(120,95,56,51,95,97,117,116,111,112,108,97,121,105,110,103,0)];
          let t_titleX = 4.0;
          let hook9 = false;
         volumee += `${(volumee.length * (hook9 ? 1 : 1))}`;
         reducerR.push(reducerR.length % (Math.max(3, 8)));
         t_titleX += parseFloat(`${3}`);
         hook9 = reducerR.length < parseInt(`${t_titleX}`);
      }
      for (let f = 0; f < 2; f++) {
          let descO = String.fromCharCode(100,114,111,112,95,120,95,55,51,0);
          let sourcec: Array<any> = [String.fromCharCode(106,99,109,97,115,116,101,114,95,102,95,56,52,0), String.fromCharCode(105,95,54,55,95,116,105,109,101,111,117,116,101,100,0), String.fromCharCode(106,95,51,56,95,115,99,114,101,101,110,0)];
          let tickM = String.fromCharCode(115,104,111,117,108,100,95,115,95,52,56,0);
         areaN += `${descO.length * 1}`;
         descO = `${sourcec.length + 3}`;
         sourcec = [3];
         tickM = "1";
      }
         areaN += `${parseInt(`${privilegei}`) ^ singleO.length}`;
      while (areaN != buttonX) {
         buttonX += `${buttonX.length}`;
         break;
      }
      let leftw = privilegei <= 5047329.0;
      do {
         privilegei /= Math.max(1, (parseFloat(`${areaN == String.fromCharCode(70,0) ? areaN.length : volumee.length}`)));
         if (leftw) {
            break;
         }
      } while ((5 > singleO.length) && leftw);
         privilegei /= Math.max(1, parseFloat(`${buttonX.length >> (Math.min(Math.abs(1), 4))}`));
          let turnP = String.fromCharCode(107,95,49,51,95,119,97,108,108,112,97,112,101,114,115,0);
         background5 += (parseFloat(`${String.fromCharCode(69,0) == singleO ? buttonX.length : singleO.length}`));
         turnP += `${turnP.length + 1}`;
       let serviceE = 0.0;
       let pauseh = 5.0;
      while (volumee.length == 2 && sendx.length == 2) {
         sendx = `${singleO.length}`;
         break;
      }
         volumee = `${parseInt(`${serviceE}`) << (Math.min(4, Math.abs(parseInt(`${background5}`))))}`;
      let targetn = 9445627.0 <= privilegei;
      do {
          let scorel = true;
          let smallK = String.fromCharCode(99,108,97,115,104,95,114,95,51,0);
          let middleware7: Map<any, any> = new Map([[String.fromCharCode(97,115,107,95,98,95,55,52,0),807], [String.fromCharCode(119,95,52,51,95,97,97,99,112,115,100,115,112,0),232], [String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,95,119,95,52,57,0),143]]);
          let config1: Array<any> = [32, 494, 821];
          let benefitY = String.fromCharCode(102,114,111,109,102,101,95,110,95,56,0);
         privilegei += parseFloat(`${volumee.length}`);
         scorel = smallK.length < 73;
         smallK += "1";
         middleware7.set(smallK, config1.length);
         config1 = [3];
         benefitY = `${(smallK == String.fromCharCode(113,0) ? middleware7.size : smallK.length)}`;
         if (targetn) {
            break;
         }
      } while (targetn && (3 > (buttonX.length % (Math.max(4, 9))) || (1.20 / (Math.max(7, privilegei))) > 2.23));
      for (let d = 0; d < 1; d++) {
         singleO += `${singleO.length}`;
      }
         privilegei /= Math.max(4, parseFloat(`${parseInt(`${background5}`)}`));
      tickedi = detail1.includes(sourcez);
   }
       let weiboo = 4;
       let catalogR = 2.0;
       let search0: Map<any, any> = new Map([[String.fromCharCode(116,95,57,50,95,97,97,97,97,0),true ], [String.fromCharCode(120,95,49,51,95,116,111,111,108,98,97,114,0),false ], [String.fromCharCode(98,95,51,48,95,115,107,97,100,0),true ]]);
       let carousely: Map<any, any> = new Map([[String.fromCharCode(109,105,110,117,115,95,51,95,53,54,0),true ], [String.fromCharCode(99,95,54,56,95,114,101,115,101,116,0),false ]]);
         carousely = new Map([[`${carousely.size}`, 1]]);
      while (2 < (carousely.size & search0.size)) {
          let rewind_ = String.fromCharCode(112,97,103,105,110,103,95,54,95,51,57,0);
          let cast5: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,115,95,52,95,53,51,0),false ], [String.fromCharCode(112,114,101,108,111,97,100,105,110,103,95,55,95,51,52,0),true ]]);
          let favicon1: Array<any> = [String.fromCharCode(114,95,51,50,0), String.fromCharCode(110,95,53,53,95,98,114,101,110,100,101,114,0), String.fromCharCode(119,95,49,49,95,115,116,114,117,99,116,115,0)];
         search0 = new Map([[`${favicon1.length}`, parseInt(`${catalogR}`)]]);
         rewind_ = `${cast5.size}`;
         cast5.set(rewind_, cast5.size);
         favicon1 = [cast5.size];
         break;
      }
      if (3 > (5 * search0.size) && 4.29 > (catalogR * parseFloat(`${search0.size}`))) {
          let mappings: Array<any> = [416, 468];
          let googlej: Array<any> = [516, 708, 342];
          let emoji4 = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,119,95,50,54,0);
         search0 = new Map([[`${search0.size}`, 3]]);
         mappings.push(googlej.length + 1);
         googlej = [googlej.length % (Math.max(3, 10))];
         emoji4 += `${mappings.length & googlej.length}`;
      }
      let videod = search0.size >= 9715677;
      do {
         search0 = new Map([[`${search0.size}`, carousely.size]]);
         if (videod) {
            break;
         }
      } while (videod && (search0.size <= 5));
      let modelsI = search0.size <= 5531203;
      do {
         search0 = new Map([[`${carousely.size}`, search0.size << (Math.min(Math.abs(3), 2))]]);
         if (modelsI) {
            break;
         }
      } while ((4 <= (parseInt(`${catalogR}`) - search0.size)) && modelsI);
      mailR /= Math.max(3, detail1.length ^ 1);
      weiboo &= weiboo;
   if (4.36 < t_centerW) {
      friendsL = `${1 << (Math.min(4, anytime0.length))}`;
   }
       let unticke = String.fromCharCode(108,95,54,51,95,102,101,116,99,104,0);
       let current0 = String.fromCharCode(113,95,53,55,95,101,120,105,116,0);
      for (let g = 0; g < 3; g++) {
         unticke += `${(unticke == String.fromCharCode(82,0) ? current0.length : unticke.length)}`;
      }
         current0 += "2";
         current0 += "1";
       let transferu = 0.0;
       let currentQ = 4.0;
         unticke = `${unticke.length}`;
         transferu /= Math.max(parseInt(`${transferu}`), 5);
      mailR /= Math.max((String.fromCharCode(79,0) == unticke ? anytime0I : unticke.length), 1);
      anytime0I <<= Math.min(Math.abs(2), 5);
    await refetch();

   if (!tickedi && 5 >= (detail1.length | 1)) {
      detail1 = [(productx.size | (malaysiag ? 1 : 5))];
   }
   while (2 <= (sourcez % (Math.max(5, 8))) && sourcez <= 5) {
      malaysiag = actives == anytime0;
      break;
   }
       let style8 = false;
       let agreementw = String.fromCharCode(102,119,104,116,120,95,49,95,53,52,0);
       let taiwane: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,115,95,50,51,0),String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,95,105,95,57,55,0)], [String.fromCharCode(114,101,99,111,109,112,111,115,101,95,112,95,54,48,0),String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,120,95,54,54,0)]]);
      if (taiwane.size > 3 && (3 * taiwane.size) > 5) {
          let listN = false;
          let calendaro = 2.0;
         taiwane.set(`${listN}`, ((style8 ? 1 : 4)));
         calendaro *= parseInt(`${calendaro}`) << (Math.min(1, Math.abs(parseInt(`${calendaro}`))));
      }
      if (2 >= agreementw.length) {
         agreementw = `${((style8 ? 2 : 4) >> (Math.min(Math.abs(taiwane.size), 4)))}`;
      }
      for (let f = 0; f < 2; f++) {
         style8 = !agreementw.endsWith(`${style8}`);
      }
          let termsP = String.fromCharCode(118,116,101,110,99,95,99,95,51,54,0);
         style8 = taiwane.size == 11;
         termsP = `${termsP.length & termsP.length}`;
      while (!style8) {
          let playn = String.fromCharCode(121,95,55,53,95,101,118,114,99,100,97,116,97,0);
          let groupB = String.fromCharCode(98,95,56,48,95,117,110,122,116,101,108,108,0);
         agreementw += `${agreementw.length | 1}`;
         playn += `${groupB.length >> (Math.min(Math.abs(2), 4))}`;
         groupB += `${groupB.length}`;
         break;
      }
          let matchesF = String.fromCharCode(116,97,103,98,105,116,95,101,95,55,53,0);
          let match3 = 5.0;
         style8 = 53 == matchesF.length;
         matchesF += `${parseInt(`${match3}`) - parseInt(`${match3}`)}`;
      let appsC = String.fromCharCode(107,48,108,121,101,0) == agreementw;
      do {
         agreementw += `${(taiwane.size * (style8 ? 5 : 2))}`;
         if (appsC) {
            break;
         }
      } while ((!agreementw.endsWith(`${taiwane.size}`)) && appsC);
         taiwane.set(`${style8}`, (String.fromCharCode(68,0) == agreementw ? agreementw.length : (style8 ? 4 : 5)));
         style8 = !agreementw.includes(`${style8}`);
      darkD += `${taiwane.size ^ sourcez}`;
       let country2 = String.fromCharCode(105,95,54,52,95,109,100,104,100,0);
       let eventX = 0;
       let pauseQ = 3.0;
      for (let b = 0; b < 3; b++) {
         eventX /= Math.max(5, 2);
      }
      let chinaW = 9648008.0 >= pauseQ;
      do {
         pauseQ += 3;
         if (chinaW) {
            break;
         }
      } while (chinaW && (eventX >= pauseQ));
         country2 = `${country2.length - 1}`;
      if (eventX >= country2.length) {
         eventX -= parseInt(`${pauseQ}`);
      }
          let auto_mwD: Array<any> = [569, 307, 119];
          let short_ed = String.fromCharCode(100,114,97,119,116,101,120,116,95,110,95,55,57,0);
          let private_lrK = true;
         pauseQ *= short_ed.length;
         auto_mwD = [auto_mwD.length * 2];
         short_ed += `${3 * auto_mwD.length}`;
       let single6 = 1.0;
      let flyerM = 5083245 <= country2.length;
      do {
         country2 = `${eventX}`;
         if (flyerM) {
            break;
         }
      } while ((eventX < country2.length) && flyerM);
       let leftQ: Array<any> = [744, 725];
       let injurya: Array<any> = [617, 734, 685];
          let feedbackW = false;
         leftQ = [3];
         feedbackW = !feedbackW;
      productx = new Map([[friendsL, anytime0.length]]);
   for (let z = 0; z < 1; z++) {
      tickedi = (detail1.length + productx.size) >= 36;
   }
      t_centerW -= parseFloat(`${actives.length - 2}`);
   let ajaxb = mailR <= 9726126.0;
   do {
      mailR += 2 ^ sourcez;
      if (ajaxb) {
         break;
      }
   } while ((mailR <= 1.40 || (mailR / 1.40) <= 5.70) && ajaxb);
   while (5 >= detail1.length) {
      middle1 = anytime0.length == sourcez;
      break;
   }
       let commentO = 3.0;
         commentO -= parseInt(`${commentO}`) ^ 3;
      let catalogz = 5316191.0 <= commentO;
      do {
         commentO -= 1;
         if (catalogz) {
            break;
         }
      } while (catalogz && (5.62 < (3.100 * commentO)));
      if (commentO > commentO) {
         commentO *= parseInt(`${commentO}`) | parseInt(`${commentO}`);
      }
      mailR *= 3 * sourcez;
    

   let configurez = darkD == String.fromCharCode(50,99,51,105,114,56,0);
   do {
      darkD = "2";
      if (configurez) {
         break;
      }
   } while (configurez && (fieldL != darkD));
      malaysiag = (((!tickedi ? fieldL.length : 44) / (Math.max(3, fieldL.length))) <= 44);
      fieldL = "3";
      malaysiag = actives.length < 46;
   let borderlessI = anytime0.length <= 7711785;
   do {
       let userm = String.fromCharCode(105,95,52,56,95,99,111,110,118,0);
       let chatu = String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,53,95,57,56,0);
       let agreement3 = String.fromCharCode(108,95,48,95,99,111,109,112,108,101,116,101,100,0);
       let hejio: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,115,95,119,95,54,52,0),646], [String.fromCharCode(102,108,117,115,104,105,110,103,95,110,95,51,51,0),857], [String.fromCharCode(107,101,121,101,100,95,109,95,50,53,0),493]]);
       let thailandt = 0;
         agreement3 = `${agreement3.length << (Math.min(Math.abs(2), 2))}`;
      let shootv = 9188229 >= chatu.length;
      do {
         chatu = `${hejio.size * 2}`;
         if (shootv) {
            break;
         }
      } while ((1 > userm.length) && shootv);
      while (hejio.size == userm.length) {
          let others: Array<any> = [964, 666];
          let rulesu = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,99,95,50,54,0);
         hejio = new Map([[`${others.length}`, 3]]);
         others = [2 & rulesu.length];
         rulesu += `${rulesu.length - 3}`;
         break;
      }
       let tempN: Map<any, any> = new Map([[String.fromCharCode(114,101,116,95,56,95,55,48,0),false ], [String.fromCharCode(115,116,114,101,97,109,115,95,57,95,54,48,0),false ]]);
         thailandt *= 1 + userm.length;
      while (hejio.get(`${thailandt}`) == null) {
         thailandt |= hejio.size / 2;
         break;
      }
      if ((2 ^ hejio.size) < 4 && (hejio.size ^ thailandt) < 2) {
         hejio.set(`${agreement3}`, agreement3.length & 3);
      }
      let settingss = String.fromCharCode(51,105,56,52,122,56,0) == chatu;
      do {
          let umengj = true;
          let friendsI = 5;
          let termsA = String.fromCharCode(109,95,56,53,95,99,111,110,116,101,120,116,99,111,110,102,105,103,0);
         chatu += `${termsA.length}`;
         umengj = !umengj;
         friendsI <<= Math.min(5, Math.abs((friendsI - (umengj ? 4 : 3))));
         termsA += `${(friendsI | (umengj ? 4 : 1))}`;
         if (settingss) {
            break;
         }
      } while ((chatu.length > agreement3.length) && settingss);
      if ((5 + thailandt) >= 1) {
         thailandt <<= Math.min(userm.length, 5);
      }
      while ((userm.length / 2) > 5 || (thailandt / 2) > 2) {
         userm = `${chatu.length}`;
         break;
      }
         chatu = `${thailandt << (Math.min(Math.abs(1), 1))}`;
      let frame_2h = chatu == String.fromCharCode(105,52,105,101,113,112,99,0);
      do {
          let mutedo = 2;
          let splash3 = String.fromCharCode(121,95,56,51,95,104,97,110,100,108,105,110,103,0);
          let activeP = 1.0;
          let tempH = 2.0;
          let detailL: Map<any, any> = new Map([[String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,51,95,57,53,0),false ], [String.fromCharCode(117,95,49,49,95,100,101,103,114,97,100,101,100,0),false ]]);
         chatu = `${chatu.length + hejio.size}`;
         mutedo -= 1;
         splash3 = `${detailL.size | splash3.length}`;
         activeP *= parseFloat(`${1}`);
         tempH *= parseFloat(`${2}`);
         detailL = new Map([[splash3, splash3.length & 3]]);
         if (frame_2h) {
            break;
         }
      } while ((3 == chatu.length) && frame_2h);
      while (2 >= (chatu.length | tempN.size) || (2 | tempN.size) >= 5) {
         chatu += `${thailandt ^ 2}`;
         break;
      }
          let emptyu = String.fromCharCode(118,95,52,57,95,100,105,115,112,108,97,121,0);
          let hejic: Map<any, any> = new Map([[String.fromCharCode(107,95,50,57,95,99,111,109,112,97,114,97,98,108,101,0),true ], [String.fromCharCode(99,111,112,121,109,95,53,95,51,49,0),false ]]);
         tempN.set(agreement3, agreement3.length);
         emptyu += `${hejic.size << (Math.min(emptyu.length, 3))}`;
         hejic = new Map([[`${hejic.size}`, hejic.size]]);
      for (let v = 0; v < 2; v++) {
          let appss = String.fromCharCode(108,95,51,54,95,99,111,100,97,98,108,101,0);
          let sharet = 0;
         hejio.set(appss, 2 ^ appss.length);
         sharet &= 3;
      }
      anytime0 += `${hejio.size ^ darkD.length}`;
      if (borderlessI) {
         break;
      }
   } while (borderlessI && (anytime0I > 5));
      friendsL = `${darkD.length}`;
   while (2 > productx.size) {
       let borderlessw = 5.0;
       let rightW = String.fromCharCode(99,104,97,110,110,101,108,115,95,51,95,57,57,0);
       let appleF = String.fromCharCode(115,101,116,100,97,114,95,119,95,54,56,0);
          let middlewarel = 3;
         appleF = `${middlewarel}`;
      for (let p = 0; p < 2; p++) {
          let downloader3 = String.fromCharCode(103,114,111,117,112,105,110,103,95,100,95,51,55,0);
         appleF = `${(String.fromCharCode(118,0) == rightW ? parseInt(`${borderlessw}`) : rightW.length)}`;
         downloader3 = "1";
      }
       let expiredZ = 5;
       let reportm = 3;
         rightW += `${reportm}`;
         expiredZ >>= Math.min(Math.abs(parseInt(`${borderlessw}`) | rightW.length), 4);
      let temperatureJ = 8397923 <= expiredZ;
      do {
         expiredZ <<= Math.min(rightW.length, 5);
         if (temperatureJ) {
            break;
         }
      } while ((5 > (expiredZ * reportm) || (expiredZ * 5) > 5) && temperatureJ);
         appleF = `${rightW.length}`;
      let tickedN = String.fromCharCode(53,111,56,107,114,120,103,99,0) == rightW;
      do {
         rightW += `${parseInt(`${borderlessw}`) >> (Math.min(1, Math.abs(2)))}`;
         if (tickedN) {
            break;
         }
      } while (tickedN && ((expiredZ ^ rightW.length) <= 3 || (3 ^ expiredZ) <= 5));
         appleF += `${2 + reportm}`;
      friendsL += `${productx.size | 1}`;
      break;
   }
   while (2 > (detail1.length + anytime0I)) {
      detail1 = [1];
      break;
   }
       let halfq = String.fromCharCode(108,95,54,49,95,118,101,114,105,102,105,101,114,0);
       let rankB: Array<any> = [642, 268, 651];
       let countdownh = String.fromCharCode(104,95,55,49,95,120,99,111,100,101,0);
      if (5 == rankB.length) {
         rankB = [countdownh.length % (Math.max(8, rankB.length))];
      }
       let episodeq = String.fromCharCode(108,95,49,48,48,95,105,110,116,114,97,112,114,101,100,0);
       let telegramB = String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,48,95,57,49,0);
       let thailandg = 0.0;
       let loginZ = 4.0;
          let searchbar8 = false;
          let clubI = false;
          let promotionT = 0.0;
         thailandg -= (countdownh == String.fromCharCode(120,0) ? countdownh.length : rankB.length);
         searchbar8 = (searchbar8 ? clubI : !searchbar8);
         clubI = (clubI ? !searchbar8 : clubI);
         promotionT *= (parseFloat(`${(clubI ? 1 : 4) | parseInt(`${promotionT}`)}`));
         countdownh = "2";
      let sliderC = 9435769.0 <= thailandg;
      do {
         thailandg -= parseInt(`${loginZ}`);
         if (sliderC) {
            break;
         }
      } while (((episodeq.length & 3) <= 2 && 5.49 <= (thailandg + 4.73)) && sliderC);
      let nativea = 9521618.0 >= thailandg;
      do {
         thailandg += parseInt(`${loginZ}`) << (Math.min(Math.abs(1), 2));
         if (nativea) {
            break;
         }
      } while (((thailandg - 3.87) > 5.21) && nativea);
         halfq += "1";
         countdownh += `${rankB.length}`;
      actives += `${3 * sourcez}`;
    return;
  }, []);

  const saveVodToHistory = (vod: any) => {
    dispatch(
      addVodToHistory(vod, currentTimeRef.current, currentEpisodeRef.current)
    );
    setInitTime(currentTimeRef.current);
    
  };

  useEffect(() => {
    setIsCollapsed(true);
    
    
    
    
    setTimeout(() => {
      episodeRef?.current?.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }, 500);
  }, [currentEpisode, episodeRef, isFetchingVodDetails]);

  useFocusEffect(
    useCallback(() => {
      setDismountPlayer(false);
      return () => {
        setDismountPlayer(true);
        if (
          vod &&
          vod?.vod_play_list.urls?.find((url) => url.nid === currentEpisode)
            ?.url
        ) {
          saveVodToHistory(vod);
          setInitTime(currentTimeRef.current);
          
        }
      };
    }, [vod, currentTimeRef, currentEpisode, videoPlayerRef])
  );

  const renderEpisodes = useCallback(
    ({ item }) => (
      <TouchableOpacity activeOpacity={0.85}
        style={{
          backgroundColor:
            currentEpisode === item.nid ? colors.primary : colors.search,
          paddingVertical: 8,
          paddingHorizontal: 10,
          minWidth: 70,
          marginRight: spacing.xs,
          ...styles.episodeBtn,
        }}
        onPress={() => {
          setCurrentEpisode(item.nid);
          currentEpisodeRef.current = item.nid;
          currentTimeRef.current = 0;
        }}
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
       let play1 = 2.0;
    let suggestionl: Array<any> = [207, 974, 638];
    let successl = String.fromCharCode(106,95,56,55,95,118,105,115,105,116,0);
    let pausee = 0.0;
    let dangerr = String.fromCharCode(97,95,55,50,95,106,112,101,103,99,111,109,112,0);
    let twitter0 = 1.0;
    let sortg = 2.0;
    let update_2k = String.fromCharCode(121,117,118,103,98,114,112,95,54,95,50,52,0);
    let formQ = String.fromCharCode(114,101,102,100,117,112,101,95,109,95,57,56,0);
    let membershipB = 0;
    let info2 = 1.0;
       let calendaro = String.fromCharCode(99,114,101,97,116,101,101,120,95,102,95,55,50,0);
       let guideu = String.fromCharCode(111,112,116,115,95,116,95,56,0);
       let halfJ = String.fromCharCode(109,97,99,114,111,95,50,95,50,49,0);
         guideu += `${(guideu == String.fromCharCode(56,0) ? guideu.length : calendaro.length)}`;
      let carouselS = String.fromCharCode(51,51,52,115,111,122,56,117,112,116,0) == calendaro;
      do {
         calendaro = `${halfJ.length}`;
         if (carouselS) {
            break;
         }
      } while ((guideu != String.fromCharCode(90,0)) && carouselS);
          let volume2 = String.fromCharCode(111,110,103,111,105,110,103,95,110,95,52,53,0);
          let statsU = String.fromCharCode(98,105,108,97,116,101,114,97,108,95,107,95,53,51,0);
          let heart1 = 1.0;
         halfJ += "1";
         volume2 = `${parseInt(`${heart1}`)}`;
         statsU += `${(statsU == String.fromCharCode(108,0) ? statsU.length : parseInt(`${heart1}`))}`;
          let rulesW: Map<any, any> = new Map([[String.fromCharCode(120,95,49,50,95,97,115,99,105,105,0),false ], [String.fromCharCode(105,110,100,101,120,101,115,95,113,95,51,49,0),true ]]);
         halfJ = `${rulesW.size + 1}`;
          let y_image2 = String.fromCharCode(115,116,100,111,117,116,95,121,95,53,56,0);
         halfJ += `${y_image2.length}`;
         guideu += `${halfJ.length}`;
      if (calendaro != guideu) {
         guideu = `${1 - halfJ.length}`;
      }
         calendaro += `${halfJ.length >> (Math.min(guideu.length, 2))}`;
         guideu = `${(String.fromCharCode(120,0) == halfJ ? halfJ.length : guideu.length)}`;
      successl += `${parseInt(`${twitter0}`)}`;
       let middlewaref: Map<any, any> = new Map([[String.fromCharCode(115,95,49,95,115,105,110,103,108,101,0),973], [String.fromCharCode(115,104,105,102,116,105,110,103,115,95,57,95,55,51,0),301]]);
      while (!Array.from(middlewaref.values()).includes(middlewaref.size)) {
          let moduleP: Array<any> = [260, 232];
          let logoutv = 0.0;
         middlewaref.set(`${moduleP.length}`, 1);
         moduleP.push(parseInt(`${logoutv}`));
         break;
      }
      for (let w = 0; w < 2; w++) {
          let readG = 1.0;
          let private_sdV: Array<any> = [String.fromCharCode(101,95,51,55,95,100,116,115,109,0), String.fromCharCode(121,95,57,54,95,100,111,119,110,115,99,97,108,101,0)];
          let sportsg = 4;
          let episodesh: Array<any> = [String.fromCharCode(102,95,51,53,95,100,114,105,118,101,114,0), String.fromCharCode(100,95,55,52,95,114,101,109,111,118,97,98,108,101,0)];
          let short_0w = false;
         middlewaref.set(`${episodesh.length}`, 2 - middlewaref.size);
         readG -= parseFloat(`${parseInt(`${readG}`)}`);
         private_sdV.push(1);
         sportsg &= (private_sdV.length & (short_0w ? 2 : 4));
         episodesh = [parseInt(`${readG}`)];
         short_0w = private_sdV.length > 37;
      }
      let unreadh = 9312252 <= middlewaref.size;
      do {
         middlewaref = new Map([[`${middlewaref.size}`, middlewaref.size]]);
         if (unreadh) {
            break;
         }
      } while (unreadh && (middlewaref.size < 1));
      play1 += suggestionl.length - 1;
      sortg += parseFloat(`${3 | parseInt(`${play1}`)}`);
      successl = "1";
   while (parseInt(`${play1}`) == dangerr.length) {
      play1 += successl.length & suggestionl.length;
      break;
   }

    if (episodeRef.current) {

      update_2k = "1";
   while ((3 + dangerr.length) < 2) {
      sortg *= parseFloat(`${1}`);
      break;
   }
       let upgraded: Array<any> = [583, 812, 645];
      for (let p = 0; p < 2; p++) {
         upgraded = [1];
      }
         upgraded = [1];
          let bing1 = String.fromCharCode(98,95,51,54,95,114,97,98,98,105,116,0);
          let minimize9 = String.fromCharCode(117,110,107,110,111,119,110,115,95,110,95,55,56,0);
          let league9: Array<any> = [518, 996];
         upgraded = [bing1.length];
         bing1 += `${league9.length}`;
         minimize9 += "1";
         league9.push(minimize9.length);
      dangerr += `${suggestionl.length}`;
       let canvas6 = 0;
       let customd = String.fromCharCode(112,97,116,104,95,116,95,57,0);
       let backgroundI = String.fromCharCode(122,114,101,111,114,100,101,114,95,109,95,53,52,0);
      while (4 < canvas6) {
         customd += `${customd.length}`;
         break;
      }
          let with_vc: Array<any> = [562, 917, 535];
          let combineO = 3;
          let privilegeV = String.fromCharCode(120,95,49,48,48,95,98,101,122,101,108,0);
         backgroundI += "3 - canvas6";
         with_vc = [with_vc.length];
         combineO -= privilegeV.length % (Math.max(4, combineO));
         privilegeV += `${(String.fromCharCode(101,0) == privilegeV ? privilegeV.length : with_vc.length)}`;
      while (canvas6 <= 1) {
          let friendsx = 4.0;
          let thailandI: Array<any> = [359, 7, 41];
          let miniT = 3.0;
         customd = `${backgroundI.length & parseInt(`${friendsx}`)}`;
         friendsx -= parseFloat(`${parseInt(`${miniT}`) << (Math.min(2, Math.abs(3)))}`);
         thailandI = [parseInt(`${miniT}`)];
         break;
      }
         canvas6 += (customd == String.fromCharCode(66,0) ? canvas6 : customd.length);
         backgroundI += `${1 / (Math.max(4, customd.length))}`;
      for (let f = 0; f < 1; f++) {
         customd += `${canvas6}`;
      }
      let comment7 = backgroundI == String.fromCharCode(121,48,56,101,107,120,104,0);
      do {
         backgroundI += `${backgroundI.length + 3}`;
         if (comment7) {
            break;
         }
      } while ((4 == backgroundI.length) && comment7);
         backgroundI += `${canvas6 + backgroundI.length}`;
      while (canvas6 >= 5) {
          let reportD = false;
         canvas6 >>= Math.min(3, Math.abs(1));
         reportD = !reportD;
         break;
      }
      play1 -= 1;
      sortg -= parseFloat(`${parseInt(`${play1}`) % (Math.max(8, dangerr.length))}`);
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let areaz = true;
    let firebaseN = String.fromCharCode(120,95,54,55,95,99,100,101,114,114,111,114,0);
    let back_ = 3.0;
    let connectionU: Array<any> = [842, 156];
    let chinae = String.fromCharCode(97,95,50,51,95,102,117,110,99,116,105,111,110,0);
    let hookC = String.fromCharCode(109,111,100,117,108,101,109,97,112,95,117,95,50,52,0);
    let sportsR = String.fromCharCode(102,95,55,56,95,101,100,105,116,111,114,0);
    let gesturesZ = false;
   if (5.45 == back_ || 2.10 == (5.45 * back_)) {
       let main_rV = 2.0;
       let plusI = String.fromCharCode(100,95,57,95,101,120,99,101,101,100,0);
       let updatesU = String.fromCharCode(112,105,118,111,116,95,116,95,57,52,0);
          let stringU = String.fromCharCode(103,95,54,48,95,109,105,110,105,109,97,0);
         plusI = `${parseInt(`${main_rV}`) / (Math.max(stringU.length, 5))}`;
       let iconq = 1;
         iconq *= iconq;
      while (1 >= (updatesU.length % (Math.max(3, 4))) || 2 >= (3 >> (Math.min(1, updatesU.length)))) {
         main_rV -= iconq;
         break;
      }
         iconq &= parseInt(`${main_rV}`) & iconq;
         iconq -= 2 - updatesU.length;
      let layoutz = updatesU == String.fromCharCode(117,98,106,95,97,103,102,113,53,114,0);
      do {
          let questQ: Map<any, any> = new Map([[String.fromCharCode(120,117,116,105,108,95,103,95,53,53,0),974], [String.fromCharCode(111,114,105,103,110,97,108,95,103,95,54,52,0),834], [String.fromCharCode(114,95,54,57,95,104,97,118,105,110,103,0),224]]);
          let searchg = 5;
         updatesU = `${parseInt(`${main_rV}`) ^ questQ.size}`;
         questQ.set(`${searchg}`, searchg);
         if (layoutz) {
            break;
         }
      } while (layoutz && (3 == (updatesU.length - iconq) && 4 == (3 - iconq)));
          let awayR = 5.0;
         plusI += "2";
         awayR += parseInt(`${awayR}`);
      while (2 > iconq) {
         plusI += `${(String.fromCharCode(67,0) == updatesU ? iconq : updatesU.length)}`;
         break;
      }
      back_ -= (parseFloat(`${(gesturesZ ? 4 : 2)}`));
   }
      firebaseN += `${firebaseN.length}`;
   for (let w = 0; w < 3; w++) {
       let bufferK = 5;
       let shareN = true;
          let aboutW = String.fromCharCode(102,111,114,116,104,95,100,95,53,49,0);
          let redirectd: Array<any> = [427, 720];
          let groupQ: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,112,114,105,110,116,95,110,95,52,56,0),String.fromCharCode(115,101,110,100,95,114,95,49,50,0)], [String.fromCharCode(99,95,54,57,95,110,101,119,108,105,110,101,0),String.fromCharCode(100,95,50,57,95,100,105,115,116,114,97,99,116,105,111,110,0)], [String.fromCharCode(119,95,56,53,95,109,112,101,103,97,117,100,105,111,116,97,98,0),String.fromCharCode(100,105,97,108,111,103,95,100,95,54,52,0)]]);
         bufferK &= aboutW.length;
         aboutW = `${redirectd.length}`;
         redirectd.push(3);
         groupQ = new Map([[`${groupQ.size}`, redirectd.length % (Math.max(10, groupQ.size))]]);
      let control7 = bufferK <= 8099110;
      do {
         bufferK -= 3 - bufferK;
         if (control7) {
            break;
         }
      } while (control7 && (shareN));
      for (let a = 0; a < 3; a++) {
         bufferK |= bufferK;
      }
         shareN = !shareN;
         bufferK %= Math.max(((shareN ? 4 : 2) >> (Math.min(Math.abs(bufferK), 2))), 1);
      for (let e = 0; e < 2; e++) {
         bufferK *= 2;
      }
      firebaseN = `${connectionU.length}`;
   }
      areaz = String.fromCharCode(53,0) == firebaseN && 93 < sportsR.length;
   while (chinae == firebaseN) {
       let fielde = 4.0;
      while ((1.13 - fielde) < 3.95 && (1.13 - fielde) < 3.41) {
          let adultw = 5;
          let soundt = 5.0;
          let eacth = 3;
         fielde += adultw / (Math.max(parseInt(`${soundt}`), 7));
         adultw /= Math.max(eacth / 2, 4);
         soundt *= parseFloat(`${eacth}`);
         break;
      }
         fielde += 2 - parseInt(`${fielde}`);
      while (5.25 >= (fielde / (Math.max(3, fielde)))) {
         fielde /= Math.max(4, 2);
         break;
      }
      firebaseN = `${(hookC.length % (Math.max(6, (gesturesZ ? 4 : 2))))}`;
      break;
   }
      hookC += `${(chinae.length + (areaz ? 1 : 2))}`;
   for (let d = 0; d < 1; d++) {
      firebaseN += `${(hookC == String.fromCharCode(98,0) ? hookC.length : connectionU.length)}`;
   }
      connectionU.push(parseInt(`${back_}`) / 3);
   for (let i = 0; i < 1; i++) {
      hookC += `${parseInt(`${back_}`) | hookC.length}`;
   }
   if (hookC.includes(`${connectionU.length}`)) {
      hookC += `${firebaseN.length}`;
   }
   for (let o = 0; o < 1; o++) {
      sportsR = `${(3 >> (Math.min(5, Math.abs((areaz ? 1 : 5)))))}`;
   }
   for (let d = 0; d < 2; d++) {
      chinae = `${firebaseN.length * 2}`;
   }
   for (let j = 0; j < 1; j++) {
      hookC += `${1 & firebaseN.length}`;
   }
   let orientation1 = 5743026 >= connectionU.length;
   do {
      connectionU.push(3);
      if (orientation1) {
         break;
      }
   } while ((connectionU.length <= 4) && orientation1);
   if (5 >= (connectionU.length | chinae.length) || 5 >= (connectionU.length | chinae.length)) {
      chinae = "2";
   }
      areaz = hookC == String.fromCharCode(101,0) && firebaseN.length >= 61;
      sportsR += `${2 * parseInt(`${back_}`)}`;
       let stationsX: Array<any> = [String.fromCharCode(107,95,50,52,95,98,111,111,116,104,0), String.fromCharCode(103,95,54,57,95,99,114,121,115,116,97,108,104,100,0)];
         stationsX.push(stationsX.length);
      while ((stationsX.length / (Math.max(1, stationsX.length))) == 4 || 4 == (stationsX.length / (Math.max(stationsX.length, 4)))) {
          let main_qr: Array<any> = [884, 473];
          let connectionh = 5.0;
          let abouta = String.fromCharCode(100,101,98,108,111,99,107,105,110,103,95,121,95,56,0);
          let c_playery = String.fromCharCode(120,95,54,57,95,100,117,109,0);
         stationsX = [parseInt(`${connectionh}`) + 3];
         main_qr.push(3 << (Math.min(3, abouta.length)));
         connectionh += 2;
         abouta = `${main_qr.length ^ 1}`;
         c_playery += `${(String.fromCharCode(112,0) == c_playery ? c_playery.length : abouta.length)}`;
         break;
      }
      let select0 = stationsX.length >= 7041597;
      do {
         stationsX = [stationsX.length];
         if (select0) {
            break;
         }
      } while (select0 && (stationsX.length <= stationsX.length));
      back_ -= (parseFloat(`${String.fromCharCode(122,0) == hookC ? hookC.length : (gesturesZ ? 1 : 5)}`));
      areaz = chinae.length >= 81;

    setShowSheet(false);
  }, []);

  const onConfirmEpisodeSelection = (selectedEpisodeId: number) => {
    setCurrentEpisode(selectedEpisodeId);
    currentTimeRef.current = 0; 
    handleModalClose();
  };

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  

  const [vodUri, setVodUri] = useState("");

  const debounceSetVodUri = useCallback(
    debounce((uri) => setVodUri(uri), 1000),
    []
  );

  const vodUrl: string = vod?.vod_play_list.urls?.find(
    (url) => url.nid === currentEpisode
  )?.url;

  const handleSearchVideo = useCallback(async () => {
       let module7 = String.fromCharCode(103,95,50,54,95,112,114,111,109,111,116,101,100,0);
    let circlep = 0;
    let searchbarO = String.fromCharCode(112,114,101,99,101,100,101,110,99,101,95,53,95,52,50,0);
    let sinaf: Array<any> = [200, 725];
    let long_dF = true;
    let paginationp = true;
    let sans0 = 4.0;
    let skipV: Array<any> = [979, 641];
    let trashZ = false;
    let refreshw = String.fromCharCode(102,102,112,114,111,98,101,95,117,95,48,0);
    let photoi = 2.0;
    let foundx = String.fromCharCode(101,95,49,48,48,95,112,114,111,112,0);
    let membery = String.fromCharCode(115,101,97,114,99,104,95,101,95,51,55,0);
    let emptyw: Map<any, any> = new Map([[String.fromCharCode(118,105,101,119,112,111,114,116,95,54,95,54,56,0),String.fromCharCode(102,95,57,54,95,112,114,105,110,116,0)], [String.fromCharCode(105,108,111,103,95,52,95,55,48,0),String.fromCharCode(115,95,57,57,95,101,118,101,110,97,118,103,0)], [String.fromCharCode(97,99,99,111,114,100,105,110,103,95,99,95,56,53,0),String.fromCharCode(110,97,109,101,115,112,97,99,101,95,51,95,56,56,0)]]);
   for (let w = 0; w < 3; w++) {
       let link5 = String.fromCharCode(111,95,49,50,95,102,97,105,108,105,110,103,0);
       let modal5 = 2.0;
       let bootsplashQ = 3.0;
       let rulesS: Map<any, any> = new Map([[String.fromCharCode(111,110,116,101,120,116,95,107,95,49,0),672], [String.fromCharCode(116,108,115,95,56,95,57,57,0),870]]);
       let default__p3 = false;
          let downloadedY = 0.0;
          let vignette9 = 2;
         modal5 /= Math.max(1, 3 / (Math.max(10, parseInt(`${downloadedY}`))));
         downloadedY -= vignette9 / (Math.max(9, vignette9));
      while (!default__p3 || 1 == (rulesS.size - 1)) {
          let confirmation8 = String.fromCharCode(108,111,111,107,117,112,95,97,95,52,52,0);
         rulesS.set(`${modal5}`, ((default__p3 ? 3 : 1) - parseInt(`${modal5}`)));
         confirmation8 += `${confirmation8.length / 1}`;
         break;
      }
          let collection6: Array<any> = [715, 526];
         rulesS = new Map([[`${rulesS.size}`, rulesS.size >> (Math.min(Math.abs(2), 3))]]);
         collection6.push(collection6.length + 2);
         default__p3 = default__p3 && rulesS.size == 92;
      for (let x = 0; x < 2; x++) {
          let macauS = String.fromCharCode(114,101,102,117,110,100,95,116,95,50,0);
          let refresh6: Map<any, any> = new Map([[String.fromCharCode(113,95,52,52,95,114,116,109,112,99,114,121,112,116,0),606], [String.fromCharCode(114,95,54,53,95,109,111,100,101,120,112,0),381]]);
         rulesS = new Map([[macauS, 2]]);
         macauS += `${2 - refresh6.size}`;
         refresh6 = new Map([[`${refresh6.size}`, refresh6.size / (Math.max(1, 2))]]);
      }
      for (let p = 0; p < 2; p++) {
         link5 += `${link5.length - 2}`;
      }
      while (5 <= link5.length) {
          let loadingE = String.fromCharCode(120,95,55,95,112,97,99,107,101,116,112,101,101,107,0);
          let subsN = String.fromCharCode(98,97,115,101,100,95,122,95,52,51,0);
          let constantsf = String.fromCharCode(115,95,55,52,95,115,117,114,114,111,117,110,100,0);
          let configuree: Array<any> = [445, 33, 958];
          let ballT: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,110,95,116,95,52,57,0),485], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,55,95,55,49,0),952], [String.fromCharCode(112,95,57,50,95,116,111,117,112,112,101,114,0),707]]);
         bootsplashQ -= parseInt(`${bootsplashQ}`) & 3;
         loadingE = `${loadingE.length - ballT.size}`;
         subsN = `${ballT.size}`;
         constantsf += `${subsN.length}`;
         configuree.push((String.fromCharCode(72,0) == constantsf ? constantsf.length : subsN.length));
         break;
      }
         rulesS.set(link5, (1 + (default__p3 ? 2 : 5)));
      for (let i = 0; i < 2; i++) {
         bootsplashQ *= 2;
      }
      while (default__p3) {
         link5 = `${parseInt(`${modal5}`)}`;
         break;
      }
          let liveN = String.fromCharCode(106,95,51,53,95,111,109,112,108,105,99,97,116,105,111,110,0);
         link5 = `${3 ^ liveN.length}`;
         modal5 += 1;
      if (link5.endsWith(`${default__p3}`)) {
         default__p3 = 12.31 > (modal5 + bootsplashQ);
      }
      let promotion2 = default__p3 ? !default__p3 : default__p3;
      do {
         default__p3 = !default__p3;
         if (promotion2) {
            break;
         }
      } while (promotion2 && (!default__p3 || (modal5 - 1.90) == 5.62));
      if (4.93 <= (bootsplashQ + 3.28)) {
         default__p3 = !default__p3;
      }
      skipV.push((parseInt(`${photoi}`) % (Math.max(7, (long_dF ? 2 : 5)))));
   }
   while (long_dF) {
       let alertG = 0.0;
       let area9: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,112,111,97,0),true ], [String.fromCharCode(105,95,52,57,95,101,114,99,0),true ], [String.fromCharCode(116,95,51,53,95,99,117,116,101,115,116,0),true ]]);
       let indicator9 = 2.0;
       let emoji4 = String.fromCharCode(114,101,102,105,110,101,100,95,117,95,55,51,0);
       let middleo = String.fromCharCode(115,95,56,56,95,99,97,112,116,117,114,105,110,103,0);
      while (parseFloat(`${area9.size}`) < indicator9) {
         area9 = new Map([[`${area9.size}`, area9.size]]);
         break;
      }
      for (let o = 0; o < 1; o++) {
         middleo += `${parseInt(`${alertG}`) | area9.size}`;
      }
      while (middleo.includes(`${area9.size}`)) {
          let share2 = 0.0;
          let turnb = false;
          let descu = 4.0;
          let flyerW = 2.0;
         area9.set(`${descu}`, parseInt(`${share2}`) & parseInt(`${descu}`));
         share2 /= Math.max((parseFloat(`${(turnb ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${flyerW}`)), 4))}`)), 5);
         turnb = !turnb;
         flyerW *= (parseInt(`${flyerW}`) - (turnb ? 5 : 3));
         break;
      }
      if (3 <= (parseInt(`${indicator9}`) * 4) || 5.36 <= (indicator9 * 2.17)) {
         emoji4 = "1";
      }
          let paginationr = String.fromCharCode(116,97,100,100,95,57,95,56,57,0);
          let switch_zo = 4.0;
         area9.set(`${indicator9}`, 1 + area9.size);
         paginationr += `${3 << (Math.min(5, Math.abs(parseInt(`${switch_zo}`))))}`;
         switch_zo /= Math.max((parseFloat(`${String.fromCharCode(56,0) == paginationr ? parseInt(`${switch_zo}`) : paginationr.length}`)), 3);
         alertG -= (emoji4 == String.fromCharCode(65,0) ? emoji4.length : middleo.length);
      while ((middleo.length + 3) < 1) {
         indicator9 += parseFloat(`${area9.size}`);
         break;
      }
         emoji4 = `${emoji4.length}`;
         area9.set(middleo, emoji4.length);
      for (let e = 0; e < 2; e++) {
          let current8 = true;
          let transferM = String.fromCharCode(117,95,50,95,121,111,110,108,121,0);
          let analyticsj = false;
         middleo += `${((analyticsj ? 5 : 4) - transferM.length)}`;
         current8 = !current8;
         transferM += "1";
      }
          let progressf = false;
          let short_42o = false;
         middleo += `${(String.fromCharCode(87,0) == middleo ? parseInt(`${indicator9}`) : middleo.length)}`;
         progressf = (progressf ? short_42o : !progressf);
         short_42o = !progressf;
          let helperV = String.fromCharCode(118,95,56,53,95,115,105,103,97,108,103,0);
          let buttonQ = String.fromCharCode(110,95,51,50,95,109,105,110,105,0);
         emoji4 = `${(String.fromCharCode(54,0) == helperV ? middleo.length : helperV.length)}`;
         buttonQ += "1";
      while (!emoji4.startsWith(`${middleo.length}`)) {
         emoji4 = "1";
         break;
      }
         indicator9 /= Math.max(1, parseFloat(`${parseInt(`${indicator9}`) / (Math.max(middleo.length, 9))}`));
       let event5 = String.fromCharCode(116,114,105,97,110,103,108,101,95,118,95,48,0);
       let viewer0 = String.fromCharCode(121,95,55,55,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
      sans0 -= (parseFloat(`${middleo == String.fromCharCode(99,0) ? middleo.length : (long_dF ? 3 : 1)}`));
      break;
   }
       let kick_: Map<any, any> = new Map([[String.fromCharCode(121,95,55,52,95,97,115,99,105,105,0),505], [String.fromCharCode(102,97,99,116,111,114,105,122,97,116,105,111,110,95,53,95,50,57,0),945], [String.fromCharCode(99,95,54,57,95,111,119,110,0),102]]);
       let blacklistT = String.fromCharCode(105,110,112,117,116,95,112,95,53,54,0);
       let j_titled = String.fromCharCode(114,111,108,101,95,110,95,54,48,0);
          let countdowna = true;
         j_titled += `${kick_.size - blacklistT.length}`;
         countdowna = (!countdowna ? countdowna : !countdowna);
          let u_title5 = String.fromCharCode(102,95,57,50,95,97,105,109,100,0);
          let recommendations: Array<any> = [114, 810, 881];
         j_titled += `${j_titled.length >> (Math.min(u_title5.length, 5))}`;
         u_title5 += `${recommendations.length}`;
         recommendations.push(1);
      for (let k = 0; k < 1; k++) {
         j_titled += `${1 - j_titled.length}`;
      }
      let episodeb = blacklistT == String.fromCharCode(51,122,102,119,117,49,121,100,113,107,0);
      do {
         blacklistT += `${kick_.size / (Math.max(2, 7))}`;
         if (episodeb) {
            break;
         }
      } while ((!j_titled.endsWith(blacklistT)) && episodeb);
         kick_ = new Map([[`${kick_.size}`, kick_.size]]);
         blacklistT += `${(j_titled == String.fromCharCode(82,0) ? kick_.size : j_titled.length)}`;
      let rankA = j_titled == String.fromCharCode(110,99,102,52,121,110,102,119,0);
      do {
          let chinas = String.fromCharCode(102,95,54,54,95,99,97,112,116,105,111,110,115,0);
          let drag5: Map<any, any> = new Map([[String.fromCharCode(105,109,112,95,111,95,55,55,0),String.fromCharCode(110,95,53,52,95,114,101,119,97,114,100,115,0)], [String.fromCharCode(114,97,108,102,100,97,116,97,95,106,95,49,48,48,0),String.fromCharCode(99,111,109,97,110,100,95,55,95,54,48,0)]]);
          let confirmation5 = 4.0;
          let details0 = 5.0;
         j_titled += `${drag5.size}`;
         chinas += `${chinas.length}`;
         drag5.set(`${details0}`, parseInt(`${confirmation5}`));
         details0 /= Math.max(1, parseFloat(`${parseInt(`${details0}`)}`));
         if (rankA) {
            break;
         }
      } while ((1 == j_titled.length) && rankA);
          let megaphone7 = false;
          let emojit = String.fromCharCode(115,117,98,116,97,115,107,95,56,95,51,56,0);
          let statsk: Array<any> = [String.fromCharCode(98,95,56,57,95,102,114,97,109,101,100,97,116,97,0), String.fromCharCode(114,101,115,116,111,114,97,116,105,111,110,95,52,95,56,52,0), String.fromCharCode(99,111,110,102,108,105,99,116,115,95,118,95,57,49,0)];
         blacklistT = `${emojit.length << (Math.min(Math.abs(1), 5))}`;
         megaphone7 = statsk.length < statsk.length;
         emojit += `${statsk.length >> (Math.min(statsk.length, 1))}`;
          let splashX = true;
          let fieldE = true;
         blacklistT += `${((splashX ? 2 : 2))}`;
         splashX = fieldE;
      trashZ = kick_.size <= 4;
   let infow = sinaf.length >= 6635822;
   do {
       let canvas_ = 1.0;
       let basketballe = 5;
       let tempm = 4.0;
         tempm /= Math.max(4, 2);
      let viewerw = basketballe <= 7515532;
      do {
         basketballe /= Math.max(basketballe | 2, 1);
         if (viewerw) {
            break;
         }
      } while (((3.16 - canvas_) == 5.14 || (3.16 - canvas_) == 2.3) && viewerw);
      if (4 > (basketballe / 4)) {
          let profilea = 5;
          let regengd: Map<any, any> = new Map([[String.fromCharCode(122,95,57,49,95,120,99,98,103,114,97,98,0),String.fromCharCode(99,97,110,100,108,101,95,109,95,53,55,0)], [String.fromCharCode(113,117,101,115,116,105,111,110,115,95,51,95,56,49,0),String.fromCharCode(101,116,119,111,114,107,95,114,95,55,48,0)], [String.fromCharCode(97,99,107,117,112,95,98,95,56,53,0),String.fromCharCode(101,95,49,51,95,117,110,109,97,112,102,105,108,101,0)]]);
          let temps = String.fromCharCode(102,95,49,57,95,99,117,109,117,108,97,116,105,118,101,0);
          let searchbarG: Array<any> = [43, 780];
         basketballe >>= Math.min(Math.abs(parseInt(`${canvas_}`)), 4);
         profilea |= temps.length;
         regengd.set(`${profilea}`, profilea);
         temps = `${2 * regengd.size}`;
         searchbarG = [searchbarG.length / 3];
      }
          let chartg = 0;
         tempm *= chartg;
      if ((1 >> (Math.min(5, Math.abs(basketballe)))) == 3 || (basketballe / (Math.max(8, canvas_))) == 5.31) {
         basketballe -= parseInt(`${tempm}`) % (Math.max(10, parseInt(`${canvas_}`)));
      }
      for (let w = 0; w < 3; w++) {
          let chinaU = String.fromCharCode(100,101,116,101,114,109,105,110,101,95,101,95,49,52,0);
          let darko = 2.0;
          let weiboc = String.fromCharCode(111,112,101,110,105,110,103,95,114,95,49,0);
          let leftk = String.fromCharCode(98,112,114,105,110,116,95,100,95,55,48,0);
          let long_4rc = 4.0;
         basketballe *= 2;
         chinaU += `${parseInt(`${long_4rc}`)}`;
         darko *= parseFloat(`${leftk.length | weiboc.length}`);
         weiboc = "2";
         leftk += `${leftk.length}`;
      }
         basketballe ^= basketballe - parseInt(`${canvas_}`);
       let bottom5 = String.fromCharCode(105,100,101,110,116,95,111,95,55,57,0);
          let lineg = 5.0;
          let descue: Array<any> = [808, 796];
         tempm /= Math.max(1, 1 & parseInt(`${canvas_}`));
         lineg -= descue.length;
         descue = [parseInt(`${lineg}`)];
      sinaf = [((paginationp ? 2 : 1) << (Math.min(Math.abs(parseInt(`${tempm}`)), 4)))];
      if (infow) {
         break;
      }
   } while (infow && (photoi <= 3.59));

    const searchTerm = vod?.vod_name ? vod?.vod_name : "";
    const encodedSearchTerm = encodeURIComponent(searchTerm);

   if ((circlep - skipV.length) > 2) {
      circlep <<= Math.min(Math.abs(parseInt(`${sans0}`) * 2), 2);
   }
   let eighteenm = sans0 <= 6268472.0;
   do {
       let viewsN = 0.0;
       let recommendation1 = 0;
       let progressz = 2.0;
         progressz += parseFloat(`${1}`);
      for (let z = 0; z < 3; z++) {
         recommendation1 >>= Math.min(Math.abs(1 >> (Math.min(Math.abs(parseInt(`${progressz}`)), 3))), 3);
      }
         recommendation1 += recommendation1 / (Math.max(8, parseInt(`${progressz}`)));
      while ((3.40 * progressz) < 2.17 && (parseFloat(`${recommendation1}`) * progressz) < 3.40) {
         recommendation1 <<= Math.min(2, Math.abs(1 + recommendation1));
         break;
      }
          let emojiq = 1.0;
          let homep = 4.0;
          let redirectr = String.fromCharCode(103,114,111,117,112,105,110,103,95,103,95,56,49,0);
         recommendation1 |= 3 / (Math.max(1, recommendation1));
         emojiq += parseFloat(`${parseInt(`${homep}`)}`);
         redirectr = `${parseInt(`${homep}`) ^ redirectr.length}`;
      for (let a = 0; a < 1; a++) {
         progressz /= Math.max(parseFloat(`${2 + parseInt(`${viewsN}`)}`), 1);
      }
         viewsN *= parseFloat(`${parseInt(`${progressz}`) + parseInt(`${viewsN}`)}`);
      for (let g = 0; g < 1; g++) {
          let goal7: Array<any> = [932, 816];
          let leftb = String.fromCharCode(114,95,53,52,95,115,116,97,116,105,111,110,97,114,121,0);
          let reminder9 = String.fromCharCode(99,95,50,51,95,99,116,114,108,0);
          let membershipP: Map<any, any> = new Map([[String.fromCharCode(102,115,121,110,99,95,122,95,55,55,0),String.fromCharCode(102,101,97,116,117,114,101,100,95,118,95,57,52,0)], [String.fromCharCode(120,95,51,49,95,102,101,116,99,104,101,114,0),String.fromCharCode(109,118,112,114,111,98,115,95,121,95,49,49,0)]]);
          let sortX = String.fromCharCode(103,95,57,49,95,99,111,115,116,105,0);
         recommendation1 ^= 2 * recommendation1;
         goal7 = [(leftb == String.fromCharCode(74,0) ? leftb.length : reminder9.length)];
         reminder9 += `${3 & reminder9.length}`;
         membershipP = new Map([[reminder9, reminder9.length]]);
         sortX += `${1 / (Math.max(2, reminder9.length))}`;
      }
         viewsN *= parseFloat(`${recommendation1}`);
      sans0 /= Math.max(1, parseFloat(`${1}`));
      if (eighteenm) {
         break;
      }
   } while (eighteenm && (5 == (1 >> (Math.min(3, module7.length))) || (module7.length / (Math.max(9, parseInt(`${sans0}`)))) == 1));
   for (let p = 0; p < 2; p++) {
      foundx += `${(parseInt(`${photoi}`) ^ (trashZ ? 2 : 2))}`;
   }
   let type_kE = photoi >= 6579115.0;
   do {
      photoi /= Math.max(2, parseInt(`${photoi}`) >> (Math.min(3, Math.abs(circlep))));
      if (type_kE) {
         break;
      }
   } while ((!sinaf.includes(photoi)) && type_kE);
    

   while (!long_dF) {
      long_dF = sinaf.length <= 49;
      break;
   }
   while (3 >= skipV.length) {
      skipV.push(1 / (Math.max(4, parseInt(`${photoi}`))));
      break;
   }
   for (let b = 0; b < 1; b++) {
      long_dF = (paginationp ? long_dF : paginationp);
   }
   for (let v = 0; v < 2; v++) {
       let statisticsF = false;
       let humiditya = 3;
       let viewerX = 3.0;
         humiditya >>= Math.min(Math.abs(humiditya & 1), 2);
         humiditya /= Math.max(2, 5);
         humiditya |= (parseInt(`${viewerX}`) + (statisticsF ? 3 : 4));
      while (2.30 <= (humiditya - viewerX)) {
          let eventK = String.fromCharCode(105,95,54,55,95,111,112,116,101,100,0);
         viewerX -= parseFloat(`${eventK.length * humiditya}`);
         break;
      }
      while (humiditya >= 4) {
          let benefitS = String.fromCharCode(112,114,101,118,111,117,115,95,50,95,55,57,0);
          let sidep = 2.0;
         statisticsF = (parseInt(`${viewerX}`) / (Math.max(benefitS.length, 3))) >= 51;
         benefitS += `${parseInt(`${sidep}`)}`;
         break;
      }
      if (humiditya == 2) {
         viewerX -= (parseFloat(`${parseInt(`${viewerX}`) * (statisticsF ? 3 : 3)}`));
      }
         humiditya &= parseInt(`${viewerX}`);
         statisticsF = 32 <= humiditya;
      while (4 > (humiditya & 3)) {
         viewerX *= (parseFloat(`${(statisticsF ? 1 : 2) - parseInt(`${viewerX}`)}`));
         break;
      }
      trashZ = photoi >= 89.34;
   }
    

      photoi -= parseInt(`${sans0}`);
      photoi *= refreshw.length << (Math.min(Math.abs(2), 3));
   for (let v = 0; v < 3; v++) {
      searchbarO = `${module7.length}`;
   }
   for (let s = 0; s < 2; s++) {
       let notificationp = 5.0;
       let pause3 = String.fromCharCode(113,95,52,55,95,112,114,111,112,97,103,97,116,105,111,110,0);
       let projectg: Array<any> = [324, 174, 406];
      for (let p = 0; p < 1; p++) {
         pause3 += "3";
      }
      let rankAh = pause3 == String.fromCharCode(102,119,118,0);
      do {
          let downloadingN = 5;
         pause3 = "1";
         downloadingN -= downloadingN;
         if (rankAh) {
            break;
         }
      } while (rankAh && ((projectg.length * pause3.length) >= 2 && (pause3.length * projectg.length) >= 2));
      while (pause3.length >= 1) {
         pause3 += `${1 * parseInt(`${notificationp}`)}`;
         break;
      }
      let zhengpiana = pause3.length >= 9010502;
      do {
          let descV = String.fromCharCode(116,104,117,109,98,95,97,95,50,51,0);
          let lessv: Array<any> = [385, 216];
          let commonQ = 5.0;
          let catagory9: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,101,97,115,101,95,55,95,52,53,0),91], [String.fromCharCode(98,95,56,53,95,97,110,110,111,116,97,116,101,0),745], [String.fromCharCode(108,95,55,57,95,118,97,108,105,100,0),192]]);
          let mathT = String.fromCharCode(114,95,50,55,95,115,116,97,99,107,116,114,97,99,101,0);
         pause3 += "1";
         descV = `${lessv.length ^ parseInt(`${commonQ}`)}`;
         lessv.push(parseInt(`${commonQ}`) ^ 1);
         catagory9 = new Map([[`${catagory9.size}`, 3 + catagory9.size]]);
         mathT = `${lessv.length}`;
         if (zhengpiana) {
            break;
         }
      } while (zhengpiana && (2 >= (pause3.length / 2) || (parseInt(`${notificationp}`) / (Math.max(2, pause3.length))) >= 2));
      for (let a = 0; a < 3; a++) {
         projectg.push(projectg.length % 1);
      }
      while (notificationp <= 4.76) {
         notificationp += (String.fromCharCode(67,0) == pause3 ? projectg.length : pause3.length);
         break;
      }
         pause3 += `${(String.fromCharCode(89,0) == pause3 ? parseInt(`${notificationp}`) : pause3.length)}`;
      while (5 < (pause3.length ^ 5) || (pause3.length - parseInt(`${notificationp}`)) < 5) {
         pause3 = `${parseInt(`${notificationp}`) / (Math.max(pause3.length, 9))}`;
         break;
      }
      for (let w = 0; w < 2; w++) {
         notificationp /= Math.max(projectg.length, 4);
      }
      paginationp = !trashZ;
   }
    const url = `https://www.bing.com/search?q=${encodedSearchTerm}&form=QBLH&sp=-1&ghc=1&lq=0&pq=a&sc=10-1&qs=n&sk=&cvid=F4E27DDDEE8343F082F994097EF7592A&ghsh=0&ghacc=0&ghpl=`;

      module7 += `${1 << (Math.min(Math.abs(parseInt(`${sans0}`)), 1))}`;
      trashZ = foundx.length >= 48 || !paginationp;
      sinaf = [1 % (Math.max(circlep, 1))];
   let launchC = refreshw.length >= 6456961;
   do {
      refreshw = `${(membery == String.fromCharCode(88,0) ? foundx.length : membery.length)}`;
      if (launchC) {
         break;
      }
   } while (launchC && (1 == (5 ^ refreshw.length)));
    try {

       let faviconq = 0.0;
      for (let a = 0; a < 3; a++) {
          let anytime6: Map<any, any> = new Map([[String.fromCharCode(121,117,118,114,103,98,97,95,115,95,57,52,0),9], [String.fromCharCode(99,111,102,97,99,116,111,114,0),638]]);
          let shooto = String.fromCharCode(98,117,102,102,101,114,105,110,103,95,115,95,53,52,0);
          let catagorye: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,101,115,95,57,95,56,56,0),594], [String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,53,95,53,53,0),565]]);
         faviconq -= 2;
         anytime6 = new Map([[`${anytime6.size}`, 3 >> (Math.min(4, shooto.length))]]);
         shooto += `${catagorye.size}`;
         catagorye = new Map([[`${anytime6.size}`, shooto.length * anytime6.size]]);
      }
         faviconq /= Math.max(5, parseInt(`${faviconq}`));
         faviconq /= Math.max(parseInt(`${faviconq}`) & 3, 2);
      sinaf.push(parseInt(`${photoi}`) << (Math.min(2, Math.abs(2))));
   let const_8j = long_dF ? !long_dF : long_dF;
   do {
       let fullD = 5.0;
       let plash7 = false;
      for (let i = 0; i < 2; i++) {
          let nativeJ = 4.0;
          let fills = 4;
          let countdown5 = String.fromCharCode(98,114,101,110,100,101,114,95,103,95,52,56,0);
         plash7 = 43.1 <= fullD || !plash7;
         nativeJ *= parseInt(`${nativeJ}`);
         fills %= Math.max(3, fills);
         countdown5 = `${3 & countdown5.length}`;
      }
      while (4.72 == fullD) {
         plash7 = plash7 && fullD == 58.91;
         break;
      }
       let infoP = 2;
      let middlewareK = plash7 ? !plash7 : plash7;
      do {
         plash7 = !plash7;
         if (middlewareK) {
            break;
         }
      } while ((!plash7) && middlewareK);
      for (let l = 0; l < 1; l++) {
         plash7 = 90 == infoP;
      }
         plash7 = !plash7;
      long_dF = trashZ || photoi >= 11.18;
      if (const_8j) {
         break;
      }
   } while (const_8j && (2 >= membery.length));
      sans0 /= Math.max(1, parseFloat(`${parseInt(`${photoi}`)}`));
   for (let l = 0; l < 3; l++) {
      circlep *= parseInt(`${photoi}`);
   }
      if (await InAppBrowser.isAvailable()) {

   let incidentF = sans0 >= 5346981.0;
   do {
      sans0 *= parseFloat(`${module7.length}`);
      if (incidentF) {
         break;
      }
   } while (incidentF && ((1 * module7.length) > 5));
   if (long_dF || searchbarO.length < 2) {
      long_dF = (53 > ((long_dF ? 53 : skipV.length) * skipV.length));
   }
   while (foundx.length == 4) {
      long_dF = !refreshw.includes(`${trashZ}`);
      break;
   }
      trashZ = foundx.endsWith(`${paginationp}`);
        await InAppBrowser.open(url);
      } else {

   for (let l = 0; l < 1; l++) {
      trashZ = long_dF;
   }
      trashZ = long_dF;
       let sheetr = 0.0;
          let storet: Array<any> = [859, 575, 429];
          let changew = String.fromCharCode(100,95,52,52,95,98,105,103,103,101,115,116,0);
          let bellT = 3.0;
         sheetr += storet.length;
         storet = [1];
         changew = `${parseInt(`${bellT}`) % (Math.max(changew.length, 5))}`;
         bellT *= parseFloat(`${parseInt(`${bellT}`) >> (Math.min(Math.abs(2), 4))}`);
      for (let b = 0; b < 2; b++) {
         sheetr -= parseInt(`${sheetr}`) << (Math.min(2, Math.abs(3)));
      }
         sheetr *= parseInt(`${sheetr}`);
      foundx = `${((trashZ ? 3 : 4) | 3)}`;
       let long_l3u: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,111,110,115,101,116,0),638], [String.fromCharCode(102,101,116,99,104,95,113,95,53,52,0),38]]);
       let champion_ = 3;
       let vietnamP = 5.0;
          let sourcel = String.fromCharCode(117,109,98,101,114,95,114,95,55,55,0);
         vietnamP -= long_l3u.size & parseInt(`${vietnamP}`);
         sourcel = `${sourcel.length + 2}`;
      if (5 > (4 << (Math.min(4, Math.abs(long_l3u.size)))) && 2 > (long_l3u.size * 4)) {
         vietnamP *= parseInt(`${vietnamP}`) + long_l3u.size;
      }
      for (let q = 0; q < 3; q++) {
         long_l3u.set(`${champion_}`, parseInt(`${vietnamP}`) + 3);
      }
         long_l3u = new Map([[`${long_l3u.size}`, long_l3u.size]]);
         vietnamP -= long_l3u.size % (Math.max(3, 9));
          let borderlessF = false;
         vietnamP += long_l3u.size;
         borderlessF = !borderlessF || borderlessF;
      if (5 > champion_) {
         vietnamP /= Math.max(3, long_l3u.size << (Math.min(Math.abs(3), 5)));
      }
      for (let b = 0; b < 1; b++) {
         vietnamP -= 2 ^ long_l3u.size;
      }
      for (let k = 0; k < 3; k++) {
         champion_ >>= Math.min(5, Math.abs(champion_ - long_l3u.size));
      }
      searchbarO = `${(module7 == String.fromCharCode(95,0) ? module7.length : sinaf.length)}`;
        Linking.openURL(url);
      }
    } catch (e) {

       let tickU = 3.0;
      for (let d = 0; d < 1; d++) {
         tickU /= Math.max(parseInt(`${tickU}`), 4);
      }
         tickU *= parseInt(`${tickU}`) * parseInt(`${tickU}`);
          let headerK = String.fromCharCode(100,95,49,95,110,111,110,122,101,114,111,0);
          let bellX = String.fromCharCode(98,95,54,51,95,112,105,110,110,105,110,103,0);
          let privacyD = String.fromCharCode(111,95,53,57,95,99,111,118,101,114,0);
         tickU *= (String.fromCharCode(75,0) == privacyD ? parseInt(`${tickU}`) : privacyD.length);
         headerK += `${1 + headerK.length}`;
         bellX += `${bellX.length}`;
      module7 = `${parseInt(`${tickU}`)}`;
       let changeR: Map<any, any> = new Map([[String.fromCharCode(110,95,55,55,95,114,105,110,103,116,111,110,101,115,0),222], [String.fromCharCode(102,95,50,55,95,121,111,103,97,0),929], [String.fromCharCode(111,95,55,55,95,116,109,109,98,110,0),667]]);
      for (let n = 0; n < 3; n++) {
         changeR.set(`${changeR.size}`, 1 + changeR.size);
      }
      for (let b = 0; b < 3; b++) {
         changeR = new Map([[`${changeR.size}`, 3 ^ changeR.size]]);
      }
         changeR.set(`${changeR.size}`, changeR.size);
      skipV = [foundx.length];
   if (3 >= (searchbarO.length + skipV.length)) {
      skipV.push(refreshw.length);
   }
   let splash0 = skipV.length >= 8616323;
   do {
      skipV = [foundx.length | membery.length];
      if (splash0) {
         break;
      }
   } while ((3 >= (1 & foundx.length) || (skipV.length & 1) >= 1) && splash0);
      Linking.openURL(url);
    }
  }, [vod]);

  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  

  

  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  

  
  
  

  const fetchComments = () =>
    RCanvas.getReviewDetails(vod?.vod_douban_id.toString() ?? "").then(
      (data) => {
        return data.douban_reviews;
      }
    );

  const { data: onlineComments, isFetching: isFetchingComments } = useQuery({
    queryKey: ["relatedComments", vod?.vod_id],
    queryFn: () => fetchComments(),
  });

  useEffect(() => {
    const mergeAllComments = async () => {
       let combinedH = 2.0;
    let filter0 = String.fromCharCode(100,111,119,110,108,111,97,100,95,49,95,55,49,0);
    let thailandN = false;
    let tickS = String.fromCharCode(115,95,56,51,95,103,97,109,101,0);
    let episodeu: Array<any> = [String.fromCharCode(121,95,49,57,95,117,110,99,111,110,115,117,109,101,100,0), String.fromCharCode(100,95,56,95,115,108,105,100,101,115,104,111,119,0), String.fromCharCode(115,95,51,52,95,114,105,118,97,116,101,0)];
    let orientationf = String.fromCharCode(107,95,53,52,95,118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0);
    let hooks = 4.0;
    let telegramc = 0.0;
   while ((4 % (Math.max(1, episodeu.length))) >= 2) {
       let selected4: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,115,95,53,95,51,54,0),334], [String.fromCharCode(114,103,98,116,111,98,103,114,95,118,95,49,0),663], [String.fromCharCode(112,108,97,116,101,97,117,95,106,95,53,55,0),814]]);
       let privacyk = true;
       let topicv = 0.0;
         topicv += parseInt(`${topicv}`);
      for (let g = 0; g < 3; g++) {
         privacyk = selected4.size >= 53;
      }
      if (topicv <= 3.30) {
          let profileA = String.fromCharCode(116,97,98,108,101,105,110,105,116,95,109,95,50,57,0);
         privacyk = 74.46 <= topicv;
         profileA = `${profileA.length}`;
      }
          let rewindj = String.fromCharCode(110,95,51,50,95,115,101,108,101,99,116,101,100,0);
          let privilegef: Map<any, any> = new Map([[String.fromCharCode(98,95,56,56,95,104,97,118,101,0),false ], [String.fromCharCode(97,116,116,114,105,98,117,116,101,115,95,101,95,55,0),true ]]);
          let catalog8 = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,98,95,50,51,0);
         privacyk = !privacyk;
         rewindj += `${(catalog8 == String.fromCharCode(52,0) ? rewindj.length : catalog8.length)}`;
         privilegef = new Map([[`${privilegef.size}`, privilegef.size]]);
         selected4.set(`${privacyk}`, (parseInt(`${topicv}`) % (Math.max(6, (privacyk ? 3 : 4)))));
         selected4 = new Map([[`${selected4.size}`, ((privacyk ? 3 : 3) & selected4.size)]]);
          let minivod4 = String.fromCharCode(101,110,99,111,100,101,114,95,110,95,53,54,0);
          let long_0oO = String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,110,95,49,52,0);
          let infoM = String.fromCharCode(97,100,100,101,114,95,53,95,57,51,0);
         privacyk = (long_0oO.length * parseInt(`${topicv}`)) <= 26;
         minivod4 += `${(infoM == String.fromCharCode(49,0) ? infoM.length : minivod4.length)}`;
         long_0oO += "1";
      if (!privacyk) {
          let dark5 = String.fromCharCode(111,95,55,50,95,99,97,117,116,101,114,105,122,101,0);
          let grey8 = String.fromCharCode(101,120,99,101,101,100,101,100,95,98,95,53,53,0);
          let activeY = 3.0;
          let bottomb = 4.0;
          let ajaxJ = String.fromCharCode(119,114,105,116,101,99,98,95,121,95,49,0);
         topicv /= Math.max((grey8 == String.fromCharCode(119,0) ? ajaxJ.length : grey8.length), 2);
         dark5 += `${dark5.length / 3}`;
         activeY /= Math.max(dark5.length % 2, 5);
         bottomb -= dark5.length ^ parseInt(`${activeY}`);
         ajaxJ = `${parseInt(`${bottomb}`)}`;
      }
       let animationv = String.fromCharCode(109,111,100,97,108,95,104,95,57,50,0);
      episodeu = [((thailandN ? 1 : 2) & 3)];
      break;
   }
      combinedH += parseFloat(`${1 - parseInt(`${hooks}`)}`);
   for (let p = 0; p < 2; p++) {
       let matchesR = String.fromCharCode(107,95,53,49,95,97,116,116,114,105,98,117,116,101,115,0);
       let t_countl = 2.0;
       let weibo7 = 5.0;
          let twitterb = true;
         matchesR += `${3 >> (Math.min(Math.abs(parseInt(`${t_countl}`)), 1))}`;
         twitterb = !twitterb;
      for (let a = 0; a < 1; a++) {
         t_countl *= 2 & parseInt(`${weibo7}`);
      }
         matchesR = `${(matchesR == String.fromCharCode(100,0) ? matchesR.length : parseInt(`${weibo7}`))}`;
      let greenz = t_countl <= 7778520.0;
      do {
         t_countl /= Math.max(5, parseInt(`${t_countl}`) ^ parseInt(`${weibo7}`));
         if (greenz) {
            break;
         }
      } while (greenz && (5.92 >= (t_countl / 5.32)));
         matchesR += "1";
         weibo7 *= parseFloat(`${2}`);
         matchesR += `${parseInt(`${t_countl}`)}`;
      while (4.40 == (5.88 + t_countl) || 5.39 == (weibo7 + 5.88)) {
          let yellowr = String.fromCharCode(108,108,118,105,100,100,115,112,95,100,95,53,49,0);
          let calendar_: Array<any> = [419, 237, 500];
          let eighteenT = String.fromCharCode(106,95,54,54,95,100,98,111,111,108,104,117,102,102,0);
          let download_: Map<any, any> = new Map([[String.fromCharCode(101,114,108,101,95,118,95,54,54,0),637], [String.fromCharCode(112,97,115,115,99,111,100,101,95,119,95,49,57,0),602]]);
          let invitek: Array<any> = [String.fromCharCode(97,95,51,95,108,97,100,100,101,114,115,116,101,112,0), String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,117,95,55,52,0)];
         weibo7 /= Math.max(1, parseFloat(`${invitek.length}`));
         yellowr = `${calendar_.length & 1}`;
         calendar_ = [2];
         eighteenT += `${2 / (Math.max(3, eighteenT.length))}`;
         download_ = new Map([[`${calendar_.length}`, (String.fromCharCode(70,0) == yellowr ? calendar_.length : yellowr.length)]]);
         invitek = [1];
         break;
      }
      while ((3.20 + weibo7) == 3.24) {
         weibo7 -= parseFloat(`${2 / (Math.max(parseInt(`${weibo7}`), 5))}`);
         break;
      }
      episodeu.push(parseInt(`${weibo7}`) % 3);
   }

      let mergedArray;

      combinedH *= parseFloat(`${parseInt(`${hooks}`) / 2}`);
   for (let o = 0; o < 1; o++) {
      filter0 = `${3 * parseInt(`${hooks}`)}`;
   }
   let clubH = String.fromCharCode(110,109,118,56,115,0) == tickS;
   do {
      tickS += `${parseInt(`${hooks}`) >> (Math.min(Math.abs(3), 5))}`;
      if (clubH) {
         break;
      }
   } while (clubH && (orientationf != String.fromCharCode(105,0)));
      const locComments = await getLocalComments();

   while (!filter0.includes(`${hooks}`)) {
      filter0 += `${1 * tickS.length}`;
      break;
   }
   if (combinedH < parseFloat(`${filter0.length}`)) {
      combinedH -= parseFloat(`${orientationf.length}`);
   }
      orientationf = `${parseInt(`${combinedH}`) >> (Math.min(5, Math.abs(2)))}`;

      if (onlineComments) {

   for (let x = 0; x < 2; x++) {
       let componentt = 5.0;
       let promotionc = String.fromCharCode(109,102,114,97,95,108,95,50,53,0);
       let assiste = String.fromCharCode(97,95,55,51,95,114,116,112,112,108,97,121,0);
         assiste += `${promotionc.length}`;
          let subs5 = false;
          let dropdownx = 4.0;
          let episodesK: Map<any, any> = new Map([[String.fromCharCode(119,95,49,57,95,115,99,104,101,109,101,0),String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,98,95,52,52,0)], [String.fromCharCode(120,95,55,57,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0),String.fromCharCode(97,110,110,101,120,98,109,112,95,109,95,50,51,0)], [String.fromCharCode(103,95,49,50,95,112,101,114,115,112,0),String.fromCharCode(111,95,56,48,95,112,111,111,108,114,101,102,0)]]);
         componentt /= Math.max(parseInt(`${dropdownx}`), 4);
         subs5 = !subs5;
         dropdownx += (parseFloat(`${(subs5 ? 1 : 1) | 1}`));
         episodesK.set(`${subs5}`, ((subs5 ? 3 : 4) * episodesK.size));
      for (let r = 0; r < 3; r++) {
         promotionc += `${1 / (Math.max(4, promotionc.length))}`;
      }
      for (let g = 0; g < 1; g++) {
         assiste = "2";
      }
         promotionc += `${assiste.length % (Math.max(3, 7))}`;
      if (5.47 > (4.3 * componentt) || (4.3 * componentt) > 2.48) {
          let logoutb: Array<any> = [236, 55, 486];
          let castingE: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,99,108,95,107,95,50,49,0),228], [String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,95,108,95,50,52,0),75]]);
          let rulesi = String.fromCharCode(102,95,53,54,95,100,101,99,111,117,112,108,101,0);
         componentt -= logoutb.length;
         logoutb = [rulesi.length * castingE.size];
         castingE.set(rulesi, 3 >> (Math.min(3, Math.abs(castingE.size))));
      }
         assiste += `${parseInt(`${componentt}`)}`;
      let modityr = 9153146.0 >= componentt;
      do {
         componentt /= Math.max(promotionc.length + 3, 3);
         if (modityr) {
            break;
         }
      } while (modityr && (4 >= (5 * parseInt(`${componentt}`)) && (assiste.length * componentt) >= 1.83));
         promotionc = `${parseInt(`${componentt}`)}`;
      thailandN = !thailandN;
   }
      episodeu.push(3);
   for (let i = 0; i < 2; i++) {
      filter0 += "1";
   }
        mergedArray = locComments.concat(onlineComments);
      } else {

   for (let g = 0; g < 1; g++) {
      combinedH *= parseFloat(`${2}`);
   }
      hooks /= Math.max(3, 2);
   for (let f = 0; f < 2; f++) {
      combinedH -= parseFloat(`${episodeu.length % 3}`);
   }
        mergedArray = onlineComments;
      }

      setAllComment(mergedArray);

      filter0 = `${filter0.length % 3}`;
   for (let k = 0; k < 3; k++) {
      filter0 = `${((thailandN ? 1 : 1) % 1)}`;
   }
      hooks -= 1;
      setShowLoading(isFetchingComments);

      episodeu = [orientationf.length];
   while (1 <= tickS.length) {
      tickS = `${2 ^ parseInt(`${hooks}`)}`;
      break;
   }
       let privilegep = 5;
       let sporta: Array<any> = [String.fromCharCode(107,95,55,53,95,109,109,97,112,0), String.fromCharCode(113,95,54,49,95,115,97,118,101,0)];
         privilegep %= Math.max(1, sporta.length);
         sporta.push(sporta.length);
      filter0 += `${3 & tickS.length}`;
      console.log("done");
    };

    if (!isFetchingComments) {
      mergeAllComments();
    }
  }, [isFetchingComments, isUpdated]);

  const locCommentId = "userComment" + vod?.vod_id;
  const getLocalComments = async () => {
       let indicatorc = 4.0;
    let floaterp = 0.0;
    let areaf = false;
    let catalogN = 4.0;
    let downO: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,114,112,109,95,52,95,51,48,0),493], [String.fromCharCode(119,105,108,108,95,104,95,57,54,0),761], [String.fromCharCode(100,95,51,95,104,111,114,105,122,111,110,116,97,108,108,121,0),295]]);
    let showh = 4;
    let circlew: Array<any> = [935, 898, 982];
    let nativem = String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,48,95,57,48,0);
    let statsu = String.fromCharCode(108,111,99,105,95,54,95,56,57,0);
    let sellJ = false;
    let chinaU = 4.0;
    let popups = 4.0;
    let thumbnailk = 0.0;
       let stationsJ = String.fromCharCode(109,97,114,107,101,114,95,110,95,57,51,0);
      if (stationsJ == String.fromCharCode(49,0)) {
         stationsJ += `${(stationsJ == String.fromCharCode(98,0) ? stationsJ.length : stationsJ.length)}`;
      }
      if (1 >= stationsJ.length) {
         stationsJ += `${stationsJ.length << (Math.min(stationsJ.length, 2))}`;
      }
       let downloaderv = String.fromCharCode(104,95,54,53,95,121,118,99,111,110,102,105,103,0);
       let guideK = String.fromCharCode(99,95,52,49,95,105,110,116,101,114,108,101,97,118,105,110,103,0);
      areaf = indicatorc < floaterp;
       let other0 = 3;
       let previewD = String.fromCharCode(104,95,56,95,105,110,100,101,118,115,0);
       let countryB = String.fromCharCode(104,95,51,55,95,98,111,114,100,101,114,101,100,0);
      while (2 == other0) {
         countryB += `${previewD.length / (Math.max(1, 1))}`;
         break;
      }
      while (5 > previewD.length) {
         other0 >>= Math.min(previewD.length, 3);
         break;
      }
      while ((other0 % 4) == 1 && (other0 % (Math.max(9, countryB.length))) == 4) {
         other0 /= Math.max(2, 1 & other0);
         break;
      }
         other0 <<= Math.min(1, Math.abs(other0));
      if (previewD.includes(`${other0}`)) {
          let episodel: Array<any> = [525, 52, 281];
          let clearL = String.fromCharCode(105,95,54,48,95,102,108,117,115,104,0);
          let thumbnailG = 4.0;
          let vignette7 = true;
         other0 -= (clearL == String.fromCharCode(65,0) ? other0 : clearL.length);
         episodel.push(((vignette7 ? 3 : 2) % (Math.max(9, parseInt(`${thumbnailG}`)))));
         thumbnailG += (1 ^ (vignette7 ? 4 : 1));
      }
      if ((5 >> (Math.min(1, countryB.length))) >= 5) {
         countryB += `${other0 % (Math.max(previewD.length, 10))}`;
      }
         previewD += "2";
         countryB = "1";
          let textw: Map<any, any> = new Map([[String.fromCharCode(116,95,52,49,95,115,107,101,108,101,116,111,110,0),843], [String.fromCharCode(115,101,109,97,110,116,105,99,95,119,95,49,0),206]]);
         previewD = `${2 << (Math.min(2, Math.abs(textw.size)))}`;
      circlew.push(circlew.length);
      nativem += `${showh / 3}`;

    try {

      circlew.push(downO.size * parseInt(`${floaterp}`));
   let flyer9 = 9752186 <= nativem.length;
   do {
       let checkbox9: Array<any> = [String.fromCharCode(106,95,55,53,95,109,101,97,115,117,114,101,115,0), String.fromCharCode(108,101,114,112,114,103,98,95,122,95,52,54,0), String.fromCharCode(98,111,111,116,115,116,114,97,112,95,118,95,54,50,0)];
       let untickO = String.fromCharCode(116,112,105,100,95,101,95,51,55,0);
       let handler1 = String.fromCharCode(97,116,116,114,98,117,116,101,95,103,95,56,50,0);
       let pauseO = 1.0;
       let custom2 = 0.0;
      for (let o = 0; o < 2; o++) {
         checkbox9.push((handler1 == String.fromCharCode(99,0) ? handler1.length : untickO.length));
      }
         pauseO /= Math.max(4, parseFloat(`${3 & parseInt(`${custom2}`)}`));
      while (handler1.startsWith(`${pauseO}`)) {
         handler1 = `${checkbox9.length}`;
         break;
      }
         handler1 += "3";
      if (5 >= (5 >> (Math.min(5, untickO.length))) || 5 >= (untickO.length - parseInt(`${pauseO}`))) {
          let successr = String.fromCharCode(106,95,52,53,95,105,111,115,116,114,101,97,109,0);
         pauseO /= Math.max(5, parseFloat(`${untickO.length}`));
         successr += "3";
      }
      let listX = checkbox9.length >= 5538767;
      do {
         checkbox9 = [(String.fromCharCode(101,0) == untickO ? untickO.length : checkbox9.length)];
         if (listX) {
            break;
         }
      } while (listX && ((pauseO * 1.35) >= 3.80));
         custom2 *= parseFloat(`${2 * untickO.length}`);
      if ((pauseO - 2.75) == 1.8 || 2.75 == (pauseO - parseFloat(`${handler1.length}`))) {
          let dangert: Array<any> = [417, 397, 559];
          let formA = String.fromCharCode(107,95,57,95,114,117,98,121,0);
          let leftO = String.fromCharCode(119,95,57,52,95,109,101,103,101,100,0);
         handler1 += `${handler1.length}`;
         dangert.push(dangert.length);
         formA = `${(formA == String.fromCharCode(86,0) ? leftO.length : formA.length)}`;
         leftO += `${dangert.length - 3}`;
      }
      nativem = `${showh}`;
      if (flyer9) {
         break;
      }
   } while (flyer9 && ((downO.size / (Math.max(nativem.length, 5))) > 4 && (4 / (Math.max(10, nativem.length))) > 4));
      sellJ = downO.get(`${floaterp}`) == null;
      const comments = await AsyncStorage.getItem(locCommentId);

   let spece = areaf ? !areaf : areaf;
   do {
      areaf = !sellJ;
      if (spece) {
         break;
      }
   } while (spece && (!areaf));
   let mappingY = chinaU <= 6951046.0;
   do {
       let skipj = 4;
       let roomg = 0.0;
       let screenG = 5.0;
      let themeV = roomg <= 8674367.0;
      do {
         roomg += parseFloat(`${3}`);
         if (themeV) {
            break;
         }
      } while (themeV && ((screenG * 1.57) < 5.28 && (screenG * 1.57) < 3.19));
         skipj &= 1 % (Math.max(parseInt(`${roomg}`), 3));
      while (skipj == 5) {
          let auto_8ic = String.fromCharCode(109,117,108,114,101,115,95,56,95,53,52,0);
          let commentM = 2.0;
          let configureP = String.fromCharCode(97,95,54,54,95,99,111,110,110,101,99,116,105,111,110,0);
          let h_unlockb: Map<any, any> = new Map([[String.fromCharCode(100,95,53,49,95,112,114,105,111,114,105,116,121,113,0),String.fromCharCode(110,97,118,105,103,97,116,111,114,95,103,95,49,57,0)], [String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,95,99,95,50,54,0),String.fromCharCode(110,95,51,50,0)], [String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,53,95,54,52,0),String.fromCharCode(110,95,51,51,95,100,111,117,98,108,105,110,103,0)]]);
         screenG /= Math.max(configureP.length | 3, 2);
         auto_8ic += `${parseInt(`${commentM}`) - 3}`;
         commentM += auto_8ic.length;
         configureP += `${h_unlockb.size}`;
         h_unlockb = new Map([[`${commentM}`, 2]]);
         break;
      }
      for (let i = 0; i < 2; i++) {
         roomg /= Math.max(parseFloat(`${parseInt(`${roomg}`) * skipj}`), 1);
      }
         roomg *= parseFloat(`${skipj + parseInt(`${screenG}`)}`);
      while (roomg < 5.20) {
         roomg /= Math.max(2, parseFloat(`${parseInt(`${screenG}`) ^ 3}`));
         break;
      }
       let sheetH = 0.0;
       let friends2 = 1.0;
      for (let m = 0; m < 1; m++) {
         friends2 += 2 | skipj;
      }
      while ((roomg + screenG) == 3.76 || (roomg + 3.76) == 2.64) {
          let detailsk = 5.0;
          let circleu = String.fromCharCode(114,101,115,105,100,101,110,99,101,95,56,95,51,0);
          let floaterL: Array<any> = [131, 623];
          let constantsQ = String.fromCharCode(111,95,50,54,95,105,110,99,108,117,115,105,111,110,115,0);
         screenG -= parseInt(`${detailsk}`) / (Math.max(6, skipj));
         detailsk /= Math.max(constantsQ.length, 2);
         circleu += `${(String.fromCharCode(67,0) == constantsQ ? constantsQ.length : floaterL.length)}`;
         floaterL = [floaterL.length ^ constantsQ.length];
         break;
      }
      chinaU -= parseFloat(`${parseInt(`${floaterp}`) & downO.size}`);
      if (mappingY) {
         break;
      }
   } while (mappingY && (1.3 >= (chinaU * 1.4)));
   for (let y = 0; y < 1; y++) {
      floaterp += (parseFloat(`${statsu == String.fromCharCode(101,0) ? statsu.length : downO.size}`));
   }
      console.log("comments stored in local storage ", locCommentId);

      downO.set(`${circlew.length}`, downO.size * circlew.length);
   for (let n = 0; n < 2; n++) {
       let countryu = String.fromCharCode(117,110,108,105,110,107,95,104,95,52,56,0);
       let large0 = 2;
       let signinupz = 4.0;
       let paginationA = 3.0;
      if ((countryu.length * parseInt(`${signinupz}`)) < 4) {
          let hongkongS = 3.0;
          let pageS = String.fromCharCode(103,95,52,56,95,114,101,118,97,108,105,100,97,116,105,110,103,0);
         signinupz /= Math.max(parseFloat(`${pageS.length - 3}`), 1);
         hongkongS -= parseFloat(`${parseInt(`${hongkongS}`) >> (Math.min(Math.abs(parseInt(`${hongkongS}`)), 3))}`);
         pageS += `${1 * parseInt(`${hongkongS}`)}`;
      }
         large0 &= 3;
      let temperatureW = 6650282 <= large0;
      do {
         large0 += 2 % (Math.max(10, parseInt(`${signinupz}`)));
         if (temperatureW) {
            break;
         }
      } while ((3 == (large0 / 1)) && temperatureW);
          let turn2: Map<any, any> = new Map([[String.fromCharCode(110,95,49,49,95,117,116,99,0),197], [String.fromCharCode(115,117,114,101,95,119,95,49,51,0),798], [String.fromCharCode(97,116,116,101,109,112,116,115,95,98,95,52,48,0),147]]);
         paginationA -= parseInt(`${signinupz}`) * large0;
         turn2 = new Map([[`${turn2.size}`, turn2.size]]);
      if ((paginationA / 3.92) <= 5.80 && 3.2 <= (3.92 - signinupz)) {
         paginationA -= parseInt(`${signinupz}`);
      }
         signinupz -= parseFloat(`${parseInt(`${signinupz}`)}`);
      let renewW = 7013963.0 <= signinupz;
      do {
         signinupz += parseFloat(`${2 / (Math.max(3, large0))}`);
         if (renewW) {
            break;
         }
      } while ((3.19 <= (signinupz + parseFloat(`${large0}`)) && 1 <= (1 & large0)) && renewW);
      if ((countryu.length * 1) < 4) {
         large0 *= 1;
      }
       let volumet = String.fromCharCode(97,95,48,95,115,116,111,114,97,103,101,0);
       let star5 = String.fromCharCode(98,111,117,110,100,101,100,95,120,95,50,50,0);
          let singapored = String.fromCharCode(97,95,57,55,95,108,111,99,107,0);
          let listU = String.fromCharCode(100,111,103,95,121,95,50,54,0);
          let sinaF = String.fromCharCode(99,97,108,108,111,99,95,100,95,54,54,0);
         large0 %= Math.max(countryu.length, 2);
         singapored = `${listU.length - singapored.length}`;
         listU = `${singapored.length >> (Math.min(1, listU.length))}`;
         sinaF = `${(String.fromCharCode(120,0) == listU ? sinaF.length : listU.length)}`;
      while (5 < large0) {
          let policyZ = String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,95,111,95,57,54,0);
          let backwardx = String.fromCharCode(114,115,104,105,102,116,95,101,95,50,53,0);
          let hoverW = 3;
          let singaporeG = 0;
         large0 |= parseInt(`${paginationA}`) << (Math.min(2, Math.abs(parseInt(`${signinupz}`))));
         policyZ += `${singaporeG ^ 2}`;
         backwardx = `${singaporeG}`;
         hoverW += singaporeG;
         break;
      }
      let calendar4 = 8555076 >= large0;
      do {
         large0 *= volumet.length ^ 1;
         if (calendar4) {
            break;
         }
      } while (calendar4 && (5 <= (1 % (Math.max(9, star5.length))) && (large0 % (Math.max(1, 9))) <= 3));
      showh %= Math.max(1 | parseInt(`${indicatorc}`), 5);
   }
   while (showh >= 4) {
       let gmailE: Map<any, any> = new Map([[String.fromCharCode(103,97,109,109,97,95,48,95,51,52,0),true ], [String.fromCharCode(112,111,116,105,115,105,111,110,95,108,95,51,57,0),true ]]);
       let analyticsX = 5.0;
       let trash0: Array<any> = [String.fromCharCode(120,95,57,53,95,112,114,111,106,101,99,116,101,100,0), String.fromCharCode(108,95,53,56,95,114,101,112,108,97,121,101,114,0), String.fromCharCode(101,120,116,95,122,95,54,50,0)];
       let styleK = String.fromCharCode(114,101,99,111,110,105,110,116,114,97,95,114,95,55,0);
      for (let m = 0; m < 2; m++) {
         trash0.push(styleK.length << (Math.min(2, Math.abs(parseInt(`${analyticsX}`)))));
      }
         analyticsX *= parseFloat(`${parseInt(`${analyticsX}`) / (Math.max(3, gmailE.size))}`);
       let othere = true;
      let catagory1 = othere ? !othere : othere;
      do {
         othere = trash0.length >= 4;
         if (catagory1) {
            break;
         }
      } while (catagory1 && (5.80 < analyticsX));
      while (1.10 <= analyticsX) {
          let routerc = 4;
          let humiditye = String.fromCharCode(114,101,103,105,111,110,115,95,122,95,50,50,0);
          let signinupK: Map<any, any> = new Map([[String.fromCharCode(97,95,49,50,95,115,105,112,114,0),701], [String.fromCharCode(115,116,97,109,112,95,55,95,57,55,0),851]]);
          let championx = 2.0;
         trash0.push(gmailE.size);
         routerc /= Math.max(routerc, 3);
         humiditye = "1";
         signinupK = new Map([[`${signinupK.size}`, signinupK.size >> (Math.min(Math.abs(1), 2))]]);
         championx += 3;
         break;
      }
      if ((analyticsX / (Math.max(parseFloat(`${trash0.length}`), 4))) > 3.46 && (3 << (Math.min(2, trash0.length))) > 2) {
         trash0 = [gmailE.size | 3];
      }
       let agreement4 = String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,54,95,49,56,0);
       let smallF = String.fromCharCode(109,95,54,51,95,117,110,99,108,97,109,112,101,100,0);
       let commentX: Array<any> = [856, 139];
       let search9: Array<any> = [String.fromCharCode(100,95,57,50,95,115,116,98,108,0), String.fromCharCode(104,95,52,53,95,117,110,105,102,111,114,109,115,0), String.fromCharCode(111,95,54,50,95,116,111,111,108,0)];
      showh *= 3;
      break;
   }
      console.log(comments);

   if (5.14 <= catalogN) {
       let grayN = 4.0;
       let macau8 = 0;
       let nterstitials = String.fromCharCode(113,117,97,100,95,101,95,55,52,0);
      while (5 <= (nterstitials.length / (Math.max(7, parseInt(`${grayN}`))))) {
         grayN -= (parseFloat(`${nterstitials == String.fromCharCode(90,0) ? nterstitials.length : parseInt(`${grayN}`)}`));
         break;
      }
      while (2 == (macau8 | nterstitials.length)) {
         nterstitials += `${1 % (Math.max(2, parseInt(`${grayN}`)))}`;
         break;
      }
      while (3 >= (5 % (Math.max(4, nterstitials.length)))) {
         macau8 -= 1;
         break;
      }
          let cornerw: Map<any, any> = new Map([[String.fromCharCode(110,95,54,54,95,114,101,119,97,114,100,0),true ], [String.fromCharCode(98,95,51,55,0),true ], [String.fromCharCode(114,101,99,111,100,101,95,51,95,55,48,0),true ]]);
         grayN /= Math.max(parseFloat(`${1}`), 4);
         cornerw.set(`${cornerw.size}`, 3);
      let bootsplashq = grayN <= 6294458.0;
      do {
         grayN -= parseFloat(`${nterstitials.length % (Math.max(10, parseInt(`${grayN}`)))}`);
         if (bootsplashq) {
            break;
         }
      } while (bootsplashq && (5.42 == (grayN + parseFloat(`${nterstitials.length}`))));
         macau8 >>= Math.min(Math.abs(nterstitials.length >> (Math.min(2, Math.abs(parseInt(`${grayN}`))))), 3);
      if (1 <= (macau8 ^ nterstitials.length) && (1 ^ nterstitials.length) <= 3) {
         nterstitials = `${macau8 << (Math.min(4, Math.abs(1)))}`;
      }
          let viewerS: Map<any, any> = new Map([[String.fromCharCode(97,95,56,48,95,110,105,115,116,110,105,100,0),String.fromCharCode(104,95,49,53,0)], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,122,95,53,49,0),String.fromCharCode(115,116,97,99,107,95,114,95,53,48,0)], [String.fromCharCode(117,95,57,51,0),String.fromCharCode(111,95,52,95,97,112,112,101,110,100,97,108,108,0)]]);
          let sidet = 4.0;
         macau8 <<= Math.min(2, Math.abs(1));
         viewerS = new Map([[`${viewerS.size}`, viewerS.size]]);
         sidet /= Math.max(1, parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${sidet}`))))}`));
          let statsv: Map<any, any> = new Map([[String.fromCharCode(109,111,110,111,99,104,114,111,109,101,95,105,95,52,55,0),false ], [String.fromCharCode(111,117,116,100,97,116,101,100,95,118,95,52,56,0),true ], [String.fromCharCode(114,95,50,49,95,112,114,111,109,111,0),true ]]);
          let playlistk = 3.0;
         macau8 >>= Math.min(nterstitials.length, 1);
         statsv.set(`${playlistk}`, statsv.size);
         playlistk += parseFloat(`${2}`);
      catalogN /= Math.max(1, macau8 >> (Math.min(5, Math.abs(2))));
   }
   while (circlew.length > 3) {
       let dropdownX: Map<any, any> = new Map([[String.fromCharCode(113,95,50,95,99,111,110,116,105,110,117,101,115,0),false ], [String.fromCharCode(114,101,99,111,114,100,101,114,95,53,95,49,57,0),false ], [String.fromCharCode(115,104,111,119,110,95,104,95,51,56,0),false ]]);
       let telegram1 = 1.0;
       let heart3: Array<any> = [606, 911];
      while (Array.from(dropdownX.keys()).includes(`${heart3.length}`)) {
         dropdownX.set(`${telegram1}`, heart3.length >> (Math.min(Math.abs(2), 4)));
         break;
      }
      while ((parseInt(`${telegram1}`) - dropdownX.size) > 1 || (dropdownX.size >> (Math.min(Math.abs(1), 2))) > 1) {
         telegram1 -= parseFloat(`${dropdownX.size - 1}`);
         break;
      }
          let ewardedo: Map<any, any> = new Map([[String.fromCharCode(108,95,53,56,95,99,111,110,116,101,110,116,105,111,110,0),698], [String.fromCharCode(112,97,114,115,101,95,56,95,57,53,0),562]]);
         heart3.push(parseInt(`${telegram1}`));
         ewardedo = new Map([[`${ewardedo.size}`, ewardedo.size]]);
          let stepX = String.fromCharCode(116,97,98,108,101,112,114,105,110,116,95,111,95,49,0);
          let zhubon = String.fromCharCode(114,101,100,117,99,101,100,95,51,95,55,50,0);
          let rewindL = String.fromCharCode(117,100,112,95,121,95,51,49,0);
         telegram1 += parseFloat(`${3}`);
         stepX += `${(String.fromCharCode(79,0) == zhubon ? zhubon.length : rewindL.length)}`;
         rewindL += `${zhubon.length / (Math.max(stepX.length, 2))}`;
          let skipe = String.fromCharCode(117,110,105,102,111,114,109,115,95,111,95,51,48,0);
          let teamL = true;
         telegram1 -= parseFloat(`${dropdownX.size & 3}`);
         skipe += `${skipe.length}`;
         teamL = skipe.length < 11 || teamL;
      while (3 < (dropdownX.size ^ 1) && (3.34 + telegram1) < 4.54) {
          let analyticq = 0;
          let sheetD = false;
          let downn = true;
          let logos = String.fromCharCode(101,95,52,95,109,101,109,115,101,116,0);
          let bootsplash8 = false;
         dropdownX = new Map([[`${downn}`, ((downn ? 2 : 5))]]);
         analyticq += logos.length >> (Math.min(Math.abs(3), 5));
         sheetD = !bootsplash8 || analyticq > 3;
         logos += `${logos.length * 1}`;
         break;
      }
         heart3.push(dropdownX.size % (Math.max(2, 8)));
      if (1.72 > (5.49 * telegram1)) {
         heart3 = [parseInt(`${telegram1}`) % (Math.max(heart3.length, 7))];
      }
      for (let e = 0; e < 1; e++) {
         telegram1 /= Math.max(parseFloat(`${3}`), 4);
      }
      floaterp /= Math.max(parseFloat(`${dropdownX.size | 2}`), 1);
      break;
   }
   while (1 == (4 & downO.size) || 4 == downO.size) {
      downO = new Map([[`${chinaU}`, 1 | parseInt(`${chinaU}`)]]);
      break;
   }

      if (comments !== null) {

       let moviesN = 5.0;
          let nalyticsv = 1.0;
         moviesN += parseFloat(`${parseInt(`${nalyticsv}`)}`);
       let scheduleO: Map<any, any> = new Map([[String.fromCharCode(105,95,49,49,95,122,105,103,122,97,103,0),661], [String.fromCharCode(113,115,116,101,112,95,48,95,55,50,0),133], [String.fromCharCode(100,95,52,51,95,115,108,105,99,101,116,121,112,101,0),852]]);
       let znewst: Map<any, any> = new Map([[String.fromCharCode(110,95,55,48,0),580], [String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,48,95,53,50,0),853], [String.fromCharCode(112,95,57,49,95,114,112,99,103,101,110,0),723]]);
      let w_lockx = scheduleO.size >= 8025012;
      do {
         scheduleO = new Map([[`${scheduleO.size}`, parseInt(`${moviesN}`) * 1]]);
         if (w_lockx) {
            break;
         }
      } while (w_lockx && (Array.from(scheduleO.keys()).includes(`${moviesN}`)));
      nativem = `${3 * showh}`;
       let themeD = false;
       let actionsR = String.fromCharCode(100,101,98,117,103,95,117,95,49,50,0);
       let predictionf = String.fromCharCode(99,108,105,112,102,95,51,95,49,53,0);
          let sina4 = 3;
         actionsR = `${actionsR.length}`;
         sina4 *= 3;
         actionsR = `${(actionsR == String.fromCharCode(65,0) ? (themeD ? 3 : 3) : actionsR.length)}`;
         actionsR += `${3 << (Math.min(4, predictionf.length))}`;
       let private_qM = String.fromCharCode(122,95,49,48,48,95,100,101,99,111,114,97,116,101,0);
         themeD = (3 == ((!themeD ? private_qM.length : 3) | private_qM.length));
      for (let c = 0; c < 2; c++) {
         predictionf = `${actionsR.length}`;
      }
         predictionf += `${private_qM.length % (Math.max(predictionf.length, 8))}`;
      while (!themeD) {
         themeD = 62 > private_qM.length || 62 > actionsR.length;
         break;
      }
      for (let x = 0; x < 2; x++) {
          let countryc = 3;
          let confirmationX: Array<any> = [460, 48];
          let sideQ = 0.0;
         actionsR += `${private_qM.length + 1}`;
         countryc &= confirmationX.length;
         confirmationX = [confirmationX.length - 1];
         sideQ /= Math.max(parseFloat(`${1}`), 5);
      }
      statsu = "3";
   while (circlew.includes(chinaU)) {
      circlew = [parseInt(`${indicatorc}`) & 1];
      break;
   }
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

   let bellC = statsu.length <= 7239174;
   do {
       let sliderZ = true;
       let trophyV = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,48,95,50,50,0);
       let detailsn = String.fromCharCode(112,112,99,99,111,109,109,111,110,95,119,95,50,49,0);
       let minimizew = String.fromCharCode(120,95,52,51,95,109,97,116,120,0);
       let blacklistE = String.fromCharCode(105,109,112,111,114,116,101,114,115,95,109,95,57,56,0);
          let combinedn: Array<any> = [String.fromCharCode(114,103,98,116,101,115,116,95,48,95,53,51,0), String.fromCharCode(102,105,114,115,116,108,105,110,101,95,105,95,54,51,0), String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,120,95,51,57,0)];
          let hookH = String.fromCharCode(116,101,115,116,98,114,105,100,103,101,95,119,95,50,51,0);
         minimizew += `${minimizew.length % (Math.max(blacklistE.length, 3))}`;
         combinedn.push(combinedn.length);
         hookH = `${hookH.length << (Math.min(5, combinedn.length))}`;
       let inviter = String.fromCharCode(116,95,49,51,95,100,117,97,108,0);
      let clubY = sliderZ ? !sliderZ : sliderZ;
      do {
         sliderZ = detailsn.length > minimizew.length;
         if (clubY) {
            break;
         }
      } while ((sliderZ && inviter.length >= 4) && clubY);
         sliderZ = 54 <= minimizew.length;
         detailsn = `${inviter.length >> (Math.min(Math.abs(1), 1))}`;
         blacklistE = `${minimizew.length}`;
          let penaltyh = 1.0;
          let viewsI = String.fromCharCode(97,112,112,101,110,100,105,110,103,95,102,95,52,56,0);
         inviter += `${minimizew.length >> (Math.min(Math.abs(3), 4))}`;
         penaltyh *= parseFloat(`${3}`);
         viewsI += `${parseInt(`${penaltyh}`) & viewsI.length}`;
      while (sliderZ) {
         detailsn += `${(inviter == String.fromCharCode(89,0) ? blacklistE.length : inviter.length)}`;
         break;
      }
          let tooltipsJ: Array<any> = [687, 501];
          let termsE: Map<any, any> = new Map([[String.fromCharCode(104,95,56,51,95,103,108,111,119,0),209], [String.fromCharCode(114,97,116,105,111,95,115,95,55,50,0),932], [String.fromCharCode(111,95,54,54,95,112,108,117,114,97,108,0),379]]);
          let termsq = String.fromCharCode(115,118,97,103,95,52,95,53,57,0);
         inviter += `${minimizew.length / (Math.max(4, detailsn.length))}`;
         tooltipsJ.push(termsE.size / (Math.max(termsq.length, 3)));
         termsE = new Map([[`${termsE.size}`, termsq.length]]);
          let muted6: Array<any> = [String.fromCharCode(116,95,56,95,99,111,110,116,97,105,110,101,114,115,0), String.fromCharCode(103,95,55,95,103,101,116,99,114,101,100,0)];
         sliderZ = 80 > muted6.length;
      while (sliderZ) {
          let sliderG = String.fromCharCode(107,101,121,118,97,108,95,108,95,51,53,0);
          let countryb = String.fromCharCode(120,95,53,48,95,117,110,98,108,111,99,107,105,110,103,0);
          let greenf = false;
          let taiwan6 = false;
         sliderZ = taiwan6 && !greenf;
         sliderG = `${(String.fromCharCode(120,0) == sliderG ? sliderG.length : countryb.length)}`;
         countryb = `${(countryb == String.fromCharCode(72,0) ? countryb.length : sliderG.length)}`;
         greenf = 57 < countryb.length;
         taiwan6 = countryb == String.fromCharCode(52,0);
         break;
      }
      statsu = `${(parseInt(`${chinaU}`) - (sellJ ? 3 : 4))}`;
      trophyV = `${trophyV.length / (Math.max(1, trophyV.length))}`;
      if (bellC) {
         break;
      }
   } while (((statsu.length + 5) >= 1) && bellC);
   for (let o = 0; o < 3; o++) {
      downO.set(`${popups}`, ((areaf ? 2 : 4) | parseInt(`${popups}`)));
   }
      sellJ = floaterp < popups;
      console.log("error when retrieving local comments: ", error);

   let showH = showh <= 5885230;
   do {
      showh |= 2 / (Math.max(3, statsu.length));
      if (showH) {
         break;
      }
   } while ((5 > (nativem.length | showh) && (showh | nativem.length) > 5) && showH);
      nativem += `${3 >> (Math.min(5, statsu.length))}`;
       let sharedB = String.fromCharCode(104,95,51,56,95,98,111,117,110,100,97,114,105,101,115,0);
       let q_playerS: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,110,101,108,115,95,119,95,55,48,0),354], [String.fromCharCode(115,105,120,95,50,95,52,0),743], [String.fromCharCode(111,115,100,101,112,95,51,95,52,53,0),677]]);
       let greenr = false;
      if ((sharedB.length / 1) == 3 && (q_playerS.size / (Math.max(sharedB.length, 1))) == 1) {
         sharedB = `${q_playerS.size / (Math.max(1, 6))}`;
      }
          let arrowA = 0.0;
         sharedB += `${((greenr ? 1 : 1))}`;
         arrowA *= 2;
      while ((q_playerS.size << (Math.min(Math.abs(5), 5))) < 4 && (q_playerS.size << (Math.min(sharedB.length, 2))) < 5) {
         sharedB = `${q_playerS.size}`;
         break;
      }
       let progressr = 3;
      let loadingw = sharedB == String.fromCharCode(120,122,106,0);
      do {
         sharedB += `${progressr}`;
         if (loadingw) {
            break;
         }
      } while ((!sharedB.endsWith(`${q_playerS.size}`)) && loadingw);
       let disconnected9 = 1.0;
         q_playerS.set(`${progressr}`, parseInt(`${disconnected9}`));
         q_playerS = new Map([[`${q_playerS.size}`, 2 * q_playerS.size]]);
         progressr |= parseInt(`${disconnected9}`) * q_playerS.size;
      areaf = 50.34 < (chinaU - catalogN);
      return [];
    }
  };

  const storeUserComments = async () => {
       let logoG = true;
    let catalogO = 1.0;
    let screenb = 3.0;
    let light3 = String.fromCharCode(115,116,97,114,116,95,121,95,56,55,0);
    let streaming9 = String.fromCharCode(104,95,57,53,95,115,117,98,116,121,112,101,115,0);
    let castingc = 0.0;
    let calendar8 = 2;
    let type_x0 = true;
    let refreshd: Array<any> = [955, 913, 999];
    let reminderT = String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,107,95,57,57,0);
    let injuryn = 3.0;
    let controlC = String.fromCharCode(116,95,51,53,95,99,111,110,115,116,114,97,105,110,116,115,0);
    let plash9 = String.fromCharCode(98,105,116,101,120,97,99,116,110,101,115,115,95,49,95,52,48,0);
    let statistics3: Map<any, any> = new Map([[String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,48,95,51,50,0),433], [String.fromCharCode(112,95,55,55,0),341]]);
   while ((streaming9.length & 4) <= 3 || 2 <= (refreshd.length & 4)) {
       let philippines0 = String.fromCharCode(102,95,55,48,95,108,97,117,110,99,104,0);
       let whitey = 0.0;
         whitey -= parseFloat(`${3}`);
      for (let w = 0; w < 2; w++) {
         philippines0 = `${philippines0.length}`;
      }
          let ajaxU = String.fromCharCode(97,95,50,54,95,115,116,114,110,100,117,112,0);
         philippines0 = `${2 ^ philippines0.length}`;
         ajaxU += `${ajaxU.length}`;
          let k_titleM = String.fromCharCode(115,95,54,49,95,118,101,99,115,0);
         whitey += parseFloat(`${parseInt(`${whitey}`) + k_titleM.length}`);
         whitey /= Math.max(parseFloat(`${philippines0.length}`), 3);
      for (let g = 0; g < 1; g++) {
          let robotog = 2.0;
          let upgradeI = true;
          let controlsB = String.fromCharCode(111,102,111,114,109,97,116,95,106,95,56,56,0);
          let tooltips7 = String.fromCharCode(112,95,56,55,95,104,112,114,101,100,0);
         whitey += (parseFloat(`${String.fromCharCode(73,0) == tooltips7 ? tooltips7.length : parseInt(`${whitey}`)}`));
         robotog *= parseFloat(`${parseInt(`${robotog}`) / 2}`);
         upgradeI = !upgradeI;
         controlsB = `${((upgradeI ? 2 : 1) & controlsB.length)}`;
      }
      refreshd = [(parseInt(`${whitey}`) / (Math.max(1, (type_x0 ? 2 : 1))))];
      break;
   }
      logoG = !logoG;

    if (!comment) {

      type_x0 = logoG && 53.46 == castingc;
   for (let k = 0; k < 2; k++) {
       let window_ua: Array<any> = [447, 628, 746];
       let closeM = 4;
         window_ua = [closeM ^ window_ua.length];
          let thumbnailg = 2.0;
          let annerK: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,101,95,52,95,57,48,0),String.fromCharCode(98,95,50,52,95,98,102,108,121,0)], [String.fromCharCode(99,95,52,52,95,99,111,110,103,0),String.fromCharCode(103,95,55,54,95,114,101,115,112,111,110,115,101,0)], [String.fromCharCode(104,95,56,50,95,121,109,105,110,112,117,116,0),String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,116,95,55,48,0)]]);
          let nextN = String.fromCharCode(119,95,49,57,95,119,111,114,100,115,0);
         closeM -= parseInt(`${thumbnailg}`) & 3;
         thumbnailg *= annerK.size;
         annerK = new Map([[`${annerK.size}`, annerK.size]]);
         nextN = `${3 >> (Math.min(3, Math.abs(annerK.size)))}`;
       let shrink7 = 5.0;
       let layout8 = 1.0;
       let listi: Array<any> = [String.fromCharCode(114,95,50,48,95,117,110,122,116,101,108,108,0), String.fromCharCode(98,95,52,52,95,112,114,105,110,116,111,117,116,0), String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,122,95,55,54,0)];
       let textC: Array<any> = [891, 565, 307];
      for (let s = 0; s < 3; s++) {
         closeM /= Math.max(parseInt(`${shrink7}`) + 1, 5);
      }
      if ((listi.length * parseInt(`${shrink7}`)) < 1) {
         listi.push(2 + textC.length);
      }
      screenb /= Math.max(1, 3);
   }
      return;
    }

    console.log("user comment", comment);

      castingc *= (parseFloat(`${(logoG ? 1 : 2) ^ calendar8}`));
      screenb -= (String.fromCharCode(121,0) == reminderT ? (logoG ? 2 : 4) : reminderT.length);
    try {

   for (let i = 0; i < 3; i++) {
      refreshd = [refreshd.length % (Math.max(2, parseInt(`${catalogO}`)))];
   }
   if (1.51 < (catalogO - 3)) {
       let whistleB: Map<any, any> = new Map([[String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,53,95,49,57,0),213], [String.fromCharCode(99,121,99,108,101,115,95,53,95,50,52,0),807], [String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,95,104,95,51,57,0),170]]);
       let heji5 = String.fromCharCode(98,110,108,101,95,107,95,52,48,0);
       let default_cs6 = String.fromCharCode(114,101,118,101,114,98,95,52,95,57,48,0);
         default_cs6 = `${3 | default_cs6.length}`;
         heji5 += `${(heji5 == String.fromCharCode(52,0) ? heji5.length : default_cs6.length)}`;
      for (let a = 0; a < 2; a++) {
          let resendW = false;
          let foundD = 3;
         default_cs6 += `${(String.fromCharCode(73,0) == default_cs6 ? whistleB.size : default_cs6.length)}`;
         resendW = 53 >= foundD;
         foundD *= 3;
      }
       let vieweru = 5.0;
         default_cs6 = `${parseInt(`${vieweru}`) * default_cs6.length}`;
       let balls = true;
         heji5 = `${default_cs6.length}`;
         heji5 = `${((balls ? 5 : 5) & parseInt(`${vieweru}`))}`;
      let q_unlockb = default_cs6.length <= 6253122;
      do {
         default_cs6 += `${default_cs6.length + 3}`;
         if (q_unlockb) {
            break;
         }
      } while ((default_cs6.endsWith(`${heji5.length}`)) && q_unlockb);
      screenb -= reminderT.length / 3;
   }
      const existingComments = await getLocalComments();

       let const_gc: Array<any> = [String.fromCharCode(103,95,50,55,95,112,97,117,115,101,0), String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,120,95,53,53,0)];
         const_gc.push(const_gc.length);
         const_gc = [const_gc.length | 3];
      while ((const_gc.length % 1) <= 3) {
         const_gc.push(const_gc.length & const_gc.length);
         break;
      }
      type_x0 = 90.27 > injuryn;
       let umengs: Map<any, any> = new Map([[String.fromCharCode(98,101,99,104,95,122,95,54,49,0),57], [String.fromCharCode(109,95,57,51,95,116,114,97,110,115,105,116,105,111,110,0),597], [String.fromCharCode(120,95,49,52,95,97,116,114,97,99,97,108,0),99]]);
       let arrowg = 4.0;
       let shrinkN = String.fromCharCode(99,95,49,48,48,95,99,117,101,115,0);
      if (parseInt(`${arrowg}`) >= shrinkN.length) {
          let whistleh: Array<any> = [5, 637];
          let episodeso = String.fromCharCode(114,95,57,56,95,100,105,115,109,105,115,115,0);
          let analytic1 = String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,95,51,95,53,0);
         arrowg += analytic1.length;
         whistleh.push(whistleh.length);
         episodeso = `${(episodeso == String.fromCharCode(78,0) ? episodeso.length : whistleh.length)}`;
         analytic1 = `${whistleh.length}`;
      }
          let sideR: Array<any> = [949, 297, 602];
          let result6: Array<any> = [664, 343];
          let interstitialN = String.fromCharCode(99,95,56,49,95,97,114,116,105,99,108,101,0);
         arrowg -= sideR.length / 3;
         sideR.push(1);
         result6.push(3 << (Math.min(4, result6.length)));
         interstitialN += `${interstitialN.length | 1}`;
      while (umengs.get(`${arrowg}`) != null) {
          let anytimed: Array<any> = [235, 129, 58];
          let weiboE: Array<any> = [357, 637, 685];
          let launchV = 4;
          let main_ci = String.fromCharCode(106,100,109,97,115,116,101,114,95,109,95,53,48,0);
          let trophy2 = 3;
         umengs = new Map([[`${umengs.size}`, umengs.size & 2]]);
         anytimed.push(2 * main_ci.length);
         weiboE = [main_ci.length >> (Math.min(2, weiboE.length))];
         launchV /= Math.max(2, launchV & 2);
         trophy2 *= anytimed.length;
         break;
      }
         umengs.set(`${arrowg}`, shrinkN.length - 1);
          let playlistS = true;
          let stations1 = String.fromCharCode(98,95,57,95,98,97,115,101,117,114,108,0);
         umengs = new Map([[stations1, parseInt(`${arrowg}`)]]);
         playlistS = (playlistS ? playlistS : !playlistS);
         stations1 = `${((playlistS ? 5 : 2) + (playlistS ? 5 : 2))}`;
         shrinkN += `${1 + shrinkN.length}`;
      while (3 > (umengs.size - parseInt(`${arrowg}`))) {
         arrowg *= 2;
         break;
      }
      for (let c = 0; c < 2; c++) {
          let firebaseb = String.fromCharCode(122,95,50,57,95,101,120,105,115,116,97,110,99,101,0);
          let updatesN = String.fromCharCode(101,120,97,109,105,110,101,95,113,95,57,52,0);
          let modityx: Array<any> = [464, 196, 381];
         arrowg += modityx.length | 3;
         firebaseb = "2";
         updatesN = `${firebaseb.length ^ updatesN.length}`;
         modityx = [3];
      }
         umengs.set(shrinkN, shrinkN.length);
      screenb /= Math.max((parseInt(`${screenb}`) * (type_x0 ? 5 : 5)), 4);
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      };

   while (streaming9 != String.fromCharCode(66,0)) {
      controlC = `${(streaming9 == String.fromCharCode(53,0) ? reminderT.length : streaming9.length)}`;
      break;
   }
      type_x0 = injuryn <= 41.19 && light3.length <= 29;
      existingComments.unshift(commmentObj);

      reminderT += "2";
      screenb *= 3;
      await AsyncStorage.setItem(
        locCommentId,
        JSON.stringify(existingComments)
      );

   let topicU = screenb >= 9459985.0;
   do {
      screenb -= 1 >> (Math.min(Math.abs(parseInt(`${injuryn}`)), 1));
      if (topicU) {
         break;
      }
   } while (topicU && (screenb == 2.60));
      catalogO /= Math.max(2, 2);
      await getLocalComments();

      calendar8 >>= Math.min(2, Math.abs((1 * (type_x0 ? 2 : 4))));
   if (light3.length > screenb) {
       let thumbnail1: Map<any, any> = new Map([[String.fromCharCode(106,95,49,51,95,115,121,110,99,115,97,102,101,0),890], [String.fromCharCode(113,95,54,55,95,114,108,111,116,116,105,101,0),593]]);
       let canvasz = 4;
       let bufferk = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,111,95,54,53,0);
      while (5 == (5 >> (Math.min(2, Math.abs(canvasz)))) || (bufferk.length >> (Math.min(1, Math.abs(canvasz)))) == 5) {
         bufferk += `${canvasz}`;
         break;
      }
      let aboutv = canvasz >= 8366852;
      do {
         canvasz &= thumbnail1.size;
         if (aboutv) {
            break;
         }
      } while (aboutv && (Array.from(thumbnail1.keys()).includes(`${canvasz}`)));
          let philippinesw = 1.0;
         canvasz %= Math.max(4, parseInt(`${philippinesw}`) / (Math.max(bufferk.length, 3)));
       let darkL = 2.0;
       let livea = 2.0;
      let thailandD = 5349023.0 >= livea;
      do {
          let index8 = false;
          let tumbnail4 = String.fromCharCode(118,95,53,56,95,97,120,112,0);
         livea += parseFloat(`${parseInt(`${livea}`)}`);
         index8 = (((index8 ? 71 : tumbnail4.length) / (Math.max(4, tumbnail4.length))) <= 71);
         if (thailandD) {
            break;
         }
      } while (thailandD && (livea >= 2.2));
          let baiduj = 2;
          let agreementW = String.fromCharCode(99,116,111,114,95,106,95,49,0);
          let floatingE = false;
         darkL += (parseFloat(`${String.fromCharCode(81,0) == agreementW ? parseInt(`${darkL}`) : agreementW.length}`));
         baiduj &= ((floatingE ? 3 : 5) & baiduj);
         floatingE = !floatingE;
      let time_sO = 5643986.0 <= darkL;
      do {
         darkL *= parseFloat(`${canvasz + 3}`);
         if (time_sO) {
            break;
         }
      } while (time_sO && (2 == (2 + bufferk.length)));
      for (let e = 0; e < 3; e++) {
         canvasz /= Math.max(bufferk.length, 1);
      }
      while (5.41 <= (3.3 * darkL)) {
         darkL *= parseFloat(`${parseInt(`${darkL}`)}`);
         break;
      }
      light3 = `${parseInt(`${castingc}`)}`;
   }
      setIsUpdated(!isUpdated);

       let homee = 4;
      for (let d = 0; d < 1; d++) {
          let xvodi = 5.0;
          let typesG = String.fromCharCode(114,101,117,115,101,95,51,95,53,54,0);
         homee <<= Math.min(Math.abs(1 | parseInt(`${xvodi}`)), 5);
         xvodi /= Math.max(3 - typesG.length, 3);
         typesG = "2";
      }
      for (let e = 0; e < 2; e++) {
          let source_: Array<any> = [156, 688];
         homee /= Math.max(2, source_.length - 3);
      }
         homee |= 3;
      light3 = `${(streaming9 == String.fromCharCode(67,0) ? parseInt(`${injuryn}`) : streaming9.length)}`;
      calendar8 &= calendar8;
      Keyboard.dismiss();

   let referrerG = light3 == String.fromCharCode(101,95,108,0);
   do {
       let skipY = 5.0;
       let t_lockJ = String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,106,95,56,51,0);
       let plust = String.fromCharCode(117,95,54,50,95,99,111,109,102,111,114,116,0);
         plust = `${parseInt(`${skipY}`)}`;
         skipY -= (parseFloat(`${String.fromCharCode(99,0) == plust ? parseInt(`${skipY}`) : plust.length}`));
      if (t_lockJ.startsWith(`${skipY}`)) {
          let teamq: Array<any> = [489, 192, 247];
          let pressureW = String.fromCharCode(116,119,105,116,116,101,114,95,116,95,55,56,0);
          let indicatorE = 0.0;
          let interstitial_ = 1.0;
          let typingz = String.fromCharCode(104,95,55,51,95,114,105,110,103,105,110,103,0);
         skipY *= parseFloat(`${parseInt(`${indicatorE}`) | 1}`);
         teamq.push(parseInt(`${interstitial_}`));
         pressureW = `${3 + teamq.length}`;
         indicatorE *= 3;
         interstitial_ += parseFloat(`${pressureW.length}`);
         typingz = `${typingz.length}`;
      }
          let combinedR = 4.0;
          let edito = 5;
         skipY += parseFloat(`${1 * parseInt(`${skipY}`)}`);
         combinedR += edito % (Math.max(parseInt(`${combinedR}`), 9));
         edito += edito;
      for (let t = 0; t < 2; t++) {
          let catagoryN = 3;
          let thumbnailS = 4.0;
         skipY /= Math.max(5, parseFloat(`${catagoryN % 1}`));
         catagoryN /= Math.max(1, 1);
         thumbnailS /= Math.max(3, 3 / (Math.max(parseInt(`${thumbnailS}`), 9)));
      }
      while (t_lockJ.includes(`${skipY}`)) {
         t_lockJ += `${t_lockJ.length}`;
         break;
      }
         t_lockJ += "2";
      if (plust == String.fromCharCode(117,0)) {
          let soundr = String.fromCharCode(115,112,101,99,116,114,97,108,0);
          let middleb: Array<any> = [92, 938];
          let pressureh = 0;
          let movies9 = String.fromCharCode(100,105,115,116,97,110,99,101,115,95,54,95,51,57,0);
         t_lockJ += `${pressureh + movies9.length}`;
         soundr += `${soundr.length}`;
         middleb = [soundr.length * middleb.length];
         pressureh *= 3;
         movies9 += `${middleb.length}`;
      }
         t_lockJ = `${(t_lockJ == String.fromCharCode(49,0) ? parseInt(`${skipY}`) : t_lockJ.length)}`;
      light3 = `${controlC.length}`;
      if (referrerG) {
         break;
      }
   } while ((light3.length > 1) && referrerG);
   while (reminderT == String.fromCharCode(98,0) && streaming9 != String.fromCharCode(48,0)) {
      streaming9 = `${(3 + (type_x0 ? 5 : 1))}`;
      break;
   }
      SMBing.showToast("提交成功，我们将在24小时内进行审核！");
    } catch (error) {

   for (let l = 0; l < 3; l++) {
      castingc -= parseFloat(`${parseInt(`${screenb}`)}`);
   }
      light3 = `${controlC.length}`;
      console.log("error when storing the comment into local storage: ", error);
    }
  };


  useFocusEffect(useCallback(() => {
    if (videoRef !== undefined && videoRef.current?.isPaused) {
      videoRef.current.setPause(false);
    }
    return () => {
      if (videoRef !== undefined && !videoRef.current?.isPaused) {
        videoRef.current?.setPause(true);
      }
    }
  }, []));


  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScreenContainer
          containerStyle={{ paddingRight: 0, paddingLeft: 0 }}
          footer={
            <>
              {!isOffline && (
                <View
                  style={{
                    ...styles.commentContainer,
                    backgroundColor: dark ? "#1d2023" : 'white',
                    shadowColor: '#000000',
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                  }}
                >
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: dark ? "#FFFFFF1A" : '#D9D9D9',
                      ...textVariants.body,
                    }}
                    onChangeText={setComment}
                    placeholder={
                      KWConstants.isLogin(userState.user) ? "请评论" : "请登录才进行评论"
                    }
                    editable={KWConstants.isLogin(userState.user)}
                    placeholderTextColor={colors.muted}
                    value={comment}
                    maxLength={200}
                    blurOnSubmit
                  />

                  {KWConstants.isLogin(userState.user) ? (
                    <>
                      <Text
                        style={{
                          ...textVariants.body,
                          color:
                            comment.length === 200
                              ? colors.primary
                              : colors.muted,
                        }}
                      >
                        {comment.length}/200
                      </Text>
                      <TouchableOpacity activeOpacity={0.85}
                        onPress={() => {
                          setComment("");
                          storeUserComments();
                        }}
                      >
                        <SubmitBtn
                          fill={comment.length ? "#FAC33D" : "#3A3A3A"}
                        />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity activeOpacity={0.85}
                      onPress={() => dispatch(showLoginAction())}
                    >
                      <Text
                        style={{ ...textVariants.body, color: colors.primary }}
                      >
                        立即登录
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </>
          }
        >
          <TitleWithBackButtonHeader
            title={vod?.vod_name}
            backBtnStyle={{
              left: 30,
            }}
          />

          { }
          {/* {isVodRestricted && vod && !isOffline && <BingSearch vod={vod} />} */}

          {isOffline && dismountPlayer && (
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
                source={require("@static/images/settingsGrayZhengpian.gif")}
                resizeMode={"contain"}
              />
            </View>
          )}
          {!dismountPlayer && isOffline && (
            <NoConnection onClickRetry={checkConnection} isPlay={true} />
          )}

          {!isOffline && (
            <>
              <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={{ marginTop: spacing.m }}
                contentInsetAdjustmentBehavior="automatic"
              >
                <View
                  style={{ ...styles.descriptionContainer2, gap: spacing.m }}
                >
                  <View style={styles.videoDescription}>
                    <FastImage
                      source={{ uri: vod?.vod_pic }}
                      resizeMode={"cover"}
                      style={{
                        ...styles.descriptionImage,
                        ...styles.imageContainer,
                      }}
                    />
                    <View style={styles.descriptionContainer}>
                      {vod && (
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
                              <FavoriteIcon
                                width={18}
                                height={18}
                                style={{
                                  color: isFavorite == true ?  "#FAC33D" : '#9C9C9C'
                                }}
                              />
                              {isFavorite ? (
                                <Text
                                  style={{
                                    ...textVariants.subBody,
                                   

                                    color: isFavorite == true ?  "#FAC33D" : '#9C9C9C',
                                    paddingBottom: 0,
                                  }}
                                >
                                  已收藏
                                </Text>
                              ) : (
                                <Text
                                  style={{
                                    ...textVariants.subBody,
                                    
                                    color: isFavorite == true ?  "#FAC33D" : '#9C9C9C',
                                    paddingBottom: 0,
                                  }}
                                >
                                  收藏
                                </Text>
                              )}
                            </View>
                          }
                        />
                      )}
                      <Text
                        style={{ ...textVariants.subBody, color: colors.muted }}
                        numberOfLines={2}
                      >
                        {`${definedValue(vod?.vod_year)}`}
                        {`${definedValue(vod?.vod_area)}`}
                        {`${definedValue(
                          vod?.vod_class?.split(",").join(" ")
                        )}`}
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
                            console.error(
                              "Error while formatting date:",
                              error
                            );
                            return "更新：N/A"; 
                          }
                        })()}
                      </Text>
                      <View
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          gap: 8,
                        }}
                      >
                        {/* <TouchableOpacity activeOpacity={0.85}
                        onPress={handleSearchVideo}
                        style={{
                          backgroundColor: "#FAC33D",
                          paddingHorizontal: 16,
                          paddingVertical: 8,
                          borderRadius: 6,
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "500",
                            color: "#000",
                          }}
                        >
                          搜索片源
                        </Text>
                      </TouchableOpacity>
                      <Text style={{...textVariants.small, alignSelf: 'flex-end'}}>
                        *点击跳转bing搜索片源
                      </Text> */}
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.descriptionContainer2Text}>
                      {`导演：${definedValue(vod?.vod_director)}${"\n"}` +
                        `主演：${definedValue(vod?.vod_actor)}${"\n"}`}
                    </Text>
                    <TouchableOpacity activeOpacity={0.85}
                      onPress={() => {
                        setIsCollapsed(!isCollapsed);
                      }}
                    >
                      <View style={{ paddingBottom: 18 }}>
                        <Text
                          ref={textRef}
                          onTextLayout={handleTextLayout}
                          style={styles.descriptionContainer2Text}
                          numberOfLines={isCollapsed ? 2 : 20}
                        >
                          {`${definedValue(vod?.vod_content)}`}
                        </Text>
                      </View>
                      <View style={{ paddingBottom: 0 }}>
                        {isCollapsed && actualNumberOfLines >= 2 && (
                          <FastImage
                            style={{
                              flex: 1,
                              height: 12,
                              width: 14,
                              alignSelf: "center",
                            }}
                            source={require("@static/images/flyerTime_ij.png")}
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
                            source={require("@static/images/navigationTheme.png")}
                            resizeMode={"contain"}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>

                  { }
                  <>
                    {
                      yuGaoUrl && (
                        <VodPlayerMin
                          ref={videoRef}
                          
                          vod_url={yuGaoUrl}
                          videoType="vod"
                          
                          appOrientation={settingsReducer.appOrientation}
                          devicesOrientation={settingsReducer.devicesOrientation}
                          lockOrientation={lockOrientation}
                        
                        />
                      )
                    }
                  </>
                  { }
                  <>
                    {isFetchingVodDetails ||
                      isFetchingComments ||
                      showLoading ? (
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
                            source={require("@static/images/settingsGrayZhengpian.gif")}
                            resizeMode={"contain"}
                          />
                        </View>
                      </>
                    ) : (
                      <>
                        {vod && allComment && !showLoading && (
                          <VodCommentBox
                            comments={allComment ?? []}
                            onCommentTap={() => {
                              navigation.navigate("全部评论", {
                                vod_id: vod.vod_id,
                                vod_name: vod.vod_name,
                                commentItems: allComment,
                              });
                            }}
                          />
                        )}

                        {vod &&
                          suggestedVods !== undefined &&
                          suggestedVods?.length > 0 && (
                            <View style={{ gap: spacing.l, marginBottom: 60 }}>
                              <ShowMoreVodButton
                                isPlayScreen={true}
                                text={`相关${vod?.type_name}`}
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
                                onPress={() => {
                                  if (!isCollapsed) {
                                    setIsCollapsed(true);
                                  }
                                }}
                              />
                            </View>
                          )}
                      </>
                    )}
                  </>
                </View>
              </ScrollView>
              {settingsReducer.appOrientation === "PORTRAIT" && ( 
                <VodEpisodeSelectionModal
                  isVisible={isShowSheet}
                  handleClose={handleModalClose}
                  activeEpisode={currentEpisode}
                  episodes={vod?.vod_play_list}
                  onCancel={() => {
                    setShowSheet(false);
                  }}
                  
                  
                  
                  
                  onConfirm={onConfirmEpisodeSelection}
                  rangeSize={EPISODE_RANGE_SIZE}
                />
              )}
            </>
          )}
          {isOffline && (
            <NoConnection onClickRetry={checkConnection} isPlayBottom={true} />
          )}
        </ScreenContainer>
      </KeyboardAvoidingView>
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
    color: '#000000',
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
  commentContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  input: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    flex: 3,
  },
});
