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
import yys_giftbutton_footballtrophy from '../../../Umeng/yys_giftbutton_footballtrophy';
import { yysHomeloading } from '@api';
import { useSelector } from '@hooks';
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
       let completeR = false;
    let phone4 = 5.0;
    let reactnativejs7 = 2;
    let arrowrighto = 4;
    let langL = String.fromCharCode(120,95,49,95,99,109,97,107,101,0);
    let iconchatsendG = String.fromCharCode(99,95,49,51,95,97,114,98,105,116,114,97,114,121,0);
    let runtime1: Array<any> = [904, 851, 275];
    let textinput7: Map<any, any> = new Map([[String.fromCharCode(122,95,56,48,95,99,111,110,116,101,110,116,0),false ], [String.fromCharCode(114,95,53,49,0),false ]]);
    let refreshborderlessS: Array<any> = [168, 644, 810];
    let modelsQ = 0;
    let reactnativeratingsU = 2.0;
    let phonef = String.fromCharCode(104,95,51,57,95,97,114,116,119,111,114,107,0);
      iconchatsendG += `${(String.fromCharCode(109,0) == iconchatsendG ? refreshborderlessS.length : iconchatsendG.length)}`;
      completeR = phone4 < 46.58;
      phone4 += parseInt(`${phone4}`);
      runtime1 = [langL.length | runtime1.length];
   let predictionbannersharedG = 7070119 >= refreshborderlessS.length;
   do {
       let yellowvideoliveS = String.fromCharCode(104,101,120,98,110,95,118,95,52,51,0);
       let livenodatabgimgi: Map<any, any> = new Map([[String.fromCharCode(104,95,54,50,95,109,111,100,109,0),238], [String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,108,95,53,54,0),245]]);
         livenodatabgimgi = new Map([[`${livenodatabgimgi.size}`, yellowvideoliveS.length * livenodatabgimgi.size]]);
      if (2 < livenodatabgimgi.size) {
          let dependenciesu = 4.0;
         yellowvideoliveS += `${livenodatabgimgi.size}`;
         dependenciesu += parseFloat(`${parseInt(`${dependenciesu}`) % (Math.max(5, parseInt(`${dependenciesu}`)))}`);
      }
         livenodatabgimgi = new Map([[`${livenodatabgimgi.size}`, 1 | livenodatabgimgi.size]]);
         yellowvideoliveS = `${yellowvideoliveS.length << (Math.min(1, Math.abs(livenodatabgimgi.size)))}`;
       let small8 = String.fromCharCode(112,95,53,55,95,122,111,111,109,105,110,103,0);
       let scheduler7 = String.fromCharCode(115,116,97,116,101,95,97,95,57,49,0);
       let catagoryC = 2;
      refreshborderlessS.push((yellowvideoliveS == String.fromCharCode(81,0) ? yellowvideoliveS.length : refreshborderlessS.length));
      if (predictionbannersharedG) {
         break;
      }
   } while (((3 << (Math.min(4, refreshborderlessS.length))) > 5 || 3 > (3 << (Math.min(3, Math.abs(textinput7.size))))) && predictionbannersharedG);
       let giftbutton1 = 3.0;
         giftbutton1 -= parseFloat(`${parseInt(`${giftbutton1}`)}`);
      while (2.54 == (giftbutton1 * giftbutton1) || 5.72 == (giftbutton1 * 2.54)) {
         giftbutton1 += parseFloat(`${parseInt(`${giftbutton1}`)}`);
         break;
      }
      for (let q = 0; q < 2; q++) {
         giftbutton1 *= parseFloat(`${parseInt(`${giftbutton1}`) | parseInt(`${giftbutton1}`)}`);
      }
      completeR = runtime1.length <= parseInt(`${giftbutton1}`);
   if (4 <= (reactnativejs7 ^ 2) || 5 <= (iconchatsendG.length ^ 2)) {
      reactnativejs7 *= refreshborderlessS.length * 1;
   }
       let tailr = true;
       let coref: Map<any, any> = new Map([[String.fromCharCode(112,95,50,49,95,99,114,101,97,116,101,100,0),true ], [String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,107,95,50,50,0),true ], [String.fromCharCode(104,95,57,95,105,110,118,115,98,111,120,0),false ]]);
          let flipper3 = 2.0;
         tailr = (coref.size - parseInt(`${flipper3}`)) > 71;
         tailr = (20 < ((!tailr ? 20 : coref.size) / (Math.max(coref.size, 1))));
      if (coref.size < 3) {
         tailr = coref.size == 54 && tailr;
      }
         coref = new Map([[`${coref.size}`, ((tailr ? 1 : 3) ^ 3)]]);
      let playershirtO = tailr ? !tailr : tailr;
      do {
         tailr = coref.size < 85 || tailr;
         if (playershirtO) {
            break;
         }
      } while ((4 >= coref.size) && playershirtO);
      for (let k = 0; k < 1; k++) {
         tailr = null != coref.get(`${tailr}`);
      }
      phone4 *= 3;
      textinput7 = new Map([[`${refreshborderlessS.length}`, 3 + parseInt(`${phone4}`)]]);
      phone4 /= Math.max(((completeR ? 3 : 2) << (Math.min(Math.abs(parseInt(`${phone4}`)), 1))), 4);
   while (4 == (textinput7.size / (Math.max(4, runtime1.length))) || 5 == (runtime1.length / (Math.max(4, 9)))) {
      runtime1.push(iconchatsendG.length);
      break;
   }
      iconchatsendG = `${1 << (Math.min(3, Math.abs(modelsQ)))}`;
      iconchatsendG += `${iconchatsendG.length}`;
   let mbbidi = arrowrighto <= 9373960;
   do {
       let heartO: Map<any, any> = new Map([[String.fromCharCode(112,114,111,102,105,108,101,115,95,118,95,52,48,0),477], [String.fromCharCode(100,95,49,48,95,109,111,110,111,98,108,97,99,107,0),136], [String.fromCharCode(122,95,52,95,98,105,103,117,105,110,116,0),835]]);
       let nendS = 1;
       let assetsT: Array<any> = [823, 482];
       let qaag5 = 0.0;
       let topon4 = String.fromCharCode(102,114,101,101,109,95,55,95,50,54,0);
      for (let l = 0; l < 2; l++) {
         nendS -= 1;
      }
         topon4 = `${nendS - 1}`;
      let match9 = 9745204 >= nendS;
      do {
          let subsF = 0;
          let defaultteamW = String.fromCharCode(99,104,97,114,97,99,116,101,100,95,57,95,55,56,0);
         nendS |= nendS;
         subsF &= subsF;
         defaultteamW = `${3 & defaultteamW.length}`;
         if (match9) {
            break;
         }
      } while ((topon4.endsWith(`${nendS}`)) && match9);
          let policyV = String.fromCharCode(97,95,55,57,95,111,103,103,118,111,114,98,105,115,0);
         heartO.set(`${qaag5}`, parseInt(`${qaag5}`) % 1);
         policyV = "1";
          let watchf = 1;
          let libavcodecI = String.fromCharCode(117,95,56,54,95,116,104,114,109,97,116,0);
         heartO.set(libavcodecI, 2 >> (Math.min(4, Math.abs(parseInt(`${qaag5}`)))));
         watchf /= Math.max(3 << (Math.min(4, Math.abs(watchf))), 4);
         libavcodecI += `${watchf >> (Math.min(Math.abs(3), 4))}`;
         assetsT = [heartO.size];
      for (let p = 0; p < 2; p++) {
         heartO.set(`${qaag5}`, assetsT.length + 3);
      }
      for (let m = 0; m < 3; m++) {
          let classesX: Array<any> = [23, 666];
          let matchh = String.fromCharCode(112,116,115,101,115,95,99,95,57,52,0);
         heartO.set(matchh, 2 ^ classesX.length);
      }
       let launcherG = String.fromCharCode(110,95,56,56,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0);
       let iconbellactiveg = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,95,113,95,54,57,0);
      if (topon4.length >= 3) {
          let description_kr4 = 5.0;
          let d_managerZ = String.fromCharCode(110,95,57,50,95,97,100,100,109,111,100,0);
          let predictionactiveE = 5.0;
          let privacyC = 3.0;
          let tooltipsp = String.fromCharCode(115,121,109,109,101,116,114,105,99,95,55,95,55,57,0);
         topon4 += `${1 * iconbellactiveg.length}`;
         description_kr4 *= tooltipsp.length >> (Math.min(Math.abs(3), 3));
         d_managerZ += `${parseInt(`${description_kr4}`)}`;
         predictionactiveE -= parseFloat(`${3}`);
         privacyC *= 2 | parseInt(`${predictionactiveE}`);
         tooltipsp = `${parseInt(`${predictionactiveE}`)}`;
      }
       let xvodJ = 3;
       let pingQ = 5;
         xvodJ &= topon4.length % 1;
      if (5 <= nendS) {
         nendS += topon4.length << (Math.min(Math.abs(3), 5));
      }
      while ((assetsT.length ^ heartO.size) >= 3 || (assetsT.length ^ 3) >= 2) {
         heartO.set(topon4, heartO.size / (Math.max(5, topon4.length)));
         break;
      }
      if (1 == (xvodJ * topon4.length)) {
         xvodJ |= (String.fromCharCode(49,0) == launcherG ? heartO.size : launcherG.length);
      }
      arrowrighto &= textinput7.size >> (Math.min(Math.abs(2), 3));
      if (mbbidi) {
         break;
      }
   } while (mbbidi && (langL.length >= arrowrighto));
   while (2 < (parseInt(`${phone4}`) / (Math.max(1, reactnativejs7))) || (phone4 / 1.52) < 5.65) {
      reactnativejs7 *= parseInt(`${phone4}`) / 1;
      break;
   }
      phone4 /= Math.max(1, 1 / (Math.max(3, iconchatsendG.length)));
   if (refreshborderlessS.length > 2) {
      modelsQ += reactnativejs7;
   }
   for (let j = 0; j < 1; j++) {
      textinput7.set(`${phone4}`, (parseInt(`${phone4}`) % (Math.max(10, (completeR ? 4 : 3)))));
   }
      iconchatsendG = `${((completeR ? 5 : 4))}`;
       let statisticsactive3: Map<any, any> = new Map([[String.fromCharCode(114,95,51,57,95,116,117,110,101,0),27], [String.fromCharCode(100,95,56,50,95,101,110,103,105,110,101,115,0),824]]);
       let linea: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,48,95,98,114,101,97,107,105,110,103,0),String.fromCharCode(104,105,103,104,98,105,116,115,95,116,95,56,57,0)], [String.fromCharCode(100,111,110,97,116,101,95,101,95,53,51,0),String.fromCharCode(114,95,50,55,95,98,101,115,116,0)]]);
       let dangery: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,48,95,112,114,105,109,101,0),String.fromCharCode(107,95,56,48,95,102,105,108,116,101,114,0)], [String.fromCharCode(108,95,49,55,95,114,101,116,114,97,110,115,109,105,116,115,0),String.fromCharCode(114,117,101,95,116,95,53,0)]]);
         linea.set(`${linea.size}`, 2 & dangery.size);
      for (let u = 0; u < 1; u++) {
         statisticsactive3 = new Map([[`${linea.size}`, 3 - linea.size]]);
      }
       let connection9 = String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,120,95,55,57,0);
       let vignettew = String.fromCharCode(105,95,51,54,95,117,114,108,0);
      for (let m = 0; m < 1; m++) {
         connection9 = `${vignettew.length - connection9.length}`;
      }
          let scrollviewY = String.fromCharCode(107,95,50,54,95,99,97,114,100,97,110,111,0);
          let libreactnativeblobl = String.fromCharCode(109,95,52,48,95,98,105,116,114,118,0);
          let closeI = String.fromCharCode(120,110,97,115,109,95,50,95,49,0);
         statisticsactive3 = new Map([[`${dangery.size}`, 2]]);
         scrollviewY += `${(String.fromCharCode(99,0) == libreactnativeblobl ? libreactnativeblobl.length : scrollviewY.length)}`;
         closeI += `${(String.fromCharCode(116,0) == libreactnativeblobl ? scrollviewY.length : libreactnativeblobl.length)}`;
       let nendF = String.fromCharCode(113,95,49,95,102,116,118,108,97,115,116,110,111,100,101,0);
       let condensedn = String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,112,95,55,50,0);
      let bottom2 = 8126155 >= connection9.length;
      do {
         connection9 = `${linea.size}`;
         if (bottom2) {
            break;
         }
      } while (bottom2 && (connection9.endsWith(`${dangery.size}`)));
       let libglogc: Array<any> = [19, 580];
       let userY: Array<any> = [35, 873];
          let javaV = 0.0;
          let scrollvieww: Array<any> = [200, 323];
         nendF += `${nendF.length}`;
         javaV += parseFloat(`${scrollvieww.length & 3}`);
         scrollvieww.push(2);
      iconchatsendG = `${statisticsactive3.size}`;
   while (1 > runtime1.length) {
      iconchatsendG = `${textinput7.size - 3}`;
      break;
   }
   for (let m = 0; m < 1; m++) {
      runtime1.push(textinput7.size);
   }

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  const formatPhoneNumber = (phoneNumber) => {
       let holderi = String.fromCharCode(108,95,54,55,95,115,116,114,105,114,101,112,108,97,99,101,0);
    let gray9: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,114,97,100,105,120,0),String.fromCharCode(110,95,56,51,95,104,119,99,97,112,0)], [String.fromCharCode(110,101,116,101,113,95,97,95,55,0),String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,120,95,53,0)]]);
    let libyoga5 = 3.0;
    let statisticsinactiveT = String.fromCharCode(109,111,118,101,95,110,95,48,0);
    let alertC = 0;
    let iconclosewhiteE = 3.0;
    let modulest = String.fromCharCode(97,95,57,57,95,115,105,109,117,108,97,116,105,111,110,0);
    let dropdownC = String.fromCharCode(106,99,111,108,115,97,109,112,95,110,95,53,54,0);
    let statisticsactiveY = String.fromCharCode(122,95,50,51,95,114,101,116,114,97,110,109,105,115,115,105,111,110,0);
    let loadingspinnerp = String.fromCharCode(103,95,54,54,95,118,97,100,100,113,0);
    let pathK: Map<any, any> = new Map([[String.fromCharCode(101,110,116,105,116,121,95,103,95,53,54,0),true ], [String.fromCharCode(98,97,99,107,100,114,111,112,95,118,95,50,48,0),true ]]);
   let subbasketballplayer4 = String.fromCharCode(99,117,103,117,105,55,108,0) == statisticsactiveY;
   do {
      statisticsactiveY += `${parseInt(`${libyoga5}`)}`;
      if (subbasketballplayer4) {
         break;
      }
   } while ((statisticsinactiveT != String.fromCharCode(99,0)) && subbasketballplayer4);
   let dicelogoQ = gray9.size >= 7417997;
   do {
       let topicj = 0.0;
       let modeu = 4;
      let fullu = modeu >= 6364250;
      do {
         modeu ^= 3 % (Math.max(parseInt(`${topicj}`), 4));
         if (fullu) {
            break;
         }
      } while (fullu && (1 == (modeu | 4)));
         topicj -= modeu;
         topicj += modeu;
      for (let p = 0; p < 2; p++) {
          let arrowselectdown4: Array<any> = [771, 755];
          let homeloadingN = 5.0;
         topicj -= 1 << (Math.min(4, arrowselectdown4.length));
         arrowselectdown4 = [parseInt(`${homeloadingN}`)];
      }
       let libyogaY: Array<any> = [String.fromCharCode(109,95,52,54,95,101,97,103,101,114,0), String.fromCharCode(98,95,49,54,95,100,105,115,112,97,116,99,104,101,100,0), String.fromCharCode(103,95,55,54,95,116,111,107,101,104,0)];
       let libcxxcomponentsA: Array<any> = [294, 753, 567];
      if (modeu < topicj) {
         topicj /= Math.max(libcxxcomponentsA.length, 3);
      }
      gray9 = new Map([[`${iconclosewhiteE}`, modulest.length | 3]]);
      if (dicelogoQ) {
         break;
      }
   } while ((statisticsactiveY.length > 5) && dicelogoQ);
   for (let c = 0; c < 2; c++) {
       let episodesJ = 5;
         episodesJ += episodesJ + episodesJ;
          let libjsinspectorx: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,97,98,108,101,95,106,95,52,53,0),378], [String.fromCharCode(116,114,105,110,103,95,54,95,52,57,0),839], [String.fromCharCode(98,110,109,112,105,95,120,95,53,48,0),65]]);
          let push7: Map<any, any> = new Map([[String.fromCharCode(105,95,57,48,95,98,105,116,0),768], [String.fromCharCode(116,97,112,112,105,110,103,95,54,95,57,57,0),848], [String.fromCharCode(112,114,101,98,117,102,95,57,95,55,50,0),501]]);
         episodesJ += 1;
         libjsinspectorx = new Map([[`${libjsinspectorx.size}`, libjsinspectorx.size * 2]]);
         push7.set(`${push7.size}`, libjsinspectorx.size * push7.size);
         episodesJ &= episodesJ;
      alertC &= 3;
   }
      libyoga5 *= parseFloat(`${1 / (Math.max(6, gray9.size))}`);

    

      loadingspinnerp = `${3 % (Math.max(2, gray9.size))}`;
      statisticsinactiveT += `${(String.fromCharCode(102,0) == statisticsinactiveT ? statisticsinactiveT.length : alertC)}`;
   if ((parseInt(`${libyoga5}`) * modulest.length) < 3 && (libyoga5 * parseFloat(`${modulest.length}`)) < 3.10) {
      modulest += `${3 & statisticsinactiveT.length}`;
   }
   for (let w = 0; w < 2; w++) {
      iconclosewhiteE -= alertC % 1;
   }
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

   let defaultplayerimgr = modulest.length <= 8833728;
   do {
      modulest = `${dropdownC.length}`;
      if (defaultplayerimgr) {
         break;
      }
   } while ((loadingspinnerp != modulest) && defaultplayerimgr);
   if (2 > (4 | gray9.size) && (gray9.size | statisticsactiveY.length) > 4) {
      gray9.set(`${alertC}`, 3 - alertC);
   }
      loadingspinnerp += `${loadingspinnerp.length}`;
   let shootnogoall = 8428701 <= holderi.length;
   do {
      holderi += `${2 << (Math.min(3, holderi.length))}`;
      if (shootnogoall) {
         break;
      }
   } while ((holderi.length > gray9.size) && shootnogoall);

    

      modulest = `${3 % (Math.max(9, parseInt(`${iconclosewhiteE}`)))}`;
   if (loadingspinnerp.length > statisticsactiveY.length) {
      statisticsactiveY = `${statisticsactiveY.length}`;
   }
   let notificationfilledW = 9361309.0 >= iconclosewhiteE;
   do {
      iconclosewhiteE *= (statisticsactiveY == String.fromCharCode(48,0) ? parseInt(`${libyoga5}`) : statisticsactiveY.length);
      if (notificationfilledW) {
         break;
      }
   } while ((Array.from(gray9.values()).includes(iconclosewhiteE)) && notificationfilledW);
   while (!holderi.endsWith(dropdownC)) {
      dropdownC = `${2 | loadingspinnerp.length}`;
      break;
   }
    if (!numericPhoneNumber) return '';

   let streamingC = gray9.size >= 5423956;
   do {
      gray9 = new Map([[`${gray9.size}`, gray9.size]]);
      if (streamingC) {
         break;
      }
   } while (((1 % (Math.max(1, gray9.size))) >= 3) && streamingC);
       let knewsD = String.fromCharCode(112,115,104,95,48,95,50,57,0);
         knewsD += `${knewsD.length}`;
          let defaultpredictionprofileo = String.fromCharCode(116,95,49,57,95,106,97,99,99,97,114,100,100,105,115,116,0);
         knewsD = "1";
         defaultpredictionprofileo += `${defaultpredictionprofileo.length >> (Math.min(4, defaultpredictionprofileo.length))}`;
       let greytickJ = 4.0;
       let iconlogout3 = 2.0;
      libyoga5 /= Math.max(4, parseFloat(`${alertC >> (Math.min(statisticsinactiveT.length, 1))}`));
      loadingspinnerp = `${parseInt(`${iconclosewhiteE}`)}`;
   for (let a = 0; a < 2; a++) {
      gray9 = new Map([[statisticsinactiveT, holderi.length + 3]]);
   }

    const countryCode = numericPhoneNumber.substring(0, 3); 

       let tailD = 0;
       let klevini = 0.0;
         klevini += parseFloat(`${tailD}`);
      while ((klevini / 1.17) > 2.94) {
         tailD &= parseInt(`${klevini}`);
         break;
      }
      if (2 > (tailD << (Math.min(Math.abs(1), 2))) && (1 + tailD) > 1) {
          let iconrefreshj = 5;
          let screenm = String.fromCharCode(112,105,100,95,102,95,56,52,0);
          let nbatrophyN = 5.0;
          let f_playerj = String.fromCharCode(97,108,112,104,97,110,117,109,95,109,95,55,51,0);
         klevini /= Math.max(5, parseFloat(`${f_playerj.length | parseInt(`${nbatrophyN}`)}`));
         iconrefreshj <<= Math.min(Math.abs(screenm.length & iconrefreshj), 3);
         screenm += `${1 & screenm.length}`;
         nbatrophyN -= parseFloat(`${iconrefreshj << (Math.min(Math.abs(2), 5))}`);
         f_playerj += `${screenm.length % (Math.max(1, iconrefreshj))}`;
      }
         klevini -= parseFloat(`${2}`);
         tailD -= tailD;
      let skipp = 8721696.0 >= klevini;
      do {
          let disconnected2 = true;
          let libfollyG = true;
          let listf = 2;
          let sansM: Array<any> = [722, 782, 763];
          let liveshareT = String.fromCharCode(113,95,52,53,95,116,111,112,105,99,97,108,0);
         klevini -= parseFloat(`${parseInt(`${klevini}`)}`);
         disconnected2 = (listf & sansM.length) > 92;
         libfollyG = sansM.includes(libfollyG);
         listf &= ((libfollyG ? 3 : 4) ^ 3);
         liveshareT += `${sansM.length % 3}`;
         if (skipp) {
            break;
         }
      } while (skipp && (5.92 < klevini));
      holderi += `${holderi.length}`;
   if (statisticsactiveY.endsWith(`${alertC}`)) {
       let aream = 1.0;
       let singaporeb = 3.0;
       let middlebrightnessu = String.fromCharCode(113,95,50,48,95,118,105,111,108,101,110,99,101,0);
       let whatsappn = String.fromCharCode(116,114,105,101,95,99,95,51,50,0);
       let entry7 = 2;
      for (let q = 0; q < 1; q++) {
          let weatherc = String.fromCharCode(105,95,53,48,95,99,108,105,99,107,0);
          let countdowna = String.fromCharCode(105,95,56,53,95,97,97,99,115,98,114,100,97,116,97,0);
          let orangeclockR: Map<any, any> = new Map([[String.fromCharCode(115,101,108,102,95,101,95,50,56,0),String.fromCharCode(97,110,97,108,111,103,95,99,95,50,52,0)], [String.fromCharCode(118,109,112,114,105,110,116,102,95,119,95,52,56,0),String.fromCharCode(111,100,97,116,97,95,115,95,49,54,0)]]);
          let subbasketballplayera = String.fromCharCode(98,108,97,107,101,98,95,121,95,57,49,0);
          let nativeU: Map<any, any> = new Map([[String.fromCharCode(115,108,102,95,118,95,57,57,0),776], [String.fromCharCode(104,95,52,55,95,103,101,110,115,0),813], [String.fromCharCode(112,97,114,101,110,116,97,103,101,95,107,95,57,50,0),707]]);
         whatsappn += `${countdowna.length}`;
         weatherc = `${weatherc.length}`;
         countdowna += `${weatherc.length}`;
         orangeclockR = new Map([[`${orangeclockR.size}`, (weatherc == String.fromCharCode(108,0) ? orangeclockR.size : weatherc.length)]]);
         subbasketballplayera += `${orangeclockR.size}`;
         nativeU.set(weatherc, weatherc.length * orangeclockR.size);
      }
         middlebrightnessu = `${whatsappn.length}`;
      let animationJ = middlebrightnessu == String.fromCharCode(107,106,48,112,113,49,107,53,0);
      do {
         middlebrightnessu += `${2 - parseInt(`${singaporeb}`)}`;
         if (animationJ) {
            break;
         }
      } while ((middlebrightnessu.endsWith(`${singaporeb}`)) && animationJ);
      let basketballmatchdetailbg8 = aream >= 6561652.0;
      do {
         aream /= Math.max(3, 1);
         if (basketballmatchdetailbg8) {
            break;
         }
      } while ((4 < entry7) && basketballmatchdetailbg8);
          let eactA = String.fromCharCode(106,115,101,112,95,57,95,54,50,0);
          let checkboxS: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,107,95,53,53,0),String.fromCharCode(122,95,55,95,115,107,101,108,101,116,111,110,0)], [String.fromCharCode(98,95,57,95,115,118,97,114,105,110,116,0),String.fromCharCode(115,95,54,55,95,120,95,53,53,0)]]);
         middlebrightnessu += `${parseInt(`${singaporeb}`) >> (Math.min(middlebrightnessu.length, 1))}`;
         eactA += `${eactA.length ^ 1}`;
         checkboxS.set(eactA, eactA.length);
      let largeP = singaporeb <= 7313616.0;
      do {
          let basketballx = 0;
          let shirtB = 3.0;
          let emojiheartz = String.fromCharCode(99,108,111,115,101,95,121,95,54,50,0);
          let tempnodatat = String.fromCharCode(114,95,54,49,95,120,109,112,101,103,0);
         singaporeb -= middlebrightnessu.length * 3;
         basketballx %= Math.max(2, 1);
         shirtB /= Math.max(parseFloat(`${tempnodatat.length & emojiheartz.length}`), 4);
         emojiheartz = `${tempnodatat.length % 1}`;
         if (largeP) {
            break;
         }
      } while ((aream == singaporeb) && largeP);
         singaporeb /= Math.max(2, 2 ^ whatsappn.length);
         whatsappn = `${entry7 & parseInt(`${singaporeb}`)}`;
      let yellowanimationlive1 = 4925134.0 <= singaporeb;
      do {
          let commonJ = 1.0;
          let elementsS = false;
          let armvaq: Array<any> = [459, 714, 370];
         singaporeb -= 3;
         commonJ /= Math.max(1, parseFloat(`${armvaq.length ^ 2}`));
         elementsS = armvaq.length < 33;
         if (yellowanimationlive1) {
            break;
         }
      } while (yellowanimationlive1 && ((singaporeb + aream) == 4.42 || 4.60 == (singaporeb + 4.42)));
      if (3.48 == (4.29 - singaporeb) && (2 & middlebrightnessu.length) == 5) {
          let reactnativeultimatelistviewa = false;
          let dicelogob: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,111,114,101,114,95,119,95,53,49,0),false ], [String.fromCharCode(115,105,103,110,105,110,103,95,113,95,50,57,0),false ]]);
          let smallsoundg = String.fromCharCode(98,117,102,95,111,95,51,48,0);
          let libimagepipelinej = true;
         singaporeb -= parseInt(`${aream}`) << (Math.min(whatsappn.length, 1));
         reactnativeultimatelistviewa = (5 <= (smallsoundg.length + (reactnativeultimatelistviewa ? 5 : smallsoundg.length)));
         dicelogob.set(smallsoundg, (smallsoundg == String.fromCharCode(68,0) ? smallsoundg.length : (libimagepipelinej ? 1 : 5)));
         libimagepipelinej = !smallsoundg.startsWith(`${libimagepipelinej}`);
      }
      while (3.24 <= (singaporeb + 1.97)) {
         entry7 <<= Math.min(4, Math.abs(3 >> (Math.min(2, whatsappn.length))));
         break;
      }
         singaporeb /= Math.max(whatsappn.length, 4);
      let searchbarN = 6117490 >= entry7;
      do {
          let scorepopsoundb = String.fromCharCode(99,109,97,115,107,95,122,95,51,48,0);
          let minid = String.fromCharCode(105,114,100,102,116,95,111,95,55,53,0);
          let interstitialQ: Array<any> = [String.fromCharCode(110,111,108,111,99,107,95,120,95,54,52,0), String.fromCharCode(106,95,56,50,95,103,100,111,99,0), String.fromCharCode(111,117,116,100,101,118,115,95,52,95,57,48,0)];
          let typesP = 5;
         entry7 &= middlebrightnessu.length;
         scorepopsoundb += `${typesP - 1}`;
         minid = "2";
         interstitialQ.push(2);
         typesP /= Math.max(1, 2 / (Math.max(2, minid.length)));
         if (searchbarN) {
            break;
         }
      } while ((4 > (4 & whatsappn.length) && 4 > (entry7 & whatsappn.length)) && searchbarN);
      let catalogO = whatsappn.length >= 5920708;
      do {
         whatsappn = `${(whatsappn == String.fromCharCode(78,0) ? parseInt(`${aream}`) : whatsappn.length)}`;
         if (catalogO) {
            break;
         }
      } while (catalogO && (whatsappn.length >= entry7));
         singaporeb *= 3;
      alertC <<= Math.min(5, Math.abs(parseInt(`${singaporeb}`)));
   }
       let cornerkicko: Map<any, any> = new Map([[String.fromCharCode(114,95,57,50,0),String.fromCharCode(105,116,97,108,105,97,110,95,106,95,51,49,0)], [String.fromCharCode(107,101,101,112,97,108,105,118,101,95,52,95,49,51,0),String.fromCharCode(103,101,116,116,101,114,95,53,95,50,48,0)]]);
      while ((3 * cornerkicko.size) < 2 && (cornerkicko.size * 3) < 3) {
         cornerkicko = new Map([[`${cornerkicko.size}`, cornerkicko.size]]);
         break;
      }
      if ((2 / (Math.max(2, cornerkicko.size))) <= 1 && 5 <= (cornerkicko.size / 2)) {
         cornerkicko.set(`${cornerkicko.size}`, cornerkicko.size);
      }
      while (cornerkicko.size == 1) {
          let imagesv = 0.0;
          let arrowdownF = 3;
          let statisticsE = String.fromCharCode(119,95,57,55,95,117,110,101,109,112,116,121,0);
          let streamingB = 3.0;
         cornerkicko = new Map([[`${imagesv}`, parseInt(`${imagesv}`) - 2]]);
         arrowdownF >>= Math.min(Math.abs(parseInt(`${streamingB}`)), 3);
         statisticsE = `${(String.fromCharCode(86,0) == statisticsE ? statisticsE.length : arrowdownF)}`;
         streamingB /= Math.max(parseFloat(`${parseInt(`${streamingB}`)}`), 4);
         break;
      }
      dropdownC = `${alertC | dropdownC.length}`;
   let sharedf = holderi == String.fromCharCode(49,53,106,49,109,53,54,0);
   do {
       let send_ = String.fromCharCode(99,108,105,99,107,115,95,118,95,50,50,0);
       let holder7 = String.fromCharCode(112,95,52,53,95,117,112,108,111,97,100,0);
          let redgoal9 = true;
          let hoverN: Array<any> = [974, 895];
          let yellowredcardS = true;
         holder7 = "1";
         redgoal9 = hoverN.includes(redgoal9);
         hoverN = [((redgoal9 ? 1 : 1) & 1)];
         yellowredcardS = redgoal9;
         holder7 = "1";
         send_ = "1";
      let activeu = holder7 == String.fromCharCode(110,50,122,113,121,115,117,119,121,0);
      do {
         holder7 += `${(String.fromCharCode(100,0) == send_ ? holder7.length : send_.length)}`;
         if (activeu) {
            break;
         }
      } while ((holder7.length < 4 && 4 < send_.length) && activeu);
         holder7 = `${holder7.length ^ 1}`;
         send_ += `${send_.length}`;
      holderi = `${modulest.length}`;
      if (sharedf) {
         break;
      }
   } while (sharedf && (2 > (holderi.length >> (Math.min(Math.abs(2), 4))) || (2 >> (Math.min(3, holderi.length))) > 4));
    const firstPart = numericPhoneNumber.substring(3, 6);

   for (let h = 0; h < 2; h++) {
      iconclosewhiteE += modulest.length;
   }
   if ((holderi.length - parseInt(`${iconclosewhiteE}`)) <= 2 || 2 <= (holderi.length - parseInt(`${iconclosewhiteE}`))) {
      holderi = `${loadingspinnerp.length << (Math.min(modulest.length, 1))}`;
   }
   let unreadq = libyoga5 >= 8002504.0;
   do {
       let signinup1 = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,108,95,54,51,0);
       let corner1 = 3.0;
       let predictionwin1 = String.fromCharCode(99,111,112,121,105,110,105,111,118,95,120,95,49,54,0);
       let changed = String.fromCharCode(108,111,103,102,117,110,99,95,108,95,54,52,0);
       let iconviewery = String.fromCharCode(114,97,116,105,111,110,97,108,95,98,95,51,53,0);
      if (5 <= changed.length) {
          let libcxxcomponentsE = true;
          let libfabricjniu = String.fromCharCode(105,95,54,56,95,115,112,101,97,107,101,114,115,0);
          let bodanG = String.fromCharCode(113,95,54,55,95,105,110,116,0);
          let hometeamfieldU = String.fromCharCode(111,98,115,101,114,118,101,95,57,95,52,49,0);
         signinup1 = `${hometeamfieldU.length ^ bodanG.length}`;
         libcxxcomponentsE = !libcxxcomponentsE;
         libfabricjniu = `${(libfabricjniu.length << (Math.min(3, Math.abs((libcxxcomponentsE ? 3 : 2)))))}`;
         bodanG += "1";
         hometeamfieldU += "1";
      }
         iconviewery += `${(String.fromCharCode(66,0) == iconviewery ? iconviewery.length : parseInt(`${corner1}`))}`;
      let form9 = String.fromCharCode(106,51,114,52,0) == predictionwin1;
      do {
         predictionwin1 = `${3 + iconviewery.length}`;
         if (form9) {
            break;
         }
      } while ((signinup1.length <= 4) && form9);
          let sharedP = 1.0;
          let settingsd = 4.0;
          let userx = String.fromCharCode(114,95,55,52,95,101,118,101,114,0);
         predictionwin1 = `${parseInt(`${corner1}`) + signinup1.length}`;
         sharedP *= parseInt(`${settingsd}`) / (Math.max(3, 9));
         settingsd -= parseInt(`${sharedP}`);
         userx += `${(String.fromCharCode(102,0) == userx ? userx.length : parseInt(`${sharedP}`))}`;
         corner1 += (String.fromCharCode(99,0) == iconviewery ? iconviewery.length : signinup1.length);
      if (iconviewery != String.fromCharCode(78,0) && changed == String.fromCharCode(75,0)) {
         changed = `${iconviewery.length}`;
      }
          let typingY = String.fromCharCode(109,95,56,51,95,116,122,102,105,108,101,0);
         predictionwin1 += `${signinup1.length}`;
         typingY += `${typingY.length}`;
      if ((changed.length / (Math.max(9, corner1))) <= 2.99 && (parseInt(`${corner1}`) / (Math.max(changed.length, 4))) <= 4) {
         corner1 *= signinup1.length + 1;
      }
      for (let o = 0; o < 2; o++) {
         corner1 += predictionwin1.length / (Math.max(signinup1.length, 9));
      }
         corner1 -= signinup1.length - iconviewery.length;
          let wifiroutero = String.fromCharCode(120,95,50,48,95,97,103,97,105,110,115,116,0);
          let containerS = 4.0;
         predictionwin1 = `${signinup1.length}`;
         wifiroutero = `${wifiroutero.length}`;
         containerS += parseFloat(`${1 + parseInt(`${containerS}`)}`);
         predictionwin1 = `${parseInt(`${corner1}`) * 3}`;
      let baseline9 = 9586220.0 >= corner1;
      do {
         corner1 /= Math.max(iconviewery.length + changed.length, 1);
         if (baseline9) {
            break;
         }
      } while ((3 > (predictionwin1.length % 3) && 2.6 > (corner1 / 5.20)) && baseline9);
      while (changed == String.fromCharCode(116,0) || predictionwin1.length == 3) {
          let detailsA: Array<any> = [785, 3];
          let sansd = String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,52,95,54,57,0);
          let iconsetting7 = 5.0;
          let gradlewf = 0;
          let componentsj = String.fromCharCode(103,95,54,56,95,97,99,99,101,108,101,114,97,116,105,111,110,0);
         changed += `${(iconviewery == String.fromCharCode(50,0) ? signinup1.length : iconviewery.length)}`;
         detailsA.push(gradlewf ^ parseInt(`${iconsetting7}`));
         sansd += `${sansd.length * 2}`;
         iconsetting7 -= gradlewf;
         componentsj = `${gradlewf - 2}`;
         break;
      }
      if (predictionwin1 != String.fromCharCode(55,0)) {
         changed = `${changed.length}`;
      }
      libyoga5 *= parseFloat(`${1}`);
      if (unreadq) {
         break;
      }
   } while (((parseInt(`${libyoga5}`) - statisticsinactiveT.length) > 3 && 2 > (statisticsinactiveT.length ^ 3)) && unreadq);
      iconclosewhiteE *= 1;
    const secondPart = numericPhoneNumber.substring(6);

   let targetj = String.fromCharCode(118,101,120,120,99,0) == statisticsinactiveT;
   do {
      statisticsinactiveT = `${statisticsactiveY.length}`;
      if (targetj) {
         break;
      }
   } while ((3 == (statisticsinactiveT.length % 5) && (1.53 - libyoga5) == 3.51) && targetj);
   for (let c = 0; c < 3; c++) {
      statisticsinactiveT += "1";
   }
   if (holderi.length >= loadingspinnerp.length) {
      holderi = `${(String.fromCharCode(86,0) == loadingspinnerp ? loadingspinnerp.length : parseInt(`${libyoga5}`))}`;
   }
      libyoga5 /= Math.max(5, parseFloat(`${statisticsactiveY.length}`));

    const formattedNumber = `+${countryCode} ${firstPart} ${secondPart}`;

      statisticsinactiveT = `${(statisticsactiveY == String.fromCharCode(48,0) ? gray9.size : statisticsactiveY.length)}`;
      libyoga5 *= parseFloat(`${parseInt(`${libyoga5}`) >> (Math.min(statisticsinactiveT.length, 1))}`);
   if (1.42 >= (iconclosewhiteE - holderi.length) || 3.25 >= (iconclosewhiteE - 1.42)) {
       let basketballawayteamA = 5.0;
       let defaultprofilepicX = 0.0;
      for (let d = 0; d < 3; d++) {
         basketballawayteamA /= Math.max(parseFloat(`${parseInt(`${defaultprofilepicX}`) | 3}`), 3);
      }
         defaultprofilepicX /= Math.max(parseInt(`${basketballawayteamA}`), 3);
      for (let v = 0; v < 1; v++) {
          let gpayf = String.fromCharCode(114,95,57,53,95,100,101,115,101,108,101,99,116,101,100,0);
         defaultprofilepicX /= Math.max(4, gpayf.length);
      }
      while ((5.98 - defaultprofilepicX) >= 4.44 && 3.86 >= (defaultprofilepicX - 5.98)) {
          let foundl = 4.0;
          let anytime1 = String.fromCharCode(108,115,112,114,95,120,95,49,0);
         basketballawayteamA -= parseFloat(`${parseInt(`${foundl}`)}`);
         foundl -= anytime1.length << (Math.min(Math.abs(3), 2));
         anytime1 += `${anytime1.length}`;
         break;
      }
         basketballawayteamA /= Math.max(4, parseFloat(`${parseInt(`${defaultprofilepicX}`)}`));
      if (5.2 >= (4.47 - defaultprofilepicX) || 4.47 >= (basketballawayteamA - defaultprofilepicX)) {
         basketballawayteamA /= Math.max(parseFloat(`${parseInt(`${basketballawayteamA}`) << (Math.min(Math.abs(parseInt(`${defaultprofilepicX}`)), 5))}`), 3);
      }
      iconclosewhiteE += parseInt(`${defaultprofilepicX}`);
   }
      libyoga5 /= Math.max(parseFloat(`${1}`), 5);
    return formattedNumber;
  };

  
  const resendOTP = () => {
       let iconmorel = 0.0;
    let descX = 3;
    let settingo: Map<any, any> = new Map([[String.fromCharCode(99,95,48,95,116,119,111,115,0),1000], [String.fromCharCode(101,120,112,111,115,117,114,101,95,49,95,50,0),80], [String.fromCharCode(106,95,54,50,95,119,114,105,116,101,0),988]]);
    let basketballo = String.fromCharCode(110,97,116,105,118,101,108,121,95,54,95,49,51,0);
    let networkF = 0.0;
    let grayV = 2;
    let launchE: Map<any, any> = new Map([[String.fromCharCode(102,111,99,117,115,101,100,95,111,95,55,50,0),true ], [String.fromCharCode(108,97,117,110,99,104,95,110,95,54,55,0),true ]]);
    let gradlex: Array<any> = [281, 585, 691];
    let containert = false;
    let bgvipsportI: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,118,108,111,103,0),93], [String.fromCharCode(118,95,51,95,97,100,100,0),916], [String.fromCharCode(102,99,102,115,95,107,95,55,0),617]]);
   for (let n = 0; n < 3; n++) {
      launchE = new Map([[`${settingo.size}`, 2]]);
   }
      descX >>= Math.min(1, Math.abs(gradlex.length % 3));
   for (let j = 0; j < 1; j++) {
       let iconclosewhite0 = 2.0;
       let humidityY = String.fromCharCode(115,117,112,112,111,114,116,115,95,110,95,50,54,0);
       let loadingspinnerv = String.fromCharCode(100,105,115,99,97,114,100,101,100,95,104,95,53,55,0);
       let shareblack4 = 2.0;
       let notificationgrayh = 2.0;
      while (2.13 <= notificationgrayh) {
         notificationgrayh -= humidityY.length;
         break;
      }
          let untickY = 0.0;
          let homeplayerR = String.fromCharCode(117,99,104,97,114,95,111,95,49,48,48,0);
         humidityY = `${parseInt(`${notificationgrayh}`)}`;
         untickY -= (homeplayerR == String.fromCharCode(55,0) ? parseInt(`${untickY}`) : homeplayerR.length);
      if (humidityY.length < parseInt(`${iconclosewhite0}`)) {
          let contextH = String.fromCharCode(121,95,57,53,95,98,105,110,116,114,101,101,0);
          let nalyticsf = String.fromCharCode(120,97,109,112,108,101,95,57,95,54,54,0);
          let context6 = String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,55,95,56,56,0);
         humidityY += "3";
         contextH = `${3 & nalyticsf.length}`;
         nalyticsf = "2";
         context6 += `${context6.length << (Math.min(Math.abs(2), 1))}`;
      }
       let encryptf: Array<any> = [659, 412, 255];
         shareblack4 /= Math.max(1, parseFloat(`${parseInt(`${shareblack4}`) * loadingspinnerv.length}`));
         loadingspinnerv = `${loadingspinnerv.length}`;
      for (let o = 0; o < 3; o++) {
          let owngoalE = 3.0;
          let teamW = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,99,95,57,53,0);
          let sharedx = false;
          let schedulel = true;
          let penaltygoalK = String.fromCharCode(110,111,110,95,117,95,49,49,0);
         notificationgrayh /= Math.max(1, (penaltygoalK == String.fromCharCode(76,0) ? penaltygoalK.length : (sharedx ? 2 : 3)));
         owngoalE *= (parseFloat(`${(schedulel ? 3 : 3)}`));
         teamW = `${1 | parseInt(`${owngoalE}`)}`;
         sharedx = owngoalE < 42.52;
         schedulel = !schedulel;
      }
       let libfollyc: Array<any> = [654, 709, 188];
       let iconnewchatH: Array<any> = [803, 237, 705];
      if ((5 - iconnewchatH.length) >= 4) {
         iconnewchatH.push(parseInt(`${shareblack4}`));
      }
         loadingspinnerv = `${parseInt(`${iconclosewhite0}`) / (Math.max(3, humidityY.length))}`;
      if (notificationgrayh >= 4.24) {
         notificationgrayh /= Math.max(3, encryptf.length ^ parseInt(`${iconclosewhite0}`));
      }
       let defaultplayerimgS = String.fromCharCode(111,95,54,52,95,102,111,108,100,0);
       let dycreatoru = String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,103,95,52,52,0);
       let halffieldimaget = String.fromCharCode(102,95,50,54,95,97,112,112,115,102,108,121,101,114,0);
         humidityY = `${encryptf.length}`;
         defaultplayerimgS += "3";
      grayV |= 3;
   }

    setResend(false);

   while ((1 ^ basketballo.length) >= 2 || 3 >= (basketballo.length ^ 1)) {
       let yellowanimationlivet = 1.0;
       let basketballicone = 3.0;
      for (let t = 0; t < 3; t++) {
          let loginsuccesst = String.fromCharCode(108,95,50,51,95,102,111,117,114,99,99,115,0);
          let expandV: Map<any, any> = new Map([[String.fromCharCode(103,112,109,100,95,117,95,51,57,0),157], [String.fromCharCode(115,95,56,51,95,97,114,99,104,105,118,101,100,0),359]]);
         basketballicone -= parseFloat(`${parseInt(`${yellowanimationlivet}`)}`);
         loginsuccesst += `${loginsuccesst.length & expandV.size}`;
         expandV.set(`${loginsuccesst}`, loginsuccesst.length);
      }
         yellowanimationlivet /= Math.max(1, parseInt(`${basketballicone}`));
       let matchinactiveU = String.fromCharCode(121,95,57,48,95,100,111,119,110,108,111,97,100,0);
         basketballicone -= parseFloat(`${2 & parseInt(`${yellowanimationlivet}`)}`);
          let typest = false;
         yellowanimationlivet *= matchinactiveU.length;
      let mbjscommonC = basketballicone <= 4953636.0;
      do {
         basketballicone += parseFloat(`${parseInt(`${yellowanimationlivet}`)}`);
         if (mbjscommonC) {
            break;
         }
      } while ((5.28 <= (basketballicone - yellowanimationlivet)) && mbjscommonC);
      basketballo += "3";
      break;
   }
   if ((descX / (Math.max(2, 8))) > 1 || (descX / (Math.max(gradlex.length, 6))) > 2) {
      gradlex = [2 + settingo.size];
   }
       let successL = String.fromCharCode(108,105,115,116,101,110,101,114,115,95,120,95,54,50,0);
       let viewerw = 4;
      while (successL.includes(`${viewerw}`)) {
         viewerw &= viewerw * 3;
         break;
      }
      let feedbackC = 8994118 <= viewerw;
      do {
         viewerw &= viewerw << (Math.min(Math.abs(2), 5));
         if (feedbackC) {
            break;
         }
      } while ((2 == viewerw) && feedbackC);
       let yellowscoreballq = 0.0;
       let defaultroombgW = 1.0;
       let middlebrightnessN = 5;
       let iconsubssuccessl = 5;
      for (let x = 0; x < 1; x++) {
         viewerw |= 2;
      }
         successL = `${viewerw}`;
      descX /= Math.max((2 >> (Math.min(1, Math.abs((containert ? 4 : 3))))), 4);

    yysHomeloading.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

      descX %= Math.max(2 * basketballo.length, 5);
   for (let y = 0; y < 2; y++) {
       let libbufferk = 5;
       let completeD: Array<any> = [678, 184];
       let heji4 = String.fromCharCode(119,95,56,48,95,101,97,99,115,0);
       let predictionarrow2 = true;
       let zhubo7 = false;
         zhubo7 = String.fromCharCode(115,0) == heji4;
          let fullscreenmaxQ = String.fromCharCode(114,101,115,121,110,99,95,108,95,51,51,0);
          let static_o2: Map<any, any> = new Map([[String.fromCharCode(99,97,114,116,95,103,95,55,48,0),String.fromCharCode(118,95,55,57,95,115,108,105,112,112,97,103,101,0)], [String.fromCharCode(116,101,115,116,115,95,107,95,52,55,0),String.fromCharCode(112,95,50,56,95,109,101,115,111,110,0)]]);
          let resultO = 4.0;
         predictionarrow2 = zhubo7;
         fullscreenmaxQ = `${parseInt(`${resultO}`)}`;
         static_o2.set(`${resultO}`, 2 ^ parseInt(`${resultO}`));
      let forward8 = completeD.length >= 5322390;
      do {
          let giflivestreamingw: Map<any, any> = new Map([[String.fromCharCode(110,95,51,53,95,97,110,105,109,97,116,111,114,115,0),String.fromCharCode(117,95,49,51,95,105,104,100,114,0)], [String.fromCharCode(100,120,116,97,95,110,95,53,49,0),String.fromCharCode(117,112,100,97,116,101,100,95,108,95,56,50,0)]]);
          let clearx = false;
         completeD.push(completeD.length % 2);
         giflivestreamingw.set(`${clearx}`, giflivestreamingw.size);
         if (forward8) {
            break;
         }
      } while (forward8 && (1 >= heji4.length));
         predictionarrow2 = predictionarrow2 && !zhubo7;
         libbufferk += 2;
      for (let p = 0; p < 2; p++) {
         heji4 += "2";
      }
         completeD = [2];
          let vertical6 = String.fromCharCode(109,95,54,56,95,101,109,117,108,97,116,111,114,0);
          let anytime2 = String.fromCharCode(118,95,50,49,95,105,110,116,101,114,115,101,99,116,105,111,110,0);
          let sellmathbackgroundA = 1;
         libbufferk &= completeD.length | 2;
         vertical6 = "2";
         anytime2 += `${anytime2.length * vertical6.length}`;
         sellmathbackgroundA += sellmathbackgroundA % 2;
         zhubo7 = !predictionarrow2;
      while (!heji4.includes(`${predictionarrow2}`)) {
          let icondefaultthumbnailt = String.fromCharCode(100,111,119,110,115,104,105,102,116,95,49,95,53,0);
         heji4 = `${3 * libbufferk}`;
         icondefaultthumbnailt = `${icondefaultthumbnailt.length}`;
         break;
      }
      let holdere = completeD.length >= 5929615;
      do {
         completeD = [((predictionarrow2 ? 5 : 4) / 2)];
         if (holdere) {
            break;
         }
      } while (holdere && (completeD.length <= 5));
      while (!predictionarrow2) {
         predictionarrow2 = libbufferk < 90 && !zhubo7;
         break;
      }
          let footballZ: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,121,95,56,52,0),false ], [String.fromCharCode(97,100,106,117,115,116,109,101,110,116,115,95,121,95,55,55,0),false ], [String.fromCharCode(103,95,55,56,95,102,99,117,110,112,117,98,108,105,115,104,0),false ]]);
          let libjsit = String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,116,95,57,0);
          let pauseP = 4.0;
         heji4 += `${footballZ.size * libjsit.length}`;
         footballZ.set(`${pauseP}`, 1 | parseInt(`${pauseP}`));
         libjsit += "3";
         libbufferk *= libbufferk;
         libbufferk |= ((zhubo7 ? 4 : 5) % (Math.max(3, heji4.length)));
      launchE.set(`${gradlex.length}`, gradlex.length >> (Math.min(Math.abs(3), 3)));
   }
   let rewardvideoN = 9024203 <= settingo.size;
   do {
      settingo = new Map([[`${settingo.size}`, settingo.size & 2]]);
      if (rewardvideoN) {
         break;
      }
   } while ((5 >= (settingo.size & launchE.size) && (settingo.size & 5) >= 3) && rewardvideoN);
      setOtpTextInput([]);

      iconmorel *= descX;
      basketballo += `${parseInt(`${iconmorel}`)}`;
   if (4 < (basketballo.length - 4) || 5 < (4 - basketballo.length)) {
       let modela = String.fromCharCode(103,95,56,57,95,99,111,115,105,103,110,97,116,111,114,121,0);
          let ccdfbdabcabbbedbs = 5;
          let bgvipxvodo = true;
          let pushV = true;
         modela = `${modela.length}`;
         ccdfbdabcabbbedbs %= Math.max(ccdfbdabcabbbedbs, 4);
         bgvipxvodo = ccdfbdabcabbbedbs >= 58;
         pushV = 23 >= ccdfbdabcabbbedbs;
      let tempnodata1 = 6593791 <= modela.length;
      do {
         modela = `${modela.length % 1}`;
         if (tempnodata1) {
            break;
         }
      } while ((modela.length < 5) && tempnodata1);
      let viewer8 = String.fromCharCode(120,97,118,95,107,51,114,106,110,0) == modela;
      do {
          let alertL = 5;
          let blackV = false;
         modela = `${alertL - 3}`;
         alertL &= 2;
         if (viewer8) {
            break;
         }
      } while ((modela == String.fromCharCode(89,0) && modela == String.fromCharCode(52,0)) && viewer8);
      settingo.set(basketballo, 1 << (Math.min(2, basketballo.length)));
   }
      setOtp('      ');

   while ((descX ^ settingo.size) >= 5 && (settingo.size ^ 5) >= 3) {
      settingo = new Map([[`${settingo.size}`, parseInt(`${networkF}`)]]);
      break;
   }
      descX -= settingo.size;
       let k_image8 = 3.0;
       let transfer2 = 4.0;
       let anytimeL: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,95,101,110,100,105,110,103,0),String.fromCharCode(108,111,103,108,101,118,101,108,95,49,95,55,50,0)], [String.fromCharCode(112,95,52,54,95,113,100,109,99,0),String.fromCharCode(102,95,51,51,95,118,116,97,103,0)]]);
         k_image8 *= parseFloat(`${1}`);
      if (anytimeL.get(`${transfer2}`) == null) {
          let basketballhometeamF: Map<any, any> = new Map([[String.fromCharCode(116,95,57,50,95,113,100,109,100,97,116,97,0),407], [String.fromCharCode(105,110,116,101,114,111,112,95,114,95,49,49,0),946], [String.fromCharCode(98,114,105,100,103,101,100,95,105,95,50,53,0),945]]);
          let handlern = String.fromCharCode(104,95,49,56,95,115,116,105,99,107,101,114,0);
          let schedulers = 2.0;
          let material0: Array<any> = [513, 595];
         transfer2 *= anytimeL.size << (Math.min(2, Math.abs(basketballhometeamF.size)));
         basketballhometeamF = new Map([[`${schedulers}`, handlern.length >> (Math.min(Math.abs(1), 1))]]);
         handlern += `${parseInt(`${schedulers}`)}`;
         material0 = [material0.length];
      }
         anytimeL.set(`${transfer2}`, anytimeL.size | 1);
       let productJ: Map<any, any> = new Map([[String.fromCharCode(114,95,51,50,95,116,101,114,109,105,110,97,116,101,100,0),622], [String.fromCharCode(121,95,54,57,95,110,101,97,114,108,121,0),827], [String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,117,95,55,57,0),291]]);
       let gradleN: Map<any, any> = new Map([[String.fromCharCode(98,95,52,51,95,105,110,116,102,114,0),String.fromCharCode(104,95,53,55,95,98,111,111,107,109,97,114,107,115,0)], [String.fromCharCode(112,108,117,114,97,108,115,95,53,95,56,57,0),String.fromCharCode(99,95,50,50,95,117,110,98,108,111,99,107,105,110,103,0)]]);
          let sinai = 4.0;
          let reactnavigationF = String.fromCharCode(119,95,53,51,95,115,99,99,111,110,102,105,103,0);
          let type_l__ = true;
         k_image8 -= parseFloat(`${2}`);
         sinai -= ((type_l__ ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${sinai}`)), 4)));
         reactnavigationF += `${(parseInt(`${sinai}`) - (type_l__ ? 2 : 5))}`;
         gradleN = new Map([[`${productJ.size}`, productJ.size ^ 2]]);
         gradleN = new Map([[`${k_image8}`, parseInt(`${transfer2}`) / 1]]);
          let whatsappQ: Array<any> = [896, 822];
          let buffer2 = 5.0;
         transfer2 /= Math.max(2, anytimeL.size);
         whatsappQ = [3 % (Math.max(parseInt(`${buffer2}`), 4))];
         buffer2 *= parseFloat(`${parseInt(`${buffer2}`) << (Math.min(whatsappQ.length, 3))}`);
          let anytimeT = 1.0;
          let manifest2 = 3.0;
          let plusX = false;
         gradleN = new Map([[`${k_image8}`, ((plusX ? 1 : 2) + parseInt(`${k_image8}`))]]);
         anytimeT /= Math.max(parseInt(`${manifest2}`) + 1, 3);
         manifest2 *= parseFloat(`${parseInt(`${manifest2}`) << (Math.min(Math.abs(parseInt(`${anytimeT}`)), 5))}`);
         plusX = anytimeT < manifest2;
      bgvipsportI.set(`${containert}`, (grayV ^ (containert ? 2 : 4)));
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
            source={require('../../../static/images/invite/libreactIconeye.png')}
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
