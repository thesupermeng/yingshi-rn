import React, { useEffect, ReactNode, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import FastImage from "../common/tt_connection";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "@hooks/tt_spec_download";
import { ttEntry } from "@redux/reducers/tt_dialog_rewind";
import { VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_PURCHASE_MAX } from "@utility/tt_trophy_cross";

interface ttSmall {
  coverImage: any;
  coverBackground: any;
  onClose: any;
  onPurchase: any;
  showCondition: boolean;
}

export default function VipPromotionModal({
  coverImage,
  coverBackground,
  onClose,
  onPurchase,
  showCondition,
}: ttSmall) {
  const backgroundState = useSelector<ttEntry>('backgroundReducer');
  const [countdownSecond, setCountdownSecond] = useState(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);

  const hours = Math.floor(countdownSecond / 60 / 60);
  const minute = Math.floor(countdownSecond / 60 % 60);
  const second = Math.floor(countdownSecond % 60);

  const remainingTimeAry = [
    String(hours).padStart(2, '0')[0],
    String(hours).padStart(2, '0')[1],
    String(minute).padStart(2, '0')[0],
    String(minute).padStart(2, '0')[1],
    String(second).padStart(2, '0')[0],
    String(second).padStart(2, '0')[1],
  ];

  const isFullscreen = Dimensions.get('window').height < Dimensions.get('window').width;

  
  const fontSizeAnim = useRef(new Animated.Value(14)).current;

  useEffect(() => {
    if (backgroundState.vipPromotionPurchaseNum !== undefined) {
      
      Animated.sequence([
        Animated.timing(fontSizeAnim, {
          toValue: 16, 
          duration: 280, 
          useNativeDriver: false,
        }),
        Animated.timing(fontSizeAnim, {
          toValue: 14, 
          duration: 200, 
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [backgroundState.vipPromotionPurchaseNum]);

  
  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let ranks = 1.0;
    let successA = 3.0;
    let cross6: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,95,55,95,50,57,0),String.fromCharCode(114,95,53,48,95,104,105,103,104,115,0)], [String.fromCharCode(107,95,57,54,95,99,111,109,112,111,115,101,105,0),String.fromCharCode(107,102,114,109,95,116,95,53,49,0)]]);
    let checkboxU = String.fromCharCode(107,100,102,95,51,95,51,52,0);
    let basketballi = 5.0;
    let navigationi = 2;
    let selectT = 0.0;
    let hooksM = String.fromCharCode(118,97,108,117,101,100,95,105,95,57,57,0);
    let sideu: Array<any> = [String.fromCharCode(105,95,53,49,95,116,100,101,99,111,100,101,0), String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,95,52,95,56,48,0)];
    let chinaH = String.fromCharCode(100,105,114,110,97,109,101,95,55,95,52,48,0);
    let privileges = 5.0;
    let recommendationn = String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,95,106,95,55,50,0);
    let gradlew = 5.0;
    let lighto: Map<any, any> = new Map([[String.fromCharCode(115,95,53,48,95,99,111,118,97,108,101,110,116,0),true ], [String.fromCharCode(112,117,110,99,104,95,49,95,56,48,0),true ], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,107,95,49,57,0),false ]]);
    let showF: Map<any, any> = new Map([[String.fromCharCode(106,95,57,48,0),String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,99,95,52,55,0)], [String.fromCharCode(105,95,49,50,95,97,112,112,114,111,118,97,108,0),String.fromCharCode(99,95,49,48,48,95,115,111,102,116,116,104,114,101,115,104,0)]]);
      chinaH = `${parseInt(`${basketballi}`)}`;
      sideu.push(1 % (Math.max(9, parseInt(`${selectT}`))));
   let basketballT = basketballi <= 6612182.0;
   do {
      basketballi += parseFloat(`${parseInt(`${selectT}`)}`);
      if (basketballT) {
         break;
      }
   } while (basketballT && (2.27 > (basketballi + parseFloat(`${cross6.size}`))));
      cross6 = new Map([[`${cross6.size}`, cross6.size]]);
   for (let p = 0; p < 1; p++) {
       let anythinkF = 3.0;
       let streamingl = true;
      for (let p = 0; p < 2; p++) {
         streamingl = !streamingl;
      }
         anythinkF *= (parseInt(`${anythinkF}`) & (streamingl ? 2 : 4));
         anythinkF -= 1 >> (Math.min(Math.abs(parseInt(`${anythinkF}`)), 5));
      if (2.91 <= anythinkF && 5.56 <= (2.91 * anythinkF)) {
         streamingl = !streamingl;
      }
      if (!streamingl || (anythinkF - 4.25) <= 1.44) {
         streamingl = 15.76 == anythinkF;
      }
         anythinkF /= Math.max(parseInt(`${anythinkF}`) + 2, 1);
      successA -= parseFloat(`${checkboxU.length}`);
   }
      basketballi -= parseFloat(`${navigationi % (Math.max(1, 6))}`);
   while (checkboxU.length > selectT) {
      selectT += parseInt(`${successA}`);
      break;
   }
   for (let b = 0; b < 3; b++) {
       let bodan0: Map<any, any> = new Map([[String.fromCharCode(111,95,54,48,95,99,116,111,114,0),true ], [String.fromCharCode(121,98,108,111,99,107,95,49,95,53,49,0),true ]]);
       let whiteo = String.fromCharCode(116,104,114,111,116,116,108,101,114,95,97,95,51,51,0);
       let screenY = false;
       let rankm = String.fromCharCode(116,101,109,112,111,95,117,95,56,56,0);
          let flipperM = String.fromCharCode(97,95,48,95,100,99,97,100,115,112,0);
          let middleQ: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,101,100,95,102,95,50,55,0),457], [String.fromCharCode(111,95,49,51,95,99,111,110,100,105,116,105,111,110,97,108,0),761]]);
         bodan0 = new Map([[`${middleQ.size}`, middleQ.size]]);
         flipperM += `${flipperM.length ^ flipperM.length}`;
         whiteo += `${(2 | (screenY ? 5 : 3))}`;
      let green8 = screenY ? !screenY : screenY;
      do {
         screenY = (whiteo.length >> (Math.min(3, rankm.length))) >= 45;
         if (green8) {
            break;
         }
      } while ((screenY || rankm.length < 4) && green8);
          let suggestionn = String.fromCharCode(99,111,112,121,116,111,95,48,95,54,49,0);
          let guide9: Array<any> = [String.fromCharCode(121,95,54,51,95,97,118,102,111,114,109,97,116,0), String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,95,115,95,56,54,0), String.fromCharCode(117,95,57,54,95,109,97,112,115,0)];
          let clock7 = String.fromCharCode(106,117,108,105,97,110,100,97,121,95,103,95,55,57,0);
         rankm += `${rankm.length}`;
         suggestionn += `${guide9.length}`;
         guide9.push(1);
         clock7 += `${suggestionn.length * clock7.length}`;
         bodan0 = new Map([[`${bodan0.size}`, bodan0.size]]);
      while ((4 / (Math.max(7, whiteo.length))) >= 1 || 5 >= (whiteo.length / 4)) {
          let checkbox9: Array<any> = [565, 228];
          let bridgeM = 0.0;
          let update_2x_: Map<any, any> = new Map([[String.fromCharCode(110,95,54,56,95,109,101,97,115,117,114,101,109,101,110,116,115,0),489], [String.fromCharCode(104,95,56,56,95,103,117,105,100,115,0),493]]);
          let founda = 4.0;
          let searchbarN = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,109,95,54,53,0);
         whiteo += `${update_2x_.size}`;
         checkbox9 = [checkbox9.length / (Math.max(3, 10))];
         bridgeM *= 1;
         update_2x_ = new Map([[`${checkbox9.length}`, searchbarN.length * 2]]);
         founda -= parseInt(`${bridgeM}`);
         searchbarN = `${parseInt(`${founda}`)}`;
         break;
      }
         bodan0.set(rankm, bodan0.size & rankm.length);
      for (let m = 0; m < 1; m++) {
         screenY = (((!screenY ? 79 : whiteo.length) - whiteo.length) == 79);
      }
         whiteo = "1";
      for (let o = 0; o < 1; o++) {
          let orientationf = 2.0;
          let tumbnailj = String.fromCharCode(112,114,111,98,115,95,121,95,54,48,0);
         whiteo += `${3 >> (Math.min(4, Math.abs(bodan0.size)))}`;
         orientationf /= Math.max(parseInt(`${orientationf}`) + 1, 3);
         tumbnailj += `${(String.fromCharCode(90,0) == tumbnailj ? tumbnailj.length : parseInt(`${orientationf}`))}`;
      }
      if (rankm.startsWith(`${bodan0.size}`)) {
         bodan0 = new Map([[rankm, 3]]);
      }
       let stre = String.fromCharCode(104,100,97,116,97,95,53,95,52,48,0);
       let streamingt = String.fromCharCode(107,95,52,57,95,99,111,118,101,114,105,110,103,0);
      basketballi /= Math.max(5, parseFloat(`${checkboxU.length}`));
   }
      cross6 = new Map([[`${successA}`, 3]]);
   while ((hooksM.length % (Math.max(5, 5))) >= 3) {
      hooksM = `${(checkboxU == String.fromCharCode(109,0) ? checkboxU.length : parseInt(`${privileges}`))}`;
      break;
   }
       let screenw = 1.0;
       let pathu: Array<any> = [824, 879, 36];
      let tempj = pathu.length <= 6011112;
      do {
         pathu = [parseInt(`${screenw}`)];
         if (tempj) {
            break;
         }
      } while ((pathu.includes(screenw)) && tempj);
          let telegramV = 2.0;
          let awayO = true;
          let disconnectedL = String.fromCharCode(112,95,51,95,108,105,109,105,116,101,100,0);
         pathu.push(pathu.length);
         telegramV -= ((awayO ? 1 : 3) ^ disconnectedL.length);
         awayO = 70.90 == telegramV;
         disconnectedL = `${((awayO ? 1 : 3))}`;
         pathu = [pathu.length ^ 2];
         screenw += parseFloat(`${parseInt(`${screenw}`) ^ pathu.length}`);
          let buttony = 3.0;
          let whatsappj = 2.0;
          let logoutJ = 2.0;
         screenw /= Math.max(2, parseFloat(`${parseInt(`${whatsappj}`)}`));
         buttony += parseFloat(`${parseInt(`${logoutJ}`) * 1}`);
         logoutJ += parseFloat(`${1 & parseInt(`${logoutJ}`)}`);
      for (let j = 0; j < 2; j++) {
         pathu = [2];
      }
      chinaH = `${(String.fromCharCode(50,0) == hooksM ? cross6.size : hooksM.length)}`;
       let utils9 = String.fromCharCode(100,101,99,111,100,101,95,97,95,53,51,0);
       let selectedo = 0.0;
       let popupP: Map<any, any> = new Map([[String.fromCharCode(107,101,101,112,97,108,105,118,101,95,116,95,54,51,0),false ], [String.fromCharCode(106,97,99,107,95,104,95,57,49,0),false ]]);
         selectedo -= popupP.size;
          let agreementn = String.fromCharCode(107,108,97,121,116,110,95,107,95,54,51,0);
         popupP.set(utils9, utils9.length ^ agreementn.length);
         utils9 += "1";
      let championQ = 9210587 >= utils9.length;
      do {
          let analytics0 = String.fromCharCode(99,114,108,100,95,117,95,51,48,0);
          let match7 = String.fromCharCode(111,95,51,48,95,117,110,113,117,97,110,116,105,122,101,0);
         utils9 += `${match7.length}`;
         analytics0 += `${(String.fromCharCode(109,0) == analytics0 ? analytics0.length : analytics0.length)}`;
         match7 += `${analytics0.length}`;
         if (championQ) {
            break;
         }
      } while (championQ && ((utils9.length >> (Math.min(3, Math.abs(popupP.size)))) == 3));
      while ((parseInt(`${selectedo}`) / (Math.max(9, utils9.length))) >= 2) {
         selectedo /= Math.max(utils9.length ^ parseInt(`${selectedo}`), 3);
         break;
      }
      let guidek = utils9 == String.fromCharCode(95,55,101,119,112,122,55,110,98,110,0);
      do {
          let animationf = false;
          let animationm = String.fromCharCode(99,111,114,101,115,95,103,95,55,54,0);
         utils9 = `${popupP.size - animationm.length}`;
         animationf = (!animationf ? animationf : animationf);
         animationm += `${((animationf ? 1 : 4))}`;
         if (guidek) {
            break;
         }
      } while (guidek && ((4 << (Math.min(1, utils9.length))) <= 5 && (parseInt(`${selectedo}`) * 4) <= 3));
      let shared5 = 9509626.0 <= selectedo;
      do {
          let settings3 = 3;
          let redirectC: Array<any> = [513, 464];
          let u_imagem = String.fromCharCode(97,95,55,56,95,114,101,99,111,110,110,101,99,116,101,100,0);
          let descg = 5;
          let floateru: Array<any> = [695, 982, 592];
         selectedo += descg;
         settings3 ^= settings3 * floateru.length;
         redirectC = [(String.fromCharCode(101,0) == u_imagem ? floateru.length : u_imagem.length)];
         descg <<= Math.min(5, Math.abs(settings3 + 2));
         if (shared5) {
            break;
         }
      } while ((utils9.length >= 3) && shared5);
          let o_positionx: Array<any> = [237, 548, 920];
          let time_1W: Map<any, any> = new Map([[String.fromCharCode(103,95,51,55,95,101,109,117,101,100,103,101,0),592], [String.fromCharCode(99,95,57,55,95,108,108,118,105,100,100,115,112,0),722], [String.fromCharCode(114,95,50,53,95,98,105,116,0),391]]);
         selectedo -= popupP.size % 2;
         o_positionx.push(2);
         time_1W = new Map([[`${time_1W.size}`, time_1W.size + 1]]);
          let statisticsj = String.fromCharCode(116,108,111,103,95,109,95,52,56,0);
          let loadingK = String.fromCharCode(109,95,55,50,95,97,115,104,105,110,103,0);
         selectedo -= 3;
         statisticsj = `${(statisticsj == String.fromCharCode(106,0) ? statisticsj.length : loadingK.length)}`;
         loadingK += `${2 % (Math.max(8, loadingK.length))}`;
      chinaH = "3";
      cross6 = new Map([[`${navigationi}`, hooksM.length ^ navigationi]]);
   for (let k = 0; k < 1; k++) {
      privileges *= parseFloat(`${parseInt(`${successA}`)}`);
   }
       let mbbidH = true;
       let chartF: Array<any> = [935, 767];
       let launcherS = String.fromCharCode(102,95,51,54,95,112,97,116,116,101,114,110,0);
          let statisticss = String.fromCharCode(106,95,56,55,95,103,101,111,99,111,100,101,100,0);
          let rulesy = String.fromCharCode(117,95,51,56,95,105,110,116,101,114,102,114,97,109,101,0);
         launcherS += `${((mbbidH ? 1 : 2) ^ chartF.length)}`;
         statisticss += `${statisticss.length + rulesy.length}`;
         rulesy = `${rulesy.length | statisticss.length}`;
      for (let u = 0; u < 3; u++) {
         chartF.push(((mbbidH ? 1 : 1) << (Math.min(chartF.length, 5))));
      }
          let ewarded2 = String.fromCharCode(115,117,105,116,101,115,95,105,95,57,51,0);
          let dplusK = true;
          let targett = String.fromCharCode(109,106,112,101,103,100,101,99,95,52,95,55,48,0);
         mbbidH = targett == String.fromCharCode(68,0);
         ewarded2 += `${((dplusK ? 3 : 1) % 3)}`;
         dplusK = !dplusK;
         targett += `${2 + ewarded2.length}`;
          let register_qY = 0;
         mbbidH = chartF.length > 66 || register_qY > 66;
      if (!mbbidH) {
         chartF = [chartF.length];
      }
      for (let z = 0; z < 2; z++) {
          let agreementk = 4;
         mbbidH = launcherS.length > 34 || !mbbidH;
         agreementk |= agreementk | 1;
      }
         chartF.push((1 / (Math.max(9, (mbbidH ? 1 : 1)))));
         chartF = [launcherS.length];
         launcherS = `${chartF.length}`;
      selectT -= 1;
   while (ranks == 4.27) {
      privileges -= parseFloat(`${hooksM.length}`);
      break;
   }
       let logouto = true;
       let spinnerB: Array<any> = [935, 93, 726];
       let round2: Array<any> = [String.fromCharCode(99,99,111,117,110,116,95,119,95,51,57,0), String.fromCharCode(118,95,54,50,95,114,101,103,105,111,110,115,0)];
         logouto = spinnerB.includes(logouto);
         spinnerB.push(round2.length << (Math.min(Math.abs(2), 2)));
          let mathY = String.fromCharCode(120,95,56,95,104,115,99,97,108,101,0);
          let clocky = 4.0;
         round2.push(3 >> (Math.min(3, mathY.length)));
         mathY = `${parseInt(`${clocky}`)}`;
      if (logouto) {
         round2.push(spinnerB.length);
      }
         spinnerB.push(round2.length);
       let popupA = String.fromCharCode(100,112,116,114,115,95,110,95,49,49,0);
      let stationsV = 9754666 <= round2.length;
      do {
          let clockM = String.fromCharCode(111,95,55,49,95,108,111,99,105,0);
          let shirtc = 1.0;
          let gesturesn = 3;
          let long_z8T: Array<any> = [870, 237, 924];
         round2 = [clockM.length];
         clockM += `${long_z8T.length + gesturesn}`;
         shirtc *= long_z8T.length;
         gesturesn |= long_z8T.length;
         if (stationsV) {
            break;
         }
      } while (stationsV && (spinnerB.length >= round2.length));
         round2.push(spinnerB.length);
      let cornere = logouto ? !logouto : logouto;
      do {
         logouto = 11 >= spinnerB.length && String.fromCharCode(82,0) == popupA;
         if (cornere) {
            break;
         }
      } while (cornere && (logouto));
      cross6 = new Map([[hooksM, 3 * hooksM.length]]);
   for (let x = 0; x < 3; x++) {
      checkboxU = `${sideu.length}`;
   }
   let sortw = hooksM.length <= 5078015;
   do {
       let reactnativejsD = String.fromCharCode(101,95,51,53,95,112,98,107,100,102,0);
       let volume3: Map<any, any> = new Map([[String.fromCharCode(97,95,52,56,95,110,105,100,115,0),212], [String.fromCharCode(110,95,52,50,95,97,114,107,101,114,0),110], [String.fromCharCode(100,99,112,114,101,100,95,103,95,51,53,0),47]]);
       let pangleR: Array<any> = [952, 272];
       let shootg = String.fromCharCode(108,101,114,116,95,100,95,49,0);
       let sendC: Array<any> = [484, 141, 903];
          let completeo = 2.0;
         volume3.set(shootg, shootg.length);
         completeo += parseFloat(`${parseInt(`${completeo}`) - parseInt(`${completeo}`)}`);
       let description__9 = true;
       let mutedF = false;
      if (mutedF) {
         pangleR = [1];
      }
      if (mutedF || 1 == (2 / (Math.max(5, sendC.length)))) {
          let subsr = true;
          let chinai: Map<any, any> = new Map([[String.fromCharCode(97,119,97,121,95,57,95,51,56,0),155], [String.fromCharCode(101,95,50,49,95,114,116,99,100,0),61]]);
          let textw = String.fromCharCode(118,97,108,105,100,95,108,95,57,50,0);
         mutedF = (!description__9 ? !subsr : description__9);
         subsr = 44 == chinai.size;
         chinai = new Map([[`${chinai.size}`, chinai.size]]);
         textw = `${chinai.size}`;
      }
      let teamJ = pangleR.length <= 8392955;
      do {
         pangleR = [(3 ^ (mutedF ? 4 : 5))];
         if (teamJ) {
            break;
         }
      } while (teamJ && (3 < (5 & pangleR.length) || 5 < (pangleR.length & sendC.length)));
      while (!description__9 || 1 == shootg.length) {
         description__9 = pangleR.length > reactnativejsD.length;
         break;
      }
          let unselectedk = String.fromCharCode(106,95,49,54,95,111,116,111,115,0);
          let langkeyq = String.fromCharCode(99,95,56,54,95,108,111,116,116,105,101,109,111,100,101,108,0);
          let contextm = String.fromCharCode(99,95,57,50,95,112,112,99,99,111,109,109,111,110,0);
         mutedF = !unselectedk.includes(`${mutedF}`);
         unselectedk += `${langkeyq.length}`;
         langkeyq += "3";
         contextm += `${langkeyq.length | contextm.length}`;
         reactnativejsD = `${shootg.length + 2}`;
         sendC = [shootg.length / 3];
      let chatO = 7378164 <= volume3.size;
      do {
         volume3 = new Map([[`${mutedF}`, (3 / (Math.max(1, (description__9 ? 2 : 4))))]]);
         if (chatO) {
            break;
         }
      } while (((volume3.size << (Math.min(4, sendC.length))) == 1 || 5 == (1 << (Math.min(3, sendC.length)))) && chatO);
         sendC = [pangleR.length];
      hooksM += `${1 | parseInt(`${privileges}`)}`;
      if (sortw) {
         break;
      }
   } while (sortw && (hooksM.length >= 1));
   for (let t = 0; t < 2; t++) {
      ranks *= parseFloat(`${3 % (Math.max(2, navigationi))}`);
   }
      navigationi %= Math.max(sideu.length, 1);
      hooksM += `${cross6.size << (Math.min(chinaH.length, 2))}`;
      sideu = [3];
   if ((recommendationn.length ^ 2) <= 4 || 2 <= (cross6.size ^ recommendationn.length)) {
       let sortz = String.fromCharCode(105,95,54,54,95,97,99,101,108,112,0);
       let yellow5 = false;
      if (sortz.length < 3) {
          let lightc = 5;
          let photoo: Array<any> = [29, 791];
          let progressM = String.fromCharCode(119,95,54,55,95,115,97,109,105,0);
          let singleB = String.fromCharCode(111,95,51,52,95,107,102,109,111,100,101,115,0);
         yellow5 = 32 == photoo.length;
         lightc &= singleB.length << (Math.min(Math.abs(2), 1));
         photoo.push((progressM == String.fromCharCode(122,0) ? lightc : progressM.length));
         singleB = `${lightc}`;
      }
         yellow5 = sortz.length >= 26 || !yellow5;
          let sellV = String.fromCharCode(111,117,116,95,98,95,56,49,0);
          let stepv = 1;
         yellow5 = !yellow5 && sortz.length < 46;
         sellV = `${(sellV == String.fromCharCode(74,0) ? stepv : sellV.length)}`;
         stepv /= Math.max(stepv / (Math.max(8, sellV.length)), 1);
      if (5 >= sortz.length && !yellow5) {
         sortz = `${sortz.length}`;
      }
         sortz = `${(sortz == String.fromCharCode(52,0) ? (yellow5 ? 1 : 5) : sortz.length)}`;
       let downloaderb = String.fromCharCode(117,95,55,55,95,115,99,105,105,0);
       let backwardC = String.fromCharCode(100,95,54,51,95,100,105,115,112,108,97,121,101,100,0);
      cross6.set(`${gradlew}`, sideu.length / (Math.max(1, 8)));
   }
   while (Array.from(cross6.keys()).includes(`${ranks}`)) {
      cross6 = new Map([[`${sideu.length}`, 2 | parseInt(`${privileges}`)]]);
      break;
   }
   if (sideu.length == 4) {
      sideu.push(parseInt(`${basketballi}`));
   }

      setCountdownSecond(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  if (showCondition)
    return (
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: isFullscreen ? [{ scale: 0.75 }] : []
        }}
      >
        <View
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <LinearGradient
            colors={['#4A3E2A', '#231D14', '#1A1712', '#191612']}
            locations={[0, 0.29, 0.63, 1]}
            style={{
              width: 322,
              height: 340,
              borderRadius: 14,
              paddingHorizontal: 16,
              paddingTop: 26,
              paddingBottom: 12,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View
              style={{
                flex: 1,
                gap: 16,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  gap: 10,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    ...styles.titleText
                  }}>
                  限时订阅优惠
                </Text>
                <View style={styles.countdownContainer}>
                  {remainingTimeAry.map((val, i) => {
                    return (
                      <View
                        key={i}
                        style={{
                          flexDirection: 'row',
                          gap: 5,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#FA3E3E',
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 24,
                            height: 24,
                            paddingTop: 5,
                            paddingBottom: 3,
                          }}
                        >
                          <Text style={styles.countdownText}>
                            {val}
                          </Text>

                        </View>
                        {i % 2 === 1 && i < remainingTimeAry.length - 1 && (
                          <Text style={{ ...styles.countdownText, padding: 1, color: '#FA3E3E' }}>
                            :
                          </Text>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>




              <Text style={styles.contentText1}>
                限时优惠，立即升级会员可享受最低4折优惠，先到先得！已有99.5%用户抢先购买，解锁了更多影视权益。您确定要错过这个升级体验的最好机会吗？
              </Text>
              {/* <Text style={styles.contentText2}>
                限时优惠
                <Text style={{ ...styles.contentText2, color: '#FAC33D' }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
                <Animated.Text style={{ ...styles.contentText2, color: '#FA3E3E', fontSize: fontSizeAnim  , position:'relative', paddingHorizontal:10}}>
                  {backgroundState.vipPromotionPurchaseNum}人
                </Animated.Text>
                购买
              </Text> */}

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center',  }}>
  <Text style={styles.contentText2}>
    限时优惠
    <Text style={{ ...styles.contentText2, color: '#FAC33D', marginLeft: 5, marginRight: 5 }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
  </Text>
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width:72 }}>
    <Animated.Text style={{ ...styles.contentText2, color: '#FA3E3E', fontSize: fontSizeAnim }}>
      {backgroundState.vipPromotionPurchaseNum}人
    </Animated.Text>
  </View>
  <Text style={styles.contentText2}>购买</Text>
</View>

              


            </View>

            <View
              style={{
                paddingHorizontal: 24,
                gap: 6,
              }}>
              <TouchableOpacity
                onPress={onPurchase}
              >
                <LinearGradient
                  colors={['#D1AC7D', '#B1885F']}
                  locations={[0.0, 0.99]}
                  style={styles.purchaseButton}
                >
                  <Text style={styles.purchaseButtonText}>
                    继续抢购
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>
                  放弃机会
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View >
      </View >
    );

  return <></>;
}

const styles = StyleSheet.create({
  purchaseButton: {
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: "PingFang SC",
  },
  cancelButton: {
    backgroundColor: "#121314",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: "PingFang SC",
  },
  titleText: {
    textAlign: 'center',
    color: '#F4DBBA',
    fontSize: 17,
    fontFamily: 'PingFang SC',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 1,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: 'center',
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Archivo',
    fontWeight: '800',
    lineHeight: 15,
  },
  contentText1: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: 'white',
  },
  contentText2: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#FFEFDA',
  },
  image1: {
    position: "absolute",
    bottom: -30,
    width: 148,
    height: 156,
  },
  image2: {
    position: "absolute",
    top: 0,
    width: '100%',
    aspectRatio: 1208 / 496,
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
