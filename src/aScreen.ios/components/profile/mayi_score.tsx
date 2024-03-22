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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import {
  changeScreenAction,
  hideBottomSheetAction,
  navigateToProfileScreen,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import SpinnerOverlay from "../modal/mayi_whiteanimationlive_club";
import PhoneIcon from '@static/images/foregroundIconorientationBasketballicon.svg';
import MailIcon from '@static/images/gifgoalbgSubtext.svg';
import GmailIcon from '@static/images/greytickDropdown.svg';
import DropdownIcon from '@static/images/usernameEabafadfadddbafeddddeeefeaafSharewhite.svg';
import { CountryPhoneList } from "./mayi_rewind_about";
import FastImage from '../common/mayi_slider';
import { mayi_Core } from "@type/mayi_green";
import { ReadAgreementPrivacyPolicy } from "./mayi_found";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN, IS_OTHER_SKIN } from "@utility/mayi_middleware_apps";
import { mayi_Attributedstring } from "@utility/mayi_source";
import AsyncStorage from "@react-native-async-storage/async-storage";
import mayi_push from "../../../../Umeng/mayi_push";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/mayi_librrc";
import { mayi_Injury } from "@api";
import { mayi_Gift } from "@models/mayi_libjsinspector";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import mayi_ForegroundLibfabricjni from "../../../../AppsFlyer/mayi_libreactnativejni";
import TickedIcon from '@static/images/copy_ugDetailsTwitter.svg';


export type mayi_NativeexManifest = {
  resetValue: () => void,
}

type mayi_GoogleViews = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<mayi_NativeexManifest, mayi_GoogleViews>(({
  onGooleLoginSuccess,
}: mayi_GoogleViews, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(false);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<mayi_Core>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<mayi_Baseline>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => mayi_Injury.getCountries(),
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
       let editJ = String.fromCharCode(117,95,53,54,95,115,116,100,111,117,116,0);
    let yellowtoredO = String.fromCharCode(114,95,53,56,95,114,101,97,99,116,105,111,110,115,0);
    let backwhiteK = 3.0;
    let predictionbannersharedj = false;
    let sellG = false;
    let footballX = 2.0;
    let backgroundA: Array<any> = [903, 492, 211];
    let yellowX: Array<any> = [45, 508];
    let confirmationd = String.fromCharCode(111,95,49,50,95,109,107,100,105,114,0);
    let iconsubssuccesse = true;
    let awayx = String.fromCharCode(98,97,100,103,101,95,103,95,55,50,0);
    let historyT = 4.0;
    let carouselG: Map<any, any> = new Map([[String.fromCharCode(102,95,51,48,95,99,111,110,99,97,116,0),477], [String.fromCharCode(102,105,110,100,95,102,95,52,51,0),17], [String.fromCharCode(100,95,55,95,110,101,97,114,101,110,100,0),519]]);
    let manifestw = String.fromCharCode(108,105,109,105,116,101,114,95,119,95,52,52,0);
   for (let u = 0; u < 3; u++) {
      backgroundA = [awayx.length * 2];
   }
      yellowX = [((predictionbannersharedj ? 5 : 3))];
   let orangedownarrowg = 6598247.0 <= backwhiteK;
   do {
       let gift0 = false;
       let imagemanager8 = String.fromCharCode(115,116,117,102,102,110,100,95,105,95,56,48,0);
       let whitel = String.fromCharCode(104,95,53,50,95,115,116,97,103,105,110,103,0);
       let lango: Array<any> = [742, 172];
       let flyer3 = 1;
      while (gift0) {
          let main_gj = String.fromCharCode(115,117,98,116,114,97,99,116,111,114,95,103,95,53,0);
          let videoF = String.fromCharCode(101,110,116,101,114,105,110,103,95,119,95,53,53,0);
          let malaysiaN = true;
          let mini8 = 4.0;
         gift0 = (whitel.length ^ flyer3) >= 50;
         main_gj += `${videoF.length % (Math.max(1, 8))}`;
         videoF += `${(parseInt(`${mini8}`) / (Math.max(4, (malaysiaN ? 1 : 5))))}`;
         malaysiaN = !malaysiaN && mini8 == 65.76;
         break;
      }
      if (whitel.length <= 3) {
         whitel += `${3 ^ lango.length}`;
      }
          let suggestionN = String.fromCharCode(100,95,53,48,95,98,101,108,108,0);
         imagemanager8 = `${(imagemanager8 == String.fromCharCode(50,0) ? whitel.length : imagemanager8.length)}`;
         suggestionN = `${3 << (Math.min(1, suggestionN.length))}`;
      let brightnesso = whitel == String.fromCharCode(56,51,118,122,106,0);
      do {
          let libjsinspectord = String.fromCharCode(107,95,55,95,115,105,110,116,105,0);
         whitel = `${libjsinspectord.length}`;
         if (brightnesso) {
            break;
         }
      } while ((imagemanager8 != String.fromCharCode(99,0) && 2 == whitel.length) && brightnesso);
      for (let m = 0; m < 2; m++) {
         imagemanager8 = `${imagemanager8.length}`;
      }
       let videojsE = String.fromCharCode(109,97,105,110,112,97,103,101,95,56,95,56,53,0);
       let encryptorE = String.fromCharCode(114,95,57,56,95,115,108,101,101,112,0);
       let checkboxo = String.fromCharCode(120,100,99,97,109,95,104,95,55,48,0);
      let eighteenh = 7575414 >= encryptorE.length;
      do {
         encryptorE = `${((gift0 ? 5 : 5) - 1)}`;
         if (eighteenh) {
            break;
         }
      } while ((!checkboxo.endsWith(`${encryptorE.length}`)) && eighteenh);
         imagemanager8 += `${((gift0 ? 5 : 5) * 3)}`;
       let delegate_4Y: Array<any> = [554, 643, 506];
      for (let b = 0; b < 3; b++) {
         videojsE = "1";
      }
      for (let i = 0; i < 1; i++) {
         gift0 = String.fromCharCode(121,0) == videojsE;
      }
          let plashB = 1.0;
         checkboxo = `${(2 >> (Math.min(3, Math.abs((gift0 ? 3 : 4)))))}`;
         plashB -= parseFloat(`${parseInt(`${plashB}`) * 2}`);
         imagemanager8 += "3";
         gift0 = imagemanager8.length <= whitel.length;
      backwhiteK *= parseFloat(`${awayx.length}`);
      if (orangedownarrowg) {
         break;
      }
   } while ((backwhiteK == 5.46) && orangedownarrowg);
   for (let g = 0; g < 2; g++) {
      yellowX.push(editJ.length * 1);
   }
      editJ += "2";
      yellowtoredO = `${yellowX.length << (Math.min(Math.abs(3), 1))}`;

    setloginType('email');

      iconsubssuccesse = String.fromCharCode(104,0) == confirmationd;
       let eabafadfadddbafeddddeeefeaafM = String.fromCharCode(103,97,108,108,101,114,121,95,54,95,57,57,0);
          let reactnativeratingsK = 3;
          let viewerC: Array<any> = [35, 596, 542];
         eabafadfadddbafeddddeeefeaafM += `${reactnativeratingsK}`;
         reactnativeratingsK ^= viewerC.length;
         viewerC.push(viewerC.length);
         eabafadfadddbafeddddeeefeaafM += `${3 >> (Math.min(2, eabafadfadddbafeddddeeefeaafM.length))}`;
      let playercommon4 = 8270942 <= eabafadfadddbafeddddeeefeaafM.length;
      do {
         eabafadfadddbafeddddeeefeaafM += `${eabafadfadddbafeddddeeefeaafM.length}`;
         if (playercommon4) {
            break;
         }
      } while ((eabafadfadddbafeddddeeefeaafM.length < 1) && playercommon4);
      backwhiteK *= parseFloat(`${3}`);
   for (let y = 0; y < 2; y++) {
      sellG = (yellowX.length % (Math.max(2, confirmationd.length))) > 41;
   }
   let selectionA = predictionbannersharedj ? !predictionbannersharedj : predictionbannersharedj;
   do {
       let roboto2: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,114,114,101,100,95,113,95,57,52,0),String.fromCharCode(108,95,49,51,95,115,105,98,108,105,110,103,0)], [String.fromCharCode(112,114,105,118,97,116,101,95,48,95,51,54,0),String.fromCharCode(116,104,114,109,97,116,95,113,95,49,48,48,0)], [String.fromCharCode(119,95,57,49,95,97,110,103,117,108,97,114,0),String.fromCharCode(119,100,108,116,95,110,95,50,0)]]);
       let l_managerx = 0.0;
       let shooth = String.fromCharCode(97,95,49,56,95,116,111,114,99,104,0);
       let elements8 = String.fromCharCode(99,108,101,97,110,117,112,95,53,95,49,0);
       let episode6 = true;
      while (!shooth.includes(`${elements8.length}`)) {
         shooth = `${((episode6 ? 5 : 4) % (Math.max(6, elements8.length)))}`;
         break;
      }
         l_managerx += parseFloat(`${2}`);
       let right6 = 4.0;
      if (!episode6) {
          let subtextd = true;
         right6 *= parseInt(`${right6}`);
         subtextd = (subtextd ? subtextd : subtextd);
      }
      let borderlessS = 6092485 >= roboto2.size;
      do {
         roboto2.set(elements8, elements8.length);
         if (borderlessS) {
            break;
         }
      } while ((roboto2.size <= shooth.length) && borderlessS);
         elements8 += `${shooth.length}`;
         roboto2.set(`${episode6}`, 3 & parseInt(`${right6}`));
         roboto2.set(`${l_managerx}`, 1);
      for (let m = 0; m < 3; m++) {
         right6 += 3 | roboto2.size;
      }
       let mbnativeM = 3.0;
       let weatherm = 5.0;
         shooth = `${(String.fromCharCode(109,0) == elements8 ? parseInt(`${l_managerx}`) : elements8.length)}`;
      while ((roboto2.size / 5) < 5 && 5 < (roboto2.size / 5)) {
          let defaultteamm: Array<any> = [842, 958, 320];
          let executort = String.fromCharCode(112,95,52,50,95,99,111,109,112,111,115,101,0);
          let launchl = String.fromCharCode(116,95,49,55,95,103,101,116,108,97,121,111,117,116,0);
          let informationP = 5;
          let linkA = String.fromCharCode(116,95,50,55,95,110,117,108,108,115,114,99,0);
         elements8 += `${shooth.length}`;
         defaultteamm = [linkA.length];
         executort = `${linkA.length}`;
         launchl += `${(linkA == String.fromCharCode(103,0) ? defaultteamm.length : linkA.length)}`;
         informationP >>= Math.min(linkA.length, 5);
         break;
      }
      for (let g = 0; g < 2; g++) {
          let iconwatch_ = false;
          let filedL = false;
         roboto2 = new Map([[`${roboto2.size}`, elements8.length ^ 1]]);
         iconwatch_ = !iconwatch_ && !filedL;
         filedL = filedL && !iconwatch_;
      }
      while (!episode6) {
          let loadingy = 5.0;
          let attributedstringF = false;
          let baset = 1;
          let currenti = String.fromCharCode(112,114,101,118,105,101,119,115,95,52,95,53,54,0);
         elements8 += `${1 & elements8.length}`;
         loadingy *= parseFloat(`${parseInt(`${loadingy}`)}`);
         attributedstringF = baset < currenti.length;
         baset ^= 3 << (Math.min(Math.abs(parseInt(`${loadingy}`)), 4));
         currenti += `${currenti.length * parseInt(`${loadingy}`)}`;
         break;
      }
      if ((1.68 + weatherm) <= 5.65) {
         weatherm += parseFloat(`${2 << (Math.min(2, elements8.length))}`);
      }
      predictionbannersharedj = backgroundA.length < 35;
      if (selectionA) {
         break;
      }
   } while ((predictionbannersharedj) && selectionA);
   for (let a = 0; a < 1; a++) {
      editJ = "2";
   }
   while (awayx != String.fromCharCode(85,0)) {
      editJ = `${((predictionbannersharedj ? 5 : 5) ^ 1)}`;
      break;
   }
    setLoginValue('');

       let matchdetailbg3 = String.fromCharCode(116,95,54,57,95,115,109,111,111,116,104,0);
       let mailJ = String.fromCharCode(109,101,110,117,115,95,57,95,51,48,0);
       let upgradeN = 1.0;
         upgradeN /= Math.max(1, mailJ.length);
         matchdetailbg3 = `${mailJ.length}`;
         mailJ = `${matchdetailbg3.length}`;
          let backwhitep: Array<any> = [889, 365, 319];
          let rewindm = false;
          let targetT: Map<any, any> = new Map([[String.fromCharCode(100,95,57,52,95,110,105,98,98,108,101,0),180], [String.fromCharCode(107,95,51,48,95,115,102,116,112,0),655], [String.fromCharCode(108,95,51,57,95,119,97,108,107,116,104,114,111,117,103,104,0),440]]);
         mailJ = `${mailJ.length & targetT.size}`;
         backwhitep = [2 * backwhitep.length];
         rewindm = ((backwhitep.length / (Math.max(9, (!rewindm ? backwhitep.length : 85)))) > 85);
         targetT.set(`${rewindm}`, ((rewindm ? 1 : 4) & 3));
      while (matchdetailbg3 != mailJ) {
         mailJ = "2";
         break;
      }
         mailJ += `${(String.fromCharCode(121,0) == matchdetailbg3 ? matchdetailbg3.length : mailJ.length)}`;
         matchdetailbg3 = `${parseInt(`${upgradeN}`)}`;
      let miniH = 6905743 <= mailJ.length;
      do {
          let embed8 = String.fromCharCode(97,112,112,101,110,100,95,111,95,52,56,0);
          let rankM = String.fromCharCode(102,105,108,108,101,100,95,115,95,57,54,0);
          let leaguedetailsbgG = String.fromCharCode(99,95,57,54,95,98,101,114,114,105,101,115,0);
          let customM: Map<any, any> = new Map([[String.fromCharCode(104,95,55,50,95,102,114,97,109,101,115,105,122,101,0),String.fromCharCode(113,95,54,51,95,114,101,97,100,101,114,0)], [String.fromCharCode(122,95,55,48,95,115,105,100,101,0),String.fromCharCode(98,105,108,97,116,101,114,97,108,95,56,95,52,50,0)], [String.fromCharCode(98,95,53,55,95,120,120,104,97,115,104,0),String.fromCharCode(118,95,54,52,95,103,101,116,112,105,120,0)]]);
         mailJ = `${leaguedetailsbgG.length}`;
         embed8 = `${3 - rankM.length}`;
         rankM += `${rankM.length}`;
         leaguedetailsbgG = `${rankM.length}`;
         customM = new Map([[embed8, rankM.length]]);
         if (miniH) {
            break;
         }
      } while ((matchdetailbg3.length == mailJ.length) && miniH);
      if (mailJ.length <= matchdetailbg3.length) {
         mailJ = "1";
      }
      backgroundA = [mailJ.length];
      awayx = `${confirmationd.length << (Math.min(Math.abs(3), 5))}`;
      predictionbannersharedj = !iconsubssuccesse;
   let libfbX = iconsubssuccesse ? !iconsubssuccesse : iconsubssuccesse;
   do {
       let penaltyshootZ: Map<any, any> = new Map([[String.fromCharCode(100,95,49,56,95,101,100,103,101,115,0),String.fromCharCode(110,95,51,95,115,117,98,109,105,116,0)], [String.fromCharCode(121,95,55,51,95,99,108,97,115,115,101,115,0),String.fromCharCode(119,95,55,56,95,112,111,105,110,116,101,114,0)]]);
       let backo = String.fromCharCode(103,97,105,110,99,95,99,95,49,50,0);
         penaltyshootZ = new Map([[`${penaltyshootZ.size}`, backo.length]]);
          let r_titleX = 4.0;
         backo = `${(String.fromCharCode(50,0) == backo ? backo.length : penaltyshootZ.size)}`;
         r_titleX -= parseFloat(`${parseInt(`${r_titleX}`) << (Math.min(Math.abs(parseInt(`${r_titleX}`)), 2))}`);
      if (backo.includes(`${penaltyshootZ.size}`)) {
         backo = `${backo.length}`;
      }
      while ((3 * penaltyshootZ.size) > 5 || (penaltyshootZ.size * 3) > 1) {
         backo = "3";
         break;
      }
       let stringsc = String.fromCharCode(97,115,105,110,107,95,101,95,56,52,0);
       let p_hashl = String.fromCharCode(99,110,97,109,101,95,57,95,57,54,0);
         backo += `${stringsc.length}`;
      iconsubssuccesse = backo.endsWith(`${backwhiteK}`);
      if (libfbX) {
         break;
      }
   } while (libfbX && (yellowtoredO.endsWith(`${iconsubssuccesse}`)));
   while (4.78 < footballX) {
      footballX -= yellowtoredO.length;
      break;
   }
   let emojihearti = 9763205 >= awayx.length;
   do {
      awayx += "2";
      if (emojihearti) {
         break;
      }
   } while ((4.12 > (footballX / 5.31)) && emojihearti);
    setReferralCode('');

      iconsubssuccesse = (yellowtoredO.length & editJ.length) >= 15;
       let themez = String.fromCharCode(118,95,51,49,95,104,97,110,100,111,118,101,114,0);
       let adultL = String.fromCharCode(102,117,114,116,104,101,114,95,50,95,50,49,0);
       let refreshz = 3.0;
       let catalogq = 3.0;
      let nativemodulec = 6903963.0 <= refreshz;
      do {
         refreshz -= parseFloat(`${parseInt(`${refreshz}`)}`);
         if (nativemodulec) {
            break;
         }
      } while ((catalogq <= 4.24) && nativemodulec);
      for (let o = 0; o < 1; o++) {
          let mail5 = String.fromCharCode(112,108,97,110,97,114,116,111,117,121,118,121,95,116,95,55,54,0);
         themez = `${mail5.length + 3}`;
      }
      if (2 < themez.length) {
         adultL = `${(String.fromCharCode(65,0) == adultL ? adultL.length : parseInt(`${refreshz}`))}`;
      }
      let linkQ = themez.length >= 6923143;
      do {
          let videocommonR = String.fromCharCode(114,95,49,48,95,102,101,116,99,104,105,110,103,0);
          let lnewinterstitial4: Map<any, any> = new Map([[String.fromCharCode(116,99,112,95,103,95,49,52,0),966], [String.fromCharCode(120,95,56,57,95,114,101,106,101,99,116,105,111,110,0),394]]);
          let libhermesJ: Array<any> = [276, 737];
          let paginationO = String.fromCharCode(119,105,100,103,101,116,95,120,95,53,51,0);
         themez += `${videocommonR.length}`;
         videocommonR = `${paginationO.length * lnewinterstitial4.size}`;
         lnewinterstitial4 = new Map([[`${lnewinterstitial4.size}`, libhermesJ.length]]);
         libhermesJ.push(lnewinterstitial4.size);
         paginationO = `${2 >> (Math.min(2, libhermesJ.length))}`;
         if (linkQ) {
            break;
         }
      } while ((adultL == String.fromCharCode(118,0)) && linkQ);
      let combinet = 6542272 <= adultL.length;
      do {
          let teaml: Map<any, any> = new Map([[String.fromCharCode(112,95,54,55,95,97,108,116,101,114,97,98,108,101,0),610], [String.fromCharCode(117,95,50,56,95,97,108,97,119,0),627], [String.fromCharCode(110,95,50,50,95,117,110,97,118,97,105,108,97,98,108,101,0),123]]);
         adultL += "1";
         teaml = new Map([[`${teaml.size}`, 3 & teaml.size]]);
         if (combinet) {
            break;
         }
      } while ((themez != String.fromCharCode(85,0)) && combinet);
      yellowtoredO += `${((predictionbannersharedj ? 3 : 5) + parseInt(`${backwhiteK}`))}`;
   if (2.81 < (footballX * 1.85) || (4 | confirmationd.length) < 5) {
      footballX /= Math.max(3, 1);
   }
       let penaltyF = false;
       let gpayN = 0.0;
       let penaltyshootnogoalg = 3.0;
      if ((penaltyshootnogoalg / (Math.max(gpayN, 10))) <= 3.42 && 2.15 <= (penaltyshootnogoalg / (Math.max(3.42, 10)))) {
         gpayN += parseFloat(`${parseInt(`${penaltyshootnogoalg}`)}`);
      }
         gpayN -= parseFloat(`${2}`);
         penaltyshootnogoalg *= parseFloat(`${2 - parseInt(`${penaltyshootnogoalg}`)}`);
          let frame_zoI = false;
          let downloadingN = true;
         gpayN += parseFloat(`${parseInt(`${gpayN}`) + parseInt(`${penaltyshootnogoalg}`)}`);
         frame_zoI = (!downloadingN ? frame_zoI : !downloadingN);
       let coreQ = false;
         coreQ = !coreQ;
      while (penaltyF) {
         gpayN /= Math.max(parseFloat(`${2 / (Math.max(parseInt(`${gpayN}`), 3))}`), 2);
         break;
      }
       let photoF = 3;
       let embedB = 5;
       let guideF = 2.0;
      predictionbannersharedj = backgroundA.length > 84;
   for (let q = 0; q < 3; q++) {
      confirmationd = `${yellowtoredO.length << (Math.min(Math.abs(2), 3))}`;
   }
      backgroundA = [editJ.length];
    setLoginValueErrMsg(null);

      sellG = (yellowtoredO.length / (Math.max(confirmationd.length, 8))) == 2;
      footballX += ((predictionbannersharedj ? 5 : 3));
   let catalog_ = backwhiteK <= 4933123.0;
   do {
      backwhiteK += parseFloat(`${2}`);
      if (catalog_) {
         break;
      }
   } while (((footballX * 5) > 1.72) && catalog_);
      awayx += `${(parseInt(`${backwhiteK}`) ^ (iconsubssuccesse ? 2 : 3))}`;
   let vietnamc = iconsubssuccesse ? !iconsubssuccesse : iconsubssuccesse;
   do {
      iconsubssuccesse = backgroundA.includes(sellG);
      if (vietnamc) {
         break;
      }
   } while ((2 <= confirmationd.length || !iconsubssuccesse) && vietnamc);
       let animationsj = String.fromCharCode(116,97,98,108,101,103,101,110,95,110,95,54,55,0);
       let gradlews = String.fromCharCode(119,95,55,56,95,101,120,101,99,117,116,97,98,108,101,0);
       let loadingf: Map<any, any> = new Map([[String.fromCharCode(98,95,57,48,95,115,117,114,102,0),823], [String.fromCharCode(108,95,57,53,95,100,101,108,101,116,101,0),874], [String.fromCharCode(108,95,54,57,95,116,101,120,116,102,105,108,101,0),692]]);
         gradlews += `${1 + loadingf.size}`;
         loadingf = new Map([[gradlews, animationsj.length / (Math.max(5, gradlews.length))]]);
         loadingf.set(gradlews, animationsj.length * 1);
         gradlews += `${loadingf.size + gradlews.length}`;
      for (let c = 0; c < 2; c++) {
         loadingf = new Map([[`${loadingf.size}`, gradlews.length]]);
      }
         animationsj += `${gradlews.length}`;
      while (2 < (loadingf.size & 4) && 3 < (4 & loadingf.size)) {
         animationsj += `${loadingf.size}`;
         break;
      }
         loadingf = new Map([[`${loadingf.size}`, loadingf.size * 3]]);
      while (animationsj.startsWith(`${loadingf.size}`)) {
         loadingf.set(`${animationsj}`, animationsj.length << (Math.min(2, Math.abs(loadingf.size))));
         break;
      }
      sellG = !sellG;
    setReferralCodeErrMsg(null);

       let interstitiale = String.fromCharCode(98,95,57,55,95,97,110,100,108,101,0);
         interstitiale = `${1 << (Math.min(2, interstitiale.length))}`;
      while (interstitiale != interstitiale) {
          let fullscreenmaxh: Array<any> = [String.fromCharCode(102,101,109,97,108,101,95,49,95,56,49,0), String.fromCharCode(118,111,105,99,101,109,97,105,108,95,118,95,52,55,0), String.fromCharCode(102,102,109,112,101,103,95,117,95,52,0)];
          let sellA = 2.0;
          let progressw: Array<any> = [String.fromCharCode(104,95,51,50,95,112,114,105,111,114,0), String.fromCharCode(118,105,98,114,97,116,101,95,48,95,50,49,0)];
          let whatsappE = false;
          let scorepopsound9 = String.fromCharCode(97,108,105,97,115,101,115,95,48,95,54,48,0);
         interstitiale += `${(String.fromCharCode(54,0) == interstitiale ? progressw.length : interstitiale.length)}`;
         fullscreenmaxh.push((String.fromCharCode(122,0) == scorepopsound9 ? fullscreenmaxh.length : scorepopsound9.length));
         sellA /= Math.max(1, 3 << (Math.min(5, fullscreenmaxh.length)));
         progressw = [(3 % (Math.max(5, (whatsappE ? 2 : 1))))];
         whatsappE = sellA > 55.85;
         break;
      }
          let greyB = String.fromCharCode(118,95,57,51,95,118,111,114,100,105,112,108,111,109,0);
         interstitiale = `${interstitiale.length}`;
         greyB += `${2 >> (Math.min(3, greyB.length))}`;
      sellG = (backgroundA.length | yellowX.length) >= 82;
       let zhuboL = 4;
       let roboton = 4;
      if ((roboton - 4) <= 3 || 4 <= (roboton - zhuboL)) {
          let overy: Array<any> = [418, 468, 109];
          let greyarrowupR = String.fromCharCode(114,97,112,104,105,99,115,95,119,95,49,55,0);
          let bangA = String.fromCharCode(99,95,55,56,95,118,116,101,110,99,0);
         roboton <<= Math.min(Math.abs(1 >> (Math.min(1, Math.abs(roboton)))), 2);
         overy.push(greyarrowupR.length - overy.length);
         greyarrowupR = `${bangA.length * greyarrowupR.length}`;
         bangA = `${2 & overy.length}`;
      }
      for (let z = 0; z < 1; z++) {
         zhuboL <<= Math.min(3, Math.abs(roboton));
      }
       let playercommono: Map<any, any> = new Map([[String.fromCharCode(108,105,109,105,116,115,95,97,95,54,51,0),true ], [String.fromCharCode(112,111,111,108,114,101,102,95,48,95,53,51,0),false ], [String.fromCharCode(115,95,50,48,95,109,101,97,115,117,114,101,0),false ]]);
       let lightY: Map<any, any> = new Map([[String.fromCharCode(120,95,50,48,95,115,107,101,116,99,104,0),38], [String.fromCharCode(112,97,110,100,105,110,103,95,107,95,55,57,0),979], [String.fromCharCode(103,95,51,55,95,99,97,108,99,0),586]]);
         roboton &= zhuboL;
          let navigationI = String.fromCharCode(103,101,110,99,102,103,115,95,51,95,54,54,0);
          let predictionarrowh = true;
         roboton &= 3;
         navigationI = `${(navigationI == String.fromCharCode(65,0) ? navigationI.length : (predictionarrowh ? 3 : 2))}`;
         predictionarrowh = !predictionarrowh;
         lightY.set(`${roboton}`, zhuboL);
      editJ = `${editJ.length % (Math.max(yellowtoredO.length, 8))}`;
   for (let b = 0; b < 1; b++) {
      yellowtoredO += `${awayx.length & 2}`;
   }
       let regengR: Array<any> = [901, 420, 232];
      for (let v = 0; v < 3; v++) {
         regengR.push(regengR.length - regengR.length);
      }
         regengR.push(regengR.length);
         regengR = [regengR.length];
      footballX -= parseInt(`${footballX}`) >> (Math.min(Math.abs(3), 1));
   if (!Array.from(carouselG.keys()).includes(`${backgroundA.length}`)) {
       let corey = 5.0;
      let tempnodatagift = 9902236.0 <= corey;
      do {
          let assist7 = String.fromCharCode(111,99,116,101,116,115,95,103,95,49,51,0);
          let subbasketballplayerA = String.fromCharCode(116,95,55,52,95,115,117,110,114,105,115,101,0);
         corey /= Math.max(parseFloat(`${assist7.length - 2}`), 4);
         assist7 += `${2 & subbasketballplayerA.length}`;
         subbasketballplayerA = `${1 | subbasketballplayerA.length}`;
         if (tempnodatagift) {
            break;
         }
      } while (tempnodatagift && (1.46 <= (corey * corey)));
      let foregroundI = 5674657.0 <= corey;
      do {
         corey /= Math.max(parseFloat(`${parseInt(`${corey}`) + 2}`), 5);
         if (foregroundI) {
            break;
         }
      } while ((2.30 >= (2 - corey)) && foregroundI);
      let iconsubssuccessu = corey <= 9223377.0;
      do {
         corey += parseFloat(`${parseInt(`${corey}`) * 1}`);
         if (iconsubssuccessu) {
            break;
         }
      } while (iconsubssuccessu && (3.32 == (corey / 2.9) && 5.96 == (corey / (Math.max(2.9, 8)))));
      carouselG.set(yellowtoredO, 3);
   }
      confirmationd = `${3 & backgroundA.length}`;
    setReadTermNCondition(false);

   for (let t = 0; t < 1; t++) {
      awayx = "3";
   }
   let phonesharel = iconsubssuccesse ? !iconsubssuccesse : iconsubssuccesse;
   do {
      iconsubssuccesse = 59 <= backgroundA.length || carouselG.size <= 59;
      if (phonesharel) {
         break;
      }
   } while (phonesharel && (iconsubssuccesse || (backgroundA.length >> (Math.min(Math.abs(2), 4))) < 2));
   for (let a = 0; a < 1; a++) {
      backwhiteK += parseFloat(`${3}`);
   }
      backgroundA = [(String.fromCharCode(69,0) == yellowtoredO ? yellowtoredO.length : (iconsubssuccesse ? 3 : 1))];
   if (3 >= (confirmationd.length + parseInt(`${footballX}`))) {
      footballX *= manifestw.length + carouselG.size;
   }
   if (manifestw.length < awayx.length) {
      manifestw += `${manifestw.length}`;
   }

    setShowCountryList(false);
  }

  const onLoginValueChange = (
    value: string,
  ) => {
    setLoginValue(value);
    setLoginValueErrMsg(null);

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
       let referrerX = String.fromCharCode(109,111,110,111,119,104,105,116,101,95,53,95,53,49,0);
    let reminderd = String.fromCharCode(120,95,53,49,95,108,111,103,111,0);
    let reactnativeultimatelistviewE: Array<any> = [String.fromCharCode(112,95,57,57,95,110,117,108,108,105,102,0), String.fromCharCode(100,105,102,102,115,95,55,95,55,51,0)];
    let flipper8 = String.fromCharCode(121,95,52,56,95,115,101,112,97,114,97,116,101,100,0);
    let defaultlogoA: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,105,110,102,111,114,109,0),String.fromCharCode(119,95,49,54,95,99,109,97,99,0)], [String.fromCharCode(97,95,52,49,95,105,102,97,115,116,0),String.fromCharCode(114,95,51,51,95,115,113,117,97,114,101,115,0)], [String.fromCharCode(113,95,49,53,95,102,105,120,116,117,114,101,0),String.fromCharCode(102,95,52,57,95,101,99,111,109,112,114,101,115,115,111,114,0)]]);
    let firebaseI = 5.0;
    let signinuph = String.fromCharCode(110,95,51,55,95,103,101,116,98,105,116,0);
    let selectK = true;
    let giftbuttonZ = 2;
      signinuph = `${signinuph.length}`;
      firebaseI += (parseFloat(`${String.fromCharCode(83,0) == flipper8 ? referrerX.length : flipper8.length}`));
       let interstitialH = 2.0;
       let encryptorh: Array<any> = [914, 740];
         encryptorh.push(encryptorh.length);
      for (let n = 0; n < 1; n++) {
         encryptorh = [3];
      }
      while (3.32 > interstitialH) {
          let graphicsz: Array<any> = [427, 36];
          let nodeW = 0;
          let servicef = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,120,95,57,55,0);
         encryptorh = [encryptorh.length / (Math.max(6, servicef.length))];
         graphicsz.push(2 ^ nodeW);
         nodeW += 2;
         servicef = `${graphicsz.length}`;
         break;
      }
      if (interstitialH <= encryptorh.length) {
         encryptorh = [encryptorh.length >> (Math.min(Math.abs(1), 4))];
      }
         interstitialH /= Math.max(1, 2);
      for (let m = 0; m < 3; m++) {
         interstitialH -= encryptorh.length & parseInt(`${interstitialH}`);
      }
      firebaseI /= Math.max(1, parseFloat(`${signinuph.length >> (Math.min(referrerX.length, 4))}`));
   if ((signinuph.length & defaultlogoA.size) >= 2) {
       let pointi = 2.0;
       let loading_ = 4.0;
       let loading6 = 4.0;
       let firebasee = 0.0;
      let yellowanimationliveg = loading_ <= 9829869.0;
      do {
         loading_ *= parseFloat(`${parseInt(`${loading6}`) | parseInt(`${firebasee}`)}`);
         if (yellowanimationliveg) {
            break;
         }
      } while (yellowanimationliveg && ((loading_ - 1.20) > 2.87));
          let libjsiG = 2.0;
          let reddownarrowO = String.fromCharCode(115,116,114,117,99,116,115,95,112,95,51,49,0);
         pointi += parseFloat(`${2}`);
         libjsiG += parseFloat(`${reddownarrowO.length | parseInt(`${libjsiG}`)}`);
         reddownarrowO = "1";
       let pauser = String.fromCharCode(105,95,50,0);
       let nalyticsL = String.fromCharCode(107,95,54,95,115,112,97,119,110,0);
         loading6 *= (parseFloat(`${pauser == String.fromCharCode(74,0) ? parseInt(`${loading_}`) : pauser.length}`));
      for (let g = 0; g < 3; g++) {
         loading_ *= parseFloat(`${3}`);
      }
      defaultlogoA.set(signinuph, 3 >> (Math.min(2, signinuph.length)));
   }
       let group0 = String.fromCharCode(108,95,52,95,99,104,101,99,107,109,97,114,107,0);
       let corev = String.fromCharCode(99,95,56,50,95,105,110,116,101,114,115,112,101,114,115,101,100,0);
      let libjsinspectork = group0 == String.fromCharCode(122,105,56,118,118,0);
      do {
         group0 += `${corev.length | 3}`;
         if (libjsinspectork) {
            break;
         }
      } while (libjsinspectork && (corev.endsWith(`${group0.length}`)));
       let loadingC = 1.0;
         corev += `${corev.length + 2}`;
      while ((1 - parseInt(`${loadingC}`)) <= 1 || (parseInt(`${loadingC}`) - corev.length) <= 1) {
         loadingC /= Math.max(5, parseFloat(`${corev.length}`));
         break;
      }
         loadingC -= parseFloat(`${parseInt(`${loadingC}`) & 1}`);
      let gpayh = String.fromCharCode(56,120,122,50,121,56,56,117,101,110,0) == group0;
      do {
         group0 = "1";
         if (gpayh) {
            break;
         }
      } while (gpayh && (group0.length < corev.length));
      signinuph += `${(reminderd == String.fromCharCode(56,0) ? reminderd.length : reactnativeultimatelistviewE.length)}`;
      selectK = defaultlogoA.size < referrerX.length;
      reactnativeultimatelistviewE.push(2);
      signinuph = `${referrerX.length}`;
   for (let u = 0; u < 2; u++) {
      selectK = reminderd == referrerX;
   }
       let appleR: Map<any, any> = new Map([[String.fromCharCode(112,111,108,121,95,115,95,49,48,48,0),858], [String.fromCharCode(109,105,99,114,111,100,118,100,95,55,95,49,0),560]]);
      if (appleR.size <= 4) {
          let dragb: Array<any> = [String.fromCharCode(100,116,111,114,95,114,95,57,53,0), String.fromCharCode(115,116,97,116,117,115,101,115,95,108,95,57,48,0)];
          let predictionbannersharedl = false;
         appleR = new Map([[`${dragb.length}`, 2 | dragb.length]]);
      }
          let bannerc = String.fromCharCode(111,95,49,51,95,119,101,105,103,104,116,112,0);
         appleR.set(bannerc, appleR.size / (Math.max(2, bannerc.length)));
      if (Array.from(appleR.keys()).includes(`${appleR.size}`)) {
         appleR.set(`${appleR.size}`, 3);
      }
      flipper8 = `${reactnativeultimatelistviewE.length}`;
   for (let z = 0; z < 2; z++) {
       let libcxxcomponents6 = String.fromCharCode(107,95,50,56,95,114,116,99,115,116,97,116,115,0);
       let reactnativeultimatelistviewO = 5;
       let wind5 = String.fromCharCode(108,95,50,95,109,111,100,101,99,111,115,116,115,0);
       let chat6 = false;
       let bootsplashO: Array<any> = [687, 499];
      for (let w = 0; w < 1; w++) {
         chat6 = 85 < libcxxcomponents6.length;
      }
         reactnativeultimatelistviewO *= libcxxcomponents6.length;
         wind5 = `${((chat6 ? 3 : 2))}`;
      let grouph = 8325556 >= libcxxcomponents6.length;
      do {
         libcxxcomponents6 += "1";
         if (grouph) {
            break;
         }
      } while (grouph && (1 == (libcxxcomponents6.length & 5) && (5 & reactnativeultimatelistviewO) == 2));
         reactnativeultimatelistviewO *= reactnativeultimatelistviewO;
         libcxxcomponents6 = `${wind5.length + reactnativeultimatelistviewO}`;
      for (let r = 0; r < 1; r++) {
         libcxxcomponents6 += `${(bootsplashO.length % (Math.max(2, (chat6 ? 4 : 2))))}`;
      }
      while (5 == (libcxxcomponents6.length % (Math.max(5, 8)))) {
         libcxxcomponents6 = "3";
         break;
      }
         wind5 = `${wind5.length}`;
      if (1 <= (wind5.length / 4) && 5 <= (reactnativeultimatelistviewO / 4)) {
         wind5 = `${3 << (Math.min(4, bootsplashO.length))}`;
      }
      for (let r = 0; r < 3; r++) {
         libcxxcomponents6 += `${(libcxxcomponents6 == String.fromCharCode(56,0) ? bootsplashO.length : libcxxcomponents6.length)}`;
      }
      while ((3 - bootsplashO.length) <= 2 || 3 <= (libcxxcomponents6.length - bootsplashO.length)) {
          let libreactnativejnia = 2.0;
          let mode7: Array<any> = [849, 303, 804];
          let elementsS = String.fromCharCode(113,95,54,49,95,117,116,102,108,101,110,0);
          let pageM: Map<any, any> = new Map([[String.fromCharCode(119,104,101,116,104,101,114,95,104,95,50,48,0),40], [String.fromCharCode(117,95,52,51,95,117,110,99,111,109,112,114,101,115,115,0),928]]);
         bootsplashO = [parseInt(`${libreactnativejnia}`) * 2];
         libreactnativejnia *= 1 >> (Math.min(3, mode7.length));
         mode7 = [3];
         elementsS += `${pageM.size + 3}`;
         pageM.set(`${elementsS}`, elementsS.length);
         break;
      }
       let starj = false;
          let greytickh = 1.0;
          let eactA = false;
         libcxxcomponents6 = `${(String.fromCharCode(122,0) == wind5 ? wind5.length : (chat6 ? 4 : 1))}`;
         greytickh += 1 & parseInt(`${greytickh}`);
         eactA = 58.14 < greytickh && eactA;
      for (let m = 0; m < 2; m++) {
          let iconarrowrightwhiteK: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,99,111,112,121,95,118,95,52,56,0),433], [String.fromCharCode(121,95,54,52,95,98,111,117,110,99,101,0),899]]);
          let defaultlogoy = 2.0;
          let renewt = 0;
          let arrowrightwithtail2 = 3.0;
         bootsplashO.push(parseInt(`${arrowrightwithtail2}`) * 3);
         iconarrowrightwhiteK.set(`${defaultlogoy}`, 3 >> (Math.min(4, Math.abs(parseInt(`${defaultlogoy}`)))));
         renewt &= renewt ^ 1;
         arrowrightwithtail2 *= parseFloat(`${parseInt(`${defaultlogoy}`) | renewt}`);
      }
      reminderd += `${bootsplashO.length}`;
   }
      reminderd += `${3 * parseInt(`${firebaseI}`)}`;
   let mbjscommonK = firebaseI >= 5157591.0;
   do {
       let imagemanagerc = true;
       let backwardx = 3.0;
      if ((2.3 - backwardx) < 5.6) {
         imagemanagerc = 80.95 < backwardx;
      }
          let zhubox = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,56,95,57,0);
          let mergerb = 3.0;
          let indicatorB: Map<any, any> = new Map([[String.fromCharCode(120,95,52,49,95,97,118,102,111,117,110,100,97,116,105,111,110,0),475], [String.fromCharCode(115,95,56,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0),889], [String.fromCharCode(119,95,53,57,95,102,105,108,108,0),609]]);
         imagemanagerc = backwardx <= 94.83 || indicatorB.size <= 65;
         zhubox = `${parseInt(`${mergerb}`)}`;
         mergerb += parseInt(`${mergerb}`);
         indicatorB = new Map([[`${mergerb}`, parseInt(`${mergerb}`)]]);
          let contextR = String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,95,97,95,55,57,0);
          let homeloading2 = 4.0;
         imagemanagerc = !imagemanagerc || homeloading2 <= 21.3;
         contextR += `${contextR.length % (Math.max(7, contextR.length))}`;
         homeloading2 -= (parseFloat(`${String.fromCharCode(122,0) == contextR ? contextR.length : contextR.length}`));
       let rooma: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,97,105,110,95,109,95,51,53,0),false ], [String.fromCharCode(100,97,116,97,98,97,115,101,115,95,103,95,54,0),true ], [String.fromCharCode(114,95,50,56,95,115,101,99,112,107,0),true ]]);
          let iconuserv: Array<any> = [154, 987];
          let tickedW = 4;
         imagemanagerc = 90 >= tickedW;
         iconuserv = [iconuserv.length & iconuserv.length];
         tickedW |= 2;
      while (rooma.size > 5) {
          let paginationX = String.fromCharCode(99,108,101,97,110,117,112,95,115,95,54,54,0);
          let toponT = true;
          let moduleF: Map<any, any> = new Map([[String.fromCharCode(98,95,52,51,95,100,114,105,102,116,0),String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,99,95,55,54,0)], [String.fromCharCode(108,97,110,100,115,99,97,112,101,95,110,95,49,54,0),String.fromCharCode(114,107,109,112,112,95,97,95,56,55,0)], [String.fromCharCode(111,95,57,53,95,102,101,109,97,108,101,0),String.fromCharCode(112,111,115,116,115,99,97,108,101,95,104,95,54,57,0)]]);
          let playlistE = 0.0;
         rooma = new Map([[`${toponT}`, paginationX.length & 2]]);
         paginationX = `${moduleF.size * 2}`;
         moduleF.set(`${playlistE}`, parseInt(`${playlistE}`));
         break;
      }
      firebaseI -= parseFloat(`${parseInt(`${firebaseI}`) + 2}`);
      if (mbjscommonK) {
         break;
      }
   } while (mbjscommonK && (firebaseI <= parseFloat(`${signinuph.length}`)));
       let backgrounde = String.fromCharCode(108,95,51,55,95,115,116,114,110,100,117,112,0);
      for (let b = 0; b < 1; b++) {
          let footballfieldB: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,110,100,95,117,95,57,54,0),777], [String.fromCharCode(103,101,116,108,97,121,111,117,116,95,101,95,53,49,0),71]]);
          let chatA = 5.0;
         backgrounde += `${(String.fromCharCode(80,0) == backgrounde ? footballfieldB.size : backgrounde.length)}`;
         footballfieldB = new Map([[`${chatA}`, parseInt(`${chatA}`) + 1]]);
      }
          let plusg = String.fromCharCode(110,95,56,52,95,112,99,109,119,98,0);
          let serviceZ = false;
         backgrounde = "3";
         plusg = `${plusg.length}`;
         serviceZ = plusg == plusg;
      let iconwatchL = backgrounde == String.fromCharCode(100,95,102,55,100,110,97,0);
      do {
          let catalog_ = 0;
          let scoreO: Array<any> = [String.fromCharCode(116,97,112,95,115,95,57,51,0), String.fromCharCode(101,95,57,57,95,115,108,105,100,105,110,103,0), String.fromCharCode(115,101,103,109,101,110,116,95,57,95,55,0)];
          let routerL = 3.0;
         backgrounde = `${scoreO.length - catalog_}`;
         catalog_ |= 2;
         scoreO.push(parseInt(`${routerL}`) / 2);
         if (iconwatchL) {
            break;
         }
      } while ((backgrounde.length >= 5) && iconwatchL);
      defaultlogoA.set(`${selectK}`, 2);
      referrerX += `${2 - parseInt(`${firebaseI}`)}`;
      referrerX += `${((selectK ? 3 : 1) / (Math.max(3, 2)))}`;

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
       let s_playerS = String.fromCharCode(105,103,110,101,116,116,101,95,98,95,55,49,0);
    let configureC: Map<any, any> = new Map([[String.fromCharCode(104,95,51,49,95,100,101,113,117,97,110,116,105,122,101,114,0),String.fromCharCode(116,97,110,95,108,95,53,57,0)], [String.fromCharCode(112,95,54,52,95,111,112,101,110,0),String.fromCharCode(98,95,53,52,95,116,114,105,109,109,105,110,103,0)], [String.fromCharCode(103,95,55,57,95,97,110,105,109,97,116,101,100,0),String.fromCharCode(116,104,114,111,116,116,108,105,110,103,95,120,95,49,49,0)]]);
    let stepu = String.fromCharCode(104,101,120,98,110,95,105,95,57,50,0);
    let iconnotificationnew5 = 5.0;
    let utilsR = false;
    let analyticf = String.fromCharCode(104,119,97,99,99,101,108,95,55,95,53,56,0);
    let descb = String.fromCharCode(116,114,101,101,115,95,108,95,53,55,0);
    let iconstar7 = true;
    let step7 = String.fromCharCode(108,95,49,57,95,109,111,118,101,110,99,99,101,110,99,0);
    let detailsF = String.fromCharCode(115,101,108,101,99,116,97,98,108,101,95,100,95,51,55,0);
    let nativex = 3.0;
    let rewindQ = String.fromCharCode(118,101,110,99,95,116,95,49,54,0);
      utilsR = iconnotificationnew5 == 79.48;

    if (isSubmitting) return;

   if (descb.length == 5) {
      iconnotificationnew5 /= Math.max(5, parseInt(`${iconnotificationnew5}`));
   }

    if (isReadTermNCondition == false) {

       let cornerkickF = 1.0;
          let basketballtrophyF = String.fromCharCode(117,95,53,48,95,117,118,108,99,0);
          let benefitm: Array<any> = [774, 991];
          let largesoundL = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,95,105,95,50,55,0);
         cornerkickF *= parseInt(`${cornerkickF}`);
         basketballtrophyF += `${basketballtrophyF.length}`;
         benefitm = [benefitm.length / (Math.max(basketballtrophyF.length, 6))];
         largesoundL += `${benefitm.length}`;
      for (let o = 0; o < 2; o++) {
         cornerkickF -= 2;
      }
          let sideA: Array<any> = [669, 257, 589];
          let pathi = String.fromCharCode(122,108,105,98,112,114,105,109,101,95,105,95,54,53,0);
          let episodes5 = String.fromCharCode(97,114,114,97,121,115,95,116,95,57,50,0);
         cornerkickF += episodes5.length;
         sideA = [pathi.length << (Math.min(4, sideA.length))];
         pathi = `${sideA.length}`;
         episodes5 = `${(String.fromCharCode(97,0) == pathi ? pathi.length : sideA.length)}`;
      detailsF = `${(String.fromCharCode(122,0) == detailsF ? parseInt(`${iconnotificationnew5}`) : detailsF.length)}`;
      mayi_Attributedstring.showToast('请勾选用户协议和隐私协议');

      detailsF = `${step7.length + parseInt(`${iconnotificationnew5}`)}`;
      return;

      descb = `${s_playerS.length / (Math.max(9, configureC.size))}`;
    }

    let userInfo;

   for (let l = 0; l < 2; l++) {
      analyticf += "2";
   }

    try {

       let basketballawayteamd = true;
      let libreactnativeblobo = basketballawayteamd ? !basketballawayteamd : basketballawayteamd;
      do {
         basketballawayteamd = (!basketballawayteamd ? !basketballawayteamd : !basketballawayteamd);
         if (libreactnativeblobo) {
            break;
         }
      } while (libreactnativeblobo && (basketballawayteamd));
         basketballawayteamd = (basketballawayteamd ? basketballawayteamd : !basketballawayteamd);
         basketballawayteamd = !basketballawayteamd;
      step7 += `${analyticf.length + descb.length}`;
      await GoogleSignin.hasPlayServices();

      stepu += `${descb.length}`;

      if (await GoogleSignin.isSignedIn()) {

      step7 = "3";
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

   let libhermest = String.fromCharCode(48,106,114,116,115,0) == s_playerS;
   do {
      s_playerS += `${parseInt(`${nativex}`) * descb.length}`;
      if (libhermest) {
         break;
      }
   } while (libhermest && (stepu.length < 4));
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   if (analyticf != String.fromCharCode(110,0) && s_playerS == String.fromCharCode(78,0)) {
       let forwardH = String.fromCharCode(104,101,99,107,95,104,95,52,57,0);
       let baseQ: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,107,102,109,111,100,101,115,0),String.fromCharCode(112,95,55,54,95,111,99,97,108,105,122,97,116,105,111,110,0)], [String.fromCharCode(122,95,57,53,95,109,111,100,101,108,115,0),String.fromCharCode(110,95,57,56,95,114,101,97,100,113,0)], [String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,103,95,57,49,0),String.fromCharCode(104,95,52,51,95,101,97,114,108,105,101,114,0)]]);
       let stations2 = 1;
         baseQ = new Map([[forwardH, 1 - stations2]]);
      while (4 == baseQ.size) {
         baseQ = new Map([[forwardH, stations2]]);
         break;
      }
      let basketballicon6 = baseQ.size <= 7066175;
      do {
         baseQ = new Map([[`${baseQ.size}`, baseQ.size * forwardH.length]]);
         if (basketballicon6) {
            break;
         }
      } while (basketballicon6 && ((4 >> (Math.min(3, Math.abs(baseQ.size)))) > 1));
      let gradlewc = stations2 >= 7855360;
      do {
         stations2 &= stations2;
         if (gradlewc) {
            break;
         }
      } while (gradlewc && (forwardH.includes(`${stations2}`)));
         baseQ = new Map([[`${baseQ.size}`, baseQ.size ^ stations2]]);
         forwardH += `${stations2}`;
         forwardH += `${forwardH.length}`;
          let roomC: Array<any> = [149, 767, 546];
         stations2 += roomC.length;
          let penaltyshootnogoalo: Map<any, any> = new Map([[String.fromCharCode(114,111,120,121,95,117,95,49,48,0),true ], [String.fromCharCode(97,117,116,111,114,101,115,105,122,105,110,103,95,104,95,50,0),true ], [String.fromCharCode(97,95,56,51,0),false ]]);
         stations2 |= 3;
         penaltyshootnogoalo.set(`${penaltyshootnogoalo.size}`, penaltyshootnogoalo.size << (Math.min(Math.abs(penaltyshootnogoalo.size), 3)));
      analyticf += "2";
   }
        

   let orangeuparrowX = 5644437 >= analyticf.length;
   do {
      analyticf = `${(detailsF == String.fromCharCode(105,0) ? parseInt(`${nativex}`) : detailsF.length)}`;
      if (orangeuparrowX) {
         break;
      }
   } while ((step7 == analyticf) && orangeuparrowX);
        mayi_Attributedstring.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   if (1.49 > (iconnotificationnew5 * 2.62) && (2.62 * iconnotificationnew5) > 5.8) {
      s_playerS += `${2 + parseInt(`${iconnotificationnew5}`)}`;
   }
        

       let forwardh = 5;
       let downloaded0 = String.fromCharCode(105,95,57,55,95,99,114,108,102,0);
         downloaded0 += `${downloaded0.length}`;
      if (4 < (downloaded0.length / (Math.max(3, 4))) || 3 < (downloaded0.length / 3)) {
          let orientation7 = 4.0;
          let hover4 = true;
          let signinupV = String.fromCharCode(109,95,53,95,99,111,109,112,111,117,110,100,0);
         forwardh -= parseInt(`${orientation7}`) / 3;
         orientation7 += ((hover4 ? 3 : 5) - signinupV.length);
         hover4 = signinupV.length > 82;
      }
         downloaded0 = `${downloaded0.length}`;
          let servicel = String.fromCharCode(101,95,52,57,95,116,111,98,105,116,0);
          let twitterY = String.fromCharCode(116,95,55,56,95,106,105,103,103,108,101,0);
         downloaded0 = `${servicel.length - downloaded0.length}`;
         servicel += `${twitterY.length / 3}`;
         twitterY = `${twitterY.length & 3}`;
      if (downloaded0.startsWith(`${forwardh}`)) {
          let light5: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,95,116,95,56,54,0),true ], [String.fromCharCode(98,95,53,50,95,110,101,97,114,98,121,0),true ], [String.fromCharCode(115,95,50,48,95,109,98,99,109,112,0),false ]]);
          let anythinkU = false;
         downloaded0 += `${(downloaded0 == String.fromCharCode(48,0) ? downloaded0.length : (anythinkU ? 3 : 2))}`;
         light5 = new Map([[`${light5.size}`, light5.size]]);
         anythinkU = (light5.size * light5.size) >= 2;
      }
          let pagez = String.fromCharCode(113,95,49,48,48,95,100,105,115,109,105,115,115,0);
         forwardh ^= (String.fromCharCode(103,0) == pagez ? forwardh : pagez.length);
      analyticf += `${forwardh}`;
        mayi_Attributedstring.showToast('谷歌服务获取失败');
      } else {

   for (let x = 0; x < 1; x++) {
      iconnotificationnew5 -= descb.length;
   }
        

   if (iconstar7) {
      iconstar7 = null == configureC.get(`${iconstar7}`);
   }
        mayi_Attributedstring.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   if ((parseFloat(`${stepu.length}`) * nativex) > 5.88) {
       let template_bM = 2.0;
       let checkboxL = 0.0;
      let macau2 = 8891856.0 >= checkboxL;
      do {
          let redirect_: Map<any, any> = new Map([[String.fromCharCode(121,95,56,95,114,97,110,115,105,116,105,111,110,0),861], [String.fromCharCode(107,95,50,53,95,100,101,112,114,101,99,105,97,116,101,100,104,0),483], [String.fromCharCode(108,105,98,115,115,104,95,120,95,56,55,0),171]]);
          let googleO = false;
          let baiduz = String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,54,95,53,50,0);
          let selectedx: Map<any, any> = new Map([[String.fromCharCode(106,95,51,57,95,117,108,108,115,99,114,101,101,110,0),222], [String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,49,95,51,57,0),767], [String.fromCharCode(99,104,111,115,101,95,97,95,55,51,0),88]]);
         checkboxL /= Math.max(((googleO ? 4 : 5) - redirect_.size), 2);
         redirect_.set(baiduz, 2 % (Math.max(8, selectedx.size)));
         googleO = (selectedx.size << (Math.min(baiduz.length, 4))) == 82;
         if (macau2) {
            break;
         }
      } while (((2.55 + template_bM) <= 2.20 || (checkboxL + 2.55) <= 3.11) && macau2);
       let natives = false;
          let libtobm: Array<any> = [String.fromCharCode(105,95,56,56,95,117,116,120,111,115,0), String.fromCharCode(109,105,110,105,109,105,122,101,95,100,95,50,49,0)];
          let defaultfootballbgr = 4.0;
          let index2: Array<any> = [340, 334, 837];
         natives = index2.includes(natives);
         libtobm = [1 << (Math.min(2, libtobm.length))];
         defaultfootballbgr += parseFloat(`${2}`);
         index2.push(libtobm.length);
         natives = checkboxL < 27.71;
          let whatsappg = true;
         template_bM -= parseFloat(`${parseInt(`${checkboxL}`) | 1}`);
         whatsappg = (!whatsappg ? !whatsappg : whatsappg);
      for (let t = 0; t < 3; t++) {
         natives = !natives;
      }
      stepu = `${(analyticf.length & (utilsR ? 2 : 2))}`;
   }
      return;
    }

    if (userInfo === null) {

   while (!utilsR) {
      utilsR = descb.length >= 34;
      break;
   }
      mayi_Attributedstring.showToast('登入失败，请稍后再试');

       let p_title7 = true;
       let awayH = 2.0;
       let incidenth = 0;
      if (3.84 >= (awayH + 3.61)) {
         awayH /= Math.max(4, parseFloat(`${1}`));
      }
       let predictionwinr = false;
      while (predictionwinr || (incidenth & 2) <= 5) {
         incidenth <<= Math.min(Math.abs(2), 5);
         break;
      }
      for (let d = 0; d < 2; d++) {
         predictionwinr = 71 <= (awayH + incidenth);
      }
         incidenth >>= Math.min(5, Math.abs(incidenth));
      let nodeQ = p_title7 ? !p_title7 : p_title7;
      do {
         p_title7 = awayH > 58.52;
         if (nodeQ) {
            break;
         }
      } while ((p_title7) && nodeQ);
      let floaterU = p_title7 ? !p_title7 : p_title7;
      do {
         p_title7 = awayH >= 35.68 || predictionwinr;
         if (floaterU) {
            break;
         }
      } while (floaterU && (!p_title7));
      for (let n = 0; n < 2; n++) {
         awayH *= (parseFloat(`${(predictionwinr ? 1 : 1) + 1}`));
      }
          let twittery: Map<any, any> = new Map([[String.fromCharCode(105,95,57,53,95,116,112,101,108,0),894], [String.fromCharCode(122,95,50,55,95,115,112,97,99,101,114,0),6], [String.fromCharCode(120,95,54,48,95,97,118,99,111,100,101,99,0),634]]);
          let transferu = 3.0;
          let areah = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,95,103,95,56,57,0);
         awayH *= parseFloat(`${1 << (Math.min(Math.abs(incidenth), 1))}`);
         twittery = new Map([[`${twittery.size}`, (String.fromCharCode(52,0) == areah ? areah.length : twittery.size)]]);
         transferu -= parseFloat(`${parseInt(`${transferu}`) | areah.length}`);
      utilsR = incidenth > 24 && !utilsR;
      return;
    }

    try {

      iconnotificationnew5 += detailsF.length;
      setSubmitting(true);

   for (let y = 0; y < 1; y++) {
      s_playerS += `${detailsF.length}`;
   }

      userInfo = await mayi_Injury.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

       let playp = String.fromCharCode(103,95,54,55,95,114,97,109,112,0);
       let nterstitialn: Array<any> = [630, 141, 495];
         nterstitialn = [(playp == String.fromCharCode(82,0) ? playp.length : nterstitialn.length)];
         nterstitialn.push(3 * playp.length);
      let classesA = 8577969 >= nterstitialn.length;
      do {
         nterstitialn = [(String.fromCharCode(68,0) == playp ? nterstitialn.length : playp.length)];
         if (classesA) {
            break;
         }
      } while ((!playp.startsWith(`${nterstitialn.length}`)) && classesA);
       let langB = String.fromCharCode(117,95,49,57,95,111,118,101,114,108,111,97,100,0);
       let closeo = String.fromCharCode(115,116,105,99,107,101,114,115,95,113,95,50,48,0);
      for (let w = 0; w < 1; w++) {
          let anythinkl = String.fromCharCode(98,95,49,56,95,114,101,115,117,109,101,0);
          let textlayoutmanagerw = 1;
          let zoom0 = 2.0;
          let searchg = 3.0;
          let nendK = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,52,95,55,0);
         closeo = `${(langB == String.fromCharCode(84,0) ? playp.length : langB.length)}`;
         anythinkl = `${parseInt(`${searchg}`) << (Math.min(Math.abs(parseInt(`${zoom0}`)), 2))}`;
         textlayoutmanagerw ^= parseInt(`${searchg}`);
         zoom0 /= Math.max(1 + anythinkl.length, 4);
         nendK += `${parseInt(`${zoom0}`)}`;
      }
      let favoriteW = 5795815 >= playp.length;
      do {
         playp = `${closeo.length}`;
         if (favoriteW) {
            break;
         }
      } while ((playp.length > closeo.length) && favoriteW);
      nativex += (parseFloat(`${1 << (Math.min(4, Math.abs((iconstar7 ? 3 : 2))))}`));
      mayi_Attributedstring.showToast(err.toString());

       let libimagepipelineR = false;
       let matht = String.fromCharCode(111,95,57,95,109,106,112,101,103,101,110,99,0);
         libimagepipelineR = matht.length < 49 && libimagepipelineR;
          let footballv = true;
          let acceptedg: Array<any> = [String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,57,95,49,53,0), String.fromCharCode(110,95,49,51,95,99,97,110,99,101,108,0)];
         matht += `${(1 + (footballv ? 4 : 5))}`;
         footballv = (acceptedg.length % (Math.max(acceptedg.length, 8))) <= 9;
         matht += `${((libimagepipelineR ? 3 : 2) / 3)}`;
         libimagepipelineR = matht.length == 18;
      if (!matht.endsWith(`${libimagepipelineR}`)) {
         matht = `${((libimagepipelineR ? 4 : 2))}`;
      }
          let predictionbannerL: Array<any> = [162, 640];
          let statsnomoredataZ: Map<any, any> = new Map([[String.fromCharCode(104,95,55,95,111,117,116,101,114,0),true ], [String.fromCharCode(113,95,55,48,95,101,100,105,97,0),true ]]);
         libimagepipelineR = 78 == statsnomoredataZ.size && predictionbannerL.length == 78;
      step7 += `${((iconstar7 ? 1 : 3) & step7.length)}`;
      return;
    } finally {

      step7 = `${(String.fromCharCode(102,0) == analyticf ? analyticf.length : configureC.size)}`;
      setSubmitting(false);

   while (s_playerS != String.fromCharCode(81,0)) {
      step7 += `${step7.length - stepu.length}`;
      break;
   }
    }

    const resultData = userInfo.data;

       let static_xB = 1.0;
       let ping_ = 1.0;
      while ((5.31 * ping_) < 2.78 && (static_xB * ping_) < 5.31) {
          let runtimeC = String.fromCharCode(97,115,100,107,95,117,95,51,53,0);
          let pushg = String.fromCharCode(99,104,97,110,110,101,108,95,108,95,49,56,0);
          let rightD = String.fromCharCode(115,95,57,49,95,119,114,105,116,101,114,0);
          let native8: Array<any> = [694, 456];
          let styleo = 3.0;
         static_xB *= parseFloat(`${3}`);
         runtimeC = `${native8.length | 2}`;
         pushg += `${pushg.length}`;
         rightD += `${parseInt(`${styleo}`)}`;
         native8.push(1);
         styleo += runtimeC.length;
         break;
      }
       let componentregistryj = String.fromCharCode(109,115,112,101,108,95,102,95,50,52,0);
      while (parseFloat(`${componentregistryj.length}`) >= static_xB) {
          let cornerkickb = 5.0;
          let dplus0 = String.fromCharCode(105,95,51,95,114,111,102,105,108,101,0);
          let flipperL: Array<any> = [String.fromCharCode(117,95,56,50,95,100,111,119,110,108,111,97,100,105,110,103,0), String.fromCharCode(117,95,51,53,95,97,105,109,100,0)];
          let submitc: Map<any, any> = new Map([[String.fromCharCode(107,98,105,116,95,52,95,57,49,0),604], [String.fromCharCode(109,95,51,95,98,121,116,101,0),216], [String.fromCharCode(117,95,53,52,95,110,97,118,105,103,97,116,101,0),222]]);
          let eabafadfadddbafeddddeeefeaaf3 = String.fromCharCode(110,111,110,98,108,111,99,107,95,103,95,53,56,0);
         static_xB /= Math.max(5, (parseFloat(`${String.fromCharCode(109,0) == dplus0 ? submitc.size : dplus0.length}`)));
         cornerkickb *= parseFloat(`${parseInt(`${cornerkickb}`) << (Math.min(2, Math.abs(3)))}`);
         flipperL = [parseInt(`${cornerkickb}`)];
         submitc.set(`${cornerkickb}`, 2);
         eabafadfadddbafeddddeeefeaaf3 = `${eabafadfadddbafeddddeeefeaaf3.length}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         ping_ += componentregistryj.length + 2;
      }
       let gemfile5 = 4.0;
         componentregistryj += `${parseInt(`${ping_}`)}`;
      utilsR = descb == s_playerS;

    const user = mayi_Gift.fromJson(resultData);

      detailsF = `${((utilsR ? 3 : 4))}`;

    await dispatch(addUserAuthState(user));

   let materialp = 9547666 <= configureC.size;
   do {
       let yellowscoreballh = 0.0;
       let logoY = 4.0;
       let previewH = 5.0;
       let upgradeM = String.fromCharCode(99,95,49,57,95,108,101,97,102,0);
       let componentregistryg = 3.0;
      for (let v = 0; v < 3; v++) {
          let textf: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,116,105,109,101,117,116,105,108,115,0),true ], [String.fromCharCode(104,95,57,49,95,109,101,116,97,100,97,116,97,115,101,116,0),true ]]);
          let yellowtoredo = true;
         previewH += parseFloat(`${parseInt(`${yellowscoreballh}`) >> (Math.min(upgradeM.length, 5))}`);
         textf.set(`${yellowtoredo}`, textf.size);
      }
      for (let u = 0; u < 3; u++) {
          let libavutil4 = 2.0;
          let middleA = 3.0;
          let imagenomoredatan: Array<any> = [124, 865];
          let bodand = 0.0;
          let disconnectedW = false;
         previewH *= parseFloat(`${3 - parseInt(`${componentregistryg}`)}`);
         libavutil4 += imagenomoredatan.length;
         middleA /= Math.max((parseInt(`${middleA}`) >> (Math.min(1, Math.abs((disconnectedW ? 4 : 4))))), 3);
         imagenomoredatan = [imagenomoredatan.length << (Math.min(Math.abs(3), 1))];
         bodand += parseFloat(`${parseInt(`${middleA}`) | 1}`);
         disconnectedW = (imagenomoredatan.length / (Math.max(6, libavutil4))) >= 12.69;
      }
      let topono = 6059260.0 <= componentregistryg;
      do {
         componentregistryg /= Math.max(4, parseFloat(`${parseInt(`${previewH}`) % (Math.max(1, parseInt(`${logoY}`)))}`));
         if (topono) {
            break;
         }
      } while ((4.47 <= componentregistryg) && topono);
      if (5.50 <= (yellowscoreballh * 1)) {
         logoY *= (parseFloat(`${upgradeM == String.fromCharCode(120,0) ? upgradeM.length : parseInt(`${yellowscoreballh}`)}`));
      }
         upgradeM += `${1 + parseInt(`${yellowscoreballh}`)}`;
      if ((yellowscoreballh + 3.87) > 5.14 || (yellowscoreballh + 3.87) > 1.72) {
         previewH += parseFloat(`${parseInt(`${previewH}`) % 1}`);
      }
      if (2.53 > logoY) {
         upgradeM += `${parseInt(`${previewH}`)}`;
      }
         upgradeM = `${parseInt(`${logoY}`) | parseInt(`${yellowscoreballh}`)}`;
       let overl = false;
          let libfbjnii = String.fromCharCode(122,95,56,54,95,108,111,99,97,108,101,115,0);
         yellowscoreballh += parseInt(`${componentregistryg}`);
         libfbjnii = `${libfbjnii.length << (Math.min(Math.abs(3), 4))}`;
      let time_l1 = overl ? !overl : overl;
      do {
         overl = upgradeM.endsWith(`${componentregistryg}`);
         if (time_l1) {
            break;
         }
      } while ((componentregistryg >= 1.78 || (1.78 + componentregistryg) >= 1.14) && time_l1);
          let iconwatchk = String.fromCharCode(105,95,57,57,95,109,111,114,112,104,101,100,0);
          let carouselT = 2.0;
          let ynewarchdefaultsA: Array<any> = [332, 99, 841];
         upgradeM += `${((overl ? 4 : 4) << (Math.min(Math.abs(parseInt(`${logoY}`)), 1)))}`;
         iconwatchk = `${ynewarchdefaultsA.length}`;
         carouselT /= Math.max(2, 1);
         ynewarchdefaultsA.push(iconwatchk.length / 1);
      while (3.27 <= (componentregistryg / (Math.max(2.95, 2)))) {
          let schedule3 = 1;
          let megaphone5: Map<any, any> = new Map([[String.fromCharCode(110,95,55,48,95,99,97,110,111,112,117,115,0),699], [String.fromCharCode(98,95,54,52,95,99,111,110,116,97,99,116,0),606], [String.fromCharCode(110,95,50,52,95,99,102,101,110,99,115,116,114,0),263]]);
          let chartY = String.fromCharCode(103,95,49,57,95,112,101,114,99,101,112,116,117,97,108,0);
          let defaultplayerimgV = 4.0;
         upgradeM += `${2 >> (Math.min(Math.abs(parseInt(`${logoY}`)), 3))}`;
         schedule3 &= chartY.length;
         megaphone5 = new Map([[chartY, chartY.length % 1]]);
         defaultplayerimgV /= Math.max((chartY == String.fromCharCode(84,0) ? parseInt(`${defaultplayerimgV}`) : chartY.length), 5);
         break;
      }
      while (componentregistryg <= 5.52) {
          let rightf = String.fromCharCode(114,101,115,101,110,100,95,101,95,56,56,0);
         componentregistryg /= Math.max(3, parseFloat(`${parseInt(`${componentregistryg}`)}`));
         rightf = "2";
         break;
      }
      let librrcK = 9094107.0 >= componentregistryg;
      do {
         componentregistryg *= parseFloat(`${parseInt(`${previewH}`)}`);
         if (librrcK) {
            break;
         }
      } while (((2.48 + componentregistryg) < 5.80) && librrcK);
      configureC.set(stepu, 1 - configureC.size);
      if (materialp) {
         break;
      }
   } while ((!iconstar7 || 3 < (configureC.size ^ 5)) && materialp);

    if (userInfo.message.includes("注册成功")) {

      iconstar7 = 83 >= configureC.size || 83 >= detailsF.length;
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   if (5.88 >= nativex) {
      nativex -= (parseFloat(`${stepu == String.fromCharCode(86,0) ? parseInt(`${iconnotificationnew5}`) : stepu.length}`));
   }

      if (user.isVip()) {

      step7 += "2";
        await AsyncStorage.setItem("showAds", "false");
      } else {

       let rewardvideoN = false;
       let shrinkD = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,122,95,52,50,0);
       let shielddoneP: Map<any, any> = new Map([[String.fromCharCode(113,95,52,55,95,100,105,115,112,108,97,121,115,0),true ], [String.fromCharCode(105,110,102,117,114,97,95,56,95,48,0),true ]]);
          let refreshborderlessk = 2.0;
          let progressH = String.fromCharCode(103,95,55,48,95,109,97,100,101,0);
         rewardvideoN = !progressH.endsWith(`${rewardvideoN}`);
         refreshborderlessk -= parseFloat(`${1 / (Math.max(parseInt(`${refreshborderlessk}`), 7))}`);
         progressH = `${parseInt(`${refreshborderlessk}`)}`;
      for (let i = 0; i < 3; i++) {
         shrinkD += `${shielddoneP.size - shrinkD.length}`;
      }
         shrinkD += `${shrinkD.length % (Math.max(2, shielddoneP.size))}`;
       let temp7 = true;
      for (let n = 0; n < 2; n++) {
         shielddoneP = new Map([[`${rewardvideoN}`, ((rewardvideoN ? 2 : 1))]]);
      }
      if ((shrinkD.length + shielddoneP.size) < 3 && (shrinkD.length + 3) < 4) {
          let heji7: Array<any> = [610, 524];
         shrinkD += `${2 % (Math.max(7, shielddoneP.size))}`;
         heji7 = [heji7.length];
      }
      for (let g = 0; g < 1; g++) {
          let placeholderA = String.fromCharCode(97,99,116,97,98,95,120,95,53,48,0);
          let downloadingU = String.fromCharCode(97,105,109,105,110,103,95,106,95,51,55,0);
          let rankZ: Map<any, any> = new Map([[String.fromCharCode(106,95,49,49,95,105,110,105,116,105,97,116,111,114,0),918], [String.fromCharCode(104,113,120,100,115,112,95,117,95,56,48,0),348]]);
          let commentk = 4.0;
          let reactnativejsK: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,115,95,55,95,57,54,0),436], [String.fromCharCode(98,95,51,54,95,120,112,114,118,0),188], [String.fromCharCode(101,95,49,54,95,105,116,111,97,0),87]]);
         rewardvideoN = rankZ.size == shrinkD.length;
         placeholderA = `${parseInt(`${commentk}`) % (Math.max(3, 6))}`;
         downloadingU = `${reactnativejsK.size >> (Math.min(downloadingU.length, 1))}`;
         rankZ.set(downloadingU, downloadingU.length ^ 2);
         commentk += reactnativejsK.size;
      }
          let defaultteamx: Array<any> = [17, 192];
          let libapminsightbc = 3.0;
          let codegenc = 0.0;
         shielddoneP.set(`${rewardvideoN}`, parseInt(`${codegenc}`) / 1);
         defaultteamx = [parseInt(`${libapminsightbc}`)];
         libapminsightbc -= 1;
         codegenc -= parseFloat(`${defaultteamx.length}`);
      for (let a = 0; a < 2; a++) {
         shrinkD += `${1 | shrinkD.length}`;
      }
      iconnotificationnew5 += 2;
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

       let cancel0 = String.fromCharCode(121,117,108,101,95,50,95,55,57,0);
          let point7: Map<any, any> = new Map([[String.fromCharCode(118,95,54,53,95,109,101,110,116,105,111,110,0),String.fromCharCode(111,95,55,57,95,116,114,105,97,110,103,108,101,0)], [String.fromCharCode(101,95,57,57,95,111,110,101,111,102,0),String.fromCharCode(116,95,49,49,95,98,105,103,105,110,116,101,103,101,114,0)], [String.fromCharCode(101,120,99,108,117,100,101,115,95,122,95,56,55,0),String.fromCharCode(115,95,54,52,95,119,109,97,112,114,111,0)]]);
          let whitevideolivep = 4;
          let cancelI = String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,95,120,95,50,48,0);
         cancel0 += `${point7.size}`;
         point7 = new Map([[`${whitevideolivep}`, (String.fromCharCode(67,0) == cancelI ? whitevideolivep : cancelI.length)]]);
          let typing8 = String.fromCharCode(121,95,57,57,95,114,101,109,97,116,114,105,120,105,110,103,0);
          let graphA = String.fromCharCode(111,95,50,55,95,99,111,111,114,100,105,110,97,116,105,111,110,0);
          let checkboxg = false;
         cancel0 += `${((checkboxg ? 4 : 3))}`;
         typing8 += `${graphA.length >> (Math.min(Math.abs(3), 1))}`;
         graphA = `${graphA.length}`;
         checkboxg = graphA.length < 5;
      while (cancel0 == String.fromCharCode(72,0)) {
         cancel0 += `${cancel0.length % 3}`;
         break;
      }
      detailsF += `${configureC.size}`;

      

      stepu += `${(step7 == String.fromCharCode(114,0) ? step7.length : configureC.size)}`;
      mayi_push.userCenterLoginSuccessTimesAnalytics();

   for (let l = 0; l < 1; l++) {
       let appsI = 3;
       let baidum = false;
      let dragz = appsI <= 5442035;
      do {
          let eabafadfadddbafeddddeeefeaafc = String.fromCharCode(105,110,116,101,114,102,114,97,109,101,95,53,95,54,55,0);
          let libffmpegkitF = String.fromCharCode(116,95,53,49,95,97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0);
         appsI += libffmpegkitF.length;
         eabafadfadddbafeddddeeefeaafc += `${3 ^ eabafadfadddbafeddddeeefeaafc.length}`;
         libffmpegkitF += `${(String.fromCharCode(84,0) == eabafadfadddbafeddddeeefeaafc ? eabafadfadddbafeddddeeefeaafc.length : eabafadfadddbafeddddeeefeaafc.length)}`;
         if (dragz) {
            break;
         }
      } while ((baidum) && dragz);
          let kickO = false;
         appsI &= 3;
         kickO = kickO && !kickO;
       let project8: Map<any, any> = new Map([[String.fromCharCode(117,110,115,112,105,108,108,95,122,95,56,48,0),false ], [String.fromCharCode(115,119,105,114,108,95,97,95,52,51,0),true ]]);
          let floating5 = String.fromCharCode(120,95,53,56,95,112,97,112,101,114,115,0);
          let formW = 4.0;
          let interstitialv = String.fromCharCode(104,95,49,53,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
         appsI ^= floating5.length + 3;
         floating5 = `${parseInt(`${formW}`) / 3}`;
         formW *= interstitialv.length + parseInt(`${formW}`);
         interstitialv = `${parseInt(`${formW}`) ^ interstitialv.length}`;
          let dataL = String.fromCharCode(115,95,57,54,95,112,111,115,116,102,105,120,0);
         project8 = new Map([[`${project8.size}`, (2 >> (Math.min(1, Math.abs((baidum ? 4 : 1)))))]]);
         dataL = `${dataL.length >> (Math.min(dataL.length, 2))}`;
      for (let g = 0; g < 3; g++) {
         baidum = project8.get(`${baidum}`) != null;
      }
      descb = `${configureC.size}`;
   }
      mayi_ForegroundLibfabricjni.userCenterLoginSuccessTimesAnalytics();

      configureC.set(`${nativex}`, 1 + s_playerS.length);

      if (user.isVip()) {

      step7 = `${((utilsR ? 1 : 2) % (Math.max(3, 3)))}`;
        mayi_push.userCenterVipLoginSuccessTimesAnalytics();
      }
      

   for (let i = 0; i < 2; i++) {
      s_playerS = `${(configureC.size ^ (iconstar7 ? 4 : 2))}`;
   }

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let malaysiaU = String.fromCharCode(101,121,98,111,97,114,100,95,98,95,49,57,0);
    let manifestU = true;
    let alerta = 3;
    let nodeT = 1.0;
    let componentregistryL = String.fromCharCode(100,101,116,97,105,108,115,95,49,95,53,52,0);
    let clearU = String.fromCharCode(106,95,53,50,95,100,105,97,108,108,105,110,103,0);
    let iconpipexpand3 = String.fromCharCode(119,95,55,50,95,101,120,112,114,0);
    let collection9: Array<any> = [String.fromCharCode(118,101,114,98,111,115,101,95,57,95,55,52,0), String.fromCharCode(112,95,54,57,95,99,104,101,99,107,101,114,0)];
    let encrypt2 = 5;
    let album7 = 3;
    let hejiq = String.fromCharCode(100,117,114,98,105,110,95,52,95,50,54,0);
      encrypt2 /= Math.max(collection9.length, 5);
      componentregistryL += `${parseInt(`${nodeT}`)}`;
   let untickD = clearU.length >= 7354730;
   do {
      clearU = `${malaysiaU.length}`;
      if (untickD) {
         break;
      }
   } while ((manifestU && clearU.length > 5) && untickD);
   let agreemento = String.fromCharCode(116,109,107,48,110,112,0) == componentregistryL;
   do {
       let cornerkickq = 3;
       let leakcheckerD = String.fromCharCode(114,95,49,50,95,114,101,99,111,110,110,101,99,116,105,110,103,0);
       let layoutJ = 0.0;
       let stationsZ = true;
       let hooksp = 4.0;
      while (stationsZ && (hooksp * 1.24) >= 2.89) {
          let progressN = 4;
          let crownK = String.fromCharCode(102,105,120,116,117,114,101,115,95,106,95,51,50,0);
          let bgvipxvodl = String.fromCharCode(120,95,51,57,95,105,112,97,100,0);
          let tumbnailT = 5;
          let cornershoot3: Array<any> = [170, 687];
         hooksp /= Math.max(1, tumbnailT * cornerkickq);
         progressN |= 1 - bgvipxvodl.length;
         crownK += `${cornershoot3.length * 3}`;
         bgvipxvodl += "1";
         tumbnailT &= 2 & cornershoot3.length;
         break;
      }
      while (4 == (cornerkickq ^ 2)) {
         layoutJ /= Math.max(4, (parseFloat(`${parseInt(`${hooksp}`) * (stationsZ ? 4 : 5)}`)));
         break;
      }
       let short_efu = String.fromCharCode(100,105,115,109,105,115,115,101,115,95,106,95,51,57,0);
       let commente = String.fromCharCode(110,95,57,57,95,101,99,109,117,108,116,0);
      if ((hooksp / 1.11) == 5.43) {
         commente = `${commente.length}`;
      }
      if (hooksp < leakcheckerD.length) {
         leakcheckerD += `${leakcheckerD.length / (Math.max(1, 4))}`;
      }
       let abidetect9: Map<any, any> = new Map([[String.fromCharCode(108,95,56,51,95,99,108,109,117,108,0),675], [String.fromCharCode(104,95,54,52,95,112,107,99,115,0),882], [String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,111,95,49,48,48,0),431]]);
       let shielddoneD: Map<any, any> = new Map([[String.fromCharCode(104,95,53,95,102,100,111,112,101,110,0),74], [String.fromCharCode(101,110,113,117,101,117,101,95,54,95,49,54,0),767]]);
      while (1.67 >= layoutJ || 2.21 >= (layoutJ + 1.67)) {
         stationsZ = stationsZ || leakcheckerD.length == 98;
         break;
      }
          let homeloading_ = String.fromCharCode(100,121,110,97,114,114,97,121,95,49,95,51,52,0);
          let matchv = 0.0;
          let views1 = false;
         shielddoneD = new Map([[commente, (String.fromCharCode(114,0) == commente ? commente.length : parseInt(`${matchv}`))]]);
         homeloading_ += "2";
         matchv += (2 - (views1 ? 1 : 2));
      while ((cornerkickq / (Math.max(parseInt(`${hooksp}`), 7))) <= 3 || 1.75 <= (cornerkickq / (Math.max(hooksp, 5)))) {
          let routerl = 1;
          let yellowtored2 = String.fromCharCode(97,114,116,105,99,108,101,115,95,119,95,49,55,0);
          let reactnativeratingsb = String.fromCharCode(107,95,54,49,95,101,108,115,100,101,99,0);
          let linkq = false;
         hooksp += abidetect9.size * 2;
         routerl &= (yellowtored2 == String.fromCharCode(74,0) ? reactnativeratingsb.length : yellowtored2.length);
         reactnativeratingsb += `${1 | reactnativeratingsb.length}`;
         linkq = yellowtored2.length == routerl;
         break;
      }
          let macau8 = 5.0;
          let imagesE = 0.0;
          let icontransferclubr = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,95,56,95,49,48,0);
         cornerkickq /= Math.max(5, parseInt(`${layoutJ}`));
         macau8 -= icontransferclubr.length ^ parseInt(`${macau8}`);
         imagesE -= parseFloat(`${1 ^ parseInt(`${imagesE}`)}`);
         icontransferclubr = `${parseInt(`${imagesE}`)}`;
      if (!commente.startsWith(`${stationsZ}`)) {
          let baselines: Map<any, any> = new Map([[String.fromCharCode(118,95,56,48,95,115,116,101,109,109,101,114,0),true ], [String.fromCharCode(109,97,114,107,101,116,95,50,95,54,54,0),false ], [String.fromCharCode(112,114,111,116,101,99,116,105,111,110,95,52,95,53,0),true ]]);
          let canvas0 = 1;
          let u_titlen = String.fromCharCode(108,95,51,48,95,116,117,110,101,0);
         commente += `${3 / (Math.max(5, baselines.size))}`;
         baselines = new Map([[u_titlen, u_titlen.length & canvas0]]);
         canvas0 *= u_titlen.length & 3;
      }
      let bangC = stationsZ ? !stationsZ : stationsZ;
      do {
          let aboutW = 3.0;
         stationsZ = null == shielddoneD.get(`${layoutJ}`);
         aboutW /= Math.max(4, 2);
         if (bangC) {
            break;
         }
      } while ((short_efu.startsWith(`${stationsZ}`)) && bangC);
         hooksp *= 3 ^ parseInt(`${layoutJ}`);
      let bootsplashT = layoutJ >= 5764501.0;
      do {
          let pointy: Array<any> = [90, 105, 376];
          let whitevideoliveQ: Map<any, any> = new Map([[String.fromCharCode(98,95,55,48,0),157], [String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,95,119,95,56,48,0),114], [String.fromCharCode(99,111,109,112,97,114,101,102,95,50,95,57,0),222]]);
          let applicationM = String.fromCharCode(105,95,56,49,95,97,103,101,0);
          let currentJ: Map<any, any> = new Map([[String.fromCharCode(98,95,54,57,95,102,114,97,109,101,119,111,114,107,0),307], [String.fromCharCode(119,95,53,54,95,113,115,118,100,101,99,0),163]]);
          let regengp = 0;
         layoutJ *= parseFloat(`${parseInt(`${hooksp}`) | 1}`);
         pointy.push(currentJ.size);
         whitevideoliveQ.set(`${regengp}`, regengp << (Math.min(Math.abs(2), 4)));
         applicationM += `${currentJ.size}`;
         if (bootsplashT) {
            break;
         }
      } while ((1.11 < (layoutJ - 5.35) || 5 < (4 + shielddoneD.size)) && bootsplashT);
         hooksp /= Math.max(5, abidetect9.size / 1);
      componentregistryL += `${alerta | 3}`;
      if (agreemento) {
         break;
      }
   } while ((5.24 <= nodeT) && agreemento);
       let panglep = 2;
      let chats = panglep <= 8133933;
      do {
         panglep += panglep / 2;
         if (chats) {
            break;
         }
      } while ((1 == (panglep % (Math.max(2, panglep)))) && chats);
         panglep ^= 2 | panglep;
          let megaphone2 = true;
         panglep ^= 1 ^ panglep;
         megaphone2 = !megaphone2 && !megaphone2;
      nodeT /= Math.max(4, clearU.length);
   if (!manifestU && 1 < componentregistryL.length) {
      componentregistryL += "1";
   }
      encrypt2 >>= Math.min(Math.abs(componentregistryL.length + 2), 5);
      manifestU = (collection9.length | encrypt2) == 91;
      collection9.push((String.fromCharCode(116,0) == malaysiaU ? malaysiaU.length : clearU.length));
      malaysiaU += `${parseInt(`${nodeT}`)}`;
   if (2 == clearU.length) {
      clearU += `${encrypt2 * 2}`;
   }
      componentregistryL += `${parseInt(`${nodeT}`) - 3}`;
       let umengB = true;
      if (umengB) {
         umengB = !umengB;
      }
       let iconqq3 = String.fromCharCode(116,102,120,100,95,117,95,55,56,0);
       let combineds = String.fromCharCode(103,101,110,101,114,97,116,101,102,105,108,101,95,105,95,57,51,0);
      collection9.push(iconpipexpand3.length);
       let coreE = 4.0;
         coreE *= parseInt(`${coreE}`);
         coreE /= Math.max(4, 2 << (Math.min(Math.abs(parseInt(`${coreE}`)), 2)));
      let linkt = 5967188.0 <= coreE;
      do {
         coreE -= parseInt(`${coreE}`) >> (Math.min(3, Math.abs(2)));
         if (linkt) {
            break;
         }
      } while (linkt && (4.88 <= coreE));
      nodeT *= 2;
   if ((alerta >> (Math.min(Math.abs(3), 4))) == 4 || (3 >> (Math.min(2, Math.abs(encrypt2)))) == 1) {
      encrypt2 += ((manifestU ? 3 : 3));
   }
   if ((3.35 + nodeT) > 5.22 && (alerta + nodeT) > 3.35) {
      nodeT *= iconpipexpand3.length << (Math.min(5, Math.abs(alerta)));
   }
      nodeT *= (2 >> (Math.min(5, Math.abs((manifestU ? 2 : 4)))));
      iconpipexpand3 = `${collection9.length}`;
   let stationsc = 8380253 <= clearU.length;
   do {
      clearU = `${((manifestU ? 1 : 2) + malaysiaU.length)}`;
      if (stationsc) {
         break;
      }
   } while ((!clearU.startsWith(malaysiaU)) && stationsc);
   if ((malaysiaU.length - nodeT) >= 2.35 || 3 >= (malaysiaU.length - parseInt(`${nodeT}`))) {
      nodeT /= Math.max(parseInt(`${nodeT}`), 2);
   }

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
       let rightG: Array<any> = [265, 290];
    let kickg = 5.0;
    let entry0 = String.fromCharCode(109,117,108,116,105,112,108,101,114,95,98,95,53,53,0);
    let thailandS = true;
    let guiden: Map<any, any> = new Map([[String.fromCharCode(110,95,57,56,95,114,101,99,101,105,118,101,0),String.fromCharCode(112,95,57,52,95,119,97,115,116,101,100,0)], [String.fromCharCode(110,117,109,101,114,105,99,97,108,95,98,95,50,49,0),String.fromCharCode(118,111,99,97,98,95,57,95,57,55,0)], [String.fromCharCode(105,95,55,50,95,114,101,115,97,109,112,108,101,114,0),String.fromCharCode(116,105,109,101,105,110,102,111,95,105,95,49,55,0)]]);
    let mbbannerZ = 5;
    let videocommonQ = true;
   while (5.33 < (parseFloat(`${mbbannerZ}`) / (Math.max(kickg, 1))) || 4.7 < (kickg / 5.33)) {
      mbbannerZ &= 2;
      break;
   }

    if (isSubmitting) return;

       let iconwatchH = true;
       let libapminsightbI: Map<any, any> = new Map([[String.fromCharCode(108,95,52,57,95,103,108,121,112,104,115,0),false ], [String.fromCharCode(112,101,114,109,105,116,116,101,100,95,102,95,49,0),true ]]);
       let binddatasB = String.fromCharCode(102,116,101,108,108,95,111,95,52,55,0);
          let foregroundn = 5.0;
          let smallW = 1.0;
         binddatasB = `${(String.fromCharCode(49,0) == binddatasB ? libapminsightbI.size : binddatasB.length)}`;
         foregroundn *= parseFloat(`${parseInt(`${smallW}`) - parseInt(`${foregroundn}`)}`);
         smallW *= parseFloat(`${parseInt(`${foregroundn}`) - parseInt(`${smallW}`)}`);
      while (5 > binddatasB.length) {
          let championy = String.fromCharCode(117,110,105,113,117,101,95,53,95,57,55,0);
          let defaultprofilepicM = false;
          let templateprocessorQ = String.fromCharCode(119,105,102,105,95,98,95,52,49,0);
         libapminsightbI.set(championy, (String.fromCharCode(83,0) == championy ? championy.length : templateprocessorQ.length));
         defaultprofilepicM = (defaultprofilepicM ? !defaultprofilepicM : defaultprofilepicM);
         break;
      }
      while (binddatasB.length < 2) {
          let detailw = String.fromCharCode(97,118,97,115,115,101,114,116,95,117,95,55,53,0);
          let predictiondefaultx = 4.0;
          let changee: Array<any> = [906, 577];
          let gpayu = 0.0;
          let icontransferclubB = String.fromCharCode(112,95,54,55,95,114,101,112,111,114,116,101,100,0);
         binddatasB = "3";
         detailw += `${1 >> (Math.min(Math.abs(parseInt(`${gpayu}`)), 1))}`;
         predictiondefaultx += parseFloat(`${icontransferclubB.length}`);
         changee.push((detailw == String.fromCharCode(84,0) ? detailw.length : parseInt(`${predictiondefaultx}`)));
         gpayu *= (parseFloat(`${String.fromCharCode(55,0) == icontransferclubB ? parseInt(`${predictiondefaultx}`) : icontransferclubB.length}`));
         break;
      }
       let dnewarchdefaultsr = String.fromCharCode(97,112,112,115,95,117,95,51,49,0);
         dnewarchdefaultsr += `${libapminsightbI.size / 2}`;
      while (binddatasB.length <= 2 || dnewarchdefaultsr == String.fromCharCode(57,0)) {
         binddatasB += "1";
         break;
      }
         iconwatchH = (libapminsightbI.size % (Math.max(binddatasB.length, 9))) > 27;
         libapminsightbI.set(`${binddatasB}`, (binddatasB == String.fromCharCode(56,0) ? libapminsightbI.size : binddatasB.length));
          let unselectedC = String.fromCharCode(111,95,52,54,95,112,97,108,98,97,114,115,0);
          let bingh = 1.0;
          let templateprocessor0: Array<any> = [String.fromCharCode(110,95,52,53,95,111,117,114,0), String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,98,95,57,57,0), String.fromCharCode(108,95,52,51,95,99,111,110,110,101,99,116,115,0)];
         iconwatchH = 58 == libapminsightbI.size;
         unselectedC = `${templateprocessor0.length | parseInt(`${bingh}`)}`;
         bingh -= parseFloat(`${1 - unselectedC.length}`);
         templateprocessor0.push(2 / (Math.max(9, parseInt(`${bingh}`))));
      videocommonQ = !videocommonQ;

    if (isReadTermNCondition == false) {

   if (!entry0.includes(`${kickg}`)) {
      entry0 += `${(String.fromCharCode(116,0) == entry0 ? entry0.length : parseInt(`${kickg}`))}`;
   }
      return;

   let scoreH = 9889918 <= rightG.length;
   do {
       let telegram8 = 5;
       let usert = 4.0;
          let u_countW = String.fromCharCode(97,95,50,95,115,111,102,114,101,101,0);
          let themeH = 3.0;
         telegram8 += parseInt(`${usert}`);
         u_countW += `${parseInt(`${themeH}`) % (Math.max(u_countW.length, 8))}`;
         themeH += 1 << (Math.min(1, u_countW.length));
      if (5.59 < (usert * 2.11)) {
          let profileactiveE = false;
         telegram8 |= 2 << (Math.min(Math.abs(telegram8), 1));
         profileactiveE = (!profileactiveE ? !profileactiveE : profileactiveE);
      }
       let teamdetailsbgf: Map<any, any> = new Map([[String.fromCharCode(120,95,57,95,116,105,110,121,0),false ], [String.fromCharCode(121,95,49,51,95,99,111,109,112,114,101,115,115,0),true ], [String.fromCharCode(98,95,57,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0),false ]]);
       let datay: Map<any, any> = new Map([[String.fromCharCode(110,111,100,101,108,97,121,95,119,95,52,57,0),String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,52,95,55,51,0)], [String.fromCharCode(111,95,56,48,95,99,117,98,101,100,0),String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,56,95,51,52,0)], [String.fromCharCode(101,110,117,109,101,114,97,116,101,95,56,95,50,55,0),String.fromCharCode(98,95,56,48,95,99,97,99,104,101,100,107,101,121,115,0)]]);
      let huaweie = 8523797.0 >= usert;
      do {
         usert *= parseFloat(`${telegram8}`);
         if (huaweie) {
            break;
         }
      } while (huaweie && (5 <= (parseInt(`${usert}`) / (Math.max(1, teamdetailsbgf.size)))));
         teamdetailsbgf.set(`${usert}`, parseInt(`${usert}`) << (Math.min(Math.abs(datay.size), 2)));
         teamdetailsbgf = new Map([[`${datay.size}`, datay.size]]);
      rightG = [telegram8 / 2];
      if (scoreH) {
         break;
      }
   } while (scoreH && (rightG.length <= entry0.length));
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      guiden.set(`${kickg}`, (parseInt(`${kickg}`) | (thailandS ? 2 : 4)));
    

   if (3 <= (3 ^ rightG.length) || videocommonQ) {
       let downloader2: Map<any, any> = new Map([[String.fromCharCode(108,95,55,48,95,114,101,97,108,105,102,121,0),820], [String.fromCharCode(115,105,122,101,108,101,115,115,95,49,95,54,51,0),370], [String.fromCharCode(117,95,57,57,95,108,106,112,101,103,0),738]]);
       let actions0 = String.fromCharCode(102,114,105,99,116,105,111,110,95,109,95,57,57,0);
       let buildA: Array<any> = [631, 591, 763];
       let minivodL = String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,95,48,95,57,54,0);
      if ((1 * minivodL.length) > 2 || (minivodL.length * buildA.length) > 1) {
         buildA.push(actions0.length << (Math.min(Math.abs(2), 5)));
      }
         actions0 += `${minivodL.length + 3}`;
          let mounting7: Map<any, any> = new Map([[String.fromCharCode(120,95,53,95,112,114,111,98,108,101,109,115,0),String.fromCharCode(108,95,49,48,48,95,116,114,105,112,0)], [String.fromCharCode(103,95,56,95,115,118,113,101,110,99,0),String.fromCharCode(118,95,50,55,95,97,108,108,111,99,97,116,101,0)], [String.fromCharCode(105,115,116,115,95,113,95,50,55,0),String.fromCharCode(100,95,50,54,95,116,116,97,101,110,99,0)]]);
          let entry4: Array<any> = [100, 18];
         buildA = [actions0.length];
         mounting7.set(`${entry4.length}`, 1);
         entry4.push(entry4.length);
       let dragh = 3;
         minivodL = `${dragh}`;
         minivodL += `${dragh}`;
         dragh <<= Math.min(Math.abs(1), 3);
         buildA = [downloader2.size ^ 3];
      for (let z = 0; z < 1; z++) {
          let langK = String.fromCharCode(112,95,50,48,95,121,117,118,110,118,99,0);
          let profileS = true;
         dragh %= Math.max(1, 1);
         langK += `${1 ^ langK.length}`;
         profileS = (langK.length >> (Math.min(langK.length, 3))) < 61;
      }
       let ballJ = 5;
       let libavdeviceK = 0;
      let libyoga7 = String.fromCharCode(105,104,108,49,97,113,109,54,0) == minivodL;
      do {
         minivodL += `${ballJ >> (Math.min(Math.abs(1), 1))}`;
         if (libyoga7) {
            break;
         }
      } while (libyoga7 && (3 <= (dragh | 2)));
         buildA.push(ballJ);
      rightG.push(3);
   }
    

      guiden = new Map([[`${rightG.length}`, parseInt(`${kickg}`)]]);
    

   while (2.65 <= (kickg * parseFloat(`${entry0.length}`)) || 2.65 <= (kickg * parseFloat(`${entry0.length}`))) {
      entry0 = `${((videocommonQ ? 2 : 3) % (Math.max(rightG.length, 10)))}`;
      break;
   }

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

      guiden.set(`${kickg}`, 2 & parseInt(`${kickg}`));
      setSubmitting(true);

       let next9: Map<any, any> = new Map([[String.fromCharCode(98,101,108,111,119,95,113,95,49,53,0),733], [String.fromCharCode(118,95,53,48,95,114,101,115,101,116,115,0),238]]);
       let dropdownv = String.fromCharCode(107,95,52,50,95,115,105,109,100,0);
       let configp = 4.0;
       let statisticsinactive9 = 5.0;
      if (Array.from(next9.values()).includes(configp)) {
          let downloadingv = 2.0;
          let searchD = String.fromCharCode(102,108,105,103,104,116,95,107,95,53,0);
          let dataa: Map<any, any> = new Map([[String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,95,52,95,53,55,0),584], [String.fromCharCode(105,109,112,111,114,116,95,108,95,50,50,0),109]]);
          let bootsplashm: Map<any, any> = new Map([[String.fromCharCode(110,95,55,54,95,99,111,110,102,105,103,117,114,97,116,105,110,0),589], [String.fromCharCode(105,95,52,95,101,120,116,101,110,115,105,111,110,115,0),916], [String.fromCharCode(107,95,52,50,95,100,101,108,105,109,105,116,101,114,0),982]]);
          let defaultprofilepicu: Map<any, any> = new Map([[String.fromCharCode(107,95,50,51,95,99,111,108,108,101,99,116,105,98,108,101,115,0),797], [String.fromCharCode(109,95,52,51,95,112,105,99,116,117,114,101,0),714]]);
         configp += parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${downloadingv}`))))}`);
         downloadingv /= Math.max(dataa.size % 2, 4);
         searchD = `${bootsplashm.size}`;
         dataa = new Map([[`${bootsplashm.size}`, 3 << (Math.min(3, Math.abs(bootsplashm.size)))]]);
         defaultprofilepicu.set(`${dataa.size}`, 3);
      }
         next9.set(`${configp}`, next9.size / 2);
      let mbbanner6 = configp <= 8152023.0;
      do {
         configp *= parseFloat(`${parseInt(`${configp}`)}`);
         if (mbbanner6) {
            break;
         }
      } while (mbbanner6 && (statisticsinactive9 < 4.50));
       let upgradet = String.fromCharCode(110,95,49,50,95,115,116,101,108,108,97,114,0);
       let questH = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,99,95,50,50,0);
         configp *= parseFloat(`${questH.length}`);
      kickg -= parseFloat(`${dropdownv.length + 2}`);

      await mayi_Injury.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {

      guiden.set(`${thailandS}`, 1);
        setSubmitting(false);

      kickg /= Math.max(5, parseFloat(`${guiden.size & 3}`));
        setLoginValueErrMsg(err.message);

   while (2 <= entry0.length) {
      thailandS = mbbannerZ == 14;
      break;
   }
        return;
      }
    }

    setSubmitting(false);

      kickg += parseFloat(`${parseInt(`${kickg}`)}`);

    dispatch(hideBottomSheetAction());

   if (guiden.get(`${kickg}`) != null) {
      kickg -= parseFloat(`${2}`);
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

type mayi_FriendsHooks = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: mayi_Core,
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
}: mayi_FriendsHooks) => {
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
        <TouchableOpacity activeOpacity={0.85}
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

        {/* <TouchableOpacity activeOpacity={0.85}
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
          </TouchableOpacity> */}
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
            <TouchableOpacity activeOpacity={0.85}
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
                source={require("@static/images/profile/heartLibbufferBridge.png")}
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
              source={require("@static/images/invite/assistTextinputHook.png")}
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
                source={require("@static/images/profile/heartLibbufferBridge.png")}
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
              source={require("@static/images/invite/assistTextinputHook.png")}
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
            color: loginValue === "" || !isReadTermNCondition ? ("white") : 'white',
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
        }}
        onPressPrivacyPolicy={() => {
          dispatch(navigateToProfileScreen());
          navigation.navigate("隐私政策");
        }}
      />

      { }
      <TouchableOpacity activeOpacity={0.85}
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
