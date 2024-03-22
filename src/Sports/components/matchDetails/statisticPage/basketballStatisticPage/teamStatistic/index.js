import MatchStatistic from '../../../../../components/matchStatistic';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  ShowMore,
  ShowLess,
  BasketballAwayTeam,
  BasketballIcon,
} from '../../../../../assets';
import styles from './fgl_less_position';
import {useState} from 'react';

const TeamStatistic = ({showTitle = true, data, sportType}) => {
  const [showHomeMore, setShowHomeMore] = useState(false);

  const TeamStatisticTitle = [
    '命中次数',
    '投篮次数',
    '投篮命中率',
    '三分投篮命中次数',
    '三分投篮次数',
    '三分球投篮命中率 (%)',
    '罚球命中次数',
    '罚球投篮次数',
    '罚球命中率 (%)',
    '进攻篮板',
    '防守篮板',
    '总的篮板',
    '助攻数',
    '抢断数',
    '盖帽数',
    '失误次数',
    '个人犯规次数',
    '得分',
  ];

  const filteredData = () => {
       let plus8 = true;
    let carouselT = 4.0;
    let yellowK = String.fromCharCode(115,116,114,107,0);
    let modityU = String.fromCharCode(119,95,54,50,95,118,114,97,115,116,101,114,0);
    let const_9f = 2.0;
    let math4 = [2, 992, 137];
    let suggestion1 = false;
    let canvasx = 2;
    let t_positionk = 2.0;
    let resend4 = [527, 888, 51];
   if ((math4.length + parseInt(`${carouselT}`)) == 5 || (math4.length / 5) == 3) {
      carouselT -= parseInt(`${carouselT}`) * 2;
   }
      suggestion1 = 7.9 <= t_positionk && String.fromCharCode(70,0) == yellowK;
       let textN = String.fromCharCode(101,95,53,48,95,99,111,109,112,97,110,121,0);
       let lightE = [266, 108];
       let scores = new Map([[String.fromCharCode(120,111,114,101,100,0),String.fromCharCode(104,111,117,114,0)], [String.fromCharCode(101,120,104,97,117,115,116,0),String.fromCharCode(102,101,119,0)], [String.fromCharCode(117,112,100,97,116,101,115,0),String.fromCharCode(109,117,116,101,100,0)]]);
      do {
          let privacyx = String.fromCharCode(116,105,99,107,105,110,103,95,52,95,55,52,0);
          let reducerq = String.fromCharCode(108,95,56,51,95,98,115,102,115,0);
          let tickedG = String.fromCharCode(98,117,102,115,112,97,99,101,0);
         textN = `${(privacyx == String.fromCharCode(80,0) ? privacyx.length : scores.size)}`;
         reducerq = `${(reducerq == String.fromCharCode(113,0) ? tickedG.length : reducerq.length)}`;
         tickedG = `${tickedG.length >> (Math.min(Math.abs(3), 2))}`;
         if (String.fromCharCode(116,117,122,116,53,57,55,106,0) == textN) {
            break;
         }
      } while ((String.fromCharCode(116,117,122,116,53,57,55,106,0) == textN) && (4 >= (lightE.length / (Math.max(textN.length, 8)))));
      if (5 > (textN.length | scores.size) || (5 | scores.size) > 5) {
          let e_imageT = 0;
          let related7 = 2.0;
         textN += `${1 << (Math.min(3, lightE.length))}`;
         e_imageT += 1 >> (Math.min(Math.abs(parseInt(`${related7}`)), 4));
         related7 *= e_imageT ^ 1;
      }
       let circleb = 2;
      if (4 > (textN.length << (Math.min(Math.abs(2), 3)))) {
          let constantsR = [String.fromCharCode(99,95,49,52,95,116,121,111,101,0), String.fromCharCode(99,111,110,116,101,120,116,117,97,108,0)];
          let formx = 5.0;
          let expandd = 5.0;
         scores = new Map([[`${scores.size}`, lightE.length << (Math.min(3, Math.abs(scores.size)))]]);
         constantsR = [constantsR.length ^ parseInt(`${expandd}`)];
         formx += parseInt(`${expandd}`);
      }
          let readk = 2.0;
          let adultS = true;
         textN += `${1 ^ circleb}`;
         readk += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${readk}`)), 3))}`);
         adultS = !adultS;
      while (5 < (2 | lightE.length) || 2 < (textN.length | lightE.length)) {
          let searchX = false;
          let shirtp = new Map([[String.fromCharCode(113,95,53,54,95,118,112,97,116,104,109,101,115,117,114,101,0),true ], [String.fromCharCode(101,120,112,110,97,100,101,100,95,49,95,50,48,0),true ], [String.fromCharCode(99,117,115,116,111,109,0),false ]]);
          let eighteen5 = 0;
          let invitew = String.fromCharCode(111,112,101,110,105,110,103,0);
         textN = `${scores.size / 3}`;
         searchX = shirtp.size < eighteen5;
         shirtp[`${eighteen5}`] = 3 + eighteen5;
         invitew = `${shirtp.size}`;
         break;
      }
      if (3 == (circleb << (Math.min(textN.length, 1)))) {
          let changeK = 4.0;
          let filedK = String.fromCharCode(114,99,111,110,0);
          let friendsJ = 2.0;
          let tooltipsh = String.fromCharCode(104,95,55,95,115,101,101,107,97,98,108,101,0);
         textN = `${scores.size}`;
         changeK *= parseFloat(`${filedK.length | parseInt(`${changeK}`)}`);
         filedK += "2";
         friendsJ += parseFloat(`${parseInt(`${friendsJ}`) >> (Math.min(3, Math.abs(2)))}`);
         tooltipsh = `${parseInt(`${friendsJ}`) | 3}`;
      }
          let types1 = String.fromCharCode(101,95,49,50,95,115,115,108,0);
          let filledp = String.fromCharCode(110,111,101,120,112,0);
          let promotionE = 0.0;
         textN = `${lightE.length | circleb}`;
         types1 = `${parseInt(`${promotionE}`) - 3}`;
         filledp = `${(types1 == String.fromCharCode(90,0) ? types1.length : filledp.length)}`;
         promotionE -= filledp.length;
      if ((scores.size - circleb) < 5) {
         circleb -= lightE.length;
      }
      modityU = `${scores.size}`;
      modityU += `${math4.length}`;

    if(data != undefined && data.length > 0){

      t_positionk /= Math.max(2, modityU.length / (Math.max(5, parseInt(`${t_positionk}`))));
   if (plus8) {
       let screenY = new Map([[String.fromCharCode(114,101,99,108,97,105,109,95,121,95,56,53,0),false ], [String.fromCharCode(102,95,51,50,95,108,105,98,115,104,105,110,101,0),false ], [String.fromCharCode(97,108,108,111,119,105,95,111,95,52,52,0),false ]]);
       let main_f4 = String.fromCharCode(115,108,97,115,104,101,115,95,111,95,50,55,0);
       let upgrade2 = 5.0;
       let whatsappj = String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0);
      if ((main_f4.length % (Math.max(5, 8))) <= 4 && 4 <= (main_f4.length | 5)) {
         upgrade2 += parseFloat(`${parseInt(`${upgrade2}`) - 3}`);
      }
      do {
         upgrade2 -= parseFloat(`${3}`);
         if (4563434.0 == upgrade2) {
            break;
         }
      } while ((upgrade2 == parseFloat(`${main_f4.length}`)) && (4563434.0 == upgrade2));
          let emptyk = false;
         screenY[whatsappj] = whatsappj.length;
      for (let l = 0; l < 2; l++) {
         main_f4 += "3";
      }
      while (parseInt(`${upgrade2}`) < whatsappj.length) {
          let eighteenl = String.fromCharCode(103,101,116,99,114,101,100,0);
          let nativez = 1.0;
          let infod = String.fromCharCode(97,114,116,105,102,97,99,116,115,0);
         upgrade2 *= parseFloat(`${whatsappj.length >> (Math.min(Math.abs(1), 2))}`);
         eighteenl += `${parseInt(`${nativez}`) / (Math.max(9, eighteenl.length))}`;
         nativez *= parseFloat(`${parseInt(`${nativez}`)}`);
         infod = `${infod.length}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
          let changes = 2.0;
          let m_center8 = new Map([[String.fromCharCode(101,120,104,97,117,115,116,105,118,101,0),433], [String.fromCharCode(104,101,97,100,101,114,115,0),933], [String.fromCharCode(97,114,109,99,97,112,0),7]]);
          let statsY = String.fromCharCode(118,95,57,0);
          let fasti = true;
          let minimizem = 3.0;
         screenY[`${changes}`] = 2 % (Math.max(7, parseInt(`${changes}`)));
         m_center8 = new Map([[`${fasti}`, 2 >> (Math.min(Math.abs(parseInt(`${minimizem}`)), 2))]]);
         statsY += `${parseInt(`${minimizem}`) << (Math.min(4, Math.abs(1)))}`;
         fasti = minimizem < 58.87;
      }
         main_f4 = `${main_f4.length - screenY.size}`;
       let logoutA = String.fromCharCode(118,99,101,110,99,95,97,95,52,56,0);
       let zhengpianf = String.fromCharCode(99,111,117,112,108,105,110,103,95,122,95,54,54,0);
      yellowK += `${1 << (Math.min(3, Math.abs(screenY.size)))}`;
   }
      yellowK = `${((suggestion1 ? 2 : 4) % (Math.max(9, math4.length)))}`;
      modityU += `${(String.fromCharCode(80,0) == modityU ? modityU.length : parseInt(`${const_9f}`))}`;
        let filterData = data.filter((item, index) => index != 0 && index != data.length - 5)

       let langn = String.fromCharCode(99,108,108,105,0);
       let pauseN = new Map([[String.fromCharCode(105,95,52,57,95,101,109,98,101,100,100,101,100,0),317], [String.fromCharCode(115,116,111,114,105,110,103,0),362], [String.fromCharCode(122,95,55,57,95,97,100,116,115,0),366]]);
       let calendar9 = 1.0;
      if (1.92 >= (calendar9 - 1.16) && 1 >= (langn.length - parseInt(`${calendar9}`))) {
          let shared7 = String.fromCharCode(119,95,57,50,95,114,101,100,114,97,119,0);
          let optionsQ = new Map([[String.fromCharCode(102,111,114,103,111,116,116,101,110,0),false ], [String.fromCharCode(97,108,108,112,97,115,115,0),true ]]);
          let championN = String.fromCharCode(115,101,112,105,97,0);
          let auto_ciJ = 5.0;
          let episodesC = 0.0;
         langn = `${parseInt(`${auto_ciJ}`) % 1}`;
         shared7 += `${parseInt(`${episodesC}`) << (Math.min(Math.abs(2), 3))}`;
         optionsQ[`${shared7}`] = (String.fromCharCode(122,0) == shared7 ? optionsQ.size : shared7.length);
         championN += `${3 - shared7.length}`;
         auto_ciJ /= Math.max(parseFloat(`${parseInt(`${episodesC}`)}`), 2);
      }
         calendar9 /= Math.max(pauseN.size - langn.length, 3);
         pauseN = new Map([[`${pauseN.size}`, (String.fromCharCode(79,0) == langn ? pauseN.size : langn.length)]]);
         pauseN = new Map([[langn, 1 & parseInt(`${calendar9}`)]]);
         pauseN = new Map([[`${pauseN.size}`, pauseN.size]]);
         pauseN[langn] = langn.length;
         langn += "1";
      if (!Array.from(pauseN.keys()).includes(`${calendar9}`)) {
          let lineb = 4;
          let helperN = [175, 409];
         pauseN = new Map([[`${pauseN.size}`, 2 * pauseN.size]]);
         lineb <<= Math.min(2, Math.abs(lineb));
         helperN = [1 - helperN.length];
      }
          let awayD = String.fromCharCode(116,116,114,105,98,117,116,101,100,0);
          let buttong = String.fromCharCode(104,95,49,51,95,114,111,111,116,0);
          let hooksu = false;
         pauseN[`${hooksu}`] = 2;
         awayD += `${buttong.length + 1}`;
         buttong = `${(String.fromCharCode(68,0) == buttong ? buttong.length : awayD.length)}`;
      t_positionk *= 3;
   for (let g = 0; g < 1; g++) {
       let paginationv = 0.0;
      for (let z = 0; z < 2; z++) {
         paginationv -= parseInt(`${paginationv}`);
      }
          let leftk = new Map([[String.fromCharCode(98,97,110,100,115,0),739], [String.fromCharCode(103,95,56,52,0),209]]);
          let trophyP = 5.0;
          let rewindn = String.fromCharCode(101,120,116,114,97,99,102,103,0);
         paginationv *= leftk.size;
         leftk = new Map([[`${trophyP}`, parseInt(`${trophyP}`)]]);
         rewindn += "1";
          let scoreg = String.fromCharCode(108,97,118,102,105,0);
          let search7 = true;
         paginationv -= ((search7 ? 5 : 2) << (Math.min(Math.abs(parseInt(`${paginationv}`)), 4)));
         scoreg += `${scoreg.length}`;
         search7 = scoreg.length > 82;
      carouselT -= 1;
   }
       let bing6 = String.fromCharCode(120,116,101,110,115,105,111,110,0);
       let reducerl = [643, 570, 636];
      do {
         bing6 += `${reducerl.length - bing6.length}`;
         if (String.fromCharCode(107,120,105,0) == bing6) {
            break;
         }
      } while (((3 - bing6.length) > 5 || (bing6.length - 3) > 3) && (String.fromCharCode(107,120,105,0) == bing6));
      if (bing6.length > 4) {
         bing6 = `${reducerl.length}`;
      }
         reducerl = [1];
      do {
         reducerl = [2];
         if (1344833 == reducerl.length) {
            break;
         }
      } while ((1344833 == reducerl.length) && (bing6.length > 3));
          let chinaf = [170, 804];
          let stepP = true;
         reducerl = [((stepP ? 3 : 3) << (Math.min(Math.abs(1), 1)))];
         chinaf.push(chinaf.length | chinaf.length);
         stepP = 84 <= chinaf.length || chinaf.length <= 84;
         bing6 = `${reducerl.length / 3}`;
      plus8 = t_positionk < 73.38;
   for (let a = 0; a < 1; a++) {
      t_positionk *= yellowK.length;
   }
        let structuredData = [];
   for (let k = 0; k < 3; k++) {
      carouselT += yellowK.length;
   }
   do {
       let bufferS = String.fromCharCode(102,97,117,108,116,95,111,95,54,56,0);
       let borderless9 = [419, 346, 841];
       let redirectK = String.fromCharCode(97,105,102,102,95,115,95,53,55,0);
       let floating6 = 1.0;
       let launcht = 5;
      do {
          let temp7 = 2.0;
          let overlayw = String.fromCharCode(98,114,97,99,101,0);
         borderless9.push(3 | borderless9.length);
         temp7 *= overlayw.length ^ parseInt(`${temp7}`);
         overlayw = `${parseInt(`${temp7}`)}`;
         if (3323923 == borderless9.length) {
            break;
         }
      } while ((borderless9.length <= redirectK.length) && (3323923 == borderless9.length));
      while ((launcht | bufferS.length) <= 2 && 2 <= (launcht | 2)) {
          let unreadp = [732, 112];
          let gestureE = String.fromCharCode(109,95,55,95,114,101,115,101,114,118,101,115,105,122,101,0);
          let relatedd = 1.0;
          let weibol = 5;
          let rightD = [735, 657];
         bufferS += `${unreadp.length}`;
         unreadp.push(gestureE.length ^ parseInt(`${relatedd}`));
         gestureE = `${rightD.length * weibol}`;
         relatedd -= parseFloat(`${weibol * 3}`);
         rightD = [weibol % 2];
         break;
      }
          let trophyT = String.fromCharCode(106,95,51,51,95,119,97,116,101,114,0);
          let modeR = String.fromCharCode(103,95,49,48,48,95,111,111,108,116,105,112,0);
          let appsk = new Map([[String.fromCharCode(98,111,108,100,0),true ], [String.fromCharCode(114,115,112,0),false ]]);
         redirectK += `${appsk.size * bufferS.length}`;
         trophyT = "2";
         modeR = `${trophyT.length / 3}`;
         appsk[modeR] = (String.fromCharCode(98,0) == modeR ? trophyT.length : modeR.length);
      do {
         launcht /= Math.max(2, 1 | parseInt(`${floating6}`));
         if (3908802 == launcht) {
            break;
         }
      } while ((3908802 == launcht) && ((4 * borderless9.length) >= 2 || 4 >= (launcht * 4)));
      if ((floating6 / 3.39) > 5.7) {
          let u_count7 = 5;
          let chartr = String.fromCharCode(118,95,52,50,95,99,97,112,105,116,97,108,115,0);
         bufferS = `${borderless9.length - bufferS.length}`;
         u_count7 %= Math.max(1, u_count7);
         chartr = `${1 << (Math.min(2, chartr.length))}`;
      }
         bufferS = "1";
         floating6 -= borderless9.length ^ bufferS.length;
      while (2 <= (1 ^ redirectK.length) && (parseInt(`${floating6}`) + redirectK.length) <= 1) {
         redirectK = `${(bufferS == String.fromCharCode(81,0) ? bufferS.length : borderless9.length)}`;
         break;
      }
      do {
         floating6 += 2;
         if (4601042.0 == floating6) {
            break;
         }
      } while ((parseInt(`${floating6}`) < borderless9.length) && (4601042.0 == floating6));
      while (1 == (5 * launcht) || (launcht * redirectK.length) == 5) {
         launcht %= Math.max(parseInt(`${floating6}`) ^ 1, 3);
         break;
      }
      for (let o = 0; o < 3; o++) {
         bufferS = `${borderless9.length}`;
      }
          let checkboxJ = String.fromCharCode(114,101,109,97,112,112,101,100,95,101,95,49,57,0);
         bufferS = `${(checkboxJ == String.fromCharCode(85,0) ? borderless9.length : checkboxJ.length)}`;
       let middleV = false;
         borderless9 = [borderless9.length & 3];
       let calendarD = 3.0;
       let qcopy_93 = 3.0;
      yellowK += `${(modityU == String.fromCharCode(67,0) ? borderless9.length : modityU.length)}`;
      if (yellowK.length == 4193911) {
         break;
      }
   } while ((yellowK.length == 4193911) && (2.96 > (const_9f - parseFloat(`${yellowK.length}`))));
   while (3 < yellowK.length) {
      yellowK += `${(yellowK == String.fromCharCode(52,0) ? yellowK.length : canvasx)}`;
      break;
   }
      modityU = `${modityU.length / (Math.max(1, parseInt(`${const_9f}`)))}`;

        filterData.forEach((item, index) => {

       let hooksf = 1.0;
       let yellowB = 4;
      for (let x = 0; x < 2; x++) {
         yellowB &= 1;
      }
         yellowB |= yellowB % (Math.max(parseInt(`${hooksf}`), 6));
      do {
         yellowB /= Math.max(4, yellowB);
         if (1600759 == yellowB) {
            break;
         }
      } while ((2.51 == (yellowB * hooksf)) && (1600759 == yellowB));
       let sansh = new Map([[String.fromCharCode(110,112,97,116,99,104,101,115,95,104,95,55,54,0),904], [String.fromCharCode(99,95,57,50,95,112,111,115,116,112,111,110,101,0),324], [String.fromCharCode(103,114,111,117,112,105,110,103,0),695]]);
      if ((yellowB >> (Math.min(Math.abs(5), 4))) < 3) {
         yellowB += 2;
      }
       let pausex = 5.0;
      t_positionk *= yellowB;
      canvasx %= Math.max(parseInt(`${carouselT}`) % (Math.max(math4.length, 2)), 2);
      modityU = `${yellowK.length + 3}`;
   while ((2 + math4.length) <= 2 && (math4.length + resend4.length) <= 2) {
      resend4 = [parseInt(`${carouselT}`) % 3];
      break;
   }
          if(index < filterData.length - 3){
            structuredData.push({ away: item.away, home: item.home, type: TeamStatisticTitle[index] })
          }
        });
       let firebaseN = String.fromCharCode(117,110,115,104,105,102,116,0);
       let historyq = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,0);
       let megaphoneo = false;
         firebaseN = `${(String.fromCharCode(85,0) == historyq ? historyq.length : (megaphoneo ? 3 : 2))}`;
      if (megaphoneo) {
         megaphoneo = megaphoneo && firebaseN.length > 10;
      }
      while (historyq == String.fromCharCode(119,0)) {
         firebaseN += `${historyq.length - 2}`;
         break;
      }
      for (let u = 0; u < 1; u++) {
         historyq = `${(firebaseN == String.fromCharCode(85,0) ? firebaseN.length : historyq.length)}`;
      }
       let anner5 = new Map([[String.fromCharCode(103,101,109,102,105,108,101,0),45], [String.fromCharCode(115,117,98,110,111,100,101,115,95,100,95,49,48,0),371], [String.fromCharCode(103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,95,54,95,53,0),351]]);
       let green8 = new Map([[String.fromCharCode(106,115,111,110,114,112,99,0),440], [String.fromCharCode(114,101,99,116,105,102,121,0),979]]);
          let floatingC = 0;
          let modelsd = false;
         megaphoneo = green8.size >= 74;
         floatingC -= 2;
         modelsd = !modelsd;
         firebaseN += `${green8.size}`;
      do {
          let playW = 1.0;
          let modala = true;
          let annerx = String.fromCharCode(114,101,99,117,114,115,101,0);
          let privacyD = 4.0;
         anner5 = new Map([[`${green8.size}`, green8.size - 2]]);
         playW /= Math.max(5, (parseFloat(`${String.fromCharCode(117,0) == annerx ? parseInt(`${playW}`) : annerx.length}`)));
         modala = !modala;
         privacyD -= annerx.length;
         if (anner5.size == 3017913) {
            break;
         }
      } while ((anner5.size == 3017913) && (anner5[`${green8.size}`] != null));
         anner5 = new Map([[`${megaphoneo}`, firebaseN.length]]);
      yellowK = `${parseInt(`${carouselT}`) - 2}`;
   for (let p = 0; p < 2; p++) {
      carouselT += 3;
   }
       let types_ = String.fromCharCode(99,112,112,108,105,110,116,95,104,95,57,0);
       let castb = 0;
       let historyv = new Map([[String.fromCharCode(103,101,110,101,114,105,99,0),true ], [String.fromCharCode(109,102,114,97,0),false ], [String.fromCharCode(100,95,53,56,95,99,97,112,116,117,114,101,0),true ]]);
      if ((types_.length >> (Math.min(Math.abs(1), 2))) == 3 || (1 >> (Math.min(5, Math.abs(castb)))) == 4) {
         types_ += `${historyv.size / (Math.max(1, 3))}`;
      }
       let interstitialL = String.fromCharCode(99,104,97,110,103,101,114,0);
      while (5 >= (3 + historyv.size)) {
         castb *= interstitialL.length;
         break;
      }
      do {
          let controlj = false;
          let currentH = [434, 519, 684];
          let show9 = String.fromCharCode(110,95,52,53,95,117,112,100,97,116,105,110,103,0);
          let cornerq = 3;
          let emptyL = new Map([[String.fromCharCode(111,100,109,108,0),true ], [String.fromCharCode(112,105,99,107,109,111,100,101,95,117,95,54,57,0),false ], [String.fromCharCode(108,97,110,101,95,54,95,50,49,0),true ]]);
         historyv[`${cornerq}`] = 2;
         controlj = currentH.length <= 22;
         currentH = [2];
         show9 += `${currentH.length ^ 1}`;
         cornerq ^= ((controlj ? 2 : 3) - currentH.length);
         emptyL[show9] = 2;
         if (4055500 == historyv.size) {
            break;
         }
      } while ((4055500 == historyv.size) && (interstitialL.endsWith(`${historyv.size}`)));
      if (historyv[`${castb}`] == null) {
         castb |= castb | 3;
      }
         types_ = `${castb & 3}`;
         interstitialL += `${historyv.size << (Math.min(interstitialL.length, 5))}`;
         interstitialL = `${castb / (Math.max(types_.length, 10))}`;
      do {
         castb -= types_.length;
         if (castb == 2218754) {
            break;
         }
      } while ((castb == 2218754) && ((1 - castb) <= 4));
      const_9f *= parseFloat(`${canvasx}`);
   if ((1 + canvasx) > 5 || 2.59 > (canvasx / (Math.max(t_positionk, 3)))) {
       let views9 = 5.0;
       let d_view5 = new Map([[String.fromCharCode(108,95,50,51,95,105,118,97,114,0),8], [String.fromCharCode(108,111,103,111,117,114,108,0),406], [String.fromCharCode(103,108,111,98,97,108,116,101,109,0),722]]);
       let statisticsh = String.fromCharCode(112,111,121,116,109,0);
       let emoji6 = 0;
      do {
          let hongkongs = 1.0;
         views9 += parseFloat(`${3}`);
         hongkongs -= parseFloat(`${1 + parseInt(`${hongkongs}`)}`);
         if (3418578.0 == views9) {
            break;
         }
      } while ((3418578.0 == views9) && (4.79 > (views9 / (Math.max(parseFloat(`${statisticsh.length}`), 7)))));
         statisticsh += `${d_view5.size}`;
      do {
         d_view5 = new Map([[`${views9}`, statisticsh.length & 3]]);
         if (d_view5.size == 3058572) {
            break;
         }
      } while ((d_view5[`${views9}`] == null) && (d_view5.size == 3058572));
      if (!Array.from(d_view5.keys()).includes(`${views9}`)) {
         d_view5 = new Map([[statisticsh, 2 ^ statisticsh.length]]);
      }
      if (1.68 == (views9 / 5.48)) {
          let auto_nr = new Map([[String.fromCharCode(109,99,100,99,0),197], [String.fromCharCode(114,101,103,97,116,104,101,114,105,110,103,0),133]]);
          let agreementQ = String.fromCharCode(105,116,108,101,0);
          let popupK = String.fromCharCode(107,98,112,115,0);
          let guide5 = String.fromCharCode(109,105,115,115,105,110,103,0);
          let description_v_ = new Map([[String.fromCharCode(111,112,101,110,115,108,101,115,0),true ], [String.fromCharCode(118,97,114,108,101,110,0),false ], [String.fromCharCode(98,97,110,110,101,114,0),true ]]);
         statisticsh += `${statisticsh.length % (Math.max(1, parseInt(`${views9}`)))}`;
         auto_nr[`${agreementQ}`] = auto_nr.size << (Math.min(agreementQ.length, 1));
         popupK = `${popupK.length | description_v_.size}`;
         guide5 += `${agreementQ.length * popupK.length}`;
         description_v_[guide5] = guide5.length ^ description_v_.size;
      }
      if ((emoji6 / (Math.max(views9, 10))) < 2.69) {
          let terms9 = [959, 399, 937];
          let cornerZ = true;
         emoji6 /= Math.max((String.fromCharCode(116,0) == statisticsh ? statisticsh.length : emoji6), 2);
         terms9.push(2);
         cornerZ = terms9.includes(cornerZ);
      }
         emoji6 |= 3 + d_view5.size;
          let pointv = String.fromCharCode(108,95,51,52,95,117,110,108,111,97,100,0);
          let friendsx = 3.0;
         views9 += parseFloat(`${emoji6 - parseInt(`${views9}`)}`);
         pointv += `${parseInt(`${friendsx}`) - 1}`;
         friendsx /= Math.max(parseInt(`${friendsx}`) / 1, 5);
         d_view5 = new Map([[`${views9}`, 3 / (Math.max(5, emoji6))]]);
          let current0 = 0.0;
          let sideK = false;
         emoji6 >>= Math.min(1, statisticsh.length);
         current0 *= (parseFloat(`${(sideK ? 5 : 1) / (Math.max(1, parseInt(`${current0}`)))}`));
         sideK = 18.19 == current0;
      if (emoji6 < 1) {
          let collectionD = 1.0;
          let hejio = 4.0;
          let phone0 = 3.0;
          let time_zrj = true;
         emoji6 /= Math.max(1, parseInt(`${views9}`) << (Math.min(2, Math.abs(emoji6))));
         collectionD += (parseFloat(`${(time_zrj ? 4 : 2) / (Math.max(parseInt(`${phone0}`), 7))}`));
         hejio /= Math.max(5, parseFloat(`${parseInt(`${hejio}`) - 3}`));
         phone0 -= parseInt(`${phone0}`) - parseInt(`${collectionD}`);
         time_zrj = !time_zrj;
      }
      do {
         statisticsh += "3";
         if (statisticsh == String.fromCharCode(114,114,55,102,111,112,109,121,48,0)) {
            break;
         }
      } while ((3 >= statisticsh.length) && (statisticsh == String.fromCharCode(114,114,55,102,111,112,109,121,48,0)));
      canvasx -= 2;
   }

        return structuredData
    }
  }

  return (
    <View>
      {showTitle && (
        <View style={styles.teamView}>
          <Text style={styles.titleText}>球队数据</Text>
        </View>
      )}
      <View style={!showHomeMore && styles.showLess}>
        <MatchStatistic statisticData={filteredData()} sportType={sportType}/>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => setShowHomeMore(!showHomeMore)}>
          <Text style={styles.showButtonText}>
            {showHomeMore ? '收起' : '更多'}
          </Text>
          <Image
            style={styles.showButtonIcon}
            source={showHomeMore ? ShowLess : ShowMore}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamStatistic;
