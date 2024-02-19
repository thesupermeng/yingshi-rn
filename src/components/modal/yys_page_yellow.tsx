import React, { useState, useMemo, memo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { yysSpinner } from "@type";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SortAscSvg, SortDescSvg } from "@static";
import BottomSheet from "../bottomSheet/yys_progress_catagory";
import { yysAnalytics } from "@redux";

interface yysIconarrowrightorangeStation {
  onConfirm: any;
  onCancel: any;
  episodes?: yysSpinner;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
  vodId,
}: yysIconarrowrightorangeStation) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState("asc");
  const ranges = [
    ...Array(
      episodes?.url_count === undefined
        ? 0
        : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)
    ).keys(),
  ].map(
    (x) =>
      `${x * EPISODE_RANGE_SIZE + 1}-${Math.min(
        (x + 1) * EPISODE_RANGE_SIZE,
        episodes?.url_count === undefined
          ? (x + 1) * EPISODE_RANGE_SIZE - 1
          : episodes?.url_count
      )}`
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE)
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex]
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [episodes, showEpisodeRangeStart]
  );
  const displayEpisodes = useMemo(() => {
       let componentregistryS = 2;
    let predictionbannersharedB = String.fromCharCode(107,95,50,51,95,114,103,116,99,115,0);
    let graphicsW = true;
    let datak = String.fromCharCode(98,101,103,105,110,95,103,95,55,48,0);
    let homeicono = 5.0;
    let selectL = 5.0;
    let iconclosewhite0 = String.fromCharCode(118,95,51,55,95,98,121,116,101,0);
    let specp = String.fromCharCode(109,105,110,95,117,95,53,49,0);
    let homeiconY = 3.0;
    let storeN: Array<any> = [String.fromCharCode(111,117,116,108,105,101,114,95,122,95,49,51,0), String.fromCharCode(101,102,102,101,99,116,95,121,95,50,53,0)];
    let colors2 = 2.0;
    let yellowredcardj = String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,99,95,51,55,0);
    let orangetick1: Array<any> = [813, 142, 788];
    let minivody = String.fromCharCode(109,97,115,115,95,57,95,54,52,0);
    let bottomT = String.fromCharCode(114,101,111,114,100,101,114,101,100,95,97,95,50,55,0);
    let bing4 = 4.0;
    let recommendationS = String.fromCharCode(108,98,108,95,105,95,55,50,0);
    let modityt: Array<any> = [134, 405, 510];
       let code3 = String.fromCharCode(122,95,49,55,95,102,111,108,108,111,119,101,114,0);
       let appsn: Array<any> = [361, 984];
         appsn.push(code3.length & 1);
      while (4 >= (appsn.length / (Math.max(code3.length, 9)))) {
         code3 = "3";
         break;
      }
      for (let h = 0; h < 1; h++) {
          let formD = 4.0;
          let iconbellactive8: Map<any, any> = new Map([[String.fromCharCode(119,95,49,54,95,115,104,101,101,116,0),String.fromCharCode(103,95,49,53,95,116,111,111,98,105,103,0)], [String.fromCharCode(104,95,50,57,95,99,109,112,97,100,100,114,0),String.fromCharCode(110,95,49,56,95,118,98,114,105,0)]]);
         code3 = `${(String.fromCharCode(68,0) == code3 ? code3.length : iconbellactive8.size)}`;
         formD /= Math.max(3, parseInt(`${formD}`) - 3);
         iconbellactive8 = new Map([[`${formD}`, parseInt(`${formD}`) / (Math.max(parseInt(`${formD}`), 2))]]);
      }
      if (code3.includes(`${appsn.length}`)) {
         code3 = `${(String.fromCharCode(79,0) == code3 ? code3.length : appsn.length)}`;
      }
         code3 += `${appsn.length + 1}`;
      while (1 == code3.length) {
          let binddatas2 = String.fromCharCode(107,95,49,48,95,100,101,99,111,114,114,101,108,97,116,105,111,110,0);
          let subinK = 0.0;
          let contextO: Array<any> = [705, 110];
          let lineJ = 5;
         appsn = [2 & contextO.length];
         binddatas2 = `${parseInt(`${subinK}`)}`;
         subinK /= Math.max(4, parseFloat(`${binddatas2.length + parseInt(`${subinK}`)}`));
         contextO = [binddatas2.length];
         lineJ |= lineJ - 3;
         break;
      }
      colors2 += 1 >> (Math.min(3, code3.length));
   for (let b = 0; b < 2; b++) {
      homeiconY -= (parseFloat(`${String.fromCharCode(51,0) == specp ? specp.length : storeN.length}`));
   }
      colors2 -= parseInt(`${homeiconY}`) / (Math.max(predictionbannersharedB.length, 3));
   let largesound0 = 8895637 <= storeN.length;
   do {
      storeN.push((iconclosewhite0 == String.fromCharCode(107,0) ? datak.length : iconclosewhite0.length));
      if (largesound0) {
         break;
      }
   } while (largesound0 && (1 == (1 + storeN.length)));
   let security0 = storeN.length >= 6882527;
   do {
       let libjsijniprofilerB: Array<any> = [383, 891];
          let shielddonef = false;
          let taiwanb = String.fromCharCode(116,95,50,55,95,97,110,105,109,97,116,101,0);
          let sortu: Map<any, any> = new Map([[String.fromCharCode(118,95,55,56,95,99,97,112,105,0),373], [String.fromCharCode(114,101,108,97,121,101,100,95,99,95,51,56,0),244], [String.fromCharCode(101,114,114,111,114,118,95,105,95,49,57,0),409]]);
         libjsijniprofilerB = [sortu.size];
         shielddonef = !shielddonef;
         taiwanb += `${((shielddonef ? 3 : 2))}`;
         sortu = new Map([[taiwanb, ((shielddonef ? 1 : 5) * 3)]]);
      let register_uwo = 8538334 >= libjsijniprofilerB.length;
      do {
         libjsijniprofilerB = [2];
         if (register_uwo) {
            break;
         }
      } while (((libjsijniprofilerB.length & 5) >= 1) && register_uwo);
         libjsijniprofilerB.push(libjsijniprofilerB.length & 1);
      storeN = [componentregistryS | storeN.length];
      if (security0) {
         break;
      }
   } while (security0 && (storeN.length >= specp.length));
      iconclosewhite0 += `${parseInt(`${selectL}`)}`;

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   if (orangetick1.length == 5) {
       let tempnodatao = 0.0;
       let iconplayU: Map<any, any> = new Map([[String.fromCharCode(111,95,49,48,48,95,109,97,105,108,0),663], [String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,95,49,95,57,48,0),400]]);
       let pangleb = 5;
       let type_s9 = 5;
      while ((2 / (Math.max(4, iconplayU.size))) == 4 && 4 == (2 / (Math.max(10, iconplayU.size)))) {
         iconplayU = new Map([[`${tempnodatao}`, parseInt(`${tempnodatao}`)]]);
         break;
      }
          let mbbannerA = true;
          let volumem = String.fromCharCode(106,95,49,49,95,117,110,115,99,104,101,100,117,108,101,0);
         iconplayU.set(`${type_s9}`, type_s9);
         mbbannerA = !mbbannerA;
         volumem = `${(volumem == String.fromCharCode(48,0) ? volumem.length : (mbbannerA ? 3 : 3))}`;
         type_s9 |= parseInt(`${tempnodatao}`) & 2;
         type_s9 -= 1 | type_s9;
      for (let h = 0; h < 2; h++) {
          let completev = 0;
          let smallW = 1.0;
          let homeicon_ = 1.0;
          let notificationgrayf = String.fromCharCode(121,95,56,54,95,102,105,108,116,0);
         tempnodatao /= Math.max(parseInt(`${homeicon_}`) ^ 1, 1);
         completev *= completev;
         smallW -= parseFloat(`${parseInt(`${smallW}`) * 3}`);
         homeicon_ += completev;
         notificationgrayf += "2";
      }
         pangleb *= 3 % (Math.max(6, iconplayU.size));
         type_s9 ^= pangleb;
          let rncoreb: Array<any> = [994, 345, 604];
          let b_centerd: Map<any, any> = new Map([[String.fromCharCode(106,117,103,103,108,101,95,53,95,50,48,0),true ], [String.fromCharCode(110,95,49,52,95,98,114,111,119,115,101,0),false ], [String.fromCharCode(103,95,51,56,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0),false ]]);
          let default_ckM = 5.0;
         iconplayU.set(`${tempnodatao}`, b_centerd.size);
         rncoreb = [rncoreb.length * parseInt(`${default_ckM}`)];
         b_centerd.set(`${default_ckM}`, 2 >> (Math.min(Math.abs(parseInt(`${default_ckM}`)), 1)));
      let internetY = iconplayU.size <= 5867404;
      do {
          let analyticF = String.fromCharCode(111,95,48,95,112,101,114,102,0);
          let animationP = String.fromCharCode(106,95,49,55,95,112,114,101,117,112,100,97,116,101,0);
         iconplayU.set(`${type_s9}`, analyticF.length);
         analyticF += `${(String.fromCharCode(113,0) == animationP ? animationP.length : animationP.length)}`;
         if (internetY) {
            break;
         }
      } while ((!Array.from(iconplayU.keys()).includes(`${tempnodatao}`)) && internetY);
       let pressurex = String.fromCharCode(108,105,98,121,117,118,95,99,95,51,0);
       let cleari = String.fromCharCode(109,97,114,107,101,114,95,57,95,49,51,0);
       let left_ = 5;
       let leaguedetailsbgj = 4;
         tempnodatao *= 1;
      homeicono -= (parseFloat(`${specp == String.fromCharCode(75,0) ? datak.length : specp.length}`));
   }
      predictionbannersharedB = `${1 + parseInt(`${selectL}`)}`;
       let fileA = false;
       let renewB = false;
      if (!renewB) {
         renewB = (renewB ? !fileA : !renewB);
      }
      while (renewB) {
         renewB = (!renewB ? fileA : !renewB);
         break;
      }
       let iconrightorangez = true;
       let z_imageW = false;
       let componentS = String.fromCharCode(114,95,49,48,48,95,98,105,110,97,114,121,0);
      let changeZ = z_imageW ? !z_imageW : z_imageW;
      do {
          let kickr = 2;
          let adultN = String.fromCharCode(118,105,115,105,116,111,114,95,115,95,53,55,0);
         z_imageW = componentS.includes(`${fileA}`);
         kickr ^= 1;
         adultN += `${(adultN == String.fromCharCode(75,0) ? kickr : adultN.length)}`;
         if (changeZ) {
            break;
         }
      } while ((renewB && z_imageW) && changeZ);
      if (renewB) {
         iconrightorangez = (renewB ? iconrightorangez : renewB);
      }
      yellowredcardj = "2";
      specp = `${iconclosewhite0.length}`;
   if (2 <= iconclosewhite0.length) {
      iconclosewhite0 = `${predictionbannersharedB.length}`;
   }
       let delegate_z_c = String.fromCharCode(118,105,101,119,112,111,114,116,95,115,95,57,57,0);
       let videovarv = String.fromCharCode(119,95,53,49,95,109,97,120,106,0);
         videovarv += "2";
         delegate_z_c = `${(delegate_z_c == String.fromCharCode(82,0) ? videovarv.length : delegate_z_c.length)}`;
      datak += `${1 | iconclosewhite0.length}`;
    if (sortBy === "desc") {

   for (let h = 0; h < 3; h++) {
      orangetick1.push(3);
   }
      homeicono /= Math.max(parseFloat(`${orangetick1.length / 2}`), 3);
      minivody += `${predictionbannersharedB.length / 3}`;
       let greenm = String.fromCharCode(108,95,50,95,117,110,99,111,109,112,114,101,115,115,101,100,0);
       let libhermese = 5;
      while ((libhermese + 5) < 3 && (libhermese + greenm.length) < 5) {
         greenm = `${(String.fromCharCode(122,0) == greenm ? libhermese : greenm.length)}`;
         break;
      }
         greenm += `${libhermese << (Math.min(greenm.length, 3))}`;
       let hejir = String.fromCharCode(120,95,50,50,95,105,110,116,0);
      let predictionbanner2 = greenm.length >= 7661399;
      do {
          let remindery = String.fromCharCode(117,95,55,56,95,105,118,102,101,110,99,0);
          let exampleimage8 = 5.0;
          let expand8 = false;
          let components4 = 5.0;
          let hookk = String.fromCharCode(100,101,115,116,114,117,99,116,95,49,95,50,49,0);
         greenm = `${(remindery == String.fromCharCode(71,0) ? remindery.length : libhermese)}`;
         exampleimage8 += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${exampleimage8}`)), 3))}`);
         expand8 = components4 <= 95.80;
         components4 /= Math.max(2, 1 + parseInt(`${exampleimage8}`));
         hookk = `${parseInt(`${exampleimage8}`) + 3}`;
         if (predictionbanner2) {
            break;
         }
      } while ((hejir.length <= 5) && predictionbanner2);
         libhermese %= Math.max((String.fromCharCode(113,0) == hejir ? hejir.length : libhermese), 2);
         libhermese >>= Math.min(4, Math.abs(greenm.length % (Math.max(3, 8))));
      componentregistryS -= greenm.length;
      orangetick1 = [parseInt(`${homeiconY}`) / (Math.max(3, 9))];
      homeicono *= parseFloat(`${minivody.length & 1}`);
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  
  
  

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const sort = () => {
       let models1 = String.fromCharCode(111,118,101,114,114,105,100,101,115,95,110,95,53,48,0);
    let helperC = String.fromCharCode(105,95,49,57,95,108,97,121,101,114,115,0);
    let configureY = String.fromCharCode(120,95,53,57,95,98,114,101,97,107,105,110,103,0);
    let mimo5 = 0.0;
    let container1 = 2.0;
    let suggestiono = String.fromCharCode(122,95,55,51,95,112,97,114,116,105,116,105,111,110,115,0);
    let clock1 = String.fromCharCode(116,95,52,49,95,116,111,116,97,108,115,0);
    let l_centerJ = String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,107,95,53,48,0);
    let constants6 = String.fromCharCode(109,111,100,112,108,117,103,95,114,95,50,55,0);
    let l_hashY = String.fromCharCode(100,95,50,51,0);
    let teamdetailsbg0: Array<any> = [74, 159, 605];
    let saveA = 0.0;
   if (!models1.startsWith(l_hashY)) {
       let redirect0 = 1.0;
       let baiduadsa = 3;
       let service6 = String.fromCharCode(98,95,51,53,95,115,104,97,114,101,100,107,101,121,0);
       let eyecloses = true;
         service6 = `${service6.length << (Math.min(Math.abs(2), 4))}`;
      while (4 == (1 & baiduadsa) || 5.1 == (redirect0 * 3.59)) {
          let redcirclebg3 = String.fromCharCode(111,95,55,54,95,100,101,98,117,103,98,111,120,0);
          let heartl: Array<any> = [279, 929, 388];
          let suggestionT: Map<any, any> = new Map([[String.fromCharCode(108,95,53,51,95,116,119,105,108,105,103,104,116,0),340], [String.fromCharCode(109,97,115,107,105,110,103,95,99,95,54,56,0),975], [String.fromCharCode(116,109,105,120,95,107,95,56,55,0),482]]);
          let matchesb = 5.0;
          let libyogam = 4.0;
         baiduadsa -= (1 + (eyecloses ? 5 : 4));
         redcirclebg3 = `${heartl.length}`;
         heartl.push(heartl.length / (Math.max(2, 2)));
         suggestionT = new Map([[`${suggestionT.size}`, 2 + heartl.length]]);
         matchesb -= redcirclebg3.length;
         libyogam /= Math.max(parseFloat(`${2}`), 3);
         break;
      }
          let iconclosewhitebgT = String.fromCharCode(99,111,108,108,97,103,101,95,101,95,56,49,0);
          let mimoI: Map<any, any> = new Map([[String.fromCharCode(115,95,54,48,95,120,109,108,101,115,99,97,112,101,0),327], [String.fromCharCode(122,95,49,54,95,118,115,102,114,97,109,101,0),220]]);
          let iconclosewhitebgS: Map<any, any> = new Map([[String.fromCharCode(112,108,97,121,101,114,95,105,95,53,55,0),String.fromCharCode(98,95,54,56,95,109,101,100,105,97,99,111,100,101,99,0)], [String.fromCharCode(113,95,54,50,95,107,101,121,118,97,108,0),String.fromCharCode(101,95,54,49,95,97,108,112,104,97,108,101,115,115,0)]]);
         service6 = `${(3 / (Math.max(1, (eyecloses ? 4 : 3))))}`;
         iconclosewhitebgT = `${iconclosewhitebgS.size >> (Math.min(Math.abs(2), 5))}`;
         mimoI.set(`${iconclosewhitebgS.size}`, mimoI.size);
      let stationsY = redirect0 >= 5972851.0;
      do {
         redirect0 *= baiduadsa;
         if (stationsY) {
            break;
         }
      } while (stationsY && (3.80 > (redirect0 - baiduadsa)));
      let logouserM = 8748379.0 <= redirect0;
      do {
         redirect0 /= Math.max(((eyecloses ? 2 : 1)), 4);
         if (logouserM) {
            break;
         }
      } while ((5.88 < redirect0) && logouserM);
      for (let q = 0; q < 1; q++) {
         redirect0 *= parseInt(`${redirect0}`) ^ 3;
      }
       let sellw = String.fromCharCode(115,116,100,111,117,116,95,52,95,50,52,0);
       let libfby = String.fromCharCode(103,101,110,100,101,114,95,100,95,50,52,0);
       let yellowvideoliveD = true;
       let loginM = true;
         sellw = `${service6.length}`;
      if ((baiduadsa << (Math.min(libfby.length, 5))) >= 5) {
          let incidents = 2;
          let videovarg = 1;
          let friendsB = false;
         baiduadsa |= ((eyecloses ? 1 : 4));
         incidents ^= 3 % (Math.max(videovarg, 5));
         videovarg &= 1;
         friendsB = videovarg >= 3;
      }
      if (baiduadsa <= 5) {
         baiduadsa /= Math.max(libfby.length, 2);
      }
      if (2 < sellw.length) {
         sellw = `${baiduadsa}`;
      }
      l_hashY = "2";
   }
   let homeinactiver = helperC.length <= 6404243;
   do {
      helperC = "3";
      if (homeinactiver) {
         break;
      }
   } while (homeinactiver && (!helperC.startsWith(`${configureY.length}`)));
      l_hashY = `${3 + helperC.length}`;
   if (2 < (1 << (Math.min(1, suggestiono.length)))) {
      container1 -= parseFloat(`${suggestiono.length * clock1.length}`);
   }
   if (3 <= (suggestiono.length >> (Math.min(Math.abs(2), 4)))) {
      mimo5 /= Math.max(4, parseInt(`${mimo5}`) * 1);
   }
      models1 = `${(String.fromCharCode(72,0) == models1 ? models1.length : configureY.length)}`;
   let iconmegaphonew = 9535272 <= suggestiono.length;
   do {
      suggestiono = `${(models1 == String.fromCharCode(70,0) ? models1.length : parseInt(`${container1}`))}`;
      if (iconmegaphonew) {
         break;
      }
   } while ((3.67 <= container1) && iconmegaphonew);
   for (let q = 0; q < 2; q++) {
       let otherq = 1.0;
       let themeW = String.fromCharCode(112,95,49,57,95,113,117,97,108,105,102,105,101,114,115,0);
       let subbasketballplayerB = 1.0;
         themeW = `${2 | parseInt(`${subbasketballplayerB}`)}`;
      for (let a = 0; a < 3; a++) {
          let subbasketballplayerr: Array<any> = [881, 350, 678];
          let codegenA = String.fromCharCode(119,95,57,95,99,97,108,99,117,108,97,116,101,0);
          let libffmpegkitM = String.fromCharCode(104,95,54,54,95,116,104,114,101,97,100,103,114,111,117,112,0);
          let blackz: Array<any> = [488, 782, 600];
          let owngoali = String.fromCharCode(117,95,49,56,95,97,117,116,104,111,114,115,0);
         subbasketballplayerB /= Math.max(parseFloat(`${blackz.length}`), 2);
         subbasketballplayerr = [3];
         codegenA = `${subbasketballplayerr.length % (Math.max(1, libffmpegkitM.length))}`;
         libffmpegkitM += `${libffmpegkitM.length}`;
         blackz.push(2);
         owngoali += `${(owngoali == String.fromCharCode(78,0) ? libffmpegkitM.length : owngoali.length)}`;
      }
      let injuryM = 6178741.0 >= otherq;
      do {
         otherq += parseInt(`${subbasketballplayerB}`) >> (Math.min(Math.abs(1), 1));
         if (injuryM) {
            break;
         }
      } while ((otherq < themeW.length) && injuryM);
         themeW = `${parseInt(`${otherq}`) << (Math.min(Math.abs(3), 2))}`;
      let brightnessS = themeW == String.fromCharCode(116,108,108,57,114,110,106,119,95,0);
      do {
          let iconwechatY = true;
          let mergers: Array<any> = [928, 784, 874];
         themeW = `${parseInt(`${otherq}`) * themeW.length}`;
         iconwechatY = ((mergers.length % (Math.max(9, (iconwechatY ? 36 : mergers.length)))) < 36);
         if (brightnessS) {
            break;
         }
      } while (brightnessS && ((1.44 - subbasketballplayerB) >= 1.53 && 1 >= (5 - parseInt(`${subbasketballplayerB}`))));
      models1 += `${parseInt(`${otherq}`) << (Math.min(constants6.length, 4))}`;
   }

    if (sortBy === "asc") {

   let giftbuttonw = 6058861.0 <= mimo5;
   do {
       let form1: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,118,101,100,95,100,95,55,48,0),496], [String.fromCharCode(112,114,111,98,108,101,109,115,95,53,95,57,55,0),87], [String.fromCharCode(119,97,105,116,95,102,95,57,0),396]]);
       let productJ = 1.0;
       let awayicon7: Map<any, any> = new Map([[String.fromCharCode(116,95,54,54,95,102,102,116,112,97,99,107,0),208], [String.fromCharCode(99,111,108,117,109,115,95,116,95,55,51,0),320], [String.fromCharCode(99,95,55,48,95,117,110,114,101,99,111,103,0),882]]);
       let streamingL = String.fromCharCode(109,111,100,101,110,97,109,101,95,103,95,57,52,0);
       let shootnogoal6 = String.fromCharCode(104,95,50,49,95,114,101,116,114,105,101,118,101,0);
          let mbsplashQ = String.fromCharCode(114,95,57,55,95,116,111,111,108,98,97,114,0);
         productJ += mbsplashQ.length % 2;
         awayicon7.set(`${shootnogoal6}`, form1.size * shootnogoal6.length);
         shootnogoal6 += `${shootnogoal6.length}`;
      while (4 < streamingL.length) {
         streamingL += `${parseInt(`${productJ}`) & 3}`;
         break;
      }
      let templateprocessoro = productJ >= 7900866.0;
      do {
          let iconorientation0 = 0.0;
         productJ -= parseInt(`${productJ}`) << (Math.min(Math.abs(form1.size), 3));
         iconorientation0 *= parseFloat(`${parseInt(`${iconorientation0}`)}`);
         if (templateprocessoro) {
            break;
         }
      } while ((!shootnogoal6.includes(`${productJ}`)) && templateprocessoro);
       let watchnowbgS: Map<any, any> = new Map([[String.fromCharCode(105,110,116,102,108,111,97,116,95,111,95,57,54,0),577], [String.fromCharCode(98,95,49,50,95,109,117,114,109,117,114,0),708]]);
       let eyeopen4: Map<any, any> = new Map([[String.fromCharCode(100,111,117,103,108,97,115,95,48,95,49,49,0),String.fromCharCode(114,117,115,115,105,97,110,95,109,95,51,0)], [String.fromCharCode(103,101,110,101,114,97,116,111,114,115,95,111,95,49,51,0),String.fromCharCode(118,95,50,48,95,116,97,116,105,99,0)]]);
      if (!streamingL.startsWith(`${awayicon7.size}`)) {
          let verticalu = String.fromCharCode(109,101,109,117,116,105,108,95,54,95,54,57,0);
          let plasho = String.fromCharCode(117,95,54,57,95,114,111,111,116,0);
          let nativeexs = 5;
          let otherj = false;
          let lineY = false;
         streamingL += `${(verticalu == String.fromCharCode(81,0) ? verticalu.length : (lineY ? 4 : 4))}`;
         plasho += `${2 / (Math.max(9, nativeexs))}`;
         nativeexs >>= Math.min(2, Math.abs(((otherj ? 4 : 1) - 3)));
         otherj = !otherj;
         lineY = otherj || nativeexs > 46;
      }
      while (Array.from(awayicon7.keys()).includes(`${productJ}`)) {
         awayicon7 = new Map([[`${watchnowbgS.size}`, 3]]);
         break;
      }
      while (!streamingL.endsWith(`${watchnowbgS.size}`)) {
         watchnowbgS.set(`${productJ}`, 2);
         break;
      }
       let leakcheckerd = 5.0;
       let icontransferclubN: Array<any> = [26, 33, 508];
       let libfileZ: Array<any> = [777, 655, 486];
          let basketballiconV = String.fromCharCode(103,101,115,116,117,114,101,95,115,95,51,51,0);
         icontransferclubN = [2 | shootnogoal6.length];
         basketballiconV = `${basketballiconV.length - 3}`;
      while (Array.from(form1.keys()).includes(`${productJ}`)) {
         form1.set(`${leakcheckerd}`, 2 | icontransferclubN.length);
         break;
      }
         shootnogoal6 += `${watchnowbgS.size}`;
          let defaultroombg5 = String.fromCharCode(109,112,101,103,112,115,95,107,95,51,48,0);
          let rncoreI = String.fromCharCode(108,97,110,103,117,97,103,101,95,49,95,50,0);
          let promotiono = false;
         libfileZ.push(icontransferclubN.length + defaultroombg5.length);
         defaultroombg5 += `${2 - rncoreI.length}`;
         rncoreI = "2";
      mimo5 *= 2;
      if (giftbuttonw) {
         break;
      }
   } while (giftbuttonw && ((mimo5 - 4.77) > 1.84 && (mimo5 - 4.77) > 2.43));
       let libtob1 = true;
       let upgradep = String.fromCharCode(107,95,53,48,95,105,110,118,105,116,101,114,0);
       let ying5 = String.fromCharCode(102,95,49,51,95,99,111,109,98,105,110,97,116,105,111,110,115,0);
      if (3 > upgradep.length && !libtob1) {
          let liveendmodallogoT = 5.0;
          let notificationgrayk = 2.0;
          let phoneshareR: Map<any, any> = new Map([[String.fromCharCode(105,95,51,56,95,116,104,117,109,98,110,97,105,108,115,0),281], [String.fromCharCode(122,95,54,55,95,120,109,108,101,115,99,97,112,101,0),98], [String.fromCharCode(114,101,97,108,95,99,95,53,50,0),199]]);
          let downloadX: Array<any> = [530, 681, 463];
          let livenodatabgimgm = String.fromCharCode(122,95,54,95,99,97,112,116,105,111,110,115,0);
         upgradep = "3";
         liveendmodallogoT += (parseFloat(`${String.fromCharCode(67,0) == livenodatabgimgm ? downloadX.length : livenodatabgimgm.length}`));
         notificationgrayk += parseFloat(`${parseInt(`${liveendmodallogoT}`)}`);
         phoneshareR.set(`${liveendmodallogoT}`, phoneshareR.size);
         downloadX = [1];
      }
         ying5 += `${upgradep.length}`;
      let arrowK = String.fromCharCode(54,51,51,103,55,0) == upgradep;
      do {
         upgradep = `${upgradep.length}`;
         if (arrowK) {
            break;
         }
      } while (arrowK && (ying5 != upgradep));
       let controly = 1.0;
       let searchbarH = 0.0;
      while (5 > upgradep.length) {
         searchbarH -= upgradep.length >> (Math.min(Math.abs(1), 1));
         break;
      }
         upgradep = `${upgradep.length}`;
          let libturbomodulejsijnif = 3;
          let mergery = 5;
         controly *= 1;
         libturbomodulejsijnif |= mergery;
      while (searchbarH <= controly) {
         searchbarH += ((libtob1 ? 2 : 4) | parseInt(`${searchbarH}`));
         break;
      }
       let detailu: Map<any, any> = new Map([[String.fromCharCode(101,100,103,101,95,117,95,56,54,0),false ], [String.fromCharCode(97,95,49,95,99,97,110,99,101,108,108,97,116,105,111,110,0),true ]]);
       let zhengpianZ: Map<any, any> = new Map([[String.fromCharCode(99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,95,57,95,57,52,0),String.fromCharCode(106,95,55,50,95,120,102,111,114,109,0)], [String.fromCharCode(115,116,114,105,112,115,95,54,95,54,51,0),String.fromCharCode(119,95,55,54,95,105,110,116,111,0)]]);
      clock1 += `${parseInt(`${container1}`) | helperC.length}`;
   let orangeclock7 = mimo5 >= 6492450.0;
   do {
      mimo5 *= 3 * l_centerJ.length;
      if (orangeclock7) {
         break;
      }
   } while ((4 >= (helperC.length - parseInt(`${mimo5}`)) && 5.88 >= (1.68 - mimo5)) && orangeclock7);
       let bootsplash_ = String.fromCharCode(113,95,55,50,95,105,110,116,116,121,112,101,115,0);
       let resenda: Map<any, any> = new Map([[String.fromCharCode(115,101,116,99,98,95,56,95,49,57,0),String.fromCharCode(115,95,55,56,95,100,116,111,114,0)], [String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,95,104,95,50,54,0),String.fromCharCode(103,95,50,49,95,99,97,115,99,97,100,101,100,0)]]);
      if ((resenda.size - bootsplash_.length) >= 4 || 5 >= (bootsplash_.length - 4)) {
         bootsplash_ += `${resenda.size}`;
      }
       let back6 = String.fromCharCode(112,95,53,48,95,103,111,108,111,109,98,0);
       let bgvipxvodc = String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,55,95,50,49,0);
         back6 = `${bootsplash_.length}`;
      let coreq = resenda.size <= 6457336;
      do {
          let dependencyN = String.fromCharCode(112,95,51,48,95,116,97,105,108,115,0);
          let turndownH = String.fromCharCode(102,105,108,101,116,105,109,101,95,115,95,51,50,0);
          let invite9 = String.fromCharCode(122,95,54,48,95,115,104,97,100,101,0);
         resenda.set(dependencyN, dependencyN.length % (Math.max(3, bgvipxvodc.length)));
         turndownH += `${turndownH.length >> (Math.min(Math.abs(1), 5))}`;
         invite9 += `${invite9.length}`;
         if (coreq) {
            break;
         }
      } while (coreq && ((4 + bgvipxvodc.length) == 4 && 3 == (resenda.size + 4)));
         resenda = new Map([[bootsplash_, bgvipxvodc.length + bootsplash_.length]]);
      while (bgvipxvodc.includes(bootsplash_)) {
         bgvipxvodc += `${1 ^ bgvipxvodc.length}`;
         break;
      }
      l_centerJ = `${(helperC == String.fromCharCode(51,0) ? helperC.length : parseInt(`${container1}`))}`;
   let iconclosewhiteG = container1 >= 7097307.0;
   do {
      container1 += parseFloat(`${constants6.length / 1}`);
      if (iconclosewhiteG) {
         break;
      }
   } while (((5 - l_hashY.length) == 3 && (2.81 + container1) == 4.61) && iconclosewhiteG);
   if (suggestiono != helperC) {
      helperC += `${l_centerJ.length - 1}`;
   }
   for (let f = 0; f < 3; f++) {
      constants6 = `${1 & constants6.length}`;
   }
   for (let e = 0; e < 2; e++) {
      l_centerJ = `${constants6.length}`;
   }
      setSortBy("desc");
    } else {

   if (clock1.startsWith(`${helperC.length}`)) {
      helperC += `${helperC.length + configureY.length}`;
   }
   if (models1.length == 2 || 2 == l_centerJ.length) {
       let combinee = 1.0;
      let settingsK = combinee >= 7392921.0;
      do {
         combinee *= parseInt(`${combinee}`) / 1;
         if (settingsK) {
            break;
         }
      } while (settingsK && (5.76 > (combinee / 1)));
       let k_hashG = 4.0;
      while ((k_hashG + 1.91) >= 1.94 || 4.59 >= (combinee + 1.91)) {
         combinee *= 3 - parseInt(`${k_hashG}`);
         break;
      }
      models1 = `${(String.fromCharCode(49,0) == constants6 ? constants6.length : parseInt(`${mimo5}`))}`;
   }
   while (l_hashY.endsWith(`${helperC.length}`)) {
      l_hashY += `${(models1 == String.fromCharCode(50,0) ? l_centerJ.length : models1.length)}`;
      break;
   }
      container1 /= Math.max(parseFloat(`${1 % (Math.max(4, constants6.length))}`), 1);
   if (models1.length > helperC.length) {
       let injuryV = 1.0;
       let shirtn = String.fromCharCode(105,95,57,57,95,108,111,117,100,110,101,115,115,0);
          let schedulerr = String.fromCharCode(108,95,57,95,98,112,114,105,110,116,0);
          let lesso: Array<any> = [551, 798];
         injuryV -= (String.fromCharCode(75,0) == schedulerr ? parseInt(`${injuryV}`) : schedulerr.length);
         lesso.push(lesso.length);
      if ((parseInt(`${injuryV}`) / (Math.max(shirtn.length, 1))) <= 5 || (injuryV / 3.85) <= 5.42) {
         injuryV /= Math.max(parseInt(`${injuryV}`) / 3, 2);
      }
         shirtn = `${parseInt(`${injuryV}`) ^ shirtn.length}`;
      for (let n = 0; n < 3; n++) {
          let chinaQ = String.fromCharCode(101,102,102,101,99,116,95,113,95,54,53,0);
          let launchB = String.fromCharCode(113,112,105,115,95,99,95,51,0);
          let delegate_n7c = String.fromCharCode(110,95,57,49,95,105,118,115,101,116,117,112,0);
          let backq = String.fromCharCode(115,95,52,56,95,108,109,108,109,0);
          let iconrightorangef = 3.0;
         shirtn = `${chinaQ.length}`;
         chinaQ = "3";
         launchB += `${2 * delegate_n7c.length}`;
         delegate_n7c = `${backq.length}`;
         backq += `${(backq == String.fromCharCode(86,0) ? launchB.length : backq.length)}`;
         iconrightorangef *= 3;
      }
      let chartR = 6144807 >= shirtn.length;
      do {
          let half8 = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,55,95,52,49,0);
          let gmailB = String.fromCharCode(99,108,111,110,101,95,57,95,57,56,0);
         shirtn = `${half8.length}`;
         half8 = `${1 << (Math.min(1, gmailB.length))}`;
         gmailB += `${gmailB.length}`;
         if (chartR) {
            break;
         }
      } while (chartR && ((3.2 - injuryV) < 2.67 || 3.2 < (shirtn.length - injuryV)));
      let linkC = 9233082.0 >= injuryV;
      do {
         injuryV -= parseInt(`${injuryV}`) - 3;
         if (linkC) {
            break;
         }
      } while (linkC && (shirtn.length == injuryV));
      models1 += `${(String.fromCharCode(102,0) == clock1 ? helperC.length : clock1.length)}`;
   }
      container1 += parseFloat(`${1 | models1.length}`);
   if (5 == (parseInt(`${mimo5}`) * models1.length)) {
      models1 = `${models1.length}`;
   }
      configureY += `${configureY.length}`;
      setSortBy("asc");
    }
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: "center",
      }}
      height="50%"
    >
      <View style={styles.episodeList}>
        {/* <Text
          style={[
            styles.btn,
            textVariants.header
          ]}>
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text> */}
        <FlatList
          horizontal
          data={ranges}
          renderItem={({ item, index }: { item: string; index: number }) => {
            return (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setCurrentIndex(index)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    ...textVariants.header,
                    color: index === currentIndex ? colors.text : colors.muted,
                    fontSize: index === currentIndex ? 18 : 15,
                  }}
                >
                  {`${item}集`}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{ paddingTop: 4 }}>
            {sortBy === "asc" ? <SortAscSvg /> : <SortDescSvg />}
          </View>
          <Text
            style={{
              textAlign: "center",
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}
          >
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {displayEpisodes && isVisible && (
        <ScrollView
          contentContainerStyle={{
            ...styles.episodeList,
            paddingBottom: insets.bottom,
            marginHorizontal: spacing.sideOffset,
          }}
        >
          {displayEpisodes?.map((ep, idx) => (
            <TouchableOpacity
              key={`expand-${idx}`}
              onPress={() => {
                onConfirm(ep.nid);
                onCancel();
              }}
            >
              <View
                style={{
                  backgroundColor:
                    ep.nid === activeEpisode ? colors.primary : colors.search,
                  padding: spacing.s,
                  minWidth: 60,
                  marginRight: "auto",
                  marginBottom: spacing.s,
                  borderRadius: 8,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 13,
                    textAlign: "center",
                    fontWeight: "500",
                    color:
                      ep.nid === activeEpisode ? colors.selected : colors.muted,
                  }}
                >
                  {`${ep.name}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </BottomSheet>
  );
}

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "flex-start",
    paddingLeft: 8,
    marginBottom: 14,
    paddingHorizontal: 20,
  },
  sortBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
