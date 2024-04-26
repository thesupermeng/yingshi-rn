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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import {
  changeScreenAction,
  hideBottomSheetAction,
  navigateToProfileScreen,
} from "@redux/actions/ww_hash";
import SpinnerOverlay from "../modal/ww_inactive_resend";
import PhoneIcon from '@static/images/matchactiveTickWeibo.svg';
import MailIcon from '@static/images/submitSentryClock.svg';
import GmailIcon from '@static/images/modulesHejiConfigure.svg';
import DropdownIcon from '@static/images/crownRegister_0hRedgoal.svg';
import { CountryPhoneList } from "./ww_screen_templateprocessor";
import FastImage from '../common/ww_result';
import { wwCatalog } from "@type/ww_dycreator_result";
import { ReadAgreementPrivacyPolicy } from "./ww_ajax";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN, IS_OTHER_SKIN } from "@utility/ww_icon";
import { wwLaunchRound } from "@utility/ww_star";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ww_runtime from "../../../../Umeng/ww_runtime";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/ww_libreactperfloggerjni_small";
import { wwIconscheduleColors } from "@api";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import wwSelect from "../../../../AppsFlyer/ww_short";
import TickedIcon from '@static/images/androidSigmob.svg';


export type wwLangWhatsapp = {
  resetValue: () => void,
}

type wwIndexDice = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<wwLangWhatsapp, wwIndexDice>(({
  onGooleLoginSuccess,
}: wwIndexDice, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(false);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<wwCatalog>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<wwVertical>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => wwIconscheduleColors.getCountries(),
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
       let kickm: Map<any, any> = new Map([[String.fromCharCode(120,95,56,56,95,116,105,109,101,112,101,114,102,114,97,109,101,0),845], [String.fromCharCode(100,117,114,97,116,105,111,110,115,95,109,95,57,50,0),224], [String.fromCharCode(108,95,50,53,95,116,97,98,108,101,112,114,105,110,116,0),459]]);
    let photoz: Array<any> = [737, 102, 211];
    let iconeditx: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,101,115,99,97,112,101,115,0),939], [String.fromCharCode(116,95,55,51,95,114,101,102,100,117,112,101,0),263]]);
    let gemfilex: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,108,101,95,107,95,56,57,0),960], [String.fromCharCode(100,95,50,53,95,108,104,115,0),623], [String.fromCharCode(105,95,51,56,95,114,101,101,110,99,114,121,112,116,0),223]]);
    let arrowupo: Map<any, any> = new Map([[String.fromCharCode(102,105,118,101,95,106,95,57,55,0),420], [String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,95,51,95,54,52,0),6], [String.fromCharCode(100,95,55,95,114,97,110,115,112,111,114,116,0),687]]);
    let episodeA: Map<any, any> = new Map([[String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,50,95,53,0),String.fromCharCode(108,95,51,56,95,101,110,100,120,0)], [String.fromCharCode(98,117,108,107,95,121,95,56,57,0),String.fromCharCode(112,107,116,104,100,114,95,106,95,56,50,0)]]);
    let playlist5 = String.fromCharCode(122,95,56,48,95,101,112,115,105,108,111,110,0);
    let kick0 = String.fromCharCode(101,95,55,56,95,115,116,97,108,108,0);
    let mbridgeF = String.fromCharCode(112,95,57,54,95,120,112,117,98,0);
      photoz.push(arrowupo.size + 1);
      photoz.push(3);
   for (let g = 0; g < 2; g++) {
      kickm = new Map([[`${gemfilex.size}`, 3]]);
   }
   while (iconeditx.get(`${kickm.size}`) == null) {
      iconeditx.set(kick0, 2);
      break;
   }
   while (5 > (2 >> (Math.min(4, playlist5.length)))) {
      iconeditx = new Map([[`${kickm.size}`, kickm.size & 3]]);
      break;
   }

    setloginType('email');

      kickm = new Map([[`${gemfilex.size}`, 3]]);
   for (let o = 0; o < 3; o++) {
      arrowupo = new Map([[`${iconeditx.size}`, 2]]);
   }
   for (let i = 0; i < 3; i++) {
      gemfilex.set(kick0, (kick0 == String.fromCharCode(99,0) ? iconeditx.size : kick0.length));
   }
   for (let y = 0; y < 3; y++) {
      playlist5 += `${kick0.length << (Math.min(2, Math.abs(kickm.size)))}`;
   }
   if ((episodeA.size ^ gemfilex.size) >= 5) {
      gemfilex.set(`${iconeditx.size}`, iconeditx.size ^ episodeA.size);
   }
    setLoginValue('');

   if (!playlist5.startsWith(`${kickm.size}`)) {
      playlist5 += "1";
   }
       let singapore5 = String.fromCharCode(98,105,116,118,101,99,115,95,56,95,53,0);
       let regeng2 = 4;
       let r_imaget = 5.0;
      let gifgoalbgp = regeng2 >= 5348401;
      do {
          let zoomS: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,111,110,115,95,115,95,50,50,0),false ], [String.fromCharCode(100,95,57,53,95,114,97,116,101,0),true ]]);
          let topich = String.fromCharCode(112,95,56,54,95,119,105,114,101,108,101,115,115,0);
          let libreactnativeblob0 = 2.0;
         regeng2 >>= Math.min(Math.abs(zoomS.size), 4);
         zoomS.set(topich, topich.length << (Math.min(Math.abs(2), 1)));
         libreactnativeblob0 /= Math.max(3, parseInt(`${libreactnativeblob0}`));
         if (gifgoalbgp) {
            break;
         }
      } while ((1.16 <= (r_imaget / (Math.max(4.62, 2))) || (4.62 / (Math.max(6, r_imaget))) <= 5.48) && gifgoalbgp);
      let pangle9 = 6169767.0 <= r_imaget;
      do {
         r_imaget -= parseFloat(`${regeng2}`);
         if (pangle9) {
            break;
         }
      } while (pangle9 && ((r_imaget - parseFloat(`${singapore5.length}`)) == 5.44));
       let statsW = 0.0;
      let typesJ = 5021963 <= regeng2;
      do {
         regeng2 |= (singapore5 == String.fromCharCode(72,0) ? parseInt(`${r_imaget}`) : singapore5.length);
         if (typesJ) {
            break;
         }
      } while (typesJ && (4 >= (3 * regeng2) && (regeng2 - 3) >= 3));
         singapore5 = `${3 >> (Math.min(Math.abs(parseInt(`${statsW}`)), 4))}`;
      if (statsW <= 1.60) {
          let tempt = 1;
          let containerB = 1.0;
          let success4 = 2;
          let configureJ: Array<any> = [String.fromCharCode(114,101,109,101,109,98,101,114,101,100,95,116,95,56,57,0), String.fromCharCode(100,95,54,56,95,108,111,111,112,0), String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,112,95,50,57,0)];
         r_imaget *= parseFloat(`${singapore5.length >> (Math.min(Math.abs(3), 2))}`);
         tempt &= configureJ.length * tempt;
         containerB *= 1;
         success4 &= 3 + configureJ.length;
      }
          let defaultlogou: Array<any> = [String.fromCharCode(119,95,48,95,118,105,100,101,111,0), String.fromCharCode(98,95,57,50,0)];
          let libhermesw = 3.0;
          let yellowanimationlivee = String.fromCharCode(115,95,49,55,95,112,114,111,116,111,98,117,102,0);
         statsW += parseInt(`${r_imaget}`) << (Math.min(1, Math.abs(regeng2)));
         defaultlogou.push(yellowanimationlivee.length % (Math.max(1, 2)));
         libhermesw -= yellowanimationlivee.length;
      for (let d = 0; d < 2; d++) {
         regeng2 %= Math.max(3, 1 / (Math.max(5, parseInt(`${statsW}`))));
      }
          let ewardedk: Map<any, any> = new Map([[String.fromCharCode(111,117,116,99,111,109,101,95,122,95,52,54,0),480], [String.fromCharCode(119,95,57,54,95,114,101,97,108,108,111,99,97,116,101,0),57], [String.fromCharCode(100,95,57,57,95,114,101,97,108,108,121,0),114]]);
          let bannerC: Array<any> = [953, 104];
          let watchR = 2.0;
         regeng2 <<= Math.min(bannerC.length, 5);
         ewardedk = new Map([[`${ewardedk.size}`, ewardedk.size]]);
         bannerC = [parseInt(`${watchR}`) / (Math.max(1, 2))];
         watchR -= 3;
      arrowupo.set(`${playlist5}`, (playlist5 == String.fromCharCode(99,0) ? episodeA.size : playlist5.length));
      iconeditx = new Map([[`${arrowupo.size}`, gemfilex.size >> (Math.min(Math.abs(arrowupo.size), 4))]]);
      episodeA.set(`${kick0}`, gemfilex.size % (Math.max(3, 6)));
   for (let e = 0; e < 1; e++) {
      photoz = [iconeditx.size << (Math.min(3, Math.abs(episodeA.size)))];
   }
    setReferralCode('');

   while (!Array.from(kickm.values()).includes(iconeditx.size)) {
      kickm = new Map([[`${episodeA.size}`, kick0.length]]);
      break;
   }
      iconeditx = new Map([[`${iconeditx.size}`, gemfilex.size]]);
      arrowupo.set(`${photoz.length}`, photoz.length / 1);
   if (1 == (episodeA.size >> (Math.min(Math.abs(kickm.size), 5))) || (kickm.size >> (Math.min(Math.abs(1), 1))) == 5) {
       let watchC: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,110,95,55,48,0),true ], [String.fromCharCode(111,95,53,51,95,116,114,97,99,107,105,110,103,0),true ]]);
       let analytic0 = String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,95,104,95,50,50,0);
       let libreanimatedb = String.fromCharCode(115,116,97,103,105,110,103,95,51,95,52,48,0);
         watchC = new Map([[`${watchC.size}`, watchC.size + analytic0.length]]);
      for (let m = 0; m < 1; m++) {
         watchC = new Map([[`${watchC.size}`, 3 & analytic0.length]]);
      }
      for (let n = 0; n < 2; n++) {
         analytic0 += `${libreanimatedb.length}`;
      }
       let qaagd = String.fromCharCode(111,95,51,49,95,116,111,107,101,110,110,102,116,116,120,0);
       let diceW = String.fromCharCode(109,95,52,95,97,100,111,98,101,0);
      for (let p = 0; p < 2; p++) {
         analytic0 += `${(analytic0 == String.fromCharCode(90,0) ? analytic0.length : watchC.size)}`;
      }
         qaagd = `${libreanimatedb.length}`;
      if ((qaagd.length << (Math.min(Math.abs(1), 2))) <= 3 && 2 <= (qaagd.length << (Math.min(Math.abs(1), 5)))) {
         qaagd += `${(qaagd == String.fromCharCode(89,0) ? analytic0.length : qaagd.length)}`;
      }
       let cnews3 = String.fromCharCode(105,95,55,53,95,112,111,116,105,115,105,111,110,0);
       let nterstitialU = String.fromCharCode(99,95,49,95,103,105,102,115,0);
      kickm = new Map([[`${gemfilex.size}`, episodeA.size]]);
   }
   if (playlist5.includes(`${kick0.length}`)) {
      kick0 = "2";
   }
    setLoginValueErrMsg(null);

       let z_center1: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,110,95,57,51,0),624], [String.fromCharCode(102,105,108,101,102,117,110,99,95,53,95,54,50,0),352]]);
       let expandT = 0.0;
         expandT += parseFloat(`${3}`);
         expandT /= Math.max(5, parseFloat(`${z_center1.size}`));
      let goalG = 6287940.0 >= expandT;
      do {
         expandT -= parseFloat(`${z_center1.size}`);
         if (goalG) {
            break;
         }
      } while (goalG && (5 < (parseInt(`${expandT}`) * z_center1.size) && 5 < (z_center1.size * parseInt(`${expandT}`))));
       let shootG = String.fromCharCode(99,95,51,56,95,99,111,110,116,111,117,114,0);
       let settingsH = String.fromCharCode(107,95,49,50,95,105,110,116,101,103,114,105,116,121,0);
         expandT /= Math.max(5, parseFloat(`${shootG.length}`));
      let debugu = shootG.length <= 6804035;
      do {
         shootG = `${2 + shootG.length}`;
         if (debugu) {
            break;
         }
      } while ((3 <= (z_center1.size / (Math.max(shootG.length, 1))) && (z_center1.size / (Math.max(1, shootG.length))) <= 3) && debugu);
      episodeA.set(`${kick0}`, 1);
   for (let v = 0; v < 1; v++) {
      kickm = new Map([[`${photoz.length}`, photoz.length]]);
   }
   let eyeopenY = 8133832 >= iconeditx.size;
   do {
      iconeditx.set(kick0, 1 - kick0.length);
      if (eyeopenY) {
         break;
      }
   } while (eyeopenY && ((iconeditx.size >> (Math.min(playlist5.length, 1))) > 4));
   while ((3 / (Math.max(8, iconeditx.size))) < 3 && 3 < (iconeditx.size / (Math.max(3, kick0.length)))) {
       let dacccfaabfbcbadeebddcabacdffdbB = String.fromCharCode(103,95,49,57,95,109,120,112,101,103,0);
       let taiwanw = String.fromCharCode(111,117,116,112,117,116,95,121,95,56,49,0);
          let libfb0 = 0.0;
          let statisticsT = String.fromCharCode(120,95,50,50,95,105,100,105,111,109,0);
         taiwanw = `${1 & statisticsT.length}`;
         libfb0 /= Math.max(parseFloat(`${2}`), 5);
         statisticsT += `${parseInt(`${libfb0}`)}`;
          let ajax5 = 3.0;
          let confirmationh: Map<any, any> = new Map([[String.fromCharCode(117,95,52,48,95,115,100,112,0),664], [String.fromCharCode(119,95,56,52,95,102,105,110,97,108,105,122,101,0),692]]);
         dacccfaabfbcbadeebddcabacdffdbB = `${dacccfaabfbcbadeebddcabacdffdbB.length * 2}`;
         ajax5 *= parseFloat(`${parseInt(`${ajax5}`) * 2}`);
         confirmationh = new Map([[`${confirmationh.size}`, parseInt(`${ajax5}`)]]);
          let profileK: Map<any, any> = new Map([[String.fromCharCode(117,110,115,99,97,108,101,95,52,95,56,52,0),String.fromCharCode(109,105,112,115,102,112,117,95,118,95,54,50,0)], [String.fromCharCode(105,110,116,101,110,115,105,116,121,95,104,95,54,48,0),String.fromCharCode(121,95,56,49,95,121,117,118,109,112,101,103,0)], [String.fromCharCode(117,110,115,112,105,108,108,95,51,95,49,48,48,0),String.fromCharCode(101,95,56,57,95,116,114,117,101,109,111,116,105,111,110,114,116,0)]]);
         taiwanw += `${3 / (Math.max(7, taiwanw.length))}`;
         profileK.set(`${profileK.size}`, profileK.size);
       let giftbuttonR = 4.0;
       let jingdong6 = 0.0;
          let holderY = 3.0;
          let footballG = String.fromCharCode(114,95,54,57,95,99,111,108,111,114,115,0);
         taiwanw = `${footballG.length}`;
         holderY -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${holderY}`)), 4))}`);
         footballG += `${parseInt(`${holderY}`) / 2}`;
      if (4.19 >= (giftbuttonR / (Math.max(jingdong6, 7))) && (jingdong6 / (Math.max(10, giftbuttonR))) >= 4.19) {
         jingdong6 *= dacccfaabfbcbadeebddcabacdffdbB.length & taiwanw.length;
      }
      iconeditx = new Map([[`${kickm.size}`, 2 * photoz.length]]);
      break;
   }
      kick0 += `${photoz.length | arrowupo.size}`;
    setReferralCodeErrMsg(null);

      episodeA = new Map([[`${photoz.length}`, playlist5.length]]);
      kick0 = `${gemfilex.size}`;
      photoz = [kickm.size];
      gemfilex = new Map([[`${arrowupo.size}`, arrowupo.size / 1]]);
      kick0 += "2";
    setReadTermNCondition(false);

   while (episodeA.get(`${photoz.length}`) != null) {
      episodeA = new Map([[`${photoz.length}`, mbridgeF.length]]);
      break;
   }
   if (playlist5.length < episodeA.size) {
      playlist5 = `${3 % (Math.max(9, photoz.length))}`;
   }
   if ((3 >> (Math.min(1, kick0.length))) <= 1 && (kickm.size >> (Math.min(kick0.length, 3))) <= 3) {
       let lang0: Array<any> = [175, 111, 142];
       let libturbomodulejsijnic = 2;
       let rncore3 = 3.0;
       let statisticsinactiveP = 1;
       let signinuph = 1;
          let pointX = 2.0;
          let bdxadsdkv = String.fromCharCode(118,108,102,102,95,54,95,52,57,0);
         rncore3 -= parseFloat(`${1 - libturbomodulejsijnic}`);
         pointX *= 2;
         bdxadsdkv = `${parseInt(`${pointX}`) & bdxadsdkv.length}`;
         statisticsinactiveP >>= Math.min(Math.abs(statisticsinactiveP - lang0.length), 2);
      let untickj = 7498813 <= statisticsinactiveP;
      do {
         statisticsinactiveP /= Math.max(2, signinuph);
         if (untickj) {
            break;
         }
      } while (((statisticsinactiveP | libturbomodulejsijnic) == 3 || 5 == (statisticsinactiveP | 3)) && untickj);
         libturbomodulejsijnic *= 2 / (Math.max(4, signinuph));
         statisticsinactiveP *= lang0.length;
      let long_moc = signinuph <= 6458054;
      do {
          let pause9: Array<any> = [970, 181];
         signinuph &= pause9.length;
         if (long_moc) {
            break;
         }
      } while (long_moc && ((signinuph / (Math.max(7, rncore3))) < 3.18));
      let loginsuccessI = lang0.length >= 7106976;
      do {
          let graphL = 5.0;
         lang0 = [2 * libturbomodulejsijnic];
         graphL += parseInt(`${graphL}`) | parseInt(`${graphL}`);
         if (loginsuccessI) {
            break;
         }
      } while (loginsuccessI && (rncore3 <= 3.44));
      let topon5 = 6337734.0 >= rncore3;
      do {
         rncore3 /= Math.max(parseFloat(`${1}`), 3);
         if (topon5) {
            break;
         }
      } while ((lang0.length <= 1) && topon5);
      let alertD = 6376580 <= libturbomodulejsijnic;
      do {
          let proxyI = 1.0;
          let lightx = String.fromCharCode(105,95,50,57,95,99,111,109,109,105,116,116,101,114,0);
         libturbomodulejsijnic *= statisticsinactiveP;
         proxyI *= parseFloat(`${parseInt(`${proxyI}`)}`);
         lightx = `${1 % (Math.max(1, lightx.length))}`;
         if (alertD) {
            break;
         }
      } while (alertD && (libturbomodulejsijnic <= statisticsinactiveP));
       let basketballhometeamf = 1.0;
          let diced: Map<any, any> = new Map([[String.fromCharCode(104,95,55,50,95,100,105,115,112,111,115,97,108,0),true ], [String.fromCharCode(99,95,55,53,95,100,101,115,104,97,107,101,0),true ]]);
          let iconeditM = 2.0;
         statisticsinactiveP >>= Math.min(1, Math.abs(statisticsinactiveP / (Math.max(diced.size, 8))));
         diced = new Map([[`${iconeditM}`, 1 ^ parseInt(`${iconeditM}`)]]);
         statisticsinactiveP -= signinuph;
       let formi: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,51,95,51,57,0),129], [String.fromCharCode(104,121,98,114,105,100,95,108,95,49,51,0),926], [String.fromCharCode(112,95,54,54,95,112,114,101,102,101,114,115,0),516]]);
       let libavdeviceo: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,97,115,115,111,99,95,49,95,51,57,0),607], [String.fromCharCode(121,95,54,49,95,105,100,115,0),790]]);
      if (basketballhometeamf < 1.51) {
         statisticsinactiveP &= 1 / (Math.max(1, formi.size));
      }
      if (Array.from(formi.values()).includes(statisticsinactiveP)) {
          let soundP = 0.0;
          let dialoga = String.fromCharCode(122,95,50,95,107,101,121,115,0);
          let libavformatX = String.fromCharCode(114,95,49,55,95,115,105,99,107,0);
          let backiconf = String.fromCharCode(119,95,50,56,95,112,105,99,109,101,109,115,101,116,0);
          let nnewarchdefaultsA = 2.0;
         formi = new Map([[`${basketballhometeamf}`, 1]]);
         soundP /= Math.max(parseFloat(`${parseInt(`${nnewarchdefaultsA}`)}`), 5);
         dialoga += "2";
         libavformatX += `${parseInt(`${soundP}`) | parseInt(`${nnewarchdefaultsA}`)}`;
         backiconf += `${libavformatX.length}`;
      }
      kick0 = `${parseInt(`${rncore3}`)}`;
   }
      gemfilex.set(mbridgeF, photoz.length / (Math.max(mbridgeF.length, 5)));
      arrowupo = new Map([[`${iconeditx.size}`, iconeditx.size]]);

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
       let cancelg: Array<any> = [String.fromCharCode(101,99,116,97,110,103,108,101,95,51,95,49,57,0), String.fromCharCode(116,95,49,95,116,101,120,116,108,101,0)];
    let stationsH = false;
    let textinputi = 1.0;
    let defaultfootballbgQ = 5;
    let bootsplashu: Array<any> = [99, 553];
    let assistw: Array<any> = [230, 82];
    let yellowanimationliveE = 2.0;
    let nativeG = String.fromCharCode(105,95,52,54,95,110,101,97,114,101,114,0);
    let side8 = 0;
    let buttonb: Map<any, any> = new Map([[String.fromCharCode(113,95,49,95,109,98,101,100,116,108,115,0),759], [String.fromCharCode(102,108,97,116,116,101,110,95,115,95,52,52,0),76]]);
    let flipperI: Array<any> = [335, 480, 40];
    let vignette2 = 2.0;
   if (assistw.includes(yellowanimationliveE)) {
      yellowanimationliveE *= 3 << (Math.min(Math.abs(parseInt(`${yellowanimationliveE}`)), 5));
   }
   if (stationsH) {
      stationsH = !stationsH;
   }
      yellowanimationliveE -= 3 + parseInt(`${textinputi}`);
   for (let z = 0; z < 1; z++) {
       let miniB = String.fromCharCode(99,111,112,105,101,115,95,97,95,52,57,0);
       let abidetect6 = 4.0;
       let lineg = 2.0;
         miniB = `${parseInt(`${abidetect6}`) - miniB.length}`;
       let gifgoalbg1 = 1;
       let cancelI = 3;
         cancelI -= 3 * gifgoalbg1;
          let fillI = String.fromCharCode(109,95,54,57,95,97,117,116,111,100,111,119,110,108,111,97,100,0);
          let roomT = 2.0;
         miniB = `${parseInt(`${abidetect6}`) ^ miniB.length}`;
         fillI += `${fillI.length}`;
         roomT -= (String.fromCharCode(71,0) == fillI ? parseInt(`${roomT}`) : fillI.length);
         miniB += "1";
         lineg /= Math.max(1, cancelI + parseInt(`${abidetect6}`));
         cancelI -= parseInt(`${lineg}`) / 1;
      let checkboxa = cancelI >= 8401262;
      do {
         cancelI <<= Math.min(Math.abs((miniB == String.fromCharCode(104,0) ? cancelI : miniB.length)), 4);
         if (checkboxa) {
            break;
         }
      } while ((!miniB.includes(`${cancelI}`)) && checkboxa);
      for (let h = 0; h < 3; h++) {
         cancelI %= Math.max(4, gifgoalbg1 + 3);
      }
      bootsplashu = [miniB.length + assistw.length];
   }
   while ((textinputi + defaultfootballbgQ) == 3.54) {
      defaultfootballbgQ |= 3;
      break;
   }
   for (let w = 0; w < 3; w++) {
      textinputi /= Math.max(3, ((stationsH ? 3 : 3) - parseInt(`${textinputi}`)));
   }
      stationsH = 53 >= defaultfootballbgQ;
   if (3 < (assistw.length ^ 3) || (defaultfootballbgQ ^ assistw.length) < 3) {
      assistw = [parseInt(`${yellowanimationliveE}`) % (Math.max(5, nativeG.length))];
   }
   let renderF = defaultfootballbgQ <= 6582381;
   do {
      defaultfootballbgQ &= cancelg.length - 2;
      if (renderF) {
         break;
      }
   } while ((2.22 < (yellowanimationliveE - 2.9) || 3 < (defaultfootballbgQ - parseInt(`${yellowanimationliveE}`))) && renderF);
       let fastforwardP = 1;
       let sider = 5.0;
         sider *= fastforwardP;
         fastforwardP *= parseInt(`${sider}`) ^ fastforwardP;
       let libyogaU = String.fromCharCode(111,95,54,52,95,113,112,113,115,99,97,108,101,0);
       let streamingu = String.fromCharCode(111,95,52,95,102,116,121,112,0);
       let refreshM: Array<any> = [80, 670, 84];
       let accepted8: Array<any> = [533, 419, 989];
         fastforwardP /= Math.max(1, parseInt(`${sider}`));
       let k_imageN = String.fromCharCode(103,95,55,53,95,109,117,108,116,105,112,108,121,0);
      defaultfootballbgQ /= Math.max(cancelg.length * 2, 4);
   if (stationsH) {
      stationsH = defaultfootballbgQ == 22 && bootsplashu.length == 22;
   }
      defaultfootballbgQ &= cancelg.length / 3;
   while (3 > (4 >> (Math.min(3, assistw.length))) || 1.54 > (1.41 + yellowanimationliveE)) {
       let usernameD = 5;
       let kicki: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,54,95,53,52,0),280], [String.fromCharCode(101,95,57,54,95,115,117,98,112,97,116,104,0),991]]);
       let blackJ: Map<any, any> = new Map([[String.fromCharCode(122,95,52,50,95,118,105,103,110,101,116,116,105,110,103,0),true ], [String.fromCharCode(122,95,52,53,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0),true ]]);
       let memberQ = String.fromCharCode(103,95,51,53,95,115,105,103,102,105,103,0);
       let megaphonee = String.fromCharCode(114,101,113,117,101,115,116,101,114,115,95,103,95,49,55,0);
         kicki.set(megaphonee, megaphonee.length);
          let cornerkickx: Array<any> = [256, 387, 334];
          let sheetr = true;
          let auto_vqW = String.fromCharCode(112,105,110,107,95,111,95,49,57,0);
         megaphonee = `${blackJ.size ^ auto_vqW.length}`;
         cornerkickx = [cornerkickx.length];
         sheetr = !sheetr;
         auto_vqW = `${cornerkickx.length - 3}`;
      while (!Array.from(kicki.values()).includes(usernameD)) {
         usernameD <<= Math.min(4, Math.abs(2));
         break;
      }
      while (megaphonee.endsWith(`${usernameD}`)) {
         usernameD %= Math.max(4, megaphonee.length + usernameD);
         break;
      }
       let libmapbufferjniy = String.fromCharCode(105,95,57,54,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0);
       let mbnativeI = String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,106,95,56,56,0);
         blackJ.set(`${usernameD}`, usernameD);
         libmapbufferjniy += "3";
       let iconstarA = 3.0;
       let moonF = 4.0;
         iconstarA /= Math.max(1, blackJ.size);
      if (mbnativeI.length > 2) {
          let traminiK = 4;
         iconstarA *= 3;
         traminiK %= Math.max(1, traminiK);
      }
      while (5.25 > (moonF / 5.94) || 2 > (5 * usernameD)) {
         usernameD += kicki.size;
         break;
      }
       let n_viewP = 5.0;
       let lightY = 0.0;
         memberQ += `${3 - kicki.size}`;
         lightY *= kicki.size;
      while (memberQ.startsWith(`${blackJ.size}`)) {
         memberQ += `${3 >> (Math.min(Math.abs(usernameD), 3))}`;
         break;
      }
      yellowanimationliveE += 2 >> (Math.min(3, Math.abs(defaultfootballbgQ)));
      break;
   }
   if (3 == assistw.length) {
      bootsplashu.push(1 >> (Math.min(Math.abs(parseInt(`${yellowanimationliveE}`)), 3)));
   }
       let backicon_ = 3.0;
      for (let i = 0; i < 1; i++) {
         backicon_ *= parseInt(`${backicon_}`);
      }
         backicon_ /= Math.max(5, 1);
         backicon_ -= 1 / (Math.max(5, parseInt(`${backicon_}`)));
      stationsH = bootsplashu.length >= 50;
       let firebase_: Map<any, any> = new Map([[String.fromCharCode(104,109,97,99,105,100,95,120,95,49,54,0),true ], [String.fromCharCode(113,95,48,95,109,121,115,101,108,102,0),false ], [String.fromCharCode(109,95,57,56,95,116,104,114,101,101,115,116,97,116,101,0),true ]]);
       let videocommonZ = 1.0;
       let footballfieldx = 2.0;
      for (let h = 0; h < 1; h++) {
         footballfieldx /= Math.max(3 << (Math.min(Math.abs(parseInt(`${footballfieldx}`)), 3)), 2);
      }
      while (!Array.from(firebase_.keys()).includes(`${footballfieldx}`)) {
         firebase_.set(`${footballfieldx}`, parseInt(`${footballfieldx}`));
         break;
      }
      yellowanimationliveE *= 3 | side8;
      textinputi += assistw.length;
      buttonb = new Map([[`${cancelg.length}`, ((stationsH ? 2 : 4) / (Math.max(cancelg.length, 2)))]]);

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
       let tempc = 5;
    let submitX = String.fromCharCode(101,120,112,101,114,116,95,52,95,56,57,0);
    let loginsuccessr = String.fromCharCode(115,113,117,97,114,101,115,95,114,95,53,57,0);
    let canvas9: Array<any> = [String.fromCharCode(105,95,50,53,95,102,115,121,110,99,0), String.fromCharCode(115,104,97,100,111,119,115,95,49,95,56,57,0)];
    let weiboi = false;
    let footballfiledlayout0: Array<any> = [37, 257];
    let incidentu = true;
    let jingdongo: Array<any> = [819, 731, 398];
    let iconnewsshare2: Map<any, any> = new Map([[String.fromCharCode(118,95,56,50,95,101,120,112,101,99,116,101,100,0),false ], [String.fromCharCode(115,108,117,114,112,95,50,95,54,0),false ]]);
    let mbnativec: Map<any, any> = new Map([[String.fromCharCode(97,118,99,111,100,101,99,95,112,95,50,50,0),632], [String.fromCharCode(100,101,108,97,121,115,95,49,95,55,48,0),731]]);
    let halfB = 3.0;
   if (1 == canvas9.length) {
       let progressu = 4;
       let iconbackwhiteS = 0;
       let giftbutton_ = String.fromCharCode(109,99,100,101,99,95,105,95,54,52,0);
       let singaporev = 5.0;
      while (1 <= (giftbutton_.length + 5) && 5 <= (5 + iconbackwhiteS)) {
         iconbackwhiteS ^= progressu;
         break;
      }
         singaporev += iconbackwhiteS | progressu;
         giftbutton_ += "1";
          let t_managerM = String.fromCharCode(98,95,50,57,95,100,114,97,110,100,0);
          let shootyesgoal3 = String.fromCharCode(114,97,116,105,111,110,97,108,95,120,95,54,53,0);
          let x_unlockA = 3.0;
         giftbutton_ += `${progressu}`;
         t_managerM += `${parseInt(`${x_unlockA}`) | t_managerM.length}`;
         shootyesgoal3 += "2";
         x_unlockA /= Math.max(5, parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${x_unlockA}`))))}`));
         giftbutton_ += "1";
      let bridgeQ = 7145181.0 <= singaporev;
      do {
         singaporev += iconbackwhiteS | giftbutton_.length;
         if (bridgeQ) {
            break;
         }
      } while (bridgeQ && (singaporev < 2.17));
      while ((singaporev / (Math.max(5.62, 9))) < 1.78 || (singaporev / 5.62) < 1.84) {
         singaporev *= giftbutton_.length >> (Math.min(4, Math.abs(progressu)));
         break;
      }
         iconbackwhiteS -= 3 + parseInt(`${singaporev}`);
      if (2 >= progressu) {
          let buffer1 = 2.0;
         singaporev -= iconbackwhiteS;
         buffer1 -= parseFloat(`${3}`);
      }
         progressu += 1;
         progressu *= (giftbutton_ == String.fromCharCode(48,0) ? giftbutton_.length : parseInt(`${singaporev}`));
         progressu %= Math.max(1 & progressu, 5);
      canvas9.push(tempc);
   }

    if (isSubmitting) return;

   for (let d = 0; d < 1; d++) {
       let sheetk: Map<any, any> = new Map([[String.fromCharCode(115,101,113,117,101,110,99,101,95,113,95,54,55,0),299], [String.fromCharCode(116,95,56,48,95,114,101,108,111,97,100,0),744]]);
      for (let w = 0; w < 2; w++) {
         sheetk.set(`${sheetk.size}`, sheetk.size ^ sheetk.size);
      }
         sheetk.set(`${sheetk.size}`, 2 & sheetk.size);
      if ((sheetk.size % 4) > 1 || 4 > (sheetk.size % 4)) {
          let telemetryY = String.fromCharCode(100,95,51,49,95,111,118,101,114,115,99,114,111,108,108,0);
          let liveX = false;
         sheetk.set(`${liveX}`, telemetryY.length);
      }
      weiboi = footballfiledlayout0.length > iconnewsshare2.size;
   }

    if (isReadTermNCondition == false) {

   for (let a = 0; a < 3; a++) {
      iconnewsshare2 = new Map([[loginsuccessr, submitX.length]]);
   }
      wwLaunchRound.showToast('请勾选用户协议和隐私协议');

      jingdongo = [iconnewsshare2.size];
      return;

   while (tempc <= 4) {
      tempc += (loginsuccessr == String.fromCharCode(120,0) ? jingdongo.length : loginsuccessr.length);
      break;
   }
    }

    let userInfo;

       let signinupf = String.fromCharCode(99,114,111,115,115,102,97,100,101,95,113,95,51,51,0);
       let countdownl = String.fromCharCode(122,95,51,48,95,104,101,118,99,0);
       let buttont = 0.0;
          let componentV = String.fromCharCode(102,111,114,109,97,116,116,101,114,95,54,95,51,0);
          let debugI = String.fromCharCode(118,95,53,49,95,113,100,101,108,116,97,0);
         signinupf += `${parseInt(`${buttont}`) % (Math.max(debugI.length, 7))}`;
         componentV = `${componentV.length + 1}`;
         debugI = `${(componentV == String.fromCharCode(115,0) ? componentV.length : componentV.length)}`;
      let forwardL = signinupf.length >= 6147896;
      do {
         signinupf = `${(countdownl == String.fromCharCode(109,0) ? signinupf.length : countdownl.length)}`;
         if (forwardL) {
            break;
         }
      } while (forwardL && (countdownl.length <= 4));
          let libflipperO = String.fromCharCode(101,95,54,57,95,109,116,97,102,0);
          let greyarrowupG = true;
         buttont *= parseInt(`${buttont}`);
         libflipperO = `${libflipperO.length}`;
         greyarrowupG = libflipperO.length <= 48 && greyarrowupG;
         buttont += signinupf.length - 1;
      while (1.36 <= (signinupf.length * buttont) && 1 <= (signinupf.length / 4)) {
         signinupf += `${countdownl.length - parseInt(`${buttont}`)}`;
         break;
      }
      while ((signinupf.length / 5) >= 5 || (parseInt(`${buttont}`) / (Math.max(signinupf.length, 6))) >= 5) {
         buttont *= parseInt(`${buttont}`) << (Math.min(Math.abs(3), 4));
         break;
      }
      if (5.12 < buttont) {
         signinupf += `${signinupf.length}`;
      }
       let lnewsd = String.fromCharCode(109,105,112,115,100,115,112,95,48,95,49,48,0);
       let bellZ = String.fromCharCode(111,95,49,49,95,119,109,97,118,111,105,99,101,0);
      for (let y = 0; y < 3; y++) {
         countdownl += `${bellZ.length % (Math.max(2, countdownl.length))}`;
      }
      mbnativec.set(loginsuccessr, footballfiledlayout0.length >> (Math.min(loginsuccessr.length, 1)));

    try {

       let render9: Array<any> = [243, 915];
       let listW: Map<any, any> = new Map([[String.fromCharCode(109,95,49,56,95,114,101,106,101,99,116,105,111,110,115,0),805], [String.fromCharCode(102,95,56,57,95,111,112,116,103,114,111,117,112,0),228], [String.fromCharCode(115,108,111,116,115,95,50,95,49,53,0),544]]);
      for (let d = 0; d < 1; d++) {
         listW = new Map([[`${listW.size}`, listW.size % 3]]);
      }
         listW.set(`${render9.length}`, listW.size);
      let giftb = listW.size <= 5188452;
      do {
         listW.set(`${render9.length}`, 1);
         if (giftb) {
            break;
         }
      } while (((5 << (Math.min(1, render9.length))) > 2 && (render9.length << (Math.min(Math.abs(listW.size), 2))) > 5) && giftb);
         listW.set(`${render9.length}`, render9.length << (Math.min(5, Math.abs(listW.size))));
      while (!Array.from(listW.keys()).includes(`${render9.length}`)) {
          let room4: Map<any, any> = new Map([[String.fromCharCode(114,95,53,53,95,97,99,111,108,111,114,115,0),false ], [String.fromCharCode(99,97,110,99,101,108,108,105,110,103,95,50,95,53,0),true ]]);
          let mbnativeadvancedF: Array<any> = [23, 892, 37];
          let weatherU = false;
          let configureh = String.fromCharCode(102,114,97,109,101,104,97,115,104,95,98,95,56,54,0);
          let launchX: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,112,101,100,95,50,95,53,49,0),155], [String.fromCharCode(103,101,110,101,114,97,103,101,95,57,95,57,50,0),287], [String.fromCharCode(97,112,105,95,98,95,49,54,0),937]]);
         render9.push(2);
         room4.set(`${weatherU}`, ((weatherU ? 3 : 1) - 1));
         mbnativeadvancedF = [3];
         configureh += `${configureh.length / 2}`;
         launchX = new Map([[`${mbnativeadvancedF.length}`, 1 << (Math.min(5, configureh.length))]]);
         break;
      }
      if (2 < render9.length) {
         render9.push(render9.length);
      }
      weiboi = canvas9.length == 53 || incidentu;
      await GoogleSignin.hasPlayServices();

      submitX += `${jingdongo.length}`;

      if (await GoogleSignin.isSignedIn()) {

      submitX += `${mbnativec.size / (Math.max(1, 6))}`;
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

       let gifgoalbgW: Array<any> = [String.fromCharCode(100,95,50,95,111,117,116,113,117,101,117,101,0), String.fromCharCode(115,95,56,51,95,102,111,114,109,0)];
       let v_centerF = 5.0;
          let mergerL: Array<any> = [10, 105];
         v_centerF -= 2;
         mergerL = [3];
         gifgoalbgW = [gifgoalbgW.length];
      weiboi = 17 == iconnewsshare2.size && loginsuccessr == String.fromCharCode(106,0);
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   for (let f = 0; f < 2; f++) {
       let preview4 = 4.0;
       let shrinkf = 1;
       let otherX = 5.0;
       let zhuboo: Map<any, any> = new Map([[String.fromCharCode(105,95,57,57,95,110,111,116,99,104,101,100,0),310], [String.fromCharCode(121,95,50,57,95,97,117,116,111,114,101,115,105,122,105,110,103,0),689], [String.fromCharCode(115,109,115,95,110,95,51,50,0),498]]);
          let g_hashp: Map<any, any> = new Map([[String.fromCharCode(116,111,100,97,121,95,108,95,55,49,0),848], [String.fromCharCode(109,95,53,49,95,116,105,99,107,101,116,115,0),48], [String.fromCharCode(100,117,114,103,101,114,95,111,95,52,54,0),902]]);
          let xvodC = 3.0;
          let datav: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,99,111,110,100,101,110,115,97,98,108,101,0),String.fromCharCode(104,95,57,48,95,97,108,112,104,97,0)], [String.fromCharCode(121,95,53,56,95,112,105,99,116,117,114,101,0),String.fromCharCode(109,98,117,102,95,122,95,49,57,0)], [String.fromCharCode(117,112,108,111,97,100,97,98,108,101,95,117,95,50,52,0),String.fromCharCode(99,95,51,50,95,101,110,116,114,105,101,115,0)]]);
         shrinkf *= shrinkf % 3;
         g_hashp.set(`${datav.size}`, g_hashp.size + datav.size);
         xvodC *= 1;
       let penaltygoalr = 2.0;
      if (penaltygoalr > shrinkf) {
         penaltygoalr *= parseFloat(`${1}`);
      }
      while (3.76 > (preview4 / 4.73) && 4 > (parseInt(`${preview4}`) / (Math.max(4, shrinkf)))) {
         shrinkf >>= Math.min(2, Math.abs(3));
         break;
      }
      for (let f = 0; f < 1; f++) {
         zhuboo = new Map([[`${preview4}`, shrinkf]]);
      }
       let middlebrightnessU = 4;
       let termsk = 0;
          let module3 = String.fromCharCode(105,95,51,50,95,114,101,108,97,121,111,117,116,0);
          let iconplayT = 2.0;
         otherX *= 3;
         module3 += `${module3.length}`;
         iconplayT /= Math.max(3 % (Math.max(3, parseInt(`${iconplayT}`))), 2);
      for (let s = 0; s < 3; s++) {
          let internetN: Array<any> = [601, 475, 874];
          let vietnamJ = 0.0;
          let macauL = String.fromCharCode(118,95,54,52,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0);
         penaltygoalr -= parseFloat(`${termsk & parseInt(`${penaltygoalr}`)}`);
         internetN = [1];
         vietnamJ -= parseFloat(`${3}`);
         macauL += `${parseInt(`${vietnamJ}`)}`;
      }
         shrinkf |= parseInt(`${penaltygoalr}`);
      while ((shrinkf + 4) > 4 && (preview4 - 4.14) > 3.2) {
         shrinkf |= parseInt(`${otherX}`);
         break;
      }
         otherX -= 2 >> (Math.min(4, Math.abs(parseInt(`${penaltygoalr}`))));
         zhuboo.set(`${penaltygoalr}`, parseInt(`${penaltygoalr}`) - zhuboo.size);
      submitX += `${((incidentu ? 4 : 3) >> (Math.min(Math.abs(1), 5)))}`;
   }
        

      canvas9 = [canvas9.length + 1];
        wwLaunchRound.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   while (5 >= loginsuccessr.length) {
       let trash9: Map<any, any> = new Map([[String.fromCharCode(106,95,56,95,115,117,112,111,114,116,101,100,0),String.fromCharCode(118,109,97,102,109,111,116,105,111,110,95,105,95,52,56,0)], [String.fromCharCode(115,95,52,56,95,99,104,101,99,107,105,110,0),String.fromCharCode(100,114,105,118,101,114,95,98,95,53,57,0)], [String.fromCharCode(112,101,97,99,104,95,113,95,51,0),String.fromCharCode(107,95,54,49,95,97,109,101,120,0)]]);
      while ((trash9.size + 2) >= 2) {
         trash9 = new Map([[`${trash9.size}`, trash9.size >> (Math.min(Math.abs(trash9.size), 3))]]);
         break;
      }
       let transferH = 5;
      for (let s = 0; s < 3; s++) {
         trash9 = new Map([[`${trash9.size}`, transferH]]);
      }
      loginsuccessr += `${jingdongo.length}`;
      break;
   }
        

   if ((4 | footballfiledlayout0.length) == 1 || (footballfiledlayout0.length | 4) == 1) {
       let sliderv = String.fromCharCode(104,95,57,49,95,99,117,98,105,99,0);
       let loginQ: Array<any> = [119, 304];
       let turnr = 1.0;
       let type_z1Y = 1.0;
       let leftH = false;
       let becomeF: Array<any> = [927, 567, 13];
       let fcdaebecbcbafcdfceaaeccfeacdbc: Array<any> = [831, 596, 109];
      for (let b = 0; b < 2; b++) {
          let vertical3 = String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,55,95,51,50,0);
          let balln = 5;
         becomeF.push(balln);
         vertical3 += `${vertical3.length % 1}`;
         balln %= Math.max(1 - vertical3.length, 1);
      }
      while (!sliderv.endsWith(`${loginQ.length}`)) {
          let nalyticsV = String.fromCharCode(102,105,108,116,101,114,105,110,103,95,101,95,51,49,0);
          let reactnativejsJ = 5.0;
          let buttonq = 2;
          let targetC: Array<any> = [382, 246];
          let sellv = String.fromCharCode(109,95,50,50,95,111,110,121,120,100,0);
         loginQ.push((sliderv == String.fromCharCode(113,0) ? sliderv.length : targetC.length));
         nalyticsV += `${buttonq}`;
         reactnativejsJ *= parseFloat(`${buttonq * sellv.length}`);
         targetC = [buttonq / 2];
         sellv += `${parseInt(`${reactnativejsJ}`) * 3}`;
         break;
      }
          let single2 = String.fromCharCode(111,95,57,50,95,100,109,97,120,0);
         loginQ.push(parseInt(`${turnr}`) - 1);
         single2 = `${single2.length}`;
      if (!sliderv.startsWith(`${becomeF.length}`)) {
          let iconplayP = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,95,57,95,57,51,0);
         sliderv += `${3 << (Math.min(2, becomeF.length))}`;
         iconplayP += `${iconplayP.length / (Math.max(iconplayP.length, 2))}`;
      }
         fcdaebecbcbafcdfceaaeccfeacdbc = [parseInt(`${turnr}`) - 2];
          let empty3 = String.fromCharCode(112,108,97,121,98,97,99,107,95,98,95,55,0);
          let darkX: Map<any, any> = new Map([[String.fromCharCode(111,95,55,95,104,109,104,100,0),852], [String.fromCharCode(114,101,100,117,110,100,97,110,99,121,95,100,95,57,52,0),936]]);
          let penaltyq = false;
         loginQ.push((sliderv == String.fromCharCode(83,0) ? sliderv.length : loginQ.length));
         empty3 = `${((penaltyq ? 2 : 5))}`;
         darkX.set(`${penaltyq}`, 1 % (Math.max(8, darkX.size)));
       let spec8: Array<any> = [762, 403];
       let downloaderx: Array<any> = [586, 481];
      if ((5 << (Math.min(4, becomeF.length))) >= 4 && 5 >= (loginQ.length << (Math.min(3, becomeF.length)))) {
          let modelsl: Map<any, any> = new Map([[String.fromCharCode(117,95,50,51,95,117,110,102,111,114,109,97,116,116,101,100,0),403], [String.fromCharCode(109,111,99,107,115,95,119,95,56,49,0),409]]);
          let libavutilu = 2.0;
          let selectS = String.fromCharCode(98,105,116,118,101,99,115,95,100,95,55,49,0);
         becomeF.push(2 & parseInt(`${type_z1Y}`));
         modelsl.set(`${libavutilu}`, 2 + modelsl.size);
         libavutilu -= parseFloat(`${modelsl.size}`);
         selectS = `${(String.fromCharCode(111,0) == selectS ? parseInt(`${libavutilu}`) : selectS.length)}`;
      }
         downloaderx.push((3 + (leftH ? 1 : 2)));
          let catagory5 = String.fromCharCode(97,95,50,48,95,99,101,110,116,101,114,105,110,103,0);
          let videovarF = String.fromCharCode(105,95,49,57,95,117,100,116,97,0);
         turnr /= Math.max(5, parseFloat(`${3 ^ catagory5.length}`));
         catagory5 += "1";
         videovarF += `${videovarF.length}`;
       let soundC = 0.0;
       let canvasi = 3.0;
      while (3 > (3 % (Math.max(1, downloaderx.length))) && 3 > downloaderx.length) {
         leftH = loginQ.includes(leftH);
         break;
      }
      let time_l8 = turnr >= 8520388.0;
      do {
         turnr += parseFloat(`${downloaderx.length}`);
         if (time_l8) {
            break;
         }
      } while (time_l8 && ((1 ^ becomeF.length) >= 2));
      if (!leftH) {
         leftH = downloaderx.includes(type_z1Y);
      }
      tempc >>= Math.min(4, Math.abs(tempc | 3));
   }
        wwLaunchRound.showToast('谷歌服务获取失败');
      } else {

       let qaagh = String.fromCharCode(116,102,100,116,95,108,95,53,52,0);
       let searchg: Map<any, any> = new Map([[String.fromCharCode(108,95,52,57,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0),String.fromCharCode(114,95,56,56,95,112,97,103,101,108,105,115,116,0)], [String.fromCharCode(114,95,55,50,95,97,108,101,114,116,0),String.fromCharCode(114,101,110,100,101,114,101,114,95,48,95,55,57,0)], [String.fromCharCode(121,95,53,51,95,109,101,110,116,105,111,110,0),String.fromCharCode(105,115,115,117,101,114,115,95,53,95,57,51,0)]]);
       let librrcp = 3.0;
          let zhuboM = String.fromCharCode(103,95,50,53,95,98,105,110,98,110,0);
          let constantsC = String.fromCharCode(117,115,116,111,109,95,97,95,52,53,0);
          let constantsC0 = String.fromCharCode(99,95,57,50,95,110,101,105,103,104,98,111,114,105,110,103,0);
         qaagh += "1";
         zhuboM = `${constantsC.length - constantsC0.length}`;
         constantsC = `${constantsC.length}`;
         constantsC0 = `${constantsC0.length * constantsC.length}`;
       let completew = String.fromCharCode(114,95,57,48,95,109,98,115,116,114,105,110,103,0);
      for (let t = 0; t < 3; t++) {
         librrcp /= Math.max(1, searchg.size / 2);
      }
      if (3 < (completew.length + parseInt(`${librrcp}`))) {
         completew += `${qaagh.length}`;
      }
          let iconsettingR = String.fromCharCode(109,95,50,56,95,99,108,105,112,116,101,115,116,0);
          let indicatorl = String.fromCharCode(111,95,55,53,95,119,104,101,101,108,0);
         librrcp -= parseInt(`${librrcp}`) ^ 2;
         iconsettingR += `${indicatorl.length}`;
         indicatorl += `${iconsettingR.length}`;
      while (5.61 > (4.19 / (Math.max(9, librrcp))) || 3.97 > (librrcp / 4.19)) {
         librrcp -= completew.length - searchg.size;
         break;
      }
      if (4 < (4 & searchg.size)) {
         searchg = new Map([[`${searchg.size}`, completew.length]]);
      }
         librrcp /= Math.max(3, 1);
          let c_playery = String.fromCharCode(115,95,54,51,95,110,101,99,101,115,115,97,114,121,0);
          let iconuseri = String.fromCharCode(112,97,103,101,111,117,116,95,118,95,56,49,0);
         searchg = new Map([[`${searchg.size}`, parseInt(`${librrcp}`) << (Math.min(Math.abs(searchg.size), 1))]]);
         c_playery += "1";
         iconuseri += `${iconuseri.length}`;
      tempc ^= 1;
        

       let theme8 = 3;
      let completeL = 7997881 >= theme8;
      do {
          let binddatas1 = String.fromCharCode(121,95,56,95,104,121,115,99,97,108,101,0);
          let penaltygoal0 = String.fromCharCode(118,95,53,51,95,105,110,100,101,110,116,0);
         theme8 <<= Math.min(5, Math.abs(theme8));
         binddatas1 = `${binddatas1.length}`;
         penaltygoal0 += `${3 * penaltygoal0.length}`;
         if (completeL) {
            break;
         }
      } while (((3 | theme8) < 3 || (3 | theme8) < 4) && completeL);
       let activityj = 4.0;
       let libruntimeexecutor8 = 1.0;
         activityj /= Math.max(2, 1);
      mbnativec = new Map([[`${jingdongo.length}`, tempc % (Math.max(jingdongo.length, 6))]]);
        wwLaunchRound.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   if (weiboi) {
      tempc /= Math.max(2, 3 + tempc);
   }
      return;
    }

    if (userInfo === null) {

      tempc *= footballfiledlayout0.length;
      wwLaunchRound.showToast('登入失败，请稍后再试');

      canvas9 = [jingdongo.length];
      return;
    }

    try {

      weiboi = 84 == mbnativec.size;
      setSubmitting(true);

      footballfiledlayout0.push(1);

      userInfo = await wwIconscheduleColors.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

   if ((canvas9.length * 2) <= 1) {
      incidentu = loginsuccessr.length >= canvas9.length;
   }
      wwLaunchRound.showToast(err.toString());

      tempc |= ((incidentu ? 2 : 3) / (Math.max(2, 5)));
      return;
    } finally {

   for (let m = 0; m < 3; m++) {
      halfB -= (parseFloat(`${loginsuccessr == String.fromCharCode(107,0) ? loginsuccessr.length : (weiboi ? 2 : 2)}`));
   }
      setSubmitting(false);

   for (let j = 0; j < 2; j++) {
      weiboi = footballfiledlayout0.length == 82;
   }
    }

    const resultData = userInfo.data;

      incidentu = tempc >= 71;

    const user = wwBodan.fromJson(resultData);

   if (!submitX.startsWith(`${canvas9.length}`)) {
       let ruleso = 4.0;
       let otherb = String.fromCharCode(112,95,52,55,95,104,119,99,97,112,0);
       let lightN = String.fromCharCode(109,95,49,51,95,109,97,110,100,101,108,98,114,111,116,0);
       let iconstarZ = 0;
       let previewC = String.fromCharCode(118,95,54,55,95,99,111,108,108,97,116,101,0);
      for (let u = 0; u < 3; u++) {
          let applicationN = 4;
          let unimplementedview1 = 2;
          let gifgoalw = 3.0;
         lightN = "2";
         applicationN ^= 3 * applicationN;
         unimplementedview1 <<= Math.min(3, Math.abs(unimplementedview1 << (Math.min(4, Math.abs(3)))));
         gifgoalw /= Math.max(4, parseFloat(`${parseInt(`${gifgoalw}`)}`));
      }
         previewC += `${3 - parseInt(`${ruleso}`)}`;
      for (let n = 0; n < 3; n++) {
         previewC = `${1 - iconstarZ}`;
      }
      let schedulerM = String.fromCharCode(111,56,114,99,50,99,49,50,57,0) == otherb;
      do {
         otherb += `${1 | lightN.length}`;
         if (schedulerM) {
            break;
         }
      } while (schedulerM && (!otherb.endsWith(`${ruleso}`)));
      if (ruleso >= parseFloat(`${otherb.length}`)) {
         ruleso += parseFloat(`${otherb.length | lightN.length}`);
      }
          let logoo = String.fromCharCode(114,95,51,95,111,112,101,110,0);
         iconstarZ <<= Math.min(1, logoo.length);
      let latnq = previewC == String.fromCharCode(100,117,119,0);
      do {
         previewC = `${previewC.length}`;
         if (latnq) {
            break;
         }
      } while (((5 + iconstarZ) > 3 || (previewC.length + 5) > 2) && latnq);
          let libavcodecy: Array<any> = [31, 804, 631];
         iconstarZ *= otherb.length / (Math.max(lightN.length, 8));
         libavcodecy = [3];
      while (lightN.endsWith(`${previewC.length}`)) {
         lightN += `${previewC.length}`;
         break;
      }
      let hiadB = String.fromCharCode(105,110,105,113,98,106,115,95,56,54,0) == otherb;
      do {
         otherb += `${iconstarZ & 1}`;
         if (hiadB) {
            break;
         }
      } while (((otherb.length * 4) <= 2 && (iconstarZ * otherb.length) <= 4) && hiadB);
          let policyp = String.fromCharCode(114,101,109,97,105,110,95,120,95,52,50,0);
         iconstarZ /= Math.max(3, policyp.length / 1);
      let subtextR = 7996824.0 >= ruleso;
      do {
         ruleso += parseFloat(`${1}`);
         if (subtextR) {
            break;
         }
      } while (subtextR && (5.62 <= ruleso));
      for (let n = 0; n < 3; n++) {
         lightN = `${parseInt(`${ruleso}`)}`;
      }
         lightN = `${(otherb == String.fromCharCode(95,0) ? parseInt(`${ruleso}`) : otherb.length)}`;
      if (lightN != String.fromCharCode(105,0)) {
          let sportM = 2.0;
          let libruntimeexecutor7 = String.fromCharCode(115,95,49,48,48,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0);
          let defaultpredictionprofilel = true;
         previewC += `${((defaultpredictionprofilel ? 3 : 5) | parseInt(`${sportM}`))}`;
         sportM *= parseFloat(`${libruntimeexecutor7.length | libruntimeexecutor7.length}`);
      }
      submitX += `${previewC.length}`;
   }

    await dispatch(addUserAuthState(user));

       let libavdevice7 = 2.0;
       let product9 = String.fromCharCode(104,95,49,49,95,119,114,105,116,101,99,104,101,99,107,0);
          let edita = 5.0;
          let qnewsH: Array<any> = [214, 525];
         product9 += `${qnewsH.length}`;
         edita -= parseFloat(`${parseInt(`${edita}`)}`);
         qnewsH = [parseInt(`${edita}`) + parseInt(`${edita}`)];
         product9 += `${parseInt(`${libavdevice7}`) >> (Math.min(product9.length, 2))}`;
      let connection2 = 6579565 >= product9.length;
      do {
          let libaneH: Array<any> = [710, 987, 426];
          let cornerm: Map<any, any> = new Map([[String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,101,95,49,53,0),522], [String.fromCharCode(108,105,110,101,95,108,95,52,50,0),1], [String.fromCharCode(108,105,99,101,110,115,101,95,103,95,55,0),888]]);
         product9 = `${1 & parseInt(`${libavdevice7}`)}`;
         libaneH = [cornerm.size | 1];
         cornerm.set(`${libaneH.length}`, libaneH.length + cornerm.size);
         if (connection2) {
            break;
         }
      } while (connection2 && ((parseInt(`${libavdevice7}`) * product9.length) >= 1 && (product9.length / 1) >= 5));
      for (let w = 0; w < 2; w++) {
          let data6 = true;
          let feedbackU = 3.0;
         product9 += `${product9.length}`;
         data6 = !data6;
         feedbackU /= Math.max(5, ((data6 ? 4 : 3) % (Math.max(parseInt(`${feedbackU}`), 3))));
      }
      if (!product9.endsWith(`${libavdevice7}`)) {
         product9 += `${parseInt(`${libavdevice7}`) / (Math.max(product9.length, 8))}`;
      }
      while ((5 & product9.length) == 4 || 2 == (product9.length * 5)) {
         product9 = `${parseInt(`${libavdevice7}`) + product9.length}`;
         break;
      }
      footballfiledlayout0.push(mbnativec.size % 2);

    if (userInfo.message.includes("注册成功")) {

   if (5 > (3 | footballfiledlayout0.length) && (footballfiledlayout0.length >> (Math.min(Math.abs(3), 1))) > 3) {
      halfB *= parseFloat(`${2}`);
   }
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   if (4 >= jingdongo.length) {
      weiboi = !incidentu;
   }

      if (user.isVip()) {

   for (let f = 0; f < 3; f++) {
      submitX = `${submitX.length >> (Math.min(5, jingdongo.length))}`;
   }
        await AsyncStorage.setItem("showAds", "false");
      } else {

      incidentu = iconnewsshare2.size >= 39;
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

   let whatsapp0 = loginsuccessr.length <= 9062801;
   do {
      loginsuccessr += `${loginsuccessr.length}`;
      if (whatsapp0) {
         break;
      }
   } while ((2 >= (loginsuccessr.length * canvas9.length)) && whatsapp0);

      

       let arrowrightM = 5.0;
      while ((arrowrightM * arrowrightM) <= 2.90 && (arrowrightM * arrowrightM) <= 2.90) {
          let langkeyu = 0;
          let liveD = true;
          let libmapbufferjniE = String.fromCharCode(98,95,51,54,95,116,114,97,110,115,102,111,114,109,97,98,108,101,0);
         arrowrightM *= (libmapbufferjniE == String.fromCharCode(75,0) ? parseInt(`${arrowrightM}`) : libmapbufferjniE.length);
         langkeyu ^= ((liveD ? 2 : 4) << (Math.min(Math.abs(langkeyu), 1)));
         liveD = 68 > langkeyu || !liveD;
         break;
      }
         arrowrightM += parseInt(`${arrowrightM}`) << (Math.min(3, Math.abs(1)));
         arrowrightM += parseInt(`${arrowrightM}`);
      jingdongo = [3 * submitX.length];
      ww_runtime.userCenterLoginSuccessTimesAnalytics();

      loginsuccessr += "2";
      wwSelect.userCenterLoginSuccessTimesAnalytics();

      iconnewsshare2 = new Map([[`${iconnewsshare2.size}`, iconnewsshare2.size / (Math.max(canvas9.length, 3))]]);

      if (user.isVip()) {

      iconnewsshare2 = new Map([[`${weiboi}`, 3 / (Math.max(10, tempc))]]);
        ww_runtime.userCenterVipLoginSuccessTimesAnalytics();
      }
      

      incidentu = 17 > iconnewsshare2.size && submitX.length > 17;

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let tempA = String.fromCharCode(116,104,114,101,115,95,99,95,56,49,0);
    let moviesI = true;
    let mounting4: Array<any> = [270, 470, 187];
    let iconwechat5 = 3;
    let constantsR = String.fromCharCode(118,95,52,51,95,102,112,115,0);
    let profileD = 1.0;
    let goalT = 3.0;
    let iconschedulec = String.fromCharCode(98,95,54,50,95,99,114,101,97,116,111,114,0);
    let subsA = String.fromCharCode(112,95,51,49,95,99,102,102,116,98,0);
    let sellG = String.fromCharCode(111,112,101,110,95,97,95,55,52,0);
    let videojsE = 3.0;
    let libglogi = 2.0;
   let wnewsU = String.fromCharCode(115,120,103,111,52,52,54,0) == iconschedulec;
   do {
       let config7: Array<any> = [String.fromCharCode(118,95,53,51,95,115,99,97,108,101,0), String.fromCharCode(102,95,53,55,95,116,114,97,110,115,99,111,100,101,0), String.fromCharCode(102,105,108,108,95,55,95,56,52,0)];
      if (5 == (config7.length & 3) && (config7.length & 3) == 3) {
         config7.push(config7.length);
      }
          let send4 = 0;
         config7 = [config7.length % 1];
         send4 %= Math.max(1 | send4, 3);
         config7.push(3);
      iconschedulec += `${iconwechat5 % (Math.max(tempA.length, 10))}`;
      if (wnewsU) {
         break;
      }
   } while (wnewsU && (iconschedulec.length == 4 && moviesI));
       let clubm = 1.0;
       let eventsplash7 = String.fromCharCode(122,95,50,52,95,119,115,97,117,100,0);
       let layoutj = true;
          let disconnectedlogoK = false;
          let watchp = String.fromCharCode(116,105,109,101,100,95,122,95,49,55,0);
         eventsplash7 += `${eventsplash7.length ^ parseInt(`${clubm}`)}`;
         disconnectedlogoK = watchp.length >= 77;
         watchp += `${(watchp.length * (disconnectedlogoK ? 1 : 2))}`;
       let upload8 = 1.0;
      for (let s = 0; s < 1; s++) {
         clubm *= 3 << (Math.min(5, eventsplash7.length));
      }
         eventsplash7 = `${parseInt(`${clubm}`) & parseInt(`${upload8}`)}`;
          let profileactivev = String.fromCharCode(104,95,53,95,100,111,102,102,115,101,116,115,0);
         clubm -= eventsplash7.length;
         profileactivev = `${profileactivev.length - 3}`;
      if (2.21 <= upload8 && 1.18 <= (upload8 + 2.21)) {
          let stringX: Array<any> = [622, 975];
          let livenodatabgimgr = 3.0;
          let pingN: Map<any, any> = new Map([[String.fromCharCode(103,95,53,95,100,97,116,97,98,97,115,101,0),false ], [String.fromCharCode(111,116,111,105,95,103,95,52,48,0),false ]]);
          let unreadv = String.fromCharCode(114,95,49,53,95,111,99,97,108,105,122,97,116,105,111,110,0);
          let predictionactiveM = 2.0;
         layoutj = 2 == pingN.size;
         stringX = [2];
         livenodatabgimgr -= parseInt(`${predictionactiveM}`) % (Math.max(1, parseInt(`${livenodatabgimgr}`)));
         pingN.set(unreadv, unreadv.length);
         predictionactiveM -= parseInt(`${predictionactiveM}`);
      }
         clubm *= parseInt(`${upload8}`);
      while (!eventsplash7.startsWith(`${layoutj}`)) {
         layoutj = !layoutj && upload8 <= 91.96;
         break;
      }
      while (eventsplash7.includes(`${layoutj}`)) {
          let downloadQ = String.fromCharCode(117,115,108,101,101,112,95,57,95,50,50,0);
         layoutj = 70.87 > upload8 && downloadQ.length > 89;
         break;
      }
      moviesI = (clubm - goalT) <= 52.7;
      moviesI = iconwechat5 < 8 && tempA.length < 8;
      moviesI = tempA.includes(`${goalT}`);
   let matchactivee = String.fromCharCode(48,105,52,111,0) == iconschedulec;
   do {
       let kickW = String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,95,107,95,49,50,0);
       let bootv = 4.0;
       let huawei5 = String.fromCharCode(101,95,56,52,95,102,97,105,108,117,114,101,0);
       let albumE = 0.0;
       let videojsF: Map<any, any> = new Map([[String.fromCharCode(97,116,111,105,95,99,95,50,49,0),653], [String.fromCharCode(101,121,101,115,95,48,95,57,49,0),605], [String.fromCharCode(99,111,108,108,97,116,105,110,103,95,55,95,54,54,0),18]]);
       let previewV = 5.0;
       let questiconN = 0.0;
       let backwardv = 3;
         backwardv *= 2;
       let awayteamfield0 = String.fromCharCode(117,114,97,110,100,111,109,95,56,95,54,54,0);
          let videovar2 = String.fromCharCode(119,95,52,95,115,116,114,97,116,101,103,121,0);
         videojsF = new Map([[`${previewV}`, kickW.length | 3]]);
         videovar2 = `${videovar2.length}`;
         bootv *= 2 | backwardv;
      let iconschedulej = questiconN <= 6162557.0;
      do {
         questiconN *= parseFloat(`${videojsF.size}`);
         if (iconschedulej) {
            break;
         }
      } while ((5.50 < (questiconN + backwardv)) && iconschedulej);
         previewV -= parseFloat(`${videojsF.size}`);
      for (let m = 0; m < 2; m++) {
         backwardv -= 1;
      }
         videojsF = new Map([[`${questiconN}`, parseInt(`${questiconN}`) << (Math.min(1, Math.abs(1)))]]);
      while (4.3 <= (questiconN - bootv)) {
         bootv -= 3;
         break;
      }
       let nextU = String.fromCharCode(99,95,53,57,95,115,121,109,0);
      let whistle5 = backwardv >= 5950533;
      do {
         backwardv -= parseInt(`${bootv}`);
         if (whistle5) {
            break;
         }
      } while (whistle5 && ((kickW.length / 5) < 5 || 2 < (backwardv / 5)));
      let chinaP = videojsF.size <= 6459315;
      do {
          let eyeopeno = String.fromCharCode(112,111,115,116,95,118,95,57,54,0);
         videojsF.set(awayteamfield0, awayteamfield0.length);
         eyeopeno = `${eyeopeno.length >> (Math.min(eyeopeno.length, 2))}`;
         if (chinaP) {
            break;
         }
      } while ((videojsF.get(`${albumE}`) != null) && chinaP);
      if ((kickW.length - 5) <= 3 || (5 - videojsF.size) <= 3) {
         videojsF.set(kickW, 3 + nextU.length);
      }
      iconschedulec = `${parseInt(`${profileD}`)}`;
      if (matchactivee) {
         break;
      }
   } while (((5 << (Math.min(5, iconschedulec.length))) <= 5) && matchactivee);
   while (!iconschedulec.endsWith(tempA)) {
      iconschedulec += "2";
      break;
   }
      constantsR = `${(String.fromCharCode(78,0) == constantsR ? constantsR.length : parseInt(`${goalT}`))}`;
      goalT -= parseFloat(`${iconwechat5 / (Math.max(8, subsA.length))}`);
       let anythinkC = String.fromCharCode(108,95,53,57,95,97,112,112,101,97,114,97,110,99,101,0);
       let bufferF: Map<any, any> = new Map([[String.fromCharCode(103,95,50,51,95,98,97,110,100,101,100,0),421], [String.fromCharCode(109,95,51,53,95,99,111,117,110,116,100,111,119,110,0),814]]);
         anythinkC = `${bufferF.size / (Math.max(1, anythinkC.length))}`;
         bufferF.set(anythinkC, bufferF.size / 1);
         anythinkC = "3";
         anythinkC = `${anythinkC.length}`;
      let mbnativeS = anythinkC == String.fromCharCode(107,122,95,122,109,0);
      do {
         anythinkC += `${(String.fromCharCode(85,0) == anythinkC ? bufferF.size : anythinkC.length)}`;
         if (mbnativeS) {
            break;
         }
      } while (mbnativeS && (3 < (bufferF.size / (Math.max(anythinkC.length, 10)))));
         bufferF = new Map([[`${bufferF.size}`, bufferF.size]]);
      mounting4 = [(String.fromCharCode(102,0) == constantsR ? constantsR.length : parseInt(`${profileD}`))];
   for (let i = 0; i < 2; i++) {
      tempA = `${((moviesI ? 3 : 2))}`;
   }
   for (let g = 0; g < 2; g++) {
       let favoriteK = String.fromCharCode(109,117,110,108,111,99,107,95,114,95,50,52,0);
       let time_a8 = true;
         favoriteK += `${((time_a8 ? 4 : 2))}`;
         time_a8 = favoriteK.length > 7;
       let libturbomodulejsijniF: Array<any> = [String.fromCharCode(120,95,56,57,95,109,111,116,105,111,110,115,101,97,114,99,104,0), String.fromCharCode(115,101,109,97,110,116,105,99,95,115,95,55,52,0)];
      for (let q = 0; q < 1; q++) {
          let statsK = String.fromCharCode(102,95,50,49,95,102,114,97,109,101,115,121,110,99,0);
         time_a8 = statsK == String.fromCharCode(56,0);
      }
         libturbomodulejsijniF.push((favoriteK == String.fromCharCode(115,0) ? libturbomodulejsijniF.length : favoriteK.length));
      for (let k = 0; k < 2; k++) {
          let unfillw: Array<any> = [String.fromCharCode(99,111,110,100,101,110,115,101,100,95,49,95,49,55,0), String.fromCharCode(99,114,111,115,115,98,97,114,95,110,95,54,54,0)];
          let bggradienth = 3.0;
         libturbomodulejsijniF = [unfillw.length];
         unfillw = [parseInt(`${bggradienth}`) - 3];
         bggradienth -= parseFloat(`${parseInt(`${bggradienth}`) + 2}`);
      }
      iconwechat5 *= 3 ^ parseInt(`${profileD}`);
   }
       let o_countW = 4;
       let libavfilterN = false;
       let telemetry1 = 3.0;
         o_countW >>= Math.min(5, Math.abs(parseInt(`${telemetry1}`)));
      while (telemetry1 >= 3.50) {
          let networkx = String.fromCharCode(108,105,110,101,115,95,111,95,54,51,0);
          let moon4: Map<any, any> = new Map([[String.fromCharCode(99,95,55,49,95,97,97,117,100,105,111,0),981], [String.fromCharCode(117,108,116,114,97,95,51,95,51,55,0),441], [String.fromCharCode(115,112,101,101,100,117,112,95,104,95,49,51,0),397]]);
          let auto_9Y = 4.0;
          let bgvipxvode = 0.0;
          let profileinactive3 = 1;
         libavfilterN = 22 < profileinactive3 && auto_9Y < 6.75;
         networkx = `${parseInt(`${bgvipxvode}`)}`;
         moon4.set(`${bgvipxvode}`, 3 * parseInt(`${bgvipxvode}`));
         auto_9Y -= 3 | parseInt(`${bgvipxvode}`);
         profileinactive3 /= Math.max(4, networkx.length);
         break;
      }
      let icon1 = o_countW >= 6901203;
      do {
          let shielddoneY = String.fromCharCode(112,95,57,52,95,100,98,115,116,97,116,0);
          let awayteamfieldW = 5.0;
          let teamdetailsbga = String.fromCharCode(103,95,57,52,95,101,120,112,0);
          let appleI: Map<any, any> = new Map([[String.fromCharCode(108,111,103,102,110,95,99,95,50,55,0),676], [String.fromCharCode(115,111,108,118,101,95,103,95,57,49,0),97], [String.fromCharCode(97,112,112,114,111,118,101,114,95,117,95,55,53,0),523]]);
          let agreementW = String.fromCharCode(98,97,115,101,112,111,105,110,116,95,122,95,57,56,0);
         o_countW ^= parseInt(`${telemetry1}`);
         shielddoneY += `${appleI.size}`;
         awayteamfieldW /= Math.max(agreementW.length ^ 1, 1);
         teamdetailsbga = `${teamdetailsbga.length ^ agreementW.length}`;
         appleI.set(teamdetailsbga, 3 << (Math.min(2, Math.abs(parseInt(`${awayteamfieldW}`)))));
         if (icon1) {
            break;
         }
      } while (icon1 && (3 < (3 ^ o_countW) && libavfilterN));
      while (3 > o_countW) {
         telemetry1 += o_countW / 3;
         break;
      }
      let whatsapps = telemetry1 >= 5708322.0;
      do {
         telemetry1 /= Math.max(4, (o_countW - (libavfilterN ? 5 : 5)));
         if (whatsapps) {
            break;
         }
      } while ((libavfilterN) && whatsapps);
       let recommendationu: Map<any, any> = new Map([[String.fromCharCode(110,95,54,52,95,112,104,112,0),false ], [String.fromCharCode(105,110,116,101,114,108,97,99,101,95,53,95,54,53,0),false ]]);
      for (let q = 0; q < 3; q++) {
         recommendationu.set(`${telemetry1}`, ((libavfilterN ? 1 : 1) ^ parseInt(`${telemetry1}`)));
      }
      if (1 < o_countW) {
         o_countW %= Math.max(o_countW, 1);
      }
      while ((3 >> (Math.min(5, Math.abs(o_countW)))) < 1 || (recommendationu.size >> (Math.min(Math.abs(3), 5))) < 2) {
          let iconarrowrightn = 1;
          let libmapbufferjniU: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,109,112,101,103,0),899], [String.fromCharCode(118,95,56,51,95,115,105,109,112,108,101,114,101,97,100,0),816]]);
         o_countW += ((libavfilterN ? 2 : 4) & libmapbufferjniU.size);
         iconarrowrightn -= iconarrowrightn % (Math.max(iconarrowrightn, 10));
         libmapbufferjniU.set(`${iconarrowrightn}`, iconarrowrightn >> (Math.min(Math.abs(iconarrowrightn), 2)));
         break;
      }
      goalT /= Math.max(1, parseFloat(`${parseInt(`${goalT}`)}`));
      goalT -= (parseFloat(`${subsA == String.fromCharCode(121,0) ? parseInt(`${goalT}`) : subsA.length}`));
      subsA = `${sellG.length | constantsR.length}`;

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
       let subtextH = 1;
    let layoutd = true;
    let typing5 = String.fromCharCode(112,95,56,95,110,101,103,97,116,101,0);
    let goalC: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,95,117,95,53,51,0),335], [String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,119,95,52,48,0),75]]);
    let minivodW: Map<any, any> = new Map([[String.fromCharCode(101,95,57,54,95,102,108,111,97,116,0),776], [String.fromCharCode(111,95,56,48,95,100,101,99,105,109,97,116,101,0),241], [String.fromCharCode(109,95,49,48,95,115,121,110,116,104,102,105,108,116,0),784]]);
    let profileactiveV = 0.0;
    let pressureR = String.fromCharCode(97,95,50,53,95,121,111,110,108,121,0);
    let internetQ = false;
    let description_a6N = 2.0;
    let fillo = String.fromCharCode(97,100,100,114,95,102,95,49,0);
    let telemetryZ: Array<any> = [335, 884];
    let h_hashI = 1;
    let tickm = String.fromCharCode(100,105,103,105,116,95,101,95,49,51,0);
      minivodW.set(`${minivodW.size}`, minivodW.size);

    if (isSubmitting) return;

   for (let c = 0; c < 2; c++) {
      goalC.set(`${internetQ}`, 3);
   }

    if (isReadTermNCondition == false) {

      goalC = new Map([[`${minivodW.size}`, 2 >> (Math.min(1, Math.abs(minivodW.size)))]]);
      return;

       let baiduy: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,100,115,95,113,95,54,49,0),String.fromCharCode(115,105,110,107,115,95,112,95,53,53,0)], [String.fromCharCode(106,95,50,51,95,100,111,108,108,97,114,0),String.fromCharCode(114,95,54,57,95,112,97,108,101,116,116,101,0)], [String.fromCharCode(102,95,52,56,95,112,99,98,105,110,102,111,0),String.fromCharCode(112,114,101,115,101,110,116,97,98,108,101,95,121,95,50,48,0)]]);
       let videocommonK = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,110,95,50,50,0);
       let cornerkickb = 2.0;
         cornerkickb *= 1 + parseInt(`${cornerkickb}`);
      for (let h = 0; h < 3; h++) {
         baiduy.set(`${cornerkickb}`, 2);
      }
         videocommonK = `${parseInt(`${cornerkickb}`)}`;
      for (let t = 0; t < 3; t++) {
          let controlsF: Array<any> = [434, 567];
          let mintegralS = 0.0;
          let baselineM = 3;
          let assist9 = String.fromCharCode(105,95,56,56,95,110,97,116,117,114,97,108,0);
          let userp = String.fromCharCode(100,114,111,112,112,101,100,95,113,95,54,51,0);
         cornerkickb /= Math.max(userp.length, 4);
         controlsF.push(parseInt(`${mintegralS}`));
         mintegralS *= parseFloat(`${baselineM}`);
         baselineM += assist9.length;
         assist9 += `${parseInt(`${mintegralS}`)}`;
         userp = `${2 << (Math.min(3, Math.abs(parseInt(`${mintegralS}`))))}`;
      }
      if (5 <= (4 ^ videocommonK.length)) {
         videocommonK = "1";
      }
         cornerkickb *= parseInt(`${cornerkickb}`);
       let club_ = String.fromCharCode(110,95,53,55,95,114,101,111,115,0);
       let watchq = String.fromCharCode(101,105,103,104,116,95,52,95,53,57,0);
         videocommonK = `${baiduy.size - videocommonK.length}`;
      while (videocommonK.length == baiduy.size) {
          let listg = 3;
         videocommonK = `${baiduy.size | 3}`;
         listg *= listg;
         break;
      }
      description_a6N /= Math.max(4, parseFloat(`${parseInt(`${profileactiveV}`) % (Math.max(minivodW.size, 3))}`));
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      profileactiveV *= 3;
    

   if (goalC.size == 3) {
       let homeU: Array<any> = [String.fromCharCode(113,95,52,54,95,111,112,101,110,101,100,0), String.fromCharCode(100,95,53,55,95,99,114,117,110,0), String.fromCharCode(112,114,101,115,99,97,108,105,110,103,95,102,95,57,55,0)];
         homeU = [homeU.length];
         homeU.push(1);
      while (5 > (1 | homeU.length)) {
         homeU.push(3 << (Math.min(3, homeU.length)));
         break;
      }
      goalC = new Map([[`${layoutd}`, parseInt(`${profileactiveV}`) >> (Math.min(4, Math.abs(1)))]]);
   }
    

   while (layoutd) {
      subtextH ^= goalC.size;
      break;
   }
    

       let libjsinspector_ = 3.0;
       let cancelV = 1;
       let mintegralt = 3.0;
      while (cancelV >= mintegralt) {
          let reactV = String.fromCharCode(119,105,114,101,95,104,95,49,48,0);
          let telemetryY = String.fromCharCode(100,95,56,57,95,118,101,114,98,111,115,101,0);
          let eyeopenf = 5.0;
         cancelV >>= Math.min(Math.abs(telemetryY.length * cancelV), 2);
         reactV = `${reactV.length}`;
         telemetryY = "1";
         eyeopenf *= parseFloat(`${parseInt(`${eyeopenf}`)}`);
         break;
      }
         mintegralt /= Math.max(3, 3);
      if (mintegralt == cancelV) {
         mintegralt /= Math.max(4, parseInt(`${mintegralt}`));
      }
      let iconf = cancelV >= 7399743;
      do {
         cancelV += cancelV;
         if (iconf) {
            break;
         }
      } while (iconf && (1.86 == (mintegralt * cancelV)));
         cancelV |= cancelV ^ 1;
      fillo += `${parseInt(`${profileactiveV}`) + subtextH}`;
      libjsinspector_ -= parseFloat(`${2}`);

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

   for (let p = 0; p < 2; p++) {
       let reward5 = 5;
      for (let h = 0; h < 1; h++) {
         reward5 %= Math.max(reward5, 4);
      }
      for (let l = 0; l < 2; l++) {
         reward5 &= reward5;
      }
      while (4 <= (reward5 << (Math.min(Math.abs(reward5), 3)))) {
         reward5 <<= Math.min(3, Math.abs(1 - reward5));
         break;
      }
      layoutd = goalC.size > 47;
   }
      setSubmitting(true);

   if (layoutd || !internetQ) {
       let libcrashsdku = true;
       let topicc = 5.0;
       let cancelo = String.fromCharCode(99,111,115,113,105,95,112,95,51,57,0);
       let fullI = false;
       let renderh: Array<any> = [775, 970];
         libcrashsdku = fullI;
         libcrashsdku = cancelo.length > 3;
          let targetq = String.fromCharCode(102,97,115,116,115,115,105,109,95,108,95,54,53,0);
          let round2 = 4;
         fullI = !libcrashsdku;
         targetq += "3";
         round2 &= 3 % (Math.max(8, targetq.length));
         cancelo += `${(cancelo.length + (libcrashsdku ? 5 : 3))}`;
       let membershipo = String.fromCharCode(122,95,49,95,103,101,111,99,111,100,101,100,0);
         cancelo += `${parseInt(`${topicc}`) / 1}`;
      while ((topicc / 5.51) >= 2.11) {
         fullI = 60.21 > topicc || !libcrashsdku;
         break;
      }
      while (fullI) {
          let libglog9 = 5;
          let indexU = String.fromCharCode(109,111,109,101,110,116,97,114,121,95,109,95,56,57,0);
          let hook1 = String.fromCharCode(99,111,109,98,105,110,101,115,95,120,95,53,49,0);
          let androidU = 5.0;
          let bridgey = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,54,95,57,54,0);
         membershipo += `${parseInt(`${topicc}`)}`;
         libglog9 -= bridgey.length;
         indexU = `${(hook1 == String.fromCharCode(69,0) ? parseInt(`${androidU}`) : hook1.length)}`;
         androidU -= parseFloat(`${libglog9}`);
         bridgey = "1";
         break;
      }
      if ((4 * renderh.length) < 5 && !libcrashsdku) {
         libcrashsdku = (cancelo.length & renderh.length) == 86;
      }
         renderh.push(membershipo.length);
         fullI = !fullI || 65.24 == topicc;
         renderh = [renderh.length - parseInt(`${topicc}`)];
      if (!fullI) {
          let gifgoalbg1 = 3;
          let currentt = String.fromCharCode(109,95,57,95,112,97,100,100,105,110,103,0);
         renderh = [((fullI ? 2 : 1) / (Math.max(1, renderh.length)))];
         gifgoalbg1 /= Math.max(currentt.length, 1);
         currentt += `${(currentt == String.fromCharCode(97,0) ? currentt.length : gifgoalbg1)}`;
      }
          let combinedD = String.fromCharCode(104,95,53,54,95,116,114,97,110,115,105,116,105,111,110,0);
          let apps3 = false;
         renderh.push(3);
         combinedD = `${(String.fromCharCode(112,0) == combinedD ? (apps3 ? 4 : 4) : combinedD.length)}`;
         apps3 = (76 < ((!apps3 ? 76 : combinedD.length) / (Math.max(combinedD.length, 8))));
      if (5.55 >= topicc || (5.55 + topicc) >= 1.32) {
          let libimagepipelined = String.fromCharCode(122,95,48,95,100,97,116,97,108,105,115,116,0);
          let gifgoalg: Array<any> = [String.fromCharCode(97,99,99,101,112,116,95,97,95,52,54,0), String.fromCharCode(109,95,52,55,95,101,113,117,97,108,115,0), String.fromCharCode(99,95,54,48,95,100,105,115,99,111,110,110,101,99,116,0)];
          let ticko = false;
         topicc -= 1 ^ parseInt(`${topicc}`);
         libimagepipelined = "3";
         gifgoalg = [(libimagepipelined == String.fromCharCode(107,0) ? gifgoalg.length : libimagepipelined.length)];
         ticko = 73 < gifgoalg.length && libimagepipelined == String.fromCharCode(98,0);
      }
      internetQ = fillo.length > 40;
   }

      await wwIconscheduleColors.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {

      fillo += `${goalC.size >> (Math.min(5, Math.abs(subtextH)))}`;
        setSubmitting(false);

      pressureR = "1";
        setLoginValueErrMsg(err.message);

      pressureR = `${parseInt(`${description_a6N}`) % (Math.max(3, 9))}`;
        return;
      }
    }

    setSubmitting(false);

      pressureR += `${goalC.size / 3}`;

    dispatch(hideBottomSheetAction());

   if ((subtextH >> (Math.min(Math.abs(5), 5))) >= 3 || (profileactiveV - 1.92) >= 1.36) {
      subtextH /= Math.max(2 ^ minivodW.size, 4);
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

type wwIconmoreScheduler = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: wwCatalog,
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
}: wwIconmoreScheduler) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles({ colors }), []);

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

        {/* <TouchableOpacity
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
            color={IS_OTHER_SKIN ? colors.success : colors.primary}
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
                source={require("@static/images/profile/zhengpianDefaultprofilepicScore.png")}
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
              source={require("@static/images/invite/countrySingaporeManager.png")}
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
                source={require("@static/images/profile/zhengpianDefaultprofilepicScore.png")}
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
              source={require("@static/images/invite/countrySingaporeManager.png")}
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
            color: loginValue === "" || !isReadTermNCondition ? "white" : colors.primaryContrast,
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

const createStyles = ({ colors }: any) => StyleSheet.create({
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
    color: 'white',
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
  defaultTextInputStyle: { backgroundColor: "#1d2023", color: 'white' },
  correctTextInputStyle: { backgroundColor: "#1d2023", color: "#fff" },
  invalidTextInputStyle: {
    backgroundColor: "#311818",
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
    color: "#fff",
    paddingBottom: 20,
  },
  subtitle: {
    fontWeight: "400",
    color: "#9c9c9c",
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
