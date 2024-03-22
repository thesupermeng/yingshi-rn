import {View, Text, Image, ImageBackground} from 'react-native';
import {AwayIcon, HomeIcon} from '../../../../../assets';
import styles from './fgl_less_position';

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
       let blackR = [190, 316];
    let nterstitialX = String.fromCharCode(99,111,114,101,115,95,101,95,56,48,0);
    let chinaY = 4.0;
    let stepL = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,99,95,49,48,0);
    let thumbnailG = 3.0;
    let shoota = String.fromCharCode(109,98,102,105,108,116,101,114,95,113,95,54,52,0);
    let description_8B = 0;
    let userN = new Map([[String.fromCharCode(109,95,57,52,95,110,101,103,97,116,101,0),62], [String.fromCharCode(112,101,110,97,108,116,121,95,97,95,55,53,0),259]]);
    let networkV = String.fromCharCode(119,111,114,100,95,52,95,54,55,0);
    let mutedz = String.fromCharCode(118,95,50,54,95,109,98,114,116,104,114,101,97,100,0);
    let phonec = String.fromCharCode(115,104,111,119,99,113,116,95,106,95,55,0);
    let constantsr = [20, 428, 802];
    let transferG = String.fromCharCode(111,95,57,56,95,114,102,116,102,115,117,98,0);
    let tickX = 0.0;
   for (let h = 0; h < 2; h++) {
       let username6 = 4.0;
       let progressF = 1;
       let brightness2 = [String.fromCharCode(109,95,57,53,95,100,105,99,116,105,111,110,97,114,105,101,115,0), String.fromCharCode(99,95,50,55,95,103,109,111,99,107,0), String.fromCharCode(100,95,51,57,95,108,97,116,105,110,0)];
      do {
          let m_lockp = new Map([[String.fromCharCode(115,95,52,52,95,114,101,109,97,112,112,101,100,0),String.fromCharCode(111,95,54,53,95,102,114,101,101,112,97,100,100,114,115,0)], [String.fromCharCode(97,115,112,101,99,116,115,95,108,95,52,48,0),String.fromCharCode(115,98,108,111,103,95,50,95,56,49,0)], [String.fromCharCode(106,115,111,110,115,95,104,95,53,49,0),String.fromCharCode(98,108,105,110,100,101,100,95,117,95,51,52,0)]]);
         brightness2.push(m_lockp.size);
         if (brightness2.length == 3275594) {
            break;
         }
      } while ((brightness2.length == 3275594) && (brightness2.includes(username6)));
         username6 -= 1;
         brightness2.push(3);
         progressF %= Math.max(progressF & parseInt(`${username6}`), 2);
         progressF ^= brightness2.length;
         brightness2 = [progressF | 3];
      do {
         progressF /= Math.max(2, 3 & brightness2.length);
         if (347522 == progressF) {
            break;
         }
      } while ((brightness2.includes(progressF)) && (347522 == progressF));
          let update_h7 = 3.0;
          let reportz = [680, 170];
          let completeN = String.fromCharCode(99,108,97,117,115,101,95,116,95,54,56,0);
         progressF <<= Math.min(3, Math.abs(1 % (Math.max(7, reportz.length))));
         update_h7 -= parseFloat(`${3}`);
         reportz.push((String.fromCharCode(98,0) == completeN ? completeN.length : parseInt(`${update_h7}`)));
         progressF ^= parseInt(`${username6}`);
      userN[`${stepL}`] = 2 + userN.size;
   }
   for (let u = 0; u < 1; u++) {
      networkV = `${(shoota == String.fromCharCode(52,0) ? parseInt(`${thumbnailG}`) : shoota.length)}`;
   }
   for (let n = 0; n < 2; n++) {
      nterstitialX += `${stepL.length}`;
   }
   while (2 >= mutedz.length) {
       let math0 = [70, 861, 171];
       let carouselQ = 5.0;
       let questz = new Map([[String.fromCharCode(115,99,114,111,108,108,105,110,103,95,119,95,57,51,0),true ], [String.fromCharCode(119,95,51,52,95,99,111,109,98,105,110,101,0),true ], [String.fromCharCode(120,95,50,53,95,108,122,111,120,0),false ]]);
       let weiboS = false;
       let teamD = true;
       let filedP = 3.0;
       let storeE = 2.0;
      for (let s = 0; s < 2; s++) {
          let s_positionG = 4.0;
          let faviconp = 4.0;
          let hoverH = 0;
          let middle_ = true;
          let middle0 = 3.0;
         filedP /= Math.max(1, parseFloat(`${parseInt(`${s_positionG}`)}`));
         faviconp /= Math.max(parseFloat(`${hoverH}`), 1);
         hoverH <<= Math.min(Math.abs(1 * hoverH), 4);
         middle_ = !middle_;
         middle0 /= Math.max(parseFloat(`${1}`), 1);
      }
      do {
          let mathA = String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,95,98,95,50,55,0);
          let heji5 = 2;
          let analyticsG = new Map([[String.fromCharCode(114,101,99,111,114,100,101,114,95,99,95,53,49,0),false ], [String.fromCharCode(116,104,117,109,98,115,117,112,95,111,95,53,52,0),true ]]);
          let condensedE = true;
          let favorite0 = String.fromCharCode(118,95,53,52,95,99,104,101,99,107,105,110,103,0);
         filedP *= parseFloat(`${3}`);
         mathA += `${heji5}`;
         heji5 -= ((condensedE ? 4 : 1));
         analyticsG = new Map([[`${analyticsG.size}`, analyticsG.size]]);
         condensedE = favorite0 == String.fromCharCode(119,0) || heji5 == 8;
         favorite0 += `${mathA.length / (Math.max(favorite0.length, 3))}`;
         if (446782.0 == filedP) {
            break;
         }
      } while ((1.58 <= (4.72 - carouselQ) || 4.72 <= (carouselQ - filedP)) && (446782.0 == filedP));
      do {
          let middleP = new Map([[String.fromCharCode(101,95,55,55,95,112,111,114,116,114,97,105,116,0),true ], [String.fromCharCode(115,109,97,99,107,101,114,95,104,95,50,53,0),true ], [String.fromCharCode(100,95,50,51,0),true ]]);
          let dice1 = String.fromCharCode(102,95,56,57,95,114,101,99,111,110,110,101,99,116,105,111,110,0);
          let scoreF = [String.fromCharCode(104,95,51,56,95,114,101,99,111,114,100,115,0), String.fromCharCode(104,105,101,114,95,103,95,50,48,0), String.fromCharCode(105,110,118,111,107,101,95,118,95,49,55,0)];
          let connection6 = 5.0;
         teamD = 88 <= questz.size && 88 <= math0.length;
         middleP = new Map([[`${middleP.size}`, 2]]);
         dice1 = `${dice1.length}`;
         scoreF = [2 & dice1.length];
         connection6 /= Math.max(parseInt(`${connection6}`) % 3, 2);
         if (teamD ? !teamD : teamD) {
            break;
         }
      } while (((1.97 + filedP) == 3.64 || filedP == 1.97) && (teamD ? !teamD : teamD));
      while (4 == (parseInt(`${storeE}`) / (Math.max(questz.size, 8)))) {
          let containerV = 2;
         storeE -= parseFloat(`${containerV}`);
         break;
      }
      if (!math0.includes(storeE)) {
         storeE -= parseFloat(`${2}`);
      }
      do {
         questz = new Map([[`${questz.size}`, ((teamD ? 2 : 3) % (Math.max(2, 2)))]]);
         if (questz.size == 4772594) {
            break;
         }
      } while ((questz.size == 1) && (questz.size == 4772594));
      while (1.19 == (carouselQ * 4.40) && !weiboS) {
          let verticalX = 3;
         carouselQ /= Math.max(parseInt(`${storeE}`) ^ verticalX, 2);
         break;
      }
      for (let j = 0; j < 1; j++) {
          let buttonj = String.fromCharCode(116,117,110,110,101,108,105,110,103,95,122,95,52,55,0);
         teamD = storeE == 99.6 || 47 == questz.size;
         buttonj += `${buttonj.length}`;
      }
          let feedbacka = String.fromCharCode(119,95,53,51,95,114,101,102,101,114,114,101,114,0);
         carouselQ += ((weiboS ? 5 : 4) << (Math.min(Math.abs(parseInt(`${storeE}`)), 3)));
         feedbacka = `${feedbacka.length}`;
          let play6 = 1;
          let combineN = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,105,110,103,95,57,95,56,55,0),62], [String.fromCharCode(118,116,101,110,99,95,118,95,51,48,0),954], [String.fromCharCode(115,110,97,112,112,121,95,115,95,51,56,0),361]]);
         carouselQ += parseInt(`${filedP}`) * 3;
         play6 >>= Math.min(Math.abs(play6), 5);
         combineN[`${play6}`] = play6 * combineN.size;
      thumbnailG *= description_8B - shoota.length;
      break;
   }
      stepL += `${blackR.length / (Math.max(mutedz.length, 5))}`;
       let guidea = true;
       let predictionW = [339, 295, 237];
       let robotof = String.fromCharCode(105,115,112,111,115,97,98,108,101,95,100,95,55,0);
       let interstitialJ = 2.0;
       let referrer6 = 4.0;
          let networkg = 1.0;
         referrer6 *= predictionW.length;
         networkg += parseInt(`${networkg}`) << (Math.min(4, Math.abs(1)));
          let small8 = new Map([[String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,95,54,95,51,0),447], [String.fromCharCode(106,95,51,48,95,97,117,100,105,111,112,114,111,99,0),474]]);
         robotof += `${parseInt(`${referrer6}`) * 3}`;
         small8[`${small8.size}`] = small8.size ^ small8.size;
      do {
         guidea = 74.80 >= interstitialJ;
         if (guidea ? !guidea : guidea) {
            break;
         }
      } while ((guidea ? !guidea : guidea) && (guidea || robotof.length > 5));
       let ajaxR = String.fromCharCode(113,95,53,52,95,115,117,112,101,114,103,114,111,117,112,0);
      for (let g = 0; g < 1; g++) {
         interstitialJ -= (robotof == String.fromCharCode(54,0) ? robotof.length : parseInt(`${interstitialJ}`));
      }
         predictionW.push(((guidea ? 2 : 2) + predictionW.length));
      for (let y = 0; y < 3; y++) {
          let previewy = new Map([[String.fromCharCode(115,95,57,49,95,97,108,108,111,99,97,116,111,114,0),667], [String.fromCharCode(99,95,53,51,95,117,110,100,111,116,116,101,100,0),108], [String.fromCharCode(112,95,54,52,95,108,111,103,105,99,0),772]]);
         interstitialJ -= robotof.length & 2;
         previewy[`${previewy.size}`] = previewy.size ^ previewy.size;
      }
      while (guidea || 2 > robotof.length) {
          let reminderh = [449, 502];
          let auto_baV = String.fromCharCode(117,95,56,57,95,105,110,116,101,114,115,112,101,114,115,101,0);
          let a_titleo = new Map([[String.fromCharCode(99,111,112,121,99,111,111,107,101,114,95,106,95,54,50,0),false ], [String.fromCharCode(114,95,55,53,95,109,117,108,116,105,108,105,110,101,0),true ], [String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,57,95,54,53,0),true ]]);
          let const_nq = [383, 196];
          let selects = String.fromCharCode(97,99,107,101,100,95,111,95,50,56,0);
         robotof = `${((guidea ? 5 : 3))}`;
         reminderh = [(auto_baV == String.fromCharCode(79,0) ? auto_baV.length : const_nq.length)];
         a_titleo[`${const_nq.length}`] = 1;
         selects += `${1 % (Math.max(9, selects.length))}`;
         break;
      }
      shoota = `${parseInt(`${chinaY}`)}`;
      shoota += `${2 % (Math.max(8, shoota.length))}`;
      mutedz = `${stepL.length}`;
   do {
      thumbnailG /= Math.max(mutedz.length, 2);
      if (2302020.0 == thumbnailG) {
         break;
      }
   } while ((2302020.0 == thumbnailG) && ((1.75 - thumbnailG) <= 3.39));
   do {
       let tickedI = 4;
         tickedI ^= tickedI;
      while ((4 & tickedI) > 1) {
         tickedI ^= tickedI + tickedI;
         break;
      }
      do {
          let membershipr = new Map([[String.fromCharCode(114,95,50,56,95,114,101,115,117,108,117,116,105,111,110,0),String.fromCharCode(101,120,112,111,114,116,101,100,95,101,95,50,48,0)], [String.fromCharCode(114,95,50,49,95,110,97,116,105,111,110,97,108,0),String.fromCharCode(97,99,118,112,95,109,95,52,52,0)]]);
          let sentryc = 5.0;
          let sansO = false;
         tickedI += 2;
         membershipr = new Map([[`${membershipr.size}`, 3 | membershipr.size]]);
         sentryc /= Math.max(3, parseInt(`${sentryc}`) + 2);
         sansO = 16.80 < sentryc;
         if (tickedI == 3589926) {
            break;
         }
      } while ((1 >= (2 << (Math.min(3, Math.abs(tickedI)))) || 5 >= (2 << (Math.min(3, Math.abs(tickedI))))) && (tickedI == 3589926));
      mutedz = `${parseInt(`${chinaY}`) * 2}`;
      if (mutedz.length == 1352565) {
         break;
      }
   } while ((mutedz.length == 1352565) && (shoota != String.fromCharCode(105,0)));
   while (!blackR.includes(thumbnailG)) {
      thumbnailG *= networkV.length << (Math.min(Math.abs(2), 4));
      break;
   }
      blackR = [userN.size];
      mutedz = `${parseInt(`${thumbnailG}`) ^ stepL.length}`;
   while (2.77 == (thumbnailG / (Math.max(networkV.length, 7))) || (thumbnailG / 2.77) == 4.85) {
       let bodans = new Map([[String.fromCharCode(113,95,53,49,95,99,111,110,99,97,116,101,110,97,116,101,0),String.fromCharCode(100,95,50,50,95,98,97,116,99,104,0)], [String.fromCharCode(105,95,51,95,109,117,108,116,105,112,108,101,114,0),String.fromCharCode(103,95,53,48,95,102,105,110,100,97,115,115,111,99,0)]]);
      do {
         bodans = new Map([[`${bodans.size}`, bodans.size / 3]]);
         if (3641411 == bodans.size) {
            break;
         }
      } while ((3641411 == bodans.size) && ((bodans.size + bodans.size) >= 5 || (5 + bodans.size) >= 1));
         bodans = new Map([[`${bodans.size}`, bodans.size - 1]]);
      do {
          let goalp = String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,116,95,55,51,0);
          let styleZ = String.fromCharCode(106,95,52,54,95,117,110,99,104,97,110,103,101,100,0);
          let commentY = false;
          let unreadL = new Map([[String.fromCharCode(115,95,52,95,97,114,99,104,105,118,101,0),890], [String.fromCharCode(104,95,50,52,95,122,111,109,98,105,101,0),317]]);
         bodans[`${goalp}`] = 2;
         goalp = `${((commentY ? 2 : 3) % (Math.max(6, styleZ.length)))}`;
         styleZ = `${styleZ.length}`;
         unreadL = new Map([[`${unreadL.size}`, unreadL.size]]);
         if (bodans.size == 1918449) {
            break;
         }
      } while ((bodans.size == 1918449) && (3 < (bodans.size * 1) || (bodans.size * bodans.size) < 1));
      networkV += `${userN.size}`;
      break;
   }
   for (let r = 0; r < 3; r++) {
       let leagueO = String.fromCharCode(108,117,109,105,110,97,110,99,101,95,111,95,54,54,0);
       let tickedb = 3;
       let watchJ = String.fromCharCode(99,95,54,51,95,99,97,110,0);
       let nterstitialT = 1;
       let change_ = 0;
      while (2 >= (nterstitialT + 4) && (nterstitialT + 4) >= 4) {
          let empty_ = String.fromCharCode(101,120,99,105,116,97,116,105,111,110,95,114,95,50,49,0);
         watchJ += `${(String.fromCharCode(87,0) == watchJ ? watchJ.length : nterstitialT)}`;
         empty_ += `${empty_.length | 2}`;
         break;
      }
      do {
          let referrer1 = String.fromCharCode(114,110,103,115,95,122,95,55,49,0);
          let screenT = String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,105,95,53,56,0);
          let agreementK = String.fromCharCode(116,105,109,101,95,119,95,53,53,0);
         change_ |= leagueO.length % (Math.max(3, 7));
         referrer1 = `${referrer1.length}`;
         screenT += `${agreementK.length + screenT.length}`;
         agreementK = `${screenT.length}`;
         if (change_ == 3638997) {
            break;
         }
      } while ((3 >= (4 ^ change_) || 4 >= (nterstitialT ^ change_)) && (change_ == 3638997));
          let progressL = 4.0;
          let shrinkg = 2.0;
         change_ |= 3;
         progressL /= Math.max(parseInt(`${shrinkg}`), 3);
         leagueO = `${2 & change_}`;
      do {
         nterstitialT /= Math.max(change_, 3);
         if (2775853 == nterstitialT) {
            break;
         }
      } while ((2775853 == nterstitialT) && (3 == (1 << (Math.min(5, Math.abs(nterstitialT)))) && (nterstitialT << (Math.min(Math.abs(1), 4))) == 5));
      if (2 < (leagueO.length ^ change_)) {
         change_ >>= Math.min(Math.abs(leagueO.length + change_), 2);
      }
      while (5 < (1 / (Math.max(9, nterstitialT)))) {
          let network6 = String.fromCharCode(97,110,105,109,97,116,101,95,57,95,57,48,0);
          let feedbackC = 1.0;
          let backgrounde = String.fromCharCode(112,105,99,107,105,110,103,95,104,95,55,57,0);
          let collectionw = [524, 880];
         nterstitialT |= (backgrounde == String.fromCharCode(99,0) ? backgrounde.length : collectionw.length);
         network6 += "2";
         feedbackC += 2;
         collectionw = [parseInt(`${feedbackC}`) | 1];
         break;
      }
      for (let l = 0; l < 2; l++) {
          let countryM = true;
          let dataN = [966, 563, 402];
          let promotionw = String.fromCharCode(99,111,109,112,97,114,101,114,115,95,107,95,49,48,48,0);
          let refreshL = 3;
          let forwardv = String.fromCharCode(103,114,105,100,95,54,95,55,51,0);
         watchJ += `${tickedb}`;
         countryM = (refreshL % (Math.max(dataN.length, 2))) > 38;
         dataN = [(refreshL % (Math.max(2, (countryM ? 2 : 1))))];
         promotionw = `${((countryM ? 4 : 1) >> (Math.min(Math.abs(2), 3)))}`;
         forwardv = `${promotionw.length << (Math.min(Math.abs(3), 5))}`;
      }
      description_8B *= leagueO.length;
   }

    return (Number(data1) / (Number(data1) + Number(data2))) * 100;
       let buttona = 4.0;
       let spinnerw = true;
          let componentC = String.fromCharCode(97,108,101,114,116,95,103,95,52,55,0);
          let pingx = 2.0;
         spinnerw = pingx <= 35.38;
         componentC += `${componentC.length}`;
         pingx *= parseFloat(`${componentC.length % 2}`);
         buttona += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${buttona}`)), 3))}`);
       let customp = 3.0;
      if (5.6 < (customp - 5.30) && 5.30 < customp) {
         spinnerw = !spinnerw;
      }
      do {
         spinnerw = customp >= 78.26 || !spinnerw;
         if (spinnerw ? !spinnerw : spinnerw) {
            break;
         }
      } while ((spinnerw || (customp / 3.30) <= 3.40) && (spinnerw ? !spinnerw : spinnerw));
         customp /= Math.max((parseFloat(`${(spinnerw ? 3 : 5) << (Math.min(Math.abs(parseInt(`${customp}`)), 5))}`)), 4);
      networkV += `${3 / (Math.max(parseInt(`${thumbnailG}`), 6))}`;
      stepL = `${parseInt(`${thumbnailG}`) | 2}`;
   do {
      userN = new Map([[`${userN.size}`, userN.size >> (Math.min(5, Math.abs(description_8B)))]]);
      if (3033510 == userN.size) {
         break;
      }
   } while ((3033510 == userN.size) && (5.56 >= (thumbnailG * 3.1)));
   while (5 == (1 << (Math.min(2, mutedz.length)))) {
      blackR = [parseInt(`${thumbnailG}`) << (Math.min(3, Math.abs(2)))];
      break;
   }
      description_8B /= Math.max(description_8B, 2);
      stepL += `${description_8B}`;
      shoota += `${3 << (Math.min(Math.abs(parseInt(`${chinaY}`)), 5))}`;
      userN[`${thumbnailG}`] = (String.fromCharCode(109,0) == shoota ? parseInt(`${thumbnailG}`) : shoota.length);
      thumbnailG *= description_8B;
   if (chinaY > 2.2) {
      blackR.push(description_8B);
   }
   while (1 <= (4 | stepL.length) || (3.1 + chinaY) <= 2.18) {
      chinaY /= Math.max(description_8B, 2);
      break;
   }
   while (!networkV.endsWith(`${description_8B}`)) {
       let temperaturev = [3, 774];
       let bootsplashl = String.fromCharCode(99,95,49,48,48,95,115,101,110,100,101,114,0);
       let modalg = 0.0;
       let readl = String.fromCharCode(112,114,111,116,111,99,111,108,95,50,95,49,57,0);
       let anythinkY = String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,48,95,55,0);
      do {
         temperaturev.push(temperaturev.length * readl.length);
         if (temperaturev.length == 690508) {
            break;
         }
      } while ((temperaturev.length == 690508) && ((1 / (Math.max(9, bootsplashl.length))) <= 1));
         bootsplashl += `${parseInt(`${modalg}`)}`;
          let default_wqI = 1.0;
          let basketball4 = true;
         anythinkY += `${(parseInt(`${default_wqI}`) & (basketball4 ? 4 : 3))}`;
       let typesm = String.fromCharCode(107,95,49,49,95,99,108,101,97,114,105,110,103,0);
      if ((temperaturev.length / (Math.max(1, 4))) >= 5 || (anythinkY.length / (Math.max(5, temperaturev.length))) >= 1) {
         temperaturev.push(1 | parseInt(`${modalg}`));
      }
          let agreementY = String.fromCharCode(102,95,52,50,95,102,116,115,105,115,115,112,97,99,101,0);
          let castR = String.fromCharCode(113,95,56,50,95,116,112,101,108,0);
          let reminderJ = 4.0;
         anythinkY += "1";
         agreementY = "3";
         castR += `${3 | castR.length}`;
         reminderJ *= parseInt(`${reminderJ}`) * 1;
         temperaturev = [1];
         typesm += `${3 & parseInt(`${modalg}`)}`;
       let indexY = new Map([[String.fromCharCode(118,109,97,116,114,105,120,95,56,95,57,48,0),true ], [String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,98,95,52,51,0),false ]]);
      if (typesm.startsWith(`${indexY.size}`)) {
         typesm = `${2 << (Math.min(1, temperaturev.length))}`;
      }
      do {
          let submit5 = String.fromCharCode(104,95,57,48,95,101,97,103,101,114,0);
          let sortL = String.fromCharCode(116,95,55,50,95,118,97,114,105,97,110,99,101,120,104,0);
          let termss = String.fromCharCode(100,95,56,52,95,102,101,97,116,117,114,101,115,0);
          let carousels = false;
          let referrer6o = 0;
         modalg *= submit5.length | termss.length;
         submit5 = `${sortL.length}`;
         sortL = `${referrer6o}`;
         termss = `${referrer6o}`;
         carousels = sortL.includes(`${referrer6o}`);
         if (modalg == 4628539.0) {
            break;
         }
      } while ((modalg == 4628539.0) && (4.15 == (readl.length * modalg) || 4 == (parseInt(`${modalg}`) * 3)));
      description_8B /= Math.max(4, shoota.length);
      break;
   }
       let searchbarw = new Map([[String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,116,95,52,49,0),String.fromCharCode(120,95,50,55,95,98,117,108,108,101,116,0)], [String.fromCharCode(99,111,112,121,95,51,95,50,52,0),String.fromCharCode(116,106,117,116,105,108,95,56,95,54,54,0)]]);
       let download1 = 5.0;
       let calendarT = true;
      for (let n = 0; n < 1; n++) {
         searchbarw = new Map([[`${download1}`, (parseInt(`${download1}`) | (calendarT ? 5 : 1))]]);
      }
         download1 *= (parseFloat(`${parseInt(`${download1}`) | (calendarT ? 3 : 4)}`));
         searchbarw = new Map([[`${searchbarw.size}`, parseInt(`${download1}`) & 1]]);
      for (let l = 0; l < 2; l++) {
         download1 += parseFloat(`${parseInt(`${download1}`) | 1}`);
      }
         calendarT = null != searchbarw[`${download1}`];
      for (let f = 0; f < 1; f++) {
         searchbarw[`${download1}`] = 1 - searchbarw.size;
      }
         download1 += parseFloat(`${3}`);
      for (let f = 0; f < 2; f++) {
         calendarT = 29.86 > download1 && calendarT;
      }
      if (calendarT) {
         calendarT = download1 >= 8.53 || calendarT;
      }
      chinaY += parseInt(`${thumbnailG}`) | blackR.length;
   for (let w = 0; w < 1; w++) {
      userN[`${mutedz}`] = 2 & mutedz.length;
   }
       let photoQ = new Map([[String.fromCharCode(110,95,49,54,95,116,114,97,110,115,108,97,116,101,0),String.fromCharCode(109,101,109,117,116,105,108,95,121,95,56,51,0)], [String.fromCharCode(109,107,118,119,114,105,116,101,114,95,109,95,51,50,0),String.fromCharCode(97,110,110,101,120,95,106,95,54,48,0)], [String.fromCharCode(114,95,53,56,95,105,110,115,101,114,116,101,100,0),String.fromCharCode(115,95,51,48,95,98,97,115,101,112,111,105,110,116,0)]]);
       let downloadb = 4;
      do {
         photoQ[`${downloadb}`] = 2;
         if (photoQ.size == 919056) {
            break;
         }
      } while ((photoQ.size == 919056) && ((photoQ.size % 4) <= 1 && 5 <= (downloadb % 4)));
      if ((downloadb + 4) == 2) {
         photoQ = new Map([[`${photoQ.size}`, photoQ.size]]);
      }
      for (let j = 0; j < 2; j++) {
          let reportJ = true;
         downloadb |= ((reportJ ? 4 : 2) - 1);
      }
         photoQ = new Map([[`${photoQ.size}`, photoQ.size >> (Math.min(1, Math.abs(downloadb)))]]);
      if ((downloadb - photoQ.size) > 1 && 1 > (downloadb - photoQ.size)) {
          let popups = String.fromCharCode(120,95,52,53,95,101,110,100,97,0);
          let recommendation7 = [255, 751, 38];
          let brightnessx = [930, 125, 92];
          let dialog3 = 1;
          let whistle_ = 5;
         downloadb |= recommendation7.length / (Math.max(3, popups.length));
         popups = "2";
         recommendation7.push(2);
         brightnessx.push(brightnessx.length / (Math.max(8, dialog3)));
         dialog3 *= brightnessx.length;
         whistle_ &= dialog3 - 3;
      }
      for (let u = 0; u < 2; u++) {
          let country8 = true;
          let temperature3 = 2.0;
          let philippinesu = String.fromCharCode(107,101,121,100,105,114,95,112,95,52,54,0);
          let leftR = new Map([[String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,99,95,50,56,0),true ], [String.fromCharCode(103,95,54,53,95,105,115,114,101,97,100,111,110,108,121,0),false ]]);
          let schedulec = false;
         downloadb >>= Math.min(2, Math.abs(downloadb));
         country8 = schedulec;
         temperature3 *= (parseFloat(`${(country8 ? 3 : 5) / 2}`));
         philippinesu = `${philippinesu.length}`;
         leftR[`${country8}`] = 1;
      }
      userN[`${description_8B}`] = description_8B | 3;

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
