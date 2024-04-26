

class RightTemplateprocessorUnreadUn {
    static connectionWhatsappSentryPressu = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useFocusEffect, useNavigation, useTheme } from "@react-navigation/native";
import React, { useCallback, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image";
import { wwControl } from "@type/ww_dycreator_result";
import Logo from '@static/images/predictionarrowIndicator.svg';
import { useAppDispatch } from "@hooks/ww_catagory_neon";
import { playVod } from "@redux/actions/ww_floater";
import { VodCommentBox } from "../vodComment";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface wwIndexDice {
  vod: wwControl;
  width: number;
  imgRatio: number;
  isSlide: boolean;
}

export const YingPingContainer = ({ vod, width, imgRatio, isSlide }: wwIndexDice) => {
  const { colors, textVariants, spacing } = useTheme();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [comments, setComments] = useState<any[]>([]);
  const [localComments, setLocalComments] = useState<any[]>([]);
  const pTagRegex = /(<p>|<\/p>)/g;

  const handleOnPress = () => {
       let libruntimeexecutorG = String.fromCharCode(122,95,48,95,115,105,109,112,108,105,102,105,101,100,0);
    let bootD = 0.0;
    let halffieldimageU: Map<any, any> = new Map([[String.fromCharCode(111,95,56,55,95,110,104,97,110,99,101,0),906], [String.fromCharCode(109,105,120,101,100,95,97,95,49,49,0),820], [String.fromCharCode(121,95,51,56,95,110,111,110,99,101,0),665]]);
    let colors4 = String.fromCharCode(122,95,54,52,95,99,104,105,108,100,114,101,110,0);
    let libzeusp = String.fromCharCode(100,116,100,102,95,119,95,49,56,0);
    let penaltyO = String.fromCharCode(122,95,49,48,95,116,114,97,110,115,102,111,114,109,115,0);
    let googles = 5.0;
    let disconnecteds = 2.0;
    let redirectf = String.fromCharCode(108,95,50,51,95,117,110,115,101,101,110,0);
    let libreactnativejniB: Array<any> = [380, 400, 495];
    let next4 = String.fromCharCode(98,111,108,100,95,51,95,57,56,0);
    let lightj = String.fromCharCode(115,95,57,51,95,109,111,111,102,0);
    let backgroundy = 2;
    let textD = 1.0;
    let description_hF = String.fromCharCode(97,95,57,48,95,116,114,97,110,115,99,116,105,111,110,0);
   while (4 < halffieldimageU.size) {
       let descu = String.fromCharCode(99,95,50,48,95,109,97,115,115,0);
       let vertical8: Array<any> = [513, 488];
       let circlea = String.fromCharCode(121,95,57,52,95,109,111,100,105,102,105,101,114,115,0);
          let arrowup1 = String.fromCharCode(113,95,49,51,95,115,99,104,101,100,117,108,101,100,0);
          let sansR: Array<any> = [String.fromCharCode(115,121,109,98,111,108,115,95,115,95,49,51,0), String.fromCharCode(105,95,49,56,95,116,115,99,99,100,97,116,97,0), String.fromCharCode(110,95,56,52,95,115,108,105,100,101,0)];
          let time_rbl = String.fromCharCode(111,95,55,51,95,97,114,99,104,105,118,101,0);
         vertical8 = [2 << (Math.min(1, vertical8.length))];
         arrowup1 += `${sansR.length}`;
         sansR = [arrowup1.length % 2];
         time_rbl += `${arrowup1.length}`;
      if ((vertical8.length & 5) >= 2 || (descu.length & vertical8.length) >= 5) {
         vertical8.push((descu == String.fromCharCode(74,0) ? vertical8.length : descu.length));
      }
          let umengc = 0.0;
          let twitterH = String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,55,95,52,53,0);
         vertical8.push((circlea == String.fromCharCode(57,0) ? circlea.length : descu.length));
         umengc -= parseInt(`${umengc}`) / 3;
         twitterH = "2";
      let halfC = 8848761 <= vertical8.length;
      do {
         vertical8.push(1 / (Math.max(8, descu.length)));
         if (halfC) {
            break;
         }
      } while (((circlea.length - 1) <= 4) && halfC);
         vertical8 = [vertical8.length * 1];
       let frame_r2 = true;
      if (frame_r2 || 1 >= circlea.length) {
         frame_r2 = (((!frame_r2 ? 65 : circlea.length) ^ circlea.length) == 65);
      }
         frame_r2 = circlea == descu;
      if (circlea.includes(`${frame_r2}`)) {
         frame_r2 = descu.length <= 98 || vertical8.length <= 98;
      }
      libruntimeexecutorG = `${3 >> (Math.min(Math.abs(parseInt(`${bootD}`)), 3))}`;
      break;
   }
   while ((libreactnativejniB.length + parseInt(`${googles}`)) <= 1) {
       let downloadedo = 4.0;
      if ((1.74 - downloadedo) >= 4.17 && 2.40 >= (1.74 - downloadedo)) {
         downloadedo += 1;
      }
      let androidA = downloadedo <= 5483450.0;
      do {
          let largebrightnessz: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,101,95,117,95,50,57,0),921], [String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,117,95,54,56,0),41]]);
          let anytimex = 0.0;
          let defaultpredictionprofiley = String.fromCharCode(116,95,53,56,95,99,111,110,102,108,105,99,116,0);
          let xvodT = 2.0;
          let imagesf = 1.0;
         downloadedo += largebrightnessz.size;
         largebrightnessz = new Map([[defaultpredictionprofiley, defaultpredictionprofiley.length]]);
         anytimex *= parseFloat(`${2 ^ defaultpredictionprofiley.length}`);
         xvodT /= Math.max(defaultpredictionprofiley.length, 5);
         imagesf += parseInt(`${anytimex}`);
         if (androidA) {
            break;
         }
      } while ((2.99 <= (4 * downloadedo)) && androidA);
         downloadedo *= parseInt(`${downloadedo}`) & parseInt(`${downloadedo}`);
      googles *= (String.fromCharCode(104,0) == penaltyO ? penaltyO.length : parseInt(`${googles}`));
      break;
   }
      libzeusp += `${3 ^ halffieldimageU.size}`;
       let previewA = 3.0;
         previewA *= parseInt(`${previewA}`);
          let libfabricjniR: Array<any> = [248, 140, 314];
          let fastforwardJ: Array<any> = [239, 462, 713];
          let gifgoalbg5: Map<any, any> = new Map([[String.fromCharCode(113,95,57,53,95,97,115,115,111,99,105,97,116,101,0),String.fromCharCode(122,95,51,50,95,104,101,120,99,104,97,114,105,110,116,0)], [String.fromCharCode(121,95,56,52,95,115,97,109,112,108,101,114,97,116,101,115,0),String.fromCharCode(110,95,51,0)]]);
         previewA -= 2;
         libfabricjniR = [gifgoalbg5.size * fastforwardJ.length];
         fastforwardJ = [libfabricjniR.length];
         gifgoalbg5.set(`${libfabricjniR.length}`, gifgoalbg5.size + 1);
       let network8 = String.fromCharCode(108,95,52,57,95,101,110,106,105,110,0);
       let turnQ = String.fromCharCode(112,95,50,55,95,112,111,105,110,116,0);
      libruntimeexecutorG = `${libreactnativejniB.length}`;
       let pangle1 = String.fromCharCode(106,95,56,52,95,99,111,110,116,114,105,98,117,116,105,110,103,0);
       let filterc = String.fromCharCode(119,95,53,49,95,116,105,99,107,101,114,0);
       let formz: Map<any, any> = new Map([[String.fromCharCode(111,103,103,112,97,99,107,95,107,95,49,51,0),true ], [String.fromCharCode(116,114,105,110,103,95,101,95,53,54,0),true ], [String.fromCharCode(119,95,52,56,0),false ]]);
      let green8 = filterc == String.fromCharCode(122,114,122,0);
      do {
         filterc += `${3 | formz.size}`;
         if (green8) {
            break;
         }
      } while (green8 && (5 < (formz.size << (Math.min(filterc.length, 5)))));
         formz = new Map([[filterc, pangle1.length]]);
       let bgvipxvodx = String.fromCharCode(116,105,99,107,101,114,95,53,95,49,56,0);
       let downz = String.fromCharCode(117,95,57,53,95,103,101,111,0);
         filterc += `${(pangle1 == String.fromCharCode(69,0) ? pangle1.length : formz.size)}`;
      while (2 == (bgvipxvodx.length % (Math.max(1, 8))) && (bgvipxvodx.length % 1) == 2) {
         bgvipxvodx = `${bgvipxvodx.length << (Math.min(1, Math.abs(formz.size)))}`;
         break;
      }
         formz.set(pangle1, pangle1.length);
         bgvipxvodx += `${filterc.length >> (Math.min(bgvipxvodx.length, 1))}`;
          let componentregistryp: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,119,111,114,100,95,111,95,52,48,0),414], [String.fromCharCode(115,98,108,111,103,95,50,95,56,52,0),583], [String.fromCharCode(119,95,49,49,95,100,101,99,98,110,0),578]]);
          let tempnodatagifn = 5.0;
         bgvipxvodx = `${filterc.length}`;
         componentregistryp.set(`${tempnodatagifn}`, parseInt(`${tempnodatagifn}`));
         pangle1 += `${pangle1.length << (Math.min(1, Math.abs(formz.size)))}`;
      libreactnativejniB.push(formz.size);
       let halffieldimageF = String.fromCharCode(102,95,54,55,95,111,99,97,108,0);
       let componentsG = String.fromCharCode(110,95,57,54,95,101,113,117,97,108,105,122,101,114,0);
       let frame_fU = 0;
      while (halffieldimageF != componentsG) {
         componentsG = `${componentsG.length}`;
         break;
      }
      if (componentsG.startsWith(`${halffieldimageF.length}`)) {
         halffieldimageF += `${halffieldimageF.length / 1}`;
      }
         componentsG += `${componentsG.length << (Math.min(Math.abs(1), 5))}`;
      while (2 <= (frame_fU >> (Math.min(Math.abs(2), 1)))) {
         frame_fU ^= 2 + frame_fU;
         break;
      }
      for (let f = 0; f < 1; f++) {
         halffieldimageF = `${componentsG.length | 2}`;
      }
      for (let e = 0; e < 3; e++) {
         halffieldimageF += `${(halffieldimageF == String.fromCharCode(113,0) ? halffieldimageF.length : componentsG.length)}`;
      }
      if (halffieldimageF != String.fromCharCode(90,0)) {
          let turnm = 0.0;
          let singleB: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,95,102,95,57,57,0),false ], [String.fromCharCode(97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,95,121,95,56,52,0),true ], [String.fromCharCode(102,95,55,49,95,115,117,98,115,116,114,101,97,109,0),false ]]);
          let photo5 = String.fromCharCode(111,95,56,52,95,115,105,103,0);
          let pressure6: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0),467], [String.fromCharCode(106,95,57,51,95,112,104,121,115,105,99,97,108,0),25]]);
         componentsG = `${parseInt(`${turnm}`) % (Math.max(1, 2))}`;
         turnm += 3 / (Math.max(8, pressure6.size));
         singleB.set(`${photo5}`, (String.fromCharCode(74,0) == photo5 ? photo5.length : singleB.size));
         pressure6 = new Map([[`${singleB.size}`, 1]]);
      }
          let gifgoalbgJ = String.fromCharCode(115,116,114,102,117,110,99,95,115,95,51,48,0);
          let package_zkD: Array<any> = [164, 15];
          let pathU: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,116,114,117,110,99,95,112,95,57,52,0),873], [String.fromCharCode(99,95,55,49,95,114,101,116,114,97,110,109,105,115,115,105,111,110,0),680], [String.fromCharCode(98,95,57,57,95,116,116,97,101,110,99,100,115,112,0),518]]);
         componentsG = `${componentsG.length}`;
         gifgoalbgJ = `${pathU.size}`;
         package_zkD = [1];
         pathU = new Map([[`${pathU.size}`, 3 - gifgoalbgJ.length]]);
      if (!halffieldimageF.startsWith(componentsG)) {
         componentsG = `${componentsG.length}`;
      }
      libzeusp = `${2 >> (Math.min(5, redirectf.length))}`;
   while (1 == (backgroundy + next4.length) || (1 + next4.length) == 1) {
       let bottome = String.fromCharCode(117,95,52,57,95,99,111,109,112,108,101,120,0);
       let penaltyq = String.fromCharCode(116,95,49,52,95,116,101,114,109,105,110,97,108,0);
       let imagesm = 3.0;
       let accepted0 = String.fromCharCode(110,95,51,56,95,99,101,110,116,101,114,0);
       let libturbomodulejsijnir = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,51,95,57,56,0);
      for (let i = 0; i < 1; i++) {
         accepted0 += `${penaltyq.length * 1}`;
      }
       let libcrashsdk1: Array<any> = [869, 54];
       let hook1: Array<any> = [String.fromCharCode(108,111,99,97,108,101,115,95,97,95,52,50,0), String.fromCharCode(100,97,116,101,115,95,55,95,52,51,0)];
      if (4 == libturbomodulejsijnir.length) {
          let iconsaveimage4 = String.fromCharCode(105,95,55,55,95,110,111,99,111,108,115,101,116,0);
          let megaphone6 = String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,121,95,57,51,0);
          let final_gzq = 0;
          let icond: Map<any, any> = new Map([[String.fromCharCode(100,95,54,48,95,114,101,119,97,114,100,0),979], [String.fromCharCode(114,101,113,117,97,110,116,95,97,95,51,54,0),153]]);
          let starh = String.fromCharCode(119,95,57,57,95,97,109,112,108,105,102,121,0);
         accepted0 += `${accepted0.length << (Math.min(Math.abs(2), 3))}`;
         iconsaveimage4 += `${(starh == String.fromCharCode(107,0) ? starh.length : icond.size)}`;
         megaphone6 += `${starh.length * icond.size}`;
         final_gzq |= 2;
      }
       let thailandi = false;
       let hookT = true;
         accepted0 = `${1 * hook1.length}`;
      if ((libcrashsdk1.length / (Math.max(6, accepted0.length))) == 1 || 2 == (libcrashsdk1.length / 1)) {
         accepted0 += `${penaltyq.length}`;
      }
         libcrashsdk1 = [hook1.length];
      if (!bottome.startsWith(accepted0)) {
         accepted0 = `${libturbomodulejsijnir.length}`;
      }
         imagesm += (1 & (thailandi ? 5 : 1));
      let libjsinspector_ = 5170417 <= penaltyq.length;
      do {
         penaltyq += `${libturbomodulejsijnir.length << (Math.min(Math.abs(2), 4))}`;
         if (libjsinspector_) {
            break;
         }
      } while (((penaltyq.length % (Math.max(3, 4))) == 4 && (hook1.length % (Math.max(penaltyq.length, 9))) == 3) && libjsinspector_);
      let basel = hookT ? !hookT : hookT;
      do {
          let eyeopenC: Array<any> = [String.fromCharCode(97,99,104,101,95,99,95,52,53,0), String.fromCharCode(111,95,50,49,95,114,97,100,105,97,110,115,0), String.fromCharCode(100,111,103,95,99,95,53,50,0)];
          let iconmore2 = String.fromCharCode(101,120,112,114,108,105,115,116,95,113,95,49,51,0);
          let typing1: Array<any> = [116, 295];
          let modeZ = 3.0;
         hookT = modeZ <= parseFloat(`${iconmore2.length}`);
         eyeopenC = [typing1.length];
         iconmore2 += `${eyeopenC.length}`;
         typing1 = [2 ^ typing1.length];
         modeZ += parseFloat(`${1}`);
         if (basel) {
            break;
         }
      } while ((thailandi && !hookT) && basel);
      while (!accepted0.includes(`${libcrashsdk1.length}`)) {
          let privilegev = 1;
         accepted0 += "1";
         privilegev |= privilegev % (Math.max(3, 7));
         break;
      }
      while ((libcrashsdk1.length << (Math.min(penaltyq.length, 4))) > 2 || (penaltyq.length << (Math.min(5, libcrashsdk1.length))) > 2) {
          let ccopy_r98 = 1;
          let backgroundD = true;
         penaltyq += `${((backgroundD ? 4 : 4) % (Math.max(penaltyq.length, 5)))}`;
         ccopy_r98 -= 2 + ccopy_r98;
         backgroundD = 52 < (ccopy_r98 >> (Math.min(3, Math.abs(ccopy_r98))));
         break;
      }
      while (bottome.length >= 1) {
         bottome += "3";
         break;
      }
          let mathX = 5.0;
         libturbomodulejsijnir = `${parseInt(`${imagesm}`) | 2}`;
         mathX *= parseInt(`${mathX}`) - 1;
      next4 = "1";
      break;
   }
   for (let y = 0; y < 2; y++) {
       let fileM = String.fromCharCode(98,101,120,116,95,104,95,51,51,0);
      for (let f = 0; f < 2; f++) {
         fileM += "1";
      }
       let whitetickr: Map<any, any> = new Map([[String.fromCharCode(115,101,99,117,114,105,116,121,95,97,95,51,52,0),String.fromCharCode(101,116,119,111,114,107,95,55,95,51,53,0)], [String.fromCharCode(97,117,116,111,100,101,116,101,99,116,105,111,110,95,48,95,54,57,0),String.fromCharCode(100,95,56,95,110,111,99,104,101,99,107,0)], [String.fromCharCode(115,104,97,108,108,95,101,95,54,57,0),String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,114,95,55,56,0)]]);
         fileM = `${fileM.length / 3}`;
      googles -= 2 & fileM.length;
   }
       let filtera = 2;
       let libreactnativejnio = 2;
         libreactnativejnio /= Math.max(4, filtera >> (Math.min(Math.abs(1), 4)));
       let stylesF: Array<any> = [289, 554];
         filtera %= Math.max(filtera - libreactnativejnio, 5);
       let catagoryn: Array<any> = [String.fromCharCode(115,119,97,112,112,101,114,95,53,95,49,48,48,0), String.fromCharCode(118,100,97,115,104,101,114,95,57,95,49,49,0)];
       let loadingw: Array<any> = [830, 475, 370];
      for (let u = 0; u < 2; u++) {
         libreactnativejnio >>= Math.min(1, Math.abs(libreactnativejnio));
      }
      let roundm = loadingw.length >= 6224685;
      do {
         loadingw.push(loadingw.length);
         if (roundm) {
            break;
         }
      } while (((filtera / 4) <= 5) && roundm);
      penaltyO = "1";

    dispatch(playVod(vod));

   let linev = 5484837 >= libreactnativejniB.length;
   do {
       let entryA = String.fromCharCode(114,101,115,121,110,99,95,48,95,56,50,0);
       let leaguek: Map<any, any> = new Map([[String.fromCharCode(107,95,57,48,95,112,114,101,108,105,109,105,110,97,114,121,0),761], [String.fromCharCode(114,95,57,51,95,116,114,117,101,109,111,116,105,111,110,0),88], [String.fromCharCode(97,108,116,95,50,95,57,53,0),199]]);
       let fulld = String.fromCharCode(116,95,53,48,95,115,117,98,115,101,113,117,101,110,99,101,0);
       let material2 = String.fromCharCode(115,99,114,101,101,110,115,104,111,116,95,121,95,51,51,0);
       let configR: Map<any, any> = new Map([[String.fromCharCode(112,95,56,54,95,117,110,109,117,116,101,0),true ], [String.fromCharCode(108,105,102,116,95,120,95,55,55,0),false ], [String.fromCharCode(109,101,115,97,103,101,95,102,95,52,55,0),true ]]);
       let eighteenf: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,97,103,101,115,95,53,95,52,54,0),680], [String.fromCharCode(121,95,54,52,95,115,101,103,102,101,97,116,117,114,101,115,0),675], [String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,52,95,50,53,0),733]]);
          let forwardt = 0.0;
          let greytickd = 4.0;
          let datat: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,111,112,95,107,95,50,55,0),835], [String.fromCharCode(101,95,51,55,95,115,108,105,99,101,116,121,112,101,0),799], [String.fromCharCode(105,110,115,101,114,116,101,114,95,104,95,49,51,0),377]]);
         fulld += "2";
         forwardt /= Math.max(1, parseFloat(`${parseInt(`${greytickd}`)}`));
         greytickd /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${forwardt}`)), 1))}`), 4);
         datat.set(`${greytickd}`, parseInt(`${greytickd}`));
       let notificationfillempty0 = String.fromCharCode(114,101,115,101,110,100,95,105,95,52,51,0);
          let scheduleh = 0;
          let lighty = false;
          let dependenciesR = 0.0;
         material2 = `${entryA.length}`;
         scheduleh /= Math.max(parseInt(`${dependenciesR}`) & scheduleh, 5);
         lighty = 51.79 == dependenciesR || 1 == scheduleh;
      if (5 == (2 | configR.size) && 2 == (material2.length | configR.size)) {
         material2 = `${fulld.length}`;
      }
         notificationfillempty0 = `${(String.fromCharCode(76,0) == entryA ? material2.length : entryA.length)}`;
      if (leaguek.size > material2.length) {
         leaguek.set(fulld, fulld.length);
      }
         leaguek.set(`${leaguek.size}`, 1);
         leaguek = new Map([[`${configR.size}`, 1 + material2.length]]);
         leaguek = new Map([[`${leaguek.size}`, entryA.length]]);
      if (2 < (entryA.length + leaguek.size) || 5 < (2 + leaguek.size)) {
          let tooltipsf = String.fromCharCode(116,95,54,57,95,109,97,103,105,99,121,117,118,0);
          let tempO = 2;
          let backi = 3.0;
         leaguek = new Map([[`${leaguek.size}`, leaguek.size % (Math.max(2, 3))]]);
         tooltipsf = `${tooltipsf.length * 2}`;
         tempO %= Math.max(1, tempO / (Math.max(parseInt(`${backi}`), 8)));
         backi -= 3 << (Math.min(5, tooltipsf.length));
      }
         leaguek = new Map([[fulld, 2 & fulld.length]]);
      let screeng = fulld == String.fromCharCode(54,114,122,52,53,101,50,51,0);
      do {
         fulld = "1";
         if (screeng) {
            break;
         }
      } while (screeng && (2 <= (1 ^ leaguek.size) || 4 <= (1 ^ fulld.length)));
      if (notificationfillempty0 == material2) {
         material2 += "3";
      }
         eighteenf = new Map([[`${leaguek.size}`, 1]]);
      libreactnativejniB = [3 - halffieldimageU.size];
      if (linev) {
         break;
      }
   } while ((2 >= (libreactnativejniB.length % (Math.max(penaltyO.length, 3))) || 2 >= (penaltyO.length % 2)) && linev);
      colors4 += "2";
       let turndownH: Array<any> = [String.fromCharCode(98,95,50,48,95,97,98,103,114,0), String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,55,95,56,55,0), String.fromCharCode(109,95,55,50,95,112,117,108,108,100,111,119,110,0)];
      while ((turndownH.length * 5) == 4) {
         turndownH = [turndownH.length * 1];
         break;
      }
         turndownH = [turndownH.length];
      if ((1 & turndownH.length) <= 4 || 2 <= (turndownH.length & 1)) {
         turndownH = [turndownH.length / 1];
      }
      halffieldimageU = new Map([[`${textD}`, 1]]);
   for (let b = 0; b < 1; b++) {
      libreactnativejniB.push(2 << (Math.min(4, penaltyO.length)));
   }
   if (1.75 < (textD - colors4.length) || 1 < (colors4.length - parseInt(`${textD}`))) {
      colors4 = `${parseInt(`${bootD}`) >> (Math.min(Math.abs(3), 3))}`;
   }
       let modeB: Map<any, any> = new Map([[String.fromCharCode(98,95,52,48,95,100,97,115,104,98,111,97,114,100,0),String.fromCharCode(97,114,101,118,101,114,115,101,95,99,95,49,48,0)], [String.fromCharCode(119,104,105,108,101,95,114,95,55,55,0),String.fromCharCode(105,110,115,101,114,116,95,99,95,50,53,0)], [String.fromCharCode(99,95,57,57,95,108,97,110,101,0),String.fromCharCode(107,95,52,57,95,100,113,117,111,116,101,0)]]);
       let dangere = String.fromCharCode(101,95,54,53,95,115,99,97,108,101,114,0);
         dangere += `${(dangere == String.fromCharCode(113,0) ? dangere.length : modeB.size)}`;
          let hiadc: Map<any, any> = new Map([[String.fromCharCode(110,95,50,55,95,119,97,118,101,0),true ], [String.fromCharCode(98,101,110,105,103,110,95,56,95,52,0),false ], [String.fromCharCode(110,97,110,111,115,118,103,95,102,95,51,50,0),false ]]);
          let reactnavigationW = 5.0;
         modeB = new Map([[`${modeB.size}`, 1 % (Math.max(2, dangere.length))]]);
         hiadc = new Map([[`${hiadc.size}`, parseInt(`${reactnavigationW}`) >> (Math.min(Math.abs(hiadc.size), 5))]]);
         reactnavigationW += 1 | hiadc.size;
       let eactb = String.fromCharCode(107,95,55,95,114,101,99,111,110,0);
       let adultD = String.fromCharCode(107,95,57,48,95,117,110,97,108,105,103,110,101,100,0);
       let chinasameT = String.fromCharCode(117,110,98,108,117,114,95,101,95,51,55,0);
       let tailk = String.fromCharCode(100,98,111,111,108,104,117,102,102,95,109,95,55,49,0);
          let package_z7r = String.fromCharCode(111,119,110,101,114,115,104,105,112,95,112,95,54,0);
          let animationsE = 0.0;
          let albumM = String.fromCharCode(115,116,114,105,112,95,107,95,56,54,0);
         modeB.set(`${animationsE}`, dangere.length);
         package_z7r += `${(package_z7r == String.fromCharCode(52,0) ? package_z7r.length : albumM.length)}`;
         animationsE *= albumM.length;
      if (eactb != String.fromCharCode(78,0)) {
         adultD = `${(String.fromCharCode(97,0) == dangere ? modeB.size : dangere.length)}`;
      }
      colors4 += `${(description_hF == String.fromCharCode(97,0) ? redirectf.length : description_hF.length)}`;
      textD *= parseInt(`${bootD}`);
   while (!description_hF.startsWith(`${next4.length}`)) {
       let notificationl = 3.0;
       let f_centers = true;
       let paget = String.fromCharCode(111,95,55,49,95,121,113,117,97,110,116,0);
       let bellY: Array<any> = [685, 112];
       let incident7 = true;
          let matchactivei: Map<any, any> = new Map([[String.fromCharCode(100,95,49,52,95,104,111,116,0),String.fromCharCode(117,115,101,114,110,97,109,101,95,106,95,50,51,0)], [String.fromCharCode(115,112,108,105,116,95,52,95,52,57,0),String.fromCharCode(101,120,105,115,116,101,110,99,101,95,49,95,56,48,0)], [String.fromCharCode(105,110,105,116,105,97,116,111,114,95,112,95,57,50,0),String.fromCharCode(122,95,57,48,95,97,116,116,105,98,117,116,101,0)]]);
          let codegene = 3.0;
          let delegate_6ka = 1.0;
         f_centers = paget.includes(`${codegene}`);
         matchactivei = new Map([[`${matchactivei.size}`, parseInt(`${delegate_6ka}`)]]);
         codegene *= parseFloat(`${1}`);
         delegate_6ka /= Math.max(parseFloat(`${matchactivei.size}`), 4);
         incident7 = bellY.length > 4;
      while (!f_centers) {
         f_centers = !f_centers && paget.length >= 45;
         break;
      }
         paget = `${parseInt(`${notificationl}`) & 3}`;
       let emojiX = 2.0;
       let libturbomodulejsijniN = 0.0;
      for (let z = 0; z < 3; z++) {
         libturbomodulejsijniN += parseFloat(`${1}`);
      }
      while (4 == (parseInt(`${emojiX}`) + paget.length) && (parseFloat(`${paget.length}`) + emojiX) == 4.25) {
         paget += `${1 * parseInt(`${emojiX}`)}`;
         break;
      }
      if (incident7) {
          let exampleimageh = false;
          let nbatrophyr: Map<any, any> = new Map([[String.fromCharCode(115,95,55,52,95,116,114,97,110,0),94], [String.fromCharCode(116,95,57,54,95,109,117,108,116,105,112,108,101,114,115,0),230]]);
          let fastZ = String.fromCharCode(114,101,115,111,108,118,101,114,95,110,95,52,57,0);
          let anythinkR = String.fromCharCode(102,95,49,56,95,114,111,117,110,100,100,115,0);
         incident7 = emojiX >= 19.84 || !f_centers;
         exampleimageh = anythinkR.length >= nbatrophyr.size;
         nbatrophyr.set(`${anythinkR}`, anythinkR.length * 3);
         fastZ += `${fastZ.length}`;
      }
         bellY = [((f_centers ? 2 : 1) % (Math.max(parseInt(`${emojiX}`), 8)))];
          let bootsplashg = 1;
         incident7 = bellY.length <= 16;
         bootsplashg *= bootsplashg;
         f_centers = libturbomodulejsijniN > 41.41;
      for (let y = 0; y < 3; y++) {
         emojiX += parseFloat(`${parseInt(`${emojiX}`) ^ 1}`);
      }
      while ((5 % (Math.max(6, bellY.length))) == 4 && bellY.length == 5) {
         incident7 = !f_centers && 7.48 > notificationl;
         break;
      }
      if (2.95 >= (5.41 * emojiX) && emojiX >= 5.41) {
          let runtimeschedulerM = String.fromCharCode(116,95,50,52,95,100,118,97,117,100,105,111,0);
          let eventn = String.fromCharCode(100,95,54,49,95,118,100,112,97,117,0);
         incident7 = paget.length > 24 || !incident7;
         runtimeschedulerM = `${eventn.length % (Math.max(runtimeschedulerM.length, 10))}`;
         eventn += `${runtimeschedulerM.length}`;
      }
         incident7 = emojiX <= 69.28 && libturbomodulejsijniN <= 69.28;
      description_hF = `${(String.fromCharCode(71,0) == description_hF ? parseInt(`${disconnecteds}`) : description_hF.length)}`;
      break;
   }
      redirectf += `${colors4.length & halffieldimageU.size}`;
    navigation.navigate('播放IOS', {
      vod_id: vod.vod_id,
    });
  }

  const getLocalComments = async () => {
       let regengL = 5.0;
    let show0 = true;
    let update_tbL = 4.0;
    let hookx = String.fromCharCode(107,95,51,52,95,100,115,117,98,101,120,112,0);
    let upload1 = String.fromCharCode(111,95,50,95,121,117,118,112,97,99,107,101,100,0);
    let libloggery: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,114,115,104,97,108,95,122,95,57,50,0),true ], [String.fromCharCode(115,101,101,100,95,118,95,49,51,0),true ]]);
    let privacy9 = 3.0;
    let policyp = false;
    let constantsq: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,111,117,114,115,95,109,95,56,53,0),true ], [String.fromCharCode(109,95,57,50,95,108,111,119,100,101,108,97,121,0),false ], [String.fromCharCode(118,111,116,101,115,95,53,95,57,55,0),true ]]);
    let debugU = String.fromCharCode(117,108,116,114,97,95,109,95,57,0);
    let libjsiL: Map<any, any> = new Map([[String.fromCharCode(102,95,57,50,95,116,109,109,98,114,0),873], [String.fromCharCode(113,95,57,51,95,109,105,109,101,0),109], [String.fromCharCode(115,105,109,112,108,101,95,52,95,55,48,0),909]]);
    let iconplaya: Array<any> = [902, 131, 763];
    let defaultplayerimgo = String.fromCharCode(108,117,116,114,103,98,95,102,95,49,53,0);
   while (policyp) {
       let profileW: Map<any, any> = new Map([[String.fromCharCode(111,95,56,49,95,99,97,99,104,101,115,0),true ], [String.fromCharCode(110,95,53,51,95,114,118,118,108,99,0),false ]]);
       let chinasameV = 0.0;
       let stations5: Array<any> = [930, 4, 76];
       let w_titleJ = 1.0;
       let adultn = 3.0;
          let hiadM = 3;
         profileW = new Map([[`${adultn}`, parseInt(`${adultn}`)]]);
         hiadM <<= Math.min(2, Math.abs(hiadM));
      if (Array.from(profileW.values()).includes(w_titleJ)) {
          let guidee = String.fromCharCode(97,114,111,117,110,100,95,99,95,56,54,0);
          let runtimeT = 1;
          let mintegralw: Array<any> = [251, 254];
         profileW.set(`${runtimeT}`, 1 << (Math.min(Math.abs(runtimeT), 3)));
         guidee = `${mintegralw.length % (Math.max(10, guidee.length))}`;
         mintegralw = [mintegralw.length];
      }
      for (let f = 0; f < 1; f++) {
          let filld = String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,50,95,53,50,0);
          let paginationN = false;
          let defaultfootballbg2 = 5.0;
          let form0: Map<any, any> = new Map([[String.fromCharCode(102,95,55,49,95,110,105,115,116,112,0),false ], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,95,50,95,54,55,0),false ], [String.fromCharCode(113,95,54,54,95,99,97,114,100,104,111,108,100,101,114,0),true ]]);
          let viewsr = String.fromCharCode(110,95,50,50,95,114,101,109,117,120,101,114,0);
         chinasameV /= Math.max(4, parseInt(`${adultn}`));
         filld += `${filld.length >> (Math.min(viewsr.length, 2))}`;
         paginationN = filld.length > viewsr.length;
         defaultfootballbg2 /= Math.max(3 | parseInt(`${defaultfootballbg2}`), 3);
         form0.set(`${paginationN}`, 3);
      }
          let bangC: Array<any> = [9, 576, 369];
          let qaagF = String.fromCharCode(114,97,108,102,95,111,95,57,51,0);
          let hongkong7 = String.fromCharCode(121,95,52,48,95,97,117,110,105,110,105,116,0);
         w_titleJ -= parseFloat(`${parseInt(`${w_titleJ}`) | 1}`);
         bangC = [qaagF.length];
         qaagF = `${(qaagF == String.fromCharCode(56,0) ? bangC.length : qaagF.length)}`;
         hongkong7 = `${bangC.length}`;
         stations5.push(parseInt(`${w_titleJ}`));
         adultn /= Math.max(parseInt(`${chinasameV}`) / 1, 4);
      if (5.91 < (w_titleJ * parseFloat(`${profileW.size}`))) {
         w_titleJ -= parseFloat(`${3}`);
      }
         w_titleJ += parseFloat(`${parseInt(`${w_titleJ}`) | parseInt(`${chinasameV}`)}`);
         chinasameV *= parseInt(`${w_titleJ}`) % 3;
          let mbnativeadvanced4: Map<any, any> = new Map([[String.fromCharCode(97,99,113,117,105,114,101,95,110,95,51,57,0),132], [String.fromCharCode(115,116,97,109,112,95,115,95,52,57,0),952]]);
          let j_lockJ = 3.0;
          let reactnativeratingsA: Array<any> = [String.fromCharCode(101,113,117,97,108,95,112,95,48,0), String.fromCharCode(115,113,108,105,116,101,114,98,117,95,52,95,54,54,0), String.fromCharCode(104,111,115,116,102,108,97,103,115,95,118,95,52,53,0)];
         profileW.set(`${w_titleJ}`, parseInt(`${w_titleJ}`));
         mbnativeadvanced4.set(`${j_lockJ}`, parseInt(`${j_lockJ}`) >> (Math.min(Math.abs(2), 2)));
         reactnativeratingsA.push(mbnativeadvanced4.size / 3);
       let armvan = 0.0;
         chinasameV /= Math.max(5, 2 << (Math.min(Math.abs(parseInt(`${adultn}`)), 1)));
      for (let f = 0; f < 3; f++) {
         stations5.push(parseInt(`${armvan}`));
      }
         w_titleJ -= parseFloat(`${parseInt(`${w_titleJ}`)}`);
         adultn += 3 % (Math.max(2, parseInt(`${w_titleJ}`)));
      policyp = privacy9 <= 89.39 || show0;
      break;
   }
   while (2 > hookx.length) {
      hookx = `${2 & hookx.length}`;
      break;
   }
   let greytickj = show0 ? !show0 : show0;
   do {
       let hongkongr: Map<any, any> = new Map([[String.fromCharCode(98,97,114,101,95,110,95,51,54,0),527], [String.fromCharCode(100,95,55,95,101,115,116,97,98,108,105,115,104,0),704], [String.fromCharCode(111,102,102,108,105,110,101,95,107,95,53,53,0),263]]);
       let mbbidA = 5.0;
       let debugb: Array<any> = [String.fromCharCode(115,107,105,112,95,102,95,56,51,0), String.fromCharCode(101,95,50,51,95,97,117,116,111,0)];
       let manifestn = 3;
       let rulesd: Map<any, any> = new Map([[String.fromCharCode(99,95,56,49,95,116,101,109,112,111,114,97,114,105,108,121,0),99], [String.fromCharCode(104,97,110,100,108,101,95,104,95,52,53,0),176], [String.fromCharCode(102,117,115,101,95,54,95,53,50,0),804]]);
          let libfollyo = String.fromCharCode(113,95,52,57,95,108,105,107,101,0);
          let bggradiento: Array<any> = [703, 825, 673];
         debugb.push(debugb.length);
         libfollyo += "3";
         bggradiento = [(libfollyo == String.fromCharCode(81,0) ? bggradiento.length : libfollyo.length)];
         mbbidA += parseFloat(`${hongkongr.size ^ 2}`);
         hongkongr = new Map([[`${rulesd.size}`, parseInt(`${mbbidA}`) + 2]]);
         manifestn <<= Math.min(Math.abs(3), 3);
      if (Array.from(hongkongr.values()).includes(mbbidA)) {
         hongkongr = new Map([[`${rulesd.size}`, rulesd.size ^ 3]]);
      }
      let roomV = mbbidA >= 6207837.0;
      do {
         mbbidA /= Math.max(parseFloat(`${1}`), 1);
         if (roomV) {
            break;
         }
      } while (roomV && (4 <= (manifestn & 5)));
      if ((parseFloat(`${debugb.length}`) * mbbidA) > 3.99) {
          let mbnativeadvancedZ = String.fromCharCode(104,95,57,53,95,115,105,103,110,101,100,0);
          let promotion_ = String.fromCharCode(113,117,101,114,121,95,113,95,49,51,0);
          let libreactx = true;
          let liveendmodallogos = 5;
          let bellk = 1.0;
         mbbidA += parseFloat(`${debugb.length}`);
         mbnativeadvancedZ = `${parseInt(`${bellk}`)}`;
         promotion_ += `${((libreactx ? 5 : 5) ^ liveendmodallogos)}`;
         libreactx = mbnativeadvancedZ.length <= 21;
         liveendmodallogos *= mbnativeadvancedZ.length;
         bellk /= Math.max(2, 2 ^ promotion_.length);
      }
          let topony: Array<any> = [783, 8, 721];
          let backP = String.fromCharCode(105,115,105,95,116,95,53,49,0);
          let bingU: Array<any> = [String.fromCharCode(104,95,52,57,95,109,111,100,112,108,117,103,0), String.fromCharCode(112,95,55,49,95,99,109,115,103,115,0)];
         hongkongr = new Map([[`${hongkongr.size}`, bingU.length % 1]]);
         topony = [backP.length];
         backP += `${backP.length / (Math.max(8, topony.length))}`;
         bingU.push(3);
          let gpay8: Map<any, any> = new Map([[String.fromCharCode(117,110,112,97,99,107,101,100,95,118,95,50,56,0),63], [String.fromCharCode(99,111,110,110,95,122,95,57,50,0),384], [String.fromCharCode(109,97,110,117,97,108,95,106,95,51,51,0),430]]);
          let schedules: Map<any, any> = new Map([[String.fromCharCode(117,110,115,116,97,107,101,95,122,95,51,54,0),101], [String.fromCharCode(116,95,55,57,95,105,110,115,116,97,108,108,0),321]]);
         manifestn *= manifestn;
         gpay8.set(`${gpay8.size}`, gpay8.size);
         schedules = new Map([[`${schedules.size}`, gpay8.size]]);
      while ((rulesd.size ^ debugb.length) < 3 || 3 < (rulesd.size ^ debugb.length)) {
         rulesd.set(`${manifestn}`, parseInt(`${mbbidA}`));
         break;
      }
      for (let e = 0; e < 3; e++) {
         rulesd = new Map([[`${manifestn}`, 2]]);
      }
         mbbidA += parseFloat(`${parseInt(`${mbbidA}`)}`);
          let componentsV = String.fromCharCode(104,95,52,52,95,99,114,108,115,0);
          let nalyticsD = String.fromCharCode(116,114,97,110,115,112,111,114,116,95,99,95,55,51,0);
          let album4 = String.fromCharCode(115,95,55,51,95,102,105,114,115,116,0);
         rulesd.set(`${mbbidA}`, 3);
         componentsV = `${componentsV.length}`;
         nalyticsD += `${2 & nalyticsD.length}`;
         album4 += `${(String.fromCharCode(70,0) == album4 ? componentsV.length : album4.length)}`;
      while (2 <= (hongkongr.size & 1) && 1 <= (rulesd.size & hongkongr.size)) {
          let mbsplashe = String.fromCharCode(112,114,105,109,105,116,105,118,101,95,111,95,55,53,0);
          let appleP = String.fromCharCode(105,110,118,97,108,105,100,95,110,95,51,54,0);
          let graphics6 = 1.0;
          let bannerg: Array<any> = [String.fromCharCode(114,101,112,108,121,95,105,95,53,49,0), String.fromCharCode(122,95,56,54,95,102,105,120,117,112,0), String.fromCharCode(117,95,52,49,0)];
          let backM = String.fromCharCode(105,115,97,108,110,117,109,95,54,95,53,48,0);
         rulesd.set(appleP, appleP.length);
         mbsplashe = `${2 - mbsplashe.length}`;
         graphics6 *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${graphics6}`)), 3))}`);
         bannerg.push((String.fromCharCode(73,0) == mbsplashe ? mbsplashe.length : bannerg.length));
         backM = `${mbsplashe.length / (Math.max(backM.length, 9))}`;
         break;
      }
          let iconwechat1: Map<any, any> = new Map([[String.fromCharCode(113,95,51,53,95,102,111,114,109,0),String.fromCharCode(115,105,110,101,95,116,95,56,0)], [String.fromCharCode(109,117,108,115,117,98,95,54,95,52,0),String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,119,95,52,54,0)], [String.fromCharCode(108,115,102,108,115,112,100,95,107,95,55,49,0),String.fromCharCode(111,95,57,50,95,97,101,118,97,108,0)]]);
          let pageZ: Map<any, any> = new Map([[String.fromCharCode(99,95,56,48,95,108,117,109,98,101,114,106,97,99,107,0),false ], [String.fromCharCode(98,95,56,95,114,105,110,103,116,111,110,101,0),true ]]);
         hongkongr.set(`${mbbidA}`, parseInt(`${mbbidA}`) % 3);
         iconwechat1.set(`${pageZ.size}`, iconwechat1.size % 3);
         pageZ = new Map([[`${pageZ.size}`, iconwechat1.size * pageZ.size]]);
      show0 = libjsiL.size <= 25 || !policyp;
      if (greytickj) {
         break;
      }
   } while (greytickj && (1.49 == (4.15 - privacy9)));
      privacy9 /= Math.max(3 << (Math.min(2, debugU.length)), 3);

    try {

   while ((regengL * 4.60) >= 3.61) {
      hookx = `${parseInt(`${update_tbL}`) << (Math.min(5, Math.abs(2)))}`;
      break;
   }
       let subtextO: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,112,114,105,97,116,101,95,57,95,54,0),360], [String.fromCharCode(106,95,56,48,95,117,110,115,101,108,101,99,116,0),579]]);
       let libreactnativeblobT: Array<any> = [73, 303];
       let mbjscommonc = String.fromCharCode(97,95,52,57,95,111,112,116,105,111,110,97,108,0);
         subtextO.set(`${libreactnativeblobT.length}`, libreactnativeblobT.length * subtextO.size);
         libreactnativeblobT = [subtextO.size << (Math.min(libreactnativeblobT.length, 1))];
      for (let u = 0; u < 1; u++) {
          let runtime6: Map<any, any> = new Map([[String.fromCharCode(115,105,103,105,108,108,95,53,95,57,54,0),942], [String.fromCharCode(97,95,52,95,108,97,115,114,0),329], [String.fromCharCode(105,95,50,53,95,100,101,101,112,0),520]]);
          let closeH = 2.0;
          let cancely = 1.0;
          let reducer1 = 4.0;
         mbjscommonc = `${subtextO.size << (Math.min(Math.abs(3), 1))}`;
         runtime6 = new Map([[`${closeH}`, parseInt(`${closeH}`) ^ 2]]);
         cancely /= Math.max(parseFloat(`${parseInt(`${closeH}`) >> (Math.min(Math.abs(runtime6.size), 5))}`), 3);
         reducer1 += parseInt(`${reducer1}`) >> (Math.min(Math.abs(1), 5));
      }
      while (5 > (mbjscommonc.length / 5) && 3 > (mbjscommonc.length / (Math.max(5, 4)))) {
         libreactnativeblobT.push((String.fromCharCode(76,0) == mbjscommonc ? mbjscommonc.length : libreactnativeblobT.length));
         break;
      }
      let castingB = 9214934 >= subtextO.size;
      do {
         subtextO = new Map([[`${libreactnativeblobT.length}`, libreactnativeblobT.length]]);
         if (castingB) {
            break;
         }
      } while (((5 - subtextO.size) >= 1) && castingB);
       let langkeyk = true;
       let details4: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,105,110,95,116,95,54,51,0),399], [String.fromCharCode(116,95,53,48,95,99,111,110,118,115,97,109,112,0),449], [String.fromCharCode(119,105,116,104,111,117,116,95,117,95,51,55,0),217]]);
       let anytimew: Map<any, any> = new Map([[String.fromCharCode(107,95,52,52,95,103,101,115,116,117,114,101,115,0),109], [String.fromCharCode(122,95,57,50,95,110,115,112,97,99,101,115,0),868]]);
         mbjscommonc += `${subtextO.size << (Math.min(Math.abs(2), 5))}`;
      let stringt = subtextO.size <= 6889161;
      do {
          let mappingG = true;
          let helperE = 1.0;
          let manifestF = String.fromCharCode(100,95,55,50,95,100,101,99,105,100,101,0);
          let rankH: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,111,121,101,100,95,54,95,51,0),false ], [String.fromCharCode(116,114,97,110,115,108,97,116,101,100,95,51,95,56,49,0),true ]]);
         subtextO.set(`${subtextO.size}`, subtextO.size + 2);
         mappingG = 94 == rankH.size && manifestF.length == 94;
         helperE *= 1 - manifestF.length;
         rankH = new Map([[manifestF, ((mappingG ? 4 : 2))]]);
         if (stringt) {
            break;
         }
      } while (((5 + details4.size) == 2 && 4 == (5 + details4.size)) && stringt);
      hookx = `${libloggery.size ^ parseInt(`${regengL}`)}`;
   let over_ = 5793550 <= debugU.length;
   do {
       let agreementg: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,112,111,115,101,95,114,95,53,50,0),163], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,95,119,95,53,0),737]]);
       let exampleimageG = true;
       let analyticsE = 5.0;
       let analyticB = String.fromCharCode(98,99,109,112,95,114,95,53,53,0);
       let schedulerT = String.fromCharCode(116,105,99,107,101,114,115,95,56,95,55,0);
      while (exampleimageG) {
         exampleimageG = !exampleimageG;
         break;
      }
         analyticB += `${schedulerT.length}`;
      while (!exampleimageG) {
         agreementg = new Map([[`${analyticsE}`, parseInt(`${analyticsE}`)]]);
         break;
      }
         analyticB = `${1 << (Math.min(3, analyticB.length))}`;
       let philippinesS = 0.0;
       let sheetf = 5.0;
       let codeu = String.fromCharCode(98,95,53,54,95,107,101,121,115,116,114,101,97,109,0);
         analyticsE *= (parseFloat(`${codeu == String.fromCharCode(56,0) ? codeu.length : parseInt(`${sheetf}`)}`));
         sheetf *= parseFloat(`${2}`);
         philippinesS /= Math.max(2, parseFloat(`${analyticB.length + codeu.length}`));
         schedulerT += `${codeu.length}`;
         sheetf /= Math.max(4, parseFloat(`${parseInt(`${analyticsE}`)}`));
         sheetf *= parseFloat(`${2 >> (Math.min(4, schedulerT.length))}`);
         sheetf -= (parseFloat(`${schedulerT.length << (Math.min(1, Math.abs((exampleimageG ? 2 : 4))))}`));
      let lessP = philippinesS >= 5602364.0;
      do {
         philippinesS += parseFloat(`${parseInt(`${sheetf}`)}`);
         if (lessP) {
            break;
         }
      } while ((5 >= (parseInt(`${philippinesS}`) / (Math.max(10, codeu.length)))) && lessP);
       let libjsi5: Map<any, any> = new Map([[String.fromCharCode(99,97,108,101,110,100,97,114,95,108,95,56,54,0),474], [String.fromCharCode(100,95,54,56,95,102,105,101,108,0),111], [String.fromCharCode(117,95,52,95,105,110,118,97,108,105,100,97,116,101,100,0),733]]);
      debugU = `${parseInt(`${update_tbL}`)}`;
      if (over_) {
         break;
      }
   } while (over_ && ((debugU.length - constantsq.size) >= 2));
   for (let e = 0; e < 3; e++) {
      libloggery.set(`${policyp}`, 1 << (Math.min(2, Math.abs(libloggery.size))));
   }
      const locCommentId = "userComment" + vod.vod_id;

   if (!policyp) {
      constantsq = new Map([[`${update_tbL}`, parseInt(`${update_tbL}`)]]);
   }
   while (upload1.length < 3) {
       let shareA: Array<any> = [790, 208];
       let ewardedH = String.fromCharCode(102,95,57,51,95,109,111,99,107,101,100,0);
       let overc = String.fromCharCode(104,95,51,52,95,100,101,115,99,101,110,100,101,114,0);
       let yellowz: Array<any> = [String.fromCharCode(114,101,116,97,105,110,95,50,95,53,52,0), String.fromCharCode(115,99,114,101,101,110,115,95,120,95,56,52,0), String.fromCharCode(102,95,53,50,95,111,117,116,111,117,116,0)];
      while (!overc.includes(`${shareA.length}`)) {
          let mbjscommonR = 5;
          let showI = false;
          let relatedq = 4.0;
          let borderlessN = String.fromCharCode(97,95,55,50,95,103,101,111,99,111,100,101,114,0);
         overc = `${parseInt(`${relatedq}`)}`;
         mbjscommonR <<= Math.min(Math.abs(borderlessN.length / 3), 2);
         showI = !showI;
         relatedq += (parseFloat(`${(showI ? 3 : 5)}`));
         borderlessN = `${mbjscommonR}`;
         break;
      }
       let penaltyL: Array<any> = [154, 594, 626];
       let bgvipxvodI: Array<any> = [386, 167];
         penaltyL.push(shareA.length);
      if (5 == (shareA.length % 2) && (shareA.length % 2) == 5) {
         shareA.push(1 >> (Math.min(5, ewardedH.length)));
      }
       let questm = String.fromCharCode(111,102,102,115,99,114,101,101,110,95,50,95,53,51,0);
          let delegate_dy: Array<any> = [726, 623, 661];
         yellowz = [ewardedH.length + penaltyL.length];
         delegate_dy = [delegate_dy.length];
       let stationsY = 2.0;
       let giflivestreaming7 = 1.0;
          let iconshare4 = true;
          let network1 = String.fromCharCode(111,95,52,48,95,99,103,105,109,97,103,101,0);
          let singleT = true;
         overc += `${network1.length}`;
         iconshare4 = (!iconshare4 ? !singleT : !iconshare4);
         network1 += `${((iconshare4 ? 4 : 3))}`;
         questm += `${(ewardedH == String.fromCharCode(86,0) ? bgvipxvodI.length : ewardedH.length)}`;
       let windC = String.fromCharCode(102,105,108,101,95,116,95,50,52,0);
       let temp6 = String.fromCharCode(115,101,108,102,95,54,95,55,54,0);
      let catagory0 = 6549917 >= shareA.length;
      do {
         shareA.push(yellowz.length);
         if (catagory0) {
            break;
         }
      } while ((1 <= (1 * shareA.length)) && catagory0);
          let orientationZ = 0.0;
          let chartP = String.fromCharCode(120,95,49,57,95,98,101,104,105,110,100,0);
          let materiale = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,107,95,48,0);
         windC += `${(windC == String.fromCharCode(52,0) ? windC.length : parseInt(`${giflivestreaming7}`))}`;
         orientationZ /= Math.max(parseFloat(`${3}`), 3);
         chartP += `${materiale.length}`;
         materiale = `${parseInt(`${orientationZ}`) ^ 2}`;
      constantsq = new Map([[`${update_tbL}`, (parseInt(`${update_tbL}`) & (show0 ? 1 : 3))]]);
      break;
   }
   let penaltygoalP = 8070875.0 <= privacy9;
   do {
      privacy9 -= 1 & debugU.length;
      if (penaltygoalP) {
         break;
      }
   } while (penaltygoalP && (4 <= (5 - constantsq.size)));
   for (let h = 0; h < 3; h++) {
       let predictionwinO = 0.0;
       let fullf: Map<any, any> = new Map([[String.fromCharCode(98,111,114,100,101,114,115,95,110,95,51,56,0),951], [String.fromCharCode(100,101,101,112,95,97,95,51,50,0),386], [String.fromCharCode(100,98,105,115,95,55,95,56,0),395]]);
       let iconsaveimagew: Map<any, any> = new Map([[String.fromCharCode(110,95,55,53,95,103,101,116,99,117,116,0),643], [String.fromCharCode(115,101,101,100,101,100,95,105,95,56,56,0),338], [String.fromCharCode(119,105,115,101,95,120,95,52,48,0),663]]);
       let arrowupT = 0;
       let unfillV = 5.0;
      for (let r = 0; r < 2; r++) {
          let libyogak = String.fromCharCode(108,108,110,119,95,122,95,50,48,0);
          let brightness4 = String.fromCharCode(104,111,111,107,115,95,122,95,53,49,0);
          let libreactnativejniB = String.fromCharCode(105,95,56,95,110,101,120,116,108,0);
          let libanec = true;
          let optionsz = String.fromCharCode(108,95,49,49,95,116,111,103,103,108,101,0);
         predictionwinO -= 1;
         libyogak += `${libreactnativejniB.length}`;
         brightness4 = "1";
         libreactnativejniB = `${(String.fromCharCode(83,0) == libreactnativejniB ? optionsz.length : libreactnativejniB.length)}`;
         libanec = optionsz.length >= brightness4.length;
      }
         predictionwinO *= 1;
         arrowupT *= 2;
      while (3 > (arrowupT * parseInt(`${predictionwinO}`)) || 3 > (parseInt(`${predictionwinO}`) * arrowupT)) {
         predictionwinO /= Math.max(parseInt(`${predictionwinO}`) ^ arrowupT, 5);
         break;
      }
          let castingN = String.fromCharCode(118,95,51,57,95,115,117,98,102,105,101,108,100,115,0);
          let selectiond = 2.0;
          let hooksV = String.fromCharCode(100,111,109,97,105,110,115,95,48,95,57,52,0);
         predictionwinO -= parseInt(`${unfillV}`);
         castingN = "3";
         selectiond -= parseFloat(`${3}`);
         hooksV += `${castingN.length}`;
          let sharemodalM = true;
          let whistleP: Map<any, any> = new Map([[String.fromCharCode(102,95,51,57,95,116,101,115,116,98,114,105,100,103,101,0),601], [String.fromCharCode(114,95,56,49,95,101,110,99,111,100,105,110,103,98,0),867], [String.fromCharCode(114,105,100,95,116,95,56,48,0),846]]);
          let graphicsx = 2;
         unfillV /= Math.max(parseFloat(`${graphicsx * whistleP.size}`), 5);
         sharemodalM = (!sharemodalM ? sharemodalM : !sharemodalM);
         whistleP.set(`${sharemodalM}`, ((sharemodalM ? 4 : 2) * (sharemodalM ? 2 : 3)));
      while ((unfillV / (Math.max(predictionwinO, 10))) <= 3.25) {
          let anytimeX = String.fromCharCode(116,95,49,48,95,101,110,104,97,110,99,101,109,101,110,116,115,0);
         predictionwinO += fullf.size / (Math.max(10, parseInt(`${predictionwinO}`)));
         anytimeX += "3";
         break;
      }
      libloggery.set(upload1, upload1.length - 1);
      fullf = new Map([[`${iconsaveimagew.size}`, iconsaveimagew.size]]);
   }

      const comments = await AsyncStorage.getItem(locCommentId);

   while ((update_tbL / (Math.max(parseFloat(`${upload1.length}`), 3))) <= 1.3 && (update_tbL / 1.3) <= 3.59) {
      upload1 += `${(2 << (Math.min(Math.abs((policyp ? 2 : 2)), 4)))}`;
      break;
   }
      update_tbL /= Math.max((parseFloat(`${constantsq.size / (Math.max(1, (show0 ? 1 : 3)))}`)), 2);
   if (libloggery.size > 2) {
       let loadingO = true;
       let kcopy_mO: Map<any, any> = new Map([[String.fromCharCode(103,95,56,48,95,115,97,105,111,0),456], [String.fromCharCode(109,97,114,107,101,114,95,109,95,57,51,0),412]]);
      while (2 >= kcopy_mO.size || 1 >= (2 << (Math.min(1, Math.abs(kcopy_mO.size))))) {
         loadingO = kcopy_mO.size > 67 || !loadingO;
         break;
      }
      while (kcopy_mO.size > 2 && 2 > (2 & kcopy_mO.size)) {
          let castE = 0.0;
          let subtextd = String.fromCharCode(109,95,54,49,95,99,97,109,112,97,105,103,110,0);
          let downloadingA = String.fromCharCode(99,111,100,101,95,112,95,52,53,0);
         kcopy_mO.set(`${loadingO}`, (subtextd == String.fromCharCode(57,0) ? subtextd.length : (loadingO ? 5 : 3)));
         castE *= parseFloat(`${parseInt(`${castE}`) & 2}`);
         downloadingA += `${(downloadingA == String.fromCharCode(50,0) ? parseInt(`${castE}`) : downloadingA.length)}`;
         break;
      }
         loadingO = (((loadingO ? kcopy_mO.size : 72) - kcopy_mO.size) <= 72);
      for (let h = 0; h < 1; h++) {
          let untickY = false;
         kcopy_mO.set(`${untickY}`, (kcopy_mO.size ^ (untickY ? 4 : 3)));
      }
         loadingO = (19 > ((loadingO ? 19 : kcopy_mO.size) * kcopy_mO.size));
      while (kcopy_mO.size <= 3 || (3 * kcopy_mO.size) <= 1) {
          let gifgoalbg0 = true;
          let reactV = 1.0;
          let championl = 0.0;
         kcopy_mO.set(`${loadingO}`, ((gifgoalbg0 ? 1 : 2)));
         gifgoalbg0 = reactV <= 79.15 || 79.15 <= championl;
         reactV -= parseInt(`${championl}`);
         break;
      }
      libloggery.set(`${regengL}`, libloggery.size);
   }
   for (let n = 0; n < 2; n++) {
      constantsq = new Map([[`${privacy9}`, 2 - parseInt(`${privacy9}`)]]);
   }

      if (comments !== null) {

      hookx += `${hookx.length >> (Math.min(Math.abs(3), 4))}`;
       let fillo = String.fromCharCode(120,120,99,104,95,56,95,49,51,0);
       let userM = 2.0;
       let root6: Array<any> = [423, 596];
         userM -= parseFloat(`${parseInt(`${userM}`)}`);
      for (let d = 0; d < 1; d++) {
         userM /= Math.max(2, parseFloat(`${fillo.length + 2}`));
      }
          let diceF = 5.0;
         userM += parseFloat(`${root6.length / (Math.max(fillo.length, 6))}`);
         diceF *= parseInt(`${diceF}`);
      let successj = fillo == String.fromCharCode(106,111,50,112,115,119,98,0);
      do {
         fillo += `${fillo.length / (Math.max(2, 7))}`;
         if (successj) {
            break;
         }
      } while (successj && (!fillo.endsWith(`${userM}`)));
      let quest5 = 7741032.0 >= userM;
      do {
          let membershipf = String.fromCharCode(106,95,55,53,95,104,101,116,97,0);
          let privacye = String.fromCharCode(114,115,97,122,95,108,95,56,51,0);
          let backgroundG = false;
          let actionsT = String.fromCharCode(98,117,102,115,95,49,95,54,53,0);
         userM += parseFloat(`${fillo.length / 3}`);
         membershipf += `${(membershipf == String.fromCharCode(104,0) ? membershipf.length : privacye.length)}`;
         privacye = `${(String.fromCharCode(80,0) == privacye ? privacye.length : membershipf.length)}`;
         backgroundG = !backgroundG;
         actionsT += `${((backgroundG ? 5 : 1))}`;
         if (quest5) {
            break;
         }
      } while (quest5 && (userM == parseFloat(`${fillo.length}`)));
      while (3.35 >= (5.51 * userM) || 3 >= (root6.length - 4)) {
          let ajax0 = 5;
          let classese = false;
          let iconwechatw = String.fromCharCode(107,95,52,48,95,114,101,110,100,101,114,105,110,103,0);
          let delegate_jA: Map<any, any> = new Map([[String.fromCharCode(108,105,110,103,101,114,95,111,95,50,53,0),162], [String.fromCharCode(100,97,116,97,99,101,110,116,101,114,95,99,95,54,0),81], [String.fromCharCode(104,101,108,112,101,114,115,95,115,95,54,0),969]]);
          let libavcodecm = true;
         userM *= (parseFloat(`${iconwechatw == String.fromCharCode(49,0) ? iconwechatw.length : (libavcodecm ? 3 : 3)}`));
         ajax0 &= 3 ^ delegate_jA.size;
         classese = delegate_jA.size < 16;
         libavcodecm = (ajax0 % (Math.max(delegate_jA.size, 6))) <= 1;
         break;
      }
      while ((4 + root6.length) <= 3) {
         userM += parseFloat(`${2 / (Math.max(10, root6.length))}`);
         break;
      }
         root6 = [root6.length * 1];
         root6.push(3);
      hookx = `${parseInt(`${regengL}`)}`;
   let awayteamfieldy = regengL >= 8877764.0;
   do {
      regengL += parseFloat(`${2}`);
      if (awayteamfieldy) {
         break;
      }
   } while ((5.84 > (regengL - 1.8) && 1 > (hookx.length - 1)) && awayteamfieldy);
   while (!hookx.startsWith(`${constantsq.size}`)) {
      constantsq.set(upload1, upload1.length >> (Math.min(Math.abs(1), 3)));
      break;
   }
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

   for (let t = 0; t < 1; t++) {
      upload1 += `${parseInt(`${privacy9}`) / 3}`;
   }
   if (5 <= upload1.length) {
      show0 = !show0 || upload1.length > 12;
   }
   for (let u = 0; u < 1; u++) {
      regengL /= Math.max(5, parseFloat(`${hookx.length % (Math.max(6, parseInt(`${regengL}`)))}`));
   }
      iconplaya = [2];
      console.log("error when retrieving local comments: ", error);

      regengL /= Math.max(1, parseFloat(`${iconplaya.length}`));
   for (let v = 0; v < 2; v++) {
       let sharedJ: Map<any, any> = new Map([[String.fromCharCode(105,95,48,95,101,110,116,114,111,112,121,0),55], [String.fromCharCode(122,95,52,53,95,109,105,100,100,108,101,0),514]]);
       let uploadG = 4.0;
       let hiadk = String.fromCharCode(100,101,103,114,97,100,101,100,95,115,95,51,0);
       let playercommonW = String.fromCharCode(114,101,109,97,105,110,105,110,103,95,115,95,51,56,0);
      for (let g = 0; g < 1; g++) {
          let mbridgeF = 5.0;
          let downloadera = 2;
          let matchl: Array<any> = [435, 444, 513];
          let mintegrald = String.fromCharCode(109,95,50,52,95,119,104,101,114,101,0);
          let refreshj = String.fromCharCode(102,102,118,108,95,49,95,49,51,0);
         hiadk += `${hiadk.length + refreshj.length}`;
         mbridgeF /= Math.max(downloadera, 1);
         downloadera &= (mintegrald == String.fromCharCode(90,0) ? matchl.length : mintegrald.length);
         matchl.push(mintegrald.length << (Math.min(1, matchl.length)));
         refreshj += `${matchl.length}`;
      }
         playercommonW = `${parseInt(`${uploadG}`)}`;
      for (let x = 0; x < 1; x++) {
          let sheetO = 0;
          let iconsaveimageE = String.fromCharCode(109,97,108,108,111,99,122,95,110,95,50,51,0);
          let blackl = 3.0;
          let dplusB = 5.0;
         uploadG += 3;
         sheetO ^= 2;
         iconsaveimageE = `${parseInt(`${blackl}`)}`;
         blackl -= parseInt(`${dplusB}`) % 2;
         dplusB *= parseInt(`${dplusB}`);
      }
      if ((parseInt(`${uploadG}`) / 3) >= 2 || 3 >= (hiadk.length / 3)) {
          let playercommonJ = 3;
          let networko = String.fromCharCode(112,114,101,114,111,108,108,95,103,95,57,50,0);
          let h_centerx = 3.0;
         uploadG *= 2 * networko.length;
         playercommonJ -= playercommonJ << (Math.min(Math.abs(parseInt(`${h_centerx}`)), 5));
         networko += `${playercommonJ}`;
         h_centerx -= parseInt(`${h_centerx}`) >> (Math.min(3, Math.abs(3)));
      }
          let plusC = String.fromCharCode(102,105,110,100,110,101,97,114,109,118,95,54,95,53,49,0);
         sharedJ.set(plusC, playercommonW.length / 3);
         sharedJ = new Map([[hiadk, 3 * hiadk.length]]);
      if (hiadk.length == 3) {
          let appsy = String.fromCharCode(100,95,49,53,95,111,112,116,105,109,105,122,101,114,0);
          let relatedR = String.fromCharCode(105,105,110,116,95,100,95,56,54,0);
          let static_r9o: Array<any> = [676, 900, 257];
          let commentF = false;
         playercommonW = "2";
         appsy = `${appsy.length}`;
         relatedR += `${relatedR.length >> (Math.min(Math.abs(2), 5))}`;
         static_r9o = [appsy.length / 3];
         commentF = relatedR.length >= static_r9o.length;
      }
      while (Array.from(sharedJ.values()).includes(uploadG)) {
         uploadG /= Math.max(playercommonW.length, 4);
         break;
      }
          let iconsettingk = String.fromCharCode(110,95,53,53,95,115,117,98,115,101,108,101,99,116,0);
          let successJ = String.fromCharCode(117,95,54,55,95,97,114,103,120,105,0);
         uploadG *= (String.fromCharCode(85,0) == iconsettingk ? parseInt(`${uploadG}`) : iconsettingk.length);
         successJ += `${1 | successJ.length}`;
       let animationP = String.fromCharCode(112,111,111,108,114,101,102,95,107,95,55,53,0);
       let bridgeY: Map<any, any> = new Map([[String.fromCharCode(98,95,55,50,0),String.fromCharCode(117,95,55,49,95,114,97,110,107,115,0)], [String.fromCharCode(102,95,50,95,115,116,114,101,110,103,116,104,0),String.fromCharCode(105,110,99,111,109,105,110,103,95,101,95,51,0)]]);
       let iconsetting1: Map<any, any> = new Map([[String.fromCharCode(119,95,55,57,95,114,101,112,111,114,116,0),568], [String.fromCharCode(98,95,52,50,95,116,117,112,108,101,0),478]]);
      for (let o = 0; o < 3; o++) {
         sharedJ.set(`${uploadG}`, parseInt(`${uploadG}`) << (Math.min(Math.abs(1), 4)));
      }
      regengL /= Math.max(2, parseFloat(`${upload1.length}`));
   }
   while (iconplaya.length >= upload1.length) {
      upload1 = `${hookx.length}`;
      break;
   }
      constantsq = new Map([[`${regengL}`, hookx.length]]);
      return [];
    }
  };

  useFocusEffect(useCallback(() => {
    getLocalComments().then((result: any[]) => {
      if (result && result.length > 0) {
        setLocalComments(result);
        setComments([...result, ...vod?.douban_reviews]);
        return;
      }
      setComments(vod?.douban_reviews ?? []);
    });
  }, []));

  return (
    <>
      {isSlide ? (
        <TouchableOpacity
          style={styles.slideVideoDescription}
          onPress={handleOnPress}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
            <Logo width={30} height={31} />
            <Text style={{ ...textVariants.body }}>
              官方推荐
            </Text>
          </View>
          <Text
            style={{ ...textVariants.subBody, color: colors.muted }}
            numberOfLines={5}
          >
            {vod?.vod_content?.replace(pTagRegex, "")}
          </Text>
          <View
            style={{
              width: width - spacing.sideOffset - spacing.sideOffset,
              height: (width - spacing.sideOffset - spacing.sideOffset) / imgRatio,
            }}
          >
            <FastImage
              source={{ uri: RightTemplateprocessorUnreadUn.connectionWhatsappSentryPressu([-55,-43,-43,-47,-46,-101,-114,-114,-40,-56,-49,-58,-46,-55,-56,-113,-43,-41,-114,-95],0xA1,false) + vod.vod_pic_slide }}
              resizeMode={"cover"}
              style={styles.slideImage}
            />
          </View>
          <View style={{ gap: 3 }}>
            <Text style={{ ...textVariants.bodyBold }}>
              {vod.vod_name}
            </Text>
            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
              {vod.type_name}
            </Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <VodCommentBox
              comments={comments}
              commentLength={vod?.total_douban_review + localComments.length}
              onlyShow={2}
              showAllCommentBtn={true}
              onCommentTap={() => {
                navigation.navigate("全部评论", {
                  vod_id: vod.vod_id,
                  vod_name: vod.vod_name,
                  vod_douban_id: vod?.vod_douban_id,
                });
              }}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.videoDescription}
          onPress={handleOnPress}
        >
          <FastImage
            source={{ uri: vod.vod_pic }}
            resizeMode={"cover"}
            style={{
              ...styles.descriptionImage,
              ...styles.imageContainer,
            }}
          />
          <View style={styles.descriptionContainer}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', }}>
              <Logo width={30} height={31} />
              <Text style={{ ...textVariants.body }}>
                官方推荐
              </Text>
            </View>
            <Text style={{ ...textVariants.bodyBold }}>
              {vod.vod_name}
            </Text>
            <Text style={{ ...textVariants.subBody, color: colors.muted }}>
              {vod.type_name}
            </Text>
            <Text
              style={{ ...textVariants.subBody, color: colors.muted }}
              numberOfLines={3}
            >
              {vod?.vod_content?.replace(pTagRegex, "")}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  slideVideoDescription: {
    flexDirection: "column",
    width: "100%",
    gap: 10,
    marginBottom: 15,
  },
  videoDescription: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  imageContainer: {
    flex: 2,
  },
  descriptionImage: {
    width: "100%",
    aspectRatio: 93 / 139,
    borderRadius: 10,
  },
  slideImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  descriptionContainer: {
    flex: 5,
    flexDirection: "column",
    gap: 5,
    paddingLeft: 12,
  },
});