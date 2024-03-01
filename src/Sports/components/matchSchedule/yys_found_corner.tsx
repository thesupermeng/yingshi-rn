import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import styles from "./yys_gpay_roboto";
import { TouchableOpacity } from "react-native";
import { formatMatchDate } from "../../utility/utils";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { yys_List } from "../../types/yys_league_mounting";
import { Url } from "../../middleware/yys_desc_resend";
import { useInfiniteQuery } from "@tanstack/react-query";
import yys_Matches from "../../middleware/yys_libjsi";
import MatchScheduleVip from "./yys_service_libreactnativeblob";
import FastImage from "../../../components/common/yys_vertical_collection";
import { TOPON_BANNER_HEIGHT } from "@utility/yys_ajax_switch";
import { yys_Xadsdk } from "@type/yys_libzeus";
import { yys_StringsVignette } from "@utility/yys_ping";
import { yys_FavoriteCustom } from "@constants";
import { yys_MinivodPangle } from "../../../../yys_mimo_vignette";
import { BannerContainer } from "../../../components/container/yys_armva_streaming";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector, useSelector } from "@hooks/yys_frame";
import yys_event_common from "../../../../Umeng/yys_event_common";
import { yys_CurrentLang } from "../../../api/yys_xadsdk_libcrashsdk";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

interface yys_ConfigureUimanager {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  isLive?: boolean;
}

type yys_White = {
  date: string | undefined;
  data: yys_List | undefined;
};

type yys_with = {
  headers: number[];
  data: yys_White[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false,
  isLive = false,
}: yys_ConfigureUimanager) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [bannerAd, setBannerAd] = useState<yys_Xadsdk>();
  const [bannerAdList, setBannerAdList] = useState<Array<yys_Xadsdk>>([]);
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isVip = yys_RelatedTooltips.isVip(userState.user);


  const [matches, setMatches] = useState<yys_with>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let shareS: Array<any> = [809, 517];
    let renew7 = 3;
    let downloaded_: Array<any> = [644, 509];
    let shrinki = String.fromCharCode(108,95,50,54,95,115,97,105,122,0);
    let crossS = 2;
    let hejiB: Array<any> = [389, 655];
    let borderlessk = 0.0;
    let libflipperG: Map<any, any> = new Map([[String.fromCharCode(118,115,110,112,114,105,110,116,102,95,112,95,55,51,0),184], [String.fromCharCode(122,95,53,57,95,100,101,108,116,97,0),233], [String.fromCharCode(99,95,54,53,95,112,101,97,107,115,0),359]]);
    let basketballD = 2;
    let policyO = 0.0;
    let plashL: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,117,110,100,95,118,95,52,54,0),true ], [String.fromCharCode(121,95,54,95,98,97,114,107,0),false ], [String.fromCharCode(98,111,114,100,101,114,95,112,95,49,57,0),false ]]);
    let googleP = String.fromCharCode(109,118,99,111,117,110,116,95,49,95,54,55,0);
    let usernameO = String.fromCharCode(111,102,102,95,49,95,56,57,0);
      basketballD += parseInt(`${borderlessk}`);
   while (5 == (renew7 + parseInt(`${policyO}`)) && (policyO + 5.46) == 1.69) {
       let rncoreT = 4;
       let backgroundE = 5.0;
       let actiong = 0.0;
       let verticalH = 2.0;
       let submitR = String.fromCharCode(101,110,103,105,110,101,115,95,53,95,55,51,0);
      let chinas = String.fromCharCode(114,113,103,0) == submitR;
      do {
          let delegate_v5 = 2.0;
         submitR = `${parseInt(`${actiong}`)}`;
         delegate_v5 += parseInt(`${delegate_v5}`);
         if (chinas) {
            break;
         }
      } while (chinas && (submitR.startsWith(`${rncoreT}`)));
      while (rncoreT == verticalH) {
          let star6: Map<any, any> = new Map([[String.fromCharCode(122,95,56,52,95,103,100,105,103,114,97,98,0),true ], [String.fromCharCode(103,95,50,53,95,99,111,118,101,114,97,103,101,0),true ], [String.fromCharCode(114,101,118,111,107,101,95,117,95,57,53,0),false ]]);
          let result7 = 4.0;
          let infoo = String.fromCharCode(112,114,101,102,101,114,95,118,95,56,53,0);
          let xvodI = true;
         verticalH /= Math.max(2, parseFloat(`${parseInt(`${actiong}`) | parseInt(`${backgroundE}`)}`));
         star6 = new Map([[`${star6.size}`, (String.fromCharCode(111,0) == infoo ? star6.size : infoo.length)]]);
         result7 /= Math.max(2, (parseFloat(`${infoo == String.fromCharCode(120,0) ? infoo.length : star6.size}`)));
         xvodI = infoo.length <= 20;
         break;
      }
      for (let q = 0; q < 2; q++) {
         submitR += "3";
      }
         rncoreT += parseInt(`${verticalH}`);
      for (let t = 0; t < 3; t++) {
         actiong *= parseFloat(`${submitR.length | 3}`);
      }
          let becomeB: Array<any> = [String.fromCharCode(115,111,110,111,95,97,95,49,56,0), String.fromCharCode(116,95,52,52,95,108,111,111,112,98,114,101,97,107,0), String.fromCharCode(122,95,49,50,95,105,110,116,101,114,118,97,108,0)];
         backgroundE -= parseFloat(`${parseInt(`${backgroundE}`)}`);
         becomeB.push(3);
       let becomey = String.fromCharCode(108,105,115,116,110,101,114,115,95,121,95,51,52,0);
       let edite: Map<any, any> = new Map([[String.fromCharCode(109,95,49,49,95,109,111,118,101,112,97,103,101,0),442], [String.fromCharCode(116,101,114,109,95,111,95,53,49,0),239], [String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,57,95,56,54,0),484]]);
       let colors7: Map<any, any> = new Map([[String.fromCharCode(102,95,55,52,95,112,116,111,110,0),750], [String.fromCharCode(102,114,97,110,100,111,109,95,108,95,55,54,0),83], [String.fromCharCode(100,101,97,100,108,105,110,101,95,51,95,52,52,0),656]]);
      while (!submitR.includes(`${actiong}`)) {
         submitR += "3";
         break;
      }
         rncoreT >>= Math.min(2, Math.abs(1));
      let sentryt = 7995374.0 <= verticalH;
      do {
         verticalH += parseFloat(`${edite.size | becomey.length}`);
         if (sentryt) {
            break;
         }
      } while ((4 > (becomey.length / (Math.max(5, 2)))) && sentryt);
       let casting4 = String.fromCharCode(115,95,54,50,95,109,117,108,116,105,112,108,101,114,0);
       let ajax0 = String.fromCharCode(114,95,54,54,95,114,101,110,100,101,114,97,98,108,101,0);
         rncoreT &= 3;
       let member2 = String.fromCharCode(106,95,56,50,95,114,97,112,105,100,0);
         submitR += `${(becomey == String.fromCharCode(99,0) ? becomey.length : parseInt(`${actiong}`))}`;
      policyO += parseInt(`${borderlessk}`);
      break;
   }
   let directj = 4964208 >= hejiB.length;
   do {
      hejiB = [3 ^ renew7];
      if (directj) {
         break;
      }
   } while (((crossS << (Math.min(Math.abs(1), 4))) > 2) && directj);

    let url = "";

      policyO *= 1;
      shrinki = `${hejiB.length / (Math.max(2, 9))}`;
   if (downloaded_.includes(basketballD)) {
      basketballD -= 2;
   }
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === "") {
      url = "?";
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    

   while ((3 & libflipperG.size) > 2 || (policyO / 1.68) > 2.29) {
      libflipperG = new Map([[googleP, 1]]);
      break;
   }
   if (1.60 <= (4.94 - borderlessk) || 4.59 <= (borderlessk + 4.94)) {
      borderlessk *= renew7 | 2;
   }
   while (1 >= plashL.size) {
       let time_9x = String.fromCharCode(109,101,115,97,103,101,115,95,122,95,50,57,0);
       let completec = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,116,95,55,48,0);
          let soundy = 2.0;
         time_9x += `${completec.length << (Math.min(3, Math.abs(parseInt(`${soundy}`))))}`;
       let weibo6: Array<any> = [196, 432, 789];
      while (time_9x.startsWith(completec)) {
          let sansO = true;
         completec += `${((sansO ? 3 : 4) ^ completec.length)}`;
         break;
      }
         weibo6 = [time_9x.length];
      let sortO = completec.length <= 9868599;
      do {
         completec = `${(completec == String.fromCharCode(114,0) ? weibo6.length : completec.length)}`;
         if (sortO) {
            break;
         }
      } while ((4 == completec.length) && sortO);
      if (time_9x.includes(`${weibo6.length}`)) {
         time_9x = `${weibo6.length % 2}`;
      }
      plashL.set(`${policyO}`, renew7);
      break;
   }
    

      shareS = [2 << (Math.min(2, Math.abs(crossS)))];
   let binddatasT = 5350802 <= shareS.length;
   do {
      shareS = [renew7];
      if (binddatasT) {
         break;
      }
   } while ((Array.from(plashL.keys()).includes(`${shareS.length}`)) && binddatasT);
       let statisticsY = 2;
       let kuaishouF: Map<any, any> = new Map([[String.fromCharCode(104,95,52,54,95,100,97,112,112,0),String.fromCharCode(103,105,103,97,98,121,116,101,115,95,56,95,55,50,0)], [String.fromCharCode(103,95,55,95,115,97,102,101,116,121,0),String.fromCharCode(113,95,57,52,95,111,118,101,114,108,97,121,115,0)], [String.fromCharCode(97,108,110,117,109,95,97,95,50,56,0),String.fromCharCode(97,95,56,56,95,115,116,114,97,116,101,103,121,0)]]);
      let tickv = kuaishouF.size >= 6903580;
      do {
         kuaishouF = new Map([[`${kuaishouF.size}`, 2 >> (Math.min(2, Math.abs(statisticsY)))]]);
         if (tickv) {
            break;
         }
      } while (tickv && (1 == (4 * statisticsY)));
         statisticsY *= 2 / (Math.max(7, statisticsY));
      let animationsx = statisticsY <= 6189098;
      do {
          let configO = 2.0;
          let schedulern = 5.0;
          let playp = 2.0;
          let neon1 = false;
         statisticsY >>= Math.min(Math.abs(kuaishouF.size), 1);
         configO /= Math.max(((neon1 ? 4 : 3) + parseInt(`${playp}`)), 2);
         schedulern *= parseInt(`${configO}`);
         playp *= parseInt(`${playp}`) - parseInt(`${configO}`);
         neon1 = configO == 31.9;
         if (animationsx) {
            break;
         }
      } while ((5 == (1 << (Math.min(4, Math.abs(kuaishouF.size))))) && animationsx);
      while (kuaishouF.size < statisticsY) {
         kuaishouF = new Map([[`${kuaishouF.size}`, kuaishouF.size / (Math.max(2, 2))]]);
         break;
      }
      let traminir = kuaishouF.size <= 6016733;
      do {
         kuaishouF.set(`${statisticsY}`, kuaishouF.size - statisticsY);
         if (traminir) {
            break;
         }
      } while ((1 < (3 >> (Math.min(2, Math.abs(statisticsY))))) && traminir);
      for (let t = 0; t < 1; t++) {
          let stepO: Array<any> = [995, 702, 595];
          let gdtadvJ = String.fromCharCode(112,95,49,48,48,95,98,108,99,107,0);
         statisticsY ^= kuaishouF.size;
         stepO = [gdtadvJ.length];
         gdtadvJ = `${stepO.length >> (Math.min(gdtadvJ.length, 1))}`;
      }
      basketballD %= Math.max(1, hejiB.length);
    

       let smallV = String.fromCharCode(99,97,105,112,95,112,95,53,0);
      if (smallV.length > 1) {
         smallV += `${smallV.length}`;
      }
      if (smallV.length > 1) {
          let catalog_ = 5.0;
         smallV += `${(smallV == String.fromCharCode(78,0) ? smallV.length : parseInt(`${catalog_}`))}`;
      }
      let shrinkk = smallV == String.fromCharCode(100,104,101,111,122,49,119,53,107,0);
      do {
         smallV += `${smallV.length % (Math.max(smallV.length, 2))}`;
         if (shrinkk) {
            break;
         }
      } while ((smallV.length >= 3) && shrinkk);
      crossS *= parseInt(`${borderlessk}`) / 2;
       let flyerW: Map<any, any> = new Map([[String.fromCharCode(115,95,56,52,95,102,111,114,119,97,114,100,0),506], [String.fromCharCode(114,95,53,49,95,116,119,114,112,0),616]]);
       let orientationP = String.fromCharCode(118,112,109,99,95,118,95,52,55,0);
       let models6 = 0.0;
      let relatedV = String.fromCharCode(119,121,120,98,49,105,100,49,54,49,0) == orientationP;
      do {
         orientationP += `${orientationP.length << (Math.min(4, Math.abs(parseInt(`${models6}`))))}`;
         if (relatedV) {
            break;
         }
      } while (relatedV && (orientationP.length < parseInt(`${models6}`)));
      if ((models6 / (Math.max(1, orientationP.length))) >= 1.49) {
          let kicko = String.fromCharCode(117,95,50,55,95,115,117,98,115,101,115,115,105,111,110,0);
          let vertical2 = String.fromCharCode(116,95,57,53,95,111,103,103,100,101,99,0);
          let huaweiM = String.fromCharCode(98,105,116,105,122,101,110,95,112,95,51,0);
          let volumed: Array<any> = [124, 13, 638];
          let sortP = false;
         orientationP = "2";
         kicko += `${huaweiM.length}`;
         vertical2 += `${2 >> (Math.min(4, volumed.length))}`;
         huaweiM = `${vertical2.length * huaweiM.length}`;
         volumed.push(((sortP ? 4 : 4) << (Math.min(Math.abs(1), 3))));
      }
         orientationP = `${orientationP.length ^ parseInt(`${models6}`)}`;
          let dialogU: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,101,115,95,50,95,56,50,0),692], [String.fromCharCode(98,114,101,97,107,115,95,51,95,56,54,0),903], [String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,51,95,56,48,0),64]]);
          let stylea = true;
         flyerW.set(`${orientationP}`, (String.fromCharCode(88,0) == orientationP ? dialogU.size : orientationP.length));
         dialogU.set(`${stylea}`, 2);
      if (!orientationP.startsWith(`${models6}`)) {
         models6 += 2 - flyerW.size;
      }
         flyerW = new Map([[orientationP, 3]]);
      while (4.88 <= (models6 * 3.34) && (flyerW.size / 4) <= 2) {
         models6 /= Math.max(2, (String.fromCharCode(88,0) == orientationP ? orientationP.length : parseInt(`${models6}`)));
         break;
      }
         models6 += 1 / (Math.max(7, flyerW.size));
          let areaV = String.fromCharCode(98,110,98,105,110,95,121,95,52,51,0);
         orientationP = `${(String.fromCharCode(87,0) == areaV ? flyerW.size : areaV.length)}`;
      hejiB = [1];
   if (libflipperG.size == plashL.size) {
      plashL.set(`${shareS.length}`, 3);
   }
    

   if (4 < (4 ^ plashL.size)) {
      plashL.set(`${shareS.length}`, 1 ^ shareS.length);
   }
      plashL.set(`${crossS}`, 1);
       let mergerA = String.fromCharCode(99,108,101,97,114,98,105,116,95,55,95,54,52,0);
      if (mergerA.length >= 3) {
         mergerA += "1";
      }
      for (let n = 0; n < 1; n++) {
         mergerA = `${mergerA.length}`;
      }
      for (let v = 0; v < 3; v++) {
         mergerA += `${mergerA.length}`;
      }
      borderlessk -= mergerA.length;
    

   let sortr = 6264040 <= downloaded_.length;
   do {
      downloaded_.push(googleP.length - 2);
      if (sortr) {
         break;
      }
   } while ((downloaded_.includes(renew7)) && sortr);
   while (4 <= googleP.length) {
      googleP = `${plashL.size}`;
      break;
   }
       let long_eoY = 1.0;
       let long_anw = String.fromCharCode(109,117,109,98,97,105,95,98,95,55,50,0);
       let flipperi = String.fromCharCode(112,97,114,116,105,99,108,101,95,104,95,55,51,0);
         long_anw = `${flipperi.length}`;
         long_eoY /= Math.max(parseFloat(`${flipperi.length}`), 4);
      if (!flipperi.endsWith(long_anw)) {
         long_anw += `${long_anw.length | 1}`;
      }
         long_anw += `${long_anw.length / (Math.max(flipperi.length, 7))}`;
      while ((long_eoY - 2.45) == 4.94) {
          let darks = String.fromCharCode(107,95,56,49,95,102,117,100,103,101,0);
         flipperi += `${1 % (Math.max(5, flipperi.length))}`;
         darks = `${2 ^ darks.length}`;
         break;
      }
      let dataj = 9666861 >= long_anw.length;
      do {
         long_anw = `${1 - parseInt(`${long_eoY}`)}`;
         if (dataj) {
            break;
         }
      } while (dataj && (!long_anw.startsWith(flipperi)));
          let imagemanagerl = String.fromCharCode(122,95,55,56,95,114,101,101,108,0);
          let other4 = 3.0;
          let i_positionT = true;
         long_anw = `${imagemanagerl.length}`;
         imagemanagerl += `${((i_positionT ? 5 : 3) & parseInt(`${other4}`))}`;
         other4 += (parseInt(`${other4}`) - (i_positionT ? 2 : 3));
      for (let i = 0; i < 3; i++) {
         long_eoY -= parseFloat(`${parseInt(`${long_eoY}`)}`);
      }
         long_eoY /= Math.max(parseFloat(`${3 / (Math.max(8, long_anw.length))}`), 2);
      shrinki += `${(String.fromCharCode(104,0) == flipperi ? parseInt(`${borderlessk}`) : flipperi.length)}`;
    

   while (3 <= shareS.length) {
      shrinki += `${googleP.length * 2}`;
      break;
   }
   if (!shrinki.endsWith(`${borderlessk}`)) {
       let notification3 = 4.0;
       let middle4 = 1.0;
      while (1.78 <= (middle4 - notification3)) {
         middle4 /= Math.max(parseInt(`${notification3}`) >> (Math.min(1, Math.abs(parseInt(`${middle4}`)))), 3);
         break;
      }
      if (notification3 <= middle4) {
         notification3 /= Math.max(3, parseFloat(`${1 | parseInt(`${notification3}`)}`));
      }
         middle4 *= parseInt(`${notification3}`);
      for (let y = 0; y < 2; y++) {
          let viewerq = 4.0;
          let root4 = 4;
          let eighteenH = 5.0;
          let shrinki9 = 2;
          let commentL = 4.0;
         middle4 += root4;
         viewerq *= parseFloat(`${parseInt(`${viewerq}`) ^ shrinki9}`);
         root4 += parseInt(`${viewerq}`);
         eighteenH += parseInt(`${commentL}`) << (Math.min(2, Math.abs(shrinki9)));
         commentL += shrinki9;
      }
      let playercommonK = 9766644.0 >= middle4;
      do {
         middle4 *= parseInt(`${notification3}`);
         if (playercommonK) {
            break;
         }
      } while (playercommonK && (notification3 < 2.59));
      if (1.96 == (middle4 + 3)) {
         notification3 /= Math.max(2, parseFloat(`${3 ^ parseInt(`${notification3}`)}`));
      }
      shrinki = `${(googleP == String.fromCharCode(75,0) ? googleP.length : parseInt(`${middle4}`))}`;
   }
      shrinki = `${libflipperG.size}`;
    

       let tickC = 2.0;
       let debugH = 4.0;
       let ksadG = String.fromCharCode(97,95,55,48,95,106,112,103,0);
      if (debugH < 4.14) {
         debugH /= Math.max(1, (ksadG == String.fromCharCode(119,0) ? parseInt(`${tickC}`) : ksadG.length));
      }
         tickC *= parseFloat(`${1}`);
       let nterstitial7 = false;
      if ((3.44 + tickC) == 3.28 || (2 / (Math.max(9, ksadG.length))) == 4) {
          let proxyW = 4.0;
          let malaysia9 = 0;
          let detailsG = 1.0;
         tickC -= parseFloat(`${1}`);
         proxyW /= Math.max(1, 2 | malaysia9);
         malaysia9 &= parseInt(`${detailsG}`) / (Math.max(1, parseInt(`${proxyW}`)));
         detailsG += parseInt(`${proxyW}`) | malaysia9;
      }
         tickC += parseFloat(`${ksadG.length | parseInt(`${debugH}`)}`);
         ksadG += `${parseInt(`${debugH}`) / 2}`;
      if (3.73 <= (debugH * 5)) {
         tickC += parseFloat(`${ksadG.length / 2}`);
      }
      let screenf = nterstitial7 ? !nterstitial7 : nterstitial7;
      do {
          let libfbjni7 = String.fromCharCode(101,95,53,95,97,114,105,98,0);
          let philippinesf = true;
         nterstitial7 = philippinesf;
         libfbjni7 = `${2 << (Math.min(5, libfbjni7.length))}`;
         if (screenf) {
            break;
         }
      } while (((5.71 + tickC) <= 4.0) && screenf);
      while (5.79 >= (tickC * 5.18) && (debugH * 5.18) >= 4.70) {
          let zhuboj: Array<any> = [String.fromCharCode(100,101,114,105,118,97,116,105,118,101,95,120,95,54,52,0), String.fromCharCode(121,95,52,49,95,112,108,97,121,108,105,115,116,0), String.fromCharCode(109,111,100,101,114,110,95,53,95,54,48,0)];
          let showH = String.fromCharCode(121,95,52,95,110,111,114,109,97,108,105,122,101,100,0);
          let target9 = String.fromCharCode(111,117,116,111,117,116,95,110,95,56,52,0);
          let floatingy = String.fromCharCode(109,112,101,103,116,115,95,57,95,52,0);
          let editp = String.fromCharCode(119,95,56,48,95,116,97,112,116,0);
         debugH /= Math.max(editp.length, 3);
         zhuboj = [showH.length << (Math.min(Math.abs(1), 4))];
         showH = "3";
         target9 = `${2 - showH.length}`;
         floatingy = `${zhuboj.length}`;
         editp = `${floatingy.length & zhuboj.length}`;
         break;
      }
      plashL.set(shrinki, 2 >> (Math.min(2, shrinki.length)));
      crossS %= Math.max(libflipperG.size / (Math.max(shrinki.length, 3)), 1);
   let activeu = downloaded_.length <= 5264584;
   do {
      downloaded_ = [plashL.size];
      if (activeu) {
         break;
      }
   } while ((2 > (downloaded_.length / 4) && (renew7 / (Math.max(downloaded_.length, 2))) > 4) && activeu);
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
       let androidC = 2.0;
    let yingI = 4;
    let annerU = String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,95,105,95,54,51,0);
    let nativemodulew = 3;
    let containerT = String.fromCharCode(116,95,50,48,95,97,114,99,104,105,118,101,114,0);
    let matches_: Map<any, any> = new Map([[String.fromCharCode(114,95,56,49,95,101,120,101,99,0),true ], [String.fromCharCode(101,95,54,50,95,103,97,109,109,97,0),true ], [String.fromCharCode(102,105,108,116,101,114,102,110,95,114,95,55,54,0),true ]]);
    let chinasamed = true;
    let goal7: Map<any, any> = new Map([[String.fromCharCode(107,95,56,54,95,99,104,101,118,114,111,110,0),String.fromCharCode(114,101,97,116,116,97,99,104,95,115,95,52,52,0)], [String.fromCharCode(115,99,114,111,108,108,101,114,95,105,95,54,0),String.fromCharCode(108,95,51,57,95,116,97,107,101,110,0)]]);
    let libavformatD = String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,117,95,49,54,0);
   if ((matches_.size % 1) <= 2 && 2 <= (matches_.size % 1)) {
       let libcxxcomponentsL: Array<any> = [String.fromCharCode(119,95,50,54,95,99,97,116,101,103,111,114,105,101,115,0), String.fromCharCode(105,95,57,49,95,103,104,97,115,104,0), String.fromCharCode(115,111,99,97,110,116,114,99,118,109,111,114,101,95,114,95,55,56,0)];
       let largez = 2.0;
       let actionsy = 1.0;
         actionsy *= parseFloat(`${2}`);
      let fcopy_zfw = 8413730.0 <= largez;
      do {
         largez /= Math.max(2, 3);
         if (fcopy_zfw) {
            break;
         }
      } while (((5.44 + actionsy) > 5.33 && (actionsy + 5.44) > 3.21) && fcopy_zfw);
         libcxxcomponentsL.push(libcxxcomponentsL.length);
      for (let w = 0; w < 2; w++) {
         actionsy *= parseFloat(`${parseInt(`${largez}`)}`);
      }
      while (4.31 <= actionsy) {
          let spinnerc = String.fromCharCode(100,105,103,105,116,115,95,107,95,50,48,0);
          let redirectE = String.fromCharCode(114,103,116,99,95,97,95,55,48,0);
         actionsy += parseFloat(`${2}`);
         spinnerc += "1";
         redirectE += `${1 ^ redirectE.length}`;
         break;
      }
      while (4 < (libcxxcomponentsL.length & 2) || 2 < (parseInt(`${largez}`) + libcxxcomponentsL.length)) {
          let liveC = String.fromCharCode(97,115,115,112,111,114,116,95,121,95,49,57,0);
          let leftZ = String.fromCharCode(110,95,53,48,95,97,98,117,102,102,101,114,115,105,110,107,0);
          let libreactnativeblobm = true;
          let binddatasT = true;
         largez -= parseInt(`${actionsy}`) % 3;
         liveC = `${(liveC == String.fromCharCode(55,0) ? liveC.length : (libreactnativeblobm ? 2 : 1))}`;
         leftZ += `${((binddatasT ? 2 : 3))}`;
         binddatasT = (78 <= ((!binddatasT ? 78 : liveC.length) + liveC.length));
         break;
      }
          let libimagepipelineK = String.fromCharCode(100,118,98,115,117,98,95,120,95,52,55,0);
         libcxxcomponentsL = [(libimagepipelineK == String.fromCharCode(48,0) ? libcxxcomponentsL.length : libimagepipelineK.length)];
      for (let j = 0; j < 2; j++) {
          let bell7 = false;
          let found0 = String.fromCharCode(101,115,115,97,103,101,95,54,95,51,55,0);
          let trashf = String.fromCharCode(117,95,49,50,95,99,114,108,100,112,0);
         libcxxcomponentsL.push(3 >> (Math.min(Math.abs(parseInt(`${actionsy}`)), 4)));
         bell7 = trashf == found0;
         found0 = "3";
         trashf += `${((bell7 ? 2 : 5) ^ 1)}`;
      }
      if (5 >= (3 + libcxxcomponentsL.length) || 5.51 >= (3.45 * largez)) {
          let expiredo = false;
          let logob = true;
          let tooltipsx = true;
          let assistc = 3;
         largez += ((expiredo ? 5 : 5) + parseInt(`${largez}`));
         expiredo = (!tooltipsx ? logob : !tooltipsx);
         logob = assistc >= 63;
         assistc += assistc;
      }
      matches_ = new Map([[`${matches_.size}`, 3]]);
   }

    const data = (await yys_Matches.call(url, {}, "GET")).data;

      containerT = `${containerT.length}`;

    if (data !== undefined) {

   if (3 <= (containerT.length * nativemodulew)) {
      containerT = `${containerT.length % 2}`;
   }
      const dates = Object.keys(data);

   while (chinasamed) {
       let shootN = String.fromCharCode(118,95,50,55,95,109,101,100,105,97,99,111,100,101,99,0);
       let launchh = String.fromCharCode(121,95,53,56,95,100,111,102,102,115,101,116,115,0);
       let storet = String.fromCharCode(100,114,97,119,108,105,110,101,95,55,95,57,48,0);
      while (3 == shootN.length) {
         storet += "1";
         break;
      }
      while (launchh.length <= 3 && storet == String.fromCharCode(106,0)) {
         launchh = "3";
         break;
      }
         launchh = `${storet.length}`;
      if (storet.includes(launchh)) {
         launchh += `${(String.fromCharCode(81,0) == launchh ? shootN.length : launchh.length)}`;
      }
      for (let p = 0; p < 3; p++) {
          let fasty = true;
          let upgradeO = 0.0;
          let whistle2 = 5.0;
         shootN = `${launchh.length * 2}`;
         fasty = 55.85 == whistle2;
         upgradeO *= parseFloat(`${1 & parseInt(`${whistle2}`)}`);
      }
      let condensede = 9296358 >= launchh.length;
      do {
         launchh = `${(storet == String.fromCharCode(115,0) ? launchh.length : storet.length)}`;
         if (condensede) {
            break;
         }
      } while ((launchh.endsWith(`${shootN.length}`)) && condensede);
       let flipper3 = String.fromCharCode(103,101,111,99,111,100,101,115,95,100,95,52,54,0);
       let long_9h = String.fromCharCode(115,109,97,108,108,101,115,116,95,105,95,49,55,0);
      if (2 <= storet.length) {
          let xvods = String.fromCharCode(110,101,97,114,101,114,95,102,95,54,50,0);
          let libavdeviceR = String.fromCharCode(113,95,57,56,95,105,116,101,114,97,116,111,114,0);
          let notificationy: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,116,103,115,0),true ], [String.fromCharCode(99,118,105,100,95,119,95,54,54,0),false ]]);
         launchh = `${(String.fromCharCode(69,0) == storet ? storet.length : notificationy.size)}`;
         xvods += `${libavdeviceR.length - xvods.length}`;
         libavdeviceR += `${(String.fromCharCode(79,0) == xvods ? xvods.length : libavdeviceR.length)}`;
         notificationy = new Map([[xvods, libavdeviceR.length]]);
      }
      let gpay8 = flipper3.length >= 6203807;
      do {
         flipper3 += "3";
         if (gpay8) {
            break;
         }
      } while (gpay8 && (shootN != String.fromCharCode(105,0)));
      chinasamed = yingI < 6;
      break;
   }
      let lst: yys_White[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

      androidC += parseFloat(`${2 - yingI}`);
      if (latestListDate.current === undefined) {

      yingI ^= goal7.size | containerT.length;
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

   if (4 <= (parseInt(`${androidC}`) * 4) || 1.23 <= (4.15 * androidC)) {
       let vignette1 = String.fromCharCode(116,101,109,112,115,95,119,95,52,52,0);
      if (vignette1 == vignette1) {
         vignette1 = "3";
      }
         vignette1 += "1";
      while (vignette1.startsWith(vignette1)) {
         vignette1 = "2";
         break;
      }
      annerU = "1";
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000
        );
      } else {

   if (annerU.length == 3) {
      annerU += `${annerU.length % (Math.max(7, parseInt(`${androidC}`)))}`;
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000
        );
      }
      for (const date of dates) {

      androidC += parseFloat(`${goal7.size ^ 2}`);
        const dateDate = new Date(date);

      containerT += `${(containerT.length & (chinasamed ? 2 : 3))}`;
        const now = new Date();

   while (annerU.length > 5) {
      annerU += `${matches_.size - goal7.size}`;
      break;
   }
        const sevenDaysBefore = new Date(
          now.valueOf() - 7 * 24 * 60 * 60 * 1000
        );

   for (let z = 0; z < 2; z++) {
       let libmapbufferjniq = false;
       let nextT = 4;
       let attributedstringf: Array<any> = [String.fromCharCode(99,95,51,49,95,116,105,109,105,110,103,115,97,102,101,0), String.fromCharCode(114,95,52,95,100,111,119,110,103,114,97,100,101,0)];
       let theme1 = String.fromCharCode(103,117,101,115,115,101,100,95,113,95,57,54,0);
          let agreement8 = 0.0;
          let dycreatorZ = String.fromCharCode(119,101,98,112,95,104,95,52,50,0);
          let form1 = String.fromCharCode(118,97,108,105,100,97,116,111,114,115,95,111,95,57,51,0);
         attributedstringf.push(dycreatorZ.length);
         agreement8 -= parseInt(`${agreement8}`) ^ 2;
         dycreatorZ += `${parseInt(`${agreement8}`) | 2}`;
         form1 += `${1 | parseInt(`${agreement8}`)}`;
      if (nextT == 2) {
         nextT &= 2;
      }
      let langkeyA = theme1 == String.fromCharCode(112,49,53,0);
      do {
         theme1 += `${theme1.length - attributedstringf.length}`;
         if (langkeyA) {
            break;
         }
      } while ((libmapbufferjniq) && langkeyA);
      if (libmapbufferjniq) {
          let searchbarP: Array<any> = [404, 679];
          let colors9: Array<any> = [846, 678, 907];
          let sendm = false;
         libmapbufferjniq = colors9.length == 42;
         searchbarP.push(3);
         colors9.push(searchbarP.length);
      }
          let matchV = String.fromCharCode(105,110,115,105,100,101,95,109,95,56,48,0);
          let graphicsK = false;
          let anythink9: Array<any> = [420, 819];
         attributedstringf = [((graphicsK ? 5 : 2) ^ anythink9.length)];
         matchV += `${matchV.length >> (Math.min(Math.abs(1), 5))}`;
         graphicsK = matchV.length == 31;
          let floatingg = String.fromCharCode(103,95,54,95,112,115,102,98,0);
          let sourcey = String.fromCharCode(109,95,56,56,95,115,97,109,112,108,101,114,0);
          let infow: Array<any> = [952, 159];
         attributedstringf = [nextT - sourcey.length];
         floatingg = `${floatingg.length}`;
         sourcey += `${infow.length}`;
         infow = [infow.length];
         attributedstringf = [theme1.length];
      while (2 <= attributedstringf.length) {
         nextT &= attributedstringf.length ^ theme1.length;
         break;
      }
      let baseg = attributedstringf.length >= 6599644;
      do {
          let d_positionN: Array<any> = [305, 295, 640];
          let mergerP: Map<any, any> = new Map([[String.fromCharCode(122,95,57,55,95,108,101,97,115,116,0),153], [String.fromCharCode(98,117,102,108,101,110,95,52,95,54,53,0),269]]);
          let qaagO = 4.0;
          let bannero = String.fromCharCode(114,95,54,95,109,98,118,115,0);
         attributedstringf.push(parseInt(`${qaagO}`));
         d_positionN.push(3 * d_positionN.length);
         mergerP = new Map([[`${mergerP.size}`, mergerP.size >> (Math.min(d_positionN.length, 2))]]);
         qaagO *= parseFloat(`${3 >> (Math.min(2, bannero.length))}`);
         bannero += `${mergerP.size}`;
         if (baseg) {
            break;
         }
      } while ((theme1.startsWith(`${attributedstringf.length}`)) && baseg);
         libmapbufferjniq = theme1.includes(`${libmapbufferjniq}`);
       let sportE = String.fromCharCode(105,110,118,111,107,101,114,95,49,95,50,54,0);
       let materialv = String.fromCharCode(103,95,57,57,95,115,104,101,101,114,118,105,100,101,111,100,97,116,97,0);
       let downd = String.fromCharCode(99,104,97,99,104,97,95,117,95,53,0);
      containerT = `${nativemodulew}`;
   }
        const sevenDaysAfter = new Date(
          now.valueOf() + 7 * 24 * 60 * 60 * 1000
        );

   for (let c = 0; c < 1; c++) {
       let videojsI = String.fromCharCode(117,95,52,50,95,116,114,97,110,115,0);
       let handleru = String.fromCharCode(115,95,55,55,95,116,121,112,101,0);
       let refresh9 = 4.0;
       let renewD = 2.0;
       let arrowQ = false;
      for (let o = 0; o < 3; o++) {
         arrowQ = 61.60 <= refresh9;
      }
      for (let k = 0; k < 1; k++) {
          let panglem = String.fromCharCode(98,114,101,97,107,105,110,103,95,56,95,53,51,0);
         arrowQ = renewD < 62.19 || refresh9 < 62.19;
         panglem += `${panglem.length}`;
      }
       let aboutH = 1.0;
         handleru += `${parseInt(`${renewD}`) ^ 2}`;
         refresh9 /= Math.max(4, parseFloat(`${parseInt(`${aboutH}`)}`));
         videojsI += `${parseInt(`${aboutH}`) * 2}`;
         refresh9 += (parseFloat(`${String.fromCharCode(119,0) == handleru ? (arrowQ ? 3 : 2) : handleru.length}`));
       let binddatasR = 0.0;
       let questD = 1.0;
      while (5.51 > aboutH) {
         aboutH /= Math.max(1, ((arrowQ ? 1 : 5) << (Math.min(Math.abs(parseInt(`${renewD}`)), 1))));
         break;
      }
         handleru += `${parseInt(`${refresh9}`) % (Math.max(2, parseInt(`${binddatasR}`)))}`;
      for (let f = 0; f < 3; f++) {
         arrowQ = videojsI == String.fromCharCode(101,0);
      }
      if ((binddatasR / (Math.max(renewD, 5))) <= 1.61 || (binddatasR / 1.61) <= 5.94) {
         renewD -= parseFloat(`${1 & parseInt(`${renewD}`)}`);
      }
          let temperatureK: Map<any, any> = new Map([[String.fromCharCode(97,95,50,54,95,104,111,108,100,101,114,0),287], [String.fromCharCode(107,95,51,54,95,102,105,102,111,115,0),810]]);
         refresh9 -= parseFloat(`${1}`);
         temperatureK.set(`${temperatureK.size}`, 1);
         arrowQ = handleru.endsWith(`${renewD}`);
         questD += parseFloat(`${1}`);
      matches_.set(containerT, ((chinasamed ? 1 : 2) * 3));
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue;

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

   while (!containerT.endsWith(`${nativemodulew}`)) {
      nativemodulew &= annerU.length - 3;
      break;
   }
        count += 1;
        data[date].forEach((element: yys_List) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }
  }, []);

  const fetchBannerAd = async () => {
       let pingI = String.fromCharCode(117,95,50,53,95,115,117,98,98,108,111,99,107,115,0);
    let libavutilT: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,110,105,110,103,95,106,95,54,50,0),439], [String.fromCharCode(119,111,114,100,95,52,95,53,52,0),540], [String.fromCharCode(111,95,57,57,95,114,101,115,112,111,110,115,101,0),578]]);
    let loadingy: Map<any, any> = new Map([[String.fromCharCode(116,119,111,115,116,97,103,101,95,121,95,57,49,0),false ], [String.fromCharCode(109,121,115,101,108,102,95,114,95,56,57,0),true ]]);
    let codegeni = 3;
    let gdtadvv = String.fromCharCode(101,114,112,105,99,95,122,95,55,49,0);
    let transferr = 4.0;
    let arroww = true;
    let libloggerY = false;
    let umengr = 3;
       let mountingV = false;
       let point4: Array<any> = [154, 243];
       let videor = String.fromCharCode(108,101,114,112,102,95,56,95,51,51,0);
      while (videor.length == 5) {
         videor = "2";
         break;
      }
       let pageK = 0.0;
      let indexv = mountingV ? !mountingV : mountingV;
      do {
         mountingV = ((point4.length * (!mountingV ? 49 : point4.length)) >= 49);
         if (indexv) {
            break;
         }
      } while (indexv && (!mountingV));
      while (!videor.includes(`${pageK}`)) {
         videor += `${parseInt(`${pageK}`) % (Math.max(3, 1))}`;
         break;
      }
         mountingV = (pageK + parseFloat(`${point4.length}`)) > 88.100;
      for (let t = 0; t < 3; t++) {
         videor = `${1 ^ videor.length}`;
      }
      if (5 == videor.length && !mountingV) {
          let launchr = false;
          let binddatasO = 0.0;
         mountingV = (binddatasO + parseFloat(`${point4.length}`)) == 8.82;
         launchr = (!launchr ? launchr : launchr);
         binddatasO *= (parseFloat(`${1 * (launchr ? 5 : 5)}`));
      }
       let encrypt6 = 4.0;
       let screenR = 0.0;
      if (encrypt6 == 5.49) {
          let hejip = true;
          let successJ = 1.0;
          let fileR = String.fromCharCode(118,95,52,52,95,114,111,116,97,116,105,110,103,0);
         pageK += parseFloat(`${parseInt(`${encrypt6}`) - 1}`);
         hejip = fileR.length <= 86;
         successJ += 2 >> (Math.min(2, fileR.length));
      }
      pingI += `${pingI.length}`;
       let projectq: Array<any> = [516, 577];
       let mountingG: Map<any, any> = new Map([[String.fromCharCode(100,95,54,57,95,98,114,111,119,115,101,0),838], [String.fromCharCode(104,97,100,111,119,115,95,50,95,49,48,48,0),559], [String.fromCharCode(115,95,51,52,95,100,97,116,97,100,105,114,0),28]]);
      let appsQ = projectq.length <= 5943743;
      do {
         projectq = [projectq.length & 3];
         if (appsQ) {
            break;
         }
      } while ((!Array.from(mountingG.keys()).includes(`${projectq.length}`)) && appsQ);
      for (let v = 0; v < 3; v++) {
         projectq = [mountingG.size];
      }
      codegeni <<= Math.min(4, Math.abs(1));
      gdtadvv = `${parseInt(`${transferr}`) * 3}`;

    const bannerRes = await yys_CurrentLang.getBannerAd(110);

   if (loadingy.get(`${libavutilT.size}`) != null) {
      loadingy.set(gdtadvv, codegeni);
   }
   for (let x = 0; x < 2; x++) {
      loadingy = new Map([[`${loadingy.size}`, loadingy.size | gdtadvv.length]]);
   }
   if (1.88 == (transferr + 2.99) && transferr == 2.99) {
      libloggerY = 37 == libavutilT.size;
   }
    const banner = bannerRes.ads;

   for (let e = 0; e < 3; e++) {
      loadingy = new Map([[`${arroww}`, ((arroww ? 2 : 2) % (Math.max(parseInt(`${transferr}`), 8)))]]);
   }
       let rewardq: Array<any> = [String.fromCharCode(100,95,56,49,95,100,101,105,110,116,0), String.fromCharCode(104,97,100,97,109,97,114,100,120,95,110,95,52,51,0), String.fromCharCode(105,95,50,52,95,98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,0)];
      while ((rewardq.length ^ 1) < 1) {
          let canvasR = String.fromCharCode(108,95,52,55,95,98,102,115,116,109,0);
          let minimize1 = 5.0;
          let membershipZ = 2.0;
          let feedbackO = String.fromCharCode(121,95,50,54,95,102,108,105,99,0);
          let relatedu = false;
         rewardq = [canvasR.length];
         canvasR = `${feedbackO.length}`;
         minimize1 /= Math.max(parseFloat(`${1 ^ parseInt(`${membershipZ}`)}`), 4);
         membershipZ *= feedbackO.length;
         relatedu = 31.47 == membershipZ && String.fromCharCode(49,0) == feedbackO;
         break;
      }
          let signinup3 = String.fromCharCode(103,95,55,48,95,99,111,110,102,108,105,99,116,105,110,103,0);
          let righti = 5.0;
         rewardq.push(signinup3.length);
         signinup3 = `${parseInt(`${righti}`)}`;
      if (1 <= (rewardq.length >> (Math.min(Math.abs(4), 3)))) {
          let related8: Array<any> = [157, 439, 442];
          let minimizeh = 2;
          let winit_yR = String.fromCharCode(115,116,97,110,100,97,114,100,95,111,95,50,54,0);
          let diceQ = String.fromCharCode(110,95,53,57,95,120,118,105,100,105,100,99,116,0);
         rewardq = [rewardq.length];
         related8 = [minimizeh / (Math.max(related8.length, 8))];
         minimizeh *= (winit_yR == String.fromCharCode(95,0) ? winit_yR.length : minimizeh);
         diceQ = `${minimizeh}`;
      }
      arroww = libloggerY;
   for (let c = 0; c < 3; c++) {
       let libmapbufferjniv: Map<any, any> = new Map([[String.fromCharCode(109,95,53,56,95,99,111,100,101,115,116,114,101,97,109,0),true ], [String.fromCharCode(98,95,49,95,115,116,97,114,115,0),false ]]);
       let final_a2 = String.fromCharCode(104,95,51,95,116,105,108,101,109,107,97,0);
       let successO = 1.0;
       let successB = String.fromCharCode(119,95,54,55,95,115,121,110,99,109,97,114,107,101,114,0);
       let redirect2: Map<any, any> = new Map([[String.fromCharCode(118,97,108,117,101,95,121,95,56,57,0),591], [String.fromCharCode(121,95,57,52,95,107,101,99,99,97,107,0),337]]);
      if (redirect2.get(`${libmapbufferjniv.size}`) == null) {
         redirect2.set(successB, (successB == String.fromCharCode(49,0) ? parseInt(`${successO}`) : successB.length));
      }
         successB = `${(successB == String.fromCharCode(111,0) ? successB.length : redirect2.size)}`;
         successO /= Math.max(parseFloat(`${libmapbufferjniv.size}`), 5);
      while (1 == (final_a2.length & 4) || (successO / 5.56) == 4.1) {
         successO /= Math.max(parseFloat(`${libmapbufferjniv.size << (Math.min(final_a2.length, 3))}`), 1);
         break;
      }
      let mergerX = successB == String.fromCharCode(50,95,107,55,51,108,119,107,0);
      do {
         successB += `${successB.length ^ 2}`;
         if (mergerX) {
            break;
         }
      } while ((successB == String.fromCharCode(51,0) || 5 >= final_a2.length) && mergerX);
      while (!final_a2.startsWith(`${libmapbufferjniv.size}`)) {
          let resendk = 0.0;
          let e_managerE = 2.0;
          let leagues: Array<any> = [565, 282];
         libmapbufferjniv = new Map([[`${redirect2.size}`, (final_a2 == String.fromCharCode(68,0) ? final_a2.length : redirect2.size)]]);
         resendk -= parseFloat(`${leagues.length | parseInt(`${e_managerE}`)}`);
         e_managerE *= parseFloat(`${2 / (Math.max(3, parseInt(`${resendk}`)))}`);
         leagues.push(parseInt(`${resendk}`) >> (Math.min(leagues.length, 1)));
         break;
      }
          let qaagf: Array<any> = [449, 513];
         final_a2 += `${final_a2.length}`;
         qaagf = [qaagf.length];
       let libtanc = 0;
         final_a2 = `${2 >> (Math.min(4, successB.length))}`;
         libmapbufferjniv = new Map([[`${libmapbufferjniv.size}`, final_a2.length / (Math.max(3, 10))]]);
          let logoe = 3.0;
          let yingZ = false;
          let greyP = 3.0;
         libtanc ^= libmapbufferjniv.size + 1;
         logoe *= (parseInt(`${logoe}`) | (yingZ ? 1 : 3));
         yingZ = 47.43 <= logoe;
         greyP += parseFloat(`${3 % (Math.max(1, parseInt(`${logoe}`)))}`);
         redirect2.set(`${libtanc}`, libtanc);
      for (let e = 0; e < 1; e++) {
          let regengI = String.fromCharCode(112,114,111,118,105,100,105,110,103,95,115,95,56,48,0);
         successO += parseFloat(`${3 * regengI.length}`);
      }
      for (let s = 0; s < 1; s++) {
         libtanc -= libtanc;
      }
         successO += parseFloat(`${successB.length}`);
      arroww = parseFloat(`${libavutilT.size}`) >= successO;
   }
    const bannerList = bannerRes.ads_list;

      transferr -= parseFloat(`${libavutilT.size}`);
   for (let y = 0; y < 3; y++) {
      loadingy.set(pingI, ((libloggerY ? 1 : 3)));
   }
   let playercommonJ = transferr <= 6399130.0;
   do {
       let mbsplashc = 5;
       let bufferN: Map<any, any> = new Map([[String.fromCharCode(104,95,53,48,95,105,115,115,112,97,99,101,0),486], [String.fromCharCode(110,101,103,111,116,105,97,116,101,95,54,95,53,0),338]]);
       let zhengpianF: Array<any> = [577, 703];
       let arrowE = 5;
       let apple7 = String.fromCharCode(115,95,57,48,95,102,101,116,99,104,0);
      let turn1 = 7966927 <= zhengpianF.length;
      do {
         zhengpianF.push(1);
         if (turn1) {
            break;
         }
      } while (turn1 && (zhengpianF.length < mbsplashc));
         apple7 += `${apple7.length}`;
          let detailsn = 4.0;
          let membership3 = 4.0;
          let thumbnailq = String.fromCharCode(97,110,105,109,97,108,115,95,108,95,51,55,0);
         mbsplashc -= mbsplashc * 2;
         detailsn += parseFloat(`${thumbnailq.length % (Math.max(1, 7))}`);
         membership3 /= Math.max(5, parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${detailsn}`)), 1))}`));
         thumbnailq = `${(thumbnailq == String.fromCharCode(98,0) ? parseInt(`${detailsn}`) : thumbnailq.length)}`;
      while ((bufferN.size & 3) < 3 && 1 < (3 & bufferN.size)) {
         zhengpianF = [arrowE];
         break;
      }
      if ((mbsplashc ^ apple7.length) <= 1 || (1 ^ apple7.length) <= 5) {
         mbsplashc -= apple7.length & 3;
      }
         bufferN = new Map([[`${bufferN.size}`, mbsplashc + bufferN.size]]);
          let appleM = String.fromCharCode(112,95,53,49,95,115,97,99,107,0);
          let libruntimeexecutorQ = String.fromCharCode(97,95,57,57,95,98,108,97,99,107,115,0);
          let faviconk = 4;
         bufferN = new Map([[`${bufferN.size}`, bufferN.size - 1]]);
         appleM += `${appleM.length | libruntimeexecutorQ.length}`;
         libruntimeexecutorQ += `${faviconk | appleM.length}`;
         faviconk %= Math.max((appleM == String.fromCharCode(75,0) ? libruntimeexecutorQ.length : appleM.length), 1);
       let become8: Array<any> = [800, 665];
       let footballx: Array<any> = [199, 585];
      while (!Array.from(bufferN.keys()).includes(`${mbsplashc}`)) {
         bufferN.set(`${mbsplashc}`, zhengpianF.length);
         break;
      }
          let thailandZ = 1.0;
         arrowE <<= Math.min(1, zhengpianF.length);
         thailandZ /= Math.max(3, parseFloat(`${parseInt(`${thailandZ}`)}`));
      if ((5 - footballx.length) == 3 && (footballx.length - apple7.length) == 5) {
         apple7 += `${arrowE}`;
      }
       let stard = 4;
       let minivodt = 2;
         arrowE |= arrowE - mbsplashc;
       let minivodA = 3;
       let applicationH = 4.0;
       let privilegeX = 3.0;
      transferr *= parseFloat(`${gdtadvv.length - parseInt(`${transferr}`)}`);
      if (playercommonJ) {
         break;
      }
   } while (playercommonJ && (4 >= (3 & libavutilT.size) || 2.94 >= (parseFloat(`${libavutilT.size}`) + transferr)));

    if (banner) {

   while ((parseInt(`${transferr}`) * codegeni) >= 3 || (codegeni >> (Math.min(Math.abs(3), 4))) >= 5) {
       let bellm = 5;
       let light7 = String.fromCharCode(102,105,108,101,102,117,110,99,95,54,95,50,54,0);
       let optionsM: Map<any, any> = new Map([[String.fromCharCode(112,95,55,49,95,98,108,97,110,107,0),394], [String.fromCharCode(100,111,119,110,108,105,110,107,0),459]]);
       let entryI: Array<any> = [696, 823, 499];
       let empty0: Array<any> = [193, 271];
          let b_managerR = String.fromCharCode(118,95,56,95,119,101,97,118,101,0);
          let savel = 1;
         entryI = [bellm];
         b_managerR += `${savel}`;
         savel /= Math.max(b_managerR.length & savel, 5);
      while (!entryI.includes(bellm)) {
         entryI.push(1 ^ light7.length);
         break;
      }
      for (let m = 0; m < 2; m++) {
          let short_bQ = true;
          let sliderI = 4.0;
          let private_lnr = String.fromCharCode(97,95,49,50,95,112,111,108,113,97,0);
          let sourceS = false;
          let hookO = 0;
         light7 = `${bellm}`;
         short_bQ = 80 > private_lnr.length;
         sliderI += (hookO & (short_bQ ? 5 : 5));
         private_lnr = `${hookO}`;
         sourceS = private_lnr.endsWith(`${short_bQ}`);
      }
         empty0 = [optionsM.size];
          let application3: Map<any, any> = new Map([[String.fromCharCode(114,95,49,49,95,115,101,110,100,109,98,117,102,0),915], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,95,106,95,50,51,0),703], [String.fromCharCode(117,95,54,50,0),362]]);
          let filled8: Array<any> = [String.fromCharCode(113,95,53,48,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0), String.fromCharCode(114,95,49,49,95,108,97,110,103,0)];
          let enewinterstitialq = String.fromCharCode(115,95,54,51,95,105,103,110,111,114,101,0);
         bellm %= Math.max(5, optionsM.size << (Math.min(empty0.length, 1)));
         application3 = new Map([[`${application3.size}`, application3.size]]);
         filled8 = [2 / (Math.max(4, enewinterstitialq.length))];
         enewinterstitialq += `${enewinterstitialq.length * 1}`;
      let hooks6 = 9732457 <= entryI.length;
      do {
          let chatM = 5.0;
          let sigmob9 = String.fromCharCode(99,111,112,121,100,97,116,97,95,117,95,54,48,0);
          let manifestk = String.fromCharCode(110,101,103,95,106,95,57,48,0);
          let componenta = 5.0;
         entryI = [parseInt(`${chatM}`) / (Math.max(optionsM.size, 2))];
         chatM -= sigmob9.length + manifestk.length;
         sigmob9 = `${1 | sigmob9.length}`;
         manifestk += `${sigmob9.length}`;
         componenta /= Math.max((parseFloat(`${String.fromCharCode(104,0) == manifestk ? manifestk.length : parseInt(`${componenta}`)}`)), 1);
         if (hooks6) {
            break;
         }
      } while ((1 > (entryI.length - empty0.length) && 5 > (1 - entryI.length)) && hooks6);
       let topicb: Array<any> = [String.fromCharCode(98,95,49,49,95,118,97,108,105,100,97,116,101,0), String.fromCharCode(115,95,52,55,95,116,101,108,101,109,101,116,114,121,0)];
         bellm >>= Math.min(Math.abs(empty0.length % (Math.max(9, light7.length))), 5);
      for (let i = 0; i < 2; i++) {
         empty0.push(empty0.length);
      }
      while (Array.from(optionsM.values()).includes(entryI.length)) {
         entryI = [bellm];
         break;
      }
          let favorite6 = String.fromCharCode(99,111,110,116,97,99,116,115,95,121,95,55,52,0);
         entryI = [2];
         favorite6 += "2";
         optionsM.set(`${entryI.length}`, 3);
      let half9 = entryI.length >= 6773400;
      do {
         entryI = [light7.length ^ 3];
         if (half9) {
            break;
         }
      } while (((entryI.length % 5) == 1) && half9);
      let headerR = entryI.length >= 8345709;
      do {
         entryI.push(entryI.length / 1);
         if (headerR) {
            break;
         }
      } while ((empty0.length > 5) && headerR);
      let backj = light7.length >= 7983327;
      do {
         light7 += "2";
         if (backj) {
            break;
         }
      } while ((light7.endsWith(`${topicb.length}`)) && backj);
      transferr += parseFloat(`${libavutilT.size}`);
      break;
   }
   let screenU = pingI == String.fromCharCode(52,99,121,107,101,107,118,120,115,108,0);
   do {
       let expandj = String.fromCharCode(100,114,111,112,112,101,114,95,54,95,54,51,0);
      let viewern = expandj == String.fromCharCode(113,54,101,100,103,48,0);
      do {
         expandj = "3";
         if (viewern) {
            break;
         }
      } while ((expandj == String.fromCharCode(73,0)) && viewern);
         expandj = `${expandj.length / 3}`;
          let materialk = String.fromCharCode(112,95,50,56,95,105,100,115,117,98,116,121,112,101,0);
          let predictionR = String.fromCharCode(101,95,49,52,95,115,117,114,102,97,99,101,0);
         expandj += `${expandj.length}`;
         materialk = `${materialk.length << (Math.min(Math.abs(3), 1))}`;
         predictionR = "2";
      pingI = `${gdtadvv.length}`;
      if (screenU) {
         break;
      }
   } while (screenU && (pingI.endsWith(`${libloggerY}`)));
      loadingy = new Map([[`${libloggerY}`, 1]]);
      setBannerAd(banner);

      loadingy = new Map([[`${transferr}`, parseInt(`${transferr}`) + gdtadvv.length]]);
   if ((codegeni - parseInt(`${transferr}`)) == 2 || (parseFloat(`${codegeni}`) - transferr) == 1.87) {
      transferr *= parseFloat(`${parseInt(`${transferr}`)}`);
   }
      loadingy = new Map([[gdtadvv, gdtadvv.length << (Math.min(4, Math.abs(parseInt(`${transferr}`))))]]);
      setBannerAdList(bannerList);
    } else {

   while (pingI.endsWith(`${transferr}`)) {
      transferr += parseFloat(`${pingI.length | 1}`);
      break;
   }
   let event4 = pingI.length <= 9431177;
   do {
      pingI += `${((libloggerY ? 3 : 1) / (Math.max(2, umengr)))}`;
      if (event4) {
         break;
      }
   } while ((!pingI.includes(`${libavutilT.size}`)) && event4);
   while (libloggerY) {
      pingI += `${(pingI == String.fromCharCode(117,0) ? libavutilT.size : pingI.length)}`;
      break;
   }
      setBannerAd(undefined);

   let favicond = 9261248 <= loadingy.size;
   do {
      loadingy = new Map([[`${arroww}`, ((arroww ? 1 : 3) + parseInt(`${transferr}`))]]);
      if (favicond) {
         break;
      }
   } while (((codegeni << (Math.min(Math.abs(loadingy.size), 5))) < 1 || 1 < (loadingy.size << (Math.min(3, Math.abs(codegeni))))) && favicond);
      pingI = `${umengr}`;
       let libsgcoreM: Map<any, any> = new Map([[String.fromCharCode(98,117,99,107,101,116,95,55,95,53,50,0),true ], [String.fromCharCode(110,101,105,103,104,98,111,114,95,100,95,52,49,0),true ]]);
       let temperaturet = String.fromCharCode(109,95,57,48,95,118,97,99,97,110,116,0);
      while (4 == (libsgcoreM.size | temperaturet.length) || (temperaturet.length | 4) == 1) {
         temperaturet = "2";
         break;
      }
      for (let c = 0; c < 1; c++) {
         temperaturet = `${temperaturet.length}`;
      }
         libsgcoreM.set(temperaturet, temperaturet.length - libsgcoreM.size);
      let toponP = 6356436 <= temperaturet.length;
      do {
          let libfabricjni4 = 5.0;
         temperaturet += `${temperaturet.length}`;
         libfabricjni4 -= parseFloat(`${parseInt(`${libfabricjni4}`)}`);
         if (toponP) {
            break;
         }
      } while ((temperaturet.startsWith(`${libsgcoreM.size}`)) && toponP);
      if ((temperaturet.length ^ 5) <= 5 && 4 <= (5 ^ temperaturet.length)) {
         libsgcoreM.set(`${temperaturet}`, temperaturet.length);
      }
          let submitd: Array<any> = [181, 405];
          let controlH = 0;
         libsgcoreM.set(`${controlH}`, controlH);
         submitd.push(submitd.length << (Math.min(3, submitd.length)));
      libavutilT = new Map([[`${libavutilT.size}`, libavutilT.size]]);
      setBannerAdList([]);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  const shouldShowAds = async () => {
       let libfbw = String.fromCharCode(120,109,117,108,116,95,98,95,57,48,0);
    let routern: Map<any, any> = new Map([[String.fromCharCode(115,105,122,101,115,95,106,95,56,48,0),952], [String.fromCharCode(108,95,57,48,95,114,97,114,105,116,121,0),474], [String.fromCharCode(115,104,105,102,116,115,95,115,95,57,54,0),738]]);
    let penaltyK = String.fromCharCode(122,101,114,111,118,95,119,95,55,53,0);
    let nativeL = String.fromCharCode(113,112,101,108,100,115,112,95,99,95,57,51,0);
    let minivodY = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,113,95,53,48,0);
    let customo = String.fromCharCode(98,114,97,99,101,95,114,95,54,0);
    let register_qnn = 1.0;
    let lessU = 3.0;
    let tickA = 2.0;
    let runtimeW: Map<any, any> = new Map([[String.fromCharCode(104,95,57,95,108,111,99,97,108,105,122,97,116,105,111,110,115,0),959], [String.fromCharCode(99,108,97,117,115,101,95,52,95,55,0),688]]);
    let modelb: Map<any, any> = new Map([[String.fromCharCode(101,95,57,57,95,99,101,108,116,0),586], [String.fromCharCode(98,95,49,53,95,116,119,105,99,101,0),588]]);
    let downloadingr = false;
    let crossV = String.fromCharCode(101,114,97,115,101,95,105,95,50,54,0);
    let matchB = 5.0;
   if (4.32 < (4.50 + lessU)) {
      lessU /= Math.max(3, (parseFloat(`${String.fromCharCode(118,0) == minivodY ? parseInt(`${register_qnn}`) : minivodY.length}`)));
   }
      penaltyK += `${customo.length % 2}`;
      tickA -= (customo == String.fromCharCode(121,0) ? customo.length : runtimeW.size);
   let graphicsH = libfbw.length <= 6596989;
   do {
      libfbw = "2";
      if (graphicsH) {
         break;
      }
   } while ((nativeL == String.fromCharCode(115,0)) && graphicsH);
   let loginR = String.fromCharCode(119,106,114,99,102,0) == penaltyK;
   do {
      penaltyK = `${2 | customo.length}`;
      if (loginR) {
         break;
      }
   } while (loginR && (2.99 < (lessU - 4.23)));
      lessU *= (parseFloat(`${String.fromCharCode(68,0) == customo ? customo.length : parseInt(`${register_qnn}`)}`));

    if (!isVip) {

   if (!Array.from(runtimeW.values()).includes(lessU)) {
       let country6 = 2;
       let chinasameI = String.fromCharCode(100,95,53,56,95,114,103,98,112,108,117,115,0);
       let activityO: Map<any, any> = new Map([[String.fromCharCode(114,95,56,54,95,97,112,111,108,108,111,0),386], [String.fromCharCode(114,101,99,111,109,98,105,110,101,95,109,95,55,49,0),372]]);
       let backwardl = String.fromCharCode(102,97,105,108,105,110,103,95,116,95,49,48,0);
      for (let w = 0; w < 2; w++) {
          let heartT = 0.0;
          let episodeo = false;
          let styleX = 5;
          let mutedS = String.fromCharCode(114,95,51,52,95,101,110,106,105,110,0);
          let clockn = String.fromCharCode(116,95,57,54,95,114,111,117,110,100,110,101,115,115,0);
         country6 >>= Math.min(Math.abs(parseInt(`${heartT}`) | mutedS.length), 5);
         heartT += parseFloat(`${1 - clockn.length}`);
         episodeo = clockn.length <= 41;
         styleX *= styleX;
         mutedS = "3";
      }
         chinasameI += "2";
      if ((activityO.size ^ backwardl.length) >= 3 && (backwardl.length ^ activityO.size) >= 3) {
         activityO.set(chinasameI, 3 + chinasameI.length);
      }
      while (4 < (activityO.size | chinasameI.length) || 1 < (4 | chinasameI.length)) {
          let fadfdeebbbfdabbbabdadfaaddaaC = true;
          let nalyticsL = false;
          let mailL = 4.0;
         activityO.set(`${mailL}`, parseInt(`${mailL}`) / 3);
         fadfdeebbbfdabbbabdadfaaddaaC = !fadfdeebbbfdabbbabdadfaaddaaC && nalyticsL;
         nalyticsL = (fadfdeebbbfdabbbabdadfaaddaaC ? !nalyticsL : fadfdeebbbfdabbbabdadfaaddaaC);
         break;
      }
          let lessJ = 4;
          let submitM: Map<any, any> = new Map([[String.fromCharCode(106,109,111,114,101,99,102,103,95,50,95,57,0),923], [String.fromCharCode(118,105,98,114,97,110,99,101,95,118,95,50,48,0),38]]);
          let accepted_ = String.fromCharCode(110,95,57,54,95,110,101,97,114,101,115,116,0);
         backwardl = `${activityO.size}`;
         lessJ ^= 1;
         submitM = new Map([[`${submitM.size}`, 2]]);
         accepted_ += `${accepted_.length * lessJ}`;
          let hookP = 0.0;
          let matches_ = 2.0;
         activityO = new Map([[`${activityO.size}`, parseInt(`${matches_}`) * activityO.size]]);
         hookP *= parseInt(`${hookP}`);
         matches_ /= Math.max(5, parseFloat(`${parseInt(`${hookP}`) - parseInt(`${hookP}`)}`));
      let abidetect2 = backwardl.length >= 6726022;
      do {
         backwardl += `${activityO.size}`;
         if (abidetect2) {
            break;
         }
      } while (abidetect2 && (!backwardl.startsWith(`${activityO.size}`)));
       let libreanimated3 = String.fromCharCode(104,95,49,54,95,99,114,97,115,104,108,121,116,105,99,115,0);
       let fastforwardA = String.fromCharCode(114,103,98,120,105,0);
      for (let b = 0; b < 2; b++) {
          let mbjscommonN = 3.0;
          let proxy6: Array<any> = [0, 793, 868];
          let subsa = String.fromCharCode(121,95,53,53,95,112,114,101,116,99,104,0);
          let qaagI: Array<any> = [349, 229];
         activityO = new Map([[`${qaagI.length}`, 3 * qaagI.length]]);
         mbjscommonN -= parseFloat(`${1 / (Math.max(8, proxy6.length))}`);
         proxy6 = [proxy6.length];
         subsa += "1";
      }
      if (4 > (backwardl.length | activityO.size) && 1 > (backwardl.length | 4)) {
         backwardl += `${backwardl.length << (Math.min(Math.abs(2), 1))}`;
      }
      while ((country6 % (Math.max(7, activityO.size))) <= 1 && (activityO.size % (Math.max(1, 10))) <= 5) {
          let connectionF = String.fromCharCode(100,100,116,115,95,112,95,52,53,0);
          let tickx = 2.0;
          let libavfilterE = String.fromCharCode(101,109,111,116,105,99,111,110,115,95,98,95,49,55,0);
          let incidentk: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,95,101,95,56,48,0),false ], [String.fromCharCode(103,95,57,52,95,119,105,116,104,105,110,0),true ], [String.fromCharCode(120,95,57,53,95,98,97,111,98,97,98,0),true ]]);
         activityO.set(`${country6}`, 1 >> (Math.min(5, fastforwardA.length)));
         connectionF = `${connectionF.length + 2}`;
         tickx -= parseInt(`${tickx}`) % (Math.max(6, libavfilterE.length));
         libavfilterE += `${libavfilterE.length}`;
         incidentk.set(`${tickx}`, 2);
         break;
      }
      if (country6 >= 2) {
          let orientation0 = String.fromCharCode(102,116,115,121,121,95,121,95,55,53,0);
          let customa = 0.0;
          let privacyu = 2;
          let emojiF = 0.0;
          let layoutQ = true;
         country6 ^= backwardl.length * libreanimated3.length;
         orientation0 += "1";
         customa /= Math.max(parseFloat(`${1 % (Math.max(parseInt(`${emojiF}`), 4))}`), 1);
         privacyu >>= Math.min(Math.abs(privacyu), 3);
         emojiF *= parseFloat(`${1 / (Math.max(parseInt(`${emojiF}`), 5))}`);
         layoutQ = layoutQ && 98.63 > emojiF;
      }
      lessU -= parseFloat(`${penaltyK.length}`);
   }
      tickA *= (penaltyK == String.fromCharCode(100,0) ? parseInt(`${tickA}`) : penaltyK.length);
      penaltyK = `${penaltyK.length ^ 2}`;
   while ((3 >> (Math.min(2, minivodY.length))) >= 3 && 1 >= (minivodY.length << (Math.min(Math.abs(3), 5)))) {
      minivodY += `${minivodY.length | 1}`;
      break;
   }
   while ((routern.size - tickA) < 3.70 && (3.70 - tickA) < 5.97) {
      routern.set(`${libfbw}`, libfbw.length);
      break;
   }
   for (let w = 0; w < 2; w++) {
       let nativeo = false;
       let country7 = String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,100,95,49,54,0);
      for (let t = 0; t < 1; t++) {
         nativeo = country7.length < 95;
      }
      while (!country7.startsWith(`${nativeo}`)) {
         country7 += `${((nativeo ? 3 : 4))}`;
         break;
      }
         country7 = `${((nativeo ? 5 : 2))}`;
         nativeo = !nativeo;
      let mbridgeC = 6704844 <= country7.length;
      do {
         country7 = `${(2 >> (Math.min(4, Math.abs((nativeo ? 1 : 4)))))}`;
         if (mbridgeC) {
            break;
         }
      } while ((country7.length >= 4) && mbridgeC);
      while (4 > country7.length) {
          let neonF = String.fromCharCode(99,97,99,104,101,115,95,99,95,54,0);
          let friends9 = String.fromCharCode(113,95,52,56,95,108,105,98,115,109,98,99,0);
          let showH = false;
          let dataS: Map<any, any> = new Map([[String.fromCharCode(102,105,120,116,117,114,101,95,108,95,57,55,0),String.fromCharCode(112,95,54,95,115,97,118,101,112,111,105,110,116,0)], [String.fromCharCode(115,104,101,101,116,95,113,95,56,54,0),String.fromCharCode(112,114,101,100,105,99,116,95,98,95,49,49,0)], [String.fromCharCode(101,95,53,95,114,101,115,111,108,118,101,114,0),String.fromCharCode(119,95,49,53,95,117,102,102,101,114,0)]]);
          let tickK: Array<any> = [15, 82, 341];
         nativeo = dataS.size <= 99;
         neonF = `${((showH ? 3 : 3))}`;
         friends9 = `${(2 | (showH ? 3 : 1))}`;
         dataS = new Map([[`${tickK.length}`, 1]]);
         tickK = [(String.fromCharCode(107,0) == neonF ? neonF.length : tickK.length)];
         break;
      }
      runtimeW = new Map([[`${routern.size}`, routern.size]]);
   }
      fetchBannerAd();
    } else {

      customo += `${runtimeW.size}`;
      lessU += parseFloat(`${parseInt(`${register_qnn}`) % (Math.max(libfbw.length, 7))}`);
   while ((routern.size & 5) < 5 || 3 < (penaltyK.length & 5)) {
       let bottomY = String.fromCharCode(104,95,55,54,95,101,118,101,110,116,115,0);
          let renewt = 3.0;
          let constantsN = false;
         bottomY = `${parseInt(`${renewt}`)}`;
         renewt *= ((constantsN ? 1 : 4));
         bottomY = `${(bottomY == String.fromCharCode(66,0) ? bottomY.length : bottomY.length)}`;
      if (bottomY == String.fromCharCode(54,0)) {
         bottomY += `${bottomY.length}`;
      }
      penaltyK = `${libfbw.length & runtimeW.size}`;
      break;
   }
      register_qnn /= Math.max(parseFloat(`${2 >> (Math.min(3, Math.abs(runtimeW.size)))}`), 3);
   let photoN = nativeL == String.fromCharCode(122,112,103,100,97,115,99,111,120,55,0);
   do {
      nativeL += `${runtimeW.size}`;
      if (photoN) {
         break;
      }
   } while ((nativeL.length > 2 || minivodY == String.fromCharCode(119,0)) && photoN);
       let dangerU = String.fromCharCode(100,99,98,108,111,99,107,95,99,95,51,49,0);
       let trashu = 2.0;
       let package_ybw = 5.0;
          let configuren = String.fromCharCode(122,95,52,95,114,118,100,97,116,97,0);
          let logoK = 1.0;
         package_ybw -= configuren.length;
         configuren += "3";
         logoK -= parseFloat(`${parseInt(`${logoK}`)}`);
      let roundX = trashu <= 9290864.0;
      do {
          let trophyr = String.fromCharCode(120,95,52,48,95,116,116,108,0);
          let launchv = String.fromCharCode(108,111,110,103,95,116,95,49,52,0);
          let agreementB = String.fromCharCode(119,95,56,55,95,108,101,116,115,0);
         trashu += (String.fromCharCode(113,0) == dangerU ? trophyr.length : dangerU.length);
         trophyr = `${launchv.length}`;
         launchv = `${launchv.length}`;
         agreementB = `${launchv.length - 2}`;
         if (roundX) {
            break;
         }
      } while ((package_ybw > trashu) && roundX);
          let downloadt = 1;
          let dplusG = String.fromCharCode(97,114,102,113,95,116,95,51,50,0);
          let mathy = String.fromCharCode(114,95,55,95,99,97,108,108,105,110,103,0);
         trashu -= parseInt(`${package_ybw}`) - downloadt;
         downloadt <<= Math.min(4, Math.abs((String.fromCharCode(118,0) == mathy ? dplusG.length : mathy.length)));
         dplusG += `${(dplusG == String.fromCharCode(66,0) ? mathy.length : dplusG.length)}`;
         package_ybw -= parseInt(`${trashu}`) << (Math.min(Math.abs(2), 2));
         trashu += 2;
      while ((trashu - package_ybw) >= 4.47 && 4.47 >= (trashu - package_ybw)) {
         trashu += 2 << (Math.min(3, dangerU.length));
         break;
      }
         package_ybw -= dangerU.length * 3;
      while ((trashu + dangerU.length) == 3.37) {
         dangerU = `${(String.fromCharCode(116,0) == dangerU ? dangerU.length : parseInt(`${package_ybw}`))}`;
         break;
      }
      while (3 > (dangerU.length - 5)) {
         trashu += parseInt(`${package_ybw}`);
         break;
      }
      customo += `${modelb.size << (Math.min(Math.abs(3), 4))}`;
      setBannerAd(undefined);

   for (let j = 0; j < 1; j++) {
      lessU += parseFloat(`${3 % (Math.max(8, parseInt(`${lessU}`)))}`);
   }
      customo = `${runtimeW.size}`;
      nativeL = `${1 << (Math.min(2, penaltyK.length))}`;
       let completev = 5;
       let zoomZ = String.fromCharCode(115,95,56,54,95,98,105,110,107,98,0);
       let buildg = String.fromCharCode(101,120,116,109,97,112,95,119,95,54,51,0);
         zoomZ += `${2 ^ buildg.length}`;
      for (let j = 0; j < 1; j++) {
         zoomZ = "2";
      }
      while (5 < (completev + 5) || (buildg.length + 5) < 2) {
         buildg += `${buildg.length}`;
         break;
      }
      let backwardS = 9056603 >= zoomZ.length;
      do {
          let sendR = String.fromCharCode(101,118,101,110,97,118,103,95,54,95,52,50,0);
          let launcherU = String.fromCharCode(115,95,55,49,95,109,98,108,111,111,112,0);
          let searchbar7 = true;
          let trashi: Map<any, any> = new Map([[String.fromCharCode(105,95,50,53,95,101,109,111,106,105,0),226], [String.fromCharCode(112,95,51,55,95,110,112,117,116,0),355], [String.fromCharCode(108,105,102,101,99,121,99,108,101,95,51,95,49,52,0),59]]);
         zoomZ = `${((searchbar7 ? 4 : 4) ^ completev)}`;
         sendR = `${sendR.length | launcherU.length}`;
         launcherU += `${(launcherU == String.fromCharCode(69,0) ? trashi.size : launcherU.length)}`;
         searchbar7 = (sendR.length ^ trashi.size) == 50;
         if (backwardS) {
            break;
         }
      } while (((completev << (Math.min(zoomZ.length, 4))) >= 3) && backwardS);
      while ((zoomZ.length * 2) == 3) {
         zoomZ = "3";
         break;
      }
         completev += 2;
          let blackp: Array<any> = [103, 372];
          let volumez = false;
          let searchf = 1;
         completev &= searchf;
         blackp = [blackp.length];
         volumez = blackp.length == 61;
         searchf /= Math.max(1 << (Math.min(1, blackp.length)), 1);
      while (buildg == zoomZ) {
         zoomZ = `${buildg.length}`;
         break;
      }
      let rightx = zoomZ.length <= 9245595;
      do {
         zoomZ += `${buildg.length}`;
         if (rightx) {
            break;
         }
      } while ((2 > buildg.length) && rightx);
      lessU += parseFloat(`${1}`);
      customo += `${parseInt(`${tickA}`)}`;
      lessU *= parseFloat(`${runtimeW.size & 3}`);
      setBannerAdList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip])
  );

  const Content = ({
    item,
    index,
  }: {
    item: { date: string | undefined; data: yys_List | undefined };
    index: number;
  }) => {

    return (
      <View style={{ width: "100%" }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? "#0c0c0c" : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
              borderTopLeftRadius: index == 0 && !isLive ? 0 : 15,
              borderTopRightRadius: index == 0 && !isLive ? 0 : 15,
              marginTop: index == 0 ? 0 : 20,
              position: "relative",
            }}
          >
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>
              {/* <Text>{String((matches?.data.length > (index + 1) && matches?.data[index+1]?.date !== undefined ) || (matches?.data.length == index+1 ) )}</Text> */}
              <MatchScheduleVip
                borderFlag={String(
                  (matches?.data.length >= index + 1 &&
                    matches?.data[index + 1]?.date !== undefined) ||
                  matches?.data.length == index + 1
                )}
                bgDark={true}
                setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                key={index}
                matchSche={item?.data}
              />

              {(index + 1) % 5 === 0 && bannerAd && bannerAdList.length > 0 && (
                <View style={{
                  paddingVertical: 5
                }}>
                  <BannerContainer
                    bannerAd={bannerAdList[Math.floor(Math.random() * bannerAdList.length)]}
                    onMount={({ id, name, slot_id, title }) => {
                      yys_event_common.sportBannerViewAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                    onPress={({ id, name, slot_id, title }) => {
                      yys_event_common.sportBannerClickAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                  />
                </View>

              )}
            </>
          )
        )}
      </View>
    );
  };

  const handleRefresh = () => {
       let schedulerK = 3;
    let with_lbw = String.fromCharCode(121,95,51,95,115,101,99,117,114,105,116,121,0);
    let episodesN = 2;
    let long_pn = String.fromCharCode(99,111,115,116,105,95,57,95,56,52,0);
    let with_rN: Array<any> = [52, 162];
    let gesturesi = String.fromCharCode(105,103,110,101,116,116,101,95,117,95,49,54,0);
    let canvast = 1.0;
    let sliderF = String.fromCharCode(97,117,116,111,102,105,120,95,121,95,56,56,0);
    let umengX: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,51,95,57,55,0),String.fromCharCode(115,111,114,116,101,114,95,111,95,57,50,0)], [String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,109,95,51,57,0),String.fromCharCode(115,116,97,98,105,108,105,122,101,95,55,95,53,54,0)], [String.fromCharCode(122,95,52,50,95,116,100,108,116,0),String.fromCharCode(100,111,119,110,108,111,97,100,115,95,49,95,56,57,0)]]);
    let kuaishouv: Array<any> = [497, 895];
    let roomd: Map<any, any> = new Map([[String.fromCharCode(100,105,116,104,101,114,105,110,103,95,102,95,52,56,0),782], [String.fromCharCode(116,101,120,116,117,114,101,115,95,119,95,53,57,0),481]]);
    let videocommonl = String.fromCharCode(107,95,53,50,95,102,111,114,105,0);
       let slider8 = 0;
       let libloggerO = String.fromCharCode(115,116,111,114,101,100,95,117,95,57,53,0);
       let projectl = 1.0;
      for (let i = 0; i < 3; i++) {
         libloggerO = `${slider8}`;
      }
         projectl -= 1 >> (Math.min(5, libloggerO.length));
      while (5 <= (libloggerO.length >> (Math.min(Math.abs(3), 4))) && 5 <= (3 >> (Math.min(1, libloggerO.length)))) {
         libloggerO += "1";
         break;
      }
         libloggerO += `${(libloggerO == String.fromCharCode(67,0) ? parseInt(`${projectl}`) : libloggerO.length)}`;
         projectl += (libloggerO == String.fromCharCode(52,0) ? libloggerO.length : slider8);
      while (1 < (4 ^ slider8) || 4.90 < (4.57 - projectl)) {
          let drago = String.fromCharCode(101,120,112,111,110,101,110,116,95,118,95,56,55,0);
          let favoritek = String.fromCharCode(104,95,53,54,95,109,118,112,114,111,98,115,0);
          let analyticsY = 4.0;
          let weibot = 2.0;
          let d_manager2 = String.fromCharCode(107,95,55,56,95,112,97,103,101,0);
         slider8 -= (String.fromCharCode(79,0) == drago ? drago.length : d_manager2.length);
         favoritek = "1";
         analyticsY /= Math.max(2, parseFloat(`${favoritek.length << (Math.min(Math.abs(3), 2))}`));
         weibot *= favoritek.length;
         d_manager2 = `${parseInt(`${weibot}`) & parseInt(`${analyticsY}`)}`;
         break;
      }
      if (libloggerO.includes(`${projectl}`)) {
         libloggerO = "2";
      }
      for (let j = 0; j < 1; j++) {
         projectl += parseInt(`${projectl}`) / (Math.max(libloggerO.length, 6));
      }
      if (projectl <= 4.32) {
         libloggerO += `${libloggerO.length % 1}`;
      }
      kuaishouv = [3 / (Math.max(6, parseInt(`${canvast}`)))];
   if (!long_pn.endsWith(`${canvast}`)) {
      canvast /= Math.max(2, parseFloat(`${episodesN + 2}`));
   }
       let submitx: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,101,100,95,103,95,54,50,0),360], [String.fromCharCode(115,95,55,51,95,108,105,109,105,116,115,0),169], [String.fromCharCode(106,95,50,51,95,97,118,114,101,115,97,109,112,108,101,0),400]]);
      if (!Array.from(submitx.keys()).includes(`${submitx.size}`)) {
         submitx.set(`${submitx.size}`, 2 * submitx.size);
      }
         submitx.set(`${submitx.size}`, 3 | submitx.size);
         submitx = new Map([[`${submitx.size}`, submitx.size]]);
      long_pn = `${sliderF.length + schedulerK}`;
   if ((1 & roomd.size) <= 2 && 4 <= (roomd.size & 1)) {
       let minivodR: Array<any> = [469, 204];
       let zhengpian7 = 3.0;
          let statisticsy = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,0);
          let launcherb: Map<any, any> = new Map([[String.fromCharCode(120,95,53,52,95,116,114,97,99,105,110,103,0),false ], [String.fromCharCode(105,95,55,51,95,101,118,100,110,115,0),true ], [String.fromCharCode(115,99,97,110,105,110,100,101,120,95,110,95,56,57,0),true ]]);
         zhengpian7 /= Math.max(5, launcherb.size % (Math.max(7, minivodR.length)));
         statisticsy += `${statisticsy.length}`;
         launcherb = new Map([[statisticsy, statisticsy.length >> (Math.min(Math.abs(1), 5))]]);
          let neonM = String.fromCharCode(112,114,111,102,105,108,101,115,95,50,95,49,0);
          let scheduleU = 1.0;
         minivodR.push(neonM.length ^ parseInt(`${zhengpian7}`));
         neonM += `${1 | parseInt(`${scheduleU}`)}`;
         scheduleU -= parseFloat(`${parseInt(`${scheduleU}`)}`);
         minivodR = [parseInt(`${zhengpian7}`) + 2];
         minivodR.push(minivodR.length);
      if (2.48 == (minivodR.length - zhengpian7)) {
          let closee = String.fromCharCode(102,100,99,116,95,109,95,50,51,0);
          let disconnectedz: Array<any> = [918, 906, 748];
          let leakcheckerV = String.fromCharCode(100,110,115,108,97,98,101,108,95,111,95,52,57,0);
          let latna: Map<any, any> = new Map([[String.fromCharCode(122,95,57,51,95,101,118,105,99,101,0),892], [String.fromCharCode(116,95,50,56,95,99,108,101,97,114,105,0),385], [String.fromCharCode(97,114,112,101,100,95,98,95,50,0),452]]);
         minivodR = [3 << (Math.min(3, disconnectedz.length))];
         closee += `${2 * leakcheckerV.length}`;
         disconnectedz.push(closee.length << (Math.min(Math.abs(1), 2)));
         leakcheckerV = `${closee.length}`;
         latna.set(leakcheckerV, leakcheckerV.length ^ 3);
      }
         zhengpian7 -= 3 >> (Math.min(Math.abs(parseInt(`${zhengpian7}`)), 5));
      roomd.set(`${schedulerK}`, with_rN.length * schedulerK);
   }
   let final_s4 = schedulerK >= 5857177;
   do {
       let controlsT = 1.0;
       let encrypte = String.fromCharCode(121,95,53,48,95,108,97,115,114,0);
       let downloadedh = 5.0;
      for (let r = 0; r < 3; r++) {
          let canvasc = true;
         controlsT *= parseFloat(`${2 & parseInt(`${downloadedh}`)}`);
         canvasc = !canvasc;
      }
       let playlistn = false;
      if (2.90 == (4.33 + downloadedh) || !playlistn) {
          let q_positionn = String.fromCharCode(105,95,49,54,95,109,97,110,97,103,101,0);
          let xadsdkT = 2;
          let aboutQ = String.fromCharCode(120,95,52,51,95,105,112,118,0);
         downloadedh += parseFloat(`${3}`);
         q_positionn += `${aboutQ.length << (Math.min(1, Math.abs(xadsdkT)))}`;
         xadsdkT *= q_positionn.length;
         aboutQ += `${q_positionn.length << (Math.min(Math.abs(3), 4))}`;
      }
      for (let j = 0; j < 3; j++) {
         playlistn = String.fromCharCode(106,0) == encrypte;
      }
      while (encrypte.length >= 5) {
          let holderN: Map<any, any> = new Map([[String.fromCharCode(102,95,57,57,95,108,97,100,100,101,114,115,116,101,112,0),321], [String.fromCharCode(99,95,54,55,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0),957]]);
          let delegate_yd6 = String.fromCharCode(99,111,110,116,105,110,101,110,116,95,112,95,49,54,0);
          let flyer5 = 5;
          let renew6 = String.fromCharCode(114,101,115,105,100,101,110,99,101,95,52,95,56,56,0);
         playlistn = parseFloat(`${renew6.length}`) < controlsT;
         holderN.set(delegate_yd6, 3);
         delegate_yd6 += `${delegate_yd6.length & 2}`;
         flyer5 *= 3 - holderN.size;
         renew6 += `${(String.fromCharCode(56,0) == delegate_yd6 ? holderN.size : delegate_yd6.length)}`;
         break;
      }
      while (5 < (1 - parseInt(`${controlsT}`)) || (controlsT - parseFloat(`${encrypte.length}`)) < 2.61) {
         controlsT -= parseFloat(`${2}`);
         break;
      }
       let nalyticse = String.fromCharCode(112,114,111,118,105,100,101,114,115,95,52,95,52,55,0);
         playlistn = encrypte.length < 6;
         playlistn = ((encrypte.length << (Math.min(2, Math.abs((!playlistn ? encrypte.length : 1))))) == 1);
      schedulerK |= kuaishouv.length;
      if (final_s4) {
         break;
      }
   } while (((episodesN - 1) <= 4) && final_s4);
       let pointD: Array<any> = [363, 633, 416];
       let watchf = String.fromCharCode(103,108,121,112,104,115,95,53,95,51,50,0);
       let uimanagerm = String.fromCharCode(109,95,57,49,95,98,108,111,99,107,115,0);
         uimanagerm = `${pointD.length}`;
         uimanagerm = `${pointD.length}`;
      while (2 <= watchf.length) {
         watchf = `${watchf.length / 2}`;
         break;
      }
      for (let f = 0; f < 1; f++) {
         uimanagerm += `${pointD.length}`;
      }
         watchf = `${pointD.length ^ watchf.length}`;
         watchf += `${1 - pointD.length}`;
       let backgroundY = true;
       let transfer_: Map<any, any> = new Map([[String.fromCharCode(122,95,49,49,95,100,120,116,97,0),String.fromCharCode(99,104,97,110,103,101,115,95,107,95,50,52,0)], [String.fromCharCode(119,95,52,54,95,116,114,105,101,0),String.fromCharCode(118,95,53,95,102,117,122,122,101,114,115,0)], [String.fromCharCode(106,95,48,95,116,97,112,116,105,99,0),String.fromCharCode(114,95,56,50,95,102,105,108,116,101,114,102,0)]]);
       let topic0: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,54,95,49,57,0),768], [String.fromCharCode(99,111,110,115,117,109,97,98,108,101,95,107,95,54,49,0),508]]);
      for (let r = 0; r < 2; r++) {
         transfer_ = new Map([[uimanagerm, ((backgroundY ? 5 : 1) - 3)]]);
      }
      long_pn = `${schedulerK - 1}`;

    setShowLoading(true);
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 });

    setTimeout(() => {

       let assistm = String.fromCharCode(116,111,103,103,108,101,100,95,49,95,49,48,48,0);
         assistm = "1";
          let package_rmq: Array<any> = [571, 511];
         assistm = `${(String.fromCharCode(104,0) == assistm ? assistm.length : package_rmq.length)}`;
      while (assistm != String.fromCharCode(113,0)) {
         assistm = `${assistm.length | 2}`;
         break;
      }
      long_pn = `${long_pn.length}`;
       let gift5: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,109,97,112,115,0),458], [String.fromCharCode(98,95,49,50,95,120,106,112,101,103,0),4], [String.fromCharCode(101,120,116,114,97,115,95,102,95,57,57,0),698]]);
       let libpangleflipped0 = String.fromCharCode(104,101,105,103,104,116,115,95,57,95,51,56,0);
       let z_titlet = String.fromCharCode(111,112,116,105,109,97,108,95,103,95,52,49,0);
      if (2 <= (z_titlet.length / (Math.max(7, gift5.size))) && 2 <= (gift5.size / (Math.max(z_titlet.length, 10)))) {
          let xvodT = 3.0;
         z_titlet += `${gift5.size + 2}`;
         xvodT /= Math.max(4, parseInt(`${xvodT}`) % 2);
      }
      while (1 > gift5.size) {
         z_titlet += `${libpangleflipped0.length}`;
         break;
      }
      for (let z = 0; z < 2; z++) {
         z_titlet += `${libpangleflipped0.length * gift5.size}`;
      }
      if (!libpangleflipped0.includes(`${gift5.size}`)) {
          let o_titleO = String.fromCharCode(112,97,110,111,114,97,109,97,95,122,95,49,0);
          let assistN: Map<any, any> = new Map([[String.fromCharCode(118,95,50,52,95,116,116,97,100,97,116,97,0),703], [String.fromCharCode(115,104,101,108,108,95,52,95,52,50,0),439], [String.fromCharCode(108,95,49,48,95,109,111,118,101,110,99,0),40]]);
          let untickw = 1.0;
         gift5.set(o_titleO, z_titlet.length - 1);
         o_titleO += `${parseInt(`${untickw}`) * assistN.size}`;
         assistN.set(`${untickw}`, parseInt(`${untickw}`) / (Math.max(3, 7)));
      }
      if ((gift5.size - 3) >= 2) {
         libpangleflipped0 += `${gift5.size}`;
      }
         libpangleflipped0 = `${gift5.size}`;
      for (let y = 0; y < 2; y++) {
         gift5.set(z_titlet, (String.fromCharCode(107,0) == z_titlet ? z_titlet.length : gift5.size));
      }
      while (!libpangleflipped0.startsWith(z_titlet)) {
         z_titlet += `${z_titlet.length}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         libpangleflipped0 = `${gift5.size}`;
      }
      sliderF = "2";
   for (let z = 0; z < 2; z++) {
       let dicem = 3.0;
       let type__y3 = String.fromCharCode(114,101,108,97,121,111,117,116,95,120,95,50,52,0);
       let latnY = 4.0;
       let libavutiln = String.fromCharCode(101,95,57,55,95,99,111,110,116,114,105,98,117,116,105,110,103,0);
       let storel: Array<any> = [107, 94, 19];
         type__y3 = `${storel.length >> (Math.min(Math.abs(3), 3))}`;
         type__y3 = "1";
      if (2 > (libavutiln.length - parseInt(`${latnY}`))) {
         libavutiln = `${parseInt(`${latnY}`)}`;
      }
      while (parseInt(`${latnY}`) <= libavutiln.length) {
          let privacyx = 4.0;
          let pressureM = String.fromCharCode(101,95,55,49,95,111,118,101,114,115,104,111,111,116,0);
          let tick_: Array<any> = [String.fromCharCode(116,95,57,55,95,112,97,121,101,101,0), String.fromCharCode(105,110,116,101,114,105,116,101,109,95,53,95,52,51,0)];
          let countryd = 5;
         latnY *= 1 + type__y3.length;
         privacyx += 3;
         pressureM = "3";
         tick_ = [(String.fromCharCode(98,0) == pressureM ? pressureM.length : tick_.length)];
         countryd /= Math.max(2, 2);
         break;
      }
         storel = [parseInt(`${dicem}`) & storel.length];
          let castingv: Array<any> = [985, 870];
          let orientationo: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,112,114,101,99,97,108,99,117,108,97,116,101,0),815], [String.fromCharCode(109,95,51,51,95,104,109,97,99,108,105,115,116,0),628]]);
         latnY -= 3;
         castingv.push(1);
         orientationo.set(`${castingv.length}`, orientationo.size);
      while (dicem == libavutiln.length) {
         libavutiln += `${parseInt(`${dicem}`) | type__y3.length}`;
         break;
      }
       let humidityR: Map<any, any> = new Map([[String.fromCharCode(98,95,55,57,95,117,114,108,100,101,99,111,100,101,0),false ], [String.fromCharCode(120,95,52,51,95,112,101,101,108,0),false ], [String.fromCharCode(101,95,49,51,95,114,101,116,97,105,110,115,0),true ]]);
       let specY: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,105,120,101,110,99,95,106,95,51,0),String.fromCharCode(115,104,111,114,116,99,117,116,95,112,95,50,48,0)], [String.fromCharCode(115,116,114,101,116,99,104,95,100,95,50,49,0),String.fromCharCode(112,97,114,97,109,95,48,95,53,56,0)], [String.fromCharCode(108,95,51,53,95,115,116,114,99,115,112,110,0),String.fromCharCode(119,100,108,102,99,110,95,111,95,55,49,0)]]);
          let emojiF = 4;
          let renew2 = false;
         libavutiln = `${storel.length}`;
         emojiF /= Math.max(3, 1);
         renew2 = emojiF <= 1 && !renew2;
         latnY /= Math.max(humidityR.size, 5);
      for (let q = 0; q < 3; q++) {
         latnY += storel.length + 1;
      }
          let sansI = 1.0;
          let macaud = 2.0;
          let zhubo8 = String.fromCharCode(100,101,97,100,105,110,101,95,121,95,51,51,0);
         dicem /= Math.max(2, 1 % (Math.max(2, parseInt(`${sansI}`))));
         sansI *= zhubo8.length;
         macaud /= Math.max(zhubo8.length << (Math.min(Math.abs(3), 1)), 1);
      let placeholder9 = 6861221.0 >= dicem;
      do {
         dicem /= Math.max(2, 3 % (Math.max(8, type__y3.length)));
         if (placeholder9) {
            break;
         }
      } while (placeholder9 && ((4 + parseInt(`${dicem}`)) <= 3 || (dicem + type__y3.length) <= 2.38));
      for (let b = 0; b < 3; b++) {
          let regengX = String.fromCharCode(109,97,116,114,111,115,107,97,95,49,95,49,54,0);
         type__y3 = `${(String.fromCharCode(88,0) == type__y3 ? type__y3.length : storel.length)}`;
         regengX += `${3 * regengX.length}`;
      }
       let gesturec: Map<any, any> = new Map([[String.fromCharCode(107,109,101,97,110,115,95,116,95,57,52,0),948], [String.fromCharCode(116,104,101,110,97,98,108,101,95,114,95,53,55,0),613], [String.fromCharCode(111,95,56,48,95,108,115,102,112,111,108,121,0),764]]);
       let renderf: Map<any, any> = new Map([[String.fromCharCode(121,95,56,49,95,114,101,103,101,120,0),49], [String.fromCharCode(99,116,114,95,56,95,49,57,0),554], [String.fromCharCode(100,101,110,105,101,100,95,53,95,55,51,0),850]]);
      kuaishouv.push(3 & storel.length);
   }
      roomd.set(`${schedulerK}`, schedulerK);
   let updatesf = String.fromCharCode(116,56,105,112,111,106,0) == long_pn;
   do {
       let userU: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,115,95,57,95,53,55,0),true ], [String.fromCharCode(122,95,54,55,95,98,101,97,116,105,110,103,0),true ]]);
       let gdtadvu = 3.0;
       let knewinterstitial_ = 3.0;
          let navigationj = 4.0;
          let gesturesY: Map<any, any> = new Map([[String.fromCharCode(113,100,114,97,119,95,52,95,49,55,0),true ], [String.fromCharCode(109,112,115,117,98,95,50,95,54,53,0),false ], [String.fromCharCode(114,95,53,49,95,115,117,98,115,101,113,117,101,110,99,101,0),false ]]);
          let referrerx: Array<any> = [722, 112];
         gdtadvu *= parseFloat(`${2}`);
         navigationj -= referrerx.length;
         gesturesY = new Map([[`${gesturesY.size}`, 1]]);
         referrerx = [referrerx.length - 3];
      if (userU.get(`${gdtadvu}`) != null) {
         gdtadvu -= parseFloat(`${parseInt(`${knewinterstitial_}`)}`);
      }
      let configE = userU.size <= 5771584;
      do {
         userU.set(`${knewinterstitial_}`, 3 | userU.size);
         if (configE) {
            break;
         }
      } while (((userU.size << (Math.min(Math.abs(4), 2))) < 1) && configE);
          let auto_bR: Array<any> = [84, 310];
          let libswscale_ = 2.0;
          let smallJ = 3.0;
         gdtadvu /= Math.max(parseFloat(`${parseInt(`${knewinterstitial_}`)}`), 1);
         auto_bR = [parseInt(`${libswscale_}`) << (Math.min(auto_bR.length, 4))];
         libswscale_ /= Math.max(parseFloat(`${2}`), 4);
         smallJ /= Math.max(4, parseFloat(`${auto_bR.length - 2}`));
      while (gdtadvu < parseFloat(`${userU.size}`)) {
         gdtadvu /= Math.max(parseFloat(`${parseInt(`${knewinterstitial_}`)}`), 1);
         break;
      }
         userU.set(`${gdtadvu}`, 3);
         knewinterstitial_ -= parseFloat(`${1}`);
      while (1 >= (userU.size * parseInt(`${gdtadvu}`)) || 3.23 >= (gdtadvu * 2.7)) {
         gdtadvu /= Math.max(parseFloat(`${3}`), 1);
         break;
      }
         gdtadvu += parseFloat(`${parseInt(`${knewinterstitial_}`) << (Math.min(Math.abs(userU.size), 5))}`);
      long_pn = `${userU.size + parseInt(`${canvast}`)}`;
      if (updatesf) {
         break;
      }
   } while (updatesf && (3 <= (5 - long_pn.length) && 5 <= (kuaishouv.length - long_pn.length)));
   for (let k = 0; k < 1; k++) {
      episodesN /= Math.max(5, schedulerK | 3);
   }
      

      roomd = new Map([[gesturesi, episodesN + gesturesi.length]]);
   if (3 > (roomd.size >> (Math.min(Math.abs(4), 5))) && 3 > (schedulerK >> (Math.min(Math.abs(4), 5)))) {
      roomd.set(sliderF, sliderF.length + 2);
   }
       let sinab = String.fromCharCode(113,95,56,52,95,114,97,110,115,105,116,105,111,110,0);
       let ticked5 = 4;
       let bannerm = 0.0;
         ticked5 |= parseInt(`${bannerm}`) % 1;
         ticked5 ^= 1 | ticked5;
         ticked5 <<= Math.min(Math.abs(parseInt(`${bannerm}`) ^ 1), 4);
      for (let b = 0; b < 3; b++) {
          let backgroundH = String.fromCharCode(103,95,54,55,95,112,108,117,114,97,108,0);
         ticked5 ^= (String.fromCharCode(101,0) == backgroundH ? backgroundH.length : ticked5);
      }
      for (let d = 0; d < 1; d++) {
          let shirtD = 1;
          let libswscaleB: Array<any> = [179, 442];
          let long_b3N = String.fromCharCode(98,95,55,54,95,102,116,118,109,111,0);
         ticked5 ^= parseInt(`${bannerm}`);
         shirtD *= 1;
         libswscaleB.push(shirtD * long_b3N.length);
         long_b3N += `${libswscaleB.length * 3}`;
      }
          let half0 = 3;
         bannerm += parseFloat(`${parseInt(`${bannerm}`) | ticked5}`);
         half0 <<= Math.min(4, Math.abs(half0));
      while (bannerm <= ticked5) {
         bannerm /= Math.max(2, parseFloat(`${2 - sinab.length}`));
         break;
      }
      for (let b = 0; b < 1; b++) {
         bannerm /= Math.max(parseFloat(`${parseInt(`${bannerm}`) - sinab.length}`), 1);
      }
          let overlayr: Map<any, any> = new Map([[String.fromCharCode(100,95,52,49,95,100,114,101,102,0),false ], [String.fromCharCode(104,95,53,95,110,111,116,105,102,105,101,114,0),false ], [String.fromCharCode(115,95,51,54,95,100,105,118,105,100,111,114,115,0),true ]]);
          let unimplementedviewd = 4.0;
          let morep = String.fromCharCode(109,95,53,48,95,101,112,111,99,104,0);
         sinab = `${morep.length}`;
         overlayr = new Map([[`${overlayr.size}`, 3 | overlayr.size]]);
         unimplementedviewd *= parseFloat(`${parseInt(`${unimplementedviewd}`) & overlayr.size}`);
         morep += `${parseInt(`${unimplementedviewd}`)}`;
      long_pn = `${long_pn.length >> (Math.min(4, Math.abs(ticked5)))}`;
      kuaishouv = [gesturesi.length];
   while (4 < (long_pn.length << (Math.min(Math.abs(1), 3))) || (umengX.size << (Math.min(Math.abs(1), 2))) < 5) {
      umengX = new Map([[`${episodesN}`, long_pn.length >> (Math.min(Math.abs(3), 1))]]);
      break;
   }
   while (!sliderF.includes(`${kuaishouv.length}`)) {
      kuaishouv = [long_pn.length];
      break;
   }
      setShowLoading(false);
    }, 1200);
  };

  
  
  
  
  
  
  
  
  

  const handleInitialLoading = useCallback(() => {
       let modalr = 4.0;
    let emptyQ = 0.0;
    let adulto = false;
    let expando = 2.0;
    let pauseu = String.fromCharCode(118,112,111,105,110,116,95,102,95,53,48,0);
    let giftS = String.fromCharCode(108,95,57,52,95,100,101,105,110,105,116,0);
    let username3: Array<any> = [875, 972];
    let runtimeschedulerp: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,112,95,53,50,0),String.fromCharCode(104,109,97,99,108,105,115,116,95,55,95,53,57,0)], [String.fromCharCode(110,95,52,57,95,108,105,98,110,100,105,0),String.fromCharCode(117,95,53,55,95,109,111,100,101,108,0)], [String.fromCharCode(111,110,121,120,100,95,104,95,54,53,0),String.fromCharCode(103,95,52,50,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0)]]);
    let backgroundv = true;
       let xcopy_uer = 1.0;
       let helperT = String.fromCharCode(109,101,109,111,106,105,95,120,95,57,56,0);
      if (3.18 >= (4.73 - xcopy_uer) || (4.73 - xcopy_uer) >= 3.57) {
         xcopy_uer /= Math.max(parseFloat(`${1 >> (Math.min(5, helperT.length))}`), 3);
      }
         xcopy_uer *= parseFloat(`${2 - parseInt(`${xcopy_uer}`)}`);
          let sendn = 3.0;
          let qaagB = String.fromCharCode(98,101,114,114,105,101,115,95,49,95,51,55,0);
         helperT += `${parseInt(`${xcopy_uer}`)}`;
         sendn += qaagB.length;
         qaagB += `${parseInt(`${sendn}`)}`;
      let thumbnail8 = helperT.length <= 7341109;
      do {
         helperT = `${helperT.length}`;
         if (thumbnail8) {
            break;
         }
      } while ((!helperT.startsWith(`${xcopy_uer}`)) && thumbnail8);
         helperT = `${parseInt(`${xcopy_uer}`)}`;
       let templateprocessorD = String.fromCharCode(98,95,50,53,95,111,99,116,101,116,0);
      modalr /= Math.max(1, 1);
   for (let n = 0; n < 2; n++) {
      pauseu += `${1 ^ parseInt(`${modalr}`)}`;
   }
       let libffmpegkita = String.fromCharCode(102,95,56,49,95,103,114,97,100,102,117,110,0);
       let downC = String.fromCharCode(110,97,117,116,105,99,97,108,95,50,95,52,48,0);
       let cancelr = String.fromCharCode(102,95,51,54,95,115,99,104,101,100,117,108,101,114,0);
      let actionC = cancelr == String.fromCharCode(105,122,117,98,101,112,119,105,104,0);
      do {
         cancelr = "2";
         if (actionC) {
            break;
         }
      } while ((cancelr.length > 2) && actionC);
         cancelr += "3";
      for (let u = 0; u < 2; u++) {
          let submitC = 1.0;
          let eventh = 2;
         libffmpegkita += `${downC.length}`;
         submitC /= Math.max(eventh, 2);
         eventh >>= Math.min(Math.abs(3 ^ eventh), 2);
      }
       let videojsV = String.fromCharCode(97,99,100,99,95,52,95,53,48,0);
      while (!cancelr.endsWith(`${libffmpegkita.length}`)) {
          let stylese = String.fromCharCode(110,101,105,103,104,98,111,114,95,121,95,52,56,0);
          let launcherl: Map<any, any> = new Map([[String.fromCharCode(119,95,56,95,103,114,97,112,104,0),923], [String.fromCharCode(105,110,118,111,107,101,95,49,95,57,50,0),422], [String.fromCharCode(106,95,55,52,95,99,102,109,116,0),811]]);
          let condensed4 = 0.0;
          let unselectedm = String.fromCharCode(108,95,53,49,95,108,105,110,117,120,0);
         cancelr += `${downC.length + 3}`;
         stylese = `${launcherl.size / (Math.max(stylese.length, 9))}`;
         launcherl.set(`${stylese}`, stylese.length);
         condensed4 /= Math.max(1, parseFloat(`${launcherl.size}`));
         unselectedm = `${unselectedm.length}`;
         break;
      }
       let sansV: Map<any, any> = new Map([[String.fromCharCode(106,95,51,49,95,99,111,110,116,114,97,99,116,115,0),909], [String.fromCharCode(114,95,56,48,95,108,105,98,112,111,115,116,112,114,111,99,0),420]]);
       let o_centerm: Map<any, any> = new Map([[String.fromCharCode(105,115,114,101,97,100,111,110,108,121,95,104,95,53,49,0),String.fromCharCode(117,110,114,101,115,111,108,118,101,100,95,103,95,51,50,0)], [String.fromCharCode(114,101,97,100,95,102,95,53,49,0),String.fromCharCode(112,95,52,54,95,100,105,109,109,101,100,0)]]);
      while (sansV.size >= 3) {
          let suggestionu = 0;
          let launch3 = String.fromCharCode(98,114,101,97,107,105,110,103,95,52,95,57,51,0);
          let libzeusy: Map<any, any> = new Map([[String.fromCharCode(112,111,108,101,95,104,95,53,57,0),true ], [String.fromCharCode(112,95,52,54,95,97,110,97,108,111,103,0),true ]]);
          let armvaJ = true;
         sansV.set(`${suggestionu}`, o_centerm.size);
         suggestionu %= Math.max(((armvaJ ? 3 : 5) * libzeusy.size), 2);
         launch3 = `${libzeusy.size ^ launch3.length}`;
         armvaJ = 81 > libzeusy.size;
         break;
      }
      while (1 <= (o_centerm.size * cancelr.length) || (1 * o_centerm.size) <= 3) {
          let chinasame6 = true;
          let updatesg = String.fromCharCode(115,105,110,101,115,95,51,95,55,0);
         cancelr = `${updatesg.length}`;
         chinasame6 = chinasame6 && chinasame6;
         updatesg = "3";
         break;
      }
      while ((sansV.size - 1) > 1) {
         o_centerm = new Map([[cancelr, 2 ^ cancelr.length]]);
         break;
      }
      expando /= Math.max(2, (parseFloat(`${String.fromCharCode(73,0) == libffmpegkita ? username3.length : libffmpegkita.length}`)));
      giftS += `${1 % (Math.max(5, parseInt(`${emptyQ}`)))}`;
       let whistle4 = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,100,95,49,55,0);
       let flyern = String.fromCharCode(118,95,49,48,48,95,102,105,108,101,102,117,110,99,0);
         whistle4 += `${whistle4.length >> (Math.min(Math.abs(2), 3))}`;
       let combinedi = 4;
       let carouselR = 0;
      emptyQ -= 2 % (Math.max(3, parseInt(`${expando}`)));


    setShowLoading2(true);

       let typesM: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,99,98,95,99,95,54,53,0),860], [String.fromCharCode(100,95,50,51,95,100,105,115,115,105,109,0),540]]);
      if ((3 * typesM.size) > 1 || (typesM.size * typesM.size) > 3) {
         typesM = new Map([[`${typesM.size}`, 2 << (Math.min(2, Math.abs(typesM.size)))]]);
      }
      let libreactnativeblobX = 9068127 <= typesM.size;
      do {
         typesM = new Map([[`${typesM.size}`, typesM.size]]);
         if (libreactnativeblobX) {
            break;
         }
      } while ((3 > (5 ^ typesM.size) && 3 > (5 ^ typesM.size)) && libreactnativeblobX);
          let playlistQ = 2;
         typesM.set(`${playlistQ}`, 3 | playlistQ);
      pauseu += `${giftS.length}`;
   let libavfilterQ = adulto ? !adulto : adulto;
   do {
      adulto = (giftS.length + username3.length) < 88;
      if (libavfilterQ) {
         break;
      }
   } while (libavfilterQ && (2.16 > emptyQ));
   for (let m = 0; m < 3; m++) {
      pauseu = "3";
   }
      username3 = [((adulto ? 2 : 5) | parseInt(`${expando}`))];
   let videocommont = modalr <= 5321472.0;
   do {
      modalr /= Math.max(5, 1 - parseInt(`${expando}`));
      if (videocommont) {
         break;
      }
   } while (videocommont && (2 <= (parseInt(`${modalr}`) / (Math.max(1, username3.length)))));
    setTimeout(() => {

   if (4 > (giftS.length - parseInt(`${expando}`))) {
      giftS = `${(String.fromCharCode(76,0) == pauseu ? parseInt(`${emptyQ}`) : pauseu.length)}`;
   }
       let stationsH = 1.0;
       let detailsd = 2.0;
       let descE = 0.0;
         descE /= Math.max(3, parseFloat(`${1}`));
         descE /= Math.max(parseFloat(`${parseInt(`${detailsd}`) + 1}`), 4);
      if ((3.45 + descE) == 4.34) {
         descE *= parseFloat(`${parseInt(`${detailsd}`)}`);
      }
      let buttona = detailsd <= 7627338.0;
      do {
         detailsd += parseFloat(`${parseInt(`${stationsH}`) | 3}`);
         if (buttona) {
            break;
         }
      } while ((stationsH > 3.21) && buttona);
      if (4.67 >= (1.35 - detailsd) || (stationsH - 1.35) >= 4.71) {
         detailsd += parseFloat(`${parseInt(`${descE}`) * 3}`);
      }
      let libreactK = 6222584.0 >= descE;
      do {
          let libsentryq = String.fromCharCode(120,95,49,52,95,118,101,110,100,111,114,0);
          let linkh = 0.0;
          let rewardvideoe = 5;
          let floatingP: Map<any, any> = new Map([[String.fromCharCode(106,117,108,105,97,110,95,48,95,56,54,0),137], [String.fromCharCode(117,95,54,95,98,97,116,116,101,114,121,0),255]]);
          let matchesp = String.fromCharCode(114,101,99,101,105,118,101,100,95,117,95,50,56,0);
         descE -= parseFloat(`${3 | floatingP.size}`);
         libsentryq = `${parseInt(`${linkh}`) + 2}`;
         linkh -= 2 | matchesp.length;
         rewardvideoe <<= Math.min(3, matchesp.length);
         floatingP.set(`${linkh}`, 1);
         if (libreactK) {
            break;
         }
      } while (libreactK && (5.14 <= (descE * detailsd)));
      for (let k = 0; k < 1; k++) {
          let station8 = String.fromCharCode(105,95,49,48,48,95,111,112,101,110,115,115,108,118,0);
         descE += parseFloat(`${2 | station8.length}`);
      }
         stationsH /= Math.max(parseInt(`${stationsH}`) ^ 1, 5);
      let textinputf = descE <= 8459601.0;
      do {
         descE /= Math.max(parseFloat(`${2}`), 2);
         if (textinputf) {
            break;
         }
      } while (textinputf && (2.35 <= (descE * 5.12) && 3.13 <= (5.12 - stationsH)));
      giftS += `${(String.fromCharCode(51,0) == giftS ? giftS.length : parseInt(`${detailsd}`))}`;
   for (let w = 0; w < 2; w++) {
      pauseu = `${parseInt(`${modalr}`)}`;
   }
   let orangeE = adulto ? !adulto : adulto;
   do {
      adulto = runtimeschedulerp.size >= username3.length;
      if (orangeE) {
         break;
      }
   } while (orangeE && ((3.11 + emptyQ) == 5.38 || emptyQ == 3.11));
   for (let w = 0; w < 3; w++) {
      pauseu = `${parseInt(`${expando}`) & runtimeschedulerp.size}`;
   }
      setShowLoading2(false);
    }, 1200);

  }, []);

  useEffect(() => {
    handleInitialLoading();
  }, [handleInitialLoading]);

  return (
    <View style={{ flex: 1 }}>

      {showLoading2 && (
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#0c0c0c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <FastImage
            style={{ height: 150, width: 150 }}
            source={require("@static/images/indexTyping.gif")}
            resizeMode={"contain"}
          />
        </View>

      )}


      {matches?.data !== undefined && matches.data.length > 0 ? (
        <View>
          <FlatList
            ref={flatlistRef}
            data={matches.data}
            windowSize={3}
            
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            renderItem={Content}
            
            
            
            
            
            
            onEndReachedThreshold={0.9}
            
            ListFooterComponent={
              <View style={{ paddingTop: TOPON_BANNER_HEIGHT + 20 }} />
            }
          />
        </View>
      ) : (
        <></>
      )}

      {matches?.data !== undefined && matches.data.length == 0 && (
        <View
          style={{
            height: 100,
            backgroundColor: "#0c0c0c",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Text style={{ color: "#9c9c9c", fontStyle: "italic" }}>
            暂无赛事
          </Text>
        </View>
      )}

      {showLoading && (
        <View
          style={{
            position: "absolute",
            
            backgroundColor: "#0c0c0c",
            zIndex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <FastImage
            source={require("@static/images/cancelSigmobLibzeus.gif")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
      )}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh();
        }}
      >
        <FastImage
          source={require("../../assets/images/faviconVietnam.png")}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
