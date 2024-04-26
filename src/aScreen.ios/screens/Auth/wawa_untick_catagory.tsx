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
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { wawaEvent } from '@api';
import { useAppSelector, useSelector } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import wawaSina from '../../../../AppsFlyer/wawa_fcdaebecbcbafcdfceaaeccfeacdb';


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
       let libhermesk = String.fromCharCode(99,117,108,102,114,101,113,95,104,95,53,53,0);
    let termst = String.fromCharCode(116,95,55,49,95,101,100,116,115,0);
    let stringZ = String.fromCharCode(113,95,50,55,95,99,100,99,105,0);
    let fastm = String.fromCharCode(116,95,53,56,95,112,97,110,101,108,115,0);
    let selly = 2;
    let hometeamfieldU: Map<any, any> = new Map([[String.fromCharCode(112,95,57,95,97,115,97,110,0),951], [String.fromCharCode(112,111,115,108,105,115,116,95,50,95,52,56,0),374], [String.fromCharCode(111,95,57,95,97,99,108,114,0),570]]);
    let eyeclosed = String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,118,95,56,51,0);
    let emojid = String.fromCharCode(113,95,50,56,95,109,101,109,99,109,112,0);
    let apps1 = 3;
    let textlayoutmanagerd = String.fromCharCode(108,95,52,51,95,112,114,101,100,120,108,0);
    let backiconmaskV = 4;
    let modalz: Array<any> = [901, 989, 723];
    let unfillj = String.fromCharCode(97,118,97,116,97,114,95,118,95,52,54,0);
    let hongkongS = String.fromCharCode(120,95,51,57,95,98,105,103,103,101,115,116,0);
    let suggestion2: Map<any, any> = new Map([[String.fromCharCode(103,95,51,50,95,112,114,101,108,111,97,100,105,110,103,0),false ], [String.fromCharCode(115,95,49,57,95,110,105,110,101,0),true ]]);
      hometeamfieldU.set(`${termst}`, termst.length % (Math.max(8, hometeamfieldU.size)));
   if ((3 << (Math.min(3, emojid.length))) <= 3 || (apps1 << (Math.min(Math.abs(3), 5))) <= 5) {
      apps1 *= eyeclosed.length;
   }
       let emojiheartZ = String.fromCharCode(99,95,53,49,95,115,105,103,112,97,115,115,0);
       let codegen8 = 4.0;
       let statsnomoredataC = 4;
       let whitetick6 = true;
          let twitter0 = String.fromCharCode(107,95,56,56,95,105,112,108,105,109,97,103,101,0);
         statsnomoredataC += twitter0.length;
         whitetick6 = 32.32 == codegen8;
      if (5 == (statsnomoredataC / 2)) {
          let vietnam8 = false;
          let iconarrowrightwhiteQ = 0.0;
         statsnomoredataC %= Math.max(1, 4);
         vietnam8 = !vietnam8;
         iconarrowrightwhiteQ += 2 / (Math.max(parseInt(`${iconarrowrightwhiteQ}`), 5));
      }
         codegen8 /= Math.max(statsnomoredataC, 1);
       let iconwatchm = 0;
         codegen8 *= statsnomoredataC;
       let privatechatbgf = String.fromCharCode(113,95,49,52,95,112,117,115,104,105,110,103,0);
          let catagoryS = 5.0;
          let reducerI = String.fromCharCode(110,109,104,100,95,56,95,50,48,0);
         whitetick6 = catagoryS > 64.96 || codegen8 > 64.96;
         catagoryS += parseFloat(`${reducerI.length % 3}`);
         reducerI += `${reducerI.length}`;
      apps1 += (fastm == String.fromCharCode(112,0) ? parseInt(`${codegen8}`) : fastm.length);
      emojiheartZ += `${emojiheartZ.length * emojiheartZ.length}`;
      hometeamfieldU = new Map([[fastm, 1]]);
      libhermesk = `${textlayoutmanagerd.length << (Math.min(2, Math.abs(hometeamfieldU.size)))}`;
   let libreacti = 9813179 <= stringZ.length;
   do {
      stringZ = `${apps1 / (Math.max(backiconmaskV, 7))}`;
      if (libreacti) {
         break;
      }
   } while (libreacti && (eyeclosed.length < 5 || stringZ == String.fromCharCode(109,0)));
   if (fastm.startsWith(`${stringZ.length}`)) {
      stringZ += `${apps1 | 1}`;
   }
      emojid = `${libhermesk.length}`;
   if (emojid == unfillj) {
       let moonX: Array<any> = [76, 41];
         moonX = [moonX.length];
         moonX = [2];
          let nterstitialI: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,100,97,116,97,116,121,112,101,115,0),665], [String.fromCharCode(116,119,105,116,116,101,114,95,49,95,52,50,0),378]]);
         moonX = [moonX.length];
         nterstitialI = new Map([[`${nterstitialI.size}`, 3 & nterstitialI.size]]);
      unfillj = "1";
   }
      backiconmaskV -= eyeclosed.length;
       let sheetP: Map<any, any> = new Map([[String.fromCharCode(111,95,55,57,95,108,111,117,100,110,101,115,115,0),403], [String.fromCharCode(98,101,108,111,110,103,115,95,57,95,56,52,0),191], [String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,117,95,56,55,0),239]]);
       let aread = String.fromCharCode(105,112,109,111,118,105,101,95,109,95,54,0);
       let nodeN = 5.0;
         aread = "1";
         aread += "3";
      if (!Array.from(sheetP.values()).includes(nodeN)) {
          let appleC = String.fromCharCode(97,114,105,98,95,113,95,50,49,0);
          let alerta = String.fromCharCode(116,95,54,54,95,100,99,109,112,0);
          let renderO: Array<any> = [627, 672, 238];
          let langkeyj: Array<any> = [590, 640, 101];
         sheetP.set(`${alerta}`, alerta.length);
         appleC = `${(String.fromCharCode(50,0) == appleC ? renderO.length : appleC.length)}`;
         renderO = [appleC.length << (Math.min(Math.abs(3), 3))];
         langkeyj = [(String.fromCharCode(81,0) == appleC ? appleC.length : langkeyj.length)];
      }
       let iconnotificationnewi = 4.0;
       let handler9 = 3.0;
       let libavfilterO = 1.0;
          let vignetten = String.fromCharCode(112,111,115,116,105,110,103,95,51,95,51,53,0);
          let orangetickr = 1.0;
         nodeN /= Math.max(parseFloat(`${vignetten.length}`), 5);
         vignetten += "3";
         orangetickr -= parseFloat(`${parseInt(`${orangetickr}`) & 3}`);
      for (let d = 0; d < 3; d++) {
          let penaltyshootnogoal0 = String.fromCharCode(100,101,110,111,105,115,101,102,105,108,116,101,114,95,114,95,52,51,0);
          let castingl: Array<any> = [String.fromCharCode(99,95,50,49,95,111,119,110,115,0), String.fromCharCode(109,95,48,95,101,120,97,99,116,0), String.fromCharCode(121,95,50,52,95,97,115,116,101,114,105,115,107,0)];
          let nativemodule_ = String.fromCharCode(115,116,105,112,112,101,100,95,109,95,50,50,0);
          let awayicon8 = String.fromCharCode(102,114,111,110,116,95,111,95,49,53,0);
         handler9 -= parseFloat(`${castingl.length}`);
         penaltyshootnogoal0 += `${nativemodule_.length}`;
         castingl = [2 & penaltyshootnogoal0.length];
         nativemodule_ += `${awayicon8.length}`;
         awayicon8 = `${awayicon8.length / (Math.max(2, nativemodule_.length))}`;
      }
      let predictiondefaultk = 4960830.0 >= nodeN;
      do {
         nodeN /= Math.max(4, parseFloat(`${sheetP.size ^ parseInt(`${libavfilterO}`)}`));
         if (predictiondefaultk) {
            break;
         }
      } while (predictiondefaultk && (iconnotificationnewi < 1.58));
         iconnotificationnewi *= parseInt(`${nodeN}`) - 2;
      selly >>= Math.min(2, Math.abs(aread.length >> (Math.min(emojid.length, 5))));
   let dependenciesI = apps1 <= 8778613;
   do {
      apps1 <<= Math.min(Math.abs(apps1 >> (Math.min(Math.abs(3), 3))), 4);
      if (dependenciesI) {
         break;
      }
   } while (((3 << (Math.min(4, Math.abs(apps1)))) == 4 && 4 == (3 << (Math.min(3, unfillj.length)))) && dependenciesI);
      termst += `${termst.length + 2}`;
   if ((backiconmaskV * textlayoutmanagerd.length) <= 2 || 1 <= (textlayoutmanagerd.length * 2)) {
      textlayoutmanagerd = "1";
   }
   for (let k = 0; k < 3; k++) {
      textlayoutmanagerd += "2";
   }
   while (3 <= selly) {
      selly -= (String.fromCharCode(95,0) == emojid ? emojid.length : eyeclosed.length);
      break;
   }
   if (1 < (hometeamfieldU.size & 3) || 5 < (3 & hometeamfieldU.size)) {
       let loadingT = 2.0;
       let runtimeschedulerm = false;
      while (!runtimeschedulerm && 5.69 == (1.56 * loadingT)) {
         loadingT *= 2 % (Math.max(8, parseInt(`${loadingT}`)));
         break;
      }
      if (loadingT <= 4.81 || (loadingT - 4.81) <= 3.92) {
         loadingT += (parseInt(`${loadingT}`) * (runtimeschedulerm ? 3 : 1));
      }
         loadingT /= Math.max(1, 3 / (Math.max(4, parseInt(`${loadingT}`))));
         runtimeschedulerm = loadingT >= 90.17;
          let executort = 3.0;
         runtimeschedulerm = executort == 10.44;
         loadingT /= Math.max((parseInt(`${loadingT}`) ^ (runtimeschedulerm ? 1 : 4)), 5);
      textlayoutmanagerd += `${termst.length}`;
   }
      termst += `${modalz.length << (Math.min(Math.abs(1), 4))}`;
       let list_ = 4;
       let defaultroombgD = 3.0;
          let dangerD = 1.0;
          let selectedV = String.fromCharCode(116,95,50,56,95,115,101,116,98,105,116,0);
         defaultroombgD -= parseFloat(`${parseInt(`${defaultroombgD}`) >> (Math.min(1, Math.abs(1)))}`);
         dangerD += (parseFloat(`${selectedV == String.fromCharCode(48,0) ? selectedV.length : parseInt(`${dangerD}`)}`));
         list_ ^= 2;
       let materialG = 1.0;
      if ((4 ^ list_) >= 4 && 2.44 >= (defaultroombgD - parseFloat(`${list_}`))) {
          let d_animationx = 5.0;
          let logo8 = false;
          let logoutv = 3;
         list_ += list_;
         d_animationx /= Math.max(((logo8 ? 3 : 5) + logoutv), 5);
         logo8 = logo8 || 64 > logoutv;
      }
         defaultroombgD -= parseFloat(`${parseInt(`${materialG}`)}`);
      let basketballdetailsbgJ = defaultroombgD <= 7954811.0;
      do {
         defaultroombgD += parseFloat(`${list_ & 1}`);
         if (basketballdetailsbgJ) {
            break;
         }
      } while (basketballdetailsbgJ && ((defaultroombgD / (Math.max(5.31, 7))) >= 2.53));
      emojid += `${fastm.length}`;
   for (let f = 0; f < 2; f++) {
       let minivodX = String.fromCharCode(113,95,54,56,95,101,99,111,117,110,116,0);
       let middleQ = true;
       let formc: Map<any, any> = new Map([[String.fromCharCode(104,95,54,55,95,97,99,99,101,115,115,111,114,105,101,115,0),918], [String.fromCharCode(103,95,53,48,95,99,111,108,115,112,97,110,0),207]]);
       let cornershootI: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,101,110,101,100,95,118,95,50,52,0),246], [String.fromCharCode(97,95,57,54,95,99,100,99,105,0),45], [String.fromCharCode(118,95,54,55,95,107,101,121,115,112,101,99,0),430]]);
       let iconbellactiver = 4.0;
      if (Array.from(cornershootI.keys()).includes(`${iconbellactiver}`)) {
         iconbellactiver /= Math.max(parseFloat(`${formc.size - 1}`), 4);
      }
      for (let o = 0; o < 1; o++) {
         middleQ = parseFloat(`${minivodX.length}`) == iconbellactiver;
      }
       let rewindk = 5;
       let commonZ = 2;
      while (3 <= (rewindk / (Math.max(parseInt(`${iconbellactiver}`), 7))) || 3 <= (rewindk - 3)) {
         rewindk -= cornershootI.size << (Math.min(Math.abs(1), 1));
         break;
      }
      if (1 < (5 & commonZ)) {
         iconbellactiver /= Math.max((parseFloat(`${(middleQ ? 3 : 4) * cornershootI.size}`)), 1);
      }
         commonZ += 1 >> (Math.min(Math.abs(commonZ), 4));
       let defaultteamH: Map<any, any> = new Map([[String.fromCharCode(98,101,99,97,117,115,101,95,110,95,54,57,0),String.fromCharCode(120,95,49,51,95,101,118,101,110,116,0)], [String.fromCharCode(116,95,51,53,95,118,105,115,105,98,105,108,105,116,121,0),String.fromCharCode(114,103,98,116,111,95,103,95,52,49,0)], [String.fromCharCode(116,111,111,108,115,95,106,95,49,57,0),String.fromCharCode(111,95,55,57,95,110,97,116,117,114,97,108,0)]]);
      while (4 == (4 * rewindk) || 4 == rewindk) {
          let final_3B = String.fromCharCode(102,101,116,99,104,105,110,103,95,53,95,49,53,0);
          let iconrefreshi = false;
         rewindk *= 3;
         final_3B = `${(final_3B == String.fromCharCode(82,0) ? final_3B.length : final_3B.length)}`;
         iconrefreshi = final_3B.length <= final_3B.length;
         break;
      }
      for (let w = 0; w < 3; w++) {
         cornershootI.set(`${commonZ}`, 2);
      }
      if (formc.size > minivodX.length) {
         formc = new Map([[`${cornershootI.size}`, 2]]);
      }
       let eyeopen2 = 2.0;
         minivodX += `${cornershootI.size}`;
         cornershootI = new Map([[`${defaultteamH.size}`, defaultteamH.size >> (Math.min(Math.abs(3), 1))]]);
         middleQ = defaultteamH.size <= parseInt(`${eyeopen2}`);
         cornershootI = new Map([[`${cornershootI.size}`, cornershootI.size]]);
      libhermesk = `${2 & parseInt(`${iconbellactiver}`)}`;
   }
      emojid += `${unfillj.length}`;
   let awayy = 6805987 <= apps1;
   do {
      apps1 *= (stringZ == String.fromCharCode(55,0) ? textlayoutmanagerd.length : stringZ.length);
      if (awayy) {
         break;
      }
   } while (awayy && ((selly + apps1) > 5));
   let dragL = termst.length >= 5948481;
   do {
       let teamdetailsbgH = 3.0;
       let containers: Array<any> = [750, 862];
       let iconusera = String.fromCharCode(103,95,50,95,97,117,116,111,114,101,109,111,118,101,0);
      let flagZ = teamdetailsbgH <= 5612972.0;
      do {
         teamdetailsbgH += parseFloat(`${parseInt(`${teamdetailsbgH}`) >> (Math.min(2, Math.abs(1)))}`);
         if (flagZ) {
            break;
         }
      } while ((!containers.includes(teamdetailsbgH)) && flagZ);
         containers = [2 >> (Math.min(3, Math.abs(parseInt(`${teamdetailsbgH}`))))];
      while (iconusera.endsWith(`${containers.length}`)) {
         containers.push(3 & iconusera.length);
         break;
      }
      while (4 > (iconusera.length ^ 1)) {
         iconusera += `${1 + containers.length}`;
         break;
      }
      for (let n = 0; n < 1; n++) {
         containers.push(1);
      }
         iconusera += `${containers.length << (Math.min(Math.abs(2), 2))}`;
      let dycreatorS = 8527814.0 <= teamdetailsbgH;
      do {
         teamdetailsbgH *= parseFloat(`${iconusera.length}`);
         if (dycreatorS) {
            break;
         }
      } while (dycreatorS && ((containers.length - 5) == 1));
      while (containers.includes(teamdetailsbgH)) {
          let mathT = 4.0;
          let frame_e7 = 2.0;
         teamdetailsbgH *= parseFloat(`${parseInt(`${frame_e7}`)}`);
         mathT -= parseInt(`${mathT}`) - parseInt(`${mathT}`);
         frame_e7 /= Math.max(5, 3 << (Math.min(Math.abs(parseInt(`${mathT}`)), 4)));
         break;
      }
          let videovarj = 2.0;
         teamdetailsbgH *= parseFloat(`${containers.length}`);
         videovarj -= parseFloat(`${1}`);
      termst = `${modalz.length}`;
      if (dragL) {
         break;
      }
   } while ((stringZ != String.fromCharCode(116,0)) && dragL);
   let entryX = 6770776 <= selly;
   do {
      selly *= backiconmaskV;
      if (entryX) {
         break;
      }
   } while (entryX && (hometeamfieldU.get(`${selly}`) != null));
   while (2 >= (unfillj.length % 5) && 5 >= (apps1 % (Math.max(unfillj.length, 8)))) {
      apps1 += 3 + textlayoutmanagerd.length;
      break;
   }
   while (1 == (2 << (Math.min(4, fastm.length))) && 1 == (fastm.length << (Math.min(Math.abs(2), 4)))) {
      apps1 %= Math.max(5, 2);
      break;
   }
   for (let e = 0; e < 3; e++) {
       let basketballawayteamP = true;
       let stringsX = 1.0;
       let tumbnailz = 0.0;
      if (basketballawayteamP) {
         tumbnailz *= 2 - parseInt(`${tumbnailz}`);
      }
         basketballawayteamP = 23.32 < (stringsX / (Math.max(tumbnailz, 5)));
      let eventsplashU = basketballawayteamP ? !basketballawayteamP : basketballawayteamP;
      do {
         basketballawayteamP = 26.97 < tumbnailz && 26.97 < stringsX;
         if (eventsplashU) {
            break;
         }
      } while (eventsplashU && (stringsX > 5.50));
          let fullscreenmax_ = String.fromCharCode(112,108,117,103,103,101,100,95,56,95,54,49,0);
          let actionL = 1.0;
         stringsX += 2;
         fullscreenmax_ += "3";
         actionL *= parseFloat(`${fullscreenmax_.length}`);
      while (stringsX <= 2.6) {
         tumbnailz *= 2;
         break;
      }
      let iconsubssuccessi = 6171217.0 <= stringsX;
      do {
         stringsX /= Math.max(4, 3 - parseInt(`${tumbnailz}`));
         if (iconsubssuccessi) {
            break;
         }
      } while (((stringsX / 1.54) <= 4.92 && 5.18 <= (tumbnailz + 1.54)) && iconsubssuccessi);
         stringsX *= (parseInt(`${stringsX}`) | (basketballawayteamP ? 1 : 5));
      if (!basketballawayteamP) {
         stringsX += (parseInt(`${stringsX}`) ^ (basketballawayteamP ? 4 : 1));
      }
      if (3.19 < (5.97 - tumbnailz) && tumbnailz < 5.97) {
         tumbnailz -= ((basketballawayteamP ? 2 : 4) << (Math.min(Math.abs(parseInt(`${stringsX}`)), 3)));
      }
      selly <<= Math.min(5, Math.abs(unfillj.length >> (Math.min(fastm.length, 1))));
   }
      stringZ = `${modalz.length}`;

    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  
  const resendOTP = () => {
       let predictionarrowp = String.fromCharCode(102,95,56,57,95,98,111,111,107,109,97,114,107,0);
    let navigationl = 5;
    let layoutR: Map<any, any> = new Map([[String.fromCharCode(107,95,54,50,95,105,110,102,111,0),true ], [String.fromCharCode(108,95,56,54,95,116,116,97,100,115,112,0),true ]]);
    let cleart: Map<any, any> = new Map([[String.fromCharCode(106,95,50,95,97,108,97,110,103,117,97,103,101,0),583], [String.fromCharCode(109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,95,97,95,53,57,0),945]]);
    let greenarrowupH = String.fromCharCode(105,95,55,53,95,100,117,114,98,0);
    let completeG = 1;
    let sportsK = 0.0;
    let large3 = 0;
    let predictionlosse = 0;
    let plashq = String.fromCharCode(122,95,49,52,95,101,120,116,0);
   while (2.50 >= (sportsK - 1.86)) {
      sportsK -= layoutR.size ^ 3;
      break;
   }
   let homeinactiveo = navigationl <= 8083782;
   do {
       let penaltymatchiconc = String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,53,95,50,48,0);
       let stringsR = String.fromCharCode(105,103,104,108,105,103,104,116,115,95,121,95,54,56,0);
      let tempK = stringsR.length >= 9085562;
      do {
          let matchdetailbgw = 5;
          let brightnessM = String.fromCharCode(114,101,99,121,99,108,101,95,97,95,55,56,0);
          let malaysiaz = String.fromCharCode(98,105,110,107,98,95,48,95,56,51,0);
          let lessz: Array<any> = [647, 793, 399];
          let sorts = 1.0;
         stringsR = `${penaltymatchiconc.length * 1}`;
         matchdetailbgw += brightnessM.length;
         brightnessM += `${malaysiaz.length | brightnessM.length}`;
         malaysiaz += `${parseInt(`${sorts}`)}`;
         lessz = [parseInt(`${sorts}`) / (Math.max(5, lessz.length))];
         if (tempK) {
            break;
         }
      } while ((!stringsR.endsWith(penaltymatchiconc)) && tempK);
       let weatherD = 5;
       let side8 = 1;
         penaltymatchiconc += `${penaltymatchiconc.length % 2}`;
      let iconviewergif_ = 5634745 <= penaltymatchiconc.length;
      do {
         penaltymatchiconc += "2";
         if (iconviewergif_) {
            break;
         }
      } while (((penaltymatchiconc.length | side8) > 4) && iconviewergif_);
      while (penaltymatchiconc == String.fromCharCode(89,0) && stringsR.length > 5) {
          let refreshborderlessJ = 5;
          let annerF = true;
         penaltymatchiconc += `${penaltymatchiconc.length >> (Math.min(Math.abs(1), 3))}`;
         refreshborderlessJ ^= 2;
         annerF = 61 <= refreshborderlessJ;
         break;
      }
          let guideE = 1.0;
         penaltymatchiconc += `${(stringsR == String.fromCharCode(116,0) ? penaltymatchiconc.length : stringsR.length)}`;
         guideE += parseFloat(`${parseInt(`${guideE}`) >> (Math.min(1, Math.abs(1)))}`);
      navigationl ^= (String.fromCharCode(95,0) == penaltymatchiconc ? penaltymatchiconc.length : large3);
      if (homeinactiveo) {
         break;
      }
   } while (homeinactiveo && (1.86 <= sportsK));
      navigationl |= completeG | 1;

    setResend(false);

   while ((3 << (Math.min(3, Math.abs(cleart.size)))) > 4) {
      large3 %= Math.max(4, 1);
      break;
   }
      completeG &= layoutR.size;
       let middlewarep = String.fromCharCode(117,118,97,114,105,110,116,95,102,95,52,57,0);
       let statisticsinactivev = true;
       let videobufferloadingV = 5.0;
         statisticsinactivev = !statisticsinactivev || videobufferloadingV == 42.28;
      for (let u = 0; u < 1; u++) {
         videobufferloadingV *= (parseFloat(`${(statisticsinactivev ? 3 : 4) & parseInt(`${videobufferloadingV}`)}`));
      }
         middlewarep = `${(parseInt(`${videobufferloadingV}`) % (Math.max(7, (statisticsinactivev ? 5 : 5))))}`;
      for (let s = 0; s < 2; s++) {
         videobufferloadingV /= Math.max(2, (parseFloat(`${parseInt(`${videobufferloadingV}`) % (Math.max(4, (statisticsinactivev ? 1 : 1)))}`)));
      }
      for (let a = 0; a < 2; a++) {
          let bing7 = 1.0;
         middlewarep += `${((statisticsinactivev ? 4 : 2) * middlewarep.length)}`;
         bing7 *= parseFloat(`${parseInt(`${bing7}`) % 1}`);
      }
      let chatroombackgroundP = statisticsinactivev ? !statisticsinactivev : statisticsinactivev;
      do {
          let userR = 2.0;
          let phoneshareV: Map<any, any> = new Map([[String.fromCharCode(106,95,53,52,95,101,110,116,101,114,101,100,0),String.fromCharCode(105,95,56,57,95,112,105,112,101,119,105,114,101,0)], [String.fromCharCode(99,109,105,111,95,110,95,49,52,0),String.fromCharCode(102,105,108,116,101,114,95,120,95,51,55,0)], [String.fromCharCode(118,115,102,114,97,109,101,95,111,95,55,54,0),String.fromCharCode(110,95,52,95,115,104,97,107,101,0)]]);
         statisticsinactivev = (middlewarep.length + parseInt(`${userR}`)) >= 55;
         userR -= 3;
         phoneshareV.set(`${phoneshareV.size}`, 2 % (Math.max(10, phoneshareV.size)));
         if (chatroombackgroundP) {
            break;
         }
      } while (chatroombackgroundP && (!statisticsinactivev || 1 > middlewarep.length));
         videobufferloadingV *= (parseFloat(`${(statisticsinactivev ? 3 : 4)}`));
         middlewarep += `${middlewarep.length}`;
      while (!statisticsinactivev) {
         videobufferloadingV *= parseFloat(`${1 + middlewarep.length}`);
         break;
      }
      layoutR = new Map([[greenarrowupH, greenarrowupH.length >> (Math.min(Math.abs(1), 2))]]);

    wawaEvent.signinupUser({
      loginType: email !== undefined ? 'EMAIL' : 'SMS',
      email: email,
      phone: phone,
      countryId: countryId,
      referralCode: referralCode,
      userId: userState.user?.userId ?? '',
    }).then(() => {

      greenarrowupH = `${large3 | 3}`;
   while (3 >= (2 | greenarrowupH.length)) {
       let inouttargetredz: Map<any, any> = new Map([[String.fromCharCode(105,115,122,101,114,111,95,115,95,50,0),314], [String.fromCharCode(122,95,54,56,95,111,112,117,115,108,97,99,105,110,103,0),336]]);
       let sideK = false;
       let path8: Array<any> = [547, 989];
      while (sideK) {
          let condensedA = String.fromCharCode(104,95,57,54,95,102,111,108,100,0);
          let watchnowbgG = 5.0;
         inouttargetredz.set(`${sideK}`, inouttargetredz.size);
         condensedA += `${parseInt(`${watchnowbgG}`)}`;
         watchnowbgG *= parseFloat(`${3 * parseInt(`${watchnowbgG}`)}`);
         break;
      }
      while (inouttargetredz.get(`${path8.length}`) == null) {
         path8 = [path8.length % 1];
         break;
      }
      for (let c = 0; c < 1; c++) {
         sideK = inouttargetredz.size == 66;
      }
         sideK = ((inouttargetredz.size - (sideK ? 19 : inouttargetredz.size)) > 19);
      for (let i = 0; i < 2; i++) {
         path8.push(1);
      }
       let cornershootM = 1.0;
       let executorj = 0.0;
       let matchdetailbgB = String.fromCharCode(115,117,98,99,99,95,111,95,49,53,0);
       let baseU = String.fromCharCode(122,111,111,109,101,100,95,118,95,49,56,0);
          let handlerC = String.fromCharCode(115,95,51,55,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0);
          let redirectq = 3;
         baseU = `${(handlerC == String.fromCharCode(110,0) ? (sideK ? 3 : 5) : handlerC.length)}`;
         redirectq /= Math.max(1, redirectq / (Math.max(redirectq, 4)));
         matchdetailbgB = `${(String.fromCharCode(115,0) == matchdetailbgB ? baseU.length : matchdetailbgB.length)}`;
      greenarrowupH = "2";
      break;
   }
   if (3 == navigationl) {
      navigationl /= Math.max(greenarrowupH.length, 4);
   }
      setOtpTextInput([]);

   if (greenarrowupH.length == predictionarrowp.length) {
      greenarrowupH += "2";
   }
   for (let a = 0; a < 2; a++) {
      greenarrowupH += `${parseInt(`${sportsK}`) | predictionarrowp.length}`;
   }
      predictionarrowp += `${cleart.size}`;
      setOtp('      ');

      predictionarrowp = `${layoutR.size / (Math.max(3, 6))}`;
      completeG <<= Math.min(3, Math.abs(2 & completeG));
   if (5 > (1 * completeG)) {
      completeG += cleart.size * layoutR.size;
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
