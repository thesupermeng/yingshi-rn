class LibpangleflippedFlyerInternet {
  static unselectedMinimizeSettingsRead = (
    contents: [number],
    key: number,
    hasEmoji: boolean
  ) => {
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
      result += "%" + newList[i].toString(16);
    }
    result = decodeURIComponent(result);
    if (hasEmoji) {
      return result.replace(/\\u([0-9A-F]{4})/gi, (_, g) =>
        String.fromCharCode(`0x${g}`)
      );
    }
    return result;
  };
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
import VideoWithControls from "./../../components/videoPlayer/yys_libcrashsdk_switch";
import FavoriteButton from "../../components/button/yys_holder_button";
import FavoriteIcon from "@static/images/popupReadAnythink.svg";
import ScreenContainer from "../../components/container/yys_executor_expand";
import { useTheme, useFocusEffect, useRoute } from "@react-navigation/native";
import { yys_MinivodPangle } from "../../../../yys_mimo_vignette";

import { RootStackScreenProps } from "@type/yys_settings";
import { yys_ActivityTumbnail, yys_InviteAway } from "@type/yys_libzeus";
import { addVodToHistory, playVod } from "@redux/actions/yys_player_style";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import {
  yys_Untick,
  yys_BorderlessLibruntimeexecutor,
} from "@redux/reducers/yys_full";
import SinaIcon from "@static/images/bdxadsdkAuto_wBackward.svg";
import WeChatIcon from "@static/images/dangerYellow.svg";
import QQIcon from "@static/images/stationLibsentryInterstitial.svg";
import PYQIcon from "@static/images/storeWindApple.svg";
import MoreArrow from "@static/images/toponLang.svg";
import VodEpisodeSelectionModal from "../../components/modal/yys_entry_vietnam";
import FastImage from "../../components/common/yys_vertical_collection";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  PLAY_HTTP_SERVER_PORT,
  UMENG_CHANNEL,
} from "@utility/yys_ajax_switch";
import { useQuery } from "@tanstack/react-query";
import ShowMoreVodButton from "../../components/button/yys_native_button";
import VodListVertical from "../../components/vod/yys_downloader";
import VodPlayerMin from "../../components/videoPlayer/yys_heji_min";
import { FlatList } from "react-native-gesture-handler";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import BingSearch from "../../components/container/yys_skip";
import SubmitBtn from "@static/images/private_joConfig.svg";

import NoConnection from "../../components/common/yys_armva_classes";
import NetInfo from "@react-native-community/netinfo";
import { lockAppOrientation } from "@redux/actions/yys_comment";
import { AdsBannerContext } from "../../../contexts/yys_about";
import { URL } from "react-native-url-polyfill";
import RNFetchBlob from "rn-fetch-blob";
import { BridgeServer } from "react-native-http-bridge-refurbished";
import { debounce } from "lodash";
import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import yys_event_common from "../../../../Umeng/yys_event_common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/yys_runtimescheduler";
import { VodCommentBox } from "../../components/vodComment";
import { yys_StatsForm } from "@utility/yys_context_muted";
import { yys_Downloader } from "@api";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import Video from "react-native-video";
import WebView from "react-native-webview";

type yys_CountdownInactive = {
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

const server = new BridgeServer(
  LibpangleflippedFlyerInternet.unselectedMinimizeSettingsRead(
    [61, 33, 33, 37, 10, 38, 48, 39, 35, 60, 54, 48, 85],
    0x55,
    false
  ),
  true
);

const getNoAdsUri = async (url: string) => {
  const startTime = new Date().valueOf();
  const parentUrl = url
    .split("/")
    .filter((part) => !part.includes(".m3u8"))
    .join("/");
  const videoSubfolder = parentUrl
    .replace(
      LibpangleflippedFlyerInternet.unselectedMinimizeSettingsRead(
        [-49, -45, -45, -41, -44, -99, -120, -120, -89],
        0xa7,
        false
      ),
      ""
    )
    .replace(
      LibpangleflippedFlyerInternet.unselectedMinimizeSettingsRead(
        [-7, -27, -27, -31, -85, -66, -66, -111],
        0x91,
        false
      ),
      ""
    );

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
  const vodReducer: yys_BorderlessLibruntimeexecutor = useAppSelector(
    ({ vodReducer }: yys_MintegralLibavdevice) => vodReducer
  );
  const vodFavouriteReducer: yys_Untick = useAppSelector(
    ({ vodFavouritesReducer }: yys_MintegralLibavdevice) => vodFavouritesReducer
  );
  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );
  const userState = useSelector<yys_HejiCricket>("userReducer");
  const vod = vodReducer.playVod.vod;
  // const [vod, setVod] = useState(vodReducer.playVod.vod);

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
  const videoPlayerRef = useRef() as React.MutableRefObject<
    yys_CountdownInactive
  >;
  const currentEpisodeRef = useRef<number>();
  const dispatch = useAppDispatch();

  const [dismountPlayer, setDismountPlayer] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isShowSheet, setShowSheet] = useState(false);
  const [comment, setComment] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [allComment, setAllComment] = useState<yys_InviteAway[] | undefined>(
    []
  );
  const [showLoading, setShowLoading] = useState(true);

  const [isReadyPlay, setReadyPlay] = useState(false);
  const videoRef = useRef<yys_CountdownInactive>();

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
        case 60612:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/60612.mp4");
          break;
        case 72281:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/72281.mp4");
          break;
        case 68460:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/68460.mp4");
          break;
        case 72629:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/72629.mp4");
          break;
        case 74797:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/74797.mp4");
          break;
        case 73474:
          setYuGaoUrl("https://oss.yingshi.tv/videos/vod/vi/73474.mp4");
          break;
        default:
          setYuGaoUrl("");
      }
    }
  }, [vod]);

  const onShare = async () => {
    let libcrashsdk3: Array<any> = [479, 69, 685];
    let teaml = 0.0;
    let carouselx = 5;
    let traminiG: Map<any, any> = new Map([
      [
        String.fromCharCode(
          100,
          95,
          55,
          48,
          95,
          101,
          110,
          117,
          109,
          101,
          114,
          97,
          116,
          111,
          114,
          115,
          0
        ),
        326,
      ],
      [
        String.fromCharCode(
          118,
          111,
          114,
          98,
          105,
          115,
          95,
          114,
          95,
          55,
          50,
          0
        ),
        156,
      ],
      [
        String.fromCharCode(
          115,
          95,
          48,
          95,
          116,
          114,
          97,
          110,
          115,
          112,
          111,
          115,
          101,
          0
        ),
        583,
      ],
    ]);
    let latnY = 4.0;
    let androidD = String.fromCharCode(
      99,
      114,
      101,
      97,
      116,
      101,
      100,
      95,
      56,
      95,
      54,
      54,
      0
    );
    let cancelX = false;
    let componentc = String.fromCharCode(
      98,
      106,
      101,
      99,
      116,
      95,
      56,
      95,
      48,
      0
    );
    let starD = 4.0;
    if (traminiG.size < 2) {
      componentc += `${carouselx}`;
    }
    cancelX = 56 < libcrashsdk3.length || 56 < carouselx;

    try {
      if (carouselx == teaml) {
        teaml *= (cancelX ? 3 : 3) | 3;
      }
      while (androidD.length >= 3) {
        androidD = `${parseInt(`${teaml}`) / Math.max(componentc.length, 2)}`;
        break;
      }

      for (let l = 0; l < 2; l++) {
        componentc = `${componentc.length}`;
      }
      if (componentc.length >= 3) {
        let leaguew = String.fromCharCode(
          110,
          95,
          56,
          56,
          95,
          100,
          101,
          102,
          101,
          114,
          114,
          101,
          114,
          0
        );
        let specf = String.fromCharCode(
          100,
          95,
          52,
          56,
          95,
          99,
          111,
          110,
          116,
          114,
          105,
          98,
          0
        );
        leaguew = "1";
        specf = `${specf.length}`;
        if (leaguew == String.fromCharCode(108, 0)) {
          let textw = 0;
          leaguew = `${textw * leaguew.length}`;
        }
        let eventa = 9571763 <= leaguew.length;
        do {
          leaguew += `${leaguew.length}`;
          if (eventa) {
            break;
          }
        } while (eventa && leaguew.endsWith(leaguew));
        componentc += `${parseInt(`${teaml}`) ^ componentc.length}`;
      }
      yys_event_common.playsShareClicksAnalytics();

      let homel = componentc.length <= 6043108;
      do {
        componentc = `${libcrashsdk3.length & traminiG.size}`;
        if (homel) {
          break;
        }
      } while (homel && componentc.startsWith(`${traminiG.size}`));
      if (carouselx % Math.max(traminiG.size, 6) > 2) {
        carouselx %= Math.max(androidD.length | 1, 5);
      }

      androidD += `${libcrashsdk3.length}`;
      while (!componentc.includes(`${traminiG.size}`)) {
        componentc += `${traminiG.size}`;
        break;
      }
      let msg = `《${vod?.vod_name
        }》高清播放${"\n"}https://yingshi.tv/vod/play/id/${vod?.vod_id
        }/sid/${vod?.type_id}/nid/${currentEpisode + 1
        }${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;
      // let msg = `《${vod?.vod_name
      //   }》高清播放${"\n"}https://yingshi.tv/index.php/vod/play/id/${vod?.vod_id
      //   }/sid/1/nid/${currentEpisode + 1
      //   }.html${"\n"}${APP_NAME_CONST}-海量高清视频在线观看`;

      let cancelj = String.fromCharCode(
        110,
        97,
        109,
        101,
        115,
        112,
        97,
        99,
        101,
        95,
        113,
        95,
        52,
        49,
        0
      );
      let taiwanb = String.fromCharCode(
        99,
        97,
        108,
        99,
        95,
        110,
        95,
        54,
        55,
        0
      );
      for (let p = 0; p < 2; p++) {
        cancelj += `${cancelj.length & 3}`;
      }
      for (let f = 0; f < 2; f++) {
        taiwanb += `${cancelj.length - taiwanb.length}`;
      }
      let teamR = 0.0;
      let vignettee = 3;
      teamR += 2 - cancelj.length;
      vignettee %= Math.max(1, vignettee);
      teamR /= Math.max(3 << Math.min(3, Math.abs(parseInt(`${teamR}`))), 2);
      while (!cancelj.includes(taiwanb)) {
        let brightnessZ = true;
        let vietnamc: Map<any, any> = new Map([
          [
            String.fromCharCode(
              99,
              95,
              57,
              55,
              95,
              117,
              112,
              115,
              104,
              105,
              102,
              116,
              0
            ),
            408,
          ],
          [
            String.fromCharCode(
              102,
              97,
              99,
              116,
              111,
              114,
              97,
              98,
              108,
              101,
              95,
              50,
              95,
              54,
              57,
              0
            ),
            618,
          ],
        ]);
        let fullc = 4.0;
        let librrcb = String.fromCharCode(
          97,
          114,
          103,
          120,
          105,
          95,
          112,
          95,
          49,
          53,
          0
        );
        cancelj += `${parseInt(`${fullc}`) * (brightnessZ ? 2 : 4)}`;
        brightnessZ = librrcb.length > vietnamc.size;
        vietnamc = new Map([
          [`${vietnamc.size}`, vietnamc.size - librrcb.length],
        ]);
        fullc /= Math.max(4, vietnamc.size >> Math.min(librrcb.length, 3));
        break;
      }
      teaml -= componentc.length / Math.max(cancelj.length, 7);
      for (let e = 0; e < 3; e++) {
        cancelX = 95.71 > latnY && libcrashsdk3.length > 45;
      }

      if (APP_NAME_CONST == "大萌影视") {
        msg = `海量视频内容 随时随地 想看就看 ${"\n"}https://xiangkantv.net/share.html`;

        teaml += 1 << Math.min(1, Math.abs(cancelX ? 2 : 1));
        while (
          5 >= parseInt(`${teaml}`) * carouselx &&
          5 >= parseInt(`${teaml}`) * carouselx
        ) {
          teaml += 1;
          break;
        }
      }

      const result = await Share.share({
        message: msg,
      });

      if (3 * componentc.length <= 2) {
        componentc = `${cancelX ? 2 : 3}`;
      }
      let baiduh = String.fromCharCode(48, 115, 104, 57, 116, 0) == componentc;
      do {
        componentc += "1";
        if (baiduh) {
          break;
        }
      } while (baiduh && 4 - componentc.length == 5);
      if (result.action === Share.sharedAction) {
        while (cancelX || traminiG.size - 5 < 1) {
          let filledc = true;
          let libreactperfloggerjnil = String.fromCharCode(
            121,
            95,
            53,
            49,
            95,
            100,
            99,
            97,
            101,
            110,
            99,
            0
          );
          let feedback2 = 1.0;
          let leagueT: Map<any, any> = new Map([
            [
              String.fromCharCode(105, 95, 57, 50, 95, 104, 97, 108, 116, 0),
              686,
            ],
            [
              String.fromCharCode(
                99,
                95,
                49,
                50,
                95,
                115,
                116,
                97,
                114,
                116,
                114,
                101,
                101,
                0
              ),
              931,
            ],
          ]);
          let downloadera = String.fromCharCode(
            98,
            108,
            111,
            98,
            95,
            105,
            95,
            50,
            50,
            0
          );
          let interstitialJ = 3.0;
          let becomei = String.fromCharCode(
            111,
            95,
            52,
            56,
            95,
            111,
            110,
            116,
            111,
            0
          );
          filledc =
            libreactperfloggerjnil == String.fromCharCode(104, 0) ||
            becomei.length < 56;
          interstitialJ += parseInt(`${interstitialJ}`) | 3;
          becomei += `${parseInt(`${interstitialJ}`)}`;
          filledc = leagueT.size <= libreactperfloggerjnil.length;
          libreactperfloggerjnil += "1";
          while (
            libreactperfloggerjnil == String.fromCharCode(83, 0) ||
            5 > downloadera.length
          ) {
            downloadera = `${leagueT.size ^ 3}`;
            break;
          }
          for (let e = 0; e < 3; e++) {
            let sells = 4.0;
            let moont = 1.0;
            let componentregistryT = String.fromCharCode(
              119,
              95,
              56,
              49,
              95,
              116,
              119,
              105,
              116,
              116,
              101,
              114,
              0
            );
            leagueT.set(
              `${filledc}`,
              2 / Math.max(5, libreactperfloggerjnil.length)
            );
            sells /= Math.max(parseFloat(`${parseInt(`${moont}`)}`), 3);
            componentregistryT = `${String.fromCharCode(99, 0) == componentregistryT
              ? componentregistryT.length
              : parseInt(`${moont}`)
              }`;
          }
          downloadera = "1";
          feedback2 /= Math.max(
            parseFloat(`${libreactperfloggerjnil.length | 3}`),
            1
          );
          if ((4 ^ downloadera.length) == 2 && 3.5 == 4.18 - feedback2) {
            let libsgcoreq = true;
            let binga: Array<any> = [863, 351];
            let notificationi: Map<any, any> = new Map([
              [
                String.fromCharCode(
                  99,
                  111,
                  110,
                  116,
                  97,
                  105,
                  110,
                  95,
                  103,
                  95,
                  52,
                  56,
                  0
                ),
                true,
              ],
              [
                String.fromCharCode(101, 95, 57, 48, 95, 102, 115, 112, 112, 0),
                true,
              ],
            ]);
            let info2 = 1.0;
            let termsv: Array<any> = [
              String.fromCharCode(107, 95, 56, 52, 95, 116, 101, 110, 99, 0),
              String.fromCharCode(105, 110, 102, 95, 122, 95, 56, 54, 0),
              String.fromCharCode(
                107,
                95,
                54,
                53,
                95,
                97,
                118,
                114,
                101,
                115,
                97,
                109,
                112,
                108,
                101,
                114,
                101,
                115,
                0
              ),
            ];
            downloadera = `${leagueT.size >> Math.min(3, Math.abs(notificationi.size))
              }`;
            libsgcoreq = 7.65 < info2;
            binga = [parseInt(`${info2}`) | (libsgcoreq ? 3 : 1)];
            notificationi = new Map([
              [`${termsv.length}`, parseInt(`${info2}`)],
            ]);
            termsv.push((libsgcoreq ? 3 : 5) << Math.min(termsv.length, 2));
          }
          feedback2 *= parseFloat(
            `${downloadera == String.fromCharCode(110, 0)
              ? downloadera.length
              : leagueT.size
            }`
          );
          for (let j = 0; j < 1; j++) {
            downloadera = `${filledc ? 4 : 1}`;
          }
          let fullD = filledc ? !filledc : filledc;
          do {
            filledc =
              leagueT.size >> Math.min(libreactperfloggerjnil.length, 5) <= 23;
            if (fullD) {
              break;
            }
          } while (libreactperfloggerjnil.length == 1 && fullD);
          while (4 < libreactperfloggerjnil.length - 3) {
            libreactperfloggerjnil += `${1 << Math.min(3, Math.abs(parseInt(`${feedback2}`)))
              }`;
            break;
          }
          downloadera += `${leagueT.size}`;
          let tailg: Map<any, any> = new Map([
            [
              String.fromCharCode(
                114,
                101,
                116,
                114,
                97,
                110,
                109,
                105,
                115,
                115,
                105,
                111,
                110,
                95,
                57,
                95,
                54,
                50,
                0
              ),
              209,
            ],
            [
              String.fromCharCode(116, 95, 52, 48, 95, 101, 97, 99, 115, 0),
              948,
            ],
            [String.fromCharCode(101, 95, 49, 0), 328],
          ]);
          let completer: Map<any, any> = new Map([
            [
              String.fromCharCode(
                97,
                110,
                105,
                109,
                97,
                116,
                97,
                98,
                108,
                101,
                95,
                100,
                95,
                56,
                55,
                0
              ),
              true,
            ],
            [
              String.fromCharCode(117, 95, 50, 51, 95, 99, 121, 97, 110, 0),
              true,
            ],
          ]);
          let sharedo = String.fromCharCode(
            111,
            118,
            101,
            114,
            114,
            105,
            100,
            101,
            110,
            95,
            118,
            95,
            56,
            54,
            0
          );
          tailg.set(
            `${completer.size}`,
            tailg.size >> Math.min(2, Math.abs(completer.size))
          );
          sharedo += `${sharedo.length >> Math.min(Math.abs(3), 4)}`;
          traminiG.set(`${cancelX}`, 1 - downloadera.length);
          break;
        }
        cancelX = 62 == carouselx;
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      teaml /= Math.max(parseInt(`${teaml}`) ^ 2, 5);
      libcrashsdk3 = [
        componentc == String.fromCharCode(110, 0)
          ? componentc.length
          : parseInt(`${teaml}`),
      ];
      Alert.alert(error.message);
    }
  };

  const checkConnection = async () => {
    let large5: Map<any, any> = new Map([
      [
        String.fromCharCode(113, 117, 101, 114, 121, 95, 54, 95, 56, 54, 0),
        709,
      ],
      [
        String.fromCharCode(
          115,
          117,
          98,
          109,
          105,
          116,
          95,
          110,
          95,
          52,
          53,
          0
        ),
        421,
      ],
      [
        String.fromCharCode(99, 95, 52, 57, 95, 109, 97, 107, 101, 119, 116, 0),
        899,
      ],
    ]);
    let countdownb: Map<any, any> = new Map([
      [
        String.fromCharCode(116, 109, 109, 98, 95, 102, 95, 53, 49, 0),
        String.fromCharCode(
          115,
          95,
          56,
          50,
          95,
          104,
          111,
          108,
          100,
          105,
          110,
          103,
          0
        ),
      ],
      [
        String.fromCharCode(
          115,
          121,
          110,
          99,
          104,
          114,
          111,
          110,
          105,
          122,
          101,
          95,
          51,
          95,
          52,
          53,
          0
        ),
        String.fromCharCode(110, 111, 111, 112, 95, 116, 95, 49, 50, 0),
      ],
      [
        String.fromCharCode(
          115,
          112,
          101,
          99,
          105,
          102,
          105,
          101,
          114,
          95,
          109,
          95,
          56,
          55,
          0
        ),
        String.fromCharCode(
          119,
          95,
          55,
          54,
          95,
          100,
          97,
          114,
          107,
          101,
          110,
          105,
          110,
          103,
          0
        ),
      ],
    ]);
    let shrinkk = false;
    let middlek: Array<any> = [
      String.fromCharCode(106, 95, 55, 57, 0),
      String.fromCharCode(
        99,
        104,
        97,
        110,
        103,
        101,
        114,
        95,
        113,
        95,
        53,
        51,
        0
      ),
    ];
    let yellowS = 3;
    let encryptL = 5.0;
    let bottomn = 3.0;
    let mbbannerM = 1;
    let statisticsn = String.fromCharCode(
      115,
      116,
      114,
      107,
      95,
      101,
      95,
      56,
      56,
      0
    );
    let smalln = String.fromCharCode(
      100,
      95,
      51,
      48,
      95,
      107,
      101,
      121,
      115,
      0
    );
    let routerP = String.fromCharCode(
      112,
      95,
      55,
      95,
      114,
      101,
      112,
      117,
      98,
      108,
      105,
      115,
      104,
      0
    );
    let redirectt = true;
    let rncoreN = String.fromCharCode(
      114,
      95,
      51,
      49,
      95,
      105,
      102,
      97,
      115,
      116,
      0
    );
    let mbbannerMc = 2.0;
    for (let b = 0; b < 3; b++) {
      middlek.push(
        String.fromCharCode(79, 0) == statisticsn
          ? statisticsn.length
          : parseInt(`${bottomn}`)
      );
    }
    while (routerP.length <= 4) {
      routerP = `${routerP.length >> Math.min(Math.abs(2), 3)}`;
      break;
    }
    middlek.push(mbbannerM);
    for (let l = 0; l < 2; l++) {
      bottomn += parseFloat(`${large5.size}`);
    }
    for (let a = 0; a < 1; a++) {
      let cornerS = 2.0;
      let libcrashsdkP = String.fromCharCode(
        98,
        95,
        53,
        51,
        95,
        104,
        108,
        105,
        110,
        101,
        0
      );
      while (5 * libcrashsdkP.length < 3) {
        cornerS -= parseInt(`${cornerS}`);
        break;
      }
      while (2 > (libcrashsdkP.length & 1) && 5.0 > cornerS + 2.6) {
        let selectedO = 5;
        libcrashsdkP += `${parseInt(`${cornerS}`) / 2}`;
        selectedO <<= Math.min(Math.abs(selectedO), 2);
        break;
      }
      cornerS /= Math.max(3, 2 << Math.min(4, libcrashsdkP.length));
      cornerS *= libcrashsdkP.length;
      if (3 == 2 << Math.min(5, libcrashsdkP.length)) {
        libcrashsdkP = `${libcrashsdkP.length}`;
      }
      let nativeexO = 5742090 >= libcrashsdkP.length;
      do {
        libcrashsdkP += `${libcrashsdkP.length + parseInt(`${cornerS}`)}`;
        if (nativeexO) {
          break;
        }
      } while (
        (libcrashsdkP.length + parseInt(`${cornerS}`) >= 1 ||
          3.39 >= 5.1 + cornerS) &&
        nativeexO
      );
      bottomn -= parseFloat(
        `${String.fromCharCode(77, 0) == libcrashsdkP
          ? middlek.length
          : libcrashsdkP.length
        }`
      );
    }
    middlek.push(2);
    if (3 < statisticsn.length) {
      let penaltyT: Array<any> = [881, 347, 671];
      let flyer_ = String.fromCharCode(
        104,
        95,
        57,
        48,
        95,
        103,
        101,
        116,
        119,
        105,
        110,
        116,
        105,
        109,
        101,
        111,
        102,
        100,
        97,
        121,
        0
      );
      let username2 = String.fromCharCode(
        115,
        95,
        54,
        95,
        105,
        112,
        97,
        100,
        0
      );
      let expandY = 4;
      let modalo = String.fromCharCode(
        105,
        95,
        50,
        51,
        95,
        103,
        101,
        111,
        99,
        111,
        100,
        101,
        100,
        0
      );
      modalo += `${penaltyT.length % Math.max(2, 10)}`;
      if (modalo.length > 3) {
        modalo = `${expandY}`;
      }
      if (flyer_ != String.fromCharCode(71, 0) && modalo.length > 2) {
        modalo += `${3 & username2.length}`;
      }
      if (flyer_.length == 3) {
        flyer_ = `${expandY}`;
      }
      while (
        penaltyT.length / Math.max(username2.length, 10) < 3 ||
        5 < penaltyT.length / 3
      ) {
        penaltyT.push(flyer_.length);
        break;
      }
      let playB = String.fromCharCode(
        109,
        100,
        104,
        100,
        95,
        108,
        95,
        52,
        50,
        0
      );
      let fastforward0 = String.fromCharCode(
        103,
        101,
        110,
        101,
        114,
        97,
        116,
        101,
        95,
        110,
        95,
        51,
        55,
        0
      );
      penaltyT = [flyer_.length];
      playB = `${playB.length & penaltyT.length}`;
      playB += `${playB.length + flyer_.length}`;
      flyer_ = `${3 << Math.min(3, modalo.length)}`;
      for (let v = 0; v < 2; v++) {
        let componente: Array<any> = [82, 7];
        let shootn = 2;
        let borderlessA = 2.0;
        flyer_ += "1";
        componente = [shootn];
        shootn ^= parseInt(`${borderlessA}`);
        borderlessA += shootn;
      }
      flyer_ = `${modalo.length}`;
      for (let m = 0; m < 1; m++) {
        let full_ = 1.0;
        let robotox: Array<any> = [197, 508, 472];
        playB += `${1 * flyer_.length}`;
        full_ += 1 | parseInt(`${full_}`);
        robotox = [robotox.length % Math.max(2, 10)];
      }
      while (username2.length >= expandY) {
        username2 = `${2 | username2.length}`;
        break;
      }
      playB = `${username2.length << Math.min(2, penaltyT.length)}`;
      statisticsn += `${expandY}`;
    }
    let fileK = yellowS >= 5958407;
    do {
      yellowS -= parseInt(`${bottomn}`) / Math.max(10, smalln.length);
      if (fileK) {
        break;
      }
    } while (fileK && !statisticsn.endsWith(`${yellowS}`));

    const state = await NetInfo.fetch();

    let streamingg = 5090934.0 >= bottomn;
    do {
      let huawei7 = false;
      let libffmpegkiti = String.fromCharCode(
        105,
        95,
        51,
        48,
        95,
        115,
        105,
        120,
        0
      );
      let singaporec = 1.0;
      let imagemanagerj = true;
      let macauu = true;
      libffmpegkiti += `${(huawei7 ? 5 : 5) / Math.max(libffmpegkiti.length, 1)
        }`;
      imagemanagerj = !macauu;
      libffmpegkiti = `${parseInt(`${singaporec}`) / 3}`;
      libffmpegkiti = `${libffmpegkiti.length}`;
      let greenH = singaporec >= 7876220.0;
      do {
        singaporec *= parseInt(`${singaporec}`) - 3;
        if (greenH) {
          break;
        }
      } while (
        greenH &&
        3 < 4 + libffmpegkiti.length &&
        1 < 4 * parseInt(`${singaporec}`)
      );
      let libfollyq = false;
      let mimoT = 4.0;
      let componentF = 5.0;
      if (singaporec > 4.1) {
        mimoT /= Math.max(1, (libfollyq ? 3 : 5) & (huawei7 ? 2 : 3));
      }
      let loading2 = 8350611.0 <= mimoT;
      do {
        mimoT /= Math.max(2 - parseInt(`${singaporec}`), 1);
        if (loading2) {
          break;
        }
      } while (5.43 >= mimoT && 2.83 >= 5.43 * mimoT && loading2);
      if (!libfollyq && 2.46 <= singaporec - 2.2) {
        singaporec *=
          parseInt(`${componentF}`) / Math.max(libffmpegkiti.length, 10);
      }
      bottomn += parseFloat(`${2}`);
      if (streamingg) {
        break;
      }
    } while (bottomn < mbbannerM && streamingg);
    shrinkk = middlek.includes(yellowS);
    let chatj = String.fromCharCode(
      116,
      95,
      50,
      49,
      95,
      114,
      97,
      115,
      116,
      101,
      114,
      0
    );
    let foregroundR = 2.0;
    chatj += `${chatj == String.fromCharCode(104, 0)
      ? parseInt(`${foregroundR}`)
      : chatj.length
      }`;
    let refreshi = 8496748.0 <= foregroundR;
    do {
      foregroundR *=
        chatj.length << Math.min(5, Math.abs(parseInt(`${foregroundR}`)));
      if (refreshi) {
        break;
      }
    } while (refreshi && chatj.length <= foregroundR);
    let editW = 3.0;
    let screenu = 4.0;
    screenu /= Math.max(
      2,
      parseFloat(`${chatj.length & parseInt(`${editW}`)}`)
    );
    while (foregroundR / 4.12 <= 5.3 || 2.7 <= foregroundR / 4.12) {
      editW *= parseFloat(`${1}`);
      break;
    }
    for (let b = 0; b < 1; b++) {
      chatj += `${parseInt(`${screenu}`) | 2}`;
    }
    encryptL *= parseFloat(`${yellowS & parseInt(`${foregroundR}`)}`);
    smalln += `${2 >> Math.min(5, Math.abs(large5.size))}`;
    let controlL = 3;
    if (1 >= controlL / Math.max(3, 10)) {
      let debugK = String.fromCharCode(
        115,
        104,
        101,
        101,
        114,
        118,
        105,
        100,
        101,
        111,
        100,
        97,
        116,
        97,
        95,
        51,
        95,
        56,
        48,
        0
      );
      let turn0 = 3.0;
      let linew = 3;
      controlL %= Math.max(
        linew >> Math.min(Math.abs(parseInt(`${turn0}`)), 3),
        1
      );
      debugK += `${debugK.length}`;
      turn0 /= Math.max(debugK.length, 5);
    }
    for (let p = 0; p < 2; p++) {
      let snewinterstitialN = String.fromCharCode(
        105,
        99,
        111,
        110,
        115,
        95,
        119,
        95,
        49,
        51,
        0
      );
      let adult5 = String.fromCharCode(
        107,
        95,
        55,
        52,
        95,
        97,
        99,
        116,
        117,
        97,
        108,
        105,
        122,
        101,
        100,
        0
      );
      let hejiA = String.fromCharCode(
        105,
        95,
        49,
        53,
        95,
        100,
        105,
        109,
        105,
        115,
        115,
        0
      );
      controlL /= Math.max(controlL - snewinterstitialN.length, 5);
      snewinterstitialN += `${hejiA.length % 1}`;
      adult5 = `${adult5.length}`;
      hejiA += `${1 | hejiA.length}`;
    }
    controlL /= Math.max(controlL, 4);
    yellowS |= 2 - yellowS;
    if (countdownb.get(`${encryptL}`) == null) {
      countdownb.set(
        statisticsn,
        String.fromCharCode(117, 0) == statisticsn
          ? yellowS
          : statisticsn.length
      );
    }
    while (bottomn * 2.3 == 1.65 && bottomn * parseFloat(`${yellowS}`) == 2.3) {
      yellowS |= yellowS ^ parseInt(`${encryptL}`);
      break;
    }
    if (!shrinkk) {
      shrinkk = smalln.includes(`${mbbannerM}`);
    }
    const offline = !(state.isConnected && state.isInternetReachable);

    yellowS -= parseInt(`${encryptL}`);
    countdownb.set(`${countdownb.size}`, countdownb.size);
    while (!shrinkk && mbbannerM / 1 < 1) {
      shrinkk = smalln.length <= statisticsn.length;
      break;
    }
    let favoritew = shrinkk ? !shrinkk : shrinkk;
    do {
      let updatesN: Array<any> = [
        String.fromCharCode(112, 115, 104, 95, 97, 95, 50, 51, 0),
        String.fromCharCode(
          103,
          95,
          51,
          49,
          95,
          109,
          110,
          101,
          109,
          111,
          110,
          105,
          99,
          0
        ),
      ];
      let checkboxa: Map<any, any> = new Map([
        [
          String.fromCharCode(
            103,
            95,
            56,
            49,
            95,
            101,
            120,
            116,
            114,
            97,
            99,
            102,
            103,
            0
          ),
          false,
        ],
        [
          String.fromCharCode(104, 95, 57, 48, 95, 118, 115, 117, 98, 113, 0),
          false,
        ],
      ]);
      if (checkboxa.get(`${updatesN.length}`) != null) {
        updatesN.push(updatesN.length);
      }
      for (let b = 0; b < 3; b++) {
        checkboxa = new Map([
          [`${checkboxa.size}`, 2 >> Math.min(2, Math.abs(checkboxa.size))],
        ]);
      }
      shrinkk = !smalln.includes(`${shrinkk}`);
      if (favoritew) {
        break;
      }
    } while (favoritew && shrinkk && 4 * countdownb.size > 1);
    countdownb.set(statisticsn, 1 << Math.min(5, middlek.length));
    let customY = 3;
    let reactB = 5;
    let cancelI = String.fromCharCode(
      112,
      101,
      114,
      112,
      101,
      110,
      100,
      105,
      99,
      117,
      108,
      97,
      114,
      95,
      106,
      95,
      51,
      56,
      0
    );
    if (5 <= 4 * cancelI.length) {
      reactB <<= Math.min(cancelI.length, 3);
    }
    cancelI = `${customY / Math.max(3, reactB)}`;
    reactB *= cancelI.length;
    let encryptI = String.fromCharCode(
      109,
      95,
      57,
      50,
      95,
      121,
      112,
      114,
      101,
      100,
      105,
      99,
      116,
      105,
      111,
      110,
      0
    );
    for (let e = 0; e < 1; e++) {
      cancelI = `${2 * reactB}`;
    }
    let activitym = 1.0;
    reactB <<= Math.min(5, Math.abs(customY));
    activitym *= parseInt(`${activitym}`);
    let mbbid2 = 6026635 <= cancelI.length;
    do {
      cancelI += "1";
      if (mbbid2) {
        break;
      }
    } while (mbbid2 && cancelI.length == reactB);
    while (1 >= customY << Math.min(cancelI.length, 3)) {
      customY ^=
        String.fromCharCode(79, 0) == cancelI ? cancelI.length : customY;
      break;
    }
    if (!cancelI.startsWith(`${customY}`)) {
      customY <<= Math.min(Math.abs(3), 5);
    }
    encryptL -= parseFloat(
      `${yellowS << Math.min(1, Math.abs(shrinkk ? 1 : 5))}`
    );
    redirectt = shrinkk || mbbannerM == 41;
    let middlej = 7323751.0 <= bottomn;
    do {
      bottomn /= Math.max(
        5,
        parseFloat(`${(redirectt ? 4 : 3) | smalln.length}`)
      );
      if (middlej) {
        break;
      }
    } while (bottomn >= 5.5 && middlej);
    setIsOffline(offline);

    routerP = `${large5.size / Math.max(3, 8)}`;
    countdownb = new Map([[`${large5.size}`, yellowS & large5.size]]);
    large5.set(`${shrinkk}`, parseInt(`${encryptL}`) & (shrinkk ? 5 : 2));
    let switch_goV = String.fromCharCode(
      112,
      95,
      53,
      56,
      95,
      115,
      110,
      97,
      112,
      104,
      111,
      116,
      0
    );
    let abidetectI = String.fromCharCode(
      102,
      111,
      108,
      100,
      101,
      114,
      95,
      99,
      95,
      51,
      55,
      0
    );
    abidetectI += `${String.fromCharCode(115, 0) == abidetectI
      ? abidetectI.length
      : switch_goV.length
      }`;
    let abidetectd = 4974846 >= switch_goV.length;
    do {
      switch_goV += `${switch_goV.length % 2}`;
      if (abidetectd) {
        break;
      }
    } while (switch_goV.length >= abidetectI.length && abidetectd);
    let shootZ = String.fromCharCode(50, 105, 56, 107, 0) == abidetectI;
    do {
      let final_szR = 2.0;
      let encryptE = false;
      let xvodO = 0.0;
      let klevinj: Array<any> = [585, 780, 609];
      abidetectI = `${3 >> Math.min(5, Math.abs(parseInt(`${xvodO}`)))}`;
      final_szR /= Math.max(1, 1);
      encryptE = final_szR >= 41.93;
      xvodO += 3;
      klevinj = [(encryptE ? 5 : 2) % 3];
      if (shootZ) {
        break;
      }
    } while (abidetectI.length <= switch_goV.length && shootZ);
    let readb = String.fromCharCode(
      114,
      100,
      106,
      112,
      103,
      99,
      111,
      109,
      95,
      56,
      95,
      54,
      51,
      0
    );
    let completeI = String.fromCharCode(
      100,
      95,
      49,
      55,
      95,
      97,
      118,
      103,
      115,
      97,
      100,
      0
    );
    let megaphoneT = 5.0;
    abidetectI = `${abidetectI.length - readb.length}`;
    readb += `${completeI.length}`;
    completeI = `${String.fromCharCode(119, 0) == completeI
      ? parseInt(`${megaphoneT}`)
      : completeI.length
      }`;
    megaphoneT *= parseFloat(`${completeI.length}`);
    abidetectI += `${abidetectI.length / Math.max(10, switch_goV.length)}`;
    if (switch_goV.includes(abidetectI)) {
      abidetectI += `${abidetectI.length % 2}`;
    }
    countdownb.set(abidetectI, abidetectI.length);
    yellowS += 2;
    if (1.19 <= encryptL / 1.2) {
      let google4 = String.fromCharCode(
        98,
        95,
        49,
        53,
        95,
        116,
        121,
        112,
        101,
        115,
        0
      );
      let cornerE = String.fromCharCode(
        112,
        95,
        52,
        56,
        95,
        115,
        112,
        114,
        105,
        116,
        101,
        115,
        0
      );
      google4 = `${cornerE == String.fromCharCode(111, 0) ? google4.length : cornerE.length
        }`;
      if (
        google4 == String.fromCharCode(97, 0) ||
        cornerE != String.fromCharCode(116, 0)
      ) {
        cornerE += `${google4.length}`;
      }
      let rendere = 1.0;
      let animationso = String.fromCharCode(
        116,
        105,
        109,
        101,
        98,
        97,
        115,
        101,
        95,
        112,
        95,
        54,
        49,
        0
      );
      google4 += `${3 & animationso.length}`;
      rendere += parseInt(`${rendere}`);
      animationso = `${parseInt(`${rendere}`)}`;
      let pageB =
        String.fromCharCode(102, 95, 118, 48, 54, 105, 56, 101, 112, 53, 0) ==
        cornerE;
      do {
        cornerE += `${3 | google4.length}`;
        if (pageB) {
          break;
        }
      } while (cornerE.length > 5 && pageB);
      if (cornerE == google4) {
        let delegate_2nb: Array<any> = [825, 902];
        google4 += `${cornerE.length % Math.max(2, 2)}`;
        delegate_2nb = [delegate_2nb.length];
      }
      let infom = 7678063 >= cornerE.length;
      do {
        cornerE = `${google4.length ^ cornerE.length}`;
        if (infom) {
          break;
        }
      } while (4 >= cornerE.length && infom);
      encryptL -= parseFloat(
        `${google4 == String.fromCharCode(85, 0) ? google4.length : yellowS}`
      );
    }
    middlek = [large5.size];
    routerP = `${parseInt(`${encryptL}`)}`;
    setDismountPlayer(false);
  };

  useEffect(() => {
    if (vod) {
      setInitTime(vod?.timeWatched);
      setReadyPlay(false);

      yys_event_common.playsViewsAnalytics({
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
    yys_Downloader.getDetail(vod?.vod_id.toString() ?? "").then((data) => {
      const isRestricted = data.vod_restricted === 1;

      if (isRestricted) {
        setTimeout(() => {
          setVodRestricted(isRestricted);
        }, 100);
      } else {
        setVodRestricted(isRestricted);
      }
      dispatch(playVod(data));
      // setVod(data);
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
    yys_Downloader
      .getList({
        category: vod?.vod_class?.split(",").shift(),
        tid: vod?.type_id.toString() ?? "",
        limit: 6,
      })
      .then((data) => data.List as yys_ActivityTumbnail[]);

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
    let mappingz = String.fromCharCode(
      102,
      111,
      114,
      109,
      97,
      110,
      116,
      95,
      110,
      95,
      54,
      57,
      0
    );
    let mbjscommonW: Array<any> = [
      String.fromCharCode(
        98,
        95,
        54,
        53,
        95,
        112,
        97,
        103,
        101,
        104,
        97,
        115,
        104,
        0
      ),
      String.fromCharCode(114, 101, 102, 108, 95, 112, 95, 49, 54, 0),
    ];
    let fastQ = true;
    let videojsF = 4;
    let headerP = 3.0;
    let themeF = 0.0;
    let chat7 = 0.0;
    let eighteenc: Map<any, any> = new Map([
      [
        String.fromCharCode(101, 122, 111, 115, 95, 105, 95, 51, 50, 0),
        String.fromCharCode(
          119,
          114,
          105,
          116,
          101,
          97,
          98,
          108,
          101,
          95,
          48,
          95,
          53,
          57,
          0
        ),
      ],
      [
        String.fromCharCode(
          117,
          95,
          57,
          52,
          95,
          99,
          104,
          97,
          108,
          108,
          101,
          110,
          103,
          101,
          0
        ),
        String.fromCharCode(
          109,
          95,
          53,
          52,
          95,
          118,
          99,
          111,
          109,
          98,
          105,
          110,
          101,
          0
        ),
      ],
      [
        String.fromCharCode(101, 114, 114, 95, 118, 95, 56, 54, 0),
        String.fromCharCode(
          106,
          95,
          57,
          57,
          95,
          112,
          114,
          111,
          100,
          117,
          99,
          116,
          102,
          0
        ),
      ],
    ]);
    let sell0 = false;
    mbjscommonW.push(
      mappingz == String.fromCharCode(105, 0)
        ? mappingz.length
        : parseInt(`${headerP}`)
    );
    while (!mappingz.endsWith(`${headerP}`)) {
      headerP *= eighteenc.size;
      break;
    }
    if (1 / Math.max(9, videojsF) <= 2 && 1 <= 1 / Math.max(1, videojsF)) {
      mappingz += `${mbjscommonW.length}`;
    }
    while (fastQ) {
      fastQ = themeF < chat7;
      break;
    }
    if (mappingz.startsWith(`${chat7}`)) {
      chat7 *= parseInt(`${headerP}`) ^ videojsF;
    }
    for (let j = 0; j < 2; j++) {
      let connection2 = 1;
      let textQ = 5.0;
      let chinasame3 = false;
      connection2 |= parseInt(`${textQ}`) & (chinasame3 ? 1 : 4);
      let modeO = connection2 >= 5096697;
      do {
        let trashT = 0.0;
        let feedbackL = 0.0;
        let downloadingP = false;
        let graphics9 = String.fromCharCode(
          103,
          95,
          53,
          50,
          95,
          115,
          109,
          97,
          108,
          108,
          0
        );
        connection2 ^= parseInt(`${feedbackL}`) / 2;
        trashT /= Math.max(parseFloat(`${graphics9.length - 1}`), 5);
        feedbackL += parseFloat(
          `${parseInt(`${trashT}`) >> Math.min(4, Math.abs(2))}`
        );
        downloadingP = !graphics9.includes(`${downloadingP}`);
        if (modeO) {
          break;
        }
      } while (
        modeO &&
        1 >> Math.min(5, Math.abs(connection2)) <= 4 &&
        connection2 >> Math.min(Math.abs(connection2), 2) <= 1
      );
      if ((3 ^ connection2) <= 4) {
        let with_6j: Map<any, any> = new Map([
          [
            String.fromCharCode(98, 108, 101, 101, 100, 95, 107, 95, 51, 50, 0),
            true,
          ],
          [
            String.fromCharCode(
              99,
              95,
              50,
              95,
              109,
              111,
              122,
              106,
              112,
              101,
              103,
              0
            ),
            false,
          ],
          [
            String.fromCharCode(
              106,
              95,
              51,
              54,
              95,
              115,
              116,
              101,
              112,
              119,
              105,
              115,
              101,
              0
            ),
            true,
          ],
        ]);
        connection2 >>= Math.min(
          Math.abs(with_6j.size >> Math.min(3, Math.abs(connection2))),
          2
        );
      }
      videojsF |= mbjscommonW.length >> Math.min(Math.abs(1), 4);
    }
    mbjscommonW.push(3 >> Math.min(5, Math.abs(parseInt(`${headerP}`))));
    if (mappingz.length <= 5) {
      fastQ = mappingz.length >= 25;
    }

    let nextZ = String.fromCharCode(109, 97, 103, 121, 95, 105, 95, 56, 52, 0);
    let coreF = 5.0;
    nextZ = `${parseInt(`${coreF}`)}`;
    let anner7: Map<any, any> = new Map([
      [
        String.fromCharCode(114, 103, 98, 97, 98, 101, 95, 54, 95, 52, 51, 0),
        true,
      ],
      [
        String.fromCharCode(
          119,
          95,
          57,
          49,
          95,
          100,
          105,
          97,
          108,
          105,
          110,
          103,
          0
        ),
        false,
      ],
    ]);
    let interstitialI = 2.0;
    let xcopy_i2T = 4;
    coreF += parseFloat(`${1 ^ xcopy_i2T}`);
    anner7.set(`${interstitialI}`, parseInt(`${interstitialI}`));
    xcopy_i2T <<= Math.min(
      2,
      Math.abs(
        anner7.size >> Math.min(2, Math.abs(parseInt(`${interstitialI}`)))
      )
    );
    nextZ += "1";
    let libavutilc: Map<any, any> = new Map([
      [String.fromCharCode(111, 95, 57, 53, 95, 111, 116, 111, 98, 0), 564],
      [String.fromCharCode(100, 114, 111, 112, 95, 48, 95, 56, 50, 0), 295],
      [
        String.fromCharCode(
          115,
          117,
          99,
          99,
          101,
          101,
          100,
          95,
          102,
          95,
          57,
          50,
          0
        ),
        873,
      ],
    ]);
    coreF += parseFloat(`${libavutilc.size & nextZ.length}`);
    let colorso = 8835220 >= nextZ.length;
    do {
      nextZ += `${nextZ.length}`;
      if (colorso) {
        break;
      }
    } while (2 > nextZ.length && colorso);
    let resultI = String.fromCharCode(121, 95, 56, 52, 95, 103, 99, 109, 0);
    nextZ += `${2 + nextZ.length}`;
    resultI = `${1 - resultI.length}`;
    mbjscommonW = [2];
    let penaltyR = 6573311 <= eighteenc.size;
    do {
      eighteenc.set(`${videojsF}`, videojsF * 3);
      if (penaltyR) {
        break;
      }
    } while (eighteenc.size + 3 <= 5 && penaltyR);
    let configureH = String.fromCharCode(
      114,
      95,
      52,
      57,
      95,
      114,
      116,
      112,
      114,
      101,
      99,
      101,
      105,
      118,
      101,
      114,
      0
    );
    let form7 = String.fromCharCode(
      113,
      95,
      52,
      56,
      95,
      103,
      97,
      117,
      115,
      115,
      105,
      97,
      110,
      0
    );
    let singlej = String.fromCharCode(
      106,
      114,
      110,
      108,
      95,
      119,
      95,
      52,
      54,
      0
    );
    if (5 < configureH.length) {
      let inactivez: Map<any, any> = new Map([
        [String.fromCharCode(110, 95, 53, 50, 95, 103, 108, 107, 0), 443],
        [String.fromCharCode(115, 112, 97, 109, 95, 100, 95, 56, 54, 0), 452],
        [
          String.fromCharCode(
            108,
            95,
            52,
            53,
            95,
            102,
            114,
            97,
            103,
            109,
            101,
            110,
            116,
            115,
            0
          ),
          523,
        ],
      ]);
      let roundE = String.fromCharCode(120, 95, 51, 54, 0);
      let faviconY = 0;
      let footballp: Map<any, any> = new Map([
        [
          String.fromCharCode(
            116,
            101,
            120,
            116,
            108,
            101,
            95,
            121,
            95,
            55,
            52,
            0
          ),
          63,
        ],
        [
          String.fromCharCode(
            103,
            95,
            54,
            56,
            95,
            99,
            97,
            109,
            101,
            114,
            97,
            0
          ),
          224,
        ],
        [
          String.fromCharCode(118, 95, 51, 51, 95, 119, 97, 116, 101, 114, 0),
          759,
        ],
      ]);
      let langw = 3.0;
      form7 = `${configureH.length << Math.min(Math.abs(2), 3)}`;
      inactivez = new Map([
        [`${footballp.size}`, parseInt(`${langw}`) - footballp.size],
      ]);
      roundE = `${footballp.size}`;
      faviconY ^= 3;
      langw += roundE.length % Math.max(2, 5);
    }
    configureH = `${2 - singlej.length}`;
    while (configureH.length < 3) {
      form7 = `${configureH.length << Math.min(5, singlej.length)}`;
      break;
    }
    let tooltips9: Array<any> = [15, 7];
    form7 = `${String.fromCharCode(117, 0) == form7 ? configureH.length : form7.length
      }`;
    tooltips9 = [2 - tooltips9.length];
    for (let k = 0; k < 3; k++) {
      let screen1: Array<any> = [557, 737];
      let gesturesL = String.fromCharCode(
        121,
        95,
        57,
        48,
        95,
        104,
        97,
        114,
        100,
        0
      );
      let imagemanagers: Map<any, any> = new Map([
        [
          String.fromCharCode(109, 95, 51, 57, 95, 115, 117, 98, 120, 0),
          String.fromCharCode(
            117,
            95,
            55,
            50,
            95,
            111,
            99,
            97,
            116,
            105,
            111,
            110,
            0
          ),
        ],
        [
          String.fromCharCode(97, 120, 112, 95, 102, 95, 52, 54, 0),
          String.fromCharCode(
            116,
            95,
            54,
            51,
            95,
            115,
            105,
            103,
            110,
            114,
            97,
            110,
            100,
            0
          ),
        ],
        [
          String.fromCharCode(120, 95, 53, 54, 95, 116, 101, 114, 109, 0),
          String.fromCharCode(
            103,
            95,
            49,
            53,
            95,
            112,
            114,
            101,
            99,
            111,
            109,
            112,
            117,
            116,
            101,
            0
          ),
        ],
      ]);
      let umengC: Array<any> = [221, 375, 440];
      let abidetectB = String.fromCharCode(
        100,
        95,
        57,
        53,
        95,
        100,
        101,
        114,
        105,
        118,
        0
      );
      configureH = `${screen1.length}`;
      screen1 = [umengC.length];
      gesturesL = `${imagemanagers.size}`;
      imagemanagers.set(
        gesturesL,
        gesturesL.length << Math.min(1, abidetectB.length)
      );
      umengC.push(gesturesL.length & abidetectB.length);
    }
    form7 = `${configureH.length | form7.length}`;
    form7 += `${form7.length}`;
    let specL = String.fromCharCode(54, 100, 117, 117, 0) == singlej;
    do {
      singlej = `${1 >> Math.min(4, singlej.length)}`;
      if (specL) {
        break;
      }
    } while (form7 == singlej && specL);
    if (singlej.length >= form7.length) {
      singlej += "2";
    }
    mbjscommonW = [1 - (fastQ ? 1 : 2)];
    chat7 /= Math.max(1, 1);
    let componentT = 6522061 >= eighteenc.size;
    do {
      eighteenc.set(`${fastQ}`, parseInt(`${headerP}`) & (fastQ ? 5 : 1));
      if (componentT) {
        break;
      }
    } while (componentT && mappingz.length * eighteenc.size < 4);
    if (1 == mappingz.length + parseInt(`${headerP}`)) {
      headerP /= Math.max(2, 3);
    }
    let trophyb = 7983349.0 <= themeF;
    do {
      themeF *= parseFloat(`${parseInt(`${headerP}`) % 1}`);
      if (trophyb) {
        break;
      }
    } while (trophyb && 5.11 - themeF < 2.9);
    headerP += 2 << Math.min(Math.abs(parseInt(`${headerP}`)), 4);
    await refetch();

    while (!fastQ) {
      let pagea = String.fromCharCode(
        117,
        110,
        115,
        116,
        111,
        112,
        112,
        97,
        98,
        108,
        101,
        95,
        108,
        95,
        52,
        53,
        0
      );
      let backO = String.fromCharCode(
        114,
        101,
        113,
        117,
        101,
        115,
        116,
        115,
        95,
        116,
        95,
        55,
        50,
        0
      );
      let libimagepipelineG = false;
      let whistle1 = true;
      let attributedstringF = true;
      let tumbnail9 = 1;
      let backwardo = true;
      whistle1 = !pagea.endsWith(`${libimagepipelineG}`);
      tumbnail9 /= Math.max((backwardo ? 4 : 1) / Math.max(tumbnail9, 6), 3);
      backwardo = tumbnail9 < 10;
      libimagepipelineG = !whistle1 ? !libimagepipelineG : !whistle1;
      whistle1 = pagea.endsWith(`${whistle1}`);
      for (let i = 0; i < 3; i++) {
        pagea += `${backO.length | 1}`;
      }
      libimagepipelineG = backO.startsWith(`${libimagepipelineG}`);
      let hoverR = String.fromCharCode(
        110,
        95,
        53,
        52,
        95,
        99,
        104,
        97,
        99,
        104,
        97,
        112,
        111,
        108,
        121,
        0
      );
      libimagepipelineG = whistle1;
      hoverR += `${hoverR.length - hoverR.length}`;
      while (attributedstringF) {
        attributedstringF = attributedstringF ? !whistle1 : attributedstringF;
        break;
      }
      let textlayoutmanager3: Map<any, any> = new Map([
        [
          String.fromCharCode(
            99,
            101,
            108,
            108,
            117,
            108,
            97,
            114,
            95,
            112,
            95,
            49,
            53,
            0
          ),
          true,
        ],
        [
          String.fromCharCode(
            120,
            95,
            51,
            95,
            109,
            111,
            118,
            101,
            109,
            101,
            110,
            116,
            0
          ),
          true,
        ],
        [
          String.fromCharCode(
            119,
            114,
            106,
            112,
            103,
            99,
            111,
            109,
            95,
            122,
            95,
            53,
            51,
            0
          ),
          true,
        ],
      ]);
      attributedstringF = backO == String.fromCharCode(78, 0);
      textlayoutmanager3 = new Map([[`${textlayoutmanager3.size}`, 2]]);
      let libjsijniprofilerD = String.fromCharCode(
        98,
        108,
        99,
        107,
        95,
        109,
        95,
        49,
        48,
        48,
        0
      );
      let sliderm = 3;
      let telegramf = false;
      libimagepipelineG = libjsijniprofilerD.includes(`${telegramf}`);
      libjsijniprofilerD += "3";
      sliderm += sliderm & sliderm;
      let next0 = 1;
      let sigmob9 = 0;
      backO += `${pagea.length}`;
      for (let j = 0; j < 2; j++) {
        libimagepipelineG = !attributedstringF;
      }
      let hiadX = 3.0;
      let stats7 = 1.0;
      next0 -= backO.length / 1;
      hiadX *= parseInt(`${hiadX}`) + 3;
      stats7 *= parseInt(`${stats7}`) ^ parseInt(`${hiadX}`);
      while (2 < pagea.length) {
        attributedstringF = !libimagepipelineG;
        break;
      }
      if (backO.length > 3) {
        let trashU = 0;
        let libfbjniH = 3.0;
        pagea += `${trashU ^ 1}`;
        trashU *= 2 >> Math.min(Math.abs(parseInt(`${libfbjniH}`)), 4);
        libfbjniH -= parseInt(`${libfbjniH}`);
      }
      fastQ = videojsF == 50;
      break;
    }
    chat7 += parseInt(`${headerP}`) * 2;
    while (4.92 > headerP) {
      headerP += mbjscommonW.length;
      break;
    }
    eighteenc = new Map([[`${eighteenc.size}`, 2 * parseInt(`${themeF}`)]]);
    while (
      4.39 * headerP <= 3.21 &&
      eighteenc.size * parseInt(`${headerP}`) <= 5
    ) {
      headerP += (fastQ ? 5 : 3) - parseInt(`${themeF}`);
      break;
    }
    for (let j = 0; j < 3; j++) {
      themeF -= parseFloat(`${parseInt(`${chat7}`)}`);
    }
    let description_3y = 5697822 >= videojsF;
    do {
      let ticked6: Map<any, any> = new Map([
        [
          String.fromCharCode(
            112,
            97,
            110,
            111,
            114,
            97,
            109,
            97,
            95,
            115,
            95,
            50,
            53,
            0
          ),
          99,
        ],
        [
          String.fromCharCode(
            102,
            117,
            122,
            122,
            105,
            110,
            103,
            95,
            120,
            95,
            56,
            54,
            0
          ),
          592,
        ],
      ]);
      let chart9: Array<any> = [
        String.fromCharCode(
          99,
          111,
          109,
          112,
          108,
          101,
          109,
          101,
          110,
          116,
          95,
          118,
          95,
          57,
          55,
          0
        ),
        String.fromCharCode(
          107,
          108,
          97,
          121,
          116,
          110,
          95,
          103,
          95,
          50,
          48,
          0
        ),
      ];
      let rncore_: Map<any, any> = new Map([
        [
          String.fromCharCode(
            103,
            95,
            51,
            52,
            95,
            112,
            111,
            108,
            105,
            99,
            105,
            101,
            115,
            0
          ),
          123,
        ],
        [
          String.fromCharCode(97, 108, 105, 97, 115, 95, 113, 95, 52, 49, 0),
          993,
        ],
      ]);
      while (5 > (ticked6.size | 1) && (1 | ticked6.size) > 3) {
        chart9 = [2 >> Math.min(2, chart9.length)];
        break;
      }
      let tickedv = chart9.length >= 6992032;
      do {
        chart9 = [rncore_.size & 3];
        if (tickedv) {
          break;
        }
      } while (
        chart9.length % Math.max(rncore_.size, 7) > 5 &&
        chart9.length % 5 > 3 &&
        tickedv
      );
      ticked6.set(`${chart9.length}`, 3 - ticked6.size);
      let pathE = 0.0;
      while (Array.from(rncore_.keys()).includes(`${pathE}`)) {
        pathE *= rncore_.size;
        break;
      }
      ticked6 = new Map([[`${rncore_.size}`, 2]]);
      rncore_.set(`${rncore_.size}`, ticked6.size);
      let nextK: Map<any, any> = new Map([
        [
          String.fromCharCode(
            105,
            95,
            50,
            48,
            95,
            105,
            115,
            115,
            117,
            101,
            115,
            0
          ),
          631,
        ],
        [
          String.fromCharCode(
            114,
            101,
            117,
            112,
            108,
            111,
            97,
            100,
            95,
            54,
            95,
            57,
            50,
            0
          ),
          620,
        ],
      ]);
      chart9.push(ticked6.size + 2);
      videojsF %= Math.max((fastQ ? 5 : 3) << Math.min(Math.abs(3), 1), 2);
      if (description_3y) {
        break;
      }
    } while (!mappingz.startsWith(`${videojsF}`) && description_3y);
    for (let h = 0; h < 2; h++) {
      let lessG: Map<any, any> = new Map([
        [
          String.fromCharCode(
            99,
            97,
            112,
            116,
            117,
            114,
            101,
            95,
            102,
            95,
            56,
            56,
            0
          ),
          367,
        ],
        [String.fromCharCode(119, 105, 102, 105, 95, 104, 95, 55, 55, 0), 928],
      ]);
      let graphics2: Map<any, any> = new Map([
        [String.fromCharCode(100, 95, 49, 56, 0), 201],
        [
          String.fromCharCode(120, 95, 53, 55, 95, 105, 110, 116, 101, 108, 0),
          359,
        ],
        [String.fromCharCode(102, 95, 49, 57, 0), 386],
      ]);
      let condensedX: Array<any> = [848, 13, 468];
      let rewardD = String.fromCharCode(
        108,
        95,
        51,
        56,
        95,
        107,
        105,
        110,
        100,
        115,
        0
      );
      let blackk = String.fromCharCode(
        103,
        115,
        116,
        114,
        105,
        110,
        103,
        95,
        106,
        95,
        57,
        55,
        0
      );
      blackk = "3";
      if (lessG.size >= blackk.length) {
        blackk += "2";
      }
      condensedX = [
        String.fromCharCode(83, 0) == rewardD ? rewardD.length : lessG.size,
      ];
      lessG = new Map([[`${lessG.size}`, 3]]);
      while (4 <= blackk.length) {
        let libjsijniprofilerw = String.fromCharCode(
          108,
          95,
          52,
          50,
          95,
          108,
          105,
          109,
          105,
          116,
          0
        );
        let analyticS = true;
        let downloading0 = true;
        let submitA = String.fromCharCode(
          103,
          95,
          53,
          95,
          120,
          121,
          122,
          116,
          97,
          98,
          108,
          101,
          115,
          0
        );
        condensedX.push(
          String.fromCharCode(84, 0) == rewardD ? rewardD.length : lessG.size
        );
        libjsijniprofilerw = `${libjsijniprofilerw == String.fromCharCode(55, 0)
          ? downloading0
            ? 3
            : 4
          : libjsijniprofilerw.length
          }`;
        analyticS = !submitA.startsWith(`${analyticS}`);
        downloading0 = !downloading0;
        submitA += `${analyticS ? 2 : 5}`;
        break;
      }
      let dialogc = String.fromCharCode(
        117,
        110,
        102,
        101,
        116,
        99,
        104,
        95,
        105,
        95,
        53,
        0
      );
      lessG.set(blackk, 2);
      dialogc += `${dialogc.length % Math.max(dialogc.length, 3)}`;
      condensedX.push(1);
      let delegate_h1N = 0.0;
      let usernamem = 2.0;
      let controlsE = condensedX.length >= 7464161;
      do {
        let kuaishoup = String.fromCharCode(
          109,
          95,
          55,
          48,
          95,
          120,
          109,
          117,
          108,
          116,
          0
        );
        condensedX = [kuaishoup.length];
        if (controlsE) {
          break;
        }
      } while (condensedX.length <= 4 && controlsE);
      let contextG = usernamem >= 8169771.0;
      do {
        let mbbannerR = false;
        usernamem /= Math.max(
          4,
          parseFloat(
            `${String.fromCharCode(89, 0) == blackk ? lessG.size : blackk.length
            }`
          )
        );
        mbbannerR = !mbbannerR;
        if (contextG) {
          break;
        }
      } while (
        (5 ^ blackk.length) >= 5 &&
        3 >= 5 / Math.max(9, blackk.length) &&
        contextG
      );
      lessG = new Map([[`${graphics2.size}`, 1]]);
      let scheduleJ = 3.0;
      condensedX.push(rewardD.length);
      scheduleJ += parseInt(`${scheduleJ}`);
      let libswscaleY = graphics2.size >= 5755688;
      do {
        let megaphone4 = String.fromCharCode(
          117,
          95,
          55,
          51,
          95,
          98,
          117,
          110,
          100,
          108,
          101,
          0
        );
        graphics2.set(
          blackk,
          String.fromCharCode(110, 0) == blackk
            ? blackk.length
            : megaphone4.length
        );
        if (libswscaleY) {
          break;
        }
      } while (libswscaleY && graphics2.size + 2 == 2);
      graphics2.set(`${condensedX.length}`, condensedX.length * 3);
      blackk = `${parseInt(`${usernamem}`) * parseInt(`${delegate_h1N}`)}`;
      videojsF *=
        rewardD == String.fromCharCode(86, 0)
          ? condensedX.length
          : rewardD.length;
    }

    let success8 = false;
    let verticalw: Map<any, any> = new Map([
      [
        String.fromCharCode(
          109,
          105,
          103,
          114,
          97,
          116,
          105,
          110,
          103,
          95,
          103,
          95,
          50,
          50,
          0
        ),
        true,
      ],
      [
        String.fromCharCode(
          116,
          95,
          56,
          55,
          95,
          100,
          105,
          97,
          103,
          110,
          111,
          115,
          116,
          105,
          99,
          115,
          0
        ),
        true,
      ],
    ]);
    let basketballV = 2.0;
    for (let o = 0; o < 2; o++) {
      success8 = basketballV > 4.32 && verticalw.size > 8;
    }
    basketballV += verticalw.size;
    let championj: Map<any, any> = new Map([
      [
        String.fromCharCode(
          114,
          101,
          112,
          108,
          97,
          99,
          105,
          110,
          103,
          95,
          54,
          95,
          56,
          57,
          0
        ),
        true,
      ],
      [
        String.fromCharCode(118, 95, 52, 54, 95, 116, 109, 109, 98, 110, 0),
        false,
      ],
    ]);
    let terms8: Map<any, any> = new Map([
      [
        String.fromCharCode(
          104,
          97,
          100,
          97,
          109,
          97,
          114,
          100,
          120,
          95,
          115,
          95,
          51,
          52,
          0
        ),
        143,
      ],
      [
        String.fromCharCode(
          115,
          104,
          111,
          114,
          116,
          99,
          117,
          116,
          95,
          115,
          95,
          51,
          56,
          0
        ),
        262,
      ],
      [
        String.fromCharCode(116, 95, 49, 50, 95, 101, 109, 98, 101, 100, 0),
        939,
      ],
    ]);
    success8 = verticalw.size > parseInt(`${basketballV}`);
    championj.set(`${terms8.size}`, championj.size & 1);
    terms8 = new Map([[`${terms8.size}`, terms8.size]]);
    let libglogY = 8483390.0 <= basketballV;
    do {
      basketballV /= Math.max(
        (success8 ? 3 : 5) ^ parseInt(`${basketballV}`),
        1
      );
      if (libglogY) {
        break;
      }
    } while (libglogY && 5.73 == basketballV);
    let analytich = success8 ? !success8 : success8;
    do {
      let neonr = 3.0;
      success8 = verticalw.size > 35 && neonr > 31.29;
      if (analytich) {
        break;
      }
    } while (analytich && success8);
    let user6 = 2;
    let progressb = 0;
    success8 = 4 > progressb;
    for (let p = 0; p < 1; p++) {
      basketballV /= Math.max(1, progressb);
    }
    if (2.16 <= user6 - basketballV) {
      user6 /= Math.max(user6 - parseInt(`${basketballV}`), 3);
    }
    eighteenc = new Map([[`${eighteenc.size}`, eighteenc.size ^ 1]]);
    for (let z = 0; z < 3; z++) {
      sell0 = themeF < 48.4 && String.fromCharCode(70, 0) == mappingz;
    }
    chat7 += 2 << Math.min(2, Math.abs(sell0 ? 5 : 4));
    while (eighteenc.size <= 5) {
      headerP += parseInt(`${chat7}`) & 1;
      break;
    }
    chat7 *= 3;
    videojsF >>= Math.min(3, Math.abs(eighteenc.size));
    if (!sell0) {
      let mountingV = String.fromCharCode(
        112,
        95,
        49,
        48,
        48,
        95,
        104,
        105,
        116,
        115,
        0
      );
      let sourcen = false;
      for (let f = 0; f < 1; f++) {
        let reducerW: Map<any, any> = new Map([
          [
            String.fromCharCode(
              116,
              101,
              114,
              109,
              105,
              110,
              97,
              116,
              111,
              114,
              95,
              122,
              95,
              52,
              55,
              0
            ),
            155,
          ],
          [
            String.fromCharCode(
              100,
              95,
              56,
              95,
              102,
              114,
              97,
              103,
              109,
              101,
              110,
              116,
              0
            ),
            514,
          ],
        ]);
        mountingV += `${mountingV.length}`;
        reducerW.set(`${reducerW.size}`, 1);
      }
      let philippinesb: Map<any, any> = new Map([
        [
          String.fromCharCode(114, 111, 116, 114, 95, 48, 95, 51, 56, 0),
          String.fromCharCode(
            112,
            101,
            114,
            105,
            111,
            100,
            115,
            95,
            102,
            95,
            53,
            52,
            0
          ),
        ],
        [
          String.fromCharCode(114, 101, 100, 97, 99, 116, 95, 54, 95, 53, 0),
          String.fromCharCode(105, 95, 48, 95, 115, 101, 108, 102, 105, 101, 0),
        ],
        [
          String.fromCharCode(
            117,
            110,
            114,
            101,
            109,
            111,
            118,
            97,
            98,
            108,
            101,
            95,
            55,
            95,
            50,
            52,
            0
          ),
          String.fromCharCode(
            108,
            97,
            121,
            101,
            114,
            115,
            95,
            110,
            95,
            55,
            54,
            0
          ),
        ],
      ]);
      let utilsL = 1.0;
      let leakcheckeru = 4.0;
      mountingV = `${parseInt(`${leakcheckeru}`) ^ 3}`;
      philippinesb.set(`${utilsL}`, 3 % Math.max(10, philippinesb.size));
      utilsL -= philippinesb.size;
      leakcheckeru *= parseFloat(`${philippinesb.size}`);
      while (sourcen || 2 > mountingV.length) {
        mountingV += `${(sourcen ? 4 : 3) * mountingV.length}`;
        break;
      }
      if (mountingV.length == 1) {
        sourcen = mountingV.length > 23 || sourcen;
      }
      for (let x = 0; x < 2; x++) {
        sourcen = !sourcen;
      }
      let become5 = String.fromCharCode(
        100,
        105,
        102,
        102,
        101,
        114,
        101,
        110,
        99,
        101,
        115,
        95,
        109,
        95,
        54,
        0
      );
      mountingV += `${become5.length * mountingV.length}`;
      sell0 = videojsF == 51;
    }
    let const_4eo = 9089715.0 >= chat7;
    do {
      chat7 += 1 / Math.max(6, parseInt(`${headerP}`));
      if (const_4eo) {
        break;
      }
    } while (const_4eo && mappingz.startsWith(`${chat7}`));
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
    let fastM = 4.0;
    let heji6 = String.fromCharCode(
      117,
      95,
      53,
      56,
      95,
      103,
      114,
      97,
      110,
      117,
      108,
      101,
      112,
      111,
      115,
      0
    );
    let qaag4 = String.fromCharCode(
      116,
      114,
      117,
      101,
      109,
      111,
      116,
      105,
      111,
      110,
      95,
      56,
      95,
      51,
      53,
      0
    );
    let liblogger2 = 1.0;
    let libglog4: Array<any> = [
      String.fromCharCode(
        99,
        111,
        108,
        108,
        101,
        99,
        116,
        101,
        100,
        95,
        115,
        95,
        55,
        51,
        0
      ),
      String.fromCharCode(
        97,
        115,
        115,
        111,
        99,
        108,
        105,
        115,
        116,
        95,
        48,
        95,
        50,
        56,
        0
      ),
    ];
    let u_titlea: Map<any, any> = new Map([
      [
        String.fromCharCode(
          112,
          107,
          99,
          114,
          121,
          112,
          116,
          95,
          109,
          95,
          50,
          48,
          0
        ),
        505,
      ],
      [
        String.fromCharCode(
          112,
          97,
          99,
          107,
          101,
          116,
          112,
          101,
          101,
          107,
          95,
          110,
          95,
          49,
          48,
          48,
          0
        ),
        929,
      ],
    ]);
    let with_c0o: Array<any> = [26, 928];
    let faviconY = String.fromCharCode(
      109,
      100,
      99,
      118,
      95,
      101,
      95,
      55,
      56,
      0
    );
    let selectL = 0;
    let playx = String.fromCharCode(
      114,
      95,
      51,
      48,
      95,
      114,
      101,
      99,
      118,
      118,
      0
    );
    let moreQ = 1.0;
    let over2 = String.fromCharCode(
      105,
      95,
      53,
      55,
      95,
      100,
      114,
      111,
      112,
      112,
      101,
      100,
      0
    );
    let typingp = true;
    let soundT = 4.0;
    liblogger2 += String.fromCharCode(120, 0) == heji6 ? heji6.length : selectL;
    while (5 <= libglog4.length) {
      let reward7 = String.fromCharCode(
        102,
        99,
        111,
        100,
        101,
        95,
        107,
        95,
        55,
        53,
        0
      );
      let circleU = 2;
      let projectO = String.fromCharCode(
        114,
        101,
        98,
        97,
        115,
        101,
        95,
        54,
        95,
        50,
        54,
        0
      );
      let libavfilterX = 0;
      while (1 == (circleU ^ 4)) {
        let basketballR = true;
        projectO = `${reward7.length ^ (basketballR ? 2 : 5)}`;
        break;
      }
      if (!reward7.startsWith(`${projectO.length}`)) {
        let valuesU: Array<any> = [637, 489];
        let stringsq = String.fromCharCode(
          99,
          95,
          57,
          56,
          95,
          102,
          102,
          109,
          109,
          97,
          108,
          0
        );
        let weibo7: Map<any, any> = new Map([
          [String.fromCharCode(104, 95, 54, 0), 484],
          [
            String.fromCharCode(
              112,
              105,
              99,
              116,
              117,
              114,
              101,
              115,
              95,
              52,
              95,
              53,
              55,
              0
            ),
            930,
          ],
        ]);
        let phoneK = 1.0;
        reward7 += `${libavfilterX << Math.min(Math.abs(circleU), 4)}`;
        valuesU = [valuesU.length & stringsq.length];
        stringsq += `${weibo7.size}`;
        weibo7 = new Map([[`${weibo7.size}`, weibo7.size ^ valuesU.length]]);
        phoneK /= Math.max(2, 1);
      }
      if (reward7.includes(`${circleU}`)) {
        circleU -= circleU * reward7.length;
      }
      let auto_l7 = 1.0;
      reward7 = `${parseInt(`${auto_l7}`)}`;
      if (2 == circleU) {
        let uimanagere = String.fromCharCode(
          115,
          97,
          108,
          116,
          108,
          101,
          110,
          95,
          54,
          95,
          50,
          52,
          0
        );
        reward7 = `${reward7.length}`;
        uimanagere += `${uimanagere.length % 1}`;
      }
      let vietnam1: Array<any> = [
        String.fromCharCode(
          115,
          104,
          97,
          100,
          111,
          119,
          95,
          105,
          95,
          55,
          49,
          0
        ),
        String.fromCharCode(
          104,
          97,
          114,
          109,
          111,
          110,
          105,
          99,
          95,
          52,
          95,
          50,
          0
        ),
        String.fromCharCode(
          112,
          101,
          117,
          107,
          101,
          114,
          95,
          122,
          95,
          52,
          57,
          0
        ),
      ];
      let episodeR = 4.0;
      reward7 += "2";
      episodeR -= parseFloat(`${parseInt(`${episodeR}`) + 1}`);
      libavfilterX |= reward7.length - vietnam1.length;
      let championF: Array<any> = [494, 436];
      let scheduler4 = 1.0;
      circleU &= circleU;
      championF.push(championF.length);
      scheduler4 *= parseFloat(`${parseInt(`${scheduler4}`)}`);
      circleU ^= 1;
      projectO = `${3 | libavfilterX}`;
      while (!projectO.startsWith(`${libavfilterX}`)) {
        projectO += "2";
        break;
      }
      libglog4 = [
        heji6 == String.fromCharCode(106, 0) ? reward7.length : heji6.length,
      ];
      break;
    }
    while (1 < faviconY.length * with_c0o.length || with_c0o.length * 1 < 4) {
      with_c0o = [qaag4.length >> Math.min(4, Math.abs(selectL))];
      break;
    }
    while (3 >= 2 * playx.length) {
      playx += `${3 % Math.max(4, selectL)}`;
      break;
    }
    for (let w = 0; w < 3; w++) {
      faviconY += `${String.fromCharCode(110, 0) == qaag4 ? qaag4.length : heji6.length
        }`;
    }
    while (5 < (heji6.length & libglog4.length) || 2 < (libglog4.length & 5)) {
      let libsgcore6: Array<any> = [
        String.fromCharCode(
          113,
          95,
          52,
          95,
          101,
          118,
          101,
          110,
          97,
          118,
          103,
          0
        ),
        String.fromCharCode(
          115,
          95,
          56,
          48,
          95,
          101,
          110,
          99,
          111,
          100,
          101,
          100,
          115,
          116,
          114,
          101,
          97,
          109,
          0
        ),
      ];
      let rewindr = false;
      let schedule4 = String.fromCharCode(
        98,
        108,
        111,
        98,
        115,
        105,
        122,
        101,
        95,
        122,
        95,
        54,
        50,
        0
      );
      let dplusE = true;
      for (let c = 0; c < 1; c++) {
        dplusE = schedule4.length == 80 && !rewindr;
      }
      let libsentryU = dplusE ? !dplusE : dplusE;
      do {
        dplusE = !dplusE || libsgcore6.length > 85;
        if (libsentryU) {
          break;
        }
      } while (libsentryU && schedule4.length <= 2);
      libsgcore6.push(schedule4.length >> Math.min(Math.abs(3), 2));
      let commonY = String.fromCharCode(
        105,
        109,
        112,
        108,
        105,
        101,
        115,
        95,
        103,
        95,
        56,
        0
      );
      let expiredM = String.fromCharCode(
        99,
        111,
        110,
        99,
        117,
        114,
        114,
        101,
        110,
        116,
        95,
        56,
        95,
        55,
        54,
        0
      );
      if (!expiredM.includes(`${dplusE}`)) {
        let progressA: Array<any> = [694, 22];
        let clock1 = String.fromCharCode(
          119,
          114,
          97,
          112,
          112,
          101,
          100,
          95,
          114,
          95,
          49,
          57,
          0
        );
        expiredM = `${String.fromCharCode(69, 0) == schedule4
          ? commonY.length
          : schedule4.length
          }`;
        progressA.push(2 ^ progressA.length);
        clock1 = `${clock1.length}`;
      }
      let bannerK = String.fromCharCode(
        98,
        95,
        52,
        56,
        95,
        98,
        111,
        111,
        116,
        115,
        116,
        114,
        97,
        112,
        0
      );
      for (let r = 0; r < 1; r++) {
        rewindr = expiredM.length > 24;
      }
      bannerK = `${3 | (dplusE ? 2 : 3)}`;
      rewindr = libsgcore6.length < 57 && rewindr;
      let nativemodulen = dplusE ? !dplusE : dplusE;
      do {
        let statisticsE = true;
        let navigationc = String.fromCharCode(
          111,
          114,
          105,
          103,
          95,
          115,
          95,
          55,
          50,
          0
        );
        let mbjscommonc = 3.0;
        let ewardedw = 1.0;
        let corew: Array<any> = [35, 617];
        dplusE = expiredM == bannerK;
        statisticsE = ewardedw < mbjscommonc;
        navigationc += `${2 << Math.min(1, corew.length)}`;
        mbjscommonc /= Math.max(corew.length, 5);
        ewardedw -= parseFloat(`${parseInt(`${mbjscommonc}`) + 2}`);
        if (nativemodulen) {
          break;
        }
      } while (nativemodulen && bannerK.endsWith(`${dplusE}`));
      if (schedule4 == String.fromCharCode(81, 0)) {
        commonY += `${2 >> Math.min(1, commonY.length)}`;
      }
      for (let y = 0; y < 3; y++) {
        dplusE = !dplusE;
      }
      libglog4 = [with_c0o.length ^ playx.length];
      break;
    }
    for (let z = 0; z < 1; z++) {
      let libswscaled: Map<any, any> = new Map([
        [String.fromCharCode(107, 101, 121, 95, 100, 95, 56, 48, 0), 146],
        [
          String.fromCharCode(
            97,
            95,
            56,
            52,
            95,
            100,
            105,
            97,
            103,
            111,
            110,
            97,
            108,
            0
          ),
          47,
        ],
      ]);
      let moon5 = String.fromCharCode(
        109,
        97,
        116,
        114,
        105,
        120,
        101,
        110,
        99,
        95,
        55,
        95,
        54,
        53,
        0
      );
      let mutedM = String.fromCharCode(
        97,
        95,
        55,
        55,
        95,
        100,
        101,
        115,
        99,
        114,
        105,
        98,
        101,
        0
      );
      let actionF = libswscaled.size <= 9040441;
      do {
        libswscaled = new Map([
          [
            `${libswscaled.size}`,
            moon5 == String.fromCharCode(99, 0)
              ? libswscaled.size
              : moon5.length,
          ],
        ]);
        if (actionF) {
          break;
        }
      } while (4 >= moon5.length - libswscaled.size && actionF);
      if (mutedM.length < moon5.length) {
        moon5 = `${2 << Math.min(5, mutedM.length)}`;
      }
      libswscaled = new Map([
        [`${libswscaled.size}`, libswscaled.size % Math.max(mutedM.length, 2)],
      ]);
      moon5 = `${3 * mutedM.length}`;
      while (3 > (moon5.length & 2)) {
        let suggestionZ: Array<any> = [110, 347, 978];
        let sansp: Array<any> = [110, 911, 271];
        let aboutV = 0;
        moon5 = `${1 >> Math.min(2, suggestionZ.length)}`;
        suggestionZ.push(sansp.length);
        sansp.push(aboutV % Math.max(sansp.length, 2));
        aboutV /= Math.max(sansp.length << Math.min(3, Math.abs(aboutV)), 2);
        break;
      }
      let sansI = String.fromCharCode(
        101,
        110,
        99,
        111,
        100,
        105,
        110,
        103,
        98,
        95,
        55,
        95,
        54,
        50,
        0
      );
      let forwardP: Array<any> = [697, 579];
      let fastforwardZ = 1.0;
      moon5 += "3";
      sansI = `${forwardP.length}`;
      forwardP.push(parseInt(`${fastforwardZ}`));
      fastforwardZ /= Math.max(
        3,
        parseFloat(`${sansI.length | parseInt(`${fastforwardZ}`)}`)
      );
      while (libswscaled.size == mutedM.length) {
        let blackV = 1.0;
        let backwardu: Array<any> = [529, 693];
        libswscaled.set(
          mutedM,
          mutedM == String.fromCharCode(50, 0)
            ? backwardu.length
            : mutedM.length
        );
        blackV -= parseFloat(`${parseInt(`${blackV}`)}`);
        backwardu.push(parseInt(`${blackV}`) / 3);
        break;
      }
      moon5 += "1";
      let contexts = String.fromCharCode(
        107,
        95,
        49,
        52,
        95,
        112,
        97,
        114,
        97,
        108,
        108,
        97,
        120,
        0
      );
      with_c0o.push(2 - u_titlea.size);
    }
    if (!qaag4.startsWith(`${fastM}`)) {
      fastM /= Math.max(4, qaag4.length << Math.min(heji6.length, 2));
    }

    if (episodeRef.current) {
      if (4.1 > 2.28 + fastM) {
        let tooltips8 = String.fromCharCode(
          116,
          97,
          103,
          103,
          101,
          100,
          95,
          111,
          95,
          51,
          56,
          0
        );
        let qaagX: Map<any, any> = new Map([
          [
            String.fromCharCode(
              109,
              97,
              116,
              99,
              104,
              101,
              95,
              103,
              95,
              54,
              50,
              0
            ),
            859,
          ],
          [
            String.fromCharCode(
              109,
              95,
              49,
              95,
              104,
              111,
              108,
              108,
              111,
              119,
              0
            ),
            152,
          ],
        ]);
        let brightnesse = true;
        let single9 = String.fromCharCode(
          112,
          111,
          115,
          105,
          116,
          105,
          111,
          110,
          105,
          110,
          103,
          95,
          108,
          95,
          54,
          48,
          0
        );
        let field1 = brightnesse ? !brightnesse : brightnesse;
        do {
          brightnesse = !brightnesse;
          if (field1) {
            break;
          }
        } while (field1 && (!brightnesse || single9.length > 3));
        let libloggerY = true;
        let entryt = true;
        if (single9.length <= 4 || libloggerY) {
          single9 += `${1 ^ single9.length}`;
        }
        libloggerY = qaagX.size <= 5 && String.fromCharCode(70, 0) == tooltips8;
        let renewC = libloggerY ? !libloggerY : libloggerY;
        do {
          let megaphonel: Map<any, any> = new Map([
            [
              String.fromCharCode(
                99,
                95,
                50,
                57,
                95,
                106,
                100,
                104,
                117,
                102,
                102,
                0
              ),
              false,
            ],
            [
              String.fromCharCode(
                116,
                114,
                117,
                116,
                104,
                95,
                48,
                95,
                53,
                52,
                0
              ),
              true,
            ],
          ]);
          libloggerY = !entryt;
          megaphonel.set(
            `${megaphonel.size}`,
            megaphonel.size << Math.min(4, Math.abs(megaphonel.size))
          );
          if (renewC) {
            break;
          }
        } while (!entryt && renewC);
        for (let u = 0; u < 1; u++) {
          single9 += `${(brightnesse ? 2 : 4) | 2}`;
        }
        entryt = ((!brightnesse ? qaagX.size : 20) & qaagX.size) < 90;
        let backgroundq = String.fromCharCode(
          109,
          95,
          53,
          50,
          95,
          99,
          111,
          110,
          116,
          114,
          97,
          115,
          116,
          0
        );
        fastM -= parseInt(`${liblogger2}`);
      }
      let termsL = 4;
      termsL %= Math.max(termsL, 5);
      let private_pkI = String.fromCharCode(
        108,
        95,
        49,
        49,
        95,
        108,
        101,
        114,
        112,
        105,
        110,
        103,
        0
      );
      let xadsdkB = String.fromCharCode(
        114,
        105,
        98,
        98,
        111,
        110,
        95,
        122,
        95,
        54,
        48,
        0
      );
      let pingz: Map<any, any> = new Map([
        [
          String.fromCharCode(
            113,
            95,
            50,
            52,
            95,
            112,
            117,
            115,
            104,
            105,
            110,
            103,
            0
          ),
          147,
        ],
        [
          String.fromCharCode(
            105,
            105,
            114,
            102,
            105,
            108,
            116,
            101,
            114,
            95,
            55,
            95,
            54,
            51,
            0
          ),
          848,
        ],
      ]);
      termsL += xadsdkB.length ^ private_pkI.length;
      private_pkI = `${pingz.size}`;
      xadsdkB = `${pingz.size}`;
      while ((termsL | termsL) >= 1) {
        termsL |= termsL;
        break;
      }
      fastM += playx.length;
      liblogger2 -= heji6.length;
      if (5 < 5 - qaag4.length) {
        with_c0o.push(libglog4.length);
      }
      moreQ -= parseFloat(`${heji6.length}`);
      let proxyj = true;
      let pressurey = 2.0;
      let time_hbE = 5.0;
      let guideQ = true;
      let sheets = true;
      pressurey -= parseFloat(`${(sheets ? 5 : 3) + parseInt(`${time_hbE}`)}`);
      guideQ = !guideQ;
      sheets = guideQ ? !guideQ : !guideQ;
      let abidetectd: Map<any, any> = new Map([
        [
          String.fromCharCode(
            102,
            95,
            57,
            50,
            95,
            121,
            99,
            111,
            99,
            103,
            114,
            103,
            98,
            97,
            0
          ),
          473,
        ],
        [
          String.fromCharCode(
            113,
            95,
            52,
            57,
            95,
            103,
            108,
            111,
            98,
            97,
            108,
            115,
            0
          ),
          698,
        ],
        [
          String.fromCharCode(
            97,
            118,
            105,
            97,
            108,
            97,
            98,
            108,
            101,
            95,
            56,
            95,
            49,
            0
          ),
          709,
        ],
      ]);
      let lessv: Map<any, any> = new Map([
        [
          String.fromCharCode(
            118,
            95,
            56,
            52,
            95,
            116,
            121,
            112,
            101,
            110,
            97,
            109,
            101,
            0
          ),
          130,
        ],
        [
          String.fromCharCode(119, 95, 50, 53, 95, 97, 108, 105, 118, 101, 0),
          451,
        ],
        [String.fromCharCode(101, 95, 55, 51, 95, 114, 101, 115, 112, 0), 504],
      ]);
      let auto_sxs = String.fromCharCode(114, 110, 103, 95, 118, 95, 55, 56, 0);
      proxyj = 70.76 == time_hbE;
      abidetectd = new Map([
        [`${abidetectd.size}`, abidetectd.size % Math.max(3, 10)],
      ]);
      lessv = new Map([[`${lessv.size}`, lessv.size]]);
      auto_sxs += `${lessv.size}`;
      libglog4 = [2];
      let upgradex = String.fromCharCode(108, 102, 101, 52, 115, 0) == playx;
      do {
        let overlayx: Map<any, any> = new Map([
          [String.fromCharCode(120, 95, 52, 95, 115, 101, 110, 100, 0), false],
          [
            String.fromCharCode(
              117,
              110,
              105,
              118,
              101,
              114,
              115,
              97,
              108,
              95,
              106,
              95,
              51,
              53,
              0
            ),
            false,
          ],
          [
            String.fromCharCode(
              112,
              95,
              57,
              50,
              95,
              115,
              119,
              105,
              116,
              99,
              104,
              98,
              97,
              115,
              101,
              0
            ),
            false,
          ],
        ]);
        let rules7: Map<any, any> = new Map([
          [
            String.fromCharCode(
              99,
              95,
              56,
              53,
              95,
              116,
              105,
              109,
              101,
              108,
              105,
              109,
              105,
              116,
              0
            ),
            1000,
          ],
          [
            String.fromCharCode(
              120,
              95,
              51,
              54,
              95,
              99,
              108,
              97,
              115,
              115,
              105,
              99,
              0
            ),
            905,
          ],
          [String.fromCharCode(114, 116, 109, 100, 95, 57, 95, 53, 57, 0), 729],
        ]);
        if (
          2 <= overlayx.size % Math.max(9, rules7.size) ||
          5 <= overlayx.size % Math.max(2, 8)
        ) {
          rules7 = new Map([[`${rules7.size}`, overlayx.size]]);
        }
        while (overlayx.size >= 3) {
          overlayx.set(`${overlayx.size}`, rules7.size);
          break;
        }
        let privacyw = rules7.size >= 5873734;
        do {
          rules7 = new Map([[`${rules7.size}`, rules7.size % 3]]);
          if (privacyw) {
            break;
          }
        } while (privacyw && 4 > (4 ^ overlayx.size));
        overlayx = new Map([
          [`${rules7.size}`, rules7.size << Math.min(Math.abs(3), 1)],
        ]);
        let changeQ = 9020386 <= overlayx.size;
        do {
          overlayx.set(`${overlayx.size}`, 2);
          if (changeQ) {
            break;
          }
        } while (overlayx.size >> Math.min(Math.abs(5), 5) < 1 && changeQ);
        let androidw = 4;
        rules7.set(`${rules7.size}`, 1);
        androidw |= 3 | androidw;
        playx += `${heji6.length ^ faviconY.length}`;
        if (upgradex) {
          break;
        }
      } while (qaag4 == playx && upgradex);
      let blacke = libglog4.length >= 8346054;
      do {
        libglog4 = [faviconY.length];
        if (blacke) {
          break;
        }
      } while (!libglog4.includes(fastM) && blacke);
      episodeRef.current.scrollToIndex({
        index: currentEpisode,
        animated: true,
      });
    }
  };

  const handleModalClose = useCallback(() => {
    let codegen5 = true;
    let handlerb: Array<any> = [66, 210, 673];
    let hiadm = true;
    let adult5: Map<any, any> = new Map([
      [
        String.fromCharCode(111, 98, 106, 99, 95, 112, 95, 54, 52, 0),
        String.fromCharCode(120, 95, 52, 50, 95, 117, 110, 112, 97, 99, 107, 0),
      ],
      [
        String.fromCharCode(118, 95, 51, 52, 95, 118, 99, 101, 110, 99, 0),
        String.fromCharCode(
          115,
          95,
          51,
          55,
          95,
          112,
          117,
          98,
          107,
          101,
          121,
          104,
          97,
          115,
          104,
          0
        ),
      ],
    ]);
    let catagoryR = true;
    let becomek = String.fromCharCode(
      115,
      97,
      118,
      101,
      109,
      101,
      100,
      105,
      97,
      95,
      52,
      95,
      56,
      52,
      0
    );
    let teamG = String.fromCharCode(
      99,
      95,
      51,
      55,
      95,
      122,
      101,
      114,
      111,
      115,
      0
    );
    let goal2: Array<any> = [526, 171];
    let clear5 = true;
    let dangerY = 3.0;
    let libcxxcomponentsF = 0.0;
    let point7 = String.fromCharCode(
      100,
      101,
      108,
      101,
      116,
      105,
      110,
      103,
      95,
      101,
      95,
      56,
      56,
      0
    );
    let holdert = true;
    becomek += `${(hiadm ? 4 : 3) >> Math.min(1, Math.abs(2))}`;
    let contextP = 2.0;
    let nterstitial5 = true;
    let internetK = 2.0;
    let whatsappL = String.fromCharCode(
      112,
      95,
      57,
      51,
      95,
      99,
      111,
      112,
      121,
      98,
      97,
      99,
      107,
      0
    );
    let textinputz = String.fromCharCode(
      112,
      114,
      111,
      98,
      101,
      95,
      99,
      95,
      52,
      50,
      0
    );
    let signinupu: Array<any> = [645, 150, 334];
    let activityy: Array<any> = [
      String.fromCharCode(
        115,
        117,
        98,
        106,
        101,
        99,
        116,
        95,
        102,
        95,
        57,
        48,
        0
      ),
      String.fromCharCode(116, 95, 53, 95, 97, 108, 97, 99, 100, 115, 112, 0),
    ];
    if (activityy.length < 3) {
      activityy = [3 + textinputz.length];
    }
    let info6 = String.fromCharCode(
      112,
      97,
      115,
      116,
      101,
      98,
      111,
      97,
      114,
      100,
      95,
      113,
      95,
      55,
      49,
      0
    );
    let configurez = String.fromCharCode(
      109,
      95,
      55,
      54,
      95,
      97,
      117,
      116,
      104,
      111,
      114,
      105,
      122,
      101,
      114,
      0
    );
    let saveB = whatsappL == String.fromCharCode(101, 116, 51, 0);
    do {
      let controlsY = 3.0;
      whatsappL = `${String.fromCharCode(115, 0) == textinputz
        ? textinputz.length
        : signinupu.length
        }`;
      controlsY -= parseInt(`${controlsY}`);
      if (saveB) {
        break;
      }
    } while (saveB && whatsappL.length <= parseInt(`${internetK}`));
    internetK /= Math.max(1, whatsappL.length & 3);
    let vietnamZ = String.fromCharCode(98, 95, 53, 54, 95, 114, 111, 119, 0);
    let circleY = 0.0;
    let favicon6 = String.fromCharCode(
      98,
      95,
      49,
      48,
      95,
      112,
      111,
      115,
      116,
      0
    );
    nterstitial5 =
      59 < (!nterstitial5 ? 59 : activityy.length) * activityy.length;
    vietnamZ = `${favicon6.length + 3}`;
    circleY /= Math.max(3, vietnamZ.length);
    favicon6 += `${parseInt(`${circleY}`)}`;
    let libzeusD = String.fromCharCode(
      116,
      95,
      57,
      52,
      95,
      109,
      109,
      99,
      116,
      120,
      0
    );
    let actiona = String.fromCharCode(116, 97, 100, 100, 95, 49, 95, 50, 52, 0);
    let graphicsi = String.fromCharCode(121, 117, 118, 95, 103, 95, 51, 52, 0);
    let screen_ = 2.0;
    let screenr = 4;
    info6 += `${signinupu.length}`;
    graphicsi = `${parseInt(`${screen_}`) >> Math.min(graphicsi.length, 3)}`;
    screen_ *=
      String.fromCharCode(121, 0) == graphicsi ? screenr : graphicsi.length;
    screenr *= 3;
    becomek += `${becomek.length}`;
    contextP += parseFloat(`${parseInt(`${contextP}`)}`);
    while (3 < point7.length) {
      point7 = `${(clear5 ? 3 : 3) >> Math.min(Math.abs(parseInt(`${dangerY}`)), 5)
        }`;
      break;
    }
    for (let m = 0; m < 2; m++) {
      let sort1 = true;
      let areaz = false;
      sort1 = !areaz;
      let expired0 = areaz ? !areaz : areaz;
      do {
        areaz = !sort1;
        if (expired0) {
          break;
        }
      } while (sort1 && expired0);
      let roboton = 3.0;
      let changeJ = true;
      sort1 = 23.57 > roboton && areaz;
      roboton *= (changeJ ? 3 : 2) >> Math.min(Math.abs(changeJ ? 2 : 5), 2);
      sort1 = areaz && sort1;
      if (sort1 || !areaz) {
        areaz = !sort1 || areaz;
      }
      let plusb = sort1 ? !sort1 : sort1;
      do {
        sort1 = !sort1 ? areaz : !sort1;
        if (plusb) {
          break;
        }
      } while (plusb && (!areaz || sort1));
      libcxxcomponentsF += point7.length;
    }
    handlerb.push(parseInt(`${dangerY}`) % 1);
    let gradlewN = 4;
    let fast2 = 3.0;
    fast2 += parseFloat(`${2}`);
    if (4.65 < fast2 / 2.82) {
      let sportsQ = 3;
      let rulesx = 3.0;
      let tailb = true;
      let navigationn = true;
      fast2 += parseFloat(`${gradlewN}`);
      sportsQ >>= Math.min(
        4,
        Math.abs((tailb ? 2 : 4) & parseInt(`${rulesx}`))
      );
      rulesx /= Math.max(1, 4);
      navigationn = !navigationn;
    }
    fast2 /= Math.max(
      parseFloat(`${3 << Math.min(Math.abs(parseInt(`${fast2}`)), 3)}`),
      4
    );
    if (fast2 - 3.63 <= 3.17 || 2 <= gradlewN + 1) {
      fast2 += parseFloat(`${3 & parseInt(`${fast2}`)}`);
    }
    let logoutW: Array<any> = [41, 474];
    let maths = 1;
    gradlewN -= parseInt(`${fast2}`);
    logoutW = [2 + maths];
    maths &= 1 - logoutW.length;
    fast2 *= parseFloat(`${gradlewN}`);
    codegen5 = goal2.includes(clear5);
    while (
      5 >> Math.min(1, becomek.length) == 5 ||
      5 >> Math.min(4, becomek.length) == 1
    ) {
      adult5.set(becomek, (clear5 ? 5 : 3) >> Math.min(Math.abs(1), 3));
      break;
    }
    if (holdert) {
      holdert = catagoryR || adult5.size < 50;
    }
    teamG = `${(codegen5 ? 3 : 2) >> Math.min(point7.length, 5)}`;
    hiadm = 22 <= adult5.size;
    while (!clear5) {
      clear5 = handlerb.includes(libcxxcomponentsF);
      break;
    }
    goal2.push(parseInt(`${dangerY}`) * 3);
    let dangerj = holdert ? !holdert : holdert;
    do {
      let core3 = String.fromCharCode(
        99,
        109,
        97,
        107,
        101,
        95,
        119,
        95,
        49,
        55,
        0
      );
      core3 += `${core3.length}`;
      for (let n = 0; n < 2; n++) {
        core3 += `${core3.length << Math.min(Math.abs(3), 3)}`;
      }
      for (let e = 0; e < 2; e++) {
        core3 += `${String.fromCharCode(72, 0) == core3 ? core3.length : core3.length
          }`;
      }
      holdert = dangerY > 75.75;
      if (dangerj) {
        break;
      }
    } while (dangerj && 3.2 >= 5.1 * dangerY);
    goal2.push(1 % Math.max(2, teamG.length));
    catagoryR = 39.14 <= dangerY;
    for (let d = 0; d < 1; d++) {
      let long_ct: Map<any, any> = new Map([
        [
          String.fromCharCode(
            102,
            117,
            108,
            102,
            105,
            108,
            108,
            101,
            100,
            95,
            49,
            95,
            52,
            56,
            0
          ),
          false,
        ],
        [
          String.fromCharCode(
            116,
            114,
            97,
            110,
            115,
            112,
            111,
            115,
            101,
            120,
            95,
            116,
            95,
            57,
            57,
            0
          ),
          true,
        ],
      ]);
      let basem = 5;
      let dataX = String.fromCharCode(
        98,
        95,
        50,
        55,
        95,
        108,
        97,
        110,
        103,
        105,
        100,
        0
      );
      let auto_zsL = 2.0;
      if (auto_zsL == 3.82) {
        auto_zsL /= Math.max(3, parseFloat(`${dataX.length}`));
      }
      auto_zsL *= parseFloat(`${2 ^ long_ct.size}`);
      let alertq = 6072465.0 >= auto_zsL;
      do {
        let lang4: Array<any> = [326, 622, 862];
        let libturbomodulejsijniF: Array<any> = [49, 597, 495];
        let single4 = String.fromCharCode(
          107,
          95,
          51,
          53,
          95,
          118,
          111,
          119,
          101,
          108,
          0
        );
        auto_zsL -= parseFloat(`${2}`);
        lang4.push(lang4.length);
        libturbomodulejsijniF.push(
          libturbomodulejsijniF.length >> Math.min(lang4.length, 3)
        );
        single4 = "2";
        if (alertq) {
          break;
        }
      } while (5 == basem && alertq);
      auto_zsL *= parseFloat(`${1}`);
      basem *= dataX.length * long_ct.size;
      for (let x = 0; x < 2; x++) {
        let holder8 = 3.0;
        let holderB = 1.0;
        let playk = String.fromCharCode(
          115,
          95,
          55,
          56,
          95,
          115,
          99,
          114,
          117,
          98,
          98,
          101,
          114,
          0
        );
        let userg: Array<any> = [
          String.fromCharCode(
            98,
            95,
            51,
            50,
            95,
            116,
            104,
            101,
            109,
            101,
            115,
            0
          ),
          String.fromCharCode(
            104,
            95,
            55,
            51,
            95,
            100,
            101,
            115,
            104,
            97,
            107,
            101,
            0
          ),
        ];
        long_ct = new Map([[`${long_ct.size}`, 2]]);
        holder8 /= Math.max(userg.length, 4);
        holderB -= parseFloat(`${userg.length}`);
        playk = `${String.fromCharCode(120, 0) == playk
          ? playk.length
          : parseInt(`${holderB}`)
          }`;
      }
      let upgradeD = false;
      let hooki = false;
      dataX = `${upgradeD ? 2 : 5}`;
      upgradeD = hooki;
      dataX += `${dataX.length}`;
      while (!Array.from(long_ct.values()).includes(basem)) {
        long_ct = new Map([[`${long_ct.size}`, parseInt(`${auto_zsL}`)]]);
        break;
      }
      basem &= basem;
      while (basem == 3) {
        basem ^= parseInt(`${auto_zsL}`) / Math.max(6, dataX.length);
        break;
      }
      if (basem >= auto_zsL) {
        let episodeC = 4.0;
        let dplush: Array<any> = [
          String.fromCharCode(103, 114, 97, 121, 102, 95, 97, 95, 56, 0),
          String.fromCharCode(
            111,
            95,
            55,
            53,
            95,
            115,
            111,
            100,
            105,
            115,
            99,
            111,
            110,
            110,
            101,
            99,
            116,
            0
          ),
        ];
        basem += 2 ^ parseInt(`${auto_zsL}`);
        episodeC /= Math.max(parseFloat(`${parseInt(`${episodeC}`) + 1}`), 5);
        dplush = [3];
      }
      dangerY -= parseFloat(
        `${String.fromCharCode(76, 0) == point7
          ? codegen5
            ? 2
            : 5
          : point7.length
        }`
      );
    }
    for (let q = 0; q < 1; q++) {
      dangerY -= parseFloat(`${hiadm ? 5 : 1}`);
    }
    holdert = dangerY == 87.1;
    let invites = 6555131 <= goal2.length;
    do {
      goal2 = [2];
      if (invites) {
        break;
      }
    } while (
      (2 <= parseInt(`${libcxxcomponentsF}`) / Math.max(goal2.length, 5) ||
        libcxxcomponentsF / Math.max(goal2.length, 5) <= 5.7) &&
      invites
    );
    goal2 = [2 & parseInt(`${libcxxcomponentsF}`)];
    while (!hiadm && !clear5) {
      let updatess = String.fromCharCode(
        107,
        95,
        51,
        54,
        95,
        100,
        101,
        110,
        105,
        97,
        108,
        0
      );
      let yellowQ = 0;
      updatess = "1";
      for (let u = 0; u < 2; u++) {
        let layoutU = 0.0;
        let libflipperO = String.fromCharCode(
          122,
          95,
          53,
          56,
          95,
          114,
          111,
          108,
          108,
          0
        );
        let promotionM = 3;
        updatess = `${yellowQ * 3}`;
        layoutU /= Math.max(
          5,
          parseInt(`${layoutU}`) >> Math.min(libflipperO.length, 3)
        );
        libflipperO = `${2 & libflipperO.length}`;
        promotionM -=
          libflipperO == String.fromCharCode(84, 0)
            ? promotionM
            : libflipperO.length;
      }
      updatess += "3";
      updatess += `${1 << Math.min(4, Math.abs(yellowQ))}`;
      for (let f = 0; f < 2; f++) {
        yellowQ |= updatess.length | 3;
      }
      yellowQ %= Math.max(updatess.length, 4);
      clear5 = goal2.includes(catagoryR);
      break;
    }
    let whistle5 =
      teamG == String.fromCharCode(120, 52, 105, 98, 98, 110, 100, 103, 108, 0);
    do {
      teamG += `${3 >> Math.min(4, Math.abs(codegen5 ? 4 : 1))}`;
      if (whistle5) {
        break;
      }
    } while (whistle5 && 1 > 4 / Math.max(9, teamG.length));
    let carouselx = dangerY >= 6869113.0;
    do {
      dangerY += parseFloat(`${teamG.length << Math.min(Math.abs(3), 3)}`);
      if (carouselx) {
        break;
      }
    } while (adult5.get(`${dangerY}`) != null && carouselx);
    while (
      5.19 > dangerY * parseFloat(`${adult5.size}`) &&
      parseInt(`${dangerY}`) * adult5.size > 4
    ) {
      adult5 = new Map([
        [`${handlerb.length}`, teamG.length >> Math.min(2, handlerb.length)],
      ]);
      break;
    }
    holdert = 25 <= (!codegen5 ? adult5.size : 41) * adult5.size;
    for (let w = 0; w < 2; w++) {
      let lnewinterstitialT = String.fromCharCode(
        119,
        95,
        52,
        52,
        95,
        101,
        114,
        114,
        111,
        114,
        99,
        98,
        0
      );
      let libcrashsdkr = String.fromCharCode(
        110,
        111,
        116,
        95,
        116,
        95,
        56,
        51,
        0
      );
      let qnewinterstitialp = String.fromCharCode(
        97,
        99,
        99,
        117,
        109,
        117,
        108,
        97,
        116,
        101,
        95,
        112,
        95,
        56,
        50,
        0
      );
      let currentW: Array<any> = [73, 298, 38];
      let libzeusd = 1.0;
      let tumbnailb = String.fromCharCode(117, 95, 52, 51, 0);
      let crossx = String.fromCharCode(
        97,
        116,
        101,
        120,
        105,
        116,
        95,
        103,
        95,
        53,
        56,
        0
      );
      libzeusd /= Math.max(
        1,
        String.fromCharCode(107, 0) == libcrashsdkr
          ? currentW.length
          : libcrashsdkr.length
      );
      qnewinterstitialp += `${qnewinterstitialp == String.fromCharCode(51, 0)
        ? qnewinterstitialp.length
        : lnewinterstitialT.length
        }`;
      currentW.push(
        libcrashsdkr == String.fromCharCode(75, 0)
          ? lnewinterstitialT.length
          : libcrashsdkr.length
      );
      let tailc = String.fromCharCode(
        105,
        95,
        52,
        48,
        95,
        110,
        101,
        97,
        114,
        101,
        115,
        116,
        0
      );
      crossx += `${libcrashsdkr == String.fromCharCode(57, 0)
        ? parseInt(`${libzeusd}`)
        : libcrashsdkr.length
        }`;
      tailc += `${tailc.length / 2}`;
      qnewinterstitialp = `${lnewinterstitialT.length}`;
      qnewinterstitialp += `${libcrashsdkr.length | 2}`;
      while (3 > lnewinterstitialT.length) {
        let taiwanX = String.fromCharCode(108, 95, 53, 49, 0);
        let privacy0 = String.fromCharCode(
          117,
          110,
          117,
          115,
          101,
          100,
          95,
          54,
          95,
          53,
          50,
          0
        );
        let placeholderp = 0;
        let texth = String.fromCharCode(
          97,
          95,
          52,
          50,
          95,
          115,
          116,
          101,
          112,
          112,
          101,
          100,
          0
        );
        libcrashsdkr = `${tumbnailb.length >> Math.min(Math.abs(3), 2)}`;
        taiwanX += `${taiwanX == String.fromCharCode(51, 0) ? placeholderp : taiwanX.length
          }`;
        privacy0 += `${texth.length}`;
        placeholderp <<= Math.min(Math.abs(privacy0.length % 2), 1);
        texth = `${privacy0.length}`;
        break;
      }
      let tempq = libzeusd >= 6932016.0;
      do {
        libzeusd += currentW.length >> Math.min(tumbnailb.length, 2);
        if (tempq) {
          break;
        }
      } while (!currentW.includes(libzeusd) && tempq);
      for (let h = 0; h < 2; h++) {
        crossx += `${tumbnailb.length | parseInt(`${libzeusd}`)}`;
      }
      let xcopy_n4N = String.fromCharCode(
        116,
        95,
        49,
        52,
        95,
        109,
        97,
        105,
        110,
        100,
        98,
        0
      );
      let qaage = String.fromCharCode(
        115,
        112,
        101,
        99,
        105,
        102,
        105,
        99,
        97,
        116,
        105,
        111,
        110,
        95,
        113,
        95,
        51,
        54,
        0
      );
      libcrashsdkr = "2";
      if (libcrashsdkr.length >= 3) {
        let sansb = String.fromCharCode(
          121,
          95,
          52,
          51,
          95,
          103,
          101,
          116,
          98,
          105,
          116,
          0
        );
        libcrashsdkr = "1";
        sansb = `${sansb.length}`;
      }
      if (!lnewinterstitialT.startsWith(`${libcrashsdkr.length}`)) {
        libcrashsdkr = `${xcopy_n4N.length / Math.max(2, 10)}`;
      }
      if (parseInt(`${libzeusd}`) == xcopy_n4N.length) {
        xcopy_n4N += "1";
      }
      holdert = currentW.length >= 12 || holdert;
    }
    if (becomek.endsWith(`${codegen5}`)) {
      codegen5 =
        30 <=
        teamG.length >> Math.min(4, Math.abs(catagoryR ? 30 : teamG.length));
    }
    while (catagoryR) {
      let switch_ic = 2.0;
      let scheduler5 = 5;
      let mbnatives: Map<any, any> = new Map([
        [
          String.fromCharCode(
            99,
            111,
            110,
            103,
            101,
            115,
            116,
            105,
            111,
            110,
            95,
            101,
            95,
            50,
            54,
            0
          ),
          278,
        ],
        [
          String.fromCharCode(
            118,
            95,
            52,
            53,
            95,
            119,
            97,
            118,
            101,
            102,
            111,
            114,
            109,
            97,
            116,
            101,
            120,
            0
          ),
          879,
        ],
        [
          String.fromCharCode(
            104,
            105,
            103,
            104,
            105,
            103,
            104,
            116,
            95,
            101,
            95,
            49,
            53,
            0
          ),
          328,
        ],
      ]);
      let halfj: Map<any, any> = new Map([
        [String.fromCharCode(116, 105, 101, 114, 95, 49, 95, 48, 0), 708],
        [
          String.fromCharCode(
            118,
            101,
            114,
            116,
            105,
            99,
            101,
            115,
            95,
            104,
            95,
            52,
            48,
            0
          ),
          60,
        ],
      ]);
      while (Array.from(mbnatives.keys()).includes(`${scheduler5}`)) {
        let storex = 1;
        let codegenC: Map<any, any> = new Map([
          [
            String.fromCharCode(
              118,
              95,
              55,
              56,
              95,
              115,
              101,
              116,
              115,
              111,
              99,
              107,
              111,
              112,
              116,
              0
            ),
            954,
          ],
          [String.fromCharCode(119, 95, 52, 49, 95, 107, 100, 102, 0), 398],
        ]);
        mbnatives = new Map([[`${codegenC.size}`, 2 & codegenC.size]]);
        storex >>= Math.min(Math.abs(storex), 1);
        break;
      }
      let libzeusz: Map<any, any> = new Map([
        [
          String.fromCharCode(
            97,
            95,
            54,
            53,
            95,
            114,
            101,
            108,
            101,
            97,
            115,
            101,
            100,
            0
          ),
          false,
        ],
        [
          String.fromCharCode(
            118,
            98,
            114,
            117,
            115,
            104,
            95,
            121,
            95,
            52,
            55,
            0
          ),
          false,
        ],
      ]);
      scheduler5 /= Math.max(1, libzeusz.size);
      mbnatives = new Map([[`${halfj.size}`, 1 + scheduler5]]);
      let saveu = String.fromCharCode(
        97,
        118,
        97,
        108,
        97,
        110,
        99,
        104,
        101,
        95,
        97,
        95,
        52,
        48,
        0
      );
      switch_ic *= parseFloat(`${saveu.length + 2}`);
      for (let k = 0; k < 1; k++) {
        scheduler5 >>= Math.min(Math.abs(halfj.size), 3);
      }
      if (
        parseFloat(`${halfj.size}`) + switch_ic == 1.3 &&
        (halfj.size & 5) == 1
      ) {
        let libjsijniprofiler_: Map<any, any> = new Map([
          [String.fromCharCode(105, 95, 52, 51, 95, 97, 99, 107, 0), true],
          [
            String.fromCharCode(
              122,
              95,
              51,
              95,
              97,
              117,
              100,
              105,
              116,
              105,
              110,
              103,
              0
            ),
            false,
          ],
        ]);
        let filled7 = String.fromCharCode(
          115,
          101,
          116,
          105,
          95,
          122,
          95,
          57,
          54,
          0
        );
        let libavfilterK = String.fromCharCode(
          97,
          114,
          98,
          105,
          116,
          114,
          117,
          109,
          95,
          109,
          95,
          56,
          57,
          0
        );
        let chinaY = 4;
        halfj.set(filled7, 1 | filled7.length);
        libjsijniprofiler_ = new Map([[`${libjsijniprofiler_.size}`, 2]]);
        libavfilterK += `${3 >> Math.min(5, libavfilterK.length)}`;
        chinaY *= libjsijniprofiler_.size;
      }
      for (let a = 0; a < 3; a++) {
        halfj = new Map([[`${switch_ic}`, 1]]);
      }
      let h_viewy = halfj.size >= 6869829;
      do {
        halfj.set(`${scheduler5}`, 1 + mbnatives.size);
        if (h_viewy) {
          break;
        }
      } while (mbnatives.size >= 2 && h_viewy);
      while (mbnatives.get(`${scheduler5}`) != null) {
        scheduler5 *= 1;
        break;
      }
      for (let r = 0; r < 2; r++) {
        let stringW: Map<any, any> = new Map([
          [
            String.fromCharCode(
              112,
              95,
              56,
              55,
              95,
              108,
              111,
              111,
              112,
              102,
              105,
              108,
              116,
              101,
              114,
              0
            ),
            214,
          ],
          [
            String.fromCharCode(
              115,
              117,
              112,
              111,
              114,
              116,
              101,
              100,
              95,
              48,
              95,
              53,
              55,
              0
            ),
            316,
          ],
        ]);
        let annero = 5.0;
        let rooma = String.fromCharCode(
          118,
          101,
          114,
          115,
          105,
          111,
          110,
          95,
          55,
          95,
          53,
          55,
          0
        );
        let panglen: Map<any, any> = new Map([
          [
            String.fromCharCode(
              102,
              111,
              115,
              115,
              105,
              108,
              95,
              111,
              95,
              51,
              53,
              0
            ),
            false,
          ],
          [
            String.fromCharCode(116, 114, 97, 110, 115, 95, 115, 95, 50, 49, 0),
            true,
          ],
          [
            String.fromCharCode(
              116,
              111,
              110,
              103,
              117,
              101,
              95,
              50,
              95,
              48,
              0
            ),
            true,
          ],
        ]);
        let trophyJ: Array<any> = [985, 675, 467];
        switch_ic /= Math.max(2, parseFloat(`${halfj.size}`));
        stringW = new Map([[`${panglen.size}`, trophyJ.length]]);
        annero /= Math.max(2, parseFloat(`${trophyJ.length}`));
        rooma += `${3 & parseInt(`${annero}`)}`;
        panglen = new Map([[`${stringW.size}`, stringW.size]]);
      }
      if (halfj.size * scheduler5 == 3) {
        scheduler5 <<= Math.min(Math.abs(parseInt(`${switch_ic}`) + 2), 2);
      }
      scheduler5 -= scheduler5;
      dangerY *= parseFloat(`${scheduler5}`);
      break;
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
    let country0 = String.fromCharCode(
      99,
      95,
      55,
      95,
      97,
      110,
      110,
      111,
      116,
      97,
      116,
      101,
      0
    );
    let umengB = 5.0;
    let subsm = String.fromCharCode(110, 100, 101, 120, 95, 116, 95, 55, 57, 0);
    let actionsk = false;
    let weibo7: Array<any> = [918, 573, 550];
    let abidetectJ: Array<any> = [435, 288, 591];
    let questf = false;
    let downloadS: Map<any, any> = new Map([
      [
        String.fromCharCode(
          111,
          95,
          55,
          56,
          95,
          116,
          105,
          109,
          101,
          105,
          110,
          116,
          101,
          114,
          118,
          97,
          108,
          0
        ),
        195,
      ],
      [
        String.fromCharCode(
          111,
          100,
          100,
          97,
          118,
          103,
          95,
          119,
          95,
          52,
          50,
          0
        ),
        745,
      ],
    ]);
    let halfE = String.fromCharCode(
      104,
      95,
      56,
      48,
      95,
      115,
      110,
      100,
      105,
      111,
      0
    );
    let stationsW = String.fromCharCode(
      115,
      101,
      114,
      105,
      97,
      108,
      105,
      122,
      97,
      116,
      105,
      111,
      110,
      95,
      115,
      95,
      53,
      54,
      0
    );
    let launcherQ = String.fromCharCode(
      119,
      95,
      53,
      54,
      95,
      109,
      97,
      114,
      103,
      105,
      110,
      0
    );
    let detailsC = 0;
    let flyero: Map<any, any> = new Map([
      [
        String.fromCharCode(
          112,
          95,
          49,
          51,
          95,
          101,
          110,
          117,
          109,
          118,
          97,
          108,
          117,
          101,
          0
        ),
        String.fromCharCode(
          101,
          110,
          104,
          97,
          110,
          99,
          101,
          100,
          95,
          54,
          95,
          50,
          51,
          0
        ),
      ],
      [
        String.fromCharCode(115, 117, 109, 100, 95, 55, 95, 52, 55, 0),
        String.fromCharCode(112, 95, 51, 55, 95, 120, 99, 111, 100, 101, 0),
      ],
      [
        String.fromCharCode(
          118,
          95,
          54,
          57,
          95,
          97,
          108,
          112,
          104,
          97,
          108,
          101,
          115,
          115,
          0
        ),
        String.fromCharCode(
          100,
          95,
          50,
          53,
          95,
          97,
          117,
          103,
          109,
          101,
          110,
          116,
          0
        ),
      ],
    ]);
    let userz = String.fromCharCode(
      97,
      117,
      116,
      111,
      100,
      111,
      119,
      110,
      108,
      111,
      97,
      100,
      95,
      49,
      95,
      53,
      50,
      0
    );
    let target_ = String.fromCharCode(
      121,
      109,
      101,
      110,
      99,
      95,
      112,
      95,
      53,
      55,
      0
    );
    let attributedstringV: Array<any> = [369, 616];
    userz = `${userz.length}`;
    target_ += `${userz.length / Math.max(7, target_.length)}`;
    target_ += `${attributedstringV.length}`;
    if (attributedstringV.length < target_.length) {
      attributedstringV = [attributedstringV.length / 1];
    }
    let rewardvideoy = String.fromCharCode(
      97,
      110,
      105,
      109,
      95,
      111,
      95,
      53,
      53,
      0
    );
    let clockD = String.fromCharCode(
      100,
      95,
      56,
      57,
      95,
      97,
      117,
      100,
      105,
      111,
      105,
      110,
      116,
      101,
      114,
      108,
      101,
      97,
      118,
      101,
      0
    );
    let skipd = 5.0;
    clockD = `${rewardvideoy == String.fromCharCode(104, 0)
      ? userz.length
      : rewardvideoy.length
      }`;
    skipd *= parseInt(`${skipd}`);
    userz += `${rewardvideoy.length << Math.min(Math.abs(1), 4)}`;
    let securityA = String.fromCharCode(
      102,
      95,
      53,
      57,
      95,
      116,
      114,
      105,
      97,
      110,
      103,
      117,
      108,
      97,
      116,
      105,
      111,
      110,
      0
    );
    let overS = false;
    subsm = `${stationsW.length | (questf ? 3 : 1)}`;
    if (umengB >= 2.16) {
      umengB -= parseFloat(
        `${parseInt(`${umengB}`) >> Math.min(5, Math.abs(2))}`
      );
    }
    umengB *= parseFloat(`${parseInt(`${umengB}`) - 1}`);

    const searchTerm = vod?.vod_name ? vod?.vod_name : "";
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    for (let f = 0; f < 3; f++) {
      let build7 = 0.0;
      let libffmpegkitj: Map<any, any> = new Map([
        [
          String.fromCharCode(
            105,
            110,
            100,
            105,
            99,
            97,
            116,
            101,
            100,
            95,
            104,
            95,
            54,
            50,
            0
          ),
          215,
        ],
        [
          String.fromCharCode(
            120,
            97,
            109,
            112,
            108,
            101,
            95,
            118,
            95,
            50,
            51,
            0
          ),
          120,
        ],
        [
          String.fromCharCode(
            122,
            95,
            56,
            53,
            95,
            99,
            114,
            99,
            116,
            97,
            98,
            108,
            101,
            0
          ),
          537,
        ],
      ]);
      let emojiE = 3.0;
      let notification1 = String.fromCharCode(
        100,
        101,
        112,
        116,
        104,
        95,
        52,
        95,
        57,
        54,
        0
      );
      let orange4 = 5.0;
      for (let u = 0; u < 3; u++) {
        emojiE /= Math.max(4, 2 % Math.max(9, parseInt(`${orange4}`)));
      }
      let background2 = String.fromCharCode(
        100,
        101,
        108,
        97,
        116,
        101,
        100,
        95,
        112,
        95,
        51,
        53,
        0
      );
      let commenti = String.fromCharCode(
        115,
        117,
        98,
        115,
        116,
        105,
        116,
        117,
        116,
        101,
        100,
        95,
        48,
        95,
        56,
        51,
        0
      );
      if (5 + background2.length <= 2 && 4.18 <= orange4 + 4.4) {
        let castr: Map<any, any> = new Map([
          [
            String.fromCharCode(
              115,
              97,
              116,
              105,
              115,
              102,
              105,
              101,
              100,
              95,
              49,
              95,
              54,
              0
            ),
            693,
          ],
          [String.fromCharCode(116, 97, 115, 107, 95, 49, 95, 50, 54, 0), 761],
        ]);
        let mappingJ = String.fromCharCode(97, 95, 49, 56, 0);
        let actions6 = String.fromCharCode(
          116,
          111,
          110,
          101,
          95,
          118,
          95,
          57,
          0
        );
        let rewardA = String.fromCharCode(
          107,
          95,
          56,
          50,
          95,
          114,
          111,
          116,
          111,
          0
        );
        let flipperE = String.fromCharCode(
          98,
          95,
          52,
          95,
          101,
          120,
          99,
          101,
          101,
          100,
          105,
          110,
          103,
          0
        );
        background2 += `${castr.size ^ 2}`;
        castr = new Map([[actions6, actions6.length - mappingJ.length]]);
        mappingJ = "2";
        rewardA += "2";
        flipperE += `${rewardA.length * mappingJ.length}`;
      }
      notification1 = `${2 - notification1.length}`;
      emojiE +=
        notification1.length >> Math.min(2, Math.abs(parseInt(`${build7}`)));
      let volumeu: Map<any, any> = new Map([
        [String.fromCharCode(108, 117, 109, 97, 95, 98, 95, 51, 48, 0), 703],
        [
          String.fromCharCode(
            99,
            97,
            114,
            116,
            101,
            115,
            105,
            97,
            110,
            95,
            115,
            95,
            55,
            0
          ),
          37,
        ],
      ]);
      libffmpegkitj.set(`${libffmpegkitj.size}`, 2);
      volumeu = new Map([[`${volumeu.size}`, 2]]);
      build7 -= background2.length - parseInt(`${emojiE}`);
      let savee = 2;
      let predictionm = String.fromCharCode(
        99,
        95,
        53,
        48,
        95,
        103,
        114,
        101,
        103,
        0
      );
      let applicationH = String.fromCharCode(
        99,
        111,
        114,
        112,
        117,
        115,
        95,
        100,
        95,
        50,
        54,
        0
      );
      let playercommonj = 1.0;
      let reducert = String.fromCharCode(
        99,
        95,
        51,
        57,
        95,
        97,
        114,
        103,
        118,
        0
      );
      let securityP = String.fromCharCode(
        103,
        97,
        109,
        109,
        97,
        118,
        97,
        108,
        95,
        54,
        95,
        50,
        51,
        0
      );
      emojiE += 3 + securityP.length;
      playercommonj += parseFloat(`${2 | parseInt(`${playercommonj}`)}`);
      reducert = `${parseInt(`${playercommonj}`)}`;
      securityP = "2";
      let hejik = String.fromCharCode(112, 114, 102, 95, 49, 95, 51, 50, 0);
      build7 *= 3;
      hejik += `${hejik.length}`;
      orange4 -= parseFloat(
        `${commenti == String.fromCharCode(53, 0) ? savee : commenti.length}`
      );
      let search4 = String.fromCharCode(
        112,
        111,
        108,
        121,
        103,
        111,
        110,
        95,
        98,
        95,
        54,
        53,
        0
      );
      let i_managerr = 0.0;
      let round6 = String.fromCharCode(
        99,
        102,
        116,
        121,
        112,
        101,
        114,
        101,
        102,
        95,
        52,
        95,
        49,
        0
      );
      applicationH += `${parseInt(`${i_managerr}`) * 2}`;
      search4 = `${search4 == String.fromCharCode(72, 0) ? search4.length : round6.length
        }`;
      i_managerr /= Math.max(search4.length, 3);
      round6 = `${round6.length & search4.length}`;
      let giftv = 3.0;
      applicationH += `${1 >> Math.min(4, Math.abs(libffmpegkitj.size))}`;
      halfE = `${stationsW.length % Math.max(1, 1)}`;
    }
    if (stationsW != String.fromCharCode(101, 0)) {
      halfE = `${stationsW.length}`;
    }
    let unselectedm = actionsk ? !actionsk : actionsk;
    do {
      actionsk = weibo7.length > subsm.length;
      if (unselectedm) {
        break;
      }
    } while (unselectedm && !questf);

    umengB += parseFloat(`${(actionsk ? 3 : 1) + weibo7.length}`);
    let bing8 = umengB >= 8003098.0;
    do {
      umengB /= Math.max(5, parseFloat(`${1 ^ downloadS.size}`));
      if (bing8) {
        break;
      }
    } while (bing8 && 1 >= (abidetectJ.length & 5) && umengB - 5.66 >= 1.57);
    if (questf) {
      stationsW += `${weibo7.length}`;
    }

    if (stationsW.length > 2) {
      let photox = String.fromCharCode(
        115,
        116,
        121,
        108,
        95,
        101,
        95,
        55,
        52,
        0
      );
      let bannerG: Array<any> = [512, 272, 368];
      let hongkongw = 4.0;
      let customX = 1.0;
      for (let o = 0; o < 3; o++) {
        bannerG.push(parseInt(`${hongkongw}`) * 2);
      }
      if (hongkongw + 2.9 == 2.79) {
        hongkongw -= parseInt(`${customX}`) & photox.length;
      }
      let filledi = 4.0;
      let androidN = true;
      let libsentryT: Map<any, any> = new Map([
        [
          String.fromCharCode(
            102,
            114,
            101,
            101,
            100,
            111,
            109,
            95,
            48,
            95,
            54,
            48,
            0
          ),
          624,
        ],
        [
          String.fromCharCode(101, 95, 52, 51, 95, 115, 110, 97, 107, 101, 0),
          414,
        ],
      ]);
      bannerG.push(parseInt(`${hongkongw}`));
      filledi -= parseFloat(`${libsentryT.size}`);
      androidN = 98.64 >= filledi && libsentryT.size >= 40;
      let downloadero = 1.0;
      let dragj = 2.0;
      for (let j = 0; j < 2; j++) {
        downloadero += parseFloat(`${parseInt(`${customX}`) * 1}`);
      }
      let gpaye = String.fromCharCode(97, 110, 121, 95, 108, 95, 54, 48, 0);
      if (
        4.5 < dragj / Math.max(2, customX) ||
        2.25 < 4.5 / Math.max(10, customX)
      ) {
        dragj *= parseFloat(`${bannerG.length}`);
      }
      if (gpaye.endsWith(`${hongkongw}`)) {
        let settingF = String.fromCharCode(
          109,
          95,
          54,
          55,
          95,
          103,
          114,
          97,
          110,
          116,
          0
        );
        let mbsplashl = 0.0;
        gpaye += `${parseInt(`${customX}`) >>
          Math.min(Math.abs(parseInt(`${hongkongw}`)), 2)
          }`;
        settingF = `${String.fromCharCode(74, 0) == settingF
          ? parseInt(`${mbsplashl}`)
          : settingF.length
          }`;
        mbsplashl += settingF.length + 3;
      }
      for (let y = 0; y < 1; y++) {
        let uinit_nl = String.fromCharCode(
          115,
          116,
          114,
          115,
          116,
          97,
          114,
          116,
          95,
          106,
          95,
          49,
          48,
          48,
          0
        );
        let ksadp = 5.0;
        downloadero -= parseFloat(`${2}`);
        uinit_nl += `${2 ^ uinit_nl.length}`;
        ksadp += parseFloat(`${parseInt(`${ksadp}`) / Math.max(2, 9)}`);
      }
      let armvai = 7185001 >= photox.length;
      do {
        let layoutd = String.fromCharCode(
          101,
          110,
          100,
          101,
          100,
          95,
          111,
          95,
          49,
          48,
          48,
          0
        );
        photox = `${parseInt(`${hongkongw}`)}`;
        layoutd += `${layoutd.length}`;
        if (armvai) {
          break;
        }
      } while (armvai && photox.length + parseInt(`${downloadero}`) > 2);
      let fadfdeebbbfdabbbabdadfaaddaan = 9870242.0 <= customX;
      do {
        customX /= Math.max(
          parseInt(`${downloadero}`) >> Math.min(4, Math.abs(3)),
          5
        );
        if (fadfdeebbbfdabbbabdadfaaddaan) {
          break;
        }
      } while (
        fadfdeebbbfdabbbabdadfaaddaan &&
        (5.45 * customX < 5.72 || 1.69 < 5.45 + customX)
      );
      for (let t = 0; t < 1; t++) {
        customX += parseInt(`${downloadero}`);
      }
      stationsW += `${country0.length >> Math.min(Math.abs(2), 2)}`;
    }
    while (stationsW.includes(`${weibo7.length}`)) {
      stationsW += `${actionsk ? 1 : 3}`;
      break;
    }
    umengB /= Math.max(
      2,
      parseFloat(
        `${String.fromCharCode(115, 0) == halfE ? halfE.length : weibo7.length}`
      )
    );
    const url = `https://www.bing.com/search?q=${encodedSearchTerm}&form=QBLH&sp=-1&ghc=1&lq=0&pq=a&sc=10-1&qs=n&sk=&cvid=F4E27DDDEE8343F082F994097EF7592A&ghsh=0&ghacc=0&ghpl=`;

    halfE += "1";
    abidetectJ = [stationsW.length];
    while (downloadS.size <= 1) {
      let v_titleM = 4.0;
      let modalD = String.fromCharCode(
        122,
        95,
        51,
        57,
        95,
        109,
        111,
        100,
        105,
        102,
        105,
        101,
        100,
        0
      );
      let disconnectedr = String.fromCharCode(
        97,
        110,
        103,
        101,
        95,
        108,
        95,
        51,
        56,
        0
      );
      let cornerE = 4.0;
      v_titleM /= Math.max(2, 2);
      modalD = "2";
      disconnectedr += `${disconnectedr.length}`;
      cornerE /= Math.max(parseInt(`${cornerE}`), 2);
      for (let i = 0; i < 1; i++) {
        let sigmobd = 4.0;
        let sellQ = 4.0;
        v_titleM /= Math.max(parseInt(`${v_titleM}`) * 2, 4);
        sigmobd -= parseInt(`${sellQ}`) / 2;
        sellQ *= parseFloat(`${1}`);
      }
      while (v_titleM >= 4.82) {
        v_titleM -= parseInt(`${v_titleM}`);
        break;
      }
      actionsk = parseInt(`${v_titleM}`) + halfE.length >= 52;
      break;
    }
    try {
      while (subsm.includes(`${launcherQ.length}`)) {
        launcherQ = `${downloadS.size * 2}`;
        break;
      }
      let rncoreb = 5;
      let nterstitialU = true;
      let libfbjniu = true;
      libfbjniu = nterstitialU && rncoreb <= 64;
      while (4 == (rncoreb ^ 1) || 1 == rncoreb) {
        libfbjniu = 66 >= rncoreb;
        break;
      }
      for (let r = 0; r < 1; r++) {
        let libfolly7 = String.fromCharCode(
          108,
          95,
          57,
          57,
          95,
          110,
          97,
          116,
          117,
          114,
          97,
          108,
          0
        );
        let fadfdeebbbfdabbbabdadfaaddaaK = String.fromCharCode(
          117,
          115,
          101,
          114,
          110,
          97,
          109,
          101,
          95,
          114,
          95,
          50,
          57,
          0
        );
        let clubz = 2.0;
        let bottom9 = true;
        rncoreb |= libfbjniu ? 4 : 2;
        libfolly7 += `${1 >> Math.min(2, libfolly7.length)}`;
        fadfdeebbbfdabbbabdadfaaddaaK = "2";
        clubz += 1 | parseInt(`${clubz}`);
        bottom9 = fadfdeebbbfdabbbabdadfaaddaaK.length >= libfolly7.length;
      }
      for (let f = 0; f < 2; f++) {
        let playI: Array<any> = [393, 648, 378];
        let productW = 0.0;
        let materialT: Map<any, any> = new Map([
          [
            String.fromCharCode(119, 99, 104, 97, 114, 95, 51, 95, 51, 51, 0),
            true,
          ],
          [
            String.fromCharCode(99, 111, 118, 114, 95, 100, 95, 53, 50, 0),
            false,
          ],
          [
            String.fromCharCode(
              111,
              102,
              102,
              108,
              111,
              97,
              100,
              95,
              107,
              95,
              53,
              53,
              0
            ),
            true,
          ],
        ]);
        let soundg: Array<any> = [820, 666, 438];
        let crossy = 4.0;
        libfbjniu = nterstitialU;
        playI = [parseInt(`${productW}`)];
        productW /= Math.max(4, playI.length >> Math.min(Math.abs(1), 5));
        materialT = new Map([[`${materialT.size}`, 3 ^ materialT.size]]);
        soundg = [parseInt(`${productW}`) % Math.max(soundg.length, 2)];
        crossy *= parseFloat(`${playI.length}`);
      }
      for (let s = 0; s < 2; s++) {
        nterstitialU = !libfbjniu;
      }
      rncoreb -= nterstitialU ? 3 : 2;
      libfbjniu = nterstitialU && !libfbjniu;
      let strings = String.fromCharCode(
        107,
        102,
        114,
        109,
        95,
        117,
        95,
        54,
        56,
        0
      );
      let recommendationg: Array<any> = [916, 88];
      let xvodH = String.fromCharCode(
        117,
        110,
        117,
        115,
        101,
        100,
        95,
        122,
        95,
        52,
        53,
        0
      );
      nterstitialU = 39 > rncoreb;
      strings = `${xvodH.length + strings.length}`;
      recommendationg = [xvodH.length];
      let countdownl = String.fromCharCode(
        108,
        95,
        51,
        51,
        95,
        101,
        118,
        97,
        108,
        115,
        0
      );
      let baseK: Array<any> = [340, 152];
      let trophyh = String.fromCharCode(
        106,
        95,
        52,
        53,
        95,
        97,
        112,
        112,
        108,
        121,
        0
      );
      libfbjniu = nterstitialU;
      countdownl = `${countdownl.length + 1}`;
      baseK.push(trophyh.length);
      trophyh = `${countdownl.length << Math.min(5, baseK.length)}`;
      halfE = `${1 | rncoreb}`;
      launcherQ = `${1 & country0.length}`;
      if (await InAppBrowser.isAvailable()) {
        if (1.4 >= umengB + 3.1 || umengB >= 3.1) {
          umengB /= Math.max(1, parseFloat(`${1}`));
        }
        let activej = downloadS.size >= 5645659;
        do {
          let libzeush = String.fromCharCode(
            107,
            95,
            54,
            51,
            95,
            121,
            111,
            117,
            114,
            0
          );
          let downloadingK: Array<any> = [389, 708, 673];
          let libturbomodulejsijnir =
            String.fromCharCode(115, 115, 104, 103, 117, 106, 0) == libzeush;
          do {
            let shirtb = 0.0;
            let bing5: Map<any, any> = new Map([
              [
                String.fromCharCode(
                  116,
                  117,
                  110,
                  110,
                  101,
                  108,
                  101,
                  100,
                  95,
                  115,
                  95,
                  53,
                  50,
                  0
                ),
                308,
              ],
              [
                String.fromCharCode(120, 95, 49, 51, 95, 119, 97, 118, 101, 0),
                970,
              ],
            ]);
            let xvodX = 1.0;
            let libsgcorek = 4.0;
            libzeush += `${3 + libzeush.length}`;
            shirtb /= Math.max(
              parseFloat(`${parseInt(`${shirtb}`) / Math.max(bing5.size, 5)}`),
              5
            );
            bing5.set(`${libsgcorek}`, bing5.size / 2);
            xvodX -= parseInt(`${xvodX}`);
            libsgcorek -= parseFloat(`${3}`);
            if (libturbomodulejsijnir) {
              break;
            }
          } while (downloadingK.length <= 2 && libturbomodulejsijnir);
          let guideO = downloadingK.length <= 9652637;
          do {
            downloadingK = [
              libzeush == String.fromCharCode(117, 0)
                ? libzeush.length
                : downloadingK.length,
            ];
            if (guideO) {
              break;
            }
          } while (
            guideO &&
            ((downloadingK.length & 5) <= 3 || 2 <= (downloadingK.length & 5))
          );
          let layoutb = String.fromCharCode(
            117,
            95,
            50,
            51,
            95,
            98,
            117,
            116,
            116,
            101,
            114,
            102,
            108,
            105,
            101,
            115,
            0
          );
          let policyq: Array<any> = [647, 711];
          libzeush = `${policyq.length}`;
          layoutb += `${String.fromCharCode(120, 0) == layoutb
            ? layoutb.length
            : layoutb.length
            }`;
          policyq.push(layoutb.length % 2);
          downloadingK = [1];
          downloadingK = [
            String.fromCharCode(54, 0) == libzeush
              ? libzeush.length
              : downloadingK.length,
          ];
          let downloadedj = false;
          downloadS.set(
            subsm,
            subsm == String.fromCharCode(97, 0) ? weibo7.length : subsm.length
          );
          if (activej) {
            break;
          }
        } while (activej && 1 <= 1 * stationsW.length);
        let statsK = String.fromCharCode(
          115,
          105,
          109,
          112,
          108,
          101,
          119,
          114,
          105,
          116,
          101,
          95,
          120,
          95,
          51,
          50,
          0
        );
        let quest6 = String.fromCharCode(
          115,
          111,
          114,
          116,
          95,
          113,
          95,
          53,
          55,
          0
        );
        let bottomu: Array<any> = [263, 715, 191];
        statsK = `${statsK.length % Math.max(8, quest6.length)}`;
        quest6 = `${2 / Math.max(1, bottomu.length)}`;
        bottomu.push(bottomu.length >> Math.min(1, bottomu.length));
        statsK = `${statsK.length | statsK.length}`;
        statsK += `${statsK.length ^ 2}`;
        country0 += `${statsK.length}`;
        await InAppBrowser.open(url);
      } else {
        let navigation0 = 2;
        let paginationh = String.fromCharCode(
          100,
          95,
          55,
          57,
          95,
          108,
          111,
          110,
          103,
          98,
          105,
          103,
          0
        );
        if (paginationh.length - 4 >= 1 || 4 - navigation0 >= 2) {
          let agreementI = 4;
          let controlG = String.fromCharCode(
            122,
            95,
            50,
            56,
            95,
            102,
            105,
            110,
            103,
            101,
            114,
            112,
            114,
            105,
            110,
            116,
            0
          );
          let borderless7 = 1;
          navigation0 %= Math.max(3, agreementI >> Math.min(Math.abs(1), 1));
          agreementI *= controlG.length / 2;
          controlG = `${controlG.length | borderless7}`;
          borderless7 ^= controlG.length;
        }
        paginationh += `${paginationh == String.fromCharCode(83, 0)
          ? paginationh.length
          : navigation0
          }`;
        navigation0 -= paginationh.length & navigation0;
        if ((paginationh.length ^ navigation0) > 1 || (navigation0 ^ 1) > 5) {
          navigation0 /= Math.max(
            String.fromCharCode(102, 0) == paginationh
              ? paginationh.length
              : navigation0,
            3
          );
        }
        while (!paginationh.startsWith(`${navigation0}`)) {
          paginationh += `${paginationh.length}`;
          break;
        }
        paginationh += `${navigation0 - 1}`;
        stationsW += `${1 + parseInt(`${umengB}`)}`;
        umengB += parseFloat(`${(questf ? 3 : 4) * parseInt(`${umengB}`)}`);
        let moreV = String.fromCharCode(
          110,
          95,
          49,
          52,
          95,
          115,
          119,
          105,
          116,
          99,
          104,
          105,
          110,
          103,
          0
        );
        let telemetryn = true;
        moreV += `${2 | (telemetryn ? 4 : 3)}`;
        let agreementIa = telemetryn ? !telemetryn : telemetryn;
        do {
          telemetryn = !moreV.endsWith(`${telemetryn}`);
          if (agreementIa) {
            break;
          }
        } while (moreV.length <= 4 && agreementIa);
        let hongkongA = telemetryn ? !telemetryn : telemetryn;
        do {
          telemetryn = !telemetryn;
          if (hongkongA) {
            break;
          }
        } while (!moreV.includes(`${telemetryn}`) && hongkongA);
        moreV = `${moreV.length - 2}`;
        let assistr = false;
        if (!assistr && 2 == moreV.length) {
          assistr = 21 < moreV.length - (!telemetryn ? 21 : moreV.length);
        }
        launcherQ = `${moreV.length | 2}`;
        Linking.openURL(url);
      }
    } catch (e) {
      halfE += `${(actionsk ? 4 : 1) >> Math.min(Math.abs(2), 4)}`;
      for (let a = 0; a < 2; a++) {
        let unticki = String.fromCharCode(
          118,
          95,
          57,
          48,
          95,
          99,
          111,
          112,
          121,
          98,
          97,
          99,
          107,
          0
        );
        let shirt4 = false;
        let bases = 2;
        let stepE = bases >= 6784665;
        do {
          bases &= 2;
          if (stepE) {
            break;
          }
        } while (stepE && shirt4);
        unticki += `${bases * 1}`;
        while ((bases | 3) > 1) {
          let reminder0 = 0;
          bases *= (shirt4 ? 3 : 4) + unticki.length;
          reminder0 <<= Math.min(Math.abs(reminder0), 5);
          break;
        }
        let transferf = unticki.length <= 5487273;
        do {
          unticki = `${unticki == String.fromCharCode(88, 0) ? bases : unticki.length
            }`;
          if (transferf) {
            break;
          }
        } while (transferf && unticki.length >= 4);
        shirt4 = (unticki.length & bases) == 36;
        if (!shirt4) {
          shirt4 = unticki.length >= 8 && !shirt4;
        }
        bases -= bases + (shirt4 ? 2 : 4);
        unticki += `${bases}`;
        shirt4 = !shirt4;
        halfE += `${abidetectJ.length % 2}`;
      }
      if (!actionsk) {
        let bannerz: Map<any, any> = new Map([
          [
            String.fromCharCode(
              97,
              95,
              52,
              52,
              95,
              117,
              100,
              112,
              108,
              105,
              116,
              101,
              0
            ),
            433,
          ],
          [String.fromCharCode(121, 95, 56, 52, 95, 97, 97, 115, 99, 0), 13],
          [
            String.fromCharCode(
              106,
              100,
              99,
              111,
              101,
              102,
              99,
              116,
              95,
              98,
              95,
              49,
              49,
              0
            ),
            729,
          ],
        ]);
        let libsgcoreX = 2.0;
        let faviconp: Array<any> = [386, 404, 449];
        let mbbidE = String.fromCharCode(
          108,
          105,
          98,
          114,
          97,
          114,
          121,
          95,
          51,
          95,
          49,
          53,
          0
        );
        let nextq = String.fromCharCode(
          118,
          97,
          114,
          109,
          97,
          115,
          107,
          95,
          110,
          95,
          57,
          50,
          0
        );
        if (!Array.from(bannerz.keys()).includes(`${libsgcoreX}`)) {
          libsgcoreX *= parseFloat(`${1}`);
        }
        nextq = `${String.fromCharCode(57, 0) == mbbidE ? mbbidE.length : bannerz.size
          }`;
        if (5.53 >= libsgcoreX) {
          bannerz.set(
            `${libsgcoreX}`,
            mbbidE.length >> Math.min(Math.abs(2), 5)
          );
        }
        let xvod6 = 4.0;
        let whiteU = 4.0;
        faviconp = [1];
        while (Array.from(bannerz.values()).includes(libsgcoreX)) {
          let t_imagex = String.fromCharCode(
            103,
            95,
            55,
            95,
            115,
            101,
            101,
            107,
            116,
            97,
            98,
            108,
            101,
            0
          );
          let sortx = false;
          let mbnative6 = String.fromCharCode(
            97,
            97,
            99,
            112,
            115,
            100,
            115,
            112,
            95,
            102,
            95,
            49,
            51,
            0
          );
          let libswscale3 = 2;
          libsgcoreX += parseFloat(`${1 >> Math.min(5, nextq.length)}`);
          t_imagex = `${mbnative6 == String.fromCharCode(107, 0)
            ? t_imagex.length
            : mbnative6.length
            }`;
          sortx = 58 >= mbnative6.length;
          libswscale3 %= Math.max(1, libswscale3);
          break;
        }
        nextq += `${parseInt(`${whiteU}`) % Math.max(mbbidE.length, 6)}`;
        while (nextq.length >= 3) {
          bannerz = new Map([[`${libsgcoreX}`, 3]]);
          break;
        }
        for (let y = 0; y < 1; y++) {
          mbbidE = `${bannerz.size * parseInt(`${whiteU}`)}`;
        }
        xvod6 /= Math.max(parseInt(`${whiteU}`), 5);
        if (
          4 == parseInt(`${whiteU}`) - bannerz.size ||
          (4 | bannerz.size) == 4
        ) {
          bannerz.set(
            `${mbbidE}`,
            mbbidE == String.fromCharCode(75, 0) ? mbbidE.length : bannerz.size
          );
        }
        xvod6 += 3;
        while (
          2 < 5 >> Math.min(1, nextq.length) &&
          nextq.length >> Math.min(2, Math.abs(bannerz.size)) < 5
        ) {
          nextq = `${1 ^ parseInt(`${whiteU}`)}`;
          break;
        }
        if (nextq.length <= parseInt(`${whiteU}`)) {
          whiteU *= bannerz.size ^ parseInt(`${libsgcoreX}`);
        }
        xvod6 /= Math.max(3, parseInt(`${whiteU}`) + faviconp.length);
        halfE += `${bannerz.size ^ launcherQ.length}`;
      }
      Linking.openURL(url);
    }
  }, [vod]);

  const fetchComments = () =>
    yys_Downloader
      .getReviewDetails(vod?.vod_douban_id.toString() ?? "")
      .then((data) => {
        return data.douban_reviews;
      });

  const { data: onlineComments, isFetching: isFetchingComments } = useQuery({
    queryKey: ["relatedComments", vod?.vod_id],
    queryFn: () => fetchComments(),
  });

  useEffect(() => {
    const mergeAllComments = async () => {
      let small9 = String.fromCharCode(
        109,
        101,
        115,
        115,
        115,
        97,
        103,
        101,
        95,
        112,
        95,
        50,
        53,
        0
      );
      let policyl = 3;
      let becomet = String.fromCharCode(
        111,
        95,
        55,
        55,
        95,
        99,
        111,
        110,
        102,
        105,
        103,
        117,
        114,
        97,
        116,
        105,
        111,
        110,
        115,
        0
      );
      let graphicsF: Map<any, any> = new Map([
        [
          String.fromCharCode(
            106,
            100,
            109,
            97,
            105,
            110,
            99,
            116,
            95,
            118,
            95,
            55,
            48,
            0
          ),
          627,
        ],
        [
          String.fromCharCode(
            104,
            97,
            115,
            104,
            116,
            97,
            103,
            115,
            95,
            121,
            95,
            50,
            55,
            0
          ),
          184,
        ],
        [
          String.fromCharCode(106, 115, 111, 110, 115, 95, 107, 95, 49, 49, 0),
          288,
        ],
      ]);
      let videojs3 = String.fromCharCode(
        117,
        95,
        52,
        55,
        95,
        119,
        101,
        98,
        112,
        97,
        103,
        101,
        0
      );
      let storeY = String.fromCharCode(
        105,
        110,
        112,
        117,
        116,
        120,
        95,
        107,
        95,
        51,
        56,
        0
      );
      let stringW: Array<any> = [81, 614];
      let membert = 5;
      let mbbidm = 3.0;
      let ajax9 = 1;
      let paths = storeY.length >= 5927752;
      do {
        let largeF: Map<any, any> = new Map([
          [
            String.fromCharCode(
              99,
              118,
              116,
              121,
              117,
              118,
              116,
              111,
              95,
              120,
              95,
              56,
              55,
              0
            ),
            String.fromCharCode(97, 100, 108, 101, 114, 95, 103, 95, 52, 48, 0),
          ],
          [
            String.fromCharCode(
              119,
              111,
              114,
              115,
              116,
              95,
              118,
              95,
              53,
              52,
              0
            ),
            String.fromCharCode(
              98,
              105,
              110,
              107,
              100,
              115,
              112,
              95,
              110,
              95,
              55,
              52,
              0
            ),
          ],
        ]);
        let g_lockr = largeF.size <= 7521475;
        do {
          largeF.set(`${largeF.size}`, 3 - largeF.size);
          if (g_lockr) {
            break;
          }
        } while (g_lockr && 4 * largeF.size < 4);
        let dycreatory = 5;
        dycreatory %= Math.max(2 ^ dycreatory, 2);
        storeY += `${policyl - becomet.length}`;
        if (paths) {
          break;
        }
      } while (3 > storeY.length && paths);
      becomet = `${String.fromCharCode(80, 0) == storeY ? storeY.length : graphicsF.size
        }`;
      for (let z = 0; z < 3; z++) {
        videojs3 += `${stringW.length % Math.max(becomet.length, 1)}`;
      }

      let mergedArray;

      for (let u = 0; u < 2; u++) {
        let statisticsh = 2;
        let finit_4x3 = 2;
        let stringj: Array<any> = [743, 727, 397];
        let termsP = 5.0;
        let shoot9 = String.fromCharCode(
          116,
          101,
          115,
          116,
          105,
          110,
          103,
          95,
          103,
          95,
          50,
          51,
          0
        );
        finit_4x3 &= shoot9.length >> Math.min(1, Math.abs(statisticsh));
        let reactnativejsZ = statisticsh >= 6365954;
        do {
          statisticsh %= Math.max(3, shoot9.length);
          if (reactnativejsZ) {
            break;
          }
        } while (reactnativejsZ && !shoot9.startsWith(`${statisticsh}`));
        while ((1 | shoot9.length) <= 5) {
          termsP /= Math.max(
            parseFloat(`${shoot9.length >> Math.min(Math.abs(3), 3)}`),
            4
          );
          break;
        }
        while (4 == 2 * finit_4x3) {
          let smallM: Array<any> = [151, 970, 849];
          let langkeyw = String.fromCharCode(
            105,
            116,
            101,
            114,
            97,
            116,
            111,
            114,
            95,
            110,
            95,
            57,
            48,
            0
          );
          let androidA = 0.0;
          finit_4x3 *= stringj.length;
          smallM = [parseInt(`${androidA}`)];
          langkeyw += `${String.fromCharCode(119, 0) == langkeyw
            ? langkeyw.length
            : parseInt(`${androidA}`)
            }`;
          break;
        }
        finit_4x3 %= Math.max(1, 2);
        let floatingh = 1.0;
        let selectZ = String.fromCharCode(
          116,
          119,
          111,
          102,
          105,
          115,
          104,
          95,
          97,
          95,
          56,
          51,
          0
        );
        shoot9 = `${selectZ.length / Math.max(1, 4)}`;
        floatingh *= parseFloat(`${1}`);
        selectZ = "3";
        for (let s = 0; s < 1; s++) {
          statisticsh *= 1 / Math.max(8, statisticsh);
        }
        let hoverG = 4.0;
        finit_4x3 ^= 3;
        for (let y = 0; y < 2; y++) {
          hoverG -= parseFloat(`${finit_4x3 * 3}`);
        }
        let controll = String.fromCharCode(
          109,
          111,
          100,
          101,
          109,
          118,
          99,
          111,
          115,
          116,
          95,
          122,
          95,
          52,
          51,
          0
        );
        let twitter3 = 6271279.0 <= hoverG;
        do {
          hoverG *= parseFloat(`${controll.length}`);
          if (twitter3) {
            break;
          }
        } while (hoverG <= 2.9 && twitter3);
        let calendar0 = 0.0;
        let injurya = String.fromCharCode(108, 95, 56, 53, 95, 99, 97, 112, 0);
        let combineg = String.fromCharCode(
          114,
          101,
          102,
          112,
          105,
          99,
          95,
          108,
          95,
          49,
          52,
          0
        );
        shoot9 += "1 & finit_4x3";
        injurya = `${3 | combineg.length}`;
        combineg += `${combineg == String.fromCharCode(116, 0)
          ? combineg.length
          : injurya.length
          }`;
        if (3.27 == termsP) {
          let predictiono = String.fromCharCode(
            104,
            95,
            50,
            53,
            95,
            109,
            107,
            118,
            109,
            117,
            120,
            101,
            114,
            0
          );
          let modeJ = 0.0;
          let termsW: Array<any> = [291, 462, 259];
          termsP += parseFloat(`${statisticsh}`);
          predictiono += `${predictiono == String.fromCharCode(107, 0)
            ? predictiono.length
            : parseInt(`${modeJ}`)
            }`;
          modeJ *= parseFloat(`${parseInt(`${modeJ}`) * termsW.length}`);
          termsW = [2];
        }
        policyl +=
          small9 == String.fromCharCode(98, 0) ? membert : small9.length;
      }
      while (membert == 5) {
        membert /= Math.max(
          String.fromCharCode(76, 0) == becomet
            ? becomet.length
            : graphicsF.size,
          5
        );
        break;
      }
      let splash4 = String.fromCharCode(
        122,
        95,
        53,
        52,
        95,
        100,
        101,
        108,
        97,
        0
      );
      let filed: Array<any> = [839, 687];
      let langkeyX: Array<any> = [
        String.fromCharCode(105, 95, 50, 52, 95, 102, 111, 114, 107, 0),
        String.fromCharCode(
          115,
          115,
          101,
          100,
          105,
          102,
          102,
          95,
          56,
          95,
          48,
          0
        ),
      ];
      let transferX = String.fromCharCode(
        109,
        95,
        54,
        57,
        95,
        115,
        110,
        100,
        105,
        111,
        0
      );
      let videocommonJ = String.fromCharCode(
        99,
        111,
        100,
        101,
        95,
        106,
        95,
        56,
        52,
        0
      );
      filed = [transferX.length + videocommonJ.length];
      storeY = `${String.fromCharCode(117, 0) == splash4 ? splash4.length : membert
        }`;
      const locComments = await getLocalComments();

      while (
        5 >= graphicsF.size << Math.min(Math.abs(3), 5) &&
        3 >= small9.length << Math.min(1, Math.abs(graphicsF.size))
      ) {
        small9 += `${storeY.length}`;
        break;
      }
      let applicationq = 3.0;
      let componentregistryf = 4;
      let dycreatoryY = 2;
      let annerR = String.fromCharCode(
        119,
        95,
        57,
        52,
        95,
        105,
        110,
        115,
        101,
        114,
        116,
        105,
        111,
        110,
        115,
        0
      );
      let tumbnaili = 2.0;
      applicationq /= Math.max(
        parseInt(`${tumbnaili}`) % Math.max(8, parseInt(`${applicationq}`)),
        5
      );
      dycreatoryY += annerR.length | dycreatoryY;
      annerR = `${dycreatoryY | annerR.length}`;
      tumbnaili /= Math.max(2, dycreatoryY);
      for (let g = 0; g < 3; g++) {
        applicationq *= componentregistryf + parseInt(`${applicationq}`);
      }
      let rules0 = String.fromCharCode(
        97,
        95,
        57,
        57,
        95,
        102,
        112,
        109,
        98,
        0
      );
      let formQ = String.fromCharCode(
        118,
        95,
        55,
        51,
        95,
        99,
        111,
        112,
        121,
        120,
        0
      );
      applicationq -= rules0.length;
      rules0 += `${formQ.length}`;
      formQ = `${formQ.length}`;
      let textinputu: Map<any, any> = new Map([
        [String.fromCharCode(115, 107, 97, 100, 95, 108, 95, 53, 48, 0), false],
        [
          String.fromCharCode(
            99,
            111,
            108,
            108,
            101,
            99,
            116,
            105,
            98,
            108,
            101,
            95,
            114,
            95,
            55,
            49,
            0
          ),
          false,
        ],
      ]);
      let ajaxf = 3.0;
      let borderlessw = String.fromCharCode(
        99,
        111,
        110,
        103,
        95,
        54,
        95,
        49,
        48,
        0
      );
      componentregistryf <<= Math.min(
        4,
        Math.abs(borderlessw.length >> Math.min(Math.abs(2), 2))
      );
      textinputu = new Map([[`${textinputu.size}`, 2 & textinputu.size]]);
      ajaxf /= Math.max(4, parseFloat(`${parseInt(`${ajaxf}`)}`));
      borderlessw = `${textinputu.size}`;
      let mbsplashb = String.fromCharCode(
        100,
        97,
        98,
        97,
        115,
        101,
        95,
        114,
        95,
        55,
        54,
        0
      );
      let androidW = String.fromCharCode(
        104,
        95,
        56,
        95,
        101,
        109,
        98,
        101,
        100,
        100,
        101,
        100,
        0
      );
      let greye = 1;
      componentregistryf += greye ^ androidW.length;
      mbsplashb += `${1 >> Math.min(4, mbsplashb.length)}`;
      androidW += `${mbsplashb.length % 3}`;
      for (let e = 0; e < 2; e++) {
        applicationq *= 2;
      }
      videojs3 += `${membert}`;
      while (storeY.endsWith(`${videojs3.length}`)) {
        storeY = `${policyl >> Math.min(small9.length, 4)}`;
        break;
      }

      if (onlineComments) {
        let greenR = String.fromCharCode(116, 99, 112, 95, 122, 95, 53, 53, 0);
        let feedbackF: Array<any> = [213, 91, 903];
        let libyoga2: Map<any, any> = new Map([
          [
            String.fromCharCode(
              121,
              98,
              108,
              111,
              99,
              107,
              95,
              106,
              95,
              54,
              49,
              0
            ),
            372,
          ],
          [
            String.fromCharCode(
              104,
              95,
              51,
              54,
              95,
              115,
              117,
              98,
              99,
              111,
              101,
              102,
              115,
              0
            ),
            403,
          ],
        ]);
        let auto_7g: Array<any> = [698, 56];
        let combineU = 3;
        greenR += `${auto_7g.length}`;
        auto_7g = [1 | combineU];
        combineU -= combineU & combineU;
        for (let b = 0; b < 2; b++) {
          feedbackF.push(
            greenR == String.fromCharCode(84, 0) ? greenR.length : libyoga2.size
          );
        }
        let anewsM = String.fromCharCode(
          104,
          113,
          112,
          101,
          108,
          95,
          100,
          95,
          50,
          56,
          0
        );
        libyoga2.set(greenR, greenR.length);
        anewsM += `${String.fromCharCode(80, 0) == anewsM ? anewsM.length : anewsM.length
          }`;
        for (let d = 0; d < 1; d++) {
          feedbackF = [1 << Math.min(2, Math.abs(libyoga2.size))];
        }
        while (
          feedbackF.length / Math.max(greenR.length, 10) == 1 ||
          1 == greenR.length / Math.max(3, feedbackF.length)
        ) {
          let frame_ae = String.fromCharCode(
            119,
            114,
            105,
            116,
            101,
            99,
            98,
            95,
            98,
            95,
            54,
            0
          );
          feedbackF = [frame_ae.length];
          break;
        }
        libyoga2.set(`${feedbackF.length}`, 3);
        let collectionM = String.fromCharCode(
          99,
          97,
          108,
          108,
          95,
          51,
          95,
          48,
          0
        );
        let mbridgeG = String.fromCharCode(
          120,
          95,
          49,
          48,
          95,
          98,
          117,
          102,
          102,
          101,
          114,
          0
        );
        feedbackF.push(collectionM.length & mbridgeG.length);
        let hejiO = 8437395 >= libyoga2.size;
        do {
          libyoga2.set(`${greenR}`, 3 >> Math.min(1, greenR.length));
          if (hejiO) {
            break;
          }
        } while (hejiO && libyoga2.get(`${feedbackF.length}`) == null);
        let cancel9 = true;
        let dropdownu: Map<any, any> = new Map([
          [
            String.fromCharCode(
              98,
              95,
              55,
              95,
              102,
              105,
              108,
              108,
              105,
              110,
              0
            ),
            String.fromCharCode(
              107,
              95,
              52,
              54,
              95,
              99,
              108,
              97,
              117,
              115,
              101,
              0
            ),
          ],
          [
            String.fromCharCode(97, 118, 117, 105, 95, 101, 95, 50, 51, 0),
            String.fromCharCode(
              109,
              108,
              112,
              100,
              115,
              112,
              95,
              119,
              95,
              49,
              0
            ),
          ],
        ]);
        let usere = 1.0;
        feedbackF.push(3);
        cancel9 = 34.92 > usere;
        dropdownu.set(`${usere}`, 3 + dropdownu.size);
        small9 = `${membert | 3}`;
        let fastl = 9573676.0 >= mbbidm;
        do {
          let sideA = 5.0;
          let traminin = 0.0;
          let libswresamplea = String.fromCharCode(
            108,
            95,
            57,
            55,
            95,
            103,
            117,
            97,
            114,
            97,
            110,
            116,
            101,
            101,
            115,
            0
          );
          let mode7 = 0.0;
          while (
            2.79 >=
            mode7 / Math.max(parseFloat(`${libswresamplea.length}`), 2) ||
            5.39 >= mode7 / Math.max(2.79, 4)
          ) {
            let contexto = 1.0;
            let eact6 = String.fromCharCode(
              114,
              101,
              102,
              108,
              101,
              99,
              116,
              95,
              118,
              95,
              53,
              53,
              0
            );
            let libyogaI = String.fromCharCode(
              99,
              117,
              101,
              112,
              111,
              105,
              110,
              116,
              95,
              99,
              95,
              53,
              50,
              0
            );
            mode7 += parseFloat(`${libswresamplea.length - eact6.length}`);
            contexto += parseFloat(`${libyogaI.length}`);
            eact6 += `${libyogaI.length / 3}`;
            break;
          }
          sideA *= 2;
          mode7 += parseFloat(`${parseInt(`${sideA}`)}`);
          let shootV = String.fromCharCode(
            105,
            110,
            116,
            114,
            101,
            97,
            100,
            119,
            114,
            105,
            116,
            101,
            95,
            52,
            95,
            51,
            54,
            0
          );
          let analyticZ = String.fromCharCode(
            99,
            111,
            117,
            110,
            116,
            101,
            114,
            115,
            95,
            113,
            95,
            54,
            0
          );
          while (traminin + 2.82 > 3.9 || 5.11 > 2.82 + traminin) {
            traminin /= Math.max(libswresamplea.length, 3);
            break;
          }
          traminin *=
            parseInt(`${sideA}`) <<
            Math.min(Math.abs(parseInt(`${traminin}`)), 1);
          if (sideA * mode7 <= 3.1 || sideA * 3.1 <= 3.17) {
            sideA /= Math.max(3, parseInt(`${traminin}`));
          }
          let hiadM = sideA >= 7168666.0;
          do {
            sideA += parseInt(`${mode7}`);
            if (hiadM) {
              break;
            }
          } while (traminin / Math.max(4, 10) == 3.93 && hiadM);
          let private_bq =
            shootV ==
            String.fromCharCode(49, 114, 99, 119, 103, 57, 100, 97, 49, 0);
          do {
            shootV += `${String.fromCharCode(68, 0) == libswresamplea
              ? parseInt(`${sideA}`)
              : libswresamplea.length
              }`;
            if (private_bq) {
              break;
            }
          } while (private_bq && 4 <= libswresamplea.length);
          let encryptu: Array<any> = [416, 911, 499];
          sideA /= Math.max(
            parseInt(`${mode7}`) % Math.max(encryptu.length, 3),
            3
          );
          for (let x = 0; x < 1; x++) {
            sideA += 1;
          }
          mbbidm *= parseFloat(`${membert}`);
          if (fastl) {
            break;
          }
        } while (membert / Math.max(mbbidm, 8) < 4.37 && fastl);
        becomet = `${1 >> Math.min(1, videojs3.length)}`;
        mergedArray = locComments.concat(onlineComments);
      } else {
        let ewardedi: Array<any> = [383, 533, 991];
        let colorsg = 4;
        ewardedi.push(colorsg | 1);
        while (3 <= ewardedi.length) {
          let whiteQ = String.fromCharCode(
            117,
            95,
            53,
            95,
            101,
            120,
            116,
            114,
            97,
            100,
            97,
            116,
            97,
            112,
            115,
            101,
            116,
            115,
            0
          );
          let catagory_ = String.fromCharCode(
            117,
            110,
            99,
            111,
            100,
            101,
            100,
            95,
            48,
            95,
            51,
            55,
            0
          );
          let searchh = 0.0;
          ewardedi = [1 % Math.max(6, parseInt(`${searchh}`))];
          whiteQ += "2";
          catagory_ = `${whiteQ.length}`;
          searchh *=
            whiteQ == String.fromCharCode(120, 0)
              ? whiteQ.length
              : catagory_.length;
          break;
        }
        while (5 > colorsg) {
          colorsg -= ewardedi.length;
          break;
        }
        let readA = String.fromCharCode(
          99,
          95,
          50,
          53,
          95,
          115,
          116,
          114,
          116,
          121,
          112,
          101,
          0
        );
        readA += `${readA.length - colorsg}`;
        ewardedi.push(readA.length);
        policyl %= Math.max(4, colorsg);
        for (let q = 0; q < 1; q++) {
          graphicsF = new Map([[becomet, becomet.length]]);
        }
        for (let w = 0; w < 1; w++) {
          stringW.push(small9.length / Math.max(1, 9));
        }
        mergedArray = onlineComments;
      }

      setAllComment(mergedArray);

      policyl += membert;
      mbbidm -= parseFloat(
        `${2 >> Math.min(Math.abs(parseInt(`${mbbidm}`)), 2)}`
      );
      for (let w = 0; w < 2; w++) {
        videojs3 = `${stringW.length}`;
      }
      setShowLoading(isFetchingComments);

      becomet = "3";
      let bingx = becomet.length >= 6802298;
      do {
        becomet = `${membert | videojs3.length}`;
        if (bingx) {
          break;
        }
      } while (becomet.length < 4 && bingx);
      if ((4 | storeY.length) >= 4) {
        storeY = `${stringW.length}`;
      }
      console.log("done");
    };

    if (!isFetchingComments) {
      mergeAllComments();
    }
  }, [isFetchingComments, isUpdated]);

  const locCommentId = "userComment" + vod?.vod_id;
  const getLocalComments = async () => {
    let paginationA = String.fromCharCode(
      120,
      95,
      49,
      56,
      95,
      114,
      101,
      109,
      111,
      118,
      101,
      0
    );
    let serviceI = 4;
    let libavcodecO: Array<any> = [823, 895];
    let projectf = String.fromCharCode(
      97,
      95,
      55,
      57,
      95,
      116,
      111,
      116,
      97,
      108,
      115,
      0
    );
    let mbridge8 = 0.0;
    let back4 = false;
    let linkW = 1.0;
    let subsQ: Array<any> = [634, 188];
    let kuaishoup = 0;
    while (mbridge8 <= 1.67) {
      mbridge8 += (back4 ? 4 : 5) | parseInt(`${mbridge8}`);
      break;
    }
    while (2 == (subsQ.length & projectf.length)) {
      projectf += `${parseInt(`${linkW}`)}`;
      break;
    }
    while (4 > projectf.length) {
      let libpangleflippedR = String.fromCharCode(
        100,
        99,
        113,
        117,
        97,
        110,
        116,
        95,
        122,
        95,
        52,
        52,
        0
      );
      let gdtadvR = 4;
      let castingi = String.fromCharCode(
        97,
        95,
        52,
        48,
        95,
        115,
        101,
        103,
        109,
        101,
        110,
        116,
        101,
        100,
        0
      );
      let whistlex: Map<any, any> = new Map([
        [
          String.fromCharCode(
            104,
            95,
            54,
            57,
            95,
            115,
            117,
            98,
            112,
            101,
            108,
            0
          ),
          293,
        ],
        [
          String.fromCharCode(
            119,
            95,
            57,
            49,
            95,
            97,
            110,
            97,
            108,
            111,
            103,
            0
          ),
          275,
        ],
      ]);
      let gmailW = String.fromCharCode(
        97,
        95,
        49,
        57,
        95,
        105,
        115,
        101,
        120,
        112,
        108,
        97,
        105,
        110,
        0
      );
      castingi += "1";
      let mbridge8x = 0.0;
      let dialogy = String.fromCharCode(
        114,
        101,
        97,
        112,
        95,
        56,
        95,
        51,
        55,
        0
      );
      let ewardedj = String.fromCharCode(
        121,
        95,
        56,
        54,
        95,
        98,
        114,
        97,
        99,
        101,
        0
      );
      gmailW = `${ewardedj == String.fromCharCode(80, 0) ? ewardedj.length : gmailW.length
        }`;
      mbridge8x -= parseFloat(
        `${dialogy == String.fromCharCode(121, 0)
          ? dialogy.length
          : parseInt(`${mbridge8x}`)
        }`
      );
      castingi += `${gmailW.length}`;
      if (4 / Math.max(9, whistlex.size) < 2) {
        gdtadvR -= libpangleflippedR.length;
      }
      whistlex.set(gmailW, whistlex.size);
      if (castingi.includes(`${gmailW.length}`)) {
        gmailW += `${libpangleflippedR == String.fromCharCode(85, 0)
          ? gmailW.length
          : libpangleflippedR.length
          }`;
      }
      gdtadvR %= Math.max(3, whistlex.size);
      let analyticd: Array<any> = [355, 979];
      let mbjscommonV = 2.0;
      whistlex.set(
        libpangleflippedR,
        libpangleflippedR == String.fromCharCode(51, 0)
          ? libpangleflippedR.length
          : castingi.length
      );
      analyticd.push(parseInt(`${mbjscommonV}`));
      mbjscommonV *= parseFloat(`${analyticd.length}`);
      libpangleflippedR += `${whistlex.size}`;
      let component2 = String.fromCharCode(
        112,
        111,
        105,
        110,
        116,
        95,
        121,
        95,
        50,
        50,
        0
      );
      let temperatureq = String.fromCharCode(
        116,
        95,
        51,
        55,
        95,
        117,
        110,
        105,
        120,
        0
      );
      let unimplementedviewc =
        temperatureq == String.fromCharCode(117, 106, 110, 0);
      do {
        let zoomw = String.fromCharCode(
          116,
          95,
          55,
          55,
          95,
          120,
          99,
          104,
          97,
          99,
          104,
          97,
          0
        );
        temperatureq = `${castingi.length ^ whistlex.size}`;
        zoomw = `${zoomw.length % 2}`;
        if (unimplementedviewc) {
          break;
        }
      } while (unimplementedviewc && 4 < component2.length);
      for (let s = 0; s < 2; s++) {
        let twitterI: Map<any, any> = new Map([
          [
            String.fromCharCode(
              115,
              117,
              98,
              116,
              101,
              120,
              116,
              95,
              116,
              95,
              53,
              56,
              0
            ),
            false,
          ],
          [
            String.fromCharCode(
              97,
              117,
              100,
              105,
              111,
              112,
              114,
              111,
              99,
              95,
              119,
              95,
              49,
              54,
              0
            ),
            false,
          ],
        ]);
        let reactj: Array<any> = [789, 355];
        gdtadvR >>= Math.min(
          4,
          Math.abs(castingi.length << Math.min(5, reactj.length))
        );
        twitterI = new Map([[`${twitterI.size}`, 3 * twitterI.size]]);
        reactj.push(twitterI.size / 3);
      }
      libpangleflippedR += `${component2.length >> Math.min(temperatureq.length, 3)
        }`;
      gdtadvR *= 1 | libpangleflippedR.length;
      let a_playerX = 5207408 <= gmailW.length;
      do {
        gmailW += `${whistlex.size ^ castingi.length}`;
        if (a_playerX) {
          break;
        }
      } while (a_playerX && libpangleflippedR == gmailW);
      kuaishoup /= Math.max(
        1,
        String.fromCharCode(121, 0) == projectf
          ? projectf.length
          : parseInt(`${mbridge8}`)
      );
      break;
    }
    for (let l = 0; l < 3; l++) {
      libavcodecO = [1 ^ serviceI];
    }

    try {
      if (
        paginationA.length - parseInt(`${linkW}`) == 2 &&
        paginationA.length / Math.max(2, 5) == 2
      ) {
        let faviconi = String.fromCharCode(
          97,
          118,
          100,
          101,
          118,
          105,
          99,
          101,
          95,
          57,
          95,
          55,
          56,
          0
        );
        let manifesta = String.fromCharCode(
          107,
          95,
          57,
          52,
          95,
          97,
          98,
          117,
          102,
          102,
          101,
          114,
          115,
          105,
          110,
          107,
          0
        );
        let carouselh = 4.0;
        let libcrashsdkH = String.fromCharCode(
          115,
          111,
          102,
          116,
          102,
          108,
          111,
          97,
          116,
          95,
          120,
          95,
          52,
          54,
          0
        );
        let condensedK = String.fromCharCode(
          116,
          101,
          115,
          116,
          98,
          114,
          105,
          100,
          103,
          101,
          95,
          107,
          95,
          52,
          54,
          0
        );
        let playercommonk = String.fromCharCode(
          109,
          95,
          49,
          48,
          95,
          113,
          117,
          105,
          99,
          0
        );
        let soundg = String.fromCharCode(
          112,
          95,
          55,
          50,
          95,
          112,
          117,
          115,
          104,
          105,
          110,
          103,
          0
        );
        let collection8 = String.fromCharCode(
          118,
          95,
          55,
          52,
          95,
          115,
          99,
          97,
          108,
          97,
          114,
          115,
          0
        );
        libcrashsdkH = `${parseInt(`${carouselh}`) << Math.min(manifesta.length, 4)
          }`;
        playercommonk += `${soundg.length}`;
        soundg += `${playercommonk == String.fromCharCode(83, 0)
          ? playercommonk.length
          : soundg.length
          }`;
        collection8 += `${playercommonk == String.fromCharCode(113, 0)
          ? playercommonk.length
          : soundg.length
          }`;
        let updatesq = 0.0;
        carouselh /= Math.max(faviconi.length * parseInt(`${carouselh}`), 5);
        updatesq /= Math.max(parseFloat(`${parseInt(`${updatesq}`) + 2}`), 5);
        let progressw = false;
        let predictionn = false;
        let package_z8: Map<any, any> = new Map([
          [
            String.fromCharCode(101, 95, 56, 57, 95, 102, 102, 118, 108, 0),
            false,
          ],
          [
            String.fromCharCode(
              99,
              111,
              100,
              101,
              99,
              112,
              114,
              105,
              118,
              97,
              116,
              101,
              95,
              111,
              95,
              50,
              52,
              0
            ),
            true,
          ],
          [String.fromCharCode(117, 95, 51, 95, 116, 114, 101, 101, 0), true],
        ]);
        condensedK = `${1 + condensedK.length}`;
        predictionn = package_z8.size >= 55;
        package_z8 = new Map([[`${package_z8.size}`, package_z8.size]]);
        let catagory4 = 5;
        let scrollviewu = 3;
        libcrashsdkH = "2";
        catagory4 &= 1 + catagory4;
        scrollviewu >>= Math.min(4, Math.abs(2 ^ catagory4));
        if (!progressw) {
          progressw = carouselh > 35.9;
        }
        faviconi = `${(progressw ? 4 : 5) >> Math.min(faviconi.length, 5)}`;
        let shootT: Array<any> = [555, 818, 270];
        manifesta += `${parseInt(`${carouselh}`)}`;
        shootT = [shootT.length * shootT.length];
        for (let x = 0; x < 3; x++) {
          carouselh +=
            condensedK == String.fromCharCode(70, 0)
              ? condensedK.length
              : faviconi.length;
        }
        while (progressw) {
          condensedK = `${2 << Math.min(Math.abs(parseInt(`${carouselh}`)), 4)
            }`;
          break;
        }
        condensedK += `${(progressw ? 3 : 4) / Math.max(2, 4)}`;
        paginationA += `${libcrashsdkH.length >> Math.min(Math.abs(3), 5)}`;
      }
      libavcodecO = [libavcodecO.length];
      let upgradeV = 6805916.0 <= mbridge8;
      do {
        mbridge8 /= Math.max(4, 3 | projectf.length);
        if (upgradeV) {
          break;
        }
      } while (4.47 == 2.45 + mbridge8 && upgradeV);
      let libavcodecT = 5198132 >= subsQ.length;
      do {
        subsQ = [serviceI / Math.max(2, 2)];
        if (libavcodecT) {
          break;
        }
      } while (
        (1 == 1 % Math.max(6, subsQ.length) || 1.83 * linkW == 4.7) &&
        libavcodecT
      );
      const comments = await AsyncStorage.getItem(locCommentId);

      while (3 > (subsQ.length ^ 2) && (kuaishoup ^ subsQ.length) > 2) {
        let chartm = String.fromCharCode(
          101,
          95,
          53,
          49,
          95,
          99,
          111,
          109,
          112,
          111,
          115,
          105,
          116,
          105,
          110,
          103,
          0
        );
        let type_0L: Array<any> = [86, 586, 688];
        let infol = 4.0;
        let libreactnativejniB = String.fromCharCode(
          110,
          95,
          49,
          55,
          95,
          115,
          99,
          104,
          117,
          110,
          99,
          107,
          0
        );
        type_0L.push(
          String.fromCharCode(76, 0) == chartm ? chartm.length : type_0L.length
        );
        libreactnativejniB = `${libreactnativejniB.length}`;
        if (!type_0L.includes(infol)) {
          let holderP: Map<any, any> = new Map([
            [
              String.fromCharCode(
                110,
                101,
                97,
                114,
                101,
                110,
                100,
                95,
                120,
                95,
                53,
                48,
                0
              ),
              String.fromCharCode(114, 95, 51, 48, 95, 98, 111, 111, 107, 0),
            ],
            [
              String.fromCharCode(
                122,
                95,
                57,
                57,
                95,
                99,
                104,
                115,
                99,
                97,
                108,
                101,
                0
              ),
              String.fromCharCode(
                105,
                95,
                56,
                51,
                95,
                102,
                105,
                114,
                115,
                116,
                112,
                97,
                115,
                115,
                0
              ),
            ],
            [
              String.fromCharCode(
                102,
                97,
                115,
                116,
                109,
                97,
                116,
                104,
                95,
                112,
                95,
                51,
                49,
                0
              ),
              String.fromCharCode(
                121,
                95,
                55,
                54,
                95,
                102,
                97,
                99,
                116,
                111,
                114,
                115,
                0
              ),
            ],
          ]);
          let injuryl = 1.0;
          let i_managerV = false;
          let xvodW = 4.0;
          let downloadingz: Map<any, any> = new Map([
            [
              String.fromCharCode(
                97,
                114,
                101,
                110,
                97,
                115,
                95,
                56,
                95,
                57,
                55,
                0
              ),
              52,
            ],
            [
              String.fromCharCode(100, 114, 97, 103, 95, 122, 95, 53, 49, 0),
              776,
            ],
          ]);
          type_0L = [parseInt(`${injuryl}`)];
          holderP.set(`${xvodW}`, parseInt(`${xvodW}`));
          injuryl -= parseFloat(`${holderP.size}`);
          i_managerV = 19 >= downloadingz.size && xvodW >= 16.9;
          downloadingz.set(`${downloadingz.size}`, 3);
        }
        chartm = `${2 + type_0L.length}`;
        type_0L = [3 >> Math.min(4, chartm.length)];
        chartm += `${parseInt(`${infol}`) << Math.min(Math.abs(3), 5)}`;
        infol /= Math.max(chartm.length, 5);
        while (3 == type_0L.length) {
          let submitl = 4.0;
          let libfbjni4 = 4.0;
          infol *= parseInt(`${libfbjni4}`);
          submitl /= Math.max(3, 2);
          libfbjni4 /= Math.max(5, parseInt(`${submitl}`));
          break;
        }
        type_0L = [type_0L.length];
        let utilsW = String.fromCharCode(
          118,
          95,
          50,
          53,
          95,
          109,
          97,
          105,
          110,
          102,
          117,
          110,
          99,
          0
        );
        subsQ = [serviceI * type_0L.length];
        break;
      }
      while (
        mbridge8 - libavcodecO.length <= 3.95 &&
        3.95 <= libavcodecO.length - mbridge8
      ) {
        let ksadI = 2.0;
        while (ksadI == 3.84) {
          ksadI *= parseInt(`${ksadI}`) % Math.max(parseInt(`${ksadI}`), 7);
          break;
        }
        for (let g = 0; g < 1; g++) {
          ksadI /= Math.max(3 - parseInt(`${ksadI}`), 4);
        }
        let qaagA = 9895328.0 <= ksadI;
        do {
          let gestureB = 4.0;
          let flyerx: Map<any, any> = new Map([
            [
              String.fromCharCode(
                111,
                95,
                56,
                48,
                95,
                116,
                114,
                97,
                110,
                115,
                112,
                111,
                110,
                101,
                100,
                0
              ),
              false,
            ],
            [
              String.fromCharCode(
                97,
                115,
                115,
                101,
                109,
                98,
                108,
                101,
                100,
                95,
                108,
                95,
                49,
                49,
                0
              ),
              true,
            ],
            [String.fromCharCode(112, 104, 114, 97, 115, 101, 115, 0), false],
          ]);
          let volume5 = String.fromCharCode(
            106,
            115,
            105,
            109,
            100,
            101,
            120,
            116,
            95,
            117,
            95,
            56,
            52,
            0
          );
          let minivodf = 0.0;
          ksadI -= parseInt(`${minivodf}`);
          gestureB -= 1;
          flyerx = new Map([[`${flyerx.size}`, flyerx.size]]);
          volume5 = `${parseInt(`${gestureB}`) | 2}`;
          minivodf /= Math.max(parseFloat(`${volume5.length % 1}`), 1);
          if (qaagA) {
            break;
          }
        } while (5.84 > 5.79 * ksadI && qaagA);
        mbridge8 *= serviceI - 2;
        break;
      }
      let benefitM = 2;
      let controlsX: Array<any> = [448, 911];
      while (!controlsX.includes(benefitM)) {
        let gradlewz = 3.0;
        let shrinks = 1.0;
        let whistle_ = true;
        benefitM <<= Math.min(4, Math.abs(benefitM + parseInt(`${shrinks}`)));
        gradlewz += 2 & parseInt(`${gradlewz}`);
        shrinks *= (whistle_ ? 1 : 5) + parseInt(`${gradlewz}`);
        whistle_ = whistle_ && gradlewz < 3.97;
        break;
      }
      let sharedv: Array<any> = [
        String.fromCharCode(
          109,
          95,
          50,
          49,
          95,
          114,
          101,
          99,
          111,
          110,
          110,
          101,
          99,
          116,
          105,
          110,
          103,
          0
        ),
        String.fromCharCode(112, 95, 57, 51, 95, 114, 97, 110, 107, 115, 0),
        String.fromCharCode(104, 95, 51, 51, 95, 112, 97, 114, 116, 121, 0),
      ];
      controlsX.push(controlsX.length % Math.max(3, 8));
      let filedw = false;
      let match3 = 4.0;
      let diceo = false;
      controlsX.push(3);
      match3 += parseFloat(`${parseInt(`${match3}`)}`);
      diceo = 90.46 >= match3 || 90.46 >= match3;
      let downloadj = true;
      libavcodecO = [2 >> Math.min(2, subsQ.length)];
      if ((subsQ.length & 1) < 3 && 1 < (paginationA.length & subsQ.length)) {
        subsQ.push(parseInt(`${linkW}`) | (back4 ? 3 : 5));
      }
      console.log("comments stored in local storage ", locCommentId);

      linkW /= Math.max(parseFloat(`${libavcodecO.length}`), 3);
      libavcodecO = [1 & subsQ.length];
      let calendar3 = String.fromCharCode(
        111,
        119,
        110,
        115,
        95,
        103,
        95,
        50,
        53,
        0
      );
      let infoF = 0.0;
      for (let b = 0; b < 3; b++) {
        let mbbanner5 = 2.0;
        let untickm = 1.0;
        let launcherv = 1.0;
        let updatesU = true;
        infoF -= parseFloat(`${calendar3.length}`);
        mbbanner5 /= Math.max(1, 3);
        untickm += parseFloat(`${1 | parseInt(`${launcherv}`)}`);
        launcherv *= parseInt(`${mbbanner5}`) + 1;
        updatesU = 52.15 <= launcherv || !updatesU;
      }
      while (infoF >= 3.11) {
        let foundq: Array<any> = [39, 469];
        let verticali: Map<any, any> = new Map([
          [String.fromCharCode(97, 119, 97, 121, 95, 102, 95, 55, 57, 0), 801],
          [
            String.fromCharCode(
              97,
              118,
              102,
              114,
              97,
              109,
              101,
              95,
              119,
              95,
              57,
              49,
              0
            ),
            32,
          ],
        ]);
        infoF -= parseFloat(`${2}`);
        foundq = [foundq.length << Math.min(5, Math.abs(verticali.size))];
        verticali = new Map([[`${verticali.size}`, verticali.size]]);
        break;
      }
      infoF += parseFloat(`${parseInt(`${infoF}`)}`);
      let targetT = 1;
      let videoR = 5;
      let zoomO = 2.0;
      targetT %= Math.max(3, 3);
      zoomO -= parseInt(`${zoomO}`);
      videoR |= parseInt(`${infoF}`) << Math.min(3, Math.abs(1));
      linkW /= Math.max(parseFloat(`${parseInt(`${linkW}`) * 2}`), 3);
      subsQ = [kuaishoup * subsQ.length];
      console.log(comments);

      while (paginationA.length << Math.min(4, libavcodecO.length) >= 5) {
        let mathc: Map<any, any> = new Map([
          [
            String.fromCharCode(
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              95,
              106,
              95,
              55,
              48,
              0
            ),
            236,
          ],
          [String.fromCharCode(115, 105, 110, 95, 110, 95, 55, 49, 0), 881],
        ]);
        let emojiT = 0;
        while (!Array.from(mathc.values()).includes(emojiT)) {
          emojiT ^= 3;
          break;
        }
        mathc.set(`${emojiT}`, mathc.size);
        mathc = new Map([[`${mathc.size}`, emojiT]]);
        for (let x = 0; x < 2; x++) {
          emojiT *= mathc.size;
        }
        let anythink5 = String.fromCharCode(
          109,
          95,
          50,
          51,
          95,
          97,
          114,
          99,
          104,
          105,
          118,
          101,
          0
        );
        let matches3 = false;
        emojiT |= emojiT;
        anythink5 += "1";
        matches3 = anythink5.length <= 63;
        let successI = false;
        let sliderx = String.fromCharCode(
          98,
          121,
          116,
          101,
          115,
          104,
          117,
          109,
          97,
          110,
          95,
          54,
          95,
          49,
          52,
          0
        );
        let notificationi = String.fromCharCode(
          102,
          101,
          119,
          95,
          118,
          95,
          54,
          56,
          0
        );
        mathc.set(`${successI}`, emojiT);
        successI = sliderx.length <= 73;
        sliderx = `${notificationi.length % Math.max(8, sliderx.length)}`;
        notificationi += `${notificationi.length}`;
        paginationA = `${1 & mathc.size}`;
        break;
      }
      back4 = paginationA == projectf;
      for (let y = 0; y < 3; y++) {
        paginationA = `${1 ^ parseInt(`${linkW}`)}`;
      }
      for (let a = 0; a < 3; a++) {
        mbridge8 /= Math.max(
          String.fromCharCode(88, 0) == paginationA
            ? subsQ.length
            : paginationA.length,
          4
        );
      }

      if (comments !== null) {
        let config9 = 0;
        let whatsapp5: Map<any, any> = new Map([
          [
            String.fromCharCode(
              117,
              95,
              51,
              56,
              95,
              122,
              111,
              110,
              101,
              105,
              110,
              102,
              111,
              0
            ),
            958,
          ],
          [
            String.fromCharCode(
              99,
              111,
              110,
              116,
              114,
              97,
              105,
              110,
              101,
              100,
              95,
              113,
              95,
              56,
              55,
              0
            ),
            101,
          ],
          [
            String.fromCharCode(
              99,
              111,
              109,
              112,
              114,
              101,
              115,
              115,
              101,
              100,
              95,
              55,
              95,
              52,
              51,
              0
            ),
            655,
          ],
        ]);
        let currentF = 5;
        let minimizeu = 4.0;
        config9 >>= Math.min(4, Math.abs(3 - whatsapp5.size));
        minimizeu *= 3 * currentF;
        while (whatsapp5.get(`${currentF}`) == null) {
          whatsapp5 = new Map([[`${minimizeu}`, 2 | parseInt(`${minimizeu}`)]]);
          break;
        }
        let downloading2 = String.fromCharCode(
          101,
          95,
          52,
          55,
          95,
          120,
          102,
          101,
          114,
          0
        );
        kuaishoup /= Math.max(subsQ.length, 5);
        let productM = 5772403.0 >= mbridge8;
        do {
          mbridge8 += 2;
          if (productM) {
            break;
          }
        } while (
          productM &&
          (mbridge8 + paginationA.length < 1.88 || 1.88 + mbridge8 < 1.38)
        );
        let screent = serviceI >= 4938106;
        do {
          serviceI %= Math.max(4, parseInt(`${mbridge8}`) - 1);
          if (screent) {
            break;
          }
        } while (serviceI / Math.max(5, subsQ.length) > 2 && screent);
        kuaishoup <<= Math.min(
          Math.abs(
            projectf == String.fromCharCode(73, 0)
              ? subsQ.length
              : projectf.length
          ),
          4
        );
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {
      let rncore3 = 5629691.0 <= mbridge8;
      do {
        mbridge8 -= paginationA.length | 1;
        if (rncore3) {
          break;
        }
      } while (rncore3 && 2.78 < 5.76 + mbridge8 && 1.83 < 5.76 + linkW);
      let logoutd = 0.0;
      if (4.8 + logoutd <= 4.0 || 4.8 * logoutd <= 4.5) {
        logoutd += parseFloat(`${parseInt(`${logoutd}`) | 2}`);
      }
      let delegate_mC = 4;
      let analytic2: Map<any, any> = new Map([
        [
          String.fromCharCode(
            106,
            95,
            54,
            55,
            95,
            102,
            116,
            118,
            115,
            112,
            108,
            105,
            116,
            98,
            97,
            114,
            0
          ),
          965,
        ],
        [
          String.fromCharCode(116, 95, 57, 48, 95, 117, 110, 105, 116, 121, 0),
          479,
        ],
        [
          String.fromCharCode(
            104,
            97,
            110,
            100,
            108,
            101,
            95,
            112,
            95,
            49,
            57,
            0
          ),
          860,
        ],
      ]);
      let malaysias = 0;
      logoutd += parseFloat(`${2}`);
      delegate_mC %= Math.max(
        5,
        malaysias >> Math.min(Math.abs(analytic2.size), 5)
      );
      analytic2.set(`${malaysias}`, malaysias);
      let countdownM: Map<any, any> = new Map([
        [
          String.fromCharCode(
            99,
            108,
            110,
            112,
            97,
            115,
            115,
            95,
            101,
            95,
            52,
            51,
            0
          ),
          272,
        ],
        [
          String.fromCharCode(
            120,
            95,
            49,
            51,
            95,
            118,
            99,
            97,
            99,
            100,
            97,
            116,
            97,
            0
          ),
          620,
        ],
        [
          String.fromCharCode(
            100,
            101,
            102,
            97,
            117,
            108,
            116,
            95,
            115,
            95,
            54,
            55,
            0
          ),
          211,
        ],
      ]);
      logoutd /= Math.max(1, parseFloat(`${parseInt(`${logoutd}`) ^ 1}`));
      countdownM.set(`${countdownM.size}`, 3 * countdownM.size);
      libavcodecO.push(libavcodecO.length | 2);
      mbridge8 +=
        String.fromCharCode(95, 0) == projectf
          ? paginationA.length
          : projectf.length;
      if (!paginationA.startsWith(`${kuaishoup}`)) {
        kuaishoup >>= Math.min(Math.abs(parseInt(`${linkW}`) / 1), 3);
      }
      console.log("error when retrieving local comments: ", error);

      let incidentu = 8989914 <= libavcodecO.length;
      do {
        libavcodecO = [3];
        if (incidentu) {
          break;
        }
      } while (3 <= subsQ.length && incidentu);
      while (mbridge8 >= 3.56) {
        let long_ly: Map<any, any> = new Map([
          [
            String.fromCharCode(
              105,
              100,
              101,
              110,
              116,
              105,
              102,
              105,
              97,
              98,
              108,
              101,
              95,
              104,
              95,
              49,
              48,
              48,
              0
            ),
            187,
          ],
          [
            String.fromCharCode(
              112,
              112,
              102,
              108,
              97,
              103,
              115,
              95,
              55,
              95,
              54,
              55,
              0
            ),
            165,
          ],
        ]);
        let mappinge = true;
        let currentS: Array<any> = [701, 96, 327];
        let referrerh = String.fromCharCode(
          121,
          95,
          49,
          56,
          95,
          99,
          111,
          109,
          109,
          105,
          116,
          116,
          101,
          114,
          0
        );
        let minif = String.fromCharCode(
          120,
          95,
          52,
          48,
          95,
          115,
          104,
          105,
          109,
          115,
          0
        );
        let libsgcoreu = 5.0;
        long_ly.set(
          `${mappinge}`,
          parseInt(`${libsgcoreu}`) + (mappinge ? 4 : 4)
        );
        referrerh += `${minif.length + 2}`;
        minif += `${referrerh.length / Math.max(1, 1)}`;
        libsgcoreu /= Math.max(2, parseFloat(`${2}`));
        if (4 <= long_ly.size / 4 && 4 <= long_ly.size) {
          long_ly.set(`${mappinge}`, currentS.length);
        }
        let transfer3 = true;
        let mountingE = true;
        mountingE = currentS.length >= 61;
        currentS = [currentS.length];
        transfer3 = currentS.length >= 70;
        mappinge = !mountingE;
        let filterl: Map<any, any> = new Map([
          [
            String.fromCharCode(108, 95, 53, 50, 95, 118, 112, 100, 120, 0),
            String.fromCharCode(
              108,
              95,
              49,
              53,
              95,
              116,
              101,
              108,
              101,
              112,
              104,
              111,
              116,
              111,
              0
            ),
          ],
          [
            String.fromCharCode(120, 95, 52, 50, 95, 99, 111, 109, 109, 97, 0),
            String.fromCharCode(
              110,
              111,
              110,
              110,
              117,
              108,
              108,
              99,
              111,
              110,
              116,
              101,
              110,
              116,
              115,
              95,
              119,
              95,
              52,
              52,
              0
            ),
          ],
          [
            String.fromCharCode(
              102,
              105,
              114,
              115,
              116,
              108,
              105,
              110,
              101,
              95,
              112,
              95,
              53,
              0
            ),
            String.fromCharCode(
              115,
              105,
              103,
              110,
              105,
              110,
              103,
              95,
              102,
              95,
              49,
              49,
              0
            ),
          ],
        ]);
        currentS = [3 * filterl.size];
        while (5 < long_ly.size) {
          let yellowo: Map<any, any> = new Map([
            [
              String.fromCharCode(
                109,
                106,
                112,
                101,
                103,
                95,
                111,
                95,
                51,
                55,
                0
              ),
              820,
            ],
            [
              String.fromCharCode(121, 97, 114, 110, 95, 114, 95, 54, 55, 0),
              274,
            ],
          ]);
          let otherN: Map<any, any> = new Map([
            [
              String.fromCharCode(110, 95, 57, 95, 111, 115, 116, 97, 114, 0),
              false,
            ],
            [
              String.fromCharCode(119, 95, 55, 56, 95, 102, 105, 112, 115, 0),
              false,
            ],
          ]);
          let checkboxu = 2.0;
          long_ly.set(`${mountingE}`, otherN.size - 3);
          yellowo.set(`${checkboxu}`, parseInt(`${checkboxu}`) - 2);
          otherN.set(`${checkboxu}`, yellowo.size % Math.max(1, 1));
          break;
        }
        projectf += `${libavcodecO.length}`;
        break;
      }
      for (let a = 0; a < 1; a++) {
        projectf += `${serviceI ^ parseInt(`${linkW}`)}`;
      }
      let u_unlockR = 8227265 >= subsQ.length;
      do {
        let libpangleflippedH = String.fromCharCode(
          101,
          99,
          111,
          109,
          112,
          114,
          101,
          115,
          115,
          111,
          114,
          95,
          114,
          95,
          57,
          51,
          0
        );
        libpangleflippedH = `${libpangleflippedH.length + libpangleflippedH.length
          }`;
        for (let n = 0; n < 2; n++) {
          libpangleflippedH = `${libpangleflippedH.length / 2}`;
        }
        while (!libpangleflippedH.startsWith(libpangleflippedH)) {
          libpangleflippedH += `${libpangleflippedH.length}`;
          break;
        }
        subsQ.push(parseInt(`${linkW}`) | 1);
        if (u_unlockR) {
          break;
        }
      } while (u_unlockR && 1 < paginationA.length);
      return [];
    }
  };

  const storeUserComments = async () => {
    let tickedQ = 1;
    let leaguei = String.fromCharCode(
      121,
      95,
      53,
      48,
      95,
      115,
      102,
      116,
      112,
      0
    );
    let window_t2e = true;
    let friendsU = String.fromCharCode(
      102,
      95,
      51,
      50,
      95,
      118,
      105,
      116,
      99,
      0
    );
    let nterstitialP = String.fromCharCode(
      111,
      102,
      102,
      101,
      114,
      101,
      100,
      95,
      106,
      95,
      55,
      52,
      0
    );
    let l_centerP = String.fromCharCode(
      107,
      95,
      49,
      57,
      95,
      115,
      101,
      112,
      97,
      114,
      97,
      116,
      111,
      114,
      0
    );
    let filedL = String.fromCharCode(110, 95, 49, 55, 0);
    let step7 = true;
    let tickJ = 5.0;
    let moduleL = String.fromCharCode(
      109,
      101,
      115,
      115,
      97,
      103,
      105,
      110,
      103,
      95,
      107,
      95,
      52,
      55,
      0
    );
    let filtero: Map<any, any> = new Map([
      [
        String.fromCharCode(
          99,
          111,
          110,
          116,
          105,
          110,
          117,
          101,
          115,
          95,
          49,
          95,
          56,
          57,
          0
        ),
        641,
      ],
      [
        String.fromCharCode(
          106,
          95,
          52,
          52,
          95,
          115,
          112,
          105,
          110,
          110,
          101,
          114,
          0
        ),
        822,
      ],
    ]);
    let showw = String.fromCharCode(104, 95, 57, 48, 95, 115, 111, 117, 110, 0);
    let mbsplashk = 0.0;
    if (leaguei == String.fromCharCode(109, 0)) {
      friendsU += `${(step7 ? 3 : 1) | 2}`;
    }
    step7 = moduleL.length <= 29 || leaguei.length <= 29;

    if (!comment) {
      while (5 == leaguei.length || filedL != String.fromCharCode(89, 0)) {
        let themeN = false;
        let green0 = 5.0;
        let runtimeschedulerX = 2;
        let frame_44R = false;
        let heji1 = green0 <= 6397089.0;
        do {
          green0 -= parseFloat(`${parseInt(`${green0}`) + (themeN ? 2 : 1)}`);
          if (heji1) {
            break;
          }
        } while (heji1 && green0 < 5.69);
        green0 /= Math.max(
          parseFloat(`${parseInt(`${green0}`) >> Math.min(1, Math.abs(1))}`),
          4
        );
        while (!themeN) {
          let history_: Array<any> = [824, 462, 932];
          let libzeusX = String.fromCharCode(
            115,
            95,
            55,
            50,
            95,
            114,
            97,
            108,
            102,
            100,
            97,
            116,
            97,
            0
          );
          let zoom3 = String.fromCharCode(
            115,
            110,
            97,
            112,
            95,
            113,
            95,
            50,
            0
          );
          frame_44R = libzeusX == String.fromCharCode(117, 0);
          history_.push(2);
          libzeusX = `${zoom3.length & 2}`;
          zoom3 = `${String.fromCharCode(81, 0) == zoom3 ? history_.length : zoom3.length
            }`;
          break;
        }
        runtimeschedulerX /= Math.max(3, themeN ? 3 : 2);
        green0 /= Math.max(parseFloat(`${2}`), 5);
        runtimeschedulerX -= parseInt(`${green0}`) | 1;
        for (let e = 0; e < 3; e++) {
          let combineY: Map<any, any> = new Map([
            [
              String.fromCharCode(
                115,
                116,
                105,
                112,
                112,
                101,
                100,
                95,
                103,
                95,
                53,
                52,
                0
              ),
              673,
            ],
            [
              String.fromCharCode(
                115,
                121,
                110,
                99,
                104,
                114,
                111,
                110,
                105,
                115,
                101,
                100,
                95,
                51,
                95,
                54,
                55,
                0
              ),
              309,
            ],
            [
              String.fromCharCode(
                101,
                120,
                112,
                111,
                114,
                116,
                101,
                100,
                95,
                52,
                95,
                50,
                53,
                0
              ),
              65,
            ],
          ]);
          let internetm = 3;
          let flyero = 3.0;
          let libfabricjnij = 3.0;
          let phonem = String.fromCharCode(
            100,
            95,
            54,
            54,
            95,
            100,
            101,
            108,
            111,
            103,
            111,
            0
          );
          runtimeschedulerX -= 2 - parseInt(`${green0}`);
          combineY.set(`${libfabricjnij}`, 3 ^ parseInt(`${flyero}`));
          internetm |= combineY.size;
          flyero += parseFloat(`${internetm ^ 2}`);
          libfabricjnij *= 1 | parseInt(`${libfabricjnij}`);
          phonem = "2";
        }
        let matches9 = true;
        let match2 = String.fromCharCode(
          114,
          95,
          56,
          57,
          95,
          109,
          117,
          120,
          101,
          114,
          115,
          0
        );
        let weibob = 4;
        green0 += parseFloat(`${parseInt(`${green0}`) | 2}`);
        matches9 =
          67 >= (!matches9 ? 67 : match2.length) / Math.max(2, match2.length);
        weibob %= Math.max(3, 1);
        green0 *= parseFloat(
          `${2 >> Math.min(Math.abs(parseInt(`${green0}`)), 1)}`
        );
        themeN = runtimeschedulerX <= 47;
        if (5 >> Math.min(3, Math.abs(runtimeschedulerX)) >= 2) {
          let typesu = String.fromCharCode(
            116,
            95,
            51,
            95,
            105,
            115,
            112,
            97,
            99,
            107,
            101,
            100,
            0
          );
          let mbbannerH = String.fromCharCode(
            103,
            95,
            57,
            49,
            95,
            105,
            110,
            105,
            116,
            115,
            109,
            111,
            116,
            105,
            111,
            110,
            0
          );
          let latn4: Array<any> = [425, 337];
          let package_dG = String.fromCharCode(
            114,
            95,
            53,
            51,
            95,
            97,
            108,
            115,
            97,
            0
          );
          frame_44R = !themeN;
          typesu = `${mbbannerH.length << Math.min(Math.abs(1), 2)}`;
          mbbannerH += `${package_dG.length / Math.max(2, latn4.length)}`;
          latn4 = [
            typesu == String.fromCharCode(90, 0)
              ? typesu.length
              : mbbannerH.length,
          ];
          package_dG = `${latn4.length ^ 3}`;
        }
        themeN = 4 <= runtimeschedulerX || themeN;
        filedL = `${window_t2e ? 3 : 3}`;
        break;
      }
      tickJ /= Math.max(3, parseFloat(`${1}`));
      return;
    }

    console.log("user comment", comment);

    l_centerP = `${tickedQ}`;
    while (filedL.length <= tickedQ) {
      let connectionq = String.fromCharCode(121, 95, 51, 57, 0);
      let renewl = 5;
      let configureb: Array<any> = [206, 969, 554];
      connectionq = `${connectionq == String.fromCharCode(115, 0) ? renewl : connectionq.length
        }`;
      if (
        3 / Math.max(3, connectionq.length) >= 1 ||
        configureb.length / Math.max(1, connectionq.length) >= 3
      ) {
        connectionq += `${configureb.length}`;
      }
      if (connectionq.length < 2) {
        let pause2: Map<any, any> = new Map([
          [
            String.fromCharCode(
              116,
              114,
              97,
              110,
              115,
              102,
              111,
              114,
              109,
              101,
              100,
              95,
              57,
              95,
              49,
              48,
              48,
              0
            ),
            true,
          ],
          [
            String.fromCharCode(
              102,
              114,
              101,
              101,
              116,
              121,
              112,
              101,
              95,
              104,
              95,
              49,
              48,
              0
            ),
            true,
          ],
          [
            String.fromCharCode(
              106,
              95,
              57,
              52,
              95,
              97,
              109,
              112,
              108,
              105,
              102,
              121,
              0
            ),
            false,
          ],
        ]);
        connectionq = `${renewl / 1}`;
        pause2.set(`${pause2.size}`, pause2.size);
      }
      configureb.push(
        connectionq == String.fromCharCode(79, 0)
          ? configureb.length
          : connectionq.length
      );
      let configm = 2.0;
      if (1.15 >= configm) {
        let mbbannerV = 5.0;
        let plashj = 1;
        configm -= parseInt(`${configm}`);
        mbbannerV *= 3 - plashj;
        plashj &= 2;
      }
      let xvod9: Array<any> = [383, 302, 836];
      configm -= xvod9.length | configureb.length;
      let borderlessA = renewl >= 7726778;
      do {
        renewl += parseInt(`${configm}`);
        if (borderlessA) {
          break;
        }
      } while (borderlessA && 4.91 < configm / 4.9);
      filedL = `${tickedQ}`;
      break;
    }
    try {
      tickJ *= parseFloat(
        `${friendsU == String.fromCharCode(110, 0) ? tickedQ : friendsU.length}`
      );
      let weiboZ =
        leaguei ==
        String.fromCharCode(99, 104, 102, 120, 106, 57, 114, 107, 108, 99, 0);
      do {
        let routery: Map<any, any> = new Map([
          [
            String.fromCharCode(
              121,
              95,
              50,
              49,
              95,
              100,
              98,
              108,
              113,
              117,
              111,
              116,
              101,
              0
            ),
            426,
          ],
          [
            String.fromCharCode(
              115,
              116,
              97,
              107,
              101,
              100,
              95,
              105,
              95,
              53,
              0
            ),
            374,
          ],
          [
            String.fromCharCode(
              121,
              95,
              55,
              54,
              95,
              118,
              112,
              97,
              105,
              110,
              116,
              101,
              114,
              0
            ),
            644,
          ],
        ]);
        while (!Array.from(routery.values()).includes(routery.size)) {
          routery = new Map([[`${routery.size}`, 2 + routery.size]]);
          break;
        }
        let plashp = 7407744 <= routery.size;
        do {
          let favoriteA: Map<any, any> = new Map([
            [String.fromCharCode(102, 95, 57, 95, 100, 105, 114, 0), 466],
            [
              String.fromCharCode(
                114,
                111,
                117,
                110,
                100,
                100,
                115,
                95,
                121,
                95,
                54,
                51,
                0
              ),
              954,
            ],
            [String.fromCharCode(111, 95, 49, 52, 95, 116, 103, 115, 0), 498],
          ]);
          let sendL: Array<any> = [91, 644];
          let incidentW = String.fromCharCode(
            109,
            97,
            120,
            105,
            109,
            117,
            109,
            95,
            48,
            95,
            49,
            48,
            0
          );
          routery.set(incidentW, incidentW.length);
          favoriteA.set(
            `${sendL.length}`,
            sendL.length >> Math.min(Math.abs(1), 4)
          );
          if (plashp) {
            break;
          }
        } while (plashp && 1 <= routery.size);
        if (5 >= 4 * routery.size) {
          let episodeJ = String.fromCharCode(
            121,
            95,
            56,
            48,
            95,
            105,
            105,
            110,
            116,
            0
          );
          let sheetk = String.fromCharCode(
            103,
            95,
            57,
            51,
            95,
            102,
            105,
            110,
            100,
            0
          );
          let rncorem: Array<any> = [
            String.fromCharCode(
              121,
              95,
              49,
              52,
              95,
              115,
              117,
              112,
              101,
              114,
              115,
              99,
              114,
              105,
              112,
              116,
              0
            ),
            String.fromCharCode(
              97,
              117,
              116,
              111,
              99,
              104,
              101,
              99,
              107,
              112,
              111,
              105,
              110,
              116,
              95,
              104,
              95,
              50,
              52,
              0
            ),
          ];
          routery.set(episodeJ, sheetk.length % Math.max(episodeJ.length, 3));
          sheetk = "2";
        }
        leaguei += `${moduleL.length >> Math.min(Math.abs(1), 2)}`;
        if (weiboZ) {
          break;
        }
      } while (3 >= leaguei.length && weiboZ);
      const existingComments = await getLocalComments();

      let clockl = String.fromCharCode(114, 116, 109, 100, 95, 52, 95, 50, 0);
      for (let m = 0; m < 3; m++) {
        let lineH = 2;
        let traminis = String.fromCharCode(
          105,
          95,
          52,
          95,
          108,
          115,
          102,
          108,
          115,
          112,
          0
        );
        clockl += "3";
        lineH <<= Math.min(3, traminis.length);
        traminis += `${1 | traminis.length}`;
      }
      let episodesF: Map<any, any> = new Map([
        [
          String.fromCharCode(
            120,
            95,
            51,
            57,
            95,
            115,
            121,
            110,
            116,
            97,
            120,
            0
          ),
          769,
        ],
        [
          String.fromCharCode(
            105,
            110,
            115,
            116,
            97,
            108,
            108,
            105,
            110,
            103,
            95,
            106,
            95,
            54,
            0
          ),
          197,
        ],
        [String.fromCharCode(101, 100, 103, 101, 95, 116, 95, 55, 55, 0), 33],
      ]);
      let langkeyl: Array<any> = [325, 170, 923];
      let memberY = 2;
      clockl = `${episodesF.size}`;
      episodesF.set(`${memberY}`, langkeyl.length >> Math.min(Math.abs(2), 5));
      langkeyl = [memberY];
      clockl += "1";
      nterstitialP += "3";
      leaguei = `${friendsU.length & 1}`;
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? "",
        user_review: comment,
      };

      window_t2e = nterstitialP.length <= 4;
      nterstitialP = `${nterstitialP.length * 3}`;
      existingComments.unshift(commmentObj);

      for (let v = 0; v < 3; v++) {
        leaguei = `${window_t2e ? 4 : 2}`;
      }
      while (1 <= filedL.length) {
        filedL += `${window_t2e ? 3 : 5}`;
        break;
      }
      await AsyncStorage.setItem(
        locCommentId,
        JSON.stringify(existingComments)
      );

      if (3 < friendsU.length && l_centerP != String.fromCharCode(116, 0)) {
        let predictionY = 5.0;
        let b_centerZ: Array<any> = [522, 873];
        let fill8 = 5.0;
        b_centerZ = [b_centerZ.length * parseInt(`${fill8}`)];
        while (fill8 < 1.5) {
          let moree = String.fromCharCode(
            100,
            95,
            52,
            54,
            95,
            99,
            104,
            97,
            115,
            101,
            0
          );
          let forwardX = false;
          let skipN: Array<any> = [997, 228, 340];
          fill8 -= 2 ^ (forwardX ? 5 : 1);
          moree += `${moree == String.fromCharCode(80, 0) ? moree.length : skipN.length
            }`;
          forwardX = (moree.length ^ skipN.length) >= 1;
          break;
        }
        let catalogf = 6088739 <= b_centerZ.length;
        do {
          b_centerZ.push(2);
          if (catalogf) {
            break;
          }
        } while (catalogf && 5 * b_centerZ.length > 3);
        predictionY /= Math.max(3, b_centerZ.length | parseInt(`${fill8}`));
        let libavfilterj = String.fromCharCode(
          100,
          105,
          115,
          97,
          108,
          108,
          111,
          119,
          95,
          100,
          95,
          50,
          48,
          0
        );
        predictionY /= Math.max(1, libavfilterj.length);
        let flipper9: Array<any> = [403, 884];
        let splash3: Array<any> = [948, 162];
        while (
          3 == splash3.length + 3 &&
          3 == flipper9.length + splash3.length
        ) {
          splash3.push(flipper9.length);
          break;
        }
        let loginY = b_centerZ.length >= 7868259;
        do {
          let privilegeE = false;
          let expandd = String.fromCharCode(
            99,
            95,
            53,
            48,
            95,
            100,
            101,
            102,
            97,
            117,
            108,
            116,
            115,
            0
          );
          let chartT = 1;
          let fieldZ = 1;
          b_centerZ = [parseInt(`${predictionY}`) << Math.min(Math.abs(1), 5)];
          privilegeE = !privilegeE || fieldZ > 94;
          expandd = `${(privilegeE ? 2 : 1) % Math.max(expandd.length, 3)}`;
          chartT >>= Math.min(Math.abs(2 << Math.min(3, Math.abs(chartT))), 1);
          fieldZ *= fieldZ;
          if (loginY) {
            break;
          }
        } while (loginY && 1 > b_centerZ.length);
        flipper9 = [flipper9.length];
        l_centerP += "3";
      }
      for (let m = 0; m < 2; m++) {
        tickJ /= Math.max(parseFloat(`${3}`), 2);
      }
      await getLocalComments();

      let bodans = window_t2e ? !window_t2e : window_t2e;
      do {
        window_t2e = leaguei.length >= 66;
        if (bodans) {
          break;
        }
      } while (bodans && !nterstitialP.endsWith(`${window_t2e}`));
      leaguei += "3";
      setIsUpdated(!isUpdated);

      let agreementG = leaguei.length <= 7315083;
      do {
        leaguei += `${l_centerP.length << Math.min(Math.abs(1), 5)}`;
        if (agreementG) {
          break;
        }
      } while (moduleL == leaguei && agreementG);
      let icond = tickJ <= 8598825.0;
      do {
        tickJ /= Math.max(parseFloat(`${parseInt(`${tickJ}`) ^ 1}`), 1);
        if (icond) {
          break;
        }
      } while (icond && tickJ > 5.46 && 1.46 > 5.46 - tickJ);
      Keyboard.dismiss();

      for (let a = 0; a < 2; a++) {
        leaguei += `${2 | tickedQ}`;
      }
      let temperatureO = window_t2e ? !window_t2e : window_t2e;
      do {
        let circleP = String.fromCharCode(
          114,
          101,
          115,
          97,
          109,
          112,
          108,
          101,
          114,
          95,
          101,
          95,
          52,
          53,
          0
        );
        let attributedstringp: Array<any> = [945, 703, 232];
        circleP = `${circleP.length}`;
        let nalyticsa = 3;
        let submitv = 4;
        while (4 >= attributedstringp.length) {
          nalyticsa <<= Math.min(
            4,
            Math.abs(
              circleP == String.fromCharCode(82, 0) ? circleP.length : nalyticsa
            )
          );
          break;
        }
        let leakchecker4 = attributedstringp.length >= 7862770;
        do {
          let subsg = String.fromCharCode(
            118,
            112,
            97,
            116,
            104,
            95,
            103,
            95,
            57,
            51,
            0
          );
          let shareN = String.fromCharCode(
            110,
            95,
            53,
            48,
            95,
            108,
            101,
            118,
            97,
            114,
            105,
            110,
            116,
            0
          );
          let collectionF = 1.0;
          let selection_ = false;
          attributedstringp.push(submitv);
          subsg += `${subsg.length}`;
          shareN = "3";
          collectionF /= Math.max(3 - (selection_ ? 2 : 2), 5);
          if (leakchecker4) {
            break;
          }
        } while (
          leakchecker4 &&
          3 < (attributedstringp.length ^ submitv) &&
          5 < (attributedstringp.length ^ 3)
        );
        let alertO: Array<any> = [
          String.fromCharCode(
            118,
            95,
            55,
            49,
            95,
            119,
            97,
            116,
            99,
            104,
            101,
            114,
            115,
            0
          ),
          String.fromCharCode(
            116,
            95,
            55,
            51,
            95,
            99,
            111,
            110,
            99,
            101,
            97,
            108,
            0
          ),
          String.fromCharCode(
            120,
            95,
            49,
            49,
            95,
            114,
            116,
            112,
            100,
            101,
            99,
            0
          ),
        ];
        let long_kq: Array<any> = [84, 854];
        submitv ^= alertO.length | 3;
        alertO = [long_kq.length + 3];
        long_kq.push(long_kq.length);
        let componentregistryo = false;
        window_t2e = circleP == l_centerP;
        if (temperatureO) {
          break;
        }
      } while (!step7 && !window_t2e && temperatureO);
      yys_StatsForm.showToast("提交成功，我们将在24小时内进行审核！");
    } catch (error) {
      if (
        4.21 <= parseFloat(`${nterstitialP.length}`) * tickJ &&
        5 - nterstitialP.length <= 1
      ) {
        nterstitialP += `${2 * nterstitialP.length}`;
      }
      step7 =
        62 <=
        (!window_t2e ? l_centerP.length : 62) >> Math.min(l_centerP.length, 1);
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

  useFocusEffect(() => {
    // console.log(videoRef);
    console.log('videoRef');
  });

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
                      yys_RelatedTooltips.isLogin(userState.user)
                        ? "请评论"
                        : "请登录才进行评论"
                    }
                    editable={yys_RelatedTooltips.isLogin(userState.user)}
                    placeholderTextColor={colors.muted}
                    value={comment}
                    maxLength={200}
                    blurOnSubmit
                  />

                  {yys_RelatedTooltips.isLogin(userState.user) ? (
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
                source={require("@static/images/cancelSigmobLibzeus.gif")}
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
                            source={require("@static/images/sinaBenefit.png")}
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
                            source={require("@static/images/templateprocessorPrivate_mMatch.png")}
                            resizeMode={"contain"}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                  { }

                  {/* todo  */}
                  <>
                    {
                      yuGaoUrl && (


                        <VodPlayerMin
                          ref={videoRef}
                          //   onBack={onHandleBack}
                          vod_url={yuGaoUrl}
                          videoType="vod"
                          //  vodTitle={ vod?.vod_name}
                          appOrientation={settingsReducer.appOrientation}
                          devicesOrientation={settingsReducer.devicesOrientation}
                          lockOrientation={lockOrientation}
                        // onReadyForDisplay={onReadyForDisplay}
                        />




                      )
                    }
                  </>

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
                            source={require("@static/images/cancelSigmobLibzeus.gif")}
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
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});
