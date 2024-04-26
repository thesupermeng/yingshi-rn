

class ReviewMain {
    static iconbackwhiteEmptyLibsgcoreGif = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Clipboard,
  Linking,
  Share,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

import WhatsappIcn from "@static/images/invite/appsCountryCurrent.svg";
import FastImage from "../common/ww_result";
import TelegramIcn from "@static/images/invite/fillPhone.svg";
import FacebookIcn from "@static/images/invite/iconRewardGoogle.svg";
import WechatIcn from "@static/images/invite/defaultroombgAnimationsExampleimage.svg";

import WeiboIcn from "@static/images/invite/sportsGestureSetting.svg";
import CopyIcn from "@static/images/invite/pointDacccfaabfbcbadeebddcabacdffdbc.svg";
import ProfileIcn from "@static/images/invite/bufferIconbellactive.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/ww_catagory_neon";
import { showLoginAction } from "@redux/actions/ww_hash";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/ww_icon";
import { wwAbidetect } from "../../../ww_leakchecker";
import NotificationModal from "../modal/ww_countdown_ksad";

import SinaIcon from "@static/images/componentsMbjscommon.svg";
import WeChatIcon from "@static/images/defaultroombgAnimationsExampleimage.svg";
import QQIcon from "@static/images/photoStation.svg";
import PYQIcon from "@static/images/entryEwarded.svg";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
interface wwIndexDice {
  userState: wwBodan;
}
export default function InviteCard({ userState = {} }: wwIndexDice) {
  const { colors, textVariants, icons, spacing } = useTheme();
  const locations = [0, 1]; 
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [shareOptions, setShareOptions] = useState({
    message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
    url: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let tnewinterstitialn = 4.0;
    let themex: Array<any> = [String.fromCharCode(118,95,52,56,95,99,111,108,108,97,103,101,0), String.fromCharCode(105,95,55,48,95,112,97,103,101,114,0), String.fromCharCode(97,117,103,109,101,110,116,95,108,95,52,56,0)];
    let aboutc = 0;
    let faviconc = String.fromCharCode(102,105,110,100,101,114,95,55,95,51,48,0);
    let phonesharew = true;
    let dplusa: Array<any> = [761, 134, 22];
    let libmapbufferjniI = false;
    let cornerH = String.fromCharCode(115,116,105,99,107,95,48,95,50,50,0);
    let terms7 = 1.0;
    let utilsB: Array<any> = [31, 590];
   if (libmapbufferjniI || cornerH.length >= 3) {
       let short_lA = 0;
       let emojiA = true;
       let verticalj: Array<any> = [804, 511];
      if ((short_lA ^ 5) >= 2 && short_lA >= 5) {
         short_lA ^= verticalj.length;
      }
         emojiA = verticalj.length == 85;
      while (4 == short_lA) {
         emojiA = (97 > (verticalj.length - (!emojiA ? verticalj.length : 97)));
         break;
      }
      if (emojiA && (short_lA << (Math.min(Math.abs(5), 2))) >= 5) {
         short_lA += 1;
      }
         emojiA = verticalj.includes(emojiA);
      let dropdownN = verticalj.length <= 6727851;
      do {
          let nterstitialm = false;
          let iconbackwhite1 = 0.0;
         verticalj = [parseInt(`${iconbackwhite1}`) * verticalj.length];
         nterstitialm = nterstitialm || nterstitialm;
         iconbackwhite1 *= (parseFloat(`${(nterstitialm ? 1 : 4) ^ 3}`));
         if (dropdownN) {
            break;
         }
      } while (dropdownN && (4 <= verticalj.length));
      for (let c = 0; c < 2; c++) {
         verticalj = [verticalj.length | 3];
      }
      let mbsplashs = 7541072 <= verticalj.length;
      do {
         verticalj = [2 >> (Math.min(Math.abs(short_lA), 2))];
         if (mbsplashs) {
            break;
         }
      } while (mbsplashs && (emojiA));
          let pagea = 0.0;
         emojiA = pagea < 96.39 || 99 < short_lA;
      libmapbufferjniI = (tnewinterstitialn / (Math.max(5, cornerH.length))) >= 74.71;
   }
   while (faviconc.endsWith(`${libmapbufferjniI}`)) {
      libmapbufferjniI = !phonesharew && faviconc.length <= 14;
      break;
   }
   if (libmapbufferjniI) {
      libmapbufferjniI = cornerH == String.fromCharCode(74,0);
   }
   let libfb9 = aboutc >= 5376783;
   do {
      aboutc %= Math.max(4, faviconc.length);
      if (libfb9) {
         break;
      }
   } while ((dplusa.length == 3) && libfb9);
   while (4 == aboutc) {
       let footballb: Map<any, any> = new Map([[String.fromCharCode(105,95,55,55,95,115,116,114,117,99,116,117,114,97,108,0),525], [String.fromCharCode(112,111,115,116,101,114,115,95,117,95,56,54,0),444]]);
       let policyn = true;
       let nextO = String.fromCharCode(99,95,54,52,95,108,111,117,112,101,0);
       let libtanc = 1.0;
       let soundr = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,56,95,56,50,0);
      let sansf = 6392036 <= footballb.size;
      do {
          let turnf: Array<any> = [105, 704];
          let trophyf = String.fromCharCode(104,95,54,95,109,117,116,97,98,108,101,0);
          let xadsdkc: Array<any> = [659, 890];
          let eventr = 2.0;
         footballb = new Map([[`${footballb.size}`, 2 & nextO.length]]);
         turnf = [parseInt(`${eventr}`) ^ xadsdkc.length];
         trophyf += "1";
         xadsdkc.push(parseInt(`${eventr}`));
         if (sansf) {
            break;
         }
      } while (sansf && (3 >= (soundr.length << (Math.min(1, Math.abs(footballb.size))))));
         soundr = `${(soundr == String.fromCharCode(48,0) ? (policyn ? 4 : 3) : soundr.length)}`;
         nextO += `${(String.fromCharCode(80,0) == soundr ? soundr.length : parseInt(`${libtanc}`))}`;
      for (let o = 0; o < 2; o++) {
         footballb = new Map([[`${footballb.size}`, (String.fromCharCode(73,0) == soundr ? soundr.length : footballb.size)]]);
      }
      let dplusr = policyn ? !policyn : policyn;
      do {
         policyn = (footballb.size * nextO.length) > 46;
         if (dplusr) {
            break;
         }
      } while (dplusr && (footballb.size < 5));
      let rulesm = policyn ? !policyn : policyn;
      do {
         policyn = 32 > footballb.size || 77.35 > libtanc;
         if (rulesm) {
            break;
         }
      } while (rulesm && (1 == soundr.length));
       let searchbarn = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,110,95,54,49,0);
       let gifty = String.fromCharCode(114,97,116,101,95,54,95,50,56,0);
          let skiph: Map<any, any> = new Map([[String.fromCharCode(97,114,114,97,121,95,57,95,51,57,0),887], [String.fromCharCode(112,95,49,55,95,99,111,117,110,116,115,0),499], [String.fromCharCode(102,95,52,55,95,112,105,99,107,0),390]]);
          let subsQ: Array<any> = [330, 953, 376];
          let native4 = String.fromCharCode(99,95,50,50,95,112,116,111,110,0);
         policyn = searchbarn.length >= 16;
         skiph.set(native4, (native4 == String.fromCharCode(97,0) ? native4.length : subsQ.length));
         subsQ.push(skiph.size + subsQ.length);
       let mountingR = 1.0;
       let leakchecker1 = 3.0;
          let clubB = 5.0;
         searchbarn = `${(gifty == String.fromCharCode(51,0) ? (policyn ? 4 : 2) : gifty.length)}`;
         clubB -= 3 << (Math.min(Math.abs(parseInt(`${clubB}`)), 5));
      while (gifty != String.fromCharCode(116,0)) {
         soundr = "3";
         break;
      }
         nextO = `${parseInt(`${mountingR}`)}`;
      for (let g = 0; g < 3; g++) {
         libtanc *= parseFloat(`${gifty.length / 3}`);
      }
      let iconrefreshB = footballb.size >= 6168471;
      do {
         footballb = new Map([[`${mountingR}`, parseInt(`${leakchecker1}`) & 3]]);
         if (iconrefreshB) {
            break;
         }
      } while (iconrefreshB && (policyn));
          let countryu = true;
         searchbarn += `${((countryu ? 1 : 5) >> (Math.min(Math.abs(3), 2)))}`;
      libmapbufferjniI = (((policyn ? 6 : dplusa.length) - dplusa.length) < 6);
      break;
   }
      libmapbufferjniI = themex.length == dplusa.length;
      faviconc = "3";
   while ((themex.length << (Math.min(faviconc.length, 2))) >= 4 && (faviconc.length << (Math.min(4, themex.length))) >= 4) {
      themex = [1];
      break;
   }
      libmapbufferjniI = String.fromCharCode(73,0) == cornerH;
       let codegenv = 5;
      if (2 > codegenv) {
         codegenv |= 2;
      }
       let backG = true;
      while (!backG || 3 <= (codegenv % (Math.max(3, 5)))) {
         codegenv %= Math.max(1, codegenv);
         break;
      }
      phonesharew = ((themex.length << (Math.min(5, Math.abs((phonesharew ? 37 : themex.length))))) < 37);
   for (let r = 0; r < 3; r++) {
      themex.push(3);
   }
   while (1 > (5 << (Math.min(3, Math.abs(aboutc)))) && phonesharew) {
      aboutc -= cornerH.length;
      break;
   }
      aboutc /= Math.max(3, parseInt(`${tnewinterstitialn}`));
      terms7 *= parseFloat(`${parseInt(`${terms7}`) % 1}`);
   while (3 > faviconc.length) {
       let whiter = 1;
       let g_count0 = 2.0;
          let splash8 = String.fromCharCode(98,117,99,107,101,116,115,95,114,95,54,0);
          let questiconr: Map<any, any> = new Map([[String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,105,95,54,49,0),324], [String.fromCharCode(97,95,50,54,95,111,112,99,111,100,101,115,0),919]]);
         whiter >>= Math.min(5, Math.abs(parseInt(`${g_count0}`)));
         splash8 = `${questiconr.size}`;
         questiconr.set(`${splash8}`, 3 ^ splash8.length);
      if (3 > (whiter / 1)) {
         g_count0 *= parseFloat(`${parseInt(`${g_count0}`) ^ 2}`);
      }
          let giflivestreamingy = String.fromCharCode(101,110,99,105,112,104,101,114,95,108,95,52,54,0);
          let chartn = 3.0;
         whiter /= Math.max(giflivestreamingy.length % (Math.max(1, 2)), 2);
         giflivestreamingy = `${parseInt(`${chartn}`) & 1}`;
         chartn /= Math.max(1, parseInt(`${chartn}`));
         g_count0 -= parseFloat(`${whiter % 2}`);
          let iconsettingY = true;
          let commonx = String.fromCharCode(97,110,99,104,111,114,95,100,95,51,57,0);
         g_count0 *= parseFloat(`${whiter / 1}`);
         iconsettingY = (64 > (commonx.length >> (Math.min(5, Math.abs((iconsettingY ? 64 : commonx.length))))));
         g_count0 *= parseFloat(`${whiter}`);
      dplusa = [themex.length];
      break;
   }
      tnewinterstitialn /= Math.max(3, 2 ^ aboutc);
      terms7 += parseFloat(`${aboutc & 2}`);
   let refreshm = String.fromCharCode(49,112,115,106,121,0) == cornerH;
   do {
       let weathera = 2;
       let imagenetworkerr7 = 4.0;
      if (weathera < 3) {
         weathera >>= Math.min(5, Math.abs(parseInt(`${imagenetworkerr7}`)));
      }
         weathera *= 1;
          let profileframej = true;
         imagenetworkerr7 /= Math.max(3, parseInt(`${imagenetworkerr7}`) / (Math.max(10, weathera)));
         profileframej = (!profileframej ? profileframej : !profileframej);
         imagenetworkerr7 *= parseInt(`${imagenetworkerr7}`) | weathera;
       let rewardA = String.fromCharCode(112,97,110,100,105,110,103,0);
       let promotionq = String.fromCharCode(111,95,55,51,95,100,101,115,116,105,110,97,116,105,111,110,0);
         promotionq += `${promotionq.length}`;
      cornerH += "1";
      if (refreshm) {
         break;
      }
   } while ((2 < cornerH.length) && refreshm);
       let modal0 = 1.0;
       let mapping0 = 1.0;
       let roomr = true;
         mapping0 -= (parseFloat(`${(roomr ? 4 : 3) % (Math.max(parseInt(`${mapping0}`), 3))}`));
          let step9 = true;
          let networkA = String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,95,48,95,50,52,0);
         roomr = !roomr;
         step9 = !step9;
         networkA = `${2 & networkA.length}`;
      let reactnativeultimatelistviewo = 6343065.0 >= modal0;
      do {
          let libzeusg: Map<any, any> = new Map([[String.fromCharCode(118,108,105,110,101,95,52,95,54,50,0),false ], [String.fromCharCode(97,95,53,95,118,100,114,97,119,104,101,108,112,101,114,0),false ]]);
          let sinaP = String.fromCharCode(114,101,109,111,118,101,95,109,95,56,53,0);
         modal0 *= parseFloat(`${libzeusg.size}`);
         libzeusg = new Map([[sinaP, (sinaP == String.fromCharCode(109,0) ? sinaP.length : sinaP.length)]]);
         if (reactnativeultimatelistviewo) {
            break;
         }
      } while ((modal0 == 1.91 || 1.95 == (1.91 / (Math.max(10, modal0)))) && reactnativeultimatelistviewo);
      while (roomr || (modal0 + 1.6) == 1.24) {
         roomr = mapping0 == modal0;
         break;
      }
      for (let w = 0; w < 2; w++) {
         mapping0 -= parseFloat(`${parseInt(`${modal0}`) >> (Math.min(5, Math.abs(1)))}`);
      }
      for (let n = 0; n < 2; n++) {
          let gestureT = String.fromCharCode(99,95,53,48,95,105,100,101,111,0);
          let componentregistryX = String.fromCharCode(103,114,97,121,97,95,111,95,49,48,0);
          let gesturee = 3;
          let dataM = String.fromCharCode(112,108,105,115,116,95,53,95,52,57,0);
         roomr = dataM.length < gesturee;
         gestureT = `${componentregistryX.length}`;
         componentregistryX = "2";
         gesturee <<= Math.min(5, componentregistryX.length);
         dataM += `${componentregistryX.length * gestureT.length}`;
      }
         modal0 += parseFloat(`${parseInt(`${modal0}`) << (Math.min(4, Math.abs(1)))}`);
          let greytick8 = 1.0;
         mapping0 += parseFloat(`${parseInt(`${modal0}`)}`);
         greytick8 /= Math.max(parseFloat(`${parseInt(`${greytick8}`)}`), 3);
          let stationsK = 0.0;
          let indexu = String.fromCharCode(113,95,52,95,115,117,109,97,114,121,0);
          let showa = String.fromCharCode(99,117,114,115,111,114,95,54,95,52,0);
         roomr = mapping0 >= 29.72;
         stationsK /= Math.max(1, parseFloat(`${2 - indexu.length}`));
         indexu = `${showa.length | indexu.length}`;
         showa = "2";
      libmapbufferjniI = (tnewinterstitialn / (Math.max(cornerH.length, 10))) >= 46.75;
   for (let z = 0; z < 3; z++) {
      aboutc ^= (2 ^ (phonesharew ? 3 : 1));
   }
      faviconc += `${themex.length}`;

    setIsDialogOpen(!isDialogOpen);
  };

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    
    const date1Timestamp = userState.userCurrentTimestamp;
    const date2Timestamp = userState.userMemberExpired;

    
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;

    
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;

    
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);

    
    
    
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);

    
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;

    setVipRemainingDay(result);
  }, [userState.userCurrentTimestamp]);

  useEffect(() => {
    const inviteParam = userState.userReferralCode + userState.userName;

    const Buffer = require("buffer").Buffer;
    let encodedAuth = new Buffer(inviteParam).toString("base64");
    setShareOptions({
      ...shareOptions,
      message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
      url: INVITE_DOMAIN + encodedAuth,
    });
  }, [userState]);

  useEffect(() => {
    const inviteParam = userState.userReferralCode + userState.userName;

    const Buffer = require("buffer").Buffer;
    let encodedAuth = new Buffer(inviteParam).toString("base64");
    setShareOptions({
      ...shareOptions,
      message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
      url: INVITE_DOMAIN + encodedAuth,
    });
  }, []);

  const shareToWhatsApp = async () => {
       let bgvipxvod1 = 1.0;
    let nativeE: Array<any> = [859, 761];
    let networkT = false;
    let static_9yF = 2;
    let libruntimeexecutorK = false;
    let shielddone8 = String.fromCharCode(120,95,56,57,95,115,108,111,112,0);
    let signinup0 = String.fromCharCode(116,95,51,55,95,121,117,121,118,116,111,121,117,118,0);
    let fullN = String.fromCharCode(112,103,109,121,117,118,95,50,95,56,54,0);
    let readc: Array<any> = [String.fromCharCode(115,95,53,52,95,112,114,101,99,101,100,101,110,99,101,0), String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,99,95,53,55,0)];
    let formF = 5.0;
    let combineV = 5.0;
      nativeE.push(((networkT ? 2 : 4)));
   while (!networkT || fullN.length >= 3) {
      networkT = nativeE.length > 94 || shielddone8.length > 94;
      break;
   }

    if (wwBodan.isGuest(userState)) {

   if (2 > (nativeE.length >> (Math.min(Math.abs(2), 5))) && (nativeE.length >> (Math.min(fullN.length, 3))) > 2) {
      fullN += `${shielddone8.length}`;
   }
      bgvipxvod1 *= static_9yF;
      dispatch(showLoginAction());

   if (4 <= (static_9yF >> (Math.min(Math.abs(3), 3))) && (static_9yF >> (Math.min(Math.abs(3), 5))) <= 3) {
      static_9yF %= Math.max(5, signinup0.length << (Math.min(2, Math.abs(static_9yF))));
   }
      bgvipxvod1 += 3;
      return;

       let emojiK = 3.0;
         emojiK *= parseFloat(`${2}`);
       let telemetryX = String.fromCharCode(107,105,99,107,101,114,95,52,95,51,51,0);
       let tooltipsC = String.fromCharCode(119,95,52,56,95,100,101,108,97,0);
       let singaporea = String.fromCharCode(120,95,51,49,95,109,111,100,101,120,112,0);
       let predictionwinY = String.fromCharCode(115,101,103,100,97,116,97,95,109,95,57,57,0);
      libruntimeexecutorK = (!libruntimeexecutorK ? networkT : libruntimeexecutorK);
   let gdtadv4 = 7079225 <= nativeE.length;
   do {
      nativeE = [((networkT ? 5 : 4) * (libruntimeexecutorK ? 1 : 4))];
      if (gdtadv4) {
         break;
      }
   } while (gdtadv4 && (1 <= (static_9yF & 4)));
    }
    const url =
      ReviewMain.iconbackwhiteEmptyLibsgcoreGif([-32,-4,-4,-8,-5,-78,-89,-89,-1,-23,-90,-27,-19,-89,-73,-4,-19,-16,-4,-75,-120],0x88,false) + shareOptions.message + " " + shareOptions.url; 

      shielddone8 += "3";
   if ((bgvipxvod1 - 3.70) < 4.66 && 3.70 < bgvipxvod1) {
       let shielddoneu = String.fromCharCode(108,97,98,101,108,115,95,111,95,48,0);
       let foundk = String.fromCharCode(111,95,50,51,95,109,105,112,115,0);
          let shootyesgoalQ = String.fromCharCode(100,101,115,116,114,117,99,116,95,104,95,52,50,0);
          let sina7 = false;
         shielddoneu += `${(3 + (sina7 ? 2 : 3))}`;
         shootyesgoalQ += `${shootyesgoalQ.length + 2}`;
         sina7 = (shootyesgoalQ.length >> (Math.min(5, shootyesgoalQ.length))) <= 75;
         shielddoneu += `${shielddoneu.length}`;
      networkT = ((nativeE.length >> (Math.min(1, Math.abs((networkT ? 77 : nativeE.length))))) == 77);
   }
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

      shielddone8 = `${fullN.length - 1}`;
      networkT = shielddone8 == fullN;
          console.error(`Cannot open URL: ${url}`);
        } else {

       let componentn: Map<any, any> = new Map([[String.fromCharCode(122,95,52,50,95,99,111,110,116,114,105,98,0),175], [String.fromCharCode(120,95,54,95,99,97,112,116,117,114,101,100,0),591]]);
       let overw = 4.0;
       let libtany: Array<any> = [481, 745, 455];
      if (overw < 4.99) {
         overw -= 2;
      }
      let appsU = 6816441 <= componentn.size;
      do {
         componentn = new Map([[`${libtany.length}`, libtany.length & 3]]);
         if (appsU) {
            break;
         }
      } while (((overw / 4.76) <= 2.33 || (overw / (Math.max(componentn.size, 8))) <= 4.76) && appsU);
         overw /= Math.max(2, componentn.size);
          let long_um = 0;
          let nativemoduleI = 0.0;
         overw /= Math.max(3, 1);
         long_um += long_um % (Math.max(parseInt(`${nativemoduleI}`), 7));
         nativemoduleI /= Math.max(4, 1);
          let sort1 = String.fromCharCode(112,95,57,56,95,110,97,118,105,103,97,116,101,100,0);
          let iconpipexpande = String.fromCharCode(122,95,57,0);
          let bridgeS: Map<any, any> = new Map([[String.fromCharCode(120,95,53,56,95,115,105,109,112,108,101,119,114,105,116,101,0),182], [String.fromCharCode(97,118,105,111,95,114,95,56,57,0),654], [String.fromCharCode(121,95,49,48,48,95,110,111,100,101,115,0),839]]);
         componentn.set(`${overw}`, parseInt(`${overw}`) % 3);
         sort1 += `${iconpipexpande.length & sort1.length}`;
         iconpipexpande = "2";
         bridgeS.set(`${iconpipexpande}`, iconpipexpande.length);
       let iconshareb = 3.0;
       let settingZ = 2.0;
         settingZ *= parseInt(`${settingZ}`);
         settingZ *= 1;
          let hookT = String.fromCharCode(98,101,110,101,97,116,104,95,107,95,55,57,0);
          let full4: Array<any> = [449, 154];
          let playj = 3.0;
         libtany.push(parseInt(`${iconshareb}`));
         hookT += `${full4.length | 2}`;
         full4.push(parseInt(`${playj}`));
         playj += parseFloat(`${full4.length >> (Math.min(hookT.length, 4))}`);
      static_9yF ^= 3;
   for (let c = 0; c < 1; c++) {
      nativeE = [shielddone8.length & 3];
   }
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let graph3 = true;
    let agreementX = true;
    let libreactN = String.fromCharCode(99,95,53,56,95,115,116,111,112,0);
    let iconmoreU = String.fromCharCode(117,112,99,111,109,105,110,103,95,48,95,54,57,0);
    let ballt = 0.0;
    let eyeopenu = String.fromCharCode(114,95,49,52,95,100,101,99,111,100,97,98,108,101,0);
    let libreactperfloggerjniE = String.fromCharCode(101,118,101,114,121,111,110,101,95,55,95,52,49,0);
    let skipd = 2.0;
    let ewarded7 = 5.0;
    let ewardedv = 1;
    let countdownF: Array<any> = [String.fromCharCode(114,103,98,95,115,95,56,50,0), String.fromCharCode(114,111,117,116,101,95,57,95,51,53,0), String.fromCharCode(113,95,48,95,97,117,116,111,100,101,116,101,99,116,105,111,110,0)];
    let regengj = 0;
    let libavdevice0 = String.fromCharCode(111,98,116,97,105,110,101,114,95,97,95,49,56,0);
   for (let q = 0; q < 2; q++) {
      iconmoreU += `${libreactperfloggerjniE.length}`;
   }
   let register_r5L = 7386086 <= countdownF.length;
   do {
      countdownF.push(((graph3 ? 5 : 3) | parseInt(`${skipd}`)));
      if (register_r5L) {
         break;
      }
   } while (register_r5L && (graph3));

    if (wwBodan.isGuest(userState)) {

       let boot2 = 1.0;
       let feedbackN = String.fromCharCode(115,95,53,95,97,100,97,112,116,0);
         boot2 /= Math.max(parseInt(`${boot2}`) >> (Math.min(Math.abs(1), 1)), 5);
      while (feedbackN.endsWith(`${boot2}`)) {
         boot2 /= Math.max(3, (String.fromCharCode(54,0) == feedbackN ? parseInt(`${boot2}`) : feedbackN.length));
         break;
      }
       let langL = false;
      let binddatasD = feedbackN.length <= 8149667;
      do {
         feedbackN += `${3 * parseInt(`${boot2}`)}`;
         if (binddatasD) {
            break;
         }
      } while ((langL) && binddatasD);
      for (let m = 0; m < 1; m++) {
         feedbackN += "2";
      }
      while (feedbackN.endsWith(`${langL}`)) {
         langL = feedbackN.endsWith(`${langL}`);
         break;
      }
      graph3 = 61.48 < ballt;
   let libreactnativeblobe = 6514408.0 <= ewarded7;
   do {
      ewarded7 += (parseFloat(`${String.fromCharCode(74,0) == eyeopenu ? parseInt(`${skipd}`) : eyeopenu.length}`));
      if (libreactnativeblobe) {
         break;
      }
   } while (libreactnativeblobe && (2.98 <= (skipd - 4.5) || (skipd - 4.5) <= 1.66));
      dispatch(showLoginAction());

      eyeopenu += "1";
   while (1 > ewardedv) {
      agreementX = 18.94 == skipd;
      break;
   }
      return;

      countdownF.push(libreactN.length);
   let more3 = ballt >= 5263762.0;
   do {
       let yellowb: Array<any> = [483, 721, 184];
       let membershipw: Array<any> = [684, 15];
       let sell3 = String.fromCharCode(114,101,115,112,111,110,100,95,110,95,55,50,0);
       let resend_ = 3;
          let trashQ = 4;
          let gestureX = String.fromCharCode(103,95,55,57,95,97,114,101,116,104,101,114,101,0);
          let kuaishouZ = String.fromCharCode(105,95,53,49,95,114,101,97,100,102,114,97,109,101,0);
         membershipw = [membershipw.length % 3];
         trashQ |= gestureX.length << (Math.min(Math.abs(3), 5));
         gestureX = `${kuaishouZ.length}`;
         kuaishouZ += `${gestureX.length}`;
      for (let y = 0; y < 2; y++) {
         sell3 += `${membershipw.length}`;
      }
         membershipw.push(membershipw.length);
      for (let m = 0; m < 2; m++) {
         membershipw = [membershipw.length - yellowb.length];
      }
      while ((yellowb.length ^ sell3.length) == 1 || (1 ^ sell3.length) == 1) {
          let bottomZ = 0.0;
          let sourceo = String.fromCharCode(122,95,51,48,95,98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,0);
          let store8 = String.fromCharCode(114,101,97,116,116,97,99,104,95,121,95,53,0);
         yellowb = [(String.fromCharCode(105,0) == sourceo ? membershipw.length : sourceo.length)];
         bottomZ -= parseFloat(`${store8.length}`);
         store8 = `${1 & parseInt(`${bottomZ}`)}`;
         break;
      }
          let referrerW = 2;
         sell3 = `${yellowb.length / 3}`;
         referrerW %= Math.max(4, 2);
         sell3 += "3";
      while (2 <= (resend_ / 5)) {
          let libjsi6: Array<any> = [505, 891, 383];
          let libcrashsdkF = 2.0;
          let networkl = String.fromCharCode(115,104,97,100,111,119,95,112,95,51,51,0);
          let flyerJ: Array<any> = [397, 94, 115];
         yellowb = [membershipw.length];
         libjsi6.push(3);
         libcrashsdkF *= 3;
         networkl = `${libjsi6.length & 1}`;
         flyerJ = [3];
         break;
      }
         resend_ ^= resend_ | sell3.length;
      if ((2 << (Math.min(4, membershipw.length))) >= 5 && 2 >= (membershipw.length << (Math.min(sell3.length, 2)))) {
         sell3 = `${(sell3 == String.fromCharCode(120,0) ? sell3.length : membershipw.length)}`;
      }
      for (let g = 0; g < 1; g++) {
         resend_ |= 1;
      }
       let emptye = false;
       let darks = false;
      ballt *= ((agreementX ? 5 : 2));
      if (more3) {
         break;
      }
   } while (more3 && (2 == (parseInt(`${ballt}`) / (Math.max(1, eyeopenu.length)))));
    }
    const message = shareOptions.message + " " + shareOptions.url;

   for (let z = 0; z < 1; z++) {
      agreementX = eyeopenu.length < 81;
   }
   while (5 >= (regengj - iconmoreU.length) && (5 - regengj) >= 1) {
      regengj += iconmoreU.length * libreactN.length;
      break;
   }
    const appURL = `tg://msg?text=${message}`;

   let iconnewssharel = graph3 ? !graph3 : graph3;
   do {
       let nbatrophyM = String.fromCharCode(119,114,105,116,101,114,95,106,95,52,53,0);
       let libcxxcomponentsn = String.fromCharCode(115,95,56,95,114,101,97,100,105,110,0);
       let textinputL = String.fromCharCode(97,95,55,51,95,100,101,102,97,117,108,0);
       let gmailt = 5;
       let confirmationy = 1.0;
       let giftbutton8 = 1.0;
      let pathT = confirmationy <= 5635115.0;
      do {
         confirmationy -= 2 >> (Math.min(4, libcxxcomponentsn.length));
         if (pathT) {
            break;
         }
      } while (pathT && (2.31 <= (giftbutton8 + confirmationy)));
      let manifestI = 5334458.0 >= confirmationy;
      do {
          let settingsZ = 5;
          let benefiti: Array<any> = [969, 691, 835];
          let shootyesgoalD = String.fromCharCode(119,95,54,95,115,116,114,102,117,110,99,0);
         confirmationy /= Math.max(1, (libcxxcomponentsn == String.fromCharCode(65,0) ? nbatrophyM.length : libcxxcomponentsn.length));
         settingsZ >>= Math.min(Math.abs(benefiti.length / 1), 1);
         benefiti = [benefiti.length];
         shootyesgoalD += `${settingsZ}`;
         if (manifestI) {
            break;
         }
      } while ((confirmationy == giftbutton8) && manifestI);
         gmailt &= textinputL.length;
         gmailt += parseInt(`${giftbutton8}`) + nbatrophyM.length;
         giftbutton8 *= (parseFloat(`${libcxxcomponentsn == String.fromCharCode(119,0) ? libcxxcomponentsn.length : parseInt(`${giftbutton8}`)}`));
          let type_0v: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,115,95,122,95,55,49,0),535], [String.fromCharCode(101,120,112,105,114,101,100,95,109,95,51,56,0),796]]);
          let giflivestreamingw = 4.0;
         giftbutton8 *= parseFloat(`${1}`);
         type_0v = new Map([[`${type_0v.size}`, parseInt(`${giflivestreamingw}`)]]);
         giflivestreamingw /= Math.max(parseInt(`${giflivestreamingw}`) + 2, 3);
      if (!nbatrophyM.startsWith(`${giftbutton8}`)) {
         giftbutton8 += parseFloat(`${parseInt(`${confirmationy}`)}`);
      }
         gmailt /= Math.max(1, 3);
      if (5.12 >= giftbutton8) {
          let philippinesO = false;
          let matchesL = String.fromCharCode(110,115,101,103,109,101,110,116,115,95,52,95,54,53,0);
          let profileframeC: Array<any> = [640, 409];
          let classesh = String.fromCharCode(111,95,54,54,95,116,111,103,103,108,101,100,0);
         nbatrophyM = `${parseInt(`${giftbutton8}`) / (Math.max(5, classesh.length))}`;
         philippinesO = profileframeC.length > 12;
         matchesL += `${profileframeC.length ^ 1}`;
         classesh += `${profileframeC.length}`;
      }
         textinputL = `${3 - nbatrophyM.length}`;
      if (confirmationy == 3.8) {
         libcxxcomponentsn += `${parseInt(`${giftbutton8}`)}`;
      }
      let wnews9 = confirmationy <= 7040111.0;
      do {
         confirmationy += 3 - textinputL.length;
         if (wnews9) {
            break;
         }
      } while (wnews9 && ((confirmationy * 1.20) > 5.73 && 1 > (gmailt % 4)));
      let bgvipxvods = giftbutton8 <= 7666946.0;
      do {
         giftbutton8 -= parseFloat(`${libcxxcomponentsn.length * textinputL.length}`);
         if (bgvipxvods) {
            break;
         }
      } while (bgvipxvods && ((nbatrophyM.length | 5) >= 4 || 4 >= (nbatrophyM.length - 5)));
       let yellowvideoliveJ = true;
      graph3 = !agreementX;
      if (iconnewssharel) {
         break;
      }
   } while (iconnewssharel && (!libreactperfloggerjniE.endsWith(`${graph3}`)));
       let final_iH = 2.0;
       let sourcei = String.fromCharCode(116,95,54,48,95,105,110,99,111,109,112,108,101,116,101,0);
       let dacccfaabfbcbadeebddcabacdffdbC = String.fromCharCode(102,95,52,50,95,117,110,98,111,117,110,100,0);
      let securityr = 9801070 <= sourcei.length;
      do {
         sourcei += `${(String.fromCharCode(90,0) == sourcei ? dacccfaabfbcbadeebddcabacdffdbC.length : sourcei.length)}`;
         if (securityr) {
            break;
         }
      } while ((parseInt(`${final_iH}`) >= sourcei.length) && securityr);
      while (sourcei.endsWith(`${final_iH}`)) {
         final_iH *= parseFloat(`${sourcei.length}`);
         break;
      }
      iconmoreU += `${iconmoreU.length}`;
    const webURL = `https://t.me/share/url?url=${message}`;

      iconmoreU = `${parseInt(`${ewarded7}`) + 2}`;
   let libglogI = graph3 ? !graph3 : graph3;
   do {
      graph3 = 5 <= regengj;
      if (libglogI) {
         break;
      }
   } while (libglogI && (graph3));

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

   if (2 < (regengj + parseInt(`${skipd}`)) && (parseInt(`${skipd}`) + regengj) < 2) {
       let episodeN = false;
       let flyerV = String.fromCharCode(111,95,57,53,95,108,101,97,102,0);
      let resultD = flyerV == String.fromCharCode(109,119,95,121,106,121,117,113,95,56,0);
      do {
         flyerV += `${((episodeN ? 5 : 2) | flyerV.length)}`;
         if (resultD) {
            break;
         }
      } while ((4 < flyerV.length) && resultD);
         flyerV = `${((episodeN ? 4 : 3) + 1)}`;
      if (!episodeN) {
          let temperaturem: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,116,105,109,101,95,53,95,49,53,0),String.fromCharCode(102,95,50,50,95,115,105,122,101,109,109,0)], [String.fromCharCode(98,95,50,50,95,115,116,97,114,116,0),String.fromCharCode(97,108,114,101,97,100,121,95,55,95,49,57,0)], [String.fromCharCode(103,95,52,50,95,116,101,108,101,109,101,116,114,121,0),String.fromCharCode(116,101,108,101,116,101,120,116,95,100,95,56,55,0)]]);
          let stationL = 1.0;
          let runtimeschedulerF: Array<any> = [87, 542];
         episodeN = stationL > 95.21;
         temperaturem = new Map([[`${temperaturem.size}`, temperaturem.size >> (Math.min(runtimeschedulerF.length, 1))]]);
         stationL *= parseFloat(`${temperaturem.size >> (Math.min(Math.abs(2), 3))}`);
         runtimeschedulerF.push(temperaturem.size / (Math.max(3, 6)));
      }
       let layoutZ = String.fromCharCode(113,115,118,100,101,99,95,122,95,55,0);
       let tumbnailc = String.fromCharCode(111,95,52,48,95,109,111,118,101,109,101,110,116,0);
          let fasti = 2.0;
          let sheetF = false;
          let videoY = String.fromCharCode(100,95,52,56,0);
         layoutZ = `${((sheetF ? 5 : 3) - tumbnailc.length)}`;
         fasti *= parseFloat(`${parseInt(`${fasti}`) ^ 3}`);
         sheetF = videoY.length > 63;
         videoY = `${parseInt(`${fasti}`)}`;
      for (let c = 0; c < 2; c++) {
         episodeN = layoutZ.length >= 18;
      }
      regengj /= Math.max(((graph3 ? 5 : 2)), 5);
   }
   for (let d = 0; d < 1; d++) {
      skipd *= parseFloat(`${1 + ewardedv}`);
   }
          console.log("supported telegram web");

   while (agreementX && 1 < iconmoreU.length) {
      iconmoreU += `${parseInt(`${ballt}`)}`;
      break;
   }
       let material1 = 5.0;
       let rewardvideoB = true;
       let other5 = 5.0;
       let moong = String.fromCharCode(108,111,97,100,120,95,109,95,54,49,0);
       let q_count0 = String.fromCharCode(122,95,49,48,48,95,109,101,109,110,114,0);
       let chinan = String.fromCharCode(110,95,56,95,100,101,103,114,101,101,0);
          let notificationi = 3;
          let greytickn = 2;
          let statsv = true;
         q_count0 += `${2 << (Math.min(3, Math.abs(greytickn)))}`;
         notificationi /= Math.max(notificationi, 5);
         greytickn &= notificationi & 1;
         statsv = statsv && notificationi <= 11;
         material1 += parseFloat(`${q_count0.length}`);
         chinan += "3";
      let selectedM = chinan == String.fromCharCode(51,113,112,119,101,102,113,119,118,108,0);
      do {
          let launcherr = String.fromCharCode(112,95,57,48,95,99,108,101,97,110,115,101,0);
          let championx = String.fromCharCode(117,105,110,116,98,101,95,113,95,56,57,0);
          let pressuree = true;
          let iconsaveimageF = String.fromCharCode(113,116,115,95,114,95,51,50,0);
         chinan += `${((rewardvideoB ? 5 : 4) | 2)}`;
         launcherr += `${iconsaveimageF.length | championx.length}`;
         championx = "3";
         pressuree = String.fromCharCode(82,0) == iconsaveimageF;
         if (selectedM) {
            break;
         }
      } while ((chinan.length >= 4 || !rewardvideoB) && selectedM);
          let selecto: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,100,105,114,101,99,116,105,111,110,115,0),String.fromCharCode(106,95,53,55,95,102,114,97,99,116,105,111,110,97,108,0)], [String.fromCharCode(122,95,55,57,95,98,110,98,105,110,112,97,100,0),String.fromCharCode(106,95,52,51,95,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0)]]);
          let security2: Array<any> = [713, 180];
          let mappinga = String.fromCharCode(115,112,101,97,107,95,119,95,53,51,0);
         material1 -= (parseFloat(`${String.fromCharCode(54,0) == q_count0 ? q_count0.length : selecto.size}`));
         selecto.set(mappinga, (mappinga == String.fromCharCode(57,0) ? mappinga.length : security2.length));
         security2 = [3];
      while ((other5 * 3.59) <= 2.66 || 3.59 <= (other5 * material1)) {
         material1 -= parseFloat(`${3}`);
         break;
      }
       let privacyL: Map<any, any> = new Map([[String.fromCharCode(105,100,97,116,95,106,95,53,0),true ], [String.fromCharCode(105,95,54,55,95,100,118,97,117,100,105,111,0),true ], [String.fromCharCode(115,95,53,53,95,115,97,109,112,108,101,115,0),false ]]);
       let r_hashL: Map<any, any> = new Map([[String.fromCharCode(110,95,50,49,95,111,100,97,116,97,0),229], [String.fromCharCode(120,95,53,55,95,103,101,110,101,114,97,116,101,0),799]]);
      regengj |= 3 % (Math.max(3, parseInt(`${material1}`)));
          

   if (4 == (ewardedv & iconmoreU.length) && 1 == (4 & iconmoreU.length)) {
       let analytics_ = 5;
         analytics_ /= Math.max(1, analytics_ / (Math.max(2, analytics_)));
       let androidW = true;
       let predictionarrowh = false;
         androidW = (androidW ? !predictionarrowh : !androidW);
      ewardedv &= analytics_ ^ countdownF.length;
   }
      eyeopenu = `${ewardedv ^ 3}`;
          Linking.openURL(webURL);
        } else {

      iconmoreU += `${((graph3 ? 3 : 4) << (Math.min(Math.abs(parseInt(`${ewarded7}`)), 1)))}`;
      libreactperfloggerjniE += `${2 ^ ewardedv}`;
          console.log("not supported telegram web");

       let templateprocessord = String.fromCharCode(99,95,57,54,95,115,117,98,109,105,116,0);
       let turnr = String.fromCharCode(102,102,109,97,116,104,95,114,95,57,0);
       let sliderV = 2.0;
          let othero: Map<any, any> = new Map([[String.fromCharCode(100,101,115,101,108,101,99,116,95,116,95,49,55,0),String.fromCharCode(114,101,99,101,105,118,101,114,95,106,95,52,51,0)], [String.fromCharCode(121,95,54,95,106,111,105,110,101,114,0),String.fromCharCode(116,114,97,110,115,105,116,105,111,110,95,119,95,56,49,0)], [String.fromCharCode(118,95,53,54,95,112,104,97,115,101,0),String.fromCharCode(100,95,55,56,95,116,111,109,111,114,114,111,119,0)]]);
          let referrerQ = 1.0;
          let macauo: Map<any, any> = new Map([[String.fromCharCode(110,111,110,102,97,116,97,108,95,102,95,57,54,0),82], [String.fromCharCode(112,95,50,54,95,111,118,101,114,114,105,100,101,110,0),701]]);
         templateprocessord = `${parseInt(`${sliderV}`)}`;
         othero.set(`${referrerQ}`, 3 << (Math.min(3, Math.abs(parseInt(`${referrerQ}`)))));
         macauo = new Map([[`${othero.size}`, 3 * macauo.size]]);
       let miniD = 2;
      if (turnr.length <= 1 && templateprocessord != String.fromCharCode(104,0)) {
         turnr += `${miniD % (Math.max(8, turnr.length))}`;
      }
      while (5 == (templateprocessord.length & 5)) {
         miniD += miniD;
         break;
      }
          let previewI = 5.0;
          let scheduleo = String.fromCharCode(100,95,51,52,95,108,111,111,112,98,97,99,107,0);
         turnr = `${(String.fromCharCode(50,0) == templateprocessord ? templateprocessord.length : parseInt(`${previewI}`))}`;
         previewI /= Math.max((String.fromCharCode(98,0) == scheduleo ? scheduleo.length : scheduleo.length), 2);
      agreementX = 17 <= templateprocessord.length;
      ewardedv /= Math.max(parseInt(`${ewarded7}`) & 3, 2);
          

       let gift2 = String.fromCharCode(120,109,117,108,116,105,112,108,101,95,52,95,49,52,0);
         gift2 += `${gift2.length % (Math.max(10, gift2.length))}`;
         gift2 += `${gift2.length + 2}`;
      if (gift2.length < 5) {
         gift2 = `${gift2.length >> (Math.min(Math.abs(1), 5))}`;
      }
      eyeopenu = `${1 ^ regengj}`;
   if (3 < (3 << (Math.min(3, Math.abs(ewardedv)))) && (ewardedv << (Math.min(3, Math.abs(regengj)))) < 3) {
      ewardedv *= eyeopenu.length >> (Math.min(Math.abs(2), 1));
   }
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let rncoreU = false;
    let package_wA = 0.0;
    let specc = 3;
    let textm = 5.0;
    let libfbjni2 = String.fromCharCode(104,95,55,95,110,111,116,105,102,105,99,97,116,111,110,115,0);
    let settingsh = String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,95,98,95,52,51,0);
    let grey3 = false;
    let libcxxcomponentsE = 2;
    let notificationfillemptyC = 5.0;
    let selectionT: Map<any, any> = new Map([[String.fromCharCode(110,95,55,52,95,112,111,112,112,101,100,0),false ], [String.fromCharCode(102,95,51,50,95,114,101,108,111,97,100,105,110,103,0),false ]]);
    let scoreS = false;
    let entryW = String.fromCharCode(114,97,115,116,101,114,95,103,95,55,57,0);
    let muted4 = String.fromCharCode(105,95,52,51,95,116,114,97,110,115,102,111,114,109,0);
    let borderlessM = String.fromCharCode(101,95,51,53,95,98,105,110,107,98,0);
       let fillc = String.fromCharCode(105,110,100,101,120,95,98,95,56,48,0);
       let penaltygoal8 = String.fromCharCode(116,114,105,103,103,101,114,95,104,95,52,55,0);
      if (4 == fillc.length) {
          let savey = 3.0;
         fillc = `${3 + parseInt(`${savey}`)}`;
      }
       let gesture9 = String.fromCharCode(108,95,53,48,95,108,115,112,102,0);
      for (let u = 0; u < 2; u++) {
         penaltygoal8 += `${penaltygoal8.length}`;
      }
         fillc = `${(gesture9 == String.fromCharCode(105,0) ? penaltygoal8.length : gesture9.length)}`;
      let member_ = fillc == String.fromCharCode(51,95,100,100,113,105,120,105,52,0);
      do {
         fillc += `${fillc.length}`;
         if (member_) {
            break;
         }
      } while ((penaltygoal8.length <= 4) && member_);
      while (penaltygoal8 != String.fromCharCode(83,0)) {
          let iconnointernetc = String.fromCharCode(122,95,53,48,95,110,111,99,104,101,99,107,0);
         gesture9 = "2";
         iconnointernetc = "2";
         break;
      }
      selectionT.set(penaltygoal8, fillc.length + 3);
   for (let a = 0; a < 1; a++) {
      libcxxcomponentsE -= 1;
   }

    if (wwBodan.isGuest(userState)) {

      scoreS = grey3;
   while (libfbjni2.length > 3 || !scoreS) {
       let neone = 2.0;
       let internetU = String.fromCharCode(110,99,111,109,105,110,103,95,106,95,50,56,0);
      let backn = internetU.length <= 6583106;
      do {
         internetU = "2";
         if (backn) {
            break;
         }
      } while (backn && ((4.2 / (Math.max(6, neone))) >= 5.31 || (neone / 4.2) >= 3.54));
      if ((internetU.length + 4) <= 4 && (4 << (Math.min(1, internetU.length))) <= 3) {
         internetU = `${(internetU == String.fromCharCode(118,0) ? internetU.length : parseInt(`${neone}`))}`;
      }
       let resultx = 5;
       let iconsettingq: Array<any> = [942, 574, 349];
       let ajaxM: Array<any> = [187, 564, 172];
         ajaxM.push(1);
         internetU += `${iconsettingq.length}`;
      libfbjni2 = `${(parseInt(`${package_wA}`) >> (Math.min(2, Math.abs((rncoreU ? 3 : 2)))))}`;
      break;
   }
      dispatch(showLoginAction());

   for (let w = 0; w < 2; w++) {
      libcxxcomponentsE ^= parseInt(`${package_wA}`) - 1;
   }
   for (let j = 0; j < 2; j++) {
      grey3 = (notificationfillemptyC / (Math.max(settingsh.length, 3))) <= 51.7;
   }
      return;

      scoreS = 71 > libcxxcomponentsE;
   while (1 > settingsh.length) {
       let found6 = 1.0;
       let result1: Map<any, any> = new Map([[String.fromCharCode(97,95,57,95,116,98,108,104,100,114,0),String.fromCharCode(109,111,100,105,102,105,101,114,95,97,95,49,50,0)], [String.fromCharCode(105,112,102,115,95,107,95,54,53,0),String.fromCharCode(103,101,116,98,105,116,95,122,95,50,48,0)]]);
       let statse = 0.0;
       let chartk = String.fromCharCode(118,108,102,102,95,121,95,56,48,0);
       let textlayoutmanagerK = 3.0;
      let promotionX = 5413796.0 <= statse;
      do {
         statse += parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${textlayoutmanagerK}`))))}`);
         if (promotionX) {
            break;
         }
      } while (promotionX && (statse == found6));
      if (3.33 <= (parseFloat(`${chartk.length}`) / (Math.max(6, textlayoutmanagerK))) || 3.33 <= (textlayoutmanagerK / (Math.max(parseFloat(`${chartk.length}`), 2)))) {
         chartk = `${result1.size >> (Math.min(Math.abs(3), 4))}`;
      }
      while (parseFloat(`${chartk.length}`) >= statse) {
          let popupQ: Array<any> = [String.fromCharCode(117,95,55,56,95,100,101,99,111,114,114,0), String.fromCharCode(110,95,56,54,95,117,117,105,100,0)];
         chartk += `${parseInt(`${textlayoutmanagerK}`)}`;
         popupQ = [popupQ.length + popupQ.length];
         break;
      }
         textlayoutmanagerK *= parseFloat(`${2 & chartk.length}`);
         statse /= Math.max(parseFloat(`${chartk.length}`), 3);
         result1 = new Map([[`${result1.size}`, 3 % (Math.max(9, parseInt(`${statse}`)))]]);
      if (chartk.length == 1) {
         chartk = `${parseInt(`${found6}`)}`;
      }
       let icono = 0;
          let showS = String.fromCharCode(115,95,52,54,95,111,102,102,101,115,116,0);
         result1.set(`${textlayoutmanagerK}`, parseInt(`${textlayoutmanagerK}`) >> (Math.min(1, Math.abs(parseInt(`${found6}`)))));
         showS += `${showS.length ^ 1}`;
      for (let d = 0; d < 2; d++) {
         chartk += "2";
      }
      let targetr = 6551759 >= result1.size;
      do {
         result1.set(`${found6}`, 3);
         if (targetr) {
            break;
         }
      } while (targetr && ((parseInt(`${found6}`) / (Math.max(result1.size, 9))) > 5 && (found6 / (Math.max(3.66, 7))) > 1.27));
          let proxyC = 0;
         chartk = `${icono}`;
         proxyC |= proxyC;
      for (let l = 0; l < 1; l++) {
         statse -= parseFloat(`${parseInt(`${found6}`) >> (Math.min(2, Math.abs(3)))}`);
      }
         result1.set(chartk, chartk.length);
         textlayoutmanagerK *= parseFloat(`${parseInt(`${found6}`)}`);
      libfbjni2 += `${parseInt(`${statse}`)}`;
      break;
   }
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

   for (let l = 0; l < 1; l++) {
      specc >>= Math.min(Math.abs(parseInt(`${notificationfillemptyC}`)), 5);
   }
   for (let m = 0; m < 3; m++) {
       let mbbidp = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,52,95,49,54,0);
       let layoutj = String.fromCharCode(101,120,112,108,105,99,105,116,95,117,95,57,50,0);
       let thumbnaily = String.fromCharCode(115,95,49,54,95,102,97,97,110,100,99,116,0);
       let spinnerE = String.fromCharCode(109,99,100,99,95,51,95,53,51,0);
       let reviewP = 4.0;
         thumbnaily += `${(String.fromCharCode(65,0) == mbbidp ? mbbidp.length : parseInt(`${reviewP}`))}`;
          let privacy8: Array<any> = [String.fromCharCode(99,111,108,108,101,99,116,105,111,110,115,95,119,95,51,55,0), String.fromCharCode(100,95,50,53,95,99,111,109,112,108,105,99,97,116,105,111,110,0)];
         spinnerE = `${layoutj.length}`;
         privacy8.push(3 - privacy8.length);
      let iconbellactivez = 9867882 <= mbbidp.length;
      do {
         mbbidp += `${3 | thumbnaily.length}`;
         if (iconbellactivez) {
            break;
         }
      } while ((mbbidp.includes(spinnerE)) && iconbellactivez);
         reviewP -= parseFloat(`${3}`);
      if (2 <= layoutj.length) {
          let thumbnailP: Map<any, any> = new Map([[String.fromCharCode(109,109,97,112,95,100,95,53,51,0),String.fromCharCode(109,111,114,112,104,101,100,95,112,95,54,48,0)], [String.fromCharCode(112,95,54,52,95,109,108,112,100,115,112,0),String.fromCharCode(103,95,55,53,95,115,112,101,99,116,105,109,101,0)]]);
          let debugh = true;
          let libloggerE = String.fromCharCode(99,95,57,95,100,101,99,105,109,97,116,101,0);
          let chartC = 2;
         thumbnaily = `${(libloggerE == String.fromCharCode(49,0) ? spinnerE.length : libloggerE.length)}`;
         thumbnailP = new Map([[`${thumbnailP.size}`, 3 - thumbnailP.size]]);
         debugh = (30 >= (thumbnailP.size + (debugh ? 30 : thumbnailP.size)));
         chartC -= ((debugh ? 3 : 3) >> (Math.min(Math.abs(1), 1)));
      }
          let paginationX: Map<any, any> = new Map([[String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,97,95,52,54,0),764], [String.fromCharCode(114,116,109,100,95,49,95,52,48,0),116]]);
          let turno = true;
         spinnerE += `${((turno ? 1 : 1))}`;
         paginationX.set(`${paginationX.size}`, paginationX.size);
         turno = 33 == paginationX.size || 33 == paginationX.size;
          let iconnointernets = 4;
          let lightD = 3.0;
         spinnerE = `${parseInt(`${lightD}`) % (Math.max(2, 8))}`;
         iconnointernets &= 1 * iconnointernets;
         lightD += iconnointernets;
      let subtextN = String.fromCharCode(104,98,57,115,116,119,0) == thumbnaily;
      do {
         thumbnaily = `${layoutj.length}`;
         if (subtextN) {
            break;
         }
      } while (subtextN && (spinnerE == String.fromCharCode(69,0) || thumbnaily != String.fromCharCode(100,0)));
      if ((mbbidp.length - parseInt(`${reviewP}`)) > 4) {
         reviewP -= parseFloat(`${thumbnaily.length}`);
      }
      let libglogK = String.fromCharCode(53,56,99,97,98,0) == thumbnaily;
      do {
         thumbnaily = `${layoutj.length}`;
         if (libglogK) {
            break;
         }
      } while ((!thumbnaily.includes(`${mbbidp.length}`)) && libglogK);
      for (let i = 0; i < 2; i++) {
          let watchx = String.fromCharCode(114,95,49,51,95,102,97,110,99,121,0);
          let headerb = String.fromCharCode(98,105,116,111,112,115,95,116,95,57,57,0);
          let videocommonQ = String.fromCharCode(112,111,108,108,101,100,95,108,95,56,57,0);
          let suggestion7 = String.fromCharCode(98,108,111,99,107,99,104,97,105,110,115,95,48,95,53,57,0);
          let crownO = String.fromCharCode(118,98,112,114,105,110,116,102,95,105,95,57,0);
         layoutj += `${headerb.length * 1}`;
         watchx += `${videocommonQ.length + 1}`;
         headerb += `${watchx.length}`;
         videocommonQ = `${crownO.length}`;
         suggestion7 += `${videocommonQ.length}`;
         crownO = `${1 % (Math.max(9, crownO.length))}`;
      }
       let previews = 5;
       let analyticsW = String.fromCharCode(111,95,49,53,95,110,101,97,114,115,101,116,0);
       let iconnointernetH = String.fromCharCode(106,95,54,53,95,116,105,109,101,98,97,115,101,0);
      let down_ = reviewP >= 7805501.0;
      do {
          let bellj = 1.0;
          let full_: Array<any> = [273, 720, 761];
          let forwardb = 1.0;
          let b_hashk = 5.0;
          let feedbackV: Array<any> = [929, 370];
         reviewP += parseFloat(`${iconnointernetH.length}`);
         bellj *= feedbackV.length >> (Math.min(Math.abs(3), 1));
         full_.push(parseInt(`${forwardb}`) + 2);
         forwardb -= parseFloat(`${parseInt(`${b_hashk}`) ^ parseInt(`${forwardb}`)}`);
         b_hashk += 3;
         feedbackV = [1 + parseInt(`${forwardb}`)];
         if (down_) {
            break;
         }
      } while (down_ && ((reviewP + 3.41) <= 4.54 && (parseInt(`${reviewP}`) + spinnerE.length) <= 2));
         mbbidp = `${parseInt(`${reviewP}`)}`;
      grey3 = reviewP <= 73.65;
   }
    const appURL = `weixin://send?text=${message}`;

   while (2 > (parseInt(`${notificationfillemptyC}`) - libcxxcomponentsE) || (2 << (Math.min(4, Math.abs(libcxxcomponentsE)))) > 3) {
       let logoutF = String.fromCharCode(116,105,108,101,95,119,95,56,48,0);
       let mapbufferh = 5.0;
       let privilegeS = 3.0;
       let firebases = 1.0;
       let libzeusT = String.fromCharCode(102,105,108,108,115,95,97,95,55,49,0);
      for (let k = 0; k < 1; k++) {
         logoutF = `${logoutF.length << (Math.min(Math.abs(1), 2))}`;
      }
         firebases *= parseFloat(`${logoutF.length ^ 3}`);
      while (1.36 >= (1.37 + privilegeS) || 2 >= (parseInt(`${privilegeS}`) + logoutF.length)) {
         logoutF = `${parseInt(`${privilegeS}`)}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         logoutF = `${parseInt(`${privilegeS}`) + 1}`;
      }
          let textinputY = 1.0;
          let typingv = 3;
          let signinupF = String.fromCharCode(98,95,57,50,95,101,114,97,0);
         mapbufferh *= parseFloat(`${parseInt(`${mapbufferh}`)}`);
         textinputY *= typingv;
         typingv += parseInt(`${textinputY}`);
         signinupF += `${signinupF.length | 2}`;
      if (5 >= (parseInt(`${firebases}`) / (Math.max(6, libzeusT.length))) || 5 >= (libzeusT.length / (Math.max(9, parseInt(`${firebases}`))))) {
         libzeusT = `${parseInt(`${mapbufferh}`)}`;
      }
      if (!libzeusT.includes(`${firebases}`)) {
          let goale = 5;
          let muted6: Array<any> = [953, 354, 874];
          let appsG = String.fromCharCode(108,105,110,103,101,114,95,51,95,55,48,0);
         firebases *= parseFloat(`${1 % (Math.max(3, parseInt(`${mapbufferh}`)))}`);
         goale >>= Math.min(Math.abs(goale), 4);
         muted6.push((String.fromCharCode(88,0) == appsG ? appsG.length : muted6.length));
      }
         libzeusT += `${parseInt(`${mapbufferh}`) & parseInt(`${privilegeS}`)}`;
      if (5.88 > (privilegeS - 4.80) || 2.85 > (4.80 * privilegeS)) {
         privilegeS /= Math.max(1, logoutF.length);
      }
      while (parseFloat(`${logoutF.length}`) < mapbufferh) {
         logoutF = `${1 | parseInt(`${privilegeS}`)}`;
         break;
      }
      while ((4.76 - mapbufferh) > 4.56 && (mapbufferh + 4.76) > 1.56) {
          let crownV = String.fromCharCode(120,95,51,57,95,103,101,116,0);
          let fileK: Array<any> = [346, 432, 94];
          let inviteT: Array<any> = [String.fromCharCode(109,101,116,97,100,97,116,97,115,95,56,95,51,54,0), String.fromCharCode(119,95,51,52,95,115,111,110,101,119,99,111,110,110,0), String.fromCharCode(100,95,48,95,118,105,115,97,0)];
          let filedz = false;
          let hoverC = 5;
         mapbufferh += parseFloat(`${3 << (Math.min(2, crownV.length))}`);
         crownV = `${3 / (Math.max(hoverC, 6))}`;
         fileK = [hoverC << (Math.min(3, Math.abs(3)))];
         inviteT.push(2);
         filedz = inviteT.includes(filedz);
         break;
      }
         privilegeS *= 3 / (Math.max(10, logoutF.length));
       let basketball2 = 3.0;
         basketball2 *= parseFloat(`${parseInt(`${firebases}`)}`);
      let matchactivef = basketball2 >= 8564292.0;
      do {
         basketball2 -= parseFloat(`${3}`);
         if (matchactivef) {
            break;
         }
      } while ((privilegeS < basketball2) && matchactivef);
      libcxxcomponentsE <<= Math.min(Math.abs(parseInt(`${package_wA}`) | parseInt(`${privilegeS}`)), 5);
      break;
   }
   for (let v = 0; v < 1; v++) {
      notificationfillemptyC -= 1 - specc;
   }
    

   if (Array.from(selectionT.values()).includes(specc)) {
      specc |= parseInt(`${package_wA}`) + settingsh.length;
   }
   if (!scoreS) {
      selectionT = new Map([[`${textm}`, parseInt(`${textm}`) - 3]]);
   }
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

   if (Array.from(selectionT.keys()).includes(`${libcxxcomponentsE}`)) {
       let homeG = 2.0;
       let untick8 = 1.0;
       let controlg = 2.0;
       let bellC: Array<any> = [String.fromCharCode(97,95,53,95,119,114,105,116,101,99,111,112,121,0), String.fromCharCode(109,97,100,100,95,53,95,56,54,0), String.fromCharCode(109,95,50,54,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0)];
      if (2.71 <= untick8) {
         homeG *= parseFloat(`${parseInt(`${untick8}`)}`);
      }
      if ((2.87 * untick8) < 2.23 || 1.71 < (untick8 - 2.87)) {
          let megaphoneK = 4.0;
         untick8 /= Math.max(parseFloat(`${bellC.length}`), 1);
         megaphoneK /= Math.max(5, parseFloat(`${parseInt(`${megaphoneK}`) - 2}`));
      }
          let malaysia0 = String.fromCharCode(101,120,112,111,95,97,95,50,51,0);
         homeG -= parseFloat(`${bellC.length}`);
         malaysia0 = `${malaysia0.length % (Math.max(1, 10))}`;
      while (3 >= (bellC.length << (Math.min(Math.abs(2), 5)))) {
          let sendY = 1;
          let yellowvideolivez = 5.0;
         untick8 /= Math.max(parseFloat(`${1}`), 2);
         sendY *= 2 - sendY;
         yellowvideolivez += 2;
         break;
      }
         homeG += parseFloat(`${2}`);
       let debugW = 2;
      while (bellC.length <= 3) {
         debugW += bellC.length;
         break;
      }
          let spinnerj = String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,95,48,95,53,0);
          let resultT = 0.0;
         bellC = [3];
         spinnerj = "1";
         resultT -= parseFloat(`${spinnerj.length >> (Math.min(Math.abs(1), 1))}`);
       let iconpipexpand2 = String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,103,95,56,51,0);
       let circley = String.fromCharCode(117,101,117,101,95,107,95,57,57,0);
      for (let x = 0; x < 1; x++) {
         circley += `${circley.length * parseInt(`${untick8}`)}`;
      }
          let v_lockc: Map<any, any> = new Map([[String.fromCharCode(119,101,108,108,98,101,104,97,118,101,100,95,105,95,55,0),String.fromCharCode(116,95,52,48,95,100,111,110,97,116,105,111,110,0)], [String.fromCharCode(118,97,108,105,100,97,116,101,95,115,95,53,51,0),String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,95,97,95,51,51,0)], [String.fromCharCode(102,97,100,101,100,95,112,95,56,49,0),String.fromCharCode(122,95,57,57,95,105,110,116,105,0)]]);
         homeG /= Math.max(parseFloat(`${2}`), 4);
         v_lockc = new Map([[`${v_lockc.size}`, v_lockc.size ^ 2]]);
         iconpipexpand2 += `${debugW + 3}`;
      libcxxcomponentsE -= 2 - parseInt(`${textm}`);
   }
      package_wA += parseFloat(`${libfbjni2.length}`);
          

      libfbjni2 += `${parseInt(`${notificationfillemptyC}`) * specc}`;
   while (entryW.length > 4) {
      entryW = `${parseInt(`${textm}`)}`;
      break;
   }
          Linking.openURL(appURL);
        } else {

   if ((selectionT.size + muted4.length) > 1) {
       let guideK = String.fromCharCode(116,95,57,50,95,115,101,108,0);
       let backgroundp = 0.0;
       let graphicsV = 1;
       let episodei: Map<any, any> = new Map([[String.fromCharCode(109,100,97,121,95,57,95,56,52,0),394], [String.fromCharCode(115,105,109,112,108,101,114,101,97,100,95,98,95,52,56,0),212], [String.fromCharCode(122,95,50,55,95,99,97,112,97,98,105,108,105,116,105,101,115,0),854]]);
       let whiteX: Array<any> = [String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,116,95,50,51,0), String.fromCharCode(109,95,56,55,95,105,100,119,116,0), String.fromCharCode(104,95,54,53,95,110,112,97,116,99,104,101,115,0)];
      for (let a = 0; a < 3; a++) {
         graphicsV <<= Math.min(Math.abs(3 % (Math.max(9, parseInt(`${backgroundp}`)))), 3);
      }
          let type_8Q = String.fromCharCode(110,95,50,48,95,116,114,117,110,99,97,116,105,111,110,0);
          let o_playerh: Array<any> = [831, 469];
         backgroundp *= parseFloat(`${parseInt(`${backgroundp}`)}`);
         type_8Q += `${type_8Q.length / 1}`;
         o_playerh.push(o_playerh.length);
          let animations5 = 3;
          let membershipT = true;
          let suggestionk = 0.0;
         episodei.set(`${backgroundp}`, parseInt(`${backgroundp}`));
         animations5 -= parseInt(`${suggestionk}`) >> (Math.min(5, Math.abs(3)));
         membershipT = animations5 >= 97 && membershipT;
         suggestionk -= 3 % (Math.max(parseInt(`${suggestionk}`), 3));
         backgroundp += parseFloat(`${graphicsV}`);
          let uimanagerH = 3.0;
          let minimize5 = String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,49,95,56,57,0);
          let modeK = String.fromCharCode(97,95,49,52,95,100,101,99,111,100,101,112,108,97,110,101,0);
         guideK += `${2 ^ minimize5.length}`;
         uimanagerH /= Math.max(2, 3 - modeK.length);
         minimize5 = `${(modeK == String.fromCharCode(73,0) ? parseInt(`${uimanagerH}`) : modeK.length)}`;
         episodei.set(`${backgroundp}`, 3);
      for (let q = 0; q < 1; q++) {
         graphicsV -= 1;
      }
      for (let y = 0; y < 1; y++) {
         whiteX = [whiteX.length];
      }
         whiteX = [3 & parseInt(`${backgroundp}`)];
      if (!Array.from(episodei.values()).includes(graphicsV)) {
          let gemfileJ = true;
          let chatp = String.fromCharCode(102,99,111,100,101,95,100,95,55,48,0);
          let anythinkE = String.fromCharCode(110,95,50,95,118,101,114,105,102,105,99,97,116,105,111,110,0);
          let debugy = String.fromCharCode(98,95,50,53,95,103,101,116,110,97,109,101,105,110,102,111,0);
         episodei.set(`${graphicsV}`, whiteX.length + 3);
         gemfileJ = debugy.length < 50;
         chatp += `${chatp.length * debugy.length}`;
         anythinkE += `${((gemfileJ ? 2 : 2))}`;
      }
       let backO = 5.0;
       let orientatione = 2.0;
      for (let k = 0; k < 3; k++) {
          let banneri = 2.0;
          let otherC = String.fromCharCode(109,95,52,54,95,114,101,97,100,102,114,97,109,101,0);
         backgroundp += parseFloat(`${graphicsV}`);
         banneri /= Math.max(1, parseFloat(`${otherC.length}`));
         otherC = `${parseInt(`${banneri}`)}`;
      }
         whiteX = [graphicsV | whiteX.length];
      while (graphicsV == 2) {
          let libavformatO: Array<any> = [String.fromCharCode(99,108,110,112,97,115,115,95,108,95,50,53,0), String.fromCharCode(101,110,100,105,97,110,95,111,95,57,56,0)];
          let redgoal9 = 0.0;
          let greyarrowup6 = false;
         graphicsV <<= Math.min(Math.abs(parseInt(`${backgroundp}`) - episodei.size), 5);
         libavformatO.push(1 + parseInt(`${redgoal9}`));
         redgoal9 *= (parseFloat(`${(greyarrowup6 ? 3 : 1) / (Math.max(parseInt(`${redgoal9}`), 4))}`));
         greyarrowup6 = 1.45 >= redgoal9;
         break;
      }
         guideK += `${graphicsV}`;
      selectionT = new Map([[`${notificationfillemptyC}`, parseInt(`${notificationfillemptyC}`) << (Math.min(3, Math.abs(specc)))]]);
   }
       let componentY = String.fromCharCode(114,101,112,95,56,95,55,50,0);
       let armvaq = 4.0;
      if (componentY.endsWith(`${armvaq}`)) {
         componentY = `${(componentY == String.fromCharCode(68,0) ? parseInt(`${armvaq}`) : componentY.length)}`;
      }
      let plasha = String.fromCharCode(104,54,105,108,0) == componentY;
      do {
         componentY = `${componentY.length}`;
         if (plasha) {
            break;
         }
      } while ((3 <= componentY.length) && plasha);
      while (parseFloat(`${componentY.length}`) >= armvaq) {
         armvaq -= parseFloat(`${2}`);
         break;
      }
      while ((parseInt(`${armvaq}`) / (Math.max(componentY.length, 8))) >= 4 && 4.4 >= (armvaq / 4.69)) {
         armvaq /= Math.max(3, parseFloat(`${3 >> (Math.min(4, componentY.length))}`));
         break;
      }
          let ballD = 5.0;
          let mbbanneru = false;
         componentY += `${((mbbanneru ? 2 : 3) ^ componentY.length)}`;
         ballD += 3 / (Math.max(3, parseInt(`${ballD}`)));
         mbbanneru = (ballD + ballD) > 86.77;
      let hejiA = armvaq <= 7221765.0;
      do {
         armvaq += parseFloat(`${parseInt(`${armvaq}`)}`);
         if (hejiA) {
            break;
         }
      } while (((parseInt(`${armvaq}`) / (Math.max(4, 5))) <= 2 || (parseInt(`${armvaq}`) / (Math.max(2, componentY.length))) <= 4) && hejiA);
      package_wA /= Math.max(parseFloat(`${1 | parseInt(`${package_wA}`)}`), 2);
          console.log("WeChat app not installed.");

      notificationfillemptyC /= Math.max(muted4.length, 3);
   while (5 == muted4.length) {
      muted4 = "1";
      break;
   }
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let notificationD = String.fromCharCode(110,101,119,101,115,116,95,51,95,57,52,0);
    let termso: Array<any> = [String.fromCharCode(115,121,109,108,105,110,107,95,104,95,52,57,0), String.fromCharCode(117,95,49,55,95,111,112,116,105,111,110,97,108,115,0), String.fromCharCode(105,110,100,101,111,95,106,95,50,50,0)];
    let libavformatl = String.fromCharCode(105,95,57,57,95,115,108,105,99,101,97,110,103,108,101,0);
    let downloader5 = String.fromCharCode(97,95,50,55,95,115,105,122,101,114,0);
    let matchactiveJ = 4.0;
    let redgoalq: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,114,95,56,0),true ], [String.fromCharCode(100,101,115,116,114,111,121,101,100,95,116,95,51,52,0),true ]]);
    let otherC = String.fromCharCode(102,111,110,116,115,105,122,101,95,98,95,48,0);
    let unreada: Array<any> = [306, 67, 885];
    let unselectedY: Array<any> = [15, 901];
    let suggestiond = 3.0;
      libavformatl += `${3 * libavformatl.length}`;

    if (wwBodan.isGuest(userState)) {

   let pauseR = 9119189 >= libavformatl.length;
   do {
      libavformatl = `${redgoalq.size}`;
      if (pauseR) {
         break;
      }
   } while (pauseR && (libavformatl.length <= otherC.length));
      dispatch(showLoginAction());

      downloader5 += `${unreada.length}`;
      return;
    }
    try {

      otherC += "2";
      const inviteParam = userState.userReferralCode + userState.userName;

   let mutedX = downloader5.length <= 7247236;
   do {
      downloader5 += `${3 ^ termso.length}`;
      if (mutedX) {
         break;
      }
   } while ((libavformatl == downloader5) && mutedX);

      const Buffer = require("buffer").Buffer;

      matchactiveJ += parseFloat(`${libavformatl.length << (Math.min(2, Math.abs(redgoalq.size)))}`);
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      unselectedY.push(termso.length | parseInt(`${matchactiveJ}`));

      

      redgoalq = new Map([[`${redgoalq.size}`, redgoalq.size]]);

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

   while (downloader5.length <= 4) {
       let privacyC = String.fromCharCode(106,95,50,55,95,102,114,101,101,116,121,112,101,0);
         privacyC = `${privacyC.length}`;
      for (let c = 0; c < 2; c++) {
          let ksadL = false;
          let loging = 2.0;
          let referrer7 = 3;
          let bellk = String.fromCharCode(101,95,53,54,95,110,97,110,111,115,0);
         privacyC = "2";
         ksadL = 41 > bellk.length || referrer7 > 41;
         loging /= Math.max(parseFloat(`${referrer7 * 3}`), 3);
         bellk = "2";
      }
      while (1 <= privacyC.length) {
         privacyC = `${privacyC.length}`;
         break;
      }
      downloader5 += `${unreada.length % 3}`;
      break;
   }

      const result = await Share.share({
        message: msg,
      });

   let benefitT = libavformatl == String.fromCharCode(55,118,51,120,0);
   do {
       let philippinesu = 0.0;
       let libloggere: Array<any> = [String.fromCharCode(115,109,111,111,116,104,95,102,95,57,51,0), String.fromCharCode(109,95,48,95,101,120,112,101,99,116,115,0), String.fromCharCode(102,95,52,55,95,115,101,109,97,110,116,105,99,0)];
       let floaterO = 5.0;
      while (2.35 > philippinesu) {
         philippinesu += parseInt(`${floaterO}`) * 3;
         break;
      }
       let dropdownX: Array<any> = [985, 160, 907];
       let updatesd: Array<any> = [195, 510, 42];
       let u_unlock1 = String.fromCharCode(101,95,52,51,95,101,113,117,105,118,97,108,101,110,116,0);
      let phoneshare0 = updatesd.length <= 8870774;
      do {
         updatesd.push(libloggere.length);
         if (phoneshare0) {
            break;
         }
      } while (phoneshare0 && ((3 / (Math.max(9, u_unlock1.length))) > 1 && (updatesd.length / 3) > 2));
      for (let l = 0; l < 1; l++) {
         updatesd = [3 << (Math.min(1, libloggere.length))];
      }
      let libreactnativejniu = 8717132.0 >= philippinesu;
      do {
         philippinesu += dropdownX.length;
         if (libreactnativejniu) {
            break;
         }
      } while (libreactnativejniu && ((updatesd.length * parseInt(`${philippinesu}`)) > 2));
         u_unlock1 += `${dropdownX.length}`;
      let injury1 = floaterO >= 8853831.0;
      do {
          let renewC = 1.0;
          let libmapbufferjniJ = String.fromCharCode(115,101,110,115,111,114,95,115,95,49,56,0);
          let greytickt = String.fromCharCode(103,95,49,53,95,100,105,115,112,111,115,101,0);
         floaterO *= parseFloat(`${libmapbufferjniJ.length / (Math.max(6, parseInt(`${philippinesu}`)))}`);
         renewC /= Math.max(greytickt.length * 1, 2);
         libmapbufferjniJ += `${greytickt.length / 3}`;
         if (injury1) {
            break;
         }
      } while ((parseFloat(`${dropdownX.length}`) > floaterO) && injury1);
      if (4 >= libloggere.length) {
         floaterO *= parseFloat(`${parseInt(`${philippinesu}`)}`);
      }
      libavformatl += `${unselectedY.length | 3}`;
      if (benefitT) {
         break;
      }
   } while ((!libavformatl.startsWith(otherC)) && benefitT);
      if (result.action === Share.sharedAction) {

      notificationD = `${unselectedY.length}`;
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   while (unreada.length > otherC.length) {
      otherC = `${parseInt(`${matchactiveJ}`) ^ 1}`;
      break;
   }
      console.log("Error sharing link :", error);
    }
  };

  useEffect(() => {
    const inviteParam = userState.userReferralCode + userState.userName;

    const Buffer = require("buffer").Buffer;
    let encodedAuth = new Buffer(inviteParam).toString("base64");
    setShareOptions({
      ...shareOptions,
      message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
      url: INVITE_DOMAIN + encodedAuth,
    });
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#1a1d20",
          
          borderRadius: 15,
          overflow: "hidden", 
        }}
      >
        { }
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              paddingTop: 45,
              gap: 10,
              height: 180
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 28, fontWeight: "700" }}>
              VIP {vipRemainingDay.toLocaleString()}天
            </Text>
            <Text style={{ color: "#9C9C9C" }}>当前剩余天数</Text>
          </View>

          <FastImage
            source={require("@static/images/transferLiveendmodallogoTicked.png")}
            style={{
              height: 180,
              width: 240,
              right: 0,
              position: 'absolute'
            }}
            resizeMode={"contain"}
          />

          {/* <CrownIcon /> */}
        </View>

        { }
        <LinearGradient
          colors={["#323638", "#1a1d20"]} 
          locations={locations}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginHorizontal: 15,
            marginBottom: 15,
            marginTop: -10,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            flexDirection: "row", 
            justifyContent: "space-evenly",
            flexWrap: "wrap", 
          }}
        >
          <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/vip/bottomStatistics.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

          {wwAbidetect.instance.tabConfig != null && wwAbidetect.instance.len == 5 &&
            <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/macauFile.png")}
                  style={styles.featureIcn}
                  resizeMode={"contain"}
                />
              </View>
              <Text style={styles.featureTitle}>体育频道</Text>
            </View>}
          {screenState.showAdultTab && (
            <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/securityAnimation.png")}
                  style={styles.featureIcn}
                  resizeMode={"contain"}
                />
              </View>

              <View>
                <Text style={styles.featureTitle}>夜来香</Text>
              </View>

            </View>
          )}
          <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/invite/ww_right.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>去广告</Text>
            </View>
          </View>
        </LinearGradient>
        { }
        <TouchableOpacity
          onPress={() => {
            if (!wwBodan.isLogin(userState)) {
              console.log("toggle login");
              dispatch(showLoginAction());
              
              
              
            } else {
              toggleShare();
            }
          }}
        >
          <View
            style={{
              backgroundColor: colors.yellow,
              marginHorizontal: 15,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 8,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#000", fontWeight: "600", fontSize: 16 }}>
              立即推荐
            </Text>
          </View>
        </TouchableOpacity>
        { }

        <View style={{ ...styles.share, gap: 10 }}>
          <TouchableOpacity onPress={toggleShare}>
            <WeChatIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <PYQIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <SinaIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleShare}>
            <QQIcon />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (wwBodan.isGuest(userState)) {
                dispatch(showLoginAction());
                return;
              }
              Clipboard.setString(
                shareOptions.message + " " + shareOptions.url
              );
              setIsDialogOpen(true);
            }}
          >
            <CopyIcn />
          </TouchableOpacity>
        </View>
        { }
        <TouchableOpacity
          onPress={() => {
            if (wwBodan.isGuest(userState)) {
              console.log("toggle login");
              dispatch(showLoginAction());
              
              
              
            } else {
              navigation.navigate("VIP明细", { userState: userState });
            }
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#222528",
              paddingHorizontal: 15,
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
              }}
            >
              <ProfileIcn />
              <Text style={{ fontSize: 10, color: "#9C9C9C" }}>统计邀请：</Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primary,
                  fontWeight: "700",
                }}
              >
                {userState.userTotalInvite.toLocaleString()}
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10, color: "#9C9C9C" }}>
                累计奖励明细
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <NotificationModal
          onConfirm={toggleOverlay}
          isVisible={isDialogOpen}
          title="复制成功"
          subtitle1=""
          subtitle2=""
          subtitle3=""
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  featureItem: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    width: "40%", 
    marginBottom: 15, 
    marginTop: 10,
    marginLeft: "3%",
  },

  featureTitle: { fontSize: 14, color: "#ffffff", fontWeight: "400" },
  imgContainer: {
    backgroundColor: "#3b3e40",
    width: 45,
    height: 45,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  featureIcn: {
    flex: 1,
    width: 22,
  },
  share: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 15,
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
});
