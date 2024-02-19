import {View, Text, Image, ImageBackground} from 'react-native';
import {AwayIcon, HomeIcon} from '../../../../../assets';
import styles from './yys_nbatrophy';

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
       let infot = 0.0;
    let footballp = String.fromCharCode(112,114,105,110,116,111,117,116,95,103,95,51,50,0);
    let toponB = 1;
    let logoutH = String.fromCharCode(99,111,110,115,116,113,112,95,105,95,56,55,0);
    let updatesi = [587, 512, 732];
    let mimeL = String.fromCharCode(104,95,55,51,95,97,99,99,101,115,115,105,110,103,0);
    let assists = [82, 429];
    let backgroundu = [String.fromCharCode(121,95,56,51,95,111,114,112,104,97,110,0), String.fromCharCode(115,104,111,114,116,95,106,95,54,49,0)];
    let awayiconB = new Map([[String.fromCharCode(114,95,54,51,95,101,120,112,114,101,115,115,105,111,110,0),String.fromCharCode(118,105,115,98,108,101,95,110,95,54,53,0)], [String.fromCharCode(112,97,99,107,101,116,115,95,104,95,50,56,0),String.fromCharCode(111,95,51,53,95,97,103,103,114,101,103,97,116,111,114,0)], [String.fromCharCode(113,95,52,56,95,119,101,101,107,100,97,121,0),String.fromCharCode(99,95,54,56,95,112,117,98,108,105,115,104,101,114,0)]]);
    let time_r2 = String.fromCharCode(105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,95,106,95,49,48,48,0);
    let tooltips2 = true;
    let umengs = 0.0;
    let homeactiveb = [String.fromCharCode(99,95,51,48,95,99,111,97,114,115,101,0), String.fromCharCode(114,95,51,55,95,99,111,110,115,116,114,117,99,116,111,114,0), String.fromCharCode(122,95,49,56,95,110,101,119,116,101,107,0)];
    let modulesY = [531, 784];
       let imagenomoredataE = String.fromCharCode(105,95,50,95,112,111,108,121,0);
       let basketballplayerplaceholdery = 4.0;
          let whitebellZ = String.fromCharCode(97,101,115,116,97,98,95,112,95,50,50,0);
          let iconsettingP = String.fromCharCode(112,97,114,109,115,95,122,95,54,55,0);
          let episodesG = 4.0;
         imagenomoredataE += "3";
         whitebellZ = `${(String.fromCharCode(86,0) == whitebellZ ? iconsettingP.length : whitebellZ.length)}`;
         iconsettingP += `${(iconsettingP == String.fromCharCode(82,0) ? iconsettingP.length : parseInt(`${episodesG}`))}`;
         episodesG += parseFloat(`${parseInt(`${episodesG}`)}`);
      if (2.69 == basketballplayerplaceholdery) {
          let positionfieldA = String.fromCharCode(99,95,48,95,106,111,98,115,0);
         imagenomoredataE = `${(imagenomoredataE == String.fromCharCode(115,0) ? parseInt(`${basketballplayerplaceholdery}`) : imagenomoredataE.length)}`;
         positionfieldA += `${positionfieldA.length - positionfieldA.length}`;
      }
      while (imagenomoredataE.startsWith(`${basketballplayerplaceholdery}`)) {
         basketballplayerplaceholdery *= parseFloat(`${1}`);
         break;
      }
      for (let s = 0; s < 3; s++) {
          let iconschedulex = String.fromCharCode(99,95,51,54,95,102,105,110,100,0);
          let update_go = String.fromCharCode(112,114,101,115,99,97,108,101,95,114,95,55,0);
         imagenomoredataE = `${iconschedulex.length << (Math.min(update_go.length, 1))}`;
      }
      do {
          let register_lh0 = String.fromCharCode(116,104,114,101,97,100,101,100,95,49,95,53,52,0);
          let basketballtrophyl = 4.0;
          let halfB = true;
         basketballplayerplaceholdery -= parseFloat(`${1 - parseInt(`${basketballplayerplaceholdery}`)}`);
         register_lh0 = `${((halfB ? 1 : 4) + register_lh0.length)}`;
         basketballtrophyl -= parseFloat(`${parseInt(`${basketballtrophyl}`) ^ 3}`);
         halfB = !register_lh0.startsWith(`${basketballtrophyl}`);
         if (583687.0 == basketballplayerplaceholdery) {
            break;
         }
      } while ((583687.0 == basketballplayerplaceholdery) && ((parseFloat(`${imagenomoredataE.length}`) / (Math.max(4, basketballplayerplaceholdery))) < 1.29 || 4 < (imagenomoredataE.length % (Math.max(4, 10)))));
      for (let o = 0; o < 2; o++) {
         imagenomoredataE += `${imagenomoredataE.length % (Math.max(8, parseInt(`${basketballplayerplaceholdery}`)))}`;
      }
      toponB += awayiconB.size & 2;
   for (let b = 0; b < 3; b++) {
       let whitebellw = String.fromCharCode(122,95,53,57,95,108,97,116,101,0);
       let volumed = 4.0;
          let basketballmatchdetailbgQ = 2.0;
         volumed -= (whitebellw == String.fromCharCode(100,0) ? whitebellw.length : parseInt(`${volumed}`));
         basketballmatchdetailbgQ -= parseInt(`${basketballmatchdetailbgQ}`) * parseInt(`${basketballmatchdetailbgQ}`);
          let volumeK = String.fromCharCode(110,95,51,53,95,98,121,116,101,105,110,0);
         volumed *= parseInt(`${volumed}`) / (Math.max(volumeK.length, 6));
          let linkx = 2;
          let listh = 5;
          let clockk = String.fromCharCode(120,95,52,56,95,99,117,116,111,117,116,0);
         volumed -= 3 << (Math.min(Math.abs(linkx), 3));
         linkx -= listh;
         listh &= 1 << (Math.min(5, Math.abs(listh)));
         clockk += `${2 - listh}`;
       let predictionbannerd = String.fromCharCode(116,114,97,110,115,113,117,97,110,116,95,53,95,49,56,0);
      while ((2 << (Math.min(5, predictionbannerd.length))) > 1 || 2 > (parseInt(`${volumed}`) + predictionbannerd.length)) {
         predictionbannerd = `${(whitebellw == String.fromCharCode(67,0) ? parseInt(`${volumed}`) : whitebellw.length)}`;
         break;
      }
      do {
         volumed *= predictionbannerd.length ^ 1;
         if (volumed == 99198.0) {
            break;
         }
      } while ((5.77 > volumed) && (volumed == 99198.0));
      backgroundu = [parseInt(`${volumed}`) * 3];
   }
      time_r2 = `${logoutH.length >> (Math.min(Math.abs(2), 5))}`;
      mimeL += `${time_r2.length ^ logoutH.length}`;
   if (4 >= mimeL.length) {
      toponB >>= Math.min(Math.abs(awayiconB.size % (Math.max(logoutH.length, 6))), 3);
   }
   if ((parseInt(`${infot}`) - awayiconB.size) == 1 || 1 == (parseInt(`${infot}`) - awayiconB.size)) {
      awayiconB = new Map([[`${infot}`, 1 | parseInt(`${infot}`)]]);
   }
      infot += parseFloat(`${assists.length}`);
      infot += parseFloat(`${updatesi.length | 2}`);
   while (2 >= (2 << (Math.min(1, logoutH.length))) || 1 >= (2 << (Math.min(3, logoutH.length)))) {
       let selectionq = String.fromCharCode(99,95,54,57,95,99,97,108,108,108,0);
       let videobufferloadingf = 3.0;
       let mountingS = String.fromCharCode(110,95,55,50,95,116,97,98,108,101,103,101,110,0);
       let movies3 = 5.0;
         mountingS = `${selectionq.length}`;
         mountingS += `${parseInt(`${movies3}`)}`;
         movies3 += parseFloat(`${parseInt(`${videobufferloadingf}`) % (Math.max(5, parseInt(`${movies3}`)))}`);
      if ((parseFloat(`${mountingS.length}`) - movies3) == 3.15) {
         mountingS += `${(mountingS == String.fromCharCode(75,0) ? mountingS.length : parseInt(`${movies3}`))}`;
      }
      do {
          let statisticsinactiveV = [861, 800];
          let google6 = String.fromCharCode(114,95,49,50,95,109,97,116,99,104,101,0);
         mountingS += "1";
         statisticsinactiveV.push(1);
         google6 += `${(String.fromCharCode(84,0) == google6 ? statisticsinactiveV.length : google6.length)}`;
         if (2112531 == mountingS.length) {
            break;
         }
      } while ((2112531 == mountingS.length) && (mountingS.includes(`${selectionq.length}`)));
         videobufferloadingf -= selectionq.length >> (Math.min(Math.abs(1), 1));
         videobufferloadingf /= Math.max(1, 5);
         selectionq += `${1 << (Math.min(2, selectionq.length))}`;
      while (videobufferloadingf <= 5.60) {
         movies3 /= Math.max(parseFloat(`${mountingS.length * selectionq.length}`), 1);
         break;
      }
         videobufferloadingf /= Math.max(5, parseInt(`${movies3}`) - 2);
      do {
         selectionq += `${parseInt(`${videobufferloadingf}`)}`;
         if (String.fromCharCode(112,117,49,110,0) == selectionq) {
            break;
         }
      } while ((String.fromCharCode(112,117,49,110,0) == selectionq) && (1 <= (selectionq.length - parseInt(`${movies3}`)) && 2.94 <= (3.7 - movies3)));
      if ((videobufferloadingf - 3.28) >= 5.93 && 1 >= (3 >> (Math.min(3, selectionq.length)))) {
         videobufferloadingf *= parseInt(`${movies3}`);
      }
      logoutH = `${(String.fromCharCode(77,0) == mimeL ? parseInt(`${movies3}`) : mimeL.length)}`;
      break;
   }
      backgroundu.push(backgroundu.length + parseInt(`${infot}`));
      toponB |= assists.length >> (Math.min(Math.abs(1), 1));
      updatesi.push(mimeL.length);
      updatesi = [(time_r2 == String.fromCharCode(72,0) ? footballp.length : time_r2.length)];
   for (let d = 0; d < 3; d++) {
      time_r2 = `${awayiconB.size}`;
   }
      mimeL = `${assists.length + awayiconB.size}`;

    return (Number(data1) / (Number(data1) + Number(data2))) * 100;
   for (let k = 0; k < 1; k++) {
      updatesi.push(footballp.length);
   }
   if ((1 ^ updatesi.length) > 5 || (updatesi.length ^ awayiconB.size) > 1) {
       let mailg = 4;
      for (let s = 0; s < 1; s++) {
         mailg ^= mailg & mailg;
      }
          let renderp = String.fromCharCode(122,95,54,56,95,99,117,114,114,114,101,110,116,0);
          let y_hashr = 1.0;
          let telemetryd = String.fromCharCode(121,95,55,53,95,115,113,108,105,116,101,114,98,117,0);
         mailg |= telemetryd.length + 2;
         renderp += `${parseInt(`${y_hashr}`) / (Math.max(renderp.length, 9))}`;
         y_hashr += renderp.length | 1;
         telemetryd += `${parseInt(`${y_hashr}`) - renderp.length}`;
      if (mailg == mailg) {
         mailg >>= Math.min(1, Math.abs(mailg));
      }
      updatesi = [mimeL.length];
   }
      updatesi.push(1);
       let agreementS = 0.0;
       let goallogoA = 5.0;
       let temperatureZ = 2.0;
      while ((agreementS - 4.41) < 2.32 && (4.41 - goallogoA) < 3.6) {
          let line4 = [String.fromCharCode(111,98,109,99,95,108,95,53,49,0), String.fromCharCode(114,95,54,56,95,100,99,111,110,108,121,0), String.fromCharCode(110,98,105,111,95,114,95,53,0)];
          let styleX = 1.0;
          let scorepopsoundU = String.fromCharCode(109,117,108,116,105,115,116,101,112,95,118,95,54,51,0);
         agreementS *= parseInt(`${temperatureZ}`) * scorepopsoundU.length;
         line4.push(parseInt(`${styleX}`));
         styleX *= parseInt(`${styleX}`) / (Math.max(line4.length, 6));
         scorepopsoundU = `${parseInt(`${styleX}`)}`;
         break;
      }
      if (1.74 > (3.96 + agreementS) || (goallogoA + 3.96) > 5.28) {
         agreementS += parseInt(`${temperatureZ}`);
      }
         goallogoA *= parseFloat(`${parseInt(`${goallogoA}`) - 3}`);
      do {
         temperatureZ /= Math.max(2, parseInt(`${agreementS}`) >> (Math.min(2, Math.abs(parseInt(`${temperatureZ}`)))));
         if (temperatureZ == 967079.0) {
            break;
         }
      } while ((temperatureZ == 967079.0) && ((temperatureZ * 1.69) <= 1.79 && 4.85 <= (1.69 + goallogoA)));
       let libreactnativejniV = String.fromCharCode(98,108,117,101,95,117,95,51,56,0);
       let placement6 = String.fromCharCode(110,95,57,57,95,115,104,111,114,116,99,117,116,115,0);
      while (1 == (libreactnativejniV.length - 4) && (libreactnativejniV.length | 4) == 4) {
         temperatureZ /= Math.max(4, 1);
         break;
      }
      do {
         libreactnativejniV = `${libreactnativejniV.length ^ 1}`;
         if (libreactnativejniV == String.fromCharCode(49,49,100,55,55,119,48,0)) {
            break;
         }
      } while ((libreactnativejniV.startsWith(`${goallogoA}`)) && (libreactnativejniV == String.fromCharCode(49,49,100,55,55,119,48,0)));
         placement6 += `${(String.fromCharCode(79,0) == placement6 ? placement6.length : parseInt(`${temperatureZ}`))}`;
          let libturbomodulejsijni3 = String.fromCharCode(115,111,110,111,95,106,95,50,50,0);
          let libavformat0 = 0.0;
          let telemetryT = String.fromCharCode(114,95,52,50,95,100,114,111,112,120,0);
         goallogoA *= parseFloat(`${placement6.length * 1}`);
         libturbomodulejsijni3 = `${telemetryT.length + 1}`;
         libavformat0 += telemetryT.length % 3;
      backgroundu.push(parseInt(`${goallogoA}`) | parseInt(`${umengs}`));
      mimeL += "1";
      umengs += assists.length % (Math.max(footballp.length, 10));
       let acceptedJ = [572, 380];
       let huaweik = [270, 325, 658];
         acceptedJ.push(acceptedJ.length * huaweik.length);
      if ((huaweik.length + 4) > 2 && 1 > (4 + acceptedJ.length)) {
          let positionfieldH = String.fromCharCode(112,114,101,100,105,99,116,120,95,108,95,52,57,0);
          let large_ = [491, 645];
          let greytickg = [324, 343];
          let textV = new Map([[String.fromCharCode(99,111,109,112,111,115,105,116,105,111,110,95,107,95,49,54,0),String.fromCharCode(114,101,110,100,101,114,97,98,108,101,95,106,95,56,50,0)], [String.fromCharCode(97,95,52,49,95,99,107,112,116,0),String.fromCharCode(101,109,101,114,103,101,110,99,121,95,100,95,54,52,0)]]);
         acceptedJ = [acceptedJ.length];
         positionfieldH += `${greytickg.length}`;
         large_ = [positionfieldH.length + textV.size];
         greytickg = [greytickg.length ^ textV.size];
      }
         huaweik.push(3);
       let unimplementedviewV = 2.0;
          let leakcheckerG = [405, 918, 233];
         huaweik = [acceptedJ.length];
         leakcheckerG.push(leakcheckerG.length % (Math.max(1, 4)));
      for (let y = 0; y < 1; y++) {
         huaweik.push(parseInt(`${unimplementedviewV}`) ^ huaweik.length);
      }
      umengs += parseInt(`${infot}`) * 1;
       let placeholder6 = new Map([[String.fromCharCode(116,97,112,115,95,99,95,57,49,0),52], [String.fromCharCode(97,95,54,95,116,111,112,0),97]]);
          let malaysiac = true;
          let notificationR = String.fromCharCode(107,95,51,54,95,105,110,100,101,120,101,115,0);
          let imageactionliveS = String.fromCharCode(119,95,49,50,95,100,117,109,112,112,97,99,107,101,116,0);
         placeholder6[notificationR] = imageactionliveS.length;
         malaysiac = !malaysiac;
         notificationR = `${((malaysiac ? 4 : 4))}`;
         placeholder6[`${placeholder6.size}`] = placeholder6.size ^ placeholder6.size;
      do {
         placeholder6 = new Map([[`${placeholder6.size}`, placeholder6.size ^ 1]]);
         if (2761528 == placeholder6.size) {
            break;
         }
      } while ((Array.from(placeholder6.keys()).includes(`${placeholder6.size}`)) && (2761528 == placeholder6.size));
      time_r2 += `${3 % (Math.max(10, backgroundu.length))}`;
   if (3 == (assists.length << (Math.min(time_r2.length, 4))) && 3 == (time_r2.length << (Math.min(Math.abs(3), 1)))) {
       let iconclosewhitex = 3.0;
       let middleB = String.fromCharCode(101,95,52,48,95,115,101,99,111,110,100,112,97,115,115,0);
       let sellmathbackgroundi = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,95,116,95,55,51,0);
       let libcxxcomponentsx = [893, 428];
      while (sellmathbackgroundi.startsWith(middleB)) {
          let description_cK = 4;
          let popupC = 4;
          let dicelogo0 = new Map([[String.fromCharCode(114,95,57,95,102,105,108,101,104,101,97,100,101,114,0),511], [String.fromCharCode(115,101,99,111,110,100,115,95,100,95,57,52,0),987]]);
          let iconrefreshG = String.fromCharCode(115,112,105,108,108,95,102,95,51,52,0);
          let awayiconH = true;
         sellmathbackgroundi = `${libcxxcomponentsx.length | 1}`;
         description_cK += dicelogo0.size;
         popupC ^= ((awayiconH ? 4 : 1) / (Math.max(dicelogo0.size, 6)));
         iconrefreshG = `${popupC}`;
         awayiconH = popupC >= dicelogo0.size;
         break;
      }
         sellmathbackgroundi += `${1 << (Math.min(1, Math.abs(parseInt(`${iconclosewhitex}`))))}`;
       let greytickc = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,115,95,55,52,0);
          let black_ = String.fromCharCode(110,95,57,50,0);
          let stationA = new Map([[String.fromCharCode(99,111,110,116,111,117,114,115,95,115,95,55,56,0),String.fromCharCode(112,114,101,115,101,110,99,101,95,99,95,56,0)], [String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,53,95,55,48,0),String.fromCharCode(118,95,51,49,95,111,109,109,111,110,0)]]);
         libcxxcomponentsx.push(middleB.length);
         black_ += "1";
         stationA[black_] = black_.length << (Math.min(Math.abs(2), 3));
      while ((parseFloat(`${middleB.length}`) * iconclosewhitex) <= 1.3 && 1.3 <= (iconclosewhitex * parseFloat(`${middleB.length}`))) {
         middleB += "2";
         break;
      }
         middleB += `${libcxxcomponentsx.length / (Math.max(1, middleB.length))}`;
          let bgvipsportw = 5;
          let statistics0 = new Map([[String.fromCharCode(109,105,115,117,115,101,95,102,95,57,55,0),String.fromCharCode(99,97,100,101,110,99,101,95,104,95,54,49,0)], [String.fromCharCode(103,101,110,101,114,97,116,101,95,57,95,52,57,0),String.fromCharCode(112,114,101,118,101,110,116,95,102,95,51,49,0)]]);
          let middlebrightnessB = 5.0;
         greytickc = "1";
         bgvipsportw /= Math.max(5, bgvipsportw);
         statistics0[`${middlebrightnessB}`] = parseInt(`${middlebrightnessB}`) ^ 3;
      do {
         sellmathbackgroundi += `${middleB.length + 2}`;
         if (String.fromCharCode(102,101,120,99,95,104,54,54,0) == sellmathbackgroundi) {
            break;
         }
      } while ((String.fromCharCode(102,101,120,99,95,104,54,54,0) == sellmathbackgroundi) && (4 <= greytickc.length));
      if ((5 << (Math.min(3, libcxxcomponentsx.length))) > 5) {
          let trashF = true;
          let twitterA = 5;
          let awayplayern = 1.0;
         greytickc += "3";
         trashF = 51.15 < awayplayern || trashF;
         twitterA <<= Math.min(5, Math.abs(1));
         awayplayern -= (parseFloat(`${(trashF ? 4 : 3) + parseInt(`${awayplayern}`)}`));
      }
      do {
         libcxxcomponentsx.push(middleB.length >> (Math.min(2, Math.abs(parseInt(`${iconclosewhitex}`)))));
         if (libcxxcomponentsx.length == 4902895) {
            break;
         }
      } while ((1 < (3 << (Math.min(2, middleB.length))) && 3 < (libcxxcomponentsx.length << (Math.min(Math.abs(3), 2)))) && (libcxxcomponentsx.length == 4902895));
          let matchinactivee = String.fromCharCode(110,95,51,54,95,104,97,110,110,105,110,103,0);
         libcxxcomponentsx.push(greytickc.length);
         matchinactivee += `${matchinactivee.length}`;
          let lessq = String.fromCharCode(111,114,100,101,114,115,95,57,95,50,49,0);
          let dycreatorQ = String.fromCharCode(100,114,105,118,101,95,110,95,53,54,0);
          let footballfield2 = new Map([[String.fromCharCode(112,95,49,95,112,111,108,108,105,110,103,0),240], [String.fromCharCode(117,95,52,54,95,109,105,115,117,115,101,0),501], [String.fromCharCode(118,112,109,116,95,112,95,52,57,0),425]]);
         libcxxcomponentsx = [lessq.length];
         lessq = `${dycreatorQ.length ^ 2}`;
         dycreatorQ += `${dycreatorQ.length << (Math.min(Math.abs(2), 5))}`;
         footballfield2[dycreatorQ] = dycreatorQ.length;
      assists.push(toponB << (Math.min(Math.abs(2), 1)));
   }
   if (mimeL.startsWith(`${updatesi.length}`)) {
      mimeL += `${(footballp == String.fromCharCode(87,0) ? parseInt(`${infot}`) : footballp.length)}`;
   }
      updatesi = [parseInt(`${infot}`)];
   if ((4 | backgroundu.length) >= 2 && 2.71 >= (backgroundu.length * umengs)) {
       let rocketk = new Map([[String.fromCharCode(114,95,50,50,95,111,114,105,101,110,116,97,116,105,111,110,115,0),false ], [String.fromCharCode(99,97,116,101,103,111,114,105,115,101,100,95,102,95,54,0),false ], [String.fromCharCode(101,95,49,56,95,112,117,116,115,0),true ]]);
       let activityG = 1.0;
       let penaltyshootnogoal8 = String.fromCharCode(120,95,57,51,95,97,119,97,121,0);
       let headerD = 2;
       let executorf = String.fromCharCode(112,101,99,101,110,116,95,52,95,57,49,0);
         executorf = `${rocketk.size | 3}`;
      while (4.45 <= (1.82 + activityG) || (activityG + headerD) <= 1.82) {
         headerD |= 3 % (Math.max(5, penaltyshootnogoal8.length));
         break;
      }
      if (4 >= executorf.length) {
         executorf = `${2 / (Math.max(parseInt(`${activityG}`), 10))}`;
      }
      while (penaltyshootnogoal8.length == 2) {
         penaltyshootnogoal8 = `${2 * parseInt(`${activityG}`)}`;
         break;
      }
       let zhubor = [629, 226, 863];
       let iconarrowrightblacki = [554, 774];
      do {
         penaltyshootnogoal8 = `${parseInt(`${activityG}`) << (Math.min(1, Math.abs(headerD)))}`;
         if (penaltyshootnogoal8.length == 1065351) {
            break;
         }
      } while ((penaltyshootnogoal8.length == 1065351) && (executorf != String.fromCharCode(104,0)));
         zhubor = [1];
      do {
         executorf = `${parseInt(`${activityG}`)}`;
         if (String.fromCharCode(99,102,98,118,0) == executorf) {
            break;
         }
      } while ((String.fromCharCode(99,102,98,118,0) == executorf) && ((executorf.length * 1) <= 5));
      do {
         zhubor.push((String.fromCharCode(114,0) == penaltyshootnogoal8 ? headerD : penaltyshootnogoal8.length));
         if (zhubor.length == 1188775) {
            break;
         }
      } while ((zhubor.length == 1188775) && (executorf.length < zhubor.length));
      do {
         rocketk = new Map([[`${iconarrowrightblacki.length}`, zhubor.length]]);
         if (rocketk.size == 2298377) {
            break;
         }
      } while ((rocketk.size == 2298377) && (1.33 == (activityG / (Math.max(rocketk.size, 6))) || 1.33 == (activityG / (Math.max(rocketk.size, 1)))));
      if (penaltyshootnogoal8.length <= 1) {
          let defaultlogoT = new Map([[String.fromCharCode(111,118,101,114,102,108,111,119,95,113,95,52,53,0),538], [String.fromCharCode(111,112,116,103,114,111,117,112,95,122,95,56,53,0),457], [String.fromCharCode(122,95,51,95,109,111,110,111,115,112,97,99,101,0),841]]);
          let ajax1 = 1.0;
          let loadingspinnerO = String.fromCharCode(114,100,98,120,95,118,95,49,48,48,0);
         penaltyshootnogoal8 = `${loadingspinnerO.length * 2}`;
         defaultlogoT[`${ajax1}`] = 3 | parseInt(`${ajax1}`);
         loadingspinnerO = `${defaultlogoT.size}`;
      }
      for (let u = 0; u < 1; u++) {
          let imagenomoredataR = new Map([[String.fromCharCode(98,95,52,57,95,117,116,105,108,115,0),23], [String.fromCharCode(109,111,110,107,101,121,95,56,95,49,49,0),385]]);
          let colorsE = false;
          let embedA = [320, 52, 178];
         iconarrowrightblacki.push(1);
         imagenomoredataR = new Map([[`${imagenomoredataR.size}`, 3]]);
         colorsE = (embedA.length * imagenomoredataR.size) > 75;
         embedA = [imagenomoredataR.size];
      }
       let libturbomodulejsijnib = String.fromCharCode(103,95,52,56,95,108,111,110,103,98,105,103,0);
       let routerO = String.fromCharCode(100,95,55,49,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0);
         iconarrowrightblacki = [2];
      if ((activityG / (Math.max(routerO.length, 1))) > 2.41) {
          let componentk = new Map([[String.fromCharCode(99,95,52,54,95,116,105,99,107,101,114,0),295], [String.fromCharCode(109,115,122,104,95,54,95,51,55,0),458], [String.fromCharCode(118,95,51,55,95,112,111,115,105,116,105,111,110,0),437]]);
          let libavformats = String.fromCharCode(121,95,55,95,100,101,99,111,100,101,102,0);
          let aream = new Map([[String.fromCharCode(105,110,116,101,114,99,101,112,116,95,51,95,55,0),282], [String.fromCharCode(97,103,101,110,116,115,95,116,95,51,53,0),828]]);
         routerO += `${3 << (Math.min(3, Math.abs(componentk.size)))}`;
         componentk[`${libavformats}`] = libavformats.length;
         aream = new Map([[`${aream.size}`, (String.fromCharCode(115,0) == libavformats ? libavformats.length : aream.size)]]);
      }
      umengs *= rocketk.size * backgroundu.length;
   }
   while (umengs < logoutH.length) {
      umengs *= toponB * assists.length;
      break;
   }
   for (let e = 0; e < 2; e++) {
      backgroundu = [3];
   }
   do {
      awayiconB[`${backgroundu.length}`] = backgroundu.length;
      if (948758 == awayiconB.size) {
         break;
      }
   } while ((3 <= (awayiconB.size << (Math.min(logoutH.length, 3)))) && (948758 == awayiconB.size));

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
