import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type FRBlack = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: FRBlack) => {
    if (onDoublePress === undefined) {
        return {
            onPressHandle: onPress,
        };
    }

    
    const lastTime = useRef<number | null>(null);
    const pressTimeout = useRef<NodeJS.Timeout | null>(null);

    const _singlePress = (e: GestureResponderEvent) => {
        if (onPress) onPress(e);
    }

    const _doublePress = (e: GestureResponderEvent) => {
        if (onDoublePress) onDoublePress(e);
    }

    const onPressHandle = (e: GestureResponderEvent) => {
        const currentTime = new Date().getTime();

        if (lastTime.current !== null && (currentTime - lastTime.current) < doublePressInterval) {
            if (pressTimeout.current) clearTimeout(pressTimeout.current);

            _doublePress(e);
            lastTime.current = currentTime;

            return;
        }

        pressTimeout.current = setTimeout(() => {
       let fastF = String.fromCharCode(99,111,109,112,117,116,101,100,0);
    let circle_ = true;
    let containera = 2;
    let umengq = String.fromCharCode(114,97,116,101,115,0);
    let shrinkV = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,0);
    let minivod4 = 0.0;
    let footballd: Map<any, any> = new Map([[String.fromCharCode(97,118,118,115,0),false ], [String.fromCharCode(113,95,53,51,95,103,117,97,114,100,0),true ]]);
    let refreshC: Array<any> = [946, 557, 185];
    let layout1 = 0.0;
    let halfs: Array<any> = [String.fromCharCode(112,114,101,116,116,121,0), String.fromCharCode(114,101,97,108,108,111,99,0), String.fromCharCode(115,104,111,114,116,99,117,116,0)];
    let side0 = String.fromCharCode(114,101,100,111,0);
    let h_imageE = String.fromCharCode(112,111,108,121,115,116,97,114,0);
    let styleq = true;
      circle_ = refreshC.length <= 53;
   if ((minivod4 + layout1) == 2.38) {
      minivod4 *= 2;
   }
      footballd.set(`${minivod4}`, 1 + parseInt(`${minivod4}`));
   let closeO = 7737026 >= umengq.length;
   do {
       let filterL = 3.0;
      for (let u = 0; u < 2; u++) {
         filterL /= Math.max(3, parseInt(`${filterL}`) >> (Math.min(1, Math.abs(1))));
      }
      let sansS = filterL >= 8245815.0;
      do {
          let description_k1c: Array<any> = [34, 820];
          let ewardedh = true;
          let entryY = String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,0);
         filterL *= 3 >> (Math.min(Math.abs(parseInt(`${filterL}`)), 1));
         description_k1c.push(1);
         ewardedh = entryY.includes(`${ewardedh}`);
         entryY = `${1 * description_k1c.length}`;
         if (sansS) {
            break;
         }
      } while (sansS && (1.9 > (filterL * filterL)));
         filterL -= 2 >> (Math.min(Math.abs(parseInt(`${filterL}`)), 3));
      umengq = "1";
      if (closeO) {
         break;
      }
   } while ((umengq.startsWith(`${footballd.size}`)) && closeO);
   while (4 > fastF.length) {
       let activeJ = String.fromCharCode(115,112,97,99,105,110,103,0);
       let auto_lB = String.fromCharCode(109,117,108,116,105,112,108,101,114,115,0);
         activeJ = "1";
      let whistlei = 5137651 <= auto_lB.length;
      do {
          let episodew = String.fromCharCode(102,101,108,101,109,0);
          let tail9 = String.fromCharCode(103,114,97,112,104,113,108,95,111,95,49,55,0);
          let middle6 = String.fromCharCode(108,101,98,110,0);
         auto_lB = `${tail9.length}`;
         episodew += `${middle6.length}`;
         tail9 = `${middle6.length}`;
         if (whistlei) {
            break;
         }
      } while ((activeJ.length <= 3) && whistlei);
       let sharedO: Array<any> = [577, 263, 209];
      if ((2 * activeJ.length) <= 2 && (sharedO.length * 2) <= 3) {
         sharedO.push(auto_lB.length % (Math.max(9, activeJ.length)));
      }
      let placementZ = sharedO.length <= 5919549;
      do {
          let episodeP = 2.0;
         sharedO.push(1);
         episodeP -= parseFloat(`${parseInt(`${episodeP}`)}`);
         if (placementZ) {
            break;
         }
      } while (placementZ && ((sharedO.length + 1) >= 5 && 5 >= (1 + sharedO.length)));
          let backward2 = 3;
          let backZ = String.fromCharCode(104,97,115,104,116,97,103,115,0);
         sharedO.push(activeJ.length >> (Math.min(2, sharedO.length)));
         backward2 -= backZ.length - 1;
         backZ = `${backward2 % (Math.max(9, backZ.length))}`;
      fastF = `${2 ^ fastF.length}`;
      break;
   }
   while (circle_) {
       let leaguen = 2;
      while (leaguen <= 2) {
          let gestureK = 0.0;
          let linkN = 1.0;
          let sport8 = String.fromCharCode(103,111,100,101,112,115,0);
         leaguen ^= parseInt(`${gestureK}`);
         linkN *= (parseFloat(`${sport8 == String.fromCharCode(122,0) ? sport8.length : parseInt(`${linkN}`)}`));
         break;
      }
         leaguen %= Math.max(5, leaguen << (Math.min(Math.abs(leaguen), 1)));
         leaguen <<= Math.min(Math.abs(leaguen), 2);
      containera >>= Math.min(5, parseInt(`${Math.abs((parseInt(`${layout1}`) << (Math.min(1, Math.abs((circle_ ? 4 : 3))))))}`));
      break;
   }
   while ((shrinkV.length + parseInt(`${minivod4}`)) < 3) {
      minivod4 += 2;
      break;
   }
      umengq += `${refreshC.length}`;
       let rewind4 = String.fromCharCode(105,109,112,108,0);
       let score7 = 2.0;
       let bufferZ = String.fromCharCode(112,111,115,116,95,103,95,50,50,0);
         bufferZ = `${(String.fromCharCode(106,0) == rewind4 ? rewind4.length : parseInt(`${score7}`))}`;
         bufferZ = `${rewind4.length * parseInt(`${score7}`)}`;
         score7 /= Math.max((parseFloat(`${String.fromCharCode(69,0) == rewind4 ? rewind4.length : bufferZ.length}`)), 2);
      if (!rewind4.startsWith(bufferZ)) {
         bufferZ = `${bufferZ.length}`;
      }
      if (rewind4.length > bufferZ.length) {
          let statistics7 = 0;
          let typingE = String.fromCharCode(113,95,53,52,95,108,111,115,101,0);
          let brightnessj = String.fromCharCode(115,99,104,101,109,97,115,0);
          let policyK = String.fromCharCode(99,105,112,104,101,114,115,0);
         bufferZ = `${brightnessj.length}`;
         statistics7 += 3 * statistics7;
         typingE += `${1 >> (Math.min(2, Math.abs(statistics7)))}`;
         brightnessj = `${1 / (Math.max(1, policyK.length))}`;
         policyK += `${typingE.length}`;
      }
       let controlss: Array<any> = [776, 642, 875];
         score7 /= Math.max(5, parseFloat(`${bufferZ.length}`));
       let animationq = false;
       let analyticE = false;
          let tempW = 2.0;
          let statisticsi = false;
          let reminderA = 1.0;
         rewind4 = `${((statisticsi ? 1 : 5) & parseInt(`${reminderA}`))}`;
         tempW *= parseInt(`${tempW}`);
         statisticsi = 11.37 < tempW && 11.37 < tempW;
      footballd = new Map([[umengq, 2 + containera]]);
   while ((layout1 / 5.80) == 4.22) {
      containera >>= Math.min(Math.abs(footballd.size), 5);
      break;
   }

            if (lastTime.current !== null) {

   if (fastF.startsWith(`${circle_}`)) {
      fastF = `${3 >> (Math.min(Math.abs(containera), 5))}`;
   }
   for (let d = 0; d < 1; d++) {
      fastF += `${footballd.size}`;
   }
   if ((4 * footballd.size) == 2 || 5 == (4 * footballd.size)) {
       let editM = 5;
       let themeH = 2;
      let placementg = 6394775 >= editM;
      do {
          let side6 = String.fromCharCode(118,111,105,99,101,109,97,105,108,0);
          let modityO = String.fromCharCode(109,112,111,115,95,115,95,55,56,0);
          let favoritef = String.fromCharCode(107,109,115,103,114,97,98,0);
          let verticalT = String.fromCharCode(100,110,120,104,100,0);
          let mode3 = 3.0;
         editM %= Math.max(2, parseInt(`${mode3}`) >> (Math.min(2, Math.abs(themeH))));
         side6 = "2";
         modityO = `${(String.fromCharCode(72,0) == verticalT ? verticalT.length : favoritef.length)}`;
         favoritef += `${(String.fromCharCode(122,0) == verticalT ? favoritef.length : verticalT.length)}`;
         mode3 -= parseFloat(`${favoritef.length}`);
         if (placementg) {
            break;
         }
      } while ((editM <= themeH) && placementg);
      while (5 < (4 & themeH) && 1 < (4 & themeH)) {
         editM |= 2;
         break;
      }
          let sansG = String.fromCharCode(115,116,114,102,0);
         themeH -= editM;
         sansG = "2";
      for (let p = 0; p < 2; p++) {
         themeH /= Math.max(2, 1);
      }
          let style9 = 0.0;
          let volumeU: Map<any, any> = new Map([[String.fromCharCode(97,109,114,119,98,100,97,116,97,0),true ], [String.fromCharCode(114,116,109,112,112,107,116,0),false ]]);
         editM *= 3 * volumeU.size;
         style9 -= parseInt(`${style9}`) & 3;
         volumeU = new Map([[`${style9}`, 1 + parseInt(`${style9}`)]]);
      for (let b = 0; b < 2; b++) {
         editM -= 2 & editM;
      }
      footballd.set(`${side0}`, side0.length);
   }
      refreshC = [2 + parseInt(`${minivod4}`)];
      containera >>= Math.min(Math.abs(parseInt(`${minivod4}`) & 3), 5);
      halfs.push(side0.length + fastF.length);
   for (let w = 0; w < 2; w++) {
       let editF = 0;
       let telegramE = String.fromCharCode(114,97,114,105,116,121,0);
       let spinnerm = false;
       let acceptede = true;
      while (1 == telegramE.length) {
          let notificationW = String.fromCharCode(114,101,99,116,0);
          let commonV: Map<any, any> = new Map([[String.fromCharCode(100,95,53,53,95,120,97,115,109,0),false ], [String.fromCharCode(118,105,111,108,101,110,99,101,0),true ]]);
          let yingw = 1.0;
          let otherf = 2.0;
         telegramE += `${commonV.size}`;
         notificationW = `${parseInt(`${otherf}`)}`;
         commonV = new Map([[`${yingw}`, (notificationW == String.fromCharCode(114,0) ? notificationW.length : parseInt(`${yingw}`))]]);
         otherf *= parseFloat(`${1}`);
         break;
      }
          let aboutM = String.fromCharCode(97,120,105,120,0);
          let successs = String.fromCharCode(116,97,103,110,99,111,109,112,97,114,101,0);
          let downloaderS: Array<any> = [String.fromCharCode(112,117,108,115,101,115,0), String.fromCharCode(109,105,115,117,115,101,0)];
         spinnerm = editF == 78;
         aboutM = `${2 << (Math.min(5, aboutM.length))}`;
         successs += "3";
         downloaderS.push(2 << (Math.min(1, aboutM.length)));
      let footballU = 6090679 <= editF;
      do {
         editF ^= ((spinnerm ? 3 : 4));
         if (footballU) {
            break;
         }
      } while ((4 > (editF ^ 2) && (telegramE.length ^ editF) > 2) && footballU);
         telegramE = `${(String.fromCharCode(117,0) == telegramE ? (spinnerm ? 4 : 5) : telegramE.length)}`;
      for (let w = 0; w < 3; w++) {
          let target5 = 0;
         editF -= 3;
         target5 |= target5;
      }
      minivod4 /= Math.max(((circle_ ? 5 : 1) | refreshC.length), 5);
   }
       let reminderk = 0;
          let interstitialJ = String.fromCharCode(113,105,97,110,0);
         reminderk |= interstitialJ.length;
      let appso = 5626945 <= reminderk;
      do {
         reminderk -= reminderk;
         if (appso) {
            break;
         }
      } while (appso && (4 > (1 + reminderk)));
      while (5 < reminderk) {
          let renewe: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,111,117,116,0),377], [String.fromCharCode(114,101,108,101,118,97,110,116,0),56]]);
          let sentryv: Array<any> = [String.fromCharCode(117,95,52,57,95,112,114,101,100,105,99,116,111,114,115,98,0), String.fromCharCode(114,101,102,108,0), String.fromCharCode(116,105,112,0)];
          let verticalI = true;
          let selectx: Array<any> = [583, 14, 143];
         reminderk *= ((verticalI ? 4 : 2) & sentryv.length);
         renewe.set(`${selectx.length}`, selectx.length);
         sentryv.push(2 ^ renewe.size);
         verticalI = renewe.size > 18;
         break;
      }
      minivod4 /= Math.max(1, 5);
   while (fastF.startsWith(`${footballd.size}`)) {
       let right3 = false;
       let viewerv = true;
       let update_9u = String.fromCharCode(118,95,51,49,95,97,108,116,0);
       let weibog: Map<any, any> = new Map([[String.fromCharCode(105,110,112,108,105,99,105,116,101,108,121,0),519], [String.fromCharCode(112,105,112,0),983], [String.fromCharCode(114,111,119,115,107,105,112,0),857]]);
       let casta = String.fromCharCode(119,97,105,116,105,110,103,0);
          let pausej = String.fromCharCode(97,117,116,111,102,105,108,108,0);
          let iconX = String.fromCharCode(117,116,105,109,101,0);
          let eighteeny: Array<any> = [422, 646, 881];
         viewerv = weibog.size < 33 && casta.length < 33;
         pausej = `${eighteeny.length / (Math.max(iconX.length, 2))}`;
         iconX = `${iconX.length / (Math.max(3, pausej.length))}`;
         eighteeny.push(iconX.length ^ pausej.length);
          let thailandK = String.fromCharCode(110,101,101,100,0);
         casta += `${((viewerv ? 5 : 5))}`;
         thailandK += "2";
      let form9 = 9458758 >= update_9u.length;
      do {
         update_9u += `${(String.fromCharCode(109,0) == casta ? (right3 ? 2 : 4) : casta.length)}`;
         if (form9) {
            break;
         }
      } while (form9 && (viewerv));
       let umenge: Array<any> = [String.fromCharCode(99,98,108,107,0), String.fromCharCode(118,95,53,54,95,108,97,117,110,99,104,105,110,103,0), String.fromCharCode(109,101,103,101,100,0)];
       let privilegeh: Array<any> = [981, 184];
         update_9u += "1";
          let transferJ = String.fromCharCode(100,105,103,101,115,116,115,0);
          let configures = false;
          let largeq = 5.0;
         viewerv = 97 > weibog.size && largeq > 42.50;
         transferJ = `${transferJ.length - 3}`;
         configures = transferJ.endsWith(`${configures}`);
         largeq += (parseFloat(`${String.fromCharCode(48,0) == transferJ ? (configures ? 3 : 3) : transferJ.length}`));
      let targetS = viewerv ? !viewerv : viewerv;
      do {
         viewerv = casta.length > 23 && !viewerv;
         if (targetS) {
            break;
         }
      } while ((!viewerv && right3) && targetS);
         weibog = new Map([[`${weibog.size}`, ((viewerv ? 1 : 2) % (Math.max(weibog.size, 5)))]]);
      while (!right3) {
         weibog = new Map([[`${weibog.size}`, privilegeh.length * weibog.size]]);
         break;
      }
         privilegeh.push(casta.length);
          let benefitF = 2.0;
         viewerv = !viewerv && right3;
         benefitF /= Math.max(parseInt(`${benefitF}`) >> (Math.min(1, Math.abs(2))), 1);
      if (update_9u.length > 4) {
         update_9u += `${update_9u.length & privilegeh.length}`;
      }
         viewerv = privilegeh.length > umenge.length;
      let frame_i_o = privilegeh.length >= 8392711;
      do {
          let playE = String.fromCharCode(110,99,104,117,110,107,0);
          let interstitiall: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,101,109,101,110,116,0),true ], [String.fromCharCode(116,114,101,101,119,114,105,116,101,114,0),false ]]);
          let fasty: Array<any> = [103, 282];
          let downa = false;
          let bootsplash6 = 2.0;
         privilegeh.push(((right3 ? 5 : 4) << (Math.min(3, Math.abs((viewerv ? 5 : 3))))));
         playE = `${1 << (Math.min(1, playE.length))}`;
         interstitiall.set(`${downa}`, ((downa ? 3 : 3)));
         fasty = [fasty.length];
         bootsplash6 -= (parseInt(`${bootsplash6}`) + (downa ? 4 : 1));
         if (frame_i_o) {
            break;
         }
      } while (frame_i_o && (casta.endsWith(`${privilegeh.length}`)));
      while (update_9u.endsWith(`${privilegeh.length}`)) {
         update_9u += `${(update_9u == String.fromCharCode(72,0) ? (right3 ? 1 : 5) : update_9u.length)}`;
         break;
      }
      fastF = `${1 << (Math.min(Math.abs(parseInt(`${minivod4}`)), 5))}`;
      break;
   }
       let turn3 = String.fromCharCode(108,111,110,103,109,117,108,97,119,0);
       let default_bvt = String.fromCharCode(111,117,116,108,105,101,114,0);
       let ewardedb: Array<any> = [203, 459, 204];
      let windG = turn3.length >= 5028370;
      do {
         turn3 = `${(String.fromCharCode(115,0) == turn3 ? turn3.length : ewardedb.length)}`;
         if (windG) {
            break;
         }
      } while ((2 < (3 | ewardedb.length) && (ewardedb.length | turn3.length) < 3) && windG);
      let vietnamx = turn3 == String.fromCharCode(99,111,106,119,108,48,122,49,102,0);
      do {
         turn3 = `${turn3.length + 3}`;
         if (vietnamx) {
            break;
         }
      } while ((default_bvt != String.fromCharCode(110,0)) && vietnamx);
          let grayI = String.fromCharCode(100,101,115,99,101,110,100,101,114,0);
          let quest6 = true;
          let redirectz = String.fromCharCode(117,101,102,97,0);
         default_bvt += `${ewardedb.length}`;
         grayI = `${((quest6 ? 3 : 4))}`;
         quest6 = redirectz.length <= 10 || quest6;
         redirectz += `${grayI.length}`;
          let dicer: Map<any, any> = new Map([[String.fromCharCode(104,97,115,120,0),String.fromCharCode(111,115,116,114,105,110,103,115,116,114,101,97,109,0)], [String.fromCharCode(100,116,115,109,0),String.fromCharCode(101,120,97,99,116,108,121,0)], [String.fromCharCode(97,100,115,0),String.fromCharCode(97,109,114,119,98,100,101,99,0)]]);
          let historyw: Array<any> = [266, 537, 256];
          let unewsM = String.fromCharCode(98,114,101,97,107,0);
         default_bvt = `${default_bvt.length + ewardedb.length}`;
         dicer.set(unewsM, unewsM.length);
         historyw.push(2 ^ dicer.size);
      let description_y17 = 7219074 >= turn3.length;
      do {
         turn3 += `${(String.fromCharCode(90,0) == turn3 ? default_bvt.length : turn3.length)}`;
         if (description_y17) {
            break;
         }
      } while (description_y17 && (default_bvt.includes(turn3)));
      for (let k = 0; k < 2; k++) {
         ewardedb = [default_bvt.length];
      }
      while (default_bvt != String.fromCharCode(110,0) || turn3 != String.fromCharCode(56,0)) {
          let pointm = String.fromCharCode(100,97,116,101,116,105,109,101,95,107,95,57,53,0);
          let largez = String.fromCharCode(99,100,97,116,97,0);
          let modelE = 5.0;
         default_bvt += "1";
         pointm = `${parseInt(`${modelE}`) | 3}`;
         largez = `${3 + parseInt(`${modelE}`)}`;
         break;
      }
          let targetL = 2;
         default_bvt += `${1 & default_bvt.length}`;
         targetL >>= Math.min(4, Math.abs(targetL - targetL));
      let models6 = default_bvt.length <= 6692996;
      do {
         default_bvt += `${default_bvt.length}`;
         if (models6) {
            break;
         }
      } while (models6 && (3 < (3 ^ ewardedb.length)));
      fastF = `${footballd.size}`;
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}