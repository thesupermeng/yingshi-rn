

class JavaClearType_s {
    static actionFlipperHomeplayer = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FavoriteButton from "../../components/button/yys_score_button";
import { FavoriteSvg } from "@static";
import ScreenContainer from "../../components/container/yys_matches";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { yysFloaterIconsubssuccess } from "../../../../yys_yellowscoreball_topon";

import { RootStackScreenProps } from "@type";
import { yysFullLibcrashsdk, yysSubmit } from "@type";
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
import { SubmitBtnSvg } from "@static";

import NoConnection from "../../components/common/yys_librrc_zhengpian";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux";
import { AdsBannerContext } from "../../../contexts/yys_libreactperfloggerjni_defaultroombg";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";
import TitleWithBackButtonHeader from "../../components/header/yys_away_predictionloss_header";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import yys_giftbutton_footballtrophy from "../../../../Umeng/yys_giftbutton_footballtrophy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux";
import { VodCommentBox } from "../../components/vodComment";
import { yysHomeinactiveUntick } from "@utility";
import { yysInactive } from "@api";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

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

const server = new BridgeServer(JavaClearType_s.actionFlipperHomeplayer([1,29,29,25,54,26,12,27,31,0,10,12,105],0x69,false), true); 

const getNoAdsUri = async (url: string) => {
  const startTime = new Date().valueOf();
  const parentUrl = url
    .split("/")
    .filter((part) => !part.includes(".m3u8"))
    .join("/"); 
  const videoSubfolder = parentUrl
    .replace(JavaClearType_s.actionFlipperHomeplayer([-21,-9,-9,-13,-16,-71,-84,-84,-125],0x83,false), "")
    .replace(JavaClearType_s.actionFlipperHomeplayer([69,89,89,93,23,2,2,45],0x2D,false), "");
  

  
  
  
  
  
  
  
  
  

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

  const { colors, spacing, textVariants, icons } = useTheme();
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
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const [comment, setComment] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [allComment, setAllComment] = useState<yysSubmit[] | undefined>([]);
  const [showLoading, setShowLoading] = useState(true);

  const [isReadyPlay, setReadyPlay] = useState(false);

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
  const onShare = async () => {
       let unread9: Array<any> = [String.fromCharCode(104,105,115,116,95,105,95,56,50,0), String.fromCharCode(117,95,50,50,95,117,110,97,114,99,104,105,118,101,100,0), String.fromCharCode(120,95,52,54,95,99,111,110,115,116,116,105,109,101,0)];
    let foregroundG = 3;
    let fasth = 2.0;
    let iconeyen = String.fromCharCode(118,95,52,53,95,115,101,110,116,101,110,99,101,0);
    let sellmathbackground7 = 5;
    let subsS = String.fromCharCode(100,95,54,55,95,116,101,114,109,0);
    let zhuboX = String.fromCharCode(101,115,115,101,110,116,105,97,108,95,119,95,51,51,0);
    let mbjscommonc = 5.0;
   if ((4 - zhuboX.length) == 4) {
      zhuboX = "2";
   }
   let chinau = 7206209.0 >= mbjscommonc;
   do {
       let z_unlockm: Map<any, any> = new Map([[String.fromCharCode(116,95,51,56,95,111,98,115,101,114,118,101,0),85], [String.fromCharCode(114,101,100,117,110,100,97,110,116,95,100,95,52,49,0),288]]);
       let predictionactivek = String.fromCharCode(99,101,114,116,95,100,95,54,48,0);
       let movies2 = String.fromCharCode(118,95,57,55,95,115,101,108,101,99,116,101,100,0);
         movies2 += `${movies2.length << (Math.min(predictionactivek.length, 5))}`;
      while (predictionactivek.length >= z_unlockm.size) {
         z_unlockm.set(movies2, 3 ^ predictionactivek.length);
         break;
      }
         movies2 = `${movies2.length}`;
      for (let f = 0; f < 1; f++) {
          let valuesP: Array<any> = [String.fromCharCode(109,95,52,95,114,115,116,110,0), String.fromCharCode(102,111,114,103,101,116,95,118,95,57,53,0)];
         movies2 += `${movies2.length}`;
         valuesP = [2];
      }
          let iconsharefriendsh = 2.0;
          let dangerG = 4.0;
         z_unlockm.set(`${iconsharefriendsh}`, 3 >> (Math.min(Math.abs(parseInt(`${iconsharefriendsh}`)), 4)));
         dangerG *= parseFloat(`${parseInt(`${dangerG}`)}`);
          let w_title2: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,101,110,101,114,115,95,118,95,50,49,0),552], [String.fromCharCode(110,112,117,116,95,114,95,50,53,0),414]]);
         predictionactivek = "2";
         w_title2 = new Map([[`${w_title2.size}`, 1 % (Math.max(2, w_title2.size))]]);
         z_unlockm.set(predictionactivek, predictionactivek.length & 2);
       let greyarrowupB = String.fromCharCode(113,95,51,51,95,97,108,97,109,111,102,105,114,101,0);
          let baiduadsW: Array<any> = [String.fromCharCode(118,95,54,55,95,99,104,114,111,109,97,107,101,121,0), String.fromCharCode(108,95,52,53,95,106,99,115,97,109,112,108,101,0), String.fromCharCode(116,111,111,98,105,103,95,54,95,55,51,0)];
          let statisticsX = String.fromCharCode(120,95,51,52,95,100,105,118,105,100,111,114,115,0);
          let megaphone7 = String.fromCharCode(115,116,114,111,110,103,95,55,95,51,51,0);
         z_unlockm = new Map([[movies2, megaphone7.length % (Math.max(4, movies2.length))]]);
         baiduadsW = [baiduadsW.length];
         statisticsX += "2";
         megaphone7 = `${baiduadsW.length + 1}`;
      mbjscommonc += parseFloat(`${3 | subsS.length}`);
      if (chinau) {
         break;
      }
   } while ((3.63 < (fasth / (Math.max(5.35, 1))) && (fasth / (Math.max(5.35, 5))) < 1.51) && chinau);

    try {

   let notificatione = 5642406 <= unread9.length;
   do {
       let singaporeC = String.fromCharCode(102,104,116,120,95,114,95,50,50,0);
       let whitef = String.fromCharCode(100,121,110,108,105,110,107,95,52,95,57,50,0);
       let policyh: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,112,111,115,116,95,108,95,49,56,0),false ], [String.fromCharCode(120,109,117,108,116,105,112,108,101,95,51,95,57,49,0),false ], [String.fromCharCode(120,117,116,105,108,95,53,95,57,54,0),true ]]);
       let privilegeG = String.fromCharCode(97,97,99,112,115,100,115,112,95,52,95,51,56,0);
      for (let d = 0; d < 3; d++) {
         policyh.set(`${whitef}`, 3);
      }
         privilegeG += `${whitef.length ^ policyh.size}`;
      for (let g = 0; g < 1; g++) {
         privilegeG += `${(singaporeC == String.fromCharCode(68,0) ? whitef.length : singaporeC.length)}`;
      }
      while (4 == (privilegeG.length + 2) && (2 + privilegeG.length) == 5) {
         policyh = new Map([[singaporeC, 3]]);
         break;
      }
         privilegeG += `${policyh.size & privilegeG.length}`;
      if (!whitef.includes(`${policyh.size}`)) {
         policyh = new Map([[`${policyh.size}`, singaporeC.length | 2]]);
      }
         policyh.set(singaporeC, 2);
      for (let h = 0; h < 3; h++) {
         privilegeG += `${1 ^ whitef.length}`;
      }
       let short_cP = String.fromCharCode(109,95,49,54,95,99,111,109,112,114,101,115,115,105,111,110,0);
       let chinasameQ = String.fromCharCode(109,117,108,120,95,105,95,49,52,0);
          let latni = String.fromCharCode(105,95,54,49,95,101,110,103,105,110,101,115,0);
          let iconnewsshareE = String.fromCharCode(120,112,116,97,98,108,101,95,108,95,49,57,0);
         short_cP += `${latni.length}`;
         latni = `${iconnewsshareE.length}`;
         iconnewsshareE += `${iconnewsshareE.length & 3}`;
         short_cP += "3";
         policyh = new Map([[privilegeG, 1 ^ privilegeG.length]]);
      unread9 = [(String.fromCharCode(80,0) == iconeyen ? iconeyen.length : sellmathbackground7)];
      if (notificatione) {
         break;
      }
   } while (notificatione && ((1 & unread9.length) == 5));
   if (zhuboX.length <= 2) {
      subsS += `${sellmathbackground7 * 2}`;
   }
      

       let popup3 = 3;
       let promotionK = String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,100,95,53,56,0);
       let twitterp: Map<any, any> = new Map([[String.fromCharCode(114,101,113,115,116,97,116,101,95,116,95,51,51,0),980], [String.fromCharCode(119,97,108,108,95,107,95,51,55,0),157]]);
      if (promotionK.length <= 4) {
         promotionK += `${twitterp.size}`;
      }
          let plasho = String.fromCharCode(118,95,56,52,95,102,97,118,101,0);
          let defaultteamt = 5;
         popup3 += promotionK.length * 3;
         plasho = `${defaultteamt / 2}`;
         defaultteamt /= Math.max(4, (plasho == String.fromCharCode(88,0) ? plasho.length : defaultteamt));
      while ((twitterp.size << (Math.min(promotionK.length, 5))) <= 3) {
          let placeholderu = String.fromCharCode(102,95,49,52,95,116,97,112,112,105,110,103,0);
         twitterp = new Map([[`${twitterp.size}`, popup3 >> (Math.min(Math.abs(3), 1))]]);
         placeholderu = `${(String.fromCharCode(88,0) == placeholderu ? placeholderu.length : placeholderu.length)}`;
         break;
      }
         twitterp.set(promotionK, popup3 + 1);
         popup3 |= 1 / (Math.max(9, popup3));
      while (promotionK.length > popup3) {
         popup3 |= 3;
         break;
      }
      if (3 <= (promotionK.length ^ 3) || (twitterp.size ^ promotionK.length) <= 3) {
         twitterp.set(promotionK, 1);
      }
         promotionK += "3";
         promotionK += `${promotionK.length >> (Math.min(Math.abs(3), 1))}`;
      foregroundG ^= 3 | promotionK.length;
       let eactA = String.fromCharCode(99,111,110,115,116,97,110,116,95,107,95,50,54,0);
          let shirty = String.fromCharCode(98,111,108,100,95,49,95,54,56,0);
          let mbridgef = String.fromCharCode(97,115,115,101,109,98,108,101,95,111,95,49,50,0);
         eactA += `${mbridgef.length % 2}`;
         shirty += `${shirty.length >> (Math.min(Math.abs(2), 5))}`;
         mbridgef = `${shirty.length % 1}`;
         eactA = "3";
      for (let s = 0; s < 2; s++) {
         eactA += `${eactA.length}`;
      }
      sellmathbackground7 -= zhuboX.length | 2;
      yys_giftbutton_footballtrophy.playsShareClicksAnalytics();

      foregroundG += iconeyen.length << (Math.min(1, Math.abs(parseInt(`${mbjscommonc}`))));
   let routerF = sellmathbackground7 >= 7914080;
   do {
      sellmathbackground7 += iconeyen.length;
      if (routerF) {
         break;
      }
   } while ((3 >= (sellmathbackground7 >> (Math.min(Math.abs(3), 2)))) && routerF);
      

      unread9 = [zhuboX.length + 2];
      foregroundG |= (String.fromCharCode(85,0) == zhuboX ? parseInt(`${fasth}`) : zhuboX.length);

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

       let anythinkJ = String.fromCharCode(105,115,115,117,101,114,115,95,118,95,57,49,0);
          let sendK = String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,103,95,49,56,0);
          let adultp = 2;
         anythinkJ += `${2 << (Math.min(4, sendK.length))}`;
         sendK += "3";
         adultp >>= Math.min(Math.abs(1), 3);
          let servicec = 5.0;
         anythinkJ = `${parseInt(`${servicec}`)}`;
         anythinkJ += `${anythinkJ.length & anythinkJ.length}`;
      unread9.push((String.fromCharCode(83,0) == zhuboX ? zhuboX.length : parseInt(`${fasth}`)));
      sellmathbackground7 |= foregroundG - 2;

      if (APP_NAME_CONST == "爱美剧") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;

       let nativeJ = String.fromCharCode(98,111,110,106,111,117,114,95,109,95,57,52,0);
       let iconsharefriendsG: Array<any> = [822, 116, 742];
         iconsharefriendsG.push(iconsharefriendsG.length);
          let disconnectedlogoH = false;
          let whitebell2 = String.fromCharCode(109,97,105,110,98,117,110,100,108,101,95,48,95,55,49,0);
          let analyticsp: Array<any> = [821, 833];
         iconsharefriendsG = [(nativeJ == String.fromCharCode(84,0) ? iconsharefriendsG.length : nativeJ.length)];
         disconnectedlogoH = (analyticsp.length << (Math.min(whitebell2.length, 4))) == 18;
         whitebell2 = `${(2 & (disconnectedlogoH ? 2 : 3))}`;
         analyticsp = [2 * analyticsp.length];
      while (nativeJ.length <= 3) {
         iconsharefriendsG = [(nativeJ == String.fromCharCode(87,0) ? nativeJ.length : iconsharefriendsG.length)];
         break;
      }
      while (!nativeJ.startsWith(`${iconsharefriendsG.length}`)) {
         iconsharefriendsG = [1];
         break;
      }
         iconsharefriendsG = [(nativeJ == String.fromCharCode(109,0) ? nativeJ.length : iconsharefriendsG.length)];
         iconsharefriendsG.push(nativeJ.length);
      fasth *= parseFloat(`${unread9.length >> (Math.min(Math.abs(3), 2))}`);
      unread9 = [foregroundG >> (Math.min(unread9.length, 3))];
      }

      const result = await Share.share({
        message: msg,
      });

   for (let y = 0; y < 2; y++) {
      zhuboX += `${foregroundG >> (Math.min(Math.abs(parseInt(`${mbjscommonc}`)), 5))}`;
   }
   for (let o = 0; o < 2; o++) {
       let mountingd = String.fromCharCode(100,95,52,48,95,104,108,115,101,110,99,0);
       let homeinactive6 = String.fromCharCode(97,117,116,111,100,111,119,110,108,111,97,100,95,114,95,51,0);
       let viewer6 = 4.0;
       let changek = String.fromCharCode(101,97,99,104,95,120,95,51,0);
      while (mountingd != String.fromCharCode(112,0)) {
         homeinactive6 = `${(String.fromCharCode(116,0) == changek ? changek.length : homeinactive6.length)}`;
         break;
      }
      let filem = mountingd == String.fromCharCode(107,98,52,51,114,106,0);
      do {
         mountingd += `${mountingd.length}`;
         if (filem) {
            break;
         }
      } while (filem && ((viewer6 * mountingd.length) < 5.24 && (5 * parseInt(`${viewer6}`)) < 5));
      for (let n = 0; n < 1; n++) {
         changek += `${homeinactive6.length << (Math.min(changek.length, 4))}`;
      }
      while (4 == (mountingd.length << (Math.min(Math.abs(3), 3))) || (viewer6 * 4.56) == 1.35) {
         mountingd = `${homeinactive6.length}`;
         break;
      }
      let cornershoot4 = viewer6 <= 7363893.0;
      do {
          let basketballhometeame = String.fromCharCode(108,95,50,51,95,105,110,116,101,114,102,114,97,109,101,0);
          let mergerL = String.fromCharCode(118,95,49,50,95,101,110,99,111,100,101,100,102,114,97,109,101,0);
          let orientationl = false;
          let suboutk = String.fromCharCode(115,111,97,108,108,111,99,95,57,95,49,49,0);
         viewer6 += 2;
         basketballhometeame += `${suboutk.length}`;
         mergerL = `${suboutk.length}`;
         orientationl = mergerL.endsWith(`${orientationl}`);
         if (cornershoot4) {
            break;
         }
      } while (cornershoot4 && (!mountingd.startsWith(`${viewer6}`)));
      if (3 > mountingd.length) {
         homeinactive6 = "3";
      }
      let whitez = 8825393 <= homeinactive6.length;
      do {
         homeinactive6 = `${mountingd.length * 3}`;
         if (whitez) {
            break;
         }
      } while (whitez && (homeinactive6.includes(mountingd)));
      let collection_ = homeinactive6 == String.fromCharCode(121,49,106,56,109,107,119,112,97,0);
      do {
         homeinactive6 += `${parseInt(`${viewer6}`) - homeinactive6.length}`;
         if (collection_) {
            break;
         }
      } while (collection_ && (mountingd.length == 2));
         mountingd += "3";
         homeinactive6 = `${3 + mountingd.length}`;
      for (let t = 0; t < 1; t++) {
         viewer6 /= Math.max(homeinactive6.length + 2, 1);
      }
      for (let v = 0; v < 2; v++) {
         viewer6 *= (homeinactive6 == String.fromCharCode(120,0) ? homeinactive6.length : parseInt(`${viewer6}`));
      }
      subsS += `${2 + parseInt(`${viewer6}`)}`;
   }
      if (result.action === Share.sharedAction) {

   if (4 < (4 + iconeyen.length) && 3 < (foregroundG + 4)) {
       let flipperS = 1.0;
       let tickn = 2.0;
         tickn /= Math.max(parseFloat(`${parseInt(`${flipperS}`)}`), 3);
      for (let x = 0; x < 2; x++) {
         flipperS *= parseInt(`${flipperS}`) - parseInt(`${tickn}`);
      }
         tickn -= parseFloat(`${3 | parseInt(`${tickn}`)}`);
      while (4.82 <= (flipperS / (Math.max(3, 9)))) {
         tickn *= parseFloat(`${2 % (Math.max(parseInt(`${tickn}`), 2))}`);
         break;
      }
          let liveshareX = 3.0;
          let topico = true;
         tickn += parseFloat(`${1 * parseInt(`${liveshareX}`)}`);
         liveshareX *= parseFloat(`${2}`);
      let leaguef = 9294623.0 >= flipperS;
      do {
          let iconwatcha = 5.0;
          let cross_ = String.fromCharCode(119,114,106,112,103,99,111,109,95,51,95,55,57,0);
          let internett = false;
          let with_acr: Array<any> = [325, 83];
         flipperS += parseInt(`${tickn}`);
         iconwatcha /= Math.max(4, ((internett ? 1 : 4) - with_acr.length));
         cross_ += `${(2 ^ (internett ? 1 : 5))}`;
         with_acr = [(cross_ == String.fromCharCode(88,0) ? with_acr.length : cross_.length)];
         if (leaguef) {
            break;
         }
      } while (leaguef && (tickn < 2.48));
      foregroundG += (String.fromCharCode(81,0) == iconeyen ? iconeyen.length : parseInt(`${flipperS}`));
   }
   while ((4 & unread9.length) < 4 || (unread9.length & 4) < 1) {
      zhuboX += `${subsS.length * foregroundG}`;
      break;
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

      subsS += "2";
       let turndownS = 4.0;
       let string0 = 4.0;
       let progressg = String.fromCharCode(118,95,55,52,95,99,111,101,102,102,0);
          let countryY = String.fromCharCode(111,95,53,48,95,99,111,108,108,105,100,105,110,103,0);
         progressg += `${progressg.length}`;
         countryY += "3";
      let notificationgrayC = string0 <= 7391137.0;
      do {
          let chatbotphoto3: Array<any> = [473, 898, 450];
          let defaultfootballbgP = 2.0;
          let backiconX: Array<any> = [110, 247];
          let androidH = false;
          let bottome = true;
         string0 /= Math.max(parseFloat(`${parseInt(`${defaultfootballbgP}`)}`), 2);
         chatbotphoto3 = [((bottome ? 4 : 2) << (Math.min(1, Math.abs(2))))];
         backiconX.push(1 - chatbotphoto3.length);
         bottome = !androidH;
         if (notificationgrayC) {
            break;
         }
      } while (notificationgrayC && ((string0 + 4.18) >= 5.40 || (4.18 * turndownS) >= 5.34));
      for (let e = 0; e < 3; e++) {
         progressg += "1";
      }
         string0 += parseFloat(`${parseInt(`${turndownS}`) & progressg.length}`);
      let watchnowbgT = 7494098.0 >= turndownS;
      do {
         turndownS += 2 / (Math.max(6, parseInt(`${turndownS}`)));
         if (watchnowbgT) {
            break;
         }
      } while (((1.25 + string0) <= 5.1 && (turndownS + string0) <= 1.25) && watchnowbgT);
         string0 += parseFloat(`${parseInt(`${turndownS}`) & parseInt(`${string0}`)}`);
          let sinaQ = String.fromCharCode(116,114,99,95,49,95,57,52,0);
          let dragcloses = String.fromCharCode(119,114,97,112,112,101,114,95,56,95,51,54,0);
          let executory = String.fromCharCode(121,95,52,54,95,110,101,97,114,101,114,0);
         string0 /= Math.max(parseFloat(`${2 ^ parseInt(`${turndownS}`)}`), 1);
         sinaQ = "2";
         dragcloses = "1";
         executory += `${2 >> (Math.min(5, executory.length))}`;
         progressg = `${parseInt(`${turndownS}`) / (Math.max(2, 1))}`;
      for (let g = 0; g < 2; g++) {
         string0 /= Math.max(parseFloat(`${2 | parseInt(`${turndownS}`)}`), 1);
      }
      iconeyen += "3";
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let iconstarb = 3.0;
    let umeng6 = String.fromCharCode(104,95,49,48,48,95,113,115,116,101,112,0);
    let annerb = false;
    let infon = true;
    let notificationfillemptyj: Map<any, any> = new Map([[String.fromCharCode(105,95,51,57,95,116,104,114,101,115,104,111,108,100,105,110,103,0),false ], [String.fromCharCode(119,105,114,101,108,101,115,115,95,54,95,57,57,0),true ]]);
    let referrerb = 5.0;
    let fillI = 5.0;
    let predictionactivev = String.fromCharCode(98,95,53,53,95,105,119,97,108,115,104,0);
    let overF: Map<any, any> = new Map([[String.fromCharCode(112,95,49,52,95,115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0),false ], [String.fromCharCode(102,95,54,54,95,97,114,105,98,0),true ]]);
    let episode0: Array<any> = [859, 666, 257];
    let lineC = 1.0;
    let icondefaultthumbnailz = String.fromCharCode(100,111,101,115,95,107,95,49,55,0);
    let icondefaultthumbnailZ = String.fromCharCode(114,105,110,103,116,111,110,101,115,95,113,95,48,0);
    let iconcurrentmatchw: Map<any, any> = new Map([[String.fromCharCode(114,97,108,102,100,97,116,97,95,110,95,56,51,0),String.fromCharCode(113,95,52,56,95,100,101,99,105,115,105,111,110,0)], [String.fromCharCode(103,95,51,57,95,103,108,107,0),String.fromCharCode(116,114,101,101,99,111,100,101,114,95,97,95,50,0)]]);
    let unimplementedview0 = 2;
      episode0 = [parseInt(`${referrerb}`) - 3];
      annerb = (iconstarb + overF.size) < 43.44;
   for (let f = 0; f < 3; f++) {
      infon = annerb || 83.48 >= fillI;
   }
      predictionactivev += `${overF.size}`;
   while ((5 ^ notificationfillemptyj.size) >= 1) {
      referrerb -= parseFloat(`${umeng6.length}`);
      break;
   }
   let incidenty = fillI <= 7638954.0;
   do {
       let iconnotificationnewL = 3.0;
      for (let x = 0; x < 1; x++) {
         iconnotificationnewL += parseInt(`${iconnotificationnewL}`) & parseInt(`${iconnotificationnewL}`);
      }
      if (4.81 <= (iconnotificationnewL - 1.53)) {
         iconnotificationnewL += parseInt(`${iconnotificationnewL}`);
      }
      for (let z = 0; z < 2; z++) {
         iconnotificationnewL *= parseInt(`${iconnotificationnewL}`);
      }
      fillI *= parseFloat(`${notificationfillemptyj.size % (Math.max(2, 3))}`);
      if (incidenty) {
         break;
      }
   } while (((fillI + 5.54) >= 5.76) && incidenty);
   while (1 >= (4 | predictionactivev.length) || 2 >= (parseInt(`${referrerb}`) / 4)) {
      predictionactivev = `${((infon ? 5 : 2) * parseInt(`${iconstarb}`))}`;
      break;
   }
   for (let a = 0; a < 1; a++) {
      notificationfillemptyj.set(`${annerb}`, (episode0.length | (annerb ? 3 : 4)));
   }

    const state = await NetInfo.fetch();

   let debugQ = fillI >= 8935680.0;
   do {
      fillI *= (parseFloat(`${(infon ? 5 : 2) ^ parseInt(`${iconstarb}`)}`));
      if (debugQ) {
         break;
      }
   } while (debugQ && (!infon));
   while (infon) {
      predictionactivev = `${overF.size - 3}`;
      break;
   }
      fillI -= parseFloat(`${overF.size / 3}`);
       let sellf: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,101,114,115,95,107,95,49,0),String.fromCharCode(109,115,114,108,101,95,99,95,56,52,0)], [String.fromCharCode(105,95,49,53,95,99,111,118,101,114,101,100,0),String.fromCharCode(114,101,112,108,97,121,103,97,105,110,95,119,95,49,49,0)], [String.fromCharCode(104,101,114,109,105,116,101,95,48,95,49,56,0),String.fromCharCode(101,110,99,97,112,95,52,95,51,48,0)]]);
       let homes = String.fromCharCode(99,116,120,112,95,118,95,52,48,0);
       let libglogV = String.fromCharCode(116,95,54,51,95,117,114,118,101,115,0);
      let yingG = homes.length >= 7432213;
      do {
          let headerN: Array<any> = [558, 743];
          let iconnointernetl: Array<any> = [String.fromCharCode(99,105,114,99,108,101,100,95,108,95,51,0), String.fromCharCode(112,102,105,108,116,101,114,95,115,95,54,50,0), String.fromCharCode(100,95,57,95,111,115,116,114,101,97,109,0)];
          let libjsijniprofilerK = false;
         homes += `${sellf.size}`;
         headerN = [1];
         iconnointernetl = [iconnointernetl.length];
         libjsijniprofilerK = headerN.includes(iconnointernetl[0]);
         if (yingG) {
            break;
         }
      } while (yingG && (libglogV == homes));
         homes = `${(libglogV == String.fromCharCode(83,0) ? sellf.size : libglogV.length)}`;
      if (libglogV.length == homes.length) {
          let positionfieldJ = String.fromCharCode(119,95,53,57,95,97,108,112,104,97,98,101,116,0);
          let backwhitef: Map<any, any> = new Map([[String.fromCharCode(121,111,110,108,121,120,95,97,95,53,48,0),75], [String.fromCharCode(106,112,101,103,108,115,100,101,99,95,115,95,54,53,0),650]]);
          let iconstar3 = String.fromCharCode(109,95,52,54,95,100,101,108,101,116,105,111,110,0);
          let static_ncI = String.fromCharCode(114,95,50,50,95,108,97,110,99,122,111,115,0);
         homes += `${2 ^ sellf.size}`;
         positionfieldJ = `${iconstar3.length}`;
         backwhitef = new Map([[iconstar3, (String.fromCharCode(106,0) == static_ncI ? iconstar3.length : static_ncI.length)]]);
      }
       let orientation9 = String.fromCharCode(103,95,54,49,95,109,97,120,113,0);
       let dplusx = String.fromCharCode(117,110,113,117,97,110,116,95,110,95,56,55,0);
      for (let w = 0; w < 1; w++) {
         orientation9 += `${orientation9.length ^ libglogV.length}`;
      }
         dplusx = `${homes.length}`;
         orientation9 += `${(orientation9 == String.fromCharCode(115,0) ? orientation9.length : sellf.size)}`;
         sellf = new Map([[orientation9, orientation9.length]]);
       let activeD = 4;
       let defaultpredictionprofileZ = 2;
      predictionactivev = `${parseInt(`${fillI}`) ^ 2}`;
       let awayteamfieldd: Map<any, any> = new Map([[String.fromCharCode(97,95,51,50,95,105,110,116,101,110,116,115,0),262], [String.fromCharCode(97,99,116,105,111,110,115,95,49,95,50,57,0),258]]);
         awayteamfieldd.set(`${awayteamfieldd.size}`, 1 | awayteamfieldd.size);
          let awayicon8 = String.fromCharCode(99,111,118,101,114,115,95,100,95,51,57,0);
          let exampleimageG = 4.0;
         awayteamfieldd = new Map([[`${awayteamfieldd.size}`, parseInt(`${exampleimageG}`) / (Math.max(2, 7))]]);
         awayicon8 = `${2 * awayicon8.length}`;
         exampleimageG *= parseFloat(`${awayicon8.length}`);
      for (let d = 0; d < 2; d++) {
         awayteamfieldd.set(`${awayteamfieldd.size}`, 2 * awayteamfieldd.size);
      }
      annerb = referrerb < parseFloat(`${overF.size}`);
   while ((4 * overF.size) <= 4 || 2 <= (4 * umeng6.length)) {
      umeng6 = `${2 >> (Math.min(5, Math.abs(parseInt(`${referrerb}`))))}`;
      break;
   }
   for (let t = 0; t < 1; t++) {
      annerb = fillI >= referrerb;
   }
      annerb = episode0.includes(referrerb);
    const offline = !(state.isConnected && state.isInternetReachable);

   if ((2 * overF.size) == 3 || 4.55 == (parseFloat(`${overF.size}`) + referrerb)) {
      referrerb += parseFloat(`${parseInt(`${iconstarb}`) * 1}`);
   }
       let r_playerM = String.fromCharCode(115,101,116,116,105,103,110,115,95,115,95,51,55,0);
       let castk = false;
       let defaultroombgK = 5;
         castk = !castk;
      for (let i = 0; i < 3; i++) {
         castk = 98 <= defaultroombgK;
      }
         castk = (defaultroombgK % (Math.max(1, r_playerM.length))) >= 50;
      let long_bt5 = castk ? !castk : castk;
      do {
         castk = r_playerM.length >= 80;
         if (long_bt5) {
            break;
         }
      } while (long_bt5 && (5 > r_playerM.length && castk));
       let editu: Map<any, any> = new Map([[String.fromCharCode(103,95,52,57,95,99,104,97,114,109,97,112,0),String.fromCharCode(118,97,108,105,100,97,116,101,95,109,95,49,51,0)], [String.fromCharCode(120,111,102,102,115,101,116,95,48,95,53,53,0),String.fromCharCode(121,95,50,54,95,97,100,115,0)], [String.fromCharCode(98,95,49,48,95,97,118,102,111,117,110,100,97,116,105,111,110,0),String.fromCharCode(102,95,50,57,95,116,104,117,110,107,0)]]);
         editu = new Map([[`${defaultroombgK}`, r_playerM.length >> (Math.min(Math.abs(3), 2))]]);
      if ((editu.size / (Math.max(3, 9))) == 5) {
          let stringU: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,110,111,95,122,95,52,57,0),441], [String.fromCharCode(111,110,116,97,99,116,115,95,54,95,54,52,0),251], [String.fromCharCode(121,95,50,48,95,118,101,114,116,105,99,97,108,0),522]]);
         editu.set(`${defaultroombgK}`, defaultroombgK);
         stringU.set(`${stringU.size}`, stringU.size ^ stringU.size);
      }
      while (1 > defaultroombgK) {
          let inviteF = 4.0;
          let libreanimated2 = 5.0;
          let membershipA = 1.0;
          let defaultbasketballbgh = 0.0;
         castk = castk || r_playerM.length <= 66;
         inviteF /= Math.max(parseFloat(`${3 | parseInt(`${inviteF}`)}`), 5);
         libreanimated2 -= parseFloat(`${3}`);
         membershipA += parseInt(`${inviteF}`) % 3;
         defaultbasketballbgh += parseInt(`${libreanimated2}`);
         break;
      }
       let models8 = String.fromCharCode(102,95,54,50,95,111,102,102,115,0);
       let libmapbufferjni5 = String.fromCharCode(101,120,99,108,95,110,95,54,54,0);
      umeng6 += `${overF.size & parseInt(`${referrerb}`)}`;
   for (let g = 0; g < 2; g++) {
       let whitetickL = String.fromCharCode(114,101,98,117,105,108,100,95,55,95,50,55,0);
       let shrunk8 = String.fromCharCode(114,95,49,55,95,100,101,115,101,114,105,97,108,105,122,101,100,0);
         whitetickL += `${(String.fromCharCode(100,0) == whitetickL ? shrunk8.length : whitetickL.length)}`;
       let sinaL = true;
      for (let n = 0; n < 2; n++) {
         whitetickL = `${whitetickL.length << (Math.min(Math.abs(2), 5))}`;
      }
      while (sinaL || shrunk8.length > 5) {
          let club7 = 3;
          let bingF: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,112,115,105,110,103,95,108,95,53,50,0),678], [String.fromCharCode(107,95,57,51,95,113,105,110,100,101,120,0),944]]);
          let libswresampleZ: Map<any, any> = new Map([[String.fromCharCode(115,95,50,57,95,112,97,99,107,101,116,101,100,0),718], [String.fromCharCode(112,114,105,110,116,102,95,48,95,57,51,0),932]]);
          let encryptor5: Map<any, any> = new Map([[String.fromCharCode(101,118,105,99,116,95,108,95,51,48,0),370], [String.fromCharCode(101,95,50,57,95,105,110,112,117,116,116,101,109,0),516]]);
         sinaL = (club7 + whitetickL.length) < 82;
         club7 >>= Math.min(Math.abs(bingF.size ^ 3), 1);
         bingF.set(`${libswresampleZ.size}`, 3);
         libswresampleZ = new Map([[`${libswresampleZ.size}`, encryptor5.size / 1]]);
         encryptor5 = new Map([[`${encryptor5.size}`, encryptor5.size / (Math.max(3, bingF.size))]]);
         break;
      }
      if (whitetickL.includes(`${sinaL}`)) {
         whitetickL += `${((sinaL ? 2 : 1) & 1)}`;
      }
      let iconnotificationnew0 = sinaL ? !sinaL : sinaL;
      do {
         sinaL = 53 > whitetickL.length;
         if (iconnotificationnew0) {
            break;
         }
      } while (iconnotificationnew0 && (whitetickL.length == 4));
      infon = 32 > overF.size && whitetickL.length > 32;
   }
   while (Array.from(notificationfillemptyj.keys()).includes(`${referrerb}`)) {
      referrerb /= Math.max(parseFloat(`${2}`), 4);
      break;
   }
   while (umeng6.length <= 4) {
      infon = episode0.length <= 18;
      break;
   }
   if (4 >= (overF.size + 2) && 4 >= (overF.size + 2)) {
      lineC *= parseFloat(`${predictionactivev.length - 3}`);
   }
   for (let e = 0; e < 2; e++) {
       let whistleorangeL = 3;
       let filtert: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,95,51,95,49,57,0),191], [String.fromCharCode(122,95,56,50,95,100,105,109,105,110,115,105,111,110,115,0),506]]);
       let rncore1 = String.fromCharCode(99,111,108,108,101,99,116,111,114,95,98,95,49,0);
       let libjsiH = String.fromCharCode(112,114,111,100,117,99,116,115,95,51,95,54,54,0);
       let drags: Map<any, any> = new Map([[String.fromCharCode(109,95,49,95,119,101,98,115,111,99,107,101,116,0),true ], [String.fromCharCode(110,95,57,50,95,97,110,99,104,111,114,0),true ], [String.fromCharCode(112,107,99,114,121,112,116,95,100,95,53,52,0),false ]]);
         drags.set(libjsiH, libjsiH.length | 3);
      while (rncore1.length <= 2) {
          let left8: Array<any> = [String.fromCharCode(115,105,102,116,95,101,95,49,48,0), String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,117,95,56,54,0)];
          let penaltygoalz = String.fromCharCode(112,114,101,117,112,100,97,116,101,95,118,95,50,57,0);
         libjsiH += `${2 << (Math.min(4, Math.abs(filtert.size)))}`;
         left8.push(left8.length - 1);
         penaltygoalz = `${2 % (Math.max(1, left8.length))}`;
         break;
      }
         libjsiH += `${(libjsiH == String.fromCharCode(89,0) ? filtert.size : libjsiH.length)}`;
         libjsiH += "3";
         rncore1 += `${whistleorangeL}`;
      for (let b = 0; b < 3; b++) {
         rncore1 = "2";
      }
         rncore1 += `${rncore1.length & 1}`;
      for (let n = 0; n < 2; n++) {
         whistleorangeL <<= Math.min(Math.abs(filtert.size), 2);
      }
      for (let t = 0; t < 3; t++) {
          let mountingp = 5;
         rncore1 = `${mountingp}`;
      }
         drags = new Map([[rncore1, libjsiH.length >> (Math.min(5, rncore1.length))]]);
      let iconbellactiveq = drags.size <= 5065225;
      do {
          let vipsportx = String.fromCharCode(122,95,49,51,95,99,111,108,108,97,116,105,110,103,0);
          let i_hashn = 5;
         drags.set(`${rncore1}`, filtert.size + rncore1.length);
         vipsportx += `${i_hashn}`;
         i_hashn -= vipsportx.length & 2;
         if (iconbellactiveq) {
            break;
         }
      } while (iconbellactiveq && ((filtert.size ^ 4) < 3));
      for (let i = 0; i < 3; i++) {
         libjsiH = `${filtert.size - 3}`;
      }
         whistleorangeL += 3 * rncore1.length;
      for (let q = 0; q < 1; q++) {
          let runtimeschedulert: Array<any> = [706, 592, 284];
          let libreactP = true;
         whistleorangeL |= 2;
         runtimeschedulert.push(runtimeschedulert.length);
         libreactP = runtimeschedulert.length < 86 || 86 < runtimeschedulert.length;
      }
         rncore1 += `${whistleorangeL % (Math.max(2, 9))}`;
      lineC /= Math.max(parseFloat(`${2}`), 2);
   }
      notificationfillemptyj.set(predictionactivev, 3 + overF.size);
    setIsOffline(offline);

   while (annerb) {
      fillI *= parseFloat(`${parseInt(`${iconstarb}`)}`);
      break;
   }
   while (2 == notificationfillemptyj.size) {
      notificationfillemptyj.set(`${annerb}`, ((annerb ? 3 : 3) % (Math.max(8, notificationfillemptyj.size))));
      break;
   }
      lineC += parseFloat(`${parseInt(`${fillI}`) << (Math.min(Math.abs(2), 5))}`);
   if (Array.from(overF.values()).includes(referrerb)) {
      overF = new Map([[`${annerb}`, ((annerb ? 3 : 4) / (Math.max(parseInt(`${lineC}`), 7)))]]);
   }
      referrerb /= Math.max(parseFloat(`${parseInt(`${lineC}`)}`), 3);
   while (umeng6.endsWith(`${iconstarb}`)) {
      iconstarb += 3 + parseInt(`${fillI}`);
      break;
   }
   for (let g = 0; g < 1; g++) {
      lineC += parseFloat(`${1 % (Math.max(9, overF.size))}`);
   }
   let images5 = overF.size <= 7199086;
   do {
      overF.set(`${notificationfillemptyj.size}`, 1 * notificationfillemptyj.size);
      if (images5) {
         break;
      }
   } while ((!predictionactivev.endsWith(`${overF.size}`)) && images5);
    setDismountPlayer(false); 
    
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      
      yys_giftbutton_footballtrophy.playsViewsAnalytics({
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
    yysInactive.getDetail(vod?.vod_id.toString() ?? "").then((data) => {
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
    yysInactive.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as yysFullLibcrashsdk[]);

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
       let temperatureJ: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,105,120,101,110,99,95,119,95,52,52,0),242], [String.fromCharCode(111,103,103,100,101,99,95,109,95,49,0),519], [String.fromCharCode(102,108,97,116,95,99,95,53,55,0),816]]);
    let sharedc: Array<any> = [String.fromCharCode(98,95,53,57,95,119,105,100,103,101,116,0), String.fromCharCode(100,95,49,49,95,97,110,103,101,0)];
    let defaultlogof: Array<any> = [188, 419];
    let iconsettingQ: Array<any> = [String.fromCharCode(117,116,105,108,115,95,98,95,53,52,0), String.fromCharCode(109,95,52,48,95,100,105,115,116,114,105,99,116,0)];
    let nativemoduleF = 2.0;
    let dropdown2 = 1;
    let giftbuttonp = String.fromCharCode(116,101,109,112,108,97,116,101,115,95,115,95,57,55,0);
    let baiduadsr = 5.0;
      temperatureJ = new Map([[`${defaultlogof.length}`, giftbuttonp.length]]);
   for (let w = 0; w < 1; w++) {
      sharedc = [defaultlogof.length ^ parseInt(`${nativemoduleF}`)];
   }
       let predictiondefaultW = String.fromCharCode(109,97,116,116,101,95,116,95,55,52,0);
       let searchbarb = true;
       let resultC = false;
         predictiondefaultW = `${(String.fromCharCode(121,0) == predictiondefaultW ? predictiondefaultW.length : (searchbarb ? 1 : 1))}`;
          let background8 = String.fromCharCode(102,95,57,52,95,97,112,112,114,101,99,97,116,105,111,110,0);
         searchbarb = !searchbarb;
         background8 = `${background8.length}`;
      sharedc.push(2);
   for (let o = 0; o < 1; o++) {
       let privatechatbgf: Map<any, any> = new Map([[String.fromCharCode(116,119,105,99,101,95,55,95,51,56,0),269], [String.fromCharCode(105,110,118,101,114,115,101,95,117,95,52,54,0),506]]);
      while ((privatechatbgf.size & privatechatbgf.size) == 1) {
          let watchnowbgr = String.fromCharCode(114,101,113,117,105,114,105,110,103,95,105,95,51,0);
         privatechatbgf = new Map([[`${privatechatbgf.size}`, privatechatbgf.size]]);
         watchnowbgr += `${watchnowbgr.length / (Math.max(watchnowbgr.length, 6))}`;
         break;
      }
         privatechatbgf = new Map([[`${privatechatbgf.size}`, privatechatbgf.size | privatechatbgf.size]]);
      let bangR = 5323023 >= privatechatbgf.size;
      do {
         privatechatbgf = new Map([[`${privatechatbgf.size}`, privatechatbgf.size >> (Math.min(Math.abs(1), 2))]]);
         if (bangR) {
            break;
         }
      } while ((privatechatbgf.size <= 1) && bangR);
      baiduadsr += 1 << (Math.min(5, Math.abs(temperatureJ.size)));
   }
   for (let w = 0; w < 1; w++) {
       let securityh: Array<any> = [21, 557];
       let transferC = 0.0;
       let thailandY = String.fromCharCode(121,95,57,54,95,100,101,118,101,108,111,112,101,114,0);
       let securityJ = String.fromCharCode(114,95,52,49,95,119,111,114,100,0);
       let carousel2 = false;
         thailandY = `${parseInt(`${transferC}`)}`;
      let latna = 8841098 >= securityJ.length;
      do {
         securityJ = `${parseInt(`${transferC}`) - 3}`;
         if (latna) {
            break;
         }
      } while (((securityJ.length - 4) == 2 || 2 == (securityh.length - 4)) && latna);
      while (4 >= (securityh.length + 1)) {
          let qcopy_q2O: Array<any> = [String.fromCharCode(111,95,51,50,95,112,104,121,115,0), String.fromCharCode(109,97,116,114,105,120,102,95,114,95,54,55,0)];
          let leagueV = String.fromCharCode(100,95,51,57,95,116,114,105,112,108,101,0);
          let k_countA = String.fromCharCode(99,97,114,100,104,111,108,100,101,114,95,49,95,56,0);
         thailandY += "3";
         qcopy_q2O.push(qcopy_q2O.length & 1);
         leagueV = `${leagueV.length}`;
         k_countA += `${qcopy_q2O.length & leagueV.length}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
         securityh.push(securityJ.length / (Math.max(2, thailandY.length)));
      }
         thailandY = `${(String.fromCharCode(118,0) == thailandY ? securityJ.length : thailandY.length)}`;
         securityJ += `${(2 + (carousel2 ? 1 : 5))}`;
       let settingsG = String.fromCharCode(117,95,50,57,95,104,119,116,105,109,101,0);
       let forward1 = String.fromCharCode(109,95,54,52,95,104,105,103,104,108,105,103,104,116,0);
         securityh.push(settingsG.length * 2);
       let fullscreenmaxq = String.fromCharCode(119,114,97,112,95,115,95,53,55,0);
       let gmailr = String.fromCharCode(118,95,57,50,95,105,110,105,116,104,0);
         gmailr += `${forward1.length >> (Math.min(Math.abs(3), 4))}`;
         thailandY = `${1 - thailandY.length}`;
         fullscreenmaxq = `${(String.fromCharCode(106,0) == fullscreenmaxq ? parseInt(`${transferC}`) : fullscreenmaxq.length)}`;
      for (let k = 0; k < 1; k++) {
         securityh.push(settingsG.length);
      }
          let bodank = 5.0;
          let iconbellp = String.fromCharCode(103,95,52,55,95,98,97,99,107,112,116,114,0);
         settingsG += `${((carousel2 ? 2 : 5) * securityJ.length)}`;
         bodank += parseFloat(`${parseInt(`${bodank}`) % (Math.max(iconbellp.length, 2))}`);
         iconbellp += "3";
      for (let c = 0; c < 2; c++) {
          let header_: Array<any> = [231, 785];
         securityh = [(settingsG.length | (carousel2 ? 3 : 5))];
         header_ = [header_.length + header_.length];
      }
      sharedc = [1 - defaultlogof.length];
   }
   while (1 == (iconsettingQ.length | defaultlogof.length) && 1 == (iconsettingQ.length | defaultlogof.length)) {
      defaultlogof.push(dropdown2 / (Math.max(giftbuttonp.length, 2)));
      break;
   }
   if ((defaultlogof.length - 3) < 4) {
      sharedc = [iconsettingQ.length];
   }
   let containerh = 6998593 <= dropdown2;
   do {
       let fileC = String.fromCharCode(109,117,108,120,95,55,95,55,53,0);
       let gifgoalV = String.fromCharCode(118,115,121,110,99,95,56,95,53,51,0);
      if (1 <= gifgoalV.length) {
         gifgoalV = `${gifgoalV.length}`;
      }
      for (let o = 0; o < 1; o++) {
         gifgoalV = `${(fileC == String.fromCharCode(79,0) ? gifgoalV.length : fileC.length)}`;
      }
      while (fileC.length >= 3) {
          let reactnativejsj = 2.0;
         gifgoalV += `${1 + gifgoalV.length}`;
         reactnativejsj += 1;
         break;
      }
         gifgoalV = "3";
         fileC = `${gifgoalV.length << (Math.min(2, fileC.length))}`;
          let detail5 = String.fromCharCode(114,95,53,52,95,100,105,109,101,110,115,105,111,110,115,0);
          let downarrow_ = 2.0;
         fileC += `${detail5.length >> (Math.min(fileC.length, 5))}`;
         detail5 = `${parseInt(`${downarrow_}`)}`;
      dropdown2 -= 3;
      if (containerh) {
         break;
      }
   } while ((!giftbuttonp.includes(`${dropdown2}`)) && containerh);

    

      nativemoduleF *= sharedc.length;
   for (let o = 0; o < 1; o++) {
      sharedc.push(dropdown2);
   }
      temperatureJ = new Map([[`${iconsettingQ.length}`, iconsettingQ.length >> (Math.min(3, sharedc.length))]]);
   if (5 == (dropdown2 - 3)) {
      giftbuttonp += `${(String.fromCharCode(105,0) == giftbuttonp ? giftbuttonp.length : parseInt(`${nativemoduleF}`))}`;
   }
   if (!Array.from(temperatureJ.keys()).includes(`${defaultlogof.length}`)) {
      defaultlogof.push(defaultlogof.length);
   }
   let teamdetailsbg4 = 5059960 <= giftbuttonp.length;
   do {
      giftbuttonp += "3";
      if (teamdetailsbg4) {
         break;
      }
   } while ((iconsettingQ.length <= 2) && teamdetailsbg4);
       let playlistR = String.fromCharCode(100,95,57,53,95,109,97,116,99,104,0);
      let predictionwinz = playlistR.length <= 7247354;
      do {
         playlistR += `${playlistR.length | playlistR.length}`;
         if (predictionwinz) {
            break;
         }
      } while (predictionwinz && (!playlistR.endsWith(playlistR)));
          let mbnative5 = String.fromCharCode(120,95,51,52,95,114,101,99,105,100,0);
          let codeM = false;
          let showlessI = true;
         playlistR = `${((codeM ? 4 : 3))}`;
         mbnative5 += `${mbnative5.length}`;
         codeM = mbnative5.length == 88 && !showlessI;
          let profileinactiveq = String.fromCharCode(111,95,51,57,95,114,101,115,105,100,117,101,115,0);
          let resendj = 4;
          let mounting3 = String.fromCharCode(111,119,110,101,114,115,95,112,95,54,56,0);
         playlistR += `${1 & playlistR.length}`;
         profileinactiveq = `${profileinactiveq.length}`;
         resendj /= Math.max(1, mounting3.length + resendj);
         mounting3 += `${resendj | profileinactiveq.length}`;
      nativemoduleF += 2;
       let turnO = String.fromCharCode(101,95,52,49,95,97,117,116,111,117,112,100,97,116,101,0);
       let trophyu = String.fromCharCode(103,95,49,55,95,116,114,97,105,116,0);
       let brightnessn = String.fromCharCode(122,95,50,53,95,99,111,115,105,103,110,97,116,111,114,121,0);
         turnO += `${brightnessn.length}`;
          let zoomT = String.fromCharCode(116,114,97,105,116,95,49,95,49,53,0);
          let eighteenq = 2.0;
          let windl: Map<any, any> = new Map([[String.fromCharCode(122,95,55,50,95,115,117,98,110,111,100,101,0),String.fromCharCode(113,95,49,48,95,108,101,114,116,0)], [String.fromCharCode(118,95,49,55,95,114,101,100,114,97,119,0),String.fromCharCode(100,105,114,97,99,100,115,112,95,51,95,56,48,0)]]);
         turnO = `${(String.fromCharCode(67,0) == zoomT ? windl.size : zoomT.length)}`;
         eighteenq -= parseFloat(`${parseInt(`${eighteenq}`) ^ parseInt(`${eighteenq}`)}`);
      baiduadsr += giftbuttonp.length;
    await refetch();

      sharedc = [giftbuttonp.length];
      defaultlogof = [parseInt(`${baiduadsr}`)];
   let readc = baiduadsr >= 8428105.0;
   do {
       let yingg = String.fromCharCode(122,95,49,56,95,109,105,110,117,116,101,0);
       let penaltyshootnogoalY = String.fromCharCode(116,104,114,101,97,100,105,110,103,95,105,95,51,56,0);
       let viewsu = 3.0;
       let iconschedulep = true;
          let penaltygoalK = 1;
          let dataR = String.fromCharCode(117,95,52,95,117,110,98,108,111,99,107,0);
          let iconviewerv = String.fromCharCode(97,115,111,108,117,116,101,95,102,95,49,54,0);
         viewsu /= Math.max(parseFloat(`${yingg.length}`), 3);
         penaltygoalK |= penaltygoalK;
         dataR += `${3 - dataR.length}`;
         iconviewerv += `${dataR.length + penaltygoalK}`;
      let footballtrophym = penaltyshootnogoalY == String.fromCharCode(113,97,99,119,118,100,115,0);
      do {
          let areal = 4;
         penaltyshootnogoalY = `${penaltyshootnogoalY.length / (Math.max(7, areal))}`;
         if (footballtrophym) {
            break;
         }
      } while (footballtrophym && (yingg.startsWith(penaltyshootnogoalY)));
      for (let y = 0; y < 3; y++) {
         iconschedulep = iconschedulep && penaltyshootnogoalY.length >= 47;
      }
      while (iconschedulep || (5.98 + viewsu) <= 4.81) {
          let predictionZ = 4.0;
         viewsu /= Math.max(2, (parseFloat(`${(iconschedulep ? 4 : 4) | penaltyshootnogoalY.length}`)));
         predictionZ -= parseFloat(`${parseInt(`${predictionZ}`) << (Math.min(2, Math.abs(3)))}`);
         break;
      }
          let libcrashsdkb = 1.0;
          let smallbrightnessa: Map<any, any> = new Map([[String.fromCharCode(112,111,116,105,115,105,111,110,95,48,95,51,50,0),869], [String.fromCharCode(100,118,97,117,100,105,111,95,100,95,53,51,0),673]]);
         viewsu /= Math.max(parseFloat(`${parseInt(`${libcrashsdkb}`)}`), 5);
         libcrashsdkb *= smallbrightnessa.size + 2;
         smallbrightnessa.set(`${smallbrightnessa.size}`, smallbrightnessa.size | smallbrightnessa.size);
         viewsu += parseFloat(`${1}`);
      if (penaltyshootnogoalY.length > 2) {
         viewsu /= Math.max(parseFloat(`${parseInt(`${viewsu}`) >> (Math.min(1, Math.abs(1)))}`), 5);
      }
         penaltyshootnogoalY += `${(String.fromCharCode(87,0) == yingg ? (iconschedulep ? 4 : 5) : yingg.length)}`;
       let uimanager8 = String.fromCharCode(109,98,117,102,99,104,97,105,110,95,103,95,57,51,0);
       let dropdownT = String.fromCharCode(117,95,52,49,95,108,111,116,115,0);
         viewsu *= parseFloat(`${uimanager8.length}`);
      while (uimanager8.length > 5) {
         uimanager8 = "3";
         break;
      }
         iconschedulep = yingg.length < uimanager8.length;
      baiduadsr *= sharedc.length;
      if (readc) {
         break;
      }
   } while ((giftbuttonp.length > baiduadsr) && readc);
   for (let l = 0; l < 1; l++) {
      giftbuttonp += "2";
   }
      sharedc.push(iconsettingQ.length);
   while (5.50 >= (3.11 + baiduadsr) && (baiduadsr + 3.11) >= 3.57) {
      baiduadsr -= parseInt(`${nativemoduleF}`) | 1;
      break;
   }
   for (let o = 0; o < 3; o++) {
      temperatureJ = new Map([[`${nativemoduleF}`, parseInt(`${nativemoduleF}`)]]);
   }
   if (iconsettingQ.length < 2) {
       let flagg = String.fromCharCode(121,95,55,50,95,99,118,99,0);
       let const_jU: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,101,95,116,95,53,49,0),156], [String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,105,95,53,53,0),379], [String.fromCharCode(110,95,56,54,95,116,114,97,99,101,0),890]]);
       let tickedo = String.fromCharCode(116,111,111,98,105,103,95,122,95,50,56,0);
          let libnmst = false;
          let currentY = 1;
         tickedo += `${tickedo.length}`;
         libnmst = !libnmst;
         currentY *= ((libnmst ? 5 : 4) ^ currentY);
      while (tickedo == flagg) {
          let iconorientation7 = 5;
         flagg += "3";
         iconorientation7 += 1;
         break;
      }
         const_jU = new Map([[`${const_jU.size}`, (flagg == String.fromCharCode(81,0) ? const_jU.size : flagg.length)]]);
         flagg += `${tickedo.length / 1}`;
         flagg += `${flagg.length - 2}`;
      iconsettingQ = [2 >> (Math.min(Math.abs(parseInt(`${nativemoduleF}`)), 1))];
   }
    

   while (nativemoduleF < baiduadsr) {
      nativemoduleF /= Math.max(1, 5);
      break;
   }
   if (4 <= defaultlogof.length) {
      sharedc.push(2 & parseInt(`${nativemoduleF}`));
   }
   if (!sharedc.includes(baiduadsr)) {
      baiduadsr /= Math.max(5, iconsettingQ.length / 2);
   }
       let javaH = 4.0;
       let reactm = String.fromCharCode(105,99,111,110,115,95,54,95,51,56,0);
       let baiduadsP = String.fromCharCode(98,95,51,52,95,101,108,105,115,105,111,110,0);
      for (let h = 0; h < 2; h++) {
          let libimagepipelinew = String.fromCharCode(97,100,97,112,116,101,114,95,97,95,50,56,0);
         javaH /= Math.max(baiduadsP.length, 3);
         libimagepipelinew = `${3 + libimagepipelinew.length}`;
      }
      while (!baiduadsP.endsWith(`${reactm.length}`)) {
          let langF: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,101,114,115,95,120,95,54,50,0),String.fromCharCode(97,100,100,105,116,105,118,101,95,108,95,53,50,0)], [String.fromCharCode(118,95,53,49,95,101,109,98,101,100,0),String.fromCharCode(99,97,108,108,101,100,95,119,95,51,56,0)], [String.fromCharCode(99,95,50,53,95,112,108,105,115,116,0),String.fromCharCode(113,95,57,54,95,111,99,99,117,114,114,101,110,99,101,115,0)]]);
          let emojiheartO: Map<any, any> = new Map([[String.fromCharCode(107,95,49,55,95,116,105,109,115,116,97,109,112,0),String.fromCharCode(115,95,54,54,95,100,101,112,108,111,121,0)], [String.fromCharCode(115,95,52,57,95,119,109,118,100,115,112,0),String.fromCharCode(112,95,56,55,95,113,117,111,116,101,115,0)], [String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,113,95,57,50,0),String.fromCharCode(109,111,109,101,110,116,95,105,95,51,48,0)]]);
          let abidetectC = String.fromCharCode(115,109,112,116,101,98,97,114,115,95,49,95,50,0);
          let internetc = String.fromCharCode(105,110,116,101,114,110,97,108,95,57,95,51,49,0);
          let settingsK = 5.0;
         baiduadsP += `${parseInt(`${settingsK}`)}`;
         langF = new Map([[`${emojiheartO.size}`, internetc.length]]);
         emojiheartO = new Map([[abidetectC, internetc.length]]);
         abidetectC += `${emojiheartO.size | internetc.length}`;
         settingsK += parseFloat(`${emojiheartO.size * langF.size}`);
         break;
      }
         javaH *= baiduadsP.length - 2;
      if (baiduadsP.includes(`${reactm.length}`)) {
         baiduadsP += "2";
      }
         baiduadsP += `${baiduadsP.length & reactm.length}`;
      while (1 < (baiduadsP.length * parseInt(`${javaH}`)) && 2 < (1 - baiduadsP.length)) {
          let halffieldimageN = 1;
          let reactnativeratingsV = true;
          let mailq = String.fromCharCode(106,95,49,51,95,117,110,102,114,101,101,122,101,0);
          let profileinactive6 = String.fromCharCode(99,97,110,100,105,100,97,116,101,95,52,95,57,51,0);
         baiduadsP = `${mailq.length ^ 3}`;
         halffieldimageN /= Math.max(2, 1);
         reactnativeratingsV = !reactnativeratingsV;
         mailq = `${3 * profileinactive6.length}`;
         profileinactive6 += `${profileinactive6.length}`;
         break;
      }
      if ((javaH - 1.20) >= 1.69) {
          let libtob_ = String.fromCharCode(108,111,99,107,101,100,95,97,95,53,53,0);
          let slider7 = 4.0;
          let vertical8: Array<any> = [109, 882];
         javaH *= (String.fromCharCode(56,0) == baiduadsP ? parseInt(`${javaH}`) : baiduadsP.length);
         libtob_ += `${(libtob_ == String.fromCharCode(66,0) ? libtob_.length : vertical8.length)}`;
         slider7 -= parseFloat(`${3}`);
         vertical8 = [parseInt(`${slider7}`) & 2];
      }
         baiduadsP = `${parseInt(`${javaH}`)}`;
         reactm = `${parseInt(`${javaH}`)}`;
      iconsettingQ.push((String.fromCharCode(57,0) == baiduadsP ? baiduadsP.length : dropdown2));
       let calendarR = String.fromCharCode(106,95,50,48,95,100,101,99,111,100,97,98,108,101,0);
       let heji_ = 3;
       let orangeclockm = 3;
      let n_centera = heji_ >= 8071483;
      do {
          let videovare = String.fromCharCode(102,95,56,48,95,102,105,110,103,101,114,0);
          let m_imageX = String.fromCharCode(104,95,57,95,109,97,114,115,104,97,108,0);
         heji_ |= 2 ^ orangeclockm;
         videovare = `${(m_imageX == String.fromCharCode(76,0) ? videovare.length : m_imageX.length)}`;
         if (n_centera) {
            break;
         }
      } while (((4 * heji_) == 1 || 3 == (4 * calendarR.length)) && n_centera);
          let whitevideolivex = String.fromCharCode(107,105,110,103,95,108,95,52,49,0);
          let libavformatR = 5;
          let ewardedj = 2;
         heji_ ^= ewardedj | libavformatR;
         whitevideolivex = "2";
         libavformatR -= whitevideolivex.length;
      while (1 > (heji_ + orangeclockm) && 1 > (heji_ + orangeclockm)) {
         heji_ <<= Math.min(1, Math.abs(2 >> (Math.min(3, Math.abs(heji_)))));
         break;
      }
      let whitevideoliveA = String.fromCharCode(109,116,103,0) == calendarR;
      do {
         calendarR = `${2 << (Math.min(5, Math.abs(heji_)))}`;
         if (whitevideoliveA) {
            break;
         }
      } while (whitevideoliveA && (calendarR.length <= 3));
       let textinputp = 1.0;
       let currentS = 4.0;
      for (let p = 0; p < 1; p++) {
          let plashM = 2.0;
          let statisticsinactiveY = true;
         calendarR += `${3 + heji_}`;
         plashM -= (parseFloat(`${(statisticsinactiveY ? 2 : 5) | parseInt(`${plashM}`)}`));
         statisticsinactiveY = 36.2 >= plashM;
      }
      for (let y = 0; y < 3; y++) {
         textinputp += calendarR.length * 3;
      }
         heji_ -= calendarR.length << (Math.min(1, Math.abs(heji_)));
      while (calendarR.startsWith(`${currentS}`)) {
         calendarR = `${parseInt(`${currentS}`)}`;
         break;
      }
      temperatureJ = new Map([[`${sharedc.length}`, 2]]);
   for (let h = 0; h < 2; h++) {
       let tempf = String.fromCharCode(102,105,114,101,98,97,115,101,95,111,95,54,51,0);
       let model3 = String.fromCharCode(120,95,51,53,95,105,109,103,117,116,105,108,115,0);
       let friendsQ = false;
       let guidew = String.fromCharCode(98,108,117,101,95,105,95,50,51,0);
       let fastX = true;
         friendsQ = guidew.length == 41;
         guidew = `${tempf.length % (Math.max(2, 9))}`;
      if (!fastX) {
         friendsQ = model3.endsWith(`${fastX}`);
      }
      for (let r = 0; r < 1; r++) {
         model3 = `${((friendsQ ? 3 : 2))}`;
      }
       let arrowrightwithtailX = String.fromCharCode(98,95,56,95,118,116,97,103,0);
       let nterstitialH = String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,95,49,95,48,0);
      for (let g = 0; g < 1; g++) {
          let iconnointernetk = String.fromCharCode(101,108,98,103,95,115,95,56,56,0);
          let detailA = 4.0;
          let temperatureJ0 = String.fromCharCode(106,117,108,105,97,110,95,98,95,57,52,0);
          let transfer7: Map<any, any> = new Map([[String.fromCharCode(101,110,116,101,114,105,110,103,95,55,95,49,56,0),729], [String.fromCharCode(105,110,99,114,98,108,111,98,95,101,95,57,56,0),454]]);
          let corneru = String.fromCharCode(108,95,55,51,95,109,105,110,117,115,0);
         guidew = `${nterstitialH.length}`;
         iconnointernetk += `${transfer7.size}`;
         detailA *= temperatureJ0.length;
         temperatureJ0 += "2";
         transfer7.set(`${iconnointernetk}`, transfer7.size % (Math.max(1, iconnointernetk.length)));
         corneru += "3";
      }
          let volumeG = 5.0;
          let successD = String.fromCharCode(105,95,56,57,95,115,117,98,115,99,114,105,98,97,98,108,101,115,0);
          let notificationfilledZ = String.fromCharCode(115,117,99,99,101,115,115,111,114,95,48,95,50,51,0);
         arrowrightwithtailX += `${guidew.length - 3}`;
         volumeG -= 1 >> (Math.min(5, successD.length));
         successD += `${notificationfilledZ.length}`;
         notificationfilledZ += `${(successD == String.fromCharCode(49,0) ? notificationfilledZ.length : successD.length)}`;
      let iconpipshrink7 = tempf == String.fromCharCode(103,95,53,57,103,0);
      do {
         tempf += `${1 - arrowrightwithtailX.length}`;
         if (iconpipshrink7) {
            break;
         }
      } while (iconpipshrink7 && (5 > nterstitialH.length));
       let charti = 0.0;
       let usernamej = 4.0;
          let frame_3zD: Map<any, any> = new Map([[String.fromCharCode(113,95,52,95,115,116,97,116,105,111,110,97,114,105,116,121,0),192], [String.fromCharCode(119,95,53,52,95,119,114,105,116,101,114,0),758], [String.fromCharCode(108,105,99,101,110,115,101,95,57,95,57,51,0),973]]);
          let latno = true;
         model3 = `${arrowrightwithtailX.length}`;
         frame_3zD = new Map([[`${frame_3zD.size}`, frame_3zD.size * 1]]);
         latno = (100 < (frame_3zD.size % (Math.max(10, (!latno ? frame_3zD.size : 8)))));
       let bannerm = 1.0;
      let othermatchdetailbgm = model3 == String.fromCharCode(115,115,53,112,100,0);
      do {
         model3 = `${(String.fromCharCode(121,0) == tempf ? parseInt(`${bannerm}`) : tempf.length)}`;
         if (othermatchdetailbgm) {
            break;
         }
      } while (othermatchdetailbgm && (1 < (model3.length - 1)));
         nterstitialH = `${parseInt(`${bannerm}`) / 3}`;
      let penaltymatchicona = fastX ? !fastX : fastX;
      do {
         fastX = !tempf.includes(`${usernamej}`);
         if (penaltymatchicona) {
            break;
         }
      } while ((fastX && guidew.length < 1) && penaltymatchicona);
      giftbuttonp = `${dropdown2}`;
   }
      sharedc.push(3 << (Math.min(4, giftbuttonp.length)));
   let dangert = baiduadsr >= 9868436.0;
   do {
       let layouto = 5.0;
       let telemetryQ = String.fromCharCode(115,95,54,50,95,97,108,112,105,110,101,0);
       let liveshareX = String.fromCharCode(108,95,52,52,95,105,110,116,101,114,120,0);
       let danger2: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,101,115,115,105,110,103,95,109,95,53,53,0),743], [String.fromCharCode(114,101,115,95,105,95,49,53,0),39]]);
       let scorew: Array<any> = [67, 877, 872];
      let textH = telemetryQ.length >= 6836164;
      do {
          let textinputr = String.fromCharCode(114,95,49,53,95,104,101,97,100,112,104,111,110,101,0);
          let fieldn = String.fromCharCode(120,105,110,103,95,57,95,54,56,0);
          let huawei8: Array<any> = [String.fromCharCode(100,95,54,55,95,114,101,99,101,105,118,101,0), String.fromCharCode(105,95,52,50,95,116,97,105,108,115,0)];
          let topic9: Array<any> = [720, 880, 906];
          let canvash = String.fromCharCode(109,112,111,115,95,53,95,50,0);
         telemetryQ += `${telemetryQ.length & 3}`;
         textinputr += `${huawei8.length / 1}`;
         fieldn = `${canvash.length - 1}`;
         huawei8.push(2);
         topic9 = [canvash.length & 2];
         if (textH) {
            break;
         }
      } while ((5 >= telemetryQ.length) && textH);
       let minivodC = String.fromCharCode(106,95,51,48,95,100,101,99,105,109,97,116,111,114,0);
       let viewsZ = String.fromCharCode(102,119,97,108,115,104,95,119,95,57,0);
         minivodC = `${danger2.size % 1}`;
          let flagJ = String.fromCharCode(115,95,56,50,95,115,99,114,101,101,110,112,114,101,115,115,111,0);
         scorew = [telemetryQ.length * scorew.length];
         flagJ = `${flagJ.length}`;
         viewsZ = `${viewsZ.length << (Math.min(Math.abs(1), 2))}`;
      for (let g = 0; g < 3; g++) {
          let backiconmaskz = String.fromCharCode(121,95,50,56,95,99,111,110,102,105,103,0);
          let mbnativeadvancedJ = String.fromCharCode(113,117,97,114,116,101,114,95,116,95,54,57,0);
         liveshareX = `${2 ^ scorew.length}`;
         backiconmaskz += `${mbnativeadvancedJ.length * 3}`;
         mbnativeadvancedJ += `${backiconmaskz.length}`;
      }
      if (!minivodC.endsWith(`${layouto}`)) {
         minivodC = `${scorew.length}`;
      }
          let register_nk9 = String.fromCharCode(114,101,109,105,120,95,111,95,55,50,0);
         danger2.set(`${layouto}`, parseInt(`${layouto}`));
         register_nk9 += `${1 * register_nk9.length}`;
         minivodC = `${minivodC.length}`;
         viewsZ += `${scorew.length / (Math.max(1, minivodC.length))}`;
      let arrow3 = String.fromCharCode(114,50,49,56,101,49,116,50,0) == minivodC;
      do {
         minivodC += `${danger2.size % (Math.max(minivodC.length, 8))}`;
         if (arrow3) {
            break;
         }
      } while (arrow3 && (viewsZ.includes(`${minivodC.length}`)));
      if (4 == (parseInt(`${layouto}`) - liveshareX.length)) {
         layouto -= parseFloat(`${2}`);
      }
       let holderf = String.fromCharCode(107,95,50,95,108,97,121,115,0);
      while (2 >= (minivodC.length * 2) || 5 >= (danger2.size * 2)) {
          let arrowrightwithtailx = String.fromCharCode(116,114,101,101,99,111,100,101,114,95,108,95,53,54,0);
          let templateprocessorj = 4.0;
          let r_titleB = false;
         minivodC += `${parseInt(`${layouto}`)}`;
         arrowrightwithtailx += `${2 - parseInt(`${templateprocessorj}`)}`;
         templateprocessorj -= (parseFloat(`${parseInt(`${templateprocessorj}`) & (r_titleB ? 2 : 4)}`));
         r_titleB = templateprocessorj == 72.52;
         break;
      }
          let configureV = 5.0;
         holderf = `${holderf.length / (Math.max(2, 10))}`;
         configureV += parseFloat(`${1 ^ parseInt(`${configureV}`)}`);
      baiduadsr -= sharedc.length & 1;
      if (dangert) {
         break;
      }
   } while (dangert && ((baiduadsr + 5.44) < 4.78 && 2 < (defaultlogof.length + parseInt(`${baiduadsr}`))));
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
       let combineJ = 3;
    let schedulerF = String.fromCharCode(113,95,50,56,95,115,99,97,110,120,0);
    let ccdfbdabcabbbedby: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,112,114,105,109,97,114,105,108,121,0),String.fromCharCode(97,95,57,52,95,117,110,114,101,109,111,118,97,98,108,101,0)], [String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,98,95,56,54,0),String.fromCharCode(100,95,55,56,95,115,112,97,110,115,0)]]);
    let downarrowu = String.fromCharCode(98,95,56,55,95,108,97,110,103,117,97,103,101,0);
    let uimanagerr = 3;
    let actionsy: Map<any, any> = new Map([[String.fromCharCode(116,95,49,56,95,109,99,100,99,0),284], [String.fromCharCode(121,95,52,48,95,100,117,112,108,101,120,0),973]]);
    let targetx = String.fromCharCode(114,101,99,97,108,99,95,117,95,57,51,0);
    let typingloading0 = 5;
    let middlebrightnessh: Map<any, any> = new Map([[String.fromCharCode(108,95,54,51,95,115,110,97,112,112,101,100,0),419], [String.fromCharCode(118,97,108,117,101,95,113,95,52,56,0),677]]);
    let homeactiveq = 2;
    let moduleg = 1.0;
    let iconwechatF: Map<any, any> = new Map([[String.fromCharCode(97,103,97,105,110,95,99,95,56,57,0),496], [String.fromCharCode(101,95,54,55,95,115,105,103,110,114,97,110,100,0),206], [String.fromCharCode(108,101,116,116,101,114,95,50,95,54,50,0),820]]);
   while ((targetx.length / 5) >= 4) {
       let baiduA = true;
       let sportk: Array<any> = [802, 230];
       let iconclosewhitebg_: Map<any, any> = new Map([[String.fromCharCode(104,95,52,53,95,117,117,105,100,0),935], [String.fromCharCode(111,103,103,101,114,95,121,95,53,48,0),481]]);
      for (let t = 0; t < 2; t++) {
          let canvas0: Map<any, any> = new Map([[String.fromCharCode(114,111,119,115,95,119,95,54,52,0),21], [String.fromCharCode(116,95,50,51,95,115,104,105,102,116,0),948]]);
          let libfabricjni0: Array<any> = [138, 492];
          let colorsL = 2;
         sportk.push(3);
         canvas0.set(`${libfabricjni0.length}`, libfabricjni0.length - 1);
         colorsL ^= colorsL % 2;
      }
         sportk.push(3);
      for (let g = 0; g < 1; g++) {
         iconclosewhitebg_ = new Map([[`${iconclosewhitebg_.size}`, sportk.length]]);
      }
      if ((4 / (Math.max(5, iconclosewhitebg_.size))) > 3 && (4 / (Math.max(5, sportk.length))) > 3) {
         iconclosewhitebg_.set(`${baiduA}`, ((baiduA ? 1 : 4) << (Math.min(Math.abs(1), 5))));
      }
      for (let p = 0; p < 3; p++) {
         baiduA = iconclosewhitebg_.size >= 48 || baiduA;
      }
       let iconR = 4.0;
       let fill2 = 0.0;
      let assistK = 5985143 <= iconclosewhitebg_.size;
      do {
         iconclosewhitebg_.set(`${fill2}`, parseInt(`${iconR}`));
         if (assistK) {
            break;
         }
      } while (assistK && (!Array.from(iconclosewhitebg_.keys()).includes(`${iconR}`)));
          let profiler = true;
         iconR -= parseFloat(`${parseInt(`${fill2}`)}`);
         profiler = (!profiler ? !profiler : profiler);
          let confirmationE = String.fromCharCode(112,114,111,112,101,114,121,95,112,95,54,55,0);
          let whitev: Map<any, any> = new Map([[String.fromCharCode(118,105,115,105,98,105,116,121,95,98,95,49,49,0),false ], [String.fromCharCode(99,108,97,105,109,115,95,102,95,49,57,0),false ], [String.fromCharCode(119,95,56,55,95,100,99,116,115,117,98,0),true ]]);
         iconclosewhitebg_ = new Map([[`${sportk.length}`, (sportk.length - (baiduA ? 1 : 1))]]);
         confirmationE = `${confirmationE.length * whitev.size}`;
         whitev = new Map([[`${whitev.size}`, (confirmationE == String.fromCharCode(106,0) ? whitev.size : confirmationE.length)]]);
      combineJ *= typingloading0;
      break;
   }
      actionsy = new Map([[schedulerF, targetx.length + schedulerF.length]]);
      uimanagerr *= targetx.length;
   while (ccdfbdabcabbbedby.get(`${typingloading0}`) == null) {
      typingloading0 &= 2;
      break;
   }
      actionsy = new Map([[`${actionsy.size}`, actionsy.size]]);

    if (episodeRef.current) {

   let utilsB = String.fromCharCode(107,109,106,115,0) == targetx;
   do {
      targetx += `${2 | schedulerF.length}`;
      if (utilsB) {
         break;
      }
   } while ((ccdfbdabcabbbedby.size <= 5) && utilsB);
   if (5 < (combineJ - typingloading0)) {
       let footballfiledlayoutD = 4;
       let gifgoal0 = String.fromCharCode(105,118,102,101,110,99,95,52,95,54,55,0);
       let audiencex = false;
       let carouseln: Array<any> = [String.fromCharCode(99,95,53,51,95,103,98,114,112,0), String.fromCharCode(101,95,55,48,95,112,114,102,0), String.fromCharCode(114,101,115,105,122,101,95,97,95,55,0)];
       let mbbanner5 = 2.0;
      while (gifgoal0.length == 3) {
         gifgoal0 += `${carouseln.length * 1}`;
         break;
      }
      let langkeyb = mbbanner5 >= 9198677.0;
      do {
         mbbanner5 *= ((audiencex ? 4 : 1));
         if (langkeyb) {
            break;
         }
      } while (((footballfiledlayoutD / (Math.max(parseInt(`${mbbanner5}`), 1))) >= 3 && 3 >= (footballfiledlayoutD / (Math.max(parseInt(`${mbbanner5}`), 1)))) && langkeyb);
      if ((carouseln.length | 3) < 2 || (3 | gifgoal0.length) < 1) {
         gifgoal0 = `${(carouseln.length ^ (audiencex ? 3 : 3))}`;
      }
          let stations = true;
         footballfiledlayoutD ^= parseInt(`${mbbanner5}`) * 3;
         stations = (!stations ? !stations : stations);
      for (let x = 0; x < 2; x++) {
         gifgoal0 += "1";
      }
         carouseln = [footballfiledlayoutD];
      let applef = audiencex ? !audiencex : audiencex;
      do {
          let mbnativeu = String.fromCharCode(122,95,57,51,95,97,109,112,108,105,102,121,0);
          let airbnbstarselectedo: Map<any, any> = new Map([[String.fromCharCode(105,95,56,52,95,102,108,97,99,101,110,99,0),true ], [String.fromCharCode(104,102,108,105,112,95,56,95,53,56,0),false ], [String.fromCharCode(98,95,54,52,95,111,117,116,112,117,116,115,0),false ]]);
          let elementsE: Map<any, any> = new Map([[String.fromCharCode(117,110,108,105,110,107,95,101,95,55,51,0),555], [String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,104,95,55,57,0),90]]);
          let liveendmodallogon = 0;
          let disty = 4.0;
         audiencex = 63 > elementsE.size;
         mbnativeu = "1";
         airbnbstarselectedo = new Map([[`${airbnbstarselectedo.size}`, airbnbstarselectedo.size]]);
         elementsE = new Map([[mbnativeu, 3]]);
         liveendmodallogon %= Math.max(1 - parseInt(`${disty}`), 4);
         disty -= (parseFloat(`${mbnativeu == String.fromCharCode(78,0) ? mbnativeu.length : parseInt(`${disty}`)}`));
         if (applef) {
            break;
         }
      } while (applef && (3 <= (2 + footballfiledlayoutD)));
      while (gifgoal0.includes(`${audiencex}`)) {
          let clock4: Array<any> = [String.fromCharCode(102,95,49,51,95,109,117,116,101,0), String.fromCharCode(98,108,97,107,101,115,95,108,95,48,0)];
          let iconcurrentmatchn = String.fromCharCode(109,95,51,52,95,98,105,110,97,114,121,0);
          let greyK = String.fromCharCode(102,114,101,97,100,95,48,95,51,56,0);
          let shootnogoal4: Array<any> = [873, 942];
         audiencex = clock4.length > shootnogoal4.length;
         clock4.push(3 % (Math.max(10, greyK.length)));
         iconcurrentmatchn = `${greyK.length}`;
         shootnogoal4.push((String.fromCharCode(90,0) == greyK ? greyK.length : iconcurrentmatchn.length));
         break;
      }
          let orangeuparrows = String.fromCharCode(115,95,50,54,95,115,117,98,115,116,105,116,117,116,101,100,0);
         mbbanner5 *= gifgoal0.length;
         orangeuparrows += `${orangeuparrows.length % (Math.max(2, 3))}`;
       let modalt = 3;
         modalt -= footballfiledlayoutD;
      let connectionq = carouseln.length <= 8263054;
      do {
          let scrollviewN = 0;
         carouseln = [carouseln.length + 1];
         scrollviewN -= 1 ^ scrollviewN;
         if (connectionq) {
            break;
         }
      } while (connectionq && (audiencex));
         carouseln.push(modalt ^ 3);
      for (let z = 0; z < 2; z++) {
          let hoverw = 1.0;
          let appleU = true;
          let mbnativeM = String.fromCharCode(102,95,51,53,95,115,105,112,104,97,115,104,0);
         modalt /= Math.max(4, 3 % (Math.max(10, modalt)));
         hoverw *= parseFloat(`${parseInt(`${hoverw}`)}`);
         appleU = 51.70 > hoverw || !appleU;
         mbnativeM = `${(parseInt(`${hoverw}`) | (appleU ? 5 : 1))}`;
      }
         footballfiledlayoutD &= modalt ^ carouseln.length;
      combineJ /= Math.max(parseInt(`${mbbanner5}`), 3);
   }
   let dplusR = 8355315 <= combineJ;
   do {
       let settingsr: Array<any> = [String.fromCharCode(99,111,109,98,105,95,50,95,50,49,0), String.fromCharCode(107,95,55,53,95,98,121,112,97,115,115,0), String.fromCharCode(101,95,51,57,95,101,97,105,100,99,116,0)];
         settingsr = [settingsr.length | settingsr.length];
      if (1 < (settingsr.length >> (Math.min(Math.abs(2), 5))) || (settingsr.length >> (Math.min(Math.abs(2), 3))) < 5) {
          let googler = String.fromCharCode(115,121,109,98,111,108,95,110,95,50,53,0);
          let bridgeR = String.fromCharCode(116,95,56,95,116,114,105,97,108,115,0);
          let nbatrophya = 3.0;
          let libruntimeexecutorp = String.fromCharCode(106,95,57,95,117,117,105,100,0);
         settingsr.push(settingsr.length * 1);
         googler = `${googler.length}`;
         bridgeR = `${libruntimeexecutorp.length}`;
         nbatrophya -= parseFloat(`${parseInt(`${nbatrophya}`)}`);
         libruntimeexecutorp = `${(bridgeR == String.fromCharCode(48,0) ? bridgeR.length : parseInt(`${nbatrophya}`))}`;
      }
         settingsr = [settingsr.length / 3];
      combineJ *= 2 & middlebrightnessh.size;
      if (dplusR) {
         break;
      }
   } while (dplusR && (actionsy.size > 4));
      typingloading0 -= 1 | typingloading0;
      uimanagerr %= Math.max(4, combineJ);
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let trophyL = 0.0;
    let whitef = 4.0;
    let stationso = true;
    let configureq = 1.0;
    let release_jY: Map<any, any> = new Map([[String.fromCharCode(110,95,54,95,108,111,99,107,0),true ], [String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,105,95,54,55,0),false ]]);
    let matchactiveW: Map<any, any> = new Map([[String.fromCharCode(101,95,56,52,95,115,101,114,105,97,108,105,122,97,116,105,111,110,0),166], [String.fromCharCode(119,97,116,99,104,105,110,103,95,117,95,51,48,0),631], [String.fromCharCode(100,95,54,48,95,111,118,101,114,114,105,100,101,110,0),142]]);
    let positionfieldt = 0.0;
    let videojsP = 2.0;
    let foundJ = 2.0;
    let usernamev: Map<any, any> = new Map([[String.fromCharCode(106,95,53,53,95,115,111,97,98,111,114,116,0),360], [String.fromCharCode(104,99,108,114,95,49,95,55,50,0),900], [String.fromCharCode(109,117,108,116,105,115,105,103,95,111,95,51,53,0),230]]);
    let redcirclebgK = false;
    let umengr = 4;
    let minivodx = String.fromCharCode(119,95,52,50,95,99,104,101,99,107,0);
    let internetB = true;
    let routerV = 0;
    let zhuboa: Map<any, any> = new Map([[String.fromCharCode(104,97,108,108,95,116,95,51,53,0),780], [String.fromCharCode(109,106,112,101,103,98,95,55,95,50,55,0),827], [String.fromCharCode(113,95,51,51,95,114,101,99,111,103,110,105,122,101,100,0),319]]);
    let sportssR = String.fromCharCode(119,95,50,49,95,100,101,109,111,100,117,108,97,116,101,0);
   for (let r = 0; r < 3; r++) {
      redcirclebgK = usernamev.size < 79;
   }
      umengr %= Math.max(3, 1 / (Math.max(parseInt(`${trophyL}`), 1)));
   for (let l = 0; l < 3; l++) {
       let temperatured = 1;
         temperatured >>= Math.min(3, Math.abs(2));
      while (temperatured < temperatured) {
         temperatured &= temperatured;
         break;
      }
         temperatured *= temperatured;
      redcirclebgK = 95.32 >= configureq;
   }
       let favoriteI = true;
       let iconwechatO = String.fromCharCode(120,95,50,52,95,117,110,115,97,102,101,0);
          let modev = false;
          let imagenomoredataL = 5.0;
         favoriteI = iconwechatO.length > 73;
         modev = !modev;
         imagenomoredataL -= (parseFloat(`${(modev ? 1 : 4) - parseInt(`${imagenomoredataL}`)}`));
         favoriteI = !favoriteI;
         favoriteI = iconwechatO.length <= 52;
       let basketballawayteam4: Array<any> = [42, 893, 868];
      let defaultteamW = 7760047 >= iconwechatO.length;
      do {
          let libreactnativeblobA = 0.0;
         iconwechatO += `${basketballawayteam4.length}`;
         libreactnativeblobA += parseInt(`${libreactnativeblobA}`);
         if (defaultteamW) {
            break;
         }
      } while (defaultteamW && (!favoriteI));
          let statisticsactiveb: Array<any> = [367, 310, 363];
          let placementx = String.fromCharCode(112,114,101,115,101,110,99,101,95,110,95,55,53,0);
         iconwechatO += `${placementx.length}`;
         statisticsactiveb.push(3 + statisticsactiveb.length);
         placementx = `${statisticsactiveb.length ^ statisticsactiveb.length}`;
      configureq += parseFloat(`${1 & parseInt(`${trophyL}`)}`);
   if (parseInt(`${videojsP}`) < matchactiveW.size) {
       let rulesV = String.fromCharCode(121,95,51,54,95,100,101,118,105,99,101,0);
       let matchZ = String.fromCharCode(107,95,52,53,95,99,111,109,112,111,117,110,100,0);
       let tempnodatagif6 = String.fromCharCode(107,95,57,49,95,97,115,115,105,103,110,101,100,0);
       let profileframe1: Array<any> = [759, 347];
      let privilege5 = matchZ.length <= 8951091;
      do {
         matchZ = `${3 >> (Math.min(1, matchZ.length))}`;
         if (privilege5) {
            break;
         }
      } while (privilege5 && (4 <= (matchZ.length ^ 3)));
          let vipsportS = 0.0;
          let showX = String.fromCharCode(112,95,54,53,95,108,105,110,107,101,100,0);
         tempnodatagif6 += `${3 >> (Math.min(5, profileframe1.length))}`;
         vipsportS *= 2;
         showX = `${showX.length / (Math.max(2, parseInt(`${vipsportS}`)))}`;
      if (tempnodatagif6 != String.fromCharCode(117,0)) {
         matchZ += `${profileframe1.length}`;
      }
         matchZ = "1";
         rulesV += `${(String.fromCharCode(73,0) == tempnodatagif6 ? tempnodatagif6.length : rulesV.length)}`;
         matchZ += `${3 * profileframe1.length}`;
       let profilex: Map<any, any> = new Map([[String.fromCharCode(122,95,55,50,95,117,110,99,108,101,115,0),String.fromCharCode(98,109,111,100,101,95,56,95,50,49,0)], [String.fromCharCode(98,95,57,57,95,99,111,108,111,114,115,0),String.fromCharCode(99,111,109,109,111,110,95,57,95,52,55,0)], [String.fromCharCode(115,95,51,95,116,115,99,99,100,97,116,97,0),String.fromCharCode(104,109,109,116,95,110,95,53,50,0)]]);
       let backiconW: Map<any, any> = new Map([[String.fromCharCode(103,95,56,48,95,109,105,120,105,110,0),410], [String.fromCharCode(98,105,116,119,114,105,116,101,114,95,54,95,56,49,0),28], [String.fromCharCode(101,95,52,48,95,116,114,97,110,115,109,105,116,0),643]]);
      let templateprocessorR = 8478093 >= matchZ.length;
      do {
          let renderr = String.fromCharCode(113,95,54,57,95,100,111,119,110,108,111,97,100,101,100,0);
         matchZ = `${3 | tempnodatagif6.length}`;
         renderr += `${renderr.length << (Math.min(renderr.length, 5))}`;
         if (templateprocessorR) {
            break;
         }
      } while (templateprocessorR && ((profileframe1.length << (Math.min(matchZ.length, 5))) > 4));
         profilex.set(rulesV, matchZ.length | rulesV.length);
      for (let c = 0; c < 1; c++) {
         backiconW = new Map([[rulesV, 2 + rulesV.length]]);
      }
       let privilegeo = String.fromCharCode(118,95,51,52,95,99,111,110,116,97,105,110,101,114,0);
       let backiconF = String.fromCharCode(105,95,53,57,0);
          let imagenetworkerrO: Array<any> = [954, 202, 584];
          let backe = 2.0;
          let u_lock4: Array<any> = [String.fromCharCode(118,114,101,112,95,115,95,57,49,0), String.fromCharCode(108,111,110,103,110,111,105,115,101,95,115,95,51,51,0), String.fromCharCode(104,105,103,104,119,97,116,101,114,95,57,95,52,48,0)];
         rulesV = `${imagenetworkerrO.length}`;
         imagenetworkerrO = [u_lock4.length];
         backe += u_lock4.length;
      matchactiveW = new Map([[`${profileframe1.length}`, (String.fromCharCode(90,0) == matchZ ? profileframe1.length : matchZ.length)]]);
   }
   for (let s = 0; s < 1; s++) {
      usernamev.set(`${trophyL}`, parseInt(`${trophyL}`) + 1);
   }
      release_jY = new Map([[`${usernamev.size}`, parseInt(`${videojsP}`) * usernamev.size]]);
   for (let g = 0; g < 2; g++) {
      matchactiveW.set(`${usernamev.size}`, usernamev.size / (Math.max(5, matchactiveW.size)));
   }
   let notificationgrayo = 8234617.0 >= positionfieldt;
   do {
       let androidY = 3.0;
         androidY /= Math.max(2, 3 % (Math.max(7, parseInt(`${androidY}`))));
          let iconadslinkS = 3.0;
          let sportM = 4;
         androidY -= sportM;
         iconadslinkS += parseInt(`${iconadslinkS}`);
         sportM ^= 1 & parseInt(`${iconadslinkS}`);
          let activityJ = 1;
          let unimplementedviewq = 2;
          let selectedX: Array<any> = [116, 85, 410];
         androidY /= Math.max(activityJ >> (Math.min(Math.abs(unimplementedviewq), 3)), 3);
         activityJ &= selectedX.length;
         unimplementedviewq <<= Math.min(selectedX.length, 4);
      positionfieldt *= 1;
      if (notificationgrayo) {
         break;
      }
   } while (notificationgrayo && (4 > (usernamev.size * parseInt(`${positionfieldt}`))));
      release_jY.set(minivodx, 1);
   while (parseInt(`${configureq}`) > release_jY.size) {
      configureq += (parseFloat(`${minivodx == String.fromCharCode(55,0) ? (stationso ? 1 : 4) : minivodx.length}`));
      break;
   }
       let volumez = 0.0;
      for (let o = 0; o < 3; o++) {
         volumez += parseInt(`${volumez}`);
      }
          let materialk = 2.0;
          let executorx: Array<any> = [829, 403];
          let analyticA = 1;
         volumez /= Math.max(3 | executorx.length, 1);
         materialk += parseInt(`${materialk}`);
         executorx.push(analyticA);
         analyticA |= analyticA;
       let neonq: Array<any> = [797, 855];
      foundJ /= Math.max(3, usernamev.size >> (Math.min(Math.abs(2), 5)));
      stationso = 75 <= usernamev.size && foundJ <= 32.27;
      videojsP += parseFloat(`${parseInt(`${trophyL}`)}`);
   for (let n = 0; n < 3; n++) {
      umengr >>= Math.min(2, Math.abs(parseInt(`${foundJ}`) / 3));
   }
      trophyL /= Math.max(2, ((internetB ? 3 : 4) ^ parseInt(`${positionfieldt}`)));
   for (let y = 0; y < 2; y++) {
      videojsP += parseFloat(`${umengr / (Math.max(parseInt(`${trophyL}`), 4))}`);
   }
      positionfieldt /= Math.max(2, 2);
   while (stationso) {
      stationso = !internetB;
      break;
   }
      positionfieldt += parseInt(`${positionfieldt}`) * parseInt(`${whitef}`);
   for (let c = 0; c < 1; c++) {
       let hookX: Array<any> = [644, 144];
       let reactnavigationM = true;
       let iconplayA: Array<any> = [278, 50];
       let iconnotificationnewl = true;
       let footballtrophyl = 2;
         iconplayA.push(footballtrophyl);
         footballtrophyl <<= Math.min(5, Math.abs(3 % (Math.max(8, hookX.length))));
      while (!reactnavigationM) {
         iconnotificationnewl = hookX.includes(footballtrophyl);
         break;
      }
         footballtrophyl |= footballtrophyl;
          let scrollviewE = 0.0;
          let matchactiveWG = 1;
         iconplayA.push(3 / (Math.max(parseInt(`${scrollviewE}`), 5)));
         scrollviewE /= Math.max(3, matchactiveWG - 3);
         matchactiveWG += matchactiveWG >> (Math.min(Math.abs(1), 5));
          let iconeyeU = 2;
          let libcxxcomponentsf = false;
          let basketballdetailsbgO = String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,109,95,57,0);
         reactnavigationM = hookX.length >= 32 || !libcxxcomponentsf;
         iconeyeU &= basketballdetailsbgO.length;
         libcxxcomponentsf = basketballdetailsbgO.length > iconeyeU;
       let screenV = 3.0;
       let sinak = 0.0;
      while (iconnotificationnewl) {
         iconnotificationnewl = screenV < 43.40 && footballtrophyl < 68;
         break;
      }
         iconplayA = [2 * iconplayA.length];
          let libapminsightb4: Map<any, any> = new Map([[String.fromCharCode(117,95,57,54,95,115,116,114,105,99,109,112,0),276], [String.fromCharCode(107,95,51,54,95,102,111,114,109,115,104,101,101,116,0),360], [String.fromCharCode(121,95,50,53,95,117,112,103,114,97,100,101,100,0),498]]);
         reactnavigationM = iconplayA.includes(iconnotificationnewl);
         libapminsightb4.set(`${libapminsightb4.size}`, libapminsightb4.size);
         reactnavigationM = !reactnavigationM;
      if (reactnavigationM) {
         reactnavigationM = screenV > 41.8 || 41.8 > sinak;
      }
      while (4 >= footballtrophyl) {
         sinak += ((reactnavigationM ? 5 : 4) * iconplayA.length);
         break;
      }
      for (let x = 0; x < 3; x++) {
         footballtrophyl ^= 2 ^ parseInt(`${screenV}`);
      }
      for (let f = 0; f < 3; f++) {
         iconnotificationnewl = iconplayA.length <= 27;
      }
      release_jY = new Map([[minivodx, minivodx.length / 2]]);
   }
       let giflivestreamingl: Array<any> = [249, 225, 253];
      let rncoreK = giflivestreamingl.length <= 8458512;
      do {
          let submiti = 5;
          let templateprocessorb = String.fromCharCode(114,95,49,51,95,101,120,116,114,101,109,101,0);
          let predictionk = String.fromCharCode(97,108,109,111,115,116,95,56,95,50,54,0);
          let largebrightnessA = String.fromCharCode(115,103,105,114,108,101,95,117,95,57,51,0);
         giflivestreamingl = [1];
         submiti >>= Math.min(2, Math.abs(submiti / (Math.max(predictionk.length, 1))));
         templateprocessorb += `${templateprocessorb.length}`;
         predictionk = "3";
         largebrightnessA += `${largebrightnessA.length}`;
         if (rncoreK) {
            break;
         }
      } while (rncoreK && (giflivestreamingl.length > 1));
      if (1 <= giflivestreamingl.length) {
         giflivestreamingl = [2 - giflivestreamingl.length];
      }
          let eactq = String.fromCharCode(105,95,55,53,95,119,114,105,116,101,0);
         giflivestreamingl = [eactq.length];
      foundJ *= 1 + parseInt(`${foundJ}`);
   while (2 == (matchactiveW.size + 1)) {
      matchactiveW.set(`${stationso}`, umengr);
      break;
   }
      whitef -= ((internetB ? 4 : 3) * 1);
       let homeplayer9: Array<any> = [String.fromCharCode(114,101,115,116,95,112,95,52,48,0), String.fromCharCode(98,97,99,107,95,116,95,48,0)];
         homeplayer9.push(homeplayer9.length >> (Math.min(Math.abs(3), 4)));
      let profileframeq = 5861273 <= homeplayer9.length;
      do {
          let r_positioni = 1.0;
          let anythink2: Array<any> = [305, 578, 978];
         homeplayer9 = [3 | anythink2.length];
         r_positioni *= 2;
         anythink2.push(parseInt(`${r_positioni}`) - 1);
         if (profileframeq) {
            break;
         }
      } while (((homeplayer9.length % 5) > 3 && 5 > (homeplayer9.length % (Math.max(homeplayer9.length, 10)))) && profileframeq);
      for (let a = 0; a < 1; a++) {
         homeplayer9.push(3);
      }
      zhuboa.set(`${positionfieldt}`, release_jY.size / 1);
   let indexx = 7004264 <= usernamev.size;
   do {
       let bannerx = 5.0;
       let qaagj = 0;
       let cornershoots: Array<any> = [857, 646];
       let nodek = 1.0;
       let profileframer = String.fromCharCode(109,101,109,111,106,105,95,118,95,49,54,0);
         bannerx += 2;
      if (profileframer.startsWith(`${nodek}`)) {
          let libavutil5: Map<any, any> = new Map([[String.fromCharCode(98,95,54,57,95,115,97,116,100,0),true ], [String.fromCharCode(120,95,51,50,95,115,112,97,99,101,114,0),false ]]);
          let largebrightness7 = String.fromCharCode(97,116,114,97,99,100,97,116,97,95,52,95,56,0);
          let statisticsE: Array<any> = [83, 921];
         nodek += cornershoots.length;
         libavutil5.set(`${largebrightness7}`, (largebrightness7 == String.fromCharCode(112,0) ? largebrightness7.length : libavutil5.size));
         statisticsE = [libavutil5.size & 2];
      }
       let incidentJ = true;
       let basketballdetailsbga = false;
      let moviesu = 8875325 <= cornershoots.length;
      do {
         cornershoots = [profileframer.length];
         if (moviesu) {
            break;
         }
      } while (moviesu && (2 <= qaagj));
      let macau1 = nodek >= 9663543.0;
      do {
          let googlew = 3.0;
          let minivodb = 3.0;
          let lineq = 5.0;
          let crosst = false;
         nodek *= (parseInt(`${lineq}`) | (basketballdetailsbga ? 3 : 4));
         googlew /= Math.max(((crosst ? 4 : 2) - parseInt(`${googlew}`)), 5);
         minivodb /= Math.max(1, (parseInt(`${minivodb}`) - (crosst ? 5 : 2)));
         lineq -= (parseFloat(`${(crosst ? 3 : 4) | parseInt(`${googlew}`)}`));
         if (macau1) {
            break;
         }
      } while (macau1 && (nodek <= 5.17));
         bannerx -= 1;
         bannerx /= Math.max(profileframer.length, 3);
         cornershoots.push(((incidentJ ? 1 : 5) << (Math.min(cornershoots.length, 1))));
          let reactnativeratingsL = 3.0;
          let release_e3p = true;
         cornershoots = [cornershoots.length];
         reactnativeratingsL *= parseInt(`${reactnativeratingsL}`) / 3;
         release_e3p = !release_e3p;
         incidentJ = basketballdetailsbga;
      for (let i = 0; i < 2; i++) {
         profileframer = `${(cornershoots.length + (incidentJ ? 1 : 2))}`;
      }
      while (1.15 == (nodek * 2.63)) {
          let footballtrophy0 = String.fromCharCode(98,95,57,95,121,117,118,97,121,117,118,108,101,0);
          let changeN = String.fromCharCode(114,116,114,101,101,110,111,100,101,95,99,95,49,57,0);
          let libreactnativeblobV = 1.0;
         cornershoots.push(parseInt(`${libreactnativeblobV}`) % 1);
         footballtrophy0 = `${footballtrophy0.length * changeN.length}`;
         changeN = "1";
         libreactnativeblobV /= Math.max(2, footballtrophy0.length | changeN.length);
         break;
      }
         incidentJ = (!incidentJ ? !basketballdetailsbga : !incidentJ);
          let nextR = String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,49,95,54,49,0);
          let logoe = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,120,95,53,50,0);
          let photoK = 4.0;
         nodek -= (parseInt(`${photoK}`) >> (Math.min(4, Math.abs((basketballdetailsbga ? 4 : 4)))));
         nextR = `${(logoe == String.fromCharCode(114,0) ? logoe.length : nextR.length)}`;
         photoK += parseFloat(`${3}`);
      while (!incidentJ) {
         bannerx -= ((incidentJ ? 4 : 4) + parseInt(`${nodek}`));
         break;
      }
      usernamev.set(`${trophyL}`, parseInt(`${trophyL}`) + umengr);
      if (indexx) {
         break;
      }
   } while ((!internetB) && indexx);
      minivodx += `${release_jY.size / 1}`;

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
       let x_unlock2: Array<any> = [643, 813];
    let libavdeviceA: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,114,101,99,111,110,110,101,99,116,105,111,110,0),667], [String.fromCharCode(114,116,112,109,97,112,95,57,95,56,51,0),394]]);
    let graphs = 3;
    let statsk = String.fromCharCode(117,95,49,49,95,114,101,115,112,111,110,100,0);
    let livesharet: Array<any> = [String.fromCharCode(101,95,56,52,95,104,97,114,109,111,110,105,99,0), String.fromCharCode(121,95,50,52,95,99,121,117,118,0)];
    let release_a3 = String.fromCharCode(99,98,99,114,95,56,95,51,49,0);
    let humidityX = true;
    let iconarrowrightblackn = String.fromCharCode(109,117,108,116,105,112,108,105,101,114,95,116,95,53,55,0);
    let humidityw = String.fromCharCode(97,116,116,105,98,117,116,101,95,107,95,55,48,0);
    let vnewssharen: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,111,112,116,105,111,110,97,108,115,0),false ], [String.fromCharCode(110,95,57,55,95,121,117,118,114,103,98,97,0),false ], [String.fromCharCode(99,104,97,114,99,111,110,118,95,116,95,49,53,0),true ]]);
    let iconsetting3 = String.fromCharCode(112,111,115,116,112,111,110,101,100,95,107,95,53,51,0);
      graphs &= (String.fromCharCode(51,0) == humidityw ? humidityw.length : x_unlock2.length);
       let bottomQ = 3;
      while ((bottomQ + bottomQ) >= 5 && (bottomQ + bottomQ) >= 5) {
         bottomQ <<= Math.min(Math.abs(bottomQ), 4);
         break;
      }
      if ((5 >> (Math.min(5, Math.abs(bottomQ)))) >= 1) {
          let iconpipshrinkT = 1.0;
          let tempnodataB = 0;
          let logoc = String.fromCharCode(102,95,57,54,95,105,103,110,111,114,101,100,0);
          let megaphoneC = String.fromCharCode(115,97,108,115,97,95,53,95,52,50,0);
          let dataG = String.fromCharCode(112,111,114,116,97,108,95,107,95,55,51,0);
         bottomQ /= Math.max(megaphoneC.length, 3);
         iconpipshrinkT /= Math.max(1, (parseFloat(`${dataG == String.fromCharCode(65,0) ? dataG.length : logoc.length}`)));
         tempnodataB += parseInt(`${iconpipshrinkT}`);
         logoc += `${logoc.length}`;
         megaphoneC = `${dataG.length}`;
      }
       let iconviewergifY = String.fromCharCode(113,95,50,53,95,115,117,112,101,114,120,115,97,105,0);
       let arrowdownb = String.fromCharCode(111,118,101,114,104,101,97,100,95,53,95,50,56,0);
      iconarrowrightblackn = `${((humidityX ? 2 : 1))}`;
   for (let y = 0; y < 3; y++) {
      x_unlock2.push(statsk.length);
   }

    const searchTerm = vod?.vod_name ? vod?.vod_name : "";
    const encodedSearchTerm = encodeURIComponent(searchTerm);

   for (let k = 0; k < 1; k++) {
      graphs &= libavdeviceA.size + 3;
   }
   if (humidityw.startsWith(iconarrowrightblackn)) {
      iconarrowrightblackn += `${livesharet.length}`;
   }
   let template_u4 = statsk.length >= 6986067;
   do {
       let streamingD = String.fromCharCode(107,95,52,54,95,99,111,110,116,105,110,117,111,117,115,0);
       let rewardT: Array<any> = [103, 646, 900];
      if (streamingD.endsWith(`${rewardT.length}`)) {
          let giflivestreaming0 = String.fromCharCode(119,105,114,101,102,114,97,109,101,95,108,95,55,50,0);
          let a_lockL: Array<any> = [653, 807, 133];
          let floaterp = String.fromCharCode(104,97,110,110,105,110,103,95,112,95,50,0);
          let targetz = 1.0;
         streamingD = `${(String.fromCharCode(115,0) == giflivestreaming0 ? parseInt(`${targetz}`) : giflivestreaming0.length)}`;
         a_lockL.push(floaterp.length >> (Math.min(Math.abs(1), 4)));
         floaterp = `${floaterp.length % (Math.max(2, 9))}`;
         targetz += parseFloat(`${1}`);
      }
          let indicatorh = 5;
          let rnewinterstitialH = 5;
         rewardT = [3];
         indicatorh %= Math.max(indicatorh / 1, 1);
         rnewinterstitialH %= Math.max(4, rnewinterstitialH >> (Math.min(Math.abs(1), 2)));
         streamingD = `${1 & streamingD.length}`;
          let selectz = String.fromCharCode(104,111,110,101,95,114,95,49,57,0);
          let clockF = String.fromCharCode(117,112,100,97,116,105,110,103,95,101,95,52,57,0);
         rewardT = [3 ^ selectz.length];
         selectz = `${clockF.length}`;
         clockF = `${clockF.length}`;
      while (5 > rewardT.length) {
         rewardT.push(rewardT.length / (Math.max(2, 1)));
         break;
      }
          let executorN = String.fromCharCode(102,95,51,49,95,99,98,112,104,105,0);
          let applicationz = String.fromCharCode(115,108,97,118,101,95,102,95,51,48,0);
          let typingloading4: Map<any, any> = new Map([[String.fromCharCode(114,116,99,99,95,110,95,52,50,0),905], [String.fromCharCode(107,95,55,55,95,100,99,116,115,117,98,0),155], [String.fromCharCode(107,95,53,56,95,116,116,97,103,0),47]]);
         rewardT = [streamingD.length | 1];
         executorN += `${3 << (Math.min(1, applicationz.length))}`;
         applicationz = `${(executorN == String.fromCharCode(74,0) ? typingloading4.size : executorN.length)}`;
         typingloading4 = new Map([[executorN, 1 | executorN.length]]);
      statsk += "1";
      if (template_u4) {
         break;
      }
   } while (template_u4 && (livesharet.length <= statsk.length));
    

      iconarrowrightblackn = `${release_a3.length ^ livesharet.length}`;
       let iconsharefriendso = String.fromCharCode(112,97,114,105,116,121,95,98,95,55,51,0);
       let projectk = 4.0;
         iconsharefriendso += `${parseInt(`${projectk}`) ^ iconsharefriendso.length}`;
      if (4 >= (4 | iconsharefriendso.length)) {
          let store9: Map<any, any> = new Map([[String.fromCharCode(110,95,57,53,95,115,104,111,119,110,0),217], [String.fromCharCode(121,95,52,50,95,100,114,111,112,120,0),424]]);
          let defaultfootballbgU: Map<any, any> = new Map([[String.fromCharCode(100,99,109,112,95,50,95,53,53,0),901], [String.fromCharCode(115,104,105,109,95,97,95,57,55,0),762], [String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,115,95,54,49,0),904]]);
          let stringq = String.fromCharCode(107,95,49,95,115,116,114,105,115,116,114,0);
          let iconlogoutD: Array<any> = [648, 590, 156];
          let libffmpegkitE = String.fromCharCode(108,111,103,103,101,114,115,95,119,95,55,57,0);
         projectk -= parseInt(`${projectk}`) | 1;
         store9 = new Map([[`${store9.size}`, store9.size]]);
         defaultfootballbgU = new Map([[`${store9.size}`, (String.fromCharCode(115,0) == libffmpegkitE ? libffmpegkitE.length : store9.size)]]);
         stringq += `${defaultfootballbgU.size}`;
         iconlogoutD = [1 - iconlogoutD.length];
      }
       let livenodatabgimg1 = String.fromCharCode(99,97,114,100,104,111,108,100,101,114,95,117,95,53,55,0);
         livenodatabgimg1 = `${2 * parseInt(`${projectk}`)}`;
      let userd = String.fromCharCode(103,48,100,0) == iconsharefriendso;
      do {
         iconsharefriendso = `${iconsharefriendso.length}`;
         if (userd) {
            break;
         }
      } while ((projectk > 3.58) && userd);
         iconsharefriendso = `${iconsharefriendso.length}`;
      iconarrowrightblackn = `${x_unlock2.length}`;
       let videocommonS: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,105,111,110,95,48,95,53,0),442], [String.fromCharCode(119,95,53,57,0),321]]);
         videocommonS.set(`${videocommonS.size}`, videocommonS.size);
         videocommonS.set(`${videocommonS.size}`, 3);
      if (Array.from(videocommonS.values()).includes(videocommonS.size)) {
         videocommonS.set(`${videocommonS.size}`, videocommonS.size % (Math.max(4, videocommonS.size)));
      }
      humidityw += `${release_a3.length}`;
    

   while (2 <= iconarrowrightblackn.length) {
      humidityX = release_a3 == iconarrowrightblackn;
      break;
   }
   for (let y = 0; y < 1; y++) {
       let helperi = 2.0;
       let streaming3 = 0.0;
       let privacy2 = String.fromCharCode(101,95,56,56,95,114,101,112,111,0);
          let iconsharefriendsR: Map<any, any> = new Map([[String.fromCharCode(105,95,52,57,95,105,110,118,105,116,101,0),true ], [String.fromCharCode(110,105,110,101,95,103,95,52,56,0),false ], [String.fromCharCode(109,95,53,95,110,111,109,105,110,97,116,101,0),true ]]);
          let dragc = String.fromCharCode(98,108,111,99,107,101,100,95,118,95,53,52,0);
         privacy2 += "1";
         iconsharefriendsR = new Map([[`${iconsharefriendsR.size}`, iconsharefriendsR.size]]);
         dragc += `${iconsharefriendsR.size}`;
      let arrowrightwithtaill = 8726508 <= privacy2.length;
      do {
         privacy2 = `${privacy2.length + parseInt(`${helperi}`)}`;
         if (arrowrightwithtaill) {
            break;
         }
      } while ((1 < (2 >> (Math.min(4, privacy2.length)))) && arrowrightwithtaill);
         streaming3 -= parseFloat(`${parseInt(`${helperi}`)}`);
      for (let k = 0; k < 2; k++) {
         privacy2 += `${parseInt(`${helperi}`)}`;
      }
      for (let b = 0; b < 3; b++) {
          let tumbnailK = String.fromCharCode(99,95,53,57,95,102,111,112,101,110,0);
          let crossJ = 3;
          let defaultpredictionprofilea = 0;
          let componentregistryA = String.fromCharCode(119,95,57,48,95,100,101,108,111,99,97,116,101,0);
          let loadinga = String.fromCharCode(117,95,56,49,95,105,110,116,101,114,112,111,108,0);
         helperi -= parseInt(`${streaming3}`);
         tumbnailK += `${componentregistryA.length / (Math.max(1, 7))}`;
         crossJ ^= componentregistryA.length / 2;
         defaultpredictionprofilea >>= Math.min(Math.abs(1), 5);
         loadinga = `${(String.fromCharCode(99,0) == loadinga ? crossJ : loadinga.length)}`;
      }
      if (helperi >= streaming3) {
         streaming3 *= parseFloat(`${privacy2.length}`);
      }
         streaming3 /= Math.max(parseFloat(`${3}`), 2);
         streaming3 /= Math.max(parseFloat(`${2}`), 1);
      while (1.25 >= (helperi / (Math.max(5, 8)))) {
          let history_ = 3;
          let projectM = String.fromCharCode(100,114,97,103,103,105,110,103,95,110,95,57,50,0);
          let membershipI = false;
          let basketballawayteam6 = String.fromCharCode(97,115,121,110,99,95,53,95,55,51,0);
          let reactt = 0;
         streaming3 -= parseFloat(`${2}`);
         history_ <<= Math.min(Math.abs((history_ - (membershipI ? 3 : 5))), 1);
         projectM += `${basketballawayteam6.length}`;
         basketballawayteam6 = `${3 + projectM.length}`;
         reactt &= 1 * basketballawayteam6.length;
         break;
      }
      x_unlock2.push(privacy2.length);
   }
   let private_h7 = statsk == String.fromCharCode(50,112,108,114,0);
   do {
      statsk = `${((humidityX ? 4 : 3) ^ 3)}`;
      if (private_h7) {
         break;
      }
   } while ((4 <= humidityw.length) && private_h7);
    const url = `https://www.bing.com/search?q=${encodedSearchTerm}&form=QBLH&sp=-1&ghc=1&lq=0&pq=a&sc=10-1&qs=n&sk=&cvid=F4E27DDDEE8343F082F994097EF7592A&ghsh=0&ghacc=0&ghpl=`;

   let guideT = 5913039 >= graphs;
   do {
      graphs *= 3;
      if (guideT) {
         break;
      }
   } while (guideT && (2 >= (graphs & 2)));
       let umengS = 0.0;
       let actionV = true;
      for (let i = 0; i < 3; i++) {
         actionV = umengS >= 86.16;
      }
       let penaltygoal2: Array<any> = [111, 919];
       let mapbufferb: Array<any> = [String.fromCharCode(115,117,98,108,97,121,101,114,115,95,55,95,55,56,0), String.fromCharCode(104,119,99,111,110,102,105,103,95,111,95,55,57,0), String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,57,95,56,57,0)];
          let gmailw = true;
         umengS *= penaltygoal2.length;
      let flagY = 5599608 <= mapbufferb.length;
      do {
         mapbufferb.push(1 ^ mapbufferb.length);
         if (flagY) {
            break;
         }
      } while (flagY && (1 == (mapbufferb.length | 1) || (1 | mapbufferb.length) == 3));
         umengS /= Math.max(4, ((actionV ? 3 : 4) ^ penaltygoal2.length));
      for (let x = 0; x < 2; x++) {
         umengS /= Math.max(3, (penaltygoal2.length ^ (actionV ? 3 : 1)));
      }
      statsk = `${x_unlock2.length * libavdeviceA.size}`;
      statsk = `${(iconarrowrightblackn.length & (humidityX ? 3 : 2))}`;
    try {

      statsk += `${2 / (Math.max(4, livesharet.length))}`;
       let injuryO = 0.0;
       let fastforwardT = String.fromCharCode(111,95,50,50,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0);
       let reactnavigation7 = 4.0;
         fastforwardT += `${parseInt(`${reactnavigation7}`)}`;
         injuryO -= parseFloat(`${1}`);
         injuryO += parseFloat(`${3 + parseInt(`${reactnavigation7}`)}`);
          let core3 = false;
          let holderN = 2.0;
         fastforwardT += `${(fastforwardT == String.fromCharCode(77,0) ? fastforwardT.length : parseInt(`${injuryO}`))}`;
         core3 = core3 || 32.38 > holderN;
         holderN *= ((core3 ? 5 : 5) & parseInt(`${holderN}`));
      for (let w = 0; w < 3; w++) {
         injuryO += parseFloat(`${3 - fastforwardT.length}`);
      }
         injuryO /= Math.max(1, parseFloat(`${1 * parseInt(`${injuryO}`)}`));
          let profileC = 0.0;
         fastforwardT = `${(fastforwardT == String.fromCharCode(50,0) ? fastforwardT.length : parseInt(`${profileC}`))}`;
      if ((fastforwardT.length - parseInt(`${injuryO}`)) > 1 || (injuryO - 3.93) > 2.73) {
         injuryO -= parseFloat(`${fastforwardT.length - parseInt(`${injuryO}`)}`);
      }
      let baidud = 9040993.0 >= reactnavigation7;
      do {
          let hookK = String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,95,117,95,54,57,0);
          let mintegralP = String.fromCharCode(103,95,49,48,95,115,105,110,116,0);
         reactnavigation7 /= Math.max(4, parseInt(`${reactnavigation7}`));
         hookK += `${mintegralP.length}`;
         mintegralP += `${(String.fromCharCode(102,0) == mintegralP ? hookK.length : mintegralP.length)}`;
         if (baidud) {
            break;
         }
      } while (baidud && (3 > fastforwardT.length));
      libavdeviceA.set(statsk, 3 + statsk.length);
   let control7 = 5624006 >= vnewssharen.size;
   do {
      vnewssharen.set(iconarrowrightblackn, iconarrowrightblackn.length & vnewssharen.size);
      if (control7) {
         break;
      }
   } while (((libavdeviceA.size >> (Math.min(Math.abs(5), 5))) == 4 || (libavdeviceA.size >> (Math.min(Math.abs(vnewssharen.size), 3))) == 5) && control7);
      if (await InAppBrowser.isAvailable()) {

   if (3 == release_a3.length) {
      release_a3 += `${libavdeviceA.size >> (Math.min(Math.abs(2), 3))}`;
   }
   if (statsk.startsWith(`${livesharet.length}`)) {
      statsk += `${release_a3.length}`;
   }
   if (!statsk.includes(`${libavdeviceA.size}`)) {
      libavdeviceA = new Map([[`${livesharet.length}`, 2 - statsk.length]]);
   }
        await InAppBrowser.open(url);
      } else {

   while (x_unlock2.length >= 5) {
       let mathi = 4;
       let iconcalendarp: Map<any, any> = new Map([[String.fromCharCode(109,95,52,57,95,112,97,99,107,101,116,104,101,97,100,101,114,0),false ], [String.fromCharCode(99,111,112,121,120,95,104,95,57,56,0),false ], [String.fromCharCode(120,95,51,48,95,110,117,109,101,114,97,108,0),true ]]);
      let weatherO = 7108841 >= mathi;
      do {
         mathi += mathi;
         if (weatherO) {
            break;
         }
      } while (((iconcalendarp.size >> (Math.min(Math.abs(2), 1))) <= 4 || (2 >> (Math.min(4, Math.abs(iconcalendarp.size)))) <= 3) && weatherO);
       let telegramk = String.fromCharCode(115,112,101,101,100,117,112,95,48,95,57,52,0);
      let defaultpredictionprofileO = 9460528 >= iconcalendarp.size;
      do {
         iconcalendarp.set(`${mathi}`, 3 & iconcalendarp.size);
         if (defaultpredictionprofileO) {
            break;
         }
      } while (defaultpredictionprofileO && (iconcalendarp.size == mathi));
         mathi += telegramk.length;
       let encryptq = true;
         encryptq = !encryptq;
      x_unlock2 = [3 * livesharet.length];
      break;
   }
       let checkbox_ = String.fromCharCode(106,95,56,95,116,111,111,108,115,0);
       let modules1 = String.fromCharCode(118,99,101,110,99,95,54,95,51,56,0);
      while (checkbox_ != modules1) {
         modules1 += `${modules1.length + 2}`;
         break;
      }
      let iconpointscorez = String.fromCharCode(56,106,109,54,114,109,101,54,0) == checkbox_;
      do {
          let subtext1 = true;
         checkbox_ = "1";
         if (iconpointscorez) {
            break;
         }
      } while (iconpointscorez && (3 < checkbox_.length));
      for (let p = 0; p < 1; p++) {
         modules1 += `${modules1.length}`;
      }
       let backiconK: Array<any> = [763, 729];
       let linkD: Array<any> = [450, 711];
      for (let i = 0; i < 2; i++) {
          let icondefaultthumbnailQ = 0.0;
          let sharewhitex = true;
          let awayplayerP = 4.0;
          let rooma = true;
         linkD = [modules1.length];
         icondefaultthumbnailQ += parseFloat(`${parseInt(`${awayplayerP}`) + 3}`);
         sharewhitex = 22.77 > (icondefaultthumbnailQ * awayplayerP);
         rooma = awayplayerP > 14.4;
      }
         backiconK = [backiconK.length % (Math.max(linkD.length, 6))];
      humidityw = `${(String.fromCharCode(110,0) == release_a3 ? vnewssharen.size : release_a3.length)}`;
      livesharet.push(3 << (Math.min(1, humidityw.length)));
        Linking.openURL(url);
      }
    } catch (e) {

   for (let y = 0; y < 1; y++) {
       let bootsplashs: Map<any, any> = new Map([[String.fromCharCode(115,95,48,95,105,100,101,110,116,105,116,121,0),true ], [String.fromCharCode(117,112,108,111,97,100,95,107,95,51,54,0),false ]]);
       let shootyesgoal5 = 3;
       let floaterz = 2.0;
       let countdownf = 0.0;
       let weibo3: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,100,95,57,95,57,50,0),String.fromCharCode(98,97,99,107,98,114,111,117,110,100,95,98,95,50,49,0)], [String.fromCharCode(120,95,50,56,95,115,101,114,105,97,108,105,122,105,110,103,0),String.fromCharCode(118,105,115,98,108,101,95,105,95,52,52,0)], [String.fromCharCode(102,95,50,57,95,105,112,111,108,0),String.fromCharCode(97,95,57,95,105,110,100,101,112,101,110,100,101,110,116,0)]]);
          let philippinesh = 1.0;
          let libavcodec4: Map<any, any> = new Map([[String.fromCharCode(107,95,57,50,0),644], [String.fromCharCode(100,95,50,50,95,114,101,103,105,115,116,101,114,101,100,0),264], [String.fromCharCode(99,111,110,99,97,116,100,101,99,95,120,95,49,0),219]]);
          let basketballtrophyM = 1;
         weibo3.set(`${philippinesh}`, parseInt(`${philippinesh}`));
         libavcodec4 = new Map([[`${libavcodec4.size}`, libavcodec4.size * 2]]);
         basketballtrophyM ^= basketballtrophyM;
      let libfbjniV = weibo3.size <= 4945646;
      do {
          let iconwechatc = String.fromCharCode(110,95,54,95,116,104,105,99,107,0);
         weibo3 = new Map([[`${weibo3.size}`, iconwechatc.length]]);
         if (libfbjniV) {
            break;
         }
      } while (libfbjniV && (5 < bootsplashs.size));
      if (3 > (parseInt(`${floaterz}`) * shootyesgoal5) && 5.70 > (parseFloat(`${shootyesgoal5}`) * floaterz)) {
         floaterz += parseFloat(`${2}`);
      }
          let libreactE: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,116,101,108,121,95,52,95,57,51,0),999], [String.fromCharCode(110,95,51,55,95,109,111,118,101,116,111,0),358]]);
          let libglogW = String.fromCharCode(99,111,118,97,114,105,97,110,99,101,95,97,95,54,49,0);
         shootyesgoal5 /= Math.max(2, 3 % (Math.max(shootyesgoal5, 10)));
         libreactE = new Map([[`${libreactE.size}`, libreactE.size]]);
         libglogW += `${(String.fromCharCode(107,0) == libglogW ? libglogW.length : libreactE.size)}`;
      let notificationp = 8285948 <= shootyesgoal5;
      do {
          let iconfeedbackk = String.fromCharCode(100,95,55,53,0);
          let chinaV = String.fromCharCode(104,101,120,98,105,110,95,113,95,54,53,0);
          let airbnbstarW = String.fromCharCode(112,95,52,54,95,107,101,121,115,116,111,114,101,0);
          let sellJ: Map<any, any> = new Map([[String.fromCharCode(102,95,51,57,95,115,116,111,114,97,103,101,115,0),503], [String.fromCharCode(108,95,49,54,95,112,114,101,99,97,108,99,117,108,97,116,101,0),846]]);
          let yellowredcardF = String.fromCharCode(109,95,50,57,95,114,102,112,115,0);
         shootyesgoal5 /= Math.max(sellJ.size, 5);
         iconfeedbackk = `${airbnbstarW.length * chinaV.length}`;
         chinaV = `${(airbnbstarW == String.fromCharCode(71,0) ? airbnbstarW.length : chinaV.length)}`;
         sellJ = new Map([[chinaV, 3]]);
         yellowredcardF += "2";
         if (notificationp) {
            break;
         }
      } while (notificationp && (3 <= shootyesgoal5));
         countdownf -= parseInt(`${countdownf}`);
      for (let g = 0; g < 1; g++) {
          let promotion9 = 0.0;
          let homeu: Array<any> = [String.fromCharCode(120,95,52,56,95,100,98,112,97,103,101,0), String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,113,95,57,49,0), String.fromCharCode(100,95,51,54,0)];
         shootyesgoal5 *= parseInt(`${floaterz}`);
         promotion9 += homeu.length >> (Math.min(2, Math.abs(parseInt(`${promotion9}`))));
         homeu.push(2 - parseInt(`${promotion9}`));
      }
          let profileactiveT = String.fromCharCode(113,95,50,52,95,107,100,102,0);
          let watchnowbgl = true;
          let playlistN: Array<any> = [268, 346];
         bootsplashs.set(`${watchnowbgl}`, 1 / (Math.max(9, playlistN.length)));
         profileactiveT += `${profileactiveT.length % 2}`;
         floaterz -= parseFloat(`${parseInt(`${countdownf}`)}`);
          let dialogB = String.fromCharCode(116,111,108,111,119,101,114,95,122,95,57,51,0);
         weibo3.set(`${countdownf}`, 1 + dialogB.length);
          let turnG = 0.0;
          let spinnerk = String.fromCharCode(105,95,52,57,95,118,105,101,119,101,114,115,0);
          let libswresampleh = String.fromCharCode(109,97,100,100,95,52,95,50,50,0);
         shootyesgoal5 >>= Math.min(5, Math.abs(parseInt(`${turnG}`)));
         turnG /= Math.max(3, parseFloat(`${spinnerk.length}`));
         spinnerk = `${libswresampleh.length}`;
         libswresampleh += `${(spinnerk == String.fromCharCode(89,0) ? spinnerk.length : libswresampleh.length)}`;
      while (!Array.from(weibo3.keys()).includes(`${countdownf}`)) {
          let componentregistryi = 4.0;
          let iconcurrentmatcha = String.fromCharCode(118,95,53,48,95,115,113,108,105,116,101,114,98,117,0);
         weibo3.set(`${componentregistryi}`, 3 % (Math.max(5, parseInt(`${componentregistryi}`))));
         iconcurrentmatcha = `${3 >> (Math.min(4, iconcurrentmatcha.length))}`;
         break;
      }
          let referrero = 5.0;
         shootyesgoal5 /= Math.max(3, 3);
         referrero -= parseFloat(`${1}`);
      if (2 >= (weibo3.size - 4)) {
         floaterz -= parseFloat(`${shootyesgoal5 % (Math.max(8, weibo3.size))}`);
      }
       let vipsport7 = String.fromCharCode(115,99,111,112,101,100,95,49,95,54,52,0);
       let greenY = String.fromCharCode(108,95,56,95,114,101,115,111,117,114,99,101,0);
      livesharet.push(parseInt(`${countdownf}`));
   }
       let videobufferloadingp = true;
       let constantsB = String.fromCharCode(108,95,52,55,0);
       let whiteb = String.fromCharCode(100,99,97,97,100,112,99,109,95,98,95,54,0);
      if (4 > constantsB.length) {
         constantsB += `${constantsB.length | 1}`;
      }
         constantsB = "1";
         videobufferloadingp = (((!videobufferloadingp ? 4 : constantsB.length) | constantsB.length) == 4);
         constantsB += `${constantsB.length}`;
      for (let d = 0; d < 3; d++) {
         whiteb = `${(String.fromCharCode(121,0) == constantsB ? (videobufferloadingp ? 1 : 3) : constantsB.length)}`;
      }
      let libglogS = videobufferloadingp ? !videobufferloadingp : videobufferloadingp;
      do {
         videobufferloadingp = whiteb.length >= 38;
         if (libglogS) {
            break;
         }
      } while (libglogS && (constantsB.includes(`${videobufferloadingp}`)));
         constantsB = `${(whiteb.length + (videobufferloadingp ? 4 : 1))}`;
          let iconorientationW = 1;
          let gradlews: Map<any, any> = new Map([[String.fromCharCode(102,95,55,53,95,102,105,110,100,0),String.fromCharCode(119,95,53,56,95,102,99,110,116,108,0)], [String.fromCharCode(100,111,103,115,95,54,95,52,53,0),String.fromCharCode(122,95,56,54,95,100,101,112,108,111,121,0)]]);
         constantsB += `${((videobufferloadingp ? 4 : 2) | iconorientationW)}`;
         iconorientationW |= gradlews.size % 3;
         gradlews = new Map([[`${gradlews.size}`, 1 % (Math.max(2, gradlews.size))]]);
      for (let p = 0; p < 2; p++) {
         videobufferloadingp = constantsB.length < whiteb.length;
      }
      libavdeviceA.set(`${libavdeviceA.size}`, 2 & libavdeviceA.size);
   while (release_a3.length > libavdeviceA.size) {
       let defaultpredictionprofileB = 3;
       let profilepicQ = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,102,95,51,54,0);
       let ajaxl = true;
       let basketballhometeamY = false;
      for (let h = 0; h < 3; h++) {
         profilepicQ += `${((basketballhometeamY ? 3 : 2) + defaultpredictionprofileB)}`;
      }
       let iconchatsendq: Map<any, any> = new Map([[String.fromCharCode(100,95,55,54,95,101,120,112,97,110,100,97,98,108,101,0),false ], [String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,52,95,52,54,0),true ], [String.fromCharCode(98,108,117,101,116,111,111,116,104,95,117,95,55,48,0),true ]]);
       let placementD: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,95,54,95,49,55,0),72], [String.fromCharCode(115,95,50,54,95,112,115,110,114,120,0),278]]);
       let middlebrightnessS: Array<any> = [646, 762];
       let gesturesg: Array<any> = [153, 751];
      let subout8 = ajaxl ? !ajaxl : ajaxl;
      do {
         ajaxl = ajaxl || gesturesg.length >= 31;
         if (subout8) {
            break;
         }
      } while ((!ajaxl || basketballhometeamY) && subout8);
       let unimplementedviewL = String.fromCharCode(118,95,56,49,95,114,101,115,105,103,110,0);
      release_a3 = `${libavdeviceA.size}`;
      break;
   }
      Linking.openURL(url);
    }
  }, [vod]);

  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  

  

  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  

  
  
  

  const fetchComments = () =>
    yysInactive.getReviewDetails(vod?.vod_douban_id.toString() ?? "").then(
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
       let halfO = String.fromCharCode(121,95,53,49,95,110,97,118,105,103,97,116,101,100,0);
    let libjsijniprofilert = 1;
    let currentg: Array<any> = [29, 947, 722];
    let launcherY = 5.0;
    let greenq = 1.0;
    let mbnativez = String.fromCharCode(97,102,102,101,99,116,95,106,95,52,49,0);
    let whitevideolivec = String.fromCharCode(122,95,57,56,95,102,105,110,97,108,108,121,0);
    let forwardC = false;
    let icontransferclub8 = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,114,95,49,56,0);
    let trophyk = true;
    let adult2 = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,108,95,54,0);
    let libhermesQ = 0;
    let orangen = 3;
    let storeu = String.fromCharCode(106,112,101,103,99,111,109,112,95,56,95,54,51,0);
      launcherY += parseInt(`${launcherY}`);
      whitevideolivec = `${((forwardC ? 2 : 1) - parseInt(`${launcherY}`))}`;
   if (greenq < launcherY) {
       let iconeditb = 2;
       let helperT: Array<any> = [552, 517, 876];
       let acceptedj: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,95,56,95,57,49,0),58], [String.fromCharCode(122,95,50,55,95,105,110,115,116,97,110,99,101,0),748], [String.fromCharCode(110,101,119,115,95,100,95,54,0),527]]);
       let holderO = String.fromCharCode(112,108,111,116,95,104,95,56,51,0);
       let airbnbstarselectedg = String.fromCharCode(105,95,52,57,95,111,117,116,112,117,116,0);
       let homel = String.fromCharCode(112,95,52,51,95,109,101,116,97,115,111,117,110,100,0);
       let reactnavigation9 = String.fromCharCode(102,95,57,57,95,115,116,121,108,101,100,0);
         iconeditb /= Math.max(iconeditb, 4);
      if (2 >= homel.length) {
         homel = `${holderO.length}`;
      }
      while ((iconeditb % (Math.max(4, homel.length))) >= 4) {
          let whitevideoliveR = String.fromCharCode(102,95,53,54,95,101,120,108,117,100,101,100,0);
          let dragI = String.fromCharCode(97,95,50,57,0);
         homel = `${2 & whitevideoliveR.length}`;
         whitevideoliveR = `${dragI.length << (Math.min(dragI.length, 1))}`;
         break;
      }
       let cancelY = true;
         homel += "1";
         airbnbstarselectedg = "2";
         helperT = [reactnavigation9.length];
         holderO += `${(holderO == String.fromCharCode(78,0) ? helperT.length : holderO.length)}`;
       let mbbide = String.fromCharCode(115,101,97,108,97,110,116,95,107,95,50,57,0);
       let unreadP = String.fromCharCode(117,95,55,50,95,101,110,116,101,114,0);
      for (let f = 0; f < 1; f++) {
          let rounde = String.fromCharCode(108,112,99,108,115,112,95,49,95,51,57,0);
          let telemetryA: Array<any> = [823, 689, 856];
          let pagey = true;
         holderO += `${(holderO == String.fromCharCode(67,0) ? holderO.length : mbbide.length)}`;
         rounde += `${(1 << (Math.min(5, Math.abs((pagey ? 4 : 4)))))}`;
         telemetryA.push(telemetryA.length % 1);
         pagey = telemetryA.length < 67;
      }
          let awayicon0 = String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,54,95,51,56,0);
         homel = `${unreadP.length >> (Math.min(Math.abs(2), 4))}`;
         awayicon0 += "3";
         cancelY = homel.length == unreadP.length;
          let greenu = 0.0;
          let change8 = String.fromCharCode(99,111,109,109,97,110,100,115,95,98,95,57,51,0);
          let darkY: Array<any> = [638, 465, 435];
         homel += `${2 >> (Math.min(5, homel.length))}`;
         greenu -= 2 + darkY.length;
         change8 += `${parseInt(`${greenu}`) >> (Math.min(change8.length, 3))}`;
         darkY = [(change8 == String.fromCharCode(68,0) ? parseInt(`${greenu}`) : change8.length)];
      for (let s = 0; s < 2; s++) {
         iconeditb ^= ((cancelY ? 5 : 1) ^ acceptedj.size);
      }
      greenq *= helperT.length << (Math.min(icontransferclub8.length, 2));
   }
   let assetsX = greenq >= 5106064.0;
   do {
      greenq += whitevideolivec.length >> (Math.min(3, Math.abs(parseInt(`${greenq}`))));
      if (assetsX) {
         break;
      }
   } while ((5.41 == (1.13 - greenq) || 1.13 == (greenq - launcherY)) && assetsX);

      let mergedArray;

   while (2.40 == (launcherY * 4.0)) {
       let eyecloseU = true;
       let redirectL = 1.0;
       let mathp = true;
       let uimanagerG = true;
      let activityF = mathp ? !mathp : mathp;
      do {
         mathp = eyecloseU;
         if (activityF) {
            break;
         }
      } while (activityF && (!uimanagerG && !mathp));
      if (!mathp) {
         uimanagerG = !uimanagerG;
      }
         mathp = redirectL > 22.16 || !eyecloseU;
         redirectL *= (parseFloat(`${(uimanagerG ? 2 : 3) / (Math.max(2, (mathp ? 5 : 3)))}`));
         eyecloseU = uimanagerG || !mathp;
      libjsijniprofilert &= currentg.length >> (Math.min(halfO.length, 5));
      break;
   }
      libjsijniprofilert += 2;
      greenq *= parseInt(`${greenq}`) - 3;
   let canvasV = launcherY >= 9088839.0;
   do {
       let connectionG = 3;
       let configureK = String.fromCharCode(102,114,111,110,116,95,100,95,56,56,0);
       let iconnotificationnewf = false;
      for (let h = 0; h < 2; h++) {
         iconnotificationnewf = (connectionG << (Math.min(configureK.length, 2))) > 42;
      }
         iconnotificationnewf = configureK.startsWith(`${connectionG}`);
      for (let t = 0; t < 2; t++) {
         connectionG /= Math.max(5, configureK.length);
      }
      while (5 == configureK.length && !iconnotificationnewf) {
         configureK = `${configureK.length * 3}`;
         break;
      }
      while (configureK.length == 3) {
         iconnotificationnewf = !iconnotificationnewf;
         break;
      }
      if (!configureK.endsWith(`${iconnotificationnewf}`)) {
         iconnotificationnewf = !iconnotificationnewf;
      }
          let libjsiH = String.fromCharCode(103,95,49,52,95,97,117,116,111,102,105,108,108,0);
          let sellZ = String.fromCharCode(100,95,55,55,95,101,120,112,105,114,121,0);
          let catagoryZ = String.fromCharCode(98,95,55,50,95,109,111,100,117,108,101,0);
         configureK = `${connectionG}`;
         libjsiH += "1";
         sellZ += `${(catagoryZ == String.fromCharCode(111,0) ? sellZ.length : catagoryZ.length)}`;
      while (!configureK.startsWith(`${iconnotificationnewf}`)) {
          let encryptorH = false;
          let targetH = false;
          let ewardedU = 2;
         configureK = `${connectionG / (Math.max(8, ewardedU))}`;
         encryptorH = (!targetH ? !encryptorH : !targetH);
         ewardedU += ((targetH ? 2 : 2));
         break;
      }
      for (let i = 0; i < 3; i++) {
          let faviconq = String.fromCharCode(107,95,56,95,117,110,105,113,117,101,108,121,0);
         connectionG %= Math.max(5, faviconq.length / 3);
      }
      launcherY += mbnativez.length;
      if (canvasV) {
         break;
      }
   } while ((3.60 == launcherY) && canvasV);
      const locComments = await getLocalComments();

      whitevideolivec += `${(String.fromCharCode(112,0) == halfO ? parseInt(`${launcherY}`) : halfO.length)}`;
   for (let o = 0; o < 3; o++) {
       let audienceI = 1.0;
       let traminiU = String.fromCharCode(112,95,54,51,95,97,99,114,111,110,121,109,115,0);
       let dialogw = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,99,95,51,50,0);
       let dicelogoZ = String.fromCharCode(118,95,52,52,95,114,99,111,110,0);
       let sigmobR = 0;
      if (dicelogoZ.endsWith(`${dialogw.length}`)) {
         dicelogoZ += "2";
      }
          let becomeI = String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,106,95,53,54,0);
          let lighte = 2.0;
          let basketballdetailsbgy = String.fromCharCode(117,110,98,108,111,99,107,105,110,103,95,99,95,57,52,0);
         dicelogoZ = `${dicelogoZ.length * becomeI.length}`;
         becomeI = `${parseInt(`${lighte}`) / 1}`;
         lighte -= (parseFloat(`${basketballdetailsbgy == String.fromCharCode(70,0) ? basketballdetailsbgy.length : parseInt(`${lighte}`)}`));
      let plash4 = audienceI <= 7067550.0;
      do {
         audienceI /= Math.max((String.fromCharCode(81,0) == dicelogoZ ? dicelogoZ.length : sigmobR), 5);
         if (plash4) {
            break;
         }
      } while (plash4 && (4.99 == (4.50 / (Math.max(5, audienceI))) && 3.79 == (audienceI / 4.50)));
          let sportsH = String.fromCharCode(122,95,51,55,95,117,110,103,114,111,117,112,0);
         audienceI *= parseInt(`${audienceI}`) + sigmobR;
         sportsH += "1";
          let defaultpredictionprofileW = String.fromCharCode(111,95,48,95,115,101,97,114,99,104,0);
         dialogw += `${defaultpredictionprofileW.length - 3}`;
         dicelogoZ = "1";
         audienceI += traminiU.length;
          let libswscale2: Array<any> = [String.fromCharCode(115,117,109,109,97,114,121,95,50,95,54,50,0), String.fromCharCode(101,120,101,99,117,116,101,95,51,95,57,48,0), String.fromCharCode(102,95,55,95,116,104,114,111,117,103,104,0)];
         dicelogoZ += `${parseInt(`${audienceI}`) / 3}`;
         libswscale2 = [3];
          let predictionbannersharedW = String.fromCharCode(112,95,55,57,95,98,111,100,121,115,105,100,0);
         dialogw = `${dialogw.length}`;
         predictionbannersharedW += "2";
      let splashv = 6967416 <= dicelogoZ.length;
      do {
         dicelogoZ = `${(String.fromCharCode(122,0) == dialogw ? parseInt(`${audienceI}`) : dialogw.length)}`;
         if (splashv) {
            break;
         }
      } while (splashv && (dicelogoZ != String.fromCharCode(98,0) || 1 == dialogw.length));
          let libreactnativeblobC: Map<any, any> = new Map([[String.fromCharCode(112,117,98,101,120,112,95,114,95,54,57,0),String.fromCharCode(122,95,56,56,95,105,109,109,117,116,97,98,108,101,0)], [String.fromCharCode(109,95,51,53,95,112,114,101,101,109,112,116,105,118,101,0),String.fromCharCode(118,95,56,50,95,116,114,97,110,115,112,111,115,101,0)]]);
          let wifirouterU = 1;
          let notificationfillemptyq = true;
         sigmobR &= wifirouterU & dialogw.length;
         libreactnativeblobC.set(`${notificationfillemptyq}`, libreactnativeblobC.size);
         wifirouterU |= 3 | libreactnativeblobC.size;
       let rulesf = String.fromCharCode(98,95,49,95,114,101,116,114,97,110,115,0);
          let uimanagerK = String.fromCharCode(111,108,100,108,105,115,116,95,106,95,49,50,0);
          let profilepicr = true;
          let middlesounde = 4.0;
         dialogw += `${parseInt(`${audienceI}`) / 3}`;
         uimanagerK += `${((profilepicr ? 5 : 4) + uimanagerK.length)}`;
         profilepicr = middlesounde > 10.84 || !profilepicr;
         middlesounde -= ((profilepicr ? 2 : 4) + parseInt(`${middlesounde}`));
      if (!traminiU.includes(dicelogoZ)) {
         dicelogoZ += `${parseInt(`${audienceI}`) * dialogw.length}`;
      }
      for (let i = 0; i < 1; i++) {
         dialogw += `${traminiU.length}`;
      }
      libjsijniprofilert >>= Math.min(2, Math.abs(1));
   }
       let connections = 4.0;
       let armvaW = 1;
          let animationZ = String.fromCharCode(99,105,114,99,108,101,95,101,95,52,0);
         connections *= 3 << (Math.min(2, Math.abs(parseInt(`${connections}`))));
         animationZ = `${animationZ.length}`;
          let detailsH = 2;
          let iconpointscoree = 1.0;
          let reactnativejs3 = 1;
         armvaW %= Math.max(2, 3);
         detailsH /= Math.max(parseInt(`${iconpointscoree}`), 3);
         iconpointscoree /= Math.max(parseFloat(`${1 % (Math.max(detailsH, 6))}`), 5);
         reactnativejs3 ^= 1 % (Math.max(reactnativejs3, 8));
      for (let g = 0; g < 1; g++) {
         armvaW &= armvaW * parseInt(`${connections}`);
      }
      while (connections == 3.13) {
         connections += parseInt(`${connections}`) | 2;
         break;
      }
      let championy = 8626670.0 >= connections;
      do {
         connections /= Math.max(parseInt(`${connections}`) >> (Math.min(5, Math.abs(armvaW))), 4);
         if (championy) {
            break;
         }
      } while ((1.48 == (2.65 - connections)) && championy);
       let pointQ = String.fromCharCode(114,95,57,49,95,97,99,99,114,117,101,0);
       let predictiondefaultm = String.fromCharCode(99,95,49,48,48,95,114,101,115,105,122,101,114,0);
      adult2 = `${whitevideolivec.length}`;
   for (let j = 0; j < 1; j++) {
       let window_qaS = 5.0;
       let orangeuparrowj: Array<any> = [902, 242];
       let toponE: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,110,99,121,95,119,95,57,48,0),758], [String.fromCharCode(122,95,51,95,97,114,114,111,119,0),454]]);
       let white2 = String.fromCharCode(103,95,50,51,95,116,105,108,108,0);
       let awayiconM = 2.0;
         toponE.set(white2, 2);
         toponE.set(`${window_qaS}`, orangeuparrowj.length);
       let yellowscoreballd: Array<any> = [635, 426];
       let t_imageC: Array<any> = [353, 207, 578];
      let profileinactiveJ = awayiconM >= 5633499.0;
      do {
          let phoneE = 5.0;
          let schedulerz = 1;
          let foundS = 3.0;
          let downloadc = 1.0;
          let predictionE = String.fromCharCode(97,99,101,110,99,95,49,95,50,54,0);
         awayiconM -= parseFloat(`${white2.length & predictionE.length}`);
         phoneE += parseFloat(`${2}`);
         schedulerz %= Math.max(4, parseInt(`${downloadc}`));
         foundS += parseInt(`${downloadc}`) % (Math.max(8, parseInt(`${phoneE}`)));
         predictionE = `${parseInt(`${foundS}`) % 2}`;
         if (profileinactiveJ) {
            break;
         }
      } while (profileinactiveJ && (4.69 < awayiconM));
         window_qaS += t_imageC.length / (Math.max(1, 1));
      let kuaishouU = awayiconM <= 9240108.0;
      do {
         awayiconM += parseFloat(`${parseInt(`${awayiconM}`)}`);
         if (kuaishouU) {
            break;
         }
      } while ((5.95 >= awayiconM) && kuaishouU);
      if (1 >= (white2.length + 1) || 2 >= (white2.length + 1)) {
         toponE.set(`${window_qaS}`, parseInt(`${window_qaS}`));
      }
      while ((window_qaS / 5.45) == 2.31) {
         orangeuparrowj = [1 + parseInt(`${window_qaS}`)];
         break;
      }
          let sentryk: Array<any> = [274, 241];
          let sentryG = 3;
         toponE = new Map([[`${toponE.size}`, 1]]);
         sentryk = [2];
         sentryG |= 3 + sentryG;
          let stara = String.fromCharCode(104,101,108,112,95,102,95,50,56,0);
          let reactnativeultimatelistviewb = true;
         toponE = new Map([[white2, 3 | parseInt(`${awayiconM}`)]]);
         stara = `${(String.fromCharCode(76,0) == stara ? (reactnativeultimatelistviewb ? 5 : 3) : stara.length)}`;
         reactnativeultimatelistviewb = (81 <= ((!reactnativeultimatelistviewb ? stara.length : 81) ^ stara.length));
       let pnewarchdefaultsB = 5.0;
         yellowscoreballd.push(parseInt(`${window_qaS}`));
      let iconadslinkd = yellowscoreballd.length <= 7848483;
      do {
         yellowscoreballd = [2 * t_imageC.length];
         if (iconadslinkd) {
            break;
         }
      } while (iconadslinkd && (3.76 < (2.4 - awayiconM) || 3.40 < (awayiconM - 2.4)));
       let mime8 = 5;
         white2 += `${(String.fromCharCode(122,0) == white2 ? orangeuparrowj.length : white2.length)}`;
      mbnativez = `${((trophyk ? 4 : 1))}`;
   }

      if (onlineComments) {

       let iconnotificationnewB: Map<any, any> = new Map([[String.fromCharCode(109,112,97,100,115,112,95,49,95,49,52,0),false ], [String.fromCharCode(116,95,51,50,95,111,110,116,101,120,116,0),true ]]);
         iconnotificationnewB.set(`${iconnotificationnewB.size}`, iconnotificationnewB.size % (Math.max(3, 3)));
         iconnotificationnewB = new Map([[`${iconnotificationnewB.size}`, 2 >> (Math.min(3, Math.abs(iconnotificationnewB.size)))]]);
      let pingu = 5770507 <= iconnotificationnewB.size;
      do {
         iconnotificationnewB.set(`${iconnotificationnewB.size}`, iconnotificationnewB.size);
         if (pingu) {
            break;
         }
      } while (pingu && (2 >= iconnotificationnewB.size));
      trophyk = libhermesQ == 49;
   if (!forwardC) {
      forwardC = 91 <= libjsijniprofilert;
   }
   if (2 <= (currentg.length + halfO.length) || (halfO.length + 2) <= 3) {
      halfO = `${parseInt(`${launcherY}`) % (Math.max(icontransferclub8.length, 3))}`;
   }
   let subinD = icontransferclub8.length >= 8724436;
   do {
      icontransferclub8 += `${libhermesQ * mbnativez.length}`;
      if (subinD) {
         break;
      }
   } while ((5 < (icontransferclub8.length - 3) && (4.35 * greenq) < 1.74) && subinD);
        mergedArray = locComments.concat(onlineComments);
      } else {

      halfO = `${libhermesQ % 1}`;
      launcherY += 1;
      halfO = "2";
   for (let n = 0; n < 2; n++) {
       let friendsz = 4;
      let privacyt = 6723848 >= friendsz;
      do {
         friendsz *= friendsz;
         if (privacyt) {
            break;
         }
      } while (privacyt && ((friendsz / (Math.max(8, friendsz))) > 5));
         friendsz /= Math.max(5, friendsz / (Math.max(4, friendsz)));
      while (friendsz < 1) {
         friendsz <<= Math.min(Math.abs(friendsz), 3);
         break;
      }
      launcherY /= Math.max(friendsz >> (Math.min(icontransferclub8.length, 2)), 5);
   }
        mergedArray = onlineComments;
      }

      setAllComment(mergedArray);

      whitevideolivec = `${parseInt(`${greenq}`)}`;
   for (let l = 0; l < 1; l++) {
       let awayiconF = 3;
          let promotionC: Map<any, any> = new Map([[String.fromCharCode(114,101,112,101,97,116,101,100,108,121,95,48,95,56,0),612], [String.fromCharCode(115,95,56,48,95,98,111,116,104,0),573]]);
          let changeq = 5.0;
         awayiconF <<= Math.min(4, Math.abs(2));
         promotionC = new Map([[`${promotionC.size}`, parseInt(`${changeq}`) >> (Math.min(Math.abs(promotionC.size), 4))]]);
         changeq += parseInt(`${changeq}`);
      while (awayiconF <= awayiconF) {
          let manifestC = String.fromCharCode(98,95,51,53,95,102,117,108,102,105,108,108,0);
         awayiconF *= 2 & manifestC.length;
         break;
      }
          let eighteen5 = 1;
          let details6: Array<any> = [812, 322];
         awayiconF >>= Math.min(2, Math.abs(eighteen5 * details6.length));
      mbnativez = `${(mbnativez == String.fromCharCode(79,0) ? mbnativez.length : parseInt(`${launcherY}`))}`;
   }
   if (orangen > icontransferclub8.length) {
      icontransferclub8 = `${icontransferclub8.length}`;
   }
      adult2 = `${halfO.length ^ 2}`;
      setShowLoading(isFetchingComments);

       let calendars = 1.0;
       let icondownimgM = true;
         icondownimgM = 91.6 < calendars;
         calendars /= Math.max(3, (parseFloat(`${(icondownimgM ? 1 : 1) % (Math.max(parseInt(`${calendars}`), 7))}`)));
         calendars -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${calendars}`)), 2))}`);
       let filledf = String.fromCharCode(109,95,55,54,95,109,98,97,102,102,0);
       let modelT = String.fromCharCode(114,111,111,109,95,57,95,54,54,0);
          let defaultteamG = String.fromCharCode(119,95,55,49,95,97,110,116,105,97,108,105,97,115,101,100,0);
          let mbsplashH = 2.0;
         filledf += "3";
         defaultteamG += `${defaultteamG.length}`;
         mbsplashH -= parseInt(`${mbsplashH}`) / (Math.max(defaultteamG.length, 2));
      if (modelT.length >= 2) {
         modelT += `${((icondownimgM ? 2 : 4) >> (Math.min(filledf.length, 4)))}`;
      }
      currentg.push(currentg.length);
      whitevideolivec = "3";
      mbnativez += `${libhermesQ}`;
       let bgvipsportV = 0;
      for (let e = 0; e < 1; e++) {
          let zoom4 = false;
          let termsr: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,114,95,53,53,0),401], [String.fromCharCode(100,95,54,53,95,112,97,114,116,105,99,105,112,97,110,116,0),823], [String.fromCharCode(97,117,116,111,100,101,116,101,99,116,95,113,95,54,48,0),966]]);
         bgvipsportV &= termsr.size | bgvipsportV;
         zoom4 = (zoom4 ? zoom4 : !zoom4);
         termsr.set(`${zoom4}`, (2 << (Math.min(Math.abs((zoom4 ? 4 : 5)), 4))));
      }
      for (let s = 0; s < 3; s++) {
         bgvipsportV >>= Math.min(1, Math.abs(bgvipsportV >> (Math.min(Math.abs(2), 4))));
      }
         bgvipsportV %= Math.max(3, 2 | bgvipsportV);
      whitevideolivec = `${((trophyk ? 5 : 1) ^ parseInt(`${greenq}`))}`;
      console.log("done");
    };

    if (!isFetchingComments) {
      mergeAllComments();
    }
  }, [isFetchingComments, isUpdated]);

  const locCommentId = "userComment" + vod?.vod_id;
  const getLocalComments = async () => {
       let detailC = false;
    let iconlogoutY = String.fromCharCode(114,101,109,111,118,101,100,95,116,95,53,49,0);
    let template_mA = String.fromCharCode(105,95,48,95,101,110,113,117,101,117,101,0);
    let positionfieldE = 1.0;
    let full6 = String.fromCharCode(117,95,49,48,48,0);
    let detaild = 0.0;
    let sigmobq: Map<any, any> = new Map([[String.fromCharCode(117,95,57,54,95,117,108,112,102,101,99,0),false ], [String.fromCharCode(99,120,100,97,116,97,95,103,95,55,52,0),false ]]);
    let description_y_ = 3;
    let libbuffer6 = 4.0;
    let sourcef = String.fromCharCode(122,95,51,52,95,100,101,99,108,0);
    let whistleX: Map<any, any> = new Map([[String.fromCharCode(99,95,54,57,95,110,101,103,111,116,105,97,116,105,111,110,0),561], [String.fromCharCode(97,112,112,101,110,100,95,112,95,50,54,0),476], [String.fromCharCode(115,116,114,101,97,109,104,101,97,100,101,114,95,113,95,49,48,0),963]]);
    let mbbannerv = String.fromCharCode(104,95,49,53,95,97,117,103,109,101,110,116,101,100,0);
    let basketballk = String.fromCharCode(122,95,54,51,95,112,111,108,105,99,101,0);
    let disconnectedlogou = false;
    let imageactionliveg = String.fromCharCode(115,95,49,55,95,112,114,101,115,101,110,99,101,115,0);
      positionfieldE -= description_y_ + 2;
   while (2 < (sigmobq.size % (Math.max(3, 8))) && (full6.length % (Math.max(7, sigmobq.size))) < 3) {
       let brightnessa = String.fromCharCode(100,105,115,97,98,108,105,110,103,95,120,95,51,49,0);
       let historyj = 4.0;
       let shrinkd = 2.0;
       let airbnbstarselecteda = 0.0;
      while ((shrinkd * historyj) > 5.54) {
         historyj *= parseFloat(`${2 / (Math.max(parseInt(`${historyj}`), 4))}`);
         break;
      }
         historyj -= parseFloat(`${brightnessa.length}`);
      while (!brightnessa.endsWith(`${shrinkd}`)) {
         brightnessa += `${parseInt(`${shrinkd}`) >> (Math.min(4, Math.abs(2)))}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
         airbnbstarselecteda *= parseFloat(`${parseInt(`${shrinkd}`)}`);
      }
         historyj /= Math.max(2, parseFloat(`${parseInt(`${shrinkd}`)}`));
      for (let g = 0; g < 2; g++) {
         brightnessa = `${1 << (Math.min(Math.abs(parseInt(`${historyj}`)), 4))}`;
      }
         airbnbstarselecteda *= parseFloat(`${parseInt(`${historyj}`)}`);
         airbnbstarselecteda /= Math.max(parseFloat(`${parseInt(`${historyj}`)}`), 5);
      for (let t = 0; t < 1; t++) {
          let statisticsinactive0 = 4.0;
          let actions6: Array<any> = [677, 595, 885];
          let splashw: Array<any> = [520, 949, 431];
         historyj += parseFloat(`${actions6.length}`);
         statisticsinactive0 += parseFloat(`${splashw.length / 3}`);
         actions6.push(splashw.length - 3);
      }
      for (let a = 0; a < 2; a++) {
         shrinkd -= parseInt(`${shrinkd}`) ^ 3;
      }
          let splash_: Map<any, any> = new Map([[String.fromCharCode(116,95,48,95,109,97,115,107,115,0),168], [String.fromCharCode(101,95,49,95,120,119,109,97,0),313], [String.fromCharCode(103,95,54,50,95,99,102,116,109,100,108,0),500]]);
          let icondefaultthumbnailT = 5.0;
         brightnessa += `${parseInt(`${shrinkd}`) + splash_.size}`;
         splash_ = new Map([[`${icondefaultthumbnailT}`, 3]]);
         icondefaultthumbnailT /= Math.max(1, parseInt(`${icondefaultthumbnailT}`) & parseInt(`${icondefaultthumbnailT}`));
         airbnbstarselecteda += parseFloat(`${brightnessa.length}`);
      sigmobq = new Map([[`${shrinkd}`, parseInt(`${detaild}`) * 2]]);
      break;
   }
       let push8 = String.fromCharCode(112,101,114,99,101,110,116,95,97,95,49,0);
       let customL: Array<any> = [890, 491, 357];
      while (1 <= (push8.length << (Math.min(1, customL.length))) || (customL.length << (Math.min(push8.length, 1))) <= 1) {
         push8 += `${push8.length}`;
         break;
      }
         push8 = `${customL.length}`;
          let leakcheckerY = String.fromCharCode(111,95,51,52,95,110,101,116,101,113,0);
          let libapminsightb6 = 0.0;
         customL.push(2);
         leakcheckerY += `${parseInt(`${libapminsightb6}`) / 3}`;
         libapminsightb6 /= Math.max(parseInt(`${libapminsightb6}`), 3);
          let libfbU = 5.0;
          let shoot_: Array<any> = [821, 993, 42];
          let cornerkickq: Array<any> = [433, 528, 530];
         push8 += `${3 + shoot_.length}`;
         libfbU /= Math.max(cornerkickq.length / 1, 2);
         shoot_.push(3 << (Math.min(2, cornerkickq.length)));
      for (let x = 0; x < 2; x++) {
          let inviteu: Map<any, any> = new Map([[String.fromCharCode(118,95,57,52,95,116,97,107,101,0),true ], [String.fromCharCode(116,95,55,55,0),false ], [String.fromCharCode(103,95,50,48,95,99,104,97,108,108,101,110,103,101,0),true ]]);
          let macauC = String.fromCharCode(99,111,110,116,114,97,99,116,95,117,95,52,56,0);
         push8 += "1";
         inviteu.set(macauC, 2 ^ macauC.length);
      }
      let homeiconK = customL.length >= 9511219;
      do {
         customL = [push8.length % 3];
         if (homeiconK) {
            break;
         }
      } while (homeiconK && (push8.endsWith(`${customL.length}`)));
      full6 += `${3 % (Math.max(2, full6.length))}`;

    try {

      full6 += `${parseInt(`${positionfieldE}`) - 1}`;
   if (sigmobq.size == 4) {
      template_mA += "2";
   }
       let hongkong3 = false;
      for (let l = 0; l < 3; l++) {
         hongkong3 = !hongkong3;
      }
         hongkong3 = !hongkong3;
       let sendc = false;
       let scorepopsoundv = false;
      description_y_ <<= Math.min(5, Math.abs(2));
      const comments = await AsyncStorage.getItem(locCommentId);

      positionfieldE *= full6.length * iconlogoutY.length;
   if (2 > (3 / (Math.max(3, template_mA.length))) || (sigmobq.size / (Math.max(template_mA.length, 5))) > 3) {
      template_mA += `${sigmobq.size}`;
   }
   while (template_mA.length < sigmobq.size) {
      template_mA = `${parseInt(`${positionfieldE}`)}`;
      break;
   }
      console.log("comments stored in local storage ", locCommentId);

      detaild /= Math.max(parseFloat(`${3 % (Math.max(parseInt(`${positionfieldE}`), 6))}`), 3);
   for (let p = 0; p < 3; p++) {
      description_y_ >>= Math.min(Math.abs(1 * description_y_), 3);
   }
   for (let c = 0; c < 1; c++) {
      positionfieldE *= (parseInt(`${positionfieldE}`) ^ (detailC ? 1 : 1));
   }
      console.log(comments);

      sigmobq = new Map([[full6, full6.length]]);
   for (let s = 0; s < 3; s++) {
      detailC = 79.8 < libbuffer6;
   }
   for (let f = 0; f < 3; f++) {
      detailC = sourcef.length < 97;
   }

      if (comments !== null) {

      positionfieldE += full6.length % (Math.max(3, sourcef.length));
      iconlogoutY = `${parseInt(`${positionfieldE}`) | 1}`;
      iconlogoutY = `${sourcef.length}`;
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

      detailC = 67 >= iconlogoutY.length;
       let iconwechatT: Map<any, any> = new Map([[String.fromCharCode(113,95,54,56,95,97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,0),448], [String.fromCharCode(118,95,49,49,95,101,112,108,121,0),776]]);
       let iconbellactived = String.fromCharCode(99,95,57,48,95,100,101,97,108,108,111,99,97,116,105,111,110,0);
       let short_2L = String.fromCharCode(114,97,110,100,101,110,95,97,95,50,51,0);
      for (let k = 0; k < 1; k++) {
          let filedQ = false;
          let profileinactiveD = 5.0;
          let combineM: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,101,115,115,95,118,95,56,48,0),String.fromCharCode(103,95,52,95,105,110,100,101,120,0)], [String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,115,95,57,56,0),String.fromCharCode(106,95,49,52,95,116,111,115,115,0)], [String.fromCharCode(108,105,98,120,95,51,95,55,53,0),String.fromCharCode(116,97,103,115,116,114,95,102,95,57,56,0)]]);
         iconwechatT.set(short_2L, ((filedQ ? 1 : 2)));
         filedQ = combineM.size <= parseInt(`${profileinactiveD}`);
         profileinactiveD -= parseFloat(`${2 * parseInt(`${profileinactiveD}`)}`);
         combineM = new Map([[`${combineM.size}`, parseInt(`${profileinactiveD}`) + combineM.size]]);
      }
      let favorites = String.fromCharCode(107,55,109,105,49,109,0) == iconbellactived;
      do {
          let middlep: Array<any> = [751, 114];
          let assistP = 4;
          let countdownc = 4;
          let nativemoduleK = 0.0;
          let orangeclockh = 3;
         iconbellactived = `${assistP - short_2L.length}`;
         middlep = [orangeclockh];
         assistP -= countdownc * parseInt(`${nativemoduleK}`);
         countdownc ^= 2 & orangeclockh;
         nativemoduleK *= orangeclockh;
         if (favorites) {
            break;
         }
      } while (favorites && (5 >= iconbellactived.length));
      if (iconbellactived.length <= iconwechatT.size) {
          let mimeX = String.fromCharCode(112,114,111,103,114,101,115,115,95,53,95,56,0);
          let libffmpegkite = String.fromCharCode(111,95,54,54,95,99,104,111,111,115,101,0);
          let sliderB = String.fromCharCode(113,95,49,55,95,115,112,101,114,97,116,111,114,0);
          let giftx = String.fromCharCode(117,95,48,95,102,117,110,103,105,98,108,101,0);
         iconwechatT.set(libffmpegkite, iconwechatT.size / (Math.max(libffmpegkite.length, 7)));
         mimeX = "2";
         sliderB = `${mimeX.length}`;
         giftx = `${giftx.length}`;
      }
      let redscoreballI = 6013051 <= iconwechatT.size;
      do {
         iconwechatT.set(`${iconbellactived}`, (iconbellactived == String.fromCharCode(108,0) ? iconwechatT.size : iconbellactived.length));
         if (redscoreballI) {
            break;
         }
      } while (((short_2L.length ^ iconwechatT.size) < 5) && redscoreballI);
         short_2L = `${iconwechatT.size}`;
       let defaultbasketballbgX = String.fromCharCode(110,95,55,51,95,116,105,110,116,101,100,0);
         defaultbasketballbgX = `${iconbellactived.length}`;
         iconbellactived += `${1 >> (Math.min(1, defaultbasketballbgX.length))}`;
         defaultbasketballbgX += `${3 - iconbellactived.length}`;
      mbbannerv += `${sigmobq.size * 3}`;
      detailC = mbbannerv.startsWith(`${description_y_}`);
      console.log("error when retrieving local comments: ", error);

   while (2 >= sourcef.length) {
      full6 = `${full6.length << (Math.min(5, Math.abs(whistleX.size)))}`;
      break;
   }
   while (5 > sourcef.length) {
      full6 += `${(template_mA == String.fromCharCode(106,0) ? template_mA.length : parseInt(`${detaild}`))}`;
      break;
   }
   while (1 > (2 >> (Math.min(2, Math.abs(sigmobq.size)))) || 3 > (whistleX.size >> (Math.min(Math.abs(2), 5)))) {
       let components7 = false;
       let resultc: Map<any, any> = new Map([[String.fromCharCode(114,101,99,112,95,111,95,53,50,0),true ], [String.fromCharCode(103,95,53,48,95,109,111,100,117,108,101,115,0),false ]]);
       let libimagepipeliney = 3.0;
       let iconnewsshare8 = String.fromCharCode(109,95,51,57,95,115,108,105,99,101,100,0);
       let libreactperfloggerjniZ: Array<any> = [177, 135, 54];
          let fastforwardE = String.fromCharCode(109,106,112,101,103,98,95,52,95,49,54,0);
          let frame__k1 = 2.0;
          let tumbnailA = 0.0;
         iconnewsshare8 = `${1 - parseInt(`${frame__k1}`)}`;
         fastforwardE += `${3 + fastforwardE.length}`;
         frame__k1 += fastforwardE.length | parseInt(`${tumbnailA}`);
         tumbnailA /= Math.max((parseFloat(`${String.fromCharCode(118,0) == fastforwardE ? fastforwardE.length : parseInt(`${tumbnailA}`)}`)), 1);
       let dependenciesC = String.fromCharCode(98,95,53,54,95,119,114,106,112,103,99,111,109,0);
      if (5 < (dependenciesC.length + 1)) {
          let ewardedQ = 0;
          let episodeu = String.fromCharCode(99,111,110,115,117,109,101,95,109,95,57,53,0);
          let ajaxc = String.fromCharCode(100,95,51,95,114,101,99,111,103,110,105,116,105,111,110,115,0);
          let paginationj = true;
         libimagepipeliney += episodeu.length;
         ewardedQ *= ajaxc.length;
         episodeu = `${((paginationj ? 2 : 1) - ajaxc.length)}`;
      }
         libreactperfloggerjniZ = [dependenciesC.length];
       let imagenetworkerrm = 0;
      if (!components7) {
         components7 = libreactperfloggerjniZ.length == libimagepipeliney;
      }
       let football6 = String.fromCharCode(104,95,52,53,95,100,111,115,100,97,116,101,0);
       let iconsettingi = 4.0;
          let penaltyshootnogoalP = 1.0;
          let usernamel = true;
          let inactivei = String.fromCharCode(99,95,53,56,95,102,97,110,111,117,116,0);
         iconsettingi += (parseFloat(`${(usernamel ? 3 : 5) + parseInt(`${libimagepipeliney}`)}`));
         penaltyshootnogoalP *= 1;
         usernamel = 38.46 == penaltyshootnogoalP;
         inactivei = `${2 & parseInt(`${penaltyshootnogoalP}`)}`;
      if (3 < (iconnewsshare8.length << (Math.min(Math.abs(4), 1)))) {
         libreactperfloggerjniZ = [parseInt(`${libimagepipeliney}`)];
      }
      if ((libimagepipeliney + 3.82) > 4.47 && (parseInt(`${libimagepipeliney}`) + football6.length) > 4) {
          let greyarrowupJ = String.fromCharCode(120,95,53,57,95,99,104,101,99,107,112,111,105,110,116,115,0);
          let field3: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,99,111,100,101,99,95,122,95,53,50,0),442], [String.fromCharCode(100,119,111,114,100,95,109,95,55,0),277], [String.fromCharCode(117,95,50,57,95,112,97,114,109,115,0),61]]);
          let materialU = 5;
          let libapminsightaX = String.fromCharCode(98,95,50,56,95,115,117,112,101,114,119,105,110,100,111,119,0);
          let found1 = String.fromCharCode(99,111,110,116,111,108,108,101,114,95,113,95,57,54,0);
         libimagepipeliney /= Math.max(3, greyarrowupJ.length);
         greyarrowupJ += `${found1.length}`;
         field3.set(`${materialU}`, materialU + 3);
         libapminsightaX = `${(libapminsightaX == String.fromCharCode(69,0) ? field3.size : libapminsightaX.length)}`;
         found1 += `${found1.length ^ libapminsightaX.length}`;
      }
      if (iconnewsshare8.endsWith(`${iconsettingi}`)) {
         iconnewsshare8 += `${3 - football6.length}`;
      }
         imagenetworkerrm += 1;
      while ((resultc.size & 5) <= 3) {
         components7 = iconnewsshare8 == String.fromCharCode(80,0);
         break;
      }
      if (4 == (football6.length & imagenetworkerrm) || 3 == (4 & football6.length)) {
          let penaltyshootL = String.fromCharCode(114,97,112,112,101,114,95,116,95,50,53,0);
          let shrunks = 2.0;
          let runtimed = 2;
          let page6: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,97,95,55,50,0),String.fromCharCode(108,95,49,49,95,112,114,111,100,117,99,101,0)], [String.fromCharCode(100,95,52,52,95,97,102,105,108,116,101,114,0),String.fromCharCode(100,95,57,48,95,102,117,108,108,115,99,114,101,101,110,0)], [String.fromCharCode(117,95,57,53,95,112,114,101,115,99,97,108,105,110,103,0),String.fromCharCode(115,95,50,49,95,97,99,99,101,108,101,114,97,116,101,0)]]);
          let libavcodecQ = false;
         imagenetworkerrm %= Math.max(1, resultc.size / (Math.max(2, 6)));
         penaltyshootL = "3";
         shrunks -= penaltyshootL.length - runtimed;
         runtimed <<= Math.min(2, Math.abs(runtimed));
         page6.set(penaltyshootL, penaltyshootL.length & 3);
         libavcodecQ = page6.size == 2;
      }
      whistleX = new Map([[mbbannerv, template_mA.length | mbbannerv.length]]);
      break;
   }
      return [];
    }
  };

  const storeUserComments = async () => {
       let controlo = String.fromCharCode(107,95,48,95,115,116,117,110,0);
    let bingg = String.fromCharCode(108,105,112,98,111,97,114,100,95,114,95,49,50,0);
    let smallsoundJ = 5.0;
    let downloaderR = 3.0;
    let librrco = 3.0;
    let humidityR = 0.0;
    let side6 = true;
    let iconeditq = String.fromCharCode(105,114,114,101,108,118,97,110,116,95,103,95,57,55,0);
    let static_2nM = String.fromCharCode(99,111,109,112,105,116,97,98,108,101,95,120,95,54,53,0);
   for (let f = 0; f < 3; f++) {
      librrco /= Math.max(parseFloat(`${parseInt(`${smallsoundJ}`)}`), 3);
   }
      librrco += parseFloat(`${2 % (Math.max(9, parseInt(`${downloaderR}`)))}`);

    if (!comment) {

   if ((smallsoundJ - downloaderR) < 2.85) {
      smallsoundJ *= parseFloat(`${parseInt(`${humidityR}`) / 2}`);
   }
      controlo = `${((side6 ? 3 : 2) & 3)}`;
      return;
    }

    console.log("user comment", comment);

       let whitebellk = String.fromCharCode(111,95,57,95,110,97,110,111,115,0);
       let weibow = 4.0;
      if ((whitebellk.length * weibow) <= 4.66 && (2 / (Math.max(7, whitebellk.length))) <= 2) {
          let eactR = String.fromCharCode(97,95,57,53,95,116,104,114,101,97,100,115,97,102,101,0);
         weibow -= (whitebellk == String.fromCharCode(88,0) ? parseInt(`${weibow}`) : whitebellk.length);
         eactR = "2";
      }
      while (5.9 >= (weibow - whitebellk.length) && (whitebellk.length - parseInt(`${weibow}`)) >= 1) {
         whitebellk = `${whitebellk.length >> (Math.min(4, Math.abs(parseInt(`${weibow}`))))}`;
         break;
      }
      if ((weibow / (Math.max(5.44, 9))) <= 4.0 || (whitebellk.length / (Math.max(5, parseInt(`${weibow}`)))) <= 5) {
         weibow *= parseInt(`${weibow}`);
      }
      let iconsubssuccessm = whitebellk == String.fromCharCode(100,113,100,121,112,106,101,99,104,110,0);
      do {
         whitebellk += `${whitebellk.length}`;
         if (iconsubssuccessm) {
            break;
         }
      } while (iconsubssuccessm && (!whitebellk.includes(`${weibow}`)));
          let pause3 = 4.0;
          let nterstitialT: Array<any> = [String.fromCharCode(116,104,101,110,97,98,108,101,95,48,95,51,48,0), String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,95,103,95,57,56,0)];
         whitebellk += `${1 >> (Math.min(3, Math.abs(parseInt(`${pause3}`))))}`;
         pause3 /= Math.max(3, parseFloat(`${nterstitialT.length}`));
         nterstitialT = [nterstitialT.length];
          let libffmpegkito = String.fromCharCode(119,95,57,55,95,102,108,111,97,116,105,110,103,0);
          let libnmsJ = 5.0;
         whitebellk = `${(String.fromCharCode(73,0) == whitebellk ? whitebellk.length : parseInt(`${libnmsJ}`))}`;
         libffmpegkito += `${(String.fromCharCode(56,0) == libffmpegkito ? libffmpegkito.length : libffmpegkito.length)}`;
         libnmsJ += libffmpegkito.length;
      librrco *= (parseFloat(`${iconeditq.length / (Math.max(5, (side6 ? 4 : 2)))}`));
       let line2 = String.fromCharCode(113,95,54,49,95,116,97,98,108,101,108,105,109,0);
       let kinit_p4G = String.fromCharCode(113,95,52,49,95,97,114,98,105,116,101,114,0);
       let arrowc = String.fromCharCode(111,95,57,49,95,101,120,116,114,99,0);
          let whitetick6 = String.fromCharCode(110,111,116,99,104,101,100,95,54,95,54,52,0);
         line2 += `${whitetick6.length / (Math.max(4, arrowc.length))}`;
          let rocketd: Map<any, any> = new Map([[String.fromCharCode(99,108,108,99,95,120,95,52,57,0),String.fromCharCode(106,95,56,57,95,116,97,107,101,111,117,116,0)], [String.fromCharCode(102,95,50,49,95,102,102,116,115,0),String.fromCharCode(103,95,52,57,95,100,105,115,116,112,111,105,110,116,0)]]);
         arrowc += "3";
         rocketd = new Map([[`${rocketd.size}`, rocketd.size << (Math.min(Math.abs(1), 4))]]);
       let internetX = 2.0;
          let bootsplashk = 5;
         kinit_p4G += "2";
         bootsplashk /= Math.max(3 << (Math.min(3, Math.abs(bootsplashk))), 4);
      for (let l = 0; l < 2; l++) {
          let iconstarS = 2.0;
          let sellmathbackgroundm: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,97,100,100,95,122,95,57,57,0),20], [String.fromCharCode(100,105,115,115,99,111,110,110,101,99,116,95,102,95,52,56,0),704], [String.fromCharCode(105,110,118,111,107,101,114,95,113,95,56,52,0),991]]);
         arrowc = `${(line2 == String.fromCharCode(118,0) ? line2.length : parseInt(`${internetX}`))}`;
         iconstarS -= parseFloat(`${sellmathbackgroundm.size}`);
         sellmathbackgroundm = new Map([[`${sellmathbackgroundm.size}`, 3 - parseInt(`${iconstarS}`)]]);
      }
      downloaderR -= parseFloat(`${2}`);
    try {

      iconeditq = `${controlo.length & 1}`;
   while (3.55 > (librrco * smallsoundJ)) {
      smallsoundJ += parseFloat(`${bingg.length * 3}`);
      break;
   }
      const existingComments = await getLocalComments();

      smallsoundJ += (parseFloat(`${(side6 ? 5 : 3) >> (Math.min(controlo.length, 5))}`));
   let expiredW = side6 ? !side6 : side6;
   do {
      side6 = 19 <= controlo.length;
      if (expiredW) {
         break;
      }
   } while ((controlo.includes(`${side6}`)) && expiredW);
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      };

      controlo = `${bingg.length}`;
       let distl = String.fromCharCode(117,110,109,97,112,102,105,108,101,95,117,95,52,0);
       let relatedy = 4.0;
       let plus9 = true;
      for (let f = 0; f < 2; f++) {
          let playlistv = String.fromCharCode(105,110,102,101,114,95,120,95,51,52,0);
          let codegenf = String.fromCharCode(110,95,50,54,0);
          let static_oO: Array<any> = [829, 612];
          let statsR = String.fromCharCode(111,117,116,101,114,95,112,95,50,48,0);
         relatedy -= (String.fromCharCode(48,0) == playlistv ? playlistv.length : (plus9 ? 2 : 3));
         codegenf += "2";
         static_oO.push(statsR.length);
         statsR = `${codegenf.length << (Math.min(1, static_oO.length))}`;
      }
      for (let h = 0; h < 1; h++) {
         plus9 = 13.66 <= relatedy && !plus9;
      }
         relatedy /= Math.max(3, parseInt(`${relatedy}`) * distl.length);
         relatedy += (String.fromCharCode(76,0) == distl ? distl.length : (plus9 ? 3 : 3));
         relatedy += (distl.length / (Math.max(2, (plus9 ? 2 : 4))));
         relatedy /= Math.max((String.fromCharCode(71,0) == distl ? (plus9 ? 4 : 4) : distl.length), 4);
          let orientationv = String.fromCharCode(108,95,57,54,95,108,111,97,100,0);
         distl += `${3 - orientationv.length}`;
         relatedy *= ((plus9 ? 1 : 1) % (Math.max(2, parseInt(`${relatedy}`))));
         distl = `${parseInt(`${relatedy}`) * 3}`;
      iconeditq += `${2 + parseInt(`${smallsoundJ}`)}`;
      existingComments.unshift(commmentObj);

   while (downloaderR <= smallsoundJ) {
       let bingd = 5.0;
       let subbasketballplayerJ = String.fromCharCode(97,95,51,50,95,105,110,115,116,101,97,100,0);
       let imagemanageru = 2;
      if (!subbasketballplayerJ.endsWith(`${imagemanageru}`)) {
         subbasketballplayerJ = `${imagemanageru << (Math.min(Math.abs(1), 1))}`;
      }
         subbasketballplayerJ = "2";
          let bootsplasha: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,95,52,95,50,53,0),false ], [String.fromCharCode(108,95,52,55,95,116,105,103,103,108,101,0),false ], [String.fromCharCode(102,99,110,116,108,95,110,95,56,53,0),true ]]);
         subbasketballplayerJ += `${imagemanageru}`;
         bootsplasha = new Map([[`${bootsplasha.size}`, bootsplasha.size - bootsplasha.size]]);
          let plust = 2.0;
         subbasketballplayerJ += `${subbasketballplayerJ.length}`;
         plust /= Math.max(parseFloat(`${parseInt(`${plust}`) * parseInt(`${plust}`)}`), 4);
         subbasketballplayerJ = `${1 - subbasketballplayerJ.length}`;
         imagemanageru |= 3;
          let slider5 = false;
         imagemanageru <<= Math.min(3, Math.abs(1 << (Math.min(Math.abs(parseInt(`${bingd}`)), 2))));
         slider5 = !slider5;
      while ((bingd - imagemanageru) >= 1.63 || (parseInt(`${bingd}`) - imagemanageru) >= 3) {
         bingd /= Math.max(1, parseInt(`${bingd}`) + subbasketballplayerJ.length);
         break;
      }
       let statsi = 2.0;
       let homeactiveh = 4.0;
      downloaderR *= parseFloat(`${3 >> (Math.min(3, Math.abs(parseInt(`${bingd}`))))}`);
      break;
   }
   if (5.30 >= (humidityR / (Math.max(6, smallsoundJ))) || (humidityR / (Math.max(4, smallsoundJ))) >= 5.30) {
      humidityR -= parseFloat(`${parseInt(`${smallsoundJ}`) & controlo.length}`);
   }
      await AsyncStorage.setItem(
        locCommentId,
        JSON.stringify(existingComments)
      );

   while (5.29 == (downloaderR * librrco) || (librrco * 5.29) == 2.77) {
      librrco -= parseFloat(`${parseInt(`${librrco}`) | 1}`);
      break;
   }
   let iconarrowrightT = downloaderR >= 7025532.0;
   do {
      downloaderR -= parseFloat(`${2 | parseInt(`${downloaderR}`)}`);
      if (iconarrowrightT) {
         break;
      }
   } while (iconarrowrightT && (1.63 <= (2.6 + downloaderR) && (controlo.length * 5) <= 5));
      await getLocalComments();

       let stepO = String.fromCharCode(118,95,51,50,95,98,97,99,107,119,97,114,100,115,0);
       let targetw = false;
         targetw = !targetw;
       let refreshborderlessB = 0.0;
       let historyD = 4.0;
         targetw = (parseInt(`${historyD}`) - stepO.length) == 100;
          let clock_: Map<any, any> = new Map([[String.fromCharCode(102,97,115,116,109,97,116,104,95,107,95,57,53,0),true ], [String.fromCharCode(102,116,121,112,95,54,95,51,50,0),false ]]);
         targetw = clock_.size <= 32;
      if ((stepO.length | 2) < 2 && (parseInt(`${refreshborderlessB}`) / (Math.max(stepO.length, 10))) < 2) {
         refreshborderlessB /= Math.max((parseInt(`${refreshborderlessB}`) & (targetw ? 5 : 4)), 4);
      }
      if (!targetw) {
         targetw = String.fromCharCode(80,0) == stepO;
      }
      controlo = `${((side6 ? 4 : 2) * parseInt(`${humidityR}`))}`;
   for (let m = 0; m < 1; m++) {
      iconeditq = `${iconeditq.length - 2}`;
   }
      setIsUpdated(!isUpdated);

       let icondownimgj = String.fromCharCode(107,95,48,95,112,114,101,102,101,116,99,104,101,114,0);
       let time_wc = String.fromCharCode(100,95,49,57,95,112,114,101,112,0);
      let singlea = String.fromCharCode(120,54,102,0) == time_wc;
      do {
         time_wc += "1";
         if (singlea) {
            break;
         }
      } while (singlea && (3 <= icondownimgj.length || time_wc != String.fromCharCode(106,0)));
      let fullscreenmink = 6192894 >= time_wc.length;
      do {
          let stepF = 4.0;
          let onewsB = true;
         time_wc += `${((onewsB ? 4 : 4) ^ time_wc.length)}`;
         stepF -= parseFloat(`${parseInt(`${stepF}`) + parseInt(`${stepF}`)}`);
         onewsB = 41.98 <= stepF || 41.98 <= stepF;
         if (fullscreenmink) {
            break;
         }
      } while ((!time_wc.includes(icondownimgj)) && fullscreenmink);
      while (time_wc == String.fromCharCode(100,0)) {
         icondownimgj += `${icondownimgj.length}`;
         break;
      }
      for (let p = 0; p < 3; p++) {
         time_wc = "1";
      }
      for (let p = 0; p < 1; p++) {
          let activeo = String.fromCharCode(122,95,54,50,95,110,111,110,108,105,110,101,97,114,0);
          let valuesO = String.fromCharCode(100,101,97,100,105,110,101,95,122,95,51,50,0);
          let time_sA = String.fromCharCode(99,97,112,116,117,114,105,110,103,95,107,95,52,51,0);
          let mergerA = true;
         icondownimgj = `${(valuesO == String.fromCharCode(116,0) ? valuesO.length : time_sA.length)}`;
         activeo = `${(3 | (mergerA ? 3 : 2))}`;
         time_sA += `${(activeo.length >> (Math.min(4, Math.abs((mergerA ? 4 : 2)))))}`;
      }
      while (icondownimgj == String.fromCharCode(121,0)) {
         time_wc = `${time_wc.length * 3}`;
         break;
      }
      smallsoundJ -= parseFloat(`${time_wc.length}`);
      iconeditq = `${((side6 ? 4 : 5) - parseInt(`${humidityR}`))}`;
      Keyboard.dismiss();

      downloaderR += parseFloat(`${parseInt(`${humidityR}`) % (Math.max(parseInt(`${downloaderR}`), 6))}`);
      smallsoundJ *= parseFloat(`${3}`);
      yysHomeinactiveUntick.showToast("提交成功，我们将在24小时内进行审核！");
    } catch (error) {

   for (let n = 0; n < 2; n++) {
       let libswresampleX = String.fromCharCode(97,108,108,114,103,98,95,111,95,52,52,0);
       let libyogak = true;
       let gmailS: Map<any, any> = new Map([[String.fromCharCode(97,95,50,50,95,116,105,103,103,108,101,0),794], [String.fromCharCode(116,116,97,101,110,99,95,107,95,48,0),678], [String.fromCharCode(104,105,103,104,101,115,116,95,49,95,51,49,0),804]]);
       let indicatorc = false;
       let loginI: Map<any, any> = new Map([[String.fromCharCode(117,95,50,55,95,106,114,110,108,0),true ], [String.fromCharCode(121,95,52,50,95,115,99,114,111,108,108,101,114,0),true ]]);
         libyogak = gmailS.size <= 35 || indicatorc;
      if ((2 << (Math.min(4, Math.abs(loginI.size)))) > 2 || 2 > loginI.size) {
          let feedbackw = 2;
         indicatorc = libswresampleX.endsWith(`${indicatorc}`);
         feedbackw -= 1 & feedbackw;
      }
         gmailS.set(`${libyogak}`, loginI.size);
      for (let j = 0; j < 1; j++) {
         libyogak = !libyogak;
      }
         loginI = new Map([[`${gmailS.size}`, gmailS.size]]);
      if (!libswresampleX.endsWith(`${libyogak}`)) {
         libyogak = !indicatorc;
      }
         libyogak = (3 > ((!indicatorc ? 3 : libswresampleX.length) * libswresampleX.length));
         libyogak = gmailS.size < 68 && libyogak;
      let encryptK = libyogak ? !libyogak : libyogak;
      do {
         libyogak = (((libyogak ? loginI.size : 5) % (Math.max(loginI.size, 2))) < 79);
         if (encryptK) {
            break;
         }
      } while (encryptK && (!libswresampleX.endsWith(`${libyogak}`)));
          let smallbrightnessl = 4.0;
          let teamdetailsbg0 = String.fromCharCode(101,102,102,101,99,116,95,115,95,52,50,0);
         gmailS.set(libswresampleX, ((libyogak ? 4 : 2) << (Math.min(Math.abs(3), 1))));
         smallbrightnessl *= parseInt(`${smallbrightnessl}`);
         teamdetailsbg0 += `${1 * teamdetailsbg0.length}`;
         loginI.set(`${libswresampleX}`, libswresampleX.length);
      for (let z = 0; z < 2; z++) {
          let right6: Map<any, any> = new Map([[String.fromCharCode(112,116,120,99,95,48,95,52,54,0),880], [String.fromCharCode(99,95,50,50,95,97,118,105,115,121,110,116,104,0),453]]);
         libyogak = !indicatorc || libswresampleX.length > 12;
         right6 = new Map([[`${right6.size}`, 2]]);
      }
      while (!libswresampleX.endsWith(`${indicatorc}`)) {
         indicatorc = 18 < libswresampleX.length;
         break;
      }
         libyogak = 34 >= gmailS.size && 34 >= libswresampleX.length;
         loginI.set(`${gmailS.size}`, 2 * loginI.size);
      downloaderR -= parseFloat(`${1}`);
   }
       let footballtrophyE: Map<any, any> = new Map([[String.fromCharCode(111,95,55,51,95,115,102,116,112,0),733], [String.fromCharCode(117,110,99,108,105,112,112,101,100,95,56,95,57,50,0),636]]);
         footballtrophyE = new Map([[`${footballtrophyE.size}`, 1]]);
       let membershipp = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,97,95,52,51,0);
          let refreshr = String.fromCharCode(109,95,53,53,95,116,104,105,99,107,0);
          let backgroundR = String.fromCharCode(105,95,56,54,95,105,110,116,101,114,112,111,108,97,116,105,111,110,0);
          let reactnativeultimatelistviewM = false;
         membershipp += `${(String.fromCharCode(73,0) == backgroundR ? backgroundR.length : footballtrophyE.size)}`;
         refreshr += `${(refreshr.length - (reactnativeultimatelistviewM ? 2 : 3))}`;
         reactnativeultimatelistviewM = (((reactnativeultimatelistviewM ? 88 : refreshr.length) / (Math.max(3, refreshr.length))) < 88);
      humidityR += (parseFloat(`${(side6 ? 4 : 2)}`));
      console.log("error when storing the comment into local storage: ", error);
    }
  };

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
                    backgroundColor: "#1D2023",
                  }}
                >
                  <TextInput
                    style={{
                      ...styles.input,
                      backgroundColor: "#FFFFFF1A",
                      ...textVariants.body,
                    }}
                    onChangeText={setComment}
                    placeholder={
                      yysIconstar.isLogin(userState.user) ? "请评论" : "请登录才进行评论"
                    }
                    editable={yysIconstar.isLogin(userState.user)}
                    placeholderTextColor={colors.muted}
                    value={comment}
                    maxLength={200}
                    blurOnSubmit
                  />

                  {yysIconstar.isLogin(userState.user) ? (
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
                      <TouchableOpacity
                        onPress={() => {
                          setComment("");
                          storeUserComments();
                        }}
                      >
                        <SubmitBtnSvg
                          fill={comment.length ? "#FAC33D" : "#3A3A3A"}
                        />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity
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
                source={require("../../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
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
                        {/* <TouchableOpacity
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
                    <TouchableOpacity
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
                            source={require("../../../../static/images/phoneshareFloatingBuild.png")}
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
                            source={require("../../../../static/images/privacyPredictiondefaultPlayershirt.png")}
                            resizeMode={"contain"}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
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
                            source={require("../../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
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
