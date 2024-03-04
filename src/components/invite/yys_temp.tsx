

class CombineHandlerHooks {
   static stationArmva = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { yys_MinivodPangle } from "../../../yys_mimo_vignette";
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

   const [isDialogOpen, setIsDialogOpen] = useState(false);

   const toggleOverlay = () => {
      let feedbackJ: Map<any, any> = new Map([[String.fromCharCode(100, 95, 52, 52, 95, 101, 97, 115, 101, 0), String.fromCharCode(115, 105, 108, 101, 110, 116, 108, 121, 95, 117, 95, 52, 0)], [String.fromCharCode(104, 95, 52, 49, 95, 112, 98, 108, 111, 99, 107, 115, 0), String.fromCharCode(100, 117, 114, 103, 101, 114, 95, 118, 95, 54, 52, 0)]]);
      let downloading5: Array<any> = [188, 243];
      let modeX = String.fromCharCode(102, 117, 116, 101, 120, 95, 109, 95, 51, 54, 0);
      let configure2: Array<any> = [272, 840];
      let macauY = String.fromCharCode(119, 95, 51, 51, 95, 97, 100, 106, 117, 115, 116, 109, 101, 110, 116, 115, 0);
      let related7: Map<any, any> = new Map([[String.fromCharCode(114, 101, 97, 99, 116, 105, 111, 110, 115, 95, 113, 95, 49, 56, 0), 238], [String.fromCharCode(111, 95, 50, 95, 116, 120, 116, 111, 98, 106, 0), 132], [String.fromCharCode(108, 95, 49, 50, 95, 100, 105, 115, 107, 0), 750]]);
      let placeholderZ = 5.0;
      let football2: Map<any, any> = new Map([[String.fromCharCode(117, 95, 57, 49, 95, 115, 113, 108, 105, 116, 101, 114, 101, 98, 97, 115, 101, 114, 0), 670], [String.fromCharCode(119, 114, 97, 112, 95, 50, 95, 57, 55, 0), 576], [String.fromCharCode(103, 95, 52, 55, 95, 109, 118, 99, 111, 109, 112, 111, 110, 101, 110, 116, 0), 352]]);
      let anytimec = 5.0;
      let navigation9 = String.fromCharCode(97, 98, 115, 108, 95, 56, 95, 57, 54, 0);
      let closeE = 4.0;
      downloading5 = [1];
      if (1 > (1 << (Math.min(1, configure2.length))) || 1 > (modeX.length << (Math.min(2, configure2.length)))) {
         configure2 = [macauY.length];
      }
      let emojir = String.fromCharCode(121, 95, 50, 95, 97, 109, 117, 108, 116, 105, 0);
      let assiste = 1.0;
      if (emojir.length >= parseInt(`${assiste}`)) {
         let libpangleflippedM = String.fromCharCode(101, 118, 116, 97, 103, 95, 115, 95, 50, 49, 0);
         let googleB = 5.0;
         let pressureG = 0.0;
         let taiwana: Map<any, any> = new Map([[String.fromCharCode(113, 95, 52, 51, 95, 111, 98, 106, 116, 120, 116, 0), false], [String.fromCharCode(119, 95, 52, 52, 95, 114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 0), true], [String.fromCharCode(119, 111, 114, 107, 101, 114, 95, 108, 95, 57, 53, 0), false]]);
         let selectY: Map<any, any> = new Map([[String.fromCharCode(119, 97, 118, 112, 97, 99, 107, 95, 110, 95, 49, 54, 0), true], [String.fromCharCode(117, 110, 114, 101, 102, 95, 122, 95, 50, 54, 0), false]]);
         assiste /= Math.max(selectY.size, 5);
         libpangleflippedM += "1";
         googleB *= (parseFloat(`${String.fromCharCode(73, 0) == libpangleflippedM ? libpangleflippedM.length : taiwana.size}`));
         pressureG *= parseFloat(`${parseInt(`${googleB}`)}`);
         taiwana.set(libpangleflippedM, libpangleflippedM.length / 1);
         selectY.set(`${pressureG}`, 1);
      }
      emojir = `${parseInt(`${assiste}`)}`;
      assiste += 1 % (Math.max(4, parseInt(`${assiste}`)));
      let libzeusP = 5665880.0 <= assiste;
      do {
         assiste *= 3;
         if (libzeusP) {
            break;
         }
      } while ((!emojir.includes(`${assiste}`)) && libzeusP);
      assiste -= 3;
      if (2.60 > (assiste - 1.78)) {
         let source0 = String.fromCharCode(115, 95, 55, 48, 95, 99, 111, 109, 98, 105, 110, 101, 100, 0);
         let green8 = 1;
         let fileq = 2.0;
         emojir += "3";
         source0 += `${parseInt(`${fileq}`)}`;
         green8 *= source0.length << (Math.min(Math.abs(3), 3));
         fileq += 1;
      }
      configure2.push(1);
      while (3 >= (feedbackJ.size | 3) || (feedbackJ.size | related7.size) >= 3) {
         related7.set(`${configure2.length}`, 3);
         break;
      }
      let stepR = football2.size >= 8167469;
      do {
         football2.set(`${configure2.length}`, 1 & football2.size);
         if (stepR) {
            break;
         }
      } while (stepR && (football2.size > macauY.length));
      while ((3 ^ modeX.length) <= 4) {
         modeX += `${feedbackJ.size}`;
         break;
      }
      feedbackJ.set(`${configure2.length}`, feedbackJ.size % (Math.max(2, configure2.length)));
      downloading5.push(macauY.length >> (Math.min(Math.abs(3), 4)));
      while (feedbackJ.size > navigation9.length) {
         feedbackJ.set(`${placeholderZ}`, parseInt(`${placeholderZ}`) + 3);
         break;
      }
      if (navigation9.startsWith(`${football2.size}`)) {
         football2 = new Map([[`${related7.size}`, parseInt(`${anytimec}`)]]);
      }
      let canvasX = navigation9 == String.fromCharCode(111, 57, 121, 55, 121, 57, 98, 102, 0);
      do {
         navigation9 = `${2 >> (Math.min(5, Math.abs(parseInt(`${anytimec}`))))}`;
         if (canvasX) {
            break;
         }
      } while (canvasX && (3 == (2 + navigation9.length) || 4 == (navigation9.length + 2)));
      if (!Array.from(football2.keys()).includes(`${configure2.length}`)) {
         configure2.push((modeX == String.fromCharCode(89, 0) ? modeX.length : parseInt(`${placeholderZ}`)));
      }
      for (let t = 0; t < 1; t++) {
         anytimec -= parseFloat(`${3 / (Math.max(4, configure2.length))}`);
      }
      while (Array.from(football2.keys()).includes(`${related7.size}`)) {
         football2 = new Map([[`${configure2.length}`, configure2.length]]);
         break;
      }
      configure2 = [navigation9.length << (Math.min(Math.abs(1), 1))];
      let vignette8 = related7.size <= 9455492;
      do {
         let indicatorR = String.fromCharCode(122, 95, 49, 49, 95, 111, 119, 110, 101, 114, 115, 104, 105, 112, 0);
         let libfollyM = String.fromCharCode(99, 111, 110, 118, 101, 120, 95, 48, 95, 53, 56, 0);
         let ajaxU = 4.0;
         indicatorR = `${(libfollyM == String.fromCharCode(73, 0) ? parseInt(`${ajaxU}`) : libfollyM.length)}`;
         let agreementC = String.fromCharCode(113, 95, 55, 51, 95, 100, 105, 115, 112, 111, 115, 97, 98, 108, 101, 115, 0);
         indicatorR += `${agreementC.length}`;
         let mbnativeq: Map<any, any> = new Map([[String.fromCharCode(111, 95, 52, 50, 95, 105, 108, 115, 116, 0), 154], [String.fromCharCode(115, 117, 98, 115, 116, 97, 116, 101, 95, 55, 95, 55, 55, 0), 679]]);
         libfollyM += `${mbnativeq.size / (Math.max(2, indicatorR.length))}`;
         ajaxU -= parseInt(`${ajaxU}`);
         libfollyM = `${indicatorR.length + libfollyM.length}`;
         while (indicatorR.length > 4 && 4 > libfollyM.length) {
            libfollyM = `${parseInt(`${ajaxU}`)}`;
            break;
         }
         libfollyM += "3";
         if (2.68 == ajaxU) {
            libfollyM += "1";
         }
         related7 = new Map([[indicatorR, indicatorR.length & macauY.length]]);
         if (vignette8) {
            break;
         }
      } while ((related7.size >= 4) && vignette8);
      for (let f = 0; f < 3; f++) {
         let customH: Array<any> = [717, 789, 801];
         for (let i = 0; i < 1; i++) {
            let downloaderl = true;
            let suggestionx = 2.0;
            let gpayC = String.fromCharCode(112, 97, 99, 107, 97, 103, 101, 95, 103, 95, 53, 55, 0);
            let traminiE = 2;
            customH.push(parseInt(`${suggestionx}`) >> (Math.min(gpayC.length, 5)));
            downloaderl = 90 > traminiE;
            suggestionx /= Math.max(5, 3 * traminiE);
            gpayC += `${traminiE}`;
         }
         let greyI: Array<any> = [String.fromCharCode(107, 95, 57, 55, 95, 119, 111, 114, 107, 97, 114, 111, 117, 110, 100, 0), String.fromCharCode(117, 108, 112, 105, 110, 102, 111, 95, 103, 95, 57, 0), String.fromCharCode(99, 104, 117, 110, 107, 95, 104, 95, 51, 52, 0)];
         let latns: Array<any> = [196, 537, 850];
         customH.push(customH.length);
         greyI = [latns.length];
         latns.push(greyI.length);
         if ((customH.length % (Math.max(customH.length, 8))) >= 1 || (customH.length % (Math.max(1, customH.length))) >= 1) {
            customH.push(customH.length);
         }
         football2 = new Map([[`${anytimec}`, parseInt(`${anytimec}`)]]);
      }
      football2.set(macauY, (String.fromCharCode(48, 0) == macauY ? macauY.length : feedbackJ.size));

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
      let qnewsU = 4.0;
      let filej = String.fromCharCode(109, 95, 56, 95, 105, 100, 101, 110, 116, 105, 102, 121, 0);
      let sella: Map<any, any> = new Map([[String.fromCharCode(105, 95, 56, 55, 95, 115, 108, 111, 119, 109, 111, 100, 101, 0), 351], [String.fromCharCode(105, 95, 53, 95, 111, 103, 103, 101, 114, 0), 844]]);
      let roundj = 4.0;
      let change0 = String.fromCharCode(104, 95, 51, 57, 95, 117, 108, 97, 119, 0);
      let private_wdD = String.fromCharCode(107, 95, 57, 56, 95, 115, 117, 98, 109, 105, 116, 0);
      let selly = String.fromCharCode(99, 109, 111, 118, 101, 95, 50, 95, 55, 57, 0);
      let fadfdeebbbfdabbbabdadfaaddaaR = String.fromCharCode(99, 111, 118, 97, 108, 101, 110, 116, 95, 52, 95, 52, 51, 0);
      let photoA = 1.0;
      let encryptr = String.fromCharCode(101, 109, 111, 106, 105, 115, 95, 109, 95, 49, 0);
      let darkY = String.fromCharCode(116, 114, 117, 101, 104, 100, 95, 113, 95, 50, 56, 0);
      let theme4 = String.fromCharCode(100, 101, 97, 99, 116, 105, 118, 97, 116, 101, 95, 49, 95, 52, 48, 0);
      let serviceE: Array<any> = [254, 158];
      let redirectV = String.fromCharCode(100, 99, 97, 100, 99, 116, 95, 120, 95, 52, 53, 0);
      let typingx = String.fromCharCode(109, 101, 109, 111, 114, 121, 95, 57, 95, 55, 56, 0);
      for (let z = 0; z < 1; z++) {
         change0 = `${sella.size}`;
      }
      for (let w = 0; w < 1; w++) {
         let championT = 5;
         let rulesB = 3.0;
         let minivodM = 2.0;
         let scrollviewn = 0;
         championT ^= scrollviewn - parseInt(`${minivodM}`);
         let launchX = String.fromCharCode(107, 95, 52, 55, 95, 98, 97, 108, 97, 110, 99, 101, 100, 0);
         let constantsh = String.fromCharCode(104, 101, 97, 100, 115, 95, 119, 95, 49, 48, 48, 0);
         if (2.39 >= (minivodM + 1.93) || (parseInt(`${minivodM}`) + championT) >= 3) {
            minivodM *= parseFloat(`${scrollviewn & launchX.length}`);
         }
         constantsh = `${constantsh.length}`;
         let cancelL: Map<any, any> = new Map([[String.fromCharCode(114, 101, 113, 117, 105, 114, 101, 115, 95, 116, 95, 56, 56, 0), 298], [String.fromCharCode(100, 97, 98, 97, 115, 101, 95, 101, 95, 53, 48, 0), 126]]);
         let libavdevicex = String.fromCharCode(118, 95, 51, 57, 95, 100, 105, 118, 109, 111, 100, 0);
         let halfJ = true;
         cancelL.set(constantsh, (constantsh == String.fromCharCode(118, 0) ? championT : constantsh.length));
         libavdevicex += `${(libavdevicex.length - (halfJ ? 2 : 2))}`;
         halfJ = (((halfJ ? 25 : libavdevicex.length) / (Math.max(libavdevicex.length, 5))) >= 25);
         launchX = `${constantsh.length & championT}`;
         cancelL = new Map([[constantsh, constantsh.length - scrollviewn]]);
         let smallU = false;
         rulesB -= parseFloat(`${scrollviewn - parseInt(`${rulesB}`)}`);
         smallU = (smallU ? smallU : !smallU);
         minivodM += parseFloat(`${launchX.length}`);
         let mbnativeadvanced_ = false;
         let libmapbufferjnil = String.fromCharCode(101, 95, 56, 49, 95, 108, 105, 98, 116, 103, 118, 111, 105, 112, 0);
         championT ^= 2;
         mbnativeadvanced_ = libmapbufferjnil.length > 25;
         libmapbufferjnil = `${libmapbufferjnil.length & 1}`;
         let leaguea = minivodM <= 9574243.0;
         do {
            let footballs: Map<any, any> = new Map([[String.fromCharCode(100, 95, 52, 49, 95, 114, 101, 108, 111, 103, 105, 110, 0), 318], [String.fromCharCode(98, 95, 52, 95, 122, 112, 98, 105, 113, 117, 97, 100, 115, 0), 441], [String.fromCharCode(108, 95, 57, 0), 990]]);
            minivodM += parseFloat(`${scrollviewn}`);
            footballs = new Map([[`${footballs.size}`, 3 - footballs.size]]);
            if (leaguea) {
               break;
            }
         } while ((minivodM <= 1.35) && leaguea);
         qnewsU += private_wdD.length;
      }
      fadfdeebbbfdabbbabdadfaaddaaR += `${3 * parseInt(`${roundj}`)}`;

      if (userState.userToken == "") {

         fadfdeebbbfdabbbabdadfaaddaaR = `${parseInt(`${roundj}`)}`;
         if (change0.length < photoA) {
            let mappingE = String.fromCharCode(111, 95, 50, 49, 0);
            let libavfilter3 = String.fromCharCode(111, 119, 110, 101, 114, 95, 117, 95, 52, 57, 0);
            let rncoret = 4.0;
            let librrcf: Array<any> = [String.fromCharCode(122, 95, 49, 57, 95, 115, 105, 103, 116, 101, 114, 109, 0), String.fromCharCode(106, 95, 49, 49, 95, 100, 101, 118, 105, 100, 101, 0)];
            let overw = String.fromCharCode(99, 95, 56, 50, 95, 100, 117, 112, 108, 105, 99, 97, 116, 111, 114, 0);
            let downK = String.fromCharCode(102, 105, 101, 108, 95, 97, 95, 54, 54, 0);
            let pointB = String.fromCharCode(102, 95, 48, 95, 112, 114, 111, 120, 105, 101, 115, 0);
            mappingE += `${(String.fromCharCode(56, 0) == pointB ? librrcf.length : pointB.length)}`;
            downK = `${downK.length % 1}`;
            let verticalU = mappingE.length >= 6883942;
            do {
               let googleD = 5.0;
               let description_jA = 1.0;
               let suggestiont: Array<any> = [991, 546];
               let constantshZ = String.fromCharCode(114, 95, 57, 57, 95, 118, 112, 100, 115, 112, 0);
               let loadingP = String.fromCharCode(115, 95, 52, 57, 95, 100, 111, 119, 110, 108, 111, 97, 100, 101, 114, 0);
               mappingE += `${overw.length}`;
               googleD -= parseFloat(`${3}`);
               description_jA += parseFloat(`${parseInt(`${description_jA}`) | 1}`);
               suggestiont.push(suggestiont.length);
               constantshZ += `${3 >> (Math.min(Math.abs(parseInt(`${googleD}`)), 5))}`;
               loadingP += `${constantshZ.length + loadingP.length}`;
               if (verticalU) {
                  break;
               }
            } while ((3 < (parseInt(`${rncoret}`) / (Math.max(mappingE.length, 2))) || (rncoret / 4.53) < 1.11) && verticalU);
            let temperatureh = String.fromCharCode(100, 95, 55, 48, 0);
            overw += `${temperatureh.length}`;
            let configureX = temperatureh == String.fromCharCode(99, 55, 116, 0);
            do {
               let catalogi = true;
               let questh: Map<any, any> = new Map([[String.fromCharCode(113, 95, 50, 48, 95, 102, 111, 117, 114, 105, 101, 114, 0), 254], [String.fromCharCode(114, 95, 57, 53, 95, 103, 101, 110, 101, 114, 97, 116, 105, 110, 103, 0), 127], [String.fromCharCode(116, 111, 111, 108, 98, 111, 120, 95, 120, 95, 50, 48, 0), 819]]);
               let injuryx = false;
               let trashL = 1.0;
               let applicationI = String.fromCharCode(105, 95, 52, 52, 95, 99, 121, 99, 108, 101, 99, 108, 111, 99, 107, 0);
               temperatureh += `${questh.size | libavfilter3.length}`;
               catalogi = injuryx;
               questh.set(`${injuryx}`, 2);
               trashL += 3;
               applicationI = `${((injuryx ? 4 : 4) ^ parseInt(`${trashL}`))}`;
               if (configureX) {
                  break;
               }
            } while (configureX && (4 < (temperatureh.length << (Math.min(3, librrcf.length)))));
            let checkboxf = librrcf.length >= 7031641;
            do {
               let cricket2 = String.fromCharCode(99, 111, 109, 98, 105, 110, 101, 95, 53, 95, 50, 50, 0);
               let pingV = 3.0;
               let l_lock2: Map<any, any> = new Map([[String.fromCharCode(115, 95, 53, 48, 95, 104, 105, 103, 104, 108, 105, 103, 104, 116, 101, 114, 0), String.fromCharCode(114, 115, 112, 95, 106, 95, 49, 48, 0)], [String.fromCharCode(118, 95, 55, 53, 95, 112, 108, 117, 115, 0), String.fromCharCode(112, 114, 101, 102, 101, 116, 99, 104, 95, 121, 95, 49, 53, 0)]]);
               let modelsy = 5;
               let sigmobA = true;
               librrcf.push(temperatureh.length << (Math.min(3, Math.abs(modelsy))));
               cricket2 = `${l_lock2.size}`;
               pingV /= Math.max(2, 2);
               l_lock2 = new Map([[cricket2, parseInt(`${pingV}`)]]);
               modelsy *= (parseInt(`${pingV}`) << (Math.min(3, Math.abs((sigmobA ? 2 : 2)))));
               if (checkboxf) {
                  break;
               }
            } while ((librrcf.length >= parseInt(`${rncoret}`)) && checkboxf);
            for (let z = 0; z < 1; z++) {
               let verticaly = String.fromCharCode(101, 109, 98, 101, 100, 100, 105, 110, 103, 95, 122, 95, 50, 54, 0);
               overw = `${overw.length}`;
               verticaly = `${verticaly.length - 1}`;
            }
            let areag = String.fromCharCode(114, 48, 107, 50, 107, 0) == overw;
            do {
               overw += "3";
               if (areag) {
                  break;
               }
            } while (areag && (overw.startsWith(`${librrcf.length}`)));
            let gemfileZ = 5.0;
            let typesB = 0.0;
            overw += `${libavfilter3.length}`;
            gemfileZ -= parseFloat(`${2 * parseInt(`${typesB}`)}`);
            typesB *= parseFloat(`${1 / (Math.max(parseInt(`${gemfileZ}`), 10))}`);
            let runtimeg = 6377124.0 <= rncoret;
            do {
               rncoret += (String.fromCharCode(89, 0) == overw ? overw.length : librrcf.length);
               if (runtimeg) {
                  break;
               }
            } while (runtimeg && (4.20 == (rncoret / (Math.max(5.85, 4))) && (mappingE.length / (Math.max(2, 10))) == 4));
            librrcf = [3 + temperatureh.length];
            let libruntimeexecutorQ = String.fromCharCode(105, 95, 57, 52, 95, 117, 116, 102, 0);
            let stationsQ = String.fromCharCode(103, 101, 116, 120, 118, 97, 114, 95, 105, 95, 53, 49, 0);
            let username8 = String.fromCharCode(98, 95, 54, 49, 95, 109, 97, 103, 110, 105, 116, 117, 100, 101, 115, 0);
            mappingE += `${libruntimeexecutorQ.length}`;
            libruntimeexecutorQ += `${2 << (Math.min(1, stationsQ.length))}`;
            stationsQ = `${username8.length << (Math.min(5, stationsQ.length))}`;
            username8 = `${(String.fromCharCode(80, 0) == stationsQ ? username8.length : stationsQ.length)}`;
            let changeX = mappingE == String.fromCharCode(98, 110, 119, 116, 99, 0);
            do {
               let overZ = 5.0;
               mappingE = `${(String.fromCharCode(51, 0) == overw ? overw.length : libavfilter3.length)}`;
               overZ += parseFloat(`${1}`);
               if (changeX) {
                  break;
               }
            } while (changeX && (mappingE.startsWith(libavfilter3)));
            libavfilter3 += `${overw.length}`;
            let cancelK = String.fromCharCode(108, 95, 55, 52, 95, 115, 116, 97, 116, 101, 102, 117, 108, 0);
            rncoret /= Math.max(3, 1);
            cancelK += `${1 << (Math.min(3, cancelK.length))}`;
            photoA += 2 % (Math.max(7, parseInt(`${photoA}`)));
         }
         let infoM = qnewsU <= 9835589.0;
         do {
            let selectedw = true;
            let source5 = String.fromCharCode(108, 95, 49, 50, 95, 107, 101, 121, 101, 100, 0);
            let mappingw: Map<any, any> = new Map([[String.fromCharCode(103, 95, 56, 57, 95, 114, 112, 99, 115, 0), String.fromCharCode(110, 95, 54, 52, 95, 103, 110, 111, 0)], [String.fromCharCode(108, 95, 49, 48, 95, 105, 110, 104, 105, 98, 105, 116, 115, 0), String.fromCharCode(99, 95, 55, 50, 95, 117, 110, 100, 101, 114, 114, 117, 110, 0)], [String.fromCharCode(109, 95, 51, 51, 95, 110, 111, 114, 109, 97, 108, 105, 122, 101, 100, 0), String.fromCharCode(116, 111, 108, 111, 119, 101, 114, 95, 98, 95, 49, 48, 0)]]);
            let episodeU = 5.0;
            let headero: Map<any, any> = new Map([[String.fromCharCode(105, 95, 52, 48, 95, 105, 110, 115, 101, 110, 115, 105, 116, 105, 118, 101, 0), true], [String.fromCharCode(107, 109, 101, 97, 110, 115, 95, 112, 95, 56, 50, 0), true], [String.fromCharCode(97, 118, 103, 121, 95, 115, 95, 56, 48, 0), false]]);
            selectedw = headero.size <= 87;
            episodeU += 1;
            headero = new Map([[`${episodeU}`, parseInt(`${episodeU}`)]]);
            source5 = "3";
            let mutedn = source5 == String.fromCharCode(119, 110, 112, 104, 102, 50, 0);
            do {
               source5 = `${(String.fromCharCode(116, 0) == source5 ? source5.length : (selectedw ? 1 : 4))}`;
               if (mutedn) {
                  break;
               }
            } while (mutedn && (3 > source5.length));
            mappingw = new Map([[`${mappingw.size}`, mappingw.size % (Math.max(source5.length, 4))]]);
            for (let q = 0; q < 1; q++) {
               let selectionF = false;
               let nterstitialE = false;
               source5 += `${mappingw.size / (Math.max(3, source5.length))}`;
               selectionF = !selectionF && !nterstitialE;
               nterstitialE = (!nterstitialE ? !selectionF : nterstitialE);
            }
            let plash0: Array<any> = [717, 877];
            mappingw.set(`${selectedw}`, source5.length / 3);
            plash0 = [plash0.length * plash0.length];
            if (source5.startsWith(`${selectedw}`)) {
               source5 = `${1 & source5.length}`;
            }
            let plusB: Map<any, any> = new Map([[String.fromCharCode(108, 95, 51, 53, 95, 100, 100, 99, 116, 0), 729], [String.fromCharCode(115, 113, 117, 97, 114, 101, 115, 95, 100, 95, 51, 52, 0), 753], [String.fromCharCode(98, 105, 116, 118, 101, 99, 115, 95, 122, 95, 49, 56, 0), 241]]);
            let mnewse: Map<any, any> = new Map([[String.fromCharCode(100, 101, 113, 117, 111, 116, 101, 95, 105, 95, 57, 53, 0), 795], [String.fromCharCode(102, 97, 99, 116, 111, 114, 121, 95, 113, 95, 50, 54, 0), 297], [String.fromCharCode(104, 95, 56, 95, 118, 101, 114, 98, 97, 116, 105, 109, 0), 959]]);
            while (1 > (mappingw.size * mnewse.size) && (mappingw.size * mnewse.size) > 1) {
               mnewse = new Map([[`${mappingw.size}`, (mappingw.size / (Math.max(3, (selectedw ? 4 : 4))))]]);
               break;
            }
            qnewsU *= parseInt(`${roundj}`) ^ parseInt(`${qnewsU}`);
            if (infoM) {
               break;
            }
         } while ((filej.includes(`${qnewsU}`)) && infoM);
         dispatch(showLoginAction());

         if (!selly.endsWith(`${roundj}`)) {
            let cornerb = 0;
            let libreanimatedr = 3.0;
            while (libreanimatedr == cornerb) {
               cornerb |= parseInt(`${libreanimatedr}`) + cornerb;
               break;
            }
            while ((4.80 * libreanimatedr) <= 4.72) {
               cornerb *= 3;
               break;
            }
            let configuret = String.fromCharCode(103, 117, 105, 100, 101, 95, 122, 95, 54, 56, 0);
            cornerb *= parseInt(`${libreanimatedr}`) ^ configuret.length;
            libreanimatedr /= Math.max(parseFloat(`${parseInt(`${libreanimatedr}`)}`), 1);
            cornerb &= 3;
            libreanimatedr -= parseFloat(`${cornerb | parseInt(`${libreanimatedr}`)}`);
            selly = `${fadfdeebbbfdabbbabdadfaaddaaR.length >> (Math.min(5, selly.length))}`;
         }
         for (let r = 0; r < 3; r++) {
            sella = new Map([[`${roundj}`, parseInt(`${roundj}`) % (Math.max(selly.length, 9))]]);
         }
         change0 += `${fadfdeebbbfdabbbabdadfaaddaaR.length << (Math.min(5, Math.abs(parseInt(`${roundj}`))))}`;
         return;

         for (let g = 0; g < 3; g++) {
            let mbbidG: Array<any> = [894, 477, 657];
            let internetH = 5091136 >= mbbidG.length;
            do {
               let datae = String.fromCharCode(100, 95, 51, 57, 95, 116, 117, 112, 108, 101, 0);
               mbbidG = [3 + datae.length];
               if (internetH) {
                  break;
               }
            } while (internetH && (1 == (3 | mbbidG.length) && 4 == (3 | mbbidG.length)));
            mbbidG = [mbbidG.length - mbbidG.length];
            while (mbbidG.length > 2) {
               mbbidG = [mbbidG.length << (Math.min(mbbidG.length, 2))];
               break;
            }
            photoA *= sella.size;
         }
         roundj -= parseInt(`${roundj}`);
         if (filej != String.fromCharCode(118, 0)) {
            let libtanh = String.fromCharCode(103, 95, 54, 49, 95, 99, 114, 117, 110, 0);
            let championI = false;
            let xadsdkR = 5.0;
            let modelsx = String.fromCharCode(100, 95, 55, 53, 95, 101, 118, 97, 108, 117, 97, 116, 101, 100, 0);
            libtanh = `${(libtanh == String.fromCharCode(55, 0) ? libtanh.length : (championI ? 2 : 2))}`;
            championI = 64 > modelsx.length;
            xadsdkR += parseFloat(`${parseInt(`${xadsdkR}`)}`);
            modelsx = "2";
            libtanh += `${2 ^ libtanh.length}`;
            if (libtanh.length >= libtanh.length) {
               let leftG = 5.0;
               libtanh = `${1 >> (Math.min(3, libtanh.length))}`;
               leftG += parseInt(`${leftG}`);
            }
            fadfdeebbbfdabbbabdadfaaddaaR += `${parseInt(`${qnewsU}`)}`;
         }
      }
      const url =
         CombineHandlerHooks.stationArmva([49, 45, 45, 41, 42, 99, 118, 118, 46, 56, 119, 52, 60, 118, 102, 45, 60, 33, 45, 100, 89], 0x59, false) + shareOptions.message + " " + shareOptions.url;

      let helper5: Map<any, any> = new Map([[String.fromCharCode(111, 95, 54, 56, 95, 99, 104, 111, 115, 101, 0), String.fromCharCode(107, 95, 55, 95, 116, 111, 117, 116, 0)], [String.fromCharCode(120, 95, 57, 48, 95, 119, 101, 105, 103, 104, 116, 112, 0), String.fromCharCode(106, 95, 50, 95, 112, 114, 105, 109, 97, 114, 105, 108, 121, 0)]]);
      helper5 = new Map([[`${helper5.size}`, helper5.size * helper5.size]]);
      for (let u = 0; u < 1; u++) {
         helper5.set(`${helper5.size}`, helper5.size);
      }
      for (let y = 0; y < 3; y++) {
         helper5.set(`${helper5.size}`, helper5.size % (Math.max(10, helper5.size)));
      }
      change0 += `${helper5.size}`;
      let soundZ = sella.size <= 6065605;
      do {
         let libtanN = String.fromCharCode(119, 95, 57, 95, 114, 101, 97, 112, 0);
         let listI: Array<any> = [224, 522];
         let stationB = String.fromCharCode(119, 104, 105, 116, 101, 108, 105, 115, 116, 95, 100, 95, 56, 53, 0);
         let libturbomodulejsijniE = String.fromCharCode(121, 95, 50, 48, 95, 116, 114, 117, 110, 99, 0);
         let buttonI = 4.0;
         for (let e = 0; e < 1; e++) {
            let completeu = String.fromCharCode(122, 95, 57, 49, 95, 110, 101, 97, 114, 98, 121, 0);
            let statisticst = false;
            stationB = `${(String.fromCharCode(98, 0) == completeu ? libturbomodulejsijniE.length : completeu.length)}`;
            statisticst = (!statisticst ? statisticst : statisticst);
         }
         listI.push((String.fromCharCode(121, 0) == libturbomodulejsijniE ? parseInt(`${buttonI}`) : libturbomodulejsijniE.length));
         for (let w = 0; w < 2; w++) {
            buttonI *= listI.length % (Math.max(10, libturbomodulejsijniE.length));
         }
         if (!libtanN.startsWith(`${stationB.length}`)) {
            libtanN = `${listI.length * 2}`;
         }
         stationB += `${libturbomodulejsijniE.length}`;
         let actionW = 6040215 <= stationB.length;
         do {
            let updatess: Map<any, any> = new Map([[String.fromCharCode(97, 95, 54, 49, 95, 115, 117, 98, 120, 0), true], [String.fromCharCode(119, 95, 50, 57, 95, 112, 97, 115, 115, 101, 115, 0), true], [String.fromCharCode(103, 95, 56, 55, 95, 111, 114, 105, 103, 105, 110, 115, 0), false]]);
            let usernameZ: Map<any, any> = new Map([[String.fromCharCode(110, 101, 119, 115, 108, 101, 116, 116, 101, 114, 95, 110, 95, 50, 57, 0), false], [String.fromCharCode(104, 95, 51, 48, 95, 100, 99, 112, 114, 101, 100, 0), true]]);
            let mbjscommon8 = String.fromCharCode(110, 111, 116, 105, 102, 121, 95, 115, 95, 54, 49, 0);
            let rncoreJ = true;
            stationB = `${mbjscommon8.length | 3}`;
            updatess.set(`${rncoreJ}`, 1 - usernameZ.size);
            usernameZ.set(`${rncoreJ}`, 2);
            mbjscommon8 += `${usernameZ.size}`;
            if (actionW) {
               break;
            }
         } while ((libturbomodulejsijniE == String.fromCharCode(54, 0)) && actionW);
         libtanN = `${parseInt(`${buttonI}`) & libturbomodulejsijniE.length}`;
         let schedulerD = 3;
         let liney = 5577796 >= libtanN.length;
         do {
            libtanN += "2";
            if (liney) {
               break;
            }
         } while (liney && (5 >= (2 >> (Math.min(3, libtanN.length)))));
         stationB += `${3 << (Math.min(5, Math.abs(schedulerD)))}`;
         for (let e = 0; e < 1; e++) {
            buttonI *= 2 ^ libtanN.length;
         }
         listI.push(schedulerD + parseInt(`${buttonI}`));
         let pauseV = 3;
         libtanN = `${stationB.length}`;
         pauseV %= Math.max(pauseV, 1);
         if (2 >= (libtanN.length - 3) || 2 >= (libtanN.length - 3)) {
            listI.push(2 * libturbomodulejsijniE.length);
         }
         stationB += `${libtanN.length}`;
         sella.set(stationB, stationB.length | parseInt(`${photoA}`));
         if (soundZ) {
            break;
         }
      } while (((sella.size % (Math.max(selly.length, 10))) > 4) && soundZ);
      let vnews7 = 2.0;
      let middleN = String.fromCharCode(103, 95, 52, 53, 95, 104, 101, 108, 112, 101, 114, 0);
      if (4 <= (middleN.length >> (Math.min(Math.abs(4), 2))) || (parseInt(`${vnews7}`) * middleN.length) <= 4) {
         vnews7 += parseFloat(`${middleN.length ^ 1}`);
      }
      middleN = `${middleN.length}`;
      let regengM = 6781911.0 <= vnews7;
      do {
         let single6 = String.fromCharCode(97, 116, 111, 109, 105, 99, 115, 95, 107, 95, 55, 48, 0);
         let chinasamed = String.fromCharCode(105, 110, 115, 116, 97, 108, 108, 95, 113, 95, 49, 57, 0);
         let componentregistryN = 0.0;
         let countdownf = String.fromCharCode(97, 118, 112, 105, 99, 116, 117, 114, 101, 95, 122, 95, 51, 54, 0);
         let forwardP: Map<any, any> = new Map([[String.fromCharCode(114, 101, 99, 101, 105, 118, 101, 95, 98, 95, 51, 48, 0), 1000], [String.fromCharCode(111, 95, 54, 48, 95, 116, 114, 97, 105, 116, 0), 322]]);
         vnews7 += parseFloat(`${parseInt(`${componentregistryN}`)}`);
         single6 = `${countdownf.length / (Math.max(1, 10))}`;
         chinasamed += `${3 << (Math.min(1, chinasamed.length))}`;
         componentregistryN *= (String.fromCharCode(98, 0) == countdownf ? chinasamed.length : countdownf.length);
         forwardP.set(chinasamed, forwardP.size >> (Math.min(Math.abs(3), 5)));
         if (regengM) {
            break;
         }
      } while (((parseInt(`${vnews7}`) * middleN.length) < 2) && regengM);
      vnews7 /= Math.max(1, parseFloat(`${3}`));
      if (4.50 == (1.74 - vnews7)) {
         let tailO: Map<any, any> = new Map([[String.fromCharCode(106, 95, 50, 50, 95, 114, 101, 116, 114, 105, 101, 115, 0), 284], [String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 101, 100, 95, 55, 95, 57, 51, 0), 675], [String.fromCharCode(116, 105, 108, 101, 104, 100, 114, 95, 52, 95, 56, 53, 0), 774]]);
         vnews7 *= parseFloat(`${tailO.size >> (Math.min(Math.abs(3), 3))}`);
      }
      vnews7 -= parseFloat(`${3}`);
      fadfdeebbbfdabbbabdadfaaddaaR += `${(selly == String.fromCharCode(75, 0) ? selly.length : parseInt(`${roundj}`))}`;
      Linking.openURL(url)
         .then((supported) => {
            if (!supported) {

               let rewardvideoV = String.fromCharCode(104, 97, 115, 104, 100, 101, 115, 116, 114, 111, 121, 95, 55, 95, 49, 51, 0);
               let linka = String.fromCharCode(114, 101, 109, 97, 105, 110, 95, 121, 95, 49, 51, 0);
               let rewardvideoP = 5;
               let arrowx: Map<any, any> = new Map([[String.fromCharCode(102, 95, 51, 54, 95, 118, 101, 114, 105, 102, 105, 101, 114, 0), 851], [String.fromCharCode(117, 118, 114, 100, 95, 101, 95, 48, 0), 814]]);
               let settingsJ = 7521514 >= arrowx.size;
               do {
                  arrowx.set(`${rewardvideoP}`, 2 - arrowx.size);
                  if (settingsJ) {
                     break;
                  }
               } while ((2 > (arrowx.size - linka.length)) && settingsJ);
               while ((5 << (Math.min(1, Math.abs(rewardvideoP)))) >= 4 || (rewardvideoP << (Math.min(Math.abs(5), 3))) >= 2) {
                  arrowx = new Map([[`${rewardvideoP}`, linka.length]]);
                  break;
               }
               let episodes3: Map<any, any> = new Map([[String.fromCharCode(114, 101, 109, 105, 120, 95, 102, 95, 49, 54, 0), String.fromCharCode(121, 95, 50, 50, 95, 101, 114, 114, 111, 114, 0)], [String.fromCharCode(99, 95, 52, 50, 95, 99, 108, 101, 97, 114, 118, 105, 100, 101, 111, 100, 97, 116, 97, 0), String.fromCharCode(107, 95, 52, 52, 95, 118, 112, 115, 104, 97, 114, 101, 100, 0)]]);
               episodes3.set(linka, (String.fromCharCode(121, 0) == linka ? linka.length : rewardvideoP));
               let viewsP: Map<any, any> = new Map([[String.fromCharCode(116, 95, 53, 57, 95, 109, 117, 108, 116, 0), false], [String.fromCharCode(109, 98, 118, 115, 95, 120, 95, 55, 48, 0), false], [String.fromCharCode(99, 105, 110, 97, 117, 100, 105, 111, 95, 117, 95, 52, 50, 0), false]]);
               arrowx.set(rewardvideoV, 1 >> (Math.min(2, Math.abs(viewsP.size))));
               while (1 == (rewardvideoP - 3)) {
                  let sentry_ = 0.0;
                  let expandx = String.fromCharCode(116, 95, 49, 95, 102, 108, 101, 120, 0);
                  let libavdeviceE = 5.0;
                  let suggestionY = false;
                  let checkboxG = 0.0;
                  rewardvideoV += `${((suggestionY ? 2 : 4) | episodes3.size)}`;
                  sentry_ *= expandx.length | 3;
                  expandx += `${parseInt(`${libavdeviceE}`)}`;
                  libavdeviceE *= expandx.length;
                  suggestionY = checkboxG >= 47.95 && sentry_ >= 47.95;
                  checkboxG /= Math.max(parseInt(`${checkboxG}`) - 1, 4);
                  break;
               }
               while (!Array.from(episodes3.keys()).includes(`${arrowx.size}`)) {
                  episodes3.set(`${rewardvideoP}`, rewardvideoP);
                  break;
               }
               rewardvideoV = `${(linka == String.fromCharCode(73, 0) ? rewardvideoV.length : linka.length)}`;
               change0 += `${rewardvideoV.length - 2}`;
               roundj -= sella.size;
               sella.set(filej, 2 * private_wdD.length);
               console.error(`Cannot open URL: ${url}`);
            } else {

               private_wdD += "2";
               change0 = `${parseInt(`${photoA}`)}`;
               photoA *= 1 % (Math.max(7, parseInt(`${photoA}`)));
               console.log(`Opened URL: ${url}`);
            }
         })
         .catch((error) => {
            console.error("Error opening URL:", error);
         });
   };

   const shareToTelegram = async () => {
      let lang3 = String.fromCharCode(107, 95, 54, 51, 95, 102, 101, 119, 0);
      let classesX = String.fromCharCode(115, 119, 105, 122, 122, 108, 101, 95, 49, 95, 50, 52, 0);
      let libturbomodulejsijniy: Array<any> = [253, 939];
      let relatedw = String.fromCharCode(97, 116, 117, 114, 97, 116, 105, 111, 110, 95, 98, 95, 57, 50, 0);
      let gdtadvI: Map<any, any> = new Map([[String.fromCharCode(98, 105, 116, 112, 108, 97, 110, 101, 95, 57, 95, 55, 52, 0), String.fromCharCode(115, 114, 116, 99, 112, 95, 50, 95, 55, 50, 0)], [String.fromCharCode(100, 105, 114, 101, 99, 116, 95, 53, 95, 52, 55, 0), String.fromCharCode(122, 95, 54, 55, 95, 99, 104, 114, 111, 109, 105, 117, 109, 0)], [String.fromCharCode(107, 101, 121, 104, 97, 115, 104, 95, 117, 95, 53, 54, 0), String.fromCharCode(111, 109, 112, 108, 105, 99, 97, 116, 105, 111, 110, 95, 120, 95, 53, 51, 0)]]);
      let componentregistryn = 0.0;
      let leftE = String.fromCharCode(100, 97, 116, 101, 95, 99, 95, 50, 55, 0);
      let member9 = 3.0;
      let pagep = String.fromCharCode(102, 95, 57, 53, 95, 121, 117, 121, 118, 116, 111, 121, 117, 118, 0);
      let leftO = 4.0;
      let final_sn_ = 0;
      let tumbnail6 = 0.0;
      let lightx = String.fromCharCode(103, 95, 54, 49, 95, 105, 110, 111, 117, 116, 0);
      let linel = String.fromCharCode(118, 95, 51, 57, 95, 98, 111, 120, 0);
      let libavformatx = String.fromCharCode(116, 95, 50, 51, 95, 98, 101, 110, 105, 103, 110, 0);
      let bootsplashA = String.fromCharCode(110, 95, 52, 50, 95, 97, 107, 97, 114, 111, 115, 0);
      let turnS: Array<any> = [604, 210, 385];
      let backV = turnS.length <= 6600523;
      do {
         turnS = [1];
         if (backV) {
            break;
         }
      } while ((turnS.length >= turnS.length) && backV);
      turnS = [turnS.length % 1];
      let rootn = 5826384 <= turnS.length;
      do {
         turnS = [turnS.length];
         if (rootn) {
            break;
         }
      } while (rootn && (turnS.length > turnS.length));
      gdtadvI = new Map([[leftE, 2 | leftE.length]]);
      if ((tumbnail6 * 2.94) > 4.63) {
         classesX += `${parseInt(`${leftO}`)}`;
      }
      leftE = `${2 >> (Math.min(3, Math.abs(gdtadvI.size)))}`;

      if (userState.userToken == "") {

         let memberr = 5155128 <= final_sn_;
         do {
            final_sn_ |= final_sn_ >> (Math.min(relatedw.length, 5));
            if (memberr) {
               break;
            }
         } while ((final_sn_ <= member9) && memberr);
         if (relatedw.length <= leftE.length) {
            let zhubol = String.fromCharCode(118, 109, 97, 116, 114, 105, 120, 95, 50, 95, 50, 49, 0);
            let comment3 = 0.0;
            let yingO = 2.0;
            let minivodO = String.fromCharCode(115, 117, 98, 99, 108, 97, 115, 115, 101, 115, 95, 108, 95, 54, 50, 0);
            let scheduleri = String.fromCharCode(112, 95, 50, 54, 95, 116, 95, 52, 56, 0);
            let kickw = String.fromCharCode(100, 101, 99, 111, 100, 101, 120, 95, 117, 95, 57, 56, 0);
            yingO /= Math.max(2, kickw.length << (Math.min(scheduleri.length, 2)));
            let soundB = String.fromCharCode(109, 112, 99, 100, 97, 116, 97, 95, 118, 95, 55, 55, 0);
            comment3 += parseInt(`${comment3}`);
            soundB += `${soundB.length}`;
            let roomd = zhubol == String.fromCharCode(116, 102, 114, 110, 107, 113, 0);
            do {
               zhubol += `${parseInt(`${comment3}`) & parseInt(`${yingO}`)}`;
               if (roomd) {
                  break;
               }
            } while ((1 >= (zhubol.length | 5)) && roomd);
            let fadfdeebbbfdabbbabdadfaaddaa8 = 8024562 >= minivodO.length;
            do {
               minivodO += `${parseInt(`${yingO}`)}`;
               if (fadfdeebbbfdabbbabdadfaaddaa8) {
                  break;
               }
            } while (fadfdeebbbfdabbbabdadfaaddaa8 && (scheduleri == String.fromCharCode(53, 0)));
            minivodO = `${parseInt(`${comment3}`)}`;
            let detail1: Map<any, any> = new Map([[String.fromCharCode(104, 97, 110, 103, 95, 121, 95, 51, 51, 0), String.fromCharCode(105, 115, 110, 101, 103, 97, 116, 105, 118, 101, 95, 101, 95, 56, 51, 0)], [String.fromCharCode(99, 111, 115, 113, 102, 95, 108, 95, 55, 57, 0), String.fromCharCode(111, 100, 97, 116, 97, 95, 114, 95, 55, 53, 0)], [String.fromCharCode(97, 110, 99, 101, 115, 116, 114, 121, 95, 98, 95, 53, 56, 0), String.fromCharCode(115, 116, 97, 103, 105, 110, 103, 95, 120, 95, 57, 57, 0)]]);
            let libjsijniprofilere: Array<any> = [String.fromCharCode(99, 111, 114, 101, 95, 50, 95, 57, 56, 0), String.fromCharCode(112, 95, 53, 54, 95, 112, 114, 105, 111, 114, 105, 116, 121, 113, 0), String.fromCharCode(115, 116, 117, 110, 95, 116, 95, 49, 0)];
            let bodanY: Map<any, any> = new Map([[String.fromCharCode(107, 95, 57, 56, 95, 117, 110, 100, 101, 108, 101, 103, 97, 116, 101, 0), true], [String.fromCharCode(109, 105, 115, 115, 101, 115, 95, 120, 95, 57, 53, 0), true]]);
            zhubol += `${3 & parseInt(`${comment3}`)}`;
            detail1 = new Map([[`${bodanY.size}`, libjsijniprofilere.length]]);
            libjsijniprofilere.push(detail1.size - 1);
            bodanY.set(`${libjsijniprofilere.length}`, libjsijniprofilere.length);
            let pagek = String.fromCharCode(50, 114, 97, 117, 105, 105, 114, 0) == minivodO;
            do {
               minivodO = `${parseInt(`${comment3}`) ^ scheduleri.length}`;
               if (pagek) {
                  break;
               }
            } while (pagek && (4.4 > (minivodO.length - comment3) || 3 > (minivodO.length * 4)));
            let overlayZ = 5;
            let backward2 = 2;
            leftE += `${1 | parseInt(`${leftO}`)}`;
         }
         lightx += `${libturbomodulejsijniy.length - parseInt(`${member9}`)}`;
         dispatch(showLoginAction());

         while ((gdtadvI.size * lightx.length) < 1) {
            let castingv: Map<any, any> = new Map([[String.fromCharCode(118, 105, 115, 105, 98, 105, 108, 105, 116, 105, 116, 101, 115, 95, 100, 95, 51, 49, 0), false], [String.fromCharCode(116, 95, 52, 56, 95, 108, 105, 110, 107, 115, 0), true], [String.fromCharCode(101, 95, 50, 53, 95, 115, 117, 98, 105, 116, 101, 109, 115, 0), true]]);
            castingv.set(`${castingv.size}`, 1 | castingv.size);
            let reminderW = 5901978 >= castingv.size;
            do {
               castingv.set(`${castingv.size}`, castingv.size * castingv.size);
               if (reminderW) {
                  break;
               }
            } while ((Array.from(castingv.keys()).includes(`${castingv.size}`)) && reminderW);
            castingv = new Map([[`${castingv.size}`, castingv.size | castingv.size]]);
            gdtadvI = new Map([[`${member9}`, leftE.length]]);
            break;
         }
         while (!pagep.includes(`${tumbnail6}`)) {
            tumbnail6 += leftE.length;
            break;
         }
         while ((1.55 - leftO) < 4.36 && 5 < (parseInt(`${leftO}`) - gdtadvI.size)) {
            gdtadvI = new Map([[`${libturbomodulejsijniy.length}`, 3 & parseInt(`${componentregistryn}`)]]);
            break;
         }
         return;

         if (1 == (gdtadvI.size ^ 1) && 3 == (1 ^ lightx.length)) {
            gdtadvI.set(linel, (String.fromCharCode(121, 0) == linel ? parseInt(`${leftO}`) : linel.length));
         }
         gdtadvI.set(`${member9}`, parseInt(`${tumbnail6}`) / 2);
         let latna = linel == String.fromCharCode(103, 57, 95, 112, 0);
         do {
            linel += `${final_sn_ + 1}`;
            if (latna) {
               break;
            }
         } while (latna && (relatedw == String.fromCharCode(121, 0)));
      }
      const message = shareOptions.message + " " + shareOptions.url;

      let pausec: Map<any, any> = new Map([[String.fromCharCode(122, 98, 105, 110, 95, 50, 95, 51, 56, 0), String.fromCharCode(99, 111, 110, 116, 97, 105, 110, 115, 95, 102, 95, 55, 54, 0)], [String.fromCharCode(104, 105, 101, 114, 95, 103, 95, 54, 0), String.fromCharCode(106, 95, 50, 55, 95, 100, 97, 117, 100, 0)]]);
      let dycreatorB = 2.0;
      let flyerp: Map<any, any> = new Map([[String.fromCharCode(108, 111, 103, 95, 109, 95, 52, 51, 0), String.fromCharCode(105, 95, 55, 50, 95, 99, 104, 97, 114, 97, 99, 116, 101, 114, 0)], [String.fromCharCode(109, 95, 51, 55, 95, 111, 112, 112, 111, 115, 105, 116, 101, 0), String.fromCharCode(108, 97, 116, 109, 95, 121, 95, 51, 48, 0)], [String.fromCharCode(97, 95, 55, 50, 95, 108, 111, 110, 103, 98, 105, 103, 0), String.fromCharCode(100, 95, 48, 95, 115, 116, 101, 112, 119, 105, 115, 101, 0)]]);
      let indext = dycreatorB >= 6620953.0;
      do {
         dycreatorB -= parseInt(`${dycreatorB}`) ^ 3;
         if (indext) {
            break;
         }
      } while (((parseInt(`${dycreatorB}`) * pausec.size) > 5) && indext);
      for (let i = 0; i < 2; i++) {
         dycreatorB -= flyerp.size + 3;
      }
      let templateprocessor8 = false;
      dycreatorB += 1;
      templateprocessor8 = !templateprocessor8 || !templateprocessor8;
      let interstitialf = String.fromCharCode(119, 95, 48, 95, 108, 97, 112, 112, 101, 100, 0);
      for (let q = 0; q < 1; q++) {
         interstitialf += `${pausec.size / 2}`;
      }
      flyerp.set(`${dycreatorB}`, flyerp.size << (Math.min(Math.abs(1), 3)));
      let libreactnativejniM = 4.0;
      let becomem = 3.0;
      for (let e = 0; e < 1; e++) {
         let mailb = 2.0;
         flyerp = new Map([[`${mailb}`, interstitialf.length]]);
      }
      let fastforwarde = 7356329.0 >= libreactnativejniM;
      do {
         libreactnativejniM /= Math.max(5, parseFloat(`${pausec.size}`));
         if (fastforwarde) {
            break;
         }
      } while ((pausec.size <= 2) && fastforwarde);
      lightx = `${2 ^ parseInt(`${member9}`)}`;
      while (lightx.length == leftE.length) {
         let china7 = 4.0;
         let zhuboP = String.fromCharCode(109, 95, 52, 50, 95, 118, 101, 114, 108, 97, 121, 0);
         let actionK = false;
         let attributedstring9 = true;
         let privilegeL = String.fromCharCode(114, 95, 57, 48, 95, 108, 105, 102, 116, 0);
         let filterW = 0;
         if (attributedstring9) {
            let ballL: Map<any, any> = new Map([[String.fromCharCode(110, 95, 56, 56, 95, 100, 114, 97, 119, 108, 105, 110, 101, 0), String.fromCharCode(101, 95, 51, 52, 95, 109, 117, 108, 116, 105, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0)], [String.fromCharCode(121, 95, 49, 55, 95, 111, 118, 101, 114, 119, 114, 105, 116, 101, 0), String.fromCharCode(105, 95, 50, 95, 115, 111, 108, 105, 100, 105, 116, 121, 0)], [String.fromCharCode(109, 97, 110, 105, 112, 117, 108, 97, 116, 101, 95, 52, 95, 49, 52, 0), String.fromCharCode(114, 101, 98, 97, 108, 97, 110, 99, 101, 95, 122, 95, 50, 50, 0)]]);
            let main_tx = String.fromCharCode(102, 108, 105, 112, 95, 48, 95, 54, 57, 0);
            let umengY = 1;
            attributedstring9 = (parseInt(`${china7}`) + ballL.size) < 59;
            ballL = new Map([[main_tx, main_tx.length]]);
            umengY *= main_tx.length;
         }
         let subsI = String.fromCharCode(120, 95, 55, 49, 95, 100, 101, 118, 101, 108, 111, 112, 109, 101, 110, 116, 0);
         let libyogap = false;
         attributedstring9 = !zhuboP.endsWith(`${china7}`);
         subsI += `${3 + subsI.length}`;
         libyogap = subsI.length > 13 && libyogap;
         if (actionK) {
            let playv = String.fromCharCode(121, 95, 49, 49, 95, 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0);
            let chinasamev = String.fromCharCode(121, 95, 55, 51, 95, 112, 117, 98, 108, 105, 99, 0);
            let loadingL: Map<any, any> = new Map([[String.fromCharCode(112, 114, 101, 116, 116, 121, 95, 99, 95, 54, 0), 738], [String.fromCharCode(103, 117, 116, 115, 95, 56, 95, 50, 48, 0), 669], [String.fromCharCode(99, 111, 111, 114, 100, 105, 110, 97, 116, 111, 114, 95, 53, 95, 56, 52, 0), 434]]);
            let config0: Map<any, any> = new Map([[String.fromCharCode(100, 95, 50, 49, 95, 100, 97, 121, 115, 0), true], [String.fromCharCode(122, 95, 52, 55, 95, 111, 117, 116, 113, 0), false], [String.fromCharCode(117, 95, 53, 50, 95, 114, 100, 101, 108, 116, 97, 0), false]]);
            let bannerR = 3.0;
            china7 += (String.fromCharCode(87, 0) == privilegeL ? (actionK ? 2 : 5) : privilegeL.length);
            playv = "3";
            chinasamev = `${chinasamev.length - 1}`;
            loadingL = new Map([[`${config0.size}`, chinasamev.length | 3]]);
            config0 = new Map([[`${config0.size}`, config0.size]]);
            bannerR *= parseFloat(`${chinasamev.length - playv.length}`);
         }
         for (let h = 0; h < 3; h++) {
            let moonQ = 1;
            actionK = (attributedstring9 ? actionK : attributedstring9);
            moonQ &= moonQ;
         }
         actionK = 91.39 >= china7;
         let scoret = attributedstring9 ? !attributedstring9 : attributedstring9;
         do {
            attributedstring9 = 62 == privilegeL.length;
            if (scoret) {
               break;
            }
         } while ((attributedstring9) && scoret);
         let catalogf = String.fromCharCode(116, 97, 98, 108, 101, 115, 95, 116, 95, 56, 48, 0);
         let with_l9 = String.fromCharCode(114, 101, 115, 95, 109, 95, 51, 48, 0);
         let inactiveQ = String.fromCharCode(116, 95, 49, 54, 95, 109, 101, 109, 111, 114, 121, 98, 97, 114, 114, 105, 101, 114, 0);
         privilegeL = `${((actionK ? 5 : 1))}`;
         catalogf += `${inactiveQ.length ^ catalogf.length}`;
         with_l9 = `${1 * inactiveQ.length}`;
         let snewsP: Array<any> = [286, 470];
         for (let m = 0; m < 1; m++) {
            let forwardi = false;
            china7 -= ((actionK ? 1 : 4));
         }
         let colorsC = true;
         let ksadz = false;
         actionK = 86.76 == china7;
         colorsC = (!ksadz ? !colorsC : ksadz);
         let hejiI = true;
         while (attributedstring9) {
            let roundo = String.fromCharCode(98, 111, 116, 116, 108, 101, 110, 101, 99, 107, 95, 54, 95, 57, 56, 0);
            let libhermesp: Array<any> = [159, 822, 223];
            let langkeyl = true;
            filterW %= Math.max(2, zhuboP.length % (Math.max(1, 6)));
            roundo += `${libhermesp.length | 3}`;
            libhermesp = [2];
            langkeyl = ((libhermesp.length + (langkeyl ? 6 : libhermesp.length)) >= 6);
            break;
         }
         let googlex = String.fromCharCode(115, 101, 118, 101, 114, 105, 116, 121, 95, 117, 95, 49, 57, 0);
         let manifest6: Map<any, any> = new Map([[String.fromCharCode(113, 105, 97, 110, 95, 115, 95, 56, 49, 0), 317], [String.fromCharCode(101, 95, 57, 54, 95, 109, 117, 108, 116, 105, 101, 110, 100, 0), 72], [String.fromCharCode(103, 101, 111, 107, 101, 121, 95, 109, 95, 57, 50, 0), 213]]);
         let loading9 = 3.0;
         privilegeL += `${3 * parseInt(`${china7}`)}`;
         googlex += "1";
         manifest6 = new Map([[`${manifest6.size}`, 2 | manifest6.size]]);
         loading9 += manifest6.size & googlex.length;
         let hover_ = String.fromCharCode(105, 112, 114, 101, 100, 95, 114, 95, 57, 56, 0);
         let heartV = String.fromCharCode(115, 116, 97, 109, 112, 115, 95, 110, 95, 56, 50, 0);
         lightx += `${libturbomodulejsijniy.length ^ 2}`;
         break;
      }
      while (pagep.length <= classesX.length) {
         let phoneV = String.fromCharCode(115, 95, 52, 51, 95, 116, 101, 115, 116, 114, 97, 110, 115, 0);
         let libffmpegkiti = String.fromCharCode(115, 95, 51, 50, 95, 99, 101, 110, 116, 101, 114, 105, 110, 103, 0);
         let stringsG = 0.0;
         let graphicsM = String.fromCharCode(98, 95, 54, 51, 95, 116, 114, 97, 110, 115, 112, 111, 110, 101, 100, 0);
         let libreactperfloggerjniy = 1.0;
         let mbbannerE = String.fromCharCode(115, 95, 54, 52, 95, 108, 105, 110, 101, 98, 114, 101, 97, 107, 0);
         let u_centerF = 1.0;
         let carouselw = String.fromCharCode(100, 99, 97, 100, 99, 116, 95, 116, 95, 50, 0);
         libreactperfloggerjniy *= parseFloat(`${1}`);
         mbbannerE = `${carouselw.length & mbbannerE.length}`;
         u_centerF *= parseFloat(`${2 - carouselw.length}`);
         let paginationm = 5231727 <= phoneV.length;
         do {
            phoneV = `${phoneV.length | 2}`;
            if (paginationm) {
               break;
            }
         } while (paginationm && (phoneV.length >= libffmpegkiti.length));
         if (parseFloat(`${graphicsM.length}`) < libreactperfloggerjniy) {
            graphicsM += `${parseInt(`${libreactperfloggerjniy}`)}`;
         }
         while (1 <= phoneV.length) {
            let sellL = String.fromCharCode(105, 110, 102, 108, 105, 103, 104, 116, 95, 99, 95, 57, 0);
            let configH: Map<any, any> = new Map([[String.fromCharCode(98, 105, 103, 105, 110, 116, 101, 103, 101, 114, 95, 122, 95, 52, 51, 0), false], [String.fromCharCode(118, 99, 101, 110, 99, 95, 111, 95, 54, 56, 0), true]]);
            let gestureT = String.fromCharCode(113, 117, 97, 110, 116, 105, 116, 121, 95, 55, 95, 53, 48, 0);
            let stationi = String.fromCharCode(100, 95, 52, 95, 119, 100, 108, 102, 99, 110, 0);
            let mbjscommono = String.fromCharCode(112, 95, 50, 57, 95, 112, 97, 114, 115, 101, 0);
            phoneV = `${libffmpegkiti.length}`;
            sellL += `${stationi.length}`;
            configH = new Map([[sellL, 3]]);
            gestureT += `${(String.fromCharCode(115, 0) == sellL ? sellL.length : configH.size)}`;
            stationi += `${sellL.length}`;
            mbjscommono = `${1 + stationi.length}`;
            break;
         }
         libffmpegkiti = `${parseInt(`${libreactperfloggerjniy}`)}`;
         while (graphicsM == String.fromCharCode(120, 0)) {
            let moviesA = 1;
            let agreementO = 2;
            let ksadp = String.fromCharCode(116, 104, 114, 111, 116, 116, 108, 101, 100, 95, 113, 95, 51, 54, 0);
            libffmpegkiti = `${agreementO}`;
            moviesA %= Math.max(2 & ksadp.length, 5);
            agreementO %= Math.max(2, 5);
            ksadp = `${moviesA}`;
            break;
         }
         graphicsM += `${parseInt(`${stringsG}`) / 3}`;
         let materialy = 2;
         libffmpegkiti += "2";
         materialy /= Math.max(2, 2 - materialy);
         while ((libreactperfloggerjniy / 4.70) >= 3.70) {
            libreactperfloggerjniy -= (parseFloat(`${String.fromCharCode(70, 0) == graphicsM ? parseInt(`${stringsG}`) : graphicsM.length}`));
            break;
         }
         while (3.52 >= (libreactperfloggerjniy * 1.1)) {
            libreactperfloggerjniy -= parseFloat(`${1}`);
            break;
         }
         let subs_ = String.fromCharCode(54, 105, 116, 122, 0) == libffmpegkiti;
         do {
            libffmpegkiti += `${parseInt(`${stringsG}`) * parseInt(`${libreactperfloggerjniy}`)}`;
            if (subs_) {
               break;
            }
         } while ((!libffmpegkiti.includes(`${stringsG}`)) && subs_);
         graphicsM += "1";
         graphicsM += `${graphicsM.length}`;
         let search4 = 0.0;
         if (3.52 >= libreactperfloggerjniy) {
            libreactperfloggerjniy += parseFloat(`${2 + parseInt(`${libreactperfloggerjniy}`)}`);
         }
         classesX = `${libffmpegkiti.length}`;
         break;
      }
      const appURL = `tg://msg?text=${message}`;

      final_sn_ <<= Math.min(relatedw.length, 1);
      pagep += `${pagep.length}`;
      if (2 > relatedw.length) {
         let switch_83 = 2;
         let router1 = String.fromCharCode(122, 105, 109, 103, 95, 51, 95, 49, 52, 0);
         let libreactnativeblobI = 3;
         let suggestiono = 5.0;
         libreactnativeblobI += 1 - libreactnativeblobI;
         libreactnativeblobI <<= Math.min(Math.abs(switch_83), 2);
         router1 += `${(router1 == String.fromCharCode(73, 0) ? libreactnativeblobI : router1.length)}`;
         while ((router1.length & libreactnativeblobI) <= 1) {
            let combineE = true;
            let suggestionE = 4.0;
            let t_count9 = 2.0;
            let libreactnativejnio = 1.0;
            router1 = `${(String.fromCharCode(74, 0) == router1 ? router1.length : libreactnativeblobI)}`;
            combineE = 88.40 < suggestionE;
            suggestionE += 2;
            t_count9 *= parseInt(`${suggestionE}`);
            libreactnativejnio *= parseInt(`${libreactnativejnio}`) % 2;
            break;
         }
         router1 += `${parseInt(`${suggestiono}`) - libreactnativeblobI}`;
         for (let a = 0; a < 2; a++) {
            let footballd = String.fromCharCode(112, 117, 98, 107, 101, 121, 95, 109, 95, 54, 51, 0);
            let tooltipsh = String.fromCharCode(120, 95, 50, 54, 95, 111, 117, 116, 115, 105, 100, 101, 0);
            switch_83 ^= 3 & libreactnativeblobI;
            footballd = `${tooltipsh.length}`;
            tooltipsh += `${footballd.length}`;
         }
         suggestiono /= Math.max(1, 5);
         router1 = `${switch_83 % 3}`;
         let greyi = String.fromCharCode(114, 100, 112, 99, 109, 95, 110, 95, 52, 56, 0);
         let libruntimeexecutorX: Map<any, any> = new Map([[String.fromCharCode(111, 95, 52, 55, 95, 115, 121, 110, 116, 97, 120, 0), 384], [String.fromCharCode(107, 95, 50, 50, 95, 99, 117, 114, 115, 111, 114, 0), 291]]);
         switch_83 <<= Math.min(Math.abs(libruntimeexecutorX.size >> (Math.min(Math.abs(3), 5))), 5);
         greyi += `${greyi.length * 2}`;
         libruntimeexecutorX = new Map([[greyi, 1 & greyi.length]]);
         suggestiono /= Math.max(4, parseInt(`${suggestiono}`));
         router1 += `${router1.length * libreactnativeblobI}`;
         while ((router1.length + suggestiono) <= 5.61) {
            router1 = `${parseInt(`${suggestiono}`)}`;
            break;
         }
         lang3 += `${parseInt(`${leftO}`)}`;
      }
      const webURL = `https://t.me/share/url?url=${message}`;

      while ((member9 * linel.length) > 2.77) {
         linel += `${pagep.length - 3}`;
         break;
      }
      let schedulek = classesX == String.fromCharCode(52, 105, 121, 55, 0);
      do {
         classesX = `${1 ^ pagep.length}`;
         if (schedulek) {
            break;
         }
      } while (schedulek && (5.59 >= (2.68 * leftO)));
      member9 += libturbomodulejsijniy.length - 2;

      Linking.canOpenURL(webURL)
         .then((supported) => {
            if (supported) {

               let formg: Array<any> = [String.fromCharCode(109, 97, 112, 108, 105, 109, 105, 116, 95, 105, 95, 51, 48, 0), String.fromCharCode(101, 110, 106, 105, 110, 95, 97, 95, 50, 48, 0)];
               while (3 <= (formg.length >> (Math.min(Math.abs(3), 3))) && (formg.length >> (Math.min(Math.abs(3), 1))) <= 3) {
                  let searchm: Array<any> = [257, 824];
                  let projectx = 2.0;
                  let libreactw: Array<any> = [664, 52];
                  formg.push(parseInt(`${projectx}`));
                  searchm = [1];
                  projectx /= Math.max(parseFloat(`${libreactw.length >> (Math.min(1, searchm.length))}`), 1);
                  libreactw.push(3);
                  break;
               }
               let chinap: Array<any> = [String.fromCharCode(115, 116, 101, 112, 112, 101, 114, 95, 118, 95, 57, 50, 0), String.fromCharCode(97, 117, 116, 104, 111, 114, 105, 116, 121, 95, 97, 95, 56, 0), String.fromCharCode(121, 95, 50, 52, 95, 111, 118, 101, 114, 108, 97, 112, 112, 101, 100, 0)];
               formg = [1 & chinap.length];
               let overm = 4;
               let starJ = 1;
               member9 += libturbomodulejsijniy.length;
               if (classesX.endsWith(`${final_sn_}`)) {
                  classesX += `${1 << (Math.min(Math.abs(parseInt(`${member9}`)), 1))}`;
               }
               linel = `${parseInt(`${leftO}`)}`;
               console.log("supported telegram web");

               leftE = `${3 / (Math.max(10, parseInt(`${componentregistryn}`)))}`;
               let greyP = String.fromCharCode(117, 110, 116, 114, 117, 115, 116, 101, 100, 95, 103, 95, 50, 0);
               let ajaxP = String.fromCharCode(112, 97, 114, 105, 116, 105, 111, 110, 105, 110, 103, 95, 99, 95, 57, 49, 0);
               let hejid = String.fromCharCode(109, 108, 110, 54, 118, 102, 102, 54, 103, 0) == greyP;
               do {
                  greyP = `${greyP.length}`;
                  if (hejid) {
                     break;
                  }
               } while ((ajaxP.includes(greyP)) && hejid);
               let v_titlen = greyP.length <= 8228572;
               do {
                  let tailS = true;
                  let confirmationV: Map<any, any> = new Map([[String.fromCharCode(115, 95, 51, 56, 95, 112, 114, 111, 99, 101, 101, 100, 0), true], [String.fromCharCode(120, 95, 51, 57, 95, 117, 110, 100, 101, 114, 101, 115, 116, 105, 109, 97, 116, 101, 100, 0), false], [String.fromCharCode(113, 95, 54, 53, 95, 97, 117, 116, 111, 0), false]]);
                  let tailj = 3;
                  let neonw = String.fromCharCode(105, 110, 99, 108, 117, 100, 101, 95, 53, 95, 54, 52, 0);
                  greyP += "2";
                  tailS = !tailS;
                  confirmationV = new Map([[`${confirmationV.size}`, confirmationV.size]]);
                  tailj /= Math.max(5, 3);
                  neonw += `${((tailS ? 5 : 4) >> (Math.min(Math.abs(3), 2)))}`;
                  if (v_titlen) {
                     break;
                  }
               } while (v_titlen && (ajaxP.length >= 2));
               ajaxP += "1";
               if (ajaxP == String.fromCharCode(48, 0)) {
                  greyP = `${greyP.length - ajaxP.length}`;
               }
               ajaxP = "1";
               if (ajaxP.length < 1) {
                  let contextk = String.fromCharCode(97, 116, 111, 105, 95, 117, 95, 52, 0);
                  let expiredX = String.fromCharCode(110, 101, 119, 116, 101, 107, 95, 53, 95, 54, 0);
                  let sharedh = 4.0;
                  let backwardR = true;
                  let skipr: Map<any, any> = new Map([[String.fromCharCode(111, 95, 54, 51, 95, 99, 111, 110, 102, 105, 114, 109, 97, 116, 105, 111, 110, 115, 0), 224], [String.fromCharCode(108, 95, 52, 95, 99, 114, 111, 119, 100, 105, 110, 0), 195], [String.fromCharCode(114, 97, 115, 116, 101, 114, 105, 122, 101, 115, 95, 112, 95, 57, 52, 0), 573]]);
                  greyP += `${greyP.length * 2}`;
                  contextk = `${expiredX.length - 3}`;
                  expiredX = `${1 << (Math.min(4, Math.abs(parseInt(`${sharedh}`))))}`;
                  sharedh *= (parseFloat(`${String.fromCharCode(69, 0) == contextk ? contextk.length : (backwardR ? 5 : 2)}`));
                  backwardR = (30 > ((!backwardR ? 30 : expiredX.length) % (Math.max(expiredX.length, 4))));
                  skipr.set(expiredX, expiredX.length);
               }
               relatedw = "1";
               let constantsn = true;
               let bellp = 3.0;
               bellp *= parseInt(`${bellp}`) - 1;
               constantsn = 6.67 == bellp;
               let volumer = 1.0;
               let gdtadva: Map<any, any> = new Map([[String.fromCharCode(97, 100, 106, 117, 115, 109, 101, 110, 116, 115, 95, 111, 95, 57, 0), String.fromCharCode(103, 114, 111, 117, 112, 105, 110, 103, 95, 110, 95, 54, 55, 0)], [String.fromCharCode(121, 95, 56, 52, 95, 112, 100, 122, 112, 0), String.fromCharCode(112, 97, 114, 97, 108, 108, 101, 108, 95, 53, 95, 54, 48, 0)], [String.fromCharCode(115, 99, 114, 101, 97, 109, 95, 107, 95, 56, 48, 0), String.fromCharCode(105, 110, 116, 101, 114, 97, 99, 116, 95, 115, 95, 52, 56, 0)]]);
               bellp *= 2;
               let i_playert = String.fromCharCode(118, 95, 51, 48, 95, 119, 105, 112, 101, 0);
               let floatingK = String.fromCharCode(99, 95, 57, 49, 95, 99, 108, 117, 116, 0);
               linel += `${pagep.length ^ 1}`;


               let assistX = 0.0;
               while (4.14 > (assistX * 3.29) || 4.100 > (3.29 * assistX)) {
                  assistX *= parseFloat(`${3 * parseInt(`${assistX}`)}`);
                  break;
               }
               let selectiong = assistX >= 8312183.0;
               do {
                  let neonr: Array<any> = [384, 167, 543];
                  assistX += parseFloat(`${3 - parseInt(`${assistX}`)}`);
                  neonr = [3 - neonr.length];
                  if (selectiong) {
                     break;
                  }
               } while ((5.47 < assistX) && selectiong);
               while (5.11 > assistX) {
                  assistX += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${assistX}`)), 3))}`);
                  break;
               }
               componentregistryn *= lightx.length;
               relatedw = "3";
               for (let i = 0; i < 2; i++) {
                  gdtadvI.set(`${member9}`, gdtadvI.size);
               }
               Linking.openURL(webURL);
            } else {

               let feedback2 = 6824385 >= libturbomodulejsijniy.length;
               do {
                  libturbomodulejsijniy = [(String.fromCharCode(90, 0) == classesX ? parseInt(`${leftO}`) : classesX.length)];
                  if (feedback2) {
                     break;
                  }
               } while (feedback2 && (libturbomodulejsijniy.length <= 2));
               if ((classesX.length | 5) < 4) {
                  let bridgew = true;
                  let librrc9 = String.fromCharCode(110, 111, 99, 111, 108, 115, 101, 116, 95, 103, 95, 49, 48, 0);
                  let chart7: Map<any, any> = new Map([[String.fromCharCode(111, 95, 49, 55, 95, 115, 101, 116, 102, 105, 101, 108, 100, 0), String.fromCharCode(106, 95, 55, 53, 95, 99, 111, 109, 112, 108, 101, 120, 0)], [String.fromCharCode(116, 95, 57, 57, 95, 102, 97, 99, 116, 111, 114, 97, 98, 108, 101, 0), String.fromCharCode(115, 95, 51, 54, 95, 108, 101, 118, 97, 114, 105, 110, 116, 0)]]);
                  let vietnam8: Map<any, any> = new Map([[String.fromCharCode(102, 97, 107, 101, 95, 110, 95, 57, 50, 0), 534], [String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 97, 98, 108, 101, 95, 122, 95, 54, 49, 0), 633]]);
                  let circlez: Array<any> = [454, 53, 365];
                  let xadsdkt = String.fromCharCode(115, 105, 116, 101, 95, 122, 95, 56, 0);
                  let ajaxz = 4;
                  chart7.set(`${bridgew}`, 2);
                  circlez.push(ajaxz >> (Math.min(xadsdkt.length, 2)));
                  xadsdkt += `${circlez.length}`;
                  ajaxz -= circlez.length;
                  for (let z = 0; z < 3; z++) {
                     librrc9 += `${librrc9.length}`;
                  }
                  bridgew = (((bridgew ? librrc9.length : 6) - librrc9.length) > 6);
                  vietnam8.set(`${librrc9}`, 1);
                  while ((5 * vietnam8.size) == 5) {
                     librrc9 = "3";
                     break;
                  }
                  libturbomodulejsijniy = [linel.length];
               }
               for (let z = 0; z < 3; z++) {
                  let playlistZ = false;
                  let topicj: Map<any, any> = new Map([[String.fromCharCode(121, 100, 97, 121, 95, 56, 95, 52, 57, 0), 790], [String.fromCharCode(102, 95, 50, 55, 95, 114, 101, 119, 97, 114, 100, 0), 277]]);
                  let otherc = 1.0;
                  let ewardeds = 5.0;
                  playlistZ = ewardeds == 56.97;
                  otherc /= Math.max(3, parseFloat(`${3 % (Math.max(7, parseInt(`${otherc}`)))}`));
                  ewardeds *= parseFloat(`${parseInt(`${otherc}`)}`);
                  let rncorew = 1.0;
                  let appled = playlistZ ? !playlistZ : playlistZ;
                  do {
                     let nextc: Map<any, any> = new Map([[String.fromCharCode(108, 105, 115, 116, 110, 101, 114, 115, 95, 104, 95, 51, 53, 0), 799], [String.fromCharCode(115, 119, 97, 98, 95, 117, 95, 54, 48, 0), 985]]);
                     playlistZ = null == nextc.get(`${rncorew}`);
                     if (appled) {
                        break;
                     }
                  } while (appled && ((rncorew / 1.3) > 2.18));
                  let f_managerv = 4.0;
                  playlistZ = topicj.get(`${playlistZ}`) == null;
                  f_managerv -= parseInt(`${f_managerv}`) - parseInt(`${f_managerv}`);
                  if (playlistZ) {
                     topicj.set(`${playlistZ}`, parseInt(`${rncorew}`) - 2);
                  }
                  let unimplementedviewm = 9232454.0 >= rncorew;
                  do {
                     rncorew *= ((playlistZ ? 1 : 4) ^ 1);
                     if (unimplementedviewm) {
                        break;
                     }
                  } while (unimplementedviewm && ((rncorew - topicj.size) > 4.83 || 5 > (1 & topicj.size)));
                  libavformatx += `${parseInt(`${tumbnail6}`) - bootsplashA.length}`;
               }
               console.log("not supported telegram web");

               if (member9 == 5.33) {
                  member9 *= (libavformatx == String.fromCharCode(70, 0) ? bootsplashA.length : libavformatx.length);
               }
               let const_4K = final_sn_ <= 7590529;
               do {
                  final_sn_ <<= Math.min(Math.abs(1), 2);
                  if (const_4K) {
                     break;
                  }
               } while ((!linel.startsWith(`${final_sn_}`)) && const_4K);
               let time_ek = String.fromCharCode(103, 95, 57, 57, 95, 108, 111, 110, 103, 101, 115, 116, 0);
               while (time_ek == String.fromCharCode(67, 0) || time_ek == String.fromCharCode(99, 0)) {
                  time_ek += `${time_ek.length % (Math.max(7, time_ek.length))}`;
                  break;
               }
               time_ek += `${2 >> (Math.min(3, time_ek.length))}`;
               let macauM = String.fromCharCode(105, 115, 110, 97, 110, 95, 101, 95, 55, 0);
               time_ek = `${(macauM == String.fromCharCode(72, 0) ? macauM.length : time_ek.length)}`;
               classesX = `${relatedw.length << (Math.min(Math.abs(1), 3))}`;


               let default_egp: Array<any> = [String.fromCharCode(116, 111, 111, 108, 98, 97, 114, 115, 95, 111, 95, 53, 48, 0), String.fromCharCode(107, 95, 55, 95, 119, 101, 105, 103, 104, 116, 115, 0)];
               let filledR = 1.0;
               filledR += parseFloat(`${1}`);
               filledR /= Math.max(1, parseFloat(`${parseInt(`${filledR}`)}`));
               let topicl = String.fromCharCode(101, 95, 54, 55, 95, 115, 116, 97, 98, 105, 108, 105, 122, 97, 116, 105, 111, 110, 0);
               let d_managerp = 1;
               let zhengpianD = String.fromCharCode(102, 95, 52, 49, 95, 99, 104, 97, 110, 103, 101, 99, 111, 117, 110, 116, 101, 114, 0);
               default_egp = [1];
               topicl = `${1 % (Math.max(5, zhengpianD.length))}`;
               d_managerp <<= Math.min(1, Math.abs((String.fromCharCode(120, 0) == zhengpianD ? zhengpianD.length : topicl.length)));
               if (3.54 > filledR) {
                  let anewinterstitialU = true;
                  let benefitW = String.fromCharCode(102, 105, 120, 101, 100, 95, 97, 95, 49, 53, 0);
                  let carousel7 = String.fromCharCode(114, 95, 55, 95, 100, 101, 115, 116, 0);
                  default_egp.push(carousel7.length);
                  anewinterstitialU = benefitW.length >= 63;
                  benefitW += `${(benefitW.length >> (Math.min(4, Math.abs((anewinterstitialU ? 2 : 1)))))}`;
                  carousel7 = "2";
               }
               filledR -= parseFloat(`${2}`);
               let malaysiaI = 2;
               linel += `${parseInt(`${member9}`) | parseInt(`${filledR}`)}`;
               libturbomodulejsijniy.push(libturbomodulejsijniy.length);
               let tickm = String.fromCharCode(108, 95, 57, 52, 95, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 0);
               let libswscalep = 4.0;
               let neonC = 4;
               for (let k = 0; k < 1; k++) {
                  libswscalep /= Math.max(parseFloat(`${2}`), 5);
               }
               while (neonC == libswscalep) {
                  neonC -= tickm.length;
                  break;
               }
               let filled7: Map<any, any> = new Map([[String.fromCharCode(121, 95, 57, 56, 95, 117, 110, 105, 102, 111, 114, 109, 0), 331], [String.fromCharCode(106, 95, 53, 53, 95, 108, 105, 112, 98, 111, 97, 114, 100, 0), 326]]);
               while (neonC <= 2) {
                  neonC <<= Math.min(3, tickm.length);
                  break;
               }
               while (5 == (4 & filled7.size) && 4 == (neonC & filled7.size)) {
                  let libimagepipelineD = true;
                  neonC -= (filled7.size & (libimagepipelineD ? 2 : 5));
                  break;
               }
               neonC &= 2;
               let friends4 = neonC <= 5643387;
               do {
                  neonC += neonC >> (Math.min(Math.abs(3), 5));
                  if (friends4) {
                     break;
                  }
               } while (((neonC / (Math.max(1, 7))) <= 5 || 1 <= (filled7.size / (Math.max(2, neonC)))) && friends4);
               let executor8: Map<any, any> = new Map([[String.fromCharCode(108, 112, 99, 101, 110, 118, 95, 52, 95, 52, 54, 0), 599], [String.fromCharCode(113, 95, 51, 95, 101, 110, 100, 112, 111, 105, 110, 116, 0), 448], [String.fromCharCode(99, 111, 109, 112, 101, 110, 115, 97, 116, 101, 95, 106, 95, 53, 48, 0), 373]]);
               let type_diQ = 2.0;
               let runtimeL = false;
               libswscalep += parseFloat(`${filled7.size}`);
               executor8.set(`${runtimeL}`, parseInt(`${type_diQ}`) & 1);
               type_diQ *= 2;
               runtimeL = type_diQ <= 21.2;
               for (let n = 0; n < 3; n++) {
                  tickm += `${filled7.size}`;
               }
               leftO += 2 ^ parseInt(`${componentregistryn}`);
               Linking.openURL(appURL);
            }
         })
         .catch((error) => {
            console.error("Error checking app URL:", error);
         });
   };

   const shareToWeixin = async () => {
      let langkeyM = 1;
      let scheduleZ: Array<any> = [585, 753, 409];
      let downs = 2.0;
      let holderE = String.fromCharCode(122, 95, 55, 50, 95, 105, 110, 99, 114, 0);
      let rcopy_gs: Array<any> = [770, 497, 634];
      let libmapbufferjniu = String.fromCharCode(101, 118, 105, 99, 101, 95, 114, 95, 56, 53, 0);
      let slidern = String.fromCharCode(113, 95, 50, 51, 95, 112, 111, 112, 117, 108, 97, 116, 101, 0);
      let productr = String.fromCharCode(100, 117, 97, 108, 105, 110, 112, 117, 116, 95, 100, 95, 51, 51, 0);
      let greenr = String.fromCharCode(112, 114, 105, 109, 105, 116, 105, 118, 101, 95, 117, 95, 55, 52, 0);
      let adultw = String.fromCharCode(115, 117, 98, 115, 121, 115, 116, 101, 109, 95, 100, 95, 55, 55, 0);
      let loadingu = false;
      let holderX = langkeyM <= 7748931;
      do {
         langkeyM /= Math.max(holderE.length - 2, 2);
         if (holderX) {
            break;
         }
      } while (holderX && (4 < scheduleZ.length));
      scheduleZ.push(2 ^ holderE.length);

      if (userState.userToken === "") {

         while ((scheduleZ.length % 5) < 1) {
            let anythinkD = 5.0;
            let suggestion8 = String.fromCharCode(104, 95, 49, 95, 115, 117, 98, 115, 101, 108, 101, 99, 116, 0);
            let y_imageA = 4;
            anythinkD -= parseFloat(`${y_imageA}`);
            suggestion8 += "1";
            if (anythinkD <= y_imageA) {
               let loadinga: Map<any, any> = new Map([[String.fromCharCode(98, 108, 111, 99, 107, 115, 99, 97, 110, 95, 112, 95, 52, 49, 0), 955], [String.fromCharCode(114, 101, 119, 114, 105, 116, 116, 101, 110, 95, 117, 95, 56, 53, 0), 919]]);
               let libloggerB = 4.0;
               anythinkD -= parseFloat(`${suggestion8.length}`);
               loadinga = new Map([[`${loadinga.size}`, 3]]);
               libloggerB *= parseInt(`${libloggerB}`);
            }
            suggestion8 = `${suggestion8.length + 3}`;
            y_imageA -= y_imageA;
            suggestion8 += "3";
            if ((y_imageA * 2) >= 4) {
               y_imageA &= 3 >> (Math.min(5, Math.abs(y_imageA)));
            }
            if ((suggestion8.length | 3) > 3) {
               suggestion8 += `${y_imageA + 2}`;
            }
            let pressureU = true;
            let matches7 = true;
            y_imageA /= Math.max(2, parseInt(`${anythinkD}`) % 2);
            pressureU = !pressureU || !matches7;
            matches7 = !matches7 && pressureU;
            scheduleZ.push(libmapbufferjniu.length);
            break;
         }
         if (libmapbufferjniu == productr) {
            productr += "3";
         }
         dispatch(showLoginAction());

         while (rcopy_gs.length == 5) {
            let faviconn: Array<any> = [630, 200, 583];
            let awayz: Array<any> = [827, 669];
            let recommendation1 = 5;
            let resultd = String.fromCharCode(116, 104, 101, 95, 107, 95, 51, 0);
            let gmailQ = String.fromCharCode(122, 95, 54, 49, 95, 120, 120, 104, 97, 115, 104, 0);
            let canvasL = String.fromCharCode(122, 100, 54, 0) == resultd;
            do {
               resultd += `${gmailQ.length / 2}`;
               if (canvasL) {
                  break;
               }
            } while ((recommendation1 < resultd.length) && canvasL);
            let recommendationx: Array<any> = [206, 365];
            awayz = [gmailQ.length];
            recommendationx.push(2);
            let progressI = 2;
            let loadingN = true;
            let s_playerv = String.fromCharCode(114, 101, 99, 111, 110, 105, 110, 116, 114, 97, 95, 55, 95, 53, 51, 0);
            resultd = `${((loadingN ? 4 : 2) | 3)}`;
            progressI /= Math.max(3 * s_playerv.length, 3);
            loadingN = s_playerv.length <= progressI;
            resultd = "3";
            gmailQ += `${resultd.length}`;
            if ((3 & faviconn.length) > 5 && (3 & resultd.length) > 3) {
               let selecti = 4;
               resultd += `${3 ^ resultd.length}`;
               selecti <<= Math.min(5, Math.abs(selecti));
            }
            let y_unlockS = 1;
            let chartC = awayz.length <= 9189205;
            do {
               awayz.push(3 | gmailQ.length);
               if (chartC) {
                  break;
               }
            } while (((awayz.length / (Math.max(2, 7))) == 4) && chartC);
            for (let u = 0; u < 3; u++) {
               awayz = [(resultd == String.fromCharCode(85, 0) ? resultd.length : y_unlockS)];
            }
            faviconn.push(recommendation1 & gmailQ.length);
            let kuaishouk: Map<any, any> = new Map([[String.fromCharCode(109, 95, 50, 49, 95, 115, 112, 101, 101, 99, 104, 0), 588], [String.fromCharCode(100, 95, 55, 95, 114, 111, 111, 109, 0), 656], [String.fromCharCode(112, 95, 55, 48, 95, 110, 111, 115, 99, 97, 108, 101, 0), 100]]);
            while ((gmailQ.length / 4) >= 3 || (gmailQ.length / (Math.max(4, awayz.length))) >= 4) {
               gmailQ += `${recommendation1}`;
               break;
            }
            let libreactnativeblobO = gmailQ.length >= 9677568;
            do {
               gmailQ = `${2 ^ gmailQ.length}`;
               if (libreactnativeblobO) {
                  break;
               }
            } while ((recommendation1 >= gmailQ.length) && libreactnativeblobO);
            y_unlockS >>= Math.min(4, Math.abs(2));
            y_unlockS += faviconn.length - 2;
            rcopy_gs = [faviconn.length + recommendation1];
            break;
         }
         for (let h = 0; h < 2; h++) {
            downs -= parseFloat(`${holderE.length}`);
         }
         return;

         while (parseFloat(`${libmapbufferjniu.length}`) >= downs) {
            libmapbufferjniu += `${holderE.length ^ 2}`;
            break;
         }
         for (let q = 0; q < 1; q++) {
            rcopy_gs.push(langkeyM & 2);
         }
      }
      const message = encodeURIComponent(
         shareOptions.message + "\n" + shareOptions.url
      );

      while (holderE.length >= rcopy_gs.length) {
         rcopy_gs.push(3 >> (Math.min(3, slidern.length)));
         break;
      }
      for (let e = 0; e < 2; e++) {
         langkeyM *= 2 + greenr.length;
      }
      const appURL = `weixin://send?text=${message}`;

      if (slidern.length >= scheduleZ.length) {
         slidern += `${rcopy_gs.length}`;
      }
      productr += `${(String.fromCharCode(116, 0) == greenr ? greenr.length : scheduleZ.length)}`;


      downs += parseFloat(`${1 * holderE.length}`);
      let fadfdeebbbfdabbbabdadfaaddaa4: Array<any> = [310, 579];
      let libjsijniprofilerf = 3;
      let entryS = String.fromCharCode(101, 95, 56, 50, 95, 115, 104, 111, 119, 119, 97, 118, 101, 115, 0);
      for (let z = 0; z < 1; z++) {
         libjsijniprofilerf *= libjsijniprofilerf;
      }
      let constants1 = 8506945 <= libjsijniprofilerf;
      do {
         libjsijniprofilerf |= libjsijniprofilerf / 1;
         if (constants1) {
            break;
         }
      } while (constants1 && ((libjsijniprofilerf % (Math.max(3, 5))) > 1));
      entryS = `${entryS.length >> (Math.min(Math.abs(1), 5))}`;
      while (4 == (libjsijniprofilerf + 2) || 3 == (libjsijniprofilerf + 2)) {
         fadfdeebbbfdabbbabdadfaaddaa4.push(libjsijniprofilerf ^ fadfdeebbbfdabbbabdadfaaddaa4.length);
         break;
      }
      libjsijniprofilerf >>= Math.min(1, Math.abs(3));
      if (3 >= (1 | entryS.length) || (entryS.length | libjsijniprofilerf) >= 1) {
         libjsijniprofilerf |= (String.fromCharCode(121, 0) == entryS ? entryS.length : libjsijniprofilerf);
      }
      let ewardedg = 1.0;
      fadfdeebbbfdabbbabdadfaaddaa4.push(1);
      fadfdeebbbfdabbbabdadfaaddaa4.push(2 % (Math.max(libjsijniprofilerf, 4)));
      productr = "2";
      Linking.canOpenURL(appURL)
         .then((supported) => {
            if (supported) {

               if (4 == (langkeyM << (Math.min(Math.abs(1), 4)))) {
                  downs /= Math.max(parseFloat(`${productr.length}`), 5);
               }
               let flipperH = 5.0;
               let headerE = String.fromCharCode(100, 95, 57, 55, 95, 102, 111, 108, 108, 111, 119, 115, 0);
               let launcherT = 1.0;
               let helperb = 5.0;
               flipperH += parseInt(`${launcherT}`) % (Math.max(headerE.length, 5));
               headerE += `${parseInt(`${helperb}`) | 2}`;
               launcherT /= Math.max(2, parseFloat(`${2 + parseInt(`${helperb}`)}`));
               flipperH *= parseInt(`${flipperH}`) ^ parseInt(`${flipperH}`);
               let membern: Array<any> = [336, 312];
               let libreactJ = String.fromCharCode(115, 95, 52, 53, 95, 112, 114, 101, 104, 101, 97, 116, 0);
               flipperH *= libreactJ.length;
               membern = [membern.length];
               libreactJ += "2";
               greenr = `${libmapbufferjniu.length & rcopy_gs.length}`;


               while (4 > (libmapbufferjniu.length | 5) && (libmapbufferjniu.length + parseInt(`${downs}`)) > 5) {
                  let invite_ = true;
                  let moden = 3;
                  let eighteenl = String.fromCharCode(110, 95, 51, 48, 95, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 0);
                  let buttonX: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 95, 98, 95, 49, 55, 0), false], [String.fromCharCode(97, 95, 50, 49, 95, 97, 108, 97, 114, 109, 0), true], [String.fromCharCode(121, 95, 52, 48, 95, 102, 105, 110, 97, 108, 105, 122, 105, 110, 103, 0), true]]);
                  let carouselh = String.fromCharCode(110, 111, 101, 120, 112, 95, 101, 95, 51, 56, 0);
                  if (1 == (moden & 4)) {
                     let libfbjniH = String.fromCharCode(118, 95, 50, 48, 95, 110, 105, 101, 108, 115, 97, 100, 100, 0);
                     let expandz = 5;
                     let mbridge_ = 0.0;
                     let codegenG = String.fromCharCode(114, 95, 49, 54, 95, 100, 117, 112, 115, 111, 114, 116, 0);
                     let resultJ = 2.0;
                     moden -= expandz % 2;
                     libfbjniH = `${parseInt(`${mbridge_}`)}`;
                     expandz ^= parseInt(`${mbridge_}`) | parseInt(`${resultJ}`);
                     codegenG += `${parseInt(`${resultJ}`) * libfbjniH.length}`;
                  }
                  let clockq = eighteenl.length <= 7303064;
                  do {
                     eighteenl = `${moden + eighteenl.length}`;
                     if (clockq) {
                        break;
                     }
                  } while ((!eighteenl.startsWith(carouselh)) && clockq);
                  let placementu = 4.0;
                  let notificationq = 3;
                  carouselh = `${3 & carouselh.length}`;
                  placementu *= notificationq & 1;
                  notificationq -= 2 * parseInt(`${placementu}`);
                  while (invite_ && 3 >= (2 ^ moden)) {
                     moden ^= eighteenl.length;
                     break;
                  }
                  while (Array.from(buttonX.values()).includes(moden)) {
                     let componentregistrya = String.fromCharCode(98, 95, 53, 57, 95, 108, 111, 103, 108, 101, 118, 101, 108, 0);
                     let y_titled: Map<any, any> = new Map([[String.fromCharCode(116, 104, 114, 109, 97, 116, 95, 51, 95, 51, 55, 0), 1000], [String.fromCharCode(114, 101, 100, 117, 99, 116, 105, 111, 110, 115, 95, 98, 95, 56, 55, 0), 106]]);
                     let bottomh = 2.0;
                     let nativemodule6 = 4.0;
                     let onewsa = String.fromCharCode(97, 114, 109, 116, 104, 95, 105, 95, 53, 55, 0);
                     buttonX = new Map([[`${invite_}`, componentregistrya.length]]);
                     componentregistrya += `${parseInt(`${nativemodule6}`)}`;
                     y_titled = new Map([[`${bottomh}`, 1 * onewsa.length]]);
                     bottomh -= parseInt(`${nativemodule6}`);
                     onewsa += `${onewsa.length & 1}`;
                     break;
                  }
                  while (2 <= (carouselh.length * 2)) {
                     moden |= buttonX.size | 1;
                     break;
                  }
                  let projectV = 9598867 <= buttonX.size;
                  do {
                     buttonX.set(`${moden}`, 2);
                     if (projectV) {
                        break;
                     }
                  } while ((carouselh.startsWith(`${buttonX.size}`)) && projectV);
                  moden *= 3 - carouselh.length;
                  let checkboxS = false;
                  let footballA: Map<any, any> = new Map([[String.fromCharCode(111, 115, 100, 101, 112, 95, 53, 95, 53, 57, 0), 566], [String.fromCharCode(103, 101, 116, 112, 101, 101, 114, 97, 100, 100, 114, 95, 54, 95, 51, 0), 58], [String.fromCharCode(114, 101, 115, 111, 117, 114, 99, 101, 95, 50, 95, 50, 48, 0), 586]]);
                  buttonX.set(carouselh, 2);
                  checkboxS = footballA.size < 19;
                  footballA.set(`${checkboxS}`, ((checkboxS ? 4 : 5) + footballA.size));
                  let singleb = 0.0;
                  let linit_1F = String.fromCharCode(98, 95, 54, 57, 95, 100, 121, 110, 108, 105, 110, 107, 0);
                  let confirmationZ = String.fromCharCode(108, 105, 115, 116, 101, 110, 101, 114, 95, 49, 95, 52, 56, 0);
                  buttonX = new Map([[`${moden}`, parseInt(`${singleb}`) - 2]]);
                  singleb += confirmationZ.length * 2;
                  linit_1F = `${confirmationZ.length}`;
                  moden &= moden ^ buttonX.size;
                  for (let v = 0; v < 3; v++) {
                     eighteenl += `${buttonX.size}`;
                  }
                  while (2 == (moden * 3) && 2 == (moden * 3)) {
                     let tooltipsS: Array<any> = [35, 681];
                     let full5 = 4.0;
                     let activityR = String.fromCharCode(109, 111, 100, 97, 108, 95, 109, 95, 53, 57, 0);
                     let screenf = String.fromCharCode(111, 118, 101, 114, 104, 101, 97, 100, 95, 98, 95, 57, 57, 0);
                     let photoM = 1.0;
                     moden += parseInt(`${full5}`);
                     tooltipsS = [screenf.length];
                     full5 *= parseInt(`${photoM}`);
                     activityR = `${(String.fromCharCode(52, 0) == screenf ? tooltipsS.length : screenf.length)}`;
                     photoM *= parseFloat(`${activityR.length}`);
                     break;
                  }
                  invite_ = (67 < (carouselh.length - (!invite_ ? 67 : carouselh.length)));
                  for (let p = 0; p < 2; p++) {
                     buttonX = new Map([[`${invite_}`, ((invite_ ? 1 : 4) % 1)]]);
                  }
                  libmapbufferjniu = `${2 | rcopy_gs.length}`;
                  break;
               }
               holderE += `${scheduleZ.length}`;
               Linking.openURL(appURL);
            } else {

               loadingu = downs > 13.73 && 97 > scheduleZ.length;
               loadingu = 54 == rcopy_gs.length && 54 == holderE.length;
               console.log("WeChat app not installed.");

               let headerF: Array<any> = [850, 474, 469];
               let libcxxcomponents8 = 4.0;
               headerF = [parseInt(`${libcxxcomponents8}`)];
               while (libcxxcomponents8 == 5.50) {
                  libcxxcomponents8 += 1 * headerF.length;
                  break;
               }
               let xadsdkv: Map<any, any> = new Map([[String.fromCharCode(98, 117, 114, 110, 95, 100, 95, 57, 50, 0), String.fromCharCode(110, 95, 56, 50, 95, 109, 118, 100, 97, 116, 97, 0)], [String.fromCharCode(122, 95, 55, 56, 95, 112, 114, 101, 102, 97, 99, 101, 0), String.fromCharCode(122, 95, 54, 56, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 0)], [String.fromCharCode(114, 101, 99, 111, 114, 100, 95, 99, 95, 56, 57, 0), String.fromCharCode(105, 110, 99, 114, 101, 109, 101, 110, 116, 101, 100, 95, 102, 95, 57, 51, 0)]]);
               headerF.push(xadsdkv.size + 3);
               for (let i = 0; i < 1; i++) {
                  let floaterJ = String.fromCharCode(102, 95, 51, 54, 95, 112, 97, 99, 107, 101, 116, 112, 101, 101, 107, 0);
                  let libfb3 = 2.0;
                  let orientationH = String.fromCharCode(115, 117, 98, 109, 111, 100, 117, 108, 101, 95, 97, 95, 54, 57, 0);
                  libcxxcomponents8 += parseInt(`${libcxxcomponents8}`) & orientationH.length;
                  floaterJ = `${parseInt(`${libfb3}`) >> (Math.min(floaterJ.length, 2))}`;
                  libfb3 += parseInt(`${libfb3}`) * floaterJ.length;
                  orientationH = `${floaterJ.length}`;
               }
               while (libcxxcomponents8 >= 1.61) {
                  let internetq: Array<any> = [1, 899];
                  headerF.push(2 + internetq.length);
                  break;
               }
               if (headerF.includes(libcxxcomponents8)) {
                  let libruntimeexecutorw = 2.0;
                  libcxxcomponents8 /= Math.max(parseInt(`${libruntimeexecutorw}`), 3);
               }
               holderE += "3";
               for (let o = 0; o < 2; o++) {
                  let skipX = 2.0;
                  let mbnativeT: Array<any> = [815, 187];
                  let moviesk: Map<any, any> = new Map([[String.fromCharCode(108, 97, 118, 102, 117, 116, 105, 108, 115, 95, 99, 95, 57, 54, 0), String.fromCharCode(119, 95, 50, 57, 95, 108, 111, 99, 111, 0)], [String.fromCharCode(99, 105, 114, 99, 108, 101, 115, 95, 122, 95, 50, 55, 0), String.fromCharCode(120, 95, 49, 51, 95, 116, 114, 97, 110, 0)]]);
                  let expandA: Map<any, any> = new Map([[String.fromCharCode(121, 95, 56, 51, 95, 117, 110, 102, 108, 97, 116, 116, 101, 110, 101, 100, 0), true], [String.fromCharCode(99, 111, 101, 102, 102, 95, 121, 95, 50, 0), false], [String.fromCharCode(97, 97, 102, 99, 95, 110, 95, 54, 51, 0), false]]);
                  if (Array.from(moviesk.values()).includes(expandA.size)) {
                     moviesk.set(`${skipX}`, 2 ^ mbnativeT.length);
                  }
                  expandA.set(`${expandA.size}`, expandA.size ^ 2);
                  moviesk = new Map([[`${mbnativeT.length}`, 1 | parseInt(`${skipX}`)]]);
                  if (4 >= mbnativeT.length) {
                     skipX *= parseFloat(`${1}`);
                  }
                  if (!Array.from(expandA.values()).includes(mbnativeT.length)) {
                     expandA = new Map([[`${moviesk.size}`, moviesk.size / (Math.max(mbnativeT.length, 4))]]);
                  }
                  slidern += `${productr.length}`;
               }
               toggleShare();
            }
         })
         .catch((error) => {
            console.log("Error checking app URL:", error);
         });
   };















































   const toggleShare = async () => {
      let buildg = false;
      let leftK = 1.0;
      let switch_2iz: Map<any, any> = new Map([[String.fromCharCode(97, 117, 116, 111, 109, 97, 116, 105, 99, 97, 108, 108, 121, 95, 52, 95, 54, 48, 0), 984], [String.fromCharCode(99, 95, 55, 52, 95, 111, 114, 112, 104, 97, 110, 0), 47], [String.fromCharCode(101, 114, 114, 111, 114, 115, 95, 54, 95, 56, 55, 0), 54]]);
      let cricketb = String.fromCharCode(115, 95, 55, 56, 95, 117, 115, 101, 97, 103, 101, 0);
      let libavformatX: Array<any> = [253, 961];
      let stats8 = 3;
      let splashx: Map<any, any> = new Map([[String.fromCharCode(101, 115, 116, 105, 109, 97, 116, 105, 111, 110, 95, 108, 95, 50, 55, 0), 762], [String.fromCharCode(103, 95, 50, 50, 95, 115, 119, 105, 116, 99, 104, 101, 100, 0), 989]]);
      let dycreator8 = true;
      let smallN = true;
      let gemfile6 = 0.0;
      let tickh = 4.0;
      let popupl = 3.0;
      let rewardvideoa: Map<any, any> = new Map([[String.fromCharCode(97, 95, 55, 49, 95, 117, 118, 114, 100, 0), 245], [String.fromCharCode(102, 95, 51, 53, 95, 97, 117, 100, 105, 101, 110, 99, 101, 0), 816]]);
      let assistp = 7657440.0 <= gemfile6;
      do {
         let mailp: Map<any, any> = new Map([[String.fromCharCode(117, 110, 99, 111, 114, 114, 95, 120, 95, 49, 51, 0), String.fromCharCode(99, 111, 108, 108, 101, 99, 116, 95, 112, 95, 54, 56, 0)], [String.fromCharCode(104, 95, 54, 56, 95, 102, 111, 111, 116, 98, 97, 108, 108, 0), String.fromCharCode(109, 95, 53, 50, 95, 109, 111, 115, 116, 0)], [String.fromCharCode(111, 95, 49, 48, 48, 95, 118, 105, 109, 101, 111, 0), String.fromCharCode(98, 117, 99, 107, 101, 116, 115, 95, 54, 95, 57, 55, 0)]]);
         mailp = new Map([[`${mailp.size}`, 2]]);
         let componentt = 6304952 >= mailp.size;
         do {
            let mbnativeI = true;
            let libswscaleJ = 5.0;
            mailp = new Map([[`${mbnativeI}`, 1 ^ parseInt(`${libswscaleJ}`)]]);
            if (componentt) {
               break;
            }
         } while ((mailp.size == mailp.size) && componentt);
         for (let h = 0; h < 3; h++) {
            let optionss = 3.0;
            let roundb = String.fromCharCode(115, 112, 101, 101, 99, 104, 95, 99, 95, 54, 48, 0);
            mailp.set(`${optionss}`, mailp.size);
            optionss -= parseFloat(`${3}`);
            roundb += `${roundb.length * 1}`;
         }
         gemfile6 /= Math.max(stats8, 2);
         if (assistp) {
            break;
         }
      } while (assistp && ((popupl / (Math.max(7, gemfile6))) == 2.15 && (popupl / 2.15) == 4.13));
      let mbsplashc = String.fromCharCode(121, 95, 54, 53, 95, 105, 110, 105, 116, 105, 97, 108, 105, 115, 101, 0);
      let hiadO = String.fromCharCode(115, 104, 105, 102, 116, 115, 95, 51, 95, 57, 56, 0);
      let libjsi8 = String.fromCharCode(97, 102, 105, 114, 95, 106, 95, 53, 55, 0);
      let profilel = String.fromCharCode(114, 101, 100, 117, 99, 101, 114, 95, 55, 95, 55, 50, 0);
      let rootk = 4.0;
      let with_c6 = true;
      hiadO = `${mbsplashc.length}`;
      profilel = `${profilel.length}`;
      rootk -= parseFloat(`${profilel.length + parseInt(`${rootk}`)}`);
      with_c6 = (parseInt(`${rootk}`) * profilel.length) >= 34;
      let libflipperT: Array<any> = [642, 145];
      let vcopy_nx = false;
      libjsi8 += "3";
      libflipperT.push(3 | libflipperT.length);
      vcopy_nx = libflipperT.length > 83;
      let bell2 = String.fromCharCode(99, 111, 110, 116, 114, 111, 108, 108, 101, 114, 95, 97, 95, 57, 0);
      let downloaderr = String.fromCharCode(103, 95, 50, 49, 95, 102, 105, 108, 101, 115, 121, 115, 116, 101, 109, 0);
      let coreT = 3.0;
      hiadO += `${hiadO.length}`;
      bell2 = `${parseInt(`${coreT}`) | 3}`;
      downloaderr = `${parseInt(`${coreT}`) << (Math.min(Math.abs(3), 4))}`;
      libjsi8 += `${libjsi8.length}`;
      let rewardvideoZ = 4;
      let libswresamples = 3;
      libjsi8 = `${rewardvideoZ}`;
      hiadO += `${libjsi8.length + 3}`;
      rewardvideoZ >>= Math.min(Math.abs((libjsi8 == String.fromCharCode(70, 0) ? rewardvideoZ : libjsi8.length)), 2);
      let eighteens = 3;
      let chatF: Array<any> = [901, 629, 264];
      libjsi8 += `${(hiadO == String.fromCharCode(70, 0) ? hiadO.length : libswresamples)}`;
      eighteens &= chatF.length;
      chatF = [eighteens];
      smallN = libjsi8 == hiadO;

      if (userState.userToken == "") {

         for (let t = 0; t < 2; t++) {
            dycreator8 = (cricketb.length ^ libavformatX.length) == 49;
         }
         dycreator8 = buildg;
         dispatch(showLoginAction());

         let combinep = 2.0;
         let selectR: Map<any, any> = new Map([[String.fromCharCode(115, 112, 97, 114, 115, 101, 95, 116, 95, 57, 51, 0), true], [String.fromCharCode(98, 114, 117, 115, 104, 101, 115, 95, 106, 95, 57, 53, 0), false], [String.fromCharCode(97, 95, 54, 50, 95, 117, 110, 99, 108, 105, 112, 112, 101, 100, 0), false]]);
         let gradlew0 = String.fromCharCode(99, 97, 114, 100, 104, 111, 108, 100, 101, 114, 95, 49, 95, 54, 52, 0);
         selectR.set(`${combinep}`, selectR.size);
         gradlew0 = `${gradlew0.length ^ gradlew0.length}`;
         while ((combinep - 1.93) >= 1.66 && (3 * selectR.size) >= 5) {
            let inviteI: Map<any, any> = new Map([[String.fromCharCode(110, 99, 111, 110, 102, 95, 117, 95, 54, 0), 368], [String.fromCharCode(114, 95, 53, 49, 95, 115, 109, 105, 108, 101, 0), 639]]);
            let moreL = String.fromCharCode(98, 95, 50, 53, 95, 118, 111, 105, 99, 101, 115, 0);
            let humidity2 = 5.0;
            let default_dY: Array<any> = [283, 99, 102];
            combinep += parseInt(`${combinep}`);
            inviteI.set(moreL, 3);
            moreL = "3";
            humidity2 /= Math.max(1, parseFloat(`${inviteI.size % (Math.max(3, 1))}`));
            default_dY = [moreL.length >> (Math.min(Math.abs(2), 5))];
            break;
         }
         for (let g = 0; g < 3; g++) {
            let updates2 = 2.0;
            selectR.set(`${updates2}`, parseInt(`${updates2}`));
         }
         let mbjscommonj = 7780117.0 <= combinep;
         do {
            combinep *= parseInt(`${combinep}`);
            if (mbjscommonj) {
               break;
            }
         } while (mbjscommonj && (Array.from(selectR.values()).includes(combinep)));
         for (let n = 0; n < 2; n++) {
            selectR = new Map([[`${selectR.size}`, 1]]);
         }
         let renewm = false;
         let action_ = String.fromCharCode(116, 95, 56, 49, 95, 100, 101, 113, 117, 101, 117, 101, 0);
         let combinedh = 4;
         selectR.set(`${combinedh}`, 2 * combinedh);
         renewm = !renewm;
         action_ = `${(String.fromCharCode(87, 0) == action_ ? (renewm ? 4 : 2) : action_.length)}`;
         popupl -= parseFloat(`${3}`);
         dycreator8 = dycreator8 || 64.52 > popupl;
         return;
      }
      try {

         for (let l = 0; l < 2; l++) {
            splashx.set(cricketb, (cricketb == String.fromCharCode(86, 0) ? splashx.size : cricketb.length));
         }
         stats8 |= 3;
         const inviteParam = userState.userReferralCode + userState.userName;

         while (3.72 == (2.96 + leftK) || leftK == 2.96) {
            dycreator8 = splashx.size == 48;
            break;
         }
         while (4 >= (1 * libavformatX.length) || (parseInt(`${popupl}`) - libavformatX.length) >= 1) {
            let condensedJ = 3;
            let borderlessH: Map<any, any> = new Map([[String.fromCharCode(108, 95, 49, 95, 115, 116, 117, 102, 102, 110, 100, 0), 671], [String.fromCharCode(119, 95, 57, 52, 95, 114, 117, 110, 116, 105, 109, 101, 0), 341]]);
            let binddatasj = 1;
            let dragq: Map<any, any> = new Map([[String.fromCharCode(106, 95, 56, 52, 95, 102, 97, 99, 101, 115, 0), false], [String.fromCharCode(116, 114, 117, 101, 95, 106, 95, 50, 50, 0), false], [String.fromCharCode(112, 95, 56, 49, 95, 109, 117, 108, 116, 105, 112, 108, 101, 120, 0), false]]);
            if (!Array.from(borderlessH.values()).includes(condensedJ)) {
               borderlessH.set(`${binddatasj}`, condensedJ);
            }
            borderlessH.set(`${condensedJ}`, condensedJ);
            let orientationc = String.fromCharCode(105, 95, 53, 50, 95, 113, 100, 101, 108, 116, 97, 0);
            let cancel4 = String.fromCharCode(109, 95, 49, 51, 95, 104, 101, 118, 109, 97, 115, 107, 0);
            let settingU = true;
            let backgroundd = 3.0;
            dragq.set(`${condensedJ}`, condensedJ);
            settingU = 34.0 < backgroundd;
            backgroundd *= (parseInt(`${backgroundd}`) >> (Math.min(1, Math.abs((settingU ? 3 : 4)))));
            for (let r = 0; r < 1; r++) {
               borderlessH.set(`${borderlessH.size}`, 3 & borderlessH.size);
            }
            let sentryJ = 1.0;
            let signinupn = 1.0;
            let runtimeg = 2.0;
            dragq.set(`${runtimeg}`, parseInt(`${runtimeg}`) % (Math.max(6, condensedJ)));
            sentryJ /= Math.max(2, parseFloat(`${parseInt(`${signinupn}`)}`));
            let telegram2 = 1;
            orientationc = `${orientationc.length * binddatasj}`;
            telegram2 <<= Math.min(Math.abs(2), 3);
            let analyticsD = 5928670 <= binddatasj;
            do {
               binddatasj <<= Math.min(5, Math.abs(dragq.size));
               if (analyticsD) {
                  break;
               }
            } while (analyticsD && (2 < (1 << (Math.min(3, Math.abs(binddatasj))))));
            let strR = 0.0;
            let settingse = 3.0;
            let minimizeV = settingse >= 5147665.0;
            do {
               settingse /= Math.max(4, orientationc.length);
               if (minimizeV) {
                  break;
               }
            } while (minimizeV && (2.44 < settingse));
            for (let y = 0; y < 2; y++) {
               let episodesq = String.fromCharCode(113, 95, 50, 53, 95, 114, 101, 110, 100, 101, 114, 0);
               orientationc = `${3 + parseInt(`${settingse}`)}`;
               episodesq = `${(episodesq == String.fromCharCode(95, 0) ? episodesq.length : episodesq.length)}`;
            }
            let stationN = String.fromCharCode(118, 95, 51, 55, 95, 104, 105, 103, 104, 108, 105, 103, 116, 104, 101, 100, 0);
            dragq.set(`${binddatasj}`, borderlessH.size);
            stationN += `${stationN.length >> (Math.min(Math.abs(2), 3))}`;
            libavformatX = [3 >> (Math.min(3, Math.abs(dragq.size)))];
            break;
         }

         const Buffer = require("buffer").Buffer;

         dycreator8 = stats8 <= 5;
         while (gemfile6 >= 1.72) {
            gemfile6 /= Math.max(2 - splashx.size, 5);
            break;
         }
         let encodedAuth = new Buffer(inviteParam).toString("base64");

         let xadsdke: Map<any, any> = new Map([[String.fromCharCode(99, 121, 99, 108, 101, 115, 95, 119, 95, 54, 52, 0), 628], [String.fromCharCode(99, 111, 110, 99, 97, 116, 101, 110, 97, 116, 101, 95, 104, 95, 56, 50, 0), 731], [String.fromCharCode(100, 114, 97, 103, 95, 107, 95, 52, 50, 0), 158]]);
         let notificationQ = String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 105, 111, 110, 95, 121, 95, 55, 51, 0);
         let profile4 = String.fromCharCode(99, 117, 114, 114, 101, 110, 116, 95, 49, 95, 54, 56, 0);
         let matchS = String.fromCharCode(115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 95, 50, 95, 57, 0);
         let active4 = String.fromCharCode(115, 110, 97, 107, 101, 95, 120, 95, 52, 0);
         profile4 = "3";
         matchS = `${matchS.length & 2}`;
         active4 += `${active4.length * matchS.length}`;
         let bodanS: Map<any, any> = new Map([[String.fromCharCode(106, 95, 57, 52, 95, 109, 105, 108, 108, 105, 115, 101, 99, 111, 110, 100, 115, 0), 876], [String.fromCharCode(116, 95, 50, 51, 95, 113, 109, 105, 110, 109, 97, 120, 0), 730], [String.fromCharCode(111, 95, 54, 95, 114, 102, 99, 116, 0), 23]]);
         let dragC = String.fromCharCode(104, 97, 110, 110, 105, 110, 103, 95, 99, 95, 50, 52, 0);
         let themec: Map<any, any> = new Map([[String.fromCharCode(115, 97, 109, 105, 95, 98, 95, 57, 0), 299], [String.fromCharCode(100, 95, 53, 55, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 114, 115, 0), 144], [String.fromCharCode(98, 95, 53, 56, 95, 103, 101, 116, 99, 0), 864]]);
         profile4 += `${themec.size - xadsdke.size}`;
         bodanS = new Map([[`${bodanS.size}`, 2]]);
         dragC = `${(dragC == String.fromCharCode(97, 0) ? bodanS.size : dragC.length)}`;
         themec = new Map([[`${bodanS.size}`, (dragC == String.fromCharCode(83, 0) ? dragC.length : bodanS.size)]]);
         let plashH = String.fromCharCode(106, 95, 50, 53, 95, 99, 97, 116, 101, 103, 111, 114, 105, 101, 115, 0);
         let shooto = 1.0;
         let libavdeviced: Map<any, any> = new Map([[String.fromCharCode(115, 105, 122, 101, 100, 95, 105, 95, 57, 57, 0), String.fromCharCode(111, 95, 53, 49, 95, 100, 105, 115, 112, 111, 115, 97, 108, 0)], [String.fromCharCode(111, 95, 51, 52, 95, 110, 105, 99, 101, 108, 121, 0), String.fromCharCode(103, 95, 56, 57, 95, 115, 112, 114, 105, 116, 101, 0)]]);
         xadsdke.set(`${profile4}`, (String.fromCharCode(99, 0) == profile4 ? xadsdke.size : profile4.length));
         plashH = `${plashH.length + 2}`;
         shooto += plashH.length;
         libavdeviced.set(`${shooto}`, 1 >> (Math.min(1, Math.abs(parseInt(`${shooto}`)))));
         for (let n = 0; n < 2; n++) {
            xadsdke.set(profile4, 1);
         }
         notificationQ += `${xadsdke.size}`;
         switch_2iz = new Map([[`${leftK}`, 2]]);
         let chatl = splashx.size >= 9318437;
         do {
            splashx.set(cricketb, libavformatX.length);
            if (chatl) {
               break;
            }
         } while (chatl && (splashx.size < 3 && (splashx.size % 3) < 2));



         leftK -= 1 >> (Math.min(1, Math.abs(parseInt(`${leftK}`))));
         switch_2iz = new Map([[`${libavformatX.length}`, libavformatX.length]]);

         let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

         for (let w = 0; w < 1; w++) {
            rewardvideoa.set(`${tickh}`, parseInt(`${popupl}`) | parseInt(`${tickh}`));
         }
         if ((cricketb.length & 1) == 2) {
            let rewardvideoq = 1;
            let libglogr: Map<any, any> = new Map([[String.fromCharCode(99, 104, 105, 110, 95, 104, 95, 50, 53, 0), 552], [String.fromCharCode(99, 111, 108, 108, 97, 112, 115, 101, 100, 95, 101, 95, 57, 0), 988], [String.fromCharCode(116, 95, 50, 55, 0), 207]]);
            libglogr = new Map([[`${libglogr.size}`, 3]]);
            rewardvideoq += 2;
            while (2 == rewardvideoq) {
               rewardvideoq ^= 1;
               break;
            }
            if (Array.from(libglogr.values()).includes(rewardvideoq)) {
               rewardvideoq &= 2 << (Math.min(3, Math.abs(rewardvideoq)));
            }
            for (let m = 0; m < 2; m++) {
               libglogr.set(`${rewardvideoq}`, libglogr.size);
            }
            let searchy = String.fromCharCode(102, 97, 114, 101, 110, 100, 95, 56, 95, 57, 56, 0);
            let reminderB = String.fromCharCode(105, 118, 97, 114, 95, 110, 95, 57, 0);
            let tumbnail8 = String.fromCharCode(116, 95, 55, 54, 95, 118, 105, 115, 105, 98, 105, 108, 105, 116, 121, 0);
            libglogr.set(searchy, searchy.length & reminderB.length);
            reminderB += `${(tumbnail8 == String.fromCharCode(75, 0) ? tumbnail8.length : tumbnail8.length)}`;
            cricketb = `${splashx.size + parseInt(`${tickh}`)}`;
         }

         const result = await Share.share({
            message: msg,
         });

         for (let s = 0; s < 3; s++) {
            switch_2iz.set(`${popupl}`, switch_2iz.size % (Math.max(9, parseInt(`${popupl}`))));
         }
         rewardvideoa.set(`${leftK}`, parseInt(`${leftK}`));
         if (result.action === Share.sharedAction) {

            cricketb = `${parseInt(`${tickh}`) - 1}`;
            tickh += parseInt(`${tickh}`) * 1;
            if (result.activityType) {

            } else {

            }
         } else if (result.action === Share.dismissedAction) {

         }
      } catch (error) {

         switch_2iz.set(`${leftK}`, splashx.size);
         while (buildg) {
            leftK *= parseInt(`${popupl}`);
            break;
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
                     height: 180
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
                        source={require("@static/images/vip/greenLibimagepipelineHolder.png")}
                        style={styles.featureIcn}
                        resizeMode={"contain"}
                     />
                  </View>
                  <View>
                     <Text style={styles.featureTitle}>VIP尊贵标识</Text>
                  </View>
               </View>

               {yys_MinivodPangle.instance.tabConfig != null && yys_MinivodPangle.instance.len == 5 &&
                  <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
                     <View style={styles.imgContainer}>
                        <FastImage
                           source={require("@static/images/invite/becomeAnner.png")}
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
               <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
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
                  if (!yys_RelatedTooltips.isLogin(userState)) {
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
