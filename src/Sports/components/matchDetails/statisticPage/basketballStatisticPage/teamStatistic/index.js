import MatchStatistic from '../../../../../components/matchStatistic';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  ShowMore,
  ShowLess,
  BasketballAwayTeam,
  BasketballIcon,
} from '../../../../../assets';
import styles from './yys_gpay_roboto';
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
       let short_uC = [173, 12];
    let rewindm = 0.0;
    let ksad0 = String.fromCharCode(115,101,116,0);
    let gesturesd = String.fromCharCode(99,111,110,110,101,99,116,111,114,0);
    let bootsplash1 = 3.0;
    let trashk = 0.0;
    let linee = String.fromCharCode(113,117,111,116,101,115,0);
    let cricketn = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,0);
    let customO = 5.0;
    let sentryW = String.fromCharCode(98,105,116,114,97,116,101,0);
    let whatsappY = String.fromCharCode(101,110,99,105,114,99,108,101,100,0);
    let private_6g = String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,0);
    let condensedl = String.fromCharCode(115,99,104,101,100,117,108,101,114,0);
    let libreacte = [199, 634, 852];
    let playw = String.fromCharCode(99,116,105,118,105,116,121,0);
    let layout6 = 2.0;
      private_6g = `${short_uC.length}`;
   while (ksad0 != String.fromCharCode(53,0) || private_6g == String.fromCharCode(80,0)) {
      ksad0 = `${parseInt(`${bootsplash1}`) * short_uC.length}`;
      break;
   }
      private_6g = `${parseInt(`${rewindm}`)}`;
      short_uC = [parseInt(`${customO}`) % (Math.max(parseInt(`${bootsplash1}`), 7))];
   if (whatsappY.length >= linee.length) {
       let mbjscommon8 = [258, 689, 860];
       let footballn = String.fromCharCode(115,116,97,103,101,0);
       let mbnative9 = 3.0;
      for (let e = 0; e < 3; e++) {
         footballn += `${parseInt(`${mbnative9}`) / (Math.max(footballn.length, 9))}`;
      }
      do {
         footballn += `${2 ^ footballn.length}`;
         if (footballn == String.fromCharCode(52,100,121,114,100,114,118,103,100,109,0)) {
            break;
         }
      } while ((footballn == String.fromCharCode(52,100,121,114,100,114,118,103,100,109,0)) && (2.47 > (mbnative9 * 5.0)));
      while (3 == mbjscommon8.length) {
          let robotok = new Map([[String.fromCharCode(110,111,100,101,115,101,116,0),196], [String.fromCharCode(115,110,97,112,115,104,111,116,115,0),125], [String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,0),373]]);
         mbnative9 /= Math.max(4, footballn.length);
         robotok = new Map([[`${robotok.size}`, 3 * robotok.size]]);
         break;
      }
          let relatedt = new Map([[String.fromCharCode(114,101,115,105,122,97,98,108,101,0),891], [String.fromCharCode(100,101,99,105,100,101,0),608]]);
         footballn += "2";
         relatedt = new Map([[`${relatedt.size}`, 1]]);
          let handlerv = String.fromCharCode(119,116,118,102,105,108,101,0);
          let miniP = true;
         mbjscommon8.push(mbjscommon8.length | 3);
         handlerv = "3";
         miniP = handlerv == handlerv;
      if (1 < footballn.length) {
          let paginationm = new Map([[String.fromCharCode(100,115,104,111,119,0),false ], [String.fromCharCode(109,101,109,99,109,112,0),false ], [String.fromCharCode(105,110,116,114,97,120,0),false ]]);
          let telegrame = new Map([[String.fromCharCode(116,105,109,101,118,97,108,0),String.fromCharCode(113,105,110,100,101,120,0)], [String.fromCharCode(100,101,108,105,109,105,116,101,114,115,0),String.fromCharCode(116,101,109,112,0)]]);
         mbnative9 /= Math.max(telegrame.size, 4);
         paginationm = new Map([[`${paginationm.size}`, 2 >> (Math.min(1, Math.abs(paginationm.size)))]]);
         telegrame = new Map([[`${paginationm.size}`, paginationm.size | 2]]);
      }
          let ksadj = String.fromCharCode(113,99,111,109,0);
          let scoreP = 3;
          let background4 = [747, 20, 662];
         footballn = `${1 & ksadj.length}`;
         ksadj += `${scoreP >> (Math.min(background4.length, 5))}`;
         scoreP >>= Math.min(1, Math.abs(2));
         background4 = [scoreP << (Math.min(background4.length, 4))];
      if (5.67 == (mbnative9 / 5.43) && (parseInt(`${mbnative9}`) / (Math.max(footballn.length, 8))) == 4) {
         mbnative9 *= 3 << (Math.min(Math.abs(parseInt(`${mbnative9}`)), 2));
      }
       let backwardg = String.fromCharCode(103,101,110,101,114,97,116,105,111,110,0);
      linee += "2";
   }

    if(data != undefined && data.length > 0){

   while (ksad0.startsWith(`${bootsplash1}`)) {
       let libavcodec_ = new Map([[String.fromCharCode(114,101,112,108,97,121,103,97,105,110,0),784], [String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,0),984]]);
       let privilegev = 4.0;
       let filterx = String.fromCharCode(97,117,100,105,111,0);
       let pingV = String.fromCharCode(108,97,116,116,105,99,101,0);
       let appleJ = 2.0;
      while ((parseInt(`${privilegev}`) / (Math.max(filterx.length, 1))) > 1) {
          let fillp = new Map([[String.fromCharCode(100,113,117,97,110,116,0),String.fromCharCode(103,101,116,102,114,97,109,101,0)], [String.fromCharCode(103,117,97,114,97,110,116,101,101,115,0),String.fromCharCode(103,97,117,115,115,105,97,110,0)], [String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,0),String.fromCharCode(112,101,99,101,110,116,0)]]);
         filterx = `${fillp.size}`;
         break;
      }
      while (1.65 < (1.65 + privilegev)) {
          let downloadingg = 3.0;
          let applicationh = String.fromCharCode(97,108,112,104,97,98,101,116,0);
          let download6 = String.fromCharCode(117,118,97,114,105,110,116,0);
          let brightnessJ = 2.0;
         privilegev /= Math.max(5, 2);
         downloadingg /= Math.max(1, 3 << (Math.min(1, download6.length)));
         applicationh = "2";
         download6 = `${download6.length + 1}`;
         brightnessJ -= (download6 == String.fromCharCode(55,0) ? parseInt(`${brightnessJ}`) : download6.length);
         break;
      }
         pingV = `${2 & parseInt(`${appleJ}`)}`;
         libavcodec_[`${privilegev}`] = libavcodec_.size;
       let single8 = true;
       let settings0 = [700, 137];
       let classes6 = [890, 635];
         pingV = `${(filterx == String.fromCharCode(52,0) ? filterx.length : classes6.length)}`;
         settings0.push(2);
         filterx += `${3 & settings0.length}`;
      do {
         libavcodec_[`${pingV}`] = libavcodec_.size | pingV.length;
         if (1293330 == libavcodec_.size) {
            break;
         }
      } while ((1 > (parseInt(`${privilegev}`) - libavcodec_.size)) && (1293330 == libavcodec_.size));
         appleJ += parseFloat(`${3}`);
      for (let g = 0; g < 1; g++) {
         appleJ *= parseFloat(`${pingV.length}`);
      }
         single8 = classes6.includes(appleJ);
          let grayA = true;
          let dycreatorx = [732, 274, 398];
         appleJ += parseFloat(`${3}`);
         grayA = dycreatorx.length < 47;
         dycreatorx = [dycreatorx.length];
      while ((pingV.length | 2) < 1) {
          let sheetW = false;
         pingV += `${libavcodec_.size % (Math.max(3, parseInt(`${privilegev}`)))}`;
         sheetW = !sheetW;
         break;
      }
      bootsplash1 += 3;
      break;
   }
   for (let w = 0; w < 2; w++) {
      trashk *= 3;
   }
   for (let y = 0; y < 1; y++) {
      condensedl += `${condensedl.length}`;
   }
      rewindm += parseInt(`${bootsplash1}`) * cricketn.length;
   do {
      condensedl += `${private_6g.length}`;
      if (383930 == condensedl.length) {
         break;
      }
   } while ((!condensedl.endsWith(gesturesd)) && (383930 == condensedl.length));
        let filterData = data.filter((item, index) => index != 0 && index != data.length - 5)

      customO += parseInt(`${bootsplash1}`);
       let libsentryM = String.fromCharCode(105,112,118,105,100,101,111,0);
       let mailB = 5.0;
         mailB -= parseFloat(`${parseInt(`${mailB}`)}`);
       let profileg = 4.0;
      if (5.46 >= (mailB / (Math.max(3, parseFloat(`${libsentryM.length}`)))) && (5.46 / (Math.max(5, mailB))) >= 2.51) {
          let policyW = String.fromCharCode(104,111,108,101,0);
          let termsM = String.fromCharCode(97,99,99,101,115,115,105,110,103,0);
          let cornerz = new Map([[String.fromCharCode(109,101,115,115,97,103,105,110,103,0),276], [String.fromCharCode(102,111,99,117,115,101,100,0),835]]);
          let debugT = 4;
         mailB /= Math.max(4, parseFloat(`${parseInt(`${mailB}`)}`));
         policyW = `${(String.fromCharCode(121,0) == policyW ? policyW.length : debugT)}`;
         termsM += `${policyW.length}`;
         cornerz = new Map([[policyW, 1]]);
         debugT *= 2 * policyW.length;
      }
          let reminderH = new Map([[String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,0),String.fromCharCode(116,121,112,101,115,0)], [String.fromCharCode(101,112,105,99,0),String.fromCharCode(118,101,114,116,105,99,101,115,0)]]);
          let privilegek = 4.0;
         profileg /= Math.max(reminderH.size << (Math.min(Math.abs(2), 1)), 1);
         reminderH = new Map([[`${privilegek}`, 2 * parseInt(`${privilegek}`)]]);
      do {
          let minimizeF = false;
          let logoc = true;
          let nalyticsE = String.fromCharCode(117,97,100,100,0);
          let temperatureP = String.fromCharCode(108,111,110,103,116,101,114,109,0);
         libsentryM = `${temperatureP.length / (Math.max(8, libsentryM.length))}`;
         minimizeF = (85 == (nalyticsE.length << (Math.min(2, Math.abs((!minimizeF ? nalyticsE.length : 85))))));
         logoc = nalyticsE.length < 54;
         temperatureP = `${((minimizeF ? 5 : 4) | (logoc ? 4 : 1))}`;
         if (libsentryM.length == 2117154) {
            break;
         }
      } while ((1.63 > (mailB + parseFloat(`${libsentryM.length}`))) && (libsentryM.length == 2117154));
         profileg -= 1 >> (Math.min(3, libsentryM.length));
      gesturesd = `${private_6g.length % (Math.max(7, linee.length))}`;
      condensedl += `${2 % (Math.max(7, short_uC.length))}`;
   while ((trashk / (Math.max(linee.length, 4))) == 4.13) {
      linee += `${libreacte.length}`;
      break;
   }
   for (let c = 0; c < 1; c++) {
       let sinaY = [667, 483];
       let libreactperfloggerjniq = String.fromCharCode(99,104,117,110,107,0);
       let moreX = String.fromCharCode(112,114,111,99,101,115,115,0);
         moreX = `${sinaY.length}`;
      do {
          let unselectedK = String.fromCharCode(116,114,101,108,108,105,115,0);
          let package_gD = [691, 142, 62];
         libreactperfloggerjniq = `${sinaY.length << (Math.min(libreactperfloggerjniq.length, 2))}`;
         unselectedK = `${(unselectedK == String.fromCharCode(111,0) ? unselectedK.length : package_gD.length)}`;
         package_gD = [unselectedK.length + package_gD.length];
         if (String.fromCharCode(48,104,113,114,56,0) == libreactperfloggerjniq) {
            break;
         }
      } while ((moreX != String.fromCharCode(118,0)) && (String.fromCharCode(48,104,113,114,56,0) == libreactperfloggerjniq));
         sinaY.push(libreactperfloggerjniq.length);
      while ((1 ^ sinaY.length) > 1) {
          let viewerm = new Map([[String.fromCharCode(115,116,115,115,0),358], [String.fromCharCode(115,116,97,107,101,100,0),553], [String.fromCharCode(101,108,108,105,103,105,98,108,101,0),343]]);
         moreX = `${2 + sinaY.length}`;
         viewerm = new Map([[`${viewerm.size}`, viewerm.size]]);
         break;
      }
      do {
         sinaY = [moreX.length];
         if (sinaY.length == 3659491) {
            break;
         }
      } while ((sinaY.length == 3659491) && (libreactperfloggerjniq.length < 2));
      while (1 == moreX.length) {
          let networko = String.fromCharCode(112,114,105,109,101,0);
          let cast0 = [280, 217, 182];
          let homeq = 3;
          let signinupI = String.fromCharCode(115,119,114,0);
          let indicator9 = [String.fromCharCode(115,117,98,105,116,101,109,115,0), String.fromCharCode(111,99,107,105,110,103,0), String.fromCharCode(100,101,112,101,110,100,115,0)];
         libreactperfloggerjniq = `${sinaY.length * 3}`;
         networko = `${indicator9.length}`;
         cast0.push(homeq);
         homeq *= indicator9.length;
         signinupI = `${(networko == String.fromCharCode(48,0) ? indicator9.length : networko.length)}`;
         break;
      }
         libreactperfloggerjniq += `${moreX.length}`;
      for (let y = 0; y < 1; y++) {
         libreactperfloggerjniq += `${moreX.length + 1}`;
      }
      if (libreactperfloggerjniq.length <= 4 || 4 <= moreX.length) {
         libreactperfloggerjniq = `${moreX.length >> (Math.min(Math.abs(1), 2))}`;
      }
      private_6g += "3";
   }
        let structuredData = [];
       let tnewinterstitialZ = String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,0);
      do {
         tnewinterstitialZ = `${tnewinterstitialZ.length & 3}`;
         if (String.fromCharCode(51,118,101,54,122,55,103,52,110,103,0) == tnewinterstitialZ) {
            break;
         }
      } while ((3 <= tnewinterstitialZ.length) && (String.fromCharCode(51,118,101,54,122,55,103,52,110,103,0) == tnewinterstitialZ));
         tnewinterstitialZ += `${tnewinterstitialZ.length}`;
         tnewinterstitialZ = `${tnewinterstitialZ.length & 3}`;
      whatsappY += `${whatsappY.length}`;
       let countryM = String.fromCharCode(97,116,116,114,115,0);
      for (let s = 0; s < 3; s++) {
         countryM += `${countryM.length}`;
      }
         countryM += `${countryM.length}`;
         countryM += `${2 % (Math.max(10, countryM.length))}`;
      rewindm *= short_uC.length;
       let inactive9 = false;
       let share_ = String.fromCharCode(105,110,118,97,114,105,97,110,116,115,0);
       let readR = 5;
          let changeQ = new Map([[String.fromCharCode(105,110,100,105,99,116,111,114,0),String.fromCharCode(115,119,101,101,112,0)], [String.fromCharCode(112,117,115,104,105,110,103,0),String.fromCharCode(115,109,111,111,116,104,101,110,0)], [String.fromCharCode(115,101,110,100,109,98,117,102,0),String.fromCharCode(112,109,107,0)]]);
          let selection0 = String.fromCharCode(113,112,101,108,100,115,112,0);
         readR *= selection0.length / (Math.max(9, share_.length));
         changeQ = new Map([[`${changeQ.size}`, 3 << (Math.min(3, Math.abs(changeQ.size)))]]);
         selection0 += "2";
      do {
          let malaysia8 = [463, 894, 346];
         share_ = `${((inactive9 ? 4 : 1))}`;
         malaysia8 = [malaysia8.length * malaysia8.length];
         if (2317180 == share_.length) {
            break;
         }
      } while ((!inactive9) && (2317180 == share_.length));
      if (share_.length == 4) {
          let soundg = new Map([[String.fromCharCode(112,108,97,116,101,97,117,0),false ], [String.fromCharCode(115,101,99,116,111,114,0),true ], [String.fromCharCode(102,105,108,116,101,114,101,100,0),false ]]);
          let condensedG = String.fromCharCode(98,97,108,97,110,99,101,100,0);
         share_ += `${soundg.size / 3}`;
         soundg = new Map([[condensedG, condensedG.length - condensedG.length]]);
      }
      while (share_.endsWith(`${readR}`)) {
         share_ += `${share_.length}`;
         break;
      }
      do {
         inactive9 = readR <= 76;
         if (inactive9 ? !inactive9 : inactive9) {
            break;
         }
      } while ((!inactive9) && (inactive9 ? !inactive9 : inactive9));
          let carouselj = true;
          let popup2 = 2.0;
         share_ = "1";
         carouselj = !carouselj;
         popup2 -= parseFloat(`${parseInt(`${popup2}`) ^ 2}`);
         share_ += `${readR - 3}`;
      while (4 > (1 & readR)) {
          let window_mp = String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,0);
          let modityu = 1.0;
         readR |= readR;
         window_mp += "3";
         modityu *= parseInt(`${modityu}`) & window_mp.length;
         break;
      }
          let submitr = new Map([[String.fromCharCode(109,98,102,105,108,116,101,114,0),String.fromCharCode(102,105,114,115,116,108,121,0)], [String.fromCharCode(114,101,102,101,114,101,110,99,101,115,0),String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,0)]]);
          let videocommonf = String.fromCharCode(97,100,97,112,116,0);
         inactive9 = (videocommonf.length % (Math.max(3, submitr.size))) <= 83;
      ksad0 = `${ksad0.length}`;
   for (let r = 0; r < 2; r++) {
      trashk -= whatsappY.length + 3;
   }
   if (gesturesd.length <= 5) {
      gesturesd = `${parseInt(`${customO}`) / 3}`;
   }

        filterData.forEach((item, index) => {

   do {
      condensedl += "1";
      if (condensedl.length == 2424433) {
         break;
      }
   } while ((condensedl.length == 2424433) && (linee.startsWith(condensedl)));
       let textlayoutmanagerz = 2.0;
          let settingsl = false;
          let dialogN = 1.0;
          let manifestM = String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,0);
         textlayoutmanagerz += parseFloat(`${3 ^ parseInt(`${textlayoutmanagerz}`)}`);
         settingsl = 69.7 >= dialogN;
         dialogN += parseFloat(`${parseInt(`${dialogN}`)}`);
         manifestM += `${manifestM.length}`;
      do {
          let downloaderv = 1;
          let libswscale9 = false;
         textlayoutmanagerz += (parseFloat(`${downloaderv * (libswscale9 ? 5 : 2)}`));
         if (textlayoutmanagerz == 3736250.0) {
            break;
         }
      } while ((textlayoutmanagerz == 3736250.0) && (textlayoutmanagerz == 2.31));
      while (textlayoutmanagerz <= 2.6) {
          let dice7 = [String.fromCharCode(114,111,108,108,105,110,103,0), String.fromCharCode(99,111,110,110,101,99,116,105,110,103,0), String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,0)];
          let libimagepipelineQ = String.fromCharCode(97,112,97,114,97,109,115,0);
         textlayoutmanagerz *= parseFloat(`${libimagepipelineQ.length % 3}`);
         dice7 = [1];
         libimagepipelineQ = `${3 >> (Math.min(4, dice7.length))}`;
         break;
      }
      ksad0 += `${condensedl.length % (Math.max(1, 7))}`;
   if (cricketn.length < 3) {
       let agreement5 = String.fromCharCode(108,105,99,101,110,115,101,115,0);
      do {
         agreement5 = `${agreement5.length * agreement5.length}`;
         if (3627327 == agreement5.length) {
            break;
         }
      } while ((agreement5 != String.fromCharCode(76,0)) && (3627327 == agreement5.length));
      for (let j = 0; j < 1; j++) {
          let alertP = true;
         agreement5 += `${agreement5.length}`;
      }
      if (agreement5.length == 5) {
         agreement5 += `${agreement5.length << (Math.min(agreement5.length, 2))}`;
      }
      condensedl = `${parseInt(`${customO}`) >> (Math.min(linee.length, 2))}`;
   }
   if (sentryW.startsWith(`${libreacte.length}`)) {
      libreacte.push(parseInt(`${bootsplash1}`));
   }
   if (!short_uC.includes(trashk)) {
      short_uC.push(private_6g.length >> (Math.min(sentryW.length, 2)));
   }
          if(index < filterData.length - 3){
            structuredData.push({ away: item.away, home: item.home, type: TeamStatisticTitle[index] })
          }
        });
   while (1.36 <= (4.19 * trashk)) {
       let progressc = 3.0;
       let bridgex = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,0);
       let controlf = false;
       let trophyo = String.fromCharCode(114,101,113,117,105,114,101,0);
          let container8 = new Map([[String.fromCharCode(107,98,105,116,0),221], [String.fromCharCode(99,111,112,121,99,111,111,107,101,114,0),587]]);
          let bellD = [984, 467];
          let usern = [462, 942, 175];
         bridgex += "2";
         container8 = new Map([[`${usern.length}`, bellD.length]]);
         bellD = [container8.size | bellD.length];
         usern.push(bellD.length * container8.size);
          let libyogaI = String.fromCharCode(103,111,98,98,108,101,0);
         progressc -= parseFloat(`${trophyo.length / (Math.max(1, 3))}`);
         libyogaI = `${libyogaI.length + libyogaI.length}`;
      for (let t = 0; t < 3; t++) {
         controlf = (parseInt(`${progressc}`) - trophyo.length) > 41;
      }
         progressc -= parseFloat(`${3 << (Math.min(4, bridgex.length))}`);
          let nterstitialc = 3.0;
          let libflipperu = [187, 36, 220];
         trophyo += `${parseInt(`${progressc}`) - 3}`;
         nterstitialc *= libflipperu.length / (Math.max(3, parseInt(`${nterstitialc}`)));
         libflipperu = [parseInt(`${nterstitialc}`)];
         bridgex = `${2 << (Math.min(Math.abs(parseInt(`${progressc}`)), 4))}`;
       let countdownv = String.fromCharCode(114,101,100,105,114,101,99,116,111,114,0);
      for (let c = 0; c < 2; c++) {
         progressc += parseFloat(`${countdownv.length % (Math.max(trophyo.length, 6))}`);
      }
         progressc += parseFloat(`${3}`);
      while (controlf) {
          let colorse = [177, 868];
          let onewsC = String.fromCharCode(115,113,108,0);
          let bdxadsdkj = [String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,0), String.fromCharCode(118,101,114,105,102,121,0)];
          let nativemoduleD = String.fromCharCode(118,109,97,102,0);
          let langd = String.fromCharCode(107,101,114,110,101,100,0);
         controlf = ((bridgex.length & (controlf ? bridgex.length : 33)) == 33);
         colorse = [colorse.length];
         onewsC = `${2 % (Math.max(6, nativemoduleD.length))}`;
         bdxadsdkj = [1];
         nativemoduleD = `${(String.fromCharCode(103,0) == nativemoduleD ? bdxadsdkj.length : nativemoduleD.length)}`;
         langd = `${(onewsC == String.fromCharCode(52,0) ? onewsC.length : bdxadsdkj.length)}`;
         break;
      }
      if (1 >= (parseInt(`${progressc}`) * trophyo.length)) {
         trophyo += `${trophyo.length}`;
      }
          let dropdownt = String.fromCharCode(109,102,114,97,0);
          let textinputX = new Map([[String.fromCharCode(100,101,99,111,109,112,114,101,115,115,111,114,0),668], [String.fromCharCode(105,110,118,102,0),441], [String.fromCharCode(111,112,101,114,97,116,105,111,110,115,0),917]]);
         controlf = 29 > trophyo.length && 29 > bridgex.length;
         dropdownt += `${2 & textinputX.size}`;
         textinputX[dropdownt] = dropdownt.length;
      cricketn += `${linee.length}`;
      break;
   }
   for (let b = 0; b < 1; b++) {
       let fillL = String.fromCharCode(115,99,114,97,116,99,104,0);
      for (let g = 0; g < 2; g++) {
         fillL += "1";
      }
         fillL += `${fillL.length % (Math.max(3, 9))}`;
      do {
         fillL = `${fillL.length}`;
         if (1600688 == fillL.length) {
            break;
         }
      } while ((1600688 == fillL.length) && (2 == fillL.length || 2 == fillL.length));
      cricketn += `${cricketn.length}`;
   }
   do {
      bootsplash1 += 3 | parseInt(`${trashk}`);
      if (4669320.0 == bootsplash1) {
         break;
      }
   } while ((4669320.0 == bootsplash1) && (sentryW.endsWith(`${bootsplash1}`)));
   do {
      short_uC = [3];
      if (short_uC.length == 595531) {
         break;
      }
   } while ((short_uC.length == 595531) && (2.23 < (1.94 - rewindm) && 3 < (1 + short_uC.length)));
       let launcher7 = String.fromCharCode(109,118,101,99,0);
       let circles = [142, 298];
      while ((launcher7.length + 5) == 3) {
         launcher7 += `${launcher7.length * circles.length}`;
         break;
      }
          let cored = 5.0;
         circles.push(launcher7.length);
         cored += parseInt(`${cored}`);
      while (4 == (2 + launcher7.length) && 2 == (2 + circles.length)) {
         circles.push(2);
         break;
      }
       let mintegralc = String.fromCharCode(109,111,118,101,0);
       let libmapbufferjnio = String.fromCharCode(112,105,120,101,108,0);
          let acceptedS = String.fromCharCode(102,97,105,108,105,110,103,0);
          let downloadingN = String.fromCharCode(108,97,110,103,105,100,0);
         launcher7 = `${mintegralc.length}`;
         acceptedS = `${downloadingN.length * 2}`;
         downloadingN = `${downloadingN.length}`;
         mintegralc = "2";
      private_6g = "2";

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
