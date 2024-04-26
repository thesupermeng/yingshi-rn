import React, { memo, useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import styles from "./ww_utils_orangeclock";
import { TouchableOpacity } from "react-native";
import { formatMatchDate } from "../../utility/utils";
import { wwEighteenShirt } from "@redux/ww_small";
import { wwInfo } from "../../types/ww_dice";
import { Url } from "../../middleware/ww_phone_langkey";
import { useInfiniteQuery } from "@tanstack/react-query";
import wwShirtPhilippines from "../../middleware/ww_klevin";
import MatchScheduleVip from "./ww_mail";
import FastImage from "../../../components/common/ww_result";
import { TOPON_BANNER_HEIGHT } from "@utility/ww_icon";
import { wwSendBuild } from "@type/ww_dycreator_result";
import { wwForegroundModules } from "@utility/ww_rewardvideo";
import { wwCollection } from "@constants";
import { wwAbidetect } from "../../../../ww_leakchecker";
import { BannerContainer } from "../../../components/container/ww_runtime_iconarrowright";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import ww_runtime from "../../../../Umeng/ww_runtime";
import { wwLivenodatabgimg } from "../../../api/ww_right";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import { screenModel } from "@type/ww_jingdong_libavfilter";

interface wwIndexDice {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  isLive?: boolean;
}

type wwSpinnerInouttargetred = {
  date: string | undefined;
  data: wwInfo | undefined;
};

type ww_dialog_club = {
  headers: number[];
  data: wwSpinnerInouttargetred[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false,
  isLive = false,
}: wwIndexDice) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [bannerAd, setBannerAd] = useState<wwSendBuild>();
  const [bannerAdList, setBannerAdList] = useState<Array<wwSendBuild>>([]);
  const userState = useSelector<wwVertical>('userReducer');
  const isVip = wwBodan.isVip(userState.user);
  const screenState = useSelector<screenModel>('screenReducer');


  const [matches, setMatches] = useState<ww_dialog_club>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let transferj = true;
    let select9 = false;
    let interstitialh: Array<any> = [895, 520];
    let floatinga: Array<any> = [980, 636, 251];
    let countryX: Array<any> = [107, 344, 946];
    let brightnessg: Map<any, any> = new Map([[String.fromCharCode(109,95,53,52,95,112,97,99,107,101,116,101,100,0),false ], [String.fromCharCode(118,95,50,53,95,103,114,111,119,0),false ]]);
    let updatesZ: Array<any> = [279, 349, 119];
    let libglogY = String.fromCharCode(112,95,54,51,95,115,111,108,117,116,105,111,110,0);
    let giftbuttonn: Array<any> = [845, 69, 957];
    let turndown9: Array<any> = [36, 362, 118];
    let promotionp: Array<any> = [838, 35, 921];
    let resultm = String.fromCharCode(118,105,115,98,108,101,95,104,95,54,52,0);
    let profileW = 2.0;
    let minio = true;
      turndown9 = [promotionp.length ^ turndown9.length];
      promotionp = [countryX.length + 3];
   while (!select9 && !transferj) {
       let areaN = String.fromCharCode(99,104,117,110,107,95,102,95,50,54,0);
       let weatherK = 1.0;
       let megaphoneg = false;
       let taiwanN = 0.0;
       let grayn = 4.0;
      while (areaN.endsWith(`${grayn}`)) {
         grayn -= parseInt(`${taiwanN}`) >> (Math.min(4, Math.abs(1)));
         break;
      }
         megaphoneg = taiwanN >= 19.76 || areaN == String.fromCharCode(84,0);
         grayn += 3;
      if (1.6 <= (3.68 + weatherK)) {
          let statisticsp: Array<any> = [689, 590];
          let confirmationd = 4.0;
          let nativeexJ = 4.0;
         weatherK /= Math.max(4, parseFloat(`${parseInt(`${confirmationd}`)}`));
         statisticsp.push(3 << (Math.min(Math.abs(parseInt(`${nativeexJ}`)), 1)));
         confirmationd += parseFloat(`${parseInt(`${nativeexJ}`) % 3}`);
      }
       let configC = 4;
       let delegate_21 = 1;
      for (let b = 0; b < 1; b++) {
         weatherK *= parseFloat(`${configC / 2}`);
      }
      let incidentL = 4947886 <= configC;
      do {
         configC += configC;
         if (incidentL) {
            break;
         }
      } while (incidentL && (4.4 == (grayn * 5.26) || 1.88 == (grayn * 5.26)));
       let resendr: Map<any, any> = new Map([[String.fromCharCode(116,114,97,105,116,115,95,53,95,50,52,0),587], [String.fromCharCode(100,95,56,95,116,104,111,117,103,104,0),992], [String.fromCharCode(103,95,54,52,95,101,110,113,117,101,117,101,100,0),695]]);
      if (4 == areaN.length || !megaphoneg) {
          let iconQ = false;
          let privacy_: Map<any, any> = new Map([[String.fromCharCode(97,118,105,97,108,97,98,108,101,95,100,95,49,49,0),String.fromCharCode(108,111,110,103,110,111,105,115,101,95,97,95,54,0)], [String.fromCharCode(97,118,100,101,118,105,99,101,95,115,95,54,57,0),String.fromCharCode(100,95,52,51,95,115,116,97,108,101,0)]]);
          let stylesy: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,48,95,98,114,101,97,100,0),367], [String.fromCharCode(98,105,108,105,110,101,97,114,95,112,95,49,52,0),587], [String.fromCharCode(100,120,103,105,95,111,95,50,54,0),261]]);
          let bootsplashn: Array<any> = [508, 75];
          let ksadC: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,117,95,56,51,0),133], [String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,101,95,54,52,0),485]]);
         megaphoneg = !megaphoneg || 96.72 > weatherK;
         iconQ = stylesy.size > bootsplashn.length;
         privacy_.set(`${iconQ}`, bootsplashn.length % 3);
         stylesy = new Map([[`${privacy_.size}`, privacy_.size / 2]]);
         ksadC = new Map([[`${ksadC.size}`, 3]]);
      }
      let nativemoduler = 5819955.0 <= taiwanN;
      do {
         taiwanN /= Math.max(areaN.length ^ resendr.size, 3);
         if (nativemoduler) {
            break;
         }
      } while ((4 <= (parseInt(`${taiwanN}`) - delegate_21) || 4 <= (delegate_21 - parseInt(`${taiwanN}`))) && nativemoduler);
      while (1 >= (resendr.size - 3) && 3 >= (areaN.length - resendr.size)) {
         areaN += "3";
         break;
      }
      let fillh = areaN == String.fromCharCode(52,110,50,0);
      do {
          let defaultplayerimgn: Array<any> = [511, 999, 45];
          let jinit_f1 = String.fromCharCode(98,95,52,95,106,101,114,114,111,114,0);
          let ksad7 = 5;
         areaN = `${configC / (Math.max(resendr.size, 4))}`;
         defaultplayerimgn.push((jinit_f1 == String.fromCharCode(66,0) ? jinit_f1.length : ksad7));
         ksad7 >>= Math.min(4, Math.abs(ksad7));
         if (fillh) {
            break;
         }
      } while (fillh && (3.68 == weatherK));
         configC &= 2 >> (Math.min(Math.abs(parseInt(`${weatherK}`)), 2));
          let liveD: Array<any> = [String.fromCharCode(115,101,97,108,97,110,116,95,105,95,50,52,0), String.fromCharCode(115,104,97,114,105,110,103,95,49,95,51,50,0)];
          let codegen2 = 0.0;
         delegate_21 <<= Math.min(1, Math.abs(1 + parseInt(`${grayn}`)));
         liveD.push(liveD.length);
         codegen2 -= parseFloat(`${3 + parseInt(`${codegen2}`)}`);
      for (let c = 0; c < 2; c++) {
          let annerz: Array<any> = [700, 153, 360];
          let catagoryg = String.fromCharCode(100,112,110,97,109,101,95,112,95,54,53,0);
         megaphoneg = !megaphoneg;
         annerz = [catagoryg.length];
         catagoryg = `${catagoryg.length / 1}`;
      }
      select9 = (giftbuttonn.length << (Math.min(turndown9.length, 5))) == 54;
      break;
   }

    let url = "";

   for (let f = 0; f < 3; f++) {
      select9 = 42 <= promotionp.length;
   }
       let register_l0: Array<any> = [982, 159];
         register_l0 = [register_l0.length & 1];
         register_l0.push(register_l0.length);
      while (register_l0.length < 3) {
          let e_lockz = 5.0;
          let logouserJ = 2;
          let containery = String.fromCharCode(118,95,57,49,95,97,110,105,109,97,116,101,0);
          let popupI = 5;
         register_l0.push(containery.length);
         e_lockz *= parseFloat(`${3}`);
         logouserJ <<= Math.min(Math.abs(popupI * parseInt(`${e_lockz}`)), 5);
         containery += `${logouserJ}`;
         popupI -= 1;
         break;
      }
      updatesZ.push(floatinga.length << (Math.min(4, updatesZ.length)));
       let subsQ = String.fromCharCode(108,95,56,95,97,112,112,108,121,105,110,103,0);
       let libsgcoreP: Map<any, any> = new Map([[String.fromCharCode(114,98,115,112,95,101,95,57,57,0),336], [String.fromCharCode(104,101,120,98,121,116,101,95,100,95,56,49,0),591], [String.fromCharCode(98,95,48,95,114,101,97,100,108,110,0),427]]);
          let n_hashI: Array<any> = [229, 202];
          let libturbomodulejsijniM: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,116,111,114,95,118,95,54,52,0),103], [String.fromCharCode(99,104,101,99,107,115,117,109,115,95,108,95,57,48,0),391], [String.fromCharCode(110,111,110,95,55,95,48,0),411]]);
         subsQ += `${libturbomodulejsijniM.size}`;
         n_hashI.push(1);
         libturbomodulejsijniM = new Map([[`${n_hashI.length}`, n_hashI.length % (Math.max(n_hashI.length, 2))]]);
         subsQ = `${2 + libsgcoreP.size}`;
          let libavfilterV = 3;
          let securityK = 4.0;
          let about1 = false;
         subsQ = `${libavfilterV | 1}`;
         libavfilterV /= Math.max((parseInt(`${securityK}`) * (about1 ? 5 : 2)), 3);
         securityK += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${securityK}`)), 2))}`);
         about1 = !about1;
       let modelsM = String.fromCharCode(115,111,99,107,95,97,95,56,54,0);
       let dangerZ = String.fromCharCode(108,101,114,112,105,110,103,95,57,95,50,53,0);
         libsgcoreP = new Map([[dangerZ, 1 >> (Math.min(2, dangerZ.length))]]);
       let libreanimatedg = 1.0;
       let tooltipsB = 0.0;
      turndown9.push(updatesZ.length << (Math.min(giftbuttonn.length, 1)));
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
    

   let styles7 = promotionp.length >= 6515163;
   do {
      promotionp.push(brightnessg.size ^ 1);
      if (styles7) {
         break;
      }
   } while (styles7 && (transferj || 2 >= (promotionp.length ^ 5)));
       let awayteamfieldl = String.fromCharCode(104,95,51,51,95,111,114,100,101,114,0);
       let kuaishouO = 4.0;
      let countdownu = kuaishouO >= 9115649.0;
      do {
          let directx = 1.0;
         kuaishouO /= Math.max(3, parseFloat(`${parseInt(`${kuaishouO}`) | 2}`));
         directx -= 1;
         if (countdownu) {
            break;
         }
      } while (countdownu && (awayteamfieldl.length < 5));
         kuaishouO *= parseFloat(`${parseInt(`${kuaishouO}`)}`);
         kuaishouO *= parseFloat(`${1}`);
      while (1.88 <= (kuaishouO + parseFloat(`${awayteamfieldl.length}`))) {
          let logon = 5.0;
          let ying0 = 3.0;
         awayteamfieldl += `${3 % (Math.max(9, awayteamfieldl.length))}`;
         logon += parseFloat(`${parseInt(`${ying0}`) % (Math.max(10, parseInt(`${logon}`)))}`);
         ying0 -= parseFloat(`${parseInt(`${ying0}`) * 1}`);
         break;
      }
          let malaysiaU = true;
          let jingdongB: Array<any> = [127, 873];
         awayteamfieldl += "3";
         malaysiaU = jingdongB.includes(malaysiaU);
         jingdongB = [jingdongB.length];
       let scrollviewS = true;
      brightnessg.set(`${select9}`, (countryX.length / (Math.max(1, (select9 ? 1 : 2)))));
   while (brightnessg.get(`${countryX.length}`) == null) {
       let iconfeedbackK = 0.0;
       let helperY = 4.0;
       let privatechatbg0 = 2.0;
       let iconA = String.fromCharCode(100,101,112,108,111,121,109,101,110,116,95,50,95,51,48,0);
      while (5.14 > (iconA.length / (Math.max(4, privatechatbg0))) && 4.31 > (privatechatbg0 / 5.14)) {
         iconA = `${1 * parseInt(`${helperY}`)}`;
         break;
      }
       let loginB = 0;
       let sortG = 5.0;
       let assistf = 0.0;
      if (4.55 == (iconfeedbackK / 2.64)) {
         iconA += `${3 - parseInt(`${privatechatbg0}`)}`;
      }
      for (let v = 0; v < 1; v++) {
         iconfeedbackK -= 2 % (Math.max(5, parseInt(`${iconfeedbackK}`)));
      }
       let calendarA = 4;
      while ((privatechatbg0 - 5.95) >= 3.47) {
          let yellowvideolive0 = String.fromCharCode(97,95,54,52,95,102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,0);
          let libavutilr = String.fromCharCode(105,110,105,116,118,95,97,95,51,51,0);
          let sharedD = 5;
         iconA += `${loginB & parseInt(`${assistf}`)}`;
         yellowvideolive0 += "2";
         libavutilr += `${sharedD % 3}`;
         sharedD <<= Math.min(4, Math.abs(1));
         break;
      }
      let containerf = 5089304.0 <= assistf;
      do {
         assistf *= parseFloat(`${loginB & 1}`);
         if (containerf) {
            break;
         }
      } while ((2.38 >= assistf) && containerf);
      for (let x = 0; x < 1; x++) {
         assistf /= Math.max(parseFloat(`${parseInt(`${helperY}`)}`), 1);
      }
          let libfbjniT = 3.0;
          let u_hashw = 0.0;
          let episodes_: Array<any> = [188, 646];
         iconA = "1";
         libfbjniT *= parseInt(`${libfbjniT}`);
         u_hashw /= Math.max(parseInt(`${libfbjniT}`) | parseInt(`${u_hashw}`), 3);
         episodes_ = [parseInt(`${libfbjniT}`)];
         iconA = `${parseInt(`${sortG}`) % 1}`;
          let turnU = 4;
         iconfeedbackK += loginB | iconA.length;
         turnU ^= 2;
      countryX.push(iconA.length);
      break;
   }
    

      giftbuttonn.push(interstitialh.length & 1);
   let filedc = countryX.length <= 8712704;
   do {
       let episodesp = false;
       let sentryM = 5.0;
       let telemetry_ = String.fromCharCode(105,109,112,111,114,116,101,100,95,55,95,52,49,0);
       let other4 = 2.0;
      while (4.96 <= (1.45 + other4) || 5 <= (telemetry_.length + parseInt(`${other4}`))) {
         telemetry_ += `${parseInt(`${sentryM}`) & telemetry_.length}`;
         break;
      }
         telemetry_ += `${telemetry_.length + parseInt(`${other4}`)}`;
      for (let k = 0; k < 1; k++) {
         other4 /= Math.max(3, (parseInt(`${sentryM}`) >> (Math.min(5, Math.abs((episodesp ? 5 : 4))))));
      }
          let reducerx = String.fromCharCode(103,95,52,49,95,99,111,108,108,101,99,116,97,98,108,101,0);
          let zhubor: Array<any> = [254, 456];
          let redirectB: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,114,101,115,115,111,114,95,119,95,53,51,0),String.fromCharCode(112,95,51,51,95,114,101,110,101,119,0)], [String.fromCharCode(106,95,55,53,95,116,97,98,108,101,103,101,110,0),String.fromCharCode(101,99,109,117,108,116,95,97,95,54,52,0)]]);
         episodesp = telemetry_.startsWith(`${episodesp}`);
         reducerx += `${reducerx.length}`;
         zhubor = [redirectB.size];
         redirectB = new Map([[`${zhubor.length}`, reducerx.length & 1]]);
         sentryM *= 1 % (Math.max(3, telemetry_.length));
          let filedp = 1;
         other4 -= parseInt(`${sentryM}`);
         filedp >>= Math.min(Math.abs(filedp / (Math.max(2, 1))), 2);
          let videovarT = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,95,101,95,54,56,0);
          let dark1 = false;
          let profileG = String.fromCharCode(100,95,51,57,95,97,100,97,112,116,0);
         telemetry_ = `${((dark1 ? 5 : 1))}`;
         videovarT += `${videovarT.length}`;
         dark1 = (profileG.length / (Math.max(videovarT.length, 7))) < 15;
         profileG += `${2 * profileG.length}`;
      for (let j = 0; j < 2; j++) {
          let volume0 = String.fromCharCode(117,95,52,56,95,97,120,105,115,0);
          let bridgeJ = String.fromCharCode(109,97,120,95,99,95,52,50,0);
          let crownj = String.fromCharCode(99,114,99,116,97,98,108,101,95,114,95,57,53,0);
         sentryM *= (String.fromCharCode(55,0) == crownj ? telemetry_.length : crownj.length);
         volume0 += "3";
         bridgeJ += `${volume0.length + bridgeJ.length}`;
      }
      for (let l = 0; l < 2; l++) {
         telemetry_ = `${parseInt(`${other4}`)}`;
      }
      let libimagepipelineS = episodesp ? !episodesp : episodesp;
      do {
          let selecta = String.fromCharCode(101,95,55,49,95,112,111,115,116,112,111,110,101,0);
          let telemetryO = 0;
          let wind4 = String.fromCharCode(118,95,53,57,95,116,102,114,102,0);
          let langkeye = true;
          let mbsplash7 = 2;
         episodesp = selecta.length > telemetryO;
         selecta += `${(wind4 == String.fromCharCode(57,0) ? mbsplash7 : wind4.length)}`;
         telemetryO -= mbsplash7;
         langkeye = mbsplash7 <= 8;
         if (libimagepipelineS) {
            break;
         }
      } while (libimagepipelineS && (episodesp));
      for (let j = 0; j < 2; j++) {
         telemetry_ = `${(telemetry_.length - (episodesp ? 4 : 5))}`;
      }
          let profileinactiveH = String.fromCharCode(111,110,103,111,105,110,103,95,51,95,53,57,0);
          let penaltygoalN = 2;
         telemetry_ = "1";
         profileinactiveH = `${profileinactiveH.length * penaltygoalN}`;
         penaltygoalN &= (profileinactiveH == String.fromCharCode(101,0) ? penaltygoalN : profileinactiveH.length);
      countryX = [1 % (Math.max(6, countryX.length))];
      if (filedc) {
         break;
      }
   } while ((2 <= (interstitialh.length % (Math.max(1, countryX.length))) || (countryX.length % (Math.max(2, 3))) <= 2) && filedc);
   while ((giftbuttonn.length + 3) <= 4) {
       let default_uf: Map<any, any> = new Map([[String.fromCharCode(113,95,52,53,95,110,111,110,113,117,111,116,101,100,0),286], [String.fromCharCode(109,101,109,95,104,95,57,48,0),335], [String.fromCharCode(115,101,103,100,97,116,97,95,48,95,49,50,0),403]]);
       let bannerV = false;
       let questiconV = 4.0;
       let subsQy: Map<any, any> = new Map([[String.fromCharCode(104,97,108,102,100,95,49,95,54,49,0),497], [String.fromCharCode(114,101,116,114,121,95,54,95,51,51,0),96], [String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,49,95,56,54,0),867]]);
         default_uf.set(`${questiconV}`, 3 - parseInt(`${questiconV}`));
         bannerV = 59.6 < questiconV;
         bannerV = default_uf.get(`${questiconV}`) != null;
      let uimanagerz = bannerV ? !bannerV : bannerV;
      do {
         bannerV = null != default_uf.get(`${bannerV}`);
         if (uimanagerz) {
            break;
         }
      } while (uimanagerz && ((default_uf.size / (Math.max(1, 8))) > 4));
          let referrerM = 1.0;
         bannerV = 97 > default_uf.size;
         referrerM -= parseInt(`${referrerM}`);
      for (let r = 0; r < 2; r++) {
         questiconV /= Math.max(5, (parseFloat(`${(bannerV ? 1 : 1) % (Math.max(6, default_uf.size))}`)));
      }
      for (let o = 0; o < 2; o++) {
          let disconnectedlogo2 = 0.0;
          let nativek: Map<any, any> = new Map([[String.fromCharCode(102,108,97,115,104,115,118,95,118,95,53,0),92], [String.fromCharCode(118,112,100,97,116,97,95,111,95,55,0),865], [String.fromCharCode(115,97,100,98,95,107,95,53,57,0),319]]);
         subsQy = new Map([[`${nativek.size}`, nativek.size]]);
         disconnectedlogo2 += parseInt(`${disconnectedlogo2}`) >> (Math.min(3, Math.abs(parseInt(`${disconnectedlogo2}`))));
      }
         bannerV = default_uf.size > 2 && subsQy.size > 2;
      for (let b = 0; b < 1; b++) {
         bannerV = parseInt(`${questiconV}`) == subsQy.size;
      }
       let benefitY = String.fromCharCode(115,116,114,116,121,112,101,95,53,95,50,50,0);
          let release_9E = 0;
          let directa: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,115,95,112,95,56,53,0),914], [String.fromCharCode(106,95,53,49,95,102,108,97,103,0),718]]);
          let bggradientU = String.fromCharCode(97,118,105,97,108,97,98,108,101,95,109,95,57,52,0);
         subsQy.set(`${default_uf.size}`, 3);
         release_9E -= 2;
         directa = new Map([[`${directa.size}`, bggradientU.length]]);
         bggradientU += `${directa.size % (Math.max(bggradientU.length, 9))}`;
       let config4: Array<any> = [574, 31];
       let l_lockz: Array<any> = [254, 454, 338];
      giftbuttonn = [1];
      break;
   }
    

   let refreshF = updatesZ.length >= 9161103;
   do {
      updatesZ.push(2);
      if (refreshF) {
         break;
      }
   } while (refreshF && (!transferj));
      promotionp = [floatinga.length - 3];
       let volumee = 3.0;
       let sideK = String.fromCharCode(103,101,111,116,97,103,115,95,97,95,49,50,0);
       let gpayu = String.fromCharCode(110,95,50,56,95,110,111,116,105,102,105,99,97,116,111,110,115,0);
         sideK = `${gpayu.length + 2}`;
          let eact7 = String.fromCharCode(115,95,56,57,95,98,114,101,97,107,105,110,103,0);
          let templateprocessorb = String.fromCharCode(105,95,56,53,95,119,111,114,115,116,0);
         gpayu += `${sideK.length}`;
         eact7 += `${2 ^ templateprocessorb.length}`;
         templateprocessorb = `${(templateprocessorb == String.fromCharCode(88,0) ? templateprocessorb.length : eact7.length)}`;
      if (3.100 <= (volumee * 1.83) && (1.83 * volumee) <= 5.50) {
         sideK += `${(gpayu == String.fromCharCode(109,0) ? gpayu.length : sideK.length)}`;
      }
      for (let j = 0; j < 2; j++) {
         gpayu = "2";
      }
      if (!gpayu.includes(sideK)) {
         sideK += `${parseInt(`${volumee}`)}`;
      }
         sideK += `${parseInt(`${volumee}`)}`;
       let rankq: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,101,110,100,95,118,95,55,56,0),String.fromCharCode(122,95,54,51,95,100,101,109,117,120,101,114,0)], [String.fromCharCode(108,105,102,101,99,121,99,108,101,95,97,95,49,55,0),String.fromCharCode(114,95,51,51,95,99,111,109,112,105,108,101,0)]]);
       let classesx: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,108,95,52,52,0),65], [String.fromCharCode(110,95,50,57,95,112,97,99,107,101,116,111,117,116,0),880], [String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,51,95,54,50,0),496]]);
      if ((2 + gpayu.length) < 1) {
          let time_3bl = String.fromCharCode(120,95,55,53,95,101,111,99,100,0);
          let android9 = false;
          let becomeY = 5.0;
          let overQ: Array<any> = [251, 442, 380];
         classesx = new Map([[sideK, 1 & time_3bl.length]]);
         time_3bl += `${(1 % (Math.max(2, (android9 ? 4 : 2))))}`;
         android9 = becomeY >= 9.60 && android9;
         becomeY += parseFloat(`${1}`);
         overQ.push(3);
      }
       let teamdetailsbgE = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,104,95,53,48,0);
       let libpangleflippedW = String.fromCharCode(109,95,57,48,95,99,111,110,110,101,99,116,115,0);
      countryX = [2 ^ promotionp.length];
    

       let libreactnativejni4 = String.fromCharCode(106,111,105,110,105,110,103,95,50,95,54,50,0);
      for (let w = 0; w < 1; w++) {
         libreactnativejni4 += `${libreactnativejni4.length / (Math.max(7, libreactnativejni4.length))}`;
      }
          let arrowright8 = String.fromCharCode(122,95,55,95,117,110,98,111,120,0);
          let down1 = 5;
          let giflivestreamingZ = true;
         libreactnativejni4 = "1";
         arrowright8 = `${(arrowright8 == String.fromCharCode(79,0) ? arrowright8.length : down1)}`;
         down1 &= down1 / (Math.max(10, arrowright8.length));
         giflivestreamingZ = 2 <= down1;
          let incident3 = String.fromCharCode(98,95,50,54,95,117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
          let adultn: Array<any> = [455, 447, 43];
          let abidetectC = String.fromCharCode(109,110,101,109,111,110,105,99,95,117,95,56,56,0);
         libreactnativejni4 = `${libreactnativejni4.length}`;
         incident3 += `${abidetectC.length ^ 2}`;
         adultn = [2 * abidetectC.length];
      brightnessg.set(`${select9}`, 2);
   while (3 <= (giftbuttonn.length + 4) || 4 <= giftbuttonn.length) {
       let mappingl = String.fromCharCode(106,95,53,52,95,110,111,114,109,97,108,105,122,101,0);
       let sina9: Map<any, any> = new Map([[String.fromCharCode(101,95,55,51,95,115,116,97,114,116,99,111,100,101,0),897], [String.fromCharCode(118,95,50,49,95,99,99,111,117,110,116,0),322]]);
       let logouserw = String.fromCharCode(97,95,52,55,95,99,111,109,112,101,110,115,97,116,101,100,0);
       let runtimeschedulere: Array<any> = [370, 696];
       let fileb = 0;
          let settinga = true;
          let mbsplashr = 4.0;
         logouserw = `${parseInt(`${mbsplashr}`) % (Math.max(7, logouserw.length))}`;
         settinga = !settinga;
         mbsplashr += ((settinga ? 5 : 1) << (Math.min(Math.abs((settinga ? 2 : 4)), 3)));
      while (3 >= (3 & runtimeschedulere.length)) {
          let profileframe4 = 3.0;
          let backgroundd = 5;
         runtimeschedulere.push(parseInt(`${profileframe4}`));
         profileframe4 -= 3 << (Math.min(3, Math.abs(backgroundd)));
         backgroundd >>= Math.min(Math.abs(backgroundd), 2);
         break;
      }
       let inouttargetrede = String.fromCharCode(102,97,99,101,95,111,95,49,50,0);
      if (5 < (inouttargetrede.length / (Math.max(6, fileb))) && (fileb / (Math.max(inouttargetrede.length, 2))) < 5) {
         inouttargetrede = `${logouserw.length}`;
      }
         fileb |= sina9.size << (Math.min(logouserw.length, 4));
         runtimeschedulere.push((String.fromCharCode(82,0) == logouserw ? logouserw.length : sina9.size));
      for (let g = 0; g < 2; g++) {
         mappingl = `${3 ^ logouserw.length}`;
      }
         fileb |= 3 * logouserw.length;
          let ying1: Map<any, any> = new Map([[String.fromCharCode(109,95,49,57,95,114,101,102,108,0),838], [String.fromCharCode(112,95,51,48,95,103,101,110,101,114,97,103,101,0),212]]);
          let cornerk = 1.0;
         logouserw = "3";
         ying1.set(`${cornerk}`, parseInt(`${cornerk}`) & 3);
       let libjsiM: Array<any> = [199, 671];
       let analyticsW: Array<any> = [844, 135, 46];
      if (5 < mappingl.length && logouserw == String.fromCharCode(118,0)) {
         mappingl = `${sina9.size << (Math.min(Math.abs(2), 1))}`;
      }
      for (let g = 0; g < 3; g++) {
         mappingl = `${analyticsW.length * 1}`;
      }
       let showX = String.fromCharCode(108,95,53,48,95,115,116,114,105,100,101,98,0);
         showX += `${fileb * runtimeschedulere.length}`;
      while (mappingl.length >= libjsiM.length) {
          let darko = String.fromCharCode(111,95,54,95,114,101,118,111,107,101,0);
          let gray6 = 0.0;
          let nativeex0 = true;
          let nbatrophy_ = 2;
          let chinasamem = 1.0;
         libjsiM.push(2 ^ fileb);
         darko = `${parseInt(`${chinasamem}`) - 1}`;
         gray6 /= Math.max(5, (parseFloat(`${(nativeex0 ? 3 : 1) & parseInt(`${chinasamem}`)}`)));
         nativeex0 = 2.60 == gray6;
         nbatrophy_ |= darko.length;
         break;
      }
      giftbuttonn = [fileb + brightnessg.size];
      break;
   }
   while (updatesZ.length == 5) {
      updatesZ.push(interstitialh.length);
      break;
   }
    

   while (!select9) {
       let play4: Map<any, any> = new Map([[String.fromCharCode(113,112,101,108,100,115,112,95,103,95,53,51,0),217], [String.fromCharCode(118,95,52,51,95,100,105,115,97,112,112,101,97,114,0),574]]);
       let privacyC = String.fromCharCode(102,95,51,49,95,115,111,117,110,0);
       let plusD = 4;
       let downarrow8 = String.fromCharCode(121,95,56,50,95,105,112,109,111,118,105,101,0);
      for (let z = 0; z < 3; z++) {
         plusD %= Math.max(4, plusD);
      }
      if (privacyC.includes(`${plusD}`)) {
         privacyC += `${privacyC.length}`;
      }
         privacyC = `${2 * privacyC.length}`;
      if (1 >= plusD) {
          let cross9 = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,95,120,95,50,56,0);
          let appleh = 3.0;
         downarrow8 = `${cross9.length % (Math.max(9, parseInt(`${appleh}`)))}`;
      }
      let libswscaleC = plusD >= 5635507;
      do {
          let page3: Array<any> = [469, 151];
         plusD /= Math.max(1, (String.fromCharCode(99,0) == downarrow8 ? play4.size : downarrow8.length));
         page3.push(2);
         if (libswscaleC) {
            break;
         }
      } while (((plusD ^ 4) > 2) && libswscaleC);
         privacyC = `${1 + play4.size}`;
      while (4 >= (downarrow8.length - 2) || 5 >= (2 - play4.size)) {
          let filedF = 0.0;
          let reactnavigationE = false;
         downarrow8 += `${1 - parseInt(`${filedF}`)}`;
         filedF /= Math.max(((reactnavigationE ? 1 : 1)), 1);
         break;
      }
         privacyC = `${(downarrow8 == String.fromCharCode(85,0) ? downarrow8.length : plusD)}`;
      while ((plusD | 5) <= 1 && (plusD | 5) <= 2) {
         plusD /= Math.max((downarrow8 == String.fromCharCode(86,0) ? downarrow8.length : plusD), 4);
         break;
      }
       let weiboW: Map<any, any> = new Map([[String.fromCharCode(118,95,51,51,95,97,118,102,114,97,109,101,0),String.fromCharCode(114,95,57,95,112,111,115,115,105,98,108,101,0)], [String.fromCharCode(108,95,51,95,98,108,111,99,107,100,115,112,0),String.fromCharCode(121,95,56,51,95,97,105,110,116,105,110,103,0)]]);
         weiboW = new Map([[`${play4.size}`, (downarrow8 == String.fromCharCode(113,0) ? play4.size : downarrow8.length)]]);
         privacyC = `${2 ^ privacyC.length}`;
      select9 = brightnessg.size >= giftbuttonn.length;
      break;
   }
   for (let o = 0; o < 2; o++) {
      giftbuttonn.push(floatinga.length);
   }
   if (1 < interstitialh.length) {
      interstitialh.push(promotionp.length);
   }
    

   let sentryMI = select9 ? !select9 : select9;
   do {
      select9 = (interstitialh.length - turndown9.length) == 41;
      if (sentryMI) {
         break;
      }
   } while (sentryMI && (select9));
      floatinga.push(2);
      giftbuttonn = [1];
    

   if (brightnessg.get(`${turndown9.length}`) == null) {
      turndown9 = [2 >> (Math.min(5, interstitialh.length))];
   }
      brightnessg.set(`${promotionp.length}`, promotionp.length);
   if (2 > floatinga.length) {
      updatesZ.push(3);
   }
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
       let analyticsr = String.fromCharCode(112,105,99,116,111,114,95,118,95,57,55,0);
    let profile3: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,48,95,114,101,115,105,103,110,115,0),false ], [String.fromCharCode(112,95,51,49,95,101,120,116,115,107,0),true ], [String.fromCharCode(109,95,49,55,95,100,98,108,105,110,116,0),false ]]);
    let darkn = true;
    let fastj = false;
    let iconsubssuccess1 = 0.0;
    let libimagepipelinel = String.fromCharCode(108,95,52,95,112,104,121,115,105,99,97,108,0);
    let carouselg = String.fromCharCode(98,95,54,57,95,100,111,110,97,116,101,0);
    let iconbackwhitey: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,99,107,95,110,95,57,51,0),String.fromCharCode(110,105,99,101,95,51,95,49,54,0)], [String.fromCharCode(97,95,54,54,95,109,97,116,104,101,115,0),String.fromCharCode(104,95,55,50,95,112,111,108,108,115,0)], [String.fromCharCode(115,104,111,119,95,122,95,51,48,0),String.fromCharCode(103,95,57,51,95,104,117,102,102,109,97,110,0)]]);
    let goalX = 1.0;
   let philippines5 = analyticsr == String.fromCharCode(99,119,120,97,101,0);
   do {
      analyticsr += `${(carouselg == String.fromCharCode(75,0) ? libimagepipelinel.length : carouselg.length)}`;
      if (philippines5) {
         break;
      }
   } while (philippines5 && (analyticsr.length > libimagepipelinel.length));

    const data = (await wwShirtPhilippines.call(url, {}, "GET")).data;

   for (let k = 0; k < 2; k++) {
      carouselg += `${1 & profile3.size}`;
   }

    if (data !== undefined) {

   for (let s = 0; s < 3; s++) {
      analyticsr += "1";
   }
      const dates = Object.keys(data);

       let redgoalE: Array<any> = [336, 159];
       let imagesc = false;
       let canvasX = String.fromCharCode(120,95,51,50,95,100,116,115,0);
      if (canvasX.includes(`${redgoalE.length}`)) {
         canvasX += "3";
      }
          let window_rqr = String.fromCharCode(101,95,56,56,95,112,99,109,119,98,0);
          let injuryI: Array<any> = [63, 99];
         canvasX += `${(String.fromCharCode(119,0) == canvasX ? redgoalE.length : canvasX.length)}`;
         window_rqr += `${injuryI.length}`;
         injuryI.push(injuryI.length % (Math.max(window_rqr.length, 4)));
      for (let k = 0; k < 3; k++) {
          let recommendationj = String.fromCharCode(118,115,102,114,97,109,101,95,122,95,54,55,0);
         redgoalE = [((imagesc ? 2 : 5) & 1)];
         recommendationj += `${recommendationj.length % (Math.max(3, 7))}`;
      }
         redgoalE = [((imagesc ? 1 : 4) | canvasX.length)];
         imagesc = (canvasX.length - redgoalE.length) == 59;
      libimagepipelinel += `${2 + libimagepipelinel.length}`;
      let lst: wwSpinnerInouttargetred[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

       let middlewareM = String.fromCharCode(97,110,97,108,121,122,101,95,51,95,57,50,0);
       let regengu = 1.0;
      if ((regengu * 4.58) < 3.93 && (middlewareM.length * 4) < 3) {
         regengu -= middlewareM.length + parseInt(`${regengu}`);
      }
      while ((regengu - 2.13) <= 1.58 || (parseInt(`${regengu}`) - middlewareM.length) <= 1) {
         middlewareM += "3";
         break;
      }
         regengu *= 2 & parseInt(`${regengu}`);
       let layoutI: Array<any> = [316, 684, 110];
      if ((5 & middlewareM.length) < 1) {
          let dependenciesu = false;
          let materialE: Array<any> = [String.fromCharCode(112,95,55,51,95,99,111,108,115,0), String.fromCharCode(116,95,54,49,95,115,107,105,110,0), String.fromCharCode(97,114,99,104,105,118,105,110,103,95,115,95,50,55,0)];
          let interstitialq: Array<any> = [831, 344];
          let grayS = true;
         regengu -= ((grayS ? 3 : 1) / (Math.max(parseInt(`${regengu}`), 6)));
         dependenciesu = materialE.length >= 33 && interstitialq.length >= 33;
         materialE = [((dependenciesu ? 3 : 5) & 2)];
         interstitialq.push(materialE.length / (Math.max(8, interstitialq.length)));
         grayS = (66 > ((dependenciesu ? interstitialq.length : 66) & interstitialq.length));
      }
         middlewareM = `${parseInt(`${regengu}`)}`;
      iconsubssuccess1 -= (libimagepipelinel == String.fromCharCode(103,0) ? libimagepipelinel.length : (darkn ? 2 : 2));
      if (latestListDate.current === undefined) {

   while (libimagepipelinel.endsWith(`${darkn}`)) {
       let modeld = String.fromCharCode(99,97,116,101,103,111,114,121,95,102,95,49,52,0);
       let containerj = String.fromCharCode(106,95,50,54,95,99,111,115,113,105,0);
       let championu = 4;
       let webviewh: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,101,95,50,95,55,56,0),String.fromCharCode(107,95,53,95,114,101,115,101,114,118,101,0)], [String.fromCharCode(100,120,110,100,99,95,53,95,49,52,0),String.fromCharCode(108,95,50,48,95,99,108,105,99,107,0)], [String.fromCharCode(102,95,50,56,95,118,97,114,108,101,110,0),String.fromCharCode(109,95,50,57,95,100,105,118,105,100,101,100,0)]]);
       let pathb: Map<any, any> = new Map([[String.fromCharCode(108,95,55,95,101,116,104,101,114,110,101,116,0),356], [String.fromCharCode(115,95,50,54,95,105,115,112,111,114,116,0),723]]);
         webviewh = new Map([[containerj, 1]]);
      let tempI = 7142139 >= modeld.length;
      do {
         modeld = `${webviewh.size * 1}`;
         if (tempI) {
            break;
         }
      } while ((championu == 1) && tempI);
          let incidentJ: Map<any, any> = new Map([[String.fromCharCode(116,95,57,51,95,109,101,115,115,97,103,105,110,103,0),false ], [String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,48,95,52,55,0),false ], [String.fromCharCode(105,110,118,105,116,101,114,95,112,95,49,56,0),false ]]);
         webviewh = new Map([[containerj, championu]]);
         incidentJ = new Map([[`${incidentJ.size}`, incidentJ.size << (Math.min(Math.abs(incidentJ.size), 1))]]);
      if (3 >= (pathb.size ^ webviewh.size) || 5 >= (pathb.size ^ 3)) {
         webviewh = new Map([[`${webviewh.size}`, championu * 3]]);
      }
      let imagesY = 9854493 >= modeld.length;
      do {
         modeld = `${1 >> (Math.min(2, Math.abs(webviewh.size)))}`;
         if (imagesY) {
            break;
         }
      } while (imagesY && ((modeld.length * 5) >= 3 || 2 >= (5 * modeld.length)));
      let humidity2 = 6102479 >= pathb.size;
      do {
         pathb.set(`${championu}`, containerj.length);
         if (humidity2) {
            break;
         }
      } while ((pathb.get(`${championu}`) != null) && humidity2);
      while (4 == (webviewh.size / (Math.max(2, 7))) || (webviewh.size / (Math.max(2, 2))) == 2) {
         webviewh = new Map([[`${webviewh.size}`, webviewh.size]]);
         break;
      }
         webviewh = new Map([[`${pathb.size}`, 2]]);
       let internetD = 1.0;
       let episodesf = 3.0;
      if (internetD == championu) {
          let backiconX = 0.0;
          let indicatorW = String.fromCharCode(97,95,53,52,95,100,101,115,99,114,105,112,116,105,111,110,115,0);
         internetD -= (modeld == String.fromCharCode(118,0) ? modeld.length : parseInt(`${episodesf}`));
         backiconX *= indicatorW.length / 1;
         indicatorW = `${indicatorW.length | 1}`;
      }
      if ((championu | webviewh.size) == 5) {
         championu <<= Math.min(Math.abs(parseInt(`${episodesf}`)), 2);
      }
      let minimize0 = 7754596.0 >= internetD;
      do {
         internetD *= 3;
         if (minimize0) {
            break;
         }
      } while (minimize0 && (!containerj.startsWith(`${internetD}`)));
         containerj = `${championu}`;
      for (let a = 0; a < 3; a++) {
         webviewh = new Map([[`${webviewh.size}`, containerj.length]]);
      }
          let window_ish = 2;
          let foregroundR: Array<any> = [350, 688];
          let skipM = 5.0;
         pathb.set(`${skipM}`, 1 & parseInt(`${skipM}`));
         window_ish %= Math.max(5, window_ish);
         foregroundR.push(3);
      libimagepipelinel = `${(String.fromCharCode(113,0) == modeld ? (darkn ? 1 : 2) : modeld.length)}`;
      break;
   }
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

   for (let g = 0; g < 1; g++) {
       let znewinterstitial7: Map<any, any> = new Map([[String.fromCharCode(112,105,120,99,116,120,95,114,95,56,55,0),561], [String.fromCharCode(107,95,54,52,95,99,111,100,101,115,116,114,101,97,109,0),900]]);
       let frame_vU = 0.0;
       let headerr = String.fromCharCode(118,97,110,99,95,112,95,49,0);
       let ewardedf = 1.0;
          let imagesI = String.fromCharCode(103,95,57,53,95,99,111,112,121,105,110,105,111,118,0);
          let iconuserg: Array<any> = [736, 252, 791];
         frame_vU *= parseFloat(`${znewinterstitial7.size << (Math.min(2, Math.abs(parseInt(`${ewardedf}`))))}`);
         imagesI += `${imagesI.length}`;
         iconuserg = [2];
         headerr = `${parseInt(`${ewardedf}`) / (Math.max(5, znewinterstitial7.size))}`;
      while (parseInt(`${ewardedf}`) < headerr.length) {
         headerr = `${parseInt(`${frame_vU}`) / (Math.max(5, znewinterstitial7.size))}`;
         break;
      }
      while (frame_vU >= 5.13) {
         frame_vU /= Math.max(2, parseFloat(`${parseInt(`${frame_vU}`)}`));
         break;
      }
       let fileQ = true;
       let final_7pi = true;
       let mutedL: Array<any> = [String.fromCharCode(100,101,108,101,116,105,110,103,95,111,95,57,49,0), String.fromCharCode(105,110,112,117,116,95,114,95,53,53,0)];
       let matchactivet: Array<any> = [String.fromCharCode(108,95,52,54,95,105,110,99,114,101,97,115,101,0), String.fromCharCode(99,95,52,54,95,109,115,103,115,109,100,101,99,0)];
      while (3 >= headerr.length) {
          let arrowd = 0.0;
          let calendar5 = String.fromCharCode(104,95,54,54,95,115,109,105,108,105,110,103,0);
         frame_vU -= parseFloat(`${1}`);
         arrowd /= Math.max(3, (parseFloat(`${calendar5 == String.fromCharCode(95,0) ? parseInt(`${arrowd}`) : calendar5.length}`)));
         break;
      }
         final_7pi = !fileQ || matchactivet.length >= 100;
      analyticsr = `${libimagepipelinel.length * parseInt(`${frame_vU}`)}`;
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000
        );
      } else {

   let show_ = iconbackwhitey.size <= 9406744;
   do {
       let becomem = 2;
      for (let f = 0; f < 2; f++) {
         becomem /= Math.max(3 / (Math.max(3, becomem)), 3);
      }
         becomem -= 1 ^ becomem;
         becomem >>= Math.min(4, Math.abs(becomem));
      iconbackwhitey = new Map([[analyticsr, analyticsr.length + 2]]);
      if (show_) {
         break;
      }
   } while (((goalX / (Math.max(parseFloat(`${iconbackwhitey.size}`), 4))) == 2.24) && show_);
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000
        );
      }
      for (const date of dates) {

   while (!darkn && (goalX / (Math.max(1.6, 9))) == 2.33) {
      darkn = (82 <= ((darkn ? 82 : analyticsr.length) * analyticsr.length));
      break;
   }
        const dateDate = new Date(date);

      profile3 = new Map([[`${iconsubssuccess1}`, 1 * parseInt(`${iconsubssuccess1}`)]]);
        const now = new Date();

   for (let w = 0; w < 1; w++) {
      darkn = fastj;
   }
        const sevenDaysBefore = new Date(
          now.valueOf() - 7 * 24 * 60 * 60 * 1000
        );

   for (let l = 0; l < 2; l++) {
      iconsubssuccess1 -= carouselg.length;
   }
        const sevenDaysAfter = new Date(
          now.valueOf() + 7 * 24 * 60 * 60 * 1000
        );

   if ((5.29 + iconsubssuccess1) < 2.18) {
       let nativeA = 0.0;
       let downarrowO = 1;
      while (5 >= downarrowO) {
          let dycreator1: Array<any> = [String.fromCharCode(103,114,97,98,98,101,114,95,103,95,57,53,0), String.fromCharCode(115,101,116,116,101,114,95,55,95,57,50,0)];
         downarrowO %= Math.max(3, downarrowO);
         dycreator1.push(dycreator1.length);
         break;
      }
      for (let t = 0; t < 1; t++) {
         nativeA /= Math.max(downarrowO - parseInt(`${nativeA}`), 5);
      }
      if (2 < (5 * downarrowO) || (nativeA + downarrowO) < 1.72) {
         downarrowO += 3 | downarrowO;
      }
      for (let j = 0; j < 2; j++) {
         nativeA += 3;
      }
         downarrowO |= 1 % (Math.max(parseInt(`${nativeA}`), 1));
      while (4 >= (downarrowO & 3) || 5 >= (downarrowO ^ 3)) {
         nativeA /= Math.max(downarrowO, 1);
         break;
      }
      iconsubssuccess1 += ((darkn ? 3 : 4));
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue;

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

      fastj = !carouselg.includes(`${iconsubssuccess1}`);
        count += 1;
        data[date].forEach((element: wwInfo) => {
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
       let faviconQ: Array<any> = [228, 547, 432];
    let pushT = String.fromCharCode(105,110,105,118,105,116,101,100,95,100,95,51,54,0);
    let componentsK = String.fromCharCode(112,95,49,48,48,95,115,112,101,99,116,114,97,0);
    let huawei4 = 5.0;
    let shrink5 = 2.0;
    let dropdownT = 2;
    let dependenciesc = String.fromCharCode(104,95,49,48,48,95,116,103,115,0);
    let incidentx = String.fromCharCode(115,116,105,99,107,101,114,95,56,95,54,49,0);
    let private_c1w = 5;
    let resenda = String.fromCharCode(112,95,56,54,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0);
    let reactnativeultimatelistviewl = 0;
    let livee = String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,95,97,95,53,52,0);
    let megaphone6 = 2;
    let release_eyk = String.fromCharCode(105,110,99,108,117,100,105,110,103,95,55,95,55,48,0);
    let renewT: Array<any> = [744, 99];
   let strA = huawei4 >= 5805637.0;
   do {
      huawei4 /= Math.max(2, faviconQ.length);
      if (strA) {
         break;
      }
   } while (strA && (!resenda.startsWith(`${huawei4}`)));
   for (let r = 0; r < 3; r++) {
      dropdownT += resenda.length - 1;
   }
      resenda += `${incidentx.length / 3}`;
      private_c1w ^= 3 + dependenciesc.length;

    const bannerRes = await wwLivenodatabgimg.getBannerAd(110);

      componentsK += `${parseInt(`${shrink5}`) % (Math.max(2, parseInt(`${huawei4}`)))}`;
   for (let f = 0; f < 1; f++) {
      componentsK += `${pushT.length >> (Math.min(Math.abs(1), 5))}`;
   }
   for (let c = 0; c < 1; c++) {
      pushT += `${pushT.length * 3}`;
   }
       let sportsV = String.fromCharCode(103,97,105,110,99,95,118,95,51,55,0);
       let inviteP = 1;
       let materiall = String.fromCharCode(112,95,56,52,95,118,99,111,100,101,99,0);
      let firebaseF = 9885592 <= inviteP;
      do {
         inviteP >>= Math.min(3, Math.abs(1 - sportsV.length));
         if (firebaseF) {
            break;
         }
      } while (((sportsV.length / 5) > 3) && firebaseF);
      for (let k = 0; k < 2; k++) {
         materiall += "2";
      }
         inviteP &= 1;
      let attributedstringT = String.fromCharCode(53,116,49,54,115,0) == sportsV;
      do {
         sportsV = `${1 - inviteP}`;
         if (attributedstringT) {
            break;
         }
      } while (((4 ^ inviteP) == 1) && attributedstringT);
       let albumI = 2.0;
       let predictionarrowf = 5.0;
         materiall = `${materiall.length >> (Math.min(4, Math.abs(parseInt(`${predictionarrowf}`))))}`;
          let pangleU = false;
         inviteP /= Math.max(3, inviteP % 1);
         pangleU = !pangleU;
       let darkF: Array<any> = [757, 235, 121];
       let episodes4: Array<any> = [95, 864];
      if ((5.95 - predictionarrowf) < 2.92) {
         predictionarrowf *= parseFloat(`${sportsV.length}`);
      }
      componentsK = "1";
    const banner = bannerRes.ads;

   for (let f = 0; f < 1; f++) {
      componentsK = `${private_c1w + 1}`;
   }
   while (dropdownT <= shrink5) {
      dropdownT <<= Math.min(Math.abs((String.fromCharCode(71,0) == dependenciesc ? private_c1w : dependenciesc.length)), 1);
      break;
   }
   while (!incidentx.startsWith(`${dependenciesc.length}`)) {
       let m_imageF = 1;
       let crown9 = 0.0;
       let libtanE = String.fromCharCode(101,95,50,49,95,99,109,97,112,0);
       let skip8 = 4;
       let humidityA = 3.0;
      for (let o = 0; o < 1; o++) {
         libtanE = `${skip8 >> (Math.min(libtanE.length, 1))}`;
      }
      for (let h = 0; h < 2; h++) {
          let regengR: Array<any> = [600, 596];
          let foregrounds = String.fromCharCode(103,95,51,49,95,112,111,108,121,109,101,115,104,0);
          let penaltygoalF = String.fromCharCode(116,102,114,102,95,113,95,53,54,0);
         m_imageF &= 1 & penaltygoalF.length;
         regengR.push(foregrounds.length * 2);
         foregrounds = `${regengR.length * 3}`;
         penaltygoalF += `${regengR.length >> (Math.min(Math.abs(3), 5))}`;
      }
      while (skip8 < m_imageF) {
          let mbsplash7: Map<any, any> = new Map([[String.fromCharCode(111,95,51,52,95,102,105,108,101,115,0),String.fromCharCode(107,109,118,99,95,112,95,49,51,0)], [String.fromCharCode(109,95,55,54,95,105,110,116,101,114,110,101,116,0),String.fromCharCode(99,97,115,99,97,100,101,100,95,99,95,50,0)]]);
          let hookso: Map<any, any> = new Map([[String.fromCharCode(104,97,108,108,95,110,95,55,48,0),790], [String.fromCharCode(113,95,50,56,95,110,97,109,101,116,111,105,110,100,101,120,0),50]]);
          let robotoM = String.fromCharCode(106,95,49,50,95,108,111,119,112,97,115,115,0);
          let overlaye: Array<any> = [String.fromCharCode(99,111,110,116,97,105,110,101,100,95,121,95,56,49,0), String.fromCharCode(100,95,53,49,95,104,97,110,103,117,112,0)];
         skip8 &= skip8;
         mbsplash7 = new Map([[`${mbsplash7.size}`, 3]]);
         hookso = new Map([[`${hookso.size}`, overlaye.length]]);
         robotoM += "3";
         overlaye.push(hookso.size ^ 1);
         break;
      }
         m_imageF >>= Math.min(2, Math.abs(skip8 * 1));
         crown9 += skip8;
         m_imageF &= libtanE.length + skip8;
          let weiboX: Array<any> = [165, 428, 327];
          let directR = String.fromCharCode(122,97,108,108,111,99,95,107,95,50,48,0);
         skip8 /= Math.max(5, libtanE.length % (Math.max(3, 6)));
         weiboX.push(weiboX.length / 3);
         directR = `${(String.fromCharCode(115,0) == directR ? weiboX.length : directR.length)}`;
      if (5.28 > (humidityA + 1.73)) {
          let catagory7 = 3.0;
          let libyogaD = 0.0;
          let acceptedK = String.fromCharCode(97,99,108,114,95,53,95,55,52,0);
          let apple1 = String.fromCharCode(97,95,54,51,95,109,101,109,97,108,105,103,110,0);
         humidityA += parseFloat(`${acceptedK.length}`);
         catagory7 += parseFloat(`${apple1.length << (Math.min(Math.abs(1), 2))}`);
         libyogaD /= Math.max(1, parseInt(`${libyogaD}`));
         acceptedK = `${parseInt(`${catagory7}`) + parseInt(`${libyogaD}`)}`;
         apple1 += `${apple1.length}`;
      }
      if (2 == (3 << (Math.min(4, Math.abs(skip8))))) {
          let progressX: Map<any, any> = new Map([[String.fromCharCode(115,117,115,112,101,110,100,101,100,95,121,95,53,55,0),371], [String.fromCharCode(97,95,55,57,95,119,97,108,108,112,97,112,101,114,115,0),582]]);
          let uimanagerw = 3.0;
          let upgradeb: Array<any> = [372, 411, 154];
          let albumo = String.fromCharCode(105,110,100,101,120,101,115,95,121,95,51,48,0);
          let splasht: Array<any> = [634, 709];
         skip8 >>= Math.min(3, Math.abs(parseInt(`${uimanagerw}`) / (Math.max(parseInt(`${crown9}`), 3))));
         progressX = new Map([[`${progressX.size}`, 3 * upgradeb.length]]);
         uimanagerw *= splasht.length / 2;
         upgradeb = [1 >> (Math.min(4, albumo.length))];
         albumo += `${progressX.size << (Math.min(albumo.length, 3))}`;
         splasht = [progressX.size];
      }
      for (let y = 0; y < 2; y++) {
         m_imageF ^= m_imageF | libtanE.length;
      }
      for (let n = 0; n < 2; n++) {
         libtanE += `${skip8}`;
      }
         libtanE = `${libtanE.length | 2}`;
      for (let t = 0; t < 3; t++) {
         humidityA += (parseFloat(`${libtanE == String.fromCharCode(113,0) ? libtanE.length : parseInt(`${crown9}`)}`));
      }
      while (humidityA < 1.13) {
         m_imageF <<= Math.min(5, Math.abs(skip8));
         break;
      }
      if ((skip8 * parseInt(`${crown9}`)) > 2 && (crown9 * 2.61) > 2.70) {
         crown9 -= skip8;
      }
      dependenciesc = "2";
      break;
   }
   if ((2 + pushT.length) < 5 && (faviconQ.length + 2) < 2) {
      faviconQ.push(2);
   }
    const bannerList = bannerRes.ads_list;

   for (let y = 0; y < 1; y++) {
       let appsF = 2;
       let qaagJ = 3.0;
          let neon1 = String.fromCharCode(100,95,55,48,95,118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,0);
          let launcherd: Map<any, any> = new Map([[String.fromCharCode(115,97,109,101,113,95,108,95,50,50,0),881], [String.fromCharCode(106,95,55,52,95,102,108,97,116,110,101,115,115,0),835], [String.fromCharCode(100,105,102,102,115,95,110,95,54,53,0),398]]);
          let hoverY = true;
         qaagJ /= Math.max(neon1.length, 2);
         neon1 = "1";
         launcherd = new Map([[`${launcherd.size}`, launcherd.size / (Math.max(2, 3))]]);
         appsF <<= Math.min(2, Math.abs(appsF));
       let countdownk = 4.0;
          let defaultroombgZ = true;
          let volumec: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,101,114,115,95,117,95,52,57,0),325], [String.fromCharCode(113,95,53,53,95,100,121,110,108,105,110,107,0),867]]);
          let detailsF: Array<any> = [240, 798, 59];
         qaagJ -= detailsF.length;
         defaultroombgZ = null == volumec.get(`${defaultroombgZ}`);
         volumec = new Map([[`${volumec.size}`, 2]]);
         detailsF = [((defaultroombgZ ? 5 : 2) % (Math.max(volumec.size, 1)))];
      if ((appsF / (Math.max(qaagJ, 10))) >= 3.83 || 3 >= (appsF / (Math.max(1, parseInt(`${qaagJ}`))))) {
         qaagJ -= 2;
      }
         countdownk += parseFloat(`${parseInt(`${countdownk}`) / 1}`);
      private_c1w |= appsF;
   }
   for (let m = 0; m < 2; m++) {
       let libsgcorew = 2;
       let sideq = String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,95,53,95,53,57,0);
         libsgcorew |= (sideq == String.fromCharCode(102,0) ? libsgcorew : sideq.length);
       let libgloga: Array<any> = [518, 189, 492];
      if (1 > (2 | sideq.length) || (libsgcorew | sideq.length) > 2) {
          let libtanK = false;
          let static_nhz = String.fromCharCode(112,103,109,121,117,118,95,51,95,56,54,0);
          let bootQ = 1.0;
          let edit8 = 1;
          let eventA = 4;
         libsgcorew |= sideq.length;
         libtanK = (((!libtanK ? static_nhz.length : 10) & static_nhz.length) > 10);
         bootQ += parseFloat(`${1}`);
         edit8 >>= Math.min(4, Math.abs((String.fromCharCode(108,0) == static_nhz ? (libtanK ? 3 : 5) : static_nhz.length)));
         eventA += 3 & eventA;
      }
      while (sideq.length == libsgcorew) {
         sideq += `${libsgcorew % (Math.max(8, libgloga.length))}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         sideq += `${2 >> (Math.min(Math.abs(libsgcorew), 5))}`;
      }
          let screenr: Array<any> = [173, 742];
          let invitePP = String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,105,95,52,54,0);
         sideq += `${libsgcorew % (Math.max(1, 2))}`;
         screenr = [2];
         invitePP += `${invitePP.length}`;
      faviconQ.push(2 % (Math.max(3, parseInt(`${huawei4}`))));
   }
   for (let y = 0; y < 1; y++) {
      pushT = `${1 | incidentx.length}`;
   }
   for (let b = 0; b < 1; b++) {
      huawei4 += dependenciesc.length;
   }

    if (banner) {

      private_c1w += componentsK.length >> (Math.min(Math.abs(3), 5));
   for (let p = 0; p < 1; p++) {
      huawei4 /= Math.max(1, 1);
   }
      megaphone6 *= (String.fromCharCode(66,0) == componentsK ? componentsK.length : parseInt(`${shrink5}`));
      faviconQ = [2 | parseInt(`${huawei4}`)];
      setBannerAd(banner);

       let middleB = String.fromCharCode(122,95,53,53,95,100,97,117,100,0);
         middleB += "3";
         middleB = `${middleB.length}`;
         middleB = `${(middleB == String.fromCharCode(97,0) ? middleB.length : middleB.length)}`;
      componentsK += `${parseInt(`${huawei4}`) ^ megaphone6}`;
      pushT = `${parseInt(`${huawei4}`) * 3}`;
   while ((private_c1w + 4) < 5 || (incidentx.length + 4) < 5) {
      incidentx = "1";
      break;
   }
       let checkboxM = String.fromCharCode(116,101,115,115,101,108,97,116,111,114,95,53,95,52,50,0);
         checkboxM = `${checkboxM.length % 2}`;
          let videovara = true;
         checkboxM = `${(1 / (Math.max(1, (videovara ? 5 : 4))))}`;
      while (!checkboxM.startsWith(`${checkboxM.length}`)) {
          let defaultprofilepicg = 3.0;
          let runtimeS = 1.0;
         checkboxM = `${parseInt(`${defaultprofilepicg}`) << (Math.min(Math.abs(1), 3))}`;
         defaultprofilepicg *= parseInt(`${runtimeS}`) | 3;
         runtimeS /= Math.max(4, 2 * parseInt(`${runtimeS}`));
         break;
      }
      componentsK = "3";
      setBannerAdList(bannerList);
    } else {

   while (release_eyk.startsWith(`${pushT.length}`)) {
       let calendarm = 1;
       let sounda = String.fromCharCode(105,95,56,48,95,105,110,118,105,116,97,116,105,111,110,115,0);
       let diceV = 2.0;
      for (let t = 0; t < 2; t++) {
          let components1 = 2;
          let mapbufferP = 5.0;
         sounda = `${2 >> (Math.min(5, Math.abs(components1)))}`;
         components1 &= parseInt(`${mapbufferP}`);
      }
      for (let l = 0; l < 3; l++) {
          let countdownR = String.fromCharCode(113,95,53,54,95,99,111,112,121,109,0);
         calendarm *= (sounda == String.fromCharCode(84,0) ? sounda.length : calendarm);
         countdownR = `${countdownR.length - countdownR.length}`;
      }
         calendarm |= 1;
         sounda = `${calendarm ^ 3}`;
         diceV /= Math.max(1, 2);
      if (!sounda.startsWith(`${diceV}`)) {
         sounda += `${sounda.length}`;
      }
      let downloadingi = 9588111 >= calendarm;
      do {
         calendarm <<= Math.min(Math.abs(sounda.length & 2), 5);
         if (downloadingi) {
            break;
         }
      } while (downloadingi && ((calendarm * 4) <= 5));
         calendarm >>= Math.min(2, Math.abs(sounda.length ^ calendarm));
          let iconfeedbackR = String.fromCharCode(105,95,50,53,0);
          let playercommonT = String.fromCharCode(101,115,101,110,100,95,103,95,56,50,0);
          let inviteL = String.fromCharCode(102,95,50,56,95,117,97,110,0);
         calendarm %= Math.max(1, parseInt(`${diceV}`) << (Math.min(5, Math.abs(3))));
         iconfeedbackR = `${playercommonT.length}`;
         playercommonT += "1";
         inviteL += `${inviteL.length}`;
      release_eyk = `${dependenciesc.length * parseInt(`${huawei4}`)}`;
      break;
   }
   while ((faviconQ.length + shrink5) >= 1.41) {
      shrink5 /= Math.max(reactnativeultimatelistviewl, 3);
      break;
   }
   for (let l = 0; l < 1; l++) {
      release_eyk = `${dropdownT}`;
   }
       let targeti = 2.0;
      if ((targeti + targeti) >= 1.55) {
         targeti /= Math.max(1 - parseInt(`${targeti}`), 4);
      }
         targeti -= parseInt(`${targeti}`) >> (Math.min(1, Math.abs(1)));
         targeti *= parseInt(`${targeti}`) * parseInt(`${targeti}`);
      dependenciesc += "3";
      setBannerAd(undefined);

      componentsK = "1";
   while ((parseInt(`${huawei4}`) - release_eyk.length) == 4) {
       let heartT = 3.0;
       let e_unlockg = 1.0;
         heartT *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${e_unlockg}`)), 5))}`);
      let notificationfillemptyP = 9379118.0 <= e_unlockg;
      do {
          let cornerkick0 = String.fromCharCode(115,95,49,54,95,109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,0);
          let dycreatorQ = 5.0;
          let background9 = String.fromCharCode(119,101,98,95,98,95,52,54,0);
         e_unlockg += parseFloat(`${parseInt(`${dycreatorQ}`) | parseInt(`${heartT}`)}`);
         cornerkick0 += `${background9.length % 3}`;
         dycreatorQ += cornerkick0.length & background9.length;
         if (notificationfillemptyP) {
            break;
         }
      } while ((1.90 < (1 * heartT)) && notificationfillemptyP);
       let buildb: Array<any> = [79, 85, 720];
       let libjsi7: Array<any> = [267, 359];
          let roomO = String.fromCharCode(109,95,55,49,95,115,111,114,116,0);
         libjsi7.push(buildb.length);
         roomO = `${(roomO == String.fromCharCode(74,0) ? roomO.length : roomO.length)}`;
      while (buildb.includes(heartT)) {
          let libswscalew = 4.0;
          let sigmobz = 0.0;
          let logouto: Array<any> = [829, 72, 697];
          let manifestI = 2.0;
          let componentsc: Array<any> = [519, 507];
         buildb.push(3 | logouto.length);
         libswscalew += parseInt(`${libswscalew}`) >> (Math.min(componentsc.length, 1));
         sigmobz -= parseInt(`${libswscalew}`);
         logouto = [parseInt(`${sigmobz}`)];
         manifestI *= parseFloat(`${3}`);
         componentsc.push(parseInt(`${sigmobz}`));
         break;
      }
      if ((parseInt(`${heartT}`) / (Math.max(libjsi7.length, 8))) >= 1 && 5.31 >= (heartT / (Math.max(4.42, 9)))) {
          let eventsplashB = false;
         libjsi7.push(1 + parseInt(`${heartT}`));
         eventsplashB = (eventsplashB ? eventsplashB : eventsplashB);
      }
      huawei4 -= 1;
      break;
   }
       let mergerH = 0;
      for (let i = 0; i < 1; i++) {
         mergerH ^= mergerH | mergerH;
      }
       let club_: Map<any, any> = new Map([[String.fromCharCode(111,95,57,55,95,116,115,114,0),594], [String.fromCharCode(115,101,116,116,105,116,108,101,95,113,95,52,48,0),261]]);
      if (club_.get(`${mergerH}`) == null) {
         club_.set(`${mergerH}`, 1);
      }
      dependenciesc += `${(livee == String.fromCharCode(110,0) ? livee.length : incidentx.length)}`;
      livee += `${reactnativeultimatelistviewl & 3}`;
      setBannerAdList([]);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  const shouldShowAds = async () => {
       let runtimer = 1.0;
    let infob = 2;
    let source5 = String.fromCharCode(111,95,57,52,95,114,97,110,107,105,110,103,115,0);
    let window_imF: Map<any, any> = new Map([[String.fromCharCode(99,95,53,57,95,114,101,97,115,109,0),874], [String.fromCharCode(97,110,100,108,101,95,49,95,55,49,0),467]]);
    let lnewssharel = String.fromCharCode(111,98,116,97,105,110,95,116,95,56,50,0);
    let logoq = 2.0;
    let attributedstringK = String.fromCharCode(119,97,107,101,117,112,95,116,95,53,54,0);
    let filedu = String.fromCharCode(101,116,104,101,114,115,99,97,110,95,106,95,51,53,0);
    let modulesF: Array<any> = [614, 46, 303];
    let libpangleflippedW = 2.0;
    let holderp = 4.0;
    let libavcodecT = String.fromCharCode(109,95,50,49,95,97,121,98,114,105,0);
       let moren = 3;
      let icon9 = moren >= 5141589;
      do {
         moren |= moren << (Math.min(4, Math.abs(moren)));
         if (icon9) {
            break;
         }
      } while (icon9 && ((moren >> (Math.min(Math.abs(moren), 2))) <= 3 && (moren >> (Math.min(2, Math.abs(moren)))) <= 3));
      while ((moren / (Math.max(5, moren))) < 2 && (moren / 2) < 5) {
          let memberM = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,57,95,49,53,0);
          let reactnativejss = 5.0;
          let fullx = 1;
          let xadsdk8 = 1.0;
          let confirmationM = String.fromCharCode(107,95,54,48,95,112,111,108,121,109,101,115,104,0);
         moren >>= Math.min(4, Math.abs(parseInt(`${reactnativejss}`)));
         memberM = "1";
         reactnativejss /= Math.max(4, parseFloat(`${confirmationM.length * 1}`));
         fullx %= Math.max(2, 2);
         xadsdk8 += 2 / (Math.max(4, memberM.length));
         confirmationM = `${2 / (Math.max(3, confirmationM.length))}`;
         break;
      }
         moren %= Math.max(moren, 1);
      attributedstringK += `${parseInt(`${logoq}`)}`;
       let signinupy: Array<any> = [306, 841];
       let tumbnails = String.fromCharCode(100,95,49,48,48,95,97,118,100,101,118,105,99,101,0);
          let manifestT: Array<any> = [367, 721, 719];
          let album3 = String.fromCharCode(98,97,99,107,101,100,95,102,95,53,55,0);
          let zoomk = String.fromCharCode(106,95,56,54,95,122,111,110,101,105,110,102,111,0);
         tumbnails += `${manifestT.length >> (Math.min(Math.abs(1), 3))}`;
         manifestT.push(zoomk.length - album3.length);
         album3 += `${album3.length + zoomk.length}`;
         tumbnails += `${tumbnails.length}`;
         tumbnails = `${tumbnails.length * 2}`;
          let historyC = false;
          let inouttargetredU = 3;
         tumbnails += `${tumbnails.length | inouttargetredU}`;
         historyC = !historyC;
         inouttargetredU >>= Math.min(2, parseInt(`${Math.abs((3 << (Math.min(Math.abs((historyC ? 2 : 3)), 3))))}`));
         signinupy = [signinupy.length];
       let photoX = String.fromCharCode(101,118,97,108,117,97,116,101,100,95,100,95,52,48,0);
      logoq -= parseFloat(`${2 ^ filedu.length}`);
      infob &= 2 & attributedstringK.length;
   if (2.44 > (holderp - 1.28) && 1.28 > (holderp + libpangleflippedW)) {
       let auto_xqg = String.fromCharCode(114,95,56,57,95,115,121,109,101,118,101,110,0);
       let typingt = 2.0;
       let modulek = 3.0;
       let middley = 1;
       let greenn = String.fromCharCode(116,97,115,107,115,95,49,95,54,51,0);
       let mintegral9 = String.fromCharCode(112,95,49,48,48,95,99,97,116,0);
      for (let j = 0; j < 3; j++) {
         auto_xqg += "2";
      }
         mintegral9 = "3";
      for (let d = 0; d < 3; d++) {
         greenn += `${(String.fromCharCode(52,0) == auto_xqg ? auto_xqg.length : parseInt(`${typingt}`))}`;
      }
         typingt += parseInt(`${modulek}`) & 3;
       let predictionwinW: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,98,95,53,51,0),579], [String.fromCharCode(118,95,50,49,95,100,101,108,97,116,101,100,0),100]]);
       let referrerh: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,115,95,117,95,54,48,0),String.fromCharCode(114,95,50,55,95,97,115,115,111,99,105,97,116,101,0)], [String.fromCharCode(112,95,51,52,95,114,101,99,101,110,116,108,121,0),String.fromCharCode(105,110,100,105,99,101,115,95,122,95,55,0)]]);
      if (1.92 <= (1.84 - modulek)) {
         greenn += `${referrerh.size}`;
      }
         mintegral9 = `${referrerh.size}`;
      while (!Array.from(referrerh.keys()).includes(`${typingt}`)) {
         typingt /= Math.max(4, (greenn == String.fromCharCode(121,0) ? referrerh.size : greenn.length));
         break;
      }
      while (auto_xqg.includes(`${predictionwinW.size}`)) {
         auto_xqg = `${2 + auto_xqg.length}`;
         break;
      }
          let libswscale8: Array<any> = [130, 356, 967];
          let typesB = 3.0;
          let internetG = 1.0;
         auto_xqg = `${1 - parseInt(`${typesB}`)}`;
         libswscale8 = [parseInt(`${internetG}`)];
         typesB += parseFloat(`${libswscale8.length & 2}`);
         internetG -= parseFloat(`${parseInt(`${internetG}`)}`);
         greenn += `${referrerh.size}`;
      holderp -= parseFloat(`${1}`);
   }
   while (4.62 == (logoq * 4)) {
      holderp -= parseFloat(`${parseInt(`${runtimer}`) & 2}`);
      break;
   }
      attributedstringK += `${window_imF.size}`;
      infob >>= Math.min(3, Math.abs(1));
      logoq /= Math.max((parseFloat(`${attributedstringK == String.fromCharCode(55,0) ? attributedstringK.length : parseInt(`${logoq}`)}`)), 4);

    if (!isVip) {

      window_imF.set(filedu, modulesF.length);
       let backwardh = 2.0;
       let rewindV = String.fromCharCode(105,95,53,48,95,99,117,116,0);
          let androidX = 0.0;
         rewindV += `${rewindV.length}`;
         androidX /= Math.max(2, parseInt(`${androidX}`));
      for (let s = 0; s < 3; s++) {
         backwardh *= parseInt(`${backwardh}`);
      }
          let routerO = 1.0;
          let ewardedF: Array<any> = [763, 749, 756];
          let sliderC = String.fromCharCode(121,115,108,111,103,95,109,95,51,57,0);
         rewindV += `${ewardedF.length * 2}`;
         routerO -= sliderC.length + 1;
         ewardedF.push(2);
         sliderC += `${sliderC.length & 1}`;
       let index2 = String.fromCharCode(97,95,57,50,95,115,117,98,0);
         rewindV = `${rewindV.length * index2.length}`;
      for (let g = 0; g < 3; g++) {
          let membershipS = 2.0;
          let scheduleI = String.fromCharCode(99,97,109,112,97,105,103,110,95,116,95,53,50,0);
          let zhuboh = String.fromCharCode(113,95,50,57,95,116,101,120,116,117,114,101,0);
          let headere = String.fromCharCode(115,121,110,99,119,111,114,100,115,95,110,95,55,0);
         backwardh += 3 << (Math.min(2, headere.length));
         membershipS += parseFloat(`${parseInt(`${membershipS}`)}`);
         scheduleI = "2";
         zhuboh = `${(String.fromCharCode(84,0) == zhuboh ? zhuboh.length : scheduleI.length)}`;
         headere = `${parseInt(`${membershipS}`) / (Math.max(10, scheduleI.length))}`;
      }
      attributedstringK += `${1 ^ attributedstringK.length}`;
       let activeJ = String.fromCharCode(107,95,53,49,95,97,108,109,111,115,116,0);
       let less5 = String.fromCharCode(101,109,111,106,105,95,49,95,51,0);
         less5 = `${activeJ.length | 1}`;
         less5 = `${less5.length}`;
      while (less5 == String.fromCharCode(77,0)) {
         activeJ += `${activeJ.length - less5.length}`;
         break;
      }
      while (less5 == String.fromCharCode(101,0)) {
         activeJ = `${activeJ.length | less5.length}`;
         break;
      }
      while (activeJ == less5) {
         less5 += `${less5.length}`;
         break;
      }
      let videojsi = activeJ.length >= 9508393;
      do {
          let clearr = 2.0;
          let download5: Map<any, any> = new Map([[String.fromCharCode(106,95,53,56,95,120,109,117,108,0),27], [String.fromCharCode(116,95,54,56,95,109,97,110,116,105,115,115,97,0),888], [String.fromCharCode(99,95,54,50,95,114,97,100,102,0),376]]);
          let logouserB = true;
          let largep: Map<any, any> = new Map([[String.fromCharCode(105,95,56,48,95,97,100,118,97,110,99,101,100,0),true ], [String.fromCharCode(101,95,56,49,95,100,113,117,111,116,101,0),false ], [String.fromCharCode(105,110,118,111,107,101,95,106,95,57,48,0),true ]]);
         activeJ = `${(largep.size ^ (logouserB ? 4 : 3))}`;
         clearr += parseFloat(`${1 & parseInt(`${clearr}`)}`);
         download5 = new Map([[`${download5.size}`, parseInt(`${clearr}`) / 3]]);
         logouserB = download5.size <= 66 || 12.15 <= clearr;
         largep.set(`${clearr}`, parseInt(`${clearr}`) - download5.size);
         if (videojsi) {
            break;
         }
      } while (videojsi && (less5 == activeJ));
      attributedstringK += `${lnewssharel.length}`;
      window_imF = new Map([[filedu, filedu.length]]);
      runtimer *= window_imF.size % (Math.max(2, 8));
   if (3 <= (3 | attributedstringK.length)) {
      runtimer *= 2;
   }
   let imagemanager4 = holderp <= 6182705.0;
   do {
      holderp *= parseFloat(`${2}`);
      if (imagemanager4) {
         break;
      }
   } while (imagemanager4 && ((lnewssharel.length / 3) <= 3 && 2 <= (lnewssharel.length % (Math.max(3, 2)))));
   let libcxxcomponents1 = logoq >= 8489952.0;
   do {
      logoq -= parseFloat(`${parseInt(`${holderp}`) >> (Math.min(3, Math.abs(1)))}`);
      if (libcxxcomponents1) {
         break;
      }
   } while (libcxxcomponents1 && ((logoq / 3.48) > 1.77 && (parseInt(`${logoq}`) / (Math.max(3, 1))) > 5));
      fetchBannerAd();
    } else {

   if (4 < source5.length) {
      lnewssharel += `${3 >> (Math.min(3, source5.length))}`;
   }
      filedu = "2";
      libavcodecT = `${parseInt(`${logoq}`) + parseInt(`${runtimer}`)}`;
       let w_unlocka: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,95,54,95,49,53,0),936], [String.fromCharCode(120,95,49,51,95,112,114,111,112,115,0),13]]);
         w_unlocka = new Map([[`${w_unlocka.size}`, 3 ^ w_unlocka.size]]);
      if ((w_unlocka.size % 4) == 3 && 1 == (w_unlocka.size % 4)) {
         w_unlocka = new Map([[`${w_unlocka.size}`, w_unlocka.size << (Math.min(Math.abs(w_unlocka.size), 2))]]);
      }
      while (3 == (w_unlocka.size << (Math.min(Math.abs(1), 2)))) {
         w_unlocka = new Map([[`${w_unlocka.size}`, w_unlocka.size]]);
         break;
      }
      modulesF = [2];
   if (runtimer <= logoq) {
       let libavfilterm = String.fromCharCode(115,95,52,54,95,109,111,110,116,104,115,0);
       let libzeusD: Array<any> = [String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,105,95,52,57,0), String.fromCharCode(121,117,118,112,99,95,107,95,49,54,0), String.fromCharCode(118,95,51,53,95,114,95,51,56,0)];
       let activityu = String.fromCharCode(103,101,116,120,115,115,101,95,114,95,50,51,0);
         libavfilterm = "2";
      while ((2 - activityu.length) >= 1) {
         activityu += "1";
         break;
      }
         libzeusD.push(1);
         libzeusD.push(3 - activityu.length);
      if (activityu.endsWith(`${libzeusD.length}`)) {
         libzeusD.push(libavfilterm.length);
      }
         libzeusD = [1];
      while (activityu.length == 1) {
         activityu += `${libzeusD.length - 3}`;
         break;
      }
          let proxyu = 0.0;
          let save_ = String.fromCharCode(97,114,116,105,115,95,56,95,53,52,0);
          let windV = String.fromCharCode(109,95,55,55,95,115,113,117,97,114,101,0);
         libzeusD.push(parseInt(`${proxyu}`));
         proxyu *= parseFloat(`${save_.length}`);
         save_ = `${(save_ == String.fromCharCode(79,0) ? windV.length : save_.length)}`;
         windV = `${1 >> (Math.min(5, save_.length))}`;
          let iconusers = String.fromCharCode(102,111,108,100,101,114,95,110,95,50,53,0);
          let shrinkc = true;
          let langb: Array<any> = [647, 384, 138];
         activityu = `${libavfilterm.length << (Math.min(Math.abs(2), 3))}`;
         iconusers = `${iconusers.length - 1}`;
         shrinkc = 55 < langb.length;
         langb.push(1);
      logoq += parseFloat(`${lnewssharel.length << (Math.min(Math.abs(2), 3))}`);
   }
   let countryX = 8451979 <= infob;
   do {
      infob ^= infob;
      if (countryX) {
         break;
      }
   } while (countryX && (3 > (lnewssharel.length >> (Math.min(3, Math.abs(infob)))) || 1 > (infob >> (Math.min(Math.abs(3), 4)))));
   for (let a = 0; a < 3; a++) {
      lnewssharel += `${source5.length + parseInt(`${libpangleflippedW}`)}`;
   }
   let libavdeviceE = String.fromCharCode(97,114,98,54,49,55,95,102,57,0) == source5;
   do {
      source5 = `${attributedstringK.length}`;
      if (libavdeviceE) {
         break;
      }
   } while (libavdeviceE && (source5.length == 4 && 4 == lnewssharel.length));
      setBannerAd(undefined);

   for (let q = 0; q < 1; q++) {
      libavcodecT += `${parseInt(`${logoq}`)}`;
   }
   for (let n = 0; n < 3; n++) {
      libpangleflippedW += parseFloat(`${modulesF.length}`);
   }
   if (3.59 == (logoq / (Math.max(4, parseFloat(`${lnewssharel.length}`)))) && 5.83 == (logoq / 3.59)) {
      logoq /= Math.max(parseFloat(`${window_imF.size ^ filedu.length}`), 4);
   }
       let reviewd: Array<any> = [861, 541, 582];
       let robotom: Map<any, any> = new Map([[String.fromCharCode(109,95,50,49,0),String.fromCharCode(105,95,50,48,95,105,110,116,101,114,112,111,108,97,116,111,114,0)], [String.fromCharCode(122,95,55,95,100,111,119,110,103,114,97,100,101,0),String.fromCharCode(102,95,51,51,95,101,110,99,111,100,101,100,112,111,105,110,116,0)]]);
       let agreementT = String.fromCharCode(110,95,49,56,95,118,101,114,105,102,105,97,116,105,111,110,0);
         reviewd.push(1 * robotom.size);
      while (2 < (reviewd.length << (Math.min(Math.abs(robotom.size), 4))) && (robotom.size << (Math.min(3, reviewd.length))) < 2) {
         robotom.set(agreementT, robotom.size);
         break;
      }
         agreementT += `${agreementT.length}`;
          let libavfilterT = 2.0;
          let libglog5 = String.fromCharCode(101,114,97,115,101,100,95,115,95,51,56,0);
          let lessy: Array<any> = [208, 693];
         reviewd.push((libglog5 == String.fromCharCode(66,0) ? libglog5.length : parseInt(`${libavfilterT}`)));
         libavfilterT *= parseFloat(`${3 * lessy.length}`);
      let minimizeL = robotom.size >= 5836101;
      do {
         robotom = new Map([[`${robotom.size}`, 1 % (Math.max(8, robotom.size))]]);
         if (minimizeL) {
            break;
         }
      } while (minimizeL && (robotom.size == reviewd.length));
         reviewd = [agreementT.length];
      if ((3 % (Math.max(5, reviewd.length))) > 3) {
         reviewd = [1 >> (Math.min(2, agreementT.length))];
      }
         robotom.set(`${agreementT}`, robotom.size);
         reviewd = [(String.fromCharCode(97,0) == agreementT ? reviewd.length : agreementT.length)];
      window_imF.set(libavcodecT, 1 ^ parseInt(`${libpangleflippedW}`));
       let shareb: Map<any, any> = new Map([[String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,57,95,51,53,0),String.fromCharCode(99,111,110,118,101,114,103,101,110,99,101,95,108,95,51,51,0)], [String.fromCharCode(114,95,57,54,95,104,105,103,104,115,104,101,108,102,0),String.fromCharCode(112,95,49,57,95,97,119,97,105,116,0)]]);
       let libpangleflippedt = false;
       let long_smQ = String.fromCharCode(105,95,54,55,95,103,108,111,119,0);
          let viewern = String.fromCharCode(107,105,99,107,101,114,95,53,95,54,0);
          let chinasameN = String.fromCharCode(110,95,52,51,95,115,117,98,113,117,101,114,121,0);
          let productv = 5.0;
         libpangleflippedt = chinasameN.includes(`${productv}`);
         viewern += `${viewern.length + viewern.length}`;
         chinasameN += `${viewern.length >> (Math.min(Math.abs(3), 4))}`;
          let footballQ = 4;
         long_smQ += `${long_smQ.length ^ footballQ}`;
      if (1 >= long_smQ.length) {
         long_smQ += `${((libpangleflippedt ? 1 : 3) & 1)}`;
      }
         libpangleflippedt = long_smQ.length <= 11;
      for (let s = 0; s < 2; s++) {
         shareb.set(`${libpangleflippedt}`, shareb.size << (Math.min(Math.abs(1), 3)));
      }
         libpangleflippedt = !libpangleflippedt;
          let paginationJ: Map<any, any> = new Map([[String.fromCharCode(122,95,49,54,95,116,117,110,110,101,108,0),636], [String.fromCharCode(98,95,52,95,117,110,100,101,108,101,103,97,116,101,0),70], [String.fromCharCode(97,95,55,49,95,112,97,105,114,119,105,115,101,0),660]]);
         long_smQ += "2";
         paginationJ = new Map([[`${paginationJ.size}`, paginationJ.size * paginationJ.size]]);
      let carouselg = libpangleflippedt ? !libpangleflippedt : libpangleflippedt;
      do {
         libpangleflippedt = long_smQ.length >= 24;
         if (carouselg) {
            break;
         }
      } while ((1 > long_smQ.length) && carouselg);
         libpangleflippedt = shareb.size >= 66 && libpangleflippedt;
      libavcodecT += `${infob}`;
      lnewssharel = "3";
      libpangleflippedW *= parseFloat(`${modulesF.length - 3}`);
      holderp *= parseFloat(`${filedu.length}`);
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
    item: { date: string | undefined; data: wwInfo | undefined };
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
                      ww_runtime.sportBannerViewAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                    onPress={({ id, name, slot_id, title }) => {
                      ww_runtime.sportBannerClickAnalytics({
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
       let ballM = 5;
    let disconnectedlogoX = 4.0;
    let catalogi = 1;
    let downarrowN = 4.0;
    let sideL = String.fromCharCode(110,95,57,57,0);
    let middley = false;
    let headerc = false;
    let acceptedp = String.fromCharCode(111,95,52,53,95,100,101,99,114,101,102,0);
    let inviteA = 2;
    let codegenS = false;
    let friendsi: Map<any, any> = new Map([[String.fromCharCode(117,95,49,95,104,105,103,104,108,105,103,104,116,101,114,0),false ], [String.fromCharCode(100,118,100,115,117,98,95,120,95,50,57,0),false ], [String.fromCharCode(121,95,55,49,0),false ]]);
    let catagoryZ = true;
    let calendar7: Array<any> = [69, 13];
    let libreactW = 1;
    let whitetickL = String.fromCharCode(108,95,51,53,95,104,105,110,116,101,100,0);
    let popupB = true;
    let constants6 = 1.0;
    let iconwatchnow_: Array<any> = [865, 721, 937];
   for (let q = 0; q < 3; q++) {
      ballM &= 2;
   }
   let over5 = disconnectedlogoX >= 5794074.0;
   do {
       let disconnected5 = 4.0;
         disconnected5 -= parseFloat(`${parseInt(`${disconnected5}`)}`);
      if (2.78 < disconnected5) {
          let sentrys = true;
         disconnected5 -= parseFloat(`${3 - parseInt(`${disconnected5}`)}`);
         sentrys = (!sentrys ? !sentrys : !sentrys);
      }
          let a_imageP = String.fromCharCode(99,111,114,114,117,112,116,101,100,95,98,95,54,54,0);
          let dangerO = String.fromCharCode(109,95,50,51,95,108,97,117,110,99,104,101,100,0);
         disconnected5 /= Math.max(parseFloat(`${3}`), 2);
         a_imageP = `${a_imageP.length}`;
         dangerO = `${dangerO.length - 1}`;
      disconnectedlogoX += (parseFloat(`${(codegenS ? 5 : 4) << (Math.min(Math.abs(parseInt(`${disconnected5}`)), 4))}`));
      if (over5) {
         break;
      }
   } while (over5 && (2 >= (parseInt(`${disconnectedlogoX}`) - acceptedp.length) && (2 * acceptedp.length) >= 3));
      sideL += `${sideL.length}`;
      acceptedp = `${inviteA}`;
       let middlewareW = 2.0;
       let whiteW = 0;
       let penaltygoal2 = String.fromCharCode(109,95,54,54,95,109,97,114,107,105,110,103,0);
      for (let n = 0; n < 2; n++) {
          let anytimea = String.fromCharCode(99,108,97,115,115,105,99,95,122,95,52,54,0);
          let result4 = String.fromCharCode(121,95,54,49,95,98,97,115,101,110,97,109,101,0);
          let resendF = String.fromCharCode(112,95,53,48,95,116,114,105,101,0);
          let themeR = String.fromCharCode(121,95,49,56,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0);
          let setting7 = 2.0;
         whiteW /= Math.max(1, result4.length / (Math.max(2, 6)));
         anytimea += `${anytimea.length >> (Math.min(Math.abs(1), 5))}`;
         result4 += `${anytimea.length | 1}`;
         resendF = `${anytimea.length}`;
         themeR += `${3 * parseInt(`${setting7}`)}`;
         setting7 += parseFloat(`${parseInt(`${setting7}`) >> (Math.min(Math.abs(2), 3))}`);
      }
         middlewareW /= Math.max(4, parseFloat(`${whiteW % 2}`));
         whiteW &= penaltygoal2.length;
         whiteW %= Math.max(whiteW - penaltygoal2.length, 1);
         middlewareW /= Math.max(parseFloat(`${whiteW % (Math.max(parseInt(`${middlewareW}`), 2))}`), 5);
         whiteW |= 3 / (Math.max(whiteW, 1));
         whiteW ^= parseInt(`${middlewareW}`);
      for (let e = 0; e < 3; e++) {
          let overlayM = String.fromCharCode(100,95,56,53,95,116,114,97,105,116,115,0);
         whiteW += parseInt(`${middlewareW}`) >> (Math.min(1, Math.abs(1)));
         overlayM += `${(String.fromCharCode(104,0) == overlayM ? overlayM.length : overlayM.length)}`;
      }
      if (1 > whiteW) {
         middlewareW += parseFloat(`${penaltygoal2.length - parseInt(`${middlewareW}`)}`);
      }
      acceptedp = `${ballM}`;
   for (let t = 0; t < 1; t++) {
      disconnectedlogoX += parseFloat(`${3 & friendsi.size}`);
   }

    setShowLoading(true);
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 });

    setTimeout(() => {

   if (!codegenS) {
      catalogi -= sideL.length & 1;
   }
       let basketballd: Map<any, any> = new Map([[String.fromCharCode(97,95,52,52,95,103,97,109,101,115,0),462], [String.fromCharCode(121,95,54,51,95,109,105,108,108,101,114,0),601], [String.fromCharCode(98,95,56,49,95,101,113,117,97,108,115,0),347]]);
       let anythinkn = false;
          let closeq: Array<any> = [419, 631, 457];
         basketballd = new Map([[`${closeq.length}`, ((anythinkn ? 3 : 1) & 3)]]);
       let abidetectz = String.fromCharCode(113,117,105,122,95,54,95,57,49,0);
       let bgvipxvodo = String.fromCharCode(119,104,97,116,115,95,107,95,55,52,0);
          let yellowanimationlive0 = String.fromCharCode(102,95,53,52,95,99,114,97,122,121,116,105,109,101,0);
          let goalC = String.fromCharCode(118,97,114,105,97,110,99,101,95,102,95,51,53,0);
         basketballd.set(bgvipxvodo, yellowanimationlive0.length - bgvipxvodo.length);
         yellowanimationlive0 = `${1 - goalC.length}`;
         goalC = `${goalC.length}`;
      if (!anythinkn) {
         basketballd = new Map([[abidetectz, 1]]);
      }
         bgvipxvodo += `${((anythinkn ? 5 : 2))}`;
      if (abidetectz.endsWith(`${anythinkn}`)) {
         anythinkn = abidetectz.length == 91 || basketballd.size == 91;
      }
      headerc = ballM <= 34;
   while ((downarrowN / 1.93) < 5.47) {
      headerc = (acceptedp.length + sideL.length) <= 70;
      break;
   }
       let termsJ = true;
       let runtimeschedulerf: Array<any> = [467, 11, 793];
         runtimeschedulerf.push(2);
          let stringsn = 3;
         runtimeschedulerf = [runtimeschedulerf.length + 3];
         stringsn &= stringsn / (Math.max(stringsn, 7));
      let annerW = runtimeschedulerf.length <= 6332517;
      do {
         runtimeschedulerf = [(runtimeschedulerf.length << (Math.min(2, Math.abs((termsJ ? 3 : 4)))))];
         if (annerW) {
            break;
         }
      } while (annerW && (5 >= (runtimeschedulerf.length / (Math.max(4, 5)))));
      for (let n = 0; n < 1; n++) {
         runtimeschedulerf.push(runtimeschedulerf.length % 3);
      }
      if ((runtimeschedulerf.length ^ 2) == 1 && !termsJ) {
         termsJ = termsJ || runtimeschedulerf.length <= 89;
      }
         termsJ = runtimeschedulerf.includes(termsJ);
      friendsi = new Map([[`${friendsi.size}`, friendsi.size]]);
       let comment6 = 1.0;
       let currentH = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,95,50,95,57,50,0);
       let foreground_ = String.fromCharCode(118,98,108,101,95,52,95,56,0);
       let main_kk = String.fromCharCode(97,114,114,105,118,97,108,95,115,95,55,49,0);
       let terms5 = String.fromCharCode(117,95,53,50,95,121,97,100,105,102,0);
         currentH = `${1 & terms5.length}`;
          let verticalb = true;
          let darkb = false;
         comment6 -= (parseFloat(`${(verticalb ? 4 : 5)}`));
         verticalb = (!darkb ? !darkb : !darkb);
         terms5 = `${currentH.length}`;
      for (let i = 0; i < 1; i++) {
         terms5 = `${parseInt(`${comment6}`)}`;
      }
         currentH += `${main_kk.length / (Math.max(1, parseInt(`${comment6}`)))}`;
       let turnZ = false;
      if (terms5.startsWith(main_kk)) {
          let giflivestreamingA = false;
          let macauk: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,102,95,114,95,49,49,0),String.fromCharCode(114,101,116,114,105,101,118,101,100,95,108,95,57,0)], [String.fromCharCode(108,101,97,107,95,116,95,54,53,0),String.fromCharCode(103,101,116,110,112,97,115,115,101,115,95,53,95,55,0)]]);
         main_kk += "3";
         giflivestreamingA = (macauk.size | macauk.size) >= 69;
      }
      if (foreground_.startsWith(currentH)) {
          let penaltyn = String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,119,95,55,50,0);
          let modalk = String.fromCharCode(114,95,50,52,95,97,115,115,101,114,116,105,111,110,0);
          let questicon6 = String.fromCharCode(110,95,50,95,99,102,116,115,116,0);
          let reminderZ = String.fromCharCode(98,95,49,54,95,104,97,97,114,0);
          let renderI = String.fromCharCode(115,112,105,108,108,95,117,95,51,55,0);
         foreground_ += `${terms5.length & modalk.length}`;
         penaltyn += `${penaltyn.length + reminderZ.length}`;
         modalk += "3";
         questicon6 = `${renderI.length}`;
         reminderZ += `${penaltyn.length}`;
         renderI += `${renderI.length}`;
      }
      disconnectedlogoX *= parseFloat(`${parseInt(`${disconnectedlogoX}`) * currentH.length}`);
   for (let i = 0; i < 3; i++) {
      middley = catagoryZ || 61 < ballM;
   }
      

       let imagesL: Array<any> = [479, 812, 412];
       let downM = String.fromCharCode(121,95,50,54,95,116,114,105,101,0);
      while (downM.length < imagesL.length) {
          let tickr = 3.0;
         imagesL.push(3);
         tickr *= parseInt(`${tickr}`);
         break;
      }
      let sellj = 6491615 >= imagesL.length;
      do {
         imagesL.push(imagesL.length ^ 2);
         if (sellj) {
            break;
         }
      } while ((4 > (imagesL.length % (Math.max(downM.length, 10))) && (imagesL.length % 4) > 3) && sellj);
      for (let d = 0; d < 2; d++) {
         downM = `${imagesL.length}`;
      }
      while (downM.length >= imagesL.length) {
         downM += `${imagesL.length}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
         downM = "1";
      }
         downM = `${downM.length}`;
      middley = inviteA == 14;
   let neonS = 7146155 <= calendar7.length;
   do {
      calendar7.push(parseInt(`${disconnectedlogoX}`));
      if (neonS) {
         break;
      }
   } while (neonS && (calendar7.length <= 5));
      downarrowN -= 2 + libreactW;
   let boote = 6206319 >= inviteA;
   do {
      inviteA <<= Math.min(3, Math.abs(2));
      if (boote) {
         break;
      }
   } while ((3 > (ballM / (Math.max(8, inviteA))) && 4 > (ballM / 3)) && boote);
   if (!codegenS) {
      inviteA %= Math.max(1 % (Math.max(8, catalogi)), 1);
   }
      catalogi <<= Math.min(Math.abs(parseInt(`${downarrowN}`) & 2), 1);
      setShowLoading(false);
    }, 1200);
  };

  
  
  
  
  
  
  
  
  

  const handleInitialLoading = useCallback(() => {
       let defaultprofilepic1: Array<any> = [650, 507];
    let helpers = String.fromCharCode(119,95,56,54,95,114,101,98,97,115,101,0);
    let handler9 = 4.0;
    let dycreatorl = 1.0;
    let iconsettingW: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,95,54,95,57,52,0),254], [String.fromCharCode(105,119,104,116,120,95,57,95,55,48,0),355]]);
    let giflivestreamingI: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,100,95,57,52,0),898], [String.fromCharCode(110,95,56,48,95,97,115,99,101,110,116,0),224]]);
    let darkl = 2.0;
    let hiadH = 4;
    let fcdaebecbcbafcdfceaaeccfeacdbX = String.fromCharCode(112,114,101,115,101,110,116,105,110,103,95,101,95,50,49,0);
    let fill3 = String.fromCharCode(108,97,109,112,95,118,95,51,52,0);
    let progressf: Array<any> = [String.fromCharCode(99,111,110,100,101,110,115,97,98,108,101,95,105,95,55,48,0), String.fromCharCode(99,111,108,108,105,100,105,110,103,95,56,95,57,52,0), String.fromCharCode(118,95,57,54,95,97,99,116,97,98,0)];
    let libjsinspectorH = 3;
    let eighteeni = 2;
      helpers = "1";
   let defaultplayerimgA = 6970152.0 <= darkl;
   do {
      darkl *= (parseFloat(`${helpers == String.fromCharCode(49,0) ? helpers.length : defaultprofilepic1.length}`));
      if (defaultplayerimgA) {
         break;
      }
   } while (defaultplayerimgA && (5.92 < (darkl - 4.1) && (darkl - parseFloat(`${fcdaebecbcbafcdfceaaeccfeacdbX.length}`)) < 4.1));
   for (let b = 0; b < 3; b++) {
      giflivestreamingI = new Map([[`${iconsettingW.size}`, 2 - iconsettingW.size]]);
   }
   let playlistX = handler9 >= 6137364.0;
   do {
      handler9 /= Math.max(1, parseFloat(`${giflivestreamingI.size & 1}`));
      if (playlistX) {
         break;
      }
   } while ((2.57 == (2.50 / (Math.max(7, darkl))) || 2.13 == (darkl / (Math.max(2.50, 6)))) && playlistX);
   if ((handler9 + 1.78) < 4.92) {
       let splashf = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,95,113,95,49,49,0);
       let imagemanagerc: Array<any> = [359, 230];
       let sidet = 0.0;
       let bdxadsdkE = String.fromCharCode(113,95,51,48,95,111,110,118,101,114,115,97,116,105,111,110,0);
       let agreementN = 2;
      for (let o = 0; o < 1; o++) {
          let iconeditX = 3.0;
          let foundG = String.fromCharCode(99,117,114,114,114,101,110,116,95,121,95,55,0);
         bdxadsdkE += `${foundG.length * bdxadsdkE.length}`;
         iconeditX /= Math.max(parseInt(`${iconeditX}`), 5);
         foundG += `${parseInt(`${iconeditX}`)}`;
      }
         bdxadsdkE += `${splashf.length << (Math.min(2, imagemanagerc.length))}`;
      let applef = String.fromCharCode(53,118,115,120,105,57,122,105,122,0) == bdxadsdkE;
      do {
         bdxadsdkE += `${bdxadsdkE.length}`;
         if (applef) {
            break;
         }
      } while (applef && (splashf != bdxadsdkE));
      if (2 <= (agreementN - 2) && 2 <= (agreementN - bdxadsdkE.length)) {
          let control4: Array<any> = [858, 240, 902];
          let flyerR = String.fromCharCode(114,101,112,108,97,99,101,100,95,122,95,56,51,0);
          let floatingq = false;
         bdxadsdkE += `${flyerR.length % (Math.max(2, bdxadsdkE.length))}`;
         control4.push(2);
         flyerR += "1";
      }
      while (!bdxadsdkE.endsWith(splashf)) {
         splashf += `${parseInt(`${sidet}`) | 2}`;
         break;
      }
      if ((5 % (Math.max(3, imagemanagerc.length))) >= 2 && (5 % (Math.max(8, agreementN))) >= 1) {
         imagemanagerc = [parseInt(`${sidet}`)];
      }
      if (splashf.endsWith(`${bdxadsdkE.length}`)) {
         bdxadsdkE = `${bdxadsdkE.length}`;
      }
          let mergerv = 1.0;
          let iconsharev = String.fromCharCode(104,95,55,55,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0);
          let shootU = String.fromCharCode(112,97,114,97,108,108,97,120,95,109,95,53,55,0);
         sidet /= Math.max(2, parseInt(`${sidet}`));
         mergerv -= (shootU == String.fromCharCode(85,0) ? shootU.length : iconsharev.length);
         iconsharev = `${(String.fromCharCode(120,0) == iconsharev ? iconsharev.length : shootU.length)}`;
         bdxadsdkE += "1";
      for (let r = 0; r < 1; r++) {
          let core_: Array<any> = [981, 695, 406];
          let attributedstringx = false;
          let members = String.fromCharCode(110,95,53,52,95,106,112,101,103,116,97,98,108,101,115,0);
         agreementN &= 3 + bdxadsdkE.length;
         core_ = [3 - core_.length];
         attributedstringx = members.length >= 35;
         members = `${(String.fromCharCode(97,0) == members ? core_.length : members.length)}`;
      }
      let libgloge = 5872744.0 >= sidet;
      do {
          let libjsinspectorP = String.fromCharCode(122,95,50,95,114,101,118,111,99,97,116,105,111,110,0);
         sidet *= splashf.length >> (Math.min(4, imagemanagerc.length));
         libjsinspectorP += "3";
         if (libgloge) {
            break;
         }
      } while (((imagemanagerc.length - 2) < 3 || 1.43 < (2.59 - sidet)) && libgloge);
          let malaysiai: Array<any> = [String.fromCharCode(122,95,55,49,95,109,101,109,98,101,114,115,104,105,112,0), String.fromCharCode(106,95,50,95,109,97,112,115,116,114,105,110,103,0), String.fromCharCode(98,97,99,107,114,111,117,110,100,95,105,95,55,57,0)];
         imagemanagerc.push(3);
         malaysiai = [1 * malaysiai.length];
         imagemanagerc.push(3 & agreementN);
         agreementN ^= parseInt(`${sidet}`) | splashf.length;
      let iconrefreshX = 8773295 >= agreementN;
      do {
          let gmailz: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,101,100,95,107,95,51,54,0),String.fromCharCode(115,95,56,57,95,114,103,116,99,115,0)], [String.fromCharCode(114,111,117,110,100,101,100,95,106,95,49,51,0),String.fromCharCode(120,95,55,56,95,115,101,97,108,0)]]);
          let circleg = false;
          let shielddone4 = String.fromCharCode(115,117,112,112,114,101,115,115,95,120,95,57,53,0);
          let vertical8 = String.fromCharCode(114,95,50,52,95,104,105,103,104,0);
          let countdowny = true;
         agreementN ^= 3;
         gmailz.set(`${circleg}`, gmailz.size);
         shielddone4 = `${((circleg ? 4 : 3) & (countdowny ? 1 : 4))}`;
         vertical8 = `${vertical8.length * 3}`;
         if (iconrefreshX) {
            break;
         }
      } while ((agreementN <= 2) && iconrefreshX);
      fcdaebecbcbafcdfceaaeccfeacdbX = `${fcdaebecbcbafcdfceaaeccfeacdbX.length}`;
   }
   if (4.60 < (dycreatorl * parseFloat(`${fcdaebecbcbafcdfceaaeccfeacdbX.length}`))) {
       let private_cnc = String.fromCharCode(101,95,53,56,95,117,110,105,113,117,101,100,0);
       let libavformatV = 5.0;
       let balli = String.fromCharCode(119,95,56,48,95,114,101,118,97,108,105,100,97,116,105,110,103,0);
          let shared1 = String.fromCharCode(122,95,49,54,95,114,105,110,103,116,111,110,101,115,0);
          let benefitp = String.fromCharCode(107,95,56,50,95,119,105,110,116,104,114,101,97,100,0);
          let type_pK = String.fromCharCode(97,109,114,119,98,100,97,116,97,95,106,95,51,56,0);
         private_cnc = `${1 & shared1.length}`;
         shared1 += `${(String.fromCharCode(86,0) == type_pK ? benefitp.length : type_pK.length)}`;
         benefitp += `${benefitp.length * type_pK.length}`;
      fcdaebecbcbafcdfceaaeccfeacdbX += `${fcdaebecbcbafcdfceaaeccfeacdbX.length}`;
   }
   if (5 <= (defaultprofilepic1.length % (Math.max(3, 9))) && (1.59 * darkl) <= 3.43) {
       let checkboxA = 1.0;
         checkboxA += parseInt(`${checkboxA}`);
       let temperaturel = String.fromCharCode(108,95,50,48,95,115,117,98,114,101,115,117,108,116,115,0);
         checkboxA *= parseInt(`${checkboxA}`);
      darkl += parseFloat(`${3}`);
   }
       let downt = String.fromCharCode(119,95,50,49,95,103,101,116,112,97,103,101,115,105,122,101,0);
       let chart0 = 0.0;
       let mbbannerx = String.fromCharCode(98,117,102,102,101,114,115,114,99,95,49,95,56,57,0);
         mbbannerx = "3";
         downt += `${3 | mbbannerx.length}`;
         downt += `${parseInt(`${chart0}`) / (Math.max(mbbannerx.length, 8))}`;
         chart0 += parseFloat(`${downt.length}`);
      for (let e = 0; e < 1; e++) {
         downt = `${2 * mbbannerx.length}`;
      }
          let condensedw = 2.0;
          let textinputt = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,110,95,109,95,50,55,0);
         downt = `${mbbannerx.length + parseInt(`${condensedw}`)}`;
         condensedw /= Math.max((parseFloat(`${String.fromCharCode(88,0) == textinputt ? textinputt.length : textinputt.length}`)), 5);
      let sharedK = 9791431 >= downt.length;
      do {
         downt += `${parseInt(`${chart0}`) << (Math.min(downt.length, 3))}`;
         if (sharedK) {
            break;
         }
      } while (sharedK && (mbbannerx == String.fromCharCode(73,0)));
       let homeI = 1.0;
       let iconstarz = String.fromCharCode(107,95,55,53,95,99,104,111,109,112,0);
      fill3 += `${hiadH}`;


    setShowLoading2(true);

      dycreatorl += parseFloat(`${1}`);
   let chart6 = helpers.length <= 8870672;
   do {
      helpers = `${helpers.length & hiadH}`;
      if (chart6) {
         break;
      }
   } while (chart6 && (helpers.length <= fill3.length));
       let iconwechatl = false;
      let yellowanimationliveH = iconwechatl ? !iconwechatl : iconwechatl;
      do {
         iconwechatl = (!iconwechatl ? !iconwechatl : iconwechatl);
         if (yellowanimationliveH) {
            break;
         }
      } while ((!iconwechatl) && yellowanimationliveH);
       let mountingY = String.fromCharCode(112,114,111,103,114,97,109,95,116,95,57,0);
       let eventsplash2 = String.fromCharCode(118,95,55,52,95,103,97,117,115,115,105,97,110,0);
       let middlebrightnessw = String.fromCharCode(102,101,110,99,95,106,95,52,49,0);
      fcdaebecbcbafcdfceaaeccfeacdbX += `${(helpers == String.fromCharCode(118,0) ? progressf.length : helpers.length)}`;
      handler9 += parseFloat(`${parseInt(`${darkl}`)}`);
      libjsinspectorH %= Math.max(1, parseInt(`${handler9}`) - helpers.length);
   if (darkl > 5.37) {
      darkl /= Math.max(4, parseFloat(`${helpers.length}`));
   }
       let baiduy: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,108,111,99,107,95,97,95,57,54,0),String.fromCharCode(117,95,53,54,95,107,101,121,105,100,0)], [String.fromCharCode(114,95,49,49,95,114,101,99,111,118,101,114,97,98,108,101,0),String.fromCharCode(102,102,116,103,95,53,95,56,56,0)]]);
       let liveq = String.fromCharCode(113,95,52,48,95,99,101,110,116,114,97,108,105,116,121,0);
       let annerL = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,56,95,55,49,0);
      for (let h = 0; h < 3; h++) {
         baiduy = new Map([[`${baiduy.size}`, 3]]);
      }
      for (let p = 0; p < 1; p++) {
          let libimagepipelineS: Array<any> = [String.fromCharCode(105,95,49,56,95,111,109,112,114,101,115,115,111,114,0), String.fromCharCode(118,115,102,114,97,109,101,95,101,95,52,48,0)];
         annerL += `${libimagepipelineS.length}`;
      }
          let temp2 = true;
          let commentk = 5.0;
          let tooltipsc = String.fromCharCode(99,99,105,116,116,95,105,95,50,52,0);
         liveq += `${((temp2 ? 2 : 4) % (Math.max(baiduy.size, 1)))}`;
         temp2 = commentk <= parseFloat(`${tooltipsc.length}`);
         commentk *= parseFloat(`${3 >> (Math.min(5, Math.abs(parseInt(`${commentk}`))))}`);
         tooltipsc += `${2 & tooltipsc.length}`;
         annerL = `${annerL.length * baiduy.size}`;
      let gpayv = 7685453 <= liveq.length;
      do {
         liveq = `${baiduy.size}`;
         if (gpayv) {
            break;
         }
      } while ((baiduy.size <= liveq.length) && gpayv);
      if (liveq.includes(`${baiduy.size}`)) {
         baiduy.set(annerL, annerL.length);
      }
         annerL += "3";
          let countryM: Map<any, any> = new Map([[String.fromCharCode(113,95,52,57,95,109,117,108,116,105,115,105,103,0),String.fromCharCode(120,95,52,57,95,101,110,99,0)], [String.fromCharCode(114,101,112,114,111,99,101,115,115,95,100,95,51,55,0),String.fromCharCode(110,95,53,57,95,98,111,100,121,115,105,100,0)], [String.fromCharCode(118,95,57,54,95,112,114,101,102,97,99,101,0),String.fromCharCode(112,114,101,102,97,99,101,95,109,95,55,54,0)]]);
          let phonew = 4;
          let iconuserw = String.fromCharCode(100,112,99,109,95,57,95,54,56,0);
         baiduy = new Map([[`${countryM.size}`, 1]]);
         countryM.set(iconuserw, iconuserw.length >> (Math.min(Math.abs(1), 5)));
         phonew %= Math.max(1, iconuserw.length);
         annerL = "3";
      hiadH /= Math.max(1, 3);
   if ((darkl + 2.77) >= 3.65 && (2.77 + handler9) >= 2.70) {
      darkl += parseFloat(`${2 * iconsettingW.size}`);
   }
    setTimeout(() => {

       let dplusz = String.fromCharCode(101,95,52,50,95,99,104,101,99,107,0);
       let bannert = String.fromCharCode(115,108,111,116,115,95,119,95,49,53,0);
      for (let e = 0; e < 2; e++) {
          let bannerl = 2.0;
         bannert += `${(dplusz == String.fromCharCode(116,0) ? dplusz.length : parseInt(`${bannerl}`))}`;
      }
       let currentt = String.fromCharCode(110,95,55,53,95,115,101,116,116,105,110,103,0);
      progressf = [giflivestreamingI.size];
   while (4 < defaultprofilepic1.length) {
      defaultprofilepic1 = [3];
      break;
   }
   let refreshm = 7315377 >= libjsinspectorH;
   do {
      libjsinspectorH %= Math.max(1, 4);
      if (refreshm) {
         break;
      }
   } while (refreshm && ((libjsinspectorH ^ progressf.length) == 1));
      fill3 = `${libjsinspectorH / (Math.max(10, fill3.length))}`;
      libjsinspectorH |= parseInt(`${handler9}`) / (Math.max(iconsettingW.size, 3));
      giflivestreamingI = new Map([[`${progressf.length}`, progressf.length]]);
   for (let h = 0; h < 1; h++) {
       let vipsports = 2;
      let moonq = 8513299 >= vipsports;
      do {
          let iconplay4 = String.fromCharCode(108,97,110,101,95,109,95,51,56,0);
          let albumd = String.fromCharCode(120,95,57,55,95,111,117,116,108,105,110,107,0);
         vipsports &= iconplay4.length ^ 3;
         iconplay4 = `${(albumd == String.fromCharCode(89,0) ? albumd.length : albumd.length)}`;
         if (moonq) {
            break;
         }
      } while ((vipsports <= 4) && moonq);
         vipsports &= 2 * vipsports;
         vipsports -= 2;
      eighteeni &= 1 >> (Math.min(3, Math.abs(parseInt(`${darkl}`))));
   }
      dycreatorl *= (parseFloat(`${fcdaebecbcbafcdfceaaeccfeacdbX == String.fromCharCode(70,0) ? fcdaebecbcbafcdfceaaeccfeacdbX.length : parseInt(`${dycreatorl}`)}`));
      setShowLoading2(false);
    }, 1200);

  }, []);

  useEffect(() => {
    handleInitialLoading();
  }, [handleInitialLoading]);

  useEffect(() => {
    flatlistRef
  }, []);

  useEffect(() => {
    if (screenState.autoSelectSport == true) {
      handleRefresh();
    }
  }, [screenState.autoSelectSport])

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
            source={require("@static/images/inouttargetredRoundLeague.gif")}
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
            source={require("@static/images/runtimeschedulerPromotion.gif")}
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
          source={require("../../assets/images/graphPrivilegePackage_76.png")}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
