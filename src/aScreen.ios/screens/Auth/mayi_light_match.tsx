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
import mayi_push from '../../../../Umeng/mayi_push';
import { mayi_Injury } from '@api';
import { useAppSelector, useSelector } from '@hooks/mayi_redirect';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import { mayi_Gift } from '@models/mayi_libjsinspector';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import mayi_ForegroundLibfabricjni from '../../../../AppsFlyer/mayi_libreactnativejni';


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
       let libcrashsdkY = 2;
    let androidj = true;
    let whistle_ = String.fromCharCode(97,95,50,50,95,108,115,104,105,102,116,0);
    let clearG = String.fromCharCode(110,95,55,95,119,114,105,116,101,108,111,99,107,0);
    let goalH: Array<any> = [509, 345];
    let acceptedJ = 4.0;
    let short_b3: Map<any, any> = new Map([[String.fromCharCode(115,95,55,50,95,108,97,98,101,108,0),357], [String.fromCharCode(115,101,103,105,100,95,114,95,55,54,0),899], [String.fromCharCode(103,95,55,52,95,114,101,99,111,114,100,0),471]]);
    let iconsaveimagec: Array<any> = [301, 834, 454];
    let regengW = 3;
    let fileu = 4.0;
    let frame_8dl = String.fromCharCode(102,111,99,117,115,97,98,108,101,95,50,95,50,49,0);
    let thailand8 = 2.0;
    let optionsF = 5.0;
    let cluby = 5;
    let s_centerN = 5;
       let debugy = 0.0;
      let filter1 = debugy <= 5594577.0;
      do {
         debugy += parseFloat(`${parseInt(`${debugy}`)}`);
         if (filter1) {
            break;
         }
      } while ((2.74 < (2.83 * debugy) || 2.83 < (debugy * debugy)) && filter1);
      while (debugy > 3.56) {
         debugy -= parseFloat(`${parseInt(`${debugy}`)}`);
         break;
      }
       let reactnativeultimatelistview4: Array<any> = [879, 106];
       let interstitialT: Array<any> = [409, 797, 334];
      short_b3.set(`${libcrashsdkY}`, libcrashsdkY - 3);
      regengW /= Math.max(short_b3.size + 1, 4);
   let refreshborderlessC = 6729946 <= clearG.length;
   do {
      clearG += "1";
      if (refreshborderlessC) {
         break;
      }
   } while (refreshborderlessC && (1 < (clearG.length | 3)));
       let liveQ: Map<any, any> = new Map([[String.fromCharCode(112,111,115,108,105,115,116,95,103,95,51,49,0),true ], [String.fromCharCode(100,101,115,99,114,95,110,95,50,49,0),true ]]);
      if (liveQ.size >= 5) {
         liveQ = new Map([[`${liveQ.size}`, liveQ.size % 3]]);
      }
          let downloaderp = String.fromCharCode(108,95,56,52,95,118,99,101,110,99,0);
         liveQ = new Map([[`${liveQ.size}`, (String.fromCharCode(54,0) == downloaderp ? downloaderp.length : liveQ.size)]]);
       let smallV = 3.0;
      androidj = !androidj;
      goalH = [clearG.length];
       let policym = 1;
      let defaultlogoN = 9528443 >= policym;
      do {
          let blacklista: Map<any, any> = new Map([[String.fromCharCode(116,111,111,98,105,103,95,111,95,56,56,0),false ], [String.fromCharCode(117,95,50,57,95,112,105,120,101,108,102,111,114,109,97,116,0),true ]]);
          let tempnodataI = String.fromCharCode(104,95,50,50,95,115,110,100,105,111,0);
          let homeplayerE = String.fromCharCode(109,105,109,101,95,56,95,56,55,0);
          let halfF = false;
         policym -= 1 + homeplayerE.length;
         blacklista.set(`${tempnodataI}`, (String.fromCharCode(75,0) == tempnodataI ? tempnodataI.length : blacklista.size));
         homeplayerE = `${blacklista.size}`;
         halfF = String.fromCharCode(82,0) == tempnodataI && 72 < blacklista.size;
         if (defaultlogoN) {
            break;
         }
      } while (defaultlogoN && (4 > policym));
         policym >>= Math.min(Math.abs(policym - policym), 5);
      for (let n = 0; n < 2; n++) {
         policym >>= Math.min(1, Math.abs(policym << (Math.min(2, Math.abs(policym)))));
      }
      libcrashsdkY *= parseInt(`${fileu}`) + 3;
      regengW /= Math.max(libcrashsdkY, 3);
       let profilep = String.fromCharCode(105,115,97,108,110,117,109,95,116,95,53,53,0);
          let debugr = String.fromCharCode(97,95,56,49,0);
         profilep = `${(String.fromCharCode(97,0) == profilep ? debugr.length : profilep.length)}`;
          let libjsijniprofilerh = 4.0;
          let basketballawayteamW = 0;
         profilep += `${basketballawayteamW}`;
         libjsijniprofilerh -= parseInt(`${libjsijniprofilerh}`);
         basketballawayteamW >>= Math.min(Math.abs(parseInt(`${libjsijniprofilerh}`) + 2), 5);
         profilep = `${profilep.length / (Math.max(3, 6))}`;
      fileu += parseFloat(`${2}`);
      acceptedJ += parseFloat(`${3}`);
      short_b3 = new Map([[`${goalH.length}`, goalH.length ^ 1]]);
   let basketballplayerplaceholderu = short_b3.size <= 8465122;
   do {
       let project7 = String.fromCharCode(118,95,53,51,95,109,111,109,101,110,116,0);
       let matchinactiveZ = String.fromCharCode(115,101,108,102,105,101,95,122,95,54,48,0);
         matchinactiveZ += `${matchinactiveZ.length}`;
         matchinactiveZ = `${(String.fromCharCode(80,0) == matchinactiveZ ? project7.length : matchinactiveZ.length)}`;
          let foregroundF: Map<any, any> = new Map([[String.fromCharCode(106,95,54,56,95,114,119,103,116,0),false ], [String.fromCharCode(112,111,108,121,109,101,115,104,95,100,95,56,55,0),false ], [String.fromCharCode(104,95,50,53,95,119,105,114,101,0),false ]]);
          let forward9 = false;
          let frame_9qo = 2.0;
         matchinactiveZ += `${matchinactiveZ.length & project7.length}`;
         foregroundF.set(`${frame_9qo}`, ((forward9 ? 3 : 2) % (Math.max(9, parseInt(`${frame_9qo}`)))));
         forward9 = foregroundF.size <= 25;
          let lightH: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,104,101,97,100,95,100,95,57,57,0),358], [String.fromCharCode(113,95,50,57,95,98,101,110,99,104,109,97,114,107,0),520], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,95,108,95,49,51,0),176]]);
          let templateprocessors: Map<any, any> = new Map([[String.fromCharCode(121,95,54,95,106,97,99,111,115,117,98,0),274], [String.fromCharCode(102,95,51,51,95,98,111,117,110,99,101,0),767]]);
         project7 = `${templateprocessors.size}`;
         lightH.set(`${lightH.size}`, lightH.size);
         templateprocessors.set(`${lightH.size}`, 1 & lightH.size);
      while (matchinactiveZ != project7) {
         project7 = `${project7.length << (Math.min(Math.abs(2), 1))}`;
         break;
      }
          let stepM: Map<any, any> = new Map([[String.fromCharCode(99,95,54,51,95,112,114,101,115,101,110,116,101,114,0),3], [String.fromCharCode(100,95,53,54,95,115,117,98,118,105,101,119,0),763], [String.fromCharCode(117,112,99,97,115,101,95,98,95,56,48,0),652]]);
          let modev: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,115,95,49,54,0),167], [String.fromCharCode(105,95,49,57,95,105,110,100,105,99,97,116,111,114,0),157]]);
         project7 = `${project7.length - modev.size}`;
         stepM = new Map([[`${stepM.size}`, stepM.size]]);
         modev.set(`${stepM.size}`, stepM.size);
      short_b3 = new Map([[`${acceptedJ}`, parseInt(`${acceptedJ}`) - regengW]]);
      if (basketballplayerplaceholderu) {
         break;
      }
   } while (basketballplayerplaceholderu && (5 < (3 & libcrashsdkY) || (libcrashsdkY & short_b3.size) < 3));
       let downloadedQ = String.fromCharCode(112,95,56,56,95,104,101,118,99,0);
       let liveshare6 = 2.0;
       let libimagepipeline1: Array<any> = [488, 481, 35];
       let iconsubssuccessd = String.fromCharCode(97,99,97,108,99,95,120,95,56,51,0);
       let controls2 = String.fromCharCode(118,97,114,105,97,110,99,101,120,104,95,48,95,54,53,0);
      while (4 >= (libimagepipeline1.length - iconsubssuccessd.length) || (4 - libimagepipeline1.length) >= 5) {
          let componentZ = String.fromCharCode(109,95,55,53,95,112,114,101,100,105,99,97,116,101,0);
          let sheet6 = 1.0;
          let gpayZ = String.fromCharCode(116,95,51,52,95,114,101,115,105,103,110,115,0);
          let libnmsY: Map<any, any> = new Map([[String.fromCharCode(104,111,117,114,115,95,106,95,51,50,0),String.fromCharCode(101,95,55,55,95,108,105,98,115,104,105,110,101,0)], [String.fromCharCode(111,108,108,101,99,116,105,111,110,115,95,120,95,51,49,0),String.fromCharCode(118,95,54,95,112,97,115,99,97,108,0)], [String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,103,95,52,48,0),String.fromCharCode(115,116,105,112,112,101,100,95,108,95,55,55,0)]]);
         iconsubssuccessd += `${2 >> (Math.min(4, libimagepipeline1.length))}`;
         componentZ = "2";
         sheet6 -= parseInt(`${sheet6}`);
         gpayZ += `${libnmsY.size + 1}`;
         libnmsY.set(`${sheet6}`, libnmsY.size ^ parseInt(`${sheet6}`));
         break;
      }
      while (2.99 <= (liveshare6 - 1.50) || 2.51 <= (liveshare6 - 1.50)) {
          let leaguedetailsbgO = String.fromCharCode(112,114,110,103,95,113,95,55,55,0);
          let awayF: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,95,101,95,49,48,48,0),String.fromCharCode(106,115,105,109,100,99,102,103,95,107,95,51,50,0)], [String.fromCharCode(98,95,57,57,95,97,99,107,110,111,119,108,101,100,103,109,101,110,116,0),String.fromCharCode(102,99,109,117,108,95,110,95,52,57,0)], [String.fromCharCode(108,95,55,50,95,111,98,106,110,105,100,0),String.fromCharCode(116,111,107,101,110,105,122,101,114,95,98,95,49,48,0)]]);
          let skipo: Map<any, any> = new Map([[String.fromCharCode(114,101,99,105,100,95,104,95,49,48,0),742], [String.fromCharCode(118,95,51,52,95,106,111,98,0),289], [String.fromCharCode(97,99,99,114,117,101,100,95,50,95,49,50,0),863]]);
          let fullscreenmaxi = 0.0;
          let renderS = false;
         liveshare6 /= Math.max((parseFloat(`${String.fromCharCode(48,0) == iconsubssuccessd ? libimagepipeline1.length : iconsubssuccessd.length}`)), 1);
         leaguedetailsbgO = `${leaguedetailsbgO.length / 1}`;
         awayF.set(`${renderS}`, skipo.size);
         skipo = new Map([[`${fullscreenmaxi}`, (String.fromCharCode(74,0) == leaguedetailsbgO ? leaguedetailsbgO.length : parseInt(`${fullscreenmaxi}`))]]);
         break;
      }
       let exampleimage2: Array<any> = [String.fromCharCode(101,95,53,56,95,109,111,118,101,99,98,0), String.fromCharCode(115,117,98,110,111,100,101,95,121,95,51,48,0), String.fromCharCode(117,110,112,97,100,100,101,100,95,100,95,56,0)];
       let basketballmatchdetailbgB = String.fromCharCode(103,95,55,53,95,115,104,111,114,116,102,108,111,97,116,0);
         libimagepipeline1.push(downloadedQ.length & controls2.length);
      if (exampleimage2.length == 2) {
         iconsubssuccessd += `${2 + basketballmatchdetailbgB.length}`;
      }
       let analyticH: Array<any> = [String.fromCharCode(99,111,108,115,95,122,95,51,49,0), String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,108,95,52,54,0)];
       let invitei: Array<any> = [763, 513, 225];
      let unselecteda = 5109704 <= iconsubssuccessd.length;
      do {
         iconsubssuccessd += `${1 - analyticH.length}`;
         if (unselecteda) {
            break;
         }
      } while ((1 >= iconsubssuccessd.length) && unselecteda);
      fileu += parseFloat(`${short_b3.size / 1}`);
   for (let j = 0; j < 2; j++) {
       let ajaxz = 4.0;
       let telegramT = String.fromCharCode(101,108,115,100,101,99,95,111,95,56,48,0);
          let colorso: Array<any> = [String.fromCharCode(111,110,101,112,97,115,115,95,56,95,54,57,0), String.fromCharCode(101,99,117,114,115,105,118,101,95,117,95,55,49,0), String.fromCharCode(108,95,51,53,95,115,116,111,114,101,0)];
          let securitye = String.fromCharCode(121,95,55,50,95,117,110,102,111,114,109,97,116,116,101,100,0);
         ajaxz *= (String.fromCharCode(109,0) == telegramT ? parseInt(`${ajaxz}`) : telegramT.length);
         colorso.push(colorso.length ^ securitye.length);
         securitye = `${colorso.length << (Math.min(Math.abs(3), 2))}`;
      let sortI = String.fromCharCode(56,109,111,103,111,114,110,105,109,0) == telegramT;
      do {
         telegramT = `${telegramT.length << (Math.min(Math.abs(2), 2))}`;
         if (sortI) {
            break;
         }
      } while (sortI && ((ajaxz - telegramT.length) > 4.31 && 4.31 > (ajaxz - telegramT.length)));
          let successX = 5;
         ajaxz -= successX % 2;
          let default_mO = 2.0;
          let pinga: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,122,101,114,115,95,115,95,52,0),true ], [String.fromCharCode(99,111,110,115,116,97,110,116,115,95,116,95,57,56,0),true ]]);
         ajaxz *= telegramT.length;
         default_mO -= parseInt(`${default_mO}`);
         pinga = new Map([[`${pinga.size}`, parseInt(`${default_mO}`)]]);
          let iconsetting8: Map<any, any> = new Map([[String.fromCharCode(100,105,118,95,112,95,55,50,0),948], [String.fromCharCode(109,95,52,55,95,99,97,116,97,108,111,103,0),504]]);
          let dialogJ = false;
         ajaxz += 2 | parseInt(`${ajaxz}`);
         iconsetting8.set(`${dialogJ}`, ((dialogJ ? 2 : 4) & iconsetting8.size));
      for (let m = 0; m < 2; m++) {
          let gestures5 = String.fromCharCode(109,95,52,55,95,115,104,111,117,121,97,99,104,111,0);
          let imagemanagerR: Map<any, any> = new Map([[String.fromCharCode(112,95,51,49,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0),161], [String.fromCharCode(112,95,55,95,97,108,108,111,99,99,111,109,109,111,110,0),623], [String.fromCharCode(115,111,99,107,101,116,115,95,54,95,53,53,0),964]]);
          let bootO: Map<any, any> = new Map([[String.fromCharCode(114,95,55,51,95,100,105,102,102,105,99,117,108,116,121,0),112], [String.fromCharCode(113,95,54,57,95,117,108,116,105,0),642]]);
          let weather_: Array<any> = [666, 982];
         telegramT += "3";
         gestures5 = `${3 & imagemanagerR.size}`;
         imagemanagerR = new Map([[`${bootO.size}`, bootO.size ^ gestures5.length]]);
         weather_.push(bootO.size << (Math.min(Math.abs(2), 4)));
      }
      iconsaveimagec.push(parseInt(`${fileu}`) ^ 3);
   }
      whistle_ = "3";
   if (1 >= whistle_.length) {
      whistle_ += `${short_b3.size}`;
   }
   while (iconsaveimagec.length >= 3) {
       let dicex: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,115,116,105,99,107,101,114,115,0),String.fromCharCode(105,105,110,116,95,52,95,55,0)], [String.fromCharCode(100,95,54,53,95,99,111,100,101,99,100,97,116,97,0),String.fromCharCode(109,97,105,108,116,111,95,115,95,54,57,0)], [String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,54,95,50,48,0),String.fromCharCode(108,97,98,101,108,95,117,95,57,57,0)]]);
       let cancelm = String.fromCharCode(110,117,109,101,114,111,95,119,95,49,52,0);
       let volumeF: Array<any> = [904, 923, 75];
       let libmapbufferjni8 = String.fromCharCode(106,95,55,95,97,99,116,105,118,97,116,101,0);
         cancelm += `${libmapbufferjni8.length ^ 2}`;
      for (let y = 0; y < 2; y++) {
         dicex = new Map([[`${volumeF.length}`, 1 / (Math.max(9, volumeF.length))]]);
      }
         dicex.set(`${cancelm}`, cancelm.length);
       let defaultroombg8 = 1.0;
       let codegenr = 2.0;
          let enewinterstitialJ = String.fromCharCode(99,111,109,109,101,110,116,115,95,52,95,57,51,0);
         libmapbufferjni8 += `${dicex.size | cancelm.length}`;
         enewinterstitialJ = `${enewinterstitialJ.length - 3}`;
       let commentK = 5;
       let nativeex0 = 1;
         defaultroombg8 -= parseFloat(`${volumeF.length}`);
      while ((nativeex0 % (Math.max(3, 5))) > 3 && 3 > (nativeex0 % (Math.max(6, cancelm.length)))) {
          let commentG = 5.0;
         nativeex0 *= parseInt(`${commentG}`) % (Math.max(parseInt(`${codegenr}`), 1));
         break;
      }
       let static_eeL = false;
       let penaltyshootnogoalb = true;
      if (!static_eeL) {
          let sortL: Array<any> = [728, 570];
         libmapbufferjni8 = `${2 & parseInt(`${defaultroombg8}`)}`;
         sortL = [sortL.length];
      }
          let linkh = 4.0;
          let orangev: Map<any, any> = new Map([[String.fromCharCode(105,95,49,51,95,114,97,110,107,115,0),362], [String.fromCharCode(103,114,111,119,116,104,95,120,95,53,54,0),608]]);
          let humidity7 = 2;
         codegenr += parseFloat(`${1}`);
         linkh /= Math.max(parseFloat(`${orangev.size & 2}`), 2);
         orangev.set(`${linkh}`, parseInt(`${linkh}`));
         humidity7 %= Math.max(3, humidity7 + orangev.size);
      for (let c = 0; c < 3; c++) {
         nativeex0 += (String.fromCharCode(97,0) == cancelm ? nativeex0 : cancelm.length);
      }
      iconsaveimagec = [2];
      break;
   }
       let privilegeH = true;
       let libflipperr = String.fromCharCode(111,95,53,53,95,110,118,99,0);
      while (privilegeH) {
         libflipperr = "1";
         break;
      }
      let private_rM = privilegeH ? !privilegeH : privilegeH;
      do {
          let eactB = 0.0;
          let graphg = 2.0;
         privilegeH = (((!privilegeH ? 23 : libflipperr.length) << (Math.min(libflipperr.length, 5))) < 23);
         eactB /= Math.max(1, parseFloat(`${parseInt(`${graphg}`) + 2}`));
         graphg /= Math.max(1, parseFloat(`${parseInt(`${graphg}`) | parseInt(`${eactB}`)}`));
         if (private_rM) {
            break;
         }
      } while (private_rM && (libflipperr.length > 3 || !privilegeH));
         privilegeH = libflipperr.includes(`${privilegeH}`);
      while (!libflipperr.includes(`${privilegeH}`)) {
          let thailandV: Array<any> = [676, 20, 864];
          let emojic = 2.0;
          let armvaZ: Map<any, any> = new Map([[String.fromCharCode(97,101,99,109,95,122,95,55,50,0),286], [String.fromCharCode(102,95,52,54,95,112,114,101,100,105,99,116,120,0),670], [String.fromCharCode(115,100,97,108,108,111,99,120,95,53,95,52,57,0),302]]);
          let libswresamples = 0.0;
          let gifgoalbgB = 3.0;
         libflipperr += `${(2 - (privilegeH ? 4 : 4))}`;
         thailandV = [parseInt(`${libswresamples}`) | armvaZ.size];
         emojic -= parseFloat(`${parseInt(`${libswresamples}`)}`);
         armvaZ.set(`${gifgoalbgB}`, parseInt(`${gifgoalbgB}`));
         break;
      }
          let indexq = String.fromCharCode(116,115,99,99,100,97,116,97,95,54,95,56,0);
         privilegeH = libflipperr.length > 81 || privilegeH;
         indexq = `${indexq.length}`;
      for (let h = 0; h < 1; h++) {
         privilegeH = (((privilegeH ? libflipperr.length : 84) | libflipperr.length) < 84);
      }
      fileu -= parseFloat(`${frame_8dl.length}`);
      frame_8dl = `${parseInt(`${thailand8}`) << (Math.min(3, Math.abs(3)))}`;
   while (1 > frame_8dl.length) {
       let detailsD: Array<any> = [String.fromCharCode(101,110,99,105,112,104,101,114,95,114,95,49,0), String.fromCharCode(111,95,50,57,95,105,110,105,116,105,97,116,111,114,0), String.fromCharCode(113,95,50,52,95,99,111,110,115,116,114,117,99,116,105,118,101,0)];
       let graphicsW = 5.0;
          let imagest = String.fromCharCode(101,120,112,111,114,116,95,54,95,49,55,0);
          let halffieldimage_ = 3.0;
          let previewf = String.fromCharCode(116,114,105,99,107,108,101,95,105,95,57,49,0);
         detailsD = [(previewf == String.fromCharCode(78,0) ? previewf.length : parseInt(`${halffieldimage_}`))];
         imagest = `${imagest.length / (Math.max(imagest.length, 3))}`;
         halffieldimage_ *= imagest.length * 1;
      let yingR = graphicsW >= 4943189.0;
      do {
         graphicsW += 3 + detailsD.length;
         if (yingR) {
            break;
         }
      } while ((detailsD.length < 4) && yingR);
         detailsD = [detailsD.length - 2];
      let traminib = 5220008 >= detailsD.length;
      do {
         detailsD.push(parseInt(`${graphicsW}`));
         if (traminib) {
            break;
         }
      } while (traminib && (graphicsW > 2.40));
      if (graphicsW > detailsD.length) {
         graphicsW += parseInt(`${graphicsW}`) + 3;
      }
      for (let g = 0; g < 2; g++) {
         graphicsW *= 2 - detailsD.length;
      }
      frame_8dl = `${parseInt(`${optionsF}`)}`;
      break;
   }
   if (3 < (libcrashsdkY + regengW) && (regengW + 3) < 2) {
      regengW >>= Math.min(5, goalH.length);
   }
       let moviesT: Array<any> = [560, 163, 517];
      let yellowtoredS = 8086245 <= moviesT.length;
      do {
         moviesT = [moviesT.length];
         if (yellowtoredS) {
            break;
         }
      } while ((1 < (moviesT.length | moviesT.length) || 1 < (moviesT.length | moviesT.length)) && yellowtoredS);
      for (let l = 0; l < 3; l++) {
         moviesT = [moviesT.length & moviesT.length];
      }
      if (moviesT.length <= 3) {
         moviesT = [2];
      }
      clearG = `${1 ^ libcrashsdkY}`;

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  
  const resendOTP = () => {
       let helperu: Map<any, any> = new Map([[String.fromCharCode(97,108,112,105,110,101,95,54,95,57,50,0),String.fromCharCode(118,98,101,122,105,101,114,95,105,95,54,57,0)], [String.fromCharCode(98,95,50,51,95,116,114,97,110,115,108,97,116,111,110,0),String.fromCharCode(102,114,97,103,109,101,110,116,115,95,121,95,54,51,0)]]);
    let iconstarV: Map<any, any> = new Map([[String.fromCharCode(112,95,56,53,95,112,114,111,98,97,98,108,101,0),false ], [String.fromCharCode(103,95,57,54,95,116,104,114,101,97,100,112,111,111,108,0),true ], [String.fromCharCode(97,115,99,98,110,95,57,95,55,50,0),true ]]);
    let elementso: Map<any, any> = new Map([[String.fromCharCode(112,114,101,95,120,95,56,52,0),true ], [String.fromCharCode(106,95,55,49,95,97,99,102,102,0),true ]]);
    let rncoreM = 2;
    let indicator1 = 3.0;
    let ycopy_2yc = true;
    let rankz = String.fromCharCode(108,105,98,115,109,98,99,95,105,95,55,53,0);
    let privacyX = true;
    let gradleI = false;
    let hejiq = true;
    let privatechatbgd = String.fromCharCode(105,110,108,105,110,101,100,95,110,95,54,56,0);
    let launchm = 4.0;
       let internetw: Map<any, any> = new Map([[String.fromCharCode(114,100,111,112,116,95,56,95,55,57,0),String.fromCharCode(97,108,101,114,116,115,95,106,95,53,55,0)], [String.fromCharCode(115,104,97,114,105,110,103,95,99,95,52,49,0),String.fromCharCode(103,95,57,55,95,117,117,105,100,112,114,111,102,0)]]);
       let penalty_ = String.fromCharCode(97,99,99,101,112,116,101,100,95,116,95,55,52,0);
       let eventw = false;
       let accepteds = false;
      if (!eventw) {
          let libavfilterJ = String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,120,95,52,57,0);
          let sharewhiteo = 4.0;
          let predictionwinF = false;
          let libbufferr = false;
         penalty_ += `${libavfilterJ.length}`;
         libavfilterJ += `${parseInt(`${sharewhiteo}`) / 2}`;
         sharewhiteo -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${sharewhiteo}`)), 3))}`);
         predictionwinF = (predictionwinF ? libbufferr : predictionwinF);
         libbufferr = predictionwinF;
      }
      for (let i = 0; i < 1; i++) {
         eventw = penalty_.startsWith(`${eventw}`);
      }
          let unimplementedviewa = String.fromCharCode(103,95,56,52,95,115,99,97,108,97,114,0);
          let kickf = String.fromCharCode(105,102,102,116,95,122,95,49,57,0);
         eventw = unimplementedviewa.length >= kickf.length;
          let styles3 = 5;
          let moonl = 5.0;
         internetw = new Map([[penalty_, (penalty_ == String.fromCharCode(107,0) ? styles3 : penalty_.length)]]);
         styles3 ^= parseInt(`${moonl}`);
          let mbjscommont: Array<any> = [29, 20];
          let main_hS = String.fromCharCode(108,95,51,57,95,101,110,99,105,114,99,108,101,100,0);
          let defaultteamR: Array<any> = [296, 888, 14];
         internetw = new Map([[`${eventw}`, ((accepteds ? 4 : 3) ^ (eventw ? 5 : 2))]]);
         mbjscommont = [mbjscommont.length | 1];
         main_hS = `${defaultteamR.length & 3}`;
         defaultteamR = [main_hS.length];
      privacyX = null == internetw.get(`${hejiq}`);
   if (!hejiq) {
      privatechatbgd = "2";
   }
   let sportw = ycopy_2yc ? !ycopy_2yc : ycopy_2yc;
   do {
       let fullscreenmaxc = true;
       let target3: Array<any> = [105, 29];
       let nbatrophyG = String.fromCharCode(112,97,105,114,115,95,121,95,49,57,0);
         fullscreenmaxc = (nbatrophyG.length - target3.length) == 84;
      for (let l = 0; l < 2; l++) {
          let pauseh = String.fromCharCode(121,95,49,55,95,119,101,98,109,105,100,115,0);
          let iconsubssuccessm: Map<any, any> = new Map([[String.fromCharCode(118,95,57,55,95,114,101,97,110,97,108,121,122,101,0),71], [String.fromCharCode(105,110,105,116,101,110,99,95,56,95,56,57,0),248]]);
          let chatroombackgroundd = 1.0;
         nbatrophyG = "2";
         pauseh += "3";
         iconsubssuccessm.set(pauseh, 1 + iconsubssuccessm.size);
         chatroombackgroundd *= parseFloat(`${2}`);
      }
         target3 = [target3.length % (Math.max(nbatrophyG.length, 9))];
       let defaultroombge: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,112,97,117,115,101,100,0),String.fromCharCode(103,114,97,100,95,106,95,57,54,0)], [String.fromCharCode(117,95,54,52,95,100,105,115,97,98,108,101,114,0),String.fromCharCode(115,112,105,108,108,115,105,122,101,95,114,95,51,55,0)], [String.fromCharCode(103,101,111,116,97,103,115,95,116,95,52,56,0),String.fromCharCode(115,119,105,116,99,104,101,114,95,106,95,52,48,0)]]);
          let fillH = String.fromCharCode(103,101,116,116,105,109,101,95,105,95,57,48,0);
          let matchesv = 3;
         defaultroombge.set(fillH, target3.length);
         fillH = `${matchesv}`;
         fullscreenmaxc = !nbatrophyG.endsWith(`${fullscreenmaxc}`);
          let vertical0 = String.fromCharCode(107,95,56,53,95,115,101,116,119,97,116,101,114,109,97,114,107,0);
          let libreactperfloggerjni5 = String.fromCharCode(100,95,52,54,95,97,118,101,114,114,111,114,0);
          let loginD = 1.0;
         target3.push(target3.length);
         vertical0 += `${(vertical0 == String.fromCharCode(102,0) ? vertical0.length : libreactperfloggerjni5.length)}`;
         libreactperfloggerjni5 += `${(String.fromCharCode(116,0) == vertical0 ? libreactperfloggerjni5.length : vertical0.length)}`;
         loginD += parseInt(`${loginD}`);
         defaultroombge.set(`${target3.length}`, target3.length);
      for (let h = 0; h < 1; h++) {
         nbatrophyG += `${target3.length % (Math.max(1, defaultroombge.size))}`;
      }
      ycopy_2yc = !privacyX;
      if (sportw) {
         break;
      }
   } while (sportw && ((elementso.size % (Math.max(5, 5))) >= 2 || elementso.size >= 5));
   for (let n = 0; n < 1; n++) {
      iconstarV.set(privatechatbgd, 3);
   }

    setResend(false);

   let executors = 7680207 >= privatechatbgd.length;
   do {
      privatechatbgd += `${elementso.size | 2}`;
      if (executors) {
         break;
      }
   } while ((ycopy_2yc && 1 == privatechatbgd.length) && executors);
   for (let m = 0; m < 3; m++) {
       let topica = 0.0;
       let halffieldimaget = 2.0;
      while (4.17 >= (halffieldimaget * 2.37)) {
          let typesd = String.fromCharCode(112,114,101,115,101,110,99,101,115,95,114,95,48,0);
         halffieldimaget *= typesd.length % (Math.max(1, parseInt(`${topica}`)));
         break;
      }
      while (3.25 <= (2.6 / (Math.max(8, topica))) && (2.6 / (Math.max(4, halffieldimaget))) <= 1.0) {
          let soundl = 1.0;
         halffieldimaget += 3;
         soundl *= parseInt(`${soundl}`);
         break;
      }
         halffieldimaget -= parseInt(`${topica}`);
      let selectedb = halffieldimaget >= 7011503.0;
      do {
         halffieldimaget /= Math.max(parseInt(`${topica}`), 2);
         if (selectedb) {
            break;
         }
      } while (((3.45 - topica) < 5.30 || (3.45 - topica) < 1.44) && selectedb);
      for (let a = 0; a < 3; a++) {
         halffieldimaget -= parseInt(`${topica}`);
      }
       let brightnessS: Array<any> = [640, 713, 825];
       let libflipperP: Array<any> = [352, 103, 311];
      privatechatbgd = `${((privacyX ? 5 : 2) / (Math.max(parseInt(`${halffieldimaget}`), 3)))}`;
   }
      ycopy_2yc = (!gradleI ? !privacyX : gradleI);
   for (let u = 0; u < 3; u++) {
      rankz += `${2 * rankz.length}`;
   }

    mayi_Injury.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

      elementso.set(`${elementso.size}`, iconstarV.size);
      indicator1 -= (parseFloat(`${(gradleI ? 2 : 1) & 1}`));
   let typingH = privacyX ? !privacyX : privacyX;
   do {
      privacyX = 100 <= helperu.size || 100 <= iconstarV.size;
      if (typingH) {
         break;
      }
   } while (typingH && (5 <= (5 & helperu.size)));
   let inviteU = rankz.length >= 8821427;
   do {
      rankz = "3";
      if (inviteU) {
         break;
      }
   } while (inviteU && ((rankz.length >> (Math.min(Math.abs(3), 5))) > 5));
      setOtpTextInput([]);

   for (let y = 0; y < 1; y++) {
      rankz += `${((ycopy_2yc ? 3 : 3))}`;
   }
      rncoreM += (String.fromCharCode(52,0) == privatechatbgd ? privatechatbgd.length : (gradleI ? 2 : 4));
      gradleI = !gradleI;
   if (indicator1 < 5.61) {
       let defaultlogoq = 5.0;
       let linkX = String.fromCharCode(104,97,108,100,99,108,117,116,95,52,95,52,52,0);
         linkX += `${linkX.length}`;
      for (let t = 0; t < 3; t++) {
          let mimo2 = 4.0;
         linkX = `${(String.fromCharCode(120,0) == linkX ? parseInt(`${mimo2}`) : linkX.length)}`;
      }
         defaultlogoq += linkX.length + parseInt(`${defaultlogoq}`);
         linkX += `${linkX.length >> (Math.min(Math.abs(1), 5))}`;
         linkX = `${parseInt(`${defaultlogoq}`)}`;
          let thailandX = String.fromCharCode(119,95,53,50,95,99,111,110,116,97,105,110,105,110,103,0);
          let userR = 3.0;
         defaultlogoq *= parseInt(`${defaultlogoq}`) % 2;
         thailandX = `${parseInt(`${userR}`)}`;
         userR /= Math.max(parseFloat(`${3}`), 3);
      privacyX = elementso.size < 70;
   }
      setOtp('      ');

       let bodanD = String.fromCharCode(117,95,54,49,95,112,101,114,102,111,114,109,101,100,0);
      if (bodanD != String.fromCharCode(109,0)) {
         bodanD = `${bodanD.length % (Math.max(1, 1))}`;
      }
      while (bodanD != String.fromCharCode(109,0)) {
          let penaltyshootnogoalr = String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,95,109,95,50,55,0);
          let helperW = 3;
          let iconarrowrightorangef = false;
          let upgradeU = 0.0;
         bodanD += `${bodanD.length % 2}`;
         penaltyshootnogoalr += `${penaltyshootnogoalr.length}`;
         helperW <<= Math.min(Math.abs((penaltyshootnogoalr == String.fromCharCode(71,0) ? penaltyshootnogoalr.length : helperW)), 1);
         iconarrowrightorangef = 15 > helperW;
         upgradeU -= helperW;
         break;
      }
          let photoK: Array<any> = [String.fromCharCode(112,111,108,101,95,102,95,51,57,0), String.fromCharCode(97,95,53,49,95,111,114,105,103,105,110,97,108,0), String.fromCharCode(99,108,105,112,116,101,115,116,95,97,95,54,49,0)];
          let round4: Map<any, any> = new Map([[String.fromCharCode(100,111,117,103,108,97,115,95,100,95,57,0),false ], [String.fromCharCode(104,95,55,55,95,115,105,122,105,110,103,0),false ]]);
         bodanD += `${3 >> (Math.min(2, photoK.length))}`;
         photoK.push(round4.size);
         round4 = new Map([[`${round4.size}`, round4.size ^ 2]]);
      privatechatbgd += `${1 * bodanD.length}`;
   while (ycopy_2yc) {
      iconstarV.set(`${ycopy_2yc}`, helperu.size);
      break;
   }
      ycopy_2yc = !gradleI && helperu.size > 6;
   let cricketD = gradleI ? !gradleI : gradleI;
   do {
      gradleI = iconstarV.size == 41 || String.fromCharCode(70,0) == privatechatbgd;
      if (cricketD) {
         break;
      }
   } while ((!gradleI || 3 < rankz.length) && cricketD);
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
