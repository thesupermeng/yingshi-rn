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
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import { useDispatch } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';

import { ResendCountDown } from './wawa_basketballawayteam';
import { addUserAuthState } from '@redux/actions/wawa_loginsuccess';

import { changeScreenAction } from '@redux/actions/wawa_related';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { wawaEvent } from '@api';
import { useSelector } from '@hooks/wawa_root';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import wawaSina from '../../../AppsFlyer/wawa_fcdaebecbcbafcdfceaaeccfeacdb';


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

type wawaSuccessArea = {
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
}: wawaSuccessArea) => {
  const { colors } = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); 

  const [focusedInput, setFocusedInput] = useState(null); 

  const userState = useSelector<wawaPhoneControls>('userReducer');

  const styles = useMemo(() => createStyles({
    colors,
  }), []);

  const handleFocus = (index: any) => {
    console.log(index);
    setFocusedInput(index);
  };

  const handleBlur = () => {
       let positionfieldc = false;
    let defaultteamx = String.fromCharCode(107,95,55,50,95,104,101,105,103,104,116,115,0);
    let time_v7 = String.fromCharCode(117,110,114,101,115,111,108,118,101,100,95,98,95,55,55,0);
    let ksadE = 1.0;
    let selectb: Map<any, any> = new Map([[String.fromCharCode(105,116,117,110,101,115,95,111,95,54,48,0),497], [String.fromCharCode(114,95,49,54,95,99,101,108,108,115,0),508]]);
    let iconmegaphonep = String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,100,95,57,57,0);
    let whitebell2 = String.fromCharCode(101,95,53,48,95,112,105,120,102,109,116,115,0);
    let configure6 = String.fromCharCode(116,111,117,116,95,50,95,50,57,0);
    let preview6: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,116,101,95,120,95,49,48,0),142], [String.fromCharCode(100,95,54,51,95,109,97,116,104,101,109,97,116,105,99,115,0),760], [String.fromCharCode(105,95,54,54,95,102,105,102,111,115,0),914]]);
    let whiteanimationliveh = String.fromCharCode(108,111,103,102,110,95,112,95,54,48,0);
      configure6 = `${2 >> (Math.min(3, defaultteamx.length))}`;
   if (configure6.length < 5) {
      ksadE *= 3 >> (Math.min(5, iconmegaphonep.length));
   }
   for (let p = 0; p < 2; p++) {
      whitebell2 = `${configure6.length}`;
   }
   for (let b = 0; b < 1; b++) {
      preview6 = new Map([[`${preview6.size}`, 1 | preview6.size]]);
   }
       let playe = String.fromCharCode(120,95,50,52,95,108,111,103,111,0);
       let emojiheartY = String.fromCharCode(99,95,51,95,100,101,99,111,100,101,0);
       let mutedl = false;
      for (let l = 0; l < 3; l++) {
         emojiheartY += "3";
      }
       let hiadR: Map<any, any> = new Map([[String.fromCharCode(110,101,120,116,108,95,104,95,53,49,0),88], [String.fromCharCode(118,112,109,116,95,54,95,55,53,0),209], [String.fromCharCode(121,95,48,95,116,97,103,115,116,114,0),982]]);
      for (let x = 0; x < 1; x++) {
         emojiheartY += `${3 ^ emojiheartY.length}`;
      }
         mutedl = playe == emojiheartY;
      let eyeopenC = mutedl ? !mutedl : mutedl;
      do {
         mutedl = emojiheartY.includes(`${mutedl}`);
         if (eyeopenC) {
            break;
         }
      } while (eyeopenC && (emojiheartY.length > 2));
      if (playe.endsWith(`${emojiheartY.length}`)) {
         emojiheartY = `${emojiheartY.length / (Math.max(playe.length, 3))}`;
      }
         mutedl = String.fromCharCode(68,0) == playe;
      if (2 > playe.length) {
         emojiheartY += `${playe.length}`;
      }
         hiadR = new Map([[emojiheartY, (playe == String.fromCharCode(85,0) ? playe.length : emojiheartY.length)]]);
      ksadE /= Math.max((2 << (Math.min(5, Math.abs((positionfieldc ? 5 : 5))))), 2);
   let static_56m = 7521822 <= whitebell2.length;
   do {
      whitebell2 = `${configure6.length}`;
      if (static_56m) {
         break;
      }
   } while ((!iconmegaphonep.endsWith(`${whitebell2.length}`)) && static_56m);
   if (whitebell2.endsWith(`${iconmegaphonep.length}`)) {
      whitebell2 = `${whitebell2.length}`;
   }
   if (defaultteamx.length == 5) {
      selectb = new Map([[defaultteamx, defaultteamx.length * 2]]);
   }
      iconmegaphonep += `${selectb.size}`;
   if (Array.from(preview6.keys()).includes(`${ksadE}`)) {
       let iconwatchI = 4.0;
         iconwatchI *= parseInt(`${iconwatchI}`) >> (Math.min(2, Math.abs(2)));
      while ((5.98 * iconwatchI) == 1.14 && (5.98 + iconwatchI) == 5.38) {
         iconwatchI -= parseInt(`${iconwatchI}`);
         break;
      }
          let selectedL: Array<any> = [616, 665];
          let iconcurrentmatchD = 0;
          let sinaX = true;
         iconwatchI += parseInt(`${iconwatchI}`);
         selectedL = [(1 | (sinaX ? 3 : 4))];
         iconcurrentmatchD %= Math.max(3, 2 ^ iconcurrentmatchD);
         sinaX = sinaX || 4 == iconcurrentmatchD;
      preview6 = new Map([[configure6, 1]]);
   }
      positionfieldc = !iconmegaphonep.startsWith(`${positionfieldc}`);
   while (3 < time_v7.length) {
       let circleN: Array<any> = [913, 506, 203];
       let windT: Map<any, any> = new Map([[String.fromCharCode(104,95,50,49,95,115,105,109,112,108,105,102,105,101,100,0),false ], [String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,95,116,95,49,55,0),true ]]);
       let fcopy_jb = 3.0;
       let iconclosewhiteg = 1.0;
       let trophyR = String.fromCharCode(103,101,110,101,114,97,116,101,95,97,95,51,57,0);
         circleN.push(1 % (Math.max(7, circleN.length)));
         fcopy_jb *= parseInt(`${fcopy_jb}`) % 2;
      while (!circleN.includes(iconclosewhiteg)) {
          let delegate_ml = 2.0;
          let sentry4 = String.fromCharCode(115,104,97,100,101,95,111,95,53,50,0);
         circleN = [parseInt(`${iconclosewhiteg}`)];
         delegate_ml *= parseInt(`${delegate_ml}`) % (Math.max(1, 3));
         sentry4 += `${parseInt(`${delegate_ml}`)}`;
         break;
      }
         circleN.push(parseInt(`${fcopy_jb}`));
       let footballtrophyK = 2.0;
      while (!circleN.includes(footballtrophyK)) {
          let bridgeo: Map<any, any> = new Map([[String.fromCharCode(109,101,110,116,105,111,110,115,95,112,95,57,49,0),911], [String.fromCharCode(107,95,54,50,95,112,97,115,116,101,98,111,97,114,100,0),783]]);
          let playf = 5;
          let referrerq = true;
          let logoutO: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,100,101,114,95,102,95,53,54,0),601], [String.fromCharCode(113,95,54,49,95,104,107,100,102,0),59], [String.fromCharCode(100,95,55,52,95,102,114,97,109,101,102,111,114,109,97,116,0),119]]);
          let dangerh: Array<any> = [747, 125, 345];
         footballtrophyK *= parseInt(`${footballtrophyK}`) / (Math.max(6, playf));
         bridgeo.set(`${referrerq}`, 2 << (Math.min(2, Math.abs(bridgeo.size))));
         playf %= Math.max(5, 2);
         logoutO.set(`${dangerh.length}`, dangerh.length);
         break;
      }
      for (let p = 0; p < 2; p++) {
         iconclosewhiteg /= Math.max(4, parseFloat(`${windT.size / (Math.max(10, parseInt(`${fcopy_jb}`)))}`));
      }
      let smallsound4 = iconclosewhiteg >= 5557465.0;
      do {
         iconclosewhiteg += parseFloat(`${parseInt(`${fcopy_jb}`)}`);
         if (smallsound4) {
            break;
         }
      } while ((5 == (3 ^ trophyR.length)) && smallsound4);
         trophyR = `${3 >> (Math.min(2, trophyR.length))}`;
       let iconrightorangeP = 5.0;
       let mergerd = 2.0;
       let r_viewt = String.fromCharCode(112,97,115,99,97,108,95,115,95,54,52,0);
       let orangedownarrowH = String.fromCharCode(112,95,51,50,95,115,116,114,111,107,101,0);
         iconclosewhiteg *= parseFloat(`${2 + parseInt(`${iconrightorangeP}`)}`);
      let footballtrophyw = orangedownarrowH.length >= 5798536;
      do {
         orangedownarrowH += `${3 % (Math.max(8, parseInt(`${iconclosewhiteg}`)))}`;
         if (footballtrophyw) {
            break;
         }
      } while (((circleN.length / (Math.max(orangedownarrowH.length, 10))) <= 2 || (2 / (Math.max(7, circleN.length))) <= 2) && footballtrophyw);
         orangedownarrowH = `${(orangedownarrowH == String.fromCharCode(121,0) ? r_viewt.length : orangedownarrowH.length)}`;
      while (trophyR != String.fromCharCode(80,0)) {
          let basketballs = 2.0;
         orangedownarrowH = `${1 - orangedownarrowH.length}`;
         basketballs += parseFloat(`${parseInt(`${basketballs}`)}`);
         break;
      }
      configure6 += `${defaultteamx.length}`;
      break;
   }
       let themeA = 1.0;
      if (3.45 > (themeA - 1.91) && 2.67 > (themeA - 1.91)) {
         themeA -= 3 * parseInt(`${themeA}`);
      }
          let popuph: Map<any, any> = new Map([[String.fromCharCode(101,107,121,95,55,95,49,52,0),666], [String.fromCharCode(118,95,50,52,95,99,111,99,111,115,100,120,0),469], [String.fromCharCode(111,95,51,56,95,114,101,99,111,114,100,105,110,103,0),148]]);
         themeA += popuph.size;
         themeA *= 3 + parseInt(`${themeA}`);
      whitebell2 = `${whitebell2.length}`;
       let confirmationC = String.fromCharCode(101,95,55,56,95,108,105,98,120,109,108,0);
       let downarrows = 1;
      for (let e = 0; e < 2; e++) {
          let graphD = 4.0;
          let area0: Array<any> = [483, 71];
          let unreadh = 3;
          let libswresamples = true;
          let libfollym = String.fromCharCode(110,98,105,116,115,95,118,95,50,0);
         confirmationC += `${3 | libfollym.length}`;
         graphD -= parseFloat(`${parseInt(`${graphD}`)}`);
         area0 = [unreadh * 2];
         unreadh *= area0.length & parseInt(`${graphD}`);
         libswresamples = unreadh < 22;
         libfollym = `${parseInt(`${graphD}`)}`;
      }
         downarrows %= Math.max(5, confirmationC.length << (Math.min(Math.abs(3), 1)));
      while ((downarrows | confirmationC.length) < 5) {
         downarrows |= downarrows;
         break;
      }
         downarrows -= confirmationC.length;
      if (4 == confirmationC.length) {
         downarrows >>= Math.min(Math.abs(3 ^ downarrows), 2);
      }
      for (let j = 0; j < 2; j++) {
          let moduleL = String.fromCharCode(107,95,51,54,95,101,118,114,99,100,97,116,97,0);
          let basketballmatchdetailbgo = String.fromCharCode(110,95,55,50,95,112,97,115,112,0);
         downarrows /= Math.max(3, 4);
         moduleL = `${moduleL.length}`;
         basketballmatchdetailbgo += `${(basketballmatchdetailbgo == String.fromCharCode(77,0) ? moduleL.length : basketballmatchdetailbgo.length)}`;
      }
      whiteanimationliveh += `${(1 & (positionfieldc ? 4 : 2))}`;
   let othermatchdetailbgH = positionfieldc ? !positionfieldc : positionfieldc;
   do {
       let eventx = 2.0;
       let iconwatchf = 5.0;
       let m_managery = 4;
       let iconadslinkt = true;
      while (iconwatchf == m_managery) {
         iconwatchf *= parseInt(`${iconwatchf}`);
         break;
      }
      if (1 < (m_managery * parseInt(`${iconwatchf}`)) && (parseInt(`${iconwatchf}`) * m_managery) < 1) {
         m_managery &= m_managery;
      }
         iconwatchf *= 3 << (Math.min(Math.abs(m_managery), 3));
         eventx /= Math.max(3, parseFloat(`${parseInt(`${eventx}`) / 2}`));
      if (iconwatchf <= m_managery) {
         m_managery &= 1;
      }
      let iconcloseG = iconadslinkt ? !iconadslinkt : iconadslinkt;
      do {
         iconadslinkt = 75.25 == iconwatchf;
         if (iconcloseG) {
            break;
         }
      } while ((iconadslinkt || 1.66 == (3.1 * iconwatchf)) && iconcloseG);
      let clockM = 6931553 <= m_managery;
      do {
         m_managery *= (parseInt(`${iconwatchf}`) * (iconadslinkt ? 4 : 1));
         if (clockM) {
            break;
         }
      } while (((eventx / (Math.max(4.42, 10))) < 4.65) && clockM);
      while ((m_managery % 4) >= 2) {
          let albumN: Array<any> = [String.fromCharCode(99,108,101,97,114,95,105,95,51,54,0), String.fromCharCode(104,95,51,48,95,100,101,108,101,103,97,116,101,115,0)];
          let rightp = 5.0;
          let m_positionK = String.fromCharCode(107,95,50,48,95,115,117,112,101,114,120,115,97,105,0);
         m_managery %= Math.max(3, 1);
         albumN = [3 - albumN.length];
         rightp += (parseFloat(`${m_positionK == String.fromCharCode(71,0) ? parseInt(`${rightp}`) : m_positionK.length}`));
         break;
      }
      for (let l = 0; l < 1; l++) {
         iconwatchf /= Math.max(3, m_managery);
      }
      let unreadA = 5061145.0 <= iconwatchf;
      do {
         iconwatchf *= m_managery / (Math.max(parseInt(`${iconwatchf}`), 3));
         if (unreadA) {
            break;
         }
      } while (((iconwatchf / 3.42) < 3.88) && unreadA);
          let tempnodatagif6: Map<any, any> = new Map([[String.fromCharCode(119,95,51,57,95,97,99,99,101,115,115,105,98,108,105,116,121,0),804], [String.fromCharCode(103,95,55,55,95,114,101,110,100,101,114,0),858], [String.fromCharCode(116,95,55,56,95,109,97,105,108,116,111,0),616]]);
         iconwatchf *= ((iconadslinkt ? 3 : 4) << (Math.min(Math.abs(m_managery), 5)));
         tempnodatagif6.set(`${tempnodatagif6.size}`, 3);
         m_managery /= Math.max(m_managery, 1);
      positionfieldc = iconwatchf < 43.66;
      if (othermatchdetailbgH) {
         break;
      }
   } while (othermatchdetailbgH && (!positionfieldc && whiteanimationliveh.length >= 2));
   let sentryT = 6709179 >= whitebell2.length;
   do {
      whitebell2 += `${time_v7.length & configure6.length}`;
      if (sentryT) {
         break;
      }
   } while ((whiteanimationliveh.length > 2 || whitebell2 != String.fromCharCode(67,0)) && sentryT);
   let subsI = 8142404 <= whiteanimationliveh.length;
   do {
      whiteanimationliveh += "2";
      if (subsI) {
         break;
      }
   } while (subsI && (iconmegaphonep == whiteanimationliveh));
       let gradleV = 1;
       let watchnowbgb: Array<any> = [841, 590];
          let eighteenT = 4.0;
          let latnI = String.fromCharCode(119,95,50,55,95,112,97,116,116,101,114,110,115,0);
         watchnowbgb.push(3);
         eighteenT += 3;
         latnI = `${latnI.length - 3}`;
         watchnowbgb.push(gradleV ^ watchnowbgb.length);
      for (let n = 0; n < 3; n++) {
          let dicelogoe = true;
         gradleV %= Math.max(gradleV * watchnowbgb.length, 3);
         dicelogoe = dicelogoe || !dicelogoe;
      }
       let attributedstringy = String.fromCharCode(98,95,57,56,95,103,101,116,115,111,99,107,97,100,100,114,0);
       let downloadn = String.fromCharCode(112,95,56,56,95,114,101,97,99,116,105,111,110,0);
       let regengg = 0.0;
       let mbnative_ = 4.0;
      if (watchnowbgb.length > regengg) {
          let rightV: Map<any, any> = new Map([[String.fromCharCode(114,95,56,57,95,100,101,115,99,114,105,112,116,111,114,115,0),527], [String.fromCharCode(115,119,97,112,112,101,100,95,54,95,49,52,0),193]]);
         watchnowbgb.push((downloadn == String.fromCharCode(78,0) ? watchnowbgb.length : downloadn.length));
         rightV.set(`${rightV.size}`, rightV.size >> (Math.min(Math.abs(2), 5)));
      }
      iconmegaphonep = `${whiteanimationliveh.length - 2}`;
   if (2 < (1 >> (Math.min(4, Math.abs(preview6.size)))) && 4 < (1 >> (Math.min(3, Math.abs(preview6.size))))) {
      whiteanimationliveh = `${2 ^ preview6.size}`;
   }
   for (let x = 0; x < 2; x++) {
      preview6.set(defaultteamx, defaultteamx.length ^ 2);
   }
   for (let l = 0; l < 1; l++) {
      whiteanimationliveh += `${time_v7.length}`;
   }
   if (configure6.endsWith(`${time_v7.length}`)) {
       let mbbannerk = 2.0;
       let plashW = String.fromCharCode(119,97,108,115,104,120,95,49,95,56,57,0);
      if (!plashW.includes(`${mbbannerk}`)) {
         plashW += `${plashW.length - parseInt(`${mbbannerk}`)}`;
      }
         plashW = "3";
       let templateprocessorV: Array<any> = [189, 376, 387];
       let thailandD = true;
       let pagen = true;
       let custom_ = String.fromCharCode(106,95,52,49,95,109,112,101,103,112,115,0);
       let resendj = String.fromCharCode(107,95,49,51,95,115,121,110,99,104,114,111,110,111,117,115,0);
      for (let t = 0; t < 1; t++) {
         mbbannerk -= 1;
      }
      time_v7 += "3";
   }

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  const formatPhoneNumber = (phoneNumber) => {
       let spinnerL = String.fromCharCode(118,97,108,117,101,95,105,95,57,53,0);
    let controlL = String.fromCharCode(111,95,56,50,95,100,105,115,112,111,115,97,108,0);
    let emptya = 3;
    let statisticsc = String.fromCharCode(113,95,55,52,95,100,97,114,116,115,0);
    let libfabricjni4 = String.fromCharCode(108,95,53,53,95,104,101,108,112,0);
    let playercommonf = 5.0;
    let fasta = String.fromCharCode(117,95,50,56,95,101,120,112,111,110,101,110,116,0);
    let larged = String.fromCharCode(121,95,56,53,95,99,97,118,115,118,105,100,101,111,0);
    let usernameu: Map<any, any> = new Map([[String.fromCharCode(98,95,53,57,95,97,98,111,114,116,0),683], [String.fromCharCode(112,117,115,104,105,110,103,95,53,95,56,52,0),332], [String.fromCharCode(114,101,112,111,114,116,95,98,95,56,50,0),171]]);
    let circlee = String.fromCharCode(116,119,111,108,97,109,101,95,48,95,54,48,0);
    let libsentry8 = 0;
    let commons = 0;
    let scoreu = 5.0;
    let expiredx = String.fromCharCode(99,95,57,52,95,101,102,102,101,99,116,105,118,101,108,121,0);
       let nextz = String.fromCharCode(106,95,52,49,95,97,102,102,105,110,101,0);
       let country5 = 2;
       let usernamek: Map<any, any> = new Map([[String.fromCharCode(113,95,51,50,95,111,114,105,103,110,97,108,0),60], [String.fromCharCode(110,101,97,114,95,117,95,57,51,0),461]]);
      if (5 == (nextz.length | country5)) {
          let humidityV: Array<any> = [905, 592];
          let areax = 2.0;
         country5 |= (String.fromCharCode(73,0) == nextz ? nextz.length : usernamek.size);
         humidityV = [3 ^ humidityV.length];
         areax -= parseFloat(`${parseInt(`${areax}`)}`);
      }
      for (let z = 0; z < 2; z++) {
         usernamek = new Map([[`${country5}`, nextz.length]]);
      }
         usernamek.set(`${country5}`, usernamek.size / (Math.max(9, country5)));
      let predictionwin1 = String.fromCharCode(53,49,111,51,0) == nextz;
      do {
         nextz += `${nextz.length % (Math.max(9, country5))}`;
         if (predictionwin1) {
            break;
         }
      } while (((country5 * 1) < 2) && predictionwin1);
         country5 *= usernamek.size | 3;
         country5 -= 3 / (Math.max(2, usernamek.size));
       let verticalx = String.fromCharCode(98,117,114,115,116,95,55,95,56,48,0);
       let whitevideoliveX = String.fromCharCode(97,95,55,53,95,109,97,115,107,101,100,99,108,97,109,112,0);
         whitevideoliveX = `${verticalx.length % 3}`;
          let profileframeP: Map<any, any> = new Map([[String.fromCharCode(106,95,55,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0),358], [String.fromCharCode(118,112,109,99,95,51,95,54,56,0),917], [String.fromCharCode(114,101,115,105,122,101,95,103,95,52,54,0),506]]);
          let reminderj = 3;
          let whiteanimationlive0 = 2.0;
         nextz += `${profileframeP.size}`;
         profileframeP = new Map([[`${reminderj}`, reminderj]]);
         whiteanimationlive0 *= parseFloat(`${2 * reminderj}`);
      playercommonf *= parseFloat(`${nextz.length}`);
      fasta = `${libfabricjni4.length}`;
      libsentry8 <<= Math.min(1, Math.abs(1 >> (Math.min(5, statisticsc.length))));
   for (let g = 0; g < 1; g++) {
      larged += `${commons + controlL.length}`;
   }
       let bingo = true;
       let proxyq: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,115,107,95,49,95,51,57,0),true ], [String.fromCharCode(113,95,52,50,95,115,101,99,0),false ]]);
       let libhermesC = false;
         proxyq.set(`${bingo}`, ((libhermesC ? 1 : 1)));
      if (3 >= (proxyq.size ^ 4)) {
         proxyq.set(`${libhermesC}`, ((libhermesC ? 5 : 5) / (Math.max(proxyq.size, 4))));
      }
      let reactnativeultimatelistview7 = libhermesC ? !libhermesC : libhermesC;
      do {
          let loginu = false;
          let tooltipsU = 1.0;
          let gdtadv9 = true;
          let profileactiven: Array<any> = [121, 295];
         libhermesC = (71 == (profileactiven.length | (bingo ? 71 : profileactiven.length)));
         loginu = tooltipsU < 44.36;
         tooltipsU *= (parseFloat(`${parseInt(`${tooltipsU}`) | (loginu ? 2 : 3)}`));
         gdtadv9 = (gdtadv9 ? !loginu : gdtadv9);
         if (reactnativeultimatelistview7) {
            break;
         }
      } while ((bingo) && reactnativeultimatelistview7);
      while (!libhermesC) {
          let disconnectedlogob = String.fromCharCode(104,97,115,104,107,101,121,95,54,95,56,55,0);
         libhermesC = disconnectedlogob.length < 87;
         break;
      }
         libhermesC = (bingo ? libhermesC : !bingo);
         proxyq.set(`${bingo}`, ((libhermesC ? 5 : 2)));
          let detailI = 5;
          let showlessa = String.fromCharCode(108,97,110,99,122,111,115,95,98,95,53,0);
          let description_49 = String.fromCharCode(118,95,52,49,95,105,115,112,97,99,107,101,100,0);
         bingo = !libhermesC && !bingo;
         detailI <<= Math.min(1, Math.abs(showlessa.length ^ description_49.length));
         showlessa = `${description_49.length}`;
      if (proxyq.size > 3 && 3 > (3 - proxyq.size)) {
         bingo = (((!bingo ? 17 : proxyq.size) & proxyq.size) > 17);
      }
      let iconlogoutH = bingo ? !bingo : bingo;
      do {
         bingo = !libhermesC;
         if (iconlogoutH) {
            break;
         }
      } while ((3 < proxyq.size && 3 < (proxyq.size / 3)) && iconlogoutH);
      controlL = `${((bingo ? 5 : 1) & controlL.length)}`;

    

   let matchactiveH = statisticsc == String.fromCharCode(109,103,101,0);
   do {
      statisticsc += `${(spinnerL == String.fromCharCode(77,0) ? commons : spinnerL.length)}`;
      if (matchactiveH) {
         break;
      }
   } while ((3 == circlee.length && statisticsc == String.fromCharCode(71,0)) && matchactiveH);
   for (let q = 0; q < 1; q++) {
      libsentry8 /= Math.max(2 - statisticsc.length, 2);
   }
       let becomes = 3;
      if (3 > becomes) {
         becomes ^= becomes + becomes;
      }
      if ((becomes ^ becomes) > 4) {
          let statisticsW = 0;
          let anythinkR = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,95,53,95,52,53,0);
          let register_dC = 0.0;
         becomes <<= Math.min(Math.abs(anythinkR.length % 2), 2);
         statisticsW |= statisticsW >> (Math.min(1, Math.abs(1)));
         anythinkR += `${statisticsW}`;
         register_dC += parseFloat(`${parseInt(`${register_dC}`)}`);
      }
         becomes /= Math.max(1 + becomes, 4);
      controlL = `${(String.fromCharCode(83,0) == spinnerL ? parseInt(`${playercommonf}`) : spinnerL.length)}`;
      usernameu = new Map([[`${commons}`, commons]]);
   let iconuserw = 7716955 >= commons;
   do {
      commons |= libsentry8 - 1;
      if (iconuserw) {
         break;
      }
   } while (iconuserw && (controlL.length == 5));
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

       let floaterD = 0.0;
       let iconwechatH: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,100,105,114,97,99,0),String.fromCharCode(106,95,51,48,95,102,97,116,101,0)], [String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,95,99,95,51,50,0),String.fromCharCode(114,101,118,111,107,97,98,108,101,95,122,95,49,49,0)]]);
       let clubL = 0.0;
       let inouttargetredQ = String.fromCharCode(105,95,52,49,95,102,111,117,114,120,109,0);
          let main_ja = 2.0;
          let mathk = 4;
          let whiteanimationliveN = true;
         floaterD /= Math.max(3, mathk);
         main_ja -= 3 % (Math.max(6, parseInt(`${main_ja}`)));
         mathk *= ((whiteanimationliveN ? 3 : 3) | parseInt(`${main_ja}`));
         whiteanimationliveN = whiteanimationliveN || 77.3 <= main_ja;
      let qaagY = inouttargetredQ == String.fromCharCode(48,48,117,57,100,55,119,0);
      do {
          let bellreminderO: Array<any> = [951, 964];
          let coreY = 4.0;
          let largesoundn = String.fromCharCode(115,111,114,116,105,110,103,95,99,95,52,51,0);
          let statsi: Array<any> = [499, 600, 600];
          let sellM = false;
         inouttargetredQ = `${2 + largesoundn.length}`;
         bellreminderO = [bellreminderO.length << (Math.min(Math.abs(3), 1))];
         coreY += statsi.length;
         largesoundn += "1";
         statsi = [2 * parseInt(`${coreY}`)];
         sellM = 82.36 < coreY;
         if (qaagY) {
            break;
         }
      } while (qaagY && (4 > iconwechatH.size));
         iconwechatH = new Map([[inouttargetredQ, inouttargetredQ.length]]);
         clubL /= Math.max(parseFloat(`${parseInt(`${floaterD}`)}`), 3);
         clubL -= parseFloat(`${inouttargetredQ.length >> (Math.min(Math.abs(2), 4))}`);
      while (4 <= (2 * iconwechatH.size) && 1 <= (2 >> (Math.min(3, Math.abs(iconwechatH.size))))) {
         clubL *= parseFloat(`${parseInt(`${clubL}`)}`);
         break;
      }
      for (let p = 0; p < 3; p++) {
         floaterD /= Math.max(2, parseInt(`${clubL}`));
      }
      let searchbarX = iconwechatH.size <= 6689234;
      do {
          let libfbw = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,112,95,55,57,0);
          let mintegralv: Array<any> = [244, 224, 979];
          let fillb = 4.0;
         iconwechatH = new Map([[`${mintegralv.length}`, mintegralv.length]]);
         libfbw = `${parseInt(`${fillb}`)}`;
         fillb += 2 ^ parseInt(`${fillb}`);
         if (searchbarX) {
            break;
         }
      } while (((2 ^ iconwechatH.size) > 4 || (2 ^ iconwechatH.size) > 3) && searchbarX);
      libsentry8 += emptya % (Math.max(parseInt(`${floaterD}`), 5));
       let appsT = 0.0;
       let unfilly: Array<any> = [45, 984, 357];
       let rulesM = String.fromCharCode(115,109,112,116,101,98,97,114,115,95,56,95,54,55,0);
         appsT += parseFloat(`${unfilly.length - parseInt(`${appsT}`)}`);
         unfilly = [3];
      let questicona = appsT <= 6058776.0;
      do {
         appsT *= parseFloat(`${unfilly.length}`);
         if (questicona) {
            break;
         }
      } while (questicona && ((appsT * 5.34) >= 1.80 || (3 * parseInt(`${appsT}`)) >= 1));
      let reactx = 8419074 <= unfilly.length;
      do {
         unfilly.push(rulesM.length);
         if (reactx) {
            break;
         }
      } while (reactx && ((5 ^ unfilly.length) <= 5));
         rulesM += `${unfilly.length * 2}`;
       let q_lockX = 4;
      let twitterx = 7037462 >= unfilly.length;
      do {
         unfilly = [unfilly.length / 1];
         if (twitterx) {
            break;
         }
      } while ((4 > (4 | unfilly.length) && 4 > (q_lockX | unfilly.length)) && twitterx);
      let footballfieldZ = 9330172.0 >= appsT;
      do {
         appsT += parseFloat(`${unfilly.length / (Math.max(6, rulesM.length))}`);
         if (footballfieldZ) {
            break;
         }
      } while (footballfieldZ && (1 <= (unfilly.length & 4) || (appsT * 2.48) <= 2.0));
         appsT *= parseFloat(`${2 / (Math.max(6, q_lockX))}`);
      circlee = "3";
      usernameu.set(controlL, controlL.length * larged.length);
   let nodeg = 7218445 <= usernameu.size;
   do {
       let subinb = 5;
       let shrink3 = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,99,95,49,0);
       let ajaxk = true;
       let spinnerE = false;
          let tumbnailJ = String.fromCharCode(115,111,99,107,95,121,95,55,49,0);
         ajaxk = String.fromCharCode(67,0) == shrink3;
         tumbnailJ += `${tumbnailJ.length}`;
      if (shrink3.startsWith(`${ajaxk}`)) {
         shrink3 += `${((ajaxk ? 3 : 1) - (spinnerE ? 2 : 4))}`;
      }
      for (let o = 0; o < 1; o++) {
         subinb <<= Math.min(Math.abs(subinb), 4);
      }
          let middlewareC: Map<any, any> = new Map([[String.fromCharCode(115,95,50,95,112,114,111,112,111,115,97,108,115,0),true ], [String.fromCharCode(101,95,53,48,95,114,111,117,110,100,110,101,115,115,0),false ], [String.fromCharCode(99,111,101,102,102,115,95,118,95,53,50,0),false ]]);
          let albumi = true;
          let debuge: Array<any> = [682, 408];
         ajaxk = debuge.length < shrink3.length;
         middlewareC = new Map([[`${middlewareC.size}`, middlewareC.size]]);
         albumi = middlewareC.get(`${albumi}`) == null;
         debuge = [1 * middlewareC.size];
      while (shrink3.includes(`${spinnerE}`)) {
          let whitetickz = String.fromCharCode(102,95,51,57,95,115,105,114,105,0);
          let disconnectedlogo_ = 4.0;
          let textw = String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,100,95,50,56,0);
          let favoriteA: Map<any, any> = new Map([[String.fromCharCode(102,108,111,99,107,95,49,95,57,54,0),52], [String.fromCharCode(102,114,101,101,109,95,51,95,49,48,0),128], [String.fromCharCode(112,97,115,116,101,108,95,48,95,50,54,0),588]]);
         spinnerE = disconnectedlogo_ > 49.97 || shrink3.length > 49;
         whitetickz = `${whitetickz.length}`;
         disconnectedlogo_ += 1 & whitetickz.length;
         textw = `${whitetickz.length >> (Math.min(4, textw.length))}`;
         favoriteA = new Map([[whitetickz, (textw == String.fromCharCode(122,0) ? whitetickz.length : textw.length)]]);
         break;
      }
      while (!ajaxk) {
         ajaxk = (51 >= (shrink3.length | (!ajaxk ? 51 : shrink3.length)));
         break;
      }
      for (let z = 0; z < 2; z++) {
         spinnerE = 34 >= subinb && !ajaxk;
      }
      if (3 <= subinb || (subinb | 3) <= 1) {
         ajaxk = !ajaxk;
      }
      while ((5 + subinb) > 5 && subinb > 5) {
         subinb &= shrink3.length / (Math.max(3, 9));
         break;
      }
         ajaxk = spinnerE;
      if (5 > (shrink3.length >> (Math.min(4, Math.abs(subinb))))) {
         shrink3 = `${subinb}`;
      }
      let frame_mhW = ajaxk ? !ajaxk : ajaxk;
      do {
         ajaxk = (!spinnerE ? !ajaxk : spinnerE);
         if (frame_mhW) {
            break;
         }
      } while (frame_mhW && (ajaxk));
      usernameu = new Map([[`${usernameu.size}`, libsentry8 & 1]]);
      if (nodeg) {
         break;
      }
   } while (((1 % (Math.max(2, circlee.length))) == 4 || (usernameu.size % (Math.max(circlee.length, 4))) == 1) && nodeg);
   let crownb = playercommonf <= 6088498.0;
   do {
      playercommonf -= parseFloat(`${2 | spinnerL.length}`);
      if (crownb) {
         break;
      }
   } while (((3 * commons) >= 1 && (parseFloat(`${commons}`) * playercommonf) >= 4.63) && crownb);

    

      circlee += `${(String.fromCharCode(122,0) == spinnerL ? libsentry8 : spinnerL.length)}`;
      scoreu *= (libfabricjni4 == String.fromCharCode(52,0) ? libfabricjni4.length : commons);
   if (!circlee.endsWith(controlL)) {
      circlee += `${3 + controlL.length}`;
   }
       let constantsW = 0;
       let renewS: Map<any, any> = new Map([[String.fromCharCode(112,95,52,49,95,102,105,111,0),490], [String.fromCharCode(113,95,54,55,95,110,97,109,101,115,101,114,118,101,114,0),944], [String.fromCharCode(103,117,101,115,115,95,53,95,49,53,0),622]]);
       let predictionarrowP = String.fromCharCode(104,101,118,99,112,114,101,100,95,120,95,52,50,0);
      if ((renewS.size / 3) == 2) {
          let libpangleflippedD = 2.0;
         renewS = new Map([[predictionarrowP, predictionarrowP.length % (Math.max(3, 4))]]);
         libpangleflippedD -= 3 ^ parseInt(`${libpangleflippedD}`);
      }
          let sortP = 2.0;
          let verticalk = String.fromCharCode(114,116,108,95,100,95,51,48,0);
          let rulesD: Map<any, any> = new Map([[String.fromCharCode(98,95,50,53,95,116,104,97,119,101,100,0),725], [String.fromCharCode(103,102,105,110,116,95,106,95,51,56,0),43]]);
         renewS.set(`${sortP}`, 3 >> (Math.min(4, Math.abs(renewS.size))));
         sortP -= (parseFloat(`${String.fromCharCode(80,0) == verticalk ? verticalk.length : rulesD.size}`));
         rulesD = new Map([[`${rulesD.size}`, (String.fromCharCode(75,0) == verticalk ? verticalk.length : rulesD.size)]]);
      let iconarrowrightblackj = renewS.size >= 7156638;
      do {
         renewS.set(`${constantsW}`, 2);
         if (iconarrowrightblackj) {
            break;
         }
      } while ((5 > (constantsW << (Math.min(Math.abs(renewS.size), 2))) && (5 << (Math.min(5, Math.abs(renewS.size)))) > 1) && iconarrowrightblackj);
       let pauseF = 3.0;
       let searchw = 0.0;
      while (renewS.get(`${constantsW}`) != null) {
         constantsW -= predictionarrowP.length;
         break;
      }
         predictionarrowP = `${1 & parseInt(`${searchw}`)}`;
      let updatesF = 9592152.0 <= pauseF;
      do {
         pauseF *= 3 - parseInt(`${searchw}`);
         if (updatesF) {
            break;
         }
      } while ((pauseF >= 2.97) && updatesF);
      for (let i = 0; i < 3; i++) {
          let tickedH: Map<any, any> = new Map([[String.fromCharCode(112,108,117,114,97,108,115,95,119,95,53,50,0),false ], [String.fromCharCode(101,95,55,53,95,114,101,97,100,102,114,97,109,101,0),true ], [String.fromCharCode(119,95,54,54,95,121,117,118,109,111,110,111,0),true ]]);
          let gifgoalQ = String.fromCharCode(105,110,111,100,101,95,100,95,56,51,0);
         searchw += parseInt(`${pauseF}`);
         tickedH.set(gifgoalQ, (String.fromCharCode(101,0) == gifgoalQ ? tickedH.size : gifgoalQ.length));
      }
         searchw /= Math.max(constantsW << (Math.min(Math.abs(renewS.size), 2)), 3);
      usernameu = new Map([[circlee, 1]]);
   if ((libsentry8 % 3) == 3) {
       let rulesI = String.fromCharCode(99,104,101,99,107,105,110,103,95,115,95,57,48,0);
         rulesI = "1";
         rulesI += `${2 & rulesI.length}`;
          let libavutil7 = 2;
          let awayplayer8 = String.fromCharCode(97,98,115,116,95,117,95,49,48,0);
         rulesI = `${rulesI.length}`;
         libavutil7 |= (awayplayer8 == String.fromCharCode(75,0) ? libavutil7 : awayplayer8.length);
      libsentry8 &= circlee.length ^ commons;
   }
    if (!numericPhoneNumber) return '';

       let baseI: Array<any> = [String.fromCharCode(119,101,108,108,98,101,104,97,118,101,100,95,108,95,53,54,0), String.fromCharCode(116,111,110,101,115,95,55,95,49,49,0)];
       let appleE = String.fromCharCode(97,116,116,101,109,112,116,101,100,95,116,95,51,49,0);
         appleE = `${(appleE == String.fromCharCode(118,0) ? appleE.length : baseI.length)}`;
      if (!appleE.startsWith(`${baseI.length}`)) {
          let dropdownq = String.fromCharCode(101,120,112,97,110,115,105,111,110,95,114,95,54,48,0);
          let screenp = String.fromCharCode(114,95,50,57,95,113,117,97,110,116,105,108,101,0);
          let libreactnativeblobW = 4.0;
          let loginB = String.fromCharCode(119,95,50,54,95,100,105,115,112,111,115,101,0);
         appleE = `${screenp.length}`;
         dropdownq = `${3 >> (Math.min(2, Math.abs(parseInt(`${libreactnativeblobW}`))))}`;
         screenp += `${parseInt(`${libreactnativeblobW}`) | dropdownq.length}`;
         loginB = `${dropdownq.length - 3}`;
      }
      let basketballtrophy4 = 9629882 >= baseI.length;
      do {
         baseI = [baseI.length + appleE.length];
         if (basketballtrophy4) {
            break;
         }
      } while (basketballtrophy4 && ((baseI.length - 4) < 1 || (4 - appleE.length) < 5));
      while (baseI.length < 3) {
         baseI.push(1 | baseI.length);
         break;
      }
         baseI.push(2 + appleE.length);
      let sansY = String.fromCharCode(49,101,52,104,0) == appleE;
      do {
         appleE += "2";
         if (sansY) {
            break;
         }
      } while (sansY && ((5 >> (Math.min(5, baseI.length))) >= 2 || (5 >> (Math.min(3, appleE.length))) >= 3));
      scoreu += controlL.length ^ spinnerL.length;
       let reddownarrowH = String.fromCharCode(118,97,116,97,114,95,57,95,57,57,0);
       let static__e: Array<any> = [427, 228, 417];
       let u_titleI: Array<any> = [657, 926, 423];
       let downE = 0.0;
      while ((u_titleI.length % (Math.max(static__e.length, 6))) == 4 || (4 % (Math.max(7, u_titleI.length))) == 1) {
         u_titleI.push(parseInt(`${downE}`));
         break;
      }
         reddownarrowH += `${static__e.length}`;
      if (1 > (3 + u_titleI.length) && (static__e.length + 3) > 4) {
          let livek = true;
         static__e.push(u_titleI.length);
         livek = !livek;
      }
          let refreshb = 2;
          let rewindH = 4.0;
         reddownarrowH = "2";
         refreshb &= parseInt(`${rewindH}`);
         rewindH -= parseFloat(`${parseInt(`${rewindH}`) + refreshb}`);
      controlL += `${fasta.length % (Math.max(2, 3))}`;
      playercommonf *= parseFloat(`${3}`);
      scoreu *= usernameu.size & parseInt(`${scoreu}`);
      fasta = `${(larged == String.fromCharCode(102,0) ? larged.length : statisticsc.length)}`;

    const countryCode = numericPhoneNumber.substring(0, 3); 

   let logoutK = 6887282 >= libfabricjni4.length;
   do {
       let statisticsZ = 0.0;
       let p_unlock8 = String.fromCharCode(120,121,122,116,97,98,108,101,115,95,118,95,51,50,0);
         p_unlock8 = "3";
      for (let a = 0; a < 1; a++) {
         p_unlock8 = `${3 - p_unlock8.length}`;
      }
      for (let p = 0; p < 1; p++) {
          let tickE = 5.0;
          let clearU: Array<any> = [843, 52, 945];
         statisticsZ -= parseInt(`${statisticsZ}`) >> (Math.min(2, Math.abs(1)));
         tickE *= parseInt(`${tickE}`);
         clearU = [clearU.length + parseInt(`${tickE}`)];
      }
      for (let s = 0; s < 2; s++) {
          let emojir = String.fromCharCode(112,114,101,95,101,95,53,56,0);
          let gifgoalbgl = String.fromCharCode(99,95,51,50,95,116,105,109,101,108,105,110,101,115,0);
          let penalty1 = 5.0;
         p_unlock8 += "3";
         emojir = `${(String.fromCharCode(48,0) == gifgoalbgl ? parseInt(`${penalty1}`) : gifgoalbgl.length)}`;
         penalty1 += parseFloat(`${gifgoalbgl.length % 1}`);
      }
          let wifirouterR: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,109,118,95,48,95,50,0),35], [String.fromCharCode(104,117,102,102,95,111,95,49,49,0),240]]);
         statisticsZ *= p_unlock8.length << (Math.min(4, Math.abs(wifirouterR.size)));
         p_unlock8 = `${p_unlock8.length}`;
      libfabricjni4 = `${usernameu.size * circlee.length}`;
      if (logoutK) {
         break;
      }
   } while ((libfabricjni4.endsWith(spinnerL)) && logoutK);
      usernameu = new Map([[circlee, controlL.length]]);
      larged = `${commons}`;
   if ((parseInt(`${playercommonf}`) * controlL.length) <= 3 || (parseInt(`${playercommonf}`) * controlL.length) <= 3) {
      controlL = `${commons % (Math.max(controlL.length, 5))}`;
   }
   while (fasta.startsWith(larged)) {
      larged += "1";
      break;
   }
    const firstPart = numericPhoneNumber.substring(3, 6);

   let defaultpredictionprofile8 = spinnerL == String.fromCharCode(121,117,122,0);
   do {
      spinnerL += `${(String.fromCharCode(53,0) == fasta ? fasta.length : parseInt(`${scoreu}`))}`;
      if (defaultpredictionprofile8) {
         break;
      }
   } while (defaultpredictionprofile8 && (spinnerL != String.fromCharCode(110,0) || controlL == String.fromCharCode(99,0)));
       let footballfiledlayoutK = 5.0;
       let injurya = 3.0;
      let iconadslinkv = injurya >= 5174855.0;
      do {
          let libreactK: Array<any> = [373, 191, 475];
          let iconsaveimageD = 3;
          let adult2 = String.fromCharCode(110,95,54,95,105,110,99,114,101,109,101,110,116,0);
          let redgoal7: Array<any> = [486, 380];
         injurya += 1 - libreactK.length;
         libreactK = [redgoal7.length];
         iconsaveimageD >>= Math.min(Math.abs(3 & iconsaveimageD), 5);
         adult2 += `${redgoal7.length >> (Math.min(Math.abs(1), 5))}`;
         if (iconadslinkv) {
            break;
         }
      } while ((footballfiledlayoutK <= 3.98) && iconadslinkv);
         injurya *= parseInt(`${injurya}`) & 3;
      while (injurya >= 3.97) {
         injurya *= parseInt(`${injurya}`) << (Math.min(4, Math.abs(2)));
         break;
      }
         footballfiledlayoutK -= parseInt(`${injurya}`) + 2;
      for (let s = 0; s < 3; s++) {
         footballfiledlayoutK *= 1;
      }
         footballfiledlayoutK *= parseInt(`${injurya}`);
      scoreu /= Math.max(2, 2);
       let countdown9 = String.fromCharCode(106,100,104,117,102,102,95,105,95,51,51,0);
      if (!countdown9.endsWith(countdown9)) {
          let predictionbutton2 = String.fromCharCode(110,95,50,50,95,114,111,119,115,107,105,112,0);
         countdown9 = `${countdown9.length % (Math.max(2, 4))}`;
         predictionbutton2 = `${(String.fromCharCode(105,0) == predictionbutton2 ? predictionbutton2.length : predictionbutton2.length)}`;
      }
      let hometeamfield6 = countdown9 == String.fromCharCode(101,53,112,105,57,99,106,0);
      do {
         countdown9 = `${3 + countdown9.length}`;
         if (hometeamfield6) {
            break;
         }
      } while ((countdown9.length > 2) && hometeamfield6);
      if (countdown9.includes(`${countdown9.length}`)) {
         countdown9 += "1";
      }
      fasta += `${controlL.length - commons}`;
   let scorec = statisticsc == String.fromCharCode(113,102,53,97,122,57,54,0);
   do {
       let modalb = 1;
       let nbatrophy7: Map<any, any> = new Map([[String.fromCharCode(117,95,51,95,99,104,97,110,103,101,100,0),750], [String.fromCharCode(117,109,102,97,118,114,95,116,95,49,53,0),158], [String.fromCharCode(120,95,48,95,109,101,116,97,100,97,116,97,115,0),567]]);
       let shirtL = 1.0;
       let libhermesi = 5.0;
       let untickI: Map<any, any> = new Map([[String.fromCharCode(118,95,52,48,95,100,101,114,101,102,0),440], [String.fromCharCode(112,95,57,57,95,100,98,108,113,117,111,116,101,0),849]]);
         shirtL /= Math.max(untickI.size, 5);
          let launcherf = 5.0;
          let iconorientationo = false;
          let backwardk = 4;
         libhermesi *= 2;
         launcherf *= (parseInt(`${launcherf}`) ^ (iconorientationo ? 4 : 3));
         iconorientationo = launcherf >= 15.64;
         backwardk *= ((iconorientationo ? 1 : 2) ^ backwardk);
      for (let g = 0; g < 1; g++) {
         modalb += 2;
      }
          let bangc = 1.0;
         nbatrophy7 = new Map([[`${nbatrophy7.size}`, nbatrophy7.size]]);
         bangc -= parseFloat(`${parseInt(`${bangc}`) % 2}`);
          let invites: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,102,117,108,95,120,95,53,54,0),576], [String.fromCharCode(121,95,56,53,95,108,111,99,97,108,97,100,100,114,0),1000], [String.fromCharCode(121,121,121,121,95,102,95,49,53,0),57]]);
          let page3 = 2.0;
          let placeholderK = String.fromCharCode(97,95,57,55,95,105,110,99,114,101,109,101,110,116,0);
         libhermesi /= Math.max(parseInt(`${page3}`), 3);
         invites = new Map([[`${invites.size}`, 1]]);
         page3 /= Math.max(parseFloat(`${placeholderK.length}`), 2);
         placeholderK = `${invites.size}`;
       let basketballw: Array<any> = [398, 13];
      for (let r = 0; r < 2; r++) {
         nbatrophy7 = new Map([[`${basketballw.length}`, 2]]);
      }
      for (let i = 0; i < 1; i++) {
         shirtL *= 1;
      }
       let profileactivem = String.fromCharCode(105,95,50,48,95,99,111,117,110,116,114,121,0);
       let castj = String.fromCharCode(109,97,116,105,99,95,57,95,49,57,0);
      for (let p = 0; p < 3; p++) {
         castj = `${parseInt(`${shirtL}`) & 2}`;
      }
      while ((4 >> (Math.min(5, castj.length))) > 2 && (castj.length >> (Math.min(1, Math.abs(modalb)))) > 4) {
         castj += "3";
         break;
      }
      let playershirtw = basketballw.length >= 6500023;
      do {
          let activey: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,95,56,95,49,56,0),false ], [String.fromCharCode(100,95,57,52,95,111,112,116,105,109,105,115,116,105,99,0),false ]]);
          let countryJ = String.fromCharCode(100,95,55,52,95,115,115,105,109,118,0);
          let predictionbannersharedZ = String.fromCharCode(106,95,49,48,95,99,111,110,118,111,108,117,116,105,111,110,0);
          let otherL: Map<any, any> = new Map([[String.fromCharCode(98,117,98,98,108,101,95,109,95,56,53,0),String.fromCharCode(109,111,118,101,95,53,95,50,0)], [String.fromCharCode(113,95,50,55,95,98,97,110,0),String.fromCharCode(106,95,49,56,95,100,118,100,97,116,97,0)], [String.fromCharCode(114,105,100,103,101,95,122,95,57,48,0),String.fromCharCode(121,95,57,49,95,105,115,100,105,103,105,116,0)]]);
         basketballw = [nbatrophy7.size];
         activey.set(`${predictionbannersharedZ}`, 3 % (Math.max(7, predictionbannersharedZ.length)));
         countryJ += `${otherL.size}`;
         otherL.set(predictionbannersharedZ, predictionbannersharedZ.length);
         if (playershirtw) {
            break;
         }
      } while (((basketballw.length & castj.length) == 3 && 1 == (basketballw.length & 3)) && playershirtw);
          let dialog5 = String.fromCharCode(119,95,57,48,95,116,119,105,108,105,103,104,116,0);
         nbatrophy7.set(dialog5, dialog5.length);
       let orangeclockB = false;
       let libfolly6 = true;
         shirtL += castj.length | 1;
      statisticsc = `${untickI.size}`;
      if (scorec) {
         break;
      }
   } while ((statisticsc.length >= 5) && scorec);
      libsentry8 &= 3 >> (Math.min(1, larged.length));
    const secondPart = numericPhoneNumber.substring(6);

   let reactX = 5503665 <= libsentry8;
   do {
      libsentry8 &= usernameu.size;
      if (reactX) {
         break;
      }
   } while (reactX && (3 <= (libsentry8 >> (Math.min(statisticsc.length, 4))) || 4 <= (statisticsc.length >> (Math.min(Math.abs(3), 1)))));
   let playZ = String.fromCharCode(120,48,102,113,0) == spinnerL;
   do {
      spinnerL += `${(String.fromCharCode(65,0) == fasta ? fasta.length : controlL.length)}`;
      if (playZ) {
         break;
      }
   } while ((spinnerL.length == fasta.length) && playZ);
   let albume = libsentry8 >= 5223809;
   do {
      libsentry8 &= (String.fromCharCode(82,0) == larged ? emptya : larged.length);
      if (albume) {
         break;
      }
   } while (albume && ((commons - libsentry8) >= 1));
       let expandg = 2.0;
       let awayo: Array<any> = [252, 603, 268];
      if ((2 << (Math.min(2, awayo.length))) == 3 && 4.2 == (expandg / (Math.max(1.33, 10)))) {
         awayo = [awayo.length % (Math.max(8, parseInt(`${expandg}`)))];
      }
         awayo.push(awayo.length);
          let sports6 = 1;
         awayo.push(1 * sports6);
         awayo = [awayo.length ^ 2];
      if ((awayo.length + 5) <= 1 && (5.71 * expandg) <= 3.32) {
          let popup1 = 3.0;
          let custom8: Map<any, any> = new Map([[String.fromCharCode(121,95,56,48,95,99,111,100,101,102,0),941], [String.fromCharCode(99,97,108,99,117,97,108,116,101,95,57,95,56,50,0),257]]);
          let whistleY = 2.0;
         expandg /= Math.max(parseFloat(`${parseInt(`${expandg}`) % 2}`), 4);
         popup1 /= Math.max(4, parseInt(`${whistleY}`));
         custom8 = new Map([[`${custom8.size}`, parseInt(`${popup1}`)]]);
         whistleY -= parseInt(`${popup1}`);
      }
      let iconbell2 = 7218245.0 <= expandg;
      do {
          let collectionJ = 3.0;
          let notificationfillempty1: Array<any> = [49, 829];
          let static_iU = String.fromCharCode(118,95,53,50,95,116,119,105,108,105,103,104,116,0);
          let basketballtrophyt = String.fromCharCode(108,105,98,99,111,100,101,99,95,50,95,54,50,0);
          let championx = 5.0;
         expandg += parseFloat(`${parseInt(`${expandg}`) * 1}`);
         collectionJ += parseFloat(`${parseInt(`${championx}`) << (Math.min(4, Math.abs(3)))}`);
         notificationfillempty1.push(notificationfillempty1.length / (Math.max(static_iU.length, 8)));
         static_iU = `${3 - basketballtrophyt.length}`;
         basketballtrophyt = "3";
         championx /= Math.max(5, parseFloat(`${3}`));
         if (iconbell2) {
            break;
         }
      } while (iconbell2 && (5 >= (awayo.length % 5)));
      emptya /= Math.max(2 & statisticsc.length, 4);
       let frame_dZ = 4.0;
       let iconstarz = true;
      while (5.26 == (frame_dZ + 5.72)) {
          let shielddoneo = 2.0;
          let malaysiaB = false;
         frame_dZ += parseFloat(`${parseInt(`${shielddoneo}`) << (Math.min(2, Math.abs(1)))}`);
         shielddoneo += ((malaysiaB ? 4 : 2));
         break;
      }
      while ((2.94 + frame_dZ) == 2.8) {
         iconstarz = !iconstarz;
         break;
      }
      for (let o = 0; o < 3; o++) {
         frame_dZ -= (parseFloat(`${parseInt(`${frame_dZ}`) / (Math.max(7, (iconstarz ? 5 : 1)))}`));
      }
      while (2.39 > (frame_dZ * 2.0) && !iconstarz) {
         iconstarz = !iconstarz;
         break;
      }
      for (let w = 0; w < 3; w++) {
         frame_dZ += (parseFloat(`${(iconstarz ? 2 : 2) - parseInt(`${frame_dZ}`)}`));
      }
      for (let i = 0; i < 1; i++) {
         iconstarz = !iconstarz;
      }
      usernameu.set(`${emptya}`, libsentry8 << (Math.min(Math.abs(1), 4)));

    const formattedNumber = `+${countryCode} ${firstPart} ${secondPart}`;

   let large0 = String.fromCharCode(48,48,122,101,49,97,0) == spinnerL;
   do {
      spinnerL += `${(String.fromCharCode(112,0) == libfabricjni4 ? parseInt(`${playercommonf}`) : libfabricjni4.length)}`;
      if (large0) {
         break;
      }
   } while (large0 && (!spinnerL.endsWith(statisticsc)));
      usernameu.set(circlee, circlee.length ^ emptya);
   for (let q = 0; q < 3; q++) {
       let watchnowbgt = 5.0;
       let iconstarb = String.fromCharCode(101,95,55,55,0);
       let questg = String.fromCharCode(105,95,55,57,95,114,105,100,103,101,0);
      if (questg == String.fromCharCode(112,0) && iconstarb == String.fromCharCode(88,0)) {
          let sansn = 4.0;
          let colorsp: Array<any> = [487, 74, 503];
          let footballfiledlayout4 = String.fromCharCode(101,110,116,101,114,105,110,103,95,104,95,57,53,0);
          let lessu = 1;
         questg = `${colorsp.length}`;
         sansn *= parseFloat(`${lessu | footballfiledlayout4.length}`);
         colorsp.push(lessu >> (Math.min(footballfiledlayout4.length, 4)));
      }
      let proxyn = questg == String.fromCharCode(109,115,49,0);
      do {
         questg = `${parseInt(`${watchnowbgt}`)}`;
         if (proxyn) {
            break;
         }
      } while (((watchnowbgt + 3.38) == 4.71) && proxyn);
         iconstarb = `${questg.length}`;
      while (3 < (5 * questg.length)) {
         questg = `${3 | questg.length}`;
         break;
      }
         questg += `${questg.length}`;
      let weibo6 = questg.length >= 7469842;
      do {
         questg = `${questg.length}`;
         if (weibo6) {
            break;
         }
      } while ((iconstarb.length == 1 || questg != String.fromCharCode(117,0)) && weibo6);
      if (1.3 > (watchnowbgt - 5.41) || 4.1 > (5.41 - watchnowbgt)) {
          let libfollyt = 4.0;
          let penalty3 = String.fromCharCode(108,95,53,57,95,117,108,97,119,0);
          let assetsf: Array<any> = [548, 945];
         iconstarb += `${iconstarb.length}`;
         libfollyt += parseFloat(`${2 + penalty3.length}`);
         penalty3 = `${assetsf.length}`;
         assetsf = [assetsf.length];
      }
         iconstarb = `${parseInt(`${watchnowbgt}`) / 1}`;
      let pageb = String.fromCharCode(119,54,98,55,112,55,56,0) == iconstarb;
      do {
         iconstarb = `${2 << (Math.min(5, Math.abs(parseInt(`${watchnowbgt}`))))}`;
         if (pageb) {
            break;
         }
      } while (pageb && (2 == iconstarb.length));
      commons /= Math.max(5, commons & 3);
   }
      commons >>= Math.min(larged.length, 4);
       let yellowanimationliveG = String.fromCharCode(99,97,115,101,100,95,104,95,51,54,0);
         yellowanimationliveG += `${(String.fromCharCode(75,0) == yellowanimationliveG ? yellowanimationliveG.length : yellowanimationliveG.length)}`;
         yellowanimationliveG = `${yellowanimationliveG.length}`;
      let suboutZ = 5078485 >= yellowanimationliveG.length;
      do {
         yellowanimationliveG += `${yellowanimationliveG.length}`;
         if (suboutZ) {
            break;
         }
      } while ((yellowanimationliveG.length > 4) && suboutZ);
      fasta = `${usernameu.size}`;
    return formattedNumber;
  };

  
  const resendOTP = () => {
       let controlL = 1.0;
    let shirta: Array<any> = [518, 904];
    let downloadedL = 5.0;
    let eighteenE: Map<any, any> = new Map([[String.fromCharCode(119,95,57,52,95,113,115,118,101,110,99,0),true ], [String.fromCharCode(114,95,52,56,95,117,115,101,114,110,97,109,101,0),true ], [String.fromCharCode(97,110,100,108,101,95,51,95,56,0),false ]]);
    let showlessM = true;
    let greytickf: Array<any> = [931, 672, 575];
    let orangeclockl = 2.0;
    let jingdongn = 1.0;
    let jnewinterstitialp = String.fromCharCode(114,95,49,53,95,116,114,120,116,0);
    let orangetickC = String.fromCharCode(114,112,99,95,53,95,51,55,0);
    let currentr = String.fromCharCode(101,95,49,54,95,97,117,116,111,108,111,99,107,0);
    let basketballW = String.fromCharCode(105,95,53,52,95,104,105,115,116,111,114,121,0);
    let philippines4 = 5.0;
   if (downloadedL < orangeclockl) {
       let halffieldimage0 = false;
       let listv = 4.0;
       let windh = false;
       let baiduadsT = String.fromCharCode(103,95,56,95,116,105,109,105,110,103,115,0);
       let issubE = String.fromCharCode(101,110,99,108,111,115,105,110,103,95,111,95,52,49,0);
         halffieldimage0 = baiduadsT.length >= issubE.length;
      while (halffieldimage0) {
         baiduadsT += `${((windh ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${listv}`)), 1)))}`;
         break;
      }
          let cornerp: Map<any, any> = new Map([[String.fromCharCode(109,95,53,95,119,97,118,101,115,0),129], [String.fromCharCode(100,101,115,116,114,111,121,101,100,95,105,95,53,51,0),955], [String.fromCharCode(108,95,54,54,95,115,117,98,100,101,99,111,100,101,114,0),935]]);
         windh = !baiduadsT.includes(`${halffieldimage0}`);
         cornerp.set(`${cornerp.size}`, cornerp.size | 2);
      let downloadingK = 9318100.0 >= listv;
      do {
          let matches8 = String.fromCharCode(108,95,56,53,95,116,105,109,101,111,117,116,101,100,0);
          let orangeclockM = String.fromCharCode(97,97,100,95,105,95,53,55,0);
          let referrerO = String.fromCharCode(99,111,109,112,108,101,120,105,116,121,95,52,95,57,48,0);
          let whitevideoliveo = String.fromCharCode(99,95,52,55,95,99,117,116,101,115,116,0);
          let feedbackN: Array<any> = [423, 633];
         listv *= (parseFloat(`${(windh ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${listv}`)), 3))}`));
         matches8 = `${matches8.length}`;
         orangeclockM = `${(String.fromCharCode(98,0) == matches8 ? matches8.length : feedbackN.length)}`;
         referrerO += "1";
         whitevideoliveo = `${matches8.length | orangeclockM.length}`;
         feedbackN.push(feedbackN.length);
         if (downloadingK) {
            break;
         }
      } while (downloadingK && ((listv + 4.43) < 5.70 || !halffieldimage0));
      let topicx = baiduadsT == String.fromCharCode(117,104,111,57,121,49,99,57,0);
      do {
         baiduadsT = `${1 & parseInt(`${listv}`)}`;
         if (topicx) {
            break;
         }
      } while (topicx && ((baiduadsT.length % 5) < 5 || 2.31 < (listv / (Math.max(parseFloat(`${baiduadsT.length}`), 1)))));
         halffieldimage0 = baiduadsT.length < 46;
       let subtexts = 5.0;
       let utilsx = 2.0;
      while (windh && 3 <= issubE.length) {
         windh = 41.66 >= utilsx;
         break;
      }
         utilsx += parseInt(`${subtexts}`);
      while (1.86 <= (utilsx / (Math.max(6, issubE.length)))) {
         utilsx += baiduadsT.length & 1;
         break;
      }
          let iconeye0: Array<any> = [475, 980];
          let libglogC = String.fromCharCode(114,97,100,102,103,95,56,95,53,53,0);
          let acceptedF: Array<any> = [372, 527, 202];
         windh = 75.87 >= listv || subtexts >= 75.87;
         iconeye0 = [libglogC.length];
         libglogC += `${acceptedF.length}`;
         acceptedF.push(libglogC.length);
      while (baiduadsT.includes(`${windh}`)) {
          let shootnogoal9 = true;
          let sharemodali = 2.0;
         baiduadsT = `${((shootnogoal9 ? 2 : 4) - 2)}`;
         shootnogoal9 = 50.70 > sharemodali;
         sharemodali /= Math.max(4, parseInt(`${sharemodali}`) - parseInt(`${sharemodali}`));
         break;
      }
      while ((baiduadsT.length >> (Math.min(Math.abs(5), 5))) < 5) {
         baiduadsT += `${(parseInt(`${listv}`) >> (Math.min(1, Math.abs((windh ? 3 : 2)))))}`;
         break;
      }
      let langkey8 = halffieldimage0 ? !halffieldimage0 : halffieldimage0;
      do {
         halffieldimage0 = utilsx == listv;
         if (langkey8) {
            break;
         }
      } while (langkey8 && (halffieldimage0 && 3.42 <= (2.72 - subtexts)));
      for (let b = 0; b < 3; b++) {
         listv -= parseFloat(`${3}`);
      }
      orangeclockl += parseFloat(`${parseInt(`${orangeclockl}`) + issubE.length}`);
   }
   for (let m = 0; m < 3; m++) {
      eighteenE.set(`${controlL}`, 1);
   }
   if (5.66 > (jingdongn * downloadedL)) {
      jingdongn /= Math.max(parseFloat(`${greytickf.length | 1}`), 1);
   }
   let klevinF = String.fromCharCode(104,122,117,0) == basketballW;
   do {
       let statsnomoredataV: Map<any, any> = new Map([[String.fromCharCode(104,112,101,108,100,115,112,95,120,95,51,56,0),String.fromCharCode(98,117,110,100,108,101,95,55,95,56,54,0)], [String.fromCharCode(112,95,51,48,95,110,116,115,99,0),String.fromCharCode(97,100,118,97,110,99,105,110,103,95,119,95,51,51,0)], [String.fromCharCode(117,110,114,101,115,101,114,118,101,100,95,108,95,48,0),String.fromCharCode(118,99,111,100,101,99,95,101,95,53,48,0)]]);
       let sigmobg = 1.0;
       let viewss = 3.0;
      let chatP = sigmobg >= 6293851.0;
      do {
         sigmobg /= Math.max(parseFloat(`${parseInt(`${sigmobg}`) % 2}`), 2);
         if (chatP) {
            break;
         }
      } while (chatP && (1.44 > (5.34 + sigmobg) || 3 > (3 * statsnomoredataV.size)));
      for (let r = 0; r < 3; r++) {
         sigmobg *= parseFloat(`${parseInt(`${viewss}`)}`);
      }
       let libpangleflipped0 = 5.0;
       let video0 = 5.0;
       let baselineC = String.fromCharCode(103,95,56,49,95,97,112,112,108,105,101,115,0);
       let runtimescheduler9 = String.fromCharCode(110,95,50,52,95,100,101,99,0);
         baselineC = `${baselineC.length | 3}`;
      let resendR = String.fromCharCode(55,50,103,109,97,0) == baselineC;
      do {
         baselineC = `${statsnomoredataV.size}`;
         if (resendR) {
            break;
         }
      } while ((3 <= (4 / (Math.max(1, baselineC.length))) || (5.47 + viewss) <= 3.42) && resendR);
      for (let h = 0; h < 1; h++) {
          let debugO = 1.0;
         sigmobg *= parseFloat(`${parseInt(`${libpangleflipped0}`) - 2}`);
         debugO -= parseFloat(`${3}`);
      }
      while (5.61 > (1.35 / (Math.max(8, sigmobg)))) {
         sigmobg /= Math.max(3, parseFloat(`${parseInt(`${libpangleflipped0}`)}`));
         break;
      }
      basketballW += `${basketballW.length ^ parseInt(`${jingdongn}`)}`;
      if (klevinF) {
         break;
      }
   } while (((3 & basketballW.length) <= 5 || (parseInt(`${controlL}`) / (Math.max(basketballW.length, 8))) <= 3) && klevinF);

    setResend(false);

       let temperature6 = false;
       let unfillk = String.fromCharCode(112,108,97,121,95,53,95,55,56,0);
          let combinedg = 0.0;
         temperature6 = !unfillk.endsWith(`${temperature6}`);
         combinedg /= Math.max(1, parseFloat(`${parseInt(`${combinedg}`) + parseInt(`${combinedg}`)}`));
      if (temperature6 || 4 >= unfillk.length) {
          let modityY = 5.0;
          let overw = String.fromCharCode(114,101,99,111,109,112,111,115,101,95,50,95,55,51,0);
         unfillk += "2";
         modityY += (String.fromCharCode(85,0) == overw ? parseInt(`${modityY}`) : overw.length);
      }
         unfillk = `${((temperature6 ? 1 : 3) & 1)}`;
       let basketballawayteam3 = String.fromCharCode(101,102,102,101,99,116,105,118,101,95,54,95,57,55,0);
      let pangleG = String.fromCharCode(111,119,117,116,120,112,57,0) == basketballawayteam3;
      do {
         basketballawayteam3 = `${unfillk.length + basketballawayteam3.length}`;
         if (pangleG) {
            break;
         }
      } while (pangleG && (basketballawayteam3.startsWith(`${temperature6}`)));
       let next0 = String.fromCharCode(116,95,49,50,95,108,111,110,103,109,117,108,97,119,0);
       let bggradient7 = String.fromCharCode(104,95,57,52,95,98,101,99,97,109,101,0);
      controlL += 2 & currentr.length;
       let subbasketballplayerP: Array<any> = [String.fromCharCode(100,101,108,101,116,101,95,99,95,56,52,0), String.fromCharCode(109,95,53,48,95,99,111,118,97,114,105,97,110,99,101,0), String.fromCharCode(116,95,51,55,95,105,110,112,117,116,120,0)];
       let reviewz = String.fromCharCode(100,101,116,97,105,108,101,100,95,48,95,54,54,0);
       let closeZ = true;
         closeZ = (subbasketballplayerP.length & reviewz.length) == 14;
      if (!reviewz.includes(`${subbasketballplayerP.length}`)) {
         reviewz += `${1 ^ subbasketballplayerP.length}`;
      }
       let const__gc = false;
       let rootl = false;
      if (!closeZ || 3 == (subbasketballplayerP.length / 5)) {
         closeZ = (closeZ ? !const__gc : !closeZ);
      }
      let librrcP = String.fromCharCode(110,99,50,99,97,0) == reviewz;
      do {
          let delegate_1yP = String.fromCharCode(109,95,49,56,95,110,111,110,110,101,103,97,116,105,118,101,0);
          let smallbrightnessF = String.fromCharCode(98,95,56,56,95,101,99,100,115,97,0);
          let single5 = false;
          let memberL = 2.0;
          let becomez = 2.0;
         reviewz = `${((single5 ? 2 : 3) * parseInt(`${memberL}`))}`;
         delegate_1yP += `${parseInt(`${becomez}`) >> (Math.min(smallbrightnessF.length, 3))}`;
         smallbrightnessF = `${(delegate_1yP == String.fromCharCode(111,0) ? parseInt(`${becomez}`) : delegate_1yP.length)}`;
         single5 = smallbrightnessF.length > 92;
         memberL /= Math.max(1, smallbrightnessF.length | delegate_1yP.length);
         if (librrcP) {
            break;
         }
      } while (librrcP && (!const__gc || reviewz.length <= 1));
      let type_eoy = const__gc ? !const__gc : const__gc;
      do {
         const__gc = (53 == ((!closeZ ? 53 : subbasketballplayerP.length) / (Math.max(9, subbasketballplayerP.length))));
         if (type_eoy) {
            break;
         }
      } while ((closeZ) && type_eoy);
         closeZ = (((!rootl ? reviewz.length : 33) ^ reviewz.length) <= 33);
      let linkA = const__gc ? !const__gc : const__gc;
      do {
         const__gc = !closeZ;
         if (linkA) {
            break;
         }
      } while (linkA && (!rootl || !const__gc));
      let telemetryk = const__gc ? !const__gc : const__gc;
      do {
          let baseM = String.fromCharCode(120,105,110,99,95,104,95,55,51,0);
          let libreactnativejniY = String.fromCharCode(110,97,109,101,115,112,97,99,101,115,95,114,95,54,57,0);
          let privacyL = String.fromCharCode(115,95,49,50,95,97,98,98,114,0);
          let basketballmatchdetailbgy = 4;
         const__gc = closeZ;
         baseM += `${1 << (Math.min(3, Math.abs(basketballmatchdetailbgy)))}`;
         libreactnativejniY = `${baseM.length}`;
         privacyL += `${privacyL.length * baseM.length}`;
         basketballmatchdetailbgy ^= privacyL.length;
         if (telemetryk) {
            break;
         }
      } while ((!const__gc) && telemetryk);
      orangeclockl /= Math.max(1, parseFloat(`${parseInt(`${orangeclockl}`)}`));
       let libzeus0: Array<any> = [980, 921, 754];
       let collectionf = 5;
       let iconnewssharej: Array<any> = [806, 822];
          let langs = String.fromCharCode(114,105,99,104,95,99,95,50,53,0);
          let libloggerF = true;
          let downloadF = 4.0;
         libzeus0 = [1 + collectionf];
         langs = `${langs.length}`;
         libloggerF = langs.includes(`${libloggerF}`);
         downloadF *= langs.length + 1;
         iconnewssharej = [1];
          let middlebrightnessJ = String.fromCharCode(112,95,48,95,99,111,100,101,100,0);
          let flagv = 3;
         libzeus0.push(2 % (Math.max(2, libzeus0.length)));
         middlebrightnessJ += `${middlebrightnessJ.length & flagv}`;
         flagv -= flagv >> (Math.min(Math.abs(1), 4));
      let phonesharem = collectionf >= 5119956;
      do {
         collectionf -= iconnewssharej.length & 2;
         if (phonesharem) {
            break;
         }
      } while (phonesharem && (1 < libzeus0.length));
          let predictionactiveL = String.fromCharCode(97,99,101,110,99,95,51,95,54,53,0);
         libzeus0 = [libzeus0.length];
         predictionactiveL += `${(predictionactiveL == String.fromCharCode(67,0) ? predictionactiveL.length : predictionactiveL.length)}`;
      let hometeamfieldC = 5164636 <= libzeus0.length;
      do {
         libzeus0.push(iconnewssharej.length << (Math.min(5, Math.abs(collectionf))));
         if (hometeamfieldC) {
            break;
         }
      } while (((libzeus0.length | 2) < 5) && hometeamfieldC);
      for (let g = 0; g < 3; g++) {
         libzeus0 = [collectionf ^ 2];
      }
         libzeus0 = [libzeus0.length];
      while (4 >= (1 >> (Math.min(4, libzeus0.length)))) {
         iconnewssharej.push(libzeus0.length >> (Math.min(iconnewssharej.length, 4)));
         break;
      }
      orangetickC += `${(orangetickC == String.fromCharCode(56,0) ? orangetickC.length : jnewinterstitialp.length)}`;
   for (let f = 0; f < 1; f++) {
       let mbbannere = 5.0;
       let penaltyshootnogoalc: Array<any> = [72, 414, 759];
         mbbannere += parseFloat(`${parseInt(`${mbbannere}`) % (Math.max(penaltyshootnogoalc.length, 8))}`);
       let storek = String.fromCharCode(120,95,49,48,95,101,118,101,110,116,115,0);
       let hooka = String.fromCharCode(115,116,97,110,100,97,114,100,115,95,108,95,50,0);
       let hook2 = 1;
       let rncorex = 3;
      while ((mbbannere + parseFloat(`${hooka.length}`)) < 4.51 && (parseInt(`${mbbannere}`) + hooka.length) < 2) {
         mbbannere /= Math.max(parseFloat(`${rncorex}`), 3);
         break;
      }
      for (let j = 0; j < 2; j++) {
          let yellowtoreds = String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,95,54,95,50,51,0);
         rncorex <<= Math.min(Math.abs((String.fromCharCode(121,0) == yellowtoreds ? yellowtoreds.length : hook2)), 2);
      }
      if (2 == hook2) {
         hooka = `${2 - parseInt(`${mbbannere}`)}`;
      }
      controlL -= 1;
   }

    wawaEvent.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

   for (let r = 0; r < 1; r++) {
       let detailsf = 4.0;
         detailsf -= parseFloat(`${parseInt(`${detailsf}`)}`);
         detailsf *= parseFloat(`${parseInt(`${detailsf}`)}`);
      while ((detailsf + 5.8) >= 3.13) {
         detailsf += parseFloat(`${2 & parseInt(`${detailsf}`)}`);
         break;
      }
      eighteenE.set(jnewinterstitialp, 2 + parseInt(`${orangeclockl}`));
   }
       let nativeexB = true;
      if (nativeexB) {
         nativeexB = !nativeexB;
      }
      if (!nativeexB) {
          let zhengpianM = false;
          let iconlogoutB = String.fromCharCode(99,95,50,52,95,104,101,120,98,105,110,0);
         nativeexB = iconlogoutB.length <= 50 && !nativeexB;
         zhengpianM = (!zhengpianM ? zhengpianM : !zhengpianM);
         iconlogoutB = `${((zhengpianM ? 2 : 2) + 3)}`;
      }
       let eventm = String.fromCharCode(100,120,110,100,99,95,107,95,49,0);
      jingdongn += parseFloat(`${greytickf.length}`);
      orangetickC += `${((showlessM ? 5 : 2) - parseInt(`${controlL}`))}`;
      shirta.push(3);
      setOtpTextInput([]);

       let tumbnailA = false;
      while (!tumbnailA) {
         tumbnailA = (!tumbnailA ? tumbnailA : tumbnailA);
         break;
      }
         tumbnailA = !tumbnailA;
      for (let e = 0; e < 1; e++) {
         tumbnailA = (!tumbnailA ? !tumbnailA : !tumbnailA);
      }
      currentr += "2";
   for (let u = 0; u < 3; u++) {
      downloadedL /= Math.max(parseFloat(`${parseInt(`${controlL}`) << (Math.min(greytickf.length, 3))}`), 3);
   }
      greytickf = [parseInt(`${orangeclockl}`) | 1];
      shirta.push(2 << (Math.min(3, shirta.length)));
      setOtp('      ');

       let ranks = String.fromCharCode(98,95,56,51,95,112,114,105,111,0);
      if (!ranks.endsWith(ranks)) {
          let awayiconG = 1.0;
          let profileinactiveP = 1.0;
          let iconplayo = String.fromCharCode(114,101,116,97,105,110,115,95,50,95,55,0);
         ranks += `${iconplayo.length}`;
         awayiconG += parseFloat(`${parseInt(`${profileinactiveP}`)}`);
         iconplayo += `${parseInt(`${profileinactiveP}`) ^ 3}`;
      }
      if (!ranks.startsWith(ranks)) {
          let foreground7 = String.fromCharCode(121,95,57,95,116,114,117,115,116,0);
         ranks = `${ranks.length | 1}`;
         foreground7 = "3";
      }
         ranks = "2";
      eighteenE.set(`${shirta.length}`, shirta.length * eighteenE.size);
      eighteenE = new Map([[`${orangeclockl}`, parseInt(`${orangeclockl}`)]]);
      shirta = [(basketballW == String.fromCharCode(80,0) ? parseInt(`${jingdongn}`) : basketballW.length)];
   if (currentr != String.fromCharCode(56,0)) {
      jnewinterstitialp += `${(String.fromCharCode(79,0) == orangetickC ? orangetickC.length : parseInt(`${controlL}`))}`;
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
      result = await wawaEvent.signinupUser({
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

    const user = wawaLibglog.fromJson(resultData);

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

      
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.userCenterLoginSuccessTimesAnalytics();
      wawaSina.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.userCenterVipLoginSuccessTimesAnalytics();
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
            source={require('@static/images/invite/volumeOrangeclock.png')}
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
