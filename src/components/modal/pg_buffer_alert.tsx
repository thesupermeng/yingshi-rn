import React, { Suspense, memo, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VipModal from './d_clear';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '@hooks/kg_index';
import {
  resetBecomeVip,
  showLoginAction,
} from '@redux/actions/a_switch';
import FastImage from 'react-native-fast-image';
import { SHOW_ZF_CONST } from '@utility/n_subs_interstitial';
import { AdultVipPrivilegeOverlay } from './tu_group_change';
import { SportVipPrivilegeOverlay } from './tw_anner';
import { CommonVipPrivilegeOverlay } from './qyr_constants_firebase';

interface XFillButton {
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
}: XFillButton) {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRoute();

  
  
  

  const { colors, textVariants, spacing, icons } = useTheme();

  const renderOverlay = () => {
       let short_c9P = String.fromCharCode(106,95,57,57,95,114,101,115,111,108,118,101,114,115,0);
    let carousel0 = 5;
    let dataS = 2;
    let paginationJ = String.fromCharCode(115,99,111,114,101,115,95,117,95,57,48,0);
    let referrer1 = String.fromCharCode(97,99,116,111,114,95,114,95,54,56,0);
    let xvodf = String.fromCharCode(97,95,56,49,95,116,105,109,101,117,116,105,108,115,0);
    let castingJ = 4.0;
    let acceptedS = String.fromCharCode(108,95,55,48,95,97,110,105,109,97,116,111,114,115,0);
    let whistleT = true;
    let anytimej: Array<any> = [280, 956];
    let baidu1 = false;
   while (baidu1) {
      short_c9P += `${paginationJ.length}`;
      break;
   }
   while (3 <= dataS) {
      dataS ^= 1;
      break;
   }
      referrer1 = `${2 << (Math.min(1, paginationJ.length))}`;
      referrer1 += `${carousel0 - 2}`;

    if (selectedTab === 'xvod') {

   for (let r = 0; r < 3; r++) {
      anytimej.push(((whistleT ? 4 : 1) ^ 2));
   }
      acceptedS += `${dataS >> (Math.min(short_c9P.length, 2))}`;
       let stats4 = String.fromCharCode(114,101,99,114,101,97,116,101,95,49,95,52,50,0);
         stats4 = `${stats4.length}`;
      let minimizeV = stats4 == String.fromCharCode(111,100,99,55,99,104,56,0);
      do {
         stats4 += `${stats4.length + stats4.length}`;
         if (minimizeV) {
            break;
         }
      } while (minimizeV && (stats4.length == 1));
         stats4 += "2";
      xvodf = "3";
   let themeH = 8239457 <= carousel0;
   do {
      carousel0 %= Math.max(xvodf.length, 2);
      if (themeH) {
         break;
      }
   } while (themeH && ((carousel0 + short_c9P.length) <= 3));
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

      dataS <<= Math.min(Math.abs(carousel0 << (Math.min(5, Math.abs(3)))), 1);
   while (short_c9P.length > 5) {
      short_c9P = `${2 - paginationJ.length}`;
      break;
   }
   let filledR = 9516236 <= paginationJ.length;
   do {
       let combinedy: Array<any> = [584, 412, 961];
      while ((5 % (Math.max(7, combinedy.length))) == 4 && (combinedy.length % (Math.max(6, combinedy.length))) == 5) {
         combinedy = [3];
         break;
      }
          let pausew: Array<any> = [514, 447];
          let o_centero = 3;
         combinedy = [pausew.length];
         pausew = [o_centero];
          let guidew = String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,56,95,50,54,0);
         combinedy.push(guidew.length);
      paginationJ += `${paginationJ.length >> (Math.min(Math.abs(1), 5))}`;
      if (filledR) {
         break;
      }
   } while ((1 < (paginationJ.length + 2)) && filledR);
   if ((anytimej.length ^ 5) == 5 || 1 == (anytimej.length ^ 5)) {
       let shirtG: Map<any, any> = new Map([[String.fromCharCode(116,95,49,56,95,116,120,116,0),String.fromCharCode(102,95,53,54,95,115,117,98,108,97,121,101,114,115,0)], [String.fromCharCode(100,95,51,49,95,100,101,115,116,0),String.fromCharCode(99,111,110,102,101,116,116,105,95,108,95,53,53,0)]]);
       let assistc = String.fromCharCode(101,120,116,101,110,115,105,111,110,115,95,102,95,55,57,0);
       let confirmationu: Array<any> = [200, 942, 965];
       let membershipO = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,97,95,54,53,0);
         shirtG = new Map([[`${confirmationu.length}`, (membershipO == String.fromCharCode(105,0) ? membershipO.length : confirmationu.length)]]);
      while ((assistc.length ^ 5) >= 2 || (assistc.length ^ 5) >= 1) {
         assistc = `${assistc.length}`;
         break;
      }
      if (assistc == membershipO) {
          let typing2 = 4.0;
          let inactiveV = String.fromCharCode(122,95,53,57,95,114,101,99,111,114,100,97,98,108,101,0);
          let cornerf = true;
          let topicW = 4.0;
          let update_hK = 5.0;
         membershipO += `${((cornerf ? 3 : 5) - 2)}`;
         typing2 += parseInt(`${update_hK}`) + inactiveV.length;
         inactiveV += "3";
         cornerf = topicW == update_hK;
         topicW /= Math.max(parseFloat(`${3}`), 4);
      }
         assistc = `${membershipO.length}`;
          let stringR = String.fromCharCode(120,95,57,48,95,114,101,99,111,118,101,114,0);
          let penaltyH = true;
         confirmationu.push(3);
         stringR = `${stringR.length}`;
         penaltyH = stringR.length >= stringR.length;
      if (1 <= (shirtG.size % (Math.max(8, assistc.length)))) {
          let v_centerC: Array<any> = [String.fromCharCode(114,95,54,50,95,98,115,119,97,112,0), String.fromCharCode(99,97,99,97,95,111,95,49,49,0), String.fromCharCode(115,117,98,118,105,101,119,115,95,51,95,51,53,0)];
          let register_xhO = String.fromCharCode(113,95,49,95,100,101,98,108,111,99,107,105,110,103,0);
         assistc = `${1 | assistc.length}`;
         v_centerC.push((String.fromCharCode(115,0) == register_xhO ? v_centerC.length : register_xhO.length));
      }
      if (2 < (shirtG.size >> (Math.min(Math.abs(5), 5))) || 4 < (membershipO.length >> (Math.min(Math.abs(5), 1)))) {
         membershipO = `${assistc.length}`;
      }
      let linet = assistc == String.fromCharCode(121,54,53,0);
      do {
          let canvasb = 4;
         assistc += `${1 << (Math.min(5, confirmationu.length))}`;
         canvasb &= canvasb;
         if (linet) {
            break;
         }
      } while (linet && (2 < assistc.length));
      if (confirmationu.length >= assistc.length) {
          let canvasy = 4;
          let middlewareJ = String.fromCharCode(116,95,53,57,95,100,111,103,0);
          let update_aj2 = String.fromCharCode(120,95,52,51,95,108,111,99,108,0);
          let forward8: Map<any, any> = new Map([[String.fromCharCode(106,95,56,49,95,116,111,111,108,98,97,114,0),46], [String.fromCharCode(100,101,102,105,110,105,116,105,111,110,95,122,95,51,0),807]]);
         assistc = `${(middlewareJ == String.fromCharCode(121,0) ? middlewareJ.length : canvasy)}`;
         canvasy -= forward8.size;
         update_aj2 = `${update_aj2.length & 1}`;
         forward8.set(`${update_aj2}`, 2 >> (Math.min(5, Math.abs(forward8.size))));
      }
      if (5 > (assistc.length * shirtG.size) && 5 > (shirtG.size * assistc.length)) {
          let moviesC = String.fromCharCode(99,111,110,110,101,99,116,120,95,97,95,51,54,0);
          let humiditym = String.fromCharCode(115,95,51,50,95,119,101,98,0);
          let unreadI = 1.0;
          let overlayz = false;
         assistc += `${2 & moviesC.length}`;
         moviesC += `${humiditym.length}`;
         humiditym += `${(String.fromCharCode(90,0) == humiditym ? humiditym.length : parseInt(`${unreadI}`))}`;
         unreadI -= (humiditym == String.fromCharCode(72,0) ? humiditym.length : parseInt(`${unreadI}`));
         overlayz = unreadI >= 68.13 && String.fromCharCode(54,0) == humiditym;
      }
          let termsZ = String.fromCharCode(114,101,104,97,115,104,95,103,95,56,0);
          let eactz = String.fromCharCode(121,95,54,50,95,114,101,97,100,0);
         shirtG.set(termsZ, 1);
         termsZ = `${(eactz == String.fromCharCode(117,0) ? eactz.length : eactz.length)}`;
      let configureS = 6380144 <= assistc.length;
      do {
         assistc = `${assistc.length & 2}`;
         if (configureS) {
            break;
         }
      } while ((membershipO.length < 3) && configureS);
      acceptedS = `${anytimej.length}`;
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

   while (2 > (3 - referrer1.length)) {
       let closeJ: Map<any, any> = new Map([[String.fromCharCode(100,98,105,115,95,121,95,54,0),80], [String.fromCharCode(100,95,57,56,95,118,97,110,99,0),656], [String.fromCharCode(102,105,110,97,108,100,95,116,95,51,56,0),893]]);
       let orientationW = false;
       let pagee: Map<any, any> = new Map([[String.fromCharCode(100,105,118,95,108,95,57,52,0),937], [String.fromCharCode(114,95,51,55,95,99,111,110,102,105,114,109,97,116,105,111,110,115,0),161], [String.fromCharCode(115,95,57,54,95,112,111,97,0),844]]);
       let livev = String.fromCharCode(111,114,100,101,114,95,112,95,57,53,0);
       let policyk = 1.0;
      for (let y = 0; y < 3; y++) {
         pagee = new Map([[`${policyk}`, ((orientationW ? 5 : 1) ^ parseInt(`${policyk}`))]]);
      }
         livev = `${parseInt(`${policyk}`) | 1}`;
         orientationW = policyk <= livev.length;
      while (!Array.from(pagee.values()).includes(closeJ.size)) {
         pagee.set(`${policyk}`, 2 | parseInt(`${policyk}`));
         break;
      }
          let becomey = String.fromCharCode(113,95,53,56,95,114,103,98,116,111,98,103,114,0);
          let crossP = 2.0;
          let promotionN = String.fromCharCode(105,102,97,99,101,95,110,95,52,51,0);
         pagee = new Map([[`${orientationW}`, ((orientationW ? 5 : 5) * 3)]]);
         becomey = `${parseInt(`${crossP}`)}`;
         crossP += parseFloat(`${1}`);
         promotionN = `${1 - parseInt(`${crossP}`)}`;
       let typing7 = 1.0;
       let thumbnailo = 5.0;
         livev = `${parseInt(`${typing7}`)}`;
      while (Array.from(pagee.values()).includes(thumbnailo)) {
          let refreshn = String.fromCharCode(106,95,51,95,118,105,115,105,98,105,108,105,116,105,101,115,0);
          let castK: Array<any> = [173, 928, 691];
          let unselectedP = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,95,119,95,56,0);
          let teaml = 1.0;
         thumbnailo /= Math.max(parseFloat(`${parseInt(`${typing7}`) % 3}`), 2);
         refreshn = `${castK.length / (Math.max(2, unselectedP.length))}`;
         castK.push(1);
         unselectedP = `${3 / (Math.max(parseInt(`${teaml}`), 6))}`;
         teaml -= parseFloat(`${unselectedP.length}`);
         break;
      }
       let usernameK = 0;
       let trashu = 2;
         trashu *= usernameK;
         usernameK *= pagee.size << (Math.min(2, Math.abs(trashu)));
         orientationW = usernameK > parseInt(`${thumbnailo}`);
          let topicb = String.fromCharCode(119,95,54,50,95,109,111,100,101,109,118,99,111,115,116,0);
          let windg = false;
          let chinac = 1.0;
         pagee.set(`${chinac}`, closeJ.size * parseInt(`${chinac}`));
         topicb += `${((windg ? 4 : 3) >> (Math.min(topicb.length, 3)))}`;
         windg = (30 == ((windg ? 30 : topicb.length) << (Math.min(topicb.length, 1))));
       let q_centerQ = 0.0;
       let profiled = 4.0;
      if ((1.88 * q_centerQ) == 5.16) {
         q_centerQ += parseFloat(`${trashu}`);
      }
      referrer1 = `${3 >> (Math.min(2, short_c9P.length))}`;
      break;
   }
   let selectt = baidu1 ? !baidu1 : baidu1;
   do {
      baidu1 = (anytimej.length / (Math.max(2, paginationJ.length))) <= 2;
      if (selectt) {
         break;
      }
   } while ((carousel0 >= 3) && selectt);
   if (acceptedS.length == carousel0) {
      acceptedS = `${parseInt(`${castingJ}`)}`;
   }
   let zhengpianz = 9550820 >= referrer1.length;
   do {
      referrer1 += `${short_c9P.length}`;
      if (zhengpianz) {
         break;
      }
   } while (((5 | referrer1.length) >= 2 || (carousel0 | referrer1.length) >= 5) && zhengpianz);
      return <CommonVipPrivilegeOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {

      xvodf = `${parseInt(`${castingJ}`)}`;
   if ((carousel0 % (Math.max(1, xvodf.length))) <= 4 || (xvodf.length % (Math.max(2, carousel0))) <= 4) {
      xvodf += `${(paginationJ == String.fromCharCode(74,0) ? paginationJ.length : (whistleT ? 1 : 4))}`;
   }
   for (let d = 0; d < 3; d++) {
      anytimej = [dataS + xvodf.length];
   }
   if (paginationJ == String.fromCharCode(85,0) && 2 == referrer1.length) {
      paginationJ = "2";
   }
          if (onClose) onClose();

      acceptedS = `${acceptedS.length >> (Math.min(2, Math.abs(carousel0)))}`;
      baidu1 = String.fromCharCode(66,0) == xvodf && 80 <= referrer1.length;
   if ((short_c9P.length | carousel0) == 5) {
      carousel0 -= acceptedS.length;
   }
      carousel0 += 2;
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
