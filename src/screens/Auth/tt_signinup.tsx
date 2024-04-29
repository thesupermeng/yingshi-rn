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
import ScreenContainer from '../../components/container/tt_backward';
import { useDispatch } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';

import { ResendCountDown } from './tt_eact';
import { addUserAuthState } from '@redux/actions/tt_topon';

import { changeScreenAction } from '@redux/actions/tt_copy_heji';
import tt_humidity_guide from '../../../Umeng/tt_humidity_guide';
import { ttTramini } from '@api';
import { useSelector } from '@hooks/tt_spec_download';
import { ttFast } from '@models/tt_stations_right';
import { ttGoal } from '@redux/reducers/tt_selected';
import ttDownTick from '../../../AppsFlyer/tt_fastforward';


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

type ttMuted = {
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
}: ttMuted) => {
  const { colors, dark } = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); 

  const [focusedInput, setFocusedInput] = useState(null); 

  const userState = useSelector<ttGoal>('userReducer');

  const styles = useMemo(() => createStyles({
    colors,
    dark,
  }), [colors, dark]);

  const handleFocus = (index: any) => {
    console.log(index);
    setFocusedInput(index);
  };

  const handleBlur = () => {
       let watchp = 1.0;
    let submitI: Array<any> = [317, 453, 82];
    let annern = 0.0;
    let path1 = String.fromCharCode(110,95,54,55,95,112,117,98,108,105,115,104,0);
    let viewert = true;
    let kick3: Map<any, any> = new Map([[String.fromCharCode(105,95,55,48,95,115,105,103,110,97,108,105,110,103,0),String.fromCharCode(115,95,55,48,0)], [String.fromCharCode(104,95,54,51,95,112,117,98,107,101,121,0),String.fromCharCode(110,101,116,105,115,114,95,107,95,51,51,0)], [String.fromCharCode(107,95,49,55,95,99,101,114,116,105,102,105,99,97,116,101,0),String.fromCharCode(107,95,53,55,95,115,104,97,100,111,119,0)]]);
    let controls3 = false;
    let thumbnailZ = true;
    let streamingL = 5.0;
    let downloaderV = 3.0;
    let analyticsK = true;
   while (!controls3) {
      kick3 = new Map([[`${watchp}`, (String.fromCharCode(67,0) == path1 ? path1.length : parseInt(`${watchp}`))]]);
      break;
   }
   let langkeyc = controls3 ? !controls3 : controls3;
   do {
       let hook8 = String.fromCharCode(113,95,52,57,95,118,105,100,101,111,116,111,111,108,98,111,120,0);
       let listZ: Array<any> = [811, 49, 691];
       let notificationb = String.fromCharCode(105,95,51,57,95,114,105,112,101,109,100,0);
       let sharedv = 0.0;
      if (5 < (hook8.length >> (Math.min(Math.abs(4), 3))) || (listZ.length >> (Math.min(Math.abs(4), 4))) < 4) {
          let largeQ = String.fromCharCode(109,95,49,56,95,99,111,108,111,114,101,100,0);
          let episode4 = 5;
          let productL = String.fromCharCode(115,112,111,116,108,105,103,104,116,95,119,95,50,50,0);
         listZ = [largeQ.length / 2];
         largeQ = `${productL.length}`;
         episode4 /= Math.max(2, productL.length);
      }
      if (!hook8.endsWith(`${listZ.length}`)) {
         hook8 = `${(notificationb == String.fromCharCode(71,0) ? listZ.length : notificationb.length)}`;
      }
      let modelsa = notificationb.length >= 8207063;
      do {
         notificationb = `${(String.fromCharCode(54,0) == notificationb ? parseInt(`${sharedv}`) : notificationb.length)}`;
         if (modelsa) {
            break;
         }
      } while ((5.46 <= (sharedv / (Math.max(2.59, 8))) && 4 <= (notificationb.length - 2)) && modelsa);
      let renewn = sharedv <= 7350114.0;
      do {
         sharedv -= parseInt(`${sharedv}`);
         if (renewn) {
            break;
         }
      } while ((listZ.includes(sharedv)) && renewn);
          let reactnativejs_: Map<any, any> = new Map([[String.fromCharCode(122,95,51,50,95,99,104,97,114,109,97,112,0),String.fromCharCode(97,112,112,108,121,95,104,95,55,48,0)], [String.fromCharCode(100,101,99,114,121,112,116,95,107,95,55,55,0),String.fromCharCode(107,95,52,53,95,111,114,105,101,110,116,0)], [String.fromCharCode(103,95,49,48,95,111,116,104,0),String.fromCharCode(99,95,53,49,95,105,110,116,101,114,109,101,100,105,97,116,101,0)]]);
          let screend = 3.0;
         sharedv -= 1 << (Math.min(4, Math.abs(reactnativejs_.size)));
         reactnativejs_.set(`${screend}`, parseInt(`${screend}`) / 3);
       let kuaishouP = 1.0;
       let signinup6 = 0.0;
      if (2.33 <= (sharedv - kuaishouP) && (kuaishouP - sharedv) <= 2.33) {
         kuaishouP *= 1 << (Math.min(1, hook8.length));
      }
      if ((notificationb.length ^ 1) >= 3 && (signinup6 + notificationb.length) >= 1.56) {
          let entry0 = false;
          let pauseD = 2.0;
          let carousel6 = 2;
          let clubg: Array<any> = [String.fromCharCode(101,95,50,53,95,100,105,114,101,99,116,111,114,121,0), String.fromCharCode(99,111,110,102,105,110,101,100,95,52,95,49,51,0), String.fromCharCode(100,101,109,117,120,95,49,95,50,50,0)];
          let rewardvideos = 5;
         notificationb += `${notificationb.length / 2}`;
         entry0 = (rewardvideos / (Math.max(6, clubg.length))) >= 80;
         pauseD /= Math.max(3, parseFloat(`${parseInt(`${pauseD}`)}`));
         carousel6 %= Math.max(3, carousel6);
         clubg.push(clubg.length * carousel6);
         rewardvideos *= clubg.length / 2;
      }
      for (let z = 0; z < 3; z++) {
          let settings1 = String.fromCharCode(108,97,116,101,114,95,50,95,55,54,0);
          let chinasameP = 4;
          let downW = 5.0;
         hook8 = `${parseInt(`${signinup6}`)}`;
         settings1 += `${parseInt(`${downW}`)}`;
         chinasameP *= chinasameP | 3;
         downW /= Math.max(1, parseFloat(`${chinasameP}`));
      }
      if ((hook8.length >> (Math.min(Math.abs(4), 5))) == 1) {
         hook8 = "3";
      }
          let groupR: Array<any> = [String.fromCharCode(102,95,54,52,95,101,120,116,101,110,100,105,110,103,0), String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,95,56,95,54,55,0), String.fromCharCode(112,95,57,51,95,115,101,109,97,110,116,105,99,97,108,108,121,0)];
          let activey = 4.0;
         notificationb += `${groupR.length}`;
         groupR.push(parseInt(`${activey}`));
         notificationb += `${parseInt(`${signinup6}`) ^ listZ.length}`;
      controls3 = !controls3;
      if (langkeyc) {
         break;
      }
   } while ((!controls3) && langkeyc);
   if (3 == (kick3.size << (Math.min(Math.abs(5), 4)))) {
       let configureE = 4.0;
         configureE *= parseFloat(`${1 % (Math.max(parseInt(`${configureE}`), 4))}`);
         configureE -= parseFloat(`${parseInt(`${configureE}`) % 2}`);
         configureE /= Math.max(5, parseFloat(`${3 / (Math.max(parseInt(`${configureE}`), 3))}`));
      controls3 = null != kick3.get(`${watchp}`);
   }
      controls3 = controls3 || submitI.length >= 16;
   for (let j = 0; j < 3; j++) {
      kick3.set(`${annern}`, submitI.length);
   }
       let singleM = 0.0;
       let tickedD = 4.0;
       let entry9 = 0.0;
      if (3.70 < entry9) {
         tickedD += parseFloat(`${1}`);
      }
      if ((2.11 + tickedD) <= 4.58) {
         tickedD -= parseFloat(`${parseInt(`${entry9}`) ^ parseInt(`${tickedD}`)}`);
      }
      if (5.81 <= entry9) {
         entry9 -= parseInt(`${tickedD}`);
      }
          let contextk = String.fromCharCode(115,95,55,56,95,102,97,115,116,102,105,114,115,116,112,97,115,115,0);
          let photoR = 3;
          let topicE = String.fromCharCode(107,95,54,95,113,110,111,115,0);
         entry9 /= Math.max(parseInt(`${entry9}`) >> (Math.min(5, Math.abs(parseInt(`${tickedD}`)))), 5);
         contextk = `${1 - photoR}`;
         photoR >>= Math.min(Math.abs(2), 1);
         topicE = `${1 << (Math.min(2, Math.abs(photoR)))}`;
      if (2.62 == (entry9 - singleM)) {
          let indicator4 = true;
          let skipZ = 2.0;
          let descI = 0.0;
          let combinedL: Map<any, any> = new Map([[String.fromCharCode(111,95,55,57,0),String.fromCharCode(115,112,97,114,115,101,95,54,95,56,49,0)], [String.fromCharCode(115,105,109,112,108,101,116,97,103,95,56,95,55,50,0),String.fromCharCode(110,95,51,53,95,109,118,115,101,116,0)]]);
         singleM -= parseFloat(`${parseInt(`${descI}`) + parseInt(`${skipZ}`)}`);
         indicator4 = (54 > ((indicator4 ? combinedL.size : 95) * combinedL.size));
         skipZ += (combinedL.size * (indicator4 ? 5 : 4));
         descI += (parseFloat(`${(indicator4 ? 3 : 3) + combinedL.size}`));
      }
      for (let s = 0; s < 2; s++) {
         singleM /= Math.max(parseFloat(`${parseInt(`${singleM}`) % 2}`), 3);
      }
      while ((5 + singleM) > 4.57) {
         entry9 += parseInt(`${singleM}`) + parseInt(`${entry9}`);
         break;
      }
         tickedD *= parseFloat(`${parseInt(`${tickedD}`) / (Math.max(parseInt(`${singleM}`), 4))}`);
      let detailsE = 5175132.0 >= tickedD;
      do {
         tickedD -= parseFloat(`${parseInt(`${entry9}`)}`);
         if (detailsE) {
            break;
         }
      } while ((entry9 >= 2.30) && detailsE);
      path1 += "3";
      watchp -= parseInt(`${watchp}`) - kick3.size;
   while (path1.length > 1) {
      kick3.set(`${controls3}`, kick3.size);
      break;
   }
      submitI = [((controls3 ? 3 : 3) + 1)];
       let subsh = String.fromCharCode(122,95,56,51,95,99,111,100,101,99,112,114,105,118,0);
      let hnewsP = subsh == String.fromCharCode(121,52,98,53,120,102,104,108,55,113,0);
      do {
          let downC = 4;
          let bannery = 3.0;
         subsh += `${2 >> (Math.min(Math.abs(parseInt(`${bannery}`)), 1))}`;
         downC *= downC;
         bannery /= Math.max(4, downC - 3);
         if (hnewsP) {
            break;
         }
      } while ((subsh.length <= 3) && hnewsP);
      if (subsh != String.fromCharCode(82,0)) {
         subsh += `${2 << (Math.min(4, subsh.length))}`;
      }
         subsh += `${subsh.length}`;
      annern *= parseInt(`${watchp}`);
       let bridgef = true;
       let pressureI = String.fromCharCode(97,95,52,56,95,105,110,116,108,0);
         pressureI += `${pressureI.length}`;
      if (!bridgef) {
         bridgef = pressureI.length <= 34;
      }
      while (pressureI.endsWith(`${bridgef}`)) {
          let networkr = 4.0;
          let fillede: Array<any> = [String.fromCharCode(112,95,53,52,95,115,121,110,111,110,121,109,115,0), String.fromCharCode(100,97,114,116,115,95,105,95,50,48,0)];
         bridgef = fillede.includes(networkr);
         break;
      }
          let megaphoneX = 2.0;
         pressureI += `${1 >> (Math.min(3, pressureI.length))}`;
         megaphoneX *= parseFloat(`${2 + parseInt(`${megaphoneX}`)}`);
      for (let c = 0; c < 3; c++) {
         bridgef = !bridgef;
      }
      if (pressureI.startsWith(`${bridgef}`)) {
         pressureI = `${pressureI.length}`;
      }
      path1 += `${parseInt(`${watchp}`)}`;
   if (viewert) {
       let placementJ = String.fromCharCode(105,108,108,105,113,97,95,107,95,52,55,0);
       let telegramF: Map<any, any> = new Map([[String.fromCharCode(102,95,55,48,95,105,111,118,101,99,105,110,0),417], [String.fromCharCode(101,95,52,50,95,115,97,118,101,115,116,97,116,101,0),143], [String.fromCharCode(110,95,54,56,95,109,97,112,112,105,110,103,115,0),65]]);
       let linez = 4;
      while ((3 << (Math.min(1, Math.abs(linez)))) > 2 || (3 << (Math.min(5, Math.abs(linez)))) > 3) {
          let weiboN = 4.0;
          let reactk = String.fromCharCode(112,95,57,49,95,108,111,103,105,115,116,105,99,0);
          let internetZ = false;
          let unselectedc = String.fromCharCode(119,95,50,55,95,101,120,112,101,99,116,101,100,0);
          let mailV = String.fromCharCode(115,95,51,50,95,111,115,116,114,101,97,109,0);
         telegramF = new Map([[placementJ, (unselectedc == String.fromCharCode(73,0) ? placementJ.length : unselectedc.length)]]);
         weiboN *= 3;
         reactk = `${parseInt(`${weiboN}`)}`;
         internetZ = reactk.length >= 74;
         mailV += `${(mailV.length ^ (internetZ ? 2 : 1))}`;
         break;
      }
      let questS = 5647531 >= telegramF.size;
      do {
         telegramF.set(`${linez}`, (placementJ == String.fromCharCode(50,0) ? placementJ.length : linez));
         if (questS) {
            break;
         }
      } while (((telegramF.size | linez) >= 1 && 5 >= (1 | telegramF.size)) && questS);
          let customD = 0.0;
          let update__df = 4.0;
         telegramF.set(placementJ, 1);
         customD *= 1;
         update__df /= Math.max(3, 3 << (Math.min(Math.abs(parseInt(`${update__df}`)), 2)));
      for (let b = 0; b < 2; b++) {
         telegramF = new Map([[placementJ, linez]]);
      }
         linez -= linez >> (Math.min(Math.abs(3), 1));
      viewert = placementJ == String.fromCharCode(104,0);
   }
   if (!path1.endsWith(`${thumbnailZ}`)) {
       let smallb = String.fromCharCode(98,117,105,108,100,115,95,108,95,51,49,0);
       let modal4 = String.fromCharCode(122,95,49,51,95,100,105,114,97,99,100,115,112,0);
       let mimoe = String.fromCharCode(120,95,56,48,95,115,104,97,114,101,100,107,101,121,0);
       let target_ = false;
       let bodank = 5;
      for (let j = 0; j < 3; j++) {
          let gpayi = String.fromCharCode(107,95,50,57,95,118,105,98,114,97,116,105,111,110,0);
          let specq: Map<any, any> = new Map([[String.fromCharCode(110,116,105,108,101,95,122,95,55,56,0),866], [String.fromCharCode(101,120,105,116,95,121,95,54,48,0),552], [String.fromCharCode(107,95,56,53,95,111,116,111,115,0),944]]);
          let telegramM = 4;
         smallb = `${smallb.length / (Math.max(3, 1))}`;
         gpayi += `${specq.size ^ 1}`;
         specq = new Map([[`${specq.size}`, 1 | specq.size]]);
         telegramM += specq.size;
      }
       let edit8 = 1;
      for (let b = 0; b < 2; b++) {
         modal4 = `${3 & bodank}`;
      }
       let scores = String.fromCharCode(113,109,98,108,95,55,95,54,50,0);
       let placeholderr = String.fromCharCode(112,111,114,116,97,105,116,95,105,95,57,55,0);
          let tramini0 = 2;
          let unselectedC: Array<any> = [778, 549, 924];
         scores += `${mimoe.length}`;
         tramini0 %= Math.max(3, 3);
         unselectedC.push(2 / (Math.max(4, tramini0)));
         smallb += `${edit8 - 3}`;
      let activeP = modal4.length <= 5395372;
      do {
          let twitterL = String.fromCharCode(108,97,116,95,105,95,51,53,0);
          let huaweic = String.fromCharCode(106,95,56,54,95,109,105,110,105,109,97,108,108,121,0);
          let tickedE = String.fromCharCode(122,95,52,49,95,112,111,115,116,101,110,99,111,100,101,0);
          let incidentS = 2.0;
          let viewsB = 0.0;
         modal4 = `${twitterL.length}`;
         twitterL += `${parseInt(`${viewsB}`)}`;
         huaweic = `${3 & huaweic.length}`;
         tickedE = "1";
         incidentS += parseInt(`${incidentS}`);
         if (activeP) {
            break;
         }
      } while ((target_ || 5 == modal4.length) && activeP);
      let h_viewJ = mimoe.length >= 6553919;
      do {
         mimoe += `${(String.fromCharCode(69,0) == scores ? modal4.length : scores.length)}`;
         if (h_viewJ) {
            break;
         }
      } while (h_viewJ && (modal4 == mimoe));
       let anytime0 = String.fromCharCode(104,105,98,105,116,95,105,95,57,53,0);
       let championz = String.fromCharCode(99,95,55,50,95,114,117,98,121,0);
      let debugj = 5733998 >= bodank;
      do {
          let alertA = 5.0;
          let pointh = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,55,95,50,51,0);
          let streamingP = 3.0;
         bodank >>= Math.min(4, Math.abs(3));
         alertA /= Math.max(pointh.length >> (Math.min(5, Math.abs(parseInt(`${streamingP}`)))), 4);
         pointh = `${1 * parseInt(`${alertA}`)}`;
         streamingP /= Math.max(5, 1);
         if (debugj) {
            break;
         }
      } while (((modal4.length & bodank) == 1) && debugj);
         mimoe += `${(String.fromCharCode(107,0) == modal4 ? bodank : modal4.length)}`;
      let collection8 = String.fromCharCode(109,105,99,108,111,109,54,0) == mimoe;
      do {
         mimoe += `${3 - scores.length}`;
         if (collection8) {
            break;
         }
      } while (collection8 && (anytime0 == String.fromCharCode(113,0)));
         scores = `${modal4.length}`;
      let feedbackZ = String.fromCharCode(103,119,115,105,0) == mimoe;
      do {
         mimoe += "1";
         if (feedbackZ) {
            break;
         }
      } while (feedbackZ && (!target_ && mimoe.length < 3));
      thumbnailZ = (submitI.length + parseInt(`${annern}`)) < 55;
   }
       let refreshc = 4;
       let showq = 0;
      for (let z = 0; z < 2; z++) {
         refreshc &= showq;
      }
         refreshc <<= Math.min(1, Math.abs(3));
      while (showq > 3) {
         showq -= 1;
         break;
      }
      if (3 == (4 & refreshc)) {
         showq %= Math.max(2, 1 >> (Math.min(1, Math.abs(refreshc))));
      }
         showq *= refreshc;
      if ((showq | refreshc) <= 4 && (4 | refreshc) <= 1) {
          let uploadh = String.fromCharCode(108,111,119,101,114,99,97,115,101,100,95,113,95,56,56,0);
          let logoutY = 3.0;
         showq |= showq;
         uploadh += `${uploadh.length * parseInt(`${logoutY}`)}`;
         logoutY /= Math.max(parseFloat(`${parseInt(`${logoutY}`) - 3}`), 4);
      }
      kick3.set(path1, 1);

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  const formatPhoneNumber = (phoneNumber) => {
       let balle = 0;
    let matcht = String.fromCharCode(99,95,51,54,95,118,105,101,119,0);
    let historyO = String.fromCharCode(101,120,101,99,117,116,101,95,121,95,49,0);
    let membership2 = 2;
    let baiduB = 4;
    let member1 = false;
    let configJ: Map<any, any> = new Map([[String.fromCharCode(109,95,57,49,95,100,101,116,97,99,104,0),741], [String.fromCharCode(110,101,120,116,95,48,95,55,49,0),474], [String.fromCharCode(111,95,53,55,95,97,99,116,105,118,97,116,105,111,110,115,0),216]]);
    let s_image6 = 2;
    let relatedh: Map<any, any> = new Map([[String.fromCharCode(105,95,48,95,119,104,105,99,104,0),269], [String.fromCharCode(107,95,49,50,95,106,99,104,117,102,102,0),59], [String.fromCharCode(115,95,53,53,95,100,101,108,105,109,105,116,101,114,115,0),216]]);
    let textZ: Map<any, any> = new Map([[String.fromCharCode(100,105,115,115,105,109,95,49,95,53,0),String.fromCharCode(121,95,57,48,95,97,99,116,97,98,0)], [String.fromCharCode(105,95,50,50,95,97,100,118,97,110,99,101,0),String.fromCharCode(109,95,55,53,95,112,114,111,109,112,101,103,0)], [String.fromCharCode(99,95,55,51,95,99,111,108,108,97,112,115,101,100,0),String.fromCharCode(105,95,49,95,99,97,116,101,103,111,114,121,0)]]);
    let ballr: Map<any, any> = new Map([[String.fromCharCode(108,95,50,53,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0),String.fromCharCode(108,111,103,103,97,98,108,101,95,101,95,56,49,0)], [String.fromCharCode(106,95,55,95,115,97,110,105,116,105,122,101,100,0),String.fromCharCode(104,95,56,50,95,114,101,102,117,110,100,0)], [String.fromCharCode(97,100,115,103,97,115,95,54,95,54,0),String.fromCharCode(121,95,49,50,95,97,97,110,100,99,116,116,97,98,0)]]);
      historyO += `${(s_image6 - (member1 ? 1 : 4))}`;
       let guideT = String.fromCharCode(98,108,111,98,95,113,95,56,57,0);
       let colorsZ = 5;
       let roundb = 5;
       let transferv = String.fromCharCode(113,95,55,52,95,99,104,114,111,109,105,110,97,110,99,101,0);
       let z_viewe = String.fromCharCode(120,95,48,95,97,114,103,0);
          let suggestionM: Map<any, any> = new Map([[String.fromCharCode(101,115,115,97,103,101,95,118,95,51,56,0),739], [String.fromCharCode(102,95,57,49,95,118,108,98,117,102,0),647], [String.fromCharCode(108,95,56,54,95,97,98,98,114,0),18]]);
          let modelQ: Array<any> = [458, 49, 834];
         colorsZ *= 1;
         suggestionM = new Map([[`${suggestionM.size}`, 1]]);
         modelQ.push(modelQ.length);
         roundb >>= Math.min(Math.abs(1), 4);
      if ((3 - z_viewe.length) > 5 || (z_viewe.length - colorsZ) > 3) {
         z_viewe = `${transferv.length >> (Math.min(1, z_viewe.length))}`;
      }
         guideT += `${colorsZ}`;
          let telegramo = String.fromCharCode(106,95,55,56,95,115,117,110,114,97,115,116,0);
         colorsZ ^= guideT.length - transferv.length;
         telegramo += `${telegramo.length}`;
      let umengd = 8961794 <= colorsZ;
      do {
         colorsZ -= 3 & colorsZ;
         if (umengd) {
            break;
         }
      } while ((2 <= (3 << (Math.min(1, Math.abs(roundb))))) && umengd);
       let sheet2: Map<any, any> = new Map([[String.fromCharCode(101,95,53,52,95,100,99,115,99,116,112,0),434], [String.fromCharCode(112,95,57,50,95,112,99,97,112,0),409], [String.fromCharCode(112,97,103,101,114,95,50,95,54,49,0),819]]);
       let reactB: Map<any, any> = new Map([[String.fromCharCode(98,111,111,108,95,48,95,52,49,0),String.fromCharCode(109,95,53,95,102,114,101,101,100,0)], [String.fromCharCode(117,110,97,114,99,104,105,118,101,95,98,95,53,48,0),String.fromCharCode(120,95,49,95,119,97,110,116,0)]]);
         guideT += "3";
      textZ.set(`${balle}`, 1);
   if (2 == historyO.length) {
      matcht += `${balle % 2}`;
   }
   while (3 <= (2 | s_image6)) {
      historyO += `${membership2}`;
      break;
   }

    

   if ((s_image6 >> (Math.min(Math.abs(textZ.size), 3))) <= 2 && 2 <= (s_image6 >> (Math.min(Math.abs(textZ.size), 5)))) {
      s_image6 += textZ.size * 1;
   }
       let gpayf: Array<any> = [537, 428, 365];
         gpayf.push(gpayf.length);
         gpayf.push(gpayf.length ^ 1);
       let orangej = 3.0;
      matcht += `${s_image6 / (Math.max(1, textZ.size))}`;
      relatedh.set(`${baiduB}`, balle / 3);
   for (let v = 0; v < 1; v++) {
       let megaphonex: Map<any, any> = new Map([[String.fromCharCode(108,95,56,57,95,97,108,108,111,99,122,0),110], [String.fromCharCode(112,108,111,116,116,101,114,95,48,95,57,51,0),260], [String.fromCharCode(99,104,101,99,107,98,111,120,95,112,95,57,0),480]]);
       let searchbarV = 0;
       let dataD = 0.0;
       let volume9 = false;
      if (1 <= (searchbarV % (Math.max(5, 5))) && 5 <= (megaphonex.size % (Math.max(4, searchbarV)))) {
          let uploadO = 3.0;
          let accepted0 = 1;
          let expiredL: Map<any, any> = new Map([[String.fromCharCode(112,95,56,55,95,115,101,116,98,105,116,115,0),String.fromCharCode(115,114,116,112,95,56,95,55,56,0)], [String.fromCharCode(101,95,56,49,95,100,101,110,105,101,100,0),String.fromCharCode(107,95,50,55,95,105,110,118,101,114,115,101,100,0)]]);
          let playercommonR = 0.0;
          let expiredO = 3;
         searchbarV -= 2 & parseInt(`${uploadO}`);
         uploadO += parseInt(`${playercommonR}`) >> (Math.min(3, Math.abs(3)));
         accepted0 &= accepted0;
         expiredL = new Map([[`${playercommonR}`, expiredO]]);
         expiredO -= expiredL.size + 1;
      }
      while (5.73 <= (dataD / 5.80) && (megaphonex.size - 3) <= 4) {
         megaphonex.set(`${dataD}`, parseInt(`${dataD}`) & 1);
         break;
      }
      while (!Array.from(megaphonex.keys()).includes(`${searchbarV}`)) {
         megaphonex.set(`${searchbarV}`, parseInt(`${dataD}`) / (Math.max(6, searchbarV)));
         break;
      }
         volume9 = megaphonex.get(`${searchbarV}`) == null;
      let favorite4 = 6341995.0 <= dataD;
      do {
         dataD += searchbarV / 1;
         if (favorite4) {
            break;
         }
      } while (favorite4 && (1.63 >= (3.59 - dataD) && 1 >= (searchbarV - parseInt(`${dataD}`))));
      let stringi = megaphonex.size >= 8917041;
      do {
          let whatsappa = 5.0;
          let lightH = String.fromCharCode(103,114,111,117,112,110,97,109,101,115,95,57,95,53,52,0);
          let collectionZ: Array<any> = [395, 754];
          let backgrounda = 3.0;
         megaphonex = new Map([[`${searchbarV}`, lightH.length]]);
         whatsappa *= 2 << (Math.min(Math.abs(parseInt(`${whatsappa}`)), 4));
         lightH = "3";
         collectionZ = [2];
         backgrounda += parseFloat(`${parseInt(`${whatsappa}`)}`);
         if (stringi) {
            break;
         }
      } while (((megaphonex.size / (Math.max(2, 8))) == 4 || (2 * megaphonex.size) == 4) && stringi);
      if (!volume9) {
         volume9 = !volume9;
      }
         volume9 = 47.76 > dataD && searchbarV > 19;
      let sportss = megaphonex.size >= 9498805;
      do {
         megaphonex.set(`${dataD}`, ((volume9 ? 4 : 3) % (Math.max(parseInt(`${dataD}`), 5))));
         if (sportss) {
            break;
         }
      } while ((4 > (searchbarV / (Math.max(10, megaphonex.size))) || 5 > (4 / (Math.max(10, megaphonex.size)))) && sportss);
          let show1 = 2.0;
          let applicationE = String.fromCharCode(115,111,117,114,99,101,105,100,95,117,95,51,0);
         volume9 = 69 >= searchbarV;
         show1 -= parseFloat(`${3 << (Math.min(3, applicationE.length))}`);
         applicationE += `${parseInt(`${show1}`)}`;
      if (1 == searchbarV || (1 - searchbarV) == 5) {
         volume9 = megaphonex.size < 38 && 100.20 < dataD;
      }
         dataD -= searchbarV;
      historyO += "2";
   }
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

       let holderA = String.fromCharCode(107,95,53,54,95,115,99,104,101,100,117,108,105,110,103,0);
       let overv: Map<any, any> = new Map([[String.fromCharCode(116,116,97,101,110,99,95,119,95,50,56,0),395], [String.fromCharCode(112,114,111,99,97,109,112,95,98,95,49,52,0),159]]);
       let sharedl = 4.0;
       let commonr: Array<any> = [286, 181];
         sharedl /= Math.max(3, 2);
         sharedl -= holderA.length << (Math.min(Math.abs(3), 1));
          let type_9wl = String.fromCharCode(114,101,99,118,118,95,118,95,55,54,0);
          let langkeyb = String.fromCharCode(102,95,53,50,95,101,112,122,115,0);
         overv = new Map([[`${overv.size}`, overv.size]]);
         type_9wl += `${(type_9wl == String.fromCharCode(65,0) ? type_9wl.length : langkeyb.length)}`;
         langkeyb += `${(type_9wl == String.fromCharCode(95,0) ? langkeyb.length : type_9wl.length)}`;
      for (let f = 0; f < 3; f++) {
         commonr = [holderA.length];
      }
      if ((overv.size - sharedl) < 3.98 && 5 < (parseInt(`${sharedl}`) - overv.size)) {
          let sigmobX = String.fromCharCode(106,95,50,50,95,114,101,115,111,108,118,101,100,0);
          let nextO = String.fromCharCode(122,95,57,50,95,115,121,115,108,111,103,0);
          let submitM = 4.0;
          let sharedP = String.fromCharCode(99,111,111,108,100,111,119,110,95,113,95,55,49,0);
         overv = new Map([[`${overv.size}`, overv.size >> (Math.min(sigmobX.length, 2))]]);
         sigmobX += `${sharedP.length}`;
         nextO = `${parseInt(`${submitM}`) | nextO.length}`;
         submitM -= 3 ^ nextO.length;
         sharedP += `${(nextO == String.fromCharCode(87,0) ? nextO.length : parseInt(`${submitM}`))}`;
      }
          let current8: Array<any> = [217, 277, 9];
         sharedl *= 2;
         current8 = [current8.length + 3];
      if (Array.from(overv.values()).includes(commonr.length)) {
         overv.set(`${commonr.length}`, commonr.length ^ overv.size);
      }
         holderA += `${parseInt(`${sharedl}`) + 1}`;
      relatedh = new Map([[`${configJ.size}`, balle % (Math.max(configJ.size, 1))]]);
   for (let t = 0; t < 1; t++) {
      balle /= Math.max(1, 2);
   }
   if (5 < (textZ.size % 1) && 4 < (textZ.size % 1)) {
      relatedh.set(`${baiduB}`, baiduB);
   }
       let connection6 = false;
      if (connection6) {
          let smallo = true;
         connection6 = !smallo;
      }
         connection6 = !connection6;
          let match6 = String.fromCharCode(109,95,49,56,95,115,104,111,119,119,97,118,101,115,0);
          let logoy = 5.0;
         connection6 = (parseInt(`${logoy}`) / (Math.max(9, match6.length))) < 24;
      member1 = configJ.size == 53 || s_image6 == 53;

    

       let incidentL = String.fromCharCode(102,114,97,109,101,112,111,111,108,95,50,95,49,48,0);
       let recommendationJ = 5.0;
      while (!incidentL.startsWith(`${recommendationJ}`)) {
         incidentL += `${incidentL.length - parseInt(`${recommendationJ}`)}`;
         break;
      }
         recommendationJ -= parseFloat(`${parseInt(`${recommendationJ}`) & 1}`);
         recommendationJ += parseFloat(`${incidentL.length}`);
          let membership9 = 2.0;
          let championY = String.fromCharCode(118,111,114,98,105,115,100,115,112,95,100,95,50,53,0);
         recommendationJ *= parseFloat(`${parseInt(`${recommendationJ}`)}`);
         membership9 /= Math.max(parseFloat(`${championY.length >> (Math.min(2, Math.abs(parseInt(`${membership9}`))))}`), 5);
         championY = `${3 | parseInt(`${membership9}`)}`;
      for (let p = 0; p < 3; p++) {
         recommendationJ += (parseFloat(`${String.fromCharCode(69,0) == incidentL ? incidentL.length : parseInt(`${recommendationJ}`)}`));
      }
      for (let d = 0; d < 3; d++) {
         recommendationJ *= parseFloat(`${2}`);
      }
      member1 = 48 == balle;
       let desc6 = String.fromCharCode(112,95,52,56,95,100,101,99,111,109,112,114,101,115,115,0);
       let hookd = 0;
       let update_77T: Array<any> = [642, 433];
      while ((hookd / (Math.max(desc6.length, 8))) > 5 && 5 > (hookd / (Math.max(desc6.length, 7)))) {
          let bodanC: Array<any> = [995, 999, 982];
          let private_ryn = true;
          let teamE = String.fromCharCode(118,95,50,53,95,105,115,99,111,118,101,114,0);
          let thailandT = 0.0;
          let unselectedR = 1.0;
         hookd += parseInt(`${thailandT}`);
         bodanC.push((teamE == String.fromCharCode(114,0) ? parseInt(`${unselectedR}`) : teamE.length));
         private_ryn = !teamE.endsWith(`${unselectedR}`);
         break;
      }
         update_77T.push(desc6.length % 3);
       let backwardx = String.fromCharCode(101,95,52,52,95,112,111,105,110,116,101,114,0);
       let shareO = String.fromCharCode(116,97,112,116,95,109,95,49,48,48,0);
          let whistleS = false;
          let tempj = 0.0;
          let signinupb = 1;
         hookd *= 3 >> (Math.min(4, Math.abs(hookd)));
         whistleS = !whistleS;
         tempj -= parseFloat(`${parseInt(`${tempj}`) / 2}`);
         signinupb -= 3 & signinupb;
         update_77T = [3 - shareO.length];
         update_77T.push((String.fromCharCode(69,0) == desc6 ? desc6.length : hookd));
          let clubf: Array<any> = [103, 471, 27];
          let uploadN = String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,108,95,53,52,0);
         shareO += "1";
         clubf = [clubf.length | uploadN.length];
         uploadN = "1";
      let buttonw = 7460329 >= hookd;
      do {
          let networky = String.fromCharCode(112,97,114,97,115,101,116,95,53,95,57,51,0);
          let custom9 = String.fromCharCode(114,95,49,52,95,112,103,109,121,117,118,0);
         hookd >>= Math.min(5, update_77T.length);
         networky += `${networky.length}`;
         custom9 = `${custom9.length}`;
         if (buttonw) {
            break;
         }
      } while ((2 == (3 % (Math.max(6, hookd))) && (backwardx.length % 3) == 2) && buttonw);
         shareO = `${hookd}`;
      textZ.set(`${s_image6}`, 2);
      s_image6 <<= Math.min(Math.abs(membership2), 5);
      matcht = `${textZ.size}`;
    if (!numericPhoneNumber) return '';

   while (s_image6 > 2) {
       let searchK = 5;
       let configure_: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,101,110,95,57,95,56,55,0),true ], [String.fromCharCode(112,95,52,55,95,98,105,111,109,101,116,114,105,99,115,0),false ]]);
       let current0 = String.fromCharCode(105,115,111,95,119,95,49,0);
       let catagoryQ: Map<any, any> = new Map([[String.fromCharCode(121,95,53,95,114,101,115,105,100,101,110,99,101,0),String.fromCharCode(101,112,115,118,95,116,95,51,54,0)], [String.fromCharCode(109,95,50,54,95,115,108,97,110,116,0),String.fromCharCode(98,117,105,108,116,105,110,95,107,95,57,56,0)], [String.fromCharCode(98,95,54,51,95,112,114,111,98,108,101,109,115,0),String.fromCharCode(115,99,97,110,110,101,114,95,101,95,54,51,0)]]);
         current0 = "2";
      for (let w = 0; w < 3; w++) {
          let analyticS = false;
          let eacti = String.fromCharCode(100,101,108,105,109,105,116,101,114,95,52,95,54,50,0);
         catagoryQ = new Map([[current0, 1]]);
         analyticS = eacti.endsWith(`${analyticS}`);
         eacti += `${((analyticS ? 2 : 4) % 3)}`;
      }
         configure_ = new Map([[`${catagoryQ.size}`, current0.length - 2]]);
       let applek = 0;
      let mbnative_ = searchK >= 7926346;
      do {
         searchK >>= Math.min(Math.abs((String.fromCharCode(72,0) == current0 ? configure_.size : current0.length)), 3);
         if (mbnative_) {
            break;
         }
      } while (mbnative_ && ((searchK | 1) >= 1 || (configure_.size | 1) >= 4));
      if (1 >= (applek - 3)) {
         catagoryQ = new Map([[`${catagoryQ.size}`, catagoryQ.size]]);
      }
      if (applek < 3) {
         current0 = "2";
      }
         current0 = "1";
       let lang8 = true;
          let penaltyS = 4.0;
          let layoutd: Map<any, any> = new Map([[String.fromCharCode(100,95,52,57,95,103,101,116,98,121,116,101,0),429], [String.fromCharCode(100,101,99,111,100,101,95,107,95,50,52,0),375], [String.fromCharCode(102,108,97,116,95,56,95,56,48,0),470]]);
          let zoom3 = String.fromCharCode(102,95,55,55,95,105,110,116,111,0);
         lang8 = 22 > configure_.size;
         penaltyS -= parseFloat(`${layoutd.size}`);
         layoutd = new Map([[`${layoutd.size}`, layoutd.size >> (Math.min(Math.abs(3), 3))]]);
         zoom3 += `${3 | layoutd.size}`;
         current0 = "2";
         configure_ = new Map([[`${catagoryQ.size}`, catagoryQ.size * current0.length]]);
      s_image6 |= 3;
      break;
   }
      membership2 += matcht.length;
      textZ = new Map([[`${textZ.size}`, relatedh.size - 2]]);
       let calendar_: Map<any, any> = new Map([[String.fromCharCode(106,95,51,57,95,115,115,101,100,105,102,102,0),String.fromCharCode(112,95,49,56,95,100,105,99,116,105,111,110,97,114,105,101,115,0)], [String.fromCharCode(109,117,108,116,105,102,114,97,109,101,95,115,95,49,48,0),String.fromCharCode(112,95,55,55,95,99,111,110,115,116,114,117,99,116,111,114,0)]]);
       let quest5 = String.fromCharCode(122,95,53,54,95,107,105,115,115,0);
       let textK: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,95,101,95,53,48,0),977], [String.fromCharCode(117,95,49,50,95,100,105,115,116,114,105,98,117,116,101,0),603]]);
         calendar_ = new Map([[`${calendar_.size}`, calendar_.size]]);
          let othero = String.fromCharCode(116,95,54,54,95,115,117,98,109,105,116,0);
          let shootY: Array<any> = [720, 488, 576];
         quest5 += `${othero.length * textK.size}`;
         othero += `${shootY.length}`;
         shootY.push(shootY.length);
      let bootsplashK = quest5 == String.fromCharCode(57,114,112,111,0);
      do {
         quest5 = `${textK.size << (Math.min(Math.abs(3), 3))}`;
         if (bootsplashK) {
            break;
         }
      } while (((2 * textK.size) > 4 && 2 > (quest5.length * textK.size)) && bootsplashK);
       let step8 = String.fromCharCode(115,105,103,110,97,116,117,114,101,95,121,95,51,52,0);
       let inactive1 = String.fromCharCode(116,111,100,97,121,115,95,118,95,51,53,0);
      while (5 < textK.size) {
          let stylesS: Array<any> = [626, 394];
          let routerH = 5.0;
          let canvasq = String.fromCharCode(119,95,54,53,95,98,105,110,107,98,0);
          let policyZ = String.fromCharCode(99,97,118,115,95,52,95,51,54,0);
         textK = new Map([[`${textK.size}`, textK.size]]);
         stylesS = [parseInt(`${routerH}`)];
         routerH /= Math.max(parseFloat(`${1 + parseInt(`${routerH}`)}`), 3);
         canvasq += `${canvasq.length}`;
         policyZ = "1";
         break;
      }
      if (1 > (calendar_.size / 2) && (2 / (Math.max(5, quest5.length))) > 1) {
         quest5 = `${(step8 == String.fromCharCode(112,0) ? step8.length : textK.size)}`;
      }
      if (inactive1.includes(quest5)) {
         inactive1 = "1";
      }
      if (1 > (inactive1.length & 4)) {
          let updates3 = 5.0;
          let injuryi = 3;
         textK = new Map([[`${calendar_.size}`, (String.fromCharCode(71,0) == inactive1 ? inactive1.length : calendar_.size)]]);
         updates3 *= parseFloat(`${injuryi + parseInt(`${updates3}`)}`);
         injuryi /= Math.max(4, injuryi - parseInt(`${updates3}`));
      }
      if (2 >= (textK.size & 2)) {
         step8 = `${textK.size}`;
      }
      configJ = new Map([[`${textK.size}`, textK.size % (Math.max(2, 7))]]);

    const countryCode = numericPhoneNumber.substring(0, 3); 

       let ewardedP = String.fromCharCode(99,95,57,95,103,116,101,115,116,0);
       let historyC: Array<any> = [558, 796];
       let muted6: Map<any, any> = new Map([[String.fromCharCode(122,95,49,95,109,97,120,120,0),String.fromCharCode(114,95,56,52,95,99,104,114,111,109,105,117,109,0)], [String.fromCharCode(112,101,97,107,115,95,51,95,49,49,0),String.fromCharCode(108,95,51,48,95,100,105,103,105,116,0)], [String.fromCharCode(105,95,50,50,95,109,105,100,110,105,103,104,116,0),String.fromCharCode(101,95,53,57,95,103,114,97,112,104,0)]]);
      let matchesD = historyC.length <= 6203986;
      do {
         historyC = [(String.fromCharCode(99,0) == ewardedP ? ewardedP.length : historyC.length)];
         if (matchesD) {
            break;
         }
      } while (matchesD && (5 < (ewardedP.length << (Math.min(5, historyC.length))) || (historyC.length << (Math.min(ewardedP.length, 4))) < 5));
         muted6 = new Map([[`${historyC.length}`, ewardedP.length / (Math.max(2, historyC.length))]]);
       let emojix = String.fromCharCode(112,95,56,53,95,112,103,105,100,120,0);
          let thailandM = true;
         ewardedP += `${ewardedP.length * 3}`;
      let mbbanner6 = ewardedP == String.fromCharCode(116,104,118,51,104,109,52,0);
      do {
          let sliderO = String.fromCharCode(109,95,56,48,95,119,104,116,120,0);
          let logoutg: Array<any> = [String.fromCharCode(97,95,49,49,95,109,117,108,116,105,115,116,101,112,0), String.fromCharCode(102,97,99,116,111,114,95,48,95,57,55,0), String.fromCharCode(100,99,113,117,97,110,116,95,119,95,53,51,0)];
         ewardedP = `${(String.fromCharCode(68,0) == ewardedP ? ewardedP.length : emojix.length)}`;
         sliderO += `${1 / (Math.max(4, logoutg.length))}`;
         logoutg.push(3 | logoutg.length);
         if (mbbanner6) {
            break;
         }
      } while (((historyC.length - 3) >= 2 && (historyC.length - 3) >= 5) && mbbanner6);
         ewardedP += "2";
          let nalyticst = true;
          let ajaxk = String.fromCharCode(110,95,51,55,95,105,100,97,116,0);
          let backwardI = String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,105,95,51,50,0);
         historyC = [1 | ewardedP.length];
         nalyticst = backwardI == ajaxk;
         ajaxk += `${(ajaxk == String.fromCharCode(76,0) ? ajaxk.length : backwardI.length)}`;
      for (let m = 0; m < 2; m++) {
          let forwardg = 3.0;
          let star7: Map<any, any> = new Map([[String.fromCharCode(112,97,115,116,95,106,95,51,52,0),false ], [String.fromCharCode(113,95,53,95,112,115,100,115,112,0),true ], [String.fromCharCode(106,95,50,55,95,105,110,116,101,110,116,0),true ]]);
          let albuma: Array<any> = [String.fromCharCode(118,95,54,54,95,117,110,105,118,101,114,115,97,108,0), String.fromCharCode(114,95,54,54,95,116,101,109,112,110,97,109,101,0), String.fromCharCode(114,101,97,108,109,95,122,95,50,55,0)];
          let arrowM = String.fromCharCode(105,110,115,116,95,55,95,53,57,0);
         muted6 = new Map([[`${star7.size}`, star7.size - 1]]);
         forwardg *= arrowM.length << (Math.min(5, albuma.length));
         albuma.push(parseInt(`${forwardg}`));
         arrowM = `${albuma.length / (Math.max(arrowM.length, 3))}`;
      }
         emojix = `${muted6.size + historyC.length}`;
      member1 = 36 < s_image6;
       let mailI = 1.0;
       let verticalX = String.fromCharCode(111,114,119,97,114,100,101,100,95,57,95,54,51,0);
       let bootsplashj = String.fromCharCode(98,95,55,95,97,98,111,114,116,0);
      if (verticalX.length >= bootsplashj.length) {
         bootsplashj = `${parseInt(`${mailI}`) / 3}`;
      }
         bootsplashj += `${verticalX.length | parseInt(`${mailI}`)}`;
      for (let s = 0; s < 1; s++) {
         verticalX = `${(String.fromCharCode(72,0) == bootsplashj ? verticalX.length : bootsplashj.length)}`;
      }
      while ((3 & verticalX.length) < 4 || 5 < (3 << (Math.min(5, verticalX.length)))) {
         mailI -= parseFloat(`${parseInt(`${mailI}`) << (Math.min(Math.abs(1), 5))}`);
         break;
      }
      if (5.4 == mailI) {
         mailI *= (parseFloat(`${String.fromCharCode(105,0) == verticalX ? verticalX.length : parseInt(`${mailI}`)}`));
      }
         mailI /= Math.max(parseFloat(`${bootsplashj.length}`), 5);
       let mutedL = 2;
          let resendm = String.fromCharCode(118,97,114,105,97,110,99,101,95,97,95,50,0);
          let lightW = String.fromCharCode(112,101,114,99,101,110,116,95,111,95,49,50,0);
         bootsplashj += `${verticalX.length << (Math.min(Math.abs(3), 2))}`;
         resendm += `${lightW.length % (Math.max(resendm.length, 2))}`;
         lightW = `${lightW.length}`;
         bootsplashj += `${1 ^ mutedL}`;
      s_image6 <<= Math.min(Math.abs(relatedh.size), 2);
   for (let c = 0; c < 2; c++) {
       let hookZ = 4;
       let calendark = 4.0;
       let downv = 3.0;
          let leftk: Array<any> = [153, 969, 439];
          let pause6 = String.fromCharCode(115,117,98,111,98,106,101,99,116,95,51,95,55,54,0);
         calendark -= parseFloat(`${parseInt(`${downv}`)}`);
         leftk.push((pause6 == String.fromCharCode(75,0) ? leftk.length : pause6.length));
      for (let m = 0; m < 3; m++) {
          let condensed1: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,116,111,114,95,103,95,57,53,0),String.fromCharCode(100,114,97,103,103,101,100,95,51,95,51,54,0)], [String.fromCharCode(104,101,120,98,115,95,54,95,54,56,0),String.fromCharCode(109,111,100,110,112,102,95,98,95,51,49,0)]]);
          let frame_a2p: Array<any> = [String.fromCharCode(119,95,50,48,95,116,114,117,115,116,101,100,0), String.fromCharCode(112,114,101,116,99,104,95,98,95,53,57,0)];
         downv += parseInt(`${calendark}`) * 3;
         condensed1 = new Map([[`${condensed1.size}`, condensed1.size & 2]]);
         frame_a2p.push(frame_a2p.length % 1);
      }
      while (1.59 < (parseFloat(`${hookZ}`) - calendark) && (1.59 - calendark) < 3.74) {
         hookZ |= parseInt(`${calendark}`);
         break;
      }
         hookZ ^= parseInt(`${downv}`);
         hookZ |= 3;
      balle <<= Math.min(4, Math.abs(1));
   }
       let trashK = true;
       let miniB = 2.0;
       let sorth = true;
         miniB -= (parseFloat(`${(sorth ? 2 : 2) | 1}`));
      let forme = miniB >= 7093826.0;
      do {
          let dropdown0 = 0.0;
          let controlA = String.fromCharCode(102,95,50,48,0);
         miniB -= parseFloat(`${2 & parseInt(`${dropdown0}`)}`);
         dropdown0 /= Math.max(1, controlA.length);
         controlA = `${controlA.length}`;
         if (forme) {
            break;
         }
      } while ((4.74 == miniB || (miniB * 4.74) == 4.19) && forme);
      for (let p = 0; p < 2; p++) {
          let pointz = true;
          let pathL: Map<any, any> = new Map([[String.fromCharCode(97,100,106,101,99,116,105,118,101,115,95,98,95,55,53,0),995], [String.fromCharCode(104,111,108,100,105,110,103,95,104,95,49,0),50]]);
          let alert1 = String.fromCharCode(101,100,103,101,115,95,119,95,53,0);
          let episodesF: Array<any> = [705, 354, 967];
          let sports4 = String.fromCharCode(118,97,114,105,97,98,108,101,95,53,95,51,54,0);
         sorth = 29 == episodesF.length;
         pointz = alert1.length >= pathL.size;
         pathL.set(`${sports4}`, pathL.size + 1);
         alert1 = `${(sports4.length << (Math.min(5, Math.abs((pointz ? 5 : 5)))))}`;
         episodesF = [(String.fromCharCode(49,0) == alert1 ? pathL.size : alert1.length)];
      }
       let statisticsF = 5.0;
      let settingsH = 5815374.0 >= statisticsF;
      do {
         statisticsF += (2 >> (Math.min(Math.abs((trashK ? 2 : 3)), 3)));
         if (settingsH) {
            break;
         }
      } while (settingsH && ((statisticsF / (Math.max(4.72, 1))) == 1.18 && sorth));
          let sortf = 4.0;
          let vignetter: Map<any, any> = new Map([[String.fromCharCode(116,95,50,48,95,100,97,116,97,100,105,114,0),833], [String.fromCharCode(104,101,120,98,105,110,95,97,95,53,51,0),374], [String.fromCharCode(105,110,99,114,95,108,95,55,55,0),110]]);
          let backwardIZ = 1.0;
         miniB -= (parseFloat(`${(sorth ? 3 : 2) | parseInt(`${statisticsF}`)}`));
         sortf *= 1 << (Math.min(Math.abs(parseInt(`${sortf}`)), 3));
         vignetter.set(`${sortf}`, vignetter.size >> (Math.min(Math.abs(2), 4)));
         backwardIZ -= 1;
      if ((2.90 + miniB) > 2.45) {
         miniB *= parseFloat(`${parseInt(`${statisticsF}`) % 3}`);
      }
       let uploadF: Map<any, any> = new Map([[String.fromCharCode(109,111,116,105,111,110,112,105,120,101,108,115,95,55,95,56,54,0),false ], [String.fromCharCode(105,110,116,101,103,101,114,95,109,95,49,57,0),false ], [String.fromCharCode(113,95,57,49,95,103,101,110,115,0),false ]]);
       let textI: Map<any, any> = new Map([[String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,99,95,50,53,0),false ], [String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,95,101,95,56,52,0),false ]]);
         textI.set(`${sorth}`, (parseInt(`${statisticsF}`) + (sorth ? 5 : 3)));
      relatedh.set(`${s_image6}`, parseInt(`${miniB}`) & s_image6);
    const firstPart = numericPhoneNumber.substring(3, 6);

   if (4 < (baiduB | membership2) && (membership2 | baiduB) < 4) {
      baiduB <<= Math.min(2, Math.abs(baiduB));
   }
      configJ.set(`${membership2}`, (String.fromCharCode(57,0) == matcht ? matcht.length : membership2));
   let goalD = matcht == String.fromCharCode(101,122,111,97,0);
   do {
      matcht = `${configJ.size}`;
      if (goalD) {
         break;
      }
   } while ((4 >= (3 & matcht.length)) && goalD);
   if (3 == matcht.length) {
       let watcht: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,48,95,103,115,116,114,105,110,103,0),500], [String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,97,95,54,53,0),233], [String.fromCharCode(101,95,50,55,95,99,111,108,108,101,99,116,105,111,110,0),834]]);
       let clock5 = 5.0;
       let championc = String.fromCharCode(100,101,106,117,100,100,101,114,95,118,95,56,49,0);
       let flipperg = 3.0;
          let expired3 = 4.0;
          let photo_ = 1.0;
         championc += `${championc.length}`;
         expired3 /= Math.max(parseFloat(`${2}`), 1);
         photo_ *= parseInt(`${photo_}`) ^ 2;
         watcht.set(championc, watcht.size);
      for (let h = 0; h < 1; h++) {
         flipperg *= parseFloat(`${1 / (Math.max(5, watcht.size))}`);
      }
          let langkey2 = String.fromCharCode(118,95,57,54,95,99,111,100,101,99,114,97,119,0);
         clock5 -= parseFloat(`${watcht.size << (Math.min(Math.abs(1), 4))}`);
         langkey2 += `${langkey2.length | langkey2.length}`;
          let comments: Map<any, any> = new Map([[String.fromCharCode(114,95,55,57,95,100,111,119,110,108,111,97,100,105,110,103,0),String.fromCharCode(112,114,101,105,118,111,117,115,95,98,95,57,56,0)], [String.fromCharCode(106,95,50,51,95,116,105,109,101,111,117,116,101,100,0),String.fromCharCode(99,95,54,95,109,111,100,117,108,117,115,0)]]);
         championc = `${watcht.size % 1}`;
         comments = new Map([[`${comments.size}`, 2 ^ comments.size]]);
      if ((flipperg / 2.53) < 3.16) {
          let baiduL = 5.0;
          let tumbnail6 = String.fromCharCode(117,95,50,57,95,108,117,116,115,0);
          let changet = 4.0;
         championc += `${parseInt(`${baiduL}`)}`;
         tumbnail6 = `${2 + parseInt(`${changet}`)}`;
         changet += tumbnail6.length >> (Math.min(4, Math.abs(parseInt(`${changet}`))));
      }
         flipperg *= parseFloat(`${2}`);
      if ((3.44 / (Math.max(6, flipperg))) < 1.38) {
         flipperg *= parseFloat(`${parseInt(`${flipperg}`) & watcht.size}`);
      }
         flipperg /= Math.max(parseFloat(`${3}`), 5);
      for (let j = 0; j < 1; j++) {
          let foundy = String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,111,95,55,53,0);
          let injuryp: Map<any, any> = new Map([[String.fromCharCode(118,99,111,119,112,116,114,95,102,95,51,55,0),false ], [String.fromCharCode(108,95,53,57,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0),false ]]);
          let crossl = String.fromCharCode(112,95,54,95,109,98,108,111,99,107,0);
         flipperg -= parseFloat(`${crossl.length - watcht.size}`);
         foundy += `${injuryp.size + 2}`;
         injuryp = new Map([[`${injuryp.size}`, 1]]);
         crossl += `${injuryp.size}`;
      }
      while (1.46 > (3.69 * clock5) || 1 > (championc.length ^ 5)) {
          let gpayy = 0.0;
          let selectionk = false;
         championc = `${parseInt(`${clock5}`) % 3}`;
         gpayy /= Math.max(1, parseInt(`${gpayy}`) >> (Math.min(2, Math.abs(2))));
         selectionk = selectionk && gpayy == 46.41;
         break;
      }
      while ((clock5 - parseFloat(`${championc.length}`)) < 4.40) {
         clock5 /= Math.max(1, (parseFloat(`${championc == String.fromCharCode(122,0) ? championc.length : watcht.size}`)));
         break;
      }
      matcht += `${1 >> (Math.min(2, championc.length))}`;
   }
    const secondPart = numericPhoneNumber.substring(6);

       let package_bD: Map<any, any> = new Map([[String.fromCharCode(109,95,55,48,95,111,116,104,101,114,119,105,115,101,0),454], [String.fromCharCode(97,110,110,111,116,97,116,105,111,110,95,56,95,55,53,0),285], [String.fromCharCode(118,95,49,57,95,115,117,98,112,97,116,104,115,0),905]]);
       let detaila: Map<any, any> = new Map([[String.fromCharCode(110,95,55,95,112,97,99,107,101,116,104,101,97,100,101,114,0),true ], [String.fromCharCode(111,95,55,95,104,97,110,100,108,101,0),false ]]);
          let assista = false;
          let sportS: Map<any, any> = new Map([[String.fromCharCode(102,105,108,108,101,114,95,49,95,56,54,0),String.fromCharCode(101,120,112,97,110,100,95,110,95,55,49,0)], [String.fromCharCode(98,95,55,50,95,101,116,97,0),String.fromCharCode(98,95,55,95,118,97,108,105,100,97,116,111,114,115,0)], [String.fromCharCode(116,97,112,115,95,108,95,52,55,0),String.fromCharCode(112,114,101,95,116,95,50,0)]]);
         detaila = new Map([[`${package_bD.size}`, 3 & detaila.size]]);
         assista = null != sportS.get(`${assista}`);
         sportS = new Map([[`${sportS.size}`, (sportS.size % (Math.max(3, (assista ? 5 : 3))))]]);
      let comment_ = detaila.size <= 7837687;
      do {
         detaila = new Map([[`${detaila.size}`, detaila.size | package_bD.size]]);
         if (comment_) {
            break;
         }
      } while (comment_ && (!Array.from(detaila.values()).includes(package_bD.size)));
          let scorea = true;
          let videom: Map<any, any> = new Map([[String.fromCharCode(101,95,50,56,95,104,113,112,101,108,0),432], [String.fromCharCode(112,95,56,52,95,105,110,111,100,101,115,0),255], [String.fromCharCode(111,95,57,55,95,97,116,111,109,105,99,97,108,108,121,0),401]]);
         package_bD = new Map([[`${videom.size}`, ((scorea ? 5 : 1) << (Math.min(Math.abs(3), 1)))]]);
          let bootsplashC = 2.0;
          let reactnativejsf = 2.0;
         detaila.set(`${package_bD.size}`, detaila.size + package_bD.size);
         bootsplashC /= Math.max(3, 1 / (Math.max(1, parseInt(`${reactnativejsf}`))));
         reactnativejsf += parseFloat(`${3 & parseInt(`${bootsplashC}`)}`);
         package_bD = new Map([[`${package_bD.size}`, detaila.size - 2]]);
          let targetV = true;
          let anythinkv = 0.0;
          let register_wl = true;
         detaila.set(`${anythinkv}`, package_bD.size + 3);
         targetV = !register_wl;
         anythinkv /= Math.max(((register_wl ? 5 : 3) - (targetV ? 1 : 3)), 5);
      configJ.set(`${textZ.size}`, 2 << (Math.min(1, Math.abs(relatedh.size))));
   for (let r = 0; r < 3; r++) {
       let zhengpian1 = String.fromCharCode(101,95,52,95,116,101,97,109,115,0);
       let emptyO: Map<any, any> = new Map([[String.fromCharCode(108,105,102,116,95,105,95,51,49,0),125], [String.fromCharCode(115,121,109,98,111,108,115,95,114,95,53,50,0),948]]);
       let kuaishouM = String.fromCharCode(104,113,100,110,100,95,101,95,50,48,0);
       let iconZ: Map<any, any> = new Map([[String.fromCharCode(103,95,55,53,0),String.fromCharCode(99,105,116,121,95,50,95,52,57,0)], [String.fromCharCode(105,95,56,53,95,97,99,99,101,108,101,114,97,116,101,0),String.fromCharCode(112,115,102,105,108,101,95,114,95,52,49,0)], [String.fromCharCode(109,95,49,52,95,105,110,116,115,0),String.fromCharCode(109,95,50,53,95,114,101,112,114,101,115,101,110,116,97,116,105,118,101,0)]]);
      if (2 == (2 << (Math.min(3, Math.abs(iconZ.size)))) || (iconZ.size << (Math.min(Math.abs(2), 2))) == 3) {
         iconZ = new Map([[`${emptyO.size}`, 2 & kuaishouM.length]]);
      }
      while ((5 << (Math.min(4, Math.abs(emptyO.size)))) < 4) {
         emptyO.set(zhengpian1, (zhengpian1 == String.fromCharCode(102,0) ? iconZ.size : zhengpian1.length));
         break;
      }
         emptyO = new Map([[`${emptyO.size}`, 2]]);
         iconZ = new Map([[`${iconZ.size}`, iconZ.size + 1]]);
          let bottomD = true;
          let unselectedT: Map<any, any> = new Map([[String.fromCharCode(114,95,57,51,95,105,110,115,116,97,110,99,101,115,0),String.fromCharCode(112,95,55,50,95,110,116,115,99,0)], [String.fromCharCode(104,97,109,98,117,114,103,101,114,95,103,95,53,50,0),String.fromCharCode(98,95,53,95,113,112,113,115,99,97,108,101,0)]]);
         zhengpian1 = `${kuaishouM.length}`;
         bottomD = (97 < (unselectedT.size >> (Math.min(4, Math.abs((bottomD ? unselectedT.size : 98))))));
         emptyO.set(zhengpian1, emptyO.size ^ zhengpian1.length);
          let build9 = String.fromCharCode(102,95,57,52,95,108,101,103,101,110,100,0);
          let leftT = String.fromCharCode(114,103,98,116,101,115,116,95,115,95,57,56,0);
         emptyO = new Map([[`${iconZ.size}`, 2 - kuaishouM.length]]);
         build9 = `${leftT.length + 2}`;
         leftT += `${build9.length}`;
      for (let l = 0; l < 2; l++) {
         zhengpian1 += `${(String.fromCharCode(110,0) == zhengpian1 ? zhengpian1.length : iconZ.size)}`;
      }
       let accepted1 = false;
       let frame_fn = true;
          let philippinesT = false;
         iconZ.set(`${kuaishouM}`, kuaishouM.length >> (Math.min(Math.abs(3), 5)));
         philippinesT = philippinesT || !philippinesT;
          let footballI = 2.0;
          let carousela = String.fromCharCode(109,111,115,97,105,99,95,106,95,51,57,0);
         kuaishouM += `${kuaishouM.length - 2}`;
         footballI *= parseFloat(`${carousela.length % (Math.max(3, 3))}`);
         carousela += `${carousela.length}`;
      if ((3 >> (Math.min(5, Math.abs(iconZ.size)))) <= 2) {
          let spinnerG = String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,121,95,53,53,0);
          let entryR: Map<any, any> = new Map([[String.fromCharCode(103,115,116,114,105,110,103,95,122,95,57,53,0),195], [String.fromCharCode(102,95,56,55,95,101,109,111,114,121,0),90], [String.fromCharCode(115,95,56,48,95,99,109,97,99,0),760]]);
         frame_fn = String.fromCharCode(117,0) == kuaishouM;
         spinnerG += `${(String.fromCharCode(82,0) == spinnerG ? entryR.size : spinnerG.length)}`;
         entryR = new Map([[`${entryR.size}`, entryR.size]]);
      }
      balle |= relatedh.size;
   }
      relatedh = new Map([[`${relatedh.size}`, 1]]);
   for (let e = 0; e < 1; e++) {
      member1 = (configJ.size / (Math.max(textZ.size, 1))) <= 61;
   }

    const formattedNumber = `+${countryCode} ${firstPart} ${secondPart}`;

   for (let x = 0; x < 3; x++) {
      membership2 ^= balle & matcht.length;
   }
   if (5 == textZ.size) {
       let mbnativeadvanced7 = String.fromCharCode(99,95,53,56,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0);
       let m_lockD: Map<any, any> = new Map([[String.fromCharCode(110,95,51,57,95,116,105,109,101,112,101,114,102,114,97,109,101,0),299], [String.fromCharCode(120,95,56,53,95,115,101,109,97,110,116,105,99,115,0),90]]);
       let robotox = 1.0;
         m_lockD = new Map([[`${m_lockD.size}`, (mbnativeadvanced7 == String.fromCharCode(70,0) ? mbnativeadvanced7.length : m_lockD.size)]]);
       let moviesp = String.fromCharCode(99,109,105,111,95,118,95,57,54,0);
       let read6 = String.fromCharCode(109,106,112,101,103,97,95,55,95,55,56,0);
         robotox *= parseFloat(`${moviesp.length / (Math.max(1, 8))}`);
          let temperatureb = 2;
          let moviesD = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,111,95,52,0);
         m_lockD = new Map([[`${m_lockD.size}`, m_lockD.size]]);
         temperatureb |= temperatureb;
         moviesD = `${moviesD.length % (Math.max(2, 2))}`;
          let matchQ = String.fromCharCode(115,95,53,54,95,117,112,112,101,114,0);
          let lesss = 0.0;
          let mbbannerT: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,111,114,95,113,95,51,56,0),true ], [String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,114,95,57,56,0),true ], [String.fromCharCode(111,98,118,105,111,117,115,108,121,95,105,95,49,51,0),false ]]);
         m_lockD.set(mbnativeadvanced7, read6.length);
         matchQ = `${mbbannerT.size % 2}`;
         lesss *= parseFloat(`${parseInt(`${lesss}`)}`);
         mbbannerT.set(`${lesss}`, parseInt(`${lesss}`));
      for (let g = 0; g < 2; g++) {
          let t_centerK = String.fromCharCode(115,99,97,108,97,114,95,57,95,49,53,0);
          let guideM = 0;
         m_lockD.set(read6, (String.fromCharCode(101,0) == read6 ? mbnativeadvanced7.length : read6.length));
         t_centerK += `${t_centerK.length}`;
         guideM += guideM % (Math.max(10, t_centerK.length));
      }
      if (mbnativeadvanced7 != String.fromCharCode(66,0) || read6 == String.fromCharCode(102,0)) {
         mbnativeadvanced7 += "1";
      }
      while (parseFloat(`${moviesp.length}`) <= robotox) {
          let backgroundp: Map<any, any> = new Map([[String.fromCharCode(105,95,56,51,0),806], [String.fromCharCode(113,95,56,51,95,108,122,111,120,0),331]]);
          let dark6 = String.fromCharCode(112,97,99,107,95,108,95,54,0);
          let point1 = 4.0;
          let pagination_: Map<any, any> = new Map([[String.fromCharCode(98,95,52,52,95,117,110,112,97,99,107,0),String.fromCharCode(109,97,99,104,95,122,95,50,50,0)], [String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,104,95,57,49,0),String.fromCharCode(99,108,101,97,114,105,95,101,95,53,53,0)]]);
         moviesp += `${read6.length * 3}`;
         backgroundp.set(`${dark6}`, backgroundp.size);
         dark6 += `${(dark6 == String.fromCharCode(78,0) ? dark6.length : backgroundp.size)}`;
         point1 += 1 | parseInt(`${point1}`);
         pagination_.set(`${dark6}`, backgroundp.size % (Math.max(1, 3)));
         break;
      }
      for (let t = 0; t < 2; t++) {
         moviesp = `${parseInt(`${robotox}`) / (Math.max(7, mbnativeadvanced7.length))}`;
      }
      textZ.set(`${member1}`, (mbnativeadvanced7 == String.fromCharCode(68,0) ? (member1 ? 5 : 1) : mbnativeadvanced7.length));
   }
   let bodanF = configJ.size <= 9022646;
   do {
      configJ.set(`${member1}`, (textZ.size >> (Math.min(1, Math.abs((member1 ? 5 : 1))))));
      if (bodanF) {
         break;
      }
   } while ((4 > (configJ.size + 5)) && bodanF);
   while ((relatedh.size & 4) <= 2) {
      matcht += "3";
      break;
   }
    return formattedNumber;
  };

  
  const resendOTP = () => {
       let updatesS: Map<any, any> = new Map([[String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,95,57,95,54,0),185], [String.fromCharCode(99,95,52,52,95,99,97,112,116,105,111,110,0),953], [String.fromCharCode(102,105,110,100,110,101,97,114,109,118,95,116,95,52,54,0),736]]);
    let alertw = 3;
    let gemfile7 = 1.0;
    let switch_jil = String.fromCharCode(121,95,55,48,95,105,97,100,115,116,120,0);
    let termsb = String.fromCharCode(115,117,110,115,101,116,95,50,95,57,52,0);
    let source3 = String.fromCharCode(119,116,118,102,105,108,101,95,97,95,55,55,0);
    let storez = 4.0;
    let commonh: Array<any> = [999, 486];
    let spec3 = String.fromCharCode(108,95,50,49,95,115,99,104,101,109,97,0);
    let clearj = 1.0;
    let time_4F = String.fromCharCode(97,95,55,53,95,115,112,97,114,107,115,0);
    let lnewinterstitialt = String.fromCharCode(119,95,52,49,0);
    let chinaP = String.fromCharCode(112,97,114,99,111,114,95,52,95,56,56,0);
    let chartm = 2.0;
    let nextt: Map<any, any> = new Map([[String.fromCharCode(98,108,117,114,95,120,95,54,54,0),String.fromCharCode(103,97,109,117,116,115,95,55,95,49,48,48,0)], [String.fromCharCode(99,109,115,103,95,98,95,53,55,0),String.fromCharCode(104,95,52,52,95,100,117,112,115,0)], [String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,101,95,54,48,0),String.fromCharCode(115,116,114,105,110,103,105,102,121,95,100,95,49,50,0)]]);
      alertw <<= Math.min(Math.abs(alertw / 1), 3);
      commonh.push(3 >> (Math.min(Math.abs(parseInt(`${gemfile7}`)), 3)));
      alertw += 1 - termsb.length;
      updatesS.set(time_4F, commonh.length << (Math.min(Math.abs(3), 1)));

    setResend(false);

   while (chinaP.length < parseInt(`${storez}`)) {
       let resend2 = 5.0;
         resend2 += parseFloat(`${2 % (Math.max(6, parseInt(`${resend2}`)))}`);
      let logouto = resend2 <= 8044334.0;
      do {
          let bodan0: Map<any, any> = new Map([[String.fromCharCode(103,95,56,53,95,99,112,120,0),266], [String.fromCharCode(100,105,118,105,100,101,95,54,95,54,50,0),651], [String.fromCharCode(114,116,99,95,112,95,56,55,0),824]]);
          let entryU = String.fromCharCode(122,95,50,53,95,115,101,116,102,105,101,108,100,0);
          let predictionr: Map<any, any> = new Map([[String.fromCharCode(109,95,49,54,95,97,115,111,99,105,100,0),false ], [String.fromCharCode(111,114,97,110,103,101,95,115,95,54,51,0),false ], [String.fromCharCode(107,95,50,54,95,106,111,105,110,101,114,0),true ]]);
         resend2 += parseFloat(`${parseInt(`${resend2}`)}`);
         bodan0 = new Map([[`${predictionr.size}`, 1]]);
         entryU = `${entryU.length}`;
         predictionr = new Map([[`${bodan0.size}`, (entryU == String.fromCharCode(54,0) ? entryU.length : bodan0.size)]]);
         if (logouto) {
            break;
         }
      } while ((resend2 <= resend2) && logouto);
         resend2 -= parseFloat(`${2}`);
      chinaP += `${1 + chinaP.length}`;
      break;
   }
   for (let h = 0; h < 1; h++) {
      lnewinterstitialt = `${parseInt(`${clearj}`) * 2}`;
   }
   for (let x = 0; x < 1; x++) {
      chinaP += `${chinaP.length * source3.length}`;
   }
   for (let u = 0; u < 3; u++) {
      clearj -= parseInt(`${clearj}`) - 1;
   }

    ttTramini.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

   while ((switch_jil.length + 4) < 3 && 1 < (commonh.length + 4)) {
      switch_jil += `${alertw}`;
      break;
   }
   if (chinaP.length <= termsb.length) {
      chinaP += `${time_4F.length}`;
   }
      commonh = [termsb.length | 2];
   let anytimeY = 7892968 >= source3.length;
   do {
       let backwardq: Array<any> = [906, 263, 334];
       let ajaxo = String.fromCharCode(99,111,109,112,105,108,101,114,95,55,95,57,56,0);
       let page7 = 0;
       let selectiony = 4;
       let sportV = String.fromCharCode(109,97,112,112,101,100,95,121,95,51,54,0);
          let mbjscommong = String.fromCharCode(122,95,52,54,95,98,121,116,101,105,110,0);
          let promotionZ = 2.0;
          let const_al = 5.0;
         page7 <<= Math.min(2, Math.abs(page7 / 2));
         mbjscommong += "2";
         promotionZ += mbjscommong.length;
         const_al /= Math.max(4, mbjscommong.length << (Math.min(5, Math.abs(parseInt(`${const_al}`)))));
         ajaxo += `${selectiony}`;
      while (ajaxo.length == sportV.length) {
         ajaxo = `${2 % (Math.max(1, page7))}`;
         break;
      }
       let reactnativejsk = String.fromCharCode(107,95,54,48,95,108,111,99,107,97,98,108,101,0);
       let zhuboX = String.fromCharCode(102,95,51,50,95,112,114,111,100,117,99,116,115,0);
      for (let i = 0; i < 3; i++) {
          let downloadedZ = false;
          let manifestT = String.fromCharCode(108,105,115,116,101,110,95,105,95,52,51,0);
         zhuboX = `${((downloadedZ ? 2 : 1) % 1)}`;
         downloadedZ = manifestT == manifestT;
      }
         backwardq = [3 << (Math.min(5, Math.abs(selectiony)))];
         zhuboX += `${3 << (Math.min(1, Math.abs(selectiony)))}`;
         sportV += `${page7}`;
      let yellowP = String.fromCharCode(109,110,104,117,97,0) == zhuboX;
      do {
         zhuboX += `${selectiony}`;
         if (yellowP) {
            break;
         }
      } while ((reactnativejsk.includes(`${zhuboX.length}`)) && yellowP);
      while (zhuboX.length == reactnativejsk.length) {
          let nativeexI = 3;
          let modelsl = String.fromCharCode(110,101,97,114,101,114,95,101,95,55,53,0);
          let white_ = false;
         reactnativejsk = `${backwardq.length}`;
         nativeexI ^= 3;
         modelsl = `${1 | modelsl.length}`;
         white_ = !white_;
         break;
      }
          let downloadery = 1.0;
         selectiony |= 3;
         downloadery /= Math.max(2, parseFloat(`${parseInt(`${downloadery}`)}`));
         backwardq.push((String.fromCharCode(56,0) == ajaxo ? backwardq.length : ajaxo.length));
      while ((5 << (Math.min(3, reactnativejsk.length))) == 5) {
          let statsQ: Array<any> = [340, 301, 542];
          let networkH = 3.0;
         reactnativejsk = `${zhuboX.length}`;
         statsQ.push(statsQ.length % (Math.max(2, 7)));
         networkH -= parseInt(`${networkH}`);
         break;
      }
         page7 ^= page7 << (Math.min(1, Math.abs(2)));
          let leftR = 3;
         ajaxo = `${reactnativejsk.length / 3}`;
         leftR &= 1 + leftR;
      source3 = `${switch_jil.length}`;
      if (anytimeY) {
         break;
      }
   } while ((source3 != String.fromCharCode(70,0) && spec3.length < 4) && anytimeY);
      setOtpTextInput([]);

   while (1 == lnewinterstitialt.length) {
      commonh.push(updatesS.size);
      break;
   }
       let yellow6 = 2.0;
       let klevins = false;
      for (let i = 0; i < 2; i++) {
         yellow6 += ((klevins ? 2 : 1) * parseInt(`${yellow6}`));
      }
         klevins = 46.82 <= yellow6;
      for (let p = 0; p < 3; p++) {
         yellow6 -= 1 ^ parseInt(`${yellow6}`);
      }
          let previewo = String.fromCharCode(118,95,56,51,95,114,101,118,105,111,117,115,0);
         yellow6 += (previewo.length + (klevins ? 5 : 2));
      if (klevins) {
         klevins = !klevins;
      }
         yellow6 /= Math.max(((klevins ? 3 : 1) >> (Math.min(Math.abs(parseInt(`${yellow6}`)), 4))), 2);
      commonh.push((String.fromCharCode(119,0) == termsb ? termsb.length : parseInt(`${clearj}`)));
       let b_managerN: Map<any, any> = new Map([[String.fromCharCode(112,112,107,104,95,97,95,50,48,0),699], [String.fromCharCode(106,95,54,57,95,115,99,97,110,110,101,114,0),858]]);
       let vertical5 = String.fromCharCode(113,95,51,52,95,102,108,105,103,104,116,0);
          let castingi = 5;
          let temperature_ = false;
          let appsP = 0.0;
         b_managerN.set(`${temperature_}`, (b_managerN.size | (temperature_ ? 2 : 3)));
         castingi += castingi ^ 3;
         appsP /= Math.max(3, parseFloat(`${1}`));
          let expandA = String.fromCharCode(117,95,53,49,95,99,97,115,116,0);
          let basketballB: Map<any, any> = new Map([[String.fromCharCode(101,95,53,51,95,112,105,120,99,116,120,0),String.fromCharCode(109,95,52,49,95,103,101,111,108,111,99,97,116,105,111,110,0)], [String.fromCharCode(116,105,101,114,95,106,95,57,48,0),String.fromCharCode(112,114,101,118,105,101,119,95,101,95,56,51,0)]]);
         vertical5 += `${(String.fromCharCode(72,0) == expandA ? expandA.length : basketballB.size)}`;
         vertical5 = `${(String.fromCharCode(108,0) == vertical5 ? b_managerN.size : vertical5.length)}`;
          let ajaxL = 3;
          let sportB = 3;
         vertical5 = `${ajaxL + 3}`;
         ajaxL |= sportB % (Math.max(4, sportB));
       let appsw = 0.0;
          let changeQ = 0.0;
          let thumbnaill = true;
         appsw *= (parseFloat(`${String.fromCharCode(110,0) == vertical5 ? parseInt(`${appsw}`) : vertical5.length}`));
         changeQ *= (parseInt(`${changeQ}`) | (thumbnaill ? 4 : 3));
         thumbnaill = !thumbnaill;
      chinaP += `${(time_4F == String.fromCharCode(122,0) ? chinaP.length : time_4F.length)}`;
   if (!source3.includes(`${alertw}`)) {
      source3 += "3";
   }
      setOtp('      ');

      lnewinterstitialt = `${lnewinterstitialt.length}`;
   for (let n = 0; n < 1; n++) {
      chartm -= spec3.length / 3;
   }
      chinaP += `${lnewinterstitialt.length}`;
   while (5.29 > gemfile7) {
      gemfile7 -= time_4F.length;
      break;
   }
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
      result = await ttTramini.signinupUser({
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

    const user = ttFast.fromJson(resultData);

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

      
      tt_humidity_guide.userCenterLoginSuccessTimesAnalytics();
      ttDownTick.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        tt_humidity_guide.userCenterVipLoginSuccessTimesAnalytics();
      }
      
    }
  }

  return (
    <View>
      {/* <Text style={styles.title}>输入邮箱验证码</Text> */}
      <Text style={styles.title}>{email ? '输入邮箱验证码' : '输入OTP验证码'}</Text>

      <Text style={styles.description}>
        验证码已发送至{' '}
        {/* <Text style={styles.hyperlink}>
          {email ?? phone}
        </Text>{' '} */}
        <Text style={styles.hyperlink}>
          {email ? email : formatPhoneNumber(phone)}
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
            source={require('@static/images/invite/newsSendSlider.png')}
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

const createStyles = ({ colors, dark }: any = {}) => StyleSheet.create({
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
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
    color: colors.text,
    width: 48,
    height: 48,
    borderRadius: 6,
    fontSize: 24,
  },
  inputInvalidStyle: {
    textAlign: 'center',
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
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
    color: colors.text,
  },
  title: {
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    color: colors?.text,
  },
  hyperlink: {
    fontWeight: '600',
    fontSize: 15,
    paddingLeft: 10,
    textAlign: 'center',
    color: colors?.primary,
    marginTop: 50
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
    borderColor: colors.primary,
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
