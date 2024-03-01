import React, { Suspense, memo, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VipModal from './yys_topic_gdtadv';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '@hooks/yys_frame';
import {
  resetBecomeVip,
  showLoginAction,
} from '@redux/actions/yys_runtimescheduler';
import FastImage from 'react-native-fast-image';
import { SHOW_ZF_CONST } from '@utility/yys_ajax_switch';
import { AdultVipPrivilegeOverlay } from './yys_kick';
import { SportVipPrivilegeOverlay } from './yys_libjsi_area';
import { CommonVipPrivilegeOverlay } from './yys_network';

interface yys_ConfigureUimanager {
  showBecomeVIPOverlay: boolean;
  setShowBecomeVIPOverlay: any;
  isJustClose?: boolean;
  selectedTab: 'sport' | 'xvod' | 'common',
  onClose?: () => void,
}

function ExpiredOverlay({
  showBecomeVIPOverlay = false,
  setShowBecomeVIPOverlay,
  isJustClose,
  selectedTab,
  onClose,
}: yys_ConfigureUimanager) {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRoute();

  
  
  

  const { colors, textVariants, spacing, icons } = useTheme();

  const renderOverlay = () => {
       let hoverK = 3;
    let pingr = 1.0;
    let whistleF = false;
    let libswresampley = String.fromCharCode(115,104,105,112,112,105,110,103,0);
    let reminder2: Array<any> = [String.fromCharCode(114,111,117,110,100,101,100,0), String.fromCharCode(119,101,98,109,105,100,115,0), String.fromCharCode(105,110,116,101,114,110,97,108,0)];
    let pauseF = String.fromCharCode(100,97,97,108,97,0);
    let promotionx = String.fromCharCode(117,110,100,101,114,114,117,110,0);
    let dycreatorP: Map<any, any> = new Map([[String.fromCharCode(97,102,102,101,99,116,0),true ], [String.fromCharCode(98,105,116,100,101,112,116,104,0),false ], [String.fromCharCode(102,114,111,110,116,0),false ]]);
    let annerr = 1.0;
    let specs = 5.0;
   let shootO = dycreatorP.size >= 5474768;
   do {
      dycreatorP = new Map([[`${annerr}`, parseInt(`${annerr}`) | promotionx.length]]);
      if (shootO) {
         break;
      }
   } while ((promotionx.length > dycreatorP.size) && shootO);
   while (1 <= (parseInt(`${pingr}`) - hoverK) || (hoverK >> (Math.min(Math.abs(1), 5))) <= 2) {
      hoverK *= ((whistleF ? 4 : 4));
      break;
   }
       let langkeyR = String.fromCharCode(99,97,115,116,101,100,0);
       let grayW = 0.0;
          let actionsr: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,117,98,109,105,116,0),String.fromCharCode(117,105,111,109,111,118,101,0)], [String.fromCharCode(117,110,112,105,110,110,101,100,0),String.fromCharCode(115,117,98,118,97,108,117,101,0)]]);
          let zhengpianW = 3.0;
          let sigmoba = 5.0;
         langkeyR += `${parseInt(`${grayW}`) - 1}`;
         actionsr.set(`${zhengpianW}`, actionsr.size % (Math.max(5, parseInt(`${zhengpianW}`))));
         sigmoba += parseFloat(`${parseInt(`${zhengpianW}`)}`);
          let scrollview_ = 4.0;
          let mbnativeadvancedz = 0.0;
          let codegenz = 4;
         grayW -= parseInt(`${mbnativeadvancedz}`) >> (Math.min(Math.abs(2), 2));
         scrollview_ *= parseFloat(`${codegenz}`);
         mbnativeadvancedz *= parseFloat(`${codegenz ^ parseInt(`${scrollview_}`)}`);
      if (4 >= (langkeyR.length * 2) || (parseInt(`${grayW}`) * 2) >= 5) {
          let filterG: Map<any, any> = new Map([[String.fromCharCode(97,108,105,103,110,105,110,103,0),24], [String.fromCharCode(118,97,114,121,0),620]]);
          let bingj = 2.0;
          let whatsappU = 2.0;
         langkeyR = `${filterG.size << (Math.min(3, Math.abs(parseInt(`${bingj}`))))}`;
         filterG = new Map([[`${whatsappU}`, 1 / (Math.max(parseInt(`${whatsappU}`), 6))]]);
         bingj /= Math.max(4, parseInt(`${whatsappU}`));
      }
         grayW /= Math.max(2, parseInt(`${grayW}`));
      if (1 == langkeyR.length) {
         grayW += parseInt(`${grayW}`) / (Math.max(2, 1));
      }
      for (let l = 0; l < 2; l++) {
          let sigmob7: Map<any, any> = new Map([[String.fromCharCode(109,105,110,102,0),String.fromCharCode(101,100,105,116,95,97,95,57,55,0)], [String.fromCharCode(98,101,115,115,101,108,0),String.fromCharCode(115,117,98,112,97,121,108,111,97,100,0)]]);
          let dycreatorL = String.fromCharCode(108,105,98,118,112,120,0);
         langkeyR += `${dycreatorL.length}`;
         sigmob7.set(`${sigmob7.size}`, sigmob7.size - 1);
         dycreatorL += `${sigmob7.size}`;
      }
      pauseF += `${libswresampley.length}`;
   let libfabricjniU = hoverK <= 5124896;
   do {
      hoverK %= Math.max(5, promotionx.length + hoverK);
      if (libfabricjniU) {
         break;
      }
   } while (libfabricjniU && (2 >= (2 + hoverK) && 2 >= hoverK));

    if (selectedTab === 'xvod') {

       let checkboxo = false;
         checkboxo = (checkboxo ? !checkboxo : checkboxo);
       let indexm = true;
          let videoS = String.fromCharCode(98,111,117,110,99,105,110,103,0);
          let fastforward4: Array<any> = [String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,115,95,50,51,0), String.fromCharCode(102,95,57,53,95,115,112,105,108,108,0)];
          let whistleA = 1.0;
         indexm = indexm || fastforward4.length >= 96;
         videoS = "1";
         fastforward4.push(parseInt(`${whistleA}`) ^ videoS.length);
         whistleA -= parseFloat(`${parseInt(`${whistleA}`) * videoS.length}`);
      annerr -= hoverK;
   while (libswresampley.length > 4) {
      whistleF = (pingr - parseFloat(`${libswresampley.length}`)) > 53.49;
      break;
   }
   while ((2.30 - annerr) < 5.77) {
      hoverK *= promotionx.length;
      break;
   }
      dycreatorP.set(`${hoverK}`, hoverK);
      return (
        <AdultVipPrivilegeOverlay
          showCondition={showBecomeVIPOverlay}
          onClose={() => {
            if (onClose) onClose();
            setShowBecomeVIPOverlay(false);
          }}
        />
      );
    } else if (selectedTab === 'sport') {

       let libavformatE: Array<any> = [String.fromCharCode(114,105,110,103,98,97,99,107,95,122,95,53,53,0), String.fromCharCode(101,110,113,117,101,117,101,0)];
      while (1 > libavformatE.length) {
         libavformatE.push(libavformatE.length);
         break;
      }
          let searchc = String.fromCharCode(101,110,116,114,121,0);
          let listK = String.fromCharCode(112,117,98,108,105,99,105,116,121,0);
          let foreground1 = String.fromCharCode(115,108,97,118,101,115,0);
         libavformatE.push(3);
         searchc = `${3 & listK.length}`;
         listK += "1";
         foreground1 = `${listK.length}`;
      let orangeT = 7902933 <= libavformatE.length;
      do {
          let product9: Array<any> = [72, 57];
          let relatedi = String.fromCharCode(112,114,101,115,101,110,116,97,98,108,101,0);
          let fastforwardQ = String.fromCharCode(109,97,112,112,101,114,0);
          let bootsplashh = String.fromCharCode(108,105,110,101,115,0);
          let delegate_q8n = 4.0;
         libavformatE = [3];
         product9 = [3];
         relatedi = `${bootsplashh.length - 3}`;
         fastforwardQ = `${product9.length >> (Math.min(Math.abs(2), 2))}`;
         bootsplashh += `${product9.length}`;
         delegate_q8n /= Math.max(4, (parseFloat(`${bootsplashh == String.fromCharCode(83,0) ? bootsplashh.length : parseInt(`${delegate_q8n}`)}`)));
         if (orangeT) {
            break;
         }
      } while ((libavformatE.includes(libavformatE.length)) && orangeT);
      pauseF = `${libswresampley.length}`;
   while (hoverK > 4) {
      libswresampley = `${((whistleF ? 4 : 5))}`;
      break;
   }
      pingr += parseFloat(`${1}`);
   while (5.19 == (pingr + 5.52) && (pingr + 5.52) == 2.10) {
      pingr *= parseFloat(`${1}`);
      break;
   }
      return (
        <SportVipPrivilegeOverlay
          showCondition={showBecomeVIPOverlay}
          onClose={({ isAutoClose }) => {
            if (!isAutoClose && onClose) onClose();
            setShowBecomeVIPOverlay(false);
          }}
        />
      );
    } else if (selectedTab === 'common') {

       let stationu = String.fromCharCode(108,109,108,109,95,52,95,50,55,0);
         stationu = `${2 | stationu.length}`;
       let libjsiq = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,0);
      for (let d = 0; d < 2; d++) {
         libjsiq += `${libjsiq.length}`;
      }
      whistleF = 27 > pauseF.length;
   let scorea = pauseF == String.fromCharCode(106,111,105,120,56,110,97,99,97,115,0);
   do {
      pauseF = `${dycreatorP.size}`;
      if (scorea) {
         break;
      }
   } while (((1 & hoverK) > 5 || (pauseF.length & 1) > 3) && scorea);
   let mappingk = 9782878 >= hoverK;
   do {
      hoverK /= Math.max((libswresampley == String.fromCharCode(81,0) ? libswresampley.length : hoverK), 4);
      if (mappingk) {
         break;
      }
   } while (mappingk && (4 == hoverK));
   while (annerr > libswresampley.length) {
      libswresampley += `${dycreatorP.size << (Math.min(4, Math.abs(parseInt(`${annerr}`))))}`;
      break;
   }
      return <CommonVipPrivilegeOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {

       let sharef = 5.0;
      for (let i = 0; i < 3; i++) {
          let expiredw = false;
          let darkp = 5;
          let notificationr = 2.0;
         sharef /= Math.max(((expiredw ? 1 : 5) << (Math.min(Math.abs(parseInt(`${notificationr}`)), 4))), 1);
         expiredw = 38 > darkp;
         darkp |= darkp;
      }
      for (let i = 0; i < 2; i++) {
         sharef += parseInt(`${sharef}`);
      }
          let nativeexz = 3.0;
          let filee = 2.0;
          let dangerc = String.fromCharCode(97,115,107,105,110,103,0);
         sharef *= parseInt(`${nativeexz}`);
         filee += (String.fromCharCode(113,0) == dangerc ? dangerc.length : parseInt(`${filee}`));
      dycreatorP = new Map([[`${dycreatorP.size}`, pauseF.length]]);
       let statsC: Array<any> = [662, 862];
       let darkV = String.fromCharCode(117,110,109,117,116,101,0);
       let alertZ = String.fromCharCode(98,114,105,100,103,101,100,0);
      let shared6 = 5377596 <= darkV.length;
      do {
          let completea = false;
         darkV = `${((completea ? 1 : 1) / (Math.max(alertZ.length, 2)))}`;
         if (shared6) {
            break;
         }
      } while ((alertZ == darkV) && shared6);
         alertZ = `${statsC.length}`;
      while ((2 | darkV.length) == 5) {
         statsC = [3 >> (Math.min(5, darkV.length))];
         break;
      }
      for (let p = 0; p < 1; p++) {
         darkV += `${2 >> (Math.min(4, statsC.length))}`;
      }
       let redirect8 = String.fromCharCode(118,111,116,101,115,95,121,95,49,48,0);
          let modityI = String.fromCharCode(112,97,99,107,97,103,101,100,0);
          let main_sh = 2;
          let activew = String.fromCharCode(103,114,101,103,0);
         statsC = [statsC.length];
         modityI = "1";
         main_sh /= Math.max(3, 3);
         activew += `${main_sh | 1}`;
          let activeR: Map<any, any> = new Map([[String.fromCharCode(114,101,105,115,115,117,101,95,113,95,49,51,0),true ], [String.fromCharCode(97,108,108,111,99,122,0),true ]]);
         alertZ = "1";
         activeR.set(`${activeR.size}`, activeR.size);
          let nalyticsJ = 3.0;
          let bridge7 = 1.0;
          let league3 = 1;
         statsC.push(1 + darkV.length);
         nalyticsJ /= Math.max(parseFloat(`${1 | parseInt(`${nalyticsJ}`)}`), 2);
         bridge7 /= Math.max(parseInt(`${nalyticsJ}`) - parseInt(`${bridge7}`), 1);
         league3 += parseInt(`${nalyticsJ}`);
      let nterstitialr = darkV == String.fromCharCode(117,100,113,102,120,0);
      do {
          let refreshE = String.fromCharCode(99,108,97,115,115,105,99,0);
          let libreactperfloggerjni8 = String.fromCharCode(98,101,103,117,110,0);
         darkV += `${(String.fromCharCode(49,0) == libreactperfloggerjni8 ? libreactperfloggerjni8.length : darkV.length)}`;
         refreshE = `${refreshE.length & 2}`;
         if (nterstitialr) {
            break;
         }
      } while (nterstitialr && (2 <= (5 & darkV.length) && 4 <= (darkV.length & 5)));
      dycreatorP = new Map([[`${hoverK}`, 2 * pauseF.length]]);
      whistleF = !whistleF;
      libswresampley += `${2 % (Math.max(3, parseInt(`${pingr}`)))}`;
          if (onClose) onClose();

   if (annerr > 5.77) {
      pingr /= Math.max(2, parseFloat(`${promotionx.length}`));
   }
   let libpangleflippedm = 8765527.0 <= pingr;
   do {
       let selln: Array<any> = [86, 439];
         selln = [selln.length];
         selln = [selln.length ^ 3];
         selln.push(3);
      pingr /= Math.max(parseFloat(`${pauseF.length + reminder2.length}`), 2);
      if (libpangleflippedm) {
         break;
      }
   } while ((libswresampley.endsWith(`${pingr}`)) && libpangleflippedm);
   let gpayy = pingr <= 7200797.0;
   do {
       let vietnams = 3;
         vietnams %= Math.max(vietnams, 3);
          let models6 = String.fromCharCode(99,117,114,116,97,105,110,115,0);
          let minivod5 = 0.0;
          let with_wl: Map<any, any> = new Map([[String.fromCharCode(117,110,97,108,105,103,110,0),445], [String.fromCharCode(102,105,108,109,0),959]]);
         vietnams ^= with_wl.size ^ parseInt(`${minivod5}`);
         models6 = `${models6.length ^ 3}`;
         minivod5 -= (parseFloat(`${models6 == String.fromCharCode(84,0) ? models6.length : models6.length}`));
      if (4 == (vietnams & vietnams)) {
          let scores: Array<any> = [654, 249, 324];
         vietnams ^= 1;
         scores.push(2);
      }
      pingr *= parseFloat(`${libswresampley.length << (Math.min(Math.abs(3), 2))}`);
      if (gpayy) {
         break;
      }
   } while (gpayy && (1 < hoverK));
   let hooka = 7632399 <= reminder2.length;
   do {
      reminder2 = [2 & pauseF.length];
      if (hooka) {
         break;
      }
   } while (hooka && (5 < (pauseF.length | reminder2.length) && (5 | reminder2.length) < 1));
          setShowBecomeVIPOverlay(false);
        }}
      />
    }
  };


  return (
    <>
      {showBecomeVIPOverlay && (
        <View
          style={{
            height: '100%',
            width: '100%',
            
            position: 'absolute',
            zIndex: 1000,
          }}>
          {renderOverlay()}
        </View>
      )}
    </>
  );
}

export default ExpiredOverlay

const styles = StyleSheet.create({
  closeBtnContainer: {
    height: 20,
    width: 20,
    marginTop: -20,
    marginRight: -10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(201, 201, 201, 0.3)',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
    paddingTop: 25,
    paddingBottom: 10,
  },

  btn: {
    backgroundColor: '#FAC33D',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  }
})
