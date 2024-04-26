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
import ScreenContainer from '../../components/container/ww_collection';
import { useDispatch } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';

import { ResendCountDown } from './ww_iconplay';
import { addUserAuthState } from '@redux/actions/ww_libreactperfloggerjni_small';

import { changeScreenAction } from '@redux/actions/ww_hash';
import ww_runtime from '../../../Umeng/ww_runtime';
import { wwIconscheduleColors } from '@api';
import { useSelector } from '@hooks/ww_catagory_neon';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import wwSelect from '../../../AppsFlyer/ww_short';


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

type wwShared = {
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
}: wwShared) => {
  const { colors } = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); 

  const [focusedInput, setFocusedInput] = useState(null); 

  const userState = useSelector<wwVertical>('userReducer');

  const styles = useMemo(() => createStyles({
    colors,
  }), []);

  const handleFocus = (index: any) => {
    console.log(index);
    setFocusedInput(index);
  };

  const handleBlur = () => {
       let bingJ = String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,95,53,95,55,56,0);
    let n_lockF = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,95,52,95,57,49,0);
    let yingN: Array<any> = [411, 237];
    let backf = true;
    let china5 = String.fromCharCode(103,95,50,51,95,110,118,111,105,99,101,0);
    let turndownU: Array<any> = [224, 712];
    let circle3 = String.fromCharCode(104,95,54,53,95,115,112,114,101,97,100,0);
    let stylen = String.fromCharCode(112,111,112,117,112,95,106,95,52,53,0);
    let update_p4 = false;
    let iconmore9 = 3;
    let righto = String.fromCharCode(105,109,112,111,114,116,115,95,54,95,53,52,0);
    let private_lvr = String.fromCharCode(115,95,56,54,95,114,101,111,115,0);
       let plusM: Map<any, any> = new Map([[String.fromCharCode(101,95,55,95,101,99,111,109,112,114,101,115,115,111,114,0),String.fromCharCode(99,111,112,121,116,101,115,116,95,56,95,56,53,0)], [String.fromCharCode(111,95,54,49,0),String.fromCharCode(112,111,108,108,101,100,95,102,95,57,51,0)]]);
       let philippines9: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,105,116,108,101,115,95,57,95,53,55,0),256], [String.fromCharCode(117,108,116,114,97,119,105,100,101,95,112,95,51,48,0),756], [String.fromCharCode(100,101,116,97,99,104,101,100,95,120,95,51,51,0),674]]);
         philippines9.set(`${philippines9.size}`, plusM.size);
         philippines9.set(`${philippines9.size}`, philippines9.size ^ plusM.size);
         plusM = new Map([[`${plusM.size}`, philippines9.size * plusM.size]]);
      while (plusM.size <= 2) {
          let crownv: Map<any, any> = new Map([[String.fromCharCode(109,111,110,111,119,104,105,116,101,95,108,95,55,56,0),true ], [String.fromCharCode(105,95,53,52,95,103,97,109,101,0),true ]]);
         philippines9.set(`${philippines9.size}`, 2 << (Math.min(2, Math.abs(crownv.size))));
         break;
      }
      for (let f = 0; f < 2; f++) {
          let shared5 = String.fromCharCode(121,95,51,55,95,115,101,97,100,0);
          let splashf = true;
         plusM.set(`${splashf}`, shared5.length);
      }
         philippines9 = new Map([[`${plusM.size}`, 1 % (Math.max(5, philippines9.size))]]);
      backf = 48 > philippines9.size && yingN.length > 48;
   if ((turndownU.length & yingN.length) >= 1 || (1 & yingN.length) >= 1) {
       let langkeys = 2.0;
       let gmailz = true;
       let footballfiledlayoutX = false;
         footballfiledlayoutX = gmailz || langkeys <= 72.91;
          let hookQ = 0.0;
          let listB = String.fromCharCode(101,121,101,95,121,95,50,51,0);
          let iconbackwhite2 = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,107,95,57,48,0);
         footballfiledlayoutX = !footballfiledlayoutX || hookQ < 59.94;
         hookQ -= (parseFloat(`${String.fromCharCode(118,0) == iconbackwhite2 ? listB.length : iconbackwhite2.length}`));
         listB = `${(listB == String.fromCharCode(101,0) ? iconbackwhite2.length : listB.length)}`;
      for (let g = 0; g < 3; g++) {
         langkeys *= ((footballfiledlayoutX ? 5 : 1) | (gmailz ? 4 : 4));
      }
         langkeys /= Math.max(3, 3);
      while (!gmailz) {
         footballfiledlayoutX = gmailz;
         break;
      }
      let mailC = gmailz ? !gmailz : gmailz;
      do {
         gmailz = gmailz && 7.12 == langkeys;
         if (mailC) {
            break;
         }
      } while ((!gmailz) && mailC);
         gmailz = langkeys >= 39.15 && !gmailz;
         gmailz = !gmailz;
         gmailz = !gmailz && !footballfiledlayoutX;
      yingN.push(yingN.length % (Math.max(2, 4)));
   }
      update_p4 = n_lockF.startsWith(`${update_p4}`);
   let libreactperfloggerjnih = yingN.length >= 7536255;
   do {
      yingN = [bingJ.length];
      if (libreactperfloggerjnih) {
         break;
      }
   } while (libreactperfloggerjnih && (backf));
   if (!backf && circle3.length < 1) {
      backf = china5.length >= stylen.length;
   }
      turndownU = [(2 << (Math.min(1, Math.abs((update_p4 ? 1 : 3)))))];
      yingN = [circle3.length];
   while (2 < (1 % (Math.max(2, iconmore9)))) {
      iconmore9 *= 1;
      break;
   }
      n_lockF = `${(String.fromCharCode(81,0) == china5 ? (update_p4 ? 4 : 5) : china5.length)}`;
   for (let m = 0; m < 1; m++) {
      bingJ = `${(String.fromCharCode(48,0) == stylen ? (update_p4 ? 3 : 4) : stylen.length)}`;
   }
   for (let t = 0; t < 2; t++) {
      china5 = `${(2 + (update_p4 ? 1 : 1))}`;
   }
   for (let j = 0; j < 1; j++) {
      backf = yingN.includes(update_p4);
   }
   if (stylen.length <= china5.length) {
      stylen = "1";
   }
      turndownU = [iconmore9];
       let corev = String.fromCharCode(115,95,56,0);
      if (!corev.startsWith(`${corev.length}`)) {
         corev += `${corev.length}`;
      }
      for (let y = 0; y < 1; y++) {
         corev = `${2 - corev.length}`;
      }
      for (let a = 0; a < 3; a++) {
         corev += `${corev.length}`;
      }
      circle3 = `${(n_lockF == String.fromCharCode(113,0) ? turndownU.length : n_lockF.length)}`;
   if (righto.length < 1) {
       let subsf = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,116,95,57,56,0);
       let buildo = 4;
       let gemfileG = 4.0;
       let downloadq = 3.0;
       let footballfiledlayoutW = false;
          let debugX = 1.0;
          let unimplementedviewi = 1.0;
          let googlev = 5;
         buildo *= 3;
         debugX /= Math.max(1, 3 | googlev);
         unimplementedviewi += parseFloat(`${googlev}`);
          let libzeus5: Map<any, any> = new Map([[String.fromCharCode(98,101,104,97,118,105,111,114,115,95,98,95,50,57,0),566], [String.fromCharCode(121,95,57,57,95,102,97,99,101,115,0),631]]);
          let splashr = true;
         gemfileG += ((footballfiledlayoutW ? 1 : 3) >> (Math.min(subsf.length, 4)));
         libzeus5.set(`${splashr}`, 1);
       let libturbomodulejsijniL = 0;
      let redgoalG = libturbomodulejsijniL <= 6675796;
      do {
         libturbomodulejsijniL ^= parseInt(`${gemfileG}`) + 1;
         if (redgoalG) {
            break;
         }
      } while ((footballfiledlayoutW) && redgoalG);
         subsf = `${1 ^ parseInt(`${gemfileG}`)}`;
      let containerj = 8299019 >= buildo;
      do {
         buildo += 3 & parseInt(`${gemfileG}`);
         if (containerj) {
            break;
         }
      } while (containerj && ((4.33 - gemfileG) < 2.80));
      for (let e = 0; e < 3; e++) {
         libturbomodulejsijniL |= 1 + subsf.length;
      }
      while (3.40 >= (5.100 + gemfileG)) {
         gemfileG *= parseInt(`${gemfileG}`) * 1;
         break;
      }
       let temperature3 = 1;
       let playercommonJ = 2;
         playercommonJ ^= ((footballfiledlayoutW ? 5 : 3) ^ libturbomodulejsijniL);
         libturbomodulejsijniL %= Math.max(2, subsf.length);
      let telegramg = buildo >= 5497885;
      do {
          let private_oa = 5;
         buildo -= private_oa / (Math.max(parseInt(`${downloadq}`), 3));
         if (telegramg) {
            break;
         }
      } while ((4 <= buildo) && telegramg);
      if ((downloadq / 1.85) == 1.53 && (downloadq / 1.85) == 3.34) {
         gemfileG *= parseInt(`${gemfileG}`);
      }
      while ((playercommonJ | buildo) <= 4) {
         buildo <<= Math.min(Math.abs(buildo - subsf.length), 1);
         break;
      }
         footballfiledlayoutW = libturbomodulejsijniL >= 52;
      righto += "1";
   }
   while (bingJ.endsWith(righto)) {
       let nterstitialC: Map<any, any> = new Map([[String.fromCharCode(99,117,98,101,100,95,48,95,52,55,0),30], [String.fromCharCode(105,95,53,48,95,97,116,101,120,105,116,0),904], [String.fromCharCode(105,95,49,48,95,101,120,105,102,0),661]]);
       let libhermesh = 2.0;
       let iconarrowright8 = 1.0;
       let videocommon5 = String.fromCharCode(106,95,56,53,95,100,105,109,0);
       let playw = true;
      if (videocommon5.length < 4) {
         videocommon5 += `${((playw ? 4 : 2) - videocommon5.length)}`;
      }
         playw = parseInt(`${libhermesh}`) >= nterstitialC.size;
      while (4.15 >= (iconarrowright8 - libhermesh)) {
         libhermesh -= parseFloat(`${3 % (Math.max(1, parseInt(`${libhermesh}`)))}`);
         break;
      }
       let graphW = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,53,95,54,53,0);
       let abidetectD = String.fromCharCode(110,101,103,95,122,95,50,53,0);
      if (!playw || (4.74 * iconarrowright8) >= 1.15) {
         iconarrowright8 /= Math.max(parseInt(`${libhermesh}`) * videocommon5.length, 1);
      }
         libhermesh += (parseFloat(`${(playw ? 1 : 3)}`));
       let otherf = String.fromCharCode(105,95,54,54,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
          let middlea = 5.0;
          let phonef = String.fromCharCode(99,104,117,110,107,115,95,97,95,57,51,0);
         playw = String.fromCharCode(79,0) == otherf;
         middlea /= Math.max((phonef == String.fromCharCode(55,0) ? phonef.length : parseInt(`${middlea}`)), 2);
         iconarrowright8 += otherf.length;
       let refreshs = String.fromCharCode(112,114,101,115,115,117,114,101,95,110,95,52,53,0);
      if (1.36 > libhermesh) {
         graphW += `${videocommon5.length}`;
      }
      bingJ += `${(String.fromCharCode(116,0) == videocommon5 ? (update_p4 ? 1 : 2) : videocommon5.length)}`;
      break;
   }
   if (bingJ.length == 1) {
       let foundF = true;
       let smallT = 3.0;
       let yellowvideoliveA: Map<any, any> = new Map([[String.fromCharCode(104,95,54,57,95,111,98,106,116,120,116,0),963], [String.fromCharCode(103,114,111,119,95,112,95,56,50,0),532], [String.fromCharCode(118,95,54,52,95,108,97,116,0),716]]);
       let clock2 = 3.0;
         smallT /= Math.max(((foundF ? 2 : 5) % (Math.max(parseInt(`${smallT}`), 1))), 3);
      while (Array.from(yellowvideoliveA.values()).includes(clock2)) {
         yellowvideoliveA = new Map([[`${yellowvideoliveA.size}`, yellowvideoliveA.size]]);
         break;
      }
         foundF = yellowvideoliveA.size < 3;
      while ((smallT * 3.16) > 5.70) {
         smallT /= Math.max(yellowvideoliveA.size & 3, 3);
         break;
      }
          let weather5 = String.fromCharCode(110,95,56,95,102,111,114,109,97,116,116,101,100,0);
          let classesw = true;
         clock2 -= yellowvideoliveA.size;
         weather5 = `${1 + weather5.length}`;
         classesw = !classesw;
         yellowvideoliveA = new Map([[`${smallT}`, parseInt(`${smallT}`) & 3]]);
       let filly: Map<any, any> = new Map([[String.fromCharCode(102,95,55,95,115,105,110,113,102,0),String.fromCharCode(112,105,99,116,117,114,101,115,95,49,95,49,55,0)], [String.fromCharCode(112,95,49,53,95,119,105,108,108,0),String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,115,95,50,51,0)]]);
      while (3.64 == (yellowvideoliveA.size * smallT) && 5 == (1 ^ yellowvideoliveA.size)) {
          let small_ = 5.0;
          let optionsE = 3;
          let predictionl = String.fromCharCode(103,95,51,95,115,102,114,97,109,101,0);
          let mutedm = 0;
         yellowvideoliveA = new Map([[`${yellowvideoliveA.size}`, yellowvideoliveA.size / 2]]);
         small_ *= parseFloat(`${mutedm / 2}`);
         optionsE &= 2 % (Math.max(7, optionsE));
         predictionl += `${2 | optionsE}`;
         mutedm ^= 3;
         break;
      }
         smallT += yellowvideoliveA.size | parseInt(`${smallT}`);
      for (let r = 0; r < 3; r++) {
         clock2 *= filly.size;
      }
      for (let v = 0; v < 1; v++) {
          let singaporeb = 0.0;
          let stepp = 3.0;
          let build6 = 1.0;
          let libyogaV: Array<any> = [81, 12];
          let episodem = 2.0;
         smallT *= filly.size;
         singaporeb /= Math.max(1, 3);
         stepp += libyogaV.length;
         build6 -= parseFloat(`${parseInt(`${singaporeb}`)}`);
         libyogaV.push(libyogaV.length << (Math.min(Math.abs(2), 5)));
         episodem += parseInt(`${singaporeb}`);
      }
         clock2 -= 3 >> (Math.min(4, Math.abs(parseInt(`${smallT}`))));
      bingJ = `${(1 + (backf ? 2 : 1))}`;
   }
   let inouttargetreda = iconmore9 <= 9746880;
   do {
      iconmore9 &= circle3.length;
      if (inouttargetreda) {
         break;
      }
   } while (inouttargetreda && ((bingJ.length + iconmore9) <= 3 || 3 <= (bingJ.length + iconmore9)));
      n_lockF = `${(String.fromCharCode(122,0) == righto ? righto.length : circle3.length)}`;
      china5 = `${iconmore9 & righto.length}`;

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  const formatPhoneNumber = (phoneNumber) => {
       let imagesE = String.fromCharCode(105,95,51,57,95,120,117,116,105,108,0);
    let turndownT: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,95,121,95,57,53,0),String.fromCharCode(100,101,115,116,95,57,95,54,50,0)], [String.fromCharCode(101,108,108,105,103,105,98,108,101,95,110,95,52,53,0),String.fromCharCode(121,95,53,57,95,115,110,97,112,0)]]);
    let networky = 1;
    let canvasL = String.fromCharCode(101,95,49,52,95,109,101,114,103,101,100,0);
    let directO = 2.0;
    let condensedq = true;
    let nextI = String.fromCharCode(108,112,99,108,115,112,95,109,95,49,55,0);
    let carouseli = 2.0;
    let carousell = 1;
    let closei: Array<any> = [150, 150, 73];
    let configurec: Array<any> = [834, 69, 834];
      nextI += `${nextI.length}`;
   for (let o = 0; o < 1; o++) {
      carousell -= canvasL.length;
   }
       let indicatore = true;
       let pathO: Array<any> = [710, 561];
      if (3 >= (pathO.length | 3) || pathO.length >= 3) {
          let settingse = String.fromCharCode(98,97,108,97,110,99,101,100,95,116,95,56,48,0);
          let turndown2 = false;
          let greyarrowupl = 4.0;
         indicatore = (41 <= ((!indicatore ? 41 : pathO.length) << (Math.min(pathO.length, 1))));
         settingse += `${(String.fromCharCode(76,0) == settingse ? parseInt(`${greyarrowupl}`) : settingse.length)}`;
         turndown2 = greyarrowupl <= 19.7 || !turndown2;
      }
      for (let v = 0; v < 2; v++) {
         indicatore = pathO.length >= 39 && !indicatore;
      }
         indicatore = indicatore && pathO.length == 76;
      while (4 == (pathO.length >> (Math.min(Math.abs(2), 1))) || !indicatore) {
          let ksadA = String.fromCharCode(121,95,52,95,117,116,105,108,0);
          let selected9 = String.fromCharCode(100,111,117,103,108,97,115,95,108,95,50,50,0);
         pathO.push((1 + (indicatore ? 2 : 5)));
         ksadA = "2";
         selected9 += `${(selected9 == String.fromCharCode(104,0) ? selected9.length : ksadA.length)}`;
         break;
      }
       let layout1 = 1.0;
       let resultr = 5.0;
      let qaagp = 5160509 <= pathO.length;
      do {
         pathO = [parseInt(`${layout1}`) & 2];
         if (qaagp) {
            break;
         }
      } while (qaagp && (resultr > 2.30));
      canvasL += `${(String.fromCharCode(66,0) == canvasL ? canvasL.length : (condensedq ? 5 : 3))}`;

    

      turndownT = new Map([[`${carousell}`, carousell - parseInt(`${directO}`)]]);
      carousell *= turndownT.size + 2;
   while (1 == (2 ^ canvasL.length) && 2 == (2 ^ canvasL.length)) {
      canvasL += `${imagesE.length}`;
      break;
   }
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

      carouseli += parseFloat(`${nextI.length * 1}`);
       let weibom = String.fromCharCode(110,95,53,53,95,99,116,120,112,0);
       let tumbnailQ = 0.0;
       let sinar = String.fromCharCode(118,95,52,56,95,114,101,113,117,105,114,101,109,101,110,116,0);
         tumbnailQ += weibom.length & 3;
      while ((tumbnailQ / (Math.max(3.43, 10))) < 1.95 && 3.43 < (tumbnailQ / (Math.max(6, sinar.length)))) {
         tumbnailQ /= Math.max(3, sinar.length);
         break;
      }
      for (let g = 0; g < 1; g++) {
         tumbnailQ += 3;
      }
       let vietnamJ: Map<any, any> = new Map([[String.fromCharCode(102,95,49,95,105,116,117,110,101,115,0),false ], [String.fromCharCode(100,95,52,53,95,99,104,117,110,107,0),false ]]);
       let reactG: Map<any, any> = new Map([[String.fromCharCode(122,95,50,56,95,100,105,103,105,116,99,111,117,110,116,0),394], [String.fromCharCode(122,95,55,51,95,104,101,97,100,112,104,111,110,101,115,0),711], [String.fromCharCode(100,117,112,101,100,95,112,95,53,0),254]]);
       let watch6 = 0.0;
       let middleT = 2.0;
      for (let f = 0; f < 1; f++) {
         middleT += parseInt(`${tumbnailQ}`);
      }
         vietnamJ = new Map([[`${watch6}`, 3]]);
       let shootyesgoalB: Map<any, any> = new Map([[String.fromCharCode(104,97,112,113,97,95,119,95,57,57,0),216], [String.fromCharCode(111,98,106,99,95,55,95,53,57,0),492], [String.fromCharCode(112,95,51,53,95,100,105,115,116,0),409]]);
       let mapbufferQ: Map<any, any> = new Map([[String.fromCharCode(101,95,50,51,95,115,117,98,116,114,97,99,116,111,114,0),String.fromCharCode(106,95,56,52,95,102,117,110,99,116,105,111,110,115,0)], [String.fromCharCode(102,105,114,101,119,97,108,108,95,55,95,52,52,0),String.fromCharCode(99,117,114,116,97,105,110,95,104,95,54,56,0)], [String.fromCharCode(114,101,109,111,118,101,95,120,95,54,50,0),String.fromCharCode(108,95,55,57,95,118,112,108,112,102,0)]]);
      let chatg = 7730853 <= mapbufferQ.size;
      do {
          let mbridgec: Array<any> = [String.fromCharCode(110,97,110,111,98,101,110,99,104,109,97,114,107,95,97,95,56,52,0), String.fromCharCode(105,95,57,53,95,102,111,114,99,101,0)];
          let settingJ = 2;
          let xvodq = 0.0;
          let pingc = true;
         mapbufferQ = new Map([[`${vietnamJ.size}`, parseInt(`${middleT}`) % (Math.max(1, 3))]]);
         mbridgec.push(((pingc ? 2 : 2) % 2));
         settingJ ^= settingJ;
         xvodq -= parseFloat(`${2 ^ mbridgec.length}`);
         pingc = !pingc;
         if (chatg) {
            break;
         }
      } while ((Array.from(mapbufferQ.values()).includes(middleT)) && chatg);
      networky *= parseInt(`${tumbnailQ}`);
   for (let j = 0; j < 1; j++) {
       let infof = String.fromCharCode(108,95,51,57,95,112,114,111,114,101,115,100,97,116,97,0);
          let favoriteF = String.fromCharCode(121,95,57,54,95,116,105,101,114,115,0);
         infof = `${infof.length & favoriteF.length}`;
      for (let l = 0; l < 1; l++) {
         infof += `${infof.length}`;
      }
      let s_playerm = infof == String.fromCharCode(120,114,55,56,55,49,104,101,0);
      do {
          let rewardvideoG: Array<any> = [254, 717, 993];
          let iconpipexpandB = 5;
          let ginit_fV = 3;
         infof += "2";
         rewardvideoG = [3];
         iconpipexpandB &= ginit_fV;
         ginit_fV |= rewardvideoG.length;
         if (s_playerm) {
            break;
         }
      } while ((infof.length > 3 && 3 > infof.length) && s_playerm);
      imagesE += `${infof.length + 2}`;
   }

    

   for (let t = 0; t < 3; t++) {
      imagesE = `${imagesE.length}`;
   }
   while (nextI.length < 3) {
       let statisticsi = String.fromCharCode(108,95,55,54,95,98,105,116,114,97,116,101,0);
       let fcdaebecbcbafcdfceaaeccfeacdb5 = 1.0;
       let weibo0 = false;
      let animationh = weibo0 ? !weibo0 : weibo0;
      do {
         weibo0 = statisticsi.length < 28;
         if (animationh) {
            break;
         }
      } while (animationh && (1.41 > (4.24 - fcdaebecbcbafcdfceaaeccfeacdb5)));
         statisticsi = `${(String.fromCharCode(105,0) == statisticsi ? parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb5}`) : statisticsi.length)}`;
         fcdaebecbcbafcdfceaaeccfeacdb5 *= 2 ^ parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb5}`);
          let hookR = String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,119,95,56,55,0);
          let bannerX: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,99,111,110,116,95,118,95,57,55,0),String.fromCharCode(105,95,54,50,95,112,105,110,99,104,105,110,103,0)], [String.fromCharCode(105,118,102,101,110,99,95,109,95,49,57,0),String.fromCharCode(115,95,55,52,95,112,97,115,115,116,104,114,111,117,103,104,0)], [String.fromCharCode(99,95,49,51,95,102,111,114,116,104,0),String.fromCharCode(117,95,55,51,95,105,110,116,101,114,110,101,116,0)]]);
         weibo0 = 91 < hookR.length;
         hookR += `${bannerX.size}`;
         bannerX = new Map([[`${bannerX.size}`, bannerX.size >> (Math.min(Math.abs(2), 3))]]);
         statisticsi += "3";
          let module2 = String.fromCharCode(102,95,55,95,109,95,57,51,0);
          let libflipper9: Array<any> = [429, 689];
         fcdaebecbcbafcdfceaaeccfeacdb5 /= Math.max(parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb5}`) / (Math.max(1, statisticsi.length)), 1);
         module2 = `${module2.length}`;
         libflipper9 = [module2.length];
         weibo0 = statisticsi.length >= 71 || weibo0;
         fcdaebecbcbafcdfceaaeccfeacdb5 -= parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb5}`) & 1;
      if (statisticsi.length < parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb5}`)) {
         fcdaebecbcbafcdfceaaeccfeacdb5 += 1 & statisticsi.length;
      }
      condensedq = (86 < (statisticsi.length + (!weibo0 ? 86 : statisticsi.length)));
      break;
   }
      directO += carousell;
    if (!numericPhoneNumber) return '';

      carouseli -= parseFloat(`${nextI.length}`);
      carouseli += parseFloat(`${networky << (Math.min(Math.abs(1), 3))}`);
   let selectionU = condensedq ? !condensedq : condensedq;
   do {
       let icona: Map<any, any> = new Map([[String.fromCharCode(110,109,104,100,95,57,95,52,53,0),true ], [String.fromCharCode(105,95,49,48,48,95,99,111,118,101,114,101,100,0),true ], [String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,48,95,53,54,0),false ]]);
       let privacyh = String.fromCharCode(112,95,49,48,48,95,115,117,109,100,105,102,102,0);
       let sellf: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,105,110,103,95,107,95,50,48,0),String.fromCharCode(100,101,108,111,99,97,116,101,95,114,95,56,0)], [String.fromCharCode(118,95,53,95,97,99,114,111,110,121,109,0),String.fromCharCode(116,95,51,56,95,115,99,104,101,109,101,0)]]);
       let orangeV = 1.0;
          let cornerkickT = String.fromCharCode(117,112,108,111,97,100,97,98,108,101,95,103,95,57,54,0);
         privacyh += `${parseInt(`${orangeV}`)}`;
         cornerkickT = "1";
         orangeV += parseFloat(`${2}`);
         icona = new Map([[`${icona.size}`, icona.size << (Math.min(Math.abs(2), 5))]]);
         sellf.set(privacyh, sellf.size);
      for (let k = 0; k < 2; k++) {
          let shielddonel = String.fromCharCode(102,111,114,103,111,116,116,101,110,95,56,95,52,49,0);
          let proxyJ = String.fromCharCode(109,111,117,116,104,95,114,95,51,49,0);
         orangeV *= parseFloat(`${proxyJ.length}`);
         shielddonel = "1";
         proxyJ += `${shielddonel.length}`;
      }
       let giftq: Map<any, any> = new Map([[String.fromCharCode(119,95,56,54,95,101,109,111,106,105,115,0),356], [String.fromCharCode(118,101,114,108,97,121,95,97,95,52,50,0),626], [String.fromCharCode(112,105,99,107,95,114,95,50,51,0),951]]);
       let targetv: Map<any, any> = new Map([[String.fromCharCode(108,95,55,95,109,105,99,0),374], [String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,116,95,51,50,0),271]]);
       let iconnointernetZ = String.fromCharCode(115,121,110,116,104,102,105,108,116,95,109,95,56,48,0);
       let whitec = String.fromCharCode(112,117,116,115,116,114,95,57,95,49,54,0);
      let whitetick6 = icona.size <= 7368269;
      do {
         icona = new Map([[`${sellf.size}`, 3 - giftq.size]]);
         if (whitetick6) {
            break;
         }
      } while ((privacyh.includes(`${icona.size}`)) && whitetick6);
      let bggradientr = sellf.size <= 9393138;
      do {
         sellf.set(`${privacyh}`, privacyh.length ^ 2);
         if (bggradientr) {
            break;
         }
      } while ((iconnointernetZ.startsWith(`${sellf.size}`)) && bggradientr);
         sellf = new Map([[`${giftq.size}`, (String.fromCharCode(52,0) == whitec ? whitec.length : giftq.size)]]);
      for (let w = 0; w < 1; w++) {
          let referrer0 = String.fromCharCode(105,95,53,51,95,111,118,101,114,97,108,108,0);
          let zoomc: Map<any, any> = new Map([[String.fromCharCode(115,97,116,95,55,95,54,53,0),943], [String.fromCharCode(115,117,99,99,101,115,115,99,98,95,121,95,53,48,0),267], [String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,49,95,49,50,0),649]]);
          let libavformatt = String.fromCharCode(115,119,102,112,108,97,121,101,114,95,51,95,50,51,0);
          let changen = 0.0;
          let downloadingE: Array<any> = [String.fromCharCode(122,111,110,101,115,95,53,95,52,52,0), String.fromCharCode(109,95,57,57,95,114,101,99,111,114,100,101,114,0), String.fromCharCode(110,95,54,51,95,98,99,104,101,99,107,0)];
         privacyh += "2";
         referrer0 += `${zoomc.size}`;
         zoomc = new Map([[`${zoomc.size}`, 1]]);
         libavformatt = `${(String.fromCharCode(112,0) == referrer0 ? zoomc.size : referrer0.length)}`;
         changen += 2;
         downloadingE.push(1);
      }
      if (giftq.get(`${orangeV}`) != null) {
         orangeV /= Math.max(3, (parseFloat(`${whitec == String.fromCharCode(57,0) ? whitec.length : iconnointernetZ.length}`)));
      }
      condensedq = carouseli <= 91.53;
      if (selectionU) {
         break;
      }
   } while (((carouseli - 1.67) < 2.74 || 1.67 < carouseli) && selectionU);

    const countryCode = numericPhoneNumber.substring(0, 3); 

   if ((1 >> (Math.min(2, Math.abs(carousell)))) < 5 && 4.76 < (directO * carousell)) {
      directO += parseInt(`${directO}`);
   }
      networky += carousell;
   for (let p = 0; p < 3; p++) {
       let debugg = String.fromCharCode(108,105,98,119,101,98,112,95,109,95,55,54,0);
       let cornerkickS = 1.0;
       let episodesD: Array<any> = [String.fromCharCode(109,101,109,98,101,114,115,95,51,95,51,49,0), String.fromCharCode(118,101,114,105,102,105,101,100,95,108,95,53,53,0), String.fromCharCode(115,95,50,56,95,112,114,101,115,101,110,116,105,110,103,0)];
       let n_imagem = String.fromCharCode(110,102,116,95,104,95,54,50,0);
      for (let o = 0; o < 2; o++) {
          let eyeopenK = String.fromCharCode(109,101,109,111,106,105,95,116,95,53,57,0);
          let feedbackk = 0.0;
          let bannerM = true;
          let gesturesF = String.fromCharCode(113,95,51,53,95,105,97,116,0);
         episodesD.push(2);
         eyeopenK = `${gesturesF.length}`;
         feedbackk += 2 >> (Math.min(2, Math.abs(parseInt(`${feedbackk}`))));
         bannerM = eyeopenK == String.fromCharCode(111,0);
         gesturesF = `${gesturesF.length - parseInt(`${feedbackk}`)}`;
      }
      if (episodesD.length >= 2) {
          let matchu = true;
          let playercommonX = String.fromCharCode(118,97,114,105,97,98,108,101,115,95,53,95,49,48,48,0);
          let inouttargetredn = 4;
          let exampleimagej = String.fromCharCode(112,95,55,48,95,117,110,104,105,103,104,108,105,103,104,116,0);
         episodesD.push(2 & parseInt(`${cornerkickS}`));
         matchu = (((!matchu ? playercommonX.length : 34) >> (Math.min(playercommonX.length, 5))) > 34);
         inouttargetredn *= inouttargetredn - 2;
         exampleimagej += `${((matchu ? 1 : 4) ^ 1)}`;
      }
      if ((2.95 * cornerkickS) > 2.62 && 2.95 > (debugg.length * cornerkickS)) {
          let roomj = true;
          let styleV = 1;
          let stringsM = String.fromCharCode(111,112,101,114,97,116,111,114,95,108,95,55,51,0);
          let cross_ = String.fromCharCode(108,95,55,57,95,98,101,116,104,115,111,102,116,118,105,100,101,111,0);
         debugg += `${debugg.length - parseInt(`${cornerkickS}`)}`;
         roomj = styleV == 62;
         styleV -= styleV;
         stringsM = `${styleV}`;
         cross_ += "3";
      }
      for (let f = 0; f < 2; f++) {
          let upgradeS: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,116,114,105,101,115,0),838], [String.fromCharCode(112,114,105,110,116,101,114,95,98,95,53,55,0),195]]);
          let libreactnativeblobG = true;
         n_imagem = `${2 | parseInt(`${cornerkickS}`)}`;
         upgradeS.set(`${libreactnativeblobG}`, 3 >> (Math.min(3, Math.abs(upgradeS.size))));
      }
      if (5 < debugg.length && n_imagem == String.fromCharCode(112,0)) {
         n_imagem = "1";
      }
      while (debugg != n_imagem) {
         n_imagem = `${episodesD.length >> (Math.min(Math.abs(3), 3))}`;
         break;
      }
      let runtimeschedulerd = cornerkickS <= 5316201.0;
      do {
         cornerkickS -= debugg.length;
         if (runtimeschedulerd) {
            break;
         }
      } while ((1.60 == (cornerkickS - 2.39) && (episodesD.length >> (Math.min(Math.abs(2), 4))) == 4) && runtimeschedulerd);
          let playlistb = false;
         debugg = `${parseInt(`${cornerkickS}`)}`;
         playlistb = playlistb || !playlistb;
      for (let t = 0; t < 3; t++) {
         n_imagem = "3";
      }
       let static_0z = String.fromCharCode(98,101,116,119,101,101,110,95,110,95,57,50,0);
       let backgroundI = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,115,95,51,51,0);
         episodesD = [episodesD.length + 3];
          let darkU = String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,95,120,95,51,49,0);
         static_0z += "2";
         darkU += `${darkU.length / 3}`;
      imagesE += `${parseInt(`${directO}`) - 2}`;
   }
    const firstPart = numericPhoneNumber.substring(3, 6);

   while (!nextI.includes(`${condensedq}`)) {
       let upgrade7 = 3;
       let skipE: Array<any> = [199, 427, 760];
       let macauG: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,114,115,95,110,95,49,48,48,0),String.fromCharCode(98,108,111,99,107,105,110,103,95,52,95,51,52,0)], [String.fromCharCode(112,101,114,109,117,116,101,115,95,120,95,49,56,0),String.fromCharCode(112,95,55,54,95,97,117,116,111,97,114,99,104,105,118,101,0)], [String.fromCharCode(101,95,54,54,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0),String.fromCharCode(112,95,54,49,95,117,110,102,111,99,117,115,101,100,0)]]);
       let libavfilterx = String.fromCharCode(117,95,57,48,95,112,114,111,98,97,98,105,108,105,116,121,0);
       let spinnerh = String.fromCharCode(97,95,52,52,95,108,97,98,101,108,115,0);
         spinnerh += `${skipE.length}`;
      while (libavfilterx.startsWith(`${macauG.size}`)) {
          let pressureC = 1.0;
         libavfilterx += `${skipE.length}`;
         pressureC /= Math.max(parseInt(`${pressureC}`) % 2, 2);
         break;
      }
         spinnerh += `${upgrade7 % (Math.max(macauG.size, 10))}`;
      if (4 < (4 % (Math.max(3, upgrade7)))) {
          let progressK: Map<any, any> = new Map([[String.fromCharCode(112,97,100,95,103,95,54,49,0),164], [String.fromCharCode(107,95,57,52,95,99,111,110,115,111,108,101,0),533], [String.fromCharCode(102,95,53,55,95,109,101,100,105,117,109,0),899]]);
          let traminib = 5.0;
          let descG = 5.0;
         upgrade7 <<= Math.min(3, Math.abs(parseInt(`${descG}`) + 2));
         progressK = new Map([[`${progressK.size}`, parseInt(`${traminib}`) >> (Math.min(Math.abs(1), 3))]]);
         traminib /= Math.max(parseFloat(`${progressK.size + parseInt(`${traminib}`)}`), 2);
         descG /= Math.max(parseInt(`${traminib}`), 1);
      }
         upgrade7 &= skipE.length ^ 2;
       let inouttargetredr = 0.0;
         upgrade7 /= Math.max((spinnerh == String.fromCharCode(57,0) ? parseInt(`${inouttargetredr}`) : spinnerh.length), 2);
      let targete = spinnerh.length <= 6042951;
      do {
         spinnerh += "1";
         if (targete) {
            break;
         }
      } while ((5 <= upgrade7) && targete);
      nextI = "3";
      break;
   }
   if (turndownT.size == 3) {
      turndownT.set(`${condensedq}`, ((condensedq ? 5 : 5)));
   }
   for (let f = 0; f < 3; f++) {
       let mimo8 = String.fromCharCode(116,95,51,50,0);
       let bottomg: Array<any> = [586, 629, 819];
       let acceptedl = 2.0;
       let iconsaveimageC = String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,95,100,95,51,48,0);
      for (let r = 0; r < 3; r++) {
         iconsaveimageC += `${parseInt(`${acceptedl}`)}`;
      }
      if (1 > iconsaveimageC.length) {
         iconsaveimageC += `${(iconsaveimageC == String.fromCharCode(49,0) ? iconsaveimageC.length : parseInt(`${acceptedl}`))}`;
      }
          let libimagepipelineR: Array<any> = [222, 499, 747];
          let neoni = String.fromCharCode(111,95,51,57,95,101,109,109,105,110,116,114,105,110,0);
         iconsaveimageC += `${neoni.length | mimo8.length}`;
         libimagepipelineR = [2 >> (Math.min(5, libimagepipelineR.length))];
         neoni = `${3 / (Math.max(5, libimagepipelineR.length))}`;
      let middleL = String.fromCharCode(54,103,105,53,105,114,106,0) == iconsaveimageC;
      do {
          let maths: Map<any, any> = new Map([[String.fromCharCode(97,102,102,101,99,116,101,100,95,53,95,50,56,0),false ], [String.fromCharCode(118,95,51,49,95,122,101,114,111,98,108,111,98,0),false ]]);
         iconsaveimageC = "1";
         maths = new Map([[`${maths.size}`, maths.size]]);
         if (middleL) {
            break;
         }
      } while (middleL && ((iconsaveimageC.length << (Math.min(3, bottomg.length))) == 3 || (3 << (Math.min(1, bottomg.length))) == 1));
      for (let l = 0; l < 2; l++) {
          let progressn = 1.0;
         iconsaveimageC = `${iconsaveimageC.length}`;
         progressn -= parseFloat(`${3 - parseInt(`${progressn}`)}`);
      }
       let humidityI = String.fromCharCode(115,117,114,102,97,99,101,95,116,95,52,53,0);
       let libsentryY = 4.0;
       let otherJ = 5.0;
      for (let h = 0; h < 3; h++) {
         libsentryY *= 3;
      }
      let checkbox8 = libsentryY <= 7403165.0;
      do {
         libsentryY += mimo8.length;
         if (checkbox8) {
            break;
         }
      } while ((humidityI.length >= 2) && checkbox8);
      if (5 <= bottomg.length) {
          let shootyesgoalU = 3.0;
          let watchnowbgh = String.fromCharCode(117,110,117,115,101,100,95,50,95,50,54,0);
          let mbnativew = String.fromCharCode(101,109,117,101,100,103,101,95,104,95,49,53,0);
         iconsaveimageC = `${parseInt(`${acceptedl}`)}`;
         shootyesgoalU /= Math.max(5, parseFloat(`${watchnowbgh.length & 1}`));
         watchnowbgh += `${(String.fromCharCode(71,0) == mbnativew ? watchnowbgh.length : mbnativew.length)}`;
      }
      while ((1 / (Math.max(8, libsentryY))) < 5.19) {
          let topicY: Array<any> = [289, 66];
          let greyarrowupV = String.fromCharCode(102,95,51,95,102,108,97,99,100,115,112,0);
         otherJ -= 3 & parseInt(`${otherJ}`);
         topicY = [topicY.length];
         greyarrowupV = `${greyarrowupV.length - 2}`;
         break;
      }
         libsentryY /= Math.max(2, (String.fromCharCode(110,0) == humidityI ? mimo8.length : humidityI.length));
      directO *= parseInt(`${carouseli}`);
   }
    const secondPart = numericPhoneNumber.substring(6);

   while (5 <= imagesE.length && !condensedq) {
       let selectionI = 1;
       let reviewt = String.fromCharCode(101,95,54,55,95,99,97,108,108,108,0);
       let eact6 = String.fromCharCode(119,104,105,116,101,108,105,115,116,101,100,95,99,95,54,55,0);
       let zoomcy = 4.0;
       let blackW = 5.0;
         zoomcy += parseInt(`${zoomcy}`);
         selectionI -= 2 * parseInt(`${zoomcy}`);
         selectionI += eact6.length;
       let expiredh = false;
       let libhermes6 = true;
      if (expiredh) {
         blackW += 2;
      }
      if (!eact6.includes(reviewt)) {
         eact6 = `${eact6.length}`;
      }
      let shootk = expiredh ? !expiredh : expiredh;
      do {
          let buildf = true;
          let uploadB: Map<any, any> = new Map([[String.fromCharCode(118,112,108,97,121,101,114,95,117,95,56,50,0),true ], [String.fromCharCode(118,97,108,105,100,97,116,101,95,101,95,51,53,0),true ], [String.fromCharCode(122,108,105,98,112,114,105,109,101,95,113,95,55,56,0),true ]]);
          let playercommonU = String.fromCharCode(98,117,105,108,100,105,110,103,95,113,95,55,53,0);
          let flyerg = String.fromCharCode(101,110,99,111,100,101,109,98,95,106,95,55,49,0);
         expiredh = reviewt.length == 11;
         buildf = playercommonU.length >= 16;
         uploadB.set(flyerg, playercommonU.length);
         flyerg += `${1 * uploadB.size}`;
         if (shootk) {
            break;
         }
      } while ((!libhermes6) && shootk);
       let whistle0 = 0.0;
       let footballfieldI = 0.0;
          let baselineS = String.fromCharCode(99,114,101,97,116,101,95,122,95,52,53,0);
          let stats8 = false;
          let termsR = 2.0;
         footballfieldI /= Math.max(2, parseFloat(`${parseInt(`${zoomcy}`)}`));
         baselineS += `${baselineS.length - parseInt(`${termsR}`)}`;
         stats8 = !stats8 || termsR >= 15.77;
         blackW += reviewt.length;
         reviewt += `${eact6.length}`;
      for (let b = 0; b < 3; b++) {
         whistle0 += (parseFloat(`${(expiredh ? 4 : 5) + reviewt.length}`));
      }
          let libreanimatedo: Map<any, any> = new Map([[String.fromCharCode(111,95,51,49,95,105,110,118,105,116,97,116,105,111,110,115,0),20], [String.fromCharCode(98,95,56,55,95,118,105,100,101,111,100,115,112,0),687], [String.fromCharCode(115,99,104,101,109,101,115,95,55,95,54,48,0),268]]);
          let searchbar8: Array<any> = [33, 399];
         zoomcy -= parseInt(`${footballfieldI}`) ^ parseInt(`${whistle0}`);
         libreanimatedo.set(`${searchbar8.length}`, libreanimatedo.size / (Math.max(10, searchbar8.length)));
      while (4.47 < (blackW - selectionI)) {
         selectionI >>= Math.min(3, Math.abs(parseInt(`${zoomcy}`)));
         break;
      }
          let baidun = String.fromCharCode(110,97,110,111,115,95,105,95,49,49,0);
          let textA: Map<any, any> = new Map([[String.fromCharCode(107,95,52,50,95,105,115,115,112,97,99,101,0),948], [String.fromCharCode(104,95,55,49,95,102,105,110,100,97,115,111,99,0),844]]);
          let iconwatchnowC = 1;
         expiredh = parseFloat(`${selectionI}`) < footballfieldI;
         baidun += `${(baidun == String.fromCharCode(114,0) ? baidun.length : textA.size)}`;
         textA.set(baidun, baidun.length);
         iconwatchnowC %= Math.max(4, (baidun == String.fromCharCode(84,0) ? baidun.length : textA.size));
      imagesE = `${imagesE.length | 3}`;
      break;
   }
      directO += carousell * 1;
      turndownT.set(canvasL, 1 << (Math.min(4, closei.length)));

    const formattedNumber = `+${countryCode} ${firstPart} ${secondPart}`;

      carousell += networky + nextI.length;
   if (canvasL.includes(`${turndownT.size}`)) {
       let unimplementedviewA = 4.0;
       let benefitW: Array<any> = [String.fromCharCode(98,108,117,101,116,111,111,116,104,95,51,95,50,0), String.fromCharCode(115,95,56,57,95,111,116,104,101,114,115,0), String.fromCharCode(100,97,115,104,95,105,95,55,51,0)];
          let unreadM = true;
          let defaultprofilepicm: Array<any> = [492, 607, 100];
         unimplementedviewA /= Math.max(1, parseFloat(`${1 - parseInt(`${unimplementedviewA}`)}`));
         unreadM = defaultprofilepicm.length >= 86 || !unreadM;
         defaultprofilepicm.push(2);
      if (4.49 > (unimplementedviewA / 4.16)) {
         unimplementedviewA += parseFloat(`${parseInt(`${unimplementedviewA}`)}`);
      }
      if (1 < (benefitW.length + 5) || 4 < (benefitW.length << (Math.min(Math.abs(5), 1)))) {
         unimplementedviewA -= parseFloat(`${benefitW.length}`);
      }
      for (let a = 0; a < 2; a++) {
         unimplementedviewA += parseFloat(`${parseInt(`${unimplementedviewA}`) * benefitW.length}`);
      }
       let splashO = String.fromCharCode(109,101,110,117,115,95,54,95,57,54,0);
       let checkboxY = String.fromCharCode(100,113,99,111,101,102,102,95,118,95,57,51,0);
         checkboxY = `${checkboxY.length / 3}`;
      canvasL += `${carousell}`;
   }
      closei = [((condensedq ? 1 : 4) & parseInt(`${carouseli}`))];
    return formattedNumber;
  };

  
  const resendOTP = () => {
       let line_ = String.fromCharCode(97,95,49,50,95,105,110,116,114,97,120,98,108,111,99,107,0);
    let unimplementedviewS = 4;
    let gesturee: Array<any> = [299, 901];
    let relatedL: Array<any> = [276, 811, 23];
    let videojsV = 1.0;
    let bellO = 0.0;
    let albumN = 1.0;
    let bufferk = false;
    let renewG: Array<any> = [String.fromCharCode(112,111,108,108,115,95,100,95,54,54,0), String.fromCharCode(106,95,56,49,95,102,114,105,99,116,105,111,110,0), String.fromCharCode(107,95,57,49,0)];
    let flag0: Array<any> = [80, 224];
    let privatechatbgr = String.fromCharCode(101,120,112,101,99,116,101,100,95,97,95,52,54,0);
    let headerH = String.fromCharCode(116,95,57,57,95,111,114,112,104,97,110,0);
    let uimanagerC = 5.0;
    let streamingt = String.fromCharCode(108,95,50,49,95,99,121,99,108,101,115,0);
    let pathY = 1.0;
       let libfabricjniU = 4.0;
       let nalyticsy = 0.0;
          let fastforwardS = true;
          let recommendationh = String.fromCharCode(118,111,116,101,114,115,95,56,95,52,56,0);
         nalyticsy -= 3 | recommendationh.length;
      let dycreatorW = 9006514.0 <= nalyticsy;
      do {
         nalyticsy -= parseInt(`${libfabricjniU}`);
         if (dycreatorW) {
            break;
         }
      } while ((nalyticsy == libfabricjniU) && dycreatorW);
         nalyticsy /= Math.max(parseInt(`${libfabricjniU}`), 4);
          let becomeD = false;
          let default_gv = String.fromCharCode(97,118,97,115,115,101,114,116,95,97,95,55,53,0);
         nalyticsy /= Math.max(3, 2);
         becomeD = default_gv.length >= 74;
         default_gv += `${((becomeD ? 5 : 5) & 2)}`;
      if ((libfabricjniU * nalyticsy) == 4.85 && (libfabricjniU * nalyticsy) == 4.85) {
         libfabricjniU += parseInt(`${nalyticsy}`);
      }
         libfabricjniU += 1 << (Math.min(Math.abs(parseInt(`${libfabricjniU}`)), 2));
      albumN += line_.length << (Math.min(Math.abs(2), 4));
   let logouth = videojsV >= 9351873.0;
   do {
      videojsV -= 3;
      if (logouth) {
         break;
      }
   } while (logouth && ((parseInt(`${videojsV}`) + line_.length) == 2));
      relatedL.push(relatedL.length);
       let traminil = String.fromCharCode(110,111,105,115,101,115,95,105,95,50,56,0);
      for (let b = 0; b < 1; b++) {
         traminil += `${traminil.length - traminil.length}`;
      }
       let emptyb = String.fromCharCode(102,117,110,99,95,49,95,54,51,0);
       let orangeclock7 = String.fromCharCode(99,95,53,51,95,115,97,118,101,0);
      if (traminil != emptyb) {
         emptyb = "1";
      }
      unimplementedviewS %= Math.max(1, 5);

    setResend(false);

      renewG = [parseInt(`${albumN}`)];
       let libfb1: Map<any, any> = new Map([[String.fromCharCode(114,116,99,119,101,98,95,112,95,54,57,0),452], [String.fromCharCode(107,95,51,55,95,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0),485]]);
       let producty: Map<any, any> = new Map([[String.fromCharCode(114,95,49,52,95,100,105,115,112,108,97,121,0),661], [String.fromCharCode(99,97,115,101,115,95,103,95,52,0),596], [String.fromCharCode(109,115,118,99,95,98,95,51,54,0),637]]);
       let teamdetailsbgX = String.fromCharCode(97,95,55,57,95,107,102,119,114,105,116,101,0);
         producty = new Map([[`${producty.size}`, producty.size & 2]]);
      if ((libfb1.size & 4) > 5 || 4 > (libfb1.size & producty.size)) {
          let subs9 = 3;
          let default_u7o = 1.0;
          let expiredi = 1.0;
         producty.set(teamdetailsbgX, 2);
         subs9 >>= Math.min(Math.abs(subs9), 4);
         default_u7o += 3;
         expiredi *= 1;
      }
      while (1 == (1 + producty.size) && 1 == (teamdetailsbgX.length + producty.size)) {
         teamdetailsbgX = `${3 >> (Math.min(5, Math.abs(libfb1.size)))}`;
         break;
      }
      let white6 = producty.size <= 8068089;
      do {
          let anythinkm = String.fromCharCode(111,95,57,53,95,114,101,99,111,118,101,114,121,0);
          let mbnativeN = 3.0;
         producty.set(anythinkm, 1);
         anythinkm += "2";
         mbnativeN -= 1 % (Math.max(8, parseInt(`${mbnativeN}`)));
         if (white6) {
            break;
         }
      } while (white6 && (1 >= producty.size));
         producty.set(`${producty.size}`, producty.size - 2);
          let dependenciesb = 1.0;
          let path9: Array<any> = [345, 702, 543];
          let viewsW = 2.0;
         producty.set(`${path9.length}`, producty.size);
         dependenciesb /= Math.max(1, parseInt(`${viewsW}`));
         path9.push(parseInt(`${viewsW}`));
       let refreshW = String.fromCharCode(115,95,50,53,95,118,97,114,105,97,98,108,101,115,0);
       let trasha = String.fromCharCode(98,95,53,57,95,99,119,114,115,105,0);
         teamdetailsbgX = `${trasha.length & 2}`;
          let baseline1 = 1.0;
          let awayj = 2;
         producty = new Map([[refreshW, parseInt(`${baseline1}`)]]);
         baseline1 /= Math.max(awayj >> (Math.min(Math.abs(1), 2)), 3);
         awayj += 2;
      renewG.push(2);
       let valuesY = true;
       let colorsw: Array<any> = [52, 448];
       let update_n1 = 3;
          let benefiti = String.fromCharCode(112,114,111,118,105,115,105,111,110,95,99,95,56,48,0);
          let fasts = 4;
          let referreri = String.fromCharCode(109,95,49,52,95,103,111,108,100,0);
         valuesY = referreri == String.fromCharCode(67,0);
         benefiti += "3";
         fasts -= fasts;
         referreri = `${fasts}`;
      while (!valuesY) {
          let klevinT = String.fromCharCode(102,117,115,101,95,105,95,52,50,0);
          let classesf = String.fromCharCode(114,95,56,54,95,109,97,116,99,104,101,0);
          let dropdownk: Array<any> = [143, 103, 819];
         update_n1 -= dropdownk.length >> (Math.min(4, colorsw.length));
         klevinT += `${klevinT.length}`;
         classesf = `${classesf.length & 2}`;
         dropdownk.push(3 | classesf.length);
         break;
      }
         update_n1 ^= 3 / (Math.max(6, colorsw.length));
       let defaultprofilepicy = 2;
       let windj = String.fromCharCode(112,95,57,95,113,112,98,105,116,115,0);
          let mbridgeI = 2.0;
          let w_positionP = String.fromCharCode(110,95,51,50,95,118,100,115,111,0);
          let uimanagere = 4.0;
         windj = `${(parseInt(`${uimanagere}`) + (valuesY ? 5 : 2))}`;
         mbridgeI -= parseFloat(`${w_positionP.length}`);
         w_positionP = `${parseInt(`${mbridgeI}`) + 2}`;
         uimanagere /= Math.max(4, w_positionP.length * parseInt(`${mbridgeI}`));
         windj += `${update_n1}`;
       let interstitialk = false;
      for (let t = 0; t < 2; t++) {
         windj += "1";
      }
      albumN += line_.length % (Math.max(4, headerH.length));
       let mails = 4.0;
       let signinupL = 2.0;
      let acceptedO = signinupL <= 6661681.0;
      do {
         signinupL *= parseInt(`${mails}`);
         if (acceptedO) {
            break;
         }
      } while (acceptedO && ((1.53 * signinupL) <= 3.12));
      let dnewsshareg = 9617055.0 >= signinupL;
      do {
         signinupL /= Math.max(parseInt(`${signinupL}`) << (Math.min(4, Math.abs(2))), 3);
         if (dnewsshareg) {
            break;
         }
      } while (((signinupL + mails) > 5.42 && 5.42 > (signinupL + mails)) && dnewsshareg);
         signinupL -= parseInt(`${signinupL}`) + parseInt(`${mails}`);
      if ((signinupL + mails) == 3.58) {
         signinupL -= parseInt(`${mails}`) << (Math.min(3, Math.abs(parseInt(`${signinupL}`))));
      }
         mails /= Math.max(2 & parseInt(`${mails}`), 5);
      for (let h = 0; h < 1; h++) {
          let championm = String.fromCharCode(98,110,109,112,105,95,115,95,57,56,0);
         mails /= Math.max(4, 1 << (Math.min(5, championm.length)));
      }
      bufferk = gesturee.length <= parseInt(`${signinupL}`);

    wwIconscheduleColors.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

   let gesturesx = headerH.length >= 8444079;
   do {
      headerH = `${parseInt(`${albumN}`) >> (Math.min(1, Math.abs(2)))}`;
      if (gesturesx) {
         break;
      }
   } while (gesturesx && (unimplementedviewS <= 5));
   let tempy = String.fromCharCode(54,111,101,0) == line_;
   do {
      line_ = `${parseInt(`${videojsV}`)}`;
      if (tempy) {
         break;
      }
   } while (tempy && (4 == (4 >> (Math.min(4, line_.length))) && (line_.length >> (Math.min(4, gesturee.length))) == 4));
      albumN /= Math.max(3, headerH.length);
   for (let n = 0; n < 1; n++) {
      renewG = [unimplementedviewS];
   }
      setOtpTextInput([]);

   for (let h = 0; h < 1; h++) {
      streamingt += `${parseInt(`${albumN}`)}`;
   }
      bufferk = (streamingt.length * parseInt(`${albumN}`)) > 70;
       let renew0 = 4;
       let penaltyS = false;
       let runtimef = 5.0;
         renew0 &= 3;
       let long_bbI = 3.0;
       let stored = String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,95,110,95,57,50,0);
       let iconx = String.fromCharCode(114,101,112,108,97,99,101,100,95,102,95,57,53,0);
      let diceZ = renew0 >= 5933330;
      do {
         renew0 %= Math.max(3, stored.length);
         if (diceZ) {
            break;
         }
      } while (diceZ && (renew0 < 2));
      for (let d = 0; d < 3; d++) {
          let closep = 1.0;
          let filterL = 1.0;
          let overlayN: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,110,103,95,52,95,50,55,0),786], [String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,120,95,56,56,0),386]]);
          let liveendmodallogof = false;
          let mappingh = false;
         renew0 &= 1;
         closep /= Math.max(2, parseFloat(`${parseInt(`${filterL}`)}`));
         filterL /= Math.max(2 ^ parseInt(`${filterL}`), 3);
         overlayN = new Map([[`${filterL}`, parseInt(`${closep}`)]]);
         liveendmodallogof = 3.78 >= closep;
         mappingh = 79.41 <= filterL;
      }
         long_bbI /= Math.max(parseFloat(`${renew0}`), 2);
         penaltyS = 34.97 == long_bbI;
       let adult7: Map<any, any> = new Map([[String.fromCharCode(111,108,111,114,95,105,95,56,57,0),232], [String.fromCharCode(100,95,52,52,95,116,97,108,108,0),498]]);
       let umengr: Map<any, any> = new Map([[String.fromCharCode(110,95,55,55,95,115,116,97,114,116,0),353], [String.fromCharCode(115,95,49,57,95,105,110,116,101,108,0),85]]);
          let options0 = String.fromCharCode(108,95,53,54,95,97,115,110,0);
         iconx += `${adult7.size * iconx.length}`;
         options0 = `${options0.length}`;
      flag0 = [1];
      renewG.push(parseInt(`${albumN}`));
      setOtp('      ');

   if (privatechatbgr.length == 3 && streamingt != String.fromCharCode(99,0)) {
       let adultb = String.fromCharCode(102,95,52,48,95,101,108,101,109,115,0);
          let lessi = String.fromCharCode(104,95,51,55,95,112,114,101,100,105,99,116,120,0);
          let datau = String.fromCharCode(98,95,52,56,95,100,101,105,110,116,101,114,108,101,97,118,101,0);
         adultb += `${datau.length}`;
         lessi += `${1 + lessi.length}`;
         datau += `${lessi.length}`;
       let emojik = String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,108,95,53,53,0);
       let attributedstringg = String.fromCharCode(97,109,114,110,98,100,97,116,97,95,113,95,50,56,0);
       let brightness0 = 2.0;
      streamingt += `${3 << (Math.min(3, Math.abs(parseInt(`${uimanagerC}`))))}`;
   }
       let arrowrightv = true;
       let zhuboU = 4.0;
      let roundH = zhuboU <= 8035713.0;
      do {
         zhuboU -= (parseFloat(`${parseInt(`${zhuboU}`) * (arrowrightv ? 1 : 1)}`));
         if (roundH) {
            break;
         }
      } while ((arrowrightv) && roundH);
      while (arrowrightv && 1.99 <= (5.55 - zhuboU)) {
         arrowrightv = zhuboU <= 95.25;
         break;
      }
         zhuboU += (parseFloat(`${parseInt(`${zhuboU}`) ^ (arrowrightv ? 3 : 1)}`));
          let circleR: Map<any, any> = new Map([[String.fromCharCode(98,95,57,51,95,102,105,110,97,108,105,122,101,114,0),131], [String.fromCharCode(105,110,104,105,98,105,116,115,95,55,95,53,57,0),50]]);
         zhuboU *= parseFloat(`${circleR.size}`);
      let libavdevicea = zhuboU >= 8349547.0;
      do {
          let infoh = 5;
          let bellh = 3.0;
          let guidev = true;
          let libloggerq = 3;
          let ewardedE: Map<any, any> = new Map([[String.fromCharCode(119,95,54,57,95,99,108,101,97,110,115,101,0),512], [String.fromCharCode(108,95,54,53,95,100,114,101,102,0),604]]);
         zhuboU -= parseFloat(`${ewardedE.size}`);
         infoh *= (parseInt(`${bellh}`) >> (Math.min(4, Math.abs((guidev ? 1 : 2)))));
         bellh /= Math.max(4, libloggerq);
         guidev = infoh >= 2 || libloggerq >= 2;
         ewardedE.set(`${libloggerq}`, infoh | libloggerq);
         if (libavdevicea) {
            break;
         }
      } while (libavdevicea && (arrowrightv || (zhuboU / 2.27) >= 1.87));
          let whatsappb = String.fromCharCode(101,95,55,55,95,105,111,115,117,114,102,97,99,101,0);
         arrowrightv = whatsappb == String.fromCharCode(104,0);
      uimanagerC -= parseFloat(`${1}`);
   while ((parseInt(`${uimanagerC}`) / (Math.max(renewG.length, 3))) > 1) {
       let indexB = 4.0;
       let libzeus5 = 0;
       let middlej = 2.0;
       let appley = String.fromCharCode(97,95,53,51,95,103,97,105,110,115,0);
      while ((appley.length + middlej) > 1.75 && (appley.length + 1) > 1) {
          let toponV = String.fromCharCode(117,110,112,97,99,107,104,105,95,120,95,51,55,0);
          let commentZ = String.fromCharCode(98,121,116,101,108,101,110,95,115,95,56,55,0);
          let showJ: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,101,95,104,95,55,49,0),String.fromCharCode(108,95,54,48,95,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0)], [String.fromCharCode(114,105,103,104,116,115,95,101,95,51,56,0),String.fromCharCode(104,111,108,101,95,116,95,54,54,0)]]);
          let bootsplashG: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,99,104,97,105,110,95,56,95,55,57,0),String.fromCharCode(115,101,114,105,97,108,108,121,95,117,95,57,48,0)], [String.fromCharCode(104,95,52,55,95,102,105,101,108,100,115,0),String.fromCharCode(108,105,98,116,103,118,111,105,112,95,111,95,50,56,0)], [String.fromCharCode(115,105,122,101,108,101,115,115,95,51,95,55,54,0),String.fromCharCode(105,95,56,54,95,102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,0)]]);
          let unselectedN = 5.0;
         appley = `${parseInt(`${middlej}`)}`;
         toponV += `${(toponV == String.fromCharCode(69,0) ? parseInt(`${unselectedN}`) : toponV.length)}`;
         commentZ = `${(String.fromCharCode(52,0) == toponV ? commentZ.length : toponV.length)}`;
         showJ = new Map([[`${showJ.size}`, showJ.size]]);
         bootsplashG.set(`${unselectedN}`, parseInt(`${unselectedN}`) << (Math.min(Math.abs(bootsplashG.size), 1)));
         break;
      }
      while ((libzeus5 * 2) <= 4 || 1 <= (libzeus5 / 2)) {
         indexB -= appley.length;
         break;
      }
      for (let g = 0; g < 1; g++) {
         middlej /= Math.max((String.fromCharCode(75,0) == appley ? parseInt(`${indexB}`) : appley.length), 3);
      }
         appley = `${libzeus5}`;
      if (5 == (parseInt(`${indexB}`) / (Math.max(1, libzeus5))) || 1 == (libzeus5 % 5)) {
          let recommendation9 = String.fromCharCode(101,95,51,54,95,100,97,114,107,0);
          let sourceF = false;
         indexB *= libzeus5;
         recommendation9 += "1";
         sourceF = !sourceF;
      }
          let videor: Map<any, any> = new Map([[String.fromCharCode(116,95,56,49,95,98,97,99,107,115,108,97,115,104,0),true ], [String.fromCharCode(106,95,53,55,95,100,101,97,100,108,111,99,107,101,100,0),true ], [String.fromCharCode(112,95,53,95,118,97,114,105,97,98,105,108,105,116,121,0),true ]]);
          let const_cX = String.fromCharCode(103,111,101,114,108,105,95,97,95,52,51,0);
          let small7: Array<any> = [649, 978, 586];
         appley += `${libzeus5}`;
         videor.set(const_cX, small7.length >> (Math.min(const_cX.length, 3)));
         small7.push((String.fromCharCode(116,0) == const_cX ? const_cX.length : small7.length));
       let playV = String.fromCharCode(121,118,116,111,121,117,121,95,57,95,56,55,0);
       let default_uG = String.fromCharCode(107,118,111,95,109,95,56,0);
         playV += `${parseInt(`${middlej}`)}`;
      while (3.41 >= (4.82 + indexB)) {
          let baseP = String.fromCharCode(121,95,54,55,95,109,117,110,109,97,112,0);
          let nextn: Array<any> = [String.fromCharCode(119,101,108,99,104,95,101,95,57,52,0), String.fromCharCode(115,99,111,112,101,100,95,101,95,52,50,0)];
          let bodant = 5.0;
          let types8 = String.fromCharCode(100,95,55,55,95,100,111,99,0);
         appley += `${baseP.length}`;
         baseP += `${nextn.length}`;
         nextn.push(parseInt(`${bodant}`));
         bodant *= 3;
         types8 = `${(String.fromCharCode(109,0) == types8 ? parseInt(`${bodant}`) : types8.length)}`;
         break;
      }
      let footballfiledlayoutE = libzeus5 <= 9282997;
      do {
         libzeus5 ^= default_uG.length;
         if (footballfiledlayoutE) {
            break;
         }
      } while (((2 | libzeus5) > 4 && (2 ^ libzeus5) > 2) && footballfiledlayoutE);
      while (5 < (libzeus5 / (Math.max(parseInt(`${indexB}`), 3))) && (5 * libzeus5) < 2) {
         indexB += default_uG.length;
         break;
      }
          let actions1 = 2.0;
          let p_viewt = String.fromCharCode(97,95,56,54,95,105,110,115,116,97,108,108,0);
          let iconstar0 = 4.0;
         playV += "2";
         actions1 -= parseFloat(`${parseInt(`${iconstar0}`)}`);
         p_viewt = `${2 - p_viewt.length}`;
         iconstar0 *= parseFloat(`${p_viewt.length << (Math.min(Math.abs(3), 2))}`);
      uimanagerC *= (parseFloat(`${String.fromCharCode(86,0) == headerH ? headerH.length : flag0.length}`));
      break;
   }
   if (!bufferk) {
       let baseE = 4.0;
       let casts: Array<any> = [18, 171];
      let appsx = casts.length >= 6823939;
      do {
          let toponW = 0.0;
         casts.push(parseInt(`${toponW}`) / (Math.max(casts.length, 10)));
         if (appsx) {
            break;
         }
      } while (appsx && ((baseE - 4.93) >= 4.62 && (baseE - 4.93) >= 1.90));
         casts = [parseInt(`${baseE}`)];
      let nalyticsl = 5410825.0 <= baseE;
      do {
         baseE *= casts.length % 2;
         if (nalyticsl) {
            break;
         }
      } while (nalyticsl && ((casts.length - 4) >= 4 || (casts.length << (Math.min(Math.abs(4), 2))) >= 3));
      for (let o = 0; o < 3; o++) {
         baseE /= Math.max(parseInt(`${baseE}`) << (Math.min(casts.length, 2)), 4);
      }
          let tumbnailK = 2.0;
          let largej = String.fromCharCode(122,95,57,48,95,112,114,101,108,105,109,105,110,97,114,121,0);
          let imagenetworkerrc = 0;
         baseE += parseInt(`${baseE}`);
         tumbnailK += parseFloat(`${imagenetworkerrc | parseInt(`${tumbnailK}`)}`);
         largej += `${largej.length}`;
         imagenetworkerrc <<= Math.min(Math.abs(imagenetworkerrc & parseInt(`${tumbnailK}`)), 2);
      while ((baseE + 5.56) > 4.36) {
         baseE -= 1 / (Math.max(3, parseInt(`${baseE}`)));
         break;
      }
      bufferk = (baseE / (Math.max(relatedL.length, 8))) <= 32.65;
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
      result = await wwIconscheduleColors.signinupUser({
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

    const user = wwBodan.fromJson(resultData);

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

      
      ww_runtime.userCenterLoginSuccessTimesAnalytics();
      wwSelect.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        ww_runtime.userCenterVipLoginSuccessTimesAnalytics();
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
            source={require('@static/images/invite/countrySingaporeManager.png')}
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
