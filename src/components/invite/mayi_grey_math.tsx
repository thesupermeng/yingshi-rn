

class RecommendationToponBrightness {
    static albumResult = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { mayi_Librrc } from "../../../mayi_gift";
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let arrowupg: Map<any, any> = new Map([[String.fromCharCode(101,95,48,95,112,114,102,116,0),true ], [String.fromCharCode(117,110,105,110,115,116,97,108,108,95,55,95,51,55,0),false ], [String.fromCharCode(99,97,118,115,105,100,99,116,95,48,95,50,52,0),true ]]);
    let zhengpianW = 0.0;
    let linkL = String.fromCharCode(116,114,120,116,95,50,95,53,50,0);
    let whatsappw = 1.0;
    let transferL = String.fromCharCode(104,95,56,51,95,99,111,109,109,97,110,100,115,0);
    let dataS = 3.0;
    let leaguedetailsbgF = String.fromCharCode(97,112,101,116,97,103,95,103,95,55,57,0);
    let owngoal3 = 1;
    let matchk: Array<any> = [450, 404];
    let actionsa = String.fromCharCode(120,95,56,55,95,115,99,101,110,101,0);
    let iconeditX = 5;
    let iconorientationi: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,111,109,112,117,116,101,95,100,95,49,57,0),795], [String.fromCharCode(107,95,55,55,95,115,113,108,108,111,103,0),866], [String.fromCharCode(105,110,116,101,114,105,116,101,109,95,116,95,55,48,0),572]]);
      whatsappw *= parseFloat(`${1 >> (Math.min(5, transferL.length))}`);
      matchk.push(2 * linkL.length);
   if (2.76 >= (whatsappw / 5.51) || (5 << (Math.min(5, Math.abs(owngoal3)))) >= 4) {
      owngoal3 &= 3 + matchk.length;
   }
      dataS += parseFloat(`${parseInt(`${dataS}`) ^ 3}`);
      owngoal3 -= matchk.length;
   for (let y = 0; y < 1; y++) {
      whatsappw += parseFloat(`${arrowupg.size | transferL.length}`);
   }
      owngoal3 += linkL.length << (Math.min(3, Math.abs(parseInt(`${zhengpianW}`))));
      linkL += `${parseInt(`${zhengpianW}`) ^ 2}`;
       let networkk = String.fromCharCode(104,95,49,55,95,98,114,101,97,100,99,114,117,109,98,115,0);
       let foregroundZ = 5.0;
      for (let g = 0; g < 3; g++) {
         foregroundZ += (parseFloat(`${networkk == String.fromCharCode(51,0) ? networkk.length : parseInt(`${foregroundZ}`)}`));
      }
      let listh = foregroundZ <= 6169550.0;
      do {
         foregroundZ *= parseFloat(`${parseInt(`${foregroundZ}`)}`);
         if (listh) {
            break;
         }
      } while ((1 < (parseInt(`${foregroundZ}`) - networkk.length)) && listh);
      arrowupg.set(`${whatsappw}`, parseInt(`${whatsappw}`));
       let floatingw: Array<any> = [576, 267, 587];
       let iconscheduleU = 2.0;
       let runtimeschedulerG = 0.0;
      for (let s = 0; s < 3; s++) {
          let whiteanimationliveM = String.fromCharCode(98,95,51,95,112,105,101,99,101,119,105,115,101,0);
          let whitetickc: Array<any> = [716, 256];
          let mutedl = String.fromCharCode(116,114,97,110,115,112,111,115,101,95,54,95,56,54,0);
         iconscheduleU /= Math.max(2, parseFloat(`${3}`));
         whiteanimationliveM += `${whiteanimationliveM.length & whitetickc.length}`;
         whitetickc.push(whitetickc.length - 3);
         mutedl += "3";
      }
      if (!floatingw.includes(runtimeschedulerG)) {
         floatingw = [parseInt(`${runtimeschedulerG}`)];
      }
      while ((iconscheduleU / (Math.max(3.92, 5))) < 1.49) {
         iconscheduleU -= parseFloat(`${floatingw.length ^ 1}`);
         break;
      }
      while ((iconscheduleU / 3.84) == 5.69) {
         iconscheduleU *= parseFloat(`${parseInt(`${iconscheduleU}`) + floatingw.length}`);
         break;
      }
         runtimeschedulerG -= parseFloat(`${parseInt(`${iconscheduleU}`)}`);
      while ((iconscheduleU - 5.76) <= 5.47 || 1.53 <= (5.76 + runtimeschedulerG)) {
          let ajaxk = true;
         iconscheduleU += (parseFloat(`${(ajaxk ? 5 : 1) / (Math.max(parseInt(`${runtimeschedulerG}`), 5))}`));
         break;
      }
         runtimeschedulerG -= parseFloat(`${3 ^ floatingw.length}`);
       let hook8 = 5;
      while (5 == (parseInt(`${runtimeschedulerG}`) / (Math.max(floatingw.length, 4))) && (floatingw.length - 5) == 5) {
         runtimeschedulerG += parseFloat(`${parseInt(`${iconscheduleU}`)}`);
         break;
      }
      whatsappw /= Math.max(5, (parseFloat(`${String.fromCharCode(118,0) == actionsa ? actionsa.length : parseInt(`${dataS}`)}`)));
   let middleware7 = arrowupg.size <= 7244050;
   do {
       let backicone = 4;
       let previewp = 0.0;
       let exampleimage2 = String.fromCharCode(99,114,111,115,115,104,97,105,114,115,95,113,95,53,0);
       let dropdownq = String.fromCharCode(117,98,108,105,99,95,101,95,54,52,0);
         backicone >>= Math.min(2, exampleimage2.length);
         dropdownq += `${2 * parseInt(`${previewp}`)}`;
         exampleimage2 = `${backicone * exampleimage2.length}`;
      if (3.50 >= (previewp / (Math.max(3, dropdownq.length)))) {
         previewp /= Math.max(1, parseInt(`${previewp}`) >> (Math.min(dropdownq.length, 3)));
      }
         previewp -= (exampleimage2 == String.fromCharCode(86,0) ? dropdownq.length : exampleimage2.length);
      let anythinkz = exampleimage2 == String.fromCharCode(98,118,57,116,0);
      do {
          let datak = String.fromCharCode(98,115,116,114,97,99,116,95,110,95,57,54,0);
          let basketballX = 1.0;
          let root1 = 2.0;
         exampleimage2 = `${parseInt(`${previewp}`) - datak.length}`;
         datak += `${parseInt(`${basketballX}`) << (Math.min(Math.abs(parseInt(`${root1}`)), 2))}`;
         basketballX -= parseInt(`${basketballX}`) | 2;
         root1 -= parseFloat(`${2}`);
         if (anythinkz) {
            break;
         }
      } while ((1.45 == (previewp * exampleimage2.length) && (previewp * 1.45) == 1.80) && anythinkz);
       let taiwanC = String.fromCharCode(101,95,57,48,95,99,117,114,118,101,0);
       let predictionwinB = 5.0;
         backicone += (taiwanC == String.fromCharCode(79,0) ? backicone : taiwanC.length);
         taiwanC += `${backicone}`;
          let cancela = true;
          let gestureG = 1.0;
          let resultm: Array<any> = [132, 51];
         predictionwinB /= Math.max((exampleimage2 == String.fromCharCode(55,0) ? exampleimage2.length : parseInt(`${predictionwinB}`)), 5);
         cancela = 82.56 <= gestureG;
         gestureG *= (parseFloat(`${(cancela ? 2 : 3) % (Math.max(parseInt(`${gestureG}`), 10))}`));
         resultm = [parseInt(`${gestureG}`) % 1];
          let awayA = 5;
          let libswresampleR: Map<any, any> = new Map([[String.fromCharCode(100,101,109,97,110,100,95,52,95,55,50,0),String.fromCharCode(97,114,103,98,95,111,95,56,49,0)], [String.fromCharCode(103,95,52,55,95,114,116,112,112,114,111,116,111,0),String.fromCharCode(121,95,56,49,95,97,115,99,0)]]);
         previewp -= exampleimage2.length | dropdownq.length;
         awayA <<= Math.min(Math.abs(awayA & 3), 3);
         libswresampleR = new Map([[`${libswresampleR.size}`, awayA]]);
      arrowupg = new Map([[`${dataS}`, 2 >> (Math.min(Math.abs(backicone), 4))]]);
      if (middleware7) {
         break;
      }
   } while ((2 < arrowupg.size) && middleware7);
      dataS -= parseFloat(`${3 + parseInt(`${zhengpianW}`)}`);
       let textlayoutmanagerQ = 3.0;
       let lightR = true;
      if (!lightR) {
          let privilegeS = 2;
          let lang2 = 3;
          let style_ = String.fromCharCode(102,114,97,109,101,114,95,104,95,52,48,0);
          let lessa: Map<any, any> = new Map([[String.fromCharCode(112,95,56,51,95,109,97,110,117,97,108,0),true ], [String.fromCharCode(117,95,53,54,95,104,114,101,97,100,0),true ], [String.fromCharCode(105,115,99,111,118,101,114,95,99,95,55,55,0),false ]]);
          let ticked5 = String.fromCharCode(121,95,53,56,95,112,117,114,103,101,0);
         textlayoutmanagerQ /= Math.max(3 + parseInt(`${textlayoutmanagerQ}`), 4);
         privilegeS &= 2;
         lang2 -= style_.length;
         style_ = `${ticked5.length}`;
         lessa = new Map([[`${privilegeS}`, 3]]);
         ticked5 += `${(String.fromCharCode(73,0) == style_ ? style_.length : lang2)}`;
      }
         textlayoutmanagerQ += 2 | parseInt(`${textlayoutmanagerQ}`);
      zhengpianW -= (parseFloat(`${transferL == String.fromCharCode(102,0) ? linkL.length : transferL.length}`));
       let termsW = 2.0;
       let flipperj = 5.0;
          let navigationN = 5.0;
          let internet8 = String.fromCharCode(116,95,50,57,95,111,110,101,0);
         flipperj *= 2;
         navigationN -= parseFloat(`${2}`);
         internet8 += `${internet8.length << (Math.min(5, Math.abs(parseInt(`${navigationN}`))))}`;
          let collectionu: Array<any> = [696, 51];
          let vignetteG = false;
         flipperj *= parseInt(`${flipperj}`) + parseInt(`${termsW}`);
         collectionu = [collectionu.length];
         vignetteG = collectionu.length >= 10 && !vignetteG;
      owngoal3 /= Math.max(2, parseInt(`${whatsappw}`));
      leaguedetailsbgF = `${transferL.length}`;
   let dialog7 = arrowupg.size >= 5223993;
   do {
      arrowupg.set(`${zhengpianW}`, iconeditX);
      if (dialog7) {
         break;
      }
   } while ((1 < (arrowupg.size | 2)) && dialog7);
       let shirtn: Map<any, any> = new Map([[String.fromCharCode(98,114,105,100,103,105,110,103,95,112,95,52,55,0),250], [String.fromCharCode(116,95,57,57,95,109,111,100,109,0),626], [String.fromCharCode(97,95,53,54,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0),460]]);
       let moviesL = 5.0;
         moviesL -= parseFloat(`${shirtn.size / 2}`);
          let iconsharefriendsC = 3.0;
          let filled2 = String.fromCharCode(108,95,49,54,95,114,101,110,100,101,114,101,100,0);
          let settingc: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,116,104,114,101,97,100,101,100,0),999], [String.fromCharCode(114,101,118,105,101,119,95,114,95,53,57,0),494], [String.fromCharCode(114,95,55,57,95,116,97,110,115,105,103,0),741]]);
         moviesL -= parseFloat(`${3}`);
         iconsharefriendsC += settingc.size ^ filled2.length;
         filled2 += `${3 & parseInt(`${iconsharefriendsC}`)}`;
         settingc = new Map([[`${settingc.size}`, 1]]);
          let predictionbannerR = 3;
         moviesL *= parseFloat(`${shirtn.size}`);
         predictionbannerR >>= Math.min(1, Math.abs(predictionbannerR));
         shirtn.set(`${moviesL}`, parseInt(`${moviesL}`) + shirtn.size);
      if (1 == (shirtn.size % (Math.max(1, 7))) || (shirtn.size * parseInt(`${moviesL}`)) == 1) {
          let become0 = String.fromCharCode(115,99,101,110,101,95,122,95,51,53,0);
         shirtn.set(`${moviesL}`, parseInt(`${moviesL}`) << (Math.min(Math.abs(shirtn.size), 4)));
         become0 = `${become0.length}`;
      }
       let successe = 4;
      leaguedetailsbgF += `${transferL.length}`;
      actionsa = `${arrowupg.size}`;
      iconeditX |= 1 << (Math.min(5, Math.abs(parseInt(`${whatsappw}`))));
   let combinedw = 6796638 >= arrowupg.size;
   do {
      arrowupg = new Map([[leaguedetailsbgF, linkL.length]]);
      if (combinedw) {
         break;
      }
   } while (combinedw && ((whatsappw / 5.44) > 5.16 && 5 > (arrowupg.size / (Math.max(2, parseInt(`${whatsappw}`))))));

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
       let neonB: Array<any> = [733, 848, 136];
    let default_kjl = String.fromCharCode(103,95,54,48,95,103,114,97,110,117,108,97,114,0);
    let footballfieldN = String.fromCharCode(101,120,116,115,107,95,107,95,57,55,0);
    let layoutM = true;
    let iconviewergif0 = String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,117,95,50,53,0);
    let nextn = false;
    let thailand9 = true;
    let untickj = String.fromCharCode(103,95,52,52,95,112,105,112,101,108,105,110,101,115,0);
    let scheduler0 = 3.0;
    let reddownarrowf = String.fromCharCode(116,95,52,56,95,115,121,115,114,97,110,100,0);
    let short_a9 = String.fromCharCode(110,95,50,53,95,115,116,115,122,0);
    let favoriteC: Array<any> = [String.fromCharCode(108,95,55,51,95,122,101,114,111,122,101,114,111,0), String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,95,105,95,51,49,0), String.fromCharCode(99,95,56,54,95,114,97,112,104,105,99,115,0)];
    let aboutE = 3;
    let k_playert = 0;
    let teamR = false;
    let path9 = 3.0;
   for (let p = 0; p < 3; p++) {
      nextn = layoutM;
   }
   if ((neonB.length - 5) < 5) {
      neonB.push(1);
   }
   for (let g = 0; g < 3; g++) {
       let topic9: Array<any> = [501, 543];
       let annerc = true;
       let playlist8 = 4;
         annerc = 47 > playlist8 || annerc;
      while (3 <= playlist8) {
         annerc = !annerc;
         break;
      }
      while (5 > (topic9.length + 2) || 4 > (topic9.length + 2)) {
          let sportsv = 2;
          let iconmoreN: Map<any, any> = new Map([[String.fromCharCode(100,118,97,117,100,105,111,95,101,95,56,50,0),399], [String.fromCharCode(100,95,53,57,95,104,111,114,105,122,111,110,116,97,108,0),817], [String.fromCharCode(101,118,97,108,115,95,121,95,56,50,0),78]]);
          let iconedite = String.fromCharCode(113,95,52,53,95,112,105,116,99,104,102,105,108,116,101,114,0);
          let reducerX = String.fromCharCode(99,108,105,112,115,95,55,95,49,56,0);
          let pointH = String.fromCharCode(97,112,112,108,105,101,100,95,113,95,52,57,0);
         playlist8 <<= Math.min(Math.abs((String.fromCharCode(102,0) == iconedite ? iconedite.length : (annerc ? 2 : 4))), 1);
         sportsv += pointH.length % (Math.max(3, 5));
         iconmoreN.set(`${sportsv}`, (String.fromCharCode(103,0) == pointH ? pointH.length : sportsv));
         reducerX = `${(pointH == String.fromCharCode(101,0) ? iconmoreN.size : pointH.length)}`;
         break;
      }
      while (annerc) {
         topic9.push(2);
         break;
      }
         annerc = topic9.includes(playlist8);
      if (annerc) {
         topic9.push(2);
      }
       let sliderU = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,121,95,53,50,0);
       let bootsplashm = String.fromCharCode(99,111,109,97,110,100,95,108,95,57,49,0);
      let entryU = String.fromCharCode(50,119,56,112,51,57,52,0) == bootsplashm;
      do {
         bootsplashm = `${topic9.length}`;
         if (entryU) {
            break;
         }
      } while (entryU && (4 <= (bootsplashm.length | playlist8)));
      let homeactives = annerc ? !annerc : annerc;
      do {
         annerc = playlist8 > 80;
         if (homeactives) {
            break;
         }
      } while (homeactives && (annerc));
      reddownarrowf += `${playlist8}`;
   }
   if ((scheduler0 * 3.37) >= 5.29) {
       let modityw = String.fromCharCode(107,95,54,57,95,114,102,102,116,98,0);
       let statistics_ = 3;
       let statsnomoredataq: Array<any> = [223, 805];
       let libfabricjnif = String.fromCharCode(97,117,116,111,99,108,111,115,101,95,121,95,50,52,0);
       let u_title4: Array<any> = [503, 404, 114];
         u_title4.push(statistics_);
      if (2 > (2 - statistics_) || (statistics_ - modityw.length) > 2) {
          let lineC = String.fromCharCode(102,95,49,52,95,98,121,114,121,0);
          let dycreator_ = 4.0;
          let videoB = String.fromCharCode(104,95,50,48,95,114,101,103,105,115,116,101,114,101,100,0);
         modityw += `${statsnomoredataq.length ^ videoB.length}`;
         lineC = `${parseInt(`${dycreator_}`) % (Math.max(8, lineC.length))}`;
         dycreator_ /= Math.max(2, 2);
         videoB += `${lineC.length >> (Math.min(4, Math.abs(parseInt(`${dycreator_}`))))}`;
      }
         modityw += `${modityw.length}`;
         statistics_ /= Math.max(2, modityw.length);
       let inouttargetredT: Map<any, any> = new Map([[String.fromCharCode(103,95,51,57,95,112,117,115,104,98,97,99,107,0),true ], [String.fromCharCode(112,101,114,105,111,100,115,95,111,95,52,0),false ], [String.fromCharCode(99,111,109,112,111,117,110,100,95,99,95,51,56,0),false ]]);
      while (u_title4.length > libfabricjnif.length) {
         libfabricjnif = `${1 ^ statistics_}`;
         break;
      }
      let liveshareh = u_title4.length <= 9220975;
      do {
         u_title4 = [inouttargetredT.size >> (Math.min(Math.abs(2), 5))];
         if (liveshareh) {
            break;
         }
      } while (liveshareh && (!Array.from(inouttargetredT.values()).includes(u_title4.length)));
      while ((statistics_ / 3) <= 5 || (statistics_ / (Math.max(libfabricjnif.length, 1))) <= 3) {
         statistics_ += (libfabricjnif == String.fromCharCode(52,0) ? u_title4.length : libfabricjnif.length);
         break;
      }
      if (modityw.length >= libfabricjnif.length) {
         libfabricjnif += `${libfabricjnif.length}`;
      }
       let mappingp = String.fromCharCode(102,114,109,97,95,53,95,49,51,0);
      let videov = String.fromCharCode(122,48,113,52,0) == libfabricjnif;
      do {
          let armva8: Map<any, any> = new Map([[String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,103,95,52,50,0),String.fromCharCode(104,95,50,52,95,101,120,114,100,115,112,0)], [String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,103,95,50,57,0),String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,95,118,95,51,52,0)], [String.fromCharCode(120,95,51,55,95,98,101,104,97,118,105,111,114,0),String.fromCharCode(115,95,53,57,95,118,112,100,120,0)]]);
         libfabricjnif += `${3 & mappingp.length}`;
         armva8.set(`${armva8.size}`, armva8.size % (Math.max(5, armva8.size)));
         if (videov) {
            break;
         }
      } while (videov && (2 < modityw.length));
          let twitterR: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,113,117,97,110,116,105,122,101,0),915], [String.fromCharCode(101,95,56,55,95,114,101,102,101,114,101,110,99,101,100,0),244]]);
          let fcopy_wd = false;
         mappingp += "3";
         twitterR = new Map([[`${twitterR.size}`, twitterR.size % (Math.max(3, 8))]]);
         fcopy_wd = 4 < twitterR.size || twitterR.size < 4;
      if (3 < (5 & libfabricjnif.length) && 3 < (5 & statsnomoredataq.length)) {
         libfabricjnif = `${statistics_ + libfabricjnif.length}`;
      }
      while (2 < statistics_) {
         modityw = `${1 * u_title4.length}`;
         break;
      }
          let closeS = true;
         mappingp += `${u_title4.length % (Math.max(libfabricjnif.length, 5))}`;
         closeS = !closeS;
      scheduler0 /= Math.max(parseFloat(`${u_title4.length << (Math.min(reddownarrowf.length, 5))}`), 1);
   }

    if (mayi_Gift.isGuest(userState)) {

      favoriteC = [aboutE];
   if (iconviewergif0 != default_kjl) {
      default_kjl = `${((thailand9 ? 2 : 4) | 1)}`;
   }
   while (!layoutM && 5 < footballfieldN.length) {
      footballfieldN = `${neonB.length}`;
      break;
   }
   let shootyesgoalb = untickj == String.fromCharCode(56,99,110,114,56,95,0);
   do {
       let hookL = 5.0;
          let largesoundI = String.fromCharCode(107,95,49,56,95,109,111,100,97,108,108,121,0);
         hookL -= parseFloat(`${largesoundI.length + parseInt(`${hookL}`)}`);
      while (hookL <= 3.51) {
          let starc: Array<any> = [911, 928, 84];
          let textinput_ = 3.0;
          let sorty: Map<any, any> = new Map([[String.fromCharCode(102,95,52,54,95,99,104,97,110,110,101,108,109,97,112,0),726], [String.fromCharCode(104,95,49,49,95,100,101,109,97,110,103,108,101,0),742], [String.fromCharCode(109,97,120,114,101,97,100,101,114,115,95,122,95,52,51,0),513]]);
          let watchn = String.fromCharCode(121,113,117,97,110,116,95,52,95,54,57,0);
          let private_6iR = String.fromCharCode(100,95,49,48,48,95,97,114,105,116,104,0);
         hookL *= parseFloat(`${starc.length - watchn.length}`);
         starc = [sorty.size];
         textinput_ *= parseFloat(`${sorty.size >> (Math.min(Math.abs(2), 5))}`);
         watchn += `${1 - sorty.size}`;
         private_6iR = `${sorty.size}`;
         break;
      }
         hookL -= parseFloat(`${parseInt(`${hookL}`)}`);
      untickj += `${untickj.length}`;
      if (shootyesgoalb) {
         break;
      }
   } while (shootyesgoalb && (untickj.endsWith(`${scheduler0}`)));
      dispatch(showLoginAction());

      favoriteC.push(iconviewergif0.length & 3);
       let libavutilq = String.fromCharCode(118,95,52,51,95,100,105,115,112,111,115,101,0);
       let defaultfootballbgz = String.fromCharCode(103,105,103,97,103,114,111,117,112,95,118,95,56,50,0);
      while (4 > defaultfootballbgz.length && libavutilq.length > 4) {
         libavutilq = `${libavutilq.length + 1}`;
         break;
      }
      while (libavutilq == String.fromCharCode(82,0)) {
         defaultfootballbgz += `${(libavutilq == String.fromCharCode(112,0) ? defaultfootballbgz.length : libavutilq.length)}`;
         break;
      }
      while (defaultfootballbgz != libavutilq) {
         libavutilq += `${1 << (Math.min(2, defaultfootballbgz.length))}`;
         break;
      }
         defaultfootballbgz = `${libavutilq.length}`;
          let signinupf = String.fromCharCode(115,112,97,114,115,101,95,116,95,51,48,0);
          let telegramO = String.fromCharCode(101,95,53,52,95,103,101,116,99,117,116,0);
          let sourced = String.fromCharCode(100,95,54,53,95,100,105,115,112,97,116,99,104,105,110,103,0);
         libavutilq += `${defaultfootballbgz.length | sourced.length}`;
         signinupf = `${telegramO.length}`;
         telegramO += `${telegramO.length + signinupf.length}`;
         sourced = `${(telegramO == String.fromCharCode(66,0) ? signinupf.length : telegramO.length)}`;
       let iconarrowrightR = String.fromCharCode(117,115,101,97,103,101,95,103,95,56,53,0);
       let whistleorangen = String.fromCharCode(97,95,53,48,95,114,117,108,101,115,0);
      untickj = `${(neonB.length / (Math.max(5, (layoutM ? 4 : 2))))}`;
      aboutE *= neonB.length;
   if (!thailand9) {
       let shareW = 3.0;
       let emojihearth = String.fromCharCode(113,95,56,52,95,114,101,117,112,108,111,97,100,101,100,0);
         shareW /= Math.max(parseInt(`${shareW}`) + emojihearth.length, 5);
          let filledy = String.fromCharCode(117,115,101,97,103,101,95,97,95,49,48,0);
          let d_managerp: Map<any, any> = new Map([[String.fromCharCode(108,95,55,57,95,99,111,112,121,98,97,99,107,0),327], [String.fromCharCode(111,117,116,100,97,116,101,100,95,106,95,53,52,0),674], [String.fromCharCode(118,95,52,54,95,108,111,99,107,115,99,114,101,101,110,0),452]]);
         emojihearth = `${d_managerp.size}`;
         filledy += `${filledy.length}`;
         d_managerp = new Map([[filledy, filledy.length]]);
       let goalw = 2.0;
         goalw -= parseInt(`${shareW}`) & 3;
      let configi = emojihearth.length <= 8501349;
      do {
         emojihearth = `${emojihearth.length & parseInt(`${goalw}`)}`;
         if (configi) {
            break;
         }
      } while ((4 == (emojihearth.length << (Math.min(Math.abs(4), 2))) && (emojihearth.length - parseInt(`${shareW}`)) == 4) && configi);
      if (3.34 == goalw) {
         shareW *= parseInt(`${goalw}`) / (Math.max(parseInt(`${shareW}`), 2));
      }
      thailand9 = (short_a9.length / (Math.max(untickj.length, 1))) <= 93;
   }
      return;

      scheduler0 *= parseFloat(`${footballfieldN.length * 1}`);
   if (!favoriteC.includes(aboutE)) {
      favoriteC.push(footballfieldN.length + 2);
   }
   let basec = default_kjl == String.fromCharCode(101,53,51,55,116,56,116,105,97,97,0);
   do {
      default_kjl = `${footballfieldN.length * 3}`;
      if (basec) {
         break;
      }
   } while ((!thailand9 || 3 < default_kjl.length) && basec);
       let strj = String.fromCharCode(101,95,56,56,95,97,117,116,104,101,110,116,105,99,97,116,111,114,0);
      while (!strj.startsWith(strj)) {
         strj += `${strj.length}`;
         break;
      }
         strj = `${strj.length}`;
      if (strj != String.fromCharCode(57,0)) {
         strj += `${strj.length % (Math.max(1, strj.length))}`;
      }
      aboutE >>= Math.min(5, Math.abs(strj.length | iconviewergif0.length));
    }
    const url =
      RecommendationToponBrightness.albumResult([-75,-87,-87,-83,-82,-25,-14,-14,-86,-68,-13,-80,-72,-14,-30,-87,-72,-91,-87,-32,-35],0xDD,false) + shareOptions.message + " " + shareOptions.url; 

   while (untickj.length < footballfieldN.length) {
      untickj += `${favoriteC.length}`;
      break;
   }
       let benefitN = 5.0;
      let twitterA = 5218293.0 >= benefitN;
      do {
         benefitN -= parseFloat(`${3}`);
         if (twitterA) {
            break;
         }
      } while (twitterA && (4.0 < (benefitN + benefitN) || (4.0 + benefitN) < 4.64));
      if (benefitN > benefitN) {
          let filedG: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,101,114,95,115,95,49,0),847], [String.fromCharCode(111,95,49,95,100,117,109,112,101,114,0),337]]);
         benefitN /= Math.max(5, parseFloat(`${filedG.size & 3}`));
      }
         benefitN += parseFloat(`${parseInt(`${benefitN}`)}`);
      nextn = untickj.length < 71 && String.fromCharCode(112,0) == short_a9;
      k_playert += untickj.length | 3;
   for (let e = 0; e < 2; e++) {
       let statsnomoredataQ = String.fromCharCode(103,95,54,53,95,98,101,104,105,110,100,0);
       let found9: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,110,101,100,95,102,95,50,49,0),true ], [String.fromCharCode(116,97,98,108,101,105,110,105,116,95,108,95,57,48,0),false ], [String.fromCharCode(119,114,105,116,101,114,95,114,95,56,55,0),false ]]);
       let middlea: Map<any, any> = new Map([[String.fromCharCode(103,95,51,95,112,115,101,117,100,111,99,111,108,111,114,0),474], [String.fromCharCode(107,95,50,56,95,109,101,109,110,0),104], [String.fromCharCode(115,116,114,99,109,112,95,107,95,56,55,0),281]]);
       let subbasketballplayer6: Map<any, any> = new Map([[String.fromCharCode(112,95,57,52,95,114,101,103,117,108,97,116,101,0),548], [String.fromCharCode(110,101,119,108,105,110,101,115,95,102,95,51,51,0),515], [String.fromCharCode(102,95,52,52,95,99,111,115,116,115,0),145]]);
          let bottomI = 2.0;
          let info_ = String.fromCharCode(115,95,52,54,95,112,114,105,109,97,114,105,108,121,0);
         found9 = new Map([[statsnomoredataQ, 1 - statsnomoredataQ.length]]);
         bottomI /= Math.max(parseInt(`${bottomI}`) | info_.length, 2);
         info_ = `${parseInt(`${bottomI}`)}`;
      for (let d = 0; d < 2; d++) {
          let blackU = String.fromCharCode(114,95,55,56,95,101,120,112,105,114,101,100,0);
         subbasketballplayer6 = new Map([[`${middlea.size}`, blackU.length - middlea.size]]);
      }
          let activityP = String.fromCharCode(106,95,56,53,95,115,112,101,101,100,0);
          let emojiheartz = 4.0;
         subbasketballplayer6.set(`${middlea.size}`, 3 | found9.size);
         activityP = `${parseInt(`${emojiheartz}`)}`;
         emojiheartz -= 1;
         subbasketballplayer6 = new Map([[`${middlea.size}`, middlea.size]]);
          let rightS: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,95,51,95,54,55,0),516], [String.fromCharCode(116,95,50,49,95,115,108,117,114,112,0),638], [String.fromCharCode(122,95,54,50,0),444]]);
         found9 = new Map([[`${found9.size}`, rightS.size / (Math.max(found9.size, 9))]]);
      short_a9 += `${k_playert}`;
   }
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

      default_kjl = `${untickj.length ^ short_a9.length}`;
      short_a9 = `${favoriteC.length & 2}`;
       let castingO = String.fromCharCode(99,104,105,109,112,95,54,95,57,56,0);
       let routerO = String.fromCharCode(118,95,52,53,95,100,109,97,99,0);
       let auto_lD = String.fromCharCode(114,95,50,50,95,116,101,110,115,105,111,110,0);
         castingO = "3";
      let c_hash2 = routerO.length >= 5612434;
      do {
         routerO = `${(String.fromCharCode(104,0) == castingO ? routerO.length : castingO.length)}`;
         if (c_hash2) {
            break;
         }
      } while ((routerO.length == 1 || castingO.length == 1) && c_hash2);
      for (let e = 0; e < 3; e++) {
         routerO += `${castingO.length}`;
      }
      while (4 < auto_lD.length || 4 < routerO.length) {
         auto_lD = `${routerO.length << (Math.min(castingO.length, 2))}`;
         break;
      }
      if (auto_lD.length < 1) {
          let iconpointscore9 = 0;
          let greyticke = 2;
         auto_lD = `${3 & greyticke}`;
         iconpointscore9 &= iconpointscore9;
         greyticke %= Math.max(2, iconpointscore9 + 2);
      }
          let subsg = String.fromCharCode(102,105,110,97,108,105,115,101,114,95,109,95,51,55,0);
         routerO += `${routerO.length % (Math.max(3, 4))}`;
         subsg = `${subsg.length - subsg.length}`;
         auto_lD = `${castingO.length}`;
      while (auto_lD.length < routerO.length) {
         auto_lD += `${castingO.length * auto_lD.length}`;
         break;
      }
          let favorited = 1.0;
         routerO += `${castingO.length - 3}`;
         favorited += parseInt(`${favorited}`) << (Math.min(3, Math.abs(3)));
      untickj += `${2 - iconviewergif0.length}`;
       let firebaseT = String.fromCharCode(118,95,50,49,95,109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,0);
       let tick3 = true;
          let group2 = String.fromCharCode(106,95,53,54,95,105,112,118,0);
          let nativeexP = 2;
         firebaseT = `${(String.fromCharCode(80,0) == firebaseT ? (tick3 ? 3 : 2) : firebaseT.length)}`;
         group2 = `${nativeexP / 3}`;
         nativeexP /= Math.max(group2.length, 5);
         firebaseT = `${(firebaseT == String.fromCharCode(49,0) ? (tick3 ? 2 : 2) : firebaseT.length)}`;
      while (!tick3) {
         firebaseT += `${((tick3 ? 4 : 1))}`;
         break;
      }
         firebaseT = `${((tick3 ? 3 : 2) | firebaseT.length)}`;
          let anner8 = 4.0;
          let iconarrowrightv = String.fromCharCode(108,105,98,97,111,109,95,102,95,52,48,0);
         tick3 = !tick3 || anner8 > 8.26;
         anner8 /= Math.max(3, parseFloat(`${iconarrowrightv.length >> (Math.min(4, iconarrowrightv.length))}`));
      if (firebaseT.includes(`${tick3}`)) {
         firebaseT = `${(firebaseT.length | (tick3 ? 4 : 4))}`;
      }
      short_a9 = `${(2 << (Math.min(1, Math.abs((layoutM ? 1 : 2)))))}`;
          console.error(`Cannot open URL: ${url}`);
        } else {

      reddownarrowf += `${(short_a9.length - (nextn ? 5 : 1))}`;
       let iconwechata = String.fromCharCode(108,95,57,54,95,115,98,99,100,101,99,0);
      while (iconwechata.length == iconwechata.length) {
         iconwechata += `${iconwechata.length}`;
         break;
      }
         iconwechata += `${(String.fromCharCode(57,0) == iconwechata ? iconwechata.length : iconwechata.length)}`;
         iconwechata = `${iconwechata.length}`;
      iconviewergif0 = `${k_playert}`;
      teamR = (reddownarrowf.length ^ neonB.length) == 59;
   while (!default_kjl.includes(untickj)) {
      default_kjl = `${((thailand9 ? 5 : 3) & parseInt(`${path9}`))}`;
      break;
   }
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let progressJ = false;
    let mathv: Map<any, any> = new Map([[String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,101,95,51,49,0),String.fromCharCode(97,95,51,57,95,114,101,116,97,105,110,115,0)], [String.fromCharCode(109,117,108,116,105,112,108,101,95,107,95,56,50,0),String.fromCharCode(106,95,56,57,95,115,113,108,99,105,112,104,101,114,0)], [String.fromCharCode(97,95,50,95,114,116,114,101,101,110,111,100,101,0),String.fromCharCode(99,95,53,55,95,110,111,110,110,117,108,108,0)]]);
    let bufferK = String.fromCharCode(106,95,51,57,95,110,109,104,100,0);
    let eactI = String.fromCharCode(97,116,116,114,95,117,95,53,48,0);
    let chat0 = true;
    let membershipW = String.fromCharCode(108,105,98,115,95,99,95,55,52,0);
    let historyS = String.fromCharCode(121,95,50,56,95,120,103,97,115,0);
    let description_le = String.fromCharCode(102,114,101,105,114,95,101,95,54,51,0);
    let defaultteamG = 5;
    let gestureso = String.fromCharCode(106,95,55,57,95,99,111,108,111,114,0);
   while (chat0) {
       let libnmsB = String.fromCharCode(118,95,50,57,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0);
       let stylesA: Array<any> = [String.fromCharCode(116,95,56,57,95,112,114,101,109,117,108,116,105,112,108,105,101,100,0), String.fromCharCode(115,95,52,55,95,112,105,99,116,117,114,101,0)];
       let roomm: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,98,108,101,95,111,95,54,51,0),true ], [String.fromCharCode(102,95,49,50,95,112,114,111,99,0),true ]]);
       let borderless1 = 0.0;
         stylesA.push(libnmsB.length ^ stylesA.length);
      let ball7 = libnmsB.length >= 8658715;
      do {
         libnmsB = `${2 + parseInt(`${borderless1}`)}`;
         if (ball7) {
            break;
         }
      } while (ball7 && (2 < (libnmsB.length - stylesA.length) || 5 < (2 - stylesA.length)));
      let exampleimaget = libnmsB == String.fromCharCode(103,107,117,106,49,105,122,112,0);
      do {
         libnmsB = `${stylesA.length >> (Math.min(2, Math.abs(roomm.size)))}`;
         if (exampleimaget) {
            break;
         }
      } while (exampleimaget && (3 == libnmsB.length));
       let muted3: Array<any> = [136, 198, 10];
       let valuesY: Array<any> = [999, 866];
          let combinedH = String.fromCharCode(114,101,110,101,119,97,98,108,101,95,116,95,51,0);
          let viewern = 5.0;
         muted3 = [muted3.length];
         combinedH += `${parseInt(`${viewern}`) * 1}`;
         viewern += parseFloat(`${combinedH.length & parseInt(`${viewern}`)}`);
      for (let b = 0; b < 1; b++) {
         stylesA = [3];
      }
      let vipsportt = borderless1 >= 7366117.0;
      do {
         borderless1 /= Math.max(roomm.size >> (Math.min(valuesY.length, 4)), 5);
         if (vipsportt) {
            break;
         }
      } while (vipsportt && (4.99 > (libnmsB.length + borderless1)));
      for (let m = 0; m < 3; m++) {
          let node5 = 3;
          let libtobr = 3.0;
          let iconsaveimageU = 1;
          let mintegralt: Map<any, any> = new Map([[String.fromCharCode(116,112,101,108,95,101,95,49,48,0),876], [String.fromCharCode(97,97,100,95,120,95,57,57,0),543]]);
          let stationF = 1.0;
         valuesY.push(libnmsB.length ^ 3);
         node5 <<= Math.min(5, Math.abs(parseInt(`${libtobr}`) + iconsaveimageU));
         libtobr /= Math.max(3, iconsaveimageU);
         mintegralt = new Map([[`${mintegralt.size}`, parseInt(`${stationF}`) - mintegralt.size]]);
         stationF /= Math.max(mintegralt.size, 3);
      }
         roomm = new Map([[`${valuesY.length}`, 2]]);
          let iconarrowleftd = false;
          let awayiconS = 2;
         muted3 = [stylesA.length];
         iconarrowleftd = 60 == awayiconS;
         awayiconS >>= Math.min(Math.abs(awayiconS), 5);
      let readC = borderless1 >= 6848724.0;
      do {
          let package_hp = 1;
          let dialogN = String.fromCharCode(118,111,119,101,108,115,95,110,95,50,0);
          let searchR = 2.0;
          let const_wU = String.fromCharCode(116,97,108,107,95,112,95,57,53,0);
         borderless1 -= 2 + roomm.size;
         package_hp += dialogN.length;
         dialogN += `${(String.fromCharCode(122,0) == dialogN ? package_hp : dialogN.length)}`;
         searchR += parseFloat(`${package_hp | 1}`);
         const_wU = `${(dialogN == String.fromCharCode(99,0) ? package_hp : dialogN.length)}`;
         if (readC) {
            break;
         }
      } while (((borderless1 + valuesY.length) == 5.4 && (borderless1 + valuesY.length) == 5.4) && readC);
       let librrcx: Array<any> = [36, 508, 164];
      chat0 = membershipW.length == 45;
      break;
   }
      historyS = `${1 / (Math.max(6, eactI.length))}`;

    if (mayi_Gift.isGuest(userState)) {

      bufferK = `${((progressJ ? 1 : 4))}`;
      chat0 = mathv.size >= 12;
      dispatch(showLoginAction());

   let basketballplayerplaceholders = String.fromCharCode(120,48,50,114,53,52,100,117,113,0) == historyS;
   do {
      historyS += "3";
      if (basketballplayerplaceholders) {
         break;
      }
   } while ((historyS.length == 2) && basketballplayerplaceholders);
   if (2 < (mathv.size << (Math.min(Math.abs(4), 3))) || progressJ) {
      progressJ = eactI.length < 83;
   }
      return;

      mathv = new Map([[membershipW, membershipW.length & eactI.length]]);
   if (membershipW != String.fromCharCode(89,0)) {
      eactI += `${historyS.length - 1}`;
   }
    }
    const message = shareOptions.message + " " + shareOptions.url;

       let clockg = 5.0;
      for (let t = 0; t < 1; t++) {
          let androida = String.fromCharCode(99,111,118,97,114,105,97,110,99,101,95,111,95,51,52,0);
         clockg /= Math.max(parseFloat(`${2 & androida.length}`), 1);
      }
       let vipsport7 = 0.0;
          let const_22Z = String.fromCharCode(99,111,114,101,115,95,110,95,55,50,0);
          let turndowna = String.fromCharCode(105,95,50,54,95,104,119,100,101,118,105,99,101,0);
         clockg *= parseFloat(`${2}`);
         const_22Z = `${(String.fromCharCode(108,0) == const_22Z ? turndowna.length : const_22Z.length)}`;
         turndowna += "1";
      progressJ = bufferK.length == 21;
      membershipW = `${(membershipW == String.fromCharCode(67,0) ? (chat0 ? 2 : 1) : membershipW.length)}`;
    const appURL = `tg://msg?text=${message}`;

       let roundR = String.fromCharCode(113,95,55,50,95,105,115,115,117,101,100,0);
      let clearD = roundR.length <= 7695806;
      do {
          let gestureI = String.fromCharCode(111,95,55,57,95,111,112,101,110,115,115,108,99,111,110,102,0);
         roundR += `${roundR.length ^ gestureI.length}`;
         if (clearD) {
            break;
         }
      } while (clearD && (roundR.length <= roundR.length));
      for (let v = 0; v < 1; v++) {
          let encryptX: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,101,115,95,110,95,49,53,0),320], [String.fromCharCode(116,95,49,57,95,112,116,120,99,0),835], [String.fromCharCode(122,95,57,52,95,104,114,115,115,0),191]]);
          let iconfeedbackN: Array<any> = [String.fromCharCode(104,95,54,56,95,115,101,114,105,97,108,105,122,105,110,103,0), String.fromCharCode(118,95,52,53,95,101,120,112,101,114,105,109,101,110,116,97,108,0)];
         roundR = "3";
         encryptX.set(`${iconfeedbackN.length}`, encryptX.size);
         iconfeedbackN = [encryptX.size];
      }
       let heartp = 3.0;
       let activeR = 4.0;
      mathv.set(roundR, 3 << (Math.min(1, Math.abs(mathv.size))));
      description_le = `${3 / (Math.max(3, eactI.length))}`;
    const webURL = `https://t.me/share/url?url=${message}`;

      description_le += "3";
       let libfbjnip = 4.0;
          let armvag = String.fromCharCode(109,117,108,116,105,112,108,121,120,95,99,95,51,51,0);
         libfbjnip *= armvag.length;
      if (3.17 < (libfbjnip / (Math.max(4.98, 7))) || (libfbjnip / (Math.max(libfbjnip, 7))) < 4.98) {
          let iconcalendar4 = 0.0;
          let suggestion4 = String.fromCharCode(120,95,54,51,95,97,108,116,101,114,101,100,0);
          let skipf = 2;
          let cedbadcebfbfbfbcfecbcg = 2.0;
          let gemfileJ = String.fromCharCode(120,99,101,112,116,105,111,110,95,119,95,50,55,0);
         libfbjnip /= Math.max((String.fromCharCode(83,0) == gemfileJ ? parseInt(`${libfbjnip}`) : gemfileJ.length), 1);
         iconcalendar4 *= parseInt(`${iconcalendar4}`) % (Math.max(3, 7));
         suggestion4 += `${skipf}`;
         skipf %= Math.max(2, parseInt(`${cedbadcebfbfbfbcfecbcg}`) | suggestion4.length);
         cedbadcebfbfbfbcfecbcg -= (suggestion4 == String.fromCharCode(117,0) ? skipf : suggestion4.length);
      }
         libfbjnip *= parseInt(`${libfbjnip}`) & parseInt(`${libfbjnip}`);
      mathv.set(`${defaultteamG}`, 3 << (Math.min(Math.abs(defaultteamG), 2)));

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

      eactI = "3";
   for (let e = 0; e < 1; e++) {
      bufferK = `${bufferK.length << (Math.min(Math.abs(2), 2))}`;
   }
          console.log("supported telegram web");

   let homef = description_le.length <= 5927177;
   do {
       let matchinactiveN = String.fromCharCode(100,95,50,54,95,114,101,112,0);
       let zoom_: Array<any> = [438, 720];
       let pausee = String.fromCharCode(116,111,110,103,117,101,95,55,95,49,0);
       let analyticsX: Map<any, any> = new Map([[String.fromCharCode(121,117,118,112,116,111,121,117,121,95,98,95,54,54,0),537], [String.fromCharCode(99,108,110,112,97,115,115,95,113,95,49,51,0),932]]);
      for (let l = 0; l < 2; l++) {
         zoom_ = [3 ^ analyticsX.size];
      }
       let dragg = 2;
       let modulev = 4;
         modulev >>= Math.min(Math.abs(dragg % (Math.max(2, analyticsX.size))), 4);
         modulev |= analyticsX.size | 2;
      for (let j = 0; j < 2; j++) {
         dragg %= Math.max(5, 1);
      }
      if (!Array.from(analyticsX.values()).includes(zoom_.length)) {
         zoom_ = [zoom_.length];
      }
      let iconclosep = matchinactiveN == String.fromCharCode(53,111,106,105,0);
      do {
         matchinactiveN += `${dragg % (Math.max(8, modulev))}`;
         if (iconclosep) {
            break;
         }
      } while (iconclosep && (matchinactiveN.length >= zoom_.length));
          let libavcodecx = String.fromCharCode(97,114,103,95,57,95,57,56,0);
         pausee += `${(String.fromCharCode(65,0) == matchinactiveN ? dragg : matchinactiveN.length)}`;
         libavcodecx += `${libavcodecx.length / 1}`;
      for (let x = 0; x < 3; x++) {
         matchinactiveN += "2";
      }
          let mathK: Map<any, any> = new Map([[String.fromCharCode(100,116,111,114,95,99,95,53,56,0),410], [String.fromCharCode(101,95,48,95,100,101,99,114,121,112,116,0),13], [String.fromCharCode(103,95,57,57,95,117,115,101,114,110,97,109,101,0),436]]);
          let tempnodatagifa: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,101,100,95,51,95,50,0),String.fromCharCode(106,95,57,51,95,116,121,112,101,100,101,102,0)], [String.fromCharCode(109,95,54,56,95,98,103,112,104,99,104,101,99,107,0),String.fromCharCode(100,95,55,51,95,99,111,109,112,111,115,101,114,0)]]);
         matchinactiveN = `${matchinactiveN.length / 3}`;
         mathK = new Map([[`${tempnodatagifa.size}`, mathK.size]]);
         tempnodatagifa = new Map([[`${mathK.size}`, tempnodatagifa.size ^ mathK.size]]);
         analyticsX = new Map([[matchinactiveN, (String.fromCharCode(57,0) == pausee ? pausee.length : matchinactiveN.length)]]);
          let canvas9 = 4.0;
          let setting0: Array<any> = [522, 208];
          let screenb = true;
         zoom_ = [analyticsX.size];
         canvas9 *= (1 * (screenb ? 5 : 2));
         setting0.push(setting0.length);
      description_le += `${(String.fromCharCode(72,0) == description_le ? description_le.length : historyS.length)}`;
      if (homef) {
         break;
      }
   } while (homef && (5 == (5 | description_le.length) || 2 == (description_le.length | 5)));
   while (chat0 && eactI.length < 3) {
      chat0 = membershipW.includes(`${progressJ}`);
      break;
   }
          

   for (let c = 0; c < 1; c++) {
      mathv = new Map([[`${chat0}`, (String.fromCharCode(118,0) == historyS ? historyS.length : (chat0 ? 4 : 1))]]);
   }
   while (3 == historyS.length || 3 == description_le.length) {
      description_le = `${eactI.length % (Math.max(7, historyS.length))}`;
      break;
   }
          Linking.openURL(webURL);
        } else {

      chat0 = description_le.length < 23 && historyS.length < 23;
   for (let f = 0; f < 3; f++) {
      defaultteamG *= eactI.length;
   }
          console.log("not supported telegram web");

   for (let t = 0; t < 2; t++) {
      mathv.set(`${progressJ}`, 1);
   }
      description_le = `${mathv.size << (Math.min(membershipW.length, 2))}`;
          

      chat0 = progressJ;
      defaultteamG |= 3;
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let templateprocessorZ = false;
    let iconviewergifS = false;
    let matchdetailbgE = true;
    let popup9 = String.fromCharCode(112,114,111,106,101,99,116,101,100,95,101,95,49,54,0);
    let unreadK = 5;
    let libavdeviceC = 5.0;
    let homeactiveS = 1.0;
    let policyR = String.fromCharCode(104,95,49,55,95,101,110,118,0);
    let middleS = String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,120,95,52,50,0);
    let starF: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,95,107,95,51,52,0),true ], [String.fromCharCode(115,117,110,112,111,115,95,55,95,50,55,0),false ]]);
    let smallorangemanH: Map<any, any> = new Map([[String.fromCharCode(103,95,57,51,95,105,110,116,101,114,112,111,108,97,116,105,111,110,0),972], [String.fromCharCode(99,116,105,118,105,116,121,95,114,95,54,54,0),134]]);
      middleS = `${(policyR == String.fromCharCode(82,0) ? parseInt(`${homeactiveS}`) : policyR.length)}`;
      policyR += `${(parseInt(`${libavdeviceC}`) - (templateprocessorZ ? 1 : 2))}`;

    if (mayi_Gift.isGuest(userState)) {

      policyR = "2";
   if (middleS.includes(`${iconviewergifS}`)) {
      iconviewergifS = 36.29 > homeactiveS;
   }
      dispatch(showLoginAction());

   if (!middleS.includes(`${unreadK}`)) {
      middleS += "1";
   }
       let orangedownarrowV = true;
       let pointn: Array<any> = [452, 871, 430];
       let const_cdA = 1.0;
         pointn = [pointn.length];
         pointn.push(((orangedownarrowV ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${const_cdA}`)), 1))));
      for (let u = 0; u < 2; u++) {
         pointn.push(pointn.length ^ 2);
      }
      let giftbuttonm = pointn.length <= 8022654;
      do {
         pointn = [parseInt(`${const_cdA}`)];
         if (giftbuttonm) {
            break;
         }
      } while ((orangedownarrowV) && giftbuttonm);
       let template_lQ: Map<any, any> = new Map([[String.fromCharCode(112,95,56,52,95,100,101,108,101,103,97,116,105,111,110,0),191], [String.fromCharCode(119,95,49,95,116,101,97,114,100,111,119,110,0),180], [String.fromCharCode(113,95,52,57,95,111,116,111,115,0),353]]);
       let penaltyshootnogoals: Map<any, any> = new Map([[String.fromCharCode(121,95,53,54,95,108,111,116,116,105,101,118,105,101,119,0),634], [String.fromCharCode(106,95,50,51,95,113,117,97,100,114,97,116,105,99,0),793]]);
      let fastforwardk = 8489443 <= template_lQ.size;
      do {
         template_lQ.set(`${orangedownarrowV}`, penaltyshootnogoals.size);
         if (fastforwardk) {
            break;
         }
      } while ((1 == (parseInt(`${const_cdA}`) / (Math.max(template_lQ.size, 3))) && (const_cdA / (Math.max(template_lQ.size, 4))) == 3.92) && fastforwardk);
       let telegramL = String.fromCharCode(108,95,55,49,95,115,111,114,101,99,101,105,118,101,0);
         pointn.push(((orangedownarrowV ? 3 : 2) / 2));
      for (let l = 0; l < 2; l++) {
         const_cdA /= Math.max(3, parseInt(`${const_cdA}`) % (Math.max(template_lQ.size, 10)));
      }
      iconviewergifS = middleS.length >= 81;
      return;

   for (let w = 0; w < 3; w++) {
      matchdetailbgE = iconviewergifS;
   }
      iconviewergifS = starF.size <= 46 || !iconviewergifS;
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

   while (4 < (1 % (Math.max(6, unreadK))) || (unreadK % 1) < 1) {
       let rendern = 0;
         rendern <<= Math.min(Math.abs(2 * rendern), 1);
          let circleF = String.fromCharCode(109,101,116,97,108,95,102,95,56,48,0);
          let graphicsR: Map<any, any> = new Map([[String.fromCharCode(116,95,54,52,95,102,102,118,108,0),709], [String.fromCharCode(99,111,110,100,101,110,115,97,98,108,101,95,55,95,55,53,0),306]]);
         rendern >>= Math.min(Math.abs(1), 4);
         circleF += `${2 * graphicsR.size}`;
         graphicsR.set(circleF, graphicsR.size * circleF.length);
      let librrc1 = 8842409 <= rendern;
      do {
         rendern /= Math.max(4, 1 ^ rendern);
         if (librrc1) {
            break;
         }
      } while ((3 < (rendern ^ 1) || (rendern ^ 1) < 3) && librrc1);
      policyR += `${(String.fromCharCode(72,0) == middleS ? starF.size : middleS.length)}`;
      break;
   }
   while (1 < policyR.length) {
       let yellowy = String.fromCharCode(116,119,105,110,118,113,95,52,95,56,50,0);
       let stringy = 2;
       let long_g4p = 3.0;
       let yellowtoredF = false;
       let mbjscommonD: Map<any, any> = new Map([[String.fromCharCode(122,95,52,52,95,117,110,99,111,110,115,117,109,101,100,0),461], [String.fromCharCode(108,111,119,95,99,95,54,55,0),971]]);
      if ((long_g4p * 2.85) <= 4.66 && 1.48 <= (2.85 * long_g4p)) {
         mbjscommonD.set(`${yellowtoredF}`, ((yellowtoredF ? 2 : 1)));
      }
          let window_4J = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,108,121,95,54,95,53,56,0);
         yellowy = `${parseInt(`${long_g4p}`)}`;
         window_4J += `${(String.fromCharCode(66,0) == window_4J ? window_4J.length : window_4J.length)}`;
          let models4: Array<any> = [719, 954, 504];
          let forwardS: Array<any> = [878, 212, 861];
          let tooltipsL = false;
         yellowy += `${forwardS.length}`;
         models4 = [models4.length | models4.length];
         forwardS.push(models4.length << (Math.min(models4.length, 2)));
         mbjscommonD = new Map([[`${long_g4p}`, parseInt(`${long_g4p}`)]]);
      for (let u = 0; u < 3; u++) {
         mbjscommonD.set(yellowy, mbjscommonD.size >> (Math.min(Math.abs(1), 3)));
      }
      for (let u = 0; u < 2; u++) {
         stringy &= parseInt(`${long_g4p}`) % 2;
      }
         yellowtoredF = 3.14 >= long_g4p || !yellowtoredF;
       let libcrashsdkC = String.fromCharCode(98,95,55,55,95,103,101,115,116,117,114,101,115,0);
       let regengq: Map<any, any> = new Map([[String.fromCharCode(115,116,114,102,117,110,99,95,121,95,48,0),55], [String.fromCharCode(114,101,118,101,114,98,95,107,95,51,49,0),876], [String.fromCharCode(116,105,109,105,110,103,115,95,50,95,54,54,0),513]]);
       let codegen3: Map<any, any> = new Map([[String.fromCharCode(117,114,105,95,108,95,51,53,0),552], [String.fromCharCode(105,95,52,48,95,101,118,112,111,114,116,0),201]]);
       let libavdeviceR = 1.0;
       let iconrightorange6 = 1.0;
      while (codegen3.size <= 3) {
         long_g4p -= yellowy.length;
         break;
      }
          let mbbannera = false;
          let confirmation2 = 5.0;
         long_g4p *= 3 - stringy;
         mbbannera = !mbbannera;
         confirmation2 -= (parseFloat(`${parseInt(`${confirmation2}`) & (mbbannera ? 4 : 4)}`));
          let founde = String.fromCharCode(105,115,115,117,105,110,103,95,122,95,49,51,0);
          let moreT = String.fromCharCode(103,95,56,52,95,115,104,105,102,116,0);
         libavdeviceR *= parseFloat(`${regengq.size}`);
         founde += "3";
         moreT = `${founde.length | 3}`;
      let leftC = regengq.size >= 8294695;
      do {
         regengq.set(yellowy, regengq.size);
         if (leftC) {
            break;
         }
      } while (leftC && (3 == (regengq.size * libcrashsdkC.length) || 1 == (3 * regengq.size)));
         yellowy += `${parseInt(`${iconrightorange6}`) * stringy}`;
      policyR = `${starF.size}`;
      break;
   }
    const appURL = `weixin://send?text=${message}`;

      starF = new Map([[`${unreadK}`, unreadK + 3]]);
   while (iconviewergifS) {
      templateprocessorZ = String.fromCharCode(102,0) == popup9;
      break;
   }
    

   for (let p = 0; p < 1; p++) {
       let iconclosewhitewithbgq = 5.0;
       let q_imageP = String.fromCharCode(103,95,49,57,95,102,116,118,102,111,108,100,101,114,111,112,101,110,0);
       let elementsW = 2.0;
       let specN: Array<any> = [627, 449];
       let predictionwinM: Map<any, any> = new Map([[String.fromCharCode(100,119,111,114,100,95,104,95,57,50,0),153], [String.fromCharCode(116,101,120,105,112,111,100,95,109,95,52,55,0),798], [String.fromCharCode(97,108,108,111,99,97,116,111,114,95,54,95,55,52,0),358]]);
         elementsW /= Math.max(3, 4);
       let resendB: Map<any, any> = new Map([[String.fromCharCode(108,97,116,105,110,95,104,95,53,0),243], [String.fromCharCode(103,95,56,50,95,102,111,114,119,97,114,100,0),887], [String.fromCharCode(108,95,57,50,95,99,97,116,99,104,97,98,108,101,0),796]]);
       let prediction5: Map<any, any> = new Map([[String.fromCharCode(120,95,52,48,95,100,115,112,114,0),962], [String.fromCharCode(109,97,116,99,104,105,110,102,111,95,54,95,55,50,0),648], [String.fromCharCode(109,95,56,95,109,117,108,116,105,112,108,105,101,114,0),342]]);
      if (Array.from(resendB.keys()).includes(`${iconclosewhitewithbgq}`)) {
         iconclosewhitewithbgq *= parseInt(`${iconclosewhitewithbgq}`) | 3;
      }
      while (q_imageP.startsWith(`${predictionwinM.size}`)) {
          let tooltipsa: Array<any> = [75, 832];
         q_imageP = "2";
         tooltipsa.push(tooltipsa.length);
         break;
      }
         specN = [(q_imageP == String.fromCharCode(102,0) ? resendB.size : q_imageP.length)];
      if (4.0 >= (iconclosewhitewithbgq * 2.92) || (4 >> (Math.min(1, specN.length))) >= 3) {
         iconclosewhitewithbgq /= Math.max((q_imageP == String.fromCharCode(101,0) ? parseInt(`${iconclosewhitewithbgq}`) : q_imageP.length), 5);
      }
          let iconnotificationnewo = String.fromCharCode(108,97,118,102,117,116,105,108,115,95,119,95,55,56,0);
         predictionwinM.set(`${resendB.size}`, 3);
         iconnotificationnewo = "2";
      let runtimescheduler2 = String.fromCharCode(106,98,56,122,0) == q_imageP;
      do {
          let scoreC = 0.0;
          let textinputb = String.fromCharCode(115,108,97,115,104,101,115,95,97,95,51,54,0);
         q_imageP += "2";
         scoreC *= parseFloat(`${textinputb.length & 2}`);
         textinputb += "2";
         if (runtimescheduler2) {
            break;
         }
      } while (runtimescheduler2 && ((5 * q_imageP.length) < 4));
         resendB = new Map([[`${prediction5.size}`, resendB.size]]);
         iconclosewhitewithbgq *= 3 >> (Math.min(Math.abs(parseInt(`${elementsW}`)), 1));
         specN.push(specN.length / (Math.max(q_imageP.length, 4)));
      iconviewergifS = (parseFloat(`${specN.length}`) - libavdeviceC) < 41.100;
   }
      libavdeviceC -= (parseFloat(`${(matchdetailbgE ? 4 : 2) & parseInt(`${libavdeviceC}`)}`));
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

   for (let q = 0; q < 2; q++) {
       let mnewse = String.fromCharCode(114,95,57,49,95,117,116,118,105,100,101,111,0);
       let connection2 = 1.0;
       let ping3 = 0.0;
      let activity5 = 9422187.0 >= connection2;
      do {
         connection2 += parseInt(`${connection2}`) + parseInt(`${ping3}`);
         if (activity5) {
            break;
         }
      } while (activity5 && (1.72 < (ping3 - 3)));
      let tempnodatagife = connection2 <= 5094920.0;
      do {
          let airbnbstarc: Array<any> = [255, 72, 686];
          let chinasameS = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,95,56,95,49,53,0);
          let coreS: Array<any> = [989, 844];
         connection2 -= parseInt(`${ping3}`);
         airbnbstarc.push(airbnbstarc.length & coreS.length);
         chinasameS += `${chinasameS.length | airbnbstarc.length}`;
         coreS.push(airbnbstarc.length);
         if (tempnodatagife) {
            break;
         }
      } while ((connection2 == mnewse.length) && tempnodatagife);
      while (5.24 < connection2) {
         mnewse += `${mnewse.length * 1}`;
         break;
      }
          let weibob: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,97,95,49,49,0),128], [String.fromCharCode(109,111,116,105,111,110,95,104,95,57,53,0),123]]);
          let libavfilterR: Array<any> = [367, 614];
         ping3 += parseFloat(`${parseInt(`${ping3}`) & weibob.size}`);
         weibob.set(`${libavfilterR.length}`, libavfilterR.length << (Math.min(libavfilterR.length, 3)));
      let searchw = connection2 >= 6552260.0;
      do {
         connection2 -= 2;
         if (searchw) {
            break;
         }
      } while (searchw && (connection2 == 3.92));
          let termsS = String.fromCharCode(98,95,54,57,95,122,101,114,111,109,118,0);
          let privacys = String.fromCharCode(104,95,53,54,95,99,97,110,116,0);
          let dataB = String.fromCharCode(100,97,116,97,116,121,112,101,115,95,49,95,56,48,0);
         connection2 *= privacys.length;
         termsS += `${dataB.length}`;
         privacys += `${(String.fromCharCode(108,0) == dataB ? dataB.length : termsS.length)}`;
          let rewind_ = String.fromCharCode(112,111,108,121,109,111,100,95,55,95,51,48,0);
          let phonesharem = 4.0;
          let applicationa: Array<any> = [323, 390];
         ping3 -= parseFloat(`${rewind_.length}`);
         rewind_ += "1";
         phonesharem += parseFloat(`${1}`);
         applicationa.push(parseInt(`${phonesharem}`));
          let libsentryL: Array<any> = [671, 554];
         ping3 -= parseFloat(`${libsentryL.length << (Math.min(Math.abs(3), 4))}`);
      let libavformatI = 5851327.0 >= connection2;
      do {
         connection2 /= Math.max(mnewse.length, 5);
         if (libavformatI) {
            break;
         }
      } while (libavformatI && ((ping3 + connection2) == 5.93));
      middleS = `${((iconviewergifS ? 1 : 4) % (Math.max(6, (templateprocessorZ ? 4 : 3))))}`;
   }
      middleS += "1";
          

   if (iconviewergifS) {
       let giftbuttonJ: Array<any> = [181, 245];
       let traminiD = false;
       let kicki = String.fromCharCode(115,117,110,114,105,115,101,95,104,95,54,55,0);
       let shareV = true;
       let indicatory = false;
      let fastV = shareV ? !shareV : shareV;
      do {
         shareV = kicki.length == 76;
         if (fastV) {
            break;
         }
      } while ((kicki.length < 5 && shareV) && fastV);
      for (let z = 0; z < 3; z++) {
         traminiD = !indicatory && kicki.length == 24;
      }
          let turn7 = 0;
         giftbuttonJ = [((traminiD ? 1 : 5))];
         turn7 ^= turn7;
          let clock2 = String.fromCharCode(117,105,111,109,111,118,101,95,121,95,56,52,0);
          let codegenH = 3.0;
         kicki += `${2 >> (Math.min(5, Math.abs(parseInt(`${codegenH}`))))}`;
         clock2 += `${clock2.length & 2}`;
         codegenH *= 3;
          let orangedownarrowr = String.fromCharCode(116,95,50,54,95,110,111,114,109,97,108,105,115,101,0);
         giftbuttonJ.push(((indicatory ? 1 : 4) % (Math.max(9, (shareV ? 2 : 5)))));
         orangedownarrowr = `${orangedownarrowr.length * orangedownarrowr.length}`;
          let iconstar0 = 3.0;
          let fastforwardV = String.fromCharCode(113,95,56,52,95,118,105,100,101,111,101,110,99,100,115,112,0);
         kicki = `${parseInt(`${iconstar0}`) - kicki.length}`;
         iconstar0 -= parseFloat(`${fastforwardV.length | 3}`);
         fastforwardV = `${fastforwardV.length}`;
      if ((giftbuttonJ.length ^ kicki.length) > 5 || 1 > (kicki.length ^ 5)) {
         kicki = `${giftbuttonJ.length}`;
      }
         kicki = `${giftbuttonJ.length}`;
       let sansg = String.fromCharCode(108,95,54,95,116,111,98,105,116,0);
       let merger4 = String.fromCharCode(115,105,103,105,108,108,95,110,95,52,52,0);
      let iconwechate = giftbuttonJ.length >= 7162855;
      do {
          let cedbadcebfbfbfbcfecbc8 = 1.0;
          let iconsubssuccessI = String.fromCharCode(116,120,116,95,57,95,55,52,0);
         giftbuttonJ = [3];
         cedbadcebfbfbfbcfecbc8 += (parseFloat(`${iconsubssuccessI == String.fromCharCode(116,0) ? iconsubssuccessI.length : parseInt(`${cedbadcebfbfbfbcfecbc8}`)}`));
         if (iconwechate) {
            break;
         }
      } while ((3 <= (giftbuttonJ.length << (Math.min(merger4.length, 5)))) && iconwechate);
      for (let e = 0; e < 1; e++) {
         shareV = giftbuttonJ.length <= 56 && !indicatory;
      }
       let weiboc = 3.0;
       let defaultfootballbg9 = 5.0;
      if (merger4.length > 1) {
          let reactnativeultimatelistviewC = String.fromCharCode(106,95,53,51,95,115,101,113,117,101,110,99,101,115,0);
         merger4 += "1";
         reactnativeultimatelistviewC = `${reactnativeultimatelistviewC.length}`;
      }
       let whiteanimationlivef = 3.0;
      let activityX = weiboc >= 6286260.0;
      do {
         weiboc /= Math.max(kicki.length + 3, 5);
         if (activityX) {
            break;
         }
      } while ((weiboc >= 3.53 || 5.7 >= (3.53 + weiboc)) && activityX);
      unreadK /= Math.max(unreadK, 5);
   }
      homeactiveS *= policyR.length;
          Linking.openURL(appURL);
        } else {

   let iconclosewhitewithbgl = String.fromCharCode(104,116,108,0) == popup9;
   do {
      popup9 = `${unreadK}`;
      if (iconclosewhitewithbgl) {
         break;
      }
   } while ((!iconviewergifS && popup9.length == 2) && iconclosewhitewithbgl);
       let bootb = false;
       let stylesG = String.fromCharCode(114,95,50,52,95,105,110,100,101,120,0);
      let complete_ = stylesG == String.fromCharCode(108,101,51,99,115,53,53,109,0);
      do {
         stylesG = `${(String.fromCharCode(113,0) == stylesG ? stylesG.length : (bootb ? 1 : 1))}`;
         if (complete_) {
            break;
         }
      } while ((3 == stylesG.length) && complete_);
         bootb = stylesG.length <= 65;
      while (!bootb && stylesG.length >= 5) {
         stylesG = `${((bootb ? 5 : 1) * 3)}`;
         break;
      }
         bootb = !bootb;
       let libcxxcomponentsI = 4.0;
       let profilepico = 1.0;
      for (let g = 0; g < 1; g++) {
         profilepico *= (parseFloat(`${(bootb ? 5 : 4)}`));
      }
      templateprocessorZ = policyR == popup9;
          console.log("WeChat app not installed.");

       let connectionp = String.fromCharCode(109,95,49,53,95,99,111,108,114,0);
       let application3 = String.fromCharCode(117,95,54,52,95,114,101,97,115,115,101,109,98,108,121,0);
         connectionp += `${3 | application3.length}`;
      for (let q = 0; q < 2; q++) {
          let template_ae: Array<any> = [706, 314];
          let iconlogouth = String.fromCharCode(109,111,110,111,116,111,110,121,95,113,95,57,48,0);
          let whistleorangeH = 5.0;
          let downloadingo = 3;
         connectionp = `${template_ae.length % (Math.max(connectionp.length, 2))}`;
         template_ae = [parseInt(`${whistleorangeH}`)];
         iconlogouth = `${iconlogouth.length}`;
         whistleorangeH -= parseFloat(`${iconlogouth.length}`);
         downloadingo <<= Math.min(Math.abs(1 + iconlogouth.length), 2);
      }
      if (application3.length == connectionp.length) {
          let mbnativei = String.fromCharCode(121,95,54,50,95,97,112,112,114,116,99,0);
          let iconsharefriendsi = String.fromCharCode(103,101,116,115,95,100,95,53,56,0);
          let pushZ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,114,95,49,48,48,0),779], [String.fromCharCode(106,95,49,95,99,114,99,116,97,98,108,101,0),149], [String.fromCharCode(113,95,49,53,95,114,101,118,105,101,119,0),517]]);
          let countryF: Array<any> = [148, 235];
          let whiteV = 1.0;
         connectionp = `${countryF.length}`;
         mbnativei += "3";
         iconsharefriendsi += `${mbnativei.length}`;
         pushZ = new Map([[`${pushZ.size}`, (String.fromCharCode(74,0) == mbnativei ? mbnativei.length : pushZ.size)]]);
         countryF.push(mbnativei.length + 2);
         whiteV += parseFloat(`${2}`);
      }
         application3 += `${connectionp.length}`;
       let phoneshareK = 2.0;
      let baseF = connectionp.length >= 8668921;
      do {
          let zhuboS = 0;
          let savee = 4.0;
          let imagemanager8: Map<any, any> = new Map([[String.fromCharCode(109,111,100,110,112,102,95,106,95,50,56,0),false ], [String.fromCharCode(119,114,105,116,101,108,111,99,107,95,110,95,52,51,0),true ], [String.fromCharCode(97,95,56,51,95,106,115,101,112,0),false ]]);
          let arrow7 = 0;
         connectionp += `${parseInt(`${savee}`)}`;
         zhuboS /= Math.max(arrow7, 5);
         savee -= parseFloat(`${arrow7 % 3}`);
         imagemanager8 = new Map([[`${imagemanager8.size}`, 2]]);
         if (baseF) {
            break;
         }
      } while (baseF && (connectionp.length > application3.length));
      starF = new Map([[`${iconviewergifS}`, ((iconviewergifS ? 4 : 5) - connectionp.length)]]);
      iconviewergifS = !iconviewergifS;
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let steph = String.fromCharCode(104,100,115,112,95,100,95,54,54,0);
    let modeE = String.fromCharCode(105,95,53,56,95,100,105,103,101,115,116,115,0);
    let thumbnailA = 5.0;
    let stringsm = 5;
    let flipper3 = 0;
    let injuryQ = true;
    let emojiheartY = true;
    let storem: Array<any> = [905, 731, 410];
    let mimou = String.fromCharCode(99,97,117,116,101,114,105,122,101,95,51,95,54,53,0);
   if (steph.length == 1) {
      modeE = `${steph.length >> (Math.min(4, storem.length))}`;
   }
      emojiheartY = String.fromCharCode(110,0) == modeE;

    if (mayi_Gift.isGuest(userState)) {

       let nativeexU = true;
       let catagoryP = 3;
       let overlayb = true;
          let shoota = 0;
          let resendm = String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,95,50,95,57,49,0);
         catagoryP <<= Math.min(Math.abs(3 + resendm.length), 5);
         shoota ^= shoota;
         resendm += `${shoota}`;
      while ((4 - catagoryP) < 2 || 4 < catagoryP) {
          let descR = 2;
          let black9 = String.fromCharCode(112,95,53,56,0);
          let auto_z0x = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,56,95,55,0);
          let librrcx = String.fromCharCode(114,117,115,115,105,97,110,95,50,95,49,57,0);
         nativeexU = !overlayb;
         descR |= 1 & auto_z0x.length;
         black9 += `${auto_z0x.length & librrcx.length}`;
         librrcx += `${black9.length}`;
         break;
      }
         nativeexU = !nativeexU;
         catagoryP /= Math.max(((overlayb ? 3 : 4) % (Math.max(catagoryP, 10))), 1);
       let sheetF = String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,101,95,53,52,0);
      for (let v = 0; v < 1; v++) {
         catagoryP <<= Math.min(Math.abs(((overlayb ? 5 : 4))), 2);
      }
      let zoomM = 4925161 >= catagoryP;
      do {
          let subbasketballplayerQ = String.fromCharCode(112,95,50,57,95,112,114,111,120,105,101,115,0);
          let imagesP: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,99,111,109,112,108,101,116,101,115,0),true ], [String.fromCharCode(101,110,99,105,112,104,101,114,95,98,95,50,57,0),false ], [String.fromCharCode(107,95,50,48,95,98,108,111,99,107,120,0),false ]]);
         catagoryP += (sheetF == String.fromCharCode(98,0) ? imagesP.size : sheetF.length);
         subbasketballplayerQ = "2";
         imagesP.set(subbasketballplayerQ, (String.fromCharCode(86,0) == subbasketballplayerQ ? subbasketballplayerQ.length : subbasketballplayerQ.length));
         if (zoomM) {
            break;
         }
      } while ((nativeexU) && zoomM);
         overlayb = 93 >= catagoryP;
          let indexy = String.fromCharCode(119,95,52,56,95,115,111,109,101,116,104,105,110,103,0);
         catagoryP %= Math.max(4, catagoryP);
         indexy += `${indexy.length >> (Math.min(Math.abs(3), 4))}`;
      flipper3 &= (String.fromCharCode(103,0) == modeE ? (nativeexU ? 4 : 4) : modeE.length);
      thumbnailA -= 3 << (Math.min(5, Math.abs(flipper3)));
      dispatch(showLoginAction());

   for (let j = 0; j < 3; j++) {
       let libavutilh = 2.0;
       let transfero: Map<any, any> = new Map([[String.fromCharCode(109,97,112,102,105,108,101,95,110,95,54,55,0),false ], [String.fromCharCode(107,95,53,55,95,105,116,97,108,105,97,110,0),true ]]);
       let long_1F = String.fromCharCode(116,95,54,57,95,102,100,111,112,101,110,0);
         transfero.set(long_1F, transfero.size % (Math.max(3, 9)));
         transfero = new Map([[`${transfero.size}`, transfero.size]]);
      if ((5.88 - libavutilh) > 3.44) {
         libavutilh *= 1 << (Math.min(5, Math.abs(parseInt(`${libavutilh}`))));
      }
         transfero.set(long_1F, long_1F.length << (Math.min(3, Math.abs(transfero.size))));
         long_1F = `${long_1F.length | 2}`;
         transfero = new Map([[`${transfero.size}`, (String.fromCharCode(87,0) == long_1F ? long_1F.length : transfero.size)]]);
          let libavdevicer = String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,122,95,52,51,0);
          let templateprocessorJ: Array<any> = [339, 906];
         transfero.set(long_1F, long_1F.length >> (Math.min(2, Math.abs(transfero.size))));
         libavdevicer += `${2 / (Math.max(1, libavdevicer.length))}`;
         templateprocessorJ.push(templateprocessorJ.length >> (Math.min(libavdevicer.length, 1)));
         libavutilh -= 2;
       let hoverC = String.fromCharCode(119,95,55,55,95,97,114,114,97,121,115,0);
      injuryQ = stringsm >= 76;
   }
   for (let v = 0; v < 1; v++) {
      emojiheartY = (modeE.length / (Math.max(10, stringsm))) >= 89;
   }
      return;
    }
    try {

      storem.push((String.fromCharCode(117,0) == mimou ? mimou.length : (injuryQ ? 3 : 3)));
   if (!injuryQ) {
      stringsm |= parseInt(`${thumbnailA}`);
   }
      const inviteParam = userState.userReferralCode + userState.userName;

       let bottomu = 4;
          let indexD = 4.0;
          let statisticsinactiveJ = 0.0;
         bottomu |= parseInt(`${statisticsinactiveJ}`);
         indexD *= parseInt(`${indexD}`);
         statisticsinactiveJ -= parseFloat(`${parseInt(`${indexD}`) << (Math.min(4, Math.abs(3)))}`);
       let icondefaultthumbnailB: Map<any, any> = new Map([[String.fromCharCode(118,95,53,95,98,97,99,107,105,110,103,0),533], [String.fromCharCode(104,97,115,104,95,114,95,54,50,0),62], [String.fromCharCode(100,101,116,101,99,116,101,100,95,115,95,50,56,0),135]]);
      let options6 = icondefaultthumbnailB.size >= 7289794;
      do {
         icondefaultthumbnailB.set(`${bottomu}`, icondefaultthumbnailB.size + 2);
         if (options6) {
            break;
         }
      } while ((icondefaultthumbnailB.size <= 5) && options6);
      mimou += `${(modeE.length - (injuryQ ? 5 : 1))}`;
       let r_image6 = 0.0;
      if (r_image6 <= 3.56) {
          let livev = 4;
          let sansT = 5.0;
          let injurya = String.fromCharCode(97,114,103,98,105,95,117,95,49,55,0);
          let scheduler4: Array<any> = [413, 959];
         r_image6 /= Math.max(1, 1);
         livev |= (String.fromCharCode(110,0) == injurya ? injurya.length : scheduler4.length);
         sansT += parseFloat(`${scheduler4.length ^ parseInt(`${sansT}`)}`);
      }
      while (1.23 <= (r_image6 / (Math.max(3, r_image6))) || 1.23 <= (r_image6 / (Math.max(r_image6, 2)))) {
         r_image6 *= parseInt(`${r_image6}`);
         break;
      }
      for (let h = 0; h < 2; h++) {
         r_image6 *= 1 % (Math.max(9, parseInt(`${r_image6}`)));
      }
      modeE = `${(flipper3 / (Math.max(3, (injuryQ ? 4 : 2))))}`;

      const Buffer = require("buffer").Buffer;

      mimou += `${steph.length}`;
      mimou = `${3 - steph.length}`;
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      flipper3 += stringsm & mimou.length;
      flipper3 >>= Math.min(Math.abs(parseInt(`${thumbnailA}`) / (Math.max(2, 3))), 1);

      

   for (let s = 0; s < 3; s++) {
       let selectg: Array<any> = [186, 789, 185];
       let colorsS = 4;
       let libavutilf = String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,119,95,53,51,0);
       let short_ocs = false;
       let iconsharev = false;
      let predictiondefaultA = libavutilf == String.fromCharCode(109,108,98,115,103,0);
      do {
         libavutilf = "1";
         if (predictiondefaultA) {
            break;
         }
      } while (predictiondefaultA && (5 <= (4 >> (Math.min(3, Math.abs(colorsS)))) || (colorsS >> (Math.min(libavutilf.length, 3))) <= 4));
         colorsS %= Math.max(5, 2);
      let orangeX = short_ocs ? !short_ocs : short_ocs;
      do {
         short_ocs = colorsS >= 90;
         if (orangeX) {
            break;
         }
      } while ((selectg.length >= 2) && orangeX);
          let applicationO = true;
          let tempnodataL: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,106,112,101,103,95,107,95,52,48,0),628], [String.fromCharCode(114,95,50,95,117,110,115,99,97,108,101,0),826], [String.fromCharCode(100,95,54,95,99,114,108,105,115,115,117,101,114,0),183]]);
          let defaultplayerimg0 = String.fromCharCode(112,105,99,107,105,110,103,95,109,95,50,51,0);
         selectg = [2 ^ libavutilf.length];
         applicationO = 88 == defaultplayerimg0.length;
         tempnodataL.set(`${defaultplayerimg0}`, 3 >> (Math.min(2, Math.abs(tempnodataL.size))));
          let gradlewb: Array<any> = [723, 345, 555];
         short_ocs = gradlewb.length > 34;
      while (short_ocs) {
         iconsharev = !iconsharev;
         break;
      }
      if (!short_ocs || 2 >= (colorsS - 1)) {
         short_ocs = 74 < colorsS || !short_ocs;
      }
         libavutilf += `${selectg.length}`;
      for (let y = 0; y < 2; y++) {
         selectg = [selectg.length];
      }
          let teamdetailsbgR: Array<any> = [String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,53,95,56,52,0), String.fromCharCode(99,95,55,55,95,102,101,116,99,104,105,110,103,0)];
          let basketballmatchdetailbgW = String.fromCharCode(115,95,53,51,95,112,111,119,101,114,0);
          let mimeC = true;
         iconsharev = selectg.length > 55 && mimeC;
         teamdetailsbgR = [3];
         basketballmatchdetailbgW += `${(String.fromCharCode(79,0) == basketballmatchdetailbgW ? basketballmatchdetailbgW.length : teamdetailsbgR.length)}`;
         mimeC = (teamdetailsbgR.length >> (Math.min(basketballmatchdetailbgW.length, 3))) >= 85;
          let yellowanimationliveW = String.fromCharCode(111,95,50,52,95,116,101,108,108,97,114,0);
          let profileactivep = String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,112,95,54,0);
          let q_playera = true;
         selectg.push((String.fromCharCode(105,0) == profileactivep ? profileactivep.length : (iconsharev ? 3 : 1)));
         yellowanimationliveW = "1";
         q_playera = (21 >= (yellowanimationliveW.length ^ (q_playera ? 21 : yellowanimationliveW.length)));
      if (4 <= (1 | selectg.length)) {
          let iconqqb: Map<any, any> = new Map([[String.fromCharCode(102,108,101,120,105,98,108,101,95,112,95,54,48,0),813], [String.fromCharCode(101,95,53,51,95,109,98,103,114,97,112,104,0),725]]);
          let overR = false;
         iconsharev = iconsharev || colorsS > 44;
         iconqqb.set(`${overR}`, 3);
      }
      if (iconsharev && libavutilf.length >= 2) {
          let statsK = 5;
          let nterstitiald = true;
          let networkB = String.fromCharCode(118,111,114,100,105,112,108,111,109,95,105,95,51,0);
          let topon1 = 2.0;
          let libreactperfloggerjnie = String.fromCharCode(97,95,56,95,114,101,97,100,108,110,0);
         libavutilf = `${(libavutilf == String.fromCharCode(114,0) ? libavutilf.length : (nterstitiald ? 5 : 5))}`;
         statsK &= 2;
         nterstitiald = topon1 >= 11.40;
         networkB += `${libreactperfloggerjnie.length & 2}`;
         topon1 *= parseFloat(`${libreactperfloggerjnie.length & 1}`);
      }
      if (2 >= (libavutilf.length - 4) && (colorsS - 4) >= 4) {
          let condensedN = String.fromCharCode(115,95,49,49,95,103,101,116,114,97,110,100,111,109,0);
          let indicatorn = false;
          let singaporet = String.fromCharCode(97,110,103,101,95,51,95,50,51,0);
          let actionG = false;
          let championf: Map<any, any> = new Map([[String.fromCharCode(114,95,54,52,95,105,105,114,102,105,108,116,101,114,0),667], [String.fromCharCode(116,95,51,51,95,108,111,103,100,98,0),106]]);
         libavutilf = `${(String.fromCharCode(77,0) == condensedN ? (indicatorn ? 3 : 5) : condensedN.length)}`;
         indicatorn = championf.get(`${actionG}`) == null;
         singaporet = `${((actionG ? 4 : 1) % 2)}`;
         championf.set(`${actionG}`, 3);
      }
      for (let k = 0; k < 1; k++) {
          let agreementF: Array<any> = [918, 35, 99];
          let activeX: Map<any, any> = new Map([[String.fromCharCode(121,95,51,53,95,100,101,108,97,116,101,100,0),String.fromCharCode(106,95,50,50,95,97,112,112,101,114,97,110,99,101,0)], [String.fromCharCode(117,110,108,105,110,107,101,100,95,120,95,52,48,0),String.fromCharCode(99,114,105,116,105,99,97,108,95,110,95,52,54,0)], [String.fromCharCode(111,102,102,115,99,114,101,101,110,95,105,95,50,51,0),String.fromCharCode(107,95,55,50,0)]]);
         libavutilf += `${agreementF.length}`;
         agreementF.push(activeX.size);
         activeX = new Map([[`${activeX.size}`, activeX.size ^ activeX.size]]);
      }
      injuryQ = !iconsharev && !short_ocs;
   }
       let a_unlocki = 4;
       let elements5 = true;
      let thumbnaila = a_unlocki <= 4952817;
      do {
         a_unlocki ^= 2;
         if (thumbnaila) {
            break;
         }
      } while ((!elements5) && thumbnaila);
         a_unlocki -= (a_unlocki - (elements5 ? 2 : 2));
         elements5 = a_unlocki == 39;
      while (!elements5 && (a_unlocki << (Math.min(Math.abs(2), 2))) < 4) {
         elements5 = !elements5;
         break;
      }
      while (!elements5) {
          let short_bI = 3;
          let serviceK = String.fromCharCode(116,95,53,53,95,100,101,112,114,101,99,97,116,101,100,0);
          let iconpointscoreZ = String.fromCharCode(104,95,52,52,95,114,101,97,100,120,98,108,111,99,107,0);
         a_unlocki >>= Math.min(1, Math.abs(2));
         short_bI >>= Math.min(Math.abs(serviceK.length & 2), 5);
         serviceK += `${iconpointscoreZ.length % (Math.max(1, serviceK.length))}`;
         iconpointscoreZ = `${serviceK.length ^ iconpointscoreZ.length}`;
         break;
      }
      for (let z = 0; z < 2; z++) {
         elements5 = a_unlocki <= 23 || elements5;
      }
      modeE = `${stringsm ^ parseInt(`${thumbnailA}`)}`;

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

       let type_2T = 4.0;
       let wind_ = 5.0;
         type_2T += parseFloat(`${parseInt(`${type_2T}`) << (Math.min(3, Math.abs(parseInt(`${wind_}`))))}`);
      while ((wind_ * type_2T) <= 4.87) {
         wind_ += parseFloat(`${1}`);
         break;
      }
         type_2T += parseFloat(`${1 ^ parseInt(`${wind_}`)}`);
         type_2T += parseFloat(`${parseInt(`${wind_}`)}`);
       let helper4 = 3.0;
          let service7 = String.fromCharCode(117,95,57,95,114,101,118,97,108,105,100,97,116,101,0);
          let smallbrightnesse = String.fromCharCode(102,95,56,52,95,114,111,117,110,100,117,112,0);
          let nbatrophyj: Array<any> = [238, 456, 972];
         wind_ /= Math.max(parseFloat(`${smallbrightnesse.length ^ 2}`), 3);
         service7 += `${nbatrophyj.length * service7.length}`;
         smallbrightnesse += `${nbatrophyj.length % (Math.max(service7.length, 4))}`;
      stringsm *= 2;
      modeE += `${flipper3}`;

      const result = await Share.share({
        message: msg,
      });

   while (modeE != String.fromCharCode(79,0)) {
      steph = `${modeE.length / 3}`;
      break;
   }
   while (5 < (steph.length % 4) && 4 < (stringsm % (Math.max(steph.length, 6)))) {
      stringsm >>= Math.min(5, Math.abs((String.fromCharCode(48,0) == mimou ? (injuryQ ? 2 : 4) : mimou.length)));
      break;
   }
      if (result.action === Share.sharedAction) {

       let emojiheartE = String.fromCharCode(119,95,54,54,95,116,104,111,117,103,104,0);
       let embedM = String.fromCharCode(112,95,50,57,95,97,112,115,0);
         emojiheartE += `${embedM.length + 3}`;
         emojiheartE += `${(String.fromCharCode(49,0) == embedM ? embedM.length : emojiheartE.length)}`;
         embedM = "3";
         embedM = `${embedM.length}`;
      let updatesq = String.fromCharCode(119,50,116,53,119,0) == embedM;
      do {
         embedM += `${(emojiheartE == String.fromCharCode(79,0) ? embedM.length : emojiheartE.length)}`;
         if (updatesq) {
            break;
         }
      } while ((embedM.includes(emojiheartE)) && updatesq);
         embedM = "3";
      flipper3 <<= Math.min(Math.abs(1 >> (Math.min(2, steph.length))), 5);
   for (let n = 0; n < 1; n++) {
      steph += `${modeE.length % (Math.max(mimou.length, 6))}`;
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   if (modeE != String.fromCharCode(54,0) || mimou != String.fromCharCode(114,0)) {
      modeE = "2";
   }
       let promotion4 = String.fromCharCode(121,99,98,99,114,95,118,95,50,55,0);
       let reddownarrowU: Array<any> = [127, 407];
      if (1 > (reddownarrowU.length / (Math.max(promotion4.length, 7)))) {
          let animations0 = 3;
          let schedulerW = 0.0;
          let whistleorangeY: Map<any, any> = new Map([[String.fromCharCode(105,95,57,48,95,116,101,109,112,115,0),String.fromCharCode(105,95,57,57,95,112,108,117,103,105,110,0)], [String.fromCharCode(118,95,49,95,114,100,98,120,0),String.fromCharCode(105,95,55,52,95,116,104,117,109,98,0)], [String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,108,95,51,50,0),String.fromCharCode(112,95,57,48,95,116,105,109,101,103,109,0)]]);
         promotion4 += `${reddownarrowU.length + 3}`;
         animations0 %= Math.max(animations0, 1);
         schedulerW *= 3;
         whistleorangeY.set(`${animations0}`, animations0 >> (Math.min(5, Math.abs(3))));
      }
         reddownarrowU = [promotion4.length];
      for (let i = 0; i < 2; i++) {
         promotion4 += `${promotion4.length << (Math.min(Math.abs(2), 2))}`;
      }
      for (let o = 0; o < 3; o++) {
          let libapminsightbZ: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,114,95,56,0),895], [String.fromCharCode(108,95,49,53,0),153]]);
          let styleb = String.fromCharCode(97,118,102,102,116,95,110,95,52,55,0);
          let eact8 = 0.0;
         promotion4 = `${reddownarrowU.length * libapminsightbZ.size}`;
         libapminsightbZ = new Map([[`${eact8}`, parseInt(`${eact8}`)]]);
         styleb += `${(styleb == String.fromCharCode(68,0) ? styleb.length : parseInt(`${eact8}`))}`;
      }
         promotion4 += `${reddownarrowU.length}`;
      for (let t = 0; t < 2; t++) {
          let placeholderN = String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,95,105,95,50,56,0);
          let abidetectw = 5.0;
          let defaultprofilepicR = 4.0;
          let searche = 4;
          let arrowrightwithtail8 = String.fromCharCode(114,101,115,105,100,117,101,115,95,97,95,50,55,0);
         reddownarrowU = [parseInt(`${defaultprofilepicR}`) + arrowrightwithtail8.length];
         placeholderN = `${(String.fromCharCode(74,0) == placeholderN ? parseInt(`${abidetectw}`) : placeholderN.length)}`;
         abidetectw += (parseFloat(`${String.fromCharCode(73,0) == placeholderN ? placeholderN.length : parseInt(`${abidetectw}`)}`));
         defaultprofilepicR /= Math.max(5, parseFloat(`${parseInt(`${abidetectw}`)}`));
         searche /= Math.max(3, parseInt(`${abidetectw}`));
         arrowrightwithtail8 += "2";
      }
      injuryQ = 5 >= flipper3;
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
            source={require("@static/images/hongkongStringLeaguedetailsbg.png")}
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
                source={require("@static/images/vip/specCurrent.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

          {mayi_Librrc.instance.tabConfig != null && mayi_Librrc.instance.len == 5 &&
            <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/libfileHolder.png")}
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
          <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
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
        <TouchableOpacity
          onPress={() => {
            if (!mayi_Gift.isLogin(userState)) {
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
        <TouchableOpacity
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
