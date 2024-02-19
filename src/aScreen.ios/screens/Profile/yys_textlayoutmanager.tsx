

class RewardvideoNterstitial {
    static nalyticsDetailLibfolly = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ScreenContainer from "../../components/container/yys_matches";
import { RootStackScreenProps } from "@type";
import { useTheme } from "@react-navigation/native";
import { yysIconclosewhiteBaiduads } from "@redux";

import TitleWithBackButtonHeader from "../../components/header/yys_away_predictionloss_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { updateUserAuth } from "@redux";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/yys_librrc_zhengpian";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
} from "@utility";
import { showLoginAction } from "@redux";
import yys_giftbutton_footballtrophy from "../../../../Umeng/yys_giftbutton_footballtrophy";
import { yysHomeloading } from "@api";
import WebView from "react-native-webview";
import { yysIconplaySuggestion } from "@redux";

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const [loading, setIsLoading] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();

  
  useEffect(() => {
    yys_giftbutton_footballtrophy.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let iconplayU = 5;
    let minivodi = false;
    let penaltyshootO = String.fromCharCode(97,95,50,57,95,115,97,109,112,108,101,0);
    let combinedx = String.fromCharCode(97,102,116,101,114,95,99,95,50,56,0);
    let paginationV = 3.0;
    let commentz = true;
    let arrow9 = String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,95,108,95,54,48,0);
    let catagoryj = 3.0;
    let footballS: Array<any> = [964, 41, 960];
    let membery = 3.0;
    let graphicsL: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,97,114,105,108,121,95,108,95,52,48,0),92], [String.fromCharCode(112,107,99,114,121,112,116,95,51,95,55,0),264]]);
    let reactnativejsg = String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,121,95,51,0);
   for (let l = 0; l < 2; l++) {
      footballS.push(1);
   }
   let iconedit1 = membery >= 6943682.0;
   do {
      membery += 2;
      if (iconedit1) {
         break;
      }
   } while ((!footballS.includes(membery)) && iconedit1);
   for (let y = 0; y < 1; y++) {
       let nalyticsj = String.fromCharCode(98,97,99,107,105,110,103,95,100,95,52,57,0);
          let issubb: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,120,95,49,48,48,0),300], [String.fromCharCode(105,95,51,51,95,114,101,118,105,115,105,111,110,0),779], [String.fromCharCode(97,95,56,95,115,101,116,116,105,110,103,0),175]]);
          let libavdevicea = String.fromCharCode(99,111,109,98,101,100,95,109,95,56,49,0);
          let delegate_rb2 = 3;
         nalyticsj = `${(String.fromCharCode(115,0) == libavdevicea ? issubb.size : libavdevicea.length)}`;
         issubb.set(`${delegate_rb2}`, delegate_rb2 * delegate_rb2);
      let modal7 = 9306391 <= nalyticsj.length;
      do {
         nalyticsj = `${nalyticsj.length}`;
         if (modal7) {
            break;
         }
      } while ((nalyticsj != String.fromCharCode(50,0)) && modal7);
          let shielddonew = 4;
          let send4 = false;
         nalyticsj = "3";
         shielddonew <<= Math.min(3, Math.abs(shielddonew));
         send4 = 60 == shielddonew || 60 == shielddonew;
      commentz = 67 < iconplayU;
   }
       let sportG: Array<any> = [String.fromCharCode(115,95,49,51,95,108,111,97,115,0), String.fromCharCode(122,95,55,57,95,99,108,97,115,104,101,100,0)];
       let untickh = 2;
         sportG = [untickh + sportG.length];
      for (let d = 0; d < 3; d++) {
          let minimizeT: Map<any, any> = new Map([[String.fromCharCode(112,108,97,99,101,109,97,114,107,95,122,95,56,48,0),460], [String.fromCharCode(99,111,114,110,101,114,95,108,95,56,48,0),145], [String.fromCharCode(104,95,50,95,103,97,105,110,115,0),592]]);
         untickh += 2;
         minimizeT.set(`${minimizeT.size}`, minimizeT.size << (Math.min(Math.abs(3), 2)));
      }
      for (let e = 0; e < 1; e++) {
         untickh ^= sportG.length;
      }
      while (4 >= (sportG.length << (Math.min(Math.abs(4), 2))) && 4 >= (untickh << (Math.min(sportG.length, 5)))) {
         sportG.push(untickh);
         break;
      }
      while (sportG.length == untickh) {
         sportG = [untickh & 1];
         break;
      }
       let canvasd: Array<any> = [289, 871];
      minivodi = sportG.length == arrow9.length;
   if (!minivodi || (iconplayU & 3) <= 4) {
       let penaltygoalp: Array<any> = [58, 497, 235];
       let graphicsz = 2;
          let libfabricjnij = 0;
         penaltygoalp = [graphicsz + 3];
         libfabricjnij *= libfabricjnij + libfabricjnij;
      let scrollviewr = graphicsz <= 7264611;
      do {
         graphicsz ^= penaltygoalp.length;
         if (scrollviewr) {
            break;
         }
      } while ((penaltygoalp.includes(graphicsz)) && scrollviewr);
       let targetq = String.fromCharCode(113,95,51,52,95,109,101,109,115,101,116,0);
       let countdown8 = String.fromCharCode(115,101,114,118,105,99,101,95,52,95,49,48,48,0);
       let turndown4: Map<any, any> = new Map([[String.fromCharCode(103,114,97,100,95,50,95,56,56,0),742], [String.fromCharCode(103,101,110,101,114,105,99,95,113,95,56,49,0),389]]);
       let hejiK: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,95,121,95,55,55,0),236], [String.fromCharCode(105,110,99,114,98,108,111,98,95,117,95,49,52,0),696]]);
      let soundO = targetq.length <= 8286033;
      do {
          let combined = 0.0;
         targetq = `${hejiK.size * 1}`;
         combined /= Math.max(parseFloat(`${parseInt(`${combined}`)}`), 3);
         if (soundO) {
            break;
         }
      } while ((2 > (5 ^ hejiK.size) && 5 > (hejiK.size ^ targetq.length)) && soundO);
      for (let c = 0; c < 1; c++) {
          let modec = false;
          let iconorientationq = false;
          let profilepici = String.fromCharCode(108,105,109,105,116,101,100,95,57,95,57,48,0);
          let iconclosewhitewithbgZ = String.fromCharCode(105,95,56,54,95,109,105,114,114,111,114,101,100,0);
         countdown8 = `${(String.fromCharCode(78,0) == countdown8 ? countdown8.length : graphicsz)}`;
         modec = profilepici.length > 84;
         iconorientationq = !profilepici.includes(`${modec}`);
         iconclosewhitewithbgZ = `${((iconorientationq ? 1 : 5))}`;
      }
      minivodi = !minivodi;
   }
   let short_xH = paginationV <= 6146250.0;
   do {
      paginationV /= Math.max(4, iconplayU * 3);
      if (short_xH) {
         break;
      }
   } while ((arrow9.startsWith(`${paginationV}`)) && short_xH);
   if (1 > combinedx.length) {
       let vipsportU = 4.0;
       let megaphonep = String.fromCharCode(112,97,117,115,101,95,106,95,56,53,0);
          let loadingspinnerF = String.fromCharCode(109,95,50,51,95,108,101,103,97,99,121,0);
          let libtobA = String.fromCharCode(112,95,56,52,95,97,117,116,104,0);
         megaphonep = `${2 - megaphonep.length}`;
         loadingspinnerF += `${libtobA.length - loadingspinnerF.length}`;
         libtobA = `${(String.fromCharCode(71,0) == loadingspinnerF ? libtobA.length : loadingspinnerF.length)}`;
      while (megaphonep.length == 5) {
         megaphonep += "1";
         break;
      }
         megaphonep += `${parseInt(`${vipsportU}`)}`;
      let iconmegaphoneR = String.fromCharCode(56,51,95,52,120,116,112,118,0) == megaphonep;
      do {
         megaphonep += `${parseInt(`${vipsportU}`) ^ megaphonep.length}`;
         if (iconmegaphoneR) {
            break;
         }
      } while ((4 == (3 - megaphonep.length) || (vipsportU * 1.71) == 2.36) && iconmegaphoneR);
       let actionsR = 1.0;
         actionsR += parseFloat(`${parseInt(`${vipsportU}`) >> (Math.min(3, Math.abs(2)))}`);
      combinedx += `${parseInt(`${membery}`)}`;
   }
      membery -= parseInt(`${catagoryj}`);

    setRefreshing(true);

   let smallorangemanD = minivodi ? !minivodi : minivodi;
   do {
      minivodi = footballS.includes(iconplayU);
      if (smallorangemanD) {
         break;
      }
   } while (smallorangemanD && ((2 + iconplayU) <= 1));
   if ((iconplayU - 1) > 1) {
       let arrowrightv: Array<any> = [113, 652, 493];
       let main_eb = false;
          let matchdetailbgn = 1.0;
         main_eb = !main_eb && arrowrightv.length <= 77;
         matchdetailbgn *= parseInt(`${matchdetailbgn}`) - parseInt(`${matchdetailbgn}`);
      let sinaB = main_eb ? !main_eb : main_eb;
      do {
         main_eb = arrowrightv.includes(main_eb);
         if (sinaB) {
            break;
         }
      } while (sinaB && ((arrowrightv.length + 2) < 5 && arrowrightv.length < 2));
      if (!main_eb) {
          let backwhiteV = String.fromCharCode(99,95,55,48,95,101,120,105,116,0);
         main_eb = (11 <= ((main_eb ? 11 : backwhiteV.length) << (Math.min(backwhiteV.length, 2))));
      }
       let linkK = 3.0;
         main_eb = arrowrightv.includes(linkK);
      if (5.7 <= (linkK * 1.94) || !main_eb) {
          let ccdfbdabcabbbedb5 = String.fromCharCode(104,117,103,103,105,110,103,95,54,95,55,49,0);
          let iconcurrentmatchu: Map<any, any> = new Map([[String.fromCharCode(115,95,49,54,95,114,101,103,101,110,101,114,97,116,101,0),String.fromCharCode(99,95,55,52,95,99,111,101,102,102,0)], [String.fromCharCode(115,97,102,97,114,121,95,121,95,53,56,0),String.fromCharCode(100,105,118,105,100,101,110,100,95,106,95,54,52,0)], [String.fromCharCode(122,95,53,50,95,109,118,112,114,101,100,0),String.fromCharCode(105,95,55,49,95,97,119,97,105,116,0)]]);
          let runtimeschedulerp = 4.0;
          let cricketU = String.fromCharCode(121,95,55,55,95,101,110,117,109,101,114,97,116,101,100,0);
         main_eb = 49 <= iconcurrentmatchu.size;
         ccdfbdabcabbbedb5 += `${ccdfbdabcabbbedb5.length}`;
         iconcurrentmatchu = new Map([[cricketU, cricketU.length - parseInt(`${runtimeschedulerp}`)]]);
         runtimeschedulerp += 1;
      }
      minivodi = arrow9.includes(`${minivodi}`);
   }
       let informationB = String.fromCharCode(107,95,56,48,95,98,97,114,114,101,116,116,0);
       let benefito = String.fromCharCode(106,117,108,105,97,110,100,97,121,95,111,95,51,51,0);
      while (2 >= informationB.length) {
         benefito += `${3 >> (Math.min(3, informationB.length))}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         informationB += "2";
      }
      if (informationB.endsWith(benefito)) {
         benefito = `${(String.fromCharCode(110,0) == benefito ? informationB.length : benefito.length)}`;
      }
         benefito += `${(benefito == String.fromCharCode(78,0) ? informationB.length : benefito.length)}`;
         informationB += `${benefito.length}`;
       let yellowP: Array<any> = [56, 876, 592];
       let activityA: Array<any> = [String.fromCharCode(122,95,54,52,95,113,112,101,108,100,115,112,0), String.fromCharCode(110,95,52,54,95,103,97,109,101,115,0), String.fromCharCode(119,95,51,53,95,98,117,102,102,101,114,101,118,101,110,116,0)];
      catagoryj *= parseFloat(`${footballS.length ^ 3}`);
   for (let u = 0; u < 1; u++) {
       let iconsharefriendsh = 2.0;
       let becomeT: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,97,116,111,114,95,119,95,57,50,0),String.fromCharCode(115,117,98,106,95,104,95,57,0)], [String.fromCharCode(113,95,56,50,95,100,120,110,100,99,0),String.fromCharCode(99,111,100,101,99,105,100,95,120,95,53,51,0)], [String.fromCharCode(116,95,54,51,95,110,97,116,105,118,101,0),String.fromCharCode(117,95,50,56,95,108,97,99,105,110,103,0)]]);
       let imagenetworkerr9 = String.fromCharCode(100,95,49,48,48,95,108,101,97,118,101,0);
       let teamk = 2.0;
       let textinputy = String.fromCharCode(106,95,52,52,95,103,108,111,98,97,108,115,0);
          let iconarrowrightorangel: Array<any> = [String.fromCharCode(98,95,54,52,95,99,114,101,97,116,111,114,0), String.fromCharCode(122,95,53,49,95,97,112,109,116,101,115,116,0)];
          let referrerv = 0;
         iconsharefriendsh *= parseFloat(`${1 << (Math.min(Math.abs(referrerv), 4))}`);
         iconarrowrightorangel = [iconarrowrightorangel.length ^ iconarrowrightorangel.length];
         referrerv >>= Math.min(3, Math.abs(1 >> (Math.min(5, iconarrowrightorangel.length))));
      while (teamk > parseFloat(`${imagenetworkerr9.length}`)) {
         teamk += parseFloat(`${parseInt(`${iconsharefriendsh}`) / 2}`);
         break;
      }
          let whitebellI = 2;
         iconsharefriendsh *= parseFloat(`${becomeT.size}`);
         whitebellI &= whitebellI - whitebellI;
         imagenetworkerr9 = `${parseInt(`${teamk}`)}`;
         iconsharefriendsh /= Math.max(parseFloat(`${parseInt(`${teamk}`)}`), 4);
         textinputy = `${parseInt(`${iconsharefriendsh}`) - 1}`;
      while (3.8 < (iconsharefriendsh / 4.20) && 3.31 < (teamk / (Math.max(4.20, 1)))) {
          let rewardN = String.fromCharCode(97,116,111,109,105,99,111,112,115,95,112,95,54,0);
          let watchnowbg0 = 5;
         iconsharefriendsh /= Math.max(1, parseFloat(`${becomeT.size}`));
         rewardN = `${rewardN.length | 2}`;
         watchnowbg0 >>= Math.min(Math.abs(rewardN.length | watchnowbg0), 2);
         break;
      }
         textinputy = `${(textinputy == String.fromCharCode(89,0) ? textinputy.length : imagenetworkerr9.length)}`;
          let penaltymatchiconU = String.fromCharCode(109,101,109,99,112,121,95,106,95,51,51,0);
         iconsharefriendsh /= Math.max(4, parseFloat(`${becomeT.size * 2}`));
         penaltymatchiconU = `${(penaltymatchiconU == String.fromCharCode(110,0) ? penaltymatchiconU.length : penaltymatchiconU.length)}`;
         imagenetworkerr9 = `${2 / (Math.max(6, parseInt(`${iconsharefriendsh}`)))}`;
         teamk *= parseFloat(`${2}`);
       let orangedownarrow7 = String.fromCharCode(102,111,108,100,101,114,95,100,95,55,52,0);
         imagenetworkerr9 = `${2 - parseInt(`${teamk}`)}`;
          let unselectedi = 2.0;
          let defaultlogoZ: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,122,105,112,102,0),String.fromCharCode(113,95,56,57,95,109,97,114,115,104,97,108,0)], [String.fromCharCode(116,111,112,109,111,115,116,95,55,95,53,54,0),String.fromCharCode(103,95,57,49,95,110,117,109,112,97,100,0)]]);
          let thumbnailW = String.fromCharCode(115,109,111,111,116,104,105,110,103,95,102,95,53,53,0);
         imagenetworkerr9 += `${1 ^ parseInt(`${iconsharefriendsh}`)}`;
         unselectedi *= parseFloat(`${defaultlogoZ.size - 3}`);
         defaultlogoZ = new Map([[`${defaultlogoZ.size}`, 2]]);
         thumbnailW = `${parseInt(`${unselectedi}`) ^ defaultlogoZ.size}`;
       let twitterJ = 5.0;
       let iconclosewhitewithbgp = 4.0;
      iconplayU <<= Math.min(Math.abs(parseInt(`${membery}`)), 2);
   }
   if (!commentz || penaltyshootO.length == 4) {
      penaltyshootO = `${(parseInt(`${membery}`) >> (Math.min(4, Math.abs((commentz ? 4 : 3)))))}`;
   }
   let iconpipexpandT = commentz ? !commentz : commentz;
   do {
      commentz = !minivodi;
      if (iconpipexpandT) {
         break;
      }
   } while ((1.79 == (catagoryj + 2.9) && 2.9 == catagoryj) && iconpipexpandT);
   for (let q = 0; q < 2; q++) {
      footballS = [2];
   }
   for (let i = 0; i < 1; i++) {
      paginationV /= Math.max(iconplayU, 1);
   }
    await refreshUserState();

   let disconnectedlogoJ = combinedx == String.fromCharCode(49,111,102,105,111,0);
   do {
      combinedx = `${(String.fromCharCode(114,0) == combinedx ? parseInt(`${paginationV}`) : combinedx.length)}`;
      if (disconnectedlogoJ) {
         break;
      }
   } while ((arrow9.length <= 1) && disconnectedlogoJ);
       let aboutr: Map<any, any> = new Map([[String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,112,95,55,53,0),true ], [String.fromCharCode(116,95,54,49,95,98,105,110,98,110,0),true ]]);
       let shirtC = String.fromCharCode(115,95,55,52,95,99,108,111,115,101,99,98,0);
      for (let p = 0; p < 1; p++) {
         shirtC = `${shirtC.length}`;
      }
         aboutr.set(shirtC, 3);
      let saveb = 9606423 <= aboutr.size;
      do {
         aboutr = new Map([[`${aboutr.size}`, shirtC.length]]);
         if (saveb) {
            break;
         }
      } while (saveb && ((shirtC.length / 1) > 4 && 4 > (1 / (Math.max(4, shirtC.length)))));
          let theme1 = 1;
          let libapminsightaH: Map<any, any> = new Map([[String.fromCharCode(107,95,55,49,95,114,101,99,111,110,105,110,116,101,114,0),442], [String.fromCharCode(112,95,52,54,95,116,111,116,97,108,115,0),175], [String.fromCharCode(100,101,108,111,99,97,116,101,95,121,95,50,51,0),740]]);
          let whitebellT = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,48,95,51,55,0);
         aboutr.set(whitebellT, whitebellT.length & aboutr.size);
         theme1 -= 2;
         libapminsightaH = new Map([[`${libapminsightaH.size}`, theme1]]);
         shirtC += `${aboutr.size}`;
          let libreactnativeblobL = String.fromCharCode(117,95,50,56,95,108,105,110,101,0);
          let libreactnativeblobE = String.fromCharCode(120,95,53,49,95,105,110,99,111,109,105,110,103,0);
          let leagueK = 0.0;
         aboutr.set(`${leagueK}`, libreactnativeblobL.length % 3);
         libreactnativeblobL = `${libreactnativeblobE.length}`;
         libreactnativeblobE = `${(String.fromCharCode(70,0) == libreactnativeblobE ? libreactnativeblobE.length : libreactnativeblobE.length)}`;
      footballS.push(3);
   let benefiti = commentz ? !commentz : commentz;
   do {
       let clubh = false;
       let grayL = 5.0;
      let iconarrowleftw = 9313034.0 >= grayL;
      do {
         grayL /= Math.max(3, (parseInt(`${grayL}`) & (clubh ? 1 : 4)));
         if (iconarrowleftw) {
            break;
         }
      } while ((grayL < 2.74 || (2.74 - grayL) < 3.97) && iconarrowleftw);
         grayL -= parseInt(`${grayL}`) * 1;
      for (let c = 0; c < 1; c++) {
         grayL *= parseInt(`${grayL}`) << (Math.min(3, Math.abs(1)));
      }
         grayL += ((clubh ? 3 : 2) & parseInt(`${grayL}`));
      let profileframeL = clubh ? !clubh : clubh;
      do {
         clubh = !clubh;
         if (profileframeL) {
            break;
         }
      } while (profileframeL && (!clubh));
      let shielddoneY = clubh ? !clubh : clubh;
      do {
         clubh = grayL == 61.0;
         if (shielddoneY) {
            break;
         }
      } while (shielddoneY && (4.38 < grayL));
      commentz = String.fromCharCode(57,0) == combinedx;
      if (benefiti) {
         break;
      }
   } while (benefiti && (2 >= penaltyshootO.length && !commentz));
   for (let e = 0; e < 1; e++) {
       let emptyV = 2.0;
       let chatroombackgroundd: Array<any> = [String.fromCharCode(102,102,117,114,108,95,115,95,54,52,0), String.fromCharCode(103,95,54,55,95,109,112,101,103,118,105,100,101,111,100,101,99,0), String.fromCharCode(107,95,54,50,95,102,114,101,101,102,111,114,109,0)];
       let fullscreenminI = String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,95,122,95,52,52,0);
       let shrunkp = 1.0;
      for (let t = 0; t < 2; t++) {
         chatroombackgroundd.push(parseInt(`${emptyV}`) >> (Math.min(3, Math.abs(2))));
      }
         shrunkp *= parseFloat(`${chatroombackgroundd.length}`);
      for (let q = 0; q < 2; q++) {
         chatroombackgroundd.push(1);
      }
         chatroombackgroundd = [fullscreenminI.length << (Math.min(4, Math.abs(parseInt(`${emptyV}`))))];
      if ((parseInt(`${shrunkp}`) / (Math.max(chatroombackgroundd.length, 8))) == 3 && 3.50 == (shrunkp / (Math.max(parseFloat(`${chatroombackgroundd.length}`), 2)))) {
         chatroombackgroundd = [parseInt(`${shrunkp}`)];
      }
      while ((parseInt(`${emptyV}`) - chatroombackgroundd.length) > 2 || (emptyV - chatroombackgroundd.length) > 1.60) {
         emptyV += parseInt(`${emptyV}`) << (Math.min(4, Math.abs(1)));
         break;
      }
      while (2.99 < shrunkp) {
          let security6 = 4;
          let windg = 4.0;
          let iconbellactives = String.fromCharCode(104,95,51,95,121,117,118,112,99,0);
          let indexZ = String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,101,95,50,56,0);
          let shirtG = 4.0;
         chatroombackgroundd.push(indexZ.length);
         security6 >>= Math.min(Math.abs(parseInt(`${windg}`) % 1), 1);
         windg *= (String.fromCharCode(89,0) == iconbellactives ? parseInt(`${shirtG}`) : iconbellactives.length);
         indexZ = `${parseInt(`${shirtG}`)}`;
         break;
      }
       let libreanimated6 = false;
       let notificationC = false;
       let heart_ = 0;
          let mbsplashM = true;
          let langkeyL: Map<any, any> = new Map([[String.fromCharCode(114,95,53,53,95,117,110,114,101,103,105,115,116,101,114,101,100,0),true ], [String.fromCharCode(97,95,49,55,95,97,108,101,114,116,0),false ], [String.fromCharCode(102,111,114,119,97,114,100,115,95,52,95,56,48,0),true ]]);
         fullscreenminI = `${parseInt(`${shrunkp}`) | chatroombackgroundd.length}`;
         mbsplashM = langkeyL.size == 79 || !mbsplashM;
         langkeyL.set(`${mbsplashM}`, ((mbsplashM ? 1 : 4) % (Math.max(langkeyL.size, 8))));
         notificationC = (chatroombackgroundd.length + fullscreenminI.length) >= 35;
          let iconclosewhitewithbg4 = false;
          let shrink4 = String.fromCharCode(113,95,51,49,95,100,115,112,114,0);
          let iconarrowleftN = String.fromCharCode(97,95,49,56,95,120,121,119,104,0);
         heart_ += ((libreanimated6 ? 5 : 1) % (Math.max(parseInt(`${shrunkp}`), 1)));
         iconclosewhitewithbg4 = iconarrowleftN.startsWith(`${iconclosewhitewithbg4}`);
         shrink4 = `${shrink4.length & iconarrowleftN.length}`;
      footballS = [footballS.length];
   }
       let basketballT = String.fromCharCode(101,110,99,108,97,118,101,95,109,95,56,54,0);
       let watch2: Array<any> = [36, 943, 766];
         basketballT += "2";
         watch2.push((basketballT == String.fromCharCode(74,0) ? basketballT.length : watch2.length));
      while (basketballT.length == watch2.length) {
         basketballT += `${2 >> (Math.min(2, basketballT.length))}`;
         break;
      }
         watch2 = [basketballT.length >> (Math.min(Math.abs(1), 1))];
          let popupt: Array<any> = [860, 79];
         basketballT += `${popupt.length / 2}`;
       let calendarQ = String.fromCharCode(115,101,115,115,105,111,110,115,95,101,95,55,50,0);
      membery *= 3;
       let completeU = 0;
       let interstitialJ: Array<any> = [String.fromCharCode(99,114,108,105,115,115,117,101,114,95,112,95,50,51,0), String.fromCharCode(101,108,115,101,95,114,95,52,49,0), String.fromCharCode(97,109,114,110,98,100,97,116,97,95,122,95,50,56,0)];
         completeU *= 1;
         completeU %= Math.max(1, completeU - interstitialJ.length);
      for (let r = 0; r < 3; r++) {
         completeU >>= Math.min(Math.abs(completeU), 3);
      }
         interstitialJ.push(interstitialJ.length);
      for (let a = 0; a < 2; a++) {
         completeU |= 2 ^ completeU;
      }
      for (let a = 0; a < 2; a++) {
          let episodeI = 1;
          let shootK: Map<any, any> = new Map([[String.fromCharCode(122,95,52,56,95,99,111,109,98,105,110,97,116,111,114,0),722], [String.fromCharCode(115,97,102,101,95,111,95,54,52,0),170], [String.fromCharCode(102,108,97,116,110,101,115,115,95,51,95,57,57,0),672]]);
         interstitialJ.push(shootK.size * 1);
         episodeI &= episodeI;
         shootK.set(`${episodeI}`, episodeI & episodeI);
      }
      iconplayU += parseInt(`${paginationV}`) * graphicsL.size;
   while (3 < combinedx.length) {
       let injuryj = 2.0;
      let statsnomoredata6 = injuryj >= 9235190.0;
      do {
         injuryj *= parseInt(`${injuryj}`) | parseInt(`${injuryj}`);
         if (statsnomoredata6) {
            break;
         }
      } while (statsnomoredata6 && (5.99 >= (injuryj + injuryj) || 3.3 >= (injuryj + 5.99)));
      if (4.62 < (injuryj - 3.22)) {
          let completea = String.fromCharCode(105,100,99,116,120,95,117,95,52,50,0);
         injuryj -= completea.length >> (Math.min(2, Math.abs(parseInt(`${injuryj}`))));
      }
         injuryj -= parseInt(`${injuryj}`) - parseInt(`${injuryj}`);
      penaltyshootO = "1";
      break;
   }
   while ((footballS.length % 3) > 2) {
       let libapminsightai = 1;
       let detailsk = 3;
      let episodeC = detailsk >= 9556300;
      do {
          let shootyesgoala = 4.0;
          let subsT = String.fromCharCode(113,116,112,97,108,101,116,116,101,95,121,95,51,0);
          let chatroombackgroundx = String.fromCharCode(114,95,56,95,115,99,111,114,101,0);
          let dycreatorx = 4;
          let yellowC = 1.0;
         detailsk <<= Math.min(1, Math.abs(2));
         shootyesgoala *= dycreatorx | 3;
         subsT += `${dycreatorx | subsT.length}`;
         chatroombackgroundx = "2";
         yellowC += parseFloat(`${1}`);
         if (episodeC) {
            break;
         }
      } while (episodeC && (3 <= (detailsk * libapminsightai)));
      if (4 >= (detailsk >> (Math.min(Math.abs(1), 3)))) {
         libapminsightai ^= detailsk;
      }
         libapminsightai -= detailsk ^ libapminsightai;
      for (let i = 0; i < 3; i++) {
          let taiwanj = String.fromCharCode(103,95,54,50,95,102,97,107,101,0);
          let baiduE: Map<any, any> = new Map([[String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,108,95,55,48,0),686], [String.fromCharCode(98,95,57,53,95,99,111,108,115,0),157]]);
         detailsk ^= detailsk;
         taiwanj = "1";
         baiduE = new Map([[`${baiduE.size}`, baiduE.size]]);
      }
          let result_ = String.fromCharCode(122,95,52,56,95,115,105,103,110,101,100,0);
         libapminsightai += libapminsightai - 2;
         result_ = `${1 / (Math.max(4, result_.length))}`;
         detailsk &= libapminsightai >> (Math.min(Math.abs(detailsk), 1));
      minivodi = footballS.includes(catagoryj);
      break;
   }
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let libhermes5 = String.fromCharCode(103,95,51,53,0);
    let iconbellactiveM = 4.0;
    let sportsh = 5;
    let taiwanZ: Map<any, any> = new Map([[String.fromCharCode(97,95,56,49,95,98,101,99,97,109,101,0),589], [String.fromCharCode(100,95,50,48,95,100,111,103,0),501]]);
    let tempnodatagifm: Array<any> = [370, 937, 485];
    let string4 = 4.0;
    let homeY = 4;
    let philippinesd: Array<any> = [441, 57, 711];
    let largebrightnessu = 5.0;
    let defaultbasketballbg4 = String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,122,95,56,49,0);
    let refreshborderlessZ = String.fromCharCode(102,95,53,49,95,112,114,101,100,120,0);
    let redcirclebge = 4.0;
    let nativeexd = 1.0;
       let whistlen = true;
      if (!whistlen) {
          let release_7d = 4.0;
          let privatechatbge: Array<any> = [273, 627, 750];
         whistlen = privatechatbge.includes(whistlen);
         release_7d += parseFloat(`${parseInt(`${release_7d}`)}`);
         privatechatbge.push(3 ^ parseInt(`${release_7d}`));
      }
      for (let j = 0; j < 3; j++) {
         whistlen = !whistlen;
      }
       let gifgoalbgJ: Map<any, any> = new Map([[String.fromCharCode(119,100,108,102,99,110,95,98,95,56,55,0),265], [String.fromCharCode(97,95,50,50,95,100,105,114,110,97,109,101,0),469], [String.fromCharCode(103,114,97,98,95,98,95,55,49,0),339]]);
       let shootD: Map<any, any> = new Map([[String.fromCharCode(119,95,50,50,95,115,117,112,101,114,110,111,100,101,0),String.fromCharCode(115,95,57,50,95,97,110,121,0)], [String.fromCharCode(101,99,116,97,110,103,108,101,95,50,95,57,53,0),String.fromCharCode(104,105,115,116,111,114,105,101,115,95,122,95,54,49,0)], [String.fromCharCode(99,95,54,95,115,101,115,115,105,111,110,115,0),String.fromCharCode(114,101,97,99,104,97,98,105,108,105,116,121,95,52,95,53,51,0)]]);
      refreshborderlessZ = `${homeY / 3}`;
   if (!defaultbasketballbg4.endsWith(`${redcirclebge}`)) {
      redcirclebge *= 2 << (Math.min(Math.abs(homeY), 4));
   }
      tempnodatagifm = [3];
      iconbellactiveM -= 2 % (Math.max(4, refreshborderlessZ.length));
   if (refreshborderlessZ.endsWith(`${taiwanZ.size}`)) {
       let footballfield9 = 3;
       let animationV = false;
       let default_knh = 5.0;
       let bridgeL = 1.0;
       let iconclosewhitewithbgt = true;
       let headerM = true;
      for (let t = 0; t < 3; t++) {
          let nexto = String.fromCharCode(115,112,97,99,101,115,95,55,95,57,51,0);
          let mimew: Array<any> = [863, 5, 990];
          let baseline4 = 5.0;
          let buffer0 = String.fromCharCode(117,112,112,101,114,95,98,95,49,55,0);
         iconclosewhitewithbgt = !animationV;
         nexto = `${(String.fromCharCode(110,0) == nexto ? nexto.length : mimew.length)}`;
         mimew = [mimew.length];
         baseline4 -= nexto.length;
         buffer0 += "3";
      }
          let elementsX = 2.0;
          let shootnogoalv = 5;
         footballfield9 |= ((iconclosewhitewithbgt ? 2 : 4) & (headerM ? 2 : 1));
         elementsX += 3;
         shootnogoalv ^= parseInt(`${elementsX}`) * shootnogoalv;
      while (headerM && iconclosewhitewithbgt) {
         headerM = animationV && default_knh >= 23.16;
         break;
      }
      if (1 > (footballfield9 & 1) && 4.15 > (3.57 + default_knh)) {
         default_knh *= 2;
      }
          let greyF = String.fromCharCode(100,101,109,111,100,117,108,97,116,101,95,107,95,53,49,0);
         bridgeL += greyF.length ^ parseInt(`${default_knh}`);
      let update_uU = headerM ? !headerM : headerM;
      do {
         headerM = (animationV ? headerM : !animationV);
         if (update_uU) {
            break;
         }
      } while (update_uU && (!headerM));
          let eventR = String.fromCharCode(120,95,49,52,95,112,114,105,110,116,99,111,109,112,0);
         footballfield9 <<= Math.min(Math.abs(parseInt(`${default_knh}`)), 3);
         eventR += `${eventR.length >> (Math.min(4, eventR.length))}`;
      for (let j = 0; j < 2; j++) {
         iconclosewhitewithbgt = (animationV ? iconclosewhitewithbgt : animationV);
      }
         iconclosewhitewithbgt = animationV;
         default_knh -= ((animationV ? 1 : 5) | parseInt(`${default_knh}`));
      for (let p = 0; p < 1; p++) {
         iconclosewhitewithbgt = (iconclosewhitewithbgt ? !headerM : iconclosewhitewithbgt);
      }
      refreshborderlessZ += `${(defaultbasketballbg4 == String.fromCharCode(86,0) ? defaultbasketballbg4.length : footballfield9)}`;
   }
      largebrightnessu += parseFloat(`${2}`);
   let corner8 = redcirclebge <= 6349210.0;
   do {
      redcirclebge += tempnodatagifm.length ^ homeY;
      if (corner8) {
         break;
      }
   } while (corner8 && (1 <= (sportsh + 2) || (2 * sportsh) <= 4));

    const result = await yysHomeloading.getUserDetails();

   let b_managerT = defaultbasketballbg4.length >= 8260969;
   do {
      defaultbasketballbg4 = `${defaultbasketballbg4.length}`;
      if (b_managerT) {
         break;
      }
   } while (b_managerT && ((philippinesd.length % (Math.max(4, defaultbasketballbg4.length))) == 5));
       let countryW: Array<any> = [String.fromCharCode(106,95,48,95,99,108,105,112,112,105,110,103,110,111,100,101,0), String.fromCharCode(115,95,51,53,95,115,121,115,105,110,102,111,0)];
       let langL = 3.0;
       let foundR = String.fromCharCode(117,95,56,52,95,112,114,111,106,101,99,116,105,111,110,0);
          let xvodD = String.fromCharCode(106,115,116,121,112,101,95,115,95,54,54,0);
         foundR += `${parseInt(`${langL}`) - countryW.length}`;
         xvodD += "2";
          let themeh = 1.0;
         countryW = [2];
         themeh -= 1;
          let ajaxh = 4;
         countryW.push(ajaxh & foundR.length);
         langL += (String.fromCharCode(54,0) == foundR ? foundR.length : countryW.length);
         foundR += `${parseInt(`${langL}`)}`;
         countryW = [parseInt(`${langL}`) | countryW.length];
       let bootsplash2: Array<any> = [String.fromCharCode(117,95,56,53,95,115,121,110,99,97,98,108,101,0), String.fromCharCode(115,117,112,112,111,114,116,115,95,103,95,49,56,0), String.fromCharCode(115,101,109,105,98,111,108,100,95,98,95,49,48,0)];
      for (let g = 0; g < 3; g++) {
         foundR = `${foundR.length}`;
      }
          let teamj = String.fromCharCode(105,95,55,51,95,102,105,110,100,101,112,0);
          let commonS = true;
          let iconwechatj = 0.0;
         bootsplash2.push(bootsplash2.length);
         teamj = `${parseInt(`${iconwechatj}`)}`;
         commonS = teamj.length <= 53 && commonS;
         iconwechatj += parseFloat(`${2 * parseInt(`${iconwechatj}`)}`);
      philippinesd = [taiwanZ.size * 1];
   let sportR = iconbellactiveM >= 8215258.0;
   do {
      iconbellactiveM += parseInt(`${string4}`);
      if (sportR) {
         break;
      }
   } while ((iconbellactiveM > 2.71) && sportR);
       let imagewatchliveF = 3;
       let base6 = String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,95,106,95,53,52,0);
         imagewatchliveF %= Math.max(1, base6.length ^ imagewatchliveF);
      while ((imagewatchliveF & 5) == 1 && (base6.length & imagewatchliveF) == 5) {
         imagewatchliveF |= imagewatchliveF;
         break;
      }
         imagewatchliveF >>= Math.min(base6.length, 3);
      let liveendmodallogoG = 7147476 <= imagewatchliveF;
      do {
         imagewatchliveF *= 3;
         if (liveendmodallogoG) {
            break;
         }
      } while (liveendmodallogoG && (1 < (3 ^ base6.length) || 1 < (3 ^ imagewatchliveF)));
         base6 = `${base6.length}`;
      for (let f = 0; f < 2; f++) {
         base6 += `${base6.length}`;
      }
      refreshborderlessZ += `${parseInt(`${string4}`) * 1}`;
   for (let v = 0; v < 3; v++) {
      taiwanZ.set(`${homeY}`, 2);
   }
       let goallogoX = String.fromCharCode(104,116,99,112,95,54,95,52,53,0);
       let libreanimatedf = 4.0;
       let leaguedetailsbgA: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,115,95,106,95,56,55,0),678], [String.fromCharCode(105,110,116,101,108,95,110,95,50,48,0),239], [String.fromCharCode(102,111,114,105,95,105,95,52,49,0),876]]);
      if (1 > (leaguedetailsbgA.size * 5) && 3 > (leaguedetailsbgA.size / (Math.max(5, 3)))) {
         libreanimatedf *= parseFloat(`${3 * goallogoX.length}`);
      }
         leaguedetailsbgA = new Map([[`${libreanimatedf}`, goallogoX.length]]);
      let ewardedp = 7372173 <= leaguedetailsbgA.size;
      do {
         leaguedetailsbgA = new Map([[goallogoX, goallogoX.length]]);
         if (ewardedp) {
            break;
         }
      } while (ewardedp && (2 < leaguedetailsbgA.size));
       let cornershoot3: Array<any> = [14, 905];
          let anythinkQ = 5;
          let iconmegaphonef = String.fromCharCode(116,114,97,110,115,112,111,114,116,95,54,95,55,56,0);
          let popuph = String.fromCharCode(107,95,56,48,95,109,97,107,101,119,116,0);
         goallogoX += `${(String.fromCharCode(111,0) == iconmegaphonef ? iconmegaphonef.length : goallogoX.length)}`;
         anythinkQ += 1;
         popuph = `${popuph.length}`;
         cornershoot3.push(3);
      let plusH = 6036526.0 >= libreanimatedf;
      do {
         libreanimatedf += parseFloat(`${leaguedetailsbgA.size << (Math.min(Math.abs(1), 5))}`);
         if (plusH) {
            break;
         }
      } while ((Array.from(leaguedetailsbgA.keys()).includes(`${libreanimatedf}`)) && plusH);
       let datac: Array<any> = [623, 506, 324];
       let nodeG: Array<any> = [401, 107];
          let current3: Array<any> = [906, 495, 624];
         nodeG.push(current3.length << (Math.min(cornershoot3.length, 2)));
      refreshborderlessZ += `${1 | defaultbasketballbg4.length}`;
      defaultbasketballbg4 += `${parseInt(`${redcirclebge}`)}`;
    if (result == null) {

      refreshborderlessZ = `${libhermes5.length}`;
   while (5 == (libhermes5.length % (Math.max(5, 7))) && (5 * libhermes5.length) == 4) {
       let gesture5: Array<any> = [263, 671];
       let eighteenr = String.fromCharCode(105,95,49,51,95,97,108,108,111,119,0);
       let indicatorL = String.fromCharCode(119,95,50,57,95,97,98,111,118,101,0);
         gesture5 = [indicatorL.length * gesture5.length];
          let successV = 2;
          let awayteamfield7 = false;
         eighteenr = `${indicatorL.length}`;
         successV |= successV;
         awayteamfield7 = successV >= 81;
      while (3 > eighteenr.length) {
         eighteenr = `${eighteenr.length}`;
         break;
      }
      while (indicatorL == String.fromCharCode(55,0)) {
         eighteenr = `${(indicatorL == String.fromCharCode(85,0) ? indicatorL.length : gesture5.length)}`;
         break;
      }
         indicatorL += `${gesture5.length + 3}`;
          let iconplayG: Map<any, any> = new Map([[String.fromCharCode(119,95,50,56,95,115,116,114,105,115,116,97,114,116,0),975], [String.fromCharCode(109,95,56,54,95,120,109,108,115,0),576]]);
          let customC = false;
         indicatorL += `${3 % (Math.max(2, indicatorL.length))}`;
         iconplayG = new Map([[`${iconplayG.size}`, iconplayG.size]]);
         customC = (((customC ? 28 : iconplayG.size) / (Math.max(iconplayG.size, 4))) == 28);
      let agreementP = indicatorL.length >= 5636255;
      do {
         indicatorL += `${eighteenr.length << (Math.min(5, gesture5.length))}`;
         if (agreementP) {
            break;
         }
      } while (agreementP && (eighteenr != String.fromCharCode(72,0)));
      if (2 < (eighteenr.length / 2) || (gesture5.length / (Math.max(eighteenr.length, 10))) < 2) {
         gesture5.push(1);
      }
         eighteenr = "3";
      iconbellactiveM /= Math.max(3 % (Math.max(2, parseInt(`${redcirclebge}`))), 3);
      break;
   }
       let entryz = 5;
      for (let l = 0; l < 1; l++) {
         entryz -= entryz;
      }
         entryz %= Math.max(1 * entryz, 5);
      for (let g = 0; g < 2; g++) {
         entryz %= Math.max(entryz, 4);
      }
      libhermes5 += `${philippinesd.length}`;
       let homeinactiveR = String.fromCharCode(115,116,114,105,100,95,56,95,54,0);
       let progresst = String.fromCharCode(117,95,49,48,95,100,101,110,105,101,100,0);
      for (let d = 0; d < 2; d++) {
          let dataF = String.fromCharCode(114,101,119,105,110,100,95,121,95,54,55,0);
          let iconpipshrinko = 1.0;
          let defaultroombgB = 2.0;
          let quest_ = 3;
          let othermatchdetailbgG = false;
         homeinactiveR += `${((othermatchdetailbgG ? 1 : 1))}`;
         dataF = `${parseInt(`${iconpipshrinko}`) / 3}`;
         iconpipshrinko /= Math.max(parseFloat(`${3}`), 5);
         defaultroombgB *= parseFloat(`${dataF.length / 3}`);
         quest_ *= parseInt(`${iconpipshrinko}`);
         othermatchdetailbgG = 53.94 >= defaultroombgB;
      }
      let flipperq = 7125382 <= homeinactiveR.length;
      do {
          let libavformata = 1.0;
          let disconnected5 = 2;
          let libswscaleT = String.fromCharCode(100,97,116,101,116,105,109,101,95,107,95,50,57,0);
         homeinactiveR += `${libswscaleT.length}`;
         libavformata /= Math.max(parseInt(`${libavformata}`), 1);
         disconnected5 <<= Math.min(Math.abs(parseInt(`${libavformata}`)), 5);
         libswscaleT = `${disconnected5}`;
         if (flipperq) {
            break;
         }
      } while ((!homeinactiveR.includes(progresst)) && flipperq);
      let iconk = 7423034 <= homeinactiveR.length;
      do {
         homeinactiveR = `${(String.fromCharCode(88,0) == homeinactiveR ? progresst.length : homeinactiveR.length)}`;
         if (iconk) {
            break;
         }
      } while (iconk && (homeinactiveR.startsWith(`${progresst.length}`)));
      while (progresst == homeinactiveR) {
         homeinactiveR += `${homeinactiveR.length * progresst.length}`;
         break;
      }
      let reddownarrow1 = 9153053 >= progresst.length;
      do {
         progresst += `${(String.fromCharCode(120,0) == homeinactiveR ? homeinactiveR.length : progresst.length)}`;
         if (reddownarrow1) {
            break;
         }
      } while (reddownarrow1 && (progresst.startsWith(`${homeinactiveR.length}`)));
      let rewardvideoY = 9118028 <= homeinactiveR.length;
      do {
          let iconshareO: Array<any> = [367, 269];
          let libimagepipeline0 = false;
          let over5 = 4.0;
         homeinactiveR = `${((libimagepipeline0 ? 5 : 3))}`;
         iconshareO.push(iconshareO.length ^ 1);
         libimagepipeline0 = iconshareO.includes(over5);
         over5 += parseInt(`${over5}`);
         if (rewardvideoY) {
            break;
         }
      } while (rewardvideoY && (progresst != String.fromCharCode(66,0) || 2 <= homeinactiveR.length));
      taiwanZ.set(`${string4}`, tempnodatagifm.length);
   let refreshborderlessi = 8299861 >= tempnodatagifm.length;
   do {
      tempnodatagifm = [refreshborderlessZ.length];
      if (refreshborderlessi) {
         break;
      }
   } while ((string4 >= parseFloat(`${tempnodatagifm.length}`)) && refreshborderlessi);
   let configm = iconbellactiveM >= 9790676.0;
   do {
      iconbellactiveM -= tempnodatagifm.length >> (Math.min(Math.abs(1), 3));
      if (configm) {
         break;
      }
   } while (configm && (2.84 < iconbellactiveM));
   let qaagk = 6724307 >= refreshborderlessZ.length;
   do {
      refreshborderlessZ += `${(refreshborderlessZ == String.fromCharCode(84,0) ? refreshborderlessZ.length : parseInt(`${largebrightnessu}`))}`;
      if (qaagk) {
         break;
      }
   } while (qaagk && (refreshborderlessZ.startsWith(`${taiwanZ.size}`)));
      return;
    }

    await dispatch(updateUserAuth(result));

       let mode1 = 1.0;
       let mbnativeadvancedV = false;
         mbnativeadvancedV = mode1 > 29.28;
          let yellowscoreball9 = String.fromCharCode(113,95,52,95,99,97,108,99,117,97,108,116,101,0);
          let rnewsK = String.fromCharCode(100,101,115,99,101,110,116,95,99,95,53,48,0);
         mode1 -= parseFloat(`${rnewsK.length - 1}`);
         yellowscoreball9 = `${3 << (Math.min(2, yellowscoreball9.length))}`;
         rnewsK += "3";
      if (mbnativeadvancedV) {
         mbnativeadvancedV = mode1 > 12.28;
      }
      for (let o = 0; o < 3; o++) {
         mbnativeadvancedV = 25.92 >= mode1 || !mbnativeadvancedV;
      }
         mbnativeadvancedV = !mbnativeadvancedV || mode1 >= 42.68;
      if (3.60 > (3.89 + mode1) || mode1 > 3.89) {
         mode1 *= parseFloat(`${parseInt(`${mode1}`) - 2}`);
      }
      redcirclebge *= 2 ^ defaultbasketballbg4.length;
      libhermes5 += `${1 | tempnodatagifm.length}`;
   for (let q = 0; q < 3; q++) {
      iconbellactiveM += tempnodatagifm.length & 1;
   }
      tempnodatagifm.push(sportsh & parseInt(`${iconbellactiveM}`));
   let iconsettingC = 7058182.0 >= string4;
   do {
       let iconpipexpandl = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,103,95,53,53,0);
       let infor = 3.0;
       let statisticsactiveK = String.fromCharCode(115,95,53,54,95,97,115,101,108,101,99,116,0);
       let floaterv = 3.0;
         infor /= Math.max(statisticsactiveK.length - iconpipexpandl.length, 5);
         floaterv -= statisticsactiveK.length << (Math.min(Math.abs(2), 1));
         statisticsactiveK = `${parseInt(`${floaterv}`) & parseInt(`${infor}`)}`;
       let modelsW = 2;
         floaterv /= Math.max(2, (String.fromCharCode(78,0) == iconpipexpandl ? parseInt(`${floaterv}`) : iconpipexpandl.length));
          let valuesL = 5.0;
          let resultb: Array<any> = [435, 324, 633];
          let ewardedk = String.fromCharCode(118,95,54,56,95,100,117,97,108,0);
         iconpipexpandl = `${iconpipexpandl.length & ewardedk.length}`;
         valuesL += parseFloat(`${parseInt(`${valuesL}`)}`);
         resultb.push(3);
         ewardedk += `${3 / (Math.max(parseInt(`${valuesL}`), 2))}`;
       let scorew = true;
       let iconnotificationnewp = false;
      let typingD = 8268117 <= iconpipexpandl.length;
      do {
         iconpipexpandl = `${((scorew ? 3 : 1))}`;
         if (typingD) {
            break;
         }
      } while (typingD && (3 == iconpipexpandl.length && scorew));
      for (let w = 0; w < 1; w++) {
          let colorsq = 2.0;
          let iconclosewhiteD = String.fromCharCode(102,95,52,54,95,102,105,108,101,102,117,110,99,0);
         iconnotificationnewp = colorsq <= 22.35;
         colorsq /= Math.max(2, parseFloat(`${2 >> (Math.min(4, iconclosewhiteD.length))}`));
         iconclosewhiteD += "1";
      }
      let themer = statisticsactiveK == String.fromCharCode(50,102,54,116,0);
      do {
         statisticsactiveK += `${iconpipexpandl.length | 1}`;
         if (themer) {
            break;
         }
      } while ((!statisticsactiveK.endsWith(iconpipexpandl)) && themer);
      while (1 < iconpipexpandl.length) {
          let iconscheduley: Array<any> = [86, 255];
          let relatedl = String.fromCharCode(110,95,50,49,95,102,105,110,97,108,105,122,105,110,103,0);
          let orangeuparrows = String.fromCharCode(116,95,51,57,95,99,97,118,115,100,115,112,0);
          let acceptedZ = String.fromCharCode(122,95,55,48,95,116,114,117,115,116,101,100,0);
          let livenodatabgimgz = 2.0;
         iconpipexpandl += "3";
         iconscheduley = [iconscheduley.length];
         relatedl = "1";
         orangeuparrows = `${iconscheduley.length}`;
         acceptedZ = `${(acceptedZ == String.fromCharCode(119,0) ? acceptedZ.length : parseInt(`${livenodatabgimgz}`))}`;
         livenodatabgimgz += acceptedZ.length ^ parseInt(`${livenodatabgimgz}`);
         break;
      }
      if (1 == modelsW) {
         modelsW %= Math.max(3, 5);
      }
      string4 += parseFloat(`${statisticsactiveK.length << (Math.min(1, libhermes5.length))}`);
      if (iconsettingC) {
         break;
      }
   } while (((parseFloat(`${homeY}`) * string4) > 5.74 || 2 > (homeY & 1)) && iconsettingC);
   for (let t = 0; t < 2; t++) {
      redcirclebge += philippinesd.length << (Math.min(Math.abs(1), 3));
   }
   if (iconbellactiveM == homeY) {
      homeY -= libhermes5.length << (Math.min(2, tempnodatagifm.length));
   }
    return;
  };

  const checkConnection = async () => {
       let ecopy_s5 = 4;
    let adultx = 1.0;
    let libcxxcomponentsK: Map<any, any> = new Map([[String.fromCharCode(102,95,56,54,95,115,119,105,116,99,104,97,98,108,101,0),false ], [String.fromCharCode(115,95,54,51,95,115,117,98,109,105,116,0),false ]]);
    let shrinkq = 2.0;
    let libavdevice6 = String.fromCharCode(107,95,53,95,107,101,121,118,97,108,0);
    let sharewhiteQ = 4.0;
    let inouttargetredG: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,101,95,103,95,49,54,0),String.fromCharCode(122,95,52,57,95,116,111,111,108,115,0)], [String.fromCharCode(100,101,97,99,116,95,57,95,57,48,0),String.fromCharCode(113,117,97,110,116,105,122,101,100,95,111,95,57,53,0)], [String.fromCharCode(105,95,53,56,95,99,109,97,107,101,0),String.fromCharCode(102,105,110,97,108,105,115,101,114,95,53,95,49,48,48,0)]]);
    let register_cmQ = String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,116,95,56,53,0);
    let values5 = 3;
       let hongkongB = 1.0;
       let leakcheckerG = String.fromCharCode(103,108,111,98,97,108,108,121,95,99,95,54,53,0);
       let base6 = false;
      while (!leakcheckerG.includes(`${base6}`)) {
          let baidua = String.fromCharCode(122,95,54,57,95,112,114,105,110,99,105,112,97,108,0);
         leakcheckerG += "1";
         baidua = "1";
         break;
      }
         hongkongB /= Math.max(2, (3 << (Math.min(1, Math.abs((base6 ? 1 : 4))))));
       let iconorientationL = 4.0;
       let ajaxq = 4.0;
       let roundH = String.fromCharCode(113,95,52,95,117,110,100,101,102,105,110,101,100,0);
       let splashN = String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,105,95,56,49,0);
      let libswresampleI = String.fromCharCode(111,112,110,48,53,51,95,116,56,0) == leakcheckerG;
      do {
         leakcheckerG += `${parseInt(`${ajaxq}`)}`;
         if (libswresampleI) {
            break;
         }
      } while (libswresampleI && (5.89 < iconorientationL));
         iconorientationL /= Math.max(parseFloat(`${parseInt(`${hongkongB}`) ^ 1}`), 3);
         roundH = `${parseInt(`${hongkongB}`) / 1}`;
          let searchbar7 = false;
          let themep = 5;
          let loadingB = String.fromCharCode(109,111,100,98,95,100,95,55,0);
         ajaxq /= Math.max((parseFloat(`${(searchbar7 ? 2 : 5) % (Math.max(splashN.length, 2))}`)), 1);
         searchbar7 = themep < loadingB.length;
         themep >>= Math.min(3, loadingB.length);
          let settingq = false;
          let nextv = String.fromCharCode(114,95,52,56,95,109,105,103,114,97,116,101,100,0);
          let expiredX: Map<any, any> = new Map([[String.fromCharCode(115,95,56,55,95,113,115,99,97,108,101,113,112,0),564], [String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,104,95,52,54,0),147], [String.fromCharCode(115,116,114,111,107,101,95,106,95,53,0),95]]);
         base6 = roundH == String.fromCharCode(53,0);
         settingq = 73 > expiredX.size;
         nextv += "1";
         expiredX.set(nextv, nextv.length);
      libavdevice6 += `${2 % (Math.max(8, parseInt(`${sharewhiteQ}`)))}`;
   if (sharewhiteQ == 1.4) {
       let modelss = true;
       let grayk = String.fromCharCode(106,95,57,55,95,105,110,102,0);
       let minivod9 = 5;
       let images9 = String.fromCharCode(113,95,55,54,95,101,120,116,114,101,109,101,0);
      if ((images9.length | minivod9) > 4 && (images9.length | 4) > 2) {
         minivod9 -= grayk.length;
      }
      while (5 < (5 << (Math.min(1, images9.length))) && (5 << (Math.min(4, Math.abs(minivod9)))) < 4) {
          let screenW = 0;
          let iconviewerU = String.fromCharCode(103,95,53,51,95,97,118,97,115,115,101,114,116,0);
          let latni = 2;
          let yingA = false;
          let selectedO = 5;
         minivod9 <<= Math.min(Math.abs(((yingA ? 4 : 4))), 5);
         screenW += latni;
         iconviewerU = "1";
         yingA = latni >= 59 && String.fromCharCode(89,0) == iconviewerU;
         selectedO |= selectedO * latni;
         break;
      }
       let acceptedC = 2.0;
       let detailsH = 0.0;
         grayk += "1";
      while (!modelss) {
         minivod9 /= Math.max(3, 2 << (Math.min(3, grayk.length)));
         break;
      }
          let miniX = String.fromCharCode(102,97,105,108,95,118,95,51,54,0);
          let eyeopenI = String.fromCharCode(104,105,103,104,112,111,114,116,95,49,95,57,53,0);
         minivod9 -= miniX.length | 2;
         miniX += `${eyeopenI.length << (Math.min(Math.abs(2), 4))}`;
         eyeopenI = `${eyeopenI.length + eyeopenI.length}`;
          let upgradee = String.fromCharCode(116,95,55,55,95,109,105,110,105,109,97,108,0);
          let thumbnailT = String.fromCharCode(114,95,50,55,95,112,97,105,114,105,110,103,115,0);
         images9 = `${1 / (Math.max(10, parseInt(`${acceptedC}`)))}`;
         upgradee += `${thumbnailT.length & upgradee.length}`;
         thumbnailT = `${thumbnailT.length << (Math.min(Math.abs(2), 5))}`;
      if (4 <= images9.length) {
         grayk = "1 - minivod9";
      }
      if (3 == images9.length) {
          let redirectG: Map<any, any> = new Map([[String.fromCharCode(115,95,54,48,95,119,99,104,97,114,0),409], [String.fromCharCode(105,95,50,49,95,117,99,109,112,0),359], [String.fromCharCode(108,105,98,115,119,105,102,116,95,99,95,55,57,0),519]]);
          let codeB = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,95,56,95,49,51,0);
         modelss = images9 == String.fromCharCode(74,0) && minivod9 > 11;
         redirectG.set(codeB, 3 >> (Math.min(4, codeB.length)));
      }
         images9 = "3 ^ minivod9";
      if (2.64 > (5.23 / (Math.max(2, detailsH)))) {
          let referrerk = String.fromCharCode(115,112,108,105,116,95,49,95,51,48,0);
         images9 = `${minivod9}`;
         referrerk += "3";
      }
         modelss = 48.36 == (acceptedC - detailsH);
      adultx += 3 / (Math.max(5, minivod9));
   }
       let predictionbuttonU = 0;
      while (3 < (predictionbuttonU ^ 2)) {
          let pressurex = 5.0;
         predictionbuttonU += 1;
         pressurex /= Math.max(5, parseFloat(`${3 - parseInt(`${pressurex}`)}`));
         break;
      }
         predictionbuttonU >>= Math.min(1, Math.abs(predictionbuttonU));
      while (2 < (predictionbuttonU >> (Math.min(Math.abs(5), 3))) || 1 < (predictionbuttonU >> (Math.min(Math.abs(5), 4)))) {
         predictionbuttonU &= predictionbuttonU | predictionbuttonU;
         break;
      }
      adultx += inouttargetredG.size;
      sharewhiteQ -= parseFloat(`${parseInt(`${adultx}`)}`);
       let castH = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,95,121,95,54,56,0);
       let iconcalendarU: Array<any> = [592, 461, 600];
       let privatechatbge: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,101,95,120,95,55,54,0),994], [String.fromCharCode(114,97,99,101,95,49,95,53,0),682], [String.fromCharCode(115,108,97,115,104,105,110,103,95,100,95,54,50,0),127]]);
         iconcalendarU.push(iconcalendarU.length & 1);
          let bgvipxvod0 = 5.0;
         iconcalendarU = [privatechatbge.size];
         bgvipxvod0 *= parseFloat(`${2}`);
         iconcalendarU.push((castH == String.fromCharCode(70,0) ? castH.length : iconcalendarU.length));
         iconcalendarU.push(castH.length);
         iconcalendarU.push(1);
         castH += `${iconcalendarU.length}`;
       let smallL = 2.0;
       let headerE = 0.0;
      let collectionj = iconcalendarU.length <= 8473088;
      do {
          let orangeL = 0.0;
          let stepZ = 4;
          let whitebellc = 2.0;
         iconcalendarU = [castH.length + parseInt(`${orangeL}`)];
         orangeL /= Math.max(2, parseFloat(`${3}`));
         stepZ -= parseInt(`${whitebellc}`);
         whitebellc -= 3;
         if (collectionj) {
            break;
         }
      } while ((iconcalendarU.length > 1) && collectionj);
      while ((smallL - 3.87) >= 2.47) {
         smallL *= parseFloat(`${parseInt(`${headerE}`)}`);
         break;
      }
      adultx /= Math.max(2, 1);
   let tooltips1 = values5 >= 6852678;
   do {
       let libavcodecA = String.fromCharCode(122,95,56,52,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0);
       let fileB = 3.0;
       let moduleq = 3.0;
      while (3.4 == (fileB * 1.26)) {
         libavcodecA += `${3 / (Math.max(10, parseInt(`${fileB}`)))}`;
         break;
      }
         fileB /= Math.max(4, 1 << (Math.min(3, Math.abs(parseInt(`${fileB}`)))));
      let dycreator5 = String.fromCharCode(51,48,118,56,107,120,0) == libavcodecA;
      do {
         libavcodecA += "1";
         if (dycreator5) {
            break;
         }
      } while (dycreator5 && (5 >= libavcodecA.length));
       let libbufferV = false;
       let basketballawayteamr = false;
      if (3 > libavcodecA.length) {
         libbufferV = libavcodecA.includes(`${basketballawayteamr}`);
      }
      let loginsuccessC = basketballawayteamr ? !basketballawayteamr : basketballawayteamr;
      do {
         basketballawayteamr = (!libbufferV ? !basketballawayteamr : libbufferV);
         if (loginsuccessC) {
            break;
         }
      } while (loginsuccessC && (libbufferV));
         libbufferV = 95.97 < fileB || libbufferV;
      while (3.10 < moduleq) {
          let libloggerW = 1;
         moduleq -= parseFloat(`${3 ^ parseInt(`${moduleq}`)}`);
         libloggerW ^= 1;
         break;
      }
      for (let d = 0; d < 1; d++) {
         libbufferV = 59.97 >= fileB;
      }
      values5 /= Math.max(2, 5);
      if (tooltips1) {
         break;
      }
   } while ((1 == (register_cmQ.length % 3) && 3 == (values5 % (Math.max(3, register_cmQ.length)))) && tooltips1);
   if ((4 * libcxxcomponentsK.size) <= 3) {
      libavdevice6 = `${2 << (Math.min(3, Math.abs(inouttargetredG.size)))}`;
   }

    const state = await NetInfo.fetch();

      libcxxcomponentsK = new Map([[`${shrinkq}`, parseInt(`${shrinkq}`) - register_cmQ.length]]);
      values5 <<= Math.min(Math.abs(3), 2);
   if (4 == (libcxxcomponentsK.size | values5) || 4 == (libcxxcomponentsK.size | values5)) {
      values5 &= parseInt(`${sharewhiteQ}`);
   }
   while (5 <= (3 + inouttargetredG.size) || (3 << (Math.min(3, Math.abs(inouttargetredG.size)))) <= 1) {
       let fillC = 1;
       let connectionA: Map<any, any> = new Map([[String.fromCharCode(105,95,54,54,95,100,117,112,108,101,120,0),873], [String.fromCharCode(99,111,117,110,116,114,105,101,115,95,49,95,51,57,0),101]]);
       let leakcheckerO: Map<any, any> = new Map([[String.fromCharCode(100,101,98,117,103,103,101,114,95,57,95,50,0),462], [String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,97,95,54,48,0),152], [String.fromCharCode(102,114,97,109,101,112,111,111,108,95,111,95,55,49,0),64]]);
       let yellowredcardK = String.fromCharCode(110,111,100,101,95,54,95,57,56,0);
       let umengB = String.fromCharCode(100,95,54,57,95,116,97,114,103,101,116,101,100,0);
      if (fillC < 2) {
         connectionA = new Map([[`${leakcheckerO.size}`, connectionA.size % 1]]);
      }
       let countryb: Map<any, any> = new Map([[String.fromCharCode(99,110,111,110,99,101,95,122,95,56,51,0),255], [String.fromCharCode(101,95,50,56,95,115,108,105,112,112,97,103,101,0),926], [String.fromCharCode(121,95,56,50,95,97,103,97,116,101,0),241]]);
      for (let e = 0; e < 2; e++) {
         connectionA.set(`${connectionA.size}`, connectionA.size);
      }
         fillC &= (yellowredcardK == String.fromCharCode(83,0) ? yellowredcardK.length : leakcheckerO.size);
          let sharedQ = 5.0;
         leakcheckerO.set(`${fillC}`, parseInt(`${sharedQ}`) + fillC);
       let baselinew = 2.0;
      while (2 == (3 - yellowredcardK.length) && 3 == (3 - yellowredcardK.length)) {
         leakcheckerO = new Map([[`${leakcheckerO.size}`, leakcheckerO.size / 1]]);
         break;
      }
      let modeu = 5304470 >= leakcheckerO.size;
      do {
         leakcheckerO.set(yellowredcardK, yellowredcardK.length / 1);
         if (modeu) {
            break;
         }
      } while ((5 <= leakcheckerO.size) && modeu);
      let playlist2 = String.fromCharCode(99,105,99,122,0) == umengB;
      do {
         umengB += `${parseInt(`${baselinew}`) / 3}`;
         if (playlist2) {
            break;
         }
      } while (playlist2 && ((1 + fillC) < 1));
          let borderlessa = String.fromCharCode(100,117,112,99,108,95,56,95,55,52,0);
          let renewr = String.fromCharCode(97,95,56,49,95,100,99,111,110,108,121,0);
          let modalp: Map<any, any> = new Map([[String.fromCharCode(101,95,52,49,95,101,120,99,104,97,110,103,101,115,0),317], [String.fromCharCode(109,95,54,57,95,105,111,118,101,99,105,110,0),542], [String.fromCharCode(97,95,56,51,95,99,97,108,99,117,108,97,116,101,0),273]]);
         umengB = `${3 * umengB.length}`;
         borderlessa += `${(String.fromCharCode(111,0) == renewr ? borderlessa.length : renewr.length)}`;
         modalp = new Map([[renewr, (borderlessa == String.fromCharCode(121,0) ? borderlessa.length : renewr.length)]]);
      while (5 == (countryb.size * 2) && 1 == (2 * countryb.size)) {
         fillC >>= Math.min(3, Math.abs(2 - fillC));
         break;
      }
         fillC /= Math.max(3 >> (Math.min(1, Math.abs(leakcheckerO.size))), 5);
      while (countryb.size == umengB.length) {
         umengB = `${parseInt(`${baselinew}`) & 2}`;
         break;
      }
         countryb.set(yellowredcardK, yellowredcardK.length);
         fillC <<= Math.min(3, Math.abs(parseInt(`${baselinew}`)));
      inouttargetredG = new Map([[`${libcxxcomponentsK.size}`, connectionA.size]]);
      break;
   }
   while ((parseFloat(`${libavdevice6.length}`) - shrinkq) > 5.75 || 2 > (libavdevice6.length * 2)) {
      libavdevice6 = `${libcxxcomponentsK.size}`;
      break;
   }
   let icondefaultthumbnailN = 7460074 >= register_cmQ.length;
   do {
      register_cmQ += `${inouttargetredG.size - values5}`;
      if (icondefaultthumbnailN) {
         break;
      }
   } while (icondefaultthumbnailN && (5 <= (register_cmQ.length / 4) || 4 <= (parseInt(`${sharewhiteQ}`) / (Math.max(4, register_cmQ.length)))));
   for (let e = 0; e < 1; e++) {
      shrinkq *= parseFloat(`${parseInt(`${shrinkq}`) % 1}`);
   }
    const offline = !(state.isConnected && state.isInternetReachable);

       let o_lockG = String.fromCharCode(97,95,56,55,95,105,110,115,105,100,101,0);
       let sliderj = 2;
          let iconchatsend9 = false;
         o_lockG += `${o_lockG.length >> (Math.min(4, Math.abs(sliderj)))}`;
         iconchatsend9 = !iconchatsend9;
      for (let e = 0; e < 2; e++) {
         o_lockG = `${(o_lockG == String.fromCharCode(74,0) ? sliderj : o_lockG.length)}`;
      }
      for (let z = 0; z < 1; z++) {
         o_lockG += `${sliderj | o_lockG.length}`;
      }
          let positionfieldT = String.fromCharCode(99,95,56,49,95,97,115,115,101,115,115,109,101,110,116,0);
         o_lockG += `${(String.fromCharCode(88,0) == positionfieldT ? o_lockG.length : positionfieldT.length)}`;
         o_lockG += "2";
      if (!o_lockG.startsWith(`${sliderj}`)) {
          let middlebrightness9 = String.fromCharCode(114,95,55,56,95,99,104,97,105,110,115,0);
         sliderj -= (middlebrightness9 == String.fromCharCode(54,0) ? middlebrightness9.length : sliderj);
      }
      shrinkq /= Math.max(parseFloat(`${1}`), 2);
       let y_title6 = 0.0;
       let hometeamfieldv = String.fromCharCode(97,95,52,56,95,115,105,103,115,108,111,116,0);
       let libsentryo = false;
          let iconadslinki = String.fromCharCode(102,95,50,56,95,105,110,116,101,114,115,101,99,116,115,0);
          let logouser0 = 1.0;
          let benefitj = true;
         libsentryo = libsentryo || hometeamfieldv.length <= 54;
         iconadslinki = `${((benefitj ? 5 : 4) / 3)}`;
         logouser0 += ((benefitj ? 4 : 4) & parseInt(`${logouser0}`));
      let overW = 9446764.0 <= y_title6;
      do {
         y_title6 /= Math.max(2, (String.fromCharCode(69,0) == hometeamfieldv ? parseInt(`${y_title6}`) : hometeamfieldv.length));
         if (overW) {
            break;
         }
      } while ((!libsentryo) && overW);
      while (y_title6 <= 2.50 || (y_title6 * 2.50) <= 1.61) {
          let switch_gpT: Map<any, any> = new Map([[String.fromCharCode(115,108,111,112,101,95,120,95,56,54,0),false ], [String.fromCharCode(110,95,52,53,95,100,101,99,111,114,97,116,105,111,110,115,0),false ]]);
          let libavformat8 = String.fromCharCode(115,117,98,108,97,121,101,114,95,54,95,56,54,0);
         y_title6 *= libavformat8.length >> (Math.min(2, Math.abs(switch_gpT.size)));
         break;
      }
          let megaphoneR: Map<any, any> = new Map([[String.fromCharCode(119,95,51,51,95,116,114,97,106,101,99,116,111,114,121,0),true ], [String.fromCharCode(122,95,53,57,95,113,115,118,100,101,99,0),false ], [String.fromCharCode(110,95,49,50,95,115,117,110,114,97,115,116,0),true ]]);
          let nativemoduleE: Array<any> = [441, 972];
          let questF = 5.0;
         hometeamfieldv = `${megaphoneR.size}`;
         megaphoneR = new Map([[`${nativemoduleE.length}`, nativemoduleE.length + parseInt(`${questF}`)]]);
         questF /= Math.max(2, parseFloat(`${parseInt(`${questF}`)}`));
      while (1.27 == y_title6) {
         y_title6 *= (hometeamfieldv == String.fromCharCode(66,0) ? (libsentryo ? 1 : 2) : hometeamfieldv.length);
         break;
      }
         libsentryo = !libsentryo;
         libsentryo = hometeamfieldv.length == 30;
         hometeamfieldv = `${parseInt(`${y_title6}`) >> (Math.min(hometeamfieldv.length, 3))}`;
       let collectionf = 1;
      values5 ^= hometeamfieldv.length ^ 1;
      libcxxcomponentsK.set(`${shrinkq}`, 2 & parseInt(`${shrinkq}`));
       let langT = 2;
       let targetQ: Map<any, any> = new Map([[String.fromCharCode(98,105,116,112,108,97,110,101,95,101,95,54,50,0),875], [String.fromCharCode(97,108,112,97,95,114,95,56,0),911], [String.fromCharCode(115,104,111,119,95,119,95,53,48,0),79]]);
          let danger8 = 2.0;
         targetQ = new Map([[`${targetQ.size}`, 3]]);
         danger8 += parseFloat(`${parseInt(`${danger8}`)}`);
         langT %= Math.max(langT, 4);
      while (!Array.from(targetQ.keys()).includes(`${langT}`)) {
          let react8 = 4;
          let icont = String.fromCharCode(120,95,55,57,95,109,97,114,115,104,97,108,0);
          let yellowvideoliveu: Array<any> = [636, 314];
         targetQ = new Map([[`${yellowvideoliveu.length}`, yellowvideoliveu.length]]);
         react8 <<= Math.min(Math.abs(3), 3);
         icont += `${1 >> (Math.min(5, icont.length))}`;
         break;
      }
      for (let w = 0; w < 1; w++) {
         targetQ.set(`${langT}`, targetQ.size);
      }
      for (let h = 0; h < 1; h++) {
         langT <<= Math.min(Math.abs(langT), 1);
      }
       let spinnerN = String.fromCharCode(120,95,55,53,95,115,101,114,105,97,108,108,121,0);
      libavdevice6 += `${1 ^ parseInt(`${sharewhiteQ}`)}`;
   while (2 >= (libavdevice6.length & 2) && 1 >= (parseInt(`${sharewhiteQ}`) - 2)) {
      sharewhiteQ -= parseFloat(`${2}`);
      break;
   }
      adultx -= parseInt(`${shrinkq}`) >> (Math.min(Math.abs(parseInt(`${sharewhiteQ}`)), 1));
   for (let u = 0; u < 2; u++) {
       let emptyV = 4;
       let defaultteamK = false;
         emptyV += (emptyV - (defaultteamK ? 4 : 5));
          let predictionbuttonK = String.fromCharCode(115,116,114,105,99,109,112,95,56,95,52,0);
         emptyV |= emptyV & 3;
         predictionbuttonK = `${2 >> (Math.min(1, predictionbuttonK.length))}`;
       let android8 = false;
          let nodeG = String.fromCharCode(116,97,114,103,101,116,101,100,95,97,95,54,56,0);
          let ballq = String.fromCharCode(97,95,51,55,95,109,97,105,110,104,101,97,100,101,114,0);
         android8 = ballq.length == 90;
         nodeG = `${nodeG.length * 3}`;
         ballq = `${nodeG.length - nodeG.length}`;
      let textk = defaultteamK ? !defaultteamK : defaultteamK;
      do {
          let iconeye1 = 4.0;
          let maily = false;
         defaultteamK = emptyV > 91 && !defaultteamK;
         iconeye1 /= Math.max(3, parseInt(`${iconeye1}`) | 3);
         maily = 44.84 <= iconeye1 || !maily;
         if (textk) {
            break;
         }
      } while (textk && (2 >= (emptyV << (Math.min(Math.abs(1), 2))) || emptyV >= 1));
         defaultteamK = 42 <= emptyV || !defaultteamK;
      libcxxcomponentsK = new Map([[libavdevice6, values5 % (Math.max(8, libavdevice6.length))]]);
   }
    setIsOffline(offline);

   if (2.88 >= (shrinkq - 2.25) && 1.1 >= (2.25 - adultx)) {
       let malaysia9: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,117,110,101,109,112,116,121,0),true ], [String.fromCharCode(103,95,56,55,0),true ]]);
       let updatesj: Array<any> = [250, 504];
          let awayN: Array<any> = [197, 835];
          let thailandK = String.fromCharCode(109,97,105,110,112,97,103,101,95,51,95,50,51,0);
         malaysia9 = new Map([[`${awayN.length}`, 3 << (Math.min(4, awayN.length))]]);
         thailandK += `${thailandK.length}`;
         updatesj = [3];
      adultx += ecopy_s5 >> (Math.min(Math.abs(malaysia9.size), 3));
   }
      values5 %= Math.max(4, parseInt(`${sharewhiteQ}`));
   while (parseInt(`${adultx}`) > register_cmQ.length) {
       let statsnomoredataf = 3;
       let othermatchdetailbgt: Array<any> = [549, 145];
       let tumbnail3: Array<any> = [String.fromCharCode(100,101,102,97,117,108,116,95,111,95,55,48,0), String.fromCharCode(101,95,53,51,95,101,107,121,0), String.fromCharCode(111,114,105,103,105,110,95,109,95,52,56,0)];
      if (3 == (2 >> (Math.min(3, Math.abs(statsnomoredataf)))) && (statsnomoredataf >> (Math.min(Math.abs(2), 1))) == 1) {
         othermatchdetailbgt = [1];
      }
      if (3 == (tumbnail3.length ^ 1)) {
          let score5 = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,119,95,57,50,0);
          let progressZ: Map<any, any> = new Map([[String.fromCharCode(105,95,56,52,95,100,105,102,102,97,98,108,101,0),String.fromCharCode(114,101,99,118,95,97,95,51,53,0)], [String.fromCharCode(117,95,50,95,100,101,109,97,110,100,0),String.fromCharCode(103,95,56,56,95,112,114,101,115,115,0)], [String.fromCharCode(111,95,52,54,95,103,101,110,97,110,110,0),String.fromCharCode(98,111,110,106,111,117,114,95,116,95,56,48,0)]]);
          let filledx = String.fromCharCode(104,111,108,100,105,110,103,95,109,95,55,49,0);
          let rootN = 2.0;
         othermatchdetailbgt.push((String.fromCharCode(83,0) == filledx ? tumbnail3.length : filledx.length));
         score5 += `${progressZ.size << (Math.min(Math.abs(3), 4))}`;
         progressZ.set(`${rootN}`, 3);
         rootN -= (score5 == String.fromCharCode(87,0) ? score5.length : progressZ.size);
      }
         statsnomoredataf /= Math.max(3 ^ statsnomoredataf, 1);
         statsnomoredataf |= 3 | othermatchdetailbgt.length;
      let release_dd5 = othermatchdetailbgt.length >= 5524602;
      do {
          let sellmathbackgroundr = true;
          let inouttargetredW: Map<any, any> = new Map([[String.fromCharCode(108,105,110,103,101,114,95,56,95,52,57,0),358], [String.fromCharCode(116,95,49,52,95,114,101,99,117,114,115,105,118,101,108,121,0),909], [String.fromCharCode(118,95,52,48,95,107,105,110,100,115,0),862]]);
          let greyarrowupO = String.fromCharCode(107,95,54,51,95,112,105,112,101,108,105,110,105,110,103,0);
          let iconwatchnowe = String.fromCharCode(108,111,103,95,49,95,57,0);
         othermatchdetailbgt = [1 * inouttargetredW.size];
         sellmathbackgroundr = greyarrowupO.length == 9 && !sellmathbackgroundr;
         inouttargetredW.set(iconwatchnowe, iconwatchnowe.length << (Math.min(Math.abs(1), 2)));
         greyarrowupO = `${greyarrowupO.length}`;
         if (release_dd5) {
            break;
         }
      } while (((othermatchdetailbgt.length + 2) < 3 && (2 + othermatchdetailbgt.length) < 1) && release_dd5);
      adultx /= Math.max(ecopy_s5, 3);
      break;
   }
   if ((1.58 / (Math.max(3, sharewhiteQ))) == 4.59) {
      sharewhiteQ -= parseFloat(`${parseInt(`${shrinkq}`) - 3}`);
   }
       let container7 = true;
      let yellowl = container7 ? !container7 : container7;
      do {
         container7 = container7 || !container7;
         if (yellowl) {
            break;
         }
      } while ((!container7 && !container7) && yellowl);
         container7 = (!container7 ? !container7 : container7);
      let backiconE = container7 ? !container7 : container7;
      do {
         container7 = !container7 || !container7;
         if (backiconE) {
            break;
         }
      } while (backiconE && (!container7 || container7));
      shrinkq /= Math.max(parseFloat(`${parseInt(`${shrinkq}`)}`), 1);
      sharewhiteQ += parseFloat(`${parseInt(`${sharewhiteQ}`) ^ 1}`);
      ecopy_s5 &= values5;
    if (!offline) {

   let nterstitialf = 9275377.0 <= sharewhiteQ;
   do {
      sharewhiteQ += parseFloat(`${libavdevice6.length | parseInt(`${shrinkq}`)}`);
      if (nterstitialf) {
         break;
      }
   } while ((5.63 == sharewhiteQ) && nterstitialf);
   while (ecopy_s5 >= shrinkq) {
       let circle4 = String.fromCharCode(105,95,49,49,95,100,117,112,108,105,99,97,116,101,0);
         circle4 = `${(circle4 == String.fromCharCode(120,0) ? circle4.length : circle4.length)}`;
      while (circle4.length >= 1) {
          let hongkongs = String.fromCharCode(110,95,51,56,95,104,97,114,112,101,110,0);
         circle4 += `${circle4.length << (Math.min(Math.abs(2), 3))}`;
         hongkongs = "1";
         break;
      }
         circle4 += `${circle4.length}`;
      shrinkq *= parseFloat(`${inouttargetredG.size}`);
      break;
   }
   while (2 >= (1 ^ inouttargetredG.size) || (parseInt(`${shrinkq}`) * inouttargetredG.size) >= 1) {
       let pageu = 0.0;
       let audienceb = String.fromCharCode(115,95,50,52,95,112,105,120,101,108,115,0);
       let type_7i = String.fromCharCode(114,95,50,49,95,102,105,118,101,0);
       let mbbannerq = 5.0;
       let defaultroombgy = String.fromCharCode(109,101,108,116,95,100,95,50,56,0);
      let userk = mbbannerq >= 5944524.0;
      do {
         mbbannerq += parseFloat(`${2}`);
         if (userk) {
            break;
         }
      } while (userk && (defaultroombgy.endsWith(`${mbbannerq}`)));
         type_7i += `${(audienceb == String.fromCharCode(56,0) ? audienceb.length : parseInt(`${pageu}`))}`;
         defaultroombgy = "3";
         defaultroombgy += `${parseInt(`${pageu}`)}`;
         type_7i += `${(defaultroombgy == String.fromCharCode(112,0) ? defaultroombgy.length : parseInt(`${mbbannerq}`))}`;
         pageu -= 3;
       let iconk: Map<any, any> = new Map([[String.fromCharCode(103,95,54,55,95,106,112,103,0),false ], [String.fromCharCode(114,95,51,53,95,110,117,109,101,114,105,102,121,0),true ]]);
      let imagemanagerM = 5894312.0 <= mbbannerq;
      do {
         mbbannerq -= parseFloat(`${defaultroombgy.length}`);
         if (imagemanagerM) {
            break;
         }
      } while (imagemanagerM && (mbbannerq > parseFloat(`${defaultroombgy.length}`)));
          let unselectede = String.fromCharCode(107,95,57,95,105,110,116,101,114,114,97,99,116,105,118,101,0);
         type_7i = `${3 | audienceb.length}`;
         unselectede += `${(unselectede == String.fromCharCode(68,0) ? unselectede.length : unselectede.length)}`;
          let signinupo = String.fromCharCode(101,95,57,54,95,105,99,111,110,105,99,0);
          let chinasameC = String.fromCharCode(112,97,121,108,111,97,100,115,95,114,95,54,53,0);
         iconk.set(`${mbbannerq}`, parseInt(`${mbbannerq}`) | type_7i.length);
         signinupo = `${chinasameC.length}`;
         chinasameC = `${signinupo.length ^ chinasameC.length}`;
      let iconclosewhitewithbgl = 7701831.0 >= mbbannerq;
      do {
         mbbannerq /= Math.max(parseFloat(`${parseInt(`${mbbannerq}`)}`), 2);
         if (iconclosewhitewithbgl) {
            break;
         }
      } while (((type_7i.length % 1) < 5 && 2.45 < (parseFloat(`${type_7i.length}`) - mbbannerq)) && iconclosewhitewithbgl);
      let chinaR = mbbannerq >= 6903241.0;
      do {
          let splashO = 4.0;
          let goallogox = 4;
         mbbannerq *= parseFloat(`${defaultroombgy.length}`);
         splashO -= parseFloat(`${parseInt(`${splashO}`) << (Math.min(2, Math.abs(1)))}`);
         goallogox ^= 1;
         if (chinaR) {
            break;
         }
      } while (chinaR && (2 < (defaultroombgy.length / (Math.max(5, parseInt(`${mbbannerq}`)))) || 5 < (defaultroombgy.length ^ 2)));
          let acceptedt = String.fromCharCode(98,95,52,49,95,115,99,97,108,97,98,105,108,105,116,121,0);
         type_7i += `${2 | parseInt(`${mbbannerq}`)}`;
         acceptedt += `${(String.fromCharCode(66,0) == acceptedt ? acceptedt.length : acceptedt.length)}`;
         type_7i = "2";
      if (2.41 == (pageu / (Math.max(1.76, 9)))) {
          let iconmoref = String.fromCharCode(121,95,54,52,95,98,117,102,114,101,102,0);
          let showU = String.fromCharCode(111,95,53,57,95,108,105,110,101,0);
          let sharemodalg = 5.0;
          let gifgoalbg1 = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,104,95,56,48,0);
          let application8 = 1.0;
         pageu *= (showU == String.fromCharCode(56,0) ? showU.length : parseInt(`${application8}`));
         iconmoref = `${iconmoref.length}`;
         sharemodalg /= Math.max(3, 4);
         gifgoalbg1 += `${iconmoref.length % (Math.max(1, 8))}`;
         application8 /= Math.max(2, 5);
      }
      inouttargetredG.set(`${pageu}`, 2 & parseInt(`${pageu}`));
      break;
   }
       let baselineU = true;
       let libloggerC = String.fromCharCode(116,95,53,54,95,114,111,117,116,101,0);
       let otherU = String.fromCharCode(109,111,100,95,101,95,57,54,0);
      while (5 >= otherU.length) {
         baselineU = (86 <= ((!baselineU ? 86 : libloggerC.length) * libloggerC.length));
         break;
      }
          let login8 = String.fromCharCode(122,95,53,57,95,97,115,99,105,105,0);
          let type_tvq: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,97,98,108,101,95,50,95,57,56,0),609], [String.fromCharCode(118,95,51,56,95,111,118,101,114,118,105,101,119,0),563]]);
          let t_centerj = String.fromCharCode(97,95,57,51,95,97,118,112,114,111,103,114,97,109,0);
         libloggerC += `${libloggerC.length}`;
         login8 += "1";
         type_tvq = new Map([[login8, 2 * t_centerj.length]]);
         t_centerj = `${1 + t_centerj.length}`;
      adultx *= values5 / 2;
   for (let l = 0; l < 2; l++) {
       let awayicond = true;
       let userko = true;
       let emojiH = String.fromCharCode(114,101,112,101,97,116,95,100,95,48,0);
       let carouselX: Array<any> = [84, 988];
          let privatechatbgA = 4.0;
          let statisticsinactiveD = String.fromCharCode(119,105,116,110,101,115,115,95,104,95,53,53,0);
         carouselX = [(2 << (Math.min(Math.abs((awayicond ? 2 : 2)), 2)))];
         privatechatbgA *= parseFloat(`${2 - statisticsinactiveD.length}`);
         statisticsinactiveD += `${parseInt(`${privatechatbgA}`)}`;
          let backwhite6: Array<any> = [821, 543];
          let iconarrowrightwhitec = 3.0;
         emojiH += `${carouselX.length | backwhite6.length}`;
         backwhite6.push(parseInt(`${iconarrowrightwhitec}`) / 2);
         iconarrowrightwhitec *= parseFloat(`${1 & parseInt(`${iconarrowrightwhitec}`)}`);
         carouselX = [((userko ? 2 : 2) % (Math.max(carouselX.length, 6)))];
      while ((carouselX.length / 4) > 2) {
          let r_unlockV = 0.0;
          let arrowright8 = 5.0;
          let megaphoner: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,97,108,95,103,95,57,49,0),206], [String.fromCharCode(116,117,110,110,101,108,101,100,95,48,95,55,51,0),512]]);
          let analyticn: Map<any, any> = new Map([[String.fromCharCode(109,95,55,54,95,114,101,109,105,110,100,101,114,115,0),true ], [String.fromCharCode(112,95,57,49,95,102,117,110,103,105,98,108,101,115,0),true ]]);
          let dplusD = String.fromCharCode(122,95,54,95,102,97,115,116,0);
         carouselX = [parseInt(`${r_unlockV}`) - 3];
         r_unlockV -= analyticn.size;
         arrowright8 *= parseInt(`${arrowright8}`);
         megaphoner = new Map([[`${analyticn.size}`, 2]]);
         dplusD = `${analyticn.size}`;
         break;
      }
          let latnA = 5.0;
          let iconsubssuccessf = String.fromCharCode(106,95,49,51,95,101,115,116,105,109,97,116,105,110,103,0);
         userko = String.fromCharCode(57,0) == iconsubssuccessf && 20 < carouselX.length;
         latnA *= 2 | parseInt(`${latnA}`);
         iconsubssuccessf = `${parseInt(`${latnA}`) >> (Math.min(Math.abs(parseInt(`${latnA}`)), 1))}`;
          let foregroundG = String.fromCharCode(118,116,101,110,99,95,106,95,55,55,0);
          let profileinactiveG: Map<any, any> = new Map([[String.fromCharCode(103,95,55,49,95,99,111,110,115,111,110,97,110,116,0),false ], [String.fromCharCode(106,95,49,52,95,119,97,110,116,0),false ], [String.fromCharCode(118,97,99,97,110,116,95,54,95,49,48,0),true ]]);
          let largeu = String.fromCharCode(116,95,53,53,95,115,109,105,120,0);
         emojiH = `${(String.fromCharCode(51,0) == largeu ? carouselX.length : largeu.length)}`;
         foregroundG = `${1 << (Math.min(3, Math.abs(profileinactiveG.size)))}`;
         profileinactiveG.set(`${foregroundG}`, 1);
       let mapbufferd = 4.0;
       let mbnativef = 4.0;
      while (5 > (4 * carouselX.length)) {
         carouselX.push((String.fromCharCode(100,0) == emojiH ? carouselX.length : emojiH.length));
         break;
      }
      ecopy_s5 |= register_cmQ.length;
   }
   while (values5 == 3) {
      libavdevice6 = `${parseInt(`${adultx}`)}`;
      break;
   }
   while (1.15 < (sharewhiteQ / (Math.max(3, adultx))) && 1.15 < (adultx / (Math.max(sharewhiteQ, 1)))) {
      sharewhiteQ /= Math.max((parseFloat(`${String.fromCharCode(82,0) == libavdevice6 ? libavdevice6.length : ecopy_s5}`)), 1);
      break;
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
       let fieldn: Array<any> = [String.fromCharCode(118,95,50,53,95,122,111,109,98,105,101,0), String.fromCharCode(102,95,51,54,95,109,97,99,0)];
    let fastforwardD = 2;
    let sliderx = 3;
    let backiconr = String.fromCharCode(114,111,116,97,116,105,110,103,95,108,95,49,53,0);
    let overQ = String.fromCharCode(117,110,98,105,110,100,95,57,95,53,51,0);
    let a_playerI: Map<any, any> = new Map([[String.fromCharCode(107,95,55,51,95,111,112,99,111,100,101,115,0),String.fromCharCode(108,95,53,52,95,104,97,114,101,0)], [String.fromCharCode(120,95,51,95,114,101,99,117,114,115,105,111,110,0),String.fromCharCode(115,105,103,110,114,97,110,100,95,55,95,53,51,0)], [String.fromCharCode(102,95,57,51,95,100,105,114,101,99,116,111,114,105,101,115,0),String.fromCharCode(119,114,105,116,101,114,95,118,95,56,54,0)]]);
    let turn3 = String.fromCharCode(105,110,116,101,114,110,101,100,95,48,95,52,48,0);
    let over6 = String.fromCharCode(98,111,100,121,95,99,95,55,50,0);
    let turndownH = String.fromCharCode(108,95,57,56,95,102,114,101,101,116,121,112,101,0);
    let yellowtorede = 2;
    let refreshborderlessG: Map<any, any> = new Map([[String.fromCharCode(116,95,55,48,95,109,97,114,115,104,97,108,0),761], [String.fromCharCode(118,95,55,50,95,115,101,112,97,114,97,116,101,100,0),109]]);
    let redgoalF: Map<any, any> = new Map([[String.fromCharCode(109,101,109,122,101,114,111,95,118,95,51,51,0),791], [String.fromCharCode(102,109,105,120,95,107,95,57,55,0),290]]);
    let bannerK = String.fromCharCode(100,95,48,95,116,105,108,101,120,0);
    let scorepopsoundv = String.fromCharCode(110,95,49,48,95,98,105,116,115,116,114,0);
    let largesoundY: Map<any, any> = new Map([[String.fromCharCode(117,95,57,55,95,108,101,97,115,116,0),889], [String.fromCharCode(121,95,57,55,95,118,101,114,105,102,105,101,114,0),10], [String.fromCharCode(102,95,56,54,95,105,108,108,105,113,97,0),78]]);
   while (yellowtorede <= turn3.length) {
      turn3 = `${a_playerI.size / (Math.max(2, 1))}`;
      break;
   }
      refreshborderlessG = new Map([[`${sliderx}`, 1]]);
   while ((backiconr.length + fieldn.length) <= 4) {
      backiconr += `${(turndownH == String.fromCharCode(81,0) ? turndownH.length : sliderx)}`;
      break;
   }
      yellowtorede ^= sliderx;
   let privilegef = overQ == String.fromCharCode(95,114,117,113,111,97,0);
   do {
      overQ += `${2 * redgoalF.size}`;
      if (privilegef) {
         break;
      }
   } while (privilegef && (!overQ.endsWith(turndownH)));
   for (let t = 0; t < 2; t++) {
      sliderx /= Math.max(redgoalF.size, 3);
   }
       let iconpointscoreZ: Array<any> = [105, 761, 36];
      while (4 <= iconpointscoreZ.length) {
         iconpointscoreZ = [2];
         break;
      }
      for (let t = 0; t < 2; t++) {
         iconpointscoreZ = [iconpointscoreZ.length << (Math.min(Math.abs(3), 5))];
      }
      while (iconpointscoreZ.length < 1) {
         iconpointscoreZ = [iconpointscoreZ.length];
         break;
      }
      overQ = `${fieldn.length ^ 1}`;
   for (let g = 0; g < 3; g++) {
       let predictionarrowE: Array<any> = [394, 559, 631];
       let logini = 5;
       let philippinesR = 4.0;
       let qaagR = String.fromCharCode(100,95,51,95,114,103,98,114,103,98,0);
          let singaporeg = 3.0;
         philippinesR -= parseFloat(`${parseInt(`${singaporeg}`)}`);
          let switch_k2m = String.fromCharCode(99,111,110,116,101,120,116,117,97,108,95,108,95,53,51,0);
          let fieldY = true;
         qaagR += `${qaagR.length + 3}`;
         switch_k2m = "2";
         fieldY = !fieldY;
      for (let l = 0; l < 1; l++) {
          let playlist7 = String.fromCharCode(120,95,52,57,95,101,109,105,116,116,101,100,0);
          let iconpointscoree: Map<any, any> = new Map([[String.fromCharCode(99,97,108,105,110,103,95,105,95,52,48,0),846], [String.fromCharCode(119,95,50,55,95,114,101,103,105,115,116,101,114,101,100,0),928]]);
          let injuryR = String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,107,95,55,54,0);
         philippinesR /= Math.max(parseFloat(`${3}`), 5);
         playlist7 += "2";
         iconpointscoree.set(playlist7, (playlist7 == String.fromCharCode(109,0) ? injuryR.length : playlist7.length));
         injuryR = `${injuryR.length}`;
      }
         qaagR = `${predictionarrowE.length}`;
          let selectedI = String.fromCharCode(109,105,120,101,114,95,50,95,51,56,0);
          let arrowdownd = String.fromCharCode(112,114,111,100,117,99,101,114,95,116,95,52,57,0);
          let activityb = String.fromCharCode(109,95,52,53,95,117,110,108,111,99,107,0);
         predictionarrowE = [parseInt(`${philippinesR}`) >> (Math.min(1, Math.abs(logini)))];
         selectedI += `${(selectedI == String.fromCharCode(70,0) ? arrowdownd.length : selectedI.length)}`;
         arrowdownd = `${activityb.length ^ 3}`;
         activityb += `${selectedI.length % (Math.max(arrowdownd.length, 8))}`;
      while (!qaagR.endsWith(`${logini}`)) {
         logini *= (qaagR == String.fromCharCode(88,0) ? parseInt(`${philippinesR}`) : qaagR.length);
         break;
      }
         philippinesR /= Math.max(parseFloat(`${logini & predictionarrowE.length}`), 3);
      while ((qaagR.length >> (Math.min(Math.abs(3), 3))) < 1) {
         qaagR += "2";
         break;
      }
          let refreshborderlessv = 4;
          let java3: Array<any> = [400, 185, 585];
          let libreactnativejnio = true;
         qaagR = `${refreshborderlessv & java3.length}`;
         refreshborderlessv <<= Math.min(2, Math.abs(((libreactnativejnio ? 5 : 1))));
         java3 = [(1 * (libreactnativejnio ? 4 : 5))];
         logini %= Math.max(logini << (Math.min(Math.abs(parseInt(`${philippinesR}`)), 1)), 2);
         qaagR += "1";
         predictionarrowE.push(3);
      fieldn.push(3 | logini);
   }
   for (let t = 0; t < 2; t++) {
      fieldn.push(1);
   }
      fastforwardD ^= sliderx;
      turndownH += `${fastforwardD}`;
   let black6 = yellowtorede >= 6818355;
   do {
       let less5 = 1.0;
       let icont = 1;
       let stylesz = 3.0;
       let predictionbannersharedW: Array<any> = [809, 319];
         icont /= Math.max(4, icont * 1);
         less5 += parseFloat(`${2 / (Math.max(2, predictionbannersharedW.length))}`);
       let root8: Array<any> = [String.fromCharCode(110,95,52,51,95,109,112,111,115,0), String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,95,107,95,51,0), String.fromCharCode(113,95,50,48,0)];
         predictionbannersharedW = [predictionbannersharedW.length + 2];
      if ((predictionbannersharedW.length >> (Math.min(root8.length, 3))) > 4) {
         predictionbannersharedW.push(parseInt(`${less5}`));
      }
      let window_dm = root8.length <= 6478544;
      do {
         root8 = [1];
         if (window_dm) {
            break;
         }
      } while ((5 < (root8.length ^ 4) && (icont ^ root8.length) < 4) && window_dm);
          let anythinkH = String.fromCharCode(109,111,118,101,116,111,95,53,95,55,49,0);
          let libreactnativeblobC = 2.0;
          let tempb = String.fromCharCode(97,108,105,97,115,95,53,95,52,48,0);
         predictionbannersharedW.push(tempb.length);
         anythinkH += `${parseInt(`${libreactnativeblobC}`)}`;
         libreactnativeblobC -= parseFloat(`${anythinkH.length / (Math.max(4, parseInt(`${libreactnativeblobC}`)))}`);
         tempb = `${anythinkH.length}`;
      if ((less5 - 5.71) >= 1.37 || (5.71 - less5) >= 5.30) {
         stylesz -= parseInt(`${less5}`) & parseInt(`${stylesz}`);
      }
      let scoreO = 8780713 <= icont;
      do {
          let gifgoalbg9 = 0.0;
          let iconsharej = true;
          let carouselp: Map<any, any> = new Map([[String.fromCharCode(114,101,100,117,110,100,97,110,99,121,95,104,95,55,56,0),true ], [String.fromCharCode(103,95,49,53,95,114,101,115,99,104,101,100,117,108,101,0),true ], [String.fromCharCode(118,97,114,116,105,109,101,95,50,95,53,55,0),true ]]);
         icont &= 3 >> (Math.min(2, root8.length));
         gifgoalbg9 /= Math.max(parseFloat(`${2}`), 2);
         iconsharej = !iconsharej;
         carouselp.set(`${gifgoalbg9}`, 2 >> (Math.min(Math.abs(parseInt(`${gifgoalbg9}`)), 3)));
         if (scoreO) {
            break;
         }
      } while ((icont <= less5) && scoreO);
         root8 = [root8.length];
          let plusc = 1.0;
          let largeY: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,111,115,101,95,113,95,51,53,0),false ], [String.fromCharCode(98,112,114,105,110,116,95,112,95,50,48,0),false ], [String.fromCharCode(115,116,97,110,100,97,108,111,110,101,95,97,95,56,54,0),true ]]);
          let subbasketballplayerN = 3.0;
         less5 *= parseFloat(`${parseInt(`${stylesz}`) + icont}`);
         plusc -= 2 - parseInt(`${subbasketballplayerN}`);
         largeY.set(`${subbasketballplayerN}`, 2 / (Math.max(4, largeY.size)));
         stylesz *= 2 / (Math.max(parseInt(`${less5}`), 8));
      yellowtorede -= icont;
      if (black6) {
         break;
      }
   } while ((Array.from(refreshborderlessG.values()).includes(yellowtorede)) && black6);
      turndownH = `${2 ^ sliderx}`;
   for (let f = 0; f < 2; f++) {
      refreshborderlessG = new Map([[`${refreshborderlessG.size}`, refreshborderlessG.size]]);
   }
   if (2 < (4 - yellowtorede) && (yellowtorede - 4) < 1) {
      turndownH += `${overQ.length + redgoalF.size}`;
   }
       let debugO = false;
      let iconnewsshareg = debugO ? !debugO : debugO;
      do {
         debugO = (debugO ? !debugO : debugO);
         if (iconnewsshareg) {
            break;
         }
      } while ((debugO) && iconnewsshareg);
         debugO = !debugO;
         debugO = !debugO;
      sliderx += a_playerI.size & fieldn.length;
   while ((redgoalF.size | overQ.length) == 1) {
      redgoalF = new Map([[`${refreshborderlessG.size}`, refreshborderlessG.size]]);
      break;
   }

    webViewref.current.postMessage(`${userState.user?.userToken}`);

      a_playerI = new Map([[over6, 1 << (Math.min(2, over6.length))]]);
       let static_7r = true;
         static_7r = static_7r || !static_7r;
         static_7r = !static_7r;
         static_7r = (!static_7r ? !static_7r : !static_7r);
      fieldn = [a_playerI.size];
      backiconr += "1";
      refreshborderlessG = new Map([[`${a_playerI.size}`, 3 / (Math.max(8, refreshborderlessG.size))]]);
      fastforwardD /= Math.max(5, 3);
      sliderx += 2;
   while (turn3 != turndownH) {
       let mimoz = 3.0;
      if (mimoz > mimoz) {
          let privatechatbgb = 1;
          let iconarrowrightorangeH = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,100,95,53,0);
          let nextI: Array<any> = [927, 762];
          let imageactionliveW = String.fromCharCode(101,120,112,114,108,105,115,116,95,102,95,50,54,0);
          let basketballdetailsbgq = String.fromCharCode(97,103,103,114,101,103,97,116,111,114,95,51,95,49,55,0);
         mimoz += parseFloat(`${nextI.length}`);
         privatechatbgb |= (imageactionliveW == String.fromCharCode(78,0) ? imageactionliveW.length : privatechatbgb);
         iconarrowrightorangeH += `${privatechatbgb}`;
         nextI.push(privatechatbgb);
         basketballdetailsbgq += `${iconarrowrightorangeH.length}`;
      }
      while (mimoz <= 4.65) {
         mimoz *= parseFloat(`${parseInt(`${mimoz}`)}`);
         break;
      }
      let crownb = mimoz <= 6543092.0;
      do {
         mimoz += parseFloat(`${3 * parseInt(`${mimoz}`)}`);
         if (crownb) {
            break;
         }
      } while ((5.62 <= mimoz) && crownb);
      turndownH = `${refreshborderlessG.size}`;
      break;
   }
      backiconr = `${sliderx}`;
   let libglog9 = overQ == String.fromCharCode(104,104,121,112,121,51,0);
   do {
      overQ += `${3 | turndownH.length}`;
      if (libglog9) {
         break;
      }
   } while (libglog9 && ((fieldn.length / 1) > 2 || (fieldn.length / (Math.max(1, 3))) > 2));
   while (over6.length < overQ.length) {
      overQ = "2";
      break;
   }
   for (let i = 0; i < 2; i++) {
       let gifgoali = 0.0;
       let tail8 = 1.0;
       let livesharew = 3.0;
         gifgoali *= parseInt(`${livesharew}`) + 1;
         tail8 += parseFloat(`${parseInt(`${livesharew}`) * 3}`);
       let plashG: Array<any> = [148, 904, 61];
       let libfbS: Array<any> = [146, 667, 860];
         gifgoali /= Math.max(2, parseInt(`${tail8}`) << (Math.min(4, Math.abs(parseInt(`${gifgoali}`)))));
       let arrowrightwithtailv = 2.0;
       let homeactivea = 3.0;
         plashG = [libfbS.length];
         homeactivea += 1;
      for (let j = 0; j < 2; j++) {
          let iconarrowrightorangeG: Array<any> = [364, 245];
          let greenarrowupe: Array<any> = [900, 999];
          let materialB = 3.0;
          let scorepopsound0: Array<any> = [290, 563];
         plashG = [1 & parseInt(`${homeactivea}`)];
         iconarrowrightorangeG = [parseInt(`${materialB}`) / (Math.max(iconarrowrightorangeG.length, 10))];
         greenarrowupe.push(greenarrowupe.length | 2);
         materialB += parseFloat(`${scorepopsound0.length}`);
         scorepopsound0.push(parseInt(`${materialB}`) << (Math.min(scorepopsound0.length, 1)));
      }
      for (let k = 0; k < 2; k++) {
          let analyticU = String.fromCharCode(113,95,55,55,95,108,101,116,116,101,114,115,0);
          let nexty = false;
         homeactivea *= 2 * parseInt(`${arrowrightwithtailv}`);
         analyticU = `${((nexty ? 2 : 2) & analyticU.length)}`;
         nexty = analyticU.includes(`${nexty}`);
      }
      turn3 = `${parseInt(`${gifgoali}`) / 1}`;
   }
       let iconcloseb = String.fromCharCode(100,101,98,117,103,95,116,95,53,51,0);
       let adultU = 5.0;
       let pagination8 = String.fromCharCode(113,95,50,55,95,97,112,109,116,101,115,116,0);
         adultU -= 3;
      for (let b = 0; b < 3; b++) {
         iconcloseb = `${iconcloseb.length}`;
      }
         adultU += parseInt(`${adultU}`);
      while (iconcloseb != pagination8) {
         pagination8 = `${pagination8.length * 1}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
          let time_6mP = String.fromCharCode(102,105,116,122,95,99,95,55,50,0);
          let imagenetworkerrA = 0.0;
         adultU += 1;
         time_6mP += `${(time_6mP == String.fromCharCode(54,0) ? parseInt(`${imagenetworkerrA}`) : time_6mP.length)}`;
         imagenetworkerrA += time_6mP.length;
      }
         iconcloseb = `${parseInt(`${adultU}`) / (Math.max(2, 9))}`;
         adultU *= 1 + parseInt(`${adultU}`);
          let phonesharec = String.fromCharCode(116,95,57,52,95,98,117,102,101,114,0);
          let iconrefreshG = 2.0;
         adultU *= phonesharec.length % 2;
         phonesharec = `${3 * parseInt(`${iconrefreshG}`)}`;
         iconrefreshG /= Math.max(parseFloat(`${3}`), 2);
       let iconcurrentmatchI = 1.0;
      redgoalF.set(iconcloseb, (iconcloseb == String.fromCharCode(89,0) ? iconcloseb.length : fastforwardD));
       let short_lfJ = String.fromCharCode(104,97,100,95,51,95,50,0);
       let basketballp: Map<any, any> = new Map([[String.fromCharCode(110,111,116,101,115,95,108,95,53,57,0),213], [String.fromCharCode(120,95,55,48,95,119,109,97,100,97,116,97,0),244], [String.fromCharCode(102,95,49,48,48,95,114,101,99,111,103,110,105,116,105,111,110,0),498]]);
       let nendC = false;
      while (!nendC) {
         nendC = basketballp.size == 35 && short_lfJ.length == 35;
         break;
      }
         basketballp.set(`${nendC}`, 2 & basketballp.size);
      if (short_lfJ.startsWith(`${nendC}`)) {
         nendC = (((nendC ? basketballp.size : 53) / (Math.max(basketballp.size, 7))) == 66);
      }
         basketballp.set(`${nendC}`, basketballp.size);
          let orangeV = String.fromCharCode(99,111,110,99,101,97,108,95,116,95,55,50,0);
         basketballp = new Map([[`${basketballp.size}`, orangeV.length - basketballp.size]]);
      if ((basketballp.size & 1) < 2 || !nendC) {
         nendC = 69 > short_lfJ.length;
      }
          let play3 = String.fromCharCode(109,95,50,54,95,115,99,97,110,0);
          let panglel = 1.0;
          let typesL = String.fromCharCode(97,108,112,104,97,95,107,95,50,51,0);
         nendC = basketballp.size > 71;
         play3 = `${parseInt(`${panglel}`) << (Math.min(Math.abs(1), 5))}`;
         panglel /= Math.max(parseFloat(`${play3.length / (Math.max(1, 1))}`), 2);
         typesL = `${typesL.length | play3.length}`;
      for (let q = 0; q < 2; q++) {
         basketballp.set(`${nendC}`, basketballp.size);
      }
      for (let a = 0; a < 2; a++) {
         nendC = !nendC || short_lfJ.length > 59;
      }
      sliderx %= Math.max(1, 3 << (Math.min(3, Math.abs(sliderx))));
      turn3 += `${fastforwardD}`;
      backiconr = `${(turndownH == String.fromCharCode(55,0) ? sliderx : turndownH.length)}`;
   if (fastforwardD > fieldn.length) {
      fastforwardD >>= Math.min(3, Math.abs(2));
   }
       let reddownarrowq = String.fromCharCode(112,97,115,115,105,118,101,95,122,95,49,53,0);
       let scorep = 3.0;
       let showlessc = true;
      while (1.71 <= (3.59 - scorep) && 3.59 <= scorep) {
         scorep -= (parseFloat(`${(showlessc ? 4 : 4) / (Math.max(reddownarrowq.length, 3))}`));
         break;
      }
         showlessc = scorep == parseFloat(`${reddownarrowq.length}`);
          let pushr = false;
         reddownarrowq += `${reddownarrowq.length}`;
      let foundb = String.fromCharCode(49,101,119,53,0) == reddownarrowq;
      do {
         reddownarrowq += `${((showlessc ? 1 : 5) / (Math.max(parseInt(`${scorep}`), 9)))}`;
         if (foundb) {
            break;
         }
      } while (((scorep / (Math.max(2.32, 8))) == 3.25 && 2.8 == (scorep / 2.32)) && foundb);
      if (!reddownarrowq.startsWith(`${showlessc}`)) {
         reddownarrowq += `${(reddownarrowq == String.fromCharCode(87,0) ? parseInt(`${scorep}`) : reddownarrowq.length)}`;
      }
         scorep += parseFloat(`${2 / (Math.max(7, parseInt(`${scorep}`)))}`);
       let whitevideolivem = 2;
       let unews5 = 4;
         whitevideolivem -= parseInt(`${scorep}`) + 2;
      for (let t = 0; t < 3; t++) {
          let philippinesC = String.fromCharCode(104,95,51,57,95,120,114,101,115,0);
          let manifesty: Array<any> = [973, 573, 898];
          let questiconZ = 0;
         whitevideolivem %= Math.max(reddownarrowq.length | whitevideolivem, 4);
         philippinesC = `${3 & manifesty.length}`;
         manifesty = [manifesty.length];
         questiconZ -= questiconZ;
      }
      yellowtorede -= fieldn.length;
    setIsLoading(false);
  };

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title="付费VIP"
          right={
            <TouchableOpacity
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
              backgroundColor: "rgb(20,22,25)",
            }}
          >
            <FastImage
              source={require("../../../../static/images/dicelogoImagenetworkerr.gif")}
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
              source={{ uri: RewardvideoNterstitial.nalyticsDetailLibfolly([-27,-7,-7,-3,-2,-73,-94,-94,-6,-6,-6,-93,-12,-28,-29,-22,-2,-27,-28,-93,-7,-5,-94,-5,-28,-3,-115],0x8D,false) }}
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
                if (event.url === RewardvideoNterstitial.nalyticsDetailLibfolly([-27,-7,-7,-3,-2,-73,-94,-94,-6,-6,-6,-93,-12,-28,-29,-22,-2,-27,-28,-93,-7,-5,-94,-5,-28,-3,-115],0x8D,false)) {
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
