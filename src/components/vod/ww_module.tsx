import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { wwKsadStore, wwReactnativeratings } from '@type/ww_dycreator_result';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/overlayMatch.svg';
import SortDescIcon from '@static/images/binddatasRight.svg';
interface wwIndexDice {
    onConfirm: any,
    onCancel: any,
    episodes?: wwKsadStore
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: wwIndexDice) {
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
       let leakchecker9 = true;
    let relateds = String.fromCharCode(114,101,113,117,101,115,116,95,49,95,57,52,0);
    let typesH = String.fromCharCode(99,95,53,54,95,103,114,111,119,116,104,0);
    let indicatorB = String.fromCharCode(104,95,54,57,95,97,115,101,108,101,99,116,0);
    let episode4 = 3;
    let pagea = 4.0;
    let bdxadsdkO = String.fromCharCode(115,117,98,98,108,111,99,107,95,121,95,51,54,0);
    let privilegej: Array<any> = [2, 933, 518];
    let sansh = true;
    let footballfieldU = String.fromCharCode(114,101,99,111,114,100,101,114,95,51,95,50,48,0);
    let jingdongZ = 2;
    let panglel = false;
    let saveC = 2;
    let paginationb = true;
    let checkbox5 = String.fromCharCode(117,95,56,57,95,103,101,116,115,0);
   if (3 < (bdxadsdkO.length ^ 3)) {
      privilegej.push(jingdongZ * parseInt(`${pagea}`));
   }
      leakchecker9 = pagea > parseFloat(`${relateds.length}`);
       let iconfeedbacks = String.fromCharCode(97,95,57,50,95,112,114,111,108,111,110,103,0);
       let dragclosej = 4;
         dragclosej /= Math.max(4, 3 | dragclosej);
         iconfeedbacks += `${2 + iconfeedbacks.length}`;
      let loginsuccessb = iconfeedbacks == String.fromCharCode(114,101,99,0);
      do {
         iconfeedbacks += `${(iconfeedbacks == String.fromCharCode(57,0) ? dragclosej : iconfeedbacks.length)}`;
         if (loginsuccessb) {
            break;
         }
      } while (loginsuccessb && (3 <= dragclosej));
         dragclosej ^= dragclosej ^ iconfeedbacks.length;
      let liveS = 7058114 <= iconfeedbacks.length;
      do {
          let hiad3 = String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,53,95,52,53,0);
          let mintegralC = 3.0;
          let cornerkicki = 5.0;
          let cancel_ = 5;
          let valuesp: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,105,102,105,101,100,95,114,95,54,48,0),386], [String.fromCharCode(115,104,114,105,110,107,95,103,95,56,54,0),565]]);
         iconfeedbacks += `${3 ^ hiad3.length}`;
         hiad3 = "3";
         mintegralC += 2;
         cornerkicki /= Math.max(5, 3);
         cancel_ %= Math.max(2, 5);
         valuesp.set(`${cornerkicki}`, parseInt(`${cornerkicki}`) % (Math.max(5, valuesp.size)));
         if (liveS) {
            break;
         }
      } while ((5 > (5 & dragclosej) || (dragclosej & iconfeedbacks.length) > 5) && liveS);
         dragclosej >>= Math.min(Math.abs(iconfeedbacks.length >> (Math.min(4, Math.abs(dragclosej)))), 5);
      jingdongZ *= 2;
      panglel = indicatorB.includes(`${episode4}`);
   for (let x = 0; x < 1; x++) {
      sansh = ((footballfieldU.length - (!sansh ? footballfieldU.length : 81)) > 81);
   }
   let telegramt = 5117163 <= typesH.length;
   do {
      typesH += `${3 + bdxadsdkO.length}`;
      if (telegramt) {
         break;
      }
   } while (telegramt && (!bdxadsdkO.startsWith(typesH)));
   if (4 >= bdxadsdkO.length) {
      panglel = 23 <= jingdongZ || panglel;
   }
   for (let x = 0; x < 1; x++) {
      bdxadsdkO += "3";
   }
      relateds += `${episode4}`;
      jingdongZ -= privilegej.length % (Math.max(8, footballfieldU.length));

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

       let homej = String.fromCharCode(114,101,105,110,105,116,95,103,95,57,52,0);
       let nextU: Map<any, any> = new Map([[String.fromCharCode(99,111,112,116,115,95,121,95,52,56,0),755], [String.fromCharCode(122,95,56,49,95,114,101,115,101,110,116,97,116,105,111,110,0),802]]);
       let agreementJ = 3;
      if (1 == (homej.length / 1) && 3 == (homej.length / 1)) {
         nextU = new Map([[`${nextU.size}`, nextU.size | 1]]);
      }
      if (nextU.get(`${agreementJ}`) == null) {
          let historyX: Array<any> = [String.fromCharCode(111,95,53,55,95,97,109,116,0), String.fromCharCode(99,95,53,54,95,99,111,110,116,105,110,101,110,116,0)];
          let r_unlockK = String.fromCharCode(108,95,55,54,0);
          let layoutB = String.fromCharCode(97,95,48,95,99,108,111,115,101,100,0);
          let lineG = String.fromCharCode(117,112,108,111,97,100,97,98,108,101,95,120,95,53,55,0);
          let iconbackwhite5: Array<any> = [String.fromCharCode(108,95,57,48,95,115,101,110,100,101,114,0), String.fromCharCode(120,95,51,95,109,108,111,99,107,0), String.fromCharCode(97,95,51,48,95,112,105,120,102,109,116,115,0)];
         nextU.set(homej, (String.fromCharCode(104,0) == homej ? historyX.length : homej.length));
         historyX.push(2);
         r_unlockK += `${lineG.length}`;
         layoutB += `${lineG.length}`;
         iconbackwhite5.push((String.fromCharCode(75,0) == layoutB ? layoutB.length : iconbackwhite5.length));
      }
      if ((agreementJ % (Math.max(1, 1))) >= 5 && (1 % (Math.max(5, agreementJ))) >= 3) {
         nextU.set(homej, nextU.size);
      }
      for (let q = 0; q < 1; q++) {
          let halft = 1.0;
         homej += `${parseInt(`${halft}`)}`;
      }
         nextU.set(`${agreementJ}`, 1);
      for (let h = 0; h < 1; h++) {
         agreementJ *= 1;
      }
         agreementJ *= 3 + agreementJ;
      let libreactperfloggerjni4 = nextU.size <= 8918783;
      do {
         nextU.set(`${agreementJ}`, 1 << (Math.min(2, Math.abs(nextU.size))));
         if (libreactperfloggerjni4) {
            break;
         }
      } while (libreactperfloggerjni4 && (3 == (homej.length / (Math.max(2, 5)))));
      let navigation5 = 7675756 <= nextU.size;
      do {
          let chatl = 2.0;
          let flyeri = String.fromCharCode(97,99,116,105,118,97,116,101,95,52,95,54,51,0);
         nextU = new Map([[flyeri, homej.length]]);
         chatl -= parseInt(`${chatl}`);
         flyeri += `${parseInt(`${chatl}`) / 3}`;
         if (navigation5) {
            break;
         }
      } while (navigation5 && ((nextU.size % (Math.max(homej.length, 3))) > 5 || (5 % (Math.max(10, nextU.size))) > 3));
      episode4 |= 1 >> (Math.min(3, typesH.length));
   while ((indicatorB.length * jingdongZ) >= 1) {
      indicatorB = `${1 - jingdongZ}`;
      break;
   }
      relateds += `${(relateds == String.fromCharCode(118,0) ? (sansh ? 3 : 2) : relateds.length)}`;
   if (parseInt(`${pagea}`) >= bdxadsdkO.length) {
      bdxadsdkO += `${relateds.length}`;
   }
   while ((privilegej.length | footballfieldU.length) == 3 || (privilegej.length | 3) == 1) {
       let roomi = true;
      if (!roomi) {
          let templateprocessorN: Map<any, any> = new Map([[String.fromCharCode(116,95,53,49,95,97,100,116,115,116,111,97,115,99,0),614], [String.fromCharCode(100,101,108,105,109,95,54,95,54,54,0),554], [String.fromCharCode(112,97,105,114,115,95,107,95,57,49,0),465]]);
         roomi = !roomi;
         templateprocessorN.set(`${templateprocessorN.size}`, templateprocessorN.size * templateprocessorN.size);
      }
      if (roomi) {
         roomi = !roomi;
      }
      let albumb = roomi ? !roomi : roomi;
      do {
         roomi = !roomi;
         if (albumb) {
            break;
         }
      } while ((!roomi || roomi) && albumb);
      privilegej = [((panglel ? 5 : 3))];
      break;
   }
   if (3 > (parseInt(`${pagea}`) + bdxadsdkO.length) || (parseInt(`${pagea}`) + 3) > 2) {
      bdxadsdkO += `${privilegej.length}`;
   }
       let xvodD = String.fromCharCode(119,101,101,107,95,98,95,54,57,0);
       let merger0: Map<any, any> = new Map([[String.fromCharCode(104,95,53,49,95,114,101,99,101,110,116,0),742], [String.fromCharCode(112,95,54,51,95,108,110,110,105,100,0),887], [String.fromCharCode(97,108,108,111,99,97,116,101,95,98,95,57,50,0),262]]);
       let controlk: Array<any> = [365, 258];
         xvodD += `${controlk.length * 3}`;
       let typesd = true;
       let bottomS = true;
         merger0 = new Map([[`${merger0.size}`, merger0.size - controlk.length]]);
       let description__nk = String.fromCharCode(119,114,97,112,112,101,114,95,53,95,51,56,0);
         bottomS = !typesd || !bottomS;
         xvodD = `${((bottomS ? 1 : 2) | xvodD.length)}`;
      let chart6 = description__nk.length <= 7577826;
      do {
         description__nk = "3";
         if (chart6) {
            break;
         }
      } while ((description__nk.endsWith(xvodD)) && chart6);
      if (controlk.length > 1) {
         typesd = controlk.length >= description__nk.length;
      }
         description__nk += `${merger0.size}`;
      jingdongZ |= merger0.size / 3;
   let release_iq6 = indicatorB == String.fromCharCode(55,55,115,0);
   do {
      indicatorB = "1";
      if (release_iq6) {
         break;
      }
   } while ((!indicatorB.includes(typesH)) && release_iq6);
   if (2 <= jingdongZ) {
      jingdongZ ^= 2;
   }
   while (privilegej.length <= 5) {
      privilegej.push((relateds == String.fromCharCode(66,0) ? relateds.length : jingdongZ));
      break;
   }
        if (sortBy === 'desc') {

   let progressg = panglel ? !panglel : panglel;
   do {
      panglel = typesH.length > jingdongZ;
      if (progressg) {
         break;
      }
   } while ((!bdxadsdkO.endsWith(`${panglel}`)) && progressg);
   if (5 == privilegej.length) {
       let predictionactivem = 5;
       let footballfield7: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,48,95,114,101,97,100,113,0),554], [String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,102,95,51,52,0),797]]);
       let launcherx = 1.0;
       let const_pzt = String.fromCharCode(108,95,52,48,95,98,97,99,107,115,112,97,99,101,0);
       let loadingQ = true;
         launcherx -= parseFloat(`${footballfield7.size}`);
      for (let i = 0; i < 2; i++) {
          let defaultfootballbgk = String.fromCharCode(106,95,53,49,95,114,103,98,0);
          let completed = 0;
          let verticalt = 2;
          let downe = String.fromCharCode(104,95,57,51,95,104,121,115,99,97,108,101,0);
          let away6 = 1.0;
         footballfield7 = new Map([[const_pzt, const_pzt.length]]);
         defaultfootballbgk += `${downe.length & 3}`;
         completed *= 1;
         verticalt /= Math.max(1, verticalt);
         downe += `${parseInt(`${away6}`) - 2}`;
         away6 -= parseFloat(`${1 >> (Math.min(2, defaultfootballbgk.length))}`);
      }
      let libreactperfloggerjniu = 8738658.0 <= launcherx;
      do {
         launcherx += (parseFloat(`${(loadingQ ? 2 : 4) + 3}`));
         if (libreactperfloggerjniu) {
            break;
         }
      } while (libreactperfloggerjniu && (!Array.from(footballfield7.keys()).includes(`${launcherx}`)));
       let mintegral9 = String.fromCharCode(115,107,105,112,112,97,98,108,101,95,113,95,49,54,0);
       let screenY = String.fromCharCode(116,99,112,95,97,95,49,50,0);
      if (!screenY.includes(mintegral9)) {
         screenY += `${mintegral9.length ^ 1}`;
      }
         footballfield7 = new Map([[mintegral9, 1]]);
         mintegral9 += `${predictionactivem | footballfield7.size}`;
          let toponw = String.fromCharCode(98,95,49,54,95,98,105,103,105,110,116,101,103,101,114,0);
          let sportsp = String.fromCharCode(109,98,99,109,112,95,122,95,56,48,0);
         screenY += `${screenY.length ^ 2}`;
         toponw = `${(toponw == String.fromCharCode(49,0) ? toponw.length : sportsp.length)}`;
         sportsp = `${sportsp.length}`;
          let baidu8: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,99,95,52,57,0),597], [String.fromCharCode(121,97,100,105,102,95,112,95,50,50,0),338], [String.fromCharCode(112,112,99,99,111,109,109,111,110,95,54,95,51,56,0),147]]);
          let hookv = String.fromCharCode(112,114,101,112,101,110,100,95,52,95,53,54,0);
          let libglogz: Array<any> = [919, 936];
         launcherx += parseFloat(`${2 ^ mintegral9.length}`);
         baidu8.set(hookv, 2);
         hookv = `${hookv.length}`;
         libglogz.push(3 ^ hookv.length);
      while (loadingQ) {
         const_pzt = `${((loadingQ ? 3 : 1) >> (Math.min(Math.abs(footballfield7.size), 5)))}`;
         break;
      }
         footballfield7.set(`${predictionactivem}`, footballfield7.size);
      for (let w = 0; w < 1; w++) {
         screenY = "1";
      }
      if (footballfield7.size >= 2) {
          let formq: Map<any, any> = new Map([[String.fromCharCode(103,95,51,56,95,98,101,120,116,0),String.fromCharCode(118,95,55,95,115,99,111,114,101,115,0)], [String.fromCharCode(116,95,49,48,95,97,108,105,97,115,101,115,0),String.fromCharCode(107,95,57,56,95,115,116,114,105,110,103,117,116,105,108,115,0)]]);
          let leagueE: Map<any, any> = new Map([[String.fromCharCode(115,105,108,101,110,116,108,121,95,113,95,54,50,0),610], [String.fromCharCode(103,101,110,101,114,97,116,101,100,95,48,95,56,54,0),641], [String.fromCharCode(115,97,118,105,110,103,115,95,120,95,55,57,0),967]]);
          let refreshO: Map<any, any> = new Map([[String.fromCharCode(121,95,49,50,95,112,101,114,99,101,110,116,105,108,101,0),71], [String.fromCharCode(100,101,118,101,108,111,112,101,114,95,48,95,52,53,0),334]]);
         footballfield7.set(screenY, screenY.length);
         formq.set(`${refreshO.size}`, refreshO.size & 3);
         leagueE.set(`${leagueE.size}`, 1);
      }
      if (loadingQ) {
          let theme7 = String.fromCharCode(109,101,114,103,105,110,103,95,118,95,54,51,0);
          let sentryL = false;
         loadingQ = String.fromCharCode(120,0) == mintegral9 || 80 >= footballfield7.size;
         theme7 += `${theme7.length}`;
         sentryL = (75 > (theme7.length - (sentryL ? theme7.length : 75)));
      }
      while (loadingQ) {
          let predictionbannersharedC = String.fromCharCode(119,104,105,116,101,95,110,95,50,52,0);
         const_pzt += `${footballfield7.size << (Math.min(Math.abs(1), 5))}`;
         predictionbannersharedC += "2";
         break;
      }
      bdxadsdkO += `${privilegej.length}`;
   }
       let predictionbannersharedG = String.fromCharCode(99,97,112,105,116,97,108,105,122,101,95,101,95,54,56,0);
       let pangleS: Array<any> = [String.fromCharCode(108,117,97,95,51,95,54,54,0), String.fromCharCode(115,116,97,99,107,118,105,101,119,95,97,95,50,49,0), String.fromCharCode(99,95,54,95,102,105,110,97,108,105,115,101,114,0)];
       let minimize1 = 3;
      if (!predictionbannersharedG.startsWith(`${pangleS.length}`)) {
         predictionbannersharedG = `${predictionbannersharedG.length + 1}`;
      }
      while (3 < (pangleS.length + 1) || 5 < (1 + minimize1)) {
         pangleS.push(2 + minimize1);
         break;
      }
       let libzeusN: Array<any> = [694, 256, 846];
         minimize1 &= pangleS.length;
      for (let h = 0; h < 2; h++) {
          let icon5: Map<any, any> = new Map([[String.fromCharCode(107,95,57,57,95,112,111,115,116,98,111,120,0),true ], [String.fromCharCode(97,116,116,114,105,98,117,116,101,115,95,117,95,56,55,0),true ], [String.fromCharCode(115,95,54,57,95,97,110,111,116,104,101,114,0),false ]]);
          let diceA: Array<any> = [String.fromCharCode(120,95,52,52,95,103,99,109,0), String.fromCharCode(99,104,97,110,103,105,110,103,95,122,95,51,52,0), String.fromCharCode(112,111,115,105,116,105,111,110,115,95,101,95,50,0)];
          let untickm = String.fromCharCode(99,97,110,99,101,108,108,101,114,95,122,95,56,54,0);
          let default_q9W = String.fromCharCode(104,100,97,116,97,95,105,95,56,57,0);
         pangleS.push(2 - default_q9W.length);
         icon5 = new Map([[`${icon5.size}`, 2 | diceA.length]]);
         diceA = [icon5.size];
         untickm = `${diceA.length}`;
         default_q9W += "2";
      }
         minimize1 /= Math.max(predictionbannersharedG.length, 5);
          let streamingN: Map<any, any> = new Map([[String.fromCharCode(97,114,103,120,95,118,95,52,55,0),372], [String.fromCharCode(98,95,48,95,105,110,102,101,114,101,100,0),18], [String.fromCharCode(118,112,111,105,110,116,95,119,95,48,0),303]]);
         minimize1 *= predictionbannersharedG.length - pangleS.length;
         streamingN = new Map([[`${streamingN.size}`, streamingN.size]]);
         minimize1 &= predictionbannersharedG.length;
          let proxyc: Array<any> = [871, 522];
          let libavutil8 = 2.0;
         minimize1 ^= parseInt(`${libavutil8}`);
         proxyc.push(proxyc.length);
         libavutil8 *= parseFloat(`${2}`);
      footballfieldU = `${relateds.length}`;
   let customC = leakchecker9 ? !leakchecker9 : leakchecker9;
   do {
      leakchecker9 = sansh && leakchecker9;
      if (customC) {
         break;
      }
   } while (customC && (relateds.length >= 3 || leakchecker9));
      bdxadsdkO += `${relateds.length & episode4}`;
      panglel = typesH.length >= jingdongZ;
   if (!panglel) {
      footballfieldU += `${bdxadsdkO.length}`;
   }
      jingdongZ &= indicatorB.length / 1;
      relateds += `${parseInt(`${pagea}`) << (Math.min(5, Math.abs(1)))}`;
       let libyoga7 = String.fromCharCode(111,95,56,49,95,119,109,97,112,114,111,100,97,116,97,0);
       let philippinesB = 3.0;
       let megaphoneM: Map<any, any> = new Map([[String.fromCharCode(119,95,52,49,95,97,99,99,101,115,115,111,114,121,0),21], [String.fromCharCode(105,95,52,57,95,100,99,98,108,111,99,107,0),910], [String.fromCharCode(110,101,103,111,116,105,97,116,101,95,105,95,57,51,0),386]]);
         philippinesB -= parseFloat(`${megaphoneM.size}`);
      let countrym = philippinesB >= 6936387.0;
      do {
         philippinesB -= parseFloat(`${libyoga7.length}`);
         if (countrym) {
            break;
         }
      } while (countrym && ((philippinesB - parseFloat(`${megaphoneM.size}`)) < 5.30));
          let canvas9 = String.fromCharCode(97,95,54,54,95,105,109,103,0);
          let refresh8 = 0.0;
         philippinesB /= Math.max(1, (parseFloat(`${libyoga7 == String.fromCharCode(72,0) ? parseInt(`${refresh8}`) : libyoga7.length}`)));
         canvas9 += "3";
         refresh8 += (parseFloat(`${canvas9 == String.fromCharCode(81,0) ? canvas9.length : canvas9.length}`));
      let schedulern = libyoga7.length >= 6731342;
      do {
          let eighteene = String.fromCharCode(98,97,115,101,108,105,110,101,95,56,95,51,51,0);
         libyoga7 = `${libyoga7.length * 3}`;
         eighteene += `${eighteene.length}`;
         if (schedulern) {
            break;
         }
      } while (schedulern && (2 > (megaphoneM.size | libyoga7.length)));
      let launchf = philippinesB <= 5014873.0;
      do {
         philippinesB /= Math.max(parseFloat(`${parseInt(`${philippinesB}`)}`), 4);
         if (launchf) {
            break;
         }
      } while (launchf && ((parseInt(`${philippinesB}`) - libyoga7.length) > 1));
      if (Array.from(megaphoneM.values()).includes(philippinesB)) {
         megaphoneM.set(libyoga7, (libyoga7 == String.fromCharCode(85,0) ? parseInt(`${philippinesB}`) : libyoga7.length));
      }
       let teamB = 2;
      while ((philippinesB / (Math.max(4.95, 3))) >= 4.60) {
          let data5 = true;
          let current2 = String.fromCharCode(108,95,51,51,95,99,117,118,105,100,0);
         teamB -= libyoga7.length >> (Math.min(Math.abs(2), 5));
         data5 = current2.startsWith(`${data5}`);
         current2 = `${(String.fromCharCode(67,0) == current2 ? current2.length : (data5 ? 3 : 4))}`;
         break;
      }
         megaphoneM.set(libyoga7, libyoga7.length - 1);
      pagea *= (parseFloat(`${(leakchecker9 ? 3 : 2) >> (Math.min(relateds.length, 4))}`));
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let holder2: Array<any> = [String.fromCharCode(109,95,54,55,95,115,116,114,108,101,110,0), String.fromCharCode(99,95,52,55,95,107,101,121,118,97,108,0)];
    let materialM = String.fromCharCode(117,95,57,52,95,100,101,116,97,99,104,0);
    let greenQ = 5.0;
    let libreanimatedK: Map<any, any> = new Map([[String.fromCharCode(100,101,99,108,116,121,112,101,95,54,95,51,51,0),199], [String.fromCharCode(108,112,99,109,95,97,95,55,57,0),91]]);
    let moduleG = 4.0;
    let chartj = String.fromCharCode(118,101,114,108,97,121,95,110,95,51,53,0);
    let colorsu = 3;
    let manifestW = String.fromCharCode(102,116,118,100,111,99,95,105,95,57,56,0);
    let shoote = String.fromCharCode(122,95,52,55,95,117,110,115,101,114,105,97,108,105,122,101,0);
   let sportk = 8822338 >= colorsu;
   do {
      colorsu |= holder2.length;
      if (sportk) {
         break;
      }
   } while (sportk && (manifestW.startsWith(`${colorsu}`)));
   if (!chartj.endsWith(`${colorsu}`)) {
      colorsu <<= Math.min(Math.abs(colorsu ^ 3), 4);
   }
      colorsu += 3;
      holder2.push(holder2.length);
      moduleG /= Math.max((parseFloat(`${shoote == String.fromCharCode(48,0) ? shoote.length : holder2.length}`)), 1);
   for (let j = 0; j < 2; j++) {
      manifestW = `${chartj.length}`;
   }
   let imagesx = String.fromCharCode(103,54,57,53,110,52,50,95,103,111,0) == shoote;
   do {
       let zhuboS = String.fromCharCode(107,95,55,57,95,115,101,103,102,101,97,116,117,114,101,0);
       let mergerg = false;
         zhuboS += `${(3 % (Math.max(1, (mergerg ? 3 : 1))))}`;
      let turndown1 = mergerg ? !mergerg : mergerg;
      do {
          let eventsplashn = 2.0;
          let greyarrowup0 = String.fromCharCode(110,111,111,112,95,49,95,50,49,0);
          let watchR = String.fromCharCode(97,118,103,121,95,101,95,50,52,0);
         mergerg = (greyarrowup0.length * zhuboS.length) == 73;
         eventsplashn += (watchR == String.fromCharCode(90,0) ? watchR.length : parseInt(`${eventsplashn}`));
         greyarrowup0 += `${watchR.length | 3}`;
         if (turndown1) {
            break;
         }
      } while ((1 >= zhuboS.length || !mergerg) && turndown1);
      for (let f = 0; f < 1; f++) {
          let penaltygoalL: Array<any> = [980, 216, 779];
          let notification2: Map<any, any> = new Map([[String.fromCharCode(106,95,50,56,95,99,97,108,99,117,108,97,116,105,110,103,0),648], [String.fromCharCode(115,111,117,114,99,101,105,100,95,112,95,57,57,0),979], [String.fromCharCode(101,95,54,55,95,111,112,101,110,115,115,108,0),610]]);
          let orientationD = String.fromCharCode(115,99,114,117,98,98,101,114,95,51,95,54,49,0);
         zhuboS += `${notification2.size}`;
         penaltygoalL.push(penaltygoalL.length);
         notification2.set(orientationD, orientationD.length * penaltygoalL.length);
      }
      let mbnativeadvancedX = mergerg ? !mergerg : mergerg;
      do {
         mergerg = !mergerg;
         if (mbnativeadvancedX) {
            break;
         }
      } while (mbnativeadvancedX && (mergerg));
      while (zhuboS.endsWith(`${mergerg}`)) {
         zhuboS += `${((mergerg ? 5 : 2))}`;
         break;
      }
       let yellowredcard_ = String.fromCharCode(120,95,57,50,95,116,101,109,112,0);
       let buttonz = String.fromCharCode(120,95,52,48,95,99,111,110,110,101,99,116,120,0);
      shoote = `${(String.fromCharCode(102,0) == chartj ? manifestW.length : chartj.length)}`;
      if (imagesx) {
         break;
      }
   } while ((shoote.length < 2) && imagesx);

        if (sortBy === 'asc') {

      materialM = `${3 + manifestW.length}`;
   if (parseInt(`${greenQ}`) < manifestW.length) {
      greenQ *= libreanimatedK.size % (Math.max(3, 4));
   }
      chartj = `${(materialM == String.fromCharCode(68,0) ? holder2.length : materialM.length)}`;
   let iconsharei = colorsu >= 6364270;
   do {
      colorsu -= colorsu;
      if (iconsharei) {
         break;
      }
   } while (iconsharei && (4 <= (colorsu ^ manifestW.length)));
       let temperatureZ = String.fromCharCode(108,111,99,107,110,101,115,115,95,50,95,50,52,0);
       let profileactiveW = 5.0;
      for (let c = 0; c < 3; c++) {
         temperatureZ = `${temperatureZ.length - parseInt(`${profileactiveW}`)}`;
      }
         profileactiveW += temperatureZ.length << (Math.min(4, Math.abs(parseInt(`${profileactiveW}`))));
         profileactiveW /= Math.max(parseInt(`${profileactiveW}`) * 1, 1);
      if (temperatureZ.endsWith(`${profileactiveW}`)) {
         profileactiveW -= 3;
      }
      while (temperatureZ.endsWith(`${profileactiveW}`)) {
          let yellowredcardX: Array<any> = [328, 628];
          let string6 = String.fromCharCode(117,115,97,103,101,95,114,95,50,49,0);
          let subsl: Array<any> = [String.fromCharCode(116,115,101,113,95,116,95,51,51,0), String.fromCharCode(120,95,51,57,95,99,111,114,101,105,109,97,103,101,0), String.fromCharCode(115,116,114,105,112,95,98,95,56,53,0)];
          let sourceX = String.fromCharCode(120,95,52,48,95,116,105,109,101,114,0);
          let footballJ = 1.0;
         temperatureZ += `${(String.fromCharCode(98,0) == sourceX ? yellowredcardX.length : sourceX.length)}`;
         yellowredcardX = [3];
         string6 += `${parseInt(`${footballJ}`) | subsl.length}`;
         subsl = [parseInt(`${footballJ}`)];
         break;
      }
       let abidetectU = 5.0;
      chartj += `${holder2.length}`;
   for (let y = 0; y < 1; y++) {
      greenQ -= 1 / (Math.max(10, manifestW.length));
   }
       let settingsq = String.fromCharCode(100,95,54,95,109,106,112,101,103,100,101,99,0);
      let lessY = 6412600 >= settingsq.length;
      do {
         settingsq += `${settingsq.length}`;
         if (lessY) {
            break;
         }
      } while ((settingsq.includes(settingsq)) && lessY);
       let iconplayg: Map<any, any> = new Map([[String.fromCharCode(97,95,52,49,95,117,110,109,97,114,115,104,97,108,0),476], [String.fromCharCode(110,111,110,98,108,111,99,107,105,110,103,95,55,95,50,56,0),858], [String.fromCharCode(114,101,112,108,97,99,101,115,95,115,95,50,52,0),100]]);
       let alertQ: Array<any> = [224, 989, 805];
      holder2.push(chartj.length);
            setSortBy('desc');
        } else {

   if (!holder2.includes(colorsu)) {
      colorsu -= materialM.length ^ 2;
   }
      manifestW += `${2 - colorsu}`;
       let arrowrightk = true;
      let templateprocessorb = arrowrightk ? !arrowrightk : arrowrightk;
      do {
         arrowrightk = !arrowrightk;
         if (templateprocessorb) {
            break;
         }
      } while (templateprocessorb && (!arrowrightk || !arrowrightk));
      if (!arrowrightk) {
         arrowrightk = (arrowrightk ? !arrowrightk : arrowrightk);
      }
      for (let m = 0; m < 1; m++) {
         arrowrightk = (!arrowrightk ? !arrowrightk : !arrowrightk);
      }
      moduleG += (parseFloat(`${(arrowrightk ? 3 : 3) - 1}`));
   for (let g = 0; g < 3; g++) {
       let greenf: Map<any, any> = new Map([[String.fromCharCode(119,95,57,95,102,101,116,99,104,105,110,103,0),651], [String.fromCharCode(108,101,109,111,110,95,48,95,56,0),334], [String.fromCharCode(122,95,52,57,95,108,105,107,101,108,121,0),460]]);
       let privacyk = String.fromCharCode(116,95,49,48,95,117,97,110,0);
         privacyk += "2";
      while (!privacyk.startsWith(`${greenf.size}`)) {
          let eventsplash_ = true;
          let statsZ = true;
          let successU = true;
         greenf = new Map([[`${greenf.size}`, 1]]);
         eventsplash_ = successU;
         statsZ = (!successU ? !eventsplash_ : !successU);
         break;
      }
         privacyk = `${greenf.size << (Math.min(Math.abs(3), 1))}`;
      if ((privacyk.length & 4) < 5) {
         privacyk = `${privacyk.length}`;
      }
       let crossz: Array<any> = [585, 975, 64];
         privacyk += `${privacyk.length}`;
      materialM = `${parseInt(`${greenQ}`) | shoote.length}`;
   }
      holder2 = [materialM.length];
      moduleG -= parseFloat(`${shoote.length / (Math.max(2, 1))}`);
   for (let z = 0; z < 3; z++) {
       let uploadK = String.fromCharCode(106,95,50,95,112,114,111,102,105,108,105,110,103,0);
       let signinupB: Array<any> = [227, 463, 838];
       let favoriteB: Array<any> = [542, 143, 5];
       let anytimeb = String.fromCharCode(111,95,54,54,95,111,98,106,99,0);
       let googleh = false;
          let matchactivep = String.fromCharCode(110,95,50,56,95,115,117,115,112,101,110,100,101,100,0);
         favoriteB = [favoriteB.length];
         matchactivep = "2";
      while ((signinupB.length | 2) <= 4 || 2 <= (signinupB.length | uploadK.length)) {
         signinupB.push(1);
         break;
      }
      for (let w = 0; w < 3; w++) {
          let buildN = 5;
          let componentC = 2.0;
          let matchactivet = String.fromCharCode(107,95,57,95,97,112,112,101,110,100,99,104,97,114,0);
          let tooltipse: Map<any, any> = new Map([[String.fromCharCode(109,97,99,114,111,95,51,95,55,49,0),String.fromCharCode(111,95,55,95,102,111,114,109,0)], [String.fromCharCode(105,110,115,101,110,115,105,116,105,118,101,95,116,95,53,52,0),String.fromCharCode(103,95,53,55,95,101,120,101,99,117,116,105,110,103,0)]]);
          let buttonM = String.fromCharCode(109,95,54,95,100,101,102,101,114,0);
         favoriteB = [((googleh ? 1 : 1) ^ 3)];
         buildN %= Math.max(5, tooltipse.size / 3);
         componentC /= Math.max(parseFloat(`${parseInt(`${componentC}`) % 1}`), 2);
         matchactivet += `${buttonM.length ^ 2}`;
         tooltipse.set(matchactivet, buildN);
         buttonM = `${buildN}`;
      }
      for (let t = 0; t < 2; t++) {
         uploadK += "3";
      }
         googleh = uploadK.length == favoriteB.length;
      let libffmpegkits = String.fromCharCode(57,51,49,122,95,51,95,50,0) == uploadK;
      do {
         uploadK += `${uploadK.length}`;
         if (libffmpegkits) {
            break;
         }
      } while (libffmpegkits && (anytimeb != uploadK));
       let inactive7: Array<any> = [356, 155];
       let customb = String.fromCharCode(107,101,121,119,111,114,100,115,95,100,95,50,50,0);
      let catalogf = googleh ? !googleh : googleh;
      do {
          let bootsplashG = String.fromCharCode(108,111,97,115,95,97,95,57,55,0);
          let episodesB: Array<any> = [504, 864];
         googleh = ((customb.length & (googleh ? customb.length : 63)) > 63);
         bootsplashG += `${3 / (Math.max(10, episodesB.length))}`;
         episodesB = [episodesB.length << (Math.min(bootsplashG.length, 3))];
         if (catalogf) {
            break;
         }
      } while ((anytimeb.includes(`${googleh}`)) && catalogf);
         favoriteB.push(customb.length);
      if (anytimeb.length > 5) {
          let rulesM: Array<any> = [String.fromCharCode(97,117,100,105,101,110,99,101,95,117,95,51,51,0), String.fromCharCode(117,95,50,53,95,101,113,117,97,108,105,122,101,114,0)];
          let handlerl = 5;
          let manifesty = String.fromCharCode(112,101,97,107,95,109,95,50,50,0);
          let predictionactiveQ = String.fromCharCode(98,95,56,51,95,103,101,110,101,114,97,116,101,102,105,108,101,0);
          let gdtadvi: Map<any, any> = new Map([[String.fromCharCode(115,112,97,109,95,103,95,53,56,0),767], [String.fromCharCode(109,95,53,95,101,115,115,105,111,110,0),145]]);
         anytimeb += `${signinupB.length & gdtadvi.size}`;
         rulesM = [1];
         handlerl &= manifesty.length;
         manifesty += `${handlerl % (Math.max(6, rulesM.length))}`;
         predictionactiveQ += `${(manifesty == String.fromCharCode(52,0) ? manifesty.length : predictionactiveQ.length)}`;
         gdtadvi.set(`${handlerl}`, 3);
      }
      libreanimatedK.set(uploadK, shoote.length);
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
                                        color: ep.nid === activeEpisode ? colors.primaryContrast : colors.muted,
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