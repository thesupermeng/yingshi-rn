

class UpgradeSelect {
    static notificationBasketballEdit = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import { useTheme } from "@react-navigation/native";
import { ttOrange } from "@redux/tt_updates_bottom";

import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { updateUserAuth } from "@redux/actions/tt_topon";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/tt_fast";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
} from "@utility/tt_trophy_cross";
import { showLoginAction } from "@redux/actions/tt_copy_heji";
import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import { ttTramini } from "@api";
import WebView from "react-native-webview";
import { ttGoal } from "@redux/reducers/tt_selected";

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<ttGoal>('userReducer');

  const [loading, setIsLoading] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();

  
  useEffect(() => {
    tt_humidity_guide.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let heartW = 5.0;
    let indicatorX = 0.0;
    let huaweiP = 5;
    let klevins = String.fromCharCode(101,95,57,51,95,115,119,105,112,101,0);
    let playlist2 = String.fromCharCode(122,95,56,95,117,110,105,113,117,101,0);
    let injuryG = String.fromCharCode(109,101,97,115,117,114,101,100,95,120,95,54,48,0);
    let sourceZ = 4;
    let catalogJ = true;
    let launchE: Map<any, any> = new Map([[String.fromCharCode(118,95,50,48,0),5], [String.fromCharCode(113,95,51,48,95,99,111,108,108,0),879], [String.fromCharCode(115,119,101,101,112,95,116,95,51,50,0),448]]);
    let sportw = 2.0;
    let countryf = String.fromCharCode(103,95,50,51,95,97,115,115,105,103,110,101,100,0);
   for (let r = 0; r < 3; r++) {
       let window_96v = String.fromCharCode(116,105,109,101,99,111,100,101,115,0);
       let dropdownM: Array<any> = [571, 439, 93];
       let pagey: Array<any> = [330, 796, 994];
      for (let z = 0; z < 2; z++) {
         dropdownM = [pagey.length / 2];
      }
         dropdownM = [1];
      let anytimem = 9588142 <= dropdownM.length;
      do {
         dropdownM = [window_96v.length | dropdownM.length];
         if (anytimem) {
            break;
         }
      } while (anytimem && (dropdownM.length < 5));
      if ((pagey.length & 2) == 4 && (dropdownM.length & pagey.length) == 2) {
         dropdownM = [window_96v.length];
      }
       let dragx = 0.0;
       let point_ = 3.0;
         window_96v = "3";
          let long_q4 = 0.0;
          let typesx: Array<any> = [294, 546];
         window_96v += `${parseInt(`${long_q4}`) ^ 2}`;
         long_q4 *= 2 ^ typesx.length;
         typesx = [typesx.length << (Math.min(Math.abs(3), 1))];
      while (dropdownM.length >= 5) {
         dropdownM = [parseInt(`${dragx}`)];
         break;
      }
          let overlay5 = String.fromCharCode(108,97,112,112,101,100,95,55,95,53,49,0);
         dropdownM = [1 - overlay5.length];
      indicatorX *= parseFloat(`${parseInt(`${heartW}`)}`);
   }
   for (let i = 0; i < 2; i++) {
      klevins += `${(String.fromCharCode(89,0) == playlist2 ? playlist2.length : launchE.size)}`;
   }
      sourceZ |= parseInt(`${indicatorX}`) | 2;
   let shooty = 7953049 >= injuryG.length;
   do {
       let nterstitialj: Map<any, any> = new Map([[String.fromCharCode(119,95,48,95,115,112,97,114,107,115,0),true ], [String.fromCharCode(98,95,54,57,95,116,101,120,116,102,105,108,101,0),false ], [String.fromCharCode(108,105,115,116,110,101,114,115,0),true ]]);
       let androidj = String.fromCharCode(116,104,114,111,116,116,108,101,114,95,117,95,57,52,0);
       let sharei: Map<any, any> = new Map([[String.fromCharCode(114,95,55,52,95,117,110,97,118,97,105,108,97,98,108,101,0),411], [String.fromCharCode(109,95,52,53,95,103,108,111,98,97,108,108,121,0),794], [String.fromCharCode(100,111,99,115,0),167]]);
          let thailandM = String.fromCharCode(112,114,111,99,101,115,115,105,110,103,0);
          let mimo3 = 3.0;
          let middlewareZ: Array<any> = [193, 493, 924];
         nterstitialj = new Map([[`${sharei.size}`, 1]]);
         thailandM = `${middlewareZ.length}`;
         mimo3 += parseInt(`${mimo3}`);
         middlewareZ.push(thailandM.length + 1);
         androidj = `${sharei.size % (Math.max(1, 6))}`;
         nterstitialj.set(`${androidj}`, androidj.length / (Math.max(2, sharei.size)));
       let playlistj = 4;
       let prediction_ = 1;
          let injuryU: Map<any, any> = new Map([[String.fromCharCode(111,95,49,49,95,114,101,97,100,98,105,116,115,0),String.fromCharCode(115,117,98,115,97,109,112,95,114,95,51,0)], [String.fromCharCode(111,95,57,0),String.fromCharCode(115,101,101,107,97,98,108,101,0)], [String.fromCharCode(107,95,52,56,95,101,110,99,104,0),String.fromCharCode(115,108,105,99,101,115,95,122,95,57,50,0)]]);
          let rulesK = 1.0;
          let disconnectedq = true;
         prediction_ <<= Math.min(4, Math.abs(parseInt(`${rulesK}`) - prediction_));
         injuryU.set(`${disconnectedq}`, injuryU.size / 3);
         rulesK *= ((disconnectedq ? 5 : 1) + 3);
      let largeH = 5690673 >= sharei.size;
      do {
         sharei.set(androidj, playlistj * androidj.length);
         if (largeH) {
            break;
         }
      } while ((2 <= (nterstitialj.size << (Math.min(Math.abs(1), 4))) && 1 <= (sharei.size << (Math.min(1, Math.abs(nterstitialj.size))))) && largeH);
      if ((sharei.size / (Math.max(3, 7))) <= 5) {
         androidj = "3";
      }
      for (let p = 0; p < 1; p++) {
         playlistj <<= Math.min(3, Math.abs(playlistj - androidj.length));
      }
         prediction_ -= androidj.length & 3;
      injuryG = `${(androidj == String.fromCharCode(117,0) ? parseInt(`${indicatorX}`) : androidj.length)}`;
      if (shooty) {
         break;
      }
   } while (shooty && (injuryG.length >= playlist2.length));
   if ((huaweiP << (Math.min(Math.abs(4), 4))) > 5 || 3 > (4 >> (Math.min(4, Math.abs(huaweiP))))) {
       let comment3 = 0.0;
       let z_positionj: Map<any, any> = new Map([[String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0),941], [String.fromCharCode(109,117,108,116,105,112,108,101,120,95,115,95,51,50,0),508]]);
       let switch_ic = String.fromCharCode(101,110,118,101,108,111,112,101,100,95,104,95,54,53,0);
       let greyE: Map<any, any> = new Map([[String.fromCharCode(109,120,112,101,103,95,113,95,53,51,0),String.fromCharCode(107,101,121,112,97,116,104,115,95,114,95,52,0)], [String.fromCharCode(106,99,111,110,102,105,103,95,113,95,56,48,0),String.fromCharCode(114,101,100,117,99,101,114,0)]]);
          let appsG = 4.0;
          let clearq = 0.0;
         switch_ic = "2";
         appsG /= Math.max(parseFloat(`${parseInt(`${clearq}`)}`), 1);
         clearq -= 1;
         greyE.set(`${comment3}`, parseInt(`${comment3}`));
          let moviesU = 2.0;
         z_positionj.set(`${z_positionj.size}`, greyE.size << (Math.min(Math.abs(3), 4)));
         moviesU /= Math.max(1, parseFloat(`${parseInt(`${moviesU}`)}`));
       let holderF = true;
       let o_playert = true;
       let goal0 = true;
       let data1 = true;
         data1 = comment3 > 13.58 && !data1;
         comment3 += ((data1 ? 2 : 1) + switch_ic.length);
       let common2 = 5;
       let small2 = 5;
      for (let x = 0; x < 1; x++) {
         z_positionj = new Map([[`${holderF}`, ((goal0 ? 2 : 1) * 3)]]);
      }
      let screenS = 4910494.0 >= comment3;
      do {
         comment3 -= ((o_playert ? 4 : 2) | parseInt(`${comment3}`));
         if (screenS) {
            break;
         }
      } while ((Array.from(z_positionj.keys()).includes(`${comment3}`)) && screenS);
       let interstitial3 = true;
         comment3 /= Math.max(4, 1);
      heartW /= Math.max(huaweiP / (Math.max(sourceZ, 1)), 3);
   }
   if (!Array.from(launchE.values()).includes(sourceZ)) {
      launchE.set(`${indicatorX}`, sourceZ ^ parseInt(`${indicatorX}`));
   }
       let popupT = 4.0;
       let routerT = String.fromCharCode(100,105,97,108,111,103,117,101,115,95,111,95,52,53,0);
          let buttonP = true;
         routerT = `${parseInt(`${popupT}`) / 1}`;
         buttonP = !buttonP;
         routerT = `${routerT.length >> (Math.min(2, Math.abs(parseInt(`${popupT}`))))}`;
          let apple8 = 2.0;
         routerT = `${parseInt(`${popupT}`) >> (Math.min(Math.abs(3), 3))}`;
         apple8 *= parseFloat(`${parseInt(`${apple8}`) | parseInt(`${apple8}`)}`);
      if (!routerT.endsWith(`${popupT}`)) {
         routerT += `${parseInt(`${popupT}`)}`;
      }
      for (let b = 0; b < 3; b++) {
         popupT *= parseFloat(`${parseInt(`${popupT}`) << (Math.min(Math.abs(3), 5))}`);
      }
          let chinasameb = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,115,95,99,95,51,51,0);
          let gesturesX: Array<any> = [388, 910];
         routerT += `${chinasameb.length ^ 3}`;
         chinasameb = "1";
         gesturesX = [gesturesX.length ^ gesturesX.length];
      klevins = `${(String.fromCharCode(110,0) == klevins ? klevins.length : parseInt(`${indicatorX}`))}`;
      heartW *= sourceZ & playlist2.length;
      huaweiP %= Math.max(5, 2);

    setRefreshing(true);

   let networkG = 8301053 <= sourceZ;
   do {
       let google7: Array<any> = [947, 977, 639];
       let alertF: Map<any, any> = new Map([[String.fromCharCode(115,107,105,112,105,110,116,114,97,95,103,95,50,50,0),true ], [String.fromCharCode(120,95,53,49,95,108,111,97,115,0),false ], [String.fromCharCode(106,99,111,110,102,105,103,95,52,95,50,48,0),false ]]);
       let entry7 = 3.0;
       let applicationM = String.fromCharCode(104,95,55,57,95,97,115,99,0);
       let rewindx: Array<any> = [48, 835];
         applicationM += `${google7.length | 2}`;
         applicationM = "3";
       let mimo9 = String.fromCharCode(99,111,100,101,115,95,102,95,57,53,0);
       let championi = String.fromCharCode(114,95,55,95,110,116,102,115,0);
         entry7 /= Math.max(1, 1);
         google7 = [3];
         mimo9 += `${alertF.size & applicationM.length}`;
       let watchN = String.fromCharCode(109,101,116,97,115,111,117,110,100,0);
         entry7 -= (String.fromCharCode(69,0) == championi ? applicationM.length : championi.length);
         mimo9 = `${google7.length % 3}`;
          let styleA = 3.0;
          let mappingz = 5.0;
          let inactive4 = String.fromCharCode(99,111,111,114,100,95,121,95,52,53,0);
         alertF = new Map([[`${rewindx.length}`, rewindx.length]]);
         styleA /= Math.max(parseInt(`${mappingz}`), 5);
         mappingz /= Math.max(parseInt(`${styleA}`), 5);
         inactive4 = `${parseInt(`${mappingz}`)}`;
         google7 = [3 + alertF.size];
       let stringsr = false;
         championi = "2";
         google7.push(alertF.size);
          let fullr: Array<any> = [String.fromCharCode(109,108,115,100,0), String.fromCharCode(105,115,112,97,116,99,104,0), String.fromCharCode(100,105,114,101,99,116,105,111,110,115,0)];
          let castingx = String.fromCharCode(99,111,109,109,117,116,101,0);
         watchN += `${google7.length}`;
         fullr = [castingx.length];
         castingx = `${fullr.length}`;
      sourceZ /= Math.max(google7.length, 1);
      if (networkG) {
         break;
      }
   } while (networkG && (playlist2.startsWith(`${sourceZ}`)));
   if (!playlist2.endsWith(`${launchE.size}`)) {
      launchE.set(`${heartW}`, ((catalogJ ? 2 : 4) / (Math.max(8, parseInt(`${heartW}`)))));
   }
   for (let r = 0; r < 1; r++) {
      heartW *= (String.fromCharCode(103,0) == playlist2 ? playlist2.length : klevins.length);
   }
      heartW += parseInt(`${indicatorX}`) >> (Math.min(1, Math.abs(3)));
   let bodann = 5158794.0 >= indicatorX;
   do {
      indicatorX *= parseFloat(`${playlist2.length}`);
      if (bodann) {
         break;
      }
   } while ((3.35 == (parseFloat(`${injuryG.length}`) + indicatorX) && (2 ^ injuryG.length) == 4) && bodann);
       let nativeexO = String.fromCharCode(110,95,54,51,95,99,108,111,115,101,0);
       let page_ = String.fromCharCode(113,95,54,48,95,114,101,99,111,114,100,97,98,108,101,0);
          let handler3 = String.fromCharCode(109,111,100,101,120,112,95,98,95,56,48,0);
          let middlewarev = 2.0;
          let floatingr = 4.0;
         page_ = `${page_.length / 1}`;
         handler3 = `${parseInt(`${middlewarev}`)}`;
         middlewarev *= parseFloat(`${parseInt(`${floatingr}`)}`);
         nativeexO = `${nativeexO.length << (Math.min(Math.abs(2), 5))}`;
         nativeexO = "2";
      for (let c = 0; c < 2; c++) {
         nativeexO += `${(String.fromCharCode(57,0) == nativeexO ? page_.length : nativeexO.length)}`;
      }
      while (5 >= page_.length) {
         page_ = `${nativeexO.length}`;
         break;
      }
         nativeexO += `${(nativeexO == String.fromCharCode(49,0) ? page_.length : nativeexO.length)}`;
      catalogJ = (injuryG.length - parseInt(`${heartW}`)) <= 86;
   let statisticsx = 6127035.0 <= sportw;
   do {
      sportw *= parseInt(`${indicatorX}`) - 1;
      if (statisticsx) {
         break;
      }
   } while (((launchE.size >> (Math.min(Math.abs(3), 3))) == 3 || (3 / (Math.max(10, launchE.size))) == 5) && statisticsx);
   for (let o = 0; o < 3; o++) {
       let loadingj = String.fromCharCode(104,101,97,100,105,110,103,95,52,95,57,55,0);
       let twitterD = String.fromCharCode(105,110,116,114,97,120,109,98,121,0);
          let themeU = 0.0;
          let langkeyR = 3.0;
         twitterD += `${3 + parseInt(`${themeU}`)}`;
         themeU -= parseInt(`${langkeyR}`) | 3;
         langkeyR += 2 + parseInt(`${langkeyR}`);
      for (let i = 0; i < 3; i++) {
         loadingj = `${loadingj.length & 2}`;
      }
      for (let i = 0; i < 1; i++) {
         loadingj += `${1 - twitterD.length}`;
      }
       let stringO = String.fromCharCode(105,95,56,95,102,116,115,105,115,115,112,97,99,101,0);
       let detailX = String.fromCharCode(115,121,115,99,116,108,115,95,99,95,56,53,0);
      if (4 < detailX.length) {
          let mbbidD = String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,95,100,95,56,57,0);
          let tailu = 2.0;
          let unread3: Array<any> = [String.fromCharCode(115,111,117,114,99,101,0), String.fromCharCode(116,114,117,110,107,95,104,95,57,55,0), String.fromCharCode(101,110,117,109,101,114,97,116,101,95,99,95,53,48,0)];
          let time_ahO = 2.0;
         stringO += `${(mbbidD == String.fromCharCode(113,0) ? mbbidD.length : parseInt(`${tailu}`))}`;
         tailu += parseFloat(`${2 >> (Math.min(5, unread3.length))}`);
         unread3.push(unread3.length - parseInt(`${time_ahO}`));
         time_ahO += parseInt(`${time_ahO}`);
      }
      let reportS = twitterD.length <= 7032118;
      do {
         twitterD += `${twitterD.length - 3}`;
         if (reportS) {
            break;
         }
      } while (reportS && (loadingj != String.fromCharCode(77,0)));
      sourceZ /= Math.max(1, 2);
   }
   if (!Array.from(launchE.keys()).includes(`${sportw}`)) {
      sportw /= Math.max(4, 2 - parseInt(`${indicatorX}`));
   }
    await refreshUserState();

      catalogJ = 88 == injuryG.length;
      launchE.set(klevins, 1 ^ klevins.length);
   if ((sportw / 3) < 1.7) {
      indicatorX *= parseFloat(`${huaweiP - klevins.length}`);
   }
      launchE = new Map([[`${huaweiP}`, parseInt(`${indicatorX}`)]]);
   let filleda = 8648700.0 <= heartW;
   do {
       let loading0: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,104,0),424], [String.fromCharCode(112,115,104,0),667]]);
       let reactnativejsB = 1;
       let w_managerP = String.fromCharCode(101,110,116,114,111,112,121,95,119,95,50,53,0);
       let changed: Array<any> = [788, 580];
      for (let l = 0; l < 1; l++) {
         w_managerP += `${reactnativejsB * loading0.size}`;
      }
          let shareV = String.fromCharCode(122,95,51,53,95,98,117,105,108,116,105,110,0);
          let homep = 0.0;
          let transferf = 5.0;
         reactnativejsB += parseInt(`${homep}`) + 2;
         shareV += `${parseInt(`${transferf}`) >> (Math.min(Math.abs(1), 5))}`;
         homep += parseFloat(`${parseInt(`${transferf}`) | shareV.length}`);
      if ((loading0.size >> (Math.min(Math.abs(4), 3))) < 1 || 4 < (loading0.size >> (Math.min(w_managerP.length, 4)))) {
         w_managerP = `${changed.length}`;
      }
      let collectionr = 6012135 <= reactnativejsB;
      do {
         reactnativejsB <<= Math.min(1, Math.abs(reactnativejsB));
         if (collectionr) {
            break;
         }
      } while ((5 < (w_managerP.length << (Math.min(Math.abs(5), 1))) || (5 << (Math.min(5, Math.abs(reactnativejsB)))) < 1) && collectionr);
      if (1 < (loading0.size / (Math.max(2, 9)))) {
          let suggestiong: Array<any> = [751, 168];
          let chinasameh = 5.0;
         changed.push(2 + changed.length);
         suggestiong.push(1 * parseInt(`${chinasameh}`));
         chinasameh -= parseFloat(`${parseInt(`${chinasameh}`)}`);
      }
          let mailv: Map<any, any> = new Map([[String.fromCharCode(108,95,51,57,95,97,114,114,97,110,103,101,100,0),true ], [String.fromCharCode(118,97,108,105,100,95,108,95,55,0),false ]]);
          let blacklistd = 5.0;
         w_managerP += `${changed.length}`;
         mailv.set(`${blacklistd}`, mailv.size);
         blacklistd *= parseFloat(`${parseInt(`${blacklistd}`) % (Math.max(3, 9))}`);
      while (1 <= changed.length) {
         w_managerP += "2";
         break;
      }
      while ((loading0.size | changed.length) < 5) {
         changed = [(w_managerP == String.fromCharCode(65,0) ? changed.length : w_managerP.length)];
         break;
      }
      let gesturesY = 8176215 <= reactnativejsB;
      do {
         reactnativejsB &= reactnativejsB - 3;
         if (gesturesY) {
            break;
         }
      } while ((!w_managerP.includes(`${reactnativejsB}`)) && gesturesY);
         w_managerP += `${3 | w_managerP.length}`;
          let sortG = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,0);
          let downloadedm: Map<any, any> = new Map([[String.fromCharCode(112,117,108,108,117,112,95,53,95,52,48,0),String.fromCharCode(110,95,56,52,95,98,108,111,99,107,115,0)], [String.fromCharCode(105,95,57,95,97,99,111,109,112,114,101,115,115,111,114,0),String.fromCharCode(115,117,98,115,116,114,105,110,103,0)], [String.fromCharCode(110,95,57,48,95,109,117,116,97,116,101,0),String.fromCharCode(108,115,112,100,108,112,99,95,99,95,50,52,0)]]);
         changed = [sortG.length];
         sortG = `${3 % (Math.max(3, downloadedm.size))}`;
         downloadedm.set(`${downloadedm.size}`, downloadedm.size);
      while (2 <= (3 >> (Math.min(1, changed.length)))) {
          let controlsG = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,116,95,52,0);
          let resendo = String.fromCharCode(114,101,109,105,120,105,110,103,0);
         changed.push(reactnativejsB * loading0.size);
         controlsG += `${controlsG.length}`;
         resendo = `${2 >> (Math.min(4, controlsG.length))}`;
         break;
      }
      heartW /= Math.max(parseInt(`${indicatorX}`), 3);
      if (filleda) {
         break;
      }
   } while (filleda && ((1 - parseInt(`${heartW}`)) > 5 && 4 > (1 | injuryG.length)));
       let philippinesi = String.fromCharCode(100,101,108,116,97,113,95,103,95,53,56,0);
      if (philippinesi.startsWith(`${philippinesi.length}`)) {
         philippinesi += `${(String.fromCharCode(116,0) == philippinesi ? philippinesi.length : philippinesi.length)}`;
      }
       let reportu = true;
       let combineT = true;
      let blacko = philippinesi == String.fromCharCode(48,99,56,102,56,122,57,48,55,107,0);
      do {
         philippinesi = "3";
         if (blacko) {
            break;
         }
      } while ((5 < philippinesi.length && combineT) && blacko);
      indicatorX *= (parseFloat(`${philippinesi == String.fromCharCode(65,0) ? philippinesi.length : sourceZ}`));
      sourceZ -= 1 ^ parseInt(`${indicatorX}`);
      heartW += 2;
      sportw /= Math.max(4, 2);
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let orangeb = 4;
    let downloadC: Array<any> = [839, 380];
    let acceptedP = 2.0;
    let anewinterstitialX = 5.0;
    let commentu = 5.0;
    let rewardl = String.fromCharCode(117,97,110,0);
    let comment8 = 3.0;
    let crowng = 1.0;
    let libcrashsdkM = false;
    let middlek = 4.0;
   let minivoda = 5276803 <= downloadC.length;
   do {
       let penaltyv = true;
       let launcher8 = 1;
       let temperatureB = 2;
       let links = String.fromCharCode(121,95,56,52,95,98,117,110,100,108,101,0);
       let p_managerw = String.fromCharCode(111,95,55,52,95,105,115,111,0);
          let shareD: Map<any, any> = new Map([[String.fromCharCode(105,100,119,116,95,102,95,56,49,0),false ], [String.fromCharCode(99,97,112,116,117,114,101,100,95,108,95,49,49,0),false ]]);
          let actionsI = String.fromCharCode(117,95,54,52,95,115,112,114,105,110,103,0);
          let submitG = String.fromCharCode(99,95,56,52,95,97,99,99,117,109,117,108,97,116,101,0);
         temperatureB |= temperatureB;
         shareD.set(submitG, actionsI.length);
         actionsI = `${shareD.size}`;
         submitG = `${submitG.length}`;
          let loginf: Map<any, any> = new Map([[String.fromCharCode(101,100,105,116,95,112,95,54,53,0),762], [String.fromCharCode(105,95,55,48,95,115,105,103,110,97,116,117,114,101,0),404], [String.fromCharCode(108,111,97,100,115,0),817]]);
          let xvodX = String.fromCharCode(122,95,52,49,95,119,97,116,99,104,101,114,0);
         launcher8 += temperatureB % 2;
         loginf = new Map([[`${loginf.size}`, xvodX.length * 1]]);
         xvodX = `${2 & loginf.size}`;
      while (links.startsWith(p_managerw)) {
         p_managerw = `${2 / (Math.max(7, temperatureB))}`;
         break;
      }
      if (p_managerw.includes(`${launcher8}`)) {
         p_managerw = `${(p_managerw == String.fromCharCode(111,0) ? (penaltyv ? 4 : 3) : p_managerw.length)}`;
      }
          let viewerO: Array<any> = [535, 154];
          let starX = String.fromCharCode(122,95,51,55,95,97,110,110,111,116,97,116,105,111,110,115,0);
          let teamK = String.fromCharCode(121,95,51,52,95,116,115,120,0);
         temperatureB ^= links.length;
         viewerO.push(3 + starX.length);
         starX += `${starX.length}`;
         teamK += `${starX.length}`;
         p_managerw = `${2 | p_managerw.length}`;
       let formD = String.fromCharCode(115,104,111,119,110,95,109,95,56,48,0);
          let middlewareq = String.fromCharCode(115,116,112,115,0);
         links = `${temperatureB & 3}`;
         middlewareq += `${middlewareq.length * 1}`;
         p_managerw += `${formD.length % (Math.max(p_managerw.length, 10))}`;
       let redirectv = String.fromCharCode(105,95,56,53,95,100,120,110,100,99,0);
       let nalyticsT = String.fromCharCode(97,117,120,0);
      for (let b = 0; b < 3; b++) {
         links = `${(formD == String.fromCharCode(82,0) ? launcher8 : formD.length)}`;
      }
         penaltyv = redirectv.length >= 63 && launcher8 >= 63;
          let checkbox4 = String.fromCharCode(108,111,103,109,111,110,111,0);
          let settingc = 4;
          let windf: Array<any> = [965, 315, 85];
         temperatureB += 3;
         checkbox4 += `${settingc}`;
         settingc /= Math.max(2, 3);
         windf.push(windf.length);
      for (let o = 0; o < 1; o++) {
         nalyticsT += `${2 & redirectv.length}`;
      }
      for (let i = 0; i < 3; i++) {
         p_managerw = `${launcher8}`;
      }
      downloadC = [((penaltyv ? 2 : 1) / (Math.max(parseInt(`${comment8}`), 5)))];
      if (minivoda) {
         break;
      }
   } while (minivoda && ((3 * downloadC.length) > 3 && (3 * rewardl.length) > 2));
      comment8 *= parseFloat(`${rewardl.length}`);
   let logoP = 9616833.0 <= anewinterstitialX;
   do {
      anewinterstitialX -= 2 + parseInt(`${comment8}`);
      if (logoP) {
         break;
      }
   } while (((orangeb * 5) == 5 || 5 == (5 + orangeb)) && logoP);
      commentu += 3;

    const result = await ttTramini.getUserDetails();

      downloadC.push(downloadC.length);
       let z_countH = 2.0;
       let backwardR: Array<any> = [653, 786];
       let buildn = true;
      while (!buildn) {
          let private_oF = true;
          let profileY: Map<any, any> = new Map([[String.fromCharCode(100,95,51,52,95,110,111,104,119,0),true ], [String.fromCharCode(106,95,55,53,95,103,101,111,0),true ], [String.fromCharCode(99,103,105,109,97,103,101,95,118,95,52,50,0),false ]]);
          let specF: Map<any, any> = new Map([[String.fromCharCode(112,95,56,55,95,110,98,112,112,0),false ], [String.fromCharCode(98,101,110,99,104,109,97,114,107,95,49,95,54,51,0),true ], [String.fromCharCode(107,95,57,48,95,119,105,114,101,0),true ]]);
          let playv = 0.0;
          let navigationX = 2.0;
         z_countH /= Math.max(parseFloat(`${1 % (Math.max(4, specF.size))}`), 3);
         private_oF = !private_oF;
         profileY = new Map([[`${navigationX}`, 3 * parseInt(`${playv}`)]]);
         specF.set(`${navigationX}`, 3 % (Math.max(3, parseInt(`${navigationX}`))));
         playv /= Math.max(3, parseFloat(`${profileY.size}`));
         break;
      }
      let castingw = backwardR.length >= 9411318;
      do {
         backwardR = [parseInt(`${z_countH}`) / (Math.max(backwardR.length, 7))];
         if (castingw) {
            break;
         }
      } while (castingw && (!buildn));
      for (let p = 0; p < 1; p++) {
          let apps7 = 0;
          let searchw = String.fromCharCode(110,111,104,101,97,100,101,114,0);
         backwardR.push(1 * parseInt(`${z_countH}`));
         apps7 += searchw.length;
         searchw += `${searchw.length}`;
      }
          let guideT = 3.0;
         buildn = !buildn;
         guideT /= Math.max(parseInt(`${guideT}`) / (Math.max(parseInt(`${guideT}`), 4)), 1);
      let gradleI = backwardR.length >= 9475794;
      do {
         backwardR.push(backwardR.length);
         if (gradleI) {
            break;
         }
      } while (gradleI && (buildn));
      while ((backwardR.length - 2) >= 2) {
         backwardR.push((1 % (Math.max(10, (buildn ? 3 : 3)))));
         break;
      }
       let scheduleH: Map<any, any> = new Map([[String.fromCharCode(112,101,114,99,101,110,116,0),142], [String.fromCharCode(120,109,108,95,98,95,56,50,0),770], [String.fromCharCode(104,95,53,49,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0),711]]);
         buildn = 90 == scheduleH.size || 26.100 == z_countH;
       let hongkongj: Map<any, any> = new Map([[String.fromCharCode(108,97,110,103,105,100,0),751], [String.fromCharCode(100,101,97,99,116,0),849]]);
       let foregroundg: Map<any, any> = new Map([[String.fromCharCode(115,97,116,95,105,95,57,55,0),296], [String.fromCharCode(112,95,51,95,98,117,102,108,101,110,0),176]]);
      downloadC.push(3 | backwardR.length);
   if (rewardl.startsWith(`${crowng}`)) {
      crowng *= 3;
   }
   let modalR = 8894140 >= downloadC.length;
   do {
       let closeA = 0;
       let page5 = String.fromCharCode(103,101,110,101,114,97,116,105,111,110,0);
       let vignettel = 2;
       let langy = 4.0;
      for (let p = 0; p < 1; p++) {
         vignettel >>= Math.min(1, Math.abs(parseInt(`${langy}`) | vignettel));
      }
         page5 += `${parseInt(`${langy}`)}`;
         closeA %= Math.max(2, vignettel % (Math.max(2, 5)));
         langy -= parseFloat(`${1}`);
       let splashU = 4.0;
       let sortw = 0.0;
      if (5.7 == (sortw - 1.42)) {
         sortw += parseFloat(`${3 - parseInt(`${splashU}`)}`);
      }
      let dycreatort = 9450745.0 >= splashU;
      do {
         splashU /= Math.max(parseFloat(`${vignettel}`), 4);
         if (dycreatort) {
            break;
         }
      } while ((3.89 == (splashU - 3.82) && (splashU - sortw) == 3.82) && dycreatort);
       let logoutQ = 0.0;
       let description_y8Y = 2;
      let analyticsx = 4939720 <= closeA;
      do {
         closeA >>= Math.min(page5.length, 2);
         if (analyticsx) {
            break;
         }
      } while (((description_y8Y % (Math.max(4, 8))) == 1) && analyticsx);
      let transferr = 6518737.0 <= splashU;
      do {
          let libcrashsdkX = String.fromCharCode(105,109,109,101,100,105,97,116,101,95,120,95,54,52,0);
          let chatQ = String.fromCharCode(115,112,97,99,101,0);
          let mintegralN = String.fromCharCode(101,110,100,105,110,103,0);
          let searchU: Map<any, any> = new Map([[String.fromCharCode(98,95,50,48,95,97,118,105,103,97,116,105,111,110,0),321], [String.fromCharCode(110,95,54,57,95,102,117,115,101,0),146], [String.fromCharCode(107,95,53,54,95,103,117,101,115,115,0),390]]);
          let confirmationE = true;
         splashU /= Math.max(parseFloat(`${parseInt(`${langy}`)}`), 4);
         libcrashsdkX += `${libcrashsdkX.length}`;
         chatQ = `${((confirmationE ? 5 : 4))}`;
         mintegralN += `${mintegralN.length * searchU.size}`;
         searchU = new Map([[`${confirmationE}`, ((confirmationE ? 1 : 2) << (Math.min(Math.abs(3), 2)))]]);
         if (transferr) {
            break;
         }
      } while (transferr && (2.15 >= (langy * splashU) || (splashU * 2.15) >= 5.21));
      for (let h = 0; h < 2; h++) {
          let pangle4: Map<any, any> = new Map([[String.fromCharCode(119,95,52,55,95,101,108,105,115,116,0),true ], [String.fromCharCode(112,114,101,101,109,112,104,0),false ]]);
          let headerC = true;
          let filterP = String.fromCharCode(105,110,116,114,97,120,109,98,117,118,95,48,95,55,49,0);
         sortw *= (parseFloat(`${page5 == String.fromCharCode(112,0) ? parseInt(`${langy}`) : page5.length}`));
         pangle4 = new Map([[`${headerC}`, 1 | filterP.length]]);
         filterP += `${pangle4.size}`;
      }
      downloadC.push(2);
      if (modalR) {
         break;
      }
   } while (modalR && (!downloadC.includes(anewinterstitialX)));
    if (result == null) {

      orangeb *= parseInt(`${comment8}`);
      crowng *= parseInt(`${anewinterstitialX}`) - orangeb;
   let delegate_8A = commentu >= 9817208.0;
   do {
      commentu /= Math.max(orangeb, 2);
      if (delegate_8A) {
         break;
      }
   } while ((commentu < 1.62) && delegate_8A);
   let mappinga = 6512903 <= orangeb;
   do {
      orangeb >>= Math.min(Math.abs(1), 2);
      if (mappinga) {
         break;
      }
   } while (mappinga && ((rewardl.length + orangeb) < 5 || 5 < (orangeb + 5)));
      return;
    }

    await dispatch(updateUserAuth(result));

       let orientationb = String.fromCharCode(117,110,99,111,109,112,97,99,116,0);
          let zhengpianB = true;
          let styleX: Map<any, any> = new Map([[String.fromCharCode(119,114,111,110,103,95,55,95,50,48,0),735], [String.fromCharCode(114,95,55,51,95,115,101,110,100,101,114,115,0),778]]);
          let philippines8 = true;
         orientationb = `${styleX.size % (Math.max(orientationb.length, 10))}`;
         zhengpianB = (philippines8 ? !zhengpianB : philippines8);
         styleX.set(`${zhengpianB}`, ((zhengpianB ? 3 : 4) + 1));
      while (orientationb.length == orientationb.length) {
         orientationb = `${2 << (Math.min(5, orientationb.length))}`;
         break;
      }
         orientationb += `${1 & orientationb.length}`;
      downloadC.push((String.fromCharCode(105,0) == rewardl ? rewardl.length : parseInt(`${anewinterstitialX}`)));
      comment8 *= parseFloat(`${parseInt(`${acceptedP}`)}`);
       let injury6: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,110,116,105,97,116,105,111,110,0),502], [String.fromCharCode(100,111,103,115,95,52,95,50,56,0),851], [String.fromCharCode(110,101,101,100,95,121,95,51,51,0),58]]);
       let blacklistl = false;
         injury6.set(`${blacklistl}`, ((blacklistl ? 3 : 1) >> (Math.min(Math.abs(1), 4))));
       let homeN = String.fromCharCode(112,95,57,49,95,114,101,115,99,97,108,101,0);
       let mbridgex = String.fromCharCode(116,98,108,104,100,114,95,104,95,54,0);
       let adultm = String.fromCharCode(105,115,108,101,97,112,0);
         homeN += "3";
       let details0 = false;
       let sortD: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,102,121,95,51,95,52,52,0),377], [String.fromCharCode(103,95,50,55,95,99,104,101,99,107,109,109,0),775], [String.fromCharCode(103,111,100,101,112,115,95,104,95,57,0),855]]);
       let lessL: Map<any, any> = new Map([[String.fromCharCode(102,111,114,99,101,100,95,52,95,54,53,0),String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,0)], [String.fromCharCode(117,110,102,101,116,99,104,95,110,95,57,49,0),String.fromCharCode(100,101,109,111,95,110,95,52,54,0)], [String.fromCharCode(99,111,118,101,114,105,110,103,95,120,95,48,0),String.fromCharCode(112,109,107,95,115,95,53,48,0)]]);
      comment8 /= Math.max(2, parseFloat(`${2 ^ parseInt(`${anewinterstitialX}`)}`));
       let settingsc = 5.0;
       let relatedH = 1.0;
       let contextq: Map<any, any> = new Map([[String.fromCharCode(110,111,104,119,95,112,95,50,50,0),647], [String.fromCharCode(120,95,56,52,95,102,97,99,116,0),448], [String.fromCharCode(100,114,97,119,108,105,110,101,95,53,95,55,51,0),724]]);
       let tumbnailp: Map<any, any> = new Map([[String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,117,95,55,53,0),false ], [String.fromCharCode(112,107,99,114,121,112,116,0),true ], [String.fromCharCode(103,95,53,49,95,110,101,116,119,111,114,107,110,101,119,0),false ]]);
      if ((parseInt(`${settingsc}`) + tumbnailp.size) >= 5 && 5 >= (parseInt(`${settingsc}`) + tumbnailp.size)) {
         settingsc /= Math.max(parseFloat(`${contextq.size + parseInt(`${relatedH}`)}`), 3);
      }
         relatedH -= parseFloat(`${tumbnailp.size}`);
      for (let d = 0; d < 3; d++) {
          let right8: Array<any> = [469, 514, 340];
          let package_nlz: Map<any, any> = new Map([[String.fromCharCode(98,111,110,100,0),477], [String.fromCharCode(114,101,102,108,95,117,95,53,57,0),49], [String.fromCharCode(109,101,116,97,98,111,100,121,95,122,95,49,51,0),243]]);
          let shrinkJ = String.fromCharCode(105,115,116,111,103,114,97,109,0);
         relatedH *= parseFloat(`${shrinkJ.length / (Math.max(10, contextq.size))}`);
         right8 = [1];
         package_nlz.set(`${right8.length}`, right8.length);
         shrinkJ += `${right8.length | 2}`;
      }
         tumbnailp.set(`${settingsc}`, tumbnailp.size ^ parseInt(`${settingsc}`));
      if (tumbnailp.size <= 3) {
         tumbnailp = new Map([[`${contextq.size}`, parseInt(`${settingsc}`)]]);
      }
      acceptedP *= 3 - parseInt(`${crowng}`);
    return;
  };

  const checkConnection = async () => {
       let soundm = 3.0;
    let editz = 2.0;
    let comment_: Map<any, any> = new Map([[String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,101,95,55,48,0),true ], [String.fromCharCode(115,105,110,102,0),true ]]);
    let progressz = String.fromCharCode(99,104,114,111,109,97,104,111,108,100,95,104,95,55,52,0);
    let commonZ = String.fromCharCode(103,95,56,55,95,99,97,114,116,101,115,105,97,110,0);
    let mimo_: Array<any> = [409, 386];
    let select7: Map<any, any> = new Map([[String.fromCharCode(104,101,120,98,121,116,101,95,49,95,49,57,0),594], [String.fromCharCode(99,95,55,52,95,100,101,99,111,100,101,102,0),292], [String.fromCharCode(113,95,53,50,95,114,101,97,115,111,110,115,0),666]]);
    let mathM = String.fromCharCode(105,95,56,95,115,104,97,107,105,110,103,0);
    let become8 = String.fromCharCode(99,116,114,95,120,95,49,50,0);
    let playercommonh = String.fromCharCode(102,111,114,116,104,0);
      mathM = `${parseInt(`${editz}`) ^ parseInt(`${soundm}`)}`;
   while ((comment_.size - mathM.length) == 3) {
      mathM = `${parseInt(`${soundm}`)}`;
      break;
   }
   while (2 < mathM.length) {
      soundm *= parseFloat(`${3}`);
      break;
   }
      editz += parseInt(`${soundm}`) * commonZ.length;
   let pressureu = 6321222.0 <= soundm;
   do {
      soundm *= parseFloat(`${1 ^ parseInt(`${editz}`)}`);
      if (pressureu) {
         break;
      }
   } while (pressureu && ((mathM.length / (Math.max(1, parseInt(`${soundm}`)))) > 2));
   let loadingO = 7544444 >= select7.size;
   do {
      select7 = new Map([[`${select7.size}`, 2]]);
      if (loadingO) {
         break;
      }
   } while (loadingO && ((select7.size & mathM.length) <= 4 && 4 <= (select7.size & mathM.length)));

    const state = await NetInfo.fetch();

   for (let y = 0; y < 2; y++) {
      mimo_.push(parseInt(`${editz}`) | commonZ.length);
   }
      mathM = `${comment_.size - 2}`;
      soundm *= parseFloat(`${progressz.length * 1}`);
       let twitters = String.fromCharCode(113,117,101,117,101,95,112,95,51,57,0);
          let successJ = String.fromCharCode(109,101,115,115,97,103,101,0);
          let suggestionz = String.fromCharCode(121,95,52,51,95,116,120,116,0);
         twitters += `${suggestionz.length}`;
         successJ = `${successJ.length / 1}`;
         suggestionz = `${3 | successJ.length}`;
      while (twitters != twitters) {
          let bootsplashl = 0.0;
          let singleC = 0.0;
          let placeholderw = 3.0;
          let fast1 = 2;
         twitters += "2";
         bootsplashl /= Math.max(2, fast1);
         singleC /= Math.max(parseFloat(`${fast1}`), 2);
         placeholderw *= parseFloat(`${2}`);
         break;
      }
          let firebasev = String.fromCharCode(99,97,108,99,117,108,97,116,111,114,0);
          let verticalJ: Array<any> = [399, 105];
          let humidityM = String.fromCharCode(101,95,53,48,95,106,112,103,0);
         twitters = `${twitters.length / (Math.max(2, humidityM.length))}`;
         firebasev += `${(firebasev == String.fromCharCode(110,0) ? firebasev.length : verticalJ.length)}`;
         verticalJ.push(verticalJ.length + 1);
         humidityM = `${verticalJ.length / 1}`;
      select7.set(`${soundm}`, 1);
   while ((comment_.size - 1) == 1 || 2 == (comment_.size - 1)) {
       let founda = 3.0;
       let targetT: Map<any, any> = new Map([[String.fromCharCode(98,95,51,54,95,117,110,105,116,115,0),594], [String.fromCharCode(98,117,116,116,111,110,0),541]]);
       let clear1: Map<any, any> = new Map([[String.fromCharCode(108,117,109,105,110,97,110,99,101,95,122,95,54,54,0),true ], [String.fromCharCode(117,95,49,51,95,109,117,116,101,0),true ], [String.fromCharCode(98,95,49,95,106,100,99,116,0),true ]]);
         clear1.set(`${founda}`, 1 * parseInt(`${founda}`));
         founda /= Math.max(4, parseFloat(`${parseInt(`${founda}`)}`));
      if (5 == (clear1.size & targetT.size) || 4 == (5 & clear1.size)) {
         targetT = new Map([[`${targetT.size}`, parseInt(`${founda}`)]]);
      }
         targetT.set(`${founda}`, 1 << (Math.min(4, Math.abs(parseInt(`${founda}`)))));
      while ((clear1.size + targetT.size) == 5 || 1 == (clear1.size + 5)) {
         targetT = new Map([[`${targetT.size}`, targetT.size]]);
         break;
      }
          let pagev = 2.0;
         founda *= parseFloat(`${targetT.size}`);
         pagev /= Math.max(parseFloat(`${parseInt(`${pagev}`) & parseInt(`${pagev}`)}`), 3);
         targetT.set(`${clear1.size}`, clear1.size);
      let connection5 = 5577892 >= targetT.size;
      do {
         targetT = new Map([[`${clear1.size}`, clear1.size << (Math.min(5, Math.abs(parseInt(`${founda}`))))]]);
         if (connection5) {
            break;
         }
      } while (connection5 && ((5.97 - founda) <= 4.51));
          let infoe: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,121,115,101,95,54,95,49,50,0),false ], [String.fromCharCode(116,119,105,100,100,108,101,0),false ], [String.fromCharCode(105,100,120,95,51,95,54,51,0),false ]]);
          let resultu = 0;
         clear1.set(`${clear1.size}`, 1);
         infoe = new Map([[`${infoe.size}`, 1]]);
         resultu >>= Math.min(Math.abs(3), 4);
      comment_ = new Map([[`${mimo_.length}`, 1]]);
      break;
   }
      progressz += `${select7.size % (Math.max(3, 8))}`;
    const offline = !(state.isConnected && state.isInternetReachable);

      editz -= parseInt(`${editz}`) ^ comment_.size;
      mimo_.push(1 / (Math.max(10, progressz.length)));
   let china9 = select7.size <= 8171661;
   do {
      select7 = new Map([[mathM, 2 - mathM.length]]);
      if (china9) {
         break;
      }
   } while (china9 && (Array.from(select7.keys()).includes(`${soundm}`)));
   while (1 > (mimo_.length << (Math.min(progressz.length, 1))) && (progressz.length << (Math.min(Math.abs(1), 1))) > 3) {
      mimo_.push(comment_.size - 3);
      break;
   }
   while (!commonZ.includes(`${editz}`)) {
      commonZ += `${select7.size * mimo_.length}`;
      break;
   }
      commonZ += `${select7.size}`;
    setIsOffline(offline);

      mathM = `${mathM.length}`;
      become8 += "2";
       let s_playerD = 3;
       let rightQ: Map<any, any> = new Map([[String.fromCharCode(115,101,116,102,100,0),true ], [String.fromCharCode(107,95,54,51,95,104,97,108,102,108,116,117,105,110,116,0),false ], [String.fromCharCode(100,111,99,108,105,115,116,95,121,95,56,54,0),true ]]);
       let upgrade2: Map<any, any> = new Map([[String.fromCharCode(107,95,57,53,95,114,101,108,111,97,100,101,114,0),473], [String.fromCharCode(112,97,115,115,101,115,0),736]]);
      while (rightQ.get(`${upgrade2.size}`) != null) {
          let incidenta = String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,95,48,95,57,48,0);
          let mail1 = String.fromCharCode(115,104,97,114,105,110,103,95,104,95,50,49,0);
          let transferP = false;
          let side2 = 2.0;
         rightQ.set(`${side2}`, ((transferP ? 4 : 1) - parseInt(`${side2}`)));
         incidenta = `${incidenta.length}`;
         mail1 = `${mail1.length}`;
         transferP = incidenta == mail1;
         break;
      }
      while ((s_playerD % 3) == 1 && 2 == (3 % (Math.max(10, s_playerD)))) {
         s_playerD /= Math.max(rightQ.size & upgrade2.size, 3);
         break;
      }
       let splashe = 5;
       let singapore8 = 4.0;
       let middlewares = 4.0;
         singapore8 *= upgrade2.size << (Math.min(Math.abs(1), 1));
      commonZ = `${1 | rightQ.size}`;
   for (let p = 0; p < 2; p++) {
      commonZ = "3";
   }
   if (comment_.size == commonZ.length) {
      comment_ = new Map([[become8, mathM.length ^ become8.length]]);
   }
       let service9 = 2;
       let o_lock4 = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,117,95,50,57,0);
       let package_d6r = false;
      while (o_lock4.endsWith(`${package_d6r}`)) {
         o_lock4 = "1";
         break;
      }
         service9 >>= Math.min(3, Math.abs(service9 * 3));
      while (5 > service9) {
         o_lock4 += `${o_lock4.length}`;
         break;
      }
         o_lock4 = `${service9 + 3}`;
         o_lock4 += `${o_lock4.length / 1}`;
      select7 = new Map([[`${editz}`, 1]]);
    if (!offline) {

   for (let k = 0; k < 1; k++) {
      editz += parseInt(`${soundm}`) | mathM.length;
   }
   for (let p = 0; p < 1; p++) {
       let penaltyV: Array<any> = [366, 126, 40];
       let short_4r = 3;
       let downloaderh = 4.0;
      let lessG = penaltyV.length >= 8321286;
      do {
         penaltyV = [parseInt(`${downloaderh}`) / 1];
         if (lessG) {
            break;
         }
      } while (lessG && ((short_4r >> (Math.min(Math.abs(1), 3))) <= 1 && (short_4r >> (Math.min(Math.abs(1), 4))) <= 1));
      if (downloaderh < short_4r) {
          let klevin6 = 2;
          let playlist_ = 4.0;
         downloaderh -= parseFloat(`${3 % (Math.max(5, klevin6))}`);
         klevin6 ^= parseInt(`${playlist_}`);
      }
          let filledz = String.fromCharCode(99,102,104,100,95,113,95,50,57,0);
         short_4r %= Math.max(3, penaltyV.length);
         filledz = `${(String.fromCharCode(100,0) == filledz ? filledz.length : filledz.length)}`;
      if (1 <= short_4r) {
         short_4r += parseInt(`${downloaderh}`);
      }
      for (let u = 0; u < 2; u++) {
         penaltyV.push(penaltyV.length >> (Math.min(Math.abs(2), 1)));
      }
         downloaderh += parseFloat(`${penaltyV.length}`);
      for (let m = 0; m < 1; m++) {
          let bootsplashe = false;
          let trash1 = String.fromCharCode(103,95,57,53,0);
          let minimizeP = String.fromCharCode(115,101,99,111,110,100,97,114,121,95,108,95,49,57,0);
         downloaderh += (parseFloat(`${short_4r - (bootsplashe ? 1 : 5)}`));
         bootsplashe = minimizeP == String.fromCharCode(109,0);
         trash1 += `${trash1.length}`;
         minimizeP += `${minimizeP.length}`;
      }
         short_4r -= 1;
         short_4r -= 1;
      commonZ = `${2 % (Math.max(parseInt(`${downloaderh}`), 7))}`;
   }
      comment_ = new Map([[playercommonh, 1]]);
   if (parseFloat(`${progressz.length}`) > soundm) {
      soundm /= Math.max(3, parseFloat(`${select7.size & 3}`));
   }
   let statsc = 5275473 <= comment_.size;
   do {
       let long_5D = true;
      for (let l = 0; l < 2; l++) {
         long_5D = !long_5D;
      }
      if (long_5D) {
         long_5D = (!long_5D ? long_5D : !long_5D);
      }
      while (!long_5D && long_5D) {
          let l_positionH = 2.0;
          let nterstitiali = 4.0;
          let index9 = String.fromCharCode(111,99,97,116,105,111,110,95,53,95,52,53,0);
          let dropdownf = String.fromCharCode(110,95,57,52,95,105,111,101,114,114,110,111,109,101,109,0);
         long_5D = 32 == dropdownf.length || 32 == index9.length;
         l_positionH *= parseInt(`${l_positionH}`) * parseInt(`${nterstitiali}`);
         nterstitiali -= parseFloat(`${parseInt(`${nterstitiali}`) ^ parseInt(`${l_positionH}`)}`);
         index9 += `${parseInt(`${nterstitiali}`)}`;
         dropdownf = `${parseInt(`${nterstitiali}`)}`;
         break;
      }
      comment_.set(`${editz}`, comment_.size % 2);
      if (statsc) {
         break;
      }
   } while (statsc && ((4 >> (Math.min(2, Math.abs(comment_.size)))) < 4));
   if (3 >= playercommonh.length) {
       let style5: Array<any> = [745, 342, 689];
       let private_7Y = false;
       let settingsQ = String.fromCharCode(106,95,54,54,95,98,117,108,108,101,116,0);
       let fullm = 2.0;
       let gesturesl = 2.0;
          let file2: Array<any> = [439, 920, 478];
         style5.push(((private_7Y ? 5 : 2) << (Math.min(file2.length, 5))));
          let expiredB = 4;
          let applef = 3.0;
          let playO = String.fromCharCode(104,97,100,97,109,97,114,100,120,95,108,95,50,50,0);
         settingsQ = `${1 / (Math.max(10, parseInt(`${fullm}`)))}`;
         expiredB -= parseInt(`${applef}`);
         applef /= Math.max(parseFloat(`${playO.length}`), 2);
         playO = `${expiredB}`;
          let diceY: Map<any, any> = new Map([[String.fromCharCode(103,95,56,50,95,109,112,101,103,97,117,100,105,111,0),89], [String.fromCharCode(114,101,99,101,105,118,101,114,0),365]]);
          let buildw = String.fromCharCode(99,95,51,56,95,101,105,116,104,101,114,0);
          let roundX = String.fromCharCode(113,117,97,114,116,95,106,95,55,48,0);
         style5.push(buildw.length);
         diceY = new Map([[`${diceY.size}`, 3 - diceY.size]]);
         buildw = `${(roundX == String.fromCharCode(88,0) ? roundX.length : diceY.size)}`;
         settingsQ += `${3 - parseInt(`${gesturesl}`)}`;
      while ((gesturesl * 2.37) >= 2.94) {
          let borderlessD: Array<any> = [String.fromCharCode(105,95,55,54,95,119,101,98,112,97,103,101,115,0), String.fromCharCode(115,109,117,115,104,95,54,95,54,54,0)];
         private_7Y = style5.length < 23;
         borderlessD.push(borderlessD.length % 2);
         break;
      }
         style5 = [parseInt(`${fullm}`)];
      while (private_7Y) {
         private_7Y = String.fromCharCode(98,0) == settingsQ;
         break;
      }
      while ((3 ^ style5.length) < 2 && (style5.length ^ 3) < 3) {
          let stylesK = 5.0;
          let tramini3 = false;
          let singlec = String.fromCharCode(110,105,100,111,98,106,0);
         settingsQ = `${(parseInt(`${gesturesl}`) ^ (tramini3 ? 2 : 2))}`;
         stylesK += singlec.length;
         tramini3 = singlec.length > stylesK;
         break;
      }
      if (5.41 > (style5.length - fullm)) {
         style5.push(parseInt(`${fullm}`));
      }
       let videor = 2.0;
       let videojsb = 0.0;
         settingsQ = `${3 >> (Math.min(Math.abs(parseInt(`${fullm}`)), 4))}`;
      while ((style5.length * settingsQ.length) <= 1 && (1 * style5.length) <= 1) {
          let foregroundz: Array<any> = [String.fromCharCode(118,105,101,119,112,111,114,116,95,105,95,57,56,0), String.fromCharCode(99,103,105,109,97,103,101,95,102,95,55,56,0), String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,0)];
          let group3 = true;
          let infor: Map<any, any> = new Map([[String.fromCharCode(112,114,101,95,105,95,56,55,0),453], [String.fromCharCode(97,95,55,53,95,115,105,98,108,105,110,103,0),490]]);
          let stringsD = 3.0;
          let rnewsf = false;
         settingsQ = `${parseInt(`${stringsD}`)}`;
         foregroundz.push(infor.size);
         group3 = !rnewsf;
         infor = new Map([[`${foregroundz.length}`, ((rnewsf ? 5 : 4) % (Math.max(foregroundz.length, 10)))]]);
         break;
      }
         videojsb += (settingsQ == String.fromCharCode(69,0) ? settingsQ.length : (private_7Y ? 2 : 3));
      let mutedk = 5858175.0 <= gesturesl;
      do {
         gesturesl /= Math.max(4, 2 % (Math.max(9, parseInt(`${fullm}`))));
         if (mutedk) {
            break;
         }
      } while (((gesturesl - 1.9) < 5.59 || 5.34 < (1.9 * gesturesl)) && mutedk);
         fullm += 2;
      playercommonh = `${playercommonh.length}`;
   }
      handleRefresh();
    }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(
          state.isConnected &&
          (state.isInternetReachable === true ||
            state.isInternetReachable === null
            ? true
            : false)
        );
        setIsOffline(offline);
      }
    );
    return () => removeNetInfoSubscription();
  }, []);

  const webViewref = useRef<any>();
  useEffect(() => {
    webViewref.current.reload();
  }, [userState.user?.userToken]);

  const onLoadEnd = () => {
       let vignetteZ: Map<any, any> = new Map([[String.fromCharCode(115,121,110,116,104,101,115,105,122,101,0),false ], [String.fromCharCode(122,95,57,50,95,109,112,101,103,0),true ]]);
    let gpay9 = String.fromCharCode(98,97,99,107,0);
    let projectK = 4.0;
    let ewardedS = 3.0;
    let reactn: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,111,110,95,57,95,51,0),623], [String.fromCharCode(101,95,49,53,95,100,105,114,112,0),352], [String.fromCharCode(100,98,108,112,95,108,95,56,51,0),329]]);
    let regengJ = String.fromCharCode(122,95,54,49,95,116,118,100,99,0);
    let memberB = 3.0;
    let bridger: Array<any> = [String.fromCharCode(115,116,97,114,115,95,120,95,57,56,0), String.fromCharCode(109,97,99,101,95,49,95,50,48,0), String.fromCharCode(97,100,97,112,116,115,95,97,95,55,57,0)];
    let mode0 = 0.0;
    let tickq = String.fromCharCode(112,114,101,115,101,110,99,101,115,95,114,95,53,49,0);
    let indexj = 0.0;
    let trophy0 = 0.0;
    let formV = String.fromCharCode(112,95,53,51,95,112,102,105,108,116,101,114,0);
    let rulesK = 2.0;
      trophy0 *= parseInt(`${indexj}`);
   let countdowna = 6042836.0 <= trophy0;
   do {
       let gestures6: Map<any, any> = new Map([[String.fromCharCode(116,95,55,57,95,100,97,116,101,116,105,109,101,0),812], [String.fromCharCode(97,95,53,95,118,97,108,105,100,97,116,101,0),450]]);
         gestures6.set(`${gestures6.size}`, gestures6.size);
         gestures6.set(`${gestures6.size}`, gestures6.size - 2);
       let photom: Array<any> = [64, 522];
      trophy0 *= parseInt(`${mode0}`) & gpay9.length;
      if (countdowna) {
         break;
      }
   } while ((tickq.length <= 3) && countdowna);
      memberB += 1;
      trophy0 += 1 * gpay9.length;
   let arrowd = vignetteZ.size <= 9754403;
   do {
       let shirto = 4.0;
       let saveq = 5.0;
         saveq -= 2;
      for (let e = 0; e < 2; e++) {
          let reactnativejsT = true;
          let videok: Array<any> = [804, 799];
          let stationX = String.fromCharCode(101,118,101,110,97,118,103,95,98,95,53,53,0);
         shirto *= 3;
         reactnativejsT = 43 <= stationX.length;
         videok = [3 * videok.length];
         stationX = `${videok.length + 2}`;
      }
       let condensedF = String.fromCharCode(112,97,115,112,95,119,95,50,48,0);
       let favoriteZ = String.fromCharCode(105,95,50,50,95,115,117,114,102,97,99,101,115,0);
      if ((condensedF.length % 5) == 5 || (parseInt(`${saveq}`) * condensedF.length) == 5) {
         saveq *= favoriteZ.length & 2;
      }
      while ((saveq * 2.24) < 1.56 && (saveq * shirto) < 2.24) {
         shirto += parseInt(`${shirto}`) * favoriteZ.length;
         break;
      }
      let typesU = favoriteZ.length >= 7526500;
      do {
          let huawei9: Map<any, any> = new Map([[String.fromCharCode(115,108,111,116,115,95,108,95,50,48,0),886], [String.fromCharCode(99,111,109,112,97,99,116,95,110,95,53,50,0),885], [String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,55,95,55,52,0),411]]);
          let t_imagei = String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,0);
          let stringso = 4.0;
          let regengc = true;
          let utils3 = 0.0;
         favoriteZ = `${parseInt(`${saveq}`) & parseInt(`${utils3}`)}`;
         huawei9.set(`${stringso}`, 1 | huawei9.size);
         t_imagei += `${((regengc ? 4 : 5) | huawei9.size)}`;
         stringso /= Math.max(parseFloat(`${huawei9.size}`), 1);
         utils3 += (parseInt(`${stringso}`) + (regengc ? 4 : 3));
         if (typesU) {
            break;
         }
      } while ((5 <= (3 | favoriteZ.length) && (favoriteZ.length | 3) <= 3) && typesU);
      vignetteZ.set(gpay9, 3);
      if (arrowd) {
         break;
      }
   } while ((gpay9.length <= 2) && arrowd);
      reactn = new Map([[`${projectK}`, 2]]);
       let splashz = String.fromCharCode(109,117,116,101,95,116,95,51,56,0);
       let heartG = 3;
       let klevinz = String.fromCharCode(99,95,50,55,95,109,111,100,101,108,0);
      let entryh = heartG <= 8859880;
      do {
         heartG *= klevinz.length;
         if (entryh) {
            break;
         }
      } while ((2 <= (heartG >> (Math.min(splashz.length, 3)))) && entryh);
          let splash3 = 4.0;
          let gmailO = String.fromCharCode(116,114,97,110,115,99,116,105,111,110,95,57,95,56,48,0);
         heartG ^= (String.fromCharCode(54,0) == splashz ? splashz.length : heartG);
         splash3 += parseFloat(`${parseInt(`${splash3}`) % (Math.max(gmailO.length, 4))}`);
         gmailO = `${2 & parseInt(`${splash3}`)}`;
      for (let f = 0; f < 1; f++) {
          let select7: Array<any> = [684, 492];
          let slider2 = false;
          let sansJ = true;
         splashz += `${2 | heartG}`;
         select7.push(1);
         slider2 = select7.length > 33;
         sansJ = select7.includes(slider2);
      }
         splashz += `${splashz.length >> (Math.min(2, Math.abs(heartG)))}`;
         klevinz += `${1 & klevinz.length}`;
      let spinner9 = klevinz.length >= 6236950;
      do {
         klevinz += `${klevinz.length | heartG}`;
         if (spinner9) {
            break;
         }
      } while (spinner9 && ((klevinz.length + 3) == 3));
      while (5 >= heartG) {
         heartG >>= Math.min(4, Math.abs(klevinz.length >> (Math.min(3, splashz.length))));
         break;
      }
         splashz = `${(String.fromCharCode(85,0) == splashz ? heartG : splashz.length)}`;
          let becomeG: Array<any> = [319, 527, 674];
         splashz = `${klevinz.length >> (Math.min(Math.abs(3), 3))}`;
         becomeG = [becomeG.length + 3];
      bridger = [parseInt(`${indexj}`)];
       let mbnative7: Array<any> = [987, 316, 17];
         mbnative7 = [3 - mbnative7.length];
      if (mbnative7.includes(mbnative7.length)) {
         mbnative7 = [3];
      }
      while (3 > (mbnative7.length / (Math.max(3, mbnative7.length))) && (mbnative7.length / (Math.max(7, mbnative7.length))) > 3) {
         mbnative7 = [mbnative7.length + mbnative7.length];
         break;
      }
      memberB /= Math.max(parseInt(`${mode0}`), 4);
   if ((projectK / (Math.max(3, indexj))) < 1.64 && (indexj / 1.64) < 3.98) {
      indexj *= parseFloat(`${parseInt(`${ewardedS}`)}`);
   }
       let foregroundd = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,0);
       let areaP = 1.0;
          let unreadN: Map<any, any> = new Map([[String.fromCharCode(114,97,99,105,110,103,0),730], [String.fromCharCode(115,95,55,53,95,114,101,110,100,101,114,0),244]]);
          let policyh = false;
         foregroundd = `${(unreadN.size << (Math.min(5, Math.abs((policyh ? 4 : 2)))))}`;
      let starr = 7189165 >= foregroundd.length;
      do {
         foregroundd = `${2 & foregroundd.length}`;
         if (starr) {
            break;
         }
      } while (starr && (foregroundd.endsWith(`${areaP}`)));
          let albumc = 0.0;
          let hover5 = 2.0;
          let vietnamD = 4.0;
         foregroundd = `${parseInt(`${albumc}`)}`;
         albumc -= parseFloat(`${2}`);
         hover5 -= parseFloat(`${3 % (Math.max(parseInt(`${vietnamD}`), 4))}`);
         vietnamD += 1 % (Math.max(parseInt(`${hover5}`), 1));
      if (1.47 >= (4.51 / (Math.max(3, areaP)))) {
         foregroundd += `${(foregroundd == String.fromCharCode(101,0) ? foregroundd.length : parseInt(`${areaP}`))}`;
      }
      if (3 <= (4 + foregroundd.length) || 3.1 <= (1.87 * areaP)) {
         foregroundd += `${parseInt(`${areaP}`)}`;
      }
      while (foregroundd.endsWith(`${areaP}`)) {
         foregroundd += "1";
         break;
      }
      regengJ += `${tickq.length}`;
   while ((parseInt(`${projectK}`) / (Math.max(regengJ.length, 6))) <= 3 && 1.15 <= (projectK / (Math.max(5.77, 5)))) {
      projectK -= parseFloat(`${parseInt(`${mode0}`)}`);
      break;
   }
   let xvodq = 7541788.0 >= ewardedS;
   do {
      ewardedS *= parseFloat(`${parseInt(`${projectK}`) / (Math.max(5, parseInt(`${trophy0}`)))}`);
      if (xvodq) {
         break;
      }
   } while (xvodq && (reactn.get(`${ewardedS}`) != null));
   for (let c = 0; c < 2; c++) {
       let playlist5 = 1.0;
       let downloadingU = String.fromCharCode(115,116,114,109,0);
       let producte = true;
       let matchesa = false;
         playlist5 -= downloadingU.length | parseInt(`${playlist5}`);
      if (3 < downloadingU.length) {
         downloadingU += "1";
      }
          let model1 = String.fromCharCode(107,95,57,51,95,109,105,108,108,105,115,0);
          let service4 = String.fromCharCode(97,99,114,111,110,121,109,95,113,95,49,55,0);
          let with_4aC: Map<any, any> = new Map([[String.fromCharCode(109,97,103,121,95,103,95,52,57,0),String.fromCharCode(117,95,53,53,95,98,117,116,116,101,114,102,108,121,0)], [String.fromCharCode(105,95,51,50,95,118,109,97,116,114,105,120,0),String.fromCharCode(97,101,99,109,0)]]);
         downloadingU += `${(model1 == String.fromCharCode(79,0) ? (matchesa ? 5 : 2) : model1.length)}`;
         service4 = `${with_4aC.size / (Math.max(3, 7))}`;
         with_4aC = new Map([[`${with_4aC.size}`, with_4aC.size]]);
         matchesa = producte;
         producte = !producte;
      for (let s = 0; s < 1; s++) {
          let catagoryl = 1.0;
          let teamZ = 3;
          let hooksn: Array<any> = [766, 343, 120];
          let saver = String.fromCharCode(104,97,100,97,109,97,114,100,120,95,113,95,49,56,0);
          let vignette5: Map<any, any> = new Map([[String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,50,95,55,50,0),String.fromCharCode(101,115,116,105,109,97,116,111,114,95,107,95,56,48,0)], [String.fromCharCode(112,117,114,101,95,109,95,53,53,0),String.fromCharCode(115,95,52,56,95,105,100,115,0)]]);
         playlist5 /= Math.max(hooksn.length * 2, 1);
         catagoryl += vignette5.size + saver.length;
         teamZ /= Math.max(5, teamZ + saver.length);
         hooksn = [parseInt(`${catagoryl}`)];
         vignette5 = new Map([[saver, parseInt(`${catagoryl}`) & saver.length]]);
      }
         matchesa = playlist5 == 45.24;
      while (producte) {
         producte = (((matchesa ? downloadingU.length : 88) >> (Math.min(downloadingU.length, 1))) >= 88);
         break;
      }
      for (let q = 0; q < 1; q++) {
         producte = matchesa && !producte;
      }
      let carousel6 = downloadingU == String.fromCharCode(97,52,50,100,122,101,56,0);
      do {
          let loginX = 2.0;
         downloadingU += `${((matchesa ? 3 : 1) / (Math.max(10, parseInt(`${loginX}`))))}`;
         if (carousel6) {
            break;
         }
      } while (((downloadingU.length - 3) == 2 && (parseInt(`${playlist5}`) / (Math.max(downloadingU.length, 1))) == 3) && carousel6);
       let sliderj = false;
       let utilsT = true;
         playlist5 -= ((producte ? 5 : 1));
      projectK /= Math.max(3, parseFloat(`${parseInt(`${projectK}`)}`));
   }
      vignetteZ = new Map([[`${vignetteZ.size}`, 1]]);
   for (let t = 0; t < 3; t++) {
       let layoutt = false;
       let viewsm = 5.0;
       let traminiN = String.fromCharCode(99,97,115,101,115,95,117,95,50,51,0);
      let nalyticsB = layoutt ? !layoutt : layoutt;
      do {
         layoutt = !layoutt;
         if (nalyticsB) {
            break;
         }
      } while (nalyticsB && (!traminiN.endsWith(`${layoutt}`)));
         traminiN = `${traminiN.length | 1}`;
      while ((parseInt(`${viewsm}`) * traminiN.length) == 2 && 5 == (traminiN.length * 2)) {
         viewsm -= traminiN.length - parseInt(`${viewsm}`);
         break;
      }
      for (let l = 0; l < 2; l++) {
          let single_: Map<any, any> = new Map([[String.fromCharCode(102,102,112,114,111,98,101,95,113,95,51,55,0),589], [String.fromCharCode(112,107,99,114,121,112,116,95,119,95,49,57,0),880]]);
          let screenF: Array<any> = [186, 163];
          let u_viewG = 0;
         viewsm -= ((layoutt ? 5 : 3) % (Math.max(screenF.length, 1)));
         single_ = new Map([[`${single_.size}`, u_viewG | 2]]);
         screenF = [u_viewG];
      }
      for (let z = 0; z < 1; z++) {
         layoutt = !layoutt;
      }
      let side3 = 8632377.0 >= viewsm;
      do {
         viewsm += 3 % (Math.max(parseInt(`${viewsm}`), 6));
         if (side3) {
            break;
         }
      } while ((traminiN.length > viewsm) && side3);
       let small_ = String.fromCharCode(104,95,57,52,95,99,105,118,105,108,0);
         small_ += `${small_.length}`;
         traminiN = `${(String.fromCharCode(88,0) == traminiN ? parseInt(`${viewsm}`) : traminiN.length)}`;
      reactn = new Map([[regengJ, (String.fromCharCode(104,0) == regengJ ? parseInt(`${projectK}`) : regengJ.length)]]);
   }
      tickq = `${parseInt(`${indexj}`)}`;
       let adultB = String.fromCharCode(113,95,56,57,95,105,110,116,101,114,0);
       let malaysiau: Map<any, any> = new Map([[String.fromCharCode(107,101,121,101,100,95,120,95,54,55,0),241], [String.fromCharCode(103,114,97,112,104,105,99,115,95,113,95,50,55,0),423]]);
         adultB += `${adultB.length}`;
      let connectionM = adultB == String.fromCharCode(119,122,119,105,119,0);
      do {
          let awaym = 4;
          let bingc = String.fromCharCode(109,100,97,116,101,0);
          let gmaili = false;
          let starS = String.fromCharCode(106,95,57,51,95,109,101,97,110,0);
          let mimoQ: Array<any> = [String.fromCharCode(114,101,105,109,112,111,114,116,0), String.fromCharCode(106,95,55,50,95,98,117,108,108,101,116,115,0), String.fromCharCode(115,95,49,51,95,111,112,99,111,100,101,0)];
         adultB += "2";
         awaym *= 2 + mimoQ.length;
         bingc = `${bingc.length}`;
         gmaili = mimoQ.includes(gmaili);
         starS = `${bingc.length}`;
         if (connectionM) {
            break;
         }
      } while (((4 >> (Math.min(5, Math.abs(malaysiau.size)))) <= 1 && 4 <= (malaysiau.size >> (Math.min(adultB.length, 2)))) && connectionM);
         adultB += "2";
          let redirectQ = 4;
          let sidek = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,115,101,116,95,56,95,57,54,0);
         adultB += `${adultB.length ^ 2}`;
         redirectQ += redirectQ >> (Math.min(Math.abs(1), 2));
         sidek = "1";
         malaysiau.set(`${adultB}`, malaysiau.size);
      let materialj = 6342243 >= adultB.length;
      do {
          let lessG = String.fromCharCode(102,95,52,50,95,104,97,110,110,101,108,0);
          let alertR = true;
         adultB += `${malaysiau.size}`;
         lessG = `${lessG.length >> (Math.min(Math.abs(1), 2))}`;
         alertR = (lessG.length & lessG.length) <= 48;
         if (materialj) {
            break;
         }
      } while (materialj && (1 <= (malaysiau.size << (Math.min(adultB.length, 4))) && (malaysiau.size << (Math.min(Math.abs(1), 3))) <= 2));
      tickq += `${vignetteZ.size << (Math.min(Math.abs(2), 2))}`;
   let trashq = 5129043.0 >= projectK;
   do {
       let filledv: Array<any> = [473, 196];
       let sigmobt = 0.0;
       let fillm = String.fromCharCode(107,95,54,55,95,101,110,116,105,114,101,108,121,0);
       let filel = false;
       let groupA: Array<any> = [351, 934, 349];
       let vignettey = 4.0;
       let mimoI = 4.0;
       let thailandD: Map<any, any> = new Map([[String.fromCharCode(102,105,110,105,115,104,101,100,95,100,95,55,52,0),true ], [String.fromCharCode(107,95,49,52,95,104,115,98,0),true ], [String.fromCharCode(100,111,109,101,115,116,105,99,0),false ]]);
       let dycreatorp: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,95,52,95,50,0),String.fromCharCode(119,105,108,108,0)], [String.fromCharCode(99,111,109,98,95,55,95,53,52,0),String.fromCharCode(102,117,108,102,105,108,108,95,116,95,51,50,0)]]);
      for (let u = 0; u < 1; u++) {
         filledv.push(2 + parseInt(`${vignettey}`));
      }
         filledv.push(groupA.length % (Math.max(1, 10)));
      for (let j = 0; j < 3; j++) {
          let buttonM = 1;
          let fillf: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,97,108,115,95,117,95,55,57,0),String.fromCharCode(101,112,111,99,104,95,49,95,49,54,0)], [String.fromCharCode(101,95,57,49,0),String.fromCharCode(115,117,115,112,101,110,100,101,100,95,104,95,49,50,0)]]);
         sigmobt /= Math.max(3, parseFloat(`${3}`));
         buttonM <<= Math.min(Math.abs(buttonM / (Math.max(1, 9))), 3);
         fillf.set(`${buttonM}`, 1);
      }
      while (!fillm.startsWith(`${mimoI}`)) {
         fillm += `${fillm.length}`;
         break;
      }
      let album7 = 8366479.0 <= mimoI;
      do {
          let userJ = 1;
          let reactI = String.fromCharCode(111,112,101,110,115,115,108,99,111,110,102,0);
          let componentK = false;
         mimoI *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${mimoI}`)), 4))}`);
         userJ >>= Math.min(5, Math.abs(1 & reactI.length));
         reactI += `${(String.fromCharCode(83,0) == reactI ? (componentK ? 2 : 1) : reactI.length)}`;
         if (album7) {
            break;
         }
      } while ((1.79 > (4.59 - mimoI) && (3 >> (Math.min(3, groupA.length))) > 3) && album7);
      if ((5 | groupA.length) > 3 || 1 > (groupA.length | 5)) {
          let checkbox2 = String.fromCharCode(101,120,112,108,105,99,105,116,95,102,95,51,53,0);
          let floateru = String.fromCharCode(114,95,50,50,95,116,104,105,99,107,110,101,115,115,0);
         groupA = [thailandD.size];
         checkbox2 = "2";
         floateru = `${floateru.length}`;
      }
      if ((fillm.length >> (Math.min(5, Math.abs(thailandD.size)))) <= 5 && 5 <= (fillm.length >> (Math.min(2, Math.abs(thailandD.size))))) {
         thailandD.set(`${mimoI}`, parseInt(`${mimoI}`) << (Math.min(groupA.length, 5)));
      }
          let splashp = 5;
          let selectG = 5;
         thailandD.set(`${splashp}`, filledv.length);
         splashp &= selectG;
      if ((filledv.length | 4) <= 3) {
         filledv.push(3);
      }
       let reactnativejsI = true;
       let feedbackI = true;
         groupA = [fillm.length];
         dycreatorp.set(`${feedbackI}`, 3);
      while (1.82 > (vignettey / 4.46) && (4.46 / (Math.max(1, vignettey))) > 3.16) {
         groupA.push((2 << (Math.min(Math.abs((reactnativejsI ? 2 : 2)), 4))));
         break;
      }
      projectK /= Math.max(parseFloat(`${parseInt(`${trophy0}`)}`), 2);
      if (trashq) {
         break;
      }
   } while (trashq && ((1.22 * projectK) == 4.64));
   while ((mode0 - 4.36) == 2.27) {
       let refresh3 = 1.0;
       let bootsplashs = false;
       let kickE: Map<any, any> = new Map([[String.fromCharCode(107,95,51,50,95,114,103,98,97,0),951], [String.fromCharCode(121,117,118,97,121,117,118,108,101,95,105,95,49,52,0),146]]);
      while (!bootsplashs && (refresh3 / 3.95) <= 3.85) {
         bootsplashs = !bootsplashs;
         break;
      }
         kickE = new Map([[`${kickE.size}`, kickE.size]]);
         refresh3 *= 2 % (Math.max(1, parseInt(`${refresh3}`)));
         kickE.set(`${bootsplashs}`, ((bootsplashs ? 1 : 2) - kickE.size));
          let aboutM = true;
         refresh3 -= ((bootsplashs ? 1 : 5) * parseInt(`${refresh3}`));
         aboutM = (aboutM ? aboutM : !aboutM);
      for (let q = 0; q < 2; q++) {
         refresh3 += parseInt(`${refresh3}`) / (Math.max(3, 1));
      }
         refresh3 *= parseInt(`${refresh3}`) >> (Math.min(Math.abs(1), 1));
          let switch_3ka = true;
          let eighteenc = 1;
          let constantsS = 1;
         bootsplashs = switch_3ka;
         eighteenc -= constantsS;
         constantsS &= eighteenc | constantsS;
         refresh3 /= Math.max(3, (parseInt(`${refresh3}`) / (Math.max(8, (bootsplashs ? 2 : 4)))));
      mode0 *= parseFloat(`${2}`);
      break;
   }

    webViewref.current.postMessage(`${userState.user?.userToken}`);

   while (3 > (parseInt(`${indexj}`) / 2) && 1.83 > (3.49 / (Math.max(8, indexj)))) {
      tickq = `${bridger.length ^ parseInt(`${ewardedS}`)}`;
      break;
   }
   if ((tickq.length >> (Math.min(Math.abs(4), 3))) == 5 || (4 >> (Math.min(4, tickq.length))) == 1) {
       let twitterS = String.fromCharCode(97,95,53,48,95,113,117,97,110,116,105,116,121,0);
       let specT: Map<any, any> = new Map([[String.fromCharCode(115,115,108,114,111,111,116,115,95,105,95,50,51,0),629], [String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,48,95,49,48,48,0),987]]);
       let mintegralQ = 4.0;
      for (let l = 0; l < 2; l++) {
         mintegralQ *= specT.size / 1;
      }
         specT.set(`${twitterS}`, twitterS.length);
      if (2 == (specT.size / 4)) {
         specT = new Map([[twitterS, parseInt(`${mintegralQ}`) << (Math.min(Math.abs(1), 2))]]);
      }
      if ((mintegralQ - 3.91) > 3.70 || 2 > (parseInt(`${mintegralQ}`) - specT.size)) {
         specT = new Map([[twitterS, twitterS.length ^ parseInt(`${mintegralQ}`)]]);
      }
         specT = new Map([[`${specT.size}`, specT.size - 3]]);
      let gmaila = specT.size <= 8061080;
      do {
          let reducerf: Map<any, any> = new Map([[String.fromCharCode(115,117,99,104,95,114,95,57,0),594], [String.fromCharCode(118,95,49,48,48,95,101,120,116,101,110,116,0),357], [String.fromCharCode(111,95,49,51,95,116,101,120,116,117,114,101,0),979]]);
          let shirtL = String.fromCharCode(97,100,100,98,108,107,0);
          let package_c3 = 4;
         specT.set(shirtL, (shirtL == String.fromCharCode(56,0) ? package_c3 : shirtL.length));
         reducerf = new Map([[`${reducerf.size}`, reducerf.size]]);
         if (gmaila) {
            break;
         }
      } while ((parseInt(`${mintegralQ}`) < specT.size) && gmaila);
         twitterS = `${twitterS.length}`;
       let flipperQ = String.fromCharCode(117,118,118,101,114,116,105,99,97,108,95,109,95,52,51,0);
       let bottomi = String.fromCharCode(99,108,97,122,122,0);
          let trophy2 = String.fromCharCode(115,116,97,99,107,101,100,0);
          let membershipF = String.fromCharCode(117,116,116,101,114,97,110,99,101,95,113,95,51,52,0);
         flipperQ += `${twitterS.length}`;
         trophy2 += `${membershipF.length | 3}`;
         membershipF = `${trophy2.length}`;
      tickq = "2";
   }
   if ((ewardedS * parseFloat(`${reactn.size}`)) <= 2.34) {
       let chinasameJ = 3.0;
       let c_lockF = String.fromCharCode(116,95,53,51,95,105,115,111,112,101,110,113,117,111,116,101,0);
       let blacklist7: Array<any> = [632, 713, 349];
       let bridgerT = 1;
      for (let g = 0; g < 1; g++) {
          let commentL = 3;
          let eventl = 5;
          let basketballj = 4.0;
          let uploadO = String.fromCharCode(100,118,118,105,100,101,111,0);
          let filledz = String.fromCharCode(112,95,49,48,48,95,102,97,105,108,105,110,103,0);
         c_lockF = `${eventl}`;
         commentL ^= (uploadO == String.fromCharCode(122,0) ? parseInt(`${basketballj}`) : uploadO.length);
         eventl &= parseInt(`${basketballj}`);
         filledz = `${uploadO.length % 3}`;
      }
       let lightH = String.fromCharCode(111,95,57,52,95,117,115,100,0);
      let turnP = blacklist7.length <= 8843090;
      do {
         blacklist7.push(bridgerT);
         if (turnP) {
            break;
         }
      } while (turnP && (lightH.length > blacklist7.length));
       let circleh: Map<any, any> = new Map([[String.fromCharCode(112,95,55,50,95,111,112,101,114,97,116,111,114,0),898], [String.fromCharCode(98,111,111,116,95,103,95,56,48,0),361], [String.fromCharCode(97,112,112,114,111,118,101,114,95,52,95,51,52,0),122]]);
       let halfA: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,111,114,115,95,112,95,52,50,0),426], [String.fromCharCode(116,114,101,97,116,0),880]]);
       let securityW = 0;
       let minivodO = 3;
          let loginp: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,111,108,115,95,51,95,56,48,0),String.fromCharCode(99,111,114,112,117,115,95,106,95,49,57,0)], [String.fromCharCode(109,98,115,116,114,105,110,103,95,56,95,50,57,0),String.fromCharCode(116,114,105,97,108,0)]]);
          let pingh = String.fromCharCode(102,95,52,55,95,112,111,115,115,105,98,108,101,0);
          let lineS: Array<any> = [122, 13];
         chinasameJ *= parseFloat(`${halfA.size}`);
         loginp = new Map([[`${lineS.length}`, lineS.length]]);
         pingh += `${(pingh == String.fromCharCode(89,0) ? loginp.size : pingh.length)}`;
      while (4 < (5 | minivodO)) {
          let bottomK = 0.0;
          let expandn = 0.0;
          let scheduleZ = 2.0;
          let default_nt = String.fromCharCode(102,95,53,50,95,99,108,101,97,114,115,0);
         circleh = new Map([[`${circleh.size}`, circleh.size]]);
         bottomK /= Math.max(3, 1 * parseInt(`${bottomK}`));
         expandn -= parseFloat(`${parseInt(`${bottomK}`)}`);
         scheduleZ *= parseInt(`${bottomK}`);
         default_nt = `${3 * parseInt(`${expandn}`)}`;
         break;
      }
      let videon = blacklist7.length <= 7659213;
      do {
         blacklist7 = [minivodO];
         if (videon) {
            break;
         }
      } while ((3 == (bridgerT ^ 5)) && videon);
      let ewardedm = 9493626 <= lightH.length;
      do {
         lightH += "3";
         if (ewardedm) {
            break;
         }
      } while (ewardedm && ((lightH.length / (Math.max(4, blacklist7.length))) == 2));
          let inviter: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,105,99,97,116,101,95,116,95,54,50,0),223], [String.fromCharCode(115,116,114,111,107,101,100,0),612], [String.fromCharCode(103,95,49,55,95,120,120,99,104,0),680]]);
          let sellC = 5.0;
         lightH += `${minivodO}`;
         inviter.set(`${sellC}`, inviter.size << (Math.min(Math.abs(3), 5)));
         sellC -= parseFloat(`${parseInt(`${sellC}`) << (Math.min(Math.abs(3), 5))}`);
      let linkh = minivodO >= 6658654;
      do {
          let giftm = String.fromCharCode(105,95,53,56,95,115,105,102,102,0);
          let modeK = 4.0;
          let miniA = 5;
         minivodO &= (giftm == String.fromCharCode(102,0) ? parseInt(`${modeK}`) : giftm.length);
         modeK /= Math.max(parseFloat(`${miniA}`), 4);
         if (linkh) {
            break;
         }
      } while ((minivodO < securityW) && linkh);
       let minivodK = 1.0;
      ewardedS -= (parseFloat(`${tickq == String.fromCharCode(110,0) ? tickq.length : parseInt(`${ewardedS}`)}`));
   }
      indexj += parseFloat(`${parseInt(`${memberB}`) - reactn.size}`);
       let containeri = 5;
       let eventc: Array<any> = [684, 315, 922];
         containeri %= Math.max(containeri + eventc.length, 2);
      let relatedV = containeri >= 8307655;
      do {
         containeri |= eventc.length;
         if (relatedV) {
            break;
         }
      } while ((4 <= eventc.length) && relatedV);
      while (5 == (containeri | eventc.length)) {
         containeri %= Math.max(2, 1 + containeri);
         break;
      }
      for (let b = 0; b < 2; b++) {
         eventc.push(1 | eventc.length);
      }
         containeri &= containeri;
      for (let e = 0; e < 2; e++) {
          let changeI = String.fromCharCode(114,95,52,49,95,101,107,121,0);
          let screenb = 1;
          let mutedq = true;
          let klevinC: Array<any> = [832, 613];
          let more_ = String.fromCharCode(98,111,117,110,100,105,110,103,95,105,95,57,54,0);
         eventc.push(more_.length);
         changeI += `${screenb}`;
         screenb <<= Math.min(Math.abs((String.fromCharCode(98,0) == changeI ? screenb : changeI.length)), 3);
         mutedq = 4 >= klevinC.length;
         klevinC.push((String.fromCharCode(50,0) == changeI ? klevinC.length : changeI.length));
         more_ = `${changeI.length}`;
      }
      regengJ += `${parseInt(`${mode0}`) & parseInt(`${memberB}`)}`;
   let description_fk = bridger.length <= 6100037;
   do {
       let nativeexS = String.fromCharCode(107,95,50,51,95,100,97,112,0);
       let redirectU = 4.0;
       let light0 = 5;
       let plashT = 0.0;
       let iconR = String.fromCharCode(98,111,111,115,116,95,102,95,56,56,0);
         light0 |= light0;
      let networkX = 8960551 <= light0;
      do {
         light0 &= parseInt(`${plashT}`);
         if (networkX) {
            break;
         }
      } while ((3 == (1 - light0) && (light0 - nativeexS.length) == 1) && networkX);
          let modelsu = 3;
         plashT += parseFloat(`${nativeexS.length << (Math.min(5, Math.abs(parseInt(`${redirectU}`))))}`);
         modelsu %= Math.max(modelsu >> (Math.min(2, Math.abs(modelsu))), 3);
         plashT *= (parseFloat(`${nativeexS == String.fromCharCode(101,0) ? nativeexS.length : parseInt(`${redirectU}`)}`));
      let baiduW = 9206682 >= light0;
      do {
          let anytimeE = 5;
         light0 /= Math.max(2 ^ parseInt(`${redirectU}`), 4);
         anytimeE += anytimeE * 1;
         if (baiduW) {
            break;
         }
      } while (baiduW && (4.37 >= (5.92 - redirectU)));
         plashT -= parseFloat(`${light0 % 2}`);
      while ((plashT * parseFloat(`${iconR.length}`)) <= 5.94) {
          let overlayN = 4.0;
         iconR += `${(String.fromCharCode(48,0) == nativeexS ? nativeexS.length : iconR.length)}`;
         overlayN *= parseFloat(`${parseInt(`${overlayN}`)}`);
         break;
      }
      for (let r = 0; r < 1; r++) {
         redirectU += parseInt(`${plashT}`);
      }
      if (5 < (2 % (Math.max(3, iconR.length)))) {
         redirectU /= Math.max(light0, 5);
      }
      if ((parseFloat(`${light0}`) + plashT) == 3.87 || (light0 % 3) == 5) {
          let expiredI = String.fromCharCode(99,114,108,102,95,114,95,51,57,0);
          let modeX = 3.0;
          let sendu = String.fromCharCode(99,95,52,48,95,101,110,99,111,100,101,100,102,114,97,109,101,0);
         light0 |= 1 ^ parseInt(`${plashT}`);
         expiredI += `${(expiredI == String.fromCharCode(109,0) ? parseInt(`${modeX}`) : expiredI.length)}`;
         modeX /= Math.max(parseFloat(`${parseInt(`${modeX}`) + 2}`), 5);
         sendu = `${expiredI.length}`;
      }
         light0 /= Math.max(3 >> (Math.min(1, iconR.length)), 2);
          let shrinkT = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,57,95,55,57,0);
          let mappingH: Array<any> = [148, 584, 268];
          let diceW = 5;
         iconR = "2";
         shrinkT += `${mappingH.length}`;
         mappingH = [mappingH.length];
         diceW &= 2 / (Math.max(8, diceW));
         iconR = `${3 + parseInt(`${redirectU}`)}`;
          let contextY = 5.0;
          let playj = String.fromCharCode(121,117,118,95,115,95,48,0);
          let shares = String.fromCharCode(115,116,114,116,121,112,101,95,50,95,57,0);
         nativeexS += `${(iconR == String.fromCharCode(106,0) ? light0 : iconR.length)}`;
         contextY += shares.length;
         playj += `${parseInt(`${contextY}`)}`;
         shares += `${2 & playj.length}`;
      for (let i = 0; i < 3; i++) {
         plashT -= parseFloat(`${nativeexS.length & 1}`);
      }
      bridger = [tickq.length / (Math.max(2, 8))];
      if (description_fk) {
         break;
      }
   } while ((5 >= (tickq.length >> (Math.min(Math.abs(2), 1)))) && description_fk);
      formV += `${parseInt(`${ewardedS}`) & tickq.length}`;
   if (5.68 <= (3.29 + ewardedS)) {
      regengJ += "2";
   }
   let helperP = gpay9 == String.fromCharCode(113,107,111,97,0);
   do {
      gpay9 = `${reactn.size / (Math.max(4, parseInt(`${trophy0}`)))}`;
      if (helperP) {
         break;
      }
   } while (helperP && ((gpay9.length << (Math.min(4, Math.abs(reactn.size)))) > 1 && (1 << (Math.min(1, gpay9.length))) > 3));
      ewardedS += parseFloat(`${2}`);
      vignetteZ.set(`${projectK}`, parseInt(`${projectK}`));
       let unreadd = String.fromCharCode(102,95,56,50,95,116,108,115,0);
      while (2 <= unreadd.length) {
         unreadd += `${1 / (Math.max(10, unreadd.length))}`;
         break;
      }
      while (unreadd.includes(unreadd)) {
         unreadd = `${unreadd.length}`;
         break;
      }
       let halfJ = String.fromCharCode(109,112,101,103,100,97,116,97,95,104,95,53,56,0);
      gpay9 += `${reactn.size << (Math.min(Math.abs(1), 2))}`;
   let blacki = String.fromCharCode(100,54,110,117,102,121,99,0) == tickq;
   do {
      tickq += "3";
      if (blacki) {
         break;
      }
   } while (blacki && (3 == (tickq.length - 4)));
      mode0 /= Math.max(parseFloat(`${parseInt(`${ewardedS}`) ^ 1}`), 4);
      bridger = [gpay9.length % 3];
   if (5.12 <= (tickq.length - memberB) && 5.76 <= (memberB - 5.12)) {
      tickq = "1";
   }
   while ((3 * tickq.length) == 1 && 3 == (tickq.length / 3)) {
      indexj -= parseFloat(`${parseInt(`${projectK}`)}`);
      break;
   }
   while (!bridger.includes(mode0)) {
      mode0 -= parseFloat(`${2 - parseInt(`${memberB}`)}`);
      break;
   }
       let panglep: Map<any, any> = new Map([[String.fromCharCode(106,95,56,50,95,99,111,109,112,97,99,116,101,100,0),true ], [String.fromCharCode(110,115,117,112,112,111,114,116,101,100,0),false ], [String.fromCharCode(99,97,116,97,112,117,108,116,95,57,95,56,49,0),false ]]);
       let referrerr = String.fromCharCode(111,95,53,54,95,108,97,118,102,117,116,105,108,115,0);
       let dycreatori = true;
       let langI = true;
      if (!langI && 5 == referrerr.length) {
          let indicatorO = String.fromCharCode(113,100,114,97,119,0);
          let half6: Array<any> = [559, 843];
          let navigationP = 3;
          let e_playerK = String.fromCharCode(98,111,100,101,114,95,97,95,56,57,0);
         langI = e_playerK.length >= 70 && langI;
         indicatorO += `${1 >> (Math.min(3, half6.length))}`;
         half6 = [half6.length];
         navigationP %= Math.max(4, 2);
         e_playerK = `${navigationP >> (Math.min(5, Math.abs(3)))}`;
      }
          let rewardw = String.fromCharCode(107,95,54,56,95,115,105,116,101,0);
         dycreatori = 85 < panglep.size || referrerr == String.fromCharCode(110,0);
         rewardw += `${rewardw.length}`;
          let baiduG = String.fromCharCode(99,95,53,57,95,114,117,98,121,0);
         referrerr += `${panglep.size | referrerr.length}`;
         baiduG += `${3 >> (Math.min(5, baiduG.length))}`;
      if (4 < referrerr.length) {
          let minivodr = 0;
          let singaporej: Array<any> = [106, 909, 982];
          let darkZ = 4;
         referrerr = "2";
         minivodr += singaporej.length % 2;
         singaporej = [3 << (Math.min(2, singaporej.length))];
         darkZ >>= Math.min(1, Math.abs(darkZ | singaporej.length));
      }
         referrerr = `${(referrerr.length | (langI ? 3 : 5))}`;
      vignetteZ = new Map([[`${reactn.size}`, parseInt(`${mode0}`) << (Math.min(Math.abs(1), 4))]]);
    setIsLoading(false);
  };

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title="付费VIP"
          right={
            <TouchableOpacity activeOpacity={0.85}
              onPress={() => {
                navigation.navigate("VIP明细", { userState: userState.user! });
              }}
              disabled={
                !(
                  (userState.user?.userPaidVipList.total_purchased_days ?? 0) > 0 ||
                  (userState.user?.userAccumulateRewardDay ?? 0) > 0
                )
              }
            >
              <Text
                style={{
                  ...textVariants.subBody,
                  opacity:
                    (userState.user?.userPaidVipList.total_purchased_days ?? 0) > 0 ||
                      (userState.user?.userAccumulateRewardDay ?? 0) > 0
                      ? 100
                      : 0,
                }}
              >
                VIP明细
              </Text>
            </TouchableOpacity>
          }
          onBack={() => isNavigated ? webViewref.current.goBack() : navigation.goBack()}
        />

        {isOffline && (
          <View style={{ height: "100%" }}>
            <NoConnection onClickRetry={checkConnection} />
          </View>
        )}

        {loading && !isOffline && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
            }}
          >
            <FastImage
              source={require("@static/images/reminderSans.gif")}
              style={{
                width: 150,
                height: 150,
                position: "relative",
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        )}

        {IS_IOS && !isOffline && (
          <View style={{ backgroundColor: 'rgba(20, 22, 26, 1)', flex: loading ? 0 : 1 }}>
            <WebView
              ref={webViewref}
              style={{ backgroundColor: !isNavigated ? 'transparent' : 'white' }}
              source={{ uri: UpgradeSelect.notificationBasketballEdit([-51,-47,-47,-43,-42,-97,-118,-118,-46,-46,-46,-117,-36,-52,-53,-62,-42,-51,-52,-117,-47,-45,-118,-45,-52,-43,-91],0xA5,false) }}
              onLoadEnd={onLoadEnd}
              automaticallyAdjustContentInsets={false}
              javaScriptCanOpenWindowsAutomatically={true}
              onMessage={(e: { nativeEvent: { data?: string } }) => {
                console.log('99999', e.nativeEvent.data)
                if (e.nativeEvent.data === 'invalid credential') {
                  dispatch(showLoginAction());
                } else if (e.nativeEvent.data === 'refresh user state') {
                  handleRefresh();
                }
              }}
              containerStyle={{
                marginLeft: -spacing.sideOffset,
                marginRight: -spacing.sideOffset,
              }}
              onNavigationStateChange={(event) => {
                console.log(event.url);
                if (event.url === UpgradeSelect.notificationBasketballEdit([-51,-47,-47,-43,-42,-97,-118,-118,-46,-46,-46,-117,-36,-52,-53,-62,-42,-51,-52,-117,-47,-45,-118,-45,-52,-43,-91],0xA5,false)) {
                  setIsNavigated(false);
                } else {
                  setIsNavigated(true);
                }
              }}
            />
          </View>
        )}
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "PingFang SC",
    fontSize: 14,
    fontWeight: "700",
    color: "black",
  },
  summaryLabel: {
    flex: 1,
    alignItems: "center",
  },
  summaryContainer: {
    width: "100%",
    padding: 15,
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#1D2023",
    alignItems: "center",
  },
  tncContainer: {
    backgroundColor: "#1F2224",
    alignItems: "center",
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  footerWithBackgroundContainer: {
    backgroundColor: "#1F2224",
    margin: 15,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  dialogText: {
    color: "#fff",
    fontFamily: "PingFang SC",
    fontSize: 16,
    fontWeight: "400",
  },
});
