import {Image, ImageBackground, Text, View, Platform} from 'react-native';
import {
  Assist,
  Goal,
  iconUser,
  OwnGoal,
  PenaltyGoal,
  RedCard,
  SubIn,
  SubOut,
  YellowCard,
  YellowToRedCard,
  HomePlayer,
  AwayPlayer,
  PlayerShirt,
} from '../../../assets';
import {Colors} from '../../../global/wawa_armva';
import {round} from '../../../utility/utils';
import styles from './wawa_hiad_iconnewchat';

const Player = props => {
       let libglogT = [386, 559];
    let annerZ = new Map([[String.fromCharCode(115,117,98,110,111,100,101,95,49,95,55,51,0),false ], [String.fromCharCode(104,95,50,95,105,100,101,110,116,105,102,101,114,0),false ], [String.fromCharCode(102,114,101,101,122,101,95,50,95,53,49,0),false ]]);
    let goallogox = String.fromCharCode(100,95,57,51,95,97,100,115,97,114,109,97,115,109,0);
    let iconcloseW = String.fromCharCode(121,95,55,53,95,100,114,97,103,0);
    let private_9hi = String.fromCharCode(122,95,52,95,115,117,98,115,97,109,112,0);
    let defaultprofilepicx = String.fromCharCode(118,97,100,100,113,0);
    let mbridgeA = String.fromCharCode(114,101,98,97,115,101,95,100,95,57,57,0);
    let controlsc = String.fromCharCode(105,95,51,53,95,99,104,101,99,107,109,109,0);
    let floater3 = new Map([[String.fromCharCode(99,95,51,95,100,105,115,112,97,116,99,104,105,110,103,0),128], [String.fromCharCode(120,95,53,54,95,121,115,108,111,103,0),766]]);
   if (defaultprofilepicx == String.fromCharCode(70,0)) {
      iconcloseW += "3";
   }

  const {player, team} = props;
   do {
      defaultprofilepicx += `${2 & goallogox.length}`;
      if (defaultprofilepicx.length == 3374823) {
         break;
      }
   } while ((defaultprofilepicx.length == 3374823) && (5 > (1 * libglogT.length)));

  const rateColor = rate => {

       let libimagepipeline3 = String.fromCharCode(118,95,52,55,95,99,111,110,116,114,97,99,116,115,0);
      for (let j = 0; j < 3; j++) {
         libimagepipeline3 += `${libimagepipeline3.length}`;
      }
          let greenarrowupn = String.fromCharCode(112,95,51,48,95,100,114,111,112,0);
          let uimanagern = new Map([[String.fromCharCode(107,95,50,57,95,99,108,97,117,115,101,0),513], [String.fromCharCode(107,95,49,51,95,118,97,108,105,100,97,116,101,0),568]]);
         libimagepipeline3 = `${greenarrowupn.length | 2}`;
         greenarrowupn = `${uimanagern.size}`;
         uimanagern[`${uimanagern.size}`] = uimanagern.size << (Math.min(Math.abs(uimanagern.size), 4));
      if (libimagepipeline3.length > libimagepipeline3.length) {
         libimagepipeline3 = `${libimagepipeline3.length - 3}`;
      }
      private_9hi = `${libglogT.length / 1}`;
    return rate >= 8.1
      ? {backgroundColor: '#FD9F28'}
      : rate >= 7.1
      ? {backgroundColor: '#FFBA63'}
      : rate >= 6.1
      ? {backgroundColor: '#027B3C'}
      : {backgroundColor: '#8C8C8C'};
  };
   do {
      iconcloseW += `${libglogT.length}`;
      if (557531 == iconcloseW.length) {
         break;
      }
   } while (((iconcloseW.length * 2) >= 4 && (libglogT.length * 2) >= 4) && (557531 == iconcloseW.length));

  const {incidents} = player;
   while (iconcloseW.length < 4) {
       let update_yl = [257, 144, 69];
       let iconmegaphone_ = 0.0;
       let singapore1 = String.fromCharCode(108,111,97,100,115,95,107,95,56,55,0);
       let z_unlockk = String.fromCharCode(110,105,100,115,110,95,56,95,53,52,0);
         singapore1 += `${(String.fromCharCode(106,0) == singapore1 ? singapore1.length : z_unlockk.length)}`;
          let iconshareG = String.fromCharCode(121,95,51,50,95,103,101,116,115,103,110,99,116,120,110,111,0);
         z_unlockk += `${parseInt(`${iconmegaphone_}`) % (Math.max(z_unlockk.length, 4))}`;
         iconshareG += `${iconshareG.length}`;
      for (let w = 0; w < 2; w++) {
         update_yl.push(2);
      }
         iconmegaphone_ += parseFloat(`${3 ^ z_unlockk.length}`);
       let strc = true;
       let redscoreballY = false;
      do {
         singapore1 = `${update_yl.length}`;
         if (singapore1.length == 465905) {
            break;
         }
      } while ((5 == z_unlockk.length) && (singapore1.length == 465905));
         singapore1 = `${((redscoreballY ? 2 : 1))}`;
         z_unlockk += `${2 >> (Math.min(4, singapore1.length))}`;
         strc = update_yl.includes(iconmegaphone_);
         update_yl.push(2);
      if (iconmegaphone_ >= parseFloat(`${update_yl.length}`)) {
         iconmegaphone_ *= parseFloat(`${singapore1.length >> (Math.min(4, update_yl.length))}`);
      }
      do {
         z_unlockk += `${(String.fromCharCode(122,0) == singapore1 ? z_unlockk.length : singapore1.length)}`;
         if (2296462 == z_unlockk.length) {
            break;
         }
      } while ((5 >= z_unlockk.length) && (2296462 == z_unlockk.length));
      iconcloseW += `${(defaultprofilepicx == String.fromCharCode(97,0) ? mbridgeA.length : defaultprofilepicx.length)}`;
      break;
   }

  const imgSource =
    Platform.OS === 'android'
      ? team === 'home'
        ? PlayerShirt
        : AwayPlayer
      : team === 'home'
      ? HomePlayer
      : AwayPlayer;

  

   do {
      defaultprofilepicx += `${defaultprofilepicx.length ^ goallogox.length}`;
      if (defaultprofilepicx.length == 367623) {
         break;
      }
   } while ((!defaultprofilepicx.endsWith(`${annerZ.size}`)) && (defaultprofilepicx.length == 367623));
  const subComponent = (incidents, playerId) => {

   do {
      annerZ[goallogox] = 2;
      if (1762983 == annerZ.size) {
         break;
      }
   } while ((2 >= (3 ^ annerZ.size) || 4 >= (3 ^ goallogox.length)) && (1762983 == annerZ.size));
    return incidents.map(incident => {
      if (incident.type === 9) {

      iconcloseW += "2";
        return (
          <View key={'subsitution' + playerId} style={styles.subContainer}>
            <Image
              style={styles.imageIncident}
              source={incident.in_player.id === playerId ? SubIn : SubOut}
              resizeMode="stretch"></Image>
          </View>
        );
      libglogT.push(goallogox.length);

      }
    });
       let iconorientationg = 5;
       let nativemodule9 = String.fromCharCode(116,95,53,56,0);
      if (nativemodule9.length > iconorientationg) {
         nativemodule9 = "2";
      }
          let iconstara = true;
          let spinnerk = 4.0;
          let iconqqK = 3.0;
         iconorientationg <<= Math.min(Math.abs(nativemodule9.length & 2), 5);
         iconstara = 86.48 == spinnerk;
         spinnerk /= Math.max((parseFloat(`${parseInt(`${iconqqK}`) / (Math.max(3, (iconstara ? 2 : 4)))}`)), 3);
         iconqqK -= (parseFloat(`${(iconstara ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${spinnerk}`)), 2))}`));
      while ((iconorientationg * nativemodule9.length) > 3) {
         iconorientationg *= nativemodule9.length % 2;
         break;
      }
      while (nativemodule9.endsWith(`${iconorientationg}`)) {
         nativemodule9 = "1";
         break;
      }
         iconorientationg |= 3 >> (Math.min(3, nativemodule9.length));
          let gesturesc = String.fromCharCode(106,115,111,110,114,112,99,95,105,95,51,49,0);
         nativemodule9 += "2";
         gesturesc += `${1 + gesturesc.length}`;
      mbridgeA = `${goallogox.length & 3}`;

  };
       let iconplayj = new Map([[String.fromCharCode(116,95,57,56,95,115,117,112,112,111,114,116,101,100,0),false ], [String.fromCharCode(117,95,56,52,95,118,101,110,99,0),true ], [String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,117,95,54,57,0),false ]]);
       let sellb = false;
       let upgradeq = 2.0;
         sellb = !sellb;
       let flyerD = [180, 732];
       let cast9 = [String.fromCharCode(111,95,50,95,99,104,97,114,115,101,116,0), String.fromCharCode(102,97,105,108,117,114,101,115,95,113,95,57,55,0), String.fromCharCode(118,95,57,52,95,110,111,114,109,97,108,105,122,101,114,0)];
          let static_oN = String.fromCharCode(101,120,112,108,97,105,110,95,98,95,50,0);
         cast9 = [1 & flyerD.length];
         static_oN = `${static_oN.length >> (Math.min(Math.abs(1), 4))}`;
         sellb = cast9.length >= parseInt(`${upgradeq}`);
          let homeinactive1 = new Map([[String.fromCharCode(105,95,57,56,95,105,109,112,111,114,116,0),false ], [String.fromCharCode(116,101,120,105,112,111,100,95,117,95,52,57,0),true ], [String.fromCharCode(101,95,52,55,95,115,105,103,110,117,109,0),true ]]);
          let crownU = String.fromCharCode(112,114,105,110,116,95,101,95,52,49,0);
         flyerD = [crownU.length];
         homeinactive1 = new Map([[`${homeinactive1.size}`, homeinactive1.size % (Math.max(10, homeinactive1.size))]]);
         crownU = "3";
         upgradeq -= iconplayj.size % (Math.max(1, cast9.length));
         flyerD = [cast9.length >> (Math.min(Math.abs(3), 5))];
         upgradeq /= Math.max(1, 5);
         cast9.push(parseInt(`${upgradeq}`));
      goallogox = "1";


  

   while (2 < private_9hi.length) {
      private_9hi = `${private_9hi.length}`;
      break;
   }
  const cardComponent = incidents => {

       let dangerG = 2;
       let icondefaultthumbnailY = String.fromCharCode(113,95,53,54,95,100,111,99,116,111,116,97,108,0);
       let placeholderD = false;
      while (dangerG >= 5 && (5 << (Math.min(4, Math.abs(dangerG)))) >= 3) {
         dangerG >>= Math.min(5, Math.abs(icondefaultthumbnailY.length << (Math.min(Math.abs(1), 1))));
         break;
      }
      for (let l = 0; l < 3; l++) {
         icondefaultthumbnailY += `${(3 * (placeholderD ? 3 : 3))}`;
      }
         placeholderD = icondefaultthumbnailY.length > 19;
         icondefaultthumbnailY += `${1 ^ icondefaultthumbnailY.length}`;
          let helperv = [764, 194];
          let launcherD = String.fromCharCode(112,95,55,55,95,104,111,116,0);
          let playershirtC = false;
         icondefaultthumbnailY += `${(dangerG * (playershirtC ? 1 : 3))}`;
         helperv.push(launcherD.length * helperv.length);
         launcherD = `${helperv.length * 3}`;
         playershirtC = String.fromCharCode(68,0) == launcherD;
      for (let z = 0; z < 1; z++) {
         icondefaultthumbnailY = `${(String.fromCharCode(80,0) == icondefaultthumbnailY ? icondefaultthumbnailY.length : dangerG)}`;
      }
         icondefaultthumbnailY += `${icondefaultthumbnailY.length}`;
      if ((dangerG % (Math.max(4, 5))) >= 5 && (icondefaultthumbnailY.length % (Math.max(4, 4))) >= 1) {
          let fileB = new Map([[String.fromCharCode(120,95,51,51,95,97,99,116,105,118,105,116,105,101,115,0),322], [String.fromCharCode(109,112,111,115,95,108,95,50,52,0),566]]);
          let currentd = String.fromCharCode(104,100,101,99,95,109,95,49,50,0);
          let fillS = new Map([[String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,57,95,52,55,0),51], [String.fromCharCode(97,95,49,54,95,119,97,118,101,115,121,110,116,104,0),651], [String.fromCharCode(105,115,112,111,115,97,98,108,101,95,100,95,49,51,0),813]]);
         icondefaultthumbnailY += `${icondefaultthumbnailY.length}`;
         fileB[currentd] = 1 | fillS.size;
         currentd = `${fileB.size}`;
         fillS[`${currentd}`] = 1;
      }
          let basketballdetailsbgZ = 3.0;
          let policyS = String.fromCharCode(115,117,98,115,116,114,105,110,103,95,50,95,57,53,0);
         dangerG &= icondefaultthumbnailY.length | 1;
         basketballdetailsbgZ += 1 >> (Math.min(1, Math.abs(parseInt(`${basketballdetailsbgZ}`))));
         policyS += `${policyS.length}`;
      iconcloseW = `${1 * private_9hi.length}`;
    let cardType;
      iconcloseW += "2";


    incidents.map(incident => {

      defaultprofilepicx += `${annerZ.size}`;
      if (incident.type === 3 || incident.type === 4 || incident.type === 15) {

   do {
      defaultprofilepicx = `${3 << (Math.min(3, defaultprofilepicx.length))}`;
      if (defaultprofilepicx == String.fromCharCode(122,57,54,48,0)) {
         break;
      }
   } while ((1 > iconcloseW.length) && (defaultprofilepicx == String.fromCharCode(122,57,54,48,0)));
        cardType =
          incident.type === 3
            ? YellowCard
            : incident.type === 4
            ? RedCard
            : YellowToRedCard;
      }
    });
      annerZ[mbridgeA] = 1 >> (Math.min(4, iconcloseW.length));

    if (cardType) {

   do {
      mbridgeA = "1";
      if (String.fromCharCode(56,114,49,53,51,0) == mbridgeA) {
         break;
      }
   } while ((String.fromCharCode(56,114,49,53,51,0) == mbridgeA) && (mbridgeA.length > 3 || 3 > defaultprofilepicx.length));
      return (
        <View style={styles.cardContainer}>
          <Image
            style={styles.imageIncident}
            source={cardType}
            resizeMode="stretch"></Image>
        </View>
      );
   if (annerZ.size > 1) {
      controlsc += `${defaultprofilepicx.length - private_9hi.length}`;
   }

    }
  };
      iconcloseW = `${(controlsc == String.fromCharCode(50,0) ? annerZ.size : controlsc.length)}`;


  

      defaultprofilepicx = `${annerZ.size}`;
  const goalComponent = (incidents, type, playerId) => {

   while (iconcloseW != String.fromCharCode(75,0)) {
      defaultprofilepicx += `${goallogox.length}`;
      break;
   }
    let totalOwnGoal = incidents.filter(incident => {

   do {
       let mbsplash5 = 3.0;
       let gifgoalF = 0.0;
       let sell5 = new Map([[String.fromCharCode(117,95,51,49,95,110,111,109,105,110,97,108,0),127], [String.fromCharCode(106,95,49,48,48,95,109,97,105,110,104,101,97,100,101,114,0),898], [String.fromCharCode(97,114,103,120,105,95,102,95,57,54,0),807]]);
       let iconorientationy = new Map([[String.fromCharCode(97,95,50,95,104,117,100,0),String.fromCharCode(111,95,52,57,95,102,105,108,116,0)], [String.fromCharCode(104,100,97,116,97,95,51,95,56,56,0),String.fromCharCode(98,95,50,49,95,109,97,112,112,105,110,103,0)]]);
       let google9 = String.fromCharCode(105,109,108,116,95,51,95,51,52,0);
         google9 = "1";
         gifgoalF *= parseFloat(`${google9.length}`);
         mbsplash5 *= parseFloat(`${sell5.size ^ 3}`);
          let androidf = String.fromCharCode(114,95,52,52,95,111,112,101,110,101,114,0);
          let shareblacky = new Map([[String.fromCharCode(98,95,55,51,95,99,105,114,99,108,101,115,0),870], [String.fromCharCode(113,95,50,57,95,99,104,112,108,0),127], [String.fromCharCode(100,95,53,49,95,115,116,97,99,107,115,0),523]]);
         google9 += `${sell5.size}`;
         androidf = `${shareblacky.size << (Math.min(androidf.length, 5))}`;
         shareblacky = new Map([[`${shareblacky.size}`, shareblacky.size]]);
      while ((google9.length / 2) == 3) {
          let shareblackF = 3.0;
          let basketballmatchdetailbg2 = 0.0;
          let uimanagerj = 4.0;
          let modalK = String.fromCharCode(112,111,119,101,114,102,117,108,95,117,95,56,52,0);
         google9 += `${parseInt(`${shareblackF}`) >> (Math.min(1, Math.abs(2)))}`;
         shareblackF -= parseFloat(`${2 * parseInt(`${basketballmatchdetailbg2}`)}`);
         basketballmatchdetailbg2 *= parseFloat(`${parseInt(`${basketballmatchdetailbg2}`) & parseInt(`${uimanagerj}`)}`);
         uimanagerj /= Math.max(parseInt(`${basketballmatchdetailbg2}`) * modalK.length, 2);
         modalK += `${modalK.length % (Math.max(3, 7))}`;
         break;
      }
         iconorientationy = new Map([[`${mbsplash5}`, 3]]);
         iconorientationy[google9] = 3 ^ sell5.size;
      do {
         google9 += `${parseInt(`${mbsplash5}`)}`;
         if (String.fromCharCode(56,108,57,51,99,100,0) == google9) {
            break;
         }
      } while ((String.fromCharCode(56,108,57,51,99,100,0) == google9) && (google9.length <= parseInt(`${mbsplash5}`)));
       let abidetectG = 1.0;
       let shootV = 1.0;
      while (Array.from(sell5.keys()).includes(`${gifgoalF}`)) {
          let chat6 = String.fromCharCode(99,95,51,48,95,112,114,101,118,105,111,117,115,108,121,0);
          let matchactivez = true;
          let streamingj = 4.0;
          let mathC = new Map([[String.fromCharCode(97,95,57,55,95,98,111,114,100,101,114,108,101,115,115,0),false ], [String.fromCharCode(111,97,101,112,95,102,95,49,0),true ]]);
         sell5 = new Map([[`${abidetectG}`, google9.length * 2]]);
         chat6 += `${parseInt(`${streamingj}`) >> (Math.min(3, Math.abs(1)))}`;
         matchactivez = streamingj <= 61.9;
         mathC[chat6] = (chat6.length << (Math.min(2, Math.abs((matchactivez ? 5 : 5)))));
         break;
      }
      do {
         shootV += parseFloat(`${2}`);
         if (shootV == 4204574.0) {
            break;
         }
      } while ((4 == (google9.length * parseInt(`${shootV}`)) && 1 == (4 ^ google9.length)) && (shootV == 4204574.0));
          let yellowcirclebgh = [453, 320];
          let ksadY = true;
          let libsgcoreN = [String.fromCharCode(112,114,111,103,114,97,109,115,95,114,95,49,56,0), String.fromCharCode(104,101,120,116,105,108,101,95,105,95,49,56,0), String.fromCharCode(115,109,107,97,95,111,95,54,0)];
         shootV *= parseFloat(`${parseInt(`${abidetectG}`)}`);
         yellowcirclebgh.push(2);
         ksadY = !ksadY;
         libsgcoreN = [1];
          let arrowi = 1.0;
         iconorientationy[`${arrowi}`] = parseInt(`${arrowi}`) & 1;
      for (let o = 0; o < 2; o++) {
          let thumbnailf = String.fromCharCode(104,117,110,103,95,108,95,49,50,0);
         shootV -= parseFloat(`${google9.length - thumbnailf.length}`);
      }
         iconorientationy[`${abidetectG}`] = parseInt(`${abidetectG}`) * parseInt(`${gifgoalF}`);
      private_9hi += `${1 + google9.length}`;
      if (private_9hi == String.fromCharCode(103,53,111,122,106,0)) {
         break;
      }
   } while ((private_9hi == String.fromCharCode(103,53,111,122,106,0)) && (!iconcloseW.startsWith(`${private_9hi.length}`)));
      if (incident.type === 17) return true;
   while (defaultprofilepicx.length <= 4) {
       let icondownimgU = [212, 396];
       let whitevideolives = String.fromCharCode(116,114,97,115,104,111,108,100,95,120,95,55,54,0);
       let infoZ = 0.0;
         whitevideolives = `${whitevideolives.length}`;
       let kickn = [397, 213];
          let clubz = 2;
          let iconnewchatL = String.fromCharCode(120,95,57,48,95,97,99,116,111,114,0);
         kickn = [3];
         clubz &= 2;
         iconnewchatL = "2";
      while (kickn.includes(infoZ)) {
         infoZ *= parseFloat(`${whitevideolives.length}`);
         break;
      }
      if (1 <= (whitevideolives.length + 2)) {
         whitevideolives = `${kickn.length}`;
      }
      while ((icondownimgU.length >> (Math.min(whitevideolives.length, 3))) < 5 && 5 < (icondownimgU.length >> (Math.min(whitevideolives.length, 2)))) {
         icondownimgU = [kickn.length];
         break;
      }
      while (whitevideolives.length > 5) {
         whitevideolives += `${whitevideolives.length}`;
         break;
      }
         infoZ *= parseFloat(`${kickn.length >> (Math.min(Math.abs(2), 5))}`);
         kickn.push((String.fromCharCode(111,0) == whitevideolives ? kickn.length : whitevideolives.length));
      iconcloseW += `${annerZ.size}`;
      break;
   }

    }).length;
      defaultprofilepicx = `${defaultprofilepicx.length}`;

    let totalPenatlyGoal = incidents.filter(incident => {

       let sortI = String.fromCharCode(98,95,49,53,0);
       let minip = true;
       let downloadp = String.fromCharCode(117,109,98,101,114,95,57,95,57,54,0);
         minip = downloadp.length < 85;
      while (4 >= downloadp.length) {
         minip = !minip;
         break;
      }
         minip = downloadp.includes(`${minip}`);
         minip = minip || sortI.length > 88;
      do {
         minip = downloadp.length == 74;
         if (minip ? !minip : minip) {
            break;
         }
      } while ((minip ? !minip : minip) && (2 >= downloadp.length || minip));
          let temperatureG = String.fromCharCode(97,95,51,56,95,98,114,101,97,107,112,111,105,110,116,0);
          let albumS = String.fromCharCode(112,95,57,54,95,115,105,98,108,105,110,103,0);
          let filedk = false;
         minip = (temperatureG.length / (Math.max(sortI.length, 7))) > 65;
         temperatureG += `${((filedk ? 5 : 5) / (Math.max(albumS.length, 3)))}`;
         albumS = `${((filedk ? 5 : 5) % 2)}`;
      for (let g = 0; g < 2; g++) {
         minip = downloadp.startsWith(`${minip}`);
      }
      while (downloadp != sortI) {
          let sortH = String.fromCharCode(100,101,115,99,114,105,98,101,95,118,95,56,50,0);
          let iconarrowrightblackC = String.fromCharCode(110,111,116,104,105,110,103,95,56,95,54,49,0);
         sortI = "1";
         sortH = `${iconarrowrightblackC.length / (Math.max(1, 8))}`;
         iconarrowrightblackC += `${2 >> (Math.min(4, iconarrowrightblackC.length))}`;
         break;
      }
       let rewardvideok = String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,104,95,54,53,0);
       let iconrefreshn = String.fromCharCode(115,95,54,51,95,99,111,110,102,105,114,109,101,100,0);
      libglogT = [libglogT.length];
      if (incident.type === 8) return true;
   do {
      floater3 = new Map([[`${libglogT.length}`, (String.fromCharCode(119,0) == goallogox ? libglogT.length : goallogox.length)]]);
      if (2227446 == floater3.size) {
         break;
      }
   } while ((2227446 == floater3.size) && ((4 | floater3.size) > 5));

    }).length;
      annerZ = new Map([[`${floater3.size}`, 1 * goallogox.length]]);


    let totalGoal;
   if (!iconcloseW.endsWith(mbridgeA)) {
       let fastforward3 = 5;
       let historyl = String.fromCharCode(114,101,115,111,108,118,101,95,114,95,49,0);
       let gradlewb = 0.0;
       let vignettem = false;
       let ewarded0 = [933, 777, 630];
       let notificationgray8 = 3.0;
       let incidentz = 4.0;
      if (gradlewb == 3.54 && 3.33 == (gradlewb + 3.54)) {
          let diceT = [36, 567];
          let exampleimagej = [352, 998, 422];
          let redirectZ = 4;
          let appleE = String.fromCharCode(108,95,52,54,0);
         vignettem = redirectZ == ewarded0.length;
         diceT = [exampleimagej.length / (Math.max(appleE.length, 8))];
         exampleimagej = [appleE.length];
         redirectZ += exampleimagej.length;
      }
          let activityG = 1.0;
          let icontransfercluby = 3.0;
         vignettem = 75.61 == (incidentz + gradlewb);
         activityG -= parseInt(`${activityG}`) / (Math.max(2, parseInt(`${icontransfercluby}`)));
         icontransfercluby -= 1 ^ parseInt(`${activityG}`);
       let pushQ = [863, 935];
         incidentz -= 1;
      do {
          let staru = 0.0;
          let f_animation1 = 1.0;
          let indexe = 1.0;
          let libavcodecF = 4.0;
         pushQ = [2];
         staru *= parseFloat(`${parseInt(`${indexe}`) >> (Math.min(Math.abs(parseInt(`${libavcodecF}`)), 4))}`);
         f_animation1 /= Math.max(1, parseFloat(`${1}`));
         indexe += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${libavcodecF}`)), 3))}`);
         if (pushQ.length == 356448) {
            break;
         }
      } while ((pushQ.length == 356448) && (!pushQ.includes(notificationgray8)));
         gradlewb /= Math.max(ewarded0.length % (Math.max(3, 8)), 2);
      for (let l = 0; l < 2; l++) {
         ewarded0.push(parseInt(`${incidentz}`));
      }
         gradlewb *= 3;
      for (let w = 0; w < 3; w++) {
         ewarded0.push(ewarded0.length);
      }
      do {
         historyl += `${ewarded0.length}`;
         if (4153462 == historyl.length) {
            break;
         }
      } while ((!historyl.includes(`${incidentz}`)) && (4153462 == historyl.length));
          let reviewN = String.fromCharCode(115,110,111,119,95,100,95,51,49,0);
          let play6 = [256, 707, 1];
         gradlewb -= parseInt(`${incidentz}`);
         reviewN = `${reviewN.length}`;
         play6.push(2);
      while (historyl.length >= 4) {
         historyl = `${pushQ.length + 1}`;
         break;
      }
      if (3 > fastforward3) {
         vignettem = pushQ.length >= 45;
      }
         notificationgray8 += fastforward3 / (Math.max(historyl.length, 3));
      iconcloseW += `${((vignettem ? 1 : 4))}`;
   }

    try {

   for (let c = 0; c < 2; c++) {
      annerZ = new Map([[`${annerZ.size}`, 3 | annerZ.size]]);
   }
      totalGoal = incidents.filter(incident => {

   while (iconcloseW.length == 1) {
      private_9hi += `${iconcloseW.length}`;
      break;
   }
        if (incident.type === 1 && incident.player.id === playerId) return true;
      }).length;
    } catch (error) {
      totalGoal = 0;
    }

    incidents.filter(incident => {
      if (incident.type === 1 && incident.player.id === playerId) return true;
    }).length;

    
    if (totalOwnGoal > 0 && type === 17) {
      return (
        <View style={styles.ownGoalContainer}>
          <Image
            style={styles.imageIncident}
            source={OwnGoal}
            resizeMode="stretch"></Image>
          {totalOwnGoal > 1 && (
            <View style={styles.assistCountContainer}>
              <Text style={styles.textNumberOfCount}>{totalOwnGoal}</Text>
            </View>
          )}
        </View>
      );
    }
    
    if (totalPenatlyGoal > 0 && type === 8) {
      return (
        <View style={styles.ballContainer}>
          <Image
            style={styles.imageIncident}
            source={PenaltyGoal}
            resizeMode="stretch"></Image>
          {totalPenatlyGoal > 1 && (
            <View style={styles.ballCountContainer}>
              <Text style={styles.textNumberOfCount}>{totalPenatlyGoal}</Text>
            </View>
          )}
        </View>
      );
    }
    
    if (totalGoal > 0 && type === 1) {
      return (
        <View style={styles.ballContainer}>
          <Image
            style={styles.imageIncident}
            source={Goal}
            resizeMode="stretch"></Image>
          {totalGoal > 1 && (
            <View style={styles.ballCountContainer}>
              <Text style={styles.textNumberOfCount}>{totalGoal}</Text>
            </View>
          )}
        </View>
      );
    }
  };

  
  const assistComponent = (incidents, playerId) => {
    let totalAssist = incidents.filter(incident => {
      if (
        incident?.type === 1 &&
        (incident?.assist1?.id === playerId ||
          incident?.assist2?.id === playerId)
      )
        return true;
    }).length;
    if (totalAssist > 0) {
      return (
        <View style={styles.assistContainer}>
          <Image
            style={styles.imageIncident}
            source={Assist}
            resizeMode="stretch"></Image>
          {totalAssist > 1 && (
            <View style={styles.assistCountContainer}>
              <Text style={styles.textNumberOfCount}>{totalAssist}</Text>
            </View>
          )}
        </View>
      );
    }
  };

  const topLeft = () => {
    return (
      <View style={styles.topLeftContainer}>
        {incidents && assistComponent(incidents, player?.id)}
      </View>
    );
  };

  const topRight = () => {
    return (
      <View style={styles.topRightContainer}>
        {incidents && subComponent(incidents, player?.id)}
      </View>
    );
  };

  const bottomLeft = () => {
    return (
      <View style={styles.bottomLeftContainer}>
        <View style={styles.bottomLeftFlex}>
          {incidents && goalComponent(incidents, 17)}
          {incidents && cardComponent(incidents)}
        </View>
      </View>
    );
  };

  const bottomRight = () => {
    return (
      <View style={styles.bottomRightContainer}>
        <View style={styles.bottomRightFlex}>
          {incidents && goalComponent(incidents, 1, player.id)}
          {incidents && goalComponent(incidents, 8)}
        </View>
      </View>
    );
  };

  return (
    <View key={team + player.id} style={styles.player}>
      <View style={styles.imageContainer}>
        {player?.logo ? (
          <Image
            style={styles.imagePlayer}
            source={{
              uri: player?.logo
                ? player?.logo
                : team === 'home'
                ? HomePlayer
                : AwayPlayer,
            }}></Image>
        ) : (
          <ImageBackground
            style={[
              styles.imagePlayer,
              {justifyContent: 'center', alignContent: 'center'},
            ]}
            
            source={imgSource}
            resizeMode="center">
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'PingFang SC',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 6,
                color: '#F4F4F4',
              }}>
              {player?.shirt_number}
            </Text>
          </ImageBackground>
        )}
        {topLeft()}
        {topRight()}
        {bottomLeft()}
        {bottomRight()}
      </View>
      <Text style={styles.textPlayerNumber}>{player?.shirt_number}</Text>
      <Text style={styles.textPlayerName} numberOfLines={1}>
        {player?.name}
      </Text>
      <View style={[styles.playerRate, rateColor(player?.rating)]}>
        <Text style={[styles.textPlayerRate]}>{round(player?.rating, 1)}</Text>
      </View>
    </View>
  );
};

export default Player;
