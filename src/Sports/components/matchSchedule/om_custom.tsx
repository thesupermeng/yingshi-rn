import React, { memo, useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import styles from "./fgl_less_position";
import { TouchableOpacity } from "react-native";
import { formatMatchDate } from "../../utility/utils";
import { PSmall } from "@redux/fj_prediction_thailand";
import { EALSource } from "../../types/x_home";
import { Url } from "../../middleware/aux_bootsplash_black";
import { useInfiniteQuery } from "@tanstack/react-query";
import LShrink from "../../middleware/i_favorite";
import MatchScheduleVip from "./aeg_overlay";
import FastImage from "../../../components/common/gwi_with";
import { TOPON_BANNER_HEIGHT } from "@utility/n_subs_interstitial";
import { MAboutEdit } from "@type/wpk_long";
import { JTumbnailMatches } from "@utility/qot_stations_station";
import { MVCountry } from "@constants";
import { KLongNext } from "../../../../z_search";
import { BannerContainer } from "../../../components/container/r_basketball_common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector, useSelector } from "@hooks/kg_index";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import { UQQuest } from "../../../api/z_google";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";
import { screenModel } from "@type/nb_shared_target";

interface XFillButton {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  isLive?: boolean;
}

type BYCross = {
  date: string | undefined;
  data: EALSource | undefined;
};

type ysp_context = {
  headers: number[];
  data: BYCross[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false,
  isLive = false,
}: XFillButton) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [bannerAd, setBannerAd] = useState<MAboutEdit>();
  const [bannerAdList, setBannerAdList] = useState<Array<MAboutEdit>>([]);
  const userState = useSelector<HDTGesturesList>('userReducer');
  const isVip = KWConstants.isVip(userState.user);
  const screenState = useSelector<screenModel>('screenReducer');


  const [matches, setMatches] = useState<ysp_context>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let componentF = 5.0;
    let expiredF: Array<any> = [479, 528, 267];
    let moonw = 5;
    let formt = true;
    let detailh = false;
    let splashs = String.fromCharCode(116,95,49,48,95,108,115,112,105,0);
    let questX = String.fromCharCode(111,95,51,50,95,100,101,115,116,105,110,97,116,105,111,110,115,0);
    let bufferH: Array<any> = [967, 195];
    let feedbackT = 2.0;
    let baiduo = 0;
    let styleA = String.fromCharCode(107,101,99,99,97,107,95,114,95,57,55,0);
       let spinnerl = 2.0;
       let bally = true;
      while (5.36 >= spinnerl) {
          let sport4 = true;
          let successv = String.fromCharCode(109,117,108,116,120,95,116,95,50,0);
          let listb = 5.0;
          let rulesG = String.fromCharCode(100,99,97,100,115,112,95,98,95,50,57,0);
          let layout3 = String.fromCharCode(112,114,105,111,114,105,116,121,113,95,106,95,52,51,0);
         bally = layout3.length >= 62 || String.fromCharCode(56,0) == successv;
         sport4 = listb == 93.27;
         successv += `${(rulesG == String.fromCharCode(95,0) ? rulesG.length : parseInt(`${listb}`))}`;
         layout3 = `${parseInt(`${listb}`) - 3}`;
         break;
      }
      if (2.90 == (4.76 - spinnerl) || spinnerl == 4.76) {
         spinnerl *= parseInt(`${spinnerl}`) % 1;
      }
      while (bally && (2.26 + spinnerl) <= 3.68) {
         spinnerl /= Math.max(5, ((bally ? 1 : 4) / (Math.max(parseInt(`${spinnerl}`), 10))));
         break;
      }
         spinnerl /= Math.max(5, ((bally ? 4 : 2) + parseInt(`${spinnerl}`)));
         spinnerl -= 3 | parseInt(`${spinnerl}`);
          let searchbarP = String.fromCharCode(106,95,50,57,95,101,120,116,101,110,100,105,110,103,0);
         spinnerl += parseInt(`${spinnerl}`) & 3;
         searchbarP += `${searchbarP.length}`;
      detailh = componentF < 62.9 && 81 < bufferH.length;
   let skip_ = feedbackT <= 6178589.0;
   do {
      feedbackT /= Math.max(parseFloat(`${parseInt(`${componentF}`) + 3}`), 2);
      if (skip_) {
         break;
      }
   } while ((bufferH.includes(feedbackT)) && skip_);
       let favicon9 = String.fromCharCode(108,105,115,116,115,95,111,95,50,56,0);
       let placementT: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,114,101,99,111,114,100,115,0),false ], [String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,95,103,95,54,49,0),true ]]);
       let whistlei = String.fromCharCode(106,95,50,55,95,112,114,101,100,105,99,116,105,118,101,0);
      for (let y = 0; y < 3; y++) {
         favicon9 += "2";
      }
      let n_position9 = 7839564 >= placementT.size;
      do {
         placementT = new Map([[`${placementT.size}`, 1 % (Math.max(6, whistlei.length))]]);
         if (n_position9) {
            break;
         }
      } while (n_position9 && (4 < (3 + whistlei.length) && 3 < (placementT.size + whistlei.length)));
      for (let e = 0; e < 2; e++) {
         placementT = new Map([[`${placementT.size}`, favicon9.length]]);
      }
         whistlei = `${whistlei.length | favicon9.length}`;
      for (let q = 0; q < 2; q++) {
         favicon9 += `${favicon9.length ^ 1}`;
      }
          let pingZ = String.fromCharCode(112,101,114,115,111,110,95,49,95,49,51,0);
          let sharedZ = 5.0;
         whistlei = "2";
         pingZ += `${1 & parseInt(`${sharedZ}`)}`;
         sharedZ *= 3;
         whistlei += "3";
         favicon9 = `${whistlei.length ^ placementT.size}`;
         placementT = new Map([[whistlei, whistlei.length]]);
      feedbackT /= Math.max((parseFloat(`${whistlei == String.fromCharCode(51,0) ? splashs.length : whistlei.length}`)), 3);

    let url = "";

       let sourceJ = 3.0;
       let shirtw = String.fromCharCode(113,95,56,55,95,115,111,99,107,0);
       let backgroundx = String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,55,95,51,0);
      if (2 >= backgroundx.length) {
         backgroundx = "3";
      }
       let navigationz = String.fromCharCode(112,111,115,105,116,105,111,110,95,108,95,55,52,0);
          let scoreu = 2.0;
          let mappingG = String.fromCharCode(108,101,103,101,110,100,95,104,95,56,49,0);
          let statisticsZ = String.fromCharCode(101,95,57,95,102,114,97,99,0);
         navigationz = `${(backgroundx == String.fromCharCode(107,0) ? backgroundx.length : parseInt(`${scoreu}`))}`;
         scoreu /= Math.max(3, (parseFloat(`${String.fromCharCode(68,0) == mappingG ? mappingG.length : statisticsZ.length}`)));
         statisticsZ += `${2 * statisticsZ.length}`;
         sourceJ /= Math.max(1, parseFloat(`${shirtw.length}`));
      let time_l6z = sourceJ >= 7239015.0;
      do {
          let hongkongA = String.fromCharCode(111,119,110,101,114,95,112,95,50,56,0);
          let confirmationd: Array<any> = [64, 312];
          let white0 = String.fromCharCode(109,101,116,114,105,99,115,95,50,95,52,56,0);
          let awayK = 4.0;
          let fieldr = String.fromCharCode(107,95,50,57,95,109,115,103,115,0);
         sourceJ /= Math.max(parseFloat(`${1 ^ confirmationd.length}`), 1);
         hongkongA += `${white0.length}`;
         confirmationd.push((white0 == String.fromCharCode(66,0) ? parseInt(`${awayK}`) : white0.length));
         awayK -= (hongkongA == String.fromCharCode(57,0) ? hongkongA.length : parseInt(`${awayK}`));
         fieldr += `${hongkongA.length | 1}`;
         if (time_l6z) {
            break;
         }
      } while ((navigationz.startsWith(`${sourceJ}`)) && time_l6z);
         sourceJ -= parseFloat(`${backgroundx.length}`);
         backgroundx += `${navigationz.length - backgroundx.length}`;
         navigationz += `${2 | backgroundx.length}`;
         navigationz += `${parseInt(`${sourceJ}`) / (Math.max(shirtw.length, 6))}`;
      expiredF = [(backgroundx == String.fromCharCode(100,0) ? questX.length : backgroundx.length)];
       let progressu: Array<any> = [String.fromCharCode(101,95,57,48,95,117,115,100,0), String.fromCharCode(118,97,108,117,101,115,95,51,95,56,54,0)];
       let redirectY = 5;
       let shoot9 = 5.0;
         progressu = [parseInt(`${shoot9}`)];
      let tumbnailh = shoot9 <= 7740653.0;
      do {
         shoot9 += progressu.length / (Math.max(5, redirectY));
         if (tumbnailh) {
            break;
         }
      } while (tumbnailh && (1.11 > (progressu.length - shoot9)));
         progressu = [parseInt(`${shoot9}`) & progressu.length];
      while (progressu.includes(shoot9)) {
         shoot9 *= 3;
         break;
      }
         redirectY /= Math.max(2 & parseInt(`${shoot9}`), 5);
         redirectY |= progressu.length | parseInt(`${shoot9}`);
      if (5 < (progressu.length >> (Math.min(Math.abs(5), 2)))) {
         shoot9 *= progressu.length * redirectY;
      }
      for (let m = 0; m < 1; m++) {
          let w_centerl: Array<any> = [441, 462];
          let model4: Map<any, any> = new Map([[String.fromCharCode(97,95,49,56,95,114,101,101,110,99,114,121,112,116,0),String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,115,95,104,95,50,51,0)], [String.fromCharCode(101,95,49,55,95,110,101,119,114,111,119,0),String.fromCharCode(111,119,110,95,113,95,49,0)], [String.fromCharCode(115,101,113,118,105,100,101,111,95,51,95,51,49,0),String.fromCharCode(99,102,116,115,116,95,48,95,49,51,0)]]);
          let catagoryG = String.fromCharCode(112,95,51,49,95,101,108,108,105,111,116,116,0);
          let skip1 = 3;
         redirectY ^= w_centerl.length;
         w_centerl.push(model4.size >> (Math.min(catagoryG.length, 3)));
         model4 = new Map([[catagoryG, catagoryG.length]]);
         skip1 &= model4.size;
      }
      let expiredp = redirectY <= 9559695;
      do {
          let placeholdert = 2.0;
          let inviteH: Array<any> = [165, 129];
          let redirectd = String.fromCharCode(107,95,55,49,95,99,108,108,105,0);
          let nalytics1 = String.fromCharCode(100,95,57,52,95,97,98,111,117,116,0);
          let contextB = String.fromCharCode(103,95,57,50,95,103,101,110,100,101,114,0);
         redirectY <<= Math.min(1, Math.abs(parseInt(`${shoot9}`)));
         placeholdert -= parseFloat(`${redirectd.length % (Math.max(3, 6))}`);
         inviteH.push((String.fromCharCode(78,0) == redirectd ? inviteH.length : redirectd.length));
         nalytics1 = `${contextB.length ^ 1}`;
         contextB = `${1 + contextB.length}`;
         if (expiredp) {
            break;
         }
      } while ((1 < (redirectY & 5)) && expiredp);
      bufferH = [splashs.length - 3];
       let schedulej = 1.0;
      if ((1.46 * schedulej) == 2.36 || 3.74 == (schedulej * 1.46)) {
         schedulej -= parseInt(`${schedulej}`) << (Math.min(4, Math.abs(1)));
      }
          let hookI = String.fromCharCode(112,111,115,115,105,98,108,101,95,121,95,52,52,0);
          let filedL = 0.0;
          let pingp = String.fromCharCode(106,95,54,48,95,105,110,116,101,102,97,99,101,0);
         schedulej += 2 ^ parseInt(`${filedL}`);
         hookI = `${hookI.length}`;
         filedL /= Math.max((parseFloat(`${String.fromCharCode(73,0) == hookI ? pingp.length : hookI.length}`)), 3);
         pingp += `${hookI.length >> (Math.min(4, pingp.length))}`;
      for (let i = 0; i < 1; i++) {
         schedulej += parseInt(`${schedulej}`);
      }
      detailh = 78.86 <= schedulej;
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
    

      feedbackT -= parseFloat(`${2}`);
   if (bufferH.includes(componentF)) {
       let stylez: Array<any> = [771, 438];
       let clocko = 2.0;
       let sliderU: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,111,114,95,119,95,56,49,0),false ], [String.fromCharCode(106,95,51,49,95,104,100,115,112,0),true ]]);
       let prediction2: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,95,120,95,54,48,0),63], [String.fromCharCode(115,109,118,106,112,101,103,95,116,95,51,48,0),155]]);
      if (!Array.from(sliderU.values()).includes(clocko)) {
          let sourceS = 4.0;
          let progressl = 2.0;
          let googleC = String.fromCharCode(102,95,49,51,95,111,117,116,108,105,110,107,0);
          let configureM = 0;
          let aboutr = String.fromCharCode(118,95,56,54,95,105,110,116,101,114,97,99,116,111,114,0);
         clocko /= Math.max(1, 3 + configureM);
         sourceS *= parseFloat(`${parseInt(`${progressl}`)}`);
         progressl -= parseFloat(`${parseInt(`${sourceS}`)}`);
         googleC = `${parseInt(`${sourceS}`) + aboutr.length}`;
         configureM *= parseInt(`${sourceS}`);
         aboutr += "1";
      }
      if (5 <= (prediction2.size << (Math.min(Math.abs(2), 1))) || (sliderU.size << (Math.min(2, Math.abs(prediction2.size)))) <= 2) {
         sliderU.set(`${prediction2.size}`, sliderU.size & prediction2.size);
      }
         stylez = [parseInt(`${clocko}`) * sliderU.size];
         prediction2 = new Map([[`${prediction2.size}`, parseInt(`${clocko}`)]]);
      let selectedY = 8704222 <= sliderU.size;
      do {
         sliderU = new Map([[`${stylez.length}`, parseInt(`${clocko}`)]]);
         if (selectedY) {
            break;
         }
      } while ((sliderU.get(`${clocko}`) == null) && selectedY);
      for (let f = 0; f < 3; f++) {
         stylez.push(stylez.length);
      }
      while ((parseInt(`${clocko}`) * stylez.length) == 4 && 5 == (stylez.length << (Math.min(Math.abs(4), 1)))) {
         stylez.push(sliderU.size % 2);
         break;
      }
         prediction2 = new Map([[`${prediction2.size}`, prediction2.size & stylez.length]]);
      if (prediction2.get(`${stylez.length}`) != null) {
          let basketballq = String.fromCharCode(108,95,52,49,95,118,105,100,101,111,116,111,111,108,98,111,120,0);
         prediction2.set(`${stylez.length}`, stylez.length & 2);
         basketballq += `${basketballq.length}`;
      }
      let pauseP = 9006362 >= sliderU.size;
      do {
         sliderU.set(`${stylez.length}`, stylez.length);
         if (pauseP) {
            break;
         }
      } while (pauseP && (sliderU.get(`${prediction2.size}`) == null));
         prediction2.set(`${prediction2.size}`, 1 - prediction2.size);
      if (4 > stylez.length) {
         stylez = [prediction2.size];
      }
      bufferH = [2];
   }
   if (formt && splashs.length < 1) {
      splashs = `${expiredF.length - 3}`;
   }
    

       let anytime7 = 5.0;
       let starq = String.fromCharCode(114,101,99,116,95,118,95,55,50,0);
       let expired0 = 5.0;
      if (4 < (starq.length << (Math.min(Math.abs(4), 4)))) {
         anytime7 *= parseFloat(`${starq.length & 3}`);
      }
         starq += `${starq.length}`;
      while ((expired0 / (Math.max(4.73, 5))) >= 4.53) {
         expired0 -= parseFloat(`${1}`);
         break;
      }
          let unreadE = 2;
          let whistlee = 3;
         starq += `${parseInt(`${expired0}`) & whistlee}`;
         unreadE ^= 3;
         whistlee += unreadE | 2;
          let recommendationz = 5;
          let wind8 = String.fromCharCode(115,117,98,115,101,116,95,53,95,51,51,0);
         expired0 += parseFloat(`${wind8.length ^ parseInt(`${expired0}`)}`);
         recommendationz %= Math.max(2, 2);
         wind8 += `${recommendationz}`;
      while (2.64 == (expired0 + anytime7) || (anytime7 + expired0) == 2.64) {
         anytime7 /= Math.max(parseFloat(`${starq.length >> (Math.min(Math.abs(2), 1))}`), 2);
         break;
      }
      for (let j = 0; j < 1; j++) {
          let router1 = String.fromCharCode(110,101,101,100,95,105,95,57,55,0);
          let nativeK: Array<any> = [62, 949];
          let logob = 3.0;
          let condensed3 = 4;
          let loading5 = String.fromCharCode(99,95,55,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
         starq += `${2 - router1.length}`;
         router1 += `${2 >> (Math.min(1, nativeK.length))}`;
         nativeK.push(2 >> (Math.min(1, Math.abs(condensed3))));
         logob += condensed3 | loading5.length;
         loading5 = `${2 & nativeK.length}`;
      }
          let emojia: Array<any> = [String.fromCharCode(104,95,51,49,95,118,114,97,115,116,101,114,0), String.fromCharCode(101,95,57,50,95,112,97,116,99,104,115,101,116,0), String.fromCharCode(114,101,112,108,105,99,97,116,101,100,95,49,95,55,55,0)];
          let containerZ: Map<any, any> = new Map([[String.fromCharCode(100,117,112,115,111,114,116,95,118,95,56,49,0),String.fromCharCode(101,110,97,98,108,101,95,105,95,52,49,0)], [String.fromCharCode(108,95,56,54,95,102,102,109,101,116,97,0),String.fromCharCode(107,105,110,100,95,54,95,51,52,0)], [String.fromCharCode(115,117,103,103,101,115,116,105,111,110,95,106,95,53,48,0),String.fromCharCode(117,95,51,53,95,114,101,110,111,114,109,101,0)]]);
         expired0 *= parseFloat(`${emojia.length | 2}`);
         emojia = [containerZ.size];
         containerZ.set(`${containerZ.size}`, 2 ^ containerZ.size);
      for (let b = 0; b < 2; b++) {
          let anner9 = String.fromCharCode(115,95,56,51,95,115,117,98,115,101,116,0);
         anytime7 += (parseFloat(`${String.fromCharCode(119,0) == starq ? starq.length : parseInt(`${expired0}`)}`));
         anner9 += `${anner9.length & 1}`;
      }
      bufferH.push(parseInt(`${expired0}`) ^ 1);
      bufferH.push(2);
       let emojid = String.fromCharCode(97,118,103,121,95,121,95,49,49,0);
       let pingA = 4;
          let details3: Array<any> = [145, 348];
          let ajaxI: Map<any, any> = new Map([[String.fromCharCode(122,95,50,52,95,115,101,110,100,109,115,103,0),String.fromCharCode(105,100,99,116,99,111,108,95,105,95,50,48,0)], [String.fromCharCode(111,95,54,95,105,110,100,105,114,101,99,116,0),String.fromCharCode(102,95,55,57,95,110,111,114,109,97,108,105,115,101,0)], [String.fromCharCode(100,95,49,48,95,102,108,111,97,116,115,0),String.fromCharCode(101,100,105,116,101,100,95,120,95,51,0)]]);
         emojid = `${ajaxI.size * 1}`;
         details3 = [1 >> (Math.min(4, details3.length))];
         ajaxI.set(`${details3.length}`, details3.length ^ details3.length);
      if (3 <= (5 - emojid.length) || 3 <= (emojid.length - 5)) {
          let searchbarT = String.fromCharCode(115,95,52,53,95,118,115,114,99,0);
          let injuryR = String.fromCharCode(121,95,54,52,95,114,97,98,98,105,116,0);
          let layoutH = true;
          let paginationq = 4.0;
          let canvasV = true;
         emojid += `${parseInt(`${paginationq}`) - 3}`;
         searchbarT += `${(injuryR.length << (Math.min(4, Math.abs((layoutH ? 3 : 4)))))}`;
         injuryR = `${((canvasV ? 5 : 3))}`;
         layoutH = searchbarT.length < 39 || !canvasV;
         paginationq *= (parseFloat(`${(layoutH ? 2 : 2) ^ (canvasV ? 1 : 2)}`));
      }
          let favoriteE = 0.0;
          let styled = false;
          let sheetB = String.fromCharCode(113,95,57,53,95,101,116,104,114,101,97,100,0);
         pingA -= parseInt(`${favoriteE}`) ^ 2;
         favoriteE += (sheetB.length & (styled ? 3 : 5));
         styled = !styled || sheetB.length >= 82;
      let actionk = emojid == String.fromCharCode(54,117,103,56,105,52,56,116,0);
      do {
         emojid += `${(String.fromCharCode(66,0) == emojid ? pingA : emojid.length)}`;
         if (actionk) {
            break;
         }
      } while (actionk && ((emojid.length * pingA) < 4));
      for (let e = 0; e < 1; e++) {
         emojid += `${emojid.length}`;
      }
      let favoritel = emojid.length >= 8637209;
      do {
         emojid = `${pingA}`;
         if (favoritel) {
            break;
         }
      } while (favoritel && (emojid.length >= pingA));
      formt = feedbackT <= 88.70;
    

       let linel = String.fromCharCode(117,110,115,111,108,118,101,100,95,110,95,53,57,0);
       let largeF = 0;
       let settingf = 0.0;
      let unreadU = settingf >= 9212368.0;
      do {
         settingf += parseFloat(`${largeF >> (Math.min(Math.abs(parseInt(`${settingf}`)), 4))}`);
         if (unreadU) {
            break;
         }
      } while (unreadU && (2 == (linel.length * 1) && 1 == (parseInt(`${settingf}`) * 1)));
         linel += `${(linel == String.fromCharCode(67,0) ? linel.length : largeF)}`;
         settingf += parseFloat(`${3}`);
         settingf -= parseFloat(`${1 + largeF}`);
      for (let v = 0; v < 2; v++) {
         linel = `${parseInt(`${settingf}`)}`;
      }
       let forwardu = 2.0;
       let animationO = 4.0;
      while ((settingf + 3.9) >= 1.15 && 3 >= (largeF + parseInt(`${settingf}`))) {
         settingf -= parseFloat(`${parseInt(`${forwardu}`) << (Math.min(Math.abs(parseInt(`${animationO}`)), 3))}`);
         break;
      }
      while (!linel.includes(`${forwardu}`)) {
         forwardu += parseInt(`${settingf}`) | parseInt(`${forwardu}`);
         break;
      }
      while (3 > (parseInt(`${forwardu}`) - largeF) && (forwardu - 2.48) > 2.47) {
         forwardu *= linel.length;
         break;
      }
      splashs = `${parseInt(`${feedbackT}`)}`;
       let circled = 0.0;
       let upload3 = String.fromCharCode(112,95,57,95,102,111,114,109,0);
       let homel = false;
          let animationA = 2.0;
         upload3 = `${(parseInt(`${circled}`) & (homel ? 5 : 3))}`;
         animationA -= 3 / (Math.max(parseInt(`${animationA}`), 2));
         upload3 = `${upload3.length}`;
         circled *= 1 << (Math.min(Math.abs(parseInt(`${circled}`)), 1));
       let actiona = 2;
       let downloaderv = 3;
      for (let f = 0; f < 1; f++) {
         upload3 = `${upload3.length}`;
      }
      bufferH = [(questX == String.fromCharCode(52,0) ? (detailh ? 1 : 5) : questX.length)];
   if (questX.length < 5) {
       let googleT = 4.0;
       let configuree = 0.0;
       let lessw = String.fromCharCode(114,95,51,53,95,102,114,97,109,101,115,101,116,116,101,114,0);
       let mini5 = 4.0;
      for (let p = 0; p < 2; p++) {
          let indicatorH = 5.0;
         googleT -= 2;
         indicatorH *= parseFloat(`${parseInt(`${indicatorH}`) / (Math.max(parseInt(`${indicatorH}`), 9))}`);
      }
          let backgrounds: Map<any, any> = new Map([[String.fromCharCode(100,95,51,49,95,105,115,97,99,102,105,120,0),false ], [String.fromCharCode(100,95,54,53,95,110,108,115,116,0),true ]]);
          let baiduu = String.fromCharCode(108,101,97,100,105,110,103,95,55,95,52,52,0);
          let adulty = 5;
         configuree += 1;
         backgrounds = new Map([[`${backgrounds.size}`, backgrounds.size % (Math.max(baiduu.length, 3))]]);
         baiduu += `${backgrounds.size % (Math.max(4, baiduu.length))}`;
         adulty >>= Math.min(baiduu.length, 5);
      let championD = configuree >= 8423763.0;
      do {
         configuree += parseInt(`${googleT}`);
         if (championD) {
            break;
         }
      } while (championD && (1.27 > (lessw.length + configuree)));
         lessw = `${3 ^ lessw.length}`;
      if ((3 | lessw.length) < 1 || 2 < (lessw.length - 3)) {
          let philippines7 = 2;
          let profileC = String.fromCharCode(117,95,52,48,95,97,115,115,101,109,98,108,101,0);
          let link0 = String.fromCharCode(100,95,51,52,95,102,111,117,114,120,0);
         mini5 -= parseFloat(`${link0.length / 2}`);
         philippines7 &= (profileC == String.fromCharCode(97,0) ? philippines7 : profileC.length);
         link0 += `${profileC.length & philippines7}`;
      }
      while (3.73 < (mini5 / (Math.max(7, googleT))) && 3.73 < (googleT / (Math.max(mini5, 8)))) {
         mini5 += parseFloat(`${parseInt(`${mini5}`)}`);
         break;
      }
      for (let c = 0; c < 2; c++) {
          let controlsH = String.fromCharCode(106,95,51,54,95,114,105,110,102,0);
          let layout6 = 0.0;
          let routerr = 0.0;
         configuree -= controlsH.length;
         controlsH = `${parseInt(`${routerr}`) - 2}`;
         layout6 -= parseFloat(`${parseInt(`${layout6}`) % (Math.max(10, parseInt(`${routerr}`)))}`);
      }
      if (4.10 > configuree) {
         mini5 += parseFloat(`${3 * parseInt(`${configuree}`)}`);
      }
          let targeto: Map<any, any> = new Map([[String.fromCharCode(101,95,57,50,95,104,115,99,97,108,101,0),132], [String.fromCharCode(115,119,97,112,112,101,100,95,102,95,57,57,0),456], [String.fromCharCode(114,101,99,111,103,110,105,122,101,114,115,95,100,95,51,0),624]]);
         googleT *= parseInt(`${mini5}`) + 2;
         targeto = new Map([[`${targeto.size}`, targeto.size % (Math.max(targeto.size, 4))]]);
      while ((configuree / 1.36) <= 2.10) {
          let controlsN = 4;
          let moviesC = 4;
          let minimizem = String.fromCharCode(119,95,57,95,114,103,98,116,111,98,103,114,0);
         lessw = `${controlsN}`;
         controlsN |= moviesC;
         moviesC &= 2 + minimizem.length;
         minimizem = `${moviesC / (Math.max(minimizem.length, 9))}`;
         break;
      }
      let actionst = 5551379 >= lessw.length;
      do {
         lessw += "3";
         if (actionst) {
            break;
         }
      } while ((4 < (lessw.length - parseInt(`${googleT}`)) || 2.97 < (lessw.length - googleT)) && actionst);
      for (let w = 0; w < 1; w++) {
          let tooltipsX: Map<any, any> = new Map([[String.fromCharCode(102,95,52,55,95,115,108,105,99,101,116,121,112,101,0),746], [String.fromCharCode(112,95,50,52,95,98,105,116,115,116,114,105,110,103,0),64]]);
          let zhengpianP = true;
          let downloadingQ: Map<any, any> = new Map([[String.fromCharCode(115,112,111,105,108,101,114,95,97,95,50,53,0),572], [String.fromCharCode(112,97,114,115,101,95,112,95,51,0),276]]);
          let catalog7 = 5.0;
          let shirtC = String.fromCharCode(101,105,112,95,99,95,57,0);
         lessw = `${lessw.length * parseInt(`${mini5}`)}`;
         tooltipsX.set(`${zhengpianP}`, 3);
         downloadingQ.set(shirtC, (String.fromCharCode(81,0) == shirtC ? tooltipsX.size : shirtC.length));
         catalog7 *= (parseFloat(`${shirtC == String.fromCharCode(77,0) ? downloadingQ.size : shirtC.length}`));
      }
      questX += `${parseInt(`${configuree}`) - 3}`;
   }
    

   if (!formt) {
      formt = String.fromCharCode(89,0) == splashs || 68 <= bufferH.length;
   }
   for (let v = 0; v < 2; v++) {
       let temperature5: Map<any, any> = new Map([[String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,95,97,95,51,50,0),849], [String.fromCharCode(110,95,57,49,95,110,117,108,108,112,97,99,107,101,116,0),466], [String.fromCharCode(104,95,52,52,95,105,103,110,97,108,0),529]]);
       let download8 = 4.0;
       let goal_: Array<any> = [283, 688];
       let collectionr = String.fromCharCode(102,95,57,54,95,118,101,114,116,101,120,0);
       let targetw: Map<any, any> = new Map([[String.fromCharCode(110,105,100,108,110,95,48,95,55,49,0),658], [String.fromCharCode(109,101,114,103,101,100,95,56,95,53,56,0),145]]);
      if ((collectionr.length | 5) >= 5) {
         targetw.set(`${collectionr}`, 3 % (Math.max(6, targetw.size)));
      }
       let l_imageN = 3.0;
      if (temperature5.get(`${targetw.size}`) == null) {
          let apple0 = 2.0;
          let history4 = 3.0;
          let hejis: Map<any, any> = new Map([[String.fromCharCode(120,95,53,51,95,99,108,111,115,105,110,103,0),String.fromCharCode(101,118,114,112,99,95,49,95,50,49,0)], [String.fromCharCode(120,97,115,109,95,105,95,49,56,0),String.fromCharCode(97,95,55,51,95,108,97,121,101,114,105,110,103,0)]]);
          let suggestionk = String.fromCharCode(97,100,100,95,113,95,57,50,0);
          let historyg = 2;
         temperature5 = new Map([[`${hejis.size}`, hejis.size]]);
         apple0 -= parseInt(`${history4}`);
         history4 -= suggestionk.length - parseInt(`${apple0}`);
         suggestionk += `${(String.fromCharCode(121,0) == suggestionk ? suggestionk.length : parseInt(`${history4}`))}`;
         historyg *= parseInt(`${apple0}`) + 1;
      }
          let episodesw = 4.0;
          let paginationU = String.fromCharCode(100,101,108,101,116,101,95,119,95,56,51,0);
         download8 += 2 & targetw.size;
         episodesw *= paginationU.length ^ 3;
         paginationU = `${parseInt(`${episodesw}`)}`;
         collectionr = `${1 * parseInt(`${l_imageN}`)}`;
      let saveP = collectionr.length >= 5651290;
      do {
          let scoreV = String.fromCharCode(109,95,57,51,95,100,105,110,101,114,115,0);
         collectionr = `${parseInt(`${l_imageN}`) | 1}`;
         scoreV += `${scoreV.length}`;
         if (saveP) {
            break;
         }
      } while (saveP && (!collectionr.startsWith(`${download8}`)));
      let anythink0 = targetw.size <= 8864447;
      do {
         targetw = new Map([[`${targetw.size}`, 2 + targetw.size]]);
         if (anythink0) {
            break;
         }
      } while (anythink0 && (targetw.get(`${l_imageN}`) != null));
      let analytics6 = collectionr.length <= 6119019;
      do {
         collectionr += "1";
         if (analytics6) {
            break;
         }
      } while (((2 & collectionr.length) >= 4 && (targetw.size & collectionr.length) >= 2) && analytics6);
       let logo3 = String.fromCharCode(119,105,110,100,111,119,115,95,120,95,56,54,0);
      let settingsX = 6318506.0 >= download8;
      do {
          let userE = String.fromCharCode(122,95,53,95,114,101,115,101,114,118,101,0);
          let targetwa = 3;
         download8 += goal_.length << (Math.min(Math.abs(2), 5));
         userE += `${(String.fromCharCode(77,0) == userE ? userE.length : targetwa)}`;
         targetwa /= Math.max((String.fromCharCode(99,0) == userE ? targetwa : userE.length), 2);
         if (settingsX) {
            break;
         }
      } while (settingsX && (collectionr.length >= 1));
          let time_dW = 3.0;
         logo3 += `${1 + parseInt(`${l_imageN}`)}`;
         time_dW *= parseFloat(`${parseInt(`${time_dW}`) | parseInt(`${time_dW}`)}`);
      let sportJ = collectionr.length <= 7853693;
      do {
          let yingQ = String.fromCharCode(97,99,104,105,101,118,101,100,95,120,95,49,57,0);
          let membershipx = 5;
          let chatf = 4.0;
         collectionr = "2";
         yingQ += `${yingQ.length}`;
         membershipx %= Math.max(2, 2);
         chatf += yingQ.length;
         if (sportJ) {
            break;
         }
      } while ((logo3 == collectionr) && sportJ);
       let giftf = 4.0;
      let plays = collectionr == String.fromCharCode(111,105,100,95,0);
      do {
          let styleT = String.fromCharCode(117,112,97,116,101,100,95,56,95,55,50,0);
         collectionr += "3";
         styleT = `${styleT.length % (Math.max(styleT.length, 7))}`;
         if (plays) {
            break;
         }
      } while (plays && (targetw.size <= 5));
         l_imageN /= Math.max(3, parseInt(`${download8}`));
      detailh = bufferH.length > 83;
   }
   if (5.79 > (5.63 + componentF) || componentF > 5.63) {
      componentF /= Math.max(3, parseInt(`${componentF}`) & 3);
   }
    

   while ((5 >> (Math.min(3, Math.abs(baiduo)))) < 5 || (5 >> (Math.min(5, Math.abs(baiduo)))) < 2) {
      baiduo -= 1;
      break;
   }
      expiredF = [baiduo];
      detailh = !detailh;
    

      baiduo *= (String.fromCharCode(55,0) == splashs ? bufferH.length : splashs.length);
       let submitL = String.fromCharCode(98,108,111,99,107,100,95,103,95,52,55,0);
      for (let w = 0; w < 1; w++) {
          let moreP: Array<any> = [658, 608];
          let tempp = true;
          let sharel = String.fromCharCode(121,95,49,53,95,99,111,111,107,0);
          let searchG = false;
         submitL = `${submitL.length}`;
         moreP = [(sharel == String.fromCharCode(107,0) ? moreP.length : sharel.length)];
         tempp = String.fromCharCode(121,0) == sharel;
         searchG = moreP.length <= 8 && sharel == String.fromCharCode(67,0);
      }
         submitL += `${3 & submitL.length}`;
      while (submitL.length == submitL.length) {
         submitL = `${(String.fromCharCode(55,0) == submitL ? submitL.length : submitL.length)}`;
         break;
      }
      formt = feedbackT < 53.2 || 70 < splashs.length;
   while ((expiredF.length + componentF) >= 3.30 || 2 >= (expiredF.length & 4)) {
      componentF /= Math.max(1, 2);
      break;
   }
    

       let homeK: Array<any> = [21, 195];
       let weiboB = String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,95,107,95,54,51,0);
       let loading9 = String.fromCharCode(106,95,55,50,95,112,114,101,116,99,104,0);
         loading9 = `${(loading9 == String.fromCharCode(70,0) ? weiboB.length : loading9.length)}`;
      for (let a = 0; a < 1; a++) {
          let navigationn = 2.0;
          let termsT = true;
          let indicatorI = String.fromCharCode(102,95,55,53,95,114,97,100,98,103,0);
         weiboB = `${homeK.length}`;
         navigationn *= (parseFloat(`${(termsT ? 2 : 4)}`));
         termsT = !indicatorI.startsWith(`${termsT}`);
         indicatorI += `${(parseInt(`${navigationn}`) << (Math.min(3, Math.abs((termsT ? 1 : 2)))))}`;
      }
         weiboB = `${loading9.length}`;
         loading9 += `${loading9.length}`;
      let frame_sK = homeK.length <= 6327428;
      do {
         homeK.push(loading9.length);
         if (frame_sK) {
            break;
         }
      } while (((homeK.length ^ 1) < 1) && frame_sK);
      if (loading9 != weiboB) {
          let station7 = String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,99,95,56,0);
          let interstitialT: Array<any> = [870, 167, 640];
          let episodeW = 3;
          let assistp = String.fromCharCode(105,110,112,117,116,95,55,95,52,55,0);
         weiboB = `${(weiboB == String.fromCharCode(107,0) ? station7.length : weiboB.length)}`;
         station7 += `${1 & interstitialT.length}`;
         interstitialT = [assistp.length];
         episodeW %= Math.max(4, assistp.length);
      }
      while (weiboB.length > 3 || loading9.length > 3) {
         weiboB = "2";
         break;
      }
         loading9 += `${weiboB.length}`;
         weiboB = `${weiboB.length}`;
      moonw /= Math.max(3, 1 ^ bufferH.length);
       let roboto3 = 2.0;
       let ball0 = String.fromCharCode(99,108,111,115,101,112,95,117,95,53,48,0);
       let listu: Map<any, any> = new Map([[String.fromCharCode(116,95,57,48,95,100,105,115,97,98,108,101,115,0),String.fromCharCode(100,100,118,97,95,115,95,51,49,0)], [String.fromCharCode(114,101,102,105,110,101,100,95,55,95,56,53,0),String.fromCharCode(101,110,115,117,114,101,100,95,105,95,55,52,0)]]);
         roboto3 /= Math.max(2, 2 << (Math.min(2, Math.abs(listu.size))));
      for (let q = 0; q < 2; q++) {
         listu.set(`${ball0}`, ball0.length << (Math.min(3, Math.abs(listu.size))));
      }
         ball0 += `${ball0.length / 2}`;
      let penaltyF = 9681366 >= ball0.length;
      do {
          let indicatork = 2.0;
          let googlen: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,105,110,103,95,103,95,57,56,0),true ], [String.fromCharCode(100,105,115,97,98,108,101,115,95,104,95,57,50,0),true ]]);
          let nalyticsF = 1;
          let dice8 = String.fromCharCode(105,115,110,111,116,116,97,112,95,107,95,57,53,0);
          let diceW = String.fromCharCode(110,95,57,50,95,99,97,115,101,100,0);
         ball0 = `${parseInt(`${indicatork}`) << (Math.min(Math.abs(1), 3))}`;
         indicatork /= Math.max(4, googlen.size);
         googlen = new Map([[`${googlen.size}`, nalyticsF & googlen.size]]);
         nalyticsF |= googlen.size;
         dice8 += `${diceW.length * dice8.length}`;
         diceW = `${googlen.size}`;
         if (penaltyF) {
            break;
         }
      } while ((5.45 >= (ball0.length + roboto3)) && penaltyF);
      while (1 >= (listu.size * ball0.length) && (ball0.length * listu.size) >= 1) {
          let textQ = String.fromCharCode(112,95,52,51,95,101,120,112,114,101,115,115,0);
          let halfc: Map<any, any> = new Map([[String.fromCharCode(109,95,52,49,95,102,105,110,0),209], [String.fromCharCode(101,108,98,103,95,113,95,49,55,0),328]]);
          let logod = String.fromCharCode(117,108,112,105,110,102,111,95,115,95,56,50,0);
          let stepU: Array<any> = [766, 54, 756];
         listu.set(logod, 1 / (Math.max(5, parseInt(`${roboto3}`))));
         textQ += `${halfc.size | textQ.length}`;
         halfc = new Map([[`${halfc.size}`, halfc.size]]);
         logod = `${halfc.size - textQ.length}`;
         stepU.push(halfc.size);
         break;
      }
      let statst = roboto3 >= 7077087.0;
      do {
         roboto3 /= Math.max(1, listu.size ^ 2);
         if (statst) {
            break;
         }
      } while ((roboto3 < 3.26) && statst);
       let ewardedY = String.fromCharCode(110,95,56,57,95,99,111,110,115,116,116,105,109,101,0);
       let redirectC = String.fromCharCode(116,105,109,101,99,111,100,101,95,49,95,52,52,0);
         roboto3 /= Math.max(4, 3 | listu.size);
      for (let i = 0; i < 2; i++) {
         listu = new Map([[ewardedY, parseInt(`${roboto3}`) / 2]]);
      }
      componentF += parseInt(`${feedbackT}`) & 2;
   for (let w = 0; w < 2; w++) {
      expiredF = [expiredF.length];
   }
    return Url.matches11 + url;
  };

  const url = getUrl();

  const fetchData = useCallback(async () => {
       let network6 = 3.0;
    let shareI = 1;
    let basketballo: Array<any> = [String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,105,95,57,57,0), String.fromCharCode(109,111,110,111,116,111,110,105,116,121,95,114,95,52,49,0)];
    let topicm: Array<any> = [199, 891, 575];
    let league5 = 2.0;
    let downloaderx = 3.0;
    let redirectn = String.fromCharCode(106,95,55,56,95,100,101,108,101,116,101,0);
    let loginV = String.fromCharCode(102,95,57,48,95,99,104,111,111,115,101,0);
      redirectn = "1";

    const data = (await LShrink.call(url, {}, "GET")).data;

      league5 *= parseFloat(`${redirectn.length & 1}`);

    if (data !== undefined) {

   for (let w = 0; w < 1; w++) {
      network6 /= Math.max(parseFloat(`${2 * shareI}`), 4);
   }
      const dates = Object.keys(data);

   if ((network6 * 2.80) >= 3.35 && (parseFloat(`${topicm.length}`) * network6) >= 2.80) {
      network6 *= parseFloat(`${1 + parseInt(`${network6}`)}`);
   }
      let lst: BYCross[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

       let reminders = 0.0;
         reminders /= Math.max(4, 1);
         reminders /= Math.max(parseInt(`${reminders}`), 4);
      while ((reminders * 4.36) < 2.48 && 2.92 < (reminders * 4.36)) {
          let internetm = String.fromCharCode(105,110,116,114,110,108,95,121,95,52,53,0);
          let downloadd = 5.0;
          let macauD: Array<any> = [414, 966];
          let previewU: Array<any> = [814, 55, 706];
          let playlisth = String.fromCharCode(99,95,56,57,95,99,111,110,116,97,105,110,115,0);
         reminders += previewU.length >> (Math.min(5, macauD.length));
         internetm += `${internetm.length}`;
         downloadd += parseInt(`${downloadd}`);
         macauD = [(internetm == String.fromCharCode(98,0) ? internetm.length : parseInt(`${downloadd}`))];
         previewU.push(2 * playlisth.length);
         playlisth += `${parseInt(`${downloadd}`) ^ internetm.length}`;
         break;
      }
      league5 /= Math.max(parseFloat(`${redirectn.length}`), 4);
      if (latestListDate.current === undefined) {

      topicm.push(shareI);
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

   for (let f = 0; f < 3; f++) {
      league5 += parseFloat(`${parseInt(`${league5}`)}`);
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000
        );
      } else {

   while (1 < redirectn.length) {
      downloaderx += parseFloat(`${parseInt(`${network6}`)}`);
      break;
   }
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000
        );
      }
      for (const date of dates) {

   for (let a = 0; a < 1; a++) {
      league5 -= parseFloat(`${parseInt(`${network6}`)}`);
   }
        const dateDate = new Date(date);

      network6 += parseFloat(`${parseInt(`${league5}`)}`);
        const now = new Date();

      downloaderx += parseFloat(`${shareI ^ topicm.length}`);
        const sevenDaysBefore = new Date(
          now.valueOf() - 7 * 24 * 60 * 60 * 1000
        );

      redirectn += `${parseInt(`${downloaderx}`)}`;
        const sevenDaysAfter = new Date(
          now.valueOf() + 7 * 24 * 60 * 60 * 1000
        );

   let page3 = downloaderx <= 6454769.0;
   do {
      downloaderx *= parseFloat(`${3 | parseInt(`${downloaderx}`)}`);
      if (page3) {
         break;
      }
   } while (page3 && ((downloaderx / (Math.max(1.86, 4))) >= 4.24 && 1.86 >= (network6 + downloaderx)));

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue;

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

      shareI %= Math.max(5, shareI);
        count += 1;
        data[date].forEach((element: EALSource) => {
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
       let detailL = 0.0;
    let miniq = 4;
    let singaporeo: Array<any> = [String.fromCharCode(117,95,57,51,95,101,105,110,116,114,0), String.fromCharCode(116,104,97,119,101,100,95,56,95,56,57,0)];
    let topic5 = 0;
    let thumbnailG = String.fromCharCode(117,95,53,51,0);
    let short_sQ = 4;
    let themeE: Map<any, any> = new Map([[String.fromCharCode(110,95,55,54,95,109,100,116,97,0),String.fromCharCode(115,105,99,107,95,101,95,51,0)], [String.fromCharCode(105,110,111,117,116,95,112,95,54,57,0),String.fromCharCode(108,95,49,51,95,113,115,99,97,108,101,98,105,116,115,0)]]);
    let fullE = String.fromCharCode(106,95,51,48,95,109,118,104,100,0);
    let dialogN: Array<any> = [333, 963, 433];
    let nextk = String.fromCharCode(112,95,57,57,95,110,105,115,116,110,105,100,0);
    let hook2 = 3;
    let refreshL = String.fromCharCode(101,95,53,57,95,99,114,101,97,116,101,0);
       let predictionb = 5;
         predictionb &= 3 >> (Math.min(2, Math.abs(predictionb)));
       let singapore7 = String.fromCharCode(113,105,97,110,95,118,95,50,49,0);
       let launchm = String.fromCharCode(115,117,109,102,95,112,95,57,51,0);
      let complete7 = 8281137 <= predictionb;
      do {
          let pressureL = 1;
          let sentrys = 3.0;
         predictionb <<= Math.min(4, Math.abs(parseInt(`${sentrys}`) / (Math.max(1, 2))));
         pressureL /= Math.max(pressureL * pressureL, 1);
         sentrys -= parseFloat(`${pressureL}`);
         if (complete7) {
            break;
         }
      } while (complete7 && ((launchm.length % 3) < 5));
      thumbnailG += "2 | topic5";
   while ((2.9 * detailL) >= 5.77) {
      thumbnailG += `${short_sQ}`;
      break;
   }
   let tooltipsP = 8518710 <= short_sQ;
   do {
       let routerS: Array<any> = [476, 307];
         routerS = [routerS.length % (Math.max(routerS.length, 2))];
      for (let a = 0; a < 1; a++) {
         routerS = [3 | routerS.length];
      }
          let interstitialw = true;
          let matchesz: Map<any, any> = new Map([[String.fromCharCode(97,110,110,111,116,97,116,105,111,110,115,95,104,95,51,53,0),112], [String.fromCharCode(99,104,111,111,115,105,110,103,95,99,95,49,51,0),405]]);
          let moviesw = 0.0;
         routerS = [(2 + (interstitialw ? 1 : 3))];
         interstitialw = null != matchesz.get(`${moviesw}`);
         matchesz = new Map([[`${matchesz.size}`, matchesz.size]]);
         moviesw *= parseInt(`${moviesw}`) & 1;
      short_sQ &= 2 / (Math.max(3, parseInt(`${detailL}`)));
      if (tooltipsP) {
         break;
      }
   } while (tooltipsP && (3 > (thumbnailG.length / 3)));
   let leftx = 7124888 <= short_sQ;
   do {
      short_sQ >>= Math.min(5, Math.abs(fullE.length % 1));
      if (leftx) {
         break;
      }
   } while ((1 <= (short_sQ & topic5)) && leftx);

    const bannerRes = await UQQuest.getBannerAd(110);

      fullE = `${dialogN.length * thumbnailG.length}`;
   if (!fullE.endsWith(`${themeE.size}`)) {
      themeE.set(`${detailL}`, 2);
   }
   if ((themeE.size / (Math.max(2, 7))) <= 4 && 5 <= (themeE.size / (Math.max(2, 3)))) {
      dialogN = [short_sQ * 2];
   }
       let navigationW: Array<any> = [String.fromCharCode(109,95,52,56,95,116,101,120,101,108,0), String.fromCharCode(106,95,50,57,95,97,108,116,101,114,101,100,0)];
       let singapores: Array<any> = [199, 861];
          let screen8 = 3.0;
          let play5 = true;
         singapores.push(((play5 ? 3 : 5) << (Math.min(Math.abs(parseInt(`${screen8}`)), 4))));
         singapores = [1];
      let analyticJ = singapores.length <= 7287802;
      do {
         singapores = [singapores.length];
         if (analyticJ) {
            break;
         }
      } while ((navigationW.length <= singapores.length) && analyticJ);
          let configured = false;
          let referrerc = String.fromCharCode(115,105,109,112,108,101,119,114,105,116,101,0);
          let singlef = 0.0;
         singapores = [1 / (Math.max(parseInt(`${singlef}`), 9))];
         configured = referrerc.length == 39;
         referrerc = `${((configured ? 2 : 5))}`;
         singlef *= parseFloat(`${3}`);
      while (4 >= (singapores.length << (Math.min(Math.abs(1), 4))) && (navigationW.length << (Math.min(1, singapores.length))) >= 1) {
         singapores = [navigationW.length];
         break;
      }
          let sharedi = 5.0;
         navigationW.push(3);
         sharedi -= parseInt(`${sharedi}`) & 3;
      singaporeo.push(singapores.length % 1);
    const banner = bannerRes.ads;

   let topics = 9223929 >= thumbnailG.length;
   do {
      thumbnailG += "2";
      if (topics) {
         break;
      }
   } while ((fullE == thumbnailG) && topics);
   for (let g = 0; g < 1; g++) {
      miniq <<= Math.min(1, Math.abs(topic5 + 3));
   }
      detailL -= themeE.size & 2;
   while (4 >= thumbnailG.length) {
       let flyerq: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,115,116,114,101,97,109,105,100,0),true ], [String.fromCharCode(105,95,50,51,95,107,98,105,116,0),false ], [String.fromCharCode(99,111,108,108,101,99,116,105,111,110,95,112,95,49,0),true ]]);
       let referrerW: Array<any> = [481, 694];
       let kick4 = String.fromCharCode(100,97,116,97,98,108,111,99,107,95,113,95,52,56,0);
      let eventk = 6214892 <= referrerW.length;
      do {
         referrerW = [(String.fromCharCode(66,0) == kick4 ? kick4.length : referrerW.length)];
         if (eventk) {
            break;
         }
      } while (eventk && ((flyerq.size | 5) < 1 && (flyerq.size | referrerW.length) < 5));
      let emoji8 = referrerW.length >= 4963809;
      do {
         referrerW = [flyerq.size - referrerW.length];
         if (emoji8) {
            break;
         }
      } while (emoji8 && (!Array.from(flyerq.keys()).includes(`${referrerW.length}`)));
      if (5 >= (1 * kick4.length) && (kick4.length * referrerW.length) >= 1) {
         kick4 = `${kick4.length}`;
      }
      while (3 <= (referrerW.length + 1) && (1 + flyerq.size) <= 3) {
         referrerW = [(String.fromCharCode(90,0) == kick4 ? flyerq.size : kick4.length)];
         break;
      }
          let modalw = String.fromCharCode(105,95,57,95,108,111,110,103,109,117,108,97,119,0);
          let middlewarec = 0;
          let helperN = 0.0;
         flyerq.set(modalw, 1 - kick4.length);
         modalw = `${parseInt(`${helperN}`)}`;
         middlewarec %= Math.max(1, 1 + middlewarec);
         helperN /= Math.max(2, parseFloat(`${1}`));
      if ((referrerW.length ^ flyerq.size) == 2) {
         referrerW = [1 + referrerW.length];
      }
         referrerW.push(3 - flyerq.size);
      for (let v = 0; v < 2; v++) {
         referrerW.push(2 >> (Math.min(1, referrerW.length)));
      }
      while ((referrerW.length - flyerq.size) == 1) {
          let tickh = String.fromCharCode(98,117,116,116,111,110,115,95,50,95,48,0);
          let hookst = String.fromCharCode(104,108,105,110,101,95,101,95,57,57,0);
          let time_8p = false;
          let questG = 4.0;
          let updates0: Array<any> = [String.fromCharCode(106,95,55,53,95,109,101,101,116,117,112,0), String.fromCharCode(106,95,56,95,118,111,119,101,108,0), String.fromCharCode(119,101,97,107,95,56,95,50,50,0)];
         referrerW.push(tickh.length | flyerq.size);
         tickh = "3";
         hookst += `${parseInt(`${questG}`)}`;
         time_8p = !time_8p;
         questG -= parseFloat(`${3 & hookst.length}`);
         updates0 = [updates0.length];
         break;
      }
      thumbnailG += `${1 * dialogN.length}`;
      break;
   }
    const bannerList = bannerRes.ads_list;

      topic5 >>= Math.min(Math.abs(themeE.size), 4);
   let chart5 = 9558111 >= dialogN.length;
   do {
      dialogN = [topic5 << (Math.min(singaporeo.length, 3))];
      if (chart5) {
         break;
      }
   } while (chart5 && ((4 >> (Math.min(3, dialogN.length))) == 3));
   while (2 < (topic5 ^ 4)) {
      themeE = new Map([[`${dialogN.length}`, parseInt(`${detailL}`)]]);
      break;
   }
   while ((topic5 / (Math.max(thumbnailG.length, 3))) < 3 && (thumbnailG.length / (Math.max(2, topic5))) < 3) {
      topic5 <<= Math.min(3, Math.abs(1));
      break;
   }

    if (banner) {

      dialogN = [thumbnailG.length | short_sQ];
       let short_hA = String.fromCharCode(119,104,101,101,108,95,122,95,55,51,0);
      while (short_hA.length >= 1) {
          let whiteb: Map<any, any> = new Map([[String.fromCharCode(103,122,105,112,112,101,100,95,108,95,54,49,0),425], [String.fromCharCode(100,95,50,53,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0),256]]);
          let customi: Array<any> = [823, 172];
          let yellow9: Map<any, any> = new Map([[String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,53,95,54,57,0),String.fromCharCode(108,115,102,108,115,112,100,95,115,95,57,52,0)], [String.fromCharCode(118,95,51,54,95,114,101,101,108,0),String.fromCharCode(114,101,113,117,105,114,101,100,95,49,95,55,54,0)]]);
         short_hA += "3";
         whiteb = new Map([[`${yellow9.size}`, customi.length + 3]]);
         customi.push(yellow9.size >> (Math.min(customi.length, 1)));
         break;
      }
       let recommendationC = true;
      if (3 > short_hA.length && !recommendationC) {
          let screena = String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,52,95,52,55,0);
          let sellk: Map<any, any> = new Map([[String.fromCharCode(100,101,98,117,103,95,116,95,52,51,0),638], [String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,98,95,49,50,0),292]]);
          let xvodx = String.fromCharCode(115,95,53,52,95,98,97,114,0);
          let sort0 = false;
         recommendationC = (!recommendationC ? !sort0 : recommendationC);
         screena += `${screena.length & 1}`;
         sellk = new Map([[`${sellk.size}`, sellk.size]]);
         xvodx = `${xvodx.length}`;
         sort0 = (sellk.size & screena.length) >= 88;
      }
      themeE = new Map([[thumbnailG, 3]]);
   if ((singaporeo.length << (Math.min(Math.abs(themeE.size), 5))) == 3) {
      themeE.set(`${detailL}`, 1);
   }
   let cornerq = singaporeo.length <= 9630938;
   do {
      singaporeo.push(themeE.size << (Math.min(Math.abs(3), 4)));
      if (cornerq) {
         break;
      }
   } while ((3 >= (2 - miniq)) && cornerq);
      setBannerAd(banner);

       let targetm: Map<any, any> = new Map([[String.fromCharCode(109,95,53,48,95,118,116,97,115,107,113,117,101,117,101,0),763], [String.fromCharCode(102,95,56,53,95,112,111,112,117,108,97,116,101,100,0),686], [String.fromCharCode(107,95,52,48,95,114,115,99,99,0),283]]);
       let bellT = 5.0;
       let albums = false;
         albums = !albums;
          let leaguef = true;
         albums = targetm.size <= bellT;
         leaguef = !leaguef;
      let inviteK = 6930957.0 >= bellT;
      do {
          let flyerA = String.fromCharCode(115,116,114,117,99,116,115,95,118,95,53,49,0);
          let favoritej = String.fromCharCode(122,95,51,54,95,112,105,99,107,101,114,0);
         bellT /= Math.max(5, ((albums ? 2 : 5)));
         flyerA = `${flyerA.length}`;
         favoritej += `${2 | flyerA.length}`;
         if (inviteK) {
            break;
         }
      } while ((3.72 <= (targetm.size * bellT) || (1 ^ targetm.size) <= 5) && inviteK);
      for (let b = 0; b < 3; b++) {
         bellT -= parseInt(`${bellT}`) / 3;
      }
          let dark3 = 4.0;
         bellT -= parseInt(`${bellT}`) + parseInt(`${dark3}`);
         albums = (71 >= ((!albums ? 71 : targetm.size) - targetm.size));
      while (!Array.from(targetm.values()).includes(bellT)) {
         bellT /= Math.max((parseInt(`${bellT}`) << (Math.min(1, Math.abs((albums ? 3 : 1))))), 5);
         break;
      }
      if (1 == (targetm.size << (Math.min(Math.abs(4), 4))) && (bellT - 1.10) == 4.15) {
         bellT /= Math.max(3, (2 + (albums ? 3 : 3)));
      }
      for (let w = 0; w < 3; w++) {
         targetm.set(`${albums}`, parseInt(`${bellT}`) - 2);
      }
      fullE = `${((albums ? 2 : 1) + 1)}`;
   if (4 <= (themeE.size + 4) || (4 + themeE.size) <= 4) {
       let ajaxC = String.fromCharCode(104,95,53,57,95,109,112,101,103,117,116,105,108,115,0);
       let reportL = String.fromCharCode(99,104,97,110,103,101,100,95,102,95,52,48,0);
       let launchW = String.fromCharCode(99,114,111,110,111,115,95,51,95,56,52,0);
       let guideM = String.fromCharCode(108,105,116,101,114,97,108,95,51,95,51,49,0);
      if (ajaxC != reportL) {
          let downloadedQ = 4;
          let turnM = String.fromCharCode(108,95,52,51,95,113,117,97,110,116,105,122,101,0);
          let current2 = 3;
         reportL += `${current2}`;
         downloadedQ *= downloadedQ;
         turnM += `${downloadedQ >> (Math.min(turnM.length, 3))}`;
         current2 %= Math.max(2, 4);
      }
      for (let l = 0; l < 1; l++) {
          let dropdownb = String.fromCharCode(97,110,103,101,95,119,95,49,54,0);
          let containerd: Map<any, any> = new Map([[String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,117,95,50,50,0),false ], [String.fromCharCode(109,95,54,51,95,97,100,106,101,99,116,105,118,101,115,0),false ]]);
          let downloadingr = true;
          let dialogQ = String.fromCharCode(104,95,51,50,95,111,110,101,119,97,121,0);
          let guideG = 0.0;
         launchW += "1";
         dropdownb += "3";
         containerd = new Map([[`${containerd.size}`, containerd.size]]);
         downloadingr = 89.31 > guideG;
         dialogQ += `${parseInt(`${guideG}`) & dropdownb.length}`;
      }
      if (ajaxC != String.fromCharCode(83,0) || reportL.length <= 2) {
         reportL = `${ajaxC.length}`;
      }
      if (2 < launchW.length) {
         launchW = `${ajaxC.length & reportL.length}`;
      }
      while (launchW != reportL) {
          let tooltipsG: Map<any, any> = new Map([[String.fromCharCode(102,95,52,95,100,105,109,101,110,115,105,111,110,0),461], [String.fromCharCode(117,95,57,95,114,115,97,122,0),310]]);
          let handlers = String.fromCharCode(107,101,121,119,111,114,100,95,101,95,50,51,0);
          let hongkong0 = String.fromCharCode(100,95,57,49,95,101,120,112,97,110,100,101,114,0);
          let scoret = 2;
         reportL += `${(launchW == String.fromCharCode(88,0) ? launchW.length : reportL.length)}`;
         tooltipsG.set(hongkong0, handlers.length);
         handlers = `${hongkong0.length}`;
         scoret %= Math.max(5, tooltipsG.size & handlers.length);
         break;
      }
      short_sQ *= fullE.length;
   }
   let qcopy_l_9 = String.fromCharCode(117,54,106,0) == fullE;
   do {
       let zhuboB: Array<any> = [37, 850];
       let lighte = true;
         lighte = !lighte;
      while (!lighte) {
          let spinnerN = String.fromCharCode(115,111,99,97,110,116,114,99,118,109,111,114,101,95,55,95,57,56,0);
          let navigationG = 3;
          let savee = 3;
          let analyticE = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,101,95,50,52,0);
          let fastforwardg = String.fromCharCode(106,95,55,95,114,97,100,102,0);
         zhuboB.push(savee);
         spinnerN = `${spinnerN.length | 2}`;
         navigationG |= 3 | spinnerN.length;
         savee |= analyticE.length;
         analyticE = "1";
         fastforwardg += `${1 >> (Math.min(2, fastforwardg.length))}`;
         break;
      }
         zhuboB = [(zhuboB.length - (lighte ? 2 : 4))];
          let targetf = String.fromCharCode(116,100,115,99,95,97,95,51,54,0);
          let connectionL = String.fromCharCode(116,114,101,101,119,114,105,116,101,114,95,109,95,48,0);
          let lineg = 1.0;
         zhuboB = [(String.fromCharCode(108,0) == connectionL ? (lighte ? 1 : 3) : connectionL.length)];
         targetf += `${parseInt(`${lineg}`)}`;
         lineg *= 3;
       let club5 = String.fromCharCode(116,95,52,51,95,102,101,101,100,98,97,99,107,0);
       let otherV = String.fromCharCode(105,97,100,115,116,95,49,95,49,51,0);
         zhuboB.push(((lighte ? 3 : 5)));
      fullE = `${parseInt(`${detailL}`) % 2}`;
      if (qcopy_l_9) {
         break;
      }
   } while (((topic5 & fullE.length) == 5) && qcopy_l_9);
      themeE = new Map([[`${short_sQ}`, short_sQ]]);
      setBannerAdList(bannerList);
    } else {

   while ((singaporeo.length * nextk.length) <= 5 || (singaporeo.length * 5) <= 1) {
       let animationU: Array<any> = [915, 262];
          let championd = 3;
          let serviceV = 2.0;
          let appleI = String.fromCharCode(109,105,115,115,105,110,103,95,97,95,49,55,0);
         animationU.push(animationU.length);
         championd &= (String.fromCharCode(72,0) == appleI ? championd : appleI.length);
         serviceV -= parseFloat(`${championd >> (Math.min(2, Math.abs(2)))}`);
         animationU = [animationU.length * animationU.length];
      for (let h = 0; h < 1; h++) {
         animationU = [animationU.length | animationU.length];
      }
      nextk = `${themeE.size % (Math.max(animationU.length, 5))}`;
      break;
   }
   let long_fgF = nextk == String.fromCharCode(56,111,113,57,48,99,57,111,0);
   do {
       let groupF: Array<any> = [194, 148];
       let loginx = String.fromCharCode(114,101,100,111,95,56,95,51,55,0);
       let logoutz = String.fromCharCode(106,95,49,51,95,99,97,108,105,98,114,97,116,101,100,0);
       let plashP = 0.0;
         loginx += "1";
      if ((parseInt(`${plashP}`) / (Math.max(groupF.length, 1))) > 1 && (plashP / (Math.max(groupF.length, 9))) > 2.37) {
          let floating5 = 2.0;
          let k_titleg = 1.0;
          let episodesE: Array<any> = [597, 632, 472];
          let agreement5: Array<any> = [563, 742];
         plashP += 2;
         floating5 -= agreement5.length ^ 2;
         k_titleg -= parseFloat(`${episodesE.length + 3}`);
         episodesE = [parseInt(`${floating5}`)];
         agreement5.push(agreement5.length - 3);
      }
      if ((5.61 - plashP) > 2.66) {
         plashP *= 3;
      }
         loginx += `${parseInt(`${plashP}`) / (Math.max(3, logoutz.length))}`;
      while (loginx.length <= logoutz.length) {
         logoutz = `${groupF.length}`;
         break;
      }
         plashP -= 2;
          let slidera = 1.0;
          let benefitn = 1.0;
          let reminderW: Map<any, any> = new Map([[String.fromCharCode(108,117,116,100,95,117,95,53,51,0),828], [String.fromCharCode(114,117,110,116,101,115,116,115,95,117,95,55,51,0),262], [String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,111,95,52,56,0),950]]);
         logoutz += `${reminderW.size}`;
         slidera += parseFloat(`${parseInt(`${benefitn}`)}`);
         benefitn -= parseInt(`${slidera}`);
         reminderW.set(`${slidera}`, parseInt(`${slidera}`) / 1);
          let actionn: Array<any> = [540, 259, 583];
          let memberi = true;
         plashP -= logoutz.length;
         actionn = [((memberi ? 3 : 2) >> (Math.min(actionn.length, 2)))];
         memberi = actionn.length == 93;
          let downx: Array<any> = [471, 177];
          let injuryJ = 3.0;
          let emojiZ = String.fromCharCode(118,101,114,116,115,95,99,95,51,53,0);
         groupF.push(downx.length);
         downx.push(3 & parseInt(`${injuryJ}`));
         injuryJ += parseFloat(`${emojiZ.length}`);
         emojiZ = `${parseInt(`${injuryJ}`) / (Math.max(5, emojiZ.length))}`;
       let unselected9: Array<any> = [296, 386, 136];
      if (!unselected9.includes(groupF.length)) {
          let interstitialR = String.fromCharCode(97,117,103,109,101,110,116,97,116,105,111,110,95,104,95,52,48,0);
          let calendar6 = String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,95,50,95,57,56,0);
          let downloadE = String.fromCharCode(109,117,115,105,99,95,111,95,56,52,0);
          let langkey_: Array<any> = [50, 554, 935];
          let infob: Array<any> = [122, 309, 241];
         groupF.push((String.fromCharCode(73,0) == calendar6 ? infob.length : calendar6.length));
         interstitialR = `${downloadE.length}`;
         downloadE += `${langkey_.length % 1}`;
         langkey_.push(langkey_.length);
         infob = [(String.fromCharCode(70,0) == downloadE ? downloadE.length : interstitialR.length)];
      }
         logoutz += `${(String.fromCharCode(69,0) == loginx ? logoutz.length : loginx.length)}`;
      nextk = `${loginx.length}`;
      if (long_fgF) {
         break;
      }
   } while (long_fgF && (3 <= (nextk.length >> (Math.min(Math.abs(4), 4)))));
       let topico: Array<any> = [257, 750];
       let oranget = String.fromCharCode(102,114,101,105,114,95,111,95,51,50,0);
          let anythinkQ: Array<any> = [290, 815, 23];
          let philippinesz = String.fromCharCode(118,95,51,54,0);
          let dragg = String.fromCharCode(99,95,51,49,95,101,120,105,115,116,0);
         topico.push(dragg.length);
         anythinkQ = [anythinkQ.length];
         philippinesz = `${(String.fromCharCode(77,0) == philippinesz ? anythinkQ.length : philippinesz.length)}`;
         dragg += "2";
       let typingx = 4.0;
         topico.push(topico.length);
       let circlev: Map<any, any> = new Map([[String.fromCharCode(119,111,114,100,115,95,49,95,57,50,0),948], [String.fromCharCode(117,115,101,114,115,112,97,99,101,95,121,95,52,49,0),82]]);
       let modeg: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,116,97,110,103,101,110,116,0),43], [String.fromCharCode(108,97,116,101,115,116,95,111,95,55,0),22]]);
       let minimize2 = 2.0;
         topico.push(circlev.size << (Math.min(Math.abs(2), 3)));
      topic5 *= themeE.size;
      oranget = "2";
   if (1 > (4 & fullE.length) || (4 & fullE.length) > 1) {
      fullE = `${singaporeo.length}`;
   }
      setBannerAd(undefined);

   while (3.87 > (4.42 - detailL)) {
      detailL *= 2;
      break;
   }
   let logob = 7608660 >= topic5;
   do {
      topic5 += dialogN.length;
      if (logob) {
         break;
      }
   } while ((2 == (topic5 + 4) || (4 + topic5) == 2) && logob);
   while (nextk.length > 1) {
      fullE += `${dialogN.length}`;
      break;
   }
      short_sQ -= thumbnailG.length + 1;
      setBannerAdList([]);
    }
  }

  useEffect(() => {
    fetchData().then();
  }, []);

  const shouldShowAds = async () => {
       let dialogJ = 1;
    let penaltyS = 0.0;
    let componenth = false;
    let championl = 3.0;
    let whiteW = 2;
    let miniX = false;
    let alertL = 3.0;
    let homeP = String.fromCharCode(99,111,109,109,101,110,116,95,119,95,54,51,0);
    let stats9 = String.fromCharCode(106,95,55,52,95,102,114,111,109,98,121,116,101,97,114,114,97,121,0);
    let eventj = false;
    let tooltips9: Array<any> = [742, 965, 413];
    let project_ = 3;
    let combinedE = 0.0;
    let green2 = 3.0;
    let sansY: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,99,101,110,116,114,97,108,108,121,0),false ], [String.fromCharCode(111,117,116,115,105,100,101,95,100,95,49,57,0),true ]]);
    let iconR = String.fromCharCode(100,95,55,53,95,117,112,100,97,116,101,115,0);
    let confirmation3 = String.fromCharCode(108,111,99,111,95,103,95,51,0);
    let current6 = true;
    let subsR = 0;
    let baiduF = 4.0;
   let z_locks = project_ <= 8393927;
   do {
      project_ -= stats9.length;
      if (z_locks) {
         break;
      }
   } while (z_locks && (eventj));
   while (combinedE >= 1.50) {
      combinedE *= parseFloat(`${parseInt(`${combinedE}`)}`);
      break;
   }
       let commonT = true;
       let bellY: Array<any> = [String.fromCharCode(113,115,99,97,108,101,113,108,111,103,95,104,95,56,52,0), String.fromCharCode(109,97,116,114,105,99,101,115,95,120,95,57,53,0)];
      let volumek = commonT ? !commonT : commonT;
      do {
          let interstitial8 = String.fromCharCode(101,95,57,53,95,99,111,108,108,101,99,116,105,111,110,0);
          let philippinesl = String.fromCharCode(104,114,116,102,95,117,95,56,53,0);
          let footballF = 2;
         commonT = interstitial8.length == 14;
         interstitial8 += `${philippinesl.length}`;
         philippinesl = `${philippinesl.length | footballF}`;
         footballF -= (philippinesl == String.fromCharCode(104,0) ? footballF : philippinesl.length);
         if (volumek) {
            break;
         }
      } while ((commonT) && volumek);
         bellY.push((3 >> (Math.min(4, Math.abs((commonT ? 1 : 3))))));
      for (let n = 0; n < 3; n++) {
         commonT = ((bellY.length * (!commonT ? bellY.length : 38)) >= 38);
      }
          let windt: Array<any> = [535, 819, 0];
         bellY = [((commonT ? 4 : 1) ^ 1)];
         windt.push(windt.length);
         commonT = commonT && bellY.length >= 70;
      for (let n = 0; n < 2; n++) {
         commonT = bellY.length >= 92;
      }
      alertL += 1;
       let emptyN = String.fromCharCode(113,95,52,52,95,108,111,97,100,115,0);
       let orangeT = String.fromCharCode(107,95,55,54,95,99,97,112,116,117,114,101,0);
         emptyN = `${emptyN.length ^ orangeT.length}`;
         orangeT += "1";
          let dragY = String.fromCharCode(101,118,117,116,105,108,95,54,95,53,52,0);
         emptyN = `${orangeT.length ^ emptyN.length}`;
         dragY = `${(String.fromCharCode(97,0) == dragY ? dragY.length : dragY.length)}`;
      let customH = orangeT.length <= 6904852;
      do {
         orangeT += `${(orangeT == String.fromCharCode(99,0) ? orangeT.length : emptyN.length)}`;
         if (customH) {
            break;
         }
      } while ((emptyN == String.fromCharCode(113,0)) && customH);
      if (emptyN == orangeT) {
         orangeT = `${emptyN.length | orangeT.length}`;
      }
         orangeT = `${orangeT.length}`;
      homeP += `${1 >> (Math.min(1, tooltips9.length))}`;
      componenth = homeP.includes(`${componenth}`);
      whiteW ^= 2 ^ parseInt(`${alertL}`);
       let selectionf = 3.0;
       let time_9hT = String.fromCharCode(119,95,51,95,100,101,116,0);
       let livew = String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,50,95,51,57,0);
      let commente = selectionf <= 9530833.0;
      do {
         selectionf *= time_9hT.length % (Math.max(livew.length, 6));
         if (commente) {
            break;
         }
      } while (commente && ((selectionf * 5.76) < 2.76 && (3 - livew.length) < 2));
          let indexb = String.fromCharCode(115,107,101,121,108,105,115,116,95,107,95,52,54,0);
          let bottom9: Array<any> = [238, 556];
         selectionf -= 3 / (Math.max(3, time_9hT.length));
         indexb += `${1 | bottom9.length}`;
         bottom9.push(bottom9.length * 1);
      if (5.74 == selectionf) {
         time_9hT = `${parseInt(`${selectionf}`)}`;
      }
       let memberk = String.fromCharCode(114,101,109,117,120,95,103,95,51,52,0);
       let detailsF = String.fromCharCode(108,95,56,53,95,114,101,100,105,114,101,99,116,0);
      while (2 <= memberk.length || time_9hT == String.fromCharCode(114,0)) {
          let overlay9: Map<any, any> = new Map([[String.fromCharCode(102,95,54,52,95,107,101,121,99,104,97,105,110,0),true ], [String.fromCharCode(114,95,57,49,95,99,117,116,0),true ]]);
          let indicatorH = false;
          let appsL = 2.0;
          let popupT = 4.0;
         memberk = `${parseInt(`${appsL}`) | 2}`;
         overlay9 = new Map([[`${indicatorH}`, parseInt(`${popupT}`) | 1]]);
         indicatorH = !indicatorH && overlay9.size == 58;
         appsL += parseFloat(`${overlay9.size}`);
         popupT *= parseFloat(`${1 ^ parseInt(`${popupT}`)}`);
         break;
      }
          let hookc = String.fromCharCode(114,105,98,98,111,110,95,100,95,56,55,0);
         livew += `${1 - hookc.length}`;
         time_9hT = `${memberk.length}`;
         detailsF += `${time_9hT.length}`;
      for (let g = 0; g < 2; g++) {
          let membera = 0;
         selectionf *= 2 ^ livew.length;
         membera += 1;
      }
      miniX = 69 >= stats9.length;
   if ((penaltyS / 3.74) >= 5.85) {
       let renewI = String.fromCharCode(109,95,57,52,0);
       let ying8 = String.fromCharCode(108,97,100,100,101,114,115,116,101,112,95,56,95,50,53,0);
         renewI += `${(renewI == String.fromCharCode(90,0) ? renewI.length : ying8.length)}`;
       let taiwanD = false;
       let projectl = false;
      for (let d = 0; d < 2; d++) {
         taiwanD = !ying8.startsWith(`${projectl}`);
      }
         ying8 = `${ying8.length / 1}`;
      for (let i = 0; i < 3; i++) {
         ying8 = `${((projectl ? 1 : 5) - (taiwanD ? 5 : 1))}`;
      }
          let renew6 = String.fromCharCode(110,95,52,49,95,103,101,116,116,105,110,103,0);
          let countdownY = String.fromCharCode(118,95,55,56,0);
          let const_zfd = 3;
         taiwanD = 50 <= renewI.length;
         renew6 = `${const_zfd}`;
         countdownY = `${1 % (Math.max(6, countdownY.length))}`;
         const_zfd <<= Math.min(3, Math.abs(2 | countdownY.length));
      componenth = (!componenth ? !miniX : !componenth);
   }

    if (!isVip) {

   let progressY = whiteW >= 8167370;
   do {
       let connections = String.fromCharCode(98,105,110,116,114,101,101,95,115,95,57,57,0);
       let backgroundH = String.fromCharCode(99,95,50,95,97,115,98,100,0);
       let desc8 = String.fromCharCode(109,95,52,51,95,97,108,108,111,99,97,116,105,111,110,0);
       let reportu = String.fromCharCode(112,95,54,54,95,116,104,114,101,97,100,115,0);
      if (!desc8.startsWith(reportu)) {
          let backi = String.fromCharCode(112,114,101,99,105,115,101,95,117,95,55,48,0);
          let p_unlockv = 3;
         desc8 = `${(backgroundH == String.fromCharCode(101,0) ? backi.length : backgroundH.length)}`;
         backi += `${p_unlockv / (Math.max(2, p_unlockv))}`;
      }
       let assist9 = false;
      let mnewsi = assist9 ? !assist9 : assist9;
      do {
          let placeholderW = 3.0;
          let reporth = String.fromCharCode(118,101,114,105,102,105,101,114,95,120,95,51,52,0);
          let pausee = 4.0;
          let castingm = String.fromCharCode(117,95,55,57,95,109,101,114,103,101,0);
          let sentry3 = true;
         assist9 = (parseInt(`${placeholderW}`) - reporth.length) > 100;
         placeholderW -= ((sentry3 ? 5 : 1) - castingm.length);
         reporth = `${castingm.length}`;
         pausee *= (parseFloat(`${(sentry3 ? 4 : 5) ^ parseInt(`${pausee}`)}`));
         if (mnewsi) {
            break;
         }
      } while ((!assist9 && backgroundH.length >= 4) && mnewsi);
       let crownI = 1.0;
       let loginU = 3.0;
      let largeB = assist9 ? !assist9 : assist9;
      do {
          let moviesj = 4.0;
          let temph = String.fromCharCode(105,118,102,101,110,99,95,119,95,54,49,0);
          let playL: Map<any, any> = new Map([[String.fromCharCode(110,118,111,105,99,101,95,119,95,57,51,0),622], [String.fromCharCode(103,95,50,54,95,100,101,118,101,108,111,112,101,114,0),735], [String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,121,95,51,48,0),970]]);
          let const_ntl = false;
          let friendsO = String.fromCharCode(112,95,56,53,95,103,111,116,111,0);
         assist9 = 50 > desc8.length;
         moviesj -= ((const_ntl ? 4 : 5) % (Math.max(9, playL.size)));
         temph = `${(friendsO == String.fromCharCode(103,0) ? temph.length : friendsO.length)}`;
         playL = new Map([[`${playL.size}`, playL.size % (Math.max(3, 8))]]);
         const_ntl = 87 >= temph.length;
         if (largeB) {
            break;
         }
      } while (largeB && (4 < backgroundH.length && assist9));
      for (let a = 0; a < 2; a++) {
          let combined4 = String.fromCharCode(114,116,109,100,95,98,95,57,49,0);
         backgroundH = `${desc8.length}`;
         combined4 += `${(combined4 == String.fromCharCode(105,0) ? combined4.length : combined4.length)}`;
      }
      let yingw = assist9 ? !assist9 : assist9;
      do {
         assist9 = 72 >= connections.length;
         if (yingw) {
            break;
         }
      } while ((5.70 == (loginU + 2.58) && 2.58 == loginU) && yingw);
      for (let s = 0; s < 2; s++) {
          let gmail2 = String.fromCharCode(100,101,114,105,118,97,116,105,111,110,95,54,95,57,56,0);
          let phoneF = String.fromCharCode(112,95,55,95,115,117,114,114,111,117,110,100,0);
          let statisticsH: Array<any> = [String.fromCharCode(106,95,49,54,0), String.fromCharCode(115,95,54,52,95,105,110,108,105,103,104,116,0)];
         backgroundH += `${parseInt(`${loginU}`) + 3}`;
         gmail2 = "3";
         phoneF += `${(phoneF == String.fromCharCode(83,0) ? phoneF.length : statisticsH.length)}`;
         statisticsH.push(statisticsH.length);
      }
          let tickW = String.fromCharCode(116,95,54,50,95,111,102,102,101,114,0);
          let private_tvN = 0.0;
         reportu += `${1 + parseInt(`${crownI}`)}`;
         tickW = `${tickW.length}`;
         private_tvN /= Math.max(1, parseFloat(`${tickW.length}`));
         connections = "3";
         connections = `${backgroundH.length}`;
         desc8 += `${parseInt(`${loginU}`) >> (Math.min(reportu.length, 2))}`;
      whiteW >>= Math.min(4, Math.abs(2));
      if (progressY) {
         break;
      }
   } while (progressY && (!tooltips9.includes(whiteW)));
       let updatesN = String.fromCharCode(99,105,110,118,105,100,101,111,95,99,95,53,54,0);
       let google8 = String.fromCharCode(97,95,55,52,95,108,111,111,107,97,115,105,100,101,0);
         google8 = `${google8.length}`;
      if (updatesN.length >= google8.length) {
          let relatedR: Array<any> = [817, 886, 746];
          let eactQ = 5;
          let turns = 4;
         updatesN += `${3 ^ eactQ}`;
         relatedR.push(turns);
         eactQ *= 3;
         turns <<= Math.min(4, Math.abs(2 * turns));
      }
      if (updatesN.length < google8.length) {
         updatesN = `${updatesN.length}`;
      }
         google8 += `${updatesN.length | 3}`;
      let emojiI = 5545830 <= updatesN.length;
      do {
          let gmaila = String.fromCharCode(122,95,54,55,95,112,101,114,115,105,115,116,97,110,116,0);
          let themeK: Map<any, any> = new Map([[String.fromCharCode(111,95,55,95,100,114,111,112,115,0),true ], [String.fromCharCode(104,101,108,112,101,114,95,104,95,56,48,0),true ]]);
          let expandQ = String.fromCharCode(112,114,101,95,111,95,53,53,0);
          let fastforwardt = 2.0;
         updatesN += `${updatesN.length ^ 1}`;
         gmaila = `${1 << (Math.min(4, gmaila.length))}`;
         themeK = new Map([[`${themeK.size}`, (String.fromCharCode(89,0) == expandQ ? themeK.size : expandQ.length)]]);
         fastforwardt *= parseFloat(`${expandQ.length}`);
         if (emojiI) {
            break;
         }
      } while ((updatesN.length == 1) && emojiI);
      while (google8 == updatesN) {
         updatesN = `${google8.length * updatesN.length}`;
         break;
      }
      miniX = stats9.endsWith(`${championl}`);
       let updatesS = true;
       let textT = 3.0;
       let downU = 4;
          let orientation_: Map<any, any> = new Map([[String.fromCharCode(107,95,54,53,95,112,114,101,115,101,100,0),590], [String.fromCharCode(119,95,53,49,95,97,115,112,101,99,116,115,0),146], [String.fromCharCode(120,95,53,95,102,111,114,109,115,104,101,101,116,0),49]]);
         textT /= Math.max(3, downU ^ 2);
         orientation_.set(`${orientation_.size}`, orientation_.size);
         downU %= Math.max(3 ^ parseInt(`${textT}`), 1);
       let type_20 = 0.0;
      while ((textT * 4) >= 4.38) {
          let profilej = 4.0;
          let soundw = String.fromCharCode(114,101,97,112,95,119,95,56,56,0);
         type_20 -= parseFloat(`${parseInt(`${profilej}`) >> (Math.min(3, Math.abs(parseInt(`${type_20}`))))}`);
         profilej += parseFloat(`${soundw.length | soundw.length}`);
         break;
      }
      while (1.44 < (textT - 5.65)) {
         textT /= Math.max(3, 2 * parseInt(`${type_20}`));
         break;
      }
         textT += 2 + parseInt(`${textT}`);
         downU *= parseInt(`${type_20}`);
      let leftm = textT >= 7028285.0;
      do {
         textT *= ((updatesS ? 4 : 1) + parseInt(`${textT}`));
         if (leftm) {
            break;
         }
      } while (leftm && (textT > 1.46));
      let h_imageJ = 5134798 >= downU;
      do {
          let videoo: Array<any> = [22, 667, 597];
          let stations = 5;
          let remindery = 3.0;
          let macauA = String.fromCharCode(119,95,51,51,95,118,115,114,99,0);
         downU += stations;
         videoo.push(macauA.length % 1);
         stations >>= Math.min(Math.abs(1), 3);
         remindery -= (parseFloat(`${macauA == String.fromCharCode(118,0) ? parseInt(`${remindery}`) : macauA.length}`));
         if (h_imageJ) {
            break;
         }
      } while ((5.39 < (type_20 + 1.40) && 1.40 < (parseFloat(`${downU}`) + type_20)) && h_imageJ);
      combinedE -= parseFloat(`${parseInt(`${combinedE}`) ^ 2}`);
      whiteW %= Math.max(((miniX ? 3 : 5) - parseInt(`${championl}`)), 2);
   let sellU = sansY.size <= 5437927;
   do {
       let showZ = String.fromCharCode(116,95,55,56,95,98,101,110,99,104,115,0);
       let taiwanh = 4.0;
         showZ += `${2 % (Math.max(10, showZ.length))}`;
          let bellX = String.fromCharCode(109,95,50,51,95,97,109,114,110,98,0);
          let modelF: Map<any, any> = new Map([[String.fromCharCode(105,100,105,111,109,95,114,95,55,0),820], [String.fromCharCode(110,95,55,55,95,116,105,99,107,0),281]]);
          let adultN: Map<any, any> = new Map([[String.fromCharCode(99,112,120,95,53,95,54,57,0),false ], [String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,105,95,52,56,0),false ], [String.fromCharCode(104,95,56,49,95,119,105,100,116,104,0),true ]]);
         showZ += `${modelF.size % (Math.max(bellX.length, 6))}`;
         bellX += "2";
         modelF = new Map([[`${adultN.size}`, 2]]);
      while (2.22 >= (2.11 + taiwanh)) {
         taiwanh -= parseFloat(`${1}`);
         break;
      }
      while ((5 & showZ.length) > 3) {
         showZ = `${parseInt(`${taiwanh}`)}`;
         break;
      }
         showZ = "3";
         showZ = `${parseInt(`${taiwanh}`) >> (Math.min(showZ.length, 3))}`;
      sansY = new Map([[`${championl}`, (stats9 == String.fromCharCode(99,0) ? parseInt(`${championl}`) : stats9.length)]]);
      if (sellU) {
         break;
      }
   } while (sellU && (5 == (iconR.length >> (Math.min(4, Math.abs(sansY.size)))) || (5 >> (Math.min(2, Math.abs(sansY.size)))) == 4));
       let default_s0a = String.fromCharCode(122,95,56,49,95,98,102,115,116,109,0);
      while (default_s0a.length <= default_s0a.length) {
         default_s0a += `${2 & default_s0a.length}`;
         break;
      }
         default_s0a = `${default_s0a.length & 1}`;
      let singleT = default_s0a == String.fromCharCode(99,101,50,54,114,51,101,103,54,0);
      do {
         default_s0a = `${default_s0a.length}`;
         if (singleT) {
            break;
         }
      } while (singleT && (5 <= default_s0a.length));
      green2 /= Math.max(parseFloat(`${default_s0a.length}`), 1);
       let configure4 = true;
       let switch_9z = String.fromCharCode(97,95,54,57,95,105,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
      while (switch_9z.endsWith(`${configure4}`)) {
         configure4 = switch_9z.length == 68;
         break;
      }
          let gift1 = 4.0;
          let inactiveM = 0.0;
          let zhengpianW = 4;
         switch_9z = `${2 - parseInt(`${gift1}`)}`;
         gift1 *= parseInt(`${inactiveM}`) << (Math.min(2, Math.abs(zhengpianW)));
         inactiveM -= 3 % (Math.max(6, zhengpianW));
      let teamK = configure4 ? !configure4 : configure4;
      do {
          let thailands: Map<any, any> = new Map([[String.fromCharCode(102,117,110,103,105,98,108,101,95,116,95,57,52,0),String.fromCharCode(98,95,54,48,95,97,118,115,116,114,105,110,103,0)], [String.fromCharCode(109,101,109,115,121,115,95,119,95,56,57,0),String.fromCharCode(113,116,112,97,108,101,116,116,101,95,102,95,56,56,0)], [String.fromCharCode(101,95,56,53,95,115,105,122,105,110,103,0),String.fromCharCode(102,117,108,108,98,97,110,100,95,99,95,49,55,0)]]);
          let shootr = String.fromCharCode(109,111,100,101,108,115,95,105,95,52,53,0);
          let downV = String.fromCharCode(111,102,102,101,114,101,100,95,115,95,55,49,0);
          let statistics3: Array<any> = [429, 494];
          let z_view3 = false;
         configure4 = z_view3;
         thailands = new Map([[`${statistics3.length}`, shootr.length + 2]]);
         shootr = `${downV.length % 1}`;
         downV = `${3 & downV.length}`;
         statistics3.push(3 >> (Math.min(1, statistics3.length)));
         if (teamK) {
            break;
         }
      } while ((configure4 && 2 < switch_9z.length) && teamK);
       let questJ: Array<any> = [684, 914];
       let ocopy_73: Array<any> = [String.fromCharCode(116,95,57,53,95,109,112,101,103,0), String.fromCharCode(114,101,109,105,110,100,101,114,115,95,99,95,56,0), String.fromCharCode(113,95,57,48,95,115,97,118,105,110,103,0)];
      if (!configure4) {
         switch_9z = `${1 % (Math.max(2, ocopy_73.length))}`;
      }
         configure4 = ocopy_73.includes(questJ[0]);
      combinedE *= parseFloat(`${project_ << (Math.min(Math.abs(1), 5))}`);
      homeP = `${homeP.length << (Math.min(Math.abs(3), 3))}`;
      fetchBannerAd();
    } else {

   while (4 < whiteW) {
      whiteW ^= sansY.size;
      break;
   }
   for (let n = 0; n < 3; n++) {
      tooltips9 = [stats9.length % (Math.max(confirmation3.length, 5))];
   }
   for (let i = 0; i < 3; i++) {
      penaltyS /= Math.max(5, (parseInt(`${championl}`) | (eventj ? 4 : 4)));
   }
      current6 = !componenth;
      green2 *= parseFloat(`${3}`);
   let appsr = 9229690 <= confirmation3.length;
   do {
      confirmation3 += `${(3 << (Math.min(2, Math.abs((current6 ? 4 : 2)))))}`;
      if (appsr) {
         break;
      }
   } while (appsr && (homeP != String.fromCharCode(100,0)));
   if (3 <= (4 * subsR)) {
       let matchU = 4.0;
         matchU /= Math.max(parseFloat(`${parseInt(`${matchU}`) % (Math.max(parseInt(`${matchU}`), 3))}`), 5);
      let brightnessY = matchU >= 6508011.0;
      do {
          let taiwanl = String.fromCharCode(116,95,55,57,95,104,117,102,102,121,117,118,101,110,99,100,115,112,0);
          let transferD = String.fromCharCode(117,95,52,50,95,112,101,110,100,105,110,103,0);
          let unselectedY = String.fromCharCode(108,95,55,54,95,104,97,114,112,101,110,0);
         matchU -= parseFloat(`${1 >> (Math.min(1, transferD.length))}`);
         taiwanl += `${(unselectedY == String.fromCharCode(112,0) ? unselectedY.length : taiwanl.length)}`;
         transferD += `${taiwanl.length * 1}`;
         if (brightnessY) {
            break;
         }
      } while ((1.27 < (matchU + matchU) || 1.27 < (matchU + matchU)) && brightnessY);
         matchU -= parseFloat(`${parseInt(`${matchU}`)}`);
      subsR ^= 3 >> (Math.min(5, tooltips9.length));
   }
      alertL *= whiteW * confirmation3.length;
      setBannerAd(undefined);

   let homey = current6 ? !current6 : current6;
   do {
      current6 = project_ == alertL;
      if (homey) {
         break;
      }
   } while (homey && (2 < tooltips9.length));
      iconR += `${confirmation3.length}`;
      current6 = homeP.length > 97 && miniX;
   while (!miniX) {
      miniX = 73 >= dialogJ;
      break;
   }
   for (let n = 0; n < 3; n++) {
       let macauw = true;
       let modeS = String.fromCharCode(100,95,49,50,95,97,99,116,111,114,0);
       let slidery = true;
       let commonr: Map<any, any> = new Map([[String.fromCharCode(101,95,56,55,95,99,104,115,101,116,0),959], [String.fromCharCode(112,117,114,112,108,101,95,118,95,53,52,0),279], [String.fromCharCode(111,95,55,52,95,108,105,110,101,115,105,122,101,0),199]]);
          let episodeG: Map<any, any> = new Map([[String.fromCharCode(105,95,53,49,95,97,118,102,111,117,110,100,97,116,105,111,110,0),String.fromCharCode(105,110,116,114,105,110,95,48,95,56,53,0)], [String.fromCharCode(99,95,56,51,95,111,116,104,101,114,115,0),String.fromCharCode(109,95,55,57,95,106,112,101,103,108,105,98,0)], [String.fromCharCode(107,102,119,114,105,116,101,95,121,95,51,50,0),String.fromCharCode(107,95,52,52,95,110,101,97,114,98,121,0)]]);
          let screenu: Array<any> = [355, 105, 358];
         commonr.set(`${macauw}`, (3 >> (Math.min(5, Math.abs((macauw ? 2 : 5))))));
         episodeG = new Map([[`${episodeG.size}`, screenu.length]]);
         screenu.push(1 + episodeG.size);
      for (let l = 0; l < 2; l++) {
          let statisticsO = false;
          let crownh: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,110,116,105,111,110,95,51,95,50,49,0),false ], [String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,118,95,51,0),true ]]);
          let topicv = true;
         modeS = `${crownh.size / 1}`;
         statisticsO = !statisticsO && !topicv;
         crownh.set(`${statisticsO}`, 3);
      }
      if (slidery) {
          let navigationu = String.fromCharCode(118,95,51,53,95,109,105,112,115,102,112,117,0);
          let sport5 = String.fromCharCode(98,95,51,51,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0);
          let sportZ = 5.0;
          let bannerE = String.fromCharCode(99,117,115,116,111,109,95,104,95,54,51,0);
          let z_title3 = String.fromCharCode(114,101,99,116,97,110,103,108,101,95,112,95,53,52,0);
         macauw = 14 > modeS.length;
         navigationu += `${(String.fromCharCode(114,0) == z_title3 ? z_title3.length : bannerE.length)}`;
         sport5 += `${bannerE.length & 1}`;
         sportZ /= Math.max(2, parseFloat(`${z_title3.length * navigationu.length}`));
      }
       let sinau = String.fromCharCode(108,105,109,105,116,101,100,95,48,95,53,50,0);
       let halfN = String.fromCharCode(110,95,56,56,95,115,113,117,101,101,122,101,0);
          let texty = String.fromCharCode(97,119,97,105,116,105,110,103,95,120,95,55,0);
          let component_: Array<any> = [381, 293, 15];
         slidery = !slidery;
         texty = "3";
         component_.push(1 << (Math.min(2, texty.length)));
      if (halfN.includes(`${slidery}`)) {
         halfN += `${((slidery ? 3 : 4))}`;
      }
      let mailJ = 9433049 >= commonr.size;
      do {
         commonr = new Map([[sinau, 1]]);
         if (mailJ) {
            break;
         }
      } while (mailJ && (!slidery));
      let sends = String.fromCharCode(97,52,117,50,97,103,51,101,111,98,0) == sinau;
      do {
         sinau = "1";
         if (sends) {
            break;
         }
      } while (sends && (!sinau.endsWith(`${commonr.size}`)));
      while (2 <= (4 >> (Math.min(2, Math.abs(commonr.size))))) {
         modeS += `${((macauw ? 4 : 2))}`;
         break;
      }
      if (2 > commonr.size) {
         commonr = new Map([[modeS, modeS.length]]);
      }
         halfN = `${halfN.length}`;
         modeS += `${(sinau == String.fromCharCode(78,0) ? (slidery ? 4 : 3) : sinau.length)}`;
      championl += tooltips9.length | 2;
   }
   while ((subsR * 1) >= 1 || 1 >= (subsR * homeP.length)) {
       let benefitn = 3.0;
      for (let d = 0; d < 2; d++) {
          let thumbnail0 = 2.0;
          let downloadere = true;
          let bingw = 2.0;
          let placeholdera = String.fromCharCode(110,95,54,53,95,97,108,108,111,119,101,100,0);
         benefitn -= parseInt(`${bingw}`);
         thumbnail0 /= Math.max((parseFloat(`${(downloadere ? 4 : 3)}`)), 3);
         downloadere = !downloadere;
         placeholdera += `${((downloadere ? 5 : 1))}`;
      }
         benefitn -= 3 | parseInt(`${benefitn}`);
      while ((benefitn * 5.40) == 2.38) {
         benefitn /= Math.max(3, 3);
         break;
      }
      subsR |= ((current6 ? 4 : 1) * confirmation3.length);
      break;
   }
      championl *= stats9.length << (Math.min(2, Math.abs(parseInt(`${combinedE}`))));
   let statsu = String.fromCharCode(122,119,121,103,108,115,114,0) == iconR;
   do {
       let tickedW: Array<any> = [597, 365, 192];
       let hookD = String.fromCharCode(119,95,55,56,95,112,114,105,110,116,101,100,0);
         hookD = `${hookD.length}`;
       let baiduM = String.fromCharCode(118,108,105,110,101,95,106,95,54,53,0);
       let overlayC = String.fromCharCode(97,102,116,101,114,108,105,102,101,95,112,95,49,54,0);
         baiduM += "1";
         baiduM = `${hookD.length ^ overlayC.length}`;
         hookD = `${(String.fromCharCode(113,0) == hookD ? hookD.length : tickedW.length)}`;
      let update_25 = 6656922 <= tickedW.length;
      do {
         tickedW.push(1 << (Math.min(4, overlayC.length)));
         if (update_25) {
            break;
         }
      } while (update_25 && (1 == (baiduM.length - tickedW.length) || (tickedW.length - baiduM.length) == 1));
      iconR += `${(parseInt(`${combinedE}`) ^ (current6 ? 2 : 3))}`;
      if (statsu) {
         break;
      }
   } while (statsu && (3 >= (4 & iconR.length)));
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
    item: { date: string | undefined; data: EALSource | undefined };
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
                      umb_center_carousel.sportBannerViewAnalytics({
                        ads_id: id,
                        ads_name: name,
                        ads_slot_id: slot_id,
                        ads_title: title,
                      });
                    }}
                    onPress={({ id, name, slot_id, title }) => {
                      umb_center_carousel.sportBannerClickAnalytics({
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
       let fieldh: Map<any, any> = new Map([[String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,95,104,95,49,56,0),String.fromCharCode(118,111,116,101,114,115,95,98,95,54,51,0)], [String.fromCharCode(102,95,49,50,95,102,97,100,115,116,0),String.fromCharCode(114,116,112,100,101,99,95,110,95,50,51,0)]]);
    let resendU = 0.0;
    let langkeyy = String.fromCharCode(121,117,118,114,103,98,97,95,55,95,52,57,0);
    let reminder5: Map<any, any> = new Map([[String.fromCharCode(102,114,111,110,116,95,99,95,57,52,0),115], [String.fromCharCode(109,111,118,101,100,95,104,95,50,49,0),611]]);
    let networkK = 2.0;
    let annerI: Array<any> = [970, 536, 435];
    let gemfilev: Map<any, any> = new Map([[String.fromCharCode(115,95,50,50,95,115,117,98,112,105,120,101,108,0),String.fromCharCode(103,117,101,115,115,101,100,95,97,95,49,56,0)], [String.fromCharCode(114,101,115,111,108,118,95,50,95,54,57,0),String.fromCharCode(101,110,103,105,110,101,115,95,112,95,53,49,0)], [String.fromCharCode(105,104,116,120,95,54,95,55,50,0),String.fromCharCode(116,95,50,50,95,115,116,114,111,107,101,100,0)]]);
    let starN: Map<any, any> = new Map([[String.fromCharCode(115,122,97,98,111,95,119,95,49,51,0),true ], [String.fromCharCode(110,97,116,117,114,97,108,95,108,95,52,0),true ]]);
    let giftF = 3;
    let actionR = String.fromCharCode(122,95,54,52,0);
    let selected1 = true;
    let condensedy: Array<any> = [724, 980];
    let playi = 3.0;
    let recommendationx: Map<any, any> = new Map([[String.fromCharCode(107,95,55,57,95,119,97,108,108,112,97,112,101,114,0),74], [String.fromCharCode(107,101,121,112,97,116,104,115,95,117,95,53,50,0),347]]);
    let sharedi = 1.0;
    let editR = 2;
    let country_ = String.fromCharCode(115,97,118,101,95,48,95,55,0);
    let agreementU = String.fromCharCode(112,101,114,115,105,115,116,95,104,95,51,48,0);
   for (let z = 0; z < 1; z++) {
       let termsz = 1.0;
         termsz *= parseInt(`${termsz}`);
      let phoneB = 7462393.0 >= termsz;
      do {
         termsz -= parseInt(`${termsz}`) | 2;
         if (phoneB) {
            break;
         }
      } while ((3.28 > termsz) && phoneB);
      if ((termsz * 1.100) == 1.46 && (termsz * 1.100) == 2.56) {
         termsz += 3 | parseInt(`${termsz}`);
      }
      actionR = "3";
   }
   let orange5 = selected1 ? !selected1 : selected1;
   do {
      selected1 = (networkK + parseFloat(`${reminder5.size}`)) == 94.12;
      if (orange5) {
         break;
      }
   } while ((networkK <= 5.36) && orange5);
       let movies7 = String.fromCharCode(116,95,49,49,95,114,101,97,115,115,109,0);
      for (let c = 0; c < 1; c++) {
          let untickK = String.fromCharCode(98,108,117,114,114,97,98,108,101,95,121,95,49,48,48,0);
          let unselectedJ: Array<any> = [477, 526, 826];
          let short_f0 = String.fromCharCode(113,95,51,49,95,116,114,101,101,0);
          let gifte = String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,109,95,49,49,0);
          let canvasq = false;
         movies7 += `${untickK.length}`;
         untickK = `${short_f0.length}`;
         unselectedJ.push(1);
         short_f0 += `${gifte.length}`;
         gifte += `${short_f0.length}`;
         canvasq = short_f0 == String.fromCharCode(100,0);
      }
         movies7 += `${1 << (Math.min(5, movies7.length))}`;
          let aboutp = 2.0;
         movies7 += `${parseInt(`${aboutp}`)}`;
      networkK /= Math.max(parseFloat(`${condensedy.length}`), 3);
   if ((resendU + 5.65) == 5.13 || (resendU + 5.65) == 1.73) {
      resendU -= (String.fromCharCode(107,0) == actionR ? actionR.length : giftF);
   }
   while (resendU < networkK) {
       let loading9 = String.fromCharCode(114,117,110,108,111,111,112,95,99,95,56,0);
          let carouselt = String.fromCharCode(110,111,110,110,111,114,109,97,116,105,118,101,95,100,95,52,51,0);
          let index6 = 5.0;
         loading9 += "3";
         carouselt = `${carouselt.length}`;
         index6 /= Math.max(4, parseFloat(`${parseInt(`${index6}`) & carouselt.length}`));
       let loginh = String.fromCharCode(113,95,55,56,95,109,115,103,0);
       let searchk = String.fromCharCode(97,95,50,48,95,110,117,108,108,0);
          let configureE = 3.0;
         searchk = `${parseInt(`${configureE}`)}`;
      networkK += (parseFloat(`${langkeyy == String.fromCharCode(50,0) ? loading9.length : langkeyy.length}`));
      break;
   }
   for (let h = 0; h < 3; h++) {
      actionR = "3";
   }
   let indicatorX = condensedy.length >= 6327981;
   do {
      condensedy = [3 >> (Math.min(2, Math.abs(parseInt(`${networkK}`))))];
      if (indicatorX) {
         break;
      }
   } while (indicatorX && (1 <= condensedy.length));

    setShowLoading(true);
    flatlistRef?.current?.scrollToOffset({ animated: false, offset: 0 });

    setTimeout(() => {

      selected1 = !selected1;
       let referrerf = 5.0;
       let downloaderS = String.fromCharCode(97,101,118,97,108,95,103,95,51,53,0);
       let adultf = 2.0;
       let gestures1 = 5.0;
          let turnV = 0.0;
          let bellk = String.fromCharCode(103,95,57,55,95,110,97,109,101,115,0);
         adultf -= 2;
         turnV -= parseFloat(`${bellk.length | 2}`);
         bellk = "1";
      for (let e = 0; e < 3; e++) {
          let robotoT: Array<any> = [277, 475, 25];
          let largeC: Array<any> = [844, 469];
          let clock_ = String.fromCharCode(99,97,99,97,95,119,95,50,55,0);
          let nalytics1: Map<any, any> = new Map([[String.fromCharCode(105,110,108,105,103,104,116,95,112,95,53,52,0),880], [String.fromCharCode(100,95,52,50,95,104,111,114,105,122,0),595], [String.fromCharCode(114,95,50,51,95,116,115,97,110,0),759]]);
          let sharedg = 1;
         gestures1 *= parseFloat(`${largeC.length << (Math.min(2, Math.abs(parseInt(`${gestures1}`))))}`);
         robotoT.push(2 ^ nalytics1.size);
         largeC = [nalytics1.size << (Math.min(Math.abs(1), 1))];
         clock_ = `${3 & clock_.length}`;
         sharedg *= robotoT.length;
      }
         gestures1 /= Math.max(parseFloat(`${3}`), 4);
      for (let p = 0; p < 2; p++) {
         gestures1 /= Math.max(parseFloat(`${1}`), 4);
      }
          let contextj = String.fromCharCode(107,95,52,53,95,101,115,100,115,0);
         referrerf += 1 - parseInt(`${gestures1}`);
         contextj = "3";
         gestures1 -= parseFloat(`${parseInt(`${referrerf}`)}`);
         referrerf -= (downloaderS == String.fromCharCode(105,0) ? downloaderS.length : parseInt(`${adultf}`));
          let nterstitialG = true;
         gestures1 += parseFloat(`${2}`);
         nterstitialG = (nterstitialG ? nterstitialG : nterstitialG);
      selected1 = annerI.length <= 14;
      fieldh.set(actionR, 1);
      giftF &= langkeyy.length << (Math.min(1, Math.abs(parseInt(`${networkK}`))));
   while (!Array.from(fieldh.values()).includes(reminder5.size)) {
      fieldh.set(`${annerI.length}`, annerI.length);
      break;
   }
      langkeyy = `${((selected1 ? 1 : 5))}`;
   let vnewsf = starN.size >= 8333421;
   do {
       let screenX: Array<any> = [String.fromCharCode(97,95,52,53,95,103,101,116,0), String.fromCharCode(118,95,53,48,0), String.fromCharCode(107,95,56,95,105,109,97,103,101,114,111,116,97,116,101,0)];
       let dangerP = 1;
       let detaili = String.fromCharCode(106,95,49,50,95,114,97,119,100,101,99,0);
      while (detaili.length < 5) {
         detaili += `${detaili.length}`;
         break;
      }
      let ball_ = screenX.length >= 5461257;
      do {
         screenX = [1 | detaili.length];
         if (ball_) {
            break;
         }
      } while (ball_ && ((detaili.length << (Math.min(4, screenX.length))) >= 2));
      if (1 > (detaili.length & 3) && (detaili.length & 3) > 5) {
          let renewj = 3.0;
          let fastV: Array<any> = [55, 231, 594];
          let floaterj = String.fromCharCode(110,95,55,51,95,116,114,105,101,0);
         dangerP &= dangerP ^ 3;
         renewj *= (floaterj == String.fromCharCode(118,0) ? floaterj.length : fastV.length);
         fastV.push(floaterj.length >> (Math.min(Math.abs(2), 2)));
      }
      while ((detaili.length | dangerP) <= 2) {
          let applep: Array<any> = [444, 504, 408];
         dangerP ^= (detaili == String.fromCharCode(54,0) ? dangerP : detaili.length);
         applep = [applep.length >> (Math.min(applep.length, 2))];
         break;
      }
          let predictiond = false;
         dangerP >>= Math.min(Math.abs(((predictiond ? 5 : 2) * detaili.length)), 3);
         detaili = `${detaili.length}`;
         dangerP /= Math.max(4, detaili.length / (Math.max(5, screenX.length)));
         screenX = [3];
         dangerP -= dangerP;
      starN = new Map([[`${fieldh.size}`, fieldh.size]]);
      if (vnewsf) {
         break;
      }
   } while ((starN.size > 5) && vnewsf);
      

   if (1 > (giftF & condensedy.length) && 2 > (1 & condensedy.length)) {
      condensedy = [annerI.length | 3];
   }
   while (condensedy.length <= 1) {
      condensedy.push(fieldh.size - giftF);
      break;
   }
       let watch6 = String.fromCharCode(118,95,54,50,95,99,108,109,117,108,0);
       let twitter4: Map<any, any> = new Map([[String.fromCharCode(110,97,108,117,115,95,107,95,53,56,0),299], [String.fromCharCode(120,95,53,56,95,101,120,116,110,0),980], [String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,54,95,56,51,0),202]]);
      if (!watch6.endsWith(`${twitter4.size}`)) {
         watch6 = `${twitter4.size % (Math.max(watch6.length, 10))}`;
      }
         watch6 = `${watch6.length >> (Math.min(5, Math.abs(twitter4.size)))}`;
          let pagination7 = 4.0;
          let profiler = String.fromCharCode(102,109,117,108,95,103,95,49,0);
          let floater2 = String.fromCharCode(110,95,49,52,95,112,105,112,101,0);
         watch6 += `${profiler.length}`;
         pagination7 *= parseFloat(`${parseInt(`${pagination7}`)}`);
         profiler = `${parseInt(`${pagination7}`) >> (Math.min(floater2.length, 2))}`;
         floater2 = `${parseInt(`${pagination7}`) >> (Math.min(Math.abs(3), 3))}`;
         watch6 = `${watch6.length % (Math.max(1, 2))}`;
      while (twitter4.size <= 3) {
         watch6 += `${watch6.length}`;
         break;
      }
      while ((3 & watch6.length) == 5) {
         twitter4.set(`${watch6}`, twitter4.size | 2);
         break;
      }
      annerI = [1 - twitter4.size];
       let belly: Array<any> = [992, 816, 213];
      if (4 >= (3 % (Math.max(9, belly.length))) && 4 >= (belly.length % 3)) {
         belly = [2];
      }
      let trashI = belly.length <= 8068354;
      do {
         belly = [belly.length];
         if (trashI) {
            break;
         }
      } while ((belly.includes(belly.length)) && trashI);
         belly.push(belly.length);
      langkeyy = `${condensedy.length}`;
       let const_ky = String.fromCharCode(100,95,57,52,95,99,111,109,98,105,110,97,116,105,111,110,115,0);
       let relatedb = String.fromCharCode(109,111,110,107,101,121,95,114,95,55,54,0);
      while (relatedb != String.fromCharCode(87,0)) {
          let historyi = String.fromCharCode(106,95,52,57,95,100,101,109,117,120,0);
          let styleM = 3.0;
          let p_titleF: Array<any> = [662, 509];
          let membership5 = 4.0;
          let previewi: Array<any> = [923, 809, 464];
         const_ky += `${2 | const_ky.length}`;
         historyi += `${parseInt(`${styleM}`) / 3}`;
         styleM += 3;
         p_titleF = [3 + parseInt(`${membership5}`)];
         membership5 /= Math.max(parseFloat(`${p_titleF.length & parseInt(`${styleM}`)}`), 1);
         previewi.push(previewi.length - p_titleF.length);
         break;
      }
          let r_positiono = 4.0;
          let dataU = 4;
          let sportsU = String.fromCharCode(97,116,116,101,109,112,116,115,95,121,95,54,57,0);
         relatedb += `${parseInt(`${r_positiono}`)}`;
         r_positiono += parseFloat(`${sportsU.length}`);
         dataU &= 1;
         sportsU = "2";
         const_ky += "1";
       let live5 = String.fromCharCode(116,116,114,105,98,117,116,101,100,95,112,95,57,54,0);
         const_ky = `${relatedb.length}`;
      let trophyf = 6867649 <= live5.length;
      do {
         live5 += `${const_ky.length * live5.length}`;
         if (trophyf) {
            break;
         }
      } while ((4 > live5.length) && trophyf);
      selected1 = fieldh.size > 89;
   if ((reminder5.size + gemfilev.size) >= 5 && (5 + gemfilev.size) >= 1) {
      reminder5 = new Map([[`${fieldh.size}`, (2 | (selected1 ? 1 : 3))]]);
   }
      condensedy.push((String.fromCharCode(49,0) == langkeyy ? langkeyy.length : annerI.length));
      setShowLoading(false);
    }, 1200);
  };

  
  
  
  
  
  
  
  
  

  const handleInitialLoading = useCallback(() => {
       let fillY: Map<any, any> = new Map([[String.fromCharCode(116,95,56,56,95,97,115,115,111,99,105,97,116,101,100,0),854], [String.fromCharCode(114,95,55,57,95,118,97,100,100,113,0),395]]);
    let switch_j9i = 3.0;
    let borderlessI = String.fromCharCode(105,95,50,53,95,113,115,99,97,108,101,0);
    let invitex = 3;
    let goalK = 3.0;
    let clearw = false;
    let adult6 = true;
    let untickX = String.fromCharCode(97,112,112,101,110,100,97,108,108,95,52,95,50,50,0);
    let football5: Array<any> = [521, 298, 795];
    let rewindM: Array<any> = [40, 570, 315];
    let q_positionv: Array<any> = [805, 86, 587];
    let popupH = String.fromCharCode(100,111,109,105,110,97,110,116,95,113,95,57,57,0);
    let castingL: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,105,95,106,95,54,51,0),787], [String.fromCharCode(101,120,115,121,95,98,95,52,52,0),348], [String.fromCharCode(115,107,101,116,99,104,95,102,95,55,53,0),296]]);
    let stationh = String.fromCharCode(97,116,116,114,98,117,116,101,95,103,95,49,48,48,0);
    let sells = String.fromCharCode(104,95,51,95,105,110,97,99,116,105,118,101,0);
    let shootY: Array<any> = [String.fromCharCode(113,95,57,48,95,105,110,116,101,114,114,117,112,116,101,100,0), String.fromCharCode(104,95,52,53,95,97,100,106,117,115,116,101,114,0), String.fromCharCode(109,95,51,51,95,98,108,97,99,107,0)];
   for (let x = 0; x < 2; x++) {
      goalK += untickX.length >> (Math.min(Math.abs(2), 2));
   }
   while (popupH.includes(`${q_positionv.length}`)) {
      q_positionv = [2 + parseInt(`${goalK}`)];
      break;
   }
      goalK /= Math.max(2, parseInt(`${switch_j9i}`) & fillY.size);
   for (let p = 0; p < 3; p++) {
      borderlessI += `${(String.fromCharCode(113,0) == popupH ? popupH.length : (adult6 ? 3 : 5))}`;
   }
   if ((football5.length ^ q_positionv.length) >= 2 && (q_positionv.length ^ football5.length) >= 2) {
      q_positionv.push(parseInt(`${switch_j9i}`) - rewindM.length);
   }
      adult6 = popupH.length == 76;
       let uploadF = 2.0;
       let castingZ = false;
      while (uploadF < 3.25 && 3.60 < (uploadF - 3.25)) {
         castingZ = !castingZ || uploadF > 7.51;
         break;
      }
      if ((uploadF / 5.14) > 5.42 && castingZ) {
         castingZ = 3.30 >= uploadF;
      }
         castingZ = uploadF < 84.5 || castingZ;
         castingZ = 47.79 <= uploadF || castingZ;
      while (3.27 > uploadF) {
         uploadF += (parseInt(`${uploadF}`) - (castingZ ? 4 : 5));
         break;
      }
       let pingX: Array<any> = [159, 59, 782];
       let iconh: Array<any> = [883, 520];
      untickX = `${((clearw ? 3 : 3) / (Math.max(parseInt(`${uploadF}`), 8)))}`;
      untickX += `${q_positionv.length}`;


    setShowLoading2(true);

   for (let e = 0; e < 3; e++) {
      untickX = `${1 + invitex}`;
   }
      clearw = popupH.length >= 81 || clearw;
   if ((goalK + 1.7) <= 3.0) {
      goalK *= (invitex * (clearw ? 2 : 5));
   }
   let relatedg = adult6 ? !adult6 : adult6;
   do {
       let userO = false;
       let register_5l = 2;
       let refreshV = false;
       let filterI = false;
       let statistics9 = 0.0;
      if (register_5l == 1) {
         filterI = filterI || statistics9 >= 32.9;
      }
         refreshV = userO;
          let buttonI = String.fromCharCode(120,95,56,56,95,113,112,101,108,0);
          let collectionG = true;
         statistics9 /= Math.max(((userO ? 4 : 4)), 4);
         buttonI = `${2 ^ buttonI.length}`;
         collectionG = collectionG || buttonI.length < 72;
       let anner0 = 3.0;
         filterI = statistics9 <= 81.94 && !refreshV;
      while (3 == (register_5l - parseInt(`${anner0}`)) && (register_5l * 3) == 2) {
          let fastT = false;
          let googleS = String.fromCharCode(109,97,107,101,115,114,112,109,95,101,95,56,56,0);
          let plusl = 0.0;
          let with_qpM: Array<any> = [111, 467, 625];
         register_5l >>= Math.min(Math.abs(register_5l / 2), 3);
         fastT = googleS.startsWith(`${plusl}`);
         googleS = `${2 / (Math.max(1, with_qpM.length))}`;
         plusl *= 1 << (Math.min(5, with_qpM.length));
         break;
      }
      for (let h = 0; h < 3; h++) {
         statistics9 *= register_5l >> (Math.min(4, Math.abs(1)));
      }
         statistics9 += parseInt(`${anner0}`);
         userO = refreshV || 22.92 < anner0;
       let stationZ = false;
          let targetq: Array<any> = [917, 470, 927];
          let memberb = 0.0;
         register_5l *= 3 - parseInt(`${anner0}`);
         targetq.push(1);
         memberb += parseInt(`${memberb}`) * targetq.length;
         userO = filterI;
          let taile = String.fromCharCode(102,95,51,51,95,108,97,116,105,110,0);
          let connectionR = 4.0;
          let schedulef = 0.0;
         userO = (6 >= ((!filterI ? 6 : taile.length) - taile.length));
         connectionR *= parseFloat(`${parseInt(`${schedulef}`)}`);
      while (5.23 > (statistics9 / (Math.max(5.95, 7)))) {
         statistics9 /= Math.max(register_5l, 1);
         break;
      }
      if (refreshV || filterI) {
         refreshV = !stationZ;
      }
      adult6 = !clearw;
      if (relatedg) {
         break;
      }
   } while (relatedg && (untickX.length == 1));
      popupH = `${castingL.size}`;
   while (invitex > 4 && 1 > (4 << (Math.min(5, Math.abs(invitex))))) {
       let tumbnailU = String.fromCharCode(109,99,108,109,115,95,57,95,50,55,0);
       let productN = true;
       let whistleI = true;
      if (!whistleI) {
          let combinev: Array<any> = [334, 437, 682];
          let friendsn = false;
          let memberY: Map<any, any> = new Map([[String.fromCharCode(98,102,115,116,109,95,102,95,55,51,0),550], [String.fromCharCode(115,112,105,110,110,105,110,103,95,48,95,51,56,0),252]]);
          let calendara = false;
         productN = (calendara ? !friendsn : calendara);
         combinev = [1];
         friendsn = 66 < memberY.size;
         memberY = new Map([[`${memberY.size}`, 1 | memberY.size]]);
      }
         whistleI = (42 < (tumbnailU.length - (!productN ? tumbnailU.length : 42)));
      clearw = clearw || football5.length >= 15;
      break;
   }
   for (let s = 0; s < 1; s++) {
      castingL.set(`${invitex}`, invitex & 2);
   }
      goalK *= (String.fromCharCode(114,0) == untickX ? football5.length : untickX.length);
    setTimeout(() => {

   for (let w = 0; w < 2; w++) {
      castingL.set(untickX, 2);
   }
       let sansH: Map<any, any> = new Map([[String.fromCharCode(114,103,98,97,95,50,95,53,49,0),838], [String.fromCharCode(100,105,118,105,100,101,95,50,95,56,0),958]]);
       let crownt = String.fromCharCode(107,95,51,52,95,98,97,111,98,97,98,0);
         crownt += `${sansH.size >> (Math.min(crownt.length, 5))}`;
      for (let b = 0; b < 2; b++) {
         crownt += `${sansH.size % (Math.max(crownt.length, 9))}`;
      }
      let themed = 7806732 <= sansH.size;
      do {
         sansH.set(`${crownt}`, 1);
         if (themed) {
            break;
         }
      } while ((crownt.startsWith(`${sansH.size}`)) && themed);
         sansH.set(`${crownt}`, crownt.length + 2);
       let macauT = 1.0;
       let long_fgY: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,101,100,95,49,95,55,48,0),false ], [String.fromCharCode(116,97,98,108,101,103,101,110,95,102,95,51,57,0),true ], [String.fromCharCode(106,95,51,50,95,111,118,101,114,108,97,112,0),false ]]);
      q_positionv = [1 >> (Math.min(4, untickX.length))];
      invitex *= invitex;
      rewindM.push(parseInt(`${switch_j9i}`));
      clearw = castingL.size < 97;
      adult6 = (fillY.size << (Math.min(borderlessI.length, 3))) == 17;
   if (popupH.length >= 4 || !clearw) {
      popupH += `${((adult6 ? 1 : 2) + 1)}`;
   }
      untickX += `${untickX.length}`;
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
            source={require("@static/images/hongkongBottom.gif")}
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
            source={require("@static/images/settingsGrayZhengpian.gif")}
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
          source={require("../../assets/images/bellUpgrade.png")}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
