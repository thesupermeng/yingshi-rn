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
import ww_runtime from '../../../../Umeng/ww_runtime';
import { wwIconscheduleColors } from '@api';
import { useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import { wwEighteenShirt } from '@redux/ww_small';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import wwSelect from '../../../../AppsFlyer/ww_short';


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
       let thumbnail_ = false;
    let episodesL: Array<any> = [647, 490];
    let star_ = String.fromCharCode(120,95,56,56,95,105,110,100,101,120,111,102,0);
    let pathv = String.fromCharCode(112,114,101,115,101,116,115,95,48,95,49,55,0);
    let iconbackwhite8 = 2.0;
    let pausez = 2;
    let clockc = String.fromCharCode(122,95,56,53,0);
    let baseline1 = String.fromCharCode(116,102,114,102,95,50,95,50,50,0);
    let handlerf: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,101,100,95,56,95,56,51,0),String.fromCharCode(107,95,52,54,95,99,116,116,115,0)], [String.fromCharCode(113,95,51,53,95,117,110,103,114,111,117,112,0),String.fromCharCode(106,95,55,57,95,109,97,121,0)], [String.fromCharCode(109,95,51,48,95,111,109,112,108,105,99,97,116,105,111,110,0),String.fromCharCode(109,101,97,115,117,114,101,114,95,51,95,49,48,48,0)]]);
   let subs4 = iconbackwhite8 <= 8097335.0;
   do {
      iconbackwhite8 /= Math.max(1, 3);
      if (subs4) {
         break;
      }
   } while (((iconbackwhite8 / (Math.max(pathv.length, 2))) >= 3.53) && subs4);
       let bodana = String.fromCharCode(109,95,56,57,95,119,105,110,100,111,119,115,0);
       let lcopy_awH = String.fromCharCode(114,116,99,119,101,98,95,106,95,50,50,0);
       let update_baQ = 2;
       let downloadingr = 2.0;
       let productq = 0.0;
         bodana = `${2 * update_baQ}`;
      let policya = 6221589 <= bodana.length;
      do {
         bodana += `${(bodana == String.fromCharCode(103,0) ? bodana.length : parseInt(`${downloadingr}`))}`;
         if (policya) {
            break;
         }
      } while ((update_baQ > 4) && policya);
      for (let c = 0; c < 3; c++) {
         update_baQ ^= parseInt(`${downloadingr}`) | parseInt(`${productq}`);
      }
      for (let z = 0; z < 3; z++) {
         lcopy_awH += `${bodana.length}`;
      }
      let pushC = lcopy_awH.length >= 8315734;
      do {
         lcopy_awH += `${parseInt(`${productq}`)}`;
         if (pushC) {
            break;
         }
      } while (pushC && ((downloadingr * 3.4) >= 1.11 || 4 >= (1 ^ lcopy_awH.length)));
      if (downloadingr <= productq) {
         productq *= parseFloat(`${bodana.length - 3}`);
      }
          let panglep = String.fromCharCode(97,117,103,109,101,110,116,101,100,95,100,95,53,52,0);
          let statisticsinactiveL: Array<any> = [168, 902];
         lcopy_awH = `${lcopy_awH.length}`;
         panglep += `${statisticsinactiveL.length | 3}`;
         statisticsinactiveL = [panglep.length * statisticsinactiveL.length];
       let liveendmodallogo4 = String.fromCharCode(97,95,55,56,95,110,97,114,114,111,119,0);
      iconbackwhite8 /= Math.max(episodesL.length & parseInt(`${iconbackwhite8}`), 5);
      iconbackwhite8 += pathv.length / (Math.max(1, clockc.length));
       let graym = false;
       let greyarrowupC = true;
      while (graym) {
          let soundl = String.fromCharCode(103,97,109,109,97,118,97,108,95,97,95,49,48,0);
         graym = (99 == ((graym ? soundl.length : 99) / (Math.max(2, soundl.length))));
         break;
      }
      for (let e = 0; e < 3; e++) {
         greyarrowupC = (!greyarrowupC ? graym : greyarrowupC);
      }
         graym = graym || greyarrowupC;
      if (greyarrowupC) {
          let proxyI = String.fromCharCode(112,95,52,53,0);
          let selectionf = String.fromCharCode(117,95,49,57,95,102,105,110,100,101,112,0);
         greyarrowupC = (!greyarrowupC ? graym : !greyarrowupC);
         proxyI += `${3 * proxyI.length}`;
         selectionf += `${3 - selectionf.length}`;
      }
      if (graym) {
          let libjsijniprofilerC = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,119,95,53,52,0);
          let cancelW = 3;
          let t_managerX = String.fromCharCode(104,109,109,116,95,116,95,50,55,0);
          let floatinga: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,48,95,99,108,103,101,116,0),String.fromCharCode(111,95,49,95,105,115,112,108,97,121,0)], [String.fromCharCode(98,111,120,98,108,117,114,95,114,95,52,57,0),String.fromCharCode(117,95,49,54,95,97,108,108,111,99,97,116,105,111,110,0)]]);
         greyarrowupC = !greyarrowupC;
         libjsijniprofilerC = `${libjsijniprofilerC.length}`;
         cancelW %= Math.max(2 / (Math.max(10, cancelW)), 2);
         t_managerX = `${libjsijniprofilerC.length}`;
         floatinga = new Map([[`${floatinga.size}`, (String.fromCharCode(104,0) == libjsijniprofilerC ? floatinga.size : libjsijniprofilerC.length)]]);
      }
      for (let t = 0; t < 2; t++) {
         greyarrowupC = !graym;
      }
      pathv = `${2 - pausez}`;
   if ((episodesL.length ^ 4) <= 1 && 2 <= (episodesL.length ^ 4)) {
      clockc = `${parseInt(`${iconbackwhite8}`) << (Math.min(clockc.length, 3))}`;
   }
   for (let d = 0; d < 2; d++) {
      pathv = `${(episodesL.length >> (Math.min(5, Math.abs((thumbnail_ ? 4 : 4)))))}`;
   }
   if (pausez < iconbackwhite8) {
      pausez <<= Math.min(Math.abs(star_.length - pausez), 3);
   }
   for (let j = 0; j < 2; j++) {
      episodesL.push(star_.length >> (Math.min(1, episodesL.length)));
   }
   for (let a = 0; a < 2; a++) {
       let libavcodect = 0.0;
       let dragcloseX: Map<any, any> = new Map([[String.fromCharCode(107,95,51,53,95,105,110,116,0),String.fromCharCode(116,104,114,101,115,104,111,108,100,95,100,95,53,56,0)], [String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,55,95,49,52,0),String.fromCharCode(108,97,114,103,101,115,116,95,112,95,50,50,0)], [String.fromCharCode(119,114,105,116,116,101,110,95,55,95,57,0),String.fromCharCode(119,95,55,55,95,116,101,115,116,114,97,110,115,0)]]);
       let logouserj = String.fromCharCode(113,95,51,54,95,116,101,108,0);
       let gradlej = 2.0;
         libavcodect += parseFloat(`${parseInt(`${gradlej}`)}`);
          let shrinkk = String.fromCharCode(98,97,99,107,114,111,117,110,100,95,56,95,51,57,0);
          let success_ = false;
         dragcloseX.set(`${libavcodect}`, 1);
         shrinkk = `${shrinkk.length}`;
         success_ = (((success_ ? 31 : shrinkk.length) & shrinkk.length) <= 31);
         gradlej -= parseFloat(`${parseInt(`${gradlej}`) * parseInt(`${libavcodect}`)}`);
      if (Array.from(dragcloseX.keys()).includes(`${gradlej}`)) {
          let gifto = 0;
          let combineK = String.fromCharCode(119,95,55,52,95,116,121,112,0);
         dragcloseX = new Map([[`${dragcloseX.size}`, dragcloseX.size]]);
         gifto -= combineK.length ^ gifto;
         combineK += `${gifto / 1}`;
      }
         gradlej += parseFloat(`${dragcloseX.size}`);
      let profileframeQ = 7151130 <= dragcloseX.size;
      do {
         dragcloseX = new Map([[`${dragcloseX.size}`, dragcloseX.size / (Math.max(1, 8))]]);
         if (profileframeQ) {
            break;
         }
      } while ((libavcodect <= 1.30) && profileframeQ);
         logouserj = `${logouserj.length / 3}`;
         logouserj += `${dragcloseX.size + 2}`;
         dragcloseX = new Map([[`${dragcloseX.size}`, (logouserj == String.fromCharCode(119,0) ? dragcloseX.size : logouserj.length)]]);
      let thumbnailF = gradlej >= 5284760.0;
      do {
          let predictionY = 5;
          let matchactiveJ = true;
          let gestures9: Array<any> = [314, 318];
          let disconnectedlogoa = String.fromCharCode(116,95,54,57,95,112,101,114,102,0);
          let libjsiA = String.fromCharCode(112,95,49,56,95,118,109,97,102,109,111,116,105,111,110,0);
         gradlej *= parseFloat(`${1}`);
         predictionY /= Math.max(3, predictionY);
         matchactiveJ = gestures9.includes(predictionY);
         gestures9 = [(libjsiA == String.fromCharCode(116,0) ? libjsiA.length : disconnectedlogoa.length)];
         disconnectedlogoa += `${((matchactiveJ ? 5 : 5) << (Math.min(gestures9.length, 2)))}`;
         if (thumbnailF) {
            break;
         }
      } while (((4.1 * gradlej) >= 5.69) && thumbnailF);
      for (let x = 0; x < 2; x++) {
          let iconplayw = 0;
          let catagory0 = 1.0;
          let singlei = String.fromCharCode(103,95,56,95,100,101,112,97,99,107,101,116,105,122,101,114,0);
          let codegeng = 0.0;
          let privilegeQ = 3;
         dragcloseX = new Map([[`${libavcodect}`, 2 / (Math.max(privilegeQ, 6))]]);
         iconplayw >>= Math.min(Math.abs(parseInt(`${codegeng}`) << (Math.min(Math.abs(parseInt(`${catagory0}`)), 1))), 1);
         catagory0 *= parseFloat(`${1}`);
         singlei = `${(String.fromCharCode(73,0) == singlei ? parseInt(`${catagory0}`) : singlei.length)}`;
         codegeng /= Math.max(singlei.length << (Math.min(5, Math.abs(parseInt(`${catagory0}`)))), 3);
         privilegeQ *= 2;
      }
         gradlej += parseFloat(`${2 * parseInt(`${libavcodect}`)}`);
      clockc += `${2 << (Math.min(1, logouserj.length))}`;
   }
      iconbackwhite8 -= star_.length;
   let encryptM = String.fromCharCode(56,112,101,105,107,113,0) == clockc;
   do {
       let proxyH: Array<any> = [803, 180, 168];
          let mathK: Map<any, any> = new Map([[String.fromCharCode(112,111,119,101,114,101,100,95,103,95,57,53,0),String.fromCharCode(115,121,110,116,97,120,95,105,95,54,48,0)], [String.fromCharCode(105,95,52,51,95,111,117,116,100,97,116,101,100,0),String.fromCharCode(112,114,111,99,101,115,115,111,114,95,117,95,53,51,0)]]);
          let largel: Map<any, any> = new Map([[String.fromCharCode(117,95,55,48,95,115,97,116,117,114,97,116,105,111,110,0),String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,109,95,51,56,0)], [String.fromCharCode(104,95,52,95,114,101,102,114,101,115,104,0),String.fromCharCode(119,97,105,116,95,122,95,50,55,0)], [String.fromCharCode(113,95,57,50,95,100,101,113,117,101,117,101,0),String.fromCharCode(105,110,105,116,105,97,108,105,122,105,110,103,95,117,95,53,55,0)]]);
         proxyH = [3];
         mathK = new Map([[`${largel.size}`, mathK.size]]);
         largel = new Map([[`${largel.size}`, 1 + mathK.size]]);
      if (4 <= (4 + proxyH.length) && (proxyH.length + proxyH.length) <= 4) {
         proxyH.push(1);
      }
      for (let q = 0; q < 2; q++) {
         proxyH = [proxyH.length];
      }
      clockc += `${1 / (Math.max(1, proxyH.length))}`;
      if (encryptM) {
         break;
      }
   } while ((5.8 <= (5.33 * iconbackwhite8) && 2 <= (clockc.length * 5)) && encryptM);
   if (star_.startsWith(`${pausez}`)) {
      star_ = `${parseInt(`${iconbackwhite8}`)}`;
   }
   while (pathv == String.fromCharCode(108,0)) {
      star_ = `${star_.length}`;
      break;
   }
   let themew = String.fromCharCode(112,113,112,122,55,122,0) == star_;
   do {
      star_ += "3";
      if (themew) {
         break;
      }
   } while (themew && (4 <= episodesL.length));
   if (clockc.endsWith(star_)) {
      clockc = "3";
   }
      clockc += `${(star_.length % (Math.max(10, (thumbnail_ ? 5 : 1))))}`;

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  
  const resendOTP = () => {
       let yellowvideolivej = String.fromCharCode(112,95,53,95,116,105,109,101,108,105,110,101,115,0);
    let rncoreg = 5;
    let reactnavigations = 2.0;
    let becomeo = String.fromCharCode(97,103,103,114,101,103,97,116,101,95,113,95,57,56,0);
    let unreadK = false;
    let pingu = String.fromCharCode(122,95,57,55,95,104,119,97,99,99,101,108,0);
    let selectionk = 0.0;
    let temperaturez = String.fromCharCode(109,115,101,112,115,110,114,95,51,95,55,50,0);
    let libfabricjnis = String.fromCharCode(114,103,98,95,110,95,54,50,0);
    let selectionv: Array<any> = [167, 91];
    let philippinesE = String.fromCharCode(103,95,53,95,99,105,114,99,108,101,100,0);
    let accepted_ = 3.0;
    let custom1 = 1.0;
    let middleH: Array<any> = [592, 344, 253];
   while (!pingu.includes(philippinesE)) {
      pingu += `${(pingu == String.fromCharCode(65,0) ? pingu.length : becomeo.length)}`;
      break;
   }
      reactnavigations *= parseInt(`${reactnavigations}`) | 2;
   for (let p = 0; p < 3; p++) {
      becomeo += `${selectionv.length}`;
   }
      becomeo = `${(String.fromCharCode(51,0) == pingu ? pingu.length : philippinesE.length)}`;

    setResend(false);

       let applet = 0.0;
       let foregroundZ = 1.0;
      if ((applet + 1.95) == 5.8) {
         applet += parseFloat(`${3}`);
      }
      while (foregroundZ < applet) {
         foregroundZ += parseInt(`${applet}`);
         break;
      }
      while (foregroundZ <= 3.82) {
         applet *= parseFloat(`${parseInt(`${foregroundZ}`)}`);
         break;
      }
      if ((2.27 - foregroundZ) >= 1.32 || 2.59 >= (applet - 2.27)) {
          let screenO = 0;
         foregroundZ /= Math.max(screenO, 2);
      }
      for (let s = 0; s < 2; s++) {
         applet += parseFloat(`${parseInt(`${foregroundZ}`)}`);
      }
      while (foregroundZ >= applet) {
          let lnewsshareg = String.fromCharCode(121,95,55,49,95,102,105,108,108,0);
         foregroundZ /= Math.max(parseInt(`${applet}`), 2);
         lnewsshareg += `${lnewsshareg.length << (Math.min(lnewsshareg.length, 4))}`;
         break;
      }
      rncoreg ^= becomeo.length;
   while (5 < (1 << (Math.min(1, becomeo.length)))) {
       let calendarT = String.fromCharCode(107,95,52,49,95,100,105,109,115,0);
       let teamdetailsbgJ = 1.0;
       let disconnectedk = String.fromCharCode(115,112,97,99,101,115,95,100,95,53,53,0);
      while (teamdetailsbgJ == 2.17) {
         teamdetailsbgJ *= (calendarT == String.fromCharCode(95,0) ? parseInt(`${teamdetailsbgJ}`) : calendarT.length);
         break;
      }
      while ((teamdetailsbgJ - 5.5) < 2.7) {
          let dependencyT = 1.0;
          let thumbnailm = 1.0;
         teamdetailsbgJ /= Math.max(calendarT.length, 2);
         dependencyT /= Math.max(3 * parseInt(`${thumbnailm}`), 4);
         thumbnailm /= Math.max(1 + parseInt(`${thumbnailm}`), 3);
         break;
      }
       let libswscalen: Array<any> = [991, 167];
       let crossx: Array<any> = [654, 978];
       let yellowredcardd: Map<any, any> = new Map([[String.fromCharCode(115,97,109,112,108,101,100,95,52,95,50,52,0),969], [String.fromCharCode(97,97,99,101,110,99,116,97,98,95,52,95,57,55,0),946]]);
         yellowredcardd = new Map([[`${crossx.length}`, (disconnectedk == String.fromCharCode(105,0) ? crossx.length : disconnectedk.length)]]);
      let star4 = yellowredcardd.size >= 8532704;
      do {
         yellowredcardd = new Map([[`${teamdetailsbgJ}`, parseInt(`${teamdetailsbgJ}`)]]);
         if (star4) {
            break;
         }
      } while (star4 && (!Array.from(yellowredcardd.keys()).includes(`${crossx.length}`)));
       let libmapbufferjnix: Array<any> = [290, 313];
       let hejiZ: Array<any> = [833, 264];
          let minivodd: Array<any> = [673, 36, 319];
          let currents = String.fromCharCode(99,111,115,105,95,51,95,55,53,0);
          let langl = 2.0;
         crossx.push(libswscalen.length + libmapbufferjnix.length);
         minivodd = [currents.length];
         currents = `${minivodd.length}`;
         langl -= 2;
      for (let f = 0; f < 1; f++) {
         calendarT = `${(String.fromCharCode(82,0) == calendarT ? calendarT.length : yellowredcardd.size)}`;
      }
      selectionk *= parseFloat(`${rncoreg}`);
      break;
   }
   for (let v = 0; v < 1; v++) {
      becomeo += `${(String.fromCharCode(78,0) == philippinesE ? selectionv.length : philippinesE.length)}`;
   }
   if (1 > (selectionv.length - parseInt(`${selectionk}`)) && 5 > (selectionv.length / 1)) {
      selectionk /= Math.max(parseFloat(`${3 & becomeo.length}`), 2);
   }

    wwIconscheduleColors.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

   for (let e = 0; e < 2; e++) {
       let humidityg: Map<any, any> = new Map([[String.fromCharCode(111,114,103,97,110,105,122,97,116,105,111,110,95,56,95,50,57,0),726], [String.fromCharCode(97,95,52,50,95,115,101,116,119,97,116,101,114,109,97,114,107,0),723]]);
       let fileA = String.fromCharCode(98,114,117,116,101,102,111,114,99,101,95,102,95,50,53,0);
         humidityg.set(`${fileA}`, humidityg.size);
      let bootO = 7209066 >= humidityg.size;
      do {
         humidityg = new Map([[`${humidityg.size}`, 3]]);
         if (bootO) {
            break;
         }
      } while (bootO && (5 <= (1 << (Math.min(2, Math.abs(humidityg.size)))) && 4 <= (1 << (Math.min(1, Math.abs(humidityg.size))))));
         fileA = `${3 * fileA.length}`;
      while (humidityg.size <= fileA.length) {
         humidityg.set(`${fileA}`, fileA.length);
         break;
      }
      let telemetryW = 9749665 >= fileA.length;
      do {
         fileA = `${2 * humidityg.size}`;
         if (telemetryW) {
            break;
         }
      } while ((fileA.includes(`${humidityg.size}`)) && telemetryW);
      for (let q = 0; q < 2; q++) {
         humidityg = new Map([[`${humidityg.size}`, humidityg.size]]);
      }
      libfabricjnis = `${3 % (Math.max(rncoreg, 10))}`;
   }
   if (5 <= philippinesE.length) {
      reactnavigations /= Math.max(becomeo.length, 4);
   }
      unreadK = String.fromCharCode(104,0) == yellowvideolivej;
      selectionk -= (parseFloat(`${philippinesE == String.fromCharCode(117,0) ? philippinesE.length : temperaturez.length}`));
      setOtpTextInput([]);

   for (let j = 0; j < 2; j++) {
      selectionk += (parseFloat(`${libfabricjnis == String.fromCharCode(81,0) ? temperaturez.length : libfabricjnis.length}`));
   }
   while (2.100 > selectionk) {
      selectionk *= parseFloat(`${2 + rncoreg}`);
      break;
   }
      custom1 /= Math.max(4, 3);
       let componentZ: Map<any, any> = new Map([[String.fromCharCode(111,112,116,101,100,95,119,95,53,54,0),true ], [String.fromCharCode(113,95,53,56,95,112,111,115,116,101,114,115,0),false ]]);
       let indicatorK = String.fromCharCode(118,95,55,56,95,115,116,114,102,116,105,109,101,0);
       let zhengpianN = false;
      let xadsdkx = String.fromCharCode(109,57,54,113,53,115,54,120,0) == indicatorK;
      do {
          let acceptedw: Map<any, any> = new Map([[String.fromCharCode(99,95,49,56,95,105,116,101,109,115,0),false ], [String.fromCharCode(101,99,114,101,99,111,118,101,114,95,54,95,53,0),true ]]);
          let iconfeedback5 = 2.0;
          let nbatrophy6 = 2.0;
         indicatorK = `${1 & indicatorK.length}`;
         acceptedw = new Map([[`${iconfeedback5}`, parseInt(`${iconfeedback5}`) ^ 2]]);
         nbatrophy6 -= parseInt(`${iconfeedback5}`);
         if (xadsdkx) {
            break;
         }
      } while ((zhengpianN) && xadsdkx);
      for (let a = 0; a < 1; a++) {
         zhengpianN = indicatorK.length <= 84 || !zhengpianN;
      }
      if (indicatorK.endsWith(`${zhengpianN}`)) {
          let roundj = 2;
          let backwardK = String.fromCharCode(109,95,56,54,95,112,114,111,116,101,99,116,0);
          let defaultplayerimgG = 0.0;
         indicatorK = `${indicatorK.length / (Math.max(1, 3))}`;
         roundj |= backwardK.length + parseInt(`${defaultplayerimgG}`);
         backwardK += `${backwardK.length}`;
         defaultplayerimgG -= (backwardK == String.fromCharCode(116,0) ? parseInt(`${defaultplayerimgG}`) : backwardK.length);
      }
      for (let o = 0; o < 3; o++) {
         indicatorK += `${(String.fromCharCode(71,0) == indicatorK ? componentZ.size : indicatorK.length)}`;
      }
      let macaue = zhengpianN ? !zhengpianN : zhengpianN;
      do {
          let v_position_ = String.fromCharCode(119,95,55,49,95,105,102,111,114,119,97,114,100,0);
          let desch = 4;
          let short_rg1 = false;
          let frame_cz: Array<any> = [622, 872, 181];
          let frame_upj = String.fromCharCode(100,95,49,48,95,99,108,101,97,110,117,112,0);
         zhengpianN = frame_upj.length > 64 && !short_rg1;
         v_position_ = `${3 | frame_cz.length}`;
         desch *= desch << (Math.min(Math.abs(3), 3));
         short_rg1 = desch <= 13;
         frame_cz = [desch + v_position_.length];
         frame_upj += `${desch + 3}`;
         if (macaue) {
            break;
         }
      } while ((zhengpianN || indicatorK.length > 5) && macaue);
      if (1 == indicatorK.length) {
         indicatorK += `${(String.fromCharCode(70,0) == indicatorK ? indicatorK.length : componentZ.size)}`;
      }
      let iconshare3 = zhengpianN ? !zhengpianN : zhengpianN;
      do {
          let dependencyf = false;
         zhengpianN = !dependencyf;
         if (iconshare3) {
            break;
         }
      } while ((zhengpianN || 4 <= indicatorK.length) && iconshare3);
          let textlayoutmanagery = String.fromCharCode(114,101,108,101,118,97,110,116,95,110,95,57,55,0);
          let analyticsp = 4.0;
         zhengpianN = (componentZ.size - textlayoutmanagery.length) >= 68;
         textlayoutmanagery = `${2 >> (Math.min(Math.abs(parseInt(`${analyticsp}`)), 2))}`;
         analyticsp /= Math.max(parseFloat(`${parseInt(`${analyticsp}`) & parseInt(`${analyticsp}`)}`), 5);
         indicatorK += "1";
      custom1 *= temperaturez.length & selectionv.length;
      setOtp('      ');

      libfabricjnis = `${libfabricjnis.length}`;
   while ((selectionv.length >> (Math.min(yellowvideolivej.length, 5))) == 2 && 2 == (selectionv.length >> (Math.min(yellowvideolivej.length, 3)))) {
      yellowvideolivej = "2";
      break;
   }
   let yellowj = 6612554.0 <= reactnavigations;
   do {
      reactnavigations /= Math.max(2, 3);
      if (yellowj) {
         break;
      }
   } while ((temperaturez.includes(`${reactnavigations}`)) && yellowj);
   let sound3 = yellowvideolivej == String.fromCharCode(121,51,98,104,116,103,117,52,0);
   do {
      yellowvideolivej += `${yellowvideolivej.length & 2}`;
      if (sound3) {
         break;
      }
   } while ((yellowvideolivej.length < temperaturez.length) && sound3);
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
