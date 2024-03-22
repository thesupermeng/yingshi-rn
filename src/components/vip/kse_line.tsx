

class LangkeyFrame_qtControlsUnlock {
    static internetReminderTaiwan = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useTheme } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import FastImage from 'react-native-fast-image';
import { zfModel } from "@type/m_splash";
import React from "react";

interface XFillButton {
  zfOption: zfModel,
  isSelected: boolean;
  onZfSelect: (zf: string) => void;
}

export const VipZf = ({
  zfOption,
  isSelected,
  onZfSelect,
}: XFillButton) => {
  const { textVariants, colors } = useTheme();
  const handleClick = () => {
       let whistle3 = String.fromCharCode(106,95,53,55,95,104,101,108,112,101,114,0);
    let downQ = String.fromCharCode(112,114,101,118,111,105,117,115,95,100,95,54,48,0);
    let configurex: Array<any> = [String.fromCharCode(99,111,100,101,95,111,95,49,49,0), String.fromCharCode(98,97,99,107,95,115,95,56,55,0)];
    let details6 = 3.0;
    let projectk = String.fromCharCode(97,95,51,50,95,99,108,105,112,115,0);
    let long_sng = 3.0;
    let splashk = String.fromCharCode(103,101,111,99,111,100,105,110,103,95,107,95,51,53,0);
    let blacklistA = 2.0;
    let serviceW = String.fromCharCode(113,95,51,49,95,104,97,108,102,108,116,117,105,110,116,0);
    let appleO: Array<any> = [String.fromCharCode(97,117,120,105,108,105,97,114,121,95,49,95,51,49,0), String.fromCharCode(99,104,97,114,97,99,116,101,114,115,95,119,95,56,50,0), String.fromCharCode(97,95,56,95,115,104,117,116,100,111,119,110,0)];
    let minimize3 = 5.0;
      projectk += `${3 | serviceW.length}`;
   let roomU = splashk == String.fromCharCode(105,56,118,115,113,97,55,100,0);
   do {
      splashk = `${whistle3.length / 1}`;
      if (roomU) {
         break;
      }
   } while (roomU && (downQ == String.fromCharCode(79,0)));
   let sharedZ = details6 >= 6817263.0;
   do {
       let downloaderZ = false;
       let fieldq = String.fromCharCode(101,95,53,56,95,97,99,99,114,117,101,100,0);
      if (!downloaderZ || 3 == fieldq.length) {
         downloaderZ = fieldq.length < 62;
      }
         downloaderZ = fieldq.length == 8 && downloaderZ;
         fieldq = `${((downloaderZ ? 3 : 5) ^ 3)}`;
         downloaderZ = ((fieldq.length - (!downloaderZ ? fieldq.length : 71)) == 71);
         downloaderZ = fieldq.length <= 98;
       let h_center8 = 4.0;
      details6 *= projectk.length;
      if (sharedZ) {
         break;
      }
   } while (((1 - downQ.length) <= 2 || 4.66 <= (downQ.length * details6)) && sharedZ);
   if (whistle3 == String.fromCharCode(77,0)) {
       let ajax3: Map<any, any> = new Map([[String.fromCharCode(117,115,101,99,95,107,95,51,0),396], [String.fromCharCode(118,95,54,95,109,111,114,101,0),277]]);
       let clubU: Array<any> = [66, 346, 529];
      for (let y = 0; y < 3; y++) {
         ajax3 = new Map([[`${ajax3.size}`, ajax3.size / 2]]);
      }
         ajax3.set(`${clubU.length}`, ajax3.size);
      while (1 <= (ajax3.size | 2) && 3 <= (clubU.length | 2)) {
          let sellM: Map<any, any> = new Map([[String.fromCharCode(99,104,117,110,107,95,50,95,53,51,0),857], [String.fromCharCode(109,95,54,50,95,100,105,118,105,100,101,114,0),203]]);
         clubU = [1 - ajax3.size];
         sellM.set(`${sellM.size}`, sellM.size << (Math.min(Math.abs(sellM.size), 1)));
         break;
      }
      for (let y = 0; y < 1; y++) {
          let gesturesH = String.fromCharCode(107,95,56,49,95,103,114,97,110,117,108,101,112,111,115,0);
         ajax3 = new Map([[`${clubU.length}`, clubU.length]]);
         gesturesH = `${gesturesH.length >> (Math.min(5, gesturesH.length))}`;
      }
      let progressm = 9805297 <= ajax3.size;
      do {
         ajax3 = new Map([[`${ajax3.size}`, ajax3.size << (Math.min(clubU.length, 1))]]);
         if (progressm) {
            break;
         }
      } while ((Array.from(ajax3.values()).includes(clubU.length)) && progressm);
          let shirtB = 3;
          let benefity = String.fromCharCode(100,101,99,105,112,104,101,114,95,49,95,51,52,0);
          let sortB = 3.0;
         clubU = [2];
         shirtB <<= Math.min(Math.abs(shirtB >> (Math.min(Math.abs(parseInt(`${sortB}`)), 1))), 2);
         benefity += `${1 >> (Math.min(2, Math.abs(parseInt(`${sortB}`))))}`;
      downQ += `${clubU.length}`;
   }
      downQ = "2";
   let brightnessp = 7780416 >= serviceW.length;
   do {
      serviceW = `${parseInt(`${details6}`)}`;
      if (brightnessp) {
         break;
      }
   } while ((serviceW != String.fromCharCode(98,0) || whistle3 == String.fromCharCode(99,0)) && brightnessp);
       let shareb = String.fromCharCode(117,95,52,55,95,101,108,101,118,97,116,101,100,0);
       let sinaq = 2.0;
       let vignetteB = 4.0;
      if (parseFloat(`${shareb.length}`) > sinaq) {
         sinaq /= Math.max(5, parseFloat(`${parseInt(`${vignetteB}`) - 1}`));
      }
          let reporti: Array<any> = [15, 379, 554];
          let modelsM = String.fromCharCode(115,122,97,98,111,95,53,95,57,49,0);
          let yellowq = 4.0;
         shareb = `${parseInt(`${yellowq}`) ^ shareb.length}`;
         reporti.push((modelsM == String.fromCharCode(66,0) ? reporti.length : modelsM.length));
         yellowq -= modelsM.length;
      if ((1 + parseInt(`${sinaq}`)) < 5 && 3 < (shareb.length << (Math.min(Math.abs(1), 4)))) {
         sinaq += parseFloat(`${2 * shareb.length}`);
      }
      for (let a = 0; a < 3; a++) {
         shareb += `${(String.fromCharCode(72,0) == shareb ? shareb.length : parseInt(`${sinaq}`))}`;
      }
      if ((5.11 + sinaq) > 5.38) {
         sinaq -= parseFloat(`${parseInt(`${vignetteB}`)}`);
      }
      let default_wC = shareb.length <= 7359898;
      do {
         shareb += `${parseInt(`${sinaq}`) / (Math.max(3, 4))}`;
         if (default_wC) {
            break;
         }
      } while (default_wC && ((4.86 - vignetteB) <= 5.50 || (4 ^ shareb.length) <= 4));
         sinaq += parseFloat(`${parseInt(`${vignetteB}`)}`);
       let nextn = String.fromCharCode(101,112,115,118,95,120,95,50,56,0);
       let resultS = String.fromCharCode(113,95,48,95,100,101,115,116,114,111,121,101,100,0);
      let spinnerg = nextn == String.fromCharCode(102,105,57,109,112,101,101,0);
      do {
          let scheduleR = String.fromCharCode(98,108,117,101,116,111,111,116,104,95,112,95,56,53,0);
          let ajaxl: Map<any, any> = new Map([[String.fromCharCode(100,105,110,101,114,115,95,104,95,57,48,0),String.fromCharCode(99,95,54,55,95,105,110,115,101,114,116,105,111,110,115,0)], [String.fromCharCode(103,101,116,116,105,109,101,95,105,95,49,48,48,0),String.fromCharCode(106,95,52,54,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0)]]);
          let privilegez: Array<any> = [92, 91];
         nextn += `${privilegez.length}`;
         scheduleR += "2";
         ajaxl.set(`${scheduleR}`, ajaxl.size >> (Math.min(Math.abs(2), 5)));
         privilegez = [(String.fromCharCode(49,0) == scheduleR ? scheduleR.length : ajaxl.size)];
         if (spinnerg) {
            break;
         }
      } while (spinnerg && ((4 % (Math.max(10, nextn.length))) < 1 || (4.31 - sinaq) < 1.95));
      projectk += `${3 - splashk.length}`;
      details6 -= appleO.length;
   while (downQ.includes(serviceW)) {
      serviceW = `${serviceW.length - whistle3.length}`;
      break;
   }
   if (4.21 >= (details6 + projectk.length)) {
       let episodez = String.fromCharCode(109,111,118,105,110,103,95,99,95,57,0);
       let sheetH = false;
       let constantsp = 5.0;
         episodez += `${episodez.length << (Math.min(Math.abs(3), 3))}`;
      while (!sheetH) {
         sheetH = !sheetH;
         break;
      }
         sheetH = 5 < episodez.length;
         sheetH = 12.22 >= constantsp;
      let context0 = 6913660.0 <= constantsp;
      do {
         constantsp /= Math.max(1, 3 * parseInt(`${constantsp}`));
         if (context0) {
            break;
         }
      } while ((constantsp == 2.77) && context0);
      while ((constantsp * episodez.length) == 4.34 && 5 == (parseInt(`${constantsp}`) * 4)) {
         constantsp += parseInt(`${constantsp}`) << (Math.min(2, Math.abs(3)));
         break;
      }
      for (let a = 0; a < 2; a++) {
         sheetH = episodez.includes(`${sheetH}`);
      }
      while ((constantsp - 1.76) == 3.90) {
          let miniJ = 4.0;
          let videob: Array<any> = [String.fromCharCode(99,108,97,122,122,95,109,95,53,50,0), String.fromCharCode(105,110,100,105,99,97,116,101,100,95,115,95,56,57,0), String.fromCharCode(119,104,105,116,101,115,112,97,99,101,95,112,95,54,0)];
          let indicatorE: Map<any, any> = new Map([[String.fromCharCode(116,95,53,56,95,99,97,108,108,111,99,0),false ], [String.fromCharCode(122,95,52,54,95,114,101,119,97,114,100,0),true ], [String.fromCharCode(100,106,112,101,103,95,56,95,49,54,0),false ]]);
          let injury0 = false;
         sheetH = (miniJ + parseFloat(`${videob.length}`)) == 72.87;
         miniJ -= parseFloat(`${indicatorE.size / 2}`);
         videob.push(2 - indicatorE.size);
         break;
      }
       let penaltyl = 3.0;
       let playlists = 2.0;
      details6 /= Math.max(4, 2 & downQ.length);
   }
      whistle3 += `${configurex.length}`;
   let streaming0 = 6235180.0 >= long_sng;
   do {
      long_sng /= Math.max(2, parseInt(`${details6}`) ^ whistle3.length);
      if (streaming0) {
         break;
      }
   } while (streaming0 && (5.38 > (long_sng - details6)));
      downQ = "1";
       let quest9 = String.fromCharCode(116,95,57,51,95,99,97,112,112,101,100,0);
       let commentI: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,108,101,115,115,95,49,95,56,57,0),816], [String.fromCharCode(119,95,50,56,95,119,101,98,109,100,101,99,0),100], [String.fromCharCode(114,95,52,54,95,97,114,109,111,110,121,0),678]]);
       let checkbox0 = String.fromCharCode(115,99,101,110,101,95,106,95,56,49,0);
         quest9 = `${3 | checkbox0.length}`;
      let annerd = 8509911 >= commentI.size;
      do {
         commentI.set(checkbox0, checkbox0.length);
         if (annerd) {
            break;
         }
      } while (annerd && ((4 >> (Math.min(3, Math.abs(commentI.size)))) == 5 && 5 == (4 >> (Math.min(5, Math.abs(commentI.size))))));
         quest9 += `${checkbox0.length & commentI.size}`;
         quest9 = `${quest9.length}`;
      if (!checkbox0.startsWith(`${commentI.size}`)) {
         checkbox0 = "3";
      }
       let scoreL = String.fromCharCode(101,97,103,101,114,95,99,95,55,55,0);
       let logoutX = String.fromCharCode(104,95,48,95,112,117,98,108,105,99,0);
      if ((checkbox0.length / (Math.max(2, commentI.size))) < 3 && 3 < (3 / (Math.max(4, checkbox0.length)))) {
         checkbox0 = `${commentI.size & checkbox0.length}`;
      }
         scoreL = `${quest9.length}`;
      let arrowy = 5404933 <= commentI.size;
      do {
         commentI.set(checkbox0, logoutX.length / 2);
         if (arrowy) {
            break;
         }
      } while (arrowy && ((2 << (Math.min(3, Math.abs(commentI.size)))) > 4 || 1 > (2 << (Math.min(4, Math.abs(commentI.size))))));
      downQ += `${parseInt(`${details6}`) % (Math.max(1, configurex.length))}`;
      configurex = [serviceW.length];
       let eighteenY = 2.0;
       let selectedq = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,50,95,51,56,0);
       let tooltipsX = 2;
         selectedq += `${selectedq.length}`;
          let moonT = String.fromCharCode(97,95,55,52,95,112,117,98,108,105,115,104,101,114,0);
          let uploadi = 3;
          let emojib: Map<any, any> = new Map([[String.fromCharCode(112,98,107,100,102,95,55,95,48,0),String.fromCharCode(105,110,112,117,116,116,101,109,95,108,95,51,49,0)], [String.fromCharCode(108,95,53,53,95,101,100,105,116,0),String.fromCharCode(114,95,54,57,95,115,116,114,110,99,97,115,101,99,109,112,0)]]);
         tooltipsX ^= 2;
         moonT += "3";
         uploadi &= moonT.length & emojib.size;
         emojib.set(`${uploadi}`, emojib.size >> (Math.min(4, Math.abs(uploadi))));
      for (let p = 0; p < 3; p++) {
         selectedq = `${selectedq.length - 2}`;
      }
         tooltipsX %= Math.max(1, 1);
         eighteenY -= parseFloat(`${parseInt(`${eighteenY}`) % 1}`);
      while (!selectedq.endsWith(`${eighteenY}`)) {
         selectedq += "3";
         break;
      }
      while (1.31 > (eighteenY * 4.37) && 3 > (selectedq.length & 4)) {
          let googley = false;
         selectedq = `${((googley ? 5 : 1) & parseInt(`${eighteenY}`))}`;
         break;
      }
          let anneru = false;
          let roboto6 = String.fromCharCode(97,95,52,51,95,97,99,107,110,111,119,108,101,100,103,101,0);
         tooltipsX -= 3 + selectedq.length;
         anneru = roboto6.length == 33;
         roboto6 = `${((anneru ? 3 : 4) & roboto6.length)}`;
      let emptyZ = selectedq == String.fromCharCode(106,54,102,55,117,107,106,0);
      do {
         selectedq += `${parseInt(`${eighteenY}`)}`;
         if (emptyZ) {
            break;
         }
      } while (emptyZ && ((4.58 * eighteenY) < 2.45));
      downQ += `${(String.fromCharCode(99,0) == projectk ? projectk.length : configurex.length)}`;
   while (4 >= configurex.length) {
      splashk += `${serviceW.length}`;
      break;
   }
       let typingt = String.fromCharCode(108,97,121,115,95,48,95,48,0);
         typingt = `${typingt.length}`;
      if (typingt.startsWith(typingt)) {
         typingt += `${3 & typingt.length}`;
      }
      let becomeF = 5263100 >= typingt.length;
      do {
          let yellowa: Array<any> = [165, 318, 10];
         typingt = `${yellowa.length / (Math.max(typingt.length, 3))}`;
         if (becomeF) {
            break;
         }
      } while (becomeF && (typingt.startsWith(`${typingt.length}`)));
      configurex.push(2 ^ configurex.length);

    onZfSelect(zfOption.payment_type_code);
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={isSelected ? ['#1D2023', '#2E3134'] : ['#1F2224', '#1F2224']}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderWidth: isSelected ? 2 : 0, 
          borderColor: '#BC9569', 
        }}>
        <View
          style={{
            gap: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            
          {zfOption.payment_type_icon.includes(LangkeyFrame_qtControlsUnlock.internetReminderTaiwan([-39,-59,-59,-63,-62,-117,-98,-98,-79],0xB1,false)) ? 
            <FastImage
              source={{uri: zfOption.payment_type_icon}}
              style={{ width: 40, height: 30, borderRadius: 5, }}
              resizeMode={"contain"}
            /> : 
            <FastImage
              source={require('@static/images/vip/dropdownScoreCustom.png')}
              style={{ width: 40, height: 30, borderRadius: 5, }}
              resizeMode={"contain"}
            />
          }
          
          <Text
            style={{ ...textVariants.bodyBold }}>
            {zfOption.payment_type_name}
          </Text>
        </View>
        {isSelected ?
          <View style={{ ...styles.outerBorder, borderColor: '#C8A275' }}>
            <View style={{ ...styles.innerCircle, backgroundColor: '#C8A275' }} />
          </View> : null
        }
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  outerBorder: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 6,
  }
})