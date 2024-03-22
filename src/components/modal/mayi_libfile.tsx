import React, { useEffect, ReactNode, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import FastImage from "../common/mayi_slider";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "@hooks/mayi_redirect";
import { mayi_CircleImage } from "@redux/reducers/mayi_imagenomoredata";
import { VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_PURCHASE_MAX } from "@utility/mayi_middleware_apps";

interface mayi_GoogleViews {
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
}: mayi_GoogleViews) {
  const backgroundState = useSelector<mayi_CircleImage>('backgroundReducer');
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
       let whatsapps = String.fromCharCode(118,95,54,49,95,117,100,116,97,0);
    let middlez = String.fromCharCode(97,112,97,114,97,109,115,95,98,95,55,57,0);
    let commonH = false;
    let libswscaleq: Map<any, any> = new Map([[String.fromCharCode(103,95,52,49,95,112,114,111,109,105,115,101,0),483], [String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,110,95,54,48,0),569]]);
    let pointo = 3;
    let auto_l0 = 0.0;
    let shirtY = String.fromCharCode(114,95,49,48,95,112,97,116,116,101,114,110,115,0);
    let backgroundi = false;
    let changek = String.fromCharCode(98,95,57,95,99,111,110,118,101,114,116,101,114,0);
    let zoomM = String.fromCharCode(99,114,108,105,115,115,117,101,114,95,99,95,50,54,0);
    let bingd = String.fromCharCode(100,105,115,112,101,110,115,101,114,95,49,95,54,0);
    let libflipper0 = 5.0;
    let annerw = String.fromCharCode(112,101,114,102,111,114,109,105,110,103,95,110,95,57,53,0);
       let halffieldimageD: Array<any> = [994, 82];
         halffieldimageD = [halffieldimageD.length];
       let catalog_ = true;
       let zhengpian3 = false;
          let foregroundH = 0.0;
          let bootB = 5;
          let spinnerA = String.fromCharCode(106,95,55,57,95,97,112,112,101,97,114,115,0);
         catalog_ = 82.20 == foregroundH;
         foregroundH -= (parseFloat(`${String.fromCharCode(79,0) == spinnerA ? bootB : spinnerA.length}`));
         bootB |= 3 - bootB;
      commonH = commonH && changek.length == 46;
   if (3 > middlez.length) {
      middlez = `${zoomM.length}`;
   }
   for (let q = 0; q < 1; q++) {
      changek += `${whatsapps.length}`;
   }
   if (backgroundi) {
       let libapminsightb3: Map<any, any> = new Map([[String.fromCharCode(99,111,118,97,108,101,110,116,95,52,95,56,53,0),56], [String.fromCharCode(100,101,99,105,115,105,111,110,95,97,95,52,52,0),533], [String.fromCharCode(111,95,56,57,95,112,111,108,108,105,110,103,0),375]]);
         libapminsightb3.set(`${libapminsightb3.size}`, libapminsightb3.size - libapminsightb3.size);
      let checkboxG = libapminsightb3.size <= 5453335;
      do {
         libapminsightb3 = new Map([[`${libapminsightb3.size}`, 2]]);
         if (checkboxG) {
            break;
         }
      } while (((2 | libapminsightb3.size) == 3 && (libapminsightb3.size | 2) == 5) && checkboxG);
      let mathe = libapminsightb3.size >= 5258571;
      do {
          let redirect_: Array<any> = [195, 985, 216];
          let gifta = String.fromCharCode(106,115,111,110,115,95,99,95,51,53,0);
          let projectb = 3.0;
          let libfbjniN = 2.0;
          let confirmation4 = String.fromCharCode(115,101,116,116,105,110,103,115,95,108,95,49,49,0);
         libapminsightb3 = new Map([[`${libapminsightb3.size}`, redirect_.length >> (Math.min(Math.abs(1), 2))]]);
         redirect_.push(parseInt(`${projectb}`));
         gifta += `${3 - gifta.length}`;
         libfbjniN *= gifta.length % 2;
         confirmation4 += `${parseInt(`${libfbjniN}`)}`;
         if (mathe) {
            break;
         }
      } while (mathe && (Array.from(libapminsightb3.values()).includes(libapminsightb3.size)));
      auto_l0 -= parseFloat(`${pointo | shirtY.length}`);
   }
      libswscaleq = new Map([[`${backgroundi}`, parseInt(`${auto_l0}`) - 3]]);
       let imagesL = String.fromCharCode(122,95,54,52,95,102,114,97,109,101,108,101,115,115,0);
       let filterg: Map<any, any> = new Map([[String.fromCharCode(97,95,56,56,95,105,102,97,109,115,103,0),String.fromCharCode(117,95,49,54,95,112,99,109,98,0)], [String.fromCharCode(114,101,99,101,105,118,101,114,115,95,121,95,56,0),String.fromCharCode(100,95,53,55,95,109,105,110,111,114,0)]]);
       let notificationfillemptyX = 0.0;
       let sheet2 = 1.0;
         notificationfillemptyX /= Math.max(2, parseInt(`${notificationfillemptyX}`) | 3);
       let iconmorei = String.fromCharCode(105,95,54,50,95,109,112,108,97,110,101,0);
         iconmorei += `${(imagesL == String.fromCharCode(101,0) ? imagesL.length : parseInt(`${notificationfillemptyX}`))}`;
          let libsentryL = String.fromCharCode(109,101,115,115,97,103,101,95,104,95,51,51,0);
          let back0 = String.fromCharCode(120,95,49,55,95,116,114,117,101,0);
         imagesL += `${(String.fromCharCode(72,0) == iconmorei ? parseInt(`${sheet2}`) : iconmorei.length)}`;
         libsentryL += `${back0.length}`;
         back0 = `${2 * libsentryL.length}`;
         filterg = new Map([[`${notificationfillemptyX}`, 2 & iconmorei.length]]);
      for (let p = 0; p < 3; p++) {
         iconmorei = "3";
      }
      let materialx = 5779072 <= filterg.size;
      do {
         filterg.set(`${imagesL}`, (imagesL == String.fromCharCode(75,0) ? imagesL.length : filterg.size));
         if (materialx) {
            break;
         }
      } while (materialx && (imagesL.startsWith(`${filterg.size}`)));
          let collectionq = 1;
         iconmorei = `${(imagesL == String.fromCharCode(80,0) ? filterg.size : imagesL.length)}`;
         collectionq |= collectionq;
      backgroundi = (zoomM.length / (Math.max(10, libswscaleq.size))) <= 71;
   while (4 < changek.length || 4 < middlez.length) {
      changek += `${whatsapps.length ^ 1}`;
      break;
   }
       let halffieldimageM = 4;
      let promotionW = 8978024 <= halffieldimageM;
      do {
          let videocommonU: Array<any> = [154, 147];
          let orientationB = false;
          let untickB: Array<any> = [818, 36, 657];
          let turn8: Array<any> = [939, 525];
          let mini5 = 2.0;
         halffieldimageM -= 2;
         videocommonU.push(2);
         orientationB = videocommonU.length > 64;
         untickB = [untickB.length % (Math.max(1, 4))];
         turn8 = [videocommonU.length * 1];
         mini5 -= parseFloat(`${videocommonU.length}`);
         if (promotionW) {
            break;
         }
      } while (promotionW && (1 >= (halffieldimageM & halffieldimageM)));
      while ((halffieldimageM & 2) > 4) {
         halffieldimageM %= Math.max(2, 1);
         break;
      }
      for (let x = 0; x < 1; x++) {
          let expiredF = true;
          let casting5 = String.fromCharCode(100,121,110,108,111,99,107,95,105,95,49,53,0);
          let videocommonb: Array<any> = [120, 507, 961];
          let typesJ = 0;
         halffieldimageM *= (videocommonb.length & (expiredF ? 2 : 3));
         expiredF = 47 < typesJ && String.fromCharCode(113,0) == casting5;
         casting5 += `${1 ^ casting5.length}`;
         videocommonb.push((String.fromCharCode(88,0) == casting5 ? casting5.length : typesJ));
      }
      shirtY = `${bingd.length >> (Math.min(Math.abs(1), 1))}`;
   for (let c = 0; c < 1; c++) {
       let mail5 = 3.0;
       let materialv = String.fromCharCode(109,95,56,57,95,115,111,102,116,119,97,114,101,0);
       let success4: Array<any> = [641, 75, 180];
      for (let s = 0; s < 2; s++) {
          let smallbrightness1 = String.fromCharCode(105,95,55,56,95,100,109,105,120,0);
         materialv = `${parseInt(`${mail5}`) * success4.length}`;
         smallbrightness1 += "1";
      }
         materialv += `${parseInt(`${mail5}`) % (Math.max(materialv.length, 3))}`;
      while (success4.includes(mail5)) {
         success4.push(success4.length);
         break;
      }
         materialv = `${success4.length / 3}`;
         materialv += `${(String.fromCharCode(115,0) == materialv ? parseInt(`${mail5}`) : materialv.length)}`;
         success4 = [success4.length ^ 2];
      let chinasamey = success4.length <= 9739353;
      do {
         success4.push((materialv == String.fromCharCode(73,0) ? parseInt(`${mail5}`) : materialv.length));
         if (chinasamey) {
            break;
         }
      } while (chinasamey && (materialv.includes(`${success4.length}`)));
      if (success4.length > materialv.length) {
         materialv += `${materialv.length | parseInt(`${mail5}`)}`;
      }
      let exampleimagem = 9701908 <= materialv.length;
      do {
          let awayteamfield2 = false;
          let mathM = String.fromCharCode(114,95,54,95,115,117,98,109,111,100,101,108,115,0);
          let phoneshareW = String.fromCharCode(98,95,52,51,95,97,112,112,114,111,120,105,109,97,116,101,0);
         materialv = `${mathM.length}`;
         awayteamfield2 = !awayteamfield2;
         mathM += `${((awayteamfield2 ? 2 : 2))}`;
         phoneshareW = `${3 % (Math.max(8, phoneshareW.length))}`;
         if (exampleimagem) {
            break;
         }
      } while (exampleimagem && (2 > (materialv.length % (Math.max(2, success4.length))) || (success4.length % (Math.max(9, materialv.length))) > 2));
      changek += `${materialv.length >> (Math.min(Math.abs(2), 4))}`;
   }
   for (let e = 0; e < 2; e++) {
      pointo &= parseInt(`${auto_l0}`) >> (Math.min(3, Math.abs(1)));
   }
   for (let k = 0; k < 2; k++) {
       let vipsport2: Array<any> = [String.fromCharCode(116,114,120,116,95,48,95,57,57,0), String.fromCharCode(114,95,50,50,95,100,111,120,121,103,101,110,0)];
       let z_centerW = String.fromCharCode(112,95,54,50,95,112,108,111,116,0);
          let textinput8: Array<any> = [435, 242, 65];
          let iconpointscorec: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,107,110,111,119,110,0),String.fromCharCode(110,111,116,105,102,105,101,115,95,57,95,51,49,0)], [String.fromCharCode(105,95,52,56,95,112,114,111,114,101,115,100,97,116,97,0),String.fromCharCode(113,116,97,98,108,101,115,95,105,95,52,56,0)], [String.fromCharCode(116,101,115,101,100,103,101,95,115,95,54,55,0),String.fromCharCode(101,95,56,55,95,100,105,115,112,108,97,121,101,100,0)]]);
          let tail9: Map<any, any> = new Map([[String.fromCharCode(103,101,116,120,115,115,101,95,116,95,50,57,0),992], [String.fromCharCode(114,103,98,105,95,105,95,55,50,0),760], [String.fromCharCode(114,95,51,52,95,109,98,114,116,104,114,101,97,100,0),641]]);
         z_centerW = `${iconpointscorec.size}`;
         textinput8 = [textinput8.length];
         iconpointscorec = new Map([[`${tail9.size}`, textinput8.length]]);
         tail9 = new Map([[`${tail9.size}`, 2]]);
      let user1 = z_centerW.length <= 7995995;
      do {
          let matchinactiveG: Array<any> = [254, 317, 409];
          let typesg = String.fromCharCode(121,95,56,57,95,98,97,116,99,104,101,100,0);
          let iconwatchnowU = String.fromCharCode(109,95,50,49,95,119,109,118,100,115,112,0);
         z_centerW = `${vipsport2.length}`;
         matchinactiveG = [matchinactiveG.length];
         typesg = `${iconwatchnowU.length + 3}`;
         iconwatchnowU = `${2 + iconwatchnowU.length}`;
         if (user1) {
            break;
         }
      } while ((z_centerW.length <= 5) && user1);
          let teamB = String.fromCharCode(99,111,100,101,119,111,114,100,95,100,95,54,56,0);
         vipsport2 = [vipsport2.length];
         teamB = `${(String.fromCharCode(119,0) == teamB ? teamB.length : teamB.length)}`;
          let iconedits = String.fromCharCode(97,100,103,114,111,117,112,95,103,95,51,50,0);
         vipsport2.push(1);
         iconedits += `${iconedits.length << (Math.min(5, iconedits.length))}`;
       let yellows: Array<any> = [758, 766];
       let gradleX: Array<any> = [992, 454, 700];
          let smallorangemanQ = String.fromCharCode(117,110,100,101,114,114,117,110,95,104,95,55,57,0);
          let crownG = 0.0;
         yellows.push(3 | yellows.length);
         smallorangemanQ += `${(smallorangemanQ == String.fromCharCode(77,0) ? parseInt(`${crownG}`) : smallorangemanQ.length)}`;
         crownG += parseFloat(`${smallorangemanQ.length * parseInt(`${crownG}`)}`);
      zoomM = `${vipsport2.length ^ 2}`;
   }
   let valuesV = zoomM == String.fromCharCode(98,115,52,101,109,103,106,0);
   do {
       let utilsz = String.fromCharCode(100,95,49,52,95,116,114,97,112,0);
       let internetk = 2.0;
       let successx = String.fromCharCode(114,101,108,97,121,101,100,95,107,95,49,49,0);
       let transferY = String.fromCharCode(116,105,116,108,101,95,102,95,57,51,0);
      if (successx.includes(utilsz)) {
         utilsz += `${transferY.length ^ 3}`;
      }
          let const_ng = String.fromCharCode(118,95,49,95,112,114,111,103,114,97,109,115,0);
          let lineK = 3.0;
         transferY = `${successx.length}`;
         const_ng = `${1 >> (Math.min(1, const_ng.length))}`;
         lineK -= parseFloat(`${1 - parseInt(`${lineK}`)}`);
      let static__G = utilsz == String.fromCharCode(106,57,56,100,55,106,0);
      do {
         utilsz = `${(String.fromCharCode(50,0) == transferY ? transferY.length : successx.length)}`;
         if (static__G) {
            break;
         }
      } while ((!utilsz.includes(`${internetk}`)) && static__G);
      if (3.79 < internetk) {
          let traminij = String.fromCharCode(99,111,109,109,111,110,95,121,95,50,52,0);
          let userJ = 3.0;
          let tooltips_ = 3.0;
         internetk += (parseFloat(`${transferY == String.fromCharCode(116,0) ? transferY.length : traminij.length}`));
         traminij += `${parseInt(`${tooltips_}`) - 3}`;
         userJ *= 2 * parseInt(`${tooltips_}`);
      }
         successx += `${(utilsz == String.fromCharCode(77,0) ? transferY.length : utilsz.length)}`;
      let views7 = String.fromCharCode(119,110,104,122,112,0) == transferY;
      do {
         transferY = `${(String.fromCharCode(107,0) == successx ? successx.length : utilsz.length)}`;
         if (views7) {
            break;
         }
      } while ((utilsz != transferY) && views7);
      for (let x = 0; x < 3; x++) {
          let theme4 = 4.0;
          let plusf = String.fromCharCode(108,95,51,48,95,116,104,101,109,101,100,0);
          let whatsappg = 1.0;
         transferY += `${(String.fromCharCode(83,0) == utilsz ? parseInt(`${whatsappg}`) : utilsz.length)}`;
         theme4 -= (parseFloat(`${plusf == String.fromCharCode(112,0) ? plusf.length : parseInt(`${theme4}`)}`));
         whatsappg *= parseFloat(`${plusf.length - parseInt(`${theme4}`)}`);
      }
          let basey = 5;
          let klevin7 = 1.0;
         transferY = `${transferY.length}`;
         basey += 1 - basey;
         klevin7 += parseFloat(`${basey}`);
      while ((5 / (Math.max(4, successx.length))) > 3 && 5 > (successx.length - parseInt(`${internetk}`))) {
         successx = `${transferY.length % (Math.max(1, 10))}`;
         break;
      }
       let gifgoalbgQ = String.fromCharCode(100,111,108,108,97,114,95,57,95,49,53,0);
       let thumbnailG = String.fromCharCode(97,103,97,105,110,115,116,95,98,95,55,50,0);
      if (successx != String.fromCharCode(122,0)) {
         gifgoalbgQ += `${3 ^ parseInt(`${internetk}`)}`;
      }
         transferY += `${utilsz.length}`;
      zoomM += `${((commonH ? 1 : 4))}`;
      if (valuesV) {
         break;
      }
   } while ((1 >= (4 + libswscaleq.size)) && valuesV);
   while (bingd.length <= 1) {
      backgroundi = 20.58 >= auto_l0;
      break;
   }
   if (middlez.length <= 5) {
      bingd += `${whatsapps.length}`;
   }
   if (bingd.length == 3) {
       let macauU = String.fromCharCode(115,97,116,105,115,102,105,101,100,95,54,95,50,53,0);
       let footballZ = String.fromCharCode(97,108,103,95,105,95,51,56,0);
       let modal3: Map<any, any> = new Map([[String.fromCharCode(107,95,57,56,95,100,101,98,117,103,103,101,114,0),103], [String.fromCharCode(117,95,52,95,102,105,108,101,112,97,116,104,0),860], [String.fromCharCode(98,105,116,97,108,108,111,99,95,112,95,55,55,0),989]]);
          let libfollyu = String.fromCharCode(116,109,105,120,95,115,95,49,55,0);
          let nativeV = String.fromCharCode(118,95,53,57,95,102,99,111,100,101,0);
         footballZ = `${modal3.size ^ 3}`;
         libfollyu = "1";
         nativeV = `${libfollyu.length / 1}`;
         macauU = `${3 & modal3.size}`;
         macauU += `${1 << (Math.min(3, footballZ.length))}`;
       let armvaO = String.fromCharCode(109,101,108,116,95,98,95,54,54,0);
         footballZ = `${armvaO.length}`;
      if (4 == (armvaO.length ^ modal3.size) && 4 == (modal3.size ^ armvaO.length)) {
         armvaO += "1";
      }
         modal3.set(footballZ, macauU.length + 2);
      for (let g = 0; g < 1; g++) {
          let star3 = 5.0;
          let acceptedS = String.fromCharCode(112,101,114,105,111,100,95,55,95,54,48,0);
          let forwardD = false;
         armvaO = `${(String.fromCharCode(55,0) == acceptedS ? parseInt(`${star3}`) : acceptedS.length)}`;
         star3 += ((forwardD ? 3 : 1) + 3);
      }
      let sliderj = footballZ == String.fromCharCode(107,110,99,0);
      do {
         footballZ += `${3 >> (Math.min(1, armvaO.length))}`;
         if (sliderj) {
            break;
         }
      } while (sliderj && (3 < (footballZ.length % 2)));
      auto_l0 += parseFloat(`${2}`);
   }
      zoomM = `${shirtY.length}`;
   while (!changek.endsWith(whatsapps)) {
       let clubg = 2;
       let darkc: Map<any, any> = new Map([[String.fromCharCode(109,112,105,98,110,95,118,95,53,56,0),String.fromCharCode(105,95,52,57,95,111,116,111,115,0)], [String.fromCharCode(103,95,51,51,95,116,109,112,111,0),String.fromCharCode(98,117,115,121,95,56,95,50,55,0)], [String.fromCharCode(115,117,109,100,95,121,95,54,0),String.fromCharCode(97,116,116,114,115,95,98,95,56,0)]]);
       let greenJ = true;
       let dangerL = 2.0;
      for (let g = 0; g < 2; g++) {
         dangerL *= parseFloat(`${1}`);
      }
      while (greenJ || (3.83 * dangerL) > 5.47) {
         dangerL -= parseFloat(`${clubg}`);
         break;
      }
         greenJ = clubg <= 45;
       let mbsplashS = 1.0;
       let colorsY: Array<any> = [207, 141];
          let privilegeM = 2.0;
          let penaltyshootnogoale = String.fromCharCode(109,105,112,115,100,115,112,95,103,95,54,52,0);
         colorsY.push(darkc.size);
         privilegeM *= parseFloat(`${penaltyshootnogoale.length - 1}`);
         penaltyshootnogoale += `${parseInt(`${privilegeM}`)}`;
          let matchc = false;
          let basketballC = String.fromCharCode(104,97,98,108,101,95,110,95,57,55,0);
          let predictionactiveB = String.fromCharCode(117,95,51,95,115,116,114,105,100,105,110,103,0);
         darkc.set(`${predictionactiveB}`, predictionactiveB.length);
         matchc = (62 > ((!matchc ? 62 : basketballC.length) + basketballC.length));
         clubg += 3;
         colorsY = [parseInt(`${mbsplashS}`) / (Math.max(7, clubg))];
         darkc = new Map([[`${colorsY.length}`, 3]]);
      if (1 >= (clubg ^ 4) || greenJ) {
         clubg &= colorsY.length + 1;
      }
      if (5.2 <= (mbsplashS * clubg)) {
         mbsplashS -= darkc.size;
      }
      changek += `${pointo + 2}`;
      break;
   }
   while (!whatsapps.includes(`${libswscaleq.size}`)) {
      whatsapps += `${(middlez == String.fromCharCode(104,0) ? middlez.length : shirtY.length)}`;
      break;
   }
   for (let s = 0; s < 1; s++) {
      whatsapps += `${whatsapps.length}`;
   }
   while (1.30 < (auto_l0 + parseFloat(`${libswscaleq.size}`)) || (libswscaleq.size + parseInt(`${auto_l0}`)) < 5) {
       let orientationA = 3.0;
       let basketballplayerplaceholderg = String.fromCharCode(102,116,118,100,111,99,95,50,95,49,53,0);
       let l_counth: Array<any> = [427, 903, 859];
       let baseline0 = 2.0;
       let greyarrowup3: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,105,102,121,95,99,95,49,0),779], [String.fromCharCode(107,95,49,95,99,108,117,115,116,101,114,115,0),76], [String.fromCharCode(103,95,53,50,95,112,97,114,115,101,100,0),598]]);
         l_counth.push(basketballplayerplaceholderg.length & parseInt(`${orientationA}`));
       let build_: Array<any> = [855, 626, 681];
      while (l_counth.length >= basketballplayerplaceholderg.length) {
         l_counth = [l_counth.length];
         break;
      }
      while (3 == (basketballplayerplaceholderg.length >> (Math.min(Math.abs(3), 5))) || (3 >> (Math.min(2, basketballplayerplaceholderg.length))) == 3) {
         basketballplayerplaceholderg = "1";
         break;
      }
         basketballplayerplaceholderg = "1";
      let type_pM = greyarrowup3.size <= 4992619;
      do {
         greyarrowup3.set(`${baseline0}`, build_.length - 1);
         if (type_pM) {
            break;
         }
      } while ((!basketballplayerplaceholderg.endsWith(`${greyarrowup3.size}`)) && type_pM);
       let neoni: Map<any, any> = new Map([[String.fromCharCode(98,95,52,49,95,110,97,109,101,115,101,114,118,101,114,115,0),174], [String.fromCharCode(103,95,52,53,95,117,110,109,117,116,101,0),643], [String.fromCharCode(114,101,112,108,97,99,105,110,103,95,122,95,49,50,0),177]]);
       let defaultlogol = String.fromCharCode(103,114,97,121,95,98,95,54,0);
       let nativeexl = String.fromCharCode(115,95,49,95,106,115,105,109,100,100,99,116,0);
       let previews = 4.0;
          let selectC: Array<any> = [776, 980];
          let dependencyR = String.fromCharCode(117,110,99,108,97,109,112,101,100,95,52,95,49,48,48,0);
          let exampleimageX = 0.0;
         basketballplayerplaceholderg += `${3 ^ parseInt(`${orientationA}`)}`;
         selectC.push(parseInt(`${exampleimageX}`));
         dependencyR = `${parseInt(`${exampleimageX}`)}`;
      while (nativeexl == String.fromCharCode(83,0)) {
         defaultlogol = "1";
         break;
      }
      let dicev = 7787739 >= defaultlogol.length;
      do {
         defaultlogol = "3";
         if (dicev) {
            break;
         }
      } while ((5 < (defaultlogol.length * neoni.size) && 5 < (defaultlogol.length * neoni.size)) && dicev);
      while (baseline0 < 1.95) {
         baseline0 /= Math.max(1, 4);
         break;
      }
      while (Array.from(neoni.values()).includes(build_.length)) {
         build_.push(parseInt(`${previews}`));
         break;
      }
          let mbjscommon8 = String.fromCharCode(119,97,118,101,95,50,95,49,0);
          let predictionactiveA: Array<any> = [731, 498];
          let mapbuffert = true;
         greyarrowup3 = new Map([[defaultlogol, defaultlogol.length << (Math.min(Math.abs(2), 2))]]);
         mbjscommon8 += `${mbjscommon8.length}`;
         predictionactiveA = [((mapbuffert ? 4 : 2) & mbjscommon8.length)];
      libswscaleq = new Map([[`${baseline0}`, parseInt(`${auto_l0}`)]]);
      break;
   }
   if (3 <= (whatsapps.length - 3) && (whatsapps.length - 3) <= 5) {
      pointo &= middlez.length;
   }
   for (let m = 0; m < 3; m++) {
      shirtY = `${(middlez == String.fromCharCode(70,0) ? middlez.length : bingd.length)}`;
   }
      middlez += `${((backgroundi ? 5 : 3))}`;
   let combinedR = commonH ? !commonH : commonH;
   do {
      commonH = bingd.length == 44;
      if (combinedR) {
         break;
      }
   } while (combinedR && (middlez.includes(`${commonH}`)));
      whatsapps += `${pointo - 3}`;
   let libjsinspectorK = pointo <= 6237101;
   do {
      pointo += libswscaleq.size << (Math.min(Math.abs(2), 2));
      if (libjsinspectorK) {
         break;
      }
   } while ((4 == (5 ^ pointo)) && libjsinspectorK);

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
    fontFamily: 'Archivo-Regular',
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
