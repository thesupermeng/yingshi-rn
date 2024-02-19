import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useSelector } from "@hooks";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux";
import { updateUsernameState } from "@redux";
import SpinnerOverlay from "./yys_catalog_edit";
import { yysHomeloading } from "@api";


interface yysIconarrowrightorangeStation {
    isVisible?: boolean;
    handleClose?: () => any;
    initialUsername: string,
    onSubmitSuccess?: (username: string) => void,
}

export const ChangeUsernameModal = ({
    isVisible = false,
    handleClose,
    initialUsername,
    onSubmitSuccess,
}: yysIconarrowrightorangeStation) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [username, setUsername] = useState(initialUsername);
    const [usernameErrMsg, setUsernameErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onUsernameChange = (value: any) => {
        setUsername(value);
        validateUsername(value.replace(/\s+/g, ""));
    };

    const validateUsername = (username: string): boolean => {
        if (2 <= username.length && username.length <= 18) {
            setUsernameErrMsg(null);
            return true;
        } else {
            setUsernameErrMsg("昵称必须介于2-18个字");
            return false;
        }
    }

    const resetForm = () => {
       let bridge7 = 1.0;
    let foregroundi = 1;
    let iconplay1 = 3.0;
    let cricketN = 5.0;
    let applicationo = 0.0;
    let rightZ = false;
    let iconnewchati = String.fromCharCode(115,105,109,112,108,101,119,114,105,116,101,0);
    let footballfiledlayoutG: Array<any> = [984, 563, 857];
    let disconnectedlogoo = String.fromCharCode(99,111,109,112,97,114,101,0);
    let libhermest = 3;
    let malaysia1 = String.fromCharCode(109,97,120,114,101,97,100,101,114,115,0);
    let yellowscoreballW = true;
    let codegen3 = String.fromCharCode(118,112,105,116,120,102,109,0);
    let whiteanimationlives: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,101,115,115,105,110,103,0),983], [String.fromCharCode(98,117,102,102,101,114,0),202]]);
    let liveR = String.fromCharCode(114,116,112,115,101,110,100,101,114,0);
    let apple9 = 3;
       let refreshborderlessv = String.fromCharCode(115,109,117,115,104,0);
       let modityC = String.fromCharCode(114,116,102,0);
       let statisticsinactiveo = String.fromCharCode(100,101,115,99,0);
         modityC += `${modityC.length}`;
      while (statisticsinactiveo.length > 5) {
         modityC += "1";
         break;
      }
      let utilsg = 6781793 >= modityC.length;
      do {
          let volumeB = String.fromCharCode(98,112,115,0);
          let play4 = false;
          let floatingM: Map<any, any> = new Map([[String.fromCharCode(102,111,114,99,101,100,0),false ], [String.fromCharCode(115,116,97,116,101,112,0),false ]]);
         modityC += `${(statisticsinactiveo == String.fromCharCode(122,0) ? statisticsinactiveo.length : volumeB.length)}`;
         volumeB += "2";
         play4 = (((play4 ? floatingM.size : 22) + floatingM.size) >= 88);
         if (utilsg) {
            break;
         }
      } while ((modityC.endsWith(refreshborderlessv)) && utilsg);
      if (refreshborderlessv == modityC) {
         modityC = `${statisticsinactiveo.length / (Math.max(6, modityC.length))}`;
      }
         modityC += `${(modityC == String.fromCharCode(70,0) ? refreshborderlessv.length : modityC.length)}`;
          let faviconR = true;
          let analyticg: Map<any, any> = new Map([[String.fromCharCode(109,100,116,97,0),913], [String.fromCharCode(106,112,101,103,100,119,116,0),675]]);
         modityC += `${((faviconR ? 2 : 5))}`;
         faviconR = (analyticg.size % (Math.max(5, analyticg.size))) < 33;
      for (let r = 0; r < 3; r++) {
         statisticsinactiveo = `${refreshborderlessv.length * statisticsinactiveo.length}`;
      }
      for (let c = 0; c < 1; c++) {
         statisticsinactiveo += `${statisticsinactiveo.length}`;
      }
      let overlayk = 7605101 <= modityC.length;
      do {
         modityC += `${refreshborderlessv.length >> (Math.min(3, modityC.length))}`;
         if (overlayk) {
            break;
         }
      } while (overlayk && (statisticsinactiveo.includes(modityC)));
      cricketN += parseFloat(`${3}`);
   if (!yellowscoreballW) {
      yellowscoreballW = cricketN < 10.9;
   }
   if (rightZ) {
       let componentregistryg: Map<any, any> = new Map([[String.fromCharCode(110,111,115,105,109,100,0),902], [String.fromCharCode(110,105,100,115,110,0),587]]);
       let pushz = 5.0;
       let bgvipsporto = 4.0;
      for (let e = 0; e < 1; e++) {
          let notificationfilledz: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,110,99,101,0),986], [String.fromCharCode(115,110,97,112,112,101,100,0),793]]);
          let cricketr = String.fromCharCode(102,108,111,119,0);
          let teamdetailsbg8 = 0;
         componentregistryg = new Map([[`${teamdetailsbg8}`, parseInt(`${pushz}`)]]);
         notificationfilledz = new Map([[`${notificationfilledz.size}`, cricketr.length]]);
         cricketr = `${(String.fromCharCode(82,0) == cricketr ? cricketr.length : notificationfilledz.size)}`;
         teamdetailsbg8 &= notificationfilledz.size | 2;
      }
         componentregistryg = new Map([[`${componentregistryg.size}`, componentregistryg.size % 3]]);
      cricketN *= parseFloat(`${libhermest / (Math.max(disconnectedlogoo.length, 1))}`);
   }
       let fillY = false;
      let episodep = fillY ? !fillY : fillY;
      do {
          let librrc8: Map<any, any> = new Map([[String.fromCharCode(98,119,114,105,116,101,0),524], [String.fromCharCode(99,97,116,97,108,111,103,0),454]]);
          let resendr: Array<any> = [982, 979];
          let textF = 2.0;
          let sellmathbackground_: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,0),992], [String.fromCharCode(115,101,113,0),398]]);
          let searchL = 3.0;
         fillY = 20.55 <= textF && fillY;
         librrc8.set(`${searchL}`, parseInt(`${searchL}`) >> (Math.min(4, Math.abs(3))));
         resendr.push(2 * parseInt(`${searchL}`));
         textF /= Math.max(4, parseFloat(`${2 % (Math.max(9, resendr.length))}`));
         sellmathbackground_.set(`${searchL}`, librrc8.size);
         if (episodep) {
            break;
         }
      } while ((!fillY) && episodep);
          let libruntimeexecutorO = 1.0;
          let skipz = String.fromCharCode(105,110,116,108,105,115,116,0);
          let sigmobZ = 2.0;
         fillY = !fillY;
         libruntimeexecutorO *= (String.fromCharCode(95,0) == skipz ? parseInt(`${sigmobZ}`) : skipz.length);
         sigmobZ -= parseInt(`${sigmobZ}`) | 1;
         fillY = !fillY;
      cricketN += parseFloat(`${disconnectedlogoo.length}`);
      iconplay1 /= Math.max(2, parseFloat(`${1}`));
      cricketN -= (parseFloat(`${3 * (rightZ ? 1 : 1)}`));
       let predictionactivea: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,99,97,116,0),true ], [String.fromCharCode(108,97,114,103,101,0),true ], [String.fromCharCode(102,111,110,116,0),true ]]);
       let ynewinterstitialS = String.fromCharCode(105,110,115,116,101,97,100,0);
      let predictionbuttonJ = String.fromCharCode(109,100,115,53,110,53,108,0) == ynewinterstitialS;
      do {
         ynewinterstitialS += `${ynewinterstitialS.length}`;
         if (predictionbuttonJ) {
            break;
         }
      } while ((ynewinterstitialS.startsWith(`${predictionactivea.size}`)) && predictionbuttonJ);
      for (let l = 0; l < 3; l++) {
         predictionactivea.set(ynewinterstitialS, 3 + ynewinterstitialS.length);
      }
          let middlesoundT = 3.0;
         ynewinterstitialS += `${predictionactivea.size}`;
         middlesoundT -= parseFloat(`${parseInt(`${middlesoundT}`)}`);
      let success4 = 5059484 <= ynewinterstitialS.length;
      do {
         ynewinterstitialS = `${(String.fromCharCode(71,0) == ynewinterstitialS ? ynewinterstitialS.length : predictionactivea.size)}`;
         if (success4) {
            break;
         }
      } while (success4 && (1 >= (predictionactivea.size << (Math.min(Math.abs(1), 2))) && 2 >= (ynewinterstitialS.length << (Math.min(Math.abs(1), 4)))));
      if (ynewinterstitialS.length <= 5) {
         predictionactivea = new Map([[`${predictionactivea.size}`, 2]]);
      }
      if (5 < (ynewinterstitialS.length ^ predictionactivea.size) && (5 ^ predictionactivea.size) < 3) {
         predictionactivea = new Map([[`${predictionactivea.size}`, predictionactivea.size]]);
      }
      applicationo *= parseFloat(`${iconnewchati.length}`);
   for (let b = 0; b < 3; b++) {
      footballfiledlayoutG = [footballfiledlayoutG.length];
   }
   while (libhermest <= 5) {
       let math5 = String.fromCharCode(99,108,109,117,108,0);
      for (let x = 0; x < 3; x++) {
         math5 = `${1 % (Math.max(10, math5.length))}`;
      }
      while (math5.length < 4) {
         math5 += `${math5.length}`;
         break;
      }
      while (math5.startsWith(`${math5.length}`)) {
          let greenarrowupI: Map<any, any> = new Map([[String.fromCharCode(102,102,116,103,0),false ], [String.fromCharCode(116,97,103,103,101,114,0),true ], [String.fromCharCode(115,116,114,105,110,103,117,116,105,108,115,0),false ]]);
          let iconshare5 = true;
         math5 = `${3 % (Math.max(10, greenarrowupI.size))}`;
         greenarrowupI = new Map([[`${iconshare5}`, 1]]);
         break;
      }
      libhermest |= 2 << (Math.min(Math.abs(parseInt(`${iconplay1}`)), 2));
      break;
   }
      disconnectedlogoo = `${disconnectedlogoo.length}`;
   let questiconn = iconnewchati.length <= 5667347;
   do {
      iconnewchati += `${parseInt(`${iconplay1}`)}`;
      if (questiconn) {
         break;
      }
   } while (((4.23 * cricketN) >= 1.57 || (3 << (Math.min(3, iconnewchati.length))) >= 1) && questiconn);
       let wifirouterl = String.fromCharCode(97,99,100,99,0);
         wifirouterl += `${wifirouterl.length ^ 3}`;
      for (let y = 0; y < 1; y++) {
         wifirouterl += `${wifirouterl.length}`;
      }
      while (wifirouterl == wifirouterl) {
         wifirouterl += "1";
         break;
      }
      iconplay1 *= parseFloat(`${parseInt(`${cricketN}`)}`);
       let stationso = true;
       let cornery = 4.0;
          let detailT = String.fromCharCode(112,101,101,114,110,97,109,101,0);
         cornery /= Math.max(2, parseInt(`${cornery}`) << (Math.min(4, Math.abs(2))));
         detailT = `${detailT.length}`;
         cornery *= 3 & parseInt(`${cornery}`);
         cornery -= (parseInt(`${cornery}`) * (stationso ? 2 : 3));
      if (3.15 > cornery || (cornery - 3.15) > 1.32) {
         cornery /= Math.max(4, parseInt(`${cornery}`) % 3);
      }
         cornery += parseInt(`${cornery}`) << (Math.min(4, Math.abs(3)));
         cornery -= 1 & parseInt(`${cornery}`);
      cricketN *= (parseFloat(`${(yellowscoreballW ? 3 : 3) >> (Math.min(2, Math.abs(1)))}`));
   let fullscreenmaxm = yellowscoreballW ? !yellowscoreballW : yellowscoreballW;
   do {
      yellowscoreballW = (iconplay1 / (Math.max(2, bridge7))) <= 51.11;
      if (fullscreenmaxm) {
         break;
      }
   } while (fullscreenmaxm && (libhermest <= 2));
       let entryM = String.fromCharCode(115,105,122,101,108,101,115,115,0);
       let chatroombackground4: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,108,101,97,118,101,0),false ], [String.fromCharCode(121,117,118,97,0),true ], [String.fromCharCode(105,109,100,99,116,0),false ]]);
         entryM = `${chatroombackground4.size}`;
       let reddownarrowf = String.fromCharCode(112,100,115,0);
          let macauJ = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,0);
          let libcrashsdkD = false;
         chatroombackground4 = new Map([[entryM, entryM.length ^ 1]]);
         macauJ = `${3 ^ macauJ.length}`;
         libcrashsdkD = macauJ == macauJ;
          let sigmobM: Map<any, any> = new Map([[String.fromCharCode(105,115,112,111,115,97,98,108,101,0),656], [String.fromCharCode(112,97,105,114,115,0),98]]);
          let s_imageu = 0.0;
         chatroombackground4 = new Map([[`${sigmobM.size}`, parseInt(`${s_imageu}`) % (Math.max(sigmobM.size, 1))]]);
       let abidetectB: Array<any> = [575, 438];
       let bootsplashO: Array<any> = [64, 805];
          let leftN = String.fromCharCode(111,99,115,112,105,100,0);
         abidetectB.push(reddownarrowf.length - bootsplashO.length);
         leftN += `${leftN.length / (Math.max(5, leftN.length))}`;
      applicationo *= parseFloat(`${parseInt(`${cricketN}`)}`);
      iconplay1 -= parseFloat(`${iconnewchati.length}`);
       let favoriteq = 2;
       let minij = String.fromCharCode(115,116,114,117,99,116,115,0);
       let with_7j1: Map<any, any> = new Map([[String.fromCharCode(100,101,114,101,102,0),261], [String.fromCharCode(101,116,104,114,101,97,100,0),215]]);
       let materialE: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,116,121,0),String.fromCharCode(115,117,99,99,101,115,115,102,117,108,0)], [String.fromCharCode(99,114,101,97,116,105,110,103,0),String.fromCharCode(118,111,114,98,105,115,0)], [String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,0),String.fromCharCode(99,108,111,115,101,0)]]);
         minij = `${3 & favoriteq}`;
         minij += `${minij.length - 3}`;
      while ((minij.length - favoriteq) < 4) {
          let modityy: Array<any> = [495, 206];
          let videovar0 = String.fromCharCode(102,108,97,99,0);
         minij += `${modityy.length}`;
         modityy = [1];
         videovar0 += `${3 | videovar0.length}`;
         break;
      }
      let regengy = with_7j1.size <= 5583721;
      do {
          let iconpipexpandE = String.fromCharCode(97,120,112,0);
         with_7j1.set(minij, 2);
         iconpipexpandE = `${2 << (Math.min(4, iconpipexpandE.length))}`;
         if (regengy) {
            break;
         }
      } while (((with_7j1.size * favoriteq) == 2) && regengy);
      for (let h = 0; h < 3; h++) {
         minij += "1";
      }
      iconnewchati = `${footballfiledlayoutG.length / (Math.max(3, 3))}`;
   for (let r = 0; r < 2; r++) {
      bridge7 -= 2 % (Math.max(parseInt(`${bridge7}`), 5));
   }

        setUsername(initialUsername);

      yellowscoreballW = 89.8 == bridge7;
   while (libhermest <= cricketN) {
      cricketN -= (parseFloat(`${(yellowscoreballW ? 2 : 5) - 2}`));
      break;
   }
      foregroundi *= 2 | iconnewchati.length;
   while (!rightZ) {
      rightZ = !rightZ || 14 <= foregroundi;
      break;
   }
   let circleV = rightZ ? !rightZ : rightZ;
   do {
      rightZ = (yellowscoreballW ? !rightZ : !yellowscoreballW);
      if (circleV) {
         break;
      }
   } while ((5.71 >= (bridge7 - 3.37) && rightZ) && circleV);
   let homeiconp = String.fromCharCode(115,97,50,0) == iconnewchati;
   do {
      iconnewchati += `${parseInt(`${cricketN}`)}`;
      if (homeiconp) {
         break;
      }
   } while ((malaysia1.length >= iconnewchati.length) && homeiconp);
       let shirtP: Map<any, any> = new Map([[String.fromCharCode(116,111,110,101,0),493], [String.fromCharCode(115,117,114,102,0),672]]);
          let descj = true;
         shirtP.set(`${descj}`, ((descj ? 2 : 3) + shirtP.size));
          let iconclosewhitebgO: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,105,116,116,101,100,0),String.fromCharCode(116,97,112,101,0)], [String.fromCharCode(97,114,112,101,100,0),String.fromCharCode(114,101,112,108,105,101,115,0)]]);
          let reactnativeultimatelistviewi = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,0);
         shirtP.set(`${reactnativeultimatelistviewi}`, 3);
         iconclosewhitebgO.set(`${iconclosewhitebgO.size}`, iconclosewhitebgO.size);
         reactnativeultimatelistviewi = `${iconclosewhitebgO.size >> (Math.min(Math.abs(2), 3))}`;
      while (shirtP.get(`${shirtP.size}`) == null) {
         shirtP = new Map([[`${shirtP.size}`, 3]]);
         break;
      }
      rightZ = (libhermest * footballfiledlayoutG.length) > 60;
      footballfiledlayoutG = [parseInt(`${bridge7}`)];
      disconnectedlogoo = "3";
   while (footballfiledlayoutG.length <= malaysia1.length) {
       let qnewarchdefaultsM: Map<any, any> = new Map([[String.fromCharCode(115,109,105,108,105,101,115,0),false ], [String.fromCharCode(99,105,118,105,108,0),false ], [String.fromCharCode(105,110,100,105,114,101,99,116,0),true ]]);
       let orangeuparrowM = String.fromCharCode(101,122,105,101,114,0);
      for (let g = 0; g < 1; g++) {
          let serviceJ = 2;
          let awayiconw = String.fromCharCode(102,111,114,109,97,116,117,0);
          let scoreT = 0.0;
          let predictionactiveo = String.fromCharCode(99,117,114,114,101,110,116,0);
         orangeuparrowM += "2";
         serviceJ &= (awayiconw == String.fromCharCode(100,0) ? awayiconw.length : serviceJ);
         scoreT /= Math.max(awayiconw.length, 4);
         predictionactiveo += `${2 | parseInt(`${scoreT}`)}`;
      }
         orangeuparrowM += "3";
      while ((4 - qnewarchdefaultsM.size) >= 1) {
         orangeuparrowM += `${3 & orangeuparrowM.length}`;
         break;
      }
      while (orangeuparrowM.includes(`${qnewarchdefaultsM.size}`)) {
         qnewarchdefaultsM.set(`${orangeuparrowM}`, 2 ^ qnewarchdefaultsM.size);
         break;
      }
          let privatechatbgd = 3;
         orangeuparrowM += `${privatechatbgd}`;
       let defaultlogos = 4.0;
      malaysia1 = `${disconnectedlogoo.length}`;
      break;
   }
      iconplay1 *= parseFloat(`${2}`);
       let regengw: Array<any> = [828, 630, 772];
       let scorepopsoundS = String.fromCharCode(115,111,98,105,110,100,0);
       let trashh = String.fromCharCode(112,117,108,108,100,111,119,110,0);
      let emojiheart1 = trashh.length <= 9397341;
      do {
          let apple6 = false;
          let iconwatch5: Array<any> = [581, 50, 25];
          let whitebellC = String.fromCharCode(112,111,108,108,115,0);
          let hookW = true;
         trashh += `${(iconwatch5.length << (Math.min(5, Math.abs((apple6 ? 4 : 2)))))}`;
         apple6 = hookW || whitebellC.length < 77;
         iconwatch5.push((whitebellC.length ^ (hookW ? 3 : 1)));
         if (emojiheart1) {
            break;
         }
      } while (emojiheart1 && (scorepopsoundS.endsWith(`${trashh.length}`)));
       let awayq = true;
      for (let f = 0; f < 1; f++) {
         trashh = `${1 - regengw.length}`;
      }
       let predictiondefaultd = 1;
       let privatechatbgy = 4;
         awayq = (11 < (trashh.length + (awayq ? 11 : trashh.length)));
      if (trashh == String.fromCharCode(81,0)) {
          let latnT = String.fromCharCode(103,95,55,52,0);
          let basketballmatchdetailbgz = false;
          let playlistz: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,115,112,97,99,101,0),4], [String.fromCharCode(114,101,99,101,105,112,116,115,0),618]]);
          let iconcurrentmatchd = true;
          let unreadD: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,121,105,110,103,0),134], [String.fromCharCode(113,95,55,56,0),401], [String.fromCharCode(112,111,108,108,101,114,0),913]]);
         scorepopsoundS += `${(String.fromCharCode(73,0) == trashh ? trashh.length : unreadD.size)}`;
         latnT += `${((basketballmatchdetailbgz ? 2 : 1) >> (Math.min(Math.abs((iconcurrentmatchd ? 1 : 2)), 4)))}`;
         basketballmatchdetailbgz = iconcurrentmatchd;
         playlistz.set(`${basketballmatchdetailbgz}`, ((iconcurrentmatchd ? 1 : 3) ^ (basketballmatchdetailbgz ? 5 : 4)));
         unreadD.set(`${iconcurrentmatchd}`, playlistz.size);
      }
         regengw.push(privatechatbgy + 3);
       let sentrye: Map<any, any> = new Map([[String.fromCharCode(98,108,111,98,115,0),280], [String.fromCharCode(116,119,111,115,99,97,108,101,0),695], [String.fromCharCode(116,97,114,103,101,116,115,0),133]]);
       let left2: Map<any, any> = new Map([[String.fromCharCode(109,97,116,104,111,112,115,0),85], [String.fromCharCode(118,115,99,97,108,101,0),726], [String.fromCharCode(103,101,116,115,116,114,0),758]]);
      if (regengw.includes(privatechatbgy)) {
          let t_playerK = true;
         privatechatbgy %= Math.max(3, 1);
         t_playerK = !t_playerK && !t_playerK;
      }
      disconnectedlogoo += `${regengw.length / (Math.max(2, 2))}`;
      footballfiledlayoutG.push((iconnewchati == String.fromCharCode(53,0) ? parseInt(`${cricketN}`) : iconnewchati.length));
       let typingo: Map<any, any> = new Map([[String.fromCharCode(108,97,116,116,105,99,101,0),true ], [String.fromCharCode(109,101,109,99,109,112,0),false ], [String.fromCharCode(122,97,108,108,111,99,0),true ]]);
       let background7 = String.fromCharCode(112,114,105,110,116,118,97,108,0);
         background7 = `${typingo.size % 3}`;
         typingo.set(background7, background7.length ^ 1);
         background7 += `${(background7 == String.fromCharCode(107,0) ? typingo.size : background7.length)}`;
      while (background7.length < typingo.size) {
         background7 += `${typingo.size}`;
         break;
      }
          let plusC = 4.0;
          let gemfileT = 2;
          let otherd = String.fromCharCode(101,114,118,101,114,0);
         typingo = new Map([[`${plusC}`, gemfileT]]);
         plusC -= otherd.length;
         gemfileT /= Math.max(3, otherd.length >> (Math.min(Math.abs(3), 4)));
       let mores = String.fromCharCode(110,118,99,0);
      malaysia1 += `${foregroundi - background7.length}`;
       let routerH = 1;
       let recommendation4 = String.fromCharCode(103,105,116,104,117,98,0);
      if (1 == (recommendation4.length ^ 1) && 5 == (1 ^ routerH)) {
         recommendation4 += "1";
      }
      for (let b = 0; b < 3; b++) {
         routerH -= recommendation4.length / 1;
      }
       let basketballdetailsbgG: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,111,121,101,100,0),203], [String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,0),542]]);
       let libruntimeexecutorQ: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,0),409], [String.fromCharCode(101,114,97,115,101,0),808], [String.fromCharCode(109,97,121,98,101,0),768]]);
          let splash6 = 3;
          let loadingT = false;
          let iconcurrentmatchp = 5.0;
         basketballdetailsbgG = new Map([[`${libruntimeexecutorQ.size}`, libruntimeexecutorQ.size / (Math.max(2, 10))]]);
         splash6 /= Math.max(parseInt(`${iconcurrentmatchp}`) ^ splash6, 1);
         loadingT = !loadingT;
         iconcurrentmatchp -= parseFloat(`${2}`);
      while (3 >= (basketballdetailsbgG.size & 3)) {
          let baselineB = 3.0;
          let becomeG = 2.0;
          let muted6: Map<any, any> = new Map([[String.fromCharCode(109,111,115,97,105,99,0),true ], [String.fromCharCode(109,105,120,101,100,0),false ]]);
          let brightnessL = String.fromCharCode(109,101,97,115,117,114,101,0);
          let ccdfbdabcabbbedbH = String.fromCharCode(112,105,110,110,105,110,103,0);
         basketballdetailsbgG.set(`${recommendation4}`, recommendation4.length);
         baselineB -= parseInt(`${baselineB}`) & 2;
         becomeG *= parseFloat(`${3}`);
         muted6.set(ccdfbdabcabbbedbH, ccdfbdabcabbbedbH.length >> (Math.min(Math.abs(1), 4)));
         brightnessL += `${parseInt(`${becomeG}`)}`;
         break;
      }
          let philippinest = 0.0;
         libruntimeexecutorQ.set(`${recommendation4}`, recommendation4.length);
         philippinest += parseInt(`${philippinest}`) * 1;
      rightZ = iconnewchati.length > 11 && rightZ;
       let frame_knV: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,114,110,97,108,108,121,0),String.fromCharCode(112,97,114,101,110,116,97,103,101,0)], [String.fromCharCode(109,98,115,101,103,109,101,110,116,0),String.fromCharCode(97,117,100,105,111,100,97,116,97,0)]]);
       let appler = 1;
         appler %= Math.max(1, frame_knV.size);
      while (1 <= (2 & appler)) {
         frame_knV.set(`${appler}`, frame_knV.size);
         break;
      }
      while (!Array.from(frame_knV.keys()).includes(`${appler}`)) {
         appler *= appler;
         break;
      }
         frame_knV = new Map([[`${frame_knV.size}`, 1 * appler]]);
      while (Array.from(frame_knV.keys()).includes(`${appler}`)) {
          let sourcej: Map<any, any> = new Map([[String.fromCharCode(116,97,112,116,0),981], [String.fromCharCode(114,101,100,101,101,109,0),574]]);
          let philippines6 = String.fromCharCode(118,105,111,108,97,116,105,111,110,0);
          let vignette0 = String.fromCharCode(121,101,97,114,0);
          let owngoalu: Array<any> = [961, 556, 600];
          let with_1W = String.fromCharCode(114,116,114,101,101,99,104,101,99,107,0);
         appler += 2 | vignette0.length;
         sourcej.set(with_1W, (with_1W == String.fromCharCode(119,0) ? philippines6.length : with_1W.length));
         philippines6 = "1";
         vignette0 += `${philippines6.length}`;
         owngoalu = [sourcej.size - 1];
         break;
      }
         frame_knV = new Map([[`${frame_knV.size}`, appler]]);
      disconnectedlogoo = `${1 << (Math.min(Math.abs(appler), 1))}`;
   while (!rightZ) {
       let routerl = String.fromCharCode(100,115,116,114,101,97,109,0);
       let historyk: Array<any> = [719, 603, 71];
          let streamingt: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,0),String.fromCharCode(108,111,117,112,101,0)], [String.fromCharCode(112,97,99,101,100,0),String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,0)]]);
          let grayT = String.fromCharCode(104,108,115,101,110,99,0);
         routerl = `${historyk.length + streamingt.size}`;
         streamingt = new Map([[grayT, 2]]);
         grayT += `${2 % (Math.max(9, grayT.length))}`;
       let close9: Map<any, any> = new Map([[String.fromCharCode(104,97,108,116,0),515], [String.fromCharCode(104,100,99,100,0),972], [String.fromCharCode(99,111,109,112,111,115,101,105,0),840]]);
       let teamw: Map<any, any> = new Map([[String.fromCharCode(115,120,110,101,116,0),944], [String.fromCharCode(116,120,116,0),834], [String.fromCharCode(117,110,98,108,111,99,107,105,110,103,0),846]]);
      let loadingQ = historyk.length <= 5431292;
      do {
         historyk = [routerl.length ^ 1];
         if (loadingQ) {
            break;
         }
      } while ((4 <= (historyk.length >> (Math.min(routerl.length, 5))) && 1 <= (historyk.length >> (Math.min(Math.abs(4), 4)))) && loadingQ);
          let configurel = 1.0;
         routerl = `${parseInt(`${configurel}`) & routerl.length}`;
          let chinasameG = String.fromCharCode(106,115,105,109,100,99,102,103,0);
          let streaming0 = 4.0;
         historyk = [close9.size / 1];
         chinasameG += "3";
         streaming0 += parseInt(`${streaming0}`) / (Math.max(3, 8));
          let appsa = true;
          let internetw: Array<any> = [541, 694, 458];
          let vietnamx = true;
         close9.set(`${appsa}`, (3 - (appsa ? 2 : 2)));
         internetw = [internetw.length % 2];
         vietnamx = !vietnamx;
      yellowscoreballW = (historyk.length - parseInt(`${iconplay1}`)) >= 41;
      break;
   }
      disconnectedlogoo = `${parseInt(`${bridge7}`) / (Math.max(whiteanimationlives.size, 4))}`;
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let referrerp = String.fromCharCode(109,98,102,105,108,116,101,114,0);
    let customx: Map<any, any> = new Map([[String.fromCharCode(114,101,100,101,108,105,118,101,114,121,0),String.fromCharCode(115,104,97,112,101,0)], [String.fromCharCode(97,115,100,107,0),String.fromCharCode(114,101,99,111,109,109,101,110,100,0)], [String.fromCharCode(97,110,105,109,97,116,101,115,0),String.fromCharCode(117,110,99,104,101,99,107,101,100,0)]]);
    let topon7: Array<any> = [650, 921];
    let dependenciess = 4;
    let specK = false;
    let reactnavigationw: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,97,109,112,0),398], [String.fromCharCode(113,116,115,0),173], [String.fromCharCode(101,120,112,114,101,115,115,0),771]]);
    let tumbnail8 = String.fromCharCode(116,115,99,99,0);
    let readi = 5;
    let matchactiveI: Map<any, any> = new Map([[String.fromCharCode(109,98,97,102,102,0),464], [String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,0),533]]);
    let connectionC = String.fromCharCode(102,105,108,101,110,97,109,101,115,0);
    let greytickp = 0;
    let iconsubssuccess5 = String.fromCharCode(106,102,105,101,108,100,115,0);
    let iconsharefriendsj = 4.0;
    let mergerZ = String.fromCharCode(119,105,116,104,105,110,0);
   for (let m = 0; m < 2; m++) {
      connectionC += `${reactnavigationw.size}`;
   }
   while (2 <= (topon7.length / 3)) {
       let homeicont = String.fromCharCode(105,116,108,101,0);
       let flagT: Array<any> = [592, 35, 330];
         homeicont += `${(String.fromCharCode(74,0) == homeicont ? homeicont.length : flagT.length)}`;
      while (2 <= (flagT.length % (Math.max(3, homeicont.length))) && 2 <= (flagT.length % (Math.max(9, homeicont.length)))) {
          let zhengpiane: Array<any> = [686, 373];
          let iconnotificationnewC = String.fromCharCode(99,104,97,99,104,97,112,111,108,121,0);
          let spinnere = String.fromCharCode(97,112,112,118,101,121,111,114,0);
          let memberx = String.fromCharCode(109,97,99,104,105,110,101,0);
         homeicont += `${2 * flagT.length}`;
         zhengpiane.push(spinnere.length);
         iconnotificationnewC = `${iconnotificationnewC.length << (Math.min(Math.abs(1), 5))}`;
         spinnere += `${(spinnere == String.fromCharCode(101,0) ? memberx.length : spinnere.length)}`;
         memberx += "2";
         break;
      }
         homeicont += `${homeicont.length % (Math.max(10, flagT.length))}`;
         flagT = [flagT.length * 1];
       let profileframeF = 0.0;
       let componentz = 1.0;
         homeicont = `${2 >> (Math.min(3, Math.abs(parseInt(`${profileframeF}`))))}`;
      referrerp += "1";
      break;
   }
   for (let y = 0; y < 3; y++) {
      dependenciess += connectionC.length - matchactiveI.size;
   }
   for (let p = 0; p < 3; p++) {
      connectionC = `${readi}`;
   }
      tumbnail8 = `${dependenciess}`;
   let footballtrophyI = connectionC.length >= 6006165;
   do {
      connectionC += `${(dependenciess & (specK ? 3 : 1))}`;
      if (footballtrophyI) {
         break;
      }
   } while (((connectionC.length | customx.size) == 2) && footballtrophyI);
       let reducerx = true;
       let cricketF = String.fromCharCode(109,117,108,116,105,115,116,101,112,0);
       let videovarf = 4;
          let roomn = String.fromCharCode(99,111,110,97,110,102,105,108,101,0);
          let country3 = 2.0;
         reducerx = cricketF.length <= 52 || reducerx;
         roomn += `${roomn.length * 1}`;
         country3 /= Math.max(parseFloat(`${roomn.length}`), 2);
          let mini9 = true;
          let nextn = String.fromCharCode(105,109,112,111,114,116,97,110,116,0);
          let libsentry7 = String.fromCharCode(97,99,114,111,115,115,102,97,100,101,0);
         videovarf -= 2;
         mini9 = !mini9;
         nextn += `${(String.fromCharCode(54,0) == nextn ? nextn.length : (mini9 ? 3 : 1))}`;
         libsentry7 += `${((mini9 ? 5 : 3))}`;
      if (1 >= (videovarf & 5) && 5 >= (videovarf & cricketF.length)) {
          let gmailY = true;
          let defaultpredictionprofile5: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,0),String.fromCharCode(112,114,101,115,117,98,109,105,116,0)], [String.fromCharCode(99,111,110,116,101,110,116,115,0),String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,0)]]);
          let videovar7 = 5;
          let phoneshareY = String.fromCharCode(98,97,103,101,0);
         videovarf ^= ((gmailY ? 1 : 1));
         gmailY = 56 < phoneshareY.length;
         defaultpredictionprofile5 = new Map([[`${videovar7}`, phoneshareY.length & 2]]);
         videovar7 ^= 2;
      }
      let orangedownarrowL = cricketF == String.fromCharCode(98,118,57,111,0);
      do {
          let launchery = 2;
          let lightp: Map<any, any> = new Map([[String.fromCharCode(109,109,99,116,120,0),853], [String.fromCharCode(98,105,116,109,97,112,0),663], [String.fromCharCode(114,101,99,105,112,105,101,110,116,0),435]]);
         cricketF = `${((reducerx ? 2 : 4) % (Math.max(lightp.size, 3)))}`;
         launchery |= launchery % 1;
         lightp.set(`${launchery}`, launchery << (Math.min(5, Math.abs(launchery))));
         if (orangedownarrowL) {
            break;
         }
      } while ((3 > cricketF.length || reducerx) && orangedownarrowL);
       let internetp = 0.0;
      while (cricketF.includes(`${videovarf}`)) {
          let overV = 4.0;
          let loadingspinner3 = String.fromCharCode(118,109,104,100,0);
          let reactn: Array<any> = [240, 641, 403];
          let gmailj = 4.0;
         cricketF += `${loadingspinner3.length}`;
         overV += parseFloat(`${3 & reactn.length}`);
         loadingspinner3 += `${reactn.length * parseInt(`${gmailj}`)}`;
         gmailj += parseFloat(`${1 + parseInt(`${gmailj}`)}`);
         break;
      }
         internetp *= 1;
      let sharewhiteS = reducerx ? !reducerx : reducerx;
      do {
         reducerx = ((cricketF.length | (!reducerx ? 74 : cricketF.length)) == 74);
         if (sharewhiteS) {
            break;
         }
      } while ((!reducerx) && sharewhiteS);
          let reducers = 5;
         videovarf *= ((reducerx ? 4 : 2) * parseInt(`${internetp}`));
         reducers /= Math.max(reducers % (Math.max(2, reducers)), 3);
      topon7.push(topon7.length);
   for (let o = 0; o < 1; o++) {
      matchactiveI = new Map([[`${reactnavigationw.size}`, reactnavigationw.size >> (Math.min(tumbnail8.length, 4))]]);
   }
       let settingsc = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,0);
      let episodeA = settingsc.length >= 7675447;
      do {
          let footballfieldJ = 1;
          let ccdfbdabcabbbedbB = true;
         settingsc += `${3 >> (Math.min(4, Math.abs(footballfieldJ)))}`;
         footballfieldJ <<= Math.min(3, Math.abs(((ccdfbdabcabbbedbB ? 3 : 2) * (ccdfbdabcabbbedbB ? 3 : 3))));
         if (episodeA) {
            break;
         }
      } while (episodeA && (settingsc.length == settingsc.length));
      let malaysiai = settingsc == String.fromCharCode(100,103,106,100,0);
      do {
         settingsc = `${settingsc.length}`;
         if (malaysiai) {
            break;
         }
      } while ((settingsc != String.fromCharCode(116,0)) && malaysiai);
      while (settingsc == String.fromCharCode(52,0)) {
         settingsc = `${settingsc.length}`;
         break;
      }
      tumbnail8 = `${referrerp.length}`;
      reactnavigationw.set(`${tumbnail8}`, tumbnail8.length + 1);

        if (handleClose) handleClose();

      dependenciess %= Math.max(referrerp.length, 4);
      specK = matchactiveI.get(`${specK}`) != null;
   for (let s = 0; s < 1; s++) {
      topon7.push(greytickp);
   }
   let elementsh = 7277579 >= readi;
   do {
      readi *= 3 / (Math.max(10, readi));
      if (elementsh) {
         break;
      }
   } while ((customx.get(`${readi}`) != null) && elementsh);
   let favicona = 5631157 <= customx.size;
   do {
       let unselected3: Map<any, any> = new Map([[String.fromCharCode(97,100,118,97,110,99,101,0),433], [String.fromCharCode(115,101,114,118,105,99,101,0),774]]);
         unselected3 = new Map([[`${unselected3.size}`, 3]]);
         unselected3.set(`${unselected3.size}`, unselected3.size);
         unselected3 = new Map([[`${unselected3.size}`, unselected3.size & unselected3.size]]);
      customx = new Map([[`${topon7.length}`, tumbnail8.length]]);
      if (favicona) {
         break;
      }
   } while (favicona && (specK && (customx.size << (Math.min(Math.abs(3), 4))) <= 5));
       let logoO: Array<any> = [315, 558];
       let ocopy_qJ = String.fromCharCode(118,105,100,101,111,101,110,99,100,115,112,0);
       let logoK = 3;
         ocopy_qJ += `${3 * logoO.length}`;
         logoO = [logoO.length];
      if (4 <= (ocopy_qJ.length >> (Math.min(1, Math.abs(logoK))))) {
          let dialog5 = 1;
          let middlebrightnessn = 4.0;
          let defaultlogoJ = String.fromCharCode(110,117,109,101,114,105,99,0);
          let weather1 = String.fromCharCode(112,111,114,116,0);
         ocopy_qJ = `${logoO.length}`;
         dialog5 ^= defaultlogoJ.length;
         middlebrightnessn /= Math.max(weather1.length, 2);
         defaultlogoJ = `${parseInt(`${middlebrightnessn}`) & dialog5}`;
         weather1 += `${(defaultlogoJ == String.fromCharCode(79,0) ? parseInt(`${middlebrightnessn}`) : defaultlogoJ.length)}`;
      }
      let index3 = 5484797 >= logoK;
      do {
          let whitebell9 = String.fromCharCode(118,105,101,119,101,114,115,0);
          let away1 = 5.0;
          let uimanager5: Map<any, any> = new Map([[String.fromCharCode(119,97,116,101,114,0),false ], [String.fromCharCode(112,111,114,116,101,114,0),false ]]);
          let crossN = String.fromCharCode(115,105,103,104,0);
          let basketballtrophya: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,116,101,100,0),true ], [String.fromCharCode(102,114,97,103,109,101,110,116,0),true ]]);
         logoK |= 3 | basketballtrophya.size;
         whitebell9 += `${whitebell9.length ^ uimanager5.size}`;
         away1 -= 3 | crossN.length;
         uimanager5 = new Map([[crossN, parseInt(`${away1}`) << (Math.min(crossN.length, 3))]]);
         basketballtrophya = new Map([[`${uimanager5.size}`, uimanager5.size % (Math.max(1, 8))]]);
         if (index3) {
            break;
         }
      } while ((!ocopy_qJ.endsWith(`${logoK}`)) && index3);
         ocopy_qJ += "1";
         logoK >>= Math.min(4, Math.abs(1 % (Math.max(10, ocopy_qJ.length))));
      let refreshh = 8478739 >= logoO.length;
      do {
         logoO.push(logoO.length >> (Math.min(Math.abs(1), 4)));
         if (refreshh) {
            break;
         }
      } while (refreshh && (!ocopy_qJ.startsWith(`${logoO.length}`)));
      if (2 <= (logoO.length % 2) && 1 <= (logoO.length % (Math.max(2, 5)))) {
         ocopy_qJ = `${logoO.length}`;
      }
         logoO.push(ocopy_qJ.length);
      greytickp /= Math.max(1, dependenciess & 3);
   while ((topon7.length * 1) == 1) {
       let iconbelly: Array<any> = [27, 623];
      while (!iconbelly.includes(iconbelly.length)) {
         iconbelly = [iconbelly.length / (Math.max(9, iconbelly.length))];
         break;
      }
      if (!iconbelly.includes(iconbelly.length)) {
          let largebrightnessz = true;
          let subinv = String.fromCharCode(110,111,110,0);
         iconbelly.push((subinv == String.fromCharCode(98,0) ? iconbelly.length : subinv.length));
         largebrightnessz = (largebrightnessz ? largebrightnessz : !largebrightnessz);
      }
      while ((4 | iconbelly.length) <= 1) {
          let mbjscommonK = String.fromCharCode(101,110,99,114,121,112,116,105,111,110,0);
          let regengX = 4.0;
          let profileactivet = String.fromCharCode(98,108,97,99,107,115,0);
          let footballfiledlayoutU: Array<any> = [893, 73];
         iconbelly = [footballfiledlayoutU.length | 3];
         mbjscommonK += `${mbjscommonK.length - 3}`;
         regengX *= (parseFloat(`${profileactivet == String.fromCharCode(74,0) ? parseInt(`${regengX}`) : profileactivet.length}`));
         footballfiledlayoutU.push((mbjscommonK == String.fromCharCode(55,0) ? mbjscommonK.length : parseInt(`${regengX}`)));
         break;
      }
      reactnavigationw = new Map([[`${topon7.length}`, referrerp.length]]);
      break;
   }
   while (3 > (1 * topon7.length)) {
      topon7.push((tumbnail8 == String.fromCharCode(52,0) ? matchactiveI.size : tumbnail8.length));
      break;
   }
       let bang4: Array<any> = [String.fromCharCode(116,105,110,121,0), String.fromCharCode(120,112,111,115,117,114,101,0), String.fromCharCode(105,102,97,109,115,103,0)];
          let switch_fdp = String.fromCharCode(114,101,99,105,112,114,111,99,97,108,0);
         bang4.push(switch_fdp.length);
         bang4 = [2 - bang4.length];
         bang4 = [2];
      referrerp += `${greytickp}`;
      topon7 = [referrerp.length];

        Keyboard.dismiss();

       let shootnogoalg: Array<any> = [468, 826];
         shootnogoalg.push(1 + shootnogoalg.length);
         shootnogoalg = [shootnogoalg.length + shootnogoalg.length];
      let feedbackF = shootnogoalg.length <= 6114179;
      do {
          let libjsiQ = 5.0;
         shootnogoalg.push(shootnogoalg.length ^ 1);
         libjsiQ -= parseInt(`${libjsiQ}`);
         if (feedbackF) {
            break;
         }
      } while (feedbackF && (!shootnogoalg.includes(shootnogoalg.length)));
      iconsubssuccess5 = `${2 ^ topon7.length}`;
   for (let w = 0; w < 1; w++) {
      tumbnail8 = `${dependenciess & 2}`;
   }
   while (matchactiveI.get(`${greytickp}`) != null) {
       let libfbT = 0.0;
       let iconarrowrighty = String.fromCharCode(121,115,108,111,103,0);
      for (let s = 0; s < 3; s++) {
         iconarrowrighty = `${parseInt(`${libfbT}`) * 1}`;
      }
      for (let s = 0; s < 2; s++) {
         iconarrowrighty = `${3 + iconarrowrighty.length}`;
      }
      for (let w = 0; w < 1; w++) {
          let abidetectU = 2.0;
          let frame_n0i = String.fromCharCode(109,101,100,105,97,110,0);
          let bottomr: Array<any> = [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,0), String.fromCharCode(112,99,109,98,0)];
          let dplusb: Map<any, any> = new Map([[String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,0),991], [String.fromCharCode(111,110,116,114,97,115,116,0),452], [String.fromCharCode(99,104,101,99,107,108,105,110,101,0),382]]);
         libfbT /= Math.max(parseFloat(`${2}`), 1);
         abidetectU += frame_n0i.length;
         frame_n0i += `${dplusb.size << (Math.min(Math.abs(1), 3))}`;
         bottomr.push(bottomr.length >> (Math.min(Math.abs(2), 5)));
         dplusb = new Map([[`${dplusb.size}`, dplusb.size * 1]]);
      }
          let iconbackwhitel = true;
          let largei = String.fromCharCode(115,104,97,114,101,0);
         iconarrowrighty += `${iconarrowrighty.length << (Math.min(5, Math.abs(parseInt(`${libfbT}`))))}`;
         iconbackwhitel = largei.length == 27;
         largei = `${((iconbackwhitel ? 3 : 1) & largei.length)}`;
      for (let g = 0; g < 3; g++) {
         libfbT += parseFloat(`${2}`);
      }
       let statisticsactives = 3.0;
       let javaH = 5.0;
      greytickp /= Math.max(tumbnail8.length >> (Math.min(connectionC.length, 1)), 2);
      break;
   }
      matchactiveI.set(`${iconsharefriendsj}`, reactnavigationw.size | 2);
       let navigationk = 4;
       let valuesO = 4.0;
       let mini9R = false;
      if ((navigationk - 5) < 2) {
         mini9R = valuesO < 87.10;
      }
         navigationk >>= Math.min(2, Math.abs(navigationk));
          let footballfieldR = String.fromCharCode(97,118,99,111,100,101,99,114,101,115,0);
         valuesO += 3;
         footballfieldR += `${(footballfieldR == String.fromCharCode(71,0) ? footballfieldR.length : footballfieldR.length)}`;
          let shared_ = 2.0;
          let homeinactivel = String.fromCharCode(103,111,100,101,112,115,0);
         navigationk |= parseInt(`${valuesO}`) >> (Math.min(1, Math.abs(1)));
         shared_ /= Math.max(5, homeinactivel.length);
         homeinactivel = `${homeinactivel.length}`;
          let encryptori: Map<any, any> = new Map([[String.fromCharCode(115,109,112,116,101,0),921], [String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,0),161]]);
          let photoq = String.fromCharCode(108,97,118,102,105,0);
         valuesO += 2;
         encryptori = new Map([[`${encryptori.size}`, 1]]);
         photoq += `${(String.fromCharCode(48,0) == photoq ? encryptori.size : photoq.length)}`;
          let libimagepipelineQ = 1;
          let service5 = 2.0;
         navigationk *= parseInt(`${valuesO}`) ^ 3;
         libimagepipelineQ <<= Math.min(Math.abs(2 - libimagepipelineQ), 1);
         service5 += 1;
         mini9R = valuesO > 26.55;
         navigationk *= 1 << (Math.min(Math.abs(navigationk), 4));
         navigationk ^= 2;
      specK = !mini9R;
   if (3 == (dependenciess | iconsubssuccess5.length) && (dependenciess | 3) == 4) {
       let predictionactives = false;
       let switch_1K: Map<any, any> = new Map([[String.fromCharCode(99,117,114,108,121,0),true ], [String.fromCharCode(112,114,111,100,117,99,116,115,0),false ]]);
       let release_2v = 0.0;
       let service2 = String.fromCharCode(116,111,100,97,121,115,0);
      for (let d = 0; d < 1; d++) {
          let eacte: Map<any, any> = new Map([[String.fromCharCode(112,104,111,110,101,98,111,111,107,0),297], [String.fromCharCode(99,104,101,99,107,111,117,116,0),741]]);
          let promotionz = 0.0;
          let bannerY: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,0),167], [String.fromCharCode(110,101,116,101,114,114,110,111,0),430], [String.fromCharCode(97,114,98,105,116,114,97,114,121,0),637]]);
          let buildJ: Array<any> = [String.fromCharCode(105,95,56,57,0), String.fromCharCode(109,105,120,101,114,0)];
         release_2v -= parseFloat(`${service2.length - 2}`);
         eacte = new Map([[`${bannerY.size}`, 3 | buildJ.length]]);
         promotionz += bannerY.size ^ 3;
         buildJ.push(eacte.size);
      }
          let live9 = String.fromCharCode(108,97,121,101,114,0);
          let greenarrowupH = String.fromCharCode(99,104,101,99,107,112,111,105,110,116,0);
         predictionactives = (switch_1K.size / (Math.max(4, parseInt(`${release_2v}`)))) <= 40;
         live9 += `${greenarrowupH.length}`;
         greenarrowupH = `${live9.length}`;
          let castingN = 3.0;
         predictionactives = String.fromCharCode(81,0) == service2;
         castingN *= parseFloat(`${2 % (Math.max(2, parseInt(`${castingN}`)))}`);
      if (1 >= (switch_1K.size >> (Math.min(Math.abs(4), 4))) || switch_1K.size >= 4) {
         predictionactives = release_2v == parseFloat(`${switch_1K.size}`);
      }
         release_2v /= Math.max(2, (parseFloat(`${(predictionactives ? 3 : 1) / (Math.max(7, parseInt(`${release_2v}`)))}`)));
       let nativemodulek = false;
         service2 += `${switch_1K.size | 2}`;
         nativemodulek = !nativemodulek || switch_1K.size <= 69;
          let basketballplayerplaceholderW = false;
          let productD: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,0),String.fromCharCode(114,101,102,101,114,0)], [String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,0),String.fromCharCode(99,97,112,105,116,97,108,105,122,101,0)], [String.fromCharCode(109,118,112,114,111,98,115,0),String.fromCharCode(102,105,110,100,0)]]);
          let show6 = String.fromCharCode(101,118,101,110,116,115,0);
         predictionactives = release_2v == 61.85;
         basketballplayerplaceholderW = !basketballplayerplaceholderW;
         productD.set(show6, show6.length);
      for (let c = 0; c < 2; c++) {
          let predictionactiveK = String.fromCharCode(99,104,97,110,103,101,100,0);
          let stars: Array<any> = [549, 108, 592];
          let greytickz = String.fromCharCode(98,115,101,114,118,101,114,0);
          let libsentrya = 1.0;
         predictionactives = !predictionactives || service2.length >= 10;
         predictionactiveK += `${stars.length << (Math.min(predictionactiveK.length, 4))}`;
         stars = [1 * predictionactiveK.length];
         greytickz = `${predictionactiveK.length & 3}`;
         libsentrya *= predictionactiveK.length;
      }
       let pausej: Map<any, any> = new Map([[String.fromCharCode(114,97,110,115,112,111,114,116,0),false ], [String.fromCharCode(105,115,108,101,97,112,0),true ], [String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,0),true ]]);
       let backiconmaskA: Map<any, any> = new Map([[String.fromCharCode(109,97,110,100,101,108,98,114,111,116,0),false ], [String.fromCharCode(103,102,105,110,116,0),false ]]);
       let libavdevice3 = 1;
       let favoriteV = 5;
      dependenciess *= 2;
   }
   let awayD = String.fromCharCode(53,118,102,122,117,0) == referrerp;
   do {
       let moviesw = String.fromCharCode(98,117,102,102,101,114,105,110,103,0);
       let nativemodulec = String.fromCharCode(97,118,105,103,97,116,105,111,110,0);
       let informationJ = String.fromCharCode(99,104,97,110,103,101,0);
       let zhubov = false;
         nativemodulec += `${(String.fromCharCode(74,0) == informationJ ? informationJ.length : (zhubov ? 5 : 1))}`;
         nativemodulec += `${informationJ.length & 2}`;
          let injuryx: Array<any> = [String.fromCharCode(114,97,100,105,117,115,0), String.fromCharCode(100,105,115,112,0), String.fromCharCode(100,117,112,108,105,99,97,116,111,114,0)];
          let dangerl = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,0);
         informationJ = `${(moviesw == String.fromCharCode(102,0) ? injuryx.length : moviesw.length)}`;
         injuryx.push(dangerl.length + dangerl.length);
         nativemodulec += `${informationJ.length}`;
       let greenarrowupi = 4;
         greenarrowupi &= 2;
         nativemodulec = `${informationJ.length}`;
          let commonn = 5.0;
         nativemodulec += "1";
         commonn /= Math.max(2, parseFloat(`${parseInt(`${commonn}`) * parseInt(`${commonn}`)}`));
         nativemodulec += `${(String.fromCharCode(84,0) == moviesw ? moviesw.length : nativemodulec.length)}`;
       let airbnbstarD = String.fromCharCode(114,101,97,108,108,121,0);
       let launcherr = String.fromCharCode(99,111,114,110,101,114,115,0);
         nativemodulec = "2";
      let iconpipexpandp = zhubov ? !zhubov : zhubov;
      do {
         zhubov = greenarrowupi > 67 || !zhubov;
         if (iconpipexpandp) {
            break;
         }
      } while (((greenarrowupi << (Math.min(Math.abs(4), 4))) >= 3 && zhubov) && iconpipexpandp);
      referrerp += `${parseInt(`${iconsharefriendsj}`)}`;
      if (awayD) {
         break;
      }
   } while (awayD && (referrerp.endsWith(`${customx.size}`)));
      iconsubssuccess5 = `${(connectionC == String.fromCharCode(97,0) ? (specK ? 1 : 3) : connectionC.length)}`;
      matchactiveI.set(`${readi}`, topon7.length);
       let rncoreC = String.fromCharCode(99,116,120,105,100,120,105,110,99,0);
       let holderX = 4.0;
          let iconarrowrightwhitet: Map<any, any> = new Map([[String.fromCharCode(99,111,118,101,114,101,100,0),329], [String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,0),868], [String.fromCharCode(115,101,116,114,97,110,103,101,0),7]]);
          let liveshareP = String.fromCharCode(97,97,99,101,110,99,116,97,98,0);
          let chart3 = 3.0;
         holderX -= parseFloat(`${liveshareP.length * parseInt(`${chart3}`)}`);
         iconarrowrightwhitet = new Map([[`${iconarrowrightwhitet.size}`, iconarrowrightwhitet.size * 1]]);
         liveshareP += `${iconarrowrightwhitet.size / (Math.max(2, 5))}`;
      if (!rncoreC.endsWith(`${holderX}`)) {
         rncoreC = `${rncoreC.length * 1}`;
      }
      let update___ = holderX <= 5148011.0;
      do {
         holderX += parseFloat(`${1}`);
         if (update___) {
            break;
         }
      } while ((rncoreC.endsWith(`${holderX}`)) && update___);
          let greyarrowupX = false;
         rncoreC += `${(String.fromCharCode(112,0) == rncoreC ? parseInt(`${holderX}`) : rncoreC.length)}`;
         greyarrowupX = (!greyarrowupX ? !greyarrowupX : !greyarrowupX);
      while (holderX == 3.81) {
         rncoreC += `${rncoreC.length}`;
         break;
      }
      if (1 <= (rncoreC.length % 3)) {
         rncoreC = `${parseInt(`${holderX}`) >> (Math.min(Math.abs(1), 3))}`;
      }
      connectionC += `${readi}`;
        resetForm();
    }

    const onSubmitForm = async () => {
       let rncoreu = 0.0;
    let middlesound3: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,97,116,111,114,0),125], [String.fromCharCode(114,97,110,100,111,109,110,101,115,115,0),656], [String.fromCharCode(116,104,117,109,98,0),729]]);
    let roomF = 1.0;
    let modulesF = true;
    let iconviewergifg: Map<any, any> = new Map([[String.fromCharCode(97,98,99,115,0),String.fromCharCode(98,114,111,119,110,0)], [String.fromCharCode(97,116,114,97,99,97,108,0),String.fromCharCode(115,117,105,116,101,98,0)], [String.fromCharCode(100,101,108,97,117,110,97,121,0),String.fromCharCode(116,101,115,101,100,103,101,0)]]);
    let championR = String.fromCharCode(115,97,102,101,0);
    let penaltygoalG = String.fromCharCode(102,116,115,105,115,115,112,97,99,101,0);
    let humidityN = true;
    let knewinterstitial8: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,115,0),75], [String.fromCharCode(99,111,115,112,105,0),376], [String.fromCharCode(97,112,97,99,107,101,116,0),793]]);
    let disconnected4 = String.fromCharCode(115,112,101,99,105,102,105,101,100,0);
    let footballfiledlayoutw = 5.0;
    let awayj: Array<any> = [338, 102];
    let textinputT = String.fromCharCode(110,114,101,102,0);
      championR += "3";
   while (roomF > 1.37) {
      humidityN = 31 == knewinterstitial8.size;
      break;
   }

        if (usernameErrMsg !== null) return;

       let long_ziD = String.fromCharCode(109,116,105,109,101,0);
          let upgradeO = 5;
          let incident6 = String.fromCharCode(101,109,98,101,100,100,101,100,0);
          let shrinka = 2;
         long_ziD = `${long_ziD.length - shrinka}`;
         upgradeO |= upgradeO & 3;
         incident6 += `${incident6.length}`;
         shrinka >>= Math.min(Math.abs(2 + incident6.length), 3);
      for (let h = 0; h < 1; h++) {
          let background5 = 4.0;
          let profile7: Map<any, any> = new Map([[String.fromCharCode(109,97,115,115,0),409], [String.fromCharCode(99,104,101,99,107,0),609], [String.fromCharCode(111,100,97,116,97,0),333]]);
         long_ziD += `${long_ziD.length & profile7.size}`;
         background5 += 2 / (Math.max(6, parseInt(`${background5}`)));
         profile7 = new Map([[`${background5}`, parseInt(`${background5}`)]]);
      }
      for (let j = 0; j < 2; j++) {
          let servicej = String.fromCharCode(97,117,100,105,111,100,115,112,0);
          let auto_sz = 3;
          let collectiony: Array<any> = [String.fromCharCode(115,112,114,111,112,0), String.fromCharCode(115,119,105,116,99,104,0)];
          let runtimep = 5.0;
         long_ziD += "3";
         servicej = `${parseInt(`${runtimep}`) % 1}`;
         auto_sz /= Math.max(servicej.length / (Math.max(4, collectiony.length)), 3);
         collectiony.push(auto_sz & 2);
         runtimep += parseFloat(`${collectiony.length}`);
      }
      championR += `${(long_ziD == String.fromCharCode(119,0) ? parseInt(`${roomF}`) : long_ziD.length)}`;
   for (let v = 0; v < 1; v++) {
      humidityN = disconnected4.length >= penaltygoalG.length;
   }

        if (isSubmitting) return;

      footballfiledlayoutw -= (parseInt(`${roomF}`) >> (Math.min(4, Math.abs((modulesF ? 5 : 3)))));
   for (let v = 0; v < 3; v++) {
       let schedulerC = 4.0;
       let disconnectedG = 3.0;
       let string6 = String.fromCharCode(103,101,111,109,101,116,114,121,0);
       let debugi: Map<any, any> = new Map([[String.fromCharCode(110,101,101,100,108,101,0),35], [String.fromCharCode(116,111,98,105,116,0),702]]);
       let libturbomodulejsijniy = String.fromCharCode(111,112,101,110,101,100,0);
         disconnectedG /= Math.max(parseFloat(`${3 ^ debugi.size}`), 2);
      while ((2 - debugi.size) >= 2 && (2 - debugi.size) >= 4) {
         string6 = "1";
         break;
      }
         disconnectedG += parseFloat(`${1}`);
      while ((debugi.size ^ 1) <= 1 || 5 <= (string6.length ^ 1)) {
         debugi = new Map([[`${debugi.size}`, 1]]);
         break;
      }
      let singaporex = 9029423.0 >= disconnectedG;
      do {
          let g_unlockD = String.fromCharCode(114,101,109,97,116,114,105,120,0);
          let armva0 = String.fromCharCode(102,99,104,111,119,110,0);
         disconnectedG += parseFloat(`${string6.length}`);
         g_unlockD += `${g_unlockD.length + 3}`;
         armva0 += `${armva0.length % (Math.max(g_unlockD.length, 5))}`;
         if (singaporex) {
            break;
         }
      } while ((5.7 < (disconnectedG * 4.69)) && singaporex);
      if ((libturbomodulejsijniy.length % (Math.max(4, 10))) <= 3) {
          let textinputy: Map<any, any> = new Map([[String.fromCharCode(101,114,114,0),false ], [String.fromCharCode(111,118,101,114,114,105,100,100,101,110,0),true ], [String.fromCharCode(115,101,116,98,105,116,0),true ]]);
          let macauZ = String.fromCharCode(99,104,105,108,108,0);
          let analytic_ = 4;
         libturbomodulejsijniy += `${analytic_ ^ 1}`;
         textinputy = new Map([[`${textinputy.size}`, textinputy.size % (Math.max(macauZ.length, 5))]]);
         macauZ += `${(macauZ == String.fromCharCode(54,0) ? textinputy.size : macauZ.length)}`;
         analytic_ /= Math.max(1, 3);
      }
         disconnectedG -= parseFloat(`${parseInt(`${schedulerC}`)}`);
          let fullj = String.fromCharCode(116,104,101,116,97,0);
          let viewsE = 0.0;
          let androidm = String.fromCharCode(108,111,103,105,115,116,105,99,0);
         schedulerC += string6.length;
         fullj = `${parseInt(`${viewsE}`) + 1}`;
         viewsE -= parseFloat(`${androidm.length >> (Math.min(Math.abs(1), 1))}`);
         androidm += `${androidm.length - 3}`;
      if (!libturbomodulejsijniy.endsWith(`${schedulerC}`)) {
         schedulerC -= parseInt(`${schedulerC}`) | parseInt(`${disconnectedG}`);
      }
      for (let v = 0; v < 3; v++) {
          let predictionlossT = String.fromCharCode(115,105,103,0);
          let photoJ = 4.0;
          let closeA = String.fromCharCode(117,116,105,109,101,0);
          let loginh = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,0);
          let topic8: Map<any, any> = new Map([[String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,0),String.fromCharCode(115,112,107,114,0)], [String.fromCharCode(99,111,100,101,98,111,111,107,0),String.fromCharCode(115,101,103,109,101,110,116,0)], [String.fromCharCode(115,112,108,105,116,116,105,110,103,0),String.fromCharCode(115,99,97,108,97,114,0)]]);
         libturbomodulejsijniy += `${2 - debugi.size}`;
         predictionlossT = `${(String.fromCharCode(68,0) == closeA ? topic8.size : closeA.length)}`;
         photoJ *= parseFloat(`${1 ^ closeA.length}`);
         loginh = "3";
         topic8.set(`${photoJ}`, parseInt(`${photoJ}`));
      }
      while ((1.57 + schedulerC) > 5.74 || (schedulerC + libturbomodulejsijniy.length) > 1.57) {
         schedulerC *= debugi.size + string6.length;
         break;
      }
         debugi = new Map([[`${schedulerC}`, parseInt(`${schedulerC}`)]]);
      let roomI = 8128242.0 <= schedulerC;
      do {
         schedulerC += libturbomodulejsijniy.length >> (Math.min(1, Math.abs(parseInt(`${schedulerC}`))));
         if (roomI) {
            break;
         }
      } while (((disconnectedG / (Math.max(9, schedulerC))) <= 3.13 || (schedulerC / (Math.max(10, disconnectedG))) <= 3.13) && roomI);
         debugi.set(`${disconnectedG}`, parseInt(`${disconnectedG}`));
      let infoK = 6414894 >= libturbomodulejsijniy.length;
      do {
         libturbomodulejsijniy += `${parseInt(`${disconnectedG}`) >> (Math.min(1, Math.abs(1)))}`;
         if (infoK) {
            break;
         }
      } while (infoK && (4 > (libturbomodulejsijniy.length - parseInt(`${disconnectedG}`))));
      roomF -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${roomF}`)), 1))}`);
   }
        setSubmitting(true);

      knewinterstitial8 = new Map([[`${middlesound3.size}`, 1 >> (Math.min(1, Math.abs(parseInt(`${rncoreu}`))))]]);
      humidityN = awayj.includes(modulesF);

        try {

       let mergerE: Array<any> = [66, 562, 779];
       let dragcloseU = 1;
       let gifgoalbgo: Array<any> = [365, 828, 288];
      let iconfeedbackR = gifgoalbgo.length >= 5687396;
      do {
         gifgoalbgo = [dragcloseU % 3];
         if (iconfeedbackR) {
            break;
         }
      } while (((2 << (Math.min(3, gifgoalbgo.length))) >= 3) && iconfeedbackR);
      while ((4 + gifgoalbgo.length) < 4 || 4 < (mergerE.length + gifgoalbgo.length)) {
         gifgoalbgo = [dragcloseU];
         break;
      }
         dragcloseU %= Math.max(2 + dragcloseU, 4);
      for (let g = 0; g < 1; g++) {
         gifgoalbgo.push(mergerE.length);
      }
       let middlebrightnessX = false;
       let huaweiu = false;
      if (3 >= (4 - mergerE.length) && !middlebrightnessX) {
         middlebrightnessX = (52 >= (mergerE.length % (Math.max(9, (huaweiu ? 52 : mergerE.length)))));
      }
       let scorepopsound2 = String.fromCharCode(117,110,115,101,108,101,99,116,101,100,0);
          let liveS = String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,0);
         mergerE = [scorepopsound2.length];
         liveS = `${liveS.length}`;
      if ((dragcloseU | 4) < 4 || (dragcloseU | 4) < 2) {
          let spec4 = String.fromCharCode(98,97,110,0);
          let mergerM = String.fromCharCode(105,110,115,116,97,110,116,105,97,116,105,111,110,0);
          let penaltymatchicon_ = 0;
         dragcloseU &= dragcloseU << (Math.min(Math.abs(3), 1));
         spec4 += `${spec4.length - 2}`;
         mergerM = `${spec4.length}`;
         penaltymatchicon_ &= penaltymatchicon_ * mergerM.length;
      }
      footballfiledlayoutw /= Math.max(middlesound3.size ^ gifgoalbgo.length, 4);
   while (knewinterstitial8.get(`${roomF}`) == null) {
      knewinterstitial8.set(`${humidityN}`, ((humidityN ? 5 : 3) ^ parseInt(`${footballfiledlayoutw}`)));
      break;
   }
            await yysHomeloading.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

       let questicon_ = String.fromCharCode(114,116,109,112,99,114,121,112,116,0);
         questicon_ += `${questicon_.length / (Math.max(1, 8))}`;
          let searchbarI = true;
          let iconpipexpandn = String.fromCharCode(101,120,116,101,110,100,101,100,0);
          let default_fW = 5;
         questicon_ += "2";
         searchbarI = iconpipexpandn.includes(`${default_fW}`);
         iconpipexpandn = `${default_fW - iconpipexpandn.length}`;
      let dplusw = questicon_.length >= 5780851;
      do {
         questicon_ += `${questicon_.length / (Math.max(7, questicon_.length))}`;
         if (dplusw) {
            break;
         }
      } while (dplusw && (questicon_.length >= questicon_.length));
      humidityN = disconnected4.endsWith(`${modulesF}`);
   for (let i = 0; i < 3; i++) {
      awayj.push(((humidityN ? 2 : 5)));
   }
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

      iconviewergifg.set(`${roomF}`, 2);
   let roundC = 8964369 >= middlesound3.size;
   do {
       let untick2 = true;
       let username1: Array<any> = [861, 730];
       let leakchecker9 = true;
       let classesM: Array<any> = [393, 147];
         leakchecker9 = username1.length < 73;
      let whiteticka = username1.length >= 7445395;
      do {
         username1 = [1];
         if (whiteticka) {
            break;
         }
      } while (whiteticka && (1 >= username1.length && (1 | username1.length) >= 4));
         untick2 = !leakchecker9;
         leakchecker9 = username1.length < classesM.length;
      if ((classesM.length << (Math.min(3, username1.length))) == 1 && 1 == (username1.length << (Math.min(classesM.length, 1)))) {
          let goal6 = String.fromCharCode(108,111,119,100,101,108,97,121,0);
         username1.push(((untick2 ? 5 : 1) ^ 3));
         goal6 += `${goal6.length}`;
      }
         username1 = [1 + username1.length];
          let mergerx = 0.0;
          let homeiconn = false;
          let matchdetailbgx = 2.0;
         username1 = [parseInt(`${matchdetailbgx}`)];
         mergerx *= (parseInt(`${mergerx}`) * (homeiconn ? 4 : 3));
         homeiconn = !homeiconn;
      for (let n = 0; n < 1; n++) {
         untick2 = classesM.length >= 94;
      }
         untick2 = (62 < ((!leakchecker9 ? 62 : classesM.length) / (Math.max(classesM.length, 9))));
         untick2 = username1.includes(leakchecker9);
         leakchecker9 = username1.length <= 61 && untick2;
      if (4 >= (username1.length >> (Math.min(Math.abs(3), 1))) || untick2) {
         untick2 = classesM.includes(leakchecker9);
      }
      middlesound3 = new Map([[championR, parseInt(`${footballfiledlayoutw}`)]]);
      if (roundC) {
         break;
      }
   } while (roundC && (2 == (2 >> (Math.min(3, Math.abs(middlesound3.size))))));
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

       let schedulerY = 5;
       let formz = String.fromCharCode(104,100,110,111,100,101,0);
      if (schedulerY <= formz.length) {
         formz = `${(String.fromCharCode(57,0) == formz ? formz.length : schedulerY)}`;
      }
      while (formz.startsWith(`${schedulerY}`)) {
          let holderP = true;
          let gpayD = String.fromCharCode(115,101,97,0);
          let iconschedulej = 2;
         schedulerY *= iconschedulej * formz.length;
         holderP = gpayD.endsWith(`${holderP}`);
         gpayD = `${(gpayD.length - (holderP ? 4 : 1))}`;
         iconschedulej -= 3 - gpayD.length;
         break;
      }
         schedulerY /= Math.max(schedulerY, 1);
          let episodex = false;
          let iconarrowrightorangee = true;
          let goallogow = 0.0;
         schedulerY ^= 1;
         episodex = 7.96 > goallogow;
         iconarrowrightorangee = !iconarrowrightorangee;
         goallogow /= Math.max((parseFloat(`${(iconarrowrightorangee ? 4 : 1)}`)), 4);
         schedulerY -= schedulerY + 1;
         formz = `${formz.length & 2}`;
      knewinterstitial8.set(`${penaltygoalG}`, 1 + penaltygoalG.length);
      disconnected4 += `${parseInt(`${roomF}`)}`;
            return;
        }


        dispatch(updateUsernameState(username));

       let homeplayera = 0.0;
       let inactiveP = 5.0;
          let submit0 = 2.0;
         homeplayera *= 1;
         submit0 -= parseFloat(`${parseInt(`${submit0}`)}`);
      while (inactiveP >= 2.71) {
          let fill_: Array<any> = [String.fromCharCode(110,117,109,101,114,97,108,0), String.fromCharCode(114,116,115,112,0)];
          let libloggerZ = false;
          let submitY = 1;
          let animationc = String.fromCharCode(109,98,112,114,101,100,0);
         inactiveP -= 1;
         fill_.push(fill_.length);
         libloggerZ = fill_.length >= animationc.length;
         submitY %= Math.max(3 ^ submitY, 2);
         animationc += `${(submitY << (Math.min(3, Math.abs((libloggerZ ? 4 : 2)))))}`;
         break;
      }
      middlesound3.set(`${penaltygoalG}`, 2);
      awayj = [3 / (Math.max(parseInt(`${footballfiledlayoutw}`), 1))];
        dispatch(changeScreenAction("修改成功"));

   while (4 <= (5 << (Math.min(2, Math.abs(knewinterstitial8.size)))) && (roomF * parseFloat(`${knewinterstitial8.size}`)) <= 3.97) {
      roomF -= parseFloat(`${middlesound3.size}`);
      break;
   }
       let libavutilO = false;
          let aboutc: Array<any> = [34, 156, 346];
          let privacyE = 0.0;
         libavutilO = 48.14 > privacyE;
         aboutc = [aboutc.length];
         privacyE *= parseFloat(`${2}`);
       let typingloadingG: Array<any> = [465, 515];
       let back8: Array<any> = [String.fromCharCode(105,110,116,101,114,109,105,100,105,97,116,101,0), String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,0), String.fromCharCode(121,117,118,121,117,118,0)];
         back8 = [1];
      iconviewergifg = new Map([[`${middlesound3.size}`, middlesound3.size]]);

        if (onSubmitSuccess) onSubmitSuccess(username);

      footballfiledlayoutw -= knewinterstitial8.size;
      middlesound3.set(`${modulesF}`, 2 * parseInt(`${roomF}`));

        Keyboard.dismiss();

   let soundD = awayj.length >= 6051302;
   do {
      awayj = [disconnected4.length - 1];
      if (soundD) {
         break;
      }
   } while (soundD && (humidityN));
       let halffieldimageH = 1.0;
       let statisticsactive8 = 1;
      let dataZ = halffieldimageH >= 9012895.0;
      do {
          let basketballawayteamX = String.fromCharCode(114,101,102,105,110,105,110,103,0);
          let fillD = String.fromCharCode(116,117,110,110,101,108,101,100,0);
          let dycreatora: Array<any> = [574, 389];
          let rocketm = String.fromCharCode(114,101,106,101,99,116,0);
          let profilev = false;
         halffieldimageH += (String.fromCharCode(99,0) == fillD ? fillD.length : parseInt(`${halffieldimageH}`));
         basketballawayteamX = `${dycreatora.length}`;
         dycreatora.push((String.fromCharCode(95,0) == rocketm ? (profilev ? 2 : 3) : rocketm.length));
         if (dataZ) {
            break;
         }
      } while (dataZ && ((statisticsactive8 % (Math.max(3, 7))) > 5 || 5 > (3 - statisticsactive8)));
      while ((2 / (Math.max(8, statisticsactive8))) < 1) {
         statisticsactive8 /= Math.max(5, parseInt(`${halffieldimageH}`) + 3);
         break;
      }
         halffieldimageH -= statisticsactive8;
      if (halffieldimageH <= statisticsactive8) {
         halffieldimageH += statisticsactive8;
      }
          let assistX = String.fromCharCode(118,99,114,101,97,116,101,0);
          let iconwatchN = String.fromCharCode(99,112,105,97,0);
         statisticsactive8 >>= Math.min(Math.abs(parseInt(`${halffieldimageH}`) - statisticsactive8), 4);
         assistX = "3";
         iconwatchN += "1";
         halffieldimageH += parseInt(`${halffieldimageH}`) ^ statisticsactive8;
      knewinterstitial8.set(`${modulesF}`, middlesound3.size + 2);
        navigation.navigate("Home", {
            screen: "Profile",
        });

   for (let y = 0; y < 1; y++) {
      rncoreu *= parseFloat(`${penaltygoalG.length}`);
   }
   if (!Array.from(iconviewergifg.keys()).includes(`${awayj.length}`)) {
      iconviewergifg.set(championR, championR.length ^ 3);
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
                value={username}
                onChangeText={onUsernameChange}
                placeholder="输入昵称"
                showErrorStyle={usernameErrMsg !== null}
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
                        paddingRight: 40,
                    }}
                >
                    {usernameErrMsg !== null && (
                        <>
                            <Image
                                style={{
                                    height: 22,
                                    width: 22,
                                    marginRight: 5,
                                    position: "relative",
                                    top: 1,
                                }}
                                source={require("../../../static/images/invite/libreactIconeye.png")}
                            />

                            <Text style={styles.danger}>{usernameErrMsg}</Text>
                        </>
                    )}
                </View>

                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 15,
                        color: "#9C9C9C",
                        paddingRight: 10,
                    }}
                >
                    {username.replace(/\s+/g, "").length}/18
                </Text>
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