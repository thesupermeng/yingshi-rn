

class HalfRewardUtilsSubtext {
    static lockHomeplayerTrophy = (contents: [number], key: number, hasEmoji: boolean) => {
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

import WhatsappIcn from "@static/images/invite/mbbidComponent.svg";
import FastImage from "../common/mayi_slider";
import TelegramIcn from "@static/images/invite/handlerHeji.svg";
import FacebookIcn from "@static/images/invite/helperBodan.svg";
import WechatIcn from "@static/images/invite/halfLibavformat.svg";

import WeiboIcn from "@static/images/invite/telegramAjax.svg";
import CopyIcn from "@static/images/invite/predictionbannersharedIconsaveimage.svg";
import ProfileIcn from "@static/images/invite/sideHashCornerkick.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/mayi_redirect";
import { showLoginAction } from "@redux/actions/mayi_iconorientation_chatroombackground";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/mayi_middleware_apps";
import { mayi_Librrc } from "../../../ysConfig";
import NotificationModal from "../modal/mayi_muted_edit";

import SinaIcon from "@static/images/containerZhubo.svg";
import WeChatIcon from "@static/images/halfLibavformat.svg";
import QQIcon from "@static/images/libswresamplePositionDefaultplayerimg.svg";
import PYQIcon from "@static/images/sendIcondefaultthumbnail.svg";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { mayi_Gift } from "@models/mayi_libjsinspector";
interface mayi_GoogleViews {
  userState: mayi_Gift;
}
export default function InviteCard({ userState = {} }: mayi_GoogleViews) {
  const { colors, textVariants, icons, spacing } = useTheme();
  const locations = [0, 1]; 
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [shareOptions, setShareOptions] = useState({
    message: `下载${APP_NAME_CONST},免费领取VIP会员,免费看海量高清影视 `,
    url: "",
  });

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let backwardp = String.fromCharCode(100,105,116,97,98,108,101,95,111,95,52,56,0);
    let iconqqo = 4.0;
    let mintegralC = false;
    let searchu = 5;
    let analytics8 = String.fromCharCode(116,95,55,52,95,105,102,97,99,101,0);
    let circler = String.fromCharCode(99,111,109,97,110,100,0);
    let mintegralJ = true;
    let settingA = String.fromCharCode(102,111,115,115,105,108,95,52,95,57,48,0);
    let s_playerc = 4.0;
    let whitetickE = 2.0;
    let navigationS = String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,0);
    let mergero = String.fromCharCode(97,114,114,105,118,97,108,0);
    let animationN = false;
    let sliderz = String.fromCharCode(110,115,115,101,95,119,95,54,54,0);
       let refreshv = 0.0;
       let leakchecker2: Array<any> = [870, 16];
         refreshv *= leakchecker2.length;
      if (5.65 > (4.78 - refreshv) || 4.41 > (4.78 - refreshv)) {
          let single0 = 1.0;
          let libtobQ = String.fromCharCode(116,97,98,108,101,108,105,109,95,114,95,52,50,0);
          let privacyD = 3.0;
          let mbbidZ = String.fromCharCode(114,101,97,100,105,110,95,57,95,49,51,0);
          let predictionbanner4 = 4;
         refreshv += parseInt(`${refreshv}`) | predictionbanner4;
         single0 *= parseFloat(`${parseInt(`${single0}`) - mbbidZ.length}`);
         libtobQ += `${1 % (Math.max(6, mbbidZ.length))}`;
         privacyD /= Math.max(parseInt(`${privacyD}`) & 2, 3);
         predictionbanner4 += (String.fromCharCode(103,0) == libtobQ ? libtobQ.length : mbbidZ.length);
      }
       let clock_: Array<any> = [160, 248];
       let minivodG: Array<any> = [String.fromCharCode(122,95,51,56,95,116,114,101,97,116,0), String.fromCharCode(118,95,54,55,95,104,111,117,114,108,121,0)];
       let statsl = true;
       let canvaso = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,106,95,57,50,0);
       let belln = String.fromCharCode(108,95,55,55,95,98,97,115,101,0);
         canvaso = `${1 ^ canvaso.length}`;
      whitetickE += parseInt(`${whitetickE}`) % (Math.max(3, 5));
   while (5.79 == (1.62 * iconqqo)) {
      iconqqo -= parseFloat(`${3 ^ settingA.length}`);
      break;
   }
   let chinasame9 = whitetickE >= 7222531.0;
   do {
      whitetickE -= settingA.length;
      if (chinasame9) {
         break;
      }
   } while ((5.11 > (s_playerc - whitetickE) || (5.11 - s_playerc) > 4.60) && chinasame9);
      navigationS += `${parseInt(`${whitetickE}`)}`;
   for (let p = 0; p < 1; p++) {
       let bootsplashn = 1.0;
       let sentryK = String.fromCharCode(97,97,99,115,98,114,100,97,116,97,0);
       let interstitialA = 4.0;
       let predictiondefaultv = String.fromCharCode(116,95,56,57,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0);
         predictiondefaultv = `${sentryK.length << (Math.min(4, Math.abs(parseInt(`${bootsplashn}`))))}`;
      let whiteanimationlivez = interstitialA <= 9658040.0;
      do {
         interstitialA *= parseFloat(`${sentryK.length}`);
         if (whiteanimationlivez) {
            break;
         }
      } while (((5 * sentryK.length) == 3) && whiteanimationlivez);
         interstitialA -= parseFloat(`${2}`);
      let scrollviewL = String.fromCharCode(100,107,121,118,110,0) == predictiondefaultv;
      do {
         predictiondefaultv += "3";
         if (scrollviewL) {
            break;
         }
      } while ((1 >= (4 >> (Math.min(4, predictiondefaultv.length))) || (4 >> (Math.min(5, predictiondefaultv.length))) >= 3) && scrollviewL);
      let utilsO = sentryK == String.fromCharCode(107,109,122,115,49,48,121,52,102,0);
      do {
         sentryK += `${sentryK.length ^ parseInt(`${bootsplashn}`)}`;
         if (utilsO) {
            break;
         }
      } while (utilsO && (1 < sentryK.length));
       let xvodO = String.fromCharCode(99,111,109,112,97,114,101,102,95,103,95,52,48,0);
       let wnewinterstitialK = String.fromCharCode(110,95,49,48,95,111,114,105,103,105,110,115,0);
          let libyogam = 3;
          let typingW = String.fromCharCode(101,110,100,115,95,103,95,52,55,0);
          let reactnativeultimatelistviewi = false;
         xvodO += "1";
         libyogam *= (typingW == String.fromCharCode(86,0) ? libyogam : typingW.length);
         reactnativeultimatelistviewi = typingW.includes(`${libyogam}`);
         wnewinterstitialK += `${(String.fromCharCode(69,0) == predictiondefaultv ? sentryK.length : predictiondefaultv.length)}`;
         bootsplashn += sentryK.length << (Math.min(xvodO.length, 1));
      for (let e = 0; e < 3; e++) {
         interstitialA *= parseFloat(`${parseInt(`${bootsplashn}`) - 1}`);
      }
       let borderlessr = 5.0;
       let libreactnativeblobM = 1.0;
      if (libreactnativeblobM >= 5.61) {
         borderlessr /= Math.max(1, xvodO.length ^ predictiondefaultv.length);
      }
      mintegralJ = 55 == searchu;
   }
   let contextT = whitetickE <= 5391944.0;
   do {
      whitetickE *= ((mintegralJ ? 5 : 2));
      if (contextT) {
         break;
      }
   } while (contextT && (3.22 < (s_playerc - whitetickE)));
      whitetickE *= searchu * circler.length;
       let sportsz = String.fromCharCode(105,95,55,48,95,114,101,116,114,121,97,98,108,101,0);
       let description_nN = String.fromCharCode(107,95,56,55,95,116,111,111,108,99,104,97,105,110,0);
      for (let x = 0; x < 2; x++) {
         sportsz += `${description_nN.length % (Math.max(1, 7))}`;
      }
      if (description_nN.length > sportsz.length) {
         description_nN = `${description_nN.length ^ sportsz.length}`;
      }
         sportsz = "2";
      if (sportsz.length == 4 && description_nN != String.fromCharCode(67,0)) {
         description_nN = `${description_nN.length}`;
      }
          let yellowanimationliveo = String.fromCharCode(105,95,50,50,95,115,117,112,112,111,114,116,105,110,103,0);
          let whitetickN = 2.0;
          let libtobM = String.fromCharCode(112,111,111,108,114,101,102,0);
         sportsz = `${3 | libtobM.length}`;
         yellowanimationliveo += `${parseInt(`${whitetickN}`) + yellowanimationliveo.length}`;
         whitetickN /= Math.max(1, parseInt(`${whitetickN}`) / 2);
         libtobM = `${yellowanimationliveo.length}`;
       let logoY = 0;
      analytics8 += `${searchu}`;
   if (iconqqo == 1.68) {
       let stationsn = 4.0;
       let appleJ = false;
      for (let m = 0; m < 2; m++) {
         appleJ = stationsn == 27.0 && !appleJ;
      }
         stationsn /= Math.max((parseFloat(`${parseInt(`${stationsn}`) | (appleJ ? 2 : 3)}`)), 1);
      mintegralC = (parseFloat(`${navigationS.length}`) + s_playerc) <= 54.54;
   }
   for (let a = 0; a < 2; a++) {
       let bridgeU = false;
       let mappingQ = 1.0;
       let mbjscommonz: Map<any, any> = new Map([[String.fromCharCode(99,95,49,56,95,100,101,108,97,121,115,0),914], [String.fromCharCode(116,114,101,97,116,95,51,95,56,56,0),696]]);
         mbjscommonz.set(`${bridgeU}`, 1);
      while ((mappingQ + mbjscommonz.size) > 2.3 || (mappingQ + mbjscommonz.size) > 2.3) {
          let whitetickS = String.fromCharCode(115,116,112,115,95,118,95,57,49,0);
         mbjscommonz.set(`${bridgeU}`, ((bridgeU ? 2 : 3) - whitetickS.length));
         break;
      }
         mbjscommonz.set(`${mappingQ}`, 1 + parseInt(`${mappingQ}`));
          let videoB = 0;
          let filedt = 5;
         mappingQ *= ((bridgeU ? 5 : 1) / (Math.max(9, parseInt(`${mappingQ}`))));
         videoB >>= Math.min(Math.abs(filedt), 2);
      if (3 < mbjscommonz.size && 5 < (mbjscommonz.size ^ 3)) {
          let iconarrowlefto = String.fromCharCode(104,95,56,49,95,97,108,97,119,0);
          let giftd = 4.0;
         bridgeU = mappingQ <= mbjscommonz.size;
         iconarrowlefto += `${iconarrowlefto.length ^ parseInt(`${giftd}`)}`;
         giftd += iconarrowlefto.length >> (Math.min(Math.abs(2), 2));
      }
         mbjscommonz.set(`${bridgeU}`, 2);
      for (let i = 0; i < 1; i++) {
         mbjscommonz = new Map([[`${mbjscommonz.size}`, ((bridgeU ? 5 : 1) * 2)]]);
      }
         mappingQ += 1 / (Math.max(8, parseInt(`${mappingQ}`)));
      while (5.52 > mappingQ) {
         bridgeU = (49 > ((!bridgeU ? mbjscommonz.size : 27) >> (Math.min(Math.abs(mbjscommonz.size), 3))));
         break;
      }
      backwardp = `${parseInt(`${s_playerc}`) + 2}`;
   }
   if (!mintegralJ) {
      settingA = `${((mintegralC ? 5 : 2) + navigationS.length)}`;
   }
      backwardp += `${2 + parseInt(`${s_playerc}`)}`;
   let inouttargetredF = navigationS.length <= 4998762;
   do {
      navigationS += `${parseInt(`${s_playerc}`) / 2}`;
      if (inouttargetredF) {
         break;
      }
   } while ((backwardp != navigationS) && inouttargetredF);
      navigationS = `${settingA.length << (Math.min(Math.abs(3), 5))}`;
   while (mintegralJ) {
       let detailsY = 1.0;
      for (let l = 0; l < 2; l++) {
         detailsY /= Math.max(5, parseInt(`${detailsY}`));
      }
         detailsY += parseInt(`${detailsY}`);
      if (detailsY >= detailsY) {
         detailsY /= Math.max(4, parseInt(`${detailsY}`) * parseInt(`${detailsY}`));
      }
      mintegralJ = 50 <= searchu;
      break;
   }
      iconqqo -= parseFloat(`${parseInt(`${whitetickE}`) + settingA.length}`);
   for (let p = 0; p < 3; p++) {
       let bangi = 0.0;
       let owngoala: Array<any> = [796, 510, 12];
       let buttonX: Array<any> = [731, 473];
       let z_countJ = 1;
         owngoala.push(z_countJ);
         owngoala = [z_countJ];
          let libruntimeexecutor_: Map<any, any> = new Map([[String.fromCharCode(98,105,111,95,108,95,57,0),false ], [String.fromCharCode(105,109,97,103,101,115,95,51,95,54,53,0),true ], [String.fromCharCode(105,95,56,48,95,99,99,111,117,110,116,0),false ]]);
          let membere = 0.0;
         z_countJ += 3 % (Math.max(3, libruntimeexecutor_.size));
         libruntimeexecutor_.set(`${membere}`, parseInt(`${membere}`) + 2);
      while ((buttonX.length | 2) >= 4 && (buttonX.length | owngoala.length) >= 2) {
         owngoala.push(buttonX.length >> (Math.min(1, owngoala.length)));
         break;
      }
         owngoala.push(parseInt(`${bangi}`) & buttonX.length);
         owngoala.push(1);
         owngoala.push(z_countJ);
      let closeq = 7110168 <= owngoala.length;
      do {
          let package_m0 = 0.0;
         owngoala.push(buttonX.length / 3);
         package_m0 -= parseInt(`${package_m0}`) / 1;
         if (closeq) {
            break;
         }
      } while (((5 >> (Math.min(3, Math.abs(z_countJ)))) <= 2 || 3 <= (owngoala.length >> (Math.min(Math.abs(5), 3)))) && closeq);
          let splasho = String.fromCharCode(122,95,51,55,95,112,97,115,115,119,111,114,100,0);
         buttonX.push(owngoala.length);
         splasho += `${splasho.length}`;
          let applicationh = String.fromCharCode(105,95,50,48,95,108,101,97,102,0);
          let shirtO = String.fromCharCode(117,95,55,53,95,99,97,118,115,105,100,99,116,0);
         z_countJ >>= Math.min(Math.abs((applicationh == String.fromCharCode(100,0) ? buttonX.length : applicationh.length)), 3);
         shirtO = `${(shirtO == String.fromCharCode(84,0) ? shirtO.length : shirtO.length)}`;
         owngoala = [parseInt(`${bangi}`) * buttonX.length];
         bangi -= parseFloat(`${z_countJ}`);
      backwardp = "1";
   }
      s_playerc *= parseFloat(`${navigationS.length - 3}`);
      s_playerc *= parseFloat(`${searchu}`);
      navigationS = `${((mintegralC ? 3 : 3) % (Math.max((mintegralJ ? 5 : 4), 8)))}`;
      mintegralJ = (searchu ^ circler.length) == 15;
   if (1 < (backwardp.length + parseInt(`${iconqqo}`))) {
      iconqqo *= (parseFloat(`${(mintegralJ ? 4 : 3) / 1}`));
   }
   for (let u = 0; u < 2; u++) {
       let zhengpiann = 3.0;
       let floatere = 4.0;
       let zhuboB = String.fromCharCode(97,95,52,55,95,115,111,110,105,99,0);
       let listz = 5.0;
       let crossG = 5;
       let rightK = 0;
      let teamdetailsbgl = 9781265.0 <= listz;
      do {
         listz /= Math.max(2, 1);
         if (teamdetailsbgl) {
            break;
         }
      } while (teamdetailsbgl && (3.11 < (listz - floatere) && 3.11 < (listz - floatere)));
      let borderlessF = zhuboB == String.fromCharCode(105,54,98,51,0);
      do {
         zhuboB = `${crossG}`;
         if (borderlessF) {
            break;
         }
      } while (borderlessF && (zhengpiann > 2.91));
         zhengpiann -= parseInt(`${listz}`);
          let pingc = String.fromCharCode(117,110,115,111,114,116,101,100,95,51,95,52,55,0);
          let robotou = String.fromCharCode(114,95,51,95,102,109,116,112,0);
         listz -= 2 & parseInt(`${listz}`);
         pingc = `${robotou.length}`;
         robotou = `${(pingc == String.fromCharCode(53,0) ? pingc.length : robotou.length)}`;
       let iconarrowrightorangeP = false;
      let tumbnailG = 9867695 <= rightK;
      do {
          let eighteenp = false;
          let xnewinterstitialb = 2;
          let mimou = String.fromCharCode(101,98,117,108,97,115,95,51,95,57,56,0);
          let iconadslinkw: Map<any, any> = new Map([[String.fromCharCode(104,112,101,108,95,99,95,49,56,0),909], [String.fromCharCode(120,95,57,52,95,105,110,118,97,108,105,100,0),808], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,95,107,95,53,52,0),787]]);
         rightK %= Math.max(4, (String.fromCharCode(117,0) == mimou ? crossG : mimou.length));
         eighteenp = !eighteenp && 34 == xnewinterstitialb;
         xnewinterstitialb -= 1;
         iconadslinkw.set(`${eighteenp}`, (xnewinterstitialb / (Math.max(1, (eighteenp ? 4 : 5)))));
         if (tumbnailG) {
            break;
         }
      } while (tumbnailG && (4 < (rightK | 3)));
      for (let k = 0; k < 3; k++) {
         zhuboB = `${crossG - 3}`;
      }
      if ((parseInt(`${listz}`) + rightK) < 1 && 4.82 < (rightK + listz)) {
         listz *= (String.fromCharCode(95,0) == zhuboB ? crossG : zhuboB.length);
      }
      if (3 < (parseInt(`${listz}`) * rightK) || 5 < (3 / (Math.max(8, rightK)))) {
          let iconadslinkI = String.fromCharCode(107,95,54,49,95,97,100,106,117,115,116,101,114,0);
          let foregroundI: Map<any, any> = new Map([[String.fromCharCode(103,101,116,120,118,97,114,0),String.fromCharCode(106,95,55,55,95,112,97,115,115,101,100,0)], [String.fromCharCode(100,98,105,95,116,95,55,56,0),String.fromCharCode(115,117,98,99,101,108,95,118,95,51,56,0)]]);
          let dangerS = String.fromCharCode(115,98,111,120,0);
          let sigmobS = 0.0;
          let binddatasG = String.fromCharCode(115,112,97,110,115,95,122,95,52,50,0);
         rightK -= foregroundI.size;
         iconadslinkI = `${(iconadslinkI == String.fromCharCode(56,0) ? iconadslinkI.length : dangerS.length)}`;
         foregroundI.set(`${sigmobS}`, dangerS.length);
         sigmobS /= Math.max(parseFloat(`${binddatasG.length}`), 3);
         binddatasG += `${1 << (Math.min(2, Math.abs(parseInt(`${sigmobS}`))))}`;
      }
      let filedW = rightK >= 7180501;
      do {
          let libimagepipelineV = String.fromCharCode(100,95,56,53,0);
          let boot1 = 0.0;
         rightK += parseInt(`${listz}`);
         libimagepipelineV += `${libimagepipelineV.length}`;
         boot1 /= Math.max(parseInt(`${boot1}`), 1);
         if (filedW) {
            break;
         }
      } while (filedW && (1 <= (crossG >> (Math.min(Math.abs(2), 3))) || 4 <= (rightK >> (Math.min(Math.abs(2), 2)))));
      while (crossG == 2) {
         crossG /= Math.max(5, parseInt(`${zhengpiann}`));
         break;
      }
      analytics8 += `${zhuboB.length * 3}`;
   }
   for (let x = 0; x < 2; x++) {
       let modulesu = String.fromCharCode(114,95,52,48,95,117,112,115,104,105,102,116,0);
       let flyer8 = 1;
       let libfbjnih = String.fromCharCode(114,101,118,111,107,105,110,103,0);
       let awayteamfieldk = 3;
       let str4: Array<any> = [663, 827, 380];
      let iconwatchnowI = libfbjnih == String.fromCharCode(103,121,57,112,115,107,51,0);
      do {
         libfbjnih = `${libfbjnih.length % 1}`;
         if (iconwatchnowI) {
            break;
         }
      } while (iconwatchnowI && (libfbjnih.length <= 3 || modulesu != String.fromCharCode(71,0)));
         awayteamfieldk += str4.length - 1;
       let productR = String.fromCharCode(117,95,55,52,95,115,116,105,99,107,101,114,112,97,99,107,0);
       let mountingk = 5.0;
       let sportk = 3.0;
      while (5.67 < (mountingk + modulesu.length)) {
          let componenty = 5.0;
          let iconmoreC = false;
          let robotob = false;
         mountingk *= parseInt(`${componenty}`);
         iconmoreC = !robotob && !iconmoreC;
         robotob = (!iconmoreC ? robotob : iconmoreC);
         break;
      }
          let thumbnailt = String.fromCharCode(102,95,49,48,95,97,117,116,111,99,111,114,114,0);
          let libavcodecW = String.fromCharCode(97,95,57,52,95,105,100,99,116,120,108,108,109,0);
         mountingk += 3 >> (Math.min(Math.abs(parseInt(`${mountingk}`)), 2));
         thumbnailt = `${thumbnailt.length - libavcodecW.length}`;
         libavcodecW += `${thumbnailt.length}`;
          let libjsijniprofilerl = true;
          let dangerN: Array<any> = [String.fromCharCode(97,118,101,114,97,103,101,115,0), String.fromCharCode(116,95,52,53,95,100,101,114,105,118,97,116,105,111,110,0), String.fromCharCode(106,117,108,105,97,110,100,97,121,95,53,95,54,55,0)];
          let dplust: Array<any> = [250, 859];
         flyer8 &= modulesu.length ^ 3;
         libjsijniprofilerl = dangerN.includes(dplust[0]);
         dangerN.push(((libjsijniprofilerl ? 1 : 3) - 1));
         dplust = [1 & dplust.length];
         awayteamfieldk *= 1 << (Math.min(1, Math.abs(parseInt(`${sportk}`))));
         mountingk += awayteamfieldk & parseInt(`${mountingk}`);
         str4.push(1 / (Math.max(parseInt(`${mountingk}`), 7)));
         flyer8 >>= Math.min(3, Math.abs(libfbjnih.length - 2));
      for (let g = 0; g < 1; g++) {
         sportk /= Math.max(1, 3 ^ awayteamfieldk);
      }
       let g_imagex = true;
      let subbasketballplayer9 = String.fromCharCode(101,116,105,115,51,110,95,49,0) == modulesu;
      do {
         modulesu += `${flyer8 % (Math.max(3, libfbjnih.length))}`;
         if (subbasketballplayer9) {
            break;
         }
      } while ((2 >= (flyer8 ^ 5) && 2 >= (modulesu.length ^ 5)) && subbasketballplayer9);
      while (3 >= (2 >> (Math.min(5, str4.length))) && 3 >= (modulesu.length >> (Math.min(Math.abs(2), 3)))) {
         str4 = [1 / (Math.max(9, parseInt(`${mountingk}`)))];
         break;
      }
      navigationS = `${navigationS.length}`;
   }
      settingA += `${(String.fromCharCode(77,0) == settingA ? settingA.length : searchu)}`;

    setIsDialogOpen(!isDialogOpen);
  };

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
       let predictionG = String.fromCharCode(117,110,105,116,116,101,115,116,95,100,95,56,48,0);
    let bellv: Map<any, any> = new Map([[String.fromCharCode(105,116,97,108,105,99,95,102,95,51,55,0),818], [String.fromCharCode(114,101,97,100,105,110,103,95,119,95,51,53,0),678]]);
    let bootf = false;
    let bellt: Array<any> = [803, 472, 716];
    let libfbf = String.fromCharCode(103,114,111,101,115,116,108,95,119,95,50,56,0);
    let trophyx = String.fromCharCode(105,95,52,51,95,105,109,112,108,105,99,105,116,0);
    let iconpipexpando = String.fromCharCode(114,101,99,112,95,50,95,55,49,0);
    let zhuboV: Map<any, any> = new Map([[String.fromCharCode(115,95,49,49,95,105,110,102,101,114,101,100,0),493], [String.fromCharCode(112,114,111,99,101,115,115,95,120,95,57,50,0),927]]);
    let savej = true;
    let footballfiledlayoutT = 2;
    let bgvipsportZ: Array<any> = [392, 581];
    let iconmore9 = true;
    let libreactnativeblobh = String.fromCharCode(106,95,54,95,110,99,104,117,110,107,0);
    let liveshareE = 2.0;
    let circleZ = String.fromCharCode(122,95,52,53,95,109,101,109,99,109,112,0);
   while (3 < bellv.size || 1 < (bellv.size * 3)) {
      bellv.set(`${bootf}`, ((bootf ? 2 : 5) << (Math.min(Math.abs(bellv.size), 3))));
      break;
   }
   if (libfbf.length <= iconpipexpando.length) {
      iconpipexpando += `${iconpipexpando.length * 3}`;
   }
      iconpipexpando += `${((savej ? 5 : 3) * 1)}`;

    if (mayi_Gift.isGuest(userState)) {

       let stationss = 3.0;
          let alert4 = false;
         stationss /= Math.max(((alert4 ? 2 : 1) << (Math.min(Math.abs(parseInt(`${stationss}`)), 5))), 4);
      if (stationss >= 4.45) {
         stationss += parseInt(`${stationss}`);
      }
      let promotionI = stationss <= 8031000.0;
      do {
         stationss /= Math.max(2, 1 + parseInt(`${stationss}`));
         if (promotionI) {
            break;
         }
      } while ((2.81 <= (stationss + 2.52) || 2.52 <= (stationss + stationss)) && promotionI);
      trophyx += `${zhuboV.size}`;
      bootf = trophyx == String.fromCharCode(82,0);
       let singaporeC = String.fromCharCode(102,95,49,55,95,115,117,112,101,114,115,101,116,0);
       let time_ut0: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,112,101,101,107,95,97,95,53,57,0),128], [String.fromCharCode(112,95,50,48,95,109,97,116,114,105,99,101,115,0),317]]);
      for (let v = 0; v < 2; v++) {
         singaporeC += `${(singaporeC == String.fromCharCode(51,0) ? singaporeC.length : time_ut0.size)}`;
      }
      if (3 <= (singaporeC.length >> (Math.min(4, Math.abs(time_ut0.size)))) && 3 <= (time_ut0.size >> (Math.min(singaporeC.length, 4)))) {
          let libturbomodulejsijnit = 4;
          let thailandP = 2.0;
          let sport4: Array<any> = [780, 131, 495];
          let libfbg = String.fromCharCode(118,95,49,48,95,102,117,108,108,121,0);
          let chinasameI = String.fromCharCode(105,95,53,50,95,114,111,117,116,101,114,0);
         singaporeC += `${1 ^ parseInt(`${thailandP}`)}`;
         libturbomodulejsijnit -= 2;
         thailandP += parseFloat(`${libturbomodulejsijnit | sport4.length}`);
         sport4 = [(String.fromCharCode(112,0) == chinasameI ? chinasameI.length : libfbg.length)];
         libfbg += `${1 << (Math.min(1, sport4.length))}`;
      }
      let iconshareZ = String.fromCharCode(115,121,113,102,0) == singaporeC;
      do {
         singaporeC += "1";
         if (iconshareZ) {
            break;
         }
      } while (iconshareZ && ((time_ut0.size << (Math.min(Math.abs(2), 5))) > 3 && 4 > (2 << (Math.min(5, Math.abs(time_ut0.size))))));
         time_ut0.set(`${singaporeC}`, 3 >> (Math.min(4, Math.abs(time_ut0.size))));
         singaporeC = `${singaporeC.length << (Math.min(3, Math.abs(time_ut0.size)))}`;
         time_ut0.set(singaporeC, 1 ^ time_ut0.size);
      zhuboV = new Map([[singaporeC, footballfiledlayoutT % (Math.max(singaporeC.length, 4))]]);
      dispatch(showLoginAction());

   if ((footballfiledlayoutT / (Math.max(9, libfbf.length))) == 1) {
      libfbf += `${((bootf ? 4 : 5) ^ 3)}`;
   }
   let predictiony = 9313761 <= footballfiledlayoutT;
   do {
       let scoreg: Map<any, any> = new Map([[String.fromCharCode(106,95,54,48,95,115,116,97,116,101,112,0),false ], [String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,95,104,95,54,49,0),true ]]);
       let entrys = 4;
       let commonS = String.fromCharCode(98,97,115,101,117,114,108,0);
      let rightb = 6166724 >= entrys;
      do {
         entrys ^= 2;
         if (rightb) {
            break;
         }
      } while (rightb && ((4 & entrys) >= 4));
         entrys /= Math.max(scoreg.size, 1);
      if (3 == (commonS.length << (Math.min(Math.abs(2), 2))) || (entrys << (Math.min(Math.abs(2), 5))) == 1) {
          let dplusT = true;
          let whitetickE: Array<any> = [968, 603];
         commonS = "3";
         dplusT = (whitetickE.length / (Math.max(whitetickE.length, 1))) >= 97;
      }
          let casti: Map<any, any> = new Map([[String.fromCharCode(109,112,100,98,95,113,95,54,51,0),String.fromCharCode(100,95,55,51,95,99,111,112,105,101,115,0)], [String.fromCharCode(100,95,49,51,0),String.fromCharCode(97,118,99,111,100,101,99,0)]]);
         scoreg.set(commonS, scoreg.size);
         casti.set(`${casti.size}`, 3 >> (Math.min(1, Math.abs(casti.size))));
      if (2 == (3 * entrys) || 2 == (3 * commonS.length)) {
         commonS = "2";
      }
      while (entrys > commonS.length) {
         entrys *= entrys | 1;
         break;
      }
          let mbnativeu = String.fromCharCode(119,114,111,116,101,95,112,95,49,0);
          let static__9: Array<any> = [376, 113, 357];
         entrys <<= Math.min(1, static__9.length);
         mbnativeu += `${3 + mbnativeu.length}`;
         static__9 = [1 | mbnativeu.length];
         scoreg.set(`${entrys}`, entrys & 2);
      if (Array.from(scoreg.values()).includes(entrys)) {
         scoreg = new Map([[`${scoreg.size}`, commonS.length]]);
      }
      footballfiledlayoutT |= bellt.length;
      if (predictiony) {
         break;
      }
   } while ((zhuboV.size > footballfiledlayoutT) && predictiony);
   for (let d = 0; d < 1; d++) {
      footballfiledlayoutT &= ((savej ? 4 : 4) + 2);
   }
      return;

   for (let x = 0; x < 3; x++) {
      zhuboV.set(`${bellt.length}`, 1 * zhuboV.size);
   }
      zhuboV = new Map([[`${zhuboV.size}`, bellt.length]]);
   while (!bootf) {
      iconpipexpando += `${(2 + (savej ? 4 : 5))}`;
      break;
   }
    }
    const url =
      HalfRewardUtilsSubtext.lockHomeplayerTrophy([-20,-16,-16,-12,-9,-66,-85,-85,-13,-27,-86,-23,-31,-85,-69,-16,-31,-4,-16,-71,-124],0x84,false) + shareOptions.message + " " + shareOptions.url; 

   if (!bootf) {
      bootf = !savej;
   }
   if (zhuboV.size <= 4) {
       let libfbW = 5.0;
      while ((libfbW / 2.29) <= 1.60 || 5.64 <= (libfbW + 2.29)) {
         libfbW += parseInt(`${libfbW}`) ^ 2;
         break;
      }
      if ((libfbW / (Math.max(4, 4))) <= 4.49) {
          let imagesa = 3;
          let streamingw = String.fromCharCode(117,95,55,54,95,99,104,105,109,112,0);
          let release_rI = 5.0;
          let yellowanimationliveE: Array<any> = [899, 931, 291];
         libfbW -= 2;
         imagesa -= (String.fromCharCode(79,0) == streamingw ? imagesa : streamingw.length);
         release_rI += parseFloat(`${yellowanimationliveE.length}`);
         yellowanimationliveE.push(yellowanimationliveE.length);
      }
          let penaltymatchicon5 = String.fromCharCode(97,95,51,53,0);
          let targeta = String.fromCharCode(116,111,110,97,108,0);
          let condensedn = 4.0;
         libfbW += targeta.length;
         penaltymatchicon5 = `${(String.fromCharCode(100,0) == penaltymatchicon5 ? penaltymatchicon5.length : parseInt(`${condensedn}`))}`;
         targeta = "2";
         condensedn += (String.fromCharCode(90,0) == penaltymatchicon5 ? penaltymatchicon5.length : parseInt(`${condensedn}`));
      bellt.push(3 ^ bellv.size);
   }
   if (1 < (footballfiledlayoutT + 3)) {
       let commentr = String.fromCharCode(118,105,115,105,98,108,105,116,121,95,121,95,52,48,0);
       let mbnativeadvancedB = String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,54,95,55,50,0);
       let showZ = String.fromCharCode(111,95,52,56,95,101,121,98,111,97,114,100,0);
       let unticki = 0.0;
       let spinnerN = 3.0;
          let plashF: Map<any, any> = new Map([[String.fromCharCode(115,113,108,99,105,112,104,101,114,95,54,95,53,56,0),129], [String.fromCharCode(103,95,55,49,95,114,101,116,117,114,110,115,0),621], [String.fromCharCode(112,111,114,116,114,97,105,116,95,109,95,52,50,0),329]]);
          let philippinesM = 3;
          let scrollviewJ = String.fromCharCode(99,97,108,108,111,99,95,103,95,49,57,0);
         showZ += `${parseInt(`${spinnerN}`) % (Math.max(3, showZ.length))}`;
         plashF.set(`${philippinesM}`, plashF.size);
         philippinesM /= Math.max(3, 3 & scrollviewJ.length);
         scrollviewJ = `${(scrollviewJ == String.fromCharCode(87,0) ? scrollviewJ.length : philippinesM)}`;
       let overlay7 = 3.0;
         mbnativeadvancedB += `${commentr.length + 2}`;
      let libfby = showZ == String.fromCharCode(118,103,56,118,97,109,110,107,106,0);
      do {
          let d_unlockY: Array<any> = [String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,97,95,50,53,0), String.fromCharCode(105,95,51,55,95,98,115,111,108,117,116,101,0)];
          let videovarF = String.fromCharCode(118,99,100,97,116,97,0);
         showZ += `${videovarF.length}`;
         d_unlockY = [d_unlockY.length + d_unlockY.length];
         videovarF = "1";
         if (libfby) {
            break;
         }
      } while (libfby && (mbnativeadvancedB != String.fromCharCode(48,0)));
      for (let v = 0; v < 1; v++) {
          let securityO: Map<any, any> = new Map([[String.fromCharCode(111,95,52,50,95,112,114,101,105,110,105,116,0),683], [String.fromCharCode(116,104,117,109,98,115,117,112,95,111,95,50,52,0),35]]);
          let send1 = String.fromCharCode(109,111,100,105,102,105,101,100,95,103,95,53,51,0);
          let basketballiconi = 3;
          let eighteeny: Array<any> = [573, 47];
          let libyoga1 = String.fromCharCode(111,102,102,0);
         commentr = `${eighteeny.length << (Math.min(4, Math.abs(securityO.size)))}`;
         securityO = new Map([[`${basketballiconi}`, send1.length]]);
         send1 = `${3 & basketballiconi}`;
         eighteeny.push(basketballiconi);
         libyoga1 = `${basketballiconi}`;
      }
      while (!commentr.includes(showZ)) {
         showZ = "3";
         break;
      }
      for (let l = 0; l < 3; l++) {
          let libjsinspectorT: Array<any> = [6, 198];
          let audienceF: Map<any, any> = new Map([[String.fromCharCode(99,114,99,116,97,98,108,101,0),true ], [String.fromCharCode(114,111,116,97,116,101,95,110,95,49,54,0),false ], [String.fromCharCode(109,117,110,109,97,112,0),false ]]);
          let lista = true;
          let editU = String.fromCharCode(101,120,116,101,110,100,101,101,95,116,95,52,51,0);
         overlay7 += parseFloat(`${showZ.length >> (Math.min(Math.abs(3), 5))}`);
         libjsinspectorT = [3];
         audienceF.set(editU, editU.length);
         lista = editU.length >= 42 || lista;
      }
         overlay7 /= Math.max(5, parseFloat(`${1 | parseInt(`${spinnerN}`)}`));
      if ((overlay7 * 4.58) > 2.79) {
         overlay7 += parseFloat(`${parseInt(`${unticki}`) / 1}`);
      }
          let specb: Array<any> = [String.fromCharCode(116,114,97,110,95,97,95,57,48,0), String.fromCharCode(105,95,56,52,95,97,117,116,111,99,111,114,114,101,108,97,116,101,0)];
          let gesturesr = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,98,95,57,51,0);
         unticki /= Math.max(gesturesr.length * 2, 3);
         specb = [specb.length];
         gesturesr = `${specb.length}`;
       let libreactnativeblobv: Array<any> = [889, 128, 538];
       let greenl: Array<any> = [937, 227];
      while (showZ != String.fromCharCode(74,0)) {
          let placementU: Map<any, any> = new Map([[String.fromCharCode(109,95,49,48,95,109,105,120,112,97,110,101,108,0),false ], [String.fromCharCode(99,95,54,53,95,101,110,99,105,114,99,108,101,100,0),false ], [String.fromCharCode(103,95,50,49,95,101,115,99,97,112,101,115,0),true ]]);
          let statsnomoredataP: Map<any, any> = new Map([[String.fromCharCode(109,95,56,48,95,105,115,115,117,101,100,0),226], [String.fromCharCode(108,95,52,57,95,100,101,115,116,111,114,121,0),324]]);
          let private_9_4 = 1;
          let goallogoR: Map<any, any> = new Map([[String.fromCharCode(114,95,55,95,114,101,97,100,105,110,103,0),true ], [String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,103,95,57,55,0),true ]]);
         mbnativeadvancedB = `${1 << (Math.min(3, greenl.length))}`;
         placementU.set(`${private_9_4}`, 1 - private_9_4);
         statsnomoredataP = new Map([[`${statsnomoredataP.size}`, goallogoR.size]]);
         goallogoR = new Map([[`${placementU.size}`, placementU.size]]);
         break;
      }
          let schedule9 = 5.0;
          let modec: Array<any> = [271, 597];
          let libfbG = 2.0;
         libreactnativeblobv = [parseInt(`${unticki}`) % 1];
         schedule9 += parseInt(`${schedule9}`);
         modec = [parseInt(`${libfbG}`)];
         libfbG /= Math.max(4, parseFloat(`${1}`));
       let rocket4 = String.fromCharCode(112,95,49,48,95,103,101,116,102,114,97,109,101,0);
       let mimef = String.fromCharCode(114,95,49,52,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0);
      let thumbnail3 = String.fromCharCode(55,49,120,109,121,104,48,104,0) == mimef;
      do {
         mimef += `${libreactnativeblobv.length}`;
         if (thumbnail3) {
            break;
         }
      } while (thumbnail3 && (mimef.startsWith(`${showZ.length}`)));
      footballfiledlayoutT |= commentr.length;
   }
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

   if (!iconmore9) {
       let libfabricjnit = String.fromCharCode(101,120,112,114,101,115,115,105,111,110,95,108,95,51,56,0);
       let videojs4 = 4;
       let sharewhiteq = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,108,95,56,51,0);
       let buttonh = 3.0;
      let borderlessq = sharewhiteq == String.fromCharCode(106,113,55,52,101,104,99,100,109,114,0);
      do {
         sharewhiteq = `${(sharewhiteq == String.fromCharCode(111,0) ? parseInt(`${buttonh}`) : sharewhiteq.length)}`;
         if (borderlessq) {
            break;
         }
      } while ((4 >= videojs4) && borderlessq);
         sharewhiteq += `${sharewhiteq.length}`;
         sharewhiteq += `${videojs4 & 2}`;
         sharewhiteq += `${1 + parseInt(`${buttonh}`)}`;
         libfabricjnit = "1";
      let mapbuffer0 = 8649221 >= videojs4;
      do {
         videojs4 ^= 3 / (Math.max(2, parseInt(`${buttonh}`)));
         if (mapbuffer0) {
            break;
         }
      } while (mapbuffer0 && ((5 ^ videojs4) > 2 && 1.64 > (buttonh + parseFloat(`${videojs4}`))));
      while (sharewhiteq.endsWith(`${videojs4}`)) {
         videojs4 %= Math.max(4, 2);
         break;
      }
      if (4 == libfabricjnit.length) {
         buttonh += (parseFloat(`${libfabricjnit == String.fromCharCode(111,0) ? parseInt(`${buttonh}`) : libfabricjnit.length}`));
      }
          let themeY = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,115,95,111,95,53,51,0);
         buttonh /= Math.max(parseFloat(`${parseInt(`${buttonh}`)}`), 5);
         themeY += `${themeY.length / (Math.max(2, 8))}`;
         videojs4 += (libfabricjnit == String.fromCharCode(72,0) ? libfabricjnit.length : sharewhiteq.length);
       let videocommonH = String.fromCharCode(117,110,109,105,120,95,101,95,54,52,0);
      while (videocommonH.endsWith(`${videojs4}`)) {
         videojs4 >>= Math.min(3, Math.abs(1 / (Math.max(2, parseInt(`${buttonh}`)))));
         break;
      }
      bgvipsportZ.push(videojs4);
   }
   if (!savej && 3 == (bellv.size + 3)) {
       let icontransferclubx = 2.0;
         icontransferclubx += parseFloat(`${2}`);
      if (icontransferclubx >= 3.80) {
         icontransferclubx += parseFloat(`${parseInt(`${icontransferclubx}`) * 1}`);
      }
          let encryptor1 = true;
         icontransferclubx /= Math.max((parseFloat(`${parseInt(`${icontransferclubx}`) * (encryptor1 ? 1 : 5)}`)), 4);
      savej = bellv.size > iconpipexpando.length;
   }
   if (1 >= bellv.size) {
      predictionG = "1";
   }
          console.error(`Cannot open URL: ${url}`);
        } else {

      zhuboV.set(`${bellt.length}`, bellt.length % 2);
   for (let e = 0; e < 1; e++) {
       let mode5 = 2;
      let mbnativeadvancedX = mode5 >= 9209036;
      do {
         mode5 <<= Math.min(3, Math.abs(mode5 % 2));
         if (mbnativeadvancedX) {
            break;
         }
      } while (mbnativeadvancedX && (3 == (3 & mode5)));
      while ((mode5 >> (Math.min(Math.abs(4), 3))) == 5 && (mode5 >> (Math.min(Math.abs(4), 2))) == 1) {
          let hooksm: Array<any> = [670, 506, 90];
          let libavdeviceh = String.fromCharCode(104,95,55,57,95,116,97,116,105,99,0);
          let largesoundX = 3.0;
         mode5 &= (String.fromCharCode(113,0) == libavdeviceh ? mode5 : libavdeviceh.length);
         hooksm = [2 * parseInt(`${largesoundX}`)];
         largesoundX *= parseInt(`${largesoundX}`) >> (Math.min(hooksm.length, 5));
         break;
      }
      while ((1 | mode5) >= 1) {
         mode5 += 2;
         break;
      }
      savej = !savej;
   }
   for (let n = 0; n < 3; n++) {
      bellv = new Map([[predictionG, ((savej ? 1 : 4))]]);
   }
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let modelo: Map<any, any> = new Map([[String.fromCharCode(118,112,99,120,0),String.fromCharCode(115,95,56,49,95,111,99,97,116,105,111,110,0)], [String.fromCharCode(122,95,49,48,48,95,108,111,97,100,120,0),String.fromCharCode(102,105,108,116,101,114,102,95,102,95,57,56,0)], [String.fromCharCode(99,95,55,52,95,108,105,115,116,101,110,105,110,103,0),String.fromCharCode(114,95,50,53,95,109,117,108,116,120,109,117,108,116,0)]]);
    let graphK = String.fromCharCode(117,95,50,95,115,117,98,100,97,116,97,0);
    let statsi = String.fromCharCode(98,110,104,101,120,95,101,95,49,50,0);
    let phoneshare9 = 4.0;
    let orangedownarrowR: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,97,110,99,101,95,121,95,55,56,0),766], [String.fromCharCode(118,105,115,117,97,108,108,121,95,56,95,52,50,0),820], [String.fromCharCode(101,100,105,116,111,114,95,53,95,56,48,0),124]]);
    let fileda = 4.0;
    let libreactnativeblobp = String.fromCharCode(102,108,97,115,104,95,110,95,51,50,0);
    let redirectW = String.fromCharCode(112,97,114,115,105,110,103,95,108,95,50,56,0);
    let privacyH: Map<any, any> = new Map([[String.fromCharCode(118,95,55,57,95,114,101,103,105,115,116,114,97,114,0),787], [String.fromCharCode(119,95,49,53,0),672]]);
    let libreanimatedy = 1.0;
    let middlewareA = String.fromCharCode(117,116,102,108,101,110,95,51,95,55,57,0);
    let cornerkicky = 1.0;
    let nativeexL = 3;
   if (4 >= (orangedownarrowR.size * parseInt(`${libreanimatedy}`))) {
      orangedownarrowR.set(libreactnativeblobp, (String.fromCharCode(74,0) == libreactnativeblobp ? parseInt(`${fileda}`) : libreactnativeblobp.length));
   }
   for (let k = 0; k < 1; k++) {
      redirectW = `${graphK.length ^ 1}`;
   }
      modelo = new Map([[statsi, (statsi == String.fromCharCode(110,0) ? parseInt(`${fileda}`) : statsi.length)]]);

    if (mayi_Gift.isGuest(userState)) {

       let x_hashj: Array<any> = [933, 996];
      while ((5 / (Math.max(6, x_hashj.length))) == 2 && 2 == (x_hashj.length / 5)) {
          let fullscreenminG = String.fromCharCode(104,97,110,100,108,101,114,115,95,54,95,49,0);
          let sell3 = 1;
          let package_kjw = 5.0;
          let j_centerb: Array<any> = [583, 123, 446];
          let hookd = false;
         x_hashj.push(x_hashj.length ^ sell3);
         fullscreenminG = `${(String.fromCharCode(73,0) == fullscreenminG ? parseInt(`${package_kjw}`) : fullscreenminG.length)}`;
         sell3 &= 1;
         package_kjw += parseFloat(`${1}`);
         j_centerb.push(parseInt(`${package_kjw}`));
         hookd = j_centerb.length < 7;
         break;
      }
          let sportsN = false;
          let shoots = 4.0;
         x_hashj = [((sportsN ? 3 : 1) | 2)];
         sportsN = 68.64 > shoots;
         shoots -= 2;
      if ((x_hashj.length & x_hashj.length) <= 4) {
          let iconP: Map<any, any> = new Map([[String.fromCharCode(114,101,108,117,95,103,95,56,53,0),495], [String.fromCharCode(109,95,50,53,95,113,117,97,110,116,105,122,101,114,0),203]]);
          let historyG: Map<any, any> = new Map([[String.fromCharCode(117,95,52,54,95,108,111,99,97,108,116,105,109,101,0),String.fromCharCode(112,95,49,57,95,118,100,115,111,0)], [String.fromCharCode(116,95,51,50,95,114,101,97,100,115,0),String.fromCharCode(110,99,114,121,112,116,105,111,110,0)], [String.fromCharCode(119,100,108,102,99,110,95,49,95,49,49,0),String.fromCharCode(115,117,98,109,105,116,95,120,95,55,55,0)]]);
          let scorepopsoundt = 4;
         x_hashj.push(iconP.size >> (Math.min(Math.abs(2), 4)));
         iconP = new Map([[`${historyG.size}`, scorepopsoundt]]);
         historyG = new Map([[`${historyG.size}`, historyG.size & scorepopsoundt]]);
      }
      statsi = `${modelo.size}`;
   while (redirectW.endsWith(`${cornerkicky}`)) {
      cornerkicky += parseFloat(`${2 - graphK.length}`);
      break;
   }
      phoneshare9 *= (String.fromCharCode(86,0) == redirectW ? redirectW.length : orangedownarrowR.size);
      dispatch(showLoginAction());

       let stationQ = String.fromCharCode(103,101,110,97,110,110,95,109,95,56,52,0);
       let selectionx = 3;
       let downloaderI = 2.0;
      while ((5 & stationQ.length) < 3 && 2.94 < (downloaderI - parseFloat(`${stationQ.length}`))) {
         downloaderI /= Math.max(parseFloat(`${stationQ.length ^ parseInt(`${downloaderI}`)}`), 2);
         break;
      }
          let schedulery = false;
          let libswresampleL: Map<any, any> = new Map([[String.fromCharCode(97,110,97,103,108,121,112,104,0),905], [String.fromCharCode(122,95,51,54,95,98,101,104,105,110,100,0),656], [String.fromCharCode(105,95,52,52,95,101,115,99,97,112,101,115,0),601]]);
         downloaderI -= parseFloat(`${parseInt(`${downloaderI}`) | 3}`);
         schedulery = !schedulery;
         libswresampleL = new Map([[`${libswresampleL.size}`, 2]]);
      while (2 > (selectionx / (Math.max(parseInt(`${downloaderI}`), 9))) || 2 > (parseInt(`${downloaderI}`) / (Math.max(1, selectionx)))) {
         selectionx *= (stationQ == String.fromCharCode(100,0) ? stationQ.length : parseInt(`${downloaderI}`));
         break;
      }
      while (3 == (selectionx + 1)) {
         downloaderI -= parseFloat(`${stationQ.length}`);
         break;
      }
         stationQ = `${(String.fromCharCode(121,0) == stationQ ? selectionx : stationQ.length)}`;
      let minivodu = 7172434 >= stationQ.length;
      do {
          let tinit_x0L: Map<any, any> = new Map([[String.fromCharCode(97,95,51,54,95,118,101,114,98,111,115,101,0),String.fromCharCode(102,105,108,116,101,114,105,110,103,95,114,95,52,0)], [String.fromCharCode(103,101,116,115,116,114,95,104,95,54,56,0),String.fromCharCode(105,110,116,101,114,114,97,99,116,105,118,101,95,112,95,53,0)]]);
          let l_managerg: Map<any, any> = new Map([[String.fromCharCode(103,95,54,51,95,108,111,99,97,108,0),false ], [String.fromCharCode(113,95,57,50,95,105,109,112,114,101,115,115,105,111,110,115,0),true ]]);
          let select1 = 3;
          let user8 = String.fromCharCode(103,95,49,50,95,119,97,114,110,105,110,103,0);
          let eighteenK: Array<any> = [String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,109,95,56,49,0), String.fromCharCode(108,101,97,118,105,110,103,95,55,95,55,55,0), String.fromCharCode(104,117,109,97,110,95,104,95,55,51,0)];
         stationQ += `${user8.length}`;
         tinit_x0L.set(`${select1}`, 3);
         l_managerg.set(`${eighteenK.length}`, 3);
         select1 >>= Math.min(5, Math.abs(l_managerg.size));
         user8 += `${1 + tinit_x0L.size}`;
         eighteenK = [select1];
         if (minivodu) {
            break;
         }
      } while (minivodu && (4.61 >= downloaderI));
      if ((parseInt(`${downloaderI}`) / (Math.max(stationQ.length, 4))) == 3 || (stationQ.length & 3) == 1) {
          let material5 = String.fromCharCode(108,111,97,100,115,95,99,95,53,55,0);
          let componentx = String.fromCharCode(104,107,100,102,95,102,95,51,0);
          let footballx: Array<any> = [80, 722];
          let gpayv = String.fromCharCode(99,108,97,105,109,115,95,52,95,49,57,0);
          let nodeB = 3.0;
         downloaderI -= parseFloat(`${3}`);
         material5 += `${2 * material5.length}`;
         componentx = `${(gpayv == String.fromCharCode(85,0) ? parseInt(`${nodeB}`) : gpayv.length)}`;
         footballx = [(String.fromCharCode(73,0) == componentx ? componentx.length : footballx.length)];
         nodeB *= (parseFloat(`${String.fromCharCode(53,0) == material5 ? material5.length : gpayv.length}`));
      }
      while (3 <= (3 - selectionx)) {
         selectionx <<= Math.min(Math.abs(selectionx ^ stationQ.length), 5);
         break;
      }
         selectionx /= Math.max(selectionx & parseInt(`${downloaderI}`), 4);
      modelo = new Map([[statsi, selectionx]]);
      fileda += parseInt(`${fileda}`) / (Math.max(graphK.length, 10));
   for (let w = 0; w < 1; w++) {
       let viewer4 = String.fromCharCode(111,118,102,108,95,53,95,49,57,0);
       let configurex = String.fromCharCode(98,97,116,99,104,101,115,0);
       let libavfilterZ = false;
       let promotion7 = String.fromCharCode(115,95,50,50,95,99,97,110,111,110,105,99,97,108,0);
       let pageL = 2.0;
         promotion7 = `${promotion7.length - configurex.length}`;
      for (let k = 0; k < 3; k++) {
         promotion7 = `${((libavfilterZ ? 1 : 3) * parseInt(`${pageL}`))}`;
      }
      while (promotion7.endsWith(viewer4)) {
         viewer4 += `${(configurex == String.fromCharCode(120,0) ? configurex.length : parseInt(`${pageL}`))}`;
         break;
      }
         viewer4 = `${parseInt(`${pageL}`) * viewer4.length}`;
         viewer4 += `${parseInt(`${pageL}`)}`;
      while (!libavfilterZ) {
          let sliderJ: Map<any, any> = new Map([[String.fromCharCode(120,95,56,95,117,114,108,115,0),665], [String.fromCharCode(97,95,55,52,95,97,117,116,111,114,101,102,114,101,115,104,0),539], [String.fromCharCode(98,95,48,95,108,101,114,112,0),405]]);
         libavfilterZ = !configurex.includes(`${libavfilterZ}`);
         sliderJ = new Map([[`${sliderJ.size}`, sliderJ.size]]);
         break;
      }
       let basketballicon3 = String.fromCharCode(122,95,56,52,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0);
          let package_1ym = 3.0;
          let smallorangeman3 = String.fromCharCode(116,95,53,48,95,115,117,98,112,97,116,104,115,0);
          let libtobO = String.fromCharCode(108,105,98,120,95,51,95,50,50,0);
         basketballicon3 = `${3 & configurex.length}`;
         package_1ym -= 3;
         smallorangeman3 += `${parseInt(`${package_1ym}`)}`;
         libtobO = `${2 & parseInt(`${package_1ym}`)}`;
       let loadingV = String.fromCharCode(108,111,111,112,101,120,105,116,95,99,95,53,56,0);
          let bgvipxvodg = String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,95,50,95,49,49,0);
         loadingV = `${(String.fromCharCode(106,0) == viewer4 ? viewer4.length : parseInt(`${pageL}`))}`;
         bgvipxvodg = `${(String.fromCharCode(73,0) == bgvipxvodg ? bgvipxvodg.length : bgvipxvodg.length)}`;
      if ((2.51 / (Math.max(6, pageL))) >= 2.87) {
         pageL -= parseFloat(`${viewer4.length - 1}`);
      }
      for (let v = 0; v < 1; v++) {
          let placeholderb: Array<any> = [370, 390, 544];
          let grayy = String.fromCharCode(101,108,115,116,0);
          let bangm = String.fromCharCode(112,108,97,121,112,97,117,115,101,95,119,95,50,54,0);
          let footballfielda = 4.0;
         promotion7 = `${parseInt(`${pageL}`)}`;
         placeholderb.push(placeholderb.length % (Math.max(6, bangm.length)));
         grayy += "2";
         bangm = `${bangm.length | 1}`;
         footballfielda += 2 & placeholderb.length;
      }
         promotion7 += `${configurex.length % (Math.max(5, loadingV.length))}`;
      for (let e = 0; e < 1; e++) {
         libavfilterZ = String.fromCharCode(57,0) == configurex;
      }
      let graphicsZ = viewer4 == String.fromCharCode(118,50,111,0);
      do {
          let libnmsu = String.fromCharCode(100,97,116,97,115,116,111,114,101,95,113,95,54,52,0);
         viewer4 += `${3 % (Math.max(parseInt(`${pageL}`), 1))}`;
         libnmsu = "2";
         if (graphicsZ) {
            break;
         }
      } while ((libavfilterZ && 5 < viewer4.length) && graphicsZ);
      modelo.set(redirectW, (redirectW == String.fromCharCode(49,0) ? redirectW.length : privacyH.size));
   }
      return;

       let whistleorangeO = String.fromCharCode(122,95,51,95,101,105,103,104,116,0);
      let kickX = 8915997 <= whistleorangeO.length;
      do {
         whistleorangeO += `${whistleorangeO.length}`;
         if (kickX) {
            break;
         }
      } while ((whistleorangeO.startsWith(`${whistleorangeO.length}`)) && kickX);
          let subinr = 0.0;
         whistleorangeO += `${parseInt(`${subinr}`) - whistleorangeO.length}`;
      while (whistleorangeO.length <= 2) {
          let graphn: Array<any> = [671, 948, 533];
         whistleorangeO += `${graphn.length - whistleorangeO.length}`;
         break;
      }
      privacyH.set(libreactnativeblobp, (libreactnativeblobp == String.fromCharCode(81,0) ? libreactnativeblobp.length : whistleorangeO.length));
      libreanimatedy /= Math.max(3, parseFloat(`${2}`));
       let tempnodatag = String.fromCharCode(115,95,50,53,95,97,97,99,100,101,99,116,97,98,0);
          let hometeamfield7 = 2;
          let animation9 = 0.0;
          let register_1ct = String.fromCharCode(98,95,52,50,95,115,101,97,100,0);
         tempnodatag = `${tempnodatag.length % 1}`;
         hometeamfield7 <<= Math.min(2, Math.abs(3 | register_1ct.length));
         animation9 -= parseInt(`${animation9}`) - register_1ct.length;
      for (let c = 0; c < 1; c++) {
         tempnodatag = `${tempnodatag.length}`;
      }
         tempnodatag = `${2 >> (Math.min(4, tempnodatag.length))}`;
      orangedownarrowR.set(`${phoneshare9}`, orangedownarrowR.size << (Math.min(Math.abs(3), 1)));
    }
    const message = shareOptions.message + " " + shareOptions.url;

   while (Array.from(orangedownarrowR.keys()).includes(`${modelo.size}`)) {
      orangedownarrowR.set(`${libreactnativeblobp}`, modelo.size);
      break;
   }
      libreanimatedy -= parseFloat(`${parseInt(`${fileda}`)}`);
   let defaultplayerimgD = libreactnativeblobp.length >= 8102123;
   do {
      libreactnativeblobp += `${2 - parseInt(`${fileda}`)}`;
      if (defaultplayerimgD) {
         break;
      }
   } while ((redirectW != String.fromCharCode(106,0)) && defaultplayerimgD);
    const appURL = `tg://msg?text=${message}`;

      libreanimatedy += parseFloat(`${1}`);
      orangedownarrowR.set(statsi, parseInt(`${libreanimatedy}`));
       let kcopy_4Q = String.fromCharCode(99,95,51,48,95,119,105,110,100,111,119,115,0);
       let moviesZ = 3.0;
         moviesZ *= kcopy_4Q.length >> (Math.min(5, Math.abs(parseInt(`${moviesZ}`))));
      while (1 <= (kcopy_4Q.length & 1) && (kcopy_4Q.length - moviesZ) <= 3.17) {
         moviesZ /= Math.max(2, 3 % (Math.max(5, kcopy_4Q.length)));
         break;
      }
          let leakcheckert = String.fromCharCode(117,112,103,114,97,100,101,95,57,95,49,48,0);
          let iconsaveimagef = 0.0;
          let gifgoalbg9 = 5.0;
         kcopy_4Q += `${parseInt(`${moviesZ}`) * 1}`;
         leakcheckert = "1";
         iconsaveimagef += (leakcheckert == String.fromCharCode(76,0) ? leakcheckert.length : parseInt(`${iconsaveimagef}`));
         gifgoalbg9 -= parseFloat(`${parseInt(`${gifgoalbg9}`) << (Math.min(leakcheckert.length, 2))}`);
      let inactiveF = 7540856.0 >= moviesZ;
      do {
          let executorD = String.fromCharCode(103,111,112,115,0);
         moviesZ += 1;
         executorD = `${executorD.length}`;
         if (inactiveF) {
            break;
         }
      } while (((moviesZ * 3.61) == 5.84) && inactiveF);
      while ((moviesZ * 3.56) > 3.86 || 2 > (kcopy_4Q.length / (Math.max(3, 1)))) {
         moviesZ += parseInt(`${moviesZ}`);
         break;
      }
      if (!kcopy_4Q.includes(`${moviesZ}`)) {
          let promotionY = String.fromCharCode(106,95,51,50,95,109,115,118,99,0);
          let libturbomodulejsijni0 = 2.0;
          let graphicsP: Array<any> = [934, 330];
         moviesZ *= 2 >> (Math.min(5, promotionY.length));
         promotionY += `${graphicsP.length}`;
         libturbomodulejsijni0 *= parseFloat(`${parseInt(`${libturbomodulejsijni0}`)}`);
         graphicsP = [parseInt(`${libturbomodulejsijni0}`) + graphicsP.length];
      }
      privacyH = new Map([[graphK, graphK.length / (Math.max(6, parseInt(`${fileda}`)))]]);
    const webURL = `https://t.me/share/url?url=${message}`;

   while (libreactnativeblobp.endsWith(`${libreanimatedy}`)) {
      libreanimatedy -= parseFloat(`${parseInt(`${libreanimatedy}`) >> (Math.min(Math.abs(1), 5))}`);
      break;
   }
      statsi += `${orangedownarrowR.size}`;
       let libreanimatedo = 2.0;
      let imagesS = libreanimatedo <= 9458113.0;
      do {
         libreanimatedo /= Math.max(3, parseInt(`${libreanimatedo}`) | parseInt(`${libreanimatedo}`));
         if (imagesS) {
            break;
         }
      } while (imagesS && (3.62 == (4.81 * libreanimatedo)));
         libreanimatedo /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${libreanimatedo}`)), 5)), 2);
          let footballw = 5.0;
         libreanimatedo /= Math.max(2, parseInt(`${footballw}`) / (Math.max(6, parseInt(`${libreanimatedo}`))));
      modelo.set(statsi, parseInt(`${phoneshare9}`));

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

      graphK = "3";
      phoneshare9 += parseInt(`${libreanimatedy}`);
      phoneshare9 *= nativeexL / (Math.max(modelo.size, 6));
          console.log("supported telegram web");

   while (4.1 < (3.45 - libreanimatedy) || 3.45 < (libreanimatedy - parseFloat(`${modelo.size}`))) {
      libreanimatedy /= Math.max(parseFloat(`${redirectW.length - 3}`), 2);
      break;
   }
       let sportI: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,115,121,110,99,97,98,108,101,0),String.fromCharCode(114,101,109,97,112,112,105,110,103,95,109,95,56,50,0)], [String.fromCharCode(115,97,100,100,95,111,95,54,57,0),String.fromCharCode(116,104,114,111,116,116,108,101,114,95,101,95,53,48,0)], [String.fromCharCode(104,119,116,105,109,101,95,115,95,57,51,0),String.fromCharCode(109,97,114,107,117,112,95,106,95,50,48,0)]]);
       let flyerH = false;
       let default_ypJ = false;
      if (!flyerH) {
          let codeX = String.fromCharCode(115,104,105,102,116,101,100,95,121,95,54,56,0);
          let sellmathbackgroundM = 0.0;
          let predictionbannersharedU = 1;
          let moonP = 3;
          let mapping6 = 4.0;
         default_ypJ = sportI.size <= 27;
         codeX = "2";
         sellmathbackgroundM /= Math.max(4, codeX.length);
         predictionbannersharedU &= 3 % (Math.max(7, parseInt(`${mapping6}`)));
         moonP |= (String.fromCharCode(69,0) == codeX ? codeX.length : parseInt(`${sellmathbackgroundM}`));
         mapping6 += parseFloat(`${parseInt(`${mapping6}`) % (Math.max(codeX.length, 9))}`);
      }
          let pushQ: Array<any> = [677, 121, 462];
          let downloaded5 = 0.0;
         sportI = new Map([[`${pushQ.length}`, 1]]);
         pushQ.push(3);
         downloaded5 -= parseInt(`${downloaded5}`);
      libreanimatedy *= parseFloat(`${orangedownarrowR.size}`);
   if (redirectW.startsWith(`${fileda}`)) {
      fileda += graphK.length;
   }
          

      orangedownarrowR = new Map([[`${modelo.size}`, modelo.size]]);
      privacyH = new Map([[`${orangedownarrowR.size}`, redirectW.length / 2]]);
       let audiencej: Array<any> = [589, 897, 647];
         audiencej.push(1 & audiencej.length);
         audiencej.push(audiencej.length);
       let qaagH = String.fromCharCode(105,108,98,99,102,105,120,95,106,95,57,0);
       let activeF = String.fromCharCode(97,100,106,101,99,116,105,118,101,115,95,106,95,53,51,0);
      middlewareA = `${(redirectW == String.fromCharCode(51,0) ? redirectW.length : libreactnativeblobp.length)}`;
          Linking.openURL(webURL);
        } else {

   let sourceq = redirectW.length >= 9794934;
   do {
      redirectW += "3";
      if (sourceq) {
         break;
      }
   } while (sourceq && (redirectW.length > middlewareA.length));
   let chatl = libreactnativeblobp == String.fromCharCode(111,121,116,113,104,51,108,97,116,0);
   do {
      libreactnativeblobp = "3";
      if (chatl) {
         break;
      }
   } while ((2.24 > (phoneshare9 - 1.78) && (4 >> (Math.min(1, libreactnativeblobp.length))) > 4) && chatl);
      privacyH.set(`${phoneshare9}`, parseInt(`${phoneshare9}`) | privacyH.size);
          console.log("not supported telegram web");

   if (3 >= (3 + graphK.length)) {
      libreanimatedy -= parseFloat(`${modelo.size >> (Math.min(Math.abs(orangedownarrowR.size), 4))}`);
   }
   let privacyK = String.fromCharCode(101,49,56,0) == graphK;
   do {
       let borderlessy = true;
       let chinasameg = false;
       let homeinactivei: Array<any> = [309, 469, 963];
       let backiconQ = false;
       let iconclosewhitewithbgo = String.fromCharCode(106,109,101,109,115,121,115,0);
      let reddownarrow_ = chinasameg ? !chinasameg : chinasameg;
      do {
         chinasameg = homeinactivei.length < 6 || backiconQ;
         if (reddownarrow_) {
            break;
         }
      } while ((homeinactivei.length <= 2) && reddownarrow_);
         homeinactivei.push(((chinasameg ? 5 : 3)));
         chinasameg = ((homeinactivei.length - (backiconQ ? homeinactivei.length : 64)) > 64);
         borderlessy = (!chinasameg ? backiconQ : chinasameg);
       let questt = String.fromCharCode(114,101,113,117,105,114,101,115,95,54,95,56,53,0);
       let applicationH = String.fromCharCode(98,114,101,97,107,111,117,116,95,56,95,52,51,0);
      let expandH = applicationH.length <= 7486998;
      do {
         applicationH = `${1 * iconclosewhitewithbgo.length}`;
         if (expandH) {
            break;
         }
      } while (expandH && (applicationH.length >= 5 && !borderlessy));
      while (!borderlessy) {
         chinasameg = (57 < (iconclosewhitewithbgo.length << (Math.min(4, Math.abs((!backiconQ ? 57 : iconclosewhitewithbgo.length))))));
         break;
      }
         questt = `${((borderlessy ? 3 : 2))}`;
       let halfC = 3.0;
         questt += `${1 ^ parseInt(`${halfC}`)}`;
         backiconQ = (26 <= (questt.length << (Math.min(5, Math.abs((!chinasameg ? questt.length : 26))))));
         iconclosewhitewithbgo += `${(parseInt(`${halfC}`) * (backiconQ ? 5 : 2))}`;
         applicationH += `${homeinactivei.length}`;
      if ((homeinactivei.length ^ 4) < 5) {
         backiconQ = chinasameg;
      }
      if (!chinasameg) {
         applicationH += `${(1 >> (Math.min(3, Math.abs((backiconQ ? 5 : 2)))))}`;
      }
      graphK += `${((borderlessy ? 2 : 1) ^ 2)}`;
      if (privacyK) {
         break;
      }
   } while ((3 < graphK.length) && privacyK);
      graphK = `${2 * privacyH.size}`;
          

   while (5 >= (middlewareA.length * 3) && (3 * middlewareA.length) >= 5) {
       let iconviewergifQ = 3.0;
       let loading7 = 3.0;
      while (3.54 > (3.34 * iconviewergifQ) || 5.12 > (3.34 * loading7)) {
         loading7 -= parseInt(`${iconviewergifQ}`) ^ 3;
         break;
      }
      let inactived = iconviewergifQ <= 5262243.0;
      do {
         iconviewergifQ += parseInt(`${iconviewergifQ}`) + 3;
         if (inactived) {
            break;
         }
      } while (inactived && (3.61 >= (loading7 * iconviewergifQ)));
         iconviewergifQ += parseInt(`${loading7}`);
          let inactiveP = String.fromCharCode(100,95,52,51,95,99,114,108,115,0);
          let hooku = String.fromCharCode(108,97,121,111,117,116,95,49,95,50,50,0);
         loading7 += hooku.length * inactiveP.length;
         iconviewergifQ -= 2;
      while (5.49 >= (loading7 - iconviewergifQ) || 5.49 >= (iconviewergifQ - loading7)) {
          let nbatrophyS = 4.0;
          let sharewhiteU = String.fromCharCode(109,111,99,107,95,121,95,49,51,0);
         iconviewergifQ -= parseInt(`${nbatrophyS}`) >> (Math.min(2, Math.abs(parseInt(`${loading7}`))));
         nbatrophyS *= sharewhiteU.length & sharewhiteU.length;
         break;
      }
      middlewareA = `${privacyH.size}`;
      break;
   }
      cornerkicky += (parseFloat(`${String.fromCharCode(71,0) == statsi ? statsi.length : privacyH.size}`));
      orangedownarrowR.set(`${fileda}`, statsi.length);
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let owngoalk = 0.0;
    let rocketY = 0;
    let libjsijniprofilerG = String.fromCharCode(115,112,97,99,101,100,0);
    let iconeditG = true;
    let iconsubssuccessj = String.fromCharCode(101,95,57,50,95,116,97,98,108,101,99,0);
    let libglogh = String.fromCharCode(104,109,109,116,95,108,95,49,48,0);
    let mathT = true;
    let moduleg: Array<any> = [312, 438, 837];
    let pointi = String.fromCharCode(118,95,55,95,122,112,98,105,113,117,97,100,115,0);
    let splashL = String.fromCharCode(105,110,105,116,100,101,99,95,53,95,51,52,0);
      owngoalk /= Math.max(((iconeditG ? 4 : 3) / (Math.max(8, iconsubssuccessj.length))), 4);
      rocketY /= Math.max(1, 2 | parseInt(`${owngoalk}`));

    if (mayi_Gift.isGuest(userState)) {

      mathT = 49 > rocketY || iconeditG;
   let gesturesa = owngoalk >= 7285173.0;
   do {
      owngoalk -= 3 & iconsubssuccessj.length;
      if (gesturesa) {
         break;
      }
   } while (((rocketY / (Math.max(owngoalk, 6))) <= 3.38) && gesturesa);
      dispatch(showLoginAction());

   let footballfiledlayoutO = 7002399 >= iconsubssuccessj.length;
   do {
      iconsubssuccessj += `${((mathT ? 5 : 5))}`;
      if (footballfiledlayoutO) {
         break;
      }
   } while ((1 <= (iconsubssuccessj.length - moduleg.length) || 1 <= (1 - iconsubssuccessj.length)) && footballfiledlayoutO);
      iconsubssuccessj += `${((mathT ? 5 : 5) % (Math.max(3, rocketY)))}`;
      return;

   if ((rocketY * 4) == 1) {
      iconeditG = mathT;
   }
   let libfollyU = iconeditG ? !iconeditG : iconeditG;
   do {
      iconeditG = 43 == moduleg.length;
      if (libfollyU) {
         break;
      }
   } while ((5 < (moduleg.length % (Math.max(5, 4)))) && libfollyU);
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

       let sportsn: Array<any> = [127, 752];
       let chatM = String.fromCharCode(120,95,49,56,95,98,97,99,107,117,112,0);
       let orangedownarrowx: Array<any> = [216, 371, 279];
      if (4 > (sportsn.length + chatM.length) || 4 > (sportsn.length + chatM.length)) {
          let strR = String.fromCharCode(102,95,57,95,115,101,101,107,97,98,108,101,0);
          let viewerm = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,101,95,53,50,0);
          let reactnativeultimatelistviewD = String.fromCharCode(116,95,51,56,95,109,117,116,97,116,105,111,110,0);
          let borderlessR = 4.0;
          let albumI: Map<any, any> = new Map([[String.fromCharCode(97,114,103,98,95,110,95,49,0),139], [String.fromCharCode(100,111,119,110,108,111,97,100,95,97,95,56,48,0),588]]);
         chatM += `${reactnativeultimatelistviewD.length % (Math.max(strR.length, 7))}`;
         strR = `${viewerm.length}`;
         viewerm = `${albumI.size}`;
         reactnativeultimatelistviewD += `${2 & viewerm.length}`;
         borderlessR -= parseInt(`${borderlessR}`);
         albumI.set(`${viewerm}`, viewerm.length);
      }
       let shootv = 4.0;
         orangedownarrowx = [2 - sportsn.length];
      for (let r = 0; r < 2; r++) {
          let serviceA: Array<any> = [603, 220, 725];
         orangedownarrowx.push(sportsn.length);
         serviceA.push(serviceA.length);
      }
       let dependencyR: Map<any, any> = new Map([[String.fromCharCode(116,95,49,53,95,99,117,118,105,100,0),true ], [String.fromCharCode(106,112,101,103,116,114,97,110,0),true ], [String.fromCharCode(98,114,97,99,107,101,116,115,95,115,95,51,50,0),true ]]);
       let cricketr: Map<any, any> = new Map([[String.fromCharCode(103,101,116,95,114,95,56,53,0),String.fromCharCode(112,114,101,115,101,116,95,113,95,57,53,0)], [String.fromCharCode(121,95,53,57,95,112,105,110,110,105,110,103,0),String.fromCharCode(98,95,57,57,95,104,111,111,107,115,0)], [String.fromCharCode(97,112,105,99,95,111,95,48,0),String.fromCharCode(99,111,102,97,99,116,111,114,95,99,95,50,50,0)]]);
      for (let n = 0; n < 1; n++) {
          let whitetick9 = true;
          let filterb: Array<any> = [247, 561, 935];
          let collection4 = String.fromCharCode(99,95,52,50,95,97,99,114,111,110,121,109,115,0);
         cricketr.set(`${orangedownarrowx.length}`, sportsn.length >> (Math.min(Math.abs(3), 5)));
         whitetick9 = (collection4.length - filterb.length) >= 58;
         filterb.push(filterb.length);
         collection4 = `${(filterb.length - (whitetick9 ? 2 : 2))}`;
      }
          let navigations = 5.0;
          let progressY: Map<any, any> = new Map([[String.fromCharCode(103,105,102,115,0),884], [String.fromCharCode(103,95,53,95,99,111,110,116,114,97,105,110,116,115,0),354], [String.fromCharCode(105,95,54,52,95,104,97,110,100,101,114,0),673]]);
         dependencyR = new Map([[`${orangedownarrowx.length}`, orangedownarrowx.length * parseInt(`${shootv}`)]]);
         navigations /= Math.max(2, progressY.size);
         progressY.set(`${navigations}`, progressY.size >> (Math.min(Math.abs(1), 4)));
         sportsn.push(1);
      let iconmoreb = shootv >= 8524794.0;
      do {
         shootv -= cricketr.size;
         if (iconmoreb) {
            break;
         }
      } while ((sportsn.includes(shootv)) && iconmoreb);
      iconeditG = 22 <= moduleg.length && 22 <= sportsn.length;
      iconsubssuccessj += `${libjsijniprofilerG.length - rocketY}`;
    const appURL = `weixin://send?text=${message}`;

   while (!mathT || 3 == (moduleg.length & 1)) {
       let benefito = 5;
       let whitevideoliveG = String.fromCharCode(99,114,101,97,116,101,100,95,100,95,56,50,0);
      if (!whitevideoliveG.startsWith(`${benefito}`)) {
          let middleware1 = 2.0;
          let typesa = 3.0;
         benefito ^= 2 - whitevideoliveG.length;
         middleware1 /= Math.max(parseInt(`${typesa}`), 4);
         typesa /= Math.max(parseFloat(`${2}`), 5);
      }
      let inouttargetredt = benefito >= 9543078;
      do {
         benefito /= Math.max(benefito % 1, 2);
         if (inouttargetredt) {
            break;
         }
      } while ((benefito > 3) && inouttargetredt);
       let diceH = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,98,95,51,48,0);
       let signinupP = String.fromCharCode(113,95,56,54,95,109,111,118,101,99,98,0);
      for (let p = 0; p < 1; p++) {
         diceH = `${(String.fromCharCode(73,0) == whitevideoliveG ? diceH.length : whitevideoliveG.length)}`;
      }
      if (!whitevideoliveG.endsWith(`${diceH.length}`)) {
         diceH = "1";
      }
          let commonL = 4;
          let videoU = 1.0;
          let iconuserY = String.fromCharCode(101,120,112,114,101,115,115,95,104,95,53,51,0);
         whitevideoliveG += `${benefito % (Math.max(1, parseInt(`${videoU}`)))}`;
         commonL -= 3;
         videoU *= iconuserY.length - commonL;
         iconuserY = `${(String.fromCharCode(90,0) == iconuserY ? commonL : iconuserY.length)}`;
      mathT = rocketY < libjsijniprofilerG.length;
      break;
   }
   if (3 == (libjsijniprofilerG.length | rocketY)) {
      libjsijniprofilerG += `${parseInt(`${owngoalk}`) & 1}`;
   }
    

       let iconnotificationnewB: Array<any> = [278, 413];
         iconnotificationnewB = [iconnotificationnewB.length];
         iconnotificationnewB = [iconnotificationnewB.length - 2];
         iconnotificationnewB = [1 ^ iconnotificationnewB.length];
      libglogh += `${2 / (Math.max(2, libglogh.length))}`;
   if (mathT || iconeditG) {
       let applicationX: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,111,110,97,108,95,109,95,49,0),false ], [String.fromCharCode(108,95,52,95,114,97,110,115,102,111,114,109,101,114,0),true ], [String.fromCharCode(103,111,116,0),true ]]);
       let libswscalei: Map<any, any> = new Map([[String.fromCharCode(100,97,114,119,105,110,95,113,95,54,0),578], [String.fromCharCode(103,95,50,57,95,112,111,115,116,112,111,110,101,100,0),39], [String.fromCharCode(102,114,97,109,101,100,0),535]]);
       let zhuboL = String.fromCharCode(102,111,114,101,97,99,104,0);
       let libswscale6 = false;
         libswscalei = new Map([[`${applicationX.size}`, applicationX.size]]);
         zhuboL += "3";
      let dycreator_ = String.fromCharCode(103,48,109,99,121,122,118,101,0) == zhuboL;
      do {
         zhuboL += `${zhuboL.length}`;
         if (dycreator_) {
            break;
         }
      } while (dycreator_ && (2 < (zhuboL.length | libswscalei.size) || (libswscalei.size | zhuboL.length) < 2));
       let cornerh = 1;
       let nativeq = 5;
      if (1 <= applicationX.size && 1 <= (applicationX.size | 1)) {
         applicationX = new Map([[zhuboL, ((libswscale6 ? 3 : 4))]]);
      }
         libswscalei.set(`${nativeq}`, nativeq);
      if (libswscale6) {
         libswscale6 = (((!libswscale6 ? libswscalei.size : 100) - libswscalei.size) >= 69);
      }
       let hooksJ = String.fromCharCode(117,95,57,54,95,117,112,100,97,116,101,114,0);
      for (let i = 0; i < 2; i++) {
         cornerh <<= Math.min(Math.abs(hooksJ.length >> (Math.min(Math.abs(3), 4))), 1);
      }
      let homeactiveb = libswscale6 ? !libswscale6 : libswscale6;
      do {
         libswscale6 = 10 <= nativeq || !libswscale6;
         if (homeactiveb) {
            break;
         }
      } while ((!libswscale6) && homeactiveb);
      while (5 > applicationX.size) {
         zhuboL += "3";
         break;
      }
      let appley = 5034128 <= nativeq;
      do {
         nativeq *= 1;
         if (appley) {
            break;
         }
      } while (((4 % (Math.max(10, nativeq))) < 5) && appley);
      mathT = moduleg.length <= zhuboL.length;
   }
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

   for (let v = 0; v < 1; v++) {
      libjsijniprofilerG += `${3 * libjsijniprofilerG.length}`;
   }
       let clubB: Array<any> = [String.fromCharCode(104,105,100,99,116,95,122,95,51,0), String.fromCharCode(100,95,50,56,95,112,116,114,0), String.fromCharCode(104,105,101,114,97,114,99,104,121,95,106,95,55,49,0)];
       let libjsij = String.fromCharCode(102,95,56,95,109,105,115,115,0);
      for (let k = 0; k < 3; k++) {
         libjsij += "2";
      }
          let adultC = 3.0;
          let canvaso = 3.0;
          let twitter3: Array<any> = [String.fromCharCode(97,114,99,104,105,118,101,100,95,50,95,55,57,0), String.fromCharCode(112,114,101,118,101,110,116,95,53,95,54,50,0), String.fromCharCode(120,95,55,54,95,112,101,114,115,111,110,115,0)];
         libjsij = `${1 & clubB.length}`;
         adultC += parseInt(`${canvaso}`) - twitter3.length;
         canvaso *= parseFloat(`${2}`);
         twitter3.push(parseInt(`${adultC}`));
         clubB.push(libjsij.length);
         libjsij = `${clubB.length & libjsij.length}`;
      for (let p = 0; p < 2; p++) {
          let iconshareD = String.fromCharCode(101,97,114,108,105,101,115,116,95,122,95,54,50,0);
         libjsij += `${libjsij.length}`;
         iconshareD = `${iconshareD.length}`;
      }
      while (2 == (libjsij.length >> (Math.min(Math.abs(2), 2))) && 3 == (2 >> (Math.min(1, libjsij.length)))) {
         clubB = [3];
         break;
      }
      libjsijniprofilerG += `${((mathT ? 4 : 4) / (Math.max(parseInt(`${owngoalk}`), 1)))}`;
          

   if (!pointi.includes(`${owngoalk}`)) {
      pointi = `${1 ^ iconsubssuccessj.length}`;
   }
      mathT = libjsijniprofilerG.length < 70;
          Linking.openURL(appURL);
        } else {

   for (let p = 0; p < 2; p++) {
       let static_glF = String.fromCharCode(100,95,55,51,95,115,101,103,105,100,0);
      if (4 <= static_glF.length) {
         static_glF = `${(static_glF == String.fromCharCode(79,0) ? static_glF.length : static_glF.length)}`;
      }
         static_glF += `${static_glF.length}`;
      while (3 >= static_glF.length) {
         static_glF = `${static_glF.length}`;
         break;
      }
      libjsijniprofilerG = `${rocketY}`;
   }
   let canvasP = mathT ? !mathT : mathT;
   do {
      mathT = (moduleg.length >> (Math.min(libglogh.length, 1))) < 59;
      if (canvasP) {
         break;
      }
   } while ((!mathT) && canvasP);
          console.log("WeChat app not installed.");

      iconeditG = pointi.length < 28;
       let notificationfillemptyx = 4;
          let libfilek = false;
         notificationfillemptyx <<= Math.min(Math.abs(notificationfillemptyx), 3);
         libfilek = (libfilek ? libfilek : !libfilek);
         notificationfillemptyx &= notificationfillemptyx;
       let plusa = 2;
       let coder = 3;
      owngoalk += ((mathT ? 4 : 4) << (Math.min(pointi.length, 2)));
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let tailM = 4.0;
    let navigation5 = false;
    let bodanc: Map<any, any> = new Map([[String.fromCharCode(97,99,111,110,102,105,103,95,53,95,49,48,0),468], [String.fromCharCode(103,101,116,112,105,120,0),483]]);
    let renderz = String.fromCharCode(102,95,57,48,95,98,116,110,99,108,105,99,107,0);
    let constantsW = 4.0;
    let backicond = String.fromCharCode(101,95,50,50,95,116,101,114,109,0);
    let saveU = 3;
    let otherH = false;
    let thumbnailn = true;
    let nodek: Array<any> = [198, 596];
    let mbbids = false;
    let closep: Map<any, any> = new Map([[String.fromCharCode(102,95,53,95,105,110,115,101,114,116,0),449], [String.fromCharCode(115,99,113,117,101,114,121,95,110,95,51,53,0),794], [String.fromCharCode(108,95,55,54,95,105,110,117,115,101,0),222]]);
    let runtimeS = 2.0;
   while (3 < saveU) {
       let productr = 3.0;
       let mode6 = String.fromCharCode(115,95,49,53,95,105,102,111,114,109,97,116,0);
       let plashx = false;
       let unreadK = String.fromCharCode(116,108,101,110,0);
       let sentrye = String.fromCharCode(110,95,49,57,95,111,110,110,101,99,116,105,111,110,0);
      while (5 >= (mode6.length - 3) && (parseInt(`${productr}`) / (Math.max(mode6.length, 1))) >= 3) {
          let with_bdC = 5.0;
         productr /= Math.max(parseFloat(`${3 - parseInt(`${productr}`)}`), 4);
         with_bdC += parseInt(`${with_bdC}`) * 2;
         break;
      }
      for (let n = 0; n < 3; n++) {
         mode6 = `${unreadK.length}`;
      }
       let flyerm: Array<any> = [822, 969];
          let libjsiw: Map<any, any> = new Map([[String.fromCharCode(102,111,114,116,104,95,103,95,50,52,0),367], [String.fromCharCode(98,95,55,52,95,99,111,118,97,108,101,110,116,0),540], [String.fromCharCode(100,105,115,99,95,122,95,55,51,0),409]]);
          let regeng3 = true;
         sentrye = "2";
         libjsiw = new Map([[`${libjsiw.size}`, libjsiw.size]]);
         regeng3 = 76 >= libjsiw.size && libjsiw.size >= 76;
      let reactJ = 9255202 <= mode6.length;
      do {
         mode6 = `${((plashx ? 4 : 1))}`;
         if (reactJ) {
            break;
         }
      } while (reactJ && (mode6.length > 3));
         flyerm = [((plashx ? 5 : 1) + parseInt(`${productr}`))];
         unreadK = `${sentrye.length * unreadK.length}`;
         flyerm.push(1 % (Math.max(9, mode6.length)));
      if (plashx || 3 <= mode6.length) {
         mode6 += `${2 >> (Math.min(3, Math.abs(parseInt(`${productr}`))))}`;
      }
      let plusf = plashx ? !plashx : plashx;
      do {
         plashx = (9 >= ((plashx ? mode6.length : 9) / (Math.max(mode6.length, 3))));
         if (plusf) {
            break;
         }
      } while ((!plashx) && plusf);
      let predictionbannerv = 7355802.0 >= productr;
      do {
          let annerr = String.fromCharCode(113,117,105,122,95,50,95,49,52,0);
         productr *= parseFloat(`${flyerm.length}`);
         annerr += `${2 - annerr.length}`;
         if (predictionbannerv) {
            break;
         }
      } while (predictionbannerv && (!plashx));
         productr += parseFloat(`${2 + flyerm.length}`);
      while (unreadK.startsWith(`${plashx}`)) {
         plashx = unreadK.length <= sentrye.length;
         break;
      }
         flyerm = [(unreadK == String.fromCharCode(79,0) ? (plashx ? 1 : 3) : unreadK.length)];
          let brightnessS: Array<any> = [49, 142];
          let policyK = String.fromCharCode(110,95,50,48,95,115,105,103,110,105,110,103,0);
         sentrye += `${unreadK.length * mode6.length}`;
         brightnessS = [policyK.length];
         policyK = `${brightnessS.length}`;
      otherH = sentrye.length >= parseInt(`${productr}`);
      break;
   }
       let tumbnaill = String.fromCharCode(98,95,53,55,95,109,111,100,105,116,121,0);
       let icontransferclub7 = String.fromCharCode(109,100,112,114,95,52,95,50,50,0);
      for (let h = 0; h < 1; h++) {
         tumbnaill += "1";
      }
      if (tumbnaill == icontransferclub7) {
          let whistleorangeD = String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,116,95,51,51,0);
          let changeu = String.fromCharCode(105,110,115,116,0);
          let dplusv = String.fromCharCode(118,95,50,53,95,108,105,102,116,0);
         icontransferclub7 += `${whistleorangeD.length}`;
         whistleorangeD = `${2 << (Math.min(5, dplusv.length))}`;
         changeu = `${changeu.length / 3}`;
         dplusv = `${dplusv.length << (Math.min(4, changeu.length))}`;
      }
      let typesW = 9224274 <= icontransferclub7.length;
      do {
         icontransferclub7 = `${icontransferclub7.length}`;
         if (typesW) {
            break;
         }
      } while ((!tumbnaill.includes(`${icontransferclub7.length}`)) && typesW);
       let info_ = false;
       let libjsijniprofilerR = false;
         icontransferclub7 = "1";
      while (!libjsijniprofilerR) {
         libjsijniprofilerR = (libjsijniprofilerR ? !info_ : !libjsijniprofilerR);
         break;
      }
      constantsW /= Math.max((parseFloat(`${(thumbnailn ? 4 : 3) ^ parseInt(`${constantsW}`)}`)), 5);

    if (mayi_Gift.isGuest(userState)) {

   while ((5 - saveU) <= 2) {
      saveU >>= Math.min(4, parseInt(`${Math.abs(((navigation5 ? 5 : 3) / (Math.max(2, 1))))}`));
      break;
   }
      bodanc.set(`${navigation5}`, ((navigation5 ? 4 : 4)));
      dispatch(showLoginAction());

      thumbnailn = !otherH;
       let shirts = 3.0;
       let reactnativeultimatelistview1 = true;
       let customw = String.fromCharCode(115,101,116,100,97,114,0);
          let diceR: Map<any, any> = new Map([[String.fromCharCode(106,95,53,56,95,115,104,97,114,105,110,103,0),407], [String.fromCharCode(105,109,101,110,115,105,111,110,95,103,95,53,56,0),499]]);
          let iconviewergifn = String.fromCharCode(116,95,51,55,95,117,115,108,116,0);
          let window_rmU = String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,48,95,51,52,0);
         shirts += diceR.size;
         diceR = new Map([[iconviewergifn, 2 | iconviewergifn.length]]);
         window_rmU += "2";
       let iconsubssuccessJ = String.fromCharCode(99,95,57,49,95,100,105,115,97,98,108,101,0);
      if (!reactnativeultimatelistview1) {
         reactnativeultimatelistview1 = customw == String.fromCharCode(104,0);
      }
      let rewardv = String.fromCharCode(118,51,54,118,0) == customw;
      do {
         customw += `${iconsubssuccessJ.length}`;
         if (rewardv) {
            break;
         }
      } while (rewardv && (reactnativeultimatelistview1 && customw.length >= 2));
      for (let i = 0; i < 1; i++) {
         iconsubssuccessJ += `${customw.length}`;
      }
          let turnj: Array<any> = [607, 395, 611];
          let half7 = String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,95,121,95,55,0);
          let chinaa = 3.0;
         reactnativeultimatelistview1 = !reactnativeultimatelistview1;
         turnj.push(3);
         half7 += "1";
         chinaa -= 1 & parseInt(`${chinaa}`);
          let tickC = 1.0;
         reactnativeultimatelistview1 = customw.length == 7 || !reactnativeultimatelistview1;
         tickC *= 2;
       let becomet = 0;
       let routerM = 0;
      let expandY = customw == String.fromCharCode(53,103,119,95,103,56,107,0);
      do {
         customw = `${routerM * 1}`;
         if (expandY) {
            break;
         }
      } while (expandY && (3 == customw.length));
      nodek = [2 * parseInt(`${constantsW}`)];
      return;
    }
    try {

      thumbnailn = nodek.length > 25 || renderz == String.fromCharCode(74,0);
      saveU %= Math.max(renderz.length, 2);
      const inviteParam = userState.userReferralCode + userState.userName;

       let windR = String.fromCharCode(116,95,54,53,95,112,114,101,99,105,115,105,111,110,0);
       let libfbx = String.fromCharCode(108,95,50,52,0);
       let release_hF = String.fromCharCode(114,98,115,112,95,99,95,56,52,0);
         libfbx = "1";
      if (libfbx.length <= windR.length) {
         windR = `${windR.length}`;
      }
      let pushC = String.fromCharCode(114,113,55,51,114,104,55,105,109,0) == release_hF;
      do {
         release_hF += `${(String.fromCharCode(99,0) == libfbx ? libfbx.length : windR.length)}`;
         if (pushC) {
            break;
         }
      } while (pushC && (2 > release_hF.length && windR.length > 2));
         libfbx = `${libfbx.length}`;
       let roundd: Map<any, any> = new Map([[String.fromCharCode(113,95,57,56,95,109,112,101,103,118,108,99,0),364], [String.fromCharCode(110,95,52,56,95,98,114,107,116,105,109,101,103,109,0),120], [String.fromCharCode(116,104,97,119,101,100,95,107,95,49,52,0),308]]);
       let gifgoalm = String.fromCharCode(112,95,54,51,95,100,101,113,117,97,110,116,105,122,101,0);
       let fullscreenmaxs = String.fromCharCode(107,95,49,57,95,101,110,99,111,100,101,109,98,0);
       let minimizeW = String.fromCharCode(116,95,52,55,95,117,110,105,118,101,114,115,97,108,0);
       let disconnected8 = String.fromCharCode(114,101,100,114,97,119,0);
          let splashQ = String.fromCharCode(97,117,116,111,98,97,110,104,95,57,95,56,56,0);
          let libhermes6: Map<any, any> = new Map([[String.fromCharCode(99,112,117,105,100,0),687], [String.fromCharCode(108,95,49,53,95,109,111,111,102,0),134]]);
         minimizeW += `${(String.fromCharCode(77,0) == gifgoalm ? roundd.size : gifgoalm.length)}`;
         splashQ += `${3 & splashQ.length}`;
         libhermes6 = new Map([[`${libhermes6.size}`, (splashQ == String.fromCharCode(86,0) ? splashQ.length : libhermes6.size)]]);
      let libfile6 = release_hF.length >= 7762741;
      do {
         release_hF = `${disconnected8.length}`;
         if (libfile6) {
            break;
         }
      } while (libfile6 && (release_hF.length == libfbx.length));
      bodanc = new Map([[`${constantsW}`, 1 >> (Math.min(4, renderz.length))]]);
   let phoneh = saveU <= 9584667;
   do {
       let volumec = 3;
       let securityb = String.fromCharCode(110,95,51,49,95,112,97,116,99,104,0);
       let liveshareP = 1.0;
      if (!securityb.endsWith(`${volumec}`)) {
         securityb = `${3 >> (Math.min(3, securityb.length))}`;
      }
      while (!securityb.startsWith(`${liveshareP}`)) {
         securityb += `${volumec}`;
         break;
      }
      let delegate_ap = volumec <= 4976392;
      do {
         volumec ^= parseInt(`${liveshareP}`);
         if (delegate_ap) {
            break;
         }
      } while (delegate_ap && (securityb.endsWith(`${volumec}`)));
         securityb += `${2 & securityb.length}`;
      let subbasketballplayern = liveshareP <= 8905938.0;
      do {
         liveshareP -= securityb.length & 2;
         if (subbasketballplayern) {
            break;
         }
      } while ((2.22 >= liveshareP) && subbasketballplayern);
      if ((securityb.length + parseInt(`${liveshareP}`)) == 3 || (liveshareP + 5.19) == 4.87) {
          let episode1 = 0;
          let sentryi: Map<any, any> = new Map([[String.fromCharCode(114,107,109,112,112,95,98,95,56,49,0),true ], [String.fromCharCode(111,95,57,55,95,105,110,118,105,116,97,116,105,111,110,115,0),true ], [String.fromCharCode(109,101,97,115,117,114,101,100,95,106,95,57,50,0),false ]]);
          let expandu = 3.0;
          let policyp = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,95,50,95,57,51,0);
         securityb += `${1 + policyp.length}`;
         episode1 &= 3;
         sentryi = new Map([[`${episode1}`, 1]]);
         expandu -= parseFloat(`${episode1}`);
         policyp = `${parseInt(`${expandu}`) % 2}`;
      }
      for (let f = 0; f < 3; f++) {
         securityb += `${(String.fromCharCode(113,0) == securityb ? parseInt(`${liveshareP}`) : securityb.length)}`;
      }
      let shrinkw = securityb == String.fromCharCode(53,122,100,107,55,104,0);
      do {
         securityb += `${securityb.length | 2}`;
         if (shrinkw) {
            break;
         }
      } while (shrinkw && (liveshareP == 3.65));
         liveshareP /= Math.max(3 + parseInt(`${liveshareP}`), 2);
      saveU %= Math.max(3, ((otherH ? 1 : 4) >> (Math.min(3, Math.abs((navigation5 ? 3 : 4))))));
      if (phoneh) {
         break;
      }
   } while (((saveU ^ backicond.length) == 5) && phoneh);

      const Buffer = require("buffer").Buffer;

   let componentq = bodanc.size >= 6457839;
   do {
      bodanc = new Map([[`${navigation5}`, (parseInt(`${tailM}`) - (navigation5 ? 1 : 1))]]);
      if (componentq) {
         break;
      }
   } while ((bodanc.size < 2) && componentq);
   if (4.65 == (5.93 + constantsW)) {
       let regengR: Map<any, any> = new Map([[String.fromCharCode(119,95,54,50,95,115,104,111,114,116,101,114,0),626], [String.fromCharCode(119,105,110,101,114,114,110,111,0),51]]);
       let watchg = 0.0;
      let rewardvideoY = 5504845 <= regengR.size;
      do {
          let statisticsinactiven = String.fromCharCode(97,118,112,105,99,116,117,114,101,95,116,95,54,50,0);
          let iconrightorangeo = 1.0;
          let attributedstringJ = String.fromCharCode(114,101,109,97,105,110,95,56,95,50,53,0);
         regengR = new Map([[attributedstringJ, (attributedstringJ == String.fromCharCode(65,0) ? parseInt(`${watchg}`) : attributedstringJ.length)]]);
         statisticsinactiven = `${parseInt(`${iconrightorangeo}`)}`;
         iconrightorangeo -= parseFloat(`${statisticsinactiven.length % (Math.max(3, 4))}`);
         if (rewardvideoY) {
            break;
         }
      } while ((4.31 < (watchg - 5.1)) && rewardvideoY);
      while (regengR.get(`${watchg}`) != null) {
         watchg += parseInt(`${watchg}`) * regengR.size;
         break;
      }
      nodek.push(3 % (Math.max(parseInt(`${tailM}`), 6)));
   }
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      backicond = `${(String.fromCharCode(109,0) == renderz ? parseInt(`${constantsW}`) : renderz.length)}`;
      renderz = "1";

      

   if (thumbnailn && 2.93 == (constantsW / 5.11)) {
      constantsW /= Math.max(parseFloat(`${2}`), 1);
   }
       let xvod2 = String.fromCharCode(115,117,98,102,114,97,109,101,0);
       let mapbuffer1 = String.fromCharCode(114,101,103,101,116,95,110,95,51,0);
       let filterV = false;
       let iconarrowlefto = false;
      while (!iconarrowlefto) {
         filterV = String.fromCharCode(68,0) == mapbuffer1 || 86 == xvod2.length;
         break;
      }
      while (filterV || iconarrowlefto) {
         iconarrowlefto = (mapbuffer1.length >> (Math.min(4, xvod2.length))) < 54;
         break;
      }
         xvod2 = `${((filterV ? 3 : 3) ^ (iconarrowlefto ? 3 : 3))}`;
      if (1 > mapbuffer1.length || filterV) {
         mapbuffer1 += `${(String.fromCharCode(85,0) == xvod2 ? xvod2.length : (filterV ? 2 : 3))}`;
      }
      renderz = `${(parseInt(`${constantsW}`) + (thumbnailn ? 2 : 3))}`;

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

       let successf = 3.0;
       let shrink9 = String.fromCharCode(112,114,101,99,111,109,112,95,122,95,55,0);
          let megaphoner: Map<any, any> = new Map([[String.fromCharCode(116,97,115,107,115,95,98,95,50,56,0),828], [String.fromCharCode(102,108,116,117,105,110,116,95,111,95,50,50,0),162]]);
          let manifestC = String.fromCharCode(107,95,53,49,95,114,101,102,100,117,112,101,0);
          let helper9 = String.fromCharCode(117,95,55,54,95,118,98,114,117,115,104,0);
         shrink9 += `${helper9.length + 2}`;
         megaphoner.set(`${manifestC}`, 3 - manifestC.length);
         helper9 = `${manifestC.length & megaphoner.size}`;
      for (let e = 0; e < 1; e++) {
          let unimplementedview2: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,95,115,117,112,101,114,120,115,97,105,0),718], [String.fromCharCode(107,95,55,49,95,113,119,111,114,100,0),653], [String.fromCharCode(102,111,114,109,97,110,116,95,116,95,54,51,0),665]]);
         successf /= Math.max(unimplementedview2.size - parseInt(`${successf}`), 1);
      }
       let embedI = String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,55,95,55,49,0);
       let owngoalM = String.fromCharCode(117,95,57,53,95,101,97,99,101,110,99,0);
      while (!embedI.endsWith(`${owngoalM.length}`)) {
         embedI = `${owngoalM.length}`;
         break;
      }
         embedI += `${(String.fromCharCode(80,0) == embedI ? embedI.length : owngoalM.length)}`;
         embedI += `${parseInt(`${successf}`) + shrink9.length}`;
      bodanc = new Map([[`${bodanc.size}`, bodanc.size / 2]]);
   while (thumbnailn) {
       let bingd: Array<any> = [717, 390, 87];
       let basketballmatchdetailbg7 = String.fromCharCode(116,111,114,103,98,95,108,95,52,51,0);
      for (let c = 0; c < 3; c++) {
         basketballmatchdetailbg7 += "1";
      }
      while (basketballmatchdetailbg7.includes(`${bingd.length}`)) {
         bingd.push(bingd.length ^ basketballmatchdetailbg7.length);
         break;
      }
         bingd = [bingd.length];
      for (let n = 0; n < 3; n++) {
          let footballfieldN = String.fromCharCode(116,105,100,121,0);
          let uploadR: Array<any> = [701, 965, 597];
          let other_ = String.fromCharCode(101,95,51,56,95,115,102,114,97,109,101,0);
          let vipsporte = true;
          let humidityx = 0.0;
         bingd.push((uploadR.length + (vipsporte ? 2 : 1)));
         footballfieldN = `${parseInt(`${humidityx}`)}`;
         uploadR.push(other_.length);
         other_ += `${other_.length | 3}`;
         vipsporte = footballfieldN.length <= 18;
         humidityx += 2;
      }
      for (let e = 0; e < 1; e++) {
         basketballmatchdetailbg7 = `${bingd.length}`;
      }
       let diceF = String.fromCharCode(97,118,105,115,121,110,116,104,95,99,95,57,52,0);
       let mappingU = String.fromCharCode(116,95,52,51,95,110,112,97,116,99,104,101,115,0);
      thumbnailn = !navigation5 && 83.80 >= tailM;
      break;
   }

      const result = await Share.share({
        message: msg,
      });

      renderz = `${((mbbids ? 4 : 3) % (Math.max(parseInt(`${tailM}`), 1)))}`;
       let ajaxD = 1.0;
         ajaxD += parseFloat(`${parseInt(`${ajaxD}`)}`);
      while (2.55 > (ajaxD / 5.42) || (ajaxD / (Math.max(ajaxD, 4))) > 5.42) {
          let v_unlockZ: Array<any> = [259, 195, 207];
         ajaxD += parseFloat(`${2 & parseInt(`${ajaxD}`)}`);
         v_unlockZ.push(v_unlockZ.length);
         break;
      }
          let reportI = true;
          let phoneb = false;
         ajaxD /= Math.max((parseFloat(`${(reportI ? 3 : 5) / (Math.max((phoneb ? 3 : 1), 6))}`)), 1);
      nodek.push(1);
      if (result.action === Share.sharedAction) {

   while (2.68 == (constantsW + 4.64)) {
      backicond = `${((mbbids ? 5 : 2) * nodek.length)}`;
      break;
   }
   let basketballtrophye = thumbnailn ? !thumbnailn : thumbnailn;
   do {
      thumbnailn = 87 == bodanc.size;
      if (basketballtrophye) {
         break;
      }
   } while ((1 == closep.size && 4 == (1 * closep.size)) && basketballtrophye);
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   if (backicond.includes(`${constantsW}`)) {
       let predictionactiveF = String.fromCharCode(116,114,105,101,95,103,95,51,50,0);
       let reactnativeultimatelistviewK = 5;
       let smallorangemann = 2.0;
       let nextF = true;
       let recommendationR = String.fromCharCode(115,101,116,116,105,110,103,95,97,95,53,53,0);
      if (predictionactiveF == String.fromCharCode(54,0)) {
         recommendationR += `${1 / (Math.max(8, parseInt(`${smallorangemann}`)))}`;
      }
         nextF = (reactnativeultimatelistviewK + smallorangemann) == 66;
      let corners = nextF ? !nextF : nextF;
      do {
         nextF = !nextF;
         if (corners) {
            break;
         }
      } while ((recommendationR.length > 1) && corners);
         reactnativeultimatelistviewK |= 2;
       let arrowrightwithtaila = 2.0;
       let shareQ = 0.0;
      let statsW = 8017763.0 <= smallorangemann;
      do {
          let vieweru = String.fromCharCode(119,95,56,56,0);
          let scoree = String.fromCharCode(115,117,98,102,105,108,101,95,54,95,50,53,0);
          let singleR: Map<any, any> = new Map([[String.fromCharCode(116,105,116,110,116,0),435], [String.fromCharCode(99,95,57,49,95,114,101,116,97,105,110,115,0),606]]);
          let langkeyV = String.fromCharCode(99,97,108,108,105,110,103,95,56,95,53,52,0);
         smallorangemann /= Math.max(vieweru.length, 4);
         vieweru += `${singleR.size & 1}`;
         scoree += `${3 % (Math.max(2, langkeyV.length))}`;
         singleR.set(scoree, scoree.length);
         langkeyV += "3";
         if (statsW) {
            break;
         }
      } while (((1 - recommendationR.length) <= 4 && 4.98 <= (smallorangemann * recommendationR.length)) && statsW);
         shareQ += parseFloat(`${2 + reactnativeultimatelistviewK}`);
          let attributedstringm = 4.0;
          let mapbufferL = String.fromCharCode(116,104,114,101,115,104,111,108,100,95,98,95,52,55,0);
          let aboutg = 4.0;
         nextF = 46.85 >= smallorangemann || reactnativeultimatelistviewK >= 49;
         attributedstringm *= parseFloat(`${mapbufferL.length >> (Math.min(Math.abs(2), 2))}`);
         mapbufferL = "3";
         aboutg -= 2 * parseInt(`${aboutg}`);
      let filterU = recommendationR.length >= 7864807;
      do {
         recommendationR += `${recommendationR.length}`;
         if (filterU) {
            break;
         }
      } while (filterU && (5 >= (recommendationR.length & 4)));
       let libfbjnik = String.fromCharCode(113,95,57,53,95,117,110,98,97,110,0);
       let casting_ = String.fromCharCode(103,117,101,115,115,101,100,95,54,95,49,48,48,0);
      while ((arrowrightwithtaila - 3.41) > 2.88) {
         arrowrightwithtaila += (parseFloat(`${3 * (nextF ? 3 : 1)}`));
         break;
      }
      if (casting_ == String.fromCharCode(119,0)) {
         recommendationR += `${2 << (Math.min(Math.abs(parseInt(`${arrowrightwithtaila}`)), 5))}`;
      }
         shareQ /= Math.max(parseFloat(`${2}`), 3);
      while (3 > reactnativeultimatelistviewK) {
         recommendationR += `${parseInt(`${smallorangemann}`) << (Math.min(4, Math.abs(parseInt(`${shareQ}`))))}`;
         break;
      }
      if (3 >= (2 << (Math.min(4, predictionactiveF.length))) || 3 >= (2 << (Math.min(2, Math.abs(reactnativeultimatelistviewK))))) {
         reactnativeultimatelistviewK += parseInt(`${shareQ}`) & 2;
      }
      constantsW += parseFloat(`${reactnativeultimatelistviewK}`);
   }
   let sans9 = 7055633 <= nodek.length;
   do {
      nodek = [1];
      if (sans9) {
         break;
      }
   } while (sans9 && (5 < (2 + nodek.length)));
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
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 28, fontWeight: "700" }}>
              VIP {vipRemainingDay.toLocaleString()}天
            </Text>
            <Text style={{ color: "#9C9C9C" }}>当前剩余天数</Text>
          </View>

          <FastImage
            source={require("@static/images/hongkongStringLeaguedetailsbg.png")}
            style={{
              height: 180,
              width: 240,
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
          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/vip/specCurrent.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/invite/libfileHolder.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <Text style={styles.featureTitle}>体育频道</Text>
          </View>
          {screenState.showAdultTab && (
            <View style={styles.featureItem}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/modelsGroup.png")}
                  style={styles.featureIcn}
                  resizeMode={"contain"}
                />
              </View>

              <View>
                <Text style={styles.featureTitle}>夜来香</Text>
              </View>

            </View>
          )}
          <View style={styles.featureItem}>
            <View style={styles.imgContainer}>
              <FastImage
                source={require("@static/images/invite/mayi_iconsetting_chinasame.png")}
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
        <TouchableOpacity activeOpacity={0.85}
          onPress={() => {
            if (mayi_Gift.isGuest(userState)) {
              console.log("toggle login");
              dispatch(showLoginAction());
              
              
              
            } else {
              toggleShare();
            }
          }}
        >
          <View
            style={{
              backgroundColor: colors.primary,
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
          <TouchableOpacity activeOpacity={0.85} onPress={toggleShare}>
            <WeChatIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85} onPress={toggleShare}>
            <PYQIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85} onPress={toggleShare}>
            <SinaIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85} onPress={toggleShare}>
            <QQIcon />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.85}
            onPress={() => {
              if (mayi_Gift.isGuest(userState)) {
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
        <TouchableOpacity activeOpacity={0.85}
          onPress={() => {
            if (mayi_Gift.isGuest(userState)) {
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
