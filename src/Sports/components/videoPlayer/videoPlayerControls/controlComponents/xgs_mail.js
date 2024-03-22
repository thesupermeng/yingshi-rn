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
import NoDataIcon from '../../images/icons/searchEntry.png';

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
       let plusz = String.fromCharCode(118,105,100,101,111,115,95,118,95,57,51,0);
    let sliderr = new Map([[String.fromCharCode(114,95,49,50,95,109,97,112,108,105,109,105,116,0),String.fromCharCode(100,101,116,101,99,116,101,100,95,121,95,51,51,0)], [String.fromCharCode(114,101,108,111,103,105,110,95,119,95,55,48,0),String.fromCharCode(104,117,102,102,121,117,118,95,118,95,49,52,0)], [String.fromCharCode(110,117,108,108,95,117,95,57,54,0),String.fromCharCode(118,95,51,56,95,101,112,111,108,108,0)]]);
    let commentx = new Map([[String.fromCharCode(99,95,49,50,95,108,111,116,115,0),true ], [String.fromCharCode(97,100,100,98,108,107,95,121,95,55,57,0),true ]]);
    let selectU = String.fromCharCode(114,103,98,97,121,99,111,99,103,95,118,95,50,54,0);
    let privacyI = String.fromCharCode(112,117,114,103,101,95,101,95,53,53,0);
    let indicatorP = true;
    let controlK = 2.0;
    let sentryv = 4.0;
    let moreA = 4.0;
    let moreP = new Map([[String.fromCharCode(105,110,116,101,114,118,97,108,95,49,95,56,56,0),66], [String.fromCharCode(104,95,54,54,95,109,105,112,115,0),780], [String.fromCharCode(111,95,49,55,95,120,99,101,112,116,105,111,110,0),973]]);
    let pagea = true;
    let shirtS = [190, 824];
       let vietnam9 = String.fromCharCode(102,95,54,48,95,116,111,109,98,117,102,0);
       let with_ofY = [668, 565];
       let fieldf = new Map([[String.fromCharCode(107,95,49,48,95,99,111,110,110,101,99,116,111,114,0),String.fromCharCode(102,99,112,117,98,108,105,115,104,95,118,95,54,0)], [String.fromCharCode(98,95,49,56,0),String.fromCharCode(115,117,99,99,101,115,115,99,98,95,120,95,54,52,0)]]);
      for (let o = 0; o < 1; o++) {
          let favicon2 = new Map([[String.fromCharCode(110,95,55,49,95,116,101,108,108,97,114,0),237], [String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,54,95,49,55,0),438], [String.fromCharCode(111,95,57,50,95,102,114,97,99,116,105,111,110,97,108,0),403]]);
          let readu = String.fromCharCode(118,108,98,117,102,95,57,95,54,57,0);
          let full8 = 3.0;
         with_ofY.push(2 & parseInt(`${full8}`));
         favicon2[`${readu}`] = favicon2.size;
         readu = "3";
         full8 *= (parseFloat(`${String.fromCharCode(49,0) == readu ? favicon2.size : readu.length}`));
      }
         vietnam9 = `${fieldf.size % (Math.max(2, 7))}`;
      do {
          let acceptedt = String.fromCharCode(97,114,109,108,105,110,107,95,99,95,52,48,0);
          let tickedu = 0;
         with_ofY = [2 - with_ofY.length];
         acceptedt = `${1 - tickedu}`;
         tickedu /= Math.max(tickedu, 1);
         if (with_ofY.length == 2480482) {
            break;
         }
      } while ((2 == with_ofY.length) && (with_ofY.length == 2480482));
         fieldf = new Map([[`${fieldf.size}`, fieldf.size & with_ofY.length]]);
      for (let n = 0; n < 3; n++) {
         with_ofY = [3 ^ fieldf.size];
      }
      if (3 == (vietnam9.length << (Math.min(Math.abs(3), 4))) || 3 == (vietnam9.length << (Math.min(Math.abs(3), 1)))) {
         vietnam9 = `${with_ofY.length + vietnam9.length}`;
      }
      do {
         vietnam9 = "3";
         if (vietnam9.length == 3135184) {
            break;
         }
      } while ((vietnam9.length == 3135184) && (1 < (vietnam9.length + with_ofY.length) || 5 < (1 + vietnam9.length)));
      for (let t = 0; t < 2; t++) {
          let progressQ = true;
          let profile_ = 4;
          let borderless8 = [342, 450];
          let const_kgE = 1.0;
         with_ofY = [3];
         progressQ = (84 == ((progressQ ? 84 : borderless8.length) * borderless8.length));
         profile_ |= profile_;
         const_kgE /= Math.max(3, borderless8.length);
      }
          let private_io = 5;
          let downloadr = 4;
          let castu = 2.0;
         with_ofY = [with_ofY.length];
         private_io ^= downloadr % (Math.max(parseInt(`${castu}`), 5));
         downloadr <<= Math.min(Math.abs(downloadr | 3), 1);
         castu /= Math.max(5, downloadr >> (Math.min(Math.abs(parseInt(`${castu}`)), 5)));
      moreA *= sliderr.size;
      controlK /= Math.max(3, parseInt(`${moreA}`) % 3);
   do {
      moreA /= Math.max(2, (String.fromCharCode(121,0) == selectU ? parseInt(`${sentryv}`) : selectU.length));
      if (moreA == 1642890.0) {
         break;
      }
   } while ((Array.from(moreP.values()).includes(moreA)) && (moreA == 1642890.0));
   for (let e = 0; e < 2; e++) {
      sliderr = new Map([[selectU, parseInt(`${moreA}`) ^ selectU.length]]);
   }
   do {
      sliderr = new Map([[`${sliderr.size}`, ((pagea ? 1 : 3) % (Math.max(sliderr.size, 3)))]]);
      if (sliderr.size == 1846548) {
         break;
      }
   } while ((4 < (moreP.size / (Math.max(1, sliderr.size)))) && (sliderr.size == 1846548));
       let downloadera = new Map([[String.fromCharCode(99,95,49,56,95,115,121,110,111,110,121,109,115,0),139], [String.fromCharCode(99,95,49,48,95,116,97,114,103,97,0),336]]);
       let referrerI = String.fromCharCode(114,95,52,54,95,102,105,100,99,116,0);
       let actionv = new Map([[String.fromCharCode(97,117,100,105,111,100,115,112,95,117,95,53,50,0),false ], [String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,109,95,50,48,0),true ], [String.fromCharCode(112,114,101,100,95,97,95,50,50,0),false ]]);
      while ((actionv.size >> (Math.min(Math.abs(3), 5))) < 4 || (3 >> (Math.min(3, Math.abs(actionv.size)))) < 3) {
         referrerI = `${actionv.size}`;
         break;
      }
         downloadera = new Map([[`${actionv.size}`, downloadera.size]]);
       let commenty = new Map([[String.fromCharCode(108,95,51,52,95,102,105,116,122,0),392], [String.fromCharCode(110,95,50,49,95,115,117,112,101,114,102,114,97,109,101,0),746], [String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,98,95,55,48,0),470]]);
         actionv = new Map([[`${commenty.size}`, 2 - referrerI.length]]);
      while (4 > referrerI.length) {
          let bellb = [48, 528, 299];
         referrerI += `${commenty.size}`;
         bellb = [bellb.length];
         break;
      }
          let benefitf = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,55,95,54,48,0);
          let projectp = 2.0;
          let photo5 = 3.0;
         commenty = new Map([[`${downloadera.size}`, actionv.size << (Math.min(Math.abs(2), 1))]]);
         benefitf = `${(benefitf == String.fromCharCode(104,0) ? parseInt(`${projectp}`) : benefitf.length)}`;
         projectp -= 2;
         photo5 /= Math.max(parseInt(`${projectp}`) | parseInt(`${photo5}`), 1);
       let popup9 = [368, 588];
       let groupM = [String.fromCharCode(104,111,111,107,115,95,111,95,51,54,0), String.fromCharCode(121,95,57,53,95,114,101,99,116,0)];
       let containero = new Map([[String.fromCharCode(99,111,110,118,101,110,105,101,110,99,101,95,122,95,49,51,0),false ], [String.fromCharCode(103,95,49,50,95,100,101,115,116,105,110,97,116,105,111,110,115,0),true ], [String.fromCharCode(109,95,50,56,95,108,115,102,108,115,112,0),false ]]);
       let detailD = new Map([[String.fromCharCode(110,95,54,95,100,114,97,105,110,0),true ], [String.fromCharCode(122,95,52,49,95,107,105,116,0),true ], [String.fromCharCode(105,110,115,116,97,110,116,95,104,95,57,48,0),false ]]);
      for (let x = 0; x < 2; x++) {
          let y_lockL = 4;
          let actionsl = String.fromCharCode(100,101,108,105,118,101,114,95,99,95,56,48,0);
         groupM = [popup9.length ^ 1];
         y_lockL *= y_lockL;
         actionsl = `${1 - y_lockL}`;
      }
      sentryv /= Math.max(parseFloat(`${3}`), 1);

  return (
    <View style={styles.column}>
      <Image source={NoDataIcon} resizeMode="contain" />
      <View>
        <Text style={[styles.text, {color: '#CCCCCC'}]}>暂无数据</Text>
      </View>
    </View>
  );
      indicatorP = plusz.length >= 64;
      indicatorP = (((!indicatorP ? privacyI.length : 30) << (Math.min(privacyI.length, 1))) <= 30);
       let modityy = new Map([[String.fromCharCode(108,95,50,52,95,109,118,112,114,111,98,115,0),490], [String.fromCharCode(117,110,105,119,103,116,95,116,95,52,57,0),489], [String.fromCharCode(109,117,108,116,105,112,108,101,120,95,111,95,51,55,0),249]]);
       let backward2 = String.fromCharCode(121,95,55,50,95,115,116,114,105,110,103,0);
       let middlewareO = false;
      while ((modityy.size ^ 3) > 5) {
         backward2 = `${((middlewareO ? 4 : 1) / 3)}`;
         break;
      }
      for (let x = 0; x < 3; x++) {
         modityy[`${middlewareO}`] = 1;
      }
      do {
         middlewareO = backward2.length >= 6;
         if (middlewareO ? !middlewareO : middlewareO) {
            break;
         }
      } while ((!backward2.endsWith(`${middlewareO}`)) && (middlewareO ? !middlewareO : middlewareO));
      if ((modityy.size | 2) < 2) {
         backward2 = `${backward2.length * modityy.size}`;
      }
      do {
         middlewareO = middlewareO && modityy.size <= 94;
         if (middlewareO ? !middlewareO : middlewareO) {
            break;
         }
      } while ((middlewareO ? !middlewareO : middlewareO) && (backward2.length < 3));
       let default_ey = String.fromCharCode(97,95,56,51,95,112,105,110,99,104,0);
      if (default_ey.startsWith(`${modityy.size}`)) {
         default_ey += `${backward2.length ^ 3}`;
      }
      if (1 == (backward2.length | 2) && 1 == (modityy.size | 2)) {
         backward2 = `${(default_ey.length << (Math.min(4, Math.abs((middlewareO ? 5 : 3)))))}`;
      }
         middlewareO = backward2.includes(`${middlewareO}`);
      indicatorP = controlK >= 45.1 || modityy.size >= 13;
      plusz = `${(String.fromCharCode(53,0) == selectU ? (indicatorP ? 2 : 1) : selectU.length)}`;
      plusz = `${sliderr.size / 1}`;
   for (let q = 0; q < 2; q++) {
       let linko = true;
      for (let n = 0; n < 2; n++) {
         linko = (!linko ? !linko : linko);
      }
         linko = !linko;
         linko = !linko;
      commentx[`${moreA}`] = parseInt(`${moreA}`) & 2;
   }

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
       let telegramO = String.fromCharCode(115,95,53,95,117,115,101,114,115,112,97,99,101,0);
    let settingN = String.fromCharCode(115,95,53,55,95,105,110,100,101,110,116,101,100,0);
    let scheduleW = 4.0;
    let middlewareB = String.fromCharCode(99,95,56,56,95,115,116,100,105,110,116,0);
    let bell5 = String.fromCharCode(114,101,102,105,110,101,109,101,110,116,95,50,95,54,54,0);
    let minimizeQ = new Map([[String.fromCharCode(112,99,97,99,104,101,95,120,95,54,56,0),974], [String.fromCharCode(117,112,108,111,97,100,95,52,95,50,51,0),615], [String.fromCharCode(118,95,55,52,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0),466]]);
    let sellK = false;
    let backgroundh = String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,51,95,54,50,0);
    let minivodX = true;
    let sideT = String.fromCharCode(103,97,105,110,115,95,56,95,50,55,0);
    let greene = 4.0;
    let sheet3 = false;
       let policy4 = 5.0;
       let textD = String.fromCharCode(97,99,113,117,97,110,116,95,99,95,52,49,0);
       let eactp = false;
         policy4 -= textD.length | 3;
      if ((policy4 - 1.44) <= 1.69) {
         policy4 *= textD.length - 1;
      }
         textD = `${(parseInt(`${policy4}`) & (eactp ? 5 : 1))}`;
      for (let s = 0; s < 3; s++) {
         textD = `${(parseInt(`${policy4}`) & (eactp ? 3 : 2))}`;
      }
      while (5 <= textD.length) {
          let controlsO = 3.0;
          let bingA = true;
          let loadingn = String.fromCharCode(120,95,49,48,95,115,121,109,98,111,108,0);
          let configures = 0.0;
         textD = `${(3 * (eactp ? 3 : 3))}`;
         controlsO -= parseFloat(`${parseInt(`${configures}`)}`);
         bingA = loadingn.endsWith(`${configures}`);
         loadingn += `${3 / (Math.max(6, parseInt(`${configures}`)))}`;
         break;
      }
      for (let t = 0; t < 1; t++) {
         eactp = !textD.startsWith(`${policy4}`);
      }
         eactp = (((!eactp ? textD.length : 33) | textD.length) <= 33);
       let bottomY = new Map([[String.fromCharCode(100,101,108,97,121,95,55,95,54,52,0),336], [String.fromCharCode(117,110,115,104,97,114,112,95,107,95,49,57,0),370], [String.fromCharCode(101,120,112,108,105,99,105,116,0),288]]);
          let source1 = true;
         policy4 -= ((source1 ? 2 : 5));
      backgroundh = `${3 | bell5.length}`;
   if (1 > (1 - minimizeQ.size) || 1 > (backgroundh.length - minimizeQ.size)) {
      backgroundh += `${sideT.length | minimizeQ.size}`;
   }
   if (settingN.length > 4) {
      minivodX = middlewareB.startsWith(`${scheduleW}`);
   }
      settingN += "2";
   if (sideT != bell5) {
      bell5 = `${(String.fromCharCode(98,0) == bell5 ? settingN.length : bell5.length)}`;
   }
   while (scheduleW > parseFloat(`${middlewareB.length}`)) {
      middlewareB += "3";
      break;
   }
   if (minivodX) {
       let whistleU = 3.0;
       let mappingo = 4.0;
      do {
         whistleU /= Math.max(parseInt(`${mappingo}`) ^ parseInt(`${whistleU}`), 1);
         if (1538826.0 == whistleU) {
            break;
         }
      } while ((1538826.0 == whistleU) && (mappingo < whistleU));
      if (4.38 > (2.5 - mappingo) && 2.5 > (mappingo - whistleU)) {
         mappingo *= parseInt(`${whistleU}`) & parseInt(`${mappingo}`);
      }
      do {
          let skipk = 5.0;
         mappingo /= Math.max(parseInt(`${whistleU}`) | 2, 3);
         skipk -= 3 << (Math.min(Math.abs(parseInt(`${skipk}`)), 4));
         if (mappingo == 1089141.0) {
            break;
         }
      } while (((mappingo - whistleU) <= 4.7) && (mappingo == 1089141.0));
      for (let i = 0; i < 3; i++) {
         whistleU /= Math.max(parseInt(`${mappingo}`), 3);
      }
       let userx = new Map([[String.fromCharCode(119,95,49,50,95,99,111,110,102,101,116,116,105,0),592], [String.fromCharCode(104,97,100,95,48,95,52,49,0),273], [String.fromCharCode(118,95,57,50,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0),787]]);
       let routerO = new Map([[String.fromCharCode(98,95,52,51,95,100,105,102,102,115,0),false ], [String.fromCharCode(97,108,112,110,95,109,95,49,51,0),false ], [String.fromCharCode(110,95,51,55,95,114,101,97,99,104,101,100,0),true ]]);
       let humidity_ = new Map([[String.fromCharCode(115,111,99,107,95,108,95,53,50,0),false ], [String.fromCharCode(113,95,57,53,95,110,99,98,99,0),false ], [String.fromCharCode(103,95,52,52,95,99,108,111,110,101,0),true ]]);
      minivodX = bell5.length >= minimizeQ.size;
   }
      bell5 = `${sideT.length + telegramO.length}`;
      minivodX = ((bell5.length | (!minivodX ? bell5.length : 91)) >= 91);
       let countryU = new Map([[String.fromCharCode(116,95,53,57,95,120,118,109,99,0),977], [String.fromCharCode(115,117,114,101,95,98,95,52,50,0),178], [String.fromCharCode(101,95,50,50,95,101,99,104,111,0),345]]);
         countryU = new Map([[`${countryU.size}`, 1 & countryU.size]]);
      if (1 < (countryU.size | 3) && (countryU.size | countryU.size) < 3) {
         countryU = new Map([[`${countryU.size}`, countryU.size]]);
      }
         countryU[`${countryU.size}`] = countryU.size;
      scheduleW /= Math.max(parseFloat(`${parseInt(`${greene}`)}`), 5);
   do {
       let unselectedE = [696, 369, 340];
       let projectO = false;
       let ewardedQ = String.fromCharCode(98,95,52,55,95,112,97,110,110,105,110,103,0);
       let watchr = false;
         watchr = ((unselectedE.length >> (Math.min(1, Math.abs((watchr ? 76 : unselectedE.length))))) >= 76);
      for (let n = 0; n < 1; n++) {
          let related4 = new Map([[String.fromCharCode(122,112,116,102,95,110,95,52,56,0),576], [String.fromCharCode(121,95,51,95,110,111,114,109,0),569], [String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,106,95,54,54,0),757]]);
          let const_wp = new Map([[String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,95,118,95,56,57,0),744], [String.fromCharCode(115,95,57,56,95,112,111,119,116,97,98,108,101,0),774], [String.fromCharCode(98,105,115,101,99,116,95,100,95,51,55,0),761]]);
          let backwardI = 4.0;
          let referrerN = String.fromCharCode(98,95,53,54,95,115,101,108,101,99,116,105,110,103,0);
         ewardedQ += `${1 - const_wp.size}`;
         related4[`${referrerN}`] = related4.size;
         const_wp = new Map([[`${related4.size}`, parseInt(`${backwardI}`)]]);
         backwardI -= parseFloat(`${parseInt(`${backwardI}`)}`);
         referrerN += `${parseInt(`${backwardI}`)}`;
      }
      for (let w = 0; w < 2; w++) {
         unselectedE = [1];
      }
         ewardedQ = `${unselectedE.length}`;
       let guideY = String.fromCharCode(115,111,108,117,116,105,111,110,95,117,95,57,0);
      for (let o = 0; o < 1; o++) {
         guideY = `${guideY.length << (Math.min(Math.abs(3), 5))}`;
      }
      while (5 > unselectedE.length) {
         unselectedE = [(2 << (Math.min(Math.abs((watchr ? 4 : 5)), 2)))];
         break;
      }
         unselectedE = [1];
          let expiredt = 5.0;
          let twitterO = String.fromCharCode(116,114,105,97,110,103,108,101,95,116,95,51,56,0);
          let n_countK = true;
         guideY += `${((projectO ? 4 : 2) | 3)}`;
         expiredt *= parseFloat(`${3}`);
         twitterO = `${parseInt(`${expiredt}`) * 1}`;
         n_countK = !n_countK;
      while ((unselectedE.length - 4) >= 4) {
          let reducert = new Map([[String.fromCharCode(107,95,53,52,95,100,109,105,120,0),String.fromCharCode(109,105,108,105,111,110,115,95,51,95,57,57,0)], [String.fromCharCode(117,95,52,56,95,101,120,99,101,101,100,105,110,103,0),String.fromCharCode(114,98,115,112,95,100,95,50,50,0)]]);
          let light3 = 3.0;
          let gesturesr = String.fromCharCode(99,95,57,49,95,115,116,111,114,97,103,101,0);
         unselectedE.push(unselectedE.length);
         reducert = new Map([[`${reducert.size}`, 1 * reducert.size]]);
         light3 *= reducert.size + parseInt(`${light3}`);
         gesturesr = `${parseInt(`${light3}`)}`;
         break;
      }
          let alertB = [413, 217, 353];
         guideY = `${unselectedE.length}`;
         alertB = [alertB.length % (Math.max(1, 8))];
       let philippines3 = 3.0;
       let emptyA = 4.0;
      minimizeQ = new Map([[`${sellK}`, 1 % (Math.max(parseInt(`${greene}`), 10))]]);
      if (minimizeQ.size == 2181664) {
         break;
      }
   } while ((minimizeQ.size == 2181664) && (!sellK));
      middlewareB += `${(1 ^ (sellK ? 2 : 5))}`;
   if (backgroundh == String.fromCharCode(111,0)) {
      telegramO = `${2 - parseInt(`${scheduleW}`)}`;
   }
      sellK = (middlewareB.length >> (Math.min(3, Math.abs(minimizeQ.size)))) < 77;
       let confirmatione = 1.0;
       let rightX = [881, 631];
       let apps8 = String.fromCharCode(117,95,53,95,110,111,114,109,97,108,105,122,101,114,0);
         rightX = [parseInt(`${confirmatione}`)];
       let cornerO = 2.0;
         confirmatione += parseInt(`${confirmatione}`) % 2;
         confirmatione *= (String.fromCharCode(51,0) == apps8 ? apps8.length : rightX.length);
         confirmatione -= parseInt(`${cornerO}`);
         rightX = [parseInt(`${confirmatione}`)];
          let serviceY = 4.0;
          let type_b0 = 4;
          let unreadK = 2.0;
         rightX = [1 / (Math.max(parseInt(`${cornerO}`), 4))];
         serviceY /= Math.max(parseFloat(`${1}`), 2);
         type_b0 &= 1;
         unreadK *= parseFloat(`${parseInt(`${serviceY}`) * parseInt(`${unreadK}`)}`);
      for (let l = 0; l < 1; l++) {
         cornerO -= parseFloat(`${3 * parseInt(`${cornerO}`)}`);
      }
      do {
         cornerO *= parseFloat(`${parseInt(`${cornerO}`) * rightX.length}`);
         if (4697781.0 == cornerO) {
            break;
         }
      } while ((3.71 >= (parseFloat(`${apps8.length}`) - cornerO) && 3.91 >= (cornerO - 3.71)) && (4697781.0 == cornerO));
      settingN = `${2 << (Math.min(4, Math.abs(minimizeQ.size)))}`;
      sellK = settingN.length <= 15 || 15 <= sideT.length;
      minivodX = !sellK && !minivodX;
      scheduleW /= Math.max((parseFloat(`${(sellK ? 1 : 5)}`)), 3);

    setHasAreaChart(hasChart);
      greene += (String.fromCharCode(117,0) == telegramO ? minimizeQ.size : telegramO.length);
      telegramO = `${(settingN == String.fromCharCode(113,0) ? telegramO.length : settingN.length)}`;
      settingN += `${backgroundh.length ^ parseInt(`${scheduleW}`)}`;
      minivodX = settingN.length == telegramO.length;
      sellK = 67 == bell5.length;
   while (minivodX || 1 <= telegramO.length) {
       let storem = String.fromCharCode(110,95,57,57,95,117,118,108,99,0);
       let catalogv = String.fromCharCode(105,99,109,112,95,103,95,55,52,0);
       let completep = String.fromCharCode(112,117,116,115,116,114,95,100,95,57,53,0);
       let footballb = new Map([[String.fromCharCode(121,95,55,49,95,104,113,97,100,115,112,0),false ], [String.fromCharCode(116,106,117,116,105,108,95,48,95,50,53,0),true ], [String.fromCharCode(106,95,52,55,95,119,112,116,104,114,101,97,100,115,0),true ]]);
         storem = `${footballb.size}`;
      do {
         storem = `${catalogv.length}`;
         if (4275171 == storem.length) {
            break;
         }
      } while ((4275171 == storem.length) && (catalogv != storem));
         completep += "2";
         footballb = new Map([[storem, 2 & completep.length]]);
      for (let r = 0; r < 2; r++) {
         completep = `${storem.length}`;
      }
         catalogv = `${(catalogv == String.fromCharCode(85,0) ? footballb.size : catalogv.length)}`;
          let brightnessw = false;
         catalogv += `${2 + storem.length}`;
         brightnessw = !brightnessw && brightnessw;
      if ((catalogv.length ^ footballb.size) == 4) {
         footballb[completep] = 2 << (Math.min(1, catalogv.length));
      }
      while (completep.length > storem.length) {
         completep += "2";
         break;
      }
      if (storem.endsWith(`${catalogv.length}`)) {
         catalogv += `${1 >> (Math.min(3, storem.length))}`;
      }
       let lightJ = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,54,95,56,0);
       let rewindN = String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,98,95,50,51,0);
      do {
         catalogv = `${completep.length | catalogv.length}`;
         if (catalogv.length == 2418302) {
            break;
         }
      } while ((catalogv.length > 4) && (catalogv.length == 2418302));
      minivodX = sideT.length == 21;
      break;
   }
      sellK = sellK && scheduleW == 28.30;
       let type_xS = [74, 804];
         type_xS.push(type_xS.length >> (Math.min(Math.abs(2), 3)));
      while ((type_xS.length % 1) == 3) {
         type_xS = [3];
         break;
      }
         type_xS = [type_xS.length ^ type_xS.length];
      middlewareB += `${(String.fromCharCode(87,0) == settingN ? settingN.length : minimizeQ.size)}`;
      middlewareB = `${bell5.length}`;
      scheduleW *= parseFloat(`${2}`);
      backgroundh = `${backgroundh.length << (Math.min(Math.abs(2), 5))}`;
      sellK = !minivodX;
       let minimizeE = 1;
       let fastforwardW = 4.0;
       let popupc = String.fromCharCode(100,111,119,110,108,105,110,107,95,120,95,55,53,0);
      while (4 == (popupc.length | 2) || 2 == (popupc.length >> (Math.min(Math.abs(2), 2)))) {
         fastforwardW /= Math.max(parseFloat(`${popupc.length - parseInt(`${fastforwardW}`)}`), 2);
         break;
      }
       let downloadedq = String.fromCharCode(114,101,98,97,115,101,95,115,95,50,49,0);
       let greenz = String.fromCharCode(118,111,116,101,115,95,105,95,49,55,0);
      do {
          let injuryq = String.fromCharCode(116,114,97,99,107,105,110,103,0);
         greenz = `${downloadedq.length}`;
         injuryq += `${injuryq.length}`;
         if (greenz == String.fromCharCode(108,52,97,52,106,107,52,120,0)) {
            break;
         }
      } while ((greenz == String.fromCharCode(108,52,97,52,106,107,52,120,0)) && (greenz.length <= 5));
       let sliderL = String.fromCharCode(114,95,56,50,95,100,101,116,101,99,116,0);
          let actiona = 2.0;
         fastforwardW *= parseFloat(`${greenz.length << (Math.min(Math.abs(2), 4))}`);
         actiona *= parseInt(`${actiona}`);
      if (!sliderL.includes(`${greenz.length}`)) {
          let completeY = true;
          let controlsK = 5.0;
          let connectionM = [603, 843, 493];
          let controlV = 2.0;
          let renewV = String.fromCharCode(111,95,52,95,105,110,99,111,109,105,110,103,0);
         sliderL = `${popupc.length & minimizeE}`;
         completeY = !completeY;
         controlsK += parseFloat(`${parseInt(`${controlsK}`) % 3}`);
         connectionM = [renewV.length];
         controlV -= parseFloat(`${1 ^ parseInt(`${controlsK}`)}`);
         renewV = `${parseInt(`${controlV}`) * 2}`;
      }
      if (2 < popupc.length) {
         popupc = `${(String.fromCharCode(105,0) == downloadedq ? downloadedq.length : parseInt(`${fastforwardW}`))}`;
      }
         popupc = `${parseInt(`${fastforwardW}`)}`;
      while ((minimizeE - parseInt(`${fastforwardW}`)) >= 1 && (parseFloat(`${minimizeE}`) - fastforwardW) >= 3.68) {
          let macauP = String.fromCharCode(98,117,102,102,95,48,95,52,57,0);
         minimizeE *= 3;
         macauP = `${(String.fromCharCode(113,0) == macauP ? macauP.length : macauP.length)}`;
         break;
      }
      greene -= settingN.length;
   for (let b = 0; b < 1; b++) {
      backgroundh = `${bell5.length}`;
   }
      backgroundh = `${backgroundh.length}`;
   if (settingN.length > 2) {
      settingN += `${(String.fromCharCode(84,0) == bell5 ? (minivodX ? 4 : 5) : bell5.length)}`;
   }
   do {
       let watchb = String.fromCharCode(100,105,115,112,108,97,121,95,106,95,52,53,0);
       let transferX = true;
      while (5 == watchb.length && !transferX) {
         transferX = watchb.length >= 88;
         break;
      }
      for (let a = 0; a < 2; a++) {
         transferX = watchb.length >= 58;
      }
      if (transferX || 5 == watchb.length) {
         transferX = watchb.length > 39;
      }
         watchb += `${(2 >> (Math.min(4, Math.abs((transferX ? 5 : 3)))))}`;
          let matche = 3;
         transferX = transferX || watchb.length >= 97;
         matche |= matche & 1;
          let megaphoneE = 5.0;
          let internetZ = new Map([[String.fromCharCode(100,120,103,105,95,118,95,56,52,0),String.fromCharCode(101,95,50,52,95,98,97,110,110,101,114,0)], [String.fromCharCode(122,101,114,111,115,95,102,95,49,51,0),String.fromCharCode(118,95,53,49,95,116,97,115,107,0)], [String.fromCharCode(122,95,52,56,95,114,111,117,110,100,117,112,0),String.fromCharCode(110,105,110,101,95,113,95,52,50,0)]]);
          let pauseS = 0.0;
         watchb += `${internetZ.size}`;
         megaphoneE *= parseFloat(`${parseInt(`${megaphoneE}`) & 1}`);
         internetZ[`${megaphoneE}`] = 1;
         pauseS -= parseFloat(`${parseInt(`${megaphoneE}`) << (Math.min(5, Math.abs(parseInt(`${pauseS}`))))}`);
      scheduleW *= parseFloat(`${1}`);
      if (3961822.0 == scheduleW) {
         break;
      }
   } while ((3.82 > scheduleW || (3.82 * scheduleW) > 3.52) && (3961822.0 == scheduleW));
      backgroundh += `${3 - sideT.length}`;

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
