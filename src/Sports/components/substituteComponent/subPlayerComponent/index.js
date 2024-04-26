import {View, Image, Text, ImageBackground} from 'react-native';
import styles from './wawa_hiad_iconnewchat';
import {
  HomeIcon,
  SubIn,
  SubOut,
  Goal,
  OwnGoal,
  Assist,
  PenaltyGoal,
  RedCard,
  YellowCard,
  YellowToRedCard,
  InjuryIcon,
  HomePlayer,
  AwayPlayer,
} from '../../../assets';
import vars from '../../../utility/wawa_empty_active';

const SubPlayerComponent = ({isInjury = false, data, isHome = true}) => {
  let subInTime = 0;
  let subOutTime = 0;
  let goalCount = 0;
  let penaltyGoalCount = 0;
  let ownGoalCount = 0;
  let assistCount = 0;

  let checkSubIn = () => {
       let vietnamh = String.fromCharCode(106,95,54,56,95,104,118,99,99,0);
    let linkt = 0;
    let penaltygoalX = String.fromCharCode(112,111,116,105,115,105,111,110,95,57,95,53,53,0);
    let bootsplashO = String.fromCharCode(100,111,116,115,95,110,95,55,50,0);
    let ballS = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,117,95,52,0);
    let pingV = 3;
    let carouselw = 4;
    let penaltyshootnogoalf = new Map([[String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,122,95,55,48,0),196], [String.fromCharCode(97,105,102,102,95,118,95,53,56,0),573]]);
    let vertical7 = 5.0;
    let forward2 = 1;
    let forml = String.fromCharCode(120,95,53,95,98,117,102,102,101,114,115,114,99,0);
    let libflipperZ = 0.0;
    let iconcurrentmatchJ = new Map([[String.fromCharCode(116,95,55,57,95,117,110,97,114,99,104,105,118,101,0),145], [String.fromCharCode(116,101,120,105,112,111,100,95,56,95,55,0),116]]);
    let icon3 = 4.0;
    let largebrightnessl = 5.0;
    let robotot = true;
    let promotion5 = 2.0;
    let d_animation4 = String.fromCharCode(105,95,52,52,95,97,98,115,0);
       let typesr = String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,100,95,52,0);
       let sharemodalv = String.fromCharCode(100,117,112,101,100,95,104,95,53,51,0);
       let humidityd = 2.0;
          let libimagepipelineV = String.fromCharCode(116,101,115,118,101,114,116,95,98,95,57,51,0);
         typesr += `${typesr.length >> (Math.min(Math.abs(1), 1))}`;
         libimagepipelineV = `${libimagepipelineV.length << (Math.min(Math.abs(3), 5))}`;
      if (humidityd == 3.17) {
         sharemodalv += `${typesr.length}`;
      }
          let baseA = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,95,48,95,50,0);
          let inactive0 = new Map([[String.fromCharCode(104,95,50,52,95,119,97,110,116,115,0),218], [String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,118,95,57,56,0),458], [String.fromCharCode(99,111,110,115,116,115,95,118,95,57,53,0),588]]);
         sharemodalv += `${(String.fromCharCode(112,0) == typesr ? typesr.length : sharemodalv.length)}`;
         baseA += `${2 + baseA.length}`;
         inactive0 = new Map([[`${inactive0.size}`, baseA.length]]);
      do {
          let loginC = String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,55,95,49,48,48,0);
          let leaguep = new Map([[String.fromCharCode(122,95,52,56,95,98,105,103,110,117,109,0),String.fromCharCode(115,117,98,98,108,111,99,107,95,115,95,49,53,0)], [String.fromCharCode(120,95,50,49,95,115,105,110,101,0),String.fromCharCode(118,95,51,55,95,115,105,103,110,105,102,105,99,97,110,99,101,0)]]);
          let adult3 = String.fromCharCode(103,97,112,95,98,95,49,50,0);
          let apple0 = String.fromCharCode(109,95,52,57,95,114,97,100,102,0);
         sharemodalv = `${sharemodalv.length}`;
         loginC = `${apple0.length | leaguep.size}`;
         leaguep = new Map([[`${leaguep.size}`, (adult3 == String.fromCharCode(107,0) ? adult3.length : leaguep.size)]]);
         apple0 = `${2 ^ apple0.length}`;
         if (sharemodalv.length == 3762806) {
            break;
         }
      } while ((2.21 < (sharemodalv.length - humidityd) && (humidityd - sharemodalv.length) < 2.21) && (sharemodalv.length == 3762806));
          let with_08E = false;
         typesr = `${(parseInt(`${humidityd}`) ^ (with_08E ? 5 : 1))}`;
      if (3 < (2 * typesr.length) && (2 - typesr.length) < 5) {
         humidityd /= Math.max((sharemodalv == String.fromCharCode(85,0) ? typesr.length : sharemodalv.length), 3);
      }
          let distL = new Map([[String.fromCharCode(114,95,51,48,95,99,117,98,101,100,0),127], [String.fromCharCode(110,95,56,53,95,100,101,99,114,121,112,116,0),828], [String.fromCharCode(115,116,97,116,105,111,110,97,114,121,95,115,95,49,53,0),175]]);
          let ajax8 = String.fromCharCode(116,95,49,56,95,100,117,114,98,105,110,0);
         sharemodalv += `${ajax8.length}`;
         distL = new Map([[`${distL.size}`, distL.size]]);
         ajax8 = "1";
         typesr += `${typesr.length}`;
      while (typesr.length >= sharemodalv.length) {
         typesr = `${parseInt(`${humidityd}`)}`;
         break;
      }
      pingV %= Math.max(5, 2);
   if (ballS.length < 1) {
      ballS = `${bootsplashO.length & 1}`;
   }
   for (let l = 0; l < 2; l++) {
       let rules8 = String.fromCharCode(97,95,54,53,95,99,115,114,105,100,0);
       let emojihearts = String.fromCharCode(118,101,110,117,101,115,95,105,95,54,51,0);
       let codegenK = 3.0;
       let delegate__hz = 3.0;
         delegate__hz /= Math.max(3, parseFloat(`${3}`));
         emojihearts += `${rules8.length | 2}`;
      do {
         rules8 = `${1 + parseInt(`${codegenK}`)}`;
         if (rules8 == String.fromCharCode(107,53,106,0)) {
            break;
         }
      } while ((1.56 <= (parseFloat(`${rules8.length}`) * codegenK) || (parseFloat(`${rules8.length}`) * codegenK) <= 1.56) && (rules8 == String.fromCharCode(107,53,106,0)));
         rules8 = `${2 << (Math.min(Math.abs(parseInt(`${delegate__hz}`)), 2))}`;
         emojihearts = `${2 << (Math.min(3, Math.abs(parseInt(`${codegenK}`))))}`;
         delegate__hz *= parseFloat(`${parseInt(`${codegenK}`)}`);
      do {
         delegate__hz += parseFloat(`${parseInt(`${delegate__hz}`)}`);
         if (415447.0 == delegate__hz) {
            break;
         }
      } while ((5.88 <= (delegate__hz * 3.48)) && (415447.0 == delegate__hz));
         rules8 = `${emojihearts.length}`;
      if ((codegenK / 3.21) < 2.62) {
         codegenK *= parseFloat(`${parseInt(`${delegate__hz}`)}`);
      }
      if (2.70 >= (codegenK * 1.59)) {
         codegenK += parseFloat(`${rules8.length % (Math.max(3, 8))}`);
      }
       let libsgcoree = String.fromCharCode(103,95,57,49,95,115,97,118,105,110,103,115,0);
         codegenK += parseFloat(`${1}`);
      pingV >>= Math.min(Math.abs(rules8.length & 1), 5);
   }

    if (data.incidents != undefined && data.incidents.length > 0) {

   for (let w = 0; w < 1; w++) {
      vertical7 /= Math.max(1, parseFloat(`${1}`));
   }
   do {
      linkt >>= Math.min(Math.abs(3), 3);
      if (linkt == 2786483) {
         break;
      }
   } while (((5 >> (Math.min(2, bootsplashO.length))) >= 2 && (linkt >> (Math.min(Math.abs(5), 5))) >= 3) && (linkt == 2786483));
   if ((carouselw | 5) <= 1 && (5 | ballS.length) <= 3) {
      carouselw -= (forml == String.fromCharCode(71,0) ? forward2 : forml.length);
   }
      let item = data.incidents.findIndex(
        x =>
          x.type == 9 && x.in_player != undefined && x.in_player?.id == data.id,
      );
   do {
      penaltyshootnogoalf = new Map([[`${libflipperZ}`, (String.fromCharCode(119,0) == bootsplashO ? bootsplashO.length : parseInt(`${libflipperZ}`))]]);
      if (penaltyshootnogoalf.size == 3891257) {
         break;
      }
   } while ((penaltyshootnogoalf.size == 3891257) && ((penaltyshootnogoalf.size & forml.length) > 3 && (penaltyshootnogoalf.size & forml.length) > 3));
       let foundu = true;
       let baiduS = 5;
       let iconmore_ = String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,105,95,51,55,0);
       let config5 = String.fromCharCode(104,95,53,55,95,110,115,117,105,114,103,98,97,0);
         baiduS |= (String.fromCharCode(48,0) == iconmore_ ? iconmore_.length : (foundu ? 2 : 4));
          let chatbotphotou = 4;
          let predictionbutton1 = 2.0;
         config5 += `${(iconmore_ == String.fromCharCode(50,0) ? iconmore_.length : (foundu ? 3 : 4))}`;
         chatbotphotou >>= Math.min(Math.abs(parseInt(`${predictionbutton1}`) ^ 2), 1);
         predictionbutton1 -= parseFloat(`${1 | chatbotphotou}`);
      for (let n = 0; n < 2; n++) {
          let switch_1g = String.fromCharCode(109,118,104,100,95,102,95,51,52,0);
          let holder4 = new Map([[String.fromCharCode(100,101,105,110,116,101,114,108,97,99,101,95,48,95,55,55,0),704], [String.fromCharCode(99,95,54,50,95,118,101,114,116,0),270], [String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,53,95,51,53,0),118]]);
         foundu = config5 == String.fromCharCode(70,0);
         switch_1g = "2";
         holder4[switch_1g] = (String.fromCharCode(109,0) == switch_1g ? switch_1g.length : holder4.size);
      }
      for (let w = 0; w < 3; w++) {
         config5 += `${1 ^ baiduS}`;
      }
         foundu = !foundu;
      libflipperZ += parseFloat(`${parseInt(`${vertical7}`) << (Math.min(3, Math.abs(baiduS)))}`);
       let default_5zN = 5.0;
       let configureY = String.fromCharCode(115,116,114,99,115,112,110,95,116,95,53,56,0);
       let launchery = String.fromCharCode(103,109,97,116,99,104,95,110,95,50,53,0);
         configureY = `${2 >> (Math.min(1, configureY.length))}`;
      while (launchery.startsWith(configureY)) {
          let indicatorP = 0.0;
          let fillT = 5.0;
         configureY = `${parseInt(`${fillT}`) % 1}`;
         indicatorP /= Math.max(5, parseFloat(`${3}`));
         fillT += parseFloat(`${parseInt(`${indicatorP}`)}`);
         break;
      }
      do {
         configureY = `${parseInt(`${default_5zN}`) & 1}`;
         if (configureY.length == 544927) {
            break;
         }
      } while ((configureY.includes(`${default_5zN}`)) && (configureY.length == 544927));
         default_5zN *= (parseFloat(`${configureY == String.fromCharCode(104,0) ? parseInt(`${default_5zN}`) : configureY.length}`));
      for (let k = 0; k < 1; k++) {
         configureY = "1";
      }
      if ((default_5zN * 2.68) > 1.42 || 4 > (configureY.length % 4)) {
         default_5zN -= parseFloat(`${parseInt(`${default_5zN}`) + 2}`);
      }
      if (4 == configureY.length) {
          let register_34f = 5;
          let frame_vpg = String.fromCharCode(108,95,53,49,95,98,102,115,116,109,0);
          let starg = [15, 598, 941];
         launchery += "1";
         register_34f &= (String.fromCharCode(104,0) == frame_vpg ? frame_vpg.length : register_34f);
         starg = [(String.fromCharCode(98,0) == frame_vpg ? frame_vpg.length : starg.length)];
      }
          let alertc = String.fromCharCode(104,100,115,112,95,121,95,52,52,0);
         default_5zN /= Math.max(parseFloat(`${alertc.length / (Math.max(1, 10))}`), 3);
         default_5zN /= Math.max(2, parseFloat(`${launchery.length >> (Math.min(Math.abs(1), 2))}`));
      vertical7 += parseFloat(`${parseInt(`${vertical7}`) ^ pingV}`);

      if (item != undefined && item != -1) {

   for (let x = 0; x < 3; x++) {
      vietnamh = `${carouselw}`;
   }
       let resultg = true;
       let gemfilee = String.fromCharCode(98,105,116,95,120,95,55,51,0);
         gemfilee += `${gemfilee.length ^ 3}`;
      if (!gemfilee.endsWith(`${resultg}`)) {
          let bellz = String.fromCharCode(109,95,50,50,95,102,105,110,97,108,105,115,101,114,0);
          let defaultpredictionprofile1 = String.fromCharCode(120,95,49,48,48,95,120,118,97,103,0);
          let reminder7 = String.fromCharCode(112,117,108,108,95,108,95,56,48,0);
         gemfilee = `${((resultg ? 3 : 5) % (Math.max(1, gemfilee.length)))}`;
         bellz += `${defaultpredictionprofile1.length | 3}`;
         defaultpredictionprofile1 += `${bellz.length * defaultpredictionprofile1.length}`;
         reminder7 = "2";
      }
      vietnamh = `${linkt * 2}`;
       let libreanimated7 = [150, 521, 64];
       let clock2 = 5;
         libreanimated7 = [clock2 % (Math.max(libreanimated7.length, 2))];
       let defaultteamX = String.fromCharCode(120,95,55,55,95,99,111,108,108,101,99,116,0);
      ballS = "3";
        subInTime = data.incidents[item].time;
       let notificationgrayL = false;
       let analyticsH = [499, 852];
       let clockQ = String.fromCharCode(101,95,57,55,95,103,97,108,108,101,114,121,0);
      if (notificationgrayL) {
         notificationgrayL = (analyticsH.length + clockQ.length) >= 40;
      }
      for (let y = 0; y < 2; y++) {
         analyticsH.push(3);
      }
      do {
          let delegate_sK = String.fromCharCode(99,97,99,104,101,115,105,122,101,95,51,95,52,55,0);
          let iconsaveimagex = String.fromCharCode(104,95,55,52,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0);
          let binddatasn = String.fromCharCode(99,95,52,48,95,112,114,101,99,111,109,112,117,116,101,0);
          let configz = 3;
          let awayiconf = 1.0;
         analyticsH = [3 << (Math.min(Math.abs(configz), 2))];
         delegate_sK += `${binddatasn.length}`;
         iconsaveimagex = `${iconsaveimagex.length}`;
         binddatasn += `${parseInt(`${awayiconf}`)}`;
         configz |= 2;
         awayiconf += parseInt(`${awayiconf}`);
         if (analyticsH.length == 647928) {
            break;
         }
      } while ((analyticsH.length == 647928) && (1 <= analyticsH.length || (1 % (Math.max(7, analyticsH.length))) <= 3));
      for (let t = 0; t < 1; t++) {
          let fcdaebecbcbafcdfceaaeccfeacdbm = String.fromCharCode(118,95,50,56,95,114,101,97,115,111,110,0);
         analyticsH.push(fcdaebecbcbafcdfceaaeccfeacdbm.length / (Math.max(clockQ.length, 6)));
      }
      for (let w = 0; w < 3; w++) {
         notificationgrayL = 9 > clockQ.length;
      }
       let controlT = String.fromCharCode(109,121,115,101,108,102,95,53,95,52,48,0);
       let jingdongE = String.fromCharCode(121,95,54,54,0);
      if ((analyticsH.length / 1) <= 5 && (analyticsH.length / (Math.max(6, jingdongE.length))) <= 1) {
         jingdongE += `${(String.fromCharCode(106,0) == jingdongE ? jingdongE.length : controlT.length)}`;
      }
         analyticsH.push(controlT.length + 2);
       let libavformat9 = true;
       let latn8 = false;
      bootsplashO += "3";
       let reactnativeratingsn = String.fromCharCode(105,95,50,49,95,118,97,108,117,108,101,0);
         reactnativeratingsn = `${(reactnativeratingsn == String.fromCharCode(78,0) ? reactnativeratingsn.length : reactnativeratingsn.length)}`;
      if (reactnativeratingsn.startsWith(`${reactnativeratingsn.length}`)) {
          let foundp = 3.0;
          let notificationE = String.fromCharCode(122,95,50,57,95,97,112,112,114,111,118,97,108,0);
          let mbjscommon_ = 3;
          let updatesB = String.fromCharCode(114,95,55,49,95,114,105,100,103,101,0);
         reactnativeratingsn = `${parseInt(`${foundp}`)}`;
         foundp /= Math.max(updatesB.length, 2);
         notificationE += "2";
         mbjscommon_ += 1 >> (Math.min(2, Math.abs(mbjscommon_)));
         updatesB += `${mbjscommon_}`;
      }
          let rightp = [885, 88, 977];
          let armvaQ = [447, 652, 803];
         reactnativeratingsn += `${1 % (Math.max(8, reactnativeratingsn.length))}`;
         rightp.push(rightp.length << (Math.min(Math.abs(3), 5)));
         armvaQ = [3];
      pingV |= 1 & parseInt(`${vertical7}`);
   do {
      carouselw *= (String.fromCharCode(52,0) == penaltygoalX ? iconcurrentmatchJ.size : penaltygoalX.length);
      if (1081075 == carouselw) {
         break;
      }
   } while (((libflipperZ - carouselw) == 5.96) && (1081075 == carouselw));

        return true;
      } else {

      forward2 += parseInt(`${libflipperZ}`) - 2;
      vertical7 *= parseFloat(`${2}`);
   if (!ballS.endsWith(penaltygoalX)) {
       let expiredE = 4.0;
       let fullscreenminG = 3.0;
       let greena = String.fromCharCode(115,99,114,111,108,108,105,110,103,95,110,95,54,52,0);
       let weibo3 = String.fromCharCode(99,97,118,108,99,95,116,95,57,56,0);
      for (let x = 0; x < 1; x++) {
          let dycreatorY = 4;
          let iconbella = String.fromCharCode(103,95,53,54,95,115,112,105,110,108,111,99,107,0);
          let yellowvideoliveD = String.fromCharCode(103,101,110,101,114,97,116,111,114,115,95,117,95,57,55,0);
         greena = `${(iconbella == String.fromCharCode(105,0) ? dycreatorY : iconbella.length)}`;
         dycreatorY *= yellowvideoliveD.length | 2;
      }
      do {
          let reminderb = new Map([[String.fromCharCode(99,111,117,110,116,115,95,120,95,50,48,0),42], [String.fromCharCode(117,110,97,118,97,105,98,108,101,95,100,95,53,48,0),417]]);
          let debugN = String.fromCharCode(97,117,120,95,118,95,57,48,0);
          let footballfieldL = String.fromCharCode(101,95,50,56,95,99,111,109,112,97,114,101,0);
          let imagesT = 4;
          let o_animationi = false;
         fullscreenminG += parseInt(`${fullscreenminG}`) + greena.length;
         reminderb[`${o_animationi}`] = imagesT;
         debugN = "1";
         footballfieldL += `${((o_animationi ? 2 : 5) | footballfieldL.length)}`;
         imagesT -= reminderb.size;
         if (fullscreenminG == 2097375.0) {
            break;
         }
      } while (((fullscreenminG + expiredE) >= 1.1 || 1.1 >= (expiredE + fullscreenminG)) && (fullscreenminG == 2097375.0));
       let airbnbstary = 3;
       let readn = 2;
          let resultk = new Map([[String.fromCharCode(104,95,52,55,95,109,97,114,107,105,110,103,115,0),58], [String.fromCharCode(100,101,110,105,97,108,95,97,95,51,52,0),637]]);
          let interstitialf = String.fromCharCode(108,95,50,48,95,112,99,109,117,0);
         weibo3 += "2";
         resultk[interstitialf] = 1 & resultk.size;
         interstitialf += `${(String.fromCharCode(115,0) == interstitialf ? resultk.size : interstitialf.length)}`;
      while ((expiredE / (Math.max(fullscreenminG, 4))) >= 3.0) {
         fullscreenminG += parseInt(`${expiredE}`) * 2;
         break;
      }
      ballS = "2";
   }
        subInTime = 0;
      libflipperZ += parseFloat(`${carouselw}`);
      forward2 ^= carouselw & ballS.length;
       let resultD = 1;
       let penaltyshootnogoalB = String.fromCharCode(98,117,102,102,101,114,115,114,99,95,101,95,56,56,0);
         penaltyshootnogoalB = `${1 % (Math.max(6, penaltyshootnogoalB.length))}`;
       let penaltygoalk = 3.0;
       let rncorex = 0.0;
          let actionp = 5.0;
         penaltygoalk -= parseFloat(`${parseInt(`${penaltygoalk}`) << (Math.min(2, Math.abs(2)))}`);
         actionp -= parseFloat(`${1 | parseInt(`${actionp}`)}`);
         penaltygoalk *= parseFloat(`${3}`);
      do {
         penaltyshootnogoalB += `${parseInt(`${penaltygoalk}`)}`;
         if (String.fromCharCode(56,121,48,54,103,0) == penaltyshootnogoalB) {
            break;
         }
      } while ((3 == penaltyshootnogoalB.length) && (String.fromCharCode(56,121,48,54,103,0) == penaltyshootnogoalB));
         penaltyshootnogoalB = `${(penaltyshootnogoalB == String.fromCharCode(88,0) ? penaltyshootnogoalB.length : parseInt(`${rncorex}`))}`;
      penaltyshootnogoalf = new Map([[`${pingV}`, 3]]);
      resultD %= Math.max(resultD, 4);

        return false;
      libflipperZ *= parseFloat(`${linkt / (Math.max(2, carouselw))}`);
   for (let q = 0; q < 3; q++) {
       let iconstarQ = false;
       let carouselh = String.fromCharCode(97,97,99,101,110,99,100,115,112,95,109,95,56,48,0);
       let listl = 4.0;
       let privatechatbg1 = new Map([[String.fromCharCode(97,117,100,105,101,110,99,101,95,103,95,55,53,0),129], [String.fromCharCode(108,115,112,115,95,55,95,55,51,0),188]]);
       let flipper_ = [String.fromCharCode(109,95,50,57,95,114,101,97,108,108,111,99,97,116,101,0), String.fromCharCode(101,120,112,111,110,101,110,116,115,95,114,95,53,50,0)];
      if (4 <= (parseInt(`${listl}`) + carouselh.length) && (listl + parseFloat(`${carouselh.length}`)) <= 4.4) {
          let placeholderI = String.fromCharCode(97,115,115,101,116,115,95,107,95,56,0);
          let weatherZ = String.fromCharCode(117,95,49,53,95,109,111,109,101,110,116,97,114,121,0);
          let langd = String.fromCharCode(116,95,50,52,95,105,110,105,116,105,97,108,105,122,105,110,103,0);
          let libhermesd = String.fromCharCode(112,97,114,101,110,116,115,95,49,95,49,55,0);
         carouselh = `${carouselh.length + 2}`;
         placeholderI += "2";
         weatherZ += `${(libhermesd == String.fromCharCode(66,0) ? libhermesd.length : langd.length)}`;
         langd = `${langd.length}`;
      }
      for (let b = 0; b < 1; b++) {
          let commonc = 1.0;
          let defaultroombgE = 5;
          let policyG = [24, 456, 596];
          let videoA = 5.0;
          let videojsC = true;
         listl -= parseFloat(`${parseInt(`${commonc}`)}`);
         defaultroombgE += 1;
         policyG = [policyG.length];
         videoA -= 3 - policyG.length;
         videojsC = (policyG.length & defaultroombgE) < 82;
      }
      for (let t = 0; t < 2; t++) {
          let libsentryD = [String.fromCharCode(121,95,56,53,95,115,108,97,115,104,105,110,103,0), String.fromCharCode(107,105,99,107,95,55,95,54,52,0), String.fromCharCode(116,95,53,52,95,100,101,108,97,0)];
          let skipl = String.fromCharCode(115,116,117,110,95,119,95,50,56,0);
          let assisto = 1;
          let volumef = 4.0;
         listl += (parseFloat(`${(iconstarQ ? 2 : 5) & parseInt(`${listl}`)}`));
         libsentryD = [(skipl == String.fromCharCode(77,0) ? skipl.length : assisto)];
         assisto |= parseInt(`${volumef}`) & 1;
         volumef += parseFloat(`${parseInt(`${volumef}`) ^ 3}`);
      }
         flipper_ = [3 - parseInt(`${listl}`)];
         flipper_ = [flipper_.length];
         privatechatbg1 = new Map([[`${privatechatbg1.size}`, carouselh.length]]);
      while (3.30 >= listl) {
         iconstarQ = !iconstarQ;
         break;
      }
      do {
          let constantsD = 4;
          let bottomt = String.fromCharCode(116,114,97,99,101,95,110,95,52,57,0);
          let livenodatabgimgG = true;
          let disconnectedlogok = 2.0;
          let mbjscommon1 = [357, 987, 707];
         privatechatbg1 = new Map([[`${flipper_.length}`, flipper_.length - 1]]);
         constantsD >>= Math.min(3, Math.abs(bottomt.length & constantsD));
         bottomt += `${parseInt(`${disconnectedlogok}`)}`;
         livenodatabgimgG = 66.8 >= disconnectedlogok;
         mbjscommon1 = [mbjscommon1.length];
         if (privatechatbg1.size == 4871584) {
            break;
         }
      } while ((1 > (4 | privatechatbg1.size) && (flipper_.length | 4) > 5) && (privatechatbg1.size == 4871584));
          let greyarrowup7 = 1.0;
          let homeinactiveh = new Map([[String.fromCharCode(99,95,50,54,95,114,101,109,105,110,100,101,114,115,0),575], [String.fromCharCode(105,110,116,102,114,95,109,95,55,56,0),247]]);
         privatechatbg1 = new Map([[`${flipper_.length}`, flipper_.length + parseInt(`${greyarrowup7}`)]]);
         greyarrowup7 += 1;
         homeinactiveh[`${homeinactiveh.size}`] = 2;
      while ((flipper_.length & privatechatbg1.size) > 3 && 2 > (flipper_.length & 3)) {
          let cancelN = 3.0;
         privatechatbg1 = new Map([[carouselh, parseInt(`${cancelN}`)]]);
         break;
      }
      while (!Array.from(privatechatbg1.values()).includes(flipper_.length)) {
          let streaming3 = 1.0;
          let unselected4 = String.fromCharCode(112,114,111,116,111,95,104,95,54,56,0);
         flipper_ = [3 >> (Math.min(5, unselected4.length))];
         streaming3 -= parseFloat(`${2}`);
         unselected4 = "3";
         break;
      }
      do {
          let vietnamq = 0;
         flipper_ = [(String.fromCharCode(49,0) == carouselh ? vietnamq : carouselh.length)];
         if (flipper_.length == 3402059) {
            break;
         }
      } while ((flipper_.length == 3402059) && (4.81 >= (listl + 3.10) && 4 >= (flipper_.length | 1)));
       let expandk = 1.0;
         carouselh = `${privatechatbg1.size >> (Math.min(flipper_.length, 1))}`;
          let chinaI = [516, 255];
          let sharewhite8 = String.fromCharCode(118,95,50,95,112,97,115,115,101,100,0);
         privatechatbg1 = new Map([[carouselh, ((iconstarQ ? 2 : 1) * carouselh.length)]]);
         chinaI.push(2);
         sharewhite8 += `${sharewhite8.length}`;
      vietnamh += `${(ballS == String.fromCharCode(66,0) ? iconcurrentmatchJ.size : ballS.length)}`;
   }
      vertical7 -= parseFloat(`${forml.length}`);

      }
    }
  };

  let checkSubOut = () => {
       let imagesX = [647, 314];
    let penaltygoale = String.fromCharCode(115,101,112,97,114,97,116,101,95,110,95,53,52,0);
    let mbnativeadvancedl = true;
    let countdownu = String.fromCharCode(108,95,50,55,95,105,111,115,0);
    let securityr = String.fromCharCode(114,108,109,95,51,95,55,49,0);
    let topic3 = 5.0;
    let liveendmodallogoD = 4;
    let orientationm = 0;
    let orangeclock6 = new Map([[String.fromCharCode(98,95,50,50,95,115,111,100,101,97,108,108,111,99,0),12], [String.fromCharCode(119,95,52,51,95,109,97,99,101,0),787]]);
    let playercommonf = 2.0;
    let shrinkU = String.fromCharCode(108,105,98,116,103,118,111,105,112,95,97,95,49,48,48,0);
    let otherQ = String.fromCharCode(111,95,51,54,95,120,99,111,114,114,0);
      mbnativeadvancedl = mbnativeadvancedl && imagesX.length > 81;
   do {
      mbnativeadvancedl = 4 == penaltygoale.length;
      if (mbnativeadvancedl ? !mbnativeadvancedl : mbnativeadvancedl) {
         break;
      }
   } while ((orangeclock6.size > 1) && (mbnativeadvancedl ? !mbnativeadvancedl : mbnativeadvancedl));
       let modex = 3.0;
       let textw = 1.0;
       let watchL = 2;
      do {
         watchL += watchL - parseInt(`${textw}`);
         if (watchL == 2864620) {
            break;
         }
      } while ((watchL == 2864620) && (3 >= (watchL | 2)));
       let basketballiconu = new Map([[String.fromCharCode(101,110,116,105,116,121,95,120,95,53,50,0),true ], [String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,104,95,53,50,0),false ]]);
       let tickedr = new Map([[String.fromCharCode(115,105,100,101,115,95,103,95,51,54,0),408], [String.fromCharCode(106,100,109,97,105,110,99,116,95,56,95,51,52,0),139]]);
      do {
          let termsF = [348, 873];
          let catagoryK = String.fromCharCode(106,95,51,57,95,119,97,116,99,104,105,110,103,0);
          let vignette1 = [291, 627, 126];
          let rocketa = 4.0;
         textw *= watchL;
         termsF.push(3);
         catagoryK += `${termsF.length}`;
         vignette1.push(3);
         rocketa /= Math.max(2, 2 % (Math.max(parseInt(`${rocketa}`), 7)));
         if (textw == 3414738.0) {
            break;
         }
      } while ((textw == 3414738.0) && (Array.from(tickedr.keys()).includes(`${textw}`)));
      while (2 <= watchL) {
          let active0 = String.fromCharCode(118,97,114,105,110,116,115,95,107,95,57,53,0);
          let downloadH = 4.0;
          let imagenetworkerrf = 5;
         basketballiconu[`${downloadH}`] = 1 ^ tickedr.size;
         active0 += "1";
         downloadH += parseFloat(`${2}`);
         imagenetworkerrf += imagenetworkerrf ^ active0.length;
         break;
      }
      while (2 > (tickedr.size ^ 1) || (5.75 - textw) > 4.76) {
         tickedr[`${watchL}`] = 3 & basketballiconu.size;
         break;
      }
         textw *= parseInt(`${modex}`);
       let flipperR = new Map([[String.fromCharCode(103,95,49,57,95,115,104,97,114,112,110,101,115,115,0),String.fromCharCode(109,95,56,49,95,109,101,101,116,117,112,0)], [String.fromCharCode(115,97,100,120,95,57,95,49,50,0),String.fromCharCode(115,111,114,116,95,52,95,55,0)]]);
       let eventx = new Map([[String.fromCharCode(99,95,52,48,95,115,101,116,115,97,114,0),430], [String.fromCharCode(115,116,97,116,101,95,48,95,55,53,0),546]]);
       let cross1 = 4;
          let binddatas_ = String.fromCharCode(100,95,54,52,95,112,114,105,118,97,99,121,0);
          let bangd = String.fromCharCode(97,98,101,108,95,111,95,52,54,0);
         tickedr = new Map([[`${eventx.size}`, eventx.size]]);
         binddatas_ = `${bangd.length}`;
         bangd += `${binddatas_.length * bangd.length}`;
      penaltygoale = `${(countdownu == String.fromCharCode(121,0) ? countdownu.length : penaltygoale.length)}`;

    if (data.incidents != undefined && data.incidents.length > 0) {

      liveendmodallogoD += penaltygoale.length;
   while ((liveendmodallogoD ^ 5) > 5 && 2 > (5 ^ liveendmodallogoD)) {
      shrinkU = `${3 & orientationm}`;
      break;
   }
      liveendmodallogoD >>= Math.min(3, Math.abs(2));
      let item = data.incidents.findIndex(
        x =>
          x.type == 9 &&
          x.out_player != undefined &&
          x.out_player?.id == data.id,
      );
      orangeclock6[`${mbnativeadvancedl}`] = ((mbnativeadvancedl ? 2 : 2) ^ imagesX.length);
   do {
      penaltygoale += `${orientationm}`;
      if (1038722 == penaltygoale.length) {
         break;
      }
   } while ((3 <= penaltygoale.length) && (1038722 == penaltygoale.length));
   if (3.26 == (topic3 + orientationm)) {
       let backgroundD = String.fromCharCode(99,111,110,118,101,110,105,101,110,99,101,95,48,95,49,57,0);
       let cornershootd = String.fromCharCode(114,95,54,54,95,99,108,105,112,98,111,97,114,100,0);
         cornershootd = `${cornershootd.length}`;
       let webviewM = String.fromCharCode(111,95,49,57,95,115,117,98,99,111,101,102,115,0);
       let leakchecker0 = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,119,95,53,52,0);
      orientationm /= Math.max(4, 3 >> (Math.min(4, countdownu.length)));
      backgroundD += `${backgroundD.length}`;
   }

      if (item != undefined && item != -1) {

   while (!Array.from(orangeclock6.keys()).includes(`${topic3}`)) {
      topic3 *= parseFloat(`${securityr.length}`);
      break;
   }
      securityr = `${orientationm >> (Math.min(4, Math.abs(1)))}`;
   while ((parseFloat(`${orientationm}`) / (Math.max(9, topic3))) > 5.75 && (orientationm << (Math.min(Math.abs(4), 2))) > 5) {
       let popupY = 5;
       let windT = 2.0;
       let valuesf = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,116,95,49,48,48,0);
      do {
          let mbbidX = false;
          let disconnected6 = 2.0;
          let description_a2 = new Map([[String.fromCharCode(116,95,57,51,95,115,111,102,97,108,105,122,101,114,0),String.fromCharCode(121,95,52,52,95,100,101,113,117,97,110,116,105,122,101,114,0)], [String.fromCharCode(107,95,57,48,95,99,108,105,112,112,101,100,0),String.fromCharCode(114,95,51,51,95,112,97,115,119,111,114,100,0)], [String.fromCharCode(117,110,114,105,115,101,95,117,95,53,49,0),String.fromCharCode(100,95,53,50,95,115,99,97,110,105,110,100,101,120,0)]]);
          let stepP = String.fromCharCode(113,95,51,55,95,102,114,101,111,112,101,110,0);
         valuesf += "2";
         mbbidX = stepP.endsWith(`${disconnected6}`);
         disconnected6 *= (parseFloat(`${(mbbidX ? 4 : 3)}`));
         description_a2[`${disconnected6}`] = 2 | stepP.length;
         if (360457 == valuesf.length) {
            break;
         }
      } while ((3 > popupY) && (360457 == valuesf.length));
         popupY -= parseInt(`${windT}`);
      while ((2.36 / (Math.max(10, windT))) <= 2.29) {
         valuesf = `${parseInt(`${windT}`) ^ popupY}`;
         break;
      }
      do {
          let reducerb = [String.fromCharCode(104,95,49,48,95,101,118,117,116,105,108,0), String.fromCharCode(117,95,49,48,95,109,117,115,120,0), String.fromCharCode(114,101,115,104,117,102,102,108,101,95,107,95,57,48,0)];
          let abidetectW = new Map([[String.fromCharCode(110,101,119,108,105,110,101,95,107,95,51,51,0),770], [String.fromCharCode(98,117,102,108,101,110,95,55,95,57,56,0),199]]);
          let q_unlock4 = 3.0;
          let iconnointernet9 = String.fromCharCode(103,95,52,57,95,115,108,105,100,0);
          let package_odC = String.fromCharCode(107,95,57,56,95,114,101,99,101,105,118,101,114,115,0);
         windT -= 1;
         reducerb = [parseInt(`${q_unlock4}`)];
         abidetectW[package_odC] = (String.fromCharCode(120,0) == package_odC ? iconnointernet9.length : package_odC.length);
         q_unlock4 -= abidetectW.size;
         iconnointernet9 += `${2 >> (Math.min(2, package_odC.length))}`;
         if (windT == 1396579.0) {
            break;
         }
      } while ((windT == 1396579.0) && ((windT + 5.37) <= 2.26));
      do {
         windT += (String.fromCharCode(48,0) == valuesf ? valuesf.length : parseInt(`${windT}`));
         if (411296.0 == windT) {
            break;
         }
      } while ((411296.0 == windT) && (3.57 > (windT / (Math.max(2, valuesf.length)))));
         valuesf += `${valuesf.length & 1}`;
      while (2.62 < (windT * 5.44) || (5.44 * windT) < 3.60) {
         popupY %= Math.max(1, valuesf.length + popupY);
         break;
      }
      while (1 > (3 | popupY) && 1 > (popupY | 3)) {
         popupY %= Math.max(2, valuesf.length);
         break;
      }
      if (valuesf.length == windT) {
         windT /= Math.max(4, valuesf.length | popupY);
      }
      orientationm &= 2;
      break;
   }
        subOutTime = data.incidents[item].time;
       let teamdetailsbgI = String.fromCharCode(118,95,49,57,95,104,97,100,97,109,97,114,100,120,0);
       let telegram0 = [879, 616];
       let with_pC = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,48,95,51,52,0),false ], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,117,95,53,55,0),true ], [String.fromCharCode(100,95,52,55,95,98,105,110,98,110,0),true ]]);
      while ((4 | with_pC.size) >= 1 && (4 | teamdetailsbgI.length) >= 1) {
          let turnF = String.fromCharCode(117,95,57,51,95,99,111,100,101,115,116,114,101,97,109,0);
          let targetY = 1;
          let largesoundw = 0.0;
          let subbasketballplayerz = 3.0;
         teamdetailsbgI = `${with_pC.size}`;
         turnF = `${parseInt(`${largesoundw}`) ^ 2}`;
         targetY |= turnF.length | 3;
         largesoundw *= parseFloat(`${2 * targetY}`);
         subbasketballplayerz *= targetY ^ turnF.length;
         break;
      }
         teamdetailsbgI += `${(teamdetailsbgI == String.fromCharCode(106,0) ? with_pC.size : teamdetailsbgI.length)}`;
      do {
         telegram0 = [teamdetailsbgI.length];
         if (telegram0.length == 4376042) {
            break;
         }
      } while ((teamdetailsbgI.endsWith(`${telegram0.length}`)) && (telegram0.length == 4376042));
       let orangetickK = 3.0;
       let libsentryZ = 3.0;
         orangetickK *= (String.fromCharCode(111,0) == teamdetailsbgI ? parseInt(`${orangetickK}`) : teamdetailsbgI.length);
       let rulesy = 5.0;
         telegram0 = [parseInt(`${orangetickK}`)];
         libsentryZ += 3;
         teamdetailsbgI = `${telegram0.length << (Math.min(Math.abs(3), 5))}`;
      shrinkU = "1";
       let exampleimagep = String.fromCharCode(103,95,56,54,95,98,105,114,116,104,100,97,116,101,0);
       let paginationD = String.fromCharCode(116,95,49,53,95,116,111,116,97,108,115,0);
       let libreactnativejnif = 5;
          let yellow4 = false;
          let vignettet = new Map([[String.fromCharCode(98,114,107,116,105,109,101,103,109,95,107,95,52,48,0),768], [String.fromCharCode(99,95,56,57,95,100,111,99,115,0),416], [String.fromCharCode(108,95,57,57,0),378]]);
         libreactnativejnif <<= Math.min(Math.abs(libreactnativejnif), 2);
         yellow4 = vignettet.size < 49 && !yellow4;
         vignettet[`${yellow4}`] = ((yellow4 ? 5 : 3) / (Math.max(3, 4)));
          let videocommonK = String.fromCharCode(111,118,101,114,114,105,100,101,110,95,50,95,57,51,0);
          let iconrightorangeS = [787, 750];
         exampleimagep = `${videocommonK.length | iconrightorangeS.length}`;
         paginationD = "1";
      while (5 == exampleimagep.length) {
         exampleimagep = `${1 ^ paginationD.length}`;
         break;
      }
         exampleimagep = `${2 >> (Math.min(5, paginationD.length))}`;
      playercommonf *= 1;
   for (let c = 0; c < 3; c++) {
      playercommonf *= parseInt(`${topic3}`) << (Math.min(3, Math.abs(2)));
   }

        return true;
      } else {

       let mailr = String.fromCharCode(109,95,49,48,48,95,99,97,108,108,105,115,116,111,0);
      while (5 == mailr.length) {
         mailr = `${2 | mailr.length}`;
         break;
      }
          let analyticQ = String.fromCharCode(113,95,51,95,102,97,99,116,111,114,0);
          let backwardC = 1.0;
         mailr += `${mailr.length | 2}`;
         analyticQ += `${(analyticQ == String.fromCharCode(90,0) ? analyticQ.length : parseInt(`${backwardC}`))}`;
         backwardC += analyticQ.length - parseInt(`${backwardC}`);
       let orangetickn = 2.0;
      playercommonf += securityr.length % (Math.max(shrinkU.length, 5));
       let awayteamfieldP = String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,52,95,55,55,0);
       let redcirclebgw = String.fromCharCode(109,98,103,114,97,112,104,95,105,95,56,54,0);
         awayteamfieldP += `${awayteamfieldP.length}`;
       let refreshborderlessR = new Map([[String.fromCharCode(100,97,116,97,115,116,111,114,101,95,57,95,57,55,0),666], [String.fromCharCode(115,95,51,50,95,102,97,108,108,98,97,99,107,0),843], [String.fromCharCode(103,95,49,50,95,99,111,109,112,0),209]]);
      while (awayteamfieldP != String.fromCharCode(103,0)) {
         redcirclebgw = `${(String.fromCharCode(69,0) == awayteamfieldP ? awayteamfieldP.length : refreshborderlessR.size)}`;
         break;
      }
         awayteamfieldP += `${(redcirclebgw == String.fromCharCode(72,0) ? awayteamfieldP.length : redcirclebgw.length)}`;
      while (1 > refreshborderlessR.size) {
         redcirclebgw += `${refreshborderlessR.size / 1}`;
         break;
      }
          let leakchecker_ = 0;
          let descX = new Map([[String.fromCharCode(97,95,50,56,95,116,119,105,99,101,0),false ], [String.fromCharCode(116,101,109,112,108,97,116,101,100,95,118,95,52,53,0),true ], [String.fromCharCode(119,95,48,95,105,110,118,97,108,105,100,97,116,105,111,110,0),true ]]);
          let issub4 = 0;
         awayteamfieldP = `${descX.size << (Math.min(Math.abs(1), 2))}`;
         leakchecker_ += 3 / (Math.max(5, issub4));
         descX = new Map([[`${issub4}`, leakchecker_]]);
      mbnativeadvancedl = !mbnativeadvancedl;
      imagesX = [((mbnativeadvancedl ? 2 : 5))];
        subOutTime = 0;
   do {
      liveendmodallogoD *= penaltygoale.length ^ shrinkU.length;
      if (liveendmodallogoD == 3592278) {
         break;
      }
   } while ((4 <= (countdownu.length << (Math.min(4, Math.abs(liveendmodallogoD)))) || (4 << (Math.min(1, Math.abs(liveendmodallogoD)))) <= 4) && (liveendmodallogoD == 3592278));
   if (5.6 < (topic3 + 5.52) && (imagesX.length + parseInt(`${topic3}`)) < 5) {
      topic3 *= parseFloat(`${1 - parseInt(`${topic3}`)}`);
   }
   if (!securityr.includes(penaltygoale)) {
      securityr += `${liveendmodallogoD - 1}`;
   }

        return false;
   while ((5.68 + playercommonf) < 1.15 || (5.68 + playercommonf) < 4.60) {
       let giflivestreamingH = String.fromCharCode(112,117,115,104,105,110,103,95,112,95,52,0);
       let libjsijniprofilerO = true;
       let tailf = 0.0;
      do {
         giflivestreamingH += `${(parseInt(`${tailf}`) >> (Math.min(2, Math.abs((libjsijniprofilerO ? 5 : 2)))))}`;
         if (giflivestreamingH == String.fromCharCode(112,116,122,57,110,99,110,0)) {
            break;
         }
      } while ((giflivestreamingH == String.fromCharCode(112,116,122,57,110,99,110,0)) && (!giflivestreamingH.includes(`${libjsijniprofilerO}`)));
          let imagenetworkerr2 = [502, 800, 992];
          let iconclosewhite7 = String.fromCharCode(101,95,51,48,95,110,104,97,110,99,101,0);
         tailf -= parseFloat(`${1 >> (Math.min(1, giflivestreamingH.length))}`);
         imagenetworkerr2.push(iconclosewhite7.length / (Math.max(1, imagenetworkerr2.length)));
         iconclosewhite7 = `${iconclosewhite7.length}`;
          let strO = String.fromCharCode(113,95,56,50,95,99,108,111,115,101,0);
          let logouserA = 2.0;
         libjsijniprofilerO = !libjsijniprofilerO;
         strO += `${(String.fromCharCode(103,0) == strO ? strO.length : parseInt(`${logouserA}`))}`;
         logouserA *= parseFloat(`${strO.length}`);
         tailf /= Math.max(parseFloat(`${2 * giflivestreamingH.length}`), 5);
      if (giflivestreamingH.length <= 3) {
          let filled1 = String.fromCharCode(116,97,114,103,97,95,107,95,53,50,0);
         giflivestreamingH += `${((libjsijniprofilerO ? 5 : 1) % 3)}`;
         filled1 = `${filled1.length >> (Math.min(4, filled1.length))}`;
      }
          let tailg = new Map([[String.fromCharCode(109,117,108,95,120,95,55,52,0),939], [String.fromCharCode(100,101,103,114,97,100,101,100,95,120,95,49,0),54], [String.fromCharCode(111,114,105,103,105,110,97,108,95,103,95,50,0),466]]);
          let scoreU = new Map([[String.fromCharCode(115,95,51,54,95,99,108,97,117,115,101,115,0),String.fromCharCode(100,116,100,102,95,104,95,53,53,0)], [String.fromCharCode(101,95,50,53,95,100,101,99,111,100,101,114,105,110,105,116,0),String.fromCharCode(109,111,118,101,95,103,95,57,52,0)], [String.fromCharCode(112,111,108,101,95,102,95,56,56,0),String.fromCharCode(105,95,49,54,95,120,118,97,103,0)]]);
          let footballfield5 = String.fromCharCode(99,111,112,121,95,118,95,57,49,0);
         giflivestreamingH = `${(String.fromCharCode(57,0) == footballfield5 ? footballfield5.length : scoreU.size)}`;
         tailg = new Map([[`${tailg.size}`, tailg.size << (Math.min(Math.abs(3), 5))]]);
         scoreU = new Map([[`${tailg.size}`, 3 % (Math.max(5, tailg.size))]]);
         libjsijniprofilerO = 75.71 >= tailf;
      while (giflivestreamingH.length > 1 && libjsijniprofilerO) {
         libjsijniprofilerO = 61.72 <= tailf || giflivestreamingH == String.fromCharCode(88,0);
         break;
      }
         giflivestreamingH += `${((libjsijniprofilerO ? 5 : 1))}`;
      playercommonf -= parseInt(`${topic3}`) + 2;
      break;
   }
      topic3 /= Math.max((parseFloat(`${countdownu == String.fromCharCode(106,0) ? countdownu.length : orientationm}`)), 2);
      orientationm -= securityr.length * 1;

      }
    }
  };

  let checkYellowCard = () => {
       let charta = String.fromCharCode(105,95,54,48,95,109,97,114,107,101,116,0);
    let kuaishou4 = 3;
    let membership0 = String.fromCharCode(100,105,109,95,118,95,49,54,0);
    let iconbellt = false;
    let libfabricjnih = 4.0;
    let penaltyshootnogoal1 = String.fromCharCode(115,117,98,109,118,95,97,95,54,50,0);
    let imagenetworkerrs = String.fromCharCode(103,95,54,95,113,117,97,110,116,115,0);
    let buttona = String.fromCharCode(97,98,108,101,95,54,95,50,51,0);
    let switch_z_ = 0.0;
    let unfille = 3.0;
       let settingQ = false;
       let libavfilters = String.fromCharCode(101,95,56,48,95,114,111,119,115,112,97,110,0);
      for (let g = 0; g < 1; g++) {
          let imagewatchliveA = String.fromCharCode(115,110,105,112,112,101,116,95,99,95,57,51,0);
          let phoneshareE = String.fromCharCode(105,95,53,50,95,119,101,108,99,111,109,101,0);
          let abidetectX = String.fromCharCode(102,97,105,108,117,114,101,115,95,99,95,57,57,0);
         libavfilters = `${((settingQ ? 4 : 1))}`;
         imagewatchliveA += `${phoneshareE.length}`;
         phoneshareE += `${(abidetectX == String.fromCharCode(111,0) ? phoneshareE.length : abidetectX.length)}`;
      }
      do {
         libavfilters += `${(libavfilters.length - (settingQ ? 3 : 4))}`;
         if (String.fromCharCode(98,122,106,104,121,57,52,99,121,114,0) == libavfilters) {
            break;
         }
      } while ((String.fromCharCode(98,122,106,104,121,57,52,99,121,114,0) == libavfilters) && (settingQ && 2 <= libavfilters.length));
         settingQ = libavfilters.length > 92;
         libavfilters += `${(libavfilters == String.fromCharCode(112,0) ? libavfilters.length : (settingQ ? 2 : 3))}`;
      for (let t = 0; t < 3; t++) {
          let libhermesC = new Map([[String.fromCharCode(114,95,54,54,95,112,97,117,115,101,0),String.fromCharCode(109,98,99,115,95,122,95,55,49,0)], [String.fromCharCode(116,95,53,55,95,109,105,100,108,0),String.fromCharCode(103,114,101,101,116,105,110,103,95,98,95,53,48,0)], [String.fromCharCode(111,117,112,117,116,95,107,95,51,54,0),String.fromCharCode(103,95,51,57,95,114,101,110,97,109,101,0)]]);
          let nbatrophy3 = 0.0;
          let sport4 = String.fromCharCode(115,95,48,0);
          let dependencyC = 0;
          let iconbelln = new Map([[String.fromCharCode(97,114,99,95,52,95,52,51,0),306], [String.fromCharCode(119,95,49,49,95,101,110,106,105,110,0),309]]);
         libavfilters = `${iconbelln.size}`;
         libhermesC[`${dependencyC}`] = 3;
         nbatrophy3 *= 3 % (Math.max(8, parseInt(`${nbatrophy3}`)));
         sport4 += `${sport4.length}`;
         dependencyC <<= Math.min(5, Math.abs(2 - libhermesC.size));
         iconbelln[`${dependencyC}`] = 2 * dependencyC;
      }
         libavfilters += "2";
      imagenetworkerrs += `${1 ^ penaltyshootnogoal1.length}`;
   if (libfabricjnih < 5.68 && 3.92 < (libfabricjnih / 5.68)) {
      iconbellt = kuaishou4 < libfabricjnih;
   }
       let type_rq = true;
      while (type_rq) {
         type_rq = (!type_rq ? !type_rq : !type_rq);
         break;
      }
      do {
         type_rq = !type_rq;
         if (type_rq ? !type_rq : type_rq) {
            break;
         }
      } while ((!type_rq && type_rq) && (type_rq ? !type_rq : type_rq));
      if (type_rq && type_rq) {
          let libyogaG = false;
         type_rq = (libyogaG ? type_rq : libyogaG);
      }
      libfabricjnih *= ((iconbellt ? 2 : 1));

    if (data.incidents != undefined && data.incidents.length > 0) {

   do {
      membership0 += "1";
      if (membership0 == String.fromCharCode(99,113,113,53,101,0)) {
         break;
      }
   } while ((2 <= (membership0.length % (Math.max(4, 9)))) && (membership0 == String.fromCharCode(99,113,113,53,101,0)));
   if (charta.length == 5) {
       let preview_ = [183, 319];
      if ((preview_.length - 2) < 4 && (preview_.length - preview_.length) < 2) {
         preview_.push(preview_.length % (Math.max(8, preview_.length)));
      }
      while (3 < (3 - preview_.length)) {
         preview_ = [preview_.length / (Math.max(preview_.length, 6))];
         break;
      }
      if ((preview_.length >> (Math.min(preview_.length, 1))) == 3 && 2 == (3 >> (Math.min(2, preview_.length)))) {
          let awayiconf = 0.0;
          let h_playerB = new Map([[String.fromCharCode(100,95,57,53,0),133], [String.fromCharCode(116,95,51,53,95,105,97,100,115,116,120,0),15]]);
          let kickm = String.fromCharCode(103,95,52,48,95,114,101,109,97,105,110,100,101,114,0);
          let sportsh = true;
          let m_player_ = String.fromCharCode(119,95,57,49,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0);
         preview_.push(kickm.length + 2);
         awayiconf /= Math.max(1, parseInt(`${awayiconf}`) | m_player_.length);
         h_playerB = new Map([[m_player_, 2]]);
         kickm = `${(String.fromCharCode(121,0) == m_player_ ? m_player_.length : h_playerB.size)}`;
         sportsh = (((!sportsh ? 99 : m_player_.length) | m_player_.length) < 99);
      }
      charta = `${parseInt(`${switch_z_}`)}`;
   }
   if (!membership0.includes(`${kuaishou4}`)) {
      kuaishou4 *= parseInt(`${libfabricjnih}`);
   }
      let item = data.incidents.findIndex(
        x => x.type == 3 && x.player != undefined && x.player?.id == data.id,
      );
      buttona += `${parseInt(`${switch_z_}`) & 2}`;
      iconbellt = (parseFloat(`${buttona.length}`) + switch_z_) < 95.6;
      iconbellt = imagenetworkerrs.length >= 66;

      if (item != undefined && item != -1) {

      membership0 = "2";
       let productA = [889, 495];
         productA = [productA.length % 3];
          let googleL = new Map([[String.fromCharCode(113,95,51,48,95,112,107,101,121,0),427], [String.fromCharCode(98,111,114,100,101,114,95,105,95,56,57,0),402]]);
          let defaultprofilepicV = false;
         productA = [productA.length];
         googleL[`${googleL.size}`] = 2 * googleL.size;
         defaultprofilepicV = (googleL.size % (Math.max(8, googleL.size))) < 6;
      do {
         productA.push(productA.length);
         if (productA.length == 1310844) {
            break;
         }
      } while ((productA.length < 2) && (productA.length == 1310844));
      membership0 = `${2 + productA.length}`;
   for (let i = 0; i < 1; i++) {
      kuaishou4 -= 1;
   }
        return true;
      } else {

   while ((kuaishou4 ^ 3) <= 1) {
      kuaishou4 <<= Math.min(membership0.length, 4);
      break;
   }
      iconbellt = 29.89 > unfille || iconbellt;
   do {
       let fastM = [231, 220, 618];
       let thumbnail7 = true;
       let sportsn = 0.0;
      if (4.28 >= sportsn) {
          let tempnodatagifp = 3;
         thumbnail7 = 14.21 <= sportsn;
         tempnodatagifp ^= 3 ^ tempnodatagifp;
      }
      if (3.21 == sportsn && (sportsn - 3.21) == 3.96) {
          let libcxxcomponentsD = false;
         thumbnail7 = sportsn <= 11.74 || thumbnail7;
         libcxxcomponentsD = (libcxxcomponentsD ? !libcxxcomponentsD : !libcxxcomponentsD);
      }
      if (1 <= (parseInt(`${sportsn}`) + fastM.length)) {
         fastM = [parseInt(`${sportsn}`)];
      }
      do {
         fastM = [(parseInt(`${sportsn}`) ^ (thumbnail7 ? 5 : 5))];
         if (fastM.length == 1505368) {
            break;
         }
      } while ((1 <= fastM.length) && (fastM.length == 1505368));
      for (let d = 0; d < 1; d++) {
         sportsn *= fastM.length;
      }
      iconbellt = buttona == charta;
      if (iconbellt ? !iconbellt : iconbellt) {
         break;
      }
   } while ((iconbellt ? !iconbellt : iconbellt) && (penaltyshootnogoal1.length == 4));
        return false;
   if (!iconbellt) {
       let webviewK = false;
       let gesturesa = String.fromCharCode(116,114,97,110,115,113,117,97,110,116,95,98,95,57,57,0);
       let gpayl = true;
       let bellreminderm = [599, 876];
       let resend8 = 3;
      for (let l = 0; l < 1; l++) {
         gpayl = !gpayl;
      }
      while (gesturesa.endsWith(`${gpayl}`)) {
         gpayl = gesturesa.length >= 20 && !gpayl;
         break;
      }
      do {
          let remindere = String.fromCharCode(116,121,112,95,112,95,50,50,0);
          let m_countn = String.fromCharCode(102,97,117,108,116,95,53,95,55,52,0);
          let nativemodule3 = String.fromCharCode(122,95,54,95,112,111,115,115,105,98,108,121,0);
         gesturesa = `${remindere.length}`;
         remindere = `${m_countn.length << (Math.min(2, nativemodule3.length))}`;
         m_countn = "3";
         nativemodule3 = `${(nativemodule3 == String.fromCharCode(108,0) ? m_countn.length : nativemodule3.length)}`;
         if (gesturesa.length == 4779135) {
            break;
         }
      } while ((gesturesa.length == 4779135) && (5 == gesturesa.length));
      if ((resend8 & 3) >= 3 || 2 >= (3 & resend8)) {
         bellreminderm = [3 - gesturesa.length];
      }
      do {
          let matchinactiveO = String.fromCharCode(105,95,50,95,101,120,112,114,101,115,115,105,111,110,115,0);
          let moreH = 0.0;
         webviewK = 51 > bellreminderm.length;
         matchinactiveO = `${parseInt(`${moreH}`) - matchinactiveO.length}`;
         moreH *= 3 ^ matchinactiveO.length;
         if (webviewK ? !webviewK : webviewK) {
            break;
         }
      } while ((gesturesa.includes(`${webviewK}`)) && (webviewK ? !webviewK : webviewK));
      if (!gpayl) {
         gpayl = bellreminderm.length == 11;
      }
         gesturesa += `${gesturesa.length << (Math.min(Math.abs(3), 1))}`;
         gpayl = gesturesa.length > 53;
          let windL = 2.0;
          let reactnavigationN = true;
         bellreminderm.push((3 >> (Math.min(Math.abs((reactnavigationN ? 4 : 2)), 1))));
         windL -= parseFloat(`${3 - parseInt(`${windL}`)}`);
         reactnavigationN = windL <= windL;
      if (!bellreminderm.includes(resend8)) {
         resend8 |= (2 << (Math.min(3, Math.abs((gpayl ? 1 : 4)))));
      }
         gesturesa += `${2 ^ gesturesa.length}`;
          let backiconi = 2.0;
          let sharemodalu = true;
         gesturesa = `${((sharemodalu ? 5 : 3) << (Math.min(3, Math.abs((webviewK ? 3 : 4)))))}`;
         backiconi *= parseFloat(`${parseInt(`${backiconi}`)}`);
         sharemodalu = 49.12 < backiconi;
      if ((gesturesa.length & bellreminderm.length) == 1) {
          let x_positioni = 4.0;
          let viewsQ = 2.0;
          let nalytics4 = new Map([[String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,121,95,55,54,0),625], [String.fromCharCode(111,95,49,48,48,95,109,101,110,116,105,111,110,0),416]]);
         gesturesa = `${(bellreminderm.length - (webviewK ? 2 : 4))}`;
         x_positioni += parseInt(`${x_positioni}`) + parseInt(`${viewsQ}`);
         viewsQ /= Math.max(parseFloat(`${1}`), 4);
         nalytics4[`${x_positioni}`] = 1 / (Math.max(6, parseInt(`${viewsQ}`)));
      }
         bellreminderm.push(bellreminderm.length);
      while (!gesturesa.startsWith(`${webviewK}`)) {
          let inouttargetred8 = false;
         webviewK = !webviewK;
         inouttargetred8 = !inouttargetred8;
         break;
      }
      buttona += `${charta.length}`;
   }
   if (unfille <= 1.25) {
      unfille += (buttona.length - (iconbellt ? 3 : 2));
   }
      iconbellt = !buttona.startsWith(`${libfabricjnih}`);

      }
    }
  };

  let checkRedCard = () => {
       let shielddonee = String.fromCharCode(115,121,115,105,110,102,111,95,108,95,52,50,0);
    let iconplayx = String.fromCharCode(97,114,109,111,110,121,95,102,95,49,57,0);
    let largeM = 2.0;
    let update_jcN = String.fromCharCode(98,95,57,49,95,99,111,108,108,97,116,105,111,110,0);
    let chinaU = 3.0;
    let suboutd = new Map([[String.fromCharCode(115,95,57,95,116,101,109,112,115,0),210], [String.fromCharCode(121,95,52,50,95,119,105,116,104,0),572]]);
    let arrowrightu = String.fromCharCode(114,101,118,111,107,97,98,108,101,95,54,95,57,52,0);
    let currentP = String.fromCharCode(109,117,108,115,117,98,95,103,95,50,52,0);
    let networkV = 4;
    let libpangleflippedA = String.fromCharCode(107,95,51,50,95,109,105,120,0);
    let membershipR = 5.0;
   for (let p = 0; p < 3; p++) {
       let cnews1 = String.fromCharCode(110,95,53,51,95,116,114,97,99,107,101,100,0);
         cnews1 = `${cnews1.length / (Math.max(cnews1.length, 3))}`;
      do {
         cnews1 += `${cnews1.length * cnews1.length}`;
         if (cnews1 == String.fromCharCode(99,111,54,119,115,53,101,116,112,56,0)) {
            break;
         }
      } while ((cnews1 == String.fromCharCode(99,111,54,119,115,53,101,116,112,56,0)) && (cnews1.includes(cnews1)));
      do {
         cnews1 += `${1 << (Math.min(1, cnews1.length))}`;
         if (cnews1.length == 14308) {
            break;
         }
      } while ((!cnews1.startsWith(cnews1)) && (cnews1.length == 14308));
      suboutd[`${networkV}`] = iconplayx.length | networkV;
   }
      libpangleflippedA += "3";
       let umengV = String.fromCharCode(103,95,49,49,95,116,105,99,107,0);
          let footballfiledlayouto = [166, 857];
          let xvodE = 5.0;
          let str1 = new Map([[String.fromCharCode(121,101,116,95,53,95,54,54,0),764], [String.fromCharCode(115,95,54,54,95,97,116,114,0),299]]);
         umengV += `${str1.size}`;
         footballfiledlayouto = [parseInt(`${xvodE}`)];
         xvodE -= parseFloat(`${footballfiledlayouto.length % (Math.max(1, 7))}`);
         str1[`${xvodE}`] = 3 & parseInt(`${xvodE}`);
      if (umengV.length == umengV.length) {
         umengV = "1";
      }
      for (let p = 0; p < 1; p++) {
         umengV = `${2 % (Math.max(6, umengV.length))}`;
      }
      iconplayx = "1";
   if (libpangleflippedA == currentP) {
      currentP = `${arrowrightu.length}`;
   }

    if (data.incidents != undefined && data.incidents.length > 0) {

   for (let z = 0; z < 3; z++) {
       let leftC = 3;
       let constantsh = 3.0;
      do {
          let tickd = false;
          let iconcalendarc = 4.0;
          let orientationP = 0.0;
         leftC %= Math.max(1, parseInt(`${iconcalendarc}`));
         tickd = 22.34 > orientationP && !tickd;
         orientationP /= Math.max(2, ((tickd ? 2 : 1) % (Math.max(parseInt(`${orientationP}`), 1))));
         if (3415807 == leftC) {
            break;
         }
      } while ((3415807 == leftC) && ((leftC / (Math.max(constantsh, 4))) < 5.45));
      while ((constantsh * 3.83) < 4.59) {
         leftC &= 1 << (Math.min(Math.abs(parseInt(`${constantsh}`)), 5));
         break;
      }
      while (3.47 < (constantsh * 5.58) && 3.73 < (5.58 * constantsh)) {
          let spinnera = String.fromCharCode(98,95,52,55,95,104,97,110,100,111,118,101,114,0);
          let pauses = String.fromCharCode(102,95,49,54,95,98,101,102,111,114,101,0);
          let tempnodatagifx = 0;
          let push2 = [87, 627, 380];
         constantsh += 1;
         spinnera += `${pauses.length | spinnera.length}`;
         pauses = "2";
         tempnodatagifx |= 2 >> (Math.min(5, push2.length));
         push2 = [pauses.length - spinnera.length];
         break;
      }
          let detailb = String.fromCharCode(117,112,108,111,97,100,101,100,95,110,95,54,0);
          let sentryA = [505, 310];
         leftC -= 2 | sentryA.length;
         detailb += `${3 + detailb.length}`;
         sentryA.push(detailb.length >> (Math.min(Math.abs(3), 3)));
      for (let o = 0; o < 2; o++) {
          let navigationW = String.fromCharCode(111,95,55,57,95,117,114,108,100,101,99,111,100,101,0);
         constantsh -= parseInt(`${constantsh}`) / (Math.max(navigationW.length, 1));
      }
         leftC &= 2 - leftC;
      arrowrightu = `${suboutd.size}`;
   }
       let update_i4 = [396, 248];
       let issubg = 3.0;
       let backwhiteP = 4.0;
      while ((parseFloat(`${update_i4.length}`) * issubg) < 4.82) {
          let searchG = 3.0;
          let iconplayR = new Map([[String.fromCharCode(105,95,54,54,95,112,97,116,99,104,115,101,116,0),284], [String.fromCharCode(110,95,56,52,95,98,97,116,116,101,114,121,0),286], [String.fromCharCode(115,95,54,50,95,112,114,101,105,110,105,116,0),579]]);
          let w_animationF = true;
         issubg -= parseFloat(`${3}`);
         searchG *= parseInt(`${searchG}`) ^ 2;
         iconplayR = new Map([[`${iconplayR.size}`, 1]]);
         w_animationF = !w_animationF;
         break;
      }
         backwhiteP /= Math.max(2, parseFloat(`${parseInt(`${issubg}`) << (Math.min(Math.abs(parseInt(`${backwhiteP}`)), 4))}`));
      for (let q = 0; q < 3; q++) {
         issubg -= parseFloat(`${1}`);
      }
          let ewardedF = String.fromCharCode(107,95,51,53,95,121,117,108,101,0);
         issubg += parseFloat(`${ewardedF.length}`);
      while (5.33 <= (backwhiteP * 4.33) || (parseInt(`${backwhiteP}`) * update_i4.length) <= 3) {
         backwhiteP *= parseFloat(`${parseInt(`${issubg}`) >> (Math.min(Math.abs(parseInt(`${backwhiteP}`)), 4))}`);
         break;
      }
       let teamA = String.fromCharCode(120,105,110,99,95,101,95,57,52,0);
         issubg *= parseFloat(`${parseInt(`${backwhiteP}`) % (Math.max(2, teamA.length))}`);
      while (4.60 > (2.17 + backwhiteP) || (2.17 - backwhiteP) > 1.18) {
         backwhiteP -= (parseFloat(`${String.fromCharCode(68,0) == teamA ? parseInt(`${backwhiteP}`) : teamA.length}`));
         break;
      }
          let defaultfootballbgF = 1.0;
          let predictionbannerb = String.fromCharCode(113,95,49,56,95,105,110,112,108,105,99,105,116,101,108,121,0);
         backwhiteP -= parseFloat(`${predictionbannerb.length + teamA.length}`);
         defaultfootballbgF *= parseFloat(`${parseInt(`${defaultfootballbgF}`)}`);
         predictionbannerb += `${parseInt(`${defaultfootballbgF}`) << (Math.min(4, Math.abs(1)))}`;
      chinaU += parseFloat(`${suboutd.size ^ parseInt(`${chinaU}`)}`);
       let targetF = true;
       let mbbid3 = 4.0;
       let imageactionlive7 = new Map([[String.fromCharCode(109,105,103,104,116,95,108,95,53,56,0),174], [String.fromCharCode(109,101,108,116,95,53,95,51,48,0),41], [String.fromCharCode(103,95,55,53,95,103,117,105,100,101,115,0),554]]);
       let volumet = new Map([[String.fromCharCode(117,95,49,54,95,99,111,110,102,108,105,99,116,105,110,103,0),598], [String.fromCharCode(114,95,50,53,95,115,117,109,97,114,121,0),726], [String.fromCharCode(100,95,56,57,95,121,117,118,0),543]]);
      do {
         mbbid3 += volumet.size * imageactionlive7.size;
         if (mbbid3 == 793806.0) {
            break;
         }
      } while ((mbbid3 == 793806.0) && ((4 - imageactionlive7.size) == 1 && 2 == (imageactionlive7.size + 4)));
      do {
         volumet = new Map([[`${mbbid3}`, 2 | parseInt(`${mbbid3}`)]]);
         if (volumet.size == 3399938) {
            break;
         }
      } while ((volumet.size == 3399938) && (volumet[`${mbbid3}`] == null));
      while (targetF) {
          let edits = String.fromCharCode(103,95,49,55,95,109,105,115,109,97,116,99,104,0);
          let subinh = String.fromCharCode(113,95,55,48,95,115,99,114,97,112,101,0);
          let libcrashsdkZ = true;
         targetF = targetF || 9.93 < mbbid3;
         edits += "2";
         subinh += "2";
         libcrashsdkZ = !libcrashsdkZ;
         break;
      }
      if (4 <= (imageactionlive7.size % 5) || (5 % (Math.max(10, imageactionlive7.size))) <= 2) {
          let arrowup5 = 2.0;
          let iconschedulet = 1.0;
          let xadsdk_ = new Map([[String.fromCharCode(115,97,99,107,95,113,95,49,51,0),52], [String.fromCharCode(106,95,53,49,95,115,101,99,0),36], [String.fromCharCode(105,95,57,55,95,116,114,97,110,115,102,101,114,101,100,0),390]]);
          let iconorientationQ = new Map([[String.fromCharCode(107,95,50,55,95,100,118,100,115,117,98,0),String.fromCharCode(108,95,56,51,95,112,99,97,99,104,101,0)], [String.fromCharCode(112,114,107,95,122,95,53,53,0),String.fromCharCode(114,95,56,57,0)]]);
         imageactionlive7[`${mbbid3}`] = 1 / (Math.max(5, imageactionlive7.size));
         arrowup5 += iconorientationQ.size | xadsdk_.size;
         iconschedulet *= parseFloat(`${parseInt(`${arrowup5}`)}`);
         xadsdk_ = new Map([[`${iconorientationQ.size}`, iconorientationQ.size]]);
      }
          let downu = new Map([[String.fromCharCode(120,95,50,50,95,105,110,118,102,0),476], [String.fromCharCode(115,99,105,105,95,110,95,57,53,0),366], [String.fromCharCode(119,95,56,49,95,102,114,97,109,101,100,0),48]]);
          let sigmob7 = 1;
         mbbid3 -= downu.size;
         downu[`${sigmob7}`] = sigmob7;
      largeM *= 2;
      suboutd = new Map([[arrowrightu, 3]]);
      let item = data.incidents.findIndex(
        x => x.type == 4 && x.player != undefined && x.player?.id == data.id,
      );
   for (let c = 0; c < 2; c++) {
      arrowrightu += `${parseInt(`${chinaU}`) - 3}`;
   }
   if (networkV >= shielddonee.length) {
       let with_mt = new Map([[String.fromCharCode(111,110,101,111,102,95,111,95,52,53,0),String.fromCharCode(119,114,105,116,101,111,117,116,95,122,95,53,48,0)], [String.fromCharCode(99,97,109,101,114,97,95,111,95,53,56,0),String.fromCharCode(98,95,50,53,95,108,111,97,100,105,110,103,0)]]);
       let cross8 = 4.0;
       let vietnamX = true;
       let rewindA = false;
          let showless5 = 1.0;
         cross8 -= (parseInt(`${cross8}`) % (Math.max(4, (rewindA ? 1 : 4))));
         showless5 -= parseFloat(`${parseInt(`${showless5}`) | 2}`);
         cross8 -= with_mt.size;
      for (let n = 0; n < 1; n++) {
         rewindA = null == with_mt[`${vietnamX}`];
      }
         with_mt = new Map([[`${with_mt.size}`, parseInt(`${cross8}`) / (Math.max(with_mt.size, 8))]]);
       let activeI = 4;
       let sigmobT = 3;
          let settingy = 2.0;
          let vietnamH = String.fromCharCode(117,110,116,114,117,115,116,101,100,95,103,95,57,57,0);
         with_mt[`${activeI}`] = activeI;
         settingy *= parseFloat(`${2}`);
         vietnamH += `${(String.fromCharCode(55,0) == vietnamH ? parseInt(`${settingy}`) : vietnamH.length)}`;
       let launcheri = String.fromCharCode(102,102,117,114,108,95,57,95,50,0);
         activeI /= Math.max(4, activeI | parseInt(`${cross8}`));
          let crossn = [420, 636, 221];
          let crownU = true;
         activeI &= 3 % (Math.max(10, sigmobT));
         crossn = [((crownU ? 3 : 4) * crossn.length)];
         crownU = !crownU;
      if (!rewindA) {
         activeI &= ((rewindA ? 1 : 2) / (Math.max(with_mt.size, 7)));
      }
      do {
          let tumbnailJ = String.fromCharCode(116,95,49,55,95,116,111,97,115,116,0);
          let currentF = new Map([[String.fromCharCode(107,95,52,49,95,100,111,119,110,108,105,110,107,0),String.fromCharCode(103,97,105,110,99,95,51,95,51,56,0)], [String.fromCharCode(105,95,57,50,95,114,116,108,0),String.fromCharCode(112,101,99,101,110,116,95,98,95,49,49,0)], [String.fromCharCode(109,95,55,51,95,105,100,101,110,116,0),String.fromCharCode(117,95,49,55,95,115,105,109,117,108,97,116,101,0)]]);
          let orangeclockK = String.fromCharCode(120,95,55,50,95,109,97,105,110,115,116,97,103,101,0);
          let data7 = false;
         launcheri = `${sigmobT}`;
         tumbnailJ += "3";
         currentF = new Map([[`${currentF.size}`, (currentF.size << (Math.min(3, Math.abs((data7 ? 4 : 3)))))]]);
         orangeclockK = `${tumbnailJ.length}`;
         if (launcheri == String.fromCharCode(101,119,119,110,100,99,122,104,111,49,0)) {
            break;
         }
      } while ((3 >= (launcheri.length & activeI)) && (launcheri == String.fromCharCode(101,119,119,110,100,99,122,104,111,49,0)));
      do {
         with_mt[`${vietnamX}`] = ((vietnamX ? 4 : 3) | with_mt.size);
         if (2255187 == with_mt.size) {
            break;
         }
      } while ((2255187 == with_mt.size) && ((with_mt.size % 4) == 1 || 4 == (sigmobT % 4)));
      shielddonee = "3";
   }
   do {
      suboutd[shielddonee] = (shielddonee == String.fromCharCode(67,0) ? shielddonee.length : update_jcN.length);
      if (3351426 == suboutd.size) {
         break;
      }
   } while ((3351426 == suboutd.size) && (currentP.startsWith(`${suboutd.size}`)));
   while ((currentP.length + networkV) > 4) {
      networkV %= Math.max(shielddonee.length, 1);
      break;
   }

      if (item != undefined && item != -1) {

      networkV += currentP.length;
   do {
      libpangleflippedA = "2";
      if (3968282 == libpangleflippedA.length) {
         break;
      }
   } while ((libpangleflippedA.length <= shielddonee.length) && (3968282 == libpangleflippedA.length));
   do {
       let iconmore6 = [String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,118,95,57,56,0), String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,95,112,95,57,53,0)];
       let reactnativejsI = String.fromCharCode(101,95,52,52,95,103,111,110,101,0);
         reactnativejsI += `${iconmore6.length}`;
          let whiteanimationlive3 = new Map([[String.fromCharCode(112,95,56,95,109,111,99,107,101,100,0),true ], [String.fromCharCode(100,95,55,57,95,115,105,103,110,97,116,117,114,101,0),false ]]);
          let loginsuccessY = [776, 498];
          let questa = new Map([[String.fromCharCode(102,95,54,56,95,98,117,105,108,100,99,111,110,102,0),true ], [String.fromCharCode(111,95,55,50,95,99,111,108,111,114,109,97,116,114,105,120,0),true ], [String.fromCharCode(101,120,116,101,114,110,97,108,95,98,95,53,0),true ]]);
         reactnativejsI = `${loginsuccessY.length + 2}`;
         whiteanimationlive3[`${whiteanimationlive3.size}`] = questa.size;
         loginsuccessY = [3 & whiteanimationlive3.size];
         questa = new Map([[`${whiteanimationlive3.size}`, 1 + questa.size]]);
          let libsentryB = String.fromCharCode(100,95,56,56,95,109,111,110,111,116,111,110,105,99,0);
         reactnativejsI = `${reactnativejsI.length / (Math.max(4, libsentryB.length))}`;
      if (1 >= (reactnativejsI.length | iconmore6.length)) {
          let othermatchdetailbgw = [683, 292, 539];
          let f_lockP = String.fromCharCode(98,95,51,57,95,105,110,116,101,114,112,114,101,116,0);
         reactnativejsI += `${othermatchdetailbgw.length}`;
         othermatchdetailbgw = [3 + f_lockP.length];
         f_lockP += `${f_lockP.length}`;
      }
      do {
          let sharemodalV = 1;
          let whitevideoliveE = [String.fromCharCode(114,101,115,105,100,117,101,95,55,95,52,52,0), String.fromCharCode(106,95,49,53,95,104,105,103,104,101,114,0)];
          let libavdeviceP = String.fromCharCode(101,97,103,101,114,95,108,95,49,55,0);
         iconmore6 = [whitevideoliveE.length];
         sharemodalV %= Math.max(4, sharemodalV + 2);
         whitevideoliveE.push(2);
         libavdeviceP += `${3 * libavdeviceP.length}`;
         if (4122666 == iconmore6.length) {
            break;
         }
      } while ((2 >= (iconmore6.length / (Math.max(1, reactnativejsI.length))) && 1 >= (reactnativejsI.length / 2)) && (4122666 == iconmore6.length));
      for (let y = 0; y < 1; y++) {
          let time_118 = String.fromCharCode(111,95,55,49,95,103,101,115,116,117,114,101,0);
          let orange0 = String.fromCharCode(122,95,55,56,95,115,105,110,113,98,0);
          let textc = true;
         reactnativejsI += `${(iconmore6.length / (Math.max(7, (textc ? 4 : 4))))}`;
         time_118 = `${3 >> (Math.min(3, time_118.length))}`;
         orange0 += "3";
         textc = 82 == orange0.length;
      }
      currentP += `${(String.fromCharCode(49,0) == shielddonee ? shielddonee.length : update_jcN.length)}`;
      if (String.fromCharCode(120,115,48,52,122,51,106,0) == currentP) {
         break;
      }
   } while ((String.fromCharCode(120,115,48,52,122,51,106,0) == currentP) && ((suboutd.size << (Math.min(Math.abs(2), 2))) > 5));
       let final_6hz = String.fromCharCode(102,111,99,117,115,101,100,95,52,95,52,57,0);
       let profileactiveI = String.fromCharCode(116,105,108,101,95,120,95,49,54,0);
          let roundL = true;
         final_6hz += `${final_6hz.length}`;
         roundL = !roundL;
         final_6hz += `${final_6hz.length}`;
          let positionfieldA = String.fromCharCode(116,105,108,101,95,119,95,55,53,0);
          let libreactperfloggerjnid = String.fromCharCode(102,95,55,48,95,111,116,111,98,0);
         final_6hz = `${profileactiveI.length * 3}`;
         positionfieldA += `${libreactperfloggerjnid.length}`;
         libreactperfloggerjnid = `${positionfieldA.length}`;
      do {
         profileactiveI = `${profileactiveI.length}`;
         if (profileactiveI.length == 4055258) {
            break;
         }
      } while ((final_6hz.length > profileactiveI.length) && (profileactiveI.length == 4055258));
         profileactiveI = `${final_6hz.length}`;
       let moref = 3;
       let analyticsY = 2;
      chinaU -= parseFloat(`${arrowrightu.length + 2}`);
        return true;
      } else {

   if (1 == (libpangleflippedA.length + parseInt(`${largeM}`)) || (libpangleflippedA.length % (Math.max(1, 6))) == 4) {
      largeM *= 1 | parseInt(`${chinaU}`);
   }
      chinaU += parseFloat(`${3}`);
       let rootI = 2.0;
       let placeholderw = new Map([[String.fromCharCode(104,108,105,116,95,113,95,49,0),true ], [String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,121,95,53,49,0),true ], [String.fromCharCode(102,105,114,115,116,108,121,95,105,95,52,57,0),true ]]);
          let scorec = [32, 565];
          let forma = new Map([[String.fromCharCode(103,95,51,55,95,112,117,114,112,111,115,101,102,117,108,0),58], [String.fromCharCode(100,95,53,53,95,97,105,116,101,114,0),551], [String.fromCharCode(104,95,48,95,118,109,97,102,0),697]]);
          let sound2 = 2.0;
         rootI /= Math.max(2, parseFloat(`${parseInt(`${sound2}`)}`));
         scorec.push(forma.size);
         forma[`${scorec.length}`] = 1;
         sound2 *= parseFloat(`${forma.size}`);
         rootI /= Math.max(parseFloat(`${parseInt(`${rootI}`) >> (Math.min(Math.abs(placeholderw.size), 4))}`), 4);
      if (parseFloat(`${placeholderw.size}`) >= rootI) {
         placeholderw = new Map([[`${placeholderw.size}`, placeholderw.size]]);
      }
      if (1 < (placeholderw.size - parseInt(`${rootI}`)) || (rootI - parseFloat(`${placeholderw.size}`)) < 1.95) {
          let scorepopsound1 = 1.0;
          let signinupE = [648, 484];
          let bdxadsdk2 = String.fromCharCode(109,97,120,105,109,105,122,101,100,95,106,95,51,51,0);
          let bgvipsportQ = String.fromCharCode(107,95,56,57,95,114,101,117,112,108,111,97,100,101,100,0);
         rootI -= parseFloat(`${2}`);
         scorepopsound1 *= parseFloat(`${bdxadsdk2.length}`);
         signinupE.push(parseInt(`${scorepopsound1}`) - 2);
         bdxadsdk2 = "1";
         bgvipsportQ = `${signinupE.length >> (Math.min(Math.abs(2), 1))}`;
      }
          let airbnbstarselectedk = String.fromCharCode(102,95,56,52,95,99,104,117,110,107,115,0);
          let placementb = 5.0;
          let mbnativeT = false;
         placeholderw = new Map([[airbnbstarselectedk, airbnbstarselectedk.length >> (Math.min(3, Math.abs(parseInt(`${rootI}`))))]]);
         placementb += parseFloat(`${2 - parseInt(`${placementb}`)}`);
         mbnativeT = placementb == 28.4;
      for (let h = 0; h < 2; h++) {
          let defaultbasketballbgw = new Map([[String.fromCharCode(103,95,51,57,95,100,101,103,114,101,101,0),59], [String.fromCharCode(107,95,56,48,95,118,112,100,120,0),271]]);
          let mbjscommonr = 1.0;
          let telemetryQ = String.fromCharCode(108,95,55,56,95,118,97,114,121,0);
          let benefita = [String.fromCharCode(97,95,49,55,95,114,101,116,117,114,110,0), String.fromCharCode(104,97,100,111,119,115,95,107,95,51,57,0)];
         placeholderw[`${mbjscommonr}`] = 3;
         defaultbasketballbgw[telemetryQ] = telemetryQ.length;
         mbjscommonr -= benefita.length / 1;
         benefita.push(1 ^ benefita.length);
      }
      shielddonee += `${1 & placeholderw.size}`;
   for (let l = 0; l < 1; l++) {
      largeM += suboutd.size;
   }
        return false;
   for (let w = 0; w < 3; w++) {
      arrowrightu = `${parseInt(`${largeM}`) - suboutd.size}`;
   }
   do {
      arrowrightu = `${1 | parseInt(`${largeM}`)}`;
      if (arrowrightu == String.fromCharCode(118,105,101,48,120,111,0)) {
         break;
      }
   } while ((currentP == arrowrightu) && (arrowrightu == String.fromCharCode(118,105,101,48,120,111,0)));
   do {
      arrowrightu = "2";
      if (arrowrightu == String.fromCharCode(120,103,105,97,116,0)) {
         break;
      }
   } while ((arrowrightu == String.fromCharCode(120,103,105,97,116,0)) && (networkV >= 4));
      iconplayx = `${2 ^ iconplayx.length}`;

      }
    }
  };

  let checkYellowToRedCard = () => {
       let p_managerc = String.fromCharCode(116,111,112,105,99,97,108,95,56,95,52,57,0);
    let lessr = new Map([[String.fromCharCode(99,111,110,115,111,108,101,95,55,95,55,0),644], [String.fromCharCode(99,111,114,114,101,99,116,101,100,95,49,95,54,53,0),447]]);
    let vnewinterstitialJ = 1.0;
    let floaterJ = String.fromCharCode(97,100,109,105,110,95,114,95,55,48,0);
    let nativeN = [26, 286, 434];
    let wifirouter1 = false;
    let smallsoundE = 0.0;
    let libimagepipelinet = 5.0;
    let iconlogoutH = 1.0;
    let colorsN = 2.0;
    let predictionlossn = String.fromCharCode(119,95,54,56,95,115,117,98,109,105,116,0);
    let utilsX = false;
    let containeru = String.fromCharCode(116,101,120,116,115,95,105,95,52,52,0);
      wifirouter1 = wifirouter1 || lessr.size <= 51;
       let orangeM = 0.0;
       let iconclosewhitebgV = [319, 145, 13];
      if (iconclosewhitebgV.includes(orangeM)) {
         iconclosewhitebgV = [parseInt(`${orangeM}`)];
      }
          let g_titleF = new Map([[String.fromCharCode(114,95,57,48,95,114,101,99,101,105,118,105,110,103,0),364], [String.fromCharCode(116,95,57,95,117,116,102,0),970], [String.fromCharCode(111,112,101,110,95,48,95,54,54,0),253]]);
         orangeM /= Math.max(4, parseFloat(`${parseInt(`${orangeM}`)}`));
         g_titleF[`${g_titleF.size}`] = g_titleF.size;
         iconclosewhitebgV.push(2 | parseInt(`${orangeM}`));
      if (5.53 >= (3.37 - orangeM)) {
          let runtimeschedulerB = 0.0;
          let libreactJ = true;
          let specE = 1.0;
         orangeM += (parseFloat(`${parseInt(`${orangeM}`) % (Math.max(8, (libreactJ ? 5 : 5)))}`));
         runtimeschedulerB -= parseFloat(`${parseInt(`${specE}`)}`);
         libreactJ = 34.90 < runtimeschedulerB || 34.90 < specE;
      }
       let largebrightnessX = [420, 483, 719];
         iconclosewhitebgV = [parseInt(`${orangeM}`) / 3];
      vnewinterstitialJ *= parseFloat(`${2 + nativeN.length}`);
   while (utilsX && 2 >= (lessr.size / (Math.max(2, 6)))) {
       let minimizeE = String.fromCharCode(105,95,55,49,95,102,116,114,117,110,99,97,116,101,0);
       let rewardvideor = String.fromCharCode(101,112,115,105,108,111,110,95,49,95,54,52,0);
       let countdown5 = String.fromCharCode(97,95,57,56,95,112,111,111,108,114,101,102,0);
       let typingH = false;
       let progress2 = String.fromCharCode(108,95,51,55,95,113,117,101,115,116,105,111,110,115,0);
          let baiduF = 0;
          let homeactiveN = String.fromCharCode(105,95,54,54,95,98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,0);
         minimizeE += "2";
         baiduF >>= Math.min(Math.abs((homeactiveN == String.fromCharCode(73,0) ? homeactiveN.length : baiduF)), 2);
          let sentryQ = new Map([[String.fromCharCode(98,105,116,118,101,99,95,54,95,54,48,0),983], [String.fromCharCode(98,101,122,105,101,114,95,109,95,55,51,0),397]]);
          let arrowupF = 5.0;
         countdown5 += `${(String.fromCharCode(95,0) == minimizeE ? rewardvideor.length : minimizeE.length)}`;
         sentryQ[`${arrowupF}`] = parseInt(`${arrowupF}`);
         rewardvideor = `${1 * minimizeE.length}`;
          let libzeusx = 4.0;
          let bellreminderg = String.fromCharCode(107,95,52,54,95,97,110,97,108,111,103,0);
         progress2 = `${1 + rewardvideor.length}`;
         libzeusx *= parseInt(`${libzeusx}`);
         bellreminderg = `${parseInt(`${libzeusx}`)}`;
         countdown5 += `${(String.fromCharCode(81,0) == countdown5 ? countdown5.length : (typingH ? 3 : 5))}`;
          let incidenty = String.fromCharCode(99,95,50,54,95,119,97,110,116,0);
         rewardvideor = `${(String.fromCharCode(120,0) == progress2 ? progress2.length : countdown5.length)}`;
         incidenty = "1";
         countdown5 = `${((typingH ? 4 : 2))}`;
      for (let q = 0; q < 3; q++) {
         minimizeE += "1";
      }
      if (!typingH && 2 <= progress2.length) {
          let toponN = String.fromCharCode(109,111,100,101,108,95,52,95,51,49,0);
          let klevin8 = String.fromCharCode(120,95,52,54,95,114,97,116,105,110,103,0);
          let overlaym = 4.0;
         typingH = overlaym < 31.95 && typingH;
         toponN += `${klevin8.length ^ 3}`;
         klevin8 += `${2 - klevin8.length}`;
         overlaym -= toponN.length;
      }
         typingH = minimizeE == rewardvideor;
         rewardvideor += `${countdown5.length}`;
       let iconclose9 = String.fromCharCode(102,95,50,57,95,99,105,110,97,117,100,105,111,0);
         rewardvideor = `${iconclose9.length}`;
          let main_m3 = String.fromCharCode(97,99,99,95,112,95,49,0);
         progress2 += `${iconclose9.length % 3}`;
         main_m3 += `${main_m3.length % (Math.max(8, main_m3.length))}`;
          let servicef = true;
          let gradleX = 5;
         progress2 = "3";
         servicef = !servicef;
         gradleX += (gradleX ^ (servicef ? 3 : 1));
      utilsX = countdown5.length == 65;
      break;
   }
   for (let o = 0; o < 2; o++) {
       let vietnamG = 0;
         vietnamG %= Math.max(5, 1 * vietnamG);
         vietnamG <<= Math.min(1, Math.abs(2));
      while (1 < vietnamG) {
         vietnamG |= vietnamG;
         break;
      }
      floaterJ = "1";
   }
      lessr = new Map([[`${nativeN.length}`, nativeN.length - 3]]);

    if (data.incidents != undefined && data.incidents.length > 0) {

      p_managerc += "2";
   for (let j = 0; j < 3; j++) {
       let arrowrightJ = String.fromCharCode(121,95,53,51,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
      for (let o = 0; o < 1; o++) {
         arrowrightJ += `${arrowrightJ.length % 2}`;
      }
      if (arrowrightJ.length == 1) {
          let application4 = 0.0;
          let application_ = 5;
          let libavformat6 = 4;
         arrowrightJ = `${3 * arrowrightJ.length}`;
         application4 += libavformat6 << (Math.min(Math.abs(2), 2));
         application_ >>= Math.min(Math.abs(2), 3);
         libavformat6 ^= application_;
      }
         arrowrightJ = `${arrowrightJ.length}`;
      vnewinterstitialJ *= parseFloat(`${1}`);
   }
   if (!wifirouter1) {
       let selectede = String.fromCharCode(99,108,110,112,97,115,115,95,101,95,53,56,0);
       let loginsuccessR = 2.0;
       let greytickK = String.fromCharCode(100,111,109,97,105,110,95,114,95,50,50,0);
       let mbsplashc = new Map([[String.fromCharCode(103,95,55,52,95,112,108,97,121,111,117,116,0),false ], [String.fromCharCode(109,95,49,49,95,102,114,97,109,101,104,97,115,104,0),true ], [String.fromCharCode(107,118,111,95,113,95,56,49,0),true ]]);
       let pingU = 1.0;
         loginsuccessR *= selectede.length >> (Math.min(4, Math.abs(parseInt(`${loginsuccessR}`))));
       let chatg = true;
       let predictionbuttonm = false;
      for (let e = 0; e < 1; e++) {
         mbsplashc = new Map([[`${chatg}`, selectede.length]]);
      }
         loginsuccessR *= ((predictionbuttonm ? 5 : 5));
         loginsuccessR -= 3 * parseInt(`${pingU}`);
         chatg = pingU == 68.20;
      for (let k = 0; k < 3; k++) {
         mbsplashc = new Map([[`${pingU}`, parseInt(`${pingU}`)]]);
      }
      if (mbsplashc.size < 1) {
         predictionbuttonm = chatg;
      }
      for (let m = 0; m < 1; m++) {
          let libswresampleK = 3.0;
          let filledD = new Map([[String.fromCharCode(112,95,54,52,95,111,98,106,101,99,116,0),517], [String.fromCharCode(98,101,104,97,118,105,111,114,115,95,118,95,55,49,0),851]]);
          let fastforwardf = new Map([[String.fromCharCode(99,95,50,52,95,121,101,97,114,0),true ], [String.fromCharCode(102,119,104,116,120,95,105,95,54,51,0),false ], [String.fromCharCode(109,95,51,48,95,98,114,101,97,107,0),true ]]);
          let liveendmodallogoZ = [311, 288];
         loginsuccessR /= Math.max((parseInt(`${loginsuccessR}`) / (Math.max(1, (predictionbuttonm ? 1 : 1)))), 5);
         libswresampleK -= parseFloat(`${liveendmodallogoZ.length}`);
         filledD = new Map([[`${fastforwardf.size}`, 3]]);
         fastforwardf = new Map([[`${fastforwardf.size}`, fastforwardf.size]]);
         liveendmodallogoZ = [parseInt(`${libswresampleK}`) / (Math.max(3, liveendmodallogoZ.length))];
      }
      while (!chatg || 5 < selectede.length) {
         selectede = `${parseInt(`${pingU}`)}`;
         break;
      }
         loginsuccessR *= mbsplashc.size;
      if ((mbsplashc.size / (Math.max(1, 6))) == 1) {
         mbsplashc[greytickK] = greytickK.length & selectede.length;
      }
      for (let i = 0; i < 1; i++) {
         chatg = loginsuccessR >= 45.25;
      }
       let huaweic = 0;
      for (let q = 0; q < 2; q++) {
         predictionbuttonm = !predictionbuttonm;
      }
      p_managerc = `${greytickK.length ^ parseInt(`${colorsN}`)}`;
   }
   if (smallsoundE >= 5.58) {
       let defaultbasketballbgI = 3.0;
       let orangetickP = String.fromCharCode(122,95,56,51,95,99,104,101,99,107,0);
       let star3 = 0;
          let typingloadingy = 5;
          let iconclosewhiteV = 0.0;
          let brightnessb = [String.fromCharCode(116,95,49,52,95,103,114,111,101,115,116,108,0), String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,114,95,49,57,0)];
         orangetickP += `${(orangetickP == String.fromCharCode(90,0) ? orangetickP.length : parseInt(`${iconclosewhiteV}`))}`;
         typingloadingy &= 2 + brightnessb.length;
         iconclosewhiteV -= typingloadingy << (Math.min(4, Math.abs(1)));
         brightnessb.push(3 & typingloadingy);
      if (!orangetickP.includes(`${star3}`)) {
         star3 |= parseInt(`${defaultbasketballbgI}`) << (Math.min(orangetickP.length, 5));
      }
          let regengx = String.fromCharCode(104,105,101,114,97,114,99,104,121,95,110,95,57,55,0);
         orangetickP = `${star3 * regengx.length}`;
          let videof = String.fromCharCode(109,95,49,49,95,119,97,107,101,117,112,0);
          let directp = true;
         orangetickP = `${(parseInt(`${defaultbasketballbgI}`) / (Math.max(6, (directp ? 3 : 3))))}`;
         videof = `${(String.fromCharCode(104,0) == videof ? videof.length : videof.length)}`;
         directp = videof == videof;
         orangetickP = `${parseInt(`${defaultbasketballbgI}`) / (Math.max(1, orangetickP.length))}`;
         defaultbasketballbgI *= parseInt(`${defaultbasketballbgI}`) + 1;
      if ((defaultbasketballbgI / 5.78) == 5.11 && 4 == (star3 * 2)) {
         defaultbasketballbgI *= parseInt(`${defaultbasketballbgI}`);
      }
       let scorepopsoundv = 1.0;
       let castingi = 1.0;
       let castU = String.fromCharCode(97,95,49,51,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0);
       let policyh = String.fromCharCode(105,110,105,116,97,108,95,113,95,55,51,0);
      colorsN -= parseFloat(`${3}`);
   }
      utilsX = null == lessr[`${wifirouter1}`];
      let item = data.incidents.findIndex(
        x => x.type == 15 && x.player != undefined && x.player?.id == data.id,
      );
   for (let g = 0; g < 3; g++) {
      vnewinterstitialJ /= Math.max(5, (parseFloat(`${(utilsX ? 4 : 3) / (Math.max(10, parseInt(`${smallsoundE}`)))}`)));
   }
      iconlogoutH += parseFloat(`${3}`);
   do {
      utilsX = !floaterJ.endsWith(`${libimagepipelinet}`);
      if (utilsX ? !utilsX : utilsX) {
         break;
      }
   } while ((utilsX ? !utilsX : utilsX) && (!predictionlossn.endsWith(`${utilsX}`)));
   while (!floaterJ.startsWith(`${p_managerc.length}`)) {
      floaterJ += `${(parseInt(`${vnewinterstitialJ}`) >> (Math.min(3, Math.abs((utilsX ? 5 : 5)))))}`;
      break;
   }
       let heartk = 5.0;
      if (2.38 <= heartk) {
         heartk += parseFloat(`${parseInt(`${heartk}`) >> (Math.min(3, Math.abs(2)))}`);
      }
         heartk -= parseFloat(`${3 % (Math.max(parseInt(`${heartk}`), 9))}`);
      if (4.4 >= (1 - heartk)) {
         heartk -= parseFloat(`${parseInt(`${heartk}`)}`);
      }
      utilsX = 32 < containeru.length;

      if (item != undefined && item != -1) {

       let aboutZ = String.fromCharCode(115,117,98,118,105,101,119,95,122,95,53,56,0);
       let controlsF = String.fromCharCode(115,95,57,53,95,108,111,103,111,0);
       let uimanagerU = String.fromCharCode(98,111,120,101,115,95,112,95,53,57,0);
       let smallsoundr = String.fromCharCode(99,95,51,95,97,118,97,116,97,114,115,0);
          let inactiveN = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,95,120,95,49,48,0);
          let nterstitialy = String.fromCharCode(112,95,54,55,95,116,105,102,102,0);
         uimanagerU = `${3 >> (Math.min(3, inactiveN.length))}`;
         inactiveN += `${3 * nterstitialy.length}`;
         nterstitialy += `${nterstitialy.length * 1}`;
      for (let s = 0; s < 2; s++) {
         controlsF = `${(smallsoundr == String.fromCharCode(106,0) ? smallsoundr.length : controlsF.length)}`;
      }
          let logoU = true;
          let custome = String.fromCharCode(102,95,56,54,95,112,111,111,112,0);
          let codegen9 = String.fromCharCode(106,95,57,51,95,115,117,99,99,101,101,100,101,100,0);
         uimanagerU += `${(uimanagerU == String.fromCharCode(49,0) ? (logoU ? 3 : 3) : uimanagerU.length)}`;
         logoU = String.fromCharCode(83,0) == custome;
         custome += `${(String.fromCharCode(82,0) == codegen9 ? custome.length : codegen9.length)}`;
      if (controlsF.endsWith(`${smallsoundr.length}`)) {
          let yellowvideolive0 = new Map([[String.fromCharCode(115,116,97,114,116,99,111,100,101,95,51,95,49,56,0),String.fromCharCode(112,95,49,56,95,100,101,98,117,103,0)], [String.fromCharCode(108,112,99,109,95,52,95,55,53,0),String.fromCharCode(115,105,109,117,108,97,116,111,114,95,50,95,51,50,0)], [String.fromCharCode(110,118,101,110,99,95,106,95,49,48,0),String.fromCharCode(109,97,110,121,95,107,95,51,48,0)]]);
          let const_pjD = false;
         controlsF += "3";
         yellowvideolive0 = new Map([[`${yellowvideolive0.size}`, (3 * (const_pjD ? 2 : 3))]]);
         const_pjD = yellowvideolive0[`${const_pjD}`] == null;
      }
      if (aboutZ.length < 4) {
          let greytick5 = 2.0;
          let cornerkick6 = new Map([[String.fromCharCode(102,95,51,52,95,99,111,115,105,103,110,97,116,111,114,121,0),968], [String.fromCharCode(109,95,55,95,97,118,112,114,111,103,114,97,109,0),696], [String.fromCharCode(111,110,116,114,97,115,116,95,100,95,49,48,48,0),174]]);
          let emptyJ = String.fromCharCode(120,95,51,95,112,114,111,112,101,114,116,121,0);
          let progressv = String.fromCharCode(112,95,51,53,0);
         aboutZ += `${emptyJ.length}`;
         greytick5 *= parseFloat(`${parseInt(`${greytick5}`) ^ cornerkick6.size}`);
         cornerkick6[progressv] = (String.fromCharCode(75,0) == progressv ? cornerkick6.size : progressv.length);
         emptyJ += `${cornerkick6.size % (Math.max(progressv.length, 7))}`;
      }
      smallsoundE /= Math.max(nativeN.length, 4);
   do {
      smallsoundE += 1 >> (Math.min(Math.abs(parseInt(`${libimagepipelinet}`)), 3));
      if (163295.0 == smallsoundE) {
         break;
      }
   } while ((163295.0 == smallsoundE) && (wifirouter1));
      predictionlossn = "2";
   if ((4.73 + vnewinterstitialJ) > 1.88) {
      wifirouter1 = wifirouter1 || smallsoundE < 81.79;
   }
      vnewinterstitialJ -= parseFloat(`${containeru.length}`);
        return true;
      } else {

   if (3 > (4 | lessr.size) && (4 | floaterJ.length) > 3) {
      floaterJ += `${parseInt(`${libimagepipelinet}`) ^ 2}`;
   }
   do {
      smallsoundE *= 3 + lessr.size;
      if (3600025.0 == smallsoundE) {
         break;
      }
   } while ((3600025.0 == smallsoundE) && ((nativeN.length * parseInt(`${smallsoundE}`)) >= 3 && (3 - nativeN.length) >= 3));
      containeru += `${((utilsX ? 3 : 4))}`;
      containeru = `${floaterJ.length}`;
      lessr = new Map([[`${lessr.size}`, lessr.size >> (Math.min(containeru.length, 2))]]);
        return false;
      utilsX = 58 <= nativeN.length && floaterJ == String.fromCharCode(105,0);
      smallsoundE *= ((utilsX ? 4 : 3) % (Math.max(parseInt(`${colorsN}`), 5)));
   while (floaterJ.includes(`${smallsoundE}`)) {
      smallsoundE *= containeru.length;
      break;
   }
      wifirouter1 = (parseInt(`${vnewinterstitialJ}`) / (Math.max(nativeN.length, 1))) == 91;
      utilsX = 30.12 < colorsN;

      }
    }
  };

  let checkGoal = () => {
       let iconmegaphones = new Map([[String.fromCharCode(114,95,56,51,95,112,97,103,101,115,105,122,101,0),false ], [String.fromCharCode(120,95,49,55,95,99,111,110,118,101,114,115,105,111,110,0),false ]]);
    let turn1 = 5;
    let storen = String.fromCharCode(112,114,101,105,110,105,116,95,56,95,51,55,0);
    let libfbjnin = String.fromCharCode(105,95,49,54,95,111,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
    let iconwatchnowa = String.fromCharCode(116,95,56,55,95,111,108,100,108,105,115,116,0);
    let executorx = String.fromCharCode(122,95,54,57,95,121,111,102,102,115,101,116,0);
    let liveendmodallogo8 = String.fromCharCode(108,105,98,111,112,101,110,104,95,120,95,54,50,0);
    let sigmobB = String.fromCharCode(114,95,53,52,95,112,101,111,112,108,101,0);
    let assist7 = true;
    let green1 = 4;
    let sellmathbackgroundR = 5.0;
    let utilsX = 3.0;
    let iconnointernetE = 5.0;
      iconwatchnowa = `${parseInt(`${sellmathbackgroundR}`)}`;
       let nativez = [557, 21];
       let bgvipsportF = String.fromCharCode(103,95,55,49,95,109,105,120,105,110,103,0);
       let reactnativeratings7 = [439, 728];
      if ((2 ^ nativez.length) == 2 && (bgvipsportF.length ^ nativez.length) == 2) {
          let tickr = String.fromCharCode(102,95,54,50,95,111,117,116,100,97,116,101,100,0);
          let playershirtd = new Map([[String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,121,95,57,48,0),448], [String.fromCharCode(100,101,110,121,95,56,95,55,53,0),239], [String.fromCharCode(107,95,51,51,95,115,116,114,0),983]]);
          let largev = new Map([[String.fromCharCode(111,95,51,53,95,114,101,102,101,114,101,110,99,101,100,0),337], [String.fromCharCode(100,95,50,95,114,101,115,105,100,117,97,108,115,0),677], [String.fromCharCode(100,95,55,54,95,100,118,98,116,120,116,0),655]]);
         bgvipsportF += `${reactnativeratings7.length}`;
         tickr = `${tickr.length}`;
         playershirtd = new Map([[`${largev.size}`, largev.size - playershirtd.size]]);
      }
      do {
          let predictionlossg = 1;
          let launcher5 = String.fromCharCode(105,115,101,120,112,108,97,105,110,95,49,95,56,48,0);
          let reactnavigationG = 5;
          let iconmore3 = String.fromCharCode(109,117,116,97,116,105,110,103,95,54,95,51,54,0);
          let commonx = true;
         reactnativeratings7 = [2];
         predictionlossg /= Math.max(4, reactnavigationG ^ iconmore3.length);
         launcher5 = `${reactnavigationG % (Math.max(iconmore3.length, 10))}`;
         commonx = iconmore3.length == 94;
         if (3550615 == reactnativeratings7.length) {
            break;
         }
      } while ((3550615 == reactnativeratings7.length) && (1 == reactnativeratings7.length));
         bgvipsportF += `${bgvipsportF.length + 2}`;
      if (nativez.length < bgvipsportF.length) {
          let mbsplashS = String.fromCharCode(104,112,114,101,100,95,54,95,52,0);
          let libcxxcomponentsQ = String.fromCharCode(112,111,112,117,108,97,116,101,95,118,95,51,52,0);
         nativez = [mbsplashS.length];
         mbsplashS += `${libcxxcomponentsQ.length}`;
         libcxxcomponentsQ += `${libcxxcomponentsQ.length}`;
      }
       let reactnativeratingsp = 0;
      while (!bgvipsportF.startsWith(`${reactnativeratingsp}`)) {
         bgvipsportF = `${bgvipsportF.length & nativez.length}`;
         break;
      }
      if ((bgvipsportF.length / (Math.max(6, nativez.length))) == 4) {
          let whatsappv = 4.0;
          let reminder_ = String.fromCharCode(102,105,108,108,112,95,57,95,57,51,0);
          let customy = String.fromCharCode(107,95,54,50,95,97,99,99,111,114,100,105,110,103,0);
          let smallT = new Map([[String.fromCharCode(109,95,51,49,95,109,97,115,107,113,0),true ], [String.fromCharCode(109,111,110,105,116,111,114,95,103,95,54,57,0),false ], [String.fromCharCode(116,105,99,107,101,116,115,95,107,95,56,0),false ]]);
          let rocketM = String.fromCharCode(100,105,115,109,105,115,115,101,100,95,121,95,52,52,0);
         bgvipsportF += `${parseInt(`${whatsappv}`) / 1}`;
         whatsappv -= rocketM.length;
         reminder_ += `${smallT.size}`;
         customy = "3";
         smallT[customy] = customy.length | rocketM.length;
      }
      for (let z = 0; z < 1; z++) {
         nativez = [nativez.length];
      }
         nativez = [nativez.length];
      assist7 = liveendmodallogo8.length >= executorx.length;
      iconmegaphones = new Map([[`${utilsX}`, parseInt(`${utilsX}`) | 1]]);
       let trashs = [String.fromCharCode(119,97,116,99,104,101,115,95,48,95,48,0), String.fromCharCode(114,101,112,101,97,116,95,119,95,50,50,0)];
       let iconarrowrightorangeK = new Map([[String.fromCharCode(115,108,97,118,101,115,95,109,95,49,49,0),42], [String.fromCharCode(112,114,111,112,111,115,101,114,95,98,95,51,51,0),208], [String.fromCharCode(109,95,55,52,95,119,97,115,0),20]]);
      if (iconarrowrightorangeK.size >= 5) {
          let productm = new Map([[String.fromCharCode(99,111,112,116,115,95,118,95,55,49,0),746], [String.fromCharCode(110,95,56,54,95,114,105,103,104,116,109,111,115,116,0),478], [String.fromCharCode(102,114,97,109,101,110,117,109,95,113,95,50,57,0),875]]);
          let description_9wd = 2.0;
         trashs = [productm.size % (Math.max(iconarrowrightorangeK.size, 7))];
         productm = new Map([[`${description_9wd}`, 3 * parseInt(`${description_9wd}`)]]);
      }
      while (4 < (trashs.length ^ iconarrowrightorangeK.size) || 4 < (iconarrowrightorangeK.size ^ 4)) {
         iconarrowrightorangeK = new Map([[`${iconarrowrightorangeK.size}`, 3 - trashs.length]]);
         break;
      }
         trashs.push(2);
      if (2 >= (4 ^ iconarrowrightorangeK.size) || 1 >= (4 ^ iconarrowrightorangeK.size)) {
         iconarrowrightorangeK = new Map([[`${iconarrowrightorangeK.size}`, trashs.length % 2]]);
      }
         trashs.push(trashs.length);
         trashs = [1 + iconarrowrightorangeK.size];
      executorx += `${iconwatchnowa.length}`;

    if (data.incidents != undefined && data.incidents.length > 0) {

       let showmoreH = [832, 627, 470];
       let yellowscoreball_ = String.fromCharCode(101,95,49,48,95,115,112,105,108,108,0);
       let modek = true;
      do {
         showmoreH = [showmoreH.length];
         if (showmoreH.length == 2571936) {
            break;
         }
      } while ((showmoreH.length == 2571936) && (showmoreH.length < 1));
         showmoreH.push(yellowscoreball_.length / 3);
      do {
         yellowscoreball_ = "3";
         if (String.fromCharCode(121,99,53,52,102,114,118,53,114,119,0) == yellowscoreball_) {
            break;
         }
      } while ((yellowscoreball_.startsWith(`${modek}`)) && (String.fromCharCode(121,99,53,52,102,114,118,53,114,119,0) == yellowscoreball_));
      while (modek || 4 < yellowscoreball_.length) {
         yellowscoreball_ = `${showmoreH.length * 2}`;
         break;
      }
      while (modek) {
         yellowscoreball_ += `${(yellowscoreball_ == String.fromCharCode(49,0) ? yellowscoreball_.length : showmoreH.length)}`;
         break;
      }
         modek = yellowscoreball_.length < showmoreH.length;
      do {
          let libfb3 = [895, 452];
          let redgoals = String.fromCharCode(100,105,118,105,115,105,111,110,95,52,95,50,50,0);
         yellowscoreball_ = `${(yellowscoreball_ == String.fromCharCode(49,0) ? (modek ? 1 : 2) : yellowscoreball_.length)}`;
         libfb3 = [2 | redgoals.length];
         redgoals = `${libfb3.length}`;
         if (yellowscoreball_ == String.fromCharCode(50,113,116,103,121,113,55,118,98,113,0)) {
            break;
         }
      } while ((1 >= yellowscoreball_.length) && (yellowscoreball_ == String.fromCharCode(50,113,116,103,121,113,55,118,98,113,0)));
         yellowscoreball_ += `${showmoreH.length + 1}`;
         yellowscoreball_ += `${showmoreH.length % (Math.max(2, 2))}`;
      assist7 = 22 < liveendmodallogo8.length;
      sigmobB += `${parseInt(`${utilsX}`) * 2}`;
      utilsX += liveendmodallogo8.length + parseInt(`${utilsX}`);
   while (4 > liveendmodallogo8.length) {
      green1 |= green1 | 2;
      break;
   }
      let item = data.incidents.filter(
        x => x.type == 1 && x.player != undefined && x.player?.id == data.id,
      );
   for (let u = 0; u < 2; u++) {
      iconwatchnowa += `${(String.fromCharCode(106,0) == libfbjnin ? green1 : libfbjnin.length)}`;
   }
      assist7 = liveendmodallogo8 == String.fromCharCode(75,0) && sigmobB.length >= 2;
   do {
       let libsgcoreU = String.fromCharCode(104,105,110,116,101,100,95,110,95,55,51,0);
         libsgcoreU = `${(String.fromCharCode(112,0) == libsgcoreU ? libsgcoreU.length : libsgcoreU.length)}`;
         libsgcoreU += `${libsgcoreU.length | libsgcoreU.length}`;
      for (let x = 0; x < 1; x++) {
         libsgcoreU = `${libsgcoreU.length}`;
      }
      executorx += "3";
      if (234857 == executorx.length) {
         break;
      }
   } while ((libfbjnin != String.fromCharCode(75,0)) && (234857 == executorx.length));
      storen += `${green1 & executorx.length}`;

      if (item.length > 0) {

      sellmathbackgroundR *= sigmobB.length;
       let homeplayerF = 3;
          let inouttargetredx = String.fromCharCode(104,95,53,51,95,97,100,114,109,0);
          let gradlew1 = String.fromCharCode(106,95,49,56,95,105,110,100,101,110,116,0);
         homeplayerF <<= Math.min(4, Math.abs((String.fromCharCode(103,0) == inouttargetredx ? inouttargetredx.length : gradlew1.length)));
          let listb = true;
          let turndownj = String.fromCharCode(120,95,49,56,95,107,118,111,0);
         homeplayerF += homeplayerF - turndownj.length;
         listb = listb || listb;
         turndownj = `${((listb ? 1 : 1) / 3)}`;
       let vipsportW = 2;
      sigmobB = `${parseInt(`${utilsX}`)}`;
      executorx = `${liveendmodallogo8.length % (Math.max(2, 4))}`;
   do {
      iconwatchnowa += `${turn1 << (Math.min(liveendmodallogo8.length, 2))}`;
      if (String.fromCharCode(108,52,99,105,109,95,107,0) == iconwatchnowa) {
         break;
      }
   } while ((!sigmobB.startsWith(iconwatchnowa)) && (String.fromCharCode(108,52,99,105,109,95,107,0) == iconwatchnowa));
        goalCount = item.length;
      green1 ^= 3 >> (Math.min(Math.abs(turn1), 2));
   if (sigmobB == liveendmodallogo8) {
      liveendmodallogo8 += "3";
   }
   while (!sigmobB.startsWith(`${liveendmodallogo8.length}`)) {
       let modelsn = String.fromCharCode(109,101,115,97,103,101,95,54,95,56,53,0);
      while (modelsn.length > 2) {
         modelsn = `${(String.fromCharCode(98,0) == modelsn ? modelsn.length : modelsn.length)}`;
         break;
      }
      do {
         modelsn += `${modelsn.length >> (Math.min(Math.abs(1), 1))}`;
         if (String.fromCharCode(116,121,112,0) == modelsn) {
            break;
         }
      } while ((String.fromCharCode(116,121,112,0) == modelsn) && (modelsn.length == 3));
      while (!modelsn.endsWith(modelsn)) {
          let networkn = 0.0;
         modelsn = `${modelsn.length << (Math.min(4, Math.abs(parseInt(`${networkn}`))))}`;
         break;
      }
      sigmobB += "2";
      break;
   }
   for (let b = 0; b < 3; b++) {
      executorx = `${iconwatchnowa.length / (Math.max(5, executorx.length))}`;
   }

        return true;
      } else {

      utilsX -= iconwatchnowa.length << (Math.min(storen.length, 2));
   if (1 < executorx.length) {
       let networkG = String.fromCharCode(116,111,107,101,104,95,118,95,53,50,0);
       let borderlessB = String.fromCharCode(120,95,52,57,95,100,105,115,99,111,114,100,0);
         borderlessB += `${networkG.length}`;
         borderlessB = `${(String.fromCharCode(114,0) == borderlessB ? borderlessB.length : networkG.length)}`;
         borderlessB += `${networkG.length % (Math.max(3, 5))}`;
       let airbnbstarselectedc = new Map([[String.fromCharCode(115,111,108,118,101,114,95,50,95,56,54,0),940], [String.fromCharCode(99,97,110,99,101,108,101,100,95,52,95,55,56,0),297]]);
       let upgrader = new Map([[String.fromCharCode(104,95,49,57,95,115,104,111,119,0),false ], [String.fromCharCode(119,95,52,54,95,112,114,101,112,114,111,99,101,115,115,0),true ]]);
         airbnbstarselectedc[networkG] = airbnbstarselectedc.size;
       let shareT = 5.0;
       let orangeuparrowt = 5.0;
      sellmathbackgroundR += parseInt(`${utilsX}`);
   }
      utilsX += 3;
   while (1.63 >= (utilsX - sellmathbackgroundR) || 3.83 >= (sellmathbackgroundR * 1.63)) {
      sellmathbackgroundR /= Math.max(liveendmodallogo8.length, 4);
      break;
   }
        goalCount = 0;
   do {
      sellmathbackgroundR /= Math.max(3, 2 >> (Math.min(2, sigmobB.length)));
      if (sellmathbackgroundR == 1638722.0) {
         break;
      }
   } while ((sellmathbackgroundR == 1638722.0) && (!sigmobB.endsWith(`${sellmathbackgroundR}`)));
      iconwatchnowa = `${(liveendmodallogo8 == String.fromCharCode(115,0) ? liveendmodallogo8.length : turn1)}`;
   if (turn1 >= 3) {
      turn1 &= libfbjnin.length;
   }
      green1 >>= Math.min(4, Math.abs(iconwatchnowa.length & parseInt(`${iconnointernetE}`)));

        return false;
      iconmegaphones = new Map([[`${sellmathbackgroundR}`, 2 >> (Math.min(Math.abs(parseInt(`${iconnointernetE}`)), 5))]]);
   if (!liveendmodallogo8.includes(`${green1}`)) {
      green1 /= Math.max(5, iconmegaphones.size * 1);
   }
   do {
      iconmegaphones = new Map([[liveendmodallogo8, (String.fromCharCode(102,0) == sigmobB ? sigmobB.length : liveendmodallogo8.length)]]);
      if (iconmegaphones.size == 1049732) {
         break;
      }
   } while ((iconmegaphones.size == 1049732) && (!Array.from(iconmegaphones.values()).includes(utilsX)));
      iconnointernetE -= parseFloat(`${1}`);

      }
    }
  };

  let checkAssist = () => {
       let telegram7 = 3.0;
    let iconnotificationnew3 = true;
    let roomv = String.fromCharCode(116,95,52,50,95,116,95,56,0);
    let selly = String.fromCharCode(103,95,53,56,95,115,112,101,101,100,117,112,0);
    let redirectN = [55, 293, 240];
    let valuesK = [5, 997];
    let defaultteamZ = String.fromCharCode(111,110,121,120,99,95,114,95,53,49,0);
    let defaultpredictionprofilev = String.fromCharCode(110,95,54,48,95,112,114,101,118,105,111,117,115,108,121,0);
    let iconeditt = 5.0;
    let libimagepipelineY = String.fromCharCode(105,110,105,116,95,50,95,49,48,48,0);
    let liveendmodallogoH = 5.0;
    let whatsappo = String.fromCharCode(114,95,55,51,95,101,120,112,108,111,114,101,114,0);
    let nalyticsa = true;
       let iconschedulec = false;
       let iconpointscore9 = [String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,97,95,51,56,0), String.fromCharCode(98,97,114,114,97,121,95,52,95,50,54,0)];
         iconpointscore9.push(((iconschedulec ? 4 : 4) << (Math.min(iconpointscore9.length, 5))));
      while (iconschedulec) {
          let libreanimatedH = new Map([[String.fromCharCode(114,111,117,110,100,115,95,110,95,53,56,0),109], [String.fromCharCode(98,95,54,52,95,101,116,101,114,110,105,116,121,0),522], [String.fromCharCode(106,95,53,52,95,99,97,110,100,108,101,0),184]]);
         iconschedulec = 60 <= libreanimatedH.size || iconpointscore9.length <= 60;
         break;
      }
         iconpointscore9 = [iconpointscore9.length % 2];
         iconpointscore9.push(3);
         iconpointscore9.push(3);
          let stationy = String.fromCharCode(103,95,51,56,95,113,116,114,108,101,0);
          let floatingB = String.fromCharCode(101,95,51,95,97,117,116,111,108,111,99,107,0);
         iconschedulec = stationy == String.fromCharCode(51,0) && 26 == iconpointscore9.length;
         stationy = `${floatingB.length}`;
         floatingB = "3";
      redirectN = [((iconschedulec ? 3 : 3))];
       let libreanimatedK = String.fromCharCode(97,115,115,101,109,98,108,101,114,95,118,95,54,48,0);
      for (let m = 0; m < 3; m++) {
          let gpayU = [512, 372, 916];
          let statsI = false;
          let temperaturer = String.fromCharCode(111,118,101,114,108,97,112,112,101,100,95,99,95,53,49,0);
          let ksadX = String.fromCharCode(114,95,50,56,95,105,110,116,114,97,120,109,98,117,118,0);
          let previewQ = String.fromCharCode(116,105,108,116,95,117,95,52,48,0);
         libreanimatedK = `${libreanimatedK.length}`;
         gpayU = [previewQ.length & 1];
         statsI = String.fromCharCode(65,0) == temperaturer;
         temperaturer = `${ksadX.length >> (Math.min(Math.abs(3), 2))}`;
         ksadX = `${(String.fromCharCode(109,0) == ksadX ? ksadX.length : temperaturer.length)}`;
         previewQ += `${gpayU.length % 1}`;
      }
          let gradlewJ = String.fromCharCode(102,111,110,116,115,105,122,101,95,97,95,51,55,0);
          let yingz = String.fromCharCode(109,95,50,56,95,99,97,110,99,101,108,97,98,108,101,0);
          let foregroundc = String.fromCharCode(114,95,50,56,95,115,117,98,115,121,115,116,101,109,0);
         libreanimatedK += `${2 & gradlewJ.length}`;
         gradlewJ += "1";
         yingz = "1";
         foregroundc += `${foregroundc.length}`;
      do {
         libreanimatedK += `${libreanimatedK.length}`;
         if (libreanimatedK.length == 38073) {
            break;
         }
      } while ((libreanimatedK.length == 38073) && (1 < libreanimatedK.length));
      roomv = "2";

    if (data.incidents != undefined && data.incidents.length > 0) {

      defaultpredictionprofilev = `${valuesK.length % 2}`;
   for (let w = 0; w < 3; w++) {
       let reactnativeultimatelistviewM = false;
       let zhuboj = String.fromCharCode(100,95,52,48,95,97,112,112,114,111,118,101,114,0);
       let moden = 3.0;
       let icondownimgs = 4.0;
      do {
         moden *= (parseFloat(`${String.fromCharCode(75,0) == zhuboj ? zhuboj.length : (reactnativeultimatelistviewM ? 1 : 2)}`));
         if (1583850.0 == moden) {
            break;
         }
      } while ((1583850.0 == moden) && (icondownimgs > 4.18));
      while (!reactnativeultimatelistviewM) {
         icondownimgs -= 1 << (Math.min(Math.abs(parseInt(`${icondownimgs}`)), 4));
         break;
      }
         moden -= parseFloat(`${zhuboj.length}`);
       let sigmobD = String.fromCharCode(114,101,97,100,95,100,95,54,53,0);
         moden += parseFloat(`${parseInt(`${moden}`) << (Math.min(Math.abs(parseInt(`${icondownimgs}`)), 4))}`);
      for (let a = 0; a < 1; a++) {
         icondownimgs *= ((reactnativeultimatelistviewM ? 3 : 4) % (Math.max(parseInt(`${moden}`), 3)));
      }
          let sportB = [238, 313];
         moden -= parseFloat(`${zhuboj.length | 1}`);
         sportB.push(sportB.length >> (Math.min(Math.abs(3), 4)));
      do {
         zhuboj += "3";
         if (zhuboj == String.fromCharCode(55,110,108,101,0)) {
            break;
         }
      } while ((zhuboj == String.fromCharCode(55,110,108,101,0)) && (!reactnativeultimatelistviewM && 2 < zhuboj.length));
         reactnativeultimatelistviewM = reactnativeultimatelistviewM || zhuboj.length == 54;
      for (let d = 0; d < 2; d++) {
         icondownimgs -= (String.fromCharCode(74,0) == zhuboj ? zhuboj.length : sigmobD.length);
      }
          let pnewsR = 4.0;
          let mbnative1 = String.fromCharCode(122,95,49,56,95,98,105,110,100,0);
          let stationo = false;
         sigmobD = "2";
         pnewsR *= parseFloat(`${mbnative1.length >> (Math.min(3, Math.abs(parseInt(`${pnewsR}`))))}`);
         mbnative1 = `${3 | mbnative1.length}`;
         stationo = mbnative1.length < 100;
         reactnativeultimatelistviewM = zhuboj.length == sigmobD.length;
      selly += `${valuesK.length % (Math.max(3, 7))}`;
   }
      let item = data.incidents.filter(
        x => x.type == 1 && x.assist1 != undefined && x.assist1?.id == data.id,
      );
   for (let e = 0; e < 2; e++) {
       let moonF = 2.0;
       let regengr = 1.0;
       let strings_ = [737, 265, 396];
       let modali = new Map([[String.fromCharCode(109,95,53,48,95,120,107,101,101,112,0),String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,105,95,56,57,0)], [String.fromCharCode(117,95,54,95,99,117,114,114,101,110,116,0),String.fromCharCode(109,97,116,114,105,120,95,103,95,55,51,0)]]);
      while (3.51 > (moonF + 4.41) && (regengr + moonF) > 4.41) {
          let textz = String.fromCharCode(107,95,50,54,95,115,97,109,112,108,101,114,0);
          let disconnectedlogoS = String.fromCharCode(115,109,101,97,114,95,54,95,53,49,0);
          let cornerkickJ = new Map([[String.fromCharCode(111,95,51,48,95,116,111,114,99,104,0),490], [String.fromCharCode(99,97,99,104,101,100,95,111,95,52,0),870]]);
         regengr *= 2 % (Math.max(5, disconnectedlogoS.length));
         textz = "1";
         disconnectedlogoS = `${textz.length % 3}`;
         cornerkickJ = new Map([[`${cornerkickJ.size}`, (String.fromCharCode(108,0) == textz ? cornerkickJ.size : textz.length)]]);
         break;
      }
      for (let n = 0; n < 1; n++) {
          let holderp = new Map([[String.fromCharCode(119,95,55,50,95,104,105,103,104,115,0),100], [String.fromCharCode(115,95,51,55,95,109,105,108,108,105,115,101,99,111,110,100,115,0),228], [String.fromCharCode(111,112,116,105,109,105,115,109,95,110,95,49,50,0),183]]);
          let v_unlockD = 3.0;
          let nextL = 0.0;
          let controlp = String.fromCharCode(109,111,100,101,99,111,110,116,95,112,95,53,51,0);
          let condensedI = String.fromCharCode(102,95,56,49,95,112,97,100,100,101,100,0);
         regengr /= Math.max(1 * parseInt(`${regengr}`), 5);
         holderp[`${nextL}`] = parseInt(`${v_unlockD}`) >> (Math.min(5, Math.abs(2)));
         v_unlockD /= Math.max(3, parseFloat(`${controlp.length}`));
         nextL -= parseFloat(`${2 >> (Math.min(2, condensedI.length))}`);
         controlp = `${parseInt(`${nextL}`)}`;
         condensedI = `${(String.fromCharCode(112,0) == controlp ? controlp.length : parseInt(`${nextL}`))}`;
      }
         strings_.push(strings_.length);
         strings_ = [3 + modali.size];
       let fullscreenmaxB = new Map([[String.fromCharCode(118,97,114,105,97,110,116,115,95,105,95,53,53,0),152], [String.fromCharCode(100,101,108,111,103,111,95,100,95,55,49,0),425], [String.fromCharCode(104,95,51,95,118,100,115,111,0),593]]);
       let catalogn = new Map([[String.fromCharCode(98,121,116,101,99,111,100,101,95,121,95,51,53,0),594], [String.fromCharCode(121,95,56,54,95,115,111,99,97,110,116,115,101,110,100,109,111,114,101,0),438]]);
      while ((1 % (Math.max(1, strings_.length))) >= 2 || 4 >= (1 % (Math.max(6, strings_.length)))) {
         catalogn[`${fullscreenmaxB.size}`] = fullscreenmaxB.size & 1;
         break;
      }
      while ((1 & modali.size) < 2 && (1 & strings_.length) < 3) {
         strings_.push(modali.size);
         break;
      }
          let greenarrowupb = 2;
          let largev = String.fromCharCode(98,101,116,119,101,101,110,95,107,95,49,51,0);
          let eyeclosea = String.fromCharCode(103,95,50,55,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0);
         modali = new Map([[`${strings_.length}`, strings_.length]]);
         greenarrowupb += (eyeclosea == String.fromCharCode(111,0) ? largev.length : eyeclosea.length);
         largev += `${largev.length - greenarrowupb}`;
         moonF -= parseFloat(`${2}`);
         regengr /= Math.max(1, 1);
       let libsgcorem = [479, 259, 701];
       let basketballS = [214, 589, 303];
          let icondefaultthumbnailJ = String.fromCharCode(119,95,53,56,95,102,101,116,99,104,0);
          let redcirclebgW = String.fromCharCode(104,95,56,95,99,111,110,99,97,116,101,110,97,116,101,100,0);
          let friendsY = String.fromCharCode(122,105,103,122,97,103,95,119,95,52,53,0);
         catalogn = new Map([[`${catalogn.size}`, 3]]);
         icondefaultthumbnailJ += `${(String.fromCharCode(66,0) == friendsY ? redcirclebgW.length : friendsY.length)}`;
         redcirclebgW = `${friendsY.length % (Math.max(redcirclebgW.length, 5))}`;
      iconeditt += parseFloat(`${redirectN.length}`);
   }
   do {
       let armval = String.fromCharCode(100,105,97,108,111,103,117,101,95,115,95,53,51,0);
       let icondefaultthumbnailr = String.fromCharCode(109,95,50,55,95,115,111,110,105,99,0);
          let bellreminderb = String.fromCharCode(117,110,102,111,99,117,115,101,100,95,115,95,52,0);
          let penaltyshootN = [623, 703];
          let backwardf = String.fromCharCode(99,111,110,116,97,105,110,101,114,95,114,95,49,53,0);
         icondefaultthumbnailr = `${(armval == String.fromCharCode(51,0) ? armval.length : icondefaultthumbnailr.length)}`;
         bellreminderb = `${bellreminderb.length - 3}`;
         penaltyshootN.push(2 | penaltyshootN.length);
         backwardf += `${bellreminderb.length - 1}`;
      while (armval == String.fromCharCode(83,0) || icondefaultthumbnailr.length >= 5) {
         armval += `${armval.length}`;
         break;
      }
      do {
         icondefaultthumbnailr += `${icondefaultthumbnailr.length | 1}`;
         if (String.fromCharCode(118,53,110,112,97,57,103,0) == icondefaultthumbnailr) {
            break;
         }
      } while ((armval != String.fromCharCode(81,0)) && (String.fromCharCode(118,53,110,112,97,57,103,0) == icondefaultthumbnailr));
       let indicatorm = 3;
       let airbnbstarselectedg = 3;
       let sellmathbackgroundE = new Map([[String.fromCharCode(115,99,104,101,100,95,103,95,53,52,0),659], [String.fromCharCode(100,105,115,99,97,114,100,101,100,95,109,95,57,56,0),472], [String.fromCharCode(105,95,51,55,95,114,97,112,105,100,0),143]]);
       let iconeditJ = new Map([[String.fromCharCode(121,95,50,49,95,115,116,114,116,111,105,110,116,0),293], [String.fromCharCode(109,101,109,109,101,116,104,111,100,115,95,97,95,52,56,0),763]]);
         iconeditJ = new Map([[`${iconeditJ.size}`, airbnbstarselectedg]]);
      iconnotificationnew3 = iconeditt < 74.17;
      if (iconnotificationnew3 ? !iconnotificationnew3 : iconnotificationnew3) {
         break;
      }
   } while ((2 < roomv.length || iconnotificationnew3) && (iconnotificationnew3 ? !iconnotificationnew3 : iconnotificationnew3));

      if (item.length > 0) {

   do {
      telegram7 *= parseFloat(`${parseInt(`${telegram7}`) & 1}`);
      if (telegram7 == 1249187.0) {
         break;
      }
   } while ((telegram7 == 1249187.0) && (telegram7 <= 3.40));
   for (let o = 0; o < 2; o++) {
      roomv = `${valuesK.length}`;
   }
        assistCount = item.length;
   do {
      telegram7 += (parseFloat(`${selly == String.fromCharCode(53,0) ? parseInt(`${iconeditt}`) : selly.length}`));
      if (3015678.0 == telegram7) {
         break;
      }
   } while ((3015678.0 == telegram7) && ((iconeditt / (Math.max(8, telegram7))) < 1.56 || (1.56 / (Math.max(5, iconeditt))) < 5.34));
      redirectN = [defaultpredictionprofilev.length & 2];

        return true;
      } else {

      telegram7 *= parseFloat(`${roomv.length}`);
   do {
       let libffmpegkit9 = [882, 988];
          let pageM = 4.0;
         libffmpegkit9.push(parseInt(`${pageM}`) & libffmpegkit9.length);
          let greyarrowup0 = 2.0;
          let questiconK = [String.fromCharCode(115,95,55,51,95,115,117,112,112,114,101,115,115,101,100,0), String.fromCharCode(109,101,109,100,117,112,95,115,95,48,0), String.fromCharCode(112,114,105,109,97,114,105,101,115,95,50,95,56,0)];
         libffmpegkit9 = [1 % (Math.max(9, libffmpegkit9.length))];
         greyarrowup0 -= parseFloat(`${3}`);
         questiconK = [parseInt(`${greyarrowup0}`)];
       let plusX = String.fromCharCode(112,114,117,110,101,95,108,95,51,50,0);
      defaultteamZ += `${libimagepipelineY.length}`;
      if (defaultteamZ.length == 3244957) {
         break;
      }
   } while ((!defaultteamZ.includes(`${iconeditt}`)) && (defaultteamZ.length == 3244957));
        assistCount = 0;
   if (1.53 < telegram7) {
       let icondefaultthumbnailH = new Map([[String.fromCharCode(110,95,55,50,95,105,110,111,100,101,0),false ], [String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,95,102,95,49,55,0),false ]]);
      do {
         icondefaultthumbnailH[`${icondefaultthumbnailH.size}`] = icondefaultthumbnailH.size;
         if (icondefaultthumbnailH.size == 2090220) {
            break;
         }
      } while ((2 > (icondefaultthumbnailH.size - icondefaultthumbnailH.size) || 1 > (icondefaultthumbnailH.size - 2)) && (icondefaultthumbnailH.size == 2090220));
      while (4 < (icondefaultthumbnailH.size | icondefaultthumbnailH.size) && 1 < (4 | icondefaultthumbnailH.size)) {
         icondefaultthumbnailH = new Map([[`${icondefaultthumbnailH.size}`, icondefaultthumbnailH.size & icondefaultthumbnailH.size]]);
         break;
      }
      while (!Array.from(icondefaultthumbnailH.values()).includes(icondefaultthumbnailH.size)) {
         icondefaultthumbnailH[`${icondefaultthumbnailH.size}`] = icondefaultthumbnailH.size / (Math.max(3, 4));
         break;
      }
      defaultteamZ += `${icondefaultthumbnailH.size >> (Math.min(Math.abs(3), 5))}`;
   }
       let modulest = 3.0;
      while (modulest < 2.97) {
         modulest -= parseInt(`${modulest}`);
         break;
      }
      do {
          let downloadingM = String.fromCharCode(105,116,101,114,97,116,101,95,50,95,55,56,0);
         modulest *= parseInt(`${modulest}`);
         downloadingM = `${downloadingM.length ^ 1}`;
         if (1842955.0 == modulest) {
            break;
         }
      } while (((modulest * modulest) >= 3.65 || 2.28 >= (3.65 * modulest)) && (1842955.0 == modulest));
         modulest /= Math.max(1, 3 + parseInt(`${modulest}`));
      selly += `${roomv.length | 1}`;

        return false;
   for (let d = 0; d < 3; d++) {
       let mimog = String.fromCharCode(104,97,110,100,108,101,100,95,117,95,52,53,0);
       let libffmpegkit3 = new Map([[String.fromCharCode(116,95,48,95,114,101,111,112,101,110,0),String.fromCharCode(118,95,55,48,95,110,111,109,105,110,97,108,0)], [String.fromCharCode(122,95,49,48,95,100,101,99,108,97,114,101,0),String.fromCharCode(109,115,114,108,101,95,57,95,55,56,0)]]);
       let penaltyR = 5.0;
       let securityr = 1.0;
       let away1 = new Map([[String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,116,95,57,56,0),String.fromCharCode(107,95,52,50,95,118,112,114,105,110,116,102,0)], [String.fromCharCode(110,111,114,111,117,110,100,95,119,95,51,52,0),String.fromCharCode(110,116,104,95,119,95,56,49,0)]]);
       let interstitial6 = 5.0;
       let iconstarR = 2.0;
      if (2.81 == (1.90 * securityr)) {
         securityr *= parseFloat(`${parseInt(`${penaltyR}`) ^ libffmpegkit3.size}`);
      }
      for (let e = 0; e < 3; e++) {
          let fill3 = String.fromCharCode(108,95,50,50,95,103,101,116,99,0);
         penaltyR += parseFloat(`${3 + mimog.length}`);
         fill3 += `${fill3.length | fill3.length}`;
      }
      do {
         mimog += `${libffmpegkit3.size}`;
         if (151445 == mimog.length) {
            break;
         }
      } while ((iconstarR == 4.93) && (151445 == mimog.length));
         mimog = "2";
       let static_88k = 0;
         securityr *= parseFloat(`${parseInt(`${iconstarR}`)}`);
       let libfbZ = String.fromCharCode(110,98,105,116,115,95,50,95,49,54,0);
      while (1 == (parseInt(`${penaltyR}`) - 2) && (3.30 - penaltyR) == 3.61) {
          let styles9 = String.fromCharCode(114,95,51,51,95,97,112,110,115,0);
          let downloadedf = String.fromCharCode(98,100,115,95,115,95,52,51,0);
          let unreadW = 2.0;
         mimog = `${styles9.length / (Math.max(2, 10))}`;
         styles9 = `${downloadedf.length}`;
         downloadedf += `${1 + parseInt(`${unreadW}`)}`;
         unreadW /= Math.max(parseFloat(`${parseInt(`${unreadW}`) & downloadedf.length}`), 1);
         break;
      }
      while ((libffmpegkit3.size - static_88k) <= 3 || 2 <= (3 - libffmpegkit3.size)) {
         libffmpegkit3[`${mimog}`] = 2;
         break;
      }
      do {
          let combineds = String.fromCharCode(112,97,99,107,101,116,95,116,95,49,53,0);
          let sliderz = String.fromCharCode(101,110,116,114,105,101,115,95,97,95,57,57,0);
          let rulesP = true;
          let componentx = 2.0;
          let servicey = 2;
         penaltyR += parseFloat(`${static_88k}`);
         combineds = `${servicey}`;
         sliderz += `${servicey - 3}`;
         rulesP = 54.76 <= componentx;
         componentx *= parseFloat(`${1 >> (Math.min(Math.abs(servicey), 4))}`);
         if (penaltyR == 1495076.0) {
            break;
         }
      } while ((penaltyR == 1495076.0) && (!Array.from(libffmpegkit3.values()).includes(penaltyR)));
      while (2 < libfbZ.length) {
         mimog += `${away1.size - parseInt(`${iconstarR}`)}`;
         break;
      }
      do {
          let q_manager8 = new Map([[String.fromCharCode(102,95,57,55,95,115,116,121,108,101,100,0),true ], [String.fromCharCode(105,110,116,95,51,95,51,50,0),false ], [String.fromCharCode(114,101,112,97,105,110,116,95,102,95,53,48,0),false ]]);
          let statsnomoredataA = String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,104,95,49,49,0);
          let minimized = new Map([[String.fromCharCode(115,105,110,101,95,112,95,53,49,0),false ], [String.fromCharCode(106,95,52,57,95,97,97,114,99,104,0),false ], [String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,121,95,50,57,0),true ]]);
         iconstarR *= static_88k;
         q_manager8 = new Map([[`${q_manager8.size}`, 2 & statsnomoredataA.length]]);
         statsnomoredataA += `${q_manager8.size & 2}`;
         minimized = new Map([[`${minimized.size}`, minimized.size]]);
         if (121882.0 == iconstarR) {
            break;
         }
      } while ((121882.0 == iconstarR) && (4 >= (4 >> (Math.min(5, Math.abs(static_88k)))) || 4 >= (4 * static_88k)));
      if (4.73 <= (penaltyR / 2.78) || 3 <= (3 % (Math.max(8, libfbZ.length)))) {
         penaltyR *= parseFloat(`${parseInt(`${iconstarR}`)}`);
      }
      do {
          let icondefaultthumbnailc = [257, 550];
          let filedR = 2;
          let handlerj = String.fromCharCode(112,117,114,112,108,101,95,112,95,50,50,0);
         static_88k *= libfbZ.length;
         icondefaultthumbnailc.push(handlerj.length);
         filedR ^= filedR;
         handlerj = `${filedR + 3}`;
         if (2476230 == static_88k) {
            break;
         }
      } while ((static_88k < libfbZ.length) && (2476230 == static_88k));
      telegram7 /= Math.max(parseFloat(`${parseInt(`${securityr}`) - parseInt(`${penaltyR}`)}`), 5);
   }
      valuesK.push(valuesK.length >> (Math.min(Math.abs(2), 4)));

      }
    }
  };

  let checkPenaltyGoal = () => {
       let telemetryg = 5.0;
    let liveW = String.fromCharCode(101,109,111,114,121,95,55,95,52,53,0);
    let episodes3 = String.fromCharCode(97,118,100,99,116,95,118,95,51,49,0);
    let containerf = String.fromCharCode(101,95,55,51,95,116,114,97,110,115,102,101,114,101,100,0);
    let hinit_aC = String.fromCharCode(114,97,100,98,103,95,110,95,53,54,0);
    let imagemanagero = 4;
    let dropdownt = true;
    let mountingp = 3.0;
   if (dropdownt) {
       let bodanP = String.fromCharCode(112,95,50,51,95,109,97,112,115,116,114,105,110,103,0);
       let rightR = false;
       let sportsE = 0.0;
       let loadingR = 4;
       let assistf = [149, 369];
      if (4 == (3 ^ assistf.length)) {
         assistf = [assistf.length];
      }
         loadingR *= parseInt(`${sportsE}`) * loadingR;
          let relatedj = 3.0;
          let arrowrightwithtaile = String.fromCharCode(102,114,101,101,100,111,109,95,100,95,55,50,0);
          let redscoreball4 = 3.0;
         sportsE -= 2 - parseInt(`${sportsE}`);
         relatedj += 3;
         arrowrightwithtaile = `${parseInt(`${relatedj}`) * arrowrightwithtaile.length}`;
         redscoreball4 /= Math.max(4, parseInt(`${relatedj}`));
      if (bodanP.startsWith(`${rightR}`)) {
         bodanP = `${((rightR ? 1 : 1) ^ 1)}`;
      }
      for (let o = 0; o < 1; o++) {
         sportsE += (loadingR / (Math.max(2, (rightR ? 5 : 4))));
      }
         bodanP = `${loadingR}`;
         rightR = assistf.length > 71;
         assistf.push(((rightR ? 4 : 5) >> (Math.min(bodanP.length, 4))));
       let acceptedJ = false;
       let roomo = false;
      if (!acceptedJ || rightR) {
          let bellreminderW = new Map([[String.fromCharCode(116,95,57,54,95,97,117,103,109,101,110,116,101,100,0),964], [String.fromCharCode(104,97,108,100,99,108,117,116,95,107,95,50,56,0),486]]);
          let telemetryS = 2.0;
          let filterW = true;
          let logout0 = 4.0;
         rightR = loadingR < 36 && !rightR;
         bellreminderW[`${logout0}`] = ((filterW ? 2 : 4) - parseInt(`${logout0}`));
         telemetryS /= Math.max(parseInt(`${logout0}`) % 2, 4);
         filterW = 45.75 >= logout0;
      }
         sportsE -= 2;
         rightR = assistf.includes(rightR);
          let eighteenW = String.fromCharCode(100,95,51,55,95,98,117,99,107,101,116,97,108,108,111,99,0);
          let description_v0o = String.fromCharCode(98,95,52,48,95,97,114,109,118,116,101,0);
          let homeplayerI = [644, 807];
         rightR = bodanP.length >= 40;
         eighteenW = `${eighteenW.length}`;
         description_v0o += `${(String.fromCharCode(53,0) == description_v0o ? description_v0o.length : homeplayerI.length)}`;
         homeplayerI.push(homeplayerI.length);
      for (let i = 0; i < 2; i++) {
          let module3 = String.fromCharCode(97,114,103,118,95,109,95,55,50,0);
          let soundi = String.fromCharCode(114,101,108,101,97,115,101,95,114,95,51,51,0);
          let launchX = String.fromCharCode(97,116,116,114,105,98,117,116,101,95,104,95,49,56,0);
          let modeE = [865, 556];
          let descs = new Map([[String.fromCharCode(110,111,110,113,117,111,116,101,100,95,119,95,52,50,0),687], [String.fromCharCode(107,95,57,50,95,99,97,117,115,101,0),565], [String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,57,95,51,48,0),504]]);
         rightR = 66.83 > sportsE && !rightR;
         module3 += `${modeE.length / 1}`;
         soundi = `${module3.length * 2}`;
         launchX = `${descs.size | module3.length}`;
         modeE.push(soundi.length);
         descs = new Map([[module3, module3.length]]);
      }
       let images3 = String.fromCharCode(97,114,103,95,122,95,49,51,0);
       let constantsv = String.fromCharCode(97,95,50,57,95,99,109,111,118,0);
      episodes3 += `${parseInt(`${telemetryg}`) + 3}`;
   }
   while ((4.5 * mountingp) >= 5.20 && 4.5 >= mountingp) {
      dropdownt = hinit_aC.length >= 84;
      break;
   }
      mountingp *= 3 >> (Math.min(2, liveW.length));

    if (data.incidents != undefined && data.incidents.length > 0) {

   for (let w = 0; w < 3; w++) {
      dropdownt = imagemanagero < 99 && 32.14 < mountingp;
   }
      telemetryg *= parseFloat(`${containerf.length * 2}`);
   for (let f = 0; f < 1; f++) {
      liveW = `${3 - episodes3.length}`;
   }
      let item = data.incidents.filter(
        x => x.type == 8 && x.player != undefined && x.player?.id == data.id,
      );
   for (let i = 0; i < 1; i++) {
      telemetryg -= parseFloat(`${2}`);
   }
   while (mountingp == 1.9 || 1.83 == (mountingp + 1.9)) {
      mountingp += imagemanagero;
      break;
   }
       let commentD = 1.0;
      while (3.5 <= (commentD + commentD)) {
         commentD += parseInt(`${commentD}`);
         break;
      }
          let moviesS = String.fromCharCode(106,95,54,52,95,100,101,115,101,108,101,99,116,105,111,110,0);
         commentD /= Math.max(5, (moviesS == String.fromCharCode(108,0) ? moviesS.length : parseInt(`${commentD}`)));
         commentD += parseInt(`${commentD}`) | parseInt(`${commentD}`);
      mountingp *= imagemanagero;

      if (item.length > 0) {

      episodes3 = `${((dropdownt ? 1 : 1))}`;
   do {
      mountingp /= Math.max(2, 1);
      if (2815735.0 == mountingp) {
         break;
      }
   } while ((2815735.0 == mountingp) && (1.46 > mountingp));
      liveW = `${parseInt(`${telemetryg}`)}`;
        penaltyGoalCount = item.length;
       let redscoreballg = String.fromCharCode(118,95,49,53,95,116,105,109,101,111,117,116,0);
       let philippinesQ = 5.0;
          let hiad7 = [707, 838, 231];
          let kuaishoun = String.fromCharCode(105,95,50,95,119,101,108,115,101,110,99,100,101,109,111,0);
         philippinesQ += parseFloat(`${kuaishoun.length}`);
         hiad7 = [hiad7.length + 1];
         kuaishoun += `${hiad7.length | hiad7.length}`;
      if (4.95 < philippinesQ) {
          let libfolly0 = [677, 714, 69];
          let trophyL = String.fromCharCode(114,101,119,105,110,100,95,97,95,53,57,0);
          let strY = String.fromCharCode(98,121,114,121,95,50,95,53,48,0);
          let animations5 = String.fromCharCode(116,95,51,50,95,106,97,99,107,0);
         philippinesQ -= parseFloat(`${1}`);
         libfolly0.push(trophyL.length);
         trophyL = `${trophyL.length | 1}`;
         strY = `${2 >> (Math.min(4, strY.length))}`;
         animations5 += `${animations5.length + 2}`;
      }
      do {
         philippinesQ -= parseFloat(`${parseInt(`${philippinesQ}`)}`);
         if (1830083.0 == philippinesQ) {
            break;
         }
      } while ((5.52 == (philippinesQ + 2.53) || (2.53 + philippinesQ) == 3.66) && (1830083.0 == philippinesQ));
       let securityi = 0.0;
       let baiduadsF = [792, 969, 319];
          let viewsv = 2.0;
          let yellowcirclebg1 = new Map([[String.fromCharCode(105,95,57,49,95,97,99,99,114,117,101,100,0),String.fromCharCode(115,108,105,100,101,95,114,95,50,57,0)], [String.fromCharCode(121,95,56,95,114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,0),String.fromCharCode(105,95,49,51,95,98,114,101,110,100,101,114,0)], [String.fromCharCode(105,95,54,56,95,100,105,115,116,114,97,99,116,97,98,108,101,0),String.fromCharCode(99,108,97,117,115,101,95,50,95,51,54,0)]]);
         redscoreballg += "2";
         viewsv -= 2 - parseInt(`${viewsv}`);
         yellowcirclebg1[`${viewsv}`] = 3 >> (Math.min(1, Math.abs(yellowcirclebg1.size)));
      mountingp *= parseInt(`${mountingp}`);
   do {
      dropdownt = mountingp < 88.73;
      if (dropdownt ? !dropdownt : dropdownt) {
         break;
      }
   } while ((!dropdownt) && (dropdownt ? !dropdownt : dropdownt));
      hinit_aC = `${hinit_aC.length}`;

        return true;
      } else {

      telemetryg *= parseFloat(`${1}`);
       let private_qT = 2.0;
       let singaporeA = String.fromCharCode(99,111,109,112,97,116,95,50,95,53,52,0);
       let fullscreenmaxr = [String.fromCharCode(100,95,57,52,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0), String.fromCharCode(103,95,52,53,95,115,116,114,105,112,101,0)];
         private_qT /= Math.max(5, singaporeA.length & fullscreenmaxr.length);
       let pingM = 1.0;
       let emoji6 = 1.0;
      for (let a = 0; a < 1; a++) {
         pingM -= parseFloat(`${2 / (Math.max(2, fullscreenmaxr.length))}`);
      }
      while ((parseFloat(`${singaporeA.length}`) / (Math.max(8, pingM))) > 2.95 && 1.59 > (pingM / 2.95)) {
          let bingD = String.fromCharCode(97,95,57,52,95,112,114,101,115,101,100,0);
          let defaultroombgo = String.fromCharCode(113,95,50,56,0);
          let heart9 = true;
          let imagewatchliveu = String.fromCharCode(109,111,109,101,110,116,115,95,100,95,57,55,0);
          let shootyesgoal7 = String.fromCharCode(100,95,51,53,95,115,107,105,110,0);
         singaporeA += `${imagewatchliveu.length % 2}`;
         bingD += `${(shootyesgoal7 == String.fromCharCode(114,0) ? (heart9 ? 2 : 4) : shootyesgoal7.length)}`;
         defaultroombgo += `${defaultroombgo.length / (Math.max(3, shootyesgoal7.length))}`;
         heart9 = ((bingD.length & (!heart9 ? bingD.length : 28)) < 28);
         imagewatchliveu = "2";
         break;
      }
          let homeloadingo = [984, 271];
         private_qT *= 3 ^ parseInt(`${emoji6}`);
         homeloadingo = [homeloadingo.length];
          let arrowrightf = new Map([[String.fromCharCode(104,95,54,57,95,116,97,107,101,111,118,101,114,0),467], [String.fromCharCode(110,95,56,95,108,112,99,108,115,112,0),201]]);
         emoji6 /= Math.max(1, parseFloat(`${fullscreenmaxr.length & 3}`));
         arrowrightf = new Map([[`${arrowrightf.size}`, 3 | arrowrightf.size]]);
         singaporeA = `${parseInt(`${pingM}`) | 3}`;
          let configureX = 2;
          let shared6 = String.fromCharCode(108,95,52,49,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0);
         emoji6 /= Math.max(parseFloat(`${2 - singaporeA.length}`), 2);
         configureX -= shared6.length % (Math.max(1, 6));
         shared6 = "3";
         singaporeA = `${(String.fromCharCode(53,0) == singaporeA ? parseInt(`${pingM}`) : singaporeA.length)}`;
      dropdownt = singaporeA == String.fromCharCode(99,0);
   for (let i = 0; i < 3; i++) {
       let storeu = String.fromCharCode(111,95,56,50,95,100,101,99,111,100,101,102,0);
       let hometeamfieldF = [String.fromCharCode(117,95,50,54,95,97,100,106,117,115,116,109,101,110,116,0), String.fromCharCode(98,101,103,117,110,95,106,95,54,56,0)];
       let entryv = new Map([[String.fromCharCode(116,104,101,114,101,117,109,95,48,95,54,0),String.fromCharCode(112,101,105,114,115,95,56,95,57,49,0)], [String.fromCharCode(119,95,50,56,95,108,105,115,116,115,0),String.fromCharCode(120,95,54,57,95,111,112,97,113,117,101,0)]]);
       let iconpipshrinkg = String.fromCharCode(121,95,52,55,95,114,99,111,110,0);
       let predictionwin8 = 0.0;
      do {
         hometeamfieldF.push(iconpipshrinkg.length | 2);
         if (1499472 == hometeamfieldF.length) {
            break;
         }
      } while ((hometeamfieldF.includes(predictionwin8)) && (1499472 == hometeamfieldF.length));
         entryv[`${predictionwin8}`] = iconpipshrinkg.length >> (Math.min(1, Math.abs(parseInt(`${predictionwin8}`))));
         hometeamfieldF.push(entryv.size);
      if (5 == (1 << (Math.min(4, storeu.length))) && (storeu.length << (Math.min(1, hometeamfieldF.length))) == 1) {
         hometeamfieldF.push(hometeamfieldF.length | 1);
      }
      do {
          let mathH = 0;
          let imagewatchliveY = String.fromCharCode(108,101,98,110,95,116,95,51,51,0);
          let previewY = String.fromCharCode(115,119,97,116,99,104,95,99,95,49,54,0);
          let middlesound5 = [839, 38];
         storeu = "2";
         mathH |= 3;
         imagewatchliveY = `${(imagewatchliveY == String.fromCharCode(79,0) ? imagewatchliveY.length : previewY.length)}`;
         previewY = `${middlesound5.length / (Math.max(1, 6))}`;
         middlesound5 = [2 ^ previewY.length];
         if (String.fromCharCode(52,103,56,0) == storeu) {
            break;
         }
      } while ((iconpipshrinkg == String.fromCharCode(85,0) && storeu.length < 2) && (String.fromCharCode(52,103,56,0) == storeu));
      for (let m = 0; m < 1; m++) {
         iconpipshrinkg += `${2 | parseInt(`${predictionwin8}`)}`;
      }
      do {
         predictionwin8 -= parseFloat(`${2 + iconpipshrinkg.length}`);
         if (305209.0 == predictionwin8) {
            break;
         }
      } while (((hometeamfieldF.length + parseInt(`${predictionwin8}`)) > 3) && (305209.0 == predictionwin8));
         entryv = new Map([[iconpipshrinkg, iconpipshrinkg.length]]);
       let vietnamo = String.fromCharCode(97,116,116,97,99,104,101,100,95,114,95,55,55,0);
          let foregroundq = String.fromCharCode(103,101,116,115,95,99,95,56,52,0);
          let notificationfillemptyO = 4;
         hometeamfieldF.push(2 + hometeamfieldF.length);
         foregroundq = `${foregroundq.length}`;
         notificationfillemptyO ^= notificationfillemptyO;
      while (iconpipshrinkg.length <= entryv.size) {
         iconpipshrinkg = `${(String.fromCharCode(105,0) == iconpipshrinkg ? iconpipshrinkg.length : vietnamo.length)}`;
         break;
      }
       let reactnativeultimatelistviewM = String.fromCharCode(115,95,50,53,95,109,97,110,105,112,117,108,97,116,101,0);
      if ((4.24 - predictionwin8) < 5.42) {
          let gpayf = String.fromCharCode(99,95,50,54,95,114,101,115,105,122,101,114,0);
          let stylew = String.fromCharCode(98,105,111,109,101,116,114,121,95,106,95,49,55,0);
          let notificationfillemptyP = false;
          let giftbuttona = [String.fromCharCode(110,95,53,49,95,118,111,116,101,114,115,0), String.fromCharCode(107,95,50,50,95,103,116,101,115,116,0)];
          let sound0 = 5.0;
         vietnamo += `${reactnativeultimatelistviewM.length >> (Math.min(Math.abs(3), 2))}`;
         gpayf = `${((notificationfillemptyP ? 1 : 5) + parseInt(`${sound0}`))}`;
         stylew = `${parseInt(`${sound0}`) | stylew.length}`;
         notificationfillemptyP = stylew.endsWith(`${notificationfillemptyP}`);
         giftbuttona.push(giftbuttona.length & stylew.length);
      }
      for (let q = 0; q < 3; q++) {
          let iconrefreshn = [188, 335, 636];
         vietnamo += `${parseInt(`${predictionwin8}`)}`;
         iconrefreshn = [iconrefreshn.length % 3];
      }
      if (!storeu.includes(`${reactnativeultimatelistviewM.length}`)) {
         storeu += `${iconpipshrinkg.length}`;
      }
      hinit_aC = `${parseInt(`${mountingp}`)}`;
   }
        penaltyGoalCount = 0;
      liveW = `${parseInt(`${telemetryg}`)}`;
      liveW += `${hinit_aC.length}`;
       let uploadh = String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,95,56,95,50,54,0);
      for (let t = 0; t < 2; t++) {
         uploadh = `${2 / (Math.max(3, uploadh.length))}`;
      }
         uploadh = "2";
      while (uploadh == String.fromCharCode(52,0)) {
          let elementsL = 1;
          let become3 = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,57,95,55,51,0);
          let homeicona = new Map([[String.fromCharCode(109,105,115,109,97,116,99,104,95,116,95,50,51,0),String.fromCharCode(99,95,49,53,95,115,116,100,97,116,111,109,105,99,0)], [String.fromCharCode(97,95,54,49,0),String.fromCharCode(113,95,55,48,95,112,101,114,105,111,100,105,99,97,108,108,121,0)]]);
          let defaultplayerimgv = String.fromCharCode(99,112,117,105,100,95,105,95,56,50,0);
          let baiduads0 = false;
         uploadh += "3";
         elementsL &= (become3 == String.fromCharCode(117,0) ? become3.length : (baiduads0 ? 3 : 3));
         homeicona[become3] = elementsL;
         defaultplayerimgv = `${become3.length}`;
         baiduads0 = become3.length > 83;
         break;
      }
      containerf += `${(hinit_aC == String.fromCharCode(109,0) ? parseInt(`${telemetryg}`) : hinit_aC.length)}`;

        return false;
       let success_ = 4;
      for (let m = 0; m < 2; m++) {
         success_ <<= Math.min(Math.abs(success_ >> (Math.min(Math.abs(2), 5))), 5);
      }
      for (let q = 0; q < 1; q++) {
         success_ >>= Math.min(Math.abs(success_ * 2), 3);
      }
      for (let x = 0; x < 3; x++) {
         success_ &= 3;
      }
      liveW += `${3 & containerf.length}`;
   for (let o = 0; o < 2; o++) {
      liveW += `${parseInt(`${telemetryg}`) | 2}`;
   }
   while (!episodes3.includes(`${hinit_aC.length}`)) {
      episodes3 += `${3 * liveW.length}`;
      break;
   }

      }
    }
  };

  let checkOwnGoal = () => {
       let libsgcoreq = 4.0;
    let countdowna = 5.0;
    let redirecth = 2.0;
    let libfbi = 1;
    let iconlogoutw = String.fromCharCode(114,111,116,97,116,105,111,110,95,51,95,53,51,0);
    let fill9 = String.fromCharCode(101,115,116,105,109,97,116,111,114,95,115,95,56,48,0);
    let ying2 = 4.0;
    let eyeopenn = false;
    let tail1 = String.fromCharCode(117,95,54,50,95,112,110,105,101,108,115,97,100,100,0);
      redirecth -= parseInt(`${redirecth}`) ^ parseInt(`${libsgcoreq}`);
      libsgcoreq /= Math.max(parseFloat(`${1}`), 2);

    if (data.incidents != undefined && data.incidents.length > 0) {

      countdowna -= parseFloat(`${2 - parseInt(`${libsgcoreq}`)}`);
       let mappingJ = new Map([[String.fromCharCode(116,104,114,111,119,105,110,103,95,103,95,49,50,0),String.fromCharCode(115,101,112,105,97,95,112,95,57,50,0)], [String.fromCharCode(113,117,97,108,105,116,121,95,53,95,50,55,0),String.fromCharCode(109,95,49,55,95,111,112,116,105,109,105,122,101,114,0)], [String.fromCharCode(119,105,100,116,104,95,119,95,51,54,0),String.fromCharCode(100,101,108,97,121,101,100,95,99,95,50,51,0)]]);
       let controls1 = String.fromCharCode(115,116,114,110,115,116,114,95,52,95,56,57,0);
      for (let u = 0; u < 2; u++) {
          let dragD = [665, 806];
         controls1 = `${controls1.length}`;
         dragD = [dragD.length + 1];
      }
      if (!controls1.includes(`${mappingJ.size}`)) {
          let ballm = String.fromCharCode(100,95,55,57,95,103,101,111,103,114,97,112,104,105,99,97,108,0);
          let injuryb = String.fromCharCode(118,101,99,116,95,107,95,56,51,0);
         controls1 = `${injuryb.length - mappingJ.size}`;
         ballm += `${ballm.length}`;
         injuryb = `${ballm.length}`;
      }
      redirecth /= Math.max(parseInt(`${ying2}`) * 2, 2);
      let item = data.incidents.filter(
        x => x.type == 17 && x.player != undefined && x.player?.id == data.id,
      );
      iconlogoutw = `${fill9.length / (Math.max(1, parseInt(`${libsgcoreq}`)))}`;
       let circleK = String.fromCharCode(105,109,112,111,115,115,105,98,108,101,95,114,95,51,56,0);
       let wcopy_qV = [475, 552];
      for (let w = 0; w < 3; w++) {
          let firebaser = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,103,95,55,57,0);
         circleK += "1";
         firebaser += `${firebaser.length}`;
      }
          let cnewarchdefaultsx = [String.fromCharCode(105,95,57,48,95,115,101,112,97,114,97,116,101,115,0), String.fromCharCode(103,108,111,98,97,108,115,95,54,95,56,50,0), String.fromCharCode(114,95,50,54,95,105,110,116,101,114,110,0)];
          let iconqqO = String.fromCharCode(102,105,108,116,101,114,105,110,103,95,100,95,52,48,0);
         wcopy_qV = [circleK.length];
         cnewarchdefaultsx.push(2);
         iconqqO += `${iconqqO.length}`;
      for (let l = 0; l < 3; l++) {
          let materialc = [798, 917];
          let indicatorI = [690, 184];
          let fullscreenmax9 = 0.0;
         wcopy_qV = [parseInt(`${fullscreenmax9}`) % 1];
         materialc = [materialc.length];
         indicatorI = [3 >> (Math.min(5, indicatorI.length))];
         fullscreenmax9 *= materialc.length | 2;
      }
       let jingdongy = 3.0;
          let kuaishouU = 2.0;
          let smallbrightnessH = 1.0;
         jingdongy += parseFloat(`${wcopy_qV.length & 1}`);
         kuaishouU += parseFloat(`${parseInt(`${smallbrightnessH}`)}`);
      while ((circleK.length & 4) >= 4 && 4 >= (parseInt(`${jingdongy}`) + circleK.length)) {
         circleK = `${wcopy_qV.length}`;
         break;
      }
      iconlogoutw = `${wcopy_qV.length}`;

      if (item.length > 0) {

   do {
      ying2 -= parseFloat(`${parseInt(`${libsgcoreq}`)}`);
      if (1842107.0 == ying2) {
         break;
      }
   } while ((4.16 >= countdowna) && (1842107.0 == ying2));
   for (let p = 0; p < 3; p++) {
      libfbi |= fill9.length << (Math.min(Math.abs(1), 1));
   }
        ownGoalCount = item.length;
   if (countdowna < libfbi) {
       let basketballtrophy_ = new Map([[String.fromCharCode(107,95,55,48,95,98,97,107,101,100,0),String.fromCharCode(114,95,51,53,95,115,97,102,97,114,121,0)], [String.fromCharCode(115,117,99,99,101,101,100,101,100,95,122,95,56,49,0),String.fromCharCode(114,95,52,56,95,110,101,101,100,115,0)], [String.fromCharCode(120,105,110,99,95,111,95,50,51,0),String.fromCharCode(122,95,57,53,95,101,100,103,101,0)]]);
       let arrowrightwithtailr = 2;
       let libcrashsdkm = new Map([[String.fromCharCode(109,97,103,101,95,114,95,54,50,0),true ], [String.fromCharCode(101,95,56,95,117,110,119,105,110,100,0),false ]]);
       let libswresampleg = 0.0;
       let taiwanF = 0.0;
      for (let r = 0; r < 2; r++) {
         arrowrightwithtailr %= Math.max(4, libcrashsdkm.size >> (Math.min(5, Math.abs(arrowrightwithtailr))));
      }
      if (5 >= (parseInt(`${taiwanF}`) * arrowrightwithtailr) && 5 >= (parseInt(`${taiwanF}`) * arrowrightwithtailr)) {
         arrowrightwithtailr /= Math.max(3 << (Math.min(1, Math.abs(parseInt(`${taiwanF}`)))), 3);
      }
       let videoq = 2.0;
      do {
          let iconpointscorep = 2.0;
          let field_ = String.fromCharCode(113,95,55,53,95,114,117,110,116,101,115,116,115,0);
          let clubw = 0.0;
          let fullscreenminx = 0.0;
         arrowrightwithtailr += 2 * parseInt(`${fullscreenminx}`);
         iconpointscorep += parseFloat(`${field_.length}`);
         field_ += `${parseInt(`${clubw}`)}`;
         clubw *= parseFloat(`${parseInt(`${iconpointscorep}`)}`);
         fullscreenminx -= parseFloat(`${field_.length | parseInt(`${iconpointscorep}`)}`);
         if (arrowrightwithtailr == 3617529) {
            break;
         }
      } while ((5.53 < (videoq * 5.21) && (arrowrightwithtailr | 5) < 2) && (arrowrightwithtailr == 3617529));
         videoq *= parseFloat(`${arrowrightwithtailr}`);
       let libtann = 0.0;
         basketballtrophy_[`${taiwanF}`] = parseInt(`${libswresampleg}`) ^ parseInt(`${taiwanF}`);
         libswresampleg /= Math.max(1, parseFloat(`${1 >> (Math.min(1, Math.abs(basketballtrophy_.size)))}`));
       let cornerkickC = String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,104,95,53,57,0);
          let awayiconr = 0.0;
         cornerkickC = `${parseInt(`${libtann}`) | arrowrightwithtailr}`;
         awayiconr *= 2 << (Math.min(Math.abs(parseInt(`${awayiconr}`)), 2));
      for (let j = 0; j < 3; j++) {
          let baidu1 = 3;
         taiwanF /= Math.max(3, parseFloat(`${parseInt(`${libtann}`)}`));
         baidu1 += baidu1;
      }
         arrowrightwithtailr -= arrowrightwithtailr;
         videoq -= parseFloat(`${arrowrightwithtailr >> (Math.min(Math.abs(parseInt(`${taiwanF}`)), 4))}`);
      while ((libcrashsdkm.size / 2) < 2) {
         cornerkickC = `${basketballtrophy_.size}`;
         break;
      }
          let smallorangemanZ = [308, 115, 430];
          let castd = String.fromCharCode(109,97,110,100,97,116,111,114,121,95,111,95,50,52,0);
         libcrashsdkm = new Map([[`${libcrashsdkm.size}`, libcrashsdkm.size]]);
         smallorangemanZ = [2];
         castd += "3";
      libfbi *= libcrashsdkm.size * 2;
   }
   do {
       let forwardj = String.fromCharCode(98,95,49,95,101,110,116,105,114,101,0);
       let typesk = 3.0;
       let arrowrightwithtailR = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,52,95,53,56,0);
       let rewardvideoG = true;
         typesk += parseFloat(`${2}`);
         typesk -= parseFloat(`${parseInt(`${typesk}`) >> (Math.min(Math.abs(1), 4))}`);
         arrowrightwithtailR += `${forwardj.length}`;
         arrowrightwithtailR = `${3 & forwardj.length}`;
         typesk += parseFloat(`${2 & parseInt(`${typesk}`)}`);
      for (let c = 0; c < 2; c++) {
          let tick3 = String.fromCharCode(101,95,52,52,95,97,99,116,111,114,0);
         typesk *= parseFloat(`${tick3.length % 3}`);
      }
       let rulesx = String.fromCharCode(97,95,51,48,95,111,112,115,0);
       let iconclose8 = String.fromCharCode(115,117,98,112,111,105,110,116,95,115,95,55,55,0);
       let nativeexY = 3.0;
       let sideC = 5.0;
         nativeexY /= Math.max((parseFloat(`${String.fromCharCode(110,0) == arrowrightwithtailR ? parseInt(`${nativeexY}`) : arrowrightwithtailR.length}`)), 5);
      do {
          let corea = String.fromCharCode(108,95,53,53,95,111,108,100,101,114,0);
          let issub8 = new Map([[String.fromCharCode(110,97,118,105,103,97,116,105,111,110,95,51,95,51,57,0),624], [String.fromCharCode(118,95,51,50,95,111,110,118,101,114,115,97,116,105,111,110,0),899]]);
          let unfill_ = false;
         iconclose8 += `${rulesx.length % 1}`;
         corea = `${((unfill_ ? 3 : 3) / 3)}`;
         issub8 = new Map([[`${issub8.size}`, issub8.size + corea.length]]);
         unfill_ = corea.length <= 56 || unfill_;
         if (iconclose8 == String.fromCharCode(108,115,54,106,51,50,103,55,105,99,0)) {
            break;
         }
      } while ((iconclose8 == String.fromCharCode(108,115,54,106,51,50,103,55,105,99,0)) && (1 < iconclose8.length));
      while ((parseFloat(`${arrowrightwithtailR.length}`) - nativeexY) >= 5.3) {
          let homeiconw = String.fromCharCode(107,95,49,48,95,100,102,99,116,0);
          let iconcloseB = 3.0;
         arrowrightwithtailR += `${homeiconw.length}`;
         homeiconw = `${2 * parseInt(`${iconcloseB}`)}`;
         iconcloseB -= parseFloat(`${1 + parseInt(`${iconcloseB}`)}`);
         break;
      }
      do {
         typesk -= parseFloat(`${iconclose8.length + parseInt(`${nativeexY}`)}`);
         if (1980622.0 == typesk) {
            break;
         }
      } while ((typesk < 4.58) && (1980622.0 == typesk));
      iconlogoutw = `${parseInt(`${ying2}`) % 3}`;
      if (2858297 == iconlogoutw.length) {
         break;
      }
   } while ((2858297 == iconlogoutw.length) && (5.62 < countdowna));

        return true;
      } else {

      ying2 /= Math.max(parseFloat(`${2}`), 5);
   for (let m = 0; m < 2; m++) {
       let release_d0Y = 0;
       let iconnointernetV = 4;
       let liveB = 1.0;
      if ((iconnointernetV ^ 5) > 2) {
          let entryM = String.fromCharCode(97,112,101,116,97,103,95,104,95,49,54,0);
          let iconwatchnowo = 2.0;
          let iconfeedbackQ = String.fromCharCode(116,97,103,115,95,53,95,52,52,0);
          let pathw = [String.fromCharCode(98,95,54,48,95,99,97,114,100,105,110,97,108,105,116,121,0), String.fromCharCode(115,116,121,108,101,95,105,95,57,51,0)];
         liveB -= 2;
         entryM = `${entryM.length}`;
         iconwatchnowo += parseFloat(`${pathw.length | entryM.length}`);
         iconfeedbackQ += `${entryM.length}`;
         pathw = [pathw.length | iconfeedbackQ.length];
      }
         iconnointernetV /= Math.max(iconnointernetV & parseInt(`${liveB}`), 1);
         release_d0Y ^= 2 + iconnointernetV;
      do {
         liveB *= 1;
         if (liveB == 1598863.0) {
            break;
         }
      } while ((liveB == 1598863.0) && (3.63 <= (liveB / 2.9)));
      do {
          let imageactionliveZ = [String.fromCharCode(107,95,51,50,95,110,111,116,0), String.fromCharCode(121,95,54,54,95,122,109,113,115,104,101,108,108,0), String.fromCharCode(117,115,101,114,110,97,109,101,95,56,95,52,51,0)];
          let completet = 2;
         release_d0Y *= parseInt(`${liveB}`) >> (Math.min(3, Math.abs(1)));
         imageactionliveZ.push(imageactionliveZ.length | completet);
         completet <<= Math.min(Math.abs(completet + 3), 2);
         if (release_d0Y == 3890739) {
            break;
         }
      } while (((release_d0Y | 1) <= 3 && (release_d0Y | iconnointernetV) <= 1) && (release_d0Y == 3890739));
         release_d0Y += iconnointernetV;
       let stylesV = String.fromCharCode(104,95,51,50,95,114,101,116,114,97,110,109,105,115,115,105,111,110,0);
       let predictionarrown = String.fromCharCode(109,95,55,53,95,110,111,110,101,109,112,116,121,0);
      while ((stylesV.length | 4) > 4 || 4 > (stylesV.length | release_d0Y)) {
         stylesV += "3";
         break;
      }
          let contextx = false;
         stylesV = `${parseInt(`${liveB}`)}`;
         contextx = (contextx ? !contextx : !contextx);
      libsgcoreq -= parseFloat(`${iconlogoutw.length}`);
   }
        ownGoalCount = 0;
   if ((countdowna * 2) == 1.16) {
      libsgcoreq /= Math.max(3, parseFloat(`${3 << (Math.min(Math.abs(libfbi), 5))}`));
   }
      countdowna /= Math.max(2, parseFloat(`${parseInt(`${ying2}`) & fill9.length}`));

        return false;
   if (4.53 > (1.28 / (Math.max(9, ying2))) || (3 << (Math.min(2, iconlogoutw.length))) > 3) {
      iconlogoutw += `${libfbi * 2}`;
   }
       let eactw = String.fromCharCode(116,97,115,107,115,95,56,95,54,48,0);
      for (let w = 0; w < 1; w++) {
         eactw += `${eactw.length * eactw.length}`;
      }
         eactw = "2";
         eactw = `${eactw.length & 3}`;
      countdowna *= parseFloat(`${parseInt(`${ying2}`) >> (Math.min(Math.abs(parseInt(`${countdowna}`)), 4))}`);

      }
    }
  };

  return (
    <View style={styles.subPlayer}>
      <View style={styles.subPlayerView}>
        <View style={styles.subPlayerImageView}>
          {data.logo != undefined && data.logo?.length > 0 ? (
            <Image source={{uri: data.logo}} style={styles.subPlayerImage} />
          ) : isInjury &&
            data.player?.icon != undefined &&
            data.player?.icon.length > 0 ? (
            <Image
              source={{uri: data.player?.icon}}
              style={styles.subPlayerImage}
            />
          ) : isInjury && data?.player ? (
            <View style={styles.defaultSubPlayerView}>
              <ImageBackground
                source={isHome ? HomePlayer : AwayPlayer}
                style={styles.defaultSubPlayerImage}>
                {data.shirt_number != undefined && (
                  <Text style={styles.defaultSubPlayerText}>
                    {data.shirt_number}
                  </Text>
                )}
              </ImageBackground>
            </View>
          ) : !isInjury ? (
            <View style={styles.defaultSubPlayerView}>
              <ImageBackground
                source={isHome ? HomePlayer : AwayPlayer}
                style={styles.defaultSubPlayerImage}>
                {data.shirt_number != undefined && (
                  <Text style={styles.defaultSubPlayerText}>
                    {data.shirt_number}
                  </Text>
                )}
              </ImageBackground>
            </View>
          ) : (
            <View></View>
          )}
          {checkYellowCard() && (
            <Image
              source={YellowCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {checkYellowToRedCard() && (
            <Image
              source={YellowToRedCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {checkRedCard() && (
            <Image
              source={RedCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {isInjury && data?.player && (
            <Image source={InjuryIcon} style={styles.injuryIconStyle} />
          )}
        </View>
        <View style={styles.subPlayerDetailView}>
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={styles.playerText}>
            {isInjury ? data.player?.name_zh : data.name}
          </Text>
          <View style={styles.subPlayerLineView}>
            {!isInjury ? (
              <Text style={styles.playerNumText}>
                {data?.shirt_number != undefined
                  ? data?.shirt_number +
                    ' - ' +
                    vars.footballPosition[data?.position]
                  : vars.footballPosition[data?.position]}
              </Text>
            ) : (
              data?.player && (
                <Text style={styles.playerNumText}>
                  {vars.footballPosition[data?.player?.position] +
                    ' ' +
                    data?.reason}
                </Text>
              )
            )}
            {!isInjury && (
              <View style={styles.subInOutView}>
                {checkSubIn() && (
                  <View style={styles.subInnerInOutView}>
                    <Image style={styles.subArrowImage} source={SubIn} />
                    <Text style={styles.subInOutText}>{subInTime + "'"}</Text>
                  </View>
                )}
                {checkSubOut() && (
                  <View style={styles.subInnerInOutView}>
                    <Image style={styles.subArrowImage} source={SubOut} />
                    <Text style={styles.subInOutText}>{subOutTime + "'"}</Text>
                  </View>
                )}
                {checkGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={Goal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + goalCount}
                    </Text>
                  </View>
                )}
                {checkAssist() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={Assist}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + assistCount}
                    </Text>
                  </View>
                )}
                {checkOwnGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={OwnGoal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + ownGoalCount}
                    </Text>
                  </View>
                )}
                {checkPenaltyGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={PenaltyGoal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + penaltyGoalCount}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
      {/* {!isInjury && (
        <View style={styles.subPlayerStatisticView}>
        </View>
      )} */}
    </View>
  );
};

export default SubPlayerComponent;
