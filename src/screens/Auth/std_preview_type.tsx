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
import umb_center_carousel from '../../../Umeng/umb_center_carousel';
import { THFirebase } from '@api';
import { useSelector } from '@hooks/kg_index';
import { KWConstants } from '@models/kl_sheet';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import LRZTermsScreen from '../../../AppsFlyer/i_dialog';


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
       let with_207 = 2.0;
    let custom1 = String.fromCharCode(114,95,51,57,95,111,118,101,114,108,97,121,115,0);
    let g_positionF = String.fromCharCode(102,95,52,53,95,105,109,112,108,0);
    let anythinkp = String.fromCharCode(112,101,114,102,111,114,109,101,114,95,99,95,52,52,0);
    let unselectedZ = false;
    let cast3 = String.fromCharCode(115,95,55,55,95,114,101,102,99,111,117,110,116,101,100,0);
    let watchp: Array<any> = [75, 903, 896];
    let target3 = 3.0;
    let homew = 2.0;
    let episodeZ = 0;
    let optionsq: Array<any> = [592, 287, 167];
    let gpayE = String.fromCharCode(116,117,110,105,110,103,95,103,95,53,48,0);
    let canvasT = String.fromCharCode(102,95,56,51,95,118,105,97,98,108,101,0);
    let minivodU = 5.0;
    let viewerK: Map<any, any> = new Map([[String.fromCharCode(97,95,52,95,109,97,114,107,117,112,0),484], [String.fromCharCode(100,95,56,51,95,109,101,100,105,97,115,0),383], [String.fromCharCode(98,95,54,57,95,98,114,111,107,101,110,0),288]]);
   while ((5.16 - target3) >= 4.85 || target3 >= 5.16) {
      target3 *= parseFloat(`${parseInt(`${homew}`) / (Math.max(3, 7))}`);
      break;
   }
   for (let k = 0; k < 1; k++) {
       let temperaturee = String.fromCharCode(116,95,52,50,95,112,111,105,110,116,115,0);
       let stationQ = true;
          let constantsq = String.fromCharCode(109,95,51,53,95,111,99,116,101,116,0);
         temperaturee += "1";
         constantsq = `${constantsq.length % 3}`;
       let forward2 = String.fromCharCode(105,95,49,55,95,115,117,102,102,105,120,0);
       let twitterA = String.fromCharCode(99,111,115,116,105,95,55,95,51,50,0);
      while (3 >= forward2.length && stationQ) {
         stationQ = 96 >= temperaturee.length;
         break;
      }
         twitterA += `${(3 >> (Math.min(4, Math.abs((stationQ ? 5 : 2)))))}`;
          let foundB = String.fromCharCode(110,95,52,51,95,99,111,109,109,101,110,116,115,0);
          let settingsi = true;
          let membershipn = String.fromCharCode(120,95,50,49,95,112,99,105,112,104,101,114,116,101,120,116,0);
         stationQ = (97 == ((!stationQ ? membershipn.length : 97) ^ membershipn.length));
         foundB += `${foundB.length}`;
         settingsi = foundB.length <= 72;
          let verticalV = 4.0;
          let friendsS = 0.0;
          let tooltipsi: Array<any> = [586, 797];
         twitterA += `${(temperaturee == String.fromCharCode(84,0) ? (stationQ ? 2 : 1) : temperaturee.length)}`;
         verticalV /= Math.max(3, parseFloat(`${1}`));
         friendsS *= 3 ^ tooltipsi.length;
         tooltipsi.push(parseInt(`${friendsS}`));
      homew += parseInt(`${target3}`);
   }
       let hoverX: Array<any> = [24, 846, 61];
      for (let d = 0; d < 1; d++) {
         hoverX.push(hoverX.length);
      }
          let inviten: Map<any, any> = new Map([[String.fromCharCode(116,95,55,52,95,112,114,101,100,105,99,116,111,114,115,98,0),662], [String.fromCharCode(115,99,111,112,101,115,95,100,95,55,50,0),986], [String.fromCharCode(102,114,97,103,109,101,110,116,115,95,55,95,56,50,0),790]]);
          let hover0 = String.fromCharCode(115,116,97,114,116,95,101,95,53,57,0);
         hoverX.push(hover0.length / 2);
         inviten.set(`${inviten.size}`, inviten.size & 2);
         hover0 += `${3 - inviten.size}`;
       let default_c4f = String.fromCharCode(118,95,57,48,95,118,100,97,115,104,101,114,0);
      g_positionF += `${(String.fromCharCode(50,0) == anythinkp ? anythinkp.length : custom1.length)}`;
      gpayE = "1";
       let detailsf = String.fromCharCode(117,95,49,55,95,112,117,109,112,0);
      let humidityi = detailsf.length >= 7065595;
      do {
         detailsf = "3";
         if (humidityi) {
            break;
         }
      } while (humidityi && (detailsf != String.fromCharCode(73,0) || detailsf == String.fromCharCode(82,0)));
         detailsf = `${2 / (Math.max(7, detailsf.length))}`;
          let roomc = String.fromCharCode(98,108,105,116,95,115,95,55,52,0);
          let mini9 = String.fromCharCode(116,95,54,49,95,114,101,112,108,105,101,115,0);
          let miniS = String.fromCharCode(109,97,112,112,97,98,108,101,95,55,95,51,48,0);
         detailsf = `${(detailsf == String.fromCharCode(73,0) ? detailsf.length : mini9.length)}`;
         roomc = `${miniS.length}`;
         mini9 = `${roomc.length / 2}`;
         miniS += `${miniS.length | roomc.length}`;
      episodeZ *= (String.fromCharCode(70,0) == detailsf ? detailsf.length : optionsq.length);
      anythinkp += `${gpayE.length * 2}`;
   let chinaO = watchp.length <= 9848856;
   do {
      watchp.push(episodeZ ^ 2);
      if (chinaO) {
         break;
      }
   } while ((!optionsq.includes(watchp.length)) && chinaO);
       let langO: Map<any, any> = new Map([[String.fromCharCode(109,97,112,95,121,95,54,52,0),143], [String.fromCharCode(98,95,57,95,105,110,115,116,0),37]]);
       let firebasef = String.fromCharCode(102,111,108,100,101,114,115,95,97,95,55,56,0);
       let k_unlocko: Map<any, any> = new Map([[String.fromCharCode(110,95,49,54,95,109,117,108,104,105,0),true ], [String.fromCharCode(115,95,52,50,95,120,121,122,116,97,98,108,101,115,0),true ], [String.fromCharCode(115,116,97,114,116,95,55,95,50,57,0),true ]]);
         langO = new Map([[`${langO.size}`, langO.size * firebasef.length]]);
         langO = new Map([[`${k_unlocko.size}`, k_unlocko.size]]);
         k_unlocko = new Map([[`${langO.size}`, 3 / (Math.max(8, firebasef.length))]]);
          let windA: Array<any> = [909, 773];
          let indexD = String.fromCharCode(99,104,115,101,116,95,53,95,57,55,0);
         langO = new Map([[`${k_unlocko.size}`, 2]]);
         windA = [windA.length ^ 3];
         indexD += `${indexD.length / (Math.max(3, 1))}`;
         firebasef += "1";
         firebasef = "2";
      let customA = 7637574 >= firebasef.length;
      do {
         firebasef = `${langO.size}`;
         if (customA) {
            break;
         }
      } while (customA && (2 == (langO.size | 5) && (langO.size | 5) == 2));
       let module7 = String.fromCharCode(102,111,114,109,95,105,95,57,50,0);
       let relatedc = String.fromCharCode(119,95,53,56,95,115,98,117,118,0);
      let acceptedI = module7 == String.fromCharCode(108,118,112,54,98,57,0);
      do {
         module7 = `${1 - relatedc.length}`;
         if (acceptedI) {
            break;
         }
      } while ((module7.length < 4) && acceptedI);
      episodeZ -= 3 / (Math.max(1, episodeZ));
   while (5 == gpayE.length) {
       let tickedr = 1.0;
       let macauK: Array<any> = [248, 324];
       let productC: Array<any> = [String.fromCharCode(100,95,57,55,95,116,114,101,122,111,114,0), String.fromCharCode(116,95,56,51,95,98,111,100,101,114,0), String.fromCharCode(99,104,101,99,107,115,95,113,95,52,50,0)];
       let annerY = 5.0;
       let malaysiaq = String.fromCharCode(97,114,112,101,100,95,106,95,55,55,0);
         malaysiaq += `${macauK.length + productC.length}`;
         productC.push(2 - macauK.length);
      let links = macauK.length <= 8847513;
      do {
         macauK.push(productC.length);
         if (links) {
            break;
         }
      } while ((2 < (macauK.length + 4)) && links);
      while (productC.length >= macauK.length) {
          let indicatorR: Array<any> = [417, 296];
          let darkA: Map<any, any> = new Map([[String.fromCharCode(105,116,117,110,101,115,95,105,95,50,57,0),896], [String.fromCharCode(102,105,112,115,95,107,95,53,50,0),155], [String.fromCharCode(118,101,114,116,101,120,95,116,95,49,48,48,0),892]]);
          let spinnerA = 0.0;
          let draga = String.fromCharCode(109,95,51,52,95,97,99,111,110,102,105,103,0);
         productC = [malaysiaq.length / (Math.max(2, 3))];
         indicatorR.push(1);
         darkA.set(`${draga}`, draga.length);
         spinnerA -= parseFloat(`${darkA.size}`);
         break;
      }
      while (4 < (macauK.length ^ productC.length) || (productC.length ^ 4) < 3) {
          let fastforwardX: Map<any, any> = new Map([[String.fromCharCode(115,95,56,56,95,105,110,105,116,101,110,99,0),true ], [String.fromCharCode(112,108,97,121,95,116,95,51,54,0),false ], [String.fromCharCode(116,105,116,108,101,98,97,114,95,100,95,55,53,0),false ]]);
         macauK = [malaysiaq.length];
         fastforwardX.set(`${fastforwardX.size}`, fastforwardX.size - 3);
         break;
      }
      while (4.44 < (4.16 + tickedr)) {
         productC.push(parseInt(`${tickedr}`) << (Math.min(Math.abs(2), 4)));
         break;
      }
      for (let o = 0; o < 2; o++) {
          let recommendationQ: Array<any> = [String.fromCharCode(119,95,50,56,95,103,114,111,101,115,116,108,0), String.fromCharCode(115,95,52,52,95,99,109,105,111,0)];
          let incidentJ = true;
          let style0: Array<any> = [772, 829];
          let routern = 3.0;
          let stationsv = 5.0;
         macauK = [style0.length];
         recommendationQ.push(1 << (Math.min(Math.abs(parseInt(`${routern}`)), 4)));
         incidentJ = recommendationQ.includes(routern);
         style0.push(parseInt(`${stationsv}`));
         stationsv += parseInt(`${routern}`) / (Math.max(4, parseInt(`${stationsv}`)));
      }
      let subsz = 6938583.0 <= annerY;
      do {
         annerY *= parseFloat(`${parseInt(`${tickedr}`)}`);
         if (subsz) {
            break;
         }
      } while (subsz && ((annerY + parseFloat(`${malaysiaq.length}`)) > 1.10 && 3 > (2 - malaysiaq.length)));
          let share5 = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,95,97,95,56,48,0);
          let logoO: Array<any> = [185, 964, 189];
          let gifti = String.fromCharCode(110,101,103,95,106,95,50,50,0);
         macauK = [macauK.length];
         share5 = `${1 + logoO.length}`;
         logoO = [(gifti == String.fromCharCode(66,0) ? logoO.length : gifti.length)];
      while ((productC.length + 2) < 5 || (productC.length - 2) < 4) {
          let searchO: Array<any> = [958, 112, 279];
          let loadingt: Map<any, any> = new Map([[String.fromCharCode(106,95,51,49,95,99,111,112,116,115,0),true ], [String.fromCharCode(115,112,107,114,95,112,95,50,57,0),true ], [String.fromCharCode(107,95,56,48,95,97,114,103,117,109,101,110,116,0),false ]]);
         productC.push(3);
         searchO = [searchO.length];
         loadingt.set(`${searchO.length}`, 1);
         break;
      }
          let infov: Array<any> = [744, 832];
         tickedr /= Math.max(parseInt(`${tickedr}`) >> (Math.min(3, Math.abs(2))), 1);
         infov = [infov.length];
       let tumbnailr = 2;
       let strF = 3;
         tickedr += parseInt(`${annerY}`) % 1;
          let type_3vN = 1;
         tumbnailr -= tumbnailr;
         type_3vN >>= Math.min(Math.abs(type_3vN), 5);
          let q_lock9: Map<any, any> = new Map([[String.fromCharCode(104,111,110,101,95,50,95,49,56,0),902], [String.fromCharCode(112,101,114,109,101,97,116,101,95,107,95,52,51,0),28]]);
          let x_unlockN: Array<any> = [260, 37, 570];
          let inactiveq: Array<any> = [408, 619];
         macauK.push(productC.length << (Math.min(1, Math.abs(parseInt(`${annerY}`)))));
         q_lock9 = new Map([[`${q_lock9.size}`, 3 | inactiveq.length]]);
         x_unlockN = [inactiveq.length];
      gpayE += `${productC.length}`;
      break;
   }
      target3 *= (parseFloat(`${String.fromCharCode(115,0) == anythinkp ? anythinkp.length : (unselectedZ ? 4 : 2)}`));
      unselectedZ = optionsq.includes(unselectedZ);
   for (let q = 0; q < 2; q++) {
      g_positionF += `${(String.fromCharCode(77,0) == custom1 ? g_positionF.length : custom1.length)}`;
   }
   let bodano = custom1.length >= 9613744;
   do {
      custom1 = `${3 << (Math.min(5, g_positionF.length))}`;
      if (bodano) {
         break;
      }
   } while (bodano && (custom1.length > parseInt(`${homew}`)));
   for (let n = 0; n < 1; n++) {
      watchp.push(custom1.length << (Math.min(5, watchp.length)));
   }
   for (let z = 0; z < 2; z++) {
      gpayE = `${anythinkp.length | optionsq.length}`;
   }
   if (gpayE.startsWith(`${unselectedZ}`)) {
      gpayE = `${parseInt(`${target3}`)}`;
   }
   for (let j = 0; j < 3; j++) {
      gpayE = `${((unselectedZ ? 1 : 5) * custom1.length)}`;
   }
      optionsq.push(gpayE.length);
   while ((episodeZ / (Math.max(7, watchp.length))) >= 4) {
      episodeZ ^= parseInt(`${target3}`);
      break;
   }
       let questT = false;
          let clubY = String.fromCharCode(113,95,57,55,95,117,110,115,101,110,100,0);
          let referrerG = 4.0;
          let kick4: Map<any, any> = new Map([[String.fromCharCode(117,110,97,115,115,105,103,110,101,100,95,116,95,49,57,0),73], [String.fromCharCode(104,111,115,116,102,108,97,103,115,95,52,95,49,54,0),345], [String.fromCharCode(97,95,51,54,95,114,101,111,114,100,101,114,0),115]]);
         questT = kick4.size > 76;
         clubY = `${parseInt(`${referrerG}`)}`;
         referrerG -= parseFloat(`${3}`);
         kick4 = new Map([[clubY, clubY.length - parseInt(`${referrerG}`)]]);
         questT = !questT;
      while (!questT) {
          let fastforwardP: Map<any, any> = new Map([[String.fromCharCode(108,95,55,95,104,112,114,101,100,0),586], [String.fromCharCode(105,116,97,108,105,97,110,95,102,95,49,52,0),432]]);
          let canvas3 = false;
          let inviteo = 5.0;
         questT = null != fastforwardP.get(`${inviteo}`);
         fastforwardP = new Map([[`${canvas3}`, ((canvas3 ? 3 : 1))]]);
         break;
      }
      custom1 += `${custom1.length << (Math.min(g_positionF.length, 2))}`;
       let linef = true;
       let profilee = String.fromCharCode(108,97,114,103,101,95,57,95,57,52,0);
       let uploadz = 0;
      while (!profilee.endsWith(`${linef}`)) {
         profilee = "2";
         break;
      }
      while (4 == profilee.length) {
         linef = profilee.startsWith(`${uploadz}`);
         break;
      }
          let ajaxB = String.fromCharCode(98,111,119,108,105,110,103,95,112,95,52,55,0);
          let expandn = String.fromCharCode(99,95,55,50,95,115,117,109,102,0);
         uploadz -= ((linef ? 2 : 4));
         ajaxB = "1";
         expandn += `${expandn.length | ajaxB.length}`;
      while (!linef) {
         linef = !linef;
         break;
      }
         linef = profilee.includes(`${uploadz}`);
      let mathe = linef ? !linef : linef;
      do {
          let pagen = String.fromCharCode(105,116,101,114,97,116,105,111,110,115,95,97,95,49,51,0);
          let giftR = 4.0;
          let hooko = false;
          let screen4 = String.fromCharCode(113,95,50,49,95,118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0);
          let control7 = String.fromCharCode(108,95,55,54,95,99,111,110,99,101,97,108,109,101,110,116,0);
         linef = giftR < 74.45 && control7 == String.fromCharCode(118,0);
         pagen += `${(String.fromCharCode(70,0) == screen4 ? (hooko ? 4 : 1) : screen4.length)}`;
         giftR -= (parseFloat(`${(hooko ? 4 : 5)}`));
         control7 = `${pagen.length | 2}`;
         if (mathe) {
            break;
         }
      } while (mathe && (profilee.endsWith(`${linef}`)));
         uploadz &= (String.fromCharCode(114,0) == profilee ? (linef ? 3 : 1) : profilee.length);
         profilee = `${profilee.length}`;
         uploadz -= ((linef ? 3 : 4) | uploadz);
      target3 *= parseFloat(`${uploadz}`);
      with_207 *= (String.fromCharCode(68,0) == custom1 ? custom1.length : (unselectedZ ? 3 : 4));
      cast3 += `${parseInt(`${homew}`)}`;
   for (let h = 0; h < 2; h++) {
      custom1 = `${anythinkp.length | custom1.length}`;
   }
   let teamK = custom1.length >= 6663426;
   do {
       let inactivec = 4;
       let c_playerS = 4.0;
       let mutedw: Array<any> = [783, 799];
          let selectU = 2.0;
         c_playerS *= inactivec % (Math.max(parseInt(`${c_playerS}`), 8));
         selectU /= Math.max(parseFloat(`${parseInt(`${selectU}`) % (Math.max(4, parseInt(`${selectU}`)))}`), 5);
      for (let l = 0; l < 3; l++) {
         mutedw.push(inactivec >> (Math.min(mutedw.length, 1)));
      }
       let combined4 = String.fromCharCode(100,99,97,100,101,99,95,102,95,53,52,0);
       let button4 = String.fromCharCode(107,95,56,50,95,116,114,117,116,104,0);
      for (let q = 0; q < 2; q++) {
         mutedw.push(parseInt(`${c_playerS}`) & 3);
      }
      while (button4.includes(`${c_playerS}`)) {
          let episodeN = String.fromCharCode(103,95,52,56,95,97,99,116,105,118,101,0);
          let backwardh: Map<any, any> = new Map([[String.fromCharCode(107,95,50,55,95,117,110,114,101,103,105,115,116,101,114,0),887], [String.fromCharCode(101,95,53,51,95,115,117,98,101,120,112,114,0),182]]);
         button4 = `${backwardh.size}`;
         episodeN += `${episodeN.length}`;
         backwardh.set(episodeN, (episodeN == String.fromCharCode(56,0) ? episodeN.length : episodeN.length));
         break;
      }
       let liveJ = String.fromCharCode(119,95,49,53,95,116,117,108,115,105,0);
       let modelsC = String.fromCharCode(101,110,99,111,100,105,110,103,98,95,57,95,53,53,0);
         button4 = `${(button4 == String.fromCharCode(89,0) ? button4.length : parseInt(`${c_playerS}`))}`;
          let changeK = 1.0;
         c_playerS += parseInt(`${changeK}`);
          let starb = 2.0;
          let headerQ = String.fromCharCode(100,121,97,100,105,99,95,122,95,53,48,0);
          let routernY = String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,95,116,95,50,54,0);
         mutedw.push(1 << (Math.min(Math.abs(inactivec), 3)));
         starb -= parseInt(`${starb}`);
         headerQ = `${headerQ.length >> (Math.min(routernY.length, 2))}`;
         routernY += `${routernY.length & headerQ.length}`;
      custom1 += "3";
      if (teamK) {
         break;
      }
   } while (((5 * parseInt(`${homew}`)) == 4 || (5.43 * homew) == 3.32) && teamK);
   let side9 = gpayE.length <= 6634123;
   do {
      gpayE += `${optionsq.length * parseInt(`${target3}`)}`;
      if (side9) {
         break;
      }
   } while ((!gpayE.startsWith(`${watchp.length}`)) && side9);
      target3 /= Math.max(5, (parseFloat(`${String.fromCharCode(70,0) == g_positionF ? episodeZ : g_positionF.length}`)));
   let megaphoneK = 7019448 <= watchp.length;
   do {
      watchp = [3 & optionsq.length];
      if (megaphoneK) {
         break;
      }
   } while ((!gpayE.endsWith(`${watchp.length}`)) && megaphoneK);

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  const formatPhoneNumber = (phoneNumber) => {
       let temperatureo = 5.0;
    let commentF = true;
    let agreementX: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,115,97,98,108,101,95,119,95,49,54,0),String.fromCharCode(97,95,52,54,95,99,111,117,110,116,105,110,103,0)], [String.fromCharCode(113,95,52,95,108,97,118,102,117,116,105,108,115,0),String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,104,95,51,56,0)], [String.fromCharCode(97,117,100,105,98,105,108,105,116,121,95,56,95,53,55,0),String.fromCharCode(100,97,116,97,114,95,107,95,52,50,0)]]);
    let tail9 = String.fromCharCode(119,95,53,53,95,112,111,108,108,101,114,0);
    let yingO = 0;
    let bannerB = true;
    let register_uQ: Array<any> = [102, 299];
    let fillZ = String.fromCharCode(112,105,120,109,102,116,115,95,55,95,49,53,0);
    let vietnamh = String.fromCharCode(122,95,53,56,0);
    let placeholderd = 3.0;
    let entryI = String.fromCharCode(100,95,55,52,95,100,101,116,101,114,109,105,110,101,100,0);
    let paginationg = String.fromCharCode(122,101,114,111,118,95,105,95,56,57,0);
    let banner_ = String.fromCharCode(101,110,100,105,97,110,95,52,95,51,49,0);
   while ((3 + agreementX.size) > 4) {
      commentF = 34 == register_uQ.length;
      break;
   }
   for (let o = 0; o < 1; o++) {
       let style4 = String.fromCharCode(102,95,53,52,95,99,111,109,112,97,114,101,112,111,119,0);
         style4 += `${style4.length / (Math.max(10, style4.length))}`;
       let chartX = String.fromCharCode(116,95,55,55,95,114,101,99,104,101,99,107,0);
       let fullx = 0.0;
       let privilegeI = 2.0;
      agreementX = new Map([[fillZ, (style4 == String.fromCharCode(80,0) ? fillZ.length : style4.length)]]);
   }
       let brightnessO: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,116,95,52,95,49,53,0),611], [String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,95,105,95,53,55,0),817]]);
       let leagueF = 1.0;
         brightnessO = new Map([[`${brightnessO.size}`, parseInt(`${leagueF}`) / 3]]);
      for (let x = 0; x < 3; x++) {
          let taiwany = String.fromCharCode(110,101,103,97,116,105,118,101,95,56,95,51,57,0);
          let langQ = String.fromCharCode(105,95,49,53,0);
          let window_9w = 4;
          let resulti = 0;
          let nterstitialT = 2;
         leagueF *= parseFloat(`${taiwany.length ^ nterstitialT}`);
         taiwany += `${window_9w}`;
         langQ += `${1 ^ window_9w}`;
         resulti -= langQ.length % (Math.max(8, window_9w));
         nterstitialT |= (String.fromCharCode(117,0) == langQ ? langQ.length : resulti);
      }
      while (3.37 == (leagueF / 5.14) && (leagueF / (Math.max(parseFloat(`${brightnessO.size}`), 5))) == 5.14) {
         brightnessO = new Map([[`${brightnessO.size}`, 2]]);
         break;
      }
      let headerf = 5167962 >= brightnessO.size;
      do {
         brightnessO = new Map([[`${brightnessO.size}`, 3]]);
         if (headerf) {
            break;
         }
      } while (((leagueF + parseFloat(`${brightnessO.size}`)) <= 3.16) && headerf);
      while (Array.from(brightnessO.values()).includes(leagueF)) {
          let const_d90 = String.fromCharCode(106,95,55,54,95,114,97,105,115,101,0);
          let sans4 = String.fromCharCode(108,95,54,56,95,114,101,119,114,105,116,101,0);
         leagueF -= parseFloat(`${1}`);
         const_d90 += "2";
         sans4 = `${1 ^ sans4.length}`;
         break;
      }
         brightnessO.set(`${leagueF}`, 3 << (Math.min(4, Math.abs(brightnessO.size))));
      agreementX.set(`${bannerB}`, 3 / (Math.max(5, parseInt(`${leagueF}`))));

    

   while (4 < tail9.length && 4 < vietnamh.length) {
      tail9 += `${3 | fillZ.length}`;
      break;
   }
   let ewarded6 = 8338443.0 <= placeholderd;
   do {
      placeholderd /= Math.max(entryI.length - 3, 3);
      if (ewarded6) {
         break;
      }
   } while (((placeholderd + 3.72) == 2.2 && (parseInt(`${placeholderd}`) + agreementX.size) == 1) && ewarded6);
      placeholderd *= (String.fromCharCode(56,0) == entryI ? fillZ.length : entryI.length);
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

      commentF = temperatureo < parseFloat(`${agreementX.size}`);
       let saveV = 1;
       let cornert = String.fromCharCode(103,95,50,57,95,120,105,110,103,0);
          let resendx = String.fromCharCode(113,95,54,50,95,112,109,107,0);
          let switch_lu = 4.0;
          let crown9 = 0.0;
         cornert = `${saveV | parseInt(`${crown9}`)}`;
         resendx += `${parseInt(`${switch_lu}`) + 1}`;
         switch_lu += resendx.length;
         crown9 *= parseFloat(`${1}`);
       let castingI = String.fromCharCode(100,95,53,48,95,116,121,112,105,110,103,0);
      for (let t = 0; t < 1; t++) {
         saveV ^= (cornert == String.fromCharCode(99,0) ? cornert.length : saveV);
      }
      while (2 <= (saveV & cornert.length) && (cornert.length & 2) <= 2) {
         cornert = `${saveV}`;
         break;
      }
         cornert = `${(String.fromCharCode(80,0) == cornert ? saveV : cornert.length)}`;
      for (let m = 0; m < 1; m++) {
         saveV ^= 2 - castingI.length;
      }
      commentF = !bannerB;
      paginationg = "2";

    

   for (let y = 0; y < 3; y++) {
       let downloadingH: Array<any> = [504, 835];
       let league6 = 2.0;
      for (let k = 0; k < 3; k++) {
          let langkey6 = 1.0;
         league6 *= parseFloat(`${1 ^ parseInt(`${league6}`)}`);
         langkey6 *= parseInt(`${langkey6}`);
      }
         league6 /= Math.max(parseFloat(`${downloadingH.length - parseInt(`${league6}`)}`), 2);
      for (let n = 0; n < 2; n++) {
         downloadingH = [parseInt(`${league6}`)];
      }
         downloadingH.push(3 * downloadingH.length);
         downloadingH.push(1 << (Math.min(2, downloadingH.length)));
      while (2 <= downloadingH.length) {
         league6 += parseFloat(`${parseInt(`${league6}`)}`);
         break;
      }
      temperatureo += parseFloat(`${parseInt(`${placeholderd}`) & downloadingH.length}`);
   }
      tail9 += `${((commentF ? 1 : 1))}`;
   for (let h = 0; h < 2; h++) {
      placeholderd *= register_uQ.length;
   }
    if (!numericPhoneNumber) return '';

       let upgradep = String.fromCharCode(122,95,51,54,95,115,101,99,117,114,101,100,0);
         upgradep = `${upgradep.length * 2}`;
       let zhuboc = 1.0;
       let matchesK = 5.0;
          let placeholderJ = 0;
         upgradep += `${placeholderJ}`;
      tail9 = `${register_uQ.length * 1}`;
   let singleb = 9163468 >= vietnamh.length;
   do {
      vietnamh = `${3 >> (Math.min(Math.abs(parseInt(`${temperatureo}`)), 5))}`;
      if (singleb) {
         break;
      }
   } while (singleb && ((3 >> (Math.min(2, Math.abs(agreementX.size)))) <= 2));
   let phonev = agreementX.size <= 6644784;
   do {
      agreementX.set(`${register_uQ.length}`, 3 >> (Math.min(2, Math.abs(agreementX.size))));
      if (phonev) {
         break;
      }
   } while ((agreementX.size <= register_uQ.length) && phonev);

    const countryCode = numericPhoneNumber.substring(0, 3); 

       let componentO = 4;
       let filled_ = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,95,50,95,53,53,0);
       let t_positionv = String.fromCharCode(97,95,57,48,95,99,111,100,101,98,108,111,99,107,115,0);
      for (let b = 0; b < 1; b++) {
         filled_ += `${filled_.length / (Math.max(t_positionv.length, 2))}`;
      }
         componentO %= Math.max(filled_.length | 2, 1);
      let componente = filled_ == String.fromCharCode(111,118,99,113,0);
      do {
          let halfG = true;
          let verticalS = false;
          let resultd: Array<any> = [String.fromCharCode(109,95,57,54,95,113,112,113,115,99,97,108,101,0), String.fromCharCode(101,103,117,108,97,114,95,97,95,50,0), String.fromCharCode(112,95,55,52,95,100,101,97,99,116,105,118,97,116,105,111,110,0)];
          let turne = 4.0;
          let lang9: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,102,108,111,119,95,107,95,56,51,0),true ], [String.fromCharCode(109,95,53,53,95,97,109,114,119,98,100,101,99,0),false ]]);
         filled_ = `${t_positionv.length}`;
         halfG = 44 <= lang9.size || 49.83 <= turne;
         verticalS = 90 <= lang9.size;
         resultd.push(parseInt(`${turne}`));
         if (componente) {
            break;
         }
      } while ((t_positionv.length >= filled_.length) && componente);
         componentO &= 1;
          let fileds = false;
         componentO &= componentO << (Math.min(2, Math.abs(1)));
         fileds = !fileds;
       let kickE: Array<any> = [950, 798, 843];
       let default_hgF: Array<any> = [433, 65];
      while ((componentO >> (Math.min(Math.abs(3), 2))) >= 2) {
         filled_ = `${(String.fromCharCode(121,0) == t_positionv ? kickE.length : t_positionv.length)}`;
         break;
      }
      let moduleb = String.fromCharCode(122,119,48,110,0) == t_positionv;
      do {
         t_positionv += `${default_hgF.length}`;
         if (moduleb) {
            break;
         }
      } while ((4 >= kickE.length) && moduleb);
         kickE.push(filled_.length);
      temperatureo -= parseFloat(`${1}`);
   if (agreementX.size <= tail9.length) {
      agreementX = new Map([[`${agreementX.size}`, tail9.length]]);
   }
   for (let w = 0; w < 3; w++) {
       let xvodt = 1.0;
       let combinedL = 2.0;
      for (let a = 0; a < 1; a++) {
          let whistle3 = String.fromCharCode(97,117,103,109,101,110,116,97,116,105,111,110,95,52,95,53,54,0);
          let logoX = String.fromCharCode(101,95,49,48,48,95,114,101,102,111,99,117,115,0);
         xvodt += parseFloat(`${parseInt(`${xvodt}`) - whistle3.length}`);
         whistle3 = `${(String.fromCharCode(71,0) == logoX ? logoX.length : logoX.length)}`;
      }
      if ((xvodt - combinedL) == 4.36 || 4.36 == (combinedL - xvodt)) {
         xvodt *= parseFloat(`${parseInt(`${xvodt}`) | 1}`);
      }
         xvodt += parseFloat(`${parseInt(`${combinedL}`)}`);
       let downloadQ: Array<any> = [234, 255];
      while ((xvodt - combinedL) < 3.58 || 3.77 < (xvodt - 3.58)) {
          let editv = 0.0;
          let anytimeD = String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,113,95,55,57,0);
          let googleD = 1;
          let countdownI = String.fromCharCode(101,95,51,54,95,99,111,110,118,101,114,115,105,111,110,115,0);
         xvodt -= parseFloat(`${1}`);
         editv -= parseFloat(`${googleD}`);
         anytimeD = `${googleD ^ 1}`;
         countdownI += `${parseInt(`${editv}`) >> (Math.min(5, Math.abs(googleD)))}`;
         break;
      }
       let liveM = String.fromCharCode(106,95,54,55,95,108,105,98,115,104,105,110,101,0);
       let filedd = String.fromCharCode(100,97,121,115,95,112,95,52,48,0);
      paginationg = `${parseInt(`${placeholderd}`) - 1}`;
   }
    const firstPart = numericPhoneNumber.substring(3, 6);

      bannerB = 60.35 >= placeholderd;
   while ((parseInt(`${temperatureo}`) * register_uQ.length) > 2) {
      temperatureo -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${placeholderd}`)), 3))}`);
      break;
   }
      paginationg += "2";
    const secondPart = numericPhoneNumber.substring(6);

   while (2 >= entryI.length) {
      temperatureo *= parseFloat(`${parseInt(`${placeholderd}`)}`);
      break;
   }
   while ((3 | entryI.length) == 5) {
      entryI += `${tail9.length}`;
      break;
   }
       let balls: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,116,97,98,108,101,95,52,95,55,52,0),745], [String.fromCharCode(117,95,52,48,95,104,97,100,0),452]]);
       let readt = String.fromCharCode(114,97,115,116,101,114,105,122,101,95,113,95,50,57,0);
          let const_ndE: Map<any, any> = new Map([[String.fromCharCode(105,95,50,56,95,109,105,116,101,114,0),160], [String.fromCharCode(97,95,56,55,95,112,114,101,115,101,110,116,105,110,103,0),730], [String.fromCharCode(99,108,111,115,105,110,103,95,49,95,54,57,0),498]]);
         readt += "1";
         const_ndE.set(`${const_ndE.size}`, const_ndE.size | const_ndE.size);
      while (balls.size > 3) {
         balls = new Map([[`${balls.size}`, balls.size]]);
         break;
      }
      if (4 == (3 | balls.size)) {
         balls = new Map([[`${balls.size}`, 3]]);
      }
         readt += `${balls.size}`;
         balls.set(readt, 2 - balls.size);
       let whatsappL = 4;
      paginationg += `${((commentF ? 3 : 5))}`;

    const formattedNumber = `+${countryCode} ${firstPart} ${secondPart}`;

      fillZ += "1";
      entryI += `${(paginationg == String.fromCharCode(49,0) ? paginationg.length : entryI.length)}`;
      yingO <<= Math.min(4, Math.abs(1 >> (Math.min(2, vietnamh.length))));
    return formattedNumber;
  };

  
  const resendOTP = () => {
       let switch_b_e = String.fromCharCode(102,105,108,108,112,95,53,95,51,56,0);
    let filedM = String.fromCharCode(97,95,49,51,95,117,110,109,117,116,101,0);
    let spec7 = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,112,95,57,0);
    let indicator1 = String.fromCharCode(104,97,110,100,111,118,101,114,95,110,95,53,50,0);
    let awayd: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,110,111,116,104,105,110,103,0),false ], [String.fromCharCode(99,111,112,121,116,111,95,115,95,56,51,0),true ]]);
    let arrow2 = String.fromCharCode(116,95,56,48,95,108,111,99,105,0);
    let t_centera = 2.0;
    let historyY = 3.0;
    let castu = String.fromCharCode(120,95,55,55,95,110,111,110,100,99,0);
      awayd.set(spec7, parseInt(`${t_centera}`) + spec7.length);
      t_centera /= Math.max(2, parseFloat(`${arrow2.length % (Math.max(3, 3))}`));
      filedM += `${spec7.length >> (Math.min(arrow2.length, 3))}`;

    setResend(false);

   let privacyD = indicator1 == String.fromCharCode(113,119,102,113,119,108,0);
   do {
      indicator1 = `${awayd.size >> (Math.min(Math.abs(1), 2))}`;
      if (privacyD) {
         break;
      }
   } while (privacyD && (indicator1.length >= 1));
   let adult8 = 5533497 >= awayd.size;
   do {
      awayd = new Map([[`${historyY}`, parseInt(`${historyY}`) % (Math.max(arrow2.length, 4))]]);
      if (adult8) {
         break;
      }
   } while (adult8 && (2 > awayd.size));
      switch_b_e += `${arrow2.length}`;

    THFirebase.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

   if (5.58 < (t_centera + 4.52) || 5 < (indicator1.length + parseInt(`${t_centera}`))) {
       let combinedO = String.fromCharCode(108,95,50,53,95,107,101,101,112,105,110,103,0);
       let pauseo = String.fromCharCode(115,95,50,53,95,105,115,116,115,0);
         pauseo = `${pauseo.length}`;
         combinedO += `${(combinedO == String.fromCharCode(104,0) ? pauseo.length : combinedO.length)}`;
      while (combinedO == String.fromCharCode(54,0) || pauseo == String.fromCharCode(49,0)) {
          let countdownn = 2;
          let mathh = true;
         pauseo += `${((mathh ? 1 : 3) % (Math.max(8, pauseo.length)))}`;
         countdownn *= countdownn;
         mathh = (countdownn | countdownn) > 66;
         break;
      }
          let mappingD = 1;
          let expiredw = 4;
         pauseo += `${mappingD | expiredw}`;
         pauseo = `${combinedO.length}`;
         pauseo += "2";
      t_centera += (parseFloat(`${arrow2 == String.fromCharCode(51,0) ? parseInt(`${historyY}`) : arrow2.length}`));
   }
   let checkboxC = historyY >= 5871636.0;
   do {
      historyY *= 2;
      if (checkboxC) {
         break;
      }
   } while (((switch_b_e.length - 2) <= 2) && checkboxC);
      indicator1 = `${(indicator1 == String.fromCharCode(118,0) ? indicator1.length : awayd.size)}`;
      setOtpTextInput([]);

   while (!indicator1.endsWith(arrow2)) {
      arrow2 = `${arrow2.length}`;
      break;
   }
   let bufferb = String.fromCharCode(114,119,122,49,111,0) == arrow2;
   do {
      arrow2 += `${3 / (Math.max(5, filedM.length))}`;
      if (bufferb) {
         break;
      }
   } while (bufferb && (indicator1.length >= 5));
   for (let i = 0; i < 3; i++) {
      indicator1 = `${spec7.length}`;
   }
      setOtp('      ');

       let reportG = true;
       let trophyp = 3.0;
       let downloadg = String.fromCharCode(98,95,53,95,117,110,114,101,99,111,103,0);
         trophyp *= (parseFloat(`${(reportG ? 3 : 1) + parseInt(`${trophyp}`)}`));
          let fastforwardF = 4;
          let zhubov = 1.0;
          let flyerj = String.fromCharCode(114,95,56,50,95,97,114,116,105,102,97,99,116,115,0);
         reportG = 65 == fastforwardF;
         fastforwardF *= parseInt(`${zhubov}`);
         zhubov /= Math.max((parseFloat(`${flyerj == String.fromCharCode(85,0) ? parseInt(`${zhubov}`) : flyerj.length}`)), 3);
          let contextW: Array<any> = [221, 123, 309];
          let stationO = String.fromCharCode(100,95,56,55,95,115,111,108,118,101,100,0);
         downloadg += `${parseInt(`${trophyp}`) & 1}`;
         contextW = [contextW.length];
         stationO = `${contextW.length * 1}`;
       let tumbnail5 = String.fromCharCode(111,95,55,55,95,114,97,115,116,101,114,105,122,97,116,105,111,110,0);
       let bingT = String.fromCharCode(97,95,49,51,95,112,114,101,118,0);
         trophyp *= parseFloat(`${1 / (Math.max(6, tumbnail5.length))}`);
      for (let c = 0; c < 2; c++) {
         reportG = bingT == String.fromCharCode(76,0);
      }
          let floatingn = false;
         trophyp /= Math.max(2, parseFloat(`${downloadg.length}`));
         floatingn = (!floatingn ? floatingn : !floatingn);
      while (tumbnail5.startsWith(downloadg)) {
          let linen = true;
         downloadg += `${((reportG ? 3 : 3) | 3)}`;
         linen = !linen;
         break;
      }
      let thailandO = String.fromCharCode(102,109,49,57,111,107,110,101,50,53,0) == bingT;
      do {
          let bodank = String.fromCharCode(112,95,57,53,95,105,110,100,101,110,116,0);
         bingT = `${(downloadg == String.fromCharCode(76,0) ? (reportG ? 4 : 2) : downloadg.length)}`;
         bodank += `${(bodank == String.fromCharCode(57,0) ? bodank.length : bodank.length)}`;
         if (thailandO) {
            break;
         }
      } while (thailandO && (!bingT.endsWith(`${reportG}`)));
      indicator1 += `${3 << (Math.min(5, Math.abs(awayd.size)))}`;
      awayd = new Map([[indicator1, 1 >> (Math.min(1, indicator1.length))]]);
      t_centera -= parseFloat(`${parseInt(`${historyY}`) >> (Math.min(3, Math.abs(2)))}`);
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
