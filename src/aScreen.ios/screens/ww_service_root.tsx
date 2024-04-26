import React, { useCallback, useEffect, useState, memo, useContext } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import ScreenContainer from "../components/container/ww_collection";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useQuery, useQueries, UseQueryResult } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  wwLibreactperfloggerjni,
} from "@type/ww_dycreator_result";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  API_DOMAIN,
  IOS_HOME_PAGE_POP_UP_ADS,
} from "@utility/ww_icon";
import CatagoryHome from "../components/container/ww_helper_klevin";
import RecommendationHome from "../components/container/ww_temp_spinner";
import HomeHeader from "../components/header/ww_schedule_header";
import FastImage from "../components/common/ww_result";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../components/common/ww_downarrow";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppSelector, useAppDispatch, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import HomeNav from "../components/tabNavigate/ww_other_project_view";

import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../../AnyThinkAds/ww_basketball";
import { AdsBannerContext } from "../../contexts/ww_setting";

import ww_runtime from "../../../Umeng/ww_runtime";
import { wwRewardvideoMegaphone } from "@api";
import DeviceInfo from "react-native-device-info";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

function ww_service_root({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  const { colors, spacing } = useTheme();
  const [navId, setNavId] = useState(0);
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );
  const userState = useSelector<wwVertical>('userReducer');
  const isVip = wwBodan.isVip(userState.user);
  const bottomTabHeight = useBottomTabBarHeight();

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["HomePageNavOptions"],
    queryFn: () => wwRewardvideoMegaphone.getHomeNav(),
  });

  const fetchData = useCallback((id: number) => wwRewardvideoMegaphone.getHomePages(id, isVip), []);

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map((x: any) => ({
        queryKey: ["HomePage", x.id],
        queryFn: () => fetchData(x.id),
      }))
      : [],
  });

  const checkConnection = async () => {
       let temperaturev = String.fromCharCode(115,117,98,108,97,121,101,114,115,95,54,95,50,53,0);
    let historyw = false;
    let rewardvideof = String.fromCharCode(97,95,53,55,95,114,101,99,104,117,110,107,0);
    let regengf: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,98,97,99,107,95,50,95,55,53,0),false ], [String.fromCharCode(105,95,52,52,95,105,110,115,101,110,115,105,116,105,118,101,0),true ], [String.fromCharCode(98,95,49,52,95,99,104,101,99,107,115,117,109,115,0),false ]]);
    let transferO = 1.0;
    let cancelD = false;
    let leakcheckerR = String.fromCharCode(111,95,54,56,95,103,114,97,98,98,101,114,0);
    let away_: Array<any> = [908, 500];
    let questiconR = 1.0;
    let relatedV = String.fromCharCode(102,108,97,99,101,110,99,95,49,95,55,54,0);
    let detailN = String.fromCharCode(97,95,52,55,95,99,111,109,112,111,115,101,114,0);
    let libtans = 1.0;
      regengf.set(rewardvideof, 1);
      transferO *= parseFloat(`${2}`);
      cancelD = !temperaturev.endsWith(`${historyw}`);
       let libreactperfloggerjniY: Array<any> = [73, 620, 108];
       let iconmoreZ = 4;
         libreactperfloggerjniY.push(iconmoreZ);
      if (iconmoreZ == libreactperfloggerjniY.length) {
          let dropdownN = false;
         libreactperfloggerjniY.push(2);
         dropdownN = !dropdownN;
      }
         iconmoreZ /= Math.max(libreactperfloggerjniY.length - iconmoreZ, 4);
          let videojsp = String.fromCharCode(118,95,51,48,95,101,109,97,105,108,0);
          let penaltyx: Array<any> = [String.fromCharCode(119,95,53,49,95,105,110,116,101,114,115,112,101,114,115,101,0), String.fromCharCode(100,117,112,108,101,120,95,103,95,49,51,0)];
         libreactperfloggerjniY.push(3 ^ libreactperfloggerjniY.length);
         videojsp = `${penaltyx.length * 2}`;
         penaltyx = [penaltyx.length];
         iconmoreZ -= iconmoreZ;
      let libzeusB = iconmoreZ <= 5858268;
      do {
         iconmoreZ ^= 1;
         if (libzeusB) {
            break;
         }
      } while (libzeusB && ((libreactperfloggerjniY.length - iconmoreZ) >= 3 || 5 >= (iconmoreZ - 3)));
      away_ = [temperaturev.length & 2];
      away_.push((String.fromCharCode(80,0) == temperaturev ? temperaturev.length : away_.length));
   for (let d = 0; d < 2; d++) {
      cancelD = 27 < rewardvideof.length;
   }

    const state = await NetInfo.fetch();

      regengf.set(`${questiconR}`, (String.fromCharCode(116,0) == temperaturev ? temperaturev.length : parseInt(`${questiconR}`)));
      leakcheckerR = `${3 ^ leakcheckerR.length}`;
      historyw = (40 <= (relatedV.length ^ (cancelD ? 40 : relatedV.length)));
   let bellI = historyw ? !historyw : historyw;
   do {
       let cornerkicki = String.fromCharCode(112,95,50,57,95,103,101,116,115,103,110,99,116,120,110,111,0);
       let helperL: Map<any, any> = new Map([[String.fromCharCode(122,95,55,48,95,109,111,118,101,115,0),false ], [String.fromCharCode(109,95,56,56,95,107,118,111,0),true ], [String.fromCharCode(115,99,97,108,101,100,95,55,95,50,51,0),true ]]);
       let expandb = 4;
       let klevino = true;
       let dplusj = String.fromCharCode(97,99,99,117,114,97,116,101,95,49,95,50,55,0);
          let backiconC = String.fromCharCode(112,111,114,116,97,108,95,108,95,51,51,0);
          let checkboxh = 4.0;
         helperL.set(`${expandb}`, expandb % (Math.max(8, cornerkicki.length)));
         backiconC = `${backiconC.length}`;
         checkboxh -= parseFloat(`${2 & parseInt(`${checkboxh}`)}`);
      while ((cornerkicki.length ^ 4) <= 3 && 5 <= (cornerkicki.length ^ 4)) {
         expandb %= Math.max(2, cornerkicki.length % (Math.max(3, 7)));
         break;
      }
      if (1 <= dplusj.length) {
          let readQ = 2.0;
          let indexp = String.fromCharCode(99,104,97,110,103,101,114,95,112,95,52,51,0);
         klevino = dplusj.startsWith(`${expandb}`);
         readQ -= parseFloat(`${parseInt(`${readQ}`)}`);
         indexp += `${parseInt(`${readQ}`)}`;
      }
      for (let b = 0; b < 3; b++) {
         helperL.set(`${klevino}`, cornerkicki.length);
      }
         dplusj = "1";
       let backwarde = String.fromCharCode(102,117,114,116,104,101,114,95,110,95,50,52,0);
      let searchbarx = helperL.size >= 5518519;
      do {
         helperL.set(`${expandb}`, expandb ^ cornerkicki.length);
         if (searchbarx) {
            break;
         }
      } while ((cornerkicki.startsWith(`${helperL.size}`)) && searchbarx);
         expandb %= Math.max(1, helperL.size >> (Math.min(cornerkicki.length, 3)));
         dplusj += `${dplusj.length}`;
         expandb >>= Math.min(2, Math.abs((dplusj == String.fromCharCode(119,0) ? dplusj.length : helperL.size)));
         expandb -= (String.fromCharCode(103,0) == dplusj ? dplusj.length : backwarde.length);
      let privilegez = 6665099 >= cornerkicki.length;
      do {
          let launcher7 = 3.0;
          let storeL = 0.0;
         cornerkicki = `${dplusj.length % (Math.max(7, parseInt(`${launcher7}`)))}`;
         launcher7 -= parseInt(`${storeL}`);
         if (privilegez) {
            break;
         }
      } while (privilegez && (cornerkicki.endsWith(`${dplusj.length}`)));
      for (let x = 0; x < 1; x++) {
         helperL.set(dplusj, backwarde.length);
      }
         backwarde += `${helperL.size}`;
      for (let r = 0; r < 2; r++) {
          let main_sF = 2.0;
          let chinat: Array<any> = [String.fromCharCode(119,95,57,49,95,102,101,101,0), String.fromCharCode(110,95,52,57,95,114,101,99,111,118,101,114,121,0), String.fromCharCode(118,95,54,51,95,111,114,119,97,114,100,101,100,0)];
         expandb -= parseInt(`${main_sF}`);
         main_sF -= parseFloat(`${chinat.length % 2}`);
         chinat.push(chinat.length + 1);
      }
      historyw = !cancelD;
      if (bellI) {
         break;
      }
   } while ((away_.length == 1 || 2 == (away_.length % 1)) && bellI);
       let megaphonek: Map<any, any> = new Map([[String.fromCharCode(110,95,53,95,119,97,108,107,116,104,114,111,117,103,104,0),true ], [String.fromCharCode(99,95,49,53,95,98,101,110,99,104,0),false ]]);
      if (megaphonek.get(`${megaphonek.size}`) != null) {
          let pingB = 3;
          let historyS = String.fromCharCode(99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,95,120,95,54,52,0);
          let homed = 2;
         megaphonek.set(`${pingB}`, pingB);
         historyS += `${historyS.length ^ 3}`;
         homed /= Math.max(1, 4);
      }
      while ((3 * megaphonek.size) == 3 || 3 == (3 * megaphonek.size)) {
         megaphonek.set(`${megaphonek.size}`, megaphonek.size ^ megaphonek.size);
         break;
      }
      while ((megaphonek.size / 5) == 2) {
         megaphonek.set(`${megaphonek.size}`, 2 + megaphonek.size);
         break;
      }
      rewardvideof = `${parseInt(`${transferO}`) * 2}`;
      temperaturev = `${(1 << (Math.min(4, Math.abs((cancelD ? 2 : 3)))))}`;
    

      detailN += `${3 << (Math.min(2, relatedV.length))}`;
   let libavformatx = cancelD ? !cancelD : cancelD;
   do {
      cancelD = leakcheckerR.length <= 61;
      if (libavformatx) {
         break;
      }
   } while (libavformatx && (cancelD));
      rewardvideof = `${temperaturev.length}`;
      cancelD = String.fromCharCode(80,0) == detailN && 56 > temperaturev.length;
       let commonI: Map<any, any> = new Map([[String.fromCharCode(113,95,56,57,95,115,112,104,101,114,105,99,97,108,0),String.fromCharCode(102,95,55,49,95,109,100,116,97,0)], [String.fromCharCode(117,110,98,105,97,115,95,98,95,55,53,0),String.fromCharCode(97,118,103,121,95,99,95,50,54,0)], [String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,110,95,52,0),String.fromCharCode(97,110,105,109,97,116,111,114,95,98,95,55,57,0)]]);
         commonI = new Map([[`${commonI.size}`, commonI.size / (Math.max(3, commonI.size))]]);
          let historym = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,95,104,95,56,53,0);
          let defaultroombgR = 2;
          let scheduleG = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,95,103,95,49,51,0);
         commonI = new Map([[`${commonI.size}`, 2 + commonI.size]]);
         historym += `${scheduleG.length}`;
         defaultroombgR ^= historym.length;
         scheduleG = `${historym.length >> (Math.min(5, Math.abs(defaultroombgR)))}`;
         commonI.set(`${commonI.size}`, commonI.size);
      historyw = 39.41 <= libtans;
       let handlerh = 5;
       let viewerf = 0;
       let largebrightnessY = 0;
          let libfollyO = String.fromCharCode(99,95,53,51,95,97,118,105,100,0);
          let animationsG = String.fromCharCode(118,98,114,105,95,120,95,54,54,0);
         viewerf /= Math.max(4, largebrightnessY);
         libfollyO = `${libfollyO.length}`;
         animationsG += `${3 * animationsG.length}`;
      if (3 >= (handlerh ^ 2) && 2 >= (viewerf ^ handlerh)) {
         viewerf <<= Math.min(5, Math.abs(handlerh & largebrightnessY));
      }
       let leftI = 0.0;
       let specW = 1.0;
      if (3.93 >= (2.8 * specW)) {
         specW *= parseFloat(`${viewerf ^ handlerh}`);
      }
      if (2 <= (handlerh >> (Math.min(Math.abs(viewerf), 5))) && (2 >> (Math.min(1, Math.abs(handlerh)))) <= 5) {
         viewerf >>= Math.min(5, Math.abs(parseInt(`${specW}`) ^ handlerh));
      }
      let gradle1 = 5577057 >= viewerf;
      do {
          let downloadingY: Array<any> = [1000, 831, 996];
          let bridget = 2;
          let hiadq = String.fromCharCode(100,101,115,107,116,111,112,95,56,95,54,56,0);
         viewerf += 2 * hiadq.length;
         downloadingY.push(bridget);
         bridget -= downloadingY.length / 1;
         hiadq = `${2 >> (Math.min(5, downloadingY.length))}`;
         if (gradle1) {
            break;
         }
      } while (gradle1 && (viewerf > leftI));
          let iconarrowrightR = String.fromCharCode(100,95,57,54,95,117,110,102,111,99,117,115,101,100,0);
         viewerf &= 1 + largebrightnessY;
         iconarrowrightR = `${iconarrowrightR.length & iconarrowrightR.length}`;
      while (5 < largebrightnessY) {
         leftI *= parseFloat(`${parseInt(`${specW}`) / (Math.max(4, handlerh))}`);
         break;
      }
         specW -= parseFloat(`${parseInt(`${leftI}`) ^ parseInt(`${specW}`)}`);
      libtans *= parseFloat(`${3}`);
    const offline = !(state.isConnected && ((state.isInternetReachable === true || state.isInternetReachable === null) ? true : false));
    setIsOffline(offline);

   let rewardH = historyw ? !historyw : historyw;
   do {
       let gifgoalbg1: Array<any> = [568, 81];
       let emojiu = 5;
       let defaultlogoq = 5;
      if (defaultlogoq > 1) {
         emojiu /= Math.max(3, 2);
      }
      for (let m = 0; m < 2; m++) {
         defaultlogoq /= Math.max(4, 1 - defaultlogoq);
      }
      while (gifgoalbg1.includes(emojiu)) {
         emojiu /= Math.max(gifgoalbg1.length + 1, 3);
         break;
      }
      let componentv = 6898496 <= emojiu;
      do {
          let statsk = String.fromCharCode(109,100,105,97,95,104,95,50,57,0);
          let libtan2 = 0.0;
          let sinav = true;
          let colorsm = 4;
          let lesso = 4.0;
         emojiu &= parseInt(`${lesso}`) * gifgoalbg1.length;
         statsk = `${1 & parseInt(`${libtan2}`)}`;
         libtan2 += (parseFloat(`${(sinav ? 1 : 2) | parseInt(`${libtan2}`)}`));
         sinav = 48 <= colorsm;
         colorsm %= Math.max(3, statsk.length);
         lesso -= parseFloat(`${2}`);
         if (componentv) {
            break;
         }
      } while (((1 / (Math.max(3, emojiu))) >= 5) && componentv);
         emojiu ^= 2;
         emojiu &= emojiu;
      if ((2 << (Math.min(5, Math.abs(emojiu)))) < 3 || (2 << (Math.min(5, Math.abs(emojiu)))) < 4) {
         emojiu += defaultlogoq;
      }
       let showt = 3.0;
       let storeE = 5.0;
      for (let v = 0; v < 3; v++) {
         defaultlogoq %= Math.max(defaultlogoq * 3, 5);
      }
      historyw = temperaturev.startsWith(`${transferO}`);
      if (rewardH) {
         break;
      }
   } while ((rewardvideof.length <= 5) && rewardH);
      leakcheckerR += `${parseInt(`${transferO}`) | rewardvideof.length}`;
       let controlsV: Map<any, any> = new Map([[String.fromCharCode(101,100,116,115,95,106,95,55,0),false ], [String.fromCharCode(111,108,100,95,115,95,57,52,0),true ]]);
      for (let m = 0; m < 2; m++) {
         controlsV = new Map([[`${controlsV.size}`, controlsV.size]]);
      }
          let searchl = String.fromCharCode(109,102,104,100,95,54,95,54,57,0);
          let heartS: Array<any> = [824, 522];
          let eventi = false;
         controlsV = new Map([[`${heartS.length}`, searchl.length]]);
         searchl += `${((eventi ? 2 : 3) * 3)}`;
         heartS.push(2);
      while (!Array.from(controlsV.values()).includes(controlsV.size)) {
          let reducerw = String.fromCharCode(117,108,116,105,95,101,95,55,52,0);
         controlsV.set(`${reducerw}`, controlsV.size);
         break;
      }
      libtans += parseFloat(`${detailN.length ^ 3}`);
   while (3 >= rewardvideof.length) {
      historyw = String.fromCharCode(66,0) == relatedV;
      break;
   }
      detailN = `${relatedV.length & parseInt(`${libtans}`)}`;
   for (let p = 0; p < 2; p++) {
      leakcheckerR = `${2 / (Math.max(parseInt(`${questiconR}`), 6))}`;
   }
    if (!offline) {

      historyw = (detailN.length / (Math.max(8, leakcheckerR.length))) > 36;
      detailN = `${parseInt(`${questiconR}`)}`;
       let orientationy = String.fromCharCode(107,95,53,57,95,99,104,97,105,110,105,100,0);
      if (2 <= orientationy.length) {
         orientationy += `${orientationy.length - 3}`;
      }
      for (let g = 0; g < 1; g++) {
          let libavutilc = String.fromCharCode(103,95,53,52,95,97,118,120,115,121,110,116,104,0);
          let foregroundE: Map<any, any> = new Map([[String.fromCharCode(107,95,49,51,95,109,115,103,115,109,100,101,99,0),true ], [String.fromCharCode(119,95,53,49,95,109,98,117,102,99,104,97,105,110,0),true ]]);
          let libffmpegkitt = String.fromCharCode(116,95,50,55,95,119,100,101,99,0);
          let userh: Array<any> = [897, 568];
         orientationy = `${orientationy.length}`;
         libavutilc += "2";
         foregroundE.set(`${libffmpegkitt}`, foregroundE.size | 2);
         libffmpegkitt += `${(String.fromCharCode(110,0) == libffmpegkitt ? libffmpegkitt.length : foregroundE.size)}`;
         userh = [libffmpegkitt.length];
      }
         orientationy = "2";
      transferO /= Math.max((parseFloat(`${String.fromCharCode(89,0) == orientationy ? orientationy.length : temperaturev.length}`)), 2);
   while (!rewardvideof.includes(`${libtans}`)) {
      rewardvideof += `${leakcheckerR.length / (Math.max(5, detailN.length))}`;
      break;
   }
   for (let y = 0; y < 1; y++) {
      cancelD = regengf.size == 86;
   }
       let baiduG: Array<any> = [206, 500, 785];
       let sportsn = String.fromCharCode(120,95,54,48,95,101,114,97,115,117,114,101,0);
       let libreactnativejniN = String.fromCharCode(115,95,56,56,95,119,95,50,56,0);
      if (libreactnativejniN.length <= sportsn.length) {
         libreactnativejniN += `${baiduG.length}`;
      }
      for (let j = 0; j < 1; j++) {
          let shielddoned = String.fromCharCode(99,114,97,115,104,95,49,95,49,49,0);
         baiduG = [libreactnativejniN.length];
         shielddoned += `${(String.fromCharCode(79,0) == shielddoned ? shielddoned.length : shielddoned.length)}`;
      }
         baiduG.push(baiduG.length);
          let statisticsf = 3.0;
          let twitteru = String.fromCharCode(113,95,52,54,95,112,97,117,115,101,0);
         libreactnativejniN = `${(sportsn == String.fromCharCode(52,0) ? parseInt(`${statisticsf}`) : sportsn.length)}`;
         statisticsf /= Math.max(3, parseFloat(`${twitteru.length * twitteru.length}`));
      let successN = 9204280 <= libreactnativejniN.length;
      do {
         libreactnativejniN = `${libreactnativejniN.length}`;
         if (successN) {
            break;
         }
      } while (((baiduG.length / (Math.max(libreactnativejniN.length, 1))) >= 3) && successN);
         baiduG.push(libreactnativejniN.length << (Math.min(Math.abs(3), 4)));
      for (let r = 0; r < 2; r++) {
         sportsn = `${(String.fromCharCode(87,0) == sportsn ? libreactnativejniN.length : sportsn.length)}`;
      }
          let fastc = String.fromCharCode(97,108,108,111,119,101,100,95,115,95,53,49,0);
          let sentryb: Array<any> = [String.fromCharCode(106,95,55,56,95,109,97,99,114,111,115,0), String.fromCharCode(122,95,50,54,95,99,108,109,117,108,0), String.fromCharCode(100,95,54,56,95,100,101,99,111,100,101,100,0)];
          let downarrowR: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,115,95,97,95,54,50,0),853], [String.fromCharCode(99,109,97,99,95,48,95,54,56,0),294], [String.fromCharCode(113,95,51,50,95,101,108,115,0),773]]);
         baiduG = [fastc.length - 1];
         fastc = `${downarrowR.size / (Math.max(sentryb.length, 4))}`;
         sentryb = [downarrowR.size];
      let resultr = 5901067 >= baiduG.length;
      do {
          let chinatE = 1.0;
          let checkboxu = 0.0;
          let scored: Array<any> = [990, 891, 480];
          let middlebrightnessA = String.fromCharCode(118,95,57,51,95,114,101,102,0);
          let teamdetailsbgB = String.fromCharCode(108,95,55,50,95,97,108,116,101,114,110,97,116,105,118,101,115,0);
         baiduG.push(parseInt(`${checkboxu}`));
         chinatE *= parseFloat(`${parseInt(`${chinatE}`)}`);
         checkboxu /= Math.max(parseInt(`${chinatE}`) * middlebrightnessA.length, 4);
         scored.push(middlebrightnessA.length << (Math.min(1, teamdetailsbgB.length)));
         teamdetailsbgB += `${(middlebrightnessA == String.fromCharCode(84,0) ? middlebrightnessA.length : teamdetailsbgB.length)}`;
         if (resultr) {
            break;
         }
      } while ((4 == (baiduG.length * sportsn.length)) && resultr);
      temperaturev += "2";
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
       let z_centerJ: Map<any, any> = new Map([[String.fromCharCode(104,99,104,114,111,109,97,95,49,95,57,56,0),409], [String.fromCharCode(101,120,112,101,114,116,95,118,95,55,49,0),812]]);
    let mimoZ = String.fromCharCode(106,95,53,55,95,115,111,117,110,100,0);
    let fastI = true;
    let countdowno = false;
    let applicationb: Map<any, any> = new Map([[String.fromCharCode(110,95,57,48,95,115,112,105,110,110,101,114,0),String.fromCharCode(100,101,115,107,116,111,112,95,121,95,57,55,0)], [String.fromCharCode(121,95,51,52,95,115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0),String.fromCharCode(109,101,100,105,97,115,95,122,95,57,56,0)], [String.fromCharCode(109,111,118,101,112,97,103,101,95,111,95,56,55,0),String.fromCharCode(103,95,50,51,95,115,116,114,112,116,105,109,101,0)]]);
    let albumo: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,114,95,56,48,0),String.fromCharCode(119,95,51,57,95,104,116,109,108,115,117,98,116,105,116,108,101,115,0)], [String.fromCharCode(120,95,53,95,102,111,108,100,101,114,115,0),String.fromCharCode(114,101,113,117,101,115,116,95,118,95,51,0)], [String.fromCharCode(99,97,109,112,97,105,103,110,95,105,95,55,55,0),String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,95,97,95,56,57,0)]]);
    let confirmationx = String.fromCharCode(116,95,50,52,95,100,101,114,105,118,0);
    let showa = String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,119,95,57,55,0);
    let emptyD = String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,95,49,95,49,48,48,0);
    let yellowredcard8 = true;
    let shooty = false;
    let actions0 = true;
    let reactnativejsV = String.fromCharCode(118,95,52,57,95,115,104,97,114,112,101,110,0);
      fastI = (6 > ((!countdowno ? albumo.size : 31) + albumo.size));
       let linkZ = String.fromCharCode(115,104,105,109,109,101,114,95,118,95,52,48,0);
      if (linkZ != linkZ) {
         linkZ = `${linkZ.length | 3}`;
      }
      if (5 > linkZ.length) {
         linkZ = `${(linkZ == String.fromCharCode(67,0) ? linkZ.length : linkZ.length)}`;
      }
          let holders = 1.0;
          let kuaishouc = String.fromCharCode(114,101,102,114,101,115,104,95,110,95,56,48,0);
          let gifgoalg: Map<any, any> = new Map([[String.fromCharCode(118,101,108,111,99,105,116,121,95,105,95,52,49,0),true ], [String.fromCharCode(107,95,51,52,95,115,109,111,111,116,104,108,121,0),false ], [String.fromCharCode(115,95,51,52,95,99,97,112,105,0),false ]]);
         linkZ = `${kuaishouc.length}`;
         holders -= gifgoalg.size;
         kuaishouc = "3";
         gifgoalg = new Map([[`${gifgoalg.size}`, 3]]);
      confirmationx = `${showa.length}`;
       let fullO = 2.0;
       let tempY = String.fromCharCode(102,105,101,108,100,95,100,95,53,52,0);
       let libavdeviceX = String.fromCharCode(112,111,115,116,101,110,99,111,100,101,95,119,95,52,48,0);
         tempY = "1";
      let foregroundD = String.fromCharCode(98,50,107,111,115,113,50,116,0) == libavdeviceX;
      do {
         libavdeviceX += `${(libavdeviceX == String.fromCharCode(115,0) ? parseInt(`${fullO}`) : libavdeviceX.length)}`;
         if (foregroundD) {
            break;
         }
      } while ((tempY != libavdeviceX) && foregroundD);
      showa = `${(mimoZ == String.fromCharCode(52,0) ? mimoZ.length : (yellowredcard8 ? 5 : 2))}`;
   if (yellowredcard8 && confirmationx.length > 3) {
      yellowredcard8 = (z_centerJ.size << (Math.min(confirmationx.length, 3))) >= 65;
   }
       let anythinkv = true;
       let rewindL = false;
       let rankC = String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,112,95,56,57,0);
      if (anythinkv) {
         anythinkv = !rewindL || rankC.length < 37;
      }
      for (let i = 0; i < 3; i++) {
          let sigmobd = 5.0;
          let circleE = String.fromCharCode(101,110,99,97,112,95,102,95,56,56,0);
         anythinkv = !rewindL;
         sigmobd -= parseFloat(`${1 << (Math.min(3, Math.abs(parseInt(`${sigmobd}`))))}`);
         circleE += `${(circleE == String.fromCharCode(74,0) ? parseInt(`${sigmobd}`) : circleE.length)}`;
      }
      while (rewindL) {
         rankC = `${((rewindL ? 2 : 4))}`;
         break;
      }
      let libfbjnia = rewindL ? !rewindL : rewindL;
      do {
          let iconfeedbackQ = String.fromCharCode(115,112,111,116,108,105,103,104,116,95,48,95,49,48,0);
          let searchbarL = String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,95,108,95,54,51,0);
          let toponm = 5.0;
         rewindL = (18 <= ((rewindL ? 18 : searchbarL.length) << (Math.min(searchbarL.length, 4))));
         iconfeedbackQ += "2";
         toponm *= parseInt(`${toponm}`);
         if (libfbjnia) {
            break;
         }
      } while ((rankC.includes(`${rewindL}`)) && libfbjnia);
         rewindL = (!rewindL ? anythinkv : !rewindL);
          let libjsiN = String.fromCharCode(107,95,52,50,95,99,111,108,111,110,0);
          let bellb: Array<any> = [343, 999];
         rewindL = (rankC.length ^ bellb.length) > 49;
         libjsiN = `${libjsiN.length * 3}`;
         bellb = [(libjsiN == String.fromCharCode(108,0) ? libjsiN.length : libjsiN.length)];
          let exampleimage6 = String.fromCharCode(117,110,100,101,102,105,110,101,100,95,116,95,56,55,0);
         anythinkv = 33 == exampleimage6.length && rankC.length == 33;
         rewindL = (!anythinkv ? rewindL : anythinkv);
         rankC = `${rankC.length >> (Math.min(Math.abs(2), 4))}`;
      applicationb.set(`${rankC}`, rankC.length << (Math.min(4, Math.abs(albumo.size))));
       let iconsettingd = 0.0;
      if (4.45 == (iconsettingd * iconsettingd) || 5.21 == (iconsettingd / 4.45)) {
         iconsettingd /= Math.max(parseFloat(`${parseInt(`${iconsettingd}`)}`), 2);
      }
      let questiconv = 7669910.0 >= iconsettingd;
      do {
          let ajaxj = String.fromCharCode(97,105,109,105,110,103,95,52,95,51,50,0);
          let currentS: Array<any> = [String.fromCharCode(118,99,111,109,98,105,110,101,95,104,95,53,49,0), String.fromCharCode(107,95,53,52,95,119,111,114,100,0), String.fromCharCode(119,95,52,51,95,117,110,105,113,117,101,100,0)];
          let whiteanimationliveY = String.fromCharCode(118,95,50,95,97,118,105,100,0);
         iconsettingd += parseFloat(`${1}`);
         ajaxj += `${ajaxj.length ^ 2}`;
         currentS = [ajaxj.length << (Math.min(4, whiteanimationliveY.length))];
         whiteanimationliveY = `${whiteanimationliveY.length}`;
         if (questiconv) {
            break;
         }
      } while ((iconsettingd > 3.40) && questiconv);
         iconsettingd /= Math.max(parseFloat(`${2}`), 1);
      emptyD += `${z_centerJ.size ^ emptyD.length}`;
       let u_positiong: Map<any, any> = new Map([[String.fromCharCode(110,95,57,51,95,116,105,110,116,101,100,0),210], [String.fromCharCode(104,111,114,105,103,95,107,95,57,52,0),933]]);
       let hookY = 5.0;
      while (u_positiong.get(`${hookY}`) != null) {
          let anythink8 = 4;
          let alertk = true;
         u_positiong = new Map([[`${anythink8}`, anythink8 >> (Math.min(1, Math.abs(1)))]]);
         alertk = (alertk ? alertk : !alertk);
         break;
      }
       let stringj: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,118,97,108,117,101,95,110,95,52,48,0),353], [String.fromCharCode(109,101,103,97,98,121,116,101,95,108,95,53,57,0),248], [String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,95,114,95,56,48,0),266]]);
       let modeV: Map<any, any> = new Map([[String.fromCharCode(107,95,51,57,95,108,97,98,101,108,101,100,0),String.fromCharCode(116,116,97,101,110,99,95,106,95,54,54,0)], [String.fromCharCode(105,115,112,97,99,107,101,100,95,98,95,55,57,0),String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,95,111,95,53,0)]]);
      if (2.47 < (3.5 + hookY)) {
         hookY += 3;
      }
      if (1.61 == (hookY + 2.50) && 1.97 == (2.50 + hookY)) {
         u_positiong.set(`${u_positiong.size}`, u_positiong.size * modeV.size);
      }
          let untick7 = 0.0;
          let dependenciesx = true;
         u_positiong = new Map([[`${dependenciesx}`, 2 ^ parseInt(`${hookY}`)]]);
         untick7 /= Math.max(parseInt(`${untick7}`) % 2, 1);
         dependenciesx = untick7 == 47.75;
      if ((stringj.size / (Math.max(4, hookY))) < 1.18) {
         hookY *= modeV.size;
      }
      confirmationx += "2";
      showa = `${albumo.size >> (Math.min(emptyD.length, 4))}`;
   for (let j = 0; j < 2; j++) {
      confirmationx = `${(confirmationx == String.fromCharCode(119,0) ? albumo.size : confirmationx.length)}`;
   }
       let closer = 2.0;
       let types0 = 3;
       let footballf = 1.0;
      if (closer < types0) {
         closer /= Math.max(2 & types0, 3);
      }
      while (3.2 > (footballf + 3.42) && (types0 % 5) > 4) {
         types0 += types0;
         break;
      }
          let blackZ = false;
         closer /= Math.max(1, (parseInt(`${closer}`) & (blackZ ? 1 : 5)));
      if (types0 < 3) {
         types0 -= 3;
      }
       let buttona = String.fromCharCode(120,110,97,115,109,95,103,95,51,56,0);
         buttona += `${parseInt(`${footballf}`) ^ types0}`;
         footballf -= parseFloat(`${buttona.length * 2}`);
      while (types0 <= 5) {
         footballf *= parseFloat(`${buttona.length & 2}`);
         break;
      }
         closer *= parseInt(`${footballf}`) >> (Math.min(buttona.length, 4));
      albumo = new Map([[`${albumo.size}`, 1 | albumo.size]]);
   for (let p = 0; p < 2; p++) {
       let settingse = String.fromCharCode(107,95,53,51,95,103,114,97,110,117,108,97,114,105,116,121,0);
       let project8 = String.fromCharCode(99,95,57,51,95,102,111,108,108,111,119,115,0);
       let floating3 = String.fromCharCode(115,117,109,97,114,121,95,121,95,56,50,0);
         project8 = `${project8.length % (Math.max(3, 9))}`;
         project8 = `${(floating3 == String.fromCharCode(49,0) ? floating3.length : project8.length)}`;
      if (!project8.includes(floating3)) {
         project8 += `${project8.length << (Math.min(1, floating3.length))}`;
      }
      while (1 == project8.length) {
         project8 = `${floating3.length << (Math.min(project8.length, 4))}`;
         break;
      }
      let baselineF = String.fromCharCode(120,50,113,103,0) == floating3;
      do {
          let singleo: Map<any, any> = new Map([[String.fromCharCode(100,95,52,54,95,117,110,112,117,98,108,105,115,104,0),974], [String.fromCharCode(113,117,101,115,116,105,111,110,95,111,95,55,49,0),88], [String.fromCharCode(102,105,114,115,116,112,97,115,115,95,52,95,56,0),61]]);
         floating3 = `${settingse.length}`;
         singleo = new Map([[`${singleo.size}`, singleo.size | singleo.size]]);
         if (baselineF) {
            break;
         }
      } while ((1 < settingse.length) && baselineF);
         settingse = "3";
      for (let l = 0; l < 1; l++) {
         project8 += `${project8.length}`;
      }
       let langkeyX = false;
         langkeyX = project8 == settingse;
      applicationb = new Map([[`${albumo.size}`, (albumo.size - (fastI ? 4 : 3))]]);
   }
       let whitetickE = String.fromCharCode(99,105,114,99,95,121,95,52,57,0);
       let mapping_ = String.fromCharCode(114,111,116,111,95,98,95,57,55,0);
      if (whitetickE == String.fromCharCode(83,0) && mapping_.length < 1) {
         whitetickE += `${3 | mapping_.length}`;
      }
       let profile8 = 4;
       let popup0 = 3;
         popup0 >>= Math.min(Math.abs(profile8), 1);
          let teamq = String.fromCharCode(109,101,116,97,115,111,117,110,100,95,51,95,57,50,0);
          let shareh = String.fromCharCode(98,108,97,99,107,95,120,95,54,48,0);
         mapping_ += `${shareh.length ^ 1}`;
         teamq += `${teamq.length >> (Math.min(Math.abs(3), 3))}`;
         shareh = `${teamq.length}`;
      while (!mapping_.startsWith(`${popup0}`)) {
         mapping_ = `${whitetickE.length}`;
         break;
      }
      while (profile8 > whitetickE.length) {
         profile8 /= Math.max(5, whitetickE.length / (Math.max(4, popup0)));
         break;
      }
      confirmationx += `${(2 | (yellowredcard8 ? 2 : 2))}`;
   let googleb = applicationb.size <= 6102292;
   do {
      applicationb = new Map([[showa, (String.fromCharCode(80,0) == showa ? (fastI ? 4 : 1) : showa.length)]]);
      if (googleb) {
         break;
      }
   } while (googleb && (3 <= (applicationb.size * 5)));
      applicationb = new Map([[`${albumo.size}`, 1 << (Math.min(3, Math.abs(albumo.size)))]]);
       let penaltygoalx = 2;
         penaltygoalx %= Math.max(penaltygoalx, 1);
      for (let s = 0; s < 2; s++) {
         penaltygoalx -= 3 << (Math.min(5, Math.abs(penaltygoalx)));
      }
         penaltygoalx /= Math.max(1, penaltygoalx % 2);
      fastI = !fastI || applicationb.size == 1;
       let recommendationr: Array<any> = [405, 87];
       let weatherm = String.fromCharCode(110,95,54,55,95,116,97,105,108,115,0);
          let weatherO = String.fromCharCode(120,95,49,50,95,97,115,115,105,103,110,0);
          let sports2 = true;
          let fasth = String.fromCharCode(105,95,57,95,114,116,112,100,101,99,0);
         recommendationr.push(weatherm.length);
         weatherO += `${fasth.length}`;
         sports2 = fasth.length >= 85 || String.fromCharCode(120,0) == weatherO;
          let clear_ = String.fromCharCode(115,111,114,116,105,110,103,95,101,95,54,49,0);
          let sellS = 3.0;
          let targetz = 3;
         recommendationr = [clear_.length - 3];
         clear_ = `${3 << (Math.min(Math.abs(parseInt(`${sellS}`)), 1))}`;
         sellS += parseFloat(`${targetz - parseInt(`${sellS}`)}`);
         targetz *= parseInt(`${sellS}`) << (Math.min(2, Math.abs(3)));
          let tickedB = 1.0;
         weatherm = `${parseInt(`${tickedB}`) % 1}`;
      while (2 < (weatherm.length >> (Math.min(5, recommendationr.length)))) {
         recommendationr.push(weatherm.length);
         break;
      }
         weatherm = "3";
      while (2 <= recommendationr.length) {
         weatherm = `${weatherm.length}`;
         break;
      }
      albumo = new Map([[`${applicationb.size}`, ((shooty ? 4 : 4) % 3)]]);
       let singleJ = true;
      let layoutq = singleJ ? !singleJ : singleJ;
      do {
         singleJ = singleJ && singleJ;
         if (layoutq) {
            break;
         }
      } while ((singleJ) && layoutq);
      if (!singleJ && !singleJ) {
         singleJ = !singleJ;
      }
      while (!singleJ) {
         singleJ = (singleJ ? singleJ : singleJ);
         break;
      }
      albumo.set(confirmationx, confirmationx.length);
      mimoZ += "1";
      emptyD = `${((fastI ? 1 : 3) % (Math.max(mimoZ.length, 9)))}`;
   for (let n = 0; n < 2; n++) {
       let bootsplashJ = 4.0;
       let catagory1: Map<any, any> = new Map([[String.fromCharCode(117,95,55,50,0),964], [String.fromCharCode(118,95,52,49,95,114,101,100,101,108,101,103,97,116,101,0),835], [String.fromCharCode(109,101,116,114,105,99,95,112,95,51,0),666]]);
       let rankh = String.fromCharCode(99,95,49,49,95,109,97,105,110,98,117,110,100,108,101,0);
       let successd = String.fromCharCode(120,95,52,57,95,101,118,115,105,103,110,97,108,0);
         catagory1 = new Map([[`${bootsplashJ}`, parseInt(`${bootsplashJ}`)]]);
         catagory1.set(`${bootsplashJ}`, parseInt(`${bootsplashJ}`) / (Math.max(catagory1.size, 4)));
       let crownU: Array<any> = [String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,95,109,95,57,53,0), String.fromCharCode(118,95,49,54,95,101,114,97,115,101,100,0), String.fromCharCode(103,105,103,97,103,114,111,117,112,95,50,95,57,51,0)];
      if (bootsplashJ <= parseFloat(`${catagory1.size}`)) {
         bootsplashJ -= parseFloat(`${parseInt(`${bootsplashJ}`)}`);
      }
          let placeholderk = true;
         bootsplashJ += parseFloat(`${1 | crownU.length}`);
         placeholderk = !placeholderk;
         catagory1.set(`${crownU.length}`, catagory1.size & crownU.length);
         catagory1.set(`${crownU.length}`, 3);
      if (successd.includes(rankh)) {
          let pagination7 = String.fromCharCode(111,112,116,97,114,103,95,114,95,57,51,0);
          let bangH = String.fromCharCode(101,118,105,99,116,105,111,110,95,97,95,51,0);
          let whatsappF = String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,95,97,95,48,0);
          let bottom_ = String.fromCharCode(112,114,105,109,97,114,105,101,115,95,114,95,51,55,0);
         successd = "1";
         pagination7 += "2";
         bangH += `${(bangH == String.fromCharCode(118,0) ? bangH.length : bottom_.length)}`;
         whatsappF = "1";
         bottom_ += `${bottom_.length ^ 1}`;
      }
      while (successd == String.fromCharCode(98,0)) {
          let useru: Array<any> = [560, 309, 885];
          let analyticsc = String.fromCharCode(116,95,49,55,95,116,109,112,0);
          let gdtadvo = 4.0;
         rankh += `${successd.length / 2}`;
         useru.push(parseInt(`${gdtadvo}`));
         analyticsc = `${parseInt(`${gdtadvo}`) % (Math.max(analyticsc.length, 10))}`;
         break;
      }
       let filledW = false;
       let philippinesF = false;
       let mbnativeadvanced7 = 5;
       let nalyticsf = 5;
      while (rankh.length >= 4) {
          let fastforwardr = String.fromCharCode(97,116,116,114,97,99,116,111,114,95,102,95,51,56,0);
          let trashG: Array<any> = [288, 356, 902];
         rankh += `${(1 * (philippinesF ? 4 : 5))}`;
         fastforwardr = "2";
         trashG = [2 + fastforwardr.length];
         break;
      }
      shooty = successd.includes(`${countdowno}`);
   }
      fastI = !confirmationx.startsWith(`${countdowno}`);
   while (!yellowredcard8) {
      yellowredcard8 = (showa.length * emptyD.length) < 44;
      break;
   }
   while (yellowredcard8) {
      yellowredcard8 = mimoZ.length < 80;
      break;
   }
   for (let b = 0; b < 2; b++) {
      confirmationx = `${(mimoZ == String.fromCharCode(49,0) ? mimoZ.length : (countdowno ? 1 : 4))}`;
   }

    setShowHomeLoading(false);
  };

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      setShowHomeLoading(true);
      refetch();
      handleRefresh(navId, true);
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  const [isRefreshing, setIsRefreshing] = useState(false);

  
  const handleRefresh = async (id: number, showloading: boolean = false) => {
       let libreactX = true;
    let privileges = 4.0;
    let targett = String.fromCharCode(115,117,112,112,111,114,116,95,99,95,55,56,0);
    let orangeclockw = 3;
    let iconplayU: Array<any> = [259, 745];
    let indicatorD = String.fromCharCode(114,95,49,57,95,115,117,98,115,97,109,112,108,105,110,103,0);
    let yingC = 5;
    let questiconT: Array<any> = [498, 323, 773];
    let iconsetting_ = String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,95,102,95,49,52,0);
    let greyarrowupD = 3.0;
    let bggradientk = 5;
    let libjsijniprofilerm = 1.0;
    let dropdownA = 3.0;
    let inouttargetred5: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,101,100,95,101,95,53,50,0),111], [String.fromCharCode(98,95,53,52,95,98,105,110,107,100,115,112,0),545], [String.fromCharCode(100,95,57,95,97,98,99,115,0),126]]);
   for (let z = 0; z < 3; z++) {
       let mbsplashY = 0.0;
       let settingsV = 5.0;
         mbsplashY /= Math.max(parseInt(`${settingsV}`), 1);
         mbsplashY -= parseInt(`${settingsV}`);
      if (settingsV >= mbsplashY) {
          let notification9 = 3;
          let commonR = 0;
          let teamdetailsbg4 = String.fromCharCode(114,95,51,55,95,108,111,99,111,0);
          let robotoO = true;
         settingsV -= parseFloat(`${teamdetailsbg4.length}`);
         notification9 &= 3 / (Math.max(2, commonR));
         commonR /= Math.max(1 + notification9, 5);
         teamdetailsbg4 = `${notification9 << (Math.min(Math.abs(1), 5))}`;
         robotoO = notification9 <= 33;
      }
      let reminderC = 9402260.0 <= settingsV;
      do {
         settingsV += parseFloat(`${parseInt(`${mbsplashY}`) ^ 1}`);
         if (reminderC) {
            break;
         }
      } while (reminderC && (1.50 == (mbsplashY + 2.41) && (mbsplashY + 2.41) == 3.74));
      while ((mbsplashY + settingsV) < 1.60) {
         mbsplashY *= parseInt(`${settingsV}`);
         break;
      }
          let starQ: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,95,100,95,52,57,0),String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,103,95,56,56,0)], [String.fromCharCode(98,95,49,57,95,100,105,115,109,105,115,115,0),String.fromCharCode(115,95,50,55,95,112,114,111,112,101,114,116,105,101,115,0)], [String.fromCharCode(116,95,50,0),String.fromCharCode(102,117,110,99,115,95,106,95,52,49,0)]]);
         settingsV -= parseFloat(`${parseInt(`${settingsV}`) / 3}`);
         starQ = new Map([[`${starQ.size}`, starQ.size | 1]]);
      yingC /= Math.max(4, parseInt(`${privileges}`) ^ 3);
   }
   if (4 < (iconplayU.length << (Math.min(4, Math.abs(orangeclockw)))) && 4 < (4 << (Math.min(4, Math.abs(orangeclockw))))) {
      orangeclockw %= Math.max(2, 3);
   }
      questiconT = [parseInt(`${libjsijniprofilerm}`) * questiconT.length];
      libreactX = dropdownA >= 23.58;

    if (showloading) {

      libreactX = iconsetting_.startsWith(`${greyarrowupD}`);
   for (let f = 0; f < 1; f++) {
       let network7: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,105,110,115,95,104,95,52,54,0),479], [String.fromCharCode(120,95,53,56,95,112,101,101,114,115,0),214], [String.fromCharCode(122,95,49,49,95,115,117,98,105,116,101,109,115,0),363]]);
       let binddatas2 = String.fromCharCode(97,100,100,101,100,95,120,95,50,52,0);
          let currentX = String.fromCharCode(114,101,109,105,120,105,110,103,95,113,95,56,49,0);
          let championx: Array<any> = [530, 424];
          let final_ye4 = 1.0;
         binddatas2 = `${network7.size}`;
         currentX = "2";
         championx.push(2);
         final_ye4 += parseFloat(`${3}`);
      let backiconU = network7.size >= 9272692;
      do {
          let suggestionn = String.fromCharCode(108,105,98,115,119,105,102,116,95,52,95,49,48,0);
          let teamd = 2.0;
          let hongkongh = false;
          let progressO: Array<any> = [450, 805];
          let iconedit2 = String.fromCharCode(118,95,57,56,95,105,110,100,105,110,103,0);
         network7 = new Map([[`${progressO.length}`, 1]]);
         suggestionn = `${parseInt(`${teamd}`) >> (Math.min(Math.abs(1), 1))}`;
         teamd -= parseFloat(`${parseInt(`${teamd}`)}`);
         hongkongh = String.fromCharCode(99,0) == suggestionn;
         progressO = [(iconedit2 == String.fromCharCode(70,0) ? parseInt(`${teamd}`) : iconedit2.length)];
         if (backiconU) {
            break;
         }
      } while (backiconU && (5 >= (3 & binddatas2.length)));
         network7 = new Map([[`${network7.size}`, network7.size]]);
         binddatas2 += `${binddatas2.length % 1}`;
      for (let l = 0; l < 3; l++) {
         binddatas2 += `${network7.size ^ binddatas2.length}`;
      }
          let regengT: Array<any> = [416, 520];
          let confirmationb = String.fromCharCode(100,101,99,108,116,121,112,101,95,103,95,53,55,0);
         network7 = new Map([[`${regengT.length}`, (String.fromCharCode(50,0) == binddatas2 ? regengT.length : binddatas2.length)]]);
         confirmationb += `${2 ^ confirmationb.length}`;
      indicatorD += `${parseInt(`${privileges}`) >> (Math.min(Math.abs(1), 3))}`;
   }
   if (greyarrowupD == 4.22) {
      iconplayU.push(targett.length % (Math.max(3, indicatorD.length)));
   }
      questiconT = [yingC];
      setIsRefreshing(true);
    }
    try {

      targett += `${bggradientk}`;
   for (let q = 0; q < 3; q++) {
       let dragg: Array<any> = [23, 1];
       let livenodatabgimgD = String.fromCharCode(114,95,54,57,95,97,114,109,108,105,110,107,0);
       let selectv = 2.0;
      while (1 > (parseInt(`${selectv}`) / (Math.max(livenodatabgimgD.length, 8))) || 1 > (parseInt(`${selectv}`) / (Math.max(livenodatabgimgD.length, 3)))) {
         livenodatabgimgD = `${livenodatabgimgD.length * 2}`;
         break;
      }
      let mergerr = 7027485.0 >= selectv;
      do {
          let foregroundJ = 4.0;
          let basketball2 = 4.0;
         selectv /= Math.max(4, 1);
         foregroundJ += parseFloat(`${3 | parseInt(`${basketball2}`)}`);
         basketball2 *= parseInt(`${foregroundJ}`);
         if (mergerr) {
            break;
         }
      } while (mergerr && (dragg.length < 3));
         livenodatabgimgD = "3";
       let videovarY = String.fromCharCode(110,95,49,57,95,100,101,99,111,117,112,108,101,0);
         videovarY += `${parseInt(`${selectv}`)}`;
         dragg = [livenodatabgimgD.length];
         videovarY += "2";
      while ((dragg.length % 5) < 4) {
          let libreactperfloggerjniL = String.fromCharCode(108,111,116,115,95,107,95,55,52,0);
         dragg = [dragg.length];
         libreactperfloggerjniL = `${libreactperfloggerjniL.length & 3}`;
         break;
      }
      let goalL = livenodatabgimgD.length >= 7299370;
      do {
         livenodatabgimgD = `${parseInt(`${selectv}`)}`;
         if (goalL) {
            break;
         }
      } while (goalL && (4 == (dragg.length * 1)));
      targett = `${(String.fromCharCode(107,0) == iconsetting_ ? (libreactX ? 2 : 3) : iconsetting_.length)}`;
   }
      indicatorD = `${parseInt(`${dropdownA}`)}`;
   let championP = yingC <= 9778021;
   do {
      yingC <<= Math.min(questiconT.length, 4);
      if (championP) {
         break;
      }
   } while ((indicatorD.endsWith(`${yingC}`)) && championP);
      await queryClient.resetQueries(["HomePage", id]);

   for (let r = 0; r < 1; r++) {
      dropdownA += parseFloat(`${orangeclockw}`);
   }
   while (5.93 >= (privileges - 2.17)) {
      orangeclockw -= 2;
      break;
   }
      libjsijniprofilerm /= Math.max(4, parseInt(`${dropdownA}`));
   if (greyarrowupD >= 4.70) {
      bggradientk &= 2;
   }

      setIsRefreshing(false);

   let corneri = String.fromCharCode(112,57,55,52,121,103,52,0) == indicatorD;
   do {
      indicatorD = `${orangeclockw}`;
      if (corneri) {
         break;
      }
   } while ((iconsetting_.length == 1 || indicatorD != String.fromCharCode(53,0)) && corneri);
   while (5.84 < (privileges / 5.42)) {
      privileges += parseInt(`${greyarrowupD}`) >> (Math.min(Math.abs(3), 2));
      break;
   }
      dropdownA -= parseFloat(`${3 << (Math.min(1, iconplayU.length))}`);
   for (let q = 0; q < 1; q++) {
      libreactX = 78.20 > privileges;
   }
      setNavId(id);

   for (let u = 0; u < 1; u++) {
       let playlisty = false;
       let androidP = String.fromCharCode(115,101,113,117,101,110,116,105,97,108,95,101,95,52,48,0);
       let sporty = true;
       let yellowI = String.fromCharCode(105,110,99,111,114,114,101,99,116,95,117,95,53,54,0);
      let cores = 6322558 >= androidP.length;
      do {
          let private_wJ: Map<any, any> = new Map([[String.fromCharCode(102,97,118,105,99,111,110,95,100,95,56,56,0),true ], [String.fromCharCode(121,95,57,57,95,113,115,118,118,112,112,0),false ]]);
         androidP = `${2 | yellowI.length}`;
         private_wJ.set(`${private_wJ.size}`, private_wJ.size);
         if (cores) {
            break;
         }
      } while (cores && (1 < androidP.length));
          let type_4v = 2.0;
          let matchactiveo = false;
         playlisty = !matchactiveo;
         type_4v /= Math.max(5, 2);
      let photoK = String.fromCharCode(112,117,119,48,118,102,109,48,55,54,0) == androidP;
      do {
          let countryO = false;
          let unreadK = true;
          let emptys = String.fromCharCode(104,95,51,53,95,97,115,99,101,110,100,105,110,103,0);
          let crowny = false;
         androidP = "2";
         countryO = emptys.length == 68;
         unreadK = (!crowny ? !countryO : !crowny);
         emptys = "2";
         if (photoK) {
            break;
         }
      } while (photoK && (playlisty));
          let yellowanimationlivei: Map<any, any> = new Map([[String.fromCharCode(102,105,108,108,105,110,95,114,95,54,53,0),false ], [String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,106,95,52,53,0),true ]]);
          let strp = false;
          let abidetectz = false;
         androidP = `${((playlisty ? 4 : 2) / (Math.max((strp ? 2 : 2), 4)))}`;
         yellowanimationlivei.set(`${abidetectz}`, yellowanimationlivei.size);
         strp = ((yellowanimationlivei.size % (Math.max(6, (!abidetectz ? 44 : yellowanimationlivei.size)))) < 44);
      if (sporty) {
          let libglogL = 4.0;
          let philippinesW = String.fromCharCode(119,95,49,54,95,99,111,110,100,0);
          let viewer7 = 5;
          let greytick2 = String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,56,95,52,49,0);
          let currents: Map<any, any> = new Map([[String.fromCharCode(99,109,97,115,107,95,99,95,51,56,0),379], [String.fromCharCode(117,116,112,117,116,95,106,95,49,57,0),697], [String.fromCharCode(120,95,55,49,95,115,117,98,116,114,97,99,116,111,114,0),533]]);
         yellowI += `${2 % (Math.max(viewer7, 8))}`;
         libglogL /= Math.max(currents.size, 3);
         philippinesW = `${parseInt(`${libglogL}`) / 1}`;
         viewer7 |= greytick2.length;
         greytick2 += `${philippinesW.length}`;
         currents.set(`${libglogL}`, parseInt(`${libglogL}`));
      }
         androidP += `${(1 << (Math.min(4, Math.abs((playlisty ? 4 : 1)))))}`;
      for (let s = 0; s < 2; s++) {
         yellowI += `${((playlisty ? 5 : 5) / (Math.max(androidP.length, 1)))}`;
      }
          let expando = String.fromCharCode(114,95,56,48,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0);
          let submitW = 4.0;
          let libtanE = 1;
         sporty = !playlisty;
         expando = `${2 + expando.length}`;
         submitW /= Math.max(expando.length * 3, 3);
         libtanE |= 1 + expando.length;
      while (5 >= androidP.length) {
         playlisty = yellowI.includes(`${playlisty}`);
         break;
      }
      if (androidP.length == 4 || sporty) {
         androidP = `${androidP.length}`;
      }
      let targetL = androidP == String.fromCharCode(107,108,121,54,114,119,0);
      do {
          let latnw: Array<any> = [476, 343, 917];
          let auto_4b = 3;
          let launchP = String.fromCharCode(112,117,108,108,100,111,119,110,95,113,95,52,53,0);
          let iconshareP: Array<any> = [356, 403];
         androidP = `${((playlisty ? 2 : 1))}`;
         latnw = [iconshareP.length % 2];
         auto_4b *= latnw.length & 2;
         launchP += `${auto_4b / (Math.max(launchP.length, 5))}`;
         iconshareP.push((launchP == String.fromCharCode(56,0) ? launchP.length : iconshareP.length));
         if (targetL) {
            break;
         }
      } while ((!androidP.startsWith(`${sporty}`)) && targetL);
         sporty = yellowI.length == 8;
      iconplayU.push(2 ^ targett.length);
   }
   let unfillu = privileges <= 8558989.0;
   do {
      privileges -= 2 + yingC;
      if (unfillu) {
         break;
      }
   } while (unfillu && (1 > (4 - yingC)));
      questiconT = [iconplayU.length];
      libreactX = !iconsetting_.includes(`${libreactX}`);
      setShowHomeLoading(false);

   if (2 > (targett.length ^ orangeclockw)) {
      orangeclockw /= Math.max(2, inouttargetred5.size);
   }
       let directW = String.fromCharCode(97,108,105,103,110,101,114,95,110,95,52,57,0);
       let aboutp = 0;
       let lessI: Map<any, any> = new Map([[String.fromCharCode(120,95,51,56,95,97,100,106,117,115,116,0),816], [String.fromCharCode(109,95,53,56,95,105,100,99,116,0),985], [String.fromCharCode(100,105,114,95,98,95,49,48,48,0),232]]);
         lessI = new Map([[`${lessI.size}`, 1]]);
      if (lessI.get(`${aboutp}`) != null) {
         aboutp >>= Math.min(Math.abs(2), 4);
      }
         lessI.set(`${aboutp}`, aboutp % 1);
       let ajaxh = 2.0;
         lessI.set(`${aboutp}`, aboutp);
          let baidu9 = false;
          let project1 = String.fromCharCode(106,95,57,56,95,97,115,110,0);
         directW += `${3 ^ directW.length}`;
         baidu9 = baidu9 || project1.length == 32;
         project1 += `${project1.length % 1}`;
      if (ajaxh > aboutp) {
         ajaxh *= parseFloat(`${aboutp}`);
      }
      if (directW.length == aboutp) {
          let liveendmodallogoX = String.fromCharCode(97,95,50,48,95,108,105,118,101,0);
          let libavutilA = 5.0;
          let schedulev = 5.0;
         aboutp %= Math.max(aboutp * directW.length, 4);
         liveendmodallogoX += `${(liveendmodallogoX == String.fromCharCode(102,0) ? parseInt(`${libavutilA}`) : liveendmodallogoX.length)}`;
         libavutilA += parseFloat(`${parseInt(`${libavutilA}`) - parseInt(`${schedulev}`)}`);
         schedulev /= Math.max(parseInt(`${libavutilA}`) + liveendmodallogoX.length, 5);
      }
      let telegramL = 8507911 <= directW.length;
      do {
          let giftbuttona = false;
          let mutedw = 1.0;
          let predictiong = 0.0;
          let weiboM = String.fromCharCode(105,110,116,101,114,114,117,112,116,95,103,95,55,55,0);
         directW = `${parseInt(`${mutedw}`)}`;
         giftbuttona = 24.31 > predictiong || giftbuttona;
         mutedw += 3 - weiboM.length;
         predictiong -= weiboM.length;
         if (telegramL) {
            break;
         }
      } while (telegramL && (directW.length <= lessI.size));
      libreactX = (directW.length ^ bggradientk) <= 27;
   for (let d = 0; d < 2; d++) {
      dropdownA *= parseFloat(`${parseInt(`${greyarrowupD}`) - 2}`);
   }
   let arrowrightE = targett.length >= 9443351;
   do {
      targett = `${bggradientk + iconsetting_.length}`;
      if (arrowrightE) {
         break;
      }
   } while (arrowrightE && (targett.endsWith(`${greyarrowupD}`)));

      return;
    } catch (error) {

       let topicq: Array<any> = [String.fromCharCode(115,105,103,110,114,97,110,100,95,108,95,51,56,0), String.fromCharCode(99,97,99,104,101,95,55,95,52,57,0), String.fromCharCode(108,95,49,48,95,114,101,106,101,99,116,105,111,110,0)];
       let libavcodeck = 1.0;
      if (topicq.includes(libavcodeck)) {
         topicq = [2 / (Math.max(9, topicq.length))];
      }
          let bannerK = 0;
          let fieldl = 1.0;
         topicq.push(bannerK & 3);
         bannerK += parseInt(`${fieldl}`) * 3;
         fieldl -= parseInt(`${fieldl}`);
         libavcodeck += parseFloat(`${topicq.length}`);
      while (1 <= (1 * topicq.length) && 5.0 <= (libavcodeck - parseFloat(`${topicq.length}`))) {
          let condensedZ = String.fromCharCode(120,97,118,115,95,119,95,53,54,0);
          let libfabricjnic = 4.0;
          let starv = 0;
          let predictionarrowh = String.fromCharCode(100,97,116,101,116,105,109,101,95,113,95,57,52,0);
          let gmailc = 1;
         topicq.push(starv | 2);
         condensedZ += "3";
         libfabricjnic -= 2;
         starv -= gmailc ^ parseInt(`${libfabricjnic}`);
         predictionarrowh += "2";
         gmailc >>= Math.min(1, Math.abs(gmailc | 1));
         break;
      }
          let unfilly = 3.0;
         libavcodeck += parseFloat(`${topicq.length + parseInt(`${unfilly}`)}`);
       let nterstitiald = 0;
      iconsetting_ += `${yingC % (Math.max(questiconT.length, 5))}`;
   for (let m = 0; m < 1; m++) {
       let xvod4 = 5.0;
       let libimagepipelineL: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,108,105,110,101,95,97,95,52,0),String.fromCharCode(110,95,52,56,95,115,117,102,102,105,120,0)], [String.fromCharCode(115,101,110,100,101,114,95,115,95,50,50,0),String.fromCharCode(111,95,54,54,95,101,114,97,0)]]);
      while (xvod4 > 5.68) {
         xvod4 /= Math.max(1 & parseInt(`${xvod4}`), 5);
         break;
      }
      if (5.70 > (xvod4 + 3.17) && 2 > (2 % (Math.max(4, libimagepipelineL.size)))) {
          let encryptV = 1;
          let sortM = 0.0;
          let largebrightness1: Map<any, any> = new Map([[String.fromCharCode(99,111,114,112,117,115,95,48,95,52,53,0),false ], [String.fromCharCode(119,95,50,95,104,119,99,111,110,116,101,120,116,0),true ]]);
         xvod4 /= Math.max(libimagepipelineL.size, 1);
         encryptV <<= Math.min(5, Math.abs(largebrightness1.size));
         sortM *= 2 << (Math.min(Math.abs(parseInt(`${sortM}`)), 1));
         largebrightness1.set(`${encryptV}`, largebrightness1.size * 2);
      }
       let connection5 = 4.0;
       let background0 = 1.0;
      let cornerA = 8848590.0 <= xvod4;
      do {
          let arrowrightA = String.fromCharCode(100,111,119,110,115,104,105,102,116,95,110,95,53,56,0);
         xvod4 -= libimagepipelineL.size >> (Math.min(4, Math.abs(parseInt(`${connection5}`))));
         arrowrightA = `${arrowrightA.length}`;
         if (cornerA) {
            break;
         }
      } while (cornerA && (4 <= libimagepipelineL.size));
         xvod4 /= Math.max(parseInt(`${xvod4}`) ^ libimagepipelineL.size, 3);
      let telegramn = background0 >= 5932851.0;
      do {
         background0 *= parseFloat(`${parseInt(`${connection5}`)}`);
         if (telegramn) {
            break;
         }
      } while ((Array.from(libimagepipelineL.keys()).includes(`${background0}`)) && telegramn);
      yingC /= Math.max(3 | iconplayU.length, 2);
   }
   let backward9 = yingC <= 8951894;
   do {
      yingC *= iconsetting_.length % 2;
      if (backward9) {
         break;
      }
   } while ((4.94 >= (greyarrowupD + 1.11)) && backward9);
      dropdownA -= parseFloat(`${iconplayU.length}`);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
       let classesP: Map<any, any> = new Map([[String.fromCharCode(111,95,49,56,95,100,101,99,114,101,102,0),false ], [String.fromCharCode(101,120,99,108,117,100,101,115,95,117,95,49,48,48,0),false ]]);
    let mbnative5 = 4;
    let entryt = String.fromCharCode(119,95,57,54,0);
    let policyQ = String.fromCharCode(110,101,101,100,108,101,95,110,95,48,0);
    let icont = String.fromCharCode(101,95,54,48,95,100,101,112,116,104,0);
    let iconrefreshe = 1.0;
    let awayteamfields = String.fromCharCode(101,108,115,100,101,99,95,112,95,56,57,0);
    let switch_gA = 2;
    let goalt = String.fromCharCode(97,110,97,108,121,115,101,95,107,95,53,57,0);
    let eventsplashN = String.fromCharCode(122,95,52,56,95,99,108,117,115,116,101,114,0);
    let colorsM = 4.0;
    let skipW = 0.0;
    let libreacto = String.fromCharCode(109,95,51,53,95,114,100,106,112,103,99,111,109,0);
   let searchi = 8900881 >= switch_gA;
   do {
       let connectionR = String.fromCharCode(116,95,55,49,95,97,117,116,111,108,111,99,107,0);
       let defaultprofilepicq = 1;
       let liveendmodallogo0: Array<any> = [672, 63];
       let singleN: Map<any, any> = new Map([[String.fromCharCode(99,117,101,115,95,119,95,55,48,0),false ], [String.fromCharCode(100,114,97,119,105,110,103,95,121,95,50,55,0),true ]]);
       let register_6hZ = String.fromCharCode(111,95,51,50,95,99,111,109,109,117,110,105,99,97,116,105,111,110,0);
      while (register_6hZ.length < 1) {
          let watchnowbgW = String.fromCharCode(122,95,50,49,95,116,104,114,111,119,0);
         register_6hZ += `${3 >> (Math.min(5, watchnowbgW.length))}`;
         break;
      }
      let bannere = String.fromCharCode(115,115,48,119,56,106,50,50,0) == register_6hZ;
      do {
          let nalyticsl: Map<any, any> = new Map([[String.fromCharCode(118,95,57,51,95,115,97,109,112,108,101,114,97,116,101,0),231], [String.fromCharCode(106,95,51,56,95,98,111,116,116,111,109,0),701], [String.fromCharCode(121,95,53,50,95,118,97,108,117,101,115,0),201]]);
          let countryK = String.fromCharCode(116,114,97,99,107,115,95,101,95,55,51,0);
          let episodesG = 1.0;
          let graphics5: Array<any> = [664, 133];
         register_6hZ += `${2 >> (Math.min(1, Math.abs(parseInt(`${episodesG}`))))}`;
         nalyticsl = new Map([[`${nalyticsl.size}`, 3 - nalyticsl.size]]);
         countryK = `${3 % (Math.max(6, countryK.length))}`;
         episodesG += 3 | nalyticsl.size;
         graphics5.push(countryK.length << (Math.min(1, Math.abs(nalyticsl.size))));
         if (bannere) {
            break;
         }
      } while (bannere && (5 == (defaultprofilepicq ^ register_6hZ.length)));
         connectionR += "3";
      let renewc = 6659402 <= connectionR.length;
      do {
         connectionR = "1";
         if (renewc) {
            break;
         }
      } while (renewc && (connectionR == String.fromCharCode(122,0) && register_6hZ.length < 4));
          let libloggerl = 5;
          let dependencieso = String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,101,95,52,55,0);
         connectionR = `${connectionR.length % 1}`;
         libloggerl *= 1 + dependencieso.length;
         dependencieso = `${(dependencieso == String.fromCharCode(122,0) ? libloggerl : dependencieso.length)}`;
      for (let g = 0; g < 1; g++) {
         defaultprofilepicq *= defaultprofilepicq;
      }
          let invitet = String.fromCharCode(102,95,51,55,95,112,97,100,100,105,110,103,0);
          let favicon6 = String.fromCharCode(109,105,100,115,95,106,95,54,50,0);
          let sellM = String.fromCharCode(109,95,54,95,114,105,100,103,101,0);
         register_6hZ += `${sellM.length}`;
         invitet = "2";
         favicon6 = `${2 % (Math.max(7, invitet.length))}`;
         sellM += "1";
      if (5 <= (2 + singleN.size)) {
         defaultprofilepicq >>= Math.min(5, liveendmodallogo0.length);
      }
      for (let t = 0; t < 3; t++) {
         liveendmodallogo0.push(connectionR.length);
      }
      while (connectionR.length < 1) {
          let untickD = String.fromCharCode(112,95,51,48,95,118,98,101,122,105,101,114,0);
          let reactnativeratings7 = String.fromCharCode(97,105,110,116,95,114,95,57,56,0);
          let dependenciesy: Map<any, any> = new Map([[String.fromCharCode(116,95,50,56,95,115,108,111,116,115,0),false ], [String.fromCharCode(107,95,49,52,95,119,97,118,101,102,111,114,109,0),false ], [String.fromCharCode(112,95,51,57,95,105,116,101,109,0),false ]]);
          let code8 = 2;
         connectionR = `${3 & defaultprofilepicq}`;
         untickD = `${reactnativeratings7.length >> (Math.min(untickD.length, 1))}`;
         reactnativeratings7 += "2";
         dependenciesy = new Map([[`${dependenciesy.size}`, (untickD == String.fromCharCode(89,0) ? untickD.length : dependenciesy.size)]]);
         code8 %= Math.max(2, code8 | 3);
         break;
      }
      for (let t = 0; t < 3; t++) {
         defaultprofilepicq += connectionR.length;
      }
       let viewerv: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,99,101,95,113,95,55,0),String.fromCharCode(99,95,49,49,95,109,111,100,105,102,121,0)], [String.fromCharCode(121,95,52,56,95,117,110,113,117,97,110,116,0),String.fromCharCode(111,95,57,50,95,97,99,111,108,111,114,115,0)], [String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,111,95,49,0),String.fromCharCode(122,95,51,56,95,115,105,103,110,114,97,110,100,0)]]);
       let benefitI: Map<any, any> = new Map([[String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,107,95,53,52,0),611], [String.fromCharCode(102,95,49,48,48,95,100,105,115,115,105,109,0),369]]);
         liveendmodallogo0.push(1);
         connectionR = "1";
          let profileZ = 5;
          let proxyA = 0;
          let knews8 = String.fromCharCode(115,115,116,104,114,101,115,104,95,53,95,57,57,0);
         connectionR += `${connectionR.length ^ 3}`;
         profileZ <<= Math.min(Math.abs(profileZ << (Math.min(Math.abs(2), 3))), 1);
         proxyA <<= Math.min(1, Math.abs((String.fromCharCode(52,0) == knews8 ? knews8.length : profileZ)));
      switch_gA -= (String.fromCharCode(49,0) == awayteamfields ? connectionR.length : awayteamfields.length);
      if (searchi) {
         break;
      }
   } while (searchi && ((icont.length / 5) > 1 || (switch_gA / (Math.max(5, 1))) > 2));
       let ticked5 = String.fromCharCode(120,111,102,102,115,101,116,95,116,95,54,48,0);
       let unfill2 = String.fromCharCode(104,95,53,53,95,118,97,114,105,97,98,108,101,0);
       let membern = 2;
         ticked5 += `${unfill2.length * 3}`;
         membern += membern >> (Math.min(unfill2.length, 5));
      if (ticked5 == String.fromCharCode(67,0)) {
         unfill2 += `${ticked5.length >> (Math.min(Math.abs(1), 4))}`;
      }
          let predictionwinv = String.fromCharCode(103,101,116,110,97,109,101,105,110,102,111,95,118,95,50,54,0);
          let libavdevice1 = String.fromCharCode(97,95,56,53,95,97,117,116,104,111,114,105,122,97,116,105,111,110,0);
         unfill2 += `${unfill2.length % (Math.max(3, 7))}`;
         predictionwinv = "2";
         libavdevice1 += `${(String.fromCharCode(56,0) == libavdevice1 ? libavdevice1.length : predictionwinv.length)}`;
      let rightz = unfill2.length >= 7490687;
      do {
         unfill2 = `${(String.fromCharCode(115,0) == ticked5 ? membern : ticked5.length)}`;
         if (rightz) {
            break;
         }
      } while ((4 >= ticked5.length) && rightz);
          let schedulerg = String.fromCharCode(102,109,97,99,95,122,95,57,51,0);
          let servicec = String.fromCharCode(103,95,52,51,95,116,105,109,101,108,105,109,105,116,0);
         unfill2 = `${unfill2.length | 3}`;
         schedulerg = `${2 * servicec.length}`;
         servicec += "1";
       let questr: Map<any, any> = new Map([[String.fromCharCode(122,95,49,95,111,112,116,105,111,110,97,108,115,0),364], [String.fromCharCode(114,95,53,50,95,105,110,116,101,114,102,97,99,101,0),633]]);
       let mapbuffera: Map<any, any> = new Map([[String.fromCharCode(110,95,56,54,95,115,97,109,112,108,101,100,0),242], [String.fromCharCode(105,110,116,114,105,110,115,105,99,95,109,95,53,57,0),250]]);
          let ewarded6 = 0.0;
         membern += ticked5.length << (Math.min(Math.abs(3), 3));
         ewarded6 *= 3 / (Math.max(parseInt(`${ewarded6}`), 3));
      let condensedk = 9034112 <= ticked5.length;
      do {
          let appleR = 3.0;
         ticked5 = `${2 % (Math.max(3, questr.size))}`;
         appleR -= 3 - parseInt(`${appleR}`);
         if (condensedk) {
            break;
         }
      } while (((questr.size & 4) < 3 && 1 < (4 & ticked5.length)) && condensedk);
      eventsplashN = `${3 << (Math.min(2, Math.abs(membern)))}`;
      iconrefreshe += parseFloat(`${3 >> (Math.min(1, awayteamfields.length))}`);
   if (awayteamfields.length == entryt.length) {
       let time_9ot = String.fromCharCode(116,95,57,95,116,97,114,103,101,116,0);
       let acceptedk = String.fromCharCode(105,110,112,117,116,120,95,118,95,50,55,0);
       let gemfile9 = 2;
       let brightnessb = String.fromCharCode(101,120,99,101,112,116,105,111,110,95,99,95,56,54,0);
       let gradleN: Array<any> = [273, 896, 1];
          let pageB = 5;
          let matchl = 3;
          let redirectJ = 5;
         gemfile9 %= Math.max(1, brightnessb.length);
         pageB <<= Math.min(Math.abs(redirectJ), 2);
         matchl >>= Math.min(Math.abs(redirectJ), 2);
      while ((gemfile9 >> (Math.min(time_9ot.length, 3))) >= 3) {
         gemfile9 |= brightnessb.length - 2;
         break;
      }
      let selectH = 7316530 >= gradleN.length;
      do {
          let whatsappq = 4.0;
          let downarrowZ = 4.0;
          let reactnativeratings2 = String.fromCharCode(101,95,54,53,95,109,97,116,99,104,105,110,102,111,0);
         gradleN.push(reactnativeratings2.length << (Math.min(3, gradleN.length)));
         whatsappq -= parseFloat(`${parseInt(`${downarrowZ}`)}`);
         downarrowZ /= Math.max(4, 2 % (Math.max(8, parseInt(`${whatsappq}`))));
         reactnativeratings2 = `${parseInt(`${whatsappq}`)}`;
         if (selectH) {
            break;
         }
      } while (((gradleN.length - 3) >= 4) && selectH);
      for (let m = 0; m < 3; m++) {
         gemfile9 ^= (time_9ot == String.fromCharCode(71,0) ? gradleN.length : time_9ot.length);
      }
         brightnessb = `${(time_9ot == String.fromCharCode(112,0) ? gradleN.length : time_9ot.length)}`;
         brightnessb += `${acceptedk.length}`;
      for (let w = 0; w < 3; w++) {
          let jingdongM: Array<any> = [217, 215];
          let sharemodalJ = 4.0;
         acceptedk += `${(brightnessb == String.fromCharCode(113,0) ? brightnessb.length : jingdongM.length)}`;
         jingdongM = [parseInt(`${sharemodalJ}`)];
      }
       let baseW = String.fromCharCode(108,97,116,109,95,51,95,52,53,0);
       let shootyesgoale = String.fromCharCode(112,104,97,115,101,95,108,95,50,55,0);
      while (brightnessb.startsWith(baseW)) {
         baseW += `${time_9ot.length * shootyesgoale.length}`;
         break;
      }
      while (time_9ot.startsWith(acceptedk)) {
         acceptedk += `${shootyesgoale.length}`;
         break;
      }
      let renewk = 6307966 >= brightnessb.length;
      do {
         brightnessb = "1";
         if (renewk) {
            break;
         }
      } while (renewk && (brightnessb.includes(time_9ot)));
      if (5 <= brightnessb.length) {
          let u_playerS = 4;
          let networkB = 1.0;
          let fulla = String.fromCharCode(109,95,56,56,95,109,101,109,115,104,105,112,0);
          let binddatasd = 2;
         brightnessb = "3";
         u_playerS |= binddatasd;
         networkB *= parseFloat(`${parseInt(`${networkB}`)}`);
         fulla = `${3 / (Math.max(parseInt(`${networkB}`), 9))}`;
         binddatasd <<= Math.min(Math.abs(fulla.length * 3), 3);
      }
      if (1 == acceptedk.length) {
          let splash0 = String.fromCharCode(115,110,97,112,112,121,95,52,95,53,49,0);
         acceptedk += `${splash0.length + 1}`;
      }
          let componentsj = 3;
          let rightO = 1;
         brightnessb = `${rightO | 1}`;
         componentsj ^= componentsj;
         rightO &= componentsj;
         acceptedk += `${1 << (Math.min(1, baseW.length))}`;
      entryt = `${time_9ot.length}`;
   }

      if (isFocused && !isRefreshing) {

   while ((entryt.length ^ 3) < 3) {
      iconrefreshe /= Math.max(1, (parseFloat(`${String.fromCharCode(119,0) == entryt ? entryt.length : policyQ.length}`)));
      break;
   }
   while (eventsplashN.length == 5) {
      entryt = `${(String.fromCharCode(74,0) == goalt ? parseInt(`${colorsM}`) : goalt.length)}`;
      break;
   }
       let libreactperfloggerjniL = String.fromCharCode(117,110,99,108,101,115,95,97,95,51,57,0);
       let penaltygoaln = String.fromCharCode(121,115,108,111,103,95,105,95,49,54,0);
       let filled6 = 3.0;
      while ((libreactperfloggerjniL.length / (Math.max(9, parseInt(`${filled6}`)))) >= 1 || (libreactperfloggerjniL.length & 1) >= 5) {
         filled6 /= Math.max(3, 2);
         break;
      }
      if (penaltygoaln.endsWith(`${filled6}`)) {
         penaltygoaln = `${2 + libreactperfloggerjniL.length}`;
      }
      let target5 = penaltygoaln.length >= 8151655;
      do {
         penaltygoaln = `${penaltygoaln.length}`;
         if (target5) {
            break;
         }
      } while (target5 && (libreactperfloggerjniL == penaltygoaln));
      while (libreactperfloggerjniL.length >= 1) {
          let default_sH = 0;
         penaltygoaln += `${penaltygoaln.length}`;
         default_sH *= default_sH;
         break;
      }
          let yellows: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,97,108,116,101,114,110,97,116,105,118,101,115,0),370], [String.fromCharCode(114,95,56,54,95,116,114,105,112,108,101,0),71]]);
          let hooks2 = 0.0;
         penaltygoaln += `${parseInt(`${hooks2}`)}`;
         yellows = new Map([[`${yellows.size}`, 1 >> (Math.min(5, Math.abs(yellows.size)))]]);
      if (parseInt(`${filled6}`) == libreactperfloggerjniL.length) {
         filled6 *= libreactperfloggerjniL.length;
      }
      while (4 >= libreactperfloggerjniL.length) {
          let qaagl = String.fromCharCode(105,95,53,57,95,115,117,109,97,114,121,0);
          let sportV: Array<any> = [397, 158, 85];
         penaltygoaln += "2";
         qaagl = `${sportV.length}`;
         sportV = [(qaagl == String.fromCharCode(53,0) ? sportV.length : qaagl.length)];
         break;
      }
      if (2.79 < (1.17 - filled6)) {
          let eyeopenL = String.fromCharCode(101,95,53,53,95,111,110,103,111,105,110,103,0);
         penaltygoaln = `${eyeopenL.length}`;
      }
       let sansB = false;
       let styled = false;
      policyQ = `${3 - switch_gA}`;
      switch_gA ^= (String.fromCharCode(97,0) == eventsplashN ? eventsplashN.length : parseInt(`${colorsM}`));
        setIsRefreshing((prevIsRefreshing) => {

      colorsM += classesP.size >> (Math.min(Math.abs(1), 4));
       let shielddoneF = false;
       let tumbnailX = false;
          let inewsK = false;
         shielddoneF = !inewsK;
         tumbnailX = !shielddoneF;
         shielddoneF = !tumbnailX;
      while (tumbnailX && shielddoneF) {
         shielddoneF = tumbnailX;
         break;
      }
      for (let d = 0; d < 3; d++) {
         tumbnailX = (!shielddoneF ? !tumbnailX : shielddoneF);
      }
         shielddoneF = (shielddoneF ? !tumbnailX : !shielddoneF);
      eventsplashN = `${awayteamfields.length}`;
   while (entryt != String.fromCharCode(109,0) && icont != String.fromCharCode(77,0)) {
       let abidetecty: Map<any, any> = new Map([[String.fromCharCode(97,109,116,95,117,95,50,56,0),843], [String.fromCharCode(98,95,52,54,95,110,105,110,101,0),804]]);
      for (let a = 0; a < 1; a++) {
         abidetecty = new Map([[`${abidetecty.size}`, abidetecty.size]]);
      }
          let updates_: Array<any> = [203, 868];
          let tempS = 0.0;
         abidetecty = new Map([[`${abidetecty.size}`, abidetecty.size]]);
         updates_ = [updates_.length];
         tempS /= Math.max(parseFloat(`${2 % (Math.max(2, parseInt(`${tempS}`)))}`), 1);
      for (let m = 0; m < 3; m++) {
          let dnewsw = String.fromCharCode(110,95,54,51,95,98,105,100,105,114,101,99,116,105,111,110,97,108,0);
          let switch_hm = 5.0;
          let minik = 5.0;
         abidetecty = new Map([[`${minik}`, 1]]);
         dnewsw = `${dnewsw.length | parseInt(`${switch_hm}`)}`;
         switch_hm += parseInt(`${switch_hm}`) / (Math.max(3, 3));
         minik -= parseFloat(`${dnewsw.length}`);
      }
      icont += `${switch_gA}`;
      break;
   }
       let temps = String.fromCharCode(118,95,57,57,95,115,116,114,105,100,101,97,98,108,101,0);
       let privatechatbgz: Map<any, any> = new Map([[String.fromCharCode(112,115,115,104,95,117,95,56,54,0),912], [String.fromCharCode(114,101,102,114,101,115,104,95,57,95,54,55,0),931], [String.fromCharCode(102,95,57,56,95,112,110,103,0),278]]);
      for (let w = 0; w < 2; w++) {
          let e_playerb = true;
          let mutedN = String.fromCharCode(111,95,57,54,95,97,100,100,115,0);
          let gestureU = 3.0;
         temps = `${mutedN.length}`;
         e_playerb = gestureU < gestureU;
         mutedN = `${3 >> (Math.min(Math.abs(parseInt(`${gestureU}`)), 5))}`;
      }
       let album7: Array<any> = [479, 926, 754];
       let mergerO: Array<any> = [887, 189, 888];
          let libglogh = 2.0;
          let downarrowS = String.fromCharCode(113,95,50,49,95,103,101,116,112,101,101,114,97,100,100,114,0);
          let controlz = 2;
         album7 = [2];
         libglogh += parseFloat(`${parseInt(`${libglogh}`)}`);
         downarrowS += "3";
         controlz += 1 ^ parseInt(`${libglogh}`);
         album7.push(album7.length + mergerO.length);
       let actionx = String.fromCharCode(97,99,99,101,112,116,97,98,108,101,95,115,95,49,57,0);
       let eyeopenC = String.fromCharCode(112,95,50,54,95,118,111,105,112,0);
      while (mergerO.length <= album7.length) {
         mergerO.push(actionx.length);
         break;
      }
      goalt = `${temps.length - eventsplashN.length}`;
      privatechatbgz = new Map([[`${privatechatbgz.size}`, 1]]);
          if (prevIsRefreshing) {

   let codeX = 6036750.0 >= colorsM;
   do {
      colorsM *= awayteamfields.length;
      if (codeX) {
         break;
      }
   } while ((5.77 < (iconrefreshe - 3.69) || (iconrefreshe - 3.69) < 2.6) && codeX);
       let currentf = true;
       let malaysia4 = String.fromCharCode(97,108,103,115,95,101,95,57,57,0);
      while (4 >= malaysia4.length) {
         currentf = malaysia4.includes(`${currentf}`);
         break;
      }
         currentf = malaysia4.length > 29;
      while (malaysia4.length > 3 && !currentf) {
         currentf = !currentf;
         break;
      }
         malaysia4 = `${((currentf ? 1 : 5))}`;
         malaysia4 += "3";
      for (let j = 0; j < 2; j++) {
         malaysia4 = `${(malaysia4 == String.fromCharCode(68,0) ? (currentf ? 1 : 2) : malaysia4.length)}`;
      }
      mbnative5 |= 3;
   if (mbnative5 == 3) {
      icont += `${parseInt(`${colorsM}`) + parseInt(`${iconrefreshe}`)}`;
   }
      entryt = `${eventsplashN.length}`;
            return prevIsRefreshing; 
          } else {

   while (4.66 >= (colorsM * 5.80) && (colorsM * iconrefreshe) >= 5.80) {
      iconrefreshe *= parseFloat(`${parseInt(`${colorsM}`)}`);
      break;
   }
      icont = "1";
   while ((mbnative5 % (Math.max(awayteamfields.length, 7))) <= 4 || (awayteamfields.length % 4) <= 1) {
      awayteamfields += `${switch_gA}`;
      break;
   }
   for (let w = 0; w < 3; w++) {
       let zhubo6 = 1.0;
       let gesturesd = String.fromCharCode(105,103,110,111,114,101,100,95,53,95,52,53,0);
       let singaporeX = 5.0;
          let arrowrightX: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,95,56,95,51,54,0),true ], [String.fromCharCode(103,110,114,101,95,116,95,56,49,0),true ]]);
          let unfillY = String.fromCharCode(118,95,55,55,95,98,108,99,107,0);
          let libreactl = String.fromCharCode(120,95,51,53,95,101,120,116,115,107,0);
         gesturesd = `${2 & unfillY.length}`;
         arrowrightX.set(libreactl, 1);
         unfillY += `${3 >> (Math.min(1, libreactl.length))}`;
      for (let i = 0; i < 2; i++) {
         gesturesd = `${parseInt(`${zhubo6}`)}`;
      }
         singaporeX -= (String.fromCharCode(108,0) == gesturesd ? gesturesd.length : parseInt(`${zhubo6}`));
          let pushe = false;
          let libtanr: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,95,104,95,48,0),273], [String.fromCharCode(110,105,115,116,122,95,97,95,53,50,0),175], [String.fromCharCode(117,95,54,55,95,115,112,105,110,108,111,99,107,0),848]]);
         singaporeX -= (String.fromCharCode(122,0) == gesturesd ? (pushe ? 5 : 5) : gesturesd.length);
         pushe = 46 >= libtanr.size;
         libtanr = new Map([[`${libtanr.size}`, libtanr.size]]);
      while (3.12 == (singaporeX / (Math.max(zhubo6, 10))) || (singaporeX / (Math.max(zhubo6, 3))) == 3.12) {
         zhubo6 += (parseFloat(`${String.fromCharCode(121,0) == gesturesd ? gesturesd.length : parseInt(`${singaporeX}`)}`));
         break;
      }
      let context_ = zhubo6 <= 6439090.0;
      do {
         zhubo6 += (parseFloat(`${gesturesd == String.fromCharCode(73,0) ? gesturesd.length : parseInt(`${singaporeX}`)}`));
         if (context_) {
            break;
         }
      } while (context_ && ((zhubo6 + 1.22) < 3.96 && (parseInt(`${zhubo6}`) + gesturesd.length) < 5));
      for (let i = 0; i < 3; i++) {
         gesturesd = `${gesturesd.length}`;
      }
      let blackB = 6478502.0 >= zhubo6;
      do {
          let r_title3 = String.fromCharCode(108,95,50,50,95,105,109,97,103,101,115,0);
          let cancel4 = String.fromCharCode(115,98,114,100,115,112,95,122,95,53,49,0);
         zhubo6 += parseFloat(`${r_title3.length * 1}`);
         r_title3 = "3";
         cancel4 += `${cancel4.length}`;
         if (blackB) {
            break;
         }
      } while ((4 >= (gesturesd.length | 4) || (zhubo6 / 1.67) >= 2.20) && blackB);
      let icons = singaporeX <= 6121016.0;
      do {
         singaporeX /= Math.max(3, (String.fromCharCode(75,0) == gesturesd ? gesturesd.length : parseInt(`${singaporeX}`)));
         if (icons) {
            break;
         }
      } while ((gesturesd.length >= 5) && icons);
      icont += `${switch_gA * 2}`;
   }
            return true; 
          }
        });

   if (5.14 == (skipW - 1.21) && 2 == (3 - parseInt(`${skipW}`))) {
      eventsplashN = `${switch_gA}`;
   }
   let regengC = 9794200 >= entryt.length;
   do {
       let favorites: Array<any> = [852, 920];
       let leftv = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,103,95,50,0);
       let confirmationt = false;
       let application2: Map<any, any> = new Map([[String.fromCharCode(99,100,101,114,114,111,114,95,57,95,52,0),String.fromCharCode(105,115,111,108,97,116,101,95,119,95,53,52,0)], [String.fromCharCode(109,95,55,54,95,121,117,118,112,116,111,117,121,118,121,0),String.fromCharCode(100,95,55,57,95,112,114,105,110,116,111,117,116,0)]]);
         confirmationt = (leftv.length ^ favorites.length) < 49;
      for (let a = 0; a < 3; a++) {
          let libavfilterh = String.fromCharCode(115,116,114,105,115,116,97,114,116,95,109,95,49,57,0);
          let formq = 2;
          let classesy: Array<any> = [String.fromCharCode(102,105,108,116,101,114,95,110,95,53,53,0), String.fromCharCode(115,112,101,97,107,101,114,115,95,50,95,55,51,0)];
          let context5: Map<any, any> = new Map([[String.fromCharCode(114,111,98,117,115,116,95,115,95,56,48,0),351], [String.fromCharCode(116,101,116,114,97,104,101,100,114,97,108,95,115,95,49,56,0),860], [String.fromCharCode(112,114,101,102,102,101,114,101,100,95,106,95,49,52,0),277]]);
          let matchr = 1.0;
         leftv += `${favorites.length * 3}`;
         libavfilterh = `${(String.fromCharCode(82,0) == libavfilterh ? libavfilterh.length : context5.size)}`;
         formq ^= classesy.length % (Math.max(6, parseInt(`${matchr}`)));
         classesy.push(libavfilterh.length ^ parseInt(`${matchr}`));
         context5 = new Map([[`${matchr}`, 3 << (Math.min(1, libavfilterh.length))]]);
      }
         application2.set(`${confirmationt}`, favorites.length);
         confirmationt = favorites.length == application2.size;
      for (let y = 0; y < 3; y++) {
         confirmationt = (96 > ((!confirmationt ? 96 : favorites.length) ^ favorites.length));
      }
         leftv = `${favorites.length}`;
      let nbatrophyn = 5499355 <= application2.size;
      do {
          let eyeopenW = String.fromCharCode(97,117,116,111,98,97,110,104,95,109,95,51,52,0);
          let classesn = String.fromCharCode(119,95,57,48,95,102,112,109,98,0);
         application2 = new Map([[classesn, classesn.length % 2]]);
         eyeopenW = "2";
         if (nbatrophyn) {
            break;
         }
      } while ((confirmationt) && nbatrophyn);
       let china5 = 5.0;
       let sigmobl = 0.0;
       let static_5ma: Array<any> = [String.fromCharCode(121,95,53,55,95,114,101,108,97,116,105,118,101,108,121,0), String.fromCharCode(119,111,114,107,95,116,95,50,57,0)];
       let iconsaveimagem: Array<any> = [String.fromCharCode(104,105,115,116,111,114,121,95,50,95,55,49,0), String.fromCharCode(97,99,100,99,95,109,95,51,0), String.fromCharCode(109,95,54,50,95,119,114,105,116,101,0)];
      while ((1.26 + sigmobl) <= 5.54 && (china5 - 1.26) <= 1.94) {
          let overlay4 = String.fromCharCode(119,95,56,54,95,117,110,100,111,116,116,101,100,0);
          let whistlef = false;
          let projectU = 3.0;
          let t_titleP = String.fromCharCode(109,97,99,101,120,97,109,112,108,101,95,106,95,53,0);
         china5 *= parseFloat(`${parseInt(`${projectU}`) % 2}`);
         overlay4 += `${((whistlef ? 2 : 1) / (Math.max(t_titleP.length, 10)))}`;
         whistlef = overlay4.startsWith(`${whistlef}`);
         projectU -= (2 & (whistlef ? 5 : 3));
         t_titleP += `${t_titleP.length}`;
         break;
      }
         favorites.push(iconsaveimagem.length);
      for (let v = 0; v < 2; v++) {
          let materialL = 2.0;
          let iconbackwhitet: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,116,99,104,95,109,95,52,53,0),683], [String.fromCharCode(100,105,116,97,98,108,101,95,104,95,48,0),911]]);
          let livez = 5.0;
          let areah = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,95,54,95,51,49,0);
         application2 = new Map([[`${application2.size}`, static_5ma.length | 1]]);
         materialL -= 2;
         iconbackwhitet.set(areah, parseInt(`${livez}`) ^ areah.length);
         livez *= (String.fromCharCode(112,0) == areah ? areah.length : parseInt(`${materialL}`));
      }
      entryt = "3";
      if (regengC) {
         break;
      }
   } while (regengC && (1 == (entryt.length % 3) || 3 == (switch_gA % (Math.max(entryt.length, 7)))));
      awayteamfields = `${3 & goalt.length}`;
      colorsM -= 3;
        await handleRefresh(navId, true);

      libreacto = `${(libreacto == String.fromCharCode(52,0) ? icont.length : libreacto.length)}`;
       let bdxadsdkm: Array<any> = [827, 732];
       let smallO = 1;
       let bottom5 = String.fromCharCode(100,105,118,105,100,101,95,52,95,57,57,0);
       let topicd = 4.0;
         smallO *= bottom5.length ^ parseInt(`${topicd}`);
         smallO %= Math.max(2 | smallO, 2);
          let downS = 2.0;
          let codegenl = String.fromCharCode(110,95,53,48,95,97,102,102,105,110,105,116,105,101,115,0);
          let path6: Array<any> = [811, 422];
         bottom5 += `${smallO & 1}`;
         downS *= parseFloat(`${codegenl.length}`);
         codegenl += `${codegenl.length}`;
         path6.push(codegenl.length);
      let middlez = 9445502 >= smallO;
      do {
         smallO /= Math.max(bottom5.length, 2);
         if (middlez) {
            break;
         }
      } while ((topicd >= 3.99) && middlez);
       let actiona: Map<any, any> = new Map([[String.fromCharCode(118,95,49,50,95,114,101,98,117,99,107,101,116,0),String.fromCharCode(99,111,101,102,102,115,112,95,55,95,56,49,0)], [String.fromCharCode(105,100,102,97,95,106,95,49,56,0),String.fromCharCode(98,108,111,99,107,100,95,104,95,52,53,0)], [String.fromCharCode(117,109,102,97,118,114,95,116,95,51,0),String.fromCharCode(98,95,54,95,110,111,104,119,0)]]);
       let minivodY: Map<any, any> = new Map([[String.fromCharCode(106,95,54,95,97,115,115,101,109,98,108,121,0),true ], [String.fromCharCode(101,120,104,97,117,115,116,95,117,95,54,50,0),false ]]);
      let signinup4 = 9169857.0 <= topicd;
      do {
         topicd += bottom5.length;
         if (signinup4) {
            break;
         }
      } while (signinup4 && (!Array.from(minivodY.values()).includes(topicd)));
      if (1 <= (minivodY.size & actiona.size)) {
         minivodY.set(`${bottom5}`, bottom5.length - 2);
      }
      if (bottom5.length <= bdxadsdkm.length) {
         bdxadsdkm = [bdxadsdkm.length];
      }
      awayteamfields = `${bottom5.length % 3}`;
   for (let o = 0; o < 1; o++) {
      mbnative5 <<= Math.min(Math.abs(awayteamfields.length - eventsplashN.length), 4);
   }
      policyQ = `${(libreacto == String.fromCharCode(75,0) ? awayteamfields.length : libreacto.length)}`;
        setIsRefreshing(false);
      }
    };
    
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);
    
    return () => unsubscribe();
  }, [navigation, isFocused, navId, handleRefresh]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<wwLibreactperfloggerjni>;
      index: number;
    }) => {
      return (
        <>
          {item?.data !== undefined &&
            (index === 0 ? (
              <RecommendationHome
                vodCarouselRes={item.data}
                onRefresh={handleRefresh}
                onLoad={handleShowLoading}
                refreshProp={isRefreshing}
              />
            ) : (
              <>
                <CatagoryHome
                  vodCarouselRes={item.data}
                  navId={index}
                  onRefresh={handleRefresh}
                  refreshProp={isRefreshing}
                />
              </>
            ))}
        </>
      );
    },
    []
  );


  const { setNavbarHeight, reloadBanner } = useContext(AdsBannerContext);

  useEffect(() => {
    setNavbarHeight(bottomTabHeight);
  }, [bottomTabHeight]);



  
  
  
  
  
  
  


  
  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      ww_runtime.homeTabViewsAnalytics({
        tab_id: navOptions[0].id.toString(),
        tab_name: navOptions[0].name,
      });
    }
  }, [navOptions])

  useEffect(() => {
    if (navOptions !== undefined && navOptions.length > 0) {
      ww_runtime.homeTabViewsAnalytics({
        tab_id: navOptions[navId].id.toString(),
        tab_name: navOptions[navId].name,
      });
    }
  }, [navId])
  

  const onTabPress = (target?: string) => {
    const targetStr = target?.substring(0, target.indexOf('-'));

    if (navOptions !== undefined) {
      const found = navOptions?.findIndex((e) => e.name === targetStr);
      setNavId(found);

      
      ww_runtime.homeTabClicksAnalytics({
        tab_id: navOptions[found].id.toString(),
        tab_name: navOptions[found].name,
      });
      
    }
  }

  const onTabSwipe = useCallback((index: number, tab: any) => {
    setNavId(index);
  }, []);

  

  return (
    <>
      <ScreenContainer
        containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
        isHome={false} 
      >
        <View
          style={{
            backgroundColor: colors.background,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
        >
          <HomeHeader navigator={navigation} />
        </View>
        <>
          {(!data || isRefreshing) && (
            <View
              style={{
                ...styles.loading,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: "50%",
                marginLeft: -40, 
              }}
            >
              {
                <FastImage
                  style={{ height: 80, width: 80 }}
                  source={require("@static/images/runtimeschedulerPromotion.gif")}
                  resizeMode={"contain"}
                />
              }
            </View>
          )}
          {showHomeLoading && !isOffline && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(20,22,25)",
              }}
            >
              <FastImage
                source={require("@static/images/inouttargetredRoundLeague.gif")}
                style={{
                  width: 150,
                  height: 150,
                  position: "relative",
                  bottom: 50,
                  zIndex: -1,
                }}
                resizeMode={"contain"}
                useFastImage={true}
              />
            </View>
          )}
          {data && !isOffline && getContent({ item: data[0], index: 0 })}
        </>
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
}

export default memo(ww_service_root);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 5,
  },
  vodList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomBlur: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: "absolute",
    bottom: 12,
    left: 16,
    marginRight: 16,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    height: "100%",
  },
});
