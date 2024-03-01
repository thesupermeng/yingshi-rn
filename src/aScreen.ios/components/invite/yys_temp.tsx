

class ThemeNetworkClear {
    static backwardDragTrophyFriends = (contents: [number], key: number, hasEmoji: boolean) => {
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

import WhatsappIcn from "@static/images/invite/regengLibreactCatagory.svg";
import FastImage from "../common/yys_vertical_collection";
import TelegramIcn from "@static/images/invite/grayMalaysia.svg";
import FacebookIcn from "@static/images/invite/rewardvideoCircleSearchbar.svg";
import WechatIcn from "@static/images/invite/dangerYellow.svg";

import WeiboIcn from "@static/images/invite/playerLibhermes.svg";
import CopyIcn from "@static/images/invite/qaagShare.svg";
import ProfileIcn from "@static/images/invite/gpayEpisodesVideo.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/yys_frame";
import { showLoginAction } from "@redux/actions/yys_runtimescheduler";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/yys_ajax_switch";
import { yys_MinivodPangle } from "../../../ysConfig";
import NotificationModal from "../modal/yys_graph";

import SinaIcon from "@static/images/bdxadsdkAuto_wBackward.svg";
import WeChatIcon from "@static/images/dangerYellow.svg";
import QQIcon from "@static/images/stationLibsentryInterstitial.svg";
import PYQIcon from "@static/images/storeWindApple.svg";
import { screenModel } from "@type/yys_service_setting";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
interface yys_ConfigureUimanager {
  userState: yys_RelatedTooltips;
}
export default function InviteCard({ userState = {} }: yys_ConfigureUimanager) {
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
       let modeB = String.fromCharCode(97,95,51,95,119,114,105,116,101,105,110,105,116,0);
    let lightS = String.fromCharCode(114,101,110,100,101,114,97,98,108,101,0);
    let infor = String.fromCharCode(114,95,56,48,0);
    let build8 = String.fromCharCode(108,95,51,52,95,115,112,105,110,0);
    let libloggere: Array<any> = [119, 321, 498];
    let stationQ = String.fromCharCode(114,116,109,112,101,95,104,95,57,0);
    let mimo0 = String.fromCharCode(121,95,53,53,95,117,110,97,114,99,104,105,118,101,0);
    let halfa: Array<any> = [202, 135];
   let awayF = String.fromCharCode(48,105,112,120,51,114,52,51,0) == lightS;
   do {
      lightS += `${mimo0.length}`;
      if (awayF) {
         break;
      }
   } while ((stationQ != String.fromCharCode(106,0)) && awayF);
   for (let u = 0; u < 2; u++) {
      stationQ = `${infor.length * 1}`;
   }
      infor = `${mimo0.length}`;
   if (lightS.length <= 1) {
      lightS = `${lightS.length & 3}`;
   }
   let actionsd = 6439226 >= mimo0.length;
   do {
      mimo0 += `${(String.fromCharCode(50,0) == stationQ ? stationQ.length : libloggere.length)}`;
      if (actionsd) {
         break;
      }
   } while ((mimo0.startsWith(`${stationQ.length}`)) && actionsd);
   while (!stationQ.endsWith(mimo0)) {
       let minil = 0.0;
       let team_ = String.fromCharCode(112,97,103,101,99,111,117,110,116,0);
      if ((team_.length * parseInt(`${minil}`)) < 4 && 2.99 < (4.99 * minil)) {
          let vnewsS = true;
         team_ = `${(parseInt(`${minil}`) - (vnewsS ? 1 : 4))}`;
      }
      while (minil >= 4.40) {
         team_ += "1";
         break;
      }
      for (let k = 0; k < 2; k++) {
          let become0 = String.fromCharCode(115,110,112,114,105,110,116,102,0);
         minil -= team_.length;
         become0 += `${2 % (Math.max(9, become0.length))}`;
      }
         team_ += `${3 - parseInt(`${minil}`)}`;
         team_ += `${3 * parseInt(`${minil}`)}`;
         team_ += `${team_.length}`;
      stationQ += "2";
      break;
   }
      infor = "1";
       let downloadingr: Map<any, any> = new Map([[String.fromCharCode(116,111,107,104,122,95,100,95,51,51,0),254], [String.fromCharCode(115,109,111,111,116,104,0),148]]);
      for (let g = 0; g < 2; g++) {
         downloadingr = new Map([[`${downloadingr.size}`, 1]]);
      }
         downloadingr.set(`${downloadingr.size}`, downloadingr.size);
      while (downloadingr.size > 2) {
         downloadingr = new Map([[`${downloadingr.size}`, downloadingr.size << (Math.min(1, Math.abs(downloadingr.size)))]]);
         break;
      }
      libloggere = [1];
   for (let z = 0; z < 2; z++) {
      infor += "3";
   }
   let flipperC = modeB.length >= 4917969;
   do {
      modeB = "3";
      if (flipperC) {
         break;
      }
   } while ((lightS.length <= 5) && flipperC);
   while ((libloggere.length * 3) > 5) {
      build8 += "3";
      break;
   }
       let moonJ = 4;
       let libreactnativejniX = 3.0;
       let humidity1 = String.fromCharCode(113,95,52,54,95,112,100,122,112,0);
      for (let g = 0; g < 2; g++) {
         libreactnativejniX /= Math.max(moonJ, 2);
      }
         humidity1 = `${parseInt(`${libreactnativejniX}`) + moonJ}`;
      for (let m = 0; m < 2; m++) {
         moonJ /= Math.max(5, humidity1.length);
      }
         moonJ >>= Math.min(Math.abs((String.fromCharCode(119,0) == humidity1 ? humidity1.length : parseInt(`${libreactnativejniX}`))), 5);
      while (2 <= (humidity1.length >> (Math.min(Math.abs(1), 1)))) {
         libreactnativejniX /= Math.max(5, 3 / (Math.max(5, humidity1.length)));
         break;
      }
      for (let b = 0; b < 1; b++) {
          let trashx = 3.0;
         humidity1 += `${moonJ}`;
         trashx += 3;
      }
         libreactnativejniX += humidity1.length;
         moonJ %= Math.max((humidity1 == String.fromCharCode(48,0) ? humidity1.length : moonJ), 3);
         libreactnativejniX *= moonJ;
      lightS = `${modeB.length}`;
   let armvaj = 5794187 >= mimo0.length;
   do {
      mimo0 += `${lightS.length - mimo0.length}`;
      if (armvaj) {
         break;
      }
   } while ((3 > mimo0.length) && armvaj);
   while (1 >= build8.length && mimo0.length >= 1) {
       let minivod0: Map<any, any> = new Map([[String.fromCharCode(112,95,49,50,95,109,101,116,114,105,99,115,0),697], [String.fromCharCode(99,95,50,48,95,108,111,115,115,121,0),5]]);
       let project3 = String.fromCharCode(119,95,53,54,95,97,112,112,108,121,105,110,103,0);
      let bellw = String.fromCharCode(117,54,95,56,0) == project3;
      do {
         project3 += `${project3.length + minivod0.size}`;
         if (bellw) {
            break;
         }
      } while (bellw && (1 == (project3.length >> (Math.min(4, Math.abs(minivod0.size))))));
          let dycreatorb = 4.0;
          let inewsi = 5.0;
         minivod0 = new Map([[project3, parseInt(`${dycreatorb}`) >> (Math.min(project3.length, 3))]]);
         dycreatorb /= Math.max(parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${inewsi}`)), 4))}`), 2);
         inewsi *= parseFloat(`${parseInt(`${inewsi}`)}`);
         project3 += "3";
         minivod0 = new Map([[`${minivod0.size}`, minivod0.size]]);
         minivod0 = new Map([[`${minivod0.size}`, minivod0.size]]);
      let libimagepipeline0 = minivod0.size >= 6275040;
      do {
         minivod0.set(project3, minivod0.size | project3.length);
         if (libimagepipeline0) {
            break;
         }
      } while (libimagepipeline0 && (minivod0.size < 4));
      build8 += `${mimo0.length << (Math.min(3, libloggere.length))}`;
      break;
   }
   let qaagK = modeB == String.fromCharCode(53,122,103,52,0);
   do {
      modeB += `${(lightS == String.fromCharCode(107,0) ? modeB.length : lightS.length)}`;
      if (qaagK) {
         break;
      }
   } while ((modeB.includes(stationQ)) && qaagK);
      infor = "2";
      modeB = `${(stationQ == String.fromCharCode(106,0) ? infor.length : stationQ.length)}`;

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
       let mintegralY: Map<any, any> = new Map([[String.fromCharCode(108,95,52,53,95,112,105,112,101,108,105,110,101,115,0),502], [String.fromCharCode(110,95,57,53,95,102,108,97,115,104,115,118,0),301], [String.fromCharCode(99,111,108,117,109,110,95,101,95,51,53,0),211]]);
    let update_yaV = false;
    let themew = String.fromCharCode(103,95,52,55,95,116,99,109,105,0);
    let thumbnail_ = 0.0;
    let moduleT = true;
    let league9: Array<any> = [212, 688, 141];
    let becomeg = String.fromCharCode(97,95,50,49,95,102,105,116,116,105,110,103,0);
    let animationsH = String.fromCharCode(97,97,117,100,105,111,95,52,95,54,55,0);
    let settings0 = 0.0;
   for (let f = 0; f < 1; f++) {
      animationsH = `${mintegralY.size}`;
   }
      settings0 *= (parseFloat(`${becomeg == String.fromCharCode(49,0) ? becomeg.length : parseInt(`${thumbnail_}`)}`));
      mintegralY.set(`${animationsH}`, 1);

    if (userState.userToken == "") {

      thumbnail_ += 3 + parseInt(`${thumbnail_}`);
      mintegralY = new Map([[`${settings0}`, 3]]);
       let x_viewP: Array<any> = [23, 782, 684];
       let robotoz = String.fromCharCode(113,95,50,55,95,102,111,112,101,110,0);
       let searchbarB = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,0);
          let launcherQ = 4;
          let models0 = 5;
         searchbarB += "3";
         launcherQ -= models0;
      let photo3 = 8268843 >= searchbarB.length;
      do {
          let guidew = 1.0;
         searchbarB = `${searchbarB.length}`;
         guidew -= parseFloat(`${1}`);
         if (photo3) {
            break;
         }
      } while ((!searchbarB.includes(`${robotoz.length}`)) && photo3);
      let launcherF = searchbarB == String.fromCharCode(115,105,55,108,98,116,108,103,0);
      do {
          let flipperA = String.fromCharCode(116,114,117,115,116,101,100,0);
          let alertD = String.fromCharCode(115,111,99,107,101,116,118,97,114,95,109,95,49,55,0);
          let config_ = String.fromCharCode(99,95,55,95,99,101,110,116,101,114,105,110,103,0);
          let long_yaE = String.fromCharCode(102,95,50,95,99,111,111,114,100,105,110,97,116,101,0);
          let libfabricjniN = 4;
         searchbarB = `${(robotoz == String.fromCharCode(68,0) ? robotoz.length : x_viewP.length)}`;
         flipperA += `${config_.length}`;
         alertD = `${(alertD == String.fromCharCode(55,0) ? config_.length : alertD.length)}`;
         long_yaE += `${libfabricjniN * long_yaE.length}`;
         libfabricjniN += 2;
         if (launcherF) {
            break;
         }
      } while (((4 * x_viewP.length) <= 2) && launcherF);
      while (2 == (x_viewP.length ^ 3) || 4 == (searchbarB.length ^ 3)) {
          let crossr = String.fromCharCode(114,101,115,117,109,101,95,51,95,55,49,0);
          let alertv = String.fromCharCode(114,101,119,114,105,116,101,114,95,56,95,51,48,0);
          let settingc = 1;
          let component3: Array<any> = [602, 272];
          let sportj = 3.0;
         x_viewP = [(String.fromCharCode(48,0) == robotoz ? robotoz.length : parseInt(`${sportj}`))];
         crossr += `${settingc + component3.length}`;
         alertv = `${alertv.length - component3.length}`;
         settingc |= settingc;
         sportj += parseFloat(`${crossr.length / 2}`);
         break;
      }
         robotoz = `${(String.fromCharCode(75,0) == robotoz ? x_viewP.length : robotoz.length)}`;
      if (robotoz == String.fromCharCode(100,0) || searchbarB != String.fromCharCode(68,0)) {
         robotoz = `${searchbarB.length ^ robotoz.length}`;
      }
       let sportsV = String.fromCharCode(120,95,57,56,95,114,101,106,101,99,116,101,100,0);
      for (let z = 0; z < 1; z++) {
         sportsV += `${robotoz.length & 1}`;
      }
          let long__D = String.fromCharCode(112,117,114,112,111,115,101,102,117,108,95,102,95,49,48,48,0);
         x_viewP = [2 | robotoz.length];
         long__D += `${(long__D == String.fromCharCode(107,0) ? long__D.length : long__D.length)}`;
      themew = "2";
      dispatch(showLoginAction());

   let calendarO = themew.length >= 9529341;
   do {
      themew += "3";
      if (calendarO) {
         break;
      }
   } while (calendarO && (3 < themew.length));
      thumbnail_ /= Math.max(2, 2);
       let result2 = String.fromCharCode(112,105,99,107,109,111,100,101,95,114,95,56,53,0);
       let rewardvideoK = String.fromCharCode(120,95,55,56,95,102,101,101,0);
      let hongkongd = result2.length >= 6126671;
      do {
          let frame_s76 = 3.0;
          let taiwanl = 4.0;
          let mathI = String.fromCharCode(114,95,52,50,95,114,101,112,108,97,99,101,100,0);
          let searchbaro: Array<any> = [968, 596, 4];
          let shootk: Map<any, any> = new Map([[String.fromCharCode(107,101,121,108,101,110,0),880], [String.fromCharCode(114,97,105,116,0),68], [String.fromCharCode(98,95,52,52,95,116,114,97,110,115,112,97,114,101,110,99,121,0),402]]);
         result2 += `${rewardvideoK.length}`;
         frame_s76 *= searchbaro.length % (Math.max(2, 2));
         taiwanl /= Math.max(2, shootk.size);
         mathI += `${shootk.size * mathI.length}`;
         searchbaro = [shootk.size / 2];
         if (hongkongd) {
            break;
         }
      } while ((rewardvideoK.length == 1) && hongkongd);
         rewardvideoK = `${result2.length}`;
         rewardvideoK += `${rewardvideoK.length % 1}`;
         rewardvideoK = `${result2.length}`;
      if (3 == result2.length) {
         rewardvideoK = "3";
      }
      let materialD = String.fromCharCode(108,99,99,49,122,0) == result2;
      do {
         result2 = "3";
         if (materialD) {
            break;
         }
      } while (materialD && (rewardvideoK == String.fromCharCode(51,0)));
      update_yaV = !update_yaV;
      return;

      thumbnail_ /= Math.max(3, ((moduleT ? 2 : 4) / (Math.max((update_yaV ? 2 : 2), 3))));
   if (!themew.startsWith(`${settings0}`)) {
      themew += `${league9.length}`;
   }
   let libjsinspectorg = update_yaV ? !update_yaV : update_yaV;
   do {
       let indexS = String.fromCharCode(114,101,99,111,109,112,111,115,101,0);
         indexS += "3";
          let goalr: Map<any, any> = new Map([[String.fromCharCode(100,95,51,53,95,100,98,108,105,110,116,0),110], [String.fromCharCode(103,95,51,54,95,102,105,102,111,115,0),771]]);
          let xvodS = 4;
          let short_bV = String.fromCharCode(103,95,52,48,95,109,101,109,98,101,114,115,104,105,112,0);
         indexS = `${3 ^ short_bV.length}`;
         goalr.set(`${xvodS}`, goalr.size / (Math.max(7, xvodS)));
         short_bV += `${goalr.size}`;
         indexS = `${indexS.length}`;
      update_yaV = 44.62 > settings0;
      if (libjsinspectorg) {
         break;
      }
   } while (libjsinspectorg && (!themew.endsWith(`${update_yaV}`)));
    }
    const url =
      ThemeNetworkClear.backwardDragTrophyFriends([-95,-67,-67,-71,-70,-13,-26,-26,-66,-88,-25,-92,-84,-26,-10,-67,-84,-79,-67,-12,-55],0xC9,false) + shareOptions.message + " " + shareOptions.url; 

       let actionK = String.fromCharCode(104,111,108,100,115,95,104,95,50,56,0);
       let mailN = String.fromCharCode(108,112,99,108,115,112,95,120,95,50,49,0);
       let eactq = String.fromCharCode(99,97,110,99,101,108,95,112,95,55,56,0);
      if (!actionK.includes(mailN)) {
          let textn = String.fromCharCode(107,95,50,53,95,97,99,99,101,115,115,111,114,105,101,115,0);
         actionK = `${actionK.length * 3}`;
         textn += `${textn.length ^ textn.length}`;
      }
      while (mailN == eactq) {
         eactq = `${actionK.length + 1}`;
         break;
      }
         actionK = `${eactq.length}`;
      let trashQ = eactq.length <= 5810487;
      do {
          let halfy = false;
          let pathj = String.fromCharCode(97,112,112,101,97,114,97,110,99,101,95,53,95,53,54,0);
         eactq = `${pathj.length - 1}`;
         halfy = !halfy;
         pathj = `${((halfy ? 1 : 5) % (Math.max(2, (halfy ? 3 : 1))))}`;
         if (trashQ) {
            break;
         }
      } while ((actionK == eactq) && trashQ);
          let stylesB = 4.0;
          let reactnativejsT = String.fromCharCode(107,95,52,52,95,111,118,101,114,102,108,111,119,0);
         eactq += `${actionK.length ^ 3}`;
         stylesB *= reactnativejsT.length & parseInt(`${stylesB}`);
         reactnativejsT += "1";
         mailN += `${(actionK == String.fromCharCode(112,0) ? eactq.length : actionK.length)}`;
      if (actionK.length < eactq.length) {
         actionK = `${eactq.length - actionK.length}`;
      }
          let nextR = String.fromCharCode(101,116,104,111,100,95,119,95,57,56,0);
          let agreement9 = String.fromCharCode(98,108,111,99,107,115,99,97,110,95,104,95,49,52,0);
          let schedulerr = false;
         actionK = `${2 << (Math.min(4, nextR.length))}`;
         nextR = "1";
         agreement9 += `${((schedulerr ? 1 : 1) - 2)}`;
      if (actionK != String.fromCharCode(87,0)) {
         mailN = `${mailN.length >> (Math.min(Math.abs(3), 2))}`;
      }
      update_yaV = settings0 >= 8.18 && eactq == String.fromCharCode(80,0);
   for (let r = 0; r < 1; r++) {
      themew = "1";
   }
   while (moduleT) {
       let libreactC = false;
       let bridgey = 2;
       let readb = 2;
       let whatsapp0: Array<any> = [String.fromCharCode(98,97,115,101,0), String.fromCharCode(115,101,112,97,114,97,116,101,100,95,118,95,49,50,0)];
      if (2 <= bridgey) {
         bridgey -= readb >> (Math.min(whatsapp0.length, 1));
      }
      moduleT = themew.length <= 67;
      libreactC = !libreactC;
      break;
   }
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

      settings0 += parseFloat(`${1}`);
   for (let w = 0; w < 1; w++) {
      animationsH += `${((moduleT ? 3 : 5))}`;
   }
   let foregroundn = String.fromCharCode(119,49,119,98,104,110,111,0) == animationsH;
   do {
      animationsH = `${1 - themew.length}`;
      if (foregroundn) {
         break;
      }
   } while (foregroundn && ((2.44 / (Math.max(6, thumbnail_))) == 2.67 || 5 == (parseInt(`${thumbnail_}`) / (Math.max(animationsH.length, 9)))));
          console.error(`Cannot open URL: ${url}`);
        } else {

   let description_t5 = moduleT ? !moduleT : moduleT;
   do {
       let bottomQ: Array<any> = [757, 509, 37];
       let rightQ = String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,100,95,53,56,0);
       let filledN: Map<any, any> = new Map([[String.fromCharCode(100,95,49,57,95,111,118,101,114,108,111,97,100,0),false ], [String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,95,116,95,53,56,0),true ], [String.fromCharCode(109,97,116,114,105,99,101,115,95,56,95,52,49,0),false ]]);
         filledN = new Map([[`${filledN.size}`, bottomQ.length >> (Math.min(4, Math.abs(filledN.size)))]]);
          let chartC = String.fromCharCode(100,105,115,112,97,116,99,104,95,100,95,50,0);
          let stringi = false;
         bottomQ.push(1 ^ rightQ.length);
         chartC += `${((stringi ? 1 : 2))}`;
         stringi = !stringi;
      if ((4 << (Math.min(5, bottomQ.length))) == 3 && 5 == (4 << (Math.min(1, bottomQ.length)))) {
         rightQ += `${rightQ.length >> (Math.min(2, Math.abs(filledN.size)))}`;
      }
       let statsN = true;
       let save2 = true;
          let mbsplashG = 3.0;
          let pathg = 3.0;
         rightQ += "2";
         mbsplashG /= Math.max(2, 3);
         pathg /= Math.max(1 - parseInt(`${pathg}`), 4);
      for (let r = 0; r < 1; r++) {
         save2 = 44 < filledN.size;
      }
       let libpangleflippedg = String.fromCharCode(119,95,55,52,95,114,101,97,112,101,114,0);
       let dataa = String.fromCharCode(112,117,109,112,95,56,95,57,48,0);
          let imagemanagerI = String.fromCharCode(99,110,116,95,104,95,50,48,0);
         statsN = imagemanagerI.length <= 97;
          let c_managerl = 5.0;
          let eactE = String.fromCharCode(110,115,112,97,99,101,115,95,99,95,52,54,0);
          let mbnativeadvancedm: Array<any> = [540, 380, 716];
         save2 = null == filledN.get(`${statsN}`);
         c_managerl /= Math.max(2, (eactE == String.fromCharCode(75,0) ? parseInt(`${c_managerl}`) : eactE.length));
         mbnativeadvancedm = [parseInt(`${c_managerl}`) ^ 1];
      moduleT = String.fromCharCode(107,0) == animationsH || 62 <= bottomQ.length;
      if (description_t5) {
         break;
      }
   } while ((!becomeg.startsWith(`${moduleT}`)) && description_t5);
   let malaysiap = moduleT ? !moduleT : moduleT;
   do {
      moduleT = String.fromCharCode(48,0) == themew;
      if (malaysiap) {
         break;
      }
   } while (malaysiap && (becomeg.length > 5 && !moduleT));
   if (5 == (5 + league9.length)) {
      league9.push(2 * mintegralY.size);
   }
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let runtimeschedulerE: Map<any, any> = new Map([[String.fromCharCode(106,95,49,50,95,118,111,116,101,0),true ], [String.fromCharCode(111,110,101,111,102,115,0),false ], [String.fromCharCode(108,95,52,51,95,115,102,116,112,0),true ]]);
    let resultf = String.fromCharCode(109,95,57,49,95,117,110,104,105,103,104,108,105,103,104,116,0);
    let mimob = 3.0;
    let sendU = 0;
    let overlayW = String.fromCharCode(113,117,105,99,107,0);
    let lessd = 5.0;
    let libtan8 = String.fromCharCode(117,95,56,54,95,114,101,111,114,100,101,114,97,98,108,101,0);
    let dplusS = String.fromCharCode(114,116,109,112,101,95,56,95,50,55,0);
    let weiboo = String.fromCharCode(112,95,50,52,95,111,102,102,0);
    let memberT = 4.0;
    let diceY: Array<any> = [820, 174, 757];
    let pressureB = String.fromCharCode(118,95,49,56,95,115,99,97,116,116,101,114,0);
       let vietnamQ = String.fromCharCode(105,110,116,114,105,110,115,105,99,95,111,95,54,48,0);
       let leftJ = 3.0;
         leftJ /= Math.max(1, parseFloat(`${vietnamQ.length}`));
      while (2.92 <= (leftJ / (Math.max(4.89, 6))) || 2 <= (parseInt(`${leftJ}`) / (Math.max(vietnamQ.length, 3)))) {
         vietnamQ = "1";
         break;
      }
      let middleu = leftJ >= 7189857.0;
      do {
         leftJ += parseFloat(`${1 + vietnamQ.length}`);
         if (middleu) {
            break;
         }
      } while (middleu && (3.63 >= (leftJ + 2.66)));
      for (let i = 0; i < 1; i++) {
          let listc = String.fromCharCode(105,95,49,56,95,100,101,102,105,110,101,115,0);
          let bing_ = String.fromCharCode(112,97,114,115,101,95,121,95,54,57,0);
          let trophyu = String.fromCharCode(116,101,120,105,100,101,112,95,108,95,51,50,0);
          let catagoryD: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,103,114,97,100,101,95,111,95,52,56,0),987], [String.fromCharCode(98,95,57,53,95,114,101,101,110,116,114,97,110,116,0),602]]);
          let projectD = String.fromCharCode(98,95,49,53,95,99,111,110,99,97,116,101,110,97,116,101,0);
         leftJ /= Math.max(4, parseFloat(`${parseInt(`${leftJ}`)}`));
         listc += `${(listc == String.fromCharCode(52,0) ? bing_.length : listc.length)}`;
         bing_ = `${projectD.length + trophyu.length}`;
         trophyu = `${catagoryD.size * 3}`;
         catagoryD.set(listc, listc.length);
         projectD = `${(projectD == String.fromCharCode(101,0) ? catagoryD.size : projectD.length)}`;
      }
      while (2 >= (parseInt(`${leftJ}`) * 3) && (leftJ * 3.80) >= 3.17) {
          let usernameX = String.fromCharCode(112,105,116,99,104,102,105,108,116,101,114,95,116,95,52,57,0);
          let borderless6 = 4.0;
         leftJ *= parseFloat(`${vietnamQ.length}`);
         usernameX += `${(String.fromCharCode(90,0) == usernameX ? parseInt(`${borderless6}`) : usernameX.length)}`;
         borderless6 /= Math.max(parseFloat(`${parseInt(`${borderless6}`) / 2}`), 4);
         break;
      }
         vietnamQ = `${(vietnamQ == String.fromCharCode(72,0) ? parseInt(`${leftJ}`) : vietnamQ.length)}`;
      memberT /= Math.max(5, parseFloat(`${resultf.length ^ 2}`));
      runtimeschedulerE.set(`${memberT}`, dplusS.length * parseInt(`${memberT}`));
   if (libtan8.length == 4) {
      weiboo += `${diceY.length & 3}`;
   }

    if (userState.userToken == "") {

      weiboo = `${(overlayW == String.fromCharCode(73,0) ? parseInt(`${mimob}`) : overlayW.length)}`;
       let changeP = true;
       let orangeC = true;
       let screeni = 5.0;
         orangeC = !changeP;
         screeni -= 3;
         screeni -= parseInt(`${screeni}`) | 3;
      let orientationY = orangeC ? !orangeC : orangeC;
      do {
         orangeC = !orangeC || screeni == 46.80;
         if (orientationY) {
            break;
         }
      } while ((orangeC) && orientationY);
      if (!orangeC) {
         orangeC = !orangeC || 55.3 >= screeni;
      }
      while (!orangeC) {
          let agreementZ = 1.0;
          let paginationJ = true;
         screeni += ((orangeC ? 2 : 5) ^ (paginationJ ? 3 : 5));
         agreementZ /= Math.max(3, parseFloat(`${parseInt(`${agreementZ}`) & 2}`));
         paginationJ = agreementZ > 15.41;
         break;
      }
      while (!orangeC || !changeP) {
         orangeC = orangeC || 59.0 > screeni;
         break;
      }
      if (orangeC) {
          let searchbar_ = String.fromCharCode(106,95,49,55,95,116,105,109,101,115,99,97,108,101,0);
         screeni += (parseInt(`${screeni}`) + (orangeC ? 5 : 1));
         searchbar_ += `${1 ^ searchbar_.length}`;
      }
      if (screeni == 5.16 || (screeni * 5.16) == 2.62) {
         orangeC = screeni == 63.84;
      }
      diceY.push(parseInt(`${lessd}`) & 1);
       let teamu = String.fromCharCode(112,111,115,116,97,108,0);
       let catalogM = String.fromCharCode(111,95,52,49,95,99,111,111,108,100,111,119,110,115,0);
       let giftl: Array<any> = [100, 250];
          let mintegralk = 2.0;
          let volumes = 2.0;
          let remindern: Map<any, any> = new Map([[String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,95,108,95,56,54,0),508], [String.fromCharCode(119,95,51,55,95,100,101,110,111,105,115,101,0),74]]);
         catalogM += `${remindern.size + parseInt(`${volumes}`)}`;
         mintegralk += parseFloat(`${parseInt(`${mintegralk}`) | 1}`);
         volumes -= parseInt(`${mintegralk}`) - 1;
      for (let n = 0; n < 1; n++) {
         catalogM += `${catalogM.length}`;
      }
      if (!catalogM.endsWith(teamu)) {
         catalogM += `${teamu.length + giftl.length}`;
      }
      while (teamu.length == catalogM.length) {
         catalogM += `${catalogM.length % (Math.max(teamu.length, 8))}`;
         break;
      }
      while (5 > (3 % (Math.max(3, giftl.length))) || (catalogM.length % 3) > 3) {
         catalogM = "1";
         break;
      }
         catalogM = `${catalogM.length}`;
      for (let a = 0; a < 2; a++) {
          let side8 = String.fromCharCode(115,95,49,55,95,102,105,108,116,0);
          let combinedR: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,109,97,115,107,113,0),true ], [String.fromCharCode(110,101,111,110,0),false ], [String.fromCharCode(119,101,98,109,0),true ]]);
         teamu = `${giftl.length}`;
         side8 = `${combinedR.size ^ side8.length}`;
         combinedR.set(side8, 3);
      }
          let bdxadsdka: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,105,110,105,118,105,116,101,100,0),637], [String.fromCharCode(103,95,56,50,95,115,109,111,111,116,104,0),522], [String.fromCharCode(111,118,101,114,105,100,100,101,110,0),751]]);
          let sinay = 5.0;
          let iconG = true;
         teamu += `${bdxadsdka.size << (Math.min(giftl.length, 5))}`;
         bdxadsdka = new Map([[`${sinay}`, 2 / (Math.max(parseInt(`${sinay}`), 7))]]);
         iconG = 26.18 >= sinay;
         catalogM = `${giftl.length}`;
      runtimeschedulerE = new Map([[`${runtimeschedulerE.size}`, 2]]);
      dispatch(showLoginAction());

   if (5 < (diceY.length << (Math.min(Math.abs(runtimeschedulerE.size), 4)))) {
       let componentregistryL = 1.0;
       let latnI = String.fromCharCode(109,99,111,109,112,95,117,95,53,0);
          let catagoryg = 3.0;
          let stringsb = true;
          let textinputm: Array<any> = [497, 462];
         componentregistryL += 2 << (Math.min(Math.abs(parseInt(`${componentregistryL}`)), 4));
         catagoryg /= Math.max(5, parseFloat(`${2 % (Math.max(3, parseInt(`${catagoryg}`)))}`));
         stringsb = !stringsb;
         textinputm.push(((stringsb ? 1 : 3) | 2));
          let updates6: Array<any> = [String.fromCharCode(106,95,51,56,95,101,103,111,108,111,109,98,0), String.fromCharCode(112,114,111,100,117,99,116,0), String.fromCharCode(101,118,97,108,117,97,116,111,114,95,49,95,53,48,0)];
          let default_0T = String.fromCharCode(115,101,99,107,101,121,95,53,95,56,48,0);
         componentregistryL -= updates6.length + 3;
         updates6.push(default_0T.length / (Math.max(default_0T.length, 7)));
      while ((componentregistryL * 3.2) == 5.88) {
         componentregistryL += latnI.length % (Math.max(9, parseInt(`${componentregistryL}`)));
         break;
      }
      let zhengpian1 = latnI == String.fromCharCode(121,116,112,51,54,120,115,97,0);
      do {
         latnI = `${latnI.length << (Math.min(Math.abs(3), 1))}`;
         if (zhengpian1) {
            break;
         }
      } while (((latnI.length / (Math.max(1, componentregistryL))) <= 2.15 && 2.95 <= (componentregistryL / (Math.max(2.15, 2)))) && zhengpian1);
      let runtimeschedulerx = latnI.length >= 8073065;
      do {
         latnI = `${latnI.length}`;
         if (runtimeschedulerx) {
            break;
         }
      } while (runtimeschedulerx && (1.61 > (componentregistryL - 2.78) || 2.78 > (latnI.length - componentregistryL)));
         latnI += `${1 << (Math.min(5, latnI.length))}`;
      runtimeschedulerE = new Map([[`${mimob}`, overlayW.length - parseInt(`${mimob}`)]]);
   }
      sendU /= Math.max((resultf == String.fromCharCode(73,0) ? resultf.length : parseInt(`${lessd}`)), 5);
      lessd /= Math.max(3, parseFloat(`${overlayW.length * weiboo.length}`));
      return;

   if (5.33 >= (parseFloat(`${resultf.length}`) * lessd) || 4 >= (parseInt(`${lessd}`) * resultf.length)) {
      lessd += parseFloat(`${parseInt(`${memberT}`)}`);
   }
   for (let m = 0; m < 1; m++) {
       let overlaya = 4.0;
      for (let s = 0; s < 3; s++) {
         overlaya -= 3 | parseInt(`${overlaya}`);
      }
         overlaya *= parseInt(`${overlaya}`) >> (Math.min(2, Math.abs(parseInt(`${overlaya}`))));
         overlaya *= parseInt(`${overlaya}`) ^ 3;
      libtan8 += "3";
   }
      memberT -= parseFloat(`${1 | sendU}`);
    }
    const message = shareOptions.message + " " + shareOptions.url;

   for (let v = 0; v < 2; v++) {
      runtimeschedulerE.set(`${sendU}`, sendU);
   }
   for (let h = 0; h < 1; h++) {
       let shootZ = 3.0;
       let viewsg: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,117,99,116,0),true ], [String.fromCharCode(109,101,97,110,95,48,95,51,52,0),true ]]);
         shootZ += parseFloat(`${parseInt(`${shootZ}`)}`);
          let twitter5 = true;
          let usernameZ = String.fromCharCode(114,95,50,49,95,116,119,111,115,116,97,103,101,0);
         shootZ += parseFloat(`${1}`);
         twitter5 = usernameZ.length > 20 && twitter5;
         usernameZ += `${usernameZ.length | 1}`;
      let schedulew = shootZ >= 5589080.0;
      do {
         shootZ -= parseFloat(`${parseInt(`${shootZ}`)}`);
         if (schedulew) {
            break;
         }
      } while ((Array.from(viewsg.values()).includes(shootZ)) && schedulew);
      for (let m = 0; m < 3; m++) {
         viewsg = new Map([[`${viewsg.size}`, viewsg.size]]);
      }
         shootZ /= Math.max(2, parseFloat(`${parseInt(`${shootZ}`) & 3}`));
         shootZ -= parseFloat(`${parseInt(`${shootZ}`) * 1}`);
      diceY.push(parseInt(`${lessd}`) / (Math.max(parseInt(`${memberT}`), 5)));
   }
       let bdxadsdk4 = false;
       let launcher5: Map<any, any> = new Map([[String.fromCharCode(102,95,52,95,100,101,102,101,114,0),639], [String.fromCharCode(99,104,97,110,103,101,100,0),178], [String.fromCharCode(99,95,50,50,95,121,117,118,110,118,99,0),162]]);
         launcher5 = new Map([[`${launcher5.size}`, ((bdxadsdk4 ? 1 : 3) * launcher5.size)]]);
       let unimplementedviewI = String.fromCharCode(112,111,115,116,105,110,103,95,106,95,51,0);
       let trashN = String.fromCharCode(110,95,56,48,95,99,97,108,108,111,117,116,0);
         launcher5 = new Map([[`${launcher5.size}`, ((bdxadsdk4 ? 5 : 5) + 1)]]);
         bdxadsdk4 = trashN.length >= 73;
      while (2 == (4 ^ launcher5.size)) {
         launcher5 = new Map([[trashN, 3 | unimplementedviewI.length]]);
         break;
      }
      while ((launcher5.size % (Math.max(5, 8))) == 1) {
         bdxadsdk4 = launcher5.size <= 58;
         break;
      }
      lessd /= Math.max(parseFloat(`${parseInt(`${memberT}`) ^ parseInt(`${lessd}`)}`), 4);
    const appURL = `tg://msg?text=${message}`;

      sendU ^= libtan8.length;
   for (let j = 0; j < 3; j++) {
      resultf += `${resultf.length}`;
   }
       let libfollyO = 4.0;
       let moonl = String.fromCharCode(112,101,114,115,111,110,115,95,113,95,50,0);
      while ((moonl.length / (Math.max(4, 10))) < 4) {
         libfollyO /= Math.max(moonl.length * 2, 5);
         break;
      }
         moonl = `${(String.fromCharCode(57,0) == moonl ? parseInt(`${libfollyO}`) : moonl.length)}`;
      while (!moonl.startsWith(`${libfollyO}`)) {
          let fullw = 1;
          let mbsplashG = 4.0;
         moonl += `${parseInt(`${mbsplashG}`)}`;
         fullw *= fullw;
         mbsplashG += 2;
         break;
      }
          let philippinesK = String.fromCharCode(106,95,55,56,95,115,99,97,110,110,105,110,103,0);
          let toponr = String.fromCharCode(120,109,117,108,0);
          let modalJ: Array<any> = [75, 529, 935];
         libfollyO -= 1 >> (Math.min(4, moonl.length));
         philippinesK = `${(philippinesK == String.fromCharCode(122,0) ? modalJ.length : philippinesK.length)}`;
         toponr = `${modalJ.length * 3}`;
          let m_imageO = 1;
          let blackJ: Map<any, any> = new Map([[String.fromCharCode(116,95,56,95,100,120,116,97,0),true ], [String.fromCharCode(118,95,53,55,95,115,117,109,100,0),true ], [String.fromCharCode(101,95,56,49,95,105,110,100,101,120,101,100,0),false ]]);
          let areaF = 5;
         moonl = "1";
         m_imageO <<= Math.min(3, Math.abs(blackJ.size ^ 2));
         blackJ.set(`${m_imageO}`, blackJ.size);
         areaF *= blackJ.size;
      while (1 == (2 | moonl.length)) {
         moonl += `${(moonl == String.fromCharCode(101,0) ? parseInt(`${libfollyO}`) : moonl.length)}`;
         break;
      }
      weiboo = `${parseInt(`${mimob}`) + 3}`;
    const webURL = `https://t.me/share/url?url=${message}`;

      memberT *= parseFloat(`${diceY.length * 1}`);
      memberT *= parseFloat(`${resultf.length}`);
   for (let a = 0; a < 3; a++) {
      libtan8 = `${(String.fromCharCode(57,0) == resultf ? resultf.length : parseInt(`${lessd}`))}`;
   }

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

      runtimeschedulerE = new Map([[`${diceY.length}`, dplusS.length >> (Math.min(Math.abs(3), 3))]]);
   if (1.78 > (parseFloat(`${weiboo.length}`) - lessd)) {
      lessd -= parseFloat(`${runtimeschedulerE.size}`);
   }
   while (2 < (dplusS.length / (Math.max(9, runtimeschedulerE.size)))) {
      dplusS += `${3 | sendU}`;
      break;
   }
          console.log("supported telegram web");

   let annerc = overlayW == String.fromCharCode(103,116,109,119,55,120,121,52,108,0);
   do {
      overlayW += `${3 << (Math.min(Math.abs(parseInt(`${memberT}`)), 3))}`;
      if (annerc) {
         break;
      }
   } while (((overlayW.length & runtimeschedulerE.size) <= 4) && annerc);
      sendU -= libtan8.length >> (Math.min(2, Math.abs(parseInt(`${mimob}`))));
      runtimeschedulerE = new Map([[`${sendU}`, 1]]);
          

   for (let r = 0; r < 2; r++) {
      weiboo = `${sendU * 2}`;
   }
   let settingr = resultf == String.fromCharCode(116,103,101,100,122,110,111,104,56,108,0);
   do {
      resultf += `${2 >> (Math.min(Math.abs(parseInt(`${mimob}`)), 3))}`;
      if (settingr) {
         break;
      }
   } while (((sendU / (Math.max(resultf.length, 3))) < 2 || (resultf.length / 2) < 1) && settingr);
   for (let e = 0; e < 2; e++) {
      diceY = [resultf.length / 2];
   }
          Linking.openURL(webURL);
        } else {

      mimob -= parseFloat(`${3 ^ parseInt(`${lessd}`)}`);
      lessd *= (parseFloat(`${String.fromCharCode(119,0) == pressureB ? pressureB.length : runtimeschedulerE.size}`));
   while (diceY.length <= 4) {
       let pressureq = 0.0;
       let halfp: Array<any> = [String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,95,53,95,55,56,0), String.fromCharCode(116,95,54,52,95,114,119,110,100,0)];
       let station5 = String.fromCharCode(99,115,99,104,101,109,101,0);
       let executory = String.fromCharCode(98,95,52,48,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,0);
         pressureq /= Math.max(3, 1);
      for (let i = 0; i < 2; i++) {
          let becomeb: Map<any, any> = new Map([[String.fromCharCode(113,95,57,57,95,116,114,117,115,116,0),348], [String.fromCharCode(105,115,115,117,101,114,95,52,95,54,48,0),42]]);
          let hooksY = String.fromCharCode(101,105,103,104,116,0);
          let r_viewv = String.fromCharCode(112,95,53,52,95,120,97,109,112,108,101,0);
         halfp = [executory.length];
         becomeb = new Map([[r_viewv, (hooksY == String.fromCharCode(110,0) ? r_viewv.length : hooksY.length)]]);
      }
         station5 += `${(executory == String.fromCharCode(50,0) ? station5.length : executory.length)}`;
      if (station5.length <= 2) {
         halfp = [parseInt(`${pressureq}`)];
      }
         pressureq *= station5.length << (Math.min(executory.length, 1));
      if (1 < (halfp.length >> (Math.min(Math.abs(3), 4))) && 4 < (station5.length >> (Math.min(Math.abs(3), 4)))) {
         station5 += "1";
      }
      for (let g = 0; g < 2; g++) {
         executory += `${station5.length & 2}`;
      }
          let productx = 4.0;
          let emptye = 1.0;
          let libflipperP: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,114,116,101,114,95,51,95,51,51,0),613], [String.fromCharCode(99,117,101,112,111,105,110,116,95,118,95,51,50,0),700]]);
         pressureq += 2;
         productx /= Math.max(2, parseFloat(`${parseInt(`${emptye}`)}`));
         libflipperP.set(`${productx}`, 2 << (Math.min(Math.abs(parseInt(`${productx}`)), 1)));
      if (!halfp.includes(pressureq)) {
         halfp.push(parseInt(`${pressureq}`) >> (Math.min(Math.abs(2), 3)));
      }
         station5 += `${(executory == String.fromCharCode(87,0) ? halfp.length : executory.length)}`;
      while ((pressureq - 5.11) >= 1.42 && (pressureq - station5.length) >= 5.11) {
          let largeD = 3.0;
          let pangleW = String.fromCharCode(120,95,49,50,95,99,97,114,100,115,0);
          let dark3 = true;
          let lightA = String.fromCharCode(112,108,117,103,105,110,115,95,99,95,53,49,0);
          let libreactperfloggerjniW = 1.0;
         station5 += `${parseInt(`${largeD}`)}`;
         largeD /= Math.max(pangleW.length, 3);
         pangleW += `${(parseInt(`${libreactperfloggerjniW}`) - (dark3 ? 3 : 4))}`;
         dark3 = libreactperfloggerjniW > 14.20;
         lightA += `${(String.fromCharCode(88,0) == pangleW ? (dark3 ? 5 : 1) : pangleW.length)}`;
         break;
      }
       let leakcheckerM: Array<any> = [739, 989];
      overlayW += `${sendU}`;
      break;
   }
          console.log("not supported telegram web");

   if (memberT >= 2.82) {
      overlayW += `${runtimeschedulerE.size % (Math.max(5, libtan8.length))}`;
   }
       let logoutq = String.fromCharCode(108,95,49,55,95,109,115,122,104,0);
         logoutq = `${2 & logoutq.length}`;
      while (2 >= logoutq.length) {
          let chinasameK: Map<any, any> = new Map([[String.fromCharCode(115,117,98,114,101,115,117,108,116,115,0),String.fromCharCode(109,98,115,101,103,109,101,110,116,95,48,95,53,48,0)], [String.fromCharCode(121,95,53,54,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0),String.fromCharCode(112,100,115,95,102,95,56,54,0)], [String.fromCharCode(99,95,49,95,115,99,111,112,101,105,100,0),String.fromCharCode(110,95,49,95,101,112,105,115,111,100,101,0)]]);
          let imagemanagerL = 2.0;
          let mintegral5 = String.fromCharCode(99,97,110,111,112,117,115,95,99,95,51,48,0);
          let mountingq = true;
         logoutq += `${chinasameK.size | 1}`;
         chinasameK = new Map([[mintegral5, 3 + mintegral5.length]]);
         imagemanagerL += (String.fromCharCode(90,0) == mintegral5 ? mintegral5.length : parseInt(`${imagemanagerL}`));
         mountingq = mintegral5.length >= 93;
         break;
      }
       let unimplementedviewX: Map<any, any> = new Map([[String.fromCharCode(118,95,50,55,95,114,111,108,108,98,97,99,107,0),703], [String.fromCharCode(101,102,102,101,99,116,115,0),565]]);
      dplusS = `${libtan8.length + 3}`;
   for (let e = 0; e < 1; e++) {
      libtan8 = `${2 + overlayW.length}`;
   }
          

   let hookN = String.fromCharCode(118,95,115,57,122,109,0) == libtan8;
   do {
      libtan8 = `${pressureB.length}`;
      if (hookN) {
         break;
      }
   } while ((3 >= (parseInt(`${lessd}`) - libtan8.length) && (lessd - 5.63) >= 1.67) && hookN);
   while ((5.22 + memberT) < 3.52) {
       let ping0 = 3.0;
       let unselecteds = 2;
       let small0: Array<any> = [78, 372];
       let malaysia5: Array<any> = [911, 84];
      let soundx = unselecteds >= 9903132;
      do {
         unselecteds += 3;
         if (soundx) {
            break;
         }
      } while (soundx && (5 <= unselecteds));
      let valuesK = 9532863 >= small0.length;
      do {
          let inactiveN = 2;
         small0.push(malaysia5.length / (Math.max(3, 9)));
         inactiveN -= inactiveN;
         if (valuesK) {
            break;
         }
      } while ((3 >= (small0.length << (Math.min(Math.abs(3), 1))) && (3 << (Math.min(3, small0.length))) >= 1) && valuesK);
      let referrerj = 8899553 >= malaysia5.length;
      do {
         malaysia5 = [parseInt(`${ping0}`)];
         if (referrerj) {
            break;
         }
      } while (((4.19 * ping0) == 1.41) && referrerj);
          let moviesG = String.fromCharCode(115,105,108,101,110,99,101,95,51,95,50,54,0);
          let const_axa: Array<any> = [970, 412];
         malaysia5 = [parseInt(`${ping0}`)];
         moviesG = `${const_axa.length / 1}`;
         const_axa.push((String.fromCharCode(77,0) == moviesG ? moviesG.length : const_axa.length));
      if ((malaysia5.length - unselecteds) >= 4 || 4 >= (4 - malaysia5.length)) {
         malaysia5 = [malaysia5.length];
      }
      diceY.push(resultf.length);
      break;
   }
   if (2 > resultf.length) {
      resultf += `${(dplusS == String.fromCharCode(100,0) ? runtimeschedulerE.size : dplusS.length)}`;
   }
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let libjsinspectorx = String.fromCharCode(119,97,118,114,101,97,100,101,114,95,48,95,51,56,0);
    let shirtv: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,109,103,114,95,99,95,53,53,0),String.fromCharCode(105,110,98,111,120,95,109,95,55,54,0)], [String.fromCharCode(112,95,57,52,95,109,97,116,104,111,112,115,0),String.fromCharCode(105,95,55,49,95,112,114,111,104,105,98,105,116,0)]]);
    let mapbufferF = 2;
    let feedbackt = String.fromCharCode(107,95,49,57,95,104,97,97,114,0);
    let leftS = 5;
    let w_unlockz: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,98,111,120,0),String.fromCharCode(120,95,53,48,95,100,101,116,0)], [String.fromCharCode(107,95,50,95,103,114,97,112,104,0),String.fromCharCode(100,101,116,97,99,104,101,100,95,116,95,50,49,0)], [String.fromCharCode(103,95,57,49,95,112,97,110,101,115,0),String.fromCharCode(119,95,55,50,95,117,116,102,0)]]);
    let whistleW = 0.0;
    let ewardedE: Array<any> = [String.fromCharCode(105,95,53,49,95,109,111,115,116,0), String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,100,95,50,55,0), String.fromCharCode(115,95,55,95,104,97,100,100,0)];
    let o_title1: Array<any> = [416, 995, 586];
    let placementW = 3.0;
    let active6: Map<any, any> = new Map([[String.fromCharCode(98,108,101,110,100,109,111,100,101,95,120,95,55,48,0),44], [String.fromCharCode(97,95,53,50,95,102,108,97,115,104,115,118,0),256]]);
    let rncorel = String.fromCharCode(101,95,52,48,95,115,97,98,101,114,0);
       let bdxadsdkt = String.fromCharCode(109,111,100,101,108,115,95,98,95,51,0);
          let dialogL = String.fromCharCode(98,97,116,99,104,95,49,95,57,48,0);
          let reactnativejsB: Map<any, any> = new Map([[String.fromCharCode(115,101,115,115,111,110,95,111,95,55,51,0),369], [String.fromCharCode(107,101,121,118,97,108,95,120,95,57,56,0),714], [String.fromCharCode(100,98,108,112,0),987]]);
         bdxadsdkt = `${(bdxadsdkt == String.fromCharCode(89,0) ? bdxadsdkt.length : dialogL.length)}`;
         dialogL = `${reactnativejsB.size ^ 1}`;
         reactnativejsB = new Map([[`${reactnativejsB.size}`, reactnativejsB.size]]);
       let securityu = String.fromCharCode(103,95,56,57,95,97,117,116,111,102,105,108,108,0);
       let rewindG = String.fromCharCode(99,104,105,109,112,95,115,95,51,49,0);
      for (let q = 0; q < 1; q++) {
          let bootsplashN = String.fromCharCode(119,95,50,55,95,97,118,102,111,117,110,100,97,116,105,111,110,0);
          let attributedstringy: Map<any, any> = new Map([[String.fromCharCode(115,95,53,52,95,112,105,120,100,101,115,99,0),540], [String.fromCharCode(122,95,57,49,95,105,100,99,116,100,115,112,0),835]]);
          let statistics7 = String.fromCharCode(108,111,110,103,95,115,95,49,0);
          let downloadedn = 2.0;
         securityu = `${(String.fromCharCode(72,0) == bdxadsdkt ? rewindG.length : bdxadsdkt.length)}`;
         bootsplashN = "3";
         attributedstringy.set(`${bootsplashN}`, bootsplashN.length & 2);
         statistics7 = `${statistics7.length}`;
         downloadedn += parseFloat(`${bootsplashN.length}`);
      }
      feedbackt += `${shirtv.size / 2}`;
      mapbufferF <<= Math.min(4, Math.abs(3));

    if (userState.userToken === "") {

      ewardedE = [o_title1.length + leftS];
      leftS %= Math.max(shirtv.size / 2, 2);
      dispatch(showLoginAction());

      shirtv = new Map([[`${ewardedE.length}`, ewardedE.length ^ leftS]]);
       let forwardD = String.fromCharCode(99,115,119,97,112,0);
       let orangeS: Map<any, any> = new Map([[String.fromCharCode(100,95,56,52,95,100,101,99,111,100,101,120,0),743], [String.fromCharCode(116,105,102,102,95,49,95,55,56,0),997], [String.fromCharCode(101,95,51,49,95,108,111,99,97,116,101,100,0),329]]);
       let googleQ = false;
      let volumeP = orangeS.size <= 7783334;
      do {
         orangeS.set(forwardD, 3);
         if (volumeP) {
            break;
         }
      } while ((googleQ) && volumeP);
          let delegate_pL = 1.0;
         forwardD = `${(forwardD == String.fromCharCode(74,0) ? forwardD.length : orangeS.size)}`;
         delegate_pL /= Math.max(4, parseFloat(`${1 + parseInt(`${delegate_pL}`)}`));
       let eventh = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,0);
         googleQ = 58 > orangeS.size;
      if (!eventh.includes(`${googleQ}`)) {
         eventh = `${((googleQ ? 1 : 2))}`;
      }
      for (let t = 0; t < 1; t++) {
         forwardD += "2";
      }
      if (googleQ && eventh.length == 5) {
         googleQ = forwardD == String.fromCharCode(105,0) || 65 < orangeS.size;
      }
          let yingM = 1.0;
          let hoveru = String.fromCharCode(100,95,49,95,108,111,116,116,105,101,105,116,101,109,0);
          let layoutt = 5;
         googleQ = forwardD == String.fromCharCode(86,0);
         yingM -= parseFloat(`${3 << (Math.min(1, Math.abs(layoutt)))}`);
         hoveru += `${hoveru.length / 1}`;
         layoutt %= Math.max(layoutt, 3);
         eventh += `${(orangeS.size | (googleQ ? 2 : 1))}`;
      whistleW += parseFloat(`${1}`);
      return;

   for (let b = 0; b < 2; b++) {
      mapbufferF %= Math.max(2, 5);
   }
   let overlayf = 4969934 <= shirtv.size;
   do {
      shirtv = new Map([[feedbackt, feedbackt.length ^ libjsinspectorx.length]]);
      if (overlayf) {
         break;
      }
   } while (((1 * shirtv.size) >= 2 && 1 >= (shirtv.size * feedbackt.length)) && overlayf);
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

      mapbufferF -= leftS % 2;
   let modals = mapbufferF <= 9409595;
   do {
       let drag5 = 0.0;
       let filterK = String.fromCharCode(110,95,50,95,111,118,101,114,108,97,112,0);
       let righty: Array<any> = [400, 234, 191];
      if ((drag5 * 4.70) >= 1.98) {
         drag5 -= righty.length % (Math.max(filterK.length, 4));
      }
         filterK += `${filterK.length / 2}`;
          let taiwanm = String.fromCharCode(106,95,52,55,95,111,119,110,108,111,97,100,0);
          let libavdeviceI = 3;
         filterK += `${filterK.length | 3}`;
         taiwanm = "3";
         libavdeviceI += libavdeviceI << (Math.min(Math.abs(2), 1));
          let upgrade1 = false;
         filterK += `${(1 + (upgrade1 ? 1 : 2))}`;
         filterK = "1";
          let malaysia7 = true;
          let football_ = String.fromCharCode(113,95,57,95,115,116,97,114,116,99,111,100,101,0);
          let vietnamN = String.fromCharCode(121,95,57,53,95,100,102,99,116,0);
         drag5 -= righty.length ^ 3;
         malaysia7 = football_.endsWith(`${malaysia7}`);
         football_ += `${((malaysia7 ? 1 : 1) | football_.length)}`;
         vietnamN = "2";
         filterK = `${(String.fromCharCode(74,0) == filterK ? parseInt(`${drag5}`) : filterK.length)}`;
         drag5 *= 1;
      let collectionG = drag5 >= 8686584.0;
      do {
          let rooms = String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,104,95,56,56,0);
          let humidity8 = String.fromCharCode(108,111,99,107,105,110,103,95,110,95,57,52,0);
          let recommendation_ = 5;
         drag5 += humidity8.length;
         rooms += "1";
         humidity8 = `${rooms.length}`;
         recommendation_ *= rooms.length;
         if (collectionG) {
            break;
         }
      } while (collectionG && (righty.length > parseInt(`${drag5}`)));
      mapbufferF -= ewardedE.length & 3;
      if (modals) {
         break;
      }
   } while (modals && (libjsinspectorx.length > 3));
    const appURL = `weixin://send?text=${message}`;

   while (!Array.from(shirtv.values()).includes(mapbufferF)) {
      mapbufferF -= libjsinspectorx.length >> (Math.min(Math.abs(3), 3));
      break;
   }
      mapbufferF |= parseInt(`${placementW}`) + 3;
    

      libjsinspectorx += `${(String.fromCharCode(117,0) == libjsinspectorx ? leftS : libjsinspectorx.length)}`;
      o_title1.push(feedbackt.length << (Math.min(4, o_title1.length)));
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

      feedbackt += `${1 | w_unlockz.size}`;
   while ((o_title1.length >> (Math.min(Math.abs(4), 2))) == 3) {
      ewardedE.push(ewardedE.length);
      break;
   }
          

       let assist0 = true;
       let gradle9 = 1.0;
       let viewer8: Array<any> = [944, 974, 527];
         assist0 = (((!assist0 ? viewer8.length : 2) / (Math.max(viewer8.length, 8))) < 2);
      while (1.28 <= gradle9) {
          let mounting1 = 1.0;
          let editP: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,108,101,114,95,106,95,55,50,0),String.fromCharCode(108,115,112,102,0)], [String.fromCharCode(105,110,116,114,110,108,0),String.fromCharCode(108,95,53,95,115,116,97,114,116,105,110,103,0)], [String.fromCharCode(107,95,51,95,115,99,114,97,112,101,0),String.fromCharCode(114,95,52,51,95,112,104,105,0)]]);
         gradle9 += 3 | parseInt(`${mounting1}`);
         mounting1 /= Math.max(5, parseFloat(`${3 ^ editP.size}`));
         editP = new Map([[`${editP.size}`, editP.size]]);
         break;
      }
       let castU = false;
          let arrows = true;
         gradle9 -= (viewer8.length | (assist0 ? 3 : 5));
         arrows = arrows || arrows;
         gradle9 += (parseInt(`${gradle9}`) - (assist0 ? 2 : 5));
      for (let u = 0; u < 1; u++) {
         gradle9 -= ((castU ? 2 : 1) << (Math.min(5, Math.abs(2))));
      }
      if (5 > (viewer8.length - 2) || !castU) {
         viewer8.push(parseInt(`${gradle9}`) / 3);
      }
         assist0 = gradle9 <= 43.53;
       let dialogm = 3.0;
      whistleW *= parseFloat(`${feedbackt.length - 2}`);
   if ((w_unlockz.size % 1) > 3) {
      w_unlockz.set(`${placementW}`, parseInt(`${placementW}`));
   }
          Linking.openURL(appURL);
        } else {

   while (Array.from(w_unlockz.values()).includes(whistleW)) {
      whistleW -= parseFloat(`${mapbufferF}`);
      break;
   }
   while ((o_title1.length << (Math.min(4, ewardedE.length))) >= 1) {
      ewardedE = [feedbackt.length >> (Math.min(3, Math.abs(parseInt(`${placementW}`))))];
      break;
   }
          console.log("WeChat app not installed.");

   if ((ewardedE.length >> (Math.min(Math.abs(3), 4))) >= 5 && (w_unlockz.size >> (Math.min(Math.abs(3), 5))) >= 3) {
       let borderlessS = String.fromCharCode(112,95,57,57,95,115,117,98,115,116,97,116,101,0);
       let reducerq = false;
       let backgrounde = String.fromCharCode(102,97,105,108,115,0);
       let libfbd = String.fromCharCode(98,95,55,56,0);
       let topicG = String.fromCharCode(118,97,114,105,110,116,95,122,95,57,55,0);
         borderlessS = "3";
      let scoreF = topicG.length <= 8342600;
      do {
          let animationa: Map<any, any> = new Map([[String.fromCharCode(113,95,49,49,95,112,97,115,116,101,0),false ], [String.fromCharCode(103,95,56,54,95,111,112,116,105,111,110,97,108,115,0),false ]]);
          let dialog0 = String.fromCharCode(112,114,101,102,105,120,101,100,0);
         topicG += "3";
         animationa = new Map([[`${animationa.size}`, (String.fromCharCode(115,0) == dialog0 ? dialog0.length : animationa.size)]]);
         if (scoreF) {
            break;
         }
      } while (scoreF && (backgrounde.length >= 1 || topicG != String.fromCharCode(78,0)));
      let filex = String.fromCharCode(56,113,116,52,55,57,117,51,57,0) == topicG;
      do {
         topicG += `${((reducerq ? 4 : 3) % 3)}`;
         if (filex) {
            break;
         }
      } while (filex && (!topicG.includes(libfbd)));
          let ewardedt = String.fromCharCode(97,114,99,104,105,118,101,100,95,120,95,54,52,0);
          let singapore4: Array<any> = [697, 183];
         backgrounde += `${ewardedt.length | singapore4.length}`;
      while (2 == topicG.length) {
          let halfC = 2;
          let less3 = String.fromCharCode(98,95,50,55,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,0);
          let spect = true;
          let latnN = true;
          let actionT = true;
         topicG = `${3 & topicG.length}`;
         halfC -= 1 ^ halfC;
         less3 = `${((spect ? 1 : 1) % 2)}`;
         spect = halfC > 30;
         latnN = !spect || latnN;
         actionT = spect && !latnN;
         break;
      }
       let filterH: Map<any, any> = new Map([[String.fromCharCode(116,119,105,116,116,101,114,0),702], [String.fromCharCode(111,108,108,101,99,116,105,111,110,115,0),821], [String.fromCharCode(117,98,115,99,114,105,98,101,114,0),670]]);
      for (let o = 0; o < 3; o++) {
         borderlessS += `${((reducerq ? 3 : 1))}`;
      }
      let vignetteq = 8591770 <= filterH.size;
      do {
          let y_imageN: Array<any> = [798, 103, 154];
         filterH.set(backgrounde, libfbd.length);
         y_imageN.push(y_imageN.length * y_imageN.length);
         if (vignetteq) {
            break;
         }
      } while (((borderlessS.length >> (Math.min(Math.abs(4), 2))) <= 3) && vignetteq);
      while (reducerq) {
         reducerq = backgrounde == borderlessS;
         break;
      }
      let overlayF = reducerq ? !reducerq : reducerq;
      do {
         reducerq = !topicG.includes(`${reducerq}`);
         if (overlayF) {
            break;
         }
      } while (overlayF && (1 == (4 & filterH.size)));
         reducerq = topicG.length < borderlessS.length;
       let libcxxcomponentsr: Array<any> = [131, 598];
       let interstitialM: Array<any> = [272, 162];
      for (let k = 0; k < 1; k++) {
         borderlessS += `${interstitialM.length % (Math.max(backgrounde.length, 1))}`;
      }
       let ballg = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,0);
      let graphicsJ = libfbd.length >= 6901125;
      do {
          let libhermesu = 1.0;
         libfbd += `${ballg.length - filterH.size}`;
         libhermesu /= Math.max(1, 3);
         if (graphicsJ) {
            break;
         }
      } while ((libfbd.startsWith(`${backgrounde.length}`)) && graphicsJ);
      w_unlockz = new Map([[feedbackt, ((reducerq ? 1 : 4) * feedbackt.length)]]);
   }
      placementW += parseFloat(`${mapbufferF * 3}`);
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let small0: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,97,114,95,118,95,53,55,0),680], [String.fromCharCode(117,112,99,111,109,105,110,103,95,54,95,49,53,0),662], [String.fromCharCode(109,97,105,108,95,114,95,54,56,0),130]]);
    let roundQ = String.fromCharCode(121,95,50,95,100,111,103,0);
    let armvaf: Map<any, any> = new Map([[String.fromCharCode(99,95,55,54,95,116,101,114,109,105,110,97,108,0),59], [String.fromCharCode(112,95,50,56,95,119,104,105,116,101,108,105,115,116,101,100,0),253], [String.fromCharCode(120,95,56,54,95,115,112,101,114,97,116,111,114,0),359]]);
    let sideI = String.fromCharCode(108,95,54,52,95,115,105,112,114,100,97,116,97,0);
    let fadfdeebbbfdabbbabdadfaaddaaG = 0;
    let modityr = String.fromCharCode(100,95,57,53,95,97,114,114,97,121,115,105,122,101,0);
    let friendsc = String.fromCharCode(116,101,120,116,98,101,0);
   for (let m = 0; m < 2; m++) {
      modityr += `${1 & sideI.length}`;
   }
   while (sideI.length == 1) {
       let regengG = 4;
       let heartp = 2.0;
         regengG -= parseInt(`${heartp}`);
      while (heartp < 5.72) {
          let shirt3: Array<any> = [127, 758, 482];
          let matchp = 4.0;
         heartp *= 3;
         shirt3 = [3];
         matchp += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${matchp}`)), 1))}`);
         break;
      }
      let zhubok = regengG >= 9045017;
      do {
         regengG %= Math.max(1, 3);
         if (zhubok) {
            break;
         }
      } while (zhubok && ((1 ^ regengG) == 2 || (regengG % 1) == 5));
         heartp *= 2 & parseInt(`${heartp}`);
      for (let i = 0; i < 3; i++) {
         regengG &= regengG;
      }
      let store1 = heartp >= 9144774.0;
      do {
         heartp *= regengG;
         if (store1) {
            break;
         }
      } while (store1 && (2 < regengG));
      sideI += `${sideI.length}`;
      break;
   }

    if (userState.userToken == "") {

      modityr = `${fadfdeebbbfdabbbabdadfaaddaaG}`;
      small0 = new Map([[modityr, fadfdeebbbfdabbbabdadfaaddaaG + modityr.length]]);
      dispatch(showLoginAction());

      fadfdeebbbfdabbbabdadfaaddaaG *= sideI.length;
   if (2 < (3 >> (Math.min(3, roundQ.length))) && (roundQ.length >> (Math.min(Math.abs(3), 3))) < 2) {
       let actionsg = 4.0;
         actionsg *= parseInt(`${actionsg}`) % 1;
      let accepted5 = 9712524.0 <= actionsg;
      do {
         actionsg *= parseInt(`${actionsg}`);
         if (accepted5) {
            break;
         }
      } while (accepted5 && (actionsg <= 4.15));
      let dropdowng = actionsg <= 6742396.0;
      do {
         actionsg /= Math.max(1, 2);
         if (dropdowng) {
            break;
         }
      } while ((1.43 >= (1.79 - actionsg) && (1.79 * actionsg) >= 4.14) && dropdowng);
      roundQ = `${(roundQ == String.fromCharCode(69,0) ? sideI.length : roundQ.length)}`;
   }
      return;
    }
    try {

   while (sideI == String.fromCharCode(105,0)) {
      roundQ = `${2 ^ armvaf.size}`;
      break;
   }
   for (let c = 0; c < 1; c++) {
      friendsc += `${friendsc.length >> (Math.min(5, modityr.length))}`;
   }
      const inviteParam = userState.userReferralCode + userState.userName;

       let crown7: Array<any> = [String.fromCharCode(117,110,107,101,121,101,100,95,98,95,53,57,0), String.fromCharCode(117,95,50,53,95,113,99,101,108,112,100,97,116,97,0)];
       let videojsU = String.fromCharCode(109,111,114,112,104,101,100,95,121,95,57,0);
       let orangeG = false;
         crown7.push((videojsU == String.fromCharCode(109,0) ? videojsU.length : (orangeG ? 5 : 4)));
       let mbbannerz: Map<any, any> = new Map([[String.fromCharCode(116,95,51,52,95,115,116,114,114,101,115,101,116,0),false ], [String.fromCharCode(114,97,110,107,115,95,56,95,49,53,0),false ]]);
      while (!orangeG) {
          let short__aw = String.fromCharCode(115,112,105,110,110,105,110,103,0);
         orangeG = 44 > videojsU.length;
         short__aw += `${short__aw.length}`;
         break;
      }
         videojsU = `${mbbannerz.size << (Math.min(crown7.length, 1))}`;
          let runtimes = 0;
          let libavformate = true;
         crown7 = [2];
         runtimes ^= 1;
         libavformate = runtimes >= 48;
      let green7 = mbbannerz.size <= 7616443;
      do {
         mbbannerz = new Map([[videojsU, ((orangeG ? 3 : 3) + videojsU.length)]]);
         if (green7) {
            break;
         }
      } while (green7 && (3 == (mbbannerz.size >> (Math.min(Math.abs(2), 3))) && mbbannerz.size == 2));
         mbbannerz.set(`${orangeG}`, ((orangeG ? 2 : 2) + videojsU.length));
          let bottomK = String.fromCharCode(114,97,110,100,111,109,110,101,115,115,95,102,95,51,52,0);
          let debugU = 3;
          let stationsO = String.fromCharCode(99,111,109,112,97,114,97,98,108,101,95,101,95,49,57,0);
         crown7.push(debugU * stationsO.length);
         bottomK += `${bottomK.length}`;
         debugU += 1;
          let chinasamej = String.fromCharCode(119,95,55,49,0);
          let xadsdk9 = false;
          let sharea = String.fromCharCode(109,117,110,109,97,112,95,54,95,54,55,0);
         videojsU = `${videojsU.length}`;
         chinasamej += `${(sharea == String.fromCharCode(86,0) ? sharea.length : (xadsdk9 ? 5 : 2))}`;
         xadsdk9 = !xadsdk9;
      friendsc = `${armvaf.size ^ 1}`;
      sideI = `${sideI.length}`;

      const Buffer = require("buffer").Buffer;

      fadfdeebbbfdabbbabdadfaaddaaG /= Math.max(3, friendsc.length | roundQ.length);
   if (!modityr.startsWith(`${armvaf.size}`)) {
      armvaf = new Map([[`${small0.size}`, armvaf.size]]);
   }
      let encodedAuth = new Buffer(inviteParam).toString("base64");

   if (1 >= armvaf.size) {
       let belly: Array<any> = [296, 233, 474];
       let dropdownX = String.fromCharCode(116,95,48,95,114,101,115,111,117,114,99,101,0);
         dropdownX = `${(String.fromCharCode(76,0) == dropdownX ? belly.length : dropdownX.length)}`;
       let watchI = String.fromCharCode(120,95,53,48,0);
       let fulld = String.fromCharCode(102,95,54,51,95,100,101,118,105,99,101,115,0);
       let langU = 1;
      let analyticsT = 9325922 <= belly.length;
      do {
         belly.push(belly.length);
         if (analyticsT) {
            break;
         }
      } while ((belly.length > 5) && analyticsT);
          let friendsw = String.fromCharCode(114,101,97,100,121,95,104,95,49,54,0);
          let klevina = String.fromCharCode(100,101,115,105,114,101,100,95,112,95,57,54,0);
         dropdownX = `${2 << (Math.min(2, fulld.length))}`;
         friendsw = `${klevina.length}`;
         klevina += `${friendsw.length}`;
          let detailsX = String.fromCharCode(103,97,115,95,103,95,57,49,0);
          let componentx = 5.0;
         watchI = `${belly.length}`;
         detailsX += `${(String.fromCharCode(51,0) == detailsX ? parseInt(`${componentx}`) : detailsX.length)}`;
         componentx -= detailsX.length ^ 2;
      armvaf.set(dropdownX, 3 | belly.length);
   }
   for (let f = 0; f < 1; f++) {
       let libruntimeexecutorM = String.fromCharCode(119,95,54,52,95,108,105,98,106,112,101,103,116,117,114,98,111,0);
       let blackw = String.fromCharCode(112,108,117,114,97,108,115,0);
       let libzeus5: Array<any> = [451, 406];
       let dialogG = 3.0;
      while (libruntimeexecutorM.length <= 2) {
         libruntimeexecutorM += `${parseInt(`${dialogG}`)}`;
         break;
      }
      if ((blackw.length | 1) < 4 && (blackw.length / (Math.max(7, dialogG))) < 2.83) {
          let weibo5 = 3;
         blackw += "3";
         weibo5 %= Math.max(5, weibo5);
      }
         libruntimeexecutorM += `${parseInt(`${dialogG}`) / (Math.max(libzeus5.length, 9))}`;
         dialogG /= Math.max(blackw.length, 2);
       let templateprocessorf = 0.0;
       let thumbnailr = 2.0;
      for (let h = 0; h < 2; h++) {
         thumbnailr /= Math.max(5, libzeus5.length);
      }
         libruntimeexecutorM += `${(blackw == String.fromCharCode(67,0) ? blackw.length : libzeus5.length)}`;
          let telemetrye = String.fromCharCode(113,95,57,95,115,97,116,105,115,102,105,101,100,0);
          let a_unlockJ: Array<any> = [633, 918, 92];
          let skip8 = 3.0;
         dialogG += parseInt(`${skip8}`);
         telemetrye += `${a_unlockJ.length & telemetrye.length}`;
         a_unlockJ = [a_unlockJ.length - 1];
         skip8 *= parseFloat(`${1}`);
         libzeus5.push(parseInt(`${dialogG}`));
          let becomec: Array<any> = [415, 842, 826];
          let klevind = 1.0;
         templateprocessorf /= Math.max(1, parseInt(`${klevind}`) / (Math.max(libruntimeexecutorM.length, 5)));
         becomec.push(3);
         klevind += 3;
      while (blackw != String.fromCharCode(102,0) || libruntimeexecutorM == String.fromCharCode(52,0)) {
          let specr = String.fromCharCode(97,95,57,56,95,114,107,109,112,112,0);
          let spinnerp = String.fromCharCode(104,95,57,48,95,109,101,109,110,114,0);
         libruntimeexecutorM += `${libruntimeexecutorM.length}`;
         specr += `${spinnerp.length}`;
         spinnerp = `${3 << (Math.min(3, specr.length))}`;
         break;
      }
      if (1 <= (parseInt(`${templateprocessorf}`) / (Math.max(blackw.length, 8)))) {
          let memberk = String.fromCharCode(99,114,111,115,115,104,97,105,114,115,0);
          let stringq: Array<any> = [988, 402];
          let progressm: Array<any> = [341, 943, 62];
         blackw += `${stringq.length}`;
         memberk = `${(String.fromCharCode(90,0) == memberk ? memberk.length : progressm.length)}`;
         stringq.push(memberk.length);
         progressm = [memberk.length];
      }
      fadfdeebbbfdabbbabdadfaaddaaG *= parseInt(`${dialogG}`);
   }

      

   while (fadfdeebbbfdabbbabdadfaaddaaG <= 2) {
      small0 = new Map([[modityr, (roundQ == String.fromCharCode(111,0) ? roundQ.length : modityr.length)]]);
      break;
   }
      sideI = "3";

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

      friendsc += `${friendsc.length}`;
      sideI += `${sideI.length + fadfdeebbbfdabbbabdadfaaddaaG}`;

      const result = await Share.share({
        message: msg,
      });

   let bootsplashF = sideI.length <= 7922074;
   do {
      sideI = `${sideI.length}`;
      if (bootsplashF) {
         break;
      }
   } while (bootsplashF && (1 >= (2 << (Math.min(1, sideI.length))) && (sideI.length << (Math.min(4, Math.abs(armvaf.size)))) >= 2));
   let uimanagerl = fadfdeebbbfdabbbabdadfaaddaaG <= 7604003;
   do {
      fadfdeebbbfdabbbabdadfaaddaaG *= 1;
      if (uimanagerl) {
         break;
      }
   } while (uimanagerl && (!sideI.endsWith(`${fadfdeebbbfdabbbabdadfaaddaaG}`)));
      if (result.action === Share.sharedAction) {

       let gmail0 = String.fromCharCode(118,95,57,53,95,114,101,97,100,108,110,0);
       let hooksf = 3.0;
       let libswscalef: Map<any, any> = new Map([[String.fromCharCode(115,101,97,108,95,50,95,57,48,0),758], [String.fromCharCode(111,95,56,56,95,112,101,114,115,105,115,116,97,110,116,0),740], [String.fromCharCode(99,114,108,102,0),257]]);
         gmail0 += `${3 | libswscalef.size}`;
      let styles = hooksf >= 6235742.0;
      do {
          let verticalp = String.fromCharCode(102,112,115,95,103,95,55,56,0);
          let clock6 = 0.0;
          let rulesY = String.fromCharCode(104,95,55,50,95,108,112,99,109,0);
          let orientationW = 2;
          let sellV: Array<any> = [441, 671];
         hooksf *= parseFloat(`${sellV.length}`);
         verticalp = `${parseInt(`${clock6}`)}`;
         clock6 += parseFloat(`${verticalp.length << (Math.min(3, Math.abs(parseInt(`${clock6}`))))}`);
         rulesY = "3";
         orientationW >>= Math.min(3, Math.abs(parseInt(`${clock6}`)));
         sellV.push(parseInt(`${clock6}`) ^ 3);
         if (styles) {
            break;
         }
      } while ((Array.from(libswscalef.values()).includes(hooksf)) && styles);
      while (5.1 >= (3.67 * hooksf) || 4 >= (libswscalef.size << (Math.min(Math.abs(2), 4)))) {
         hooksf -= parseFloat(`${gmail0.length & 1}`);
         break;
      }
         hooksf -= parseFloat(`${1 | gmail0.length}`);
         libswscalef.set(`${hooksf}`, 2 >> (Math.min(1, Math.abs(parseInt(`${hooksf}`)))));
      let successE = 6578507 <= libswscalef.size;
      do {
          let fulln = String.fromCharCode(99,97,118,115,118,105,100,101,111,95,107,95,52,48,0);
         libswscalef.set(`${hooksf}`, libswscalef.size >> (Math.min(5, Math.abs(parseInt(`${hooksf}`)))));
         fulln = `${(fulln == String.fromCharCode(121,0) ? fulln.length : fulln.length)}`;
         if (successE) {
            break;
         }
      } while ((5.85 <= (5.24 * hooksf)) && successE);
         libswscalef.set(gmail0, parseInt(`${hooksf}`) >> (Math.min(Math.abs(2), 1)));
         hooksf /= Math.max(3, parseFloat(`${parseInt(`${hooksf}`)}`));
         libswscalef.set(gmail0, 1);
      modityr = "2";
   for (let d = 0; d < 3; d++) {
       let libreactperfloggerjni2 = true;
       let grey9: Map<any, any> = new Map([[String.fromCharCode(101,121,98,111,97,114,100,95,48,95,53,55,0),796], [String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,50,95,52,50,0),747], [String.fromCharCode(115,104,97,114,101,115,95,118,95,54,53,0),38]]);
       let spinnerM = 4.0;
       let morep = 5.0;
       let downloadq = 2.0;
         spinnerM += parseInt(`${downloadq}`) - 2;
          let tramini_ = 4.0;
         grey9.set(`${tramini_}`, 3 | parseInt(`${morep}`));
         downloadq -= parseFloat(`${parseInt(`${spinnerM}`) + 1}`);
         libreactperfloggerjni2 = downloadq > 45.44;
      for (let u = 0; u < 3; u++) {
         grey9 = new Map([[`${downloadq}`, 2 >> (Math.min(Math.abs(parseInt(`${spinnerM}`)), 2))]]);
      }
      if (3.44 <= (3.54 - morep) || 3.54 <= (spinnerM / (Math.max(morep, 10)))) {
          let viewerK = String.fromCharCode(103,97,105,110,115,95,97,95,55,54,0);
         morep -= (parseFloat(`${3 | (libreactperfloggerjni2 ? 4 : 2)}`));
         viewerK = "2";
      }
      if (libreactperfloggerjni2 || (downloadq / 1.58) == 5.27) {
         downloadq += parseFloat(`${1 - parseInt(`${morep}`)}`);
      }
       let verticala: Array<any> = [String.fromCharCode(114,101,100,97,99,116,95,118,95,57,54,0), String.fromCharCode(97,95,56,55,95,97,108,97,114,109,0), String.fromCharCode(99,95,52,57,95,101,114,114,109,115,103,0)];
       let playt: Array<any> = [605, 380, 738];
      if (!Array.from(grey9.values()).includes(spinnerM)) {
         spinnerM *= grey9.size;
      }
      for (let n = 0; n < 1; n++) {
          let router2 = 4;
          let libpangleflippedH = 4;
          let editL = String.fromCharCode(98,112,115,0);
          let phone3 = 5;
         libreactperfloggerjni2 = editL.length < phone3;
         router2 *= libpangleflippedH ^ router2;
         libpangleflippedH &= router2 / (Math.max(1, 10));
         editL = `${router2 * 3}`;
         phone3 += router2;
      }
      for (let j = 0; j < 3; j++) {
         playt.push(3);
      }
         verticala.push(parseInt(`${spinnerM}`) | parseInt(`${downloadq}`));
         verticala.push((parseInt(`${morep}`) | (libreactperfloggerjni2 ? 5 : 1)));
         playt.push(verticala.length & 1);
         spinnerM /= Math.max(5, parseInt(`${downloadq}`) % 1);
      roundQ += "1";
   }
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

      friendsc += `${(roundQ == String.fromCharCode(78,0) ? small0.size : roundQ.length)}`;
   for (let p = 0; p < 3; p++) {
      modityr = `${small0.size}`;
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
            source={require("@static/images/zhuboLightLess.png")}
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
                source={require("@static/images/vip/greenLibimagepipelineHolder.png")}
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
                source={require("@static/images/invite/becomeAnner.png")}
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
                  source={require("@static/images/invite/fieldGraphicsAuto_qr.png")}
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
                source={require("@static/images/invite/yys_xadsdk_libcrashsdk.png")}
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
            if (userState.userToken == "") {
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
              if (userState.userToken == "") {
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
            if (userState.userToken == "") {
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
