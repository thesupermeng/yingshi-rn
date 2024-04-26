import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/ww_collection';
import MainHeader from '../../components/header/ww_schedule_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { wwScrollview, wwFirebase } from '@type/ww_dycreator_result';
import VodPlaylist from '../../components/playlist/ww_package';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/ww_icon';
import FastImage from "../../components/common/ww_result"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/ww_downarrow';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { wwShielddoneAlbum } from '@redux/reducers/ww_detail_mbsplash';
import { useAppSelector } from '@hooks/ww_catagory_neon';
import { wwEighteenShirt } from '@redux/ww_small';
import ww_runtime from '../../../Umeng/ww_runtime';
import { wwGrayNewarchdefaults } from '@api';

type wwCasting = {
  item: wwFirebase;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<wwFirebase>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    ww_runtime.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let mbjscommone = 4;
    let langW = 5.0;
    let loading5 = 1.0;
    let materialD = String.fromCharCode(100,95,54,52,95,115,121,115,105,110,102,111,0);
    let colorsb = 3.0;
    let matches_ = false;
    let tempnodatagifk: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,104,95,50,53,0),623], [String.fromCharCode(109,95,52,54,95,114,111,108,101,0),369], [String.fromCharCode(105,112,99,95,56,95,56,56,0),169]]);
    let tailm = String.fromCharCode(118,101,99,116,111,114,115,95,49,95,57,50,0);
    let pangleI = false;
    let arrowR: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,48,95,118,101,114,116,101,120,0),242], [String.fromCharCode(108,111,99,97,108,108,121,95,118,95,50,0),156]]);
    let tramini5 = String.fromCharCode(115,116,101,97,108,95,53,95,51,54,0);
    let whitetickg = 5;
    let episode2 = 1.0;
    let downy = String.fromCharCode(105,95,51,95,114,101,99,101,105,112,116,115,0);
      matches_ = String.fromCharCode(71,0) == tailm;
      whitetickg += mbjscommone;
      tempnodatagifk = new Map([[`${arrowR.size}`, parseInt(`${loading5}`) / (Math.max(arrowR.size, 9))]]);
      langW *= tailm.length;
   if (4 <= mbjscommone) {
      loading5 -= parseFloat(`${tempnodatagifk.size}`);
   }
      mbjscommone &= parseInt(`${loading5}`) & 2;
   while (1.24 == (arrowR.size * colorsb) && 2 == (1 >> (Math.min(3, Math.abs(arrowR.size))))) {
      arrowR = new Map([[tramini5, parseInt(`${colorsb}`)]]);
      break;
   }
       let v_unlockV: Map<any, any> = new Map([[String.fromCharCode(97,115,107,95,53,95,54,51,0),262], [String.fromCharCode(99,95,52,55,95,115,117,110,118,101,114,0),253], [String.fromCharCode(110,105,98,95,57,95,51,0),792]]);
       let libavdevicec: Map<any, any> = new Map([[String.fromCharCode(101,95,57,56,95,117,110,116,114,97,99,107,0),563], [String.fromCharCode(102,102,97,116,95,102,95,52,52,0),372], [String.fromCharCode(105,114,97,110,100,95,117,95,56,49,0),341]]);
       let gemfile2 = String.fromCharCode(111,95,53,50,95,115,121,115,99,116,108,0);
      for (let s = 0; s < 1; s++) {
          let matches7 = false;
          let libtan2: Array<any> = [900, 941];
         libavdevicec.set(gemfile2, gemfile2.length + 1);
         matches7 = !matches7 && libtan2.length > 22;
         libtan2 = [libtan2.length];
      }
         libavdevicec.set(gemfile2, 1);
      let yingy = v_unlockV.size >= 6830417;
      do {
          let root6 = false;
          let renderv = String.fromCharCode(117,95,56,50,95,114,101,109,117,120,101,114,0);
          let stations7 = 3.0;
          let langc = 1;
         v_unlockV.set(`${stations7}`, 3);
         root6 = 52 <= renderv.length;
         renderv = `${(langc + (root6 ? 1 : 3))}`;
         stations7 *= parseFloat(`${renderv.length / 3}`);
         langc -= renderv.length ^ 3;
         if (yingy) {
            break;
         }
      } while (((4 / (Math.max(5, v_unlockV.size))) >= 2 || 2 >= (4 / (Math.max(8, libavdevicec.size)))) && yingy);
      let dragcloseV = 9164680 >= v_unlockV.size;
      do {
          let acceptedh = true;
          let libcrashsdkt: Map<any, any> = new Map([[String.fromCharCode(121,95,56,53,95,99,111,114,114,101,99,116,0),String.fromCharCode(101,95,52,55,95,115,121,110,116,104,102,105,108,116,0)], [String.fromCharCode(108,95,49,56,95,115,119,97,112,0),String.fromCharCode(112,95,56,48,95,112,114,111,99,101,115,115,105,110,103,0)]]);
         v_unlockV.set(`${acceptedh}`, ((acceptedh ? 4 : 2) >> (Math.min(Math.abs(libcrashsdkt.size), 2))));
         if (dragcloseV) {
            break;
         }
      } while ((1 < (v_unlockV.size >> (Math.min(Math.abs(1), 3)))) && dragcloseV);
      for (let m = 0; m < 3; m++) {
         libavdevicec.set(gemfile2, libavdevicec.size - gemfile2.length);
      }
          let libffmpegkit_ = String.fromCharCode(100,95,55,54,95,105,100,97,116,97,0);
          let recommendationf = false;
         v_unlockV = new Map([[`${libavdevicec.size}`, 3 >> (Math.min(5, gemfile2.length))]]);
         libffmpegkit_ += `${(2 | (recommendationf ? 3 : 4))}`;
         recommendationf = recommendationf && libffmpegkit_.length <= 43;
         libavdevicec.set(`${v_unlockV.size}`, libavdevicec.size);
      while (v_unlockV.size >= gemfile2.length) {
         v_unlockV.set(`${libavdevicec.size}`, libavdevicec.size - 1);
         break;
      }
      let libjsijniprofilerz = 7558743 >= libavdevicec.size;
      do {
         libavdevicec.set(`${libavdevicec.size}`, 3 - v_unlockV.size);
         if (libjsijniprofilerz) {
            break;
         }
      } while (libjsijniprofilerz && (gemfile2.startsWith(`${libavdevicec.size}`)));
      pangleI = gemfile2.length == 26;
      mbjscommone *= ((pangleI ? 3 : 4) ^ parseInt(`${loading5}`));
       let unselectedT = 3.0;
       let telegramL = 4.0;
       let brightnesso: Array<any> = [341, 651, 450];
      for (let h = 0; h < 1; h++) {
         brightnesso = [3 | parseInt(`${telegramL}`)];
      }
          let transfer4 = 4.0;
          let bdxadsdkJ: Map<any, any> = new Map([[String.fromCharCode(109,98,112,114,101,100,95,100,95,55,56,0),String.fromCharCode(110,95,53,55,95,105,109,112,111,115,115,105,98,108,101,0)], [String.fromCharCode(104,95,51,57,95,115,121,110,99,115,97,102,101,0),String.fromCharCode(101,110,111,117,103,104,95,105,95,56,52,0)], [String.fromCharCode(118,100,97,115,104,101,114,95,119,95,50,48,0),String.fromCharCode(97,95,57,54,95,112,114,105,111,114,0)]]);
          let buttons = 2.0;
         telegramL *= bdxadsdkJ.size;
         transfer4 /= Math.max(4, parseFloat(`${parseInt(`${transfer4}`) % (Math.max(10, parseInt(`${buttons}`)))}`));
         bdxadsdkJ.set(`${transfer4}`, 2);
         buttons /= Math.max(1, parseInt(`${transfer4}`));
      for (let z = 0; z < 2; z++) {
          let privacyJ = String.fromCharCode(115,117,98,115,101,115,115,105,111,110,95,54,95,50,54,0);
          let pingz = String.fromCharCode(115,95,56,48,95,98,105,116,118,101,99,0);
         brightnesso = [brightnesso.length];
         privacyJ += `${privacyJ.length / (Math.max(3, 2))}`;
         pingz = `${(privacyJ == String.fromCharCode(117,0) ? pingz.length : privacyJ.length)}`;
      }
       let libhermesF = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,95,111,95,52,53,0);
       let phoneC: Map<any, any> = new Map([[String.fromCharCode(116,95,52,53,95,100,101,115,104,97,107,101,0),true ], [String.fromCharCode(102,95,55,50,95,111,112,115,99,97,108,101,0),false ]]);
      let moviesJ = 8340087 >= brightnesso.length;
      do {
         brightnesso = [libhermesF.length & brightnesso.length];
         if (moviesJ) {
            break;
         }
      } while (((brightnesso.length / (Math.max(4, 5))) >= 1) && moviesJ);
      for (let p = 0; p < 1; p++) {
          let rewardvideoW = String.fromCharCode(115,116,100,105,110,116,95,52,95,54,0);
          let mbnativeB = true;
          let libreanimatedj = 3.0;
         telegramL += parseInt(`${libreanimatedj}`) * 1;
         rewardvideoW = `${((mbnativeB ? 2 : 4))}`;
         mbnativeB = !rewardvideoW.startsWith(`${mbnativeB}`);
         libreanimatedj -= (parseFloat(`${rewardvideoW == String.fromCharCode(55,0) ? rewardvideoW.length : (mbnativeB ? 5 : 1)}`));
      }
      if (3.70 < (parseFloat(`${libhermesF.length}`) + unselectedT) || 4 < (libhermesF.length + parseInt(`${unselectedT}`))) {
          let searchbarN = String.fromCharCode(115,101,110,100,95,109,95,51,56,0);
          let faviconM = false;
         unselectedT /= Math.max(4, (parseFloat(`${String.fromCharCode(120,0) == libhermesF ? phoneC.size : libhermesF.length}`)));
         searchbarN = `${((faviconM ? 3 : 1))}`;
         faviconM = !searchbarN.includes(`${faviconM}`);
      }
      let description_apb = unselectedT >= 6472491.0;
      do {
          let circleH = 1.0;
         unselectedT /= Math.max(parseFloat(`${2 + parseInt(`${telegramL}`)}`), 4);
         circleH *= parseFloat(`${parseInt(`${circleH}`) << (Math.min(Math.abs(parseInt(`${circleH}`)), 5))}`);
         if (description_apb) {
            break;
         }
      } while (description_apb && (5.87 < (1.24 + unselectedT) && (4 << (Math.min(4, libhermesF.length))) < 2));
      tempnodatagifk.set(`${telegramL}`, 3);
       let final_k5i = 2.0;
       let sliderS = String.fromCharCode(116,105,107,101,114,95,106,95,55,55,0);
       let codegenQ = String.fromCharCode(100,95,53,55,95,114,101,108,97,121,0);
       let shareg = true;
      while (3 < sliderS.length) {
         sliderS = "3";
         break;
      }
         sliderS += `${codegenQ.length % (Math.max(2, 3))}`;
         codegenQ += `${(codegenQ == String.fromCharCode(89,0) ? codegenQ.length : (shareg ? 4 : 4))}`;
      let libreactnativeblobH = final_k5i >= 7959050.0;
      do {
         final_k5i += 2 - codegenQ.length;
         if (libreactnativeblobH) {
            break;
         }
      } while ((!sliderS.endsWith(`${final_k5i}`)) && libreactnativeblobH);
      if (1 >= (parseInt(`${final_k5i}`) + sliderS.length)) {
          let iconuserS: Array<any> = [970, 83];
          let vignette8 = 3.0;
          let dragcloseB = 5;
          let iconbackwhitez: Array<any> = [String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,95,51,95,52,0), String.fromCharCode(112,95,50,55,95,109,101,116,104,111,100,0), String.fromCharCode(115,95,57,54,95,104,97,112,116,105,99,0)];
          let confirmationQ = 2.0;
         sliderS += `${3 << (Math.min(Math.abs(parseInt(`${confirmationQ}`)), 2))}`;
         iconuserS = [iconuserS.length ^ 2];
         vignette8 += 2 - dragcloseB;
         dragcloseB &= 2;
         iconbackwhitez.push(2);
         confirmationQ /= Math.max(2, 3);
      }
         final_k5i -= 3 / (Math.max(parseInt(`${final_k5i}`), 2));
      let frame_1me = sliderS == String.fromCharCode(115,54,122,0);
      do {
         sliderS += `${(parseInt(`${final_k5i}`) + (shareg ? 3 : 5))}`;
         if (frame_1me) {
            break;
         }
      } while (frame_1me && (1.31 >= (final_k5i + sliderS.length) || 4 >= (1 & sliderS.length)));
      let subsK = codegenQ == String.fromCharCode(52,114,95,48,107,0);
      do {
         codegenQ = `${sliderS.length}`;
         if (subsK) {
            break;
         }
      } while ((codegenQ.length == 1 || shareg) && subsK);
      arrowR = new Map([[`${whitetickg}`, 1 - sliderS.length]]);
      langW += materialD.length + 3;
   while ((materialD.length * whitetickg) < 4) {
      whitetickg -= 1;
      break;
   }
      episode2 /= Math.max((1 | (pangleI ? 4 : 3)), 4);

    if (isFocused) {

       let matchactivep = String.fromCharCode(111,95,50,54,95,115,101,103,100,97,116,97,0);
       let logouserq = String.fromCharCode(119,95,55,53,95,97,99,116,117,97,108,105,122,101,100,0);
         logouserq += `${2 ^ matchactivep.length}`;
         matchactivep = `${logouserq.length / (Math.max(matchactivep.length, 5))}`;
      while (matchactivep.endsWith(`${logouserq.length}`)) {
          let rewardA = 2.0;
          let libjsiu = 3.0;
          let settingsX = String.fromCharCode(117,112,108,111,97,100,101,100,95,98,95,49,0);
          let grayk = false;
          let r_playerd = 4;
         logouserq += `${r_playerd}`;
         rewardA /= Math.max(3, parseFloat(`${parseInt(`${libjsiu}`) / (Math.max(2, 7))}`));
         libjsiu -= parseFloat(`${settingsX.length}`);
         settingsX = `${parseInt(`${libjsiu}`)}`;
         grayk = !grayk;
         r_playerd %= Math.max(parseInt(`${rewardA}`) / 1, 5);
         break;
      }
      while (matchactivep.endsWith(logouserq)) {
          let giftbuttonR = String.fromCharCode(98,117,114,110,95,98,95,57,55,0);
          let placementi = String.fromCharCode(112,95,51,53,95,105,109,109,101,100,105,97,116,101,108,121,0);
         matchactivep += `${giftbuttonR.length}`;
         giftbuttonR = `${3 | placementi.length}`;
         placementi = `${placementi.length}`;
         break;
      }
       let starY: Map<any, any> = new Map([[String.fromCharCode(97,119,97,114,101,95,118,95,51,51,0),672], [String.fromCharCode(110,95,49,56,0),603], [String.fromCharCode(104,115,98,95,110,95,49,51,0),801]]);
       let greenP: Map<any, any> = new Map([[String.fromCharCode(115,117,109,102,95,101,95,50,53,0),781], [String.fromCharCode(112,111,108,108,115,95,114,95,49,55,0),230], [String.fromCharCode(104,95,52,53,95,98,121,116,101,108,101,110,0),767]]);
          let trophy8 = 0;
          let umengI = String.fromCharCode(109,102,114,97,95,117,95,51,55,0);
          let screenI = String.fromCharCode(117,110,100,101,102,105,110,101,100,95,112,95,50,52,0);
         starY.set(screenI, screenI.length - 3);
         trophy8 -= 1;
         umengI += `${umengI.length * 2}`;
      whitetickg &= tailm.length;
   if (5 >= mbjscommone) {
      mbjscommone |= 2 + whitetickg;
   }
       let whitetickJ = false;
       let taile = String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,99,95,55,55,0);
         taile += `${(taile.length & (whitetickJ ? 5 : 3))}`;
         whitetickJ = !whitetickJ;
          let utilsC = false;
          let applet = 2;
         taile = `${applet}`;
         utilsC = !utilsC;
         applet <<= Math.min(Math.abs(((utilsC ? 1 : 2))), 2);
         whitetickJ = taile.length <= 21 && whitetickJ;
      while (whitetickJ) {
         whitetickJ = taile.length < 100 && !whitetickJ;
         break;
      }
       let orangeclockk = String.fromCharCode(103,95,52,55,95,99,104,97,108,108,101,110,103,101,0);
      colorsb /= Math.max(5, parseInt(`${loading5}`) + 2);
       let buttonL = 5.0;
       let componentregistryR = String.fromCharCode(106,95,57,53,95,99,105,110,101,0);
      while ((buttonL + 5.47) >= 3.20) {
         componentregistryR = `${parseInt(`${buttonL}`)}`;
         break;
      }
      let snewinterstitialn = buttonL <= 6851645.0;
      do {
         buttonL += parseFloat(`${parseInt(`${buttonL}`) - componentregistryR.length}`);
         if (snewinterstitialn) {
            break;
         }
      } while (((componentregistryR.length & 2) >= 5 || 2 >= (componentregistryR.length | 2)) && snewinterstitialn);
         componentregistryR += `${parseInt(`${buttonL}`) % (Math.max(2, 4))}`;
      let foundQ = componentregistryR.length >= 9400235;
      do {
         componentregistryR += `${(String.fromCharCode(83,0) == componentregistryR ? parseInt(`${buttonL}`) : componentregistryR.length)}`;
         if (foundQ) {
            break;
         }
      } while ((5 <= (componentregistryR.length / (Math.max(3, 3))) && (4.18 - buttonL) <= 4.59) && foundQ);
      let libavformatW = 6294844.0 <= buttonL;
      do {
          let turnI = false;
          let penaltygoalJ = false;
          let configureO = String.fromCharCode(116,95,56,51,95,103,114,111,117,112,105,110,103,0);
          let backv = 3.0;
         buttonL /= Math.max(parseFloat(`${parseInt(`${backv}`)}`), 1);
         turnI = penaltygoalJ;
         configureO = `${(configureO == String.fromCharCode(108,0) ? configureO.length : (turnI ? 4 : 1))}`;
         if (libavformatW) {
            break;
         }
      } while (libavformatW && (componentregistryR.startsWith(`${buttonL}`)));
      while ((4.19 / (Math.max(5, buttonL))) <= 3.81 || (buttonL / (Math.max(parseFloat(`${componentregistryR.length}`), 8))) <= 4.19) {
         buttonL += (parseFloat(`${componentregistryR == String.fromCharCode(104,0) ? parseInt(`${buttonL}`) : componentregistryR.length}`));
         break;
      }
      tramini5 += `${tailm.length}`;
       let resendy = String.fromCharCode(111,95,50,53,95,99,111,110,99,117,114,114,101,110,116,0);
       let watchW = true;
       let webviewE: Array<any> = [583, 374, 652];
         webviewE = [((watchW ? 1 : 2) * 2)];
         watchW = (((watchW ? 91 : webviewE.length) >> (Math.min(webviewE.length, 5))) > 91);
      let iconuser9 = watchW ? !watchW : watchW;
      do {
         watchW = 65 == resendy.length;
         if (iconuser9) {
            break;
         }
      } while (((4 << (Math.min(2, webviewE.length))) >= 1 && !watchW) && iconuser9);
      let injuryL = String.fromCharCode(95,110,108,121,52,118,108,95,0) == resendy;
      do {
         resendy += `${((watchW ? 5 : 4) << (Math.min(webviewE.length, 3)))}`;
         if (injuryL) {
            break;
         }
      } while (injuryL && (1 >= resendy.length));
      for (let e = 0; e < 2; e++) {
          let icont = 1.0;
          let textlayoutmanageri = String.fromCharCode(100,95,57,50,95,114,114,116,114,0);
         resendy = `${((watchW ? 5 : 5) & webviewE.length)}`;
         icont += parseInt(`${icont}`);
         textlayoutmanageri = `${parseInt(`${icont}`)}`;
      }
      while (resendy.endsWith(`${watchW}`)) {
         resendy += `${resendy.length}`;
         break;
      }
          let actionG = 1.0;
         webviewE.push((3 % (Math.max(5, (watchW ? 3 : 3)))));
         actionG += parseInt(`${actionG}`) + parseInt(`${actionG}`);
         webviewE = [3 * webviewE.length];
      let ewardedc = watchW ? !watchW : watchW;
      do {
          let awayteamfieldA = String.fromCharCode(107,95,55,54,95,112,111,115,116,112,114,111,99,0);
         watchW = webviewE.length == 1 || watchW;
         awayteamfieldA += `${awayteamfieldA.length}`;
         if (ewardedc) {
            break;
         }
      } while ((!resendy.startsWith(`${watchW}`)) && ewardedc);
      tailm = `${parseInt(`${colorsb}`) / 3}`;
   for (let n = 0; n < 1; n++) {
      whitetickg /= Math.max(tailm.length ^ 3, 2);
   }
      materialD += `${materialD.length | whitetickg}`;
       let vignettez = String.fromCharCode(98,100,108,116,95,97,95,55,56,0);
       let mbbido = String.fromCharCode(118,95,50,52,95,99,111,110,99,97,116,101,110,97,116,101,100,0);
       let guidey: Array<any> = [217, 635, 452];
       let changei = 0.0;
       let jingdonga = 1.0;
         mbbido = `${mbbido.length}`;
      let libpangleflippedd = 8976577.0 >= changei;
      do {
         changei *= vignettez.length / 2;
         if (libpangleflippedd) {
            break;
         }
      } while (libpangleflippedd && (guidey.includes(changei)));
         vignettez += `${parseInt(`${changei}`) & parseInt(`${jingdonga}`)}`;
         mbbido = `${vignettez.length % 3}`;
         changei *= 2;
      while (vignettez.startsWith(`${jingdonga}`)) {
         jingdonga *= (String.fromCharCode(97,0) == vignettez ? parseInt(`${changei}`) : vignettez.length);
         break;
      }
      for (let i = 0; i < 2; i++) {
         guidey = [parseInt(`${jingdonga}`) ^ 2];
      }
      let static_0nI = 7378185 >= guidey.length;
      do {
         guidey.push(1 << (Math.min(4, vignettez.length)));
         if (static_0nI) {
            break;
         }
      } while (static_0nI && ((3 * mbbido.length) >= 3));
      langW += 2;
   while (mbjscommone > whitetickg) {
      whitetickg >>= Math.min(Math.abs(1), 3);
      break;
   }
   if (!matches_) {
      matches_ = 70 < (loading5 + mbjscommone);
   }
   while (tramini5.length == materialD.length) {
       let yingK: Map<any, any> = new Map([[String.fromCharCode(114,95,49,49,95,98,101,122,101,108,0),18], [String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,103,95,57,54,0),936]]);
       let bang_ = String.fromCharCode(117,115,101,114,99,116,120,95,111,95,53,48,0);
       let awayR = String.fromCharCode(118,95,53,51,95,97,117,116,111,103,101,110,0);
         bang_ += `${yingK.size ^ awayR.length}`;
      if (2 == bang_.length) {
         bang_ += `${(String.fromCharCode(105,0) == bang_ ? awayR.length : bang_.length)}`;
      }
         yingK.set(`${awayR}`, 2 - awayR.length);
         bang_ = `${yingK.size * awayR.length}`;
      for (let x = 0; x < 3; x++) {
         bang_ = `${(awayR == String.fromCharCode(113,0) ? awayR.length : yingK.size)}`;
      }
          let relatedY = String.fromCharCode(109,95,55,56,95,97,100,100,114,101,115,115,0);
          let singapore6: Map<any, any> = new Map([[String.fromCharCode(109,95,57,48,95,111,117,116,108,105,110,107,0),584], [String.fromCharCode(105,112,102,115,95,117,95,52,49,0),966], [String.fromCharCode(99,95,49,52,95,100,115,112,114,0),450]]);
         awayR = `${bang_.length}`;
         relatedY += `${relatedY.length}`;
         singapore6 = new Map([[`${singapore6.size}`, singapore6.size]]);
         bang_ += `${(bang_ == String.fromCharCode(112,0) ? bang_.length : awayR.length)}`;
         yingK = new Map([[`${yingK.size}`, (awayR == String.fromCharCode(71,0) ? awayR.length : yingK.size)]]);
         bang_ += `${awayR.length}`;
      materialD = "3";
      break;
   }
       let orangeX = 2.0;
      if ((2 + orangeX) <= 5.95) {
         orangeX /= Math.max(5, parseFloat(`${parseInt(`${orangeX}`)}`));
      }
         orangeX *= parseFloat(`${parseInt(`${orangeX}`)}`);
         orangeX += parseFloat(`${parseInt(`${orangeX}`)}`);
      pangleI = arrowR.size == 63 || 34.83 == colorsb;
      pangleI = String.fromCharCode(109,0) == tramini5;
   for (let z = 0; z < 1; z++) {
      tramini5 = `${tailm.length * parseInt(`${loading5}`)}`;
   }
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let chinasamew = 4;
    let mailC = 3;
    let layoutQ: Array<any> = [527, 759];
    let countdownA = String.fromCharCode(118,95,54,56,95,99,111,101,102,102,105,99,105,101,110,116,115,0);
    let topic1 = 4;
    let kick5 = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,118,95,50,49,0);
    let interstitialT = String.fromCharCode(107,95,50,54,95,112,97,110,101,108,0);
    let transferF = String.fromCharCode(120,95,48,95,100,105,115,116,0);
    let handlerA: Array<any> = [String.fromCharCode(119,95,54,52,95,102,108,97,115,104,115,118,0), String.fromCharCode(115,97,116,95,110,95,55,50,0), String.fromCharCode(109,111,110,116,104,115,95,104,95,49,57,0)];
   let shootyesgoalj = String.fromCharCode(103,119,106,0) == kick5;
   do {
      kick5 += `${(interstitialT == String.fromCharCode(68,0) ? interstitialT.length : layoutQ.length)}`;
      if (shootyesgoalj) {
         break;
      }
   } while (shootyesgoalj && ((topic1 >> (Math.min(kick5.length, 4))) >= 2));
   if (!kick5.startsWith(`${layoutQ.length}`)) {
      kick5 = `${3 & layoutQ.length}`;
   }
      kick5 = "1";
      topic1 >>= Math.min(3, interstitialT.length);
   let settingsv = 5531433 <= layoutQ.length;
   do {
      layoutQ.push(chinasamew / 1);
      if (settingsv) {
         break;
      }
   } while (settingsv && ((2 << (Math.min(3, layoutQ.length))) == 1 || (layoutQ.length << (Math.min(countdownA.length, 5))) == 2));

    const state = await NetInfo.fetch();

   if (4 > (3 << (Math.min(2, Math.abs(topic1))))) {
      chinasamew %= Math.max(4, layoutQ.length);
   }
   if (interstitialT.includes(kick5)) {
       let checkboxn = 0.0;
       let ping1 = String.fromCharCode(118,95,57,56,95,101,115,116,105,109,97,116,101,0);
       let valuesC = 0.0;
       let d_county: Map<any, any> = new Map([[String.fromCharCode(99,98,99,114,95,114,95,49,52,0),false ], [String.fromCharCode(105,95,52,55,95,108,111,97,100,0),true ], [String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,119,95,51,55,0),false ]]);
       let sideh: Map<any, any> = new Map([[String.fromCharCode(102,111,114,103,101,116,95,121,95,53,57,0),668], [String.fromCharCode(116,119,111,119,97,121,95,105,95,57,50,0),854], [String.fromCharCode(115,117,98,116,105,116,108,101,95,110,95,55,57,0),985]]);
      for (let j = 0; j < 1; j++) {
         checkboxn /= Math.max((ping1 == String.fromCharCode(122,0) ? parseInt(`${valuesC}`) : ping1.length), 5);
      }
      if (1.12 == checkboxn) {
         d_county = new Map([[`${d_county.size}`, d_county.size >> (Math.min(ping1.length, 1))]]);
      }
      for (let g = 0; g < 3; g++) {
         valuesC += parseFloat(`${parseInt(`${valuesC}`) / (Math.max(sideh.size, 9))}`);
      }
       let sound0 = 2;
      let iconbellactiveY = valuesC <= 5329045.0;
      do {
         valuesC /= Math.max(4, parseFloat(`${1 + parseInt(`${checkboxn}`)}`));
         if (iconbellactiveY) {
            break;
         }
      } while ((1.35 > checkboxn) && iconbellactiveY);
         valuesC *= parseFloat(`${parseInt(`${valuesC}`) | sound0}`);
      if (d_county.get(`${sound0}`) == null) {
         d_county.set(ping1, parseInt(`${checkboxn}`));
      }
      for (let k = 0; k < 2; k++) {
         sound0 *= d_county.size;
      }
      interstitialT += `${(countdownA == String.fromCharCode(56,0) ? countdownA.length : layoutQ.length)}`;
   }
   if ((chinasamew ^ 3) < 3 || (chinasamew ^ 3) < 5) {
      interstitialT += "1";
   }
   while ((3 ^ kick5.length) <= 5) {
       let yellowanimationlivel = false;
          let sansT: Array<any> = [896, 571, 581];
         yellowanimationlivel = sansT.length < 60 && yellowanimationlivel;
      let catalogB = yellowanimationlivel ? !yellowanimationlivel : yellowanimationlivel;
      do {
          let b_unlockT: Array<any> = [107, 511];
         yellowanimationlivel = (74 <= (b_unlockT.length ^ (yellowanimationlivel ? b_unlockT.length : 74)));
         if (catalogB) {
            break;
         }
      } while (catalogB && (!yellowanimationlivel || !yellowanimationlivel));
      for (let x = 0; x < 1; x++) {
          let imagemanagerb: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,108,117,108,97,116,101,95,99,95,52,54,0),727], [String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,55,95,50,51,0),651], [String.fromCharCode(109,117,108,114,101,115,95,100,95,50,51,0),644]]);
         yellowanimationlivel = imagemanagerb.size == 96 && !yellowanimationlivel;
      }
      kick5 = `${countdownA.length}`;
      break;
   }
   if (kick5 == countdownA) {
      countdownA = `${1 % (Math.max(8, chinasamew))}`;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      topic1 |= transferF.length;
   if (topic1 > 1) {
       let themeS: Array<any> = [109, 716, 168];
       let benefito: Map<any, any> = new Map([[String.fromCharCode(98,111,110,100,95,106,95,57,51,0),true ], [String.fromCharCode(117,110,112,105,110,95,112,95,54,48,0),false ], [String.fromCharCode(121,95,55,57,95,114,101,110,111,114,109,0),true ]]);
       let classesZ: Map<any, any> = new Map([[String.fromCharCode(109,95,50,55,95,110,101,103,111,116,105,97,116,101,100,0),940], [String.fromCharCode(117,101,117,101,95,115,95,50,53,0),710], [String.fromCharCode(115,111,108,118,101,95,119,95,55,48,0),383]]);
       let iconedity = String.fromCharCode(98,95,55,48,95,99,114,111,115,115,102,97,100,105,110,103,0);
         themeS.push(3 - iconedity.length);
         iconedity += `${iconedity.length ^ benefito.size}`;
       let halffieldimageY: Map<any, any> = new Map([[String.fromCharCode(97,98,115,108,95,54,95,53,49,0),true ], [String.fromCharCode(114,101,115,97,109,112,95,51,95,50,0),true ], [String.fromCharCode(98,95,50,55,95,97,117,116,111,114,101,118,101,114,115,101,100,0),false ]]);
       let iconplayP: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,112,116,115,95,112,95,50,49,0),false ], [String.fromCharCode(119,97,118,101,95,109,95,55,0),true ]]);
         classesZ = new Map([[`${iconplayP.size}`, 2]]);
          let baselinez: Map<any, any> = new Map([[String.fromCharCode(115,95,54,95,118,108,99,111,100,101,99,0),false ], [String.fromCharCode(114,101,119,114,105,116,116,101,110,95,122,95,56,49,0),false ], [String.fromCharCode(114,95,50,57,95,108,111,99,107,115,99,114,101,101,110,0),true ]]);
          let arrowX: Array<any> = [939, 412];
         classesZ = new Map([[`${baselinez.size}`, baselinez.size]]);
         arrowX = [3 << (Math.min(4, arrowX.length))];
         halffieldimageY.set(`${iconplayP.size}`, iconplayP.size << (Math.min(Math.abs(halffieldimageY.size), 3)));
       let iconsharej = String.fromCharCode(99,111,110,116,105,110,117,97,108,95,106,95,55,49,0);
         iconedity = `${2 + benefito.size}`;
      while (5 == (themeS.length - 3)) {
         halffieldimageY = new Map([[`${iconplayP.size}`, 3]]);
         break;
      }
      if (3 >= classesZ.size) {
         classesZ.set(`${themeS.length}`, themeS.length);
      }
       let crossU = 2.0;
         themeS = [classesZ.size];
      kick5 = `${iconedity.length}`;
   }
      transferF = `${2 >> (Math.min(1, Math.abs(mailC)))}`;
      kick5 = `${1 ^ layoutQ.length}`;
   if (!countdownA.includes(`${chinasamew}`)) {
      countdownA = "3";
   }
    setIsOffline(offline);

   let defaultprofilepic0 = 8116993 <= chinasamew;
   do {
      chinasamew |= interstitialT.length;
      if (defaultprofilepic0) {
         break;
      }
   } while ((4 == (chinasamew >> (Math.min(Math.abs(2), 2))) || 1 == (chinasamew >> (Math.min(Math.abs(2), 4)))) && defaultprofilepic0);
       let flyerH = String.fromCharCode(117,95,49,57,0);
       let splashq = String.fromCharCode(109,95,53,55,95,112,111,115,115,105,98,108,121,0);
       let upgrade_ = false;
          let eventsplash5 = 4.0;
         splashq = `${3 << (Math.min(Math.abs(parseInt(`${eventsplash5}`)), 3))}`;
      let awayteamfieldM = String.fromCharCode(107,55,117,54,118,98,0) == splashq;
      do {
         splashq += "3";
         if (awayteamfieldM) {
            break;
         }
      } while (awayteamfieldM && (upgrade_));
      while (splashq.includes(`${upgrade_}`)) {
         splashq = `${((upgrade_ ? 4 : 1) << (Math.min(Math.abs(2), 2)))}`;
         break;
      }
      for (let p = 0; p < 1; p++) {
         splashq += `${flyerH.length}`;
      }
         upgrade_ = 79 > splashq.length || flyerH == String.fromCharCode(119,0);
          let placeholder6 = false;
          let yellowvideoliveN = true;
          let boot_ = String.fromCharCode(100,95,53,56,95,102,111,117,110,100,0);
         splashq = `${((placeholder6 ? 4 : 3))}`;
         placeholder6 = boot_.length > 74;
         yellowvideoliveN = !boot_.endsWith(`${yellowvideoliveN}`);
      for (let m = 0; m < 3; m++) {
          let benefitU = String.fromCharCode(99,95,57,54,95,105,109,112,108,105,99,105,116,101,108,121,0);
          let arrowups: Array<any> = [781, 777, 968];
          let reminder1 = 0.0;
          let mbridgeI = 5;
         splashq = `${(flyerH.length >> (Math.min(1, Math.abs((upgrade_ ? 2 : 2)))))}`;
         benefitU = `${arrowups.length}`;
         arrowups.push(benefitU.length);
         reminder1 /= Math.max(5, parseFloat(`${1}`));
         mbridgeI &= (benefitU == String.fromCharCode(74,0) ? benefitU.length : parseInt(`${reminder1}`));
      }
      let minix = upgrade_ ? !upgrade_ : upgrade_;
      do {
          let projectZ: Map<any, any> = new Map([[String.fromCharCode(119,95,51,56,95,105,110,116,102,108,111,97,116,0),778], [String.fromCharCode(101,110,101,114,103,121,95,107,95,52,57,0),922]]);
         upgrade_ = 88 <= projectZ.size;
         if (minix) {
            break;
         }
      } while (minix && (splashq.length >= 4));
         splashq += `${flyerH.length}`;
      kick5 += `${countdownA.length << (Math.min(5, layoutQ.length))}`;
   while (2 == (1 * transferF.length) && 2 == (1 * chinasamew)) {
       let i_countx = 2.0;
       let l_centerZ = String.fromCharCode(113,95,53,56,95,104,97,110,100,115,0);
         l_centerZ += "1";
      let mbjscommon5 = 9535384.0 <= i_countx;
      do {
          let philippinesd: Map<any, any> = new Map([[String.fromCharCode(122,95,52,48,95,115,117,98,114,97,110,103,101,0),153], [String.fromCharCode(120,95,56,51,95,99,97,112,115,0),824], [String.fromCharCode(115,101,99,111,110,100,95,113,95,52,57,0),602]]);
          let gradlef: Map<any, any> = new Map([[String.fromCharCode(107,110,111,119,110,95,107,95,53,0),true ], [String.fromCharCode(105,103,110,111,114,105,110,103,95,56,95,51,54,0),false ]]);
          let assisty = 5;
          let confirmations = String.fromCharCode(108,105,98,115,119,105,102,116,95,105,95,52,0);
         i_countx *= parseFloat(`${l_centerZ.length}`);
         philippinesd.set(`${gradlef.size}`, philippinesd.size >> (Math.min(1, Math.abs(gradlef.size))));
         assisty -= 3;
         confirmations = `${confirmations.length * 1}`;
         if (mbjscommon5) {
            break;
         }
      } while (mbjscommon5 && (4.11 > (i_countx / 3.54) || (i_countx / (Math.max(7, parseFloat(`${l_centerZ.length}`)))) > 3.54));
         l_centerZ = `${parseInt(`${i_countx}`)}`;
      while (!l_centerZ.includes(`${i_countx}`)) {
          let launcherj = 5.0;
          let liveT = String.fromCharCode(117,95,50,53,95,110,101,119,108,121,0);
          let libfolly_ = 0.0;
         i_countx += (parseFloat(`${liveT == String.fromCharCode(68,0) ? liveT.length : parseInt(`${i_countx}`)}`));
         launcherj *= parseFloat(`${parseInt(`${libfolly_}`)}`);
         break;
      }
      while (3 >= (l_centerZ.length % 3) || (3 + l_centerZ.length) >= 3) {
         l_centerZ = `${(l_centerZ == String.fromCharCode(113,0) ? parseInt(`${i_countx}`) : l_centerZ.length)}`;
         break;
      }
          let untick2 = 1.0;
         i_countx /= Math.max(5, parseFloat(`${parseInt(`${i_countx}`) - 1}`));
         untick2 *= parseFloat(`${parseInt(`${untick2}`)}`);
      transferF += `${handlerA.length << (Math.min(5, Math.abs(topic1)))}`;
      break;
   }
   for (let b = 0; b < 1; b++) {
      handlerA = [layoutQ.length & 3];
   }
   for (let n = 0; n < 3; n++) {
      transferF = `${(String.fromCharCode(89,0) == transferF ? transferF.length : kick5.length)}`;
   }
    if (!offline) {

   while (layoutQ.length <= transferF.length) {
      layoutQ = [3];
      break;
   }
   let applew = handlerA.length >= 5075893;
   do {
       let iconfeedbackW = String.fromCharCode(100,101,102,105,110,101,95,102,95,51,55,0);
       let hongkongB: Map<any, any> = new Map([[String.fromCharCode(119,104,101,101,108,95,51,95,50,0),898], [String.fromCharCode(104,95,53,95,115,117,115,112,101,110,100,101,100,0),109]]);
       let round3: Map<any, any> = new Map([[String.fromCharCode(100,95,50,49,95,117,116,118,105,100,101,111,100,115,112,0),895], [String.fromCharCode(120,95,49,50,95,108,111,110,103,98,105,103,0),306], [String.fromCharCode(108,95,54,49,95,102,109,105,120,0),951]]);
       let fcdaebecbcbafcdfceaaeccfeacdbk = String.fromCharCode(106,95,52,49,95,108,115,112,100,108,112,99,0);
          let dragclosen: Map<any, any> = new Map([[String.fromCharCode(98,101,120,116,95,118,95,49,52,0),907], [String.fromCharCode(106,95,50,53,95,98,109,111,100,101,0),466]]);
          let plashO = String.fromCharCode(108,95,56,54,95,109,97,110,97,103,101,97,98,108,101,0);
          let lessA: Array<any> = [222, 140];
         round3.set(iconfeedbackW, 1);
         dragclosen.set(`${plashO}`, 2);
         plashO += `${lessA.length}`;
         lessA = [lessA.length];
      handlerA.push((String.fromCharCode(66,0) == countdownA ? countdownA.length : handlerA.length));
      if (applew) {
         break;
      }
   } while (applew && (!handlerA.includes(topic1)));
      chinasamew <<= Math.min(5, Math.abs(countdownA.length / (Math.max(3, 6))));
      topic1 ^= 2 * handlerA.length;
   if (!transferF.startsWith(`${mailC}`)) {
      transferF = `${countdownA.length | chinasamew}`;
   }
      handleRefresh();
    }
  }, []);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    
    return () => unsubscribe();
  }, [isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    wwGrayNewarchdefaults.getTopic(page)
      .then((json: wwScrollview) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json.List);
      }), []);

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      
      
      
      
      
    },
  );

  const renderItem = useCallback(({ item }: wwCasting) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  ), []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let eighteenp = String.fromCharCode(102,95,56,51,95,116,117,112,108,101,0);
    let incidentq: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,95,119,95,53,50,0),String.fromCharCode(117,95,53,50,95,115,117,105,116,101,115,0)], [String.fromCharCode(105,110,116,101,114,110,101,116,95,120,95,54,56,0),String.fromCharCode(109,111,100,97,108,108,121,95,113,95,54,55,0)], [String.fromCharCode(101,95,56,57,95,104,105,110,116,105,110,103,0),String.fromCharCode(101,120,116,114,97,99,116,95,117,95,52,56,0)]]);
    let layoutF: Array<any> = [729, 722, 883];
    let projectY: Array<any> = [736, 979, 733];
    let arrowrightO: Array<any> = [667, 343];
    let views3 = String.fromCharCode(111,100,105,110,103,95,101,95,53,53,0);
    let libmapbufferjniG = String.fromCharCode(110,95,49,56,95,98,111,111,115,116,101,100,0);
    let holder0 = String.fromCharCode(116,95,56,50,0);
    let playercommons = String.fromCharCode(99,104,114,111,109,97,116,105,99,95,57,95,51,51,0);
   for (let z = 0; z < 1; z++) {
      libmapbufferjniG += `${incidentq.size >> (Math.min(Math.abs(3), 2))}`;
   }
      libmapbufferjniG += "2";
      eighteenp = `${layoutF.length}`;

    if (isSwipe) {

   for (let h = 0; h < 3; h++) {
       let redgoalm = String.fromCharCode(100,114,97,102,116,115,95,100,95,48,0);
       let stringH = String.fromCharCode(115,101,99,117,114,105,116,121,95,49,95,53,54,0);
       let volumeV = 0.0;
       let bannera: Array<any> = [6, 351];
       let targetW = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,111,95,51,48,0);
          let mbjscommonn = String.fromCharCode(111,95,57,48,95,100,99,116,101,108,101,109,0);
          let rootk = String.fromCharCode(100,115,116,115,117,98,95,107,95,51,48,0);
         targetW += `${stringH.length}`;
         mbjscommonn = `${rootk.length}`;
         rootk = `${2 ^ rootk.length}`;
         bannera = [bannera.length];
      let sigmobJ = stringH.length <= 6253780;
      do {
         stringH += `${bannera.length}`;
         if (sigmobJ) {
            break;
         }
      } while (sigmobJ && (!redgoalm.includes(`${stringH.length}`)));
      if (parseInt(`${volumeV}`) < bannera.length) {
         bannera.push(2);
      }
          let switch_x9 = 1.0;
          let textinputS = 3;
         redgoalm += `${(stringH == String.fromCharCode(53,0) ? stringH.length : textinputS)}`;
         switch_x9 += parseFloat(`${parseInt(`${switch_x9}`)}`);
         textinputS += parseInt(`${switch_x9}`) << (Math.min(4, Math.abs(parseInt(`${switch_x9}`))));
      while (3 <= bannera.length) {
         stringH = `${parseInt(`${volumeV}`)}`;
         break;
      }
      let sharedw = redgoalm.length >= 5912041;
      do {
         redgoalm = `${(String.fromCharCode(53,0) == targetW ? targetW.length : bannera.length)}`;
         if (sharedw) {
            break;
         }
      } while ((1.33 < (4.96 - volumeV) && (4.96 - volumeV) < 3.82) && sharedw);
      for (let f = 0; f < 3; f++) {
         bannera.push(stringH.length % (Math.max(targetW.length, 10)));
      }
         volumeV /= Math.max(2, (targetW == String.fromCharCode(78,0) ? targetW.length : bannera.length));
         bannera = [3 >> (Math.min(3, bannera.length))];
       let package_axS = 0.0;
       let qaag0 = 2.0;
          let flipperm = 0.0;
          let historyf = 1;
         redgoalm = `${1 - stringH.length}`;
         flipperm *= parseFloat(`${historyf}`);
         historyf &= historyf / 1;
      while ((4 | bannera.length) >= 4) {
          let feedbackl: Map<any, any> = new Map([[String.fromCharCode(122,95,55,57,95,102,117,122,122,0),781], [String.fromCharCode(108,97,115,114,95,102,95,57,52,0),568]]);
          let collection8 = 3;
          let teamD = 2.0;
         redgoalm += "3";
         feedbackl = new Map([[`${feedbackl.size}`, feedbackl.size ^ 2]]);
         collection8 += feedbackl.size + collection8;
         teamD /= Math.max(parseFloat(`${parseInt(`${teamD}`) + 3}`), 4);
         break;
      }
      let liveG = targetW.length <= 9728925;
      do {
          let dropdownI = String.fromCharCode(99,117,100,97,115,99,97,108,101,95,105,95,53,51,0);
          let theme_ = 0;
          let tumbnailv = 1.0;
         targetW = `${(String.fromCharCode(49,0) == stringH ? stringH.length : parseInt(`${volumeV}`))}`;
         dropdownI = `${parseInt(`${tumbnailv}`) | 3}`;
         theme_ *= parseInt(`${tumbnailv}`);
         if (liveG) {
            break;
         }
      } while (((parseInt(`${volumeV}`) / (Math.max(10, targetW.length))) > 3 && 4 > (targetW.length & 3)) && liveG);
       let libjsiP = 2.0;
       let eact7 = 2.0;
      eighteenp += `${holder0.length}`;
   }
       let rncoreL = false;
       let pushH = false;
       let lnewinterstitialv = String.fromCharCode(102,95,53,55,95,119,97,105,116,101,114,0);
          let condensedh = String.fromCharCode(112,105,120,101,108,115,120,95,122,95,57,57,0);
         pushH = rncoreL;
         condensedh += "3";
      if (!pushH) {
         pushH = lnewinterstitialv.length >= 16;
      }
          let layoutl = String.fromCharCode(115,116,114,95,118,95,49,52,0);
          let photow = 5.0;
          let rewardvideoG = 0;
         rncoreL = !rncoreL;
         layoutl += `${rewardvideoG}`;
         photow *= 3 + rewardvideoG;
      if (lnewinterstitialv.length == 5) {
         lnewinterstitialv = "2";
      }
          let directA: Map<any, any> = new Map([[String.fromCharCode(98,101,101,110,95,51,95,53,57,0),684], [String.fromCharCode(101,95,54,49,95,114,101,115,105,122,105,110,103,0),907], [String.fromCharCode(108,95,53,48,95,102,109,97,100,100,0),375]]);
          let tickM = 1;
         lnewinterstitialv = "1";
         directA.set(`${tickM}`, directA.size << (Math.min(3, Math.abs(tickM))));
      let filed6 = pushH ? !pushH : pushH;
      do {
         pushH = lnewinterstitialv.length == 35 || rncoreL;
         if (filed6) {
            break;
         }
      } while ((rncoreL) && filed6);
      let searchbarR = String.fromCharCode(98,104,54,110,50,117,105,101,95,110,0) == lnewinterstitialv;
      do {
          let proxyH = 0;
          let register_1fQ = 1.0;
          let sortT: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,115,114,112,109,95,55,95,51,48,0),585], [String.fromCharCode(99,111,109,112,111,115,105,116,105,111,110,95,53,95,55,52,0),26], [String.fromCharCode(115,95,51,52,95,103,97,117,115,115,105,97,110,105,105,114,100,0),993]]);
          let modules0 = 3.0;
          let alerta = 1.0;
         lnewinterstitialv += "3";
         proxyH *= sortT.size ^ 2;
         register_1fQ *= parseFloat(`${parseInt(`${modules0}`) * parseInt(`${alerta}`)}`);
         sortT.set(`${register_1fQ}`, 2 ^ proxyH);
         modules0 -= parseFloat(`${sortT.size % (Math.max(10, parseInt(`${register_1fQ}`)))}`);
         alerta += proxyH - 3;
         if (searchbarR) {
            break;
         }
      } while ((pushH && 4 <= lnewinterstitialv.length) && searchbarR);
          let condenseds = 2.0;
          let mappingw: Map<any, any> = new Map([[String.fromCharCode(101,118,114,112,99,95,109,95,56,52,0),131], [String.fromCharCode(104,95,55,48,95,103,117,105,100,101,0),548], [String.fromCharCode(101,95,51,48,95,115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0),702]]);
         lnewinterstitialv += "1";
         condenseds -= parseFloat(`${parseInt(`${condenseds}`)}`);
         mappingw.set(`${condenseds}`, 3);
         pushH = !rncoreL;
      layoutF = [incidentq.size >> (Math.min(Math.abs(3), 1))];
      views3 += `${layoutF.length}`;
      setIsSwipeRefreshing(true);
    } else {

   for (let e = 0; e < 1; e++) {
       let redirectV = 1;
       let libyogaF = String.fromCharCode(98,95,48,95,98,114,107,116,105,109,101,103,109,0);
       let whistleorangeT: Map<any, any> = new Map([[String.fromCharCode(106,95,57,51,95,118,105,115,105,98,105,116,121,0),81], [String.fromCharCode(113,95,52,52,95,115,101,109,105,0),30]]);
      for (let h = 0; h < 1; h++) {
          let volumeU = String.fromCharCode(118,95,52,53,95,97,117,100,105,111,100,115,112,0);
          let umengg = String.fromCharCode(115,105,103,109,97,95,99,95,50,48,0);
          let libswresamplet = true;
          let chinaX = 3.0;
          let videoC = 1.0;
         whistleorangeT.set(umengg, umengg.length / 3);
         volumeU = "3";
         libswresamplet = videoC > 22.18;
         chinaX += parseInt(`${chinaX}`) / 3;
         videoC -= ((libswresamplet ? 4 : 4) * parseInt(`${videoC}`));
      }
         libyogaF = `${libyogaF.length & whistleorangeT.size}`;
       let statsO = String.fromCharCode(115,112,101,99,116,114,97,108,95,108,95,56,51,0);
       let tempW = String.fromCharCode(103,95,55,48,95,110,116,115,99,0);
      while ((whistleorangeT.size % 5) == 2 && (whistleorangeT.size % 5) == 5) {
          let aboutf: Array<any> = [723, 258, 682];
          let modal2 = 4.0;
         statsO += `${whistleorangeT.size}`;
         aboutf = [1 - parseInt(`${modal2}`)];
         modal2 += 1;
         break;
      }
         statsO = `${2 + whistleorangeT.size}`;
         whistleorangeT = new Map([[`${whistleorangeT.size}`, whistleorangeT.size]]);
      for (let b = 0; b < 3; b++) {
         whistleorangeT.set(libyogaF, libyogaF.length);
      }
      while (redirectV == 2) {
         redirectV %= Math.max(tempW.length ^ statsO.length, 2);
         break;
      }
         statsO = `${redirectV}`;
      projectY = [(String.fromCharCode(57,0) == eighteenp ? layoutF.length : eighteenp.length)];
   }
      holder0 += `${2 * projectY.length}`;
      arrowrightO.push(views3.length);
      setIsRefreshing(true);
    }
    

   while (1 < (incidentq.size ^ eighteenp.length) && 1 < (1 ^ incidentq.size)) {
      eighteenp = `${holder0.length}`;
      break;
   }
      incidentq.set(views3, views3.length);
   if (libmapbufferjniG.length <= views3.length) {
      libmapbufferjniG += `${projectY.length / 3}`;
   }
    

   for (let a = 0; a < 3; a++) {
       let umengD = false;
       let profileframeE = 2.0;
      if (!umengD || (5.41 + profileframeE) < 2.33) {
         profileframeE -= parseFloat(`${1 - parseInt(`${profileframeE}`)}`);
      }
      if ((4.73 - profileframeE) < 4.27) {
         umengD = profileframeE == 91.83;
      }
      if (!umengD || 4.12 >= (1.81 - profileframeE)) {
          let progress9 = String.fromCharCode(99,95,53,55,95,100,105,97,103,114,97,109,0);
         profileframeE *= (parseFloat(`${String.fromCharCode(71,0) == progress9 ? parseInt(`${profileframeE}`) : progress9.length}`));
      }
          let reducerE = String.fromCharCode(121,95,52,95,104,101,97,100,108,105,110,101,0);
          let basketballB: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,103,114,97,118,105,116,121,0),390], [String.fromCharCode(100,95,51,48,95,102,101,116,99,104,105,110,103,0),776]]);
         profileframeE /= Math.max(3, parseFloat(`${2 * reducerE.length}`));
         reducerE += `${basketballB.size}`;
         basketballB = new Map([[`${basketballB.size}`, 3]]);
      for (let m = 0; m < 3; m++) {
         umengD = umengD || profileframeE > 72.37;
      }
         profileframeE += parseFloat(`${parseInt(`${profileframeE}`) << (Math.min(4, Math.abs(3)))}`);
      views3 += "3";
   }
   while (layoutF.length <= holder0.length) {
       let iconclosewhitebgH = String.fromCharCode(100,95,50,51,95,109,97,121,98,101,0);
       let malaysiaD: Map<any, any> = new Map([[String.fromCharCode(101,95,53,52,95,103,101,116,115,111,99,107,111,112,116,0),352], [String.fromCharCode(116,114,97,99,107,95,112,95,52,49,0),968], [String.fromCharCode(97,117,116,111,115,99,114,111,108,108,95,108,95,53,0),454]]);
       let inviteq = String.fromCharCode(117,95,55,53,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0);
         iconclosewhitebgH = "1";
         inviteq += `${iconclosewhitebgH.length << (Math.min(Math.abs(2), 2))}`;
      if ((iconclosewhitebgH.length - 3) < 1) {
          let sharedJ = 5;
          let modulesC = String.fromCharCode(102,101,109,97,108,101,95,97,95,57,56,0);
          let layoutQ = true;
          let launchq = String.fromCharCode(103,95,52,52,95,97,99,99,117,109,0);
          let toponv: Array<any> = [704, 997, 386];
         iconclosewhitebgH += `${1 & toponv.length}`;
         sharedJ &= 2;
         modulesC += `${sharedJ}`;
         layoutQ = (launchq.length * modulesC.length) == 51;
         launchq = "1";
         toponv = [sharedJ - 3];
      }
         malaysiaD.set(inviteq, inviteq.length);
      let merger6 = iconclosewhitebgH.length <= 7055863;
      do {
         iconclosewhitebgH = "1";
         if (merger6) {
            break;
         }
      } while ((1 == (malaysiaD.size * 1)) && merger6);
         malaysiaD = new Map([[`${malaysiaD.size}`, malaysiaD.size % 2]]);
      for (let j = 0; j < 1; j++) {
         malaysiaD.set(iconclosewhitebgH, inviteq.length << (Math.min(Math.abs(3), 4)));
      }
         inviteq = `${iconclosewhitebgH.length + malaysiaD.size}`;
          let logoutB: Map<any, any> = new Map([[String.fromCharCode(110,95,52,51,95,99,108,97,115,115,101,115,0),217], [String.fromCharCode(100,105,115,99,111,110,110,101,99,116,95,115,95,54,54,0),92]]);
          let predictionwin5 = String.fromCharCode(109,95,50,56,95,99,117,114,114,0);
         iconclosewhitebgH += `${logoutB.size >> (Math.min(Math.abs(2), 4))}`;
         logoutB = new Map([[predictionwin5, predictionwin5.length % 3]]);
      layoutF.push(incidentq.size);
      break;
   }
       let bridgeU = 5.0;
       let fill5 = 2.0;
       let yinga = String.fromCharCode(113,116,114,108,101,95,104,95,52,53,0);
       let mapbufferG = String.fromCharCode(115,117,98,118,105,101,119,95,107,95,53,51,0);
      for (let l = 0; l < 1; l++) {
         fill5 -= parseFloat(`${parseInt(`${bridgeU}`)}`);
      }
      layoutF = [3 - projectY.length];

    

   if (libmapbufferjniG == views3) {
      views3 += `${libmapbufferjniG.length + eighteenp.length}`;
   }
   for (let u = 0; u < 3; u++) {
       let libflipper9 = String.fromCharCode(117,95,52,95,112,114,111,112,111,115,101,114,0);
         libflipper9 += `${(String.fromCharCode(76,0) == libflipper9 ? libflipper9.length : libflipper9.length)}`;
       let rewardx = 1.0;
       let core1 = 3.0;
       let roomz: Map<any, any> = new Map([[String.fromCharCode(110,95,52,48,95,109,97,116,114,105,120,0),225], [String.fromCharCode(117,95,49,49,95,108,105,109,105,116,97,116,105,111,110,0),667], [String.fromCharCode(109,95,55,50,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0),211]]);
      incidentq = new Map([[`${arrowrightO.length}`, views3.length ^ arrowrightO.length]]);
   }
      views3 = `${layoutF.length >> (Math.min(holder0.length, 5))}`;
    await queryClient.resetQueries(['vodPlaylist']); 

    
  }, []);

  
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [bottomTabHeight, setBottomTabHeight] = useState(60);

  return (
    <>
      <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
        <MainHeader
          headerStyle={{
            marginBottom: spacing.m,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
          logo={
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}>
              播单
            </Text>
          }
          navigator={navigation}
        />
        {isRefreshing && !isOffline && (
          <View
            style={{
              ...styles.loading,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <FastImage
                style={{ height: 80, width: 80 }}
                source={require('@static/images/runtimeschedulerPromotion.gif')}
                resizeMode={"contain"}
              />
            }
          </View>
        )}
        {!isOffline && (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages.flat()}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              removeClippedSubviews={true}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/runtimeschedulerPromotion.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" 
                />
              }
            />
          </>
        )}
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
};

export default memo(Playlist);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
