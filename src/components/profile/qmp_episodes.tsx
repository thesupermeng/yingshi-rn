import { Button } from "@ant-design/react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import {
  changeScreenAction,
  hideBottomSheetAction,
  hideLoginAction,
  navigateToProfileScreen,
} from "@redux/actions/a_switch";
import SpinnerOverlay from "../modal/l_member_component";
import PhoneIcon from '@static/images/xvodPromotionPrivate_xa.svg';
import MailIcon from '@static/images/shootGift.svg';
import GmailIcon from '@static/images/redirectType_8.svg';
import DropdownIcon from '@static/images/dialogOverlayTwitter.svg';
import { CountryPhoneList } from "./khe_news";
import FastImage from '../common/gwi_with';
import { GBShort } from "@type/wpk_long";
import { ReadAgreementPrivacyPolicy } from "./l_megaphone";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { showToast } from "../../Sports/utility/lqu_gemfile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import umb_center_carousel from "../../../Umeng/umb_center_carousel";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/rk_filed_watch";
import { THFirebase } from "@api";
import { KWConstants } from "@models/kl_sheet";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import LRZTermsScreen from "../../../AppsFlyer/i_dialog";
import TickedIcon from '@static/images/thailandStationSell.svg';
import { IS_OTHER_SKIN } from "@utility/n_subs_interstitial";


export type SXvod = {
  resetValue: () => void,
}

type XFillButton = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<SXvod, XFillButton>(({
  onGooleLoginSuccess,
}: XFillButton, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(true);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<GBShort>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<HDTGesturesList>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => THFirebase.getCountries(),
  });

  useImperativeHandle(ref, () => ({
    resetValue: () => {
      resetForm();
    },
  }));

  useEffect(() => {
    if (countryPhoneOptions && countryPhoneOptions?.length > 0) {
      setCountryPhoneSelected(countryPhoneOptions[0]);
    }
  }, [countryPhoneOptions]);

  const resetForm = () => {
       let awayV = 1.0;
    let hooksA: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,109,105,99,115,95,115,95,57,55,0),267], [String.fromCharCode(120,95,50,54,95,114,101,97,100,98,105,116,115,0),775], [String.fromCharCode(115,101,116,98,105,116,95,49,95,55,57,0),289]]);
    let halfd = false;
    let favicony = true;
    let dialog7: Array<any> = [109, 783];
    let layoutP = 4.0;
    let c_player2 = String.fromCharCode(104,112,101,108,95,52,95,52,53,0);
    let sellL: Array<any> = [String.fromCharCode(97,110,116,105,95,118,95,49,53,0), String.fromCharCode(103,95,55,52,95,98,105,110,104,101,120,0), String.fromCharCode(109,95,56,0)];
    let vignetteY = String.fromCharCode(122,95,50,54,95,116,97,103,115,0);
    let arrowk: Array<any> = [408, 63];
    let predictionM = 2.0;
    let const_523 = String.fromCharCode(114,101,118,105,115,105,111,110,95,48,95,50,0);
   if (!favicony) {
      halfd = String.fromCharCode(57,0) == c_player2;
   }
       let networkA = String.fromCharCode(98,95,54,53,95,115,116,97,114,116,0);
       let pageK = String.fromCharCode(104,95,53,53,95,99,102,109,116,0);
       let confirmationl = String.fromCharCode(102,114,97,109,101,108,101,115,115,95,121,95,56,51,0);
      if (confirmationl.length > 3) {
         pageK += `${confirmationl.length / (Math.max(1, 8))}`;
      }
         confirmationl += `${confirmationl.length}`;
       let collectionv: Array<any> = [529, 551];
         pageK += `${networkA.length - pageK.length}`;
         collectionv = [2];
      halfd = (11 <= (vignetteY.length % (Math.max(7, (halfd ? vignetteY.length : 11)))));
   if (favicony) {
      arrowk = [arrowk.length >> (Math.min(Math.abs(1), 4))];
   }
   for (let w = 0; w < 1; w++) {
      hooksA.set(`${layoutP}`, 2);
   }
      layoutP -= (parseFloat(`${(favicony ? 1 : 1) | 1}`));
      awayV -= parseFloat(`${3}`);

    setloginType('email');

      arrowk = [2 + sellL.length];
   let humidityv = 8604931 >= vignetteY.length;
   do {
       let helpers = 0;
       let xvodG = String.fromCharCode(111,102,102,115,101,116,95,54,95,53,53,0);
       let clubL = 0;
       let analyticK = 5.0;
       let fillJ: Array<any> = [217, 937, 642];
         clubL /= Math.max(clubL | 1, 5);
          let annerh = 2.0;
          let changeV = 0.0;
          let minimizeC = String.fromCharCode(111,95,52,95,112,107,101,121,0);
         helpers &= (String.fromCharCode(110,0) == xvodG ? helpers : xvodG.length);
         annerh /= Math.max(1 ^ parseInt(`${annerh}`), 4);
         changeV -= parseFloat(`${parseInt(`${changeV}`) & 3}`);
         minimizeC += `${2 ^ minimizeC.length}`;
         xvodG += `${helpers}`;
      while (fillJ.includes(helpers)) {
         helpers ^= helpers;
         break;
      }
      while (clubL < helpers) {
         helpers += 3;
         break;
      }
       let const__lv = 3;
         analyticK /= Math.max(xvodG.length + parseInt(`${analyticK}`), 5);
       let bootsplashQ = true;
      let assistU = fillJ.length <= 9018345;
      do {
         fillJ = [(3 ^ (bootsplashQ ? 2 : 1))];
         if (assistU) {
            break;
         }
      } while ((1 <= (5 + helpers) && (fillJ.length + helpers) <= 5) && assistU);
         const__lv <<= Math.min(Math.abs(3 ^ xvodG.length), 3);
      if ((const__lv * analyticK) < 5.4) {
         const__lv ^= 3 * const__lv;
      }
      let nalyticsK = const__lv <= 7078179;
      do {
          let usernamej = false;
          let storev = 3;
          let constantsR = String.fromCharCode(108,95,48,0);
         const__lv ^= helpers / (Math.max(1, constantsR.length));
         usernamej = 41 == storev;
         storev |= storev;
         constantsR = `${storev >> (Math.min(2, Math.abs(2)))}`;
         if (nalyticsK) {
            break;
         }
      } while (nalyticsK && (const__lv <= 1));
       let megaphonem = String.fromCharCode(98,95,54,51,95,104,97,115,104,116,97,98,108,101,122,0);
       let scheduleW = String.fromCharCode(115,108,105,112,95,108,95,53,48,0);
          let liner: Map<any, any> = new Map([[String.fromCharCode(97,95,52,55,95,108,101,103,101,110,100,0),String.fromCharCode(117,116,116,111,110,95,103,95,49,48,0)], [String.fromCharCode(102,105,110,100,110,101,97,114,109,118,95,48,95,55,57,0),String.fromCharCode(110,95,50,95,102,111,112,101,110,0)], [String.fromCharCode(98,95,53,49,95,118,112,120,101,110,99,0),String.fromCharCode(113,115,116,101,112,95,106,95,51,53,0)]]);
          let optionsF: Array<any> = [734, 609];
         megaphonem += `${parseInt(`${analyticK}`) << (Math.min(fillJ.length, 2))}`;
         liner = new Map([[`${liner.size}`, optionsF.length]]);
         optionsF.push(liner.size);
      while (5 == scheduleW.length && megaphonem == String.fromCharCode(53,0)) {
         megaphonem += `${(String.fromCharCode(49,0) == xvodG ? xvodG.length : clubL)}`;
         break;
      }
      vignetteY += "1";
      if (humidityv) {
         break;
      }
   } while (humidityv && ((arrowk.length * 5) == 3 || 2 == (5 * vignetteY.length)));
   for (let d = 0; d < 2; d++) {
      halfd = arrowk.length < 12;
   }
   let mutedj = sellL.length >= 8437828;
   do {
       let customO = 3.0;
       let stepe = String.fromCharCode(102,95,51,51,95,99,111,100,101,99,114,97,119,0);
       let filterb = 1.0;
      while (filterb == 2.22) {
          let annerj: Array<any> = [17, 964, 469];
         stepe += `${annerj.length + 2}`;
         break;
      }
         filterb *= 3;
      for (let n = 0; n < 2; n++) {
         stepe += `${parseInt(`${customO}`) * 2}`;
      }
         customO += parseInt(`${filterb}`);
      for (let u = 0; u < 1; u++) {
          let listl = 0.0;
          let change1 = 1.0;
         stepe += `${parseInt(`${listl}`) & parseInt(`${change1}`)}`;
      }
      while ((customO + filterb) < 3.34 && 1.53 < (customO + 3.34)) {
         filterb *= stepe.length;
         break;
      }
      for (let f = 0; f < 3; f++) {
         customO *= 2;
      }
      while (1.53 >= filterb) {
          let fastforward4 = String.fromCharCode(102,111,114,101,118,101,114,95,103,95,57,54,0);
          let q_player2 = String.fromCharCode(121,95,53,52,95,100,101,108,101,103,97,116,101,0);
          let greenN = String.fromCharCode(110,99,111,109,105,110,103,95,114,95,53,55,0);
         customO += q_player2.length;
         fastforward4 = `${2 ^ fastforward4.length}`;
         q_player2 += `${fastforward4.length >> (Math.min(Math.abs(3), 3))}`;
         greenN += `${fastforward4.length << (Math.min(Math.abs(2), 4))}`;
         break;
      }
      if (stepe.length < 2) {
         stepe = `${parseInt(`${customO}`) ^ stepe.length}`;
      }
      sellL = [((favicony ? 3 : 1) / (Math.max(7, stepe.length)))];
      if (mutedj) {
         break;
      }
   } while (mutedj && (sellL.includes(predictionM)));
   while (!favicony) {
       let calendarB: Map<any, any> = new Map([[String.fromCharCode(110,95,49,95,109,97,115,107,101,100,109,101,114,103,101,0),String.fromCharCode(112,114,111,118,105,100,101,95,114,95,52,55,0)], [String.fromCharCode(108,95,49,53,95,99,108,111,117,100,102,108,97,114,101,0),String.fromCharCode(105,110,116,111,95,118,95,51,49,0)]]);
       let moduleb = 4.0;
       let alertc = String.fromCharCode(115,101,108,101,99,116,95,105,95,50,52,0);
       let scheduleo = String.fromCharCode(114,101,118,111,107,105,110,103,95,102,95,56,53,0);
       let configureu = String.fromCharCode(114,95,57,56,95,101,109,112,116,121,0);
      for (let l = 0; l < 2; l++) {
         alertc = `${(String.fromCharCode(110,0) == alertc ? configureu.length : alertc.length)}`;
      }
      let downloadj = scheduleo.length >= 6507688;
      do {
         scheduleo += "2";
         if (downloadj) {
            break;
         }
      } while ((configureu == String.fromCharCode(71,0)) && downloadj);
      if ((moduleb - 4.14) == 2.8) {
         moduleb += parseFloat(`${configureu.length * 1}`);
      }
      for (let v = 0; v < 2; v++) {
         alertc = `${(String.fromCharCode(82,0) == configureu ? configureu.length : scheduleo.length)}`;
      }
       let fastforwardZ = String.fromCharCode(110,97,118,105,103,97,116,101,95,122,95,52,0);
       let typesB = String.fromCharCode(118,95,53,48,95,99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0);
       let watchK = 3.0;
          let penaltyy = String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,103,95,50,56,0);
          let internet2 = 5;
         moduleb *= parseFloat(`${2}`);
         penaltyy += "1 | internet2";
         internet2 ^= (String.fromCharCode(89,0) == penaltyy ? internet2 : penaltyy.length);
          let search9: Map<any, any> = new Map([[String.fromCharCode(97,108,115,111,95,50,95,51,56,0),375], [String.fromCharCode(100,105,115,116,105,110,99,116,95,99,95,53,57,0),167]]);
          let cleard = 1.0;
         scheduleo = "1";
         search9.set(`${cleard}`, parseInt(`${cleard}`));
         calendarB.set(`${watchK}`, 1);
         configureu += `${fastforwardZ.length}`;
      while (typesB.endsWith(`${watchK}`)) {
         typesB = `${2 / (Math.max(1, parseInt(`${moduleb}`)))}`;
         break;
      }
      for (let g = 0; g < 3; g++) {
          let middlewareh = 1.0;
          let d_countC = 3.0;
         typesB += "1";
         middlewareh *= parseFloat(`${3}`);
         d_countC /= Math.max(parseFloat(`${parseInt(`${d_countC}`) << (Math.min(5, Math.abs(2)))}`), 4);
      }
         configureu = `${3 + parseInt(`${watchK}`)}`;
         fastforwardZ = "3";
          let networkK = 0.0;
          let play1: Array<any> = [874, 182];
         configureu = `${(fastforwardZ == String.fromCharCode(114,0) ? play1.length : fastforwardZ.length)}`;
         networkK *= parseFloat(`${parseInt(`${networkK}`) % (Math.max(parseInt(`${networkK}`), 1))}`);
         play1 = [parseInt(`${networkK}`)];
      dialog7 = [(String.fromCharCode(119,0) == scheduleo ? scheduleo.length : parseInt(`${predictionM}`))];
      break;
   }
      c_player2 = `${arrowk.length}`;
    setLoginValue('');

   while (arrowk.length > 4) {
      favicony = !favicony;
      break;
   }
      c_player2 += `${sellL.length + parseInt(`${layoutP}`)}`;
      awayV += parseFloat(`${2}`);
   let thumbnailN = 6629230 >= arrowk.length;
   do {
      arrowk.push((String.fromCharCode(79,0) == vignetteY ? vignetteY.length : hooksA.size));
      if (thumbnailN) {
         break;
      }
   } while (thumbnailN && (arrowk.includes(awayV)));
   if (3 <= (const_523.length & arrowk.length) && (const_523.length & 3) <= 3) {
      arrowk.push(2 << (Math.min(1, sellL.length)));
   }
   if (vignetteY.endsWith(`${layoutP}`)) {
      layoutP /= Math.max(parseFloat(`${2 | sellL.length}`), 2);
   }
    setReferralCode('');

       let giftj: Array<any> = [884, 297, 571];
          let bootsplashL = false;
         giftj = [giftj.length];
      if ((giftj.length % (Math.max(giftj.length, 8))) <= 1 && 1 <= (giftj.length % (Math.max(3, giftj.length)))) {
         giftj = [2 | giftj.length];
      }
      for (let q = 0; q < 2; q++) {
          let headerR = String.fromCharCode(117,114,108,99,111,110,116,101,120,116,95,103,95,53,55,0);
          let modityE = false;
          let unreadQ: Array<any> = [879, 587];
          let showJ = 4;
         giftj.push(headerR.length >> (Math.min(Math.abs(2), 3)));
         headerR = `${unreadQ.length >> (Math.min(Math.abs(3), 5))}`;
         modityE = unreadQ.includes(modityE);
         showJ <<= Math.min(3, Math.abs(3 % (Math.max(6, unreadQ.length))));
      }
      awayV /= Math.max(4, (parseFloat(`${(halfd ? 3 : 2) / 2}`)));
       let currentr: Array<any> = [153, 598, 609];
       let untickd = String.fromCharCode(105,110,102,101,114,95,56,95,54,49,0);
       let promotionO = String.fromCharCode(97,110,100,0);
      for (let p = 0; p < 1; p++) {
          let mail3 = 1.0;
          let sendo = String.fromCharCode(97,116,111,110,95,118,95,55,0);
         currentr.push(3 - promotionO.length);
         mail3 /= Math.max(3, parseFloat(`${parseInt(`${mail3}`)}`));
         sendo = `${parseInt(`${mail3}`) >> (Math.min(sendo.length, 1))}`;
      }
          let blacklistJ = String.fromCharCode(99,97,109,101,108,95,117,95,53,53,0);
         untickd += `${currentr.length}`;
         blacklistJ = `${blacklistJ.length / (Math.max(1, 10))}`;
         currentr.push(3);
      let indexI = currentr.length <= 9049593;
      do {
          let playlistx = 0.0;
          let type_iwT = true;
          let expiredO: Array<any> = [String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,100,95,57,57,0), String.fromCharCode(108,95,56,55,95,112,114,110,103,0), String.fromCharCode(101,110,106,105,110,95,99,95,50,52,0)];
         currentr.push(untickd.length + 1);
         playlistx += (parseInt(`${playlistx}`) >> (Math.min(3, Math.abs((type_iwT ? 1 : 5)))));
         type_iwT = (((!type_iwT ? expiredO.length : 24) % (Math.max(expiredO.length, 4))) < 24);
         if (indexI) {
            break;
         }
      } while ((untickd.endsWith(`${currentr.length}`)) && indexI);
          let filedQ = true;
          let popupW = 2;
          let minivodP = String.fromCharCode(107,95,53,0);
         untickd = `${minivodP.length - 3}`;
         filedQ = !filedQ;
         popupW &= popupW;
         minivodP += `${popupW << (Math.min(1, Math.abs(3)))}`;
      let short__49 = 7452395 <= currentr.length;
      do {
          let eighteeno: Array<any> = [988, 496];
          let successy = String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,102,95,50,53,0);
          let halfk = String.fromCharCode(112,111,115,108,105,115,116,115,95,108,95,55,55,0);
          let penalty2 = String.fromCharCode(108,97,110,99,122,111,115,95,111,95,56,55,0);
         currentr = [promotionO.length % (Math.max(3, 4))];
         eighteeno.push((halfk == String.fromCharCode(100,0) ? eighteeno.length : halfk.length));
         successy += `${penalty2.length * 3}`;
         penalty2 = `${penalty2.length - halfk.length}`;
         if (short__49) {
            break;
         }
      } while (short__49 && ((currentr.length - 3) >= 2));
         untickd += `${untickd.length + currentr.length}`;
       let feedbackJ: Map<any, any> = new Map([[String.fromCharCode(110,100,111,116,115,95,107,95,49,48,48,0),String.fromCharCode(118,95,52,55,95,98,105,116,0)], [String.fromCharCode(119,95,49,48,95,120,99,104,103,0),String.fromCharCode(104,95,50,51,95,100,105,115,112,97,116,99,104,0)]]);
       let anythinkf: Map<any, any> = new Map([[String.fromCharCode(117,110,102,114,101,101,122,101,95,49,95,55,51,0),false ], [String.fromCharCode(116,101,110,115,105,111,110,95,111,95,53,56,0),true ], [String.fromCharCode(103,95,51,48,95,99,109,121,107,0),false ]]);
      let cornerK = 5288001 >= currentr.length;
      do {
         currentr.push(anythinkf.size & promotionO.length);
         if (cornerK) {
            break;
         }
      } while (((2 << (Math.min(4, untickd.length))) >= 5 || (currentr.length << (Math.min(untickd.length, 4))) >= 2) && cornerK);
      hooksA.set(untickd, parseInt(`${layoutP}`));
   let emoji0 = 8177099.0 >= awayV;
   do {
       let switch_41r = 0;
       let handler6 = String.fromCharCode(99,117,101,115,95,52,95,57,54,0);
       let analyticss = 3.0;
      if (switch_41r >= handler6.length) {
          let t_titleq = String.fromCharCode(112,111,114,116,97,105,116,95,120,95,49,56,0);
          let lessl: Array<any> = [602, 245, 141];
         switch_41r += 3;
         t_titleq = `${t_titleq.length - 2}`;
         lessl = [t_titleq.length];
      }
         handler6 += `${1 & parseInt(`${analyticss}`)}`;
          let modelu = 4;
         analyticss += parseFloat(`${modelu + handler6.length}`);
       let search4 = 5.0;
      while ((search4 + analyticss) > 1.31) {
          let u_countw = String.fromCharCode(110,95,56,48,95,105,110,116,101,114,102,97,99,101,115,0);
          let lightw: Map<any, any> = new Map([[String.fromCharCode(110,95,54,49,95,116,105,116,108,116,101,0),String.fromCharCode(99,105,114,99,108,101,100,95,104,95,51,51,0)], [String.fromCharCode(117,95,51,95,110,111,110,108,105,110,101,97,114,0),String.fromCharCode(112,95,52,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0)], [String.fromCharCode(98,95,54,50,95,115,99,104,117,110,99,107,0),String.fromCharCode(100,101,99,114,121,112,116,95,112,95,53,53,0)]]);
          let back8 = 2.0;
         search4 += u_countw.length;
         u_countw = "1";
         lightw = new Map([[`${lightw.size}`, 3]]);
         back8 += 1 >> (Math.min(4, Math.abs(lightw.size)));
         break;
      }
         switch_41r &= parseInt(`${analyticss}`);
      let castingJ = 6057601.0 <= search4;
      do {
          let updates3: Map<any, any> = new Map([[String.fromCharCode(101,95,55,56,95,112,101,114,109,117,116,101,115,0),517], [String.fromCharCode(103,95,56,53,95,115,116,114,101,116,99,104,97,98,108,101,0),362], [String.fromCharCode(100,95,53,52,95,115,111,102,97,0),237]]);
          let tooltipsW = String.fromCharCode(118,112,105,116,120,102,109,95,48,95,49,55,0);
          let showB = String.fromCharCode(110,111,100,101,95,56,95,49,57,0);
         search4 += tooltipsW.length;
         updates3 = new Map([[`${updates3.size}`, 2]]);
         tooltipsW = `${updates3.size}`;
         showB = "2";
         if (castingJ) {
            break;
         }
      } while (castingJ && (2 == (switch_41r & 3) && 2.94 == (search4 + 4.81)));
         handler6 += `${parseInt(`${analyticss}`)}`;
      while (handler6.length <= 1) {
          let turnU = 5.0;
         handler6 = `${parseInt(`${search4}`) - parseInt(`${turnU}`)}`;
         break;
      }
      awayV /= Math.max(5, parseFloat(`${vignetteY.length}`));
      if (emoji0) {
         break;
      }
   } while (emoji0 && (1 >= (3 + vignetteY.length)));
      predictionM /= Math.max(5, ((favicony ? 2 : 2)));
   let x_position8 = 6538506.0 <= predictionM;
   do {
      predictionM /= Math.max(2, parseInt(`${predictionM}`) ^ 1);
      if (x_position8) {
         break;
      }
   } while (x_position8 && (3.49 == (predictionM - layoutP) && 3.49 == (layoutP - predictionM)));
   let event8 = sellL.length <= 6642791;
   do {
       let e_positiong = 4.0;
       let customF = String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,104,95,56,56,0);
       let source5 = true;
       let views8 = String.fromCharCode(112,95,50,49,95,100,105,109,101,110,115,0);
       let scoreq = 3.0;
          let whatsappI = String.fromCharCode(116,117,112,108,101,115,95,48,95,54,57,0);
          let constantst = String.fromCharCode(104,111,108,100,105,110,103,95,114,95,56,51,0);
         views8 += `${customF.length}`;
         whatsappI = "3";
         constantst += `${constantst.length}`;
      let trash0 = 7248306 >= views8.length;
      do {
          let inactiver = String.fromCharCode(112,95,55,49,95,102,105,97,116,0);
          let windm = String.fromCharCode(115,95,53,51,95,108,101,110,118,108,99,0);
          let frame_rG = 5.0;
         views8 += `${(String.fromCharCode(67,0) == views8 ? views8.length : parseInt(`${e_positiong}`))}`;
         inactiver += "1";
         windm += `${windm.length | 2}`;
         frame_rG += parseFloat(`${2}`);
         if (trash0) {
            break;
         }
      } while ((views8.length >= 4 || !source5) && trash0);
         views8 += `${parseInt(`${scoreq}`)}`;
         customF += `${customF.length - parseInt(`${e_positiong}`)}`;
      let emojiT = e_positiong <= 9524837.0;
      do {
         e_positiong += 1;
         if (emojiT) {
            break;
         }
      } while ((!customF.endsWith(`${e_positiong}`)) && emojiT);
      let rightd = views8.length <= 8448718;
      do {
         views8 = `${parseInt(`${e_positiong}`) ^ customF.length}`;
         if (rightd) {
            break;
         }
      } while (rightd && (views8.length == 2));
      if (views8 != customF) {
         customF += "1";
      }
      while ((scoreq - 4.59) > 1.35 && 4.59 > scoreq) {
         scoreq -= 2;
         break;
      }
      let rewindn = customF == String.fromCharCode(48,110,108,113,97,0);
      do {
          let megaphoneY = String.fromCharCode(116,95,53,53,95,117,110,99,108,101,115,0);
          let productB: Array<any> = [980, 170, 824];
          let nexti = String.fromCharCode(115,116,111,114,97,103,101,115,95,50,95,50,53,0);
         customF = `${(views8 == String.fromCharCode(71,0) ? nexti.length : views8.length)}`;
         megaphoneY = `${megaphoneY.length + productB.length}`;
         productB = [productB.length + megaphoneY.length];
         nexti += `${(megaphoneY == String.fromCharCode(97,0) ? megaphoneY.length : productB.length)}`;
         if (rewindn) {
            break;
         }
      } while (rewindn && (4.27 < (e_positiong / 1.47)));
      while ((1 / (Math.max(3, views8.length))) > 3) {
         views8 = `${views8.length ^ parseInt(`${scoreq}`)}`;
         break;
      }
      while (!views8.includes(`${customF.length}`)) {
         customF += `${parseInt(`${scoreq}`)}`;
         break;
      }
      while ((scoreq + 3.40) == 1.32 || source5) {
         source5 = views8.length <= 4;
         break;
      }
      while (source5) {
         scoreq += views8.length;
         break;
      }
         source5 = (views8.length - scoreq) <= 66.91;
         source5 = !views8.includes(`${e_positiong}`);
      sellL.push(2 * const_523.length);
      if (event8) {
         break;
      }
   } while (((sellL.length / (Math.max(c_player2.length, 8))) >= 4 || 4 >= (c_player2.length / (Math.max(4, 1)))) && event8);
    setLoginValueErrMsg(null);

       let configR = String.fromCharCode(112,114,101,118,105,111,117,115,95,105,95,51,49,0);
       let termsu = String.fromCharCode(102,111,108,100,95,101,95,50,54,0);
       let guideH = String.fromCharCode(111,98,115,101,114,118,101,114,95,97,95,50,55,0);
          let sliderW = String.fromCharCode(105,95,50,54,95,112,111,112,117,108,97,116,101,0);
          let overc = String.fromCharCode(102,114,101,113,98,97,114,107,95,104,95,57,49,0);
          let description_xR = String.fromCharCode(100,95,56,52,95,114,101,112,111,114,116,101,114,0);
         termsu += `${2 & guideH.length}`;
         sliderW += `${(sliderW == String.fromCharCode(48,0) ? overc.length : sliderW.length)}`;
         overc += `${overc.length + description_xR.length}`;
         description_xR += `${1 * description_xR.length}`;
         termsu += `${3 & guideH.length}`;
         termsu += "1";
         guideH = `${configR.length & termsu.length}`;
       let plashv = String.fromCharCode(99,111,109,98,101,100,95,110,95,55,56,0);
      for (let f = 0; f < 1; f++) {
         guideH = `${termsu.length / 1}`;
      }
      if (termsu.length == plashv.length) {
         termsu += `${termsu.length ^ 3}`;
      }
      let room7 = guideH == String.fromCharCode(103,95,55,0);
      do {
         guideH += `${configR.length}`;
         if (room7) {
            break;
         }
      } while (room7 && (!configR.startsWith(`${guideH.length}`)));
      for (let c = 0; c < 2; c++) {
         termsu += "3";
      }
      hooksA.set(`${predictionM}`, 1 + parseInt(`${predictionM}`));
   for (let g = 0; g < 3; g++) {
      arrowk = [dialog7.length & 2];
   }
       let downloaderv = String.fromCharCode(119,111,114,100,95,98,95,55,52,0);
       let teamQ = 2;
      while ((teamQ >> (Math.min(Math.abs(2), 4))) < 3) {
         teamQ >>= Math.min(2, Math.abs(1 / (Math.max(8, teamQ))));
         break;
      }
      for (let j = 0; j < 3; j++) {
          let faviconA = false;
          let viewert = String.fromCharCode(97,114,111,117,110,100,95,109,95,49,53,0);
          let taiwang = 4.0;
          let tickj = 2.0;
         downloaderv = `${downloaderv.length}`;
         faviconA = tickj < 45.0 || 45.0 < taiwang;
         viewert = `${(1 << (Math.min(5, Math.abs((faviconA ? 4 : 4)))))}`;
         taiwang -= parseFloat(`${parseInt(`${taiwang}`) | viewert.length}`);
         tickj -= parseFloat(`${parseInt(`${tickj}`) / 1}`);
      }
         downloaderv += `${teamQ}`;
         downloaderv = `${teamQ << (Math.min(downloaderv.length, 1))}`;
      while ((teamQ + downloaderv.length) == 2 && (downloaderv.length + teamQ) == 2) {
         teamQ |= 2;
         break;
      }
         teamQ >>= Math.min(Math.abs(teamQ), 5);
      vignetteY += `${parseInt(`${awayV}`) / 3}`;
      predictionM += arrowk.length + 1;
   if (2 <= (sellL.length >> (Math.min(vignetteY.length, 5)))) {
      sellL.push(((favicony ? 3 : 5)));
   }
      awayV /= Math.max(parseFloat(`${arrowk.length ^ 2}`), 4);
    setReferralCodeErrMsg(null);

       let promotiong = 0;
      while ((promotiong >> (Math.min(Math.abs(promotiong), 2))) <= 1) {
          let leftL = String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,95,106,95,56,51,0);
          let link9 = 2.0;
          let rewindh = false;
         promotiong |= promotiong << (Math.min(Math.abs(2), 2));
         leftL = `${3 | leftL.length}`;
         link9 /= Math.max(1, parseFloat(`${2 ^ parseInt(`${link9}`)}`));
         rewindh = leftL.length < parseInt(`${link9}`);
         break;
      }
          let private_wxA = 4.0;
          let regeng8 = true;
          let uploado = 2;
         promotiong %= Math.max(2 << (Math.min(Math.abs(promotiong), 4)), 4);
         private_wxA -= (parseFloat(`${uploado / (Math.max(2, (regeng8 ? 3 : 5)))}`));
         regeng8 = !regeng8;
         uploado += parseInt(`${private_wxA}`) - 2;
         promotiong *= promotiong;
      arrowk = [promotiong];
   while (const_523.length == 1) {
      favicony = parseFloat(`${arrowk.length}`) <= layoutP;
      break;
   }
      layoutP *= parseFloat(`${2}`);
   let bell8 = layoutP >= 7392622.0;
   do {
      layoutP /= Math.max(parseFloat(`${vignetteY.length << (Math.min(Math.abs(2), 4))}`), 3);
      if (bell8) {
         break;
      }
   } while (bell8 && (4 >= (hooksA.size ^ 5) && 2 >= (5 >> (Math.min(2, Math.abs(hooksA.size))))));
   for (let n = 0; n < 2; n++) {
      const_523 = `${hooksA.size | 2}`;
   }
   if (!vignetteY.includes(`${const_523.length}`)) {
      vignetteY = `${const_523.length & c_player2.length}`;
   }
    setReadTermNCondition(false);

      const_523 += `${parseInt(`${layoutP}`)}`;
   let reminderk = 7194737.0 <= predictionM;
   do {
      predictionM += arrowk.length;
      if (reminderk) {
         break;
      }
   } while ((3.40 == predictionM) && reminderk);
   for (let q = 0; q < 1; q++) {
      dialog7 = [1 ^ hooksA.size];
   }
   while (1.10 <= (awayV / (Math.max(3, layoutP)))) {
       let componentM = 2.0;
       let upload2 = String.fromCharCode(122,95,54,55,95,108,115,112,102,0);
      while (upload2.length <= 5) {
         upload2 = `${parseInt(`${componentM}`) | 1}`;
         break;
      }
      let watchf = upload2 == String.fromCharCode(106,117,118,119,50,113,57,99,51,115,0);
      do {
         upload2 += `${parseInt(`${componentM}`)}`;
         if (watchf) {
            break;
         }
      } while (watchf && (upload2.startsWith(`${componentM}`)));
          let shoot8: Array<any> = [976, 202, 80];
          let slider0 = true;
          let gestureQ = true;
         upload2 = `${1 | parseInt(`${componentM}`)}`;
         shoot8.push(((slider0 ? 3 : 4) % 3));
         slider0 = (gestureQ ? !slider0 : gestureQ);
      if (3.57 < (3.34 - componentM) || (3 & upload2.length) < 2) {
         upload2 += `${upload2.length}`;
      }
      let clubx = componentM <= 9656528.0;
      do {
          let lang9 = String.fromCharCode(122,95,54,52,95,112,97,99,107,101,116,112,101,101,107,0);
          let anytimen = String.fromCharCode(115,110,97,112,104,111,116,95,118,95,50,54,0);
          let listt = 3.0;
          let temperatureq = 4.0;
         componentM /= Math.max(5, parseFloat(`${3}`));
         lang9 = `${1 / (Math.max(parseInt(`${listt}`), 5))}`;
         anytimen = `${3 ^ parseInt(`${temperatureq}`)}`;
         listt /= Math.max(parseFloat(`${parseInt(`${listt}`)}`), 1);
         temperatureq += parseFloat(`${lang9.length * parseInt(`${listt}`)}`);
         if (clubx) {
            break;
         }
      } while (((componentM - 1.94) == 2.62 && (1.94 - componentM) == 4.65) && clubx);
      while (2 > (upload2.length & 2)) {
         upload2 = "3";
         break;
      }
      awayV -= parseFloat(`${1}`);
      break;
   }
      awayV -= parseFloat(`${2}`);
   if ((vignetteY.length * dialog7.length) >= 1) {
      dialog7 = [parseInt(`${layoutP}`) << (Math.min(2, Math.abs(3)))];
   }

    setShowCountryList(false);
  }

  const onLoginValueChange = (
    value: string,
  ) => {
    setLoginValue(value);
    setLoginValueErrMsg(null);

    if (loginType === 'phone') {
      
      const formattedValue = value.replace(/\D/g, '');

      let formattedPhoneNumber = '';
      for (let i = 0; i < formattedValue.length; i++) {
        formattedPhoneNumber += formattedValue[i];
        if (i === 2 && formattedValue.length > 3) {
          formattedPhoneNumber += ' ';
        } else if (i === 5 && formattedValue.length > 6) {
          formattedPhoneNumber += ' ';
        }
      }

      
      setLoginValue(formattedPhoneNumber);
      setLoginValueErrMsg(null);
    }

    if (value === '') return;

    if (loginType === 'email' && !isEmailValid(value)) {
      setLoginValueErrMsg('邮件格式错误');
    } else if (loginType === 'phone' && !isPhoneValid(value)) {
      setLoginValueErrMsg('手机号码格式错误');
    }
  };

  const onReferralCodeChange = (
    value: string,
  ) => {
    setReferralCode(value);
    setReferralCodeErrMsg(null);
  };

  const onPressCountryDropdown = () => {
       let sheetX = 5.0;
    let settingsd: Array<any> = [String.fromCharCode(103,101,110,101,114,105,99,115,95,119,95,57,0), String.fromCharCode(112,95,56,53,95,115,115,101,116,0)];
    let eactE: Array<any> = [1000, 912, 832];
    let hongkongs = 4.0;
    let controlsJ = String.fromCharCode(114,116,112,115,101,110,100,101,114,95,52,95,52,57,0);
    let interstitialb = 0;
    let ball0 = 5;
    let malaysiao: Array<any> = [979, 618, 207];
    let favoritet: Array<any> = [825, 791];
    let logoutw = 1.0;
      hongkongs -= parseFloat(`${ball0 ^ interstitialb}`);
      eactE = [settingsd.length & 3];
      interstitialb >>= Math.min(4, Math.abs(3));
      malaysiao.push(1);
   if (hongkongs <= parseFloat(`${controlsJ.length}`)) {
      controlsJ += `${controlsJ.length >> (Math.min(5, favoritet.length))}`;
   }
      eactE = [malaysiao.length];
      settingsd = [malaysiao.length];
   let indexF = 9354600 >= controlsJ.length;
   do {
      controlsJ += `${eactE.length + 3}`;
      if (indexF) {
         break;
      }
   } while (((2 - favoritet.length) >= 2) && indexF);
       let teame = 3;
       let navigationr = false;
          let suggestionv = String.fromCharCode(105,95,57,48,95,116,99,112,0);
          let transferT = 3.0;
         teame <<= Math.min(4, Math.abs((parseInt(`${transferT}`) & (navigationr ? 2 : 1))));
         suggestionv += `${suggestionv.length * suggestionv.length}`;
         transferT *= parseFloat(`${2}`);
      for (let e = 0; e < 1; e++) {
         teame <<= Math.min(Math.abs((teame + (navigationr ? 2 : 1))), 1);
      }
          let dragl = true;
          let sliderk = 4.0;
         teame *= 1;
         dragl = 10.96 <= (sliderk - sliderk);
       let kickD: Map<any, any> = new Map([[String.fromCharCode(121,95,51,48,95,99,111,109,112,97,114,97,98,108,101,0),true ], [String.fromCharCode(110,95,50,49,95,97,98,111,114,116,97,98,108,101,0),false ], [String.fromCharCode(115,107,105,112,112,97,98,108,101,95,101,95,56,0),false ]]);
       let clockH: Map<any, any> = new Map([[String.fromCharCode(115,107,101,119,95,103,95,49,52,0),460], [String.fromCharCode(98,114,110,103,95,98,95,49,55,0),498]]);
       let crossE = String.fromCharCode(112,115,110,114,95,99,95,54,0);
       let filterW = String.fromCharCode(99,111,101,102,115,95,49,95,49,54,0);
          let gestures_ = String.fromCharCode(121,95,52,50,95,105,112,97,100,100,0);
          let controls: Array<any> = [46, 225, 865];
          let whiten = String.fromCharCode(97,100,106,97,99,101,110,116,95,114,95,52,53,0);
         kickD = new Map([[`${controls.length}`, controls.length % 3]]);
         gestures_ = `${gestures_.length & 3}`;
         whiten = `${2 % (Math.max(3, whiten.length))}`;
      malaysiao = [1];
      sheetX += favoritet.length;
      eactE = [3];
       let auto_l6S = String.fromCharCode(115,99,114,117,98,98,101,114,95,51,95,49,0);
       let giftl = false;
       let notificationl = false;
      if (!giftl) {
          let commentg = 0.0;
         notificationl = auto_l6S == String.fromCharCode(81,0);
         commentg -= parseFloat(`${parseInt(`${commentg}`)}`);
      }
      let info4 = notificationl ? !notificationl : notificationl;
      do {
          let weiboJ: Array<any> = [String.fromCharCode(97,117,116,111,108,111,99,107,95,51,95,49,57,0), String.fromCharCode(104,115,116,114,105,110,103,95,120,95,51,56,0), String.fromCharCode(101,95,56,52,95,110,105,109,97,116,101,100,0)];
          let navigationO = 1;
          let nterstitialV = String.fromCharCode(101,113,117,97,108,105,122,101,114,95,121,95,54,51,0);
          let watchA: Map<any, any> = new Map([[String.fromCharCode(102,95,53,49,95,99,115,114,105,100,0),false ], [String.fromCharCode(119,105,114,101,108,101,115,115,95,101,95,57,55,0),true ], [String.fromCharCode(107,95,51,48,95,103,101,111,99,111,100,101,114,0),true ]]);
          let emojiw = String.fromCharCode(97,100,109,105,110,95,50,95,52,0);
         notificationl = (auto_l6S.length + watchA.size) > 14;
         weiboJ = [nterstitialV.length * weiboJ.length];
         navigationO ^= (String.fromCharCode(71,0) == emojiw ? emojiw.length : navigationO);
         nterstitialV += `${nterstitialV.length / 3}`;
         watchA = new Map([[`${weiboJ.length}`, navigationO]]);
         if (info4) {
            break;
         }
      } while ((giftl || notificationl) && info4);
         notificationl = auto_l6S.length == 18;
      if (notificationl) {
         notificationl = !notificationl;
      }
      let skipa = giftl ? !giftl : giftl;
      do {
         giftl = !notificationl;
         if (skipa) {
            break;
         }
      } while (skipa && (auto_l6S.startsWith(`${giftl}`)));
         notificationl = (notificationl ? giftl : notificationl);
      if (!giftl) {
         giftl = auto_l6S.includes(`${giftl}`);
      }
         auto_l6S = "3";
          let thailandp = 3.0;
         giftl = 82.98 <= thailandp;
      favoritet.push(favoritet.length * 1);
       let header1 = String.fromCharCode(104,95,57,56,95,116,114,97,110,115,112,0);
       let middlewareH = true;
       let nextl: Map<any, any> = new Map([[String.fromCharCode(101,110,116,101,114,95,106,95,53,57,0),941], [String.fromCharCode(103,110,114,101,95,112,95,55,55,0),271], [String.fromCharCode(110,111,114,109,97,108,95,112,95,51,0),169]]);
      while (!middlewareH) {
         middlewareH = (3 < (header1.length + (!middlewareH ? 3 : header1.length)));
         break;
      }
          let chat_: Array<any> = [816, 427];
         middlewareH = 23 < nextl.size && 23 < chat_.length;
      for (let c = 0; c < 3; c++) {
         nextl.set(`${middlewareH}`, (nextl.size ^ (middlewareH ? 1 : 5)));
      }
         middlewareH = (34 == ((middlewareH ? 34 : header1.length) % (Math.max(header1.length, 6))));
      while (!middlewareH) {
         middlewareH = nextl.size <= 51;
         break;
      }
         nextl.set(`${middlewareH}`, 1 - nextl.size);
      if (!middlewareH || header1.length >= 4) {
          let trashj = String.fromCharCode(97,108,114,101,97,100,121,95,55,95,57,51,0);
          let eventC = true;
          let optionsX = String.fromCharCode(99,111,109,101,95,109,95,52,51,0);
          let mutedV = String.fromCharCode(99,95,50,49,95,105,110,115,112,101,99,116,0);
          let plusL: Map<any, any> = new Map([[String.fromCharCode(117,95,51,50,0),String.fromCharCode(103,108,111,98,97,108,105,110,102,111,95,106,95,57,57,0)], [String.fromCharCode(102,95,53,95,97,112,112,115,0),String.fromCharCode(104,95,56,57,95,116,104,114,101,97,100,105,110,103,0)]]);
         header1 = `${nextl.size % 2}`;
         trashj += `${(mutedV == String.fromCharCode(67,0) ? mutedV.length : plusL.size)}`;
         eventC = (trashj.length >> (Math.min(5, optionsX.length))) == 22;
         optionsX += `${plusL.size % (Math.max(mutedV.length, 8))}`;
      }
      if (5 >= (5 << (Math.min(5, Math.abs(nextl.size))))) {
         middlewareH = header1 == String.fromCharCode(102,0);
      }
         nextl.set(header1, header1.length);
      favoritet = [settingsd.length % (Math.max(1, 10))];
       let friendsU = 3;
       let filedv: Map<any, any> = new Map([[String.fromCharCode(100,95,55,48,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0),String.fromCharCode(109,95,57,54,95,119,115,97,117,100,0)], [String.fromCharCode(97,115,115,112,111,114,116,95,110,95,55,52,0),String.fromCharCode(109,101,100,105,97,115,95,57,95,54,48,0)]]);
       let single8: Array<any> = [678, 202, 614];
       let plusW: Array<any> = [String.fromCharCode(111,95,56,95,99,111,101,102,0), String.fromCharCode(120,95,50,54,95,105,112,118,105,100,101,111,0), String.fromCharCode(115,99,116,112,117,116,105,108,95,52,95,51,49,0)];
         filedv.set(`${single8.length}`, 3);
       let complete7: Array<any> = [570, 307];
       let abouts: Array<any> = [950, 56, 946];
       let assistu = String.fromCharCode(103,95,55,49,95,98,105,116,112,97,99,107,101,100,0);
      let langp = 5770174 <= single8.length;
      do {
          let friendsI = 4.0;
          let moviesA = String.fromCharCode(114,95,53,52,95,118,97,108,105,100,97,116,105,110,103,0);
          let fullG: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,98,108,101,95,53,95,49,50,0),true ], [String.fromCharCode(110,95,52,51,0),false ], [String.fromCharCode(109,95,51,49,95,100,111,119,110,108,111,97,100,105,110,103,0),true ]]);
         single8.push(1 << (Math.min(1, Math.abs(parseInt(`${friendsI}`)))));
         friendsI -= parseFloat(`${fullG.size}`);
         moviesA = `${2 ^ moviesA.length}`;
         fullG = new Map([[`${fullG.size}`, moviesA.length]]);
         if (langp) {
            break;
         }
      } while ((!complete7.includes(single8.length)) && langp);
      if (!complete7.includes(plusW.length)) {
          let circlec = true;
          let private_3vs = false;
          let activeJ = false;
          let termsj = 0;
         plusW = [plusW.length];
         circlec = (circlec ? activeJ : circlec);
         private_3vs = activeJ && termsj >= 56;
         termsj &= termsj << (Math.min(3, Math.abs(1)));
      }
      hongkongs += parseFloat(`${3}`);
      friendsU -= friendsU + friendsU;
      logoutw += 1 ^ parseInt(`${sheetX}`);
   let gmailQ = eactE.length <= 9790539;
   do {
      eactE = [3];
      if (gmailQ) {
         break;
      }
   } while (gmailQ && (5 > (eactE.length % (Math.max(2, 3))) || (eactE.length | 2) > 4));
   while (2.27 < hongkongs) {
      sheetX += eactE.length & interstitialb;
      break;
   }
   for (let u = 0; u < 3; u++) {
      malaysiao.push(parseInt(`${hongkongs}`) << (Math.min(Math.abs(1), 5)));
   }
      controlsJ = `${parseInt(`${sheetX}`)}`;
   for (let n = 0; n < 1; n++) {
      logoutw *= parseInt(`${hongkongs}`);
   }
      controlsJ += `${2 ^ malaysiao.length}`;

    setShowCountryList(!isShowCountryList);
  }

  const onSelectCountryPhone = (data: any) => {
    setCountryPhoneSelected(data);
    setShowCountryList(false);
  }

  const onChangeloginType = (type: 'email' | 'phone') => {
    setloginType(type);
    setLoginValue('');
    setLoginValueErrMsg(null);
  }

  const onPressGoogleLogin = async () => {
       let hongkongP = String.fromCharCode(109,106,112,101,103,95,111,95,57,57,0);
    let policyT = String.fromCharCode(102,111,114,98,105,100,100,101,110,95,52,95,50,52,0);
    let paginationi: Map<any, any> = new Map([[String.fromCharCode(111,117,116,111,117,116,95,119,95,50,53,0),163], [String.fromCharCode(99,95,54,54,95,114,101,97,100,120,98,108,111,99,107,0),765]]);
    let thumbnailm = 0;
    let acceptedM = 1.0;
    let confirmationl = String.fromCharCode(109,95,52,55,95,100,105,115,112,111,115,101,100,0);
    let anytime8 = false;
    let ewardedA = String.fromCharCode(122,95,50,52,95,97,109,112,108,105,116,117,100,101,0);
    let expiredl = 4.0;
    let submitG = String.fromCharCode(106,95,49,55,95,98,110,98,105,110,0);
    let collectionk = 1.0;
    let mutedn = String.fromCharCode(105,110,116,99,104,101,99,107,95,98,95,53,51,0);
    let aboutQ = String.fromCharCode(101,110,99,111,100,105,110,103,115,95,52,95,50,49,0);
   for (let h = 0; h < 1; h++) {
      expiredl /= Math.max(2, ((anytime8 ? 2 : 1) >> (Math.min(Math.abs(1), 4))));
   }

    if (isSubmitting) return;

       let assistT = 0;
          let goalz = String.fromCharCode(97,95,49,48,95,102,114,97,109,101,104,97,115,104,0);
         assistT >>= Math.min(Math.abs(3), 2);
         goalz += `${goalz.length / 1}`;
         assistT >>= Math.min(Math.abs(3 * assistT), 1);
       let twitterD = false;
       let pressure0 = true;
      thumbnailm ^= parseInt(`${acceptedM}`) & thumbnailm;

    if (isReadTermNCondition == false) {

   while ((expiredl * confirmationl.length) < 5.51 && (parseInt(`${expiredl}`) * confirmationl.length) < 1) {
       let stationsL: Array<any> = [String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,95,48,95,56,57,0), String.fromCharCode(116,95,53,50,95,97,117,116,111,98,97,110,104,0)];
       let filledk: Array<any> = [923, 440, 876];
       let humidityU = 3.0;
         filledk = [3 * filledk.length];
         stationsL = [stationsL.length];
       let zhuboI = 2.0;
      while (filledk.length == 3) {
         filledk.push(parseInt(`${humidityU}`) + 2);
         break;
      }
         humidityU *= 1 / (Math.max(6, parseInt(`${humidityU}`)));
      for (let r = 0; r < 2; r++) {
         zhuboI += parseFloat(`${3}`);
      }
      for (let u = 0; u < 3; u++) {
         humidityU /= Math.max(parseInt(`${zhuboI}`), 2);
      }
      while (4.39 < (humidityU / 5.8) || (5.8 / (Math.max(3, humidityU))) < 5.63) {
          let vignetteO = String.fromCharCode(117,110,105,116,121,95,116,95,50,49,0);
          let thumbnailN = 5;
          let sortK = 0.0;
          let acceptedB = 1.0;
         humidityU /= Math.max(parseInt(`${acceptedB}`) + stationsL.length, 5);
         vignetteO += `${(vignetteO == String.fromCharCode(121,0) ? thumbnailN : vignetteO.length)}`;
         thumbnailN += 3;
         sortK -= parseFloat(`${parseInt(`${sortK}`) - thumbnailN}`);
         acceptedB -= parseFloat(`${thumbnailN * parseInt(`${sortK}`)}`);
         break;
      }
         filledk.push(parseInt(`${humidityU}`));
      expiredl /= Math.max(4, hongkongP.length ^ 1);
      break;
   }
      showToast('请勾选用户协议和隐私协议');

   for (let h = 0; h < 3; h++) {
      submitG = `${paginationi.size ^ 1}`;
   }
      return;

      ewardedA += `${(String.fromCharCode(112,0) == ewardedA ? (anytime8 ? 3 : 3) : ewardedA.length)}`;
    }

    let userInfo;

   if (4.58 >= acceptedM) {
       let casto = 1;
       let plashx: Array<any> = [923, 891, 696];
       let vignetteT = String.fromCharCode(102,95,49,55,95,118,97,110,99,0);
       let sideU = String.fromCharCode(115,97,116,117,114,97,116,105,111,110,0);
       let anythinkb = 4.0;
      for (let q = 0; q < 2; q++) {
         vignetteT += `${parseInt(`${anythinkb}`) % (Math.max(plashx.length, 9))}`;
      }
       let langkeyD: Array<any> = [156, 733, 915];
       let chart4: Array<any> = [640, 102, 200];
          let activeT = String.fromCharCode(117,115,101,114,95,107,95,50,48,0);
          let club9 = 0.0;
         chart4.push(parseInt(`${anythinkb}`) ^ 3);
         activeT += `${parseInt(`${club9}`)}`;
         club9 /= Math.max(3, 3 % (Math.max(7, parseInt(`${club9}`))));
      if (!chart4.includes(casto)) {
         chart4.push(1);
      }
      while (1 >= (1 + plashx.length)) {
          let bottom1 = 5.0;
          let abouts = String.fromCharCode(117,110,101,109,98,101,100,95,102,95,50,50,0);
          let statsc = 0;
         casto >>= Math.min(Math.abs(3), 2);
         bottom1 += abouts.length;
         abouts = `${1 | abouts.length}`;
         statsc &= abouts.length;
         break;
      }
         sideU = `${3 << (Math.min(1, langkeyD.length))}`;
          let comment1 = 5.0;
          let settingO = false;
         casto ^= ((settingO ? 5 : 4) | parseInt(`${anythinkb}`));
         comment1 /= Math.max(parseFloat(`${parseInt(`${comment1}`)}`), 3);
         settingO = (comment1 / (Math.max(6, comment1))) >= 3.80;
      while (1 < (casto ^ 2)) {
         casto ^= vignetteT.length + 1;
         break;
      }
      while ((1 / (Math.max(7, sideU.length))) > 2) {
         sideU += `${plashx.length}`;
         break;
      }
      let questJ = chart4.length <= 5416520;
      do {
         chart4.push(2 * casto);
         if (questJ) {
            break;
         }
      } while (questJ && ((1 ^ chart4.length) <= 1 && 4 <= (langkeyD.length ^ 1)));
      for (let y = 0; y < 3; y++) {
         chart4.push(2 ^ vignetteT.length);
      }
      if (5 >= sideU.length) {
         sideU = `${casto}`;
      }
      let savey = anythinkb >= 9351252.0;
      do {
         anythinkb /= Math.max(4, sideU.length / (Math.max(2, 8)));
         if (savey) {
            break;
         }
      } while (((3.25 + anythinkb) <= 3.18) && savey);
         casto <<= Math.min(plashx.length, 4);
      for (let p = 0; p < 1; p++) {
          let detailV = 0;
          let clearA = String.fromCharCode(107,95,54,49,95,105,110,102,111,114,109,97,116,105,111,110,0);
         sideU = `${vignetteT.length}`;
         detailV >>= Math.min(3, Math.abs(detailV & 1));
         clearA += `${clearA.length}`;
      }
      submitG = `${thumbnailm * paginationi.size}`;
   }

    try {

   if (!anytime8) {
       let sportsZ = String.fromCharCode(108,95,57,56,95,110,100,111,116,115,0);
      for (let j = 0; j < 3; j++) {
         sportsZ += `${(sportsZ == String.fromCharCode(110,0) ? sportsZ.length : sportsZ.length)}`;
      }
         sportsZ = `${sportsZ.length}`;
         sportsZ = `${(sportsZ == String.fromCharCode(54,0) ? sportsZ.length : sportsZ.length)}`;
      paginationi = new Map([[`${acceptedM}`, ((anytime8 ? 5 : 2) / (Math.max(8, parseInt(`${acceptedM}`))))]]);
   }
      await GoogleSignin.hasPlayServices();

   let annerX = ewardedA.length <= 5602310;
   do {
      ewardedA = "2";
      if (annerX) {
         break;
      }
   } while (((ewardedA.length | 4) > 4 && (thumbnailm | ewardedA.length) > 4) && annerX);

      if (await GoogleSignin.isSignedIn()) {

   for (let e = 0; e < 3; e++) {
      paginationi.set(`${acceptedM}`, hongkongP.length % (Math.max(2, 5)));
   }
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

   while ((paginationi.size ^ 2) >= 3 && 2 >= (paginationi.size ^ hongkongP.length)) {
       let blackV: Array<any> = [String.fromCharCode(99,111,110,115,116,114,97,105,110,95,98,95,50,50,0), String.fromCharCode(111,119,110,95,117,95,52,56,0), String.fromCharCode(103,95,55,54,95,112,97,114,116,105,116,105,111,110,0)];
       let cornerk = 5.0;
       let more2 = String.fromCharCode(111,95,50,57,95,117,110,112,111,105,115,111,110,0);
         blackV = [parseInt(`${cornerk}`)];
      for (let l = 0; l < 3; l++) {
         more2 += `${blackV.length}`;
      }
      for (let g = 0; g < 1; g++) {
          let gesturez = true;
         cornerk *= more2.length;
         gesturez = !gesturez;
      }
      while ((more2.length | 3) <= 3 && (3 & more2.length) <= 2) {
         cornerk /= Math.max(3 % (Math.max(4, parseInt(`${cornerk}`))), 5);
         break;
      }
       let friendsU = String.fromCharCode(99,111,109,112,111,115,101,100,95,122,95,49,48,0);
       let fieldY = String.fromCharCode(100,95,56,54,95,97,99,116,105,118,101,109,97,112,0);
      let telegramX = more2.length >= 5644086;
      do {
         more2 += `${blackV.length % (Math.max(fieldY.length, 9))}`;
         if (telegramX) {
            break;
         }
      } while (telegramX && (1 >= (more2.length >> (Math.min(Math.abs(5), 2))) || (more2.length + cornerk) >= 1.84));
      let dice2 = String.fromCharCode(111,122,48,104,53,100,106,120,0) == more2;
      do {
         more2 += `${1 >> (Math.min(5, fieldY.length))}`;
         if (dice2) {
            break;
         }
      } while ((more2.length < friendsU.length) && dice2);
       let register_hO: Map<any, any> = new Map([[String.fromCharCode(112,95,49,50,95,115,105,103,110,101,100,0),String.fromCharCode(118,95,54,49,95,114,101,115,117,109,101,0)], [String.fromCharCode(101,95,57,48,95,110,97,110,111,115,0),String.fromCharCode(116,95,49,52,95,97,110,110,111,116,97,116,105,111,110,0)], [String.fromCharCode(122,95,56,55,95,114,101,102,105,110,101,109,101,110,116,0),String.fromCharCode(109,118,115,101,116,95,56,95,55,51,0)]]);
         register_hO.set(`${cornerk}`, 2);
      paginationi.set(confirmationl, confirmationl.length);
      break;
   }
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   while (acceptedM < 1.63) {
      thumbnailm += 1;
      break;
   }
        

      acceptedM *= parseInt(`${expiredl}`);
        showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   let eventU = String.fromCharCode(50,121,119,0) == ewardedA;
   do {
      ewardedA += `${thumbnailm + 3}`;
      if (eventU) {
         break;
      }
   } while (eventU && (!anytime8));
        

   if ((submitG.length * expiredl) <= 5.0 || (5.0 * expiredl) <= 5.100) {
      expiredl /= Math.max(3 * parseInt(`${acceptedM}`), 2);
   }
        showToast('谷歌服务获取失败');
      } else {

      confirmationl += "2";
        

   if (parseInt(`${acceptedM}`) >= confirmationl.length) {
       let previewR = String.fromCharCode(117,95,55,56,95,115,115,114,99,115,0);
       let constantsO: Map<any, any> = new Map([[String.fromCharCode(106,95,49,54,95,104,100,110,111,100,101,0),265], [String.fromCharCode(99,111,110,116,111,117,114,115,95,116,95,51,56,0),648]]);
       let hooks4 = String.fromCharCode(97,95,49,52,95,100,108,115,121,109,0);
      for (let q = 0; q < 3; q++) {
          let playg = 2;
          let index9: Array<any> = [290, 8];
          let catalogV = 4.0;
         constantsO = new Map([[`${constantsO.size}`, hooks4.length]]);
         playg /= Math.max(playg | index9.length, 4);
         index9.push(index9.length);
         catalogV -= 2 - index9.length;
      }
         constantsO.set(`${previewR}`, 2);
          let acceptedL = true;
          let spinnern = 1.0;
          let rightI: Map<any, any> = new Map([[String.fromCharCode(100,95,51,95,99,105,110,97,117,100,105,111,0),String.fromCharCode(116,95,50,56,95,97,99,111,110,102,105,103,0)], [String.fromCharCode(122,95,51,48,95,105,110,103,101,116,97,100,100,114,0),String.fromCharCode(116,108,101,110,95,121,95,51,54,0)]]);
         hooks4 += `${parseInt(`${spinnern}`) * 1}`;
         acceptedL = rightI.size == 13 && acceptedL;
         spinnern *= (parseFloat(`${(acceptedL ? 1 : 3) % (Math.max(1, rightI.size))}`));
      for (let l = 0; l < 1; l++) {
          let stringn = 0.0;
          let report8 = String.fromCharCode(104,111,108,100,115,95,114,95,56,50,0);
          let scoreY = 1.0;
         hooks4 = `${constantsO.size}`;
         stringn *= report8.length;
         report8 += "1";
         scoreY -= report8.length;
      }
      for (let o = 0; o < 1; o++) {
          let reducerd = 3.0;
         constantsO.set(hooks4, 1 - hooks4.length);
         reducerd *= parseInt(`${reducerd}`);
      }
      for (let d = 0; d < 1; d++) {
         hooks4 += `${constantsO.size}`;
      }
      while (hooks4.length >= 1 || previewR != String.fromCharCode(118,0)) {
         previewR += `${constantsO.size % (Math.max(2, 8))}`;
         break;
      }
      for (let e = 0; e < 3; e++) {
          let relatedi = 1.0;
         previewR += `${(previewR == String.fromCharCode(50,0) ? previewR.length : constantsO.size)}`;
         relatedi /= Math.max(parseInt(`${relatedi}`), 4);
      }
      while ((constantsO.size | 2) == 5 || (constantsO.size | 2) == 1) {
         previewR = `${hooks4.length % 1}`;
         break;
      }
      acceptedM += parseInt(`${acceptedM}`) >> (Math.min(4, Math.abs(2)));
   }
        showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   for (let w = 0; w < 1; w++) {
      policyT += `${policyT.length ^ parseInt(`${acceptedM}`)}`;
   }
      return;
    }

    if (userInfo === null) {

       let main_hl = 4;
         main_hl += main_hl;
      if (4 == (main_hl | 5) && (5 | main_hl) == 4) {
         main_hl |= main_hl;
      }
       let acceptedk = String.fromCharCode(103,101,116,112,105,120,95,54,95,48,0);
      expiredl -= policyT.length - 1;
      showToast('登入失败，请稍后再试');

      ewardedA = `${thumbnailm}`;
      return;
    }

    try {

   let pauseF = confirmationl == String.fromCharCode(95,111,102,101,95,98,52,95,120,0);
   do {
      confirmationl += `${submitG.length + 2}`;
      if (pauseF) {
         break;
      }
   } while (pauseF && ((4 + confirmationl.length) < 5 || 2.49 < (acceptedM * 2.76)));
      setSubmitting(true);

      submitG = `${((anytime8 ? 1 : 3) % (Math.max(1, hongkongP.length)))}`;
      userInfo = await THFirebase.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });

    } catch (err: any) {
      GoogleSignin.signOut();

      expiredl /= Math.max(1, paginationi.size * 3);
      showToast(err.toString());

   while ((acceptedM + 1.46) <= 4.74) {
       let moonG = String.fromCharCode(118,97,114,105,97,100,105,99,95,49,95,52,56,0);
          let logoutJ = String.fromCharCode(114,95,55,55,0);
          let modelsN = String.fromCharCode(121,95,56,51,95,112,117,115,104,98,97,99,107,0);
         moonG = "3";
         logoutJ += `${logoutJ.length + 2}`;
         modelsN += `${modelsN.length & 3}`;
       let mailB = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,114,95,54,57,0);
          let plusw = String.fromCharCode(102,95,55,55,95,108,111,111,107,97,104,101,97,100,0);
         mailB += `${plusw.length % (Math.max(1, 6))}`;
      ewardedA += `${paginationi.size + 1}`;
      break;
   }
      return;
    } finally {

      paginationi.set(`${acceptedM}`, 1);
      setSubmitting(false);

   let register_s9N = 7388409 <= hongkongP.length;
   do {
      hongkongP = `${confirmationl.length}`;
      if (register_s9N) {
         break;
      }
   } while ((5 >= (hongkongP.length << (Math.min(Math.abs(5), 3))) || (acceptedM * 1.30) >= 5.55) && register_s9N);
    }

    const resultData = userInfo.data;

       let signinupL = String.fromCharCode(114,97,100,98,95,103,95,56,49,0);
       let rewindR = 3.0;
         signinupL += `${parseInt(`${rewindR}`)}`;
         signinupL += `${parseInt(`${rewindR}`) % (Math.max(signinupL.length, 9))}`;
         rewindR -= parseFloat(`${3 + parseInt(`${rewindR}`)}`);
         rewindR += parseFloat(`${1}`);
      if (signinupL.length == 1) {
         rewindR -= parseFloat(`${3}`);
      }
         rewindR /= Math.max((parseFloat(`${String.fromCharCode(66,0) == signinupL ? parseInt(`${rewindR}`) : signinupL.length}`)), 5);
      policyT += `${parseInt(`${expiredl}`)}`;

    const user = KWConstants.fromJson(resultData);

      hongkongP = `${parseInt(`${acceptedM}`) + ewardedA.length}`;

    await dispatch(addUserAuthState(user));

   if (4.96 == acceptedM) {
      submitG += `${2 | hongkongP.length}`;
   }

    if (userInfo.message.includes("注册成功")) {

   if (1 > (confirmationl.length + 2) && (confirmationl.length + thumbnailm) > 2) {
      confirmationl += `${(ewardedA == String.fromCharCode(80,0) ? policyT.length : ewardedA.length)}`;
   }
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   while (2 == (paginationi.size / (Math.max(hongkongP.length, 7))) && 2 == (paginationi.size / (Math.max(hongkongP.length, 5)))) {
       let hongkongu = true;
       let sheet5 = String.fromCharCode(115,99,114,97,112,101,95,49,95,53,52,0);
       let catalog4 = 5.0;
      if (3 == sheet5.length) {
         hongkongu = sheet5 == String.fromCharCode(78,0);
      }
      for (let e = 0; e < 1; e++) {
          let googleT = 3.0;
          let nterstitialL: Array<any> = [342, 813, 218];
          let stationw = 5.0;
         hongkongu = catalog4 <= 68.98;
         googleT /= Math.max(5, parseFloat(`${2 | nterstitialL.length}`));
         nterstitialL.push(nterstitialL.length % (Math.max(2, 1)));
         stationw /= Math.max(4, parseFloat(`${parseInt(`${stationw}`)}`));
      }
       let movies5 = String.fromCharCode(116,105,99,107,101,114,95,121,95,55,52,0);
       let bottomr = String.fromCharCode(108,95,54,95,115,116,114,105,110,103,117,116,105,108,115,0);
       let sinay = String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,109,95,53,52,0);
      for (let l = 0; l < 1; l++) {
         catalog4 /= Math.max((String.fromCharCode(99,0) == sinay ? sinay.length : sheet5.length), 2);
      }
         hongkongu = (sinay.length % (Math.max(sheet5.length, 1))) >= 89;
         catalog4 *= sinay.length + sheet5.length;
      for (let a = 0; a < 2; a++) {
          let mappingq: Array<any> = [188, 786, 836];
          let floateru = 4.0;
          let fasty = String.fromCharCode(112,103,110,111,95,118,95,54,54,0);
          let analyticsz = 0.0;
         sheet5 += `${(sinay == String.fromCharCode(85,0) ? bottomr.length : sinay.length)}`;
         mappingq.push(parseInt(`${floateru}`));
         floateru -= parseInt(`${floateru}`) | fasty.length;
         fasty += `${parseInt(`${analyticsz}`) >> (Math.min(2, Math.abs(1)))}`;
         analyticsz /= Math.max(parseInt(`${floateru}`) % (Math.max(10, fasty.length)), 4);
      }
      while (bottomr != String.fromCharCode(89,0)) {
          let reducerdb = String.fromCharCode(122,95,57,50,95,97,110,105,109,97,116,101,100,0);
          let roomc: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,115,111,117,110,100,95,113,95,57,48,0),String.fromCharCode(101,120,105,115,116,115,95,111,95,53,48,0)], [String.fromCharCode(98,117,98,98,108,101,95,114,95,55,50,0),String.fromCharCode(120,120,99,104,95,57,95,55,51,0)]]);
         sheet5 = `${sinay.length * reducerdb.length}`;
         reducerdb += `${roomc.size}`;
         roomc = new Map([[`${roomc.size}`, roomc.size]]);
         break;
      }
      hongkongP += `${((hongkongu ? 2 : 4) * sheet5.length)}`;
      break;
   }

      if (user.isVip()) {

       let other6 = 3;
       let descG: Array<any> = [938, 190, 835];
       let source_ = 2.0;
       let floaterx = 2.0;
       let bootsplashv: Map<any, any> = new Map([[String.fromCharCode(105,99,119,114,115,105,95,53,95,50,49,0),385], [String.fromCharCode(116,114,117,116,104,95,122,95,54,0),388]]);
          let scheduleR = 3.0;
          let promotionq = 4.0;
          let nextS = String.fromCharCode(102,116,118,109,110,111,100,101,95,121,95,56,52,0);
         descG = [parseInt(`${promotionq}`)];
         scheduleR += parseFloat(`${3}`);
         promotionq -= parseFloat(`${parseInt(`${scheduleR}`)}`);
         nextS = `${2 & nextS.length}`;
      for (let w = 0; w < 3; w++) {
         bootsplashv.set(`${source_}`, 1);
      }
      for (let p = 0; p < 1; p++) {
         other6 -= 2 - bootsplashv.size;
      }
          let heartl = String.fromCharCode(100,114,97,103,103,101,100,95,103,95,49,48,0);
         floaterx -= parseFloat(`${descG.length & parseInt(`${floaterx}`)}`);
         heartl = `${heartl.length}`;
      thumbnailm |= 2;
        await AsyncStorage.setItem("showAds", "false");
      } else {

      acceptedM -= hongkongP.length / 1;
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

   if (policyT.length < expiredl) {
      policyT = `${ewardedA.length}`;
   }

      

       let recommendationL = String.fromCharCode(97,95,53,54,95,109,101,109,106,114,110,108,0);
       let injuryS = 2.0;
       let tumbnail1 = 5.0;
          let shrink3 = 5.0;
          let roboto8 = 5;
          let register_m7: Array<any> = [639, 406];
         recommendationL = "2";
         shrink3 += roboto8;
         roboto8 ^= 1 ^ roboto8;
         register_m7.push(1);
         tumbnail1 /= Math.max(parseFloat(`${1}`), 5);
         recommendationL = "2";
      while (tumbnail1 == 4.37) {
         tumbnail1 /= Math.max(2, parseFloat(`${parseInt(`${injuryS}`)}`));
         break;
      }
         injuryS /= Math.max(4, parseFloat(`${parseInt(`${tumbnail1}`) % (Math.max(2, 4))}`));
          let g_player1 = String.fromCharCode(111,95,50,53,0);
         injuryS /= Math.max(parseFloat(`${parseInt(`${tumbnail1}`) / 1}`), 4);
         g_player1 += `${g_player1.length}`;
          let unread4 = String.fromCharCode(122,95,52,52,95,100,101,110,111,105,115,105,110,103,0);
          let catalogl: Map<any, any> = new Map([[String.fromCharCode(112,111,105,110,116,95,98,95,55,54,0),true ], [String.fromCharCode(102,97,105,108,105,110,103,95,106,95,55,57,0),true ]]);
          let descA: Array<any> = [318, 50];
         injuryS /= Math.max(parseFloat(`${3 >> (Math.min(1, Math.abs(parseInt(`${injuryS}`))))}`), 2);
         unread4 += `${catalogl.size * descA.length}`;
         catalogl.set(`${descA.length}`, 1);
          let vignetteD = 2.0;
          let description_5j = 3.0;
         recommendationL = `${parseInt(`${vignetteD}`) & parseInt(`${description_5j}`)}`;
          let leftr = 0.0;
          let sinaT = String.fromCharCode(99,95,53,49,95,114,111,120,121,0);
         injuryS /= Math.max(2, parseFloat(`${parseInt(`${injuryS}`)}`));
         leftr /= Math.max(4, parseFloat(`${sinaT.length}`));
         sinaT += `${parseInt(`${leftr}`)}`;
      hongkongP += `${parseInt(`${expiredl}`)}`;
      umb_center_carousel.userCenterLoginSuccessTimesAnalytics();

   while (1 >= hongkongP.length) {
      policyT = `${(String.fromCharCode(56,0) == hongkongP ? confirmationl.length : hongkongP.length)}`;
      break;
   }
      LRZTermsScreen.userCenterLoginSuccessTimesAnalytics();

   while (1 < thumbnailm) {
      thumbnailm *= 2 ^ paginationi.size;
      break;
   }

      if (user.isVip()) {

       let detailG = true;
      for (let k = 0; k < 3; k++) {
         detailG = (!detailG ? detailG : !detailG);
      }
         detailG = (!detailG ? detailG : detailG);
      for (let o = 0; o < 2; o++) {
         detailG = !detailG;
      }
      confirmationl += `${parseInt(`${collectionk}`) & 1}`;
        umb_center_carousel.userCenterVipLoginSuccessTimesAnalytics();
      }
      

   if ((5.24 - collectionk) >= 5.95 || 1.67 >= (5.24 - collectionk)) {
      collectionk -= parseInt(`${collectionk}`);
   }

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let shrink1: Map<any, any> = new Map([[String.fromCharCode(107,97,105,115,101,114,95,54,95,49,57,0),157], [String.fromCharCode(112,108,117,114,97,108,95,122,95,57,54,0),642], [String.fromCharCode(112,115,102,98,95,122,95,55,49,0),272]]);
    let rulesg = String.fromCharCode(116,95,53,48,95,115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0);
    let matchx: Array<any> = [802, 593];
    let networkE = 4.0;
    let emptyb = String.fromCharCode(112,97,99,107,105,110,103,95,55,95,54,56,0);
    let main_jj: Array<any> = [508, 519, 703];
    let expiredQ = String.fromCharCode(97,99,116,105,118,97,116,111,114,95,117,95,55,48,0);
    let rightk = String.fromCharCode(98,95,53,50,95,116,104,114,101,115,104,111,108,100,115,0);
    let leagueT: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,108,105,115,116,95,108,95,53,51,0),955], [String.fromCharCode(102,105,120,117,112,95,103,95,56,0),504]]);
    let combined0 = 4.0;
    let tick6: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,56,95,56,55,0),364], [String.fromCharCode(114,101,103,117,108,97,116,101,95,50,95,50,49,0),416]]);
    let bing9 = false;
    let d_centerj = 1;
    let reportm = String.fromCharCode(111,95,50,52,95,101,121,99,104,97,105,110,0);
       let common9 = String.fromCharCode(120,95,52,50,95,115,117,112,112,114,101,115,115,101,115,0);
      while (common9 == String.fromCharCode(48,0)) {
          let combinea = 1.0;
          let regengh = String.fromCharCode(110,95,57,95,99,97,99,97,0);
         common9 = `${(common9 == String.fromCharCode(76,0) ? common9.length : parseInt(`${combinea}`))}`;
         combinea *= parseFloat(`${regengh.length}`);
         regengh += `${regengh.length ^ regengh.length}`;
         break;
      }
         common9 = `${common9.length ^ common9.length}`;
      if (common9.includes(`${common9.length}`)) {
          let injuryy = String.fromCharCode(99,100,106,112,101,103,95,99,95,54,55,0);
          let textJ = String.fromCharCode(98,105,116,115,116,114,101,97,109,95,115,95,50,51,0);
          let dialog_ = String.fromCharCode(97,95,49,49,95,105,110,115,101,114,116,105,111,110,0);
          let sportsl = String.fromCharCode(113,95,51,95,109,97,110,105,112,117,108,97,116,111,114,0);
          let string6 = false;
         common9 += "3";
         injuryy += "3";
         textJ = `${injuryy.length * textJ.length}`;
         dialog_ = "3";
         sportsl += `${textJ.length}`;
         string6 = 18 <= sportsl.length;
      }
      main_jj = [common9.length ^ 3];
   let expiredZ = main_jj.length <= 7412417;
   do {
      main_jj = [matchx.length - expiredQ.length];
      if (expiredZ) {
         break;
      }
   } while ((5 >= main_jj.length) && expiredZ);
      expiredQ += `${(String.fromCharCode(82,0) == expiredQ ? expiredQ.length : emptyb.length)}`;
      rightk = `${main_jj.length}`;
   while (1 == emptyb.length) {
      emptyb = `${expiredQ.length * 1}`;
      break;
   }
      rulesg = `${leagueT.size & rulesg.length}`;
      combined0 -= leagueT.size;
   let whiteg = rightk == String.fromCharCode(56,113,51,0);
   do {
       let backward0 = String.fromCharCode(99,114,101,97,116,105,111,110,95,53,95,49,48,0);
       let layoutZ = 3.0;
       let main_dV = 0.0;
       let trashq: Array<any> = [603, 100];
         trashq = [1];
       let popupW = String.fromCharCode(99,111,114,114,117,112,116,101,100,95,118,95,51,52,0);
       let gmailu = String.fromCharCode(105,95,51,57,95,115,104,97,114,101,115,0);
      if (popupW != gmailu) {
         gmailu += `${gmailu.length}`;
      }
          let s_titleE: Array<any> = [405, 681];
         trashq.push(1 % (Math.max(1, s_titleE.length)));
         popupW = `${parseInt(`${main_dV}`) - 2}`;
      let sheetL = backward0.length >= 9775569;
      do {
          let customM = String.fromCharCode(100,111,110,97,116,105,111,110,95,51,95,53,57,0);
          let switch_59 = String.fromCharCode(115,105,110,102,95,104,95,57,52,0);
          let detailsm: Array<any> = [105, 126, 65];
         backward0 += `${customM.length >> (Math.min(Math.abs(2), 4))}`;
         customM += `${switch_59.length}`;
         switch_59 += `${detailsm.length}`;
         detailsm = [(switch_59 == String.fromCharCode(84,0) ? switch_59.length : detailsm.length)];
         if (sheetL) {
            break;
         }
      } while (sheetL && (popupW.startsWith(backward0)));
       let areau = String.fromCharCode(97,95,50,55,95,115,117,98,116,114,101,101,115,0);
          let event6 = 1.0;
          let minimize8 = String.fromCharCode(108,101,114,112,114,103,98,95,54,95,54,56,0);
         areau = `${trashq.length ^ areau.length}`;
         event6 *= (parseFloat(`${minimize8 == String.fromCharCode(48,0) ? parseInt(`${event6}`) : minimize8.length}`));
      for (let a = 0; a < 1; a++) {
         areau = `${3 + popupW.length}`;
      }
      for (let c = 0; c < 1; c++) {
         areau += `${trashq.length << (Math.min(Math.abs(3), 4))}`;
      }
      for (let e = 0; e < 3; e++) {
         trashq = [gmailu.length | 1];
      }
          let roomb = String.fromCharCode(100,115,116,114,101,97,109,95,101,95,54,54,0);
          let twitterh = 5.0;
         gmailu += `${parseInt(`${layoutZ}`)}`;
         roomb += `${roomb.length * parseInt(`${twitterh}`)}`;
         twitterh -= roomb.length % (Math.max(3, 7));
      rightk += `${parseInt(`${combined0}`) % (Math.max(5, parseInt(`${networkE}`)))}`;
      if (whiteg) {
         break;
      }
   } while ((rightk.length <= 5) && whiteg);
   while (main_jj.length == matchx.length) {
       let middlewarew = 1.0;
       let animationo = String.fromCharCode(120,95,57,55,95,101,100,105,116,0);
      if ((2 + animationo.length) >= 1 || (2.17 - middlewarew) >= 4.17) {
         animationo += `${(animationo == String.fromCharCode(72,0) ? animationo.length : parseInt(`${middlewarew}`))}`;
      }
      let register_gU = middlewarew <= 8496677.0;
      do {
          let w_unlockw = String.fromCharCode(121,95,57,53,95,97,114,98,105,116,114,97,114,121,0);
          let privacyx = 5.0;
          let regengR: Map<any, any> = new Map([[String.fromCharCode(119,95,57,48,95,112,111,115,116,112,114,111,99,101,115,115,0),688], [String.fromCharCode(119,95,53,51,95,112,99,105,112,104,101,114,116,101,120,116,0),556]]);
          let downloadB: Array<any> = [214, 683, 278];
          let successJ = true;
         middlewarew /= Math.max(parseFloat(`${regengR.size - w_unlockw.length}`), 4);
         w_unlockw += `${downloadB.length / 2}`;
         privacyx -= (parseFloat(`${(successJ ? 3 : 2) % (Math.max(1, downloadB.length))}`));
         regengR.set(`${successJ}`, downloadB.length);
         if (register_gU) {
            break;
         }
      } while (register_gU && ((1 << (Math.min(5, animationo.length))) < 2));
      main_jj.push(main_jj.length + parseInt(`${combined0}`));
      break;
   }
       let o_playerW: Map<any, any> = new Map([[String.fromCharCode(118,95,57,95,100,111,119,110,108,111,97,100,0),438], [String.fromCharCode(112,117,108,108,113,117,111,116,101,95,109,95,54,53,0),429]]);
       let logoA = String.fromCharCode(102,95,54,49,95,98,103,114,97,0);
          let graym = 1;
         o_playerW.set(`${logoA}`, o_playerW.size << (Math.min(Math.abs(1), 1)));
         graym *= 1;
          let livem: Map<any, any> = new Map([[String.fromCharCode(107,95,57,95,115,117,98,108,97,121,111,117,116,0),890], [String.fromCharCode(120,95,54,48,95,105,99,99,112,0),918]]);
          let carousely = 5;
         logoA += "2";
         livem.set(`${carousely}`, 3 ^ carousely);
         o_playerW = new Map([[`${o_playerW.size}`, 1]]);
      while (logoA.startsWith(`${o_playerW.size}`)) {
         logoA += `${o_playerW.size - 3}`;
         break;
      }
      if (2 <= (o_playerW.size / 3)) {
          let morex = String.fromCharCode(117,95,56,54,95,109,112,99,104,117,102,102,0);
          let empty1 = 1.0;
         logoA += `${morex.length | o_playerW.size}`;
         morex += `${parseInt(`${empty1}`) % 2}`;
         empty1 *= parseInt(`${empty1}`);
      }
      if (!logoA.includes(`${o_playerW.size}`)) {
          let countryl = String.fromCharCode(115,117,98,106,101,99,116,95,97,95,49,57,0);
         logoA = `${(String.fromCharCode(72,0) == countryl ? countryl.length : o_playerW.size)}`;
      }
      combined0 -= 1;
      rightk += `${emptyb.length}`;
       let largeR: Map<any, any> = new Map([[String.fromCharCode(106,95,56,53,95,100,97,116,97,115,0),String.fromCharCode(114,101,97,115,115,109,95,108,95,51,54,0)], [String.fromCharCode(108,111,111,112,115,95,117,95,49,50,0),String.fromCharCode(120,95,50,51,95,101,120,97,99,116,108,121,0)], [String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,95,104,95,57,49,0),String.fromCharCode(98,95,52,51,95,111,116,111,102,0)]]);
       let umengD = 4.0;
       let downloadedp = String.fromCharCode(117,95,51,51,95,101,98,117,108,97,115,0);
       let comment6: Map<any, any> = new Map([[String.fromCharCode(106,95,54,52,95,112,114,101,115,99,97,108,105,110,103,0),112], [String.fromCharCode(97,115,115,101,109,98,108,101,100,95,102,95,50,49,0),737]]);
         comment6.set(downloadedp, largeR.size | downloadedp.length);
      while ((comment6.size + downloadedp.length) == 5) {
          let topic2 = 2;
          let sheetk = false;
         comment6.set(`${sheetk}`, 3);
         topic2 -= topic2 % (Math.max(1, 10));
         break;
      }
         downloadedp += `${comment6.size >> (Math.min(downloadedp.length, 4))}`;
      let resultK = 7153308 <= downloadedp.length;
      do {
          let optionsw = true;
          let dialogm = String.fromCharCode(112,95,53,48,95,109,102,113,101,0);
          let greyu = false;
         downloadedp = "3";
         optionsw = dialogm.length >= 31;
         dialogm = `${((greyu ? 4 : 2))}`;
         greyu = dialogm.length >= 14 || greyu;
         if (resultK) {
            break;
         }
      } while (((downloadedp.length | comment6.size) <= 4) && resultK);
         umengD -= 1 & largeR.size;
          let infoi = 2.0;
         downloadedp += `${downloadedp.length >> (Math.min(Math.abs(2), 3))}`;
         infoi *= parseFloat(`${parseInt(`${infoi}`)}`);
      let transferF = 8807731.0 >= umengD;
      do {
         umengD /= Math.max(2, comment6.size);
         if (transferF) {
            break;
         }
      } while (transferF && ((3 >> (Math.min(2, downloadedp.length))) == 3 || 1.86 == (downloadedp.length * umengD)));
         largeR = new Map([[`${comment6.size}`, comment6.size]]);
      rightk = `${(rulesg == String.fromCharCode(102,0) ? rulesg.length : parseInt(`${combined0}`))}`;
   let plashu = leagueT.size >= 5554780;
   do {
      leagueT = new Map([[`${combined0}`, 2 - parseInt(`${combined0}`)]]);
      if (plashu) {
         break;
      }
   } while ((!Array.from(leagueT.values()).includes(tick6.size)) && plashu);
      tick6.set(`${combined0}`, 2 >> (Math.min(5, Math.abs(shrink1.size))));
   let giftZ = 5788669 >= expiredQ.length;
   do {
      expiredQ = `${parseInt(`${combined0}`)}`;
      if (giftZ) {
         break;
      }
   } while ((expiredQ.startsWith(`${main_jj.length}`)) && giftZ);
      networkE += (parseFloat(`${String.fromCharCode(84,0) == emptyb ? emptyb.length : main_jj.length}`));
      rightk = `${rulesg.length >> (Math.min(Math.abs(1), 5))}`;
   for (let v = 0; v < 3; v++) {
       let minimize7: Map<any, any> = new Map([[String.fromCharCode(111,95,51,51,95,110,101,103,111,116,105,97,116,101,100,0),670], [String.fromCharCode(118,97,114,105,97,110,116,95,112,95,51,54,0),763]]);
       let downy = String.fromCharCode(103,95,49,56,95,98,108,111,99,107,105,110,103,0);
       let right1: Array<any> = [String.fromCharCode(102,95,55,48,95,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0), String.fromCharCode(113,95,50,54,95,115,117,98,109,105,116,116,101,100,0)];
       let constantsm: Array<any> = [613, 859];
       let baiduG = 1.0;
      while (3 < downy.length) {
         downy = `${minimize7.size}`;
         break;
      }
          let leftB = String.fromCharCode(104,95,55,54,95,114,111,117,110,100,117,112,0);
          let controlT = String.fromCharCode(114,95,51,49,95,100,117,112,108,105,99,97,116,111,114,0);
         downy += `${(String.fromCharCode(108,0) == controlT ? parseInt(`${baiduG}`) : controlT.length)}`;
         leftB += `${leftB.length}`;
      let leftV = downy.length >= 5031633;
      do {
         downy = `${1 * constantsm.length}`;
         if (leftV) {
            break;
         }
      } while ((4 >= (4 >> (Math.min(2, downy.length)))) && leftV);
         downy += `${minimize7.size}`;
         constantsm = [minimize7.size];
       let backwardn = 2;
          let shrinkR = false;
          let eventn: Map<any, any> = new Map([[String.fromCharCode(114,95,52,49,95,118,111,116,101,114,115,0),String.fromCharCode(104,97,110,110,105,110,103,95,118,95,55,48,0)], [String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,99,95,56,55,0),String.fromCharCode(109,95,52,50,95,110,98,112,112,0)]]);
          let short_tZ = false;
         downy = `${constantsm.length * 1}`;
         shrinkR = eventn.size <= 81 && short_tZ;
         eventn = new Map([[`${eventn.size}`, 3]]);
         short_tZ = !shrinkR;
      let nativeU = 9164532 <= right1.length;
      do {
         right1.push(right1.length & 1);
         if (nativeU) {
            break;
         }
      } while (nativeU && ((right1.length & 2) > 1 && (minimize7.size & right1.length) > 2));
      let helper2 = 7934502 >= downy.length;
      do {
          let volumeK: Array<any> = [98, 100];
          let soundi = false;
          let gemfileX: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,116,115,95,113,95,49,51,0),599], [String.fromCharCode(100,95,50,54,95,112,111,115,116,105,110,105,116,0),551]]);
         downy = `${downy.length & 1}`;
         volumeK = [(gemfileX.size - (soundi ? 2 : 4))];
         soundi = (gemfileX.size >> (Math.min(3, volumeK.length))) == 94;
         if (helper2) {
            break;
         }
      } while (helper2 && (1 <= (2 << (Math.min(4, downy.length))) || 4 <= (2 << (Math.min(4, constantsm.length)))));
      if (constantsm.includes(right1.length)) {
         right1.push((String.fromCharCode(70,0) == downy ? downy.length : backwardn));
      }
         constantsm.push(right1.length);
      while (right1.length > constantsm.length) {
         right1.push(3);
         break;
      }
       let launchG = 4.0;
      let statso = String.fromCharCode(54,117,48,50,110,49,52,50,111,97,0) == downy;
      do {
          let unselectedl = String.fromCharCode(101,95,51,48,95,115,116,105,102,102,110,101,115,115,0);
          let project3: Map<any, any> = new Map([[String.fromCharCode(105,95,53,54,95,111,110,102,105,103,117,114,97,116,105,111,110,0),true ], [String.fromCharCode(115,104,111,119,95,121,95,54,56,0),false ], [String.fromCharCode(101,115,116,105,109,97,116,101,95,103,95,52,0),true ]]);
          let username7 = String.fromCharCode(99,101,105,108,95,114,95,52,54,0);
          let r_centerq = 4.0;
          let downloadedE = 4.0;
         downy += `${backwardn}`;
         unselectedl = `${project3.size}`;
         project3 = new Map([[`${r_centerq}`, parseInt(`${r_centerq}`) % (Math.max(2, 2))]]);
         username7 = `${3 ^ project3.size}`;
         downloadedE *= 2;
         if (statso) {
            break;
         }
      } while ((downy.length < minimize7.size) && statso);
         baiduG *= constantsm.length & 2;
      combined0 *= emptyb.length;
   }
       let sheetZ = false;
       let gmailo: Map<any, any> = new Map([[String.fromCharCode(105,109,112,117,108,115,101,95,50,95,54,53,0),false ], [String.fromCharCode(100,101,105,110,116,95,113,95,56,55,0),true ]]);
      for (let e = 0; e < 2; e++) {
         sheetZ = gmailo.size < 70 || sheetZ;
      }
      let flyerN = gmailo.size <= 5005292;
      do {
         gmailo = new Map([[`${gmailo.size}`, ((sheetZ ? 4 : 2) >> (Math.min(Math.abs(gmailo.size), 5)))]]);
         if (flyerN) {
            break;
         }
      } while ((1 >= gmailo.size && (1 * gmailo.size) >= 5) && flyerN);
      while ((1 & gmailo.size) > 1) {
         sheetZ = gmailo.size >= 71;
         break;
      }
      if ((gmailo.size ^ 5) >= 5) {
         gmailo = new Map([[`${gmailo.size}`, gmailo.size & 2]]);
      }
         sheetZ = gmailo.get(`${sheetZ}`) == null;
       let firebase8 = String.fromCharCode(116,106,98,101,110,99,104,116,101,115,116,95,115,95,57,55,0);
      leagueT = new Map([[`${tick6.size}`, ((sheetZ ? 2 : 2) + tick6.size)]]);
      networkE -= parseFloat(`${tick6.size}`);
      combined0 /= Math.max(4, shrink1.size | 3);
      combined0 *= 3;
      networkE /= Math.max(1, parseFloat(`${parseInt(`${combined0}`) / 2}`));

    setReadTermNCondition(!isReadTermNCondition);
  };

  const isEmailValid = (value: string) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value)) {
      return false;
    }

    return true;
  }

  const isPhoneValid = (value: string) => {
    if (!/^[0-9]{7,12}$/.test(value.replace(RegExp(' ', 'g'), ''))) {
      return false;
    }

    return true;
  }

  const onSubmit = async () => {
       let diceV = String.fromCharCode(120,99,111,114,114,95,106,95,53,56,0);
    let windg = String.fromCharCode(116,95,55,57,95,99,104,101,99,107,0);
    let subsD = 3.0;
    let cornert: Map<any, any> = new Map([[String.fromCharCode(109,95,55,95,114,101,115,105,103,110,101,100,0),true ], [String.fromCharCode(100,114,97,119,97,98,108,101,95,104,95,55,51,0),false ], [String.fromCharCode(99,116,116,115,95,100,95,57,54,0),false ]]);
    let auto_8k6 = 2.0;
    let chartu: Array<any> = [String.fromCharCode(104,95,55,50,95,115,108,111,119,100,111,119,110,0), String.fromCharCode(115,101,103,95,122,95,57,51,0), String.fromCharCode(98,95,52,53,95,98,117,116,111,110,0)];
    let downloadedP = 5.0;
    let promotionO = String.fromCharCode(100,105,103,105,116,115,95,57,95,56,51,0);
    let config8: Array<any> = [626, 578];
    let sentry9 = String.fromCharCode(105,110,105,116,95,52,95,52,54,0);
    let lang6 = String.fromCharCode(98,116,111,98,105,110,95,51,95,55,50,0);
    let showS = String.fromCharCode(117,95,51,57,95,106,109,108,105,115,116,0);
    let dialogM = 3;
    let sendv = 1.0;
   if (lang6.length <= config8.length) {
      lang6 += "3";
   }
   let nativet = cornert.size <= 7372208;
   do {
       let carousels = 3;
         carousels <<= Math.min(Math.abs(carousels >> (Math.min(Math.abs(3), 2))), 1);
      if (carousels > carousels) {
         carousels <<= Math.min(1, Math.abs(3));
      }
      if (2 > (5 - carousels)) {
          let penalty8 = String.fromCharCode(118,97,114,121,105,110,103,95,55,95,55,53,0);
          let moonR = false;
          let serviceS = String.fromCharCode(102,95,49,55,95,101,109,111,114,121,0);
         carousels %= Math.max(1, carousels);
         penalty8 += `${((moonR ? 5 : 1))}`;
         moonR = moonR && serviceS.length > 56;
         serviceS += `${(penalty8.length & (moonR ? 5 : 1))}`;
      }
      cornert = new Map([[diceV, diceV.length << (Math.min(showS.length, 3))]]);
      if (nativet) {
         break;
      }
   } while (nativet && (cornert.get(`${chartu.length}`) != null));

    if (isSubmitting) return;

      diceV = `${diceV.length}`;
       let filteri = false;
       let photol = 3;
       let policyu = 1;
       let shootK = true;
      for (let e = 0; e < 3; e++) {
         policyu += photol & 3;
      }
      config8 = [((filteri ? 2 : 4))];

    if (isReadTermNCondition == false) {

       let regengI = 0.0;
      let whatsappe = 6437376.0 <= regengI;
      do {
          let dangerd = 5;
         regengI -= parseFloat(`${parseInt(`${regengI}`)}`);
         dangerd <<= Math.min(1, Math.abs(dangerd << (Math.min(Math.abs(2), 5))));
         if (whatsappe) {
            break;
         }
      } while (((4.72 * regengI) <= 5.28 && (regengI - regengI) <= 4.72) && whatsappe);
         regengI /= Math.max(parseFloat(`${parseInt(`${regengI}`)}`), 3);
         regengI /= Math.max(parseFloat(`${2 | parseInt(`${regengI}`)}`), 1);
      cornert = new Map([[`${cornert.size}`, (String.fromCharCode(75,0) == showS ? showS.length : cornert.size)]]);
   if (1 >= (cornert.size + parseInt(`${auto_8k6}`)) && (auto_8k6 + 1.62) >= 1.34) {
      auto_8k6 += 2 << (Math.min(4, config8.length));
   }
      return;

   for (let a = 0; a < 1; a++) {
      lang6 = "2";
   }
       let philippines4 = true;
       let serviceU: Array<any> = [String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,95,101,95,55,55,0), String.fromCharCode(119,95,51,57,95,118,105,101,119,0), String.fromCharCode(109,95,53,49,95,101,110,99,111,100,105,110,103,0)];
       let checkboxI = String.fromCharCode(116,121,112,95,49,95,54,54,0);
          let catagoryB: Array<any> = [301, 178];
          let awayP = String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,98,95,52,54,0);
         serviceU = [(String.fromCharCode(120,0) == awayP ? (philippines4 ? 4 : 3) : awayP.length)];
         catagoryB.push(catagoryB.length);
       let stationsC = 1.0;
       let twitterV = 2.0;
      for (let w = 0; w < 2; w++) {
         philippines4 = (((philippines4 ? 31 : serviceU.length) | serviceU.length) == 31);
      }
         twitterV /= Math.max(parseFloat(`${2}`), 3);
      while ((checkboxI.length ^ serviceU.length) > 2 || 2 > (serviceU.length ^ checkboxI.length)) {
         checkboxI += "3";
         break;
      }
         twitterV /= Math.max(parseFloat(`${parseInt(`${stationsC}`) | 3}`), 1);
      if (5 <= (parseInt(`${twitterV}`) - serviceU.length) && (twitterV - parseFloat(`${serviceU.length}`)) <= 2.91) {
         serviceU = [1];
      }
         serviceU.push(2 % (Math.max(5, parseInt(`${twitterV}`))));
      let filed0 = serviceU.length >= 9465507;
      do {
         serviceU = [serviceU.length];
         if (filed0) {
            break;
         }
      } while ((5 >= (serviceU.length % 3)) && filed0);
      auto_8k6 += parseInt(`${subsD}`);
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      showS = `${3 >> (Math.min(5, lang6.length))}`;
   while (5 > (config8.length / (Math.max(5, 4)))) {
       let teamb = String.fromCharCode(97,95,52,52,95,100,101,108,105,118,101,114,121,0);
       let subs9 = String.fromCharCode(98,95,53,55,95,99,108,97,115,115,105,102,105,101,114,0);
       let danger6 = 0.0;
       let injuryp = String.fromCharCode(101,95,51,48,95,114,101,102,99,111,117,110,116,101,100,0);
       let linku = 0;
         danger6 /= Math.max(3, parseFloat(`${parseInt(`${danger6}`) / 2}`));
         danger6 -= parseFloat(`${parseInt(`${danger6}`) - subs9.length}`);
      let constantss = String.fromCharCode(122,107,118,52,116,50,48,0) == teamb;
      do {
         teamb = `${(String.fromCharCode(76,0) == subs9 ? subs9.length : injuryp.length)}`;
         if (constantss) {
            break;
         }
      } while (((linku % (Math.max(teamb.length, 9))) >= 1) && constantss);
      if (subs9 != injuryp) {
         injuryp = `${subs9.length % (Math.max(8, injuryp.length))}`;
      }
      while (4 <= teamb.length || subs9.length <= 4) {
         subs9 = "3";
         break;
      }
       let catalogz = true;
       let roomN = true;
      let robotoE = String.fromCharCode(114,118,54,120,97,56,109,0) == injuryp;
      do {
          let loadingN = String.fromCharCode(117,110,105,102,111,114,109,95,112,95,56,51,0);
          let sportsp: Array<any> = [String.fromCharCode(99,117,98,105,99,95,103,95,56,55,0), String.fromCharCode(118,95,50,48,95,114,117,110,116,101,114,109,0)];
          let interstitialL = 0;
          let pagek = 0;
          let singleB = 3.0;
         injuryp = `${2 >> (Math.min(1, injuryp.length))}`;
         loadingN += `${parseInt(`${singleB}`) % (Math.max(loadingN.length, 8))}`;
         sportsp.push(sportsp.length % (Math.max(3, 7)));
         interstitialL >>= Math.min(Math.abs((String.fromCharCode(105,0) == loadingN ? interstitialL : loadingN.length)), 3);
         pagek &= parseInt(`${singleB}`) % (Math.max(4, interstitialL));
         if (robotoE) {
            break;
         }
      } while ((3.62 <= danger6) && robotoE);
       let private_a90 = 2.0;
       let sortR = 5.0;
         sortR -= (parseFloat(`${(roomN ? 3 : 2)}`));
         private_a90 *= parseFloat(`${3 >> (Math.min(5, Math.abs(linku)))}`);
         teamb += `${2 << (Math.min(Math.abs(parseInt(`${private_a90}`)), 3))}`;
       let refreshg: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,95,104,95,51,52,0),String.fromCharCode(112,111,105,110,116,101,114,95,52,95,55,51,0)], [String.fromCharCode(101,120,112,114,95,107,95,49,53,0),String.fromCharCode(117,105,100,95,108,95,52,56,0)]]);
       let expandh: Map<any, any> = new Map([[String.fromCharCode(109,95,53,49,95,99,104,105,109,112,0),334], [String.fromCharCode(115,117,99,104,95,122,95,54,52,0),679], [String.fromCharCode(101,95,56,56,95,99,97,108,105,98,114,97,116,101,100,0),168]]);
      while ((3 & injuryp.length) >= 2) {
         injuryp += `${parseInt(`${danger6}`)}`;
         break;
      }
       let targetP: Array<any> = [480, 160];
         targetP = [(3 | (catalogz ? 2 : 3))];
      config8 = [(windg == String.fromCharCode(80,0) ? parseInt(`${danger6}`) : windg.length)];
      break;
   }
    

   let gmailH = 8245883.0 >= auto_8k6;
   do {
      auto_8k6 -= sentry9.length % (Math.max(5, cornert.size));
      if (gmailH) {
         break;
      }
   } while (gmailH && (windg.length == 1));
   while ((lang6.length & cornert.size) < 1) {
      cornert.set(lang6, 2 ^ lang6.length);
      break;
   }
    

      windg = `${config8.length}`;
       let regengt = 0.0;
       let private_0sz = 0;
          let currentB = false;
          let homed = 0.0;
         private_0sz &= ((currentB ? 3 : 4) % (Math.max(parseInt(`${regengt}`), 4)));
         currentB = (homed / (Math.max(homed, 7))) < 5.89;
         regengt -= parseInt(`${regengt}`);
      diceV += `${diceV.length}`;
    

   if ((lang6.length - cornert.size) <= 1 && (lang6.length - cornert.size) <= 1) {
       let become2 = String.fromCharCode(99,97,99,104,101,115,95,56,95,49,55,0);
       let private_xU = 2;
       let fullO: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,95,114,95,51,51,0),818], [String.fromCharCode(115,116,114,101,97,109,105,100,95,117,95,50,53,0),347], [String.fromCharCode(114,97,105,110,95,98,95,50,50,0),422]]);
       let taiwanR = 4;
       let change5: Map<any, any> = new Map([[String.fromCharCode(122,95,52,50,95,99,111,110,116,105,110,117,101,115,0),true ], [String.fromCharCode(109,97,103,101,110,116,97,95,101,95,49,50,0),false ], [String.fromCharCode(106,95,50,48,95,100,97,116,97,115,116,111,114,101,0),true ]]);
      while (!become2.includes(`${taiwanR}`)) {
         become2 += `${(become2 == String.fromCharCode(106,0) ? become2.length : fullO.size)}`;
         break;
      }
          let weiboA: Map<any, any> = new Map([[String.fromCharCode(112,105,120,115,99,111,112,101,95,53,95,52,52,0),false ], [String.fromCharCode(114,101,115,105,122,101,100,95,103,95,56,48,0),false ]]);
          let actionse: Map<any, any> = new Map([[String.fromCharCode(100,95,49,55,95,97,99,99,101,115,115,111,114,121,0),493], [String.fromCharCode(112,103,105,100,120,95,51,95,50,50,0),459]]);
         become2 = `${taiwanR << (Math.min(Math.abs(2), 3))}`;
         weiboA = new Map([[`${weiboA.size}`, 3]]);
         actionse.set(`${actionse.size}`, weiboA.size);
      let viewerj = become2.length <= 7714614;
      do {
         become2 = `${1 % (Math.max(7, private_xU))}`;
         if (viewerj) {
            break;
         }
      } while (((become2.length + taiwanR) <= 3 || (taiwanR + 3) <= 2) && viewerj);
          let popupB = String.fromCharCode(105,95,56,57,95,115,121,110,99,104,114,111,110,111,117,115,0);
          let greyv = String.fromCharCode(101,120,112,101,99,116,115,95,112,95,52,51,0);
          let short_ta = String.fromCharCode(115,105,109,112,108,101,116,97,103,95,121,95,55,56,0);
         private_xU &= 2;
         popupB += "2";
         greyv += `${short_ta.length}`;
         short_ta = "1";
         change5.set(`${become2}`, 1);
      if (change5.size <= private_xU) {
         private_xU += become2.length >> (Math.min(4, Math.abs(taiwanR)));
      }
         private_xU <<= Math.min(3, Math.abs(fullO.size));
         change5 = new Map([[`${fullO.size}`, (String.fromCharCode(84,0) == become2 ? fullO.size : become2.length)]]);
          let crossr = 5;
          let annera = 3.0;
          let container3: Array<any> = [976, 217, 715];
         become2 += `${become2.length + 3}`;
         crossr -= 2;
         annera *= parseFloat(`${parseInt(`${annera}`) + container3.length}`);
         container3 = [crossr];
      let pauseX = private_xU >= 5792055;
      do {
         private_xU -= taiwanR + change5.size;
         if (pauseX) {
            break;
         }
      } while ((3 < (4 & become2.length)) && pauseX);
      while (3 > (4 ^ change5.size) && 2 > (4 ^ fullO.size)) {
          let private_g9 = String.fromCharCode(100,95,56,48,95,114,116,114,101,101,99,104,101,99,107,0);
          let pingP = 1.0;
          let emptyB = String.fromCharCode(110,105,98,98,108,101,95,111,95,49,52,0);
          let string2 = String.fromCharCode(119,95,50,51,95,115,116,114,116,121,112,101,0);
         fullO.set(`${pingP}`, (String.fromCharCode(51,0) == private_g9 ? private_g9.length : parseInt(`${pingP}`)));
         emptyB = `${(String.fromCharCode(72,0) == string2 ? emptyB.length : string2.length)}`;
         break;
      }
          let watchq = String.fromCharCode(116,95,51,57,95,102,97,115,116,0);
         change5 = new Map([[`${taiwanR}`, taiwanR ^ private_xU]]);
         watchq = `${2 << (Math.min(1, watchq.length))}`;
      let vietnam9 = 7768376 <= fullO.size;
      do {
         fullO = new Map([[`${fullO.size}`, 1]]);
         if (vietnam9) {
            break;
         }
      } while ((5 < (fullO.size - 3)) && vietnam9);
         private_xU %= Math.max(1 << (Math.min(2, Math.abs(change5.size))), 4);
      let yingS = 8037644 >= taiwanR;
      do {
         taiwanR |= (String.fromCharCode(107,0) == become2 ? become2.length : private_xU);
         if (yingS) {
            break;
         }
      } while (((4 << (Math.min(3, Math.abs(taiwanR)))) > 1 || 4 > (taiwanR << (Math.min(Math.abs(4), 3)))) && yingS);
      cornert = new Map([[`${chartu.length}`, 1]]);
   }
   let expiredR = chartu.length <= 6868369;
   do {
      chartu = [lang6.length];
      if (expiredR) {
         break;
      }
   } while ((downloadedP >= chartu.length) && expiredR);

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

   if (3 == (config8.length | promotionO.length)) {
       let spinnero = String.fromCharCode(109,95,55,57,95,97,115,121,110,99,0);
       let indicatore = String.fromCharCode(121,95,49,52,95,119,111,114,107,101,114,115,0);
       let floater2 = 1;
       let shareg = String.fromCharCode(122,95,52,95,115,112,108,97,110,101,0);
         indicatore += `${floater2 * indicatore.length}`;
      let agreementQ = shareg == String.fromCharCode(121,100,111,0);
      do {
          let updatesQ = String.fromCharCode(114,105,118,97,116,101,95,97,95,56,0);
          let frame_su: Array<any> = [574, 455, 677];
          let ewarded5: Array<any> = [301, 759, 122];
         shareg = `${spinnero.length}`;
         updatesQ = `${frame_su.length}`;
         frame_su = [ewarded5.length];
         ewarded5 = [updatesQ.length];
         if (agreementQ) {
            break;
         }
      } while (agreementQ && (floater2 == 5));
      let becomeS = 8659790 >= floater2;
      do {
         floater2 /= Math.max(2, 2);
         if (becomeS) {
            break;
         }
      } while (((5 ^ floater2) < 4 && 1 < (5 ^ shareg.length)) && becomeS);
         floater2 ^= spinnero.length - indicatore.length;
          let theme3: Map<any, any> = new Map([[String.fromCharCode(98,95,54,52,95,105,110,112,117,116,115,0),911], [String.fromCharCode(100,101,97,108,108,111,99,95,116,95,51,0),917], [String.fromCharCode(102,111,114,98,105,100,100,101,110,95,106,95,54,50,0),199]]);
         indicatore = `${spinnero.length >> (Math.min(2, Math.abs(floater2)))}`;
         theme3.set(`${theme3.size}`, 2 * theme3.size);
         floater2 -= shareg.length;
      while (4 == (shareg.length << (Math.min(3, Math.abs(floater2)))) && 3 == (shareg.length << (Math.min(Math.abs(4), 5)))) {
         floater2 += indicatore.length;
         break;
      }
       let playlistA = String.fromCharCode(106,112,101,103,99,111,109,112,95,102,95,50,51,0);
       let shirtz: Array<any> = [645, 234];
       let sell_: Array<any> = [String.fromCharCode(110,95,51,48,95,112,97,114,101,110,116,97,103,101,0), String.fromCharCode(100,114,105,118,101,114,95,118,95,52,55,0), String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,100,95,54,56,0)];
      let tumbnail_ = 8886019 <= shareg.length;
      do {
          let type_ysL = 2.0;
          let tickedx: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,115,101,99,116,95,117,95,55,53,0),609], [String.fromCharCode(115,117,98,102,105,108,101,95,109,95,51,56,0),504], [String.fromCharCode(104,97,115,104,101,100,95,118,95,49,51,0),690]]);
          let greenm = String.fromCharCode(120,95,51,57,95,98,117,102,0);
          let uploadB: Array<any> = [505, 102];
          let predictionI = 5.0;
         shareg = "3";
         type_ysL += parseInt(`${predictionI}`);
         tickedx = new Map([[`${tickedx.size}`, tickedx.size]]);
         greenm += `${greenm.length}`;
         uploadB = [3];
         predictionI /= Math.max(1, 4);
         if (tumbnail_) {
            break;
         }
      } while (tumbnail_ && (1 < (3 * sell_.length)));
         playlistA = `${sell_.length}`;
      for (let w = 0; w < 1; w++) {
         indicatore += `${2 - shareg.length}`;
      }
      promotionO += `${lang6.length | 2}`;
   }
       let time_hlA = 4.0;
      let orientationJ = 6650060.0 >= time_hlA;
      do {
         time_hlA -= parseFloat(`${parseInt(`${time_hlA}`) - parseInt(`${time_hlA}`)}`);
         if (orientationJ) {
            break;
         }
      } while (orientationJ && (time_hlA <= time_hlA));
      if ((time_hlA * 5.90) > 2.31 || (time_hlA * 5.90) > 1.47) {
         time_hlA *= parseFloat(`${1 / (Math.max(9, parseInt(`${time_hlA}`)))}`);
      }
      let telegramn = 5570231.0 >= time_hlA;
      do {
         time_hlA *= parseFloat(`${parseInt(`${time_hlA}`)}`);
         if (telegramn) {
            break;
         }
      } while (telegramn && (time_hlA == 3.28));
      chartu = [windg.length % 1];
      setSubmitting(true);

   if (4.1 > (subsD - 2.18)) {
      subsD -= parseFloat(`${parseInt(`${auto_8k6}`) ^ parseInt(`${downloadedP}`)}`);
   }
   while ((5 / (Math.max(2, chartu.length))) >= 3) {
       let greyK: Array<any> = [190, 78, 862];
       let confirmationC = 2.0;
       let score7 = true;
       let team3 = 4.0;
          let mathF = 1.0;
          let minivod0 = String.fromCharCode(102,117,115,101,95,114,95,54,56,0);
         confirmationC *= parseFloat(`${parseInt(`${confirmationC}`) * 2}`);
         mathF += (minivod0 == String.fromCharCode(106,0) ? parseInt(`${mathF}`) : minivod0.length);
         team3 *= parseInt(`${team3}`) / 3;
          let taiwanE = true;
         greyK = [parseInt(`${team3}`) & greyK.length];
         taiwanE = (!taiwanE ? !taiwanE : !taiwanE);
      while (4.51 > team3) {
         team3 *= 2;
         break;
      }
      for (let m = 0; m < 3; m++) {
         confirmationC /= Math.max(3, (parseFloat(`${parseInt(`${confirmationC}`) * (score7 ? 1 : 3)}`)));
      }
      if (!greyK.includes(team3)) {
         team3 -= greyK.length ^ 2;
      }
      let watchJ = 5314412 >= greyK.length;
      do {
          let read0 = String.fromCharCode(120,95,56,52,95,106,105,116,116,101,114,0);
         greyK.push(parseInt(`${confirmationC}`));
         read0 = `${read0.length + read0.length}`;
         if (watchJ) {
            break;
         }
      } while ((4 > greyK.length || 4 > (greyK.length + 4)) && watchJ);
          let infoS: Map<any, any> = new Map([[String.fromCharCode(114,97,108,102,95,48,95,53,51,0),false ], [String.fromCharCode(98,95,51,54,95,100,97,116,101,0),true ], [String.fromCharCode(119,95,49,57,95,114,101,118,97,108,105,100,97,116,101,100,0),false ]]);
          let snewsC = true;
         score7 = !score7 && infoS.size >= 1;
         infoS = new Map([[`${snewsC}`, ((snewsC ? 4 : 2) << (Math.min(Math.abs((snewsC ? 4 : 1)), 2)))]]);
          let lessY = 5.0;
          let membershipG: Map<any, any> = new Map([[String.fromCharCode(111,95,53,52,95,97,114,101,110,97,115,0),834], [String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,116,95,56,51,0),824], [String.fromCharCode(101,95,53,56,95,121,117,118,112,0),139]]);
          let streamingj: Map<any, any> = new Map([[String.fromCharCode(121,95,51,50,95,115,112,107,114,0),613], [String.fromCharCode(97,95,55,49,95,99,97,116,101,103,111,114,121,0),68]]);
         greyK.push(parseInt(`${lessY}`) * membershipG.size);
         lessY += parseFloat(`${streamingj.size}`);
         membershipG.set(`${streamingj.size}`, streamingj.size & streamingj.size);
          let catalog4 = String.fromCharCode(97,95,55,50,95,97,110,97,108,121,122,101,0);
          let logo8 = 1.0;
         confirmationC /= Math.max(parseFloat(`${greyK.length | 1}`), 4);
         catalog4 = "2";
         logo8 /= Math.max(parseInt(`${logo8}`), 4);
       let ticku: Array<any> = [String.fromCharCode(115,95,56,48,95,112,114,101,108,111,97,100,0), String.fromCharCode(99,111,109,112,111,115,101,114,95,53,95,52,52,0), String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,51,95,50,57,0)];
       let largeu: Array<any> = [763, 61];
         confirmationC *= parseFloat(`${parseInt(`${team3}`)}`);
      chartu.push(2);
      break;
   }
      await THFirebase.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {

      showS += `${promotionO.length ^ 2}`;
   for (let i = 0; i < 1; i++) {
      windg = "3";
   }
        setSubmitting(false);

      subsD *= parseFloat(`${3 >> (Math.min(3, diceV.length))}`);
      windg = `${promotionO.length | diceV.length}`;
        setLoginValueErrMsg(err.message);

       let volumel = 0.0;
      if (5.85 < (volumel + volumel) && (volumel + volumel) < 5.85) {
         volumel /= Math.max(parseInt(`${volumel}`) * 2, 1);
      }
      if (volumel <= volumel) {
          let mathG = 4.0;
         volumel /= Math.max(parseInt(`${volumel}`) * parseInt(`${mathG}`), 2);
      }
         volumel /= Math.max(1, 2);
      cornert = new Map([[sentry9, 1 | windg.length]]);
       let megaphone1 = String.fromCharCode(115,116,117,98,95,107,95,51,48,0);
      if (megaphone1 != String.fromCharCode(121,0)) {
         megaphone1 += `${megaphone1.length << (Math.min(Math.abs(1), 2))}`;
      }
         megaphone1 = `${1 | megaphone1.length}`;
         megaphone1 += `${megaphone1.length << (Math.min(megaphone1.length, 2))}`;
      lang6 = `${(String.fromCharCode(71,0) == showS ? showS.length : promotionO.length)}`;
        return;
      }
    }

    setSubmitting(false);

   if (2 <= (windg.length | 5) || 5 <= (windg.length % (Math.max(5, 4)))) {
       let commonS = 0.0;
       let greyr = String.fromCharCode(112,111,114,116,97,108,95,53,95,52,54,0);
       let otherY = 0.0;
       let middlewarep: Map<any, any> = new Map([[String.fromCharCode(100,102,115,116,95,119,95,52,56,0),281], [String.fromCharCode(100,120,116,121,115,95,51,95,50,55,0),604]]);
      for (let u = 0; u < 3; u++) {
         greyr = `${(String.fromCharCode(116,0) == greyr ? greyr.length : middlewarep.size)}`;
      }
          let quest8 = false;
         commonS -= greyr.length;
          let agreement0 = 3.0;
          let prediction2 = 0;
         greyr = `${greyr.length << (Math.min(Math.abs(3), 2))}`;
         agreement0 *= prediction2;
         prediction2 %= Math.max(1, 2);
      while (5.78 >= (commonS - 5.64) || (5.64 - commonS) >= 3.99) {
         middlewarep.set(greyr, greyr.length);
         break;
      }
      while (middlewarep.get(`${otherY}`) == null) {
          let aboutQ = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,54,95,52,0);
          let matchh: Array<any> = [891, 879, 246];
          let subsw: Array<any> = [613, 163];
         otherY /= Math.max(1, parseFloat(`${parseInt(`${otherY}`)}`));
         aboutQ += `${aboutQ.length}`;
         matchh.push(matchh.length);
         subsw.push(2 - subsw.length);
         break;
      }
      let hooksp = 8680358 >= middlewarep.size;
      do {
         middlewarep.set(greyr, greyr.length);
         if (hooksp) {
            break;
         }
      } while (hooksp && (5 <= (middlewarep.size % 3) && 5.49 <= (otherY / 2.45)));
       let fillZ = String.fromCharCode(117,95,51,54,95,117,112,108,111,97,100,0);
       let bottomO = String.fromCharCode(110,97,108,117,95,98,95,54,48,0);
      while (fillZ.length <= greyr.length) {
         greyr += `${(String.fromCharCode(108,0) == greyr ? greyr.length : parseInt(`${otherY}`))}`;
         break;
      }
      for (let y = 0; y < 3; y++) {
          let orangeE: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,111,109,112,108,105,99,97,116,105,111,110,0),true ], [String.fromCharCode(109,101,110,117,115,95,112,95,57,54,0),false ]]);
          let handler0 = String.fromCharCode(114,101,115,112,111,110,100,115,95,52,95,55,49,0);
          let successb = String.fromCharCode(112,109,107,95,49,95,51,54,0);
          let moonL = String.fromCharCode(102,95,49,53,0);
          let teamo: Array<any> = [14, 795];
         fillZ = `${successb.length << (Math.min(Math.abs(3), 2))}`;
         orangeE = new Map([[`${orangeE.size}`, (String.fromCharCode(85,0) == handler0 ? orangeE.size : handler0.length)]]);
         successb += `${teamo.length / (Math.max(handler0.length, 8))}`;
         moonL = `${orangeE.size & handler0.length}`;
         teamo.push(moonL.length % 2);
      }
         commonS /= Math.max(parseInt(`${otherY}`) % (Math.max(fillZ.length, 4)), 1);
          let resultm = String.fromCharCode(113,95,49,54,95,117,110,101,109,98,101,100,0);
          let read8 = 4;
          let starc = false;
         otherY -= parseFloat(`${fillZ.length + 1}`);
         resultm += `${(read8 * (starc ? 3 : 4))}`;
         read8 &= read8;
         starc = 61 < read8;
          let modelu = 5;
         fillZ += "1";
         modelu ^= modelu;
      auto_8k6 /= Math.max(middlewarep.size - sentry9.length, 5);
   }
   while (2 == diceV.length) {
      auto_8k6 += cornert.size;
      break;
   }

    dispatch(hideBottomSheetAction());

   if ((5 << (Math.min(4, lang6.length))) >= 5) {
      lang6 = `${parseInt(`${subsD}`)}`;
   }
   if (2 == (promotionO.length ^ config8.length)) {
       let buttonR = String.fromCharCode(115,121,110,99,112,111,105,110,116,95,113,95,51,0);
       let banner8: Map<any, any> = new Map([[String.fromCharCode(104,95,55,55,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0),768], [String.fromCharCode(98,95,54,55,95,112,114,101,116,119,105,100,100,108,101,0),96]]);
       let modelsX: Array<any> = [String.fromCharCode(106,112,101,103,105,110,116,95,118,95,55,53,0), String.fromCharCode(103,95,57,53,95,99,114,97,122,121,116,105,109,101,0), String.fromCharCode(117,95,49,51,95,97,117,116,111,100,111,119,110,108,111,97,100,0)];
       let editS: Map<any, any> = new Map([[String.fromCharCode(118,95,55,49,0),644], [String.fromCharCode(97,110,109,114,95,122,95,55,57,0),661], [String.fromCharCode(119,95,55,54,95,109,111,110,111,119,104,105,116,101,0),536]]);
          let closek = 0.0;
         editS.set(`${modelsX.length}`, modelsX.length | editS.size);
         closek += parseFloat(`${1 * parseInt(`${closek}`)}`);
         buttonR = `${modelsX.length}`;
         banner8.set(buttonR, banner8.size);
      while (3 <= (buttonR.length & editS.size) || 3 <= (editS.size & 3)) {
         editS = new Map([[`${editS.size}`, banner8.size ^ 1]]);
         break;
      }
          let bottomE = String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,116,95,51,57,0);
          let matchesa = 0;
         editS = new Map([[`${banner8.size}`, (String.fromCharCode(106,0) == bottomE ? banner8.size : bottomE.length)]]);
         matchesa |= matchesa;
          let v_centerg = String.fromCharCode(104,115,118,97,95,111,95,57,50,0);
         buttonR = `${editS.size}`;
         v_centerg = `${v_centerg.length - v_centerg.length}`;
       let sound9 = String.fromCharCode(114,101,115,117,109,101,100,95,121,95,53,51,0);
       let dice5 = 5;
       let volumeN = 1;
      for (let k = 0; k < 2; k++) {
         editS.set(sound9, sound9.length - buttonR.length);
      }
      if ((sound9.length | 4) <= 1 && 4 <= (dice5 | sound9.length)) {
          let topicg = String.fromCharCode(112,95,56,53,95,99,111,109,112,111,110,101,110,116,0);
         dice5 >>= Math.min(4, Math.abs((topicg == String.fromCharCode(111,0) ? topicg.length : dice5)));
      }
          let mathc: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,98,108,101,95,122,95,54,51,0),357], [String.fromCharCode(99,111,109,112,97,114,101,95,122,95,56,56,0),108], [String.fromCharCode(101,99,116,97,110,103,108,101,95,99,95,52,52,0),702]]);
         editS.set(buttonR, 2 - buttonR.length);
         mathc = new Map([[`${mathc.size}`, mathc.size * mathc.size]]);
      for (let b = 0; b < 2; b++) {
         buttonR += "3";
      }
      promotionO += `${editS.size >> (Math.min(Math.abs(2), 1))}`;
   }
    navigation.navigate("OTP", {
      email: loginType === 'email' ? loginValue : undefined,
      phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + loginValue : undefined,
      countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
      referralCode: referralCode,
    });
  }

  return (
    <View style={{ height: "100%" }}>
      <SpinnerOverlay visible={isSubmitting} />

      {!isShowCountryList &&
        <View onLayout={(e) => {
          if (containerHeight === 0) setContainerHeight(e.nativeEvent.layout.height);
        }}>
          <LoginCard
            loginType={loginType}
            loginValue={loginValue}
            referralCode={referralCode}
            loginValueErrMsg={loginValueErrMsg}
            referralCodeErrMsg={referralCodeErrMsg}
            isReadTermNCondition={isReadTermNCondition}
            countryPhoneSelected={countryPhoneSelected}
            onLoginValueChange={onLoginValueChange}
            onReferralCodeChange={onReferralCodeChange}
            onPressTermNCondition={onPressTermNCondition}
            onChangeloginType={onChangeloginType}
            onPressGoogleLogin={onPressGoogleLogin}
            onPressCountryDropdown={onPressCountryDropdown}
            onSubmit={onSubmit}
          />
        </View>
      }

      {isShowCountryList && countryPhoneOptions && countryPhoneOptions.length > 0 &&
        <CountryPhoneList
          data={countryPhoneOptions}
          dataSelected={countryPhoneSelected}
          onSelectCountryPhone={onSelectCountryPhone}
        />
      }
    </View>
  );
});

type MGJMoviesTicked = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: GBShort,
  onLoginValueChange: (value: string) => void,
  onReferralCodeChange: (value: string) => void,
  onPressTermNCondition: () => void,
  onChangeloginType: (type: 'email' | 'phone') => void,
  onPressGoogleLogin: () => void,
  onPressCountryDropdown: () => void,
  onSubmit: () => void,
}

const LoginCard = ({
  loginType,
  loginValue,
  referralCode,
  loginValueErrMsg,
  referralCodeErrMsg,
  isReadTermNCondition,
  countryPhoneSelected,
  onLoginValueChange,
  onReferralCodeChange,
  onPressTermNCondition,
  onChangeloginType,
  onPressGoogleLogin,
  onPressCountryDropdown,
  onSubmit,
}: MGJMoviesTicked) => {
  const { colors, dark } = useTheme();
  const styles = useMemo(() => createStyles({ colors, dark }), [colors, dark]);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>「登录/注册」解锁更多精彩内容！</Text>
      {/* <Text style={styles.subtitle}>登录后可管理您的账号，多端同步观看历史和收藏夹</Text> */}
      { }
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabItemContainer}
          onPress={() => onChangeloginType('email')}
        >
          <Text style={[loginType === 'email' ? styles.tabItemFocusText : styles.tabItemUnfocusText]}>电邮地址</Text>
          {loginType === 'email' &&
            <View
              style={{
                width: 30,
                height: 4,
                borderRadius: 20,
                backgroundColor: colors.primary,
              }}
            />
          }
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItemContainer}
          onPress={() => onChangeloginType('phone')}
        >
          <Text style={[loginType === 'phone' ? styles.tabItemFocusText : styles.tabItemUnfocusText]}>手机号码</Text>
          {loginType === 'phone' &&
            <View
              style={{
                width: 30,
                height: 4,
                borderRadius: 20,
                backgroundColor: colors.primary,
              }}
            />
          }
        </TouchableOpacity>
      </View>
      <View style={styles.textinputContainer}>
        { }
        {loginType === 'email' && <>
          <TextInput
            autoCapitalize="none"
            style={[
              styles.textInpoutCommonStyle,
              loginValue === ""
                ? styles.defaultTextInputStyle
                : loginValueErrMsg === null 
                  ? styles.correctTextInputStyle
                  : styles.invalidTextInputStyle,
            ]}
            value={loginValue}
            onChangeText={(value) => {
              onLoginValueChange(value);
            }}
            placeholder="输入邮箱账号"
            placeholderTextColor="#B6B6B6"
          />
        </>}

        {loginType === 'phone' &&
          <View style={styles.countryPhoneInputContainer}>
            <TouchableOpacity
              onPress={onPressCountryDropdown}
              style={styles.phoneCodeDropdown}
            >
              {countryPhoneSelected &&
                <FastImage
                  source={{
                    uri: countryPhoneSelected?.country_flag
                  }}
                  style={styles.countryFlag}
                />
              }

              <DropdownIcon />
            </TouchableOpacity>

            <Text style={{
              position: 'absolute',
              color: 'white',
              left: 94,
              zIndex: 100,
            }}>
              +{countryPhoneSelected?.country_phonecode}
            </Text>

            <TextInput
              keyboardType="numeric"
              autoCapitalize="none"
              style={[
                styles.textInpoutCommonStyle,
                loginValue === ""
                  ? styles.defaultTextInputStyle
                  : loginValueErrMsg === null 
                    ? styles.correctTextInputStyle
                    : styles.invalidTextInputStyle,
                {
                  paddingLeft: 60
                }
              ]}
              value={loginValue}
              onChangeText={(value) => {
                onLoginValueChange(value);
              }}
              placeholder="请输入手机号"
              placeholderTextColor="#B6B6B6"
            />
          </View>
        }

        {((loginValue !== "" && loginValueErrMsg === null) || (loginValueErrMsg && loginValueErrMsg?.includes("稍后"))) && (
          <TickedIcon
            style={styles.iconStyle}
            width={18}
            height={18}
            color={colors.success}
            fill={'white'}
          />
        )}

        {loginValue !== '' &&
          loginValueErrMsg !== null &&
          !loginValueErrMsg.includes("稍后") && (
            <TouchableWithoutFeedback
              onPress={() => {
                onLoginValueChange('');
              }}
            >
              <Image
                style={styles.iconStyle}
                source={require("@static/images/profile/plashBootsplash.png")}
              />
            </TouchableWithoutFeedback>
          )
        }

        {loginValueErrMsg !== null && loginValueErrMsg !== '' && (
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10,
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 5,
              }}
              source={require("@static/images/invite/appleStringTopic.png")}
            />

            <Text style={styles.danger}>{loginValueErrMsg}</Text>
          </View>
        )}
      </View>

      { }
      <View style={styles.textinputContainer}>
        <TextInput
          autoCapitalize="none"
          style={[
            styles.textInpoutCommonStyle,
            referralCode === ''
              ? styles.defaultTextInputStyle
              : referralCodeErrMsg === null
                ? styles.correctTextInputStyle
                : styles.invalidTextInputStyle,
          ]}
          value={referralCode}
          onChangeText={(value) => {
            onReferralCodeChange(value);
          }}
          placeholder='邀请码 (选填)'
          placeholderTextColor='#B6B6B6'
        />

        {referralCode !== '' &&
          referralCodeErrMsg !== null && (
            <TouchableWithoutFeedback
              onPress={() => {
                onReferralCodeChange('');
              }}
            >
              <Image
                style={styles.iconStyle}
                source={require("@static/images/profile/plashBootsplash.png")}
              />
            </TouchableWithoutFeedback>
          )}

        {referralCodeErrMsg !== null && referralCodeErrMsg !== '' && (
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10,
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 5,
              }}
              source={require("@static/images/invite/appleStringTopic.png")}
            />

            <Text style={styles.danger}>{referralCodeErrMsg} </Text>
          </View>
        )}
      </View>

      { }
      <Button
        type="primary"
        disabled={loginValue === '' || loginValueErrMsg !== null || !isReadTermNCondition}
        style={[
          styles.continueButtonStyle,
          loginValue === "" || !isReadTermNCondition ? styles.btnInactive : styles.btnActive,
        ]}
        activeStyle={[
          styles.continueButtonStyle,
          loginValue === "" || !isReadTermNCondition ? styles.btnInactive : styles.btnActive,
        ]}
        onPress={onSubmit}
      >
        <Text
          style={{
            
            fontWeight: "600",
            fontSize: 14,
            letterSpacing: 0.2,
            color: loginValue === "" || !isReadTermNCondition ? "white" : 'white',
          }}
        >
          登入
        </Text>
      </Button>

      <Text style={{ fontSize: 12, color: "#9c9c9c", marginVertical: 10, }}>
        如果未注册，登入后将自动为您创建账号。
      </Text>

      <ReadAgreementPrivacyPolicy
        isReadChecked={isReadTermNCondition}
        onPress={onPressTermNCondition}
        onPressUserAgreement={() => {
          dispatch(navigateToProfileScreen());
          navigation.navigate("用户协议");
          dispatch(hideLoginAction());
        }}
        onPressPrivacyPolicy={() => {
          dispatch(navigateToProfileScreen());
          navigation.navigate("隐私政策");
          dispatch(hideLoginAction());

        }}
      />

      { }
      <TouchableOpacity
        onPress={onPressGoogleLogin}
        style={{
          backgroundColor: '#1D2023',
          padding: 8,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginRight: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <GmailIcon style={{ marginRight: 10, }} />
        <Text style={{
          flex: 1,
          textAlign: 'center',
          color: 'white',
          fontSize: 16,
        }}>
          使用Google账号登录
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const createStyles = ({ colors, dark }: any) => StyleSheet.create({
  textinputContainer: {
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'center',
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  tabItemContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  tabItemFocusText: {
    color: colors.text,
    paddingBottom: 10,
  },
  tabItemUnfocusText: {
    color: '#9c9c9c',
    paddingBottom: 10,
  },
  countryPhoneInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
  },
  phoneCodeDropdown: {
    borderRadius: 8,
    backgroundColor: "#1d2023",
    marginRight: 16,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  countryFlag: {
    width: 24,
    aspectRatio: 1,
    borderRadius: 100,
    marginRight: 10,
  },
  textInpoutCommonStyle: {
    paddingLeft: 10,
    height: 42,
    borderRadius: 8,
    fontSize: 14,
    flex: 1,
  },
  defaultTextInputStyle: {
    color: colors.text,
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
  },
  correctTextInputStyle: {
    color: colors.text,
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
  },
  invalidTextInputStyle: {
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
    borderWidth: 1,
    borderColor: "#FF1010",
    color: "#FF1010",
  },
  iconStyle: {
    height: 18,
    width: 18,
    position: "absolute",
    right: 10,
    top: 12,
  },
  continueButtonStyle: {
    width: "100%",
    height: 42,
    marginTop: 20,
    marginLeft: "-0.5%",
    borderWidth: 0,
  },
  card: {
    height: "85%",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "transparent",
    paddingBottom: 30,
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: colors.text,
    paddingBottom: 20,
  },
  subtitle: {
    fontWeight: "400",
    color: colors.text,
    textAlign: "center",
    paddingBottom: 25,
  },
  btnActive: {
    backgroundColor: colors.primary,
    color: "#000",
  },
  btnInactive: {
    
    backgroundColor: "#1d2023",
  },
  danger: {
    fontWeight: "400",
    fontSize: 14,
    textAlign: "left",
    color: "#FF3434",
  },
});
