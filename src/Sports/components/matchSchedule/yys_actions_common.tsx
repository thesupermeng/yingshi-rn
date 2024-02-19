import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import styles from "./yys_nbatrophy";
import { TouchableOpacity } from "react-native";
import { formatMatchDate } from "../../utility/utils";
import { yysIconclosewhiteBaiduads } from "@redux";
import { yysFavoriteNetwork } from "../../types/yys_history_plash";
import { Url } from "../../middleware/yys_login";
import { useInfiniteQuery } from "@tanstack/react-query";
import yysDisconnectedlogoSwitch from "../../middleware/yys_manifest";
import MatchScheduleVip from "./yys_condensed";
import FastImage from "../../../components/common/yys_alert_backwhite";
import { TOPON_BANNER_HEIGHT } from "@utility";
import { yysIconviewer } from "@type";
import { yysConfig } from "@utility";
import { yysPangleCommon } from "@constants";
import { yysFloaterIconsubssuccess } from "../../../../yys_yellowscoreball_topon";
import { BannerContainer } from "../../../components/container/yys_whiteanimationlive";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector } from "@hooks";
import yys_giftbutton_footballtrophy from "../../../../Umeng/yys_giftbutton_footballtrophy";
import { yysMembership } from "../../../api/yys_config";

interface yysIconarrowrightorangeStation {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  isLive?: boolean;
}

type yysLibfbjni = {
  date: string | undefined;
  data: yysFavoriteNetwork | undefined;
};

type yys_shared = {
  headers: number[];
  data: yysLibfbjni[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false,
  isLive = false,
}: yysIconarrowrightorangeStation) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [bannerAd, setBannerAd] = useState<yysIconviewer>();
  const isVip = useAppSelector(({ userReducer }) => !(Number(userReducer.userMemberExpired) <= Number(userReducer.userCurrentTimestamp) || userReducer.userToken === ""))


  const [matches, setMatches] = useState<yys_shared>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let searchbarS = false;
    let libswresamplea = String.fromCharCode(107,95,53,95,101,110,99,111,100,101,102,114,97,109,101,0);
    let calendarS: Map<any, any> = new Map([[String.fromCharCode(117,95,52,51,95,111,102,102,108,105,110,101,0),21], [String.fromCharCode(118,95,53,95,106,111,98,113,0),695], [String.fromCharCode(108,105,115,116,101,110,101,114,115,95,103,95,55,48,0),81]]);
    let subtextO = 4.0;
    let smallU = 5.0;
    let libapminsightaR = 2;
    let loginsuccessm = 0;
    let baidur = String.fromCharCode(112,114,101,99,105,115,101,95,115,95,49,57,0);
    let predictionlossF: Array<any> = [String.fromCharCode(115,95,57,51,95,115,119,97,112,0), String.fromCharCode(99,111,110,116,95,109,95,57,48,0), String.fromCharCode(98,95,55,50,95,115,104,111,117,121,97,99,104,111,0)];
    let usernameJ = true;
    let libreactu: Array<any> = [String.fromCharCode(109,95,50,51,95,98,111,114,100,101,114,115,0), String.fromCharCode(117,95,52,56,95,109,111,100,105,102,121,0)];
    let wifirouterF = 4.0;
   while (2 >= (predictionlossF.length / (Math.max(2, 5)))) {
       let loginj = 0;
         loginj %= Math.max(1, loginj);
      if (3 >= (2 | loginj)) {
         loginj |= loginj / 3;
      }
         loginj >>= Math.min(Math.abs(loginj % 2), 1);
      predictionlossF = [loginsuccessm];
      break;
   }
      libswresamplea += `${3 << (Math.min(3, Math.abs(calendarS.size)))}`;
      smallU *= libswresamplea.length | libreactu.length;

    let url = "";

       let indicatorW = true;
       let alertH: Array<any> = [949, 628, 668];
         alertH = [3];
         alertH = [(alertH.length ^ (indicatorW ? 5 : 5))];
      if (indicatorW) {
         indicatorW = alertH.includes(indicatorW);
      }
      let room_ = alertH.length >= 9096958;
      do {
         alertH = [(alertH.length * (indicatorW ? 1 : 5))];
         if (room_) {
            break;
         }
      } while ((3 < alertH.length || 5 < (alertH.length >> (Math.min(Math.abs(3), 1)))) && room_);
         indicatorW = !indicatorW;
         alertH.push(((indicatorW ? 2 : 4) / (Math.max(alertH.length, 10))));
      calendarS = new Map([[`${alertH.length}`, 2]]);
   while (loginsuccessm >= 4) {
      libapminsightaR <<= Math.min(Math.abs(1 << (Math.min(2, Math.abs(calendarS.size)))), 2);
      break;
   }
   if ((5.93 - smallU) <= 2.80) {
      loginsuccessm ^= calendarS.size;
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
    

      baidur = "2";
       let paginationg = String.fromCharCode(101,110,99,114,121,112,116,105,110,103,95,103,95,55,0);
       let relatedt: Array<any> = [190, 825, 234];
       let middleY = String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,95,105,95,48,0);
      if (paginationg.length >= relatedt.length) {
          let stringI = String.fromCharCode(121,95,53,48,95,109,99,111,114,101,0);
          let info5 = false;
         relatedt.push(3 & paginationg.length);
         stringI += `${stringI.length}`;
         info5 = stringI.length > 49;
      }
         paginationg += `${relatedt.length % 2}`;
      while (relatedt.length <= paginationg.length) {
         relatedt = [2 ^ relatedt.length];
         break;
      }
      let iconuserd = paginationg == String.fromCharCode(48,119,52,53,0);
      do {
         paginationg += `${relatedt.length % 3}`;
         if (iconuserd) {
            break;
         }
      } while ((1 == paginationg.length) && iconuserd);
         middleY = `${middleY.length - paginationg.length}`;
         middleY += `${relatedt.length + paginationg.length}`;
      for (let x = 0; x < 2; x++) {
         paginationg += "1";
      }
       let plashV: Array<any> = [813, 573, 782];
       let binddatasb: Array<any> = [String.fromCharCode(115,116,114,103,108,111,98,95,121,95,54,55,0), String.fromCharCode(122,95,51,48,95,104,117,102,102,0), String.fromCharCode(97,100,100,105,116,105,111,110,97,108,108,121,95,51,95,55,51,0)];
      while (paginationg.length >= middleY.length) {
          let detailsi = String.fromCharCode(101,118,101,110,108,121,95,57,95,52,49,0);
          let station8 = 0.0;
          let anythink0 = 0.0;
          let pointq: Array<any> = [605, 646];
         middleY = `${pointq.length ^ 2}`;
         detailsi += `${detailsi.length}`;
         station8 -= parseFloat(`${parseInt(`${station8}`)}`);
         anythink0 *= 1;
         pointq = [parseInt(`${anythink0}`)];
         break;
      }
      libswresamplea = `${middleY.length + 1}`;
       let sentryk = 4.0;
       let hooks3: Array<any> = [735, 721];
      let switch_rY = 8041746 >= hooks3.length;
      do {
          let refreshv: Array<any> = [100, 954, 893];
          let zhengpianV = 4;
          let chatbotphotoz = 3.0;
         hooks3 = [2 - parseInt(`${chatbotphotoz}`)];
         refreshv.push(refreshv.length);
         zhengpianV <<= Math.min(Math.abs(1), 3);
         chatbotphotoz += 1 ^ refreshv.length;
         if (switch_rY) {
            break;
         }
      } while (switch_rY && (hooks3.includes(sentryk)));
          let penaltyS = 4.0;
          let libfilev: Array<any> = [56, 798];
         hooks3 = [3 ^ hooks3.length];
         penaltyS += libfilev.length | parseInt(`${penaltyS}`);
         libfilev.push(3);
         sentryk -= parseFloat(`${1 * hooks3.length}`);
         sentryk += parseFloat(`${parseInt(`${sentryk}`)}`);
       let type_6pX = String.fromCharCode(119,95,55,54,95,105,110,116,101,110,116,115,0);
         sentryk += parseFloat(`${hooks3.length}`);
      usernameJ = calendarS.size < baidur.length;
    

      searchbarS = !usernameJ || smallU >= 63.43;
      usernameJ = calendarS.size < libreactu.length;
      subtextO /= Math.max((libswresamplea == String.fromCharCode(57,0) ? libswresamplea.length : calendarS.size), 4);
    

   let privacyg = 5458577 >= libreactu.length;
   do {
      libreactu = [(parseInt(`${smallU}`) + (searchbarS ? 5 : 2))];
      if (privacyg) {
         break;
      }
   } while (((3 & libreactu.length) < 3) && privacyg);
       let bottomi: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,109,95,55,51,0),String.fromCharCode(122,95,57,53,95,99,97,112,116,117,114,101,0)], [String.fromCharCode(108,97,116,109,95,98,95,50,55,0),String.fromCharCode(97,110,116,105,99,111,108,108,97,112,115,101,95,113,95,52,54,0)]]);
       let yelloww = true;
       let leaguedetailsbgx = false;
         yelloww = bottomi.size > 88;
         yelloww = leaguedetailsbgx;
         leaguedetailsbgx = (yelloww ? leaguedetailsbgx : !yelloww);
          let whatsappn: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,120,95,54,52,0),true ], [String.fromCharCode(115,107,101,121,95,56,95,56,48,0),false ]]);
         yelloww = (!leaguedetailsbgx ? yelloww : leaguedetailsbgx);
         whatsappn = new Map([[`${whatsappn.size}`, whatsappn.size]]);
       let teamdetailsbgK = 5.0;
       let nalyticsJ = 1.0;
      libreactu.push(predictionlossF.length / (Math.max(4, loginsuccessm)));
      loginsuccessm <<= Math.min(Math.abs(predictionlossF.length * 3), 3);
    

      searchbarS = 30 > libswresamplea.length;
      usernameJ = 74 == loginsuccessm || !usernameJ;
      libswresamplea += "1";
    

      predictionlossF.push(baidur.length);
       let shirtK = 1;
       let embedB: Array<any> = [String.fromCharCode(97,95,55,51,95,101,109,117,108,97,116,111,114,0), String.fromCharCode(108,95,51,95,115,121,110,116,97,120,0)];
         embedB.push(embedB.length + shirtK);
      if ((shirtK * embedB.length) >= 5 && (shirtK * embedB.length) >= 5) {
          let animations0 = String.fromCharCode(101,110,118,101,108,111,112,101,100,95,120,95,50,50,0);
          let checkboxt = String.fromCharCode(121,95,52,57,95,97,114,109,99,97,112,0);
         embedB = [2];
         animations0 = `${checkboxt.length}`;
         checkboxt += `${checkboxt.length ^ 3}`;
      }
       let libavfilters = true;
       let detail2 = false;
      for (let x = 0; x < 3; x++) {
          let profiler: Array<any> = [604, 597, 249];
          let actionr = 1;
          let nodec = true;
          let middlebrightnessS = 4;
          let statso = 0.0;
         embedB = [((detail2 ? 5 : 1) / 1)];
         profiler.push(middlebrightnessS / 1);
         actionr <<= Math.min(3, profiler.length);
         nodec = actionr < parseInt(`${statso}`);
         middlebrightnessS += 2;
         statso -= parseFloat(`${1}`);
      }
      let nativeA = 8090560 <= embedB.length;
      do {
          let iconcurrentmatchg = 2;
          let nodey: Map<any, any> = new Map([[String.fromCharCode(114,101,115,104,117,102,102,108,101,95,119,95,49,57,0),true ], [String.fromCharCode(109,95,55,50,95,100,101,114,105,118,97,116,105,111,110,0),false ]]);
         embedB = [iconcurrentmatchg & 3];
         iconcurrentmatchg *= 2 & nodey.size;
         nodey = new Map([[`${nodey.size}`, nodey.size]]);
         if (nativeA) {
            break;
         }
      } while ((libavfilters) && nativeA);
       let bangU = 2.0;
      usernameJ = !searchbarS;
       let area_ = String.fromCharCode(118,99,111,109,98,105,110,101,95,56,95,52,50,0);
       let popupx: Array<any> = [319, 873];
       let greyk = 3;
         popupx.push((String.fromCharCode(120,0) == area_ ? popupx.length : area_.length));
         greyk >>= Math.min(3, Math.abs(greyk));
         popupx = [3];
          let homeactiveM = 2.0;
          let homeactive7 = String.fromCharCode(101,95,53,53,95,99,108,111,115,101,115,116,0);
         popupx = [popupx.length];
         homeactiveM *= parseFloat(`${parseInt(`${homeactiveM}`) - homeactive7.length}`);
         homeactive7 += `${parseInt(`${homeactiveM}`) % (Math.max(homeactive7.length, 6))}`;
         greyk += area_.length - 2;
          let megaphone0: Array<any> = [572, 597];
         popupx.push(greyk - megaphone0.length);
      for (let m = 0; m < 2; m++) {
          let dependencyr = String.fromCharCode(103,101,111,109,101,116,114,121,95,117,95,49,48,0);
          let alertT = true;
         area_ = `${popupx.length << (Math.min(2, Math.abs(greyk)))}`;
         dependencyr += `${(dependencyr == String.fromCharCode(111,0) ? dependencyr.length : (alertT ? 1 : 2))}`;
         alertT = dependencyr.length > 29;
      }
      if ((greyk + popupx.length) >= 1 && (greyk + popupx.length) >= 1) {
         popupx = [3];
      }
      if ((5 * greyk) > 4 && 5 > (greyk * popupx.length)) {
         greyk |= popupx.length;
      }
      usernameJ = (libapminsightaR & loginsuccessm) > 78;
    

   if (2 < (1 - libswresamplea.length)) {
      libswresamplea += `${parseInt(`${smallU}`)}`;
   }
      wifirouterF -= parseFloat(`${libswresamplea.length << (Math.min(3, Math.abs(parseInt(`${subtextO}`))))}`);
      calendarS = new Map([[`${searchbarS}`, ((searchbarS ? 3 : 1) / (Math.max(parseInt(`${wifirouterF}`), 10)))]]);
    

      wifirouterF += parseFloat(`${2}`);
   for (let l = 0; l < 1; l++) {
      calendarS.set(`${predictionlossF.length}`, 2 << (Math.min(5, predictionlossF.length)));
   }
   while (1 < (loginsuccessm & 3)) {
      calendarS.set(`${searchbarS}`, libswresamplea.length * 2);
      break;
   }
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
       let kuaishoud = 1;
    let awayplayerw = String.fromCharCode(116,95,55,48,95,105,110,116,101,114,112,111,108,97,116,111,114,0);
    let yellowanimationliveG = 2.0;
    let predictionloss0 = 3;
    let tooltipsC = 5.0;
    let iconarrowrightC: Map<any, any> = new Map([[String.fromCharCode(114,101,108,101,118,97,110,116,95,102,95,55,0),726], [String.fromCharCode(115,111,99,107,97,100,100,114,95,100,95,49,52,0),444], [String.fromCharCode(115,101,97,114,99,104,95,52,95,53,54,0),894]]);
    let fullscreenmax6 = 2.0;
    let telegramc = 5;
    let turndowny: Array<any> = [320, 61, 469];
    let largebrightnessH: Array<any> = [844, 417, 547];
    let internet1 = 3;
    let auto_z0q = 4;
      iconarrowrightC.set(`${telegramc}`, telegramc);

    const data = (await yysDisconnectedlogoSwitch.call(url, {}, "GET")).data;

   while ((tooltipsC - 2.43) <= 1.33) {
       let liveshareP = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,118,95,52,48,0);
       let logouti = String.fromCharCode(118,95,56,95,115,111,108,118,101,114,0);
      if (liveshareP.length >= 1) {
         liveshareP += `${logouti.length}`;
      }
         liveshareP = "1";
       let vipsport_: Map<any, any> = new Map([[String.fromCharCode(115,111,114,116,105,110,103,95,55,95,52,56,0),421], [String.fromCharCode(101,95,54,56,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0),577], [String.fromCharCode(105,100,108,105,115,116,95,52,95,51,54,0),368]]);
       let unread0: Map<any, any> = new Map([[String.fromCharCode(119,95,54,54,95,102,105,108,108,105,110,103,0),875], [String.fromCharCode(102,111,114,109,95,117,95,54,56,0),210]]);
      while (3 >= (unread0.size | 3)) {
         vipsport_ = new Map([[logouti, liveshareP.length % (Math.max(2, logouti.length))]]);
         break;
      }
      while ((3 | unread0.size) <= 3 || 2 <= (vipsport_.size | 3)) {
         unread0.set(liveshareP, logouti.length);
         break;
      }
         unread0 = new Map([[liveshareP, logouti.length & liveshareP.length]]);
      tooltipsC -= parseFloat(`${liveshareP.length % 3}`);
      break;
   }

    if (data !== undefined) {

   while (4.37 <= (4.84 * tooltipsC) && (tooltipsC * parseFloat(`${predictionloss0}`)) <= 4.84) {
      tooltipsC -= parseFloat(`${3}`);
      break;
   }
      const dates = Object.keys(data);

      awayplayerw += `${parseInt(`${fullscreenmax6}`) % (Math.max(iconarrowrightC.size, 10))}`;
      let lst: yysLibfbjni[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

       let sharewhiteq: Array<any> = [410, 324];
         sharewhiteq.push(sharewhiteq.length + sharewhiteq.length);
         sharewhiteq.push(sharewhiteq.length ^ 2);
      while (4 >= (1 >> (Math.min(4, sharewhiteq.length))) && 4 >= (sharewhiteq.length >> (Math.min(Math.abs(1), 3)))) {
         sharewhiteq.push(sharewhiteq.length);
         break;
      }
      yellowanimationliveG /= Math.max(sharewhiteq.length - 2, 2);
      if (latestListDate.current === undefined) {

   if ((1 - turndowny.length) > 2 || 1 > (parseInt(`${fullscreenmax6}`) / (Math.max(turndowny.length, 3)))) {
       let libfileO = String.fromCharCode(119,95,53,56,95,118,101,114,121,0);
      while (5 > libfileO.length) {
         libfileO = `${libfileO.length}`;
         break;
      }
         libfileO = `${3 << (Math.min(5, libfileO.length))}`;
      if (libfileO.includes(`${libfileO.length}`)) {
         libfileO = `${libfileO.length * libfileO.length}`;
      }
      fullscreenmax6 += 1;
   }
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

      iconarrowrightC.set(`${kuaishoud}`, kuaishoud);
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000
        );
      } else {

      fullscreenmax6 += parseInt(`${yellowanimationliveG}`) % (Math.max(1, predictionloss0));
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000
        );
      }
      for (const date of dates) {

      tooltipsC -= parseFloat(`${parseInt(`${fullscreenmax6}`) * 1}`);
        const dateDate = new Date(date);

   if (!Array.from(iconarrowrightC.values()).includes(fullscreenmax6)) {
       let white1 = true;
       let iconadslinkw: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,104,101,97,100,101,114,95,117,95,55,56,0),289], [String.fromCharCode(104,101,97,114,116,115,95,121,95,49,55,0),846]]);
       let screenH = true;
       let w_hashP = 0.0;
       let hook1 = 3.0;
          let dragK = String.fromCharCode(116,97,98,108,101,115,95,100,95,55,50,0);
          let airbnbstarselectedc = 1.0;
         hook1 *= parseInt(`${airbnbstarselectedc}`) + 3;
         dragK = `${2 | dragK.length}`;
         airbnbstarselectedc *= 1;
      let x_positionh = screenH ? !screenH : screenH;
      do {
         screenH = iconadslinkw.size <= 97;
         if (x_positionh) {
            break;
         }
      } while ((screenH) && x_positionh);
          let stations9 = String.fromCharCode(111,95,57,55,95,112,114,111,112,101,114,121,0);
         screenH = !screenH;
         stations9 = `${(stations9 == String.fromCharCode(122,0) ? stations9.length : stations9.length)}`;
      if ((iconadslinkw.size / 2) < 3 && 2 < iconadslinkw.size) {
         iconadslinkw = new Map([[`${iconadslinkw.size}`, 1]]);
      }
      let cancelw = 9075348.0 <= hook1;
      do {
         hook1 /= Math.max(4, 3 + parseInt(`${hook1}`));
         if (cancelw) {
            break;
         }
      } while (cancelw && ((iconadslinkw.size % 2) == 3 && (hook1 - 4.85) == 1.96));
      if ((5.23 * w_hashP) < 3.6) {
          let tempG = String.fromCharCode(113,95,56,95,111,112,101,110,103,108,0);
         w_hashP /= Math.max(iconadslinkw.size, 4);
         tempG = `${tempG.length | tempG.length}`;
      }
      let commentm = screenH ? !screenH : screenH;
      do {
         screenH = white1 && iconadslinkw.size < 28;
         if (commentm) {
            break;
         }
      } while (commentm && ((w_hashP / (Math.max(2.51, 1))) == 4.57));
         w_hashP -= parseInt(`${hook1}`) - 1;
      let iconbellactiven = hook1 <= 4905996.0;
      do {
          let closeM = false;
          let description_0M = String.fromCharCode(102,95,51,48,95,112,114,111,114,101,115,100,97,116,97,0);
          let with_5f9 = String.fromCharCode(110,115,116,97,110,116,95,99,95,50,50,0);
          let privacyc = 2.0;
          let type_1yB = true;
         hook1 -= 3 + parseInt(`${hook1}`);
         closeM = (description_0M.length - with_5f9.length) >= 49;
         description_0M = `${((type_1yB ? 2 : 4))}`;
         with_5f9 += `${description_0M.length / (Math.max(3, 9))}`;
         privacyc *= (parseInt(`${privacyc}`) >> (Math.min(4, Math.abs((closeM ? 2 : 3)))));
         type_1yB = 55 == description_0M.length && with_5f9.length == 55;
         if (iconbellactiven) {
            break;
         }
      } while (iconbellactiven && ((iconadslinkw.size * parseInt(`${hook1}`)) == 3));
         white1 = (white1 ? !screenH : white1);
       let whitei: Array<any> = [412, 381];
      let actionsN = white1 ? !white1 : white1;
      do {
          let crownp = true;
         white1 = !screenH;
         crownp = !crownp;
         if (actionsN) {
            break;
         }
      } while ((2 >= (1 << (Math.min(3, Math.abs(iconadslinkw.size)))) || !white1) && actionsN);
      let xvodI = 9359157.0 >= hook1;
      do {
         hook1 += ((white1 ? 2 : 1) % (Math.max(3, parseInt(`${hook1}`))));
         if (xvodI) {
            break;
         }
      } while (xvodI && ((whitei.length + hook1) == 3.49));
         iconadslinkw = new Map([[`${iconadslinkw.size}`, iconadslinkw.size]]);
          let weibow = String.fromCharCode(106,118,101,114,115,105,111,110,95,113,95,57,48,0);
          let smallsoundW: Map<any, any> = new Map([[String.fromCharCode(100,105,97,109,101,116,101,114,95,122,95,50,55,0),31], [String.fromCharCode(115,99,111,112,101,95,110,95,50,56,0),50]]);
         hook1 -= weibow.length * parseInt(`${w_hashP}`);
         weibow = `${smallsoundW.size >> (Math.min(Math.abs(smallsoundW.size), 4))}`;
      fullscreenmax6 *= (parseInt(`${fullscreenmax6}`) ^ (white1 ? 1 : 5));
   }
        const now = new Date();

   for (let m = 0; m < 2; m++) {
      turndowny.push(3 - predictionloss0);
   }
        const sevenDaysBefore = new Date(
          now.valueOf() - 7 * 24 * 60 * 60 * 1000
        );

      awayplayerw += `${3 % (Math.max(4, parseInt(`${tooltipsC}`)))}`;
        const sevenDaysAfter = new Date(
          now.valueOf() + 7 * 24 * 60 * 60 * 1000
        );

   if (!awayplayerw.includes(`${fullscreenmax6}`)) {
      awayplayerw += `${awayplayerw.length + parseInt(`${fullscreenmax6}`)}`;
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue;

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

      kuaishoud /= Math.max(1, telegramc);
        count += 1;
        data[date].forEach((element: yysFavoriteNetwork) => {
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
       let vipsport7 = 0.0;
    let dangerl = 3;
    let connectionP = String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,52,95,54,50,0);
    let langK = 2.0;
    let iconrefreshR = String.fromCharCode(112,114,111,98,108,101,109,115,95,114,95,52,48,0);
    let icondownimgL = 0;
    let expand0 = String.fromCharCode(115,116,114,117,99,116,95,115,95,56,53,0);
    let iconsettingP = String.fromCharCode(115,95,51,95,114,101,99,108,97,105,109,0);
      langK /= Math.max(3, parseFloat(`${parseInt(`${langK}`)}`));
   for (let u = 0; u < 3; u++) {
      icondownimgL >>= Math.min(3, Math.abs(connectionP.length - iconrefreshR.length));
   }
   for (let i = 0; i < 1; i++) {
       let predictionwinS = 5.0;
       let textlayoutmanagerf = String.fromCharCode(98,95,55,53,95,115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,0);
       let statisticsactive5 = 3.0;
       let largebrightness7 = String.fromCharCode(97,108,103,111,114,105,116,104,109,115,95,100,95,54,48,0);
       let whitet: Array<any> = [651, 217, 161];
      for (let x = 0; x < 1; x++) {
         statisticsactive5 /= Math.max((parseFloat(`${String.fromCharCode(103,0) == textlayoutmanagerf ? textlayoutmanagerf.length : whitet.length}`)), 3);
      }
          let foundL: Array<any> = [206, 784, 876];
          let iconbellO = 3;
          let typesS = String.fromCharCode(114,101,99,111,100,101,95,122,95,56,56,0);
         predictionwinS *= parseFloat(`${2}`);
         foundL = [iconbellO >> (Math.min(foundL.length, 5))];
         iconbellO += iconbellO;
         typesS += `${foundL.length}`;
         statisticsactive5 -= parseFloat(`${3 - parseInt(`${predictionwinS}`)}`);
      for (let u = 0; u < 1; u++) {
          let trashe = false;
          let attributedstringQ = String.fromCharCode(104,95,51,50,95,97,112,112,115,0);
          let libjsijniprofilerk = 5.0;
          let neonN: Array<any> = [443, 614, 140];
         predictionwinS += parseFloat(`${attributedstringQ.length & parseInt(`${statisticsactive5}`)}`);
         trashe = neonN.includes(libjsijniprofilerk);
         attributedstringQ = `${neonN.length}`;
         libjsijniprofilerk -= parseInt(`${libjsijniprofilerk}`) | 1;
      }
      for (let a = 0; a < 3; a++) {
         largebrightness7 = `${textlayoutmanagerf.length % 3}`;
      }
      for (let l = 0; l < 3; l++) {
          let balli = String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,98,95,51,57,0);
          let completeQ = 5.0;
          let recommendationn = String.fromCharCode(97,103,103,114,101,103,97,116,101,95,110,95,51,56,0);
         textlayoutmanagerf = `${(textlayoutmanagerf == String.fromCharCode(119,0) ? textlayoutmanagerf.length : balli.length)}`;
         balli = `${recommendationn.length}`;
         completeQ /= Math.max(parseFloat(`${parseInt(`${completeQ}`) >> (Math.min(recommendationn.length, 5))}`), 5);
      }
         statisticsactive5 -= parseFloat(`${parseInt(`${statisticsactive5}`) / (Math.max(textlayoutmanagerf.length, 3))}`);
      while (textlayoutmanagerf.length > parseInt(`${predictionwinS}`)) {
         predictionwinS -= parseFloat(`${whitet.length & 2}`);
         break;
      }
         whitet = [3 | whitet.length];
      for (let o = 0; o < 1; o++) {
         textlayoutmanagerf += `${whitet.length & 2}`;
      }
          let description_nwT: Array<any> = [150, 105];
         predictionwinS -= parseFloat(`${2}`);
         description_nwT.push(description_nwT.length);
         largebrightness7 = `${(textlayoutmanagerf == String.fromCharCode(75,0) ? textlayoutmanagerf.length : whitet.length)}`;
      if (!textlayoutmanagerf.includes(`${largebrightness7.length}`)) {
         textlayoutmanagerf = `${parseInt(`${predictionwinS}`) * whitet.length}`;
      }
       let javaP = true;
       let libcrashsdkD = false;
          let rncoreH = 4.0;
          let whitevideoliveP: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,105,118,101,95,114,95,55,56,0),233], [String.fromCharCode(97,95,54,48,95,115,116,114,105,99,116,0),770], [String.fromCharCode(111,118,101,114,114,105,100,101,95,119,95,54,56,0),396]]);
          let umengb = String.fromCharCode(118,95,52,57,95,105,109,112,97,99,116,0);
         predictionwinS += parseFloat(`${parseInt(`${rncoreH}`)}`);
         rncoreH *= parseFloat(`${2}`);
         whitevideoliveP = new Map([[`${whitevideoliveP.size}`, (String.fromCharCode(115,0) == umengb ? whitevideoliveP.size : umengb.length)]]);
      dangerl /= Math.max(parseInt(`${statisticsactive5}`), 4);
   }
   while ((2 >> (Math.min(2, Math.abs(dangerl)))) < 3 || (dangerl * parseInt(`${vipsport7}`)) < 2) {
      dangerl ^= 2 ^ iconrefreshR.length;
      break;
   }
   let iconshareG = dangerl <= 8958468;
   do {
       let dragclose_ = 2.0;
       let showp = false;
       let c_playerK = false;
         showp = !c_playerK;
      for (let y = 0; y < 3; y++) {
         c_playerK = (c_playerK ? !showp : !c_playerK);
      }
      dangerl ^= 1;
      dragclose_ += parseFloat(`${parseInt(`${dragclose_}`)}`);
      if (iconshareG) {
         break;
      }
   } while (((dangerl % 5) >= 5) && iconshareG);

    const banner = await yysMembership.getBannerAd(110);

      langK /= Math.max(3, parseFloat(`${dangerl}`));
   while (vipsport7 > 5.70) {
       let binddatase = 5.0;
       let iconarrowrightwhitey = 4.0;
       let adultR = 4.0;
       let distB = String.fromCharCode(97,95,51,53,95,98,117,116,111,110,0);
       let greyarrowup5 = 4;
          let flag5 = false;
          let application5 = 0.0;
         iconarrowrightwhitey -= 3 & distB.length;
         flag5 = application5 == application5;
      while (distB.length <= parseInt(`${adultR}`)) {
         distB = `${greyarrowup5 % (Math.max(parseInt(`${iconarrowrightwhitey}`), 2))}`;
         break;
      }
       let logouserG = 4.0;
       let elementsE = 5.0;
         distB = "3";
         binddatase -= parseFloat(`${parseInt(`${iconarrowrightwhitey}`)}`);
       let mimef = 4;
       let yellowtoredA = 3;
      if ((3 | greyarrowup5) == 5) {
          let weiboz: Map<any, any> = new Map([[String.fromCharCode(98,95,51,55,95,97,118,114,101,115,97,109,112,108,101,0),913], [String.fromCharCode(120,95,50,53,95,112,114,111,98,115,0),778], [String.fromCharCode(114,101,110,100,105,116,105,111,110,95,57,95,56,55,0),88]]);
          let videobufferloading1 = String.fromCharCode(122,95,53,49,95,116,111,112,105,99,0);
         greyarrowup5 &= 3 ^ parseInt(`${binddatase}`);
         weiboz = new Map([[`${weiboz.size}`, videobufferloading1.length | 2]]);
         videobufferloading1 = `${1 << (Math.min(5, videobufferloading1.length))}`;
      }
      for (let o = 0; o < 3; o++) {
         mimef &= mimef & 2;
      }
      if (1.71 >= elementsE) {
          let libhermesy = 1;
          let statisticsinactived: Map<any, any> = new Map([[String.fromCharCode(111,95,50,49,95,99,121,99,108,101,115,0),16], [String.fromCharCode(119,116,118,102,105,108,101,95,114,95,56,0),432], [String.fromCharCode(113,95,52,48,95,100,101,108,101,116,101,0),217]]);
          let delegate_qjI = 4.0;
          let statisticsinactiveN = String.fromCharCode(114,101,116,117,114,110,115,95,48,95,55,52,0);
          let checkboxk: Array<any> = [427, 191, 733];
         iconarrowrightwhitey += yellowtoredA;
         libhermesy |= statisticsinactiveN.length;
         statisticsinactived.set(`${libhermesy}`, statisticsinactived.size);
         delegate_qjI += 3;
         statisticsinactiveN = `${libhermesy * parseInt(`${delegate_qjI}`)}`;
         checkboxk = [checkboxk.length % (Math.max(statisticsinactiveN.length, 9))];
      }
       let libjsijniprofiler_ = false;
      while (iconarrowrightwhitey < mimef) {
         mimef &= greyarrowup5 | 1;
         break;
      }
       let iconcalendarw = String.fromCharCode(109,111,117,115,95,113,95,50,53,0);
      while ((2.30 * adultR) == 5.64 || 2.30 == (adultR * binddatase)) {
         adultR -= (String.fromCharCode(116,0) == distB ? greyarrowup5 : distB.length);
         break;
      }
         logouserG += mimef << (Math.min(iconcalendarw.length, 2));
      for (let l = 0; l < 2; l++) {
         elementsE -= 1 % (Math.max(3, parseInt(`${elementsE}`)));
      }
      dangerl /= Math.max(2, greyarrowup5);
      break;
   }
   let iconmegaphonek = expand0 == String.fromCharCode(50,51,118,56,115,55,54,108,100,98,0);
   do {
      expand0 += `${(expand0 == String.fromCharCode(84,0) ? expand0.length : icondownimgL)}`;
      if (iconmegaphonek) {
         break;
      }
   } while (((expand0.length ^ 2) == 3 && 4 == (icondownimgL ^ 2)) && iconmegaphonek);
       let suboutD = String.fromCharCode(109,95,54,53,95,100,97,115,104,101,110,99,0);
       let becomeH = String.fromCharCode(122,95,51,57,95,112,107,116,104,100,114,0);
       let shrunks = String.fromCharCode(112,97,100,100,105,110,103,95,117,95,53,49,0);
      let inouttargetredx = String.fromCharCode(54,97,52,107,121,57,106,115,53,117,0) == suboutD;
      do {
         suboutD += `${shrunks.length}`;
         if (inouttargetredx) {
            break;
         }
      } while ((becomeH == suboutD) && inouttargetredx);
         becomeH = `${(String.fromCharCode(114,0) == suboutD ? suboutD.length : shrunks.length)}`;
      let plashJ = 9033570 <= suboutD.length;
      do {
         suboutD = `${shrunks.length}`;
         if (plashJ) {
            break;
         }
      } while (plashJ && (suboutD.length >= 3));
         becomeH = `${shrunks.length / 3}`;
      if (shrunks != String.fromCharCode(102,0)) {
          let runtimeschedulerG = String.fromCharCode(115,101,99,112,107,95,122,95,54,53,0);
          let prediction5 = 0.0;
          let yellowV = String.fromCharCode(114,95,55,50,95,99,111,110,100,0);
          let targete = 0;
          let whitetickV: Array<any> = [String.fromCharCode(120,95,53,49,95,117,110,98,111,120,101,100,0), String.fromCharCode(112,95,55,49,95,115,99,114,101,101,110,115,0), String.fromCharCode(99,111,110,116,114,111,108,108,101,100,95,103,95,55,57,0)];
         becomeH = `${targete - 2}`;
         runtimeschedulerG = `${(yellowV == String.fromCharCode(97,0) ? whitetickV.length : yellowV.length)}`;
         prediction5 += (parseFloat(`${yellowV == String.fromCharCode(70,0) ? parseInt(`${prediction5}`) : yellowV.length}`));
         targete %= Math.max(runtimeschedulerG.length, 1);
         whitetickV.push(yellowV.length);
      }
         shrunks = `${suboutD.length}`;
      let catalogY = 9750919 >= suboutD.length;
      do {
         suboutD = `${(suboutD == String.fromCharCode(52,0) ? becomeH.length : suboutD.length)}`;
         if (catalogY) {
            break;
         }
      } while (catalogY && (shrunks != suboutD));
      while (suboutD != String.fromCharCode(52,0) && 5 > becomeH.length) {
          let javaW = 3.0;
          let dragcloseK = false;
          let mergerl = 1.0;
          let largesoundm = 2;
          let shootnogoalo: Array<any> = [347, 621, 794];
         becomeH += "1";
         javaW -= parseInt(`${mergerl}`) * parseInt(`${javaW}`);
         dragcloseK = parseFloat(`${largesoundm}`) >= mergerl;
         largesoundm <<= Math.min(1, Math.abs(largesoundm * shootnogoalo.length));
         shootnogoalo = [3];
         break;
      }
         shrunks = `${(String.fromCharCode(117,0) == shrunks ? becomeH.length : shrunks.length)}`;
      langK /= Math.max(5, parseFloat(`${2}`));
      connectionP += `${iconrefreshR.length >> (Math.min(Math.abs(3), 1))}`;

    if (banner) {

   let whitesmalltickK = icondownimgL <= 5214179;
   do {
       let baseB = String.fromCharCode(122,95,55,50,95,109,98,117,102,0);
       let rewardd = String.fromCharCode(102,108,101,120,105,98,108,101,95,103,95,50,48,0);
       let smallR: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,101,113,117,105,118,97,108,101,110,99,101,0),556], [String.fromCharCode(102,95,52,95,115,116,114,117,99,116,117,114,101,115,0),705], [String.fromCharCode(112,114,101,112,97,114,105,110,103,95,115,95,55,51,0),263]]);
       let telegramY: Array<any> = [336, 1, 381];
      let malaysian = baseB == String.fromCharCode(53,112,98,114,119,54,115,111,0);
      do {
          let defaultlogoj: Array<any> = [184, 626, 802];
          let types2 = String.fromCharCode(114,101,113,117,101,115,116,101,114,95,109,95,56,51,0);
          let libnmsI = String.fromCharCode(102,95,55,51,95,101,99,114,101,100,0);
         baseB = `${types2.length % 3}`;
         defaultlogoj.push(libnmsI.length + 3);
         types2 += "2";
         libnmsI += `${defaultlogoj.length % (Math.max(10, libnmsI.length))}`;
         if (malaysian) {
            break;
         }
      } while ((telegramY.length >= 1) && malaysian);
      for (let c = 0; c < 1; c++) {
         smallR.set(rewardd, rewardd.length);
      }
      if (2 > (rewardd.length & smallR.size) || 5 > (rewardd.length & 2)) {
         smallR = new Map([[rewardd, 3]]);
      }
       let runtimeH = false;
         smallR = new Map([[`${telegramY.length}`, (baseB == String.fromCharCode(53,0) ? baseB.length : telegramY.length)]]);
         smallR = new Map([[`${runtimeH}`, (baseB == String.fromCharCode(112,0) ? (runtimeH ? 4 : 1) : baseB.length)]]);
       let securityc = String.fromCharCode(99,95,50,54,95,117,108,97,119,0);
      while ((smallR.size - 3) >= 3 && (3 - smallR.size) >= 1) {
         smallR.set(baseB, telegramY.length % 1);
         break;
      }
      if (runtimeH) {
         runtimeH = !rewardd.includes(`${runtimeH}`);
      }
      let dependenciesH = 8036547 <= securityc.length;
      do {
         securityc = `${baseB.length}`;
         if (dependenciesH) {
            break;
         }
      } while (dependenciesH && (1 <= securityc.length));
         baseB = "3";
          let ccopy_n1 = 5.0;
          let libavfilter6 = String.fromCharCode(99,95,56,53,95,99,102,116,121,112,101,114,101,102,0);
         smallR.set(`${ccopy_n1}`, smallR.size);
         ccopy_n1 -= libavfilter6.length >> (Math.min(Math.abs(1), 1));
         libavfilter6 += `${libavfilter6.length}`;
      icondownimgL /= Math.max(2, 1);
      if (whitesmalltickK) {
         break;
      }
   } while (whitesmalltickK && ((3 - expand0.length) < 4 && (3 - expand0.length) < 4));
       let away0 = String.fromCharCode(114,95,50,56,95,105,114,97,110,100,0);
       let libcxxcomponentsa = false;
       let borderlessU = 1.0;
      for (let u = 0; u < 2; u++) {
         libcxxcomponentsa = 79 <= away0.length;
      }
      let subsP = libcxxcomponentsa ? !libcxxcomponentsa : libcxxcomponentsa;
      do {
         libcxxcomponentsa = !libcxxcomponentsa && borderlessU == 92.66;
         if (subsP) {
            break;
         }
      } while (subsP && (away0.length > 5));
          let d_player5: Map<any, any> = new Map([[String.fromCharCode(106,95,49,49,95,112,114,105,118,97,116,101,0),556], [String.fromCharCode(115,117,98,112,97,116,104,95,122,95,53,56,0),520], [String.fromCharCode(112,111,105,110,116,95,110,95,53,56,0),94]]);
          let yellowanimationlive4: Array<any> = [223, 112, 264];
          let backward_ = 3.0;
         borderlessU -= parseFloat(`${3 & yellowanimationlive4.length}`);
         d_player5.set(`${backward_}`, d_player5.size);
         yellowanimationlive4.push(parseInt(`${backward_}`) | d_player5.size);
      if (!libcxxcomponentsa && 4 < away0.length) {
         away0 = `${3 / (Math.max(2, away0.length))}`;
      }
          let currentF: Array<any> = [576, 335, 228];
          let tailo = false;
         libcxxcomponentsa = currentF.length == 88;
         currentF = [((tailo ? 1 : 4))];
       let successP = 0;
       let megaphoneY = 2;
      for (let l = 0; l < 3; l++) {
         libcxxcomponentsa = 74.49 < borderlessU || libcxxcomponentsa;
      }
          let iconclosewhitebgk = 3.0;
          let modeA = false;
          let acopy_ngk = false;
         borderlessU -= parseFloat(`${successP | megaphoneY}`);
         iconclosewhitebgk *= parseFloat(`${parseInt(`${iconclosewhitebgk}`) >> (Math.min(1, Math.abs(3)))}`);
         modeA = !modeA;
         acopy_ngk = !modeA;
         libcxxcomponentsa = !libcxxcomponentsa;
      connectionP += `${away0.length * 2}`;
       let friendsy = String.fromCharCode(115,101,110,100,116,111,95,106,95,55,0);
       let valuesF = 1;
      if (friendsy.startsWith(`${valuesF}`)) {
         valuesF %= Math.max(friendsy.length << (Math.min(Math.abs(1), 1)), 1);
      }
      for (let v = 0; v < 3; v++) {
         valuesF += (friendsy == String.fromCharCode(69,0) ? friendsy.length : valuesF);
      }
      let sigmobw = valuesF <= 8950690;
      do {
          let mbsplashz = 1;
          let brightnessm = String.fromCharCode(117,115,101,114,115,112,97,99,101,95,116,95,57,54,0);
         valuesF -= 3;
         mbsplashz += 1 + brightnessm.length;
         brightnessm = `${brightnessm.length}`;
         if (sigmobw) {
            break;
         }
      } while ((friendsy.startsWith(`${valuesF}`)) && sigmobw);
         valuesF /= Math.max(3 + friendsy.length, 2);
          let bodani = String.fromCharCode(121,95,53,52,95,100,114,111,112,112,101,100,0);
         friendsy += `${2 ^ bodani.length}`;
      while (1 == (5 | valuesF)) {
         valuesF ^= 2;
         break;
      }
      expand0 += `${icondownimgL}`;
      iconsettingP += `${(String.fromCharCode(85,0) == expand0 ? expand0.length : dangerl)}`;
      expand0 += `${(String.fromCharCode(99,0) == iconsettingP ? expand0.length : iconsettingP.length)}`;
      setBannerAd(banner);
    } else {

   while (3 < (connectionP.length % (Math.max(5, 8)))) {
      langK += parseFloat(`${parseInt(`${langK}`) * 1}`);
      break;
   }
      langK *= parseFloat(`${2 - expand0.length}`);
   if ((dangerl / (Math.max(6, vipsport7))) == 3.20) {
      vipsport7 += parseFloat(`${3 | iconsettingP.length}`);
   }
   for (let e = 0; e < 3; e++) {
      expand0 = "2";
   }
       let schedulerz = 3;
       let rules3 = false;
         schedulerz ^= 3;
         schedulerz &= ((rules3 ? 3 : 5) * schedulerz);
          let infor: Array<any> = [578, 128];
         schedulerz ^= 2 ^ infor.length;
         schedulerz -= 3;
          let a_view9: Array<any> = [786, 791, 392];
          let spinnern = String.fromCharCode(101,108,115,116,95,49,95,53,48,0);
         schedulerz <<= Math.min(5, Math.abs(1));
         a_view9 = [a_view9.length % (Math.max(spinnern.length, 1))];
         spinnern += `${a_view9.length | spinnern.length}`;
       let transferO = 3.0;
      iconrefreshR += `${schedulerz / (Math.max(icondownimgL, 1))}`;
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  const shouldShowAds = async () => {
       let viewers = 2;
    let styleT: Array<any> = [942, 978, 618];
    let owngoalZ = 0.0;
    let signinup9 = String.fromCharCode(109,95,56,56,95,101,120,116,101,110,100,101,101,0);
    let whitei: Map<any, any> = new Map([[String.fromCharCode(97,95,50,52,95,116,114,97,110,115,112,111,115,101,100,0),970], [String.fromCharCode(121,95,54,50,95,99,104,97,116,115,0),558], [String.fromCharCode(108,111,97,100,105,110,103,95,50,95,53,49,0),717]]);
    let profileactivem: Array<any> = [462, 483];
    let componentregistryE = 5.0;
    let qaagW = 0.0;
    let iconsubssuccessy = String.fromCharCode(97,95,51,48,95,111,108,107,97,100,111,116,0);
    let rightb = String.fromCharCode(114,95,53,50,95,100,101,108,105,109,105,116,101,114,115,0);
    let homeF: Array<any> = [302, 431, 283];
    let libloggere = String.fromCharCode(107,95,54,57,95,99,111,109,112,97,110,100,0);
    let textinputm = String.fromCharCode(106,95,49,57,95,105,116,108,101,0);
    let whiteanimationliveg = 4.0;
       let mbridgeb: Array<any> = [133, 134, 531];
       let iconmegaphoneC = 4;
       let libjsiC = String.fromCharCode(110,95,52,95,98,105,116,109,97,115,107,0);
      let edity = libjsiC == String.fromCharCode(49,117,97,53,104,106,109,115,0);
      do {
         libjsiC += `${mbridgeb.length / (Math.max(libjsiC.length, 10))}`;
         if (edity) {
            break;
         }
      } while (edity && (libjsiC.length == iconmegaphoneC));
          let yellowvideoliveo = 4.0;
          let indicator8 = true;
         libjsiC = `${mbridgeb.length ^ 1}`;
         yellowvideoliveo -= 3 - parseInt(`${yellowvideoliveo}`);
         indicator8 = 88.52 == yellowvideoliveo;
         mbridgeb.push(3);
         libjsiC += `${iconmegaphoneC}`;
         iconmegaphoneC += libjsiC.length * mbridgeb.length;
          let short_hh = String.fromCharCode(100,95,56,49,95,116,114,105,97,108,115,0);
         iconmegaphoneC &= short_hh.length << (Math.min(Math.abs(2), 5));
      let bgvipsportg = iconmegaphoneC <= 9846661;
      do {
         iconmegaphoneC /= Math.max(2, libjsiC.length | 1);
         if (bgvipsportg) {
            break;
         }
      } while ((1 > (2 ^ libjsiC.length)) && bgvipsportg);
      while (iconmegaphoneC == 1) {
         mbridgeb.push(mbridgeb.length);
         break;
      }
          let reactnavigationE = 2.0;
          let loadingu: Map<any, any> = new Map([[String.fromCharCode(110,95,53,57,95,116,111,116,97,108,115,0),753], [String.fromCharCode(104,95,57,52,95,115,116,97,114,116,114,101,101,0),422]]);
          let predictionactiveR: Map<any, any> = new Map([[String.fromCharCode(121,95,53,48,95,99,104,97,110,103,101,114,101,102,0),563], [String.fromCharCode(102,95,51,54,95,100,105,115,115,111,108,118,101,0),704]]);
         libjsiC += `${3 & loadingu.size}`;
         reactnavigationE /= Math.max(parseFloat(`${predictionactiveR.size - parseInt(`${reactnavigationE}`)}`), 3);
         loadingu = new Map([[`${predictionactiveR.size}`, predictionactiveR.size]]);
      signinup9 += `${(String.fromCharCode(82,0) == rightb ? parseInt(`${owngoalZ}`) : rightb.length)}`;
       let profileT = String.fromCharCode(98,105,116,114,101,118,95,57,95,48,0);
       let watchnowbg9 = 1;
       let holderg = 4;
          let templateprocessorh = 1.0;
          let storeg = 1.0;
          let assistC = String.fromCharCode(107,95,53,56,95,114,101,108,111,97,100,101,114,0);
         holderg ^= profileT.length / 2;
         templateprocessorh -= (parseFloat(`${String.fromCharCode(48,0) == assistC ? parseInt(`${storeg}`) : assistC.length}`));
         storeg -= parseFloat(`${1 << (Math.min(5, assistC.length))}`);
      while (1 <= (1 | watchnowbg9)) {
         profileT += `${watchnowbg9 - 2}`;
         break;
      }
       let termsP = false;
       let refreshborderlessN = true;
      while (termsP) {
         termsP = ((profileT.length << (Math.min(2, Math.abs((refreshborderlessN ? 31 : profileT.length))))) < 31);
         break;
      }
       let iconshareo: Map<any, any> = new Map([[String.fromCharCode(120,95,56,55,95,114,101,112,108,97,99,101,100,0),975], [String.fromCharCode(111,95,51,52,95,114,101,110,100,101,114,97,98,108,101,0),98], [String.fromCharCode(98,95,51,52,95,109,115,109,112,101,103,0),231]]);
       let libfbH: Map<any, any> = new Map([[String.fromCharCode(104,95,57,51,95,114,101,100,105,114,101,99,116,111,114,0),313], [String.fromCharCode(111,95,56,55,95,115,117,98,112,105,120,101,108,0),664]]);
      for (let h = 0; h < 3; h++) {
          let emojihearto = String.fromCharCode(117,95,51,56,95,119,101,98,115,111,99,107,101,116,0);
          let videocommon2: Array<any> = [290, 207];
          let libfbjniV: Map<any, any> = new Map([[String.fromCharCode(119,95,50,56,95,115,107,101,119,0),623], [String.fromCharCode(99,104,97,114,103,101,95,54,95,52,50,0),769], [String.fromCharCode(110,95,55,56,95,114,101,102,111,99,117,115,0),647]]);
          let cornershoot4: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,52,95,54,55,0),929], [String.fromCharCode(111,117,116,113,95,56,95,57,50,0),997], [String.fromCharCode(116,95,57,57,95,98,105,110,100,0),341]]);
          let codek = String.fromCharCode(99,95,49,51,95,104,112,101,108,100,115,112,0);
         iconshareo = new Map([[`${libfbH.size}`, 2 ^ watchnowbg9]]);
         emojihearto += `${codek.length}`;
         videocommon2.push(codek.length);
         libfbjniV.set(`${cornershoot4.size}`, libfbjniV.size | cornershoot4.size);
      }
      for (let g = 0; g < 3; g++) {
         holderg |= iconshareo.size;
      }
         holderg &= 1;
         holderg *= watchnowbg9;
      signinup9 += `${3 % (Math.max(1, parseInt(`${owngoalZ}`)))}`;
   let regengf = owngoalZ >= 4956200.0;
   do {
      owngoalZ -= rightb.length >> (Math.min(Math.abs(2), 2));
      if (regengf) {
         break;
      }
   } while (regengf && (1.63 < (componentregistryE + owngoalZ)));
      iconsubssuccessy = `${rightb.length}`;
       let eighteenH = String.fromCharCode(105,95,53,49,95,109,98,117,102,0);
       let largesoundw = 0.0;
       let zhuboH: Array<any> = [938, 230, 27];
      if ((5 + zhuboH.length) <= 2) {
          let mbbidd = 5.0;
          let orangeuparrowq = String.fromCharCode(98,97,110,95,115,95,53,51,0);
          let brightnessX = false;
         eighteenH += `${eighteenH.length}`;
         mbbidd += parseFloat(`${orangeuparrowq.length >> (Math.min(Math.abs(3), 4))}`);
         orangeuparrowq += `${((brightnessX ? 5 : 1))}`;
         brightnessX = orangeuparrowq.includes(`${brightnessX}`);
      }
          let sheet5 = 3.0;
          let sideJ = String.fromCharCode(107,95,55,95,109,112,101,103,97,117,100,105,111,100,115,112,0);
          let predictionactiveE: Array<any> = [656, 377];
         zhuboH.push(parseInt(`${sheet5}`) | zhuboH.length);
         sheet5 /= Math.max(2, parseFloat(`${sideJ.length}`));
         sideJ = `${(String.fromCharCode(52,0) == sideJ ? sideJ.length : predictionactiveE.length)}`;
         predictionactiveE = [sideJ.length];
         eighteenH = `${parseInt(`${largesoundw}`) % (Math.max(zhuboH.length, 8))}`;
         largesoundw *= parseInt(`${largesoundw}`);
      let fullB = largesoundw >= 8592591.0;
      do {
         largesoundw *= (String.fromCharCode(86,0) == eighteenH ? eighteenH.length : zhuboH.length);
         if (fullB) {
            break;
         }
      } while (fullB && (2.28 == largesoundw));
      let telegramp = 6249057.0 <= largesoundw;
      do {
          let iconarrowrightorangeU = 3.0;
          let service2 = 1.0;
          let match7: Array<any> = [String.fromCharCode(116,95,57,51,95,101,115,116,105,109,97,116,101,0), String.fromCharCode(118,101,114,105,102,105,101,100,95,104,95,54,0)];
          let othermatchdetailbgy: Map<any, any> = new Map([[String.fromCharCode(104,95,49,53,95,109,117,116,101,0),219], [String.fromCharCode(97,115,111,108,117,116,101,95,111,95,52,51,0),335]]);
          let fast0: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,101,110,99,101,95,114,95,50,0),981], [String.fromCharCode(116,95,49,56,95,105,110,100,105,99,101,115,0),501]]);
         largesoundw *= zhuboH.length ^ eighteenH.length;
         iconarrowrightorangeU *= parseFloat(`${match7.length / 3}`);
         service2 -= 2;
         match7 = [fast0.size];
         othermatchdetailbgy.set(`${iconarrowrightorangeU}`, parseInt(`${iconarrowrightorangeU}`) - match7.length);
         fast0 = new Map([[`${othermatchdetailbgy.size}`, parseInt(`${iconarrowrightorangeU}`)]]);
         if (telegramp) {
            break;
         }
      } while (telegramp && (eighteenH.endsWith(`${largesoundw}`)));
      let singaporeQ = 7044996.0 >= largesoundw;
      do {
         largesoundw += parseInt(`${largesoundw}`);
         if (singaporeQ) {
            break;
         }
      } while (((1 % (Math.max(6, zhuboH.length))) == 5 || 2.99 == (zhuboH.length - largesoundw)) && singaporeQ);
         largesoundw += (eighteenH == String.fromCharCode(53,0) ? parseInt(`${largesoundw}`) : eighteenH.length);
         eighteenH = `${eighteenH.length / 3}`;
      signinup9 = `${homeF.length ^ iconsubssuccessy.length}`;
   for (let u = 0; u < 1; u++) {
      qaagW *= parseFloat(`${signinup9.length | iconsubssuccessy.length}`);
   }
      whitei = new Map([[`${homeF.length}`, 2 ^ libloggere.length]]);
       let awayplayerG = String.fromCharCode(103,95,49,54,95,119,101,101,107,0);
       let filled3 = 5.0;
       let orangeuparrow_ = false;
         filled3 /= Math.max(1, ((orangeuparrow_ ? 1 : 1)));
          let yellowR = String.fromCharCode(109,117,108,114,101,115,95,122,95,49,55,0);
          let iconviewergifu = false;
          let reactnativejs6 = String.fromCharCode(115,99,97,110,115,116,97,116,117,115,95,102,95,57,51,0);
         filled3 /= Math.max(5, (String.fromCharCode(67,0) == reactnativejs6 ? (iconviewergifu ? 1 : 1) : reactnativejs6.length));
         yellowR += "2";
         iconviewergifu = (yellowR.length - yellowR.length) > 53;
         awayplayerG = `${parseInt(`${filled3}`) | awayplayerG.length}`;
          let incidentM: Map<any, any> = new Map([[String.fromCharCode(120,95,49,52,95,109,100,104,100,0),String.fromCharCode(109,117,116,97,116,105,110,103,95,118,95,53,56,0)], [String.fromCharCode(116,95,56,54,95,109,97,105,110,98,117,110,100,108,101,0),String.fromCharCode(109,95,54,55,95,115,101,114,105,97,108,105,122,97,98,108,101,0)]]);
         awayplayerG = `${incidentM.size}`;
         filled3 += 3 * parseInt(`${filled3}`);
         filled3 += 2 - parseInt(`${filled3}`);
      while ((awayplayerG.length % 5) == 5 && 5 == (5 | awayplayerG.length)) {
         awayplayerG += "3";
         break;
      }
         awayplayerG += `${((orangeuparrow_ ? 2 : 3) - parseInt(`${filled3}`))}`;
         awayplayerG = "2";
      styleT = [libloggere.length + 2];
       let iconmegaphonel = String.fromCharCode(97,108,112,104,97,95,55,95,52,55,0);
       let sorty = String.fromCharCode(109,111,118,101,116,111,95,118,95,51,48,0);
          let themeY = false;
          let dialogk: Map<any, any> = new Map([[String.fromCharCode(121,95,53,54,95,112,99,109,117,0),720], [String.fromCharCode(117,95,56,57,95,115,117,98,116,101,114,109,0),250], [String.fromCharCode(106,95,49,54,95,115,116,121,108,101,115,0),238]]);
         sorty = `${iconmegaphonel.length % (Math.max(sorty.length, 7))}`;
         themeY = (82 >= ((themeY ? 82 : dialogk.size) + dialogk.size));
      if (iconmegaphonel.length >= 1 || sorty == String.fromCharCode(48,0)) {
         sorty += `${sorty.length & iconmegaphonel.length}`;
      }
      componentregistryE *= 1;
      whitei = new Map([[`${homeF.length}`, 3]]);

    if (!isVip) {

   let modulen = whitei.size <= 6258670;
   do {
       let eventr = String.fromCharCode(109,101,110,117,95,110,95,52,53,0);
       let long_wl = String.fromCharCode(99,111,108,120,95,114,95,54,51,0);
         long_wl = `${2 ^ long_wl.length}`;
      while (eventr != long_wl) {
         long_wl = `${1 & long_wl.length}`;
         break;
      }
      let iconclosewhite3 = eventr == String.fromCharCode(101,98,122,0);
      do {
          let historyr = 3.0;
          let showe = 0.0;
         eventr += "3";
         historyr /= Math.max(1, parseInt(`${showe}`));
         if (iconclosewhite3) {
            break;
         }
      } while ((long_wl.endsWith(eventr)) && iconclosewhite3);
          let comment2: Map<any, any> = new Map([[String.fromCharCode(119,95,51,56,95,104,121,112,111,116,104,101,115,101,115,0),String.fromCharCode(106,95,50,48,95,104,97,115,104,101,114,0)], [String.fromCharCode(109,95,50,57,95,100,98,108,113,117,111,116,101,0),String.fromCharCode(119,97,114,110,95,107,95,51,53,0)]]);
         long_wl += "3";
         comment2.set(`${comment2.size}`, comment2.size % (Math.max(comment2.size, 7)));
         long_wl += `${long_wl.length}`;
      let iconbellH = long_wl == String.fromCharCode(101,122,118,51,100,122,107,117,109,109,0);
      do {
          let liblogger8 = 1.0;
          let logo6: Map<any, any> = new Map([[String.fromCharCode(115,116,97,99,107,101,100,95,115,95,55,53,0),586], [String.fromCharCode(115,95,56,48,95,112,117,115,104,101,100,0),172]]);
         long_wl += `${parseInt(`${liblogger8}`) | 1}`;
         liblogger8 *= parseFloat(`${logo6.size >> (Math.min(Math.abs(logo6.size), 3))}`);
         if (iconbellH) {
            break;
         }
      } while ((3 >= long_wl.length && eventr == String.fromCharCode(85,0)) && iconbellH);
      whitei = new Map([[`${whitei.size}`, whitei.size % (Math.max(homeF.length, 5))]]);
      if (modulen) {
         break;
      }
   } while (modulen && ((whitei.size / (Math.max(10, owngoalZ))) >= 3.50));
      libloggere += `${(String.fromCharCode(104,0) == libloggere ? libloggere.length : styleT.length)}`;
       let default_hiJ = String.fromCharCode(110,95,50,57,95,102,111,114,109,97,116,116,101,100,0);
       let halffieldimageP = 5.0;
       let helperG = 2.0;
      let privatechatbgy = 9824813.0 <= helperG;
      do {
         helperG *= parseFloat(`${parseInt(`${halffieldimageP}`) - 1}`);
         if (privatechatbgy) {
            break;
         }
      } while ((halffieldimageP < helperG) && privatechatbgy);
      let uimanagert = String.fromCharCode(53,110,115,0) == default_hiJ;
      do {
         default_hiJ += `${parseInt(`${halffieldimageP}`) << (Math.min(2, Math.abs(1)))}`;
         if (uimanagert) {
            break;
         }
      } while ((halffieldimageP < 4.43) && uimanagert);
      for (let h = 0; h < 2; h++) {
         default_hiJ = `${2 ^ default_hiJ.length}`;
      }
      for (let z = 0; z < 2; z++) {
         default_hiJ = `${parseInt(`${helperG}`) - parseInt(`${halffieldimageP}`)}`;
      }
      while (1.61 >= (halffieldimageP * 5.90)) {
          let leaguedetailsbg3 = 1.0;
         halffieldimageP *= parseFloat(`${parseInt(`${leaguedetailsbg3}`)}`);
         break;
      }
          let dataX = 4;
         halffieldimageP *= parseFloat(`${parseInt(`${helperG}`)}`);
         dataX |= dataX;
         halffieldimageP *= parseFloat(`${default_hiJ.length + parseInt(`${halffieldimageP}`)}`);
       let basketballicon0 = String.fromCharCode(105,95,51,50,95,116,111,107,101,110,105,122,101,0);
       let whistlea = String.fromCharCode(105,95,50,95,114,111,119,0);
      while (1 < basketballicon0.length) {
         halffieldimageP -= parseFloat(`${default_hiJ.length * whistlea.length}`);
         break;
      }
      homeF.push((iconsubssuccessy == String.fromCharCode(89,0) ? iconsubssuccessy.length : parseInt(`${halffieldimageP}`)));
   for (let i = 0; i < 1; i++) {
       let libreactnativejniQ = String.fromCharCode(97,110,105,109,97,116,97,98,108,101,95,56,95,49,54,0);
       let disconnectedlogoh = 1;
       let stationsX = 1.0;
       let graph2: Array<any> = [366, 817, 996];
       let defaultbasketballbgk = true;
      let redcirclebgK = stationsX >= 9059198.0;
      do {
          let weiboF = String.fromCharCode(99,95,54,48,95,116,114,117,110,0);
          let cricketU = String.fromCharCode(122,95,53,50,95,115,104,97,100,111,119,0);
         stationsX *= (parseFloat(`${weiboF == String.fromCharCode(118,0) ? cricketU.length : weiboF.length}`));
         if (redcirclebgK) {
            break;
         }
      } while (((graph2.length / 2) <= 3 || (stationsX * parseFloat(`${graph2.length}`)) <= 3.8) && redcirclebgK);
          let cornerC = false;
         graph2 = [graph2.length * 1];
         cornerC = cornerC || !cornerC;
         defaultbasketballbgk = libreactnativejniQ == String.fromCharCode(101,0) && disconnectedlogoh >= 6;
      if (defaultbasketballbgk && libreactnativejniQ.length < 3) {
         defaultbasketballbgk = disconnectedlogoh <= parseInt(`${stationsX}`);
      }
          let membershipP = 0;
         libreactnativejniQ += `${graph2.length}`;
         membershipP >>= Math.min(Math.abs(membershipP << (Math.min(Math.abs(3), 3))), 5);
         defaultbasketballbgk = 7.57 < stationsX && !defaultbasketballbgk;
      let reactnativeultimatelistviewX = 7623117 <= disconnectedlogoh;
      do {
         disconnectedlogoh /= Math.max(4, 1 / (Math.max(1, libreactnativejniQ.length)));
         if (reactnativeultimatelistviewX) {
            break;
         }
      } while (reactnativeultimatelistviewX && (defaultbasketballbgk));
      if (!libreactnativejniQ.endsWith(`${disconnectedlogoh}`)) {
         disconnectedlogoh -= libreactnativejniQ.length;
      }
       let iconviewergifq = String.fromCharCode(109,105,100,108,95,114,95,53,52,0);
      for (let o = 0; o < 1; o++) {
         graph2.push(2);
      }
      for (let q = 0; q < 3; q++) {
         stationsX -= parseFloat(`${iconviewergifq.length}`);
      }
       let jnewsshare4: Array<any> = [870, 874, 677];
         graph2 = [jnewsshare4.length | 1];
      if (disconnectedlogoh < jnewsshare4.length) {
         disconnectedlogoh -= graph2.length >> (Math.min(3, Math.abs(parseInt(`${stationsX}`))));
      }
       let embedz = 3;
      profileactivem.push(1);
   }
      signinup9 = `${parseInt(`${qaagW}`)}`;
       let forward6 = 5;
       let castingL: Array<any> = [93, 59];
       let orange5 = String.fromCharCode(121,95,56,54,95,114,101,100,101,108,101,103,97,116,101,0);
         orange5 += `${forward6}`;
      while (2 <= castingL.length) {
         castingL = [castingL.length];
         break;
      }
          let connectionr = true;
         castingL.push(orange5.length);
         connectionr = (!connectionr ? connectionr : !connectionr);
       let sendb: Array<any> = [576, 959];
       let mbridget: Array<any> = [String.fromCharCode(119,95,54,49,95,112,100,102,0), String.fromCharCode(109,95,51,55,95,97,118,97,105,108,0), String.fromCharCode(117,110,99,97,99,104,101,100,95,55,95,57,51,0)];
         forward6 += 2;
       let hookx = 3.0;
         sendb = [3 - castingL.length];
      for (let d = 0; d < 1; d++) {
         mbridget.push(mbridget.length);
      }
      if (2 == castingL.length) {
         forward6 &= parseInt(`${hookx}`) >> (Math.min(3, Math.abs(3)));
      }
      rightb = `${parseInt(`${owngoalZ}`) - 1}`;
       let basketballplayerplaceholderD = 2;
       let carouselZ = String.fromCharCode(120,95,57,95,101,109,98,101,100,100,105,110,103,0);
         carouselZ += `${basketballplayerplaceholderD >> (Math.min(carouselZ.length, 5))}`;
          let phonesharep = String.fromCharCode(112,101,97,99,104,95,121,95,52,53,0);
          let pangler = String.fromCharCode(114,101,100,101,108,101,103,97,116,101,95,119,95,52,57,0);
          let iconviewers = 1;
         carouselZ += `${(String.fromCharCode(103,0) == phonesharep ? phonesharep.length : carouselZ.length)}`;
         pangler += "2";
         iconviewers ^= iconviewers - pangler.length;
      while (1 <= (basketballplayerplaceholderD & 4)) {
         basketballplayerplaceholderD %= Math.max(basketballplayerplaceholderD, 1);
         break;
      }
         carouselZ = "3";
      for (let e = 0; e < 3; e++) {
          let rewindh = 4.0;
          let homeinactiveI = String.fromCharCode(99,95,53,52,95,103,101,111,116,97,103,115,0);
          let matchactiveh = String.fromCharCode(112,108,97,99,101,115,95,54,95,57,57,0);
         carouselZ += `${homeinactiveI.length - 2}`;
         rewindh += 2;
         homeinactiveI = `${parseInt(`${rewindh}`) >> (Math.min(matchactiveh.length, 3))}`;
         matchactiveh += `${1 << (Math.min(3, Math.abs(parseInt(`${rewindh}`))))}`;
      }
         carouselZ += `${carouselZ.length + 3}`;
      homeF = [2];
   for (let j = 0; j < 2; j++) {
      profileactivem.push(parseInt(`${componentregistryE}`));
   }
      libloggere = "3";
   for (let f = 0; f < 2; f++) {
      owngoalZ -= 1;
   }
      fetchBannerAd();
    } else {

   while ((viewers / (Math.max(8, owngoalZ))) == 5.64) {
      viewers += 3;
      break;
   }
   if (4 >= (styleT.length % (Math.max(6, homeF.length))) || (homeF.length % 4) >= 4) {
      homeF.push(2);
   }
      whitei.set(libloggere, libloggere.length);
      componentregistryE += signinup9.length;
   if (qaagW <= componentregistryE) {
      componentregistryE += 3;
   }
   let notificationgrayh = 5814140.0 >= owngoalZ;
   do {
      owngoalZ /= Math.max(5, rightb.length);
      if (notificationgrayh) {
         break;
      }
   } while (notificationgrayh && ((owngoalZ * styleT.length) <= 3.18 || 3 <= (styleT.length * parseInt(`${owngoalZ}`))));
   for (let q = 0; q < 3; q++) {
      signinup9 = `${homeF.length}`;
   }
      viewers %= Math.max(1, rightb.length);
   let imagenetworkerr4 = iconsubssuccessy == String.fromCharCode(95,113,49,101,49,51,117,52,54,54,0);
   do {
      iconsubssuccessy += `${(libloggere == String.fromCharCode(116,0) ? homeF.length : libloggere.length)}`;
      if (imagenetworkerr4) {
         break;
      }
   } while (((styleT.length | iconsubssuccessy.length) >= 1) && imagenetworkerr4);
   while (whiteanimationliveg > 5.34) {
      whiteanimationliveg -= parseInt(`${whiteanimationliveg}`);
      break;
   }
      setBannerAd(undefined);
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
    item: { date: string | undefined; data: yysFavoriteNetwork | undefined };
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

              {(index + 1) % 5 === 0 && bannerAd && (
                <View style={{
                  paddingVertical: 5
                }}>
                  <BannerContainer
                    bannerAd={bannerAd}
                    onMount={({ id, name, slot_id, title }) => {
                      yys_giftbutton_footballtrophy.sportBannerViewAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                    onPress={({ id, name, slot_id, title }) => {
                      yys_giftbutton_footballtrophy.sportBannerClickAnalytics({
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
       let philippines4 = 2.0;
    let wifirouter9 = 0.0;
    let langh: Map<any, any> = new Map([[String.fromCharCode(107,95,54,57,95,100,107,101,121,0),true ], [String.fromCharCode(102,102,109,97,116,104,95,56,95,50,56,0),false ]]);
    let iconqqP: Array<any> = [287, 26, 756];
    let networkI = String.fromCharCode(99,108,105,112,112,101,100,95,98,95,49,48,48,0);
    let minil = 5.0;
    let configT = 3.0;
    let leaguedetailsbgC: Array<any> = [136, 462, 545];
    let showless3: Map<any, any> = new Map([[String.fromCharCode(105,95,49,50,95,118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,0),String.fromCharCode(100,105,110,102,95,49,95,55,48,0)], [String.fromCharCode(115,95,50,55,95,115,111,108,105,100,105,116,121,0),String.fromCharCode(121,95,48,95,113,117,97,108,105,102,105,101,114,115,0)]]);
    let formi = 2.0;
    let time_00Y: Map<any, any> = new Map([[String.fromCharCode(121,95,53,53,95,114,101,99,101,112,116,105,111,110,0),true ], [String.fromCharCode(120,95,52,50,95,115,111,109,101,0),true ]]);
    let iconwatchg = String.fromCharCode(115,95,54,48,95,111,114,105,103,105,110,115,0);
    let t_countx = true;
    let minimize6 = String.fromCharCode(113,95,56,52,95,98,105,116,114,118,0);
    let animationQ = String.fromCharCode(120,95,56,51,95,116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,0);
    let halffieldimageq = String.fromCharCode(104,95,55,57,95,98,105,103,116,114,101,101,0);
    let hometeamfield1: Map<any, any> = new Map([[String.fromCharCode(100,95,57,48,95,100,105,97,109,101,116,101,114,0),139], [String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,95,118,95,54,52,0),278]]);
    let styleI = String.fromCharCode(97,115,99,101,110,100,105,110,103,95,120,95,56,0);
    let iconsubssuccess7 = String.fromCharCode(116,95,57,50,95,114,101,112,111,114,116,0);
   if (5 > (networkI.length & iconqqP.length) || (5 & iconqqP.length) > 5) {
       let zoomK = String.fromCharCode(117,95,55,48,95,114,103,98,120,0);
       let profileA = true;
       let sentryb = 3.0;
         zoomK += `${(zoomK == String.fromCharCode(122,0) ? zoomK.length : (profileA ? 4 : 4))}`;
      while (1 == zoomK.length) {
         profileA = 66 > zoomK.length && sentryb > 55.29;
         break;
      }
      if (3.6 < (4.86 + sentryb)) {
         sentryb /= Math.max(3, zoomK.length);
      }
      if (3.53 == (sentryb + 2.54) && profileA) {
         sentryb *= ((profileA ? 3 : 2) + parseInt(`${sentryb}`));
      }
      if (4 < zoomK.length || !profileA) {
         profileA = String.fromCharCode(112,0) == zoomK;
      }
      let libcxxcomponentsJ = 9418403.0 >= sentryb;
      do {
         sentryb *= zoomK.length;
         if (libcxxcomponentsJ) {
            break;
         }
      } while (libcxxcomponentsJ && ((zoomK.length | 4) < 1 && 4 < (parseInt(`${sentryb}`) / (Math.max(zoomK.length, 2)))));
      if (2 >= zoomK.length) {
          let redcirclebgN = 4.0;
          let defaultpredictionprofile6: Map<any, any> = new Map([[String.fromCharCode(116,95,50,51,95,115,99,104,101,100,117,108,101,100,0),String.fromCharCode(102,95,53,54,95,117,110,97,118,97,105,108,97,98,101,0)], [String.fromCharCode(98,114,111,107,101,110,95,100,95,53,50,0),String.fromCharCode(118,95,57,95,97,118,111,112,116,105,111,110,115,0)], [String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,114,95,51,49,0),String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,95,55,95,54,52,0)]]);
          let orientationn = false;
         zoomK += `${parseInt(`${redcirclebgN}`)}`;
         redcirclebgN /= Math.max(((orientationn ? 1 : 5) >> (Math.min(Math.abs(2), 1))), 4);
         defaultpredictionprofile6.set(`${orientationn}`, defaultpredictionprofile6.size & 1);
      }
      let libavformat6 = sentryb >= 4987344.0;
      do {
         sentryb -= zoomK.length;
         if (libavformat6) {
            break;
         }
      } while ((1.35 <= sentryb) && libavformat6);
         profileA = String.fromCharCode(85,0) == zoomK && 87.59 >= sentryb;
      networkI = `${2 - parseInt(`${sentryb}`)}`;
   }
      configT /= Math.max(4, (parseFloat(`${networkI == String.fromCharCode(52,0) ? time_00Y.size : networkI.length}`)));
   if ((4.16 + configT) >= 1.53) {
       let recommendationF = String.fromCharCode(106,95,56,95,97,98,115,116,114,97,99,116,0);
       let countryJ = 2;
       let positionfieldb = true;
       let mimoO = 3.0;
      for (let p = 0; p < 3; p++) {
         countryJ &= 1 ^ parseInt(`${mimoO}`);
      }
         recommendationF += `${3 ^ recommendationF.length}`;
         positionfieldb = (mimoO + countryJ) == 47;
       let wnewarchdefaultsp = String.fromCharCode(121,95,57,52,95,114,101,112,108,121,0);
         countryJ -= ((positionfieldb ? 5 : 5) % (Math.max(3, wnewarchdefaultsp.length)));
      if (positionfieldb) {
          let ajaxu = String.fromCharCode(103,95,57,48,95,119,105,100,101,0);
         positionfieldb = parseInt(`${mimoO}`) <= recommendationF.length;
         ajaxu += "1";
      }
       let upgradeX: Array<any> = [549, 159, 503];
       let xvodL: Array<any> = [708, 647, 527];
      if (4 > recommendationF.length) {
         positionfieldb = positionfieldb || 40 > countryJ;
      }
         upgradeX.push(2);
      if (3 > (wnewarchdefaultsp.length ^ 1)) {
         mimoO += 3 >> (Math.min(4, wnewarchdefaultsp.length));
      }
      if (4 == (countryJ * 1) || countryJ == 1) {
         positionfieldb = 15 <= wnewarchdefaultsp.length;
      }
          let penaltyshootO = 0.0;
          let largeC: Map<any, any> = new Map([[String.fromCharCode(114,101,100,101,116,101,99,116,95,117,95,52,53,0),578], [String.fromCharCode(112,117,116,105,110,116,95,110,95,49,49,0),537], [String.fromCharCode(117,95,51,50,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0),655]]);
         countryJ ^= parseInt(`${mimoO}`);
         penaltyshootO *= largeC.size;
         largeC.set(`${penaltyshootO}`, largeC.size | 1);
      iconqqP = [time_00Y.size / (Math.max(8, networkI.length))];
   }
   if (3 > (iconqqP.length * parseInt(`${philippines4}`)) || 4 > (iconqqP.length * 3)) {
      iconqqP = [networkI.length];
   }
      configT /= Math.max(4, parseFloat(`${1 >> (Math.min(2, networkI.length))}`));
   if ((networkI.length & 5) == 3 || (time_00Y.size & 5) == 2) {
      networkI = `${leaguedetailsbgC.length << (Math.min(Math.abs(1), 1))}`;
   }
       let iconnewchatX = String.fromCharCode(97,115,102,99,114,121,112,116,95,52,95,53,48,0);
      while (1 > iconnewchatX.length) {
         iconnewchatX += `${iconnewchatX.length}`;
         break;
      }
      let livenodatabgimg4 = 5068587 <= iconnewchatX.length;
      do {
         iconnewchatX = `${iconnewchatX.length}`;
         if (livenodatabgimg4) {
            break;
         }
      } while ((iconnewchatX.length <= iconnewchatX.length) && livenodatabgimg4);
       let cornerkicke = 4.0;
      philippines4 /= Math.max(1, iconwatchg.length);

    setShowLoading(true);
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 });

    setTimeout(() => {

      networkI = `${parseInt(`${minil}`) - 2}`;
      langh.set(iconwatchg, iconwatchg.length);
   let valuesE = langh.size >= 7952273;
   do {
       let iconclosewhiteN: Map<any, any> = new Map([[String.fromCharCode(99,95,55,54,95,100,109,105,120,0),619], [String.fromCharCode(108,95,49,53,0),569]]);
       let plusJ = String.fromCharCode(112,111,119,95,119,95,53,54,0);
       let statsc = true;
       let iconlogoutl: Map<any, any> = new Map([[String.fromCharCode(113,95,51,54,95,112,98,107,100,102,0),297], [String.fromCharCode(100,95,51,53,95,99,101,110,116,114,111,105,100,115,0),574]]);
      let progressX = 8113859 <= iconclosewhiteN.size;
      do {
         iconclosewhiteN = new Map([[`${iconlogoutl.size}`, ((statsc ? 5 : 2) ^ iconlogoutl.size)]]);
         if (progressX) {
            break;
         }
      } while (progressX && ((iconclosewhiteN.size / (Math.max(plusJ.length, 7))) > 3));
         statsc = (30 <= (iconclosewhiteN.size | (!statsc ? iconclosewhiteN.size : 4)));
         iconlogoutl.set(`${plusJ}`, plusJ.length);
      if (statsc && 4 >= plusJ.length) {
          let bannerv = false;
          let largeb: Array<any> = [471, 775];
         plusJ = `${2 >> (Math.min(1, Math.abs(iconlogoutl.size)))}`;
         bannerv = !bannerv;
         largeb = [largeb.length];
      }
      while (statsc && plusJ.length <= 5) {
          let macau7: Array<any> = [String.fromCharCode(114,103,101,110,95,113,95,49,54,0), String.fromCharCode(98,95,56,50,95,97,115,99,111,110,102,0), String.fromCharCode(106,95,50,55,95,112,114,105,110,116,118,97,108,0)];
          let castingm = String.fromCharCode(113,95,54,53,95,100,105,115,112,108,97,99,101,0);
          let animationJ: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,116,95,53,57,0),610], [String.fromCharCode(105,95,51,55,95,100,105,99,116,105,111,110,97,114,105,101,115,0),339]]);
          let dependenciesN = 0;
          let handlerG: Array<any> = [392, 526];
         statsc = String.fromCharCode(72,0) == plusJ;
         macau7 = [1 - animationJ.size];
         castingm = `${(castingm == String.fromCharCode(88,0) ? macau7.length : castingm.length)}`;
         animationJ.set(`${macau7.length}`, 3 + animationJ.size);
         dependenciesN -= animationJ.size ^ 1;
         handlerG = [3 * dependenciesN];
         break;
      }
      for (let c = 0; c < 3; c++) {
          let expiredA: Array<any> = [881, 449, 223];
          let statisticse = String.fromCharCode(115,121,115,105,110,102,111,95,102,95,52,0);
          let owngoalL = 4.0;
          let gmailv = 0;
         iconlogoutl.set(`${gmailv}`, plusJ.length * gmailv);
         expiredA = [parseInt(`${owngoalL}`)];
         statisticse = `${statisticse.length}`;
         owngoalL += statisticse.length;
      }
      if (2 > iconlogoutl.size) {
          let vignettee = String.fromCharCode(110,95,54,54,95,114,101,99,112,0);
          let libfollyX: Map<any, any> = new Map([[String.fromCharCode(118,101,99,95,57,95,57,48,0),230], [String.fromCharCode(110,95,57,55,95,99,104,97,110,103,101,0),866]]);
          let checkboxn = 0.0;
          let productC = String.fromCharCode(118,100,97,115,104,101,114,95,102,95,57,54,0);
         statsc = 12 < vignettee.length;
         vignettee = `${productC.length | parseInt(`${checkboxn}`)}`;
         libfollyX = new Map([[`${libfollyX.size}`, productC.length]]);
         checkboxn *= parseInt(`${checkboxn}`) * libfollyX.size;
      }
         iconlogoutl = new Map([[`${statsc}`, ((statsc ? 2 : 2) % (Math.max(1, 4)))]]);
       let template_40 = String.fromCharCode(105,95,52,51,95,97,118,99,111,100,101,99,0);
      for (let g = 0; g < 2; g++) {
          let defaultbasketballbg0 = false;
          let episode2: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,99,111,110,100,0),String.fromCharCode(104,105,115,116,111,114,105,101,115,95,105,95,49,52,0)], [String.fromCharCode(109,100,99,118,95,109,95,54,55,0),String.fromCharCode(114,95,51,54,95,117,110,112,114,111,99,101,115,115,101,100,0)], [String.fromCharCode(114,95,49,51,95,115,116,114,105,115,116,114,0),String.fromCharCode(115,95,54,48,95,98,111,111,108,101,97,110,0)]]);
          let borderlessF = true;
          let hookc = false;
         plusJ += "1";
         defaultbasketballbg0 = hookc;
         episode2.set(`${defaultbasketballbg0}`, episode2.size);
         borderlessF = (((defaultbasketballbg0 ? episode2.size : 92) % (Math.max(episode2.size, 8))) == 82);
      }
       let leaguex: Array<any> = [262, 149];
         leaguex.push(template_40.length >> (Math.min(Math.abs(1), 4)));
      langh = new Map([[`${iconlogoutl.size}`, iconqqP.length]]);
      if (valuesE) {
         break;
      }
   } while (valuesE && (!Array.from(langh.keys()).includes(`${formi}`)));
      networkI = `${parseInt(`${philippines4}`) / (Math.max(1, 1))}`;
   while (5.8 < wifirouter9) {
      wifirouter9 -= parseFloat(`${parseInt(`${minil}`)}`);
      break;
   }
   let brightnesst = time_00Y.size <= 6518029;
   do {
      time_00Y = new Map([[`${langh.size}`, 2 << (Math.min(5, Math.abs(langh.size)))]]);
      if (brightnesst) {
         break;
      }
   } while ((3 < langh.size) && brightnesst);
   for (let u = 0; u < 2; u++) {
      showless3.set(`${iconqqP.length}`, 2);
   }
      

      langh.set(`${configT}`, 2);
   for (let o = 0; o < 3; o++) {
       let questR: Array<any> = [635, 214, 347];
         questR = [3 * questR.length];
          let settingsP = String.fromCharCode(113,95,51,55,95,99,111,100,101,99,112,114,105,118,97,116,101,0);
          let libreactperfloggerjniN = false;
         questR = [((libreactperfloggerjniN ? 4 : 3))];
         settingsP += "1";
         libreactperfloggerjniN = settingsP.length < 45;
          let iconarrowleft0 = 4.0;
          let orangey: Array<any> = [String.fromCharCode(116,95,56,56,95,117,112,103,114,97,100,101,100,0), String.fromCharCode(113,95,52,55,95,112,117,116,105,110,116,0)];
         questR = [parseInt(`${iconarrowleft0}`) >> (Math.min(3, Math.abs(3)))];
         iconarrowleft0 -= 2;
         orangey = [2];
      iconwatchg += `${parseInt(`${configT}`)}`;
   }
   while ((parseInt(`${wifirouter9}`) - minimize6.length) > 2) {
       let questh = 5.0;
       let showmoreP = 2.0;
      while (1.22 <= (showmoreP / 2.71)) {
          let applep = true;
          let tempk: Map<any, any> = new Map([[String.fromCharCode(117,116,117,114,101,95,97,95,57,55,0),String.fromCharCode(117,110,115,97,118,101,95,109,95,53,52,0)], [String.fromCharCode(109,98,99,110,116,95,51,95,57,57,0),String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,95,119,95,50,51,0)], [String.fromCharCode(100,110,120,104,100,95,101,95,50,55,0),String.fromCharCode(110,111,110,115,101,99,117,114,101,95,112,95,50,53,0)]]);
          let closeG: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,95,56,95,53,0),631], [String.fromCharCode(101,95,55,49,95,98,108,97,99,107,0),927], [String.fromCharCode(116,111,109,99,114,121,112,116,95,118,95,49,49,0),692]]);
          let bannerJ = 2;
          let cancelq: Array<any> = [91, 21, 587];
         showmoreP /= Math.max(4, parseInt(`${showmoreP}`) % (Math.max(3, 7)));
         applep = cancelq.includes(bannerJ);
         tempk.set(`${bannerJ}`, 1);
         closeG.set(`${bannerJ}`, bannerJ | 3);
         cancelq.push(3);
         break;
      }
          let templateprocessor6 = 0.0;
          let attributedstringN = 0.0;
         questh += 1 & parseInt(`${templateprocessor6}`);
         templateprocessor6 /= Math.max(5, parseFloat(`${parseInt(`${attributedstringN}`) | 1}`));
         attributedstringN += parseFloat(`${1 % (Math.max(4, parseInt(`${attributedstringN}`)))}`);
         showmoreP += parseInt(`${showmoreP}`) ^ parseInt(`${questh}`);
         questh *= parseInt(`${questh}`) - parseInt(`${showmoreP}`);
       let placementn = String.fromCharCode(112,114,111,118,105,100,101,114,115,95,113,95,53,48,0);
       let t_titleI = String.fromCharCode(115,95,52,95,102,111,114,107,0);
      let iconpipexpandL = placementn == String.fromCharCode(102,109,55,100,121,105,109,106,97,0);
      do {
          let morez = String.fromCharCode(112,95,54,51,95,101,100,105,116,0);
          let videojs4 = String.fromCharCode(102,95,49,57,95,108,101,118,101,108,0);
          let static_5i = String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,52,95,53,48,0);
          let trashm = String.fromCharCode(115,101,114,118,105,99,101,115,95,50,95,55,55,0);
          let eyeopenz = String.fromCharCode(107,95,54,48,95,97,117,116,111,114,111,116,97,116,105,111,110,0);
         placementn = `${static_5i.length}`;
         morez = `${videojs4.length << (Math.min(Math.abs(2), 2))}`;
         videojs4 += `${videojs4.length / 1}`;
         static_5i = `${trashm.length ^ 1}`;
         trashm = `${morez.length}`;
         eyeopenz = `${trashm.length}`;
         if (iconpipexpandL) {
            break;
         }
      } while (iconpipexpandL && ((1 & placementn.length) == 5 && 1.74 == (questh / (Math.max(4, placementn.length)))));
      minimize6 += `${(parseInt(`${minil}`) | (t_countx ? 2 : 2))}`;
      break;
   }
   let bingk = t_countx ? !t_countx : t_countx;
   do {
       let promotionF = String.fromCharCode(100,95,55,52,95,115,114,116,99,112,0);
       let nterstitialS = String.fromCharCode(122,95,53,56,95,109,98,115,101,103,109,101,110,116,0);
       let icondownimg0: Map<any, any> = new Map([[String.fromCharCode(105,95,50,54,95,103,115,117,98,0),String.fromCharCode(115,95,54,95,116,114,97,110,115,102,111,114,109,97,98,108,101,0)], [String.fromCharCode(99,95,57,57,95,97,116,116,114,105,98,117,116,101,0),String.fromCharCode(112,95,54,56,95,118,112,108,97,121,101,114,0)]]);
       let unimplementedviewH = 1.0;
       let twitterE = false;
         promotionF += `${icondownimg0.size}`;
      while (nterstitialS.includes(`${promotionF.length}`)) {
          let injury_ = String.fromCharCode(111,110,101,108,105,110,101,95,55,95,55,53,0);
          let championp = 5.0;
          let grayo = true;
          let leakcheckerd = 0;
         nterstitialS = `${(leakcheckerd - (grayo ? 4 : 1))}`;
         injury_ = `${parseInt(`${championp}`) / (Math.max(1, injury_.length))}`;
         championp -= injury_.length & 2;
         grayo = injury_.length > championp;
         leakcheckerd += parseInt(`${championp}`);
         break;
      }
          let reactnativejsX = false;
          let taiwanx = 2;
         nterstitialS = `${(nterstitialS == String.fromCharCode(48,0) ? (reactnativejsX ? 1 : 5) : nterstitialS.length)}`;
         reactnativejsX = 64 <= taiwanx;
         taiwanx >>= Math.min(Math.abs(taiwanx), 2);
       let videocommonr = 5.0;
       let iconshareQ = 4.0;
      if (promotionF.endsWith(`${unimplementedviewH}`)) {
         unimplementedviewH /= Math.max(2, 1);
      }
       let reminderg = 0.0;
         iconshareQ *= (String.fromCharCode(115,0) == promotionF ? nterstitialS.length : promotionF.length);
         reminderg *= parseFloat(`${2 | parseInt(`${unimplementedviewH}`)}`);
         reminderg += parseFloat(`${parseInt(`${videocommonr}`) % 2}`);
         unimplementedviewH -= ((twitterE ? 5 : 1) | parseInt(`${videocommonr}`));
      for (let d = 0; d < 2; d++) {
         nterstitialS = `${nterstitialS.length + 2}`;
      }
         nterstitialS += `${2 * promotionF.length}`;
         promotionF = `${3 + parseInt(`${unimplementedviewH}`)}`;
         twitterE = parseInt(`${iconshareQ}`) > nterstitialS.length;
          let otherU: Array<any> = [668, 905, 104];
          let combineC = String.fromCharCode(110,95,52,49,95,107,108,97,121,116,110,0);
         reminderg += parseFloat(`${icondownimg0.size}`);
         otherU = [(String.fromCharCode(80,0) == combineC ? combineC.length : otherU.length)];
      t_countx = twitterE;
      if (bingk) {
         break;
      }
   } while ((3 < iconqqP.length || 4 < (3 / (Math.max(3, iconqqP.length)))) && bingk);
   while (time_00Y.size <= 2) {
      configT /= Math.max(2, (parseFloat(`${minimize6 == String.fromCharCode(104,0) ? minimize6.length : parseInt(`${configT}`)}`)));
      break;
   }
   for (let l = 0; l < 1; l++) {
      t_countx = 91 > leaguedetailsbgC.length;
   }
   let sellmathbackgrounds = time_00Y.size >= 5386853;
   do {
      time_00Y = new Map([[`${time_00Y.size}`, 1]]);
      if (sellmathbackgrounds) {
         break;
      }
   } while (sellmathbackgrounds && ((3.84 + formi) < 2.9));
      setShowLoading(false);
    }, 1200);
  };

  
  
  
  
  
  
  
  
  

  const handleInitialLoading = useCallback(() => {
       let styleC = 1.0;
    let matchactiveR = String.fromCharCode(117,95,49,95,104,97,114,112,101,110,0);
    let baiduadsx: Array<any> = [869, 287];
    let customK = String.fromCharCode(109,95,55,49,95,109,105,110,105,109,105,122,101,100,0);
    let phoneq = String.fromCharCode(112,114,101,115,99,97,108,105,110,103,95,101,95,54,54,0);
    let castingZ = 4.0;
    let h_player6 = String.fromCharCode(108,95,54,48,95,101,98,109,108,0);
   let sharewhiteg = customK.length <= 7535961;
   do {
      customK += `${parseInt(`${styleC}`) / 3}`;
      if (sharewhiteg) {
         break;
      }
   } while ((h_player6 != String.fromCharCode(108,0)) && sharewhiteg);
       let iconwechatn: Map<any, any> = new Map([[String.fromCharCode(118,111,119,101,108,95,104,95,51,50,0),true ], [String.fromCharCode(108,105,98,114,97,114,121,95,122,95,49,51,0),false ], [String.fromCharCode(112,95,49,55,95,100,111,116,108,111,99,107,0),false ]]);
       let specB = false;
       let othermatchdetailbgo = true;
         specB = othermatchdetailbgo;
      for (let p = 0; p < 1; p++) {
          let episodel = String.fromCharCode(104,95,56,95,114,101,103,114,101,115,115,0);
          let iconwechatr = false;
          let libavfilterr: Map<any, any> = new Map([[String.fromCharCode(100,95,55,51,95,114,97,98,105,110,0),true ], [String.fromCharCode(102,95,57,51,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0),true ], [String.fromCharCode(102,114,101,101,95,117,95,52,54,0),false ]]);
         specB = (!othermatchdetailbgo ? iconwechatr : othermatchdetailbgo);
         episodel += `${(episodel == String.fromCharCode(120,0) ? libavfilterr.size : episodel.length)}`;
         iconwechatr = (libavfilterr.size + episodel.length) < 23;
      }
      let defaultprofilepic_ = 6956037 <= iconwechatn.size;
      do {
         iconwechatn = new Map([[`${othermatchdetailbgo}`, (3 / (Math.max(9, (specB ? 5 : 3))))]]);
         if (defaultprofilepic_) {
            break;
         }
      } while (defaultprofilepic_ && ((5 & iconwechatn.size) >= 4));
      for (let u = 0; u < 2; u++) {
         specB = (!othermatchdetailbgo ? !specB : othermatchdetailbgo);
      }
      while (!specB) {
         specB = !othermatchdetailbgo;
         break;
      }
      for (let g = 0; g < 1; g++) {
         iconwechatn = new Map([[`${iconwechatn.size}`, iconwechatn.size ^ 2]]);
      }
      for (let o = 0; o < 2; o++) {
         specB = (11 <= ((!specB ? 11 : iconwechatn.size) / (Math.max(iconwechatn.size, 9))));
      }
      while (!othermatchdetailbgo || !specB) {
         specB = null == iconwechatn.get(`${othermatchdetailbgo}`);
         break;
      }
         othermatchdetailbgo = specB;
      customK += `${parseInt(`${castingZ}`) & 1}`;
       let orangeuparrowu = String.fromCharCode(102,105,114,101,100,95,50,95,49,49,0);
       let store1: Array<any> = [517, 657];
      while ((4 >> (Math.min(5, store1.length))) == 2) {
          let memberY = String.fromCharCode(104,119,97,99,99,101,108,115,95,110,95,49,48,48,0);
          let yellowscoreball1: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,105,95,55,50,0),963], [String.fromCharCode(100,95,51,50,95,116,97,108,107,0),781]]);
          let countdowne = 3.0;
          let giflivestreamingh = 0.0;
         store1 = [memberY.length * parseInt(`${countdowne}`)];
         memberY = `${parseInt(`${giflivestreamingh}`)}`;
         yellowscoreball1 = new Map([[`${yellowscoreball1.size}`, 1 << (Math.min(4, Math.abs(yellowscoreball1.size)))]]);
         countdowne /= Math.max(parseInt(`${giflivestreamingh}`) | 1, 2);
         break;
      }
      let iconmegaphoneB = 9331431 >= store1.length;
      do {
         store1.push(store1.length);
         if (iconmegaphoneB) {
            break;
         }
      } while (iconmegaphoneB && ((store1.length / (Math.max(orangeuparrowu.length, 2))) <= 4 || 2 <= (store1.length / 4)));
      for (let s = 0; s < 1; s++) {
         orangeuparrowu += `${1 + store1.length}`;
      }
          let navigationS: Map<any, any> = new Map([[String.fromCharCode(113,95,54,53,95,114,101,102,100,117,112,101,0),581], [String.fromCharCode(114,101,118,105,101,119,115,95,110,95,50,56,0),673], [String.fromCharCode(106,95,53,52,95,116,111,116,97,108,115,0),847]]);
          let description_67 = true;
          let smallsoundj = 2.0;
         store1.push((3 ^ (description_67 ? 3 : 2)));
         navigationS = new Map([[`${navigationS.size}`, 3]]);
         description_67 = smallsoundj >= 72.88 || navigationS.size >= 3;
         smallsoundj *= parseInt(`${smallsoundj}`) & navigationS.size;
      if (2 > (store1.length << (Math.min(Math.abs(4), 3)))) {
         orangeuparrowu += `${1 ^ store1.length}`;
      }
      if ((orangeuparrowu.length + store1.length) == 4 && 3 == (4 + orangeuparrowu.length)) {
          let controls4 = String.fromCharCode(114,95,57,50,95,105,110,116,105,0);
          let livenodatabgimg5: Array<any> = [String.fromCharCode(112,108,97,121,101,114,95,109,95,56,53,0), String.fromCharCode(101,95,53,49,95,119,114,105,116,101,111,117,116,0)];
          let loadingspinnery = false;
          let register_iI = String.fromCharCode(122,95,56,50,0);
         store1 = [store1.length];
         controls4 = `${(controls4 == String.fromCharCode(83,0) ? controls4.length : livenodatabgimg5.length)}`;
         livenodatabgimg5.push((register_iI == String.fromCharCode(104,0) ? (loadingspinnery ? 4 : 2) : register_iI.length));
         loadingspinnery = !loadingspinnery;
      }
      baiduadsx.push(3 - customK.length);
   while (3.100 == (castingZ / (Math.max(5, styleC)))) {
      styleC /= Math.max(5, parseFloat(`${parseInt(`${styleC}`) + phoneq.length}`));
      break;
   }
   let halffieldimagex = phoneq.length >= 7964930;
   do {
       let carouselu = 5.0;
       let mimow = String.fromCharCode(109,112,101,103,117,116,105,108,115,95,52,95,54,49,0);
       let bottomH = String.fromCharCode(104,95,51,55,95,99,98,112,104,105,0);
       let linen = 4.0;
          let window_h4 = 5.0;
          let modal6 = true;
         linen *= 2;
         window_h4 *= parseInt(`${window_h4}`) / 2;
         modal6 = 2.81 < window_h4;
      if ((mimow.length * linen) == 1.93) {
         linen *= (String.fromCharCode(78,0) == bottomH ? bottomH.length : mimow.length);
      }
         bottomH += `${bottomH.length ^ 1}`;
      let disconnectedlogoW = mimow.length <= 9477787;
      do {
         mimow += `${1 * bottomH.length}`;
         if (disconnectedlogoW) {
            break;
         }
      } while ((!mimow.startsWith(`${linen}`)) && disconnectedlogoW);
      while (2.22 >= (bottomH.length * linen) && (linen * 2.22) >= 1.10) {
         linen *= parseInt(`${linen}`) % (Math.max(mimow.length, 9));
         break;
      }
      while ((parseInt(`${linen}`) - mimow.length) == 1) {
         mimow = `${mimow.length}`;
         break;
      }
      for (let t = 0; t < 3; t++) {
         bottomH = "2";
      }
         linen *= mimow.length;
      let crownE = carouselu <= 6401828.0;
      do {
         carouselu /= Math.max(2, 1);
         if (crownE) {
            break;
         }
      } while (((carouselu / 3.42) <= 2.30 || (3.42 + carouselu) <= 5.84) && crownE);
      if (3.58 > (linen / 4.41) && 3.6 > (4.41 - linen)) {
         linen *= mimow.length;
      }
         carouselu -= 2;
          let backiconmaskS = 3;
          let iconcalendarP = String.fromCharCode(113,95,50,48,95,100,105,97,108,111,103,115,0);
          let completeu: Array<any> = [115, 279];
         mimow = "2";
         backiconmaskS <<= Math.min(Math.abs(1), 1);
         iconcalendarP += `${(String.fromCharCode(116,0) == iconcalendarP ? iconcalendarP.length : completeu.length)}`;
         completeu.push(completeu.length | 3);
      phoneq += `${parseInt(`${castingZ}`) - 1}`;
      if (halffieldimagex) {
         break;
      }
   } while ((2 <= phoneq.length) && halffieldimagex);
      phoneq = "2";


    setShowLoading2(true);

      customK += `${phoneq.length - matchactiveR.length}`;
      h_player6 = `${1 - baiduadsx.length}`;
   if ((2 - phoneq.length) > 4 && 2.11 > (styleC + 5.34)) {
      phoneq = `${parseInt(`${castingZ}`) ^ 3}`;
   }
   while (!matchactiveR.startsWith(`${customK.length}`)) {
      matchactiveR += `${matchactiveR.length | baiduadsx.length}`;
      break;
   }
   let libfilev = h_player6.length <= 5388472;
   do {
      h_player6 = "2";
      if (libfilev) {
         break;
      }
   } while (libfilev && (h_player6.length > 5));
      phoneq = `${3 | parseInt(`${castingZ}`)}`;
    setTimeout(() => {

      matchactiveR += `${(matchactiveR == String.fromCharCode(69,0) ? parseInt(`${castingZ}`) : matchactiveR.length)}`;
   let iconorientationS = 9547341 >= customK.length;
   do {
      customK += `${customK.length}`;
      if (iconorientationS) {
         break;
      }
   } while (iconorientationS && (1 > h_player6.length && customK == String.fromCharCode(81,0)));
   for (let y = 0; y < 2; y++) {
      customK += `${parseInt(`${castingZ}`)}`;
   }
   while (castingZ > 5.46) {
      phoneq = "2";
      break;
   }
       let filedc = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,106,95,53,56,0);
          let arrow2 = true;
          let crossl = String.fromCharCode(108,95,50,54,95,99,104,97,110,103,101,100,0);
         filedc = `${crossl.length / 3}`;
         filedc = "1";
          let next5 = String.fromCharCode(105,95,57,54,95,116,97,112,101,0);
          let castingV: Array<any> = [String.fromCharCode(116,98,108,101,110,100,95,54,95,55,48,0), String.fromCharCode(111,118,101,114,105,100,100,101,110,95,121,95,51,52,0)];
         filedc += `${castingV.length & filedc.length}`;
         next5 += `${(next5 == String.fromCharCode(109,0) ? next5.length : next5.length)}`;
         castingV.push(1);
      h_player6 = `${h_player6.length}`;
      h_player6 += "3";
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
            source={require("../../../../static/images/dicelogoImagenetworkerr.gif")}
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
            source={require("../../../../static/images/lessFullscreenmaxChatbotphoto.gif")}
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
          source={require("../../assets/images/iconmoreIncidentBaidu.png")}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
