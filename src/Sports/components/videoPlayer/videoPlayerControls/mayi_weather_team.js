import {useEffect} from 'react';
import {
  Animated,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useAnimation} from '@hooks/useAnimation';
import {PanelType} from '../config';
import {LiveStatPanel} from './controlComponents/mayi_eact';
import {RecommendPanel} from './controlComponents/recommend/mayi_index_wind';
import VideoPlayerstyles from '../mayi_iconarrowrightwhite';
import {SwitchSourcePanel} from './controlComponents/mayi_predictionarrow';
import {
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../pages/matchDetails/action';
import {useState} from 'react';

export const RightPanel = ({display}) => {
  
  
  
  const dispatch = useDispatch();
  const dimensions = useWindowDimensions();
  const [opacityAni, inOpacity, outOpacity] = useAnimation({from: 0, to: 1});
  const [rightAni, inRight, outRight] = useAnimation({
    from: -dimensions.width,
    to: 0,
  });

  const [width, setWidth] = useState(0);
  const {rightPanel, isFullScreen} = useSelector(
    state => state.videoPlayerControl,
  );

  useEffect(() => {
    if (display) {
       let main_cJ = false;
    let league9 = String.fromCharCode(115,105,110,100,101,120,95,99,95,52,57,0);
    let nendn = String.fromCharCode(112,104,111,110,101,115,95,116,95,57,50,0);
    let halffieldimageq = String.fromCharCode(122,95,48,95,98,99,100,117,105,110,116,0);
    let successt = false;
    let updatesp = [112, 651];
    let iconwatchnowg = String.fromCharCode(99,95,56,53,95,115,116,97,116,105,111,110,97,114,121,0);
    let classesc = false;
    let homeicony = String.fromCharCode(102,95,49,56,95,97,103,103,114,101,103,97,116,101,0);
    let greyp = 1.0;
    let utils8 = 4.0;
    let teamI = String.fromCharCode(118,112,109,99,95,119,95,48,0);
    let themeJ = String.fromCharCode(105,95,54,51,95,102,97,110,116,111,109,0);
    let buildF = String.fromCharCode(109,105,110,109,97,120,95,112,95,51,53,0);
    let kickO = [777, 715];
    let confirmation3 = false;
       let crossa = 4.0;
       let shootyesgoalM = new Map([[String.fromCharCode(98,95,54,55,95,111,118,101,114,0),false ], [String.fromCharCode(101,120,116,101,114,105,111,114,95,105,95,50,48,0),true ], [String.fromCharCode(101,110,113,117,101,117,101,95,51,95,53,51,0),false ]]);
      do {
          let iconarrowleftW = String.fromCharCode(112,95,52,53,95,108,111,111,112,98,114,101,97,107,0);
          let blackl = String.fromCharCode(106,95,51,49,95,104,105,115,116,111,114,105,101,115,0);
         crossa /= Math.max(parseFloat(`${parseInt(`${crossa}`) >> (Math.min(Math.abs(1), 2))}`), 3);
         iconarrowleftW += `${(iconarrowleftW == String.fromCharCode(104,0) ? blackl.length : iconarrowleftW.length)}`;
         blackl = `${(String.fromCharCode(69,0) == iconarrowleftW ? iconarrowleftW.length : blackl.length)}`;
         if (630192.0 == crossa) {
            break;
         }
      } while (((4 & shootyesgoalM.size) == 4) && (630192.0 == crossa));
      for (let s = 0; s < 2; s++) {
          let refreshP = 1.0;
          let release_3rc = 5;
          let logouserd = String.fromCharCode(104,95,55,55,95,109,111,99,107,101,100,0);
          let dycreatoru = [614, 892, 152];
          let nendD = String.fromCharCode(116,95,57,95,117,105,111,109,111,118,101,0);
         crossa *= parseFloat(`${dycreatoru.length / 3}`);
         refreshP += parseFloat(`${1 / (Math.max(6, release_3rc))}`);
         release_3rc += parseInt(`${refreshP}`);
         logouserd += `${logouserd.length}`;
         dycreatoru = [logouserd.length >> (Math.min(Math.abs(1), 4))];
         nendD = `${parseInt(`${refreshP}`) ^ release_3rc}`;
      }
      do {
         crossa *= parseFloat(`${1 << (Math.min(2, Math.abs(shootyesgoalM.size)))}`);
         if (3623867.0 == crossa) {
            break;
         }
      } while ((2 > (4 + shootyesgoalM.size) || (crossa * 5.70) > 5.68) && (3623867.0 == crossa));
          let moduley = String.fromCharCode(119,97,115,116,101,100,95,105,95,57,48,0);
         shootyesgoalM = new Map([[`${shootyesgoalM.size}`, shootyesgoalM.size + 1]]);
         moduley = "1";
          let schedulerr = new Map([[String.fromCharCode(113,117,105,99,95,100,95,55,0),924], [String.fromCharCode(99,111,108,108,97,116,105,110,103,95,121,95,57,57,0),593]]);
          let referrerp = String.fromCharCode(116,104,101,109,101,100,95,119,95,50,56,0);
         shootyesgoalM[`${crossa}`] = shootyesgoalM.size << (Math.min(1, Math.abs(parseInt(`${crossa}`))));
         schedulerr[`${referrerp}`] = referrerp.length & 3;
      do {
         shootyesgoalM = new Map([[`${shootyesgoalM.size}`, parseInt(`${crossa}`) | 2]]);
         if (1213627 == shootyesgoalM.size) {
            break;
         }
      } while ((1213627 == shootyesgoalM.size) && (4 > (shootyesgoalM.size * 3) && 1.75 > (crossa * 2.85)));
      iconwatchnowg += `${league9.length}`;
      successt = classesc && !main_cJ;
   if (classesc) {
      halffieldimageq = `${(homeicony.length * (main_cJ ? 3 : 2))}`;
   }
       let predictionbanner0 = String.fromCharCode(116,114,105,109,109,105,110,103,95,122,95,52,52,0);
       let closey = false;
       let icontransferclubK = String.fromCharCode(103,95,52,50,95,115,101,109,105,98,111,108,100,0);
      if (predictionbanner0.endsWith(`${closey}`)) {
          let klevinL = false;
          let matchinactiveS = 2;
          let dataq = String.fromCharCode(109,95,54,50,95,105,110,118,101,114,115,101,100,0);
         closey = icontransferclubK.length == 81;
         klevinL = dataq.length > 82;
         matchinactiveS *= dataq.length;
      }
       let penaltym = new Map([[String.fromCharCode(101,120,112,114,108,105,115,116,95,49,95,51,55,0),961], [String.fromCharCode(120,95,51,54,95,115,102,116,112,0),223], [String.fromCharCode(108,111,110,103,116,101,114,109,95,48,95,54,49,0),193]]);
      while (icontransferclubK.endsWith(`${penaltym.size}`)) {
         penaltym[`${icontransferclubK}`] = 2 & icontransferclubK.length;
         break;
      }
         icontransferclubK += `${penaltym.size & 2}`;
          let changeY = new Map([[String.fromCharCode(102,116,118,99,108,95,118,95,54,54,0),928], [String.fromCharCode(119,95,51,52,95,99,111,109,112,97,110,121,0),314]]);
         penaltym[`${predictionbanner0}`] = (predictionbanner0 == String.fromCharCode(50,0) ? predictionbanner0.length : changeY.size);
         closey = icontransferclubK.length <= penaltym.size;
      do {
         icontransferclubK = "3";
         if (icontransferclubK == String.fromCharCode(55,103,121,98,108,120,0)) {
            break;
         }
      } while ((icontransferclubK == String.fromCharCode(55,103,121,98,108,120,0)) && (!icontransferclubK.endsWith(`${closey}`)));
       let targetS = String.fromCharCode(98,111,111,115,116,95,50,95,53,0);
         icontransferclubK = `${predictionbanner0.length << (Math.min(4, icontransferclubK.length))}`;
      league9 = `${parseInt(`${utils8}`) << (Math.min(Math.abs(2), 2))}`;
   if (main_cJ || classesc) {
      classesc = nendn == String.fromCharCode(90,0) || updatesp.length == 68;
   }
   if (2 > iconwatchnowg.length || !main_cJ) {
       let shielddone6 = new Map([[String.fromCharCode(106,95,49,54,95,98,111,117,110,99,105,110,103,0),929], [String.fromCharCode(117,95,53,57,95,116,114,105,112,0),589]]);
       let libbufferw = false;
       let libavcodec0 = 1.0;
       let icondefaultthumbnailD = String.fromCharCode(107,95,57,55,95,118,114,101,103,105,111,110,0);
       let iconarrowrightwhiteM = false;
       let successi = String.fromCharCode(97,112,99,109,95,99,95,56,49,0);
      do {
         successi += "1";
         if (3309998 == successi.length) {
            break;
         }
      } while ((4 < (parseInt(`${libavcodec0}`) + successi.length) || 5 < (4 + successi.length)) && (3309998 == successi.length));
      if ((2 | shielddone6.size) == 3) {
         shielddone6 = new Map([[`${shielddone6.size}`, icondefaultthumbnailD.length & shielddone6.size]]);
      }
      if (icondefaultthumbnailD.endsWith(`${iconarrowrightwhiteM}`)) {
          let const_rdp = [String.fromCharCode(97,100,100,105,95,50,95,53,54,0), String.fromCharCode(122,95,55,95,114,103,98,0)];
          let storeX = false;
          let userQ = String.fromCharCode(111,95,51,57,95,114,111,116,111,0);
          let twitter2 = String.fromCharCode(100,105,115,109,105,115,115,101,100,95,53,95,57,56,0);
         icondefaultthumbnailD = "3";
         const_rdp.push(const_rdp.length * userQ.length);
         storeX = !storeX;
         userQ = "3";
         twitter2 = "2";
      }
         iconarrowrightwhiteM = (47 < (shielddone6.size >> (Math.min(4, Math.abs((libbufferw ? 47 : shielddone6.size))))));
      do {
         shielddone6 = new Map([[`${libbufferw}`, ((libbufferw ? 1 : 4) / (Math.max(icondefaultthumbnailD.length, 9)))]]);
         if (2704512 == shielddone6.size) {
            break;
         }
      } while ((icondefaultthumbnailD.length < shielddone6.size) && (2704512 == shielddone6.size));
       let defaultprofilepic4 = String.fromCharCode(99,101,108,108,117,108,97,114,95,108,95,52,52,0);
      if (1 == defaultprofilepic4.length || iconarrowrightwhiteM) {
         iconarrowrightwhiteM = !defaultprofilepic4.startsWith(`${libavcodec0}`);
      }
      do {
         successi = `${successi.length}`;
         if (2728253 == successi.length) {
            break;
         }
      } while ((2728253 == successi.length) && (icondefaultthumbnailD != String.fromCharCode(75,0)));
      if (!icondefaultthumbnailD.startsWith(`${libbufferw}`)) {
         libbufferw = !libbufferw;
      }
         iconarrowrightwhiteM = ((icondefaultthumbnailD.length << (Math.min(3, Math.abs((!iconarrowrightwhiteM ? 39 : icondefaultthumbnailD.length))))) == 39);
      do {
         libbufferw = (successi.length >> (Math.min(5, Math.abs(shielddone6.size)))) < 78;
         if (libbufferw ? !libbufferw : libbufferw) {
            break;
         }
      } while ((!icondefaultthumbnailD.endsWith(`${libbufferw}`)) && (libbufferw ? !libbufferw : libbufferw));
         shielddone6[icondefaultthumbnailD] = 2 & shielddone6.size;
         icondefaultthumbnailD = `${(successi == String.fromCharCode(76,0) ? successi.length : parseInt(`${libavcodec0}`))}`;
          let runtimescheduler5 = 2;
          let teamdetailsbgk = String.fromCharCode(100,114,111,112,95,55,95,49,53,0);
          let historyn = 3;
         defaultprofilepic4 = `${successi.length}`;
         runtimescheduler5 %= Math.max(runtimescheduler5, 1);
         teamdetailsbgk += `${3 ^ teamdetailsbgk.length}`;
         historyn *= historyn | teamdetailsbgk.length;
      main_cJ = iconarrowrightwhiteM;
   }
   do {
      utils8 -= 3 + parseInt(`${utils8}`);
      if (utils8 == 3819123.0) {
         break;
      }
   } while ((utils8 == 3819123.0) && (4 >= (4 ^ updatesp.length) && (updatesp.length % 4) >= 2));
       let encrypt_ = [621, 12];
       let iconqqm = 1.0;
       let neonQ = 2.0;
         iconqqm += parseFloat(`${parseInt(`${iconqqm}`) + 3}`);
      while ((4.81 - neonQ) == 3.79) {
          let sans8 = 3.0;
          let livex = [347, 412];
          let ewardedo = String.fromCharCode(116,95,50,51,95,104,105,103,104,0);
         neonQ += parseInt(`${sans8}`);
         sans8 *= parseFloat(`${livex.length % (Math.max(9, ewardedo.length))}`);
         livex = [3];
         ewardedo = "3";
         break;
      }
         iconqqm /= Math.max(parseFloat(`${encrypt_.length | parseInt(`${iconqqm}`)}`), 1);
         encrypt_ = [parseInt(`${neonQ}`) + parseInt(`${iconqqm}`)];
       let sheetr = 1;
         encrypt_.push(encrypt_.length ^ 2);
      if (3.76 < (2.25 - neonQ)) {
          let imagenetworkerrS = 4.0;
          let orientationt = false;
          let evento = 1;
          let orangeuparrowR = new Map([[String.fromCharCode(102,117,122,122,95,53,95,52,52,0),460], [String.fromCharCode(102,95,54,48,95,111,112,101,110,99,108,0),316]]);
         neonQ -= sheetr;
         imagenetworkerrS /= Math.max(3, parseFloat(`${3}`));
         orientationt = imagenetworkerrS == 83.27;
         evento ^= orangeuparrowR.size;
         orangeuparrowR = new Map([[`${orangeuparrowR.size}`, evento]]);
      }
         encrypt_ = [3];
          let iconclosewhiteF = true;
          let s_lock5 = String.fromCharCode(104,95,51,56,95,115,97,118,101,112,111,105,110,116,0);
          let wind3 = String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,111,95,49,55,0);
         encrypt_ = [parseInt(`${neonQ}`)];
         iconclosewhiteF = s_lock5.startsWith(`${iconclosewhiteF}`);
         s_lock5 = `${(s_lock5.length & (iconclosewhiteF ? 3 : 2))}`;
         wind3 += "1";
      classesc = updatesp.length < homeicony.length;
   for (let l = 0; l < 3; l++) {
      iconwatchnowg = `${halffieldimageq.length}`;
   }
   if (1 < (updatesp.length | 1)) {
      updatesp = [((successt ? 2 : 2) % 2)];
   }
      teamI = `${3 + league9.length}`;
   for (let s = 0; s < 1; s++) {
      utils8 -= halffieldimageq.length | teamI.length;
   }
      nendn = `${((classesc ? 3 : 3) | 1)}`;
       let graphicsK = String.fromCharCode(101,109,117,101,100,103,101,95,49,95,51,56,0);
       let kuaishou3 = String.fromCharCode(99,111,110,102,101,116,116,105,95,117,95,51,49,0);
       let chinak = String.fromCharCode(106,95,56,51,95,104,108,105,110,101,0);
      for (let f = 0; f < 3; f++) {
         kuaishou3 += `${graphicsK.length % 2}`;
      }
      for (let u = 0; u < 3; u++) {
          let emojiheartn = 2.0;
          let episodesk = new Map([[String.fromCharCode(102,105,120,115,116,114,105,100,101,95,53,95,49,48,0),544], [String.fromCharCode(118,95,50,48,95,109,117,108,116,105,112,108,105,101,114,0),541]]);
         chinak = `${1 ^ kuaishou3.length}`;
         emojiheartn -= parseFloat(`${parseInt(`${emojiheartn}`)}`);
         episodesk = new Map([[`${episodesk.size}`, episodesk.size >> (Math.min(5, Math.abs(parseInt(`${emojiheartn}`))))]]);
      }
         kuaishou3 = `${kuaishou3.length >> (Math.min(chinak.length, 2))}`;
         chinak = `${3 >> (Math.min(4, graphicsK.length))}`;
       let smallorangemanF = String.fromCharCode(100,101,109,97,116,101,114,105,97,108,105,122,101,95,48,95,53,55,0);
      do {
         kuaishou3 += "2";
         if (kuaishou3.length == 1993446) {
            break;
         }
      } while ((kuaishou3.length == 1993446) && (graphicsK.length <= 5));
         chinak += "1";
          let yingG = String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,52,95,51,52,0);
          let langkeyQ = String.fromCharCode(105,110,105,116,101,110,99,95,97,95,57,52,0);
         graphicsK = `${langkeyQ.length & yingG.length}`;
       let lcopy_ifl = new Map([[String.fromCharCode(101,95,53,52,95,118,97,108,117,108,101,0),354], [String.fromCharCode(105,95,50,57,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0),240], [String.fromCharCode(115,117,115,112,101,110,100,95,118,95,55,49,0),288]]);
      main_cJ = utils8 <= 35.72;
      homeicony += `${nendn.length}`;
   do {
      iconwatchnowg += `${nendn.length}`;
      if (String.fromCharCode(98,108,117,121,105,0) == iconwatchnowg) {
         break;
      }
   } while ((String.fromCharCode(98,108,117,121,105,0) == iconwatchnowg) && (teamI != String.fromCharCode(73,0)));

      Animated.parallel([inOpacity(), inRight()]).start();
   while (homeicony.includes(`${main_cJ}`)) {
      main_cJ = 18.50 > greyp;
      break;
   }
   for (let r = 0; r < 2; r++) {
      classesc = teamI == halffieldimageq;
   }
   for (let f = 0; f < 1; f++) {
      updatesp.push(3);
   }
       let backgroundm = new Map([[String.fromCharCode(101,120,105,102,95,108,95,54,54,0),508], [String.fromCharCode(120,95,54,54,95,115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,0),679]]);
       let component5 = 2.0;
      while (component5 <= parseFloat(`${backgroundm.size}`)) {
         component5 -= parseFloat(`${parseInt(`${component5}`) ^ backgroundm.size}`);
         break;
      }
      do {
         component5 += parseFloat(`${backgroundm.size}`);
         if (4478357.0 == component5) {
            break;
         }
      } while ((4 == (backgroundm.size << (Math.min(Math.abs(3), 1)))) && (4478357.0 == component5));
      for (let n = 0; n < 1; n++) {
         backgroundm[`${component5}`] = backgroundm.size;
      }
      do {
         backgroundm[`${component5}`] = backgroundm.size;
         if (3566014 == backgroundm.size) {
            break;
         }
      } while ((Array.from(backgroundm.keys()).includes(`${component5}`)) && (3566014 == backgroundm.size));
          let bottom2 = new Map([[String.fromCharCode(111,95,51,55,95,105,100,115,0),842], [String.fromCharCode(115,116,101,112,95,53,95,49,53,0),99]]);
         component5 -= parseFloat(`${3}`);
         bottom2 = new Map([[`${bottom2.size}`, 1]]);
      if (component5 > 4.55) {
         component5 /= Math.max(parseFloat(`${parseInt(`${component5}`) - backgroundm.size}`), 1);
      }
      halffieldimageq += `${parseInt(`${component5}`) * teamI.length}`;
       let qaage = 3;
       let goalx = String.fromCharCode(110,95,55,55,95,114,101,99,117,114,115,105,118,101,0);
      while ((qaage >> (Math.min(goalx.length, 1))) == 2 && (qaage >> (Math.min(goalx.length, 2))) == 2) {
         qaage |= qaage << (Math.min(goalx.length, 5));
         break;
      }
          let shootH = true;
          let favicon4 = 4;
         qaage /= Math.max(4, (String.fromCharCode(49,0) == goalx ? qaage : goalx.length));
         shootH = favicon4 < 5;
         favicon4 -= favicon4;
      do {
         goalx = `${1 >> (Math.min(2, Math.abs(qaage)))}`;
         if (goalx == String.fromCharCode(116,57,122,0)) {
            break;
         }
      } while (((qaage / 3) <= 4 && 3 <= (qaage / 3)) && (goalx == String.fromCharCode(116,57,122,0)));
         goalx += `${(String.fromCharCode(82,0) == goalx ? goalx.length : qaage)}`;
      while ((2 >> (Math.min(3, goalx.length))) == 5) {
         qaage -= qaage / (Math.max(3, 4));
         break;
      }
       let policyE = [String.fromCharCode(109,95,53,56,95,110,101,108,108,121,0), String.fromCharCode(114,101,110,100,101,114,101,114,95,116,95,54,55,0), String.fromCharCode(111,95,55,54,95,115,117,98,112,114,111,99,101,115,115,0)];
       let bannerx = [10, 735, 460];
      classesc = buildF.length == 91;
   do {
      themeJ += `${nendn.length / 2}`;
      if (String.fromCharCode(55,102,56,122,97,117,0) == themeJ) {
         break;
      }
   } while ((String.fromCharCode(55,102,56,122,97,117,0) == themeJ) && (1 > homeicony.length));
      updatesp.push(homeicony.length);
   if (teamI == halffieldimageq) {
      halffieldimageq += `${homeicony.length}`;
   }
       let becomef = String.fromCharCode(120,95,53,54,95,100,105,115,112,108,97,121,101,100,0);
       let defaultlogo4 = new Map([[String.fromCharCode(118,103,108,111,98,97,108,95,109,95,54,50,0),383], [String.fromCharCode(107,95,50,56,95,97,110,111,116,104,101,114,0),705]]);
      while (4 > (defaultlogo4.size | becomef.length) || (becomef.length | defaultlogo4.size) > 4) {
         defaultlogo4[`${becomef}`] = defaultlogo4.size | 3;
         break;
      }
         becomef += `${becomef.length + 2}`;
         becomef = `${defaultlogo4.size}`;
          let matchdetailbgU = String.fromCharCode(105,116,108,101,95,110,95,56,0);
          let m_imagey = [697, 681, 410];
         becomef = `${becomef.length}`;
         matchdetailbgU = `${m_imagey.length % 1}`;
         m_imagey = [matchdetailbgU.length];
         becomef += `${becomef.length / (Math.max(3, 9))}`;
         becomef += `${defaultlogo4.size * 1}`;
      teamI = `${(iconwatchnowg == String.fromCharCode(57,0) ? iconwatchnowg.length : updatesp.length)}`;
   for (let a = 0; a < 3; a++) {
       let defaultlogoa = String.fromCharCode(110,105,99,101,95,119,95,50,48,0);
       let halfg = String.fromCharCode(104,95,51,56,95,115,105,120,116,97,112,0);
       let neonY = false;
       let homeloadingM = [String.fromCharCode(101,95,49,56,95,102,114,97,109,101,115,101,116,116,101,114,0), String.fromCharCode(112,97,110,110,105,110,103,95,118,95,54,53,0), String.fromCharCode(118,105,115,98,108,101,95,105,95,55,54,0)];
       let yellowcirclebgK = new Map([[String.fromCharCode(100,97,97,108,97,95,106,95,55,56,0),459], [String.fromCharCode(105,108,98,99,102,105,120,95,53,95,52,49,0),634], [String.fromCharCode(114,95,57,53,95,98,121,116,101,105,110,0),683]]);
       let profile_ = false;
       let changek = true;
       let libavutil1 = false;
      if (homeloadingM.length < 3) {
         homeloadingM.push((defaultlogoa == String.fromCharCode(118,0) ? defaultlogoa.length : (changek ? 5 : 1)));
      }
          let singaporeo = String.fromCharCode(108,95,57,51,95,115,109,111,111,116,104,105,110,103,0);
          let playlistS = new Map([[String.fromCharCode(107,95,49,48,95,112,114,111,109,105,115,105,102,121,0),41], [String.fromCharCode(99,108,101,97,110,101,100,95,102,95,57,57,0),376], [String.fromCharCode(97,98,115,116,114,97,99,116,95,117,95,55,48,0),352]]);
         changek = homeloadingM.length < defaultlogoa.length;
         singaporeo += `${2 >> (Math.min(3, singaporeo.length))}`;
         playlistS = new Map([[`${playlistS.size}`, 2 + playlistS.size]]);
         libavutil1 = neonY;
         profile_ = changek;
       let encrypt5 = false;
      for (let b = 0; b < 3; b++) {
         defaultlogoa += `${yellowcirclebgK.size % 3}`;
      }
         libavutil1 = String.fromCharCode(86,0) == defaultlogoa;
      if (3 < halfg.length) {
          let goalQ = new Map([[String.fromCharCode(98,101,116,97,95,56,95,54,56,0),false ], [String.fromCharCode(114,108,118,108,99,95,106,95,51,50,0),false ], [String.fromCharCode(116,95,54,56,95,97,100,100,105,0),true ]]);
          let homeactive_ = String.fromCharCode(116,95,55,95,109,111,100,101,120,112,0);
         halfg = `${((profile_ ? 4 : 4) >> (Math.min(Math.abs(3), 4)))}`;
         goalQ[homeactive_] = 1;
         homeactive_ += `${goalQ.size}`;
      }
      do {
         defaultlogoa += `${((neonY ? 1 : 4) % (Math.max(3, defaultlogoa.length)))}`;
         if (defaultlogoa.length == 2954757) {
            break;
         }
      } while ((defaultlogoa.length == 2954757) && (homeloadingM.length >= defaultlogoa.length));
          let owngoalm = 1.0;
          let plusm = String.fromCharCode(118,95,53,48,95,115,116,114,110,108,101,110,0);
         encrypt5 = (encrypt5 ? !profile_ : !encrypt5);
         owngoalm -= 2 >> (Math.min(4, Math.abs(parseInt(`${owngoalm}`))));
         plusm += `${parseInt(`${owngoalm}`)}`;
      do {
          let chartB = String.fromCharCode(115,121,110,116,97,120,95,121,95,51,49,0);
          let minivodW = String.fromCharCode(116,95,56,50,95,115,119,97,112,112,97,98,108,101,0);
         encrypt5 = !profile_;
         chartB = `${minivodW.length}`;
         minivodW += `${(chartB == String.fromCharCode(107,0) ? chartB.length : minivodW.length)}`;
         if (encrypt5 ? !encrypt5 : encrypt5) {
            break;
         }
      } while ((encrypt5 ? !encrypt5 : encrypt5) && (encrypt5));
      do {
         changek = defaultlogoa.includes(`${encrypt5}`);
         if (changek ? !changek : changek) {
            break;
         }
      } while ((!changek) && (changek ? !changek : changek));
         changek = !libavutil1 && yellowcirclebgK.size < 6;
      themeJ = "1";
   }
   while (!classesc) {
       let cedbadcebfbfbfbcfecbcX = String.fromCharCode(114,101,110,101,119,95,122,95,54,56,0);
      while (cedbadcebfbfbfbcfecbcX == String.fromCharCode(84,0)) {
          let stationT = String.fromCharCode(108,97,122,121,95,107,95,54,52,0);
          let googler = String.fromCharCode(102,97,117,108,116,121,95,111,95,49,0);
          let libnmsR = String.fromCharCode(98,105,111,109,101,116,114,105,99,115,95,55,95,56,56,0);
          let bannerX = 4.0;
          let topich = true;
         cedbadcebfbfbfbcfecbcX = `${3 & libnmsR.length}`;
         stationT = `${((topich ? 1 : 4))}`;
         googler = `${1 | parseInt(`${bannerX}`)}`;
         libnmsR += `${googler.length}`;
         bannerX -= parseFloat(`${googler.length * stationT.length}`);
         topich = 56.89 > bannerX || 97 > googler.length;
         break;
      }
      while (!cedbadcebfbfbfbcfecbcX.includes(`${cedbadcebfbfbfbcfecbcX.length}`)) {
         cedbadcebfbfbfbcfecbcX += `${2 - cedbadcebfbfbfbcfecbcX.length}`;
         break;
      }
      do {
         cedbadcebfbfbfbcfecbcX += `${cedbadcebfbfbfbcfecbcX.length}`;
         if (cedbadcebfbfbfbcfecbcX.length == 1870652) {
            break;
         }
      } while ((cedbadcebfbfbfbcfecbcX.length < 3) && (cedbadcebfbfbfbcfecbcX.length == 1870652));
      classesc = 3.26 < greyp && successt;
      break;
   }
   while (1 > (1 & kickO.length) || 1 > kickO.length) {
      kickO.push((iconwatchnowg.length >> (Math.min(4, Math.abs((classesc ? 5 : 5))))));
      break;
   }
   while ((nendn.length & 3) >= 3 && (greyp + 2.2) >= 3.98) {
       let countdownW = [350, 934, 221];
       let codegeni = 4.0;
       let vipsportL = [String.fromCharCode(115,104,111,119,119,97,118,101,115,112,105,99,95,121,95,53,52,0), String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,109,95,54,0), String.fromCharCode(112,111,114,116,114,97,105,116,95,48,95,51,50,0)];
       let coreh = String.fromCharCode(107,95,52,50,95,98,105,116,112,108,97,110,101,0);
      for (let n = 0; n < 3; n++) {
         countdownW.push(vipsportL.length % (Math.max(3, 4)));
      }
      while (countdownW.includes(vipsportL.length)) {
          let project7 = 1;
          let graphicsp = String.fromCharCode(111,95,49,48,95,121,117,118,103,98,114,112,0);
          let successV = String.fromCharCode(116,99,102,105,108,101,95,113,95,52,49,0);
          let selectedR = String.fromCharCode(100,101,114,105,118,101,100,95,97,95,49,50,0);
         vipsportL.push(project7 % (Math.max(vipsportL.length, 10)));
         project7 += (successV == String.fromCharCode(109,0) ? graphicsp.length : successV.length);
         graphicsp += `${successV.length}`;
         selectedR = `${selectedR.length / (Math.max(1, 10))}`;
         break;
      }
      for (let a = 0; a < 3; a++) {
         countdownW = [countdownW.length];
      }
          let indicatorM = [431, 737, 702];
          let iconlogout2 = String.fromCharCode(105,95,56,50,95,111,116,111,102,0);
         codegeni *= (coreh == String.fromCharCode(82,0) ? parseInt(`${codegeni}`) : coreh.length);
         indicatorM.push((String.fromCharCode(90,0) == iconlogout2 ? iconlogout2.length : indicatorM.length));
      while (vipsportL.length < parseInt(`${codegeni}`)) {
         codegeni += 1 - parseInt(`${codegeni}`);
         break;
      }
          let filedv = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,105,95,51,54,0);
         vipsportL.push((String.fromCharCode(113,0) == filedv ? countdownW.length : filedv.length));
      do {
         codegeni -= vipsportL.length ^ coreh.length;
         if (codegeni == 2738654.0) {
            break;
         }
      } while (((parseInt(`${codegeni}`) - countdownW.length) >= 4) && (codegeni == 2738654.0));
      do {
          let currentb = new Map([[String.fromCharCode(115,116,114,101,110,103,116,104,95,111,95,50,50,0),false ], [String.fromCharCode(113,95,49,50,95,114,101,97,108,116,105,109,101,0),true ]]);
          let baseline4 = 2.0;
          let binddatas9 = 0;
          let mbnativeadvancedW = new Map([[String.fromCharCode(112,97,115,115,95,49,95,54,51,0),315], [String.fromCharCode(99,95,52,55,95,114,101,109,97,114,107,0),36]]);
         coreh = `${binddatas9 >> (Math.min(Math.abs(mbnativeadvancedW.size), 2))}`;
         currentb = new Map([[`${currentb.size}`, parseInt(`${baseline4}`)]]);
         baseline4 -= parseFloat(`${parseInt(`${baseline4}`) + currentb.size}`);
         binddatas9 -= parseInt(`${baseline4}`) * currentb.size;
         mbnativeadvancedW = new Map([[`${currentb.size}`, currentb.size * 2]]);
         if (coreh.length == 668362) {
            break;
         }
      } while ((coreh.length == 668362) && (4 > (vipsportL.length ^ coreh.length) && 4 > (vipsportL.length ^ coreh.length)));
      do {
         vipsportL = [vipsportL.length ^ parseInt(`${codegeni}`)];
         if (533344 == vipsportL.length) {
            break;
         }
      } while ((533344 == vipsportL.length) && (coreh.includes(`${vipsportL.length}`)));
         vipsportL.push(1);
      for (let w = 0; w < 1; w++) {
          let rocketF = true;
          let libbuffer1 = 4.0;
          let playv = String.fromCharCode(119,95,54,48,95,112,114,111,118,105,100,101,100,0);
          let formy = 5;
          let mimoW = [930, 822];
         countdownW = [mimoW.length + 1];
         rocketF = !rocketF;
         libbuffer1 *= parseFloat(`${parseInt(`${libbuffer1}`) & formy}`);
         playv += `${(playv == String.fromCharCode(97,0) ? (rocketF ? 3 : 5) : playv.length)}`;
         formy -= (parseInt(`${libbuffer1}`) ^ (rocketF ? 5 : 2));
         mimoW.push(3);
      }
      if (coreh.length < countdownW.length) {
          let backwhiteD = new Map([[String.fromCharCode(99,100,101,114,114,111,114,95,97,95,57,51,0),530], [String.fromCharCode(120,95,49,48,48,95,97,117,116,111,115,99,114,111,108,108,0),576]]);
          let typingA = true;
         countdownW.push((countdownW.length << (Math.min(4, Math.abs((typingA ? 1 : 3))))));
         backwhiteD = new Map([[`${backwhiteD.size}`, 1 << (Math.min(1, Math.abs(backwhiteD.size)))]]);
         typingA = backwhiteD.size < 2;
      }
      nendn += `${parseInt(`${codegeni}`) >> (Math.min(Math.abs(1), 2))}`;
      break;
   }
       let basketballtrophy0 = String.fromCharCode(97,95,52,57,95,98,111,108,100,0);
       let iconlogoutT = String.fromCharCode(111,102,102,115,101,116,115,105,122,101,95,118,95,55,49,0);
       let gifgoalbgm = 2;
      if ((iconlogoutT.length / 4) < 3) {
          let emptyz = 2;
          let defaultfootballbgo = 4.0;
          let zhuboJ = String.fromCharCode(106,117,115,116,105,102,105,101,100,95,106,95,52,55,0);
          let helperY = [866, 433];
         gifgoalbgm -= emptyz;
         defaultfootballbgo -= (zhuboJ == String.fromCharCode(82,0) ? helperY.length : zhuboJ.length);
         helperY = [2];
      }
          let robotok = String.fromCharCode(102,97,118,105,99,111,110,95,97,95,54,56,0);
         gifgoalbgm %= Math.max(iconlogoutT.length, 3);
         robotok += `${robotok.length << (Math.min(2, robotok.length))}`;
         basketballtrophy0 = `${gifgoalbgm}`;
      do {
         gifgoalbgm %= Math.max((iconlogoutT == String.fromCharCode(117,0) ? iconlogoutT.length : gifgoalbgm), 3);
         if (gifgoalbgm == 1240582) {
            break;
         }
      } while ((gifgoalbgm == 1240582) && ((3 << (Math.min(2, Math.abs(gifgoalbgm)))) < 1 || (3 << (Math.min(3, iconlogoutT.length))) < 4));
          let friendsP = 1.0;
          let predictionb = String.fromCharCode(99,111,108,111,114,102,117,108,95,99,95,53,0);
          let mimes = String.fromCharCode(106,95,53,54,95,100,101,112,115,0);
         basketballtrophy0 = `${gifgoalbgm * parseInt(`${friendsP}`)}`;
         friendsP -= mimes.length >> (Math.min(Math.abs(2), 1));
         predictionb = `${mimes.length * predictionb.length}`;
          let tick4 = String.fromCharCode(111,114,105,103,110,97,108,95,121,95,50,57,0);
         basketballtrophy0 += `${iconlogoutT.length / 3}`;
         tick4 = "2";
         iconlogoutT += `${iconlogoutT.length}`;
      if (basketballtrophy0.endsWith(iconlogoutT)) {
         basketballtrophy0 = `${gifgoalbgm}`;
      }
      if (3 < (3 | gifgoalbgm) || (iconlogoutT.length | gifgoalbgm) < 3) {
          let handlerZ = 1.0;
          let incidentS = String.fromCharCode(109,111,100,101,109,118,99,111,115,116,95,100,95,55,48,0);
          let iconpointscoreo = 1;
         gifgoalbgm /= Math.max(5, parseInt(`${handlerZ}`) + 1);
         handlerZ /= Math.max((parseFloat(`${String.fromCharCode(110,0) == incidentS ? iconpointscoreo : incidentS.length}`)), 2);
         iconpointscoreo -= 3 + incidentS.length;
      }
      successt = 81.0 >= greyp && league9.length >= 32;
       let becomeO = new Map([[String.fromCharCode(107,95,54,49,95,112,105,120,98,108,111,99,107,100,115,112,0),191], [String.fromCharCode(117,115,114,115,99,116,112,95,110,95,55,50,0),865]]);
       let register_00A = false;
       let default_wqU = String.fromCharCode(98,95,54,49,95,112,102,102,102,116,0);
          let zoomD = 4;
          let circleH = new Map([[String.fromCharCode(111,95,49,57,95,115,112,97,99,101,114,0),242], [String.fromCharCode(100,105,121,102,112,95,52,95,57,50,0),487]]);
         default_wqU += `${(3 >> (Math.min(1, Math.abs((register_00A ? 1 : 1)))))}`;
         zoomD += 2 * circleH.size;
         circleH = new Map([[`${circleH.size}`, circleH.size]]);
      if (5 == default_wqU.length) {
         register_00A = default_wqU.length <= 100;
      }
      do {
         register_00A = !default_wqU.endsWith(`${register_00A}`);
         if (register_00A ? !register_00A : register_00A) {
            break;
         }
      } while ((1 > (becomeO.size | 2)) && (register_00A ? !register_00A : register_00A));
      while (3 == (becomeO.size + 3)) {
         becomeO[`${register_00A}`] = becomeO.size;
         break;
      }
         becomeO[default_wqU] = ((register_00A ? 1 : 1));
      for (let l = 0; l < 1; l++) {
          let modelD = String.fromCharCode(115,99,104,109,95,117,95,53,0);
         default_wqU += `${((register_00A ? 3 : 2))}`;
         modelD += "3";
      }
          let filterF = new Map([[String.fromCharCode(109,101,109,120,95,117,95,50,57,0),269], [String.fromCharCode(120,95,56,49,95,102,114,97,109,101,115,121,110,99,0),789]]);
         becomeO = new Map([[`${filterF.size}`, 3 >> (Math.min(4, Math.abs(filterF.size)))]]);
         becomeO[`${default_wqU}`] = default_wqU.length;
         becomeO = new Map([[`${becomeO.size}`, 2]]);
      themeJ += `${(2 << (Math.min(1, Math.abs((classesc ? 3 : 4)))))}`;
   if (nendn.length > 1) {
       let changeh = 3.0;
       let soundC = 1.0;
       let livesharez = new Map([[String.fromCharCode(114,101,109,97,116,114,105,120,95,116,95,51,53,0),32], [String.fromCharCode(102,95,55,50,95,99,111,108,115,0),329], [String.fromCharCode(121,95,53,49,95,115,101,110,115,105,116,105,118,101,0),393]]);
       let xvodY = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,105,110,103,95,107,95,52,55,0),false ], [String.fromCharCode(105,95,53,50,95,97,108,115,101,0),true ], [String.fromCharCode(101,112,97,102,95,99,95,55,54,0),false ]]);
       let malaysiau = String.fromCharCode(113,95,55,52,95,97,100,116,115,116,111,97,115,99,0);
       let gestureR = String.fromCharCode(103,116,101,115,116,95,110,95,49,51,0);
       let volumeT = String.fromCharCode(107,95,56,55,95,112,105,110,110,101,100,0);
         xvodY[`${soundC}`] = 1;
         livesharez[malaysiau] = 2 << (Math.min(2, volumeT.length));
         changeh /= Math.max(5, 2 + livesharez.size);
         livesharez[volumeT] = volumeT.length;
         soundC -= parseFloat(`${xvodY.size / (Math.max(malaysiau.length, 8))}`);
          let floating2 = 0;
          let playlistc = 2.0;
         gestureR += `${malaysiau.length % (Math.max(2, 3))}`;
         floating2 <<= Math.min(Math.abs(floating2), 3);
         playlistc += parseFloat(`${2 | floating2}`);
      do {
         xvodY[`${gestureR}`] = gestureR.length | 3;
         if (4431343 == xvodY.size) {
            break;
         }
      } while ((4431343 == xvodY.size) && (1 > (volumeT.length ^ 1)));
      if ((5 & malaysiau.length) < 4 || (5 & malaysiau.length) < 5) {
         malaysiau += `${parseInt(`${changeh}`)}`;
      }
       let turndownT = [363, 692];
       let backy = [String.fromCharCode(102,114,97,99,95,51,95,50,48,0), String.fromCharCode(106,95,53,48,95,116,114,105,97,108,0)];
         changeh += 3;
      for (let j = 0; j < 2; j++) {
          let rewardvideoJ = String.fromCharCode(105,95,53,53,95,105,115,115,117,105,110,103,0);
         volumeT = `${parseInt(`${changeh}`)}`;
         rewardvideoJ = `${3 - rewardvideoJ.length}`;
      }
      if (3 < (volumeT.length >> (Math.min(5, backy.length))) && (3 >> (Math.min(3, backy.length))) < 3) {
         backy.push(backy.length ^ 1);
      }
      while (volumeT.endsWith(`${xvodY.size}`)) {
         volumeT += `${(String.fromCharCode(101,0) == volumeT ? turndownT.length : volumeT.length)}`;
         break;
      }
          let yellowscoreballw = String.fromCharCode(102,95,49,56,95,102,108,111,111,114,0);
          let areab = String.fromCharCode(107,95,50,48,95,119,114,105,116,101,99,108,101,97,114,0);
          let injuryM = new Map([[String.fromCharCode(104,95,56,56,95,112,111,108,121,109,101,115,104,0),String.fromCharCode(109,95,50,56,95,117,110,109,97,115,107,0)], [String.fromCharCode(115,95,54,55,95,101,110,99,111,100,101,109,118,0),String.fromCharCode(102,105,108,116,101,114,95,97,95,52,52,0)], [String.fromCharCode(116,104,101,109,101,95,52,95,54,54,0),String.fromCharCode(99,111,108,108,97,103,101,95,108,95,52,50,0)]]);
         changeh *= parseInt(`${changeh}`);
         yellowscoreballw += `${yellowscoreballw.length}`;
         areab += `${(String.fromCharCode(48,0) == areab ? injuryM.size : areab.length)}`;
         injuryM = new Map([[areab, 1 - areab.length]]);
      updatesp.push(xvodY.size / 2);
   }

    } else {
      Animated.parallel([outOpacity(), outRight()]).start(() => {
        dispatch(updateVideoPropPipe([VideoPlayerActions.hideControl]));
      });
    }
  }, [display]);

  const onPress = () => {
       let iconqqh = 3.0;
    let indicators = String.fromCharCode(99,110,111,110,99,101,95,115,95,55,56,0);
    let away7 = [String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,95,53,95,56,51,0), String.fromCharCode(99,97,118,115,105,100,99,116,95,101,95,57,57,0), String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,114,95,53,57,0)];
    let unselectedb = [620, 131, 304];
    let zhubox = String.fromCharCode(120,95,50,52,95,119,111,114,100,0);
    let rocketj = String.fromCharCode(108,95,49,54,95,100,111,119,110,0);
    let layoutF = [835, 886, 600];
    let umengc = 3;
    let lightP = 3.0;
   while (!layoutF.includes(away7.length)) {
      away7.push(layoutF.length);
      break;
   }
   while (zhubox.length <= 5) {
       let modelx = String.fromCharCode(100,95,49,52,95,105,110,115,101,114,116,101,100,0);
       let phoneshare6 = 4;
       let show9 = String.fromCharCode(114,95,52,51,95,99,111,110,116,97,99,116,0);
       let brightnessE = true;
      if (2 == show9.length) {
          let time_0fB = false;
         show9 += `${phoneshare6 ^ 2}`;
         time_0fB = time_0fB && time_0fB;
      }
      for (let g = 0; g < 2; g++) {
         show9 += `${((brightnessE ? 4 : 2))}`;
      }
       let imagenomoredataS = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,95,56,95,53,54,0);
       let hooksl = String.fromCharCode(103,95,48,95,122,111,111,109,101,100,0);
      if (3 > imagenomoredataS.length) {
         hooksl = "3";
      }
      while (modelx.endsWith(`${phoneshare6}`)) {
         modelx += `${(String.fromCharCode(121,0) == hooksl ? hooksl.length : show9.length)}`;
         break;
      }
         modelx = `${(hooksl == String.fromCharCode(110,0) ? phoneshare6 : hooksl.length)}`;
      for (let q = 0; q < 3; q++) {
          let latn2 = 0;
         imagenomoredataS = `${(hooksl == String.fromCharCode(67,0) ? hooksl.length : latn2)}`;
      }
      for (let k = 0; k < 2; k++) {
         show9 += "3";
      }
      do {
         phoneshare6 >>= Math.min(Math.abs(3 | imagenomoredataS.length), 5);
         if (3775314 == phoneshare6) {
            break;
         }
      } while (((hooksl.length + 3) >= 5 || (phoneshare6 + 3) >= 3) && (3775314 == phoneshare6));
      do {
         phoneshare6 %= Math.max(2, 1);
         if (2689871 == phoneshare6) {
            break;
         }
      } while (((phoneshare6 << (Math.min(Math.abs(4), 3))) <= 1) && (2689871 == phoneshare6));
          let skipt = 0.0;
          let mbbidN = [56, 239];
         modelx = "2";
         skipt *= parseInt(`${skipt}`);
         mbbidN.push(parseInt(`${skipt}`) | mbbidN.length);
          let rocketq = new Map([[String.fromCharCode(106,95,53,50,95,97,110,110,111,116,97,116,101,0),String.fromCharCode(101,108,101,109,101,110,116,115,95,103,95,56,49,0)], [String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,97,95,57,0),String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,111,95,50,55,0)], [String.fromCharCode(104,97,110,100,108,101,100,95,101,95,49,49,0),String.fromCharCode(102,95,55,53,95,103,101,116,97,117,120,118,97,108,0)]]);
          let codeo = String.fromCharCode(109,97,110,116,105,115,115,97,95,105,95,55,50,0);
         phoneshare6 -= 3 * imagenomoredataS.length;
         rocketq = new Map([[`${rocketq.size}`, (codeo == String.fromCharCode(99,0) ? rocketq.size : codeo.length)]]);
      indicators += `${away7.length}`;
      break;
   }
   if (away7.length <= 4) {
      away7.push(away7.length);
   }
      indicators = `${parseInt(`${iconqqh}`)}`;
   while (unselectedb.length >= rocketj.length) {
       let related0 = String.fromCharCode(104,95,53,48,95,116,114,105,0);
       let mimo4 = true;
       let footballtrophyY = 2.0;
       let orangeuparrowO = 0;
          let mbsplash0 = 5.0;
         mimo4 = footballtrophyY >= 9.93;
         mbsplash0 *= 1 ^ parseInt(`${mbsplash0}`);
      while ((footballtrophyY + orangeuparrowO) >= 3.56) {
         orangeuparrowO += (parseInt(`${footballtrophyY}`) * (mimo4 ? 4 : 3));
         break;
      }
       let const__5Q = 1;
      do {
          let header3 = [931, 859];
          let commentT = 3.0;
         mimo4 = commentT <= 54.6;
         header3.push(header3.length | 2);
         commentT *= header3.length + header3.length;
         if (mimo4 ? !mimo4 : mimo4) {
            break;
         }
      } while ((mimo4 ? !mimo4 : mimo4) && (orangeuparrowO <= 1));
       let sharedw = String.fromCharCode(99,100,97,116,97,95,112,95,54,56,0);
       let manifest7 = String.fromCharCode(101,114,118,101,114,95,50,95,57,49,0);
      do {
          let megaphoneb = String.fromCharCode(109,97,116,120,95,54,95,49,54,0);
         sharedw = `${orangeuparrowO}`;
         megaphoneb = `${megaphoneb.length}`;
         if (3239703 == sharedw.length) {
            break;
         }
      } while ((sharedw == String.fromCharCode(112,0) && manifest7 != String.fromCharCode(75,0)) && (3239703 == sharedw.length));
         sharedw = `${manifest7.length / 1}`;
         related0 += `${manifest7.length}`;
       let linke = [327, 79, 315];
         manifest7 += `${linke.length + related0.length}`;
          let playercommon8 = 0.0;
          let iconarrowright4 = 3.0;
         linke.push(related0.length);
         playercommon8 /= Math.max(parseFloat(`${parseInt(`${iconarrowright4}`)}`), 5);
         manifest7 = "3";
      rocketj = `${parseInt(`${iconqqh}`)}`;
      break;
   }
      iconqqh /= Math.max(zhubox.length + unselectedb.length, 5);
      indicators = `${away7.length + rocketj.length}`;
      away7.push(1 ^ indicators.length);
      rocketj += `${3 ^ away7.length}`;

    

   while (1 >= indicators.length) {
      indicators = `${3 & layoutF.length}`;
      break;
   }
   while (rocketj == indicators) {
       let bgvipsport8 = String.fromCharCode(99,95,56,55,95,116,101,109,112,111,114,97,114,105,108,121,0);
       let klevinw = [376, 250];
      for (let e = 0; e < 2; e++) {
         klevinw = [(bgvipsport8 == String.fromCharCode(55,0) ? bgvipsport8.length : klevinw.length)];
      }
      do {
          let profilepicC = [String.fromCharCode(101,95,57,49,95,115,112,97,109,0), String.fromCharCode(118,95,53,54,95,102,102,116,112,97,99,107,0), String.fromCharCode(99,95,52,48,95,99,111,100,101,100,0)];
          let logoc = String.fromCharCode(122,95,51,50,95,115,116,101,114,101,111,100,0);
          let default_0F = 2;
         klevinw.push((logoc == String.fromCharCode(122,0) ? logoc.length : default_0F));
         profilepicC.push(profilepicC.length | profilepicC.length);
         if (klevinw.length == 4827819) {
            break;
         }
      } while ((klevinw.length == 4827819) && (bgvipsport8.startsWith(`${klevinw.length}`)));
      if ((bgvipsport8.length >> (Math.min(4, klevinw.length))) <= 1) {
          let bootsplashH = new Map([[String.fromCharCode(98,117,116,116,101,114,95,98,95,56,56,0),98], [String.fromCharCode(111,95,57,95,104,113,120,100,115,112,0),332], [String.fromCharCode(109,117,116,101,95,108,95,52,51,0),497]]);
          let defaultfootballbgq = 2;
          let iconadslinkk = new Map([[String.fromCharCode(112,97,115,115,112,111,114,116,95,120,95,55,48,0),String.fromCharCode(98,112,115,95,98,95,55,56,0)], [String.fromCharCode(103,101,116,109,97,120,114,115,115,95,99,95,56,51,0),String.fromCharCode(110,111,110,115,101,99,117,114,101,95,103,95,54,49,0)], [String.fromCharCode(116,95,54,53,95,108,115,112,112,111,108,121,0),String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,106,95,52,57,0)]]);
          let formA = String.fromCharCode(104,95,53,49,95,115,116,114,105,110,103,117,116,105,108,115,0);
          let customp = 2.0;
         klevinw.push(bootsplashH.size);
         bootsplashH = new Map([[`${defaultfootballbgq}`, formA.length | 2]]);
         defaultfootballbgq += 1 >> (Math.min(1, Math.abs(parseInt(`${customp}`))));
         iconadslinkk[`${customp}`] = parseInt(`${customp}`) - formA.length;
      }
          let collectionW = String.fromCharCode(103,95,57,50,95,108,117,116,115,0);
          let splashW = 2.0;
          let entryI = [684, 877];
         bgvipsport8 = `${parseInt(`${splashW}`)}`;
         collectionW = "3";
         splashW *= parseFloat(`${3 - collectionW.length}`);
         entryI.push((String.fromCharCode(106,0) == collectionW ? collectionW.length : entryI.length));
       let nativez = [733, 295];
       let settingJ = [809, 755, 260];
         bgvipsport8 = `${nativez.length}`;
      indicators = `${rocketj.length}`;
      break;
   }
   for (let e = 0; e < 3; e++) {
       let libcrashsdk2 = 2;
         libcrashsdk2 /= Math.max(3, libcrashsdk2 / (Math.max(libcrashsdk2, 7)));
      while (libcrashsdk2 < 1) {
         libcrashsdk2 %= Math.max(1, 3);
         break;
      }
      do {
          let activity6 = String.fromCharCode(115,112,97,110,95,99,95,51,51,0);
          let teamg = String.fromCharCode(103,95,48,95,98,97,99,107,119,97,114,100,115,0);
          let confirmationD = 5;
          let grey9 = 5.0;
          let apps0 = 1.0;
         libcrashsdk2 >>= Math.min(3, Math.abs(3 * parseInt(`${apps0}`)));
         activity6 = `${2 ^ teamg.length}`;
         teamg += "3";
         confirmationD <<= Math.min(Math.abs(parseInt(`${grey9}`) >> (Math.min(Math.abs(3), 4))), 4);
         grey9 -= parseFloat(`${teamg.length * activity6.length}`);
         apps0 *= parseFloat(`${teamg.length % 3}`);
         if (libcrashsdk2 == 1400326) {
            break;
         }
      } while (((2 << (Math.min(1, Math.abs(libcrashsdk2)))) > 4) && (libcrashsdk2 == 1400326));
      indicators = `${3 ^ layoutF.length}`;
   }
   for (let f = 0; f < 3; f++) {
      zhubox += `${layoutF.length | parseInt(`${iconqqh}`)}`;
   }
       let resultg = new Map([[String.fromCharCode(112,95,51,53,95,99,111,108,111,114,102,117,108,0),203], [String.fromCharCode(104,95,57,48,95,110,101,118,101,114,0),144]]);
       let penaltyshootnogoalm = 1.0;
       let stringst = [955, 971, 129];
         penaltyshootnogoalm -= parseFloat(`${stringst.length % (Math.max(9, parseInt(`${penaltyshootnogoalm}`)))}`);
         stringst.push(resultg.size | parseInt(`${penaltyshootnogoalm}`));
       let zhengpian2 = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,103,95,50,52,0);
       let update_3X = String.fromCharCode(97,99,113,117,105,114,101,100,95,105,95,55,54,0);
         stringst.push(stringst.length << (Math.min(Math.abs(1), 3)));
      if (!zhengpian2.includes(`${penaltyshootnogoalm}`)) {
         penaltyshootnogoalm *= parseFloat(`${resultg.size}`);
      }
         zhengpian2 += `${parseInt(`${penaltyshootnogoalm}`)}`;
      if (stringst.length <= 3) {
          let favoriter = new Map([[String.fromCharCode(116,114,105,103,103,101,114,101,100,95,101,95,52,52,0),198], [String.fromCharCode(97,118,100,101,118,105,99,101,95,107,95,49,57,0),45], [String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,103,95,57,55,0),616]]);
          let humidityy = String.fromCharCode(120,95,48,95,109,111,122,106,112,101,103,0);
          let k_positiond = String.fromCharCode(104,97,100,95,111,95,55,52,0);
         stringst = [parseInt(`${penaltyshootnogoalm}`)];
         favoriter[humidityy] = favoriter.size ^ humidityy.length;
         k_positiond = `${k_positiond.length - 1}`;
      }
      do {
         stringst.push(stringst.length);
         if (stringst.length == 1915942) {
            break;
         }
      } while ((3 <= (zhengpian2.length | stringst.length) && (stringst.length | 3) <= 5) && (stringst.length == 1915942));
      umengc %= Math.max(1, 2);
   while (!indicators.includes(`${away7.length}`)) {
      away7.push(away7.length);
      break;
   }
       let leftA = false;
       let qaaga = 3;
      if (!leftA) {
         leftA = qaaga == 53;
      }
          let iconscheduleL = String.fromCharCode(112,101,114,99,95,105,95,57,55,0);
         qaaga <<= Math.min(Math.abs(2 | iconscheduleL.length), 2);
      zhubox += "2";
      away7 = [3 + unselectedb.length];
   if ((layoutF.length >> (Math.min(zhubox.length, 4))) <= 4 || 4 <= (4 >> (Math.min(1, zhubox.length)))) {
       let iconlogoutI = 2.0;
       let libreactnativejni4 = 2.0;
       let predictionbannerE = new Map([[String.fromCharCode(100,112,114,105,110,116,95,51,95,49,50,0),591], [String.fromCharCode(105,97,100,115,116,95,51,95,57,0),759]]);
       let plusu = false;
      do {
          let embed4 = String.fromCharCode(122,95,49,55,95,114,101,118,111,107,101,0);
         plusu = !plusu;
         embed4 += `${embed4.length << (Math.min(Math.abs(2), 5))}`;
         if (plusu ? !plusu : plusu) {
            break;
         }
      } while ((1 == (predictionbannerE.size | 4) && predictionbannerE.size == 4) && (plusu ? !plusu : plusu));
          let typingZ = 2.0;
         iconlogoutI /= Math.max(4, parseFloat(`${predictionbannerE.size}`));
         typingZ /= Math.max(5, parseFloat(`${parseInt(`${typingZ}`)}`));
      while ((predictionbannerE.size >> (Math.min(Math.abs(5), 4))) <= 4 || 5 <= predictionbannerE.size) {
         plusu = 58.29 < libreactnativejni4;
         break;
      }
         libreactnativejni4 *= parseInt(`${iconlogoutI}`) * 3;
      for (let j = 0; j < 2; j++) {
         iconlogoutI *= parseFloat(`${parseInt(`${iconlogoutI}`) * 3}`);
      }
         plusu = iconlogoutI <= 30.56;
      for (let r = 0; r < 2; r++) {
          let filed = 0.0;
          let mapbufferJ = [652, 881];
          let penaltymatchiconh = String.fromCharCode(97,95,51,52,95,101,116,104,101,114,110,101,116,0);
          let fullU = 0.0;
         iconlogoutI += parseFloat(`${predictionbannerE.size}`);
         filed /= Math.max(4, parseInt(`${fullU}`));
         mapbufferJ = [penaltymatchiconh.length];
         penaltymatchiconh += `${parseInt(`${filed}`)}`;
         fullU *= mapbufferJ.length;
      }
      for (let w = 0; w < 2; w++) {
          let iconpipexpandD = 1.0;
         predictionbannerE[`${plusu}`] = (predictionbannerE.size - (plusu ? 2 : 3));
         iconpipexpandD /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${iconpipexpandD}`)), 2))}`), 4);
      }
         predictionbannerE = new Map([[`${iconlogoutI}`, parseInt(`${iconlogoutI}`) % 3]]);
      if (!plusu || 5.53 <= (2.16 * iconlogoutI)) {
         plusu = 52.24 < libreactnativejni4;
      }
      do {
         plusu = !plusu;
         if (plusu ? !plusu : plusu) {
            break;
         }
      } while ((!plusu) && (plusu ? !plusu : plusu));
       let settingB = new Map([[String.fromCharCode(119,95,51,56,95,114,101,116,114,105,101,115,0),377], [String.fromCharCode(115,116,117,100,105,111,95,109,95,53,54,0),561]]);
      layoutF = [3];
   }
    return false;
      zhubox += `${1 % (Math.max(4, away7.length))}`;
      umengc &= layoutF.length << (Math.min(3, Math.abs(parseInt(`${iconqqh}`))));
   if (5.10 >= (iconqqh / (Math.max(5.50, 7)))) {
      umengc *= indicators.length * parseInt(`${iconqqh}`);
   }
      umengc &= zhubox.length / (Math.max(9, unselectedb.length));
   do {
      indicators += `${2 ^ rocketj.length}`;
      if (1110054 == indicators.length) {
         break;
      }
   } while (((indicators.length | 2) < 4) && (1110054 == indicators.length));
   do {
       let privatechatbgo = 5.0;
         privatechatbgo -= parseInt(`${privatechatbgo}`) * 2;
         privatechatbgo /= Math.max(2 & parseInt(`${privatechatbgo}`), 5);
      do {
         privatechatbgo -= parseInt(`${privatechatbgo}`);
         if (privatechatbgo == 3572305.0) {
            break;
         }
      } while (((privatechatbgo / (Math.max(5, privatechatbgo))) <= 1.49) && (privatechatbgo == 3572305.0));
      away7 = [parseInt(`${iconqqh}`)];
      if (2546604 == away7.length) {
         break;
      }
   } while ((2546604 == away7.length) && (1 >= (away7.length >> (Math.min(Math.abs(1), 4))) || (away7.length >> (Math.min(indicators.length, 5))) >= 1));
   do {
       let fastforwardn = new Map([[String.fromCharCode(121,95,51,50,95,112,114,111,112,101,114,0),279], [String.fromCharCode(109,111,118,101,95,49,95,56,56,0),964], [String.fromCharCode(100,105,115,112,115,97,98,108,101,95,102,95,54,53,0),253]]);
       let expired8 = [String.fromCharCode(117,95,54,57,95,112,105,112,101,108,111,115,115,0), String.fromCharCode(107,95,56,49,95,115,105,109,112,108,101,116,97,103,0)];
       let rightS = 1.0;
       let profileactivef = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,95,97,95,57,53,0);
         expired8.push(expired8.length + parseInt(`${rightS}`));
      if ((5 << (Math.min(1, expired8.length))) >= 1) {
         expired8 = [1 << (Math.min(4, Math.abs(fastforwardn.size)))];
      }
         profileactivef = "3";
       let nextO = true;
         rightS -= parseFloat(`${1 % (Math.max(8, fastforwardn.size))}`);
      do {
         profileactivef += `${((nextO ? 4 : 5) ^ 1)}`;
         if (2641371 == profileactivef.length) {
            break;
         }
      } while ((2641371 == profileactivef.length) && ((4 * fastforwardn.size) > 1 && (profileactivef.length * 4) > 4));
          let libavutil4 = 4;
         expired8.push(fastforwardn.size);
         libavutil4 &= libavutil4 * libavutil4;
       let binit_1M = String.fromCharCode(114,101,108,102,117,110,99,95,97,95,55,53,0);
       let middleV = String.fromCharCode(117,95,56,57,95,100,111,119,110,108,111,97,100,97,98,108,101,0);
      while (expired8.length > middleV.length) {
         expired8 = [profileactivef.length];
         break;
      }
          let linkK = 4.0;
          let defaultprofilepicy = new Map([[String.fromCharCode(114,101,99,111,109,98,105,110,101,95,105,95,51,0),true ], [String.fromCharCode(115,112,105,108,108,95,118,95,57,0),true ]]);
         binit_1M = `${defaultprofilepicy.size | parseInt(`${rightS}`)}`;
         linkK *= parseInt(`${linkK}`) >> (Math.min(1, Math.abs(3)));
         defaultprofilepicy[`${linkK}`] = 2;
          let membershipC = true;
          let vnewinterstitialm = false;
          let subsH = true;
         middleV += `${((membershipC ? 5 : 2) | profileactivef.length)}`;
         membershipC = subsH || vnewinterstitialm;
         vnewinterstitialm = !subsH && !vnewinterstitialm;
      if ((1 % (Math.max(4, fastforwardn.size))) <= 1) {
         fastforwardn = new Map([[`${expired8.length}`, 3 - parseInt(`${rightS}`)]]);
      }
      indicators += `${rocketj.length >> (Math.min(Math.abs(3), 4))}`;
      if (1314098 == indicators.length) {
         break;
      }
   } while ((1314098 == indicators.length) && (3 >= indicators.length));
      indicators += `${3 ^ umengc}`;
   do {
       let volumeD = 0.0;
       let indexm = 1.0;
       let eabafadfadddbafeddddeeefeaafF = true;
         volumeD += 2 << (Math.min(Math.abs(parseInt(`${indexm}`)), 5));
      do {
         volumeD -= parseInt(`${volumeD}`) >> (Math.min(2, Math.abs(3)));
         if (volumeD == 607208.0) {
            break;
         }
      } while ((volumeD == indexm) && (volumeD == 607208.0));
          let smallorangemanO = String.fromCharCode(116,95,56,49,95,114,101,115,0);
          let liveP = true;
         indexm *= (parseFloat(`${(liveP ? 3 : 2) * parseInt(`${indexm}`)}`));
         smallorangemanO = `${2 + smallorangemanO.length}`;
         liveP = 36 >= smallorangemanO.length;
      for (let o = 0; o < 3; o++) {
         eabafadfadddbafeddddeeefeaafF = !eabafadfadddbafeddddeeefeaafF;
      }
         volumeD *= parseInt(`${volumeD}`) & 1;
      while ((1 * indexm) == 4.9) {
          let pathc = false;
          let castingl = 5.0;
          let header_ = 3;
          let checkboxj = String.fromCharCode(104,95,49,48,48,95,97,115,115,112,111,114,116,0);
          let bgvipxvodM = String.fromCharCode(120,95,56,49,95,105,100,101,110,116,105,116,105,101,115,0);
         volumeD -= checkboxj.length >> (Math.min(Math.abs(1), 3));
         pathc = 67 > (header_ + castingl);
         castingl /= Math.max(4, parseFloat(`${parseInt(`${castingl}`) ^ 2}`));
         header_ |= ((pathc ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${castingl}`)), 3)));
         checkboxj += `${header_}`;
         bgvipxvodM = `${((pathc ? 3 : 2) | 3)}`;
         break;
      }
         volumeD += parseInt(`${indexm}`);
         indexm /= Math.max(parseFloat(`${parseInt(`${indexm}`) % 2}`), 3);
      do {
         indexm += parseFloat(`${2 | parseInt(`${indexm}`)}`);
         if (3676410.0 == indexm) {
            break;
         }
      } while ((3676410.0 == indexm) && (indexm <= 3.61 || (3.61 - indexm) <= 4.32));
      iconqqh *= ((eabafadfadddbafeddddeeefeaafF ? 5 : 4) ^ 2);
      if (iconqqh == 141697.0) {
         break;
      }
   } while ((!zhubox.includes(`${iconqqh}`)) && (iconqqh == 141697.0));

  };

  const onLayout = e => {
       let rewindO = 2.0;
    let invites = new Map([[String.fromCharCode(99,97,118,108,99,95,48,95,49,54,0),315], [String.fromCharCode(98,95,55,48,95,105,110,112,108,105,99,105,116,101,108,121,0),564]]);
    let defaultfootballbgk = new Map([[String.fromCharCode(105,95,56,52,95,115,104,105,102,116,105,110,103,115,0),558], [String.fromCharCode(99,114,101,97,116,101,95,104,95,49,57,0),973]]);
    let blackx = String.fromCharCode(112,111,116,105,115,105,111,110,95,49,95,55,0);
    let editU = String.fromCharCode(105,110,116,114,105,110,95,106,95,56,53,0);
    let typesV = String.fromCharCode(110,117,109,101,114,97,108,95,122,95,53,48,0);
    let basketballtrophyZ = 4.0;
    let zhubon = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,115,95,50,95,55,54,0);
    let expiredW = [String.fromCharCode(110,111,116,97,116,105,111,110,95,98,95,56,50,0), String.fromCharCode(121,95,57,48,95,118,97,108,115,0), String.fromCharCode(117,95,57,49,95,114,111,117,110,100,101,100,0)];
    let sigmobw = 1.0;
    let libavdeviceB = new Map([[String.fromCharCode(103,95,51,53,95,112,114,101,0),false ], [String.fromCharCode(119,95,52,55,95,97,117,116,111,109,97,116,105,99,0),true ], [String.fromCharCode(99,114,101,97,116,101,100,95,109,95,49,48,48,0),false ]]);
      invites[zhubon] = 1;
      defaultfootballbgk[editU] = (editU == String.fromCharCode(114,0) ? typesV.length : editU.length);
   do {
      zhubon = `${typesV.length}`;
      if (2133069 == zhubon.length) {
         break;
      }
   } while ((editU == zhubon) && (2133069 == zhubon.length));
   if (!editU.endsWith(`${rewindO}`)) {
       let progressT = new Map([[String.fromCharCode(105,95,54,54,95,115,104,97,0),979], [String.fromCharCode(109,98,101,100,103,101,95,121,95,51,55,0),343], [String.fromCharCode(100,106,112,101,103,95,113,95,56,56,0),844]]);
       let guide2 = [428, 469, 954];
       let stringsC = 1.0;
       let stationsx = String.fromCharCode(118,95,56,53,95,99,111,110,116,101,110,116,115,0);
      if (5 > (stationsx.length | 1)) {
          let indexl = String.fromCharCode(115,104,111,116,95,120,95,53,0);
          let pauseb = String.fromCharCode(104,95,56,54,95,97,115,112,101,99,116,0);
          let mbbanner0 = String.fromCharCode(114,95,53,57,95,99,102,102,116,98,0);
          let libavdevicei = [601, 46];
         progressT = new Map([[indexl, stationsx.length]]);
         indexl = `${mbbanner0.length * 1}`;
         pauseb = `${(pauseb == String.fromCharCode(88,0) ? pauseb.length : mbbanner0.length)}`;
         libavdevicei.push((String.fromCharCode(100,0) == mbbanner0 ? libavdevicei.length : mbbanner0.length));
      }
         stationsx = `${stationsx.length}`;
         stringsC += parseFloat(`${stationsx.length}`);
      do {
         guide2.push(1);
         if (3003190 == guide2.length) {
            break;
         }
      } while ((3003190 == guide2.length) && (progressT.size <= guide2.length));
       let gifgoalbgE = String.fromCharCode(99,95,50,48,95,100,101,99,114,121,112,116,105,111,110,0);
       let renderv = String.fromCharCode(99,102,101,110,99,95,103,95,56,52,0);
      while ((stringsC / 1.12) < 4.59) {
         stringsC *= parseFloat(`${renderv.length}`);
         break;
      }
          let dataW = String.fromCharCode(102,111,114,109,97,116,116,101,100,95,119,95,50,55,0);
          let matchesV = String.fromCharCode(117,95,57,50,95,99,111,108,111,99,97,116,101,100,0);
          let controls1 = 2;
         guide2 = [matchesV.length];
         dataW += `${(String.fromCharCode(70,0) == dataW ? controls1 : dataW.length)}`;
         matchesV = `${2 + dataW.length}`;
         controls1 %= Math.max(dataW.length - controls1, 4);
      if (5 >= (stationsx.length ^ 4)) {
         stringsC *= parseFloat(`${guide2.length / (Math.max(3, 3))}`);
      }
      do {
          let time_8Q = String.fromCharCode(108,95,51,49,95,115,116,111,114,101,120,0);
          let hometeamfieldt = 0.0;
          let iconsaveimageQ = new Map([[String.fromCharCode(102,100,99,116,120,95,116,95,55,0),true ], [String.fromCharCode(112,97,114,116,115,95,105,95,52,48,0),false ]]);
          let frame_azN = 0.0;
         stringsC += parseFloat(`${2}`);
         time_8Q = `${parseInt(`${frame_azN}`) * iconsaveimageQ.size}`;
         hometeamfieldt += time_8Q.length;
         iconsaveimageQ = new Map([[`${iconsaveimageQ.size}`, time_8Q.length]]);
         frame_azN /= Math.max(3 + iconsaveimageQ.size, 2);
         if (4394149.0 == stringsC) {
            break;
         }
      } while ((2.64 <= (4.3 + stringsC) || 4.67 <= (4.3 + stringsC)) && (4394149.0 == stringsC));
      while (gifgoalbgE.length <= progressT.size) {
          let libnmsJ = 0;
         gifgoalbgE = `${guide2.length >> (Math.min(Math.abs(2), 4))}`;
         libnmsJ ^= 2 & libnmsJ;
         break;
      }
          let homeactiveV = String.fromCharCode(120,95,55,52,95,114,101,113,117,101,115,116,0);
          let mountingH = 0.0;
         guide2.push(gifgoalbgE.length);
         homeactiveV += `${parseInt(`${mountingH}`) % 2}`;
         mountingH += parseFloat(`${2}`);
       let nativeP = true;
      rewindO *= parseFloat(`${stationsx.length}`);
   }
      editU = `${1 * invites.size}`;
      rewindO += parseFloat(`${3 * defaultfootballbgk.size}`);
      rewindO /= Math.max(parseFloat(`${blackx.length * editU.length}`), 2);

    

      defaultfootballbgk = new Map([[editU, editU.length / 2]]);
   if (typesV.length >= zhubon.length) {
      zhubon = `${parseInt(`${basketballtrophyZ}`) & 2}`;
   }
       let phone6 = [115, 941, 800];
       let sportsI = 0;
      do {
          let friendsL = 3;
          let eighteend = String.fromCharCode(105,102,97,115,116,95,102,95,53,57,0);
          let heartn = String.fromCharCode(103,101,116,112,97,100,100,114,115,95,115,95,57,52,0);
          let vipsportP = String.fromCharCode(99,111,100,101,98,111,111,107,95,99,95,51,54,0);
          let temp5 = String.fromCharCode(100,116,115,95,103,95,54,50,0);
         phone6 = [1 >> (Math.min(2, Math.abs(friendsL)))];
         friendsL += heartn.length;
         eighteend = `${heartn.length - 1}`;
         vipsportP += "1";
         temp5 += `${vipsportP.length / (Math.max(7, heartn.length))}`;
         if (4522629 == phone6.length) {
            break;
         }
      } while ((4522629 == phone6.length) && ((sportsI % (Math.max(2, phone6.length))) > 1 || (sportsI % (Math.max(phone6.length, 1))) > 1));
      while (phone6.length >= 2) {
         sportsI -= phone6.length - 2;
         break;
      }
       let logouserJ = 1.0;
       let orangedownarrowq = 4.0;
       let libmapbufferjni1 = String.fromCharCode(102,95,53,54,95,97,112,112,114,111,120,0);
       let short_fnI = String.fromCharCode(117,110,99,108,105,112,112,101,100,95,55,95,52,53,0);
      while (1.22 >= (5.100 / (Math.max(8, logouserJ)))) {
         sportsI <<= Math.min(4, phone6.length);
         break;
      }
      do {
         logouserJ /= Math.max(short_fnI.length, 4);
         if (2827992.0 == logouserJ) {
            break;
         }
      } while ((2827992.0 == logouserJ) && (1.18 > logouserJ));
      blackx += "3";
   for (let s = 0; s < 3; s++) {
      typesV += `${zhubon.length ^ editU.length}`;
   }
   for (let l = 0; l < 2; l++) {
      zhubon += `${invites.size}`;
   }
      basketballtrophyZ *= parseFloat(`${zhubon.length % (Math.max(3, 7))}`);
   while (5 <= editU.length) {
      editU = `${parseInt(`${rewindO}`) % (Math.max(typesV.length, 7))}`;
      break;
   }
    

       let annerw = [153, 364];
       let checkbox9 = [339, 952];
      for (let f = 0; f < 1; f++) {
         checkbox9 = [annerw.length];
      }
          let defaultlogon = 5.0;
         annerw = [checkbox9.length];
         defaultlogon -= parseInt(`${defaultlogon}`);
      do {
         annerw.push(annerw.length | checkbox9.length);
         if (1199826 == annerw.length) {
            break;
         }
      } while (((checkbox9.length | annerw.length) > 4 || (annerw.length | 4) > 1) && (1199826 == annerw.length));
      do {
         annerw = [2 | annerw.length];
         if (872489 == annerw.length) {
            break;
         }
      } while (((checkbox9.length / (Math.max(2, annerw.length))) < 5 || 5 < (annerw.length / (Math.max(checkbox9.length, 10)))) && (872489 == annerw.length));
      do {
          let popupM = 3.0;
          let successX = false;
          let private_tze = String.fromCharCode(119,111,114,115,116,95,49,95,55,52,0);
          let bingI = 1.0;
          let homeG = new Map([[String.fromCharCode(100,95,57,95,109,111,110,107,101,121,115,97,117,100,105,111,0),String.fromCharCode(111,95,54,54,95,99,114,111,115,115,112,111,115,116,0)], [String.fromCharCode(104,97,108,100,99,108,117,116,95,53,95,54,49,0),String.fromCharCode(105,95,49,48,48,95,115,117,98,112,111,105,110,116,0)]]);
         checkbox9.push(parseInt(`${bingI}`));
         popupM -= parseFloat(`${2 / (Math.max(1, homeG.size))}`);
         successX = successX || private_tze.length > 6;
         private_tze += `${2 * parseInt(`${popupM}`)}`;
         bingI /= Math.max(parseFloat(`${private_tze.length + homeG.size}`), 4);
         if (checkbox9.length == 1400515) {
            break;
         }
      } while ((checkbox9.length == 1400515) && (!annerw.includes(checkbox9.length)));
         annerw.push(checkbox9.length >> (Math.min(annerw.length, 1)));
      rewindO += parseFloat(`${1 * annerw.length}`);
      basketballtrophyZ -= parseFloat(`${2}`);
   while ((1 >> (Math.min(4, blackx.length))) <= 2) {
       let imagesU = [String.fromCharCode(112,114,105,109,97,114,105,108,121,95,111,95,50,0), String.fromCharCode(116,95,57,50,95,97,110,97,108,121,116,105,99,115,0), String.fromCharCode(111,95,51,55,95,112,115,104,0)];
       let settingsE = String.fromCharCode(114,97,110,107,115,95,120,95,50,55,0);
       let overi = [164, 616];
       let paginationi = 4;
       let stringe = [677, 148];
       let livesharex = false;
       let securitym = false;
         overi = [(settingsE == String.fromCharCode(108,0) ? paginationi : settingsE.length)];
         paginationi -= overi.length;
         imagesU.push((3 ^ (securitym ? 5 : 5)));
      do {
          let whitetickd = 2.0;
          let defaultfootballbgu = new Map([[String.fromCharCode(100,101,99,111,109,112,111,115,101,105,95,113,95,51,52,0),true ], [String.fromCharCode(111,103,103,108,101,95,55,95,52,56,0),true ]]);
         stringe.push(((livesharex ? 5 : 1) << (Math.min(Math.abs(2), 2))));
         whitetickd /= Math.max(defaultfootballbgu.size, 3);
         defaultfootballbgu[`${whitetickd}`] = 3 & parseInt(`${whitetickd}`);
         if (3050234 == stringe.length) {
            break;
         }
      } while ((3050234 == stringe.length) && ((1 & stringe.length) == 2 || securitym));
          let smallorangemant = 5.0;
          let classeso = String.fromCharCode(116,105,101,114,115,95,112,95,50,49,0);
          let shrink1 = String.fromCharCode(111,95,51,55,95,105,115,116,111,103,114,97,109,0);
         paginationi >>= Math.min(2, Math.abs(1 * overi.length));
         smallorangemant += parseFloat(`${1}`);
         classeso = `${parseInt(`${smallorangemant}`)}`;
         shrink1 = `${shrink1.length}`;
      while (!livesharex) {
         overi = [2 % (Math.max(4, settingsE.length))];
         break;
      }
      for (let q = 0; q < 1; q++) {
         securitym = imagesU.length <= paginationi;
      }
          let invite3 = 2.0;
          let gradleG = true;
         paginationi |= 3 << (Math.min(2, stringe.length));
         invite3 *= parseInt(`${invite3}`) - 2;
         gradleG = invite3 <= 11.94 && !gradleG;
         settingsE = `${((livesharex ? 2 : 1))}`;
         livesharex = securitym;
       let libreactnativejnin = String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,114,95,55,0);
       let iconclosewhitebgg = String.fromCharCode(114,95,52,57,95,97,108,108,111,119,101,100,0);
         libreactnativejnin = `${iconclosewhitebgg.length}`;
         overi.push(iconclosewhitebgg.length / (Math.max(7, overi.length)));
          let default_3J = [978, 643];
          let greyN = true;
          let floatery = 1;
         securitym = livesharex;
         default_3J.push(1 & default_3J.length);
         greyN = !greyN;
         floatery %= Math.max(1, 3);
      basketballtrophyZ -= parseFloat(`${settingsE.length}`);
      break;
   }
   while (blackx.length <= 4) {
       let runtimeschedulerg = String.fromCharCode(105,112,97,100,95,111,95,53,56,0);
       let libcxxcomponentse = true;
       let gifgoalbgx = String.fromCharCode(101,95,50,57,95,101,114,114,111,114,99,98,0);
       let build_ = String.fromCharCode(102,114,111,109,95,56,95,51,56,0);
       let iconmoreD = String.fromCharCode(109,95,49,56,95,116,101,120,116,109,111,118,115,117,98,0);
       let libflippert = String.fromCharCode(112,95,55,52,95,119,115,118,113,97,0);
       let profile5 = String.fromCharCode(112,95,56,48,95,99,111,110,118,101,114,115,105,111,110,115,0);
      if (gifgoalbgx.length <= 5) {
         build_ = `${iconmoreD.length}`;
      }
       let iconcalendarJ = 2.0;
       let libavutilZ = 2.0;
      for (let r = 0; r < 1; r++) {
          let typesD = true;
          let indicatorC = [479, 390, 448];
          let layout2 = String.fromCharCode(117,109,98,114,101,108,108,97,95,114,95,53,54,0);
         profile5 = `${((libcxxcomponentse ? 1 : 3))}`;
         typesD = indicatorC.length == 71;
         indicatorC = [1 << (Math.min(1, layout2.length))];
         layout2 = `${((typesD ? 5 : 1) ^ 2)}`;
      }
       let tumbnail5 = String.fromCharCode(118,95,56,55,95,107,101,121,115,116,114,101,97,109,0);
       let mintegral9 = String.fromCharCode(107,105,99,107,101,114,95,56,95,49,54,0);
      do {
         build_ = `${parseInt(`${iconcalendarJ}`) - profile5.length}`;
         if (String.fromCharCode(109,107,101,104,50,0) == build_) {
            break;
         }
      } while ((libflippert.length <= 3) && (String.fromCharCode(109,107,101,104,50,0) == build_));
         tumbnail5 += "1";
       let settingW = new Map([[String.fromCharCode(120,95,51,50,95,109,105,115,117,115,101,0),412], [String.fromCharCode(99,95,54,0),196]]);
      basketballtrophyZ += (parseFloat(`${parseInt(`${rewindO}`) | (libcxxcomponentse ? 5 : 2)}`));
      runtimeschedulerg += `${runtimeschedulerg.length}`;
      break;
   }
      blackx = `${typesV.length + 3}`;
   do {
      editU = `${parseInt(`${rewindO}`) | 2}`;
      if (editU.length == 4788968) {
         break;
      }
   } while ((typesV != editU) && (editU.length == 4788968));
   for (let s = 0; s < 2; s++) {
       let arrowrightwithtailr = String.fromCharCode(113,95,51,48,95,114,101,97,108,108,111,99,0);
       let iconschedule6 = String.fromCharCode(119,95,57,54,95,99,111,109,109,101,110,116,115,0);
      if (iconschedule6.includes(arrowrightwithtailr)) {
         iconschedule6 = `${iconschedule6.length}`;
      }
          let dycreatorq = new Map([[String.fromCharCode(115,110,97,112,115,104,111,116,95,100,95,56,55,0),994], [String.fromCharCode(115,116,105,112,112,101,100,95,97,95,54,54,0),69], [String.fromCharCode(98,111,116,116,111,109,95,113,95,52,49,0),83]]);
          let u_managerj = 2.0;
         iconschedule6 = `${arrowrightwithtailr.length * 1}`;
         dycreatorq[`${u_managerj}`] = 1;
         u_managerj -= dycreatorq.size % 3;
       let iconeditO = 0.0;
       let androids = 2.0;
         androids -= parseFloat(`${parseInt(`${iconeditO}`) + iconschedule6.length}`);
      while (4.96 >= (androids + iconeditO) || (4.96 + iconeditO) >= 3.56) {
         iconeditO -= parseFloat(`${parseInt(`${androids}`) % 3}`);
         break;
      }
       let selectedm = 3.0;
       let overz = 5.0;
      basketballtrophyZ *= parseFloat(`${libavdeviceB.size / (Math.max(zhubon.length, 1))}`);
   }
    setWidth(rightPanel.width);
      invites[`${sigmobw}`] = zhubon.length ^ parseInt(`${sigmobw}`);
   for (let b = 0; b < 3; b++) {
      editU += `${zhubon.length + 3}`;
   }
      expiredW.push(3 + parseInt(`${sigmobw}`));
      defaultfootballbgk[editU] = (editU == String.fromCharCode(73,0) ? editU.length : parseInt(`${rewindO}`));
   if (3 >= (invites.size + typesV.length)) {
       let libswresample3 = String.fromCharCode(115,117,98,105,116,101,109,115,95,120,95,49,48,48,0);
       let optionsQ = 5;
          let sentryM = 4.0;
          let v_image4 = String.fromCharCode(108,95,49,52,95,102,97,114,109,101,0);
         libswresample3 = `${optionsQ}`;
         sentryM -= parseFloat(`${1 - parseInt(`${sentryM}`)}`);
         v_image4 = `${v_image4.length}`;
       let build1 = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,49,95,51,49,0);
       let refreshborderlessU = String.fromCharCode(111,111,108,98,97,114,95,48,95,55,0);
       let mbbidS = 3.0;
      do {
         build1 = `${2 | libswresample3.length}`;
         if (String.fromCharCode(104,118,48,50,113,110,122,111,49,0) == build1) {
            break;
         }
      } while ((String.fromCharCode(104,118,48,50,113,110,122,111,49,0) == build1) && (!refreshborderlessU.endsWith(build1)));
         libswresample3 += `${libswresample3.length >> (Math.min(Math.abs(1), 1))}`;
      while (refreshborderlessU != String.fromCharCode(107,0)) {
         libswresample3 += `${(String.fromCharCode(109,0) == refreshborderlessU ? build1.length : refreshborderlessU.length)}`;
         break;
      }
      typesV = `${optionsQ ^ parseInt(`${basketballtrophyZ}`)}`;
   }
      blackx = `${3 << (Math.min(2, typesV.length))}`;
      defaultfootballbgk[`${sigmobw}`] = invites.size >> (Math.min(3, Math.abs(parseInt(`${sigmobw}`))));

  };

  if (isFullScreen) {
       let senda = true;
    let halffieldimager = [255, 259, 686];
    let agreementA = String.fromCharCode(110,95,57,55,95,104,111,115,116,110,97,109,101,0);
    let yellowh = String.fromCharCode(97,108,116,105,118,101,99,95,118,95,54,50,0);
    let schedulef = 0.0;
    let recommendationY = new Map([[String.fromCharCode(115,97,109,112,108,101,102,109,116,95,54,95,50,52,0),String.fromCharCode(114,101,102,101,114,95,103,95,49,52,0)], [String.fromCharCode(101,120,99,108,117,100,105,110,103,95,121,95,50,0),String.fromCharCode(122,95,54,52,95,104,97,110,100,108,101,0)], [String.fromCharCode(116,101,115,115,101,108,97,116,101,95,115,95,57,54,0),String.fromCharCode(110,95,49,53,95,99,111,97,108,101,115,99,101,0)]]);
    let reminderZ = 0.0;
    let suggestiono = 4.0;
    let imagemanagerV = new Map([[String.fromCharCode(117,114,105,95,48,95,57,51,0),false ], [String.fromCharCode(100,105,118,105,115,111,114,95,117,95,54,50,0),false ]]);
    let runtimeschedulerv = String.fromCharCode(109,101,109,122,101,114,111,95,51,95,49,51,0);
    let anythinkG = 3;
    let singapore4 = 2;
      imagemanagerV = new Map([[`${halffieldimager.length}`, 2 / (Math.max(9, parseInt(`${reminderZ}`)))]]);

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View
          style={[
            VideoPlayerstyles.controls.right,
            {
              opacity: opacityAni,
              right: rightAni,
            },
          ]}>
          <SafeAreaView
            style={[
              VideoPlayerstyles.controls.rightControlGroup,
              {
                width: rightPanel.width,
              },
            ]}>
            <View style={VideoPlayerstyles.controls.rightControlGroupTitle}>
              <Text
                style={[
                  VideoPlayerstyles.controls.text,
                  {
                    fontSize: 18,
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                  },
                ]}>
                {rightPanel.title}
              </Text>
            </View>
            <View style={{flex: 1}} onLayout={e => onLayout(e)}>
              {rightPanel.type === PanelType.Switch ? (
                <SwitchSourcePanel />
              ) : null}
              {rightPanel.type === PanelType.Recommend ? (
                <RecommendPanel />
              ) : null}
              {rightPanel.type === PanelType.Stat ? (
                <LiveStatPanel width={width} />
              ) : null}
            </View>
          </SafeAreaView>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
      runtimeschedulerv = `${imagemanagerV.size}`;

  }
};
