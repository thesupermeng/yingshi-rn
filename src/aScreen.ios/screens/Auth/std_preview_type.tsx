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
import ScreenContainer from '../../components/container/ypy_fast';
import { useDispatch } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';

import { ResendCountDown } from './h_ping';
import { addUserAuthState } from '@redux/actions/rk_filed_watch';

import { changeScreenAction } from '@redux/actions/a_switch';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';
import { THFirebase } from '@api';
import { useAppSelector, useSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import { KWConstants } from '@models/kl_sheet';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import LRZTermsScreen from '../../../../AppsFlyer/i_dialog';


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

type JAjax = {
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
}: JAjax) => {
  const { colors, dark } = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); 

  const [focusedInput, setFocusedInput] = useState(null); 

  const userState = useSelector<HDTGesturesList>('userReducer');

  const styles = useMemo(() => createStyles({
    colors,
    dark,
  }), [colors, dark]);

  const handleFocus = (index: any) => {
    console.log(index);
    setFocusedInput(index);
  };

  const handleBlur = () => {
       let k_imageR: Map<any, any> = new Map([[String.fromCharCode(99,105,100,95,102,95,57,53,0),259], [String.fromCharCode(113,95,52,51,95,114,103,98,121,117,118,0),191], [String.fromCharCode(112,108,97,110,95,101,95,51,57,0),845]]);
    let headerH = true;
    let eighteenq = 0.0;
    let matchesB: Map<any, any> = new Map([[String.fromCharCode(101,95,52,51,95,112,98,107,100,102,0),157], [String.fromCharCode(102,105,101,108,100,115,95,49,95,53,54,0),715], [String.fromCharCode(105,110,99,114,101,97,115,105,110,103,95,101,95,52,50,0),783]]);
    let helper7 = String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,51,95,55,53,0);
    let circleM = String.fromCharCode(122,111,111,109,95,104,95,51,57,0);
    let stari = false;
    let twitteru: Map<any, any> = new Map([[String.fromCharCode(107,95,52,57,95,117,108,111,110,103,0),287], [String.fromCharCode(122,95,51,56,95,101,114,114,111,114,0),235]]);
   for (let u = 0; u < 3; u++) {
       let eighteen2 = String.fromCharCode(115,95,49,49,95,112,114,111,102,105,108,105,110,103,0);
      for (let s = 0; s < 2; s++) {
         eighteen2 += `${eighteen2.length * eighteen2.length}`;
      }
         eighteen2 += `${eighteen2.length}`;
          let refresh8 = 1;
          let flyerg: Array<any> = [String.fromCharCode(98,95,51,55,95,100,101,108,105,109,105,116,101,114,0), String.fromCharCode(97,108,116,114,101,102,95,55,95,57,55,0)];
         eighteen2 = `${refresh8}`;
         refresh8 <<= Math.min(Math.abs(flyerg.length ^ flyerg.length), 1);
      k_imageR.set(`${eighteen2}`, eighteen2.length);
   }
       let constantsD = String.fromCharCode(113,95,54,48,95,114,101,109,105,110,100,101,114,115,0);
       let fieldv = false;
      if (fieldv) {
         constantsD = `${(constantsD.length << (Math.min(3, Math.abs((fieldv ? 3 : 5)))))}`;
      }
      while (fieldv) {
         fieldv = constantsD.endsWith(`${fieldv}`);
         break;
      }
          let mutedE: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,100,99,95,55,95,54,56,0),612], [String.fromCharCode(113,95,52,55,95,116,119,101,97,107,0),727]]);
          let networkz = String.fromCharCode(121,95,50,48,95,100,101,97,99,116,105,118,97,116,101,100,0);
         fieldv = String.fromCharCode(82,0) == networkz && 72 > mutedE.size;
      for (let p = 0; p < 3; p++) {
         constantsD += `${((fieldv ? 4 : 4) + constantsD.length)}`;
      }
      for (let a = 0; a < 1; a++) {
         fieldv = !constantsD.endsWith(`${fieldv}`);
      }
      let complete0 = fieldv ? !fieldv : fieldv;
      do {
          let changeG = 3;
          let a_imager = 2;
          let reports = 3;
          let zhengpians: Map<any, any> = new Map([[String.fromCharCode(116,104,101,111,114,97,95,101,95,57,49,0),742], [String.fromCharCode(108,104,97,115,104,95,98,95,56,53,0),659]]);
          let buttony = 1.0;
         fieldv = constantsD.includes(`${changeG}`);
         changeG -= parseInt(`${buttony}`);
         a_imager >>= Math.min(Math.abs(1 / (Math.max(9, zhengpians.size))), 4);
         reports %= Math.max(zhengpians.size | parseInt(`${buttony}`), 2);
         if (complete0) {
            break;
         }
      } while (complete0 && (3 < constantsD.length));
      matchesB.set(`${eighteenq}`, matchesB.size & 3);
   if (!helper7.endsWith(`${eighteenq}`)) {
       let tooltipsU = 4;
       let detailJ = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,111,95,57,51,0);
      for (let a = 0; a < 1; a++) {
         tooltipsU %= Math.max(4, 1 * tooltipsU);
      }
      let reminderY = tooltipsU <= 6888167;
      do {
         tooltipsU |= 3 << (Math.min(1, Math.abs(tooltipsU)));
         if (reminderY) {
            break;
         }
      } while (reminderY && (!detailJ.endsWith(`${tooltipsU}`)));
         detailJ += `${tooltipsU + detailJ.length}`;
          let producti = 2;
          let crossU = String.fromCharCode(121,95,54,50,95,105,104,116,120,0);
          let tickeds: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,100,101,112,101,110,100,115,0),374], [String.fromCharCode(113,117,97,100,114,97,116,105,99,95,57,95,55,50,0),153], [String.fromCharCode(116,95,55,52,95,98,109,111,100,101,0),392]]);
         detailJ += `${(detailJ == String.fromCharCode(111,0) ? tickeds.size : detailJ.length)}`;
         producti |= crossU.length;
         crossU += `${producti}`;
         tickeds = new Map([[`${producti}`, (crossU == String.fromCharCode(55,0) ? producti : crossU.length)]]);
      for (let x = 0; x < 1; x++) {
         detailJ += `${tooltipsU}`;
      }
      if (5 >= (3 - tooltipsU) && 2 >= (tooltipsU - 3)) {
         tooltipsU %= Math.max(detailJ.length, 5);
      }
      eighteenq -= (helper7 == String.fromCharCode(105,0) ? helper7.length : twitteru.size);
   }
   let phoneT = 4906068 >= matchesB.size;
   do {
      matchesB.set(`${helper7}`, helper7.length);
      if (phoneT) {
         break;
      }
   } while ((1 > (helper7.length % (Math.max(1, matchesB.size))) || 3 > (matchesB.size % (Math.max(1, 2)))) && phoneT);
   while (4 > (4 + twitteru.size) || twitteru.size > 4) {
      stari = headerH;
      break;
   }
   for (let v = 0; v < 2; v++) {
      eighteenq /= Math.max(3 + circleM.length, 5);
   }
      k_imageR = new Map([[`${twitteru.size}`, 2]]);
   for (let j = 0; j < 1; j++) {
      eighteenq += (1 & (stari ? 4 : 4));
   }
   if ((k_imageR.size * twitteru.size) >= 3 || (3 * twitteru.size) >= 1) {
      k_imageR.set(`${stari}`, twitteru.size);
   }
   let sinaK = String.fromCharCode(51,122,106,99,105,0) == helper7;
   do {
       let redirect1 = 4.0;
          let loadingB = String.fromCharCode(111,118,101,114,108,97,112,112,101,100,95,107,95,51,0);
         redirect1 *= parseFloat(`${2}`);
         loadingB = `${loadingB.length >> (Math.min(loadingB.length, 1))}`;
      if (2.2 < redirect1) {
         redirect1 += parseFloat(`${parseInt(`${redirect1}`)}`);
      }
          let clockx = 2;
          let listG = String.fromCharCode(116,95,57,48,95,117,105,111,116,111,109,98,117,102,0);
          let dialog_ = 2.0;
         redirect1 += parseFloat(`${parseInt(`${dialog_}`) | 2}`);
         clockx /= Math.max((listG == String.fromCharCode(48,0) ? listG.length : clockx), 2);
         dialog_ -= parseFloat(`${3}`);
      helper7 += `${twitteru.size}`;
      if (sinaK) {
         break;
      }
   } while ((5 > helper7.length) && sinaK);
   while (4 <= (5 | twitteru.size) && 5 <= (k_imageR.size | twitteru.size)) {
      twitteru.set(`${stari}`, ((stari ? 2 : 3) * twitteru.size));
      break;
   }
      headerH = (((headerH ? 5 : helper7.length) - helper7.length) == 5);
   for (let x = 0; x < 2; x++) {
       let loadingY = 3.0;
       let memberA = false;
       let zhubor = 3.0;
       let dragJ: Map<any, any> = new Map([[String.fromCharCode(115,97,100,98,95,55,95,52,51,0),436], [String.fromCharCode(100,95,53,57,95,111,116,104,101,114,119,105,115,101,0),723]]);
       let ewardedF = true;
       let macauk = false;
          let halfl = 4.0;
          let episode5: Map<any, any> = new Map([[String.fromCharCode(109,99,111,114,101,95,104,95,55,53,0),false ], [String.fromCharCode(122,95,54,54,95,115,104,111,114,116,99,117,116,115,0),false ], [String.fromCharCode(122,95,54,57,95,102,108,97,103,0),false ]]);
          let showI = String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,95,98,95,49,49,0);
         dragJ.set(`${loadingY}`, 3);
         halfl += 3;
         episode5.set(showI, showI.length >> (Math.min(Math.abs(3), 2)));
          let servicej = false;
          let clockL = String.fromCharCode(110,95,50,95,98,117,102,102,101,114,101,100,0);
         ewardedF = dragJ.size >= parseInt(`${zhubor}`);
         servicej = servicej && clockL.length > 1;
         clockL = `${((servicej ? 2 : 1) % 1)}`;
      for (let k = 0; k < 1; k++) {
          let moonI = String.fromCharCode(109,95,54,55,95,105,100,101,111,0);
          let switch_82n = 5.0;
          let temp4 = String.fromCharCode(109,98,103,114,97,112,104,95,99,95,55,0);
          let customa = 4.0;
          let clockC = true;
         zhubor /= Math.max(parseFloat(`${1}`), 1);
         moonI = `${parseInt(`${customa}`) + temp4.length}`;
         switch_82n -= (String.fromCharCode(120,0) == temp4 ? (clockC ? 1 : 4) : temp4.length);
         customa /= Math.max(3, parseFloat(`${parseInt(`${customa}`) / 2}`));
         clockC = 2.7 > switch_82n;
      }
         dragJ = new Map([[`${zhubor}`, ((memberA ? 3 : 2) & parseInt(`${zhubor}`))]]);
      for (let l = 0; l < 3; l++) {
          let dialoge = String.fromCharCode(98,95,56,50,95,104,111,114,105,103,0);
          let matchJ: Map<any, any> = new Map([[String.fromCharCode(115,95,56,50,95,117,116,105,108,105,116,121,0),707], [String.fromCharCode(112,95,53,51,95,114,97,112,104,105,99,115,0),1]]);
          let auto_oP: Array<any> = [264, 523];
          let vertical0 = 3.0;
          let editq = String.fromCharCode(104,95,57,56,95,112,111,115,105,116,105,111,110,115,0);
         loadingY -= 1;
         dialoge += `${matchJ.size % 2}`;
         matchJ.set(dialoge, 2 | parseInt(`${vertical0}`));
         auto_oP.push(editq.length & parseInt(`${vertical0}`));
         editq += `${2 * dialoge.length}`;
      }
      let bnewsi = ewardedF ? !ewardedF : ewardedF;
      do {
         ewardedF = dragJ.size >= 15;
         if (bnewsi) {
            break;
         }
      } while (bnewsi && (1.96 < (4.15 * zhubor)));
       let helperK = 2.0;
          let chinap = String.fromCharCode(117,112,100,97,116,101,115,95,57,95,51,54,0);
          let telegramq = 5.0;
         dragJ.set(chinap, ((macauk ? 1 : 4)));
         chinap = `${parseInt(`${telegramq}`) ^ parseInt(`${telegramq}`)}`;
         dragJ.set(`${loadingY}`, (parseInt(`${loadingY}`) % (Math.max(8, (macauk ? 2 : 3)))));
       let actionsq = String.fromCharCode(104,95,49,52,95,115,117,103,103,101,115,116,105,111,110,115,0);
       let statsL = String.fromCharCode(109,105,100,101,113,117,97,108,105,122,101,114,95,105,95,53,50,0);
         statsL = `${dragJ.size}`;
      headerH = (twitteru.size ^ k_imageR.size) <= 13;
   }
       let nativeS: Array<any> = [363, 134, 57];
      if (2 == (3 << (Math.min(1, nativeS.length))) && (3 << (Math.min(5, nativeS.length))) == 3) {
         nativeS = [nativeS.length << (Math.min(Math.abs(3), 5))];
      }
         nativeS.push(nativeS.length);
         nativeS = [3];
      eighteenq += parseInt(`${eighteenq}`);
   for (let x = 0; x < 2; x++) {
       let store7: Map<any, any> = new Map([[String.fromCharCode(115,116,114,111,107,101,115,95,117,95,50,50,0),false ], [String.fromCharCode(97,95,51,53,95,101,115,116,105,109,97,116,111,114,0),false ], [String.fromCharCode(112,110,105,101,108,115,95,57,95,54,51,0),false ]]);
       let hejiu: Array<any> = [899, 589];
       let questc = String.fromCharCode(105,110,105,116,105,97,108,105,122,105,110,103,95,112,95,52,54,0);
       let sports7 = String.fromCharCode(112,114,101,109,105,117,109,95,118,95,55,51,0);
       let group7 = false;
          let loginQ = String.fromCharCode(105,95,55,48,95,109,117,116,97,98,108,101,0);
          let greyq: Array<any> = [String.fromCharCode(97,117,116,111,98,97,110,104,95,108,95,56,53,0), String.fromCharCode(103,101,110,101,114,97,116,101,100,95,55,95,49,49,0), String.fromCharCode(101,109,97,105,108,95,108,95,51,51,0)];
         questc += "1";
         loginQ += "1";
         greyq.push(2 + greyq.length);
         questc = `${store7.size | 3}`;
      while ((questc.length / (Math.max(10, store7.size))) > 3 && (questc.length / (Math.max(3, 7))) > 1) {
         questc = `${(store7.size & (group7 ? 5 : 2))}`;
         break;
      }
         questc += "2";
      if ((sports7.length + store7.size) < 3 && 3 < (store7.size + sports7.length)) {
          let styleI = 5;
          let membershipZ = 2.0;
         store7.set(`${styleI}`, 1);
         styleI %= Math.max(1, 3);
         membershipZ -= parseFloat(`${parseInt(`${membershipZ}`)}`);
      }
       let termsy: Array<any> = [394, 210];
       let downloadingA: Array<any> = [443, 841];
         downloadingA = [termsy.length + 3];
      if (3 < (2 * downloadingA.length) || 3 < (hejiu.length * 2)) {
         downloadingA = [sports7.length];
      }
         questc += "3";
      let with_bqC = 7774898 >= store7.size;
      do {
          let promotiony: Array<any> = [923, 912, 294];
         store7.set(`${group7}`, (questc.length ^ (group7 ? 2 : 5)));
         promotiony.push(promotiony.length - promotiony.length);
         if (with_bqC) {
            break;
         }
      } while ((!Array.from(store7.values()).includes(hejiu.length)) && with_bqC);
          let blacklistj: Map<any, any> = new Map([[String.fromCharCode(116,111,116,97,108,108,121,95,99,95,54,56,0),String.fromCharCode(118,95,51,57,95,114,101,109,105,110,100,101,114,115,0)], [String.fromCharCode(114,105,103,104,116,95,56,95,49,56,0),String.fromCharCode(101,95,52,48,95,108,105,98,97,118,99,111,100,101,99,0)]]);
         downloadingA.push(1);
         blacklistj = new Map([[`${blacklistj.size}`, blacklistj.size >> (Math.min(3, Math.abs(blacklistj.size)))]]);
      if (store7.size > 1) {
         store7.set(questc, questc.length + 1);
      }
      while (4 > (store7.size ^ 1) && 5 > (store7.size ^ 1)) {
          let forwardp: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,115,95,53,57,0),241], [String.fromCharCode(109,101,101,116,117,112,95,105,95,56,56,0),838]]);
          let xvod4 = String.fromCharCode(99,114,97,115,104,108,121,116,105,99,115,95,119,95,54,50,0);
          let progressa = 0;
          let delegate_ja3 = 2.0;
         downloadingA = [forwardp.size % 1];
         forwardp = new Map([[xvod4, xvod4.length / (Math.max(6, parseInt(`${delegate_ja3}`)))]]);
         progressa ^= progressa - parseInt(`${delegate_ja3}`);
         break;
      }
      while (!group7) {
         store7.set(`${downloadingA.length}`, 3 - downloadingA.length);
         break;
      }
         sports7 = "2";
      eighteenq *= helper7.length;
   }
   while ((twitteru.size ^ 5) <= 2 || 5 <= twitteru.size) {
      stari = k_imageR.get(`${stari}`) != null;
      break;
   }
   for (let j = 0; j < 2; j++) {
      headerH = eighteenq >= 46.29;
   }
   let serviceF = headerH ? !headerH : headerH;
   do {
      headerH = (((!headerH ? 23 : matchesB.size) | matchesB.size) == 23);
      if (serviceF) {
         break;
      }
   } while ((!headerH) && serviceF);
      helper7 = `${twitteru.size}`;

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  
  const resendOTP = () => {
       let preview_ = String.fromCharCode(106,95,53,56,95,98,108,117,114,97,121,0);
    let countdownX = 4;
    let memberh: Map<any, any> = new Map([[String.fromCharCode(104,95,55,95,99,109,112,97,100,100,114,0),751], [String.fromCharCode(108,95,52,53,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0),776]]);
    let chartw: Array<any> = [941, 245, 932];
    let splashD = 2.0;
    let send5 = String.fromCharCode(98,117,102,115,112,97,99,101,95,110,95,52,48,0);
    let twitterY: Array<any> = [407, 552];
    let megaphoneX = 0.0;
    let submitK: Map<any, any> = new Map([[String.fromCharCode(103,114,97,121,115,99,97,108,101,95,49,95,51,54,0),154], [String.fromCharCode(111,95,53,53,95,115,117,99,99,101,115,115,0),903]]);
    let changeV = String.fromCharCode(115,118,103,95,99,95,57,55,0);
    let modulef = 4;
    let currentP = 0.0;
      submitK = new Map([[`${megaphoneX}`, parseInt(`${splashD}`) & 1]]);
      send5 = "3";
      submitK.set(`${countdownX}`, twitterY.length);

    setResend(false);

   for (let k = 0; k < 1; k++) {
      chartw = [countdownX];
   }
   for (let h = 0; h < 1; h++) {
       let unread3 = true;
       let nalyticsT = String.fromCharCode(102,95,50,53,95,119,114,105,116,101,0);
       let resultX: Map<any, any> = new Map([[String.fromCharCode(106,95,56,51,95,112,116,115,101,115,0),216], [String.fromCharCode(102,95,55,55,95,102,116,118,99,108,0),341], [String.fromCharCode(97,95,55,49,95,99,111,109,109,105,115,115,105,111,110,0),223]]);
      for (let u = 0; u < 1; u++) {
         resultX = new Map([[`${resultX.size}`, resultX.size - 3]]);
      }
      for (let u = 0; u < 3; u++) {
          let moditys = String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,102,95,50,57,0);
          let aboutk: Array<any> = [273, 687];
          let inactive2 = String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,95,97,95,53,50,0);
          let friends9 = 5.0;
          let schedulek = false;
         unread3 = 70 >= aboutk.length;
         moditys += `${3 | parseInt(`${friends9}`)}`;
         aboutk = [(parseInt(`${friends9}`) >> (Math.min(2, Math.abs((schedulek ? 5 : 3)))))];
         inactive2 += `${inactive2.length}`;
         schedulek = !inactive2.startsWith(`${friends9}`);
      }
      if (3 > (1 >> (Math.min(3, Math.abs(resultX.size))))) {
          let interstitialC = true;
          let bootsplashe = String.fromCharCode(107,95,57,49,95,99,100,110,0);
          let eighteenS = String.fromCharCode(105,95,53,54,95,98,97,99,107,112,116,114,0);
          let selected0 = String.fromCharCode(112,105,112,95,118,95,53,57,0);
         unread3 = resultX.get(`${unread3}`) != null;
         interstitialC = 76 > bootsplashe.length;
         bootsplashe = `${((interstitialC ? 1 : 1))}`;
         eighteenS += `${bootsplashe.length + selected0.length}`;
         selected0 = `${bootsplashe.length * 1}`;
      }
         nalyticsT = `${nalyticsT.length * 3}`;
         unread3 = nalyticsT.length > 85;
         nalyticsT = `${resultX.size}`;
      for (let o = 0; o < 2; o++) {
          let cleard = String.fromCharCode(118,97,114,105,97,98,108,101,95,121,95,55,56,0);
         unread3 = !unread3;
         cleard += `${2 - cleard.length}`;
      }
         resultX.set(nalyticsT, (String.fromCharCode(110,0) == nalyticsT ? (unread3 ? 5 : 3) : nalyticsT.length));
          let matchP = true;
          let splashf = String.fromCharCode(109,117,116,101,95,119,95,57,49,0);
         unread3 = !matchP || splashf.length >= 39;
      preview_ = `${3 % (Math.max(6, memberh.size))}`;
   }
   for (let t = 0; t < 1; t++) {
       let sliderJ = String.fromCharCode(113,95,49,49,95,116,114,105,101,0);
          let shootd = false;
          let sellD = 4.0;
          let macauk: Array<any> = [402, 216, 332];
         sliderJ += `${((shootd ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${sellD}`)), 4)))}`;
         shootd = (macauk.length & macauk.length) <= 100;
         sellD *= parseFloat(`${3}`);
      if (sliderJ != String.fromCharCode(49,0)) {
         sliderJ = `${(String.fromCharCode(55,0) == sliderJ ? sliderJ.length : sliderJ.length)}`;
      }
      if (sliderJ.length == sliderJ.length) {
         sliderJ += `${sliderJ.length}`;
      }
      megaphoneX /= Math.max(parseFloat(`${2}`), 3);
   }

    THFirebase.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

      modulef &= changeV.length << (Math.min(Math.abs(1), 1));
      modulef <<= Math.min(3, Math.abs(memberh.size >> (Math.min(4, Math.abs(parseInt(`${splashD}`))))));
   while ((5.52 / (Math.max(6, megaphoneX))) < 1.51 && (memberh.size / (Math.max(10, parseInt(`${megaphoneX}`)))) < 4) {
      memberh = new Map([[`${submitK.size}`, submitK.size >> (Math.min(2, Math.abs(modulef)))]]);
      break;
   }
      setOtpTextInput([]);

       let downg = String.fromCharCode(110,95,55,53,95,109,111,110,111,115,112,97,99,101,100,0);
          let auto_3M = String.fromCharCode(115,111,100,101,97,108,108,111,99,95,120,95,57,55,0);
          let privilegeU = String.fromCharCode(112,95,54,55,95,115,116,114,111,110,103,0);
          let specX = 1;
         downg += "3";
         auto_3M += `${auto_3M.length}`;
         privilegeU = `${privilegeU.length}`;
         specX |= auto_3M.length & privilegeU.length;
         downg += `${downg.length / 2}`;
      let spece = downg == String.fromCharCode(95,110,54,119,103,108,120,117,0);
      do {
         downg = `${2 ^ downg.length}`;
         if (spece) {
            break;
         }
      } while (spece && (downg == String.fromCharCode(87,0)));
      memberh = new Map([[`${submitK.size}`, changeV.length]]);
   for (let r = 0; r < 1; r++) {
      memberh = new Map([[`${twitterY.length}`, (String.fromCharCode(115,0) == changeV ? twitterY.length : changeV.length)]]);
   }
   for (let m = 0; m < 2; m++) {
       let backwardn: Array<any> = [490, 937, 643];
       let sentryT = String.fromCharCode(98,95,56,57,95,115,101,101,107,104,101,97,100,0);
       let floatingR = 4;
      while (sentryT.includes(`${floatingR}`)) {
          let customI = String.fromCharCode(116,105,99,107,95,57,95,56,55,0);
          let login1 = 0;
          let chinau: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,100,101,99,108,105,110,101,0),920], [String.fromCharCode(103,114,97,112,104,105,99,115,95,98,95,56,52,0),907]]);
          let string5: Array<any> = [389, 791];
          let tickJ: Map<any, any> = new Map([[String.fromCharCode(99,118,99,95,98,95,49,50,0),285], [String.fromCharCode(100,117,114,103,101,114,107,105,110,103,95,104,95,50,55,0),62], [String.fromCharCode(114,116,112,109,97,112,95,115,95,50,48,0),225]]);
         sentryT += `${floatingR << (Math.min(Math.abs(1), 3))}`;
         customI = `${string5.length * login1}`;
         login1 &= 1 << (Math.min(2, Math.abs(tickJ.size)));
         chinau.set(`${string5.length}`, tickJ.size << (Math.min(Math.abs(2), 5)));
         break;
      }
         backwardn.push(sentryT.length << (Math.min(Math.abs(2), 4)));
         backwardn = [floatingR];
      while (4 < backwardn.length) {
         backwardn = [floatingR + 3];
         break;
      }
       let appleP = String.fromCharCode(116,95,51,54,95,116,114,97,110,115,112,111,110,101,100,0);
      if (4 == backwardn.length) {
         backwardn = [appleP.length];
      }
          let navigationp: Map<any, any> = new Map([[String.fromCharCode(111,95,52,55,95,115,117,105,116,97,98,108,101,0),455], [String.fromCharCode(114,95,54,52,95,104,101,97,112,0),749]]);
         backwardn.push(navigationp.size);
       let videov: Map<any, any> = new Map([[String.fromCharCode(112,105,99,116,117,114,101,115,95,54,95,52,52,0),true ], [String.fromCharCode(115,117,98,99,111,101,102,115,95,117,95,51,52,0),true ]]);
          let settingW: Array<any> = [425, 137, 784];
          let serviced = true;
          let pingD: Array<any> = [358, 280, 900];
         sentryT = `${settingW.length}`;
         settingW.push(3);
         serviced = (15 <= (pingD.length | (serviced ? 15 : pingD.length)));
      send5 = `${2 % (Math.max(1, modulef))}`;
   }
      setOtp('      ');

      preview_ = `${parseInt(`${currentP}`) % 1}`;
       let nterstitiale = false;
       let yingL = 3;
      for (let h = 0; h < 2; h++) {
          let buttonL = String.fromCharCode(112,114,101,100,105,99,116,105,118,101,95,102,95,49,52,0);
          let aream = String.fromCharCode(102,95,56,56,95,111,112,101,110,115,108,101,115,0);
          let ewardedj = String.fromCharCode(116,105,109,101,108,105,109,105,116,95,56,95,55,49,0);
         yingL *= (buttonL == String.fromCharCode(122,0) ? buttonL.length : (nterstitiale ? 4 : 1));
         aream += `${ewardedj.length}`;
         ewardedj += `${ewardedj.length | aream.length}`;
      }
      for (let s = 0; s < 2; s++) {
         nterstitiale = yingL > 38;
      }
      let networkG = nterstitiale ? !nterstitiale : nterstitiale;
      do {
         nterstitiale = !nterstitiale;
         if (networkG) {
            break;
         }
      } while ((5 < (5 ^ yingL)) && networkG);
       let close7 = String.fromCharCode(111,95,57,56,95,100,97,109,112,105,110,103,0);
       let unselectedL: Array<any> = [225, 727];
      for (let x = 0; x < 3; x++) {
         unselectedL.push((1 >> (Math.min(5, Math.abs((nterstitiale ? 4 : 5))))));
      }
      send5 = "3";
       let yellowu: Array<any> = [619, 377];
         yellowu = [yellowu.length];
         yellowu = [yellowu.length & 3];
      for (let w = 0; w < 1; w++) {
         yellowu.push(yellowu.length);
      }
      send5 = `${parseInt(`${currentP}`)}`;
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
      result = await THFirebase.signinupUser({
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

    const user = KWConstants.fromJson(resultData);

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

      
      umb_center_carousel.userCenterLoginSuccessTimesAnalytics();
      LRZTermsScreen.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        umb_center_carousel.userCenterVipLoginSuccessTimesAnalytics();
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
            source={require('@static/images/invite/appleStringTopic.png')}
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
