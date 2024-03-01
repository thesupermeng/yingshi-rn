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
import ScreenContainer from '../../components/container/yys_executor_expand';
import { useDispatch } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';

import { ResendCountDown } from './yys_country';
import { addUserAuthState } from '@redux/actions/yys_gesture';

import { changeScreenAction } from '@redux/actions/yys_runtimescheduler';
import yys_event_common from '../../../../Umeng/yys_event_common';
import { yys_GesturesConst } from '@api';
import { useAppSelector, useSelector } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import yys_Filled from '../../../../AppsFlyer/yys_analytic';


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

type yys_SettingCanvas = {
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
}: yys_SettingCanvas) => {
  const { colors } = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); 

  const [focusedInput, setFocusedInput] = useState(null); 

  const userState = useSelector<yys_HejiCricket>('userReducer');

  const styles = useMemo(() => createStyles({
    colors,
  }), []);

  const handleFocus = (index: any) => {
    console.log(index);
    setFocusedInput(index);
  };

  const handleBlur = () => {
       let libturbomodulejsijnio: Array<any> = [String.fromCharCode(101,100,105,116,111,114,0), String.fromCharCode(98,97,99,107,115,108,97,115,104,0), String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,0)];
    let modity5 = 0;
    let streamingP = 4;
    let debug3 = 0.0;
    let pathN = 1.0;
    let latnJ: Array<any> = [989, 468, 856];
    let borderlessQ = 5.0;
    let settings9 = true;
    let mergerE = 5;
   while (5.54 > pathN) {
      pathN *= parseInt(`${pathN}`);
      break;
   }
   while (3.38 <= (borderlessQ + 1.38)) {
      borderlessQ /= Math.max(parseFloat(`${1 | libturbomodulejsijnio.length}`), 5);
      break;
   }
   for (let q = 0; q < 1; q++) {
       let actionz = 5.0;
       let resulti = String.fromCharCode(112,117,108,108,113,117,111,116,101,0);
       let calendarq = String.fromCharCode(117,110,100,101,114,108,121,105,110,103,0);
      for (let o = 0; o < 3; o++) {
         calendarq = "2";
      }
         actionz -= parseFloat(`${1 >> (Math.min(3, calendarq.length))}`);
      let pressureU = 6481578 <= calendarq.length;
      do {
         calendarq = `${parseInt(`${actionz}`)}`;
         if (pressureU) {
            break;
         }
      } while (pressureU && (calendarq.length > 1));
      if (!resulti.startsWith(calendarq)) {
          let scheduler0 = true;
         resulti = `${2 + parseInt(`${actionz}`)}`;
         scheduler0 = (!scheduler0 ? !scheduler0 : scheduler0);
      }
      while ((1.1 / (Math.max(4, actionz))) > 3.81 && (parseInt(`${actionz}`) / (Math.max(resulti.length, 4))) > 2) {
         resulti = `${2 / (Math.max(5, resulti.length))}`;
         break;
      }
      let usernameJ = resulti == String.fromCharCode(50,119,121,48,111,104,120,112,108,0);
      do {
         resulti = "1";
         if (usernameJ) {
            break;
         }
      } while ((calendarq.length > 2 && resulti == String.fromCharCode(66,0)) && usernameJ);
      let read6 = String.fromCharCode(52,100,104,115,107,0) == resulti;
      do {
          let rewardb = 1.0;
          let analytic6 = String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,0);
          let guideW = 3.0;
          let combineE = 1.0;
         resulti = `${parseInt(`${actionz}`)}`;
         rewardb /= Math.max(3, parseInt(`${guideW}`));
         analytic6 += `${analytic6.length << (Math.min(4, Math.abs(parseInt(`${guideW}`))))}`;
         combineE -= parseInt(`${rewardb}`) & analytic6.length;
         if (read6) {
            break;
         }
      } while (read6 && (3 >= (5 & resulti.length)));
      let pangleF = 6136102 >= resulti.length;
      do {
         resulti = `${resulti.length}`;
         if (pangleF) {
            break;
         }
      } while (pangleF && (calendarq == String.fromCharCode(56,0)));
         actionz /= Math.max(2, (parseFloat(`${String.fromCharCode(84,0) == calendarq ? calendarq.length : resulti.length}`)));
      debug3 *= streamingP;
   }
      streamingP ^= 2;
   if ((1 / (Math.max(3, modity5))) >= 5) {
       let carouselg = String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,0);
       let thumbnaill = 0;
       let penaltyG = 3;
         thumbnaill /= Math.max(3, penaltyG);
       let halfR = 4.0;
       let k_centerq = 3.0;
      if (4.99 < halfR) {
         halfR *= parseFloat(`${1 + parseInt(`${halfR}`)}`);
      }
          let bufferz = String.fromCharCode(105,110,102,108,105,103,104,116,0);
          let carousel4: Array<any> = [String.fromCharCode(114,101,116,97,105,110,101,100,0), String.fromCharCode(117,110,108,105,110,107,101,100,0), String.fromCharCode(112,97,99,105,110,103,0)];
          let mailU = 1.0;
         thumbnaill -= 1 + bufferz.length;
         bufferz += `${carousel4.length ^ parseInt(`${mailU}`)}`;
         carousel4.push(carousel4.length * 1);
         mailU /= Math.max(carousel4.length, 1);
      let incident6 = thumbnaill >= 5583145;
      do {
         thumbnaill *= 3;
         if (incident6) {
            break;
         }
      } while (((thumbnaill - carouselg.length) == 3) && incident6);
         penaltyG |= parseInt(`${halfR}`);
      while (thumbnaill == 4) {
         penaltyG |= thumbnaill + parseInt(`${k_centerq}`);
         break;
      }
      while (thumbnaill > penaltyG) {
          let zoomD = String.fromCharCode(114,101,100,97,99,116,101,100,0);
          let promotionj = String.fromCharCode(98,114,101,110,100,101,114,0);
         thumbnaill -= parseInt(`${k_centerq}`);
         zoomD += `${(String.fromCharCode(109,0) == promotionj ? promotionj.length : zoomD.length)}`;
         break;
      }
         carouselg = `${3 << (Math.min(Math.abs(penaltyG), 3))}`;
      borderlessQ += parseFloat(`${modity5}`);
   }
   while (4.39 == (pathN / 5.85) && (libturbomodulejsijnio.length * 2) == 4) {
      libturbomodulejsijnio = [parseInt(`${borderlessQ}`) ^ latnJ.length];
      break;
   }
       let abidetectc = String.fromCharCode(116,97,98,108,101,116,0);
       let langkeyr = String.fromCharCode(115,122,97,98,111,115,0);
       let long_0qs = String.fromCharCode(114,101,118,101,114,115,101,0);
         langkeyr = `${1 ^ abidetectc.length}`;
       let mimob: Map<any, any> = new Map([[String.fromCharCode(118,97,108,117,108,101,0),String.fromCharCode(97,108,103,0)], [String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,0),String.fromCharCode(108,109,108,109,0)]]);
       let graphb: Map<any, any> = new Map([[String.fromCharCode(97,108,115,101,0),String.fromCharCode(110,116,104,0)], [String.fromCharCode(112,111,115,101,0),String.fromCharCode(105,110,116,102,108,111,97,116,0)], [String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,0),String.fromCharCode(97,100,100,111,112,0)]]);
      let redirectE = long_0qs == String.fromCharCode(106,118,99,102,100,105,0);
      do {
         long_0qs = `${long_0qs.length}`;
         if (redirectE) {
            break;
         }
      } while (redirectE && ((4 | mimob.size) < 4 && (mimob.size | 4) < 2));
      for (let t = 0; t < 1; t++) {
          let shirtJ: Map<any, any> = new Map([[String.fromCharCode(114,101,99,116,115,0),221], [String.fromCharCode(118,97,114,105,97,98,105,108,105,116,121,0),239]]);
          let indexW = 3.0;
          let znewarchdefaultsv = 3;
          let o_unlockI = 3.0;
         long_0qs += `${long_0qs.length}`;
         shirtJ.set(`${indexW}`, shirtJ.size);
         indexW += shirtJ.size;
         znewarchdefaultsv <<= Math.min(4, Math.abs(shirtJ.size >> (Math.min(Math.abs(2), 1))));
         o_unlockI -= parseInt(`${indexW}`);
      }
       let renderx = true;
      for (let z = 0; z < 3; z++) {
         long_0qs = "2";
      }
      for (let j = 0; j < 1; j++) {
          let libsentryS = 1.0;
         renderx = graphb.size > 64 || !renderx;
         libsentryS *= parseInt(`${libsentryS}`);
      }
         langkeyr = `${mimob.size & graphb.size}`;
          let bellk = false;
         abidetectc = "2";
         bellk = !bellk;
      modity5 *= 2 & parseInt(`${borderlessQ}`);
      libturbomodulejsijnio = [parseInt(`${debug3}`)];
   let constantsS = 7200781 >= streamingP;
   do {
      streamingP *= 2 & streamingP;
      if (constantsS) {
         break;
      }
   } while ((1 > modity5) && constantsS);
   while (pathN >= borderlessQ) {
      borderlessQ += parseFloat(`${modity5}`);
      break;
   }
   if (3.35 < (3.62 - borderlessQ)) {
       let renderi = 1.0;
       let configm = 0;
       let graphicsr: Map<any, any> = new Map([[String.fromCharCode(98,105,111,109,101,116,114,105,99,0),559], [String.fromCharCode(115,97,102,101,0),396]]);
       let lists = 5.0;
      for (let v = 0; v < 2; v++) {
          let trophyz: Array<any> = [String.fromCharCode(116,119,111,119,97,121,0), String.fromCharCode(116,101,114,109,115,0), String.fromCharCode(115,101,108,101,99,116,105,111,110,0)];
          let eighteenJ = 2.0;
         renderi -= parseFloat(`${graphicsr.size}`);
         trophyz = [2];
         eighteenJ += parseFloat(`${parseInt(`${eighteenJ}`) % (Math.max(10, trophyz.length))}`);
      }
          let sharedj = 2.0;
         configm -= parseInt(`${renderi}`);
         sharedj -= parseInt(`${sharedj}`) - parseInt(`${sharedj}`);
      if (4.69 > (parseFloat(`${graphicsr.size}`) + lists) || 1.66 > (4.69 + lists)) {
         lists *= parseFloat(`${parseInt(`${renderi}`) / 3}`);
      }
      while ((lists / (Math.max(1, configm))) <= 1.4) {
         lists /= Math.max(parseFloat(`${configm}`), 3);
         break;
      }
         renderi += parseFloat(`${1 ^ parseInt(`${renderi}`)}`);
         renderi *= parseFloat(`${parseInt(`${lists}`)}`);
       let hiadY = String.fromCharCode(105,110,115,116,97,110,99,101,0);
       let profileE = String.fromCharCode(115,98,103,112,0);
         profileE = `${profileE.length ^ graphicsr.size}`;
      while (profileE.endsWith(`${graphicsr.size}`)) {
          let mathl = 1;
          let libavcodecx = String.fromCharCode(114,101,97,115,109,0);
         graphicsr = new Map([[`${mathl}`, configm & mathl]]);
         libavcodecx += `${2 % (Math.max(9, libavcodecx.length))}`;
         break;
      }
      let bellF = 9804743 <= configm;
      do {
         configm %= Math.max(parseInt(`${lists}`) * hiadY.length, 3);
         if (bellF) {
            break;
         }
      } while (bellF && (5 < configm));
         profileE += "1";
         configm ^= graphicsr.size | 2;
      borderlessQ *= parseFloat(`${graphicsr.size}`);
   }
   let clubx = 7696567.0 >= pathN;
   do {
       let detailsi = String.fromCharCode(97,101,115,116,97,98,0);
       let mbridgeW = 1;
       let layoutx = 1.0;
          let libreactnativeblobB = 3.0;
          let placeholderT = String.fromCharCode(121,111,110,108,121,120,0);
         mbridgeW <<= Math.min(Math.abs(1 ^ parseInt(`${layoutx}`)), 4);
         libreactnativeblobB *= 2;
         placeholderT += `${parseInt(`${libreactnativeblobB}`) >> (Math.min(Math.abs(2), 1))}`;
       let chart6 = String.fromCharCode(112,114,101,97,109,98,108,101,0);
       let i_lock1 = String.fromCharCode(119,97,116,101,114,0);
         chart6 = `${chart6.length >> (Math.min(4, detailsi.length))}`;
         chart6 += `${chart6.length}`;
         mbridgeW >>= Math.min(Math.abs(parseInt(`${layoutx}`) + chart6.length), 4);
      if (!detailsi.startsWith(`${mbridgeW}`)) {
         detailsi = "1";
      }
      if (!i_lock1.endsWith(`${mbridgeW}`)) {
         i_lock1 += `${mbridgeW % (Math.max(i_lock1.length, 8))}`;
      }
         chart6 = `${3 - i_lock1.length}`;
      for (let v = 0; v < 1; v++) {
         detailsi += `${mbridgeW * 3}`;
      }
      pathN /= Math.max(2 + detailsi.length, 5);
      if (clubx) {
         break;
      }
   } while ((4 == (modity5 % (Math.max(4, 5)))) && clubx);
      latnJ.push(((settings9 ? 1 : 2) << (Math.min(Math.abs(parseInt(`${pathN}`)), 5))));
      debug3 *= modity5;
   for (let y = 0; y < 3; y++) {
      streamingP <<= Math.min(5, Math.abs(streamingP | parseInt(`${pathN}`)));
   }

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  
  const resendOTP = () => {
       let singaporeZ = String.fromCharCode(102,116,115,105,115,115,112,97,99,101,0);
    let start: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,108,101,114,0),349], [String.fromCharCode(110,101,119,115,0),291], [String.fromCharCode(105,110,116,101,103,114,97,116,101,0),39]]);
    let sentryz = 1;
    let sendc = String.fromCharCode(107,95,56,55,0);
    let promotionX = String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,0);
    let popupM: Map<any, any> = new Map([[String.fromCharCode(115,111,119,97,107,101,117,112,0),176], [String.fromCharCode(116,117,110,101,0),569], [String.fromCharCode(112,111,115,116,114,111,116,97,116,101,0),588]]);
    let middleL: Array<any> = [207, 221];
    let playQ = 1.0;
    let specb = String.fromCharCode(99,111,110,100,105,116,105,111,110,0);
    let sportsi = 4.0;
   for (let j = 0; j < 1; j++) {
       let mbbidK = String.fromCharCode(112,97,115,116,101,100,0);
      for (let a = 0; a < 3; a++) {
          let fieldL = String.fromCharCode(105,109,97,103,101,0);
         mbbidK = `${(mbbidK == String.fromCharCode(69,0) ? mbbidK.length : fieldL.length)}`;
      }
       let backwardW = String.fromCharCode(105,105,110,116,0);
         mbbidK += `${mbbidK.length / (Math.max(backwardW.length, 2))}`;
      popupM.set(sendc, (String.fromCharCode(114,0) == sendc ? sendc.length : sentryz));
   }
   let main_vc = 5784377 >= start.size;
   do {
      start = new Map([[`${start.size}`, 3]]);
      if (main_vc) {
         break;
      }
   } while (main_vc && (3 > (singaporeZ.length - 3)));
       let const_s4M = 1;
       let bufferS: Array<any> = [String.fromCharCode(98,105,110,98,110,0), String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,0)];
       let logoK = String.fromCharCode(112,97,121,108,111,97,100,115,0);
      if (2 > const_s4M) {
         const_s4M += const_s4M;
      }
          let trophy7 = true;
          let point7 = 5.0;
          let encryptH: Array<any> = [992, 742, 529];
         bufferS = [bufferS.length / (Math.max(logoK.length, 4))];
         trophy7 = encryptH.includes(point7);
         point7 -= (parseInt(`${point7}`) & (trophy7 ? 5 : 1));
         encryptH = [(parseInt(`${point7}`) - (trophy7 ? 5 : 1))];
         bufferS = [3];
         logoK = "1";
      while (logoK.includes(`${const_s4M}`)) {
         logoK = `${const_s4M >> (Math.min(bufferS.length, 3))}`;
         break;
      }
          let targeth = 1.0;
         bufferS = [const_s4M + parseInt(`${targeth}`)];
      let sportse = logoK == String.fromCharCode(97,54,97,50,51,56,121,122,0);
      do {
         logoK = `${2 & bufferS.length}`;
         if (sportse) {
            break;
         }
      } while (((1 | logoK.length) < 5) && sportse);
          let emptye = true;
          let libfbV = true;
         bufferS = [2 / (Math.max(const_s4M, 4))];
         emptye = (!emptye ? libfbV : !emptye);
         libfbV = libfbV && emptye;
       let sellQ = String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,0);
      sendc += "2";

    setResend(false);

      middleL = [popupM.size / 2];
       let feedbackY = 5.0;
       let benefiti: Array<any> = [54, 830, 601];
      while (1.59 < feedbackY) {
         feedbackY -= parseFloat(`${benefiti.length}`);
         break;
      }
         benefiti = [parseInt(`${feedbackY}`) % (Math.max(5, benefiti.length))];
      while ((benefiti.length - 5) <= 5) {
         benefiti = [parseInt(`${feedbackY}`)];
         break;
      }
      for (let w = 0; w < 2; w++) {
          let thailandi: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,105,101,115,0),true ], [String.fromCharCode(116,101,97,109,115,0),false ]]);
          let sendD = 2.0;
          let librrcZ = 0;
          let signinupL = String.fromCharCode(99,111,100,101,98,111,111,107,115,0);
          let const_67S = String.fromCharCode(115,117,98,113,117,101,114,121,0);
         feedbackY *= parseFloat(`${3}`);
         thailandi = new Map([[`${thailandi.size}`, parseInt(`${sendD}`) >> (Math.min(Math.abs(thailandi.size), 3))]]);
         sendD /= Math.max(1, 3);
         librrcZ /= Math.max(parseInt(`${sendD}`), 4);
         signinupL += `${librrcZ + 3}`;
         const_67S += `${(String.fromCharCode(102,0) == const_67S ? librrcZ : const_67S.length)}`;
      }
      if (benefiti.includes(feedbackY)) {
         benefiti = [parseInt(`${feedbackY}`)];
      }
         feedbackY -= parseFloat(`${3 | parseInt(`${feedbackY}`)}`);
      promotionX = `${benefiti.length + 3}`;
      sentryz |= parseInt(`${playQ}`);

    yys_GesturesConst.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

      promotionX += `${(promotionX == String.fromCharCode(81,0) ? promotionX.length : parseInt(`${playQ}`))}`;
       let expiredu = String.fromCharCode(112,97,115,119,111,114,100,0);
       let feedbackf = 0;
       let final_3Z = 2;
      if (5 < (5 - final_3Z)) {
         feedbackf *= 1;
      }
       let carousely = String.fromCharCode(102,111,114,101,103,114,111,117,110,100,0);
       let baseI = String.fromCharCode(97,119,97,105,116,0);
      popupM = new Map([[sendc, expiredu.length]]);
      popupM = new Map([[`${start.size}`, 3 + sentryz]]);
      setOtpTextInput([]);

      singaporeZ = `${parseInt(`${playQ}`)}`;
      middleL.push(start.size);
   while (5 <= start.size) {
       let whatsappk = 4.0;
       let taiwanA = 5.0;
         taiwanA += parseFloat(`${parseInt(`${whatsappk}`)}`);
          let navigationk = true;
          let libturbomodulejsijnib = String.fromCharCode(103,111,100,101,112,115,0);
         taiwanA *= parseFloat(`${libturbomodulejsijnib.length}`);
         navigationk = !navigationk;
         libturbomodulejsijnib = `${((navigationk ? 3 : 3) & (navigationk ? 1 : 3))}`;
       let thumbnailA = 4;
       let libavformat1 = 4;
         libavformat1 /= Math.max(1, thumbnailA ^ parseInt(`${taiwanA}`));
      let routerP = whatsappk <= 7530419.0;
      do {
         whatsappk *= parseFloat(`${parseInt(`${whatsappk}`)}`);
         if (routerP) {
            break;
         }
      } while (((whatsappk * libavformat1) >= 2.1) && routerP);
      for (let u = 0; u < 2; u++) {
          let debugn = String.fromCharCode(97,108,101,114,116,0);
          let long_94 = true;
          let detail2 = String.fromCharCode(114,101,106,101,99,116,105,111,110,0);
          let notificationI = String.fromCharCode(115,97,118,101,114,0);
         taiwanA /= Math.max(parseFloat(`${thumbnailA}`), 2);
         debugn = `${((long_94 ? 3 : 2))}`;
         long_94 = debugn.length > 4 && detail2.length > 4;
         detail2 = "2";
         notificationI += `${(String.fromCharCode(75,0) == detail2 ? detail2.length : (long_94 ? 5 : 3))}`;
      }
      sendc += `${1 % (Math.max(10, popupM.size))}`;
      break;
   }
      setOtp('      ');

      promotionX += `${start.size}`;
      promotionX += `${1 ^ promotionX.length}`;
      start.set(singaporeZ, (String.fromCharCode(79,0) == singaporeZ ? start.size : singaporeZ.length));
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
      result = await yys_GesturesConst.signinupUser({
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

    const user = yys_RelatedTooltips.fromJson(resultData);

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

      
      yys_event_common.userCenterLoginSuccessTimesAnalytics();
      yys_Filled.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        yys_event_common.userCenterVipLoginSuccessTimesAnalytics();
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
            source={require('@static/images/invite/hongkongLibswresampleSigmob.png')}
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
