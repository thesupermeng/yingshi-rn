import React, { useCallback, useEffect, useState, memo } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  Platform,
} from "react-native";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import ShowMoreButton from "../../components/button/wawa_iconlogout_button";

import CollectionIcon from "@static/images/iconwatchMinimize.svg";
import HistoryIcon from "@static/images/iconarrowrightorangeMappingDefaultfootballbg.svg";
import UploadIcon from "@static/images/pushFiled.svg";
import FeedbackIcon from "@static/images/predictionarrowLibavfilter.svg";
import ReviewIcon from "@static/images/centerFriendsChat.svg";
import SettingsIcon from "@static/images/trophyDark.svg";
import InfoIcon from "@static/images/logoIcontransferclub.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/libavdeviceQuest.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/combinePredictionbuttonSelect.svg";
import EditIcn from "@static/images/profile/codegenChatroombackgroundShootyesgoal.svg";

import VipIcon from "@static/images/privatechatbgMinimizeRelated.svg";
import VipArrow from "@static/images/projectEyeopen.svg";
import AddIcon from "@static/images/vip/pushFiled.svg";

import {
  hideBottomSheetAction,
  removeScreenAction,
  showLoginAction,
} from "@redux/actions/wawa_related";
import NotificationModal from "../../components/modal/wawa_lock";
import { updateUserAuth, updateUserReferral } from "@redux/actions/wawa_loginsuccess";
import ExpiredOverlay from "../../components/modal/wawa_holder";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { wawaBasketballiconPenaltyshootnogoal } from "../../../../wawa_shareblack_orientation";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/wawa_iconpointscore";
import FastImage from "../../components/common/wawa_iconarrowrightblack";
import { wawaEvent } from "@api";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import ReviewModal from "../../components/modal/wawa_livenodatabgimg";
import InAppReview from 'react-native-in-app-review';

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const [isShowReview, setShowReview] = useState(false);
  const isInAppReviewAvailable = InAppReview.isAvailable();
  const userState = useSelector<wawaPhoneControls>('userReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let projectW = 5.0;
    let termsI: Map<any, any> = new Map([[String.fromCharCode(117,112,103,114,97,100,101,100,95,100,95,52,51,0),255], [String.fromCharCode(115,116,121,108,101,115,95,103,95,51,49,0),99], [String.fromCharCode(119,97,108,107,95,118,95,56,52,0),742]]);
    let gdtadvT = String.fromCharCode(99,111,114,114,101,99,116,105,111,110,95,54,95,53,53,0);
    let redscoreballT = true;
    let progressv = 5.0;
    let splashz: Array<any> = [846, 224];
    let nextF = 1;
    let resendZ = String.fromCharCode(114,95,55,48,95,104,97,100,100,0);
    let gradleL = 5.0;
    let inouttargetredh = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,120,95,57,52,0);
   let closeU = 8970700 <= termsI.size;
   do {
      termsI.set(resendZ, resendZ.length);
      if (closeU) {
         break;
      }
   } while (closeU && (4 < termsI.size));
   let shirt9 = splashz.length <= 5427164;
   do {
       let expiredB = String.fromCharCode(112,114,111,118,105,100,101,95,102,95,50,0);
       let imagesq = true;
       let rocketL = false;
       let footballfiledlayoutG = false;
      let hejiF = expiredB == String.fromCharCode(117,103,109,50,102,113,116,107,0);
      do {
         expiredB += `${(1 / (Math.max(1, (footballfiledlayoutG ? 4 : 2))))}`;
         if (hejiF) {
            break;
         }
      } while ((rocketL) && hejiF);
         expiredB += `${((imagesq ? 3 : 2) + (rocketL ? 2 : 3))}`;
       let crownh = false;
       let whitesmalltickF = false;
          let scheduler8: Map<any, any> = new Map([[String.fromCharCode(113,95,55,53,95,100,99,97,100,97,116,97,0),String.fromCharCode(100,99,116,101,108,101,109,95,99,95,55,57,0)], [String.fromCharCode(98,95,54,51,95,112,101,114,99,101,112,116,0),String.fromCharCode(110,111,104,119,95,108,95,56,48,0)]]);
          let switch_845 = String.fromCharCode(101,109,97,105,108,95,102,95,49,54,0);
          let borderlessP: Array<any> = [75, 578, 644];
         whitesmalltickF = (imagesq ? !rocketL : imagesq);
         scheduler8.set(`${switch_845}`, switch_845.length / (Math.max(10, scheduler8.size)));
         borderlessP = [borderlessP.length];
         expiredB += `${(expiredB.length + (rocketL ? 1 : 4))}`;
      splashz = [((redscoreballT ? 1 : 1) & 3)];
      if (shirt9) {
         break;
      }
   } while ((!splashz.includes(nextF)) && shirt9);
   while (nextF <= 3) {
      nextF -= 3 | parseInt(`${gradleL}`);
      break;
   }
      splashz.push(2);
   while (2 < (4 >> (Math.min(5, Math.abs(termsI.size)))) || (termsI.size + 4) < 4) {
      termsI.set(`${redscoreballT}`, 1 - resendZ.length);
      break;
   }
   while ((termsI.size ^ 4) > 1 || (termsI.size | 4) > 1) {
      termsI.set(`${projectW}`, 2 - parseInt(`${projectW}`));
      break;
   }
   while ((nextF + resendZ.length) <= 2) {
       let abidetectm = String.fromCharCode(101,112,97,102,95,106,95,53,49,0);
       let upgradep = String.fromCharCode(99,95,53,50,95,102,97,118,105,99,111,110,0);
       let homeinactiveX = 2.0;
         abidetectm += `${parseInt(`${homeinactiveX}`) / (Math.max(abidetectm.length, 4))}`;
         upgradep = `${3 << (Math.min(4, abidetectm.length))}`;
         upgradep += `${parseInt(`${homeinactiveX}`) + upgradep.length}`;
      for (let u = 0; u < 1; u++) {
          let reactnavigationC = 1;
         abidetectm = `${(String.fromCharCode(56,0) == abidetectm ? reactnavigationC : abidetectm.length)}`;
      }
      while (abidetectm == String.fromCharCode(68,0) && upgradep != String.fromCharCode(87,0)) {
         abidetectm = `${3 % (Math.max(4, upgradep.length))}`;
         break;
      }
         homeinactiveX += parseFloat(`${upgradep.length ^ 1}`);
         upgradep = "2";
          let networkt: Map<any, any> = new Map([[String.fromCharCode(115,116,100,101,114,114,95,110,95,50,49,0),260], [String.fromCharCode(109,114,122,95,53,95,50,48,0),168], [String.fromCharCode(100,101,113,117,111,116,101,95,120,95,57,0),980]]);
          let largeX = String.fromCharCode(99,104,97,112,116,101,114,115,95,109,95,52,53,0);
         upgradep = `${largeX.length + networkt.size}`;
      let helpere = homeinactiveX >= 5344076.0;
      do {
          let pangleH = String.fromCharCode(105,95,50,56,95,100,111,119,110,108,111,97,100,0);
         homeinactiveX /= Math.max(parseFloat(`${parseInt(`${homeinactiveX}`) | 2}`), 2);
         pangleH = `${3 & pangleH.length}`;
         if (helpere) {
            break;
         }
      } while (helpere && (2 == (abidetectm.length | 3) && (parseFloat(`${abidetectm.length}`) * homeinactiveX) == 1.16));
      resendZ = `${gdtadvT.length}`;
      break;
   }
   if (redscoreballT) {
      redscoreballT = 34.35 >= projectW;
   }
      gradleL /= Math.max(parseFloat(`${parseInt(`${progressv}`)}`), 3);
       let basketballtrophyu = false;
          let privilegei = 0;
          let faviconX = false;
          let actionsy = 2.0;
         basketballtrophyu = 18.59 == actionsy && !faviconX;
         privilegei &= privilegei ^ 3;
         faviconX = 62 <= privilegei;
      if (basketballtrophyu && basketballtrophyu) {
         basketballtrophyu = (!basketballtrophyu ? !basketballtrophyu : !basketballtrophyu);
      }
      if (!basketballtrophyu) {
         basketballtrophyu = (!basketballtrophyu ? basketballtrophyu : !basketballtrophyu);
      }
      splashz.push(parseInt(`${progressv}`) ^ 2);
      splashz.push(parseInt(`${progressv}`) | 3);
   for (let r = 0; r < 1; r++) {
      progressv -= parseInt(`${gradleL}`);
   }
       let iconarrowrighty = String.fromCharCode(111,112,112,111,115,105,116,101,95,111,95,52,50,0);
       let formA = true;
       let friendsP = String.fromCharCode(110,95,51,56,95,102,114,97,109,101,114,0);
         formA = friendsP.endsWith(`${formA}`);
          let arrowrightw = true;
          let source9 = 2.0;
         formA = 28.32 < source9;
         arrowrightw = (arrowrightw ? arrowrightw : !arrowrightw);
         source9 += ((arrowrightw ? 2 : 5));
          let logoU = String.fromCharCode(116,97,107,101,110,95,99,95,52,53,0);
         friendsP = `${(logoU == String.fromCharCode(67,0) ? (formA ? 5 : 4) : logoU.length)}`;
         formA = !formA;
      while (!friendsP.includes(`${formA}`)) {
          let disconnecteda = false;
          let episodew: Map<any, any> = new Map([[String.fromCharCode(98,95,54,57,95,114,116,106,112,101,103,0),231], [String.fromCharCode(105,95,53,95,101,118,105,99,116,105,111,110,0),417]]);
          let homeplayeri = 1.0;
         friendsP = `${episodew.size}`;
         disconnecteda = !disconnecteda;
         episodew.set(`${homeplayeri}`, ((disconnecteda ? 2 : 3) | parseInt(`${homeplayeri}`)));
         break;
      }
      let disconnected_ = 5294908 <= friendsP.length;
      do {
         friendsP += `${(3 + (formA ? 1 : 1))}`;
         if (disconnected_) {
            break;
         }
      } while ((friendsP.startsWith(`${iconarrowrighty.length}`)) && disconnected_);
         iconarrowrighty += `${iconarrowrighty.length ^ friendsP.length}`;
          let windc: Array<any> = [477, 901, 668];
         iconarrowrighty = `${1 | iconarrowrighty.length}`;
         windc = [windc.length];
       let halfz = String.fromCharCode(100,117,112,108,105,99,97,116,101,100,95,121,95,57,52,0);
       let logouserL = String.fromCharCode(108,97,110,103,105,100,95,101,95,56,55,0);
      progressv /= Math.max(3 ^ parseInt(`${projectW}`), 3);
      splashz = [3 + termsI.size];
   for (let x = 0; x < 1; x++) {
      resendZ += `${3 ^ splashz.length}`;
   }
   for (let l = 0; l < 1; l++) {
      resendZ += `${(String.fromCharCode(102,0) == resendZ ? resendZ.length : nextF)}`;
   }
      resendZ = `${((redscoreballT ? 3 : 4) >> (Math.min(Math.abs(parseInt(`${projectW}`)), 1)))}`;
   if (gdtadvT == resendZ) {
       let show4: Array<any> = [395, 109, 758];
       let libavformatY = String.fromCharCode(114,97,110,107,105,110,103,95,114,95,53,57,0);
       let qaagg = 3.0;
          let sigmobO: Map<any, any> = new Map([[String.fromCharCode(101,120,112,111,114,116,101,100,95,103,95,50,50,0),329], [String.fromCharCode(98,108,117,114,97,121,95,116,95,50,51,0),60]]);
         qaagg -= (parseFloat(`${libavformatY == String.fromCharCode(48,0) ? parseInt(`${qaagg}`) : libavformatY.length}`));
         sigmobO.set(`${sigmobO.size}`, sigmobO.size % 1);
          let yellowanimationlived = String.fromCharCode(98,95,56,50,95,101,118,101,110,116,0);
          let modulef = String.fromCharCode(108,97,116,101,114,95,108,95,51,56,0);
         libavformatY = `${2 >> (Math.min(2, libavformatY.length))}`;
         yellowanimationlived = `${modulef.length}`;
         modulef += `${modulef.length}`;
       let goallogoj = 0.0;
       let sanso = 4.0;
      while ((parseFloat(`${libavformatY.length}`) + qaagg) < 3.1) {
         qaagg += parseFloat(`${parseInt(`${sanso}`) - show4.length}`);
         break;
      }
         qaagg /= Math.max(parseFloat(`${parseInt(`${sanso}`)}`), 1);
         sanso *= show4.length;
          let zhengpian_ = false;
         goallogoj -= ((zhengpian_ ? 5 : 3) << (Math.min(Math.abs(parseInt(`${qaagg}`)), 3)));
         goallogoj += show4.length;
       let singaporek = true;
      resendZ = `${splashz.length}`;
   }
       let policyl = String.fromCharCode(107,95,51,54,95,114,101,100,105,114,101,99,116,105,111,110,0);
       let floatingF: Map<any, any> = new Map([[String.fromCharCode(115,116,121,108,95,106,95,51,51,0),699], [String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,52,95,57,50,0),521]]);
       let flagf = false;
         policyl += `${((flagf ? 1 : 3) % (Math.max(3, 6)))}`;
          let iconeyeZ = 4.0;
         floatingF.set(`${policyl}`, policyl.length);
         iconeyeZ *= parseInt(`${iconeyeZ}`) & 3;
       let chatbotphotoi = String.fromCharCode(115,116,117,110,95,117,95,55,0);
       let delegate_gO = String.fromCharCode(106,95,49,52,95,100,116,111,97,0);
         delegate_gO += "2";
         flagf = chatbotphotoi.length < floatingF.size;
      while (chatbotphotoi.endsWith(`${flagf}`)) {
         chatbotphotoi = `${((flagf ? 5 : 2) % (Math.max(floatingF.size, 5)))}`;
         break;
      }
         flagf = (policyl.length | delegate_gO.length) > 59;
      let brightness2 = flagf ? !flagf : flagf;
      do {
         flagf = String.fromCharCode(115,0) == delegate_gO && 100 < chatbotphotoi.length;
         if (brightness2) {
            break;
         }
      } while ((!flagf && 4 >= (3 >> (Math.min(2, Math.abs(floatingF.size))))) && brightness2);
      for (let s = 0; s < 3; s++) {
         flagf = !flagf;
      }
      gradleL += parseFloat(`${nextF & 2}`);
       let attributedstringQ: Array<any> = [269, 560, 827];
       let buildu = false;
       let libavfilterl = 1.0;
      let upgradeY = 5061407.0 >= libavfilterl;
      do {
          let downloadedX = 4;
          let bgvipsportl: Array<any> = [519, 306];
          let chinasame0 = 5;
          let send3 = 0.0;
         libavfilterl *= 3;
         downloadedX *= 3 * chinasame0;
         bgvipsportl = [downloadedX];
         chinasame0 >>= Math.min(Math.abs(chinasame0), 2);
         send3 += parseFloat(`${downloadedX % (Math.max(parseInt(`${send3}`), 5))}`);
         if (upgradeY) {
            break;
         }
      } while (upgradeY && (libavfilterl == 3.79));
      if (attributedstringQ.length <= 3) {
          let baiduw = String.fromCharCode(110,105,103,104,116,95,121,95,49,53,0);
          let goallogoO = 2.0;
          let chartW = 3.0;
         buildu = buildu && baiduw.length < 73;
         baiduw = `${parseInt(`${chartW}`) ^ parseInt(`${goallogoO}`)}`;
         goallogoO -= parseFloat(`${parseInt(`${chartW}`)}`);
      }
          let nextI: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,122,95,51,57,0),false ], [String.fromCharCode(118,95,53,57,95,112,108,97,121,0),true ]]);
          let dicelogoW = 0;
          let traminiE = String.fromCharCode(102,95,52,57,95,109,101,116,97,115,111,117,110,100,0);
         buildu = libavfilterl > 2.86;
         nextI = new Map([[`${nextI.size}`, nextI.size << (Math.min(traminiE.length, 3))]]);
         dicelogoW <<= Math.min(1, Math.abs(dicelogoW));
         traminiE += `${dicelogoW | nextI.size}`;
      for (let f = 0; f < 2; f++) {
         libavfilterl *= 2 * parseInt(`${libavfilterl}`);
      }
         buildu = !buildu;
          let sentrye = false;
         buildu = 14.4 <= libavfilterl;
         sentrye = !sentrye;
         buildu = libavfilterl <= 95.62;
          let google6 = 0.0;
         buildu = attributedstringQ.includes(buildu);
         google6 *= parseFloat(`${parseInt(`${google6}`)}`);
          let penaltyshootj = 4;
          let iconorientationA: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,95,101,95,55,49,0),362], [String.fromCharCode(112,111,119,101,114,102,117,108,95,49,95,50,48,0),458]]);
         libavfilterl -= parseInt(`${libavfilterl}`) << (Math.min(4, Math.abs(1)));
         penaltyshootj &= 1;
         iconorientationA = new Map([[`${iconorientationA.size}`, penaltyshootj]]);
      progressv -= 2 & gdtadvT.length;
   let shootyesgoalm = redscoreballT ? !redscoreballT : redscoreballT;
   do {
      redscoreballT = null != termsI.get(`${progressv}`);
      if (shootyesgoalm) {
         break;
      }
   } while (shootyesgoalm && (redscoreballT));
      splashz.push(1 << (Math.min(Math.abs(parseInt(`${gradleL}`)), 5)));
      splashz = [((redscoreballT ? 1 : 3) % (Math.max(3, 5)))];

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let privilegeM = true;
    let libtanA = String.fromCharCode(112,95,52,50,95,105,110,105,116,105,97,108,0);
    let sansn = 3;
    let forwardD = String.fromCharCode(117,95,52,53,95,101,118,101,110,0);
    let anytimew = String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,54,95,51,51,0);
    let libavformatI = String.fromCharCode(114,95,54,50,95,119,100,108,102,99,110,0);
    let sellmathbackground9 = String.fromCharCode(113,95,56,51,95,99,104,97,110,0);
    let fullscreenmin7 = true;
    let moviesT: Array<any> = [String.fromCharCode(101,114,97,115,101,114,95,102,95,54,54,0), String.fromCharCode(119,95,53,48,95,105,110,118,111,107,101,114,0), String.fromCharCode(122,95,57,55,95,97,117,116,111,99,108,101,97,114,0)];
    let mbjscommone = 4;
    let basketballicon2 = String.fromCharCode(118,95,56,56,95,97,99,114,111,110,121,109,115,0);
    let shielddoneI = String.fromCharCode(108,95,50,52,95,112,114,111,106,101,99,116,0);
    let ajaxI: Map<any, any> = new Map([[String.fromCharCode(102,95,55,95,112,111,111,108,0),225], [String.fromCharCode(120,95,54,51,95,104,97,114,100,99,111,100,101,100,0),272], [String.fromCharCode(112,111,105,110,116,101,114,95,98,95,50,56,0),485]]);
   while (sellmathbackground9.endsWith(`${fullscreenmin7}`)) {
      fullscreenmin7 = privilegeM && anytimew.length > 21;
      break;
   }
      sansn >>= Math.min(5, Math.abs(libtanA.length | moviesT.length));
   for (let u = 0; u < 2; u++) {
       let controlsh: Map<any, any> = new Map([[String.fromCharCode(97,95,52,55,95,97,99,100,115,112,0),595], [String.fromCharCode(100,114,105,118,101,114,115,95,98,95,54,55,0),547]]);
       let yellowcirclebg0 = 4.0;
       let data5 = 0.0;
       let iconbellactiveQ = 2;
         iconbellactiveQ ^= 2;
         data5 /= Math.max(3, controlsh.size & iconbellactiveQ);
          let cornero: Array<any> = [739, 220];
          let iconviewergifW = 0.0;
          let taiwanb: Array<any> = [680, 574, 684];
         yellowcirclebg0 -= iconbellactiveQ;
         cornero = [1 & parseInt(`${iconviewergifW}`)];
         iconviewergifW -= parseFloat(`${2 >> (Math.min(3, taiwanb.length))}`);
         taiwanb = [1];
          let assist4: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,110,97,109,101,95,50,95,52,52,0),337], [String.fromCharCode(100,121,110,97,109,105,99,115,95,51,95,54,55,0),965], [String.fromCharCode(110,95,54,53,95,116,108,115,0),586]]);
          let iconchatsend4 = 0;
          let iconlogouti = 4;
         controlsh = new Map([[`${iconbellactiveQ}`, iconlogouti << (Math.min(Math.abs(iconbellactiveQ), 2))]]);
         assist4.set(`${iconchatsend4}`, assist4.size);
         iconchatsend4 ^= iconchatsend4 << (Math.min(Math.abs(2), 5));
         iconlogouti %= Math.max(3, 2);
         data5 /= Math.max(3, iconbellactiveQ);
         iconbellactiveQ += 3;
      if ((data5 - controlsh.size) < 4.39) {
         controlsh = new Map([[`${data5}`, iconbellactiveQ]]);
      }
          let libavdeviceZ = String.fromCharCode(115,104,97,114,101,115,95,56,95,53,48,0);
         iconbellactiveQ %= Math.max((libavdeviceZ == String.fromCharCode(115,0) ? libavdeviceZ.length : parseInt(`${data5}`)), 3);
      if (controlsh.get(`${yellowcirclebg0}`) == null) {
         yellowcirclebg0 *= controlsh.size * 1;
      }
          let alertG = String.fromCharCode(113,95,50,95,97,117,103,109,101,110,116,0);
         data5 *= parseInt(`${yellowcirclebg0}`) - parseInt(`${data5}`);
         alertG += `${1 ^ alertG.length}`;
         yellowcirclebg0 += controlsh.size | parseInt(`${yellowcirclebg0}`);
      if (controlsh.size < iconbellactiveQ) {
          let auto_zwa = String.fromCharCode(102,105,118,101,95,99,95,49,48,0);
          let middlewareR: Map<any, any> = new Map([[String.fromCharCode(97,95,49,50,95,99,111,110,115,117,109,101,0),409], [String.fromCharCode(109,97,108,108,111,99,95,113,95,53,56,0),659], [String.fromCharCode(99,111,109,112,114,101,115,115,95,102,95,56,49,0),264]]);
          let register_edv = 1;
          let iconnotificationnewC = String.fromCharCode(100,95,54,56,95,112,101,114,99,101,110,116,0);
         iconbellactiveQ += 3;
         auto_zwa += `${(String.fromCharCode(101,0) == iconnotificationnewC ? iconnotificationnewC.length : register_edv)}`;
         middlewareR.set(`${register_edv}`, 1);
      }
      moviesT = [1];
   }
   let regeng5 = String.fromCharCode(50,102,103,114,57,108,95,102,0) == anytimew;
   do {
      anytimew += `${2 >> (Math.min(5, libtanA.length))}`;
      if (regeng5) {
         break;
      }
   } while (regeng5 && (forwardD != String.fromCharCode(98,0)));
   for (let s = 0; s < 2; s++) {
      libtanA = `${anytimew.length ^ moviesT.length}`;
   }
   if (4 < (2 - mbjscommone)) {
       let libglogp = String.fromCharCode(116,101,115,115,101,108,97,116,111,114,95,98,95,51,51,0);
       let securityr = String.fromCharCode(99,114,108,115,95,108,95,50,54,0);
         securityr = "1";
         securityr += `${securityr.length}`;
      if (libglogp.length >= 2) {
         libglogp += `${1 + libglogp.length}`;
      }
          let q_hashp: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,100,95,107,95,50,51,0),13], [String.fromCharCode(99,109,111,118,95,117,95,51,48,0),37], [String.fromCharCode(109,117,108,97,100,100,95,122,95,51,50,0),819]]);
          let rankf = String.fromCharCode(116,111,112,105,99,97,108,95,111,95,53,56,0);
          let videojse = String.fromCharCode(120,95,50,48,95,100,101,103,114,97,100,97,116,105,111,110,0);
         securityr += `${securityr.length >> (Math.min(1, Math.abs(q_hashp.size)))}`;
         q_hashp.set(rankf, 2);
         rankf += "1";
         videojse = `${(String.fromCharCode(117,0) == videojse ? rankf.length : videojse.length)}`;
          let sliderW: Array<any> = [String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,54,95,55,51,0), String.fromCharCode(98,108,117,101,95,102,95,52,52,0), String.fromCharCode(105,95,50,54,95,115,121,110,111,110,121,109,115,0)];
         libglogp = `${1 >> (Math.min(2, securityr.length))}`;
         sliderW.push(2 >> (Math.min(3, sliderW.length)));
         securityr = `${securityr.length}`;
      mbjscommone -= basketballicon2.length;
   }

    const result = await wawaEvent.getUserDetails();

       let homeactiveA: Map<any, any> = new Map([[String.fromCharCode(113,115,118,115,99,97,108,101,95,113,95,55,57,0),String.fromCharCode(100,95,52,51,95,101,120,101,99,117,116,101,0)], [String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,95,105,95,56,54,0),String.fromCharCode(114,112,114,111,98,101,95,99,95,49,54,0)]]);
         homeactiveA = new Map([[`${homeactiveA.size}`, homeactiveA.size | homeactiveA.size]]);
         homeactiveA = new Map([[`${homeactiveA.size}`, homeactiveA.size << (Math.min(2, Math.abs(homeactiveA.size)))]]);
      if (5 <= (homeactiveA.size << (Math.min(Math.abs(4), 1))) && 5 <= (4 << (Math.min(1, Math.abs(homeactiveA.size))))) {
          let moviesp = 5;
          let subsl = 0.0;
          let libreactJ = 5.0;
          let inewarchdefaultsC: Array<any> = [6, 331];
         homeactiveA = new Map([[`${homeactiveA.size}`, 3]]);
         moviesp >>= Math.min(3, Math.abs(2));
         subsl /= Math.max(2 * inewarchdefaultsC.length, 4);
         libreactJ -= 1;
         inewarchdefaultsC.push(1);
      }
      fullscreenmin7 = sansn < 45;
      fullscreenmin7 = basketballicon2.length <= 97;
      forwardD += `${sellmathbackground9.length}`;
   if (sellmathbackground9.length == 4) {
      basketballicon2 = `${anytimew.length}`;
   }
   let nbatrophyU = 6145478 <= mbjscommone;
   do {
       let loadingN = 1.0;
       let giftbuttonY = String.fromCharCode(100,98,108,113,117,111,116,101,95,105,95,52,55,0);
      for (let k = 0; k < 1; k++) {
          let goallogoc = String.fromCharCode(102,99,116,108,95,109,95,49,50,0);
          let orangeclockH = 4.0;
          let yellowvideoliveW = 5;
          let holderl = 5.0;
         giftbuttonY += `${2 + parseInt(`${orangeclockH}`)}`;
         goallogoc += "3";
         orangeclockH /= Math.max(parseFloat(`${goallogoc.length & yellowvideoliveW}`), 1);
         yellowvideoliveW >>= Math.min(4, Math.abs(2));
         holderl *= parseFloat(`${goallogoc.length}`);
      }
      for (let c = 0; c < 1; c++) {
         giftbuttonY += `${parseInt(`${loadingN}`)}`;
      }
       let largebrightness0 = String.fromCharCode(109,95,53,49,95,112,114,101,99,111,109,112,111,115,101,100,0);
       let topic8 = String.fromCharCode(98,95,57,52,95,99,111,100,101,99,114,97,119,0);
      for (let z = 0; z < 1; z++) {
         topic8 += `${(String.fromCharCode(88,0) == topic8 ? topic8.length : parseInt(`${loadingN}`))}`;
      }
         largebrightness0 += `${topic8.length << (Math.min(giftbuttonY.length, 3))}`;
       let closeS = true;
      mbjscommone |= (2 | (privilegeM ? 4 : 2));
      if (nbatrophyU) {
         break;
      }
   } while ((1 >= (basketballicon2.length + 2) && 3 >= (2 + basketballicon2.length)) && nbatrophyU);
   let taild = basketballicon2.length <= 7556224;
   do {
      basketballicon2 = "3";
      if (taild) {
         break;
      }
   } while ((basketballicon2.endsWith(`${fullscreenmin7}`)) && taild);
    if (result == null) {

   if (1 == (sansn / (Math.max(7, sellmathbackground9.length))) && (sellmathbackground9.length / 1) == 3) {
       let gradlewh = String.fromCharCode(122,95,54,56,95,103,101,111,99,111,100,105,110,103,0);
       let scorepopsoundi = 3;
       let iconbelle: Map<any, any> = new Map([[String.fromCharCode(116,95,53,54,95,105,110,108,105,103,104,116,0),596], [String.fromCharCode(116,95,50,57,95,98,101,108,111,110,103,0),264], [String.fromCharCode(112,114,101,101,120,105,115,116,105,110,103,95,102,95,53,51,0),16]]);
       let delegate_p1 = String.fromCharCode(118,95,56,54,95,118,116,101,115,116,0);
       let classesN = String.fromCharCode(120,95,57,50,95,110,111,105,115,101,115,0);
         delegate_p1 += `${1 + scorepopsoundi}`;
         classesN = `${(String.fromCharCode(112,0) == delegate_p1 ? gradlewh.length : delegate_p1.length)}`;
       let statisticsactiveC = 5.0;
      for (let c = 0; c < 2; c++) {
          let proxyO = String.fromCharCode(100,101,115,116,114,111,121,101,100,95,120,95,52,54,0);
          let iconarrowrightd: Array<any> = [186, 993, 767];
          let unimplementedviewq = String.fromCharCode(97,107,105,100,95,52,95,50,52,0);
          let chinaL: Map<any, any> = new Map([[String.fromCharCode(111,95,57,50,95,109,98,99,115,0),436], [String.fromCharCode(101,110,97,98,108,101,100,95,115,95,56,49,0),263]]);
         gradlewh += `${proxyO.length + delegate_p1.length}`;
         proxyO = `${chinaL.size}`;
         iconarrowrightd = [unimplementedviewq.length];
         unimplementedviewq += `${unimplementedviewq.length ^ 1}`;
         chinaL.set(`${iconarrowrightd.length}`, 1 - iconarrowrightd.length);
      }
          let side8 = String.fromCharCode(101,120,105,115,116,105,110,103,95,55,95,55,50,0);
          let launchK = 5.0;
         classesN += `${1 + iconbelle.size}`;
         side8 = `${side8.length}`;
         launchK -= parseFloat(`${2}`);
       let untickp = 4.0;
      let textinput4 = gradlewh == String.fromCharCode(106,112,117,56,97,106,100,116,104,56,0);
      do {
         gradlewh = `${parseInt(`${untickp}`)}`;
         if (textinput4) {
            break;
         }
      } while ((classesN != String.fromCharCode(90,0)) && textinput4);
      for (let u = 0; u < 2; u++) {
         classesN += "2";
      }
          let yellowvideolive7 = 1;
          let arrowselectdownq = 4;
         untickp /= Math.max(2, parseInt(`${untickp}`));
         yellowvideolive7 -= arrowselectdownq;
          let popup1: Array<any> = [String.fromCharCode(112,95,57,50,95,115,97,118,101,0), String.fromCharCode(108,95,54,57,95,97,112,101,114,0)];
          let indicatorz: Map<any, any> = new Map([[String.fromCharCode(112,99,97,112,95,105,95,51,0),true ], [String.fromCharCode(116,95,52,49,0),true ], [String.fromCharCode(117,95,52,50,95,99,104,97,110,110,101,108,115,0),true ]]);
          let confirmationq: Map<any, any> = new Map([[String.fromCharCode(104,95,54,49,95,115,104,111,114,116,102,108,111,97,116,0),String.fromCharCode(116,105,109,101,115,116,97,109,112,95,53,95,55,56,0)], [String.fromCharCode(113,95,55,55,95,97,115,115,105,103,110,101,100,0),String.fromCharCode(99,95,57,57,95,112,101,97,99,104,0)]]);
         statisticsactiveC *= popup1.length * 1;
         popup1 = [indicatorz.size & confirmationq.size];
         indicatorz.set(`${confirmationq.size}`, confirmationq.size + 1);
         untickp /= Math.max(1, 1);
      while (!classesN.endsWith(`${scorepopsoundi}`)) {
         classesN += `${classesN.length | parseInt(`${statisticsactiveC}`)}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
          let internet6 = String.fromCharCode(99,116,120,116,95,101,95,49,51,0);
          let typingloadingi = String.fromCharCode(115,95,54,54,95,105,109,105,113,0);
          let fileW = String.fromCharCode(104,95,52,57,95,120,110,97,115,109,0);
         gradlewh += `${(String.fromCharCode(71,0) == delegate_p1 ? delegate_p1.length : classesN.length)}`;
         internet6 += `${(String.fromCharCode(55,0) == typingloadingi ? typingloadingi.length : fileW.length)}`;
         fileW = `${internet6.length % 3}`;
      }
      let penaltyD = 7381853 >= iconbelle.size;
      do {
         iconbelle.set(classesN, scorepopsoundi ^ 2);
         if (penaltyD) {
            break;
         }
      } while (penaltyD && (iconbelle.get(`${scorepopsoundi}`) == null));
      while (untickp >= 4.27) {
          let bodanp = 3;
          let moditya = String.fromCharCode(97,108,105,103,110,95,119,95,53,52,0);
         statisticsactiveC *= 2;
         bodanp += 3;
         moditya = `${moditya.length * bodanp}`;
         break;
      }
      sansn %= Math.max(1 * moviesT.length, 2);
   }
      forwardD = "2";
       let componentF: Array<any> = [String.fromCharCode(109,111,116,105,111,110,112,105,120,101,108,115,95,100,95,50,0), String.fromCharCode(112,95,50,48,95,109,105,100,105,0)];
         componentF.push(componentF.length * componentF.length);
       let codeV = String.fromCharCode(109,95,57,55,95,115,116,100,97,116,111,109,105,99,0);
       let editw = true;
      moviesT = [sansn];
      moviesT = [(String.fromCharCode(87,0) == libavformatI ? libavformatI.length : sellmathbackground9.length)];
      anytimew += `${moviesT.length}`;
   for (let f = 0; f < 2; f++) {
       let libsgcoreO: Map<any, any> = new Map([[String.fromCharCode(115,95,49,51,95,114,101,99,118,102,114,111,109,0),String.fromCharCode(111,111,108,116,105,112,95,111,95,51,52,0)], [String.fromCharCode(108,97,114,103,101,114,95,120,95,56,54,0),String.fromCharCode(104,95,56,49,95,97,117,116,104,111,114,105,122,101,100,0)], [String.fromCharCode(115,95,51,48,95,120,106,112,101,103,0),String.fromCharCode(101,110,100,105,110,103,95,117,95,50,53,0)]]);
       let arrowrightM = 3;
       let sortP = 3;
       let taiwanR = 0.0;
      for (let s = 0; s < 2; s++) {
          let libfollyd = String.fromCharCode(111,117,116,108,105,101,114,95,56,95,49,48,48,0);
         arrowrightM += arrowrightM;
         libfollyd = `${libfollyd.length}`;
      }
       let playershirtr: Array<any> = [String.fromCharCode(102,105,120,115,116,114,105,100,101,95,112,95,52,57,0), String.fromCharCode(103,110,114,101,95,119,95,48,0)];
       let libfollyF: Array<any> = [764, 656];
      while ((1 * sortP) == 1) {
         sortP += 3 << (Math.min(2, Math.abs(libsgcoreO.size)));
         break;
      }
      while (3 < (3 * libfollyF.length)) {
         libfollyF.push(parseInt(`${taiwanR}`) << (Math.min(libfollyF.length, 2)));
         break;
      }
       let downloadingW = String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,57,95,51,52,0);
       let searchu = String.fromCharCode(112,101,114,99,101,112,116,95,112,95,55,54,0);
      for (let o = 0; o < 3; o++) {
         playershirtr.push(playershirtr.length >> (Math.min(Math.abs(2), 5)));
      }
         playershirtr = [libfollyF.length | 3];
         searchu += `${arrowrightM}`;
      for (let c = 0; c < 1; c++) {
          let pressureN = String.fromCharCode(109,112,111,110,95,104,95,54,55,0);
          let nodeK: Map<any, any> = new Map([[String.fromCharCode(115,95,51,57,95,112,97,114,116,105,116,105,111,110,0),490], [String.fromCharCode(101,95,53,52,95,109,115,118,115,0),313], [String.fromCharCode(111,95,55,56,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0),740]]);
          let description_tar = String.fromCharCode(108,95,51,49,95,100,111,99,108,105,115,116,115,0);
          let pressureZ = 4.0;
         taiwanR /= Math.max(playershirtr.length, 5);
         pressureN += `${nodeK.size}`;
         nodeK.set(`${pressureZ}`, parseInt(`${pressureZ}`) >> (Math.min(Math.abs(3), 1)));
         description_tar = `${parseInt(`${pressureZ}`) * description_tar.length}`;
      }
      if (5.90 > taiwanR) {
          let zoom7 = 3.0;
          let gestureY = String.fromCharCode(103,95,57,54,95,104,97,110,100,115,104,97,107,101,0);
         searchu = "1";
         zoom7 *= parseInt(`${zoom7}`);
         gestureY = `${gestureY.length}`;
      }
      let dycreatora = 8973251 <= sortP;
      do {
          let libreactnativejniM = String.fromCharCode(108,95,52,51,95,103,101,110,101,114,97,103,101,0);
          let libfollyI = 5.0;
          let disconnectedlogo2 = 2.0;
          let infop = true;
          let foregroundG = String.fromCharCode(97,108,97,110,103,117,97,103,101,95,105,95,53,49,0);
         sortP *= 1;
         libreactnativejniM += `${2 + parseInt(`${libfollyI}`)}`;
         libfollyI /= Math.max((parseFloat(`${parseInt(`${disconnectedlogo2}`) * (infop ? 4 : 3)}`)), 2);
         disconnectedlogo2 += parseInt(`${libfollyI}`);
         infop = (parseInt(`${libfollyI}`) / (Math.max(5, foregroundG.length))) < 95;
         foregroundG += "1";
         if (dycreatora) {
            break;
         }
      } while (dycreatora && (4 == (1 - sortP) || 1 == (sortP - 1)));
         searchu += `${playershirtr.length / (Math.max(searchu.length, 1))}`;
      mbjscommone -= 1 - parseInt(`${taiwanR}`);
   }
      return;
    }

    await dispatch(updateUserAuth(result));

       let wifirouterr: Array<any> = [675, 124, 191];
       let mintegralF = 0.0;
       let dependencyT = 1.0;
          let refresh5 = String.fromCharCode(115,117,98,115,101,116,95,110,95,55,51,0);
          let handlerj = String.fromCharCode(115,104,97,114,112,101,110,105,110,103,95,49,95,49,56,0);
         mintegralF += wifirouterr.length;
         refresh5 = `${handlerj.length}`;
         handlerj += `${refresh5.length ^ 1}`;
       let fileo = String.fromCharCode(115,95,56,53,95,119,122,97,101,115,0);
       let usernamet = String.fromCharCode(118,112,109,116,95,48,95,56,51,0);
       let textlayoutmanagerK = String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,56,95,54,50,0);
      if (textlayoutmanagerK.length == 5) {
          let matchdetailbgN = String.fromCharCode(115,95,57,55,95,111,114,116,104,111,103,111,110,97,108,105,122,101,0);
          let libjsiB = String.fromCharCode(121,95,53,54,95,101,105,103,104,116,0);
          let router6 = 3.0;
          let launcherH = 0.0;
         textlayoutmanagerK = `${usernamet.length / (Math.max(4, parseInt(`${mintegralF}`)))}`;
         matchdetailbgN = "1";
         libjsiB += "2";
         router6 *= parseInt(`${launcherH}`) & libjsiB.length;
         launcherH += matchdetailbgN.length - 2;
      }
      if ((dependencyT - 4.15) > 4.84 || (textlayoutmanagerK.length % 2) > 3) {
          let predictionbuttonE = String.fromCharCode(115,111,117,110,100,95,109,95,56,49,0);
          let temperaturea = String.fromCharCode(115,104,111,114,116,99,117,116,115,95,50,95,51,0);
          let friendsY = String.fromCharCode(100,120,110,100,99,95,48,95,50,54,0);
          let listt = String.fromCharCode(104,97,100,111,119,115,95,120,95,51,56,0);
         dependencyT *= parseInt(`${dependencyT}`);
         predictionbuttonE = `${2 ^ listt.length}`;
         temperaturea = "2";
         friendsY += `${friendsY.length + listt.length}`;
      }
          let mbnativeG = String.fromCharCode(104,101,97,100,114,111,111,109,95,107,95,51,49,0);
          let whistleB = 2.0;
          let bootsplash2: Array<any> = [String.fromCharCode(104,101,97,100,114,111,111,109,95,52,95,49,56,0), String.fromCharCode(109,97,114,103,105,110,95,113,95,49,53,0), String.fromCharCode(99,101,110,116,101,114,101,100,95,119,95,57,53,0)];
         mintegralF *= 2 >> (Math.min(Math.abs(parseInt(`${whistleB}`)), 4));
         mbnativeG = `${mbnativeG.length}`;
         whistleB -= parseFloat(`${1}`);
         bootsplash2 = [3];
         usernamet += `${(String.fromCharCode(82,0) == textlayoutmanagerK ? textlayoutmanagerK.length : parseInt(`${mintegralF}`))}`;
          let trophy1 = 1.0;
         wifirouterr.push(parseInt(`${mintegralF}`) + 1);
         trophy1 *= parseFloat(`${2 - parseInt(`${trophy1}`)}`);
      for (let w = 0; w < 3; w++) {
         mintegralF *= 2;
      }
      libavformatI = `${basketballicon2.length}`;
   while ((sansn << (Math.min(Math.abs(1), 4))) == 4 || privilegeM) {
       let iconlogoutS = String.fromCharCode(108,95,52,52,95,109,109,99,111,115,0);
       let owngoalZ = String.fromCharCode(111,95,51,56,95,97,110,105,109,97,116,105,111,110,0);
       let shielddoneH: Map<any, any> = new Map([[String.fromCharCode(114,95,56,53,95,100,121,110,108,111,99,107,0),297], [String.fromCharCode(98,111,108,100,95,102,95,57,51,0),161], [String.fromCharCode(101,95,53,56,95,115,111,99,107,101,116,118,97,114,0),814]]);
       let mintegralK = String.fromCharCode(110,97,110,111,115,95,111,95,54,54,0);
       let uimanagerd = 2.0;
          let areaR = 1;
          let middlesoundb = 2;
          let memberd = false;
         shielddoneH = new Map([[owngoalZ, mintegralK.length]]);
         areaR |= middlesoundb + areaR;
         middlesoundb |= 3 * middlesoundb;
         memberd = !memberd;
         mintegralK = `${mintegralK.length >> (Math.min(1, owngoalZ.length))}`;
      for (let m = 0; m < 2; m++) {
          let w_hashz = 3.0;
          let trashg = String.fromCharCode(99,111,108,111,114,115,95,53,95,53,50,0);
         uimanagerd += 3;
         w_hashz *= parseFloat(`${3 - parseInt(`${w_hashz}`)}`);
         trashg += `${(String.fromCharCode(84,0) == trashg ? parseInt(`${w_hashz}`) : trashg.length)}`;
      }
      for (let n = 0; n < 2; n++) {
         shielddoneH = new Map([[`${shielddoneH.size}`, 1 ^ iconlogoutS.length]]);
      }
       let episodesT = true;
       let playc = false;
         shielddoneH.set(owngoalZ, shielddoneH.size);
         uimanagerd += (String.fromCharCode(56,0) == iconlogoutS ? iconlogoutS.length : parseInt(`${uimanagerd}`));
         shielddoneH = new Map([[`${uimanagerd}`, parseInt(`${uimanagerd}`) + 3]]);
      let nativeexI = mintegralK.length >= 5258197;
      do {
          let resendC = String.fromCharCode(112,114,101,100,120,95,49,95,57,49,0);
          let constantsB: Map<any, any> = new Map([[String.fromCharCode(103,95,51,51,95,115,111,108,105,115,116,101,110,0),172], [String.fromCharCode(119,95,49,53,95,112,97,114,115,101,117,116,105,108,115,0),560]]);
          let eventJ = 4;
         mintegralK += `${parseInt(`${uimanagerd}`) * eventJ}`;
         resendC = `${constantsB.size * 1}`;
         constantsB.set(`${resendC}`, 3 & resendC.length);
         eventJ >>= Math.min(2, Math.abs(3 + resendC.length));
         if (nativeexI) {
            break;
         }
      } while ((owngoalZ != mintegralK) && nativeexI);
          let yellowvideolive_: Array<any> = [214, 574];
          let backwhite5 = 3;
         mintegralK = `${shielddoneH.size * owngoalZ.length}`;
         yellowvideolive_.push(yellowvideolive_.length & 2);
         backwhite5 /= Math.max(backwhite5 + yellowvideolive_.length, 4);
         shielddoneH.set(iconlogoutS, 3 / (Math.max(9, iconlogoutS.length)));
          let guiden = 4;
          let tcopy_14 = String.fromCharCode(97,95,51,56,95,115,99,114,101,101,110,115,104,97,114,101,0);
          let iconnewchat6 = 4;
         mintegralK = `${2 << (Math.min(5, mintegralK.length))}`;
         guiden *= tcopy_14.length;
         tcopy_14 = `${guiden - 3}`;
         iconnewchat6 += guiden;
      let activey = 6480836 <= iconlogoutS.length;
      do {
          let upgradeV: Array<any> = [755, 926, 351];
         iconlogoutS += `${shielddoneH.size ^ 3}`;
         upgradeV.push(upgradeV.length % 1);
         if (activey) {
            break;
         }
      } while ((mintegralK.length <= iconlogoutS.length) && activey);
         uimanagerd /= Math.max(1, owngoalZ.length);
         iconlogoutS = `${((episodesT ? 3 : 3))}`;
      privilegeM = !sellmathbackground9.includes(`${fullscreenmin7}`);
      break;
   }
   while (libavformatI != String.fromCharCode(89,0)) {
       let floatingM = String.fromCharCode(104,95,57,52,95,115,105,112,104,97,115,104,0);
         floatingM += `${floatingM.length / 3}`;
      while (!floatingM.startsWith(floatingM)) {
         floatingM = `${floatingM.length}`;
         break;
      }
       let viewern = String.fromCharCode(101,110,99,108,111,115,105,110,103,95,108,95,53,0);
      forwardD = `${libtanA.length | 2}`;
      break;
   }
   for (let s = 0; s < 2; s++) {
       let subtextB = String.fromCharCode(114,101,102,112,97,115,115,95,103,95,52,0);
       let giftbuttonL = false;
       let zhubox = 3.0;
       let liveendmodallogoS: Array<any> = [206, 164];
       let quest_: Array<any> = [986, 646];
         giftbuttonL = quest_.length <= liveendmodallogoS.length;
      for (let h = 0; h < 3; h++) {
         subtextB = `${(String.fromCharCode(115,0) == subtextB ? subtextB.length : parseInt(`${zhubox}`))}`;
      }
      for (let s = 0; s < 3; s++) {
         subtextB += `${parseInt(`${zhubox}`) % (Math.max(5, liveendmodallogoS.length))}`;
      }
         giftbuttonL = (subtextB.length * liveendmodallogoS.length) < 75;
          let orangeuparrowx = false;
         giftbuttonL = giftbuttonL || !orangeuparrowx;
         giftbuttonL = 64 < subtextB.length;
          let sinak = String.fromCharCode(108,117,109,97,107,101,121,95,121,95,50,51,0);
          let libavcodecg = false;
         subtextB += `${quest_.length | parseInt(`${zhubox}`)}`;
         sinak = `${sinak.length % 3}`;
         libavcodecg = !sinak.startsWith(`${libavcodecg}`);
          let profilepico = 5;
          let predictionwinP = String.fromCharCode(118,95,57,50,95,110,101,116,119,111,114,107,0);
         subtextB = `${2 & parseInt(`${zhubox}`)}`;
         profilepico ^= (String.fromCharCode(120,0) == predictionwinP ? predictionwinP.length : profilepico);
      mbjscommone <<= Math.min(Math.abs(((giftbuttonL ? 5 : 4) & basketballicon2.length)), 3);
   }
   while (5 == sellmathbackground9.length) {
       let whistleoranged = String.fromCharCode(109,95,49,56,95,98,108,105,110,107,0);
       let configC = 4.0;
      let steps = String.fromCharCode(110,121,109,115,56,117,112,53,0) == whistleoranged;
      do {
         whistleoranged += "2";
         if (steps) {
            break;
         }
      } while (steps && (whistleoranged.length >= parseInt(`${configC}`)));
         whistleoranged += `${whistleoranged.length}`;
         whistleoranged += `${whistleoranged.length | parseInt(`${configC}`)}`;
          let type_52 = 2.0;
          let firebaseu = false;
          let libfbA = String.fromCharCode(97,95,54,49,95,101,105,112,118,0);
         configC -= 1;
         type_52 *= (libfbA == String.fromCharCode(87,0) ? libfbA.length : (firebaseu ? 1 : 2));
         firebaseu = !libfbA.startsWith(`${firebaseu}`);
         configC *= whistleoranged.length ^ parseInt(`${configC}`);
      while ((2.57 * configC) > 3.92 || (whistleoranged.length * parseInt(`${configC}`)) > 4) {
          let mutedn = String.fromCharCode(109,106,112,101,103,97,95,50,95,50,56,0);
          let libyogaG = 4;
          let reward2 = 4;
         configC -= (mutedn == String.fromCharCode(95,0) ? whistleoranged.length : mutedn.length);
         libyogaG *= libyogaG - 2;
         reward2 *= reward2 + libyogaG;
         break;
      }
      sellmathbackground9 = `${moviesT.length >> (Math.min(1, Math.abs(mbjscommone)))}`;
      break;
   }
   if (!libavformatI.endsWith(`${mbjscommone}`)) {
      libavformatI = `${2 & libavformatI.length}`;
   }
    return;
  };

  const handleRefresh = async () => {
       let tickedz = 0;
    let shootyesgoalz: Array<any> = [109, 39, 710];
    let iconwechatO = 5;
    let reactnativejs0 = String.fromCharCode(98,114,101,103,95,120,95,50,52,0);
    let bggradientF: Array<any> = [236, 466];
    let star5 = String.fromCharCode(121,115,108,111,103,95,112,95,50,54,0);
    let friendsv = 4.0;
    let libreanimatedG = 5.0;
      tickedz -= parseInt(`${friendsv}`);
   if (4 <= (5 & shootyesgoalz.length)) {
      shootyesgoalz = [parseInt(`${libreanimatedG}`) - 2];
   }
   while (2.57 == (1.0 / (Math.max(3, friendsv)))) {
       let iconeyeE = String.fromCharCode(113,95,51,55,95,100,101,108,101,103,97,116,111,114,0);
       let signinupg = 3;
       let gdtadvZ = 5.0;
       let libswresamplea: Map<any, any> = new Map([[String.fromCharCode(97,95,51,53,95,118,97,114,105,97,110,99,101,115,0),false ], [String.fromCharCode(106,95,55,55,95,99,111,108,108,101,99,116,105,98,108,101,115,0),true ]]);
      if ((2 ^ libswresamplea.size) == 4 || (gdtadvZ + parseFloat(`${libswresamplea.size}`)) == 3.67) {
          let dicelogop = String.fromCharCode(97,95,54,57,95,100,101,102,114,97,103,109,101,110,116,0);
          let playershirtK = true;
         libswresamplea = new Map([[dicelogop, 2]]);
      }
      while (2 >= (libswresamplea.size / (Math.max(5, 10))) && 5.90 >= (3.54 - gdtadvZ)) {
          let delegate_g1f = String.fromCharCode(110,95,56,50,95,120,112,114,118,0);
          let libimagepipelineJ = String.fromCharCode(106,95,50,50,0);
         gdtadvZ += (parseFloat(`${String.fromCharCode(98,0) == iconeyeE ? signinupg : iconeyeE.length}`));
         delegate_g1f += `${delegate_g1f.length}`;
         libimagepipelineJ = `${delegate_g1f.length}`;
         break;
      }
      while ((1 * signinupg) <= 1) {
         iconeyeE += `${iconeyeE.length}`;
         break;
      }
         gdtadvZ += parseFloat(`${signinupg}`);
      for (let q = 0; q < 1; q++) {
          let flagq: Map<any, any> = new Map([[String.fromCharCode(118,95,49,54,95,97,117,100,105,116,105,110,103,0),String.fromCharCode(108,105,110,107,101,100,95,112,95,49,0)], [String.fromCharCode(105,102,111,114,119,97,114,100,95,97,95,53,50,0),String.fromCharCode(111,95,57,57,95,98,105,116,109,97,112,0)], [String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,99,95,52,0),String.fromCharCode(116,109,112,95,98,95,56,48,0)]]);
          let webviewp = String.fromCharCode(117,95,55,50,95,97,117,116,111,112,108,97,121,105,110,103,0);
         iconeyeE += `${signinupg}`;
         flagq = new Map([[`${flagq.size}`, webviewp.length % (Math.max(1, 8))]]);
         webviewp = `${flagq.size << (Math.min(Math.abs(1), 4))}`;
      }
       let manifestC = String.fromCharCode(121,117,118,97,121,117,118,108,101,95,113,95,56,49,0);
       let volumew = String.fromCharCode(114,95,51,48,95,108,111,119,101,114,0);
       let logouserm: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,116,95,53,54,0),true ], [String.fromCharCode(112,111,115,116,99,111,100,101,95,52,95,54,51,0),true ], [String.fromCharCode(110,95,57,48,95,120,108,97,98,101,108,119,105,100,116,104,0),false ]]);
      let viewerh = volumew.length >= 5881094;
      do {
         volumew = `${manifestC.length}`;
         if (viewerh) {
            break;
         }
      } while (viewerh && (3.65 == gdtadvZ));
         logouserm.set(manifestC, manifestC.length >> (Math.min(Math.abs(1), 3)));
      for (let t = 0; t < 2; t++) {
         manifestC += `${iconeyeE.length}`;
      }
         libswresamplea.set(volumew, volumew.length * parseInt(`${gdtadvZ}`));
         gdtadvZ -= parseFloat(`${manifestC.length}`);
      tickedz *= parseInt(`${gdtadvZ}`);
      break;
   }
       let fill_ = 5;
       let iconpipexpandu = true;
       let typingloadingq = String.fromCharCode(109,98,104,115,95,103,95,55,55,0);
      for (let y = 0; y < 2; y++) {
          let playershirtA = 3.0;
          let profileframeO = 0;
          let buttonH = 3.0;
         iconpipexpandu = !iconpipexpandu;
         playershirtA *= parseInt(`${buttonH}`);
         profileframeO += parseInt(`${playershirtA}`);
      }
         typingloadingq = `${2 ^ fill_}`;
      if (typingloadingq.endsWith(`${fill_}`)) {
         fill_ += ((iconpipexpandu ? 2 : 5));
      }
       let jingdongw: Array<any> = [339, 90, 714];
         typingloadingq = `${(typingloadingq == String.fromCharCode(103,0) ? (iconpipexpandu ? 3 : 2) : typingloadingq.length)}`;
          let stringsv = 5.0;
          let libfby = String.fromCharCode(117,95,53,56,95,115,117,110,114,105,115,101,115,101,116,0);
         typingloadingq = `${3 - jingdongw.length}`;
         stringsv *= parseInt(`${stringsv}`);
         libfby = `${(libfby == String.fromCharCode(78,0) ? libfby.length : parseInt(`${stringsv}`))}`;
      for (let a = 0; a < 2; a++) {
          let register_z3 = String.fromCharCode(98,97,116,99,104,101,115,95,109,95,52,56,0);
          let canvasz = true;
         typingloadingq = `${((canvasz ? 5 : 3) - fill_)}`;
         register_z3 = `${register_z3.length % (Math.max(8, register_z3.length))}`;
         canvasz = register_z3 == register_z3;
      }
      let yellowanimationliveN = 6942095 >= typingloadingq.length;
      do {
         typingloadingq += `${((iconpipexpandu ? 1 : 2) % (Math.max(jingdongw.length, 2)))}`;
         if (yellowanimationliveN) {
            break;
         }
      } while ((4 == (4 + jingdongw.length) && (jingdongw.length + typingloadingq.length) == 4) && yellowanimationliveN);
       let basketballplayerplaceholderj = true;
       let libfollyg = true;
      iconwechatO %= Math.max(1, fill_ | 3);
      reactnativejs0 = `${(star5 == String.fromCharCode(118,0) ? shootyesgoalz.length : star5.length)}`;
      bggradientF = [iconwechatO];
   for (let z = 0; z < 3; z++) {
      reactnativejs0 += `${parseInt(`${friendsv}`)}`;
   }
       let stylesI = 0.0;
       let iconarrowlefth: Map<any, any> = new Map([[String.fromCharCode(113,95,55,54,95,100,101,99,111,114,97,116,101,0),350], [String.fromCharCode(101,95,52,52,95,112,114,101,118,101,110,116,101,100,0),283]]);
       let calendarp = String.fromCharCode(120,106,112,101,103,95,55,95,54,53,0);
         iconarrowlefth.set(`${calendarp}`, iconarrowlefth.size / (Math.max(calendarp.length, 10)));
         stylesI -= parseFloat(`${calendarp.length}`);
       let sendE = String.fromCharCode(117,110,97,118,97,105,108,97,98,101,95,121,95,52,55,0);
       let componentz = String.fromCharCode(121,95,56,50,95,101,110,99,111,100,97,98,108,101,0);
      let unimplementedviewg = calendarp == String.fromCharCode(106,122,105,116,97,48,104,119,114,115,0);
      do {
         calendarp = `${1 >> (Math.min(4, componentz.length))}`;
         if (unimplementedviewg) {
            break;
         }
      } while (unimplementedviewg && (componentz == calendarp));
          let downloadedq: Map<any, any> = new Map([[String.fromCharCode(111,95,57,50,95,100,101,112,101,110,100,0),705], [String.fromCharCode(100,95,56,56,95,101,111,109,101,116,114,121,0),347], [String.fromCharCode(98,95,51,54,95,104,119,109,97,112,0),974]]);
          let clubC = String.fromCharCode(101,115,115,97,103,101,95,117,95,51,52,0);
          let search_: Array<any> = [719, 834];
         stylesI /= Math.max(1, parseFloat(`${downloadedq.size}`));
         downloadedq = new Map([[`${search_.length}`, search_.length]]);
         clubC = `${search_.length % 2}`;
      while (!calendarp.includes(`${sendE.length}`)) {
         sendE += `${parseInt(`${stylesI}`) % (Math.max(2, iconarrowlefth.size))}`;
         break;
      }
         calendarp += `${1 * iconarrowlefth.size}`;
      let arrowY = sendE.length >= 8504044;
      do {
         sendE += "1";
         if (arrowY) {
            break;
         }
      } while (arrowY && (componentz == String.fromCharCode(98,0)));
          let langkeyl: Map<any, any> = new Map([[String.fromCharCode(99,95,49,95,109,97,112,102,105,108,101,0),964], [String.fromCharCode(99,95,51,50,95,100,101,115,112,105,108,108,0),660], [String.fromCharCode(99,111,110,118,101,114,116,95,49,95,56,53,0),210]]);
          let libcrashsdk8: Array<any> = [157, 73];
          let basek = String.fromCharCode(99,111,118,97,114,105,97,110,99,101,95,51,95,55,48,0);
         stylesI /= Math.max(parseFloat(`${3}`), 2);
         langkeyl.set(basek, (String.fromCharCode(54,0) == basek ? libcrashsdk8.length : basek.length));
         libcrashsdk8.push((String.fromCharCode(81,0) == basek ? libcrashsdk8.length : basek.length));
      bggradientF = [2];
       let basketballtrophyF = 1.0;
         basketballtrophyF /= Math.max(parseFloat(`${parseInt(`${basketballtrophyF}`)}`), 5);
       let airbnbstarD = String.fromCharCode(97,100,100,105,95,106,95,54,51,0);
       let smalld = String.fromCharCode(99,95,53,52,95,100,101,112,101,110,100,0);
          let showmoreY = String.fromCharCode(121,95,54,52,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
         smalld = `${parseInt(`${basketballtrophyF}`) ^ airbnbstarD.length}`;
         showmoreY += `${3 - showmoreY.length}`;
      bggradientF.push(bggradientF.length | 3);
      friendsv *= parseFloat(`${parseInt(`${friendsv}`)}`);

    setRefreshing(true);

       let videobufferloading7 = 1.0;
       let desc2 = 0.0;
       let homeiconh: Map<any, any> = new Map([[String.fromCharCode(108,95,52,95,105,110,118,97,108,105,100,97,116,101,0),String.fromCharCode(121,95,50,48,95,115,113,108,105,116,101,112,97,103,101,114,0)], [String.fromCharCode(117,95,52,48,95,97,100,100,115,0),String.fromCharCode(98,97,99,107,119,97,114,100,95,103,95,50,54,0)], [String.fromCharCode(101,110,99,114,121,112,116,95,121,95,49,51,0),String.fromCharCode(103,101,116,116,105,109,101,95,102,95,55,56,0)]]);
      if (homeiconh.size > parseInt(`${desc2}`)) {
         desc2 *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${videobufferloading7}`)), 5))}`);
      }
      if (1.92 < (2.86 - desc2) && 4.33 < (videobufferloading7 - 2.86)) {
         desc2 /= Math.max(parseFloat(`${parseInt(`${videobufferloading7}`) << (Math.min(Math.abs(homeiconh.size), 1))}`), 1);
      }
         videobufferloading7 += parseInt(`${desc2}`) % 3;
      for (let q = 0; q < 1; q++) {
         desc2 += parseFloat(`${1}`);
      }
          let helperX: Map<any, any> = new Map([[String.fromCharCode(104,114,115,115,95,111,95,50,56,0),941], [String.fromCharCode(117,110,109,111,118,101,100,95,100,95,53,53,0),560]]);
         desc2 -= parseFloat(`${helperX.size}`);
          let showmoreJ = String.fromCharCode(112,101,114,109,117,116,101,115,95,122,95,52,0);
         homeiconh.set(showmoreJ, parseInt(`${videobufferloading7}`));
         desc2 += parseFloat(`${homeiconh.size}`);
      for (let t = 0; t < 3; t++) {
          let matchactiveH = 3.0;
          let plusa = 1;
          let halfh = String.fromCharCode(122,95,56,54,95,99,102,115,116,114,101,97,109,0);
         videobufferloading7 *= homeiconh.size & parseInt(`${videobufferloading7}`);
         matchactiveH *= parseFloat(`${parseInt(`${matchactiveH}`) ^ 1}`);
         plusa ^= halfh.length / 3;
         halfh += `${parseInt(`${matchactiveH}`) | 1}`;
      }
      if (homeiconh.get(`${videobufferloading7}`) != null) {
         videobufferloading7 *= parseInt(`${desc2}`) + homeiconh.size;
      }
      iconwechatO <<= Math.min(Math.abs(3), 4);
   if ((reactnativejs0.length & 4) < 5 && (parseInt(`${libreanimatedG}`) / 4) < 1) {
      libreanimatedG /= Math.max(4, tickedz);
   }
   let profileinactive0 = iconwechatO <= 8589947;
   do {
      iconwechatO += iconwechatO * star5.length;
      if (profileinactive0) {
         break;
      }
   } while (profileinactive0 && ((reactnativejs0.length >> (Math.min(2, Math.abs(iconwechatO)))) <= 5 && 3 <= (5 >> (Math.min(1, Math.abs(iconwechatO))))));
      bggradientF = [star5.length];
      libreanimatedG -= parseInt(`${libreanimatedG}`);
   if (libreanimatedG >= 4.40) {
      libreanimatedG /= Math.max(2, tickedz / 2);
   }
      bggradientF = [1];
   if (3 == (iconwechatO * bggradientF.length) || 2 == (3 * iconwechatO)) {
      bggradientF.push(shootyesgoalz.length);
   }
       let reddownarrowl: Map<any, any> = new Map([[String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,108,95,51,53,0),456], [String.fromCharCode(102,95,52,55,95,109,97,110,105,112,117,108,97,116,111,114,0),568], [String.fromCharCode(100,95,53,53,95,101,120,116,0),371]]);
      let mbnativec = 6374499 >= reddownarrowl.size;
      do {
         reddownarrowl = new Map([[`${reddownarrowl.size}`, reddownarrowl.size]]);
         if (mbnativec) {
            break;
         }
      } while ((Array.from(reddownarrowl.keys()).includes(`${reddownarrowl.size}`)) && mbnativec);
         reddownarrowl = new Map([[`${reddownarrowl.size}`, 3]]);
         reddownarrowl = new Map([[`${reddownarrowl.size}`, reddownarrowl.size >> (Math.min(Math.abs(2), 1))]]);
      friendsv *= parseFloat(`${reddownarrowl.size}`);
      bggradientF.push((String.fromCharCode(120,0) == star5 ? star5.length : parseInt(`${libreanimatedG}`)));
    await refreshUserState();

   while ((bggradientF.length % (Math.max(star5.length, 9))) == 5 || 3 == (bggradientF.length % 5)) {
       let profileactived = 4.0;
       let chartv: Map<any, any> = new Map([[String.fromCharCode(101,118,115,105,103,110,97,108,95,117,95,51,56,0),31], [String.fromCharCode(111,95,49,54,95,116,114,117,110,99,97,116,105,111,110,0),306]]);
         chartv.set(`${profileactived}`, 1);
      for (let z = 0; z < 2; z++) {
          let loadingk: Map<any, any> = new Map([[String.fromCharCode(122,95,49,52,95,103,100,112,114,0),String.fromCharCode(105,95,49,56,95,112,114,97,112,97,114,101,0)], [String.fromCharCode(122,95,50,51,95,104,101,108,100,0),String.fromCharCode(115,95,57,49,95,114,101,118,105,111,117,115,0)], [String.fromCharCode(113,95,56,49,95,114,101,99,117,114,115,101,0),String.fromCharCode(100,95,54,95,100,105,116,97,110,99,101,0)]]);
          let bootsplash2: Array<any> = [583, 859, 643];
          let typingT = true;
         profileactived += (3 * (typingT ? 4 : 3));
         loadingk.set(`${bootsplash2.length}`, loadingk.size);
         bootsplash2.push(bootsplash2.length - loadingk.size);
         typingT = bootsplash2.length <= loadingk.size;
      }
         chartv = new Map([[`${chartv.size}`, parseInt(`${profileactived}`) % (Math.max(chartv.size, 3))]]);
         profileactived += chartv.size + 3;
          let submitH: Array<any> = [String.fromCharCode(110,95,57,53,95,108,101,97,107,0), String.fromCharCode(111,95,50,54,95,109,97,120,114,101,97,100,101,114,115,0)];
          let shrinkt = String.fromCharCode(116,97,112,112,101,100,95,99,95,51,52,0);
          let hiadO = String.fromCharCode(121,95,55,56,95,110,116,115,115,0);
         chartv = new Map([[`${chartv.size}`, chartv.size % (Math.max(submitH.length, 3))]]);
         submitH.push(2);
         shrinkt = `${(String.fromCharCode(113,0) == hiadO ? hiadO.length : shrinkt.length)}`;
      let dice6 = profileactived >= 9361693.0;
      do {
         profileactived /= Math.max(2, 3);
         if (dice6) {
            break;
         }
      } while ((chartv.size <= parseInt(`${profileactived}`)) && dice6);
      bggradientF = [parseInt(`${friendsv}`) << (Math.min(Math.abs(3), 4))];
      break;
   }
   while (bggradientF.length >= 4) {
       let referrerw: Array<any> = [524, 879];
       let iconwatchnowM = String.fromCharCode(105,115,111,95,49,95,50,51,0);
      if (1 == (5 << (Math.min(5, iconwatchnowM.length))) || (referrerw.length << (Math.min(Math.abs(5), 1))) == 4) {
          let yellowanimationlivev = 0.0;
          let material4 = true;
          let fastj = String.fromCharCode(112,114,101,104,97,115,104,95,106,95,54,51,0);
         iconwatchnowM += `${iconwatchnowM.length}`;
         yellowanimationlivev -= (parseFloat(`${fastj.length + (material4 ? 4 : 1)}`));
         material4 = fastj.includes(`${yellowanimationlivev}`);
      }
      for (let z = 0; z < 2; z++) {
         iconwatchnowM = "3";
      }
          let backwhitew = 4;
          let revieww: Map<any, any> = new Map([[String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,95,116,95,55,55,0),String.fromCharCode(114,95,52,52,95,107,101,121,98,111,97,114,100,0)], [String.fromCharCode(105,95,50,51,95,114,101,115,121,110,99,0),String.fromCharCode(113,95,50,54,95,109,97,120,113,0)], [String.fromCharCode(112,114,111,100,117,99,101,95,56,95,54,56,0),String.fromCharCode(115,95,50,49,95,101,109,111,106,105,115,0)]]);
         iconwatchnowM = `${referrerw.length}`;
         backwhitew -= backwhitew << (Math.min(Math.abs(revieww.size), 3));
         revieww = new Map([[`${revieww.size}`, revieww.size]]);
          let iconsubssuccesse = 3.0;
          let panglez = String.fromCharCode(106,95,50,49,95,102,111,114,103,111,116,116,101,110,0);
          let agreement4 = false;
         iconwatchnowM += `${referrerw.length & 3}`;
         iconsubssuccesse -= parseFloat(`${parseInt(`${iconsubssuccesse}`)}`);
         panglez = `${panglez.length >> (Math.min(4, Math.abs(parseInt(`${iconsubssuccesse}`))))}`;
         agreement4 = 62.99 <= iconsubssuccesse || !agreement4;
      if ((referrerw.length + 5) >= 2 || 3 >= (5 + iconwatchnowM.length)) {
          let libyogah: Array<any> = [124, 518, 388];
          let rewindd = String.fromCharCode(121,95,50,50,95,115,117,109,120,0);
         referrerw.push(libyogah.length);
         libyogah.push(rewindd.length);
         rewindd += `${rewindd.length}`;
      }
       let short_iyk = String.fromCharCode(114,101,97,108,108,121,95,108,95,52,49,0);
       let n_hashY = String.fromCharCode(99,95,54,49,95,115,116,114,108,99,112,121,0);
      bggradientF.push((reactnativejs0 == String.fromCharCode(83,0) ? reactnativejs0.length : tickedz));
      break;
   }
   if ((friendsv * libreanimatedG) < 5.3 || (5.3 - libreanimatedG) < 5.53) {
      libreanimatedG -= iconwechatO;
   }
      friendsv += parseFloat(`${parseInt(`${libreanimatedG}`)}`);
      reactnativejs0 = `${reactnativejs0.length}`;
   for (let i = 0; i < 3; i++) {
      reactnativejs0 = "1";
   }
   while ((shootyesgoalz.length << (Math.min(Math.abs(1), 1))) == 5) {
      star5 += `${1 >> (Math.min(3, shootyesgoalz.length))}`;
      break;
   }
   if (reactnativejs0.endsWith(`${bggradientF.length}`)) {
       let liveendmodallogoZ = 4.0;
         liveendmodallogoZ -= parseFloat(`${parseInt(`${liveendmodallogoZ}`) - 2}`);
         liveendmodallogoZ /= Math.max(parseFloat(`${parseInt(`${liveendmodallogoZ}`)}`), 1);
         liveendmodallogoZ *= parseFloat(`${3}`);
      bggradientF.push(tickedz ^ parseInt(`${liveendmodallogoZ}`));
   }
   for (let u = 0; u < 2; u++) {
       let iconpointscore6 = String.fromCharCode(108,95,54,48,95,104,97,114,109,111,110,105,99,0);
       let currentU: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,116,105,111,110,115,95,119,95,56,52,0),145], [String.fromCharCode(111,95,52,49,95,109,97,107,101,115,114,112,109,0),997], [String.fromCharCode(113,95,49,95,117,116,99,0),203]]);
         currentU = new Map([[`${currentU.size}`, iconpointscore6.length ^ 1]]);
          let latnT = 3.0;
          let rocketS = 0;
         iconpointscore6 = `${rocketS}`;
         latnT -= parseFloat(`${1}`);
         rocketS ^= parseInt(`${latnT}`) >> (Math.min(3, Math.abs(3)));
         iconpointscore6 += `${currentU.size}`;
      while (iconpointscore6.length >= currentU.size) {
          let materialk = String.fromCharCode(110,95,52,49,95,109,101,109,111,114,121,98,97,114,114,105,101,114,0);
         iconpointscore6 += `${3 ^ materialk.length}`;
         break;
      }
         currentU = new Map([[`${currentU.size}`, currentU.size - iconpointscore6.length]]);
       let screenn: Array<any> = [100, 939, 228];
      iconwechatO -= iconwechatO + parseInt(`${friendsv}`);
   }
      shootyesgoalz = [bggradientF.length];
    setRefreshing(false);
  };

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      
      dispatch(hideBottomSheetAction());
    });
    return unsubscribe;
  }, [navigator]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        
      };
    }, [])
  );

  
  
  
  
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const highlightText = (text: string, keyword: string) => {
    
    const escapedKeyword = escapeRegExp(keyword);
    const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <Text
          key={index}
          style={{ ...textVariants.body, color: colors.yellow, fontSize: 15 }}
        >
          {part}
        </Text>
      ) : (
        <Text
          key={index}
          style={{ ...textVariants.body, color: "#FFF0CA", fontSize: 15 }}
        >
          {part}
        </Text>
      )
    );
  };

  useEffect(() => {
    let date = new Date(Number(userState.user?.userMemberExpired ?? '0') * 1000); 
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.user?.userMemberExpired]);

  const onReviewPress = () => {
       let rocketF = String.fromCharCode(107,95,57,56,95,101,109,117,108,97,116,101,100,0);
    let statisticsA = String.fromCharCode(98,95,55,48,95,114,101,115,105,122,101,0);
    let filledt = 5.0;
    let utilsD = true;
    let stringR = 4.0;
    let gesture6 = String.fromCharCode(98,95,57,52,95,108,97,121,101,114,115,0);
    let brightnessy: Array<any> = [578, 438, 747];
    let vipsporth = 2;
    let libhermesF: Array<any> = [426, 899];
       let launchr = 3.0;
       let iconrefresha = 2.0;
          let iconsettingI = 3.0;
         iconrefresha -= 1;
         iconsettingI += parseInt(`${iconsettingI}`) + parseInt(`${iconsettingI}`);
         iconrefresha -= parseInt(`${launchr}`);
      if (5.76 >= (launchr / 3)) {
         iconrefresha -= parseInt(`${launchr}`) | parseInt(`${iconrefresha}`);
      }
      while ((iconrefresha + 2.77) >= 2.36) {
         iconrefresha /= Math.max(parseInt(`${launchr}`), 2);
         break;
      }
      let orientationy = 7268230.0 >= iconrefresha;
      do {
         iconrefresha += 3 & parseInt(`${launchr}`);
         if (orientationy) {
            break;
         }
      } while (orientationy && ((5 / (Math.max(2, launchr))) > 3.99));
      for (let r = 0; r < 2; r++) {
         iconrefresha -= parseInt(`${iconrefresha}`) - parseInt(`${launchr}`);
      }
      statisticsA = `${parseInt(`${launchr}`) * 3}`;
   while (2 == (parseInt(`${filledt}`) / (Math.max(3, gesture6.length)))) {
      filledt /= Math.max(parseFloat(`${vipsporth | 1}`), 5);
      break;
   }
   if ((rocketF.length * parseInt(`${stringR}`)) > 3 && (rocketF.length * parseInt(`${stringR}`)) > 3) {
       let arrowright_ = String.fromCharCode(103,101,116,102,114,97,109,101,95,105,95,50,55,0);
       let iconbackwhiten = String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,120,95,54,57,0);
       let libavformatt: Array<any> = [302, 411, 169];
      while (iconbackwhiten.length < 4) {
          let stringsL = String.fromCharCode(106,95,51,51,95,97,115,111,108,117,116,101,0);
          let changeS = 3.0;
          let preview3: Map<any, any> = new Map([[String.fromCharCode(104,119,99,111,110,116,101,120,116,95,103,95,52,53,0),499], [String.fromCharCode(117,95,52,49,95,115,116,114,117,99,116,115,0),850], [String.fromCharCode(115,95,57,48,95,98,114,101,103,0),445]]);
          let teamdetailsbg0 = String.fromCharCode(106,95,51,57,95,100,116,115,104,100,0);
         iconbackwhiten = `${1 / (Math.max(1, iconbackwhiten.length))}`;
         stringsL = `${parseInt(`${changeS}`)}`;
         changeS *= parseFloat(`${teamdetailsbg0.length | 3}`);
         preview3 = new Map([[`${changeS}`, parseInt(`${changeS}`)]]);
         teamdetailsbg0 = `${teamdetailsbg0.length ^ stringsL.length}`;
         break;
      }
      if (arrowright_.length > 1) {
         arrowright_ += "1";
      }
         iconbackwhiten = `${iconbackwhiten.length}`;
      for (let x = 0; x < 2; x++) {
         libavformatt.push(iconbackwhiten.length | 2);
      }
          let statisticsinactive3 = String.fromCharCode(98,95,56,48,95,114,101,99,105,112,105,101,110,116,115,0);
          let dycreatori = String.fromCharCode(103,95,56,53,95,122,105,103,122,97,103,0);
          let matchesS = 4;
         arrowright_ += `${libavformatt.length}`;
         statisticsinactive3 = `${dycreatori.length}`;
         dycreatori += `${dycreatori.length}`;
         matchesS %= Math.max(dycreatori.length / (Math.max(1, 3)), 3);
       let inouttargetyellowa = String.fromCharCode(112,114,111,112,101,114,121,95,122,95,55,57,0);
       let championO = String.fromCharCode(100,95,54,48,95,115,104,101,101,116,0);
      let controlX = 7907414 >= inouttargetyellowa.length;
      do {
          let iconwatchnow9 = 1.0;
          let grayz: Array<any> = [219, 112];
          let configure1: Map<any, any> = new Map([[String.fromCharCode(112,95,53,95,111,117,98,108,101,0),false ], [String.fromCharCode(115,117,109,115,113,95,104,95,49,54,0),false ], [String.fromCharCode(98,114,105,100,103,101,95,122,95,51,55,0),false ]]);
          let analyticB: Array<any> = [443, 382];
          let moduleQ = true;
         inouttargetyellowa = `${grayz.length}`;
         iconwatchnow9 /= Math.max(parseFloat(`${parseInt(`${iconwatchnow9}`) << (Math.min(1, Math.abs(3)))}`), 3);
         grayz.push(((moduleQ ? 3 : 3) & 2));
         configure1.set(`${iconwatchnow9}`, 2 * parseInt(`${iconwatchnow9}`));
         analyticB = [((moduleQ ? 5 : 3) & configure1.size)];
         if (controlX) {
            break;
         }
      } while (((libavformatt.length / (Math.max(4, 9))) < 1 || (4 / (Math.max(8, libavformatt.length))) < 3) && controlX);
      for (let c = 0; c < 2; c++) {
         championO += `${arrowright_.length ^ 1}`;
      }
         iconbackwhiten += "3";
      stringR += parseFloat(`${arrowright_.length << (Math.min(5, brightnessy.length))}`);
   }
       let libcxxcomponents8 = 1.0;
       let customR = String.fromCharCode(106,95,55,48,95,115,105,103,0);
      for (let o = 0; o < 3; o++) {
          let liveshareU: Map<any, any> = new Map([[String.fromCharCode(100,109,117,108,95,53,95,53,54,0),String.fromCharCode(97,95,53,49,95,111,112,101,114,97,110,100,0)], [String.fromCharCode(122,95,51,52,95,115,111,109,101,116,104,105,110,103,0),String.fromCharCode(110,95,54,53,95,112,105,118,111,116,0)], [String.fromCharCode(114,95,49,57,95,111,114,105,103,110,97,108,0),String.fromCharCode(99,117,114,116,97,105,110,95,109,95,54,57,0)]]);
          let runtimeschedulerT = String.fromCharCode(101,118,114,99,100,97,116,97,95,48,95,50,53,0);
          let whited = 0.0;
         customR += `${runtimeschedulerT.length + 2}`;
         liveshareU = new Map([[`${liveshareU.size}`, liveshareU.size / 1]]);
         runtimeschedulerT = "2";
         whited -= parseFloat(`${liveshareU.size & parseInt(`${whited}`)}`);
      }
      for (let j = 0; j < 2; j++) {
         libcxxcomponents8 *= (parseFloat(`${customR == String.fromCharCode(106,0) ? parseInt(`${libcxxcomponents8}`) : customR.length}`));
      }
      vipsporth |= 2;

    InAppReview.RequestInAppReview()
      .then((hasFlowFinishedSuccessfully) => {
        if (hasFlowFinishedSuccessfully) {

        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onReview = (mark: number) => {
    
    
  }

  return (
    <>
      <View style={{ paddingTop: insets.top }}>
        {/* <ScreenContainer> */}
        {/* <SafeAreaView> */}
        <ScrollView
          style={{ paddingHorizontal: 15 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
        >
          <View style={{ ...styles.topNav }}>
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}
            >
              我的
            </Text>
            {/* <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                      {
                          themeReducer.theme
                              ? <LightMode color={icons.iconColor} height={26} width={26} />
                              : <DarkMode color={icons.iconColor}  height={26} width={26} />

                      }
                  </TouchableOpacity> */}
          </View>
          { }
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              if (!wawaLibglog.isLogin(userState.user)) {
                dispatch(showLoginAction());
                
                
                
              } else {
                navigation.navigate("个人中心");
              }
            }}
          >
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 10,
                flexDirection: "row",
              }}
            >
              {!wawaLibglog.isLogin(userState.user) ? (
                <ProfileIcon
                  style={{ color: colors.button, width: 18, height: 18 }}
                />
              ) : (
                <FastImage
                  style={{
                    height: 60,
                    width: 60,
                    marginVertical: 2,
                  }}
                  resizeMode={"contain"}
                  source={require("@static/images/iconviewerConfirmation.png")}
                />
              )}
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  gap: 5,
                  justifyContent: "center",
                  paddingLeft: 12,
                }}
              >
                {!wawaLibglog.isLogin(userState.user) && (
                  <>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>
                      游客您好！
                    </Text>
                    <Text style={{ color: "#ffffff", fontSize: 14 }}>
                      登录可享更多服务
                    </Text>
                  </>
                )}
                {wawaLibglog.isLogin(userState.user) && (
                  <>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingRight: 30,
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: 20,
                        }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {userState.user?.userName}
                      </Text>
                      {wawaLibglog.isVip(userState.user) && (
                        <Image
                          style={styles.iconStyle}
                          source={require("@static/images/profile/iconrefreshMatchesGraphics.png")}
                        />
                      )}
                    </View>

                    {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                    {/* {userState.userMemberExpired >=
                      userState.userCurrentTimestamp && (
                        <Text style={{ color: colors.yellow, fontSize: 14 }}>
                          VIP会员有效日期至{displayedDate}
                        </Text>
                      )} */}
                  </>
                )}
              </View>

              <View
                style={{
                  justifyContent: "center",
                }}
              >
                {!wawaLibglog.isLogin(userState.user) && (
                  <MoreArrow
                    width={icons.sizes.l}
                    height={icons.sizes.l}
                    color={colors.muted}
                  />
                )}

                {wawaLibglog.isLogin(userState.user) && (
                  <EditIcn width={29} height={29} color={colors.muted} />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
            {Platform.OS === "ios" ||
              (SHOW_ZF_CONST && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      ...styles.btn,
                      backgroundColor: "#2d2e30",
                      flex: 1,
                    }}
                    onPress={() => {
                      navigation.navigate("付费VIP");
                      
                      
                      
                      
                      
                      
                      
                    }}
                  >
                    <View style={styles.left}>
                      <View style={styles.icon}>
                        <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                      </View>
                      <View style={{ gap: 5 }}>
                        <Text
                          style={{
                            ...textVariants.body,
                          }}
                        >
                          {highlightText(
                            wawaBasketballiconPenaltyshootnogoal.instance.showBecomeVip
                              ? "成为VIP"
                              : "付费VIP",
                            ""
                          )}
                        </Text>

                        {wawaBasketballiconPenaltyshootnogoal.instance.tabConfig != null &&
                          wawaBasketballiconPenaltyshootnogoal.instance.len == 5 ? (
                          <Text
                            style={{
                              ...textVariants.small,
                              color: colors.button,
                            }}
                          >
                            去广告 看体育直播
                          </Text>
                        ) : (
                          <Text
                            style={{
                              ...textVariants.small,
                              color: colors.button,
                            }}
                          >
                            去广告
                          </Text>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.btn,
                      backgroundColor: "#2d2e30",
                      flex: 1,
                    }}
                    onPress={() => {
                      navigation.navigate("邀请");
                    }}
                  >
                    <View style={styles.left}>
                      <View style={styles.icon}>
                        <AddIcon width={icons.sizes.l} height={icons.sizes.l} />
                      </View>
                      <View style={{ gap: 5 }}>
                        <Text
                          style={{
                            ...textVariants.body,
                          }}
                        >
                          {highlightText("邀请好友", "")}
                        </Text>
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          VIP奖励 享更多权益
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}

            {Platform.OS === "android" && !SHOW_ZF_CONST && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )}

            <ShowMoreButton
              text="我的收藏"
              leftIcon={<CollectionIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的收藏")}
            />
            {/* <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{color: colors.button}} />}
              onPress={() => setIsDialogOpen(true)}
            /> */}
            {/* <ShowMoreButton
              text="播放历史"
              leftIcon={<HistoryIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            /> */}
            <ShowMoreButton
              text="我要上传"
              leftIcon={<UploadIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("uploadVideo")}
            />
            <ShowMoreButton
              text="我要反馈"
              leftIcon={<FeedbackIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("反馈")}
            />
            {isInAppReviewAvailable && <ShowMoreButton
              text="评价我们"
              leftIcon={<ReviewIcon style={{ color: colors.button }} />}
              // onPress={() => setShowReview(true)}
              onPress={onReviewPress}
            />}
            <ShowMoreButton
              text="设置"
              leftIcon={<SettingsIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("设置")}
            />
            <ShowMoreButton
              text="关于我们"
              leftIcon={<InfoIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("关于我们")}
            />
            {/* <TouchableOpacity
              style={{
                ...styles.btn,
                backgroundColor: '#2b271e',
              }}
              onPress={() => setIsDialogOpen(true)}>
              <View style={styles.left}>
                <View style={{...styles.icon, paddingTop: 2}}>
                  <UpgradeIcon />
                </View>

                <Text
                  style={{
                    ...textVariants.body,
                    color: colors.primary,
                  }}>
                  一键升级至影视TV Pro
                </Text>
              </View>

              <RightArrow
                width={icons.sizes.l}
                height={icons.sizes.l}
                color={colors.muted}
              />
            </TouchableOpacity> */}
            {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
          </View>

          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title="功能尚未开放"
            subtitle1=""
            subtitle2=""
            subtitle3=""
          />

          {/* <ReviewModal
            isVisible={isShowReview}
            onBackdropPress={() => setShowReview(false)}
            onCancelPress={() => setShowReview(false)}
            onReview={onReview}
          /> */}
        </ScrollView>
        {/* </SafeAreaView> */}
        {/* </ScreenContainer> */}
      </View>
    </>
  );
}

export default memo(Profile);

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
  highlightColor: {
    color: "#FAC33D", 
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginLeft: 5,
  },
});
