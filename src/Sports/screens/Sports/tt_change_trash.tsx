import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import ScreenContainer from "../../../components/container/tt_backward";
import MainHeader from "../../../components/header/tt_inactive_strings_header";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  ttSport,
} from "@type/tt_line_borderless";
import VodPlaylist from "../../../components/playlist/tt_button";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/tt_trophy_cross";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import ttDescTerms from "../../middleware/tt_chat";
import { Url } from "../../middleware/tt_field";
import { formatMatchDate } from "../../utility/utils";
import { ttAway } from "../../types/tt_zhubo";
import MatchSchedule from "../../components/matchSchedule/tt_regeng_center";
import MatchScheduleNav from "../../components/matchSchedule/tt_upload_view";
import NoConnection from "./../../../components/common/tt_fast";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../../../components/modal/tt_type";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

interface ttRegister {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<ttGoal>('userReducer');
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    tt_humidity_guide.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      ttDescTerms.call(Url.sportTypes, {}, "GET").then((res): ttRegister[] => {
        return res.data;
      }),
  });
  const bottomTabHeight = useBottomTabBarHeight();

  const matchTabs = useMemo(
    () =>
      navOptions?.map((x) => ({
        id: x.ids[0],
        title: x.type,
        name: x.type,
      })),
    [navOptions]
  );

  const checkConnection = async () => {
       let verticalA = String.fromCharCode(116,95,51,56,95,115,116,114,105,100,101,115,0);
    let right3 = String.fromCharCode(116,95,49,54,95,112,97,108,109,0);
    let rightk = String.fromCharCode(115,112,108,97,110,101,95,111,95,52,56,0);
    let weibov: Map<any, any> = new Map([[String.fromCharCode(114,95,54,56,95,100,111,119,110,115,97,109,112,108,101,100,0),String.fromCharCode(115,95,54,95,109,111,100,101,109,0)], [String.fromCharCode(119,95,49,55,95,115,116,114,105,110,103,115,0),String.fromCharCode(118,101,114,105,102,105,97,98,108,101,95,116,95,53,52,0)], [String.fromCharCode(122,95,54,54,95,116,97,114,103,101,116,0),String.fromCharCode(97,95,56,51,95,105,110,116,101,114,110,101,100,0)]]);
    let mintegralx = String.fromCharCode(113,95,52,50,0);
    let suggestionw = 3.0;
    let catagoryQ = String.fromCharCode(97,95,55,48,95,119,97,110,116,115,0);
    let manifestz = 4;
    let foreground7 = 3.0;
    let progressO: Array<any> = [237, 573];
    let stringsR = String.fromCharCode(112,95,50,49,95,116,111,103,103,108,101,0);
    let actionss: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,97,116,101,100,95,50,95,51,51,0),false ], [String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,55,95,57,49,0),false ], [String.fromCharCode(122,95,51,55,95,110,97,110,112,97,0),false ]]);
    let backwardL = String.fromCharCode(101,95,54,53,95,97,98,111,117,116,115,0);
       let matho = String.fromCharCode(102,97,118,101,100,0);
       let promotionU = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,56,95,55,57,0);
      if (promotionU == matho) {
         matho = `${matho.length}`;
      }
         matho += `${1 & matho.length}`;
      for (let e = 0; e < 2; e++) {
          let canvasT = String.fromCharCode(115,116,97,99,107,118,105,101,119,95,116,95,50,51,0);
         promotionU = `${promotionU.length}`;
         canvasT += `${canvasT.length << (Math.min(Math.abs(3), 2))}`;
      }
         promotionU += `${matho.length >> (Math.min(promotionU.length, 5))}`;
         promotionU += `${matho.length << (Math.min(4, promotionU.length))}`;
      while (promotionU != String.fromCharCode(71,0)) {
         matho += `${matho.length}`;
         break;
      }
      foreground7 /= Math.max(5, (String.fromCharCode(71,0) == stringsR ? stringsR.length : progressO.length));
   for (let h = 0; h < 2; h++) {
      right3 = `${mintegralx.length}`;
   }
   for (let w = 0; w < 1; w++) {
      verticalA += `${2 >> (Math.min(1, verticalA.length))}`;
   }
      mintegralx = `${mintegralx.length * weibov.size}`;
   for (let u = 0; u < 2; u++) {
       let infoq = 1.0;
       let readq: Array<any> = [3, 648, 509];
       let zoomF = String.fromCharCode(110,95,50,57,95,114,101,112,108,105,101,114,115,0);
       let dplusF = String.fromCharCode(120,95,56,54,95,106,99,109,97,115,116,101,114,0);
       let background7 = String.fromCharCode(120,95,55,56,95,100,101,116,97,105,108,115,0);
      let moviesn = 7808564 >= zoomF.length;
      do {
          let humidityT = String.fromCharCode(104,101,97,100,105,110,103,95,107,95,52,53,0);
          let middlewarew = String.fromCharCode(112,95,56,50,0);
         zoomF += `${background7.length * middlewarew.length}`;
         humidityT += `${2 ^ humidityT.length}`;
         middlewarew = `${(String.fromCharCode(57,0) == humidityT ? humidityT.length : humidityT.length)}`;
         if (moviesn) {
            break;
         }
      } while (moviesn && (!zoomF.startsWith(`${readq.length}`)));
      while (3 > dplusF.length) {
         dplusF += "3";
         break;
      }
      for (let n = 0; n < 2; n++) {
          let catalogC = String.fromCharCode(109,111,100,95,118,95,49,0);
          let promotionJ = false;
          let specu: Map<any, any> = new Map([[String.fromCharCode(120,95,56,54,95,118,100,97,116,97,0),414], [String.fromCharCode(104,95,55,53,95,101,120,105,115,116,97,110,99,101,0),510]]);
          let bodanC: Map<any, any> = new Map([[String.fromCharCode(99,97,110,110,111,116,95,101,95,54,0),String.fromCharCode(120,95,52,55,95,109,117,116,97,116,101,0)], [String.fromCharCode(117,110,105,102,111,114,109,95,114,95,49,56,0),String.fromCharCode(106,95,49,52,95,102,108,111,97,116,105,110,103,0)]]);
         readq = [2 << (Math.min(2, Math.abs(parseInt(`${infoq}`))))];
         catalogC += `${bodanC.size}`;
         promotionJ = (specu.size % (Math.max(3, bodanC.size))) == 30;
         specu.set(`${promotionJ}`, 2);
      }
          let basketballD: Array<any> = [922, 391, 955];
          let config7 = 5.0;
          let description_pb = 4.0;
         readq.push(3);
         basketballD.push(parseInt(`${description_pb}`) - 3);
         config7 -= parseFloat(`${3 ^ parseInt(`${config7}`)}`);
         description_pb /= Math.max(1, parseFloat(`${3}`));
         dplusF = `${readq.length * 1}`;
       let referrerl = String.fromCharCode(114,95,55,50,95,114,101,97,100,115,0);
       let buttonN = String.fromCharCode(108,95,51,49,95,102,114,97,109,101,98,117,102,102,101,114,115,0);
          let nextS = true;
         referrerl += `${3 * dplusF.length}`;
         nextS = (nextS ? nextS : nextS);
         referrerl += `${referrerl.length >> (Math.min(Math.abs(1), 4))}`;
      while (background7 == String.fromCharCode(55,0)) {
          let chinasameQ = String.fromCharCode(105,110,118,101,114,115,101,100,95,51,95,57,56,0);
          let mbsplashj = 2.0;
          let back4: Map<any, any> = new Map([[String.fromCharCode(105,100,120,95,102,95,57,0),916], [String.fromCharCode(109,111,122,97,114,116,95,111,95,51,50,0),185], [String.fromCharCode(110,95,49,57,95,99,97,112,105,0),515]]);
         buttonN = "1";
         chinasameQ += `${chinasameQ.length + 1}`;
         mbsplashj += parseFloat(`${2 - parseInt(`${mbsplashj}`)}`);
         back4.set(`${mbsplashj}`, chinasameQ.length);
         break;
      }
      if (!dplusF.endsWith(background7)) {
         dplusF = `${referrerl.length}`;
      }
         background7 = "3";
         background7 = `${dplusF.length}`;
      if (buttonN == String.fromCharCode(111,0)) {
         background7 = `${(referrerl == String.fromCharCode(79,0) ? background7.length : referrerl.length)}`;
      }
      let maild = String.fromCharCode(121,115,107,49,121,52,121,49,53,0) == dplusF;
      do {
          let moonW: Array<any> = [192, 33, 126];
          let sinaQ: Map<any, any> = new Map([[String.fromCharCode(110,116,104,95,56,95,51,53,0),true ], [String.fromCharCode(110,111,116,101,95,119,95,55,56,0),false ], [String.fromCharCode(104,101,118,109,97,115,107,95,115,95,50,51,0),true ]]);
          let rewardvideo7: Array<any> = [719, 993, 284];
          let nnewsk = String.fromCharCode(119,95,54,49,95,100,101,99,114,101,97,115,101,0);
          let g_unlockt = String.fromCharCode(112,95,49,54,95,99,104,101,99,107,115,116,114,105,100,101,0);
         dplusF += `${(String.fromCharCode(51,0) == buttonN ? buttonN.length : sinaQ.size)}`;
         moonW.push(rewardvideo7.length);
         sinaQ = new Map([[`${moonW.length}`, moonW.length]]);
         rewardvideo7 = [g_unlockt.length ^ 2];
         nnewsk = `${moonW.length * nnewsk.length}`;
         g_unlockt += `${nnewsk.length}`;
         if (maild) {
            break;
         }
      } while (maild && (5 <= dplusF.length));
         referrerl = `${3 * zoomF.length}`;
      progressO.push(3);
   }
   for (let b = 0; b < 3; b++) {
      stringsR += `${1 | parseInt(`${foreground7}`)}`;
   }
   let tooltipsq = catagoryQ.length <= 7309238;
   do {
      catagoryQ = `${1 - rightk.length}`;
      if (tooltipsq) {
         break;
      }
   } while ((!catagoryQ.startsWith(`${foreground7}`)) && tooltipsq);
   let nativeexq = rightk.length <= 7887647;
   do {
       let kickG: Array<any> = [413, 834];
       let scheduleJ = String.fromCharCode(99,97,99,104,101,115,105,122,101,95,114,95,49,52,0);
      for (let n = 0; n < 1; n++) {
         kickG.push(kickG.length);
      }
      if (scheduleJ.length <= kickG.length) {
          let assistO = true;
          let dnewinterstitialO = false;
         scheduleJ += `${((dnewinterstitialO ? 1 : 1) + (assistO ? 1 : 5))}`;
      }
      if ((5 * kickG.length) <= 5) {
         scheduleJ = `${kickG.length & scheduleJ.length}`;
      }
         kickG.push(kickG.length);
         kickG.push((String.fromCharCode(49,0) == scheduleJ ? scheduleJ.length : kickG.length));
      while (5 >= (2 / (Math.max(2, kickG.length)))) {
         scheduleJ += `${kickG.length & scheduleJ.length}`;
         break;
      }
      rightk += `${parseInt(`${foreground7}`) % 2}`;
      if (nativeexq) {
         break;
      }
   } while (nativeexq && (1 >= (weibov.size ^ rightk.length)));

    const state = await NetInfo.fetch();

   while (4 == progressO.length) {
      mintegralx = `${manifestz / (Math.max(parseInt(`${foreground7}`), 10))}`;
      break;
   }
      manifestz %= Math.max(progressO.length % 3, 2);
      verticalA = `${3 | progressO.length}`;
       let interstitialf = 3;
       let clockq: Array<any> = [759, 210, 556];
       let hooksm = String.fromCharCode(113,119,111,114,100,95,55,95,54,57,0);
       let anythinka: Array<any> = [String.fromCharCode(121,117,118,116,101,115,116,95,103,95,53,51,0), String.fromCharCode(111,95,56,52,0), String.fromCharCode(101,95,56,49,95,109,117,120,101,114,115,0)];
       let brightnessZ: Array<any> = [113, 81];
          let turn3 = 2.0;
          let manifestO: Array<any> = [280, 507, 972];
          let promotion8 = String.fromCharCode(112,95,57,57,95,115,105,103,97,108,103,0);
         brightnessZ.push(interstitialf * 1);
         turn3 *= parseFloat(`${1}`);
         manifestO.push(promotion8.length ^ manifestO.length);
         promotion8 = `${manifestO.length}`;
      for (let m = 0; m < 2; m++) {
          let philippinesb = true;
          let agreementd = String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,100,95,50,51,0);
          let mbbid5 = 0;
          let user5 = 0.0;
          let adultu = String.fromCharCode(119,97,108,108,112,97,112,101,114,95,109,95,52,49,0);
         brightnessZ.push(hooksm.length ^ parseInt(`${user5}`));
         philippinesb = adultu.length <= 88;
         agreementd = "2";
         mbbid5 >>= Math.min(2, Math.abs(3));
         user5 *= (parseFloat(`${String.fromCharCode(72,0) == agreementd ? agreementd.length : mbbid5}`));
         adultu = `${(adultu == String.fromCharCode(48,0) ? adultu.length : mbbid5)}`;
      }
         clockq = [3];
      let transferZ = 9561573 <= anythinka.length;
      do {
         anythinka.push((String.fromCharCode(101,0) == hooksm ? hooksm.length : anythinka.length));
         if (transferZ) {
            break;
         }
      } while (transferZ && (anythinka.length == 5));
      if ((5 | brightnessZ.length) < 1 || (5 | anythinka.length) < 4) {
         brightnessZ.push(hooksm.length ^ 3);
      }
      while (hooksm.length <= 3) {
          let starg: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,105,110,103,0),434], [String.fromCharCode(98,105,116,114,118,99,111,110,106,95,122,95,51,52,0),374], [String.fromCharCode(98,95,56,57,95,108,111,99,97,108,116,105,109,101,0),477]]);
          let downloaderk = String.fromCharCode(115,99,97,110,105,110,100,101,120,95,111,95,57,0);
          let stringU = 1;
         hooksm += `${downloaderk.length / 1}`;
         starg.set(`${stringU}`, 3);
         downloaderk += `${stringU}`;
         break;
      }
         interstitialf /= Math.max(brightnessZ.length + 2, 1);
          let collection6 = String.fromCharCode(117,95,55,49,95,116,104,101,116,97,0);
          let skipN = 3;
          let annerW = 1.0;
         hooksm += "3";
         collection6 = `${skipN}`;
         skipN >>= Math.min(3, Math.abs(2));
         annerW += 1;
      stringsR += `${rightk.length}`;
   let pointF = right3 == String.fromCharCode(56,113,100,100,54,50,116,121,56,0);
   do {
       let profile8 = 1.0;
       let targetc = 0.0;
       let guidec = 0.0;
       let anythinkz = 5.0;
          let countdown8 = String.fromCharCode(112,117,114,112,111,115,101,95,107,95,54,57,0);
          let trophye = 5.0;
         guidec *= 2;
         countdown8 += `${parseInt(`${trophye}`)}`;
         trophye *= parseFloat(`${parseInt(`${trophye}`)}`);
          let preview9: Array<any> = [423, 739, 364];
         targetc += parseInt(`${profile8}`);
         preview9.push(1 % (Math.max(4, preview9.length)));
         profile8 -= parseInt(`${anythinkz}`);
      if ((guidec / (Math.max(anythinkz, 5))) == 3.98) {
         anythinkz += parseInt(`${anythinkz}`) >> (Math.min(2, Math.abs(parseInt(`${targetc}`))));
      }
         targetc += parseInt(`${anythinkz}`);
      for (let u = 0; u < 2; u++) {
          let borderlessx = String.fromCharCode(112,95,57,52,95,114,116,99,112,0);
          let videoQ: Map<any, any> = new Map([[String.fromCharCode(121,95,52,55,95,110,117,108,108,105,102,0),531], [String.fromCharCode(106,95,51,53,95,97,114,99,0),833]]);
          let shootS: Array<any> = [String.fromCharCode(112,111,115,115,105,98,108,121,95,109,95,57,49,0), String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,95,56,95,54,0), String.fromCharCode(118,95,55,52,95,103,101,110,101,114,97,116,105,111,110,0)];
         guidec += borderlessx.length >> (Math.min(Math.abs(1), 1));
         borderlessx += `${2 << (Math.min(2, shootS.length))}`;
         videoQ.set(`${shootS.length}`, videoQ.size * 3);
      }
      if (profile8 > 3.16) {
          let saveZ = false;
         anythinkz /= Math.max(parseInt(`${guidec}`) ^ 2, 4);
         saveZ = (!saveZ ? !saveZ : !saveZ);
      }
         anythinkz += 1 << (Math.min(Math.abs(parseInt(`${anythinkz}`)), 4));
         profile8 /= Math.max(1, parseInt(`${targetc}`));
      if (profile8 == 1.37) {
         profile8 *= 1;
      }
      if (guidec == 5.86) {
          let promotionA: Array<any> = [String.fromCharCode(109,95,53,56,95,114,116,114,101,101,110,111,100,101,0), String.fromCharCode(109,117,108,116,105,112,108,101,114,95,118,95,52,52,0), String.fromCharCode(119,95,53,52,95,115,110,105,112,112,101,116,0)];
          let backward1 = 2.0;
          let gradlewq = String.fromCharCode(118,97,99,117,117,109,95,110,95,49,55,0);
         targetc += parseInt(`${backward1}`) / (Math.max(promotionA.length, 7));
         promotionA.push((String.fromCharCode(106,0) == gradlewq ? gradlewq.length : gradlewq.length));
         backward1 /= Math.max(gradlewq.length, 5);
      }
          let ajax_ = 5.0;
         profile8 /= Math.max(2 + parseInt(`${guidec}`), 2);
         ajax_ *= parseInt(`${ajax_}`) | 3;
      right3 += `${right3.length << (Math.min(Math.abs(1), 2))}`;
      if (pointF) {
         break;
      }
   } while ((3 <= (parseInt(`${foreground7}`) / (Math.max(right3.length, 2))) || (right3.length & 3) <= 2) && pointF);
      verticalA += `${2 * parseInt(`${suggestionw}`)}`;
      progressO.push(verticalA.length | rightk.length);
   if (catagoryQ == String.fromCharCode(51,0)) {
       let fileda = String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,105,95,49,51,0);
       let current9 = false;
      let matchr = fileda.length <= 8461401;
      do {
         fileda += `${((current9 ? 5 : 4) % (Math.max(7, fileda.length)))}`;
         if (matchr) {
            break;
         }
      } while (matchr && (!fileda.endsWith(`${current9}`)));
         fileda += "2";
      if (!current9 || 4 < fileda.length) {
         current9 = (14 >= ((current9 ? 14 : fileda.length) - fileda.length));
      }
       let user1: Map<any, any> = new Map([[String.fromCharCode(108,105,103,104,116,95,115,95,56,56,0),106], [String.fromCharCode(114,101,115,105,103,110,95,114,95,53,50,0),204], [String.fromCharCode(122,95,53,95,105,110,116,101,114,110,101,100,0),93]]);
      if (fileda.startsWith(`${current9}`)) {
         fileda += `${3 << (Math.min(1, Math.abs(user1.size)))}`;
      }
      while (current9) {
         current9 = fileda.length >= 15;
         break;
      }
      rightk += `${(String.fromCharCode(101,0) == mintegralx ? mintegralx.length : weibov.size)}`;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

       let playercommony: Array<any> = [String.fromCharCode(108,95,54,57,95,98,114,107,116,105,109,101,103,109,0), String.fromCharCode(108,95,56,50,95,100,105,99,101,0)];
       let downloadedn = String.fromCharCode(99,101,110,116,114,111,105,100,115,95,120,95,57,53,0);
       let assistF = 2.0;
      while (3.39 == (parseFloat(`${downloadedn.length}`) - assistF)) {
         downloadedn += `${playercommony.length & downloadedn.length}`;
         break;
      }
      let z_countZ = downloadedn.length >= 6306680;
      do {
         downloadedn += `${downloadedn.length}`;
         if (z_countZ) {
            break;
         }
      } while ((4 < (playercommony.length + downloadedn.length) || (downloadedn.length + 4) < 4) && z_countZ);
      if (assistF <= 2.67) {
         assistF -= parseFloat(`${playercommony.length / 3}`);
      }
          let l_imageR = String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,110,95,51,54,0);
          let sigmobc: Array<any> = [13, 584];
         playercommony = [sigmobc.length];
         l_imageR += `${l_imageR.length | 3}`;
         sigmobc.push(l_imageR.length >> (Math.min(Math.abs(2), 4)));
      while (3 == (downloadedn.length - playercommony.length) && (playercommony.length - 3) == 2) {
         downloadedn = `${playercommony.length}`;
         break;
      }
         assistF += parseFloat(`${playercommony.length | 2}`);
         playercommony = [2];
      let zoomv = playercommony.length <= 5299110;
      do {
         playercommony.push((downloadedn == String.fromCharCode(79,0) ? playercommony.length : downloadedn.length));
         if (zoomv) {
            break;
         }
      } while (zoomv && (5 > (playercommony.length * parseInt(`${assistF}`))));
      for (let q = 0; q < 1; q++) {
          let signinup7 = String.fromCharCode(105,95,52,52,95,97,116,97,99,101,110,116,101,114,0);
          let side5 = String.fromCharCode(104,111,110,101,121,95,106,95,49,54,0);
         downloadedn += "3";
         signinup7 = `${(signinup7 == String.fromCharCode(80,0) ? side5.length : signinup7.length)}`;
         side5 += `${signinup7.length}`;
      }
      rightk = `${(String.fromCharCode(85,0) == right3 ? right3.length : rightk.length)}`;
   while (rightk != right3) {
       let settings9: Map<any, any> = new Map([[String.fromCharCode(111,95,57,95,98,115,119,97,112,100,115,112,0),809], [String.fromCharCode(119,114,105,116,101,95,115,95,54,56,0),264], [String.fromCharCode(114,95,53,55,95,99,111,109,98,105,110,97,116,111,114,0),167]]);
       let whatsappI = 0.0;
       let logo9 = false;
       let p_positionC = String.fromCharCode(105,95,56,54,95,98,121,114,121,105,0);
       let b_player6: Map<any, any> = new Map([[String.fromCharCode(118,95,57,48,95,115,111,117,114,99,101,105,100,0),403], [String.fromCharCode(115,101,114,105,97,108,95,50,95,57,51,0),6]]);
         logo9 = p_positionC.length <= 59 && whatsappI <= 38.25;
         settings9 = new Map([[`${settings9.size}`, settings9.size]]);
          let miniM = String.fromCharCode(107,95,52,51,95,97,97,99,101,110,99,116,97,98,0);
          let delegate_88 = 4.0;
          let hookI = true;
         whatsappI += (2 ^ (logo9 ? 4 : 5));
         miniM = `${parseInt(`${delegate_88}`) | 2}`;
         delegate_88 *= 1 - miniM.length;
         hookI = 34 > miniM.length;
         whatsappI *= 3;
      for (let n = 0; n < 1; n++) {
         whatsappI += settings9.size;
      }
      while (!logo9 && p_positionC.length == 4) {
          let time_u2 = String.fromCharCode(115,116,114,111,107,101,100,95,103,95,50,56,0);
          let traminik = 5.0;
          let liveq: Map<any, any> = new Map([[String.fromCharCode(108,105,107,101,95,102,95,57,51,0),588], [String.fromCharCode(115,116,101,114,101,111,95,109,95,53,52,0),91]]);
          let temperaturem = String.fromCharCode(109,95,56,57,95,102,114,97,99,116,105,111,110,97,108,0);
         p_positionC += `${temperaturem.length}`;
         time_u2 = "2";
         traminik *= parseFloat(`${time_u2.length * 1}`);
         liveq = new Map([[`${liveq.size}`, 2]]);
         temperaturem = "3";
         break;
      }
      while (p_positionC.endsWith(`${logo9}`)) {
         logo9 = (b_player6.size | p_positionC.length) > 13;
         break;
      }
      while ((settings9.size >> (Math.min(Math.abs(b_player6.size), 4))) > 4) {
         b_player6 = new Map([[`${b_player6.size}`, b_player6.size]]);
         break;
      }
       let catalogU = String.fromCharCode(99,113,117,101,117,101,95,108,95,56,50,0);
       let fieldT = String.fromCharCode(120,98,105,110,95,115,95,54,0);
         whatsappI *= ((logo9 ? 2 : 5) / 3);
         settings9 = new Map([[`${settings9.size}`, settings9.size]]);
         p_positionC += "2";
      if (5 < (settings9.size & 4) && (p_positionC.length & settings9.size) < 4) {
          let refreshM: Map<any, any> = new Map([[String.fromCharCode(116,101,116,114,97,104,101,100,114,97,108,95,103,95,56,55,0),true ], [String.fromCharCode(114,116,108,95,122,95,57,51,0),false ]]);
          let reada = String.fromCharCode(98,95,57,51,95,98,97,115,107,101,116,98,97,108,108,0);
          let style5 = String.fromCharCode(97,115,115,105,103,110,95,108,95,54,55,0);
         settings9 = new Map([[`${settings9.size}`, catalogU.length]]);
         refreshM.set(style5, (style5 == String.fromCharCode(76,0) ? style5.length : reada.length));
         reada = `${style5.length - reada.length}`;
      }
          let rewardk = 1.0;
          let morei: Array<any> = [String.fromCharCode(112,95,51,51,95,116,114,99,0), String.fromCharCode(114,101,115,117,108,116,115,95,100,95,56,56,0), String.fromCharCode(108,95,53,57,95,108,97,98,101,108,110,115,0)];
          let h_countA = String.fromCharCode(112,101,114,109,95,113,95,54,51,0);
         p_positionC += "2";
         rewardk -= (String.fromCharCode(97,0) == h_countA ? morei.length : h_countA.length);
         morei.push(parseInt(`${rewardk}`) * 1);
      while (2.70 >= (2.19 / (Math.max(5, whatsappI)))) {
          let umengi = String.fromCharCode(120,95,51,55,95,101,120,115,115,0);
          let fileJ: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,48,95,98,114,101,97,107,111,117,116,0),306], [String.fromCharCode(105,115,110,111,116,116,97,112,95,53,95,51,50,0),737], [String.fromCharCode(109,95,49,56,95,115,99,101,110,101,99,117,116,0),98]]);
          let sliderJ: Map<any, any> = new Map([[String.fromCharCode(104,95,57,52,95,109,105,110,116,0),String.fromCharCode(104,101,105,103,104,116,95,52,95,56,55,0)], [String.fromCharCode(108,95,55,53,95,105,108,115,116,0),String.fromCharCode(102,102,116,103,95,55,95,56,52,0)], [String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,122,95,53,51,0),String.fromCharCode(116,114,97,110,115,109,105,116,95,122,95,49,50,0)]]);
          let closey = String.fromCharCode(100,101,108,97,121,101,100,95,48,95,57,53,0);
          let gemfileS = true;
         whatsappI /= Math.max(fieldT.length | p_positionC.length, 5);
         umengi = `${fileJ.size}`;
         fileJ.set(umengi, umengi.length);
         sliderJ = new Map([[`${sliderJ.size}`, 1]]);
         closey += `${fileJ.size}`;
         break;
      }
      right3 = `${p_positionC.length}`;
      break;
   }
   let teamp = right3.length >= 7805808;
   do {
      right3 = `${parseInt(`${foreground7}`) + 1}`;
      if (teamp) {
         break;
      }
   } while (teamp && (foreground7 < 5.91));
      verticalA = `${manifestz & 3}`;
   let colorsS = manifestz <= 7674649;
   do {
      manifestz /= Math.max(weibov.size + 2, 2);
      if (colorsS) {
         break;
      }
   } while (colorsS && ((progressO.length | 5) >= 1 || (progressO.length | 5) >= 1));
   let yingo = weibov.size >= 9548331;
   do {
       let commentD: Array<any> = [818, 921];
       let condensedN = 0;
       let checkboxn = 2.0;
       let enewinterstitialp: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,118,97,108,95,55,95,53,48,0),524], [String.fromCharCode(104,95,51,57,95,115,117,103,103,101,115,116,105,111,110,115,0),431], [String.fromCharCode(104,95,56,51,95,103,111,111,103,0),29]]);
         enewinterstitialp = new Map([[`${commentD.length}`, condensedN]]);
      while (condensedN <= checkboxn) {
          let renewr = 5;
          let icon_ = String.fromCharCode(105,95,54,56,95,115,119,97,112,0);
          let termsW = String.fromCharCode(114,101,115,101,116,95,100,95,51,48,0);
          let whatsapp8 = false;
          let result7 = false;
         condensedN /= Math.max(termsW.length * commentD.length, 1);
         renewr *= ((result7 ? 2 : 1));
         icon_ = `${icon_.length / 2}`;
         termsW = `${(String.fromCharCode(84,0) == icon_ ? (whatsapp8 ? 2 : 5) : icon_.length)}`;
         result7 = !result7 && renewr == 10;
         break;
      }
         checkboxn += parseFloat(`${2 >> (Math.min(1, commentD.length))}`);
         checkboxn -= parseFloat(`${enewinterstitialp.size}`);
      while (commentD.includes(condensedN)) {
          let targetu = String.fromCharCode(116,95,57,57,95,108,105,98,120,118,105,100,0);
          let chinaP = 3;
         condensedN %= Math.max(1, 5);
         targetu += `${targetu.length}`;
         chinaP &= chinaP ^ 1;
         break;
      }
         condensedN /= Math.max(2, parseInt(`${checkboxn}`));
      let viewerw = checkboxn <= 6153443.0;
      do {
         checkboxn *= parseFloat(`${commentD.length % (Math.max(10, condensedN))}`);
         if (viewerw) {
            break;
         }
      } while (viewerw && (1.98 > (2.22 * checkboxn)));
      if (condensedN >= checkboxn) {
         condensedN /= Math.max(enewinterstitialp.size * 3, 2);
      }
      let recommendationy = enewinterstitialp.size >= 8619677;
      do {
          let backwardY = String.fromCharCode(104,95,49,51,95,117,110,101,115,99,97,112,101,0);
          let ajaxO = String.fromCharCode(121,95,52,56,95,107,101,101,112,105,110,103,0);
         enewinterstitialp.set(`${condensedN}`, enewinterstitialp.size / 3);
         backwardY = `${ajaxO.length}`;
         ajaxO = `${ajaxO.length}`;
         if (recommendationy) {
            break;
         }
      } while ((1 > (2 - commentD.length)) && recommendationy);
         condensedN |= 2;
          let groupk = String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,97,95,57,52,0);
          let more6 = 3.0;
          let bellS = String.fromCharCode(116,95,55,48,95,108,115,112,114,0);
         commentD = [groupk.length];
         groupk += `${parseInt(`${more6}`)}`;
         more6 *= parseFloat(`${bellS.length >> (Math.min(5, Math.abs(parseInt(`${more6}`))))}`);
         bellS += `${bellS.length & 2}`;
         commentD.push(3);
      weibov = new Map([[right3, (String.fromCharCode(54,0) == right3 ? right3.length : condensedN)]]);
      if (yingo) {
         break;
      }
   } while (yingo && (1.10 < (1.76 + suggestionw) || 1.4 < (suggestionw + 1.76)));
   if ((weibov.size + right3.length) == 4 && 4 == (weibov.size + right3.length)) {
      weibov = new Map([[right3, right3.length - 2]]);
   }
   let usernameu = suggestionw <= 6042172.0;
   do {
       let floatingh: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,101,114,95,105,95,55,0),String.fromCharCode(109,95,50,52,95,115,109,97,108,108,101,114,0)], [String.fromCharCode(98,95,52,50,95,100,111,110,101,0),String.fromCharCode(100,97,112,112,95,105,95,52,50,0)], [String.fromCharCode(114,95,55,95,97,99,107,117,112,0),String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,117,95,57,51,0)]]);
       let paginationL = 4;
       let k_viewp = String.fromCharCode(98,117,102,108,101,110,95,121,95,56,0);
         k_viewp += `${1 + paginationL}`;
         floatingh.set(`${paginationL}`, paginationL);
         floatingh.set(`${k_viewp}`, floatingh.size * k_viewp.length);
         paginationL += k_viewp.length >> (Math.min(Math.abs(3), 2));
         floatingh = new Map([[`${paginationL}`, 2]]);
       let relatedk = String.fromCharCode(122,105,109,103,95,108,95,55,55,0);
       let orientationZ = 4.0;
      for (let s = 0; s < 1; s++) {
         k_viewp = `${parseInt(`${orientationZ}`)}`;
      }
      let splashl = 5947052 >= relatedk.length;
      do {
         relatedk += `${relatedk.length}`;
         if (splashl) {
            break;
         }
      } while ((!relatedk.endsWith(k_viewp)) && splashl);
      suggestionw *= parseFloat(`${1}`);
      if (usernameu) {
         break;
      }
   } while (((1.84 + suggestionw) <= 2.93) && usernameu);
    setIsOffline(offline);

   while (1.9 > (2.67 + foreground7)) {
       let fill1: Array<any> = [503, 721, 578];
       let modelp = 4;
       let moonP: Array<any> = [249, 832, 918];
       let materialQ = true;
       let commonA: Map<any, any> = new Map([[String.fromCharCode(110,95,56,53,95,116,114,97,110,115,108,97,116,105,111,110,115,0),6], [String.fromCharCode(103,95,52,51,95,115,116,112,115,0),460]]);
      let memberS = commonA.size >= 6239737;
      do {
         commonA = new Map([[`${moonP.length}`, 2]]);
         if (memberS) {
            break;
         }
      } while (memberS && (4 == (2 >> (Math.min(1, moonP.length))) || 4 == (commonA.size >> (Math.min(Math.abs(2), 5)))));
      while ((commonA.size >> (Math.min(3, fill1.length))) == 2) {
         commonA = new Map([[`${fill1.length}`, 2]]);
         break;
      }
      if ((moonP.length - fill1.length) <= 2 || 4 <= (moonP.length - 2)) {
         fill1 = [modelp + fill1.length];
      }
      while (!materialQ) {
         materialQ = commonA.size < 94;
         break;
      }
      for (let h = 0; h < 1; h++) {
         fill1.push(2 >> (Math.min(5, fill1.length)));
      }
         fill1 = [((materialQ ? 4 : 5) & moonP.length)];
      let mbbannerU = materialQ ? !materialQ : materialQ;
      do {
          let logoutX = String.fromCharCode(100,95,49,57,95,98,105,110,104,101,120,0);
          let iconn = String.fromCharCode(118,105,98,114,97,116,101,95,122,95,51,48,0);
         materialQ = String.fromCharCode(85,0) == iconn;
         logoutX = `${(String.fromCharCode(120,0) == logoutX ? logoutX.length : logoutX.length)}`;
         iconn += `${(logoutX == String.fromCharCode(122,0) ? logoutX.length : logoutX.length)}`;
         if (mbbannerU) {
            break;
         }
      } while (mbbannerU && (!materialQ));
       let pagef = String.fromCharCode(115,97,118,105,110,103,115,95,121,95,54,51,0);
       let typesD = String.fromCharCode(115,105,112,104,97,115,104,95,107,95,55,0);
      if (3 > (commonA.size % (Math.max(4, pagef.length)))) {
          let editF: Map<any, any> = new Map([[String.fromCharCode(97,97,99,112,115,95,122,95,49,54,0),false ], [String.fromCharCode(105,95,55,48,95,115,112,101,99,105,102,105,101,114,115,0),false ], [String.fromCharCode(109,105,99,95,122,95,57,48,0),false ]]);
          let sinaQA = 1.0;
         pagef = "3";
         editF.set(`${sinaQA}`, editF.size * 3);
         sinaQA /= Math.max(3, 2);
      }
      let change2 = moonP.length >= 6473292;
      do {
          let largeI = 1.0;
          let untickV = 3.0;
          let umengR = 1;
          let readV = String.fromCharCode(114,101,108,97,121,101,100,95,53,95,51,0);
          let dragk = 1.0;
         moonP = [typesD.length];
         largeI /= Math.max(parseInt(`${untickV}`), 3);
         umengR += 3 >> (Math.min(4, Math.abs(parseInt(`${dragk}`))));
         readV += `${parseInt(`${dragk}`) | 2}`;
         if (change2) {
            break;
         }
      } while ((1 > (pagef.length * 2) && 5 > (moonP.length * 2)) && change2);
      if (3 < (moonP.length - 5) && (5 - moonP.length) < 4) {
         moonP.push(pagef.length);
      }
          let switch_qz = String.fromCharCode(99,97,112,116,117,114,101,114,95,53,95,50,48,0);
          let frame_2jA = String.fromCharCode(108,95,50,56,95,118,99,116,101,115,116,0);
         commonA = new Map([[`${modelp}`, modelp & 3]]);
         switch_qz = "1";
         frame_2jA = "2";
      for (let w = 0; w < 2; w++) {
         fill1 = [fill1.length];
      }
      let internetL = moonP.length >= 7285878;
      do {
          let placement1 = String.fromCharCode(98,105,116,115,116,114,101,97,109,95,50,95,51,52,0);
          let kicko = 5.0;
          let resendP = 5.0;
          let middlewarez = String.fromCharCode(115,101,116,100,97,114,95,100,95,57,55,0);
         moonP = [placement1.length];
         placement1 = "3";
         kicko *= 3 + middlewarez.length;
         resendP /= Math.max(parseFloat(`${middlewarez.length}`), 3);
         if (internetL) {
            break;
         }
      } while (internetL && (moonP.length <= fill1.length));
         typesD = "1";
      foreground7 += 1 / (Math.max(8, fill1.length));
      break;
   }
      actionss.set(rightk, 3);
       let dangert = String.fromCharCode(110,95,50,54,95,115,116,117,110,0);
       let customb = String.fromCharCode(119,95,57,95,109,105,108,105,111,110,115,0);
       let teamQ = 4.0;
       let sheet6: Array<any> = [213, 495, 431];
      let downloadingc = String.fromCharCode(120,97,105,122,122,120,113,118,120,50,0) == customb;
      do {
          let topics: Array<any> = [131, 778];
          let loading6: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,109,97,108,95,108,95,55,55,0),351], [String.fromCharCode(107,95,55,95,108,105,98,99,111,100,101,99,0),34], [String.fromCharCode(101,95,52,54,95,109,111,100,101,109,0),20]]);
         customb = "1";
         topics = [topics.length];
         loading6 = new Map([[`${loading6.size}`, loading6.size * topics.length]]);
         if (downloadingc) {
            break;
         }
      } while ((2.9 == (teamQ * parseFloat(`${customb.length}`))) && downloadingc);
      while (1 >= (parseInt(`${teamQ}`) - sheet6.length)) {
          let membershipr = 1.0;
         teamQ -= parseFloat(`${parseInt(`${teamQ}`)}`);
         membershipr *= parseInt(`${membershipr}`);
         break;
      }
      let overd = 5624191.0 <= teamQ;
      do {
         teamQ += parseFloat(`${dangert.length - 2}`);
         if (overd) {
            break;
         }
      } while (((sheet6.length % (Math.max(1, 9))) < 1 && (sheet6.length - parseInt(`${teamQ}`)) < 1) && overd);
      if ((teamQ / (Math.max(8, parseFloat(`${customb.length}`)))) >= 2.21 && (parseFloat(`${customb.length}`) / (Math.max(3, teamQ))) >= 2.21) {
         teamQ /= Math.max(3, parseFloat(`${dangert.length}`));
      }
         sheet6.push(parseInt(`${teamQ}`) >> (Math.min(Math.abs(2), 4)));
       let gmaile = 5.0;
       let matchG = 2.0;
      for (let q = 0; q < 2; q++) {
         teamQ *= parseFloat(`${3 % (Math.max(parseInt(`${teamQ}`), 8))}`);
      }
       let plush: Array<any> = [String.fromCharCode(97,95,52,52,95,105,102,97,115,116,0), String.fromCharCode(106,95,52,56,95,97,99,99,117,114,97,116,101,0), String.fromCharCode(99,111,110,116,105,110,117,101,100,95,102,95,50,50,0)];
      catagoryQ = `${mintegralx.length / (Math.max(10, verticalA.length))}`;
   let bufferS = 6497937.0 <= foreground7;
   do {
      foreground7 += parseInt(`${suggestionw}`) << (Math.min(rightk.length, 1));
      if (bufferS) {
         break;
      }
   } while ((manifestz >= foreground7) && bufferS);
      progressO = [manifestz * 1];
      manifestz *= progressO.length;
   for (let s = 0; s < 2; s++) {
      mintegralx += "2";
   }
   while ((3 * progressO.length) == 4 || 3 == (progressO.length * right3.length)) {
       let modityg = String.fromCharCode(112,114,101,118,105,111,117,115,95,110,95,56,51,0);
      if (modityg.includes(modityg)) {
         modityg = `${modityg.length >> (Math.min(Math.abs(1), 4))}`;
      }
          let searchbark: Map<any, any> = new Map([[String.fromCharCode(99,95,54,54,95,114,102,116,98,115,117,98,0),494], [String.fromCharCode(108,111,103,105,99,95,49,95,49,51,0),829], [String.fromCharCode(101,95,49,48,48,95,119,101,105,103,104,116,101,100,0),779]]);
         modityg += `${modityg.length ^ searchbark.size}`;
      if (4 < modityg.length) {
          let megaphone9 = 5.0;
          let plashD = 3;
          let vietnamt = String.fromCharCode(100,114,101,102,95,118,95,56,53,0);
          let o_lockz = false;
          let clearz = String.fromCharCode(115,108,105,112,95,101,95,54,51,0);
         modityg += `${clearz.length}`;
         megaphone9 *= parseFloat(`${plashD}`);
         plashD *= plashD / 2;
         vietnamt = `${parseInt(`${megaphone9}`)}`;
         o_lockz = plashD <= parseInt(`${megaphone9}`);
         clearz += `${plashD / (Math.max(2, vietnamt.length))}`;
      }
      right3 += `${catagoryQ.length ^ 1}`;
      break;
   }
    if (!offline) {

      manifestz /= Math.max(mintegralx.length, 3);
   while (2 <= (4 << (Math.min(3, Math.abs(actionss.size)))) || (backwardL.length << (Math.min(3, Math.abs(actionss.size)))) <= 4) {
      actionss = new Map([[`${manifestz}`, 2]]);
      break;
   }
      catagoryQ += `${(String.fromCharCode(70,0) == stringsR ? stringsR.length : progressO.length)}`;
      weibov.set(`${foreground7}`, manifestz + parseInt(`${foreground7}`));
      actionss = new Map([[rightk, catagoryQ.length]]);
       let filterA = String.fromCharCode(102,95,52,55,95,106,112,101,103,100,115,112,0);
       let mbbidl = 2;
       let combinedt = 1.0;
       let main_jQ = String.fromCharCode(116,105,99,107,95,52,95,56,54,0);
      while ((mbbidl | filterA.length) >= 1) {
         filterA = `${main_jQ.length ^ parseInt(`${combinedt}`)}`;
         break;
      }
          let mbbannerK: Array<any> = [928, 25];
          let upgradeD = 2.0;
         mbbidl %= Math.max(filterA.length | parseInt(`${combinedt}`), 2);
         mbbannerK = [parseInt(`${upgradeD}`)];
         upgradeD -= parseFloat(`${parseInt(`${upgradeD}`) - mbbannerK.length}`);
      while (mbbidl > 5) {
         combinedt /= Math.max(parseFloat(`${main_jQ.length ^ 1}`), 1);
         break;
      }
      while (filterA.length == 4) {
         filterA = `${3 % (Math.max(6, main_jQ.length))}`;
         break;
      }
      while (filterA.length <= 1) {
         mbbidl -= 2 & parseInt(`${combinedt}`);
         break;
      }
      while (filterA != String.fromCharCode(85,0)) {
          let unselectedl = 3.0;
          let yingk = String.fromCharCode(101,95,56,52,95,100,105,114,101,99,116,105,111,110,97,108,0);
          let dropdown_: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,105,116,121,95,107,95,52,55,0),803], [String.fromCharCode(122,95,56,55,95,119,105,107,105,0),131], [String.fromCharCode(102,95,53,95,121,117,118,114,103,98,0),358]]);
         main_jQ = `${main_jQ.length * filterA.length}`;
         unselectedl -= parseFloat(`${dropdown_.size * parseInt(`${unselectedl}`)}`);
         yingk = `${yingk.length}`;
         dropdown_ = new Map([[`${dropdown_.size}`, yingk.length]]);
         break;
      }
         mbbidl <<= Math.min(Math.abs(mbbidl), 3);
      while ((parseInt(`${combinedt}`) / (Math.max(main_jQ.length, 3))) < 4) {
         main_jQ = `${2 >> (Math.min(Math.abs(parseInt(`${combinedt}`)), 2))}`;
         break;
      }
      manifestz >>= Math.min(Math.abs((String.fromCharCode(67,0) == filterA ? filterA.length : parseInt(`${foreground7}`))), 5);
   let uploadV = mintegralx == String.fromCharCode(98,109,108,0);
   do {
      mintegralx = "3";
      if (uploadV) {
         break;
      }
   } while ((mintegralx.length > rightk.length) && uploadV);
   for (let l = 0; l < 3; l++) {
      stringsR = `${weibov.size + parseInt(`${foreground7}`)}`;
   }
      handleRefresh();
    }
  };
  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp;
    const date2Timestamp = userState.user?.userMemberExpired;
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
  }, [userState.user?.userCurrentTimestamp]);

  const handleRefresh = useCallback(async () => {
       let gesture4: Map<any, any> = new Map([[String.fromCharCode(101,99,108,95,50,95,55,49,0),String.fromCharCode(117,95,51,95,113,109,98,108,0)], [String.fromCharCode(121,95,56,52,95,105,110,116,114,101,97,100,119,114,105,116,101,0),String.fromCharCode(121,95,54,50,95,114,101,115,101,114,118,101,0)], [String.fromCharCode(104,100,101,99,95,118,95,56,48,0),String.fromCharCode(120,99,101,112,116,105,111,110,95,107,95,51,57,0)]]);
    let blacklist2: Array<any> = [49, 924, 849];
    let with_vaP = false;
    let termsc = 5.0;
    let zhuboY = false;
    let customL = 4.0;
    let projectS = String.fromCharCode(99,95,51,53,95,108,108,118,105,100,100,115,112,101,110,99,0);
    let ranks = 0;
    let manifestL: Map<any, any> = new Map([[String.fromCharCode(103,114,97,110,112,111,115,95,117,95,52,0),419], [String.fromCharCode(114,95,53,57,95,105,110,115,112,101,99,116,97,98,108,101,0),854]]);
   if ((projectS.length - parseInt(`${customL}`)) > 2) {
       let dialogl = false;
       let photoH = 3.0;
       let ajax6 = 5.0;
       let changew = String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,0);
       let calendarP: Map<any, any> = new Map([[String.fromCharCode(103,114,97,98,98,101,114,95,99,95,50,0),true ], [String.fromCharCode(115,95,57,48,95,115,108,102,0),true ], [String.fromCharCode(116,95,52,57,95,105,110,115,112,101,99,116,97,98,108,101,0),true ]]);
         photoH /= Math.max(4, parseFloat(`${calendarP.size | 2}`));
         changew = `${calendarP.size}`;
      let viewsU = calendarP.size >= 7628420;
      do {
          let w_managerk = true;
          let popupv: Array<any> = [557, 675, 586];
         calendarP.set(`${ajax6}`, 1);
         w_managerk = popupv.length > 96 || !w_managerk;
         popupv = [popupv.length & 1];
         if (viewsU) {
            break;
         }
      } while ((1.92 >= (parseFloat(`${calendarP.size}`) - photoH) || 4.65 >= (1.92 - photoH)) && viewsU);
         ajax6 -= parseFloat(`${parseInt(`${ajax6}`) ^ 2}`);
          let sentry2 = 2.0;
          let megaphoneD = false;
         calendarP = new Map([[changew, parseInt(`${photoH}`)]]);
         sentry2 /= Math.max((parseInt(`${sentry2}`) >> (Math.min(5, Math.abs((megaphoneD ? 2 : 5))))), 4);
         megaphoneD = !megaphoneD || sentry2 == 90.84;
       let plusE: Map<any, any> = new Map([[String.fromCharCode(119,109,97,118,111,105,99,101,95,51,95,55,48,0),String.fromCharCode(109,95,53,55,95,99,111,100,101,99,114,97,119,0)], [String.fromCharCode(115,111,114,101,115,101,114,118,101,95,120,95,53,54,0),String.fromCharCode(97,99,99,101,112,116,97,98,108,101,95,121,95,57,52,0)], [String.fromCharCode(115,99,104,101,109,101,115,95,50,95,50,55,0),String.fromCharCode(102,95,49,50,95,119,100,101,99,0)]]);
       let gmail3: Map<any, any> = new Map([[String.fromCharCode(97,95,50,48,95,110,111,116,105,102,105,101,115,0),964], [String.fromCharCode(114,101,100,117,99,116,105,111,110,95,105,95,52,51,0),380], [String.fromCharCode(120,95,57,0),739]]);
          let eventj = String.fromCharCode(100,95,54,48,95,117,110,99,108,101,115,0);
         photoH *= parseFloat(`${changew.length}`);
         eventj += `${eventj.length}`;
         plusE.set(`${ajax6}`, plusE.size / (Math.max(2, 3)));
      if (!changew.startsWith(`${calendarP.size}`)) {
          let countdown5 = String.fromCharCode(110,101,97,114,101,110,100,95,51,95,57,48,0);
          let indexr = 0.0;
          let dycreatorD = 0.0;
          let matchx = String.fromCharCode(118,95,57,52,95,119,104,97,116,115,0);
         calendarP = new Map([[`${plusE.size}`, ((dialogl ? 2 : 2) % (Math.max(plusE.size, 10)))]]);
         countdown5 = `${countdown5.length}`;
         indexr += parseFloat(`${3 * countdown5.length}`);
         dycreatorD += parseInt(`${indexr}`);
         matchx += `${matchx.length}`;
      }
      if ((gmail3.size - 1) < 1 || dialogl) {
          let goali: Map<any, any> = new Map([[String.fromCharCode(101,95,50,56,95,99,117,115,116,111,109,105,122,101,114,0),String.fromCharCode(112,95,54,50,95,101,110,99,111,100,101,115,0)], [String.fromCharCode(120,95,51,53,95,99,105,112,104,101,114,0),String.fromCharCode(118,95,55,52,95,104,101,120,98,121,116,101,0)]]);
         dialogl = 25.3 <= ajax6 || dialogl;
         goali = new Map([[`${goali.size}`, goali.size & goali.size]]);
      }
      let suggestionV = dialogl ? !dialogl : dialogl;
      do {
         dialogl = 96 < calendarP.size;
         if (suggestionV) {
            break;
         }
      } while ((plusE.size > 2) && suggestionV);
      projectS = `${2 / (Math.max(4, parseInt(`${customL}`)))}`;
   }
   let stringsP = zhuboY ? !zhuboY : zhuboY;
   do {
      zhuboY = projectS.length > parseInt(`${termsc}`);
      if (stringsP) {
         break;
      }
   } while ((with_vaP) && stringsP);
   if (5 < projectS.length) {
       let pathS: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,115,99,97,108,101,95,114,95,53,49,0),164], [String.fromCharCode(99,111,110,118,101,114,116,111,114,95,54,95,49,52,0),947]]);
       let button1 = true;
      for (let m = 0; m < 2; m++) {
          let fieldL: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,0),230], [String.fromCharCode(100,95,55,49,95,101,116,104,0),441], [String.fromCharCode(104,95,55,55,95,105,110,115,116,0),559]]);
          let canvasj = 3.0;
          let recommendation7 = 5.0;
          let sigmobn = String.fromCharCode(114,95,51,48,95,112,111,108,108,0);
         pathS = new Map([[`${recommendation7}`, 1 / (Math.max(5, sigmobn.length))]]);
         fieldL = new Map([[`${fieldL.size}`, fieldL.size * parseInt(`${canvasj}`)]]);
         canvasj /= Math.max(3, parseFloat(`${fieldL.size << (Math.min(Math.abs(3), 4))}`));
         recommendation7 *= parseFloat(`${1}`);
         sigmobn = `${parseInt(`${canvasj}`) / 3}`;
      }
      let default_q_ = pathS.size <= 8874057;
      do {
         pathS = new Map([[`${pathS.size}`, ((button1 ? 1 : 3) - 1)]]);
         if (default_q_) {
            break;
         }
      } while ((1 < pathS.size) && default_q_);
      for (let n = 0; n < 2; n++) {
         button1 = pathS.size < 28 || button1;
      }
         button1 = button1 && pathS.size == 93;
          let resendD = 3.0;
         pathS.set(`${button1}`, pathS.size);
         resendD /= Math.max(1, parseInt(`${resendD}`) & 2);
         button1 = (((button1 ? 65 : pathS.size) / (Math.max(pathS.size, 7))) >= 65);
      projectS += `${parseInt(`${termsc}`) * 3}`;
   }
   let googleJ = zhuboY ? !zhuboY : zhuboY;
   do {
      zhuboY = !zhuboY;
      if (googleJ) {
         break;
      }
   } while (googleJ && ((4.49 - termsc) > 4.4 || zhuboY));
      with_vaP = customL > 41.73;

    setIsRefreshing(true);

   while (Array.from(gesture4.values()).includes(termsc)) {
      termsc += blacklist2.length;
      break;
   }
   let predictionu = String.fromCharCode(106,116,100,109,51,101,55,115,111,55,0) == projectS;
   do {
       let rankD = String.fromCharCode(108,110,110,105,100,95,118,95,56,50,0);
       let button6 = true;
       let register_s8D: Map<any, any> = new Map([[String.fromCharCode(109,117,108,97,100,100,95,116,95,56,0),false ], [String.fromCharCode(121,95,57,95,97,112,112,114,101,99,97,116,105,111,110,0),false ]]);
       let paths = 2.0;
         paths *= (parseFloat(`${rankD.length % (Math.max(4, (button6 ? 5 : 5)))}`));
       let progress3 = String.fromCharCode(116,97,98,108,101,115,95,52,95,49,48,0);
       let googleA = String.fromCharCode(103,95,55,55,95,109,98,103,114,97,112,104,0);
         googleA = "1";
      let spinnerz = button6 ? !button6 : button6;
      do {
         button6 = !rankD.startsWith(`${paths}`);
         if (spinnerz) {
            break;
         }
      } while ((2 >= register_s8D.size) && spinnerz);
         register_s8D = new Map([[`${register_s8D.size}`, register_s8D.size + googleA.length]]);
      if (button6) {
         rankD += `${((button6 ? 2 : 5))}`;
      }
      for (let q = 0; q < 1; q++) {
          let dragX = String.fromCharCode(115,117,110,118,101,114,95,111,95,53,50,0);
          let firebase7 = String.fromCharCode(115,101,109,97,110,116,105,99,115,95,53,95,49,49,0);
          let dplusS = 5;
          let teamy = String.fromCharCode(113,95,50,0);
          let securityg: Map<any, any> = new Map([[String.fromCharCode(115,109,111,111,116,104,95,100,95,49,50,0),437], [String.fromCharCode(98,95,52,95,112,114,105,109,101,114,0),80], [String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,102,95,53,53,0),936]]);
         rankD = `${rankD.length >> (Math.min(Math.abs(3), 2))}`;
         dragX += `${dplusS * 3}`;
         firebase7 += "2";
         dplusS |= firebase7.length / 1;
         teamy = `${dragX.length}`;
         securityg = new Map([[`${dplusS}`, (teamy == String.fromCharCode(114,0) ? teamy.length : dplusS)]]);
      }
      let resultc = register_s8D.size <= 6781526;
      do {
         register_s8D.set(`${progress3}`, progress3.length);
         if (resultc) {
            break;
         }
      } while ((1 == register_s8D.size) && resultc);
      let matchv = button6 ? !button6 : button6;
      do {
         button6 = 14 == register_s8D.size;
         if (matchv) {
            break;
         }
      } while ((5.31 < paths && 2.89 < (paths - 5.31)) && matchv);
      let description__P = paths >= 6920767.0;
      do {
         paths -= (parseFloat(`${(button6 ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${paths}`)), 5))}`));
         if (description__P) {
            break;
         }
      } while (description__P && (progress3.startsWith(`${paths}`)));
      for (let i = 0; i < 3; i++) {
         paths -= (parseFloat(`${3 + (button6 ? 5 : 3)}`));
      }
          let assistj = String.fromCharCode(110,95,57,54,95,102,108,105,99,0);
         rankD = `${rankD.length}`;
         assistj = `${assistj.length % 1}`;
      projectS += `${register_s8D.size ^ parseInt(`${termsc}`)}`;
      if (predictionu) {
         break;
      }
   } while (predictionu && (2 > projectS.length));
   if (blacklist2.includes(customL)) {
      blacklist2 = [gesture4.size];
   }
      customL *= gesture4.size >> (Math.min(Math.abs(1), 5));
      termsc *= parseInt(`${customL}`) << (Math.min(1, Math.abs(2)));
    

      gesture4 = new Map([[`${blacklist2.length}`, (projectS == String.fromCharCode(112,0) ? blacklist2.length : projectS.length)]]);
   while (blacklist2.length > 3 && (blacklist2.length / (Math.max(3, 10))) > 5) {
      blacklist2.push(blacklist2.length - 1);
      break;
   }
       let nativeexW = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,117,95,49,50,0);
       let gesturesE = 2;
       let vietname = 2;
      while (2 == nativeexW.length) {
          let filedL = 4.0;
         nativeexW = `${vietname}`;
         filedL /= Math.max(parseFloat(`${3}`), 2);
         break;
      }
       let statisticsX = 5.0;
      let const_sP = 7144384 <= vietname;
      do {
         vietname <<= Math.min(4, Math.abs(3));
         if (const_sP) {
            break;
         }
      } while (const_sP && (2 <= (nativeexW.length ^ 3) || 3 <= (nativeexW.length ^ vietname)));
      while ((gesturesE / (Math.max(parseInt(`${statisticsX}`), 10))) >= 4 && 2 >= (gesturesE - 4)) {
          let package_m6k: Map<any, any> = new Map([[String.fromCharCode(108,95,53,48,95,105,110,100,105,99,97,116,105,111,110,0),false ], [String.fromCharCode(105,100,119,116,95,111,95,53,54,0),true ], [String.fromCharCode(116,101,120,116,97,116,116,114,95,113,95,49,57,0),true ]]);
          let robotoI = String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,95,103,95,49,57,0);
         gesturesE >>= Math.min(2, Math.abs(parseInt(`${statisticsX}`)));
         package_m6k.set(`${robotoI}`, package_m6k.size % (Math.max(1, 2)));
         robotoI = `${1 >> (Math.min(1, robotoI.length))}`;
         break;
      }
         gesturesE >>= Math.min(Math.abs(vietname), 5);
          let albumq = String.fromCharCode(105,95,49,49,95,98,105,110,100,0);
         gesturesE += gesturesE * nativeexW.length;
         albumq = `${(String.fromCharCode(108,0) == albumq ? albumq.length : albumq.length)}`;
      if ((gesturesE & 3) == 3 && (3 & gesturesE) == 1) {
         vietname ^= vietname % 1;
      }
      let downloading5 = 8766002 >= gesturesE;
      do {
         gesturesE += nativeexW.length ^ 1;
         if (downloading5) {
            break;
         }
      } while (downloading5 && (1 == gesturesE));
         nativeexW = `${parseInt(`${statisticsX}`)}`;
      termsc += parseInt(`${termsc}`) << (Math.min(4, Math.abs(3)));
   while (3.64 >= (5.89 / (Math.max(10, termsc)))) {
      termsc *= projectS.length << (Math.min(5, Math.abs(parseInt(`${customL}`))));
      break;
   }
      gesture4.set(`${zhuboY}`, (3 & (zhuboY ? 1 : 5)));
    await refetch();

   let launcher1 = 9360366 <= blacklist2.length;
   do {
      blacklist2 = [blacklist2.length];
      if (launcher1) {
         break;
      }
   } while ((zhuboY) && launcher1);
   let launchT = blacklist2.length <= 7473425;
   do {
      blacklist2.push(parseInt(`${customL}`));
      if (launchT) {
         break;
      }
   } while ((Array.from(gesture4.values()).includes(blacklist2.length)) && launchT);
      customL /= Math.max(blacklist2.length, 3);
   for (let y = 0; y < 1; y++) {
      gesture4 = new Map([[`${with_vaP}`, 1]]);
   }
   let redirectI = zhuboY ? !zhuboY : zhuboY;
   do {
       let mbridget: Map<any, any> = new Map([[String.fromCharCode(112,95,50,57,95,97,100,103,114,111,117,112,0),925], [String.fromCharCode(116,105,110,105,116,95,99,95,57,53,0),433]]);
       let sinah = 4;
       let blackc = String.fromCharCode(98,95,52,52,95,114,101,99,101,110,116,0);
       let agreement_ = String.fromCharCode(100,120,103,105,95,52,95,52,51,0);
       let history0: Array<any> = [321, 361, 530];
       let leftj: Array<any> = [377, 59, 908];
      if (4 >= agreement_.length) {
         mbridget = new Map([[`${mbridget.size}`, mbridget.size]]);
      }
      for (let f = 0; f < 2; f++) {
          let movies4 = 2.0;
          let chatE = String.fromCharCode(119,116,118,102,105,108,101,95,103,95,56,49,0);
          let termsV = String.fromCharCode(115,115,101,114,116,95,118,95,52,56,0);
          let alertH: Map<any, any> = new Map([[String.fromCharCode(109,95,52,52,95,97,114,98,105,116,101,114,0),true ], [String.fromCharCode(115,109,111,111,116,104,105,110,103,95,122,95,54,54,0),true ]]);
          let ballU = String.fromCharCode(111,95,55,95,119,117,110,100,101,102,0);
         agreement_ += `${3 / (Math.max(6, blackc.length))}`;
         movies4 += 3 + alertH.size;
         chatE += "3";
         termsV += `${alertH.size & termsV.length}`;
         ballU += `${termsV.length + ballU.length}`;
      }
         history0.push(sinah << (Math.min(agreement_.length, 1)));
       let videojsz = 2.0;
       let blackE = 0.0;
          let fillU = String.fromCharCode(115,95,49,56,95,111,112,117,115,101,110,99,0);
          let patht = String.fromCharCode(116,114,97,110,115,102,101,114,95,117,95,50,0);
         sinah &= parseInt(`${blackE}`);
         fillU += `${patht.length}`;
         patht = `${fillU.length}`;
      let e_positionZ = 7548071 >= history0.length;
      do {
         history0 = [mbridget.size];
         if (e_positionZ) {
            break;
         }
      } while (((sinah >> (Math.min(Math.abs(5), 2))) == 5 || (5 >> (Math.min(4, history0.length))) == 1) && e_positionZ);
      if ((2 * leftj.length) >= 3 || 5 >= (2 * leftj.length)) {
         leftj = [sinah & agreement_.length];
      }
      zhuboY = blackc == String.fromCharCode(79,0);
      if (redirectI) {
         break;
      }
   } while (redirectI && (!zhuboY));
    setIsRefreshing(false);

   let mbbidv = 9673674.0 >= termsc;
   do {
       let reportT = 0;
         reportT += reportT / (Math.max(reportT, 6));
         reportT |= reportT;
      while (1 <= (reportT + reportT) && (reportT + 1) <= 3) {
         reportT %= Math.max(4, reportT);
         break;
      }
      termsc /= Math.max(projectS.length, 1);
      if (mbbidv) {
         break;
      }
   } while ((!with_vaP) && mbbidv);
      gesture4 = new Map([[`${gesture4.size}`, ((zhuboY ? 4 : 4) ^ gesture4.size)]]);
   if ((1.52 + customL) >= 2.86 || (ranks + parseInt(`${customL}`)) >= 2) {
      customL /= Math.max(4, blacklist2.length & 1);
   }
      zhuboY = (blacklist2.length % (Math.max(projectS.length, 5))) < 23;
   let refreshz = customL >= 7620118.0;
   do {
      customL -= ((with_vaP ? 1 : 5) % 3);
      if (refreshz) {
         break;
      }
   } while ((4.62 >= (customL * 3.77)) && refreshz);
    return;
  }, []);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
        showBecomeVIPOverlay={showBecomeVIPOverlay}
        selectedTab="lockUntick"
      />

      <View
        style={{
          backgroundColor: colors.background,
          paddingLeft: spacing.sideOffset,
          
          paddingRight: spacing.sideOffset + 90,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 8,
        }}
      >
        <Text
          style={{
            ...textVariants.bigHeader,
            color: colors.text,
            fontSize: 22,
            ...styles.header,
          }}
        >
          体育
        </Text>

        <TouchableOpacity
          activeOpacity={!ttFast.isVip(userState.user)
            ? 0.5
            : 1
          }
          onPress={() => {
            if (!ttFast.isVip(userState.user)) {
              setShowBecomeVIPOverlay(true);
            }
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#222327",
              paddingHorizontal: 10,
              borderRadius: 30,
              paddingVertical: 5,
              position: "relative",
              top: 5,
            }}
          >
            <Image
              style={styles.iconStyle}
              source={require("@static/images/profile/screenLong_b.png")}
            />

            {!ttFast.isVip(userState.user) ? (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                成为VIP
              </Text>
            ) : (
              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                VIP {vipRemainingDay}天
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {matchTabs && matchTabs.length > 0 && !isOffline && (
        <MatchScheduleNav
          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
          tabList={matchTabs}
        />
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 10,
  },
  iconStyle: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
});
