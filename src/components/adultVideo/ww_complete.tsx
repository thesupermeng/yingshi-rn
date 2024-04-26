import { Divider } from "@rneui/base";
import { ReactNode, useCallback, useEffect, useState } from "react";
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Switch } from "react-native-switch";
import WatchAnytimeVipModal from "../modal/ww_penaltygoal_shoot";
import EighteenPlusOverlay from "../modal/ww_recommendation";
import CountdownIndicator from "../button/ww_zhubo";
import AdultModeCountdownIndicator from "./ww_footballfield_lock";
import AdultModeSwitch from "./ww_code_cross";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import {
  acceptOverEighteen,
  disableAdultMode,
  enableAdultMode,
  enableWatchAnytimeAdultMode,
  hideAdultModeDisclaimer,
  hideAdultModeVip,
  hideAdultVipPrivilegeMiniVideoAction,
  incrementAdultVideoWatchTime,
  showAdultVipPrivilegeMiniVideoAction,
} from "@redux/actions/ww_hash";
import { UMENG_CHANNEL } from "@utility/ww_icon";
import { AdultVipPrivilegeOverlay } from "../modal/ww_video_halffieldimage";
import { VipPrivilegeFloatingIndicator } from "./ww_mbnativeadvanced";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
interface wwIndexDice { }

const eighteenPlusControls = ({ }: wwIndexDice) => {
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const userState = useSelector<wwVertical>('userReducer');
  const {
    adultModeVipShow,
    adultModeDisclaimerShow,
    adultMode,
    watchAnytimeAdultMode,
    isOverEighteenAccepted,
    showAdultVipPrivilegeMiniVideo
  } = screenState;
  const dispatch = useAppDispatch();
  const isVip = wwBodan.fakeIsVip(userState.user);

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  
  console.log(Platform.OS)

  const handleAccept = useCallback(() => {
       let dropdowny: Map<any, any> = new Map([[String.fromCharCode(118,95,56,50,95,99,101,108,112,0),762], [String.fromCharCode(105,110,118,111,108,118,101,100,95,118,95,52,53,0),46]]);
    let point4 = false;
    let robotoa = String.fromCharCode(99,108,101,97,114,98,105,116,95,53,95,51,54,0);
    let target7 = 2;
    let clubc = String.fromCharCode(108,97,110,99,122,111,115,0);
    let moreX = String.fromCharCode(111,95,50,95,115,101,103,109,97,112,0);
    let shootA = String.fromCharCode(112,105,99,107,101,114,115,95,101,95,57,49,0);
    let shirta = 3;
    let hooksA = 3;
    let libimagepipeline2 = true;
    let invite3: Map<any, any> = new Map([[String.fromCharCode(99,112,117,105,110,102,111,0),false ], [String.fromCharCode(111,95,57,95,103,105,103,97,98,121,116,101,0),true ], [String.fromCharCode(105,110,116,108,95,50,95,51,51,0),true ]]);
    let pointr = String.fromCharCode(112,117,108,115,101,115,98,105,116,115,0);
    let modeR: Map<any, any> = new Map([[String.fromCharCode(109,95,57,50,95,99,111,112,121,0),918], [String.fromCharCode(101,99,109,117,108,116,0),846]]);
    let mbsplashm: Array<any> = [String.fromCharCode(98,95,52,54,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0), String.fromCharCode(99,108,97,117,115,101,115,0)];
    let expiredk = String.fromCharCode(101,115,116,97,98,108,105,115,104,0);
   for (let b = 0; b < 3; b++) {
      target7 /= Math.max(shirta << (Math.min(1, Math.abs(3))), 1);
   }
   if (!point4) {
      point4 = robotoa == String.fromCharCode(76,0);
   }
      point4 = (!libimagepipeline2 ? !point4 : libimagepipeline2);
   for (let g = 0; g < 3; g++) {
      libimagepipeline2 = shootA.length < 25 || 25 < invite3.size;
   }
       let dark2: Array<any> = [String.fromCharCode(108,105,98,115,95,115,95,55,53,0), String.fromCharCode(101,95,51,57,95,114,101,116,97,105,110,115,0)];
       let holderC = true;
       let iconrefreshZ = false;
         dark2.push(1);
      if (!holderC) {
          let commonC = String.fromCharCode(100,105,102,102,115,0);
          let update_aiT = true;
          let background_ = 5.0;
         holderC = !iconrefreshZ && background_ == 98.8;
         commonC = `${(commonC == String.fromCharCode(50,0) ? (update_aiT ? 1 : 1) : commonC.length)}`;
         update_aiT = !update_aiT;
         background_ *= ((update_aiT ? 4 : 5));
      }
         dark2.push(((iconrefreshZ ? 2 : 1) % (Math.max(3, dark2.length))));
          let iconbackwhite7 = String.fromCharCode(108,95,49,48,95,113,109,105,110,109,97,120,0);
          let mapping6 = String.fromCharCode(115,101,103,109,101,110,116,101,100,0);
          let libtanV = String.fromCharCode(115,105,100,101,115,0);
         dark2.push((String.fromCharCode(117,0) == iconbackwhite7 ? dark2.length : iconbackwhite7.length));
         mapping6 = "3";
         libtanV += `${(libtanV == String.fromCharCode(117,0) ? mapping6.length : libtanV.length)}`;
          let reminderi = 2.0;
          let button2: Map<any, any> = new Map([[String.fromCharCode(117,110,109,105,120,0),47], [String.fromCharCode(97,114,99,104,0),718], [String.fromCharCode(107,95,55,53,95,115,109,101,97,114,0),598]]);
          let editw = true;
         holderC = iconrefreshZ;
         reminderi += button2.size;
         button2.set(`${editw}`, (2 | (editw ? 2 : 4)));
          let teamx: Map<any, any> = new Map([[String.fromCharCode(103,114,111,117,112,110,97,109,101,115,95,118,95,55,51,0),826], [String.fromCharCode(97,95,53,56,95,110,111,114,109,97,108,105,122,101,100,0),876]]);
          let penaltygoalx = true;
         iconrefreshZ = iconrefreshZ || teamx.size > 26;
         teamx = new Map([[`${penaltygoalx}`, ((penaltygoalx ? 3 : 5) % (Math.max((penaltygoalx ? 2 : 5), 9)))]]);
      while (!holderC && iconrefreshZ) {
         holderC = dark2.length > 81;
         break;
      }
       let commonx = String.fromCharCode(105,100,119,116,95,114,95,51,51,0);
      while (iconrefreshZ) {
         iconrefreshZ = (24 >= ((!holderC ? 24 : dark2.length) | dark2.length));
         break;
      }
      target7 -= 2 & clubc.length;
       let defaultroombgA = String.fromCharCode(105,95,54,49,95,100,97,109,112,105,110,103,0);
       let detailse = 1.0;
      let time_n8 = defaultroombgA == String.fromCharCode(57,121,108,104,108,118,54,54,0);
      do {
          let macauj: Array<any> = [510, 270];
          let huawei_ = String.fromCharCode(110,101,97,114,101,114,0);
          let iconwatchnow_ = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,0);
          let footballI: Array<any> = [713, 223, 854];
         defaultroombgA += `${2 | huawei_.length}`;
         macauj.push(1 >> (Math.min(5, footballI.length)));
         huawei_ = `${(iconwatchnow_ == String.fromCharCode(54,0) ? footballI.length : iconwatchnow_.length)}`;
         if (time_n8) {
            break;
         }
      } while (((parseInt(`${detailse}`) * defaultroombgA.length) <= 1 && (parseFloat(`${defaultroombgA.length}`) * detailse) <= 3.94) && time_n8);
         detailse -= parseFloat(`${1 + defaultroombgA.length}`);
      while (detailse < 5.32) {
         detailse *= parseFloat(`${3 >> (Math.min(2, defaultroombgA.length))}`);
         break;
      }
      if ((parseInt(`${detailse}`) / (Math.max(2, 5))) > 1 && (defaultroombgA.length & 2) > 1) {
         defaultroombgA = `${defaultroombgA.length}`;
      }
         defaultroombgA = `${(defaultroombgA == String.fromCharCode(75,0) ? defaultroombgA.length : parseInt(`${detailse}`))}`;
      let fill3 = 6775629.0 >= detailse;
      do {
          let privacyK: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,52,95,49,49,0),String.fromCharCode(98,121,116,101,115,0)], [String.fromCharCode(108,105,107,101,108,121,0),String.fromCharCode(121,95,48,95,104,105,98,105,116,0)]]);
          let reactnavigation2: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,95,56,95,57,50,0),String.fromCharCode(116,97,105,108,95,55,95,52,53,0)], [String.fromCharCode(97,109,114,110,98,0),String.fromCharCode(100,117,114,98,95,50,95,54,49,0)], [String.fromCharCode(101,114,97,115,101,100,0),String.fromCharCode(109,95,55,95,101,121,101,100,114,111,112,112,101,114,0)]]);
         detailse += parseFloat(`${parseInt(`${detailse}`)}`);
         privacyK.set(`${reactnavigation2.size}`, reactnavigation2.size);
         if (fill3) {
            break;
         }
      } while ((defaultroombgA.length <= parseInt(`${detailse}`)) && fill3);
      shirta <<= Math.min(Math.abs(parseInt(`${detailse}`) / 1), 3);
   while (libimagepipeline2) {
       let searchbare = 4.0;
       let rewardvideob = 1.0;
       let subtextB: Map<any, any> = new Map([[String.fromCharCode(111,95,50,49,95,114,101,110,101,119,0),793], [String.fromCharCode(105,100,99,105,110,0),654], [String.fromCharCode(116,97,110,115,105,103,95,109,95,49,48,0),589]]);
       let contextK = 3;
       let configM = String.fromCharCode(98,95,50,51,0);
      for (let b = 0; b < 3; b++) {
          let profileM = 2.0;
          let sportsy = 5.0;
          let floater5: Array<any> = [346, 58];
          let currentO = 5.0;
         subtextB.set(`${sportsy}`, parseInt(`${currentO}`) & parseInt(`${sportsy}`));
         profileM *= parseFloat(`${floater5.length}`);
         floater5.push(parseInt(`${profileM}`));
         currentO *= parseFloat(`${parseInt(`${profileM}`) / (Math.max(floater5.length, 9))}`);
      }
      for (let v = 0; v < 1; v++) {
          let description_7tM: Array<any> = [String.fromCharCode(111,95,50,56,95,112,114,101,100,101,102,105,110,101,100,0), String.fromCharCode(105,109,112,108,101,109,101,110,116,115,0)];
         rewardvideob += parseFloat(`${parseInt(`${rewardvideob}`) & contextK}`);
         description_7tM.push(1 / (Math.max(6, description_7tM.length)));
      }
      if (5.16 >= (rewardvideob / 3.24)) {
         rewardvideob *= parseFloat(`${contextK - parseInt(`${rewardvideob}`)}`);
      }
         contextK %= Math.max(3, subtextB.size >> (Math.min(Math.abs(3), 2)));
          let mutedP = 4;
         rewardvideob += parseFloat(`${parseInt(`${searchbare}`)}`);
         mutedP <<= Math.min(Math.abs(3), 5);
         rewardvideob -= parseFloat(`${2}`);
      let whitex = 7473870 <= subtextB.size;
      do {
         subtextB.set(`${contextK}`, contextK);
         if (whitex) {
            break;
         }
      } while (whitex && (3 < (2 - subtextB.size) && 4 < (subtextB.size + 2)));
         rewardvideob += (parseFloat(`${String.fromCharCode(86,0) == configM ? configM.length : parseInt(`${rewardvideob}`)}`));
       let componentregistry2 = String.fromCharCode(111,95,49,54,95,101,112,97,102,0);
          let analytic9 = true;
          let libtanA = true;
         configM = `${2 % (Math.max(8, parseInt(`${rewardvideob}`)))}`;
         analytic9 = (!analytic9 ? libtanA : !analytic9);
         libtanA = (!libtanA ? !analytic9 : !libtanA);
      for (let f = 0; f < 1; f++) {
         searchbare *= parseFloat(`${componentregistry2.length}`);
      }
       let catalogK = 4.0;
          let chatB: Map<any, any> = new Map([[String.fromCharCode(100,95,54,52,95,109,97,110,97,103,101,114,0),361], [String.fromCharCode(99,111,111,107,105,101,0),605], [String.fromCharCode(121,118,99,111,110,102,105,103,0),790]]);
          let fastforwardF: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,115,95,56,95,51,55,0),296], [String.fromCharCode(104,102,121,117,0),853], [String.fromCharCode(116,119,111,115,95,102,95,53,49,0),121]]);
         contextK += (componentregistry2 == String.fromCharCode(70,0) ? configM.length : componentregistry2.length);
         chatB.set(`${fastforwardF.size}`, chatB.size);
         fastforwardF.set(`${fastforwardF.size}`, 1 * chatB.size);
         searchbare *= parseFloat(`${1}`);
      let interneth = searchbare <= 6909021.0;
      do {
         searchbare *= (parseFloat(`${configM == String.fromCharCode(114,0) ? configM.length : parseInt(`${catalogK}`)}`));
         if (interneth) {
            break;
         }
      } while (interneth && (1.91 == (searchbare * rewardvideob)));
      libimagepipeline2 = 39 > shirta || !libimagepipeline2;
      break;
   }
       let leakcheckerc = 4.0;
       let shielddoneh = false;
          let renewP = 4;
          let description_8n = String.fromCharCode(101,120,112,110,97,100,101,100,0);
         shielddoneh = !shielddoneh;
         renewP ^= (String.fromCharCode(84,0) == description_8n ? renewP : description_8n.length);
         leakcheckerc /= Math.max(((shielddoneh ? 3 : 1) + parseInt(`${leakcheckerc}`)), 5);
      let completeB = shielddoneh ? !shielddoneh : shielddoneh;
      do {
         shielddoneh = 92.66 > leakcheckerc && shielddoneh;
         if (completeB) {
            break;
         }
      } while ((!shielddoneh || 2.62 > (leakcheckerc + 4.35)) && completeB);
      while (leakcheckerc == 3.5 && 2.90 == (3.5 + leakcheckerc)) {
          let type_z1 = String.fromCharCode(101,118,101,114,0);
          let libreactnativejnix = String.fromCharCode(109,112,116,111,97,110,110,101,120,98,0);
          let greyarrowupM = 2.0;
         shielddoneh = libreactnativejnix.length >= parseInt(`${leakcheckerc}`);
         type_z1 = `${2 + type_z1.length}`;
         libreactnativejnix = `${parseInt(`${greyarrowupM}`)}`;
         greyarrowupM -= parseFloat(`${3 * parseInt(`${greyarrowupM}`)}`);
         break;
      }
          let combinedO = 4.0;
         shielddoneh = !shielddoneh && leakcheckerc > 80.81;
         combinedO *= parseInt(`${combinedO}`);
         leakcheckerc /= Math.max(((shielddoneh ? 3 : 4) / (Math.max(10, parseInt(`${leakcheckerc}`)))), 2);
      shirta /= Math.max(4, shirta & hooksA);

    console.debug("accepted 18+");

      clubc += `${2 - robotoa.length}`;
       let membershipM: Map<any, any> = new Map([[String.fromCharCode(115,112,108,97,115,104,0),46], [String.fromCharCode(112,108,97,105,110,0),72]]);
       let debugg = String.fromCharCode(109,97,107,101,110,97,110,0);
         membershipM.set(`${debugg}`, 2);
      let imagemanagerq = membershipM.size >= 5919897;
      do {
         membershipM = new Map([[`${membershipM.size}`, 2 + debugg.length]]);
         if (imagemanagerq) {
            break;
         }
      } while (imagemanagerq && ((debugg.length + 2) <= 1 && (debugg.length + membershipM.size) <= 2));
      target7 -= 1 | moreX.length;
       let privacy1: Array<any> = [140, 835, 230];
       let klevinZ = String.fromCharCode(105,110,116,114,97,120,100,115,112,0);
       let videovarW = String.fromCharCode(118,95,50,50,95,99,111,110,116,97,105,110,105,110,103,0);
          let zoom2 = String.fromCharCode(110,111,110,115,101,99,117,114,101,0);
          let modem: Array<any> = [855, 672, 67];
         klevinZ += `${klevinZ.length + 3}`;
         zoom2 += `${(String.fromCharCode(114,0) == zoom2 ? modem.length : zoom2.length)}`;
         modem = [modem.length];
         videovarW = `${videovarW.length}`;
      hooksA >>= Math.min(1, Math.abs(moreX.length % (Math.max(2, 3))));
      privacy1 = [privacy1.length];
   let fcdaebecbcbafcdfceaaeccfeacdbO = dropdowny.size <= 7425087;
   do {
      dropdowny = new Map([[`${invite3.size}`, 2]]);
      if (fcdaebecbcbafcdfceaaeccfeacdbO) {
         break;
      }
   } while ((!moreX.includes(`${dropdowny.size}`)) && fcdaebecbcbafcdfceaaeccfeacdbO);
   for (let a = 0; a < 1; a++) {
      libimagepipeline2 = pointr.length > 41 && point4;
   }
   for (let x = 0; x < 2; x++) {
      robotoa += `${invite3.size}`;
   }
   for (let d = 0; d < 2; d++) {
      libimagepipeline2 = !libimagepipeline2;
   }
       let rncore0 = String.fromCharCode(106,95,55,56,95,109,111,110,107,101,121,0);
      let foregroundj = rncore0.length >= 5597636;
      do {
          let customA = true;
          let tempa: Map<any, any> = new Map([[String.fromCharCode(115,105,122,101,98,105,116,114,97,116,101,0),267], [String.fromCharCode(105,116,101,109,0),845]]);
         rncore0 = `${((customA ? 2 : 3) ^ tempa.size)}`;
         if (foregroundj) {
            break;
         }
      } while (foregroundj && (rncore0 == rncore0));
          let switch_xae: Map<any, any> = new Map([[String.fromCharCode(101,95,54,51,95,101,120,112,110,97,100,101,100,0),867], [String.fromCharCode(115,117,112,112,111,114,116,115,0),510], [String.fromCharCode(116,98,108,101,110,100,95,109,95,49,53,0),944]]);
         rncore0 += `${switch_xae.size >> (Math.min(Math.abs(2), 4))}`;
      let mbsplasht = 9822896 <= rncore0.length;
      do {
         rncore0 = `${rncore0.length >> (Math.min(2, rncore0.length))}`;
         if (mbsplasht) {
            break;
         }
      } while (mbsplasht && (rncore0.length >= rncore0.length));
      dropdowny.set(`${libimagepipeline2}`, dropdowny.size ^ 3);
    dispatch(enableAdultMode());

      libimagepipeline2 = target7 < shirta;
   let middlebrightnessw = modeR.size >= 6201447;
   do {
      modeR = new Map([[`${invite3.size}`, (moreX == String.fromCharCode(88,0) ? invite3.size : moreX.length)]]);
      if (middlebrightnessw) {
         break;
      }
   } while (((5 & shootA.length) == 5 || 5 == (modeR.size & 5)) && middlebrightnessw);
   let codegenV = invite3.size <= 7168406;
   do {
      invite3 = new Map([[robotoa, 1]]);
      if (codegenV) {
         break;
      }
   } while ((point4) && codegenV);
      clubc += `${(String.fromCharCode(100,0) == moreX ? moreX.length : shirta)}`;
      robotoa += "1";
   let forwardQ = robotoa == String.fromCharCode(105,107,122,120,0);
   do {
       let lightR = 0.0;
      while (3.96 < (lightR / (Math.max(lightR, 7)))) {
          let filledE = 1.0;
          let forwardS = String.fromCharCode(100,111,119,110,0);
          let libreactnativeblobi = 3;
         lightR += parseFloat(`${libreactnativeblobi & parseInt(`${lightR}`)}`);
         filledE -= 2 >> (Math.min(3, forwardS.length));
         forwardS = `${1 * parseInt(`${filledE}`)}`;
         libreactnativeblobi >>= Math.min(Math.abs(parseInt(`${filledE}`)), 4);
         break;
      }
      if (lightR <= lightR) {
         lightR -= parseFloat(`${parseInt(`${lightR}`) - 1}`);
      }
      let foregroundr = lightR >= 6127522.0;
      do {
         lightR += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${lightR}`)), 5))}`);
         if (foregroundr) {
            break;
         }
      } while (foregroundr && ((lightR / (Math.max(8, lightR))) > 4.55));
      robotoa = `${(1 >> (Math.min(3, Math.abs((point4 ? 5 : 3)))))}`;
      if (forwardQ) {
         break;
      }
   } while ((robotoa.endsWith(`${clubc.length}`)) && forwardQ);
   while (1 <= robotoa.length || !libimagepipeline2) {
      robotoa += `${((point4 ? 5 : 3) % 2)}`;
      break;
   }
   for (let c = 0; c < 3; c++) {
      modeR.set(`${hooksA}`, hooksA);
   }
    dispatch(acceptOverEighteen());

      modeR.set(`${point4}`, (1 | (point4 ? 3 : 3)));
      moreX = `${((libimagepipeline2 ? 4 : 3) ^ hooksA)}`;
       let main_aX = String.fromCharCode(99,104,97,114,103,101,0);
          let iconsubssuccessU = 0;
          let grayo = String.fromCharCode(97,110,110,111,116,97,116,101,0);
          let searchbarem: Map<any, any> = new Map([[String.fromCharCode(118,97,100,100,113,0),String.fromCharCode(100,101,103,114,101,101,95,52,95,55,49,0)], [String.fromCharCode(112,105,116,99,104,102,105,108,116,101,114,95,54,95,56,54,0),String.fromCharCode(103,97,109,101,0)], [String.fromCharCode(112,114,111,116,101,99,116,0),String.fromCharCode(97,110,111,110,121,109,111,117,115,95,109,95,52,53,0)]]);
         main_aX += `${iconsubssuccessU / (Math.max(3, 6))}`;
         iconsubssuccessU |= grayo.length ^ searchbarem.size;
         grayo += `${searchbarem.size}`;
         main_aX = "1";
      if (main_aX == main_aX) {
         main_aX += `${main_aX.length}`;
      }
      libimagepipeline2 = (moreX.length ^ clubc.length) < 99;
   for (let b = 0; b < 2; b++) {
      shirta -= mbsplashm.length;
   }
      libimagepipeline2 = 20 >= dropdowny.size;
   if (robotoa.length < 2) {
       let dependenciesX = String.fromCharCode(100,95,52,50,95,115,104,111,119,0);
      for (let g = 0; g < 3; g++) {
         dependenciesX = `${dependenciesX.length & dependenciesX.length}`;
      }
       let sendY = 1.0;
       let watchnowbg0 = 2.0;
          let w_titleD: Map<any, any> = new Map([[String.fromCharCode(116,95,52,50,95,97,108,103,0),289], [String.fromCharCode(120,95,57,48,95,105,110,102,101,114,0),668]]);
          let teamdetailsbgh = String.fromCharCode(101,95,51,48,95,112,114,101,115,101,108,101,99,116,0);
          let penaltyj: Array<any> = [String.fromCharCode(120,95,52,50,95,99,104,97,112,116,101,114,0), String.fromCharCode(115,105,110,101,119,105,110,0)];
         watchnowbg0 *= parseFloat(`${2 | parseInt(`${watchnowbg0}`)}`);
         w_titleD = new Map([[`${w_titleD.size}`, w_titleD.size]]);
         teamdetailsbgh += `${teamdetailsbgh.length >> (Math.min(3, penaltyj.length))}`;
         penaltyj = [2 * teamdetailsbgh.length];
      mbsplashm = [hooksA];
   }
   let weatherY = 5147830 >= shootA.length;
   do {
       let modityU = 2.0;
       let modulesG = 2;
       let goalr = String.fromCharCode(116,95,55,50,95,103,97,112,108,101,115,115,0);
          let dycreatork = 2.0;
         modulesG /= Math.max(3, goalr.length);
         dycreatork += parseInt(`${dycreatork}`) >> (Math.min(Math.abs(parseInt(`${dycreatork}`)), 5));
      for (let c = 0; c < 2; c++) {
         modulesG >>= Math.min(3, Math.abs(2 >> (Math.min(Math.abs(modulesG), 4))));
      }
      while ((parseFloat(`${goalr.length}`) / (Math.max(3, modityU))) <= 1.52 || 2 <= (parseInt(`${modityU}`) / (Math.max(goalr.length, 8)))) {
         goalr += "3";
         break;
      }
          let forwardT = false;
          let awaya = 1.0;
         modulesG += ((forwardT ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${awaya}`)), 1)));
      if ((modulesG % (Math.max(4, goalr.length))) == 5 || (goalr.length % 5) == 1) {
          let vipsportm = 0;
          let gpayD = String.fromCharCode(101,112,105,115,111,100,101,0);
         modulesG |= vipsportm;
         vipsportm -= 3 * gpayD.length;
         gpayD += `${gpayD.length}`;
      }
      while (4 >= (modulesG - 1)) {
         goalr = "3";
         break;
      }
         modulesG += (String.fromCharCode(95,0) == goalr ? modulesG : goalr.length);
         modulesG -= 2 + modulesG;
       let disconnectedg = String.fromCharCode(113,99,111,109,0);
       let statistics2 = String.fromCharCode(116,114,97,110,115,102,101,114,95,118,95,54,51,0);
      shootA = `${mbsplashm.length / 3}`;
      if (weatherY) {
         break;
      }
   } while (weatherY && (shootA.length == hooksA));
      pointr += `${dropdowny.size / (Math.max(4, moreX.length))}`;
    dispatch(hideAdultModeDisclaimer());

       let unselectedA: Array<any> = [String.fromCharCode(109,97,108,108,111,99,0), String.fromCharCode(114,95,56,50,95,99,111,115,113,102,0), String.fromCharCode(97,112,112,101,110,100,105,110,103,0)];
         unselectedA = [unselectedA.length];
         unselectedA = [unselectedA.length << (Math.min(unselectedA.length, 2))];
         unselectedA.push(2);
      hooksA |= hooksA;
      invite3.set(pointr, pointr.length & 3);
      dropdowny = new Map([[`${invite3.size}`, 1]]);
      expiredk = `${shootA.length >> (Math.min(1, mbsplashm.length))}`;
   let buttonK = shirta >= 6978130;
   do {
       let launcherl: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0),false ], [String.fromCharCode(97,95,52,52,95,103,114,97,100,108,101,0),true ], [String.fromCharCode(99,111,108,108,97,116,105,111,110,0),false ]]);
       let profileactiveW = 5;
       let overlayP = false;
       let activityc = String.fromCharCode(117,100,112,0);
       let controlsJ = String.fromCharCode(97,99,99,101,112,116,101,100,0);
      for (let s = 0; s < 1; s++) {
          let greytickp = 5;
          let runtimeschedulerK: Array<any> = [590, 556];
         profileactiveW /= Math.max(2, controlsJ.length ^ activityc.length);
         greytickp += runtimeschedulerK.length * 3;
         runtimeschedulerK = [greytickp];
      }
          let moonx = 2.0;
         overlayP = 3 == launcherl.size && profileactiveW == 3;
         moonx += parseFloat(`${3 * parseInt(`${moonx}`)}`);
         profileactiveW %= Math.max(1 | controlsJ.length, 3);
         overlayP = (((overlayP ? 7 : launcherl.size) + launcherl.size) < 7);
      while ((profileactiveW | 5) <= 1) {
         profileactiveW %= Math.max(activityc.length, 1);
         break;
      }
          let shootq = true;
         launcherl = new Map([[`${profileactiveW}`, (profileactiveW / (Math.max(5, (overlayP ? 1 : 2))))]]);
         shootq = !shootq;
       let sina4 = 5.0;
         controlsJ += "2";
         overlayP = 19.91 <= sina4 || String.fromCharCode(109,0) == controlsJ;
         sina4 -= parseFloat(`${2 + parseInt(`${sina4}`)}`);
          let searchbarI = 0.0;
          let iconpipexpandY = String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,0);
          let referrery = String.fromCharCode(97,108,112,110,0);
         profileactiveW %= Math.max(1, 3);
         searchbarI -= 3;
         iconpipexpandY += `${iconpipexpandY.length % 1}`;
         referrery += `${iconpipexpandY.length}`;
         sina4 /= Math.max(parseFloat(`${parseInt(`${sina4}`)}`), 2);
      for (let t = 0; t < 2; t++) {
         activityc += `${controlsJ.length}`;
      }
      if ((sina4 / (Math.max(4.20, 8))) >= 2.41 || (profileactiveW / (Math.max(3, 10))) >= 3) {
          let project7: Map<any, any> = new Map([[String.fromCharCode(114,95,54,55,95,116,111,100,112,0),53], [String.fromCharCode(105,100,101,110,116,105,102,105,101,114,0),285], [String.fromCharCode(104,111,108,101,115,0),294]]);
         sina4 *= parseFloat(`${3}`);
         project7.set(`${project7.size}`, project7.size);
      }
      while (activityc.length > 5) {
         activityc = `${launcherl.size | 3}`;
         break;
      }
      shirta %= Math.max(launcherl.size << (Math.min(2, Math.abs(profileactiveW))), 4);
      if (buttonK) {
         break;
      }
   } while (buttonK && ((shootA.length * 2) < 2 && (shirta * 2) < 1));
   if (2 >= (4 / (Math.max(8, shootA.length))) && 4 >= (invite3.size / (Math.max(shootA.length, 8)))) {
      shootA = "3";
   }
   while ((invite3.size % 4) == 1 && 4 == (shirta % (Math.max(invite3.size, 5)))) {
       let subtextC = true;
       let about1 = 2.0;
       let fastz: Array<any> = [String.fromCharCode(118,108,99,111,100,101,99,0), String.fromCharCode(114,101,113,117,101,115,116,95,102,95,48,0), String.fromCharCode(100,95,49,57,95,102,97,107,101,0)];
       let emojiT: Array<any> = [550, 419];
       let flyerV = 4.0;
      while ((about1 - 1.87) >= 5.80) {
          let flagM = String.fromCharCode(110,118,111,105,99,101,95,101,95,49,56,0);
         subtextC = flagM.length <= fastz.length;
         break;
      }
      for (let m = 0; m < 3; m++) {
         fastz.push(emojiT.length);
      }
      for (let p = 0; p < 3; p++) {
         flyerV -= parseFloat(`${emojiT.length % (Math.max(3, 4))}`);
      }
      while ((fastz.length - emojiT.length) >= 5 || (5 - emojiT.length) >= 3) {
          let profile9 = true;
          let livenodatabgimgU = String.fromCharCode(105,95,56,57,95,114,97,110,100,0);
          let sellt = String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,112,95,51,56,0);
          let detailss: Map<any, any> = new Map([[String.fromCharCode(110,95,50,50,95,99,111,109,112,111,110,101,110,116,0),120], [String.fromCharCode(100,105,115,97,98,108,105,110,103,0),925]]);
          let sendv = String.fromCharCode(108,101,101,119,97,121,0);
         emojiT.push(sendv.length);
         profile9 = sellt.length > detailss.size;
         livenodatabgimgU += "2";
         sellt += `${livenodatabgimgU.length ^ sellt.length}`;
         detailss = new Map([[`${detailss.size}`, detailss.size]]);
         sendv += `${(sellt.length << (Math.min(3, Math.abs((profile9 ? 1 : 1)))))}`;
         break;
      }
         about1 -= emojiT.length + 2;
          let pointm = 4.0;
          let unreadm = String.fromCharCode(122,95,57,50,95,99,97,112,97,98,105,108,105,116,121,0);
         about1 /= Math.max(parseInt(`${pointm}`) + 1, 4);
         pointm -= unreadm.length;
         unreadm += `${unreadm.length}`;
          let expandr = 0;
          let leaguen: Array<any> = [728, 335, 715];
         subtextC = about1 >= 78.59 && emojiT.length >= 90;
         expandr += 2 & leaguen.length;
         leaguen.push(expandr % (Math.max(leaguen.length, 4)));
      while (2 > (emojiT.length * parseInt(`${flyerV}`)) || (flyerV * 1.82) > 5.60) {
         flyerV *= parseFloat(`${3}`);
         break;
      }
         fastz.push(emojiT.length % (Math.max(7, parseInt(`${flyerV}`))));
       let resendH = 4;
       let photoe = 3;
         emojiT.push(parseInt(`${about1}`) / 2);
      for (let o = 0; o < 1; o++) {
         emojiT.push(2 | parseInt(`${about1}`));
      }
      while (fastz.length <= about1) {
          let cornerkicko = String.fromCharCode(100,101,105,110,118,101,114,116,0);
          let halfH = 5.0;
          let acceptedy = 4;
          let qnewinterstitial3 = String.fromCharCode(99,118,105,100,0);
         about1 -= resendH;
         cornerkicko += `${qnewinterstitial3.length * 1}`;
         halfH -= (cornerkicko == String.fromCharCode(56,0) ? acceptedy : cornerkicko.length);
         acceptedy &= 2 * parseInt(`${halfH}`);
         qnewinterstitial3 = `${(String.fromCharCode(55,0) == qnewinterstitial3 ? qnewinterstitial3.length : parseInt(`${halfH}`))}`;
         break;
      }
       let templateprocessorM = 2;
       let nativeexp = 1;
      while (photoe >= 2) {
          let tooltipsr = String.fromCharCode(99,98,99,114,95,116,95,55,48,0);
          let libfbc = String.fromCharCode(99,111,109,112,108,105,97,110,116,0);
          let hiadL = true;
          let rulesP = 5.0;
         photoe *= parseInt(`${flyerV}`) << (Math.min(3, Math.abs(3)));
         tooltipsr = `${1 ^ parseInt(`${rulesP}`)}`;
         libfbc += `${(1 ^ (hiadL ? 4 : 3))}`;
         hiadL = !hiadL && libfbc.length == 29;
         rulesP /= Math.max(((hiadL ? 5 : 5) + libfbc.length), 5);
         break;
      }
      shirta ^= 2 ^ parseInt(`${about1}`);
      break;
   }
      libimagepipeline2 = (moreX.length & expiredk.length) >= 20;
    

      clubc = `${shootA.length}`;
       let turnp: Map<any, any> = new Map([[String.fromCharCode(105,102,97,99,116,111,114,0),4], [String.fromCharCode(106,95,49,56,95,119,111,114,107,97,114,111,117,110,100,0),434]]);
       let selection6 = 3.0;
      let short_rdn = turnp.size >= 5220455;
      do {
         turnp.set(`${selection6}`, turnp.size & parseInt(`${selection6}`));
         if (short_rdn) {
            break;
         }
      } while (short_rdn && (5 < turnp.size));
      for (let s = 0; s < 2; s++) {
         turnp = new Map([[`${turnp.size}`, turnp.size & 1]]);
      }
         selection6 -= 2 ^ parseInt(`${selection6}`);
         selection6 += parseInt(`${selection6}`);
          let floatingC = String.fromCharCode(98,95,51,51,95,97,112,112,101,110,100,0);
         turnp.set(floatingC, 3 % (Math.max(5, parseInt(`${selection6}`))));
      let suggestionW = 5130218 <= turnp.size;
      do {
         turnp = new Map([[`${turnp.size}`, 3 * turnp.size]]);
         if (suggestionW) {
            break;
         }
      } while (suggestionW && (turnp.size >= parseInt(`${selection6}`)));
      point4 = (clubc.length & mbsplashm.length) >= 68;
       let defaultfootballbgo = String.fromCharCode(98,105,119,101,105,103,104,116,0);
       let googleq: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,99,104,97,105,110,95,101,95,49,52,0),16], [String.fromCharCode(107,95,49,48,95,111,108,100,101,115,116,0),819]]);
       let forwardQY = String.fromCharCode(115,111,114,101,99,118,109,115,103,0);
      while (googleq.size < 3) {
         defaultfootballbgo += `${forwardQY.length}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
         defaultfootballbgo += `${googleq.size + 1}`;
      }
         forwardQY = "3";
         forwardQY = `${defaultfootballbgo.length & 2}`;
      for (let f = 0; f < 1; f++) {
          let sellz = 2.0;
          let textlayoutmanagerV = String.fromCharCode(101,120,97,99,116,0);
         googleq.set(`${forwardQY}`, 3);
         sellz -= (String.fromCharCode(102,0) == textlayoutmanagerV ? parseInt(`${sellz}`) : textlayoutmanagerV.length);
      }
      let rightm = 9818805 >= googleq.size;
      do {
         googleq.set(defaultfootballbgo, googleq.size * defaultfootballbgo.length);
         if (rightm) {
            break;
         }
      } while ((3 > (googleq.size % (Math.max(defaultfootballbgo.length, 6))) && (googleq.size % 3) > 5) && rightm);
      if (defaultfootballbgo.length == 3) {
         googleq.set(forwardQY, (String.fromCharCode(116,0) == forwardQY ? googleq.size : forwardQY.length));
      }
      let sell5 = String.fromCharCode(103,119,117,118,109,117,103,108,112,0) == defaultfootballbgo;
      do {
         defaultfootballbgo += `${defaultfootballbgo.length | 1}`;
         if (sell5) {
            break;
         }
      } while (((3 | defaultfootballbgo.length) >= 5 && 4 >= (3 | googleq.size)) && sell5);
      if (forwardQY.startsWith(defaultfootballbgo)) {
         forwardQY += `${forwardQY.length}`;
      }
      modeR.set(shootA, 1 | moreX.length);
       let pathh = 5.0;
       let targeta = String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,0);
      let lightf = 9786504.0 <= pathh;
      do {
          let jingdongu: Array<any> = [416, 686, 726];
          let thumbnail9 = 3;
          let componentsO = String.fromCharCode(98,121,116,101,105,110,95,110,95,54,50,0);
         pathh += parseFloat(`${3}`);
         jingdongu.push(3);
         thumbnail9 *= componentsO.length / (Math.max(8, jingdongu.length));
         componentsO = `${thumbnail9}`;
         if (lightf) {
            break;
         }
      } while (lightf && ((3 / (Math.max(10, targeta.length))) < 2));
         targeta += "1";
      for (let p = 0; p < 1; p++) {
         pathh /= Math.max(parseFloat(`${parseInt(`${pathh}`) % (Math.max(3, 7))}`), 1);
      }
      if ((pathh - 1.25) <= 5.87) {
         targeta += `${parseInt(`${pathh}`)}`;
      }
          let listi = String.fromCharCode(114,108,112,0);
          let mountingm = String.fromCharCode(105,110,116,101,114,105,116,101,109,95,101,95,54,0);
          let forwardv: Map<any, any> = new Map([[String.fromCharCode(120,95,52,52,95,109,111,116,105,111,110,112,105,120,101,108,115,0),String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,111,95,53,54,0)], [String.fromCharCode(109,111,116,99,111,109,112,0),String.fromCharCode(115,101,109,105,99,111,108,111,110,95,53,95,50,54,0)], [String.fromCharCode(105,110,116,115,0),String.fromCharCode(115,117,115,112,101,110,100,95,113,95,50,56,0)]]);
         pathh /= Math.max(parseFloat(`${2}`), 3);
         listi += `${forwardv.size >> (Math.min(Math.abs(2), 5))}`;
         mountingm = `${forwardv.size % (Math.max(mountingm.length, 10))}`;
      if (!targeta.startsWith(`${pathh}`)) {
         pathh *= parseFloat(`${targeta.length * parseInt(`${pathh}`)}`);
      }
      libimagepipeline2 = shirta <= 96;
   while (dropdowny.size > 2) {
      point4 = clubc.startsWith(`${target7}`);
      break;
   }
   if (pointr.length == 3) {
      dropdowny = new Map([[`${modeR.size}`, modeR.size / (Math.max(1, 9))]]);
   }
      shirta %= Math.max(4, (robotoa == String.fromCharCode(112,0) ? expiredk.length : robotoa.length));
   if (!robotoa.startsWith(`${dropdowny.size}`)) {
      dropdowny.set(expiredk, expiredk.length);
   }
    dispatch(enableWatchAnytimeAdultMode());
  }, [])

  const handleReject = useCallback(() => {
       let patha: Array<any> = [894, 606, 857];
    let anner8 = 1.0;
    let buildf = String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,0);
    let flyerB = String.fromCharCode(109,115,117,98,95,106,95,55,54,0);
    let vignetteW = 4.0;
    let tempnodatagifS = String.fromCharCode(118,105,101,119,115,0);
    let setting8 = String.fromCharCode(101,108,115,100,101,99,95,112,95,56,0);
    let reactnativeratingsa = true;
    let videocommonQ: Map<any, any> = new Map([[String.fromCharCode(109,111,110,103,111,95,108,95,50,57,0),false ], [String.fromCharCode(106,95,54,51,95,112,114,111,103,114,101,115,115,105,118,101,0),false ], [String.fromCharCode(106,95,54,48,95,114,97,116,105,111,115,0),false ]]);
    let mountingJ = String.fromCharCode(115,99,104,101,100,117,108,105,110,103,0);
    let combinem = 3.0;
    let shootA = String.fromCharCode(116,105,99,107,115,95,100,95,53,50,0);
    let crownh = true;
    let v_center3 = 1.0;
   let diceB = 4943234.0 <= vignetteW;
   do {
      vignetteW += parseFloat(`${2 * parseInt(`${combinem}`)}`);
      if (diceB) {
         break;
      }
   } while (diceB && ((videocommonQ.size - 4) >= 3 && (1.23 * vignetteW) >= 2.100));
      flyerB += `${((reactnativeratingsa ? 5 : 1) & 1)}`;
   let analyticsN = tempnodatagifS.length >= 7274804;
   do {
      tempnodatagifS = `${1 * parseInt(`${anner8}`)}`;
      if (analyticsN) {
         break;
      }
   } while ((tempnodatagifS.includes(`${patha.length}`)) && analyticsN);
   while (tempnodatagifS.length == 2) {
      vignetteW /= Math.max(parseFloat(`${flyerB.length + 3}`), 4);
      break;
   }
      setting8 += `${parseInt(`${anner8}`) + tempnodatagifS.length}`;
       let libimagepipelineS = false;
       let subbasketballplayerp = String.fromCharCode(110,101,115,116,0);
       let const_fX = 1.0;
         subbasketballplayerp = `${(String.fromCharCode(87,0) == subbasketballplayerp ? parseInt(`${const_fX}`) : subbasketballplayerp.length)}`;
      let phonesharem = libimagepipelineS ? !libimagepipelineS : libimagepipelineS;
      do {
         libimagepipelineS = String.fromCharCode(49,0) == subbasketballplayerp;
         if (phonesharem) {
            break;
         }
      } while ((4.84 <= const_fX) && phonesharem);
         subbasketballplayerp = `${subbasketballplayerp.length}`;
      if ((2.39 + const_fX) >= 5.39 && const_fX >= 2.39) {
         libimagepipelineS = 44.21 > const_fX && !libimagepipelineS;
      }
          let libsentrya = 5.0;
          let membershipx = 1.0;
          let moony = false;
         subbasketballplayerp += `${3 >> (Math.min(Math.abs(parseInt(`${membershipx}`)), 2))}`;
         libsentrya -= (parseInt(`${libsentrya}`) << (Math.min(3, Math.abs((moony ? 5 : 2)))));
         membershipx -= (parseFloat(`${(moony ? 3 : 1) & parseInt(`${libsentrya}`)}`));
      while (subbasketballplayerp.length <= 3) {
         subbasketballplayerp = `${subbasketballplayerp.length}`;
         break;
      }
          let libffmpegkitW = String.fromCharCode(97,105,102,102,0);
          let connection2 = 0.0;
         subbasketballplayerp += `${(3 << (Math.min(2, Math.abs((libimagepipelineS ? 5 : 3)))))}`;
         libffmpegkitW += `${(libffmpegkitW == String.fromCharCode(71,0) ? parseInt(`${connection2}`) : libffmpegkitW.length)}`;
         connection2 *= parseFloat(`${1}`);
         subbasketballplayerp = `${((libimagepipelineS ? 4 : 4))}`;
         const_fX /= Math.max(((libimagepipelineS ? 2 : 4)), 3);
      reactnativeratingsa = mountingJ.length == 86 || setting8.length == 86;
   if (!reactnativeratingsa) {
      patha = [parseInt(`${anner8}`) << (Math.min(Math.abs(videocommonQ.size), 5))];
   }
   while ((flyerB.length - combinem) >= 5.20 && 1 >= (parseInt(`${combinem}`) - flyerB.length)) {
      combinem /= Math.max(3, parseInt(`${anner8}`) / 1);
      break;
   }
       let scrollviewD = 2.0;
       let customK: Map<any, any> = new Map([[String.fromCharCode(114,116,112,109,97,112,95,118,95,55,0),String.fromCharCode(99,111,110,99,101,97,108,0)], [String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,0),String.fromCharCode(115,104,97,108,108,0)]]);
       let clearN = true;
         scrollviewD *= 2;
       let huaweiJ = 3;
      while ((customK.size % 2) >= 2 && (2 & customK.size) >= 1) {
         customK = new Map([[`${clearN}`, huaweiJ]]);
         break;
      }
      if ((scrollviewD * 3.58) >= 3.88 || (parseInt(`${scrollviewD}`) * customK.size) >= 1) {
          let videocommon4 = 5.0;
          let notificationZ = 4;
          let libcxxcomponentsV = 0.0;
          let unewarchdefaults8 = 5;
          let iconuserY = String.fromCharCode(113,95,54,53,95,121,112,114,101,100,105,99,116,105,111,110,0);
         scrollviewD *= 2;
         videocommon4 /= Math.max(parseFloat(`${3}`), 4);
         notificationZ *= 2 & iconuserY.length;
         libcxxcomponentsV /= Math.max(2, parseInt(`${videocommon4}`) << (Math.min(2, Math.abs(3))));
         unewarchdefaults8 >>= Math.min(1, Math.abs(notificationZ));
         iconuserY = `${unewarchdefaults8}`;
      }
      let watchD = 8873950 <= huaweiJ;
      do {
         huaweiJ ^= 3;
         if (watchD) {
            break;
         }
      } while ((4 <= (1 ^ huaweiJ) && !clearN) && watchD);
         clearN = 37.58 <= scrollviewD || 80 <= customK.size;
      if (clearN) {
         huaweiJ *= 1 << (Math.min(1, Math.abs(parseInt(`${scrollviewD}`))));
      }
          let found6: Map<any, any> = new Map([[String.fromCharCode(99,111,111,108,100,111,119,110,0),String.fromCharCode(114,101,112,108,121,0)], [String.fromCharCode(104,95,51,56,95,104,117,103,103,105,110,103,0),String.fromCharCode(112,117,116,105,110,116,0)], [String.fromCharCode(110,95,51,53,95,115,121,109,98,111,108,105,122,101,0),String.fromCharCode(116,95,57,52,95,115,111,97,108,108,111,99,0)]]);
          let recommendationL = false;
         clearN = !clearN;
         found6.set(`${recommendationL}`, 1);
      for (let q = 0; q < 1; q++) {
          let klevin4 = String.fromCharCode(115,95,56,50,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0);
         clearN = scrollviewD == 82.48;
         klevin4 += `${klevin4.length}`;
      }
      buildf = `${parseInt(`${anner8}`) << (Math.min(5, Math.abs(1)))}`;
      combinem += 1;
   while (4.41 > (5.12 / (Math.max(10, combinem)))) {
       let shared3: Map<any, any> = new Map([[String.fromCharCode(112,117,116,98,121,116,101,0),474], [String.fromCharCode(97,117,116,104,107,101,121,95,112,95,50,56,0),651]]);
       let favoriteu = String.fromCharCode(101,114,115,105,111,110,0);
       let chat8 = String.fromCharCode(98,95,52,48,95,109,117,115,105,99,0);
       let b_lockj = String.fromCharCode(114,116,115,112,0);
      while ((b_lockj.length % (Math.max(1, 7))) >= 5) {
         shared3 = new Map([[favoriteu, b_lockj.length + 2]]);
         break;
      }
      for (let y = 0; y < 2; y++) {
         b_lockj = `${chat8.length}`;
      }
      for (let y = 0; y < 1; y++) {
         chat8 += `${shared3.size << (Math.min(favoriteu.length, 3))}`;
      }
       let fcdaebecbcbafcdfceaaeccfeacdbt = String.fromCharCode(120,95,53,56,95,117,115,101,114,105,110,116,101,114,102,97,99,101,0);
         b_lockj += `${fcdaebecbcbafcdfceaaeccfeacdbt.length | 2}`;
          let whatsapps = 1;
         shared3.set(b_lockj, b_lockj.length);
         whatsapps ^= 3;
      if ((favoriteu.length % (Math.max(7, shared3.size))) == 2) {
         favoriteu += "3";
      }
          let flyerb = 1.0;
          let telegramN = String.fromCharCode(114,97,112,112,101,114,95,104,95,53,49,0);
         fcdaebecbcbafcdfceaaeccfeacdbt = `${chat8.length}`;
         flyerb *= telegramN.length;
         telegramN = `${parseInt(`${flyerb}`) - 1}`;
         favoriteu = `${(fcdaebecbcbafcdfceaaeccfeacdbt == String.fromCharCode(87,0) ? chat8.length : fcdaebecbcbafcdfceaaeccfeacdbt.length)}`;
      let libavutilf = b_lockj.length >= 9844767;
      do {
         b_lockj += `${chat8.length | 2}`;
         if (libavutilf) {
            break;
         }
      } while ((fcdaebecbcbafcdfceaaeccfeacdbt.length == b_lockj.length) && libavutilf);
         b_lockj = `${shared3.size & 2}`;
         b_lockj = `${favoriteu.length}`;
      combinem += shared3.size * parseInt(`${vignetteW}`);
      break;
   }
       let projectb: Map<any, any> = new Map([[String.fromCharCode(102,105,100,99,116,0),378], [String.fromCharCode(109,97,110,97,103,101,97,98,108,101,95,100,95,54,56,0),106]]);
         projectb = new Map([[`${projectb.size}`, projectb.size]]);
         projectb = new Map([[`${projectb.size}`, projectb.size]]);
      let gpayA = projectb.size <= 6520116;
      do {
         projectb.set(`${projectb.size}`, projectb.size | 2);
         if (gpayA) {
            break;
         }
      } while ((5 < (projectb.size - 2) && (2 - projectb.size) < 1) && gpayA);
      buildf += `${parseInt(`${vignetteW}`)}`;
   if (4.67 > (4.31 + vignetteW) || !reactnativeratingsa) {
      reactnativeratingsa = vignetteW <= 90.63;
   }

    console.debug("rejected 18+");

   for (let z = 0; z < 1; z++) {
      shootA += `${parseInt(`${vignetteW}`) ^ tempnodatagifS.length}`;
   }
      vignetteW += parseFloat(`${shootA.length >> (Math.min(Math.abs(3), 4))}`);
   let playi = 6427039 >= tempnodatagifS.length;
   do {
       let disconnectedlogo8 = String.fromCharCode(109,97,114,115,104,97,108,0);
       let sellT = true;
       let release_ryz = 1.0;
          let exampleimageG = true;
          let sharet = 5;
         release_ryz += 3 + disconnectedlogo8.length;
         exampleimageG = sharet < sharet;
         sellT = release_ryz > 12.65;
          let playa = String.fromCharCode(114,101,108,97,121,101,100,0);
         disconnectedlogo8 += `${(String.fromCharCode(115,0) == disconnectedlogo8 ? (sellT ? 1 : 1) : disconnectedlogo8.length)}`;
         playa += `${playa.length}`;
      for (let p = 0; p < 1; p++) {
          let tickedB: Map<any, any> = new Map([[String.fromCharCode(100,95,52,49,95,99,111,110,118,101,120,0),964], [String.fromCharCode(97,100,97,112,116,101,114,115,95,119,95,53,54,0),423], [String.fromCharCode(108,97,98,101,108,115,0),295]]);
          let penaltyR = false;
          let rulesr = String.fromCharCode(111,110,116,97,99,116,115,0);
          let anythinkq = String.fromCharCode(97,100,116,115,116,111,97,115,99,0);
          let filedj = String.fromCharCode(100,117,112,108,105,99,97,116,101,0);
         disconnectedlogo8 += "2";
         tickedB.set(`${penaltyR}`, tickedB.size);
         rulesr += `${(filedj == String.fromCharCode(73,0) ? (penaltyR ? 2 : 1) : filedj.length)}`;
         anythinkq = `${filedj.length}`;
      }
      while (!sellT && 1 >= disconnectedlogo8.length) {
          let scheduler8 = String.fromCharCode(101,115,116,105,109,97,116,101,115,95,121,95,51,54,0);
          let navigationP = 5;
          let phoneshareK = String.fromCharCode(105,110,116,101,103,101,114,105,102,121,0);
          let libpangleflippedo = String.fromCharCode(122,95,56,56,95,101,120,112,108,97,105,110,0);
         sellT = 74.40 <= release_ryz;
         scheduler8 += `${navigationP + 2}`;
         navigationP -= scheduler8.length / 2;
         phoneshareK = `${phoneshareK.length}`;
         libpangleflippedo = "2";
         break;
      }
      for (let z = 0; z < 1; z++) {
          let private_228 = String.fromCharCode(111,95,56,49,95,110,101,119,115,0);
         disconnectedlogo8 = "2";
         private_228 += `${private_228.length - private_228.length}`;
      }
      let typingd = sellT ? !sellT : sellT;
      do {
          let gmailw = String.fromCharCode(109,95,49,48,48,95,108,111,97,116,0);
          let exampleimagea = String.fromCharCode(105,110,118,111,107,101,0);
          let temp1 = 4;
         sellT = disconnectedlogo8.length < 9;
         gmailw = `${2 >> (Math.min(4, Math.abs(temp1)))}`;
         exampleimagea += `${gmailw.length / 2}`;
         temp1 ^= 2 ^ temp1;
         if (typingd) {
            break;
         }
      } while ((!sellT || 5 <= disconnectedlogo8.length) && typingd);
         release_ryz *= (disconnectedlogo8.length * (sellT ? 4 : 3));
         sellT = !sellT;
      tempnodatagifS = `${(1 / (Math.max(1, (sellT ? 3 : 2))))}`;
      if (playi) {
         break;
      }
   } while (playi && (1 <= tempnodatagifS.length));
       let albumz: Map<any, any> = new Map([[String.fromCharCode(101,95,53,53,95,114,111,120,121,0),939], [String.fromCharCode(97,114,114,97,121,115,0),81]]);
       let rewardl = 2;
      if ((albumz.size * rewardl) < 2 && (albumz.size * 2) < 1) {
          let profileactivei: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,0),148], [String.fromCharCode(114,95,55,49,95,102,111,114,119,97,114,100,115,0),623], [String.fromCharCode(100,101,115,116,114,117,99,116,105,118,101,0),187]]);
          let stationsC = String.fromCharCode(97,115,107,95,120,95,57,57,0);
          let assistS = String.fromCharCode(103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,0);
          let giftbutton1 = String.fromCharCode(115,111,108,118,101,100,0);
          let agreementX = String.fromCharCode(105,110,111,100,101,115,0);
         albumz.set(giftbutton1, (String.fromCharCode(72,0) == giftbutton1 ? giftbutton1.length : assistS.length));
         profileactivei = new Map([[`${profileactivei.size}`, stationsC.length]]);
         stationsC = "2";
         assistS = `${(agreementX == String.fromCharCode(52,0) ? profileactivei.size : agreementX.length)}`;
      }
      while (2 > (2 * albumz.size) || 3 > (2 * albumz.size)) {
         rewardl >>= Math.min(Math.abs(rewardl | 2), 1);
         break;
      }
       let tooltipsL = String.fromCharCode(111,95,50,56,95,98,105,110,97,115,99,105,105,0);
         rewardl |= albumz.size / 1;
         tooltipsL = `${rewardl + albumz.size}`;
      if (Array.from(albumz.keys()).includes(`${rewardl}`)) {
          let templateprocessorV = 3.0;
          let charto: Map<any, any> = new Map([[String.fromCharCode(116,104,105,99,107,110,101,115,115,0),true ], [String.fromCharCode(99,111,108,0),false ]]);
         rewardl >>= Math.min(Math.abs((tooltipsL == String.fromCharCode(82,0) ? parseInt(`${templateprocessorV}`) : tooltipsL.length)), 2);
         templateprocessorV *= parseFloat(`${charto.size * charto.size}`);
      }
      shootA = `${videocommonQ.size}`;
   for (let t = 0; t < 3; t++) {
      combinem /= Math.max(3 >> (Math.min(2, buildf.length)), 5);
   }
   if (2 == (patha.length | 1) && 1 == patha.length) {
       let bdxadsdk0 = String.fromCharCode(119,105,116,110,101,115,115,95,57,95,50,0);
       let alerta = 2.0;
       let settingl = 5;
       let colors6 = false;
       let componentsM = String.fromCharCode(107,95,52,95,108,101,97,115,101,0);
         alerta /= Math.max(parseFloat(`${componentsM.length}`), 5);
      for (let h = 0; h < 1; h++) {
          let libavutill = String.fromCharCode(115,110,97,112,95,51,95,56,0);
          let libreactnativejniQ: Array<any> = [448, 379];
         alerta += parseFloat(`${settingl | 2}`);
         libavutill = `${libavutill.length * 3}`;
         libreactnativejniQ.push(libavutill.length);
      }
      if (5 <= bdxadsdk0.length) {
         bdxadsdk0 = `${((colors6 ? 3 : 4))}`;
      }
         alerta += parseFloat(`${componentsM.length}`);
         componentsM += `${parseInt(`${alerta}`) % (Math.max(3, 9))}`;
       let descC = String.fromCharCode(101,114,114,110,111,0);
       let mappingz = String.fromCharCode(97,114,116,105,99,108,101,115,95,100,95,57,48,0);
      while (parseInt(`${alerta}`) < descC.length) {
          let modee = String.fromCharCode(108,111,103,103,101,114,95,121,95,48,0);
          let textlayoutmanagere = 3.0;
          let thumbnailI = String.fromCharCode(112,111,115,108,105,115,116,115,0);
          let completeY: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,115,116,121,108,0),false ], [String.fromCharCode(114,101,115,97,109,112,108,101,95,114,95,53,53,0),true ]]);
          let libsentryd = false;
         descC += `${componentsM.length - 1}`;
         modee += `${1 >> (Math.min(2, modee.length))}`;
         textlayoutmanagere += parseFloat(`${modee.length}`);
         thumbnailI += `${(String.fromCharCode(56,0) == modee ? modee.length : thumbnailI.length)}`;
         completeY = new Map([[`${completeY.size}`, modee.length]]);
         libsentryd = modee.length <= 41 || thumbnailI.length <= 41;
         break;
      }
         alerta *= parseFloat(`${parseInt(`${alerta}`)}`);
         alerta /= Math.max(parseFloat(`${1}`), 5);
      while (mappingz == String.fromCharCode(121,0)) {
         descC += `${(componentsM.length << (Math.min(5, Math.abs((colors6 ? 2 : 3)))))}`;
         break;
      }
         mappingz = `${componentsM.length}`;
      patha = [(parseInt(`${alerta}`) & (colors6 ? 3 : 4))];
   }
   if (5.15 > (combinem + 4.78)) {
      mountingJ = `${((reactnativeratingsa ? 3 : 3))}`;
   }
   while (mountingJ.endsWith(`${anner8}`)) {
      anner8 /= Math.max(2, ((reactnativeratingsa ? 3 : 3)));
      break;
   }
   for (let x = 0; x < 2; x++) {
      vignetteW *= parseFloat(`${parseInt(`${combinem}`) / (Math.max(1, 8))}`);
   }
      buildf = `${2 >> (Math.min(Math.abs(parseInt(`${vignetteW}`)), 1))}`;
      combinem += parseInt(`${vignetteW}`);
       let homeM = String.fromCharCode(108,105,99,101,110,115,101,115,0);
         homeM = `${homeM.length}`;
          let sigmobv = 3.0;
          let heartF: Array<any> = [488, 879, 893];
          let update_y6E = 0.0;
         homeM = `${3 + heartF.length}`;
         sigmobv *= parseFloat(`${2 % (Math.max(10, parseInt(`${update_y6E}`)))}`);
         heartF.push(parseInt(`${sigmobv}`));
         update_y6E += parseInt(`${update_y6E}`) * parseInt(`${sigmobv}`);
      if (homeM != homeM) {
         homeM = `${homeM.length << (Math.min(Math.abs(3), 1))}`;
      }
      videocommonQ.set(`${combinem}`, parseInt(`${combinem}`) % 3);
   for (let w = 0; w < 2; w++) {
      reactnativeratingsa = shootA == String.fromCharCode(78,0);
   }
    dispatch(disableAdultMode());

      vignetteW += (parseFloat(`${(crownh ? 1 : 5) - 1}`));
       let plusY = String.fromCharCode(99,108,117,116,0);
       let chartw = 5.0;
         plusY += "2";
          let scoreW = 0.0;
          let result2 = String.fromCharCode(118,97,108,115,0);
          let time_1S = 3.0;
         chartw += parseFloat(`${parseInt(`${chartw}`) / 2}`);
         scoreW /= Math.max(1, (parseFloat(`${result2 == String.fromCharCode(55,0) ? result2.length : parseInt(`${time_1S}`)}`)));
         time_1S *= result2.length >> (Math.min(4, Math.abs(parseInt(`${scoreW}`))));
          let nativeexe = String.fromCharCode(116,95,50,52,95,109,101,114,103,101,100,0);
          let static_ppJ = String.fromCharCode(105,109,112,111,114,116,97,98,108,101,0);
          let condensede = String.fromCharCode(102,104,116,120,95,116,95,51,55,0);
         chartw += parseFloat(`${2 | plusY.length}`);
         nativeexe += `${nativeexe.length}`;
         static_ppJ += `${static_ppJ.length / 2}`;
         condensede = `${condensede.length / 1}`;
       let confirmation_: Array<any> = [638, 192, 495];
      for (let c = 0; c < 1; c++) {
         chartw += parseFloat(`${confirmation_.length & 2}`);
      }
         confirmation_.push(2);
      setting8 = `${videocommonQ.size * 3}`;
       let defaultroombgS = String.fromCharCode(115,104,97,114,112,101,110,0);
      while (1 == defaultroombgS.length) {
         defaultroombgS += `${defaultroombgS.length % 1}`;
         break;
      }
      if (defaultroombgS.length < 3) {
         defaultroombgS += `${defaultroombgS.length}`;
      }
         defaultroombgS = `${defaultroombgS.length}`;
      vignetteW *= parseFloat(`${1}`);
      reactnativeratingsa = combinem > mountingJ.length;
   for (let o = 0; o < 3; o++) {
      reactnativeratingsa = setting8.length > videocommonQ.size;
   }
      reactnativeratingsa = shootA.length >= 67;
   for (let p = 0; p < 2; p++) {
      flyerB = `${shootA.length}`;
   }
      crownh = combinem <= 9.28;
      reactnativeratingsa = mountingJ.length > combinem;
      buildf += `${shootA.length}`;
   while (anner8 < patha.length) {
       let logol: Array<any> = [738, 644, 626];
       let u_unlockJ = true;
       let banner7 = String.fromCharCode(107,101,121,118,97,108,0);
       let mappingK: Map<any, any> = new Map([[String.fromCharCode(101,105,112,118,0),968], [String.fromCharCode(99,111,110,115,116,97,110,116,0),466]]);
       let bannerj = String.fromCharCode(98,105,116,115,113,112,95,100,95,57,53,0);
         u_unlockJ = 89 == logol.length;
      let libimagepipelineZ = String.fromCharCode(112,118,97,98,110,122,109,108,0) == bannerj;
      do {
          let expandR = String.fromCharCode(98,121,112,97,115,115,95,48,95,57,53,0);
          let ajax4 = String.fromCharCode(102,95,55,51,95,115,117,98,116,101,120,116,0);
         bannerj += `${banner7.length}`;
         expandR += `${(String.fromCharCode(75,0) == expandR ? expandR.length : ajax4.length)}`;
         ajax4 = `${ajax4.length}`;
         if (libimagepipelineZ) {
            break;
         }
      } while (libimagepipelineZ && (!bannerj.includes(`${u_unlockJ}`)));
      while ((2 * mappingK.size) <= 1) {
         mappingK = new Map([[banner7, bannerj.length]]);
         break;
      }
         logol.push((String.fromCharCode(107,0) == bannerj ? (u_unlockJ ? 2 : 4) : bannerj.length));
          let abidetectV = true;
          let vignetteZ: Array<any> = [801, 738, 406];
         banner7 = `${mappingK.size & vignetteZ.length}`;
         abidetectV = !abidetectV;
         vignetteZ = [((abidetectV ? 4 : 3))];
         mappingK.set(bannerj, (String.fromCharCode(68,0) == bannerj ? mappingK.size : bannerj.length));
      for (let w = 0; w < 2; w++) {
         u_unlockJ = (((u_unlockJ ? 56 : bannerj.length) * bannerj.length) <= 56);
      }
      let gradlewm = 8201021 >= logol.length;
      do {
          let singleo = String.fromCharCode(114,95,50,57,95,103,117,97,114,97,110,116,101,101,0);
         logol = [((u_unlockJ ? 2 : 2) << (Math.min(Math.abs(3), 4)))];
         singleo += `${singleo.length}`;
         if (gradlewm) {
            break;
         }
      } while ((Array.from(mappingK.keys()).includes(`${logol.length}`)) && gradlewm);
      while ((1 + logol.length) > 3 || u_unlockJ) {
         logol = [banner7.length * 3];
         break;
      }
          let orientationm = String.fromCharCode(115,101,114,118,101,114,0);
          let promotionk: Array<any> = [931, 416, 257];
          let pangle_ = 5.0;
         logol = [parseInt(`${pangle_}`) | 3];
         orientationm = `${1 << (Math.min(4, orientationm.length))}`;
         promotionk.push(2 * promotionk.length);
         pangle_ /= Math.max(parseFloat(`${3}`), 2);
          let unselectedO: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,117,95,52,51,0),622], [String.fromCharCode(105,100,115,0),349], [String.fromCharCode(118,98,112,114,105,110,116,102,0),274]]);
         banner7 += "2";
         unselectedO.set(`${unselectedO.size}`, unselectedO.size);
         mappingK = new Map([[`${mappingK.size}`, mappingK.size]]);
      let backI = String.fromCharCode(104,52,108,112,119,111,104,121,0) == bannerj;
      do {
         bannerj = `${(3 - (u_unlockJ ? 5 : 1))}`;
         if (backI) {
            break;
         }
      } while (backI && (!bannerj.includes(`${u_unlockJ}`)));
      for (let w = 0; w < 2; w++) {
         banner7 = `${bannerj.length}`;
      }
       let commonX = 0.0;
      patha = [((reactnativeratingsa ? 3 : 2) / 3)];
      break;
   }
   while (3 == shootA.length) {
      shootA += `${2 - parseInt(`${vignetteW}`)}`;
      break;
   }
      vignetteW += parseFloat(`${mountingJ.length / (Math.max(3, 7))}`);
    dispatch(hideAdultModeDisclaimer());
  }, [])

  const handlePressIndicator = useCallback(() => {
       let mbridgeF = 5.0;
    let mapbufferl = false;
    let react5 = 2.0;
    let profileJ: Map<any, any> = new Map([[String.fromCharCode(115,97,110,105,116,105,122,101,114,0),true ], [String.fromCharCode(114,111,103,114,101,115,115,0),false ], [String.fromCharCode(102,95,54,50,95,99,111,109,112,111,115,105,116,105,111,110,0),true ]]);
    let promotionf: Map<any, any> = new Map([[String.fromCharCode(118,95,50,54,95,117,110,109,97,112,0),String.fromCharCode(109,95,55,50,95,112,116,114,115,0)], [String.fromCharCode(121,117,121,116,111,121,118,0),String.fromCharCode(109,117,116,101,0)]]);
    let sportP = 0.0;
    let libswscaleK = String.fromCharCode(115,104,111,114,116,108,121,0);
    let iconschedule0: Array<any> = [String.fromCharCode(105,115,115,117,101,114,0), String.fromCharCode(103,112,109,100,0), String.fromCharCode(115,97,116,117,114,97,116,105,111,110,0)];
    let traminiA = 0.0;
    let activityy = 2.0;
    let large2 = String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,101,95,50,49,0);
    let modityY = String.fromCharCode(115,105,103,110,97,116,117,114,101,115,0);
    let trashJ = false;
    let filed9 = 2.0;
    let otherP = 3.0;
    let thailandN = false;
    let lightJ = String.fromCharCode(112,114,111,114,101,115,100,115,112,95,103,95,49,0);
    let settingL = 5.0;
    let reactnativeultimatelistviewO = true;
    let kick2: Array<any> = [544, 194];
      react5 *= parseFloat(`${3 ^ parseInt(`${react5}`)}`);
   for (let x = 0; x < 2; x++) {
      large2 = `${large2.length ^ 3}`;
   }
      react5 += (parseFloat(`${(mapbufferl ? 1 : 4) - 3}`));
   let basketballhometeamu = mapbufferl ? !mapbufferl : mapbufferl;
   do {
       let iconclosewhitebgC = String.fromCharCode(115,117,98,109,118,0);
       let unimplementedviewL = 0.0;
       let defaultpredictionprofile2 = String.fromCharCode(111,112,116,105,109,105,122,101,95,117,95,52,51,0);
       let disconnectedlogoJ: Array<any> = [673, 335];
      while (!defaultpredictionprofile2.includes(`${disconnectedlogoJ.length}`)) {
         disconnectedlogoJ.push(3 << (Math.min(5, defaultpredictionprofile2.length)));
         break;
      }
      if (2.38 == unimplementedviewL) {
         disconnectedlogoJ.push(3);
      }
      let basketball7 = String.fromCharCode(100,112,120,48,56,51,52,55,110,51,0) == defaultpredictionprofile2;
      do {
         defaultpredictionprofile2 += "3";
         if (basketball7) {
            break;
         }
      } while (((1.40 - unimplementedviewL) > 4.55) && basketball7);
      while ((unimplementedviewL + parseFloat(`${disconnectedlogoJ.length}`)) <= 1.2 || (1.2 + unimplementedviewL) <= 5.16) {
         unimplementedviewL *= (parseFloat(`${defaultpredictionprofile2 == String.fromCharCode(115,0) ? parseInt(`${unimplementedviewL}`) : defaultpredictionprofile2.length}`));
         break;
      }
      while (parseFloat(`${defaultpredictionprofile2.length}`) >= unimplementedviewL) {
         unimplementedviewL *= parseFloat(`${parseInt(`${unimplementedviewL}`) & defaultpredictionprofile2.length}`);
         break;
      }
         unimplementedviewL *= parseFloat(`${defaultpredictionprofile2.length * iconclosewhitebgC.length}`);
          let container7 = 0.0;
         disconnectedlogoJ.push(3 & parseInt(`${container7}`));
      for (let w = 0; w < 1; w++) {
         unimplementedviewL /= Math.max(parseFloat(`${iconclosewhitebgC.length}`), 1);
      }
         disconnectedlogoJ.push(defaultpredictionprofile2.length);
      while (defaultpredictionprofile2.includes(`${unimplementedviewL}`)) {
          let codegenI = 4.0;
          let incidentQ: Array<any> = [221, 460];
          let profileframem: Array<any> = [739, 480];
          let commentR = String.fromCharCode(108,111,111,112,98,97,99,107,95,107,95,49,50,0);
          let untick1 = String.fromCharCode(115,105,103,116,101,114,109,95,113,95,56,55,0);
         unimplementedviewL -= parseFloat(`${disconnectedlogoJ.length ^ iconclosewhitebgC.length}`);
         codegenI /= Math.max(1, profileframem.length & incidentQ.length);
         incidentQ = [commentR.length & 3];
         profileframem = [incidentQ.length];
         commentR += `${(untick1 == String.fromCharCode(112,0) ? untick1.length : parseInt(`${codegenI}`))}`;
         break;
      }
         disconnectedlogoJ.push(2);
          let viewsX = String.fromCharCode(116,105,112,115,0);
          let morev = true;
         unimplementedviewL -= parseFloat(`${disconnectedlogoJ.length}`);
         viewsX = `${viewsX.length ^ viewsX.length}`;
         morev = (viewsX.length % (Math.max(viewsX.length, 6))) == 89;
      mapbufferl = 19 == large2.length;
      if (basketballhometeamu) {
         break;
      }
   } while ((3.1 > (1.58 / (Math.max(3, mbridgeF)))) && basketballhometeamu);
      modityY += `${parseInt(`${react5}`)}`;
   for (let f = 0; f < 3; f++) {
      activityy -= parseFloat(`${parseInt(`${activityy}`) | 3}`);
   }
      trashJ = (profileJ.size >> (Math.min(Math.abs(promotionf.size), 3))) == 77;
      sportP /= Math.max(2, parseFloat(`${1 % (Math.max(5, parseInt(`${mbridgeF}`)))}`));
   let release_aN = trashJ ? !trashJ : trashJ;
   do {
      trashJ = !trashJ;
      if (release_aN) {
         break;
      }
   } while ((1.100 < (traminiA + 5.5) && trashJ) && release_aN);
   if (trashJ) {
      promotionf.set(`${traminiA}`, parseInt(`${react5}`));
   }
      promotionf = new Map([[`${mapbufferl}`, libswscaleK.length % (Math.max(1, 5))]]);
      sportP -= (parseFloat(`${parseInt(`${react5}`) - (trashJ ? 5 : 5)}`));
      mapbufferl = traminiA == 92.15 && !mapbufferl;
   if ((profileJ.size * 3) < 3 || (4.83 - activityy) < 1.67) {
      profileJ.set(`${react5}`, 1 - parseInt(`${react5}`));
   }
   for (let n = 0; n < 1; n++) {
      mapbufferl = 93 >= iconschedule0.length && 93 >= promotionf.size;
   }
      libswscaleK = `${iconschedule0.length / 1}`;
   while (sportP < mbridgeF) {
       let chinasameO: Array<any> = [28, 270, 890];
       let short_4t5 = String.fromCharCode(114,101,113,117,105,114,101,115,0);
         chinasameO.push(short_4t5.length);
      while (short_4t5.endsWith(`${chinasameO.length}`)) {
          let libsgcoref: Array<any> = [767, 141];
          let diceB = 3.0;
          let league1 = 3.0;
         short_4t5 += `${short_4t5.length}`;
         libsgcoref.push(parseInt(`${diceB}`));
         diceB -= parseFloat(`${2}`);
         league1 *= parseFloat(`${libsgcoref.length | 2}`);
         break;
      }
          let wind6 = String.fromCharCode(101,120,99,101,112,116,105,111,110,115,0);
         short_4t5 = `${short_4t5.length}`;
         wind6 = `${wind6.length % 2}`;
      for (let q = 0; q < 2; q++) {
         chinasameO.push(short_4t5.length);
      }
         short_4t5 += `${short_4t5.length - chinasameO.length}`;
      if (5 >= (chinasameO.length * 1) && 4 >= (short_4t5.length * 1)) {
          let nbatrophyl = 2.0;
          let bootsplashH: Array<any> = [16, 79, 930];
          let loginZ = false;
          let matchactiveV = 1.0;
          let profilec = 5.0;
         short_4t5 += `${2 >> (Math.min(4, Math.abs(parseInt(`${profilec}`))))}`;
         nbatrophyl += 3;
         bootsplashH.push(((loginZ ? 1 : 5) * parseInt(`${matchactiveV}`)));
         matchactiveV += parseFloat(`${parseInt(`${matchactiveV}`) | 1}`);
         profilec += bootsplashH.length;
      }
      sportP /= Math.max(parseFloat(`${3}`), 5);
      break;
   }
      promotionf = new Map([[`${react5}`, 2 >> (Math.min(Math.abs(parseInt(`${activityy}`)), 5))]]);
   while ((parseFloat(`${promotionf.size}`) + traminiA) >= 3.56 && (traminiA + 3.56) >= 4.92) {
      traminiA += parseFloat(`${parseInt(`${traminiA}`) >> (Math.min(2, Math.abs(1)))}`);
      break;
   }
      otherP *= (1 ^ (thailandN ? 5 : 3));
   if (modityY.length == 1) {
      modityY = `${iconschedule0.length - 1}`;
   }
   for (let n = 0; n < 3; n++) {
       let xcopy_0bZ = String.fromCharCode(106,95,53,55,95,114,101,99,111,114,100,101,114,0);
       let gifgoalbgr = String.fromCharCode(112,111,115,116,101,114,115,95,114,95,52,52,0);
      while (xcopy_0bZ == gifgoalbgr) {
         gifgoalbgr += `${xcopy_0bZ.length}`;
         break;
      }
      let orientation_ = 9310742 >= gifgoalbgr.length;
      do {
          let mappingd = String.fromCharCode(105,95,55,53,95,100,111,99,117,109,101,110,116,0);
          let iconeditf: Array<any> = [188, 657, 915];
          let helperQ = String.fromCharCode(115,116,117,98,98,101,100,95,121,95,52,53,0);
          let middlebrightnessd = String.fromCharCode(113,95,54,55,95,105,110,99,114,101,97,115,101,0);
          let historyM: Map<any, any> = new Map([[String.fromCharCode(101,120,112,114,101,115,115,105,111,110,115,95,106,95,57,55,0),314], [String.fromCharCode(98,97,114,114,105,101,114,0),43], [String.fromCharCode(105,95,49,48,0),715]]);
         gifgoalbgr = `${middlebrightnessd.length & 3}`;
         mappingd = `${historyM.size & 1}`;
         iconeditf = [(mappingd == String.fromCharCode(122,0) ? mappingd.length : helperQ.length)];
         helperQ = `${(helperQ == String.fromCharCode(72,0) ? helperQ.length : historyM.size)}`;
         middlebrightnessd += `${historyM.size}`;
         if (orientation_) {
            break;
         }
      } while ((xcopy_0bZ == gifgoalbgr) && orientation_);
      modityY += `${3 + parseInt(`${react5}`)}`;
   }
   for (let w = 0; w < 1; w++) {
       let leakcheckero = 0.0;
       let styleU = false;
       let leakchecker9 = String.fromCharCode(102,97,114,109,101,0);
       let inactiveG: Array<any> = [935, 269];
         leakcheckero *= ((styleU ? 1 : 1) << (Math.min(Math.abs(3), 3)));
       let promotionb = true;
      for (let w = 0; w < 1; w++) {
         leakcheckero /= Math.max(((styleU ? 4 : 1) & parseInt(`${leakcheckero}`)), 3);
      }
          let calendarQ = 1.0;
         styleU = leakchecker9.length == 68 && !promotionb;
         calendarQ -= parseInt(`${calendarQ}`) + parseInt(`${calendarQ}`);
       let bodane = String.fromCharCode(115,121,109,98,111,108,115,0);
       let turndown2 = String.fromCharCode(99,111,110,116,97,105,110,101,100,0);
      let selected6 = leakchecker9 == String.fromCharCode(108,52,104,116,0);
      do {
         leakchecker9 = `${3 >> (Math.min(2, leakchecker9.length))}`;
         if (selected6) {
            break;
         }
      } while ((1 > (inactiveG.length | 5) && (5 | inactiveG.length) > 3) && selected6);
       let backw = String.fromCharCode(108,111,103,111,117,116,0);
      let logouserg = String.fromCharCode(122,103,108,52,120,99,0) == backw;
      do {
          let whistleC = String.fromCharCode(117,95,55,53,95,107,101,121,118,97,108,0);
          let watchH: Array<any> = [35, 699, 600];
          let greytickG = String.fromCharCode(114,95,52,55,95,102,97,117,99,101,116,115,0);
          let native_: Array<any> = [670, 221];
          let rncoreL = true;
         backw += `${watchH.length - 3}`;
         whistleC += `${(String.fromCharCode(67,0) == whistleC ? native_.length : whistleC.length)}`;
         watchH.push(((rncoreL ? 5 : 1) / (Math.max(10, greytickG.length))));
         greytickG = `${whistleC.length}`;
         native_.push((whistleC == String.fromCharCode(76,0) ? whistleC.length : native_.length));
         rncoreL = greytickG == String.fromCharCode(52,0);
         if (logouserg) {
            break;
         }
      } while ((backw.length == 5 && styleU) && logouserg);
          let photoG = 2.0;
         promotionb = turndown2.length > 88;
         photoG /= Math.max(4, parseInt(`${photoG}`) + 2);
      let crownC = styleU ? !styleU : styleU;
      do {
          let rncorec = 4.0;
          let valuesy = true;
         styleU = 28 == bodane.length || leakchecker9 == String.fromCharCode(113,0);
         rncorec /= Math.max(5, parseFloat(`${1 / (Math.max(10, parseInt(`${rncorec}`)))}`));
         valuesy = !valuesy;
         if (crownC) {
            break;
         }
      } while (crownC && (4.36 >= (leakcheckero - 2.92)));
         styleU = (bodane.length & backw.length) == 23;
          let privacy2: Map<any, any> = new Map([[String.fromCharCode(120,95,56,49,95,108,101,118,97,114,105,110,116,0),String.fromCharCode(98,105,108,105,110,101,97,114,0)], [String.fromCharCode(102,95,56,54,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0),String.fromCharCode(110,95,50,49,95,113,117,105,99,0)]]);
         backw += "1";
         privacy2 = new Map([[`${privacy2.size}`, 2]]);
      profileJ.set(`${mapbufferl}`, ((mapbufferl ? 1 : 1)));
   }
       let hejiO = 5.0;
          let stationsd = false;
          let shielddoneV = 1.0;
         hejiO += parseFloat(`${parseInt(`${hejiO}`) % 1}`);
         stationsd = shielddoneV < 15.44;
         shielddoneV *= (parseInt(`${shielddoneV}`) + (stationsd ? 5 : 2));
         hejiO -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${hejiO}`)), 4))}`);
          let customY: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,116,105,109,101,0),20], [String.fromCharCode(97,97,99,100,101,99,116,97,98,0),139], [String.fromCharCode(119,104,105,108,101,95,117,95,57,56,0),844]]);
         hejiO *= parseFloat(`${1 + parseInt(`${hejiO}`)}`);
         customY = new Map([[`${customY.size}`, customY.size % (Math.max(3, 6))]]);
      trashJ = modityY.length == 9;

    dispatch(showAdultVipPrivilegeMiniVideoAction())
  }, [])

  const handleOnClose = useCallback(() => {
       let flagS = String.fromCharCode(112,103,109,120,0);
    let scrollviewt = 5;
    let areaO = String.fromCharCode(101,95,57,57,95,97,116,111,102,0);
    let heartx = true;
    let chats = 1.0;
    let materialJ = String.fromCharCode(112,111,112,111,118,101,114,0);
    let completeL = 2;
    let whistled = 4.0;
   for (let z = 0; z < 3; z++) {
      materialJ = `${scrollviewt}`;
   }
      completeL |= scrollviewt;
   let iconY = String.fromCharCode(100,121,107,0) == materialJ;
   do {
       let eventsplashm = 3.0;
       let manifestO = 1.0;
       let mbsplash4 = String.fromCharCode(112,95,53,52,95,114,101,99,111,114,100,97,98,108,101,0);
      let mapping2 = eventsplashm <= 4926259.0;
      do {
         eventsplashm /= Math.max(parseInt(`${manifestO}`) >> (Math.min(Math.abs(3), 3)), 4);
         if (mapping2) {
            break;
         }
      } while (mapping2 && ((2 * manifestO) > 3.37));
       let moone = String.fromCharCode(115,97,118,101,100,0);
         mbsplash4 += `${mbsplash4.length}`;
      while (4.61 == (3.26 * eventsplashm) && (eventsplashm * 3.26) == 5.57) {
         moone = `${2 | parseInt(`${eventsplashm}`)}`;
         break;
      }
       let awayteamfield5 = String.fromCharCode(97,95,54,95,116,104,114,111,119,0);
      let mbbannerz = 7301060.0 <= manifestO;
      do {
         manifestO -= parseInt(`${eventsplashm}`);
         if (mbbannerz) {
            break;
         }
      } while ((!awayteamfield5.includes(`${manifestO}`)) && mbbannerz);
         manifestO += (moone == String.fromCharCode(106,0) ? moone.length : parseInt(`${manifestO}`));
      if (3.71 == (manifestO * 2)) {
          let controlsi = 1;
         eventsplashm -= 1 % (Math.max(2, controlsi));
      }
      let entryp = eventsplashm >= 6805087.0;
      do {
          let anytimeh = String.fromCharCode(114,97,110,107,105,110,103,95,105,95,51,57,0);
         eventsplashm += parseInt(`${manifestO}`);
         anytimeh += `${(anytimeh == String.fromCharCode(111,0) ? anytimeh.length : anytimeh.length)}`;
         if (entryp) {
            break;
         }
      } while ((3 < awayteamfield5.length) && entryp);
      materialJ += `${parseInt(`${eventsplashm}`) | parseInt(`${manifestO}`)}`;
      if (iconY) {
         break;
      }
   } while (iconY && (materialJ.endsWith(`${scrollviewt}`)));
      chats /= Math.max(scrollviewt + 3, 3);
   if (!areaO.includes(`${heartx}`)) {
      heartx = completeL <= 87 && materialJ == String.fromCharCode(71,0);
   }
   while ((1 >> (Math.min(3, flagS.length))) >= 5 && (chats / (Math.max(1.96, 6))) >= 2.88) {
       let basketballh = false;
       let episodef = String.fromCharCode(108,97,117,110,99,104,101,115,95,120,95,57,56,0);
       let iconrefreshR: Array<any> = [563, 402];
         episodef += `${episodef.length}`;
      for (let m = 0; m < 1; m++) {
          let manifestA = String.fromCharCode(116,104,117,109,98,0);
          let hejiE = String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,0);
          let yellowvideoliveR: Map<any, any> = new Map([[String.fromCharCode(117,110,105,102,111,114,109,115,0),false ], [String.fromCharCode(109,95,50,57,95,112,111,115,116,97,108,0),false ]]);
          let textlayoutmanager6 = 5.0;
         episodef += `${parseInt(`${textlayoutmanager6}`)}`;
         manifestA = `${(hejiE == String.fromCharCode(84,0) ? hejiE.length : yellowvideoliveR.size)}`;
         yellowvideoliveR = new Map([[hejiE, hejiE.length & 1]]);
         textlayoutmanager6 *= (String.fromCharCode(90,0) == hejiE ? hejiE.length : yellowvideoliveR.size);
      }
      while (2 == (episodef.length << (Math.min(Math.abs(5), 5)))) {
         iconrefreshR.push((1 | (basketballh ? 2 : 1)));
         break;
      }
       let recommendation1 = String.fromCharCode(115,98,119,97,105,116,95,111,95,57,0);
         iconrefreshR.push((episodef.length << (Math.min(4, Math.abs((basketballh ? 5 : 5))))));
      let bottom6 = episodef == String.fromCharCode(107,120,102,101,102,98,111,121,111,101,0);
      do {
         episodef = `${3 & recommendation1.length}`;
         if (bottom6) {
            break;
         }
      } while (bottom6 && (episodef.length == 1));
      while (recommendation1.endsWith(`${iconrefreshR.length}`)) {
         recommendation1 = `${1 * recommendation1.length}`;
         break;
      }
         iconrefreshR = [2];
         basketballh = iconrefreshR.length > episodef.length;
      flagS += "1";
      break;
   }
   if (4 > areaO.length) {
      areaO = `${areaO.length / 3}`;
   }
      chats -= ((heartx ? 2 : 3) ^ 3);
   while ((scrollviewt % (Math.max(flagS.length, 10))) == 1) {
      scrollviewt %= Math.max(1, 3);
      break;
   }
      heartx = completeL <= 60 || areaO == String.fromCharCode(79,0);
       let libreactnativeblobF = String.fromCharCode(110,101,105,103,104,98,111,117,114,0);
          let heart_ = 4;
          let emojiK = 3.0;
         libreactnativeblobF = `${parseInt(`${emojiK}`)}`;
         heart_ >>= Math.min(Math.abs(1 << (Math.min(1, Math.abs(heart_)))), 5);
         emojiK -= parseFloat(`${2 | heart_}`);
         libreactnativeblobF = "3";
         libreactnativeblobF += `${libreactnativeblobF.length}`;
      flagS += `${1 * completeL}`;

    dispatch(hideAdultVipPrivilegeMiniVideoAction())

      heartx = !materialJ.includes(`${heartx}`);
      heartx = areaO == String.fromCharCode(108,0);
      chats *= (parseInt(`${chats}`) % (Math.max(1, (heartx ? 4 : 5))));
   let diceY = 8171605 <= scrollviewt;
   do {
       let mailn = String.fromCharCode(108,95,52,51,95,117,100,116,97,0);
       let countryx = 3.0;
       let skipv = 3.0;
      let sentryb = 5785051.0 <= skipv;
      do {
         skipv -= parseFloat(`${parseInt(`${countryx}`)}`);
         if (sentryb) {
            break;
         }
      } while (sentryb && (skipv > countryx));
         mailn += `${parseInt(`${countryx}`)}`;
         skipv -= parseFloat(`${parseInt(`${countryx}`)}`);
       let canvasN = 3;
       let clear2 = 0;
      let final_rji = mailn.length >= 6322153;
      do {
         mailn += `${parseInt(`${countryx}`) + mailn.length}`;
         if (final_rji) {
            break;
         }
      } while (final_rji && ((4 - mailn.length) < 5));
      for (let f = 0; f < 2; f++) {
         canvasN += clear2;
      }
      let chartu = countryx <= 9310800.0;
      do {
         countryx -= (String.fromCharCode(110,0) == mailn ? canvasN : mailn.length);
         if (chartu) {
            break;
         }
      } while (chartu && (4.31 >= countryx));
      let grapht = 6358532 <= clear2;
      do {
         clear2 %= Math.max(1 ^ mailn.length, 5);
         if (grapht) {
            break;
         }
      } while ((clear2 > 3) && grapht);
          let runtimeO: Array<any> = [String.fromCharCode(114,101,97,115,115,109,95,109,95,50,55,0), String.fromCharCode(112,114,111,116,111,99,111,108,0)];
          let middleB: Array<any> = [464, 856];
          let backiconC = 0;
         countryx *= parseInt(`${skipv}`);
         runtimeO.push(backiconC >> (Math.min(1, Math.abs(2))));
         middleB.push(middleB.length | 2);
         backiconC &= backiconC >> (Math.min(middleB.length, 5));
      scrollviewt -= 2 * parseInt(`${countryx}`);
      if (diceY) {
         break;
      }
   } while (diceY && (scrollviewt == 1));
       let backO = String.fromCharCode(97,99,107,101,100,95,100,95,57,49,0);
       let half0 = 2;
       let baiduG = 2;
      let middlem = backO.length >= 6372623;
      do {
         backO = `${3 * backO.length}`;
         if (middlem) {
            break;
         }
      } while ((4 <= (backO.length ^ 5) || (baiduG ^ backO.length) <= 5) && middlem);
         backO += `${1 & backO.length}`;
      for (let c = 0; c < 1; c++) {
         backO = "3";
      }
          let videovar7 = 3;
          let backwardT = String.fromCharCode(97,119,97,105,116,105,110,103,95,121,95,56,54,0);
          let yingy = false;
         backO = `${baiduG}`;
         videovar7 >>= Math.min(2, Math.abs(backwardT.length * videovar7));
         backwardT = `${backwardT.length}`;
         yingy = !yingy;
         backO = `${1 - baiduG}`;
      for (let y = 0; y < 2; y++) {
         backO = "2 * half0";
      }
      while ((baiduG + 5) > 4 || 5 > (5 + baiduG)) {
         half0 <<= Math.min(Math.abs(backO.length - half0), 4);
         break;
      }
       let save8 = String.fromCharCode(116,97,98,108,101,103,101,110,0);
       let questiconm = String.fromCharCode(116,112,105,100,95,116,95,49,57,0);
          let iconplayQ = String.fromCharCode(116,101,120,116,98,101,95,118,95,54,54,0);
         backO += `${baiduG * save8.length}`;
         iconplayQ = `${iconplayQ.length & iconplayQ.length}`;
      materialJ = `${((heartx ? 2 : 5))}`;
   let hooki = heartx ? !heartx : heartx;
   do {
      heartx = chats >= 86.2;
      if (hooki) {
         break;
      }
   } while (hooki && ((chats / 4.89) > 4.63));
      areaO += `${((heartx ? 3 : 2))}`;
       let overlayO = 5;
       let latnb = String.fromCharCode(118,95,55,52,95,112,101,114,102,0);
       let thailandG = String.fromCharCode(113,114,99,111,100,101,0);
         latnb += `${latnb.length}`;
       let indexG = String.fromCharCode(110,117,109,98,105,116,115,0);
      materialJ += `${overlayO - 1}`;
   let expandk = heartx ? !heartx : heartx;
   do {
      heartx = (scrollviewt * completeL) > 53;
      if (expandk) {
         break;
      }
   } while (expandk && (3 <= materialJ.length && !heartx));
   while (2.70 >= (5.53 * chats) && !heartx) {
      chats -= materialJ.length;
      break;
   }
      scrollviewt += materialJ.length;
    console.debug('close!!!')
  }, [])

  return (
    <View
      style={{
        ...styles.container,
        
        height: showAdultVipPrivilegeMiniVideo ? '100%' : 'auto'
      }}
    >
      {/* {watchAnytimeAdultMode && <WatchAnytimeVipModal />} */}
      {(screenState.showAdultTab) && (
        <AdultModeSwitch switchStyle={styles.switch} />
      )}
      {watchAnytimeAdultMode && !isVip && !showAdultVipPrivilegeMiniVideo &&
        <VipPrivilegeFloatingIndicator
          text1="升级VIP"
          text2="享更多福利视频 》"
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 0,
            flex: 1,
          }}
          onPress={handlePressIndicator}
        />

      }
      {/* {watchAnytimeAdultMode && (UMENG_CHANNEL != "GOOGLE_PLAY" || Platform.OS === "ios" )&& (
        <AdultModeCountdownIndicator
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 20,
            flex: 1,
          }}
        />
      )} */}
      {/* <EighteenPlusOverlay
        handleAccept={handleAccept}
        handleReject={handleReject}
      /> */}
      <AdultVipPrivilegeOverlay
        showCondition={showAdultVipPrivilegeMiniVideo}
        onClose={handleOnClose}
        showBlur={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    width: "100%",
    position: "absolute",
  },
  switch: {
    position: "absolute",
    top: 25,
    right: 20,
  },
});

export default eighteenPlusControls;
