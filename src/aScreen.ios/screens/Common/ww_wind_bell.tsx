

class TeamWith_sLibzeus {
    static defaultroombgBootDarkString = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FavoriteButton from "../../components/button/ww_whistleorange_button";
import FavoriteIcon from "@static/images/libavfilterDefaultroombgPause.svg";
import ScreenContainer from "../../components/container/ww_collection";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { wwAbidetect } from "../../../../ww_leakchecker";

import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import { wwProfileinactiveBrightness, wwImage } from "@type/ww_dycreator_result";
import { addVodToHistory, playVod } from "@redux/actions/ww_floater";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import {
  wwBang,
  wwMbjscommon,
} from "@redux/reducers/ww_shared";
import SinaIcon from "@static/images/componentsMbjscommon.svg";
import WeChatIcon from "@static/images/defaultroombgAnimationsExampleimage.svg";
import QQIcon from "@static/images/photoStation.svg";
import PYQIcon from "@static/images/entryEwarded.svg";
import MoreArrow from "@static/images/libcxxcomponentsPrivilege.svg";
import VodEpisodeSelectionModal from "../../components/modal/ww_switch";
import FastImage from "../../components/common/ww_result";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/ww_icon";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/ww_delegate_matchactive_button";
import VodListVertical from "../../components/vod/ww_defaultplayerimg";
import VodPlayer from "../../components/videoPlayer/ww_libreanimated";
import { FlatList } from "react-native-gesture-handler";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import BingSearch from "../../components/container/ww_room";
import SubmitBtn from "@static/images/guideNbatrophySigmob.svg";

import NoConnection from "../../components/common/ww_downarrow";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/ww_dialog";
import { AdsBannerContext } from "../../../contexts/ww_setting";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";
import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import ww_runtime from "../../../../Umeng/ww_runtime";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/ww_hash";
import { VodCommentBox } from "../../components/vodComment";
import { wwLaunchRound } from "@utility/ww_star";
import { wwIconedit } from "@api";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

type wwBinddatasHandler = {
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

const server = new BridgeServer(TeamWith_sLibzeus.defaultroombgBootDarkString([-108,-120,-120,-116,-93,-113,-103,-114,-118,-107,-97,-103,-4],0xFC,false), true); 

const getNoAdsUri = async (url: string) => {
  const startTime = new Date().valueOf();
  const parentUrl = url
    .split("/")
    .filter((part) => !part.includes(".m3u8"))
    .join("/"); 
  const videoSubfolder = parentUrl
    .replace(TeamWith_sLibzeus.defaultroombgBootDarkString([28,0,0,4,7,78,91,91,116],0x74,false), "")
    .replace(TeamWith_sLibzeus.defaultroombgBootDarkString([-75,-87,-87,-83,-25,-14,-14,-35],0xDD,false), "");
  

  
  
  
  
  
  
  
  
  

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
  const vodReducer: wwMbjscommon = useAppSelector(
    ({ vodReducer }: wwEighteenShirt) => vodReducer
  );
  const vodFavouriteReducer: wwBang = useAppSelector(
    ({ vodFavouritesReducer }: wwEighteenShirt) => vodFavouritesReducer
  );
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );
  const userState = useSelector<wwVertical>('userReducer');
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
  const videoPlayerRef = useRef() as React.MutableRefObject<wwBinddatasHandler>;
  const currentEpisodeRef = useRef<number>();
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const [comment, setComment] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [allComment, setAllComment] = useState<wwImage[] | undefined>([]);
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
       let anythinkD = 5.0;
    let nalyticsP: Array<any> = [147, 973, 603];
    let defaultlogon = 2.0;
    let filede = false;
    let bingL = 0.0;
    let feedback6 = String.fromCharCode(100,114,97,119,95,116,95,49,54,0);
    let submit3 = 2;
    let lessg: Map<any, any> = new Map([[String.fromCharCode(98,95,52,56,95,116,97,114,103,97,0),40], [String.fromCharCode(114,95,54,55,95,105,110,105,116,105,97,108,108,121,0),554], [String.fromCharCode(110,105,100,111,98,106,95,107,95,56,50,0),608]]);
    let mbbannerx = String.fromCharCode(114,95,55,48,95,99,111,118,97,108,101,110,116,0);
      submit3 ^= lessg.size;
       let orangeclockN = true;
         orangeclockN = (orangeclockN ? orangeclockN : !orangeclockN);
          let profileframeh: Map<any, any> = new Map([[String.fromCharCode(119,95,57,95,104,101,120,100,117,109,112,0),449], [String.fromCharCode(118,95,56,50,95,117,110,114,101,103,105,115,116,101,114,101,100,0),284]]);
         orangeclockN = (42 > (profileframeh.size - (orangeclockN ? 42 : profileframeh.size)));
      let mergerr = orangeclockN ? !orangeclockN : orangeclockN;
      do {
          let vietnamQ: Array<any> = [987, 652];
          let submitT = String.fromCharCode(102,111,117,114,99,99,95,109,95,55,57,0);
          let targetO = String.fromCharCode(108,97,98,101,108,101,100,95,52,95,49,0);
          let activityc = true;
          let scheduleE = 1.0;
         orangeclockN = (vietnamQ.length / (Math.max(4, parseInt(`${scheduleE}`)))) <= 44;
         vietnamQ = [(targetO.length << (Math.min(5, Math.abs((activityc ? 3 : 5)))))];
         submitT += `${(String.fromCharCode(76,0) == targetO ? (activityc ? 1 : 1) : targetO.length)}`;
         scheduleE += parseFloat(`${3}`);
         if (mergerr) {
            break;
         }
      } while ((orangeclockN && !orangeclockN) && mergerr);
      feedback6 = `${feedback6.length}`;

    try {

   if (feedback6.length >= 5) {
      nalyticsP.push(nalyticsP.length);
   }
   while (3 == (feedback6.length - 4) && (feedback6.length - 4) == 2) {
      lessg = new Map([[`${anythinkD}`, 3 & parseInt(`${bingL}`)]]);
      break;
   }
      

      submit3 <<= Math.min(1, Math.abs(feedback6.length - nalyticsP.length));
   if (1 > (1 << (Math.min(1, Math.abs(lessg.size)))) || 5 > (lessg.size | 1)) {
      lessg.set(`${anythinkD}`, 2);
   }
      ww_runtime.playsShareClicksAnalytics();

      lessg.set(`${anythinkD}`, 2 - submit3);
      submit3 |= 2 & nalyticsP.length;
      

      filede = null == lessg.get(`${anythinkD}`);
      feedback6 = `${parseInt(`${defaultlogon}`) >> (Math.min(5, Math.abs(2)))}`;

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://wwzj.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

       let emojiW = String.fromCharCode(100,101,110,105,97,108,95,107,95,51,54,0);
       let bggradientY = true;
         bggradientY = !bggradientY;
      for (let m = 0; m < 1; m++) {
          let mbbanner_ = String.fromCharCode(120,95,54,55,95,116,111,117,112,112,101,114,0);
          let downloaderh = String.fromCharCode(112,101,114,99,101,112,116,117,97,108,95,50,95,53,52,0);
         emojiW += `${emojiW.length}`;
         mbbanner_ = `${downloaderh.length % 2}`;
         downloaderh += "3";
      }
       let routerB = 2.0;
      let white3 = bggradientY ? !bggradientY : bggradientY;
      do {
         bggradientY = emojiW.length < 64;
         if (white3) {
            break;
         }
      } while (white3 && (emojiW.length == 4));
         emojiW += `${parseInt(`${routerB}`)}`;
      if (emojiW.length <= 3) {
         bggradientY = !bggradientY;
      }
      submit3 -= emojiW.length + parseInt(`${defaultlogon}`);
      feedback6 += `${parseInt(`${anythinkD}`)}`;

      if (APP_NAME_CONST == "娃娃追剧") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://wwzj.tv`;

       let becomeh = 4;
       let colorsG = 3.0;
         colorsG -= parseFloat(`${becomeh * parseInt(`${colorsG}`)}`);
       let checkbox0 = 1;
       let leaguep = 5;
          let lnewinterstitialF = String.fromCharCode(117,95,55,95,115,113,108,108,111,103,0);
          let unimplementedviewg: Map<any, any> = new Map([[String.fromCharCode(105,95,50,51,95,115,121,110,99,115,97,102,101,0),String.fromCharCode(111,117,116,99,111,109,101,95,110,95,57,54,0)], [String.fromCharCode(116,104,117,109,98,95,53,95,50,49,0),String.fromCharCode(112,95,52,95,98,101,122,101,108,0)], [String.fromCharCode(98,95,57,50,95,117,110,114,101,118,101,114,115,101,100,0),String.fromCharCode(118,95,51,95,99,104,114,111,109,105,110,97,110,99,101,0)]]);
          let temperaturev = String.fromCharCode(121,95,54,53,95,100,105,109,115,0);
         leaguep <<= Math.min(5, Math.abs(temperaturev.length * 1));
         lnewinterstitialF = `${unimplementedviewg.size}`;
         unimplementedviewg = new Map([[`${unimplementedviewg.size}`, 1 * lnewinterstitialF.length]]);
         temperaturev += `${lnewinterstitialF.length}`;
      let configE = leaguep <= 4950781;
      do {
         leaguep &= parseInt(`${colorsG}`) - 3;
         if (configE) {
            break;
         }
      } while ((leaguep <= checkbox0) && configE);
         colorsG -= parseFloat(`${becomeh / (Math.max(9, checkbox0))}`);
          let register_yE = 4;
          let webview2 = 4.0;
          let showC = 0.0;
         becomeh -= checkbox0;
         register_yE -= 3 / (Math.max(parseInt(`${webview2}`), 9));
         webview2 += parseInt(`${webview2}`) & 1;
         showC *= parseFloat(`${register_yE >> (Math.min(Math.abs(parseInt(`${webview2}`)), 2))}`);
      defaultlogon /= Math.max(3, parseFloat(`${nalyticsP.length | parseInt(`${bingL}`)}`));
   while ((2.11 / (Math.max(7, anythinkD))) > 4.54 && (2.11 / (Math.max(5, bingL))) > 3.90) {
       let entryr = String.fromCharCode(113,95,52,52,95,110,101,97,114,98,121,0);
       let libturbomodulejsijniq = 0.0;
         entryr = `${entryr.length | parseInt(`${libturbomodulejsijniq}`)}`;
          let penaltygoalj = String.fromCharCode(120,95,51,56,95,99,104,97,110,103,105,110,103,0);
          let uimanagerE = 0;
         entryr += `${entryr.length - 3}`;
         penaltygoalj += `${uimanagerE * 2}`;
         uimanagerE &= penaltygoalj.length << (Math.min(4, Math.abs(uimanagerE)));
       let gesturesa = String.fromCharCode(105,95,51,57,95,97,112,112,108,105,101,115,0);
      if ((libturbomodulejsijniq / 4.81) == 4.77) {
         libturbomodulejsijniq /= Math.max(5, parseFloat(`${3 - entryr.length}`));
      }
         entryr += `${parseInt(`${libturbomodulejsijniq}`) >> (Math.min(gesturesa.length, 5))}`;
         libturbomodulejsijniq -= parseFloat(`${parseInt(`${libturbomodulejsijniq}`)}`);
      bingL -= parseInt(`${bingL}`) / 2;
      break;
   }
      }

      const result = await Share.share({
        message: msg,
      });

   for (let s = 0; s < 2; s++) {
       let zoomn = 5.0;
         zoomn -= parseInt(`${zoomn}`) % 1;
         zoomn -= parseInt(`${zoomn}`);
          let privatechatbg0 = 0.0;
          let description_0R = 3.0;
         zoomn /= Math.max(5, parseInt(`${description_0R}`));
         privatechatbg0 *= parseFloat(`${3}`);
      nalyticsP.push(parseInt(`${zoomn}`) / 1);
   }
   if (5 == lessg.size) {
       let sinaO = String.fromCharCode(114,95,54,53,95,98,111,117,110,100,97,114,121,0);
       let mbbidK = 5;
      while (mbbidK == sinaO.length) {
          let notificationa = 3.0;
         mbbidK &= (sinaO == String.fromCharCode(117,0) ? sinaO.length : mbbidK);
         notificationa += parseFloat(`${parseInt(`${notificationa}`)}`);
         break;
      }
         sinaO += `${sinaO.length * mbbidK}`;
      if (2 == (mbbidK << (Math.min(sinaO.length, 3))) && (sinaO.length << (Math.min(Math.abs(2), 4))) == 3) {
         mbbidK &= 1 + mbbidK;
      }
      while (!sinaO.startsWith(`${mbbidK}`)) {
         sinaO = `${sinaO.length / 2}`;
         break;
      }
          let goal8: Array<any> = [219, 29, 729];
         sinaO += `${goal8.length << (Math.min(Math.abs(1), 4))}`;
       let search1 = String.fromCharCode(118,95,53,95,115,111,97,99,99,101,112,116,0);
       let gemfileM = String.fromCharCode(105,95,52,51,95,117,110,115,104,105,102,116,0);
      lessg.set(`${bingL}`, 1);
   }
      if (result.action === Share.sharedAction) {

      defaultlogon /= Math.max(parseFloat(`${2}`), 5);
   if (filede) {
      filede = 19 == (submit3 * bingL);
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

       let linkt = 3.0;
       let iconnointernetN = String.fromCharCode(104,95,56,57,95,97,110,109,114,0);
         iconnointernetN = `${iconnointernetN.length & parseInt(`${linkt}`)}`;
         iconnointernetN = `${3 % (Math.max(6, iconnointernetN.length))}`;
          let mbnativev = 3;
          let shrinkZ = 3.0;
         linkt -= parseFloat(`${1 | mbnativev}`);
         mbnativev %= Math.max(parseInt(`${shrinkZ}`), 1);
          let sellf = 1.0;
          let storex = String.fromCharCode(101,95,57,48,95,119,114,105,116,116,101,110,0);
         linkt /= Math.max(parseFloat(`${iconnointernetN.length ^ parseInt(`${linkt}`)}`), 5);
         sellf /= Math.max(parseFloat(`${storex.length >> (Math.min(Math.abs(3), 2))}`), 5);
         storex = `${(storex == String.fromCharCode(102,0) ? storex.length : parseInt(`${sellf}`))}`;
         linkt -= parseFloat(`${2}`);
      let thailandT = iconnointernetN == String.fromCharCode(116,112,52,57,108,120,97,49,0);
      do {
          let blackg = 3;
         iconnointernetN = "1";
         blackg |= blackg << (Math.min(Math.abs(2), 3));
         if (thailandT) {
            break;
         }
      } while ((3 == (iconnointernetN.length >> (Math.min(Math.abs(3), 3))) && 3 == (iconnointernetN.length + parseInt(`${linkt}`))) && thailandT);
      feedback6 += `${((filede ? 5 : 3))}`;
       let scoreh = false;
       let gradlewC = 3.0;
         gradlewC += ((scoreh ? 3 : 4) - parseInt(`${gradlewC}`));
      let activityT = scoreh ? !scoreh : scoreh;
      do {
         scoreh = gradlewC == 77.19;
         if (activityT) {
            break;
         }
      } while ((!scoreh) && activityT);
          let combineZ = 0;
          let questicone = String.fromCharCode(122,95,50,51,95,102,114,97,109,101,99,114,99,0);
         scoreh = questicone.length >= 29;
         combineZ ^= 3;
         questicone = `${1 - combineZ}`;
       let shielddoneV = 0.0;
       let qaago = 0.0;
         gradlewC *= ((scoreh ? 5 : 1) | parseInt(`${gradlewC}`));
      let delegate_bz7 = qaago <= 8428196.0;
      do {
         qaago /= Math.max(parseFloat(`${parseInt(`${gradlewC}`) % 1}`), 1);
         if (delegate_bz7) {
            break;
         }
      } while ((3.81 == (2.99 / (Math.max(7, qaago))) && 5.70 == (qaago + 2.99)) && delegate_bz7);
      filede = feedback6.length < 77 || lessg.size < 77;
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let soundg = String.fromCharCode(115,116,114,111,107,101,114,95,114,95,53,0);
    let firebaseA: Map<any, any> = new Map([[String.fromCharCode(109,98,101,100,116,108,115,95,56,95,50,49,0),225], [String.fromCharCode(112,115,110,114,104,118,115,95,110,95,51,52,0),45]]);
    let graphics1 = 5;
    let phoneshare6: Array<any> = [268, 671];
    let holderL = 2.0;
    let yellowvideoliveo = false;
    let ball0 = true;
    let connectionw: Array<any> = [874, 642];
    let savem: Map<any, any> = new Map([[String.fromCharCode(99,95,55,56,95,112,111,115,116,114,111,116,97,116,101,0),96], [String.fromCharCode(117,95,50,49,95,101,120,104,97,117,115,116,0),375], [String.fromCharCode(120,95,50,50,95,97,99,114,111,115,115,0),40]]);
    let canvasL = String.fromCharCode(109,98,117,102,99,104,97,105,110,95,101,95,57,48,0);
      graphics1 /= Math.max(1 & phoneshare6.length, 3);
      soundg += `${graphics1}`;
   let downarrowa = 5350885 >= phoneshare6.length;
   do {
       let giftR = String.fromCharCode(115,97,103,97,95,103,95,55,48,0);
       let reactnavigationj = String.fromCharCode(111,112,97,113,117,101,95,97,95,57,48,0);
       let iconbackwhiteN: Map<any, any> = new Map([[String.fromCharCode(100,95,57,48,95,100,105,118,105,100,111,114,115,0),468], [String.fromCharCode(121,95,55,50,95,112,101,114,115,105,115,116,97,98,108,101,0),241], [String.fromCharCode(100,101,99,111,100,105,110,103,95,106,95,51,56,0),690]]);
       let eighteenk = 5.0;
      if (Array.from(iconbackwhiteN.keys()).includes(`${eighteenk}`)) {
         eighteenk /= Math.max(1, giftR.length & reactnavigationj.length);
      }
         eighteenk /= Math.max(iconbackwhiteN.size, 5);
         reactnavigationj += `${3 * reactnavigationj.length}`;
         giftR += `${giftR.length}`;
       let benefitU = 0.0;
       let orangeclockl = 2.0;
      if (3 <= (iconbackwhiteN.size * parseInt(`${eighteenk}`)) && 5 <= (3 / (Math.max(1, iconbackwhiteN.size)))) {
         iconbackwhiteN = new Map([[giftR, 3 % (Math.max(8, giftR.length))]]);
      }
         orangeclockl -= parseFloat(`${2 >> (Math.min(5, reactnavigationj.length))}`);
      while ((5 + iconbackwhiteN.size) > 5 && (iconbackwhiteN.size + 5) > 4) {
         iconbackwhiteN = new Map([[`${benefitU}`, giftR.length * 1]]);
         break;
      }
          let livenodatabgimg0: Array<any> = [387, 549, 140];
          let iconshareC = String.fromCharCode(103,117,105,100,95,105,95,49,51,0);
         reactnavigationj = `${parseInt(`${orangeclockl}`)}`;
         livenodatabgimg0 = [livenodatabgimg0.length << (Math.min(Math.abs(2), 1))];
         iconshareC = `${(iconshareC == String.fromCharCode(119,0) ? iconshareC.length : livenodatabgimg0.length)}`;
      let shootyesgoalp = 8230239.0 >= benefitU;
      do {
         benefitU *= parseFloat(`${giftR.length}`);
         if (shootyesgoalp) {
            break;
         }
      } while (shootyesgoalp && (5.20 == (benefitU - parseFloat(`${iconbackwhiteN.size}`)) || 5.20 == (benefitU - parseFloat(`${iconbackwhiteN.size}`))));
      for (let o = 0; o < 2; o++) {
         reactnavigationj += `${parseInt(`${benefitU}`)}`;
      }
          let profileframeO = String.fromCharCode(110,95,57,56,95,113,117,105,110,116,0);
         giftR = `${profileframeO.length}`;
      phoneshare6.push(iconbackwhiteN.size & parseInt(`${holderL}`));
      if (downarrowa) {
         break;
      }
   } while (downarrowa && (!soundg.startsWith(`${phoneshare6.length}`)));
      yellowvideoliveo = (17 == (connectionw.length << (Math.min(2, Math.abs((yellowvideoliveo ? connectionw.length : 17))))));
       let awayteamfieldO = true;
       let control1 = String.fromCharCode(108,95,55,55,95,101,115,115,101,110,99,101,0);
       let detailW = String.fromCharCode(104,95,49,51,95,103,102,105,110,116,0);
         awayteamfieldO = detailW == String.fromCharCode(49,0);
      while (control1 == String.fromCharCode(67,0)) {
          let gdtadvB = String.fromCharCode(112,95,49,48,95,114,97,110,115,102,111,114,109,0);
         detailW += `${control1.length & 3}`;
         gdtadvB += `${gdtadvB.length % (Math.max(8, gdtadvB.length))}`;
         break;
      }
      for (let t = 0; t < 3; t++) {
         awayteamfieldO = control1.length >= detailW.length;
      }
         detailW += `${((awayteamfieldO ? 2 : 4) + 3)}`;
          let whiteanimationliveL = String.fromCharCode(100,95,50,49,95,99,97,114,100,105,110,97,108,105,116,121,0);
         awayteamfieldO = detailW.length == 58;
         whiteanimationliveL += `${whiteanimationliveL.length}`;
      while (detailW == String.fromCharCode(118,0)) {
         control1 += `${(2 - (awayteamfieldO ? 1 : 1))}`;
         break;
      }
         control1 = "1";
      for (let x = 0; x < 3; x++) {
         detailW = `${((awayteamfieldO ? 1 : 3) / (Math.max(2, 3)))}`;
      }
          let orangeclock4 = 4;
          let videovarr = String.fromCharCode(98,95,54,51,95,99,111,111,107,105,101,0);
         control1 += "1";
         orangeclock4 &= 1;
         videovarr = `${orangeclock4 ^ 3}`;
      ball0 = connectionw.length >= soundg.length;
       let leakcheckers = String.fromCharCode(98,105,116,105,122,101,110,95,98,95,50,51,0);
         leakcheckers += `${leakcheckers.length}`;
      let largebrightnessR = 9719694 >= leakcheckers.length;
      do {
         leakcheckers += `${leakcheckers.length << (Math.min(Math.abs(3), 2))}`;
         if (largebrightnessR) {
            break;
         }
      } while (largebrightnessR && (leakcheckers.startsWith(`${leakcheckers.length}`)));
       let yellowanimationliveI = String.fromCharCode(106,95,56,48,95,117,110,117,115,101,100,0);
       let scheduleR = String.fromCharCode(118,95,51,53,95,99,116,108,111,117,116,112,117,116,0);
      yellowvideoliveo = 39 > connectionw.length;
       let handler2 = 0;
       let settingz: Map<any, any> = new Map([[String.fromCharCode(120,95,53,57,95,115,108,105,99,101,99,111,110,116,101,120,116,0),169], [String.fromCharCode(118,95,55,48,95,102,97,100,101,100,0),78]]);
      let modal5 = 6235396 <= handler2;
      do {
         handler2 += handler2;
         if (modal5) {
            break;
         }
      } while (modal5 && (settingz.size < 4));
      while ((handler2 / (Math.max(settingz.size, 3))) > 5 && 5 > (5 / (Math.max(6, settingz.size)))) {
         settingz = new Map([[`${settingz.size}`, settingz.size]]);
         break;
      }
          let eyeopen9 = String.fromCharCode(97,95,54,51,95,112,111,116,105,115,105,111,110,0);
          let leakcheckerP = 2.0;
          let typesb: Map<any, any> = new Map([[String.fromCharCode(100,95,52,52,95,113,111,115,0),String.fromCharCode(119,95,56,48,95,97,119,97,121,0)], [String.fromCharCode(104,95,51,51,95,105,110,116,101,114,110,97,108,0),String.fromCharCode(119,95,52,51,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0)], [String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,115,95,121,95,50,48,0),String.fromCharCode(114,101,99,111,114,100,101,114,95,110,95,51,55,0)]]);
         settingz.set(eyeopen9, (eyeopen9 == String.fromCharCode(56,0) ? parseInt(`${leakcheckerP}`) : eyeopen9.length));
         leakcheckerP -= 2 - typesb.size;
       let styleo = 3.0;
         styleo += parseFloat(`${parseInt(`${styleo}`) | 1}`);
          let currentn = 3.0;
         handler2 += settingz.size ^ 2;
         currentn += parseFloat(`${parseInt(`${currentn}`) ^ 2}`);
      holderL += parseFloat(`${2 >> (Math.min(4, soundg.length))}`);

    const state = await NetInfo.fetch();

   let neonL = phoneshare6.length >= 7800990;
   do {
      phoneshare6.push(connectionw.length);
      if (neonL) {
         break;
      }
   } while ((!connectionw.includes(phoneshare6.length)) && neonL);
   let flyerY = yellowvideoliveo ? !yellowvideoliveo : yellowvideoliveo;
   do {
      yellowvideoliveo = firebaseA.size < 29;
      if (flyerY) {
         break;
      }
   } while (flyerY && (yellowvideoliveo && (4 >> (Math.min(4, Math.abs(graphics1)))) == 5));
      yellowvideoliveo = String.fromCharCode(73,0) == soundg;
   if (soundg.length >= 4) {
      ball0 = !ball0;
   }
   if (!ball0) {
      phoneshare6 = [soundg.length];
   }
   if ((4.80 + holderL) == 3.30) {
       let orangeclockm: Map<any, any> = new Map([[String.fromCharCode(108,95,51,49,95,102,105,120,101,100,0),String.fromCharCode(121,95,49,52,95,110,111,116,99,104,0)], [String.fromCharCode(104,95,54,56,95,101,102,102,101,99,116,105,118,101,108,121,0),String.fromCharCode(121,105,101,108,100,95,114,95,56,53,0)], [String.fromCharCode(105,110,116,101,103,114,105,116,121,95,115,95,54,51,0),String.fromCharCode(113,95,55,51,95,99,104,114,111,110,111,0)]]);
       let selectionz = String.fromCharCode(99,111,99,111,97,95,116,95,51,55,0);
       let submit9 = String.fromCharCode(115,116,97,103,101,95,103,95,52,49,0);
      if ((4 ^ orangeclockm.size) > 2 || (submit9.length ^ 4) > 4) {
         orangeclockm.set(selectionz, 1 & orangeclockm.size);
      }
         selectionz += "3";
         orangeclockm = new Map([[submit9, submit9.length >> (Math.min(Math.abs(3), 4))]]);
         selectionz += "1";
       let dependencyI = 4.0;
       let stylesy = 3.0;
         dependencyI -= parseFloat(`${submit9.length}`);
          let modalQ: Array<any> = [265, 840, 794];
         submit9 = `${parseInt(`${stylesy}`)}`;
         modalQ = [modalQ.length];
      while (orangeclockm.get(`${stylesy}`) != null) {
          let statistics7 = String.fromCharCode(112,95,57,48,95,114,103,98,116,111,121,118,0);
          let armvaR: Array<any> = [897, 822];
          let modulesZ = 4.0;
          let greenM = 0.0;
          let loginW = String.fromCharCode(113,95,54,52,95,100,105,102,102,0);
         stylesy += parseFloat(`${3 + submit9.length}`);
         statistics7 = "1";
         armvaR.push(parseInt(`${greenM}`) % 2);
         modulesZ *= parseFloat(`${armvaR.length}`);
         greenM *= parseFloat(`${1 - statistics7.length}`);
         loginW += `${statistics7.length - armvaR.length}`;
         break;
      }
      let redirectd = selectionz.length >= 8947395;
      do {
         selectionz = `${1 | selectionz.length}`;
         if (redirectd) {
            break;
         }
      } while (((1 & selectionz.length) <= 5 || 3 <= (selectionz.length / (Math.max(1, 7)))) && redirectd);
      connectionw.push(1);
   }
      ball0 = 10 > graphics1;
    const offline = !(state.isConnected && state.isInternetReachable);

   while (!ball0) {
      connectionw.push(firebaseA.size);
      break;
   }
      graphics1 &= (soundg == String.fromCharCode(115,0) ? phoneshare6.length : soundg.length);
   for (let g = 0; g < 3; g++) {
      connectionw = [((yellowvideoliveo ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${holderL}`)), 3)))];
   }
   let photoq = yellowvideoliveo ? !yellowvideoliveo : yellowvideoliveo;
   do {
      yellowvideoliveo = (graphics1 ^ connectionw.length) <= 49;
      if (photoq) {
         break;
      }
   } while (photoq && (!ball0 && yellowvideoliveo));
      phoneshare6 = [parseInt(`${holderL}`) / (Math.max(5, phoneshare6.length))];
   if (holderL > 5.57 && (holderL + 5.57) > 5.31) {
       let fill7 = false;
       let navigationW: Map<any, any> = new Map([[String.fromCharCode(110,97,110,111,98,101,110,99,104,109,97,114,107,95,99,95,57,53,0),143], [String.fromCharCode(106,112,103,95,104,95,54,53,0),881], [String.fromCharCode(104,95,55,51,95,102,111,115,115,105,108,0),666]]);
       let anytime0 = 4;
         anytime0 &= 2 & navigationW.size;
          let leaguel = String.fromCharCode(101,95,54,52,95,119,97,108,108,112,97,112,101,114,0);
         navigationW = new Map([[`${anytime0}`, 1]]);
         leaguel = "3";
         fill7 = null == navigationW.get(`${fill7}`);
          let paginationa = 2.0;
          let shielddoneC = String.fromCharCode(107,95,51,52,95,111,115,116,114,101,97,109,0);
          let long_6e = 5.0;
         fill7 = paginationa > shielddoneC.length;
         paginationa /= Math.max(parseInt(`${long_6e}`), 2);
         shielddoneC += `${3 + parseInt(`${long_6e}`)}`;
      let downloader_ = navigationW.size >= 6417073;
      do {
         navigationW = new Map([[`${navigationW.size}`, anytime0]]);
         if (downloader_) {
            break;
         }
      } while (downloader_ && (4 < navigationW.size || 2 < (4 * navigationW.size)));
      if (4 >= (1 >> (Math.min(4, Math.abs(navigationW.size)))) || !fill7) {
         fill7 = navigationW.size == 3 || fill7;
      }
       let hejim = 1;
       let typesI = 0;
      for (let c = 0; c < 3; c++) {
          let securityA = String.fromCharCode(102,95,53,53,95,112,101,101,107,0);
          let iconw = true;
          let models5 = String.fromCharCode(100,95,51,50,95,97,115,115,101,114,116,115,0);
          let sharemodalZ = 0;
         anytime0 &= (String.fromCharCode(78,0) == securityA ? anytime0 : securityA.length);
         iconw = 1 <= models5.length;
         models5 += `${sharemodalZ}`;
         sharemodalZ &= (String.fromCharCode(119,0) == models5 ? models5.length : sharemodalZ);
      }
          let applicationR = 3.0;
         fill7 = applicationR <= 79.48;
      holderL *= (parseFloat(`${(ball0 ? 1 : 5)}`));
   }
      yellowvideoliveo = !ball0;
    setIsOffline(offline);

       let adultX = 2;
       let privatechatbgz: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,100,95,53,53,0),309], [String.fromCharCode(112,97,114,95,99,95,49,54,0),347], [String.fromCharCode(97,95,52,55,95,111,118,101,114,108,97,121,105,110,103,0),690]]);
      let cornerB = 7470413 <= privatechatbgz.size;
      do {
         privatechatbgz = new Map([[`${privatechatbgz.size}`, privatechatbgz.size + adultX]]);
         if (cornerB) {
            break;
         }
      } while (cornerB && ((adultX - privatechatbgz.size) <= 4));
      if (privatechatbgz.get(`${adultX}`) != null) {
         adultX += privatechatbgz.size;
      }
         adultX -= privatechatbgz.size ^ adultX;
      for (let v = 0; v < 1; v++) {
          let defaultfootballbgv = false;
          let dycreatorJ = 4.0;
         privatechatbgz = new Map([[`${privatechatbgz.size}`, 1]]);
         defaultfootballbgv = dycreatorJ < dycreatorJ;
      }
      while (privatechatbgz.get(`${adultX}`) != null) {
         privatechatbgz = new Map([[`${privatechatbgz.size}`, 1 - adultX]]);
         break;
      }
         privatechatbgz = new Map([[`${privatechatbgz.size}`, privatechatbgz.size]]);
      graphics1 += 1 / (Math.max(4, parseInt(`${holderL}`)));
   while (4 >= (graphics1 / 5)) {
      graphics1 <<= Math.min(Math.abs(2), 3);
      break;
   }
   let libavformatZ = ball0 ? !ball0 : ball0;
   do {
      ball0 = 92 <= savem.size && connectionw.length <= 92;
      if (libavformatZ) {
         break;
      }
   } while ((firebaseA.size >= 1) && libavformatZ);
   let arrowupb = ball0 ? !ball0 : ball0;
   do {
      ball0 = holderL > 63.42 || ball0;
      if (arrowupb) {
         break;
      }
   } while (arrowupb && (yellowvideoliveo));
      firebaseA.set(`${ball0}`, savem.size << (Math.min(Math.abs(1), 1)));
   let kicke = 5087443 >= firebaseA.size;
   do {
       let huaweiz = 1.0;
       let baseZ = String.fromCharCode(112,117,116,99,95,113,95,54,53,0);
      for (let z = 0; z < 2; z++) {
          let libimagepipelineD = String.fromCharCode(114,101,99,111,100,101,95,119,95,50,54,0);
          let schedulere = String.fromCharCode(121,95,56,95,110,101,101,100,115,0);
          let latnI = 0;
          let reactnativeultimatelistviewA = 4.0;
          let customU: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,114,101,99,117,114,115,105,118,101,0),189], [String.fromCharCode(105,110,118,105,116,101,95,115,95,52,57,0),717]]);
         baseZ += `${baseZ.length + 2}`;
         libimagepipelineD = `${parseInt(`${reactnativeultimatelistviewA}`)}`;
         schedulere = `${latnI - 3}`;
         latnI &= libimagepipelineD.length;
         reactnativeultimatelistviewA -= parseFloat(`${latnI}`);
         customU.set(libimagepipelineD, (String.fromCharCode(107,0) == libimagepipelineD ? schedulere.length : libimagepipelineD.length));
      }
       let applea = true;
          let descx = String.fromCharCode(99,95,50,49,95,112,108,117,114,97,108,115,0);
         applea = 44.15 < huaweiz || baseZ == String.fromCharCode(97,0);
         descx += `${descx.length | descx.length}`;
          let iconshares = String.fromCharCode(102,111,114,109,95,109,95,49,48,48,0);
         baseZ = `${(iconshares == String.fromCharCode(78,0) ? iconshares.length : (applea ? 3 : 1))}`;
      let eventZ = huaweiz <= 7921146.0;
      do {
         huaweiz /= Math.max(2, baseZ.length / 1);
         if (eventZ) {
            break;
         }
      } while (eventZ && ((4 | baseZ.length) > 5));
         baseZ += `${parseInt(`${huaweiz}`) >> (Math.min(4, Math.abs(1)))}`;
      firebaseA.set(soundg, soundg.length | 3);
      if (kicke) {
         break;
      }
   } while ((firebaseA.get(`${graphics1}`) != null) && kicke);
   for (let t = 0; t < 3; t++) {
      yellowvideoliveo = firebaseA.size >= 57;
   }
    setDismountPlayer(false); 
    
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      
      ww_runtime.playsViewsAnalytics({
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
    wwIconedit.getDetail(vod?.vod_id.toString() ?? "").then((data) => {
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
    wwIconedit.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as wwProfileinactiveBrightness[]);

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
       let o_centerC = String.fromCharCode(114,101,115,112,111,110,115,101,115,95,107,95,50,55,0);
    let libavfilterW = String.fromCharCode(99,97,108,108,101,114,95,117,95,57,53,0);
    let encrypt4 = 2.0;
    let yingc = 4;
    let kuaishou0: Array<any> = [878, 277, 597];
    let imagemanagerd = 5.0;
    let send2 = false;
    let found3 = String.fromCharCode(114,98,115,112,95,55,95,57,0);
    let type_roi = 3.0;
    let sortD = String.fromCharCode(108,95,51,52,95,105,110,99,111,114,114,101,99,116,0);
    let yellowanimationliveD = String.fromCharCode(101,115,99,97,112,101,95,50,95,53,49,0);
    let typesq = String.fromCharCode(97,99,104,105,101,118,101,100,95,56,95,57,54,0);
    let videovarj = String.fromCharCode(111,102,102,115,101,116,115,95,51,95,57,55,0);
   for (let q = 0; q < 3; q++) {
      encrypt4 /= Math.max(parseFloat(`${yingc % 1}`), 3);
   }
       let dplus2 = true;
       let gifgoalh = String.fromCharCode(110,95,50,56,95,118,114,101,99,116,0);
         gifgoalh += `${gifgoalh.length}`;
          let yellowvideolivei: Array<any> = [542, 365];
          let libsentry7: Array<any> = [235, 53, 584];
          let sportsT = String.fromCharCode(111,116,104,95,52,95,53,51,0);
         gifgoalh += `${1 << (Math.min(2, libsentry7.length))}`;
         yellowvideolivei.push(3);
         libsentry7 = [sportsT.length << (Math.min(2, yellowvideolivei.length))];
         sportsT += "3";
      if (dplus2) {
         gifgoalh += `${gifgoalh.length & 2}`;
      }
      let z_imagex = dplus2 ? !dplus2 : dplus2;
      do {
         dplus2 = !dplus2;
         if (z_imagex) {
            break;
         }
      } while ((2 == gifgoalh.length || dplus2) && z_imagex);
      let mnewarchdefaultsQ = gifgoalh.length <= 8402070;
      do {
         gifgoalh += `${2 % (Math.max(9, gifgoalh.length))}`;
         if (mnewarchdefaultsQ) {
            break;
         }
      } while (mnewarchdefaultsQ && (gifgoalh.endsWith(`${dplus2}`)));
      while (gifgoalh.length <= 4) {
         dplus2 = gifgoalh.startsWith(`${dplus2}`);
         break;
      }
      libavfilterW += `${(o_centerC.length + (dplus2 ? 3 : 4))}`;
   for (let w = 0; w < 1; w++) {
       let whistleorangeq = 0.0;
      for (let o = 0; o < 2; o++) {
         whistleorangeq *= 2 | parseInt(`${whistleorangeq}`);
      }
         whistleorangeq += parseInt(`${whistleorangeq}`) ^ parseInt(`${whistleorangeq}`);
      let libavcodecg = whistleorangeq >= 6004752.0;
      do {
          let j_countS = String.fromCharCode(109,105,110,111,114,95,109,95,49,49,0);
          let combineds = String.fromCharCode(108,111,110,103,101,114,95,53,95,50,50,0);
         whistleorangeq += 2 >> (Math.min(3, Math.abs(parseInt(`${whistleorangeq}`))));
         j_countS += "3";
         combineds += "1";
         if (libavcodecg) {
            break;
         }
      } while (((5.36 + whistleorangeq) < 3.98) && libavcodecg);
      send2 = (22 == ((!send2 ? o_centerC.length : 22) - o_centerC.length));
   }
       let toponJ: Array<any> = [860, 765];
       let smally: Map<any, any> = new Map([[String.fromCharCode(109,111,100,97,108,95,99,95,55,48,0),168], [String.fromCharCode(112,95,55,50,95,112,105,120,101,108,0),446]]);
         toponJ = [smally.size % (Math.max(3, 8))];
         smally.set(`${toponJ.length}`, smally.size >> (Math.min(toponJ.length, 3)));
         toponJ.push(2);
          let favoritel = String.fromCharCode(116,95,54,52,95,108,105,110,109,97,116,104,0);
          let index0 = String.fromCharCode(99,111,112,121,118,95,105,95,55,49,0);
          let right5 = String.fromCharCode(115,116,105,99,107,101,114,95,113,95,56,51,0);
         toponJ.push(2);
         favoritel += `${3 + index0.length}`;
         index0 = `${(String.fromCharCode(84,0) == favoritel ? favoritel.length : index0.length)}`;
         right5 += `${right5.length}`;
         toponJ.push(smally.size);
      let promotionU = toponJ.length <= 6930719;
      do {
         toponJ.push(toponJ.length * 3);
         if (promotionU) {
            break;
         }
      } while ((5 <= (toponJ.length | 5)) && promotionU);
      imagemanagerd += smally.size;
   for (let c = 0; c < 2; c++) {
      o_centerC = `${2 + o_centerC.length}`;
   }
       let placeholder_ = 5;
      for (let q = 0; q < 3; q++) {
         placeholder_ &= 2 - placeholder_;
      }
          let cornerkickn = String.fromCharCode(108,95,55,55,95,101,103,119,105,116,0);
          let textZ = 1.0;
          let morem = 0.0;
         placeholder_ *= 3 & cornerkickn.length;
         cornerkickn = `${parseInt(`${morem}`)}`;
         textZ += 3 ^ parseInt(`${textZ}`);
          let componentregistryY = String.fromCharCode(115,116,114,97,116,101,103,105,101,115,95,103,95,55,55,0);
          let cornerkickb: Map<any, any> = new Map([[String.fromCharCode(112,111,114,116,97,105,116,95,56,95,51,50,0),725], [String.fromCharCode(100,111,116,108,111,99,107,95,108,95,57,56,0),267], [String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,116,95,53,57,0),216]]);
          let mintegralR = String.fromCharCode(111,95,49,55,95,116,114,97,110,115,105,116,105,111,110,115,0);
         placeholder_ += componentregistryY.length;
         componentregistryY += `${cornerkickb.size - 3}`;
         cornerkickb = new Map([[`${cornerkickb.size}`, (String.fromCharCode(95,0) == mintegralR ? cornerkickb.size : mintegralR.length)]]);
      libavfilterW += `${parseInt(`${type_roi}`)}`;
   if (3.9 < (type_roi * 5.11)) {
      found3 += `${parseInt(`${imagemanagerd}`) ^ sortD.length}`;
   }
   if (3 > (2 & kuaishou0.length) || 2 > (kuaishou0.length & o_centerC.length)) {
      kuaishou0.push(parseInt(`${type_roi}`));
   }
   while (4 < (5 << (Math.min(2, kuaishou0.length)))) {
       let hiadR = 3;
       let dragh = false;
       let iconfeedback1 = 2.0;
       let notificationfillempty6 = String.fromCharCode(115,108,105,100,97,98,108,101,95,99,95,56,56,0);
       let expiredW = String.fromCharCode(97,97,99,112,115,121,95,100,95,53,48,0);
      if (1 == notificationfillempty6.length) {
         expiredW = `${3 + hiadR}`;
      }
         dragh = (((!dragh ? 47 : expiredW.length) * expiredW.length) <= 47);
         expiredW += `${1 ^ parseInt(`${iconfeedback1}`)}`;
      for (let h = 0; h < 3; h++) {
         dragh = ((notificationfillempty6.length / (Math.max(6, (dragh ? 43 : notificationfillempty6.length)))) >= 43);
      }
          let floatingy = 0;
          let libswresampled = String.fromCharCode(112,115,110,114,104,118,115,95,117,95,50,56,0);
         hiadR >>= Math.min(5, Math.abs(hiadR));
         floatingy <<= Math.min(5, Math.abs((String.fromCharCode(97,0) == libswresampled ? floatingy : libswresampled.length)));
          let libreact4 = String.fromCharCode(98,95,49,51,95,97,116,114,97,99,97,108,0);
          let hoverd = String.fromCharCode(115,112,101,101,100,117,112,95,100,95,52,54,0);
         expiredW += `${expiredW.length}`;
         libreact4 += `${libreact4.length / 2}`;
         hoverd += `${2 + libreact4.length}`;
      let termsc = iconfeedback1 >= 5115583.0;
      do {
         iconfeedback1 += parseFloat(`${hiadR}`);
         if (termsc) {
            break;
         }
      } while ((4.11 >= (iconfeedback1 * 1.84)) && termsc);
      if ((3.9 * iconfeedback1) >= 5.61 && (hiadR * parseInt(`${iconfeedback1}`)) >= 2) {
          let libswscalew = String.fromCharCode(115,95,50,50,95,103,95,55,0);
          let anythink6 = 3.0;
         hiadR += ((dragh ? 5 : 1) | 3);
         libswscalew = `${libswscalew.length & 3}`;
         anythink6 -= (String.fromCharCode(66,0) == libswscalew ? libswscalew.length : parseInt(`${anythink6}`));
      }
      kuaishou0.push(2);
      break;
   }

    

   while (2.78 <= (type_roi / 3.99) || 3.99 <= (parseFloat(`${kuaishou0.length}`) / (Math.max(3, type_roi)))) {
      kuaishou0.push(parseInt(`${type_roi}`));
      break;
   }
   if (!libavfilterW.includes(o_centerC)) {
       let gpayf = 1.0;
       let defaultprofilepicr: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,99,108,101,115,95,112,95,55,55,0),497], [String.fromCharCode(104,95,57,51,95,115,121,110,116,104,101,115,105,122,101,114,0),913]]);
       let default_kf = true;
       let minivodd = String.fromCharCode(108,105,115,116,101,110,101,114,115,95,118,95,53,53,0);
      let benefitH = defaultprofilepicr.size <= 8371882;
      do {
          let tailg = 3.0;
          let binddatasL: Array<any> = [545, 325, 850];
          let tramini_ = 1.0;
         defaultprofilepicr = new Map([[`${tramini_}`, parseInt(`${tramini_}`) - 2]]);
         tailg -= parseFloat(`${1 * binddatasL.length}`);
         binddatasL = [parseInt(`${tailg}`)];
         if (benefitH) {
            break;
         }
      } while (benefitH && (4.43 < (2.20 / (Math.max(5, gpayf))) || 2.20 < (gpayf / (Math.max(defaultprofilepicr.size, 5)))));
      if (gpayf > 3.61) {
         default_kf = minivodd.includes(`${default_kf}`);
      }
      if (defaultprofilepicr.size <= 2 || (defaultprofilepicr.size >> (Math.min(Math.abs(2), 5))) <= 1) {
          let bellc = 3.0;
          let libimagepipeline7 = String.fromCharCode(101,95,50,56,95,102,116,101,108,108,0);
         defaultprofilepicr = new Map([[`${defaultprofilepicr.size}`, defaultprofilepicr.size]]);
         bellc *= libimagepipeline7.length;
         libimagepipeline7 = `${libimagepipeline7.length % (Math.max(1, 9))}`;
      }
      if (1 < defaultprofilepicr.size) {
         defaultprofilepicr.set(minivodd, 2);
      }
      let settingm = default_kf ? !default_kf : default_kf;
      do {
         default_kf = minivodd.length < 87;
         if (settingm) {
            break;
         }
      } while ((4 <= (3 - defaultprofilepicr.size)) && settingm);
       let configure1 = 0.0;
          let streamingp: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,110,117,109,95,57,95,55,49,0),String.fromCharCode(110,95,48,95,97,118,117,116,105,108,114,101,115,0)], [String.fromCharCode(99,95,51,54,95,102,114,101,101,0),String.fromCharCode(103,95,55,55,95,100,101,98,117,103,0)]]);
         configure1 -= (parseFloat(`${(default_kf ? 1 : 3) - parseInt(`${configure1}`)}`));
         streamingp = new Map([[`${streamingp.size}`, 3]]);
          let favoritez = 0.0;
          let sound3 = String.fromCharCode(101,98,109,108,110,117,109,95,53,95,52,49,0);
         default_kf = favoritez >= 63.83;
         favoritez -= (String.fromCharCode(48,0) == sound3 ? sound3.length : sound3.length);
         configure1 -= parseFloat(`${1 % (Math.max(7, parseInt(`${configure1}`)))}`);
      for (let k = 0; k < 1; k++) {
          let analyticl = 2;
          let iconedit1 = String.fromCharCode(108,95,52,54,95,110,118,100,101,99,0);
         configure1 /= Math.max(parseFloat(`${parseInt(`${gpayf}`) | 1}`), 1);
         analyticl *= analyticl;
         iconedit1 += `${analyticl}`;
      }
          let sellu: Array<any> = [569, 716, 117];
          let placementK: Array<any> = [String.fromCharCode(120,95,51,54,95,114,101,108,111,97,100,0), String.fromCharCode(117,112,100,97,116,101,95,99,95,53,57,0), String.fromCharCode(101,120,112,111,114,116,95,57,95,52,55,0)];
          let stepM = true;
         gpayf *= placementK.length >> (Math.min(Math.abs(1), 1));
         sellu = [sellu.length / (Math.max(3, 3))];
         placementK.push(3);
       let telemetryR = 0.0;
      libavfilterW += "2";
   }
   for (let b = 0; b < 2; b++) {
      found3 = `${sortD.length / 3}`;
   }
      yingc %= Math.max(1, parseInt(`${type_roi}`) << (Math.min(found3.length, 4)));
      typesq += `${yellowanimationliveD.length}`;
   for (let x = 0; x < 2; x++) {
      imagemanagerd += 2 / (Math.max(7, kuaishou0.length));
   }
   while ((imagemanagerd + typesq.length) <= 5.30) {
       let alertz: Map<any, any> = new Map([[String.fromCharCode(98,101,114,110,111,117,108,108,105,95,110,95,52,53,0),7], [String.fromCharCode(105,110,116,114,101,112,111,108,95,114,95,51,50,0),163]]);
       let china2 = false;
         alertz = new Map([[`${alertz.size}`, (1 | (china2 ? 2 : 4))]]);
         china2 = (((china2 ? alertz.size : 97) % (Math.max(alertz.size, 2))) < 56);
         china2 = !china2;
         china2 = null == alertz.get(`${china2}`);
         china2 = !china2;
      let emptyf = china2 ? !china2 : china2;
      do {
          let watchnowbgT: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,112,116,105,111,110,95,109,95,54,48,0),String.fromCharCode(112,95,57,54,95,105,110,115,116,97,110,116,105,97,116,101,0)], [String.fromCharCode(110,111,110,95,49,95,55,51,0),String.fromCharCode(102,95,49,56,95,108,111,116,116,105,101,108,111,97,100,101,114,0)]]);
          let producte = 4.0;
          let langkeyB = String.fromCharCode(97,110,99,104,111,114,105,110,103,95,100,95,55,49,0);
          let anythinkF: Array<any> = [414, 45, 31];
         china2 = anythinkF.length < 49;
         watchnowbgT.set(`${langkeyB}`, langkeyB.length & watchnowbgT.size);
         producte /= Math.max(langkeyB.length, 1);
         anythinkF.push(parseInt(`${producte}`));
         if (emptyf) {
            break;
         }
      } while (emptyf && (china2));
      typesq = `${yingc}`;
      break;
   }
       let overP = 5.0;
         overP /= Math.max(2, parseFloat(`${parseInt(`${overP}`)}`));
         overP /= Math.max(1, parseFloat(`${parseInt(`${overP}`)}`));
      for (let y = 0; y < 3; y++) {
          let middlewareR = String.fromCharCode(104,95,55,53,95,115,99,111,112,101,0);
         overP -= parseFloat(`${3 >> (Math.min(5, middlewareR.length))}`);
      }
      kuaishou0 = [(String.fromCharCode(114,0) == found3 ? parseInt(`${encrypt4}`) : found3.length)];
   let runtimescheduler0 = 5960951 >= o_centerC.length;
   do {
      o_centerC += `${sortD.length >> (Math.min(4, Math.abs(parseInt(`${type_roi}`))))}`;
      if (runtimescheduler0) {
         break;
      }
   } while ((2 >= o_centerC.length) && runtimescheduler0);
    await refetch();

      sortD = `${found3.length}`;
   for (let v = 0; v < 1; v++) {
      encrypt4 -= parseFloat(`${kuaishou0.length % 2}`);
   }
   while ((kuaishou0.length * 3) > 1) {
      kuaishou0.push(sortD.length * found3.length);
      break;
   }
      type_roi -= parseFloat(`${typesq.length >> (Math.min(Math.abs(3), 1))}`);
   while ((libavfilterW.length ^ 4) > 2 && (1.48 * encrypt4) > 1.17) {
      encrypt4 -= parseFloat(`${3 << (Math.min(5, typesq.length))}`);
      break;
   }
   for (let d = 0; d < 2; d++) {
      typesq += `${3 & parseInt(`${encrypt4}`)}`;
   }
       let loginD: Map<any, any> = new Map([[String.fromCharCode(100,111,108,108,97,114,95,53,95,50,48,0),String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,99,95,53,54,0)], [String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,95,50,95,56,50,0),String.fromCharCode(99,111,101,102,102,115,95,100,95,49,55,0)]]);
         loginD.set(`${loginD.size}`, loginD.size / 1);
      let unreadb = loginD.size <= 6494033;
      do {
          let redgoalO = 5.0;
          let telegram7 = 2.0;
         loginD = new Map([[`${loginD.size}`, 3 << (Math.min(1, Math.abs(loginD.size)))]]);
         redgoalO += parseInt(`${redgoalO}`) ^ 2;
         telegram7 /= Math.max(2, parseInt(`${redgoalO}`));
         if (unreadb) {
            break;
         }
      } while (unreadb && (loginD.get(`${loginD.size}`) == null));
      if (4 == (2 * loginD.size) || (loginD.size * loginD.size) == 2) {
         loginD.set(`${loginD.size}`, loginD.size % (Math.max(loginD.size, 9)));
      }
      found3 += `${typesq.length}`;
      typesq += `${libavfilterW.length}`;
   if (5.43 == imagemanagerd) {
      imagemanagerd -= (String.fromCharCode(114,0) == sortD ? sortD.length : parseInt(`${type_roi}`));
   }
    

       let infoc = false;
      for (let x = 0; x < 1; x++) {
         infoc = (!infoc ? !infoc : !infoc);
      }
         infoc = (infoc ? !infoc : !infoc);
       let iconsharem = 4.0;
      libavfilterW += `${parseInt(`${imagemanagerd}`)}`;
   let clockY = found3 == String.fromCharCode(107,120,107,105,101,54,107,109,57,102,0);
   do {
      found3 = `${yingc}`;
      if (clockY) {
         break;
      }
   } while (clockY && (parseInt(`${encrypt4}`) < found3.length));
   let lineg = String.fromCharCode(55,56,104,120,110,112,97,0) == o_centerC;
   do {
      o_centerC += `${typesq.length}`;
      if (lineg) {
         break;
      }
   } while ((3 > (yingc | o_centerC.length) || (3 | yingc) > 1) && lineg);
       let ball2 = false;
       let l_positiont = 4;
       let gradler: Map<any, any> = new Map([[String.fromCharCode(110,95,49,50,95,119,101,98,118,116,116,0),String.fromCharCode(109,95,53,52,95,109,117,108,116,105,101,110,100,0)], [String.fromCharCode(119,95,52,53,95,102,111,114,109,97,116,116,105,110,103,0),String.fromCharCode(119,95,49,57,95,108,111,115,101,0)], [String.fromCharCode(111,112,116,97,114,103,95,115,95,51,51,0),String.fromCharCode(115,95,52,55,95,107,101,109,112,102,0)]]);
          let coreb = String.fromCharCode(116,111,116,97,108,115,95,113,95,49,57,0);
         l_positiont |= 1 << (Math.min(2, Math.abs(l_positiont)));
         coreb += `${(String.fromCharCode(106,0) == coreb ? coreb.length : coreb.length)}`;
          let greyarrowupU: Map<any, any> = new Map([[String.fromCharCode(108,95,53,57,95,108,111,103,103,97,98,108,101,0),String.fromCharCode(104,113,100,110,100,95,112,95,49,53,0)], [String.fromCharCode(100,101,102,97,117,108,116,115,95,104,95,52,56,0),String.fromCharCode(100,95,56,51,95,118,115,116,97,116,115,0)], [String.fromCharCode(99,108,97,122,122,95,108,95,53,49,0),String.fromCharCode(115,109,101,97,114,95,101,95,49,0)]]);
          let dangerq = 3;
         l_positiont ^= 2 + gradler.size;
         greyarrowupU = new Map([[`${greyarrowupU.size}`, greyarrowupU.size]]);
         dangerq -= dangerq;
          let statisticsinactive5 = 2.0;
          let libreactN: Array<any> = [String.fromCharCode(115,95,57,56,95,114,97,116,105,110,103,0), String.fromCharCode(97,100,100,105,116,105,118,101,95,106,95,50,52,0), String.fromCharCode(118,95,53,53,95,97,118,101,115,0)];
          let league6: Array<any> = [681, 349, 1000];
         ball2 = libreactN.includes(statisticsinactive5);
         statisticsinactive5 += parseFloat(`${league6.length}`);
         libreactN = [league6.length & league6.length];
      let with_1b8 = gradler.size >= 5245491;
      do {
         gradler.set(`${ball2}`, 2);
         if (with_1b8) {
            break;
         }
      } while ((2 < (l_positiont & gradler.size) && (gradler.size & l_positiont) < 2) && with_1b8);
          let predictionl = 3.0;
          let colorsT: Map<any, any> = new Map([[String.fromCharCode(109,95,50,55,95,114,101,100,114,97,119,0),849], [String.fromCharCode(119,95,54,49,95,115,116,114,105,99,109,112,0),709]]);
         l_positiont ^= gradler.size;
         predictionl -= 3 << (Math.min(1, Math.abs(parseInt(`${predictionl}`))));
         colorsT = new Map([[`${colorsT.size}`, parseInt(`${predictionl}`) - 2]]);
      let shareq = ball2 ? !ball2 : ball2;
      do {
         ball2 = ball2 && 1 == l_positiont;
         if (shareq) {
            break;
         }
      } while (shareq && ((2 % (Math.max(10, l_positiont))) > 1 || l_positiont > 2));
      let goalY = gradler.size <= 9286363;
      do {
          let mapbufferB: Array<any> = [467, 187];
          let appleO: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,95,99,95,50,54,0),false ], [String.fromCharCode(114,101,99,111,110,102,105,103,95,116,95,54,53,0),false ], [String.fromCharCode(108,95,53,53,95,97,118,102,111,114,109,97,116,0),false ]]);
         gradler = new Map([[`${appleO.size}`, 3]]);
         mapbufferB = [mapbufferB.length | mapbufferB.length];
         appleO = new Map([[`${mapbufferB.length}`, mapbufferB.length]]);
         if (goalY) {
            break;
         }
      } while ((!ball2) && goalY);
          let bootx = String.fromCharCode(98,95,50,56,95,105,116,101,114,97,116,105,118,101,0);
          let iconedita = 5.0;
         gradler = new Map([[`${l_positiont}`, l_positiont]]);
         bootx = `${parseInt(`${iconedita}`) * bootx.length}`;
         iconedita += 3;
         l_positiont <<= Math.min(Math.abs(gradler.size * l_positiont), 1);
      typesq = `${gradler.size | libavfilterW.length}`;
      yingc &= (String.fromCharCode(69,0) == sortD ? parseInt(`${type_roi}`) : sortD.length);
       let greyarrowupv = 0;
       let manifest3 = 4.0;
       let resultr = 0.0;
         manifest3 *= parseFloat(`${2 % (Math.max(greyarrowupv, 5))}`);
      if ((greyarrowupv - 5) <= 5) {
         resultr -= 2 * parseInt(`${resultr}`);
      }
         greyarrowupv &= parseInt(`${manifest3}`);
          let matchesJ = String.fromCharCode(106,95,53,49,95,119,105,110,97,114,109,0);
          let expandW = false;
          let arrowupi = true;
         manifest3 += parseFloat(`${3}`);
         matchesJ = `${((expandW ? 3 : 2))}`;
         expandW = matchesJ.startsWith(`${arrowupi}`);
         arrowupi = expandW;
      while (5.94 <= (manifest3 * 5.34) && 5.16 <= (5.34 * manifest3)) {
         greyarrowupv %= Math.max(3, 4);
         break;
      }
         greyarrowupv |= greyarrowupv & parseInt(`${resultr}`);
      while (greyarrowupv <= resultr) {
         greyarrowupv += 2 >> (Math.min(Math.abs(parseInt(`${resultr}`)), 5));
         break;
      }
         greyarrowupv |= parseInt(`${manifest3}`) + 1;
      let detailsC = 8084895.0 >= manifest3;
      do {
         manifest3 *= parseFloat(`${parseInt(`${manifest3}`) | 3}`);
         if (detailsC) {
            break;
         }
      } while (detailsC && (3 <= greyarrowupv));
      yellowanimationliveD += `${libavfilterW.length % 1}`;
   if ((kuaishou0.length / (Math.max(3, 5))) <= 3 && 3 <= (kuaishou0.length / (Math.max(sortD.length, 6)))) {
       let updatesS = 5;
       let shared9 = 3.0;
       let temperatureX: Array<any> = [String.fromCharCode(116,95,53,53,95,114,108,112,0), String.fromCharCode(115,117,98,99,99,95,99,95,50,52,0)];
       let iconstarD = String.fromCharCode(99,95,49,50,95,112,97,115,115,102,98,0);
      let questr = updatesS <= 7748306;
      do {
         updatesS *= updatesS;
         if (questr) {
            break;
         }
      } while (questr && (!iconstarD.includes(`${updatesS}`)));
         shared9 *= parseFloat(`${1 ^ updatesS}`);
      let logol = temperatureX.length <= 6895644;
      do {
         temperatureX.push(temperatureX.length);
         if (logol) {
            break;
         }
      } while (((temperatureX.length - updatesS) > 1 && 4 > (temperatureX.length - 1)) && logol);
      for (let o = 0; o < 1; o++) {
         temperatureX = [iconstarD.length];
      }
         updatesS %= Math.max(parseInt(`${shared9}`) | 2, 3);
      for (let g = 0; g < 3; g++) {
         updatesS *= 3;
      }
      if (temperatureX.length <= parseInt(`${shared9}`)) {
          let defaultroombgK = String.fromCharCode(115,95,55,51,95,112,97,115,116,101,98,111,97,114,100,0);
          let mailS = 2;
          let turndownj = String.fromCharCode(105,95,49,50,95,100,117,109,112,101,114,0);
          let reminder4 = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,104,95,53,48,0);
         shared9 -= parseFloat(`${1 + updatesS}`);
         defaultroombgK = `${turndownj.length}`;
         mailS *= turndownj.length;
         reminder4 += `${turndownj.length & 3}`;
      }
         shared9 += parseFloat(`${iconstarD.length + updatesS}`);
      if (5 <= (parseInt(`${shared9}`) - updatesS) && 5 <= (updatesS - parseInt(`${shared9}`))) {
         shared9 /= Math.max(parseFloat(`${temperatureX.length + 3}`), 3);
      }
      if ((temperatureX.length * 5) < 2 && (parseInt(`${shared9}`) - temperatureX.length) < 5) {
         temperatureX.push(3 - temperatureX.length);
      }
          let libtanV = 3;
          let yingW = false;
          let rulesz = String.fromCharCode(98,95,49,55,95,108,111,116,116,105,101,108,111,97,100,101,114,0);
         updatesS += ((yingW ? 1 : 2) + iconstarD.length);
         libtanV %= Math.max(3, rulesz.length ^ 2);
         yingW = 28 == libtanV;
         rulesz = `${(String.fromCharCode(77,0) == rulesz ? libtanV : rulesz.length)}`;
          let predictionwinB = 5.0;
         updatesS += iconstarD.length - updatesS;
         predictionwinB /= Math.max(3, parseFloat(`${3}`));
      kuaishou0 = [parseInt(`${type_roi}`) % 2];
   }
      yellowanimationliveD += `${((send2 ? 4 : 2) & 3)}`;
   if (4 < videovarj.length && send2) {
      send2 = typesq == String.fromCharCode(50,0);
   }
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
       let dropdownq = 1;
    let kuaishouW = 1;
    let pressureJ: Map<any, any> = new Map([[String.fromCharCode(119,112,116,104,114,101,97,100,115,95,56,95,57,57,0),String.fromCharCode(98,105,103,100,105,97,95,104,95,48,0)], [String.fromCharCode(122,95,54,50,95,102,105,102,111,0),String.fromCharCode(114,95,49,52,95,97,114,103,98,105,0)], [String.fromCharCode(100,95,57,53,95,100,101,99,105,109,97,116,101,0),String.fromCharCode(111,114,105,103,105,110,115,95,111,95,57,51,0)]]);
    let matchesA = 5;
    let n_hashO: Array<any> = [978, 563, 963];
    let macauK = String.fromCharCode(100,95,57,50,95,101,109,105,116,116,101,100,0);
    let delegate_sL: Array<any> = [943, 859, 824];
    let tickJ: Map<any, any> = new Map([[String.fromCharCode(120,95,49,57,95,99,114,111,115,115,104,97,105,114,115,0),700], [String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,120,95,52,57,0),593]]);
    let modeg = String.fromCharCode(112,114,111,120,105,109,105,116,121,95,97,95,56,0);
       let starM: Array<any> = [807, 644, 729];
      while ((starM.length << (Math.min(1, starM.length))) == 5) {
          let userb = String.fromCharCode(109,107,118,119,114,105,116,101,114,95,55,95,52,49,0);
         starM.push(userb.length ^ 2);
         break;
      }
       let graphicsi = 3.0;
       let settingA = 5.0;
          let humidityx = 1.0;
          let i_viewP = 2;
         starM.push(parseInt(`${settingA}`));
         humidityx += 1 % (Math.max(5, parseInt(`${humidityx}`)));
         i_viewP <<= Math.min(Math.abs(1 & i_viewP), 4);
      n_hashO.push(3);
      kuaishouW <<= Math.min(4, Math.abs(dropdownq ^ kuaishouW));
      dropdownq &= n_hashO.length;
      kuaishouW -= (String.fromCharCode(117,0) == macauK ? pressureJ.size : macauK.length);
   for (let g = 0; g < 3; g++) {
       let chinaC: Map<any, any> = new Map([[String.fromCharCode(97,118,117,116,105,108,95,98,95,52,50,0),519], [String.fromCharCode(98,101,99,97,117,115,101,95,118,95,57,50,0),188], [String.fromCharCode(119,95,57,53,95,104,102,108,105,112,0),762]]);
       let schedulerK = 2.0;
       let iconmoreN = 3.0;
       let libreact8 = String.fromCharCode(112,111,105,110,116,115,95,54,95,48,0);
      for (let p = 0; p < 2; p++) {
         libreact8 = `${3 | parseInt(`${iconmoreN}`)}`;
      }
          let sliderR: Array<any> = [475, 546, 551];
          let long_igE = 1;
          let libjsijniprofilerm = String.fromCharCode(121,117,118,121,117,118,95,108,95,51,0);
         schedulerK /= Math.max(3, 2);
         sliderR = [1 % (Math.max(8, sliderR.length))];
         long_igE >>= Math.min(Math.abs((String.fromCharCode(75,0) == libjsijniprofilerm ? libjsijniprofilerm.length : long_igE)), 2);
      if ((schedulerK / (Math.max(libreact8.length, 4))) < 2.45 && (libreact8.length % 2) < 1) {
         schedulerK -= 2 / (Math.max(8, chinaC.size));
      }
      let userX = iconmoreN >= 8371359.0;
      do {
         iconmoreN -= 2;
         if (userX) {
            break;
         }
      } while (((1.1 + iconmoreN) < 3.0) && userX);
      for (let l = 0; l < 1; l++) {
          let matchactivey: Map<any, any> = new Map([[String.fromCharCode(115,105,120,116,97,112,95,51,95,51,49,0),String.fromCharCode(112,114,101,100,114,97,119,110,95,120,95,51,51,0)], [String.fromCharCode(97,95,52,56,95,121,117,118,114,103,98,0),String.fromCharCode(114,101,108,111,103,105,110,95,54,95,54,57,0)], [String.fromCharCode(102,95,55,48,95,115,117,112,112,114,101,115,115,101,100,0),String.fromCharCode(119,101,98,102,105,108,101,95,107,95,57,51,0)]]);
          let modulesS = String.fromCharCode(102,95,57,50,95,105,122,101,114,111,0);
          let videovarr: Array<any> = [830, 28];
          let livenodatabgimga = String.fromCharCode(115,104,111,114,116,99,117,116,115,95,50,95,54,55,0);
          let const_xW = 1.0;
         chinaC.set(livenodatabgimga, videovarr.length);
         matchactivey = new Map([[`${matchactivey.size}`, 1 ^ matchactivey.size]]);
         modulesS = `${3 >> (Math.min(4, Math.abs(matchactivey.size)))}`;
         videovarr = [parseInt(`${const_xW}`) & matchactivey.size];
         livenodatabgimga = `${parseInt(`${const_xW}`)}`;
      }
      while (3.35 > (iconmoreN + 1.63) || (1.63 * schedulerK) > 5.8) {
         iconmoreN *= parseInt(`${iconmoreN}`) * parseInt(`${schedulerK}`);
         break;
      }
      if ((5.48 - schedulerK) > 1.98 || 5.48 > (chinaC.size - schedulerK)) {
          let sportsX = 1.0;
          let logouserl = false;
         schedulerK *= 2 & libreact8.length;
         sportsX -= (parseFloat(`${(logouserl ? 4 : 1) & parseInt(`${sportsX}`)}`));
         logouserl = !logouserl;
      }
      let backwardm = libreact8.length <= 6159920;
      do {
         libreact8 = `${2 ^ parseInt(`${schedulerK}`)}`;
         if (backwardm) {
            break;
         }
      } while ((5.79 > (schedulerK / (Math.max(2.55, 9))) && (libreact8.length >> (Math.min(Math.abs(5), 3))) > 3) && backwardm);
         schedulerK *= libreact8.length;
         schedulerK *= 3;
          let largebrightnessJ = String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,114,95,52,56,0);
         libreact8 += `${parseInt(`${schedulerK}`) + chinaC.size}`;
         largebrightnessJ += `${(largebrightnessJ == String.fromCharCode(105,0) ? largebrightnessJ.length : largebrightnessJ.length)}`;
      let libmapbufferjniW = schedulerK <= 5309027.0;
      do {
         schedulerK += libreact8.length;
         if (libmapbufferjniW) {
            break;
         }
      } while (libmapbufferjniW && (2 <= (libreact8.length >> (Math.min(Math.abs(5), 5)))));
      matchesA ^= matchesA;
   }
   while (macauK.startsWith(`${dropdownq}`)) {
      dropdownq <<= Math.min(1, n_hashO.length);
      break;
   }

    if (episodeRef.current) {

      delegate_sL.push(tickJ.size);
      modeg = `${n_hashO.length + pressureJ.size}`;
   for (let j = 0; j < 3; j++) {
      delegate_sL = [modeg.length];
   }
   for (let q = 0; q < 1; q++) {
      dropdownq ^= 1;
   }
      macauK += "3";
   for (let l = 0; l < 3; l++) {
      kuaishouW <<= Math.min(3, Math.abs(1));
   }
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let hooksm = String.fromCharCode(109,97,116,114,105,120,102,95,102,95,56,55,0);
    let package_7bu = 2.0;
    let unfillx = String.fromCharCode(115,104,105,102,116,95,118,95,54,50,0);
    let qaagc: Map<any, any> = new Map([[String.fromCharCode(112,95,49,48,48,95,114,101,116,114,121,0),977], [String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,56,95,57,51,0),40], [String.fromCharCode(116,95,49,55,95,111,118,101,114,114,105,100,101,0),73]]);
    let reactnativeratingsi = String.fromCharCode(100,95,53,49,95,97,118,115,116,114,105,110,103,0);
    let imagesI = 0.0;
    let delegate_0b = String.fromCharCode(100,95,51,50,95,115,121,115,99,116,108,115,0);
    let turndownb: Array<any> = [534, 507];
    let xadsdk1 = 2.0;
    let customP: Array<any> = [720, 612, 584];
    let dependenciesH: Array<any> = [371, 498];
    let libglogA = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,106,95,49,50,0);
    let downloadt = String.fromCharCode(97,115,115,105,103,110,101,100,95,100,95,52,0);
    let otherQ = 5;
    let componentS = 0.0;
       let iconnointernetY = 5.0;
      if (iconnointernetY < iconnointernetY) {
         iconnointernetY -= 1 / (Math.max(1, parseInt(`${iconnointernetY}`)));
      }
          let libjsiS = true;
          let becomex = String.fromCharCode(121,95,50,54,95,97,100,100,114,101,115,115,101,115,0);
          let volume1 = String.fromCharCode(112,95,53,54,95,104,111,114,105,122,111,110,116,97,108,108,121,0);
         iconnointernetY += ((libjsiS ? 1 : 4));
         libjsiS = (becomex.length % (Math.max(7, volume1.length))) == 30;
         becomex += "1";
         volume1 = `${3 * becomex.length}`;
          let traminiB = 2.0;
          let awayteamfieldU = false;
         iconnointernetY *= 2 | parseInt(`${traminiB}`);
         traminiB *= (parseFloat(`${(awayteamfieldU ? 1 : 2) % 2}`));
      hooksm = `${reactnativeratingsi.length}`;
      customP.push(reactnativeratingsi.length);
      hooksm += `${turndownb.length / (Math.max(2, 3))}`;
   let connection6 = 5667487.0 <= xadsdk1;
   do {
      xadsdk1 /= Math.max(4, 1);
      if (connection6) {
         break;
      }
   } while ((unfillx.length > xadsdk1) && connection6);
   for (let l = 0; l < 3; l++) {
      reactnativeratingsi = `${parseInt(`${imagesI}`) << (Math.min(3, Math.abs(2)))}`;
   }
   let greytick_ = xadsdk1 >= 9458628.0;
   do {
      xadsdk1 /= Math.max(unfillx.length, 1);
      if (greytick_) {
         break;
      }
   } while (((turndownb.length * parseInt(`${xadsdk1}`)) < 5) && greytick_);
   for (let g = 0; g < 1; g++) {
       let profileactive0 = String.fromCharCode(110,117,109,115,95,114,95,50,0);
         profileactive0 += `${profileactive0.length}`;
         profileactive0 += `${profileactive0.length}`;
       let uploadi = 1.0;
      imagesI /= Math.max((delegate_0b == String.fromCharCode(55,0) ? delegate_0b.length : turndownb.length), 2);
   }
   let shrinkW = 9472957 <= customP.length;
   do {
      customP = [3 - unfillx.length];
      if (shrinkW) {
         break;
      }
   } while (shrinkW && (unfillx.includes(`${customP.length}`)));
       let search2 = String.fromCharCode(109,97,110,121,95,110,95,49,51,0);
       let iconbellactiveJ = 4.0;
       let defaultroombgt = 2;
         defaultroombgt -= 2 - parseInt(`${iconbellactiveJ}`);
      for (let z = 0; z < 2; z++) {
         search2 = `${parseInt(`${iconbellactiveJ}`)}`;
      }
      if ((iconbellactiveJ / (Math.max(8, defaultroombgt))) <= 3.67) {
         iconbellactiveJ *= 2 & parseInt(`${iconbellactiveJ}`);
      }
      let navigationS = defaultroombgt >= 8405821;
      do {
         defaultroombgt ^= parseInt(`${iconbellactiveJ}`) & 1;
         if (navigationS) {
            break;
         }
      } while (navigationS && ((search2.length % 1) >= 1));
         search2 += `${parseInt(`${iconbellactiveJ}`)}`;
      for (let g = 0; g < 2; g++) {
         search2 += `${1 | search2.length}`;
      }
         iconbellactiveJ *= parseInt(`${iconbellactiveJ}`) | search2.length;
          let mini3 = String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,50,95,53,48,0);
          let textinputh = String.fromCharCode(101,95,57,48,95,97,116,97,98,97,115,101,0);
          let componentregistry0 = 1;
         iconbellactiveJ /= Math.max(search2.length, 3);
         mini3 += `${componentregistry0 + 1}`;
         textinputh += "2";
         componentregistry0 ^= componentregistry0 << (Math.min(textinputh.length, 4));
      let stringP = 5549637 >= search2.length;
      do {
         search2 += `${2 | defaultroombgt}`;
         if (stringP) {
            break;
         }
      } while (((defaultroombgt + search2.length) <= 4 && 4 <= (search2.length + defaultroombgt)) && stringP);
      hooksm = `${parseInt(`${iconbellactiveJ}`) >> (Math.min(Math.abs(qaagc.size), 1))}`;
       let libavformatv = 5.0;
       let darkK = String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,116,95,49,53,0);
      if (3 >= darkK.length) {
          let closez = String.fromCharCode(104,95,52,55,95,102,97,110,99,121,0);
          let homeD = 0.0;
         darkK = `${darkK.length}`;
         closez = "2";
         homeD -= parseInt(`${homeD}`) % 3;
      }
          let uimanagerC = String.fromCharCode(103,95,56,51,95,105,109,112,97,99,116,0);
          let iconnewsshareU = 2;
         libavformatv /= Math.max(5, (uimanagerC == String.fromCharCode(83,0) ? parseInt(`${libavformatv}`) : uimanagerC.length));
         iconnewsshareU ^= iconnewsshareU ^ 1;
          let photol: Array<any> = [563, 364];
          let verticalf = String.fromCharCode(107,105,115,115,95,97,95,56,52,0);
         libavformatv += 1 ^ parseInt(`${libavformatv}`);
         photol.push(photol.length);
         verticalf = "2";
      if ((parseInt(`${libavformatv}`) * darkK.length) < 5 || (darkK.length * libavformatv) < 5.12) {
          let starR = 4;
          let buttonb = 0.0;
          let shielddone3 = 1.0;
          let countdownm = 1.0;
         libavformatv /= Math.max(3, 1);
         starR -= parseInt(`${shielddone3}`);
         buttonb -= parseInt(`${shielddone3}`);
         countdownm += parseInt(`${countdownm}`) / 1;
      }
         darkK += `${3 ^ darkK.length}`;
       let entryO: Array<any> = [555, 174];
      unfillx += `${turndownb.length % (Math.max(5, delegate_0b.length))}`;
      reactnativeratingsi += `${hooksm.length}`;
   while (4.92 < (imagesI / (Math.max(3.5, 10)))) {
      imagesI += customP.length;
      break;
   }
   while (!delegate_0b.endsWith(`${imagesI}`)) {
       let ballC = 4.0;
         ballC += 1;
          let typingY: Map<any, any> = new Map([[String.fromCharCode(104,95,51,56,95,115,116,114,105,110,103,105,102,121,0),true ], [String.fromCharCode(114,95,49,53,95,100,100,99,116,0),false ], [String.fromCharCode(115,95,51,56,95,112,97,114,97,108,108,101,108,0),true ]]);
          let webviewf = 4;
         ballC += webviewf ^ 1;
         typingY.set(`${typingY.size}`, typingY.size);
         webviewf |= typingY.size % (Math.max(2, typingY.size));
         ballC -= parseInt(`${ballC}`);
      delegate_0b += `${hooksm.length}`;
      break;
   }
       let cancelF = String.fromCharCode(104,95,56,57,95,119,97,107,101,0);
       let filledc: Map<any, any> = new Map([[String.fromCharCode(106,95,51,55,95,115,112,101,114,97,116,111,114,0),true ], [String.fromCharCode(97,102,102,101,99,116,101,100,95,98,95,57,51,0),false ], [String.fromCharCode(104,95,56,48,95,100,120,103,105,0),true ]]);
       let j_center2 = 4.0;
         cancelF = "3";
         filledc.set(`${j_center2}`, parseInt(`${j_center2}`) ^ cancelF.length);
      if (filledc.size < cancelF.length) {
         cancelF += `${filledc.size}`;
      }
       let vipsportl = String.fromCharCode(97,115,99,111,110,102,95,107,95,55,52,0);
      let philippinesP = 9561655.0 >= j_center2;
      do {
          let videojsa = String.fromCharCode(103,95,54,55,95,115,105,116,101,109,97,112,0);
          let feedbackk = false;
          let teamdetailsbg9: Map<any, any> = new Map([[String.fromCharCode(107,95,51,53,95,110,111,100,101,108,97,121,0),293], [String.fromCharCode(107,95,55,50,95,99,104,114,111,109,97,107,101,121,0),660]]);
          let fcdaebecbcbafcdfceaaeccfeacdbd = 3;
         j_center2 -= (parseFloat(`${String.fromCharCode(75,0) == videojsa ? videojsa.length : fcdaebecbcbafcdfceaaeccfeacdbd}`));
         feedbackk = teamdetailsbg9.size > 81;
         teamdetailsbg9.set(`${feedbackk}`, 1);
         fcdaebecbcbafcdfceaaeccfeacdbd >>= Math.min(Math.abs(3 + teamdetailsbg9.size), 2);
         if (philippinesP) {
            break;
         }
      } while (philippinesP && (1.98 <= (j_center2 + 4.80)));
         j_center2 += parseFloat(`${3 ^ parseInt(`${j_center2}`)}`);
      while (4 >= filledc.size) {
         filledc.set(`${j_center2}`, filledc.size | parseInt(`${j_center2}`));
         break;
      }
      while ((1.87 - j_center2) >= 5.1) {
         vipsportl = `${filledc.size}`;
         break;
      }
      if ((filledc.size | cancelF.length) == 5) {
         filledc = new Map([[`${j_center2}`, 1]]);
      }
      reactnativeratingsi = `${3 + parseInt(`${package_7bu}`)}`;
   for (let z = 0; z < 1; z++) {
       let loginD = String.fromCharCode(117,95,56,49,95,101,120,116,114,97,115,0);
      let libsgcoren = String.fromCharCode(118,55,99,114,116,0) == loginD;
      do {
          let previewo = 3.0;
          let chartb = String.fromCharCode(112,111,115,108,105,115,116,115,95,117,95,56,56,0);
          let matchesY = 5;
          let downarrowY = 5.0;
          let favoriteD = 2.0;
         loginD = `${parseInt(`${previewo}`) + parseInt(`${downarrowY}`)}`;
         previewo *= matchesY;
         chartb += `${matchesY ^ chartb.length}`;
         downarrowY *= parseFloat(`${parseInt(`${favoriteD}`)}`);
         favoriteD *= parseInt(`${favoriteD}`);
         if (libsgcoren) {
            break;
         }
      } while (libsgcoren && (loginD.length < 5 || loginD == String.fromCharCode(73,0)));
       let libturbomodulejsijnix = 3.0;
       let gmailp = String.fromCharCode(122,95,56,52,95,101,110,99,108,111,115,105,110,103,0);
      imagesI += (String.fromCharCode(88,0) == hooksm ? dependenciesH.length : hooksm.length);
   }
       let policyD: Array<any> = [2, 280, 340];
         policyD.push(3);
       let vertical8 = false;
      while (5 <= policyD.length) {
         vertical8 = (86 > ((!vertical8 ? policyD.length : 86) / (Math.max(2, policyD.length))));
         break;
      }
      imagesI /= Math.max(customP.length, 1);
      dependenciesH.push(libglogA.length);
      hooksm += `${3 * customP.length}`;
      libglogA = `${libglogA.length & 3}`;
   let overlayl = libglogA == String.fromCharCode(108,107,121,0);
   do {
      libglogA += `${delegate_0b.length - 1}`;
      if (overlayl) {
         break;
      }
   } while (overlayl && (dependenciesH.length > 5));
   for (let t = 0; t < 2; t++) {
      reactnativeratingsi = `${parseInt(`${package_7bu}`)}`;
   }
   for (let f = 0; f < 2; f++) {
      reactnativeratingsi = `${parseInt(`${imagesI}`) / 2}`;
   }
   for (let m = 0; m < 1; m++) {
       let libcxxcomponents4: Map<any, any> = new Map([[String.fromCharCode(97,114,99,116,105,99,95,53,95,49,53,0),40], [String.fromCharCode(113,95,50,52,95,108,105,112,98,111,97,114,100,0),602]]);
       let sharemodalx = String.fromCharCode(112,95,54,51,95,115,117,98,118,105,101,119,115,0);
      while (2 < (libcxxcomponents4.size - 4)) {
         libcxxcomponents4 = new Map([[`${libcxxcomponents4.size}`, sharemodalx.length & 1]]);
         break;
      }
          let basketballhometeam2 = true;
          let selectedl = String.fromCharCode(115,117,98,115,101,108,101,99,116,95,99,95,48,0);
          let const_dc = 5.0;
         libcxxcomponents4 = new Map([[`${basketballhometeam2}`, ((basketballhometeam2 ? 4 : 4) % (Math.max(parseInt(`${const_dc}`), 1)))]]);
         selectedl += `${selectedl.length * selectedl.length}`;
          let sellc = String.fromCharCode(106,95,57,55,95,101,120,99,101,112,116,105,111,110,115,0);
          let anythinkI: Array<any> = [String.fromCharCode(112,114,111,116,111,98,117,102,95,55,95,50,52,0), String.fromCharCode(110,111,97,115,109,95,117,95,50,49,0)];
          let downloadW = 4;
         sharemodalx += `${anythinkI.length | 1}`;
         sellc += `${1 | downloadW}`;
         anythinkI = [3];
         downloadW -= (String.fromCharCode(98,0) == sellc ? downloadW : sellc.length);
         sharemodalx = `${libcxxcomponents4.size >> (Math.min(sharemodalx.length, 2))}`;
      let modityi = 9247009 >= sharemodalx.length;
      do {
         sharemodalx = `${libcxxcomponents4.size}`;
         if (modityi) {
            break;
         }
      } while ((sharemodalx.startsWith(`${libcxxcomponents4.size}`)) && modityi);
       let pressuref: Array<any> = [740, 847];
      downloadt = `${sharemodalx.length}`;
   }
      downloadt = `${1 - hooksm.length}`;
   let libpangleflippedd = qaagc.size >= 5324158;
   do {
      qaagc = new Map([[`${turndownb.length}`, turndownb.length % (Math.max(3, 9))]]);
      if (libpangleflippedd) {
         break;
      }
   } while (libpangleflippedd && ((qaagc.size | 4) == 2 && 3 == (reactnativeratingsi.length | 4)));
   if ((1 | dependenciesH.length) >= 3 || 1 >= (dependenciesH.length % 1)) {
      dependenciesH.push(unfillx.length % (Math.max(4, parseInt(`${package_7bu}`))));
   }
   let shared = 9479757 >= otherQ;
   do {
      otherQ /= Math.max(5, customP.length);
      if (shared) {
         break;
      }
   } while ((qaagc.get(`${otherQ}`) == null) && shared);
   for (let s = 0; s < 3; s++) {
      reactnativeratingsi = "1";
   }

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
       let review3 = 2;
    let stepr = 3.0;
    let splashD = String.fromCharCode(113,95,55,52,95,99,111,109,101,0);
    let exampleimageK = false;
    let fastforwardQ = String.fromCharCode(110,111,111,112,95,53,95,55,56,0);
    let bridgeJ = true;
    let defaultpredictionprofileg = String.fromCharCode(115,95,50,56,95,118,97,108,105,100,97,116,105,111,110,0);
    let update_q_ = String.fromCharCode(98,95,51,49,95,99,101,108,102,0);
    let moonY = String.fromCharCode(115,121,110,99,112,111,105,110,116,95,115,95,54,0);
    let detailsu = String.fromCharCode(102,95,55,49,95,112,114,105,110,116,101,100,0);
    let sendn: Array<any> = [String.fromCharCode(118,95,53,54,95,112,114,101,100,105,99,116,111,114,0), String.fromCharCode(105,115,115,101,116,117,103,105,100,95,119,95,49,56,0), String.fromCharCode(121,95,53,52,95,98,105,111,0)];
    let iconsharee = false;
    let kuaishoua = 4;
    let userQ = String.fromCharCode(105,95,50,52,95,115,117,98,108,101,110,103,116,104,0);
   let storen = 8992123 <= moonY.length;
   do {
       let tempnodatagifJ = 3;
       let armvaY = String.fromCharCode(99,95,56,49,95,115,117,99,99,101,115,115,102,117,108,0);
         tempnodatagifJ -= armvaY.length << (Math.min(Math.abs(3), 3));
      let blackj = String.fromCharCode(54,101,116,99,117,57,0) == armvaY;
      do {
         armvaY = `${tempnodatagifJ}`;
         if (blackj) {
            break;
         }
      } while (blackj && (armvaY.includes(`${tempnodatagifJ}`)));
      if (2 < (tempnodatagifJ << (Math.min(Math.abs(1), 5))) || 1 < (tempnodatagifJ << (Math.min(armvaY.length, 3)))) {
         armvaY += `${tempnodatagifJ}`;
      }
          let libsentry3: Array<any> = [786, 0];
          let libfbp = String.fromCharCode(98,105,111,109,101,116,114,105,99,115,95,114,95,51,53,0);
          let const_uq = String.fromCharCode(115,97,110,105,116,121,95,98,95,53,49,0);
         armvaY = `${libsentry3.length}`;
         libsentry3 = [(String.fromCharCode(110,0) == const_uq ? const_uq.length : libfbp.length)];
         libfbp = `${const_uq.length & 2}`;
      let schedulea = tempnodatagifJ <= 8569888;
      do {
          let soundM = String.fromCharCode(116,105,116,108,101,95,122,95,50,54,0);
          let mbnativeadvancedQ = 2.0;
         tempnodatagifJ ^= soundM.length;
         soundM = `${parseInt(`${mbnativeadvancedQ}`) + 2}`;
         mbnativeadvancedQ *= 3 << (Math.min(Math.abs(parseInt(`${mbnativeadvancedQ}`)), 3));
         if (schedulea) {
            break;
         }
      } while ((!armvaY.includes(`${tempnodatagifJ}`)) && schedulea);
          let windb = false;
          let utilsd = String.fromCharCode(112,95,52,57,95,97,118,118,115,0);
          let saveP = String.fromCharCode(105,97,100,115,116,120,95,117,95,56,54,0);
         tempnodatagifJ &= (tempnodatagifJ * (windb ? 2 : 4));
         windb = String.fromCharCode(75,0) == saveP;
         utilsd = `${saveP.length / 2}`;
      moonY = `${armvaY.length}`;
      if (storen) {
         break;
      }
   } while ((update_q_.length == 4 && moonY.length == 4) && storen);
      update_q_ = `${(parseInt(`${stepr}`) / (Math.max(6, (exampleimageK ? 3 : 1))))}`;
       let homeb = 5.0;
       let anytimeR = String.fromCharCode(112,114,111,118,105,100,101,115,95,116,95,53,57,0);
         anytimeR += `${parseInt(`${homeb}`) & anytimeR.length}`;
         homeb += 3;
      while (anytimeR.length < homeb) {
         anytimeR = `${parseInt(`${homeb}`)}`;
         break;
      }
       let roomA: Array<any> = [249, 707];
       let downloadingA: Array<any> = [String.fromCharCode(100,95,51,48,95,98,114,101,97,107,112,111,105,110,116,0), String.fromCharCode(99,95,57,50,95,115,121,110,116,104,101,115,105,122,101,0), String.fromCharCode(114,102,99,116,95,122,95,52,49,0)];
          let weibo2 = String.fromCharCode(99,95,56,51,95,115,117,109,109,97,114,121,0);
         anytimeR += `${2 / (Math.max(3, downloadingA.length))}`;
         weibo2 = `${1 + weibo2.length}`;
      while ((homeb - 5.23) == 5.33 && 4.3 == (homeb - 5.23)) {
          let phoneL: Array<any> = [String.fromCharCode(118,95,51,56,95,110,111,104,101,97,100,101,114,0), String.fromCharCode(97,95,56,52,95,109,101,97,115,117,114,101,100,0), String.fromCharCode(97,102,116,101,114,95,57,95,56,57,0)];
          let componentregistry0 = String.fromCharCode(99,95,57,51,95,116,105,99,107,105,110,103,0);
         homeb -= componentregistry0.length;
         phoneL = [phoneL.length];
         componentregistry0 = `${phoneL.length | phoneL.length}`;
         break;
      }
      moonY = `${3 >> (Math.min(3, moonY.length))}`;

    const searchTerm = vod?.vod_name ? vod?.vod_name : "";
    const encodedSearchTerm = encodeURIComponent(searchTerm);

   let register_7S = String.fromCharCode(103,106,110,54,51,121,104,0) == moonY;
   do {
      moonY += `${review3}`;
      if (register_7S) {
         break;
      }
   } while (((3 << (Math.min(3, moonY.length))) >= 4 || 5 >= (3 ^ moonY.length)) && register_7S);
       let storea: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,109,111,118,101,109,101,110,116,0),String.fromCharCode(104,95,49,55,95,99,111,109,112,114,101,115,115,101,100,0)], [String.fromCharCode(105,112,112,108,101,95,119,95,57,49,0),String.fromCharCode(117,95,57,56,95,111,109,112,108,105,99,97,116,105,111,110,0)], [String.fromCharCode(103,95,52,57,95,115,111,108,105,115,116,101,110,0),String.fromCharCode(105,110,102,95,55,95,56,48,0)]]);
          let exampleimageZ = false;
         storea.set(`${exampleimageZ}`, (1 * (exampleimageZ ? 1 : 4)));
      for (let u = 0; u < 1; u++) {
         storea = new Map([[`${storea.size}`, storea.size]]);
      }
      while (1 == (storea.size << (Math.min(Math.abs(storea.size), 4)))) {
         storea.set(`${storea.size}`, storea.size);
         break;
      }
      defaultpredictionprofileg += `${(String.fromCharCode(48,0) == splashD ? defaultpredictionprofileg.length : splashD.length)}`;
   if (bridgeJ) {
      bridgeJ = update_q_ == String.fromCharCode(74,0);
   }
    

       let logoW = 5.0;
       let videojsD = false;
      let defaultplayerimgl = videojsD ? !videojsD : videojsD;
      do {
         videojsD = 69.47 < logoW && !videojsD;
         if (defaultplayerimgl) {
            break;
         }
      } while (defaultplayerimgl && (5.43 == (logoW + 3.68) || logoW == 3.68));
         videojsD = !videojsD && 2.7 >= logoW;
      while (2.20 > logoW) {
         logoW /= Math.max(3, 3 / (Math.max(4, parseInt(`${logoW}`))));
         break;
      }
      for (let l = 0; l < 2; l++) {
          let downloadingJ = 3.0;
          let themeC: Array<any> = [350, 57, 630];
          let windE = true;
         videojsD = videojsD && 34.58 < logoW;
         downloadingJ /= Math.max(1, 3);
         themeC = [2 - parseInt(`${downloadingJ}`)];
         windE = themeC.includes(downloadingJ);
      }
         logoW *= (parseInt(`${logoW}`) + (videojsD ? 4 : 2));
      for (let z = 0; z < 1; z++) {
         logoW /= Math.max(3, ((videojsD ? 5 : 3) + parseInt(`${logoW}`)));
      }
      splashD = `${1 >> (Math.min(2, update_q_.length))}`;
   while (!fastforwardQ.includes(detailsu)) {
      detailsu += `${((exampleimageK ? 1 : 2) / (Math.max(2, 3)))}`;
      break;
   }
      moonY += `${(String.fromCharCode(90,0) == defaultpredictionprofileg ? defaultpredictionprofileg.length : fastforwardQ.length)}`;
    

   while (!fastforwardQ.includes(`${exampleimageK}`)) {
       let renderX: Array<any> = [74, 637];
      let launch1 = 9362811 <= renderX.length;
      do {
         renderX.push(renderX.length + 2);
         if (launch1) {
            break;
         }
      } while (launch1 && (2 < (renderX.length >> (Math.min(4, renderX.length))) && 3 < (renderX.length >> (Math.min(Math.abs(2), 5)))));
       let helpern = String.fromCharCode(115,101,99,116,111,114,95,109,95,53,57,0);
      for (let c = 0; c < 2; c++) {
         helpern = `${renderX.length + helpern.length}`;
      }
      fastforwardQ = `${2 % (Math.max(2, renderX.length))}`;
      break;
   }
      exampleimageK = defaultpredictionprofileg.length <= 24;
   if (!exampleimageK) {
       let photoj = String.fromCharCode(120,95,51,51,95,114,101,100,105,114,101,99,116,111,114,0);
       let albumD: Array<any> = [String.fromCharCode(107,95,57,48,95,100,111,103,0), String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,48,95,52,50,0), String.fromCharCode(100,95,56,51,95,97,100,100,105,116,105,111,110,115,0)];
      for (let r = 0; r < 3; r++) {
          let navigationK = String.fromCharCode(102,105,108,108,105,110,103,95,98,95,55,57,0);
          let updatese: Array<any> = [String.fromCharCode(114,111,111,116,115,95,98,95,53,52,0), String.fromCharCode(101,118,101,114,121,98,111,100,121,95,106,95,56,57,0), String.fromCharCode(114,101,115,97,109,112,108,101,107,104,122,95,107,95,57,49,0)];
          let promotionk = String.fromCharCode(112,97,105,100,95,122,95,49,57,0);
          let injuryx = 2.0;
          let read_ = String.fromCharCode(99,95,52,49,95,98,101,116,119,101,101,110,0);
         photoj += `${3 >> (Math.min(Math.abs(parseInt(`${injuryx}`)), 4))}`;
         navigationK += `${1 - read_.length}`;
         updatese = [2];
         promotionk = `${read_.length}`;
         injuryx += (parseFloat(`${promotionk == String.fromCharCode(119,0) ? read_.length : promotionk.length}`));
      }
      if (photoj.length == 1) {
         albumD.push(albumD.length);
      }
       let heartQ = 3.0;
      if ((2 ^ albumD.length) == 1) {
         photoj += `${3 ^ parseInt(`${heartQ}`)}`;
      }
      if ((2 << (Math.min(4, photoj.length))) < 1 || 2 < (albumD.length << (Math.min(photoj.length, 4)))) {
         photoj = `${3 * parseInt(`${heartQ}`)}`;
      }
         photoj += `${albumD.length}`;
      exampleimageK = update_q_ == splashD;
   }
    const url = `https://www.bing.com/search?q=${encodedSearchTerm}&form=QBLH&sp=-1&ghc=1&lq=0&pq=a&sc=10-1&qs=n&sk=&cvid=F4E27DDDEE8343F082F994097EF7592A&ghsh=0&ghacc=0&ghpl=`;

   let gpayq = exampleimageK ? !exampleimageK : exampleimageK;
   do {
      exampleimageK = 39 >= moonY.length;
      if (gpayq) {
         break;
      }
   } while ((5 >= update_q_.length) && gpayq);
   let predictionactive1 = 6743442 <= defaultpredictionprofileg.length;
   do {
      defaultpredictionprofileg += `${((exampleimageK ? 4 : 1))}`;
      if (predictionactive1) {
         break;
      }
   } while (predictionactive1 && (defaultpredictionprofileg == String.fromCharCode(122,0) && 5 >= detailsu.length));
   while (fastforwardQ.length > detailsu.length) {
      detailsu += `${((exampleimageK ? 2 : 3) | parseInt(`${stepr}`))}`;
      break;
   }
    try {

      detailsu = `${update_q_.length}`;
      iconsharee = bridgeJ || fastforwardQ.length >= 93;
      moonY = `${parseInt(`${stepr}`) * 1}`;
      if (await InAppBrowser.isAvailable()) {

   let combineA = 7538716 >= splashD.length;
   do {
       let short_tX = 2;
       let fullW = 2.0;
       let proxyb = 1.0;
       let reducerR = String.fromCharCode(100,101,115,116,114,111,121,101,100,95,51,95,49,56,0);
      for (let m = 0; m < 2; m++) {
         fullW *= parseFloat(`${3 + reducerR.length}`);
      }
         reducerR += `${1 - parseInt(`${proxyb}`)}`;
         fullW += parseFloat(`${short_tX >> (Math.min(1, Math.abs(1)))}`);
      for (let g = 0; g < 3; g++) {
         short_tX &= 1 >> (Math.min(Math.abs(parseInt(`${fullW}`)), 2));
      }
      for (let v = 0; v < 3; v++) {
          let recommendationm: Map<any, any> = new Map([[String.fromCharCode(109,95,56,57,95,112,97,114,97,103,114,97,112,104,0),109], [String.fromCharCode(119,109,97,112,114,111,95,122,95,55,57,0),553], [String.fromCharCode(113,95,56,56,95,115,117,98,98,108,111,99,107,0),991]]);
          let launcherb = String.fromCharCode(115,116,114,112,116,105,109,101,95,100,95,54,0);
         short_tX += recommendationm.size + parseInt(`${proxyb}`);
         recommendationm.set(launcherb, (String.fromCharCode(106,0) == launcherb ? launcherb.length : launcherb.length));
      }
      while ((parseFloat(`${reducerR.length}`) - proxyb) >= 5.35 && (5.35 - proxyb) >= 1.77) {
          let pangleF = String.fromCharCode(116,95,55,49,95,115,108,111,119,101,115,116,0);
          let cancelf = 5.0;
         proxyb /= Math.max(parseFloat(`${3 * parseInt(`${fullW}`)}`), 1);
         pangleF += `${(pangleF == String.fromCharCode(71,0) ? parseInt(`${cancelf}`) : pangleF.length)}`;
         cancelf /= Math.max(parseInt(`${cancelf}`), 3);
         break;
      }
      if (3 > (1 - parseInt(`${proxyb}`)) && (parseInt(`${proxyb}`) - reducerR.length) > 1) {
         reducerR = `${parseInt(`${fullW}`) | parseInt(`${proxyb}`)}`;
      }
         fullW += parseFloat(`${parseInt(`${proxyb}`)}`);
      splashD = `${parseInt(`${proxyb}`) & 1}`;
      if (combineA) {
         break;
      }
   } while (combineA && (1 < review3));
       let watchY = String.fromCharCode(98,97,110,100,115,95,53,95,50,53,0);
         watchY += `${watchY.length / 1}`;
         watchY = `${(watchY == String.fromCharCode(109,0) ? watchY.length : watchY.length)}`;
          let circleJ = String.fromCharCode(114,95,50,57,95,103,111,98,98,108,101,0);
          let unread7 = String.fromCharCode(104,97,100,111,119,115,95,102,95,57,53,0);
          let reviewV = String.fromCharCode(97,95,51,55,95,103,97,108,108,101,114,121,0);
         watchY += `${unread7.length | reviewV.length}`;
         circleJ = `${circleJ.length * circleJ.length}`;
         unread7 += `${1 + circleJ.length}`;
      sendn = [((exampleimageK ? 5 : 4) % (Math.max(defaultpredictionprofileg.length, 4)))];
       let alertf = 5.0;
          let mapbufferA = String.fromCharCode(105,110,116,101,108,95,108,95,51,0);
         alertf -= parseFloat(`${parseInt(`${alertf}`)}`);
         mapbufferA = `${mapbufferA.length - mapbufferA.length}`;
          let hongkong4 = 1.0;
          let bottomK: Array<any> = [464, 210];
         alertf /= Math.max(5, parseFloat(`${bottomK.length}`));
         hongkong4 -= parseFloat(`${parseInt(`${hongkong4}`)}`);
         bottomK.push(parseInt(`${hongkong4}`));
      for (let h = 0; h < 1; h++) {
         alertf /= Math.max(parseFloat(`${parseInt(`${alertf}`)}`), 5);
      }
      bridgeJ = splashD.length > 58;
        await InAppBrowser.open(url);
      } else {

   for (let p = 0; p < 1; p++) {
      fastforwardQ += `${((exampleimageK ? 2 : 1) / 1)}`;
   }
   for (let t = 0; t < 3; t++) {
      moonY = `${(review3 + (iconsharee ? 1 : 2))}`;
   }
   while (sendn.length <= 4) {
       let yellowx = true;
       let pathI: Array<any> = [540, 976];
       let entryj = String.fromCharCode(99,108,97,115,115,105,99,95,98,95,54,55,0);
      while (yellowx) {
          let analyticv = 3;
          let bangO = String.fromCharCode(117,95,53,50,95,100,113,117,97,110,116,0);
          let knewinterstitialY = 2.0;
          let profileframes = String.fromCharCode(114,101,118,105,111,117,115,95,103,95,57,52,0);
          let phoneJ = String.fromCharCode(111,117,116,100,101,118,115,95,106,95,54,48,0);
         entryj = "2";
         analyticv /= Math.max(1, 4);
         bangO += `${(profileframes == String.fromCharCode(54,0) ? parseInt(`${knewinterstitialY}`) : profileframes.length)}`;
         knewinterstitialY /= Math.max(parseFloat(`${profileframes.length << (Math.min(Math.abs(3), 5))}`), 4);
         phoneJ = `${profileframes.length & parseInt(`${knewinterstitialY}`)}`;
         break;
      }
         yellowx = entryj.length <= 91;
      let xvodZ = pathI.length >= 9041614;
      do {
          let scrollviewQ = false;
          let iconrefreshn: Map<any, any> = new Map([[String.fromCharCode(109,95,49,49,95,108,97,114,112,111,108,121,0),String.fromCharCode(117,95,56,52,95,115,99,104,110,111,114,114,0)], [String.fromCharCode(105,95,56,48,95,110,97,109,101,115,112,97,99,101,0),String.fromCharCode(119,101,97,107,95,117,95,50,56,0)]]);
          let countryW = String.fromCharCode(115,117,110,112,111,115,95,122,95,52,48,0);
          let loginsuccess6 = String.fromCharCode(112,114,105,118,107,101,121,95,54,95,53,56,0);
         pathI = [countryW.length];
         scrollviewQ = (((scrollviewQ ? 45 : loginsuccess6.length) * loginsuccess6.length) >= 45);
         iconrefreshn.set(loginsuccess6, loginsuccess6.length | iconrefreshn.size);
         countryW = `${iconrefreshn.size >> (Math.min(Math.abs(2), 3))}`;
         if (xvodZ) {
            break;
         }
      } while (xvodZ && (pathI.length == entryj.length));
         entryj = `${(3 / (Math.max(3, (yellowx ? 3 : 1))))}`;
      if (pathI.length >= entryj.length) {
          let a_lock6 = false;
         entryj += "1";
         a_lock6 = (a_lock6 ? !a_lock6 : !a_lock6);
      }
      if (!yellowx && (2 - pathI.length) >= 1) {
          let popupD = 0.0;
          let libgloga = 1.0;
         pathI = [pathI.length / 1];
         popupD *= parseFloat(`${1}`);
         libgloga *= 3 * parseInt(`${libgloga}`);
      }
          let catalogb = false;
         entryj = `${2 << (Math.min(4, entryj.length))}`;
         catalogb = !catalogb;
      let frame_s_8 = 6938191 >= entryj.length;
      do {
          let cornerz: Array<any> = [9, 943];
         entryj += `${pathI.length << (Math.min(entryj.length, 5))}`;
         cornerz = [cornerz.length];
         if (frame_s_8) {
            break;
         }
      } while ((yellowx && 2 >= entryj.length) && frame_s_8);
          let sentryK = 5.0;
          let native6 = 3.0;
         entryj = `${entryj.length}`;
         sentryK += 3;
         native6 /= Math.max(parseFloat(`${parseInt(`${sentryK}`)}`), 4);
      sendn.push(pathI.length);
      break;
   }
        Linking.openURL(url);
      }
    } catch (e) {

   while (4.71 <= (stepr + 4.65)) {
      moonY += `${moonY.length}`;
      break;
   }
   for (let y = 0; y < 1; y++) {
      review3 ^= sendn.length;
   }
      detailsu = "3";
      Linking.openURL(url);
    }
  }, [vod]);

  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  

  

  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  

  
  
  

  const fetchComments = () =>
    wwIconedit.getReviewDetails(vod?.vod_douban_id.toString() ?? "").then(
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
       let internet_: Map<any, any> = new Map([[String.fromCharCode(105,114,99,97,109,95,119,95,51,57,0),737], [String.fromCharCode(119,95,52,51,95,104,101,108,112,0),656], [String.fromCharCode(109,98,115,116,114,105,110,103,95,50,95,57,57,0),721]]);
    let proxyH: Map<any, any> = new Map([[String.fromCharCode(110,95,49,57,95,114,111,111,116,0),426], [String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,57,95,52,49,0),536], [String.fromCharCode(109,95,52,51,95,97,99,99,101,112,116,115,0),356]]);
    let videor = 5;
    let yellowredcards = 3.0;
    let entryz = String.fromCharCode(118,95,53,54,95,105,110,116,101,114,110,97,108,0);
    let inactivec = String.fromCharCode(100,95,56,53,95,114,101,99,101,105,118,105,110,103,0);
    let iconshareZ = 3.0;
    let turndownb = String.fromCharCode(112,95,57,55,95,100,100,99,116,0);
    let defaultpredictionprofile2: Map<any, any> = new Map([[String.fromCharCode(121,95,53,48,95,111,114,105,103,105,110,115,0),true ], [String.fromCharCode(112,111,115,116,98,111,120,95,116,95,53,54,0),true ]]);
    let libflipperu: Array<any> = [601, 749];
    let shootyesgoalw = 4;
    let handlerW = String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,104,95,55,54,0);
    let unimplementedviewR: Map<any, any> = new Map([[String.fromCharCode(122,95,51,52,95,105,108,111,103,0),String.fromCharCode(100,101,106,117,100,100,101,114,95,98,95,56,48,0)], [String.fromCharCode(121,95,57,57,95,115,101,97,114,99,104,0),String.fromCharCode(109,111,118,101,100,95,104,95,49,55,0)], [String.fromCharCode(120,95,50,49,95,107,105,110,100,0),String.fromCharCode(98,101,116,119,101,101,110,95,53,95,50,52,0)]]);
    let profileu = 4.0;
    let fileds = String.fromCharCode(102,101,101,95,120,95,55,50,0);
    let backv: Array<any> = [310, 86];
       let register_1T = 3.0;
       let cornerkick1: Map<any, any> = new Map([[String.fromCharCode(119,95,57,48,95,109,98,99,110,116,0),String.fromCharCode(105,115,115,117,101,114,115,95,111,95,50,57,0)], [String.fromCharCode(98,97,110,110,101,114,95,101,95,51,54,0),String.fromCharCode(98,121,116,101,114,117,110,95,97,95,52,49,0)]]);
       let mbjscommonV: Map<any, any> = new Map([[String.fromCharCode(99,111,108,120,95,117,95,55,54,0),String.fromCharCode(112,95,52,51,95,99,116,114,120,0)], [String.fromCharCode(122,95,52,54,95,98,101,101,110,0),String.fromCharCode(120,95,56,51,95,108,97,121,101,114,105,110,103,0)], [String.fromCharCode(115,108,111,116,95,106,95,54,0),String.fromCharCode(108,105,115,116,101,100,95,111,95,52,52,0)]]);
          let turndowna = String.fromCharCode(112,95,52,57,95,97,120,105,115,0);
          let predictionactiveM = 5;
          let libavcodecq: Array<any> = [364, 302, 998];
         register_1T -= 2;
         turndowna += "3";
         predictionactiveM += 1;
         libavcodecq = [predictionactiveM >> (Math.min(Math.abs(3), 4))];
      let mathj = 9575035 >= cornerkick1.size;
      do {
          let flipperP = 0;
          let statst = 3;
         cornerkick1.set(`${register_1T}`, 3);
         flipperP -= statst >> (Math.min(1, Math.abs(flipperP)));
         statst >>= Math.min(Math.abs(flipperP), 1);
         if (mathj) {
            break;
         }
      } while (mathj && (!Array.from(cornerkick1.keys()).includes(`${register_1T}`)));
         register_1T /= Math.max(1, 2);
         mbjscommonV.set(`${cornerkick1.size}`, mbjscommonV.size);
      if (Array.from(mbjscommonV.values()).includes(register_1T)) {
          let componentsG = String.fromCharCode(102,95,56,56,95,113,117,97,114,116,0);
         mbjscommonV.set(componentsG, componentsG.length);
      }
       let subtextZ = String.fromCharCode(105,99,101,95,103,95,49,56,0);
      let trashs = 5889827 <= mbjscommonV.size;
      do {
          let twitterg = String.fromCharCode(103,95,54,54,0);
          let phoneshareQ = String.fromCharCode(114,101,115,112,101,99,116,105,110,103,95,108,95,57,50,0);
          let clock6 = String.fromCharCode(109,111,110,116,103,111,109,101,114,121,95,101,95,49,51,0);
         mbjscommonV.set(twitterg, twitterg.length);
         phoneshareQ += `${clock6.length / (Math.max(phoneshareQ.length, 9))}`;
         clock6 = `${clock6.length}`;
         if (trashs) {
            break;
         }
      } while (trashs && ((parseInt(`${register_1T}`) * mbjscommonV.size) > 3 && 5 > (mbjscommonV.size & 3)));
         cornerkick1 = new Map([[`${cornerkick1.size}`, subtextZ.length + cornerkick1.size]]);
          let dycreatorm = String.fromCharCode(112,105,99,116,95,49,95,57,53,0);
          let heartg: Array<any> = [253, 314];
          let iconwechatB = 0.0;
         register_1T *= mbjscommonV.size;
         dycreatorm += `${2 & parseInt(`${iconwechatB}`)}`;
         heartg.push(heartg.length ^ dycreatorm.length);
         iconwechatB -= parseInt(`${iconwechatB}`) ^ heartg.length;
      videor |= turndownb.length << (Math.min(1, Math.abs(cornerkick1.size)));
   for (let l = 0; l < 3; l++) {
      defaultpredictionprofile2.set(inactivec, 1);
   }
   let sigmobg = inactivec == String.fromCharCode(48,114,107,112,0);
   do {
      inactivec += `${libflipperu.length}`;
      if (sigmobg) {
         break;
      }
   } while ((4 == (internet_.size << (Math.min(Math.abs(4), 5)))) && sigmobg);
   for (let p = 0; p < 2; p++) {
      proxyH = new Map([[`${internet_.size}`, 3 ^ proxyH.size]]);
   }
      unimplementedviewR.set(`${handlerW}`, defaultpredictionprofile2.size);

      let mergedArray;

       let hongkongY = true;
       let sheetB = 4.0;
       let otherp = true;
      if (!otherp && !hongkongY) {
         hongkongY = !otherp;
      }
      while (!hongkongY) {
          let right0: Map<any, any> = new Map([[String.fromCharCode(114,101,100,95,97,95,49,55,0),875], [String.fromCharCode(116,95,52,53,95,100,105,109,0),565]]);
          let bangE = String.fromCharCode(109,95,56,48,95,115,116,114,97,116,101,103,105,101,115,0);
          let profile0 = String.fromCharCode(112,95,54,52,95,112,114,105,118,97,99,121,0);
          let liver: Array<any> = [72, 890, 100];
         hongkongY = ((bangE.length - (otherp ? 92 : bangE.length)) <= 92);
         right0.set(`${liver.length}`, 1 % (Math.max(1, right0.size)));
         profile0 = `${right0.size}`;
         liver = [right0.size % (Math.max(profile0.length, 2))];
         break;
      }
         otherp = 34.2 <= sheetB;
      if (otherp) {
         sheetB /= Math.max(((hongkongY ? 3 : 3) & parseInt(`${sheetB}`)), 2);
      }
          let roomD = String.fromCharCode(99,95,54,51,95,117,110,105,116,0);
          let productn = 5;
          let libmapbufferjniN = String.fromCharCode(100,101,112,95,119,95,57,53,0);
         sheetB -= ((otherp ? 4 : 1) & (hongkongY ? 2 : 1));
         roomD = `${roomD.length ^ 1}`;
         productn &= productn;
         libmapbufferjniN += `${(String.fromCharCode(54,0) == libmapbufferjniN ? libmapbufferjniN.length : productn)}`;
          let short_cZ = false;
         sheetB -= 2;
      let basketball_ = otherp ? !otherp : otherp;
      do {
         otherp = (otherp ? hongkongY : otherp);
         if (basketball_) {
            break;
         }
      } while (basketball_ && (otherp));
      for (let i = 0; i < 3; i++) {
         otherp = !hongkongY;
      }
      while (3.99 < sheetB || 2.1 < (sheetB / (Math.max(3.99, 8)))) {
         sheetB -= parseInt(`${sheetB}`) - 2;
         break;
      }
      libflipperu = [defaultpredictionprofile2.size];
   for (let d = 0; d < 2; d++) {
      inactivec = `${shootyesgoalw}`;
   }
   for (let l = 0; l < 3; l++) {
       let pointV = 1.0;
       let defaultpredictionprofileS: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,48,95,102,97,108,115,101,0),false ], [String.fromCharCode(105,95,53,49,95,100,105,97,108,111,103,117,101,0),false ]]);
       let binddatasZ = String.fromCharCode(97,95,51,48,95,116,101,115,116,98,114,105,100,103,101,0);
       let ewardedJ = String.fromCharCode(114,95,50,95,110,105,99,101,0);
       let libmapbufferjniF = String.fromCharCode(104,97,110,100,108,105,110,103,95,114,95,54,49,0);
      let rewardi = 9515726 <= defaultpredictionprofileS.size;
      do {
         defaultpredictionprofileS = new Map([[`${defaultpredictionprofileS.size}`, defaultpredictionprofileS.size % 3]]);
         if (rewardi) {
            break;
         }
      } while (rewardi && (5 == (libmapbufferjniF.length * 3)));
      let teamdetailsbgg = ewardedJ == String.fromCharCode(97,120,119,103,121,95,48,48,0);
      do {
         ewardedJ = "1";
         if (teamdetailsbgg) {
            break;
         }
      } while ((libmapbufferjniF == String.fromCharCode(74,0)) && teamdetailsbgg);
      let plash8 = ewardedJ.length <= 7059817;
      do {
          let penaltyL = 0;
          let ballo = 3.0;
         ewardedJ = `${(String.fromCharCode(106,0) == ewardedJ ? parseInt(`${ballo}`) : ewardedJ.length)}`;
         penaltyL -= penaltyL & 2;
         ballo *= penaltyL / (Math.max(1, 10));
         if (plash8) {
            break;
         }
      } while (plash8 && (ewardedJ.length < 3));
         ewardedJ += `${binddatasZ.length}`;
          let google2 = String.fromCharCode(98,97,99,107,101,100,95,56,95,54,48,0);
         libmapbufferjniF += `${(String.fromCharCode(89,0) == binddatasZ ? google2.length : binddatasZ.length)}`;
      while (2 > (3 ^ ewardedJ.length) && 1.34 > (pointV * 5.76)) {
          let privacyZ = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,95,115,95,54,55,0);
          let successJ = false;
          let textinput9 = String.fromCharCode(97,115,115,111,99,108,105,115,116,95,122,95,56,56,0);
         ewardedJ = `${(textinput9 == String.fromCharCode(77,0) ? (successJ ? 3 : 2) : textinput9.length)}`;
         privacyZ = `${privacyZ.length % 3}`;
         successJ = (privacyZ.length & privacyZ.length) > 4;
         break;
      }
      for (let t = 0; t < 1; t++) {
          let eventsplashT = String.fromCharCode(119,95,56,55,95,105,109,109,117,116,97,98,108,101,0);
          let hearts = false;
          let transfer_: Map<any, any> = new Map([[String.fromCharCode(108,101,110,103,116,104,95,51,95,54,52,0),true ], [String.fromCharCode(117,95,53,57,95,115,101,99,111,110,100,97,114,121,0),false ], [String.fromCharCode(105,95,57,57,95,116,114,97,110,115,108,97,116,105,111,110,115,0),true ]]);
          let mathx: Map<any, any> = new Map([[String.fromCharCode(99,104,115,101,116,95,48,95,51,56,0),false ], [String.fromCharCode(117,110,111,114,100,101,114,101,100,95,118,95,56,55,0),true ]]);
          let weatherd = String.fromCharCode(99,95,56,57,95,99,104,101,99,107,0);
         ewardedJ = `${defaultpredictionprofileS.size % (Math.max(10, libmapbufferjniF.length))}`;
         eventsplashT = `${((hearts ? 2 : 2) % (Math.max(transfer_.size, 5)))}`;
         hearts = 63 <= eventsplashT.length && transfer_.size <= 63;
         mathx = new Map([[`${mathx.size}`, 2 * mathx.size]]);
         weatherd += `${transfer_.size}`;
      }
          let gifgoalx = true;
          let zhengpianp = String.fromCharCode(115,116,97,109,112,115,95,104,95,49,52,0);
          let flipperV = 2;
         ewardedJ += "2";
         gifgoalx = String.fromCharCode(74,0) == zhengpianp;
         zhengpianp = `${flipperV & 2}`;
         flipperV /= Math.max(2, flipperV);
      while (!ewardedJ.endsWith(`${defaultpredictionprofileS.size}`)) {
         defaultpredictionprofileS.set(`${pointV}`, parseInt(`${pointV}`) & 1);
         break;
      }
         libmapbufferjniF = `${ewardedJ.length}`;
         pointV /= Math.max((binddatasZ == String.fromCharCode(89,0) ? defaultpredictionprofileS.size : binddatasZ.length), 1);
         pointV /= Math.max(2, defaultpredictionprofileS.size - 3);
         pointV += binddatasZ.length;
          let albumG = 0.0;
         defaultpredictionprofileS.set(`${binddatasZ}`, binddatasZ.length);
         albumG -= 1 / (Math.max(9, parseInt(`${albumG}`)));
       let downloaderD: Array<any> = [256, 297, 173];
       let weather3: Array<any> = [386, 241, 334];
      entryz = `${parseInt(`${pointV}`) ^ ewardedJ.length}`;
   }
   for (let y = 0; y < 1; y++) {
      profileu *= 1;
   }
      yellowredcards += parseFloat(`${2}`);
      const locComments = await getLocalComments();

      videor >>= Math.min(2, Math.abs(videor / (Math.max(unimplementedviewR.size, 10))));
   if ((internet_.size + 1) <= 2 && (internet_.size + unimplementedviewR.size) <= 1) {
      unimplementedviewR.set(`${profileu}`, 1 / (Math.max(9, parseInt(`${profileu}`))));
   }
   for (let t = 0; t < 2; t++) {
       let imagemanagert = 4;
       let dropdownG = String.fromCharCode(115,116,115,99,95,110,95,54,57,0);
      let typing1 = 5759271 <= imagemanagert;
      do {
         imagemanagert ^= dropdownG.length;
         if (typing1) {
            break;
         }
      } while (typing1 && ((2 ^ dropdownG.length) == 5 && (2 ^ imagemanagert) == 3));
      if ((5 ^ imagemanagert) == 1) {
         imagemanagert += 1 & dropdownG.length;
      }
         dropdownG += `${imagemanagert - dropdownG.length}`;
      while (3 == (3 * imagemanagert)) {
          let moreC = false;
          let refresh1 = 2.0;
          let window_vx = String.fromCharCode(100,105,116,104,101,114,95,55,95,51,51,0);
          let typingt = false;
          let gray7 = String.fromCharCode(120,95,51,95,115,104,97,114,100,0);
         imagemanagert %= Math.max(1, (String.fromCharCode(85,0) == gray7 ? gray7.length : (typingt ? 3 : 2)));
         moreC = 49.84 > refresh1;
         refresh1 -= parseFloat(`${window_vx.length | 2}`);
         window_vx = `${2 - parseInt(`${refresh1}`)}`;
         typingt = moreC;
         break;
      }
          let reactnativeratingsr: Map<any, any> = new Map([[String.fromCharCode(118,97,97,112,105,95,102,95,55,51,0),862], [String.fromCharCode(107,98,105,116,95,98,95,53,56,0),548]]);
         imagemanagert |= dropdownG.length << (Math.min(Math.abs(1), 5));
         reactnativeratingsr.set(`${reactnativeratingsr.size}`, 1 & reactnativeratingsr.size);
          let temperatureX = 4.0;
          let bingv = 0;
          let mbnative5 = String.fromCharCode(120,95,51,53,95,109,118,114,101,102,0);
         imagemanagert <<= Math.min(dropdownG.length, 5);
         temperatureX /= Math.max(3, 3 & bingv);
         bingv ^= 2;
         mbnative5 += "3";
      proxyH.set(entryz, imagemanagert * 2);
   }
      inactivec += "1";
   if (entryz.endsWith(`${yellowredcards}`)) {
      entryz += "3";
   }

      if (onlineComments) {

   while (2 < (turndownb.length / (Math.max(5, 7)))) {
      turndownb += `${(turndownb == String.fromCharCode(98,0) ? shootyesgoalw : turndownb.length)}`;
      break;
   }
       let teamH = false;
      while (!teamH) {
         teamH = (!teamH ? !teamH : teamH);
         break;
      }
         teamH = !teamH;
         teamH = !teamH;
      proxyH = new Map([[`${profileu}`, parseInt(`${profileu}`) % 1]]);
      proxyH.set(entryz, proxyH.size);
      libflipperu = [inactivec.length ^ 2];
   while (3.96 >= (profileu * 4.5) || 1 >= (entryz.length / 3)) {
       let cnewsshareP = 0;
       let successy = String.fromCharCode(117,115,101,114,115,112,97,99,101,95,110,95,50,0);
         successy += `${(successy == String.fromCharCode(110,0) ? successy.length : cnewsshareP)}`;
      while (3 >= (cnewsshareP * successy.length) && 4 >= (3 * cnewsshareP)) {
          let weatherP = 2.0;
          let moreG = String.fromCharCode(99,111,109,98,105,110,101,95,99,95,56,48,0);
          let transferx = 4.0;
         cnewsshareP /= Math.max(2, moreG.length);
         weatherP /= Math.max(parseFloat(`${parseInt(`${weatherP}`) * parseInt(`${transferx}`)}`), 4);
         moreG += `${2 * parseInt(`${transferx}`)}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
         successy += `${2 + successy.length}`;
      }
          let analytics4: Array<any> = [455, 939];
          let notificationfillemptyo = 5.0;
         successy += `${cnewsshareP / (Math.max(successy.length, 1))}`;
         analytics4 = [3 << (Math.min(3, analytics4.length))];
         notificationfillemptyo /= Math.max(4, parseFloat(`${parseInt(`${notificationfillemptyo}`)}`));
      if (4 >= (successy.length * cnewsshareP)) {
          let switch_sja = 4.0;
         cnewsshareP <<= Math.min(1, Math.abs(1));
         switch_sja -= parseFloat(`${parseInt(`${switch_sja}`)}`);
      }
          let themed = String.fromCharCode(98,110,99,98,98,95,101,95,51,54,0);
          let confirmationr = 5.0;
          let default_qU = false;
         successy = `${cnewsshareP}`;
         themed += `${themed.length & 1}`;
         confirmationr /= Math.max(3, 2 | themed.length);
         default_qU = confirmationr > 92.60;
      entryz += `${handlerW.length * 2}`;
      break;
   }
        mergedArray = locComments.concat(onlineComments);
      } else {

      videor <<= Math.min(5, Math.abs(entryz.length % 1));
      shootyesgoalw %= Math.max(1, shootyesgoalw);
   while (2 >= (entryz.length << (Math.min(Math.abs(2), 3))) && (videor << (Math.min(entryz.length, 4))) >= 2) {
      entryz = `${unimplementedviewR.size}`;
      break;
   }
   if (!turndownb.startsWith(entryz)) {
      entryz = `${turndownb.length}`;
   }
   let updatesU = inactivec.length <= 7952813;
   do {
       let dangerF = String.fromCharCode(105,95,57,57,95,115,117,98,102,114,97,109,101,115,0);
       let pushz = String.fromCharCode(97,95,54,52,95,102,114,97,109,101,115,105,122,101,0);
      if (pushz.length >= 4) {
         pushz += `${dangerF.length}`;
      }
          let libsgcoreq = String.fromCharCode(98,121,114,121,105,95,50,95,49,51,0);
          let cast8 = false;
          let changeD = 4.0;
         pushz = `${pushz.length | 2}`;
         libsgcoreq += `${(String.fromCharCode(87,0) == libsgcoreq ? libsgcoreq.length : (cast8 ? 3 : 4))}`;
         cast8 = !cast8;
         changeD *= parseFloat(`${libsgcoreq.length}`);
      for (let f = 0; f < 2; f++) {
         pushz = `${(dangerF == String.fromCharCode(103,0) ? dangerF.length : pushz.length)}`;
      }
          let dycreatort = String.fromCharCode(118,97,108,117,101,100,95,117,95,50,55,0);
         pushz = `${dangerF.length & dycreatort.length}`;
          let injuryz = String.fromCharCode(107,95,57,95,102,114,97,109,101,104,97,115,104,0);
         pushz = `${1 * dangerF.length}`;
         injuryz = `${injuryz.length * 3}`;
          let phones = String.fromCharCode(103,95,56,95,98,105,116,118,101,99,0);
          let footballfiledlayout_ = String.fromCharCode(97,114,103,115,95,50,95,52,56,0);
          let chinaW = 1;
         pushz += `${chinaW}`;
         phones += `${phones.length}`;
         footballfiledlayout_ = `${footballfiledlayout_.length * phones.length}`;
         chinaW &= 3 * phones.length;
      inactivec = `${parseInt(`${iconshareZ}`)}`;
      if (updatesU) {
         break;
      }
   } while (updatesU && (inactivec.length < entryz.length));
        mergedArray = onlineComments;
      }

      setAllComment(mergedArray);

      profileu *= defaultpredictionprofile2.size & entryz.length;
      iconshareZ *= inactivec.length;
      fileds = `${parseInt(`${iconshareZ}`) % 3}`;
      yellowredcards += parseFloat(`${defaultpredictionprofile2.size}`);
      defaultpredictionprofile2 = new Map([[`${libflipperu.length}`, libflipperu.length & 2]]);
      setShowLoading(isFetchingComments);

      iconshareZ *= turndownb.length - 3;
      shootyesgoalw <<= Math.min(entryz.length, 2);
   if ((internet_.size - 2) <= 2 || 2 <= (unimplementedviewR.size - internet_.size)) {
       let dependencyu = String.fromCharCode(110,95,57,53,95,115,104,105,109,0);
      while (1 == dependencyu.length && dependencyu != String.fromCharCode(66,0)) {
         dependencyu += `${dependencyu.length * 2}`;
         break;
      }
      while (dependencyu != dependencyu) {
          let componentx = 1.0;
          let p_unlockx = String.fromCharCode(107,95,52,49,95,97,108,108,111,119,105,0);
          let register_myk = String.fromCharCode(107,95,55,56,95,100,101,99,111,114,0);
          let sentryn: Map<any, any> = new Map([[String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,119,95,49,48,0),754], [String.fromCharCode(102,95,57,52,95,115,101,108,101,99,116,111,112,0),246]]);
          let viewerf = false;
         dependencyu += "2";
         componentx /= Math.max(4, p_unlockx.length);
         p_unlockx = `${sentryn.size & 2}`;
         register_myk += "3";
         sentryn.set(register_myk, p_unlockx.length % 2);
         viewerf = (sentryn.size % (Math.max(2, p_unlockx.length))) > 89;
         break;
      }
      let grayK = dependencyu.length >= 6577786;
      do {
         dependencyu += `${dependencyu.length}`;
         if (grayK) {
            break;
         }
      } while (grayK && (dependencyu.length < dependencyu.length));
      unimplementedviewR = new Map([[handlerW, shootyesgoalw]]);
   }
       let pressureH = String.fromCharCode(122,95,55,50,95,102,111,111,0);
         pressureH = `${pressureH.length | 1}`;
      if (pressureH.length < pressureH.length) {
          let sentry_: Array<any> = [172, 4];
          let project4 = 0.0;
         pressureH += `${2 - sentry_.length}`;
         sentry_.push(parseInt(`${project4}`));
      }
      while (pressureH.length < 5) {
         pressureH += `${pressureH.length ^ pressureH.length}`;
         break;
      }
      handlerW = "2";
      turndownb += `${internet_.size % 2}`;
      console.log("done");
    };

    if (!isFetchingComments) {
      mergeAllComments();
    }
  }, [isFetchingComments, isUpdated]);

  const locCommentId = "userComment" + vod?.vod_id;
  const getLocalComments = async () => {
       let emptyv = String.fromCharCode(108,95,54,53,95,114,111,113,118,105,100,101,111,0);
    let listo = 5.0;
    let private_tJ = 0;
    let handlerX: Map<any, any> = new Map([[String.fromCharCode(97,110,115,105,95,106,95,57,53,0),243], [String.fromCharCode(98,95,53,48,95,102,111,110,116,115,0),508], [String.fromCharCode(105,110,118,105,116,101,95,114,95,57,53,0),734]]);
    let updatesv = false;
    let with_cB: Array<any> = [174, 725, 717];
    let hovere = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,55,95,54,56,0);
    let exampleimageU: Map<any, any> = new Map([[String.fromCharCode(116,95,51,51,95,112,114,111,99,101,115,115,111,114,0),108], [String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,50,95,56,56,0),16], [String.fromCharCode(114,95,55,52,95,109,101,109,110,0),28]]);
    let pnewarchdefaultsD = 3;
    let yellowanimationliveK: Map<any, any> = new Map([[String.fromCharCode(106,95,55,56,95,97,114,116,105,99,108,101,115,0),117], [String.fromCharCode(104,95,49,48,48,95,99,111,110,118,0),353], [String.fromCharCode(106,95,55,50,95,115,97,116,100,120,0),478]]);
    let rightx: Array<any> = [String.fromCharCode(100,95,51,50,95,107,102,114,109,0), String.fromCharCode(98,97,115,101,95,115,95,56,54,0), String.fromCharCode(111,100,105,110,103,95,112,95,55,0)];
      with_cB.push((String.fromCharCode(65,0) == emptyv ? exampleimageU.size : emptyv.length));
   let predictionactiveo = 6670235 <= with_cB.length;
   do {
      with_cB = [exampleimageU.size & hovere.length];
      if (predictionactiveo) {
         break;
      }
   } while (predictionactiveo && (1 >= (1 >> (Math.min(1, Math.abs(handlerX.size)))) && (handlerX.size >> (Math.min(Math.abs(1), 2))) >= 4));
      private_tJ >>= Math.min(Math.abs((String.fromCharCode(111,0) == hovere ? hovere.length : exampleimageU.size)), 1);

    try {

   for (let c = 0; c < 1; c++) {
      emptyv += `${((updatesv ? 5 : 2) / (Math.max(2, 1)))}`;
   }
      updatesv = (private_tJ % (Math.max(handlerX.size, 2))) == 99;
   for (let i = 0; i < 2; i++) {
      hovere = `${3 ^ exampleimageU.size}`;
   }
      const comments = await AsyncStorage.getItem(locCommentId);

      private_tJ %= Math.max(5, parseInt(`${listo}`));
      hovere += `${((updatesv ? 1 : 2) >> (Math.min(with_cB.length, 2)))}`;
   let shielddonev = hovere.length <= 7924757;
   do {
       let rootg = String.fromCharCode(97,119,97,105,116,95,49,95,57,54,0);
         rootg += `${(rootg == String.fromCharCode(103,0) ? rootg.length : rootg.length)}`;
         rootg = `${rootg.length & 1}`;
         rootg += "1";
      hovere = `${handlerX.size << (Math.min(Math.abs(3), 2))}`;
      if (shielddonev) {
         break;
      }
   } while ((5 <= hovere.length) && shielddonev);
      console.log("comments stored in local storage ", locCommentId);

       let iconwatchnowB = String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,115,95,49,50,0);
       let package_o2: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,99,97,116,105,111,110,95,103,95,50,57,0),false ], [String.fromCharCode(110,111,116,95,100,95,51,48,0),false ]]);
       let navigation6 = 5.0;
       let logouserL = 5.0;
      for (let v = 0; v < 3; v++) {
          let configo = String.fromCharCode(109,111,110,105,116,111,114,105,110,103,95,97,95,52,49,0);
          let tempw = String.fromCharCode(98,95,57,54,95,115,101,109,97,112,104,111,114,101,0);
         iconwatchnowB += `${parseInt(`${navigation6}`)}`;
         configo = "1";
         tempw = `${tempw.length}`;
      }
      for (let g = 0; g < 3; g++) {
         logouserL *= parseFloat(`${3 << (Math.min(3, Math.abs(parseInt(`${navigation6}`))))}`);
      }
          let libturbomodulejsijnil = 5.0;
          let halfL = String.fromCharCode(106,95,57,95,116,114,97,105,110,0);
         package_o2 = new Map([[`${libturbomodulejsijnil}`, 3]]);
         libturbomodulejsijnil *= halfL.length;
         halfL = "1";
       let cornerr = 2;
      while ((iconwatchnowB.length >> (Math.min(5, Math.abs(package_o2.size)))) == 1 && (iconwatchnowB.length >> (Math.min(5, Math.abs(package_o2.size)))) == 1) {
          let fastforwardy = true;
          let privatechatbgf = false;
          let infot = String.fromCharCode(112,105,120,102,109,116,95,109,95,50,53,0);
          let crossU = String.fromCharCode(98,101,99,97,117,115,101,95,106,95,52,50,0);
         package_o2.set(`${privatechatbgf}`, ((fastforwardy ? 2 : 5)));
         fastforwardy = crossU == String.fromCharCode(99,0);
         infot += `${infot.length + 1}`;
         crossU = `${(String.fromCharCode(101,0) == crossU ? crossU.length : infot.length)}`;
         break;
      }
      listo += (emptyv == String.fromCharCode(54,0) ? emptyv.length : private_tJ);
       let playercommonI = 1.0;
       let trashr = true;
       let subtextB = 2.0;
       let kuaishoul = 4;
      if ((5.45 - playercommonI) >= 5.24) {
          let predictionactiveI = 2.0;
          let statisticsinactiveW: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,101,114,115,95,117,95,57,53,0),631], [String.fromCharCode(101,120,97,110,100,101,100,95,56,95,49,0),261]]);
          let sideU = String.fromCharCode(105,95,54,54,95,105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0);
          let fieldb = 4.0;
         kuaishoul |= (parseInt(`${subtextB}`) % (Math.max(7, (trashr ? 3 : 2))));
         predictionactiveI *= parseFloat(`${2}`);
         statisticsinactiveW = new Map([[`${statisticsinactiveW.size}`, statisticsinactiveW.size - 3]]);
         sideU = `${parseInt(`${fieldb}`)}`;
         fieldb /= Math.max(parseFloat(`${2}`), 2);
      }
       let templateprocessorK = String.fromCharCode(101,100,116,115,95,111,95,55,48,0);
      let vietnamf = 9793496.0 <= playercommonI;
      do {
         playercommonI *= (parseFloat(`${(trashr ? 2 : 4) % (Math.max(kuaishoul, 8))}`));
         if (vietnamf) {
            break;
         }
      } while (vietnamf && ((parseInt(`${playercommonI}`) * templateprocessorK.length) < 1));
         trashr = 45.19 <= playercommonI;
      if ((subtextB - 2.78) < 2.51 && 4 < (parseInt(`${subtextB}`) - templateprocessorK.length)) {
          let sellu: Array<any> = [830, 378];
          let middleQ: Map<any, any> = new Map([[String.fromCharCode(115,95,51,49,95,108,101,97,115,101,0),685], [String.fromCharCode(100,117,109,112,105,110,103,95,119,95,56,55,0),742], [String.fromCharCode(103,95,56,50,95,115,117,112,112,114,101,115,115,101,100,0),77]]);
          let tickedZ = 3.0;
         templateprocessorK = `${2 & parseInt(`${playercommonI}`)}`;
         sellu = [middleQ.size / (Math.max(1, 10))];
         middleQ = new Map([[`${middleQ.size}`, 3]]);
         tickedZ /= Math.max(3, sellu.length);
      }
      let condensedq = playercommonI >= 9650775.0;
      do {
         playercommonI += (parseFloat(`${(trashr ? 2 : 2) | parseInt(`${subtextB}`)}`));
         if (condensedq) {
            break;
         }
      } while (condensedq && (!templateprocessorK.endsWith(`${playercommonI}`)));
      let brightness9 = trashr ? !trashr : trashr;
      do {
         trashr = !templateprocessorK.includes(`${trashr}`);
         if (brightness9) {
            break;
         }
      } while ((1.47 < subtextB) && brightness9);
      if (3 <= (templateprocessorK.length + 4)) {
          let zhuboi = String.fromCharCode(111,119,110,108,111,97,100,95,53,95,55,52,0);
          let smallu = 5.0;
          let untickG: Map<any, any> = new Map([[String.fromCharCode(122,95,51,50,95,102,111,99,117,115,0),true ], [String.fromCharCode(110,112,97,116,99,104,101,115,95,112,95,55,56,0),false ], [String.fromCharCode(117,95,56,51,95,101,110,115,117,114,101,0),true ]]);
         templateprocessorK = `${(String.fromCharCode(98,0) == templateprocessorK ? templateprocessorK.length : parseInt(`${subtextB}`))}`;
         zhuboi = `${2 / (Math.max(4, parseInt(`${smallu}`)))}`;
         smallu /= Math.max(5, 2 * zhuboi.length);
         untickG.set(`${smallu}`, zhuboi.length + 2);
      }
      listo -= private_tJ;
   while (!Array.from(handlerX.values()).includes(with_cB.length)) {
       let liveW = 4;
          let iconuser4 = String.fromCharCode(109,99,111,114,101,95,57,95,52,54,0);
         liveW /= Math.max(2, 1);
         iconuser4 = `${iconuser4.length}`;
          let tooltips3: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,101,110,95,122,95,53,52,0),724], [String.fromCharCode(112,101,114,115,105,115,116,95,110,95,57,52,0),804], [String.fromCharCode(109,95,56,56,95,108,112,99,108,115,112,0),826]]);
          let moree: Map<any, any> = new Map([[String.fromCharCode(115,95,50,52,95,117,110,102,105,108,116,101,114,101,100,0),659], [String.fromCharCode(108,111,110,103,95,113,95,51,56,0),774], [String.fromCharCode(103,95,52,51,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0),869]]);
          let i_managerF = 0.0;
         liveW %= Math.max(2, moree.size ^ 1);
         tooltips3.set(`${i_managerF}`, 1);
         moree.set(`${i_managerF}`, tooltips3.size);
       let liveendmodallogoo = String.fromCharCode(120,99,116,101,115,116,95,114,95,52,55,0);
       let iconbellactiveM = String.fromCharCode(106,115,111,110,115,95,107,95,57,0);
      handlerX.set(`${private_tJ}`, 1 / (Math.max(private_tJ, 9)));
      break;
   }
      console.log(comments);

   let storeI = 9602813.0 >= listo;
   do {
       let schedulerF = 5.0;
       let relatedB = 0.0;
         schedulerF -= parseFloat(`${parseInt(`${schedulerF}`) << (Math.min(4, Math.abs(parseInt(`${relatedB}`))))}`);
       let u_viewC = 1.0;
         schedulerF *= parseFloat(`${2}`);
         schedulerF *= parseFloat(`${1 % (Math.max(parseInt(`${schedulerF}`), 8))}`);
      let matchesO = schedulerF <= 5344426.0;
      do {
          let philippinesm = 5.0;
          let apps_: Map<any, any> = new Map([[String.fromCharCode(110,95,52,49,95,102,105,110,103,101,114,115,0),false ], [String.fromCharCode(115,116,114,101,101,116,95,114,95,50,54,0),true ], [String.fromCharCode(118,95,53,53,95,110,100,101,102,0),false ]]);
          let thumbnail8 = String.fromCharCode(121,95,54,49,95,103,97,117,115,115,105,97,110,105,105,114,100,0);
          let usernameo: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,112,95,99,95,53,53,0),517], [String.fromCharCode(114,95,50,52,95,103,114,97,121,97,0),725], [String.fromCharCode(110,95,56,95,114,101,112,114,101,112,97,114,101,0),466]]);
         schedulerF *= (parseFloat(`${thumbnail8 == String.fromCharCode(53,0) ? parseInt(`${relatedB}`) : thumbnail8.length}`));
         philippinesm += 2 % (Math.max(2, apps_.size));
         apps_.set(`${apps_.size}`, apps_.size);
         usernameo.set(`${philippinesm}`, 2);
         if (matchesO) {
            break;
         }
      } while (matchesO && (3.7 <= u_viewC));
          let footballfiledlayoutC: Map<any, any> = new Map([[String.fromCharCode(104,95,53,95,97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0),854], [String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,120,95,56,53,0),400]]);
          let tickedL = String.fromCharCode(105,110,116,101,110,116,105,111,110,95,108,95,55,0);
          let componentsB = 3.0;
         u_viewC += 3 - tickedL.length;
         footballfiledlayoutC = new Map([[`${footballfiledlayoutC.size}`, parseInt(`${componentsB}`) + 3]]);
         tickedL = `${parseInt(`${componentsB}`) % (Math.max(footballfiledlayoutC.size, 3))}`;
      listo += parseInt(`${listo}`);
      if (storeI) {
         break;
      }
   } while (storeI && (updatesv));
      private_tJ &= 1;
   while (handlerX.get(`${private_tJ}`) == null) {
       let minimizeB: Map<any, any> = new Map([[String.fromCharCode(109,97,110,117,97,108,108,121,95,106,95,49,57,0),267], [String.fromCharCode(97,95,49,49,95,100,97,116,97,104,97,115,104,0),262]]);
       let shootB: Array<any> = [194, 162];
       let dangerZ = String.fromCharCode(99,95,54,56,95,112,105,120,101,108,0);
       let matchZ = 2;
          let fasti = String.fromCharCode(106,95,51,95,109,97,103,110,105,116,117,100,101,0);
          let icopy_cH = 4;
          let libsgcore6 = 1.0;
         shootB = [shootB.length >> (Math.min(Math.abs(1), 1))];
         fasti += "1";
         icopy_cH ^= icopy_cH & fasti.length;
         libsgcore6 -= 3 + icopy_cH;
      for (let h = 0; h < 2; h++) {
         minimizeB = new Map([[`${minimizeB.size}`, shootB.length / (Math.max(2, minimizeB.size))]]);
      }
          let inactiveU = 4.0;
         shootB = [shootB.length & dangerZ.length];
         inactiveU += parseFloat(`${parseInt(`${inactiveU}`)}`);
      let type_8M = matchZ <= 8660817;
      do {
         matchZ *= shootB.length;
         if (type_8M) {
            break;
         }
      } while (type_8M && (matchZ >= 1));
      for (let f = 0; f < 3; f++) {
         minimizeB.set(`${matchZ}`, dangerZ.length - matchZ);
      }
         matchZ += matchZ & dangerZ.length;
         shootB.push(shootB.length << (Math.min(2, Math.abs(minimizeB.size))));
      if (!dangerZ.endsWith(`${matchZ}`)) {
         matchZ -= 1 - dangerZ.length;
      }
          let inouttargetred4 = 1;
         shootB = [1 >> (Math.min(3, Math.abs(inouttargetred4)))];
      let condensed4 = 6737071 >= matchZ;
      do {
          let tailj = String.fromCharCode(104,117,102,102,121,117,118,100,115,112,95,105,95,50,48,0);
          let clocki: Array<any> = [402, 197];
          let background_ = String.fromCharCode(97,95,54,55,95,109,97,112,0);
          let detailO = 3.0;
         matchZ ^= dangerZ.length | tailj.length;
         tailj = `${background_.length >> (Math.min(1, clocki.length))}`;
         clocki.push(clocki.length % (Math.max(background_.length, 8)));
         detailO *= 3 * background_.length;
         if (condensed4) {
            break;
         }
      } while (condensed4 && ((matchZ + shootB.length) < 5));
         dangerZ = `${matchZ ^ dangerZ.length}`;
         matchZ ^= 2;
      handlerX = new Map([[`${minimizeB.size}`, 2]]);
      break;
   }

      if (comments !== null) {

      with_cB.push(((updatesv ? 2 : 4) + handlerX.size));
       let agreement3 = 3.0;
       let feedbackx: Map<any, any> = new Map([[String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,122,95,56,0),false ], [String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,95,106,95,50,48,0),true ]]);
       let predictionarrow1: Map<any, any> = new Map([[String.fromCharCode(110,95,57,48,95,115,97,109,112,108,105,110,103,0),552], [String.fromCharCode(119,95,50,50,95,109,97,107,101,116,97,114,98,97,108,108,0),31]]);
         predictionarrow1.set(`${feedbackx.size}`, predictionarrow1.size);
       let questF = String.fromCharCode(119,95,51,51,95,116,104,117,109,98,115,0);
       let awayteamfieldq = String.fromCharCode(100,95,51,95,109,97,110,121,0);
      emptyv += `${private_tJ}`;
      agreement3 *= parseFloat(`${1}`);
       let subsR = String.fromCharCode(112,97,114,97,103,114,97,112,104,95,51,95,55,0);
       let typingW: Map<any, any> = new Map([[String.fromCharCode(100,95,56,51,95,115,105,103,110,108,101,0),String.fromCharCode(116,114,101,110,100,108,105,110,101,95,51,95,51,54,0)], [String.fromCharCode(121,95,53,54,95,115,116,114,97,116,101,103,105,101,115,0),String.fromCharCode(100,105,118,95,56,95,56,57,0)], [String.fromCharCode(116,95,51,95,111,117,116,0),String.fromCharCode(97,95,55,52,95,115,97,109,101,113,0)]]);
      for (let z = 0; z < 3; z++) {
          let libfbjnil: Map<any, any> = new Map([[String.fromCharCode(97,95,51,50,0),true ], [String.fromCharCode(109,98,117,118,101,114,114,111,114,95,48,95,50,53,0),false ]]);
          let flipperM: Map<any, any> = new Map([[String.fromCharCode(114,105,110,102,95,100,95,50,0),false ], [String.fromCharCode(99,95,54,57,95,109,97,120,120,0),false ]]);
         subsR += `${1 << (Math.min(2, Math.abs(typingW.size)))}`;
         libfbjnil.set(`${flipperM.size}`, 2 >> (Math.min(3, Math.abs(libfbjnil.size))));
         flipperM = new Map([[`${flipperM.size}`, flipperM.size | libfbjnil.size]]);
      }
       let libyoga4 = String.fromCharCode(106,95,57,51,95,109,97,120,98,105,116,114,97,116,101,0);
       let libreactnativeblobZ = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,122,95,56,55,0);
      if (2 > libreactnativeblobZ.length || 2 > libyoga4.length) {
          let buttond = String.fromCharCode(112,95,50,52,95,99,97,114,100,97,110,111,0);
          let commentm = String.fromCharCode(99,95,49,52,95,98,111,111,115,116,0);
         libreactnativeblobZ += `${(String.fromCharCode(115,0) == libyoga4 ? libyoga4.length : typingW.size)}`;
         buttond += `${buttond.length / (Math.max(1, 1))}`;
         commentm = `${commentm.length - buttond.length}`;
      }
      if (!libyoga4.startsWith(`${subsR.length}`)) {
         subsR = `${typingW.size}`;
      }
          let templateprocessora: Array<any> = [943, 746, 315];
         libyoga4 = `${1 ^ libreactnativeblobZ.length}`;
         templateprocessora = [templateprocessora.length + templateprocessora.length];
          let zhengpian5 = String.fromCharCode(109,111,100,117,108,101,95,50,95,57,56,0);
          let watchr = String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,109,95,52,56,0);
          let halfZ = String.fromCharCode(101,120,116,114,99,95,120,95,52,56,0);
         libreactnativeblobZ = `${watchr.length | libreactnativeblobZ.length}`;
         zhengpian5 = `${halfZ.length}`;
         watchr += `${2 >> (Math.min(3, zhengpian5.length))}`;
         halfZ = "2";
      handlerX = new Map([[`${exampleimageU.size}`, exampleimageU.size]]);
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

       let libsgcorez = 0.0;
       let bodan4 = 5;
       let encrypts = String.fromCharCode(112,114,105,110,116,102,95,115,95,55,49,0);
       let dropdowne = String.fromCharCode(112,111,114,116,95,112,95,51,0);
      for (let m = 0; m < 1; m++) {
         libsgcorez -= bodan4;
      }
         dropdowne += `${bodan4 + dropdowne.length}`;
          let sportb = 1;
         libsgcorez -= 1;
         sportb >>= Math.min(Math.abs(sportb - 3), 5);
       let remindera = String.fromCharCode(98,105,110,116,114,101,101,95,57,95,56,56,0);
          let formi = String.fromCharCode(121,95,57,54,95,99,111,108,0);
          let libsentryv = true;
          let crownz = 3.0;
         libsgcorez /= Math.max((encrypts == String.fromCharCode(103,0) ? parseInt(`${libsgcorez}`) : encrypts.length), 5);
         formi = `${(parseInt(`${crownz}`) * (libsentryv ? 5 : 1))}`;
         libsentryv = !libsentryv && 12.55 < crownz;
      handlerX.set(`${bodan4}`, with_cB.length);
   if (emptyv.length == 2) {
      handlerX = new Map([[`${with_cB.length}`, with_cB.length + 2]]);
   }
   for (let j = 0; j < 1; j++) {
      handlerX = new Map([[`${with_cB.length}`, (String.fromCharCode(86,0) == hovere ? with_cB.length : hovere.length)]]);
   }
      console.log("error when retrieving local comments: ", error);

      listo -= parseInt(`${listo}`) - with_cB.length;
   while (2 > (hovere.length - 4) && 4 > (4 - private_tJ)) {
      private_tJ <<= Math.min(4, Math.abs(3));
      break;
   }
   while (handlerX.size > hovere.length) {
      hovere += `${1 / (Math.max(3, hovere.length))}`;
      break;
   }
      return [];
    }
  };

  const storeUserComments = async () => {
       let ballk = String.fromCharCode(99,95,52,55,95,101,110,115,117,114,101,100,0);
    let goalQ = 1.0;
    let privatechatbgf = String.fromCharCode(98,105,114,116,104,95,118,95,53,55,0);
    let sportE: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,116,111,111,108,98,111,120,0),String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,112,95,49,48,48,0)], [String.fromCharCode(111,100,97,116,97,95,101,95,51,53,0),String.fromCharCode(108,95,53,53,95,97,112,101,114,0)]]);
    let result7 = String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,95,121,95,53,48,0);
    let orientationE = 3.0;
    let libreactnativejniE = 2.0;
    let yellowanimationlivev = 1;
   while ((result7.length - sportE.size) == 5) {
      sportE = new Map([[`${goalQ}`, parseInt(`${goalQ}`) % (Math.max(2, result7.length))]]);
      break;
   }
      ballk = `${parseInt(`${orientationE}`)}`;

    if (!comment) {

       let predictionwinE = String.fromCharCode(117,95,54,50,95,116,114,101,101,115,0);
      if (predictionwinE.length == 2) {
         predictionwinE = "3";
      }
      for (let p = 0; p < 2; p++) {
          let dropdownJ = String.fromCharCode(118,95,55,53,95,99,121,99,108,101,100,0);
          let predictionwinz = 1.0;
         predictionwinE = `${2 + dropdownJ.length}`;
         dropdownJ = `${parseInt(`${predictionwinz}`) >> (Math.min(5, Math.abs(1)))}`;
         predictionwinz /= Math.max(parseFloat(`${parseInt(`${predictionwinz}`) & 1}`), 2);
      }
      while (!predictionwinE.includes(predictionwinE)) {
         predictionwinE = `${predictionwinE.length}`;
         break;
      }
      ballk += `${1 * parseInt(`${orientationE}`)}`;
       let bootsplashU = 3.0;
       let codegenM = 0.0;
       let iconsubssuccess8 = false;
      while (3.29 == (codegenM - bootsplashU) || 3.29 == (bootsplashU - codegenM)) {
         bootsplashU -= parseFloat(`${parseInt(`${codegenM}`)}`);
         break;
      }
      for (let l = 0; l < 3; l++) {
         iconsubssuccess8 = 1.69 > (bootsplashU / (Math.max(codegenM, 5)));
      }
      while (5.59 >= (codegenM / (Math.max(1.87, 8))) || 1.94 >= (1.87 / (Math.max(1, bootsplashU)))) {
         bootsplashU /= Math.max(5, parseFloat(`${parseInt(`${codegenM}`) & 1}`));
         break;
      }
         codegenM -= ((iconsubssuccess8 ? 5 : 4) % (Math.max(parseInt(`${codegenM}`), 3)));
         codegenM -= 2 - parseInt(`${codegenM}`);
         bootsplashU -= (parseFloat(`${parseInt(`${codegenM}`) * (iconsubssuccess8 ? 4 : 5)}`));
         codegenM *= parseInt(`${bootsplashU}`);
          let mapbuffero = 5;
          let runtimeP = String.fromCharCode(114,97,119,95,102,95,49,57,0);
         iconsubssuccess8 = !iconsubssuccess8;
         mapbuffero /= Math.max(mapbuffero, 5);
         runtimeP = `${runtimeP.length ^ mapbuffero}`;
         codegenM *= parseInt(`${codegenM}`) >> (Math.min(5, Math.abs(1)));
      ballk += "2";
      return;
    }

    console.log("user comment", comment);

       let f_player_ = false;
      while (!f_player_) {
         f_player_ = (!f_player_ ? f_player_ : f_player_);
         break;
      }
         f_player_ = (!f_player_ ? f_player_ : f_player_);
         f_player_ = f_player_ || !f_player_;
      orientationE *= parseFloat(`${sportE.size}`);
      libreactnativejniE += parseFloat(`${privatechatbgf.length & 1}`);
    try {

   for (let h = 0; h < 1; h++) {
       let station9 = 3.0;
       let skipc = String.fromCharCode(114,95,52,51,95,100,101,109,111,100,117,108,97,116,101,0);
      while ((skipc.length % 1) < 2) {
         station9 /= Math.max(4, skipc.length);
         break;
      }
         station9 /= Math.max(3, parseInt(`${station9}`));
         station9 /= Math.max(4, 1);
      let serviceN = station9 <= 6759738.0;
      do {
         station9 += 3;
         if (serviceN) {
            break;
         }
      } while (serviceN && (!skipc.startsWith(`${station9}`)));
         station9 -= parseInt(`${station9}`) + 1;
         skipc += `${3 * skipc.length}`;
      yellowanimationlivev += parseInt(`${libreactnativejniE}`) / 2;
   }
      libreactnativejniE -= parseFloat(`${privatechatbgf.length ^ parseInt(`${orientationE}`)}`);
      const existingComments = await getLocalComments();

      yellowanimationlivev /= Math.max(5, 2);
      goalQ *= parseInt(`${libreactnativejniE}`);
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      };

   while (4 > yellowanimationlivev) {
      yellowanimationlivev += (result7 == String.fromCharCode(121,0) ? result7.length : parseInt(`${libreactnativejniE}`));
      break;
   }
   while (!result7.endsWith(`${goalQ}`)) {
      result7 += `${result7.length - yellowanimationlivev}`;
      break;
   }
      existingComments.unshift(commmentObj);

       let dacccfaabfbcbadeebddcabacdffdbA = false;
          let rightp = 5.0;
         dacccfaabfbcbadeebddcabacdffdbA = !dacccfaabfbcbadeebddcabacdffdbA;
         rightp += parseInt(`${rightp}`) % (Math.max(10, parseInt(`${rightp}`)));
      for (let w = 0; w < 3; w++) {
          let defaultpredictionprofile_: Map<any, any> = new Map([[String.fromCharCode(102,112,101,108,95,110,95,54,53,0),String.fromCharCode(109,105,110,113,95,118,95,54,56,0)], [String.fromCharCode(115,95,51,49,95,115,117,112,112,114,101,115,115,101,100,0),String.fromCharCode(98,114,105,100,103,101,100,95,102,95,56,54,0)], [String.fromCharCode(97,110,116,105,95,55,95,51,52,0),String.fromCharCode(99,111,112,121,118,95,55,95,50,48,0)]]);
          let trophyn: Map<any, any> = new Map([[String.fromCharCode(104,97,118,101,95,108,95,54,49,0),936], [String.fromCharCode(103,95,54,54,95,115,111,97,99,99,101,112,116,0),814]]);
          let ksadD = String.fromCharCode(115,95,54,53,95,105,110,105,116,105,97,116,101,0);
         dacccfaabfbcbadeebddcabacdffdbA = trophyn.get(`${dacccfaabfbcbadeebddcabacdffdbA}`) != null;
         defaultpredictionprofile_.set(ksadD, 1);
         trophyn.set(`${ksadD}`, (String.fromCharCode(81,0) == ksadD ? ksadD.length : defaultpredictionprofile_.size));
      }
      while (dacccfaabfbcbadeebddcabacdffdbA) {
         dacccfaabfbcbadeebddcabacdffdbA = (dacccfaabfbcbadeebddcabacdffdbA ? dacccfaabfbcbadeebddcabacdffdbA : dacccfaabfbcbadeebddcabacdffdbA);
         break;
      }
      result7 = `${(String.fromCharCode(95,0) == result7 ? parseInt(`${goalQ}`) : result7.length)}`;
      orientationE += parseFloat(`${parseInt(`${libreactnativejniE}`)}`);
      await AsyncStorage.setItem(
        locCommentId,
        JSON.stringify(existingComments)
      );

      sportE.set(`${goalQ}`, parseInt(`${goalQ}`));
   if (sportE.get(`${orientationE}`) != null) {
      sportE = new Map([[`${goalQ}`, ballk.length >> (Math.min(5, Math.abs(parseInt(`${goalQ}`))))]]);
   }
      await getLocalComments();

   while (goalQ == 5.31) {
      privatechatbgf += `${ballk.length / (Math.max(3, 6))}`;
      break;
   }
      goalQ *= privatechatbgf.length & parseInt(`${goalQ}`);
      setIsUpdated(!isUpdated);

   for (let u = 0; u < 1; u++) {
      libreactnativejniE += parseFloat(`${result7.length}`);
   }
       let refreshR = String.fromCharCode(105,102,102,116,95,52,95,56,54,0);
         refreshR = "3";
      while (refreshR != String.fromCharCode(113,0)) {
         refreshR += `${2 ^ refreshR.length}`;
         break;
      }
       let readg: Array<any> = [992, 685];
       let volumeY: Array<any> = [761, 765];
      sportE.set(refreshR, refreshR.length * sportE.size);
      Keyboard.dismiss();

   if (5 == ballk.length) {
       let maily = 4.0;
       let uimanagerN: Map<any, any> = new Map([[String.fromCharCode(107,95,49,48,48,95,112,114,111,99,97,109,112,0),false ], [String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,54,95,52,49,0),false ]]);
       let contexty = 3.0;
       let heartH = String.fromCharCode(110,95,54,48,95,108,105,115,116,115,0);
       let mapbufferS = String.fromCharCode(97,95,56,51,95,99,111,118,101,114,101,100,0);
      while (1 == (parseInt(`${contexty}`) - heartH.length) || 4.69 == (parseFloat(`${heartH.length}`) - contexty)) {
          let away7: Array<any> = [25, 618];
          let termsD: Array<any> = [898, 163, 186];
          let phonesharep = 1.0;
          let reminderx = String.fromCharCode(97,108,112,104,97,108,101,115,115,95,120,95,49,48,0);
          let blackH = 2;
         heartH = `${parseInt(`${phonesharep}`)}`;
         away7 = [3 | away7.length];
         termsD = [blackH];
         phonesharep *= 1;
         reminderx = `${blackH << (Math.min(1, Math.abs(3)))}`;
         break;
      }
       let memberZ: Array<any> = [String.fromCharCode(107,95,54,49,95,117,110,114,101,102,99,111,117,110,116,0), String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,100,95,57,56,0)];
       let playU: Array<any> = [647, 639];
         maily -= parseInt(`${maily}`) << (Math.min(mapbufferS.length, 5));
      if (5 > mapbufferS.length) {
          let libturbomodulejsijniq = 3.0;
         playU = [heartH.length ^ mapbufferS.length];
         libturbomodulejsijniq *= parseFloat(`${2 | parseInt(`${libturbomodulejsijniq}`)}`);
      }
      let iconclosewhitebgO = 9469132 >= memberZ.length;
      do {
         memberZ.push(memberZ.length);
         if (iconclosewhitebgO) {
            break;
         }
      } while ((mapbufferS.startsWith(`${memberZ.length}`)) && iconclosewhitebgO);
      while (3 < (memberZ.length / (Math.max(5, playU.length)))) {
         memberZ.push(playU.length - parseInt(`${contexty}`));
         break;
      }
         playU.push(parseInt(`${contexty}`) * 1);
         uimanagerN.set(`${contexty}`, memberZ.length * 1);
      if (Array.from(uimanagerN.keys()).includes(`${maily}`)) {
         uimanagerN.set(mapbufferS, 2 + mapbufferS.length);
      }
      let mbsplashC = 8189484 <= uimanagerN.size;
      do {
         uimanagerN.set(`${playU.length}`, memberZ.length);
         if (mbsplashC) {
            break;
         }
      } while ((Array.from(uimanagerN.values()).includes(maily)) && mbsplashC);
      if (!memberZ.includes(contexty)) {
         memberZ = [mapbufferS.length / (Math.max(1, playU.length))];
      }
      for (let i = 0; i < 3; i++) {
         playU.push(heartH.length ^ parseInt(`${maily}`));
      }
      while (mapbufferS != String.fromCharCode(105,0)) {
         heartH = "1";
         break;
      }
         mapbufferS = "3";
      for (let k = 0; k < 3; k++) {
          let reactnavigation_ = 5.0;
          let questiconJ: Map<any, any> = new Map([[String.fromCharCode(120,106,112,101,103,95,101,95,52,48,0),960], [String.fromCharCode(103,95,50,55,95,116,114,97,105,116,115,0),40], [String.fromCharCode(105,95,50,49,95,108,101,97,118,101,0),334]]);
          let turndownG = String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,103,95,55,50,0);
          let whistlej = String.fromCharCode(101,95,54,50,95,116,114,99,0);
         contexty *= parseFloat(`${questiconJ.size}`);
         reactnavigation_ -= parseFloat(`${whistlej.length}`);
         questiconJ = new Map([[`${reactnavigation_}`, 2]]);
         turndownG += `${turndownG.length}`;
         whistlej += `${(String.fromCharCode(110,0) == turndownG ? turndownG.length : parseInt(`${reactnavigation_}`))}`;
      }
      libreactnativejniE *= parseFloat(`${parseInt(`${libreactnativejniE}`) >> (Math.min(2, Math.abs(2)))}`);
   }
      result7 = `${parseInt(`${libreactnativejniE}`)}`;
      wwLaunchRound.showToast("提交成功，我们将在24小时内进行审核！");
    } catch (error) {

      sportE = new Map([[privatechatbgf, privatechatbgf.length]]);
   for (let j = 0; j < 1; j++) {
      goalQ *= parseInt(`${libreactnativejniE}`) * 1;
   }
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
                      wwBodan.isLogin(userState.user) ? "请评论" : "请登录才进行评论"
                    }
                    editable={wwBodan.isLogin(userState.user)}
                    placeholderTextColor={colors.muted}
                    value={comment}
                    maxLength={200}
                    blurOnSubmit
                  />

                  {wwBodan.isLogin(userState.user) ? (
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
                        <SubmitBtn
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
                source={require("@static/images/runtimeschedulerPromotion.gif")}
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
                            source={require("@static/images/fieldDetails.png")}
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
                            source={require("@static/images/rankDelegate_pnLibavfilter.png")}
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
                            source={require("@static/images/runtimeschedulerPromotion.gif")}
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
