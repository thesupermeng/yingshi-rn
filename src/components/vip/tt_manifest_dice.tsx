

class FastforwardKuaishouPaginationW {
    static redirectReact = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { zfModel } from "@type/tt_combined_application";
import React from "react";

interface ttSmall {
  zfOption: zfModel,
  isSelected: boolean;
  onZfSelect: (zf: string) => void;
}

export const VipZf = ({
  zfOption,
  isSelected,
  onZfSelect,
}: ttSmall) => {
  const { textVariants, colors } = useTheme();
  const handleClick = () => {
       let clear0 = 4;
    let sourceO: Array<any> = [639, 20, 754];
    let recommendationZ = 0.0;
    let fillT: Map<any, any> = new Map([[String.fromCharCode(112,117,108,115,101,95,114,95,57,57,0),true ], [String.fromCharCode(114,95,51,53,95,118,105,98,114,97,116,101,0),true ]]);
    let singaporeM = 5.0;
    let brightnessC = 4.0;
    let notification0 = 3;
    let linea = 5;
    let huaweif = 4.0;
    let userF = String.fromCharCode(107,95,54,55,95,108,111,103,0);
    let p_titleG = String.fromCharCode(122,95,49,53,95,109,102,113,101,0);
    let utilsF = String.fromCharCode(111,98,115,101,114,118,101,114,0);
      clear0 += notification0 % 1;
       let basketballf: Map<any, any> = new Map([[String.fromCharCode(114,109,115,116,114,101,97,109,95,108,95,55,50,0),false ], [String.fromCharCode(112,95,49,48,48,95,112,111,108,113,97,0),false ]]);
          let placeholderk = 5.0;
          let chinai = String.fromCharCode(99,95,56,95,112,111,112,117,108,97,114,0);
          let blackp = 2;
         basketballf = new Map([[`${basketballf.size}`, 1]]);
         placeholderk /= Math.max(1, parseFloat(`${blackp - 3}`));
         chinai += "3";
         blackp &= blackp * chinai.length;
      for (let s = 0; s < 3; s++) {
          let dropdowne = 5;
         basketballf = new Map([[`${basketballf.size}`, dropdowne]]);
      }
         basketballf = new Map([[`${basketballf.size}`, 2]]);
      sourceO = [notification0];
       let infos: Map<any, any> = new Map([[String.fromCharCode(109,95,56,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0),true ], [String.fromCharCode(104,95,52,56,95,99,104,101,99,107,109,97,114,107,115,0),false ]]);
       let mbbidU = 3;
          let scheduleH = String.fromCharCode(102,95,57,55,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0);
          let darkI = 0;
         mbbidU >>= Math.min(Math.abs((String.fromCharCode(54,0) == scheduleH ? infos.size : scheduleH.length)), 2);
         darkI *= darkI & 2;
      for (let u = 0; u < 2; u++) {
          let watchG = String.fromCharCode(99,97,108,101,110,100,97,114,0);
          let telegramB = String.fromCharCode(117,95,57,54,95,111,112,101,114,97,110,100,0);
          let activityh: Array<any> = [709, 681, 175];
          let benefitR: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,95,100,95,52,54,0),266], [String.fromCharCode(112,117,112,117,112,0),688]]);
         mbbidU *= 3 * telegramB.length;
         watchG += `${activityh.length / (Math.max(watchG.length, 3))}`;
         telegramB += `${benefitR.size + 2}`;
         activityh.push(1);
         benefitR = new Map([[`${benefitR.size}`, activityh.length - 2]]);
      }
         mbbidU /= Math.max(5, 3);
       let annerE = false;
         mbbidU <<= Math.min(5, Math.abs(infos.size >> (Math.min(Math.abs(2), 1))));
         mbbidU %= Math.max(1, 3 % (Math.max(5, mbbidU)));
      singaporeM += linea >> (Math.min(Math.abs(3), 5));
       let renewB = String.fromCharCode(120,117,118,109,118,115,95,102,95,49,57,0);
       let otherO = false;
      if (!renewB.endsWith(`${otherO}`)) {
         renewB = `${((otherO ? 1 : 2))}`;
      }
          let resultr: Array<any> = [572, 466, 235];
         renewB = `${renewB.length}`;
         resultr = [resultr.length];
      let package_r8o = renewB == String.fromCharCode(95,105,48,103,108,114,114,107,50,101,0);
      do {
         renewB = "2";
         if (package_r8o) {
            break;
         }
      } while (package_r8o && (!otherO));
         renewB += `${renewB.length / 1}`;
       let renewj = String.fromCharCode(114,101,115,97,109,112,108,101,95,54,95,49,51,0);
       let gifty = String.fromCharCode(99,111,114,110,101,114,95,107,95,55,48,0);
       let type_91y: Map<any, any> = new Map([[String.fromCharCode(108,111,111,112,98,114,101,97,107,95,114,95,55,49,0),854], [String.fromCharCode(100,116,115,104,100,95,108,95,53,0),903], [String.fromCharCode(115,99,114,111,108,108,0),419]]);
      p_titleG += "3";
      linea <<= Math.min(4, Math.abs(parseInt(`${brightnessC}`)));
   let controlsh = userF.length <= 7355946;
   do {
      userF += `${parseInt(`${huaweif}`) % 3}`;
      if (controlsh) {
         break;
      }
   } while (controlsh && (userF.endsWith(`${notification0}`)));
      singaporeM /= Math.max(fillT.size, 4);
   let sliderE = 8998462.0 >= singaporeM;
   do {
      singaporeM += 3 >> (Math.min(5, Math.abs(notification0)));
      if (sliderE) {
         break;
      }
   } while (sliderE && ((singaporeM - 2.61) > 2.71 || 5.98 > (2.61 * huaweif)));
   for (let v = 0; v < 3; v++) {
      singaporeM += fillT.size - 2;
   }
      recommendationZ -= parseFloat(`${parseInt(`${brightnessC}`)}`);
      linea += (userF == String.fromCharCode(74,0) ? clear0 : userF.length);
       let downloaded4 = 4.0;
       let rules4: Map<any, any> = new Map([[String.fromCharCode(114,101,118,111,107,101,0),String.fromCharCode(112,95,49,95,115,116,114,110,115,116,114,0)], [String.fromCharCode(98,95,55,51,95,102,119,104,116,120,0),String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,105,95,57,0)]]);
       let twitterr = String.fromCharCode(102,95,49,48,48,95,110,105,100,99,98,98,0);
          let commentM = 4;
          let sharedI = 4.0;
         twitterr += `${commentM}`;
         commentM <<= Math.min(Math.abs(3 & parseInt(`${sharedI}`)), 3);
         sharedI += 1;
      if (downloaded4 < 2.94) {
         twitterr += `${rules4.size}`;
      }
       let gestureX: Array<any> = [String.fromCharCode(112,95,51,50,95,112,105,118,111,116,0), String.fromCharCode(108,95,54,95,114,97,110,103,101,115,0), String.fromCharCode(97,95,57,52,95,115,99,97,110,105,110,100,101,120,0)];
      while ((5.45 / (Math.max(8, downloaded4))) == 5.46 || (rules4.size & 4) == 1) {
          let rulesT = 2;
         downloaded4 *= parseFloat(`${rulesT % (Math.max(parseInt(`${downloaded4}`), 6))}`);
         break;
      }
         gestureX.push((String.fromCharCode(106,0) == twitterr ? twitterr.length : rules4.size));
      if ((gestureX.length % 2) <= 1 && 1.77 <= (downloaded4 * 2.15)) {
         gestureX = [rules4.size];
      }
          let handlerY = String.fromCharCode(101,95,57,55,0);
          let greeni = true;
         rules4 = new Map([[`${greeni}`, ((greeni ? 2 : 2))]]);
         handlerY += `${handlerY.length}`;
      let kickM = rules4.size <= 8370418;
      do {
          let blackh = false;
          let reward7 = 1.0;
          let tumbnailb = String.fromCharCode(118,95,57,48,95,115,121,110,116,104,101,115,105,122,101,100,0);
          let rewardx = 0.0;
         rules4 = new Map([[`${blackh}`, parseInt(`${rewardx}`) << (Math.min(1, Math.abs(3)))]]);
         blackh = tumbnailb.length == parseInt(`${reward7}`);
         reward7 /= Math.max((String.fromCharCode(76,0) == tumbnailb ? tumbnailb.length : parseInt(`${reward7}`)), 4);
         rewardx /= Math.max(3 | parseInt(`${reward7}`), 5);
         if (kickM) {
            break;
         }
      } while (kickM && ((3.100 * downloaded4) > 1.98));
      for (let n = 0; n < 1; n++) {
         rules4 = new Map([[`${gestureX.length}`, (String.fromCharCode(51,0) == twitterr ? twitterr.length : gestureX.length)]]);
      }
      userF += "3";
       let recommendationB = false;
          let photoH = String.fromCharCode(114,101,102,112,97,115,115,95,98,95,53,55,0);
          let successI = true;
         recommendationB = successI;
         photoH = `${photoH.length ^ photoH.length}`;
       let untick7 = String.fromCharCode(109,97,115,116,101,114,105,110,103,95,115,95,57,57,0);
         recommendationB = untick7.startsWith(`${recommendationB}`);
      clear0 >>= Math.min(2, p_titleG.length);
   for (let n = 0; n < 2; n++) {
       let actionst = String.fromCharCode(105,95,52,57,95,99,117,108,102,114,101,113,0);
       let mathc = 5;
      while (4 >= (2 + actionst.length)) {
         mathc *= 1 << (Math.min(3, actionst.length));
         break;
      }
      for (let d = 0; d < 3; d++) {
         actionst += `${(String.fromCharCode(119,0) == actionst ? mathc : actionst.length)}`;
      }
         actionst += `${(actionst == String.fromCharCode(81,0) ? mathc : actionst.length)}`;
      while ((mathc / 4) <= 3 && 1 <= (actionst.length / 4)) {
         actionst += `${mathc % 3}`;
         break;
      }
       let foundo = String.fromCharCode(109,101,97,110,95,108,95,52,56,0);
       let reducero = String.fromCharCode(113,95,50,57,95,110,111,109,101,109,0);
         actionst += `${(String.fromCharCode(105,0) == reducero ? reducero.length : foundo.length)}`;
      clear0 *= linea;
   }
      userF = "2";
   if ((notification0 * 5) < 5) {
      huaweif -= 1;
   }
      huaweif -= parseInt(`${recommendationZ}`);
   let assist0 = clear0 >= 7320952;
   do {
      clear0 += linea;
      if (assist0) {
         break;
      }
   } while ((3 == (5 - linea) && 4 == (linea - 5)) && assist0);
      utilsF += `${clear0}`;
   let otherx = 9823147.0 <= brightnessC;
   do {
       let shrink9 = 3.0;
       let langkeyp = 2;
       let langkeyM = 0;
       let projectD = 5.0;
          let backA = 1.0;
          let controlR = String.fromCharCode(100,105,115,112,95,49,95,52,53,0);
         langkeyp *= 2 & langkeyM;
         backA /= Math.max(1, controlR.length);
         controlR = `${1 % (Math.max(8, controlR.length))}`;
      for (let e = 0; e < 2; e++) {
          let megaphoneI = String.fromCharCode(115,117,98,109,105,116,116,101,100,0);
          let linkM = String.fromCharCode(120,105,110,103,95,53,95,50,54,0);
         shrink9 *= parseFloat(`${megaphoneI.length}`);
         megaphoneI += `${linkM.length}`;
         linkM = "3";
      }
      while (1.91 > (1.97 * projectD)) {
         projectD /= Math.max(parseFloat(`${langkeyp % 2}`), 5);
         break;
      }
          let untickb: Map<any, any> = new Map([[String.fromCharCode(118,95,57,50,95,116,114,97,110,115,108,97,116,105,111,110,0),532], [String.fromCharCode(121,117,118,112,116,111,121,117,121,95,54,95,55,50,0),5]]);
         shrink9 += parseFloat(`${parseInt(`${shrink9}`) + 2}`);
         untickb = new Map([[`${untickb.size}`, untickb.size / 3]]);
       let turn4 = 4.0;
       let crossF = 0.0;
       let singleL = 5;
       let sellF = 0;
       let string2: Array<any> = [396, 215];
      for (let x = 0; x < 1; x++) {
         crossF -= singleL;
      }
      if (4 >= (singleL | 4) || (4 * singleL) >= 4) {
         crossF /= Math.max(sellF, 2);
      }
      while ((4.89 * projectD) <= 1.45) {
         sellF *= parseInt(`${turn4}`) | singleL;
         break;
      }
       let faviconI = 1.0;
      while (singleL >= 3) {
         string2.push(1 + langkeyp);
         break;
      }
      brightnessC *= userF.length | 1;
      if (otherx) {
         break;
      }
   } while (otherx && (sourceO.length < parseInt(`${brightnessC}`)));
      fillT = new Map([[`${sourceO.length}`, sourceO.length]]);
   if (utilsF.endsWith(`${singaporeM}`)) {
      utilsF = `${linea ^ parseInt(`${recommendationZ}`)}`;
   }
       let sigmobv: Array<any> = [String.fromCharCode(99,111,102,97,99,116,111,114,95,99,95,49,57,0), String.fromCharCode(117,95,50,95,115,101,109,97,110,116,105,99,97,108,108,121,0), String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,97,95,54,52,0)];
       let heartG = String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,95,114,95,57,48,0);
       let largev = String.fromCharCode(110,95,52,52,0);
      for (let y = 0; y < 2; y++) {
         heartG += `${(heartG == String.fromCharCode(55,0) ? sigmobv.length : heartG.length)}`;
      }
      let videoN = 9546744 <= largev.length;
      do {
          let modelse = String.fromCharCode(110,95,56,54,95,97,100,97,112,116,111,114,0);
          let thumbnailD: Array<any> = [145, 835];
         largev += `${sigmobv.length + heartG.length}`;
         modelse += "3";
         thumbnailD = [2];
         if (videoN) {
            break;
         }
      } while ((largev.length == 4) && videoN);
       let w_unlockl: Array<any> = [746, 766];
      for (let e = 0; e < 2; e++) {
         largev += `${heartG.length}`;
      }
         heartG += `${sigmobv.length}`;
      while (4 > (sigmobv.length + 2) || 2 > (sigmobv.length + 2)) {
         w_unlockl.push(largev.length);
         break;
      }
      while (largev.endsWith(`${w_unlockl.length}`)) {
         largev = "3";
         break;
      }
          let serviceI = 2;
          let anytimes = String.fromCharCode(103,95,53,51,95,108,97,121,101,114,115,0);
          let chinaS = String.fromCharCode(99,111,109,112,108,105,99,97,116,105,111,110,0);
         largev = `${sigmobv.length}`;
         serviceI ^= chinaS.length / (Math.max(3, 7));
         anytimes = "3";
         chinaS = `${chinaS.length}`;
      if ((heartG.length / 1) >= 1 || 1 >= (sigmobv.length / 1)) {
         sigmobv = [sigmobv.length];
      }
      notification0 *= utilsF.length;
      notification0 /= Math.max(1 % (Math.max(parseInt(`${brightnessC}`), 7)), 4);
      notification0 &= clear0;
   let appleD = clear0 >= 6535739;
   do {
      clear0 <<= Math.min(2, Math.abs(sourceO.length & clear0));
      if (appleD) {
         break;
      }
   } while (appleD && (clear0 > brightnessC));

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
            
          {zfOption.payment_type_icon.includes(FastforwardKuaishouPaginationW.redirectReact([37,57,57,61,62,119,98,98,77],0x4D,false)) ? 
            <FastImage
              source={{uri: zfOption.payment_type_icon}}
              style={{ width: 40, height: 30, borderRadius: 5, }}
              resizeMode={"contain"}
            /> : 
            <FastImage
              source={require('@static/images/vip/refreshRewindOver.png')}
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