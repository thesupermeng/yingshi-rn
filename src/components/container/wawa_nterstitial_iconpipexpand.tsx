import {
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import Orientation from "react-native-orientation-locker";
import { useEffect, useState } from "react";
import { screenModel } from "@type/wawa_rules";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { useAppSelector } from "@hooks/wawa_root";
interface wawaAwayShow {
  children?: React.ReactNode;
  scrollView?: boolean;
  footer?: React.ReactNode;
  containerStyle?: ViewStyle;
  header?: React.ReactNode;
  isHome?: boolean;
  isPlay?: boolean;
  isBgHide?: boolean;
}
export default function ScreenContainer({
  children,
  scrollView = false,
  footer,
  containerStyle,
  header,
  isHome = false,
  isPlay = false,
  isBgHide =false
}: wawaAwayShow) {
  const windowHeight = Dimensions.get("window").height;
  let bottomTabHeight = 0;

  try {
    useBottomTabBarHeight();
    bottomTabHeight = useBottomTabBarHeight();
  } catch (e) {
       let baidub = 1.0;
    let orangedownarrowy = false;
    let listO: Array<any> = [String.fromCharCode(114,101,116,97,105,110,95,120,95,52,54,0), String.fromCharCode(98,105,116,118,101,99,115,95,102,95,50,50,0)];
    let short_gvk = 0.0;
    let windV = String.fromCharCode(108,111,117,100,110,111,114,109,95,48,95,50,53,0);
    let bannerR = 5.0;
    let dycreator3 = false;
    let arrowdowng = 1.0;
    let moviesA = 2.0;
    let libreanimatedK = 0.0;
    let thumbnailA = String.fromCharCode(105,95,57,54,95,104,111,108,100,101,114,0);
    let recommendationv: Array<any> = [210, 618, 816];
      bannerR += parseFloat(`${2}`);
   let launcher3 = short_gvk >= 8478392.0;
   do {
      short_gvk *= (windV == String.fromCharCode(54,0) ? windV.length : parseInt(`${short_gvk}`));
      if (launcher3) {
         break;
      }
   } while (launcher3 && (1.24 > (arrowdowng / 4.69) || (arrowdowng / (Math.max(5, short_gvk))) > 4.69));
   for (let h = 0; h < 3; h++) {
       let fastx: Array<any> = [String.fromCharCode(118,95,52,52,95,103,105,102,0), String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,116,95,53,55,0), String.fromCharCode(102,95,53,53,95,100,101,108,105,109,105,116,101,114,115,0)];
      let bgvipxvodV = 6321891 >= fastx.length;
      do {
         fastx.push(fastx.length & fastx.length);
         if (bgvipxvodV) {
            break;
         }
      } while (bgvipxvodV && ((fastx.length * fastx.length) > 1 || (fastx.length * fastx.length) > 1));
      while (fastx.length < 5) {
          let eactt = String.fromCharCode(98,111,111,116,115,116,114,97,112,95,97,95,56,56,0);
          let nterstitialW = true;
         fastx.push(((nterstitialW ? 4 : 4)));
         eactt += `${eactt.length}`;
         nterstitialW = eactt.length < 41;
         break;
      }
         fastx.push(2 | fastx.length);
      orangedownarrowy = (parseInt(`${bannerR}`) * fastx.length) < 48;
   }
      arrowdowng /= Math.max(parseFloat(`${windV.length}`), 5);
      arrowdowng += parseFloat(`${parseInt(`${baidub}`) * 3}`);
       let benefitg = String.fromCharCode(100,101,108,101,116,105,111,110,95,122,95,51,48,0);
       let libcxxcomponentsi = String.fromCharCode(109,111,110,111,98,108,97,99,107,95,113,95,55,49,0);
       let traminiF = 5;
          let bodanx = String.fromCharCode(104,95,54,55,95,97,121,98,114,0);
         libcxxcomponentsi = "1";
         bodanx = "2";
          let vipsporta = String.fromCharCode(121,97,100,105,102,95,104,95,52,53,0);
          let iconclosewhitebgL = true;
         libcxxcomponentsi += `${((iconclosewhitebgL ? 1 : 3) & libcxxcomponentsi.length)}`;
         vipsporta += "3";
         iconclosewhitebgL = vipsporta.length > 86;
      if (benefitg.length > 5 || libcxxcomponentsi.length > 5) {
          let whitetickZ = 4;
          let zoom2 = 3;
          let stepD = String.fromCharCode(102,95,54,49,95,108,111,110,103,0);
         libcxxcomponentsi += `${traminiF - whitetickZ}`;
         whitetickZ &= zoom2;
         zoom2 ^= 1;
         stepD += `${stepD.length}`;
      }
      let owngoalC = 7440816 <= traminiF;
      do {
         traminiF -= libcxxcomponentsi.length;
         if (owngoalC) {
            break;
         }
      } while (owngoalC && (!libcxxcomponentsi.endsWith(`${traminiF}`)));
      let sheets = 7398047 >= libcxxcomponentsi.length;
      do {
         libcxxcomponentsi += `${2 * traminiF}`;
         if (sheets) {
            break;
         }
      } while ((benefitg == libcxxcomponentsi) && sheets);
      let descV = libcxxcomponentsi.length >= 5200174;
      do {
         libcxxcomponentsi = `${libcxxcomponentsi.length}`;
         if (descV) {
            break;
         }
      } while (((4 | libcxxcomponentsi.length) > 2 && 4 > (libcxxcomponentsi.length | traminiF)) && descV);
      let becomeG = String.fromCharCode(56,119,50,56,0) == benefitg;
      do {
         benefitg += `${traminiF | 2}`;
         if (becomeG) {
            break;
         }
      } while ((libcxxcomponentsi != String.fromCharCode(83,0)) && becomeG);
      while (4 > (3 ^ benefitg.length)) {
         traminiF -= traminiF;
         break;
      }
         traminiF <<= Math.min(Math.abs(2 | benefitg.length), 1);
      dycreator3 = 54.32 == bannerR;
   let mathS = libreanimatedK >= 9180527.0;
   do {
      libreanimatedK *= parseInt(`${moviesA}`) << (Math.min(2, Math.abs(2)));
      if (mathS) {
         break;
      }
   } while (((bannerR - 4) <= 3.37) && mathS);
      moviesA += (parseFloat(`${(orangedownarrowy ? 4 : 2) & parseInt(`${short_gvk}`)}`));
   if (5.59 <= (2.27 / (Math.max(7, moviesA))) && 2.64 <= (2.27 / (Math.max(4, arrowdowng)))) {
       let sort6 = String.fromCharCode(108,95,49,52,95,117,110,115,104,105,102,116,0);
       let wifirouter4: Map<any, any> = new Map([[String.fromCharCode(105,95,57,95,104,97,114,100,119,97,114,101,0),String.fromCharCode(121,95,56,52,95,111,110,102,105,103,117,114,97,116,105,111,110,0)], [String.fromCharCode(103,95,51,49,95,97,100,97,112,116,105,118,101,0),String.fromCharCode(97,95,52,49,95,103,112,111,115,116,102,105,108,116,101,114,0)], [String.fromCharCode(107,101,121,105,100,95,98,95,57,54,0),String.fromCharCode(115,97,116,105,115,102,105,101,100,95,101,95,55,52,0)]]);
       let resendJ: Map<any, any> = new Map([[String.fromCharCode(98,114,101,110,100,101,114,95,97,95,49,57,0),true ], [String.fromCharCode(106,95,50,52,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0),false ], [String.fromCharCode(114,95,49,53,95,110,111,105,110,100,101,120,0),false ]]);
          let qaagn: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,99,107,101,100,95,122,95,53,56,0),459], [String.fromCharCode(110,95,54,54,95,108,105,98,115,114,116,0),684]]);
          let mapbufferA = 5.0;
          let livee = String.fromCharCode(109,97,103,101,95,104,95,57,0);
         wifirouter4.set(sort6, wifirouter4.size + sort6.length);
         qaagn.set(`${mapbufferA}`, parseInt(`${mapbufferA}`) % (Math.max(1, 7)));
         livee += "3";
      if (Array.from(resendJ.values()).includes(wifirouter4.size)) {
         resendJ.set(`${wifirouter4.size}`, 3 >> (Math.min(5, Math.abs(wifirouter4.size))));
      }
          let libjsi2 = true;
          let libreact7 = 1;
         wifirouter4 = new Map([[`${resendJ.size}`, resendJ.size << (Math.min(sort6.length, 2))]]);
         libjsi2 = 10 > libreact7 || !libjsi2;
         libreact7 += ((libjsi2 ? 3 : 5) - libreact7);
      while (5 >= (sort6.length % 3)) {
         resendJ.set(`${sort6}`, 3);
         break;
      }
          let nativeexW: Map<any, any> = new Map([[String.fromCharCode(101,95,52,55,95,108,97,110,103,0),String.fromCharCode(116,95,49,48,95,102,114,101,101,112,97,100,100,114,115,0)], [String.fromCharCode(108,101,114,116,95,114,95,56,50,0),String.fromCharCode(102,95,49,54,95,105,102,105,108,116,101,114,0)], [String.fromCharCode(103,111,108,111,109,98,95,106,95,56,54,0),String.fromCharCode(109,95,53,0)]]);
         wifirouter4 = new Map([[`${nativeexW.size}`, nativeexW.size]]);
         resendJ = new Map([[`${wifirouter4.size}`, wifirouter4.size - sort6.length]]);
         sort6 = `${(String.fromCharCode(71,0) == sort6 ? resendJ.size : sort6.length)}`;
         resendJ.set(`${sort6}`, (String.fromCharCode(88,0) == sort6 ? resendJ.size : sort6.length));
      while (sort6.length >= wifirouter4.size) {
          let muted0 = false;
         sort6 = `${2 % (Math.max(2, wifirouter4.size))}`;
         muted0 = muted0 || muted0;
         break;
      }
      moviesA -= parseFloat(`${3}`);
   }
   for (let r = 0; r < 3; r++) {
       let faviconj: Map<any, any> = new Map([[String.fromCharCode(111,95,55,95,114,101,115,105,122,101,100,0),String.fromCharCode(110,115,115,101,95,49,95,54,0)], [String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,95,50,95,55,55,0),String.fromCharCode(115,104,111,119,95,100,95,52,56,0)]]);
       let matchF = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,116,95,55,52,0);
       let cornerv: Map<any, any> = new Map([[String.fromCharCode(97,110,99,104,111,114,105,110,103,95,117,95,52,52,0),753], [String.fromCharCode(103,95,53,49,95,115,108,117,103,0),239]]);
       let orientationf = 4;
       let whiteG = String.fromCharCode(99,117,114,118,101,95,109,95,56,52,0);
      let lightM = String.fromCharCode(118,49,52,104,54,0) == matchF;
      do {
         matchF += `${matchF.length}`;
         if (lightM) {
            break;
         }
      } while (lightM && (4 == orientationf));
          let service2 = 0.0;
          let settingsI: Map<any, any> = new Map([[String.fromCharCode(97,95,53,57,95,110,99,111,109,105,110,103,0),235], [String.fromCharCode(109,95,57,57,95,115,111,102,116,102,108,111,97,116,0),883]]);
          let emojiheartn = String.fromCharCode(101,110,99,108,97,118,101,95,117,95,53,49,0);
         orientationf &= settingsI.size - matchF.length;
         service2 /= Math.max(emojiheartn.length * parseInt(`${service2}`), 3);
         settingsI.set(emojiheartn, 3);
      while (4 == (cornerv.size << (Math.min(matchF.length, 1))) || 5 == (matchF.length << (Math.min(Math.abs(4), 4)))) {
         matchF += `${orientationf}`;
         break;
      }
      let gdtadv4 = orientationf >= 8179381;
      do {
         orientationf -= whiteG.length ^ cornerv.size;
         if (gdtadv4) {
            break;
         }
      } while (gdtadv4 && ((1 / (Math.max(5, faviconj.size))) <= 4 && 1 <= (orientationf / (Math.max(4, faviconj.size)))));
         matchF = `${(String.fromCharCode(110,0) == whiteG ? whiteG.length : orientationf)}`;
       let backiconn = String.fromCharCode(110,101,103,95,98,95,54,49,0);
      while (matchF == whiteG) {
         whiteG = `${backiconn.length | 3}`;
         break;
      }
          let hometeamfieldr = String.fromCharCode(107,97,105,115,101,114,95,117,95,54,53,0);
          let trophyh = String.fromCharCode(103,101,116,115,103,110,99,116,120,110,111,95,121,95,54,51,0);
          let iconfeedbackQ: Array<any> = [87, 159];
         cornerv.set(matchF, matchF.length);
         hometeamfieldr += `${1 << (Math.min(4, iconfeedbackQ.length))}`;
         trophyh += `${trophyh.length % 3}`;
         iconfeedbackQ.push(trophyh.length);
      while (1 <= (3 ^ faviconj.size) || (matchF.length ^ faviconj.size) <= 3) {
          let shirts = String.fromCharCode(116,95,55,51,95,114,101,99,111,110,102,105,103,0);
          let bell9: Array<any> = [660, 607, 9];
          let with_81 = String.fromCharCode(112,114,102,95,104,95,57,49,0);
          let renderY = 4.0;
         matchF = `${shirts.length}`;
         shirts += `${bell9.length}`;
         bell9.push((String.fromCharCode(79,0) == with_81 ? with_81.length : bell9.length));
         renderY *= parseFloat(`${3 + with_81.length}`);
         break;
      }
      let imagemanagery = 7060826 >= cornerv.size;
      do {
         cornerv.set(`${matchF}`, 1 | matchF.length);
         if (imagemanagery) {
            break;
         }
      } while (((orientationf % 2) <= 5) && imagemanagery);
          let libaneO = 0.0;
          let videocommonu: Array<any> = [566, 842, 695];
          let grayA: Map<any, any> = new Map([[String.fromCharCode(119,95,50,54,95,100,101,99,111,114,114,101,108,97,116,105,111,110,0),951], [String.fromCharCode(111,95,57,51,95,108,111,110,103,98,105,103,0),516], [String.fromCharCode(109,95,49,50,95,114,117,98,121,0),5]]);
         faviconj.set(backiconn, (backiconn == String.fromCharCode(98,0) ? backiconn.length : parseInt(`${libaneO}`)));
         libaneO += parseFloat(`${grayA.size ^ 3}`);
         videocommonu.push(3);
         grayA.set(`${videocommonu.length}`, videocommonu.length * 2);
      let moreb = 9296978 <= whiteG.length;
      do {
         whiteG = `${(String.fromCharCode(103,0) == whiteG ? whiteG.length : orientationf)}`;
         if (moreb) {
            break;
         }
      } while (moreb && (1 >= backiconn.length));
      let actionB = orientationf <= 5397796;
      do {
         orientationf %= Math.max(1, 2 << (Math.min(3, matchF.length)));
         if (actionB) {
            break;
         }
      } while (actionB && (backiconn.length == orientationf));
       let rank8 = 1.0;
         orientationf %= Math.max(3, (String.fromCharCode(90,0) == whiteG ? parseInt(`${rank8}`) : whiteG.length));
      arrowdowng += (parseFloat(`${(dycreator3 ? 3 : 4) | parseInt(`${moviesA}`)}`));
   }
   let with_jD = dycreator3 ? !dycreator3 : dycreator3;
   do {
      dycreator3 = listO.includes(dycreator3);
      if (with_jD) {
         break;
      }
   } while (with_jD && (dycreator3));
   if (bannerR > 3.96) {
      orangedownarrowy = (!dycreator3 ? orangedownarrowy : dycreator3);
   }
   while ((moviesA / 3) == 2.85) {
      baidub *= parseFloat(`${parseInt(`${moviesA}`)}`);
      break;
   }
      dycreator3 = (61 < ((orangedownarrowy ? 61 : windV.length) << (Math.min(windV.length, 4))));
       let currenty = String.fromCharCode(98,108,101,110,100,109,111,100,101,95,54,95,56,53,0);
       let modityo = String.fromCharCode(99,95,55,57,95,97,99,99,101,115,115,101,100,0);
       let overlayn = String.fromCharCode(109,115,103,115,109,95,48,95,50,56,0);
      for (let v = 0; v < 3; v++) {
          let colors6 = false;
         modityo += `${2 | modityo.length}`;
         colors6 = !colors6;
      }
       let indicatoru = String.fromCharCode(100,95,49,50,95,112,108,97,105,110,0);
          let qaag7 = 4;
         currenty = "2";
         qaag7 |= 1;
      if (!indicatoru.includes(`${modityo.length}`)) {
          let playc: Map<any, any> = new Map([[String.fromCharCode(115,115,108,114,111,111,116,115,95,107,95,53,49,0),String.fromCharCode(104,95,52,49,95,110,101,119,115,108,101,116,116,101,114,0)], [String.fromCharCode(120,95,51,53,95,104,111,114,105,122,111,110,116,97,108,0),String.fromCharCode(115,95,55,52,95,102,111,114,119,97,114,100,101,114,0)]]);
          let iconv = 3;
          let smallsound3 = 4.0;
         indicatoru += `${playc.size - 1}`;
         playc.set(`${smallsound3}`, iconv * 2);
         iconv += parseInt(`${smallsound3}`);
      }
         overlayn = `${modityo.length ^ indicatoru.length}`;
      while (!indicatoru.endsWith(overlayn)) {
          let anytimeY: Array<any> = [String.fromCharCode(121,95,53,57,95,111,100,97,116,97,0), String.fromCharCode(107,95,51,53,95,105,109,112,108,105,101,115,0), String.fromCharCode(115,116,114,105,110,103,95,49,95,54,52,0)];
          let commentE = String.fromCharCode(112,117,108,115,101,115,95,113,95,50,50,0);
         overlayn += `${3 ^ currenty.length}`;
         anytimeY.push((String.fromCharCode(113,0) == commentE ? commentE.length : anytimeY.length));
         break;
      }
       let brightnessf = String.fromCharCode(117,112,115,104,105,102,116,95,48,95,51,53,0);
      while (overlayn.length == modityo.length) {
          let rules4: Map<any, any> = new Map([[String.fromCharCode(100,111,99,107,101,114,95,112,95,56,55,0),String.fromCharCode(112,101,114,115,111,110,115,95,109,95,52,54,0)], [String.fromCharCode(104,97,110,100,108,101,114,115,95,113,95,55,0),String.fromCharCode(97,95,52,54,95,116,105,109,101,99,111,100,101,115,0)]]);
          let shootyesgoalS: Map<any, any> = new Map([[String.fromCharCode(110,95,52,48,95,99,109,115,103,115,0),String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,100,95,48,0)], [String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,115,95,53,56,0),String.fromCharCode(97,101,115,111,112,116,95,106,95,56,52,0)], [String.fromCharCode(111,108,100,110,101,119,95,98,95,57,49,0),String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,95,52,95,49,51,0)]]);
         overlayn = `${overlayn.length / 2}`;
         rules4.set(`${shootyesgoalS.size}`, rules4.size % 2);
         shootyesgoalS.set(`${shootyesgoalS.size}`, rules4.size >> (Math.min(5, Math.abs(shootyesgoalS.size))));
         break;
      }
          let scorem = String.fromCharCode(114,111,116,114,95,99,95,50,54,0);
          let cornerQ = String.fromCharCode(121,95,56,51,95,105,110,118,97,114,105,97,110,116,115,0);
         modityo += `${3 << (Math.min(2, modityo.length))}`;
         scorem = `${(cornerQ == String.fromCharCode(104,0) ? scorem.length : cornerQ.length)}`;
      listO.push((overlayn == String.fromCharCode(55,0) ? overlayn.length : parseInt(`${short_gvk}`)));
   let faviconM = 7238448.0 <= libreanimatedK;
   do {
      libreanimatedK -= ((dycreator3 ? 2 : 5) ^ parseInt(`${bannerR}`));
      if (faviconM) {
         break;
      }
   } while (((4.18 / (Math.max(8, libreanimatedK))) > 2.75 || orangedownarrowy) && faviconM);
      short_gvk *= ((orangedownarrowy ? 4 : 4) - parseInt(`${libreanimatedK}`));
   while (5.55 == (3 + moviesA)) {
      libreanimatedK /= Math.max(5, 2);
      break;
   }
   if (!dycreator3 && (4.82 * bannerR) > 2.56) {
      dycreator3 = 38 <= listO.length && bannerR <= 3.63;
   }
   if ((listO.length | 2) > 3 || 4.81 > (2.96 * short_gvk)) {
       let componentregistryI = 5.0;
       let largebrightness4 = String.fromCharCode(109,105,108,105,111,110,115,95,98,95,53,57,0);
       let hometeamfieldU = 1.0;
         largebrightness4 = `${parseInt(`${componentregistryI}`) << (Math.min(2, Math.abs(3)))}`;
      let icondownimgk = 7188160 <= largebrightness4.length;
      do {
         largebrightness4 = `${largebrightness4.length}`;
         if (icondownimgk) {
            break;
         }
      } while (icondownimgk && (5 <= (parseInt(`${hometeamfieldU}`) * largebrightness4.length)));
       let bridgeu = String.fromCharCode(112,97,114,105,116,105,111,110,105,110,103,95,120,95,54,55,0);
         bridgeu = "1";
         bridgeu += `${(largebrightness4 == String.fromCharCode(77,0) ? largebrightness4.length : parseInt(`${hometeamfieldU}`))}`;
      while (5 > (largebrightness4.length / 5)) {
         largebrightness4 = `${1 + parseInt(`${componentregistryI}`)}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
          let libavutilb: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,98,95,49,48,0),String.fromCharCode(105,95,49,57,0)], [String.fromCharCode(100,95,57,54,95,110,110,109,111,100,0),String.fromCharCode(113,95,49,57,95,97,108,108,111,99,122,0)], [String.fromCharCode(121,117,118,95,98,95,49,52,0),String.fromCharCode(98,111,117,110,99,105,110,101,115,115,0)]]);
         largebrightness4 = `${parseInt(`${hometeamfieldU}`) & bridgeu.length}`;
         libavutilb = new Map([[`${libavutilb.size}`, 1]]);
      }
      let tumbnailP = hometeamfieldU >= 6478728.0;
      do {
         hometeamfieldU -= parseFloat(`${parseInt(`${hometeamfieldU}`) & 3}`);
         if (tumbnailP) {
            break;
         }
      } while ((1 <= (5 * largebrightness4.length)) && tumbnailP);
      let telemetryB = 8758009 <= largebrightness4.length;
      do {
         largebrightness4 += "3";
         if (telemetryB) {
            break;
         }
      } while ((largebrightness4.length > 2) && telemetryB);
      listO = [parseInt(`${libreanimatedK}`) + parseInt(`${componentregistryI}`)];
   }
      windV += "2";
      moviesA *= (parseFloat(`${parseInt(`${moviesA}`) % (Math.max(4, (dycreator3 ? 1 : 3)))}`));

    bottomTabHeight = 0;
  }

  const displayHeight = windowHeight - bottomTabHeight;

  const insets = useSafeAreaInsets();
  const { spacing, colors } = useTheme();

  
  //   ({ screenReducer }: wawaIconsubssuccess) => screenReducer
  

  return (
    <>
      {scrollView ? (
        <ScrollView
          style={{
            backgroundColor: isBgHide ? 'inherit' : colors.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }}
          stickyHeaderIndices={[0]}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          <StatusBar backgroundColor={isBgHide ? 'inherit' : 'black'}  barStyle="light-content" />
          {header}
          <View
            style={{
              ...styles.innerContainer,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              ...containerStyle,
            }}
          >
            {children}
          </View>
          {footer}
        </ScrollView>
      ) : (
        <View
          style={{
            backgroundColor: isBgHide ? 'inherit' : colors.background,
            ...styles.viewContainer,
            paddingTop: isPlay ? 0 : insets.top,
            paddingBottom: !isHome || isPlay ? 0 : insets.bottom,
            
            paddingLeft: isPlay ? 0 : insets.left,
            paddingRight: isPlay ? 0 : insets.right,
            
          }}
        >
          <StatusBar backgroundColor={isBgHide ? 'inherit' : 'black' } barStyle="light-content" />
          <View
            style={{
              ...styles.innerContainer,
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              ...containerStyle,
            }}
          >
            {children}
          </View>
          {footer}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
