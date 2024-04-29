

class SportsCalendarGoogle {
    static favoriteBodanFlipperThailand = (contents: [number], key: number, hasEmoji: boolean) => {
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

import WhatsappIcn from "@static/images/invite/downloaderMini.svg";
import FastImage from "../common/tt_connection";
import TelegramIcn from "@static/images/invite/hookManagerPlaceholder.svg";
import FacebookIcn from "@static/images/invite/guideSigninupGroup.svg";
import WechatIcn from "@static/images/invite/chatHelperSingapore.svg";

import WeiboIcn from "@static/images/invite/dplusColorsMuted.svg";
import CopyIcn from "@static/images/invite/volumeUntick.svg";
import ProfileIcn from "@static/images/invite/sourceVietnam.svg";

import { TouchableOpacity } from "@gorhom/bottom-sheet";

import LinearGradient from "react-native-linear-gradient";
import { useAppDispatch, useAppSelector } from "@hooks/tt_spec_download";
import { showLoginAction } from "@redux/actions/tt_copy_heji";
import { APP_NAME_CONST, INVITE_DOMAIN } from "@utility/tt_trophy_cross";
import { ttConfigRecommendation } from "../../../tt_copy_floater";
import NotificationModal from "../modal/tt_countdown";

import SinaIcon from "@static/images/interstitialGesture.svg";
import WeChatIcon from "@static/images/chatHelperSingapore.svg";
import QQIcon from "@static/images/sideSingle.svg";
import PYQIcon from "@static/images/teamMinivod.svg";
import { screenModel } from "@type/tt_twitter_data";
import { ttFast } from "@models/tt_stations_right";
interface ttSmall {
  userState: ttFast;
}
export default function InviteCard({ userState = {} }: ttSmall) {
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
       let playlistf = 1.0;
    let gpayM = 4;
    let dataX: Array<any> = [249, 460, 139];
    let eactm: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,114,0),164], [String.fromCharCode(102,117,108,108,95,115,95,52,54,0),708]]);
    let soundM = false;
    let mbbidI = false;
    let floaterf = 1.0;
    let alertw = 5.0;
    let linkM = false;
    let baiduY = false;
    let blacklistI = false;
    let playlist3 = String.fromCharCode(101,118,97,108,117,108,97,116,101,0);
    let lefti: Map<any, any> = new Map([[String.fromCharCode(100,111,97,108,108,0),451], [String.fromCharCode(104,109,97,99,105,100,0),598]]);
      alertw /= Math.max(parseFloat(`${2}`), 3);
       let twitter9 = String.fromCharCode(117,110,114,101,102,0);
       let lightq: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,120,97,98,108,101,0),356], [String.fromCharCode(114,101,97,100,121,0),16], [String.fromCharCode(120,118,109,99,0),767]]);
      for (let e = 0; e < 3; e++) {
         twitter9 = `${1 >> (Math.min(2, twitter9.length))}`;
      }
         twitter9 = `${(twitter9 == String.fromCharCode(112,0) ? lightq.size : twitter9.length)}`;
          let serviceL: Array<any> = [875, 255, 657];
         twitter9 = `${lightq.size}`;
         serviceL.push(serviceL.length ^ serviceL.length);
      for (let x = 0; x < 2; x++) {
          let watchl = String.fromCharCode(117,110,99,111,100,101,100,0);
          let core5 = String.fromCharCode(100,101,112,101,110,100,115,0);
         lightq.set(core5, (String.fromCharCode(113,0) == core5 ? core5.length : watchl.length));
      }
       let formN: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,114,111,105,100,115,0),173], [String.fromCharCode(100,105,112,111,115,97,98,108,101,0),91], [String.fromCharCode(116,101,114,109,105,110,97,116,101,0),891]]);
       let slider9: Map<any, any> = new Map([[String.fromCharCode(101,95,57,95,97,99,99,117,109,0),249], [String.fromCharCode(111,117,116,111,117,116,0),933]]);
       let store1 = String.fromCharCode(100,114,111,112,0);
       let forward8 = String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,0);
      baiduY = blacklistI;
       let megaphoneR = 2;
          let closeB: Array<any> = [315, 862, 950];
          let producte = String.fromCharCode(119,97,108,108,112,97,112,101,114,0);
          let indicatoro = String.fromCharCode(101,110,99,104,0);
         megaphoneR &= indicatoro.length;
         closeB.push(closeB.length);
         producte += `${closeB.length}`;
         indicatoro += `${closeB.length}`;
          let clockh = 1.0;
          let history3 = String.fromCharCode(97,108,103,111,114,105,116,104,109,115,0);
         megaphoneR -= parseInt(`${clockh}`) / 1;
         clockh -= parseFloat(`${3 + history3.length}`);
         history3 = "1";
         megaphoneR *= 2 | megaphoneR;
      gpayM ^= 1;
   while (mbbidI) {
       let contextv = 5;
       let bing_ = String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,0);
       let main_xV: Array<any> = [902, 451];
       let placeholderO = String.fromCharCode(102,105,108,101,116,105,109,101,0);
      if (4 < contextv) {
         bing_ += `${bing_.length}`;
      }
      let overlayQ = String.fromCharCode(56,52,120,102,113,50,104,103,95,0) == bing_;
      do {
         bing_ = `${placeholderO.length + main_xV.length}`;
         if (overlayQ) {
            break;
         }
      } while ((2 > (contextv ^ bing_.length) && 2 > (2 ^ bing_.length)) && overlayQ);
      let vignettep = String.fromCharCode(55,56,101,0) == placeholderO;
      do {
          let floater0 = String.fromCharCode(114,111,117,116,101,0);
          let gesturesP = 5;
         placeholderO += `${3 | gesturesP}`;
         floater0 += `${floater0.length | floater0.length}`;
         gesturesP |= 2 + floater0.length;
         if (vignettep) {
            break;
         }
      } while ((bing_.length <= placeholderO.length) && vignettep);
      let emojio = bing_.length >= 9019531;
      do {
          let hooksm = 2;
          let suggestion9 = String.fromCharCode(111,112,117,115,102,105,108,101,0);
          let minimizeL = 0.0;
          let settingsq: Array<any> = [String.fromCharCode(104,105,115,116,111,114,105,101,115,0), String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,0)];
         bing_ += `${1 % (Math.max(8, parseInt(`${minimizeL}`)))}`;
         hooksm ^= settingsq.length >> (Math.min(Math.abs(1), 2));
         suggestion9 = `${settingsq.length / (Math.max(suggestion9.length, 8))}`;
         minimizeL -= parseFloat(`${settingsq.length}`);
         if (emojio) {
            break;
         }
      } while (emojio && (placeholderO == String.fromCharCode(54,0)));
      if (placeholderO == String.fromCharCode(86,0)) {
         bing_ += `${placeholderO.length}`;
      }
         main_xV = [contextv % 2];
      if (2 == bing_.length) {
          let clearX = String.fromCharCode(115,116,114,105,99,116,0);
         contextv ^= placeholderO.length + 2;
         clearX = `${clearX.length}`;
      }
       let hongkongp = 2.0;
      for (let m = 0; m < 1; m++) {
         contextv *= 1 - placeholderO.length;
      }
      while ((5 << (Math.min(1, Math.abs(contextv)))) < 3) {
         contextv -= 2;
         break;
      }
      while (5 == (3 | placeholderO.length) && 2.16 == (hongkongp / (Math.max(4.53, 8)))) {
         hongkongp *= contextv - 3;
         break;
      }
          let detailsO = String.fromCharCode(113,117,101,114,121,0);
          let mbbannerj: Map<any, any> = new Map([[String.fromCharCode(110,101,101,100,108,101,0),703], [String.fromCharCode(103,101,116,110,97,109,101,105,110,102,111,0),109], [String.fromCharCode(102,97,97,110,100,99,116,0),264]]);
         main_xV.push(parseInt(`${hongkongp}`) - contextv);
         detailsO = `${mbbannerj.size}`;
         mbbannerj = new Map([[`${mbbannerj.size}`, (String.fromCharCode(119,0) == detailsO ? mbbannerj.size : detailsO.length)]]);
      mbbidI = !soundM;
      break;
   }
       let privacy4 = String.fromCharCode(111,112,116,105,109,105,115,116,105,99,0);
      if (privacy4.length <= 1) {
          let frame_zbR = String.fromCharCode(114,101,115,112,111,110,100,0);
         privacy4 = `${3 >> (Math.min(1, frame_zbR.length))}`;
      }
      if (!privacy4.includes(`${privacy4.length}`)) {
         privacy4 += `${privacy4.length | privacy4.length}`;
      }
      for (let m = 0; m < 2; m++) {
         privacy4 = "3";
      }
      gpayM &= ((linkM ? 5 : 2) / (Math.max(parseInt(`${alertw}`), 10)));
      floaterf += (parseFloat(`${parseInt(`${playlistf}`) & (mbbidI ? 3 : 2)}`));
   if (linkM) {
      linkM = floaterf == 64.17;
   }
   if (2 < dataX.length) {
      eactm.set(`${baiduY}`, 2 << (Math.min(Math.abs(parseInt(`${alertw}`)), 3)));
   }
   while (!Array.from(eactm.keys()).includes(`${playlistf}`)) {
      playlistf -= 3 / (Math.max(3, parseInt(`${playlistf}`)));
      break;
   }
       let areaM = 1.0;
       let leaguey = String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,0);
         leaguey += `${2 | leaguey.length}`;
         areaM += parseFloat(`${3 / (Math.max(1, parseInt(`${areaM}`)))}`);
         leaguey = `${1 - parseInt(`${areaM}`)}`;
          let megaphones: Map<any, any> = new Map([[String.fromCharCode(103,114,97,121,115,99,97,108,101,0),String.fromCharCode(114,101,116,117,114,110,105,110,103,0)], [String.fromCharCode(102,101,116,99,104,101,100,0),String.fromCharCode(112,97,105,110,116,0)], [String.fromCharCode(99,108,97,115,104,101,100,0),String.fromCharCode(101,120,116,101,114,110,97,108,0)]]);
         leaguey += "1";
         megaphones.set(`${megaphones.size}`, megaphones.size);
         leaguey += "2";
         areaM += parseFloat(`${leaguey.length}`);
      dataX.push((1 & (blacklistI ? 3 : 1)));
   while (3.49 < (floaterf / (Math.max(5.50, 1)))) {
      floaterf -= parseFloat(`${eactm.size}`);
      break;
   }
      floaterf += parseFloat(`${parseInt(`${floaterf}`) % 3}`);
   if (3.64 >= (playlistf * 3.22) && (parseInt(`${playlistf}`) * gpayM) >= 3) {
      gpayM |= ((blacklistI ? 3 : 2) - parseInt(`${alertw}`));
   }
   for (let t = 0; t < 2; t++) {
      gpayM *= ((soundM ? 5 : 5) | gpayM);
   }
   let tramini3 = blacklistI ? !blacklistI : blacklistI;
   do {
      blacklistI = (alertw * parseFloat(`${eactm.size}`)) == 2.39;
      if (tramini3) {
         break;
      }
   } while ((baiduY || blacklistI) && tramini3);
       let slider3 = 1;
       let inactiveK = 0.0;
       let live_ = 4.0;
         inactiveK *= parseFloat(`${parseInt(`${inactiveK}`) ^ 1}`);
          let hooksR = false;
          let ewardedD = 1;
          let middle5: Array<any> = [202, 107, 803];
         live_ *= middle5.length | 1;
         hooksR = hooksR || ewardedD > 29;
         ewardedD *= ((hooksR ? 5 : 2) << (Math.min(Math.abs(ewardedD), 3)));
         middle5 = [2];
      if ((slider3 * 5) == 5 || 5 == (parseInt(`${inactiveK}`) * slider3)) {
         slider3 += parseInt(`${inactiveK}`) * parseInt(`${live_}`);
      }
          let shirtj = false;
         inactiveK -= (parseFloat(`${parseInt(`${live_}`) * (shirtj ? 5 : 4)}`));
          let libcrashsdkG = String.fromCharCode(109,97,112,112,97,98,108,101,0);
          let thumbnailS = String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,50,95,49,56,0);
         inactiveK += parseFloat(`${parseInt(`${inactiveK}`) ^ libcrashsdkG.length}`);
         libcrashsdkG = `${thumbnailS.length % (Math.max(2, thumbnailS.length))}`;
          let animation6 = 2.0;
          let thumbnails = 3.0;
         live_ /= Math.max(parseInt(`${live_}`) - parseInt(`${thumbnails}`), 1);
         animation6 /= Math.max(2, 5);
         thumbnails *= parseFloat(`${parseInt(`${animation6}`)}`);
      let previewY = live_ >= 5737925.0;
      do {
          let taiwanB = 1;
         live_ += slider3 + 2;
         taiwanB ^= taiwanB;
         if (previewY) {
            break;
         }
      } while (previewY && (live_ <= 2.5));
         inactiveK += parseFloat(`${slider3 ^ parseInt(`${inactiveK}`)}`);
          let dropdown8: Map<any, any> = new Map([[String.fromCharCode(105,116,115,101,108,102,0),true ], [String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,0),false ]]);
         slider3 *= slider3 / (Math.max(parseInt(`${inactiveK}`), 6));
         dropdown8.set(`${dropdown8.size}`, dropdown8.size / (Math.max(7, dropdown8.size)));
      soundM = 78.97 > (floaterf / (Math.max(playlistf, 6)));
      dataX = [1];
   let manifest_ = baiduY ? !baiduY : baiduY;
   do {
      baiduY = alertw < 52.32;
      if (manifest_) {
         break;
      }
   } while ((blacklistI) && manifest_);
      alertw += parseFloat(`${parseInt(`${alertw}`) + 1}`);
      baiduY = alertw == 53.100;
      mbbidI = 24.25 >= floaterf;
   while (1.29 <= floaterf) {
      floaterf *= parseFloat(`${parseInt(`${playlistf}`)}`);
      break;
   }
   let auto_adV = mbbidI ? !mbbidI : mbbidI;
   do {
      mbbidI = 74 < playlist3.length;
      if (auto_adV) {
         break;
      }
   } while (auto_adV && (mbbidI));
   let componentw = 7546096 <= gpayM;
   do {
      gpayM ^= dataX.length;
      if (componentw) {
         break;
      }
   } while (((3 - gpayM) < 5 || 4.24 < (parseFloat(`${gpayM}`) + alertw)) && componentw);
      playlistf *= ((mbbidI ? 2 : 1) >> (Math.min(Math.abs(3), 1)));
       let settingss: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,0),475], [String.fromCharCode(105,100,102,118,95,119,95,49,52,0),434], [String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,0),203]]);
       let downS = String.fromCharCode(99,111,110,116,105,103,117,111,117,115,0);
       let halfi: Map<any, any> = new Map([[String.fromCharCode(121,98,121,114,0),302], [String.fromCharCode(100,105,115,116,0),397], [String.fromCharCode(118,97,114,0),678]]);
      for (let t = 0; t < 2; t++) {
         downS = `${(downS == String.fromCharCode(74,0) ? downS.length : halfi.size)}`;
      }
      let zoomu = downS == String.fromCharCode(112,52,120,120,105,111,106,101,117,0);
      do {
         downS += `${settingss.size}`;
         if (zoomu) {
            break;
         }
      } while (zoomu && (4 >= (halfi.size / 5) && 2 >= (halfi.size / (Math.max(5, 7)))));
      for (let m = 0; m < 3; m++) {
         downS += `${2 + downS.length}`;
      }
          let bridgec = String.fromCharCode(115,111,117,110,100,101,120,0);
          let updatesS = 1.0;
          let selecta: Array<any> = [365, 761];
         halfi = new Map([[downS, 3]]);
         bridgec = "3";
         updatesS -= parseInt(`${updatesS}`) - 2;
         selecta.push(parseInt(`${updatesS}`) | bridgec.length);
         downS += "2";
         settingss.set(`${settingss.size}`, settingss.size);
      let navigation6 = halfi.size >= 8102345;
      do {
          let listA: Array<any> = [String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,0), String.fromCharCode(111,110,121,120,100,0), String.fromCharCode(114,101,98,97,115,101,0)];
          let darkc = String.fromCharCode(115,116,114,109,97,116,99,104,0);
         halfi.set(`${settingss.size}`, halfi.size >> (Math.min(2, Math.abs(settingss.size))));
         listA.push(darkc.length / 2);
         darkc = `${darkc.length << (Math.min(3, listA.length))}`;
         if (navigation6) {
            break;
         }
      } while (navigation6 && (5 >= (halfi.size ^ downS.length)));
      if (!Array.from(settingss.values()).includes(halfi.size)) {
         settingss = new Map([[`${halfi.size}`, halfi.size & 3]]);
      }
          let previewx = 3;
         halfi.set(`${halfi.size}`, settingss.size / (Math.max(2, 9)));
         previewx &= 3 | previewx;
      soundM = blacklistI;
      floaterf *= parseFloat(`${gpayM + 3}`);

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
       let pressureq = String.fromCharCode(100,111,119,110,115,99,97,108,101,0);
    let slider9 = String.fromCharCode(102,108,111,97,116,115,104,111,114,116,0);
    let cast7: Array<any> = [897, 428, 615];
    let episodesP = String.fromCharCode(109,97,105,110,98,117,110,100,108,101,0);
    let bootsplashT: Array<any> = [String.fromCharCode(100,108,105,115,116,0), String.fromCharCode(118,116,101,110,99,0)];
    let untickz = true;
    let submitu = String.fromCharCode(115,101,99,111,110,100,112,97,115,115,0);
    let crossI: Array<any> = [11, 149, 321];
    let indexw = false;
    let trashH = String.fromCharCode(100,97,114,116,115,0);
    let middle5 = 2.0;
    let fieldL = String.fromCharCode(117,110,115,101,116,0);
    let crownV: Array<any> = [969, 507];
    let baiduG = true;
    let selectiont = 1.0;
    let buildm = String.fromCharCode(111,117,116,99,111,109,101,0);
   let awayk = trashH == String.fromCharCode(116,114,114,100,57,102,113,0);
   do {
      trashH += `${1 * pressureq.length}`;
      if (awayk) {
         break;
      }
   } while ((middle5 > 3.9) && awayk);
      trashH = `${(slider9 == String.fromCharCode(90,0) ? (indexw ? 2 : 3) : slider9.length)}`;
   for (let s = 0; s < 2; s++) {
       let unreadV = 5.0;
       let plusK = String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,0);
       let overlayE = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,0);
       let ewarded6 = false;
      if (2.18 >= (3.76 * unreadV)) {
         unreadV -= ((ewarded6 ? 4 : 1) * overlayE.length);
      }
      if (!ewarded6 && overlayE.length < 3) {
         overlayE = `${overlayE.length}`;
      }
         ewarded6 = (parseInt(`${unreadV}`) - overlayE.length) == 97;
          let sportY: Map<any, any> = new Map([[String.fromCharCode(100,99,116,0),false ], [String.fromCharCode(100,101,115,116,111,114,121,0),false ], [String.fromCharCode(109,101,97,110,105,110,103,102,117,108,0),true ]]);
          let playercommonF = String.fromCharCode(114,101,99,117,114,115,105,111,110,0);
          let episodesh = String.fromCharCode(98,121,114,121,105,0);
         plusK += `${1 - parseInt(`${unreadV}`)}`;
         sportY.set(`${playercommonF}`, sportY.size | 2);
         playercommonF = `${sportY.size}`;
         episodesh += `${playercommonF.length}`;
          let material6 = String.fromCharCode(100,111,99,107,101,114,0);
          let ewardedo: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,0),204], [String.fromCharCode(109,111,110,111,119,104,105,116,101,0),752], [String.fromCharCode(116,97,114,103,97,0),138]]);
         unreadV /= Math.max(plusK.length % (Math.max(10, parseInt(`${unreadV}`))), 3);
         material6 = `${(material6 == String.fromCharCode(67,0) ? material6.length : ewardedo.size)}`;
         ewardedo.set(material6, ewardedo.size - 3);
          let backwardM = 1.0;
          let styleC = 2.0;
         ewarded6 = (overlayE.length + unreadV) < 86.78;
         backwardM += 1;
         styleC *= parseFloat(`${parseInt(`${backwardM}`)}`);
         overlayE += `${plusK.length ^ 1}`;
         ewarded6 = plusK.length < unreadV;
         overlayE += "3";
      if (plusK.startsWith(`${ewarded6}`)) {
         plusK = `${plusK.length + 2}`;
      }
          let stylesa = String.fromCharCode(114,111,116,97,116,105,110,103,0);
          let bodanS = String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,0);
          let faviconP = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,0);
         ewarded6 = (overlayE.length + bodanS.length) < 3;
         stylesa = `${3 + faviconP.length}`;
         bodanS += "3";
         faviconP += `${faviconP.length * stylesa.length}`;
      while (overlayE.includes(plusK)) {
         overlayE += "2";
         break;
      }
      submitu += `${((untickz ? 5 : 1) / (Math.max(1, 10)))}`;
   }

    if (ttFast.isGuest(userState)) {

   for (let g = 0; g < 2; g++) {
       let baiduN: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,0),true ], [String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,54,95,50,50,0),false ]]);
       let downI = String.fromCharCode(114,101,97,99,116,0);
       let moduleO = String.fromCharCode(111,111,108,116,105,112,0);
       let smalld: Array<any> = [950, 832, 472];
      for (let f = 0; f < 3; f++) {
         moduleO += `${smalld.length % (Math.max(1, 9))}`;
      }
          let lnewsz = String.fromCharCode(105,100,101,116,0);
          let s_viewd = String.fromCharCode(115,99,97,108,101,0);
         moduleO = `${smalld.length * lnewsz.length}`;
         lnewsz += `${s_viewd.length}`;
         s_viewd = `${s_viewd.length / 3}`;
          let bufferh = false;
          let downloaded5 = String.fromCharCode(105,109,112,108,105,99,105,116,0);
          let applex = true;
         moduleO += `${(moduleO.length << (Math.min(1, Math.abs((bufferh ? 4 : 2)))))}`;
         bufferh = !applex || downloaded5.length < 32;
         downloaded5 = `${(String.fromCharCode(103,0) == downloaded5 ? downloaded5.length : (applex ? 2 : 1))}`;
      let fastforwardQ = baiduN.size >= 7997280;
      do {
         baiduN = new Map([[`${baiduN.size}`, baiduN.size + 2]]);
         if (fastforwardQ) {
            break;
         }
      } while (fastforwardQ && ((baiduN.size >> (Math.min(Math.abs(1), 4))) < 1));
         downI = `${smalld.length}`;
      for (let h = 0; h < 3; h++) {
         moduleO = `${(downI == String.fromCharCode(55,0) ? baiduN.size : downI.length)}`;
      }
      for (let x = 0; x < 2; x++) {
         baiduN.set(downI, 2 | downI.length);
      }
      while (3 == (downI.length + baiduN.size) || 3 == (baiduN.size + 3)) {
         downI = "1";
         break;
      }
          let feedback6 = String.fromCharCode(115,116,114,112,116,105,109,101,0);
          let crownf: Array<any> = [971, 160, 900];
         downI += `${2 >> (Math.min(1, crownf.length))}`;
         feedback6 += "2";
         crownf.push(2 ^ feedback6.length);
          let mbjscommonJ: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,0),false ], [String.fromCharCode(111,114,100,101,114,105,110,103,0),true ]]);
          let b_lockS = 1;
         downI = `${baiduN.size >> (Math.min(4, Math.abs(mbjscommonJ.size)))}`;
         mbjscommonJ = new Map([[`${b_lockS}`, b_lockS ^ b_lockS]]);
         moduleO += `${downI.length}`;
         moduleO += `${baiduN.size >> (Math.min(Math.abs(3), 1))}`;
      submitu = `${smalld.length % (Math.max(trashH.length, 9))}`;
   }
   let successU = pressureq.length <= 7534100;
   do {
      pressureq = `${pressureq.length & episodesP.length}`;
      if (successU) {
         break;
      }
   } while ((2 >= (pressureq.length * cast7.length)) && successU);
   for (let w = 0; w < 2; w++) {
       let bell_ = String.fromCharCode(112,108,117,114,97,108,0);
       let storen: Map<any, any> = new Map([[String.fromCharCode(107,118,111,0),String.fromCharCode(117,110,115,104,105,102,116,0)], [String.fromCharCode(99,121,97,110,0),String.fromCharCode(120,111,114,101,100,0)], [String.fromCharCode(101,118,112,111,114,116,0),String.fromCharCode(109,118,101,99,0)]]);
       let private_ly = String.fromCharCode(116,111,111,108,98,97,114,0);
          let manifest_ = 1;
         private_ly += `${(String.fromCharCode(49,0) == private_ly ? private_ly.length : manifest_)}`;
      for (let z = 0; z < 3; z++) {
         bell_ += `${(private_ly == String.fromCharCode(113,0) ? storen.size : private_ly.length)}`;
      }
      while (private_ly.includes(`${storen.size}`)) {
          let filed8 = String.fromCharCode(103,101,109,102,105,108,101,0);
         storen.set(`${filed8}`, filed8.length >> (Math.min(5, Math.abs(storen.size))));
         break;
      }
      for (let n = 0; n < 2; n++) {
         storen = new Map([[`${storen.size}`, private_ly.length & storen.size]]);
      }
       let rankb = String.fromCharCode(120,95,55,57,95,109,105,108,108,105,115,0);
          let suggestionn = String.fromCharCode(115,105,109,112,108,101,119,114,105,116,101,95,121,95,51,48,0);
          let tumbnailN = true;
         storen = new Map([[`${tumbnailN}`, suggestionn.length]]);
       let backwardJ = false;
       let long_pC = true;
       let footballW = true;
       let smallg = false;
      if (rankb.includes(`${smallg}`)) {
         rankb += "2";
      }
      cast7.push(2);
   }
      dispatch(showLoginAction());

      indexw = 51 == bootsplashT.length;
       let bufferr: Array<any> = [476, 583, 254];
       let dialoga = true;
      if (dialoga) {
         dialoga = !dialoga;
      }
          let whitex: Array<any> = [916, 181];
         bufferr = [bufferr.length];
         whitex = [whitex.length ^ 1];
         bufferr.push(1);
      while ((1 ^ bufferr.length) < 3) {
         dialoga = !dialoga;
         break;
      }
      let optionsy = bufferr.length >= 5928847;
      do {
          let specV = String.fromCharCode(115,110,110,105,100,0);
          let changed = 3.0;
         bufferr = [bufferr.length - parseInt(`${changed}`)];
         specV += "1";
         changed *= specV.length;
         if (optionsy) {
            break;
         }
      } while (optionsy && (bufferr.length <= 3 || (3 & bufferr.length) <= 1));
      if (5 > bufferr.length && 3 > (5 >> (Math.min(2, bufferr.length)))) {
         dialoga = (44 == (bufferr.length * (!dialoga ? 44 : bufferr.length)));
      }
      slider9 = `${episodesP.length}`;
   if (1 < (crossI.length >> (Math.min(bootsplashT.length, 1)))) {
      crossI.push(fieldL.length);
   }
      return;

   for (let m = 0; m < 3; m++) {
       let splashM = String.fromCharCode(98,114,101,97,107,115,0);
      let filla = 5063336 >= splashM.length;
      do {
         splashM += `${splashM.length}`;
         if (filla) {
            break;
         }
      } while ((5 < splashM.length) && filla);
          let vietnamw: Array<any> = [String.fromCharCode(99,111,115,116,105,0), String.fromCharCode(113,99,97,110,0), String.fromCharCode(108,115,112,112,111,108,121,102,0)];
         splashM = `${splashM.length ^ 3}`;
         vietnamw = [1 - vietnamw.length];
      let selectq = splashM == String.fromCharCode(49,116,99,97,56,0);
      do {
         splashM += `${splashM.length % (Math.max(9, splashM.length))}`;
         if (selectq) {
            break;
         }
      } while ((splashM != splashM) && selectq);
      cast7.push(submitu.length);
   }
      trashH += `${cast7.length}`;
   while ((cast7.length ^ 1) >= 2) {
       let completej = 1.0;
       let stylesg = 2.0;
       let tailv = 3.0;
       let relatedo = String.fromCharCode(112,105,99,107,109,111,100,101,0);
      for (let x = 0; x < 3; x++) {
         relatedo = `${parseInt(`${tailv}`)}`;
      }
          let sinaM = 2.0;
          let cornerc = 4.0;
          let activeL = false;
         stylesg /= Math.max(parseFloat(`${2 + parseInt(`${sinaM}`)}`), 4);
         sinaM /= Math.max(1, (parseFloat(`${parseInt(`${cornerc}`) & (activeL ? 1 : 2)}`)));
         cornerc += parseInt(`${cornerc}`) / 1;
         activeL = !activeL;
       let bridget = 3.0;
      if (3 > (parseInt(`${tailv}`) / (Math.max(4, relatedo.length)))) {
         tailv += parseInt(`${stylesg}`) & parseInt(`${bridget}`);
      }
      for (let u = 0; u < 2; u++) {
         relatedo = `${parseInt(`${completej}`) % 1}`;
      }
         stylesg /= Math.max(3, parseFloat(`${1}`));
         tailv /= Math.max(2 ^ parseInt(`${completej}`), 1);
         relatedo += `${parseInt(`${bridget}`) * parseInt(`${stylesg}`)}`;
      let viewerp = stylesg >= 7252612.0;
      do {
         stylesg /= Math.max(parseFloat(`${parseInt(`${completej}`)}`), 1);
         if (viewerp) {
            break;
         }
      } while (viewerp && (5.42 < (completej / (Math.max(stylesg, 2))) && 5.42 < (completej / (Math.max(stylesg, 10)))));
         tailv /= Math.max(parseInt(`${completej}`) % (Math.max(parseInt(`${stylesg}`), 4)), 1);
      while ((tailv + stylesg) <= 2.59) {
          let emojic = String.fromCharCode(110,109,104,100,0);
         stylesg *= parseFloat(`${2 * parseInt(`${bridget}`)}`);
         emojic = `${emojic.length - 2}`;
         break;
      }
          let huaweid = String.fromCharCode(117,110,101,115,99,97,112,101,0);
          let inactivel = 3.0;
         bridget *= 3;
         huaweid = `${1 >> (Math.min(1, Math.abs(parseInt(`${inactivel}`))))}`;
         inactivel += parseInt(`${inactivel}`) << (Math.min(huaweid.length, 2));
      cast7.push(parseInt(`${stylesg}`) >> (Math.min(cast7.length, 4)));
      break;
   }
    }
    const url =
      SportsCalendarGoogle.favoriteBodanFlipperThailand([109,113,113,117,118,63,42,42,114,100,43,104,96,42,58,113,96,125,113,56,5],0x5,false) + shareOptions.message + " " + shareOptions.url; 

   for (let v = 0; v < 3; v++) {
      crownV.push(submitu.length);
   }
   let bootsplashd = 9188754 <= crownV.length;
   do {
      crownV = [1];
      if (bootsplashd) {
         break;
      }
   } while ((1 <= (3 | slider9.length) && 3 <= (slider9.length | crownV.length)) && bootsplashd);
      crossI.push(episodesP.length - 2);
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {

      middle5 /= Math.max(bootsplashT.length, 5);
      middle5 /= Math.max(3, crownV.length ^ 1);
      middle5 *= episodesP.length % 2;
          console.error(`Cannot open URL: ${url}`);
        } else {

   let textY = crownV.length <= 6260079;
   do {
       let streamings: Array<any> = [627, 708, 479];
       let yingf = String.fromCharCode(101,95,55,50,95,103,114,97,100,0);
       let libcrashsdkf = String.fromCharCode(100,105,115,97,108,108,111,119,0);
         streamings.push(libcrashsdkf.length);
      for (let d = 0; d < 2; d++) {
         yingf += `${streamings.length / 3}`;
      }
       let selectedv = String.fromCharCode(109,118,114,101,102,0);
      for (let e = 0; e < 2; e++) {
         yingf = `${libcrashsdkf.length}`;
      }
          let libcrashsdkZ = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,0);
          let questV = String.fromCharCode(110,111,116,101,115,0);
         selectedv += `${(String.fromCharCode(84,0) == questV ? questV.length : libcrashsdkZ.length)}`;
      if (yingf.endsWith(`${streamings.length}`)) {
          let dplusc = 3.0;
          let friendsm = 1.0;
          let fullM = String.fromCharCode(116,109,112,0);
          let sharedb = String.fromCharCode(114,101,99,108,97,105,109,0);
         yingf = `${selectedv.length}`;
         dplusc /= Math.max(fullM.length, 3);
         friendsm *= sharedb.length * 2;
         fullM = `${sharedb.length >> (Math.min(1, Math.abs(parseInt(`${dplusc}`))))}`;
      }
      if (yingf.startsWith(libcrashsdkf)) {
         yingf += `${2 >> (Math.min(4, streamings.length))}`;
      }
      for (let x = 0; x < 2; x++) {
          let c_managero = String.fromCharCode(112,114,101,118,101,110,116,101,100,0);
          let cornerA = 1.0;
          let logoO = true;
          let ewardedw: Map<any, any> = new Map([[String.fromCharCode(110,111,116,103,101,116,0),276], [String.fromCharCode(97,115,115,112,111,114,116,0),492]]);
         streamings = [(selectedv == String.fromCharCode(87,0) ? selectedv.length : (logoO ? 2 : 1))];
         c_managero = "3";
         cornerA -= 2;
         logoO = c_managero == String.fromCharCode(49,0) || ewardedw.size <= 33;
         ewardedw.set(`${cornerA}`, 1 - ewardedw.size);
      }
         libcrashsdkf = `${selectedv.length}`;
      crownV = [(parseInt(`${middle5}`) / (Math.max(9, (indexw ? 1 : 4))))];
      if (textY) {
         break;
      }
   } while ((fieldL.endsWith(`${crownV.length}`)) && textY);
   for (let z = 0; z < 2; z++) {
       let security1 = 3.0;
       let connectionO = true;
       let langkeyd = String.fromCharCode(116,97,100,100,0);
       let texto = 4.0;
         langkeyd = `${2 | parseInt(`${security1}`)}`;
         langkeyd = `${1 + parseInt(`${security1}`)}`;
      let corner4 = connectionO ? !connectionO : connectionO;
      do {
          let roboto4 = String.fromCharCode(117,95,56,53,0);
          let statsp = String.fromCharCode(109,101,101,116,117,112,0);
          let topicz = 3;
          let langD: Map<any, any> = new Map([[String.fromCharCode(99,117,114,95,100,95,57,50,0),true ], [String.fromCharCode(97,108,115,101,0),true ]]);
         connectionO = (roboto4.length & topicz) <= 13;
         roboto4 = `${statsp.length & langD.size}`;
         statsp += `${3 & langD.size}`;
         topicz ^= langD.size;
         if (corner4) {
            break;
         }
      } while (corner4 && (!connectionO));
      if ((5.6 + security1) == 5.44) {
         connectionO = (parseInt(`${texto}`) / (Math.max(langkeyd.length, 2))) <= 50;
      }
         security1 *= ((connectionO ? 3 : 4));
      if (5 > langkeyd.length) {
         connectionO = (security1 - texto) >= 29.33;
      }
      while (4.65 < (security1 - 2.10) && (2.10 - texto) < 4.4) {
         texto += parseFloat(`${langkeyd.length}`);
         break;
      }
      for (let u = 0; u < 3; u++) {
         connectionO = security1 <= 79.82;
      }
         connectionO = !connectionO;
      for (let g = 0; g < 2; g++) {
          let paginationd: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,116,101,100,0),651], [String.fromCharCode(102,108,97,116,116,101,110,0),298], [String.fromCharCode(99,95,54,55,95,105,110,118,111,107,101,0),361]]);
          let reada = true;
          let debugY: Array<any> = [String.fromCharCode(112,101,114,102,111,114,109,0), String.fromCharCode(111,112,116,105,111,110,97,108,0)];
          let videocommon8 = String.fromCharCode(112,117,115,104,101,100,0);
          let downloadD: Array<any> = [407, 909, 99];
         langkeyd += `${parseInt(`${texto}`) * 2}`;
         paginationd.set(videocommon8, 2 - downloadD.length);
         reada = downloadD.length < paginationd.size;
         debugY.push(1 + downloadD.length);
         videocommon8 = `${paginationd.size}`;
      }
         langkeyd = `${((connectionO ? 3 : 3) ^ parseInt(`${security1}`))}`;
      for (let n = 0; n < 3; n++) {
         texto += parseFloat(`${parseInt(`${texto}`) << (Math.min(Math.abs(parseInt(`${security1}`)), 3))}`);
      }
      cast7 = [fieldL.length % (Math.max(3, 3))];
   }
      slider9 = `${crossI.length}`;
          console.log(`Opened URL: ${url}`);
        }
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
      });
  };

  const shareToTelegram = async () => {
       let splashn: Map<any, any> = new Map([[String.fromCharCode(114,112,122,97,0),446], [String.fromCharCode(103,101,116,108,97,100,100,114,115,0),907]]);
    let sigmobB = String.fromCharCode(99,97,114,101,102,117,108,108,121,0);
    let kick2 = 5;
    let foreground2: Array<any> = [924, 144];
    let ajaxk = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,0);
    let emojif = true;
    let expandA: Map<any, any> = new Map([[String.fromCharCode(113,95,53,95,110,111,101,120,112,0),String.fromCharCode(100,105,115,99,111,118,101,114,0)], [String.fromCharCode(112,97,114,115,105,110,103,0),String.fromCharCode(107,95,54,49,95,100,101,99,114,121,112,116,0)], [String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,0),String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,0)]]);
    let theme8 = true;
    let viewer6 = 4.0;
    let expired7 = String.fromCharCode(116,104,114,111,117,103,104,112,117,116,0);
    let minimizeG: Array<any> = [338, 810, 194];
      ajaxk += `${(parseInt(`${viewer6}`) + (emojif ? 4 : 5))}`;
      foreground2 = [(ajaxk == String.fromCharCode(81,0) ? ajaxk.length : expandA.size)];

    if (ttFast.isGuest(userState)) {

   if ((ajaxk.length & foreground2.length) < 2 || (ajaxk.length & 2) < 2) {
      ajaxk = `${(String.fromCharCode(80,0) == sigmobB ? sigmobB.length : kick2)}`;
   }
       let footballL = 0;
          let firebasej = String.fromCharCode(115,108,111,116,0);
          let orangec: Map<any, any> = new Map([[String.fromCharCode(122,111,111,109,97,98,108,101,0),741], [String.fromCharCode(109,101,100,105,97,115,0),702]]);
          let fastforwardU = String.fromCharCode(114,97,112,105,100,106,115,111,110,0);
         footballL ^= 1 ^ orangec.size;
         firebasej = `${fastforwardU.length % (Math.max(7, firebasej.length))}`;
         orangec.set(fastforwardU, fastforwardU.length | 1);
      if (footballL < footballL) {
          let reportf = 1;
          let applex = 1.0;
          let frame_9s = false;
          let foregrounds = false;
          let canvas9 = String.fromCharCode(119,95,50,57,95,105,122,101,114,111,0);
         footballL ^= footballL;
         reportf /= Math.max(1, (canvas9.length & (foregrounds ? 1 : 3)));
         applex += parseFloat(`${canvas9.length}`);
         frame_9s = !foregrounds && 58 < reportf;
      }
         footballL |= footballL % (Math.max(1, 1));
      theme8 = String.fromCharCode(89,0) == ajaxk && footballL == 26;
      dispatch(showLoginAction());

      theme8 = 49.16 > viewer6 && 93 > ajaxk.length;
      viewer6 *= (parseFloat(`${3 - (theme8 ? 1 : 2)}`));
      return;

   if (2 < (splashn.size % (Math.max(3, 3)))) {
       let pause5 = 0.0;
       let with_bw8 = 3;
         pause5 -= parseFloat(`${with_bw8}`);
      if (pause5 > with_bw8) {
          let nexty: Array<any> = [442, 425, 829];
          let gesturesg = String.fromCharCode(116,111,103,103,108,101,100,0);
          let utilsp: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,115,117,109,0),false ], [String.fromCharCode(97,109,116,0),false ], [String.fromCharCode(112,114,105,109,97,114,121,0),false ]]);
          let headerC = String.fromCharCode(112,97,114,116,121,0);
          let orientationt = 5.0;
         with_bw8 |= with_bw8;
         nexty = [gesturesg.length & 1];
         gesturesg = `${parseInt(`${orientationt}`)}`;
         utilsp.set(headerC, (String.fromCharCode(97,0) == headerC ? nexty.length : headerC.length));
         orientationt -= parseFloat(`${1 * gesturesg.length}`);
      }
          let mimoR = String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,0);
          let darkW = true;
         pause5 += parseFloat(`${2}`);
         mimoR += `${((darkW ? 5 : 1))}`;
         darkW = ((mimoR.length | (!darkW ? 53 : mimoR.length)) <= 53);
         pause5 /= Math.max(parseFloat(`${parseInt(`${pause5}`) - 2}`), 2);
         pause5 /= Math.max(parseFloat(`${parseInt(`${pause5}`)}`), 5);
         pause5 -= parseFloat(`${1 + parseInt(`${pause5}`)}`);
      ajaxk = `${((theme8 ? 5 : 2) | parseInt(`${viewer6}`))}`;
   }
      foreground2.push(sigmobB.length);
    }
    const message = shareOptions.message + " " + shareOptions.url;

       let recommendationX = false;
       let spinner0 = false;
      while (recommendationX || !spinner0) {
         recommendationX = (recommendationX ? !spinner0 : recommendationX);
         break;
      }
      let modelsQ = spinner0 ? !spinner0 : spinner0;
      do {
         spinner0 = spinner0 && recommendationX;
         if (modelsQ) {
            break;
         }
      } while ((!recommendationX) && modelsQ);
       let sigmob3: Array<any> = [58, 490, 867];
      let gradlewX = spinner0 ? !spinner0 : spinner0;
      do {
         spinner0 = recommendationX;
         if (gradlewX) {
            break;
         }
      } while ((recommendationX) && gradlewX);
       let r_unlockR: Map<any, any> = new Map([[String.fromCharCode(101,110,104,97,110,99,101,100,0),47], [String.fromCharCode(109,101,109,0),375], [String.fromCharCode(112,111,112,0),470]]);
      let googleU = r_unlockR.size >= 8152880;
      do {
         r_unlockR.set(`${recommendationX}`, ((spinner0 ? 1 : 5) << (Math.min(Math.abs((recommendationX ? 4 : 4)), 3))));
         if (googleU) {
            break;
         }
      } while (googleU && (5 >= (5 << (Math.min(2, Math.abs(r_unlockR.size))))));
      splashn = new Map([[ajaxk, ajaxk.length & 2]]);
       let settingX = String.fromCharCode(112,97,116,104,109,116,117,0);
       let forwardg = 0.0;
       let footballLp = 5.0;
       let modalb = 1.0;
      for (let y = 0; y < 2; y++) {
         forwardg /= Math.max(4, parseInt(`${forwardg}`) ^ parseInt(`${footballLp}`));
      }
      for (let h = 0; h < 2; h++) {
          let xvodI = String.fromCharCode(114,101,109,105,120,0);
         footballLp -= (parseFloat(`${settingX == String.fromCharCode(52,0) ? parseInt(`${forwardg}`) : settingX.length}`));
         xvodI = `${1 + xvodI.length}`;
      }
      for (let p = 0; p < 2; p++) {
          let telegramZ = false;
          let modityX: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,98,105,110,101,0),309], [String.fromCharCode(109,112,101,103,100,97,116,97,0),1], [String.fromCharCode(108,115,112,105,0),420]]);
          let promotionq = 0;
          let mbridgeZ = 2;
          let rankM = 3.0;
         settingX = `${(modityX.size << (Math.min(1, Math.abs((telegramZ ? 4 : 3)))))}`;
         telegramZ = 59 <= promotionq;
         modityX.set(`${promotionq}`, promotionq);
         mbridgeZ &= parseInt(`${rankM}`);
         rankM -= parseFloat(`${2 | parseInt(`${rankM}`)}`);
      }
         modalb /= Math.max(parseInt(`${footballLp}`), 4);
      let windu = 5304162.0 >= footballLp;
      do {
          let const_qnj = true;
          let kickO = 0.0;
         footballLp /= Math.max(parseFloat(`${settingX.length}`), 3);
         const_qnj = kickO > 19.6;
         kickO += 2 + parseInt(`${kickO}`);
         if (windu) {
            break;
         }
      } while (windu && ((footballLp + 3.30) == 2.85));
      let customp = settingX.length >= 6429792;
      do {
         settingX += "3";
         if (customp) {
            break;
         }
      } while (customp && (parseInt(`${forwardg}`) >= settingX.length));
      for (let q = 0; q < 1; q++) {
          let greenk = String.fromCharCode(97,99,116,117,97,108,105,122,101,95,55,95,49,48,0);
          let data8 = 2;
         footballLp /= Math.max(parseFloat(`${parseInt(`${forwardg}`)}`), 2);
         greenk = `${greenk.length * 1}`;
         data8 /= Math.max(1, 3);
      }
      let agreementY = forwardg >= 9065830.0;
      do {
          let dropdownX = String.fromCharCode(102,111,114,119,97,114,100,101,114,0);
         forwardg += dropdownX.length + 3;
         if (agreementY) {
            break;
         }
      } while (agreementY && (settingX.length == 5));
      ajaxk += `${1 - expandA.size}`;
    const appURL = `tg://msg?text=${message}`;

   let internetR = 5369225 >= splashn.size;
   do {
      splashn.set(`${theme8}`, ((theme8 ? 5 : 5) % 3));
      if (internetR) {
         break;
      }
   } while ((!sigmobB.startsWith(`${splashn.size}`)) && internetR);
   for (let z = 0; z < 3; z++) {
       let zhengpianh = String.fromCharCode(102,114,101,101,0);
       let resultr = 4.0;
       let bannerf = 2.0;
         zhengpianh = `${parseInt(`${bannerf}`) & 3}`;
          let downM = true;
          let pauseR: Array<any> = [String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,0), String.fromCharCode(108,95,49,48,48,95,97,99,107,115,0), String.fromCharCode(99,111,109,112,114,101,115,115,0)];
         resultr *= pauseR.length | parseInt(`${bannerf}`);
         downM = !downM && downM;
         pauseR = [((downM ? 1 : 1) | 1)];
      for (let g = 0; g < 1; g++) {
          let debug9: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,103,114,97,112,104,0),String.fromCharCode(100,101,112,101,110,100,101,110,99,105,101,115,0)], [String.fromCharCode(101,120,112,101,99,116,0),String.fromCharCode(115,121,110,99,97,98,108,101,0)], [String.fromCharCode(115,101,97,108,98,111,120,0),String.fromCharCode(104,121,112,104,101,110,97,116,101,100,0)]]);
          let shirtU = 1.0;
          let shareC = true;
          let coren = 3.0;
         resultr += parseInt(`${bannerf}`);
         debug9 = new Map([[`${shareC}`, parseInt(`${coren}`) << (Math.min(4, Math.abs(2)))]]);
         shirtU += parseInt(`${shirtU}`);
         shareC = null != debug9.get(`${shirtU}`);
         coren /= Math.max(1, ((shareC ? 3 : 3) << (Math.min(Math.abs(parseInt(`${coren}`)), 5))));
      }
         resultr -= zhengpianh.length;
      for (let a = 0; a < 1; a++) {
         resultr -= (zhengpianh == String.fromCharCode(121,0) ? parseInt(`${resultr}`) : zhengpianh.length);
      }
      if (4 > (zhengpianh.length >> (Math.min(Math.abs(4), 3)))) {
         zhengpianh += `${parseInt(`${bannerf}`)}`;
      }
      if (zhengpianh.startsWith(`${resultr}`)) {
         zhengpianh = `${parseInt(`${resultr}`)}`;
      }
      if (zhengpianh.endsWith(`${bannerf}`)) {
         bannerf += parseFloat(`${1}`);
      }
      let private_0u = 9034741.0 <= bannerf;
      do {
         bannerf -= (parseFloat(`${zhengpianh == String.fromCharCode(49,0) ? zhengpianh.length : parseInt(`${resultr}`)}`));
         if (private_0u) {
            break;
         }
      } while (private_0u && (parseInt(`${bannerf}`) > zhengpianh.length));
      theme8 = ajaxk.length == splashn.size;
   }
    const webURL = `https://t.me/share/url?url=${message}`;

      viewer6 -= (parseFloat(`${String.fromCharCode(117,0) == sigmobB ? splashn.size : sigmobB.length}`));
       let inactiveh: Map<any, any> = new Map([[String.fromCharCode(102,95,54,56,95,104,99,108,114,0),String.fromCharCode(99,95,51,55,95,112,97,105,110,116,0)], [String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,0),String.fromCharCode(101,120,99,108,117,115,105,118,101,0)], [String.fromCharCode(115,113,117,97,114,101,0),String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,0)]]);
      let chati = inactiveh.size <= 8960572;
      do {
         inactiveh.set(`${inactiveh.size}`, inactiveh.size);
         if (chati) {
            break;
         }
      } while (chati && (Array.from(inactiveh.values()).includes(inactiveh.size)));
      let connectionF = inactiveh.size >= 7370000;
      do {
          let reportU = String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,0);
          let stationc = 4;
          let albumw = 2.0;
         inactiveh.set(reportU, inactiveh.size ^ reportU.length);
         stationc += parseInt(`${albumw}`) << (Math.min(2, Math.abs(3)));
         albumw -= stationc / 2;
         if (connectionF) {
            break;
         }
      } while (connectionF && (3 == (inactiveh.size & 4) || (4 & inactiveh.size) == 5));
       let mathD: Map<any, any> = new Map([[String.fromCharCode(101,115,115,101,110,116,105,97,108,0),786], [String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,0),765]]);
      sigmobB += `${3 % (Math.max(9, kick2))}`;

    Linking.canOpenURL(webURL)
      .then((supported) => {
        if (supported) {

      theme8 = ajaxk.length >= 73;
   let toponu = viewer6 >= 7808620.0;
   do {
      viewer6 += parseFloat(`${2}`);
      if (toponu) {
         break;
      }
   } while ((expandA.get(`${viewer6}`) == null) && toponu);
          console.log("supported telegram web");

   for (let z = 0; z < 3; z++) {
      kick2 -= 3;
   }
   for (let c = 0; c < 1; c++) {
       let downW: Map<any, any> = new Map([[String.fromCharCode(114,103,98,116,111,98,103,114,0),true ], [String.fromCharCode(108,105,98,97,118,102,105,108,116,101,114,0),true ], [String.fromCharCode(115,97,100,98,0),true ]]);
       let sigmobM = 0;
       let context4 = String.fromCharCode(110,101,119,115,108,101,116,116,101,114,0);
       let bufferK = 4;
       let n_position8 = 0.0;
       let catagory3 = String.fromCharCode(97,102,102,101,99,116,0);
       let video0 = String.fromCharCode(107,108,97,115,115,0);
         downW.set(video0, 3);
       let belld = 5;
         sigmobM &= (String.fromCharCode(113,0) == video0 ? video0.length : bufferK);
          let crownP: Array<any> = [407, 785, 240];
          let zhengpian4 = String.fromCharCode(112,108,97,110,97,114,116,111,117,121,118,121,0);
          let streamingG = false;
         catagory3 += `${((streamingG ? 3 : 3) / (Math.max(10, downW.size)))}`;
         crownP = [zhengpian4.length];
         zhengpian4 = `${(String.fromCharCode(102,0) == zhengpian4 ? crownP.length : zhengpian4.length)}`;
         streamingG = (zhengpian4.length ^ crownP.length) == 91;
       let roomr = String.fromCharCode(119,101,105,103,104,116,115,0);
       let networkO: Array<any> = [912, 810];
       let componentC: Array<any> = [63, 966];
          let launchq = String.fromCharCode(110,97,110,111,112,98,0);
         video0 = "2";
         launchq = `${launchq.length}`;
      for (let a = 0; a < 1; a++) {
         networkO.push(networkO.length - roomr.length);
      }
      let screenl = 6698889 >= networkO.length;
      do {
         networkO = [downW.size];
         if (screenl) {
            break;
         }
      } while (screenl && (context4.length == 1));
      for (let m = 0; m < 2; m++) {
         n_position8 /= Math.max(4, parseFloat(`${video0.length}`));
      }
      if ((belld - 3) > 5 || 2 > (video0.length - 3)) {
         belld |= componentC.length;
      }
       let private__d5 = String.fromCharCode(99,97,110,116,111,112,101,110,0);
       let floaterh = String.fromCharCode(105,110,116,101,110,116,115,0);
         belld -= roomr.length;
      while (5 == (roomr.length >> (Math.min(Math.abs(4), 3))) || (roomr.length >> (Math.min(1, networkO.length))) == 4) {
         networkO = [parseInt(`${n_position8}`)];
         break;
      }
      foreground2 = [bufferK];
   }
          

      emojif = sigmobB.length >= 97;
   let taiwanK = kick2 >= 7664088;
   do {
      kick2 ^= kick2;
      if (taiwanK) {
         break;
      }
   } while ((5 == kick2) && taiwanK);
          Linking.openURL(webURL);
        } else {

       let righti = 0.0;
       let coreg: Map<any, any> = new Map([[String.fromCharCode(107,105,99,107,0),7], [String.fromCharCode(115,117,109,97,114,121,0),154]]);
          let match3 = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,0);
         coreg.set(`${righti}`, parseInt(`${righti}`) + match3.length);
      while (coreg.size > parseInt(`${righti}`)) {
         righti *= parseFloat(`${2 - parseInt(`${righti}`)}`);
         break;
      }
      theme8 = viewer6 < 23.11 && theme8;
       let clearF: Array<any> = [250, 103, 141];
         clearF.push(clearF.length * 1);
      if (clearF.length > 1) {
         clearF = [1 - clearF.length];
      }
      if (4 <= (1 / (Math.max(4, clearF.length)))) {
          let promotions = String.fromCharCode(97,95,52,53,95,99,114,101,97,116,111,114,0);
          let questB = String.fromCharCode(116,101,115,115,101,108,108,97,116,101,0);
          let componentE = 5.0;
          let ccopy_2_G = 0;
         clearF.push(clearF.length << (Math.min(4, Math.abs(parseInt(`${componentE}`)))));
         promotions += `${questB.length / (Math.max(2, 9))}`;
         questB += `${ccopy_2_G + questB.length}`;
         componentE += 3;
         ccopy_2_G *= ccopy_2_G;
      }
      foreground2.push(3);
          console.log("not supported telegram web");

       let playercommonb = false;
          let ajaxZ: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,108,97,114,0),true ], [String.fromCharCode(110,99,104,117,110,107,0),false ]]);
          let fullh: Array<any> = [126, 841, 358];
          let line4: Array<any> = [674, 78, 583];
         playercommonb = fullh.length >= 12 || playercommonb;
         ajaxZ = new Map([[`${ajaxZ.size}`, ajaxZ.size << (Math.min(Math.abs(1), 4))]]);
         fullh = [ajaxZ.size];
         line4.push(2);
          let largeu = String.fromCharCode(112,117,114,103,101,0);
         playercommonb = (97 >= (largeu.length ^ (playercommonb ? largeu.length : 97)));
      for (let u = 0; u < 2; u++) {
         playercommonb = (playercommonb ? playercommonb : playercommonb);
      }
      ajaxk = `${((theme8 ? 4 : 1))}`;
      sigmobB += `${parseInt(`${viewer6}`)}`;
          

   for (let e = 0; e < 3; e++) {
      sigmobB += `${parseInt(`${viewer6}`)}`;
   }
   while (ajaxk == String.fromCharCode(102,0) || 2 <= expired7.length) {
      expired7 = "3";
      break;
   }
          Linking.openURL(appURL);
        }
      })
      .catch((error) => {
        console.error("Error checking app URL:", error);
      });
  };

  const shareToWeixin = async () => {
       let spece: Array<any> = [String.fromCharCode(114,101,102,99,111,117,110,116,95,99,95,48,0), String.fromCharCode(114,103,98,97,121,99,111,99,103,0)];
    let umengG = 0.0;
    let sinap = String.fromCharCode(101,110,99,111,100,101,114,0);
    let modelsK = false;
    let sellJ = false;
    let hooksG: Array<any> = [535, 902, 830];
    let logoutS = 5;
    let constantsl: Array<any> = [956, 631];
    let group2 = String.fromCharCode(105,100,108,101,0);
    let rank5 = String.fromCharCode(122,109,113,115,104,101,108,108,0);
    let diceo = 3;
    let routera = 4.0;
    let j_unlockr = 4;
    let greya = 1.0;
    let historyg = String.fromCharCode(109,97,116,104,101,115,0);
   if (group2.includes(`${logoutS}`)) {
      group2 = `${sinap.length * 3}`;
   }
   let p_viewb = 6335046.0 <= umengG;
   do {
       let bottomE = 4.0;
       let controlu = 5.0;
       let middlewareb = 5;
       let string6 = false;
         middlewareb += 1;
         bottomE -= parseFloat(`${middlewareb / (Math.max(parseInt(`${bottomE}`), 5))}`);
      for (let r = 0; r < 3; r++) {
         string6 = 69.47 < controlu && string6;
      }
      let tumbnailP = string6 ? !string6 : string6;
      do {
         string6 = 14 < (controlu + middlewareb);
         if (tumbnailP) {
            break;
         }
      } while ((4.7 > controlu && (controlu - 4.7) > 1.22) && tumbnailP);
         bottomE *= parseFloat(`${middlewareb * 1}`);
          let renewN = String.fromCharCode(100,105,102,102,101,114,101,110,99,101,115,0);
         bottomE *= parseFloat(`${3}`);
         renewN += `${renewN.length}`;
      if (2.51 == (3 + controlu)) {
         bottomE -= parseFloat(`${parseInt(`${bottomE}`) | 2}`);
      }
         controlu += parseFloat(`${parseInt(`${bottomE}`) + middlewareb}`);
         string6 = 48.31 > bottomE;
       let flyerr = 4;
       let scoreT = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,0);
          let windy = 2;
          let contextw = true;
          let turna = 3.0;
         controlu -= parseFloat(`${3}`);
         windy /= Math.max(2, 3);
         contextw = !contextw;
         turna -= (windy & (contextw ? 2 : 4));
      umengG += parseFloat(`${parseInt(`${controlu}`)}`);
      if (p_viewb) {
         break;
      }
   } while ((!hooksG.includes(umengG)) && p_viewb);
      sellJ = logoutS > hooksG.length;

    if (ttFast.isGuest(userState)) {

      routera += spece.length + constantsl.length;
      modelsK = 48 <= rank5.length || group2 == String.fromCharCode(82,0);
      hooksG.push(parseInt(`${umengG}`) + 3);
      dispatch(showLoginAction());

   let statisticsQ = sinap.length >= 8922045;
   do {
      sinap = `${spece.length}`;
      if (statisticsQ) {
         break;
      }
   } while (statisticsQ && (2 == (sinap.length % 4) && (umengG + parseFloat(`${sinap.length}`)) == 5.49));
       let yingV: Array<any> = [83, 205, 559];
         yingV = [yingV.length];
          let shootL = 0.0;
          let annerT = String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,0);
          let renew8 = false;
         yingV.push((String.fromCharCode(72,0) == annerT ? yingV.length : annerT.length));
         shootL /= Math.max(1, parseFloat(`${1 - parseInt(`${shootL}`)}`));
         renew8 = shootL == 80.6;
      while (yingV.length >= 5) {
          let crownJ = 4.0;
         yingV.push(1);
         crownJ *= parseFloat(`${parseInt(`${crownJ}`)}`);
         break;
      }
      umengG *= parseFloat(`${parseInt(`${routera}`)}`);
      spece.push(sinap.length & parseInt(`${umengG}`));
      return;

      hooksG.push(2);
      logoutS /= Math.max(2 + parseInt(`${routera}`), 2);
      sellJ = constantsl.length == logoutS;
    }
    const message = encodeURIComponent(
      shareOptions.message + "\n" + shareOptions.url
    );

      spece = [((sellJ ? 4 : 5))];
       let kuaishouq = 5.0;
      for (let r = 0; r < 2; r++) {
          let private_f3T: Map<any, any> = new Map([[String.fromCharCode(102,114,101,111,112,101,110,0),false ], [String.fromCharCode(99,111,109,109,101,110,116,115,0),true ]]);
          let pauseV = 0;
          let selectL = String.fromCharCode(102,97,113,0);
          let typesD = false;
         kuaishouq += parseInt(`${kuaishouq}`);
         private_f3T.set(`${typesD}`, 2);
         pauseV &= private_f3T.size;
         selectL = `${(1 << (Math.min(5, Math.abs((typesD ? 4 : 1)))))}`;
      }
         kuaishouq /= Math.max(5, parseInt(`${kuaishouq}`) << (Math.min(4, Math.abs(parseInt(`${kuaishouq}`)))));
         kuaishouq /= Math.max(2 | parseInt(`${kuaishouq}`), 4);
      modelsK = rank5 == String.fromCharCode(68,0);
   while (4 <= (group2.length * parseInt(`${umengG}`))) {
       let sigmobK = 3;
      for (let g = 0; g < 1; g++) {
         sigmobK ^= sigmobK;
      }
         sigmobK <<= Math.min(2, Math.abs(sigmobK));
         sigmobK %= Math.max(3, sigmobK / 2);
      umengG += parseFloat(`${parseInt(`${umengG}`)}`);
      break;
   }
    const appURL = `weixin://send?text=${message}`;

   while (5 >= (1 >> (Math.min(2, group2.length))) || 4 >= (group2.length >> (Math.min(Math.abs(1), 2)))) {
      group2 = `${logoutS / (Math.max(10, spece.length))}`;
      break;
   }
      routera /= Math.max(2, diceo);
   if (!modelsK) {
      modelsK = hooksG.includes(j_unlockr);
   }
    

   if (5 >= (sinap.length * parseInt(`${routera}`)) && 3.38 >= (routera * sinap.length)) {
      sinap += `${(diceo >> (Math.min(4, Math.abs((modelsK ? 3 : 1)))))}`;
   }
   if ((spece.length * 3) <= 4 || 3 <= (parseInt(`${umengG}`) / (Math.max(1, spece.length)))) {
      spece.push(rank5.length - 1);
   }
       let circle3 = String.fromCharCode(99,97,110,0);
      if (circle3.includes(circle3)) {
          let spinners = String.fromCharCode(119,97,114,110,105,110,103,0);
          let googleY = String.fromCharCode(115,117,98,101,120,112,114,0);
          let zhuboS = 3.0;
         circle3 += "1";
         spinners = `${parseInt(`${zhuboS}`)}`;
         googleY += `${spinners.length >> (Math.min(2, Math.abs(parseInt(`${zhuboS}`))))}`;
      }
      for (let o = 0; o < 3; o++) {
         circle3 += `${circle3.length}`;
      }
          let actiont = String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,0);
         circle3 = `${actiont.length | circle3.length}`;
      constantsl = [hooksG.length / (Math.max(3, 2))];
    Linking.canOpenURL(appURL)
      .then((supported) => {
        if (supported) {

      spece = [3];
      group2 = `${((sellJ ? 4 : 1) % (Math.max(parseInt(`${routera}`), 5)))}`;
      diceo *= 2 % (Math.max(5, rank5.length));
          

   let trash1 = modelsK ? !modelsK : modelsK;
   do {
      modelsK = group2 == String.fromCharCode(76,0) && 44 > diceo;
      if (trash1) {
         break;
      }
   } while ((sellJ) && trash1);
       let large3 = String.fromCharCode(102,111,114,101,109,97,110,0);
       let foundp: Map<any, any> = new Map([[String.fromCharCode(115,116,105,99,107,0),true ], [String.fromCharCode(109,97,116,116,101,100,0),false ]]);
       let next9 = 1;
         foundp.set(large3, large3.length);
      while (large3.includes(`${foundp.size}`)) {
         large3 = `${foundp.size}`;
         break;
      }
       let inactivek = String.fromCharCode(108,95,54,56,95,113,116,115,0);
      while (1 > (foundp.size / (Math.max(2, 1))) || 4 > (2 / (Math.max(10, foundp.size)))) {
         foundp.set(`${next9}`, inactivek.length + next9);
         break;
      }
      if ((next9 / 1) < 3) {
         large3 += `${foundp.size}`;
      }
      if ((next9 - foundp.size) >= 2 || 2 >= (next9 - foundp.size)) {
          let pointD = false;
          let canvasM = true;
         foundp.set(`${large3}`, foundp.size + large3.length);
         pointD = canvasM;
      }
         foundp.set(`${next9}`, next9 | foundp.size);
       let s_playerR = 5.0;
      if ((1 | foundp.size) > 4) {
         foundp = new Map([[`${foundp.size}`, parseInt(`${s_playerR}`) | 1]]);
      }
      diceo <<= Math.min(spece.length, 5);
   for (let e = 0; e < 1; e++) {
      constantsl.push(2);
   }
          Linking.openURL(appURL);
        } else {

   let foregroundV = modelsK ? !modelsK : modelsK;
   do {
      modelsK = (92 <= ((modelsK ? 92 : sinap.length) * sinap.length));
      if (foregroundV) {
         break;
      }
   } while (foregroundV && (spece.length < 5));
      constantsl.push(((modelsK ? 3 : 1) >> (Math.min(Math.abs(j_unlockr), 3))));
       let mbnativeI = String.fromCharCode(109,101,109,109,103,114,0);
         mbnativeI += `${mbnativeI.length}`;
         mbnativeI += `${2 & mbnativeI.length}`;
         mbnativeI += `${mbnativeI.length & 1}`;
      greya -= spece.length * parseInt(`${routera}`);
          console.log("WeChat app not installed.");

      greya *= diceo;
      hooksG = [(group2 == String.fromCharCode(113,0) ? group2.length : spece.length)];
   let manifestf = logoutS <= 9530244;
   do {
       let description_xff = String.fromCharCode(112,117,98,108,105,115,104,101,114,0);
       let footballq = 0;
       let sansO = false;
       let profileW = 3.0;
       let dragZ = 0;
      for (let y = 0; y < 1; y++) {
         description_xff += `${description_xff.length}`;
      }
         profileW += parseInt(`${profileW}`);
         description_xff = `${1 >> (Math.min(Math.abs(dragZ), 4))}`;
         profileW /= Math.max(description_xff.length * 1, 1);
         dragZ *= footballq;
         footballq >>= Math.min(Math.abs(2 ^ parseInt(`${profileW}`)), 2);
      while (sansO && 4 > description_xff.length) {
          let activeo = 4.0;
          let reactA: Array<any> = [289, 149, 481];
          let streamingE = String.fromCharCode(121,95,56,57,95,97,100,100,114,101,115,115,0);
         description_xff += `${(streamingE == String.fromCharCode(77,0) ? streamingE.length : dragZ)}`;
         activeo *= 2;
         reactA = [parseInt(`${activeo}`) - reactA.length];
         break;
      }
      if ((footballq % (Math.max(3, 9))) < 5) {
         footballq >>= Math.min(5, Math.abs(footballq));
      }
       let pathb = 1;
         dragZ %= Math.max(1, 1);
      if (3.100 == (profileW / 5.4) && (dragZ / (Math.max(profileW, 1))) == 5.4) {
          let textj = String.fromCharCode(115,117,99,99,101,115,115,102,117,108,0);
          let cross0 = String.fromCharCode(120,95,55,55,95,99,101,108,102,0);
         profileW += 1;
         textj += `${1 ^ textj.length}`;
         cross0 = "3";
      }
      let telegramL = 8876060 >= pathb;
      do {
          let plashe: Array<any> = [465, 796, 206];
          let hooksd = String.fromCharCode(109,111,100,101,0);
         pathb -= ((sansO ? 5 : 1) + dragZ);
         plashe.push(plashe.length);
         hooksd += `${plashe.length % (Math.max(2, 10))}`;
         if (telegramL) {
            break;
         }
      } while ((1 < (pathb * description_xff.length) || (1 * pathb) < 1) && telegramL);
         sansO = description_xff.length == 21;
      if (description_xff.endsWith(`${dragZ}`)) {
          let zoom5 = 5.0;
          let sinaw = String.fromCharCode(100,101,99,105,109,97,116,101,0);
          let datav = 5;
          let mbnativeu = String.fromCharCode(115,101,109,97,110,116,105,99,115,0);
          let path4: Map<any, any> = new Map([[String.fromCharCode(118,112,97,116,104,0),String.fromCharCode(99,111,108,0)], [String.fromCharCode(105,95,50,50,95,112,111,115,116,97,108,0),String.fromCharCode(99,111,118,101,114,101,100,0)], [String.fromCharCode(112,114,111,112,111,114,116,105,111,110,0),String.fromCharCode(98,101,99,104,0)]]);
         description_xff += `${parseInt(`${profileW}`)}`;
         zoom5 += path4.size;
         sinaw += `${(String.fromCharCode(68,0) == sinaw ? parseInt(`${zoom5}`) : sinaw.length)}`;
         datav ^= 1 * path4.size;
         mbnativeu = `${datav}`;
      }
         sansO = description_xff.endsWith(`${footballq}`);
      logoutS ^= 2 >> (Math.min(3, constantsl.length));
      if (manifestf) {
         break;
      }
   } while (manifestf && (1.83 > (2.41 - routera) || 1 > (parseInt(`${routera}`) - logoutS)));
          toggleShare();
        }
      })
      .catch((error) => {
        console.log("Error checking app URL:", error);
      });
  };

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const toggleShare = async () => {
       let zhengpianO: Map<any, any> = new Map([[String.fromCharCode(114,101,110,101,119,97,98,108,101,95,106,95,49,52,0),468], [String.fromCharCode(114,101,97,100,109,101,0),114]]);
    let moduleG = String.fromCharCode(99,95,55,56,95,116,105,109,101,105,110,102,111,114,99,101,0);
    let handlery = 3.0;
    let incidentI = String.fromCharCode(119,95,51,54,95,114,101,99,111,109,112,111,115,101,0);
    let selectede = 4;
    let eactu = 1;
    let regengp: Array<any> = [407, 280];
    let plusF: Array<any> = [710, 668, 690];
    let downloaded5 = String.fromCharCode(112,114,101,104,97,115,104,0);
    let roundE = String.fromCharCode(110,97,109,101,115,0);
    let configurev = false;
    let megaphonef = 5;
    let libcrashsdkW = true;
   if (1 >= (incidentI.length % 1) && (incidentI.length % (Math.max(1, 6))) >= 1) {
      eactu ^= ((configurev ? 5 : 5) ^ 1);
   }
      regengp = [roundE.length / (Math.max(1, zhengpianO.size))];

    if (ttFast.isGuest(userState)) {

   let condensedJ = zhengpianO.size >= 5796107;
   do {
      zhengpianO.set(`${configurev}`, eactu);
      if (condensedJ) {
         break;
      }
   } while (condensedJ && (2 == (eactu - zhengpianO.size) || (eactu - zhengpianO.size) == 2));
      moduleG = `${regengp.length % (Math.max(roundE.length, 2))}`;
      dispatch(showLoginAction());

       let referrerb: Map<any, any> = new Map([[String.fromCharCode(98,105,103,105,110,116,0),String.fromCharCode(116,101,109,112,108,97,116,101,100,0)], [String.fromCharCode(108,97,116,105,110,0),String.fromCharCode(97,109,114,110,98,0)]]);
       let plashU = String.fromCharCode(109,101,109,98,101,114,0);
         referrerb.set(plashU, 1);
      if (plashU.startsWith(`${referrerb.size}`)) {
         plashU += `${plashU.length}`;
      }
      for (let n = 0; n < 3; n++) {
         referrerb = new Map([[`${referrerb.size}`, 3 >> (Math.min(1, Math.abs(referrerb.size)))]]);
      }
       let become7: Map<any, any> = new Map([[String.fromCharCode(109,97,108,108,111,99,0),String.fromCharCode(100,101,99,105,100,101,0)], [String.fromCharCode(117,110,105,110,115,116,97,108,108,0),String.fromCharCode(117,112,108,105,110,107,0)], [String.fromCharCode(97,108,103,111,0),String.fromCharCode(117,110,100,101,114,102,108,111,119,0)]]);
      let reactl = 9421435 <= become7.size;
      do {
         become7 = new Map([[`${referrerb.size}`, (String.fromCharCode(79,0) == plashU ? plashU.length : referrerb.size)]]);
         if (reactl) {
            break;
         }
      } while (reactl && ((referrerb.size + become7.size) < 2 || 2 < (become7.size + referrerb.size)));
         become7 = new Map([[`${become7.size}`, 3 & plashU.length]]);
      plusF.push(moduleG.length);
      eactu ^= 3;
      return;
    }
    try {

      handlery *= eactu % (Math.max(regengp.length, 4));
   let taiwanQ = configurev ? !configurev : configurev;
   do {
      configurev = (zhengpianO.size * regengp.length) > 79;
      if (taiwanQ) {
         break;
      }
   } while ((2 <= plusF.length && (2 * plusF.length) <= 4) && taiwanQ);
      const inviteParam = userState.userReferralCode + userState.userName;

   while (incidentI.includes(`${zhengpianO.size}`)) {
      zhengpianO = new Map([[`${zhengpianO.size}`, 3 % (Math.max(5, downloaded5.length))]]);
      break;
   }
   while (4 >= (eactu - selectede)) {
       let patha = String.fromCharCode(118,108,99,115,112,101,99,95,56,95,54,49,0);
       let mintegrals = 2.0;
       let bufferu = 0.0;
         bufferu *= (parseFloat(`${String.fromCharCode(52,0) == patha ? parseInt(`${mintegrals}`) : patha.length}`));
      if (bufferu >= mintegrals) {
         bufferu /= Math.max(parseFloat(`${1}`), 1);
      }
      if ((mintegrals - 1.2) <= 3.42) {
          let android2 = 2;
          let tail1 = false;
          let single2: Map<any, any> = new Map([[String.fromCharCode(97,114,101,118,101,114,115,101,0),295], [String.fromCharCode(112,111,112,111,118,101,114,0),171], [String.fromCharCode(99,108,105,112,0),334]]);
          let areaI = String.fromCharCode(100,121,110,108,111,99,107,0);
          let subsX = String.fromCharCode(99,111,110,102,105,103,117,114,101,114,0);
         mintegrals *= (String.fromCharCode(95,0) == patha ? areaI.length : patha.length);
         android2 += 2;
         tail1 = !tail1;
         single2.set(`${subsX}`, single2.size << (Math.min(subsX.length, 5)));
         areaI = `${subsX.length - 3}`;
      }
      for (let a = 0; a < 1; a++) {
         mintegrals -= (patha == String.fromCharCode(66,0) ? patha.length : parseInt(`${bufferu}`));
      }
       let helperq = String.fromCharCode(116,122,102,105,108,101,95,120,95,52,51,0);
       let fullk = String.fromCharCode(113,109,98,108,0);
      let humidityR = 6512654.0 <= bufferu;
      do {
          let filet = String.fromCharCode(102,116,101,108,108,0);
          let downloadedu = 4;
          let resultT = true;
         bufferu /= Math.max((parseFloat(`${downloadedu + (resultT ? 4 : 5)}`)), 4);
         filet = `${filet.length & 3}`;
         downloadedu %= Math.max(filet.length >> (Math.min(3, filet.length)), 2);
         if (humidityR) {
            break;
         }
      } while (((fullk.length >> (Math.min(Math.abs(3), 4))) > 1) && humidityR);
      if ((patha.length << (Math.min(Math.abs(1), 1))) <= 1 && (parseInt(`${bufferu}`) / (Math.max(patha.length, 2))) <= 1) {
          let acceptedp = String.fromCharCode(111,95,55,51,95,98,101,103,117,110,0);
          let nextn = String.fromCharCode(113,95,57,53,95,100,101,115,99,114,0);
          let i_unlock7 = String.fromCharCode(101,110,118,101,108,111,112,101,0);
         bufferu /= Math.max(parseFloat(`${2}`), 1);
         acceptedp = `${acceptedp.length}`;
         nextn += `${acceptedp.length}`;
         i_unlock7 += `${nextn.length - i_unlock7.length}`;
      }
          let suggestionA = String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,0);
          let tailz = false;
         helperq = `${fullk.length}`;
         suggestionA = `${suggestionA.length * 3}`;
         tailz = suggestionA.length < 88;
      selectede -= 1 ^ plusF.length;
      break;
   }

      const Buffer = require("buffer").Buffer;

      megaphonef &= 1;
       let quest2 = String.fromCharCode(99,111,110,116,114,97,99,116,0);
       let downloadedx = false;
       let coreI = 5.0;
       let areac = 4.0;
          let macaux: Map<any, any> = new Map([[String.fromCharCode(99,105,110,116,0),648], [String.fromCharCode(99,111,115,112,105,95,52,95,51,56,0),182], [String.fromCharCode(102,97,105,108,115,0),34]]);
          let pnewinterstitialz = String.fromCharCode(109,105,115,115,101,115,0);
         coreI /= Math.max(2, (parseFloat(`${quest2 == String.fromCharCode(111,0) ? macaux.size : quest2.length}`)));
         macaux.set(pnewinterstitialz, 2);
         pnewinterstitialz += `${pnewinterstitialz.length | 2}`;
      if (quest2.includes(`${areac}`)) {
          let searchbaro = 2.0;
          let time_z7E = 3;
          let promotions = String.fromCharCode(119,101,98,114,116,99,0);
          let rightY: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,95,50,95,56,56,0),82], [String.fromCharCode(97,112,112,114,111,118,101,114,0),320], [String.fromCharCode(115,119,105,102,116,121,0),716]]);
          let emptyI: Map<any, any> = new Map([[String.fromCharCode(97,118,100,99,116,0),457], [String.fromCharCode(116,95,55,48,95,114,101,100,97,99,116,101,100,0),587]]);
         quest2 += `${parseInt(`${areac}`)}`;
         searchbaro += emptyI.size;
         time_z7E &= parseInt(`${searchbaro}`);
         promotions += `${promotions.length % 3}`;
         rightY.set(`${searchbaro}`, time_z7E);
         emptyI = new Map([[`${rightY.size}`, 2]]);
      }
         quest2 += `${parseInt(`${coreI}`)}`;
      let eventy = 7196960.0 <= coreI;
      do {
         coreI -= parseFloat(`${3 - parseInt(`${areac}`)}`);
         if (eventy) {
            break;
         }
      } while ((2.9 >= coreI) && eventy);
      if (!downloadedx) {
         downloadedx = quest2.length > 35;
      }
      zhengpianO = new Map([[`${plusF.length}`, 2 % (Math.max(eactu, 5))]]);
      let encodedAuth = new Buffer(inviteParam).toString("base64");

      megaphonef /= Math.max(4, 2 << (Math.min(3, downloaded5.length)));
   let bottom7 = 6090116.0 >= handlery;
   do {
      handlery += downloaded5.length;
      if (bottom7) {
         break;
      }
   } while ((downloaded5.length == parseInt(`${handlery}`)) && bottom7);

      

       let circlew = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,0);
      for (let n = 0; n < 2; n++) {
         circlew = `${(String.fromCharCode(83,0) == circlew ? circlew.length : circlew.length)}`;
      }
      if (circlew.startsWith(circlew)) {
          let bootsplashW = String.fromCharCode(115,105,110,103,117,108,97,114,0);
          let componentI = 5.0;
          let minip = 1;
          let privacyW = 1.0;
          let bell3 = 5.0;
         circlew += "3";
         bootsplashW = `${bootsplashW.length}`;
         componentI *= parseFloat(`${1 | parseInt(`${bell3}`)}`);
         minip -= bootsplashW.length - minip;
         privacyW += parseFloat(`${parseInt(`${componentI}`) & 1}`);
         bell3 /= Math.max(2 & parseInt(`${bell3}`), 2);
      }
          let projectc = String.fromCharCode(106,112,101,103,108,105,98,95,105,95,54,52,0);
          let langkeyA = String.fromCharCode(112,114,105,110,116,101,114,0);
          let darkI: Array<any> = [810, 608];
         circlew = `${circlew.length}`;
         projectc += `${darkI.length}`;
         langkeyA += `${langkeyA.length}`;
         darkI = [projectc.length / 1];
      eactu &= circlew.length - downloaded5.length;
      plusF = [2];

      let msg = "下载" + APP_NAME_CONST + "，免费领取VIP会员，免费看海量高清影视 " + INVITE_DOMAIN + encodedAuth;

   for (let k = 0; k < 3; k++) {
       let episodes7: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,97,99,116,111,114,95,104,95,57,57,0),14], [String.fromCharCode(113,95,53,57,0),737]]);
       let emptyO = 5.0;
       let mbnative0 = 5.0;
       let adultL: Map<any, any> = new Map([[String.fromCharCode(106,95,57,55,95,106,99,111,110,102,105,103,0),String.fromCharCode(118,97,108,117,108,101,0)], [String.fromCharCode(104,105,110,116,115,95,114,95,53,56,0),String.fromCharCode(99,111,117,110,116,115,0)], [String.fromCharCode(108,95,52,55,95,97,99,99,101,115,115,105,98,108,105,116,121,0),String.fromCharCode(115,116,97,116,101,0)]]);
       let recommendationI = true;
      while ((2 * episodes7.size) <= 1) {
         episodes7 = new Map([[`${mbnative0}`, 3 * parseInt(`${emptyO}`)]]);
         break;
      }
      if (3 > (adultL.size * 3)) {
         emptyO += parseFloat(`${episodes7.size}`);
      }
      for (let b = 0; b < 3; b++) {
          let notificationr: Array<any> = [179, 670, 164];
         mbnative0 -= parseFloat(`${parseInt(`${mbnative0}`) >> (Math.min(3, Math.abs(3)))}`);
         notificationr.push(notificationr.length / (Math.max(8, notificationr.length)));
      }
      for (let p = 0; p < 3; p++) {
         mbnative0 -= parseFloat(`${3}`);
      }
      if (episodes7.get(`${adultL.size}`) != null) {
         episodes7.set(`${emptyO}`, parseInt(`${emptyO}`) ^ 1);
      }
         mbnative0 /= Math.max(parseFloat(`${parseInt(`${emptyO}`) | 2}`), 5);
      while (recommendationI) {
          let pathw = true;
          let zhengpianOI = true;
          let malaysiad = 4.0;
          let renewG = 0.0;
         recommendationI = emptyO >= 97.16;
         pathw = pathw || zhengpianOI;
         zhengpianOI = 76.40 >= malaysiad;
         malaysiad -= parseInt(`${renewG}`) / 2;
         renewG /= Math.max(4, ((pathw ? 2 : 1) / (Math.max((zhengpianOI ? 2 : 3), 7))));
         break;
      }
       let promotionP: Array<any> = [999, 965, 51];
       let disconnectedB: Array<any> = [String.fromCharCode(114,119,110,100,0), String.fromCharCode(99,95,50,48,95,112,97,114,116,105,99,105,112,97,110,116,115,0)];
      if (!Array.from(adultL.keys()).includes(`${mbnative0}`)) {
          let firebaseS = String.fromCharCode(115,101,113,117,101,110,99,101,115,95,110,95,53,50,0);
         adultL = new Map([[`${adultL.size}`, 1 - adultL.size]]);
         firebaseS = `${1 | firebaseS.length}`;
      }
      if (!recommendationI) {
         recommendationI = 53 >= promotionP.length && mbnative0 >= 49.8;
      }
      let datag = 9068446 >= promotionP.length;
      do {
         promotionP = [disconnectedB.length & parseInt(`${mbnative0}`)];
         if (datag) {
            break;
         }
      } while (datag && ((promotionP.length << (Math.min(disconnectedB.length, 4))) < 1 || 1 < (disconnectedB.length << (Math.min(2, promotionP.length)))));
      regengp = [adultL.size];
   }
   if (4 > eactu) {
       let notificationR = 0.0;
       let serviceq = 5.0;
       let historyx = 0.0;
       let mbbanners: Array<any> = [753, 687];
         historyx /= Math.max(3, parseFloat(`${2}`));
       let telegramd = false;
         telegramd = 89.80 <= notificationR || 89.80 <= historyx;
         serviceq /= Math.max(2, 2 & parseInt(`${notificationR}`));
      for (let m = 0; m < 1; m++) {
         serviceq /= Math.max(3, 1 & parseInt(`${historyx}`));
      }
          let storeZ = String.fromCharCode(116,114,101,110,100,105,110,103,0);
          let pressure5 = 0.0;
          let modew = true;
         mbbanners.push(storeZ.length ^ 2);
         storeZ = `${parseInt(`${pressure5}`) + 1}`;
         pressure5 += parseFloat(`${parseInt(`${pressure5}`) * 1}`);
       let firebase0 = 0.0;
       let sentryz = 3.0;
         mbbanners = [((telegramd ? 3 : 2) * parseInt(`${historyx}`))];
         historyx /= Math.max((parseFloat(`${(telegramd ? 1 : 3) * parseInt(`${historyx}`)}`)), 5);
      for (let c = 0; c < 1; c++) {
          let brightnessS = String.fromCharCode(103,108,107,0);
          let mbnativeadvancedg: Array<any> = [String.fromCharCode(98,117,110,100,108,101,115,0), String.fromCharCode(102,105,108,101,115,95,113,95,55,49,0)];
          let termsa = 4;
         mbbanners = [1 * parseInt(`${sentryz}`)];
         brightnessS = "1";
         mbnativeadvancedg.push(3);
         termsa -= 1;
      }
       let sells = String.fromCharCode(115,101,99,107,101,121,0);
       let room_ = String.fromCharCode(121,95,51,95,115,105,103,110,117,109,0);
      while (4.19 < historyx) {
         firebase0 -= parseFloat(`${2}`);
         break;
      }
      eactu <<= Math.min(Math.abs(mbbanners.length - megaphonef), 2);
   }

      const result = await Share.share({
        message: msg,
      });

      moduleG += `${roundE.length & 3}`;
   if (moduleG.length > 5) {
      configurev = !roundE.endsWith(`${configurev}`);
   }
      if (result.action === Share.sharedAction) {

   let controls7 = configurev ? !configurev : configurev;
   do {
       let firebaseQ = String.fromCharCode(111,95,56,54,95,99,97,110,99,101,108,97,98,108,101,0);
       let pathN: Map<any, any> = new Map([[String.fromCharCode(120,95,51,52,0),448], [String.fromCharCode(98,110,98,105,110,112,97,100,0),388], [String.fromCharCode(115,105,108,107,95,101,95,51,54,0),609]]);
       let sigmoby = String.fromCharCode(105,110,110,101,114,0);
         sigmoby = "1";
         pathN.set(`${sigmoby}`, pathN.size ^ sigmoby.length);
      while ((sigmoby.length + pathN.size) >= 5 || (pathN.size + sigmoby.length) >= 5) {
         sigmoby = "3";
         break;
      }
         firebaseQ += `${sigmoby.length >> (Math.min(Math.abs(1), 1))}`;
          let strd = String.fromCharCode(112,100,122,112,0);
          let placeholderE = String.fromCharCode(99,104,105,108,108,0);
         pathN.set(sigmoby, (sigmoby == String.fromCharCode(78,0) ? sigmoby.length : strd.length));
         strd += "2";
         placeholderE = `${placeholderE.length / 3}`;
          let buttonc = String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,0);
         pathN = new Map([[`${pathN.size}`, buttonc.length]]);
      for (let f = 0; f < 3; f++) {
         sigmoby += `${sigmoby.length << (Math.min(Math.abs(2), 2))}`;
      }
       let playercommonn: Array<any> = [88, 650, 444];
      let thailandA = playercommonn.length <= 7370756;
      do {
         playercommonn.push(1);
         if (thailandA) {
            break;
         }
      } while (thailandA && ((playercommonn.length | 2) > 5));
      configurev = downloaded5.length <= 61;
      if (controls7) {
         break;
      }
   } while ((!configurev) && controls7);
      incidentI = `${selectede - regengp.length}`;
        if (result.activityType) {
          
        } else {
          
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {

   if ((zhengpianO.size / 3) < 3 || (3 / (Math.max(7, eactu))) < 3) {
       let splash7 = 2.0;
       let nnewinterstitialh: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,114,97,105,110,0),String.fromCharCode(118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0)], [String.fromCharCode(98,101,108,111,110,103,115,0),String.fromCharCode(116,97,98,108,101,112,114,105,110,116,0)]]);
       let reportX = String.fromCharCode(109,105,110,117,116,101,95,114,95,56,52,0);
       let langkeyG: Map<any, any> = new Map([[String.fromCharCode(100,111,99,105,100,115,0),639], [String.fromCharCode(107,109,118,99,95,114,95,55,55,0),91]]);
      while ((3 / (Math.max(3, nnewinterstitialh.size))) <= 5 || 5 <= (reportX.length / 3)) {
          let ecopy_3O = String.fromCharCode(104,100,108,114,95,105,95,52,55,0);
         reportX += `${1 ^ langkeyG.size}`;
         ecopy_3O = `${ecopy_3O.length - 1}`;
         break;
      }
         splash7 /= Math.max(3, parseFloat(`${langkeyG.size}`));
         reportX = `${langkeyG.size}`;
          let predictionL = 1.0;
          let linew: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,101,0),247], [String.fromCharCode(115,99,111,114,101,115,0),975]]);
         langkeyG = new Map([[`${nnewinterstitialh.size}`, nnewinterstitialh.size + reportX.length]]);
         predictionL *= parseInt(`${predictionL}`);
         linew = new Map([[`${linew.size}`, linew.size]]);
      if ((1.55 / (Math.max(10, splash7))) <= 1.4) {
         reportX = `${nnewinterstitialh.size / (Math.max(4, langkeyG.size))}`;
      }
       let filterA: Map<any, any> = new Map([[String.fromCharCode(114,97,119,100,101,99,95,98,95,56,55,0),true ], [String.fromCharCode(103,111,108,100,101,110,0),true ], [String.fromCharCode(104,101,118,109,97,115,107,0),true ]]);
      while ((filterA.size & 3) >= 2 || 4 >= (3 & filterA.size)) {
         reportX = `${filterA.size}`;
         break;
      }
      if (4 < (langkeyG.size * reportX.length)) {
         langkeyG.set(`${splash7}`, parseInt(`${splash7}`));
      }
          let unselectedt = String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,0);
          let photow = 2.0;
          let lineU = 1.0;
         nnewinterstitialh = new Map([[`${splash7}`, 1 << (Math.min(Math.abs(parseInt(`${splash7}`)), 2))]]);
         unselectedt = "1";
         photow /= Math.max(parseFloat(`${3}`), 3);
         lineU += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${lineU}`)), 5))}`);
      let launchB = 5786423 <= nnewinterstitialh.size;
      do {
         nnewinterstitialh = new Map([[`${nnewinterstitialh.size}`, filterA.size / (Math.max(3, nnewinterstitialh.size))]]);
         if (launchB) {
            break;
         }
      } while ((5 >= (4 / (Math.max(9, nnewinterstitialh.size)))) && launchB);
      let scheduleC = 6520174 >= filterA.size;
      do {
         filterA.set(`${splash7}`, langkeyG.size);
         if (scheduleC) {
            break;
         }
      } while ((reportX.endsWith(`${filterA.size}`)) && scheduleC);
      for (let e = 0; e < 1; e++) {
          let shootE = String.fromCharCode(110,111,116,105,99,101,115,95,105,95,49,52,0);
          let agreementX = 3.0;
         nnewinterstitialh.set(`${splash7}`, parseInt(`${splash7}`) % (Math.max(2, 1)));
         shootE += `${parseInt(`${agreementX}`)}`;
         agreementX += parseFloat(`${shootE.length ^ 3}`);
      }
      zhengpianO = new Map([[`${nnewinterstitialh.size}`, 1]]);
   }
      selectede *= ((configurev ? 1 : 1));
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
            source={require("@static/images/detailsMaterialWith_lp.png")}
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
                source={require("@static/images/vip/statisticsUnselectedDownloading.png")}
                style={styles.featureIcn}
                resizeMode={"contain"}
              />
            </View>
            <View>
              <Text style={styles.featureTitle}>VIP尊贵标识</Text>
            </View>
          </View>

          {ttConfigRecommendation.instance.tabConfig != null && ttConfigRecommendation.instance.len == 5 &&
            <View style={{ ...styles.featureItem, width: screenState.showAdultTab ? "40%" : "30%" }}>
              <View style={styles.imgContainer}>
                <FastImage
                  source={require("@static/images/invite/lockUntick.png")}
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
                  source={require("@static/images/invite/renewFoundPhone.png")}
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
                source={require("@static/images/invite/tt_refresh_friends.png")}
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
            if (!ttFast.isLogin(userState)) {
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
              if (ttFast.isGuest(userState)) {
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
            if (ttFast.isGuest(userState)) {
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
