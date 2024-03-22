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
import ScreenContainer from '../../components/container/mayi_save';
import { useDispatch } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';

import { ResendCountDown } from './mayi_downloader';
import { addUserAuthState } from '@redux/actions/mayi_librrc';

import { changeScreenAction } from '@redux/actions/mayi_iconorientation_chatroombackground';
import mayi_push from '../../../Umeng/mayi_push';
import { mayi_Injury } from '@api';
import { useSelector } from '@hooks/mayi_redirect';
import { mayi_Gift } from '@models/mayi_libjsinspector';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import mayi_ForegroundLibfabricjni from '../../../AppsFlyer/mayi_libreactnativejni';


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

type mayi_IconrightorangeTime = {
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
}: mayi_IconrightorangeTime) => {
  const { colors, dark } = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); 

  const [focusedInput, setFocusedInput] = useState(null); 

  const userState = useSelector<mayi_Baseline>('userReducer');

  const styles = useMemo(() => createStyles({
    colors,
    dark,
  }), [colors, dark]);

  const handleFocus = (index: any) => {
    console.log(index);
    setFocusedInput(index);
  };

  const handleBlur = () => {
       let otherf = 2.0;
    let defaultteam1: Map<any, any> = new Map([[String.fromCharCode(105,95,51,56,95,109,112,101,103,0),464], [String.fromCharCode(99,95,52,55,95,109,97,110,105,112,117,108,97,116,111,114,0),407]]);
    let projectS: Map<any, any> = new Map([[String.fromCharCode(117,95,54,56,95,112,111,115,116,112,114,111,99,101,115,115,0),String.fromCharCode(117,95,54,51,95,112,114,111,112,97,103,97,116,105,111,110,0)], [String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,106,95,56,57,0),String.fromCharCode(97,109,112,108,105,116,117,100,101,95,118,95,50,50,0)], [String.fromCharCode(115,95,49,53,95,117,110,105,113,117,101,0),String.fromCharCode(118,111,114,100,105,112,108,111,109,95,110,95,54,48,0)]]);
    let league_ = String.fromCharCode(106,95,51,55,95,101,120,112,97,110,115,105,111,110,0);
    let spinnerU = String.fromCharCode(108,95,55,56,95,98,105,116,120,0);
    let logouserC = 0.0;
    let homeloading5 = 2;
    let predictionbuttony = 5;
    let gestureW = 1.0;
    let libsentryn = 5.0;
    let favoriteA: Array<any> = [376, 349, 870];
       let resendv = false;
       let encryptd = 5.0;
       let weatherk: Array<any> = [455, 528, 448];
      if ((weatherk.length - encryptd) < 3.49) {
         encryptd += ((resendv ? 5 : 2) + parseInt(`${encryptd}`));
      }
          let actions0 = 5.0;
         encryptd += parseInt(`${encryptd}`) * parseInt(`${actions0}`);
      if (2 < (4 >> (Math.min(4, weatherk.length))) && 4 < (parseInt(`${encryptd}`) - weatherk.length)) {
         encryptd += 2;
      }
          let firebasek = String.fromCharCode(103,95,55,56,95,115,117,109,109,97,114,121,0);
          let fills = String.fromCharCode(102,95,50,50,95,105,110,118,97,114,105,97,110,116,115,0);
          let predictionarrowL = false;
         encryptd -= ((resendv ? 5 : 5));
         firebasek += "2";
         fills += `${firebasek.length * 3}`;
         predictionarrowL = firebasek == fills;
      for (let n = 0; n < 1; n++) {
         encryptd /= Math.max((parseInt(`${encryptd}`) << (Math.min(1, Math.abs((resendv ? 4 : 3))))), 3);
      }
         encryptd -= parseInt(`${encryptd}`) ^ 3;
      let indicatoro = weatherk.length >= 6851392;
      do {
         weatherk = [weatherk.length];
         if (indicatoro) {
            break;
         }
      } while (((encryptd + weatherk.length) > 2.4) && indicatoro);
       let untick_ = 5.0;
      for (let m = 0; m < 1; m++) {
          let nexte = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,103,95,55,49,0);
         resendv = 75.35 <= encryptd;
         nexte = `${nexte.length | 1}`;
      }
      league_ = "1";
   for (let n = 0; n < 1; n++) {
      projectS.set(`${otherf}`, 2 | parseInt(`${otherf}`));
   }
   let layouts = 6200688 <= league_.length;
   do {
      league_ = `${spinnerU.length}`;
      if (layouts) {
         break;
      }
   } while (layouts && ((homeloading5 / (Math.max(4, 4))) >= 4 || (homeloading5 / (Math.max(league_.length, 3))) >= 4));
      homeloading5 >>= Math.min(5, Math.abs(2));
       let leaguedetailsbgN: Map<any, any> = new Map([[String.fromCharCode(105,95,56,95,108,97,103,97,114,105,116,104,114,97,99,0),439], [String.fromCharCode(98,114,107,116,105,109,101,103,109,95,109,95,51,51,0),594]]);
      while (4 < (leaguedetailsbgN.size + leaguedetailsbgN.size) || (leaguedetailsbgN.size + leaguedetailsbgN.size) < 4) {
          let icontransferclubA = 3.0;
          let logout9 = 0.0;
          let gesturex: Map<any, any> = new Map([[String.fromCharCode(101,116,104,101,114,110,101,116,95,48,95,51,51,0),String.fromCharCode(103,95,52,49,95,112,111,108,121,115,116,97,114,0)], [String.fromCharCode(100,95,55,48,95,110,111,110,110,117,108,108,115,115,114,99,0),String.fromCharCode(115,117,98,100,101,109,117,120,101,114,95,108,95,56,54,0)]]);
         leaguedetailsbgN = new Map([[`${icontransferclubA}`, parseInt(`${icontransferclubA}`) ^ parseInt(`${logout9}`)]]);
         logout9 /= Math.max(1, gesturex.size - 1);
         break;
      }
         leaguedetailsbgN.set(`${leaguedetailsbgN.size}`, leaguedetailsbgN.size);
         leaguedetailsbgN.set(`${leaguedetailsbgN.size}`, 1);
      league_ = `${parseInt(`${logouserC}`) >> (Math.min(Math.abs(1), 5))}`;
   while (league_.endsWith(`${spinnerU.length}`)) {
      league_ = `${3 & league_.length}`;
      break;
   }
   for (let o = 0; o < 2; o++) {
      spinnerU += `${homeloading5}`;
   }
      gestureW += parseInt(`${logouserC}`) << (Math.min(4, Math.abs(3)));
   for (let x = 0; x < 3; x++) {
       let whitevideolivef = String.fromCharCode(116,105,116,110,116,95,105,95,57,48,0);
       let searchZ = false;
         whitevideolivef += `${whitevideolivef.length}`;
      while (!whitevideolivef.endsWith(`${searchZ}`)) {
          let zcopy_8S = true;
          let feedbacky = String.fromCharCode(114,101,97,108,108,121,95,107,95,53,53,0);
         whitevideolivef = `${(feedbacky == String.fromCharCode(112,0) ? feedbacky.length : (zcopy_8S ? 4 : 5))}`;
         break;
      }
         whitevideolivef += "1";
      let typesm = searchZ ? !searchZ : searchZ;
      do {
         searchZ = whitevideolivef.length < 43 || !searchZ;
         if (typesm) {
            break;
         }
      } while (typesm && (!searchZ && 2 <= whitevideolivef.length));
         whitevideolivef = `${2 + whitevideolivef.length}`;
       let eactj = String.fromCharCode(106,95,53,50,95,108,97,110,100,109,105,110,101,115,0);
      projectS = new Map([[`${defaultteam1.size}`, 1 * defaultteam1.size]]);
   }
   if ((1 << (Math.min(2, Math.abs(predictionbuttony)))) < 5 || (spinnerU.length << (Math.min(Math.abs(1), 5))) < 3) {
      predictionbuttony *= parseInt(`${otherf}`) - parseInt(`${logouserC}`);
   }
   while (projectS.get(`${defaultteam1.size}`) == null) {
      projectS.set(`${league_}`, league_.length >> (Math.min(4, Math.abs(projectS.size))));
      break;
   }
   while (4.0 <= (5.16 - otherf) || 3 <= (5 + homeloading5)) {
      otherf -= parseFloat(`${projectS.size}`);
      break;
   }
   while (league_.length <= projectS.size) {
      league_ += `${parseInt(`${gestureW}`) + predictionbuttony}`;
      break;
   }
   let libreanimatedH = 5187135.0 <= gestureW;
   do {
      gestureW *= 2 & parseInt(`${logouserC}`);
      if (libreanimatedH) {
         break;
      }
   } while ((5.3 == (gestureW - 2.61)) && libreanimatedH);

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  const formatPhoneNumber = (phoneNumber) => {
       let zhubo3 = 4.0;
    let trophy7: Map<any, any> = new Map([[String.fromCharCode(103,117,101,115,115,95,116,95,54,57,0),String.fromCharCode(120,95,50,56,95,114,97,116,105,111,115,0)], [String.fromCharCode(106,109,101,109,115,121,115,95,102,95,50,50,0),String.fromCharCode(98,105,110,116,101,120,116,95,113,95,49,49,0)], [String.fromCharCode(104,95,57,95,100,116,108,115,0),String.fromCharCode(98,111,114,100,101,114,108,101,115,115,95,54,95,51,49,0)]]);
    let androidq: Map<any, any> = new Map([[String.fromCharCode(115,95,49,95,97,108,108,111,119,0),899], [String.fromCharCode(111,95,52,50,95,108,111,110,0),140]]);
    let shielddoneL = 3.0;
    let connectionm = 4;
    let thumbnail5 = String.fromCharCode(100,95,50,48,95,112,114,101,118,105,101,119,0);
    let statisticsinactiveT = String.fromCharCode(110,95,48,95,100,105,109,101,110,115,105,116,111,110,115,0);
    let leftw = 0.0;
    let basketballV = 0.0;
   while (5 > (androidq.size % (Math.max(trophy7.size, 6))) && (trophy7.size % 5) > 2) {
      trophy7.set(`${connectionm}`, thumbnail5.length ^ connectionm);
      break;
   }
       let iconviewergif8 = String.fromCharCode(117,95,53,56,95,101,108,105,109,105,110,97,116,105,111,110,0);
       let tempi = 2.0;
       let footballfieldC = 1.0;
      let cricketE = 8392817 <= iconviewergif8.length;
      do {
          let champions: Map<any, any> = new Map([[String.fromCharCode(100,95,55,52,95,100,101,116,101,99,116,111,114,0),57], [String.fromCharCode(109,95,49,48,48,95,115,117,105,116,101,98,0),898], [String.fromCharCode(100,98,108,105,110,116,95,49,95,53,0),51]]);
         iconviewergif8 = `${champions.size}`;
         if (cricketE) {
            break;
         }
      } while ((iconviewergif8.length > 3) && cricketE);
         iconviewergif8 = `${parseInt(`${tempi}`) % (Math.max(parseInt(`${footballfieldC}`), 6))}`;
      for (let f = 0; f < 1; f++) {
         iconviewergif8 = `${3 | iconviewergif8.length}`;
      }
         iconviewergif8 = `${parseInt(`${tempi}`)}`;
         footballfieldC -= parseFloat(`${parseInt(`${tempi}`) * 3}`);
      while ((1.73 - tempi) >= 3.98 || (1.73 * tempi) >= 3.32) {
          let applicationx: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,112,104,111,116,111,0),889], [String.fromCharCode(116,97,110,103,101,110,116,95,106,95,55,53,0),747], [String.fromCharCode(114,101,110,111,114,109,95,98,95,51,49,0),572]]);
          let telegramI = String.fromCharCode(119,101,108,108,95,111,95,52,54,0);
         tempi += (String.fromCharCode(107,0) == telegramI ? telegramI.length : applicationx.size);
         break;
      }
          let iconpointscoref: Map<any, any> = new Map([[String.fromCharCode(99,108,117,98,95,104,95,54,52,0),true ], [String.fromCharCode(98,95,50,48,95,118,112,97,116,104,0),false ]]);
         tempi /= Math.max(2, 2 ^ parseInt(`${tempi}`));
         iconpointscoref = new Map([[`${iconpointscoref.size}`, 3 | iconpointscoref.size]]);
          let with_amX: Array<any> = [254, 973, 213];
         tempi -= 2 + parseInt(`${tempi}`);
         with_amX = [with_amX.length - with_amX.length];
         tempi -= parseInt(`${tempi}`) >> (Math.min(Math.abs(2), 3));
      statisticsinactiveT = `${parseInt(`${footballfieldC}`) - parseInt(`${tempi}`)}`;
      connectionm |= parseInt(`${zhubo3}`) ^ 3;

    

      trophy7.set(`${shielddoneL}`, connectionm + parseInt(`${shielddoneL}`));
   for (let g = 0; g < 1; g++) {
      thumbnail5 = `${(String.fromCharCode(114,0) == statisticsinactiveT ? statisticsinactiveT.length : parseInt(`${zhubo3}`))}`;
   }
   if (androidq.size < 3) {
      leftw /= Math.max(parseInt(`${shielddoneL}`) << (Math.min(statisticsinactiveT.length, 3)), 3);
   }
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

   if (androidq.get(`${shielddoneL}`) == null) {
      androidq.set(`${zhubo3}`, 1 / (Math.max(7, parseInt(`${zhubo3}`))));
   }
   let release_qcG = androidq.size <= 5396406;
   do {
      androidq = new Map([[`${shielddoneL}`, parseInt(`${shielddoneL}`) % (Math.max(thumbnail5.length, 7))]]);
      if (release_qcG) {
         break;
      }
   } while ((trophy7.size > androidq.size) && release_qcG);
   if (2 > connectionm) {
      connectionm -= thumbnail5.length | parseInt(`${shielddoneL}`);
   }

    

   if (trophy7.size < parseInt(`${zhubo3}`)) {
      trophy7 = new Map([[`${androidq.size}`, statisticsinactiveT.length]]);
   }
      connectionm >>= Math.min(Math.abs(parseInt(`${leftw}`)), 5);
   let iconH = thumbnail5 == String.fromCharCode(102,48,106,57,115,51,106,0);
   do {
      thumbnail5 += `${parseInt(`${zhubo3}`) ^ androidq.size}`;
      if (iconH) {
         break;
      }
   } while (iconH && ((thumbnail5.length << (Math.min(Math.abs(5), 1))) < 3));
    if (!numericPhoneNumber) return '';

   if ((statisticsinactiveT.length & 1) < 4 && (trophy7.size & 1) < 3) {
      statisticsinactiveT += `${statisticsinactiveT.length}`;
   }
   if (!Array.from(androidq.keys()).includes(`${leftw}`)) {
      androidq.set(`${trophy7.size}`, androidq.size - trophy7.size);
   }
   let loadingY = statisticsinactiveT == String.fromCharCode(52,117,54,111,104,117,106,0);
   do {
       let libtobk = 2;
       let circle1 = 5.0;
       let darkB: Map<any, any> = new Map([[String.fromCharCode(108,95,57,49,95,116,105,116,110,116,0),585], [String.fromCharCode(114,101,113,117,101,115,116,95,99,95,53,55,0),87], [String.fromCharCode(106,95,49,53,95,99,101,108,108,0),144]]);
       let greyarrowupY: Array<any> = [String.fromCharCode(112,95,54,48,95,116,114,97,110,115,102,101,114,114,101,100,0), String.fromCharCode(99,116,105,111,110,95,109,95,54,49,0)];
      let control9 = 8337676 >= greyarrowupY.length;
      do {
          let qaagY = 4.0;
          let basketballtrophyH: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,105,110,103,95,114,95,54,56,0),880], [String.fromCharCode(98,95,49,53,95,115,97,102,101,115,116,97,99,107,0),345]]);
          let goallogoE = 4;
          let privacye = 0;
          let adultd: Map<any, any> = new Map([[String.fromCharCode(100,97,112,95,109,95,56,51,0),419], [String.fromCharCode(97,99,101,108,112,95,119,95,50,55,0),450], [String.fromCharCode(100,101,99,111,100,101,114,105,110,105,116,95,97,95,54,0),221]]);
         greyarrowupY = [darkB.size];
         qaagY *= parseFloat(`${3 & basketballtrophyH.size}`);
         basketballtrophyH.set(`${privacye}`, adultd.size >> (Math.min(4, Math.abs(privacye))));
         goallogoE >>= Math.min(2, Math.abs(adultd.size & 2));
         if (control9) {
            break;
         }
      } while (control9 && (Array.from(darkB.keys()).includes(`${greyarrowupY.length}`)));
         darkB.set(`${greyarrowupY.length}`, greyarrowupY.length % 1);
      for (let z = 0; z < 1; z++) {
          let list8: Map<any, any> = new Map([[String.fromCharCode(115,95,56,95,99,111,108,108,97,116,105,110,103,0),755], [String.fromCharCode(109,95,54,49,95,110,116,112,0),879], [String.fromCharCode(118,114,101,103,105,111,110,95,115,95,55,49,0),820]]);
          let borderlessb = 2.0;
          let iconcalendarO = String.fromCharCode(112,97,116,99,104,95,52,95,56,57,0);
         greyarrowupY.push(1);
         list8 = new Map([[`${borderlessb}`, 1 % (Math.max(6, iconcalendarO.length))]]);
         borderlessb /= Math.max(4, parseFloat(`${iconcalendarO.length}`));
      }
      if ((circle1 / 5.0) < 2.73) {
         greyarrowupY.push(parseInt(`${circle1}`) + libtobk);
      }
       let spinner6 = true;
       let blacklistf = false;
       let homeloading1 = false;
      for (let r = 0; r < 1; r++) {
         circle1 *= greyarrowupY.length;
      }
      if ((4.8 * circle1) == 3.62) {
         circle1 += libtobk + 3;
      }
       let desch = String.fromCharCode(115,104,114,105,110,107,95,55,95,54,0);
       let dplus2 = String.fromCharCode(98,95,54,49,95,98,114,111,97,100,99,97,115,116,0);
      if (4 == dplus2.length) {
          let catalogc = String.fromCharCode(119,95,49,49,95,104,113,100,115,112,0);
         dplus2 += "1";
         catalogc += `${catalogc.length >> (Math.min(Math.abs(1), 3))}`;
      }
          let mergerX = String.fromCharCode(112,95,54,57,95,112,114,111,106,101,99,116,105,111,110,0);
          let libavformat3 = String.fromCharCode(107,95,50,51,95,112,107,101,121,0);
         greyarrowupY = [((homeloading1 ? 4 : 2) % (Math.max(greyarrowupY.length, 10)))];
         mergerX = `${libavformat3.length}`;
         libavformat3 += `${libavformat3.length / 1}`;
         greyarrowupY = [((spinner6 ? 1 : 3) >> (Math.min(5, Math.abs((homeloading1 ? 2 : 1)))))];
      statisticsinactiveT += `${libtobk}`;
      if (loadingY) {
         break;
      }
   } while ((!statisticsinactiveT.endsWith(`${androidq.size}`)) && loadingY);

    const countryCode = numericPhoneNumber.substring(0, 3); 

   if (2.22 > (shielddoneL - connectionm)) {
      shielddoneL *= parseFloat(`${trophy7.size}`);
   }
   while (4 < (statisticsinactiveT.length / 3)) {
      trophy7 = new Map([[`${androidq.size}`, androidq.size >> (Math.min(4, Math.abs(connectionm)))]]);
      break;
   }
   for (let v = 0; v < 1; v++) {
      statisticsinactiveT += `${statisticsinactiveT.length}`;
   }
    const firstPart = numericPhoneNumber.substring(3, 6);

      trophy7 = new Map([[`${zhubo3}`, parseInt(`${zhubo3}`)]]);
   if ((2 | androidq.size) == 5 || 3.49 == (zhubo3 * 1.62)) {
       let contextR = false;
       let icon4 = String.fromCharCode(108,111,99,111,95,103,95,53,57,0);
       let utilsw = String.fromCharCode(105,95,55,55,95,99,111,112,121,116,111,0);
         icon4 += "2";
      for (let n = 0; n < 2; n++) {
          let phoneshareR = String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,121,95,50,50,0);
          let register_g1 = true;
         utilsw = `${icon4.length}`;
         phoneshareR = `${3 << (Math.min(4, phoneshareR.length))}`;
         register_g1 = phoneshareR.length == 54;
      }
      let internetr = 5702367 >= icon4.length;
      do {
          let arrowrightwithtailz = String.fromCharCode(103,95,50,95,112,111,115,115,105,98,108,121,0);
          let iconviewergifp = false;
          let temperaturef = 2.0;
          let temperatureD = 5;
         icon4 += `${utilsw.length * 1}`;
         arrowrightwithtailz = "1";
         iconviewergifp = arrowrightwithtailz.length > 66 || iconviewergifp;
         temperaturef -= temperatureD;
         temperatureD >>= Math.min(Math.abs(temperatureD - arrowrightwithtailz.length), 1);
         if (internetr) {
            break;
         }
      } while (internetr && (!icon4.endsWith(utilsw)));
      for (let v = 0; v < 1; v++) {
         icon4 += `${(utilsw == String.fromCharCode(49,0) ? (contextR ? 1 : 5) : utilsw.length)}`;
      }
         icon4 = `${((contextR ? 2 : 4) / (Math.max(icon4.length, 10)))}`;
      let renderk = contextR ? !contextR : contextR;
      do {
          let libreactnativeblobq: Array<any> = [62, 100, 129];
          let libfb6 = String.fromCharCode(117,109,102,97,118,114,95,110,95,55,54,0);
          let holderu: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,105,110,103,95,122,95,56,0),626], [String.fromCharCode(97,116,116,114,95,102,95,55,0),762]]);
          let predictionbannersharedU: Map<any, any> = new Map([[String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,53,95,51,55,0),false ], [String.fromCharCode(100,97,116,101,116,105,109,101,95,117,95,55,0),false ]]);
          let nalytics6 = 3;
         contextR = 77 > libreactnativeblobq.length;
         libreactnativeblobq = [3];
         libfb6 = "1";
         holderu.set(libfb6, nalytics6);
         predictionbannersharedU.set(libfb6, 3 / (Math.max(2, libfb6.length)));
         nalytics6 |= 1;
         if (renderk) {
            break;
         }
      } while (renderk && (5 <= utilsw.length || contextR));
      for (let i = 0; i < 3; i++) {
          let x_countr: Array<any> = [198, 703];
          let iconnewsshare2: Map<any, any> = new Map([[String.fromCharCode(110,95,49,95,100,101,108,97,0),String.fromCharCode(103,95,53,52,95,98,114,107,116,105,109,101,103,109,0)], [String.fromCharCode(120,95,56,53,95,114,97,100,98,0),String.fromCharCode(117,110,112,111,105,115,111,110,95,109,95,56,49,0)]]);
          let canvasR = 4.0;
          let controls4 = String.fromCharCode(100,95,51,57,95,115,112,108,105,116,0);
         icon4 += `${parseInt(`${canvasR}`)}`;
         x_countr = [3 ^ iconnewsshare2.size];
         iconnewsshare2.set(controls4, x_countr.length / (Math.max(controls4.length, 10)));
         canvasR /= Math.max(4, 3 * iconnewsshare2.size);
      }
      for (let u = 0; u < 3; u++) {
         icon4 = `${((contextR ? 4 : 4) << (Math.min(icon4.length, 5)))}`;
      }
      for (let c = 0; c < 3; c++) {
         utilsw += `${(icon4.length << (Math.min(1, Math.abs((contextR ? 4 : 5)))))}`;
      }
      androidq = new Map([[utilsw, icon4.length / 2]]);
   }
      zhubo3 += parseInt(`${shielddoneL}`);
    const secondPart = numericPhoneNumber.substring(6);

      basketballV += parseInt(`${shielddoneL}`);
      connectionm *= trophy7.size;
   if (thumbnail5.length == 4) {
       let foundN = String.fromCharCode(114,95,49,48,48,95,101,112,115,105,108,111,110,0);
       let sportsF = String.fromCharCode(111,95,55,51,95,100,109,105,120,0);
       let alertm = String.fromCharCode(105,110,105,116,95,98,95,49,48,0);
       let sansh = 3;
       let codegen0 = String.fromCharCode(97,118,105,111,95,56,95,56,51,0);
         codegen0 += `${1 >> (Math.min(3, sportsF.length))}`;
      while ((sportsF.length | sansh) <= 3) {
         sansh -= foundN.length & sansh;
         break;
      }
      for (let k = 0; k < 2; k++) {
         alertm += `${sansh ^ 3}`;
      }
          let videovarO = String.fromCharCode(108,105,115,116,101,110,105,110,103,95,113,95,57,54,0);
          let confirmations = 5.0;
          let pointB = String.fromCharCode(99,111,108,108,97,112,115,101,100,95,109,95,51,52,0);
         sportsF = `${pointB.length}`;
         videovarO = `${videovarO.length}`;
         confirmations *= parseFloat(`${videovarO.length}`);
         pointB += `${parseInt(`${confirmations}`) + videovarO.length}`;
      while ((2 >> (Math.min(2, Math.abs(sansh)))) >= 4 || 2 >= (foundN.length >> (Math.min(1, Math.abs(sansh))))) {
          let bridgeB: Map<any, any> = new Map([[String.fromCharCode(116,95,53,53,95,118,102,108,97,103,0),String.fromCharCode(98,95,52,53,95,115,117,98,99,111,110,116,101,110,116,115,0)], [String.fromCharCode(112,95,57,48,95,98,108,97,99,107,108,105,115,116,0),String.fromCharCode(122,95,57,49,95,114,101,99,111,103,110,105,116,105,111,110,0)], [String.fromCharCode(118,95,49,53,95,114,101,105,110,115,101,114,116,0),String.fromCharCode(117,95,53,95,112,114,101,100,120,108,0)]]);
          let blackM = true;
         foundN += `${sportsF.length}`;
         bridgeB.set(`${bridgeB.size}`, 3);
         blackM = (bridgeB.size & bridgeB.size) <= 78;
         break;
      }
         alertm = `${(String.fromCharCode(122,0) == codegen0 ? codegen0.length : alertm.length)}`;
      if (5 >= alertm.length) {
         alertm += `${alertm.length}`;
      }
         sportsF += `${codegen0.length}`;
      let bgvipxvodp = String.fromCharCode(57,55,53,120,108,121,99,0) == alertm;
      do {
          let iconcalendarN = true;
          let iconwatch3 = String.fromCharCode(114,95,51,57,95,112,117,108,108,113,117,111,116,101,0);
          let crownI = 5.0;
         alertm = `${parseInt(`${crownI}`) - 1}`;
         iconcalendarN = !iconcalendarN;
         iconwatch3 = `${((iconcalendarN ? 3 : 4))}`;
         crownI *= (parseFloat(`${(iconcalendarN ? 3 : 2) | iconwatch3.length}`));
         if (bgvipxvodp) {
            break;
         }
      } while (bgvipxvodp && (4 <= sportsF.length));
         alertm += `${(codegen0 == String.fromCharCode(108,0) ? sansh : codegen0.length)}`;
      while ((4 << (Math.min(4, alertm.length))) <= 1 || 5 <= (4 << (Math.min(4, Math.abs(sansh))))) {
         sansh ^= sportsF.length;
         break;
      }
      while (foundN.endsWith(codegen0)) {
          let types2: Array<any> = [String.fromCharCode(118,95,50,56,95,112,115,110,114,104,118,115,0), String.fromCharCode(106,95,50,50,95,99,114,97,115,104,108,121,116,105,99,115,0), String.fromCharCode(115,97,109,112,108,101,114,95,104,95,54,54,0)];
          let matchdetailbgA = 1.0;
          let searchW = 5.0;
         codegen0 = `${alertm.length}`;
         types2 = [3 + parseInt(`${searchW}`)];
         matchdetailbgA /= Math.max(3, parseFloat(`${types2.length << (Math.min(2, Math.abs(parseInt(`${matchdetailbgA}`))))}`));
         searchW -= 1 + parseInt(`${searchW}`);
         break;
      }
         sansh *= foundN.length ^ codegen0.length;
      for (let z = 0; z < 1; z++) {
          let mapbufferw = String.fromCharCode(102,114,111,109,98,121,116,101,115,95,53,95,49,0);
          let ball3 = 1.0;
          let bingU = String.fromCharCode(109,95,51,50,95,107,105,99,107,101,100,0);
          let moony = String.fromCharCode(112,116,104,114,101,97,100,95,107,95,55,55,0);
          let verticalB = String.fromCharCode(100,110,115,110,97,109,101,95,113,95,55,0);
         alertm = "2";
         mapbufferw = "2";
         ball3 /= Math.max(2, parseFloat(`${moony.length % 1}`));
         bingU = `${verticalB.length}`;
         moony += `${verticalB.length | moony.length}`;
      }
         sansh %= Math.max(5, sansh + 1);
      thumbnail5 += `${(String.fromCharCode(117,0) == sportsF ? connectionm : sportsF.length)}`;
   }

    const formattedNumber = `+${countryCode} ${firstPart} ${secondPart}`;

      shielddoneL *= parseFloat(`${parseInt(`${zhubo3}`) & 1}`);
       let yellowanimationlivej = 0.0;
      let dpluse = 7863728.0 >= yellowanimationlivej;
      do {
          let libflipperI = 5.0;
         yellowanimationlivej /= Math.max(5, parseFloat(`${parseInt(`${libflipperI}`) >> (Math.min(2, Math.abs(parseInt(`${yellowanimationlivej}`))))}`));
         if (dpluse) {
            break;
         }
      } while ((3.87 <= (yellowanimationlivej - 1)) && dpluse);
      while ((yellowanimationlivej - 1.78) < 2.1 || (1.78 - yellowanimationlivej) < 3.98) {
         yellowanimationlivej /= Math.max(5, parseFloat(`${3}`));
         break;
      }
      while (yellowanimationlivej <= yellowanimationlivej) {
          let minivodo = 1;
         yellowanimationlivej += parseFloat(`${parseInt(`${yellowanimationlivej}`)}`);
         minivodo %= Math.max(5, minivodo ^ minivodo);
         break;
      }
      shielddoneL -= parseFloat(`${2}`);
      statisticsinactiveT = `${1 >> (Math.min(4, Math.abs(parseInt(`${basketballV}`))))}`;
    return formattedNumber;
  };

  
  const resendOTP = () => {
       let anner3 = String.fromCharCode(119,95,56,51,95,97,116,116,97,99,104,0);
    let searchM = String.fromCharCode(111,95,50,55,95,102,112,117,116,115,0);
    let libfbjni9 = String.fromCharCode(113,95,53,57,95,119,97,116,99,104,0);
    let umengn = 0;
    let shootP = 0.0;
    let commentf = 0;
    let singlea: Array<any> = [238, 60, 460];
    let exampleimageP = true;
    let renew6 = 1;
    let stylesj = true;
    let agreemento = 5.0;
    let klevinr = 3.0;
   if (!exampleimageP) {
      exampleimageP = String.fromCharCode(87,0) == searchM;
   }
   for (let d = 0; d < 3; d++) {
      renew6 &= renew6;
   }
   if (!anner3.startsWith(`${exampleimageP}`)) {
      anner3 = `${parseInt(`${shootP}`)}`;
   }
   for (let v = 0; v < 1; v++) {
      exampleimageP = commentf > 82 && libfbjni9 == String.fromCharCode(95,0);
   }

    setResend(false);

      libfbjni9 += `${anner3.length + 1}`;
       let templateprocessorL = 1;
         templateprocessorL |= 3 * templateprocessorL;
         templateprocessorL ^= templateprocessorL;
      while ((1 - templateprocessorL) <= 2) {
          let whiteanimationliveN = true;
         templateprocessorL <<= Math.min(Math.abs(1 - templateprocessorL), 4);
         whiteanimationliveN = !whiteanimationliveN;
         break;
      }
      libfbjni9 += "3";
       let showlessB = false;
      for (let m = 0; m < 3; m++) {
         showlessB = !showlessB || !showlessB;
      }
          let mbjscommonV: Array<any> = [111, 418, 751];
          let countdownW = String.fromCharCode(118,95,54,52,95,98,117,116,116,101,114,102,108,105,101,115,0);
         showlessB = !showlessB;
         mbjscommonV.push(countdownW.length & mbjscommonV.length);
         countdownW += "3";
         showlessB = !showlessB;
      stylesj = !stylesj;
      commentf *= 1;

    mayi_Injury.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

   let catagory9 = 6081719 >= singlea.length;
   do {
      singlea = [searchM.length];
      if (catagory9) {
         break;
      }
   } while ((singlea.includes(umengn)) && catagory9);
   let handlerL = exampleimageP ? !exampleimageP : exampleimageP;
   do {
      exampleimageP = !exampleimageP;
      if (handlerL) {
         break;
      }
   } while (handlerL && (!exampleimageP && 4 > (renew6 - 4)));
   for (let c = 0; c < 3; c++) {
       let linew = String.fromCharCode(106,95,56,49,95,102,108,105,112,112,101,100,0);
      if (!linew.includes(linew)) {
          let libreactnativeblob1 = 4.0;
          let audiencea = 1.0;
         linew += "1";
         libreactnativeblob1 /= Math.max(2, 2);
         audiencea += parseFloat(`${1}`);
      }
      let uploadH = 5961202 <= linew.length;
      do {
          let footballD = 4.0;
          let frame_h1U: Map<any, any> = new Map([[String.fromCharCode(104,95,55,55,95,114,101,97,100,98,121,116,101,0),558], [String.fromCharCode(112,114,111,109,112,116,95,51,95,50,57,0),197], [String.fromCharCode(120,95,54,54,95,112,114,111,109,111,116,101,0),746]]);
          let node5: Map<any, any> = new Map([[String.fromCharCode(111,95,49,50,95,99,111,101,102,102,115,112,0),false ], [String.fromCharCode(119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,95,112,95,49,57,0),true ], [String.fromCharCode(101,102,102,101,99,116,95,101,95,49,51,0),true ]]);
          let icondefaultthumbnaill = String.fromCharCode(109,95,50,53,95,112,105,110,110,101,114,0);
         linew += `${frame_h1U.size}`;
         footballD -= (String.fromCharCode(48,0) == icondefaultthumbnaill ? icondefaultthumbnaill.length : node5.size);
         frame_h1U = new Map([[`${node5.size}`, parseInt(`${footballD}`) - node5.size]]);
         if (uploadH) {
            break;
         }
      } while ((3 > linew.length) && uploadH);
         linew = `${(String.fromCharCode(116,0) == linew ? linew.length : linew.length)}`;
      stylesj = !exampleimageP;
   }
      searchM += `${umengn >> (Math.min(2, Math.abs(3)))}`;
      setOtpTextInput([]);

   let downloadingP = 4935195.0 <= shootP;
   do {
       let reddownarrowX = 0.0;
      while (2.83 > reddownarrowX) {
         reddownarrowX -= 3;
         break;
      }
      while ((reddownarrowX - reddownarrowX) < 5.20) {
          let combineda = false;
          let humidityY = 2;
         reddownarrowX -= humidityY;
         combineda = combineda && combineda;
         humidityY += ((combineda ? 3 : 2) | (combineda ? 2 : 4));
         break;
      }
      for (let w = 0; w < 1; w++) {
          let libreactnativejniB: Array<any> = [513, 213];
          let iconclosewhiteA = String.fromCharCode(99,95,55,52,95,111,110,110,101,99,116,105,111,110,0);
          let favicony: Map<any, any> = new Map([[String.fromCharCode(116,97,100,100,95,116,95,50,53,0),152], [String.fromCharCode(103,95,50,51,95,109,105,110,111,114,0),951]]);
          let securityF = 5;
         reddownarrowX *= iconclosewhiteA.length;
         libreactnativejniB.push(2);
         iconclosewhiteA += `${libreactnativejniB.length}`;
         favicony = new Map([[`${favicony.size}`, securityF]]);
         securityF /= Math.max(2 | securityF, 2);
      }
      shootP -= commentf;
      if (downloadingP) {
         break;
      }
   } while ((1 <= (anner3.length * parseInt(`${shootP}`))) && downloadingP);
   for (let c = 0; c < 3; c++) {
       let watchm = 3.0;
       let successm = 1.0;
       let sentrys = String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,53,95,50,48,0);
      while (2.3 <= (2 * watchm)) {
         successm += parseFloat(`${2 * parseInt(`${watchm}`)}`);
         break;
      }
         watchm -= parseFloat(`${sentrys.length >> (Math.min(2, Math.abs(parseInt(`${successm}`))))}`);
      for (let v = 0; v < 3; v++) {
          let notificationq = true;
         sentrys = "3";
         notificationq = (!notificationq ? !notificationq : !notificationq);
      }
         sentrys += `${parseInt(`${watchm}`)}`;
      let iconviewergifi = String.fromCharCode(104,48,119,98,116,101,107,0) == sentrys;
      do {
         sentrys = `${sentrys.length + 1}`;
         if (iconviewergifi) {
            break;
         }
      } while (((successm * 5.87) < 3.64 || 4 < (3 | sentrys.length)) && iconviewergifi);
      while ((sentrys.length + parseInt(`${successm}`)) > 1 || 5.35 > (parseFloat(`${sentrys.length}`) + successm)) {
         successm -= parseFloat(`${2}`);
         break;
      }
          let profileactiveT = String.fromCharCode(119,95,49,53,95,111,115,99,105,108,108,111,115,99,111,112,101,0);
          let green3 = 5;
         watchm += parseFloat(`${green3 / (Math.max(10, parseInt(`${watchm}`)))}`);
         profileactiveT += `${profileactiveT.length & 2}`;
         green3 -= 2;
      if (5.63 == (4.42 / (Math.max(6, successm))) && 4.71 == (watchm - 4.42)) {
         successm += parseFloat(`${1}`);
      }
         watchm *= parseFloat(`${2 / (Math.max(8, sentrys.length))}`);
      searchM = `${(sentrys == String.fromCharCode(108,0) ? parseInt(`${watchm}`) : sentrys.length)}`;
   }
   for (let i = 0; i < 3; i++) {
      renew6 |= commentf + 2;
   }
   while (!exampleimageP) {
       let analyticss = String.fromCharCode(114,101,100,95,98,95,55,50,0);
         analyticss += `${analyticss.length % (Math.max(analyticss.length, 5))}`;
      while (4 <= analyticss.length) {
          let headerT = String.fromCharCode(118,95,49,48,48,95,99,111,110,100,117,99,116,111,114,0);
          let sellmathbackgroundo: Map<any, any> = new Map([[String.fromCharCode(111,117,116,111,117,116,95,56,95,55,0),String.fromCharCode(109,101,109,110,95,116,95,52,57,0)], [String.fromCharCode(115,117,98,101,120,112,114,95,120,95,50,56,0),String.fromCharCode(100,117,112,108,105,99,97,116,101,100,95,53,95,53,54,0)]]);
          let frame_9g: Map<any, any> = new Map([[String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,52,95,53,51,0),false ], [String.fromCharCode(115,97,118,101,95,117,95,57,50,0),false ], [String.fromCharCode(104,95,51,95,99,117,109,117,108,97,116,105,118,101,0),false ]]);
          let predictionactiveR: Array<any> = [614, 65];
          let iconarrowrightwhitez = String.fromCharCode(101,114,97,115,101,95,106,95,49,57,0);
         analyticss = `${analyticss.length & sellmathbackgroundo.size}`;
         headerT += `${predictionactiveR.length / (Math.max(headerT.length, 10))}`;
         sellmathbackgroundo = new Map([[headerT, headerT.length / 2]]);
         frame_9g = new Map([[`${predictionactiveR.length}`, 3 * predictionactiveR.length]]);
         iconarrowrightwhitez += `${(String.fromCharCode(95,0) == headerT ? headerT.length : predictionactiveR.length)}`;
         break;
      }
      let iconlogoutE = analyticss == String.fromCharCode(112,101,98,55,0);
      do {
          let fieldm = false;
          let rootX = 4.0;
          let mbbannerl = false;
          let commonO = true;
          let iconlogoutk = String.fromCharCode(104,95,50,53,95,111,117,116,108,105,110,107,0);
         analyticss += `${(1 & (commonO ? 4 : 3))}`;
         fieldm = !fieldm;
         rootX *= (parseFloat(`${String.fromCharCode(97,0) == iconlogoutk ? iconlogoutk.length : parseInt(`${rootX}`)}`));
         mbbannerl = iconlogoutk.length < 25 || !fieldm;
         commonO = !fieldm;
         if (iconlogoutE) {
            break;
         }
      } while (iconlogoutE && (1 <= analyticss.length));
      exampleimageP = 66 < searchM.length && renew6 < 66;
      break;
   }
      setOtp('      ');

   if (shootP > 1.28) {
      shootP -= singlea.length;
   }
      commentf &= 2;
       let vipsportu: Map<any, any> = new Map([[String.fromCharCode(100,95,57,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0),495], [String.fromCharCode(103,111,101,114,108,105,95,112,95,57,53,0),996], [String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,101,95,55,52,0),462]]);
          let lighti = true;
          let short_8q: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,105,120,95,106,95,49,53,0),661], [String.fromCharCode(97,110,116,105,99,111,108,108,97,112,115,101,95,53,95,54,50,0),479], [String.fromCharCode(111,95,52,51,95,102,117,110,99,116,105,111,110,0),122]]);
          let refreshborderlesst = String.fromCharCode(122,95,52,51,95,112,111,108,113,97,0);
         vipsportu.set(`${short_8q.size}`, vipsportu.size);
         lighti = !lighti;
         short_8q = new Map([[refreshborderlesst, (1 ^ (lighti ? 5 : 4))]]);
         refreshborderlesst = `${((lighti ? 4 : 2) * refreshborderlesst.length)}`;
         vipsportu = new Map([[`${vipsportu.size}`, vipsportu.size & 3]]);
         vipsportu = new Map([[`${vipsportu.size}`, vipsportu.size]]);
      stylesj = 36 >= libfbjni9.length;
   let mbjscommona = stylesj ? !stylesj : stylesj;
   do {
      stylesj = searchM.endsWith(`${umengn}`);
      if (mbjscommona) {
         break;
      }
   } while (mbjscommona && (stylesj));
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
      result = await mayi_Injury.signinupUser({
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

    const user = mayi_Gift.fromJson(resultData);

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

      
      mayi_push.userCenterLoginSuccessTimesAnalytics();
      mayi_ForegroundLibfabricjni.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        mayi_push.userCenterVipLoginSuccessTimesAnalytics();
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
            source={require('@static/images/invite/assistTextinputHook.png')}
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
