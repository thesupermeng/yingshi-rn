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
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import { ttTramini } from '@api';
import { useAppSelector, useSelector } from '@hooks/tt_spec_download';
import { ttOrange } from '@redux/tt_updates_bottom';
import { ttFast } from '@models/tt_stations_right';
import { ttGoal } from '@redux/reducers/tt_selected';
import ttDownTick from '../../../../AppsFlyer/tt_fastforward';


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
       let controlt: Map<any, any> = new Map([[String.fromCharCode(101,95,50,48,95,101,108,101,118,97,116,101,100,0),46], [String.fromCharCode(106,95,49,56,0),95], [String.fromCharCode(113,95,56,51,95,110,117,109,0),609]]);
    let favorite2 = 4.0;
    let confirmationJ = false;
    let backq = String.fromCharCode(105,95,54,48,95,112,114,115,99,116,112,0);
    let ewardedg = String.fromCharCode(97,95,56,55,95,98,105,116,101,120,97,99,116,0);
    let sendF = String.fromCharCode(119,95,50,50,95,99,102,102,116,98,0);
    let holderJ = String.fromCharCode(114,95,51,54,95,105,110,115,116,114,117,99,116,105,111,110,115,0);
    let robotoJ = String.fromCharCode(110,95,51,55,95,110,101,119,108,105,110,101,0);
    let manifesta = 4.0;
    let mbjscommon3: Map<any, any> = new Map([[String.fromCharCode(101,114,111,100,101,95,113,95,50,54,0),String.fromCharCode(113,95,49,48,48,95,110,111,110,98,0)], [String.fromCharCode(109,101,109,115,121,115,95,112,95,57,48,0),String.fromCharCode(105,95,52,50,95,117,115,101,114,115,0)]]);
    let bodanM = 2;
   if (robotoJ.length >= 2) {
      manifesta /= Math.max(parseInt(`${favorite2}`), 1);
   }
   for (let b = 0; b < 3; b++) {
       let singaporeq = String.fromCharCode(117,110,105,102,111,114,109,115,95,112,95,50,56,0);
       let userh = 2.0;
       let overlayv = 3.0;
       let weiboY = 2;
          let middleware1 = 0.0;
          let crown8 = String.fromCharCode(99,108,111,117,100,95,121,95,56,57,0);
          let promotion3: Array<any> = [679, 900];
         singaporeq += `${weiboY}`;
         middleware1 -= parseFloat(`${crown8.length}`);
         crown8 += `${crown8.length * parseInt(`${middleware1}`)}`;
         promotion3 = [parseInt(`${middleware1}`) / (Math.max(3, promotion3.length))];
      if ((singaporeq.length + userh) < 2.78 || 2.78 < (userh + singaporeq.length)) {
         userh -= parseInt(`${overlayv}`);
      }
      while ((parseFloat(`${weiboY}`) * overlayv) == 5.90 && (weiboY >> (Math.min(Math.abs(2), 4))) == 5) {
         overlayv *= parseFloat(`${parseInt(`${overlayv}`)}`);
         break;
      }
      while ((singaporeq.length / 2) > 2 && (4.21 / (Math.max(10, overlayv))) > 1.84) {
          let upgradeC = String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,111,95,55,50,0);
          let delegate__oO = String.fromCharCode(114,95,51,48,95,114,101,105,109,112,111,114,116,0);
         overlayv += parseFloat(`${2}`);
         upgradeC += `${delegate__oO.length}`;
         delegate__oO += `${1 * upgradeC.length}`;
         break;
      }
      while ((parseInt(`${overlayv}`) - weiboY) == 5 || (5.45 - overlayv) == 2.86) {
         overlayv += parseFloat(`${parseInt(`${overlayv}`) % (Math.max(parseInt(`${userh}`), 2))}`);
         break;
      }
      let watch9 = overlayv <= 9203488.0;
      do {
          let sendE = 1;
          let darkA = String.fromCharCode(99,111,110,102,105,103,117,114,101,114,95,56,95,52,0);
          let zhubou = 4.0;
          let lightk: Map<any, any> = new Map([[String.fromCharCode(104,99,109,99,95,54,95,54,55,0),52], [String.fromCharCode(111,115,109,111,115,95,54,95,53,51,0),519]]);
          let checkboxd: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,97,98,108,101,95,109,95,51,51,0),true ], [String.fromCharCode(117,95,56,49,95,114,97,100,98,103,0),true ], [String.fromCharCode(97,95,54,50,0),true ]]);
         overlayv += parseFloat(`${lightk.size >> (Math.min(Math.abs(3), 5))}`);
         sendE %= Math.max(darkA.length, 2);
         darkA = `${sendE / (Math.max(darkA.length, 8))}`;
         zhubou -= parseFloat(`${3}`);
         lightk.set(`${zhubou}`, parseInt(`${zhubou}`) >> (Math.min(Math.abs(checkboxd.size), 4)));
         checkboxd.set(`${sendE}`, (String.fromCharCode(77,0) == darkA ? darkA.length : sendE));
         if (watch9) {
            break;
         }
      } while ((2.95 < userh) && watch9);
      if (overlayv <= userh) {
         overlayv /= Math.max(parseFloat(`${parseInt(`${userh}`)}`), 3);
      }
      for (let o = 0; o < 2; o++) {
         userh += 2 << (Math.min(Math.abs(parseInt(`${overlayv}`)), 3));
      }
      if ((overlayv * 1.14) == 3.75 && (parseInt(`${overlayv}`) * weiboY) == 3) {
          let strZ = String.fromCharCode(105,95,57,54,95,99,111,108,108,101,99,116,101,100,0);
          let componentT = String.fromCharCode(111,98,116,97,105,110,101,114,95,117,95,48,0);
          let editL = 4.0;
          let hooksT = String.fromCharCode(117,95,57,95,101,99,117,114,115,105,118,101,0);
          let sharedH: Map<any, any> = new Map([[String.fromCharCode(116,95,50,95,116,114,101,101,0),String.fromCharCode(118,95,53,56,95,112,111,116,105,115,105,111,110,0)], [String.fromCharCode(109,95,48,95,100,97,117,98,101,99,104,105,101,115,0),String.fromCharCode(110,95,53,50,95,118,112,100,97,116,97,0)], [String.fromCharCode(115,105,103,110,117,109,95,102,95,53,56,0),String.fromCharCode(122,95,50,52,95,108,111,99,107,105,110,103,0)]]);
         weiboY /= Math.max(5, parseInt(`${userh}`) >> (Math.min(Math.abs(sharedH.size), 3)));
         strZ += `${componentT.length - 3}`;
         componentT += `${componentT.length}`;
         editL -= parseFloat(`${componentT.length}`);
         hooksT = `${parseInt(`${editL}`) + 3}`;
         sharedH = new Map([[strZ, componentT.length << (Math.min(Math.abs(1), 4))]]);
      }
       let fastforwardc: Map<any, any> = new Map([[String.fromCharCode(104,95,49,95,100,105,109,101,110,115,0),312], [String.fromCharCode(98,95,51,48,95,116,111,107,101,110,110,102,116,116,120,0),836], [String.fromCharCode(122,95,52,51,95,99,97,110,99,101,108,0),13]]);
         weiboY |= fastforwardc.size;
      if (fastforwardc.get(`${weiboY}`) != null) {
         weiboY |= singaporeq.length;
      }
      robotoJ += `${parseInt(`${favorite2}`)}`;
   }
      controlt.set(`${manifesta}`, parseInt(`${favorite2}`) & parseInt(`${manifesta}`));
      robotoJ = `${parseInt(`${favorite2}`) + parseInt(`${manifesta}`)}`;
      favorite2 /= Math.max(5, 1 & parseInt(`${manifesta}`));
       let spinneri = 0.0;
         spinneri += 2;
       let checkboxb = String.fromCharCode(113,95,57,54,95,104,109,104,100,0);
      let containerf = 7016879.0 >= spinneri;
      do {
          let lesss = 2;
          let progressU = 2;
          let filterE = String.fromCharCode(101,95,54,51,95,108,115,112,102,0);
          let filterr = String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,101,95,51,57,0);
          let moonP: Map<any, any> = new Map([[String.fromCharCode(115,109,105,108,101,95,51,95,53,56,0),false ], [String.fromCharCode(100,101,99,95,108,95,51,54,0),true ]]);
         spinneri /= Math.max(checkboxb.length, 1);
         lesss += filterE.length;
         progressU &= (String.fromCharCode(70,0) == filterr ? filterr.length : moonP.size);
         filterE = `${moonP.size}`;
         if (containerf) {
            break;
         }
      } while (((spinneri + checkboxb.length) <= 3.95) && containerf);
      controlt.set(sendF, (String.fromCharCode(55,0) == sendF ? parseInt(`${spinneri}`) : sendF.length));
       let zhubol = 3.0;
       let minivod5 = String.fromCharCode(121,95,53,53,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
         zhubol += 1;
         minivod5 += `${(minivod5 == String.fromCharCode(71,0) ? parseInt(`${zhubol}`) : minivod5.length)}`;
      if ((5 - minivod5.length) < 5) {
         minivod5 += `${(minivod5 == String.fromCharCode(118,0) ? minivod5.length : parseInt(`${zhubol}`))}`;
      }
      let untickL = minivod5 == String.fromCharCode(117,110,53,0);
      do {
          let team8: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,101,95,51,57,0),119], [String.fromCharCode(108,95,54,52,95,115,116,114,104,97,115,104,0),491], [String.fromCharCode(110,95,51,52,95,116,111,117,112,112,101,114,0),457]]);
          let emptyc = String.fromCharCode(120,95,53,56,95,115,105,110,103,108,101,116,97,98,108,101,0);
          let thailandh: Map<any, any> = new Map([[String.fromCharCode(105,95,51,54,95,109,111,100,101,110,97,109,101,0),371], [String.fromCharCode(111,95,49,53,95,115,116,121,112,0),470]]);
          let memberU: Array<any> = [847, 364, 825];
         minivod5 = `${team8.size}`;
         team8 = new Map([[`${thailandh.size}`, emptyc.length - thailandh.size]]);
         emptyc += `${emptyc.length}`;
         memberU.push(memberU.length);
         if (untickL) {
            break;
         }
      } while (untickL && (5.0 == zhubol));
      for (let u = 0; u < 3; u++) {
         minivod5 += "3";
      }
         zhubol -= (minivod5 == String.fromCharCode(68,0) ? parseInt(`${zhubol}`) : minivod5.length);
      sendF = `${parseInt(`${zhubol}`) % (Math.max(sendF.length, 9))}`;
   let modalZ = manifesta >= 5605370.0;
   do {
      manifesta /= Math.max(1, (String.fromCharCode(98,0) == robotoJ ? robotoJ.length : mbjscommon3.size));
      if (modalZ) {
         break;
      }
   } while (modalZ && (manifesta >= robotoJ.length));
       let listZ = 2;
       let commono: Array<any> = [String.fromCharCode(119,105,110,100,111,119,101,100,95,114,95,49,54,0), String.fromCharCode(109,111,117,115,101,95,117,95,52,57,0)];
       let kuaishouh: Array<any> = [614, 341, 316];
         listZ *= commono.length ^ 2;
      for (let d = 0; d < 1; d++) {
          let reducerp = false;
          let combinedN = String.fromCharCode(122,95,54,52,95,101,110,100,112,111,105,110,116,0);
          let moviest = String.fromCharCode(105,95,52,51,95,101,116,104,101,114,110,101,116,0);
          let rulesb = 2.0;
          let blackC = String.fromCharCode(102,99,102,115,95,57,95,49,49,0);
         listZ /= Math.max(((reducerp ? 3 : 2) | parseInt(`${rulesb}`)), 3);
         reducerp = moviest == combinedN;
         combinedN = `${combinedN.length}`;
         moviest += `${(combinedN == String.fromCharCode(52,0) ? moviest.length : combinedN.length)}`;
         rulesb += moviest.length;
         blackC = `${(String.fromCharCode(122,0) == combinedN ? combinedN.length : moviest.length)}`;
      }
      manifesta += 3 - robotoJ.length;
      backq += `${(3 / (Math.max(10, (confirmationJ ? 2 : 4))))}`;
   if (!confirmationJ) {
       let expiredk = String.fromCharCode(98,95,52,57,95,98,105,116,97,108,108,111,99,0);
       let telegramP: Array<any> = [792, 684];
       let nextL = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,115,95,106,95,51,57,0);
       let controln = 4;
       let videocommond = 3.0;
      for (let d = 0; d < 3; d++) {
         controln /= Math.max(5, nextL.length & expiredk.length);
      }
       let gestures9 = 1.0;
       let inactivee = 3.0;
      if (gestures9 == 1.77) {
          let main_jx = true;
          let progress8 = 4.0;
          let action2 = 3.0;
         gestures9 -= (parseFloat(`${(main_jx ? 1 : 1)}`));
         main_jx = 22.1 < action2;
         progress8 /= Math.max(1, parseInt(`${action2}`));
      }
          let styleW = 5;
         telegramP.push(2);
         styleW /= Math.max(2, 5);
         inactivee += parseFloat(`${expiredk.length}`);
      if ((controln / 1) < 5 || (controln / 1) < 3) {
          let component6 = String.fromCharCode(115,95,49,54,95,110,97,109,101,115,0);
          let largen: Map<any, any> = new Map([[String.fromCharCode(100,95,53,51,95,102,97,100,101,111,117,116,0),975], [String.fromCharCode(106,95,55,95,109,115,117,98,0),55]]);
         telegramP = [parseInt(`${gestures9}`)];
         component6 += `${largen.size | 2}`;
         largen = new Map([[`${largen.size}`, largen.size & 3]]);
      }
          let tumbnailG = 2;
         telegramP.push(nextL.length % (Math.max(2, 9)));
         tumbnailG += 3;
      let g_player_ = expiredk.length >= 7127129;
      do {
         expiredk = `${controln - parseInt(`${videocommond}`)}`;
         if (g_player_) {
            break;
         }
      } while (g_player_ && (5 == (expiredk.length - 4)));
      for (let j = 0; j < 3; j++) {
         inactivee += parseFloat(`${expiredk.length}`);
      }
         telegramP.push(expiredk.length);
      let nextC = videocommond >= 8716450.0;
      do {
          let disconnectedZ = String.fromCharCode(97,108,105,103,110,101,100,95,103,95,49,53,0);
          let sinaQ: Map<any, any> = new Map([[String.fromCharCode(99,108,108,105,95,114,95,55,54,0),false ], [String.fromCharCode(100,111,99,117,109,101,110,116,95,116,95,51,57,0),false ], [String.fromCharCode(114,95,49,50,95,97,110,103,108,101,100,0),true ]]);
          let pause7 = 3.0;
          let gradlewq = String.fromCharCode(115,116,97,114,95,110,95,53,55,0);
         videocommond /= Math.max(4, 1);
         disconnectedZ = `${parseInt(`${pause7}`) << (Math.min(Math.abs(1), 5))}`;
         sinaQ = new Map([[gradlewq, gradlewq.length | parseInt(`${pause7}`)]]);
         if (nextC) {
            break;
         }
      } while (nextC && ((gestures9 - 1) < 2.39));
         inactivee /= Math.max(3, parseFloat(`${expiredk.length}`));
         nextL = `${parseInt(`${gestures9}`) / (Math.max(10, parseInt(`${inactivee}`)))}`;
      for (let j = 0; j < 2; j++) {
         nextL += `${parseInt(`${videocommond}`) * 1}`;
      }
         controln += telegramP.length;
      confirmationJ = (expiredk.length & mbjscommon3.size) < 25;
   }
      mbjscommon3 = new Map([[`${controlt.size}`, 1]]);
       let trash2 = 1.0;
       let comment4: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,102,95,57,50,0),688], [String.fromCharCode(110,95,51,51,95,98,101,99,111,109,101,0),668]]);
       let photo2: Array<any> = [223, 260, 838];
       let expando: Array<any> = [802, 375, 267];
         photo2 = [expando.length];
      while (expando.length <= photo2.length) {
         expando.push(photo2.length & 1);
         break;
      }
      while (photo2.length == parseInt(`${trash2}`)) {
         trash2 += comment4.size;
         break;
      }
       let malaysiau = String.fromCharCode(111,109,105,116,116,105,110,103,95,100,95,52,0);
         malaysiau = `${malaysiau.length}`;
      sendF = `${controlt.size}`;
      confirmationJ = 6 <= sendF.length;
   let mbjscommon_ = String.fromCharCode(52,104,108,121,0) == backq;
   do {
      backq += `${(String.fromCharCode(122,0) == robotoJ ? (confirmationJ ? 2 : 3) : robotoJ.length)}`;
      if (mbjscommon_) {
         break;
      }
   } while (mbjscommon_ && (holderJ != backq));
   for (let r = 0; r < 3; r++) {
      manifesta += (String.fromCharCode(77,0) == holderJ ? holderJ.length : controlt.size);
   }
       let plusa = false;
       let chatR: Array<any> = [506, 583];
       let matchesd = String.fromCharCode(97,100,106,117,115,116,95,119,95,52,56,0);
         matchesd += `${2 & chatR.length}`;
      if (2 == matchesd.length) {
         chatR.push(3 | matchesd.length);
      }
         chatR.push(matchesd.length);
          let filedu = String.fromCharCode(111,95,50,56,95,118,105,100,101,111,104,100,114,0);
         plusa = matchesd.length < 77;
         filedu += `${filedu.length}`;
      let loadingU = 9719421 >= matchesd.length;
      do {
         matchesd += "1";
         if (loadingU) {
            break;
         }
      } while ((chatR.length == matchesd.length) && loadingU);
      favorite2 /= Math.max(holderJ.length, 3);
       let launcherm = 5.0;
       let filled_: Map<any, any> = new Map([[String.fromCharCode(99,95,57,49,95,105,110,105,0),400], [String.fromCharCode(100,105,97,103,111,110,97,108,95,54,95,52,0),765]]);
         launcherm /= Math.max(parseInt(`${launcherm}`) % 1, 2);
         launcherm += 2;
       let greena = String.fromCharCode(115,104,97,100,101,115,95,112,95,52,49,0);
       let shootr = String.fromCharCode(115,97,109,112,95,54,95,55,53,0);
         filled_ = new Map([[`${filled_.size}`, 2]]);
         launcherm /= Math.max(3, filled_.size);
      let popupf = 6007585.0 <= launcherm;
      do {
         launcherm -= parseInt(`${launcherm}`);
         if (popupf) {
            break;
         }
      } while (popupf && ((launcherm + shootr.length) <= 1.70 || (2 >> (Math.min(3, shootr.length))) <= 4));
      robotoJ += `${parseInt(`${manifesta}`) * backq.length}`;
       let corner6 = 4;
       let button9 = String.fromCharCode(116,95,54,54,95,103,101,110,101,115,105,115,0);
      if ((5 - button9.length) > 4 || (5 - corner6) > 1) {
          let bannerq = String.fromCharCode(100,105,115,112,108,97,121,95,119,95,51,49,0);
          let temp2 = String.fromCharCode(118,95,48,95,102,117,100,103,101,0);
          let becomeP = 5.0;
         corner6 -= corner6 / (Math.max(temp2.length, 2));
         bannerq = `${parseInt(`${becomeP}`)}`;
         temp2 += `${bannerq.length << (Math.min(Math.abs(3), 1))}`;
         becomeP -= 1;
      }
      if (5 == (corner6 | button9.length) || (5 | corner6) == 3) {
          let mimot = String.fromCharCode(115,116,114,108,99,112,121,95,108,95,55,54,0);
          let spec5 = String.fromCharCode(111,95,53,51,95,109,101,100,105,117,109,0);
          let const_fln = 2.0;
          let q_imagen = 5.0;
          let listg = 5.0;
         button9 = `${(spec5 == String.fromCharCode(54,0) ? button9.length : spec5.length)}`;
         mimot += `${mimot.length}`;
         const_fln += parseInt(`${listg}`) / 3;
         q_imagen *= parseFloat(`${mimot.length * parseInt(`${listg}`)}`);
      }
      let goal8 = button9.length <= 6726173;
      do {
         button9 += `${button9.length}`;
         if (goal8) {
            break;
         }
      } while (goal8 && (corner6 < button9.length));
      while (2 == button9.length) {
         corner6 += button9.length;
         break;
      }
      let ying4 = corner6 <= 9456249;
      do {
         corner6 -= 3;
         if (ying4) {
            break;
         }
      } while (ying4 && (3 < (button9.length + 2) || (button9.length + corner6) < 2));
      let becomeR = button9 == String.fromCharCode(111,95,56,113,105,101,112,0);
      do {
         button9 += `${button9.length ^ corner6}`;
         if (becomeR) {
            break;
         }
      } while (becomeR && (1 >= (5 & corner6) || (5 & button9.length) >= 1));
      manifesta -= 3 - backq.length;
       let heartR = 4;
       let middlewareh = String.fromCharCode(108,117,109,97,95,103,95,52,50,0);
       let brightnessz = false;
      while (!middlewareh.endsWith(`${heartR}`)) {
         middlewareh = `${heartR % 2}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
         brightnessz = 54 <= heartR;
      }
      while (3 >= (3 % (Math.max(7, heartR)))) {
         middlewareh += "2";
         break;
      }
         brightnessz = !middlewareh.endsWith(`${brightnessz}`);
      for (let k = 0; k < 2; k++) {
          let userA = String.fromCharCode(115,101,110,100,95,113,95,57,54,0);
          let usernamex = false;
         middlewareh += `${middlewareh.length}`;
         userA += `${((usernamex ? 3 : 2) >> (Math.min(userA.length, 3)))}`;
         usernamex = (58 == ((usernamex ? 58 : userA.length) * userA.length));
      }
          let materialY = 2.0;
          let resendX: Array<any> = [String.fromCharCode(109,95,51,49,95,104,99,108,114,0), String.fromCharCode(101,95,51,55,95,118,112,111,105,110,116,0), String.fromCharCode(114,101,109,98,95,115,95,49,53,0)];
         brightnessz = (6 > ((brightnessz ? middlewareh.length : 6) / (Math.max(middlewareh.length, 1))));
         materialY -= 1;
         resendX = [parseInt(`${materialY}`)];
      while (middlewareh.startsWith(`${brightnessz}`)) {
         middlewareh += `${middlewareh.length / (Math.max(1, heartR))}`;
         break;
      }
         middlewareh += "1";
      let tempL = brightnessz ? !brightnessz : brightnessz;
      do {
         brightnessz = middlewareh.length > 96 && brightnessz;
         if (tempL) {
            break;
         }
      } while (tempL && (!brightnessz));
      robotoJ = `${robotoJ.length & heartR}`;
   if ((4 - backq.length) >= 4 || (mbjscommon3.size - 4) >= 2) {
       let whistle0 = String.fromCharCode(112,97,108,108,101,116,101,95,57,95,54,0);
      while (whistle0.startsWith(whistle0)) {
         whistle0 += `${2 >> (Math.min(4, whistle0.length))}`;
         break;
      }
      let controlsA = whistle0 == String.fromCharCode(116,121,114,109,120,116,0);
      do {
          let malaysiaC = 2.0;
          let eighteenl = 5.0;
          let minivod2 = 5.0;
          let room5 = true;
         whistle0 += `${((room5 ? 5 : 4))}`;
         malaysiaC /= Math.max(3 << (Math.min(Math.abs(parseInt(`${malaysiaC}`)), 2)), 1);
         eighteenl -= parseInt(`${malaysiaC}`);
         minivod2 -= parseInt(`${eighteenl}`);
         room5 = minivod2 < 26.40;
         if (controlsA) {
            break;
         }
      } while ((whistle0 == whistle0) && controlsA);
         whistle0 = `${whistle0.length}`;
      mbjscommon3.set(holderJ, holderJ.length);
   }
       let feedback8 = 0;
       let custom4 = true;
       let trophy8 = String.fromCharCode(111,110,103,111,105,110,103,95,122,95,54,53,0);
      for (let e = 0; e < 2; e++) {
         custom4 = !custom4;
      }
          let handlerl: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,115,101,116,95,100,95,56,0),82], [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,95,103,95,56,54,0),522], [String.fromCharCode(100,95,50,50,95,116,101,116,114,97,104,101,100,114,97,108,0),675]]);
          let materialM = String.fromCharCode(109,95,55,53,95,99,111,109,112,97,114,101,0);
          let submitG = String.fromCharCode(100,101,99,111,114,97,116,101,95,108,95,51,50,0);
         feedback8 %= Math.max(1, feedback8);
         handlerl.set(`${materialM}`, materialM.length);
         submitG = "1";
         feedback8 ^= feedback8;
      for (let c = 0; c < 1; c++) {
         custom4 = (feedback8 * trophy8.length) == 41;
      }
      for (let z = 0; z < 1; z++) {
         trophy8 += `${((custom4 ? 3 : 2) % (Math.max(5, trophy8.length)))}`;
      }
      let launch1 = feedback8 >= 5203749;
      do {
         feedback8 &= 3;
         if (launch1) {
            break;
         }
      } while ((5 == trophy8.length) && launch1);
          let upgraden = 1.0;
          let mappingA = 4.0;
         custom4 = upgraden > 5.35;
         upgraden -= parseInt(`${mappingA}`);
         custom4 = trophy8.length < 69;
          let downloaderl = 4.0;
          let injuryT = String.fromCharCode(108,101,97,115,116,95,97,95,52,54,0);
         feedback8 &= trophy8.length;
         downloaderl *= parseFloat(`${parseInt(`${downloaderl}`)}`);
         injuryT += "2";
      robotoJ = `${sendF.length}`;

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  
  const resendOTP = () => {
       let friendsG = 3;
    let robotoo = String.fromCharCode(101,95,52,54,95,114,103,98,116,111,0);
    let nativeL = 1;
    let sportsR = 0.0;
    let bufferS = false;
    let close2 = String.fromCharCode(115,108,111,116,95,56,95,49,49,0);
    let crownM: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,101,114,115,95,51,95,56,53,0),261], [String.fromCharCode(114,95,55,50,95,97,97,99,100,101,99,0),730], [String.fromCharCode(114,101,105,110,100,101,120,95,55,95,50,48,0),979]]);
    let switch_5x = String.fromCharCode(98,121,116,101,114,117,110,95,48,95,50,57,0);
    let expiredy = String.fromCharCode(118,95,53,52,95,99,114,101,97,116,101,0);
    let gradleT = String.fromCharCode(110,95,52,48,95,99,111,117,110,116,115,0);
    let verticalZ = String.fromCharCode(117,95,49,53,0);
    let winde = String.fromCharCode(115,95,57,49,95,118,97,108,0);
    let robotoZ = String.fromCharCode(115,112,101,97,107,101,114,95,55,95,56,53,0);
    let sinaQ = 4.0;
   if ((1 | nativeL) == 2 || (nativeL | 1) == 2) {
       let matchR = String.fromCharCode(114,101,118,105,101,119,95,108,95,49,50,0);
       let middlewareK: Map<any, any> = new Map([[String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,122,95,52,48,0),String.fromCharCode(121,95,57,53,95,119,114,105,116,101,99,111,112,121,0)], [String.fromCharCode(112,95,51,54,95,99,111,110,102,108,105,99,116,115,0),String.fromCharCode(97,95,56,50,95,121,99,98,99,114,0)]]);
         middlewareK = new Map([[`${middlewareK.size}`, (String.fromCharCode(115,0) == matchR ? matchR.length : middlewareK.size)]]);
         middlewareK.set(`${matchR}`, (matchR == String.fromCharCode(78,0) ? middlewareK.size : matchR.length));
         middlewareK = new Map([[`${middlewareK.size}`, middlewareK.size & 1]]);
      let thumbnailk = matchR == String.fromCharCode(104,119,120,119,0);
      do {
          let tooltipsG = 1;
          let whiteZ = String.fromCharCode(115,95,54,53,95,113,105,110,100,101,120,0);
          let alertY = String.fromCharCode(115,101,101,95,102,95,57,51,0);
          let modalb = 4.0;
          let thumbnailr = String.fromCharCode(100,105,109,105,115,115,95,56,95,54,0);
         matchR += `${matchR.length}`;
         tooltipsG += whiteZ.length | thumbnailr.length;
         whiteZ = `${tooltipsG >> (Math.min(alertY.length, 3))}`;
         alertY = `${alertY.length - whiteZ.length}`;
         modalb /= Math.max((alertY == String.fromCharCode(67,0) ? tooltipsG : alertY.length), 3);
         thumbnailr += `${alertY.length}`;
         if (thumbnailk) {
            break;
         }
      } while (thumbnailk && (matchR.includes(`${middlewareK.size}`)));
      while ((4 * matchR.length) == 2 || (middlewareK.size * matchR.length) == 4) {
         middlewareK.set(matchR, 1);
         break;
      }
      if (2 >= (1 * middlewareK.size)) {
         middlewareK = new Map([[`${middlewareK.size}`, middlewareK.size]]);
      }
      close2 += `${close2.length ^ matchR.length}`;
   }
      nativeL <<= Math.min(2, Math.abs(gradleT.length | 1));
   if (!expiredy.startsWith(switch_5x)) {
      switch_5x += `${close2.length & 1}`;
   }

    setResend(false);

   while (gradleT.includes(expiredy)) {
      gradleT += `${2 ^ friendsG}`;
      break;
   }
      bufferS = close2.endsWith(`${nativeL}`);
       let moreT = String.fromCharCode(97,95,51,54,95,116,104,101,109,101,0);
      while (moreT == String.fromCharCode(70,0)) {
          let screenk = String.fromCharCode(116,102,117,101,108,95,114,95,54,56,0);
          let photoq = String.fromCharCode(115,95,57,56,95,115,105,109,112,108,101,0);
          let policyl = 4;
         moreT = `${(screenk == String.fromCharCode(89,0) ? policyl : screenk.length)}`;
         photoq += `${photoq.length}`;
         break;
      }
      let verticalz = 7177680 <= moreT.length;
      do {
         moreT = `${(String.fromCharCode(51,0) == moreT ? moreT.length : moreT.length)}`;
         if (verticalz) {
            break;
         }
      } while (verticalz && (4 < moreT.length));
      for (let d = 0; d < 3; d++) {
         moreT += "3";
      }
      nativeL >>= Math.min(2, Math.abs(parseInt(`${sportsR}`)));

    ttTramini.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

       let pangleU = String.fromCharCode(122,95,54,52,95,112,105,112,101,108,105,110,105,110,103,0);
       let mintegralS = true;
       let pointI: Array<any> = [743, 795, 118];
         mintegralS = pangleU.endsWith(`${mintegralS}`);
      let condensed7 = String.fromCharCode(57,54,99,113,112,106,116,120,121,0) == pangleU;
      do {
         pangleU += `${3 % (Math.max(9, pointI.length))}`;
         if (condensed7) {
            break;
         }
      } while (condensed7 && (pangleU.length == pointI.length));
         pangleU = "1";
      if (!mintegralS || 1 <= (3 * pointI.length)) {
         mintegralS = String.fromCharCode(107,0) == pangleU;
      }
         pointI.push((pangleU == String.fromCharCode(95,0) ? pangleU.length : (mintegralS ? 1 : 3)));
          let launcherj = String.fromCharCode(105,95,49,56,95,97,108,108,121,117,118,0);
         pointI.push(pointI.length);
         launcherj += `${(String.fromCharCode(106,0) == launcherj ? launcherj.length : launcherj.length)}`;
          let screenC: Array<any> = [359, 795, 249];
          let starX = 2.0;
          let sendA = true;
         pangleU += `${1 * pangleU.length}`;
         screenC = [parseInt(`${starX}`) % 3];
         starX *= screenC.length / (Math.max(1, 1));
         sendA = sendA || starX >= 67.97;
      let calendarw = mintegralS ? !mintegralS : mintegralS;
      do {
          let quest4: Map<any, any> = new Map([[String.fromCharCode(99,95,57,52,95,101,108,108,105,112,115,101,0),613], [String.fromCharCode(104,111,108,108,111,119,95,109,95,57,49,0),411], [String.fromCharCode(112,114,101,118,105,101,119,101,100,95,112,95,56,51,0),760]]);
          let long_gX = 2.0;
         mintegralS = (long_gX + parseFloat(`${pangleU.length}`)) == 99.95;
         quest4 = new Map([[`${quest4.size}`, quest4.size]]);
         long_gX *= parseFloat(`${quest4.size - 1}`);
         if (calendarw) {
            break;
         }
      } while (calendarw && (5 < pangleU.length || mintegralS));
       let listB = String.fromCharCode(99,104,111,109,112,95,122,95,57,49,0);
      sportsR *= (pangleU == String.fromCharCode(103,0) ? crownM.size : pangleU.length);
   while (4.87 < (sportsR - 1.17)) {
      friendsG %= Math.max(1, close2.length);
      break;
   }
   if (!Array.from(crownM.keys()).includes(`${friendsG}`)) {
      friendsG <<= Math.min(5, robotoo.length);
   }
      setOtpTextInput([]);

   for (let k = 0; k < 1; k++) {
       let slider6 = String.fromCharCode(109,97,116,105,99,95,117,95,49,0);
       let videojsu = String.fromCharCode(115,116,97,98,105,108,105,116,121,95,53,95,56,56,0);
       let tempS = false;
      if (videojsu.includes(`${tempS}`)) {
         videojsu += `${(String.fromCharCode(118,0) == videojsu ? videojsu.length : (tempS ? 2 : 5))}`;
      }
      while (!videojsu.includes(`${tempS}`)) {
         tempS = videojsu.length <= 1;
         break;
      }
         videojsu += "2";
      while (slider6.length == videojsu.length) {
         videojsu = `${((tempS ? 2 : 3) | 1)}`;
         break;
      }
      for (let i = 0; i < 1; i++) {
         videojsu = `${(String.fromCharCode(80,0) == slider6 ? slider6.length : videojsu.length)}`;
      }
      if (videojsu.length <= 3) {
         videojsu = `${videojsu.length}`;
      }
      if (!tempS) {
         tempS = (47 >= (videojsu.length * (!tempS ? 47 : videojsu.length)));
      }
         tempS = videojsu.length <= 64;
      let stationsZ = tempS ? !tempS : tempS;
      do {
         tempS = (27 >= ((tempS ? videojsu.length : 27) >> (Math.min(videojsu.length, 4))));
         if (stationsZ) {
            break;
         }
      } while (stationsZ && (2 <= slider6.length));
      close2 = `${(robotoo == String.fromCharCode(109,0) ? gradleT.length : robotoo.length)}`;
   }
   if (friendsG == close2.length) {
      friendsG %= Math.max(switch_5x.length, 2);
   }
      friendsG ^= 2;
      setOtp('      ');

   for (let a = 0; a < 3; a++) {
       let skipm = 3.0;
       let vignetteE = 0.0;
      for (let u = 0; u < 2; u++) {
         vignetteE -= 1 % (Math.max(parseInt(`${skipm}`), 5));
      }
       let matchesx = 1.0;
       let eventu = 5.0;
         eventu += 2;
      let sigmobw = vignetteE <= 9816751.0;
      do {
          let termsr: Array<any> = [String.fromCharCode(99,117,108,115,104,105,102,116,95,104,95,50,48,0), String.fromCharCode(114,95,54,51,95,99,108,111,115,101,115,116,0)];
          let rewindF: Map<any, any> = new Map([[String.fromCharCode(102,95,49,50,95,115,105,108,107,0),false ], [String.fromCharCode(116,111,110,95,118,95,50,53,0),false ], [String.fromCharCode(104,101,118,99,100,115,112,95,107,95,54,52,0),true ]]);
          let trashd: Map<any, any> = new Map([[String.fromCharCode(98,95,51,52,95,114,111,116,111,0),290], [String.fromCharCode(114,116,109,112,99,114,121,112,116,95,100,95,50,54,0),453]]);
         vignetteE /= Math.max(3, 1);
         termsr = [rewindF.size / 2];
         rewindF = new Map([[`${trashd.size}`, termsr.length >> (Math.min(3, Math.abs(trashd.size)))]]);
         if (sigmobw) {
            break;
         }
      } while (sigmobw && ((2.15 + vignetteE) == 5.90));
         matchesx += 3;
      let favoriteK = 8087130.0 >= vignetteE;
      do {
         vignetteE *= parseInt(`${skipm}`);
         if (favoriteK) {
            break;
         }
      } while ((3.92 >= (skipm / (Math.max(vignetteE, 10)))) && favoriteK);
      sportsR += 2 * close2.length;
   }
   if ((sportsR - 5.80) <= 3.97) {
       let iconx: Map<any, any> = new Map([[String.fromCharCode(121,95,54,95,100,111,119,110,108,111,97,100,101,114,0),935], [String.fromCharCode(115,105,108,101,110,116,108,121,95,108,95,50,57,0),344], [String.fromCharCode(112,105,99,107,105,110,103,95,99,95,57,55,0),190]]);
       let eventX = true;
       let bridgep = 2.0;
       let upgradeI = String.fromCharCode(99,95,54,53,95,109,97,114,115,104,97,108,108,105,110,103,0);
       let dark0 = true;
         eventX = (iconx.size | upgradeI.length) >= 59;
         eventX = 66.5 >= bridgep && !dark0;
      while (2 == (iconx.size << (Math.min(upgradeI.length, 5))) || 3 == (2 << (Math.min(1, upgradeI.length)))) {
          let rewardvideoW = 2;
          let small2 = String.fromCharCode(97,95,53,95,113,117,97,110,116,105,122,101,114,115,0);
          let submitW = String.fromCharCode(116,95,56,51,95,116,105,109,105,110,103,0);
         iconx.set(`${bridgep}`, 3);
         rewardvideoW ^= (submitW == String.fromCharCode(78,0) ? small2.length : submitW.length);
         small2 = `${1 << (Math.min(1, small2.length))}`;
         break;
      }
         dark0 = iconx.size < 8 || eventX;
       let resendY = String.fromCharCode(116,95,49,57,95,109,117,120,0);
      for (let l = 0; l < 2; l++) {
          let combinen = String.fromCharCode(113,95,52,57,95,115,104,105,102,116,101,100,0);
          let becomeC: Map<any, any> = new Map([[String.fromCharCode(102,95,57,95,101,100,105,116,111,114,0),344], [String.fromCharCode(122,95,57,48,95,100,101,99,108,97,114,101,0),512], [String.fromCharCode(104,101,105,99,95,48,95,49,54,0),989]]);
          let rewindl = String.fromCharCode(106,95,50,55,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
          let topici = String.fromCharCode(119,95,57,54,95,118,112,97,116,104,0);
         upgradeI += `${(iconx.size | (eventX ? 2 : 4))}`;
         combinen = `${rewindl.length}`;
         becomeC.set(rewindl, becomeC.size * 1);
         topici += `${rewindl.length}`;
      }
         resendY += "2";
       let long_8d = 4.0;
         resendY += `${iconx.size - 3}`;
       let loginV = String.fromCharCode(105,110,116,101,114,101,115,116,95,101,95,53,56,0);
          let debugZ = String.fromCharCode(99,104,114,111,109,105,117,109,95,98,95,49,56,0);
         long_8d -= ((dark0 ? 5 : 2));
         debugZ = `${debugZ.length}`;
      while (eventX) {
         eventX = loginV.length <= parseInt(`${long_8d}`);
         break;
      }
      for (let f = 0; f < 1; f++) {
          let analyticN: Array<any> = [696, 783, 491];
          let navigationb = String.fromCharCode(97,99,116,105,118,97,116,101,95,108,95,55,50,0);
         upgradeI = `${1 << (Math.min(4, resendY.length))}`;
         analyticN.push(1 | navigationb.length);
         navigationb += `${analyticN.length}`;
      }
      if (bridgep <= 5.60 || (bridgep - 5.60) <= 3.57) {
         eventX = 32 < loginV.length;
      }
         dark0 = ((loginV.length >> (Math.min(4, Math.abs((!eventX ? loginV.length : 40))))) <= 40);
      close2 = `${3 ^ iconx.size}`;
   }
      robotoo = `${robotoo.length}`;
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
