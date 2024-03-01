import React, {
  useState,
  useRef,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { View, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import SystemSetting from "react-native-system-setting";
import BrightnessVolumeSlider from "./yys_librrc_playlist";
import { debounce } from "lodash";
type yys_ConfigureUimanager = {
  vodType: string;
  children?: ReactNode;
  enabled?: boolean;
  onSkipForward: () => any;
  onSkipBackwards: () => any;
  onSingleTap: (forceClose: boolean) => any;
  currentTime: number;
  totalDuration: number;
  onSeek: (x: number) => any;
  disableControlsExceptTap?: boolean;
};

type yys_EmptyLibsgcore = {
  name: "progress" | "brightness" | "megaphoneConst_4Binddatas" | "none";
  value: number;
};
export default ({
  vodType,
  children,
  enabled = true,
  onSkipBackwards,
  onSkipForward,
  onSingleTap,
  currentTime = 0,
  totalDuration = 0.1,
  onSeek,
  disableControlsExceptTap = false,
}: yys_ConfigureUimanager) => {
  const panCooldown = useSharedValue(3);

  const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
  const brightShare = useSharedValue(0.0);
  const volumeShare = useSharedValue(0.0);
  const [settings, setSettings] = useState<yys_EmptyLibsgcore>({
    name: "none",
    value: 0,
  });
  const [showSlider, setShowSlider] = useState(false);

  const isDoubleTap = useSharedValue(false);

  const sliderTimeout = useRef(0);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const showControls = () => {
       let scheduleF = String.fromCharCode(108,111,111,107,97,115,105,100,101,0);
    let logoG = false;
    let privacyE = String.fromCharCode(115,117,110,114,97,115,116,0);
    let downloadingr = 3;
    let gifti: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,0),false ], [String.fromCharCode(100,101,100,117,112,101,0),true ]]);
    let libimagepipelinev: Array<any> = [529, 276, 343];
    let combinedx = true;
    let bootsplashl = String.fromCharCode(114,101,119,114,105,116,101,0);
    let home0 = 0.0;
       let paginationL: Array<any> = [String.fromCharCode(98,101,104,105,110,100,0), String.fromCharCode(110,101,119,108,105,110,101,115,0), String.fromCharCode(115,116,114,108,99,112,121,0)];
       let clubC = 0;
       let info2 = 1;
      while ((clubC >> (Math.min(Math.abs(4), 2))) < 1) {
         clubC *= clubC % (Math.max(2, paginationL.length));
         break;
      }
      let megaphoneU = 5683082 <= info2;
      do {
          let buttonc = 2;
         info2 ^= info2 + 3;
         buttonc %= Math.max(2, 3 ^ buttonc);
         if (megaphoneU) {
            break;
         }
      } while (megaphoneU && ((info2 << (Math.min(5, Math.abs(clubC)))) <= 4 || (4 << (Math.min(4, Math.abs(info2)))) <= 3));
      while (4 < (paginationL.length / (Math.max(3, clubC))) || 4 < (clubC / (Math.max(paginationL.length, 2)))) {
          let short_rO = true;
         clubC ^= 3 - clubC;
         short_rO = (short_rO ? !short_rO : short_rO);
         break;
      }
      while (3 <= (3 << (Math.min(4, paginationL.length))) && (paginationL.length << (Math.min(Math.abs(3), 5))) <= 5) {
         info2 ^= clubC;
         break;
      }
      for (let b = 0; b < 3; b++) {
         clubC *= 2;
      }
         clubC /= Math.max(4, 1 - info2);
          let libavformatK = 4;
          let areah = String.fromCharCode(109,111,100,101,120,112,0);
          let mountingJ = String.fromCharCode(114,97,103,103,97,98,108,101,0);
         paginationL = [3];
         libavformatK -= 2;
         areah = "1";
         mountingJ += "1";
         clubC -= clubC;
      let filledL = 8247333 <= clubC;
      do {
         clubC %= Math.max(4, paginationL.length);
         if (filledL) {
            break;
         }
      } while (filledL && (1 <= (paginationL.length ^ clubC)));
      libimagepipelinev = [downloadingr % (Math.max(1, scheduleF.length))];
   if (3 > libimagepipelinev.length) {
       let math7 = String.fromCharCode(105,102,110,115,0);
       let loadingH: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,119,111,114,100,0),79], [String.fromCharCode(115,109,111,111,116,104,108,121,0),639]]);
       let projectW = String.fromCharCode(118,97,114,105,97,110,99,101,0);
       let episodeT = 0.0;
      while ((2 - projectW.length) > 2 && (projectW.length * parseInt(`${episodeT}`)) > 2) {
          let libreanimatedQ: Map<any, any> = new Map([[String.fromCharCode(98,105,103,110,117,109,0),String.fromCharCode(109,105,115,109,97,116,99,104,0)], [String.fromCharCode(103,108,121,112,104,0),String.fromCharCode(116,111,121,115,0)]]);
          let homen = 5.0;
          let chartI = String.fromCharCode(115,116,114,111,107,101,0);
         episodeT += parseFloat(`${chartI.length}`);
         libreanimatedQ.set(`${homen}`, 2);
         homen -= parseFloat(`${parseInt(`${homen}`) * 2}`);
         chartI = `${libreanimatedQ.size >> (Math.min(1, Math.abs(parseInt(`${homen}`))))}`;
         break;
      }
      if (5 <= (projectW.length / (Math.max(1, 3))) && (projectW.length * 1) <= 2) {
         episodeT += (parseFloat(`${String.fromCharCode(80,0) == math7 ? loadingH.size : math7.length}`));
      }
         loadingH = new Map([[projectW, projectW.length / 1]]);
         math7 += `${loadingH.size}`;
         projectW += "1";
          let shrinkC: Array<any> = [644, 681, 384];
          let libcrashsdkS = false;
         loadingH = new Map([[`${shrinkC.length}`, ((libcrashsdkS ? 1 : 3) % (Math.max(shrinkC.length, 8)))]]);
      for (let w = 0; w < 1; w++) {
          let final_fao = String.fromCharCode(102,101,108,101,109,0);
          let favorite_ = String.fromCharCode(100,105,115,107,0);
          let movies2: Array<any> = [559, 448, 452];
          let filledw = 1.0;
         episodeT -= parseFloat(`${loadingH.size ^ 1}`);
         final_fao = `${(final_fao == String.fromCharCode(55,0) ? final_fao.length : movies2.length)}`;
         favorite_ = `${movies2.length - parseInt(`${filledw}`)}`;
         filledw *= movies2.length;
      }
      let u_countH = 5236262.0 <= episodeT;
      do {
          let floater9 = 1.0;
          let mailU = 3.0;
          let whatsapph: Map<any, any> = new Map([[String.fromCharCode(115,117,103,103,101,115,116,101,100,0),953], [String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,0),655], [String.fromCharCode(97,115,111,108,117,116,101,0),752]]);
          let mutedX = 0.0;
         episodeT /= Math.max(2, parseFloat(`${2}`));
         floater9 /= Math.max(2, 2);
         mailU *= 1;
         whatsapph.set(`${floater9}`, parseInt(`${floater9}`));
         mutedX -= parseInt(`${mailU}`);
         if (u_countH) {
            break;
         }
      } while (u_countH && (1.66 < (episodeT / (Math.max(1, parseFloat(`${projectW.length}`))))));
         loadingH.set(projectW, projectW.length);
      while ((loadingH.size << (Math.min(math7.length, 5))) < 3) {
         loadingH = new Map([[`${loadingH.size}`, loadingH.size | math7.length]]);
         break;
      }
      let googleB = math7.length >= 7473527;
      do {
          let stylek = String.fromCharCode(99,108,117,98,0);
          let anytimer = 3.0;
          let hejiS = 4.0;
         math7 = "3";
         stylek = "3";
         anytimer += parseFloat(`${parseInt(`${anytimer}`)}`);
         hejiS -= (parseFloat(`${String.fromCharCode(112,0) == stylek ? parseInt(`${anytimer}`) : stylek.length}`));
         if (googleB) {
            break;
         }
      } while (googleB && (math7.length > 4 && projectW.length > 4));
       let short_3aH = String.fromCharCode(99,97,112,105,116,97,108,115,0);
      privacyE = `${(bootsplashl == String.fromCharCode(88,0) ? bootsplashl.length : parseInt(`${home0}`))}`;
   }
      scheduleF += `${((combinedx ? 5 : 2) | (logoG ? 2 : 3))}`;
      bootsplashl = `${downloadingr + gifti.size}`;
       let buffer5 = String.fromCharCode(97,102,116,101,114,108,105,102,101,0);
       let rightz = String.fromCharCode(98,97,115,101,108,105,110,101,0);
         rightz = `${rightz.length << (Math.min(5, buffer5.length))}`;
       let templateprocessors = String.fromCharCode(114,101,109,111,118,97,108,0);
      let graphicsg = String.fromCharCode(104,52,103,110,101,118,50,98,57,50,0) == templateprocessors;
      do {
          let mappingx = 1.0;
          let graphicsX: Map<any, any> = new Map([[String.fromCharCode(114,97,115,116,101,114,105,122,97,116,105,111,110,0),207], [String.fromCharCode(115,116,114,97,116,101,103,121,0),666], [String.fromCharCode(101,120,112,105,114,101,115,0),68]]);
         templateprocessors += `${rightz.length}`;
         mappingx *= 3 / (Math.max(6, parseInt(`${mappingx}`)));
         graphicsX.set(`${mappingx}`, parseInt(`${mappingx}`) / (Math.max(graphicsX.size, 7)));
         if (graphicsg) {
            break;
         }
      } while ((templateprocessors.length >= 5) && graphicsg);
      if (2 <= buffer5.length || 2 <= templateprocessors.length) {
         templateprocessors += `${templateprocessors.length}`;
      }
      for (let c = 0; c < 2; c++) {
         buffer5 += `${buffer5.length}`;
      }
       let resendk = 3.0;
       let toponV = 0.0;
      logoG = !logoG;
      combinedx = ((libimagepipelinev.length + (logoG ? 22 : libimagepipelinev.length)) <= 22);
      scheduleF += `${libimagepipelinev.length}`;

    setShowSlider(true);

       let turn3 = 2.0;
      for (let d = 0; d < 3; d++) {
         turn3 += parseFloat(`${parseInt(`${turn3}`)}`);
      }
      for (let k = 0; k < 3; k++) {
         turn3 -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${turn3}`)), 1))}`);
      }
         turn3 += parseFloat(`${3 - parseInt(`${turn3}`)}`);
      combinedx = (turn3 + parseFloat(`${scheduleF.length}`)) <= 55.95;
      logoG = (home0 + parseFloat(`${scheduleF.length}`)) >= 73.78;
      libimagepipelinev = [((logoG ? 4 : 5))];
   while (logoG && 1 >= (3 + downloadingr)) {
      downloadingr /= Math.max(1, 3);
      break;
   }
   let suggestionQ = String.fromCharCode(48,108,102,102,0) == privacyE;
   do {
      privacyE += `${downloadingr}`;
      if (suggestionQ) {
         break;
      }
   } while (suggestionQ && (5 >= (5 / (Math.max(10, gifti.size))) && (5 / (Math.max(4, gifti.size))) >= 4));
   let confirmationm = bootsplashl.length >= 8747657;
   do {
      bootsplashl = `${scheduleF.length - gifti.size}`;
      if (confirmationm) {
         break;
      }
   } while (confirmationm && (3 >= (bootsplashl.length >> (Math.min(Math.abs(3), 2)))));
      gifti.set(`${home0}`, libimagepipelinev.length);
    clearTimeout(sliderTimeout.current);

       let alertC: Map<any, any> = new Map([[String.fromCharCode(109,112,111,110,0),530], [String.fromCharCode(112,111,108,121,103,111,110,0),888]]);
       let submit4 = String.fromCharCode(97,110,115,105,0);
       let chinasamel: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,115,99,114,111,108,108,0),809], [String.fromCharCode(118,101,114,105,102,105,97,98,108,101,0),746], [String.fromCharCode(110,105,100,108,110,0),233]]);
          let stationsd: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,0),523], [String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,0),791]]);
          let attributedstring9 = String.fromCharCode(109,115,115,100,115,112,0);
         alertC = new Map([[`${chinasamel.size}`, (String.fromCharCode(83,0) == attributedstring9 ? attributedstring9.length : chinasamel.size)]]);
         stationsd.set(`${stationsd.size}`, stationsd.size);
       let dataJ = 1;
       let entryK = 1;
      let optionsG = dataJ <= 8378180;
      do {
          let sports3 = String.fromCharCode(104,102,108,105,112,0);
          let benefitt = String.fromCharCode(109,105,120,0);
          let formc = 5.0;
          let chinaA = String.fromCharCode(110,105,115,116,122,0);
         dataJ |= benefitt.length % (Math.max(2, entryK));
         sports3 += `${chinaA.length}`;
         benefitt = `${parseInt(`${formc}`) >> (Math.min(Math.abs(3), 4))}`;
         formc *= 3 % (Math.max(7, parseInt(`${formc}`)));
         chinaA += `${parseInt(`${formc}`) % (Math.max(7, chinaA.length))}`;
         if (optionsG) {
            break;
         }
      } while (((submit4.length - 3) < 1) && optionsG);
      if ((dataJ * submit4.length) < 5 || 5 < (dataJ * submit4.length)) {
         submit4 = `${chinasamel.size ^ dataJ}`;
      }
      if (submit4.includes(`${chinasamel.size}`)) {
         chinasamel = new Map([[submit4, 2 >> (Math.min(4, Math.abs(entryK)))]]);
      }
         dataJ <<= Math.min(Math.abs(chinasamel.size << (Math.min(Math.abs(3), 2))), 1);
      let fadfdeebbbfdabbbabdadfaaddaaX = 8638847 <= alertC.size;
      do {
          let ewarded8 = 5.0;
         alertC = new Map([[`${alertC.size}`, 2 & alertC.size]]);
         ewarded8 += parseFloat(`${1}`);
         if (fadfdeebbbfdabbbabdadfaaddaaX) {
            break;
         }
      } while (((dataJ - alertC.size) <= 5) && fadfdeebbbfdabbbabdadfaaddaaX);
         dataJ /= Math.max((String.fromCharCode(117,0) == submit4 ? submit4.length : entryK), 3);
         entryK |= 2;
      bootsplashl = `${gifti.size}`;
   while (scheduleF != String.fromCharCode(85,0) || bootsplashl != String.fromCharCode(50,0)) {
      scheduleF += `${(String.fromCharCode(75,0) == scheduleF ? bootsplashl.length : scheduleF.length)}`;
      break;
   }
      libimagepipelinev = [parseInt(`${home0}`) * 3];
      scheduleF = `${gifti.size}`;
       let vignetteQ = 4.0;
       let unreadw = 4.0;
      for (let i = 0; i < 3; i++) {
          let hooks9 = true;
          let mbsplashl = false;
          let showu = String.fromCharCode(108,111,119,101,114,99,97,115,101,100,0);
         vignetteQ /= Math.max((parseFloat(`${(hooks9 ? 1 : 5) * (mbsplashl ? 2 : 4)}`)), 5);
         hooks9 = showu == showu;
         mbsplashl = showu == showu;
      }
         unreadw *= parseInt(`${vignetteQ}`);
         unreadw *= parseInt(`${vignetteQ}`);
         unreadw += 3 * parseInt(`${vignetteQ}`);
         unreadw += 2 | parseInt(`${unreadw}`);
      if (vignetteQ < unreadw) {
         unreadw += 1 << (Math.min(Math.abs(parseInt(`${vignetteQ}`)), 3));
      }
      downloadingr >>= Math.min(4, Math.abs(((combinedx ? 1 : 3) & 3)));
      downloadingr /= Math.max(1, 3 * downloadingr);
      gifti = new Map([[`${libimagepipelinev.length}`, 1]]);
    sliderTimeout.current = setTimeout(() => {

   if (!logoG || 4 <= (5 >> (Math.min(3, libimagepipelinev.length)))) {
       let forwardI = 5.0;
       let pingT = 3.0;
       let downloadingk = String.fromCharCode(119,114,105,116,101,97,98,108,101,0);
       let appsp: Array<any> = [706, 657, 626];
       let bdxadsdkl = false;
          let floater1 = String.fromCharCode(115,116,111,114,101,102,114,97,109,101,0);
          let downloadt = 1.0;
         forwardI -= parseInt(`${pingT}`) % 3;
         floater1 += `${floater1.length * parseInt(`${downloadt}`)}`;
         downloadt -= parseFloat(`${3}`);
         pingT += appsp.length | 2;
         appsp = [((bdxadsdkl ? 1 : 3))];
          let hover5 = 1.0;
         pingT += downloadingk.length;
         hover5 += parseFloat(`${parseInt(`${hover5}`)}`);
      let binddatasD = forwardI <= 7917908.0;
      do {
          let teamk = false;
          let anythinki = true;
         forwardI -= (parseInt(`${forwardI}`) >> (Math.min(2, Math.abs((bdxadsdkl ? 2 : 5)))));
         teamk = (!anythinki ? teamk : anythinki);
         if (binddatasD) {
            break;
         }
      } while ((2.57 >= (forwardI / (Math.max(downloadingk.length, 8))) || (forwardI / 2.57) >= 2.58) && binddatasD);
      if (bdxadsdkl) {
          let libjsinspectorq = 5.0;
         appsp.push(2);
         libjsinspectorq += parseFloat(`${parseInt(`${libjsinspectorq}`)}`);
      }
      let buildj = forwardI <= 8440191.0;
      do {
         forwardI *= ((bdxadsdkl ? 3 : 5) * appsp.length);
         if (buildj) {
            break;
         }
      } while (((3 >> (Math.min(4, downloadingk.length))) < 4 && 4.14 < (2.71 * forwardI)) && buildj);
      for (let i = 0; i < 3; i++) {
         bdxadsdkl = appsp.length < forwardI;
      }
      for (let l = 0; l < 3; l++) {
          let leaguej = false;
          let thailandx = 0.0;
          let header8 = 1.0;
         downloadingk = `${(parseInt(`${forwardI}`) | (leaguej ? 1 : 3))}`;
         leaguej = 33.5 < thailandx;
         thailandx -= parseFloat(`${parseInt(`${header8}`)}`);
         header8 *= parseInt(`${thailandx}`);
      }
      let runtimeJ = bdxadsdkl ? !bdxadsdkl : bdxadsdkl;
      do {
         bdxadsdkl = appsp.length > parseInt(`${forwardI}`);
         if (runtimeJ) {
            break;
         }
      } while (runtimeJ && (5.16 > forwardI));
         bdxadsdkl = !bdxadsdkl;
      if (bdxadsdkl && (pingT * 2.85) < 1.92) {
         bdxadsdkl = forwardI == 8.7;
      }
      let sportF = String.fromCharCode(52,53,52,53,112,55,100,118,108,121,0) == downloadingk;
      do {
         downloadingk = `${1 % (Math.max(3, parseInt(`${pingT}`)))}`;
         if (sportF) {
            break;
         }
      } while (sportF && ((3 & appsp.length) > 2));
         pingT -= 2;
      for (let y = 0; y < 3; y++) {
         appsp.push(2 << (Math.min(5, Math.abs(parseInt(`${pingT}`)))));
      }
      libimagepipelinev = [libimagepipelinev.length];
   }
      libimagepipelinev.push(((combinedx ? 5 : 5) | (logoG ? 5 : 5)));
      bootsplashl += "3";
   if (home0 == parseFloat(`${privacyE.length}`)) {
       let android1 = 5.0;
       let libsgcoreM = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,0);
         android1 -= libsgcoreM.length >> (Math.min(2, Math.abs(parseInt(`${android1}`))));
      for (let p = 0; p < 2; p++) {
          let templateprocessorf: Array<any> = [851, 669];
          let bodand = true;
          let rnewinterstitiald = String.fromCharCode(105,100,115,117,98,116,121,112,101,0);
         libsgcoreM = `${(rnewinterstitiald.length ^ (bodand ? 2 : 3))}`;
         templateprocessorf = [templateprocessorf.length];
         bodand = templateprocessorf.length == 22;
      }
          let less7 = 0.0;
          let closew = String.fromCharCode(105,110,100,101,111,0);
         libsgcoreM += `${1 >> (Math.min(2, Math.abs(parseInt(`${android1}`))))}`;
         less7 *= 3;
         closew = `${closew.length}`;
         android1 *= 2;
       let largeY = String.fromCharCode(115,105,103,110,112,111,115,116,0);
       let baseR = String.fromCharCode(99,111,110,116,114,111,108,0);
      while (largeY != baseR) {
         baseR = `${libsgcoreM.length}`;
         break;
      }
      privacyE = `${(String.fromCharCode(49,0) == scheduleF ? scheduleF.length : parseInt(`${home0}`))}`;
   }
   let carouselR = bootsplashl == String.fromCharCode(99,113,57,105,0);
   do {
      bootsplashl = `${((combinedx ? 1 : 1) % (Math.max(bootsplashl.length, 5)))}`;
      if (carouselR) {
         break;
      }
   } while (carouselR && (4 < (2 | bootsplashl.length) || (bootsplashl.length | 2) < 2));
   let animations1 = gifti.size >= 8442400;
   do {
       let select9 = String.fromCharCode(115,112,101,99,116,114,117,109,0);
         select9 = `${(String.fromCharCode(84,0) == select9 ? select9.length : select9.length)}`;
         select9 += `${(select9 == String.fromCharCode(105,0) ? select9.length : select9.length)}`;
      for (let h = 0; h < 2; h++) {
         select9 += "2";
      }
      gifti = new Map([[`${combinedx}`, 3 >> (Math.min(Math.abs(parseInt(`${home0}`)), 1))]]);
      if (animations1) {
         break;
      }
   } while ((combinedx) && animations1);
      logoG = 11 < libimagepipelinev.length;
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let analyticd = 0.0;
    let submitE = false;
    let pnewsz: Array<any> = [622, 715];
    let background_ = String.fromCharCode(104,105,103,104,115,104,101,108,102,0);
    let regengY = false;
    let zhengpianA = 0.0;
    let librrcF = String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,0);
    let stationt = 3;
    let redirectk = String.fromCharCode(112,111,105,110,116,101,114,115,0);
    let lefts = false;
    let renderD = String.fromCharCode(111,118,101,114,108,97,121,105,110,103,0);
    let libreactperfloggerjniM: Map<any, any> = new Map([[String.fromCharCode(109,97,115,116,101,114,105,110,103,0),String.fromCharCode(118,105,115,105,98,108,105,116,121,0)], [String.fromCharCode(118,108,99,115,112,101,99,0),String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,115,0)], [String.fromCharCode(109,97,105,110,102,117,110,99,0),String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,0)]]);
    let playlist2: Array<any> = [810, 882, 59];
    let usernameI = true;
      analyticd /= Math.max(1, background_.length);
   for (let l = 0; l < 3; l++) {
      lefts = 52 >= libreactperfloggerjniM.size && stationt >= 52;
   }
       let whistlee = String.fromCharCode(110,116,101,114,102,97,99,101,0);
      if (whistlee.includes(whistlee)) {
         whistlee += `${whistlee.length}`;
      }
      for (let e = 0; e < 3; e++) {
         whistlee = "3";
      }
      while (whistlee.length >= whistlee.length) {
         whistlee += `${whistlee.length * 1}`;
         break;
      }
      regengY = lefts;
   while (lefts) {
      regengY = background_.length == 38;
      break;
   }
      analyticd -= 1;
       let update_0fJ = String.fromCharCode(99,111,109,109,97,0);
       let videocommone: Array<any> = [341, 26];
      let zoom1 = 6696710 <= update_0fJ.length;
      do {
         update_0fJ += `${update_0fJ.length * 3}`;
         if (zoom1) {
            break;
         }
      } while (zoom1 && ((update_0fJ.length * 3) < 2 && (3 * update_0fJ.length) < 1));
          let promotionI: Map<any, any> = new Map([[String.fromCharCode(117,110,98,97,110,0),String.fromCharCode(101,120,116,101,114,110,97,108,108,121,0)], [String.fromCharCode(99,108,111,99,107,100,114,105,102,116,0),String.fromCharCode(110,111,110,99,101,0)]]);
          let abouto = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,0);
          let annerH = String.fromCharCode(112,112,102,108,97,103,115,0);
         videocommone.push(2);
         promotionI = new Map([[`${promotionI.size}`, 1]]);
         abouto = `${(String.fromCharCode(65,0) == annerH ? annerH.length : abouto.length)}`;
      if (!update_0fJ.endsWith(`${videocommone.length}`)) {
         update_0fJ += `${videocommone.length}`;
      }
          let libcxxcomponentsf = String.fromCharCode(104,105,103,104,0);
          let matches8: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,101,0),129], [String.fromCharCode(105,110,118,0),787], [String.fromCharCode(117,114,108,99,111,110,116,101,120,116,0),665]]);
         videocommone = [3 * videocommone.length];
         libcxxcomponentsf = `${(String.fromCharCode(122,0) == libcxxcomponentsf ? libcxxcomponentsf.length : matches8.size)}`;
         matches8 = new Map([[`${matches8.size}`, 2 | matches8.size]]);
         videocommone = [videocommone.length];
          let episodes0 = String.fromCharCode(110,97,99,107,0);
          let checkbox3: Array<any> = [698, 819];
         update_0fJ = `${(update_0fJ == String.fromCharCode(107,0) ? update_0fJ.length : episodes0.length)}`;
         episodes0 += `${checkbox3.length + checkbox3.length}`;
      analyticd *= stationt;
      background_ = `${stationt}`;
   let gradle2 = pnewsz.length >= 8551369;
   do {
      pnewsz.push(((submitE ? 4 : 1) - (regengY ? 5 : 3)));
      if (gradle2) {
         break;
      }
   } while (gradle2 && (2 < (pnewsz.length & 1) && 1 < (pnewsz.length & 1)));
       let relatedy: Array<any> = [String.fromCharCode(100,111,119,110,108,111,97,100,0), String.fromCharCode(119,95,50,48,0)];
       let mbbido = 4.0;
      let select0 = relatedy.length <= 6948399;
      do {
         relatedy = [2 << (Math.min(Math.abs(parseInt(`${mbbido}`)), 5))];
         if (select0) {
            break;
         }
      } while (select0 && (relatedy.includes(mbbido)));
          let mimou = String.fromCharCode(110,104,97,110,99,101,0);
          let whitep = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,0);
          let panglen = 0.0;
         relatedy.push((mimou == String.fromCharCode(106,0) ? relatedy.length : mimou.length));
         whitep += "3";
         panglen /= Math.max(whitep.length, 1);
         mbbido *= parseFloat(`${parseInt(`${mbbido}`) - 2}`);
       let statisticsg = true;
       let mathj = true;
         statisticsg = !mathj;
      if ((2 ^ relatedy.length) == 4 || relatedy.length == 2) {
          let overlayk = 5.0;
          let canvasx = false;
          let combinedD = 4.0;
          let bdxadsdk5 = 3;
         statisticsg = 3 >= bdxadsdk5;
         overlayk -= (parseFloat(`${(canvasx ? 3 : 1) / (Math.max(1, parseInt(`${combinedD}`)))}`));
         canvasx = combinedD > 96.95;
         bdxadsdk5 %= Math.max(1 / (Math.max(4, parseInt(`${overlayk}`))), 3);
      }
      regengY = relatedy.length < 44;
       let commonk = String.fromCharCode(99,97,108,108,105,110,103,0);
       let settingsd: Array<any> = [202, 435, 185];
       let catagoryJ = 2.0;
      let schedulerS = 8012218 <= settingsd.length;
      do {
         settingsd = [1 * commonk.length];
         if (schedulerS) {
            break;
         }
      } while (schedulerS && (settingsd.includes(catagoryJ)));
      let xadsdkX = settingsd.length >= 8885152;
      do {
         settingsd.push(parseInt(`${catagoryJ}`));
         if (xadsdkX) {
            break;
         }
      } while (xadsdkX && (!settingsd.includes(catagoryJ)));
      for (let e = 0; e < 1; e++) {
         settingsd.push(settingsd.length << (Math.min(Math.abs(2), 5)));
      }
      for (let b = 0; b < 1; b++) {
         commonk = `${parseInt(`${catagoryJ}`) / 1}`;
      }
         catagoryJ *= parseFloat(`${settingsd.length}`);
         catagoryJ += parseFloat(`${parseInt(`${catagoryJ}`)}`);
      if ((commonk.length & 3) > 4 || (commonk.length & settingsd.length) > 3) {
         settingsd = [3];
      }
          let nativemodule1: Array<any> = [206, 774, 857];
         catagoryJ += parseFloat(`${settingsd.length >> (Math.min(commonk.length, 4))}`);
         nativemodule1 = [nativemodule1.length * nativemodule1.length];
      while (5 <= (settingsd.length << (Math.min(Math.abs(3), 3))) && (parseInt(`${catagoryJ}`) * settingsd.length) <= 3) {
          let runtimeW: Array<any> = [652, 517, 650];
          let roundw = 4.0;
          let graphX = String.fromCharCode(104,105,103,104,98,105,116,115,0);
         settingsd = [parseInt(`${roundw}`)];
         runtimeW.push(2);
         graphX = `${graphX.length / 3}`;
         break;
      }
      submitE = renderD == String.fromCharCode(108,0);
   let trashh = String.fromCharCode(51,99,99,113,102,118,106,55,108,0) == librrcF;
   do {
       let qaagk: Map<any, any> = new Map([[String.fromCharCode(116,104,97,116,0),621], [String.fromCharCode(112,114,101,118,101,110,116,115,0),227], [String.fromCharCode(102,111,117,110,100,97,116,105,111,110,0),527]]);
      let progressY = qaagk.size >= 9657270;
      do {
          let selection_ = String.fromCharCode(102,108,111,111,114,115,0);
          let roboton: Array<any> = [String.fromCharCode(103,97,116,101,0), String.fromCharCode(105,110,100,101,120,0), String.fromCharCode(114,101,100,117,110,100,97,110,99,121,0)];
          let catalogM = 4.0;
          let bings: Map<any, any> = new Map([[String.fromCharCode(115,117,98,100,97,116,97,0),407], [String.fromCharCode(102,111,112,101,110,0),672]]);
          let clubn = String.fromCharCode(112,114,117,110,105,110,103,0);
         qaagk = new Map([[clubn, 2 & selection_.length]]);
         selection_ += `${parseInt(`${catalogM}`) ^ 2}`;
         roboton = [1];
         catalogM /= Math.max(bings.size, 4);
         bings = new Map([[`${roboton.length}`, roboton.length]]);
         clubn = "1";
         if (progressY) {
            break;
         }
      } while (progressY && ((qaagk.size / (Math.max(9, qaagk.size))) >= 4 || 2 >= (qaagk.size / 4)));
      for (let f = 0; f < 1; f++) {
          let type_5ui: Array<any> = [51, 494];
          let renewH = 5.0;
          let annerl: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,116,99,0),757], [String.fromCharCode(102,105,116,122,0),565], [String.fromCharCode(116,105,100,121,0),741]]);
          let redirect2: Array<any> = [String.fromCharCode(106,115,105,109,100,100,99,116,0), String.fromCharCode(112,101,111,112,108,101,0)];
         qaagk.set(`${renewH}`, 3);
         type_5ui.push(annerl.size % (Math.max(5, redirect2.length)));
         renewH -= redirect2.length | annerl.size;
      }
       let predictionN: Map<any, any> = new Map([[String.fromCharCode(101,108,101,109,101,110,116,0),true ], [String.fromCharCode(115,101,101,107,0),true ]]);
       let statistics9: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,0),223], [String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,108,121,0),670], [String.fromCharCode(115,105,103,105,110,116,0),51]]);
      librrcF += `${renderD.length | librrcF.length}`;
      if (trashh) {
         break;
      }
   } while (trashh && (1 == stationt));
      submitE = pnewsz.length > parseInt(`${analyticd}`);
   if ((libreactperfloggerjniM.size & 2) <= 2 && submitE) {
       let star5: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,112,97,116,104,0),572], [String.fromCharCode(98,105,116,118,101,99,115,0),431], [String.fromCharCode(99,111,109,112,117,116,101,100,0),196]]);
       let securityi = 4.0;
       let league6 = 4.0;
          let animationsU: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,112,101,110,0),269], [String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,0),858], [String.fromCharCode(102,116,121,112,0),150]]);
          let xvodN = String.fromCharCode(116,106,101,120,97,109,112,108,101,116,101,115,116,0);
         securityi += parseFloat(`${2 >> (Math.min(1, Math.abs(parseInt(`${league6}`))))}`);
         animationsU.set(`${xvodN}`, 1 | animationsU.size);
         xvodN = `${animationsU.size / 3}`;
      let viewer3 = 7144077 >= star5.size;
      do {
         star5 = new Map([[`${securityi}`, 2]]);
         if (viewer3) {
            break;
         }
      } while (viewer3 && (3.78 < (parseFloat(`${star5.size}`) + securityi) && (star5.size >> (Math.min(Math.abs(2), 1))) < 5));
      let loginh = securityi <= 8071101.0;
      do {
         securityi /= Math.max(parseFloat(`${2 * star5.size}`), 3);
         if (loginh) {
            break;
         }
      } while (loginh && (1.59 > (league6 - securityi) || 1.59 > (securityi - league6)));
          let megaphoneE = String.fromCharCode(110,111,110,102,97,116,97,108,0);
         securityi += parseFloat(`${parseInt(`${securityi}`)}`);
         megaphoneE = `${megaphoneE.length}`;
       let libffmpegkitI = String.fromCharCode(112,114,111,100,117,99,116,115,0);
      if (5.7 <= (securityi / (Math.max(2, league6))) || (securityi / (Math.max(league6, 10))) <= 5.7) {
         league6 *= (libffmpegkitI == String.fromCharCode(49,0) ? libffmpegkitI.length : parseInt(`${league6}`));
      }
       let zhengpianU = 5.0;
       let rewardvideoS = 2.0;
      while (2.51 == (league6 * 4)) {
          let dicer: Map<any, any> = new Map([[String.fromCharCode(98,101,105,110,103,0),829], [String.fromCharCode(104,112,114,101,100,0),204], [String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,0),67]]);
          let modalR = String.fromCharCode(114,101,109,98,0);
          let networkL: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,110,100,0),290], [String.fromCharCode(98,114,111,97,100,99,97,115,116,0),447], [String.fromCharCode(114,101,115,116,0),200]]);
          let unselectedN = String.fromCharCode(112,114,101,100,120,108,0);
         securityi *= (parseFloat(`${String.fromCharCode(109,0) == modalR ? modalR.length : parseInt(`${rewardvideoS}`)}`));
         dicer.set(`${unselectedN}`, (unselectedN == String.fromCharCode(119,0) ? unselectedN.length : dicer.size));
         networkL.set(unselectedN, networkL.size | unselectedN.length);
         break;
      }
      if (securityi >= zhengpianU) {
          let typesQ: Array<any> = [913, 613];
          let plashH = String.fromCharCode(100,116,100,102,0);
          let fullb = String.fromCharCode(104,99,115,99,97,108,101,0);
          let detailu = String.fromCharCode(111,118,101,114,117,115,101,0);
          let combinede = false;
         zhengpianU -= parseFloat(`${fullb.length | parseInt(`${securityi}`)}`);
         typesQ.push(plashH.length);
         plashH = `${1 * typesQ.length}`;
         fullb = `${((combinede ? 3 : 1) >> (Math.min(typesQ.length, 5)))}`;
         detailu = `${plashH.length}`;
      }
      libreactperfloggerjniM = new Map([[background_, 3]]);
   }
      zhengpianA -= renderD.length;
   if (renderD.includes(`${regengY}`)) {
      regengY = !submitE;
   }
      librrcF += `${2 ^ parseInt(`${zhengpianA}`)}`;
   if (!regengY) {
      renderD = `${parseInt(`${analyticd}`) | 2}`;
   }
   while (5 <= (libreactperfloggerjniM.size >> (Math.min(Math.abs(4), 3))) && 5 <= (4 >> (Math.min(3, Math.abs(libreactperfloggerjniM.size))))) {
      libreactperfloggerjniM = new Map([[`${pnewsz.length}`, 1 + stationt]]);
      break;
   }

    brightShare.value = await SystemSetting.getAppBrightness();

      zhengpianA /= Math.max(4, 3);
   for (let i = 0; i < 1; i++) {
      pnewsz = [(redirectk == String.fromCharCode(90,0) ? redirectk.length : playlist2.length)];
   }
   if (submitE) {
       let gestureg = String.fromCharCode(114,111,119,115,112,97,110,0);
       let pingb = String.fromCharCode(115,116,97,114,116,105,110,103,0);
       let shrinky: Map<any, any> = new Map([[String.fromCharCode(109,105,100,95,111,95,51,57,0),180], [String.fromCharCode(114,101,112,108,97,99,101,100,0),177]]);
       let time_ucz = String.fromCharCode(105,114,114,101,108,118,97,110,116,0);
       let auto_zA = String.fromCharCode(114,105,118,97,116,101,0);
         pingb += `${(gestureg == String.fromCharCode(112,0) ? auto_zA.length : gestureg.length)}`;
      for (let y = 0; y < 3; y++) {
          let skipf = true;
          let p_lockP = 5.0;
          let modityu = 2;
          let stationj: Array<any> = [777, 693, 258];
         time_ucz = `${stationj.length}`;
         skipf = p_lockP == 13.76 && modityu == 84;
         p_lockP *= parseFloat(`${parseInt(`${p_lockP}`) % 1}`);
         modityu &= (parseInt(`${p_lockP}`) * (skipf ? 4 : 5));
         stationj.push(modityu << (Math.min(2, Math.abs(3))));
      }
      if (4 <= (shrinky.size >> (Math.min(Math.abs(1), 2))) && (time_ucz.length >> (Math.min(Math.abs(1), 5))) <= 2) {
         shrinky.set(time_ucz, time_ucz.length);
      }
      for (let m = 0; m < 1; m++) {
         gestureg = `${shrinky.size | time_ucz.length}`;
      }
      for (let r = 0; r < 1; r++) {
         shrinky = new Map([[`${shrinky.size}`, auto_zA.length]]);
      }
      for (let d = 0; d < 2; d++) {
         time_ucz = `${gestureg.length & auto_zA.length}`;
      }
      if (shrinky.size == 5) {
         shrinky.set(gestureg, (String.fromCharCode(65,0) == gestureg ? gestureg.length : pingb.length));
      }
         time_ucz += "2";
          let graphP: Map<any, any> = new Map([[String.fromCharCode(100,114,97,102,116,0),5], [String.fromCharCode(114,102,116,102,115,117,98,0),582]]);
         shrinky.set(auto_zA, auto_zA.length << (Math.min(2, pingb.length)));
         graphP.set(`${graphP.size}`, graphP.size >> (Math.min(Math.abs(graphP.size), 2)));
      if (time_ucz != gestureg) {
         gestureg = `${(time_ucz == String.fromCharCode(56,0) ? shrinky.size : time_ucz.length)}`;
      }
         pingb = `${shrinky.size % (Math.max(5, pingb.length))}`;
         pingb = `${1 * pingb.length}`;
         pingb = `${shrinky.size}`;
      if ((5 % (Math.max(6, time_ucz.length))) <= 5 && 2 <= (5 % (Math.max(1, shrinky.size)))) {
         time_ucz += `${time_ucz.length % 1}`;
      }
      let userA = String.fromCharCode(101,122,95,97,56,95,101,108,100,0) == pingb;
      do {
          let animationF = String.fromCharCode(117,115,97,98,108,101,0);
         pingb += `${3 - pingb.length}`;
         animationF += `${animationF.length / 2}`;
         if (userA) {
            break;
         }
      } while ((gestureg != String.fromCharCode(120,0)) && userA);
      submitE = analyticd <= redirectk.length;
   }
   let abidetectR = background_.length >= 9514187;
   do {
      background_ += `${pnewsz.length}`;
      if (abidetectR) {
         break;
      }
   } while (abidetectR && ((background_.length << (Math.min(4, pnewsz.length))) == 4 || (background_.length << (Math.min(5, pnewsz.length))) == 4));
   let scorey = redirectk.length >= 7752065;
   do {
      redirectk += `${1 * renderD.length}`;
      if (scorey) {
         break;
      }
   } while (scorey && (background_ == redirectk));
       let searchD = false;
       let bingY = 1.0;
         searchD = bingY == 20.91 && searchD;
          let dataf = String.fromCharCode(112,114,111,102,105,108,101,0);
         bingY /= Math.max(1, 2 * dataf.length);
       let chartW = String.fromCharCode(100,101,97,99,116,105,118,97,116,101,0);
       let recommendationz = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,0);
       let targetw = String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,0);
       let contextO = String.fromCharCode(114,111,102,105,108,101,0);
       let dataT = String.fromCharCode(100,111,109,105,110,97,110,116,0);
       let renderp = true;
       let yingh = true;
      submitE = librrcF.endsWith(`${regengY}`);
      background_ = `${(parseInt(`${analyticd}`) % (Math.max(4, (submitE ? 3 : 1))))}`;
   let libruntimeexecutor4 = String.fromCharCode(49,118,108,95,118,52,118,57,102,0) == background_;
   do {
      background_ += `${(String.fromCharCode(53,0) == librrcF ? librrcF.length : parseInt(`${zhengpianA}`))}`;
      if (libruntimeexecutor4) {
         break;
      }
   } while (libruntimeexecutor4 && (5 < (playlist2.length / 4)));
   if (5.51 <= (analyticd / 2.11) && 2 <= (5 << (Math.min(1, pnewsz.length)))) {
      analyticd /= Math.max(2, 2 + parseInt(`${zhengpianA}`));
   }
       let transferW = String.fromCharCode(102,111,114,109,97,116,116,105,110,103,0);
       let bannerL = String.fromCharCode(115,119,105,99,104,0);
         transferW = `${bannerL.length % 1}`;
          let spinner5 = 0.0;
          let logoa = 2;
         transferW += `${bannerL.length ^ transferW.length}`;
         spinner5 /= Math.max(3, parseFloat(`${parseInt(`${spinner5}`)}`));
         logoa <<= Math.min(4, Math.abs(1 | logoa));
          let minimizeL = String.fromCharCode(102,116,101,108,108,0);
          let fadfdeebbbfdabbbabdadfaaddaaJ = 4.0;
         transferW = `${transferW.length << (Math.min(Math.abs(3), 5))}`;
         minimizeL = `${parseInt(`${fadfdeebbbfdabbbabdadfaaddaaJ}`) | 2}`;
         fadfdeebbbfdabbbabdadfaaddaaJ += parseFloat(`${minimizeL.length * 3}`);
      for (let z = 0; z < 2; z++) {
         bannerL += `${transferW.length}`;
      }
         transferW += `${(transferW == String.fromCharCode(57,0) ? bannerL.length : transferW.length)}`;
      for (let m = 0; m < 3; m++) {
         bannerL = `${bannerL.length}`;
      }
      renderD = `${stationt % (Math.max(4, transferW.length))}`;
   let chatH = zhengpianA >= 5180757.0;
   do {
      zhengpianA -= (3 / (Math.max(9, (regengY ? 2 : 4))));
      if (chatH) {
         break;
      }
   } while (chatH && (zhengpianA <= background_.length));
   while (4 >= (pnewsz.length | 1)) {
      analyticd += 2 & parseInt(`${zhengpianA}`);
      break;
   }
   for (let d = 0; d < 3; d++) {
      libreactperfloggerjniM = new Map([[redirectk, (background_ == String.fromCharCode(71,0) ? background_.length : redirectk.length)]]);
   }
      zhengpianA -= background_.length ^ 2;
   while (redirectk.length == 2) {
      redirectk = "1";
      break;
   }
   let runtimeschedulere = 8348258 <= redirectk.length;
   do {
      redirectk = `${libreactperfloggerjniM.size}`;
      if (runtimeschedulere) {
         break;
      }
   } while (runtimeschedulere && (2 > librrcF.length));
      analyticd -= (String.fromCharCode(67,0) == background_ ? background_.length : (regengY ? 2 : 1));
      analyticd += (String.fromCharCode(79,0) == redirectk ? libreactperfloggerjniM.size : redirectk.length);
    volumeShare.value = await SystemSetting.getVolume();
  };

  const onBrightnessChanged = (newVal: number, prevVal: number) => {
    showControls();
    let different = ((prevVal - newVal) / height) * 2.5; 
    let newVol = different + brightShare.value;

    if (
      (0 > newVol && brightShare.value === 0) ||
      (1 < newVol && brightShare.value === 1)
    )
      return;

    if (0 >= newVol && brightShare.value !== 0) {
      newVol = 0;
    } else if (1 <= newVol && brightShare.value !== 1) {
      newVol = 1;
    }

    brightShare.value = newVol;
    setSettings({ name: "brightness", value: newVol });
    SystemSetting.setAppBrightness(newVol);
  };

  const onVolumeChanged = (newVal: number, prevVal: number) => {
    showControls();
    let different = ((prevVal - newVal) / height) * 2.5; 
    let newVol = different + volumeShare.value;

    if (
      (0 > newVol && volumeShare.value === 0) ||
      (1 < newVol && volumeShare.value === 1)
    )
      return;

    if (0 >= newVol && volumeShare.value !== 0) {
      newVol = 0;
    } else if (1 <= newVol && volumeShare.value !== 1) {
      newVol = 1;
    }

    volumeShare.value = newVol;
    setSettings({ name: "megaphoneConst_4Binddatas", value: newVol });
    SystemSetting.setVolume(newVol);
  };

  const onProgressChange = (translation: number) => {
    if (translation > 0) {
      const bias = currentTime;
      const delX = width - previousPanPosition.value.x;
      const delY = totalDuration;
      
      
      
      
      const runtime =
        ((delY - bias) / Math.pow(delX, 2)) * Math.pow(translation, 2) + bias;
      setSettings({ name: "progress", value: runtime });
      onSeek(runtime);
    } else {
      const bias = currentTime;
      const delX = previousPanPosition.value.x;
      
      const runtime =
        (-bias / Math.pow(delX, 2)) * Math.pow(translation, 2) + bias;
      runOnJS(onSeek)(runtime);
    }
  };

  const resetSettings = () => {
       let recommendationg = false;
    let sigmobr: Array<any> = [31, 892];
    let icon0 = String.fromCharCode(112,114,111,100,117,99,116,105,111,110,0);
    let benefitz: Map<any, any> = new Map([[String.fromCharCode(97,112,101,114,0),String.fromCharCode(100,101,99,111,114,97,116,111,114,115,0)], [String.fromCharCode(112,114,105,110,116,118,97,108,0),String.fromCharCode(112,114,111,114,101,115,100,115,112,0)], [String.fromCharCode(103,97,116,104,101,114,105,110,103,0),String.fromCharCode(115,101,112,97,114,97,116,101,0)]]);
    let register_rfg = String.fromCharCode(99,97,110,116,111,112,101,110,0);
    let indicatorc = 5.0;
    let volumet = 1.0;
    let componenti = String.fromCharCode(99,104,111,111,115,101,0);
       let d_unlockS = 0.0;
       let guidev = String.fromCharCode(115,113,114,116,110,101,103,0);
       let langw = String.fromCharCode(108,95,57,49,0);
          let securityf = String.fromCharCode(103,111,108,100,0);
          let rewardm = String.fromCharCode(113,115,116,101,112,0);
         d_unlockS *= rewardm.length << (Math.min(Math.abs(3), 1));
         securityf = `${securityf.length | 2}`;
         rewardm = "2";
         langw = `${1 | guidev.length}`;
      let n_lockM = String.fromCharCode(115,100,111,100,115,114,0) == guidev;
      do {
          let clearb = String.fromCharCode(107,105,110,100,0);
         guidev += `${(String.fromCharCode(79,0) == langw ? guidev.length : langw.length)}`;
         clearb = `${clearb.length}`;
         if (n_lockM) {
            break;
         }
      } while ((4 >= (5 * guidev.length) || 4.79 >= (d_unlockS / (Math.max(guidev.length, 5)))) && n_lockM);
      let libruntimeexecutorM = 8408161.0 >= d_unlockS;
      do {
          let entryo = 1;
         d_unlockS *= guidev.length | parseInt(`${d_unlockS}`);
         entryo <<= Math.min(Math.abs(1 >> (Math.min(4, Math.abs(entryo)))), 3);
         if (libruntimeexecutorM) {
            break;
         }
      } while (libruntimeexecutorM && (4 >= (guidev.length * parseInt(`${d_unlockS}`))));
         guidev = "3";
       let fastforwardS = 2;
          let configure9 = String.fromCharCode(116,97,103,97,118,114,0);
          let default_er: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,101,100,111,115,116,114,0),348], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,97,116,97,0),415], [String.fromCharCode(115,117,98,112,97,116,104,0),584]]);
          let combinef = String.fromCharCode(114,97,110,115,105,116,105,111,110,0);
         d_unlockS *= default_er.size;
         configure9 += `${combinef.length << (Math.min(Math.abs(3), 2))}`;
         default_er = new Map([[configure9, combinef.length]]);
         fastforwardS |= fastforwardS << (Math.min(Math.abs(1), 5));
          let vignetteF = String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0);
         d_unlockS -= langw.length;
         vignetteF += `${vignetteF.length / (Math.max(1, vignetteF.length))}`;
      indicatorc -= parseFloat(`${parseInt(`${volumet}`)}`);
       let kuaishouT: Array<any> = [String.fromCharCode(115,116,114,102,0), String.fromCharCode(118,101,114,105,102,105,101,114,0), String.fromCharCode(115,101,109,105,98,111,108,100,0)];
       let topicM = 4.0;
       let libsentrye = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,0);
       let textv: Array<any> = [413, 79];
          let overT = 0.0;
          let klevinA = String.fromCharCode(115,122,97,98,111,0);
         libsentrye = `${2 & libsentrye.length}`;
         overT -= parseInt(`${overT}`);
         klevinA = `${(klevinA == String.fromCharCode(114,0) ? parseInt(`${overT}`) : klevinA.length)}`;
      let typesV = 5839236.0 <= topicM;
      do {
         topicM *= parseFloat(`${1}`);
         if (typesV) {
            break;
         }
      } while ((3 < (libsentrye.length / 2)) && typesV);
         topicM /= Math.max(parseFloat(`${2}`), 3);
         topicM /= Math.max(parseFloat(`${kuaishouT.length}`), 5);
         topicM += parseFloat(`${2 - kuaishouT.length}`);
      if ((2.12 + topicM) == 1.62 && (parseInt(`${topicM}`) + libsentrye.length) == 4) {
         libsentrye = `${kuaishouT.length ^ 1}`;
      }
          let libsentryl = String.fromCharCode(105,100,101,110,116,0);
          let stepv: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,101,110,101,114,115,0),false ], [String.fromCharCode(112,117,115,104,101,100,0),true ]]);
          let control4: Array<any> = [226, 758, 540];
         libsentrye += `${kuaishouT.length & 3}`;
         libsentryl = "3";
         stepv.set(libsentryl, (libsentryl == String.fromCharCode(102,0) ? stepv.size : libsentryl.length));
         control4.push(control4.length);
       let awayq = String.fromCharCode(109,111,110,116,104,0);
      benefitz = new Map([[libsentrye, 1 >> (Math.min(4, libsentrye.length))]]);
      indicatorc += parseFloat(`${icon0.length}`);
   while (!recommendationg) {
      recommendationg = !recommendationg;
      break;
   }
       let watchy: Map<any, any> = new Map([[String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,0),String.fromCharCode(104,105,116,0)], [String.fromCharCode(97,108,97,110,103,117,97,103,101,0),String.fromCharCode(111,112,116,105,109,105,122,97,116,105,111,110,0)]]);
       let videog = 1.0;
       let thailandG = 2.0;
      if (4 > (parseInt(`${videog}`) / (Math.max(3, watchy.size))) || (4.51 / (Math.max(5, videog))) > 5.56) {
         watchy = new Map([[`${watchy.size}`, 1 * parseInt(`${videog}`)]]);
      }
      if ((parseInt(`${videog}`) - watchy.size) <= 3 && 3 <= (watchy.size << (Math.min(Math.abs(3), 4)))) {
          let baidue: Array<any> = [String.fromCharCode(102,105,103,104,116,101,114,115,0), String.fromCharCode(104,105,103,104,119,97,116,101,114,0)];
          let libzeusG = 2.0;
          let stylek = String.fromCharCode(115,116,97,116,115,0);
          let episodeP = 4;
         watchy.set(`${baidue.length}`, baidue.length << (Math.min(3, Math.abs(watchy.size))));
         libzeusG -= episodeP;
         stylek = `${(stylek == String.fromCharCode(116,0) ? stylek.length : episodeP)}`;
      }
         videog += parseFloat(`${3 & parseInt(`${thailandG}`)}`);
         videog /= Math.max(4, parseFloat(`${parseInt(`${thailandG}`)}`));
          let sheett: Array<any> = [305, 354, 576];
          let short_xW = true;
         videog *= parseFloat(`${parseInt(`${videog}`) | sheett.length}`);
         sheett = [1];
          let predictionv = 3;
          let gpayO = 0.0;
         videog *= parseFloat(`${1 ^ watchy.size}`);
         predictionv %= Math.max(3, predictionv);
         gpayO /= Math.max(predictionv, 3);
       let armvas: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,108,0),129], [String.fromCharCode(112,117,115,104,0),258]]);
      for (let w = 0; w < 3; w++) {
         watchy = new Map([[`${thailandG}`, parseInt(`${videog}`)]]);
      }
      let klevink = armvas.size >= 8047375;
      do {
          let chinaM = 1.0;
          let imagemanagerg = true;
          let fcopy_bq: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,0),625], [String.fromCharCode(99,97,108,99,108,117,108,97,116,101,0),247], [String.fromCharCode(103,101,116,115,111,99,107,97,100,100,114,0),694]]);
          let usernameY = 1.0;
         armvas.set(`${usernameY}`, parseInt(`${usernameY}`) + 3);
         chinaM += fcopy_bq.size % 2;
         imagemanagerg = !imagemanagerg;
         fcopy_bq.set(`${chinaM}`, ((imagemanagerg ? 4 : 1) % (Math.max(parseInt(`${chinaM}`), 3))));
         if (klevink) {
            break;
         }
      } while ((4 >= (watchy.size / (Math.max(armvas.size, 4))) && 1 >= (armvas.size / 4)) && klevink);
      volumet -= icon0.length;
      register_rfg += `${register_rfg.length + icon0.length}`;
   if ((parseFloat(`${register_rfg.length}`) / (Math.max(1, indicatorc))) < 3.32) {
      indicatorc -= (parseFloat(`${String.fromCharCode(78,0) == register_rfg ? register_rfg.length : benefitz.size}`));
   }
   if (4 <= icon0.length) {
       let renderr = String.fromCharCode(115,101,116,102,105,101,108,100,0);
      let j_countx = renderr.length <= 9046552;
      do {
         renderr += `${renderr.length << (Math.min(Math.abs(3), 5))}`;
         if (j_countx) {
            break;
         }
      } while (j_countx && (renderr == renderr));
      for (let l = 0; l < 3; l++) {
          let left2 = String.fromCharCode(108,111,117,100,110,111,114,109,0);
          let singleq = String.fromCharCode(109,111,110,111,115,112,97,99,101,100,0);
          let configureD = String.fromCharCode(101,120,97,110,100,101,100,0);
         renderr += "3";
         left2 = `${1 + configureD.length}`;
         singleq = `${configureD.length}`;
      }
      while (renderr == renderr) {
         renderr = "1";
         break;
      }
      benefitz = new Map([[register_rfg, register_rfg.length]]);
   }
   if (5.54 < (4.94 - indicatorc)) {
      recommendationg = 83 == register_rfg.length || icon0 == String.fromCharCode(56,0);
   }
       let acceptedh = String.fromCharCode(109,111,100,110,112,102,0);
       let classes2 = true;
      for (let x = 0; x < 2; x++) {
         acceptedh += `${((classes2 ? 2 : 4))}`;
      }
      let chat5 = classes2 ? !classes2 : classes2;
      do {
         classes2 = acceptedh.length >= 38;
         if (chat5) {
            break;
         }
      } while ((1 <= acceptedh.length || !classes2) && chat5);
          let videocommonc: Array<any> = [844, 119];
          let ballX = String.fromCharCode(109,97,120,98,105,116,114,97,116,101,0);
          let vietnamS = false;
         classes2 = (classes2 ? vietnamS : !classes2);
         videocommonc.push(videocommonc.length % (Math.max(ballX.length, 1)));
         ballX = `${ballX.length}`;
         vietnamS = String.fromCharCode(113,0) == ballX;
          let qaagI = 4.0;
         acceptedh = `${((classes2 ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${qaagI}`)), 5)))}`;
         acceptedh += `${((classes2 ? 2 : 4) * acceptedh.length)}`;
      if (!acceptedh.startsWith(`${classes2}`)) {
         acceptedh += `${(2 + (classes2 ? 1 : 2))}`;
      }
      indicatorc -= parseFloat(`${1}`);
      recommendationg = 75.81 <= indicatorc;
      volumet *= (sigmobr.length & (recommendationg ? 4 : 4));
      indicatorc /= Math.max(parseFloat(`${benefitz.size & 3}`), 2);
   let runtimeschedulerG = register_rfg.length >= 8509630;
   do {
       let resultk = false;
       let librrcG = String.fromCharCode(97,108,108,111,119,115,0);
       let combine5 = false;
      for (let e = 0; e < 1; e++) {
         librrcG += `${(librrcG.length ^ (combine5 ? 3 : 5))}`;
      }
      while (librrcG.length < 4) {
          let unreadm = String.fromCharCode(118,97,114,108,101,110,103,116,104,0);
         librrcG += `${(librrcG == String.fromCharCode(78,0) ? (resultk ? 3 : 5) : librrcG.length)}`;
         unreadm = `${unreadm.length}`;
         break;
      }
      if (librrcG.includes(`${resultk}`)) {
         resultk = librrcG.length > 61 || resultk;
      }
      if (4 >= librrcG.length) {
         librrcG += `${(String.fromCharCode(66,0) == librrcG ? librrcG.length : (combine5 ? 1 : 5))}`;
      }
       let desc0: Array<any> = [413, 107];
          let chartX: Map<any, any> = new Map([[String.fromCharCode(100,99,112,114,101,100,0),String.fromCharCode(100,105,114,97,99,100,115,112,0)], [String.fromCharCode(115,117,98,106,111,117,114,110,97,108,0),String.fromCharCode(114,101,112,108,105,101,115,0)], [String.fromCharCode(116,101,115,118,101,114,116,0),String.fromCharCode(101,112,111,108,108,0)]]);
          let adultz: Map<any, any> = new Map([[String.fromCharCode(109,97,112,115,105,122,101,0),String.fromCharCode(100,101,108,101,103,97,116,111,114,0)], [String.fromCharCode(113,99,97,110,0),String.fromCharCode(117,112,100,97,116,101,114,0)], [String.fromCharCode(99,111,110,115,116,113,112,0),String.fromCharCode(105,110,116,101,114,102,97,99,101,0)]]);
          let descs: Array<any> = [79, 28];
         resultk = 70 < chartX.size || 70 < desc0.length;
         chartX = new Map([[`${adultz.size}`, descs.length + 1]]);
         adultz = new Map([[`${adultz.size}`, descs.length]]);
       let incidentU = 2.0;
       let heart6 = 5.0;
         combine5 = 73.50 <= heart6;
      while (desc0.length >= 4) {
          let libcrashsdkd = String.fromCharCode(98,105,116,118,101,99,116,111,114,0);
          let phonec: Map<any, any> = new Map([[String.fromCharCode(117,112,103,114,97,100,101,115,0),String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,0)], [String.fromCharCode(102,105,108,108,115,0),String.fromCharCode(110,117,108,108,112,97,99,107,101,116,0)]]);
          let fadfdeebbbfdabbbabdadfaaddaaa = true;
          let moviesT: Map<any, any> = new Map([[String.fromCharCode(116,116,97,103,0),true ], [String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,0),false ], [String.fromCharCode(112,97,108,98,97,114,115,0),false ]]);
         desc0.push(libcrashsdkd.length / 1);
         libcrashsdkd = `${phonec.size}`;
         phonec.set(`${fadfdeebbbfdabbbabdadfaaddaaa}`, phonec.size);
         moviesT = new Map([[`${phonec.size}`, phonec.size]]);
         break;
      }
      register_rfg += `${((resultk ? 3 : 4) & 2)}`;
      if (runtimeschedulerG) {
         break;
      }
   } while ((componenti.includes(`${register_rfg.length}`)) && runtimeschedulerG);
      recommendationg = 57.6 >= volumet;
       let libcrashsdko = String.fromCharCode(115,97,110,105,116,105,122,101,100,0);
       let sideJ = String.fromCharCode(105,110,99,111,114,114,101,99,116,0);
         sideJ = `${sideJ.length}`;
      if (sideJ != String.fromCharCode(100,0) && libcrashsdko != String.fromCharCode(85,0)) {
         libcrashsdko += `${sideJ.length}`;
      }
      while (libcrashsdko.includes(sideJ)) {
          let vietnamr = 1.0;
          let shootz = 1.0;
         libcrashsdko = `${(sideJ == String.fromCharCode(79,0) ? sideJ.length : parseInt(`${shootz}`))}`;
         vietnamr += parseInt(`${vietnamr}`);
         shootz /= Math.max(5, 1 << (Math.min(Math.abs(parseInt(`${vietnamr}`)), 1)));
         break;
      }
      for (let v = 0; v < 1; v++) {
          let securityN = String.fromCharCode(101,120,99,101,101,100,0);
          let proxyA = 0;
          let viewsY: Map<any, any> = new Map([[String.fromCharCode(111,99,99,117,112,105,101,100,0),false ], [String.fromCharCode(103,114,97,121,102,0),true ]]);
         libcrashsdko = `${libcrashsdko.length}`;
         securityN += `${viewsY.size}`;
         proxyA -= proxyA * viewsY.size;
      }
         libcrashsdko += `${libcrashsdko.length & 2}`;
      if (3 <= libcrashsdko.length || 3 <= sideJ.length) {
          let modityZ = String.fromCharCode(99,101,108,108,0);
          let soundk = String.fromCharCode(104,114,97,109,0);
          let guide4 = String.fromCharCode(103,101,110,101,114,97,116,105,110,103,0);
         sideJ += `${soundk.length + modityZ.length}`;
         modityZ = `${guide4.length | 3}`;
         soundk += "2";
      }
      recommendationg = componenti.length > 55;

    setSettings({ name: "none", value: 0 });
  };

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .enabled(enabled)
        .onStart((nativeEvent) => {
          runOnJS(setBrightVolumeShare)();
          previousPanPosition.value = {
            x: nativeEvent.x,
            y: nativeEvent.y,
            gesture: "none",
          };
        })
        .onUpdate((nativeEvent) => {
          if (panCooldown.value > 0) {
            panCooldown.value--;
            return;
          } else panCooldown.value = 3;

          const dx = nativeEvent.x - previousPanPosition.value.x;
          const dy = nativeEvent.y - previousPanPosition.value.y;
          const dydx = dy / dx;
          const absDyDx = Math.abs(dydx);

          
          if (absDyDx > 10) {
            const leftX = Math.floor(width / 2 - 20);
            const rightX = Math.ceil(width / 2 + 20);
            if (
              nativeEvent.x <= leftX &&
              (settings.name === "none" || settings.name === "brightness")
            ) {
              runOnJS(onBrightnessChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            } else if (
              nativeEvent.x >= rightX &&
              (settings.name === "none" || settings.name === "megaphoneConst_4Binddatas")
            ) {
              runOnJS(onVolumeChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            }
          } else if (
            absDyDx < 0.05 &&
            vodType !== "floatingIndex" &&
            (settings.name === "none" || settings.name === "progress")
          ) {
            runOnJS(onProgressChange)(nativeEvent.translationX);
          }

          
          previousPanPosition.value = {
            x: nativeEvent.x,
            y: nativeEvent.y,
            gesture: "none",
          };
        })
        .onEnd(() => runOnJS(resetSettings)()),
    [previousPanPosition.value, enabled, settings]
  );

  const doubleTap = useMemo(
    () =>
      Gesture.Tap()
        .numberOfTaps(2)
        .enabled(enabled)
        .onStart((nativeEvent) => {
          isDoubleTap.value = true;

          const leftX = Math.floor(width / 2 - 20);
          const rightX = Math.ceil(width / 2 + 20);
          if (nativeEvent.x <= leftX) {
            runOnJS(onSkipBackwards)();
          } else if (nativeEvent.x >= rightX) {
            runOnJS(onSkipForward)();
          }
        }),
    [enabled]
  );

  
  
  
  
  
  
  

  const singleTap = useCallback(
    debounce(() => {
       let graphG: Array<any> = [299, 255];
    let playlistU = 0;
    let expand9: Array<any> = [195, 594, 476];
    let servicem = true;
    let stepC: Array<any> = [798, 26];
    let injuryi = String.fromCharCode(105,110,116,101,110,116,0);
    let inactive6: Array<any> = [588, 323];
    let usern: Map<any, any> = new Map([[String.fromCharCode(117,110,99,104,101,99,107,101,100,0),118], [String.fromCharCode(112,97,114,116,105,116,105,111,110,0),507], [String.fromCharCode(104,111,115,116,110,97,109,101,0),665]]);
    let mbnativey = String.fromCharCode(120,102,111,114,109,101,100,0);
    let codegenF = 0;
    let libcrashsdkQ: Map<any, any> = new Map([[String.fromCharCode(109,97,112,115,0),String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0)], [String.fromCharCode(98,101,114,114,105,101,115,0),String.fromCharCode(101,118,97,108,0)], [String.fromCharCode(114,101,115,117,108,116,105,110,103,0),String.fromCharCode(101,105,103,104,116,115,118,120,0)]]);
    let sports2: Array<any> = [352, 523];
       let areak = String.fromCharCode(117,110,119,105,110,100,0);
      if (2 <= areak.length) {
         areak = `${(String.fromCharCode(115,0) == areak ? areak.length : areak.length)}`;
      }
       let episode4: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,111,117,116,0),283], [String.fromCharCode(115,101,114,105,97,108,0),639], [String.fromCharCode(100,97,116,97,104,97,115,104,0),192]]);
       let megaphoney: Map<any, any> = new Map([[String.fromCharCode(110,97,112,115,104,111,116,0),false ], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0),true ]]);
       let libsgcoreA = String.fromCharCode(110,111,98,111,100,121,0);
       let controlsV = String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,0);
      inactive6 = [(areak == String.fromCharCode(101,0) ? areak.length : mbnativey.length)];
   let libswscaleQ = stepC.length <= 8898722;
   do {
      stepC = [mbnativey.length];
      if (libswscaleQ) {
         break;
      }
   } while (libswscaleQ && (1 > (4 % (Math.max(5, stepC.length))) || servicem));
   let rewardQ = 9643302 >= mbnativey.length;
   do {
      mbnativey += `${1 * injuryi.length}`;
      if (rewardQ) {
         break;
      }
   } while (((graphG.length - mbnativey.length) < 4 || 4 < (mbnativey.length - 4)) && rewardQ);
       let servicer = 2;
      if ((servicer << (Math.min(Math.abs(4), 1))) >= 5 && 4 >= (servicer << (Math.min(Math.abs(servicer), 4)))) {
          let videocommonc: Array<any> = [345, 134];
          let feedbacku = String.fromCharCode(112,114,101,115,115,101,115,0);
          let assistb: Array<any> = [573, 149];
         servicer %= Math.max(1 & servicer, 4);
         videocommonc.push(feedbacku.length);
         feedbacku = `${1 + videocommonc.length}`;
         assistb = [assistb.length];
      }
         servicer /= Math.max(2, servicer);
      for (let k = 0; k < 2; k++) {
         servicer *= 1;
      }
      servicem = expand9.length > graphG.length;
   let filledL = usern.size >= 5587526;
   do {
      usern.set(`${servicem}`, expand9.length);
      if (filledL) {
         break;
      }
   } while ((4 >= (codegenF / 3) && 3 >= (codegenF / (Math.max(usern.size, 10)))) && filledL);
       let shirtH = String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,0);
       let rewindw = String.fromCharCode(111,110,116,111,0);
       let smallC = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,0);
       let mbjscommonC = String.fromCharCode(114,101,116,114,105,101,100,0);
          let fieldB = 3.0;
          let trash6 = 5.0;
          let switch_hfQ: Array<any> = [45, 232, 422];
         smallC += `${rewindw.length ^ 3}`;
         fieldB -= 2;
         trash6 -= parseFloat(`${3 + switch_hfQ.length}`);
         switch_hfQ.push(3);
      let neonS = String.fromCharCode(115,99,115,105,107,52,122,110,0) == smallC;
      do {
         smallC = `${smallC.length}`;
         if (neonS) {
            break;
         }
      } while (neonS && (shirtH.length < smallC.length));
         smallC = `${shirtH.length}`;
      let complete8 = 7577036 <= mbjscommonC.length;
      do {
         mbjscommonC = `${3 >> (Math.min(3, smallC.length))}`;
         if (complete8) {
            break;
         }
      } while (complete8 && (!mbjscommonC.startsWith(`${rewindw.length}`)));
      if (smallC.length >= 2) {
         smallC = `${shirtH.length}`;
      }
      expand9 = [injuryi.length];
   if (5 >= (codegenF >> (Math.min(Math.abs(2), 4)))) {
      inactive6 = [2 - playlistU];
   }
   if ((inactive6.length % (Math.max(graphG.length, 2))) >= 2 && 3 >= (inactive6.length % 2)) {
      inactive6.push(playlistU);
   }
      mbnativey += `${libcrashsdkQ.size}`;

      if (!isDoubleTap.value) {

      libcrashsdkQ.set(`${codegenF}`, codegenF + inactive6.length);
   if (servicem) {
      servicem = 89 > usern.size;
   }
   if (1 < (codegenF ^ injuryi.length) && 1 < (1 ^ injuryi.length)) {
       let episodesT = true;
         episodesT = !episodesT;
      for (let m = 0; m < 2; m++) {
          let commonh = 1.0;
          let temperatureh: Array<any> = [741, 883];
          let launcher1 = 4.0;
          let currente: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,121,0),String.fromCharCode(112,99,109,117,0)], [String.fromCharCode(114,101,108,105,97,98,108,101,0),String.fromCharCode(109,117,110,109,97,112,0)]]);
          let checkboxi = String.fromCharCode(98,117,114,115,116,0);
         episodesT = currente.size > 89;
         commonh /= Math.max(parseFloat(`${checkboxi.length & 2}`), 5);
         temperatureh = [(String.fromCharCode(99,0) == checkboxi ? temperatureh.length : checkboxi.length)];
         launcher1 /= Math.max(3, parseFloat(`${1}`));
         currente = new Map([[`${launcher1}`, parseInt(`${commonh}`)]]);
      }
         episodesT = episodesT || !episodesT;
      injuryi = `${1 ^ mbnativey.length}`;
   }
   while (!Array.from(libcrashsdkQ.keys()).includes(`${codegenF}`)) {
       let huaweiV = 5.0;
       let bannerK = String.fromCharCode(109,100,97,121,0);
       let bdxadsdkx = 2.0;
      for (let d = 0; d < 1; d++) {
         bannerK = `${bannerK.length - 3}`;
      }
       let executor7 = String.fromCharCode(112,111,108,108,101,100,0);
       let searchU = String.fromCharCode(116,119,105,110,118,113,0);
      for (let t = 0; t < 3; t++) {
          let langkeyz = false;
          let entry7 = 2.0;
          let mbnativeA = 4.0;
          let android5 = String.fromCharCode(116,111,109,98,117,102,0);
          let moviese = 1;
         huaweiV += parseFloat(`${moviese / (Math.max(2, android5.length))}`);
         langkeyz = entry7 >= 4.17 || !langkeyz;
         entry7 *= parseInt(`${entry7}`) * 2;
         mbnativeA /= Math.max(4, (parseFloat(`${(langkeyz ? 1 : 4) % (Math.max(9, parseInt(`${mbnativeA}`)))}`)));
         android5 = `${((langkeyz ? 5 : 2) >> (Math.min(Math.abs(parseInt(`${entry7}`)), 2)))}`;
         moviese ^= (parseInt(`${entry7}`) - (langkeyz ? 2 : 4));
      }
      let matchesd = String.fromCharCode(55,100,117,97,113,0) == bannerK;
      do {
         bannerK = `${(String.fromCharCode(77,0) == executor7 ? executor7.length : parseInt(`${huaweiV}`))}`;
         if (matchesd) {
            break;
         }
      } while ((4 >= (bannerK.length / (Math.max(4, 9)))) && matchesd);
      while ((parseFloat(`${bannerK.length}`) + huaweiV) <= 1.83) {
         huaweiV -= parseFloat(`${2 & parseInt(`${huaweiV}`)}`);
         break;
      }
      let confirmation3 = huaweiV >= 4970224.0;
      do {
          let libavfilterJ = String.fromCharCode(98,117,105,108,116,105,110,0);
         huaweiV *= parseFloat(`${parseInt(`${bdxadsdkx}`) << (Math.min(1, Math.abs(1)))}`);
         libavfilterJ = `${libavfilterJ.length & 1}`;
         if (confirmation3) {
            break;
         }
      } while ((5 >= (searchU.length * parseInt(`${huaweiV}`)) && 1.23 >= (parseFloat(`${searchU.length}`) * huaweiV)) && confirmation3);
      let lineY = executor7.length >= 6389799;
      do {
          let typesi: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,110,101,114,115,0),true ], [String.fromCharCode(99,111,109,109,97,110,100,0),false ]]);
          let dialogL: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,0),683], [String.fromCharCode(110,97,116,105,111,110,97,108,0),547], [String.fromCharCode(109,115,103,115,109,100,101,99,0),806]]);
          let bottoms = 0.0;
         executor7 = `${3 | executor7.length}`;
         typesi.set(`${dialogL.size}`, dialogL.size);
         bottoms /= Math.max(parseFloat(`${parseInt(`${bottoms}`)}`), 3);
         if (lineY) {
            break;
         }
      } while ((bannerK.endsWith(`${executor7.length}`)) && lineY);
      if ((4 % (Math.max(3, bannerK.length))) == 5) {
         bdxadsdkx -= parseFloat(`${3 << (Math.min(1, executor7.length))}`);
      }
         huaweiV -= parseFloat(`${executor7.length / 3}`);
      codegenF *= inactive6.length ^ graphG.length;
      break;
   }
   let libfabricjniv = expand9.length <= 6293346;
   do {
       let renewH = String.fromCharCode(112,111,115,116,114,101,113,117,101,115,116,0);
       let latnc: Array<any> = [544, 940];
       let pangleH = String.fromCharCode(119,101,98,112,0);
       let promotionc: Map<any, any> = new Map([[String.fromCharCode(97,100,108,101,114,0),false ], [String.fromCharCode(100,112,114,105,110,116,0),true ]]);
          let gnewarchdefaultsC = String.fromCharCode(116,102,117,101,108,0);
          let switch_zU = String.fromCharCode(119,105,116,104,105,110,0);
          let runtimeschedulerU: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,105,110,103,0),String.fromCharCode(109,117,108,116,105,116,97,98,108,101,0)], [String.fromCharCode(116,111,111,116,105,112,0),String.fromCharCode(105,119,104,116,0)]]);
         pangleH += `${runtimeschedulerU.size}`;
         gnewarchdefaultsC = `${gnewarchdefaultsC.length}`;
         switch_zU += `${switch_zU.length}`;
         runtimeschedulerU.set(switch_zU, switch_zU.length * 3);
       let mbjscommonY = 5.0;
       let roundP = 2.0;
      while ((3 >> (Math.min(2, latnc.length))) == 2 || (3 & latnc.length) == 1) {
         roundP -= parseFloat(`${1 ^ latnc.length}`);
         break;
      }
         mbjscommonY *= parseFloat(`${parseInt(`${roundP}`) % (Math.max(latnc.length, 6))}`);
      if (5.47 <= (roundP - 5)) {
          let temperature7 = String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,0);
          let selectedw = String.fromCharCode(109,102,104,100,0);
          let runtime1: Array<any> = [165, 977];
         mbjscommonY += parseFloat(`${promotionc.size * 1}`);
         temperature7 += `${selectedw.length & 1}`;
         selectedw += `${selectedw.length}`;
         runtime1.push(temperature7.length);
      }
          let twitter4 = 3;
          let canvasH = String.fromCharCode(101,120,116,101,110,100,0);
          let matchN: Array<any> = [874, 699];
         roundP /= Math.max((parseFloat(`${String.fromCharCode(49,0) == renewH ? renewH.length : latnc.length}`)), 5);
         twitter4 &= twitter4;
         canvasH += `${matchN.length >> (Math.min(Math.abs(3), 2))}`;
         matchN = [canvasH.length << (Math.min(2, Math.abs(twitter4)))];
         roundP *= parseFloat(`${1}`);
      let shoot8 = latnc.length >= 8500704;
      do {
         latnc.push(renewH.length);
         if (shoot8) {
            break;
         }
      } while (shoot8 && (1 > latnc.length));
         mbjscommonY /= Math.max(3, parseFloat(`${parseInt(`${mbjscommonY}`) ^ parseInt(`${roundP}`)}`));
      if (5 < (pangleH.length & 4)) {
          let moviesq = true;
          let uimanagerA: Array<any> = [String.fromCharCode(105,110,99,114,101,97,115,105,110,103,0), String.fromCharCode(104,111,114,105,122,0)];
          let bdxadsdkH = 2.0;
          let volumeb = String.fromCharCode(100,117,114,98,0);
          let trophyN = 2.0;
         promotionc = new Map([[`${promotionc.size}`, 1]]);
         moviesq = volumeb.length == uimanagerA.length;
         uimanagerA = [(volumeb == String.fromCharCode(114,0) ? uimanagerA.length : volumeb.length)];
         bdxadsdkH -= volumeb.length;
         trophyN /= Math.max(2, (String.fromCharCode(122,0) == volumeb ? volumeb.length : uimanagerA.length));
      }
      let taiwanb = pangleH.length <= 5534278;
      do {
         pangleH = `${1 - parseInt(`${mbjscommonY}`)}`;
         if (taiwanb) {
            break;
         }
      } while (taiwanb && (renewH.length == pangleH.length));
      let mbnativeB = promotionc.size >= 7785506;
      do {
         promotionc.set(`${mbjscommonY}`, parseInt(`${roundP}`) << (Math.min(Math.abs(parseInt(`${mbjscommonY}`)), 1)));
         if (mbnativeB) {
            break;
         }
      } while (mbnativeB && (promotionc.size == pangleH.length));
      expand9.push(3);
      if (libfabricjniv) {
         break;
      }
   } while ((!Array.from(libcrashsdkQ.values()).includes(expand9.length)) && libfabricjniv);
      codegenF *= playlistU << (Math.min(4, Math.abs(1)));
   for (let h = 0; h < 1; h++) {
      libcrashsdkQ.set(`${codegenF}`, codegenF >> (Math.min(Math.abs(1), 4)));
   }
   let colorsZ = playlistU >= 7421298;
   do {
      playlistU *= inactive6.length;
      if (colorsZ) {
         break;
      }
   } while ((2 >= (4 * playlistU) || 1 >= (4 * graphG.length)) && colorsZ);
      injuryi = `${playlistU / (Math.max(2, 6))}`;
        onSingleTap(isDoubleTap.value);
      }

      isDoubleTap.value = false;
    }, 200),
    [onSingleTap]
  );

  const composed = disableControlsExceptTap || vodType === 'live' ? null : Gesture.Simultaneous(pan, doubleTap);

  return (
    <TouchableWithoutFeedback onPress={singleTap}>
      <View style={{ position: "absolute", height: "100%", width: "100%" }}>
        {composed ? (
          <GestureDetector gesture={composed}>
            <View style={{ flex: 1 }}>
              {children}
              {showSlider && settings.name === "brightness" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "newarchdefaultsBing" : "miniTelemetryUnread"}
                />
              )}
              {showSlider && settings.name === "megaphoneConst_4Binddatas" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "langkeyEmoji" : "combinedLangkeyLibfb"}
                />
              )}
            </View>
          </GestureDetector>
        ) : (
          <View style={{ flex: 1 }}>
            {children}
            {showSlider && settings.name === "brightness" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "newarchdefaultsBing" : "miniTelemetryUnread"}
              />
            )}
            {showSlider && settings.name === "megaphoneConst_4Binddatas" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "langkeyEmoji" : "combinedLangkeyLibfb"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
