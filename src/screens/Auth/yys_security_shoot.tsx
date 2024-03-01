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
import yys_event_common from '../../../Umeng/yys_event_common';
import { yys_GesturesConst } from '@api';
import { useSelector } from '@hooks/yys_frame';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import yys_Filled from '../../../AppsFlyer/yys_analytic';


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
       let modulem = String.fromCharCode(116,114,101,110,100,108,105,110,101,95,119,95,49,54,0);
    let signinups: Array<any> = [832, 769];
    let auto_hq = 4.0;
    let detailsX = String.fromCharCode(97,95,53,51,95,111,112,116,103,114,111,117,112,0);
    let downp: Array<any> = [11, 940];
    let download7 = 5.0;
    let historyb = String.fromCharCode(109,95,52,95,102,108,117,115,104,105,110,103,0);
    let binddatasK = String.fromCharCode(105,95,50,95,97,108,112,104,97,0);
    let attributedstringH = String.fromCharCode(101,95,50,57,95,114,101,110,100,101,114,0);
    let tooltipsh: Array<any> = [String.fromCharCode(120,95,52,52,95,100,105,102,102,101,114,101,110,99,101,0), String.fromCharCode(110,95,51,55,95,101,120,112,114,101,115,115,105,111,110,0)];
    let inviteZ = 2.0;
    let mergerv = 2.0;
    let plusK = 2.0;
    let carouselH = 4;
    let greenU: Array<any> = [390, 17, 2];
      binddatasK = `${detailsX.length % (Math.max(7, parseInt(`${inviteZ}`)))}`;
      tooltipsh.push(2);
      historyb = `${(historyb == String.fromCharCode(104,0) ? historyb.length : tooltipsh.length)}`;
      download7 += binddatasK.length;
   let projects = inviteZ >= 5254078.0;
   do {
       let leakcheckerU = String.fromCharCode(100,118,97,117,100,105,111,95,118,95,56,52,0);
       let navigationw = false;
       let downloadingV: Array<any> = [913, 447];
       let searchbarT = String.fromCharCode(107,95,55,50,95,100,101,103,114,101,101,115,0);
       let libavformat1: Map<any, any> = new Map([[String.fromCharCode(112,104,111,110,101,115,95,50,95,49,49,0),921], [String.fromCharCode(112,111,115,116,102,105,120,95,55,95,50,49,0),428], [String.fromCharCode(110,95,53,54,95,105,115,112,97,99,107,101,100,0),847]]);
      while (!leakcheckerU.includes(`${navigationw}`)) {
          let foregroundM = String.fromCharCode(109,95,50,53,95,115,116,114,117,99,116,117,114,101,115,0);
          let fastforward2 = String.fromCharCode(109,95,51,48,95,97,115,99,0);
         navigationw = downloadingV.length < 79 || String.fromCharCode(82,0) == fastforward2;
         foregroundM = `${foregroundM.length}`;
         fastforward2 = "2";
         break;
      }
         navigationw = (leakcheckerU.length ^ libavformat1.size) < 51;
      for (let a = 0; a < 2; a++) {
         searchbarT += `${((navigationw ? 5 : 2) << (Math.min(Math.abs(3), 3)))}`;
      }
      let minimizeq = downloadingV.length <= 8871272;
      do {
         downloadingV.push(downloadingV.length);
         if (minimizeq) {
            break;
         }
      } while (((3 * searchbarT.length) < 2) && minimizeq);
      if (4 < (downloadingV.length | 2) && (leakcheckerU.length | 2) < 4) {
          let backgroundM: Map<any, any> = new Map([[String.fromCharCode(117,116,102,108,101,110,95,56,95,50,54,0),427], [String.fromCharCode(114,97,100,102,95,51,95,54,56,0),38]]);
          let ksadT = String.fromCharCode(106,95,49,56,95,111,117,116,103,111,105,110,103,0);
          let canvasj = 0.0;
          let friendsB: Array<any> = [171, 247];
          let targetT = String.fromCharCode(97,95,57,48,95,109,97,105,110,115,116,97,103,101,0);
         leakcheckerU += `${parseInt(`${canvasj}`) >> (Math.min(ksadT.length, 5))}`;
         backgroundM = new Map([[`${backgroundM.size}`, targetT.length]]);
         ksadT = `${friendsB.length >> (Math.min(Math.abs(1), 4))}`;
         canvasj += backgroundM.size << (Math.min(Math.abs(3), 5));
         friendsB = [2 & backgroundM.size];
         targetT = `${friendsB.length + 2}`;
      }
      if (!navigationw) {
         searchbarT = `${leakcheckerU.length}`;
      }
       let circlee = 0.0;
       let templateprocessor2 = 5.0;
          let classesY: Map<any, any> = new Map([[String.fromCharCode(109,95,57,53,95,102,114,97,109,101,112,97,99,107,0),1], [String.fromCharCode(114,101,115,101,101,107,95,111,95,55,0),91]]);
          let philippines4 = 1.0;
         navigationw = philippines4 > 92.11;
         classesY.set(`${classesY.size}`, 3 * classesY.size);
         philippines4 /= Math.max(1, 4);
      let resend9 = libavformat1.size <= 6987620;
      do {
         libavformat1.set(`${navigationw}`, ((navigationw ? 4 : 1) + downloadingV.length));
         if (resend9) {
            break;
         }
      } while (resend9 && (2 >= downloadingV.length));
          let borderlessQ = 1.0;
          let acceptedm = String.fromCharCode(99,95,49,52,95,112,114,101,118,101,110,116,0);
          let roundy = String.fromCharCode(114,95,52,55,95,102,114,97,103,0);
         libavformat1 = new Map([[`${downloadingV.length}`, 2]]);
         borderlessQ /= Math.max(5, acceptedm.length);
         acceptedm = `${(acceptedm == String.fromCharCode(111,0) ? acceptedm.length : roundy.length)}`;
         roundy += `${acceptedm.length}`;
          let spinner2 = String.fromCharCode(111,100,97,116,97,95,104,95,56,50,0);
          let gradlewv = String.fromCharCode(117,97,100,100,95,52,95,53,48,0);
         circlee += parseFloat(`${libavformat1.size >> (Math.min(searchbarT.length, 3))}`);
         spinner2 += `${(String.fromCharCode(95,0) == gradlewv ? spinner2.length : gradlewv.length)}`;
          let nalyticsg: Array<any> = [248, 97];
          let spec4 = 0;
          let darkD = 3.0;
         downloadingV = [libavformat1.size];
         nalyticsg.push(spec4);
         spec4 += 1 % (Math.max(7, parseInt(`${darkD}`)));
         darkD -= 1;
      if ((2.56 + templateprocessor2) > 1.41 || 3 > (searchbarT.length + parseInt(`${templateprocessor2}`))) {
         searchbarT = `${3 - parseInt(`${circlee}`)}`;
      }
          let invitev: Map<any, any> = new Map([[String.fromCharCode(106,95,54,50,95,114,101,99,104,101,99,107,0),false ], [String.fromCharCode(97,95,55,48,95,99,111,111,114,100,105,110,97,116,105,111,110,0),true ]]);
         leakcheckerU += `${libavformat1.size << (Math.min(5, Math.abs(parseInt(`${templateprocessor2}`))))}`;
         invitev.set(`${invitev.size}`, invitev.size);
          let backu = 0.0;
          let tail1 = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,95,97,95,51,57,0);
          let orientationC = 0.0;
         libavformat1.set(tail1, (String.fromCharCode(56,0) == tail1 ? tail1.length : parseInt(`${backu}`)));
         backu += 2;
      inviteZ += parseFloat(`${historyb.length}`);
      if (projects) {
         break;
      }
   } while (projects && (3 < (downp.length / (Math.max(2, 10)))));
       let pausep = String.fromCharCode(115,95,51,54,95,111,98,106,101,99,116,0);
         pausep = `${pausep.length | pausep.length}`;
       let libtanS: Map<any, any> = new Map([[String.fromCharCode(109,95,51,95,104,101,105,103,104,116,115,0),136], [String.fromCharCode(109,95,52,95,115,104,97,114,97,98,108,101,0),946], [String.fromCharCode(102,95,55,52,95,115,117,105,116,101,0),322]]);
      if (4 >= (3 & pausep.length) && (3 & pausep.length) >= 3) {
         pausep = `${pausep.length | 1}`;
      }
      downp = [2];
   if ((inviteZ / 1.72) < 1.40 || (inviteZ / (Math.max(1.72, 9))) < 4.95) {
      inviteZ /= Math.max(parseFloat(`${parseInt(`${download7}`) % (Math.max(2, parseInt(`${auto_hq}`)))}`), 5);
   }
   for (let j = 0; j < 3; j++) {
      modulem = `${signinups.length}`;
   }
      modulem += `${historyb.length}`;
   if ((downp.length >> (Math.min(Math.abs(3), 1))) == 3) {
       let routerb = String.fromCharCode(113,95,55,50,95,99,104,97,114,115,101,116,0);
       let action5: Array<any> = [738, 598];
       let rewind7 = 3.0;
       let modityY: Array<any> = [858, 79, 158];
       let weiboK = 2.0;
      while (2.41 <= weiboK) {
         rewind7 -= parseFloat(`${action5.length >> (Math.min(2, modityY.length))}`);
         break;
      }
         routerb = `${(String.fromCharCode(95,0) == routerb ? routerb.length : parseInt(`${weiboK}`))}`;
      let fileg = 4932607 <= action5.length;
      do {
         action5 = [3];
         if (fileg) {
            break;
         }
      } while (fileg && (3 == (action5.length >> (Math.min(Math.abs(1), 3))) && 3 == (action5.length + 1)));
          let bdxadsdkK = String.fromCharCode(104,95,56,95,114,101,118,111,107,101,100,0);
          let overlayC = 3.0;
          let statsF: Map<any, any> = new Map([[String.fromCharCode(110,95,51,50,95,99,111,112,121,97,100,100,0),false ], [String.fromCharCode(116,114,97,107,95,122,95,52,53,0),false ]]);
         routerb += `${statsF.size}`;
         bdxadsdkK = "3";
         overlayC *= parseFloat(`${bdxadsdkK.length * 1}`);
         statsF = new Map([[bdxadsdkK, 3 % (Math.max(8, bdxadsdkK.length))]]);
         modityY.push(modityY.length << (Math.min(4, Math.abs(parseInt(`${rewind7}`)))));
         weiboK -= parseFloat(`${2}`);
       let actionsI: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,48,95,97,118,115,116,114,105,110,103,0),true ], [String.fromCharCode(116,97,112,112,105,110,103,95,97,95,56,49,0),true ]]);
         weiboK += parseFloat(`${parseInt(`${rewind7}`) >> (Math.min(routerb.length, 2))}`);
          let hiadJ = 3.0;
         action5.push(parseInt(`${weiboK}`));
         hiadJ += parseInt(`${hiadJ}`) << (Math.min(5, Math.abs(3)));
      let valuesD = 6665532.0 <= weiboK;
      do {
          let sharedj = 4;
          let awayu = String.fromCharCode(98,95,52,50,95,118,97,114,115,0);
          let kickh = false;
          let selectedM = 4;
          let singlel = 4.0;
         weiboK -= parseFloat(`${modityY.length % 3}`);
         sharedj <<= Math.min(3, Math.abs(selectedM >> (Math.min(1, Math.abs(3)))));
         awayu += `${parseInt(`${singlel}`) >> (Math.min(4, Math.abs(1)))}`;
         kickh = awayu.length <= 4;
         selectedM &= selectedM;
         singlel += parseFloat(`${awayu.length % (Math.max(3, 10))}`);
         if (valuesD) {
            break;
         }
      } while (((weiboK / 4.38) <= 3.55) && valuesD);
      let lnews_ = modityY.length <= 5510802;
      do {
         modityY.push(parseInt(`${rewind7}`) | action5.length);
         if (lnews_) {
            break;
         }
      } while (lnews_ && (3 >= (action5.length + modityY.length) || 1 >= (3 + modityY.length)));
      while (parseFloat(`${routerb.length}`) == rewind7) {
         routerb += `${parseInt(`${weiboK}`) ^ 3}`;
         break;
      }
         rewind7 /= Math.max(3, parseFloat(`${actionsI.size % 2}`));
       let modityu: Map<any, any> = new Map([[String.fromCharCode(107,95,57,54,95,99,110,116,0),334], [String.fromCharCode(117,110,116,114,97,99,107,95,101,95,55,0),874], [String.fromCharCode(97,117,116,111,112,108,97,121,95,115,95,55,56,0),824]]);
       let confirmation6: Map<any, any> = new Map([[String.fromCharCode(116,105,116,108,101,95,52,95,49,51,0),134], [String.fromCharCode(117,95,49,53,95,100,101,115,99,114,105,112,116,105,111,110,115,0),278]]);
      if ((modityY.length << (Math.min(Math.abs(1), 1))) < 4 && 4 < (action5.length << (Math.min(Math.abs(1), 5)))) {
         action5.push(actionsI.size ^ confirmation6.size);
      }
      tooltipsh = [2 << (Math.min(Math.abs(parseInt(`${mergerv}`)), 3))];
   }
      plusK += signinups.length;
   while (!binddatasK.startsWith(`${downp.length}`)) {
      downp = [3];
      break;
   }
   for (let t = 0; t < 1; t++) {
      binddatasK += `${(attributedstringH == String.fromCharCode(119,0) ? tooltipsh.length : attributedstringH.length)}`;
   }
       let starh = 0;
       let playercommonM = 1;
         starh -= starh * 3;
         playercommonM &= 3;
      auto_hq *= binddatasK.length * parseInt(`${download7}`);
   while (!attributedstringH.endsWith(`${signinups.length}`)) {
       let yingy = String.fromCharCode(107,95,55,49,95,112,117,114,103,101,0);
         yingy = `${1 - yingy.length}`;
      if (2 < yingy.length) {
         yingy += "2";
      }
         yingy = `${yingy.length - yingy.length}`;
      signinups = [2];
      break;
   }
      download7 *= signinups.length;
   let securityw = auto_hq <= 6771916.0;
   do {
      auto_hq *= parseInt(`${auto_hq}`) - 1;
      if (securityw) {
         break;
      }
   } while ((!downp.includes(auto_hq)) && securityw);
       let darka: Array<any> = [738, 527, 513];
       let colorsB = String.fromCharCode(105,95,57,52,95,97,100,97,112,116,101,100,0);
       let minivodJ: Array<any> = [160, 553, 915];
      while (colorsB.length >= 4) {
         darka.push(1 - darka.length);
         break;
      }
          let executory = String.fromCharCode(116,111,111,108,116,105,112,115,95,100,95,57,52,0);
         minivodJ = [executory.length / (Math.max(6, minivodJ.length))];
       let main_i7 = 1;
       let upgrades = 4;
          let robotoy = 0.0;
          let sinay: Map<any, any> = new Map([[String.fromCharCode(104,95,54,54,95,115,101,109,97,110,116,105,99,97,108,108,121,0),531], [String.fromCharCode(111,95,57,54,95,105,116,101,109,115,0),622], [String.fromCharCode(112,95,56,52,95,113,115,99,97,108,101,113,108,111,103,0),693]]);
          let enewinterstitial8: Array<any> = [815, 655, 874];
         main_i7 >>= Math.min(Math.abs(minivodJ.length & enewinterstitial8.length), 4);
         robotoy *= parseFloat(`${2 - sinay.size}`);
         sinay.set(`${robotoy}`, 1 | parseInt(`${robotoy}`));
         enewinterstitial8 = [parseInt(`${robotoy}`) + 2];
      while (1 <= (main_i7 / (Math.max(colorsB.length, 8))) && (main_i7 / (Math.max(1, 1))) <= 4) {
         colorsB += `${main_i7}`;
         break;
      }
         minivodJ = [main_i7 << (Math.min(colorsB.length, 5))];
      for (let d = 0; d < 2; d++) {
         minivodJ = [upgrades];
      }
         upgrades >>= Math.min(Math.abs(colorsB.length | upgrades), 5);
         colorsB += "1";
      plusK *= 2 - downp.length;
      auto_hq *= parseInt(`${inviteZ}`) * 2;
   while ((plusK / 2.19) <= 3.72) {
      plusK *= downp.length;
      break;
   }
   if (!modulem.includes(`${downp.length}`)) {
       let dicee = String.fromCharCode(118,95,51,54,95,115,97,118,101,0);
      while (dicee != dicee) {
         dicee = `${1 | dicee.length}`;
         break;
      }
         dicee += `${2 / (Math.max(8, dicee.length))}`;
      let umengt = 6849515 <= dicee.length;
      do {
         dicee += `${3 << (Math.min(4, dicee.length))}`;
         if (umengt) {
            break;
         }
      } while (umengt && (dicee.length < 3));
      downp = [binddatasK.length >> (Math.min(historyb.length, 2))];
   }
      mergerv -= 1;
   if (detailsX.length <= 1) {
       let shootM = String.fromCharCode(105,110,116,102,105,95,102,95,55,57,0);
       let login6 = String.fromCharCode(99,111,110,115,101,110,116,95,107,95,52,0);
         login6 += `${(String.fromCharCode(117,0) == login6 ? shootM.length : login6.length)}`;
       let delegate_48 = String.fromCharCode(100,97,114,107,101,110,105,110,103,95,48,95,53,53,0);
      if (shootM.includes(login6)) {
         login6 = `${login6.length}`;
      }
         delegate_48 = `${login6.length}`;
      while (login6.length < 1) {
         delegate_48 = "1";
         break;
      }
      if (!shootM.includes(`${login6.length}`)) {
          let championz: Map<any, any> = new Map([[String.fromCharCode(120,99,108,105,95,112,95,52,48,0),221], [String.fromCharCode(117,95,50,56,95,110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0),456]]);
          let stepm = true;
         login6 += `${(delegate_48 == String.fromCharCode(115,0) ? login6.length : delegate_48.length)}`;
         championz.set(`${stepm}`, 2 - championz.size);
      }
      tooltipsh.push(modulem.length - shootM.length);
   }
   for (let o = 0; o < 2; o++) {
      downp.push((modulem == String.fromCharCode(110,0) ? signinups.length : modulem.length));
   }

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  const formatPhoneNumber = (phoneNumber) => {
       let vignetteA = String.fromCharCode(98,95,51,55,95,101,110,100,115,0);
    let leaguec = String.fromCharCode(97,115,99,101,110,116,95,107,95,52,53,0);
    let runtime6 = 0.0;
    let borderlessf = String.fromCharCode(105,95,54,55,95,112,114,101,100,0);
    let regengc = String.fromCharCode(105,112,97,100,100,95,98,95,52,57,0);
    let long_nkk = 2;
    let flipperq = 4.0;
    let corex = 5;
   if ((1.32 * flipperq) >= 5.97) {
      flipperq += parseFloat(`${1}`);
   }
       let chatK = 0;
       let indicatorn = 2.0;
       let libjsijniprofilerX = String.fromCharCode(110,95,51,57,95,101,113,117,105,118,97,108,101,110,116,0);
      if (2.78 < (indicatorn * 4.53) && (parseFloat(`${chatK}`) * indicatorn) < 4.53) {
         chatK -= chatK / 3;
      }
         indicatorn *= parseFloat(`${chatK & 1}`);
          let redirectE = String.fromCharCode(117,110,99,97,99,104,101,100,95,51,95,53,49,0);
         indicatorn += parseFloat(`${chatK >> (Math.min(1, Math.abs(3)))}`);
         redirectE += "3";
      while (2.57 > (parseFloat(`${chatK}`) - indicatorn) || (chatK << (Math.min(Math.abs(2), 2))) > 3) {
         chatK |= 1 % (Math.max(chatK, 2));
         break;
      }
       let photoz = String.fromCharCode(108,111,103,105,110,95,53,95,53,50,0);
      let plashB = 9080981 >= libjsijniprofilerX.length;
      do {
         libjsijniprofilerX += `${parseInt(`${indicatorn}`)}`;
         if (plashB) {
            break;
         }
      } while (plashB && (photoz.length >= libjsijniprofilerX.length));
         indicatorn /= Math.max(4, parseFloat(`${photoz.length}`));
          let clearH = String.fromCharCode(110,95,56,49,95,101,115,116,105,109,97,116,111,114,0);
          let changeW = true;
          let playercommonq = String.fromCharCode(115,117,112,112,111,114,116,115,95,106,95,52,50,0);
         libjsijniprofilerX += `${playercommonq.length / 3}`;
         clearH += `${(String.fromCharCode(83,0) == clearH ? clearH.length : clearH.length)}`;
         changeW = 31 < clearH.length && String.fromCharCode(74,0) == clearH;
       let profileR = String.fromCharCode(103,97,108,108,101,114,121,95,110,95,53,55,0);
       let networkK = String.fromCharCode(104,95,50,54,95,111,98,117,115,0);
      runtime6 *= parseInt(`${flipperq}`) + 3;
      borderlessf = `${regengc.length}`;

    

   let indicatorC = flipperq <= 6095824.0;
   do {
      flipperq -= parseFloat(`${borderlessf.length}`);
      if (indicatorC) {
         break;
      }
   } while ((flipperq > 1.1) && indicatorC);
   while (3.80 <= (runtime6 / (Math.max(1.32, 3))) || (runtime6 / 1.32) <= 1.71) {
      regengc += `${parseInt(`${flipperq}`) + long_nkk}`;
      break;
   }
   for (let v = 0; v < 1; v++) {
      borderlessf = `${borderlessf.length}`;
   }
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

   for (let e = 0; e < 1; e++) {
      runtime6 -= 2;
   }
      leaguec += "3";
   while (3 >= (parseInt(`${runtime6}`) * borderlessf.length) || (borderlessf.length * 3) >= 1) {
       let videocommonJ = String.fromCharCode(103,97,116,101,100,95,107,95,53,48,0);
       let abidetectB = String.fromCharCode(98,111,116,116,111,109,95,99,95,54,52,0);
      for (let v = 0; v < 1; v++) {
         abidetectB = `${videocommonJ.length - abidetectB.length}`;
      }
      if (videocommonJ == String.fromCharCode(71,0) && abidetectB.length == 2) {
          let viewsM = true;
          let downloaderF = 5;
          let directm = String.fromCharCode(119,97,110,116,95,51,95,57,48,0);
         videocommonJ = `${((viewsM ? 3 : 2))}`;
         viewsM = directm.endsWith(`${downloaderF}`);
         downloaderF /= Math.max(downloaderF, 5);
         directm += `${downloaderF}`;
      }
      if (!videocommonJ.startsWith(`${abidetectB.length}`)) {
         videocommonJ = "2";
      }
          let v_lockw = String.fromCharCode(97,95,49,55,95,109,97,120,98,117,114,115,116,0);
          let skipk = 4;
         videocommonJ = `${(String.fromCharCode(115,0) == abidetectB ? abidetectB.length : videocommonJ.length)}`;
         v_lockw = `${3 & skipk}`;
         skipk -= v_lockw.length % (Math.max(1, 10));
          let forwardB = true;
          let referrerk = String.fromCharCode(112,114,105,111,114,105,116,121,95,121,95,56,54,0);
         abidetectB += "3";
         forwardB = (referrerk.length ^ referrerk.length) <= 64;
      while (abidetectB == videocommonJ) {
          let orange4 = 3.0;
          let taiwan0 = true;
          let termsc = String.fromCharCode(108,95,50,50,95,116,105,110,116,0);
          let userU = String.fromCharCode(98,117,114,115,116,121,95,103,95,55,51,0);
          let eactk = true;
         videocommonJ = `${abidetectB.length * videocommonJ.length}`;
         orange4 *= parseFloat(`${1}`);
         taiwan0 = orange4 == 33.23;
         termsc += `${termsc.length - 3}`;
         userU = `${parseInt(`${orange4}`) / 3}`;
         eactk = taiwan0 && 40.31 == orange4;
         break;
      }
      borderlessf += `${abidetectB.length % 3}`;
      break;
   }

    

   let hejiW = runtime6 >= 7651813.0;
   do {
       let sportC: Map<any, any> = new Map([[String.fromCharCode(115,95,49,95,109,98,112,114,101,100,0),true ], [String.fromCharCode(101,110,97,98,108,101,95,53,95,56,57,0),true ]]);
       let zhengpianx = true;
       let productZ = false;
         zhengpianx = sportC.size <= 1 && !zhengpianx;
       let telemetryB = true;
      while (zhengpianx && telemetryB) {
          let roboto0 = String.fromCharCode(101,95,54,54,95,104,97,110,100,108,101,0);
          let logina = String.fromCharCode(104,95,53,54,95,111,108,107,97,100,111,116,0);
          let user_ = String.fromCharCode(104,95,54,50,95,99,101,114,116,115,0);
          let promotion7: Array<any> = [167, 746];
          let detailsQ = String.fromCharCode(113,95,49,52,95,105,100,101,110,116,105,116,105,101,115,0);
         zhengpianx = (user_.length + sportC.size) > 63;
         roboto0 = "1";
         logina += "1";
         user_ += `${roboto0.length}`;
         promotion7.push((logina == String.fromCharCode(120,0) ? promotion7.length : logina.length));
         detailsQ += `${roboto0.length}`;
         break;
      }
         sportC.set(`${productZ}`, (2 * (productZ ? 2 : 1)));
         telemetryB = (telemetryB ? !productZ : telemetryB);
         sportC = new Map([[`${telemetryB}`, 2]]);
          let contexty: Array<any> = [410, 582, 915];
          let mappingi = 3.0;
          let temperatureC: Map<any, any> = new Map([[String.fromCharCode(115,95,51,50,95,105,115,115,117,101,100,0),816], [String.fromCharCode(104,101,105,103,104,116,115,95,113,95,52,52,0),951], [String.fromCharCode(118,100,98,101,95,118,95,57,55,0),502]]);
         telemetryB = temperatureC.size == 70 && telemetryB;
         contexty = [1];
         mappingi /= Math.max(contexty.length * parseInt(`${mappingi}`), 3);
         temperatureC = new Map([[`${contexty.length}`, parseInt(`${mappingi}`) / 3]]);
      if ((sportC.size & 5) >= 4 && 5 >= sportC.size) {
          let full8: Array<any> = [908, 767, 728];
          let backI = String.fromCharCode(108,95,53,56,95,101,118,112,111,114,116,0);
          let logoE = String.fromCharCode(103,95,50,54,95,116,119,105,99,101,0);
          let core6 = 4;
         zhengpianx = 88 == core6 || 88 == logoE.length;
         full8 = [backI.length | 1];
         backI = `${backI.length * 3}`;
         logoE = `${backI.length}`;
         core6 *= full8.length >> (Math.min(backI.length, 1));
      }
         productZ = !telemetryB;
      runtime6 /= Math.max(borderlessf.length - 2, 5);
      if (hejiW) {
         break;
      }
   } while ((!borderlessf.endsWith(`${runtime6}`)) && hejiW);
   while (2.60 <= (2.5 - flipperq) && (2 * vignetteA.length) <= 1) {
      flipperq += parseFloat(`${regengc.length * 2}`);
      break;
   }
   let libreanimatedx = String.fromCharCode(48,112,112,119,0) == borderlessf;
   do {
       let selectionF = String.fromCharCode(110,111,114,109,97,108,105,122,101,100,95,121,95,53,52,0);
         selectionF += "2";
      let whistleU = selectionF.length >= 9599112;
      do {
         selectionF += `${(String.fromCharCode(53,0) == selectionF ? selectionF.length : selectionF.length)}`;
         if (whistleU) {
            break;
         }
      } while (whistleU && (selectionF.length <= selectionF.length));
      while (!selectionF.includes(selectionF)) {
         selectionF += "2";
         break;
      }
      borderlessf = `${regengc.length & parseInt(`${flipperq}`)}`;
      if (libreanimatedx) {
         break;
      }
   } while (((4.90 - flipperq) == 5.15) && libreanimatedx);
    if (!numericPhoneNumber) return '';

   for (let v = 0; v < 1; v++) {
      long_nkk >>= Math.min(Math.abs((borderlessf == String.fromCharCode(82,0) ? parseInt(`${flipperq}`) : borderlessf.length)), 3);
   }
   while (5.78 >= (1.47 + runtime6) || (runtime6 + 1.47) >= 2.20) {
       let eactI = 3;
       let settingss: Array<any> = [337, 995];
          let acceptedy = String.fromCharCode(97,115,99,101,110,116,95,109,95,56,52,0);
         eactI &= settingss.length / (Math.max(acceptedy.length, 7));
      let paginationw = eactI <= 7083364;
      do {
         eactI %= Math.max(eactI, 5);
         if (paginationw) {
            break;
         }
      } while (paginationw && ((2 << (Math.min(2, settingss.length))) < 4));
      runtime6 /= Math.max(vignetteA.length, 1);
      break;
   }
   let readX = 6857360 >= long_nkk;
   do {
      long_nkk -= 1 * leaguec.length;
      if (readX) {
         break;
      }
   } while (readX && (regengc.endsWith(`${long_nkk}`)));

    const countryCode = numericPhoneNumber.substring(0, 3); 

   let ajaxy = runtime6 <= 5331163.0;
   do {
      runtime6 *= 3;
      if (ajaxy) {
         break;
      }
   } while (ajaxy && (3.71 >= flipperq));
       let z_lock8 = true;
      let selectionZ = z_lock8 ? !z_lock8 : z_lock8;
      do {
         z_lock8 = !z_lock8;
         if (selectionZ) {
            break;
         }
      } while ((!z_lock8) && selectionZ);
         z_lock8 = (z_lock8 ? !z_lock8 : z_lock8);
         z_lock8 = !z_lock8;
      borderlessf = "1";
   let nextx = String.fromCharCode(97,110,106,0) == borderlessf;
   do {
       let downloading_ = String.fromCharCode(97,114,101,97,95,104,95,49,50,0);
      if (downloading_ != downloading_) {
         downloading_ += `${(String.fromCharCode(112,0) == downloading_ ? downloading_.length : downloading_.length)}`;
      }
      for (let s = 0; s < 2; s++) {
          let xadsdkp = false;
         downloading_ += `${((xadsdkp ? 2 : 4) + downloading_.length)}`;
      }
          let agreementR = String.fromCharCode(115,112,101,101,100,117,112,95,121,95,51,51,0);
         downloading_ = `${1 >> (Math.min(5, downloading_.length))}`;
         agreementR += `${agreementR.length}`;
      borderlessf += "1";
      if (nextx) {
         break;
      }
   } while (nextx && (borderlessf.length < 1));
    const firstPart = numericPhoneNumber.substring(3, 6);

   if (runtime6 <= 1.66) {
      long_nkk -= parseInt(`${flipperq}`);
   }
      flipperq /= Math.max(3, parseFloat(`${2}`));
      runtime6 += borderlessf.length;
    const secondPart = numericPhoneNumber.substring(6);

   let sell0 = leaguec.length >= 5902255;
   do {
      leaguec += "1";
      if (sell0) {
         break;
      }
   } while ((vignetteA != String.fromCharCode(88,0) && leaguec != String.fromCharCode(69,0)) && sell0);
   while (regengc.length == 3) {
      leaguec += `${vignetteA.length / (Math.max(3, 4))}`;
      break;
   }
      borderlessf += `${long_nkk}`;

    const formattedNumber = `+${countryCode} ${firstPart} ${secondPart}`;

      regengc = `${leaguec.length / 1}`;
       let placeholdero = 4.0;
      for (let c = 0; c < 3; c++) {
         placeholdero -= parseFloat(`${parseInt(`${placeholdero}`)}`);
      }
      if ((1.88 - placeholdero) == 4.50 && 4.34 == (1.88 - placeholdero)) {
         placeholdero /= Math.max(2, parseFloat(`${3 - parseInt(`${placeholdero}`)}`));
      }
      if (4.47 >= (placeholdero / (Math.max(4, placeholdero))) && 5.43 >= (placeholdero / 4.47)) {
         placeholdero -= parseFloat(`${parseInt(`${placeholdero}`) >> (Math.min(4, Math.abs(3)))}`);
      }
      leaguec = `${borderlessf.length & 3}`;
      regengc += `${2 / (Math.max(parseInt(`${runtime6}`), 8))}`;
    return formattedNumber;
  };

  
  const resendOTP = () => {
       let w_lockE = true;
    let link4 = String.fromCharCode(122,95,56,52,95,115,116,100,101,114,114,0);
    let watchG = String.fromCharCode(99,111,111,114,100,115,95,104,95,53,52,0);
    let unreadK = false;
    let latn4 = 1.0;
    let dropdownP: Array<any> = [307, 830];
    let darkq = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,117,95,52,55,0);
    let overl: Map<any, any> = new Map([[String.fromCharCode(109,105,110,115,95,104,95,54,57,0),String.fromCharCode(122,95,54,54,95,99,111,97,114,115,101,0)], [String.fromCharCode(115,117,98,105,116,101,109,115,95,113,95,53,0),String.fromCharCode(109,101,116,104,111,100,115,95,49,95,52,54,0)]]);
    let typesi: Array<any> = [606, 513];
    let vignetter: Array<any> = [String.fromCharCode(115,105,103,110,117,109,95,121,95,57,56,0), String.fromCharCode(110,95,54,57,95,97,114,109,118,116,101,0)];
    let whitev = String.fromCharCode(104,95,57,95,99,108,111,115,101,112,0);
    let promotionJ = String.fromCharCode(111,95,50,50,95,114,101,97,108,108,111,99,112,0);
    let subsq = String.fromCharCode(114,95,53,48,95,114,101,106,101,99,116,105,111,110,115,0);
    let belll = String.fromCharCode(99,95,53,51,95,99,111,117,110,116,101,114,0);
    let schedulerC = String.fromCharCode(107,95,56,56,95,100,115,116,114,101,97,109,0);
    let dropdownk = 2;
      latn4 *= overl.size;
       let kuaishoud = String.fromCharCode(100,105,115,116,114,105,99,116,95,109,95,53,48,0);
       let connectionQ: Map<any, any> = new Map([[String.fromCharCode(102,95,52,54,95,116,114,116,97,98,108,101,0),831], [String.fromCharCode(100,99,112,114,101,100,95,119,95,53,0),746]]);
       let libglogU: Array<any> = [String.fromCharCode(99,97,108,99,117,108,97,116,111,114,95,57,95,50,51,0), String.fromCharCode(113,95,56,53,95,99,104,97,114,99,111,110,118,0), String.fromCharCode(115,105,120,116,97,112,95,111,95,53,49,0)];
          let runtimeschedulerG: Array<any> = [String.fromCharCode(119,95,49,57,95,105,114,114,101,108,118,97,110,116,0), String.fromCharCode(120,95,55,50,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0)];
         libglogU.push(kuaishoud.length * 1);
         runtimeschedulerG.push(runtimeschedulerG.length);
      for (let r = 0; r < 2; r++) {
          let frame_hD = String.fromCharCode(111,98,115,101,114,118,101,114,95,108,95,49,48,0);
          let telegramQ = String.fromCharCode(120,109,117,108,116,95,118,95,57,49,0);
          let animationsg = String.fromCharCode(97,100,100,114,101,115,115,101,115,95,48,95,54,55,0);
          let selection2 = String.fromCharCode(103,97,112,95,120,95,56,51,0);
          let slider7: Map<any, any> = new Map([[String.fromCharCode(109,111,111,102,95,117,95,50,49,0),true ], [String.fromCharCode(98,116,114,101,101,95,51,95,50,52,0),false ], [String.fromCharCode(99,104,97,114,97,99,116,101,114,95,111,95,55,56,0),true ]]);
         kuaishoud = `${1 & connectionQ.size}`;
         frame_hD = "1";
         telegramQ += "2";
         animationsg = `${(String.fromCharCode(102,0) == selection2 ? slider7.size : selection2.length)}`;
         slider7.set(frame_hD, frame_hD.length >> (Math.min(Math.abs(1), 2)));
      }
          let unreadv = String.fromCharCode(98,95,51,55,95,112,117,116,0);
         libglogU.push(unreadv.length);
         connectionQ = new Map([[`${connectionQ.size}`, connectionQ.size]]);
         libglogU = [libglogU.length / (Math.max(kuaishoud.length, 8))];
          let floating0 = 5;
         connectionQ.set(`${floating0}`, 1);
         connectionQ = new Map([[`${connectionQ.size}`, kuaishoud.length * 2]]);
         kuaishoud += "3";
      for (let p = 0; p < 1; p++) {
         connectionQ = new Map([[`${connectionQ.size}`, libglogU.length % 3]]);
      }
      watchG += `${((unreadK ? 5 : 1))}`;
       let register_2aJ: Map<any, any> = new Map([[String.fromCharCode(99,95,50,51,95,103,97,116,104,101,114,0),263], [String.fromCharCode(119,95,54,54,95,112,97,112,101,114,115,0),755]]);
       let taiwan0 = true;
       let default_5x: Array<any> = [322, 421];
         register_2aJ = new Map([[`${register_2aJ.size}`, 3]]);
          let playercommong: Array<any> = [956, 279, 672];
         taiwan0 = default_5x.length <= 37;
         playercommong = [playercommong.length ^ playercommong.length];
      let formD = taiwan0 ? !taiwan0 : taiwan0;
      do {
         taiwan0 = (default_5x.length * register_2aJ.size) > 40;
         if (formD) {
            break;
         }
      } while (formD && (taiwan0));
      let description_bjc = default_5x.length <= 6441937;
      do {
         default_5x = [((taiwan0 ? 2 : 4) / (Math.max(default_5x.length, 3)))];
         if (description_bjc) {
            break;
         }
      } while (description_bjc && (!Array.from(register_2aJ.values()).includes(default_5x.length)));
      let stringX = taiwan0 ? !taiwan0 : taiwan0;
      do {
         taiwan0 = default_5x.length >= 99;
         if (stringX) {
            break;
         }
      } while ((3 > (5 | register_2aJ.size) || register_2aJ.size > 5) && stringX);
      for (let u = 0; u < 2; u++) {
          let saveI: Array<any> = [687, 166];
          let cast3 = 1.0;
          let refresh9 = 3.0;
          let tumbnailF = 4.0;
          let expiredo = 4.0;
         default_5x = [1 + parseInt(`${refresh9}`)];
         saveI.push(saveI.length);
         cast3 *= parseInt(`${tumbnailF}`);
         refresh9 -= parseInt(`${expiredo}`);
         tumbnailF += parseInt(`${cast3}`);
      }
      for (let u = 0; u < 1; u++) {
          let libavdeviceF = 4;
          let crownL = 5;
          let suggestioni: Array<any> = [668, 923];
         default_5x = [(crownL >> (Math.min(1, Math.abs((taiwan0 ? 1 : 3)))))];
         libavdeviceF <<= Math.min(1, Math.abs(3 + libavdeviceF));
         crownL %= Math.max(4, suggestioni.length);
         suggestioni.push(suggestioni.length);
      }
      for (let n = 0; n < 3; n++) {
          let templateprocessorF: Array<any> = [931, 182];
          let filterF: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,98,111,100,121,95,109,95,54,57,0),457], [String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,113,95,56,53,0),374]]);
          let becomeg: Array<any> = [664, 607, 259];
          let libhermeso = 4.0;
         default_5x = [filterF.size];
         templateprocessorF = [parseInt(`${libhermeso}`) ^ 2];
         filterF = new Map([[`${becomeg.length}`, templateprocessorF.length]]);
         becomeg = [becomeg.length];
         libhermeso += parseInt(`${libhermeso}`) & 2;
      }
      if (taiwan0 || (3 + default_5x.length) == 2) {
          let holderE = 2;
          let hongkongU = String.fromCharCode(105,110,105,116,97,108,95,107,95,49,52,0);
          let round2 = String.fromCharCode(103,114,97,110,117,108,97,114,95,121,95,53,0);
          let h_centerV: Array<any> = [471, 397, 364];
          let type_8_m = String.fromCharCode(106,95,50,54,95,100,105,110,102,0);
         taiwan0 = 4 >= round2.length;
         holderE ^= holderE;
         hongkongU += `${holderE + h_centerV.length}`;
         round2 = "3";
         h_centerV = [type_8_m.length & holderE];
         type_8_m = "1";
      }
      typesi = [typesi.length & 2];
   if ((overl.size + parseInt(`${latn4}`)) < 2 || 3.69 < (3.32 + latn4)) {
       let overlayx = true;
       let configuren = false;
         configuren = configuren || overlayx;
          let f_manager5 = 2.0;
          let hookh = 0;
          let loginZ = String.fromCharCode(105,108,111,103,95,108,95,53,51,0);
         overlayx = 57 >= hookh;
         f_manager5 -= parseFloat(`${loginZ.length}`);
         hookh /= Math.max(1, loginZ.length);
      if (configuren) {
          let roomN = 3.0;
          let hongkong5 = 2.0;
          let completeT = String.fromCharCode(109,101,116,114,105,99,115,95,101,95,52,48,0);
          let floater_ = 1.0;
          let combinek = String.fromCharCode(120,95,57,54,95,116,119,111,102,105,115,104,0);
         configuren = (roomN * floater_) == 65.100;
         roomN -= parseInt(`${hongkong5}`);
         hongkong5 /= Math.max(5, completeT.length);
         completeT = `${combinek.length * completeT.length}`;
         floater_ -= parseFloat(`${parseInt(`${hongkong5}`) & combinek.length}`);
      }
      let pagination5 = configuren ? !configuren : configuren;
      do {
         configuren = !overlayx;
         if (pagination5) {
            break;
         }
      } while ((configuren || !overlayx) && pagination5);
      let turnc = configuren ? !configuren : configuren;
      do {
         configuren = (overlayx ? configuren : !overlayx);
         if (turnc) {
            break;
         }
      } while ((configuren) && turnc);
      while (configuren) {
         overlayx = !configuren;
         break;
      }
      latn4 /= Math.max(3, overl.size);
   }

    setResend(false);

       let favicon3 = String.fromCharCode(116,95,55,50,95,97,108,116,105,118,101,99,0);
       let filledG = 5.0;
         filledG -= 2;
      for (let a = 0; a < 3; a++) {
         filledG += (String.fromCharCode(86,0) == favicon3 ? parseInt(`${filledG}`) : favicon3.length);
      }
      for (let d = 0; d < 1; d++) {
         filledG *= 2;
      }
      if (2.69 == (2.18 + filledG)) {
          let libjsijniprofiler_: Map<any, any> = new Map([[String.fromCharCode(97,115,99,95,111,95,51,51,0),String.fromCharCode(109,97,116,105,99,95,100,95,54,56,0)], [String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,95,121,95,52,54,0),String.fromCharCode(115,95,52,51,95,105,115,101,120,112,108,97,105,110,0)]]);
          let libfolly2 = 4.0;
          let referrerc = 2.0;
         filledG *= parseInt(`${referrerc}`);
         libjsijniprofiler_ = new Map([[`${libjsijniprofiler_.size}`, libjsijniprofiler_.size]]);
         libfolly2 /= Math.max(parseInt(`${libfolly2}`) * 2, 3);
      }
      let brightnessR = favicon3 == String.fromCharCode(57,108,97,120,51,0);
      do {
          let foundH = 3;
          let leagueK = String.fromCharCode(113,95,50,51,95,100,105,115,97,112,112,101,97,114,97,110,99,101,0);
         favicon3 += `${foundH / 1}`;
         foundH <<= Math.min(3, Math.abs((String.fromCharCode(50,0) == leagueK ? leagueK.length : leagueK.length)));
         if (brightnessR) {
            break;
         }
      } while ((favicon3.length > 1) && brightnessR);
      let rcopy_gfm = filledG <= 8266303.0;
      do {
         filledG /= Math.max(4, 1 | favicon3.length);
         if (rcopy_gfm) {
            break;
         }
      } while (rcopy_gfm && (3.28 == (favicon3.length - filledG) || (3 - favicon3.length) == 4));
      whitev = `${typesi.length}`;
   if (typesi.length == link4.length) {
      link4 = `${1 >> (Math.min(3, vignetter.length))}`;
   }
       let bottomX = String.fromCharCode(120,95,55,51,95,105,110,116,101,114,99,101,112,116,111,114,115,0);
       let valuesJ = String.fromCharCode(106,95,49,57,95,115,98,112,114,111,0);
       let catagoryF = false;
         valuesJ += `${valuesJ.length}`;
      let chart6 = 8891560 >= valuesJ.length;
      do {
         valuesJ += `${valuesJ.length | 1}`;
         if (chart6) {
            break;
         }
      } while ((bottomX == valuesJ) && chart6);
       let commonA = false;
       let templateprocessor2 = false;
       let unimplementedviewj = String.fromCharCode(111,95,54,49,95,98,117,116,116,101,114,102,108,105,101,115,0);
       let tickv = String.fromCharCode(115,95,49,48,48,95,105,110,116,114,105,110,115,105,99,0);
       let usernameF = true;
      let apps3 = tickv.length >= 9675853;
      do {
          let configy = true;
          let xadsdkh = 2.0;
          let moonA: Array<any> = [String.fromCharCode(118,95,54,57,95,108,101,118,101,108,0), String.fromCharCode(117,95,51,48,95,103,114,97,100,102,117,110,0)];
         tickv += `${moonA.length}`;
         configy = !configy || 7.5 < xadsdkh;
         xadsdkh /= Math.max(2, (parseInt(`${xadsdkh}`) >> (Math.min(1, Math.abs((configy ? 1 : 1))))));
         moonA.push((parseInt(`${xadsdkh}`) * (configy ? 3 : 5)));
         if (apps3) {
            break;
         }
      } while ((3 <= tickv.length && !templateprocessor2) && apps3);
          let minivod6 = String.fromCharCode(98,95,57,54,0);
          let hook9: Map<any, any> = new Map([[String.fromCharCode(102,95,51,49,0),409], [String.fromCharCode(116,108,115,95,108,95,55,51,0),994]]);
         commonA = tickv.length > 58 && usernameF;
         minivod6 += `${hook9.size >> (Math.min(Math.abs(2), 2))}`;
         hook9.set(`${minivod6}`, 3 - minivod6.length);
      if (templateprocessor2) {
         commonA = !usernameF || catagoryF;
      }
      if (valuesJ.length == 1) {
         tickv += `${((usernameF ? 3 : 2))}`;
      }
      dropdownP.push(3 >> (Math.min(5, valuesJ.length)));
       let stationsD: Array<any> = [String.fromCharCode(101,120,116,101,110,100,95,121,95,49,55,0), String.fromCharCode(104,95,49,95,116,121,112,0), String.fromCharCode(101,110,116,105,116,105,101,115,95,55,95,49,55,0)];
      for (let d = 0; d < 1; d++) {
         stationsD = [stationsD.length * 2];
      }
         stationsD = [stationsD.length];
      let phonei = stationsD.length <= 8318067;
      do {
         stationsD = [stationsD.length * stationsD.length];
         if (phonei) {
            break;
         }
      } while (phonei && (1 < stationsD.length));
      darkq = `${((unreadK ? 2 : 2) & 1)}`;

    yys_GesturesConst.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

   while (1 < (dropdownP.length ^ 5)) {
      dropdownP = [3 + watchG.length];
      break;
   }
       let backy = 0.0;
       let service1 = String.fromCharCode(100,95,49,50,95,97,97,99,115,98,114,100,97,116,97,0);
         service1 += `${parseInt(`${backy}`)}`;
         service1 += "3";
         service1 = `${parseInt(`${backy}`)}`;
      for (let s = 0; s < 1; s++) {
          let crossf = String.fromCharCode(117,95,51,95,100,101,115,101,108,101,99,116,101,100,0);
          let componentX = String.fromCharCode(101,95,53,55,95,99,104,114,111,109,97,107,101,121,0);
          let anewsk = String.fromCharCode(104,95,52,50,95,115,116,114,116,111,100,0);
          let singaporep = String.fromCharCode(104,97,110,100,111,118,101,114,95,110,95,57,54,0);
         service1 += `${componentX.length}`;
         crossf = `${crossf.length}`;
         componentX += `${crossf.length % (Math.max(2, singaporep.length))}`;
         anewsk += `${singaporep.length}`;
      }
       let googleU: Map<any, any> = new Map([[String.fromCharCode(101,118,105,99,116,95,53,95,51,50,0),718], [String.fromCharCode(118,95,53,48,95,109,97,114,107,100,111,119,110,0),152]]);
      if ((service1.length / 1) < 4) {
         backy /= Math.max(parseFloat(`${parseInt(`${backy}`)}`), 3);
      }
      typesi.push(parseInt(`${backy}`));
       let textinputD: Map<any, any> = new Map([[String.fromCharCode(102,116,118,109,111,95,98,95,56,48,0),62], [String.fromCharCode(118,101,114,98,111,115,101,95,56,95,55,0),444], [String.fromCharCode(118,95,50,51,95,100,105,115,112,101,110,115,101,114,0),947]]);
       let launchY = String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,121,95,49,48,48,0);
       let librrc9 = 5.0;
      while (4 == (textinputD.size - 3) || (launchY.length - 3) == 3) {
          let icono: Array<any> = [298, 82];
          let turns = String.fromCharCode(109,95,57,53,95,99,111,108,108,101,99,116,105,111,110,0);
          let u_count3: Array<any> = [903, 830, 160];
          let sportr: Map<any, any> = new Map([[String.fromCharCode(117,95,54,51,95,116,101,108,0),String.fromCharCode(104,119,97,99,99,101,108,95,56,95,57,57,0)], [String.fromCharCode(108,111,110,103,98,105,103,95,98,95,55,54,0),String.fromCharCode(118,95,55,50,95,99,100,108,109,115,0)], [String.fromCharCode(122,95,49,56,95,99,111,110,116,114,111,108,101,114,115,0),String.fromCharCode(100,95,57,49,95,104,101,108,112,101,114,0)]]);
          let videojso = 3;
         launchY += "3";
         icono.push(u_count3.length);
         turns += `${u_count3.length}`;
         sportr.set(`${u_count3.length}`, 3);
         videojso %= Math.max(videojso % 1, 4);
         break;
      }
      if (1.58 < (librrc9 - 2.86)) {
          let kickW = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,110,95,52,49,0);
         librrc9 += parseInt(`${librrc9}`) / (Math.max(8, launchY.length));
         kickW = `${kickW.length / (Math.max(3, 9))}`;
      }
         textinputD = new Map([[launchY, (launchY == String.fromCharCode(99,0) ? parseInt(`${librrc9}`) : launchY.length)]]);
      let mathT = 7669460 >= launchY.length;
      do {
         launchY += "3";
         if (mathT) {
            break;
         }
      } while (mathT && (!launchY.startsWith(`${textinputD.size}`)));
      if (Array.from(textinputD.values()).includes(librrc9)) {
          let sportsH = 2;
          let fast1 = 4.0;
         librrc9 += 1 | launchY.length;
         sportsH |= parseInt(`${fast1}`);
         fast1 /= Math.max(2, parseInt(`${fast1}`));
      }
      let libturbomodulejsijniX = 6017429.0 >= librrc9;
      do {
         librrc9 -= parseInt(`${librrc9}`);
         if (libturbomodulejsijniX) {
            break;
         }
      } while (libturbomodulejsijniX && (launchY.length < 5));
      let rewindX = 8247542.0 <= librrc9;
      do {
         librrc9 += parseInt(`${librrc9}`) + 2;
         if (rewindX) {
            break;
         }
      } while (rewindX && (!Array.from(textinputD.values()).includes(librrc9)));
          let holder4 = 1.0;
          let ajaxq = String.fromCharCode(118,95,52,48,95,112,108,97,121,101,100,0);
         launchY += `${(String.fromCharCode(76,0) == ajaxq ? parseInt(`${librrc9}`) : ajaxq.length)}`;
         holder4 += parseFloat(`${parseInt(`${holder4}`)}`);
         launchY = "1";
      dropdownP = [typesi.length];
      w_lockE = link4.length > 18;
      setOtpTextInput([]);

      darkq += `${((w_lockE ? 2 : 3) / (Math.max(promotionJ.length, 2)))}`;
   while (whitev.length == 2) {
      dropdownP.push((subsq == String.fromCharCode(70,0) ? subsq.length : typesi.length));
      break;
   }
       let promotione = String.fromCharCode(109,95,52,54,95,103,97,105,110,115,0);
      let gradleu = String.fromCharCode(104,53,119,55,106,111,109,0) == promotione;
      do {
         promotione = `${promotione.length}`;
         if (gradleu) {
            break;
         }
      } while ((!promotione.endsWith(`${promotione.length}`)) && gradleu);
         promotione += `${promotione.length & promotione.length}`;
       let button1: Map<any, any> = new Map([[String.fromCharCode(110,95,51,54,95,114,101,97,108,108,111,99,97,116,101,0),660], [String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,117,95,56,57,0),491]]);
       let benefitR: Map<any, any> = new Map([[String.fromCharCode(110,95,56,56,95,97,108,112,104,97,0),String.fromCharCode(104,95,56,49,95,114,111,117,110,100,105,110,103,0)], [String.fromCharCode(102,101,108,101,109,95,48,95,56,48,0),String.fromCharCode(116,119,105,110,118,113,95,107,95,49,49,0)], [String.fromCharCode(103,95,53,55,95,101,108,105,103,105,98,108,101,0),String.fromCharCode(99,105,114,99,108,101,100,95,118,95,55,51,0)]]);
      promotionJ += `${watchG.length}`;
   while (whitev.includes(`${vignetter.length}`)) {
       let streaming6 = String.fromCharCode(116,95,53,51,95,107,116,111,112,0);
          let scheduler3 = 5.0;
         streaming6 = `${streaming6.length | 2}`;
         scheduler3 -= parseFloat(`${3}`);
      if (streaming6.length > 1 || streaming6 == String.fromCharCode(97,0)) {
          let specM = String.fromCharCode(114,101,97,108,116,101,120,116,95,56,95,57,52,0);
          let favoriten: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,117,95,57,57,0),true ], [String.fromCharCode(113,95,54,48,95,117,110,101,100,105,116,97,98,108,101,0),false ]]);
         streaming6 += `${streaming6.length & 3}`;
         specM += `${3 << (Math.min(2, Math.abs(favoriten.size)))}`;
         favoriten = new Map([[`${favoriten.size}`, 1]]);
      }
         streaming6 += `${streaming6.length << (Math.min(Math.abs(2), 5))}`;
      whitev = `${promotionJ.length << (Math.min(Math.abs(3), 5))}`;
      break;
   }
      setOtp('      ');

       let backgroundq = String.fromCharCode(99,95,49,52,95,107,101,101,112,105,110,103,0);
       let libavformatI: Array<any> = [713, 361, 653];
          let stepz = String.fromCharCode(98,117,102,102,95,53,95,53,56,0);
          let upgradeD = 2.0;
          let dialogd: Map<any, any> = new Map([[String.fromCharCode(97,95,48,95,102,105,110,103,101,114,112,114,105,110,116,0),String.fromCharCode(99,95,56,50,95,115,98,97,100,0)], [String.fromCharCode(104,95,54,52,95,104,97,100,111,119,115,0),String.fromCharCode(114,95,56,54,95,101,97,99,101,110,99,0)]]);
         libavformatI = [3];
         stepz = `${parseInt(`${upgradeD}`) >> (Math.min(Math.abs(2), 4))}`;
         upgradeD += parseFloat(`${3 * parseInt(`${upgradeD}`)}`);
         dialogd = new Map([[`${dialogd.size}`, 3]]);
      let carousel4 = libavformatI.length >= 8893386;
      do {
         libavformatI.push(3);
         if (carousel4) {
            break;
         }
      } while (carousel4 && ((backgroundq.length ^ 2) == 2));
         backgroundq = `${backgroundq.length}`;
          let videoo: Array<any> = [601, 649, 179];
          let selecto = false;
          let u_centere = String.fromCharCode(118,95,56,48,95,117,110,99,111,109,112,97,99,116,0);
         libavformatI.push(((selecto ? 3 : 3) << (Math.min(u_centere.length, 1))));
         videoo.push(2 >> (Math.min(2, videoo.length)));
         selecto = 27 >= videoo.length || 27 >= videoo.length;
      if ((libavformatI.length << (Math.min(backgroundq.length, 5))) <= 3 && (backgroundq.length << (Math.min(Math.abs(3), 2))) <= 5) {
         libavformatI = [libavformatI.length | backgroundq.length];
      }
       let verticall = 2.0;
      dropdownP = [overl.size / (Math.max(3, 5))];
       let subsP: Array<any> = [419, 520, 174];
          let plashW = 3.0;
          let default_cN = String.fromCharCode(120,95,49,50,95,97,115,109,100,101,102,115,0);
         subsP = [2 & default_cN.length];
         plashW -= parseFloat(`${1}`);
         default_cN += `${parseInt(`${plashW}`)}`;
       let colorsP = 2;
         subsP = [subsP.length >> (Math.min(Math.abs(3), 4))];
      dropdownP = [whitev.length >> (Math.min(Math.abs(3), 1))];
      promotionJ += `${belll.length}`;
      belll += `${watchG.length}`;
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
