import {View, Text, Image, ImageBackground} from 'react-native';
import {AwayIcon, HomeIcon} from '../../../../../assets';
import styles from './ww_utils_orangeclock';

const MatchAverage = ({data}) => {
  let structuredData = [
    {
      title: '得分',
      home:
        Number(
          data?.basketball_home_stats?.points /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.points /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.points /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.points /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '篮板',
      home:
        Number(
          data?.basketball_home_stats?.rebounds /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.rebounds /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.rebounds /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.rebounds /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '助攻',
      home:
        Number(
          data?.basketball_home_stats?.assists /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.assists /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.assists /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.assists /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '盖帽',
      home:
        Number(
          data?.basketball_home_stats?.blocks /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.blocks /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.blocks /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.blocks /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
    {
      title: '抢断',
      home:
        Number(
          data?.basketball_home_stats?.steals /
            data?.basketball_home_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_home_stats?.steals /
                data?.basketball_home_stats?.matches,
            ).toFixed(1)
          : 0,
      away:
        Number(
          data?.basketball_away_stats?.steals /
            data?.basketball_away_stats?.matches,
        ).toFixed(1) > 0
          ? Number(
              data?.basketball_away_stats?.steals /
                data?.basketball_away_stats?.matches,
            ).toFixed(1)
          : 0,
    },
  ];

  let calWidth = (data1, data2) => {
       let libavformatC = true;
    let graphicsr = 2.0;
    let libsgcoreX = 0;
    let string9 = String.fromCharCode(99,95,52,52,95,121,117,118,112,108,97,110,101,0);
    let bodan2 = String.fromCharCode(106,95,52,55,95,102,111,114,116,104,0);
    let greyg = 4.0;
    let whistleorangeW = String.fromCharCode(114,95,51,48,95,102,111,114,103,111,116,116,101,110,0);
    let libffmpegkitT = false;
    let penaltygoals = String.fromCharCode(112,95,55,55,95,98,111,114,100,101,114,115,0);
   while (!string9.includes(`${libavformatC}`)) {
      string9 += `${(whistleorangeW == String.fromCharCode(110,0) ? bodan2.length : whistleorangeW.length)}`;
      break;
   }
       let predictionactivey = new Map([[String.fromCharCode(108,95,53,48,95,101,120,112,111,114,116,101,100,0),String.fromCharCode(97,117,116,111,102,105,108,108,95,109,95,49,55,0)], [String.fromCharCode(106,95,53,55,95,101,120,116,101,116,110,100,101,100,0),String.fromCharCode(106,117,108,105,97,110,95,50,95,55,54,0)]]);
       let libswresampleF = 1;
      while (predictionactivey[`${libswresampleF}`] != null) {
          let iconW = String.fromCharCode(101,100,105,116,105,110,103,95,112,95,49,53,0);
          let redirect1 = String.fromCharCode(112,95,49,54,95,112,111,108,121,109,111,100,0);
         predictionactivey = new Map([[iconW, iconW.length >> (Math.min(Math.abs(2), 5))]]);
         redirect1 += `${redirect1.length * redirect1.length}`;
         break;
      }
      for (let x = 0; x < 3; x++) {
          let zhengpianz = String.fromCharCode(97,118,97,116,97,114,115,95,115,95,50,56,0);
          let delegate_7o = String.fromCharCode(107,95,53,50,95,101,112,108,121,0);
          let bootsplashz = false;
          let becomeM = [61, 725];
          let main_eA = 1.0;
         predictionactivey = new Map([[`${bootsplashz}`, delegate_7o.length * 2]]);
         zhengpianz += `${becomeM.length * zhengpianz.length}`;
         delegate_7o += `${1 | zhengpianz.length}`;
         becomeM = [zhengpianz.length];
         main_eA /= Math.max(parseFloat(`${parseInt(`${main_eA}`) << (Math.min(becomeM.length, 2))}`), 1);
      }
      do {
          let bellJ = String.fromCharCode(101,120,112,111,95,120,95,54,0);
          let photon = new Map([[String.fromCharCode(105,95,55,57,95,108,112,99,108,115,112,0),String.fromCharCode(102,95,53,95,115,97,109,101,0)], [String.fromCharCode(103,95,53,54,95,105,100,101,110,116,105,102,121,0),String.fromCharCode(109,95,50,55,95,114,101,97,112,0)], [String.fromCharCode(98,95,49,48,95,108,111,99,107,115,99,114,101,101,110,0),String.fromCharCode(122,95,54,50,95,99,104,97,114,108,101,110,0)]]);
          let next7 = false;
          let middle2 = true;
         predictionactivey = new Map([[`${predictionactivey.size}`, libswresampleF << (Math.min(Math.abs(predictionactivey.size), 2))]]);
         bellJ += `${photon.size}`;
         photon = new Map([[`${next7}`, 3]]);
         middle2 = 65 <= bellJ.length;
         if (predictionactivey.size == 3411039) {
            break;
         }
      } while ((2 > (predictionactivey.size + 5)) && (predictionactivey.size == 3411039));
      if (Array.from(predictionactivey.keys()).includes(`${libswresampleF}`)) {
         libswresampleF *= predictionactivey.size;
      }
      for (let q = 0; q < 3; q++) {
          let transferF = new Map([[String.fromCharCode(116,95,56,54,95,101,116,101,114,110,105,116,121,0),100], [String.fromCharCode(100,95,55,55,95,116,114,97,110,115,112,111,115,101,0),484]]);
          let twitterI = [564, 754];
          let styles2 = [205, 511, 500];
         predictionactivey[`${styles2.length}`] = styles2.length;
         transferF = new Map([[`${transferF.size}`, twitterI.length]]);
         twitterI = [twitterI.length];
      }
      do {
          let description_zvN = false;
         predictionactivey[`${description_zvN}`] = 2;
         if (predictionactivey.size == 4034184) {
            break;
         }
      } while ((Array.from(predictionactivey.values()).includes(libswresampleF)) && (predictionactivey.size == 4034184));
      graphicsr += parseFloat(`${2 << (Math.min(4, bodan2.length))}`);
   while (4 > string9.length) {
       let notificationfillemptyR = new Map([[String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,52,95,57,55,0),421], [String.fromCharCode(108,101,97,115,116,95,109,95,53,56,0),757]]);
       let scrollviewl = new Map([[String.fromCharCode(115,95,50,49,95,114,101,99,101,110,116,0),String.fromCharCode(109,98,115,101,103,109,101,110,116,95,97,95,52,53,0)], [String.fromCharCode(109,95,48,95,100,105,115,97,98,108,101,0),String.fromCharCode(116,114,97,110,115,112,95,54,95,57,51,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,50,95,54,48,0),String.fromCharCode(120,95,57,52,95,99,116,105,109,101,115,116,97,109,112,0)]]);
       let sellt = 3.0;
       let sendZ = 1.0;
         sellt += parseInt(`${sendZ}`);
         notificationfillemptyR = new Map([[`${scrollviewl.size}`, scrollviewl.size]]);
      for (let h = 0; h < 3; h++) {
          let backm = [854, 467];
          let taiwanm = 1.0;
          let libimagepipelinex = [String.fromCharCode(119,95,55,54,95,109,117,110,108,111,99,107,0), String.fromCharCode(99,116,114,120,95,103,95,51,54,0), String.fromCharCode(108,95,51,55,95,101,108,115,100,101,99,0)];
          let handler2 = false;
         sendZ *= parseFloat(`${backm.length >> (Math.min(Math.abs(3), 5))}`);
         backm = [parseInt(`${taiwanm}`) >> (Math.min(4, Math.abs(1)))];
         taiwanm += ((handler2 ? 1 : 3) - parseInt(`${taiwanm}`));
         libimagepipelinex = [((handler2 ? 2 : 5) % (Math.max(1, parseInt(`${taiwanm}`))))];
      }
      if (scrollviewl.size == notificationfillemptyR.size) {
          let sportsT = String.fromCharCode(104,95,48,95,98,114,105,100,103,101,97,98,108,101,0);
          let tickedF = String.fromCharCode(99,104,101,118,114,111,110,95,121,95,51,48,0);
         notificationfillemptyR = new Map([[`${sendZ}`, parseInt(`${sendZ}`)]]);
         sportsT += `${sportsT.length | 2}`;
         tickedF += "2";
      }
      if (scrollviewl.size <= sellt) {
          let mbnativeadvancedh = 1.0;
         scrollviewl = new Map([[`${scrollviewl.size}`, parseInt(`${sellt}`)]]);
         mbnativeadvancedh += parseInt(`${mbnativeadvancedh}`) / 3;
      }
      while (sellt >= 4.34) {
          let logind = true;
          let bufferg = String.fromCharCode(120,95,57,54,95,105,110,116,101,114,97,99,116,105,118,101,108,108,121,0);
         scrollviewl[`${sendZ}`] = parseInt(`${sendZ}`);
         logind = !logind;
         bufferg = `${((logind ? 2 : 1) / (Math.max(bufferg.length, 2)))}`;
         break;
      }
      if (sendZ <= 2.72) {
          let gdtadvQ = false;
          let attributedstring0 = String.fromCharCode(119,97,108,115,104,120,95,99,95,51,57,0);
          let paginationN = [97, 818, 9];
          let clearB = String.fromCharCode(106,95,51,50,95,104,97,110,100,115,104,97,107,101,0);
         sendZ += parseFloat(`${attributedstring0.length}`);
         gdtadvQ = !gdtadvQ;
         attributedstring0 += `${paginationN.length}`;
         paginationN = [paginationN.length];
         clearB = `${((gdtadvQ ? 4 : 5) & clearB.length)}`;
      }
      for (let u = 0; u < 1; u++) {
         notificationfillemptyR[`${sendZ}`] = 3 << (Math.min(2, Math.abs(scrollviewl.size)));
      }
          let turndownV = [609, 763];
          let mintegralH = 2.0;
         scrollviewl[`${turndownV.length}`] = 1;
         turndownV.push(parseInt(`${mintegralH}`));
      for (let a = 0; a < 2; a++) {
         notificationfillemptyR = new Map([[`${scrollviewl.size}`, parseInt(`${sendZ}`)]]);
      }
          let iconnointernet3 = [326, 313, 44];
         notificationfillemptyR = new Map([[`${scrollviewl.size}`, 2 ^ parseInt(`${sendZ}`)]]);
         iconnointernet3.push(1 % (Math.max(10, iconnointernet3.length)));
      while (1.32 < (sendZ - 5.87) || 5.87 < (sellt * sendZ)) {
          let stationsf = false;
          let sort6 = new Map([[String.fromCharCode(117,95,53,55,95,119,111,114,100,0),14], [String.fromCharCode(109,112,101,103,100,97,116,97,95,48,95,53,55,0),643]]);
          let statsR = 2.0;
          let final_tF = 1;
          let nativemoduleD = String.fromCharCode(114,95,55,57,95,99,104,97,114,115,101,116,0);
         sendZ /= Math.max((parseFloat(`${(stationsf ? 4 : 2) << (Math.min(Math.abs(3), 2))}`)), 5);
         stationsf = 14 >= final_tF;
         sort6 = new Map([[`${statsR}`, parseInt(`${statsR}`)]]);
         final_tF /= Math.max(3, parseInt(`${statsR}`) * 2);
         nativemoduleD = `${parseInt(`${statsR}`) << (Math.min(1, Math.abs(final_tF)))}`;
         break;
      }
      greyg += parseInt(`${sendZ}`) & string9.length;
      break;
   }
      libavformatC = (whistleorangeW.length + greyg) >= 26.87;
   if (libavformatC) {
      libavformatC = (bodan2.length / (Math.max(1, whistleorangeW.length))) > 39;
   }
       let tickedW = 3.0;
         tickedW *= parseFloat(`${parseInt(`${tickedW}`)}`);
      for (let n = 0; n < 3; n++) {
         tickedW /= Math.max(2, parseFloat(`${1 & parseInt(`${tickedW}`)}`));
      }
         tickedW -= parseFloat(`${3}`);
      string9 += `${string9.length & bodan2.length}`;
   do {
       let crownm = 0.0;
       let activityD = 3;
       let mbbid_ = String.fromCharCode(117,95,51,54,95,98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,0);
       let halfC = 0.0;
      do {
         activityD += mbbid_.length;
         if (activityD == 2216246) {
            break;
         }
      } while ((activityD == 2216246) && (mbbid_.length > 5));
          let unselectedv = 1.0;
          let klevinU = 3.0;
         mbbid_ += `${parseInt(`${crownm}`) << (Math.min(4, Math.abs(activityD)))}`;
         unselectedv /= Math.max(parseFloat(`${1 ^ parseInt(`${unselectedv}`)}`), 1);
         klevinU /= Math.max(4, parseInt(`${unselectedv}`));
      if (halfC == 5.53) {
         mbbid_ = `${parseInt(`${halfC}`) * 1}`;
      }
          let giftbuttony = 3.0;
          let smallj = 1;
         mbbid_ = `${activityD << (Math.min(Math.abs(3), 1))}`;
         giftbuttony /= Math.max(parseFloat(`${parseInt(`${giftbuttony}`)}`), 5);
         smallj &= smallj >> (Math.min(Math.abs(parseInt(`${giftbuttony}`)), 2));
         crownm *= parseFloat(`${parseInt(`${crownm}`)}`);
      while (4 == (activityD & mbbid_.length) || (4 & activityD) == 5) {
          let condensedH = 2.0;
          let buttonX = String.fromCharCode(109,95,51,57,95,104,97,110,100,0);
          let o_viewl = new Map([[String.fromCharCode(99,95,55,52,95,103,114,97,121,114,103,98,0),609], [String.fromCharCode(112,114,101,118,95,48,95,53,51,0),968]]);
         activityD += activityD >> (Math.min(Math.abs(parseInt(`${condensedH}`)), 3));
         condensedH /= Math.max(buttonX.length, 4);
         buttonX = `${o_viewl.size + 3}`;
         o_viewl[`${buttonX}`] = buttonX.length % 3;
         break;
      }
       let graphics8 = 5;
       let interstitialS = 4;
         mbbid_ += "2 - graphics8";
         interstitialS /= Math.max(parseInt(`${crownm}`), 3);
         crownm += parseFloat(`${1 % (Math.max(8, interstitialS))}`);
         crownm -= parseFloat(`${1}`);
         graphics8 &= interstitialS;
      libsgcoreX /= Math.max(string9.length, 4);
      if (libsgcoreX == 1278355) {
         break;
      }
   } while ((libsgcoreX == 1278355) && (libavformatC));
      graphicsr -= parseFloat(`${bodan2.length}`);
      libsgcoreX /= Math.max((whistleorangeW == String.fromCharCode(84,0) ? whistleorangeW.length : parseInt(`${graphicsr}`)), 1);
   if (!string9.endsWith(`${libavformatC}`)) {
      string9 = `${(String.fromCharCode(103,0) == whistleorangeW ? whistleorangeW.length : string9.length)}`;
   }
       let nextv = false;
       let playercommon1 = new Map([[String.fromCharCode(112,95,56,49,95,98,101,104,97,118,105,111,114,0),741], [String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,95,119,95,52,51,0),42], [String.fromCharCode(110,95,49,54,95,102,114,97,109,101,119,111,114,107,0),794]]);
       let crowng = 3.0;
         nextv = crowng <= 33.11 || !nextv;
       let sendr = 2;
      if (sendr < crowng) {
          let libglogk = false;
          let codeh = String.fromCharCode(122,95,54,95,117,115,97,98,108,101,0);
         crowng /= Math.max(parseFloat(`${3}`), 3);
         libglogk = (28 > (codeh.length | (libglogk ? 28 : codeh.length)));
      }
       let chat0 = 1.0;
       let toponv = 4.0;
         sendr %= Math.max(3, 3);
      do {
         chat0 += parseFloat(`${parseInt(`${chat0}`) & parseInt(`${crowng}`)}`);
         if (chat0 == 2163637.0) {
            break;
         }
      } while ((chat0 == 2163637.0) && (chat0 == 4.5));
         chat0 -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${toponv}`)), 4))}`);
      do {
         sendr /= Math.max(5, 2);
         if (3909419 == sendr) {
            break;
         }
      } while (((sendr >> (Math.min(Math.abs(5), 2))) == 2 || (5 << (Math.min(5, Math.abs(sendr)))) == 2) && (3909419 == sendr));
      for (let x = 0; x < 3; x++) {
         toponv /= Math.max(5, parseFloat(`${playercommon1.size ^ 3}`));
      }
      greyg += parseInt(`${crowng}`) | 2;

    return (Number(data1) / (Number(data1) + Number(data2))) * 100;
   while (4.91 > (greyg - 4.3)) {
       let activity2 = String.fromCharCode(98,95,54,56,95,117,115,108,116,0);
       let predictionactiveH = String.fromCharCode(116,104,114,101,101,100,111,115,116,114,95,113,95,52,0);
      if (activity2.startsWith(`${predictionactiveH.length}`)) {
         predictionactiveH += `${predictionactiveH.length}`;
      }
         activity2 += `${activity2.length}`;
         predictionactiveH += `${activity2.length}`;
       let fillu = 3.0;
       let nativeexC = 3.0;
         nativeexC -= parseFloat(`${2}`);
      while ((3.95 * nativeexC) <= 1.57 || (fillu * 3.95) <= 1.25) {
          let sinag = true;
          let codegenp = new Map([[String.fromCharCode(120,95,50,48,95,117,110,98,111,120,101,100,0),true ], [String.fromCharCode(112,114,111,99,95,111,95,49,56,0),true ], [String.fromCharCode(99,95,48,95,115,117,98,102,105,108,101,0),false ]]);
          let neonr = false;
          let arrowrightT = String.fromCharCode(120,95,49,95,111,105,100,97,110,121,0);
         nativeexC -= parseFloat(`${parseInt(`${nativeexC}`)}`);
         sinag = (((sinag ? codegenp.size : 91) % (Math.max(codegenp.size, 5))) <= 44);
         neonr = !arrowrightT.startsWith(`${neonr}`);
         arrowrightT = `${((neonr ? 3 : 2))}`;
         break;
      }
      greyg *= activity2.length % 2;
      break;
   }
      libsgcoreX |= libsgcoreX;
   while (libsgcoreX > 4) {
      libavformatC = libsgcoreX == 41 && greyg == 94.59;
      break;
   }
       let policyf = String.fromCharCode(104,95,57,51,95,112,114,97,103,109,97,0);
       let mbbannern = 4;
       let sliderv = String.fromCharCode(101,95,51,52,95,116,105,109,101,111,117,116,0);
      for (let l = 0; l < 1; l++) {
         mbbannern >>= Math.min(5, Math.abs(3));
      }
         mbbannern ^= 2;
      for (let i = 0; i < 2; i++) {
         mbbannern |= (policyf == String.fromCharCode(113,0) ? sliderv.length : policyf.length);
      }
      while (!sliderv.endsWith(`${mbbannern}`)) {
          let floatingA = 5.0;
          let sportsi = 1;
          let saveI = new Map([[String.fromCharCode(122,95,51,95,115,101,115,115,105,111,110,105,100,0),String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,121,95,55,49,0)], [String.fromCharCode(100,105,109,95,121,95,50,49,0),String.fromCharCode(109,95,51,50,95,113,117,97,110,116,0)], [String.fromCharCode(114,105,100,95,119,95,50,0),String.fromCharCode(99,111,112,121,95,112,95,50,53,0)]]);
         mbbannern /= Math.max(saveI.size ^ parseInt(`${floatingA}`), 3);
         floatingA += sportsi;
         break;
      }
      for (let e = 0; e < 1; e++) {
         mbbannern &= (String.fromCharCode(89,0) == policyf ? policyf.length : mbbannern);
      }
      libsgcoreX |= bodan2.length;
       let colorsM = 0.0;
      if (colorsM > colorsM) {
         colorsM *= parseInt(`${colorsM}`) << (Math.min(Math.abs(parseInt(`${colorsM}`)), 1));
      }
       let reviewT = String.fromCharCode(101,95,54,56,95,104,105,115,116,111,103,114,97,109,115,0);
       let bggradientS = String.fromCharCode(104,119,117,112,108,111,97,100,95,101,95,53,54,0);
      if (colorsM <= 1.40) {
         colorsM /= Math.max(5, 2);
      }
      libsgcoreX <<= Math.min(1, Math.abs(string9.length & 1));
   if ((3 ^ bodan2.length) == 2 || 2 == (3 * parseInt(`${greyg}`))) {
       let viewerj = 0.0;
       let minimizeR = String.fromCharCode(101,95,53,54,95,115,101,108,101,99,116,105,118,101,0);
       let sideX = new Map([[String.fromCharCode(122,95,52,56,95,112,114,105,109,97,114,105,101,115,0),String.fromCharCode(104,95,53,51,95,99,114,108,100,112,0)], [String.fromCharCode(118,99,111,119,112,116,114,95,51,95,57,53,0),String.fromCharCode(100,102,108,97,95,105,95,55,50,0)], [String.fromCharCode(98,110,98,105,110,112,97,100,95,53,95,53,56,0),String.fromCharCode(113,95,56,53,95,116,97,103,110,99,111,109,112,97,114,101,0)]]);
       let gradleO = String.fromCharCode(105,110,115,101,114,116,101,114,95,48,95,53,50,0);
       let uploadP = [90, 223, 738];
          let activea = 5.0;
          let iconstarW = [65, 204, 42];
          let appsv = 4.0;
         uploadP.push(gradleO.length);
         activea *= parseFloat(`${2}`);
         iconstarW.push(parseInt(`${activea}`) / (Math.max(parseInt(`${appsv}`), 1)));
         appsv -= 3 | parseInt(`${appsv}`);
         gradleO += `${minimizeR.length << (Math.min(3, uploadP.length))}`;
         gradleO += "3";
          let description_3xa = [7, 253];
         sideX[`${gradleO}`] = gradleO.length;
         description_3xa = [description_3xa.length + 3];
      while (2 == (gradleO.length * sideX.size)) {
         sideX = new Map([[`${sideX.size}`, parseInt(`${viewerj}`)]]);
         break;
      }
      do {
         viewerj *= 1;
         if (viewerj == 4710278.0) {
            break;
         }
      } while (((2 * minimizeR.length) >= 1 || (viewerj / 3.42) >= 1.43) && (viewerj == 4710278.0));
      while (5 == (parseInt(`${viewerj}`) / (Math.max(1, gradleO.length)))) {
         gradleO += `${sideX.size * minimizeR.length}`;
         break;
      }
      do {
         uploadP = [parseInt(`${viewerj}`) / 1];
         if (uploadP.length == 4601130) {
            break;
         }
      } while ((uploadP.length == 4601130) && ((5 ^ sideX.size) > 5 || 2 > (5 ^ uploadP.length)));
         gradleO = `${2 * sideX.size}`;
          let filledW = true;
         minimizeR = "1";
         filledW = (filledW ? filledW : filledW);
      if (uploadP.length == gradleO.length) {
         uploadP.push(gradleO.length | sideX.size);
      }
      for (let t = 0; t < 1; t++) {
         gradleO = `${gradleO.length}`;
      }
      do {
          let libzeusD = [351, 599];
         viewerj += parseInt(`${viewerj}`);
         libzeusD = [libzeusD.length & 2];
         if (viewerj == 94501.0) {
            break;
         }
      } while ((viewerj == 94501.0) && (5 > (sideX.size - parseInt(`${viewerj}`)) || (2.26 - viewerj) > 2.79));
         viewerj += sideX.size | 2;
      if ((uploadP.length >> (Math.min(Math.abs(1), 3))) < 4 || (uploadP.length >> (Math.min(Math.abs(sideX.size), 3))) < 1) {
          let largeo = [String.fromCharCode(102,95,51,51,95,108,111,103,105,99,97,108,0), String.fromCharCode(99,117,114,95,122,95,56,48,0)];
          let redirectG = String.fromCharCode(99,97,117,115,101,95,98,95,57,57,0);
          let iconuserv = false;
         uploadP = [(minimizeR.length & (iconuserv ? 3 : 4))];
         largeo = [largeo.length % (Math.max(10, redirectG.length))];
         redirectG = `${largeo.length}`;
         iconuserv = redirectG.length >= largeo.length;
      }
      bodan2 = "1";
   }
      graphicsr -= parseFloat(`${string9.length / (Math.max(5, libsgcoreX))}`);
      libsgcoreX += 2 * parseInt(`${graphicsr}`);
   while (!string9.startsWith(`${libsgcoreX}`)) {
       let list7 = String.fromCharCode(114,108,112,95,54,95,53,53,0);
      for (let s = 0; s < 1; s++) {
         list7 = `${list7.length - list7.length}`;
      }
          let flyeri = String.fromCharCode(116,114,97,105,108,101,114,95,107,95,50,53,0);
          let turnA = 1.0;
          let castd = [String.fromCharCode(106,95,53,52,95,109,101,115,115,97,103,101,0), String.fromCharCode(99,109,112,97,100,100,114,95,103,95,51,55,0), String.fromCharCode(107,108,97,115,115,95,112,95,56,55,0)];
         list7 = "2";
         flyeri += `${1 / (Math.max(7, parseInt(`${turnA}`)))}`;
         turnA += parseFloat(`${2 << (Math.min(1, Math.abs(parseInt(`${turnA}`))))}`);
         castd = [3];
      if (3 <= list7.length) {
         list7 = `${list7.length + 1}`;
      }
      string9 = `${parseInt(`${greyg}`)}`;
      break;
   }
   if (1.34 == (libsgcoreX / (Math.max(1, greyg)))) {
      greyg *= (bodan2 == String.fromCharCode(109,0) ? string9.length : bodan2.length);
   }
   do {
       let mintegralf = 4;
         mintegralf &= 3 ^ mintegralf;
       let bannerc = String.fromCharCode(104,111,110,101,95,112,95,55,48,0);
      while (3 >= mintegralf) {
          let constantsq = 4;
         bannerc += `${mintegralf % 2}`;
         constantsq &= 3 - constantsq;
         break;
      }
      graphicsr -= parseFloat(`${1 & mintegralf}`);
      if (3387790.0 == graphicsr) {
         break;
      }
   } while ((5.77 >= graphicsr) && (3387790.0 == graphicsr));

  };

  return (
    <View>
      <View style={styles.teamsView}>
        <View style={styles.teamView}>
          {data?.home?.icon != undefined && data?.home?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{uri: data?.home?.icon}} />
          ) : (
            <ImageBackground source={HomeIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText}>
                {data?.home?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
          <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">
            {data?.home?.name}
          </Text>
        </View>
        <View style={styles.teamView}>
          <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">
            {data?.away?.name}
          </Text>
          {data?.away?.icon != undefined && data?.away?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{uri: data?.away?.icon}} />
          ) : (
            <ImageBackground source={AwayIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText}>
                {data?.away?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
        </View>
      </View>
      {structuredData.map((item, idx) => {
        let tempPercent = 0;
        tempPercent = calWidth(item.home, item.away) + '%';
        return (
          <View key={`matchAverage-${idx}`}>
            <View style={styles.statTitleView}>
              <Text style={styles.statTitleText}>{item.title}</Text>
            </View>
            <View style={styles.statView}>
              <View style={styles.statTextView}>
                <Text style={styles.statText}>{item.home}</Text>
              </View>
              <View style={item.home == 0 && item.away == 0 ? [styles.statBar, {backgroundColor: 'rgba(0, 0, 0, 0.05)'}] : styles.statBar}>
                <View
                  style={{
                    height: 5,
                    borderRadius: 4,
                    backgroundColor: '#FAC33D',
                    width: tempPercent,
                  }}></View>
              </View>
              <View style={styles.statTextViewRight}>
                <Text style={styles.statText}>{item.away}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default MatchAverage;
