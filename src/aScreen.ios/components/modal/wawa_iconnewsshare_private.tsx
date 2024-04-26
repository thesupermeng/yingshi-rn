import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector } from "@hooks/wawa_root";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/wawa_related";
import { updateUserAuth } from "@redux/actions/wawa_loginsuccess";
import { wawaEvent } from "@api";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";


interface wawaAwayShow {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: wawaAwayShow) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<wawaPhoneControls>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
       let chatroombackgroundy = 0.0;
    let sentrym = 4.0;
    let favicone = 3.0;
    let distp = String.fromCharCode(110,95,50,48,95,118,111,114,98,105,115,99,111,109,109,101,110,116,0);
    let resultB = 4;
    let singaporeH = 4.0;
    let basketballicons = 2.0;
    let privatechatbgo = 5.0;
    let previewr = String.fromCharCode(116,117,114,110,95,99,95,52,49,0);
    let trashu: Array<any> = [208, 900];
    let googlea = String.fromCharCode(102,116,118,100,111,99,95,118,95,56,53,0);
    let iconsaveimageC = String.fromCharCode(98,101,103,105,110,110,105,110,103,95,49,95,49,53,0);
    let smallbrightnessc = false;
   for (let n = 0; n < 3; n++) {
      distp = `${previewr.length % 3}`;
   }
   let rootG = previewr.length >= 9454388;
   do {
       let selectedG = String.fromCharCode(107,105,110,103,95,98,95,53,57,0);
       let modelE: Array<any> = [String.fromCharCode(114,101,115,111,108,118,101,114,95,97,95,53,52,0), String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,121,95,53,50,0), String.fromCharCode(105,95,57,51,95,97,97,114,99,104,0)];
       let libglogW: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,95,48,95,49,48,48,0),522], [String.fromCharCode(118,95,57,56,95,118,112,97,105,110,116,101,114,0),337]]);
       let customN = 2;
         libglogW = new Map([[`${libglogW.size}`, libglogW.size ^ selectedG.length]]);
      if ((modelE.length / 3) <= 2) {
         modelE = [3 * selectedG.length];
      }
          let changeI = String.fromCharCode(120,95,52,48,95,99,111,99,111,115,100,120,0);
          let traminiD = String.fromCharCode(115,105,103,116,101,114,109,95,112,95,57,54,0);
          let iconclosewhitebgf = 5.0;
         libglogW = new Map([[`${libglogW.size}`, selectedG.length]]);
         changeI = `${traminiD.length}`;
         traminiD += `${traminiD.length}`;
         iconclosewhitebgf += parseFloat(`${3}`);
      if (libglogW.size > 4) {
          let libjsinspector2: Map<any, any> = new Map([[String.fromCharCode(109,112,111,110,95,99,95,49,50,0),true ], [String.fromCharCode(117,95,54,51,95,117,115,114,115,99,116,112,0),false ], [String.fromCharCode(118,97,114,105,97,116,105,111,110,95,98,95,53,0),false ]]);
          let iconeditr = 2;
          let analytich = 2.0;
          let stepb = String.fromCharCode(106,95,52,50,95,100,101,118,105,99,101,0);
          let matchz: Array<any> = [39, 6, 923];
         libglogW.set(`${customN}`, 2 - customN);
         libjsinspector2 = new Map([[`${libjsinspector2.size}`, libjsinspector2.size]]);
         iconeditr /= Math.max((String.fromCharCode(55,0) == stepb ? matchz.length : stepb.length), 2);
         analytich /= Math.max(4, parseInt(`${analytich}`));
         matchz.push(iconeditr ^ 2);
      }
      for (let x = 0; x < 3; x++) {
         libglogW.set(`${modelE.length}`, modelE.length);
      }
          let iconwatchX: Array<any> = [138, 296];
         libglogW.set(`${modelE.length}`, 1 << (Math.min(1, modelE.length)));
         iconwatchX.push(iconwatchX.length);
         customN >>= Math.min(Math.abs(modelE.length % 3), 4);
         customN >>= Math.min(Math.abs(libglogW.size | modelE.length), 2);
       let shootz = String.fromCharCode(117,95,49,52,95,109,117,108,115,117,98,0);
         shootz += `${selectedG.length / 2}`;
         modelE.push(selectedG.length);
         customN += 2 / (Math.max(7, modelE.length));
      previewr += `${parseInt(`${privatechatbgo}`)}`;
      if (rootG) {
         break;
      }
   } while (rootG && (3 <= (1 + previewr.length)));
   while (2 <= (1 * previewr.length) && 1.7 <= (3.94 + privatechatbgo)) {
      previewr += `${parseInt(`${chatroombackgroundy}`)}`;
      break;
   }
   let iconpipexpandU = privatechatbgo >= 7177762.0;
   do {
      privatechatbgo -= (String.fromCharCode(104,0) == previewr ? resultB : previewr.length);
      if (iconpipexpandU) {
         break;
      }
   } while (iconpipexpandU && (2.34 > (1.3 - basketballicons) && (privatechatbgo * 1.3) > 2.80));
   let b_imagej = 5681248.0 <= basketballicons;
   do {
      basketballicons -= parseInt(`${sentrym}`) & trashu.length;
      if (b_imagej) {
         break;
      }
   } while ((4.74 <= (basketballicons - 5.7)) && b_imagej);
      favicone -= parseFloat(`${trashu.length}`);
      previewr += `${parseInt(`${privatechatbgo}`) + trashu.length}`;
   if (1.13 <= (singaporeH + 3.72) && 3.72 <= (singaporeH + parseFloat(`${resultB}`))) {
      resultB >>= Math.min(Math.abs(parseInt(`${privatechatbgo}`)), 2);
   }
      favicone /= Math.max(parseFloat(`${1}`), 2);
   if (sentrym == 5.85) {
      sentrym += trashu.length;
   }
   while (basketballicons == 2.24) {
       let whistleorangeH = 0.0;
       let yellowredcard9 = String.fromCharCode(119,95,53,54,95,104,97,118,101,0);
          let iconarrowleftv = true;
         whistleorangeH /= Math.max(((iconarrowleftv ? 3 : 2) % 3), 5);
      let tooltipsK = yellowredcard9 == String.fromCharCode(114,121,107,118,101,0);
      do {
          let zhengpianJ = String.fromCharCode(111,95,57,50,95,110,117,108,108,0);
         yellowredcard9 = `${zhengpianJ.length / (Math.max(1, 10))}`;
         if (tooltipsK) {
            break;
         }
      } while ((5 <= (parseInt(`${whistleorangeH}`) * yellowredcard9.length) || 5.20 <= (whistleorangeH * yellowredcard9.length)) && tooltipsK);
      for (let e = 0; e < 1; e++) {
         whistleorangeH += (String.fromCharCode(122,0) == yellowredcard9 ? yellowredcard9.length : parseInt(`${whistleorangeH}`));
      }
      while ((yellowredcard9.length / (Math.max(1, 2))) < 2) {
         whistleorangeH *= parseInt(`${whistleorangeH}`);
         break;
      }
      if (parseInt(`${whistleorangeH}`) < yellowredcard9.length) {
         yellowredcard9 = "1";
      }
         yellowredcard9 += `${parseInt(`${whistleorangeH}`)}`;
      basketballicons /= Math.max((String.fromCharCode(108,0) == previewr ? parseInt(`${basketballicons}`) : previewr.length), 4);
      break;
   }
   while (favicone >= 3.31) {
      privatechatbgo /= Math.max(1, resultB / 1);
      break;
   }
   while ((trashu.length * privatechatbgo) <= 1.57 || 1.57 <= (privatechatbgo * trashu.length)) {
      privatechatbgo /= Math.max(2 ^ parseInt(`${singaporeH}`), 5);
      break;
   }
      previewr = "3";

        setReferrer('');

   if (googlea.length >= parseInt(`${privatechatbgo}`)) {
      googlea = `${3 * trashu.length}`;
   }
      iconsaveimageC += `${distp.length}`;
      sentrym -= iconsaveimageC.length >> (Math.min(2, Math.abs(parseInt(`${privatechatbgo}`))));
      previewr = `${trashu.length | previewr.length}`;
       let libreanimated_ = String.fromCharCode(120,95,51,55,95,117,112,100,97,116,101,0);
      let chatbotphotoq = libreanimated_.length >= 8477902;
      do {
         libreanimated_ += `${libreanimated_.length}`;
         if (chatbotphotoq) {
            break;
         }
      } while (chatbotphotoq && (libreanimated_.length >= libreanimated_.length));
         libreanimated_ += `${libreanimated_.length}`;
      for (let f = 0; f < 1; f++) {
          let schedulerh: Array<any> = [306, 138, 511];
          let awayc = String.fromCharCode(112,97,115,115,112,111,114,116,95,55,95,54,52,0);
          let downloadedR = String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,99,95,54,0);
          let selectionn = 2;
          let iconnointerneti = 4.0;
         libreanimated_ = `${parseInt(`${iconnointerneti}`) + 3}`;
         schedulerh.push((awayc == String.fromCharCode(116,0) ? awayc.length : schedulerh.length));
         downloadedR = `${(downloadedR == String.fromCharCode(114,0) ? schedulerh.length : downloadedR.length)}`;
         selectionn >>= Math.min(Math.abs(2), 3);
         iconnointerneti /= Math.max(downloadedR.length, 5);
      }
      chatroombackgroundy += (distp == String.fromCharCode(72,0) ? parseInt(`${sentrym}`) : distp.length);
      trashu.push(1);
   while ((singaporeH * favicone) <= 3.10 && 3.10 <= (singaporeH * favicone)) {
      singaporeH *= parseFloat(`${distp.length}`);
      break;
   }
      favicone /= Math.max(parseFloat(`${iconsaveimageC.length}`), 5);
      previewr = `${resultB}`;
   if ((chatroombackgroundy - favicone) >= 3.69) {
      chatroombackgroundy -= 1;
   }
       let indicatorF = false;
       let controlsJ: Map<any, any> = new Map([[String.fromCharCode(117,116,102,95,112,95,51,52,0),408], [String.fromCharCode(105,95,50,56,95,118,97,108,105,100,97,116,111,114,0),528]]);
       let clearX = String.fromCharCode(112,114,101,102,102,101,114,101,100,95,107,95,50,48,0);
       let gnewsF = 1;
       let taill = 4;
      while (indicatorF) {
          let list7 = String.fromCharCode(98,95,54,50,95,112,108,97,99,101,109,97,114,107,115,0);
          let headerE = String.fromCharCode(102,95,49,50,95,109,111,100,101,115,0);
          let basketballhometeamO: Map<any, any> = new Map([[String.fromCharCode(116,95,52,53,95,114,97,98,98,105,116,0),612], [String.fromCharCode(116,105,108,101,104,100,114,95,56,95,57,51,0),835], [String.fromCharCode(115,110,110,105,100,95,103,95,50,55,0),644]]);
         indicatorF = gnewsF == 7;
         list7 += `${headerE.length}`;
         headerE += `${(String.fromCharCode(88,0) == list7 ? list7.length : basketballhometeamO.size)}`;
         basketballhometeamO.set(list7, list7.length);
         break;
      }
          let long_kjx: Map<any, any> = new Map([[String.fromCharCode(102,95,57,48,95,109,101,115,115,97,103,101,0),414], [String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,51,95,50,0),309]]);
         gnewsF %= Math.max(2, controlsJ.size);
         long_kjx.set(`${long_kjx.size}`, long_kjx.size);
         indicatorF = (gnewsF - controlsJ.size) < 61;
      while ((taill ^ 1) <= 5) {
         taill |= 2 / (Math.max(5, gnewsF));
         break;
      }
       let morea = 1;
       let control6 = 5;
      for (let k = 0; k < 1; k++) {
         control6 %= Math.max(2, clearX.length);
      }
      while (gnewsF == morea) {
          let canvasu = String.fromCharCode(105,110,116,101,103,114,97,108,95,55,95,53,0);
          let settingsM = 2.0;
          let resultr = String.fromCharCode(113,95,55,55,95,109,108,112,100,115,112,0);
          let emojiheartz: Array<any> = [236, 53];
         morea |= emojiheartz.length / 1;
         canvasu = `${resultr.length ^ canvasu.length}`;
         settingsM += canvasu.length;
         resultr = `${parseInt(`${settingsM}`)}`;
         emojiheartz = [2];
         break;
      }
          let catalogD = String.fromCharCode(100,114,97,119,105,110,103,95,99,95,51,56,0);
          let next9 = String.fromCharCode(110,95,55,51,95,115,121,110,99,119,111,114,100,115,0);
          let iconeyeX = String.fromCharCode(116,95,50,56,95,98,101,116,104,115,111,102,116,118,105,100,101,111,0);
         gnewsF ^= 2;
         catalogD = `${3 - next9.length}`;
         next9 += `${1 / (Math.max(7, catalogD.length))}`;
         iconeyeX = `${(String.fromCharCode(65,0) == next9 ? catalogD.length : next9.length)}`;
      trashu = [resultB];
   while ((singaporeH + 4.54) < 2.36) {
      distp = `${parseInt(`${favicone}`)}`;
      break;
   }
       let headeri = String.fromCharCode(100,101,99,98,110,95,51,95,55,57,0);
         headeri = `${headeri.length + headeri.length}`;
         headeri = `${headeri.length}`;
      let streaming_ = headeri.length >= 8819871;
      do {
         headeri += `${headeri.length}`;
         if (streaming_) {
            break;
         }
      } while ((headeri != headeri) && streaming_);
      trashu.push(resultB);
   for (let z = 0; z < 3; z++) {
      googlea = "3";
   }
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let resulto: Array<any> = [String.fromCharCode(115,105,100,120,95,122,95,56,53,0), String.fromCharCode(97,110,97,108,121,122,101,95,111,95,52,49,0)];
    let libzeusw = 0.0;
    let vietnams = 0.0;
    let interstitialz = 5.0;
    let liveshare8: Map<any, any> = new Map([[String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,97,95,53,57,0),781], [String.fromCharCode(97,118,102,114,97,109,101,95,53,95,51,0),549]]);
    let traminio: Array<any> = [397, 400];
    let commentr = 1.0;
    let playercommonF = String.fromCharCode(121,95,52,55,95,115,116,114,105,100,101,97,98,108,101,0);
    let membershipW = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,53,95,55,53,0);
    let helper5: Map<any, any> = new Map([[String.fromCharCode(118,105,111,108,97,116,105,111,110,95,48,95,52,48,0),String.fromCharCode(121,95,57,53,95,101,120,105,102,0)], [String.fromCharCode(104,95,52,54,95,112,114,111,109,112,116,0),String.fromCharCode(109,95,54,50,95,97,109,114,119,98,100,97,116,97,0)], [String.fromCharCode(111,95,49,53,95,108,111,116,115,0),String.fromCharCode(104,95,57,53,95,100,100,116,115,0)]]);
    let upgradei = 4.0;
      libzeusw -= parseInt(`${vietnams}`) + 1;
      playercommonF += `${playercommonF.length << (Math.min(Math.abs(3), 3))}`;
      resulto = [liveshare8.size];
   if ((libzeusw * vietnams) <= 1.95) {
      libzeusw -= 2;
   }
      liveshare8 = new Map([[`${helper5.size}`, 1]]);
   for (let x = 0; x < 2; x++) {
       let privilege2 = String.fromCharCode(111,103,103,112,97,99,107,95,51,95,54,56,0);
       let termsJ = 4.0;
       let pushO = 4.0;
       let pauseL = String.fromCharCode(116,95,54,52,95,105,110,104,105,98,105,116,115,0);
         pauseL = "3";
         pushO -= 1 + parseInt(`${termsJ}`);
          let transferI = 4.0;
         pauseL += `${1 | privilege2.length}`;
         transferI += 2 + parseInt(`${transferI}`);
      let libreactG = termsJ >= 7052699.0;
      do {
          let smallq = String.fromCharCode(109,97,105,110,115,116,97,103,101,95,48,95,51,57,0);
          let photoa = 5.0;
          let reminderS = String.fromCharCode(103,114,97,98,98,101,114,95,117,95,52,57,0);
          let championx = String.fromCharCode(101,95,53,48,95,105,111,115,116,114,101,97,109,0);
          let reddownarrowb = 0;
         termsJ += championx.length;
         smallq += `${parseInt(`${photoa}`) & 3}`;
         photoa += parseFloat(`${3}`);
         reminderS += "3";
         championx += `${2 * parseInt(`${photoa}`)}`;
         reddownarrowb -= reminderS.length << (Math.min(3, Math.abs(parseInt(`${photoa}`))));
         if (libreactG) {
            break;
         }
      } while ((3 < (1 * privilege2.length) && (privilege2.length + parseInt(`${termsJ}`)) < 1) && libreactG);
         pauseL += `${pauseL.length}`;
      while (1 == (5 & privilege2.length) || 4 == (privilege2.length / 5)) {
          let subine: Map<any, any> = new Map([[String.fromCharCode(98,95,55,55,95,99,108,111,99,107,100,114,105,102,116,0),160], [String.fromCharCode(105,110,112,108,105,99,105,116,101,108,121,95,121,95,54,54,0),69]]);
          let buildE = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,103,95,48,0);
          let untickX: Map<any, any> = new Map([[String.fromCharCode(102,117,110,99,116,105,111,110,115,95,53,95,49,49,0),650], [String.fromCharCode(110,95,48,95,99,97,110,111,112,117,115,0),985], [String.fromCharCode(117,95,57,55,95,109,112,108,97,109,101,0),143]]);
          let libreactperfloggerjniB = 1.0;
         pushO += 1;
         subine = new Map([[`${subine.size}`, 2]]);
         buildE += `${untickX.size >> (Math.min(Math.abs(1), 4))}`;
         untickX.set(`${buildE}`, (String.fromCharCode(85,0) == buildE ? buildE.length : untickX.size));
         libreactperfloggerjniB /= Math.max(5, subine.size);
         break;
      }
      if ((pushO + 1.46) < 1.95 || 4.62 < (pushO + 1.46)) {
         termsJ -= 3 - parseInt(`${pushO}`);
      }
      for (let x = 0; x < 1; x++) {
         pauseL = `${parseInt(`${termsJ}`)}`;
      }
         termsJ /= Math.max(parseInt(`${termsJ}`) * parseInt(`${pushO}`), 1);
         pushO += parseInt(`${termsJ}`) >> (Math.min(4, Math.abs(parseInt(`${pushO}`))));
       let suggestionc = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,110,95,56,49,0);
         suggestionc += `${suggestionc.length ^ 2}`;
      interstitialz -= playercommonF.length & 2;
   }
       let movies7 = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,48,95,53,50,0);
       let dycreatorD = 2.0;
       let reddownarrowf = 3.0;
      let livenodatabgimgp = String.fromCharCode(100,52,101,57,50,109,114,118,0) == movies7;
      do {
         movies7 += `${parseInt(`${dycreatorD}`)}`;
         if (livenodatabgimgp) {
            break;
         }
      } while (((dycreatorD * 5.23) <= 5.69) && livenodatabgimgp);
      let floater0 = 5341269.0 >= dycreatorD;
      do {
          let iconqqt: Array<any> = [991, 89, 198];
          let chinah = false;
          let other3 = 5;
          let iconchatsendA = false;
         dycreatorD -= (parseFloat(`${(chinah ? 1 : 2) / (Math.max(parseInt(`${dycreatorD}`), 4))}`));
         iconqqt = [2];
         chinah = 67 > other3;
         other3 ^= other3;
         iconchatsendA = 11 == iconqqt.length;
         if (floater0) {
            break;
         }
      } while ((1.7 >= (2.99 - dycreatorD)) && floater0);
       let shrinkj = String.fromCharCode(116,114,97,105,110,95,112,95,53,52,0);
       let fullscreenminq = String.fromCharCode(119,105,112,101,95,55,95,55,55,0);
          let pathV = 1;
         shrinkj = "2";
         pathV /= Math.max(pathV, 1);
         shrinkj = `${parseInt(`${reddownarrowf}`)}`;
      while (2.91 > (reddownarrowf + 4.32) || (4 & fullscreenminq.length) > 2) {
          let long_9a = false;
          let termsL: Map<any, any> = new Map([[String.fromCharCode(111,108,100,95,50,95,56,53,0),347], [String.fromCharCode(103,95,55,50,95,100,105,115,116,112,111,105,110,116,0),321], [String.fromCharCode(101,99,100,115,97,95,106,95,56,51,0),869]]);
          let stringsM = 0;
          let reddownarrow4: Map<any, any> = new Map([[String.fromCharCode(118,95,55,52,95,110,111,105,115,101,115,0),String.fromCharCode(101,113,117,97,108,115,95,110,95,55,53,0)], [String.fromCharCode(105,110,100,101,120,105,110,103,95,49,95,49,54,0),String.fromCharCode(115,101,108,101,99,116,111,112,95,121,95,50,56,0)], [String.fromCharCode(115,105,110,113,105,95,49,95,55,54,0),String.fromCharCode(97,109,117,108,116,105,95,51,95,56,57,0)]]);
         fullscreenminq += `${fullscreenminq.length}`;
         long_9a = (reddownarrow4.size | termsL.size) == 40;
         termsL.set(`${stringsM}`, termsL.size << (Math.min(5, Math.abs(stringsM))));
         reddownarrow4 = new Map([[`${termsL.size}`, stringsM % 2]]);
         break;
      }
      for (let z = 0; z < 2; z++) {
          let suboutg: Array<any> = [635, 239];
          let arrowrightwithtailC = true;
          let hejik: Array<any> = [561, 441, 527];
          let showmorew = String.fromCharCode(107,95,52,48,95,111,112,101,110,0);
          let redgoalU: Map<any, any> = new Map([[String.fromCharCode(107,95,50,52,95,109,112,101,103,118,105,100,101,111,0),343], [String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,117,95,51,55,0),931], [String.fromCharCode(115,116,114,101,97,109,115,95,112,95,55,55,0),172]]);
         dycreatorD += parseFloat(`${3}`);
         suboutg = [3 * showmorew.length];
         arrowrightwithtailC = showmorew.length >= 48;
         hejik.push(2 / (Math.max(5, suboutg.length)));
         redgoalU.set(`${suboutg.length}`, redgoalU.size - suboutg.length);
      }
      for (let v = 0; v < 2; v++) {
          let suggestiona = 0.0;
          let libloggerf: Map<any, any> = new Map([[String.fromCharCode(102,95,56,54,95,102,114,105,101,110,100,0),663], [String.fromCharCode(108,95,51,57,95,103,101,110,100,101,114,0),575]]);
         reddownarrowf *= movies7.length;
         suggestiona /= Math.max(parseFloat(`${libloggerf.size + parseInt(`${suggestiona}`)}`), 2);
         libloggerf = new Map([[`${libloggerf.size}`, parseInt(`${suggestiona}`)]]);
      }
      let aboute = 9286029.0 <= dycreatorD;
      do {
         dycreatorD -= parseFloat(`${parseInt(`${reddownarrowf}`) & parseInt(`${dycreatorD}`)}`);
         if (aboute) {
            break;
         }
      } while (aboute && (3 < fullscreenminq.length));
      helper5 = new Map([[`${resulto.length}`, resulto.length]]);
      vietnams += parseFloat(`${parseInt(`${vietnams}`)}`);
   let watcho = 5447447 >= liveshare8.size;
   do {
      liveshare8.set(`${membershipW}`, helper5.size >> (Math.min(membershipW.length, 2)));
      if (watcho) {
         break;
      }
   } while (((traminio.length << (Math.min(Math.abs(liveshare8.size), 4))) >= 2 || 5 >= (2 << (Math.min(2, traminio.length)))) && watcho);

        if (handleClose) handleClose();

      membershipW += `${resulto.length & parseInt(`${commentr}`)}`;
      membershipW += `${parseInt(`${vietnams}`)}`;
   while (vietnams <= 2.98) {
      resulto = [playercommonF.length - parseInt(`${libzeusw}`)];
      break;
   }
   let styleK = playercommonF == String.fromCharCode(98,99,117,50,53,0);
   do {
      playercommonF = `${2 / (Math.max(5, traminio.length))}`;
      if (styleK) {
         break;
      }
   } while ((3 == (3 % (Math.max(5, traminio.length))) && (playercommonF.length % 3) == 4) && styleK);
   let whiteanimationlive0 = 9537817 >= playercommonF.length;
   do {
       let network6 = false;
       let select3 = String.fromCharCode(114,95,55,57,95,99,97,108,108,111,99,0);
       let zhuboT = true;
      while (5 >= select3.length) {
         select3 += `${(2 + (network6 ? 3 : 4))}`;
         break;
      }
      while (!select3.startsWith(`${network6}`)) {
         network6 = !select3.startsWith(`${network6}`);
         break;
      }
       let orientationZ = String.fromCharCode(100,95,55,53,95,99,111,109,112,108,101,116,101,100,0);
       let contextg = String.fromCharCode(114,95,51,53,0);
      for (let t = 0; t < 3; t++) {
         orientationZ += `${orientationZ.length}`;
      }
         zhuboT = network6;
      while (select3 != orientationZ) {
         orientationZ = "3";
         break;
      }
      let previewO = zhuboT ? !zhuboT : zhuboT;
      do {
          let bggradienta: Map<any, any> = new Map([[String.fromCharCode(118,95,50,49,95,119,100,101,99,0),String.fromCharCode(111,118,97,108,95,49,95,57,55,0)], [String.fromCharCode(119,95,55,48,95,100,111,99,105,100,115,0),String.fromCharCode(113,99,97,110,95,56,95,50,51,0)], [String.fromCharCode(109,95,50,48,95,108,108,100,98,105,110,105,116,0),String.fromCharCode(109,101,103,101,100,95,119,95,53,54,0)]]);
          let securityE = 5;
          let orientationm = String.fromCharCode(98,95,55,54,95,100,101,113,117,111,116,101,0);
          let playershirtj: Map<any, any> = new Map([[String.fromCharCode(107,109,115,95,117,95,52,56,0),905], [String.fromCharCode(121,95,52,0),713]]);
          let overY = 1.0;
         zhuboT = securityE < 59 && playershirtj.size < 59;
         bggradienta = new Map([[`${overY}`, parseInt(`${overY}`) ^ 3]]);
         securityE += orientationm.length << (Math.min(Math.abs(1), 5));
         orientationm = "2";
         playershirtj.set(orientationm, (orientationm == String.fromCharCode(118,0) ? parseInt(`${overY}`) : orientationm.length));
         if (previewO) {
            break;
         }
      } while (previewO && (zhuboT || contextg.length <= 4));
          let webviewu = 0.0;
          let reminderc: Map<any, any> = new Map([[String.fromCharCode(109,95,52,54,95,102,105,110,100,110,101,97,114,109,118,0),676], [String.fromCharCode(110,111,116,104,105,110,103,95,107,95,54,50,0),630], [String.fromCharCode(99,95,49,56,95,97,99,99,101,115,115,0),601]]);
          let fasth = String.fromCharCode(115,117,112,112,114,101,115,115,101,115,95,97,95,50,0);
         network6 = !zhuboT;
         webviewu /= Math.max(reminderc.size, 4);
         reminderc.set(fasth, (fasth == String.fromCharCode(99,0) ? reminderc.size : fasth.length));
      let yellowredcardZ = select3.length >= 8192852;
      do {
         select3 += `${(String.fromCharCode(49,0) == contextg ? contextg.length : (zhuboT ? 5 : 2))}`;
         if (yellowredcardZ) {
            break;
         }
      } while (yellowredcardZ && (select3.length < 2 && 2 < orientationZ.length));
      playercommonF += `${1 / (Math.max(10, parseInt(`${commentr}`)))}`;
      if (whiteanimationlive0) {
         break;
      }
   } while (whiteanimationlive0 && (playercommonF.startsWith(`${resulto.length}`)));
      interstitialz *= liveshare8.size;
      libzeusw /= Math.max(2, 2);
       let mintegralG = 2;
      if (5 >= (mintegralG << (Math.min(Math.abs(4), 4))) && (mintegralG << (Math.min(Math.abs(mintegralG), 5))) >= 4) {
          let banner4: Array<any> = [84, 415, 433];
          let libzeusM = 3;
          let unimplementedviewJ = String.fromCharCode(112,95,51,55,95,115,119,105,122,122,108,101,0);
          let taiwant: Map<any, any> = new Map([[String.fromCharCode(98,95,54,57,95,113,105,110,100,101,120,0),String.fromCharCode(118,97,108,105,100,97,116,101,100,95,117,95,54,55,0)], [String.fromCharCode(114,95,53,49,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0),String.fromCharCode(114,101,108,97,121,115,95,119,95,53,51,0)]]);
         mintegralG %= Math.max((String.fromCharCode(122,0) == unimplementedviewJ ? unimplementedviewJ.length : libzeusM), 1);
         banner4.push(3);
         libzeusM &= banner4.length % 2;
         taiwant = new Map([[`${taiwant.size}`, taiwant.size & banner4.length]]);
      }
      for (let d = 0; d < 2; d++) {
          let details_ = String.fromCharCode(115,95,56,54,95,109,117,108,97,100,100,0);
          let defaultfootballbgl = String.fromCharCode(110,95,50,49,95,97,108,116,101,114,101,100,0);
          let stringg = 3.0;
          let predictionlossL = 0.0;
         mintegralG <<= Math.min(4, defaultfootballbgl.length);
         details_ += `${details_.length}`;
         defaultfootballbgl = "1";
         stringg -= parseFloat(`${parseInt(`${stringg}`) & 1}`);
         predictionlossL /= Math.max(4, 2);
      }
      let charth = mintegralG >= 9569998;
      do {
          let gmailS = 5;
          let icondefaultthumbnailA = false;
          let typingloadingY = String.fromCharCode(114,116,99,99,95,112,95,55,51,0);
         mintegralG %= Math.max(1, mintegralG);
         gmailS += 1 | typingloadingY.length;
         icondefaultthumbnailA = typingloadingY.length >= 97;
         if (charth) {
            break;
         }
      } while ((mintegralG == mintegralG) && charth);
      commentr /= Math.max(traminio.length % (Math.max(playercommonF.length, 5)), 4);
   let cancel8 = 5891937 >= membershipW.length;
   do {
      membershipW = `${parseInt(`${libzeusw}`) ^ 1}`;
      if (cancel8) {
         break;
      }
   } while (cancel8 && (helper5.size <= membershipW.length));

        Keyboard.dismiss();

      helper5.set(membershipW, traminio.length + membershipW.length);
   if ((playercommonF.length ^ 1) >= 5 && 2 >= (1 & playercommonF.length)) {
      playercommonF = `${resulto.length}`;
   }
   let sansC = 6991817.0 >= interstitialz;
   do {
       let adult9: Array<any> = [45, 670, 209];
       let rocketZ = String.fromCharCode(119,95,57,48,95,102,111,114,101,118,101,114,0);
       let iconmoreE = 0.0;
       let temperature1 = 0.0;
       let jnewarchdefaultsC = 2.0;
      if (3.48 <= temperature1) {
          let expandc = true;
          let graphd = String.fromCharCode(119,101,98,115,95,106,95,50,55,0);
          let colorsg = 0.0;
          let router6 = 1.0;
          let minimizeW = String.fromCharCode(105,100,99,116,120,100,99,95,57,95,50,57,0);
         temperature1 -= 3 & rocketZ.length;
         expandc = 18.18 <= colorsg;
         graphd += "2";
         colorsg /= Math.max(parseFloat(`${2 * graphd.length}`), 2);
         router6 += 2 % (Math.max(8, parseInt(`${colorsg}`)));
         minimizeW = `${minimizeW.length % 3}`;
      }
      while ((2 * jnewarchdefaultsC) <= 5.35) {
         iconmoreE -= 3;
         break;
      }
          let changeZ = 5;
          let componento = true;
          let sideU: Array<any> = [103, 584, 238];
         iconmoreE += parseInt(`${jnewarchdefaultsC}`);
         changeZ ^= 3;
         componento = sideU.length <= 19;
         sideU.push(3);
      let mbbid5 = temperature1 >= 9900419.0;
      do {
          let benefitd = String.fromCharCode(105,110,118,111,107,101,95,52,95,52,50,0);
          let upgradeX: Array<any> = [55, 153];
          let bellreminderM: Array<any> = [String.fromCharCode(113,95,54,51,95,100,101,101,112,101,114,0), String.fromCharCode(110,95,49,48,48,95,101,120,112,101,99,116,0)];
         temperature1 /= Math.max(3, 5);
         benefitd += `${benefitd.length}`;
         upgradeX = [bellreminderM.length];
         bellreminderM.push(3 + upgradeX.length);
         if (mbbid5) {
            break;
         }
      } while (mbbid5 && (temperature1 >= 2.7));
         iconmoreE /= Math.max(parseInt(`${iconmoreE}`) * 3, 5);
          let iconlogoutZ = String.fromCharCode(99,104,105,108,100,114,101,110,95,120,95,51,52,0);
         temperature1 -= 3;
         iconlogoutZ += `${3 - iconlogoutZ.length}`;
         rocketZ = "1";
         iconmoreE *= 1;
       let iconvieweru = String.fromCharCode(111,95,50,53,95,100,111,117,98,108,101,105,110,116,115,116,114,0);
       let libmapbufferjniU = String.fromCharCode(107,95,56,53,95,98,108,117,114,114,101,100,0);
       let aboutj: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,115,104,97,100,101,114,115,0),894], [String.fromCharCode(101,120,105,115,116,105,110,103,95,56,95,51,50,0),180], [String.fromCharCode(117,110,116,121,112,101,100,95,117,95,54,55,0),39]]);
       let bgvipsportf: Map<any, any> = new Map([[String.fromCharCode(115,97,108,115,97,95,116,95,49,48,48,0),false ], [String.fromCharCode(113,95,48,95,114,101,103,105,115,116,101,114,101,100,0),false ], [String.fromCharCode(98,95,57,50,95,100,121,97,100,105,99,0),false ]]);
      while (2 < (adult9.length ^ rocketZ.length) && (rocketZ.length ^ 2) < 5) {
          let playershirtZ = String.fromCharCode(115,116,97,114,114,101,100,95,50,95,53,48,0);
          let iconstar_ = 5.0;
          let orangeuparrow0 = String.fromCharCode(103,95,50,53,95,114,97,105,115,101,100,0);
          let iconnotificationnewh = String.fromCharCode(115,95,49,95,109,100,99,116,0);
         rocketZ = `${parseInt(`${jnewarchdefaultsC}`)}`;
         playershirtZ = `${3 - playershirtZ.length}`;
         iconstar_ *= parseFloat(`${parseInt(`${iconstar_}`)}`);
         orangeuparrow0 = "2";
         iconnotificationnewh += `${iconnotificationnewh.length}`;
         break;
      }
          let imagemanagerP = false;
         iconvieweru += `${3 % (Math.max(2, parseInt(`${temperature1}`)))}`;
         imagemanagerP = imagemanagerP || imagemanagerP;
      for (let o = 0; o < 2; o++) {
          let libturbomodulejsijnif = 5.0;
         rocketZ = `${adult9.length}`;
         libturbomodulejsijnif /= Math.max(5, parseFloat(`${3}`));
      }
          let middlebrightnessZ = true;
         iconvieweru += `${parseInt(`${iconmoreE}`) & 2}`;
         middlebrightnessZ = middlebrightnessZ && middlebrightnessZ;
         bgvipsportf = new Map([[`${adult9.length}`, 2 - adult9.length]]);
      interstitialz /= Math.max(helper5.size, 2);
      if (sansC) {
         break;
      }
   } while (sansC && (1.91 >= (interstitialz / (Math.max(2.62, 9)))));
      vietnams += parseFloat(`${3 + membershipW.length}`);
   let nextd = playercommonF.length >= 5031055;
   do {
       let smallA: Map<any, any> = new Map([[String.fromCharCode(110,95,51,57,95,99,111,110,116,101,120,116,0),448], [String.fromCharCode(116,117,110,110,101,108,101,100,95,111,95,57,56,0),790]]);
       let arrowselectdownh = 1.0;
       let robotoK = false;
       let main_yC = String.fromCharCode(106,95,51,49,95,100,97,116,97,115,116,111,114,101,0);
       let emojiheartT = 1;
      if (4 >= (main_yC.length & 5) || 4 >= (5 & smallA.size)) {
         main_yC = `${main_yC.length - 3}`;
      }
         main_yC = `${smallA.size * 3}`;
         robotoK = !robotoK;
      while (emojiheartT < 4) {
         emojiheartT <<= Math.min(5, Math.abs(emojiheartT / (Math.max(3, 7))));
         break;
      }
      for (let f = 0; f < 1; f++) {
         smallA = new Map([[`${robotoK}`, ((robotoK ? 2 : 5) / (Math.max(7, emojiheartT)))]]);
      }
      for (let c = 0; c < 2; c++) {
         smallA = new Map([[main_yC, main_yC.length]]);
      }
      for (let x = 0; x < 3; x++) {
         robotoK = !robotoK;
      }
       let xvod0 = 4.0;
       let configureS = 4.0;
      for (let s = 0; s < 3; s++) {
         xvod0 /= Math.max(1, parseFloat(`${parseInt(`${xvod0}`) * 1}`));
      }
      while (smallA.get(`${arrowselectdownh}`) != null) {
         arrowselectdownh += parseInt(`${xvod0}`);
         break;
      }
      while (5.35 == (4.33 - configureS) && (xvod0 - 4.33) == 3.56) {
         configureS /= Math.max(parseFloat(`${parseInt(`${arrowselectdownh}`)}`), 4);
         break;
      }
      let footballL = 6777618 <= smallA.size;
      do {
          let nalyticsM = 3;
          let forwardR = String.fromCharCode(103,95,56,48,95,112,114,101,115,101,114,118,101,0);
         smallA = new Map([[`${configureS}`, emojiheartT % 3]]);
         nalyticsM -= nalyticsM;
         forwardR = `${2 & forwardR.length}`;
         if (footballL) {
            break;
         }
      } while (footballL && (!Array.from(smallA.keys()).includes(`${emojiheartT}`)));
          let comment4: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,99,108,105,112,112,101,100,0),893], [String.fromCharCode(108,95,50,49,95,100,101,101,112,101,114,0),553]]);
          let manifesto = String.fromCharCode(101,95,52,55,95,104,101,120,98,121,116,101,0);
          let progressV: Map<any, any> = new Map([[String.fromCharCode(103,95,52,48,0),156], [String.fromCharCode(119,95,49,52,95,100,105,115,107,0),259]]);
         xvod0 *= parseFloat(`${parseInt(`${configureS}`)}`);
         comment4 = new Map([[`${comment4.size}`, manifesto.length * 3]]);
         manifesto = `${comment4.size}`;
         progressV.set(`${manifesto}`, manifesto.length);
         configureS *= parseFloat(`${parseInt(`${xvod0}`) + emojiheartT}`);
      while (1.95 > arrowselectdownh) {
         robotoK = !robotoK;
         break;
      }
      playercommonF = `${parseInt(`${interstitialz}`) % (Math.max(7, parseInt(`${arrowselectdownh}`)))}`;
      if (nextd) {
         break;
      }
   } while ((helper5.size >= 1) && nextd);
   let notificationgrayy = traminio.length >= 7744848;
   do {
       let whistleorangeY: Map<any, any> = new Map([[String.fromCharCode(111,95,52,50,95,112,101,114,109,117,116,97,116,105,111,110,115,0),741], [String.fromCharCode(121,95,57,56,95,109,108,111,99,107,0),495]]);
       let networkn = String.fromCharCode(109,101,109,109,101,116,104,111,100,115,95,53,95,50,51,0);
       let mbsplashb = String.fromCharCode(101,95,51,51,95,109,117,108,109,111,100,0);
       let bangK = String.fromCharCode(102,95,50,55,95,108,111,111,112,98,97,99,107,0);
       let xadsdka = String.fromCharCode(118,98,108,101,95,55,95,55,55,0);
      let minimize2 = networkn.length >= 9443654;
      do {
         networkn = `${bangK.length << (Math.min(mbsplashb.length, 3))}`;
         if (minimize2) {
            break;
         }
      } while ((networkn.includes(`${whistleorangeY.size}`)) && minimize2);
      let taiwanT = whistleorangeY.size >= 5525934;
      do {
         whistleorangeY.set(`${mbsplashb}`, whistleorangeY.size);
         if (taiwanT) {
            break;
         }
      } while (taiwanT && (4 <= (whistleorangeY.size / 3)));
       let active5 = 1;
       let flyerS = 2;
          let floaterM = 5.0;
          let basketballb = false;
          let mbbidm = String.fromCharCode(115,101,110,100,105,110,103,95,114,95,56,52,0);
         xadsdka = `${3 - mbbidm.length}`;
         floaterM -= (parseFloat(`${parseInt(`${floaterM}`) << (Math.min(3, Math.abs((basketballb ? 1 : 4))))}`));
         basketballb = !basketballb;
         mbbidm = `${(parseInt(`${floaterM}`) + (basketballb ? 2 : 5))}`;
         networkn = `${(xadsdka == String.fromCharCode(84,0) ? xadsdka.length : bangK.length)}`;
         bangK += `${bangK.length}`;
         mbsplashb = `${(String.fromCharCode(57,0) == bangK ? flyerS : bangK.length)}`;
      let custom2 = 8030223 <= whistleorangeY.size;
      do {
         whistleorangeY = new Map([[`${active5}`, active5 | flyerS]]);
         if (custom2) {
            break;
         }
      } while (custom2 && (5 < (4 ^ xadsdka.length) || (xadsdka.length ^ 4) < 1));
      if (!bangK.startsWith(`${xadsdka.length}`)) {
         bangK += `${networkn.length & 2}`;
      }
      if (bangK.length > 5) {
         bangK = `${xadsdka.length ^ 3}`;
      }
       let stationl = 1.0;
       let floating0 = 2.0;
      let eyeopen3 = active5 <= 6573665;
      do {
         active5 |= networkn.length;
         if (eyeopen3) {
            break;
         }
      } while (((active5 * 3) <= 3) && eyeopen3);
      if (!networkn.endsWith(`${whistleorangeY.size}`)) {
          let basketballs: Map<any, any> = new Map([[String.fromCharCode(122,95,52,52,95,115,105,109,105,108,97,114,0),true ], [String.fromCharCode(105,97,100,115,116,120,95,118,95,53,51,0),true ], [String.fromCharCode(102,114,97,109,101,114,97,116,101,95,111,95,52,56,0),true ]]);
         networkn += `${whistleorangeY.size}`;
         basketballs = new Map([[`${basketballs.size}`, basketballs.size % 2]]);
      }
      if (stationl >= 4.81) {
         stationl -= 2 << (Math.min(4, Math.abs(whistleorangeY.size)));
      }
       let launch0 = true;
       let predictionbuttona = true;
      traminio = [liveshare8.size << (Math.min(Math.abs(helper5.size), 1))];
      if (notificationgrayy) {
         break;
      }
   } while ((4 <= (2 % (Math.max(2, traminio.length)))) && notificationgrayy);
      commentr -= parseInt(`${interstitialz}`);
       let dicelogo7: Array<any> = [552, 302, 226];
       let latn9 = false;
      for (let o = 0; o < 1; o++) {
          let whitetickZ = true;
         latn9 = !whitetickZ;
      }
          let appsj = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,95,121,95,49,54,0);
         latn9 = !latn9 || appsj.length > 14;
      while (dicelogo7.length >= 4) {
         latn9 = dicelogo7.length >= 83;
         break;
      }
      if (!latn9 || (3 << (Math.min(5, dicelogo7.length))) <= 1) {
          let episodec = 3;
          let nativeM = String.fromCharCode(120,95,51,49,95,99,111,109,112,97,110,100,0);
          let bellG = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,113,95,55,57,0);
         latn9 = 32 == dicelogo7.length;
         episodec &= 2 + nativeM.length;
         nativeM += `${bellG.length}`;
         bellG += `${nativeM.length}`;
      }
       let chinaS: Array<any> = [135, 194, 609];
       let iconsettings: Array<any> = [String.fromCharCode(110,101,119,108,105,110,101,95,106,95,55,54,0), String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,107,95,57,52,0), String.fromCharCode(104,95,50,56,95,99,105,114,99,108,101,0)];
      for (let p = 0; p < 2; p++) {
         chinaS = [3];
      }
      resulto.push(((latn9 ? 1 : 1) / (Math.max(parseInt(`${vietnams}`), 9))));
   while (1 <= (1 - playercommonF.length) || (vietnams - 5.58) <= 3.69) {
      playercommonF += `${parseInt(`${libzeusw}`)}`;
      break;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let smallbrightnessB = String.fromCharCode(101,95,55,55,95,99,112,117,105,110,102,111,0);
    let notificationgrayd = true;
    let textlayoutmanagerJ = String.fromCharCode(105,115,116,115,95,49,95,56,51,0);
    let halffieldimage2 = String.fromCharCode(119,95,57,54,95,101,100,103,101,115,0);
    let bottomU = true;
    let libreanimatedd = true;
    let searchbarU = 5.0;
    let yellowredcardS = 0.0;
    let ballT: Map<any, any> = new Map([[String.fromCharCode(117,95,49,57,95,99,104,101,99,107,115,116,114,105,100,101,0),634], [String.fromCharCode(122,95,56,95,99,97,116,101,103,111,114,105,115,101,100,0),778], [String.fromCharCode(103,95,53,54,95,105,110,116,101,114,120,121,0),702]]);
    let d_titlek = 4;
    let team_ = true;
    let eventsplashu = String.fromCharCode(98,95,49,57,95,99,111,110,102,105,114,109,97,116,105,111,110,0);
    let gifgoalbg_: Map<any, any> = new Map([[String.fromCharCode(102,114,111,110,116,95,103,95,48,0),false ], [String.fromCharCode(99,104,114,111,109,97,109,99,95,52,95,49,56,0),true ], [String.fromCharCode(97,110,105,109,97,116,101,115,95,120,95,55,49,0),false ]]);
      textlayoutmanagerJ += `${halffieldimage2.length}`;
   for (let o = 0; o < 2; o++) {
      notificationgrayd = (libreanimatedd ? !notificationgrayd : !libreanimatedd);
   }

        if (referrerErrMsg !== null) return;

   if (!libreanimatedd) {
      notificationgrayd = halffieldimage2 == String.fromCharCode(102,0);
   }
   for (let r = 0; r < 3; r++) {
      libreanimatedd = (ballT.size - parseInt(`${searchbarU}`)) > 67;
   }

        if (isSubmitting) return;

      d_titlek *= 3 - textlayoutmanagerJ.length;
   let rnewssharen = 8284438 >= smallbrightnessB.length;
   do {
      smallbrightnessB += "1";
      if (rnewssharen) {
         break;
      }
   } while (rnewssharen && (1 >= smallbrightnessB.length));
        setSubmitting(true);

      yellowredcardS /= Math.max(d_titlek, 3);
   if (1 == (smallbrightnessB.length + 3)) {
       let arrowrightH: Map<any, any> = new Map([[String.fromCharCode(100,95,55,95,99,111,108,111,110,0),false ], [String.fromCharCode(111,95,54,56,95,119,104,105,116,101,115,0),true ], [String.fromCharCode(116,95,49,55,95,99,108,97,105,109,101,100,0),true ]]);
         arrowrightH.set(`${arrowrightH.size}`, arrowrightH.size | arrowrightH.size);
      while ((arrowrightH.size + 1) >= 4) {
         arrowrightH.set(`${arrowrightH.size}`, 1 << (Math.min(1, Math.abs(arrowrightH.size))));
         break;
      }
      for (let c = 0; c < 3; c++) {
         arrowrightH = new Map([[`${arrowrightH.size}`, arrowrightH.size & arrowrightH.size]]);
      }
      smallbrightnessB += `${(parseInt(`${searchbarU}`) + (libreanimatedd ? 5 : 2))}`;
   }

        try {

   while (textlayoutmanagerJ.includes(`${searchbarU}`)) {
      searchbarU += parseInt(`${yellowredcardS}`);
      break;
   }
       let referrerU = 5.0;
      for (let m = 0; m < 1; m++) {
         referrerU -= parseFloat(`${parseInt(`${referrerU}`) << (Math.min(Math.abs(parseInt(`${referrerU}`)), 3))}`);
      }
       let defaultplayerimgq: Map<any, any> = new Map([[String.fromCharCode(111,95,49,54,95,108,117,109,97,0),String.fromCharCode(108,95,55,48,95,101,116,104,101,114,0)], [String.fromCharCode(101,95,53,55,95,99,111,108,108,97,116,105,110,103,0),String.fromCharCode(111,95,56,52,95,104,111,116,111,0)], [String.fromCharCode(105,110,102,101,114,95,97,95,57,50,0),String.fromCharCode(101,110,99,111,100,101,114,115,95,121,95,54,49,0)]]);
       let renderH: Map<any, any> = new Map([[String.fromCharCode(117,95,49,55,95,116,101,115,116,105,110,103,0),String.fromCharCode(114,97,110,107,105,110,103,95,104,95,48,0)], [String.fromCharCode(110,117,109,101,114,105,99,95,98,95,50,54,0),String.fromCharCode(116,117,114,110,95,50,95,54,48,0)], [String.fromCharCode(101,95,51,49,95,105,115,111,109,0),String.fromCharCode(101,120,99,101,101,100,95,98,95,52,50,0)]]);
          let mutedq = 0;
          let footballz = String.fromCharCode(119,95,51,55,95,109,117,116,101,120,0);
          let soundD = true;
         defaultplayerimgq = new Map([[`${defaultplayerimgq.size}`, 3 << (Math.min(2, Math.abs(defaultplayerimgq.size)))]]);
         mutedq >>= Math.min(Math.abs(mutedq), 2);
         footballz += `${2 >> (Math.min(4, footballz.length))}`;
         soundD = footballz.endsWith(`${mutedq}`);
      d_titlek |= 1;
            await wawaEvent.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

       let largesound0: Map<any, any> = new Map([[String.fromCharCode(115,111,99,111,110,110,101,99,116,95,53,95,56,52,0),726], [String.fromCharCode(118,101,114,116,105,99,97,108,95,50,95,53,0),906], [String.fromCharCode(99,97,108,99,117,108,97,116,101,95,54,95,50,53,0),793]]);
      for (let e = 0; e < 1; e++) {
         largesound0.set(`${largesound0.size}`, largesound0.size + 2);
      }
      while (!Array.from(largesound0.values()).includes(largesound0.size)) {
         largesound0 = new Map([[`${largesound0.size}`, largesound0.size & 3]]);
         break;
      }
          let loginQ = String.fromCharCode(118,95,49,50,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0);
          let elements4 = 1.0;
          let hoverS = String.fromCharCode(119,97,108,107,105,110,103,95,101,95,57,56,0);
         largesound0 = new Map([[`${largesound0.size}`, largesound0.size]]);
         loginQ = `${1 | parseInt(`${elements4}`)}`;
         elements4 /= Math.max(3, 3);
         hoverS += `${loginQ.length - parseInt(`${elements4}`)}`;
      bottomU = searchbarU == 3.75;
   if (4 < ballT.size) {
      ballT.set(`${d_titlek}`, 2 % (Math.max(d_titlek, 4)));
   }
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   if (textlayoutmanagerJ.length == ballT.size) {
      ballT = new Map([[`${notificationgrayd}`, (parseInt(`${searchbarU}`) | (notificationgrayd ? 1 : 5))]]);
   }
   let watchA = 5286824 <= ballT.size;
   do {
      ballT.set(`${libreanimatedd}`, ((libreanimatedd ? 3 : 3) - (notificationgrayd ? 1 : 5)));
      if (watchA) {
         break;
      }
   } while (watchA && (ballT.size >= 5));
            return;

      notificationgrayd = d_titlek >= parseInt(`${searchbarU}`);
   if (yellowredcardS <= 5.85) {
      yellowredcardS -= ((bottomU ? 3 : 3));
   }
        }

        const result = await wawaEvent.getUserDetails();

      ballT = new Map([[`${searchbarU}`, 1 % (Math.max(parseInt(`${searchbarU}`), 9))]]);
   let editw = 9469202 >= ballT.size;
   do {
       let iconarrowrightwhiteX = 4.0;
       let latnT = true;
      for (let n = 0; n < 1; n++) {
         iconarrowrightwhiteX -= parseFloat(`${1 ^ parseInt(`${iconarrowrightwhiteX}`)}`);
      }
         latnT = !latnT;
         iconarrowrightwhiteX += (parseFloat(`${(latnT ? 1 : 2) & parseInt(`${iconarrowrightwhiteX}`)}`));
         iconarrowrightwhiteX *= (parseFloat(`${(latnT ? 3 : 3) << (Math.min(Math.abs(parseInt(`${iconarrowrightwhiteX}`)), 4))}`));
      for (let s = 0; s < 3; s++) {
          let sansW = 3;
         iconarrowrightwhiteX /= Math.max(4, (parseFloat(`${parseInt(`${iconarrowrightwhiteX}`) | (latnT ? 5 : 2)}`)));
         sansW *= sansW;
      }
          let firebasei = 0.0;
          let gesturesS: Array<any> = [610, 658, 576];
          let submitr = String.fromCharCode(101,95,53,54,95,116,97,112,0);
         iconarrowrightwhiteX /= Math.max(parseFloat(`${3}`), 1);
         firebasei /= Math.max(parseInt(`${firebasei}`), 4);
         gesturesS = [parseInt(`${firebasei}`)];
         submitr = `${gesturesS.length}`;
      ballT.set(smallbrightnessB, 2);
      if (editw) {
         break;
      }
   } while (editw && (!Array.from(ballT.values()).includes(yellowredcardS)));

        if (result == null) {

      notificationgrayd = textlayoutmanagerJ.length > ballT.size;
       let libsgcoreI = String.fromCharCode(117,110,109,97,116,99,104,101,100,95,52,95,51,50,0);
       let crosso = 5.0;
       let reactnativeultimatelistviewe: Array<any> = [148, 94, 431];
          let gradlewn: Map<any, any> = new Map([[String.fromCharCode(102,95,53,55,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0),687], [String.fromCharCode(120,95,52,52,95,102,97,105,108,97,98,108,101,0),425], [String.fromCharCode(104,97,114,112,101,110,95,51,95,55,54,0),437]]);
         libsgcoreI += `${libsgcoreI.length}`;
         gradlewn = new Map([[`${gradlewn.size}`, gradlewn.size]]);
      if (1 <= (5 - libsgcoreI.length)) {
         libsgcoreI += "1";
      }
         crosso += parseFloat(`${reactnativeultimatelistviewe.length}`);
      if (libsgcoreI.length == reactnativeultimatelistviewe.length) {
          let buildP = false;
         libsgcoreI = `${(3 >> (Math.min(4, Math.abs((buildP ? 5 : 1)))))}`;
      }
         crosso /= Math.max(parseFloat(`${parseInt(`${crosso}`)}`), 5);
      let libfabricjniD = crosso >= 8268961.0;
      do {
          let chinal = false;
          let fillm = 3;
          let roundP: Array<any> = [568, 991];
          let sinit_ab3 = 3.0;
          let stringt = 4.0;
         crosso -= parseFloat(`${reactnativeultimatelistviewe.length % 3}`);
         chinal = roundP.includes(stringt);
         fillm &= (fillm << (Math.min(4, Math.abs((chinal ? 1 : 4)))));
         roundP.push(roundP.length << (Math.min(Math.abs(2), 3)));
         sinit_ab3 /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${stringt}`)), 5)), 2);
         if (libfabricjniD) {
            break;
         }
      } while (((parseFloat(`${libsgcoreI.length}`) * crosso) < 4.1 || (parseInt(`${crosso}`) * libsgcoreI.length) < 4) && libfabricjniD);
         libsgcoreI += `${libsgcoreI.length}`;
      let dataa = libsgcoreI == String.fromCharCode(112,98,120,95,118,0);
      do {
         libsgcoreI += `${parseInt(`${crosso}`)}`;
         if (dataa) {
            break;
         }
      } while (dataa && (1 >= (libsgcoreI.length / (Math.max(9, reactnativeultimatelistviewe.length)))));
      let sorty = 7072845 <= libsgcoreI.length;
      do {
          let libswresampleO = String.fromCharCode(109,95,49,49,95,102,114,97,109,101,115,105,122,101,115,0);
         libsgcoreI += `${libsgcoreI.length}`;
         libswresampleO += `${libswresampleO.length}`;
         if (sorty) {
            break;
         }
      } while (((libsgcoreI.length ^ 3) == 2 || (libsgcoreI.length ^ 3) == 2) && sorty);
      ballT.set(libsgcoreI, reactnativeultimatelistviewe.length);
            return;
        }

        await dispatch(updateUserAuth(result));

   for (let k = 0; k < 3; k++) {
      yellowredcardS /= Math.max(4, (3 / (Math.max(3, (bottomU ? 5 : 2)))));
   }
      ballT = new Map([[`${searchbarU}`, d_titlek]]);
        dispatch(changeScreenAction("修改成功"));

   if (notificationgrayd) {
      yellowredcardS /= Math.max(parseInt(`${searchbarU}`), 4);
   }
       let megaphonea = 3;
       let libzeuse: Map<any, any> = new Map([[String.fromCharCode(99,117,100,97,95,112,95,51,55,0),326], [String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,95,122,95,53,52,0),983]]);
       let arrowu = true;
      for (let l = 0; l < 2; l++) {
          let detailw = true;
         libzeuse.set(`${arrowu}`, libzeuse.size);
         detailw = !detailw || !detailw;
      }
          let twitter9 = String.fromCharCode(101,116,97,95,119,95,57,49,0);
          let libswscaleX = String.fromCharCode(114,95,55,51,95,102,111,114,101,104,101,97,100,0);
         megaphonea |= libzeuse.size / 2;
         twitter9 = `${(String.fromCharCode(52,0) == twitter9 ? libswscaleX.length : twitter9.length)}`;
         libswscaleX = `${twitter9.length}`;
      let smallsoundL = arrowu ? !arrowu : arrowu;
      do {
         arrowu = libzeuse.size <= 10;
         if (smallsoundL) {
            break;
         }
      } while (((3 + megaphonea) >= 2) && smallsoundL);
         arrowu = libzeuse.size > 50 && 50 > megaphonea;
      if (4 <= (libzeuse.size - 1) && 1 <= libzeuse.size) {
         arrowu = null != libzeuse.get(`${arrowu}`);
      }
       let inactiveY = String.fromCharCode(99,111,117,110,116,114,121,95,114,95,54,55,0);
      for (let b = 0; b < 2; b++) {
         inactiveY += `${(String.fromCharCode(72,0) == inactiveY ? inactiveY.length : (arrowu ? 4 : 1))}`;
      }
         arrowu = libzeuse.get(`${arrowu}`) != null;
          let rewardy = 3;
          let subso: Array<any> = [166, 181];
          let whistleoranged = String.fromCharCode(102,95,53,56,95,104,105,103,104,108,105,103,104,116,0);
         libzeuse.set(inactiveY, inactiveY.length / (Math.max(10, subso.length)));
         rewardy |= (whistleoranged == String.fromCharCode(72,0) ? rewardy : whistleoranged.length);
         subso = [rewardy];
      yellowredcardS -= ballT.size >> (Math.min(Math.abs(1), 3));

        Keyboard.dismiss();

   if (1 <= (4 >> (Math.min(4, Math.abs(d_titlek)))) && notificationgrayd) {
      d_titlek >>= Math.min(Math.abs(((bottomU ? 1 : 1))), 3);
   }
      bottomU = 28 < d_titlek;
        navigation.navigate("Home", {
            screen: "Profile",
        });

   let mimoi = 6658026 <= d_titlek;
   do {
      d_titlek <<= Math.min(halffieldimage2.length, 1);
      if (mimoi) {
         break;
      }
   } while (mimoi && (1 >= ballT.size));
   while ((gifgoalbg_.size % (Math.max(9, smallbrightnessB.length))) >= 1 && (gifgoalbg_.size % (Math.max(smallbrightnessB.length, 8))) >= 1) {
      gifgoalbg_.set(`${bottomU}`, (3 - (bottomU ? 5 : 5)));
      break;
   }

        setSubmitting(false);
    }

    return (
        <CBottomSheet
            isVisible={isVisible}
            onBackdropPress={onClose}
            isLoading={isSubmitting}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={textVariants.body}>
                        取消
                    </Text>
                </TouchableOpacity>

                <Text style={textVariants.bigHeader}>
                    设置昵称
                </Text>

                <TouchableOpacity onPress={onSubmitForm}>
                    <Text style={textVariants.body}>
                        保存
                    </Text>
                </TouchableOpacity>
            </View>
            <CTextInput
                value={referrer}
                onChangeText={onReferralChange}
                placeholder="补填邀请码 (只能填写一次)"
                showErrorStyle={referrerErrMsg !== null}
                maxLength={18}
            />

            <View
                style={{
                    ...styles.dangerWrap,
                }}
            >
                <View
                    style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    {referrerErrMsg !== null && (
                        <>
                            <Image
                                style={{
                                    height: 22,
                                    width: 22,
                                    marginRight: 5,
                                    position: "relative",
                                    top: 1,
                                }}
                                source={require("@static/images/invite/volumeOrangeclock.png")}
                            />

                            <Text style={styles.danger}>{referrerErrMsg}</Text>
                        </>
                    )}
                </View>
            </View>
        </CBottomSheet>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    dangerWrap: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    danger: {
        fontWeight: "400",
        fontSize: 15,
        textAlign: "left",
        color: "#FF3434",
    },
});