import { useNavigation, useTheme } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  Keyboard,
  Image,
} from 'react-native';
import ScreenContainer from '../../components/container/yys_matches';
import { useDispatch } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';

import { ResendCountDown } from './yys_goallogo';
import { addUserAuthState } from '@redux';

import { changeScreenAction } from '@redux';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import { yysHomeloading } from '@api';
import { useAppSelector, useSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import { yysIconstar } from '@models';
import { yysIconplaySuggestion } from '@redux';


export default (props: any) => {
  return (
    <ScreenContainer>
      <View
        style={{
          height: '100%',
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <>
            <TitleWithBackButtonHeader title="" />

            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: '20%' }}>
              <OtpInputs
                email={props.route.params.email}
                phone={props.route.params.phone}
                referralCode={props.route.params.referralCode}
                countryId={props.route.params.countryId}
              />
            </View>
          </>
        </TouchableWithoutFeedback>
      </View>
    </ScreenContainer>
  );
};

type yysSell = {
  email?: string,
  phone?: string,
  referralCode?: string,
  countryId?: number,
}

const OtpInputs = ({
  email,
  phone,
  referralCode,
  countryId,
}: yysSell) => {
  const { colors } = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); 

  const [focusedInput, setFocusedInput] = useState(null); 

  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const styles = useMemo(() => createStyles({
    colors,
  }), []);

  const handleFocus = (index: any) => {
    console.log(index);
    setFocusedInput(index);
  };

  const handleBlur = () => {
       let node_: Array<any> = [103, 298, 953];
    let iconarrowlefti = String.fromCharCode(109,98,103,114,97,112,104,0);
    let libhermesR = 1;
    let detailsP = 3;
    let sigmobv = String.fromCharCode(97,110,105,109,97,108,115,95,116,95,49,50,0);
    let sharewhiteZ = String.fromCharCode(99,95,49,53,95,97,115,107,105,110,103,0);
    let disconnectedlogom = String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,0);
    let redcirclebgF = String.fromCharCode(104,117,102,102,0);
    let loginI = String.fromCharCode(108,95,53,95,116,97,110,0);
    let libcrashsdkR = 0.0;
    let splash_ = 2;
    let upgradey = String.fromCharCode(116,111,117,99,104,101,115,95,97,95,50,51,0);
   let imageactionliveX = 8178099 <= loginI.length;
   do {
      loginI += `${2 + iconarrowlefti.length}`;
      if (imageactionliveX) {
         break;
      }
   } while ((loginI.length <= detailsP) && imageactionliveX);
   while ((libcrashsdkR / 1.24) >= 1.76 && 2.13 >= (1.24 / (Math.max(5, libcrashsdkR)))) {
       let watchnowbg0 = 5;
       let iconstar7: Map<any, any> = new Map([[String.fromCharCode(112,95,52,52,95,115,98,114,101,115,101,114,118,101,0),932], [String.fromCharCode(109,101,109,111,0),614]]);
       let defaultpredictionprofiler = 3.0;
          let imagenetworkerr0 = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,115,0);
          let basketballawayteamz = 3.0;
         watchnowbg0 <<= Math.min(3, Math.abs(iconstar7.size % (Math.max(4, watchnowbg0))));
         imagenetworkerr0 += `${(imagenetworkerr0 == String.fromCharCode(95,0) ? parseInt(`${basketballawayteamz}`) : imagenetworkerr0.length)}`;
         basketballawayteamz /= Math.max((parseFloat(`${String.fromCharCode(51,0) == imagenetworkerr0 ? parseInt(`${basketballawayteamz}`) : imagenetworkerr0.length}`)), 1);
      if ((watchnowbg0 + 4) < 5) {
          let whistleE = String.fromCharCode(115,99,99,111,110,102,105,103,0);
          let iconlogoutN = String.fromCharCode(101,110,99,111,100,101,114,95,102,95,57,53,0);
          let mimea: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,105,111,110,115,0),String.fromCharCode(115,116,114,0)], [String.fromCharCode(117,116,112,117,116,95,116,95,57,52,0),String.fromCharCode(118,115,114,99,95,111,95,55,52,0)], [String.fromCharCode(120,95,49,95,98,97,116,99,104,101,100,0),String.fromCharCode(116,105,110,116,101,100,0)]]);
          let baiduadsV = false;
          let emojix = String.fromCharCode(109,101,115,97,103,101,115,0);
         watchnowbg0 *= ((baiduadsV ? 3 : 5) & 1);
         whistleE = `${mimea.size}`;
         iconlogoutN += `${mimea.size << (Math.min(iconlogoutN.length, 2))}`;
         baiduadsV = mimea.size == 28;
         emojix = `${1 ^ mimea.size}`;
      }
         iconstar7.set(`${watchnowbg0}`, watchnowbg0 / 1);
      for (let q = 0; q < 3; q++) {
         defaultpredictionprofiler /= Math.max(3, parseFloat(`${watchnowbg0 >> (Math.min(Math.abs(1), 5))}`));
      }
       let launchk = true;
       let historyt = true;
      if (historyt || 3.85 < (5.24 + defaultpredictionprofiler)) {
         defaultpredictionprofiler *= parseFloat(`${watchnowbg0 ^ 2}`);
      }
         launchk = !historyt;
         launchk = historyt || watchnowbg0 == 28;
      libcrashsdkR /= Math.max(parseFloat(`${sharewhiteZ.length & 3}`), 3);
      break;
   }
   while (sharewhiteZ.length > parseInt(`${libcrashsdkR}`)) {
       let watche = false;
       let acceptedL: Array<any> = [String.fromCharCode(99,108,97,122,122,0), String.fromCharCode(115,117,98,99,111,101,102,115,95,121,95,57,57,0)];
       let iconnointernetQ = String.fromCharCode(118,95,55,56,95,105,110,105,116,105,97,108,105,122,101,0);
       let znewsr = String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,102,95,53,56,0);
       let libhermesD = String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,49,95,57,54,0);
          let basketballdetailsbgb = 4;
          let unselecteda = String.fromCharCode(114,101,99,111,114,100,115,95,50,95,57,51,0);
         watche = unselecteda == String.fromCharCode(107,0);
         basketballdetailsbgb %= Math.max(4, 2);
         unselecteda = `${basketballdetailsbgb % (Math.max(basketballdetailsbgb, 6))}`;
          let tailn = 0.0;
         watche = znewsr == iconnointernetQ;
         tailn /= Math.max(1, parseInt(`${tailn}`));
         watche = 69 < libhermesD.length && 69 < znewsr.length;
          let refreshborderlessm = true;
         znewsr = `${(znewsr.length ^ (watche ? 2 : 1))}`;
         refreshborderlessm = !refreshborderlessm && !refreshborderlessm;
         znewsr += `${libhermesD.length / 1}`;
         iconnointernetQ = `${libhermesD.length << (Math.min(Math.abs(3), 5))}`;
      let transferZ = 5730607 <= acceptedL.length;
      do {
         acceptedL.push(2 - iconnointernetQ.length);
         if (transferZ) {
            break;
         }
      } while (transferZ && (5 > (5 >> (Math.min(2, iconnointernetQ.length)))));
      if (1 < (znewsr.length ^ acceptedL.length)) {
         acceptedL = [1 >> (Math.min(3, libhermesD.length))];
      }
       let videovara = 3.0;
       let defaultteamC = 5.0;
      while ((videovara / (Math.max(parseFloat(`${libhermesD.length}`), 8))) <= 1.52) {
         libhermesD = `${iconnointernetQ.length / (Math.max(3, 6))}`;
         break;
      }
       let playlistt = String.fromCharCode(111,95,56,49,95,101,120,116,115,107,0);
       let commonC = 0.0;
          let whitebell4 = String.fromCharCode(109,105,115,115,101,115,95,107,95,50,50,0);
          let libbufferV = 5.0;
         watche = znewsr.length == libhermesD.length;
         whitebell4 = `${1 + whitebell4.length}`;
         libbufferV *= parseFloat(`${2 % (Math.max(7, whitebell4.length))}`);
      if (iconnointernetQ.length > znewsr.length) {
         iconnointernetQ = `${libhermesD.length}`;
      }
         iconnointernetQ += "2";
      sharewhiteZ += `${((watche ? 5 : 3) % (Math.max(node_.length, 10)))}`;
      break;
   }
   if ((node_.length - sigmobv.length) <= 5) {
      node_ = [(String.fromCharCode(86,0) == redcirclebgF ? redcirclebgF.length : sharewhiteZ.length)];
   }
       let termsc = 0.0;
      while (termsc <= termsc) {
          let libavdeviceY = String.fromCharCode(112,97,115,115,95,113,95,54,50,0);
          let viewsT: Map<any, any> = new Map([[String.fromCharCode(98,95,56,49,0),38], [String.fromCharCode(106,97,99,111,98,105,0),875]]);
         termsc /= Math.max(4, libavdeviceY.length);
         libavdeviceY = `${viewsT.size % (Math.max(viewsT.size, 2))}`;
         break;
      }
      for (let e = 0; e < 1; e++) {
         termsc -= parseInt(`${termsc}`) >> (Math.min(3, Math.abs(1)));
      }
          let floatingz = String.fromCharCode(118,95,49,51,95,103,101,110,101,114,97,108,105,115,101,100,0);
          let package_t0W = 3;
         termsc += parseInt(`${termsc}`) / 1;
         floatingz = "3";
         package_t0W &= floatingz.length % (Math.max(9, package_t0W));
      disconnectedlogom += `${node_.length >> (Math.min(4, Math.abs(libhermesR)))}`;
   for (let w = 0; w < 1; w++) {
       let dependencyt = String.fromCharCode(108,95,50,56,95,114,101,99,111,110,110,101,99,116,0);
      let modityi = dependencyt.length <= 7983469;
      do {
         dependencyt += `${dependencyt.length >> (Math.min(dependencyt.length, 3))}`;
         if (modityi) {
            break;
         }
      } while ((!dependencyt.startsWith(dependencyt)) && modityi);
       let rncoreH = String.fromCharCode(114,101,102,105,108,108,95,100,95,57,48,0);
       let imageactionliveu = String.fromCharCode(120,99,104,103,0);
      for (let r = 0; r < 3; r++) {
         dependencyt = `${dependencyt.length | 1}`;
      }
      libcrashsdkR += (parseFloat(`${String.fromCharCode(48,0) == redcirclebgF ? redcirclebgF.length : detailsP}`));
   }
      iconarrowlefti += `${iconarrowlefti.length & 3}`;
      redcirclebgF += `${3 * parseInt(`${libcrashsdkR}`)}`;
   while (loginI.length >= 2) {
      loginI = `${(loginI == String.fromCharCode(75,0) ? loginI.length : parseInt(`${libcrashsdkR}`))}`;
      break;
   }
   let subsj = sharewhiteZ.length >= 7072400;
   do {
      sharewhiteZ += `${iconarrowlefti.length}`;
      if (subsj) {
         break;
      }
   } while (subsj && (sharewhiteZ.length >= 5));
   if (3 == sharewhiteZ.length) {
       let historyH = String.fromCharCode(101,110,111,117,103,104,0);
       let mathv = 0.0;
       let usernamey = String.fromCharCode(109,98,115,101,103,109,101,110,116,95,102,95,57,55,0);
       let floater7 = 3.0;
      if (mathv < 3.10) {
         mathv += parseFloat(`${parseInt(`${floater7}`)}`);
      }
         mathv -= parseFloat(`${parseInt(`${floater7}`)}`);
      for (let n = 0; n < 1; n++) {
         floater7 += usernamey.length % (Math.max(2, 9));
      }
      if (usernamey.length >= 2) {
          let mbnativeadvancedI = 0.0;
          let network3 = true;
         mathv *= parseFloat(`${historyH.length | parseInt(`${mathv}`)}`);
         mbnativeadvancedI += parseFloat(`${parseInt(`${mbnativeadvancedI}`) ^ 1}`);
         network3 = !network3;
      }
         floater7 += parseInt(`${mathv}`) - 2;
         usernamey += `${parseInt(`${floater7}`) * usernamey.length}`;
         floater7 *= parseInt(`${floater7}`);
       let iconnewchatd = String.fromCharCode(117,99,109,112,95,52,95,52,0);
       let predictionactiveo = String.fromCharCode(108,105,99,101,110,115,101,115,0);
       let orangedownarrow6 = String.fromCharCode(118,101,114,105,102,105,101,100,0);
         usernamey += `${1 * iconnewchatd.length}`;
         mathv *= parseFloat(`${usernamey.length}`);
      for (let s = 0; s < 3; s++) {
         usernamey += `${(String.fromCharCode(68,0) == usernamey ? historyH.length : usernamey.length)}`;
      }
      libhermesR &= 1 - detailsP;
   }
   let iconchatsend6 = disconnectedlogom.length >= 9533161;
   do {
      disconnectedlogom += `${sigmobv.length}`;
      if (iconchatsend6) {
         break;
      }
   } while (iconchatsend6 && (disconnectedlogom.length > 1));
   let plusc = String.fromCharCode(102,52,110,117,109,121,107,112,0) == loginI;
   do {
      loginI = `${node_.length}`;
      if (plusc) {
         break;
      }
   } while (plusc && (!redcirclebgF.startsWith(`${loginI.length}`)));
       let sinah = 0;
         sinah <<= Math.min(4, Math.abs(sinah + sinah));
       let footballfiledlayoutl = 3.0;
       let runtime8 = 3.0;
         footballfiledlayoutl += parseFloat(`${parseInt(`${runtime8}`)}`);
      detailsP -= libhermesR;
       let acceptedo = String.fromCharCode(104,101,97,100,0);
       let nendl = false;
          let skiph = 1;
          let updatese = String.fromCharCode(118,95,48,95,102,97,116,101,0);
          let nterstitialU = String.fromCharCode(102,95,56,56,95,108,111,99,97,108,101,115,0);
         nendl = acceptedo.endsWith(`${skiph}`);
         skiph |= 2 << (Math.min(5, nterstitialU.length));
         updatese = `${updatese.length << (Math.min(Math.abs(3), 4))}`;
         nterstitialU = `${updatese.length * 3}`;
      for (let e = 0; e < 3; e++) {
         nendl = !acceptedo.startsWith(`${nendl}`);
      }
         nendl = !acceptedo.includes(`${nendl}`);
          let gmailx = 5.0;
         acceptedo = `${((nendl ? 4 : 4) ^ parseInt(`${gmailx}`))}`;
      while (5 > acceptedo.length) {
         acceptedo += `${((nendl ? 5 : 2))}`;
         break;
      }
         acceptedo += `${((nendl ? 1 : 3))}`;
      splash_ &= 2;
   let langkey2 = libcrashsdkR <= 9799792.0;
   do {
       let libturbomodulejsijniS: Array<any> = [String.fromCharCode(116,105,109,101,115,0), String.fromCharCode(115,99,97,110,116,97,98,108,101,115,0)];
       let constantsf = String.fromCharCode(100,117,112,108,105,99,97,116,101,100,95,104,95,56,48,0);
       let reducerk = false;
       let leakcheckerB: Array<any> = [String.fromCharCode(112,97,105,114,105,110,103,0), String.fromCharCode(97,110,110,111,116,97,116,101,95,100,95,56,52,0), String.fromCharCode(118,97,114,108,101,110,0)];
         constantsf += `${(1 ^ (reducerk ? 3 : 2))}`;
      if (1 > constantsf.length || !reducerk) {
         constantsf = `${((reducerk ? 5 : 1))}`;
      }
         leakcheckerB = [2 % (Math.max(7, libturbomodulejsijniS.length))];
          let penaltymatchiconb = false;
         constantsf = `${((penaltymatchiconb ? 5 : 1) << (Math.min(Math.abs(3), 4)))}`;
      let eactP = reducerk ? !reducerk : reducerk;
      do {
         reducerk = (leakcheckerB.length | constantsf.length) <= 2;
         if (eactP) {
            break;
         }
      } while (((leakcheckerB.length % (Math.max(1, 2))) > 5 && 1 > leakcheckerB.length) && eactP);
      while ((libturbomodulejsijniS.length % 2) >= 5 && !reducerk) {
         libturbomodulejsijniS = [leakcheckerB.length];
         break;
      }
       let yellowvideolive7 = true;
         reducerk = (62 <= (leakcheckerB.length * (!reducerk ? leakcheckerB.length : 62)));
      while ((leakcheckerB.length / (Math.max(5, 8))) < 5 && (libturbomodulejsijniS.length / 5) < 3) {
         leakcheckerB.push(((yellowvideolive7 ? 5 : 5) & leakcheckerB.length));
         break;
      }
         yellowvideolive7 = String.fromCharCode(74,0) == constantsf;
         leakcheckerB.push(libturbomodulejsijniS.length >> (Math.min(Math.abs(3), 1)));
          let transferQ = 3.0;
          let airbnbstarselectedV = 5.0;
         constantsf = `${1 ^ leakcheckerB.length}`;
         transferQ += parseInt(`${airbnbstarselectedV}`) ^ 2;
         airbnbstarselectedV /= Math.max(parseInt(`${transferQ}`), 5);
      libcrashsdkR /= Math.max(parseFloat(`${disconnectedlogom.length / (Math.max(6, sigmobv.length))}`), 5);
      if (langkey2) {
         break;
      }
   } while ((libcrashsdkR < 3.26) && langkey2);
   if (redcirclebgF.startsWith(`${node_.length}`)) {
      redcirclebgF = `${sharewhiteZ.length}`;
   }
      sigmobv += `${upgradey.length << (Math.min(4, Math.abs(splash_)))}`;
   for (let x = 0; x < 3; x++) {
       let orangetickw = String.fromCharCode(100,95,54,48,95,115,117,112,101,114,103,114,111,117,112,0);
       let back6 = false;
       let minimizex = true;
      for (let n = 0; n < 1; n++) {
         back6 = minimizex;
      }
      while (orangetickw.length <= 5) {
         back6 = !minimizex;
         break;
      }
          let teame: Map<any, any> = new Map([[String.fromCharCode(112,95,50,51,95,119,115,119,111,114,100,0),468], [String.fromCharCode(108,117,109,105,110,97,110,99,101,0),458]]);
          let enewarchdefaultsU = 1.0;
         back6 = teame.size >= 29;
         teame = new Map([[`${enewarchdefaultsU}`, 2 * parseInt(`${enewarchdefaultsU}`)]]);
      if (minimizex) {
         minimizex = (66 <= (orangetickw.length % (Math.max(1, (!back6 ? orangetickw.length : 66)))));
      }
       let reactnativeratingsX: Array<any> = [334, 610, 875];
       let umenga: Array<any> = [154, 732];
         orangetickw += `${3 >> (Math.min(2, orangetickw.length))}`;
         orangetickw = `${reactnativeratingsX.length}`;
      if (minimizex) {
         orangetickw = "3";
      }
         minimizex = !minimizex;
      node_ = [1 << (Math.min(Math.abs(parseInt(`${libcrashsdkR}`)), 4))];
   }
       let libapminsightat = 1;
       let transfer3: Array<any> = [877, 748, 157];
       let basketballhometeaml = false;
         basketballhometeaml = transfer3.includes(libapminsightat);
       let holderc: Array<any> = [473, 201];
       let default_9h3: Array<any> = [String.fromCharCode(99,104,97,110,103,101,95,104,95,56,54,0), String.fromCharCode(101,116,104,101,114,116,117,112,108,105,115,0)];
      if (5 > (holderc.length & 1) || 3 > (libapminsightat & 1)) {
         holderc.push(default_9h3.length);
      }
      let private_pv = basketballhometeaml ? !basketballhometeaml : basketballhometeaml;
      do {
          let downloadedb: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,122,101,114,0),447], [String.fromCharCode(114,101,110,100,105,116,105,111,110,95,103,95,57,51,0),121]]);
         basketballhometeaml = 65 <= libapminsightat;
         downloadedb.set(`${downloadedb.size}`, downloadedb.size);
         if (private_pv) {
            break;
         }
      } while (private_pv && (1 <= (holderc.length << (Math.min(Math.abs(1), 1))) && holderc.length <= 1));
       let showU = 5;
      let whitevideolivej = 8899714 >= holderc.length;
      do {
          let matchactivea = String.fromCharCode(103,97,116,101,0);
          let clearA: Array<any> = [628, 858, 377];
          let iconplayQ: Map<any, any> = new Map([[String.fromCharCode(115,101,116,105,0),341], [String.fromCharCode(105,110,111,117,116,0),690]]);
         holderc.push(default_9h3.length | 3);
         matchactivea += `${(matchactivea == String.fromCharCode(52,0) ? matchactivea.length : clearA.length)}`;
         clearA.push(iconplayQ.size - 2);
         iconplayQ = new Map([[`${iconplayQ.size}`, clearA.length << (Math.min(Math.abs(1), 2))]]);
         if (whitevideolivej) {
            break;
         }
      } while (whitevideolivej && (basketballhometeaml || 2 > (holderc.length | 5)));
      while (libapminsightat == 4) {
          let icopy_tJ = String.fromCharCode(118,97,116,97,114,0);
          let benefitY = String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,0);
          let basketballS = String.fromCharCode(111,95,55,95,102,109,117,108,0);
          let whitetickV = true;
         showU %= Math.max(basketballS.length, 1);
         icopy_tJ += "1";
         benefitY = `${(icopy_tJ == String.fromCharCode(74,0) ? benefitY.length : icopy_tJ.length)}`;
         basketballS = `${icopy_tJ.length}`;
         whitetickV = (icopy_tJ.length | benefitY.length) >= 20;
         break;
      }
         libapminsightat *= libapminsightat % 1;
         libapminsightat >>= Math.min(default_9h3.length, 5);
      upgradey += `${sigmobv.length}`;
      sigmobv += `${libhermesR + splash_}`;
      libcrashsdkR += parseFloat(`${sigmobv.length << (Math.min(4, Math.abs(libhermesR)))}`);
   for (let e = 0; e < 2; e++) {
      splash_ |= iconarrowlefti.length % 1;
   }

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  
  const resendOTP = () => {
       let fastb = false;
    let hooky = String.fromCharCode(99,95,54,53,95,114,101,100,105,114,101,99,116,105,111,110,0);
    let actionsZ = String.fromCharCode(120,121,122,116,97,98,108,101,115,95,51,95,54,57,0);
    let hoverF = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,108,95,54,49,0);
    let bridgeC = true;
    let greyE: Array<any> = [533, 730, 333];
    let defaultbasketballbg8 = String.fromCharCode(116,104,114,109,97,116,0);
    let statistics0 = 2.0;
    let teamdetailsbgx = String.fromCharCode(99,95,53,55,95,99,117,114,115,111,114,0);
    let popupt = String.fromCharCode(108,111,103,115,97,109,112,108,101,0);
    let whistleorangef = String.fromCharCode(105,95,55,56,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0);
      defaultbasketballbg8 = `${(popupt == String.fromCharCode(117,0) ? popupt.length : actionsZ.length)}`;
       let turndownh = String.fromCharCode(115,101,101,100,101,100,0);
       let iconwatchnowA = String.fromCharCode(104,105,116,0);
       let orangeuparrowl = String.fromCharCode(104,101,97,100,101,114,0);
          let videojsN = false;
          let sentryv = false;
          let commonv: Array<any> = [551, 93];
         orangeuparrowl = `${((sentryv ? 5 : 4) + (videojsN ? 3 : 3))}`;
         videojsN = 40 == commonv.length;
         sentryv = commonv.length <= commonv.length;
      for (let y = 0; y < 3; y++) {
         iconwatchnowA = `${iconwatchnowA.length * orangeuparrowl.length}`;
      }
       let auto_cQ: Map<any, any> = new Map([[String.fromCharCode(117,115,101,100,0),644], [String.fromCharCode(115,121,109,98,111,108,105,99,95,113,95,54,53,0),826]]);
       let description_tI = true;
       let matchactiveY = true;
         iconwatchnowA += `${3 ^ orangeuparrowl.length}`;
         description_tI = orangeuparrowl.length < 22;
         iconwatchnowA += `${orangeuparrowl.length}`;
      let wifirouterH = 6931325 >= turndownh.length;
      do {
         turndownh += `${turndownh.length}`;
         if (wifirouterH) {
            break;
         }
      } while ((matchactiveY) && wifirouterH);
         iconwatchnowA = `${((description_tI ? 4 : 3) >> (Math.min(Math.abs(2), 4)))}`;
      bridgeC = greyE.length >= 35;
       let libavcodecy = 3.0;
       let championp: Map<any, any> = new Map([[String.fromCharCode(102,100,99,116,0),704], [String.fromCharCode(105,95,49,53,95,104,109,104,100,0),96], [String.fromCharCode(101,95,53,52,0),113]]);
       let downarrowF = 2.0;
         downarrowF /= Math.max(3, parseFloat(`${parseInt(`${downarrowF}`)}`));
       let bootsplash3 = 2;
         championp.set(`${downarrowF}`, 3);
          let fullscreenmaxc = true;
          let downloadr = 0.0;
         championp.set(`${downarrowF}`, championp.size >> (Math.min(1, Math.abs(parseInt(`${downarrowF}`)))));
         fullscreenmaxc = 22.73 >= downloadr;
         downloadr += parseFloat(`${1 + parseInt(`${downloadr}`)}`);
      for (let s = 0; s < 1; s++) {
         libavcodecy += parseFloat(`${championp.size}`);
      }
       let whitesmalltickX: Array<any> = [596, 690];
         libavcodecy -= parseFloat(`${whitesmalltickX.length >> (Math.min(2, Math.abs(parseInt(`${downarrowF}`))))}`);
         bootsplash3 >>= Math.min(2, Math.abs(whitesmalltickX.length + bootsplash3));
      for (let y = 0; y < 3; y++) {
         bootsplash3 >>= Math.min(whitesmalltickX.length, 3);
      }
      greyE.push(parseInt(`${libavcodecy}`));
   while (popupt != String.fromCharCode(99,0) && hoverF == String.fromCharCode(72,0)) {
      popupt = "2";
      break;
   }

    setResend(false);

      actionsZ = "3";
   for (let p = 0; p < 1; p++) {
       let ninit_y36: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,108,97,121,115,0),797], [String.fromCharCode(101,99,107,101,121,0),347], [String.fromCharCode(114,95,52,49,95,105,114,114,101,108,101,118,97,110,116,0),958]]);
       let profileA = String.fromCharCode(116,111,107,101,110,105,122,101,0);
       let libtob5 = true;
       let notificationfilledi = String.fromCharCode(105,99,99,112,0);
       let iconeditf: Array<any> = [String.fromCharCode(104,112,97,114,97,109,115,0), String.fromCharCode(115,116,97,99,107,118,105,101,119,0), String.fromCharCode(114,95,54,95,113,117,97,110,116,105,116,121,0)];
      while (notificationfilledi.endsWith(`${libtob5}`)) {
         notificationfilledi += "2";
         break;
      }
          let basev = true;
         iconeditf = [(1 | (basev ? 1 : 2))];
      let orangeclockz = iconeditf.length <= 9903397;
      do {
         iconeditf = [ninit_y36.size >> (Math.min(Math.abs(2), 1))];
         if (orangeclockz) {
            break;
         }
      } while (orangeclockz && (profileA.length <= iconeditf.length));
         ninit_y36.set(profileA, iconeditf.length);
      let arrowx = libtob5 ? !libtob5 : libtob5;
      do {
         libtob5 = (iconeditf.length << (Math.min(notificationfilledi.length, 4))) <= 6;
         if (arrowx) {
            break;
         }
      } while (arrowx && (!libtob5));
      while (1 == (3 << (Math.min(3, notificationfilledi.length))) || (notificationfilledi.length << (Math.min(2, iconeditf.length))) == 3) {
         iconeditf = [2];
         break;
      }
      while (1 < (1 ^ ninit_y36.size) && ninit_y36.size < 1) {
          let delegate_3iP = String.fromCharCode(104,95,50,54,95,97,108,97,98,97,115,116,101,114,0);
          let sharedG = String.fromCharCode(118,101,114,116,105,99,97,108,0);
          let internetb = String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,0);
         libtob5 = (ninit_y36.size / (Math.max(5, profileA.length))) >= 26;
         delegate_3iP += `${internetb.length}`;
         sharedG = `${delegate_3iP.length + sharedG.length}`;
         internetb += "1";
         break;
      }
         iconeditf.push(((libtob5 ? 4 : 1)));
      for (let g = 0; g < 1; g++) {
         libtob5 = notificationfilledi.length == 49;
      }
      let const_fiZ = notificationfilledi == String.fromCharCode(52,97,105,121,115,117,51,0);
      do {
         notificationfilledi += `${profileA.length}`;
         if (const_fiZ) {
            break;
         }
      } while (const_fiZ && ((notificationfilledi.length - 3) >= 1));
       let default_hn = String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,0);
      while (5 > profileA.length) {
          let moduleG = 0;
          let contextx = String.fromCharCode(109,97,114,107,101,116,95,106,95,52,52,0);
          let textinput4: Array<any> = [String.fromCharCode(119,101,120,112,97,110,100,95,115,95,51,51,0), String.fromCharCode(99,97,117,115,101,95,97,95,54,0)];
          let layoutT = 2.0;
         profileA += `${((libtob5 ? 2 : 1) * 3)}`;
         moduleG += contextx.length;
         contextx += `${1 & contextx.length}`;
         textinput4.push(2 & textinput4.length);
         layoutT /= Math.max(5, parseFloat(`${2}`));
         break;
      }
         notificationfilledi = `${notificationfilledi.length}`;
      if (2 <= (default_hn.length >> (Math.min(Math.abs(5), 1)))) {
          let awayplayerg = 2;
          let base2: Array<any> = [204, 797, 923];
         iconeditf.push(notificationfilledi.length ^ 2);
         awayplayerg |= awayplayerg;
         base2.push(awayplayerg ^ base2.length);
      }
       let plashd = false;
       let telegramN = false;
      actionsZ = `${1 >> (Math.min(1, Math.abs(ninit_y36.size)))}`;
   }
      greyE.push((1 | (fastb ? 2 : 1)));
   for (let o = 0; o < 2; o++) {
      teamdetailsbgx += "3";
   }

    yysHomeloading.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

      bridgeC = (((bridgeC ? 28 : teamdetailsbgx.length) * teamdetailsbgx.length) < 28);
      hoverF = `${hooky.length}`;
      hooky = `${parseInt(`${statistics0}`)}`;
   for (let n = 0; n < 1; n++) {
      defaultbasketballbg8 = `${teamdetailsbgx.length}`;
   }
      setOtpTextInput([]);

      bridgeC = actionsZ == hoverF;
   let unimplementedviewU = 5499274 <= hoverF.length;
   do {
      hoverF = `${((fastb ? 5 : 5))}`;
      if (unimplementedviewU) {
         break;
      }
   } while ((actionsZ.endsWith(hoverF)) && unimplementedviewU);
   for (let s = 0; s < 1; s++) {
      greyE.push((String.fromCharCode(103,0) == hooky ? hooky.length : (fastb ? 1 : 2)));
   }
      teamdetailsbgx += `${(hoverF.length >> (Math.min(3, Math.abs((bridgeC ? 2 : 3)))))}`;
      setOtp('      ');

   for (let q = 0; q < 3; q++) {
      hoverF += `${1 * hoverF.length}`;
   }
   let graya = teamdetailsbgx.length <= 8013280;
   do {
      teamdetailsbgx = `${hoverF.length % 3}`;
      if (graya) {
         break;
      }
   } while (graya && (parseInt(`${statistics0}`) < teamdetailsbgx.length));
   while (!bridgeC && 4 > popupt.length) {
      bridgeC = hooky == String.fromCharCode(99,0);
      break;
   }
      bridgeC = !bridgeC;
      setValid(0);
    });
  };

  const focusPrevious = async (key: string, index: number) => {
    if (key === 'Backspace') {
      if (otp[index] == ' ' && index !== 0) {
        let new_otp = otp.replace(/./g, (c, i) => (i == index ? ' ' : c));
        new_otp = new_otp.replace(/./g, (c, i) => (i == index - 1 ? ' ' : c));
        setOtp(new_otp);
        otpTextInput[index - 1].focus();
      } else {
        let new_otp = otp.replace(/./g, (c, i) => (i == index ? ' ' : c));
        setOtp(new_otp);
      }
    } else if (!isNaN(parseInt(key, 10))) {
      if (index < otpTextInput.length - 1 && key) {
        otpTextInput[index + 1].focus();
      }
      if (index === otpTextInput.length - 1) {
        otpTextInput[index].blur();
        
        let new_otp = otp.replace(/./g, (c, i) => (i == index ? key : c));
        setOtp(new_otp);

        
        await onSubmit(new_otp);

        return;
      }
      let new_otp = otp.replace(/./g, (c, i) => (i == index ? key : c));
      setOtp(new_otp);
    }
    setValid(0);
  };

  const onSubmit = async (new_otp: string) => {
    let result: any;

    try {
      result = await yysHomeloading.signinupUser({
        loginType: email !== undefined ? 'EMAIL' : 'SMS',
        email: email,
        phone: phone,
        countryId: countryId,
        referralCode: referralCode,
        otp: new_otp,
        userId: userState.user?.userId ?? '',
      })
    } catch (err: any) {
      setValid(1);
      result = { state: '' };
      result.state = err;
      return;
    }

    const resultData = result.data;

    const user = yysIconstar.fromJson(resultData);

    await dispatch(addUserAuthState(user));

    const resultMsg = result.message;

    if (resultMsg.includes("注册成功")) {
      navigation.navigate('SetUsername');

    } else if (resultMsg.includes("登录成功")) {

      if (user.isVip()) {
        await AsyncStorage.setItem("showAds", "false");
      } else {
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));
      navigation.goBack();

      
      yys_giftbutton_footballtrophy.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        yys_giftbutton_footballtrophy.userCenterVipLoginSuccessTimesAnalytics();
      }
      
    }
  }

  return (
    <View>
      <Text style={styles.title}>输入邮箱验证码</Text>

      <Text style={styles.description}>
        验证码已发送至{' '}
        <Text style={styles.hyperlink}>
          {email ?? phone}
        </Text>{' '}
      </Text>

      {email && <Text style={styles.description}>如果没有收到邮件，请检查垃圾邮箱</Text>}

      <View style={styles.containerStyle}>
        {[0, 0, 0, 0, 0, 0].map((_, i) => {
          return (
            <TextInput
              key={i}
              style={[
                isValid === 0 ? styles.inputStyle : styles.inputInvalidStyle,
                focusedInput === i ? styles.inputFocused : null,
              ]}
              keyboardType="numeric"
              onKeyPress={e => focusPrevious(e.nativeEvent.key, i)}
              ref={ref => {
                otpTextInput[i] = ref!;
              }}
              onBlur={handleBlur}
              onFocus={() => handleFocus(i)}
              value={otp[i]}
              maxLength={1}
            />
          );
        })}
      </View>
      {isValid === 1 && (
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <Image
            style={styles.iconStyle}
            source={require('../../../../static/images/invite/libreactIconeye.png')}
          />

          <Text style={styles.danger}>验证码不正确，请重试</Text>
        </View>
      )}

      {!resend && <ResendCountDown resend={resend} setResend={setResend} />}

      {resend && (
        <TouchableWithoutFeedback
          onPress={resendOTP}
          style={{ marginTop: 35 }}
        >
          <Text
            style={styles.hyperlink}
          >
            重新发送验证码
          </Text>
        </TouchableWithoutFeedback>
      )}
      {/* <Text style={[styles.description, {marginBottom:10}]}>If you don't receive the OTP within 60 seconds, please click the <Text style={styles.hyperlink}>Resend</Text> button to receive the OTP again.</Text> */}
    </View>
  );
};

const createStyles = ({ colors }: any = {}) => StyleSheet.create({
  headerBarShadow: {
    width: '100%',
    marginTop: 12,
    height: 4,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    elevation: 5,
    shadowRadius: 3,
    backgroundColor: 'white',
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
    height: 80,
    width: '100%',
  },
  inputStyle: {
    textAlign: 'center',
    backgroundColor: '#1D2023',
    color: '#ffffff',
    width: 48,
    height: 48,
    borderRadius: 6,
    fontSize: 24,
  },
  inputInvalidStyle: {
    textAlign: 'center',
    backgroundColor: '#1D2023',
    color: '#FF1010',
    width: 48,
    height: 48,
    borderRadius: 6,
    fontSize: 24,
  },
  OTPtitle: {
    fontWeight: '800',
    fontSize: 40,
    width: '80%',
    textAlign: 'left',
    marginBottom: 20,
  },
  description: {
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  hyperlink: {
    fontWeight: '600',
    fontSize: 15,
    paddingLeft: 10,
    textAlign: 'center',
    color: colors?.primary,
  },
  danger: {
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'left',
    color: '#FF3434',
  },
  topNav: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  inputFocused: {
    borderColor: '#FAC33D',
    borderWidth: 1,
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginRight: 5,
    position: 'relative',
    top: 1,
  },
});
