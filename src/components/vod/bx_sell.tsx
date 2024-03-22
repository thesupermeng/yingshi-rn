import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { IDelegate, USCastingControl } from '@type/wpk_long';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/signinupConstants.svg';
import SortDescIcon from '@static/images/aboutRegister_j9Singapore.svg';
interface XFillButton {
    onConfirm: any,
    onCancel: any,
    episodes?: IDelegate
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: XFillButton) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = rangeSize;
    const [sortBy, setSortBy] = useState('asc');
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const [currentIndex, setCurrentIndex] = useState(Math.floor(activeEpisode / EPISODE_RANGE_SIZE));
    const showEpisodeRangeStart = useMemo(() => currentIndex * EPISODE_RANGE_SIZE, [activeEpisode, currentIndex]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );
    const displayEpisodes = useMemo(() => {
       let appleM = false;
    let containerK = String.fromCharCode(117,95,50,49,95,109,117,120,101,114,0);
    let tumbnailk = 1.0;
    let langkeyE = true;
    let nalyticsy = true;
    let emojig: Array<any> = [2, 939, 41];
    let privilege9 = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,104,95,49,54,0);
    let forwardw: Array<any> = [63, 924];
    let bufferJ = 3;
    let redirect3: Array<any> = [55, 873, 347];
   while (2.57 <= (tumbnailk - 1.52)) {
      tumbnailk += emojig.length;
      break;
   }
   let alertS = appleM ? !appleM : appleM;
   do {
      appleM = tumbnailk <= 59.75;
      if (alertS) {
         break;
      }
   } while (alertS && (appleM));
      privilege9 = `${(String.fromCharCode(103,0) == privilege9 ? privilege9.length : forwardw.length)}`;
       let launch1 = 4;
       let untickD = 3.0;
      while (3.33 == (untickD * 1.92) || 5 == (launch1 / 3)) {
         untickD *= 1 & parseInt(`${untickD}`);
         break;
      }
       let checkboxN = String.fromCharCode(112,95,51,53,95,100,114,105,102,116,105,110,103,0);
       let modalS = String.fromCharCode(114,95,50,50,95,115,117,109,109,0);
         untickD *= checkboxN.length ^ modalS.length;
         modalS = "2";
          let clubp: Map<any, any> = new Map([[String.fromCharCode(112,97,114,101,110,116,95,101,95,50,54,0),286], [String.fromCharCode(114,95,51,49,0),455], [String.fromCharCode(109,95,49,49,95,115,101,114,118,105,99,101,115,0),606]]);
         modalS = `${parseInt(`${untickD}`) + 2}`;
         clubp = new Map([[`${clubp.size}`, 3 + clubp.size]]);
         modalS = "2";
      containerK = `${parseInt(`${tumbnailk}`) - 1}`;
   let twitterl = tumbnailk <= 7806537.0;
   do {
       let upgradek = String.fromCharCode(109,105,110,105,95,118,95,54,0);
       let areao = String.fromCharCode(114,101,102,114,101,115,104,95,55,95,49,55,0);
       let goalz = 5;
       let bingq = 2.0;
      while (upgradek.length < 4) {
          let leftA = false;
          let sourceP = 1.0;
          let accepteda: Array<any> = [186, 983];
         areao += `${((leftA ? 1 : 4) ^ parseInt(`${bingq}`))}`;
         leftA = sourceP == 13.9;
         sourceP += parseFloat(`${parseInt(`${sourceP}`)}`);
         accepteda.push(1 ^ parseInt(`${sourceP}`));
         break;
      }
         goalz >>= Math.min(2, Math.abs(goalz << (Math.min(Math.abs(parseInt(`${bingq}`)), 5))));
      if (3.82 >= bingq) {
          let notification6 = 3.0;
          let acceptedy = String.fromCharCode(108,95,51,49,95,100,99,97,101,110,99,0);
         bingq /= Math.max(5, parseFloat(`${acceptedy.length & parseInt(`${notification6}`)}`));
      }
      let disconnectedN = String.fromCharCode(106,105,95,50,111,114,97,49,116,0) == upgradek;
      do {
          let floating3 = 0;
          let handler6: Map<any, any> = new Map([[String.fromCharCode(109,97,116,116,101,95,50,95,54,56,0),true ], [String.fromCharCode(100,95,54,57,95,104,105,116,115,0),true ]]);
          let checkboxe = false;
          let trashH = String.fromCharCode(100,101,108,105,118,101,114,121,95,51,95,51,54,0);
         upgradek += `${floating3}`;
         floating3 <<= Math.min(Math.abs(1 * trashH.length), 5);
         handler6 = new Map([[`${checkboxe}`, 1 ^ trashH.length]]);
         if (disconnectedN) {
            break;
         }
      } while ((3 >= (goalz >> (Math.min(upgradek.length, 1)))) && disconnectedN);
      if (2.54 <= (bingq - 4.16)) {
         upgradek += "1";
      }
          let middles = 5.0;
          let bufferk: Array<any> = [825, 563];
         bingq /= Math.max(5, parseFloat(`${parseInt(`${middles}`) ^ 3}`));
         middles -= parseFloat(`${bufferk.length}`);
         bufferk.push(2);
      if ((3 + goalz) >= 4 || (goalz + areao.length) >= 3) {
          let formi = String.fromCharCode(103,95,57,55,95,102,114,97,109,101,100,97,116,97,0);
         areao += `${parseInt(`${bingq}`)}`;
         formi += `${(formi == String.fromCharCode(65,0) ? formi.length : formi.length)}`;
      }
      let other0 = 9881174 >= goalz;
      do {
         goalz >>= Math.min(Math.abs(parseInt(`${bingq}`) % (Math.max(1, 2))), 5);
         if (other0) {
            break;
         }
      } while ((goalz >= 2) && other0);
         upgradek += `${2 / (Math.max(9, areao.length))}`;
      while ((areao.length + 2) >= 1) {
         areao += `${(areao == String.fromCharCode(75,0) ? goalz : areao.length)}`;
         break;
      }
      while (areao != String.fromCharCode(113,0)) {
         upgradek += `${(String.fromCharCode(66,0) == areao ? areao.length : parseInt(`${bingq}`))}`;
         break;
      }
         areao = `${parseInt(`${bingq}`)}`;
      tumbnailk *= areao.length;
      if (twitterl) {
         break;
      }
   } while (twitterl && (!langkeyE || (tumbnailk * 5.95) == 3.38));
      appleM = containerK.length >= 29;
       let headerb = String.fromCharCode(115,116,97,98,105,108,105,122,101,95,102,95,57,54,0);
       let topic_ = false;
         topic_ = !topic_ || headerb.length < 15;
         headerb = `${(headerb.length ^ (topic_ ? 1 : 2))}`;
         topic_ = !topic_;
      while (!headerb.includes(`${topic_}`)) {
          let inactiveQ = String.fromCharCode(112,114,101,115,101,110,116,105,110,103,95,115,95,57,53,0);
          let networkl = String.fromCharCode(114,101,119,97,114,100,95,49,95,49,51,0);
          let pageV = 4.0;
         headerb = `${((topic_ ? 5 : 5) % (Math.max(10, parseInt(`${pageV}`))))}`;
         inactiveQ = `${inactiveQ.length << (Math.min(3, networkl.length))}`;
         networkl += "2";
         pageV += 2;
         break;
      }
      for (let e = 0; e < 2; e++) {
         topic_ = topic_ && headerb.length > 100;
      }
         headerb = `${((topic_ ? 5 : 3) & headerb.length)}`;
      appleM = !langkeyE || tumbnailk <= 99.91;

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

      appleM = !appleM;
   let typingh = containerK.length >= 5383826;
   do {
      containerK += `${((langkeyE ? 5 : 2) / (Math.max((appleM ? 3 : 2), 5)))}`;
      if (typingh) {
         break;
      }
   } while ((2 > containerK.length) && typingh);
      forwardw.push(((nalyticsy ? 5 : 1)));
      forwardw.push(bufferJ);
   if (!containerK.endsWith(`${forwardw.length}`)) {
       let thailand_: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,97,116,101,95,121,95,53,50,0),true ], [String.fromCharCode(112,97,114,101,110,116,97,103,101,95,55,95,50,54,0),true ], [String.fromCharCode(106,95,51,48,95,112,114,101,115,101,114,118,101,115,0),true ]]);
       let selectedQ = String.fromCharCode(117,115,101,115,95,49,95,57,50,0);
       let subsw = String.fromCharCode(103,95,57,53,95,102,114,101,101,102,111,114,109,0);
       let modeT = true;
      if (!selectedQ.includes(`${thailand_.size}`)) {
         selectedQ += `${(String.fromCharCode(98,0) == subsw ? (modeT ? 4 : 4) : subsw.length)}`;
      }
      if (!modeT) {
          let combinedm = 4.0;
          let productU: Map<any, any> = new Map([[String.fromCharCode(122,95,50,56,95,109,97,110,117,97,108,108,121,0),true ], [String.fromCharCode(112,111,108,105,99,105,101,115,95,98,95,49,56,0),true ], [String.fromCharCode(99,95,54,50,95,115,101,114,105,97,108,105,122,97,98,108,101,0),false ]]);
          let reportT = String.fromCharCode(111,95,52,48,95,100,101,108,105,118,101,114,101,100,0);
         modeT = combinedm < 56.51;
         combinedm /= Math.max(parseFloat(`${reportT.length - 2}`), 5);
         productU = new Map([[`${productU.size}`, productU.size * reportT.length]]);
      }
       let favoriteb: Array<any> = [149, 910];
       let countdownv: Array<any> = [String.fromCharCode(116,95,53,55,95,110,118,100,101,99,0), String.fromCharCode(108,95,54,57,95,97,112,112,114,111,120,105,109,97,116,111,114,0)];
      while (selectedQ.includes(`${countdownv.length}`)) {
         selectedQ += `${thailand_.size + 1}`;
         break;
      }
          let targetD = String.fromCharCode(101,95,54,48,95,114,117,110,110,101,114,0);
          let tumbnailH: Array<any> = [String.fromCharCode(122,95,49,55,95,108,105,98,97,118,114,101,115,97,109,112,108,101,0), String.fromCharCode(115,116,114,101,97,109,99,111,112,121,95,53,95,48,0)];
         countdownv = [1 & targetD.length];
         targetD = `${tumbnailH.length | 2}`;
         tumbnailH.push(tumbnailH.length);
          let reportn = String.fromCharCode(114,97,110,107,115,95,106,95,56,56,0);
         subsw = `${countdownv.length & 3}`;
         reportn += `${reportn.length}`;
      if (4 >= (favoriteb.length * 4) || (4 * favoriteb.length) >= 2) {
         thailand_.set(`${favoriteb.length}`, 1);
      }
         favoriteb = [2 ^ favoriteb.length];
          let reneww = 4.0;
          let halfA = String.fromCharCode(117,118,108,99,95,108,95,56,0);
         modeT = 17.69 == reneww;
         reneww /= Math.max((parseFloat(`${String.fromCharCode(115,0) == halfA ? halfA.length : halfA.length}`)), 1);
      for (let g = 0; g < 1; g++) {
          let soundX: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,112,95,49,57,0),String.fromCharCode(114,95,57,53,95,109,111,110,111,98,105,116,0)], [String.fromCharCode(99,111,110,110,101,99,116,95,100,95,53,51,0),String.fromCharCode(121,95,54,50,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0)]]);
          let checkboxk = 3.0;
          let casth = 4.0;
         thailand_ = new Map([[`${soundX.size}`, soundX.size]]);
         checkboxk -= 2 + parseInt(`${checkboxk}`);
         casth += parseFloat(`${parseInt(`${casth}`) - 1}`);
      }
         favoriteb = [((modeT ? 2 : 5) + thailand_.size)];
          let k_titlee = String.fromCharCode(115,95,54,56,95,100,114,105,118,101,110,0);
         modeT = (selectedQ.length >> (Math.min(4, Math.abs(thailand_.size)))) <= 13;
         k_titlee = `${k_titlee.length - 3}`;
      forwardw.push(3 - selectedQ.length);
   }
       let half6 = String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,95,116,95,54,56,0);
         half6 += `${half6.length}`;
      if (half6 != half6) {
         half6 += `${half6.length}`;
      }
      let downP = half6.length <= 5540678;
      do {
          let shrink4 = String.fromCharCode(115,95,56,57,95,115,116,105,108,108,0);
          let rankV = String.fromCharCode(106,95,50,54,95,112,114,111,118,105,100,105,110,103,0);
          let relatedM = 1;
         half6 += `${3 & rankV.length}`;
         shrink4 += `${relatedM}`;
         rankV += "3";
         relatedM <<= Math.min(Math.abs((shrink4 == String.fromCharCode(112,0) ? relatedM : shrink4.length)), 2);
         if (downP) {
            break;
         }
      } while (downP && (half6.length == half6.length));
      forwardw = [emojig.length << (Math.min(5, Math.abs(bufferJ)))];
   let commonY = nalyticsy ? !nalyticsy : nalyticsy;
   do {
      nalyticsy = emojig.length > 69 && tumbnailk > 56.27;
      if (commonY) {
         break;
      }
   } while ((tumbnailk >= 2.41) && commonY);
        if (sortBy === 'desc') {

   let hejiY = 9727903 >= forwardw.length;
   do {
      forwardw.push(emojig.length % (Math.max(3, 8)));
      if (hejiY) {
         break;
      }
   } while (((1 & forwardw.length) == 4) && hejiY);
   let resendf = privilege9 == String.fromCharCode(107,119,100,48,51,97,114,107,0);
   do {
      privilege9 += `${(bufferJ / (Math.max(5, (langkeyE ? 3 : 3))))}`;
      if (resendf) {
         break;
      }
   } while (resendf && (2 <= privilege9.length));
      privilege9 = "3";
   while (containerK.endsWith(`${bufferJ}`)) {
      containerK = `${emojig.length & 3}`;
      break;
   }
   for (let x = 0; x < 1; x++) {
       let matha = String.fromCharCode(109,95,54,57,95,108,97,122,105,108,121,0);
       let smallv = 2.0;
       let actionU = 3.0;
          let carouselo: Map<any, any> = new Map([[String.fromCharCode(103,95,54,52,95,100,112,110,97,109,101,0),true ], [String.fromCharCode(102,95,53,52,95,112,101,114,99,0),false ]]);
         matha += `${carouselo.size << (Math.min(Math.abs(1), 3))}`;
          let ewardedg = 5.0;
          let regengP: Array<any> = [801, 1000, 484];
          let feedbacki = String.fromCharCode(97,95,50,57,95,117,114,97,110,100,111,109,0);
         actionU *= parseInt(`${actionU}`) / (Math.max(regengP.length, 10));
         ewardedg += parseFloat(`${parseInt(`${ewardedg}`)}`);
         regengP.push(2 | feedbacki.length);
         feedbacki = `${parseInt(`${ewardedg}`)}`;
      containerK += `${(parseInt(`${tumbnailk}`) & (nalyticsy ? 2 : 1))}`;
   }
       let sheetF = String.fromCharCode(100,95,50,51,95,119,101,97,118,101,0);
       let default_49M = 4.0;
         sheetF = `${3 - parseInt(`${default_49M}`)}`;
       let typingL = String.fromCharCode(117,95,54,54,95,102,114,97,103,0);
      let footballE = 6913890.0 >= default_49M;
      do {
          let animation6: Map<any, any> = new Map([[String.fromCharCode(111,95,52,54,95,115,119,105,122,122,108,101,100,0),String.fromCharCode(106,95,51,56,95,105,110,116,101,114,99,101,112,116,111,114,0)], [String.fromCharCode(109,117,108,116,105,112,108,121,120,95,117,95,55,53,0),String.fromCharCode(118,97,114,121,95,106,95,55,56,0)]]);
          let private_wj = true;
         default_49M += (parseFloat(`${(private_wj ? 5 : 4) | parseInt(`${default_49M}`)}`));
         animation6 = new Map([[`${animation6.size}`, animation6.size << (Math.min(3, Math.abs(animation6.size)))]]);
         private_wj = (animation6.size ^ animation6.size) > 59;
         if (footballE) {
            break;
         }
      } while ((typingL.startsWith(`${default_49M}`)) && footballE);
         sheetF = `${parseInt(`${default_49M}`) << (Math.min(sheetF.length, 5))}`;
      if (default_49M <= parseFloat(`${typingL.length}`)) {
         default_49M += (parseFloat(`${sheetF == String.fromCharCode(72,0) ? sheetF.length : parseInt(`${default_49M}`)}`));
      }
         default_49M += parseFloat(`${1}`);
      forwardw.push(bufferJ);
      appleM = redirect3.includes(langkeyE);
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let tickP = false;
    let largeo: Array<any> = [String.fromCharCode(100,95,51,53,95,99,111,112,121,120,0), String.fromCharCode(106,95,53,50,95,105,110,100,101,120,111,102,0)];
    let currenth: Array<any> = [779, 969];
    let circleT: Array<any> = [String.fromCharCode(113,95,51,51,0), String.fromCharCode(111,95,55,52,95,114,105,103,104,116,115,0), String.fromCharCode(120,95,53,51,95,110,105,109,97,116,105,111,110,0)];
    let filedE = 2.0;
    let privileged = 1;
    let editn = 3.0;
    let notificationn = String.fromCharCode(112,97,115,115,102,95,117,95,53,49,0);
    let humidityX = 0;
    let smallT = 1;
    let clockz = String.fromCharCode(102,95,56,50,95,115,104,97,114,101,100,100,111,119,110,108,111,97,100,0);
    let condensedn = String.fromCharCode(110,100,111,116,115,95,111,95,52,56,0);
      humidityX -= 2;
      humidityX |= parseInt(`${filedE}`) | 1;
   let x_positionV = 5978124.0 >= filedE;
   do {
      filedE *= parseFloat(`${parseInt(`${filedE}`) % 3}`);
      if (x_positionV) {
         break;
      }
   } while (x_positionV && (editn > filedE));
   for (let l = 0; l < 2; l++) {
      filedE *= parseFloat(`${1 >> (Math.min(5, largeo.length))}`);
   }
   if (circleT.includes(humidityX)) {
      humidityX |= 2;
   }
      notificationn += "1";
   for (let n = 0; n < 3; n++) {
       let serviceS = String.fromCharCode(99,114,121,115,116,97,108,104,100,95,113,95,48,0);
       let groupD = String.fromCharCode(115,101,110,99,95,98,95,56,51,0);
       let robotoK = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,118,95,49,57,0);
          let untickl = 2.0;
          let championb = String.fromCharCode(109,105,120,101,100,95,118,95,51,48,0);
         robotoK += `${(String.fromCharCode(95,0) == groupD ? groupD.length : parseInt(`${untickl}`))}`;
         untickl *= parseFloat(`${championb.length % 3}`);
         championb += `${championb.length}`;
      while (groupD.length <= robotoK.length) {
         groupD = `${serviceS.length % (Math.max(robotoK.length, 5))}`;
         break;
      }
      if (serviceS.length < groupD.length) {
         serviceS += `${groupD.length + robotoK.length}`;
      }
      for (let l = 0; l < 2; l++) {
         robotoK = `${robotoK.length + 2}`;
      }
          let updates0 = 2.0;
          let usernamet = 0.0;
         groupD += `${groupD.length - parseInt(`${usernamet}`)}`;
         updates0 += parseInt(`${updates0}`) >> (Math.min(4, Math.abs(parseInt(`${updates0}`))));
         usernamet /= Math.max(parseInt(`${updates0}`), 5);
      for (let m = 0; m < 3; m++) {
         robotoK = `${3 % (Math.max(8, robotoK.length))}`;
      }
      if (groupD.length > 4) {
         groupD = `${groupD.length ^ 1}`;
      }
      if (robotoK.length >= 5) {
         groupD = `${robotoK.length % (Math.max(groupD.length, 2))}`;
      }
         groupD = `${groupD.length - robotoK.length}`;
      currenth = [currenth.length % 2];
   }

        if (sortBy === 'asc') {

   for (let v = 0; v < 1; v++) {
       let moons = 0;
       let temperatureR = 3;
       let crossH = 0;
         temperatureR ^= temperatureR + moons;
         crossH -= temperatureR;
          let twitterS = String.fromCharCode(99,102,115,116,114,101,97,109,95,48,95,48,0);
          let video5 = false;
          let event1 = 1.0;
         crossH -= temperatureR;
         twitterS += `${(parseInt(`${event1}`) + (video5 ? 4 : 1))}`;
         video5 = twitterS.includes(`${video5}`);
         event1 += 1 + parseInt(`${event1}`);
      if (5 > crossH) {
         temperatureR <<= Math.min(3, Math.abs(3));
      }
         moons &= moons - temperatureR;
         temperatureR |= crossH | temperatureR;
      let tailF = temperatureR <= 9773722;
      do {
          let e_titleE = String.fromCharCode(101,110,100,105,110,103,95,117,95,57,49,0);
          let temperatureN = 3;
          let anythinka = 5.0;
          let streamingJ = true;
          let emoji8: Map<any, any> = new Map([[String.fromCharCode(116,101,120,101,108,95,97,95,50,48,0),180], [String.fromCharCode(104,95,50,95,105,112,114,101,100,0),984], [String.fromCharCode(99,105,114,99,117,108,97,114,95,53,95,55,51,0),354]]);
         temperatureR >>= Math.min(5, Math.abs((String.fromCharCode(68,0) == e_titleE ? temperatureN : e_titleE.length)));
         temperatureN /= Math.max(parseInt(`${anythinka}`) ^ 3, 2);
         anythinka /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${anythinka}`)), 2)), 3);
         streamingJ = emoji8.get(`${streamingJ}`) == null;
         emoji8 = new Map([[`${emoji8.size}`, 1]]);
         if (tailF) {
            break;
         }
      } while ((temperatureR <= 3) && tailF);
      if (2 > (moons >> (Math.min(Math.abs(5), 3)))) {
          let fileds = String.fromCharCode(115,117,98,116,114,101,101,95,112,95,57,48,0);
          let descO = String.fromCharCode(100,95,49,51,95,108,101,103,101,110,100,0);
          let carouselE = 5;
          let disconnectedq = 1;
         moons /= Math.max(temperatureR, 5);
         fileds += `${carouselE + disconnectedq}`;
         descO = "3";
         carouselE |= descO.length / (Math.max(fileds.length, 9));
         disconnectedq &= carouselE;
      }
      while ((temperatureR % (Math.max(5, 4))) < 5) {
          let score5 = 2;
         temperatureR += moons + 1;
         score5 <<= Math.min(Math.abs(score5), 5);
         break;
      }
      humidityX >>= Math.min(4, notificationn.length);
   }
   for (let o = 0; o < 3; o++) {
      filedE /= Math.max(parseFloat(`${privileged % (Math.max(parseInt(`${editn}`), 2))}`), 4);
   }
      tickP = circleT.length <= 40;
   let trophyR = tickP ? !tickP : tickP;
   do {
      tickP = circleT.includes(editn);
      if (trophyR) {
         break;
      }
   } while (trophyR && (4 == largeo.length || 4 == (4 * largeo.length)));
   while (3 > (4 << (Math.min(1, notificationn.length))) && (notificationn.length << (Math.min(3, Math.abs(humidityX)))) > 4) {
       let policyF = 5;
       let mailO = String.fromCharCode(116,101,115,116,95,50,95,49,55,0);
       let macaur = 3.0;
       let groupQ = String.fromCharCode(115,101,116,105,95,107,95,49,57,0);
         macaur -= policyF | 3;
          let eighteenq = String.fromCharCode(113,95,53,53,95,97,100,100,120,0);
         macaur -= (String.fromCharCode(108,0) == groupQ ? policyF : groupQ.length);
         eighteenq += `${eighteenq.length}`;
      let shrink9 = String.fromCharCode(57,107,49,114,49,56,111,113,56,57,0) == mailO;
      do {
         mailO += `${policyF ^ 1}`;
         if (shrink9) {
            break;
         }
      } while (shrink9 && (policyF == mailO.length));
         macaur *= 1;
       let progress6 = String.fromCharCode(97,112,105,95,105,95,49,50,0);
       let long_twE = String.fromCharCode(121,117,118,112,116,111,117,121,118,121,95,100,95,52,51,0);
       let basketballP = 1.0;
       let membershipI = 2.0;
         mailO += `${progress6.length >> (Math.min(1, Math.abs(parseInt(`${basketballP}`))))}`;
         groupQ = `${(groupQ == String.fromCharCode(120,0) ? parseInt(`${macaur}`) : groupQ.length)}`;
      for (let m = 0; m < 2; m++) {
          let phone4 = 0.0;
          let vignette_ = String.fromCharCode(110,111,101,120,112,95,111,95,49,50,0);
          let bellI = String.fromCharCode(99,95,56,53,95,112,114,111,99,101,115,115,111,114,0);
         macaur -= parseInt(`${phone4}`);
         phone4 -= parseFloat(`${bellI.length}`);
         vignette_ = `${bellI.length}`;
      }
         mailO += `${(String.fromCharCode(100,0) == long_twE ? mailO.length : long_twE.length)}`;
      if (3 <= (policyF % 4) || (policyF % 4) <= 2) {
         policyF += (progress6 == String.fromCharCode(87,0) ? progress6.length : policyF);
      }
      if ((policyF + macaur) == 4.80) {
         policyF |= 1 >> (Math.min(Math.abs(parseInt(`${membershipI}`)), 1));
      }
      notificationn = "1";
      break;
   }
   if ((editn - 3) > 5.17) {
      filedE += parseFloat(`${humidityX}`);
   }
      filedE -= parseFloat(`${largeo.length >> (Math.min(Math.abs(3), 1))}`);
            setSortBy('desc');
        } else {

   for (let v = 0; v < 1; v++) {
      tickP = 75.76 >= filedE;
   }
      humidityX %= Math.max(2 ^ parseInt(`${editn}`), 5);
   let arrow4 = 5334985 >= smallT;
   do {
      smallT >>= Math.min(1, notificationn.length);
      if (arrow4) {
         break;
      }
   } while ((5 < (notificationn.length << (Math.min(Math.abs(2), 4)))) && arrow4);
   for (let g = 0; g < 1; g++) {
      humidityX /= Math.max((String.fromCharCode(115,0) == notificationn ? circleT.length : notificationn.length), 5);
   }
   for (let z = 0; z < 1; z++) {
       let hookT: Array<any> = [760, 53];
       let tumbnailK = String.fromCharCode(116,95,56,57,95,119,114,97,112,112,105,110,103,0);
      if (!tumbnailK.includes(`${hookT.length}`)) {
         tumbnailK += "2";
      }
         hookT.push(hookT.length << (Math.min(tumbnailK.length, 3)));
      let orangeL = 6179062 >= hookT.length;
      do {
         hookT = [(tumbnailK == String.fromCharCode(119,0) ? tumbnailK.length : hookT.length)];
         if (orangeL) {
            break;
         }
      } while ((5 < (hookT.length >> (Math.min(Math.abs(5), 2)))) && orangeL);
      while (hookT.length > tumbnailK.length) {
         tumbnailK += `${tumbnailK.length}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
          let umengv = String.fromCharCode(117,95,54,95,97,108,108,114,103,98,0);
          let configure8 = 5.0;
          let playz = String.fromCharCode(99,95,49,56,95,112,111,115,105,116,105,111,110,115,0);
          let launchB = String.fromCharCode(98,105,110,100,108,105,115,116,95,122,95,52,52,0);
         tumbnailK = `${2 << (Math.min(2, playz.length))}`;
         umengv += `${3 ^ parseInt(`${configure8}`)}`;
         configure8 /= Math.max(4, parseFloat(`${1 - parseInt(`${configure8}`)}`));
         playz += `${(String.fromCharCode(80,0) == launchB ? launchB.length : parseInt(`${configure8}`))}`;
      }
      let floating1 = hookT.length >= 8503607;
      do {
         hookT.push(tumbnailK.length);
         if (floating1) {
            break;
         }
      } while ((tumbnailK.startsWith(`${hookT.length}`)) && floating1);
      circleT.push(largeo.length);
   }
   if (2 <= (privileged >> (Math.min(Math.abs(3), 4))) && (privileged >> (Math.min(largeo.length, 5))) <= 3) {
      largeo = [notificationn.length | largeo.length];
   }
   while (tickP || (editn * 5.12) > 4.33) {
      editn -= parseFloat(`${3 - humidityX}`);
      break;
   }
            setSortBy('asc');
        }
    }

    return (
        <View
            style={{
                ...styles.container,
                paddingLeft: spacing.sideOffset,
                paddingRight: spacing.sideOffset,
                gap: spacing.m
            }}
        >
            <View style={styles.episodeList}>
                <FlatList
                    horizontal
                    data={ranges}
                    renderItem={({ item, index }: { item: string, index: number }) => {
                        return <TouchableOpacity style={styles.btn} onPress={() => setCurrentIndex(index)}>
                            <Text
                                style={{
                                    textAlign: 'center', ...textVariants.header,
                                    color: index === currentIndex ? colors.text : colors.muted,
                                    fontSize: index === currentIndex ? 18 : 15
                                }}>
                                {`${item}集`}
                            </Text>
                        </TouchableOpacity>
                    }}
                />
                {/* <TouchableOpacity style={styles.sortBtn} onPress={sort}>
                    <View style={{ paddingTop: 4 }}>
                        {
                            sortBy === 'asc'
                                ? <SortAscIcon />
                                : <SortDescIcon />
                        }
                    </View>
                    <Text
                        style={{
                            textAlign: 'center', ...textVariants.header,
                            color: colors.muted,
                            fontSize: 15
                        }}>
                        顺序
                    </Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView contentContainerStyle={styles.episodeList}>
                {
                    displayEpisodes?.map((ep, idx) =>
                        <TouchableOpacity key={`expand-${idx}`} onPress={() => {
                            onConfirm(ep.nid);
                            onCancel();
                        }} style={{ paddingRight: spacing.s }}>
                            <View style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                minWidth: 70,
                                marginRight: 'auto',
                                marginBottom: spacing.s,
                                borderRadius: 8
                            }} >
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: 13,
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        color: ep.nid === activeEpisode ? colors.selected : colors.muted,
                                    }}>
                                    {`${ep.name}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    );
};

export default memo(VodEpisodeSelection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    sortBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});