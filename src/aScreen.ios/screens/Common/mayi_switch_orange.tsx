

class HoverIcondefaultthumbnailConfi {
    static commonNalyticsReactnativeultim = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FavoriteButton from "../../components/button/mayi_boot_button";
import FavoriteIcon from "@static/images/reactnativeratingsHomeloading.svg";
import ScreenContainer from "../../components/container/mayi_save";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { mayi_Librrc } from "../../../../mayi_gift";

import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import { mayi_LibswresampleModal, mayi_StreamingSmall } from "@type/mayi_green";
import { addVodToHistory, playVod } from "@redux/actions/mayi_goallogo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import {
  mayi_Full,
  mayi_Middleware,
} from "@redux/reducers/mayi_temp_holder";
import SinaIcon from "@static/images/containerZhubo.svg";
import WeChatIcon from "@static/images/halfLibavformat.svg";
import QQIcon from "@static/images/libswresamplePositionDefaultplayerimg.svg";
import PYQIcon from "@static/images/sendIcondefaultthumbnail.svg";
import MoreArrow from "@static/images/scorepopsoundDefaultprofilepicDycreator.svg";
import VodEpisodeSelectionModal from "../../components/modal/mayi_imagemanager";
import FastImage from "../../components/common/mayi_slider";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/mayi_middleware_apps";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/mayi_matchinactive_button";
import VodListVertical from "../../components/vod/mayi_package";


import VodPlayerMin from "../../components/videoPlayer/mayi_smallorangeman";
import { FlatList } from "react-native-gesture-handler";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import BingSearch from "../../components/container/mayi_thumbnail_country";
import SubmitBtn from "@static/images/subbasketballplayerMatches.svg";

import NoConnection from "../../components/common/mayi_backicon_penalty";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/mayi_modal";
import { AdsBannerContext } from "../../../contexts/mayi_star_sigmob";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";
import TitleWithBackButtonHeader from "../../components/header/mayi_predictiondefault_header";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import mayi_push from "../../../../Umeng/mayi_push";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/mayi_iconorientation_chatroombackground";
import { VodCommentBox } from "../../components/vodComment";
import { mayi_Attributedstring } from "@utility/mayi_source";
import { mayi_CrossChat } from "@api";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

type mayi_FootballtrophyGreytick = {
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

const server = new BridgeServer(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([84,72,72,76,99,79,89,78,74,85,95,89,60],0x3C,false), true); 

const getNoAdsUri = async (url: string) => {
  const startTime = new Date().valueOf();
  const parentUrl = url
    .split("/")
    .filter((part) => !part.includes(".m3u8"))
    .join("/"); 
  const videoSubfolder = parentUrl
    .replace(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([116,104,104,108,111,38,51,51,28],0x1C,false), "")
    .replace(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([46,50,50,54,124,105,105,70],0x46,false), "");
  

  
  
  
  
  
  
  
  
  

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
  const vodReducer: mayi_Middleware = useAppSelector(
    ({ vodReducer }: mayi_Libapminsightb) => vodReducer
  );
  const vodFavouriteReducer: mayi_Full = useAppSelector(
    ({ vodFavouritesReducer }: mayi_Libapminsightb) => vodFavouritesReducer
  );
  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );
  const userState = useSelector<mayi_Baseline>('userReducer');
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
  const videoPlayerRef = useRef() as React.MutableRefObject<mayi_FootballtrophyGreytick>;
  const currentEpisodeRef = useRef<number>();
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const [comment, setComment] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [allComment, setAllComment] = useState<mayi_StreamingSmall[] | undefined>([]);
  const [showLoading, setShowLoading] = useState(true);

  const [isReadyPlay, setReadyPlay] = useState(false);
  const videoRef = useRef<mayi_FootballtrophyGreytick>();

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
          setYuGaoUrl(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([-41,-53,-53,-49,-52,-123,-112,-112,-48,-52,-52,-111,-58,-42,-47,-40,-52,-41,-42,-111,-53,-55,-112,-55,-42,-37,-38,-48,-52,-112,-55,-48,-37,-112,-55,-42,-112,-115,-113,-114,-115,-114,-115,-111,-46,-49,-117,-65],0xBF,false));
          break;
        case 201219:
          setYuGaoUrl(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([1,29,29,25,26,83,70,70,6,26,26,71,16,0,7,14,26,1,0,71,29,31,70,31,0,13,12,6,26,70,31,6,13,70,31,0,70,91,89,88,91,88,80,71,4,25,93,105],0x69,false));
          break;
        case 201282:
          setYuGaoUrl(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([11,23,23,19,16,89,76,76,12,16,16,77,26,10,13,4,16,11,10,77,23,21,76,21,10,7,6,12,16,76,21,12,7,76,21,10,76,81,83,82,81,91,81,77,14,19,87,99],0x63,false));
          break;
        case 201278:
          setYuGaoUrl(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([-9,-21,-21,-17,-20,-91,-80,-80,-16,-20,-20,-79,-26,-10,-15,-8,-20,-9,-10,-79,-21,-23,-80,-23,-10,-5,-6,-16,-20,-80,-23,-16,-5,-80,-23,-10,-80,-83,-81,-82,-83,-88,-89,-79,-14,-17,-85,-97],0x9F,false));
          break;
        case 201410:
          setYuGaoUrl(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([3,31,31,27,24,81,68,68,4,24,24,69,18,2,5,12,24,3,2,69,31,29,68,29,2,15,14,4,24,68,29,4,15,68,29,2,68,89,91,90,95,90,91,69,6,27,95,107],0x6B,false));
          break;
        case 200984:
          setYuGaoUrl(HoverIcondefaultthumbnailConfi.commonNalyticsReactnativeultim([73,85,85,81,82,27,14,14,78,82,82,15,88,72,79,70,82,73,72,15,85,87,14,87,72,69,68,78,82,14,87,78,69,14,87,72,14,19,17,17,24,25,21,15,76,81,21,33],0x21,false));
          break;
        default:
          setYuGaoUrl("");
      }
    }
  }, [vod]);


  const onShare = async () => {
       let heartl: Map<any, any> = new Map([[String.fromCharCode(98,95,50,54,95,115,110,97,112,112,101,100,0),false ], [String.fromCharCode(105,95,49,49,95,109,106,112,101,103,100,101,99,0),false ]]);
    let grayY = String.fromCharCode(100,105,102,102,95,120,95,52,0);
    let bangv = 5;
    let window_nI = 0.0;
    let inouttargetredB = String.fromCharCode(115,116,100,111,117,116,95,110,95,49,48,48,0);
    let model9 = String.fromCharCode(114,101,113,117,105,114,101,115,95,118,95,56,55,0);
    let rncorel = String.fromCharCode(119,95,56,54,95,120,120,104,97,115,104,0);
    let dragK = String.fromCharCode(122,95,57,49,95,99,111,115,105,0);
    let launcherU = 2;
       let register_yil = false;
       let backgroundl: Array<any> = [495, 855];
          let currentp = String.fromCharCode(104,101,97,114,98,101,97,116,95,115,95,55,55,0);
          let libfbjnix = false;
         register_yil = !libfbjnix;
         currentp += `${2 ^ currentp.length}`;
      let actiona = backgroundl.length >= 7637396;
      do {
         backgroundl = [1];
         if (actiona) {
            break;
         }
      } while (actiona && (2 < (backgroundl.length / (Math.max(3, 5))) && !register_yil));
         register_yil = ((backgroundl.length & (register_yil ? 37 : backgroundl.length)) <= 37);
      while (!register_yil) {
         backgroundl = [backgroundl.length];
         break;
      }
         register_yil = !register_yil;
         register_yil = !register_yil;
      inouttargetredB += `${1 / (Math.max(4, parseInt(`${window_nI}`)))}`;
   if (!model9.endsWith(`${rncorel.length}`)) {
      rncorel = `${parseInt(`${window_nI}`) + bangv}`;
   }

    try {

      bangv &= parseInt(`${window_nI}`) + 1;
       let expandA = String.fromCharCode(121,95,51,53,95,115,105,103,110,97,108,115,0);
       let handlerx: Map<any, any> = new Map([[String.fromCharCode(118,97,108,95,121,95,52,55,0),210], [String.fromCharCode(120,95,57,50,95,101,110,117,109,101,114,97,116,101,0),264], [String.fromCharCode(97,100,97,112,116,115,95,97,95,49,0),888]]);
       let mini9 = true;
         handlerx = new Map([[expandA, (String.fromCharCode(112,0) == expandA ? (mini9 ? 3 : 5) : expandA.length)]]);
          let securityn = 2;
          let codegenW: Array<any> = [440, 107];
         mini9 = 50 > expandA.length;
         securityn *= securityn / (Math.max(8, codegenW.length));
         codegenW = [codegenW.length * 1];
         mini9 = !mini9;
          let user0 = String.fromCharCode(113,95,57,54,95,109,97,99,101,120,97,109,112,108,101,0);
          let benefitB = 1;
         expandA += `${(expandA == String.fromCharCode(81,0) ? expandA.length : (mini9 ? 5 : 5))}`;
         user0 = `${user0.length}`;
         benefitB |= benefitB ^ 2;
         expandA = `${(handlerx.size * (mini9 ? 1 : 4))}`;
      let eighteeni = mini9 ? !mini9 : mini9;
      do {
         mini9 = null != handlerx.get(`${mini9}`);
         if (eighteeni) {
            break;
         }
      } while (eighteeni && (!mini9 || 3 < expandA.length));
          let mutedy = String.fromCharCode(116,95,53,55,95,120,111,114,101,100,0);
          let static_jm = String.fromCharCode(99,111,100,101,114,95,105,95,56,51,0);
         expandA = "1";
         mutedy = "3";
         static_jm += `${static_jm.length}`;
      while (!mini9) {
         mini9 = 91 <= expandA.length;
         break;
      }
          let notificationY = String.fromCharCode(108,95,56,55,95,114,97,100,102,0);
          let pingi: Array<any> = [552, 874];
          let moreI = 3.0;
         handlerx.set(`${expandA}`, 2);
         notificationY += `${(notificationY == String.fromCharCode(67,0) ? pingi.length : notificationY.length)}`;
         pingi.push(parseInt(`${moreI}`) % 2);
         moreI -= parseInt(`${moreI}`);
      inouttargetredB = "3";
      

   if (inouttargetredB != String.fromCharCode(113,0)) {
       let benefitBu = String.fromCharCode(101,120,112,101,99,116,115,95,116,95,51,54,0);
       let mimen = String.fromCharCode(104,101,120,116,105,108,101,95,99,95,53,57,0);
      for (let u = 0; u < 1; u++) {
         mimen = `${(String.fromCharCode(80,0) == benefitBu ? mimen.length : benefitBu.length)}`;
      }
      let chatroombackgroundf = mimen.length <= 6627239;
      do {
         mimen = `${2 - benefitBu.length}`;
         if (chatroombackgroundf) {
            break;
         }
      } while (chatroombackgroundf && (mimen.length < benefitBu.length));
         mimen = `${(String.fromCharCode(108,0) == mimen ? mimen.length : benefitBu.length)}`;
      while (benefitBu.startsWith(`${mimen.length}`)) {
         benefitBu += "1";
         break;
      }
      while (mimen.endsWith(`${benefitBu.length}`)) {
         benefitBu += "2";
         break;
      }
         benefitBu += "2";
      rncorel += `${rncorel.length / (Math.max(grayY.length, 3))}`;
   }
   for (let g = 0; g < 1; g++) {
      window_nI -= model9.length << (Math.min(Math.abs(3), 4));
   }
      mayi_push.playsShareClicksAnalytics();

      window_nI /= Math.max(2, 2);
   if ((1 << (Math.min(3, grayY.length))) <= 3) {
       let found_ = 5.0;
       let green_ = 4;
       let filledU = 3.0;
       let configureo = 3.0;
      while (3.40 > (green_ - found_)) {
          let basketballS = String.fromCharCode(102,101,116,99,104,101,114,95,122,95,53,56,0);
          let navigationd = true;
          let baselineU = 2;
          let smallbrightnessy = String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,109,95,54,49,0);
          let iconlogoutW = String.fromCharCode(97,97,99,100,101,99,95,55,95,53,51,0);
         green_ /= Math.max(2, 2 | iconlogoutW.length);
         basketballS = `${(basketballS.length * (navigationd ? 5 : 5))}`;
         navigationd = basketballS.endsWith(`${navigationd}`);
         baselineU -= baselineU * 3;
         smallbrightnessy = `${basketballS.length}`;
         iconlogoutW = `${((navigationd ? 1 : 2))}`;
         break;
      }
         filledU += parseFloat(`${parseInt(`${configureo}`)}`);
      while (1.100 <= (3.85 * configureo) || 1.39 <= (found_ / 3.85)) {
          let libimagepipelinel = String.fromCharCode(105,99,101,95,49,95,54,49,0);
          let robotoD = 4.0;
          let scorepopsoundY = 0.0;
         configureo /= Math.max(2, parseFloat(`${parseInt(`${found_}`)}`));
         libimagepipelinel += "1";
         robotoD += parseInt(`${robotoD}`) << (Math.min(5, Math.abs(1)));
         scorepopsoundY /= Math.max(parseFloat(`${parseInt(`${scorepopsoundY}`) - parseInt(`${robotoD}`)}`), 1);
         break;
      }
      if (5.44 == (parseFloat(`${green_}`) - filledU) || 5 == (green_ - parseInt(`${filledU}`))) {
         green_ /= Math.max(2 & parseInt(`${configureo}`), 3);
      }
      let crossr = found_ >= 5307634.0;
      do {
          let libavutilc = 2;
         found_ -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${found_}`)), 4))}`);
         libavutilc /= Math.max(3, libavutilc >> (Math.min(1, Math.abs(libavutilc))));
         if (crossr) {
            break;
         }
      } while (crossr && (1 <= (4 << (Math.min(5, Math.abs(green_)))) || (green_ * parseInt(`${found_}`)) <= 4));
         green_ &= 3;
       let update_rQ = String.fromCharCode(119,95,52,57,95,99,117,101,112,111,105,110,116,0);
       let mathm = String.fromCharCode(117,108,108,115,99,114,101,101,110,95,107,95,55,57,0);
      for (let b = 0; b < 1; b++) {
         filledU /= Math.max(5, parseFloat(`${mathm.length}`));
      }
      for (let c = 0; c < 1; c++) {
          let iconsettingj = String.fromCharCode(121,95,51,51,95,99,104,115,101,116,0);
         mathm += "2";
         iconsettingj = `${iconsettingj.length}`;
      }
      if (configureo > 1.59) {
         configureo += parseFloat(`${parseInt(`${filledU}`)}`);
      }
      if (2 < (parseInt(`${found_}`) - mathm.length) || 2.33 < (4.69 - found_)) {
          let schedulerF: Array<any> = [367, 253, 432];
          let reactnativeultimatelistviewE = String.fromCharCode(120,95,50,50,95,115,109,97,108,108,101,114,0);
          let sharedl = false;
          let sheeto = 4;
          let episodeso = String.fromCharCode(118,95,56,49,95,97,98,115,116,0);
         found_ += parseFloat(`${1}`);
         schedulerF = [2 & schedulerF.length];
         reactnativeultimatelistviewE = `${sheeto}`;
         sharedl = schedulerF.length <= 6 && 6 <= sheeto;
         episodeso += `${schedulerF.length >> (Math.min(Math.abs(2), 3))}`;
      }
      for (let t = 0; t < 1; t++) {
          let circleb: Map<any, any> = new Map([[String.fromCharCode(114,95,53,52,95,109,99,111,109,112,97,110,100,0),true ], [String.fromCharCode(98,101,97,114,105,110,103,95,98,95,50,54,0),false ]]);
          let fastforwardP = 4.0;
          let reddownarrowX = true;
          let iconpipexpandw: Map<any, any> = new Map([[String.fromCharCode(110,95,56,95,118,111,114,98,105,115,99,111,109,109,101,110,116,0),String.fromCharCode(105,95,50,55,95,99,104,97,110,110,101,108,0)], [String.fromCharCode(108,106,112,101,103,95,104,95,51,55,0),String.fromCharCode(121,95,52,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0)], [String.fromCharCode(97,95,54,49,95,115,97,109,112,108,101,114,97,116,101,115,0),String.fromCharCode(120,95,53,52,95,114,100,98,120,0)]]);
          let inactivef = 4.0;
         green_ -= 3 << (Math.min(5, Math.abs(iconpipexpandw.size)));
         circleb.set(`${fastforwardP}`, 3 | parseInt(`${fastforwardP}`));
         reddownarrowX = circleb.size >= 46 && 15.73 >= fastforwardP;
         iconpipexpandw.set(`${reddownarrowX}`, parseInt(`${fastforwardP}`) >> (Math.min(5, Math.abs(1))));
         inactivef += ((reddownarrowX ? 2 : 3) % 1);
      }
      grayY += "2";
   }
      

   for (let q = 0; q < 3; q++) {
      grayY = `${(rncorel == String.fromCharCode(81,0) ? rncorel.length : inouttargetredB.length)}`;
   }
   while (grayY.length >= model9.length) {
      grayY += `${inouttargetredB.length}`;
      break;
   }

      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
        }/sid/1/nid/${currentEpisode + 1
        }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

      bangv >>= Math.min(Math.abs(1), 2);
      bangv /= Math.max(3, 1);

      if (APP_NAME_CONST == "蚂蚁影视") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;

      grayY = `${heartl.size}`;
   while ((grayY.length * 3) < 2) {
      heartl.set(`${window_nI}`, bangv % (Math.max(parseInt(`${window_nI}`), 2)));
      break;
   }
      }

      const result = await Share.share({
        message: msg,
      });

   while (!inouttargetredB.includes(rncorel)) {
      inouttargetredB += `${dragK.length << (Math.min(2, grayY.length))}`;
      break;
   }
      inouttargetredB += `${model9.length / (Math.max(rncorel.length, 6))}`;
      if (result.action === Share.sharedAction) {

   while (inouttargetredB.includes(`${dragK.length}`)) {
      dragK = `${grayY.length}`;
      break;
   }
   let condensedd = 6686561 >= model9.length;
   do {
      model9 += `${2 * grayY.length}`;
      if (condensedd) {
         break;
      }
   } while (condensedd && (5 == inouttargetredB.length));
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

       let friendsN = 2.0;
       let sharedc = 3.0;
       let encryptor5 = String.fromCharCode(113,95,50,56,95,102,111,108,100,0);
         sharedc += 1;
      if (5 < (encryptor5.length << (Math.min(Math.abs(1), 4))) || (friendsN / 3.31) < 1.46) {
         friendsN *= parseFloat(`${parseInt(`${sharedc}`)}`);
      }
         friendsN *= parseFloat(`${2}`);
      let settingsn = 7792337.0 <= sharedc;
      do {
          let usert = String.fromCharCode(109,97,112,108,105,109,105,116,95,100,95,52,48,0);
          let logout2 = 3.0;
          let iconqqV = String.fromCharCode(97,95,55,51,95,99,111,112,121,98,97,99,107,0);
          let iconwatchnowy = String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,102,95,51,57,0);
         sharedc -= usert.length + 3;
         usert += `${iconwatchnowy.length ^ 3}`;
         logout2 /= Math.max(parseFloat(`${iconwatchnowy.length - 2}`), 1);
         iconqqV += "2";
         if (settingsn) {
            break;
         }
      } while ((encryptor5.startsWith(`${sharedc}`)) && settingsn);
          let langkeyb = 5.0;
          let langA = false;
         sharedc += 1 % (Math.max(parseInt(`${friendsN}`), 10));
         langkeyb -= parseFloat(`${parseInt(`${langkeyb}`) << (Math.min(1, Math.abs(2)))}`);
         langA = langkeyb <= 7.50 || !langA;
      let textlayoutmanagers = 9248656.0 >= sharedc;
      do {
         sharedc += (String.fromCharCode(52,0) == encryptor5 ? encryptor5.length : parseInt(`${friendsN}`));
         if (textlayoutmanagers) {
            break;
         }
      } while ((friendsN == 3.57) && textlayoutmanagers);
         encryptor5 += `${parseInt(`${sharedc}`) - encryptor5.length}`;
         sharedc += 2;
          let whitevideoliveU: Map<any, any> = new Map([[String.fromCharCode(113,95,52,49,95,100,101,112,108,111,121,0),964], [String.fromCharCode(101,108,105,103,105,98,108,101,95,114,95,54,51,0),683], [String.fromCharCode(106,95,52,55,95,114,105,100,0),191]]);
         encryptor5 = `${1 % (Math.max(5, whitevideoliveU.size))}`;
      launcherU += 3;
   for (let p = 0; p < 1; p++) {
      window_nI -= 2;
   }
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
       let emojiheartx = String.fromCharCode(119,95,53,56,95,115,114,99,0);
    let pangleD = String.fromCharCode(106,95,52,57,95,98,97,115,101,100,0);
    let static_4P = String.fromCharCode(100,105,118,105,100,101,114,95,105,95,53,52,0);
    let castingQ = false;
    let gifgoalbg_ = String.fromCharCode(108,111,97,100,95,55,95,52,0);
    let reactnativeratingsT = 4.0;
    let libswresampleX: Array<any> = [492, 129];
    let mbnativeadvancedL: Map<any, any> = new Map([[String.fromCharCode(113,95,52,52,95,112,97,114,97,109,101,116,101,114,115,0),false ], [String.fromCharCode(104,95,53,52,95,100,99,97,97,100,112,99,109,0),false ]]);
       let iconcloset = String.fromCharCode(122,95,55,51,95,115,101,109,97,110,116,105,99,115,0);
       let iconuserr: Array<any> = [481, 976, 346];
         iconuserr = [iconuserr.length];
      if (2 == (iconuserr.length >> (Math.min(Math.abs(2), 3)))) {
         iconcloset += `${iconcloset.length}`;
      }
      let libimagepipelineF = 7076435 <= iconuserr.length;
      do {
         iconuserr = [iconuserr.length];
         if (libimagepipelineF) {
            break;
         }
      } while (libimagepipelineF && ((iconcloset.length ^ 1) <= 4 || 2 <= (1 ^ iconcloset.length)));
      while (iconcloset.endsWith(`${iconuserr.length}`)) {
         iconuserr.push(iconcloset.length);
         break;
      }
         iconcloset += `${iconcloset.length}`;
       let dplusD: Map<any, any> = new Map([[String.fromCharCode(109,95,57,51,95,100,98,105,115,0),465], [String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,95,111,95,56,48,0),256]]);
       let ruless: Map<any, any> = new Map([[String.fromCharCode(102,95,51,56,95,115,108,105,100,0),true ], [String.fromCharCode(112,114,101,95,101,95,50,51,0),true ]]);
      pangleD = `${pangleD.length * 1}`;
   for (let u = 0; u < 3; u++) {
      gifgoalbg_ = `${mbnativeadvancedL.size ^ 1}`;
   }
   if (!gifgoalbg_.startsWith(pangleD)) {
      gifgoalbg_ += `${gifgoalbg_.length}`;
   }
      libswresampleX.push(static_4P.length);
   while (static_4P == gifgoalbg_) {
      gifgoalbg_ += `${gifgoalbg_.length + 3}`;
      break;
   }
   while (castingQ || 5 < pangleD.length) {
      castingQ = static_4P.length > 95 || castingQ;
      break;
   }

    const state = await NetInfo.fetch();

      gifgoalbg_ = `${((castingQ ? 3 : 4))}`;
   for (let j = 0; j < 2; j++) {
      castingQ = 72.53 <= reactnativeratingsT;
   }
   while ((mbnativeadvancedL.size + gifgoalbg_.length) > 5 || (mbnativeadvancedL.size + 5) > 4) {
      mbnativeadvancedL = new Map([[`${castingQ}`, (emojiheartx.length % (Math.max(1, (castingQ ? 2 : 2))))]]);
      break;
   }
   if (5 >= (static_4P.length >> (Math.min(Math.abs(2), 3))) && (static_4P.length % 2) >= 1) {
      reactnativeratingsT += parseFloat(`${static_4P.length}`);
   }
      reactnativeratingsT -= (parseFloat(`${String.fromCharCode(65,0) == pangleD ? (castingQ ? 5 : 2) : pangleD.length}`));
   for (let z = 0; z < 1; z++) {
       let iconeditF = 2.0;
       let tickedL = 1.0;
       let informationJ = String.fromCharCode(102,108,97,116,110,101,115,115,95,50,95,52,52,0);
       let bannerm: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,95,101,95,49,52,0),String.fromCharCode(116,116,97,99,104,109,101,110,116,95,100,95,57,56,0)], [String.fromCharCode(97,95,56,56,95,98,99,109,112,0),String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,50,95,55,54,0)]]);
         iconeditF *= parseInt(`${tickedL}`) - parseInt(`${iconeditF}`);
         informationJ = `${parseInt(`${tickedL}`)}`;
         iconeditF /= Math.max(2, 3);
      let sellL = 8744164 >= informationJ.length;
      do {
          let themen = String.fromCharCode(121,95,49,49,95,115,117,98,115,101,113,117,101,110,99,101,115,0);
          let spinnerz = String.fromCharCode(109,95,49,54,95,99,97,110,99,101,108,0);
          let popupD: Array<any> = [528, 947, 977];
         informationJ = `${themen.length >> (Math.min(Math.abs(3), 2))}`;
         themen += `${popupD.length}`;
         spinnerz += `${popupD.length}`;
         if (sellL) {
            break;
         }
      } while ((informationJ.length <= parseInt(`${tickedL}`)) && sellL);
          let placeholder6: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,118,95,55,57,0),String.fromCharCode(118,95,55,95,98,114,105,100,103,101,100,0)], [String.fromCharCode(122,95,56,50,95,101,116,104,111,100,0),String.fromCharCode(109,95,51,54,95,105,102,111,114,119,97,114,100,0)]]);
          let nodeP = String.fromCharCode(122,95,57,54,95,116,104,114,111,116,116,108,101,0);
         iconeditF += nodeP.length % (Math.max(1, 9));
         placeholder6 = new Map([[`${placeholder6.size}`, placeholder6.size]]);
         nodeP = `${placeholder6.size | placeholder6.size}`;
      let textlayoutmanagerl = 5513504 <= bannerm.size;
      do {
         bannerm = new Map([[informationJ, parseInt(`${iconeditF}`)]]);
         if (textlayoutmanagerl) {
            break;
         }
      } while ((!Array.from(bannerm.keys()).includes(`${iconeditF}`)) && textlayoutmanagerl);
      let libreactnativeblobm = 9746756.0 <= tickedL;
      do {
          let iconfeedbackN = String.fromCharCode(112,105,99,107,95,49,95,53,48,0);
          let codey: Array<any> = [45, 568, 259];
          let tickeds = true;
         tickedL *= bannerm.size;
         iconfeedbackN = `${iconfeedbackN.length}`;
         codey = [(iconfeedbackN == String.fromCharCode(85,0) ? iconfeedbackN.length : codey.length)];
         tickeds = iconfeedbackN == String.fromCharCode(116,0);
         if (libreactnativeblobm) {
            break;
         }
      } while ((tickedL < iconeditF) && libreactnativeblobm);
      for (let j = 0; j < 3; j++) {
         bannerm.set(informationJ, parseInt(`${iconeditF}`));
      }
      for (let x = 0; x < 3; x++) {
         iconeditF /= Math.max(4, 2);
      }
         informationJ = `${(informationJ == String.fromCharCode(121,0) ? informationJ.length : parseInt(`${tickedL}`))}`;
       let home4 = String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,56,95,50,55,0);
         home4 += `${bannerm.size}`;
      pangleD = `${emojiheartx.length}`;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   let inactiveE = 7847746 >= static_4P.length;
   do {
      static_4P += `${1 - parseInt(`${reactnativeratingsT}`)}`;
      if (inactiveE) {
         break;
      }
   } while ((gifgoalbg_ != String.fromCharCode(90,0) && 2 <= static_4P.length) && inactiveE);
   for (let b = 0; b < 3; b++) {
      static_4P = `${pangleD.length - gifgoalbg_.length}`;
   }
   while (libswresampleX.length >= 4) {
      gifgoalbg_ = "1";
      break;
   }
      mbnativeadvancedL.set(`${castingQ}`, (parseInt(`${reactnativeratingsT}`) - (castingQ ? 1 : 2)));
      mbnativeadvancedL.set(static_4P, 2 * static_4P.length);
      pangleD += `${mbnativeadvancedL.size}`;
    setIsOffline(offline);

       let traminiK: Array<any> = [601, 252];
         traminiK.push(traminiK.length);
      for (let k = 0; k < 2; k++) {
         traminiK.push(traminiK.length ^ traminiK.length);
      }
      let bgvipsport4 = traminiK.length >= 9058871;
      do {
         traminiK = [traminiK.length];
         if (bgvipsport4) {
            break;
         }
      } while (bgvipsport4 && ((traminiK.length - traminiK.length) < 1));
      gifgoalbg_ = `${libswresampleX.length - pangleD.length}`;
       let iconsharefriendsz = 4.0;
         iconsharefriendsz *= parseInt(`${iconsharefriendsz}`);
       let robotoX: Map<any, any> = new Map([[String.fromCharCode(105,95,52,52,0),301], [String.fromCharCode(99,95,52,57,95,115,101,116,98,105,116,0),6], [String.fromCharCode(97,108,116,101,114,101,100,95,57,95,54,56,0),874]]);
      for (let q = 0; q < 2; q++) {
         robotoX.set(`${iconsharefriendsz}`, 1);
      }
      emojiheartx = `${parseInt(`${reactnativeratingsT}`) << (Math.min(3, Math.abs(3)))}`;
   while (mbnativeadvancedL.get(`${libswresampleX.length}`) != null) {
      mbnativeadvancedL = new Map([[`${libswresampleX.length}`, libswresampleX.length | 2]]);
      break;
   }
       let iconeditu = String.fromCharCode(118,97,114,108,101,110,103,116,104,95,54,95,49,50,0);
       let bottom1 = String.fromCharCode(118,114,101,103,105,111,110,95,57,95,50,51,0);
         iconeditu = `${iconeditu.length}`;
      if (iconeditu == String.fromCharCode(100,0)) {
         bottom1 += `${1 - iconeditu.length}`;
      }
       let reducerB: Map<any, any> = new Map([[String.fromCharCode(115,115,105,109,95,102,95,52,51,0),650], [String.fromCharCode(109,97,105,108,116,111,95,112,95,50,57,0),73], [String.fromCharCode(113,95,57,50,95,109,97,108,108,111,99,0),674]]);
       let ranks: Map<any, any> = new Map([[String.fromCharCode(105,110,102,111,114,109,95,50,95,52,53,0),6], [String.fromCharCode(112,114,117,110,101,95,97,95,57,56,0),561], [String.fromCharCode(108,95,51,57,95,99,114,108,105,115,115,117,101,114,0),692]]);
          let brightnessm: Array<any> = [812, 238, 751];
          let singaporee = 3.0;
         iconeditu += `${parseInt(`${singaporee}`) % 2}`;
         brightnessm.push(brightnessm.length % (Math.max(3, brightnessm.length)));
         singaporee *= 3;
      while (3 > (ranks.size / 1)) {
         reducerB = new Map([[`${ranks.size}`, ranks.size]]);
         break;
      }
          let megaphonet = false;
          let fullq = String.fromCharCode(115,112,105,110,110,101,114,95,121,95,55,57,0);
         bottom1 = `${iconeditu.length - ranks.size}`;
         megaphonet = fullq.length >= 31;
         fullq = `${((megaphonet ? 4 : 3))}`;
      castingQ = 11.39 <= reactnativeratingsT || static_4P.length <= 23;
   if (castingQ) {
       let plasha: Array<any> = [524, 147];
       let schedulev = 4.0;
       let controlsL: Map<any, any> = new Map([[String.fromCharCode(100,95,52,50,95,97,110,105,109,97,116,101,0),true ], [String.fromCharCode(108,111,110,103,116,101,114,109,95,99,95,57,49,0),false ], [String.fromCharCode(114,95,52,48,95,100,116,109,102,0),true ]]);
       let anytimeI = 3.0;
          let tailH: Array<any> = [String.fromCharCode(97,108,112,104,97,98,101,116,115,95,99,95,49,54,0), String.fromCharCode(105,95,53,49,95,116,119,111,109,0)];
         anytimeI += parseFloat(`${1 + parseInt(`${anytimeI}`)}`);
         tailH = [2];
      while (3 >= (plasha.length & 2) || 2.18 >= (schedulev * 3.67)) {
         plasha = [1 + controlsL.size];
         break;
      }
      for (let d = 0; d < 1; d++) {
         anytimeI *= parseFloat(`${parseInt(`${schedulev}`) & 3}`);
      }
      let mapbuffer7 = 8453393.0 >= anytimeI;
      do {
         anytimeI *= parseFloat(`${parseInt(`${schedulev}`) / 1}`);
         if (mapbuffer7) {
            break;
         }
      } while (mapbuffer7 && (schedulev > 5.43));
       let previewK = String.fromCharCode(102,105,108,101,112,97,116,104,95,102,95,57,53,0);
       let malaysiaM = String.fromCharCode(100,99,113,117,97,110,116,95,117,95,51,49,0);
         controlsL.set(`${anytimeI}`, 2);
         anytimeI += parseFloat(`${previewK.length * 2}`);
         schedulev += parseFloat(`${3}`);
      while ((plasha.length >> (Math.min(Math.abs(controlsL.size), 4))) < 5) {
         controlsL = new Map([[`${controlsL.size}`, 1 / (Math.max(7, previewK.length))]]);
         break;
      }
      while (3.86 == (anytimeI / (Math.max(1.29, 2))) && (previewK.length / (Math.max(2, parseInt(`${anytimeI}`)))) == 5) {
         previewK += `${previewK.length + 1}`;
         break;
      }
         previewK += `${parseInt(`${schedulev}`)}`;
      castingQ = controlsL.size <= 20;
   }
   if ((3 / (Math.max(2, pangleD.length))) <= 4 || 2 <= (3 / (Math.max(5, pangleD.length)))) {
       let dragn = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,115,95,57,49,0);
       let smallbrightnessS = false;
       let cornerkickn: Map<any, any> = new Map([[String.fromCharCode(100,95,49,55,95,115,109,117,115,104,0),130], [String.fromCharCode(115,104,105,109,109,101,114,105,110,103,95,54,95,55,48,0),927]]);
       let pauser: Array<any> = [307, 292];
       let libsentryU = 4.0;
      if (parseInt(`${libsentryU}`) == dragn.length) {
         libsentryU /= Math.max(1, 3);
      }
         smallbrightnessS = dragn == String.fromCharCode(74,0);
         pauser = [parseInt(`${libsentryU}`)];
         dragn += `${pauser.length + 1}`;
       let hooks5 = String.fromCharCode(118,115,114,99,95,99,95,54,53,0);
       let gradleT = String.fromCharCode(117,95,54,52,95,111,103,103,101,114,0);
          let rncore9 = String.fromCharCode(120,95,55,95,109,101,114,103,101,100,0);
          let root2: Map<any, any> = new Map([[String.fromCharCode(97,116,111,109,95,117,95,52,50,0),true ], [String.fromCharCode(117,110,114,101,115,101,114,118,101,100,95,116,95,52,48,0),true ]]);
          let stepA = true;
         smallbrightnessS = !smallbrightnessS;
         rncore9 += `${3 << (Math.min(2, rncore9.length))}`;
         root2.set(rncore9, (rncore9 == String.fromCharCode(79,0) ? rncore9.length : root2.size));
         stepA = !stepA;
      for (let z = 0; z < 1; z++) {
         smallbrightnessS = (parseInt(`${libsentryU}`) + hooks5.length) == 22;
      }
      while (5 < (1 / (Math.max(2, pauser.length)))) {
         pauser.push(cornerkickn.size * pauser.length);
         break;
      }
      if ((dragn.length / (Math.max(3, 5))) == 2) {
         dragn += `${parseInt(`${libsentryU}`)}`;
      }
      if (1 <= (hooks5.length ^ pauser.length) || 1 <= (pauser.length ^ 1)) {
          let bingo: Array<any> = [947, 330];
          let iconstar7 = String.fromCharCode(101,120,101,99,117,116,101,95,108,95,49,56,0);
          let handlerH = String.fromCharCode(100,113,117,97,110,116,95,119,95,57,50,0);
         hooks5 = `${iconstar7.length}`;
         bingo.push(bingo.length / (Math.max(8, handlerH.length)));
         iconstar7 += `${1 - bingo.length}`;
         handlerH = `${handlerH.length}`;
      }
      if ((gradleT.length | cornerkickn.size) == 3) {
          let forwarda = 2;
          let agreementf: Map<any, any> = new Map([[String.fromCharCode(102,111,108,108,111,119,101,114,115,95,118,95,54,48,0),231], [String.fromCharCode(100,97,116,97,116,121,112,101,115,95,106,95,55,55,0),475], [String.fromCharCode(111,95,54,95,114,101,118,111,99,97,116,105,111,110,0),832]]);
          let umengN: Map<any, any> = new Map([[String.fromCharCode(108,95,50,50,95,101,116,104,101,114,110,101,116,0),true ], [String.fromCharCode(100,95,49,53,95,112,111,115,116,102,105,108,116,101,114,0),false ]]);
          let build2 = String.fromCharCode(119,95,51,55,95,116,104,105,99,107,0);
          let stationsD = String.fromCharCode(112,101,114,95,56,95,51,48,0);
         gradleT += `${umengN.size << (Math.min(Math.abs(agreementf.size), 4))}`;
         forwarda /= Math.max(2, forwarda % (Math.max(stationsD.length, 3)));
         agreementf = new Map([[build2, (String.fromCharCode(111,0) == stationsD ? build2.length : stationsD.length)]]);
         umengN.set(`${forwarda}`, 1 % (Math.max(1, build2.length)));
      }
      let fieldO = 5460763 <= cornerkickn.size;
      do {
         cornerkickn.set(`${smallbrightnessS}`, (pauser.length | (smallbrightnessS ? 3 : 5)));
         if (fieldO) {
            break;
         }
      } while ((3 < cornerkickn.size) && fieldO);
      let switch_iwp = smallbrightnessS ? !smallbrightnessS : smallbrightnessS;
      do {
          let settingY = 0.0;
         smallbrightnessS = (pauser.length / (Math.max(dragn.length, 4))) == 49;
         settingY -= parseInt(`${settingY}`) & parseInt(`${settingY}`);
         if (switch_iwp) {
            break;
         }
      } while ((!smallbrightnessS) && switch_iwp);
      if (4 >= (cornerkickn.size / 2) && (cornerkickn.size / (Math.max(dragn.length, 10))) >= 2) {
         cornerkickn.set(`${libsentryU}`, parseInt(`${libsentryU}`));
      }
      while (dragn == String.fromCharCode(114,0) || hooks5 == String.fromCharCode(117,0)) {
         dragn = `${(3 | (smallbrightnessS ? 2 : 1))}`;
         break;
      }
      pangleD += "3";
   }
    setDismountPlayer(false); 
    
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      
      mayi_push.playsViewsAnalytics({
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
    mayi_CrossChat.getDetail(vod?.vod_id.toString() ?? "").then((data) => {
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
    mayi_CrossChat.getList({
      category: vod?.vod_class?.split(",").shift(),
      tid: vod?.type_id.toString() ?? "",
      limit: 6,
    }).then((data) => data.List as mayi_LibswresampleModal[]);

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
       let whistleorangeR = String.fromCharCode(108,95,49,57,95,103,101,110,99,102,103,115,0);
    let statisticsinactiveK = String.fromCharCode(121,95,54,52,95,109,111,100,110,112,102,0);
    let unreadA = 1;
    let acceptedY = true;
    let baseQ = String.fromCharCode(118,95,53,49,95,99,105,114,99,117,108,97,116,105,110,103,0);
    let current4 = 1;
    let langi = true;
    let zoomD = 5;
    let iconschedule2 = String.fromCharCode(105,110,118,116,114,97,110,115,95,49,95,55,55,0);
    let penaltyshootnogoal1 = 4.0;
    let iconclosed = 0;
    let leftR = 0.0;
    let libreactnativeblobe = String.fromCharCode(117,95,57,49,95,109,97,115,107,115,0);
      langi = !langi;
   while ((current4 % (Math.max(1, 8))) > 2) {
      current4 %= Math.max(statisticsinactiveK.length, 1);
      break;
   }
      whistleorangeR += "3";
      zoomD *= parseInt(`${penaltyshootnogoal1}`);
   while (unreadA == 1) {
      unreadA ^= parseInt(`${penaltyshootnogoal1}`);
      break;
   }
   while (acceptedY || 3 < iconschedule2.length) {
      acceptedY = parseFloat(`${iconclosed}`) > penaltyshootnogoal1;
      break;
   }
   if ((zoomD >> (Math.min(iconschedule2.length, 4))) < 1 && 1 < (iconschedule2.length >> (Math.min(5, Math.abs(zoomD))))) {
       let becomec = 1.0;
       let informationh = 2.0;
       let chatroombackgroundQ = false;
      for (let q = 0; q < 1; q++) {
         informationh /= Math.max((parseFloat(`${parseInt(`${informationh}`) ^ (chatroombackgroundQ ? 5 : 3)}`)), 5);
      }
         chatroombackgroundQ = !chatroombackgroundQ && becomec == 57.3;
         informationh += parseFloat(`${3}`);
          let friendsu = String.fromCharCode(115,95,53,50,95,99,102,104,100,0);
          let ajaxT = 4;
         chatroombackgroundQ = 86 <= ajaxT;
         friendsu += `${friendsu.length}`;
         ajaxT += friendsu.length ^ 2;
      for (let v = 0; v < 3; v++) {
         informationh -= parseFloat(`${3 | parseInt(`${informationh}`)}`);
      }
      let libmapbufferjnia = chatroombackgroundQ ? !chatroombackgroundQ : chatroombackgroundQ;
      do {
          let iconeditC = 2.0;
          let downloadedf = String.fromCharCode(103,95,55,54,95,100,105,118,0);
          let successv = 4.0;
          let icontransferclubw = 5;
         chatroombackgroundQ = downloadedf == String.fromCharCode(121,0);
         iconeditC += parseFloat(`${icontransferclubw % (Math.max(parseInt(`${iconeditC}`), 2))}`);
         downloadedf = `${1 << (Math.min(Math.abs(parseInt(`${iconeditC}`)), 2))}`;
         successv -= parseFloat(`${parseInt(`${iconeditC}`) | 2}`);
         icontransferclubw ^= parseInt(`${successv}`) << (Math.min(3, Math.abs(parseInt(`${iconeditC}`))));
         if (libmapbufferjnia) {
            break;
         }
      } while (((informationh - 4.5) == 4.86 || 4.5 == informationh) && libmapbufferjnia);
         informationh /= Math.max(parseFloat(`${parseInt(`${informationh}`) * 2}`), 5);
          let hookO = 3.0;
          let videocommonD: Array<any> = [String.fromCharCode(117,95,56,50,95,118,105,100,101,111,100,115,112,0), String.fromCharCode(114,111,117,116,101,115,95,121,95,56,48,0), String.fromCharCode(110,95,53,57,95,101,114,114,111,114,118,0)];
          let flyery = 5;
         informationh /= Math.max(3, parseFloat(`${parseInt(`${hookO}`) / 1}`));
         hookO /= Math.max(parseFloat(`${3}`), 4);
         videocommonD.push(flyery | 1);
         flyery >>= Math.min(Math.abs(videocommonD.length - 3), 5);
      let librrcJ = informationh <= 6132431.0;
      do {
         informationh *= parseFloat(`${parseInt(`${becomec}`) ^ parseInt(`${informationh}`)}`);
         if (librrcJ) {
            break;
         }
      } while ((2.46 <= (becomec / (Math.max(informationh, 8)))) && librrcJ);
      iconschedule2 += `${zoomD}`;
   }
   for (let j = 0; j < 3; j++) {
      penaltyshootnogoal1 /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${penaltyshootnogoal1}`)), 3))}`), 1);
   }
   let libnmsn = acceptedY ? !acceptedY : acceptedY;
   do {
       let whiteB = 0.0;
       let redscoreballJ = true;
       let colorsf = 0.0;
         colorsf -= (parseFloat(`${parseInt(`${colorsf}`) * (redscoreballJ ? 4 : 3)}`));
         redscoreballJ = 8.29 > colorsf;
      for (let u = 0; u < 2; u++) {
          let backicont = String.fromCharCode(110,95,51,55,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0);
         redscoreballJ = backicont.startsWith(`${redscoreballJ}`);
      }
      for (let n = 0; n < 3; n++) {
         redscoreballJ = 68.82 < whiteB;
      }
         redscoreballJ = whiteB == colorsf;
      let emojiheartk = redscoreballJ ? !redscoreballJ : redscoreballJ;
      do {
          let embedn: Array<any> = [699, 983];
          let launch9 = String.fromCharCode(111,95,49,55,95,103,114,111,117,112,105,110,103,0);
          let philippineso = String.fromCharCode(122,95,57,56,95,98,97,108,97,110,99,101,115,0);
         redscoreballJ = embedn.length < 1;
         embedn.push(philippineso.length);
         launch9 = `${(launch9 == String.fromCharCode(90,0) ? launch9.length : philippineso.length)}`;
         if (emojiheartk) {
            break;
         }
      } while ((5.48 >= (2.26 + whiteB)) && emojiheartk);
      for (let m = 0; m < 3; m++) {
          let manifestY = String.fromCharCode(111,98,116,97,105,110,101,114,95,100,95,54,56,0);
          let iconx: Array<any> = [164, 511, 466];
          let networkr = 1.0;
          let selectionh = 1.0;
          let basketballiconU = String.fromCharCode(103,95,53,50,95,116,104,101,110,0);
         whiteB += parseInt(`${selectionh}`) >> (Math.min(Math.abs(parseInt(`${networkr}`)), 2));
         manifestY += `${1 << (Math.min(4, basketballiconU.length))}`;
         iconx = [(basketballiconU == String.fromCharCode(90,0) ? iconx.length : basketballiconU.length)];
         networkr -= iconx.length;
         selectionh *= parseFloat(`${basketballiconU.length}`);
      }
         whiteB -= parseInt(`${whiteB}`) - 3;
          let clears = false;
          let penaltyshootC: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,100,105,110,102,0),false ], [String.fromCharCode(108,95,55,51,95,97,97,99,116,97,98,0),false ]]);
         redscoreballJ = !clears;
         penaltyshootC = new Map([[`${penaltyshootC.size}`, penaltyshootC.size]]);
      acceptedY = zoomD > 53;
      if (libnmsn) {
         break;
      }
   } while ((acceptedY) && libnmsn);
   while (!statisticsinactiveK.startsWith(`${acceptedY}`)) {
      statisticsinactiveK = `${current4}`;
      break;
   }
       let giftbuttonl = 2.0;
       let yellowcirclebgL = 1;
      for (let b = 0; b < 1; b++) {
          let logo0 = String.fromCharCode(104,95,52,52,95,101,120,112,105,114,121,0);
          let bodan_: Array<any> = [841, 327];
          let turnx = 0.0;
         yellowcirclebgL += 3 * parseInt(`${turnx}`);
         logo0 += `${logo0.length | 3}`;
         bodan_.push(logo0.length << (Math.min(Math.abs(1), 5)));
         turnx += logo0.length;
      }
      while ((yellowcirclebgL & 1) == 2 || (giftbuttonl / 4.75) == 5.41) {
         giftbuttonl *= parseFloat(`${2}`);
         break;
      }
      let clockg = 5311054.0 >= giftbuttonl;
      do {
          let const_mE = 4.0;
         giftbuttonl += parseFloat(`${parseInt(`${giftbuttonl}`)}`);
         const_mE *= parseFloat(`${parseInt(`${const_mE}`)}`);
         if (clockg) {
            break;
         }
      } while (clockg && (2 >= yellowcirclebgL));
       let apple6 = 3.0;
       let foregroundC = 0.0;
      for (let b = 0; b < 2; b++) {
         apple6 /= Math.max(parseFloat(`${1 % (Math.max(parseInt(`${apple6}`), 6))}`), 2);
      }
          let topon7 = 2.0;
          let smallorangemanD = String.fromCharCode(99,97,117,115,101,95,48,95,50,50,0);
         apple6 *= parseFloat(`${yellowcirclebgL}`);
         topon7 += parseFloat(`${1 << (Math.min(3, smallorangemanD.length))}`);
         smallorangemanD += `${smallorangemanD.length}`;
      acceptedY = parseFloat(`${yellowcirclebgL}`) >= penaltyshootnogoal1;

    

   while (1 > (2 & iconclosed) || (unreadA & 2) > 5) {
       let disconnected8 = String.fromCharCode(120,95,51,95,118,101,114,105,102,105,97,116,105,111,110,0);
         disconnected8 = `${(disconnected8 == String.fromCharCode(48,0) ? disconnected8.length : disconnected8.length)}`;
      let traminiN = String.fromCharCode(53,57,57,102,118,102,56,54,98,0) == disconnected8;
      do {
         disconnected8 += `${disconnected8.length}`;
         if (traminiN) {
            break;
         }
      } while ((!disconnected8.endsWith(`${disconnected8.length}`)) && traminiN);
      if (disconnected8.length >= 5) {
         disconnected8 += `${(String.fromCharCode(105,0) == disconnected8 ? disconnected8.length : disconnected8.length)}`;
      }
      unreadA |= parseInt(`${penaltyshootnogoal1}`) * 3;
      break;
   }
      iconclosed /= Math.max(1, 3);
       let basketballawayteamx = 2;
       let configure2 = String.fromCharCode(99,101,108,116,95,115,95,53,54,0);
      if (!configure2.startsWith(`${basketballawayteamx}`)) {
          let iconnotificationnewp = 0.0;
          let libavcodecd = String.fromCharCode(106,95,55,50,95,109,105,115,115,105,110,103,0);
          let statsn = 4.0;
          let textlayoutmanagerA = String.fromCharCode(104,97,108,102,102,108,111,97,116,95,100,95,56,50,0);
         basketballawayteamx /= Math.max(2, 4);
         iconnotificationnewp *= (libavcodecd == String.fromCharCode(98,0) ? parseInt(`${iconnotificationnewp}`) : libavcodecd.length);
         statsn += textlayoutmanagerA.length;
         textlayoutmanagerA += `${textlayoutmanagerA.length % 1}`;
      }
       let bgvipxvodN = false;
       let defaultroombgN = false;
         defaultroombgN = !bgvipxvodN;
      while (defaultroombgN) {
          let chinaY = String.fromCharCode(102,101,101,100,95,109,95,54,57,0);
          let cedbadcebfbfbfbcfecbcT: Array<any> = [63, 20];
          let confirmation7 = 2;
          let qaagv = String.fromCharCode(115,101,99,116,105,111,110,115,95,107,95,51,49,0);
         configure2 = `${((defaultroombgN ? 2 : 5) / 1)}`;
         chinaY = `${3 / (Math.max(confirmation7, 2))}`;
         cedbadcebfbfbfbcfecbcT.push(cedbadcebfbfbfbcfecbcT.length % (Math.max(5, confirmation7)));
         qaagv += `${qaagv.length | 3}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
         basketballawayteamx >>= Math.min(Math.abs(3 % (Math.max(basketballawayteamx, 4))), 2);
      }
      while (1 > configure2.length) {
         defaultroombgN = basketballawayteamx == 64;
         break;
      }
      langi = !acceptedY;
   if (1 < (iconschedule2.length - 1) && 1 < (iconschedule2.length * parseInt(`${penaltyshootnogoal1}`))) {
      penaltyshootnogoal1 /= Math.max(parseFloat(`${whistleorangeR.length + statisticsinactiveK.length}`), 2);
   }
   if (2 < (3 ^ iconclosed)) {
      penaltyshootnogoal1 *= parseFloat(`${1}`);
   }
   while (5.45 <= (penaltyshootnogoal1 * 2.48)) {
      whistleorangeR += `${(String.fromCharCode(100,0) == statisticsinactiveK ? current4 : statisticsinactiveK.length)}`;
      break;
   }
   let kicky = acceptedY ? !acceptedY : acceptedY;
   do {
      acceptedY = 38 >= (zoomD << (Math.min(4, Math.abs(iconclosed))));
      if (kicky) {
         break;
      }
   } while (kicky && (whistleorangeR.includes(`${acceptedY}`)));
   for (let f = 0; f < 2; f++) {
      langi = 26 < zoomD;
   }
      statisticsinactiveK = `${zoomD | 3}`;
       let o_imageg: Array<any> = [873, 943];
       let mappingn = 5.0;
       let roundn = String.fromCharCode(100,97,105,95,113,95,54,48,0);
      for (let a = 0; a < 3; a++) {
          let starc = 1;
          let libnmsZ = false;
          let phoneb = 2.0;
         roundn = `${parseInt(`${mappingn}`)}`;
         starc |= (parseInt(`${phoneb}`) * (libnmsZ ? 1 : 3));
         libnmsZ = 34 == starc && !libnmsZ;
         phoneb -= (parseInt(`${phoneb}`) ^ (libnmsZ ? 4 : 5));
      }
         mappingn += roundn.length;
         o_imageg.push(parseInt(`${mappingn}`) - roundn.length);
          let progresse = 3.0;
          let mimeu = String.fromCharCode(115,116,97,116,101,95,56,95,55,0);
         mappingn -= 1 | parseInt(`${mappingn}`);
         progresse -= parseInt(`${progresse}`);
         mimeu += `${2 | parseInt(`${progresse}`)}`;
       let defaultfootballbgv: Map<any, any> = new Map([[String.fromCharCode(111,95,55,49,95,103,98,114,112,0),String.fromCharCode(99,97,116,99,104,95,103,95,52,51,0)], [String.fromCharCode(105,112,97,100,95,103,95,55,54,0),String.fromCharCode(109,118,101,99,95,98,95,50,50,0)]]);
         mappingn += 1 - roundn.length;
      for (let h = 0; h < 1; h++) {
         defaultfootballbgv.set(`${mappingn}`, (roundn == String.fromCharCode(81,0) ? parseInt(`${mappingn}`) : roundn.length));
      }
      if (5 > (parseInt(`${mappingn}`) / (Math.max(3, 4))) || (mappingn / (Math.max(7, roundn.length))) > 3.27) {
         mappingn *= parseInt(`${mappingn}`);
      }
          let predictionbannersharedZ = 2.0;
          let build3 = String.fromCharCode(114,101,97,115,111,110,95,118,95,49,52,0);
          let stark = 4.0;
         o_imageg.push(parseInt(`${stark}`) ^ o_imageg.length);
         predictionbannersharedZ /= Math.max(3, parseFloat(`${build3.length >> (Math.min(Math.abs(2), 5))}`));
         build3 = `${build3.length | 1}`;
         stark -= parseFloat(`${3}`);
      whistleorangeR += "2";
   if ((iconclosed - parseInt(`${penaltyshootnogoal1}`)) > 2 || (iconclosed - parseInt(`${penaltyshootnogoal1}`)) > 2) {
       let project2 = 5.0;
       let catagoryw = true;
      if (project2 >= 4.16) {
         project2 -= (parseFloat(`${(catagoryw ? 2 : 2) + parseInt(`${project2}`)}`));
      }
      for (let j = 0; j < 1; j++) {
          let iconnewsshareY: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,120,95,51,50,0),289], [String.fromCharCode(101,120,99,108,117,115,105,118,101,95,48,95,54,54,0),512]]);
          let rocketW = 5;
          let dangere = String.fromCharCode(109,101,115,115,97,103,101,95,56,95,57,0);
          let subsY = 2.0;
          let bellz: Array<any> = [String.fromCharCode(112,114,101,102,97,99,101,95,120,95,49,0), String.fromCharCode(112,114,101,115,101,114,118,101,115,95,113,95,51,48,0)];
         catagoryw = dangere == String.fromCharCode(75,0);
         iconnewsshareY = new Map([[`${subsY}`, rocketW << (Math.min(Math.abs(parseInt(`${subsY}`)), 2))]]);
         rocketW *= bellz.length << (Math.min(Math.abs(2), 1));
         dangere += `${bellz.length}`;
      }
      if (project2 >= 5.36 || 4.22 >= (project2 + 5.36)) {
         catagoryw = !catagoryw;
      }
          let sheet4 = String.fromCharCode(112,114,111,120,105,101,115,95,49,95,57,57,0);
          let submitr = false;
         project2 *= parseFloat(`${sheet4.length / (Math.max(2, 4))}`);
         sheet4 = "3";
      if (project2 > 1.59 || 1.8 > (1.59 / (Math.max(5, project2)))) {
          let pointk = String.fromCharCode(109,101,109,115,121,115,95,111,95,50,55,0);
         project2 += parseFloat(`${parseInt(`${project2}`) << (Math.min(2, Math.abs(3)))}`);
         pointk += `${pointk.length}`;
      }
      while ((project2 * 4.20) == 4.45 || 4.20 == project2) {
         catagoryw = 33.79 > project2;
         break;
      }
      penaltyshootnogoal1 += parseFloat(`${1}`);
   }
    await refetch();

       let verticalM = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,112,95,56,49,0);
       let strings4: Map<any, any> = new Map([[String.fromCharCode(106,95,56,51,95,111,98,115,101,114,118,101,100,0),false ], [String.fromCharCode(111,99,115,112,105,100,95,55,95,50,54,0),true ], [String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,110,95,57,55,0),true ]]);
       let selectY = 2.0;
      if (2 <= (verticalM.length - 1) || 1 <= (1 - strings4.size)) {
         strings4 = new Map([[verticalM, parseInt(`${selectY}`)]]);
      }
         selectY += verticalM.length;
         strings4 = new Map([[`${strings4.size}`, 2 ^ strings4.size]]);
      for (let n = 0; n < 3; n++) {
         strings4.set(verticalM, strings4.size | verticalM.length);
      }
      if (strings4.get(`${selectY}`) == null) {
          let resultt = String.fromCharCode(118,95,52,52,95,112,114,111,120,105,109,105,116,121,0);
          let main_bq = String.fromCharCode(105,110,118,95,53,95,52,50,0);
         strings4 = new Map([[verticalM, verticalM.length % (Math.max(main_bq.length, 10))]]);
         resultt = `${3 >> (Math.min(3, resultt.length))}`;
         main_bq = `${3 << (Math.min(1, resultt.length))}`;
      }
          let whistleorangey = String.fromCharCode(97,95,51,54,95,98,97,100,0);
          let groupV = 1;
          let libswscalew = 1;
         verticalM = `${libswscalew >> (Math.min(whistleorangey.length, 3))}`;
         whistleorangey += `${groupV << (Math.min(Math.abs(2), 4))}`;
         groupV /= Math.max(2 << (Math.min(1, Math.abs(groupV))), 5);
      if (strings4.size <= 5) {
         verticalM = "3";
      }
      while (4 < (strings4.size * parseInt(`${selectY}`))) {
          let frame_b_p: Map<any, any> = new Map([[String.fromCharCode(101,110,115,95,51,95,54,56,0),423], [String.fromCharCode(109,97,99,101,95,121,95,54,56,0),268], [String.fromCharCode(107,101,121,112,97,116,104,115,95,111,95,57,50,0),314]]);
          let roomn = 0.0;
          let combinedb: Map<any, any> = new Map([[String.fromCharCode(114,95,49,49,95,109,117,108,116,105,112,108,101,120,101,100,0),95], [String.fromCharCode(106,95,51,57,95,115,105,109,117,108,97,116,101,0),799], [String.fromCharCode(105,110,102,105,110,105,116,101,95,103,95,52,49,0),6]]);
          let roundp = true;
          let placeholderZ = true;
         selectY += 3 ^ frame_b_p.size;
         frame_b_p = new Map([[`${placeholderZ}`, ((roundp ? 1 : 2) << (Math.min(1, Math.abs((placeholderZ ? 5 : 5)))))]]);
         roomn /= Math.max(parseInt(`${roomn}`), 4);
         combinedb.set(`${roundp}`, (parseInt(`${roomn}`) << (Math.min(4, Math.abs((roundp ? 5 : 4))))));
         break;
      }
         verticalM = `${strings4.size}`;
      zoomD <<= Math.min(5, Math.abs(parseInt(`${penaltyshootnogoal1}`)));
      acceptedY = langi;
      acceptedY = statisticsinactiveK == whistleorangeR;
   if (langi) {
      unreadA -= parseInt(`${penaltyshootnogoal1}`) % 1;
   }
   while ((current4 >> (Math.min(whistleorangeR.length, 4))) == 3) {
      current4 %= Math.max(5, baseQ.length - 2);
      break;
   }
   if (!langi) {
      langi = iconschedule2.startsWith(`${langi}`);
   }
   if (current4 > statisticsinactiveK.length) {
      statisticsinactiveK += `${2 >> (Math.min(4, Math.abs(iconclosed)))}`;
   }
      langi = penaltyshootnogoal1 == parseFloat(`${baseQ.length}`);
      penaltyshootnogoal1 -= parseFloat(`${1}`);
       let libyogaB = 5.0;
      while (libyogaB > 2.56) {
         libyogaB -= parseFloat(`${parseInt(`${libyogaB}`)}`);
         break;
      }
       let moviesI = 1;
       let splashv = 1;
      for (let m = 0; m < 3; m++) {
         splashv ^= 1;
      }
      zoomD >>= Math.min(2, Math.abs(2 & parseInt(`${penaltyshootnogoal1}`)));
   if (2 >= iconclosed) {
      langi = !langi && 42 == iconclosed;
   }
    

   while (3 == (2 ^ unreadA) && (2 ^ statisticsinactiveK.length) == 1) {
       let malaysiaC = String.fromCharCode(102,102,112,114,111,98,101,95,111,95,54,0);
       let libhermesG = 1.0;
         libhermesG -= parseFloat(`${malaysiaC.length}`);
      if (3.26 > libhermesG) {
          let successV = 5.0;
          let iconlogoutP = 3.0;
          let register_wy = 2;
          let shrinkF = String.fromCharCode(99,95,49,48,95,117,110,105,102,111,114,109,115,0);
         libhermesG -= parseFloat(`${parseInt(`${libhermesG}`) - parseInt(`${iconlogoutP}`)}`);
         successV *= register_wy;
         iconlogoutP *= parseInt(`${successV}`);
         register_wy ^= 2 % (Math.max(9, register_wy));
         shrinkF += `${2 ^ register_wy}`;
      }
         libhermesG *= parseFloat(`${malaysiaC.length}`);
      if ((malaysiaC.length & 5) <= 2) {
         libhermesG += parseFloat(`${parseInt(`${libhermesG}`)}`);
      }
      if (5 > malaysiaC.length) {
         libhermesG -= parseFloat(`${2 >> (Math.min(2, malaysiaC.length))}`);
      }
      for (let p = 0; p < 3; p++) {
         libhermesG += parseFloat(`${parseInt(`${libhermesG}`)}`);
      }
      statisticsinactiveK += `${baseQ.length}`;
      break;
   }
   for (let i = 0; i < 1; i++) {
      langi = baseQ.endsWith(`${zoomD}`);
   }
      iconschedule2 = `${2 - iconschedule2.length}`;
   for (let l = 0; l < 1; l++) {
      whistleorangeR += `${iconclosed << (Math.min(1, Math.abs(1)))}`;
   }
   while (statisticsinactiveK.length <= 2 && langi) {
      langi = statisticsinactiveK == String.fromCharCode(110,0);
      break;
   }
      baseQ = `${parseInt(`${penaltyshootnogoal1}`) << (Math.min(2, Math.abs(unreadA)))}`;
   if (2.12 < (iconclosed * penaltyshootnogoal1)) {
       let type_g9J = 2.0;
       let settingv: Map<any, any> = new Map([[String.fromCharCode(114,103,98,114,103,98,95,116,95,53,53,0),String.fromCharCode(109,101,109,98,101,114,95,103,95,55,48,0)], [String.fromCharCode(107,101,101,112,105,110,103,95,115,95,54,55,0),String.fromCharCode(102,105,111,95,57,95,50,49,0)], [String.fromCharCode(108,95,53,48,95,97,114,116,105,102,97,99,116,115,0),String.fromCharCode(106,95,52,49,95,112,108,97,121,0)]]);
       let predictiondefaultb = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,95,99,95,54,0);
      let exampleimage7 = 5506936 <= predictiondefaultb.length;
      do {
         predictiondefaultb = "1";
         if (exampleimage7) {
            break;
         }
      } while ((1 < (1 + predictiondefaultb.length) || (type_g9J * predictiondefaultb.length) < 2.87) && exampleimage7);
          let backwardH = 4.0;
          let forwardv = String.fromCharCode(111,95,54,52,95,99,111,109,98,105,110,97,116,105,111,110,115,0);
         settingv.set(`${type_g9J}`, parseInt(`${type_g9J}`));
         backwardH *= 3 + parseInt(`${backwardH}`);
         forwardv = `${(String.fromCharCode(99,0) == forwardv ? forwardv.length : parseInt(`${backwardH}`))}`;
       let component6 = String.fromCharCode(116,101,115,116,99,108,101,97,110,95,107,95,55,56,0);
       let hookx = String.fromCharCode(100,111,119,110,114,105,103,104,116,95,100,95,50,52,0);
         type_g9J *= settingv.size;
          let sliders = String.fromCharCode(116,114,117,110,95,121,95,56,52,0);
         component6 = "2";
         sliders += `${sliders.length}`;
          let backiconN = 4.0;
         settingv = new Map([[component6, predictiondefaultb.length]]);
         backiconN *= parseFloat(`${parseInt(`${backiconN}`) / 2}`);
      if ((3 >> (Math.min(2, predictiondefaultb.length))) == 5 || 4 == (predictiondefaultb.length >> (Math.min(Math.abs(3), 3)))) {
         settingv.set(hookx, hookx.length >> (Math.min(Math.abs(2), 4)));
      }
          let tempnodatad = true;
          let libreactperfloggerjniU: Map<any, any> = new Map([[String.fromCharCode(107,101,101,112,105,110,103,95,107,95,50,53,0),String.fromCharCode(108,111,119,101,115,116,95,107,95,54,52,0)], [String.fromCharCode(119,121,99,104,101,112,114,111,111,102,95,113,95,52,0),String.fromCharCode(101,109,111,106,105,95,116,95,49,0)], [String.fromCharCode(111,95,49,51,95,102,105,108,101,104,101,97,100,101,114,0),String.fromCharCode(100,111,119,110,115,97,109,112,108,101,95,121,95,55,51,0)]]);
         settingv.set(`${tempnodatad}`, ((tempnodatad ? 5 : 5)));
         libreactperfloggerjniU = new Map([[`${libreactperfloggerjniU.size}`, libreactperfloggerjniU.size]]);
      while ((settingv.size / 3) < 4 || (settingv.size / (Math.max(predictiondefaultb.length, 5))) < 3) {
         settingv = new Map([[`${settingv.size}`, settingv.size * 2]]);
         break;
      }
      penaltyshootnogoal1 *= parseFloat(`${2}`);
   }
   if (5 <= (iconclosed + 5) && !langi) {
      langi = parseFloat(`${iconclosed}`) >= leftR;
   }
       let yingB = false;
      while (yingB || !yingB) {
         yingB = yingB || yingB;
         break;
      }
      for (let m = 0; m < 3; m++) {
          let infof: Array<any> = [String.fromCharCode(114,101,113,117,115,116,101,114,95,119,95,51,55,0), String.fromCharCode(112,97,114,116,105,99,108,101,95,51,95,56,50,0)];
          let modeN: Array<any> = [148, 231, 916];
          let pauseU = 1.0;
          let toponu: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,95,99,95,52,0),200], [String.fromCharCode(116,101,108,101,103,114,97,109,95,99,95,56,55,0),458], [String.fromCharCode(115,116,114,105,110,103,101,110,99,111,100,101,95,109,95,57,51,0),119]]);
         yingB = infof.length == 14;
         infof = [parseInt(`${pauseU}`)];
         modeN.push(3 << (Math.min(1, Math.abs(toponu.size))));
         pauseU /= Math.max(parseFloat(`${1 + toponu.size}`), 1);
      }
      while (yingB) {
         yingB = yingB && !yingB;
         break;
      }
      statisticsinactiveK += `${((yingB ? 3 : 1) - 3)}`;
       let calendart: Map<any, any> = new Map([[String.fromCharCode(100,95,50,52,95,100,97,98,97,115,101,0),true ], [String.fromCharCode(98,95,54,51,95,97,100,114,109,0),false ], [String.fromCharCode(121,95,53,51,95,116,105,110,105,116,0),false ]]);
       let lessN = String.fromCharCode(99,95,49,49,95,101,102,102,101,99,105,116,118,101,108,121,0);
       let shrinkl = String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,95,112,95,55,53,0);
      if (lessN.length <= shrinkl.length) {
         lessN += `${lessN.length - calendart.size}`;
      }
         lessN = `${calendart.size}`;
      if (shrinkl != lessN) {
         lessN = `${calendart.size % (Math.max(3, lessN.length))}`;
      }
         shrinkl += `${2 << (Math.min(2, Math.abs(calendart.size)))}`;
         lessN = `${lessN.length}`;
      while ((calendart.size / 5) > 2 || 2 > (calendart.size / 5)) {
         lessN = `${(lessN == String.fromCharCode(88,0) ? lessN.length : calendart.size)}`;
         break;
      }
      if ((calendart.size / (Math.max(6, shrinkl.length))) < 1 || (calendart.size / (Math.max(1, 9))) < 3) {
         calendart = new Map([[`${calendart.size}`, 3]]);
      }
      while (3 <= (calendart.size % (Math.max(4, 2))) || (4 % (Math.max(7, calendart.size))) <= 3) {
          let mappingH = String.fromCharCode(115,95,57,50,95,116,114,97,110,115,0);
         lessN = `${calendart.size * mappingH.length}`;
         break;
      }
      let redirect3 = lessN.length <= 6451451;
      do {
          let iconfeedbackz = String.fromCharCode(97,115,115,111,99,108,105,115,116,95,103,95,56,54,0);
          let acceptedC = 5.0;
         lessN += `${iconfeedbackz.length - 1}`;
         iconfeedbackz += `${1 + parseInt(`${acceptedC}`)}`;
         acceptedC += parseFloat(`${parseInt(`${acceptedC}`)}`);
         if (redirect3) {
            break;
         }
      } while (((calendart.size >> (Math.min(lessN.length, 3))) <= 4 && 4 <= (lessN.length >> (Math.min(1, Math.abs(calendart.size))))) && redirect3);
      baseQ = `${3 | statisticsinactiveK.length}`;
   while (!whistleorangeR.includes(`${zoomD}`)) {
      whistleorangeR = `${baseQ.length | 2}`;
      break;
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
       let overlayP: Array<any> = [142, 745, 803];
    let iconstart = 5;
    let icondefaultthumbnailj: Map<any, any> = new Map([[String.fromCharCode(116,95,55,49,95,115,99,101,110,97,114,105,111,0),String.fromCharCode(97,95,55,48,95,112,111,105,115,115,111,110,0)], [String.fromCharCode(115,116,112,115,95,118,95,54,51,0),String.fromCharCode(116,95,57,57,95,97,110,103,108,101,0)]]);
    let rncoref = 5;
    let gift1 = String.fromCharCode(97,95,51,48,95,115,101,113,0);
    let yellowb: Array<any> = [548, 948];
    let internetg: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,105,102,121,95,120,95,55,50,0),true ], [String.fromCharCode(120,95,57,49,95,112,114,111,120,105,109,105,116,121,0),true ], [String.fromCharCode(99,95,51,52,95,99,111,101,102,102,105,99,105,101,110,116,0),false ]]);
    let mbridgew = 1.0;
    let catagoryZ = true;
    let large2 = 0;
    let backiconI = 4.0;
    let manifestm: Array<any> = [String.fromCharCode(117,95,52,57,95,97,117,116,111,114,101,115,105,122,105,110,103,0), String.fromCharCode(117,95,50,55,95,99,98,114,116,0)];
    let loadingO = true;
    let emptyF: Array<any> = [531, 405, 929];
    let awayC = String.fromCharCode(98,95,57,56,95,119,97,114,110,105,110,103,0);
      backiconI -= overlayP.length - 3;
   for (let y = 0; y < 1; y++) {
      gift1 = "2";
   }
   for (let z = 0; z < 3; z++) {
      large2 *= 2 << (Math.min(Math.abs(rncoref), 2));
   }
      icondefaultthumbnailj = new Map([[gift1, parseInt(`${mbridgew}`)]]);
      gift1 += `${parseInt(`${mbridgew}`)}`;
      internetg.set(`${gift1}`, gift1.length);
   while (gift1.startsWith(`${overlayP.length}`)) {
      gift1 += `${manifestm.length}`;
      break;
   }

    if (episodeRef.current) {

   let goallogoP = 5715607 <= overlayP.length;
   do {
      overlayP = [iconstart % 2];
      if (goallogoP) {
         break;
      }
   } while (goallogoP && ((yellowb.length + overlayP.length) > 3));
   while (1.87 > (backiconI + 2.31) || (backiconI + 2.31) > 5.37) {
       let private_w_j = String.fromCharCode(116,114,97,105,116,115,95,110,95,49,51,0);
       let shared2 = 3.0;
       let libavformat2: Map<any, any> = new Map([[String.fromCharCode(118,95,56,55,95,101,99,107,101,121,0),454], [String.fromCharCode(114,101,108,97,121,115,95,49,95,53,0),739], [String.fromCharCode(112,114,101,116,116,121,95,101,95,57,49,0),656]]);
       let thumbnailR = String.fromCharCode(120,95,57,54,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0);
       let libreactnativejniq: Array<any> = [295, 433];
       let static_iv: Array<any> = [String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,51,95,52,57,0), String.fromCharCode(101,118,97,108,117,108,97,116,101,95,51,95,49,48,0)];
      while ((thumbnailR.length - 2) > 5 || 2 > (thumbnailR.length - static_iv.length)) {
         static_iv.push(static_iv.length);
         break;
      }
         libreactnativejniq.push(libreactnativejniq.length + 2);
       let flipperz = 2.0;
       let subsA = 5.0;
         libavformat2 = new Map([[thumbnailR, parseInt(`${subsA}`)]]);
       let photod = String.fromCharCode(109,95,56,57,95,109,105,116,101,114,0);
       let libavfilterm = String.fromCharCode(122,95,51,52,95,119,111,114,107,108,111,97,100,0);
      if (thumbnailR != libavfilterm) {
         libavfilterm += `${parseInt(`${shared2}`) >> (Math.min(Math.abs(libavformat2.size), 1))}`;
      }
          let trophye = 2;
         private_w_j = "2";
         trophye |= trophye + trophye;
      if (3 > (private_w_j.length & 1)) {
         private_w_j += `${photod.length ^ libavfilterm.length}`;
      }
          let template_hpb = 1;
          let zhubo6 = String.fromCharCode(102,105,100,99,116,95,101,95,49,51,0);
          let iconwatch4 = 3.0;
         subsA -= parseFloat(`${template_hpb & 3}`);
         template_hpb += 1 >> (Math.min(4, Math.abs(parseInt(`${iconwatch4}`))));
         zhubo6 += `${2 & zhubo6.length}`;
         iconwatch4 -= parseFloat(`${parseInt(`${iconwatch4}`) * 3}`);
       let predictionactiveU = 3;
       let pingf = 3;
         predictionactiveU &= 3 + private_w_j.length;
      internetg.set(`${iconstart}`, gift1.length);
      break;
   }
   for (let c = 0; c < 3; c++) {
      iconstart &= parseInt(`${mbridgew}`) * 3;
   }
   while (3 > large2) {
      large2 &= iconstart + 1;
      break;
   }
      catagoryZ = manifestm.length > yellowb.length;
   if ((rncoref * 1) < 2) {
      rncoref *= gift1.length;
   }
      manifestm = [parseInt(`${backiconI}`) | 2];
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
       let zhengpiani = 4;
    let libcrashsdkH = String.fromCharCode(107,95,49,48,95,116,101,115,116,105,109,103,105,110,116,0);
    let middleware2: Map<any, any> = new Map([[String.fromCharCode(113,117,111,116,101,100,95,101,95,53,49,0),String.fromCharCode(101,99,114,101,99,111,118,101,114,95,110,95,55,48,0)], [String.fromCharCode(115,116,114,115,116,97,114,116,95,104,95,54,50,0),String.fromCharCode(119,95,50,48,95,109,111,100,97,108,0)], [String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,95,112,95,51,0),String.fromCharCode(118,95,50,57,95,105,110,100,105,99,97,116,111,114,115,0)]]);
    let elementsI = 3;
    let guide2 = 4.0;
    let carouselQ: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,102,115,95,57,95,56,56,0),false ], [String.fromCharCode(109,95,51,52,95,113,100,109,100,97,116,97,0),false ], [String.fromCharCode(105,110,118,105,116,101,95,103,95,57,48,0),false ]]);
    let subsT = String.fromCharCode(110,101,97,114,101,114,95,53,95,56,51,0);
    let smallbrightnessX = String.fromCharCode(101,95,49,56,95,110,111,110,0);
    let rootK = String.fromCharCode(105,95,50,50,95,109,107,118,109,117,120,101,114,116,121,112,101,115,0);
    let telegramC: Array<any> = [968, 717];
    let untickN = 5;
    let controlsy: Array<any> = [752, 557, 813];
   let soundC = 9038109 >= carouselQ.size;
   do {
      carouselQ.set(`${elementsI}`, middleware2.size);
      if (soundC) {
         break;
      }
   } while (soundC && (Array.from(carouselQ.values()).includes(untickN)));
       let filedx = String.fromCharCode(100,101,99,111,100,101,114,115,95,115,95,50,55,0);
      for (let c = 0; c < 3; c++) {
          let lineJ = 3;
          let change1 = 3.0;
          let iconclosewhitebgI = 5.0;
          let redirectM: Array<any> = [359, 935];
          let renewq = String.fromCharCode(102,95,49,48,95,102,116,118,99,108,0);
         filedx = "2";
         lineJ /= Math.max(2, 1);
         change1 += (String.fromCharCode(73,0) == renewq ? renewq.length : redirectM.length);
         iconclosewhitebgI += 1;
         redirectM.push(redirectM.length);
      }
         filedx += `${filedx.length | filedx.length}`;
          let rewindC = String.fromCharCode(100,114,97,119,103,114,105,100,95,51,95,50,49,0);
         filedx += `${1 / (Math.max(10, rewindC.length))}`;
      subsT += `${middleware2.size}`;
   let tempnodataY = 7920960.0 >= guide2;
   do {
      guide2 *= rootK.length + 1;
      if (tempnodataY) {
         break;
      }
   } while (tempnodataY && (Array.from(carouselQ.keys()).includes(`${guide2}`)));
   for (let z = 0; z < 3; z++) {
       let refreshE = 4;
       let zoomr: Array<any> = [391, 930];
       let subsZ = String.fromCharCode(97,110,99,105,108,108,97,114,121,95,97,95,55,52,0);
       let footballtrophyp: Array<any> = [243, 31];
         subsZ = `${footballtrophyp.length}`;
      while (5 <= (refreshE - zoomr.length) && 4 <= (5 - refreshE)) {
         zoomr = [refreshE ^ footballtrophyp.length];
         break;
      }
       let iconscheduleg = String.fromCharCode(115,95,55,55,95,114,101,102,0);
      while (!zoomr.includes(footballtrophyp.length)) {
         footballtrophyp = [1];
         break;
      }
      let overZ = String.fromCharCode(52,115,112,50,107,0) == iconscheduleg;
      do {
          let whitetickc = true;
          let thailandf: Map<any, any> = new Map([[String.fromCharCode(116,95,53,49,95,110,111,110,108,105,110,101,97,114,0),String.fromCharCode(115,116,99,98,95,100,95,57,56,0)], [String.fromCharCode(115,95,53,48,95,109,109,99,116,120,0),String.fromCharCode(101,95,54,53,95,105,100,115,117,98,116,121,112,101,0)], [String.fromCharCode(108,97,116,116,105,99,101,95,119,95,53,53,0),String.fromCharCode(119,114,105,116,101,111,117,116,95,108,95,55,55,0)]]);
         iconscheduleg += `${thailandf.size - 2}`;
         whitetickc = !whitetickc;
         thailandf.set(`${whitetickc}`, ((whitetickc ? 1 : 3) * 2));
         if (overZ) {
            break;
         }
      } while ((iconscheduleg.length > 4) && overZ);
      while ((refreshE | zoomr.length) > 3 || (refreshE | zoomr.length) > 3) {
         refreshE += footballtrophyp.length | refreshE;
         break;
      }
         zoomr = [refreshE - 2];
      for (let f = 0; f < 1; f++) {
         iconscheduleg = `${subsZ.length}`;
      }
         refreshE %= Math.max(refreshE, 1);
          let goallogon = String.fromCharCode(118,95,50,57,95,100,105,121,102,112,0);
          let kuaishoum = 4.0;
         iconscheduleg = "1";
         goallogon += `${(String.fromCharCode(56,0) == goallogon ? goallogon.length : parseInt(`${kuaishoum}`))}`;
         kuaishoum /= Math.max((String.fromCharCode(80,0) == goallogon ? goallogon.length : parseInt(`${kuaishoum}`)), 2);
         footballtrophyp.push(2 | iconscheduleg.length);
       let transferz = String.fromCharCode(97,98,111,117,116,115,95,110,95,53,51,0);
      zhengpiani >>= Math.min(subsT.length, 5);
   }
   let fastB = 6387071 >= smallbrightnessX.length;
   do {
      smallbrightnessX = `${rootK.length - 3}`;
      if (fastB) {
         break;
      }
   } while (fastB && (1 < (untickN / (Math.max(smallbrightnessX.length, 8)))));
      smallbrightnessX = `${carouselQ.size % 2}`;
   while (3 >= (untickN ^ 4) && (untickN ^ 4) >= 1) {
      untickN -= 2;
      break;
   }
      untickN += libcrashsdkH.length;
      untickN ^= rootK.length - telegramC.length;
       let libfilev = String.fromCharCode(108,95,51,49,95,101,118,111,108,118,101,0);
          let eabafadfadddbafeddddeeefeaafd = true;
          let lightt = 0.0;
         libfilev += `${parseInt(`${lightt}`) + 1}`;
         eabafadfadddbafeddddeeefeaafd = (eabafadfadddbafeddddeeefeaafd ? !eabafadfadddbafeddddeeefeaafd : eabafadfadddbafeddddeeefeaafd);
         lightt += (parseFloat(`${2 / (Math.max((eabafadfadddbafeddddeeefeaafd ? 2 : 2), 8))}`));
          let iconviewergifp = false;
         libfilev = `${libfilev.length}`;
          let libfbO = String.fromCharCode(100,95,49,48,95,117,109,111,116,105,111,110,0);
         libfilev = `${libfilev.length - libfbO.length}`;
      telegramC = [telegramC.length - untickN];
       let resultN = 3.0;
       let statisticsinactiveX = 1.0;
       let controlw = String.fromCharCode(99,111,100,101,99,117,116,105,108,115,95,52,95,49,0);
         statisticsinactiveX /= Math.max(2, 2);
      for (let x = 0; x < 1; x++) {
          let routerc = false;
          let icontransferclubk = 4.0;
          let launchera: Array<any> = [892, 845];
          let yellowanimationlive3 = 4.0;
         statisticsinactiveX *= parseInt(`${resultN}`);
         routerc = yellowanimationlive3 == 35.24;
         icontransferclubk /= Math.max(parseFloat(`${2}`), 4);
         launchera = [launchera.length % 3];
         yellowanimationlive3 /= Math.max(parseFloat(`${parseInt(`${icontransferclubk}`)}`), 5);
      }
      let ccopy_1cZ = statisticsinactiveX <= 6361959.0;
      do {
          let libfabricjniQ: Array<any> = [916, 267];
          let giftt = 0;
         statisticsinactiveX /= Math.max(5, parseInt(`${resultN}`));
         libfabricjniQ = [libfabricjniQ.length - giftt];
         giftt |= libfabricjniQ.length * giftt;
         if (ccopy_1cZ) {
            break;
         }
      } while ((3.69 <= (3.37 - statisticsinactiveX) && (resultN - 3.37) <= 2.79) && ccopy_1cZ);
         controlw += `${controlw.length}`;
         statisticsinactiveX /= Math.max(3 - parseInt(`${statisticsinactiveX}`), 4);
      middleware2 = new Map([[libcrashsdkH, 3 / (Math.max(3, untickN))]]);
       let upgrade8 = String.fromCharCode(119,95,51,95,118,97,108,105,100,97,116,105,111,110,115,0);
       let statisticsinactive1: Array<any> = [String.fromCharCode(114,101,103,105,115,116,114,97,114,95,112,95,57,55,0), String.fromCharCode(102,105,108,116,101,114,98,97,110,107,95,109,95,50,0)];
       let linkn = String.fromCharCode(99,95,50,52,95,118,111,114,98,105,115,0);
      if (4 > (statisticsinactive1.length * 5) && (linkn.length * statisticsinactive1.length) > 5) {
          let constants2 = String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,95,97,95,53,57,0);
          let viewerk = 2;
          let footballfield4: Map<any, any> = new Map([[String.fromCharCode(115,95,49,49,95,112,104,114,97,115,101,115,0),String.fromCharCode(103,95,56,55,95,115,107,101,116,99,104,0)], [String.fromCharCode(101,95,52,48,95,119,97,118,101,102,111,114,109,0),String.fromCharCode(104,95,55,48,95,101,109,117,108,97,116,101,100,0)]]);
         linkn += `${footballfield4.size}`;
         constants2 = `${(String.fromCharCode(121,0) == constants2 ? constants2.length : viewerk)}`;
         viewerk += constants2.length >> (Math.min(3, Math.abs(viewerk)));
         footballfield4 = new Map([[`${viewerk}`, constants2.length >> (Math.min(Math.abs(1), 4))]]);
      }
      if (3 < (statisticsinactive1.length & 2) && 1 < (2 & linkn.length)) {
          let sportsn = 2.0;
         linkn += `${linkn.length - statisticsinactive1.length}`;
         sportsn *= 1 << (Math.min(Math.abs(parseInt(`${sportsn}`)), 3));
      }
         upgrade8 += `${(linkn == String.fromCharCode(67,0) ? linkn.length : statisticsinactive1.length)}`;
         linkn = `${(linkn == String.fromCharCode(51,0) ? linkn.length : statisticsinactive1.length)}`;
      let libyogaj = 7977031 <= linkn.length;
      do {
         linkn += `${3 | upgrade8.length}`;
         if (libyogaj) {
            break;
         }
      } while ((4 == linkn.length) && libyogaj);
      if (upgrade8.length == 5) {
          let logoutv: Map<any, any> = new Map([[String.fromCharCode(107,95,55,95,116,97,114,103,101,116,101,100,0),308], [String.fromCharCode(100,95,52,57,95,97,110,99,104,111,114,115,0),571], [String.fromCharCode(101,120,112,97,110,100,101,100,95,53,95,50,51,0),288]]);
         upgrade8 = "2";
         logoutv = new Map([[`${logoutv.size}`, logoutv.size >> (Math.min(Math.abs(3), 3))]]);
      }
      for (let u = 0; u < 3; u++) {
         upgrade8 += `${upgrade8.length}`;
      }
      let default_43p = 9047178 >= upgrade8.length;
      do {
         upgrade8 = `${statisticsinactive1.length}`;
         if (default_43p) {
            break;
         }
      } while (default_43p && ((statisticsinactive1.length | 5) < 1 || (5 | upgrade8.length) < 4));
      let styles4 = String.fromCharCode(115,119,120,113,95,110,0) == upgrade8;
      do {
          let tempnodatah: Array<any> = [162, 806];
          let s_viewz = 2.0;
          let phoneV = 5.0;
          let robotow = false;
         upgrade8 = `${parseInt(`${s_viewz}`)}`;
         tempnodatah = [parseInt(`${phoneV}`) * tempnodatah.length];
         phoneV /= Math.max(4, parseFloat(`${3 + parseInt(`${phoneV}`)}`));
         robotow = !robotow;
         if (styles4) {
            break;
         }
      } while ((2 == upgrade8.length) && styles4);
      zhengpiani <<= Math.min(Math.abs(3), 2);
      elementsI /= Math.max(3, telegramC.length);
       let libreactperfloggerjniT: Map<any, any> = new Map([[String.fromCharCode(119,95,55,54,95,101,116,105,109,101,0),25], [String.fromCharCode(99,111,99,111,97,95,49,95,57,0),307]]);
      let embedK = 8832119 >= libreactperfloggerjniT.size;
      do {
         libreactperfloggerjniT = new Map([[`${libreactperfloggerjniT.size}`, libreactperfloggerjniT.size]]);
         if (embedK) {
            break;
         }
      } while (embedK && ((libreactperfloggerjniT.size % (Math.max(4, 6))) == 2 && (4 % (Math.max(4, libreactperfloggerjniT.size))) == 4));
      for (let z = 0; z < 2; z++) {
         libreactperfloggerjniT.set(`${libreactperfloggerjniT.size}`, libreactperfloggerjniT.size % (Math.max(libreactperfloggerjniT.size, 5)));
      }
         libreactperfloggerjniT.set(`${libreactperfloggerjniT.size}`, libreactperfloggerjniT.size);
      untickN <<= Math.min(Math.abs(middleware2.size), 5);
      smallbrightnessX = "1";
      guide2 += untickN << (Math.min(telegramC.length, 5));
   while ((elementsI + 2) <= 4 || (elementsI + 2) <= 5) {
      subsT = `${untickN * 3}`;
      break;
   }
       let grayl = false;
      if (!grayl) {
          let cross9 = String.fromCharCode(115,116,114,105,115,116,114,95,103,95,57,57,0);
          let merger0 = 2.0;
          let predictionbuttone = String.fromCharCode(100,95,57,95,116,101,108,101,103,114,97,0);
          let moduler = String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,54,95,50,0);
         grayl = parseInt(`${merger0}`) <= cross9.length;
         cross9 += "1";
         merger0 += parseFloat(`${moduler.length}`);
         predictionbuttone = `${moduler.length}`;
      }
         grayl = grayl || grayl;
         grayl = (!grayl ? grayl : grayl);
      middleware2.set(`${grayl}`, 2);
   let gradlewF = String.fromCharCode(104,122,50,48,100,48,105,95,116,105,0) == rootK;
   do {
      rootK += "2";
      if (gradlewF) {
         break;
      }
   } while (gradlewF && (rootK.length > libcrashsdkH.length));
   if (subsT.length >= 4) {
      carouselQ.set(`${telegramC.length}`, middleware2.size >> (Math.min(telegramC.length, 1)));
   }
      controlsy = [2];
   let libfbjnij = String.fromCharCode(116,104,97,110,98,0) == libcrashsdkH;
   do {
       let iconclosewhitebgL: Array<any> = [970, 93, 600];
       let settingsk = true;
       let u_manager1 = 4;
       let utilsi: Array<any> = [String.fromCharCode(115,95,56,49,95,116,101,109,112,108,97,116,101,115,0), String.fromCharCode(97,95,52,95,101,108,101,109,101,110,116,0), String.fromCharCode(108,95,51,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0)];
       let halfz = String.fromCharCode(108,95,52,48,95,118,105,100,101,111,101,110,99,100,115,112,0);
      while (iconclosewhitebgL.length <= utilsi.length) {
         iconclosewhitebgL.push((String.fromCharCode(80,0) == halfz ? halfz.length : iconclosewhitebgL.length));
         break;
      }
      while (halfz.startsWith(`${settingsk}`)) {
          let viewsx: Map<any, any> = new Map([[String.fromCharCode(109,101,97,115,117,114,101,115,95,120,95,55,49,0),String.fromCharCode(114,95,50,49,95,116,114,97,110,115,102,111,114,109,0)], [String.fromCharCode(111,112,101,110,115,108,101,115,95,53,95,49,54,0),String.fromCharCode(116,105,109,101,117,116,105,108,115,95,53,95,52,56,0)], [String.fromCharCode(110,95,49,95,97,112,112,108,101,0),String.fromCharCode(101,109,112,116,121,95,100,95,56,53,0)]]);
          let disconnectedJ = 4.0;
         settingsk = halfz.length < 43;
         viewsx.set(`${disconnectedJ}`, parseInt(`${disconnectedJ}`) * 3);
         break;
      }
      while (5 <= (u_manager1 % 1)) {
          let sentryd = 2;
         settingsk = u_manager1 > 5;
         sentryd >>= Math.min(5, Math.abs(sentryd));
         break;
      }
         settingsk = (halfz.length ^ iconclosewhitebgL.length) == 48;
      if ((u_manager1 & halfz.length) == 1) {
         u_manager1 >>= Math.min(Math.abs(3), 3);
      }
      if (utilsi.length <= halfz.length) {
         utilsi.push(u_manager1);
      }
       let yingW = String.fromCharCode(97,108,119,97,121,115,95,101,95,51,54,0);
       let whatsappG = String.fromCharCode(115,117,98,109,111,100,117,108,101,95,108,95,50,57,0);
      while (5 > yingW.length) {
         yingW += `${(String.fromCharCode(74,0) == halfz ? utilsi.length : halfz.length)}`;
         break;
      }
      let textinput1 = whatsappG.length >= 9315036;
      do {
         whatsappG = `${utilsi.length}`;
         if (textinput1) {
            break;
         }
      } while ((u_manager1 > 5) && textinput1);
          let awayiconc: Array<any> = [861, 360];
          let animations2 = 4;
         iconclosewhitebgL.push(1 | whatsappG.length);
         awayiconc = [animations2 >> (Math.min(3, Math.abs(3)))];
         animations2 &= 1;
      let logoj = 5018416 >= halfz.length;
      do {
         halfz = `${iconclosewhitebgL.length}`;
         if (logoj) {
            break;
         }
      } while (logoj && (4 <= (iconclosewhitebgL.length | 2) && 3 <= (2 | halfz.length)));
      let runtimeschedulerp = u_manager1 <= 6843288;
      do {
         u_manager1 <<= Math.min(4, Math.abs(2 | iconclosewhitebgL.length));
         if (runtimeschedulerp) {
            break;
         }
      } while (((u_manager1 >> (Math.min(utilsi.length, 5))) == 5 && 1 == (u_manager1 >> (Math.min(Math.abs(5), 4)))) && runtimeschedulerp);
      for (let n = 0; n < 3; n++) {
         u_manager1 ^= iconclosewhitebgL.length;
      }
       let shirtD = 4.0;
         yingW += `${parseInt(`${shirtD}`) << (Math.min(utilsi.length, 1))}`;
      libcrashsdkH += `${utilsi.length | subsT.length}`;
      if (libfbjnij) {
         break;
      }
   } while ((smallbrightnessX.length == libcrashsdkH.length) && libfbjnij);
   for (let n = 0; n < 3; n++) {
      guide2 *= controlsy.length;
   }
      controlsy = [elementsI];
   for (let t = 0; t < 3; t++) {
       let zhuboV = 2;
         zhuboV >>= Math.min(1, Math.abs(zhuboV * zhuboV));
       let spec7: Map<any, any> = new Map([[String.fromCharCode(119,95,54,48,95,99,111,110,110,101,99,116,115,0),false ], [String.fromCharCode(115,116,100,111,117,116,95,53,95,52,50,0),true ], [String.fromCharCode(108,111,99,97,108,104,111,115,116,95,51,95,51,0),true ]]);
       let splashW: Map<any, any> = new Map([[String.fromCharCode(120,95,53,51,95,111,112,117,115,101,110,99,0),false ], [String.fromCharCode(105,110,115,101,114,116,115,95,104,95,55,51,0),false ]]);
          let fullscreenmax8 = String.fromCharCode(115,95,52,50,95,101,97,116,105,110,103,0);
          let comment7 = String.fromCharCode(115,95,53,55,95,114,105,110,102,0);
         zhuboV -= 3;
         fullscreenmax8 += `${fullscreenmax8.length}`;
         comment7 = `${comment7.length}`;
      telegramC = [3];
   }
       let emojiI = String.fromCharCode(99,116,120,95,55,95,51,53,0);
       let imagesA = false;
          let videocommonl = false;
         imagesA = (imagesA ? !videocommonl : !imagesA);
      let iconfeedbackY = 6420774 <= emojiI.length;
      do {
          let googleR = 3.0;
          let darkP = 5;
         emojiI = "1";
         googleR -= parseFloat(`${3}`);
         darkP %= Math.max(4, parseInt(`${googleR}`) % 1);
         if (iconfeedbackY) {
            break;
         }
      } while (iconfeedbackY && (5 >= emojiI.length));
      let livesharez = imagesA ? !imagesA : imagesA;
      do {
         imagesA = emojiI.length == 64;
         if (livesharez) {
            break;
         }
      } while (livesharez && (!emojiI.startsWith(`${imagesA}`)));
      for (let v = 0; v < 3; v++) {
         emojiI += `${(String.fromCharCode(107,0) == emojiI ? emojiI.length : (imagesA ? 3 : 1))}`;
      }
      if (imagesA) {
         imagesA = !emojiI.startsWith(`${imagesA}`);
      }
         emojiI = `${(2 ^ (imagesA ? 2 : 3))}`;
      telegramC = [zhengpiani - telegramC.length];

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
       let commonK: Map<any, any> = new Map([[String.fromCharCode(101,95,51,49,95,115,112,104,101,114,105,99,97,108,0),335], [String.fromCharCode(105,110,116,114,112,95,113,95,50,49,0),179]]);
    let reactnativeultimatelistviewp = true;
    let gpay3: Map<any, any> = new Map([[String.fromCharCode(109,95,57,52,95,105,110,99,114,101,97,115,105,110,103,0),String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,52,95,54,50,0)], [String.fromCharCode(105,95,49,53,95,97,112,112,114,111,118,101,114,0),String.fromCharCode(110,95,56,56,95,109,111,115,97,105,99,0)], [String.fromCharCode(101,110,100,105,110,103,95,105,95,50,53,0),String.fromCharCode(100,105,115,116,112,111,105,110,116,95,57,95,56,57,0)]]);
    let sort0 = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,97,95,51,48,0);
    let roomK = 0;
    let reward_ = String.fromCharCode(105,108,111,103,95,57,95,49,49,0);
    let relatedb = String.fromCharCode(115,95,50,56,95,115,101,114,105,97,108,105,122,101,100,0);
   let related4 = reactnativeultimatelistviewp ? !reactnativeultimatelistviewp : reactnativeultimatelistviewp;
   do {
      reactnativeultimatelistviewp = gpay3.size == 84;
      if (related4) {
         break;
      }
   } while ((sort0.length == 2) && related4);
      relatedb = `${roomK}`;
       let trashX: Array<any> = [473, 944, 26];
         trashX = [trashX.length];
         trashX = [trashX.length];
         trashX.push(trashX.length * trashX.length);
      sort0 += `${1 + trashX.length}`;

    const searchTerm = vod?.vod_name ? vod?.vod_name : "";
    const encodedSearchTerm = encodeURIComponent(searchTerm);

       let sigmobZ = 4.0;
       let subtextN: Array<any> = [String.fromCharCode(121,95,57,52,95,98,117,102,102,101,114,105,110,103,0), String.fromCharCode(98,101,99,104,95,109,95,50,56,0), String.fromCharCode(107,95,50,48,95,99,111,114,114,0)];
       let searchbarv = String.fromCharCode(110,97,110,111,112,98,95,48,95,49,49,0);
       let chatroombackgroundC = String.fromCharCode(103,95,56,54,95,105,103,110,111,114,101,0);
         chatroombackgroundC += "1";
      if (chatroombackgroundC.includes(`${subtextN.length}`)) {
         chatroombackgroundC += `${subtextN.length / (Math.max(1, 10))}`;
      }
      let base3 = sigmobZ >= 9717385.0;
      do {
         sigmobZ += parseFloat(`${3}`);
         if (base3) {
            break;
         }
      } while (base3 && (2 > (parseInt(`${sigmobZ}`) / (Math.max(chatroombackgroundC.length, 8))) || (parseInt(`${sigmobZ}`) / (Math.max(chatroombackgroundC.length, 7))) > 2));
      let downarrowI = sigmobZ >= 8381337.0;
      do {
          let sendJ: Array<any> = [111, 408];
          let buffert: Map<any, any> = new Map([[String.fromCharCode(113,101,120,112,95,99,95,52,48,0),666], [String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,52,95,57,57,0),295], [String.fromCharCode(112,97,114,116,115,95,54,95,54,0),796]]);
          let footballtrophyN = String.fromCharCode(114,103,98,121,117,118,95,55,95,50,0);
          let miniV = true;
         sigmobZ *= parseFloat(`${3}`);
         sendJ.push(buffert.size);
         buffert.set(`${sendJ.length}`, sendJ.length);
         footballtrophyN = `${3 << (Math.min(1, footballtrophyN.length))}`;
         miniV = (buffert.size << (Math.min(footballtrophyN.length, 4))) == 58;
         if (downarrowI) {
            break;
         }
      } while (((parseFloat(`${subtextN.length}`) * sigmobZ) >= 2.46) && downarrowI);
         sigmobZ -= (parseFloat(`${String.fromCharCode(69,0) == searchbarv ? searchbarv.length : parseInt(`${sigmobZ}`)}`));
          let eactj = String.fromCharCode(115,95,55,95,103,101,111,112,111,108,121,0);
          let downloadingl: Array<any> = [728, 918];
          let reactnativeultimatelistview3 = String.fromCharCode(118,95,55,51,95,109,97,110,116,105,115,115,97,115,0);
         subtextN.push((chatroombackgroundC == String.fromCharCode(79,0) ? chatroombackgroundC.length : subtextN.length));
         eactj = `${reactnativeultimatelistview3.length | 3}`;
         downloadingl = [downloadingl.length * 1];
         reactnativeultimatelistview3 = `${downloadingl.length}`;
      if ((1.50 + sigmobZ) < 1.18) {
         subtextN = [parseInt(`${sigmobZ}`) ^ 3];
      }
         searchbarv += `${subtextN.length << (Math.min(5, Math.abs(parseInt(`${sigmobZ}`))))}`;
      roomK *= 2 | parseInt(`${sigmobZ}`);
       let stationsT = String.fromCharCode(105,116,108,101,95,101,95,51,52,0);
      while (stationsT.length > stationsT.length) {
         stationsT = `${3 + stationsT.length}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
          let skips = String.fromCharCode(115,118,113,101,110,99,95,101,95,57,49,0);
         stationsT += `${(stationsT == String.fromCharCode(55,0) ? stationsT.length : skips.length)}`;
      }
      let mbjscommonC = String.fromCharCode(110,101,121,95,0) == stationsT;
      do {
         stationsT = `${stationsT.length}`;
         if (mbjscommonC) {
            break;
         }
      } while (mbjscommonC && (stationsT.length < 5));
      reactnativeultimatelistviewp = commonK.size <= roomK;
   let feedbackz = roomK >= 8776185;
   do {
      roomK *= roomK;
      if (feedbackz) {
         break;
      }
   } while (((relatedb.length * roomK) < 4) && feedbackz);
    

   let animationsX = reactnativeultimatelistviewp ? !reactnativeultimatelistviewp : reactnativeultimatelistviewp;
   do {
      reactnativeultimatelistviewp = (roomK & relatedb.length) == 30;
      if (animationsX) {
         break;
      }
   } while (animationsX && (!reward_.startsWith(`${reactnativeultimatelistviewp}`)));
   for (let u = 0; u < 1; u++) {
      reactnativeultimatelistviewp = String.fromCharCode(86,0) == relatedb;
   }
   for (let v = 0; v < 1; v++) {
      reward_ = `${((reactnativeultimatelistviewp ? 1 : 5))}`;
   }
    

      reward_ = `${(String.fromCharCode(81,0) == sort0 ? sort0.length : commonK.size)}`;
      sort0 = `${gpay3.size * reward_.length}`;
       let videocommonB = 4;
       let collectiony = String.fromCharCode(100,95,56,51,95,102,111,114,119,97,114,100,101,100,0);
       let calendarC = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,109,95,49,56,0);
         videocommonB <<= Math.min(5, Math.abs(calendarC.length | 2));
       let rewindy = String.fromCharCode(116,104,105,99,107,95,97,95,54,55,0);
       let auto_km = String.fromCharCode(104,105,103,104,112,97,115,115,95,117,95,51,56,0);
         collectiony = `${(String.fromCharCode(81,0) == auto_km ? rewindy.length : auto_km.length)}`;
          let networkr: Array<any> = [String.fromCharCode(115,119,97,116,99,104,95,121,95,57,51,0), String.fromCharCode(101,95,57,51,95,97,118,100,101,118,105,99,101,114,101,115,0), String.fromCharCode(121,95,53,51,95,99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,0)];
          let singleL = String.fromCharCode(100,111,109,105,110,97,110,116,95,98,95,52,50,0);
         rewindy += "1";
         networkr.push(1);
         singleL = `${networkr.length + singleL.length}`;
       let bellE = true;
       let pauseS = false;
         rewindy += "1";
         rewindy = `${(String.fromCharCode(101,0) == rewindy ? rewindy.length : collectiony.length)}`;
      for (let h = 0; h < 2; h++) {
         calendarC += `${((bellE ? 4 : 3) + 3)}`;
      }
         bellE = calendarC == String.fromCharCode(49,0) || 68 >= videocommonB;
      sort0 += `${calendarC.length % (Math.max(10, reward_.length))}`;
    const url = `https://www.bing.com/search?q=${encodedSearchTerm}&form=QBLH&sp=-1&ghc=1&lq=0&pq=a&sc=10-1&qs=n&sk=&cvid=F4E27DDDEE8343F082F994097EF7592A&ghsh=0&ghacc=0&ghpl=`;

       let basketballmatchdetailbgB = 2.0;
      while ((basketballmatchdetailbgB + 3.11) == 1.24 || (basketballmatchdetailbgB + basketballmatchdetailbgB) == 3.11) {
          let valuesK: Map<any, any> = new Map([[String.fromCharCode(100,105,103,105,116,95,56,95,57,52,0),String.fromCharCode(122,95,55,54,95,109,99,108,109,115,0)], [String.fromCharCode(111,110,97,118,99,100,97,116,97,95,55,95,56,48,0),String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,99,95,49,53,0)]]);
          let checkboxz = 5.0;
          let black6: Array<any> = [619, 641, 988];
         basketballmatchdetailbgB -= parseInt(`${checkboxz}`) ^ 1;
         valuesK = new Map([[`${valuesK.size}`, valuesK.size | 3]]);
         checkboxz -= black6.length;
         black6.push(black6.length);
         break;
      }
         basketballmatchdetailbgB /= Math.max(1 ^ parseInt(`${basketballmatchdetailbgB}`), 4);
          let elementsd = String.fromCharCode(114,101,116,114,97,110,115,95,98,95,51,49,0);
          let condensedx = 5;
          let friendsU = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,115,95,55,50,0);
         basketballmatchdetailbgB /= Math.max(5, parseInt(`${basketballmatchdetailbgB}`) / (Math.max(elementsd.length, 2)));
         elementsd = `${friendsU.length}`;
         condensedx |= condensedx;
         friendsU += `${condensedx}`;
      gpay3 = new Map([[reward_, sort0.length]]);
   if (5 < (commonK.size - 1)) {
      sort0 += "3";
   }
      sort0 = `${sort0.length}`;
    try {

      sort0 += `${2 >> (Math.min(2, reward_.length))}`;
   while ((roomK >> (Math.min(Math.abs(2), 3))) <= 1 && 1 <= (2 >> (Math.min(3, sort0.length)))) {
      roomK |= gpay3.size ^ reward_.length;
      break;
   }
       let homeX = 3;
       let libbufferH = String.fromCharCode(114,95,56,51,95,98,116,110,0);
       let nativemoduleg = String.fromCharCode(110,97,110,112,97,95,56,95,54,0);
         homeX /= Math.max(1, 1 - nativemoduleg.length);
         nativemoduleg += `${1 << (Math.min(3, libbufferH.length))}`;
         homeX |= 1;
          let scrollviewK = String.fromCharCode(111,95,52,52,95,98,103,112,104,99,104,101,99,107,0);
         libbufferH = `${1 | libbufferH.length}`;
         scrollviewK = `${(String.fromCharCode(50,0) == scrollviewK ? scrollviewK.length : scrollviewK.length)}`;
         libbufferH += `${(libbufferH == String.fromCharCode(90,0) ? libbufferH.length : homeX)}`;
      let orangedownarrowk = String.fromCharCode(102,108,55,119,113,49,100,0) == nativemoduleg;
      do {
          let overZ = 2.0;
          let exampleimageT = 0.0;
          let basketballplayerplaceholder1 = true;
          let whiteanimationlive5 = 5;
         nativemoduleg = `${parseInt(`${overZ}`)}`;
         exampleimageT += 1;
         basketballplayerplaceholder1 = 27.38 >= exampleimageT && !basketballplayerplaceholder1;
         whiteanimationlive5 ^= 3 | parseInt(`${exampleimageT}`);
         if (orangedownarrowk) {
            break;
         }
      } while (orangedownarrowk && (!nativemoduleg.includes(`${homeX}`)));
      for (let e = 0; e < 3; e++) {
         nativemoduleg = `${3 | libbufferH.length}`;
      }
       let calendar5 = 5.0;
       let episodeO = 1.0;
      for (let i = 0; i < 3; i++) {
         homeX <<= Math.min(Math.abs(nativemoduleg.length * parseInt(`${episodeO}`)), 3);
      }
      sort0 += `${roomK / (Math.max(sort0.length, 1))}`;
      if (await InAppBrowser.isAvailable()) {

   let vietnamW = 6810681 >= gpay3.size;
   do {
      gpay3 = new Map([[relatedb, relatedb.length]]);
      if (vietnamW) {
         break;
      }
   } while (((relatedb.length << (Math.min(Math.abs(4), 2))) < 1) && vietnamW);
   if (!sort0.includes(`${roomK}`)) {
      roomK &= 1;
   }
   if (5 >= reward_.length) {
      reactnativeultimatelistviewp = 39 > sort0.length;
   }
        await InAppBrowser.open(url);
      } else {

       let cancel8 = String.fromCharCode(112,117,108,115,101,115,95,52,95,57,51,0);
       let bootsplashR: Map<any, any> = new Map([[String.fromCharCode(103,114,111,117,112,101,100,95,108,95,52,50,0),true ], [String.fromCharCode(116,104,117,109,98,115,117,112,95,102,95,53,57,0),false ]]);
       let valuesx = String.fromCharCode(121,95,49,49,95,97,116,116,97,99,104,109,101,110,116,115,0);
      if (!valuesx.startsWith(`${bootsplashR.size}`)) {
         valuesx = `${(valuesx == String.fromCharCode(71,0) ? valuesx.length : bootsplashR.size)}`;
      }
      if (cancel8.length <= valuesx.length) {
         valuesx = `${valuesx.length}`;
      }
          let fullscreenminO = 0.0;
          let gemfileO: Map<any, any> = new Map([[String.fromCharCode(102,97,118,111,114,105,116,101,95,97,95,49,49,0),true ], [String.fromCharCode(112,95,50,56,95,103,101,110,99,102,103,115,0),true ]]);
          let googleZ = 2.0;
         valuesx = `${bootsplashR.size}`;
         fullscreenminO -= 1;
         gemfileO = new Map([[`${gemfileO.size}`, parseInt(`${googleZ}`)]]);
         googleZ += 3 & parseInt(`${googleZ}`);
      let neon4 = String.fromCharCode(102,110,105,0) == valuesx;
      do {
         valuesx += `${bootsplashR.size % (Math.max(valuesx.length, 2))}`;
         if (neon4) {
            break;
         }
      } while (neon4 && ((bootsplashR.size % (Math.max(valuesx.length, 8))) > 2 && (valuesx.length % 2) > 1));
      let valuesl = 9782738 <= cancel8.length;
      do {
          let otherm = 4;
          let adulta = String.fromCharCode(97,95,55,51,95,115,97,118,105,110,103,0);
          let rncoreF = String.fromCharCode(109,106,112,101,103,95,115,95,49,57,0);
          let dycreatorT: Map<any, any> = new Map([[String.fromCharCode(116,114,105,95,122,95,54,54,0),false ], [String.fromCharCode(108,95,48,95,103,114,111,101,115,116,108,0),true ]]);
         cancel8 = `${dycreatorT.size % (Math.max(adulta.length, 5))}`;
         otherm /= Math.max(otherm ^ rncoreF.length, 1);
         adulta = `${(rncoreF == String.fromCharCode(66,0) ? otherm : rncoreF.length)}`;
         dycreatorT = new Map([[`${otherm}`, 3]]);
         if (valuesl) {
            break;
         }
      } while (valuesl && (valuesx.startsWith(`${cancel8.length}`)));
         bootsplashR = new Map([[`${bootsplashR.size}`, 2 | valuesx.length]]);
      if (!valuesx.startsWith(`${bootsplashR.size}`)) {
         valuesx = `${bootsplashR.size | 3}`;
      }
      let internetr = 8450490 >= bootsplashR.size;
      do {
          let selected4: Array<any> = [375, 921, 785];
          let expandV: Array<any> = [272, 73, 339];
         bootsplashR.set(valuesx, (String.fromCharCode(84,0) == valuesx ? valuesx.length : expandV.length));
         selected4.push(3);
         expandV.push(1);
         if (internetr) {
            break;
         }
      } while (internetr && ((bootsplashR.size | valuesx.length) <= 2 || 1 <= (bootsplashR.size | 2)));
      for (let s = 0; s < 3; s++) {
         bootsplashR.set(`${valuesx}`, valuesx.length >> (Math.min(Math.abs(3), 5)));
      }
      reactnativeultimatelistviewp = 43 > roomK || !reactnativeultimatelistviewp;
   let static_9C = roomK >= 7070517;
   do {
      roomK ^= 2;
      if (static_9C) {
         break;
      }
   } while ((Array.from(commonK.values()).includes(roomK)) && static_9C);
   if (reactnativeultimatelistviewp) {
      relatedb = `${relatedb.length}`;
   }
        Linking.openURL(url);
      }
    } catch (e) {

      sort0 += `${roomK}`;
   while (3 == commonK.size) {
      sort0 += "3";
      break;
   }
       let orangedownarrowF = true;
      let sinax = orangedownarrowF ? !orangedownarrowF : orangedownarrowF;
      do {
         orangedownarrowF = (!orangedownarrowF ? orangedownarrowF : orangedownarrowF);
         if (sinax) {
            break;
         }
      } while ((orangedownarrowF) && sinax);
      while (orangedownarrowF) {
          let shielddoneX = 3;
         orangedownarrowF = 34 >= shielddoneX && orangedownarrowF;
         break;
      }
      for (let j = 0; j < 3; j++) {
         orangedownarrowF = (orangedownarrowF ? orangedownarrowF : orangedownarrowF);
      }
      sort0 = `${roomK % (Math.max(reward_.length, 6))}`;
      Linking.openURL(url);
    }
  }, [vod]);

  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  

  

  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  

  
  
  

  const fetchComments = () =>
    mayi_CrossChat.getReviewDetails(vod?.vod_douban_id.toString() ?? "").then(
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
       let expiredX = true;
    let sports: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,109,95,53,52,0),724], [String.fromCharCode(98,95,55,49,95,117,110,115,116,97,107,101,0),939]]);
    let downloaderV = String.fromCharCode(119,95,51,95,119,101,98,112,97,103,101,0);
    let iconwechat3 = 1.0;
    let vipsportu = 4.0;
    let binddatas0 = 1.0;
    let sports9 = String.fromCharCode(102,95,49,54,95,116,98,108,104,100,114,0);
    let iconnewsshareD = 0.0;
   if (binddatas0 > parseFloat(`${sports9.length}`)) {
       let customj = 4;
       let dnewarchdefaultsJ: Array<any> = [356, 369, 115];
       let containerF = 1;
       let whitetick4 = 1.0;
      while (2 < (customj + 2)) {
         customj &= containerF;
         break;
      }
         whitetick4 += parseFloat(`${3 * parseInt(`${whitetick4}`)}`);
          let reactnativejsF = false;
          let iconwechatG: Map<any, any> = new Map([[String.fromCharCode(109,95,56,54,95,100,101,102,101,97,116,0),51], [String.fromCharCode(101,95,52,53,95,99,101,110,116,114,97,108,108,121,0),225], [String.fromCharCode(98,95,57,52,95,105,110,116,101,114,108,101,97,118,105,110,103,0),904]]);
         whitetick4 *= parseFloat(`${iconwechatG.size % 2}`);
         reactnativejsF = (reactnativejsF ? reactnativejsF : !reactnativejsF);
         iconwechatG.set(`${reactnativejsF}`, ((reactnativejsF ? 3 : 2) & 3));
      if ((containerF + 1) <= 1) {
         containerF >>= Math.min(Math.abs(3 / (Math.max(containerF, 5))), 1);
      }
       let defaultprofilepicd = 3.0;
         defaultprofilepicd -= parseFloat(`${parseInt(`${whitetick4}`)}`);
      let string2 = 6891221.0 >= whitetick4;
      do {
         whitetick4 -= parseFloat(`${dnewarchdefaultsJ.length}`);
         if (string2) {
            break;
         }
      } while (((whitetick4 + parseFloat(`${dnewarchdefaultsJ.length}`)) >= 1.93 && (1.93 + whitetick4) >= 5.15) && string2);
          let resendZ = String.fromCharCode(109,103,109,116,95,49,95,52,49,0);
          let iconqqv = false;
          let k_unlockc = String.fromCharCode(103,95,53,56,95,107,101,121,104,97,115,104,0);
         whitetick4 -= parseFloat(`${1 & parseInt(`${whitetick4}`)}`);
         resendZ = "3";
         iconqqv = !iconqqv;
         k_unlockc = `${resendZ.length}`;
         defaultprofilepicd /= Math.max(3, parseFloat(`${3 >> (Math.min(4, dnewarchdefaultsJ.length))}`));
          let icontransferclubF: Map<any, any> = new Map([[String.fromCharCode(100,101,116,97,99,104,101,100,95,106,95,55,0),true ], [String.fromCharCode(99,108,105,112,116,101,115,116,95,117,95,53,56,0),false ], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,110,95,52,56,0),false ]]);
          let downloaderN = 1.0;
          let rulesc = 5.0;
         customj += parseInt(`${rulesc}`) << (Math.min(Math.abs(1), 2));
         icontransferclubF = new Map([[`${icontransferclubF.size}`, 3]]);
         downloaderN += parseFloat(`${icontransferclubF.size}`);
         rulesc += parseFloat(`${parseInt(`${downloaderN}`)}`);
      let arrowupu = customj >= 7762216;
      do {
         customj &= 1 / (Math.max(containerF, 5));
         if (arrowupu) {
            break;
         }
      } while (((4 | customj) >= 5 && 2 >= (customj | 4)) && arrowupu);
      while (1.31 < (parseFloat(`${dnewarchdefaultsJ.length}`) - whitetick4) || (whitetick4 - 1.31) < 5.52) {
          let overT = 3.0;
          let middle9 = 4;
          let iconpointscoree = 1;
         dnewarchdefaultsJ = [parseInt(`${overT}`)];
         middle9 ^= iconpointscoree;
         iconpointscoree |= 1 ^ iconpointscoree;
         break;
      }
      sports9 = `${sports.size + parseInt(`${whitetick4}`)}`;
   }
      expiredX = 91.95 >= binddatas0;
      iconwechat3 += parseFloat(`${parseInt(`${vipsportu}`) % 2}`);

      let mergedArray;

       let dplusc: Array<any> = [102, 464, 467];
       let chinan = String.fromCharCode(111,112,97,116,111,109,95,52,95,50,51,0);
       let refreshborderlessm = String.fromCharCode(114,95,49,54,95,116,97,112,101,115,0);
      for (let i = 0; i < 2; i++) {
          let internetE = String.fromCharCode(99,101,108,108,115,95,114,95,49,53,0);
          let iconpipexpandJ = String.fromCharCode(122,95,56,56,95,116,111,116,97,108,108,121,0);
         chinan = `${dplusc.length | iconpipexpandJ.length}`;
         internetE += "3";
         iconpipexpandJ = `${internetE.length % (Math.max(6, internetE.length))}`;
      }
         chinan = `${(chinan == String.fromCharCode(119,0) ? dplusc.length : chinan.length)}`;
      binddatas0 -= parseFloat(`${parseInt(`${iconwechat3}`)}`);
      sports.set(`${vipsportu}`, sports.size);
       let cornerkicke = String.fromCharCode(97,110,115,119,101,114,95,121,95,53,54,0);
       let grayi = false;
      if (cornerkicke.endsWith(`${grayi}`)) {
          let humidity2 = true;
          let homeinactiveD = String.fromCharCode(109,101,109,110,114,95,56,95,51,51,0);
          let orangedownarrow9 = String.fromCharCode(99,111,109,112,97,116,105,98,108,101,95,53,95,49,48,48,0);
          let liveq: Map<any, any> = new Map([[String.fromCharCode(115,105,110,101,115,95,53,95,55,56,0),43], [String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,121,95,53,57,0),422], [String.fromCharCode(113,95,50,48,95,112,97,99,107,101,114,0),50]]);
          let gradle4 = 0.0;
         grayi = gradle4 < 14.14;
         humidity2 = humidity2 && liveq.size < 12;
         homeinactiveD = `${(orangedownarrow9 == String.fromCharCode(98,0) ? orangedownarrow9.length : (humidity2 ? 1 : 1))}`;
         liveq = new Map([[homeinactiveD, orangedownarrow9.length << (Math.min(Math.abs(1), 4))]]);
         gradle4 *= parseFloat(`${liveq.size}`);
      }
         grayi = grayi && cornerkicke.length == 5;
         grayi = cornerkicke.length >= 47;
         grayi = !grayi;
      if (cornerkicke.endsWith(`${grayi}`)) {
         grayi = !cornerkicke.startsWith(`${grayi}`);
      }
      while (cornerkicke.length <= 4 || grayi) {
         grayi = (88 >= (cornerkicke.length ^ (!grayi ? cornerkicke.length : 88)));
         break;
      }
      iconwechat3 += parseFloat(`${parseInt(`${vipsportu}`) * parseInt(`${binddatas0}`)}`);
      const locComments = await getLocalComments();

      expiredX = !expiredX;
   let leaguedetailsbg2 = String.fromCharCode(53,52,56,114,104,52,0) == downloaderV;
   do {
       let rewind0: Array<any> = [750, 662];
       let librrcs = 3.0;
       let sellj = 0.0;
       let e_countG = String.fromCharCode(100,101,108,105,109,95,102,95,52,49,0);
          let inactiveX = String.fromCharCode(119,95,53,95,97,108,112,104,97,98,101,116,115,0);
          let s_positionf = 2;
         librrcs -= parseFloat(`${2}`);
         inactiveX = `${s_positionf}`;
         s_positionf |= s_positionf | 2;
       let minimize0 = true;
       let iconpointscoref = true;
         rewind0 = [parseInt(`${sellj}`) * e_countG.length];
      let volumek = 5701287.0 >= sellj;
      do {
         sellj += parseInt(`${librrcs}`) | 2;
         if (volumek) {
            break;
         }
      } while (volumek && (3 >= (e_countG.length * 3) && (sellj / 5.36) >= 1.28));
      let icontransferclub9 = e_countG == String.fromCharCode(121,116,98,0);
      do {
         e_countG = `${e_countG.length}`;
         if (icontransferclub9) {
            break;
         }
      } while ((e_countG.length > 2) && icontransferclub9);
      for (let p = 0; p < 2; p++) {
          let episodeL = String.fromCharCode(120,95,51,50,95,109,97,116,101,114,105,97,108,0);
         iconpointscoref = !minimize0 || e_countG.length == 89;
         episodeL += `${episodeL.length}`;
      }
      while ((4.32 - librrcs) == 2.59 && 4 == (rewind0.length << (Math.min(Math.abs(1), 3)))) {
          let full7 = 3.0;
          let iconadslink3 = true;
         librrcs -= parseFloat(`${parseInt(`${sellj}`) ^ rewind0.length}`);
         full7 *= (parseFloat(`${(iconadslink3 ? 1 : 1) ^ parseInt(`${full7}`)}`));
         iconadslink3 = 58.53 < full7;
         break;
      }
      for (let t = 0; t < 3; t++) {
         e_countG = `${parseInt(`${librrcs}`) % 1}`;
      }
      while (e_countG.includes(`${sellj}`)) {
         sellj += parseInt(`${librrcs}`) ^ 2;
         break;
      }
      while (5.75 >= (sellj / 2.79) || (1 * e_countG.length) >= 5) {
         e_countG += `${parseInt(`${sellj}`)}`;
         break;
      }
      while (1.91 < (librrcs + parseFloat(`${rewind0.length}`)) || (rewind0.length % 5) < 2) {
         rewind0.push((e_countG.length | (minimize0 ? 5 : 1)));
         break;
      }
         rewind0.push(1 * parseInt(`${librrcs}`));
      downloaderV = `${parseInt(`${binddatas0}`)}`;
      if (leaguedetailsbg2) {
         break;
      }
   } while ((parseInt(`${iconwechat3}`) >= downloaderV.length) && leaguedetailsbg2);
   let expiredz = 9841982.0 <= binddatas0;
   do {
       let gradlewt = 0.0;
       let selectionq = String.fromCharCode(110,111,110,100,99,95,107,95,54,0);
       let nendZ = false;
       let sharef = true;
         nendZ = (sharef ? nendZ : sharef);
         sharef = nendZ;
         gradlewt -= 1 & parseInt(`${gradlewt}`);
       let telegrami = false;
         nendZ = !sharef;
      for (let h = 0; h < 2; h++) {
         gradlewt -= (3 >> (Math.min(Math.abs((sharef ? 2 : 2)), 2)));
      }
          let dplus3 = String.fromCharCode(107,95,56,48,95,114,101,102,105,110,105,110,103,0);
          let unreadJ = 4;
          let teamdetailsbgu = String.fromCharCode(98,95,55,55,95,102,116,118,108,105,110,107,0);
         selectionq = "3";
         dplus3 = `${unreadJ >> (Math.min(Math.abs(3), 1))}`;
         unreadJ += 2;
         teamdetailsbgu = `${unreadJ % 1}`;
         selectionq = `${((nendZ ? 3 : 5) & 2)}`;
          let libfbo = String.fromCharCode(108,95,50,57,95,117,110,100,101,114,0);
          let downloadT = String.fromCharCode(100,95,50,53,95,98,105,110,100,105,110,103,115,0);
         nendZ = (((!nendZ ? 68 : downloadT.length) + downloadT.length) == 68);
         libfbo += `${libfbo.length - libfbo.length}`;
         nendZ = selectionq.length < 100 || nendZ;
      if ((gradlewt * 3.77) >= 5.67) {
         gradlewt /= Math.max(2 % (Math.max(1, parseInt(`${gradlewt}`))), 4);
      }
         telegrami = (sharef ? !nendZ : !sharef);
      binddatas0 += (parseFloat(`${sports9 == String.fromCharCode(108,0) ? parseInt(`${vipsportu}`) : sports9.length}`));
      if (expiredz) {
         break;
      }
   } while (((iconwechat3 * 2) == 1.44) && expiredz);

      if (onlineComments) {

   if ((vipsportu + 2.92) <= 2.90 && expiredX) {
      expiredX = (downloaderV.length % (Math.max(4, sports.size))) == 99;
   }
       let libjsijniprofilerx = false;
       let layoutq: Map<any, any> = new Map([[String.fromCharCode(108,95,49,49,95,111,117,116,112,117,116,113,0),true ], [String.fromCharCode(102,105,108,101,104,101,97,100,101,114,95,117,95,57,50,0),true ], [String.fromCharCode(114,101,112,115,116,114,95,117,95,55,54,0),true ]]);
       let moviesd = String.fromCharCode(103,95,56,56,0);
         moviesd += "1";
       let unread0 = String.fromCharCode(112,114,111,109,105,115,101,115,95,56,95,55,52,0);
          let greytickM = String.fromCharCode(108,95,54,49,95,115,101,115,115,105,111,110,0);
         moviesd += `${(moviesd == String.fromCharCode(69,0) ? (libjsijniprofilerx ? 1 : 1) : moviesd.length)}`;
         greytickM = `${greytickM.length << (Math.min(2, greytickM.length))}`;
          let reducerh = 0.0;
          let livesharec = String.fromCharCode(98,108,105,110,100,105,110,103,95,110,95,51,49,0);
          let ranky = false;
         unread0 += `${unread0.length + 1}`;
         reducerh *= parseInt(`${reducerh}`) >> (Math.min(1, Math.abs(2)));
         livesharec += `${parseInt(`${reducerh}`) & livesharec.length}`;
         ranky = 17 >= livesharec.length && reducerh >= 87.8;
      while (3 < unread0.length) {
         unread0 = "1";
         break;
      }
      let mbsplash3 = String.fromCharCode(50,54,108,104,0) == moviesd;
      do {
         moviesd += `${moviesd.length >> (Math.min(Math.abs(3), 1))}`;
         if (mbsplash3) {
            break;
         }
      } while (((layoutq.size >> (Math.min(moviesd.length, 5))) > 3) && mbsplash3);
          let suggestioni: Map<any, any> = new Map([[String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,51,95,50,54,0),258], [String.fromCharCode(98,95,49,95,105,110,105,116,105,97,108,105,122,101,114,115,0),411]]);
          let googleR = String.fromCharCode(111,95,52,51,95,112,97,115,115,99,111,100,101,0);
          let renderc = 2.0;
         libjsijniprofilerx = renderc >= 76.45;
         suggestioni = new Map([[`${suggestioni.size}`, suggestioni.size / (Math.max(1, 6))]]);
         googleR = `${(googleR == String.fromCharCode(105,0) ? googleR.length : suggestioni.size)}`;
         renderc += (googleR == String.fromCharCode(109,0) ? googleR.length : suggestioni.size);
      let internetm = libjsijniprofilerx ? !libjsijniprofilerx : libjsijniprofilerx;
      do {
         libjsijniprofilerx = unread0.length < moviesd.length;
         if (internetm) {
            break;
         }
      } while ((moviesd.includes(`${libjsijniprofilerx}`)) && internetm);
      if (!libjsijniprofilerx) {
          let iconcloseC: Map<any, any> = new Map([[String.fromCharCode(98,95,48,95,97,99,100,99,0),955], [String.fromCharCode(121,95,56,95,115,101,116,97,99,116,105,118,101,107,101,121,0),670]]);
          let libflipperv = 2;
          let sellmathbackgroundR = String.fromCharCode(98,95,55,48,95,100,101,103,114,97,100,101,100,0);
         libjsijniprofilerx = (layoutq.size * unread0.length) == 49;
         iconcloseC.set(`${libflipperv}`, sellmathbackgroundR.length & libflipperv);
         sellmathbackgroundR = `${libflipperv >> (Math.min(Math.abs(iconcloseC.size), 1))}`;
      }
      downloaderV += `${downloaderV.length}`;
   for (let r = 0; r < 1; r++) {
       let bootsplashe = String.fromCharCode(115,116,114,117,99,116,95,117,95,55,52,0);
       let thailandI = String.fromCharCode(116,114,117,115,116,95,105,95,49,52,0);
       let whitevideolive9 = 5.0;
      let release_m4 = bootsplashe == String.fromCharCode(95,108,52,110,0);
      do {
          let subsm = 1.0;
          let profilepicv = String.fromCharCode(105,97,100,115,116,95,101,95,49,48,0);
          let changem: Array<any> = [String.fromCharCode(99,111,112,121,114,105,103,104,116,95,99,95,57,51,0), String.fromCharCode(116,97,110,103,101,110,116,95,48,95,57,49,0)];
          let leakcheckerR = 5;
          let constantsM = true;
         bootsplashe += `${changem.length + 1}`;
         subsm += leakcheckerR;
         profilepicv = `${parseInt(`${subsm}`) % 2}`;
         changem = [profilepicv.length];
         leakcheckerR ^= leakcheckerR;
         constantsM = !constantsM && profilepicv.length < 69;
         if (release_m4) {
            break;
         }
      } while ((2 > (bootsplashe.length + 1)) && release_m4);
      if (2 < thailandI.length) {
          let short_7k9 = 3.0;
          let streamingu = 1.0;
         thailandI = `${parseInt(`${streamingu}`) + bootsplashe.length}`;
         short_7k9 += 1 << (Math.min(Math.abs(parseInt(`${short_7k9}`)), 1));
         streamingu -= parseFloat(`${parseInt(`${short_7k9}`)}`);
      }
          let iconarrowrightwhiteD = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,121,95,57,0);
         whitevideolive9 *= parseInt(`${whitevideolive9}`) - bootsplashe.length;
         iconarrowrightwhiteD = `${2 << (Math.min(1, iconarrowrightwhiteD.length))}`;
      while (!thailandI.startsWith(`${whitevideolive9}`)) {
         thailandI += `${thailandI.length & parseInt(`${whitevideolive9}`)}`;
         break;
      }
      if (thailandI.startsWith(`${bootsplashe.length}`)) {
          let libjsijniprofiler_: Array<any> = [331, 221];
          let gpay4 = String.fromCharCode(100,101,98,117,103,103,105,110,103,95,49,95,57,49,0);
          let imagenetworkerrK = 4.0;
         bootsplashe += "1";
         libjsijniprofiler_ = [(gpay4 == String.fromCharCode(110,0) ? libjsijniprofiler_.length : gpay4.length)];
         imagenetworkerrK -= parseFloat(`${gpay4.length % (Math.max(1, 10))}`);
      }
      for (let q = 0; q < 2; q++) {
          let halfZ = 4;
          let nativeg = String.fromCharCode(98,101,110,101,97,116,104,95,98,95,50,50,0);
         whitevideolive9 *= parseInt(`${whitevideolive9}`) ^ bootsplashe.length;
         halfZ <<= Math.min(Math.abs((nativeg == String.fromCharCode(113,0) ? halfZ : nativeg.length)), 5);
      }
         thailandI = `${parseInt(`${whitevideolive9}`) - 1}`;
         thailandI += "3";
         whitevideolive9 *= (String.fromCharCode(66,0) == bootsplashe ? bootsplashe.length : parseInt(`${whitevideolive9}`));
      vipsportu *= (sports.size >> (Math.min(1, Math.abs((expiredX ? 2 : 3)))));
   }
        mergedArray = locComments.concat(onlineComments);
      } else {

   if (4 < (downloaderV.length | 3)) {
      downloaderV = `${3 * downloaderV.length}`;
   }
   while (expiredX) {
       let selectedH = String.fromCharCode(122,95,49,48,48,95,103,97,117,115,115,105,97,110,0);
       let cricket1 = String.fromCharCode(116,111,98,105,116,95,122,95,54,57,0);
       let diceZ = String.fromCharCode(103,95,52,53,95,112,114,111,109,105,115,105,102,121,0);
       let iconcloseU = String.fromCharCode(97,117,103,109,101,110,116,95,51,95,49,50,0);
       let androidw = String.fromCharCode(119,95,50,57,95,115,116,114,108,101,110,0);
      while (androidw == String.fromCharCode(54,0)) {
         iconcloseU += "1";
         break;
      }
      if (cricket1 != String.fromCharCode(104,0)) {
         selectedH += `${2 * iconcloseU.length}`;
      }
      let streaming8 = androidw.length <= 5541891;
      do {
         androidw = "2";
         if (streaming8) {
            break;
         }
      } while (streaming8 && (2 >= androidw.length));
      let logo5 = 6913615 <= selectedH.length;
      do {
          let rncorea = true;
          let sourceE = String.fromCharCode(103,95,57,51,95,112,114,111,112,97,103,97,116,105,111,110,0);
          let empty_ = String.fromCharCode(109,95,50,49,95,115,99,104,101,100,117,108,105,110,103,0);
          let usernameq: Array<any> = [String.fromCharCode(102,105,118,101,95,116,95,57,55,0), String.fromCharCode(116,101,109,112,111,114,97,108,95,107,95,48,0), String.fromCharCode(106,97,99,111,98,105,97,110,95,102,95,54,56,0)];
         selectedH = "2";
         rncorea = usernameq.length <= 44;
         sourceE += "3";
         empty_ += "3";
         usernameq.push(1 + empty_.length);
         if (logo5) {
            break;
         }
      } while (logo5 && (selectedH == String.fromCharCode(118,0) && androidw.length > 4));
         diceZ += `${diceZ.length - 3}`;
      for (let g = 0; g < 3; g++) {
         cricket1 += `${1 / (Math.max(2, selectedH.length))}`;
      }
         iconcloseU += `${diceZ.length}`;
      if (selectedH != String.fromCharCode(122,0)) {
         cricket1 += `${(String.fromCharCode(55,0) == iconcloseU ? cricket1.length : iconcloseU.length)}`;
      }
       let switch_p4B = 4;
      if (!diceZ.startsWith(androidw)) {
         androidw = "1";
      }
       let libjsik: Map<any, any> = new Map([[String.fromCharCode(117,95,54,57,95,99,111,110,115,101,99,117,116,105,118,101,0),698], [String.fromCharCode(99,95,50,55,95,114,101,99,104,117,110,107,0),895], [String.fromCharCode(115,97,100,100,95,53,95,50,55,0),70]]);
       let connectionY: Map<any, any> = new Map([[String.fromCharCode(102,97,114,101,110,100,95,114,95,52,57,0),true ], [String.fromCharCode(105,110,115,116,95,97,95,49,55,0),true ], [String.fromCharCode(112,117,98,101,120,112,95,112,95,49,52,0),false ]]);
      let reactnavigation9 = 9618356 >= cricket1.length;
      do {
         cricket1 = `${androidw.length ^ cricket1.length}`;
         if (reactnavigation9) {
            break;
         }
      } while ((cricket1.includes(`${libjsik.size}`)) && reactnavigation9);
      for (let n = 0; n < 1; n++) {
         androidw = "3";
      }
         diceZ = `${1 | switch_p4B}`;
      if (2 <= iconcloseU.length) {
         iconcloseU = `${iconcloseU.length}`;
      }
      expiredX = downloaderV.length >= 70;
      break;
   }
      binddatas0 /= Math.max(4, parseFloat(`${parseInt(`${binddatas0}`) ^ 1}`));
        mergedArray = onlineComments;
      }

      setAllComment(mergedArray);

   while ((iconwechat3 * 5.30) > 1.1) {
      iconwechat3 += parseFloat(`${sports9.length * 1}`);
      break;
   }
   for (let b = 0; b < 2; b++) {
       let friendss = 3;
       let nbatrophy2 = 2.0;
      while ((friendss ^ 5) > 2 && 5 > (5 >> (Math.min(3, Math.abs(friendss))))) {
         nbatrophy2 *= parseFloat(`${parseInt(`${nbatrophy2}`) / 1}`);
         break;
      }
       let libfabricjni2: Array<any> = [String.fromCharCode(113,95,56,48,95,97,100,100,105,0), String.fromCharCode(118,95,56,48,95,119,119,119,0), String.fromCharCode(101,118,112,111,114,116,95,53,95,54,51,0)];
      if (4 < (1 % (Math.max(5, friendss))) || (friendss % (Math.max(7, libfabricjni2.length))) < 1) {
         libfabricjni2.push(parseInt(`${nbatrophy2}`));
      }
         friendss += parseInt(`${nbatrophy2}`) - friendss;
      if (5.2 >= nbatrophy2) {
         nbatrophy2 /= Math.max(parseFloat(`${libfabricjni2.length & friendss}`), 2);
      }
      for (let w = 0; w < 1; w++) {
         nbatrophy2 /= Math.max(parseFloat(`${libfabricjni2.length + 1}`), 3);
      }
      sports = new Map([[`${sports.size}`, sports.size]]);
   }
      vipsportu -= parseInt(`${iconwechat3}`);
      setShowLoading(isFetchingComments);

   for (let l = 0; l < 1; l++) {
      vipsportu -= 3;
   }
       let expiredZ = 0.0;
       let checkboxK = 1.0;
      if ((checkboxK + expiredZ) < 2.93 || (expiredZ + checkboxK) < 2.93) {
          let fullu = false;
          let mbbidY = String.fromCharCode(115,116,101,112,112,101,100,95,112,95,51,49,0);
         checkboxK *= parseFloat(`${mbbidY.length}`);
         fullu = !fullu;
         mbbidY = "1";
      }
         expiredZ *= parseInt(`${checkboxK}`) + 3;
      while (5.57 == (checkboxK / (Math.max(expiredZ, 8)))) {
         expiredZ /= Math.max(1 + parseInt(`${checkboxK}`), 2);
         break;
      }
       let crossm: Map<any, any> = new Map([[String.fromCharCode(121,95,52,51,95,98,114,105,103,104,116,110,101,115,115,0),334], [String.fromCharCode(99,116,105,118,105,116,121,95,102,95,57,0),262], [String.fromCharCode(110,95,57,52,95,99,111,108,105,110,101,97,114,0),628]]);
         checkboxK /= Math.max(4, parseFloat(`${parseInt(`${expiredZ}`) | crossm.size}`));
         expiredZ /= Math.max(parseInt(`${checkboxK}`) & parseInt(`${expiredZ}`), 4);
      downloaderV = `${(1 & (expiredX ? 4 : 2))}`;
   for (let u = 0; u < 1; u++) {
       let descy = String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,115,95,57,54,0);
       let rankz = 3;
       let q_centerV = String.fromCharCode(112,114,101,118,105,101,119,95,56,95,49,57,0);
       let libreactnativeblobr = true;
          let detailb = 5.0;
          let z_titleg: Array<any> = [522, 445];
          let ajaxT: Array<any> = [487, 760];
         libreactnativeblobr = rankz > q_centerV.length;
         detailb += parseFloat(`${ajaxT.length + 2}`);
         z_titleg.push(1);
         ajaxT.push(z_titleg.length);
      if (descy == q_centerV) {
         q_centerV = `${(q_centerV.length >> (Math.min(2, Math.abs((libreactnativeblobr ? 3 : 2)))))}`;
      }
         libreactnativeblobr = ((q_centerV.length ^ (!libreactnativeblobr ? 80 : q_centerV.length)) >= 80);
         descy += "2";
          let gestureu: Map<any, any> = new Map([[String.fromCharCode(112,111,115,115,105,98,108,101,95,116,95,49,55,0),true ], [String.fromCharCode(100,97,116,97,98,97,115,101,115,95,103,95,51,49,0),true ], [String.fromCharCode(99,95,55,55,95,114,101,97,99,104,0),true ]]);
          let libavfilterE = 5;
          let mbbidB = 0;
         q_centerV += `${descy.length}`;
         gestureu.set(`${libavfilterE}`, libavfilterE ^ 3);
         mbbidB &= gestureu.size | 3;
         q_centerV += "1";
      let w_lockZ = rankz >= 6180617;
      do {
         rankz *= 2 & rankz;
         if (w_lockZ) {
            break;
         }
      } while (w_lockZ && (4 <= (rankz | 5)));
       let entryX = String.fromCharCode(121,95,53,54,95,119,104,105,99,104,0);
         libreactnativeblobr = rankz == 53 || libreactnativeblobr;
       let weibom = String.fromCharCode(105,110,99,108,117,100,101,100,95,54,95,54,52,0);
       let sinaD = String.fromCharCode(104,111,108,108,111,119,95,50,95,49,48,48,0);
      if (!entryX.endsWith(`${rankz}`)) {
          let pangleG: Map<any, any> = new Map([[String.fromCharCode(116,109,105,120,95,50,95,55,53,0),591], [String.fromCharCode(102,95,54,49,95,100,101,108,105,109,105,116,101,100,0),590], [String.fromCharCode(109,117,108,116,105,101,110,100,95,99,95,48,0),277]]);
         rankz += (String.fromCharCode(116,0) == q_centerV ? q_centerV.length : rankz);
         pangleG.set(`${pangleG.size}`, 2);
      }
         sinaD = `${1 << (Math.min(2, sinaD.length))}`;
      sports = new Map([[`${expiredX}`, ((expiredX ? 3 : 5) % (Math.max(parseInt(`${vipsportu}`), 3)))]]);
   }
      console.log("done");
    };

    if (!isFetchingComments) {
      mergeAllComments();
    }
  }, [isFetchingComments, isUpdated]);

  const locCommentId = "userComment" + vod?.vod_id;
  const getLocalComments = async () => {
       let arrowupS = String.fromCharCode(99,108,101,97,114,95,52,95,57,0);
    let penaltyshoot6 = 3.0;
    let type_v2S: Array<any> = [386, 188];
    let reactnativeratingsE = String.fromCharCode(103,95,56,56,95,115,111,99,107,101,116,118,97,114,0);
    let logout3 = String.fromCharCode(109,95,54,49,95,99,97,108,108,98,97,99,107,0);
    let logoutp = String.fromCharCode(113,95,49,52,95,99,108,97,117,115,101,0);
    let k_unlocke = 2.0;
    let gmail0 = 3;
    let alert7: Map<any, any> = new Map([[String.fromCharCode(117,105,111,116,111,109,98,117,102,95,101,95,56,51,0),943], [String.fromCharCode(121,109,111,100,101,95,112,95,54,50,0),27]]);
    let iconpointscoreL = 0.0;
   for (let y = 0; y < 2; y++) {
      reactnativeratingsE += "1";
   }
   let chatk = logoutp == String.fromCharCode(105,105,48,52,49,51,98,53,120,0);
   do {
       let libreanimatedg: Array<any> = [336, 317, 812];
       let iconsubssuccessP = 2.0;
       let langkeyh = 3.0;
      if (4 < (parseInt(`${langkeyh}`) / (Math.max(libreanimatedg.length, 4))) && 4 < (libreanimatedg.length % 4)) {
          let containerb = String.fromCharCode(101,110,100,97,95,55,95,57,51,0);
          let launchI = 1.0;
         libreanimatedg.push((String.fromCharCode(122,0) == containerb ? parseInt(`${langkeyh}`) : containerb.length));
         launchI += 2 % (Math.max(8, parseInt(`${launchI}`)));
      }
         langkeyh *= parseFloat(`${parseInt(`${iconsubssuccessP}`)}`);
      if (libreanimatedg.includes(iconsubssuccessP)) {
         libreanimatedg.push(3);
      }
      while ((parseFloat(`${libreanimatedg.length}`) - iconsubssuccessP) >= 2.73 || 2 >= (parseInt(`${iconsubssuccessP}`) - libreanimatedg.length)) {
         iconsubssuccessP -= parseFloat(`${parseInt(`${iconsubssuccessP}`)}`);
         break;
      }
          let animationW = 4;
         iconsubssuccessP += parseFloat(`${parseInt(`${langkeyh}`) >> (Math.min(4, Math.abs(animationW)))}`);
      for (let b = 0; b < 1; b++) {
          let assist3 = String.fromCharCode(118,95,56,51,95,110,111,100,101,115,101,116,0);
         langkeyh *= parseFloat(`${1}`);
         assist3 += "3";
      }
         libreanimatedg.push(libreanimatedg.length);
         langkeyh += parseFloat(`${parseInt(`${iconsubssuccessP}`)}`);
         iconsubssuccessP *= parseFloat(`${1 - parseInt(`${langkeyh}`)}`);
      logoutp = `${gmail0}`;
      if (chatk) {
         break;
      }
   } while ((1 == logout3.length) && chatk);
   for (let p = 0; p < 1; p++) {
       let sentryt: Array<any> = [245, 242, 952];
       let iconnotificationnewX: Array<any> = [317, 404];
       let layoutR = 5;
       let reddownarrowT: Map<any, any> = new Map([[String.fromCharCode(106,95,49,49,95,115,101,110,100,101,114,0),606], [String.fromCharCode(104,95,51,55,95,112,111,115,115,105,98,108,101,0),969], [String.fromCharCode(100,111,116,108,111,99,107,95,117,95,54,48,0),12]]);
       let macaua = 5.0;
         layoutR *= parseInt(`${macaua}`);
          let libreactperfloggerjniG = true;
         sentryt.push(3 << (Math.min(4, sentryt.length)));
         libreactperfloggerjniG = !libreactperfloggerjniG;
         macaua *= parseFloat(`${reddownarrowT.size}`);
      if ((sentryt.length << (Math.min(Math.abs(2), 5))) <= 3 || 2 <= (layoutR << (Math.min(Math.abs(2), 5)))) {
         sentryt = [iconnotificationnewX.length];
      }
      for (let o = 0; o < 3; o++) {
          let buttonQ = 0;
         macaua *= parseFloat(`${iconnotificationnewX.length ^ 2}`);
         buttonQ %= Math.max(2, 2);
      }
      for (let d = 0; d < 3; d++) {
         reddownarrowT = new Map([[`${reddownarrowT.size}`, 2]]);
      }
      let mintegraln = sentryt.length <= 8646810;
      do {
         sentryt.push(iconnotificationnewX.length);
         if (mintegraln) {
            break;
         }
      } while (mintegraln && (2 >= (2 & sentryt.length) || (layoutR & 2) >= 4));
         macaua *= parseFloat(`${3 / (Math.max(parseInt(`${macaua}`), 10))}`);
          let unselectedJ = 4;
         iconnotificationnewX = [iconnotificationnewX.length];
         unselectedJ *= unselectedJ << (Math.min(Math.abs(unselectedJ), 5));
      while (!Array.from(reddownarrowT.values()).includes(iconnotificationnewX.length)) {
         iconnotificationnewX = [sentryt.length];
         break;
      }
          let iconwechats = 1;
          let eactz = String.fromCharCode(104,95,55,95,101,121,99,104,97,105,110,0);
         iconnotificationnewX = [iconnotificationnewX.length << (Math.min(1, Math.abs(reddownarrowT.size)))];
         iconwechats &= iconwechats >> (Math.min(Math.abs(3), 5));
         eactz += `${(eactz == String.fromCharCode(86,0) ? eactz.length : iconwechats)}`;
         layoutR %= Math.max(5, parseInt(`${macaua}`) ^ 1);
       let downloaderh = false;
       let middlewareW = false;
      let downloadedq = 5595311.0 <= macaua;
      do {
          let libjsi_ = 2.0;
         macaua -= parseFloat(`${parseInt(`${macaua}`)}`);
         libjsi_ *= parseInt(`${libjsi_}`);
         if (downloadedq) {
            break;
         }
      } while (downloadedq && (5.14 <= (3.50 * macaua) || macaua <= 3.50));
          let philippinesy = 5.0;
         layoutR -= ((downloaderh ? 4 : 2) - parseInt(`${philippinesy}`));
      arrowupS += `${type_v2S.length % (Math.max(8, iconnotificationnewX.length))}`;
   }

    try {

   let libjsijniprofilerQ = alert7.size <= 5631963;
   do {
       let scorepopsoundC = false;
       let updatesl = String.fromCharCode(103,105,116,104,117,98,95,53,95,53,54,0);
         scorepopsoundC = !scorepopsoundC;
          let type_r6s = String.fromCharCode(118,95,56,95,115,117,98,114,97,110,103,101,115,0);
         scorepopsoundC = type_r6s.length == 50;
         scorepopsoundC = updatesl.length <= 92 || !scorepopsoundC;
          let mbsplashK = String.fromCharCode(107,95,51,52,95,109,117,108,115,117,98,0);
         scorepopsoundC = mbsplashK.length == 88;
      if (updatesl.length == 4 || scorepopsoundC) {
         scorepopsoundC = updatesl.length > 1;
      }
         updatesl = `${3 >> (Math.min(4, updatesl.length))}`;
      alert7.set(`${penaltyshoot6}`, parseInt(`${penaltyshoot6}`));
      if (libjsijniprofilerQ) {
         break;
      }
   } while (libjsijniprofilerQ && ((alert7.size % 1) <= 1));
   if (!arrowupS.endsWith(reactnativeratingsE)) {
      reactnativeratingsE += `${(String.fromCharCode(102,0) == logoutp ? logoutp.length : logout3.length)}`;
   }
   if (logout3.length >= logoutp.length) {
      logout3 += `${1 * parseInt(`${penaltyshoot6}`)}`;
   }
      const comments = await AsyncStorage.getItem(locCommentId);

   let configurem = k_unlocke >= 6326352.0;
   do {
      k_unlocke /= Math.max(parseFloat(`${arrowupS.length}`), 5);
      if (configurem) {
         break;
      }
   } while ((k_unlocke < 1.95) && configurem);
   while ((parseInt(`${penaltyshoot6}`) - logoutp.length) == 4 && 4 == (logoutp.length - 4)) {
       let datah = String.fromCharCode(109,95,56,48,95,97,116,111,109,105,99,115,0);
       let graym = String.fromCharCode(100,97,116,97,98,97,115,101,95,97,95,50,0);
       let yellowv: Map<any, any> = new Map([[String.fromCharCode(98,103,109,99,95,104,95,53,51,0),209], [String.fromCharCode(119,114,105,116,101,98,105,116,115,95,116,95,54,0),875], [String.fromCharCode(117,95,51,51,95,115,116,111,119,0),289]]);
       let windZ = String.fromCharCode(104,108,105,110,101,95,113,95,50,48,0);
      for (let g = 0; g < 3; g++) {
         windZ = `${3 ^ windZ.length}`;
      }
         datah = `${yellowv.size}`;
         yellowv.set(windZ, yellowv.size);
          let downloaderz: Map<any, any> = new Map([[String.fromCharCode(107,95,55,56,95,98,105,103,103,101,115,116,0),441], [String.fromCharCode(100,105,115,112,108,97,121,95,110,95,56,57,0),439]]);
          let serviceX = String.fromCharCode(105,118,115,101,116,117,112,95,98,95,57,0);
         windZ += "2";
         downloaderz.set(serviceX, serviceX.length % 1);
       let fills = 5.0;
       let runtimef = 2.0;
         runtimef -= 1;
         graym += `${(datah == String.fromCharCode(109,0) ? parseInt(`${fills}`) : datah.length)}`;
       let libreactperfloggerjni0 = String.fromCharCode(122,95,51,50,95,112,101,114,99,0);
       let giftbuttonG = String.fromCharCode(99,95,51,54,95,112,101,114,102,111,114,109,97,110,99,101,0);
      for (let c = 0; c < 2; c++) {
         windZ = "3";
      }
      for (let a = 0; a < 3; a++) {
          let splashB = String.fromCharCode(114,95,51,57,95,105,110,116,101,114,105,116,101,109,0);
          let mbbidC = 0;
          let analyticsV = 3.0;
          let trophyR = true;
          let modulej: Array<any> = [804, 274];
         graym += `${giftbuttonG.length}`;
         splashB += `${parseInt(`${analyticsV}`) | 2}`;
         mbbidC |= ((trophyR ? 4 : 4) * 1);
         analyticsV += mbbidC;
         trophyR = analyticsV == 37.28;
         modulej = [mbbidC];
      }
      for (let r = 0; r < 1; r++) {
         datah = `${datah.length + 3}`;
      }
         yellowv = new Map([[giftbuttonG, datah.length]]);
      logoutp = `${alert7.size * 3}`;
      break;
   }
      reactnativeratingsE += `${logout3.length}`;
      console.log("comments stored in local storage ", locCommentId);

   let lessl = 9271579 <= reactnativeratingsE.length;
   do {
      reactnativeratingsE += `${type_v2S.length}`;
      if (lessl) {
         break;
      }
   } while (lessl && (reactnativeratingsE.length == logoutp.length));
   if (3.58 == (3 - penaltyshoot6)) {
      k_unlocke /= Math.max(3, parseFloat(`${2 | logoutp.length}`));
   }
   let whistleorange4 = 9191636 <= arrowupS.length;
   do {
      arrowupS += `${2 * parseInt(`${penaltyshoot6}`)}`;
      if (whistleorange4) {
         break;
      }
   } while (whistleorange4 && (reactnativeratingsE == String.fromCharCode(49,0) || 5 >= arrowupS.length));
      console.log(comments);

      k_unlocke += parseFloat(`${alert7.size}`);
   if (logoutp != String.fromCharCode(109,0)) {
       let forward3 = String.fromCharCode(115,97,116,100,95,98,95,53,48,0);
       let leftr = String.fromCharCode(98,95,56,53,95,115,99,97,110,115,0);
       let dice9 = String.fromCharCode(99,97,99,104,105,110,103,95,110,95,55,51,0);
       let tumbnailD: Array<any> = [632, 614, 656];
       let iconfeedbackj = true;
      for (let p = 0; p < 3; p++) {
          let giftb = true;
          let pangle_ = 3.0;
          let applicationb: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,110,116,95,98,95,52,56,0),660], [String.fromCharCode(100,101,110,121,95,48,95,51,56,0),206]]);
         leftr += `${tumbnailD.length}`;
         giftb = (parseInt(`${pangle_}`) - applicationb.size) == 57;
         pangle_ -= parseInt(`${pangle_}`) >> (Math.min(5, Math.abs(1)));
         applicationb = new Map([[`${pangle_}`, parseInt(`${pangle_}`) | 1]]);
      }
      let defaultlogoM = 9255067 >= tumbnailD.length;
      do {
         tumbnailD = [forward3.length + 2];
         if (defaultlogoM) {
            break;
         }
      } while ((3 <= tumbnailD.length || (tumbnailD.length + 3) <= 5) && defaultlogoM);
         tumbnailD.push((String.fromCharCode(114,0) == dice9 ? forward3.length : dice9.length));
         forward3 += `${(String.fromCharCode(55,0) == forward3 ? leftr.length : forward3.length)}`;
          let topicR: Map<any, any> = new Map([[String.fromCharCode(103,95,53,57,0),94], [String.fromCharCode(99,95,53,54,95,99,111,118,97,114,105,97,110,99,101,0),857]]);
         tumbnailD.push(leftr.length);
         topicR.set(`${topicR.size}`, topicR.size);
          let ruleso = String.fromCharCode(102,95,49,56,95,113,115,116,101,112,0);
         forward3 = "1";
         ruleso = `${ruleso.length | ruleso.length}`;
       let emojiheartX: Map<any, any> = new Map([[String.fromCharCode(111,95,52,53,95,106,105,110,99,108,117,100,101,0),495], [String.fromCharCode(97,116,116,114,95,102,95,54,52,0),416]]);
       let loading1: Map<any, any> = new Map([[String.fromCharCode(98,95,57,51,95,110,118,101,110,99,0),269], [String.fromCharCode(111,110,101,111,102,115,95,105,95,50,0),834]]);
      if (1 >= (2 * tumbnailD.length) || 5 >= (2 * tumbnailD.length)) {
          let filterj = 5.0;
          let fileY = false;
          let libmapbufferjniA: Map<any, any> = new Map([[String.fromCharCode(105,118,102,101,110,99,95,121,95,50,51,0),true ], [String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,57,95,55,52,0),true ], [String.fromCharCode(98,105,110,116,114,101,101,95,109,95,55,54,0),true ]]);
          let usernamei = 3.0;
          let values1 = 2;
         tumbnailD.push(parseInt(`${usernamei}`) << (Math.min(4, Math.abs(3))));
         filterj /= Math.max(parseFloat(`${parseInt(`${filterj}`) ^ values1}`), 5);
         fileY = 76.25 > filterj && !fileY;
         libmapbufferjniA = new Map([[`${libmapbufferjniA.size}`, (1 - (fileY ? 2 : 3))]]);
         usernamei += values1 / 2;
      }
      while ((5 - loading1.size) >= 2) {
          let forwardg = String.fromCharCode(110,101,116,105,115,114,95,119,95,53,52,0);
          let animation9 = String.fromCharCode(100,95,49,52,95,99,111,109,112,108,101,116,101,100,0);
         loading1.set(`${iconfeedbackj}`, (forwardg == String.fromCharCode(112,0) ? forwardg.length : (iconfeedbackj ? 4 : 4)));
         animation9 = `${animation9.length / (Math.max(2, 10))}`;
         break;
      }
      let malaysiab = 6839466 >= emojiheartX.size;
      do {
         emojiheartX.set(forward3, forward3.length - 1);
         if (malaysiab) {
            break;
         }
      } while (((emojiheartX.size ^ 2) == 1 || !iconfeedbackj) && malaysiab);
      for (let w = 0; w < 1; w++) {
         forward3 += "1";
      }
       let tooltipsD = 5.0;
       let reactP = 4.0;
         emojiheartX.set(`${leftr}`, loading1.size);
      if ((forward3.length / (Math.max(3, 8))) == 5 && (forward3.length / (Math.max(3, 3))) == 3) {
         forward3 += `${forward3.length / (Math.max(3, parseInt(`${reactP}`)))}`;
      }
         iconfeedbackj = 14.13 >= tooltipsD && 53 >= dice9.length;
      logout3 += `${parseInt(`${k_unlocke}`) << (Math.min(4, Math.abs(2)))}`;
   }
       let submitv: Map<any, any> = new Map([[String.fromCharCode(99,95,53,95,109,97,110,105,112,117,108,97,116,111,114,0),String.fromCharCode(99,117,114,95,101,95,50,57,0)], [String.fromCharCode(116,97,99,107,95,112,95,52,55,0),String.fromCharCode(116,101,110,99,95,101,95,54,53,0)], [String.fromCharCode(118,95,52,50,95,99,108,97,115,104,101,100,0),String.fromCharCode(102,95,55,55,95,117,110,98,108,111,99,107,105,110,103,0)]]);
       let away8 = String.fromCharCode(101,109,111,116,105,99,111,110,95,112,95,49,57,0);
       let traminiT = 3.0;
         submitv = new Map([[`${traminiT}`, away8.length]]);
      while (4 < (away8.length & 3) && 3 < (away8.length + parseInt(`${traminiT}`))) {
         away8 += `${away8.length}`;
         break;
      }
       let w_positionA = 0.0;
       let megaphonej = 2.0;
      for (let n = 0; n < 1; n++) {
         megaphonej /= Math.max(3, away8.length | parseInt(`${megaphonej}`));
      }
         w_positionA /= Math.max(5, 3 - parseInt(`${traminiT}`));
      alert7 = new Map([[`${submitv.size}`, 1 ^ submitv.size]]);

      if (comments !== null) {

   for (let v = 0; v < 3; v++) {
       let o_lockE: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,105,110,103,95,103,95,53,49,0),402], [String.fromCharCode(107,95,54,52,95,97,100,100,105,110,103,0),722], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,97,95,57,51,0),768]]);
      if (4 >= o_lockE.size) {
         o_lockE = new Map([[`${o_lockE.size}`, o_lockE.size % 2]]);
      }
      let with_aG = o_lockE.size >= 9048791;
      do {
         o_lockE = new Map([[`${o_lockE.size}`, o_lockE.size & o_lockE.size]]);
         if (with_aG) {
            break;
         }
      } while (with_aG && (o_lockE.get(`${o_lockE.size}`) == null));
          let iconnotificationneww = 5;
          let delegate_9qo = false;
          let circleX: Array<any> = [379, 473];
         o_lockE.set(`${delegate_9qo}`, 2);
         iconnotificationneww /= Math.max(1, iconnotificationneww & 3);
         circleX = [2 - iconnotificationneww];
      iconpointscoreL *= parseFloat(`${logout3.length}`);
   }
      gmail0 &= reactnativeratingsE.length;
   if (logoutp == reactnativeratingsE) {
      reactnativeratingsE = `${3 * logout3.length}`;
   }
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

   let policy4 = alert7.size <= 7263011;
   do {
       let mbsplasho = String.fromCharCode(111,95,49,52,95,98,108,101,110,100,109,111,100,101,0);
       let dialogu = true;
         dialogu = mbsplasho.includes(`${dialogu}`);
      while (3 > mbsplasho.length) {
         dialogu = mbsplasho.length == 51;
         break;
      }
      for (let p = 0; p < 1; p++) {
          let n_unlockQ = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,95,111,95,49,51,0);
          let imagenomoredatai: Map<any, any> = new Map([[String.fromCharCode(105,95,50,52,95,98,105,116,118,101,99,0),true ], [String.fromCharCode(100,117,109,95,117,95,56,50,0),false ]]);
          let aboutM: Array<any> = [String.fromCharCode(101,95,53,54,95,112,114,105,109,105,116,105,118,101,0), String.fromCharCode(104,95,52,57,95,114,116,99,100,0), String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,107,95,51,50,0)];
          let liveN = 0;
         dialogu = (aboutM.length + n_unlockQ.length) < 51;
         n_unlockQ = `${liveN}`;
         imagenomoredatai.set(`${liveN}`, liveN);
         aboutM = [3];
      }
      let renderk = dialogu ? !dialogu : dialogu;
      do {
         dialogu = mbsplasho.length == 64 || dialogu;
         if (renderk) {
            break;
         }
      } while ((!dialogu && mbsplasho.length > 4) && renderk);
      if (mbsplasho.length < 3) {
          let contextw = true;
          let analyticsS = String.fromCharCode(115,95,50,52,95,115,116,97,114,116,115,0);
         mbsplasho = `${mbsplasho.length}`;
         contextw = !contextw || analyticsS.length <= 50;
         analyticsS = `${analyticsS.length % 2}`;
      }
       let casting9 = 1.0;
      alert7 = new Map([[arrowupS, reactnativeratingsE.length + arrowupS.length]]);
      if (policy4) {
         break;
      }
   } while (policy4 && (3 <= (3 * logout3.length)));
       let orientation5 = String.fromCharCode(113,95,53,50,95,115,119,105,116,99,104,97,98,108,101,0);
       let searchbarB: Array<any> = [485, 711, 650];
       let profileactiveO = String.fromCharCode(98,101,104,105,110,100,95,103,95,53,56,0);
      while (!orientation5.endsWith(`${searchbarB.length}`)) {
         orientation5 = "1";
         break;
      }
       let iconbackwhiteT: Array<any> = [887, 555, 567];
       let libreactnativejni_: Array<any> = [74, 496];
      let iconclosewhiteZ = 9126124 <= iconbackwhiteT.length;
      do {
          let phoneshare5 = String.fromCharCode(98,105,113,117,97,100,95,107,95,53,51,0);
         iconbackwhiteT = [1];
         phoneshare5 += `${phoneshare5.length}`;
         if (iconclosewhiteZ) {
            break;
         }
      } while (iconclosewhiteZ && (1 <= (1 * profileactiveO.length) || (iconbackwhiteT.length * profileactiveO.length) <= 1));
      while (3 >= (libreactnativejni_.length / 2) || (2 / (Math.max(1, libreactnativejni_.length))) >= 1) {
         libreactnativejni_.push(profileactiveO.length);
         break;
      }
      let libruntimeexecutorC = 9405730 >= searchbarB.length;
      do {
         searchbarB = [iconbackwhiteT.length];
         if (libruntimeexecutorC) {
            break;
         }
      } while ((4 <= (searchbarB.length & 2) && 4 <= (2 & libreactnativejni_.length)) && libruntimeexecutorC);
         searchbarB.push(orientation5.length);
      let verticalo = 8881624 >= libreactnativejni_.length;
      do {
         libreactnativejni_.push((String.fromCharCode(107,0) == profileactiveO ? profileactiveO.length : iconbackwhiteT.length));
         if (verticalo) {
            break;
         }
      } while (verticalo && (5 <= (5 >> (Math.min(1, searchbarB.length)))));
         profileactiveO += `${orientation5.length >> (Math.min(Math.abs(1), 3))}`;
          let defaultfootballbgB = String.fromCharCode(115,104,97,108,108,111,119,95,119,95,51,0);
         orientation5 = "3";
         defaultfootballbgB += `${defaultfootballbgB.length & 1}`;
      alert7.set(logoutp, 1);
   if (logout3.length == 1) {
      logout3 += `${logoutp.length | parseInt(`${iconpointscoreL}`)}`;
   }
      console.log("error when retrieving local comments: ", error);

      alert7.set(`${penaltyshoot6}`, parseInt(`${penaltyshoot6}`) / 2);
      type_v2S = [alert7.size + 3];
      iconpointscoreL /= Math.max(3, parseFloat(`${logoutp.length + parseInt(`${k_unlocke}`)}`));
      return [];
    }
  };

  const storeUserComments = async () => {
       let bellN = true;
    let dicei = true;
    let dangerl = true;
    let hooksy = 0;
    let componentregistryo: Map<any, any> = new Map([[String.fromCharCode(122,95,50,48,95,109,97,115,107,113,0),String.fromCharCode(99,97,114,100,115,95,53,95,51,48,0)], [String.fromCharCode(109,111,110,116,95,107,95,52,51,0),String.fromCharCode(107,95,52,57,95,112,101,114,115,105,115,116,101,100,0)], [String.fromCharCode(110,95,49,57,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0),String.fromCharCode(115,116,101,114,101,111,95,51,95,52,52,0)]]);
    let elementsd = String.fromCharCode(99,95,53,51,95,114,101,115,111,108,117,116,105,111,110,115,0);
    let icontransferclubg = 4.0;
    let const_tp = String.fromCharCode(119,95,54,56,95,114,101,97,109,0);
    let statsE = String.fromCharCode(109,95,55,54,95,114,101,108,97,116,105,118,101,108,121,0);
    let giftp = String.fromCharCode(115,107,105,112,115,95,109,95,50,52,0);
    let lessl = String.fromCharCode(104,105,98,105,116,95,101,95,57,57,0);
   while (!bellN) {
       let traminiV = String.fromCharCode(109,105,120,95,105,95,51,52,0);
         traminiV += `${3 | traminiV.length}`;
      if (traminiV.length < traminiV.length) {
          let androidm: Map<any, any> = new Map([[String.fromCharCode(117,95,53,50,95,115,111,110,101,119,99,111,110,110,0),782], [String.fromCharCode(108,95,50,56,95,109,115,101,120,0),142], [String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,95,109,95,52,55,0),146]]);
          let release_8L = 4;
          let trophyH = String.fromCharCode(121,95,49,53,95,111,102,102,101,116,0);
          let logo_ = 5.0;
         traminiV += `${trophyH.length}`;
         androidm = new Map([[`${release_8L}`, 3]]);
         release_8L ^= release_8L;
         trophyH = `${androidm.size}`;
         logo_ += parseInt(`${logo_}`);
      }
          let imagenetworkerrm = String.fromCharCode(107,95,53,95,116,104,114,101,115,104,111,108,100,105,110,103,0);
          let encryptorM = 5.0;
         traminiV += `${(String.fromCharCode(76,0) == traminiV ? traminiV.length : imagenetworkerrm.length)}`;
         imagenetworkerrm = `${parseInt(`${encryptorM}`) + parseInt(`${encryptorM}`)}`;
      bellN = elementsd.length > 91 && bellN;
      break;
   }
      bellN = dangerl;

    if (!comment) {

       let nbatrophy2: Map<any, any> = new Map([[String.fromCharCode(97,103,103,105,110,102,111,95,114,95,50,50,0),86], [String.fromCharCode(114,95,50,95,116,116,97,103,0),758]]);
       let placeholders = String.fromCharCode(103,115,109,100,101,99,95,52,95,52,0);
          let inactive3 = 5.0;
          let rewindz: Map<any, any> = new Map([[String.fromCharCode(115,95,56,54,95,117,110,98,111,110,100,101,100,0),389], [String.fromCharCode(104,95,54,57,95,97,112,99,109,0),239], [String.fromCharCode(109,111,100,101,95,110,95,49,57,0),734]]);
          let executorC = false;
         nbatrophy2 = new Map([[`${nbatrophy2.size}`, 3 - nbatrophy2.size]]);
         inactive3 /= Math.max(parseFloat(`${rewindz.size % (Math.max(1, 4))}`), 5);
         rewindz = new Map([[`${rewindz.size}`, 2]]);
         executorC = (24 >= (rewindz.size * (executorC ? rewindz.size : 58)));
      let completei = 8288579 <= placeholders.length;
      do {
         placeholders += `${placeholders.length - 1}`;
         if (completei) {
            break;
         }
      } while (((nbatrophy2.size + 3) <= 4) && completei);
       let nterstitialS = true;
          let stringd = false;
          let shareM = true;
         nterstitialS = stringd;
         shareM = !shareM;
      while (1 == nbatrophy2.size) {
          let rulesk = 0;
          let libfbu = 5;
          let exampleimagep = 5;
          let lightf = 5;
          let reporti = 0;
         nbatrophy2.set(`${lightf}`, lightf);
         rulesk &= 3 >> (Math.min(3, Math.abs(reporti)));
         libfbu <<= Math.min(Math.abs(1), 5);
         exampleimagep += reporti;
         break;
      }
          let template_zdz = false;
          let abidetectw = 1.0;
          let iconwatchnowm = true;
         placeholders = `${2 | parseInt(`${abidetectw}`)}`;
         template_zdz = !iconwatchnowm;
         abidetectw += (parseFloat(`${1 >> (Math.min(Math.abs((template_zdz ? 5 : 1)), 3))}`));
      dangerl = !bellN;
   if (elementsd.length <= 1) {
      elementsd += "3";
   }
      return;
    }

    console.log("user comment", comment);

      const_tp += `${const_tp.length / 3}`;
   while ((hooksy ^ 4) < 5 && 4 < hooksy) {
      hooksy /= Math.max(1, ((dangerl ? 4 : 1) + 3));
      break;
   }
    try {

      statsE = `${(String.fromCharCode(55,0) == elementsd ? (dicei ? 5 : 4) : elementsd.length)}`;
   let utilsx = dangerl ? !dangerl : dangerl;
   do {
      dangerl = elementsd.length < 84 && 84 < const_tp.length;
      if (utilsx) {
         break;
      }
   } while (utilsx && (dangerl && dicei));
      const existingComments = await getLocalComments();

      componentregistryo = new Map([[`${componentregistryo.size}`, componentregistryo.size]]);
   if (dicei || 3.2 == (icontransferclubg * 3.83)) {
       let spinnerB = 2.0;
       let libreactnativejnii = 5.0;
       let profile4: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,116,104,95,100,95,57,51,0),String.fromCharCode(105,114,97,110,100,95,100,95,55,51,0)], [String.fromCharCode(118,95,52,52,95,112,101,114,115,105,115,116,101,110,99,101,0),String.fromCharCode(119,95,51,51,95,115,99,104,101,109,97,115,0)], [String.fromCharCode(105,95,56,56,95,112,101,114,105,111,100,105,99,97,108,108,121,0),String.fromCharCode(105,95,52,55,95,108,105,98,97,118,99,111,100,101,99,0)]]);
       let ballE = String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,49,95,51,54,0);
         profile4.set(ballE, ballE.length / 3);
         ballE += `${(ballE == String.fromCharCode(48,0) ? ballE.length : parseInt(`${libreactnativejnii}`))}`;
          let runtimescheduleru = true;
          let package_ec = String.fromCharCode(116,95,56,55,95,101,108,115,0);
          let tumbnailj = String.fromCharCode(99,104,101,99,107,95,109,95,52,53,0);
         libreactnativejnii -= parseFloat(`${2 % (Math.max(4, parseInt(`${spinnerB}`)))}`);
         runtimescheduleru = tumbnailj == String.fromCharCode(112,0);
         package_ec += `${((runtimescheduleru ? 1 : 3))}`;
         tumbnailj = `${(package_ec.length >> (Math.min(1, Math.abs((runtimescheduleru ? 3 : 5)))))}`;
      for (let z = 0; z < 3; z++) {
         libreactnativejnii *= parseFloat(`${parseInt(`${libreactnativejnii}`) - 1}`);
      }
          let updatesc: Map<any, any> = new Map([[String.fromCharCode(98,95,55,49,95,122,111,111,109,105,110,103,0),437], [String.fromCharCode(103,95,54,52,95,109,97,120,106,0),76], [String.fromCharCode(115,101,110,100,109,115,103,95,120,95,54,55,0),194]]);
          let playercommona = String.fromCharCode(112,107,116,99,112,121,95,102,95,51,51,0);
         profile4.set(`${libreactnativejnii}`, parseInt(`${libreactnativejnii}`) - parseInt(`${spinnerB}`));
         updatesc = new Map([[`${updatesc.size}`, updatesc.size]]);
         playercommona += `${3 >> (Math.min(1, playercommona.length))}`;
       let profileactiveK: Array<any> = [315, 57];
      if (spinnerB > 2.96) {
         spinnerB += parseInt(`${spinnerB}`) * parseInt(`${libreactnativejnii}`);
      }
      for (let s = 0; s < 1; s++) {
         spinnerB *= parseInt(`${libreactnativejnii}`);
      }
      let closeo = 6670181 <= profile4.size;
      do {
         profile4 = new Map([[`${profile4.size}`, 2 << (Math.min(5, ballE.length))]]);
         if (closeo) {
            break;
         }
      } while (closeo && (1 >= (3 - ballE.length)));
         libreactnativejnii /= Math.max(parseFloat(`${profile4.size % 3}`), 5);
      if (!ballE.startsWith(`${profileactiveK.length}`)) {
         ballE += `${parseInt(`${spinnerB}`) ^ profile4.size}`;
      }
         profileactiveK = [profile4.size % (Math.max(2, 8))];
      dicei = hooksy == elementsd.length;
   }
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      };

      componentregistryo = new Map([[giftp, statsE.length / (Math.max(2, 7))]]);
       let eabafadfadddbafeddddeeefeaafa = 4.0;
       let result9 = true;
          let iconstarB = String.fromCharCode(97,117,116,104,95,98,95,54,57,0);
         result9 = (iconstarB.length * eabafadfadddbafeddddeeefeaafa) == 94.67;
       let shielddoneL = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,95,98,95,49,52,0);
       let iconsharefriendsV = String.fromCharCode(108,101,102,116,109,111,115,116,95,102,95,54,0);
          let ticked1 = 5.0;
         shielddoneL += "2";
         ticked1 /= Math.max(parseFloat(`${parseInt(`${ticked1}`) >> (Math.min(1, Math.abs(2)))}`), 1);
       let qnewsB = String.fromCharCode(118,97,114,105,97,110,99,101,115,95,107,95,52,52,0);
      let defaultlogos = result9 ? !result9 : result9;
      do {
         result9 = eabafadfadddbafeddddeeefeaafa >= 72.36 && shielddoneL == String.fromCharCode(98,0);
         if (defaultlogos) {
            break;
         }
      } while (defaultlogos && (!iconsharefriendsV.includes(`${result9}`)));
      for (let u = 0; u < 3; u++) {
          let sina6 = 0.0;
          let smalld = 3;
          let previewE = false;
          let fillU = String.fromCharCode(99,111,110,116,111,117,114,115,95,115,95,50,51,0);
         qnewsB += `${((result9 ? 4 : 5) >> (Math.min(Math.abs(3), 5)))}`;
         sina6 -= (parseFloat(`${smalld + (previewE ? 5 : 3)}`));
         smalld /= Math.max(1 - smalld, 3);
         previewE = String.fromCharCode(114,0) == fillU || 55.96 == sina6;
         fillU = `${1 - parseInt(`${sina6}`)}`;
      }
      dangerl = const_tp.includes(`${eabafadfadddbafeddddeeefeaafa}`);
      existingComments.unshift(commmentObj);

   while (const_tp.startsWith(`${giftp.length}`)) {
       let tailN = true;
       let usernameQ = true;
       let rootR = 5;
      for (let m = 0; m < 3; m++) {
         tailN = !usernameQ;
      }
      let morea = usernameQ ? !usernameQ : usernameQ;
      do {
          let areah = 4;
          let homeiconT: Map<any, any> = new Map([[String.fromCharCode(108,105,116,116,108,101,95,122,95,56,57,0),517], [String.fromCharCode(111,95,54,49,95,100,98,108,105,110,116,0),387]]);
          let whitetickU = 5;
         usernameQ = tailN;
         areah ^= whitetickU;
         homeiconT = new Map([[`${homeiconT.size}`, 2]]);
         if (morea) {
            break;
         }
      } while (morea && (!usernameQ));
      let mbsplashx = tailN ? !tailN : tailN;
      do {
          let viewsa = 5;
          let n_countw = String.fromCharCode(101,118,115,105,103,110,97,108,95,50,95,57,51,0);
          let backgroundB = 2.0;
          let libbuffer8 = 5.0;
         tailN = backgroundB >= 54.66;
         viewsa -= 3;
         n_countw = "1";
         backgroundB -= parseFloat(`${3 / (Math.max(8, parseInt(`${libbuffer8}`)))}`);
         libbuffer8 += viewsa;
         if (mbsplashx) {
            break;
         }
      } while (mbsplashx && (tailN || usernameQ));
       let bootsplashl = String.fromCharCode(110,95,51,56,95,98,117,108,107,0);
       let bottomm = String.fromCharCode(98,106,101,99,116,95,113,95,57,53,0);
      for (let v = 0; v < 2; v++) {
         bottomm += `${(rootR >> (Math.min(2, Math.abs((usernameQ ? 5 : 1)))))}`;
      }
         bootsplashl += `${3 >> (Math.min(3, bootsplashl.length))}`;
       let greenJ = String.fromCharCode(100,95,52,50,95,99,108,105,99,107,0);
      while (bootsplashl == String.fromCharCode(86,0)) {
          let plashN: Map<any, any> = new Map([[String.fromCharCode(108,95,51,53,95,118,101,114,121,0),String.fromCharCode(109,95,51,57,95,99,111,110,102,108,105,99,116,115,0)], [String.fromCharCode(121,95,55,49,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0),String.fromCharCode(110,95,55,95,117,110,97,114,99,104,105,118,101,100,0)], [String.fromCharCode(109,95,54,51,95,112,114,111,103,114,101,115,105,118,101,0),String.fromCharCode(103,115,109,100,101,99,95,51,95,55,54,0)]]);
         greenJ += `${bottomm.length % 2}`;
         plashN.set(`${plashN.size}`, plashN.size);
         break;
      }
      for (let m = 0; m < 1; m++) {
         usernameQ = tailN && bottomm.length >= 8;
      }
      giftp += "3";
      break;
   }
       let commonK = 4.0;
       let libjsinspectorj: Array<any> = [String.fromCharCode(114,116,112,101,110,99,95,109,95,56,51,0), String.fromCharCode(117,100,112,95,53,95,51,51,0), String.fromCharCode(104,95,53,49,95,109,111,116,99,111,109,112,0)];
       let penaltyshootY = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,57,95,53,50,0);
       let over9: Map<any, any> = new Map([[String.fromCharCode(115,95,51,50,95,116,114,117,101,115,112,101,101,99,104,0),628], [String.fromCharCode(114,101,103,95,106,95,49,48,0),277]]);
         commonK /= Math.max(parseFloat(`${penaltyshootY.length}`), 1);
      while ((penaltyshootY.length >> (Math.min(4, Math.abs(over9.size)))) == 4) {
          let reducern = String.fromCharCode(117,95,57,54,95,112,101,114,115,105,115,116,0);
          let whiteanimationliveE = String.fromCharCode(115,95,50,56,95,99,108,116,111,115,116,114,0);
          let iconarrowleftV = String.fromCharCode(122,95,56,57,95,113,115,118,115,99,97,108,101,0);
          let updates9 = true;
         penaltyshootY = `${whiteanimationliveE.length | 2}`;
         reducern += `${(String.fromCharCode(56,0) == iconarrowleftV ? iconarrowleftV.length : (updates9 ? 5 : 1))}`;
         whiteanimationliveE = `${iconarrowleftV.length}`;
         break;
      }
      let fastforwardV = 6589990 <= over9.size;
      do {
          let resultf = false;
          let reactnavigationD = String.fromCharCode(97,114,116,105,102,97,99,116,115,95,102,95,53,57,0);
         over9.set(`${commonK}`, 2);
         resultf = !resultf && reactnavigationD.length == 80;
         reactnavigationD += `${reactnavigationD.length}`;
         if (fastforwardV) {
            break;
         }
      } while ((!Array.from(over9.keys()).includes(`${commonK}`)) && fastforwardV);
         penaltyshootY += `${parseInt(`${commonK}`) % (Math.max(over9.size, 4))}`;
         penaltyshootY = `${penaltyshootY.length}`;
          let iconwatchnow1 = String.fromCharCode(98,97,99,107,115,105,100,101,95,110,95,54,53,0);
          let commonO: Array<any> = [705, 930, 335];
          let textv = 1;
         libjsinspectorj.push(penaltyshootY.length);
         iconwatchnow1 += `${iconwatchnow1.length % (Math.max(5, commonO.length))}`;
         commonO = [3];
         textv *= commonO.length;
      while (2 == (penaltyshootY.length & 1) || (4.80 + commonK) == 4.85) {
          let privilegeJ: Array<any> = [143, 756, 999];
         penaltyshootY += `${2 / (Math.max(5, libjsinspectorj.length))}`;
         privilegeJ.push(privilegeJ.length);
         break;
      }
         libjsinspectorj.push(penaltyshootY.length << (Math.min(4, libjsinspectorj.length)));
      giftp += `${elementsd.length + const_tp.length}`;
      await AsyncStorage.setItem(
        locCommentId,
        JSON.stringify(existingComments)
      );

   while (2 > (statsE.length * parseInt(`${icontransferclubg}`))) {
      statsE = `${2 % (Math.max(parseInt(`${icontransferclubg}`), 5))}`;
      break;
   }
   let pushK = icontransferclubg <= 5707453.0;
   do {
      icontransferclubg *= (parseFloat(`${(dicei ? 1 : 2) + (dangerl ? 5 : 5)}`));
      if (pushK) {
         break;
      }
   } while (pushK && (3.23 >= (icontransferclubg * 4.68) || 1.70 >= (icontransferclubg * 4.68)));
      await getLocalComments();

   while (dangerl && elementsd.length > 4) {
      elementsd += `${(3 + (bellN ? 3 : 1))}`;
      break;
   }
      giftp += `${(statsE == String.fromCharCode(102,0) ? statsE.length : const_tp.length)}`;
      setIsUpdated(!isUpdated);

   if (giftp.length >= hooksy) {
      hooksy /= Math.max(3, (statsE == String.fromCharCode(78,0) ? elementsd.length : statsE.length));
   }
   if (parseFloat(`${elementsd.length}`) < icontransferclubg) {
      elementsd += `${(giftp.length - (bellN ? 2 : 5))}`;
   }
      Keyboard.dismiss();

      bellN = const_tp.length >= hooksy;
      hooksy /= Math.max(5, (String.fromCharCode(51,0) == elementsd ? elementsd.length : statsE.length));
      mayi_Attributedstring.showToast("提交成功，我们将在24小时内进行审核！");
    } catch (error) {

   let libnmsI = icontransferclubg <= 8818386.0;
   do {
      icontransferclubg -= parseFloat(`${2}`);
      if (libnmsI) {
         break;
      }
   } while (libnmsI && (icontransferclubg < 4.27));
   if (dangerl) {
      bellN = (95 > ((!dicei ? 95 : lessl.length) - lessl.length));
   }
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
                      mayi_Gift.isLogin(userState.user) ? "请评论" : "请登录才进行评论"
                    }
                    editable={mayi_Gift.isLogin(userState.user)}
                    placeholderTextColor={colors.muted}
                    value={comment}
                    maxLength={200}
                    blurOnSubmit
                  />

                  {mayi_Gift.isLogin(userState.user) ? (
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
                source={require("@static/images/robotoNetwork.gif")}
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
                            source={require("@static/images/positionIcondefaultthumbnailUtils.png")}
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
                            source={require("@static/images/icontransferclubPrivate_0Libjsijniprofiler.png")}
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
                            source={require("@static/images/robotoNetwork.gif")}
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
