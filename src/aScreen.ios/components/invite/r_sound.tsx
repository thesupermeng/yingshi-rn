

class CatalogHalf {
    static hongkongBootsplash = (contents: [number], key: number, hasEmoji: boolean) => {
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

import WhatsappIcn from "@static/images/invite/description_5TailInvite.svg";
import FastImage from "../common/gwi_with";
import TelegramIcn from "@static/images/invite/anythinkFast.svg";
import FacebookIcn from "@static/images/invite/notificationTumbnail.svg";
import WechatIcn from "@static/images/invite/upgradeReportGoogle.svg";

import WeiboIcn from "@static/images/invite/giftDownloadedDown.svg";
import CopyIcn from "@static/images/invite/stepAgreement.svg";
import ProfileIcn from "@static/images/invite/refreshPrivate_v.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/kg_index";
import { showLoginAction } from "@redux/actions/a_switch";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/n_subs_interstitial";
import { KLongNext } from "../../../ysConfig";
import NotificationModal from "../modal/fc_shoot_bodan";

import SinaIcon from "@static/images/largeLeft.svg";
import WeChatIcon from "@static/images/upgradeReportGoogle.svg";
import QQIcon from "@static/images/castingDownResend.svg";
import PYQIcon from "@static/images/productControlsSports.svg";
import { screenModel } from "@type/nb_shared_target";
import { KWConstants } from "@models/kl_sheet";
interface XFillButton {
  userState: KWConstants;
}
export default function InviteCard({ userState = {} }: XFillButton) {
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
       let ajaxc = 2.0;
    let short_zpO = String.fromCharCode(109,95,51,56,95,118,111,114,98,105,115,0);
    let crossr: Array<any> = [235, 18];
    let confirmationt = true;
    let sort7 = String.fromCharCode(101,95,56,56,95,100,116,111,114,0);
    let lessF: Array<any> = [600, 282];
    let download7 = 4;
    let liveJ: Array<any> = [722, 210];
    let helper_ = true;
    let emptyK = String.fromCharCode(121,95,56,55,95,116,101,110,99,0);
   for (let l = 0; l < 2; l++) {
      ajaxc += (download7 << (Math.min(5, Math.abs((confirmationt ? 5 : 4)))));
   }
   if (4 >= (lessF.length | 1) && (lessF.length | 1) >= 3) {
      lessF = [download7 | 1];
   }
   let footballb = 5855174 >= lessF.length;
   do {
       let yingh = String.fromCharCode(110,95,51,48,95,100,105,109,101,110,115,105,116,111,110,115,0);
         yingh += "3";
         yingh = `${yingh.length - yingh.length}`;
      if (yingh.endsWith(yingh)) {
         yingh += `${yingh.length}`;
      }
      lessF.push(liveJ.length);
      if (footballb) {
         break;
      }
   } while (footballb && (3 == (lessF.length * 1)));
   for (let k = 0; k < 1; k++) {
      download7 <<= Math.min(2, liveJ.length);
   }
   while (short_zpO.endsWith(sort7)) {
       let starV = String.fromCharCode(101,118,101,114,121,98,111,100,121,95,119,95,54,57,0);
       let viewerc = 2.0;
      for (let v = 0; v < 2; v++) {
         starV = `${starV.length}`;
      }
      let gray8 = starV.length >= 5286669;
      do {
         starV += `${parseInt(`${viewerc}`) & starV.length}`;
         if (gray8) {
            break;
         }
      } while (((4 >> (Math.min(4, starV.length))) == 2 || (starV.length * viewerc) == 1.93) && gray8);
          let gesturew = String.fromCharCode(116,95,56,50,95,115,116,114,105,100,101,115,0);
          let internetY = 0.0;
          let short_3_I = 5;
         viewerc *= 3 << (Math.min(4, Math.abs(parseInt(`${internetY}`))));
         gesturew += `${(gesturew == String.fromCharCode(106,0) ? short_3_I : gesturew.length)}`;
         internetY -= parseFloat(`${short_3_I / (Math.max(2, gesturew.length))}`);
      for (let s = 0; s < 3; s++) {
         starV += `${3 ^ parseInt(`${viewerc}`)}`;
      }
      while (viewerc == 3.69) {
          let tickS = 2;
          let networkZ = true;
         starV += `${tickS}`;
         tickS /= Math.max(((networkZ ? 3 : 1) * 3), 4);
         break;
      }
      if ((3 >> (Math.min(2, starV.length))) == 2 && 1 == (starV.length % 3)) {
         viewerc *= 3 << (Math.min(4, Math.abs(parseInt(`${viewerc}`))));
      }
      short_zpO += "2";
      break;
   }
   let pauseF = 8478346 >= short_zpO.length;
   do {
       let statsa = String.fromCharCode(109,117,115,120,95,49,95,51,56,0);
       let verticale = String.fromCharCode(107,95,51,51,95,114,101,110,111,114,109,0);
       let screena = 1;
       let relatedd = 0;
      let incidentz = statsa == String.fromCharCode(99,103,109,0);
      do {
         statsa = `${verticale.length | 2}`;
         if (incidentz) {
            break;
         }
      } while (incidentz && (statsa.length > verticale.length));
      if (verticale == String.fromCharCode(81,0)) {
         statsa += `${statsa.length - 3}`;
      }
         screena <<= Math.min(5, Math.abs(1 | screena));
       let minimizeF: Map<any, any> = new Map([[String.fromCharCode(107,95,49,53,95,112,114,101,118,105,111,117,115,108,121,0),834], [String.fromCharCode(103,109,97,116,99,104,95,48,95,51,55,0),406]]);
         verticale = "2";
      while ((relatedd & screena) == 2) {
          let updatesd = String.fromCharCode(106,95,50,57,95,97,112,112,115,0);
          let sportsG = 2;
         relatedd >>= Math.min(Math.abs(3), 4);
         updatesd += `${updatesd.length >> (Math.min(Math.abs(1), 3))}`;
         sportsG /= Math.max(1, 3);
         break;
      }
      if (5 < (minimizeF.size % (Math.max(1, 6)))) {
          let thumbnail1: Array<any> = [String.fromCharCode(101,95,51,54,95,111,109,112,111,115,101,0), String.fromCharCode(105,110,115,116,97,110,116,95,98,95,55,0)];
         relatedd <<= Math.min(Math.abs(screena ^ thumbnail1.length), 4);
      }
      while ((minimizeF.size >> (Math.min(verticale.length, 5))) > 1 || 4 > (minimizeF.size >> (Math.min(Math.abs(1), 5)))) {
         verticale = `${screena * 2}`;
         break;
      }
         verticale = `${statsa.length}`;
       let questL = String.fromCharCode(108,95,49,57,95,104,111,114,105,122,111,110,116,97,108,0);
       let topicj = String.fromCharCode(115,116,97,114,116,99,111,100,101,95,50,95,55,51,0);
         statsa += `${minimizeF.size}`;
       let projectu = 0;
      short_zpO = `${((confirmationt ? 4 : 3) | short_zpO.length)}`;
      if (pauseF) {
         break;
      }
   } while (pauseF && (short_zpO.length == 4));
   for (let s = 0; s < 3; s++) {
       let member6 = String.fromCharCode(108,97,110,103,115,95,99,95,49,48,48,0);
       let clockt = false;
      if (clockt) {
          let heartt = String.fromCharCode(111,95,54,54,95,115,117,98,116,114,101,101,0);
          let linkF = 4.0;
         member6 += "1";
         heartt = "2";
         linkF *= parseFloat(`${parseInt(`${linkF}`) - 2}`);
      }
          let flyerN = 5.0;
          let bingq = String.fromCharCode(103,117,116,116,101,114,95,55,95,50,0);
          let twittern = 2.0;
         member6 += `${(String.fromCharCode(97,0) == bingq ? (clockt ? 5 : 3) : bingq.length)}`;
         flyerN -= parseInt(`${twittern}`);
         twittern += parseInt(`${flyerN}`);
         clockt = (71 <= (member6.length >> (Math.min(5, Math.abs((!clockt ? 71 : member6.length))))));
      while (member6.startsWith(`${clockt}`)) {
          let dropdown5 = String.fromCharCode(110,101,116,119,111,114,107,105,110,103,95,116,95,51,48,0);
          let countryj = String.fromCharCode(122,95,50,54,95,115,104,97,100,111,119,0);
          let bellj = 0;
          let photoW = 2.0;
          let sortH = String.fromCharCode(109,100,116,97,95,53,95,50,56,0);
         clockt = photoW == 98.47;
         dropdown5 = `${1 * sortH.length}`;
         countryj += `${countryj.length}`;
         bellj |= dropdown5.length;
         photoW /= Math.max(parseFloat(`${sortH.length >> (Math.min(1, Math.abs(bellj)))}`), 1);
         break;
      }
      if (clockt) {
         member6 = "1";
      }
         member6 += `${((clockt ? 2 : 2))}`;
      confirmationt = member6.length > 62;
   }
   while (3 > (sort7.length << (Math.min(Math.abs(2), 4))) || (crossr.length << (Math.min(Math.abs(2), 5))) > 5) {
      crossr = [crossr.length >> (Math.min(short_zpO.length, 2))];
      break;
   }
       let targetN: Array<any> = [337, 34];
       let expandH = String.fromCharCode(100,95,50,57,95,114,101,111,115,0);
         targetN = [3];
      for (let v = 0; v < 3; v++) {
         targetN.push(expandH.length << (Math.min(Math.abs(2), 2)));
      }
      for (let p = 0; p < 2; p++) {
         targetN.push(expandH.length * targetN.length);
      }
      let resendp = expandH == String.fromCharCode(53,95,99,122,56,49,104,0);
      do {
          let iconD = 2.0;
          let navigation6 = String.fromCharCode(103,101,116,95,111,95,50,50,0);
          let thailandL = 0.0;
         expandH += `${3 | expandH.length}`;
         iconD *= parseFloat(`${navigation6.length % 2}`);
         navigation6 += "1";
         thailandL /= Math.max(parseFloat(`${parseInt(`${thailandL}`)}`), 5);
         if (resendp) {
            break;
         }
      } while (((targetN.length & 3) > 4) && resendp);
         expandH += `${expandH.length % (Math.max(6, targetN.length))}`;
      if ((targetN.length | expandH.length) <= 1) {
          let topic_ = String.fromCharCode(100,105,115,99,111,118,101,114,95,110,95,54,52,0);
          let transfer9 = 5.0;
          let giftF = 2.0;
         expandH += `${parseInt(`${transfer9}`) * 1}`;
         topic_ = "2";
         transfer9 -= 2 / (Math.max(1, topic_.length));
         giftF /= Math.max(1, topic_.length >> (Math.min(1, Math.abs(parseInt(`${giftF}`)))));
      }
      liveJ.push(parseInt(`${ajaxc}`));
      short_zpO = `${parseInt(`${ajaxc}`) + 2}`;
       let mathi = 3.0;
      if (mathi < 3.44) {
         mathi /= Math.max(parseInt(`${mathi}`) ^ 1, 1);
      }
         mathi -= parseInt(`${mathi}`);
         mathi -= parseInt(`${mathi}`);
      lessF = [1 + lessF.length];
   let humidityf = liveJ.length <= 9792611;
   do {
      liveJ = [parseInt(`${ajaxc}`)];
      if (humidityf) {
         break;
      }
   } while (humidityf && ((1 + liveJ.length) <= 1 || 1 <= (1 + liveJ.length)));
       let topicO: Map<any, any> = new Map([[String.fromCharCode(116,97,103,115,95,49,95,54,50,0),978], [String.fromCharCode(111,95,54,55,95,100,108,105,100,120,0),792], [String.fromCharCode(116,114,105,99,107,108,101,95,53,95,57,57,0),612]]);
      for (let i = 0; i < 1; i++) {
          let catalogd = true;
          let playH = 0.0;
          let downloadingT = String.fromCharCode(113,95,57,51,95,116,101,100,99,97,112,116,105,111,110,115,0);
         topicO.set(`${downloadingT}`, 3);
         catalogd = !catalogd;
         playH += (parseFloat(`${(catalogd ? 5 : 3) * parseInt(`${playH}`)}`));
         downloadingT += `${3 * parseInt(`${playH}`)}`;
      }
         topicO.set(`${topicO.size}`, topicO.size * topicO.size);
         topicO.set(`${topicO.size}`, topicO.size ^ 1);
      confirmationt = crossr.includes(helper_);
   while (confirmationt || (liveJ.length % 2) < 4) {
      confirmationt = 71 >= crossr.length || 71 >= sort7.length;
      break;
   }
      helper_ = crossr.length > download7;
   let moonU = lessF.length <= 5713075;
   do {
       let fullB = 3.0;
       let control8: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,121,115,101,95,100,95,56,0),125], [String.fromCharCode(116,95,50,52,95,120,119,109,97,0),608]]);
       let rightY = 3.0;
       let arrows: Map<any, any> = new Map([[String.fromCharCode(109,95,49,56,95,101,109,111,114,121,0),5], [String.fromCharCode(114,101,100,97,99,116,101,100,95,112,95,56,54,0),211], [String.fromCharCode(97,95,49,57,95,113,117,97,100,116,114,101,101,0),706]]);
       let headerg = String.fromCharCode(122,95,49,49,95,102,105,101,108,100,0);
      let blacklistY = arrows.size >= 6769908;
      do {
         arrows = new Map([[`${fullB}`, parseInt(`${fullB}`)]]);
         if (blacklistY) {
            break;
         }
      } while (blacklistY && (rightY == 4.37));
      let uploadh = rightY <= 8381370.0;
      do {
          let castL = 4.0;
          let downloadedM = 0;
          let collectionD = String.fromCharCode(97,95,56,54,95,101,99,111,117,110,116,0);
          let backward_ = String.fromCharCode(97,95,57,51,95,118,99,104,113,0);
         rightY -= parseInt(`${castL}`) + 3;
         castL /= Math.max(5, (parseFloat(`${collectionD == String.fromCharCode(108,0) ? downloadedM : collectionD.length}`)));
         downloadedM <<= Math.min(4, Math.abs((String.fromCharCode(86,0) == collectionD ? collectionD.length : backward_.length)));
         backward_ = `${downloadedM}`;
         if (uploadh) {
            break;
         }
      } while ((4 < (headerg.length / (Math.max(9, parseInt(`${rightY}`))))) && uploadh);
         arrows = new Map([[`${control8.size}`, 1]]);
          let kickw = String.fromCharCode(117,117,105,100,112,114,111,102,95,122,95,55,52,0);
          let moviesh = 5;
         rightY += 3 / (Math.max(10, parseInt(`${rightY}`)));
         kickw = "2";
         moviesh %= Math.max(5, kickw.length);
      while ((5.95 / (Math.max(10, fullB))) < 4.96 || 3.27 < (rightY / 5.95)) {
         fullB *= parseInt(`${fullB}`) * 1;
         break;
      }
         rightY /= Math.max(3, headerg.length);
         fullB *= parseInt(`${fullB}`);
          let mutedp = 0;
          let greye = String.fromCharCode(101,95,49,49,95,97,114,116,105,99,108,101,115,0);
          let back7: Map<any, any> = new Map([[String.fromCharCode(110,95,51,52,95,97,120,112,0),String.fromCharCode(104,119,102,114,97,109,101,95,101,95,54,56,0)], [String.fromCharCode(115,95,51,57,95,101,105,103,104,116,115,118,120,0),String.fromCharCode(110,117,109,101,114,111,95,112,95,49,57,0)], [String.fromCharCode(119,101,108,115,95,115,95,51,55,0),String.fromCharCode(116,97,110,115,105,103,95,104,95,49,0)]]);
         rightY -= arrows.size;
         mutedp <<= Math.min(Math.abs(greye.length | back7.size), 3);
         greye += `${back7.size ^ 2}`;
       let selectJ: Map<any, any> = new Map([[String.fromCharCode(108,97,98,101,108,115,95,109,95,52,56,0),40], [String.fromCharCode(114,101,112,108,105,99,97,116,101,95,98,95,53,55,0),213], [String.fromCharCode(98,119,103,116,95,49,95,51,53,0),625]]);
       let baiduB: Array<any> = [118, 908, 141];
       let analyticsd: Array<any> = [92, 480];
      if (2 < (2 + control8.size) || 3.6 < (2.91 * rightY)) {
         control8 = new Map([[`${selectJ.size}`, selectJ.size]]);
      }
       let with_lT: Map<any, any> = new Map([[String.fromCharCode(108,95,56,54,95,102,105,114,101,100,0),String.fromCharCode(115,103,105,114,108,101,95,101,95,51,57,0)], [String.fromCharCode(108,95,52,49,95,108,111,99,97,108,105,122,97,116,105,111,110,0),String.fromCharCode(111,110,115,101,116,95,52,95,53,57,0)]]);
       let championo: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,108,117,108,97,116,101,95,105,95,49,55,0),false ], [String.fromCharCode(103,122,105,112,112,101,100,95,50,95,55,53,0),false ], [String.fromCharCode(117,110,98,111,110,100,101,100,95,116,95,52,56,0),false ]]);
      if (4 > (arrows.size << (Math.min(Math.abs(with_lT.size), 4))) && (with_lT.size << (Math.min(Math.abs(4), 4))) > 3) {
         with_lT.set(`${fullB}`, control8.size);
      }
         fullB /= Math.max(5, arrows.size + analyticsd.length);
      if ((control8.size + 2) > 3 && (2 + analyticsd.length) > 2) {
         analyticsd.push(championo.size);
      }
      lessF.push(control8.size % 3);
      if (moonU) {
         break;
      }
   } while (moonU && ((download7 + 5) <= 4 || 5 <= (download7 + lessF.length)));
      confirmationt = liveJ.length == 91;
   for (let n = 0; n < 1; n++) {
       let reporty = String.fromCharCode(117,95,49,54,95,102,105,110,97,108,105,122,105,110,103,0);
       let langJ: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,115,104,95,52,95,57,48,0),948], [String.fromCharCode(119,95,57,50,95,102,97,115,116,0),813], [String.fromCharCode(100,97,105,108,121,95,102,95,53,49,0),875]]);
      if (reporty.length == langJ.size) {
         langJ = new Map([[`${langJ.size}`, 3]]);
      }
          let crownr = String.fromCharCode(103,101,116,95,48,95,53,49,0);
          let carouselH = 5.0;
          let rewind8 = 4.0;
         reporty += `${langJ.size}`;
         crownr = `${crownr.length << (Math.min(2, Math.abs(parseInt(`${carouselH}`))))}`;
         carouselH /= Math.max(parseFloat(`${parseInt(`${rewind8}`)}`), 5);
         rewind8 += parseFloat(`${parseInt(`${carouselH}`) + parseInt(`${rewind8}`)}`);
      if (4 < (reporty.length + langJ.size)) {
         langJ.set(reporty, langJ.size + reporty.length);
      }
          let long_4b = 2.0;
          let modele: Map<any, any> = new Map([[String.fromCharCode(116,95,53,52,95,99,111,100,101,98,111,111,107,115,0),153], [String.fromCharCode(109,95,53,55,95,100,101,110,111,114,109,97,108,105,122,101,0),789], [String.fromCharCode(115,99,101,110,101,99,117,116,95,114,95,55,0),714]]);
          let zcopy_82: Array<any> = [500, 897];
         reporty = `${modele.size ^ langJ.size}`;
         long_4b += parseFloat(`${2}`);
         modele = new Map([[`${zcopy_82.length}`, 1 << (Math.min(2, zcopy_82.length))]]);
      while (3 <= (reporty.length + 5)) {
          let crowni: Map<any, any> = new Map([[String.fromCharCode(102,101,111,102,95,113,95,53,57,0),String.fromCharCode(109,95,52,95,113,112,113,115,99,97,108,101,0)], [String.fromCharCode(114,116,102,95,56,95,50,54,0),String.fromCharCode(103,101,116,111,112,116,95,115,95,55,56,0)]]);
         reporty = `${3 + langJ.size}`;
         crowni.set(`${crowni.size}`, crowni.size);
         break;
      }
          let malaysiaK = true;
          let episodes0: Map<any, any> = new Map([[String.fromCharCode(112,104,114,97,115,101,95,102,95,53,50,0),661], [String.fromCharCode(112,117,110,99,104,95,111,95,51,56,0),792], [String.fromCharCode(111,95,50,49,95,103,105,102,115,0),290]]);
         reporty = `${langJ.size}`;
         malaysiaK = (episodes0.size - episodes0.size) == 7;
      liveJ.push(sort7.length);
   }
       let basketballX = String.fromCharCode(99,111,114,114,101,99,116,101,100,95,113,95,52,48,0);
       let mathF = String.fromCharCode(114,101,113,117,105,114,101,115,95,54,95,52,52,0);
      let customx = 5746811 >= basketballX.length;
      do {
         basketballX += `${mathF.length | 1}`;
         if (customx) {
            break;
         }
      } while ((!mathF.startsWith(basketballX)) && customx);
         basketballX += "1";
          let calendark = true;
          let usernamei = 3.0;
          let configure7: Map<any, any> = new Map([[String.fromCharCode(101,118,111,108,118,101,95,106,95,49,55,0),String.fromCharCode(108,95,56,57,95,100,101,110,111,105,115,101,0)], [String.fromCharCode(112,114,111,116,111,99,111,108,115,95,104,95,51,49,0),String.fromCharCode(113,95,49,54,95,100,115,116,114,101,97,109,0)], [String.fromCharCode(100,101,108,116,97,113,95,57,95,54,50,0),String.fromCharCode(114,103,98,97,108,101,95,119,95,52,50,0)]]);
         basketballX += `${parseInt(`${usernamei}`)}`;
         calendark = (70 > (configure7.size << (Math.min(1, Math.abs((!calendark ? configure7.size : 64))))));
         usernamei /= Math.max(1, 4);
         mathF += "1";
       let subsf: Array<any> = [962, 864, 851];
       let downloaderV: Array<any> = [987, 801, 939];
         subsf.push(basketballX.length - 3);
      sort7 = "3";

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
       let hongkongw = true;
    let matcha: Map<any, any> = new Map([[String.fromCharCode(112,95,55,51,95,101,120,112,105,114,101,100,0),707], [String.fromCharCode(111,95,49,50,95,102,108,97,116,116,101,110,101,100,0),618]]);
    let chartt = 2.0;
    let filled9 = String.fromCharCode(112,108,97,110,101,95,105,95,49,49,0);
    let windA: Map<any, any> = new Map([[String.fromCharCode(102,111,114,107,95,51,95,57,53,0),958], [String.fromCharCode(118,111,114,100,105,112,108,111,109,95,103,95,51,53,0),948]]);
    let philippines2: Array<any> = [740, 176, 173];
    let diceP: Array<any> = [String.fromCharCode(116,95,54,95,107,108,97,115,115,0), String.fromCharCode(115,105,110,113,102,95,109,95,54,54,0)];
    let fullJ: Map<any, any> = new Map([[String.fromCharCode(97,95,54,52,95,117,114,108,0),448], [String.fromCharCode(109,98,101,100,95,116,95,53,50,0),457]]);
    let agreementF = 1.0;
    let buttonn = 3;
       let minic = false;
       let splashQ = String.fromCharCode(104,95,52,52,95,115,116,111,114,101,120,0);
       let scorev = 1;
      let recommendationM = splashQ == String.fromCharCode(56,107,50,52,107,119,52,48,109,104,0);
      do {
         splashQ = `${((minic ? 5 : 4) * scorev)}`;
         if (recommendationM) {
            break;
         }
      } while ((splashQ.startsWith(`${minic}`)) && recommendationM);
       let turnp = String.fromCharCode(102,97,99,116,111,114,115,95,51,95,49,52,0);
       let profile1 = String.fromCharCode(107,110,111,99,107,111,117,116,95,98,95,54,50,0);
         turnp = `${(String.fromCharCode(51,0) == turnp ? turnp.length : scorev)}`;
          let backwardM = false;
         splashQ += `${profile1.length}`;
         backwardM = (backwardM ? backwardM : !backwardM);
      while (minic) {
         splashQ += `${scorev << (Math.min(Math.abs(3), 3))}`;
         break;
      }
          let progressJ = true;
          let groupI = String.fromCharCode(109,105,110,105,109,105,122,101,95,119,95,55,52,0);
         scorev <<= Math.min(Math.abs(turnp.length >> (Math.min(2, groupI.length))), 4);
         progressJ = progressJ || progressJ;
         groupI = "2";
      let successt = String.fromCharCode(97,101,117,109,108,51,106,55,95,0) == turnp;
      do {
          let indexo: Array<any> = [320, 749, 305];
          let referrer7 = String.fromCharCode(113,117,97,110,116,105,122,101,95,97,95,50,54,0);
          let moreY = 4;
          let shrinkK: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,101,100,95,101,95,56,54,0),String.fromCharCode(120,95,50,48,95,105,110,100,101,120,105,110,103,0)], [String.fromCharCode(97,98,99,115,95,103,95,51,51,0),String.fromCharCode(105,95,54,49,95,97,97,99,101,110,99,116,97,98,0)], [String.fromCharCode(108,95,49,56,95,100,105,115,97,98,108,101,115,0),String.fromCharCode(116,97,103,115,116,114,95,120,95,54,52,0)]]);
         turnp += `${(String.fromCharCode(57,0) == referrer7 ? (minic ? 2 : 4) : referrer7.length)}`;
         indexo = [3];
         moreY -= moreY * indexo.length;
         shrinkK = new Map([[`${shrinkK.size}`, moreY]]);
         if (successt) {
            break;
         }
      } while ((turnp.length == 5) && successt);
       let fastI = String.fromCharCode(119,115,119,111,114,100,95,99,95,51,55,0);
       let nextN = String.fromCharCode(107,95,51,53,95,99,104,111,105,99,101,0);
      while ((splashQ.length & scorev) >= 5 && 1 >= (5 & scorev)) {
         splashQ += `${3 >> (Math.min(5, turnp.length))}`;
         break;
      }
      matcha.set(filled9, filled9.length | 1);
      philippines2.push(fullJ.size);
   if ((4 & philippines2.length) == 4 || (philippines2.length & filled9.length) == 4) {
       let filledq = String.fromCharCode(110,95,51,56,95,110,111,110,110,101,103,0);
      while (!filledq.startsWith(`${filledq.length}`)) {
          let philippinesN = String.fromCharCode(116,115,99,99,95,119,95,57,49,0);
          let bodanA: Array<any> = [474, 290, 411];
          let constantsy = String.fromCharCode(121,95,50,49,95,101,103,119,105,116,0);
          let trophyx = String.fromCharCode(99,95,50,55,95,103,101,116,112,101,101,114,97,100,100,114,0);
          let weiboO = 2.0;
         filledq = `${philippinesN.length % (Math.max(filledq.length, 10))}`;
         philippinesN = `${2 % (Math.max(8, bodanA.length))}`;
         bodanA.push(3 << (Math.min(1, trophyx.length)));
         constantsy += `${parseInt(`${weiboO}`) / 3}`;
         trophyx = `${parseInt(`${weiboO}`) << (Math.min(trophyx.length, 1))}`;
         break;
      }
      if (!filledq.startsWith(`${filledq.length}`)) {
         filledq += `${filledq.length}`;
      }
       let anytimed: Array<any> = [String.fromCharCode(120,95,51,56,95,114,101,112,108,105,101,115,0), String.fromCharCode(121,95,49,53,95,114,101,102,114,101,115,104,0)];
      filled9 = `${matcha.size | 2}`;
   }

    if (KWConstants.isGuest(userState)) {

      windA = new Map([[`${fullJ.size}`, filled9.length]]);
   if (!filled9.endsWith(`${hongkongw}`)) {
       let phonem = false;
       let footballZ = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,120,95,53,56,0);
       let xvodJ = 4.0;
       let textX: Map<any, any> = new Map([[String.fromCharCode(108,95,50,55,95,97,108,108,114,103,98,0),false ], [String.fromCharCode(117,95,54,55,95,115,117,98,101,120,112,0),true ], [String.fromCharCode(102,95,53,57,95,108,115,112,112,111,108,121,102,0),false ]]);
         phonem = textX.size > 23 || footballZ == String.fromCharCode(70,0);
         phonem = textX.size <= 53 || xvodJ <= 28.33;
         textX.set(`${phonem}`, parseInt(`${xvodJ}`) - 1);
      if (!phonem) {
          let line9: Map<any, any> = new Map([[String.fromCharCode(99,112,117,105,110,102,111,95,114,95,55,48,0),439], [String.fromCharCode(97,116,116,97,99,104,95,52,95,57,51,0),347], [String.fromCharCode(115,112,101,101,100,104,113,95,113,95,55,49,0),445]]);
          let alertS = String.fromCharCode(107,95,52,55,95,109,101,100,105,117,109,0);
         phonem = line9.size < 61;
         line9.set(alertS, 3);
         alertS = `${1 + alertS.length}`;
      }
      if (1.38 < (xvodJ * footballZ.length) && 1 < (footballZ.length << (Math.min(Math.abs(1), 1)))) {
          let result9 = 0.0;
          let profile5 = String.fromCharCode(107,95,55,50,95,112,114,111,100,117,99,116,0);
          let profile9 = 4;
          let humidityI = false;
         footballZ += `${1 >> (Math.min(Math.abs(profile9), 2))}`;
         result9 *= (parseFloat(`${(humidityI ? 1 : 2) * parseInt(`${result9}`)}`));
         profile5 = `${((humidityI ? 5 : 5) - parseInt(`${result9}`))}`;
         profile9 *= 1;
      }
         phonem = xvodJ >= footballZ.length;
       let icon6 = String.fromCharCode(110,101,119,108,105,110,101,95,104,95,52,51,0);
          let text6 = 1.0;
          let refresht: Map<any, any> = new Map([[String.fromCharCode(102,95,56,50,95,117,110,115,105,103,110,101,100,0),428], [String.fromCharCode(97,117,100,105,111,95,107,95,57,57,0),246], [String.fromCharCode(100,95,49,95,99,111,118,101,114,115,0),193]]);
         xvodJ += parseInt(`${text6}`);
         text6 += refresht.size;
         refresht = new Map([[`${refresht.size}`, refresht.size]]);
      hongkongw = 3.22 > chartt;
   }
      chartt *= 1;
      dispatch(showLoginAction());

       let clubF = String.fromCharCode(103,95,51,56,95,114,101,112,108,97,121,103,97,105,110,0);
         clubF = "2";
      let step6 = String.fromCharCode(97,122,113,95,116,0) == clubF;
      do {
         clubF += `${(clubF == String.fromCharCode(55,0) ? clubF.length : clubF.length)}`;
         if (step6) {
            break;
         }
      } while ((clubF.includes(`${clubF.length}`)) && step6);
         clubF += "2";
      windA.set(`${diceP.length}`, diceP.length);
      chartt += diceP.length;
   if (hongkongw) {
      fullJ.set(`${agreementF}`, parseInt(`${agreementF}`));
   }
      return;

   let userw = 6854873.0 >= agreementF;
   do {
      agreementF *= parseFloat(`${philippines2.length - matcha.size}`);
      if (userw) {
         break;
      }
   } while (((parseInt(`${agreementF}`) / (Math.max(filled9.length, 6))) >= 3 || 1.80 >= (parseFloat(`${filled9.length}`) / (Math.max(9, agreementF)))) && userw);
   while (!filled9.startsWith(`${fullJ.size}`)) {
      fullJ = new Map([[`${windA.size}`, 3]]);
      break;
   }
       let chat4 = true;
      while (chat4) {
         chat4 = !chat4 && !chat4;
         break;
      }
         chat4 = (chat4 ? !chat4 : !chat4);
         chat4 = (!chat4 ? !chat4 : chat4);
      filled9 = `${diceP.length}`;
    }
    const url =
      CatalogHalf.hongkongBootsplash([112,108,108,104,107,34,55,55,111,121,54,117,125,55,39,108,125,96,108,37,24],0x18,false) + shareOptions.message + " " + shareOptions.url; 

      agreementF += parseFloat(`${filled9.length}`);
   for (let g = 0; g < 3; g++) {
      fullJ = new Map([[`${fullJ.size}`, 3 << (Math.min(2, Math.abs(fullJ.size)))]]);
   }
      chartt += parseInt(`${agreementF}`);
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

   for (let e = 0; e < 3; e++) {
      philippines2 = [matcha.size / 3];
   }
      hongkongw = diceP.includes(hongkongw);
   for (let e = 0; e < 2; e++) {
       let darkB = true;
       let kicks = 2.0;
      for (let c = 0; c < 1; c++) {
         kicks -= parseFloat(`${1 * parseInt(`${kicks}`)}`);
      }
      let forwardN = kicks >= 8933238.0;
      do {
          let dropdownz = String.fromCharCode(115,112,101,97,107,101,114,95,50,95,53,48,0);
         kicks -= parseFloat(`${dropdownz.length}`);
         if (forwardN) {
            break;
         }
      } while ((kicks == 2.48) && forwardN);
       let fast4 = false;
       let dicec = true;
          let nextk = true;
          let ajaxN = String.fromCharCode(115,116,114,101,97,109,115,95,57,95,57,57,0);
          let phoneY = true;
         kicks *= (parseFloat(`${2 / (Math.max(6, (phoneY ? 3 : 5)))}`));
         nextk = ((ajaxN.length << (Math.min(2, Math.abs((nextk ? 27 : ajaxN.length))))) > 27);
         phoneY = !ajaxN.endsWith(`${nextk}`);
         dicec = !dicec;
      let vietnamT = dicec ? !dicec : dicec;
      do {
         dicec = kicks > 34.84;
         if (vietnamT) {
            break;
         }
      } while ((dicec || fast4) && vietnamT);
      philippines2 = [fullJ.size >> (Math.min(diceP.length, 1))];
      darkB = (!darkB ? !darkB : darkB);
   }
          console.error(`Cannot open URL: ${url}`);
        } else {

      agreementF -= (parseFloat(`${(hongkongw ? 1 : 5) / (Math.max(2, 9))}`));
   for (let s = 0; s < 3; s++) {
      matcha.set(filled9, filled9.length);
   }
   if (philippines2.includes(agreementF)) {
       let tailR = 3.0;
         tailR -= parseInt(`${tailR}`) >> (Math.min(3, Math.abs(parseInt(`${tailR}`))));
          let singleS = 0;
          let privacyp: Map<any, any> = new Map([[String.fromCharCode(110,111,116,104,105,110,103,95,119,95,53,53,0),205], [String.fromCharCode(110,95,55,48,95,100,121,110,108,105,110,107,0),910], [String.fromCharCode(122,95,55,95,109,111,116,105,111,110,115,101,97,114,99,104,0),652]]);
          let footballC = 2.0;
         tailR *= 2 & singleS;
         singleS <<= Math.min(2, Math.abs(3));
         privacyp = new Map([[`${privacyp.size}`, privacyp.size]]);
         footballC += parseInt(`${footballC}`) % (Math.max(privacyp.size, 3));
       let specC = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,95,120,95,52,57,0);
      agreementF -= parseFloat(`${3 / (Math.max(4, fullJ.size))}`);
   }
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let telegram5 = String.fromCharCode(104,95,54,49,95,99,104,114,111,109,97,104,111,108,100,0);
    let yinge = String.fromCharCode(100,99,115,99,116,112,95,115,95,51,56,0);
    let connectionX = String.fromCharCode(98,108,111,119,102,105,115,104,95,101,95,57,53,0);
    let filed1 = String.fromCharCode(113,95,51,57,95,116,97,98,108,101,103,101,110,0);
    let tailt = String.fromCharCode(99,101,110,99,95,111,95,50,52,0);
    let homes = 5.0;
    let alertl: Map<any, any> = new Map([[String.fromCharCode(120,112,116,97,98,108,101,95,118,95,55,57,0),22], [String.fromCharCode(110,111,110,100,99,95,53,95,55,48,0),578]]);
    let unready = String.fromCharCode(122,95,55,55,95,105,110,108,105,103,104,116,0);
    let membershipb = String.fromCharCode(104,95,50,52,95,109,97,110,100,101,108,98,114,111,116,0);
    let groupe = 4.0;
    let nalyticsP = 4;
    let middleware8 = String.fromCharCode(120,95,50,55,95,112,111,112,117,108,97,116,101,0);
    let projectc = String.fromCharCode(118,95,53,48,95,99,104,117,110,107,101,100,0);
   let castingt = String.fromCharCode(52,102,114,105,119,100,117,113,0) == telegram5;
   do {
       let albumr = String.fromCharCode(115,117,109,102,95,120,95,50,53,0);
       let tickeda = 3.0;
       let math4 = String.fromCharCode(116,95,55,55,95,119,101,98,115,0);
      let trophyK = albumr.length >= 7434291;
      do {
          let stylez = String.fromCharCode(107,95,55,55,95,98,110,98,105,110,0);
          let crossn: Array<any> = [888, 318];
          let playlisty: Map<any, any> = new Map([[String.fromCharCode(112,95,50,53,95,115,116,114,105,112,101,0),374], [String.fromCharCode(112,95,53,48,95,110,101,97,114,0),413]]);
         albumr += `${playlisty.size << (Math.min(Math.abs(2), 3))}`;
         stylez += `${stylez.length}`;
         crossn = [3 << (Math.min(2, crossn.length))];
         playlisty.set(stylez, 3);
         if (trophyK) {
            break;
         }
      } while (trophyK && (!albumr.endsWith(math4)));
      for (let c = 0; c < 2; c++) {
          let actionsV = String.fromCharCode(114,111,117,110,100,117,112,95,109,95,50,53,0);
          let circled = 5.0;
          let miniI = String.fromCharCode(110,95,49,95,114,100,109,117,108,116,0);
          let playY = String.fromCharCode(110,111,116,99,104,95,105,95,51,56,0);
          let logoutb = String.fromCharCode(102,95,57,55,95,97,108,112,104,97,110,117,109,101,114,105,99,0);
         tickeda *= parseFloat(`${1}`);
         actionsV += `${1 + actionsV.length}`;
         circled /= Math.max(2, parseFloat(`${parseInt(`${circled}`)}`));
         miniI = `${playY.length + 1}`;
         playY += `${actionsV.length * 3}`;
         logoutb += `${1 ^ actionsV.length}`;
      }
          let borderlessR = String.fromCharCode(118,95,52,54,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0);
          let langkeyv: Map<any, any> = new Map([[String.fromCharCode(104,95,49,56,95,101,118,101,114,121,0),false ], [String.fromCharCode(110,95,49,52,95,105,110,111,117,116,115,0),false ]]);
         albumr += `${math4.length}`;
         borderlessR = `${borderlessR.length}`;
         langkeyv = new Map([[`${langkeyv.size}`, 3]]);
         tickeda *= parseFloat(`${math4.length | albumr.length}`);
      let transfer6 = tickeda <= 7721893.0;
      do {
         tickeda *= parseFloat(`${parseInt(`${tickeda}`)}`);
         if (transfer6) {
            break;
         }
      } while ((math4.length >= 3) && transfer6);
         tickeda -= parseFloat(`${math4.length}`);
      let step8 = tickeda <= 6167253.0;
      do {
          let macaut = String.fromCharCode(115,116,117,100,105,111,95,109,95,55,55,0);
         tickeda *= parseFloat(`${math4.length << (Math.min(Math.abs(1), 2))}`);
         macaut += `${macaut.length}`;
         if (step8) {
            break;
         }
      } while (step8 && ((albumr.length >> (Math.min(Math.abs(2), 2))) > 2));
       let modell = String.fromCharCode(112,117,112,105,108,95,101,95,56,54,0);
       let fastforwardE = String.fromCharCode(101,120,116,115,107,95,55,95,49,48,0);
         math4 = `${parseInt(`${tickeda}`)}`;
      telegram5 = `${parseInt(`${tickeda}`)}`;
      if (castingt) {
         break;
      }
   } while ((parseInt(`${homes}`) >= telegram5.length) && castingt);
   let catagoryC = filed1 == String.fromCharCode(51,118,48,109,0);
   do {
      filed1 = `${filed1.length % (Math.max(2, 8))}`;
      if (catagoryC) {
         break;
      }
   } while (catagoryC && (1 < (4 >> (Math.min(5, filed1.length)))));

    if (KWConstants.isGuest(userState)) {

   let storej = 7517953.0 <= homes;
   do {
      homes += parseFloat(`${connectionX.length}`);
      if (storej) {
         break;
      }
   } while (storej && (alertl.get(`${homes}`) != null));
      unready += `${1 * tailt.length}`;
      dispatch(showLoginAction());

      yinge += `${parseInt(`${groupe}`)}`;
      connectionX = `${unready.length}`;
      return;

      nalyticsP &= tailt.length >> (Math.min(Math.abs(1), 5));
      telegram5 = `${alertl.size}`;
    }
    const message = shareOptions.message + " " + shareOptions.url;

   let chart2 = filed1.length <= 9066081;
   do {
       let module2 = 5;
       let sansb = String.fromCharCode(119,95,54,56,95,99,104,97,114,0);
         sansb += "1";
         module2 ^= module2 >> (Math.min(sansb.length, 2));
      filed1 = `${(unready == String.fromCharCode(84,0) ? nalyticsP : unready.length)}`;
      if (chart2) {
         break;
      }
   } while (chart2 && (4 == filed1.length));
   let placeholder3 = 7297918 <= yinge.length;
   do {
      yinge = `${tailt.length}`;
      if (placeholder3) {
         break;
      }
   } while ((filed1 != String.fromCharCode(100,0)) && placeholder3);
    const appURL = `tg://msg?text=${message}`;

       let basketball3 = 2.0;
         basketball3 /= Math.max(2 % (Math.max(parseInt(`${basketball3}`), 2)), 5);
      while (3.26 <= (3.19 / (Math.max(9, basketball3)))) {
         basketball3 /= Math.max(2, 3 + parseInt(`${basketball3}`));
         break;
      }
      let combined7 = basketball3 >= 7601482.0;
      do {
         basketball3 += 2 >> (Math.min(Math.abs(parseInt(`${basketball3}`)), 4));
         if (combined7) {
            break;
         }
      } while (combined7 && (basketball3 <= 4.0));
      yinge = `${membershipb.length}`;
   for (let g = 0; g < 2; g++) {
      alertl.set(`${groupe}`, 2);
   }
    const webURL = `https://t.me/share/url?url=${message}`;

      homes *= (parseFloat(`${String.fromCharCode(115,0) == tailt ? alertl.size : tailt.length}`));
   let sourceL = yinge.length >= 5693754;
   do {
       let carouselp = String.fromCharCode(115,116,114,105,110,103,117,116,105,108,115,95,114,95,56,55,0);
         carouselp = `${carouselp.length}`;
       let linec = String.fromCharCode(97,103,103,114,101,103,97,116,101,100,95,104,95,57,51,0);
       let internet6 = String.fromCharCode(98,95,57,54,95,98,105,97,115,101,100,0);
         carouselp += `${(String.fromCharCode(118,0) == linec ? linec.length : carouselp.length)}`;
      yinge += `${nalyticsP}`;
      if (sourceL) {
         break;
      }
   } while (sourceL && (!connectionX.includes(yinge)));

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

      yinge = `${yinge.length ^ tailt.length}`;
   while (2 > (4 - parseInt(`${homes}`)) || 5 > (telegram5.length >> (Math.min(Math.abs(4), 4)))) {
      homes += parseFloat(`${2 - connectionX.length}`);
      break;
   }
          console.log("supported telegram web");

   if (1 <= (nalyticsP >> (Math.min(Math.abs(1), 2))) || 1 <= (nalyticsP >> (Math.min(connectionX.length, 4)))) {
      nalyticsP <<= Math.min(Math.abs(middleware8.length ^ parseInt(`${homes}`)), 2);
   }
       let index9 = true;
       let hongkong_: Map<any, any> = new Map([[String.fromCharCode(115,95,57,53,95,98,108,111,111,109,0),true ], [String.fromCharCode(114,95,51,52,95,118,111,114,98,105,115,99,111,109,109,101,110,116,0),false ]]);
      let quest1 = hongkong_.size >= 7689842;
      do {
          let expandU = String.fromCharCode(115,116,114,101,114,114,111,114,95,119,95,54,52,0);
          let favoritey = 3;
         hongkong_.set(expandU, favoritey);
         if (quest1) {
            break;
         }
      } while (quest1 && (index9 && 5 < (5 | hongkong_.size)));
      if (index9) {
         hongkong_ = new Map([[`${hongkong_.size}`, (1 | (index9 ? 2 : 3))]]);
      }
      for (let s = 0; s < 2; s++) {
         index9 = !index9;
      }
      if (!index9) {
          let backgroundw: Map<any, any> = new Map([[String.fromCharCode(103,95,52,56,95,115,121,115,114,97,110,100,0),false ], [String.fromCharCode(114,111,116,114,95,120,95,56,54,0),true ]]);
         index9 = backgroundw.size >= 24;
      }
         index9 = hongkong_.size > 65;
      if (!index9) {
          let const_cY = String.fromCharCode(97,100,97,112,116,101,100,95,112,95,50,49,0);
          let googlea = false;
         hongkong_.set(`${googlea}`, ((googlea ? 3 : 2)));
         const_cY = `${const_cY.length}`;
      }
      connectionX += `${hongkong_.size}`;
          

   for (let m = 0; m < 3; m++) {
      nalyticsP <<= Math.min(3, Math.abs(alertl.size));
   }
   let episodes4 = 5808068 >= tailt.length;
   do {
      tailt = `${unready.length}`;
      if (episodes4) {
         break;
      }
   } while ((telegram5 == tailt) && episodes4);
          Linking.openURL(webURL);
        } else {

   for (let g = 0; g < 2; g++) {
       let heartD = 3;
       let description_1_y = String.fromCharCode(99,111,112,105,101,115,95,98,95,55,55,0);
       let kickm = true;
       let themei = false;
          let description_tua = String.fromCharCode(116,101,97,114,100,111,119,110,95,107,95,50,53,0);
         kickm = description_tua.endsWith(`${themei}`);
         description_1_y += `${description_1_y.length}`;
       let search1 = 1.0;
      if (!themei) {
         description_1_y += `${parseInt(`${search1}`) << (Math.min(4, Math.abs(3)))}`;
      }
      while (themei) {
          let resultn: Array<any> = [262, 123, 211];
          let favorite6 = false;
         themei = !favorite6;
         resultn.push(resultn.length << (Math.min(Math.abs(3), 2)));
         break;
      }
         themei = kickm && heartD <= 87;
          let relatedo: Array<any> = [290, 302, 415];
          let hooks1 = String.fromCharCode(105,95,55,57,95,115,99,97,108,97,114,0);
         search1 += parseFloat(`${description_1_y.length}`);
         relatedo.push(relatedo.length << (Math.min(hooks1.length, 5)));
         hooks1 = `${(String.fromCharCode(120,0) == hooks1 ? hooks1.length : relatedo.length)}`;
      for (let w = 0; w < 1; w++) {
         themei = kickm;
      }
      if (heartD < 2) {
         heartD /= Math.max(((themei ? 4 : 3)), 5);
      }
       let productU: Map<any, any> = new Map([[String.fromCharCode(101,95,57,48,95,97,110,110,111,116,97,116,101,0),239], [String.fromCharCode(105,110,105,95,99,95,51,52,0),312], [String.fromCharCode(99,105,110,116,95,109,95,51,53,0),50]]);
       let searchbar2: Map<any, any> = new Map([[String.fromCharCode(114,116,109,112,100,104,95,49,95,53,52,0),859], [String.fromCharCode(110,99,104,117,110,107,95,51,95,57,53,0),890], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,101,95,53,54,0),369]]);
         kickm = 28 < description_1_y.length && 28 < heartD;
         kickm = description_1_y.length <= 96;
      yinge = `${nalyticsP / (Math.max(filed1.length, 1))}`;
   }
   for (let q = 0; q < 3; q++) {
      homes /= Math.max(4, parseFloat(`${alertl.size}`));
   }
          console.log("not supported telegram web");

   for (let o = 0; o < 1; o++) {
       let themeE = 5;
       let backwardz = 2.0;
      let membershipY = 6760806 >= themeE;
      do {
         themeE *= parseInt(`${backwardz}`);
         if (membershipY) {
            break;
         }
      } while (((themeE - backwardz) > 5.33 && 1.19 > (backwardz - 5.33)) && membershipY);
      while ((themeE / (Math.max(backwardz, 4))) == 1.71 && 1 == (parseInt(`${backwardz}`) / (Math.max(6, themeE)))) {
         backwardz *= 2 ^ themeE;
         break;
      }
         backwardz *= themeE;
      let auto_6bd = 8472960.0 <= backwardz;
      do {
          let selectr = String.fromCharCode(103,95,51,55,95,116,97,107,101,0);
          let grayt = 2;
          let gmailJ = 2.0;
          let reminder9: Map<any, any> = new Map([[String.fromCharCode(110,95,55,54,95,100,116,111,97,0),22], [String.fromCharCode(117,110,101,115,99,97,112,105,110,103,95,114,95,50,53,0),619], [String.fromCharCode(114,95,49,57,95,119,121,99,104,101,112,114,111,111,102,0),871]]);
          let type_9nO = String.fromCharCode(116,114,117,101,95,57,95,57,57,0);
         backwardz /= Math.max(4, parseInt(`${gmailJ}`));
         selectr += `${grayt}`;
         grayt ^= 2 % (Math.max(3, type_9nO.length));
         gmailJ -= type_9nO.length;
         reminder9.set(`${grayt}`, reminder9.size * grayt);
         if (auto_6bd) {
            break;
         }
      } while ((themeE <= 1) && auto_6bd);
          let greyO = String.fromCharCode(114,95,57,51,95,103,101,109,102,105,108,101,0);
          let memberC = String.fromCharCode(99,95,50,57,95,115,116,114,99,109,112,0);
          let largea = true;
         themeE |= parseInt(`${backwardz}`) * themeE;
         greyO = `${greyO.length}`;
         memberC += `${greyO.length - 3}`;
         largea = !largea;
         themeE >>= Math.min(Math.abs(themeE - parseInt(`${backwardz}`)), 2);
      middleware8 = `${unready.length + 2}`;
   }
      connectionX += `${connectionX.length}`;
          

      groupe *= filed1.length * 1;
      membershipb += `${nalyticsP}`;
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let modityO: Map<any, any> = new Map([[String.fromCharCode(116,95,50,48,95,109,101,101,116,117,112,0),String.fromCharCode(99,95,50,95,112,117,116,105,110,116,0)], [String.fromCharCode(114,95,57,52,95,97,110,105,109,97,116,101,115,0),String.fromCharCode(97,105,110,116,105,110,103,95,116,95,57,57,0)]]);
    let mutedQ = String.fromCharCode(115,112,114,105,110,103,95,105,95,51,52,0);
    let confirmationB = String.fromCharCode(115,95,50,54,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
    let modelh = true;
    let chartX: Array<any> = [66, 55];
    let t_imageE = true;
    let floatingn = 2;
    let clearZ = String.fromCharCode(104,95,55,52,95,112,108,97,99,101,109,101,110,116,0);
    let benefit_ = false;
    let googleA: Array<any> = [566, 84, 247];
    let hover4 = 1.0;
    let bottomT = 5.0;
      chartX = [modityO.size % (Math.max(9, parseInt(`${bottomT}`)))];
   while (mutedQ.startsWith(`${bottomT}`)) {
      bottomT -= parseFloat(`${parseInt(`${bottomT}`) | 2}`);
      break;
   }
   if ((googleA.length | 4) < 4 || 4 < (confirmationB.length | googleA.length)) {
      googleA.push(3 % (Math.max(parseInt(`${hover4}`), 2)));
   }

    if (KWConstants.isGuest(userState)) {

       let comment4 = 1;
       let updatesp = false;
       let infou = String.fromCharCode(111,95,55,57,95,97,114,114,97,110,103,101,109,101,110,116,0);
      if (!updatesp) {
          let profile3 = true;
          let singlev = String.fromCharCode(108,95,54,57,95,99,104,97,99,104,97,0);
          let humidityG = String.fromCharCode(105,95,57,95,98,97,99,107,115,105,100,101,0);
         updatesp = !updatesp;
         profile3 = (4 == (humidityG.length << (Math.min(3, Math.abs((profile3 ? humidityG.length : 4))))));
         singlev += `${(String.fromCharCode(52,0) == humidityG ? humidityG.length : (profile3 ? 5 : 2))}`;
      }
       let bodanf = 5.0;
      for (let c = 0; c < 2; c++) {
         comment4 += (infou == String.fromCharCode(117,0) ? (updatesp ? 4 : 3) : infou.length);
      }
      for (let k = 0; k < 3; k++) {
         infou += `${parseInt(`${bodanf}`) / 2}`;
      }
       let specP: Map<any, any> = new Map([[String.fromCharCode(117,95,54,50,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0),147], [String.fromCharCode(119,95,53,50,95,102,102,109,97,116,104,0),261], [String.fromCharCode(110,95,49,53,95,111,112,101,114,97,116,111,114,115,0),802]]);
       let malaysiaT: Map<any, any> = new Map([[String.fromCharCode(97,112,109,116,101,115,116,95,103,95,50,52,0),421], [String.fromCharCode(115,104,97,100,101,114,115,95,111,95,49,53,0),142], [String.fromCharCode(97,95,52,53,95,99,111,110,110,101,99,116,105,111,110,115,0),338]]);
      while (3 <= (comment4 - specP.size) || (3 - specP.size) <= 1) {
          let referrerE: Array<any> = [720, 17, 213];
         specP.set(`${malaysiaT.size}`, specP.size ^ malaysiaT.size);
         referrerE.push(referrerE.length - 1);
         break;
      }
      if (5 > infou.length || !updatesp) {
          let halfK: Map<any, any> = new Map([[String.fromCharCode(107,95,54,52,95,108,105,98,109,0),String.fromCharCode(118,112,115,104,97,114,101,100,95,122,95,51,48,0)], [String.fromCharCode(113,95,50,55,95,102,111,110,116,99,111,110,102,105,103,0),String.fromCharCode(117,116,102,108,101,110,95,112,95,55,51,0)], [String.fromCharCode(115,95,51,57,95,98,117,115,121,0),String.fromCharCode(121,114,121,105,95,102,95,54,0)]]);
          let foundw = String.fromCharCode(116,117,112,108,101,95,51,95,56,50,0);
          let dice6 = 0;
          let gmailP = true;
          let rightP = String.fromCharCode(108,95,49,50,95,97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0);
         updatesp = gmailP;
         halfK.set(`${dice6}`, 1 << (Math.min(2, Math.abs(halfK.size))));
         foundw = `${2 >> (Math.min(4, Math.abs(halfK.size)))}`;
         dice6 -= 3;
         rightP = `${dice6}`;
      }
         infou = `${malaysiaT.size * 1}`;
          let lineV = String.fromCharCode(110,95,50,55,95,99,111,110,116,97,105,110,115,0);
          let launchS = 3;
          let rewindS: Array<any> = [String.fromCharCode(122,95,50,57,95,110,97,118,105,103,97,116,111,114,0), String.fromCharCode(106,95,57,53,95,110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0), String.fromCharCode(118,101,114,115,105,111,110,115,95,53,95,56,56,0)];
         updatesp = null == specP.get(`${launchS}`);
         lineV = `${3 ^ rewindS.length}`;
         launchS %= Math.max(1, 1);
         rewindS.push(rewindS.length);
      clearZ = `${2 >> (Math.min(5, infou.length))}`;
   if (!modelh) {
       let ajaxG = 1.0;
         ajaxG /= Math.max(parseInt(`${ajaxG}`), 5);
      if (ajaxG == ajaxG) {
         ajaxG += parseInt(`${ajaxG}`);
      }
       let successf = 1.0;
       let umengN = 0.0;
      benefit_ = (((!modelh ? mutedQ.length : 63) - mutedQ.length) > 63);
   }
   if (chartX.includes(bottomT)) {
      bottomT *= (parseFloat(`${floatingn + (t_imageE ? 4 : 4)}`));
   }
      dispatch(showLoginAction());

   let penalty0 = t_imageE ? !t_imageE : t_imageE;
   do {
      t_imageE = benefit_;
      if (penalty0) {
         break;
      }
   } while (penalty0 && (1 < (chartX.length + 5) && 5 < chartX.length));
      clearZ = `${modityO.size}`;
   while (confirmationB.length <= 2) {
      clearZ = `${parseInt(`${bottomT}`) >> (Math.min(1, Math.abs(3)))}`;
      break;
   }
      return;

   for (let n = 0; n < 3; n++) {
       let mini0 = String.fromCharCode(105,95,50,49,95,100,101,112,116,104,0);
       let station4 = true;
       let comment0 = String.fromCharCode(110,95,54,53,95,117,112,100,97,116,101,0);
      while (mini0.length <= 2 || station4) {
          let downloading9 = 1.0;
          let style8 = true;
          let questQ: Array<any> = [401, 212];
         mini0 += `${(2 + (station4 ? 3 : 4))}`;
         downloading9 *= parseFloat(`${questQ.length}`);
         style8 = !style8;
         questQ.push(2 + parseInt(`${downloading9}`));
         break;
      }
         station4 = mini0.length >= 96;
       let default_39 = String.fromCharCode(100,95,53,54,95,98,105,114,116,104,100,97,116,101,0);
         comment0 += "1";
      for (let h = 0; h < 2; h++) {
          let u_positionI = 4;
          let transferI: Map<any, any> = new Map([[String.fromCharCode(103,95,57,95,118,111,108,117,109,101,0),157], [String.fromCharCode(116,114,105,101,115,95,114,95,53,56,0),582], [String.fromCharCode(107,95,51,48,95,116,97,112,112,105,110,103,0),706]]);
         default_39 += `${default_39.length & u_positionI}`;
         u_positionI &= transferI.size;
         transferI = new Map([[`${transferI.size}`, transferI.size % 3]]);
      }
      while (station4) {
         station4 = mini0.length < 4 && !station4;
         break;
      }
         station4 = 40 > default_39.length && comment0 == String.fromCharCode(90,0);
          let linkr = 3;
          let containerK = String.fromCharCode(107,95,51,55,95,108,104,115,0);
          let aboutb = 0.0;
         mini0 += `${(1 - (station4 ? 5 : 4))}`;
         linkr <<= Math.min(5, Math.abs(parseInt(`${aboutb}`)));
         containerK = `${containerK.length}`;
         aboutb /= Math.max(parseFloat(`${linkr % (Math.max(2, 9))}`), 5);
         comment0 += `${(2 * (station4 ? 1 : 3))}`;
      hover4 -= (parseFloat(`${(modelh ? 2 : 2) * 1}`));
   }
      modelh = modityO.size >= 78;
       let signinup0 = 4;
      while ((signinup0 / (Math.max(3, 2))) < 3) {
          let closei = String.fromCharCode(100,95,50,56,0);
          let main_fI: Array<any> = [944, 218, 265];
          let modet = true;
          let taila: Array<any> = [674, 704, 265];
          let mappingA = String.fromCharCode(106,95,52,57,95,99,111,108,111,114,113,117,97,110,116,0);
         signinup0 *= (String.fromCharCode(86,0) == closei ? closei.length : mappingA.length);
         main_fI = [main_fI.length];
         modet = (taila.length % (Math.max(main_fI.length, 3))) == 83;
         taila = [(taila.length - (modet ? 1 : 4))];
         mappingA = "1";
         break;
      }
      while (4 >= signinup0) {
          let reada: Array<any> = [570, 228];
          let actionF = 0.0;
          let group6 = String.fromCharCode(108,95,57,51,95,115,98,119,97,105,116,0);
          let muted0 = 1.0;
          let moviesw: Map<any, any> = new Map([[String.fromCharCode(100,110,120,104,100,100,97,116,97,95,122,95,50,52,0),String.fromCharCode(119,105,116,104,100,114,97,119,95,102,95,57,50,0)], [String.fromCharCode(120,95,55,51,95,101,110,117,109,101,114,97,116,105,110,103,0),String.fromCharCode(109,95,53,51,95,113,117,97,100,116,114,101,101,0)], [String.fromCharCode(118,95,57,53,95,108,117,104,110,0),String.fromCharCode(110,108,109,101,97,110,115,95,122,95,52,55,0)]]);
         signinup0 += reada.length - 1;
         reada.push(1 * moviesw.size);
         actionF += group6.length;
         group6 += "3";
         muted0 -= parseInt(`${muted0}`) / 2;
         moviesw.set(`${muted0}`, group6.length - parseInt(`${muted0}`));
         break;
      }
         signinup0 &= signinup0 * signinup0;
      floatingn += ((t_imageE ? 5 : 4) ^ chartX.length);
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

      modityO = new Map([[`${t_imageE}`, floatingn & 2]]);
   let hoverG = 6012380.0 <= hover4;
   do {
      hover4 += parseFloat(`${2}`);
      if (hoverG) {
         break;
      }
   } while (hoverG && ((bottomT - 4.35) < 5.63 && 2.99 < (4.35 - hover4)));
      modelh = googleA.length == modityO.size;
    const appURL = `weixin://send?text=${message}`;

   let firebaseB = modelh ? !modelh : modelh;
   do {
      modelh = 51.81 < hover4;
      if (firebaseB) {
         break;
      }
   } while (firebaseB && (!confirmationB.endsWith(`${modelh}`)));
       let selectionn = 3.0;
       let logoutM = String.fromCharCode(112,111,115,108,105,115,116,95,56,95,55,48,0);
       let modelp = 1.0;
       let entry_ = String.fromCharCode(109,95,51,56,95,97,99,116,105,118,97,116,101,100,0);
       let diceq = String.fromCharCode(111,95,52,54,95,102,101,116,99,104,0);
         logoutM += `${entry_.length}`;
          let settingsr = 2.0;
          let cornerC = 1;
         entry_ = `${1 % (Math.max(1, logoutM.length))}`;
         settingsr *= parseFloat(`${parseInt(`${settingsr}`)}`);
         cornerC %= Math.max(cornerC, 4);
         selectionn /= Math.max(parseInt(`${modelp}`), 5);
         diceq = `${parseInt(`${modelp}`) >> (Math.min(Math.abs(2), 2))}`;
      for (let p = 0; p < 1; p++) {
         entry_ += `${parseInt(`${modelp}`) ^ logoutM.length}`;
      }
         logoutM += `${parseInt(`${selectionn}`) / 1}`;
      if ((2.62 + selectionn) >= 5.52) {
         selectionn /= Math.max(parseInt(`${modelp}`), 4);
      }
          let moreT = String.fromCharCode(97,95,50,55,95,115,116,114,114,101,115,101,116,0);
         logoutM += `${(String.fromCharCode(67,0) == moreT ? moreT.length : entry_.length)}`;
      benefit_ = chartX.length <= 81;
       let pause3 = String.fromCharCode(101,120,99,108,117,100,101,95,99,95,54,56,0);
       let iconN = String.fromCharCode(119,95,54,53,95,112,97,110,101,108,0);
       let ajaxP = String.fromCharCode(108,111,110,95,112,95,56,56,0);
      while (iconN.includes(`${pause3.length}`)) {
         iconN += `${ajaxP.length}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
          let slider7 = String.fromCharCode(102,95,57,49,95,117,110,105,120,0);
          let moviesf: Array<any> = [491, 483, 587];
          let storeb = false;
          let adultE = String.fromCharCode(104,95,55,56,95,115,112,105,110,108,111,99,107,0);
          let nalyticsS = String.fromCharCode(122,95,54,56,95,121,117,118,116,101,115,116,0);
         iconN = `${adultE.length}`;
         slider7 = `${(slider7 == String.fromCharCode(71,0) ? (storeb ? 4 : 5) : slider7.length)}`;
         moviesf = [slider7.length % 3];
         storeb = String.fromCharCode(120,0) == slider7 && 38 < moviesf.length;
         adultE = `${3 * slider7.length}`;
         nalyticsS = `${slider7.length}`;
      }
      if (iconN.length < ajaxP.length) {
          let fieldG = 3.0;
          let actionsf = String.fromCharCode(102,105,110,100,110,101,116,95,53,95,52,52,0);
          let unselectedY = String.fromCharCode(118,95,53,52,95,118,97,108,117,101,0);
          let crownh = true;
         iconN = "1";
         fieldG *= unselectedY.length + 3;
         actionsf += "3";
         unselectedY += `${2 ^ parseInt(`${fieldG}`)}`;
         crownh = (fieldG * actionsf.length) > 94.31;
      }
      for (let s = 0; s < 3; s++) {
         iconN = `${(String.fromCharCode(102,0) == pause3 ? ajaxP.length : pause3.length)}`;
      }
         iconN += `${pause3.length | 1}`;
         iconN += "3";
      for (let i = 0; i < 1; i++) {
         iconN += `${ajaxP.length}`;
      }
         pause3 += `${iconN.length & 1}`;
      if (2 >= iconN.length) {
          let watchv = false;
          let infoM: Array<any> = [248, 406, 580];
         iconN = `${(String.fromCharCode(77,0) == pause3 ? (watchv ? 4 : 3) : pause3.length)}`;
         watchv = infoM.includes(infoM[0]);
      }
      clearZ += "2";
    

      t_imageE = !modelh;
   while ((googleA.length & 1) <= 3 && t_imageE) {
       let morej = 3.0;
       let weiboE = false;
       let step_: Map<any, any> = new Map([[String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,101,95,51,50,0),216], [String.fromCharCode(101,118,101,114,121,95,99,95,49,51,0),761], [String.fromCharCode(118,95,57,48,95,111,108,108,101,99,116,105,111,110,115,0),122]]);
       let filed8 = String.fromCharCode(122,95,55,56,95,103,108,98,108,0);
       let assistQ = String.fromCharCode(108,95,54,51,95,116,101,108,108,0);
      if (filed8.length >= 2) {
          let context3: Array<any> = [865, 46];
          let resultJ = String.fromCharCode(115,101,110,100,101,114,95,104,95,51,52,0);
          let backwardo: Map<any, any> = new Map([[String.fromCharCode(99,95,54,53,95,99,97,108,99,119,0),256], [String.fromCharCode(97,95,50,49,95,108,105,98,114,97,114,121,0),956]]);
          let rulesq = true;
         assistQ += "2";
         context3 = [((rulesq ? 1 : 1) * resultJ.length)];
         resultJ = `${2 ^ context3.length}`;
         backwardo = new Map([[`${backwardo.size}`, backwardo.size]]);
      }
      while (2 == step_.size) {
         step_ = new Map([[`${step_.size}`, step_.size]]);
         break;
      }
      let mailD = weiboE ? !weiboE : weiboE;
      do {
         weiboE = weiboE && 96.21 <= morej;
         if (mailD) {
            break;
         }
      } while ((!weiboE) && mailD);
         morej *= parseInt(`${morej}`);
       let favoriteY = String.fromCharCode(111,95,55,56,95,109,112,101,103,118,105,100,101,111,0);
      if (!filed8.includes(`${step_.size}`)) {
         step_.set(`${morej}`, parseInt(`${morej}`));
      }
         favoriteY = `${step_.size & parseInt(`${morej}`)}`;
       let source_ = String.fromCharCode(109,95,56,52,95,99,109,112,97,100,100,114,0);
      for (let l = 0; l < 1; l++) {
         source_ += `${assistQ.length}`;
      }
      let main_nV = String.fromCharCode(49,113,100,97,100,112,105,50,114,108,0) == favoriteY;
      do {
          let robotoP: Map<any, any> = new Map([[String.fromCharCode(117,95,49,95,111,98,115,101,114,118,101,114,115,0),false ], [String.fromCharCode(109,97,112,102,105,108,101,95,119,95,50,51,0),false ], [String.fromCharCode(100,97,115,104,101,115,95,53,95,54,57,0),false ]]);
          let crossA = String.fromCharCode(107,95,50,52,95,111,118,101,114,115,99,114,111,108,108,0);
         favoriteY += "1";
         robotoP = new Map([[`${robotoP.size}`, crossA.length]]);
         crossA = `${robotoP.size / (Math.max(crossA.length, 5))}`;
         if (main_nV) {
            break;
         }
      } while ((assistQ == favoriteY) && main_nV);
      for (let f = 0; f < 2; f++) {
          let commentT: Map<any, any> = new Map([[String.fromCharCode(101,95,56,53,95,115,110,97,109,101,0),String.fromCharCode(99,115,115,95,104,95,57,54,0)], [String.fromCharCode(98,95,50,95,109,97,120,105,109,105,122,101,100,0),String.fromCharCode(111,95,54,57,95,118,105,103,110,101,116,116,105,110,103,0)], [String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,95,99,95,56,57,0),String.fromCharCode(98,95,50,51,95,105,110,116,101,114,97,99,116,0)]]);
          let orangeJ = String.fromCharCode(101,97,114,108,105,101,114,95,114,95,55,50,0);
          let prediction2 = 0;
         filed8 += `${(String.fromCharCode(90,0) == favoriteY ? favoriteY.length : filed8.length)}`;
         commentT = new Map([[`${commentT.size}`, 3]]);
         orangeJ = `${3 % (Math.max(6, prediction2))}`;
         prediction2 += 2 & commentT.size;
      }
      if (2 == (5 * source_.length) || (5 * source_.length) == 4) {
          let inactiveg: Map<any, any> = new Map([[String.fromCharCode(110,95,50,50,95,102,114,101,105,114,0),333], [String.fromCharCode(113,116,97,98,108,101,115,95,119,95,55,52,0),894], [String.fromCharCode(101,95,51,51,95,100,120,118,97,0),7]]);
         source_ = `${parseInt(`${morej}`) % (Math.max(inactiveg.size, 2))}`;
      }
      if ((morej - 4.20) > 1.69) {
          let usery: Array<any> = [String.fromCharCode(97,115,115,101,109,98,108,121,95,108,95,49,50,0), String.fromCharCode(115,95,49,95,115,112,101,97,107,101,114,0)];
          let with_o78 = 2.0;
         weiboE = 26 == source_.length;
         usery = [usery.length / (Math.max(5, parseInt(`${with_o78}`)))];
         with_o78 -= 2 & usery.length;
      }
      for (let t = 0; t < 2; t++) {
          let overT = String.fromCharCode(100,97,115,104,101,115,95,104,95,52,57,0);
          let with_s1O = true;
          let commonA = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,95,50,95,50,0);
         filed8 = `${filed8.length / (Math.max(3, 3))}`;
         overT = `${((with_s1O ? 3 : 3) | commonA.length)}`;
         with_s1O = !commonA.endsWith(`${with_s1O}`);
      }
         assistQ += `${filed8.length + parseInt(`${morej}`)}`;
      googleA.push((parseInt(`${hover4}`) ^ (benefit_ ? 2 : 3)));
      break;
   }
   for (let m = 0; m < 3; m++) {
      confirmationB += `${modityO.size & floatingn}`;
   }
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

       let launchz = true;
       let whistleB: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,95,118,95,55,50,0),889], [String.fromCharCode(111,112,116,105,109,105,115,109,95,97,95,49,50,0),541], [String.fromCharCode(98,111,111,107,109,97,114,107,115,95,99,95,55,56,0),895]]);
       let xvody = String.fromCharCode(120,95,55,95,100,101,99,111,109,112,114,101,115,115,101,100,0);
      let string_ = String.fromCharCode(109,108,57,109,106,49,114,101,0) == xvody;
      do {
          let aways = String.fromCharCode(114,95,53,53,95,109,97,99,101,0);
          let regengJ: Map<any, any> = new Map([[String.fromCharCode(109,95,54,53,95,115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0),String.fromCharCode(119,95,50,54,95,100,105,115,97,108,108,111,119,0)], [String.fromCharCode(104,105,115,116,111,114,105,101,115,95,56,95,56,52,0),String.fromCharCode(99,95,49,57,0)], [String.fromCharCode(108,95,57,49,95,120,99,101,112,116,105,111,110,0),String.fromCharCode(100,97,109,112,105,110,103,95,116,95,51,56,0)]]);
          let show7: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,115,95,107,95,53,56,0),String.fromCharCode(105,116,101,114,97,116,105,118,101,95,121,95,52,53,0)], [String.fromCharCode(114,101,115,112,111,110,100,95,53,95,52,48,0),String.fromCharCode(102,95,53,57,95,114,101,117,112,108,111,97,100,0)], [String.fromCharCode(112,114,105,111,114,105,116,121,95,112,95,49,53,0),String.fromCharCode(98,111,116,116,108,101,110,101,99,107,95,109,95,50,57,0)]]);
          let subsr = String.fromCharCode(121,95,57,50,95,114,101,119,114,105,116,101,114,0);
         xvody = `${aways.length}`;
         aways = `${regengJ.size | show7.size}`;
         regengJ.set(subsr, subsr.length * 1);
         show7.set(subsr, subsr.length | 3);
         if (string_) {
            break;
         }
      } while ((launchz && 2 >= xvody.length) && string_);
         xvody += `${whistleB.size << (Math.min(Math.abs(2), 2))}`;
          let moreY = true;
          let window_tL = 1;
         xvody = `${xvody.length / (Math.max(2, 9))}`;
         moreY = !moreY;
         window_tL &= 1 & window_tL;
         whistleB = new Map([[`${whistleB.size}`, 2]]);
         whistleB.set(`${launchz}`, ((launchz ? 3 : 4) - whistleB.size));
         xvody = "1";
          let countryL = 1;
         whistleB = new Map([[`${whistleB.size}`, countryL]]);
         whistleB.set(`${launchz}`, whistleB.size - 2);
         launchz = xvody.length < 65;
      mutedQ += `${parseInt(`${bottomT}`) << (Math.min(Math.abs(1), 5))}`;
       let darkl = 4.0;
       let mathr = String.fromCharCode(106,95,56,48,95,114,101,108,97,121,0);
      while ((2 + mathr.length) < 4 && (darkl / 3.21) < 1.12) {
         darkl += 1 >> (Math.min(2, mathr.length));
         break;
      }
         darkl /= Math.max(5, 2 >> (Math.min(1, mathr.length)));
      while (mathr.length < 3) {
         mathr = "1";
         break;
      }
         darkl += (mathr == String.fromCharCode(119,0) ? parseInt(`${darkl}`) : mathr.length);
          let group9 = 0.0;
          let gesture7 = String.fromCharCode(105,95,57,51,95,117,112,99,97,115,101,0);
          let tooltipsb = 0.0;
         mathr = `${(gesture7 == String.fromCharCode(66,0) ? gesture7.length : parseInt(`${group9}`))}`;
         group9 += parseInt(`${tooltipsb}`) / (Math.max(7, parseInt(`${tooltipsb}`)));
          let handlerq = 1.0;
          let sortJ = String.fromCharCode(114,101,110,100,105,116,105,111,110,95,110,95,49,54,0);
          let favorite7 = false;
         mathr = `${sortJ.length}`;
         handlerq /= Math.max(1, ((favorite7 ? 3 : 1) | parseInt(`${handlerq}`)));
         sortJ = `${(parseInt(`${handlerq}`) * (favorite7 ? 5 : 4))}`;
      hover4 *= parseFloat(`${2 * clearZ.length}`);
      mutedQ += "3";
          

      googleA.push(clearZ.length);
      benefit_ = modityO.size < mutedQ.length;
      mutedQ = `${1 / (Math.max(parseInt(`${hover4}`), 7))}`;
          Linking.openURL(appURL);
        } else {

   if (googleA.length >= 1 && (googleA.length & 1) >= 3) {
      benefit_ = (clearZ.length | googleA.length) > 61;
   }
   while ((2 & modityO.size) < 1) {
      bottomT += parseFloat(`${2}`);
      break;
   }
   let styleY = 7862186 >= chartX.length;
   do {
      chartX.push(parseInt(`${hover4}`) | 1);
      if (styleY) {
         break;
      }
   } while (styleY && (clearZ.startsWith(`${chartX.length}`)));
          console.log("WeChat app not installed.");

   if (benefit_ || (floatingn + 1) >= 4) {
       let userm = 0.0;
       let spinnerQ = 5;
       let plusT: Array<any> = [351, 579];
       let filled6: Array<any> = [String.fromCharCode(114,95,53,49,95,117,114,118,101,0), String.fromCharCode(122,95,57,49,95,115,116,111,112,0)];
       let moonV = 3;
         userm -= parseFloat(`${2}`);
          let chatH = 0;
          let notificationC = String.fromCharCode(116,105,109,101,114,115,95,121,95,53,53,0);
         spinnerQ -= 1;
         chatH -= (String.fromCharCode(67,0) == notificationC ? chatH : notificationC.length);
         spinnerQ ^= filled6.length;
      for (let o = 0; o < 2; o++) {
         plusT = [filled6.length - spinnerQ];
      }
      let minis = moonV <= 5440535;
      do {
         moonV += filled6.length ^ 3;
         if (minis) {
            break;
         }
      } while ((moonV >= 4) && minis);
         spinnerQ *= moonV % 1;
         spinnerQ /= Math.max(5, 1);
         plusT.push(plusT.length);
         filled6 = [1 | filled6.length];
      if ((filled6.length + spinnerQ) >= 5 && 4 >= (filled6.length + 5)) {
         spinnerQ >>= Math.min(4, Math.abs(1));
      }
      let calendar_ = 8673597 >= spinnerQ;
      do {
         spinnerQ %= Math.max(3, 2 | moonV);
         if (calendar_) {
            break;
         }
      } while (calendar_ && ((spinnerQ * parseInt(`${userm}`)) > 4 || (userm * 1.52) > 5.88));
         plusT = [3];
      for (let z = 0; z < 1; z++) {
          let macaus = String.fromCharCode(101,110,115,117,114,101,95,120,95,56,55,0);
          let texto = String.fromCharCode(119,101,98,118,105,101,119,95,116,95,57,53,0);
          let whitel = 3.0;
         spinnerQ += texto.length;
         macaus += "3";
         texto = `${parseInt(`${whitel}`) + 1}`;
         whitel += parseFloat(`${parseInt(`${whitel}`) - 3}`);
      }
          let main_a7 = true;
          let default_76 = true;
         plusT.push(1 << (Math.min(4, filled6.length)));
         main_a7 = !default_76;
         default_76 = (!default_76 ? main_a7 : !default_76);
      if (parseInt(`${userm}`) == plusT.length) {
         userm -= parseFloat(`${filled6.length}`);
      }
      benefit_ = !modelh;
   }
   if (!clearZ.endsWith(`${benefit_}`)) {
      benefit_ = modityO.size >= 81;
   }
       let report5 = true;
      if (report5) {
         report5 = !report5;
      }
         report5 = !report5;
       let carouselW = 1;
      modelh = googleA.length == 47;
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let gpayZ = String.fromCharCode(101,95,57,50,95,115,105,102,116,0);
    let share2 = String.fromCharCode(112,97,103,101,115,101,101,107,95,100,95,51,52,0);
    let splashK: Array<any> = [509, 975];
    let predictionE = 1.0;
    let backF = 1.0;
    let checkbox7 = false;
    let matchw = String.fromCharCode(114,101,109,111,116,101,108,121,95,57,95,55,0);
    let placementV = 5.0;
    let paginationo = String.fromCharCode(101,95,51,49,95,114,101,115,105,103,110,105,110,103,0);
    let brightnesss = 3.0;
    let backwardX = String.fromCharCode(105,110,118,101,114,116,95,122,95,53,55,0);
    let anythinkv = 0.0;
    let privilege_ = String.fromCharCode(109,95,48,95,105,110,99,114,101,109,101,110,116,115,0);
    let fillU = false;
    let condensedp = 2.0;
    let paginationm = String.fromCharCode(98,117,114,115,116,95,119,95,50,48,0);
       let bingr: Array<any> = [920, 938];
       let download5: Array<any> = [811, 856];
       let windc = String.fromCharCode(116,95,49,56,95,98,108,117,114,97,121,0);
         windc = `${download5.length}`;
          let awayc = String.fromCharCode(109,97,116,114,105,120,102,95,111,95,49,51,0);
          let entry1 = String.fromCharCode(103,95,53,56,95,112,97,112,101,114,0);
         download5 = [2 % (Math.max(5, download5.length))];
         awayc = `${2 << (Math.min(2, entry1.length))}`;
         entry1 = `${awayc.length}`;
      while (3 > (windc.length << (Math.min(Math.abs(1), 4))) || 5 > (1 << (Math.min(5, windc.length)))) {
         windc = `${bingr.length}`;
         break;
      }
      while (1 == (windc.length | download5.length)) {
         download5 = [windc.length / (Math.max(9, bingr.length))];
         break;
      }
      for (let w = 0; w < 2; w++) {
          let dialogz = String.fromCharCode(106,95,56,55,95,111,109,112,111,115,101,0);
          let grayf = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,48,95,56,57,0);
          let hoverd: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,111,112,114,105,97,116,101,95,120,95,50,0),32], [String.fromCharCode(99,95,57,53,95,97,109,112,108,105,102,121,0),645], [String.fromCharCode(112,117,116,115,116,114,95,108,95,57,50,0),699]]);
          let sellL = false;
          let eighteenQ = true;
         download5.push(grayf.length);
         dialogz += `${(dialogz == String.fromCharCode(72,0) ? dialogz.length : hoverd.size)}`;
         grayf += `${hoverd.size}`;
         sellL = (((!sellL ? dialogz.length : 20) & dialogz.length) > 20);
         eighteenQ = dialogz.length <= 36;
      }
      for (let g = 0; g < 3; g++) {
         windc += `${windc.length / 2}`;
      }
       let moreU: Array<any> = [String.fromCharCode(101,95,53,56,95,105,110,116,101,103,114,97,116,101,100,0), String.fromCharCode(112,95,56,54,95,109,111,99,107,101,100,0), String.fromCharCode(105,112,104,111,110,101,95,103,95,57,51,0)];
         download5.push(bingr.length + 3);
      while (bingr.length == 2) {
         bingr = [windc.length - bingr.length];
         break;
      }
      predictionE += gpayZ.length % (Math.max(matchw.length, 3));
      brightnesss *= parseInt(`${predictionE}`);

    if (KWConstants.isGuest(userState)) {

   while (share2 != String.fromCharCode(115,0) && matchw != String.fromCharCode(80,0)) {
      share2 = `${parseInt(`${placementV}`) >> (Math.min(4, Math.abs(2)))}`;
      break;
   }
   if (4 < (parseInt(`${backF}`) * gpayZ.length)) {
      gpayZ = `${backwardX.length}`;
   }
      dispatch(showLoginAction());

   let xvodH = placementV >= 8947450.0;
   do {
      placementV += parseFloat(`${1}`);
      if (xvodH) {
         break;
      }
   } while ((!gpayZ.startsWith(`${placementV}`)) && xvodH);
   while ((brightnesss / (Math.max(2.54, 4))) < 5.2) {
      brightnesss -= 3;
      break;
   }
      return;
    }
    try {

   let recommendationR = 7280302.0 <= predictionE;
   do {
      predictionE -= (String.fromCharCode(114,0) == share2 ? splashK.length : share2.length);
      if (recommendationR) {
         break;
      }
   } while ((4 < (parseInt(`${predictionE}`) - 4) && 3.38 < (predictionE - matchw.length)) && recommendationR);
   if (2.62 > (brightnesss / (Math.max(backF, 10))) && (brightnesss / 2.62) > 3.22) {
      backF /= Math.max(parseFloat(`${share2.length / (Math.max(2, 4))}`), 4);
   }
      const inviteParam = userState.userReferralCode + userState.userName;

   while (5 > (splashK.length * share2.length) && 4 > (splashK.length * 5)) {
      share2 = `${(String.fromCharCode(104,0) == paginationo ? paginationo.length : parseInt(`${backF}`))}`;
      break;
   }
   while (1.58 <= (anythinkv - brightnesss)) {
       let overlayx = 5.0;
       let lessS = true;
       let switch_1Z = true;
       let playG = true;
       let injuryF: Array<any> = [676, 188, 647];
       let league6: Map<any, any> = new Map([[String.fromCharCode(116,95,51,52,95,115,97,110,105,116,105,122,101,0),154], [String.fromCharCode(116,119,111,109,95,54,95,56,51,0),382], [String.fromCharCode(114,101,103,101,120,112,95,49,95,56,50,0),275]]);
       let stringL: Map<any, any> = new Map([[String.fromCharCode(105,95,57,95,104,97,110,100,111,118,101,114,0),String.fromCharCode(105,112,111,108,95,49,95,53,48,0)], [String.fromCharCode(98,95,54,95,100,121,110,97,114,114,97,121,0),String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,95,54,95,52,56,0)]]);
      while (2 == (parseInt(`${overlayx}`) * league6.size)) {
         overlayx /= Math.max(5, parseFloat(`${league6.size}`));
         break;
      }
         overlayx += (parseFloat(`${(lessS ? 1 : 3) % 2}`));
          let linkz = false;
          let questD = false;
         injuryF = [1 + injuryF.length];
         linkz = (linkz ? questD : linkz);
         questD = (questD ? linkz : questD);
          let playH = 4.0;
         playG = injuryF.length <= parseInt(`${playH}`);
      while (league6.get(`${stringL.size}`) == null) {
          let stylem = false;
          let anytime7 = 0.0;
          let hoverf = false;
         league6.set(`${anytime7}`, parseInt(`${anytime7}`) + 2);
         stylem = !hoverf;
         break;
      }
      if (playG || 3 > (stringL.size ^ 2)) {
          let termsC = String.fromCharCode(115,112,101,99,105,102,105,99,95,114,95,57,56,0);
         playG = !lessS || league6.size < 55;
         termsC = "3";
      }
         playG = null != stringL.get(`${switch_1Z}`);
      while (lessS || (1 | injuryF.length) >= 4) {
         lessS = injuryF.length > 20;
         break;
      }
      for (let u = 0; u < 2; u++) {
          let checkboxW: Map<any, any> = new Map([[String.fromCharCode(113,95,54,53,95,100,111,118,101,0),true ], [String.fromCharCode(121,111,110,108,121,120,95,55,95,50,51,0),false ]]);
          let benefit0 = String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,116,95,51,50,0);
          let slidert = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,118,95,51,56,0);
          let viewerk = false;
          let canvasG = String.fromCharCode(100,95,57,54,95,99,111,110,110,101,99,116,0);
         switch_1Z = (88 >= ((viewerk ? checkboxW.size : 62) % (Math.max(checkboxW.size, 5))));
         benefit0 = `${canvasG.length % (Math.max(6, slidert.length))}`;
         slidert = `${benefit0.length >> (Math.min(5, slidert.length))}`;
         viewerk = canvasG == slidert;
      }
      for (let k = 0; k < 1; k++) {
         injuryF.push(2);
      }
      brightnesss += ((playG ? 1 : 2));
      break;
   }

      const Buffer = require("buffer").Buffer;

   let bottomh = brightnesss <= 9524570.0;
   do {
       let detaily = String.fromCharCode(100,105,109,101,110,115,105,116,111,110,115,95,103,95,51,0);
       let becomey: Array<any> = [126, 307, 99];
       let changep = 5;
          let bellb = String.fromCharCode(122,95,51,49,95,97,112,115,0);
         detaily += "1";
         bellb = `${bellb.length}`;
      while ((becomey.length >> (Math.min(Math.abs(4), 1))) >= 5) {
         changep -= becomey.length;
         break;
      }
          let grayE = 2.0;
          let notificationp = 1.0;
          let goalj: Array<any> = [String.fromCharCode(117,115,117,98,95,115,95,54,49,0), String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,105,95,55,0)];
         becomey.push(parseInt(`${notificationp}`) - 3);
         grayE -= parseInt(`${grayE}`) << (Math.min(3, Math.abs(3)));
         notificationp += goalj.length + parseInt(`${grayE}`);
         goalj.push(3);
         changep >>= Math.min(Math.abs(detaily.length % (Math.max(3, becomey.length))), 1);
      while ((becomey.length * 4) < 3) {
         detaily = `${becomey.length}`;
         break;
      }
      let turny = changep <= 6428387;
      do {
         changep |= becomey.length * 2;
         if (turny) {
            break;
         }
      } while (turny && (3 > (becomey.length * changep)));
      let back9 = 6698183 >= becomey.length;
      do {
         becomey = [3 | changep];
         if (back9) {
            break;
         }
      } while (back9 && (becomey.length >= 5));
      if (2 < (1 * changep)) {
         becomey.push(changep % (Math.max(becomey.length, 3)));
      }
       let largeK: Array<any> = [25, 406, 657];
      brightnesss /= Math.max(paginationo.length | 2, 5);
      if (bottomh) {
         break;
      }
   } while (bottomh && (2.24 >= (3.59 * placementV) || (placementV * 3.59) >= 3.33));
      paginationo += "2";
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      backwardX += `${3 >> (Math.min(1, gpayZ.length))}`;
   if (gpayZ.length <= predictionE) {
      gpayZ = `${parseInt(`${placementV}`) / (Math.max(parseInt(`${anythinkv}`), 9))}`;
   }

      

   while (5 <= share2.length) {
       let shoot2 = String.fromCharCode(101,95,50,48,95,112,114,101,97,108,108,111,99,97,116,101,0);
          let vertical0 = 5.0;
          let constantsF = 5.0;
         shoot2 = `${parseInt(`${vertical0}`)}`;
         constantsF -= 3;
      for (let q = 0; q < 3; q++) {
          let injuryf = false;
          let movies2: Array<any> = [String.fromCharCode(106,95,53,54,95,112,111,108,105,99,105,101,115,0), String.fromCharCode(110,101,101,100,115,95,115,95,56,48,0), String.fromCharCode(115,115,101,100,105,102,102,95,116,95,57,53,0)];
          let strv = true;
          let launchK: Array<any> = [213, 786, 268];
          let slider2 = String.fromCharCode(104,95,49,57,95,102,105,120,116,117,114,101,115,0);
         shoot2 += `${((strv ? 5 : 1) << (Math.min(Math.abs((injuryf ? 3 : 5)), 2)))}`;
         injuryf = 55 < slider2.length;
         movies2 = [movies2.length - slider2.length];
         strv = movies2.length > 93 || 93 > launchK.length;
         launchK.push(movies2.length << (Math.min(2, launchK.length)));
      }
      for (let k = 0; k < 3; k++) {
         shoot2 = "1";
      }
      matchw = `${(paginationo == String.fromCharCode(110,0) ? parseInt(`${brightnesss}`) : paginationo.length)}`;
      break;
   }
      checkbox7 = 76.38 < predictionE && share2.length < 17;

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

   let championC = checkbox7 ? !checkbox7 : checkbox7;
   do {
      checkbox7 = backwardX.length <= matchw.length;
      if (championC) {
         break;
      }
   } while (championC && (1.67 < backF));
      checkbox7 = splashK.length < 15;

      const result = await Share.share({
        message: msg,
      });

      gpayZ = "3";
   let refreshb = 8541426.0 <= brightnesss;
   do {
       let active2: Array<any> = [751, 228, 515];
       let helpers = String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,49,95,49,48,0);
       let reminderR = false;
         reminderR = active2.includes(reminderR);
         reminderR = !helpers.endsWith(`${reminderR}`);
         active2 = [active2.length];
         helpers = `${helpers.length}`;
         helpers += `${(String.fromCharCode(79,0) == helpers ? helpers.length : (reminderR ? 3 : 5))}`;
      brightnesss += 3;
      if (refreshb) {
         break;
      }
   } while (refreshb && (placementV <= 1.44));
      if (result.action === Share.sharedAction) {

       let userD = 0.0;
       let commong = 5;
      for (let d = 0; d < 2; d++) {
          let cross5 = 3.0;
          let whiteV: Array<any> = [366, 813];
          let canvas6 = String.fromCharCode(116,95,49,48,48,95,97,112,112,101,110,100,0);
         commong *= parseInt(`${cross5}`);
         cross5 *= (parseFloat(`${canvas6 == String.fromCharCode(101,0) ? canvas6.length : whiteV.length}`));
         whiteV = [1];
      }
      if ((commong | 3) >= 1 && (userD + 2.80) >= 1.5) {
          let commonc = String.fromCharCode(114,101,99,101,110,116,108,121,95,97,95,54,50,0);
          let smallb: Map<any, any> = new Map([[String.fromCharCode(120,95,49,57,95,99,111,108,108,101,99,116,111,114,0),false ], [String.fromCharCode(120,95,57,57,95,112,114,101,0),true ], [String.fromCharCode(113,95,55,53,95,115,116,114,105,110,103,0),true ]]);
          let bootsplashU = 0.0;
          let googler: Map<any, any> = new Map([[String.fromCharCode(100,95,52,57,95,104,97,115,104,116,97,98,108,101,0),true ], [String.fromCharCode(100,95,50,95,109,105,110,105,109,97,0),true ], [String.fromCharCode(111,102,102,115,99,114,101,101,110,95,54,95,54,0),true ]]);
         commong %= Math.max(googler.size - 1, 5);
         commonc += `${commonc.length << (Math.min(Math.abs(1), 5))}`;
         smallb.set(`${bootsplashU}`, (String.fromCharCode(86,0) == commonc ? commonc.length : parseInt(`${bootsplashU}`)));
         googler = new Map([[`${smallb.size}`, parseInt(`${bootsplashU}`)]]);
      }
          let refreshB = 3.0;
          let history2 = String.fromCharCode(99,95,49,49,95,97,103,101,0);
         commong %= Math.max(history2.length, 4);
         refreshB -= parseFloat(`${parseInt(`${refreshB}`) - parseInt(`${refreshB}`)}`);
         history2 += `${parseInt(`${refreshB}`) >> (Math.min(1, Math.abs(2)))}`;
      if ((userD + commong) == 1.94) {
          let relatedr = 5.0;
          let membershipR = String.fromCharCode(118,97,114,121,95,100,95,51,54,0);
         userD += membershipR.length;
         relatedr *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${relatedr}`)), 4))}`);
         membershipR += `${parseInt(`${relatedr}`) - parseInt(`${relatedr}`)}`;
      }
         commong %= Math.max(2, 3 - parseInt(`${userD}`));
      for (let z = 0; z < 3; z++) {
         commong &= commong ^ 2;
      }
      paginationo += `${2 / (Math.max(3, parseInt(`${backF}`)))}`;
      share2 = `${2 ^ parseInt(`${placementV}`)}`;
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

      matchw += "3";
   if (3 > share2.length) {
      share2 += `${parseInt(`${brightnesss}`) / 2}`;
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
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 28, fontWeight: "700" }}>
              VIP {vipRemainingDay.toLocaleString()}天
            </Text>
            <Text style={{ color: "#9C9C9C" }}>当前剩余天数</Text>
          </View>

          <FastImage
            source={require("@static/images/sportModuleVignette.png")}
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
                source={require("@static/images/vip/tickCountryRefresh.png")}
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
                source={require("@static/images/invite/catagoryConfigure.png")}
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
                  source={require("@static/images/invite/handlerIncident.png")}
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
                source={require("@static/images/invite/z_google.png")}
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
            if (KWConstants.isGuest(userState)) {
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
              if (KWConstants.isGuest(userState)) {
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
            if (KWConstants.isGuest(userState)) {
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
