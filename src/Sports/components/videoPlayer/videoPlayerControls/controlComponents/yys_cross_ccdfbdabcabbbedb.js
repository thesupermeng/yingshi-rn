import {useSelector} from 'react-redux';
import {StyleSheet, View, Image, Text} from 'react-native';
import AreaChart from '../../../areaChart';
import BasketballMatchTeamDetails from '../../../basketballLiveDetails/basketballMatchTeamDetails';
import {
  CornerKick,
  Goal,
  PenaltyGoal,
  RedCard,
  YellowCard,
  YellowToRedCard,
} from '../../../../assets';
import {useState} from 'react';
import NoDataIcon from '../../images/icons/robotoStation.png';

const iconArray = [
  [Goal, '进球'],
  [CornerKick, '角球'],
  [YellowCard, '黄牌'],
  [RedCard, '红牌'],
  [YellowToRedCard, '红黄两变'],
];

const IconLegend = ({text, icon}) => {
  return (
    <View style={styles.iconGroup}>
      <Image style={styles.icon} source={icon} resizeMode="center" />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const NoData = () => {
       let thumbnaily = 2.0;
    let telemetryr = true;
    let buttonX = 0.0;
    let orangeclocka = 3.0;
    let orangetickb = 5;
    let tempnodata_ = new Map([[String.fromCharCode(105,102,97,109,115,103,95,54,95,57,53,0),String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,0)], [String.fromCharCode(105,110,100,105,99,101,115,0),String.fromCharCode(112,97,99,107,101,116,0)], [String.fromCharCode(103,114,97,98,98,101,114,0),String.fromCharCode(117,110,105,111,110,101,100,0)]]);
    let imagest = 3;
    let libfollyA = String.fromCharCode(114,95,54,50,95,99,114,101,97,116,101,0);
    let libcrashsdkR = String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,0);
    let iconorientationt = String.fromCharCode(105,110,116,114,97,0);
    let umengS = [String.fromCharCode(97,112,101,114,0), String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,120,95,50,48,0)];
    let icondefaultthumbnail7 = 0.0;
    let modalw = String.fromCharCode(117,110,115,101,110,100,0);
      libcrashsdkR = "2";
      orangeclocka -= (parseFloat(`${(telemetryr ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${thumbnaily}`)), 1))}`));
   for (let k = 0; k < 1; k++) {
       let qaagl = true;
       let iconnewsshare2 = [String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,0), String.fromCharCode(104,109,97,99,105,100,0)];
       let acceptedp = String.fromCharCode(111,108,111,114,0);
       let libturbomodulejsijnii = true;
          let graphicsv = true;
          let awayteamfield9 = String.fromCharCode(111,95,56,57,95,98,108,117,114,114,97,98,108,101,0);
         libturbomodulejsijnii = (69 < (iconnewsshare2.length ^ (qaagl ? 69 : iconnewsshare2.length)));
         graphicsv = !graphicsv;
         awayteamfield9 = `${((graphicsv ? 1 : 3) >> (Math.min(Math.abs(3), 1)))}`;
         acceptedp += `${(3 * (libturbomodulejsijnii ? 1 : 2))}`;
         libturbomodulejsijnii = (57 > ((libturbomodulejsijnii ? acceptedp.length : 57) - acceptedp.length));
      while (libturbomodulejsijnii) {
         acceptedp = `${iconnewsshare2.length}`;
         break;
      }
         qaagl = acceptedp.length == 95;
       let ruleso = String.fromCharCode(103,97,105,110,99,0);
       let ajaxD = String.fromCharCode(108,111,97,100,95,97,95,56,55,0);
         qaagl = 61 > ajaxD.length;
         acceptedp = "3";
      libcrashsdkR += `${tempnodata_.size}`;
   }
      tempnodata_[iconorientationt] = 3 / (Math.max(3, iconorientationt.length));
   do {
       let notificationgray8 = true;
       let leagueA = String.fromCharCode(112,101,114,99,101,110,116,105,108,101,0);
       let middleq = String.fromCharCode(97,118,105,111,0);
       let formz = true;
         formz = !formz;
      while (!middleq.includes(`${formz}`)) {
         middleq += `${(leagueA.length << (Math.min(4, Math.abs((notificationgray8 ? 4 : 5)))))}`;
         break;
      }
      for (let x = 0; x < 3; x++) {
          let a_imageF = 5;
          let airbnbstarselectedQ = new Map([[String.fromCharCode(103,95,53,51,0),770], [String.fromCharCode(101,120,112,110,97,100,101,100,0),649], [String.fromCharCode(117,100,105,111,0),87]]);
         leagueA += `${middleq.length}`;
         a_imageF &= a_imageF;
         airbnbstarselectedQ[`${a_imageF}`] = airbnbstarselectedQ.size & a_imageF;
      }
          let sourceL = 5;
         formz = middleq.length >= 96 && !notificationgray8;
         sourceL <<= Math.min(3, Math.abs(sourceL << (Math.min(Math.abs(3), 1))));
      while (leagueA.length < 1 || !notificationgray8) {
         leagueA = `${(middleq.length / (Math.max(7, (formz ? 5 : 1))))}`;
         break;
      }
      do {
         leagueA += `${(String.fromCharCode(107,0) == middleq ? (formz ? 3 : 2) : middleq.length)}`;
         if (leagueA == String.fromCharCode(48,105,95,111,49,102,113,100,115,0)) {
            break;
         }
      } while ((middleq == leagueA) && (leagueA == String.fromCharCode(48,105,95,111,49,102,113,100,115,0)));
      if (formz && notificationgray8) {
         formz = !notificationgray8;
      }
         notificationgray8 = (leagueA.length / (Math.max(1, middleq.length))) <= 20;
      while (formz && 2 >= leagueA.length) {
          let nextk = 3.0;
          let playershirtg = String.fromCharCode(102,95,55,95,112,114,105,118,107,101,121,0);
         leagueA = "1";
         nextk *= parseFloat(`${playershirtg.length}`);
         playershirtg += `${1 & playershirtg.length}`;
         break;
      }
         notificationgray8 = (62 == (middleq.length | (notificationgray8 ? 62 : middleq.length)));
          let ajaxz = [String.fromCharCode(108,111,99,97,116,105,111,110,0), String.fromCharCode(100,105,115,112,108,97,121,95,100,95,55,57,0), String.fromCharCode(114,95,54,51,95,105,110,105,116,97,99,107,0)];
         leagueA += `${ajaxz.length}`;
         notificationgray8 = 36 == middleq.length;
      iconorientationt += `${iconorientationt.length}`;
      if (String.fromCharCode(117,107,112,53,102,122,0) == iconorientationt) {
         break;
      }
   } while ((String.fromCharCode(117,107,112,53,102,122,0) == iconorientationt) && (iconorientationt.length >= tempnodata_.size));

  return (
    <View style={styles.column}>
      <Image source={NoDataIcon} resizeMode="contain" />
      <View>
        <Text style={[styles.text, {color: '#CCCCCC'}]}>暂无数据</Text>
      </View>
    </View>
  );
   for (let i = 0; i < 1; i++) {
       let leakchecker1 = String.fromCharCode(102,102,109,97,108,0);
       let topicN = false;
       let loadingspinnerU = String.fromCharCode(117,110,98,111,120,101,100,0);
      for (let c = 0; c < 1; c++) {
         loadingspinnerU = `${(leakchecker1 == String.fromCharCode(107,0) ? leakchecker1.length : (topicN ? 2 : 2))}`;
      }
       let componentregistry4 = 1;
         leakchecker1 += "1";
         loadingspinnerU = `${leakchecker1.length - componentregistry4}`;
      while (!loadingspinnerU.startsWith(`${componentregistry4}`)) {
         componentregistry4 /= Math.max(1 & loadingspinnerU.length, 2);
         break;
      }
      if (5 < loadingspinnerU.length) {
         topicN = loadingspinnerU == String.fromCharCode(111,0);
      }
         leakchecker1 = `${((topicN ? 5 : 2))}`;
         leakchecker1 = "1 ^ componentregistry4";
         topicN = leakchecker1.length < componentregistry4;
      iconorientationt += `${umengS.length << (Math.min(1, Math.abs(parseInt(`${buttonX}`))))}`;
   }
   if ((orangetickb & tempnodata_.size) < 5 || 5 < (tempnodata_.size & orangetickb)) {
      tempnodata_ = new Map([[`${orangetickb}`, orangetickb]]);
   }
   for (let n = 0; n < 1; n++) {
      libfollyA += `${orangetickb | 1}`;
   }
   do {
      umengS = [1];
      if (306085 == umengS.length) {
         break;
      }
   } while ((306085 == umengS.length) && ((modalw.length % (Math.max(7, umengS.length))) == 1 || 2 == (modalw.length % 1)));
      icondefaultthumbnail7 *= (parseFloat(`${2 * (telemetryr ? 5 : 4)}`));

};
export const LiveStatPanel = ({width}) => {
  const liveRoomMatchDetails = useSelector(state => state.liveRoomMatchDetails);
  const liveRoomUpdate = useSelector(state => state.liveRoomUpdate);
  const [hasAreaChart, setHasAreaChart] = useState(false);
  const homeData = liveRoomUpdate?.home;
  const awayData = liveRoomUpdate?.away;
  const totalData = liveRoomUpdate?.basketball_match_live?.players?.total;
  const thisTimeData = liveRoomUpdate?.basketball_match_live?.stats;

  const chartCallback = hasChart => {
       let typingB = 2;
    let reactq = 2.0;
    let condensedX = true;
    let libtobO = String.fromCharCode(99,111,101,102,0);
    let vignetteR = true;
    let loadingy = String.fromCharCode(98,97,116,116,101,114,121,0);
    let sharedH = 4;
    let fullscreenmaxk = new Map([[String.fromCharCode(108,105,118,101,0),true ], [String.fromCharCode(120,97,118,115,0),false ], [String.fromCharCode(113,117,101,117,101,0),false ]]);
    let with_mB = 1.0;
    let yellowredcardq = String.fromCharCode(99,111,108,115,112,97,110,0);
    let launchI = new Map([[String.fromCharCode(102,109,117,108,0),195], [String.fromCharCode(117,112,100,97,116,105,110,103,0),886], [String.fromCharCode(109,95,54,56,95,116,97,110,0),278]]);
    let sellmathbackgroundH = false;
    let iconeye_ = String.fromCharCode(108,105,98,101,118,101,110,116,0);
    let inouttargetyellowT = true;
    let onewarchdefaultsh = String.fromCharCode(121,121,121,121,0);
    let description_elW = [646, 396];
      reactq *= parseInt(`${reactq}`);
      typingB += 3 / (Math.max(1, parseInt(`${reactq}`)));
   do {
       let pathC = 0;
      if (pathC >= pathC) {
         pathC -= pathC & 3;
      }
      for (let o = 0; o < 2; o++) {
         pathC += pathC + pathC;
      }
       let fill6 = 0;
      libtobO += `${((condensedX ? 4 : 3) * (vignetteR ? 1 : 3))}`;
      if (839571 == libtobO.length) {
         break;
      }
   } while ((!libtobO.endsWith(`${condensedX}`)) && (839571 == libtobO.length));
   if (yellowredcardq == String.fromCharCode(105,0) && 4 >= libtobO.length) {
       let defaultteams = String.fromCharCode(112,100,102,0);
       let right6 = 0.0;
      while (defaultteams.includes(`${right6}`)) {
          let round6 = String.fromCharCode(97,114,109,111,110,121,0);
          let loadingk = String.fromCharCode(111,98,116,97,105,110,95,56,95,55,49,0);
          let catalogF = [String.fromCharCode(97,117,116,111,114,101,103,114,101,115,115,105,111,110,0), String.fromCharCode(100,120,116,121,0)];
          let statisticsinactive1 = 3;
         defaultteams += `${parseInt(`${right6}`) | round6.length}`;
         round6 = "1";
         loadingk = "3";
         catalogF = [(loadingk == String.fromCharCode(70,0) ? catalogF.length : loadingk.length)];
         statisticsinactive1 -= 2 / (Math.max(6, catalogF.length));
         break;
      }
      for (let p = 0; p < 1; p++) {
         defaultteams += `${(String.fromCharCode(75,0) == defaultteams ? parseInt(`${right6}`) : defaultteams.length)}`;
      }
      if (3 < (5 * parseInt(`${right6}`)) || (defaultteams.length * parseInt(`${right6}`)) < 5) {
         right6 *= parseInt(`${right6}`) ^ 1;
      }
      while (defaultteams.length == 4) {
         right6 += 1 << (Math.min(3, Math.abs(parseInt(`${right6}`))));
         break;
      }
         defaultteams += "1";
      for (let u = 0; u < 3; u++) {
         right6 *= parseInt(`${right6}`) | 1;
      }
      libtobO += `${parseInt(`${with_mB}`) & 1}`;
   }
   while (!vignetteR) {
      vignetteR = ((launchI.size | (condensedX ? launchI.size : 53)) < 73);
      break;
   }
   while ((1 * typingB) >= 4 && (yellowredcardq.length * 1) >= 2) {
      yellowredcardq += `${(parseInt(`${reactq}`) - (condensedX ? 4 : 1))}`;
      break;
   }
   for (let m = 0; m < 2; m++) {
       let valuesV = String.fromCharCode(109,111,118,105,101,0);
       let becomeh = String.fromCharCode(120,102,111,114,109,95,114,95,50,49,0);
       let bellt = new Map([[String.fromCharCode(113,117,97,108,105,102,105,101,114,115,0),String.fromCharCode(116,108,117,116,0)], [String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,0),String.fromCharCode(110,115,115,101,0)], [String.fromCharCode(109,98,112,97,105,114,0),String.fromCharCode(113,109,105,110,109,97,120,0)]]);
       let canvasZ = [387, 958];
      for (let k = 0; k < 2; k++) {
          let abidetect6 = true;
          let hometeamfield8 = [341, 123];
          let gifgoalO = 0.0;
         canvasZ = [3];
         abidetect6 = gifgoalO > 22.84 || !abidetect6;
         hometeamfield8.push(parseInt(`${gifgoalO}`) * hometeamfield8.length);
      }
         bellt[`${valuesV}`] = valuesV.length;
      while ((canvasZ.length | bellt.size) <= 4) {
          let assets8 = new Map([[String.fromCharCode(98,108,117,114,114,101,100,0),true ], [String.fromCharCode(99,111,109,109,105,116,116,101,100,0),false ]]);
         canvasZ.push(becomeh.length);
         assets8 = new Map([[`${assets8.size}`, 1 | assets8.size]]);
         break;
      }
         bellt[`${canvasZ.length}`] = canvasZ.length;
         canvasZ.push(becomeh.length);
         canvasZ.push(2);
      while (bellt.size > canvasZ.length) {
         canvasZ = [3 - valuesV.length];
         break;
      }
          let binddatasT = [465, 748];
          let librrcS = String.fromCharCode(114,110,110,111,105,115,101,0);
          let dependenciesG = [380, 453, 214];
         canvasZ = [librrcS.length];
         binddatasT = [3 + dependenciesG.length];
         librrcS += `${binddatasT.length - 2}`;
         dependenciesG.push(binddatasT.length);
          let libapminsightbB = 4;
          let libimagepipeline2 = String.fromCharCode(101,110,99,111,100,101,109,118,0);
         becomeh = `${bellt.size}`;
         libapminsightbB *= 1 & libimagepipeline2.length;
         libimagepipeline2 = "3";
      for (let g = 0; g < 1; g++) {
         bellt = new Map([[valuesV, valuesV.length]]);
      }
          let greenarrowupB = String.fromCharCode(114,111,117,116,101,115,0);
         becomeh += `${becomeh.length | bellt.size}`;
         greenarrowupB = `${greenarrowupB.length >> (Math.min(Math.abs(3), 5))}`;
      if (bellt[`${canvasZ.length}`] != null) {
         canvasZ.push(bellt.size + 2);
      }
      typingB -= parseInt(`${with_mB}`) / (Math.max(loadingy.length, 10));
   }
   while ((with_mB + 5.8) >= 3.14) {
      with_mB *= ((condensedX ? 3 : 4) / (Math.max(3, 9)));
      break;
   }
       let arrowselectdownI = true;
       let whistleu = true;
       let eyeopeno = true;
      while (!arrowselectdownI) {
         whistleu = arrowselectdownI;
         break;
      }
         arrowselectdownI = whistleu;
      libtobO = `${sharedH | parseInt(`${with_mB}`)}`;
   for (let c = 0; c < 3; c++) {
      sharedH -= libtobO.length / (Math.max(7, loadingy.length));
   }
       let whitek = String.fromCharCode(118,95,52,95,102,111,108,108,111,119,101,114,115,0);
       let iconnewssharea = String.fromCharCode(101,95,55,50,95,116,111,108,101,114,97,110,99,101,0);
       let updatesV = false;
          let reactnativeratingsG = 3;
          let whistle1 = 0.0;
          let componentregistry5 = 3.0;
         updatesV = !updatesV;
         reactnativeratingsG >>= Math.min(Math.abs(parseInt(`${componentregistry5}`) | 2), 3);
         whistle1 *= 2;
         componentregistry5 += 3;
         whitek += "1";
          let bnewssharei = 3;
         iconnewssharea += `${bnewssharei % (Math.max(whitek.length, 7))}`;
          let arrowrightwithtailZ = false;
         whitek += `${((arrowrightwithtailZ ? 2 : 1))}`;
       let currentD = [715, 783];
      while (whitek.length > 2) {
         updatesV = currentD.length <= 2;
         break;
      }
      if (!whitek.endsWith(`${updatesV}`)) {
         whitek += `${((updatesV ? 5 : 5) - 3)}`;
      }
         updatesV = whitek.length <= 35;
       let calendar4 = 2;
       let logouserb = 2;
      yellowredcardq = `${typingB}`;
       let nativemoduleB = 5;
       let textu = [956, 332];
       let notificationfillemptyN = true;
      while (textu.length <= 1) {
          let overlayv = String.fromCharCode(102,95,52,52,95,106,112,103,0);
          let alertx = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,55,95,49,57,0);
          let giflivestreamingX = 3.0;
         notificationfillemptyN = String.fromCharCode(98,0) == overlayv;
         overlayv = `${parseInt(`${giflivestreamingX}`)}`;
         alertx += `${(alertx == String.fromCharCode(122,0) ? alertx.length : parseInt(`${giflivestreamingX}`))}`;
         break;
      }
       let flagW = String.fromCharCode(112,101,114,109,117,116,101,115,95,121,95,54,51,0);
         nativemoduleB += flagW.length;
       let profileactiveO = 5.0;
       let loadingspinnerj = 5.0;
      while (3.91 <= (loadingspinnerj * 5.72) || !notificationfillemptyN) {
          let whistleorangew = new Map([[String.fromCharCode(114,116,112,101,110,99,0),String.fromCharCode(97,98,105,0)], [String.fromCharCode(101,112,111,108,108,0),String.fromCharCode(112,114,105,118,0)]]);
          let libswresampleP = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,0);
          let handlerH = 4.0;
         loadingspinnerj += parseFloat(`${libswresampleP.length}`);
         whistleorangew[`${handlerH}`] = parseInt(`${handlerH}`);
         libswresampleP += `${parseInt(`${handlerH}`) & whistleorangew.size}`;
         break;
      }
          let whitebellv = String.fromCharCode(112,114,101,101,120,105,115,116,105,110,103,0);
         flagW = `${parseInt(`${profileactiveO}`)}`;
         whitebellv = `${whitebellv.length}`;
      if (!notificationfillemptyN) {
         loadingspinnerj /= Math.max((parseFloat(`${flagW == String.fromCharCode(55,0) ? parseInt(`${profileactiveO}`) : flagW.length}`)), 4);
      }
      if ((profileactiveO * parseFloat(`${textu.length}`)) >= 5.15 || 5.49 >= (5.15 * profileactiveO)) {
         textu.push(nativemoduleB >> (Math.min(Math.abs(parseInt(`${loadingspinnerj}`)), 4)));
      }
      for (let v = 0; v < 2; v++) {
         profileactiveO -= parseFloat(`${2 & parseInt(`${loadingspinnerj}`)}`);
      }
      sharedH &= fullscreenmaxk.size ^ launchI.size;
   for (let x = 0; x < 1; x++) {
      libtobO = "2";
   }
      sellmathbackgroundH = iconeye_.includes(`${with_mB}`);
      loadingy += `${(sharedH << (Math.min(4, Math.abs((sellmathbackgroundH ? 2 : 3)))))}`;
       let updates4 = 2;
       let nativemoduleE = 4;
      do {
          let chatroombackgroundV = String.fromCharCode(97,110,110,101,120,98,0);
          let footballfieldM = false;
         nativemoduleE += 1 / (Math.max(7, chatroombackgroundV.length));
         if (454485 == nativemoduleE) {
            break;
         }
      } while ((5 > (1 - updates4) || 3 > (nativemoduleE - 1)) && (454485 == nativemoduleE));
      if ((updates4 & nativemoduleE) == 5) {
         nativemoduleE <<= Math.min(5, Math.abs(updates4 * 2));
      }
         nativemoduleE &= updates4;
         nativemoduleE -= 3;
      do {
         updates4 += 2 >> (Math.min(5, Math.abs(updates4)));
         if (3310191 == updates4) {
            break;
         }
      } while (((nativemoduleE | 4) == 2) && (3310191 == updates4));
         updates4 ^= nativemoduleE;
      libtobO = `${1 / (Math.max(8, fullscreenmaxk.size))}`;

    setHasAreaChart(hasChart);
      fullscreenmaxk = new Map([[onewarchdefaultsh, onewarchdefaultsh.length | libtobO.length]]);
       let orangeuparrowY = String.fromCharCode(99,101,110,116,101,114,0);
       let libreanimatedG = String.fromCharCode(112,114,101,102,105,120,101,115,0);
         orangeuparrowY = `${orangeuparrowY.length}`;
      do {
         libreanimatedG += `${libreanimatedG.length}`;
         if (libreanimatedG == String.fromCharCode(111,119,101,105,113,112,108,98,118,0)) {
            break;
         }
      } while ((libreanimatedG == String.fromCharCode(111,119,101,105,113,112,108,98,118,0)) && (libreanimatedG.length == orangeuparrowY.length));
       let teamY = String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,109,95,55,56,0);
       let iconeditb = String.fromCharCode(105,110,116,101,114,101,115,116,0);
          let iconcloses = [String.fromCharCode(111,112,116,105,109,105,122,101,100,0), String.fromCharCode(99,108,111,99,107,100,114,105,102,116,0), String.fromCharCode(97,116,116,114,105,98,117,116,105,111,110,0)];
          let watch4 = false;
         iconeditb += `${teamY.length}`;
         iconcloses.push(iconcloses.length / 3);
         watch4 = iconcloses.includes(iconcloses[0]);
      do {
         orangeuparrowY += `${orangeuparrowY.length - iconeditb.length}`;
         if (orangeuparrowY.length == 540061) {
            break;
         }
      } while ((orangeuparrowY.length == 540061) && (teamY == orangeuparrowY));
         orangeuparrowY = `${iconeditb.length}`;
      typingB ^= 3 << (Math.min(5, Math.abs(parseInt(`${with_mB}`))));
   do {
       let imagenomoredataz = String.fromCharCode(115,116,97,114,115,0);
       let placeholder4 = new Map([[String.fromCharCode(97,116,97,98,97,115,101,95,110,95,50,49,0),String.fromCharCode(97,100,106,117,115,116,101,100,0)], [String.fromCharCode(101,120,112,105,114,101,115,0),String.fromCharCode(117,95,50,53,95,100,105,115,112,97,116,99,104,101,100,0)], [String.fromCharCode(112,97,116,104,110,97,109,101,0),String.fromCharCode(115,105,103,118,101,114,0)]]);
         imagenomoredataz = `${2 - imagenomoredataz.length}`;
      while (imagenomoredataz.length <= placeholder4.size) {
          let libreactnativeblobz = String.fromCharCode(98,101,102,111,114,101,95,104,95,57,56,0);
          let sigmobW = 1.0;
          let schedulerl = true;
          let predictionbannershared3 = false;
          let libreactJ = [364, 879, 60];
         placeholder4 = new Map([[imagenomoredataz, libreactnativeblobz.length - imagenomoredataz.length]]);
         libreactnativeblobz = `${libreactJ.length}`;
         sigmobW /= Math.max(1, parseFloat(`${3 | parseInt(`${sigmobW}`)}`));
         schedulerl = sigmobW < 45.17;
         predictionbannershared3 = libreactJ.length >= 35;
         break;
      }
      if ((imagenomoredataz.length / (Math.max(4, placeholder4.size))) == 4 || (imagenomoredataz.length / 4) == 1) {
          let styler = 3.0;
          let sortP = String.fromCharCode(105,110,105,116,97,108,0);
          let pointp = 3.0;
          let libswresamplea = String.fromCharCode(109,111,110,111,116,111,110,105,99,0);
         placeholder4[`${styler}`] = 2;
         styler /= Math.max(sortP.length, 2);
         sortP += `${parseInt(`${pointp}`) / (Math.max(1, 5))}`;
         pointp -= parseFloat(`${parseInt(`${pointp}`) + libswresamplea.length}`);
         libswresamplea += `${libswresamplea.length * parseInt(`${pointp}`)}`;
      }
      while (imagenomoredataz.length <= 5) {
         imagenomoredataz += `${imagenomoredataz.length}`;
         break;
      }
      if ((placeholder4.size >> (Math.min(Math.abs(3), 4))) >= 3 && (imagenomoredataz.length >> (Math.min(4, Math.abs(placeholder4.size)))) >= 3) {
          let rncore5 = 0.0;
          let yellowvideoliveg = true;
          let shareK = 1.0;
         imagenomoredataz = `${((yellowvideoliveg ? 4 : 3) & parseInt(`${rncore5}`))}`;
         rncore5 /= Math.max(parseFloat(`${parseInt(`${shareK}`) - 1}`), 4);
         yellowvideoliveg = 30.64 <= (shareK / (Math.max(shareK, 10)));
      }
      for (let i = 0; i < 2; i++) {
         imagenomoredataz = `${imagenomoredataz.length}`;
      }
      sellmathbackgroundH = !inouttargetyellowT;
      if (sellmathbackgroundH ? !sellmathbackgroundH : sellmathbackgroundH) {
         break;
      }
   } while ((sellmathbackgroundH ? !sellmathbackgroundH : sellmathbackgroundH) && (!sellmathbackgroundH));
      reactq += 1;
      sellmathbackgroundH = onewarchdefaultsh.length < 48;
   do {
       let fast6 = String.fromCharCode(99,108,101,97,114,101,100,0);
       let rewardvideoS = 3.0;
       let goalw = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,0);
      for (let v = 0; v < 2; v++) {
         goalw += `${parseInt(`${rewardvideoS}`) + 1}`;
      }
          let homeinactivee = [939, 602];
          let ping9 = 2;
          let libhermesp = String.fromCharCode(108,111,97,100,120,0);
         rewardvideoS /= Math.max(parseFloat(`${3 - ping9}`), 3);
         homeinactivee.push(libhermesp.length + homeinactivee.length);
         ping9 |= libhermesp.length - 2;
      do {
         rewardvideoS -= (parseFloat(`${goalw == String.fromCharCode(81,0) ? parseInt(`${rewardvideoS}`) : goalw.length}`));
         if (4361764.0 == rewardvideoS) {
            break;
         }
      } while ((3 < (parseInt(`${rewardvideoS}`) / (Math.max(3, goalw.length))) || (1.45 / (Math.max(2, rewardvideoS))) < 1.18) && (4361764.0 == rewardvideoS));
       let defaultroombgV = 4;
       let iconpipshrinkH = 5;
         goalw += `${goalw.length}`;
      for (let k = 0; k < 1; k++) {
         goalw += `${3 * fast6.length}`;
      }
      do {
          let iconrightorangep = false;
          let redscoreball0 = false;
         iconpipshrinkH <<= Math.min(5, parseInt(`${Math.abs((parseInt(`${rewardvideoS}`) << (Math.min(3, Math.abs((iconrightorangep ? 1 : 4))))))}`));
         iconrightorangep = redscoreball0;
         if (iconpipshrinkH == 1203358) {
            break;
         }
      } while ((rewardvideoS >= 2.86) && (iconpipshrinkH == 1203358));
       let greyticko = [547, 151];
          let modityM = String.fromCharCode(115,101,97,114,99,104,97,98,108,101,95,51,95,49,48,48,0);
          let unselecteda = [String.fromCharCode(100,105,115,115,99,111,110,110,101,99,116,95,116,95,53,57,0), String.fromCharCode(115,112,101,99,115,0)];
          let teamm = false;
         goalw = `${unselecteda.length}`;
         modityM += `${(String.fromCharCode(103,0) == modityM ? modityM.length : modityM.length)}`;
         unselecteda = [(modityM == String.fromCharCode(111,0) ? modityM.length : modityM.length)];
      reactq *= 1 | parseInt(`${reactq}`);
      if (3182758.0 == reactq) {
         break;
      }
   } while ((3182758.0 == reactq) && (3.78 >= (with_mB * 2)));
       let huaweim = 3;
       let movies0 = String.fromCharCode(105,110,105,116,105,97,108,105,122,105,110,103,0);
         huaweim *= huaweim * 1;
      for (let k = 0; k < 3; k++) {
         movies0 = "2";
      }
       let switch__Y = new Map([[String.fromCharCode(117,112,108,105,110,107,0),944], [String.fromCharCode(115,101,114,118,101,114,115,0),308], [String.fromCharCode(103,95,53,57,95,117,110,116,121,112,101,100,0),850]]);
          let yellowtoredF = new Map([[String.fromCharCode(117,115,97,98,108,101,0),537], [String.fromCharCode(112,105,99,107,101,114,0),808], [String.fromCharCode(99,111,110,116,105,110,117,97,108,0),223]]);
          let types6 = String.fromCharCode(98,95,53,55,95,97,98,111,118,101,0);
          let iconadslinkd = 3.0;
         huaweim &= switch__Y.size;
         yellowtoredF = new Map([[`${yellowtoredF.size}`, parseInt(`${iconadslinkd}`)]]);
         types6 = `${parseInt(`${iconadslinkd}`)}`;
         movies0 = `${switch__Y.size + 1}`;
         movies0 = `${switch__Y.size}`;
      yellowredcardq += `${libtobO.length}`;
   for (let d = 0; d < 3; d++) {
      sharedH ^= (loadingy.length + (vignetteR ? 1 : 4));
   }
   if ((launchI.size ^ description_elW.length) <= 5 || 2 <= (description_elW.length ^ 5)) {
      launchI = new Map([[`${condensedX}`, parseInt(`${with_mB}`) - 2]]);
   }
      onewarchdefaultsh = `${typingB | 2}`;
      launchI = new Map([[libtobO, libtobO.length | onewarchdefaultsh.length]]);
   if ((onewarchdefaultsh.length << (Math.min(3, description_elW.length))) <= 2 || (description_elW.length << (Math.min(Math.abs(2), 3))) <= 1) {
      description_elW = [((inouttargetyellowT ? 5 : 1) & launchI.size)];
   }
      libtobO = `${onewarchdefaultsh.length & parseInt(`${with_mB}`)}`;
   if (inouttargetyellowT) {
       let defaultprofilepicm = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,0);
       let predictionbannerd = String.fromCharCode(115,117,114,114,111,117,110,100,0);
       let tempnodatagift = String.fromCharCode(112,115,115,104,0);
       let guide2 = 5.0;
         defaultprofilepicm += `${(String.fromCharCode(68,0) == predictionbannerd ? defaultprofilepicm.length : predictionbannerd.length)}`;
      while (2 > predictionbannerd.length) {
         predictionbannerd += "3";
         break;
      }
          let armva1 = false;
         guide2 += ((armva1 ? 3 : 1));
      for (let s = 0; s < 2; s++) {
          let field2 = true;
          let backiconmaskq = 5.0;
          let librrc8 = String.fromCharCode(109,115,103,115,0);
          let tooltipsa = String.fromCharCode(117,108,111,110,103,0);
         tempnodatagift = `${(librrc8 == String.fromCharCode(81,0) ? librrc8.length : parseInt(`${backiconmaskq}`))}`;
         field2 = (35 > (tooltipsa.length ^ (!field2 ? 35 : tooltipsa.length)));
         backiconmaskq /= Math.max(5, tooltipsa.length);
      }
       let iconsettingj = 4.0;
      while ((iconsettingj + defaultprofilepicm.length) == 5.45 || (5.45 + iconsettingj) == 1.46) {
         iconsettingj += parseInt(`${guide2}`);
         break;
      }
         guide2 += (String.fromCharCode(111,0) == defaultprofilepicm ? predictionbannerd.length : defaultprofilepicm.length);
         iconsettingj /= Math.max(defaultprofilepicm.length % 1, 5);
      for (let t = 0; t < 1; t++) {
          let whitebellu = String.fromCharCode(110,111,114,109,97,108,0);
         guide2 *= 3 >> (Math.min(2, Math.abs(parseInt(`${iconsettingj}`))));
         whitebellu = `${whitebellu.length}`;
      }
       let mbsplashc = String.fromCharCode(115,100,97,108,108,111,99,120,0);
       let modulex = String.fromCharCode(98,97,99,107,105,110,103,0);
         mbsplashc = "2";
      if (defaultprofilepicm.length >= parseInt(`${guide2}`)) {
         defaultprofilepicm += `${mbsplashc.length % (Math.max(4, parseInt(`${iconsettingj}`)))}`;
      }
      inouttargetyellowT = iconeye_.length <= tempnodatagift.length;
   }
       let stylesB = 4;
         stylesB -= stylesB % 1;
         stylesB -= 2;
         stylesB *= 3;
      condensedX = !inouttargetyellowT;
   do {
       let megaphoneF = [String.fromCharCode(97,114,103,117,109,101,110,116,115,0), String.fromCharCode(104,101,97,100,115,101,116,0), String.fromCharCode(106,95,50,51,95,102,105,120,0)];
       let checkboxf = String.fromCharCode(115,113,108,105,116,101,101,120,116,0);
       let projectR = String.fromCharCode(100,101,114,105,118,0);
       let nbatrophy6 = false;
       let iconarrowlefty = 3.0;
          let iconeditT = 3.0;
          let defaultbasketballbgL = String.fromCharCode(101,95,50,53,95,104,101,97,100,115,101,116,0);
         projectR = "2";
         iconeditT /= Math.max(3, parseFloat(`${2 & parseInt(`${iconeditT}`)}`));
         defaultbasketballbgL += `${parseInt(`${iconeditT}`)}`;
      for (let x = 0; x < 1; x++) {
          let guide0 = new Map([[String.fromCharCode(114,98,115,112,95,98,95,56,54,0),String.fromCharCode(117,95,57,56,95,113,116,97,98,108,101,0)], [String.fromCharCode(116,114,117,110,99,0),String.fromCharCode(99,104,97,116,115,0)], [String.fromCharCode(118,105,101,119,101,100,0),String.fromCharCode(112,97,114,101,110,0)]]);
          let rewardvideoj = [69, 402];
          let d_countQ = 3.0;
          let projecty = 3.0;
          let linkK = String.fromCharCode(101,105,112,118,0);
         nbatrophy6 = projectR.length >= 46;
         guide0[`${rewardvideoj.length}`] = 1 >> (Math.min(2, rewardvideoj.length));
         d_countQ /= Math.max(5, rewardvideoj.length);
         projecty += parseFloat(`${parseInt(`${projecty}`) & parseInt(`${d_countQ}`)}`);
         linkK += `${linkK.length % 3}`;
      }
         megaphoneF = [((nbatrophy6 ? 1 : 5) * parseInt(`${iconarrowlefty}`))];
      for (let u = 0; u < 2; u++) {
          let statsnomoredatad = [734, 910, 43];
          let privacyZ = new Map([[String.fromCharCode(111,95,56,48,95,111,112,117,115,101,110,99,0),true ], [String.fromCharCode(116,95,52,55,95,102,99,117,110,112,117,98,108,105,115,104,0),true ], [String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,0),true ]]);
          let helperE = 0.0;
         megaphoneF = [1];
         statsnomoredatad.push(privacyZ.size);
         privacyZ = new Map([[`${privacyZ.size}`, parseInt(`${helperE}`)]]);
         helperE *= privacyZ.size;
      }
          let fcopy_65 = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,114,0),873], [String.fromCharCode(103,119,103,116,95,49,95,56,48,0),923], [String.fromCharCode(119,105,110,115,111,99,107,0),42]]);
          let libapminsighta1 = String.fromCharCode(101,120,101,99,117,116,111,114,0);
          let crowno = new Map([[String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,0),74], [String.fromCharCode(114,101,115,117,109,101,0),22], [String.fromCharCode(100,97,116,101,0),793]]);
         projectR += `${(checkboxf == String.fromCharCode(90,0) ? projectR.length : checkboxf.length)}`;
         fcopy_65 = new Map([[`${crowno.size}`, 2]]);
         libapminsighta1 = `${crowno.size}`;
       let pressurey = 5;
       let iconviewer5 = 2;
         iconviewer5 <<= Math.min(4, Math.abs((String.fromCharCode(53,0) == projectR ? projectR.length : (nbatrophy6 ? 2 : 5))));
       let libcrashsdki = String.fromCharCode(112,101,114,115,105,115,116,101,110,99,101,0);
       let screenk = String.fromCharCode(110,117,108,108,105,102,0);
      while (!libcrashsdki.startsWith(`${megaphoneF.length}`)) {
          let iconchatsendj = 4;
          let storeX = String.fromCharCode(112,114,111,99,99,101,115,115,0);
          let homeactivey = 0;
          let controlV = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,95,102,95,52,0);
          let humidityy = true;
         libcrashsdki = `${(2 + (nbatrophy6 ? 3 : 4))}`;
         iconchatsendj *= 1;
         storeX = `${(controlV == String.fromCharCode(50,0) ? homeactivey : controlV.length)}`;
         homeactivey |= homeactivey;
         humidityy = !humidityy;
         break;
      }
         nbatrophy6 = screenk.length < 77 || pressurey < 77;
      do {
         pressurey %= Math.max(4, megaphoneF.length / (Math.max(10, screenk.length)));
         if (pressurey == 2065351) {
            break;
         }
      } while ((pressurey == 2065351) && (5 < pressurey));
       let libmapbufferjnit = new Map([[String.fromCharCode(115,116,114,105,100,105,110,103,0),503], [String.fromCharCode(115,101,116,116,101,114,0),72]]);
       let airbnbstarselected4 = new Map([[String.fromCharCode(97,110,97,108,121,122,101,0),true ], [String.fromCharCode(115,107,101,119,0),true ], [String.fromCharCode(100,105,103,101,115,116,0),true ]]);
       let mbbidY = [797, 734];
       let arrowdownF = [String.fromCharCode(115,101,114,105,97,108,95,107,95,54,48,0), String.fromCharCode(100,101,99,108,97,114,101,100,0)];
      if ((arrowdownF.length << (Math.min(Math.abs(airbnbstarselected4.size), 4))) < 4) {
          let expiredv = 1.0;
          let watchnowbg2 = String.fromCharCode(98,95,56,56,95,115,112,97,99,101,100,0);
         arrowdownF.push((String.fromCharCode(115,0) == projectR ? projectR.length : arrowdownF.length));
         expiredv += parseFloat(`${watchnowbg2.length}`);
         watchnowbg2 += `${parseInt(`${expiredv}`) * 2}`;
      }
       let textM = String.fromCharCode(111,118,101,114,108,97,121,105,110,103,95,105,95,52,50,0);
      sharedH *= sharedH | libtobO.length;
      if (sharedH == 2900509) {
         break;
      }
   } while ((onewarchdefaultsh.includes(`${sharedH}`)) && (sharedH == 2900509));

  };
  return (
    <>
      {liveRoomMatchDetails.status !== 0 &&
        liveRoomMatchDetails?.sports_type === 1 && (
          <>
            <AreaChart
              liveRoomUpdate={liveRoomUpdate}
              chartCallback={chartCallback}
            />
            {hasAreaChart ? (
              <View
                style={[
                  styles.row,
                  {marginLeft: 20, justifyContent: 'flex-start', marginTop: 20},
                ]}>
                {iconArray.map(legend => {
                  const [icon, text] = legend;
                  return <IconLegend key={text} text={text} icon={icon} />;
                })}
              </View>
            ) : (
              <NoData />
            )}
          </>
        )}
      {liveRoomMatchDetails.status !== 0 &&
        liveRoomMatchDetails?.sports_type === 2 && (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {homeData || awayData || totalData || thisTimeData ? (
              <>
                <View style={{flex: 4, width: '100%'}}>
                  <BasketballMatchTeamDetails
                    homeData={homeData}
                    awayData={awayData}
                    totalData={totalData}
                    thisTimeData={thisTimeData}
                    textColor={'white'}></BasketballMatchTeamDetails>
                </View>
                <View style={{flex: 1}} />
              </>
            ) : (
              <NoData />
            )}
          </View>
        )}
      {![1, 2].includes(liveRoomMatchDetails?.sports_type) && (
        <View style={[styles.column, {flex: 1}]}>
          <NoData />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  column: {
    flex: 0,
    
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0,
    flexWrap: 'nowrap',
    marginRight: 15,
  },
  icon: {
    width: 15,
    height: 15,
    flex: 0,
    marginRight: 3,
  },
  text: {
    fontSize: 14,
    flex: 0,
    color: 'white',
  },
});
