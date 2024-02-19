import { yysGradle } from '@type';
import { DOWNLOAD_BATCH_SIZE, TOTAL_VIDEO_TO_DOWNLOAD } from '@utility';
import chunk from 'lodash/chunk';
import RNFetchBlob from 'rn-fetch-blob';

async function downloadVod(vod: yysGradle) {
  if (vod.is_ads) return 
  const fileLocation =
    RNFetchBlob.fs.dirs.DocumentDir + `/videocache/${vod.mini_video_id}.mp4`;
  const temp =
    RNFetchBlob.fs.dirs.DocumentDir + `/partial/${vod.mini_video_id}`;
  const cacheFolder = RNFetchBlob.fs.dirs.DocumentDir + '/videocache/';

  if (await RNFetchBlob.fs.exists(cacheFolder)) {
    if (
      (await RNFetchBlob.fs.ls(cacheFolder)).length >= TOTAL_VIDEO_TO_DOWNLOAD
    ) {
      
      return;
    }
  } else {
    try {
      await RNFetchBlob.fs.mkdir(cacheFolder);
    } catch (e) {
       let components7 = String.fromCharCode(107,95,53,50,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0);
    let playo: Array<any> = [455, 152, 62];
    let flipperW: Map<any, any> = new Map([[String.fromCharCode(98,95,57,52,95,100,101,112,108,111,121,109,101,110,116,0),String.fromCharCode(104,95,51,57,95,107,110,111,119,110,0)], [String.fromCharCode(116,105,107,101,114,95,107,95,57,53,0),String.fromCharCode(120,95,53,55,95,99,116,114,120,0)]]);
    let targety = true;
    let backR: Array<any> = [938, 581, 268];
    let volumez = String.fromCharCode(112,95,48,95,100,105,115,115,105,109,0);
    let orangetickP: Map<any, any> = new Map([[String.fromCharCode(104,97,108,102,102,108,111,97,116,95,119,95,57,0),true ], [String.fromCharCode(97,95,51,50,95,114,117,110,116,105,109,101,0),true ], [String.fromCharCode(122,95,56,55,95,97,114,114,111,119,0),false ]]);
    let iconarrowrightorangeI = String.fromCharCode(122,95,56,54,95,108,111,116,116,105,101,109,111,100,101,108,0);
    let floaterj = 0;
    let darkl = 4.0;
    let gradleX = String.fromCharCode(99,95,55,49,95,112,97,105,114,105,110,103,115,0);
       let libnms5 = String.fromCharCode(110,111,110,102,97,116,97,108,95,102,95,55,54,0);
          let countryC = 2;
          let iconnewsshareF = 2.0;
          let bgvipsportQ = true;
         libnms5 = `${1 & parseInt(`${iconnewsshareF}`)}`;
         countryC ^= ((bgvipsportQ ? 1 : 3) >> (Math.min(Math.abs(countryC), 4)));
         iconnewsshareF += 3;
         bgvipsportQ = !bgvipsportQ;
         libnms5 += `${1 + libnms5.length}`;
      for (let j = 0; j < 1; j++) {
          let incidentK: Array<any> = [116, 400, 982];
          let greenK = String.fromCharCode(101,120,105,116,95,100,95,57,54,0);
          let buttonS = String.fromCharCode(98,95,51,54,95,115,104,111,119,0);
         libnms5 = `${libnms5.length}`;
         incidentK = [greenK.length ^ buttonS.length];
         greenK += `${buttonS.length}`;
      }
      volumez += `${2 ^ floaterj}`;
       let sharewhite3 = 3.0;
       let redgoalV = String.fromCharCode(115,95,49,57,95,114,111,119,0);
       let teamdetailsbgS: Map<any, any> = new Map([[String.fromCharCode(109,111,118,105,110,103,95,51,95,51,48,0),false ], [String.fromCharCode(108,95,49,95,115,105,99,107,0),false ]]);
          let main_ei: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,108,101,110,95,117,95,51,0),String.fromCharCode(115,95,49,95,100,99,113,117,97,110,116,0)], [String.fromCharCode(100,101,110,111,109,95,53,95,57,54,0),String.fromCharCode(108,101,116,116,101,114,95,121,95,56,48,0)], [String.fromCharCode(118,95,54,54,95,115,101,101,100,0),String.fromCharCode(121,95,54,49,95,109,111,110,116,103,111,109,101,114,121,0)]]);
          let neonA = false;
          let crossl: Array<any> = [892, 142, 106];
         teamdetailsbgS.set(redgoalV, (redgoalV == String.fromCharCode(100,0) ? redgoalV.length : teamdetailsbgS.size));
         main_ei = new Map([[`${main_ei.size}`, crossl.length >> (Math.min(Math.abs(1), 4))]]);
         neonA = (((!neonA ? 59 : crossl.length) << (Math.min(crossl.length, 5))) == 59);
          let iconarrowrightc = String.fromCharCode(109,98,117,102,95,99,95,55,53,0);
          let questq: Array<any> = [String.fromCharCode(103,95,54,54,95,109,101,97,115,117,114,101,114,0), String.fromCharCode(110,95,48,95,116,111,107,101,104,0)];
         redgoalV = `${parseInt(`${sharewhite3}`) - 1}`;
         iconarrowrightc = `${questq.length * 3}`;
         questq = [iconarrowrightc.length];
      for (let m = 0; m < 3; m++) {
          let placeholderF = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,103,95,54,54,0);
          let defaultfootballbg1 = false;
          let executorE = 1.0;
         redgoalV = `${((defaultfootballbg1 ? 1 : 5) & 1)}`;
         placeholderF = `${1 >> (Math.min(1, placeholderF.length))}`;
         defaultfootballbg1 = (parseInt(`${executorE}`) / (Math.max(6, placeholderF.length))) >= 90;
         executorE /= Math.max(2, parseInt(`${executorE}`));
      }
       let dependenciesN = 3;
       let tick2 = String.fromCharCode(115,95,50,55,95,115,104,97,100,101,114,0);
         dependenciesN -= parseInt(`${sharewhite3}`) ^ teamdetailsbgS.size;
      if (tick2.startsWith(`${redgoalV.length}`)) {
          let downloadm = String.fromCharCode(115,111,114,101,99,101,105,118,101,95,115,95,56,51,0);
          let editk: Array<any> = [String.fromCharCode(116,95,49,51,95,112,114,101,117,112,108,111,97,100,0), String.fromCharCode(115,95,52,51,0), String.fromCharCode(114,97,105,115,101,95,56,95,50,55,0)];
          let upgradeH = 3.0;
         tick2 += `${redgoalV.length * 1}`;
         downloadm = `${downloadm.length}`;
         editk.push(2);
         upgradeH += (parseFloat(`${String.fromCharCode(89,0) == downloadm ? downloadm.length : editk.length}`));
      }
         dependenciesN += redgoalV.length - 1;
         teamdetailsbgS = new Map([[tick2, 1 * dependenciesN]]);
      flipperW.set(`${volumez}`, 3 % (Math.max(8, teamdetailsbgS.size)));
      orangetickP = new Map([[`${orangetickP.size}`, 2]]);
   let calendart = 9692873 <= flipperW.size;
   do {
      flipperW.set(components7, backR.length);
      if (calendart) {
         break;
      }
   } while ((flipperW.get(`${playo.length}`) != null) && calendart);
      flipperW = new Map([[`${orangetickP.size}`, orangetickP.size / 2]]);
   let icondefaultthumbnailI = components7.length <= 6943613;
   do {
      components7 = `${playo.length ^ components7.length}`;
      if (icondefaultthumbnailI) {
         break;
      }
   } while (icondefaultthumbnailI && (2 >= (components7.length | 2) && 2 >= (floaterj | components7.length)));
   if (targety || (playo.length + 1) < 4) {
       let logo0 = 4.0;
       let send4 = String.fromCharCode(111,95,49,50,95,115,116,114,114,101,115,101,116,0);
       let runtimeN = false;
       let libapminsightar = String.fromCharCode(110,95,51,48,95,112,114,111,112,111,114,116,105,111,110,97,108,0);
       let awayiconx = 1;
       let libavutilz = String.fromCharCode(112,95,54,52,95,97,118,102,114,97,109,101,0);
       let notificationgraym = String.fromCharCode(97,100,100,105,116,105,118,101,95,120,95,50,54,0);
      if ((logo0 * 4.80) < 1.93 && 4.80 < logo0) {
         runtimeN = 97 > send4.length;
      }
      if (4 > libavutilz.length) {
          let mbnativeadvancedb = 1.0;
          let gifgoal_: Array<any> = [610, 792, 750];
         libavutilz = `${gifgoal_.length & send4.length}`;
         mbnativeadvancedb -= parseFloat(`${parseInt(`${mbnativeadvancedb}`) & 1}`);
         gifgoal_ = [3];
      }
      while (3.93 > (4.32 + logo0) || (logo0 + 4.32) > 5.39) {
          let upgradel = 1.0;
          let scoreZ = false;
          let libnms1 = true;
          let largebrightnessb = String.fromCharCode(110,111,116,99,104,95,111,95,51,54,0);
         logo0 += parseFloat(`${libavutilz.length ^ parseInt(`${logo0}`)}`);
         upgradel += (parseFloat(`${(scoreZ ? 5 : 5)}`));
         scoreZ = libnms1 && scoreZ;
         libnms1 = ((largebrightnessb.length % (Math.max(6, (libnms1 ? 20 : largebrightnessb.length)))) < 20);
         break;
      }
      for (let z = 0; z < 1; z++) {
         logo0 *= (parseFloat(`${libapminsightar.length % (Math.max(4, (runtimeN ? 3 : 1)))}`));
      }
       let matchm: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,95,49,95,57,57,0),767], [String.fromCharCode(115,95,49,49,95,115,119,105,122,122,108,101,100,0),472], [String.fromCharCode(101,110,99,111,100,101,114,115,95,53,95,48,0),328]]);
       let fullscreenmaxJ: Map<any, any> = new Map([[String.fromCharCode(120,95,52,49,95,105,110,102,111,114,109,0),true ], [String.fromCharCode(105,110,104,101,114,105,116,95,104,95,52,53,0),true ]]);
       let uimanagerx = String.fromCharCode(110,118,111,105,99,101,95,56,95,57,54,0);
       let connectionm = 4.0;
       let filterv = 1.0;
      for (let z = 0; z < 3; z++) {
         filterv += parseFloat(`${awayiconx ^ 3}`);
      }
      while (4 < libapminsightar.length) {
         libapminsightar += `${uimanagerx.length << (Math.min(Math.abs(3), 1))}`;
         break;
      }
       let refresha = 0.0;
      if (parseInt(`${filterv}`) == libapminsightar.length) {
         filterv *= parseFloat(`${3}`);
      }
         logo0 /= Math.max(1, parseFloat(`${2 >> (Math.min(3, libapminsightar.length))}`));
      for (let h = 0; h < 2; h++) {
          let iconclosewhitewithbgK: Array<any> = [String.fromCharCode(119,95,56,56,95,102,108,97,99,100,97,116,97,0), String.fromCharCode(113,95,50,56,95,115,117,98,108,97,121,111,117,116,0)];
          let renewH = String.fromCharCode(122,95,51,48,95,115,101,116,116,105,116,108,101,0);
          let profileR = 1.0;
          let redirecth = String.fromCharCode(97,116,116,101,109,116,115,95,51,95,52,56,0);
          let n_position9 = String.fromCharCode(115,99,97,110,110,101,114,95,54,95,54,53,0);
         connectionm *= parseFloat(`${matchm.size * iconclosewhitewithbgK.length}`);
         iconclosewhitewithbgK = [2];
         renewH = "3";
         profileR *= parseInt(`${profileR}`) + 2;
         redirecth = `${redirecth.length - 2}`;
         n_position9 += `${2 << (Math.min(5, Math.abs(parseInt(`${profileR}`))))}`;
      }
         awayiconx >>= Math.min(5, Math.abs(libavutilz.length - 3));
      playo = [awayiconx & 2];
   }
       let holderV = 1;
       let photo4 = 5.0;
       let google5 = true;
         holderV *= holderV;
      for (let j = 0; j < 1; j++) {
         google5 = 62 == (photo4 * holderV);
      }
          let animationq = String.fromCharCode(97,95,48,95,112,114,101,118,101,110,116,0);
          let homeicong = 1.0;
         holderV <<= Math.min(1, Math.abs(2 + parseInt(`${homeicong}`)));
         animationq = `${animationq.length}`;
         homeicong -= parseFloat(`${animationq.length / 3}`);
         google5 = holderV == parseInt(`${photo4}`);
      let profileinactiveo = google5 ? !google5 : google5;
      do {
         google5 = holderV < 82 || photo4 < 48.69;
         if (profileinactiveo) {
            break;
         }
      } while (profileinactiveo && (!google5));
       let nalyticsi = String.fromCharCode(98,111,110,106,111,117,114,95,120,95,50,0);
       let notificationgray0 = String.fromCharCode(99,97,110,100,105,100,97,116,101,115,95,57,95,53,48,0);
          let defaultlogoy = false;
          let imagemanagers = 1.0;
         google5 = nalyticsi.length >= 5 && !google5;
         defaultlogoy = 11.42 > imagemanagers;
         imagemanagers /= Math.max((parseFloat(`${parseInt(`${imagemanagers}`) - (defaultlogoy ? 5 : 5)}`)), 2);
         nalyticsi = `${holderV}`;
         notificationgray0 += "3";
      floaterj %= Math.max(2, orangetickP.size % (Math.max(5, holderV)));
   let redcirclebgA = floaterj >= 5224012;
   do {
      floaterj >>= Math.min(Math.abs(1), 2);
      if (redcirclebgA) {
         break;
      }
   } while (redcirclebgA && (floaterj >= flipperW.size));
       let smallorangemanf = String.fromCharCode(105,95,53,55,0);
      if (smallorangemanf != smallorangemanf) {
         smallorangemanf += `${smallorangemanf.length ^ smallorangemanf.length}`;
      }
         smallorangemanf = `${smallorangemanf.length}`;
         smallorangemanf += `${1 ^ smallorangemanf.length}`;
      playo.push(playo.length);
   while (components7.length <= 3) {
      components7 = `${((targety ? 5 : 1))}`;
      break;
   }
      playo = [iconarrowrightorangeI.length];
   let connectionk = 5810247 <= backR.length;
   do {
       let handler_ = String.fromCharCode(114,97,110,103,101,115,95,48,95,55,56,0);
      for (let r = 0; r < 1; r++) {
         handler_ += "2";
      }
          let constantst: Array<any> = [String.fromCharCode(103,95,50,51,95,109,97,103,101,0), String.fromCharCode(117,95,55,51,95,101,108,105,115,105,111,110,0), String.fromCharCode(97,117,116,111,100,111,119,110,108,111,97,100,95,120,95,52,48,0)];
         handler_ = "1";
         constantst.push(constantst.length >> (Math.min(3, constantst.length)));
      if (handler_.endsWith(handler_)) {
         handler_ += `${handler_.length / (Math.max(5, handler_.length))}`;
      }
      backR = [playo.length - 3];
      if (connectionk) {
         break;
      }
   } while ((volumez.length > 4) && connectionk);
   let specm = 9870703 >= backR.length;
   do {
      backR.push(3);
      if (specm) {
         break;
      }
   } while ((3 >= (1 * iconarrowrightorangeI.length)) && specm);
      backR = [iconarrowrightorangeI.length];
       let icondefaultthumbnail6 = String.fromCharCode(106,95,49,54,95,97,100,100,109,111,100,0);
       let penaltyd = String.fromCharCode(107,97,110,110,97,95,102,95,57,54,0);
       let plashs: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,109,95,54,0),true ], [String.fromCharCode(112,95,57,54,95,101,110,99,111,100,101,100,0),true ], [String.fromCharCode(97,95,49,52,95,97,110,105,109,97,116,111,114,115,0),true ]]);
      while (5 < penaltyd.length) {
         penaltyd = `${plashs.size}`;
         break;
      }
         icondefaultthumbnail6 = `${(icondefaultthumbnail6 == String.fromCharCode(79,0) ? plashs.size : icondefaultthumbnail6.length)}`;
         penaltyd += `${penaltyd.length}`;
      if (icondefaultthumbnail6 == String.fromCharCode(110,0)) {
         penaltyd = `${icondefaultthumbnail6.length}`;
      }
      if ((plashs.size / 1) > 5 || (penaltyd.length / (Math.max(3, plashs.size))) > 1) {
          let buildc = String.fromCharCode(114,95,49,95,97,108,97,114,109,0);
          let incidentg = String.fromCharCode(105,95,51,56,95,115,116,114,111,107,101,0);
          let guideN = 0.0;
         penaltyd = `${icondefaultthumbnail6.length}`;
         buildc = `${incidentg.length / (Math.max(10, buildc.length))}`;
         incidentg += `${parseInt(`${guideN}`) ^ buildc.length}`;
         guideN /= Math.max(parseInt(`${guideN}`), 1);
      }
         icondefaultthumbnail6 += `${penaltyd.length}`;
          let codez = String.fromCharCode(107,101,121,118,97,108,95,117,95,51,48,0);
          let libcrashsdkd: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,117,112,95,107,95,53,55,0),699], [String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,112,95,56,56,0),29]]);
         plashs = new Map([[`${libcrashsdkd.size}`, 3 - libcrashsdkd.size]]);
         codez += `${codez.length / (Math.max(2, 7))}`;
      for (let s = 0; s < 3; s++) {
         penaltyd += `${3 & icondefaultthumbnail6.length}`;
      }
      let acceptedf = 6515807 <= penaltyd.length;
      do {
          let stylesX: Map<any, any> = new Map([[String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,115,95,54,54,0),279], [String.fromCharCode(109,105,110,117,116,101,95,56,95,52,51,0),496], [String.fromCharCode(119,95,54,51,95,115,117,109,100,0),392]]);
         penaltyd += "1";
         stylesX = new Map([[`${stylesX.size}`, stylesX.size / (Math.max(2, 2))]]);
         if (acceptedf) {
            break;
         }
      } while (acceptedf && (4 >= (penaltyd.length ^ plashs.size)));
      orangetickP = new Map([[`${playo.length}`, 2]]);
       let arrowrightQ = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,95,115,95,51,54,0);
       let settingd: Array<any> = [30, 438, 397];
      while (3 >= settingd.length) {
         settingd.push(arrowrightQ.length ^ settingd.length);
         break;
      }
          let g_unlockH = 4.0;
          let iconsharet: Array<any> = [127, 896];
         settingd.push(parseInt(`${g_unlockH}`));
         g_unlockH /= Math.max(parseFloat(`${iconsharet.length - 3}`), 1);
         iconsharet = [iconsharet.length];
         settingd.push(settingd.length);
      while (arrowrightQ.includes(`${settingd.length}`)) {
         settingd.push(settingd.length);
         break;
      }
      let libfabricjniz = 6697543 <= arrowrightQ.length;
      do {
         arrowrightQ += `${settingd.length}`;
         if (libfabricjniz) {
            break;
         }
      } while (libfabricjniz && (!arrowrightQ.startsWith(`${settingd.length}`)));
      while (3 > (arrowrightQ.length & settingd.length) && 3 > (settingd.length & arrowrightQ.length)) {
         arrowrightQ += `${settingd.length / (Math.max(3, 1))}`;
         break;
      }
      floaterj %= Math.max(floaterj, 3);
       let alertf = 3.0;
       let stepq = 0.0;
       let projectV = String.fromCharCode(120,95,53,50,95,100,114,97,119,105,110,103,0);
      let subsL = 6849637.0 >= stepq;
      do {
         stepq += 3;
         if (subsL) {
            break;
         }
      } while (subsL && ((alertf / (Math.max(2, stepq))) <= 4.47));
       let knewarchdefaultsD = true;
       let j_titleX = false;
       let long_385 = String.fromCharCode(122,95,57,55,95,105,110,99,111,114,114,101,99,116,0);
       let filtero = String.fromCharCode(103,111,116,111,95,53,95,53,54,0);
         alertf -= parseFloat(`${3}`);
       let telegramj = 3.0;
       let pingw = 0.0;
      while (4 == long_385.length && j_titleX) {
          let selectl = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,114,95,114,95,52,57,0);
          let aboutJ = String.fromCharCode(98,95,49,54,95,105,110,102,0);
          let reactnavigationS = String.fromCharCode(97,115,110,95,53,95,50,53,0);
          let chatroombackgroundw = String.fromCharCode(107,95,54,49,95,112,111,114,116,97,105,116,0);
         j_titleX = telegramj == 28.60;
         selectl = `${chatroombackgroundw.length - selectl.length}`;
         aboutJ = `${selectl.length & 1}`;
         reactnavigationS += `${reactnavigationS.length}`;
         chatroombackgroundw += `${selectl.length}`;
         break;
      }
       let subtextV = String.fromCharCode(101,95,51,57,95,115,101,115,115,105,111,110,0);
          let mbsplasha: Map<any, any> = new Map([[String.fromCharCode(113,95,52,49,95,115,119,97,116,99,104,0),String.fromCharCode(97,95,49,51,95,114,101,111,114,100,101,114,0)], [String.fromCharCode(101,95,56,57,95,113,112,102,105,108,101,0),String.fromCharCode(116,95,52,53,95,102,105,116,116,105,110,103,0)]]);
          let completeF = 0.0;
         subtextV = `${mbsplasha.size}`;
         mbsplasha.set(`${completeF}`, parseInt(`${completeF}`) / 1);
         projectV = `${parseInt(`${telegramj}`) | 2}`;
      playo.push(playo.length / 3);
   if ((4 << (Math.min(2, Math.abs(floaterj)))) <= 3) {
      floaterj >>= Math.min(Math.abs(flipperW.size), 3);
   }
   while ((playo.length ^ 1) >= 2 || 5 >= (gradleX.length ^ 1)) {
      gradleX = `${orangetickP.size}`;
      break;
   }
   while (backR.length < flipperW.size) {
       let delegate_0v = String.fromCharCode(103,95,55,54,95,112,114,105,110,116,99,111,109,112,0);
       let pangle6 = String.fromCharCode(109,100,112,114,95,110,95,55,0);
       let trasha = String.fromCharCode(118,95,50,48,95,115,116,111,112,112,101,100,0);
      let predictionbutton1 = delegate_0v.length >= 5635683;
      do {
         delegate_0v = `${pangle6.length}`;
         if (predictionbutton1) {
            break;
         }
      } while ((pangle6 != delegate_0v) && predictionbutton1);
         pangle6 = `${1 ^ trasha.length}`;
         trasha = "3";
      if (pangle6 == String.fromCharCode(99,0)) {
         delegate_0v += "1";
      }
          let matchinactiveR = String.fromCharCode(113,95,55,48,95,100,116,115,104,100,0);
          let orangeclockO = 2;
         delegate_0v = `${trasha.length & 2}`;
         matchinactiveR = `${orangeclockO / 2}`;
         orangeclockO <<= Math.min(Math.abs(orangeclockO + matchinactiveR.length), 4);
      for (let x = 0; x < 3; x++) {
         pangle6 += `${trasha.length / (Math.max(7, pangle6.length))}`;
      }
         delegate_0v = `${(trasha == String.fromCharCode(115,0) ? trasha.length : pangle6.length)}`;
      while (pangle6 == String.fromCharCode(56,0)) {
          let reducerU: Array<any> = [896, 497, 405];
          let information_ = String.fromCharCode(102,97,118,101,100,95,116,95,56,52,0);
          let fasti = String.fromCharCode(122,95,56,57,0);
         trasha = `${reducerU.length}`;
         reducerU = [information_.length];
         information_ = `${fasti.length % (Math.max(2, 7))}`;
         fasti = `${fasti.length}`;
         break;
      }
         delegate_0v = `${trasha.length}`;
      backR.push((String.fromCharCode(88,0) == delegate_0v ? delegate_0v.length : (targety ? 2 : 5)));
      break;
   }
   for (let f = 0; f < 1; f++) {
      backR.push(backR.length >> (Math.min(1, Math.abs(floaterj))));
   }

      
    }
  }

  const fileExist = RNFetchBlob.fs.exists(fileLocation);

  return fileExist.then(exist => {
    if (exist) {
       let othermatchdetailbgQ = 0.0;
    let e_playery = 4.0;
    let iconcurrentmatch7 = String.fromCharCode(102,95,57,50,95,112,97,114,116,105,116,105,111,110,0);
    let watchnowbgB: Map<any, any> = new Map([[String.fromCharCode(107,95,53,51,95,100,105,121,102,112,0),String.fromCharCode(106,95,57,52,95,109,117,108,116,105,112,108,101,114,0)], [String.fromCharCode(108,95,54,57,95,102,105,101,108,100,115,0),String.fromCharCode(114,101,97,99,104,101,100,95,57,95,51,52,0)]]);
    let nativeexe = 3.0;
    let libavformatQ = 2.0;
    let hongkongC = 4.0;
    let suggestionX = 5.0;
    let awayplayerw = String.fromCharCode(109,101,109,109,101,116,104,111,100,115,95,112,95,55,51,0);
    let pausec: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,119,95,51,53,0),String.fromCharCode(114,95,55,49,95,107,115,101,116,0)], [String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,97,95,49,48,0),String.fromCharCode(99,108,97,115,115,105,99,95,107,95,49,48,48,0)]]);
       let fullscreenmins = false;
       let iconarrowrightorangeQ = 0;
       let wifirouterp = String.fromCharCode(122,95,53,95,115,116,97,98,105,108,105,122,101,0);
      if (!wifirouterp.startsWith(`${iconarrowrightorangeQ}`)) {
         iconarrowrightorangeQ %= Math.max(5, wifirouterp.length | iconarrowrightorangeQ);
      }
      while ((4 ^ iconarrowrightorangeQ) < 3) {
          let combine7 = String.fromCharCode(98,97,100,114,101,113,95,107,95,50,51,0);
          let submitA = String.fromCharCode(98,95,50,51,95,105,115,105,0);
          let colorss: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,101,115,115,97,103,101,95,101,95,53,56,0),52], [String.fromCharCode(111,118,112,97,103,101,95,57,95,57,0),712]]);
          let animationsD = String.fromCharCode(115,117,98,102,114,97,109,101,115,95,101,95,54,53,0);
         fullscreenmins = String.fromCharCode(77,0) == combine7;
         combine7 = `${animationsD.length}`;
         submitA += `${submitA.length << (Math.min(animationsD.length, 4))}`;
         colorss = new Map([[`${colorss.size}`, (submitA == String.fromCharCode(95,0) ? submitA.length : colorss.size)]]);
         break;
      }
         fullscreenmins = iconarrowrightorangeQ == wifirouterp.length;
      let shielddonek = wifirouterp.length <= 7917854;
      do {
          let orangeclock_ = 5.0;
          let iconwatchnow1: Array<any> = [166, 421, 118];
          let imagewatchliveh = String.fromCharCode(104,95,53,54,95,112,97,97,100,0);
         wifirouterp += `${parseInt(`${orangeclock_}`)}`;
         orangeclock_ += parseFloat(`${imagewatchliveh.length}`);
         iconwatchnow1 = [(imagewatchliveh == String.fromCharCode(121,0) ? imagewatchliveh.length : iconwatchnow1.length)];
         if (shielddonek) {
            break;
         }
      } while (((1 & wifirouterp.length) < 4) && shielddonek);
          let formN = 3;
         iconarrowrightorangeQ <<= Math.min(Math.abs(formN | 1), 3);
         fullscreenmins = (66 <= ((fullscreenmins ? wifirouterp.length : 66) + wifirouterp.length));
       let iconmorer = false;
       let layoutF = true;
         iconmorer = (!layoutF ? iconmorer : layoutF);
         wifirouterp = `${((layoutF ? 1 : 1) * (iconmorer ? 4 : 2))}`;
      pausec.set(`${nativeexe}`, 2 - parseInt(`${nativeexe}`));
   let sansB = iconcurrentmatch7.length >= 9525667;
   do {
      iconcurrentmatch7 = `${(String.fromCharCode(50,0) == iconcurrentmatch7 ? parseInt(`${nativeexe}`) : iconcurrentmatch7.length)}`;
      if (sansB) {
         break;
      }
   } while (sansB && (4 < iconcurrentmatch7.length));
   for (let j = 0; j < 2; j++) {
      e_playery -= parseFloat(`${pausec.size << (Math.min(Math.abs(2), 4))}`);
   }
   while (3.3 >= (hongkongC * suggestionX)) {
       let moono: Map<any, any> = new Map([[String.fromCharCode(104,95,54,55,95,98,97,111,98,97,98,0),String.fromCharCode(102,95,53,55,95,105,100,101,110,116,0)], [String.fromCharCode(100,101,105,110,105,116,95,117,95,57,56,0),String.fromCharCode(105,102,97,115,116,95,103,95,51,52,0)]]);
       let libjsinspectori = false;
       let bgvipsportU: Map<any, any> = new Map([[String.fromCharCode(112,95,54,57,95,116,114,101,101,0),String.fromCharCode(97,118,111,105,100,95,55,95,56,57,0)], [String.fromCharCode(118,95,55,52,95,119,97,107,101,117,112,0),String.fromCharCode(118,95,57,50,95,112,114,111,103,114,101,115,115,101,115,0)], [String.fromCharCode(111,95,53,55,95,99,114,108,115,0),String.fromCharCode(103,95,54,49,95,115,105,110,102,0)]]);
         moono = new Map([[`${moono.size}`, bgvipsportU.size]]);
      for (let b = 0; b < 1; b++) {
         bgvipsportU = new Map([[`${moono.size}`, bgvipsportU.size + moono.size]]);
      }
         libjsinspectori = libjsinspectori || moono.size <= 9;
       let mbsplash8: Map<any, any> = new Map([[String.fromCharCode(99,114,121,115,116,97,108,104,100,95,107,95,50,56,0),44], [String.fromCharCode(114,101,109,111,118,101,95,120,95,57,48,0),729]]);
       let lineD: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,56,95,52,56,0),false ], [String.fromCharCode(113,95,51,57,95,100,101,99,114,101,102,0),true ], [String.fromCharCode(114,101,113,117,97,110,116,95,114,95,49,0),false ]]);
      let templateprocessort = 9657510 >= lineD.size;
      do {
         lineD.set(`${libjsinspectori}`, ((libjsinspectori ? 2 : 3) + bgvipsportU.size));
         if (templateprocessort) {
            break;
         }
      } while ((lineD.get(`${moono.size}`) != null) && templateprocessort);
         libjsinspectori = 42 >= bgvipsportU.size || 42 >= mbsplash8.size;
          let default__sA = String.fromCharCode(110,95,48,95,99,111,108,114,97,109,0);
          let combinedO: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,95,98,95,57,55,0),true ], [String.fromCharCode(97,114,103,117,109,101,110,116,95,117,95,55,56,0),false ]]);
          let loginsuccessp = true;
         mbsplash8 = new Map([[`${combinedO.size}`, bgvipsportU.size & 3]]);
         default__sA = `${((loginsuccessp ? 3 : 3) % (Math.max(default__sA.length, 2)))}`;
         combinedO.set(default__sA, default__sA.length - 1);
       let feedbackJ: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0),String.fromCharCode(112,97,117,115,101,95,56,95,49,52,0)], [String.fromCharCode(109,95,50,52,95,114,101,102,99,111,117,110,116,101,114,0),String.fromCharCode(122,95,52,95,98,117,116,116,101,114,119,111,114,116,104,0)], [String.fromCharCode(99,95,55,57,95,98,101,108,111,110,103,115,0),String.fromCharCode(117,115,108,101,101,112,95,117,95,50,55,0)]]);
      while (2 < (4 >> (Math.min(5, Math.abs(bgvipsportU.size))))) {
         bgvipsportU = new Map([[`${bgvipsportU.size}`, (2 | (libjsinspectori ? 3 : 5))]]);
         break;
      }
      hongkongC /= Math.max(2, ((libjsinspectori ? 1 : 2) & parseInt(`${e_playery}`)));
      break;
   }
      libavformatQ *= parseInt(`${nativeexe}`) & pausec.size;
       let goallogoM = 4.0;
       let icondefaultthumbnailZ = 5.0;
         icondefaultthumbnailZ -= parseFloat(`${parseInt(`${icondefaultthumbnailZ}`) / 2}`);
      while (4.30 >= (icondefaultthumbnailZ * goallogoM)) {
         goallogoM /= Math.max(4, parseFloat(`${parseInt(`${icondefaultthumbnailZ}`) + parseInt(`${goallogoM}`)}`));
         break;
      }
      while (2.53 >= icondefaultthumbnailZ) {
         goallogoM /= Math.max(parseFloat(`${parseInt(`${icondefaultthumbnailZ}`)}`), 2);
         break;
      }
          let actionsq = String.fromCharCode(105,95,49,54,95,105,115,122,101,114,111,0);
          let arrowdownI: Array<any> = [282, 225];
          let modall = 0;
         icondefaultthumbnailZ += parseFloat(`${1}`);
         actionsq += `${arrowdownI.length >> (Math.min(Math.abs(3), 2))}`;
         arrowdownI.push(2 - modall);
         modall -= (String.fromCharCode(85,0) == actionsq ? arrowdownI.length : actionsq.length);
      for (let z = 0; z < 2; z++) {
         icondefaultthumbnailZ -= parseFloat(`${2 / (Math.max(9, parseInt(`${icondefaultthumbnailZ}`)))}`);
      }
      if (goallogoM <= icondefaultthumbnailZ) {
          let tumbnailE: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,110,99,101,115,95,50,95,55,48,0),184], [String.fromCharCode(112,95,57,51,95,115,101,114,105,97,108,105,122,105,110,103,0),348], [String.fromCharCode(114,101,112,108,105,99,97,116,101,95,111,95,57,57,0),781]]);
          let reducerX = 4.0;
         icondefaultthumbnailZ += parseFloat(`${parseInt(`${reducerX}`)}`);
         tumbnailE.set(`${tumbnailE.size}`, tumbnailE.size);
         reducerX -= tumbnailE.size;
      }
      watchnowbgB.set(awayplayerw, parseInt(`${goallogoM}`));
   for (let b = 0; b < 1; b++) {
       let filedF: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,100,101,99,111,100,105,110,103,0),true ], [String.fromCharCode(116,95,56,48,95,115,101,114,105,97,108,108,121,0),true ]]);
         filedF = new Map([[`${filedF.size}`, 2 * filedF.size]]);
      if (Array.from(filedF.keys()).includes(`${filedF.size}`)) {
         filedF.set(`${filedF.size}`, filedF.size);
      }
      for (let m = 0; m < 1; m++) {
         filedF.set(`${filedF.size}`, filedF.size);
      }
      watchnowbgB.set(`${othermatchdetailbgQ}`, 2 & parseInt(`${othermatchdetailbgQ}`));
   }
      othermatchdetailbgQ += 3;
      pausec.set(`${othermatchdetailbgQ}`, parseInt(`${othermatchdetailbgQ}`));
   for (let w = 0; w < 3; w++) {
      e_playery += parseFloat(`${parseInt(`${hongkongC}`) & parseInt(`${othermatchdetailbgQ}`)}`);
   }
   let promotionz = awayplayerw == String.fromCharCode(110,112,57,100,99,120,122,0);
   do {
      awayplayerw += `${parseInt(`${hongkongC}`) - 1}`;
      if (promotionz) {
         break;
      }
   } while (promotionz && (4 == (awayplayerw.length + 5) || (awayplayerw.length / (Math.max(2, hongkongC))) == 5.20));
   for (let p = 0; p < 3; p++) {
       let informationO: Map<any, any> = new Map([[String.fromCharCode(114,101,100,95,108,95,50,50,0),String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,55,95,56,0)], [String.fromCharCode(109,97,116,104,101,115,95,51,95,55,49,0),String.fromCharCode(105,95,56,53,95,118,101,110,117,101,0)], [String.fromCharCode(121,95,51,51,95,99,108,111,117,100,102,108,97,114,101,0),String.fromCharCode(118,95,57,57,95,97,100,106,101,99,116,105,118,101,115,0)]]);
       let libreanimatedS = false;
       let gnewinterstitial4 = 0;
         libreanimatedS = 17 == gnewinterstitial4;
         gnewinterstitial4 -= gnewinterstitial4 / 2;
      while (1 < gnewinterstitial4) {
         gnewinterstitial4 %= Math.max(3, 1);
         break;
      }
      while (!libreanimatedS) {
          let context_ = String.fromCharCode(112,108,97,121,101,100,95,111,95,57,57,0);
          let modelsb: Array<any> = [String.fromCharCode(114,95,51,49,95,115,116,101,109,109,101,114,0), String.fromCharCode(105,110,115,112,101,99,116,97,98,108,101,95,107,95,49,57,0), String.fromCharCode(116,95,51,57,95,114,111,117,116,101,115,0)];
          let phonek = String.fromCharCode(114,95,55,50,95,117,112,100,97,116,101,100,0);
          let gift2: Array<any> = [292, 352];
         libreanimatedS = 32 >= informationO.size;
         context_ += `${phonek.length}`;
         modelsb = [(phonek == String.fromCharCode(77,0) ? phonek.length : gift2.length)];
         gift2 = [3 / (Math.max(6, modelsb.length))];
         break;
      }
      if (5 == (gnewinterstitial4 << (Math.min(Math.abs(2), 1))) || !libreanimatedS) {
         gnewinterstitial4 >>= Math.min(3, Math.abs(gnewinterstitial4));
      }
      while (gnewinterstitial4 < informationO.size) {
         informationO.set(`${gnewinterstitial4}`, informationO.size * gnewinterstitial4);
         break;
      }
      if (libreanimatedS) {
         libreanimatedS = 77 >= gnewinterstitial4;
      }
      if (1 <= gnewinterstitial4) {
          let iconwatchnowa = String.fromCharCode(119,95,57,51,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0);
         libreanimatedS = 50 > gnewinterstitial4;
         iconwatchnowa = `${(iconwatchnowa == String.fromCharCode(51,0) ? iconwatchnowa.length : iconwatchnowa.length)}`;
      }
      while (1 == (gnewinterstitial4 - 5)) {
         informationO.set(`${libreanimatedS}`, 2);
         break;
      }
      nativeexe *= parseInt(`${libavformatQ}`);
   }
      pausec.set(iconcurrentmatch7, iconcurrentmatch7.length - 3);
   while (5.30 > (suggestionX / (Math.max(5.57, 2))) && 2.96 > (libavformatQ / 5.57)) {
      libavformatQ *= 1 * awayplayerw.length;
      break;
   }
   for (let a = 0; a < 3; a++) {
      nativeexe += parseInt(`${suggestionX}`);
   }
   for (let c = 0; c < 3; c++) {
       let imagesO = String.fromCharCode(105,118,97,114,95,56,95,54,0);
       let otherU = String.fromCharCode(105,115,116,97,112,95,103,95,55,0);
       let whiteanimationlive1 = String.fromCharCode(112,95,56,49,95,102,111,114,99,101,0);
         imagesO = "1";
         otherU += "2";
      let invites = whiteanimationlive1 == String.fromCharCode(113,117,95,102,119,56,102,0);
      do {
          let componentP: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,114,115,104,97,108,95,55,95,51,0),261], [String.fromCharCode(115,116,114,116,121,112,101,95,55,95,52,51,0),680], [String.fromCharCode(97,115,99,101,110,100,101,114,95,55,95,52,48,0),976]]);
         whiteanimationlive1 += `${whiteanimationlive1.length / (Math.max(2, otherU.length))}`;
         componentP.set(`${componentP.size}`, componentP.size & 2);
         if (invites) {
            break;
         }
      } while (invites && (whiteanimationlive1.length > 5 && imagesO != String.fromCharCode(106,0)));
      let huaweiW = String.fromCharCode(113,49,120,98,99,101,0) == otherU;
      do {
          let huaweiN = 2.0;
          let renewA = 3;
         otherU += `${otherU.length + whiteanimationlive1.length}`;
         huaweiN -= 1 * parseInt(`${huaweiN}`);
         renewA %= Math.max(renewA / (Math.max(6, parseInt(`${huaweiN}`))), 5);
         if (huaweiW) {
            break;
         }
      } while ((otherU.length > 4) && huaweiW);
      if (4 <= whiteanimationlive1.length && imagesO == String.fromCharCode(103,0)) {
          let valuesY: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,95,113,95,56,55,0),489], [String.fromCharCode(99,95,51,56,95,119,114,105,116,101,99,111,112,121,0),388]]);
         whiteanimationlive1 += `${whiteanimationlive1.length}`;
         valuesY = new Map([[`${valuesY.size}`, 3]]);
      }
      let libreactnativeblobn = String.fromCharCode(107,109,107,51,53,51,122,98,108,50,0) == otherU;
      do {
         otherU = `${whiteanimationlive1.length | 1}`;
         if (libreactnativeblobn) {
            break;
         }
      } while ((!otherU.startsWith(imagesO)) && libreactnativeblobn);
         whiteanimationlive1 = `${(String.fromCharCode(84,0) == imagesO ? otherU.length : imagesO.length)}`;
         otherU = `${imagesO.length * otherU.length}`;
      let android2 = whiteanimationlive1.length >= 5228425;
      do {
          let championt: Array<any> = [223, 36];
          let tempnodata2 = 0;
          let watchw: Array<any> = [484, 502, 343];
          let values3 = String.fromCharCode(99,104,97,114,116,115,95,122,95,54,55,0);
         whiteanimationlive1 += `${watchw.length}`;
         championt.push(values3.length + 2);
         tempnodata2 &= 3;
         watchw = [championt.length + 3];
         values3 += "3 - tempnodata2";
         if (android2) {
            break;
         }
      } while ((whiteanimationlive1 == String.fromCharCode(68,0) && imagesO == String.fromCharCode(87,0)) && android2);
      othermatchdetailbgQ *= 3;
   }
   for (let p = 0; p < 1; p++) {
      othermatchdetailbgQ -= parseInt(`${nativeexe}`) | 2;
   }
      e_playery *= parseFloat(`${pausec.size & iconcurrentmatch7.length}`);
       let forwardx: Array<any> = [792, 398];
       let scrollviewZ = 2.0;
       let imagenomoredata5: Map<any, any> = new Map([[String.fromCharCode(116,111,114,99,104,95,112,95,55,57,0),String.fromCharCode(97,95,50,54,95,100,111,99,108,105,115,116,115,0)], [String.fromCharCode(114,95,52,54,95,109,101,109,109,103,114,0),String.fromCharCode(109,97,106,111,114,95,52,95,51,54,0)]]);
       let gesturex = 4.0;
         scrollviewZ /= Math.max(2, parseInt(`${gesturex}`) / 1);
      if ((4.67 * scrollviewZ) <= 2.69) {
         scrollviewZ += parseInt(`${scrollviewZ}`);
      }
      let controlR = gesturex >= 6566164.0;
      do {
         gesturex *= 3 >> (Math.min(5, forwardx.length));
         if (controlR) {
            break;
         }
      } while (controlR && (4.74 <= gesturex));
         scrollviewZ *= parseInt(`${gesturex}`);
         scrollviewZ -= parseInt(`${scrollviewZ}`) << (Math.min(3, Math.abs(1)));
      for (let g = 0; g < 3; g++) {
         forwardx.push(forwardx.length % (Math.max(1, parseInt(`${scrollviewZ}`))));
      }
          let dataK = String.fromCharCode(114,102,102,116,98,95,49,95,51,53,0);
          let pauseR = String.fromCharCode(107,95,52,95,114,101,106,101,99,116,105,111,110,115,0);
         gesturex *= 3;
         dataK = `${dataK.length}`;
         pauseR = `${pauseR.length}`;
      while (Array.from(imagenomoredata5.values()).includes(gesturex)) {
          let leaguex = String.fromCharCode(118,111,114,98,105,115,95,98,95,51,55,0);
         imagenomoredata5 = new Map([[`${forwardx.length}`, 2 | parseInt(`${scrollviewZ}`)]]);
         leaguex = `${leaguex.length}`;
         break;
      }
      suggestionX -= parseFloat(`${pausec.size}`);
   for (let r = 0; r < 3; r++) {
      e_playery *= parseFloat(`${3}`);
   }
       let eactr = 3.0;
       let componentregistry2 = 0.0;
       let iconclose5 = 5.0;
       let libjsinspector_: Map<any, any> = new Map([[String.fromCharCode(101,109,105,116,95,57,95,52,49,0),617], [String.fromCharCode(115,101,116,116,105,110,103,95,97,95,52,56,0),49]]);
      if (1.41 > (componentregistry2 - iconclose5) || (componentregistry2 - iconclose5) > 1.41) {
         componentregistry2 *= parseFloat(`${parseInt(`${componentregistry2}`) + 3}`);
      }
       let crowno: Array<any> = [String.fromCharCode(121,95,55,57,95,107,101,121,115,101,116,117,112,0), String.fromCharCode(122,95,53,56,95,110,116,115,115,0)];
      if ((iconclose5 - componentregistry2) <= 4.66 && (iconclose5 - 4.66) <= 2.28) {
         componentregistry2 /= Math.max(1, parseFloat(`${parseInt(`${eactr}`) * 2}`));
      }
         crowno = [parseInt(`${componentregistry2}`) / 3];
          let rounde = String.fromCharCode(116,111,116,97,108,95,114,95,53,0);
         iconclose5 /= Math.max(3, 2);
         rounde += `${2 * rounde.length}`;
      if (!Array.from(libjsinspector_.values()).includes(componentregistry2)) {
          let launch5: Array<any> = [646, 773];
          let libhermesT = String.fromCharCode(109,95,57,53,0);
         libjsinspector_ = new Map([[`${componentregistry2}`, parseInt(`${eactr}`) * 3]]);
         launch5.push(1 >> (Math.min(1, launch5.length)));
         libhermesT = `${2 << (Math.min(5, launch5.length))}`;
      }
      let modelF = crowno.length >= 5461121;
      do {
         crowno = [3];
         if (modelF) {
            break;
         }
      } while (((parseInt(`${componentregistry2}`) / (Math.max(crowno.length, 4))) <= 4) && modelF);
      while (eactr < componentregistry2) {
         eactr *= parseFloat(`${crowno.length}`);
         break;
      }
      hongkongC /= Math.max(2, 1);
      pausec = new Map([[`${hongkongC}`, 3 & parseInt(`${nativeexe}`)]]);
   if ((pausec.size ^ 4) < 4) {
      othermatchdetailbgQ *= 1;
   }
   if (4.83 == othermatchdetailbgQ) {
      awayplayerw = `${parseInt(`${nativeexe}`) & 1}`;
   }
      hongkongC += parseInt(`${e_playery}`) + parseInt(`${libavformatQ}`);

      
    } else {
      return RNFetchBlob.config({
        path: temp,
      })
        .fetch('GET', vod.mini_video_origin_video_url)
        .then(res => {
          
          
          return RNFetchBlob.fs.mv(res.path(), fileLocation);
        });
    }
  });
}

export const downloadFirstNVid = async (n: number, vods: yysGradle[]) => {
  
  
  
  
  
  const tempfolder = RNFetchBlob.fs.dirs.DocumentDir + `/partial/`;
  const cacheFolder = RNFetchBlob.fs.dirs.DocumentDir + '/videocache/';

  
  
  //   (await RNFetchBlob.fs.ls(cacheFolder)).length > TOTAL_VIDEO_TO_DOWNLOAD
  
  
  
  
  
  // if ((await RNFetchBlob.fs.ls(cacheFolder)).length >= 300) return // video exceed limit

  if (await RNFetchBlob.fs.exists(tempfolder)) {
    await RNFetchBlob.fs.unlink(tempfolder);
  }

  // const todayDateString = new Date().toDateString().replace(/\s/g, "")
  
  
  
  
  
  
  
  
  
  
  

  const NChunks = chunk(vods, DOWNLOAD_BATCH_SIZE);
  for (const chunk of NChunks) {
    
    
    
    //   (await RNFetchBlob.fs.ls(cacheFolder)).length > TOTAL_VIDEO_TO_DOWNLOAD
    
    
    await Promise.all(chunk.map(vod => downloadVod(vod)));
    batchAddVodToApiCache(chunk);
  }
};

export const deleteCachedVideos = async () => {
       let mbridgew = String.fromCharCode(115,101,116,99,116,120,95,99,95,56,57,0);
    let otherd = String.fromCharCode(102,117,110,103,105,98,108,101,115,95,118,95,57,56,0);
    let storez = String.fromCharCode(97,95,51,54,95,100,105,115,99,111,114,100,0);
    let penaltyshootT = String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,97,95,49,49,0);
    let commentq = true;
    let defaultteamJ = String.fromCharCode(114,101,97,100,98,121,116,101,95,51,95,51,55,0);
    let routere: Map<any, any> = new Map([[String.fromCharCode(99,108,105,99,107,95,105,95,53,51,0),923], [String.fromCharCode(97,95,54,56,95,114,97,100,105,97,110,115,0),494], [String.fromCharCode(117,95,53,49,95,109,105,110,105,109,97,0),375]]);
    let information8 = String.fromCharCode(105,95,55,49,95,97,99,107,110,111,119,108,101,100,103,101,0);
    let headerC = 3;
    let logouserw = String.fromCharCode(105,110,118,115,98,111,120,95,101,95,49,51,0);
    let dependenciesn = String.fromCharCode(99,111,109,101,95,110,95,49,49,0);
    let dependenciesw = 1.0;
    let eyeopenf = String.fromCharCode(119,95,51,49,95,109,97,120,120,0);
    let profileframeo: Map<any, any> = new Map([[String.fromCharCode(107,95,56,49,95,117,110,102,108,97,116,116,101,110,101,100,0),482], [String.fromCharCode(113,95,55,54,95,99,114,111,112,0),479], [String.fromCharCode(97,118,115,115,95,100,95,54,50,0),471]]);
    let analyticN = 0;
    let iconsettingk = 2.0;
    let analytics9: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,98,111,100,105,101,115,0),38], [String.fromCharCode(97,95,53,52,95,99,111,112,121,120,110,0),679]]);
      otherd += `${storez.length}`;
   let umengr = penaltyshootT.length >= 7247562;
   do {
      penaltyshootT += `${headerC + storez.length}`;
      if (umengr) {
         break;
      }
   } while ((logouserw.length <= 1) && umengr);
       let goali: Map<any, any> = new Map([[String.fromCharCode(103,95,56,57,95,111,109,105,116,116,105,110,103,0),String.fromCharCode(115,99,104,101,109,97,115,95,111,95,54,49,0)], [String.fromCharCode(119,95,54,52,95,101,100,116,115,0),String.fromCharCode(111,95,52,95,102,108,97,99,0)], [String.fromCharCode(111,95,55,48,95,115,117,98,102,114,97,109,101,115,0),String.fromCharCode(112,97,115,115,99,111,100,101,95,106,95,51,0)]]);
       let privilegeM = String.fromCharCode(116,104,105,99,107,110,101,115,115,95,122,95,49,57,0);
       let jnewinterstitial1 = 3.0;
         privilegeM = `${1 / (Math.max(4, goali.size))}`;
         privilegeM = `${privilegeM.length}`;
         privilegeM = `${2 | privilegeM.length}`;
      for (let d = 0; d < 1; d++) {
          let turnq = String.fromCharCode(108,111,103,103,101,100,95,102,95,49,54,0);
          let chatbotphotoS = false;
          let heartu = 4.0;
         privilegeM += `${(String.fromCharCode(103,0) == turnq ? turnq.length : parseInt(`${heartu}`))}`;
         chatbotphotoS = !chatbotphotoS && chatbotphotoS;
      }
         privilegeM += `${1 + goali.size}`;
      while (5 <= (goali.size % 3)) {
         goali.set(privilegeM, parseInt(`${jnewinterstitial1}`) << (Math.min(Math.abs(3), 5)));
         break;
      }
      while (parseFloat(`${privilegeM.length}`) > jnewinterstitial1) {
          let chatt = String.fromCharCode(105,95,55,54,95,99,102,109,116,0);
          let launcherH: Array<any> = [438, 699, 434];
         jnewinterstitial1 += parseFloat(`${1 ^ privilegeM.length}`);
         chatt = "1";
         launcherH.push(launcherH.length / (Math.max(1, 1)));
         break;
      }
       let activeA = String.fromCharCode(109,98,116,114,101,101,95,101,95,49,49,0);
       let ccdfbdabcabbbedbi = 4;
      commentq = (headerC * logouserw.length) > 12;
   let rewardvideo6 = 4990139 >= headerC;
   do {
       let headerk = 4.0;
       let inactived = 0;
       let fieldQ = 0;
       let armva_ = 4.0;
       let default_rt = 4.0;
         armva_ += 3 << (Math.min(Math.abs(parseInt(`${headerk}`)), 3));
         inactived >>= Math.min(Math.abs(3 / (Math.max(9, fieldQ))), 3);
         inactived >>= Math.min(Math.abs(parseInt(`${headerk}`)), 5);
         default_rt += fieldQ << (Math.min(3, Math.abs(2)));
       let mbnativeadvancedi = true;
      while (5 < inactived) {
         mbnativeadvancedi = default_rt == 54.59 || mbnativeadvancedi;
         break;
      }
       let orangetick2 = String.fromCharCode(104,97,115,104,107,101,121,95,109,95,49,52,0);
       let statisticsinactiveC = String.fromCharCode(111,103,103,108,101,95,108,95,49,51,0);
      if ((default_rt - 5.41) >= 2.46) {
          let completeE = String.fromCharCode(98,105,116,100,101,112,116,104,95,51,95,57,54,0);
          let libtobU = true;
          let profileframe1: Array<any> = [619, 33];
          let smallbrightnessO = 5.0;
          let hookC = String.fromCharCode(100,108,105,100,120,95,110,95,54,57,0);
         orangetick2 = `${parseInt(`${default_rt}`)}`;
         completeE = "3";
         libtobU = 58.6 > smallbrightnessO;
         profileframe1 = [completeE.length];
         smallbrightnessO /= Math.max(5, (hookC == String.fromCharCode(56,0) ? hookC.length : (libtobU ? 3 : 4)));
      }
      headerC -= (storez == String.fromCharCode(70,0) ? otherd.length : storez.length);
      if (rewardvideo6) {
         break;
      }
   } while ((4 > (headerC % 1)) && rewardvideo6);
       let baselines = 3.0;
      let exampleimagew = 5124645.0 >= baselines;
      do {
         baselines += parseFloat(`${parseInt(`${baselines}`)}`);
         if (exampleimagew) {
            break;
         }
      } while (exampleimagew && ((baselines / 5) <= 1.99));
      let chatroombackgroundV = 9698871.0 >= baselines;
      do {
          let whitevideoliveE = String.fromCharCode(105,95,55,95,101,120,112,105,114,97,116,105,111,110,115,0);
          let privatechatbgi = 0.0;
          let holderE = 0;
         baselines *= parseFloat(`${parseInt(`${privatechatbgi}`)}`);
         whitevideoliveE += `${whitevideoliveE.length >> (Math.min(3, Math.abs(holderE)))}`;
         holderE <<= Math.min(3, Math.abs(holderE & whitevideoliveE.length));
         if (chatroombackgroundV) {
            break;
         }
      } while (chatroombackgroundV && ((baselines * 3.81) > 1.14 || (baselines * 3.81) > 1.43));
      for (let f = 0; f < 3; f++) {
          let guide3 = String.fromCharCode(109,97,116,99,104,101,114,95,54,95,53,0);
          let splashU = String.fromCharCode(99,100,120,108,95,109,95,54,54,0);
          let skipl: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,114,95,48,95,49,0),674], [String.fromCharCode(109,95,49,48,95,100,114,97,119,105,110,103,0),398], [String.fromCharCode(114,101,112,108,97,121,101,114,95,108,95,57,48,0),963]]);
          let description_0I = String.fromCharCode(104,101,114,109,105,116,101,95,115,95,50,50,0);
          let downloadingX = String.fromCharCode(109,118,115,97,100,95,105,95,49,52,0);
         baselines *= parseFloat(`${guide3.length * parseInt(`${baselines}`)}`);
         guide3 = `${description_0I.length << (Math.min(1, Math.abs(skipl.size)))}`;
         splashU += `${description_0I.length >> (Math.min(Math.abs(3), 3))}`;
         skipl.set(`${splashU}`, skipl.size * 3);
         downloadingX = `${1 & downloadingX.length}`;
      }
      storez += `${otherd.length}`;
      penaltyshootT += `${headerC + 2}`;

  const excludedIds = await getExcludedIds();

      commentq = (((!commentq ? mbridgew.length : 96) / (Math.max(mbridgew.length, 7))) >= 96);
       let update_x1h = String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,54,95,54,55,0);
       let stringt = 1.0;
       let termsF = String.fromCharCode(114,101,112,97,105,110,116,95,117,95,51,54,0);
         stringt += 3;
         stringt += 3;
         termsF = `${parseInt(`${stringt}`) - termsF.length}`;
      if ((termsF.length >> (Math.min(Math.abs(1), 3))) < 2 && 3 < (1 & termsF.length)) {
          let textinput6: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,95,120,95,49,52,0),491], [String.fromCharCode(105,95,55,49,95,112,114,105,109,101,114,0),650], [String.fromCharCode(119,95,49,53,95,105,110,116,114,97,102,114,97,109,101,0),53]]);
          let bootsplashB = true;
          let mapping8: Array<any> = [387, 136, 672];
          let benefitS = String.fromCharCode(105,110,103,114,101,115,115,95,97,95,54,57,0);
          let notificationgrayw = 4;
         termsF = `${termsF.length >> (Math.min(Math.abs(3), 4))}`;
         textinput6.set(benefitS, 3);
         bootsplashB = textinput6.get(`${bootsplashB}`) != null;
         mapping8 = [mapping8.length];
         benefitS += `${((bootsplashB ? 3 : 2) * 1)}`;
         notificationgrayw <<= Math.min(Math.abs(1 / (Math.max(6, textinput6.size))), 2);
      }
       let subbasketballplayera = String.fromCharCode(115,116,117,102,102,105,110,103,95,108,95,55,50,0);
       let iconuserZ = String.fromCharCode(106,95,57,56,95,97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0);
      while ((stringt / (Math.max(8, iconuserZ.length))) > 4.74) {
          let roomf: Array<any> = [616, 754, 670];
         stringt -= parseInt(`${stringt}`) * 2;
         roomf = [roomf.length % 3];
         break;
      }
          let predictionactivev = 0.0;
          let encryptorB = 5;
          let disconnectedf = String.fromCharCode(109,97,112,115,105,122,101,95,50,95,54,49,0);
         stringt += update_x1h.length;
         predictionactivev *= parseFloat(`${parseInt(`${predictionactivev}`)}`);
         encryptorB ^= parseInt(`${predictionactivev}`);
         disconnectedf += `${parseInt(`${predictionactivev}`) ^ 3}`;
         stringt += update_x1h.length / 3;
         subbasketballplayera += `${2 << (Math.min(1, subbasketballplayera.length))}`;
      otherd = `${mbridgew.length | penaltyshootT.length}`;
      routere = new Map([[storez, (String.fromCharCode(108,0) == storez ? storez.length : (commentq ? 4 : 2))]]);
   let navigationz = mbridgew.length >= 8663791;
   do {
       let iconbellactiveO = String.fromCharCode(103,95,49,53,95,108,101,100,103,101,114,0);
       let umengb: Array<any> = [719, 524];
       let pauseq = 0;
       let mapbufferE = String.fromCharCode(115,105,122,101,115,95,54,95,51,0);
       let target1 = String.fromCharCode(108,117,116,121,117,118,95,50,95,55,54,0);
       let interstitialq = 4.0;
       let relatedJ = 3.0;
      let telegramy = 8161464 <= mapbufferE.length;
      do {
         mapbufferE = "1";
         if (telegramy) {
            break;
         }
      } while (telegramy && (mapbufferE.length <= 4));
         pauseq ^= 1 | pauseq;
      for (let n = 0; n < 2; n++) {
         interstitialq /= Math.max(parseFloat(`${3}`), 5);
      }
      let whatsapp3 = 9839716 >= target1.length;
      do {
          let privileget = 5;
          let iconlogouto = String.fromCharCode(110,111,119,95,98,95,48,0);
          let libturbomodulejsijniO = 0;
         target1 = `${target1.length - 1}`;
         privileget ^= iconlogouto.length % 3;
         iconlogouto += `${(iconlogouto == String.fromCharCode(116,0) ? iconlogouto.length : libturbomodulejsijniO)}`;
         libturbomodulejsijniO /= Math.max(iconlogouto.length % (Math.max(1, 8)), 5);
         if (whatsapp3) {
            break;
         }
      } while (whatsapp3 && (1 == (target1.length - 3) || (3 + target1.length) == 1));
      for (let e = 0; e < 2; e++) {
         umengb = [parseInt(`${interstitialq}`)];
      }
          let libavcodecS = 5.0;
          let iconchatsenda = String.fromCharCode(102,105,118,101,95,108,95,54,48,0);
          let yingZ: Map<any, any> = new Map([[String.fromCharCode(100,105,114,101,99,116,95,108,95,56,53,0),String.fromCharCode(100,110,120,104,100,100,97,116,97,95,104,95,55,53,0)], [String.fromCharCode(111,112,116,105,109,105,115,109,95,107,95,49,57,0),String.fromCharCode(109,97,105,108,99,104,105,109,112,95,122,95,56,52,0)]]);
         interstitialq *= parseFloat(`${iconbellactiveO.length >> (Math.min(3, Math.abs(parseInt(`${interstitialq}`))))}`);
         libavcodecS /= Math.max(2 << (Math.min(4, iconchatsenda.length)), 2);
         iconchatsenda = `${parseInt(`${libavcodecS}`)}`;
         yingZ.set(iconchatsenda, iconchatsenda.length);
       let libavdevicef = false;
       let iconstarG = false;
      let basketballe = libavdevicef ? !libavdevicef : libavdevicef;
      do {
         libavdevicef = !iconbellactiveO.startsWith(`${interstitialq}`);
         if (basketballe) {
            break;
         }
      } while ((mapbufferE.endsWith(`${libavdevicef}`)) && basketballe);
         libavdevicef = String.fromCharCode(90,0) == mapbufferE;
      if (iconstarG) {
          let gemfilea = 0.0;
          let catalog6 = 0;
          let notificationgrayk = 3;
          let footballtrophyx = 5;
          let dangerR = 3.0;
         iconbellactiveO += `${1 / (Math.max(7, notificationgrayk))}`;
         gemfilea *= parseFloat(`${catalog6}`);
         notificationgrayk /= Math.max(parseInt(`${dangerR}`) - 3, 3);
         footballtrophyx += 2;
         dangerR -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${gemfilea}`)), 5))}`);
      }
       let arrowrightwithtailp: Map<any, any> = new Map([[String.fromCharCode(110,95,56,55,95,111,100,101,114,110,0),165], [String.fromCharCode(109,95,56,54,95,116,111,109,98,117,102,0),566]]);
      while (iconbellactiveO.length <= mapbufferE.length) {
         iconbellactiveO = "1";
         break;
      }
         umengb.push(3);
      if (!iconbellactiveO.endsWith(`${umengb.length}`)) {
          let reactnativejsC = 4.0;
          let starS: Array<any> = [506, 488];
          let nterstitialY: Array<any> = [581, 548, 387];
          let pointq = String.fromCharCode(103,108,97,115,115,95,105,95,56,0);
          let downarrowv = 5;
         iconbellactiveO = `${1 | downarrowv}`;
         reactnativejsC /= Math.max(parseInt(`${reactnativejsC}`), 5);
         starS = [starS.length];
         nterstitialY.push(starS.length / 1);
         pointq += `${nterstitialY.length ^ 2}`;
         downarrowv >>= Math.min(Math.abs(3 ^ nterstitialY.length), 2);
      }
      mbridgew += `${(String.fromCharCode(52,0) == iconbellactiveO ? target1.length : iconbellactiveO.length)}`;
      if (navigationz) {
         break;
      }
   } while ((penaltyshootT.startsWith(mbridgew)) && navigationz);
   while (1 <= (otherd.length / (Math.max(5, headerC)))) {
       let iconcalendart = 2.0;
       let libapminsighta7 = 1.0;
       let handlerp: Map<any, any> = new Map([[String.fromCharCode(97,95,53,57,95,102,97,117,108,116,121,0),false ], [String.fromCharCode(103,95,49,57,95,109,101,115,97,103,101,115,0),false ], [String.fromCharCode(99,97,110,116,95,102,95,50,48,0),false ]]);
       let readZ = String.fromCharCode(99,105,110,101,109,97,95,102,95,50,56,0);
         handlerp = new Map([[`${handlerp.size}`, readZ.length]]);
          let showlessr: Map<any, any> = new Map([[String.fromCharCode(104,95,56,57,95,111,110,116,114,111,108,0),379], [String.fromCharCode(111,117,116,112,117,116,95,100,95,54,49,0),831]]);
          let backiconmaskG = 3.0;
         handlerp.set(`${iconcalendart}`, showlessr.size - parseInt(`${iconcalendart}`));
         showlessr = new Map([[`${backiconmaskG}`, parseInt(`${backiconmaskG}`) ^ 2]]);
      for (let h = 0; h < 3; h++) {
          let mimoj = 2;
          let whitevideoliveR: Map<any, any> = new Map([[String.fromCharCode(121,95,53,57,95,118,100,97,116,97,0),334], [String.fromCharCode(99,95,54,51,95,115,104,111,114,116,102,108,111,97,116,0),41], [String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,51,95,54,53,0),981]]);
          let fullc = String.fromCharCode(114,95,52,57,95,98,97,115,101,110,97,109,101,0);
          let gpayX: Map<any, any> = new Map([[String.fromCharCode(107,95,53,57,95,101,120,112,105,114,101,115,0),376], [String.fromCharCode(101,120,112,108,97,105,110,95,103,95,53,0),380]]);
         handlerp = new Map([[`${iconcalendart}`, parseInt(`${iconcalendart}`) | 2]]);
         mimoj /= Math.max(1, 3 >> (Math.min(1, Math.abs(gpayX.size))));
         whitevideoliveR.set(`${mimoj}`, mimoj << (Math.min(Math.abs(3), 5)));
         fullc += `${gpayX.size}`;
      }
          let runtimek = 1.0;
         iconcalendart /= Math.max(3, parseFloat(`${readZ.length}`));
         runtimek += parseFloat(`${parseInt(`${runtimek}`)}`);
         readZ += `${(String.fromCharCode(83,0) == readZ ? readZ.length : handlerp.size)}`;
         libapminsighta7 /= Math.max(parseFloat(`${handlerp.size}`), 4);
       let t_positionn = String.fromCharCode(100,111,109,105,110,97,110,116,95,55,95,50,50,0);
       let tempX = false;
      for (let q = 0; q < 3; q++) {
         readZ += `${readZ.length}`;
      }
         tempX = readZ.length > 9 || 11.13 > iconcalendart;
      for (let q = 0; q < 2; q++) {
          let penaltyf = 5;
          let indexy = true;
          let spinnerg = 4;
          let textd: Array<any> = [String.fromCharCode(105,110,115,116,97,108,108,95,105,95,57,55,0), String.fromCharCode(116,114,117,110,95,57,95,50,52,0), String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,95,108,95,54,51,0)];
          let buildn = false;
         readZ = `${((buildn ? 5 : 1) >> (Math.min(Math.abs(handlerp.size), 1)))}`;
         penaltyf >>= Math.min(Math.abs(penaltyf % (Math.max(2, textd.length))), 4);
         indexy = !indexy;
         spinnerg *= spinnerg ^ textd.length;
         buildn = penaltyf <= 93 || !indexy;
      }
      for (let k = 0; k < 3; k++) {
          let whitesmalltickm = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,108,121,95,109,95,49,57,0);
          let goalC: Array<any> = [String.fromCharCode(99,108,101,97,114,97,108,108,95,55,95,55,54,0), String.fromCharCode(97,100,97,112,116,115,95,54,95,56,56,0), String.fromCharCode(115,117,98,116,114,97,99,116,101,100,95,104,95,54,56,0)];
          let relatedt = false;
         tempX = libapminsighta7 < 85.26;
         whitesmalltickm = `${(3 << (Math.min(2, Math.abs((relatedt ? 2 : 1)))))}`;
         goalC.push(whitesmalltickm.length);
         relatedt = goalC.length < 22;
      }
      otherd += `${parseInt(`${libapminsighta7}`) - 2}`;
      break;
   }
       let libturbomodulejsijni0 = String.fromCharCode(99,111,109,112,97,99,116,101,100,95,115,95,55,53,0);
      for (let o = 0; o < 2; o++) {
         libturbomodulejsijni0 += "2";
      }
      if (libturbomodulejsijni0 != String.fromCharCode(65,0)) {
         libturbomodulejsijni0 = `${libturbomodulejsijni0.length}`;
      }
         libturbomodulejsijni0 += `${libturbomodulejsijni0.length}`;
      mbridgew += `${(String.fromCharCode(98,0) == defaultteamJ ? defaultteamJ.length : routere.size)}`;

  for (const id of excludedIds) {

      mbridgew = `${1 + mbridgew.length}`;
   for (let w = 0; w < 1; w++) {
      defaultteamJ += "1";
   }
      dependenciesw -= parseInt(`${dependenciesw}`) & dependenciesn.length;
   let animationO = String.fromCharCode(54,57,106,57,112,122,52,109,117,0) == logouserw;
   do {
      logouserw += "1";
      if (animationO) {
         break;
      }
   } while (animationO && (storez == String.fromCharCode(119,0)));
      commentq = otherd.length == 9;
   let reddownarrowE = String.fromCharCode(97,105,98,95,56,115,0) == defaultteamJ;
   do {
       let questiconR: Array<any> = [124, 718, 254];
       let style_ = 4;
       let expiredG = 2.0;
       let patho = String.fromCharCode(109,97,110,116,105,115,115,97,115,95,111,95,54,53,0);
      let iconviewerK = questiconR.length >= 5234933;
      do {
         questiconR.push(parseInt(`${expiredG}`) | 3);
         if (iconviewerK) {
            break;
         }
      } while ((questiconR.includes(style_)) && iconviewerK);
          let iconviewera = 4;
          let topicz: Array<any> = [626, 401, 795];
          let cleara: Map<any, any> = new Map([[String.fromCharCode(113,95,50,50,95,108,115,119,115,117,116,105,108,115,0),false ], [String.fromCharCode(122,95,56,51,95,99,115,119,97,112,0),false ], [String.fromCharCode(97,95,49,53,95,108,105,98,118,112,120,0),false ]]);
         questiconR = [questiconR.length & parseInt(`${expiredG}`)];
         iconviewera += cleara.size ^ topicz.length;
         topicz.push(1 + topicz.length);
         cleara = new Map([[`${cleara.size}`, 2]]);
      while (2 == patho.length) {
         expiredG *= parseInt(`${expiredG}`);
         break;
      }
      while ((questiconR.length * 2) <= 5 && 2 <= (questiconR.length * patho.length)) {
         questiconR.push(parseInt(`${expiredG}`) * patho.length);
         break;
      }
      while (!patho.endsWith(`${expiredG}`)) {
         patho += "3";
         break;
      }
      for (let z = 0; z < 2; z++) {
         style_ |= questiconR.length;
      }
         patho += `${parseInt(`${expiredG}`) | patho.length}`;
          let leagueO: Map<any, any> = new Map([[String.fromCharCode(98,95,55,50,95,98,108,111,99,107,101,100,0),435], [String.fromCharCode(108,95,55,51,95,100,111,116,0),918], [String.fromCharCode(99,111,115,116,105,95,114,95,51,57,0),599]]);
          let filed_ = String.fromCharCode(118,108,98,117,102,95,112,95,56,57,0);
         expiredG *= 3;
         leagueO = new Map([[`${leagueO.size}`, filed_.length]]);
         filed_ += `${leagueO.size | 1}`;
      if ((style_ % (Math.max(questiconR.length, 8))) == 1) {
          let telegrams = String.fromCharCode(114,116,112,109,97,112,95,50,95,49,51,0);
          let basketballmatchdetailbgK = 4;
          let pauseI = 0.0;
          let brightnesso = 1;
          let orangetickj = true;
         style_ *= basketballmatchdetailbgK << (Math.min(3, Math.abs(2)));
         telegrams = `${(parseInt(`${pauseI}`) * (orangetickj ? 3 : 5))}`;
         basketballmatchdetailbgK ^= 2;
         pauseI *= parseFloat(`${brightnesso >> (Math.min(5, Math.abs(1)))}`);
         brightnesso &= telegrams.length;
      }
         expiredG *= 3;
       let whistlel = 3;
       let referrerI = 0;
          let greyu: Array<any> = [String.fromCharCode(101,118,101,114,121,95,51,95,57,55,0), String.fromCharCode(97,109,114,110,98,100,97,116,97,95,118,95,55,56,0), String.fromCharCode(107,95,51,50,95,114,101,118,97,108,105,100,97,116,105,111,110,0)];
          let turndownb = String.fromCharCode(115,117,98,108,97,121,101,114,115,95,104,95,51,57,0);
          let libyogaL = false;
         style_ *= turndownb.length;
         greyu = [greyu.length % (Math.max(4, greyu.length))];
         turndownb = `${greyu.length - 3}`;
      defaultteamJ += "1";
      if (reddownarrowE) {
         break;
      }
   } while (reddownarrowE && (!commentq || 2 == defaultteamJ.length));
    await deleteFile(id);
    
  }
};

const deleteFile = async (id: string) => {
  const cacheFolderPath = RNFetchBlob.fs.dirs.DocumentDir + '/videocache/';
  const targetFilePath = cacheFolderPath + `${id}.mp4`; 

  if (!(await RNFetchBlob.fs.exists(targetFilePath))) {
    
    return;
    
  }

  await RNFetchBlob.fs.unlink(targetFilePath);
  await deleteVodFromApiCache(id);
};

export const addIdToCache = async (id: string) => {
  const todayStr = new Date().toISOString().slice(0, 10);
  const cacheFileName = await getCacheFileName();
  if (!cacheFileName) {
    
    RNFetchBlob.fs.createFile(
      `${RNFetchBlob.fs.dirs.DocumentDir}/watched.${todayStr}`,
      '',
      'utf8',
    );
  }

  const watchedVidsPath = RNFetchBlob.fs.dirs.DocumentDir + `/${cacheFileName}`;

  
  
  

  const entry = `${id}|${todayStr}\n`;
  await RNFetchBlob.fs.appendFile(watchedVidsPath, entry, 'utf8');
  
};

export const getExcludedIds = async (): Promise<string[]> => {
  const cacheFileName = await getCacheFileName();
  const watchedVidsPath = RNFetchBlob.fs.dirs.DocumentDir + `/${cacheFileName}`;

  if (!(await RNFetchBlob.fs.exists(watchedVidsPath))) return []; 

  const watchedVids = (
    await RNFetchBlob.fs.readFile(watchedVidsPath, 'utf8')
  ).split('\n');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return watchedVids
    .map(vid => {
      const [id, dateStr] = vid.split('|');
      const date = new Date(dateStr);
      if (date < today) {
        return id.replace(/\x00/g, '');
      }
    })
    .filter(item => item != undefined);
};

const getCacheFileName = async () => {
       let mbbidT = String.fromCharCode(102,105,120,95,49,95,55,52,0);
    let cornerh = 3.0;
    let goalG = false;
    let shielddoneT = 0.0;
    let inactive7 = 2.0;
    let basketballtrophyq = String.fromCharCode(102,95,54,52,95,109,111,110,111,115,112,97,99,101,0);
    let current3: Array<any> = [295, 149];
    let linkE = String.fromCharCode(110,95,52,50,95,109,115,122,104,0);
    let minivoda = 3.0;
    let imagemanagerE = 3.0;
       let libglogK = 5.0;
       let calendar2 = String.fromCharCode(102,108,97,116,110,101,115,115,95,99,95,56,55,0);
       let iconsettingP: Map<any, any> = new Map([[String.fromCharCode(111,95,50,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0),896], [String.fromCharCode(103,117,97,114,100,95,52,95,55,51,0),433]]);
         calendar2 = `${parseInt(`${libglogK}`) % 3}`;
         libglogK += parseFloat(`${iconsettingP.size}`);
      if (2 < (calendar2.length >> (Math.min(Math.abs(2), 5)))) {
         calendar2 = `${(String.fromCharCode(48,0) == calendar2 ? iconsettingP.size : calendar2.length)}`;
      }
      while (!calendar2.endsWith(`${iconsettingP.size}`)) {
         calendar2 += "3";
         break;
      }
         libglogK -= parseFloat(`${iconsettingP.size}`);
       let photop: Map<any, any> = new Map([[String.fromCharCode(105,95,51,56,95,102,116,121,112,0),771], [String.fromCharCode(99,95,51,57,95,101,120,112,101,114,105,109,101,110,116,97,108,0),134], [String.fromCharCode(109,95,49,51,95,114,101,99,101,105,118,101,0),78]]);
      let source0 = String.fromCharCode(114,114,55,107,0) == calendar2;
      do {
         calendar2 = `${iconsettingP.size / 1}`;
         if (source0) {
            break;
         }
      } while ((5.93 <= (parseFloat(`${calendar2.length}`) * libglogK)) && source0);
      for (let k = 0; k < 3; k++) {
         libglogK /= Math.max(parseFloat(`${2}`), 5);
      }
         iconsettingP = new Map([[`${libglogK}`, calendar2.length % 3]]);
      mbbidT += "3";
      inactive7 += basketballtrophyq.length % 3;
   let ballS = goalG ? !goalG : goalG;
   do {
       let icondownimgc = String.fromCharCode(121,95,53,50,95,117,110,115,117,112,112,111,114,116,101,100,0);
       let attributedstringf: Array<any> = [String.fromCharCode(112,101,114,109,117,116,101,95,57,95,51,53,0), String.fromCharCode(105,116,111,97,95,56,95,54,55,0)];
       let knewarchdefaultsK = String.fromCharCode(102,95,51,54,0);
      while (3 == (4 % (Math.max(8, knewarchdefaultsK.length)))) {
         attributedstringf.push(attributedstringf.length);
         break;
      }
          let gifgoalbgi = String.fromCharCode(114,97,116,105,110,103,95,105,95,50,50,0);
         icondownimgc += "3";
         gifgoalbgi = `${1 + gifgoalbgi.length}`;
          let commonD = String.fromCharCode(116,104,105,99,107,110,101,115,115,95,57,95,56,51,0);
         icondownimgc += `${commonD.length / 2}`;
      if ((attributedstringf.length >> (Math.min(Math.abs(3), 4))) < 3 && (icondownimgc.length >> (Math.min(Math.abs(3), 4))) < 3) {
          let transferr: Array<any> = [88, 311, 136];
          let predictionarrowz: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,95,101,115,99,97,112,101,100,0),String.fromCharCode(103,95,55,55,95,115,117,98,105,109,97,103,101,0)], [String.fromCharCode(112,95,49,49,95,108,105,98,119,101,98,112,0),String.fromCharCode(117,95,55,95,115,116,114,105,112,115,0)], [String.fromCharCode(99,111,110,116,105,110,117,101,100,95,103,95,57,0),String.fromCharCode(104,95,55,52,95,110,111,114,109,97,108,105,122,101,0)]]);
         attributedstringf = [predictionarrowz.size % 1];
         transferr = [transferr.length];
         predictionarrowz.set(`${transferr.length}`, transferr.length);
      }
         knewarchdefaultsK = `${(icondownimgc == String.fromCharCode(76,0) ? icondownimgc.length : attributedstringf.length)}`;
          let mbjscommon7 = 3.0;
          let expiredk: Map<any, any> = new Map([[String.fromCharCode(111,112,97,100,95,119,95,53,57,0),String.fromCharCode(103,95,55,95,99,111,109,112,105,116,97,98,108,101,0)], [String.fromCharCode(103,95,52,54,95,100,105,103,105,116,0),String.fromCharCode(104,101,97,100,105,110,103,95,100,95,51,53,0)], [String.fromCharCode(97,115,115,101,109,98,108,101,100,95,119,95,50,54,0),String.fromCharCode(108,111,97,100,95,109,95,56,49,0)]]);
          let closeH = String.fromCharCode(104,95,50,51,95,99,114,101,97,116,105,110,103,0);
         attributedstringf = [3];
         mbjscommon7 *= parseFloat(`${parseInt(`${mbjscommon7}`) | expiredk.size}`);
         expiredk = new Map([[`${expiredk.size}`, expiredk.size / (Math.max(closeH.length, 2))]]);
         closeH += `${expiredk.size / (Math.max(closeH.length, 8))}`;
      while (!knewarchdefaultsK.endsWith(`${attributedstringf.length}`)) {
         attributedstringf = [3 ^ attributedstringf.length];
         break;
      }
         icondownimgc = `${knewarchdefaultsK.length}`;
      if (5 > (attributedstringf.length - 2) || 1 > (icondownimgc.length - 2)) {
          let mimey = false;
          let selectedN = false;
          let mailP = String.fromCharCode(120,95,54,95,99,111,110,116,97,105,110,101,114,0);
         attributedstringf.push(2 + mailP.length);
         mimey = (!selectedN ? mimey : !selectedN);
         mailP = `${((mimey ? 4 : 5) / 2)}`;
      }
      goalG = mbbidT.length >= 44;
      if (ballS) {
         break;
      }
   } while (ballS && (!linkE.endsWith(`${goalG}`)));
   let unimplementedviewJ = cornerh <= 7780943.0;
   do {
       let umengO = 4;
       let matchactiven = String.fromCharCode(102,117,108,108,95,105,95,51,54,0);
       let attributedstringg = String.fromCharCode(106,95,53,56,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
      for (let t = 0; t < 2; t++) {
         matchactiven += `${2 - matchactiven.length}`;
      }
      let bgvipxvod9 = 5379926 >= umengO;
      do {
         umengO ^= umengO & 2;
         if (bgvipxvod9) {
            break;
         }
      } while (((umengO ^ 4) > 3) && bgvipxvod9);
      let textS = matchactiven == String.fromCharCode(107,50,51,51,0);
      do {
         matchactiven = `${umengO / (Math.max(matchactiven.length, 1))}`;
         if (textS) {
            break;
         }
      } while ((3 >= (2 & matchactiven.length)) && textS);
         matchactiven = `${umengO / (Math.max(1, attributedstringg.length))}`;
         matchactiven = `${umengO | matchactiven.length}`;
      if (1 <= (umengO >> (Math.min(Math.abs(5), 3))) && 5 <= (matchactiven.length >> (Math.min(2, Math.abs(umengO))))) {
         matchactiven += `${1 << (Math.min(4, attributedstringg.length))}`;
      }
      let profilepicD = matchactiven == String.fromCharCode(115,98,100,119,50,0);
      do {
         matchactiven += `${matchactiven.length}`;
         if (profilepicD) {
            break;
         }
      } while ((matchactiven.endsWith(`${attributedstringg.length}`)) && profilepicD);
      if ((matchactiven.length << (Math.min(Math.abs(4), 1))) >= 2) {
         matchactiven = "2";
      }
      if (matchactiven != String.fromCharCode(87,0) && attributedstringg != String.fromCharCode(110,0)) {
         matchactiven = `${matchactiven.length - attributedstringg.length}`;
      }
      cornerh += parseInt(`${minivoda}`) >> (Math.min(basketballtrophyq.length, 4));
      if (unimplementedviewJ) {
         break;
      }
   } while ((parseInt(`${cornerh}`) <= mbbidT.length) && unimplementedviewJ);
   let subbasketballplayerY = mbbidT == String.fromCharCode(116,106,50,106,104,0);
   do {
      mbbidT = `${basketballtrophyq.length * 2}`;
      if (subbasketballplayerY) {
         break;
      }
   } while (subbasketballplayerY && (mbbidT.includes(basketballtrophyq)));
      cornerh += parseInt(`${cornerh}`) - 1;

  const filesInDocumentDir = await RNFetchBlob.fs.ls(
    RNFetchBlob.fs.dirs.DocumentDir,
  );

   if (parseInt(`${cornerh}`) <= mbbidT.length) {
       let faviconU = 3.0;
       let nextm = 1.0;
       let cornera: Array<any> = [String.fromCharCode(120,95,54,56,95,115,104,101,108,108,0), String.fromCharCode(101,110,97,98,108,101,95,97,95,52,51,0), String.fromCharCode(107,101,101,112,105,110,103,95,48,95,52,54,0)];
          let gestureso = false;
          let temperatureQ = 3.0;
          let arrowselectdownG = String.fromCharCode(105,95,53,53,95,97,102,102,101,99,116,101,100,0);
         cornera = [arrowselectdownG.length];
         gestureso = temperatureQ == temperatureQ;
         cornera = [parseInt(`${nextm}`)];
         faviconU -= parseFloat(`${cornera.length % (Math.max(1, 6))}`);
      if (1.23 >= (faviconU * 2.84) || (faviconU * 2.84) >= 5.35) {
         nextm -= parseFloat(`${parseInt(`${faviconU}`) >> (Math.min(1, Math.abs(3)))}`);
      }
         nextm *= parseFloat(`${cornera.length | 1}`);
         faviconU *= parseFloat(`${1}`);
         faviconU *= parseFloat(`${parseInt(`${nextm}`)}`);
      if (cornera.includes(nextm)) {
          let downarrowa = String.fromCharCode(112,95,56,57,95,114,101,112,108,105,101,115,0);
          let actionP: Array<any> = [517, 841, 588];
          let iconclosewhitebg8 = 5.0;
         nextm /= Math.max(parseFloat(`${parseInt(`${iconclosewhitebg8}`)}`), 4);
         downarrowa += `${actionP.length}`;
         actionP = [actionP.length + downarrowa.length];
      }
         nextm += parseFloat(`${3 & parseInt(`${faviconU}`)}`);
      cornerh += cornera.length;
   }
   while (4 <= (mbbidT.length - parseInt(`${cornerh}`))) {
      cornerh *= (parseInt(`${minivoda}`) >> (Math.min(1, Math.abs((goalG ? 4 : 5)))));
      break;
   }
   while (!linkE.endsWith(basketballtrophyq)) {
      linkE += `${mbbidT.length}`;
      break;
   }
       let fillo = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,110,95,119,95,49,48,0);
       let upgradej = false;
       let scheduleh = String.fromCharCode(112,111,108,101,95,110,95,55,54,0);
      while (fillo.length == 3) {
          let airbnbstarselectedF = String.fromCharCode(114,95,57,49,95,110,111,116,105,102,121,105,110,103,0);
          let libnms_ = String.fromCharCode(118,95,51,55,95,116,101,108,101,103,114,97,109,0);
          let nalyticsh = 4;
          let resultV = String.fromCharCode(112,111,105,110,116,111,99,116,95,119,95,57,49,0);
          let forwardz = 0.0;
         fillo += `${fillo.length ^ 2}`;
         airbnbstarselectedF = `${1 / (Math.max(3, nalyticsh))}`;
         libnms_ = `${1 & resultV.length}`;
         nalyticsh ^= (String.fromCharCode(51,0) == airbnbstarselectedF ? airbnbstarselectedF.length : nalyticsh);
         resultV += `${(String.fromCharCode(116,0) == resultV ? airbnbstarselectedF.length : resultV.length)}`;
         forwardz *= resultV.length;
         break;
      }
          let libjsinspectorh: Array<any> = [693, 55, 154];
          let langB: Array<any> = [864, 586, 377];
          let predictionbannerT = String.fromCharCode(104,95,49,53,95,109,101,97,115,117,114,101,109,101,110,116,0);
         scheduleh = "1";
         libjsinspectorh = [langB.length % (Math.max(1, 8))];
         langB = [libjsinspectorh.length & langB.length];
         predictionbannerT = `${libjsinspectorh.length % 2}`;
       let indexf = 3;
         upgradej = (indexf * scheduleh.length) == 51;
       let logouti = String.fromCharCode(99,111,109,112,111,110,101,110,116,115,95,115,95,50,50,0);
          let progressz = 5.0;
          let topicl = String.fromCharCode(109,95,51,54,95,111,114,116,104,111,103,111,110,97,108,105,122,101,0);
         upgradej = (70 == ((upgradej ? 70 : topicl.length) & topicl.length));
         progressz += parseFloat(`${3}`);
      for (let f = 0; f < 3; f++) {
          let bgvipxvodL = true;
          let agreement4 = 1;
          let modeN = String.fromCharCode(98,117,99,107,101,116,95,113,95,56,52,0);
         upgradej = !bgvipxvodL;
         agreement4 <<= Math.min(Math.abs(1), 2);
         modeN = `${modeN.length << (Math.min(Math.abs(3), 1))}`;
      }
      if ((indexf + 3) >= 1) {
          let filli = 3.0;
          let sortA: Array<any> = [String.fromCharCode(118,101,114,98,97,116,105,109,95,121,95,49,57,0), String.fromCharCode(112,114,102,95,51,95,55,52,0)];
         upgradej = (parseFloat(`${fillo.length}`) * filli) >= 38.7;
         filli += parseFloat(`${sortA.length}`);
         sortA.push(3);
      }
      let dark8 = String.fromCharCode(104,51,107,0) == scheduleh;
      do {
         scheduleh += `${logouti.length ^ 3}`;
         if (dark8) {
            break;
         }
      } while ((logouti == scheduleh) && dark8);
      shielddoneT /= Math.max(3, parseInt(`${inactive7}`) >> (Math.min(1, Math.abs(3))));
   if (2 < (mbbidT.length - 2)) {
      current3.push(3 >> (Math.min(Math.abs(parseInt(`${minivoda}`)), 4)));
   }
   let sportsY = 5416906.0 >= cornerh;
   do {
       let updatesj = String.fromCharCode(98,95,49,51,95,111,112,116,105,111,110,97,108,108,121,0);
       let downloadingc: Map<any, any> = new Map([[String.fromCharCode(115,116,114,102,117,110,99,95,115,95,55,51,0),360], [String.fromCharCode(108,95,49,56,95,115,116,97,103,101,0),888]]);
       let expiredkL: Array<any> = [631, 443];
       let membership3: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,101,118,101,114,121,0),675], [String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,118,95,54,50,0),693], [String.fromCharCode(100,116,111,114,95,55,95,54,54,0),229]]);
         expiredkL.push(membership3.size);
      while (4 > (expiredkL.length >> (Math.min(Math.abs(5), 1))) || 3 > (expiredkL.length >> (Math.min(Math.abs(5), 4)))) {
         membership3 = new Map([[`${downloadingc.size}`, updatesj.length >> (Math.min(2, Math.abs(downloadingc.size)))]]);
         break;
      }
      let homeinactive8 = expiredkL.length >= 9626828;
      do {
          let downarrowF = 4.0;
         expiredkL = [membership3.size + downloadingc.size];
         downarrowF -= parseFloat(`${parseInt(`${downarrowF}`)}`);
         if (homeinactive8) {
            break;
         }
      } while (homeinactive8 && (4 <= (expiredkL.length | 5)));
          let mbbidj = 0.0;
          let snewsn: Array<any> = [330, 745, 531];
          let bgvipsportr = String.fromCharCode(117,95,50,50,95,114,97,116,101,115,0);
         expiredkL = [parseInt(`${mbbidj}`)];
         mbbidj += 3;
         snewsn = [bgvipsportr.length];
         bgvipsportr = `${bgvipsportr.length}`;
         downloadingc.set(`${expiredkL.length}`, expiredkL.length << (Math.min(4, Math.abs(membership3.size))));
      if (3 < (expiredkL.length & 1) && 1 < (membership3.size & expiredkL.length)) {
         membership3 = new Map([[`${downloadingc.size}`, 3]]);
      }
       let notificationgrayt: Array<any> = [182, 711];
      for (let p = 0; p < 1; p++) {
          let components7 = 3.0;
          let chatroombackgroundi: Map<any, any> = new Map([[String.fromCharCode(108,95,48,95,102,105,108,108,0),243], [String.fromCharCode(100,97,116,97,115,95,102,95,49,51,0),413], [String.fromCharCode(101,95,56,52,95,99,117,114,116,97,105,110,0),961]]);
          let catagoryx = 1.0;
          let smallX = false;
         expiredkL.push(membership3.size);
         components7 /= Math.max(5, parseInt(`${catagoryx}`));
         chatroombackgroundi.set(`${components7}`, chatroombackgroundi.size - 3);
         smallX = 83.74 <= catagoryx && 83.74 <= components7;
      }
      if ((updatesj.length - downloadingc.size) >= 5) {
         downloadingc = new Map([[`${notificationgrayt.length}`, notificationgrayt.length]]);
      }
         notificationgrayt = [expiredkL.length >> (Math.min(Math.abs(1), 2))];
      if (Array.from(membership3.keys()).includes(`${notificationgrayt.length}`)) {
          let plusM = String.fromCharCode(98,95,55,95,106,100,104,117,102,102,0);
          let hometeamfieldr: Array<any> = [255, 566, 822];
         notificationgrayt.push(plusM.length * 1);
         plusM = `${hometeamfieldr.length}`;
         hometeamfieldr = [hometeamfieldr.length | hometeamfieldr.length];
      }
      let static_id = expiredkL.length <= 9646645;
      do {
         expiredkL = [updatesj.length];
         if (static_id) {
            break;
         }
      } while (static_id && ((membership3.size + 5) == 2 && 2 == (expiredkL.length + 5)));
      cornerh *= parseInt(`${inactive7}`) / 3;
      if (sportsY) {
         break;
      }
   } while (sportsY && (basketballtrophyq.endsWith(`${cornerh}`)));
  const fileName = (await filesInDocumentDir).find((file: string) =>
    file.match(/watched\.\d{4}-\d{2}-\d{2}/),
  );
  return fileName ?? null;
};

export const checkExpiredCacheFile = async (days: number) => {
  
  
  

  const cacheFileName = await getCacheFileName();
  if (!cacheFileName) return;
  const [_, dateCreatedStr] = cacheFileName.split('.');
  const dateCreated = new Date(dateCreatedStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffDays = Math.ceil(
    (today.valueOf() - dateCreated.valueOf()) / (1000 * 60 * 60 * 24),
  );

  if (diffDays >= days) {
    
    await RNFetchBlob.fs.unlink(
      `${RNFetchBlob.fs.dirs.DocumentDir}/${cacheFileName}`,
    );
    await clearMinivodApiCache()
  } else {
    
  }
};

export const getIsApiCacheExist = async () => {
       let long_zn: Array<any> = [706, 301];
    let footballfieldV = true;
    let kickh = String.fromCharCode(100,101,106,117,100,100,101,114,95,102,95,51,50,0);
    let iconsaveimageT = String.fromCharCode(100,121,97,100,105,99,95,56,95,55,57,0);
    let tailK = 0.0;
    let configure4 = String.fromCharCode(110,95,53,54,95,109,105,103,114,97,116,105,110,103,0);
    let ajaxT = String.fromCharCode(100,101,112,115,95,57,95,57,52,0);
    let yellowtoredo: Map<any, any> = new Map([[String.fromCharCode(104,95,55,48,95,99,102,101,110,99,0),149], [String.fromCharCode(108,97,115,116,110,111,100,101,95,113,95,52,51,0),400], [String.fromCharCode(105,110,112,99,98,95,55,95,56,56,0),991]]);
    let template_lpM = 4.0;
    let reactnativejsR = String.fromCharCode(99,111,101,102,115,95,104,95,54,54,0);
    let reactnativejsg = String.fromCharCode(121,95,50,49,95,101,120,105,116,0);
    let bodanB = 3.0;
    let iconviewergif1 = 5.0;
    let formn: Array<any> = [712, 300];
   for (let z = 0; z < 3; z++) {
      reactnativejsg += `${reactnativejsR.length / 3}`;
   }
       let homeiconr: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,110,117,109,115,0),true ], [String.fromCharCode(99,95,51,51,95,99,105,114,99,117,108,97,116,105,110,103,0),true ]]);
       let bottom7: Map<any, any> = new Map([[String.fromCharCode(99,111,109,97,110,100,95,53,95,56,55,0),518], [String.fromCharCode(122,95,57,56,95,114,97,110,107,115,0),998]]);
      let mapbufferj = homeiconr.size >= 5387946;
      do {
         homeiconr = new Map([[`${bottom7.size}`, homeiconr.size]]);
         if (mapbufferj) {
            break;
         }
      } while ((bottom7.size > 4) && mapbufferj);
         bottom7.set(`${bottom7.size}`, bottom7.size * 2);
         bottom7.set(`${bottom7.size}`, bottom7.size);
      if (bottom7.size > homeiconr.size) {
         homeiconr = new Map([[`${bottom7.size}`, homeiconr.size | bottom7.size]]);
      }
      while (!Array.from(homeiconr.values()).includes(bottom7.size)) {
          let upgradet = 4.0;
          let starN = false;
          let inouttargetredW = 0;
          let zhubom = String.fromCharCode(119,105,114,101,102,114,97,109,101,95,104,95,56,48,0);
          let liveU: Map<any, any> = new Map([[String.fromCharCode(115,116,97,110,100,97,114,100,95,99,95,51,57,0),true ], [String.fromCharCode(116,120,116,95,122,95,57,52,0),false ]]);
         homeiconr.set(`${bottom7.size}`, 3);
         upgradet += (parseFloat(`${String.fromCharCode(57,0) == zhubom ? zhubom.length : parseInt(`${upgradet}`)}`));
         starN = upgradet < 100.58;
         inouttargetredW %= Math.max((zhubom == String.fromCharCode(90,0) ? inouttargetredW : zhubom.length), 1);
         liveU.set(`${upgradet}`, liveU.size & 2);
         break;
      }
      while ((3 >> (Math.min(5, Math.abs(bottom7.size)))) <= 4 || 3 <= (homeiconr.size >> (Math.min(Math.abs(3), 4)))) {
         bottom7 = new Map([[`${bottom7.size}`, homeiconr.size % (Math.max(bottom7.size, 9))]]);
         break;
      }
      configure4 = `${parseInt(`${tailK}`) & long_zn.length}`;
      reactnativejsR = `${iconsaveimageT.length}`;
   for (let i = 0; i < 1; i++) {
      reactnativejsR = `${configure4.length}`;
   }
   for (let s = 0; s < 1; s++) {
      tailK -= reactnativejsg.length << (Math.min(configure4.length, 5));
   }
   let dplusk = reactnativejsg.length >= 9511225;
   do {
       let shrunkI = String.fromCharCode(109,95,53,48,95,115,98,114,101,115,101,114,118,101,0);
       let singaporeT = 1.0;
       let libreanimatedx = String.fromCharCode(108,115,112,102,108,112,99,95,52,95,50,53,0);
       let eacto = 0;
         singaporeT -= parseFloat(`${2}`);
      for (let i = 0; i < 3; i++) {
          let shoot_: Map<any, any> = new Map([[String.fromCharCode(120,95,52,95,105,102,111,114,109,97,116,0),true ], [String.fromCharCode(99,114,101,97,116,101,95,100,95,56,53,0),true ]]);
          let gpayn = String.fromCharCode(109,97,110,97,103,101,100,95,102,95,57,0);
         shrunkI += "1";
         shoot_ = new Map([[`${shoot_.size}`, 1]]);
         gpayn = `${gpayn.length}`;
      }
         shrunkI = `${parseInt(`${singaporeT}`) + 1}`;
      while ((singaporeT * 4.68) <= 4.3) {
          let hongkongI = 4.0;
         singaporeT /= Math.max(3, parseFloat(`${parseInt(`${singaporeT}`)}`));
         hongkongI -= 2 | parseInt(`${hongkongI}`);
         break;
      }
          let foreground1 = 2.0;
          let libreactperfloggerjnib = 4;
         singaporeT /= Math.max(parseFloat(`${libreanimatedx.length - 2}`), 3);
         foreground1 /= Math.max(4, parseFloat(`${1}`));
         libreactperfloggerjnib %= Math.max(3, parseInt(`${foreground1}`) - libreactperfloggerjnib);
      let homeplayer9 = libreanimatedx.length <= 9168435;
      do {
         libreanimatedx += `${eacto & 1}`;
         if (homeplayer9) {
            break;
         }
      } while (homeplayer9 && (libreanimatedx.length < parseInt(`${singaporeT}`)));
          let iconwatch9 = 5;
          let ajaxq: Map<any, any> = new Map([[String.fromCharCode(97,95,56,49,95,98,105,110,107,97,117,100,105,111,0),String.fromCharCode(109,97,112,95,121,95,52,48,0)], [String.fromCharCode(111,95,57,56,95,100,97,116,97,98,108,111,99,107,0),String.fromCharCode(107,95,54,51,95,105,110,116,101,114,108,101,97,118,101,0)], [String.fromCharCode(109,101,114,103,105,110,103,95,107,95,56,57,0),String.fromCharCode(97,95,55,57,95,118,100,97,115,104,101,114,0)]]);
         libreanimatedx += `${shrunkI.length}`;
         iconwatch9 |= 2;
         ajaxq = new Map([[`${ajaxq.size}`, ajaxq.size]]);
          let showP = 0;
          let arrowrightwithtail0 = String.fromCharCode(117,110,99,104,97,110,103,101,100,95,49,95,49,57,0);
          let yellowcirclebgl = 1.0;
         shrunkI = `${1 / (Math.max(3, eacto))}`;
         showP += 2;
         arrowrightwithtail0 = `${2 | parseInt(`${yellowcirclebgl}`)}`;
         yellowcirclebgl *= (parseFloat(`${String.fromCharCode(118,0) == arrowrightwithtail0 ? parseInt(`${yellowcirclebgl}`) : arrowrightwithtail0.length}`));
         shrunkI = `${1 & libreanimatedx.length}`;
          let roundY: Map<any, any> = new Map([[String.fromCharCode(115,113,117,97,114,101,100,95,118,95,56,56,0),510], [String.fromCharCode(115,95,54,51,95,112,103,105,100,120,0),64]]);
          let styleP = String.fromCharCode(118,98,108,101,95,119,95,51,57,0);
          let gesturese = String.fromCharCode(97,100,109,105,110,95,52,95,50,50,0);
         shrunkI = "3";
         roundY = new Map([[`${roundY.size}`, gesturese.length * 2]]);
         styleP = `${gesturese.length / (Math.max(6, roundY.size))}`;
         singaporeT *= parseFloat(`${shrunkI.length >> (Math.min(Math.abs(1), 4))}`);
         singaporeT -= parseFloat(`${shrunkI.length + 3}`);
      reactnativejsg = `${((footballfieldV ? 2 : 4) >> (Math.min(configure4.length, 1)))}`;
      if (dplusk) {
         break;
      }
   } while ((4 >= (parseInt(`${tailK}`) * reactnativejsg.length)) && dplusk);
   let mbjscommonm = String.fromCharCode(50,116,106,48,0) == kickh;
   do {
      kickh = `${configure4.length + reactnativejsg.length}`;
      if (mbjscommonm) {
         break;
      }
   } while (mbjscommonm && ((parseInt(`${template_lpM}`) + kickh.length) == 1));
   let vipsporty = reactnativejsg.length >= 9056019;
   do {
      reactnativejsg += `${ajaxT.length}`;
      if (vipsporty) {
         break;
      }
   } while (vipsporty && (long_zn.length < reactnativejsg.length));
   let iconwatchnowJ = 8602391 >= yellowtoredo.size;
   do {
      yellowtoredo = new Map([[`${footballfieldV}`, (iconsaveimageT == String.fromCharCode(70,0) ? (footballfieldV ? 5 : 3) : iconsaveimageT.length)]]);
      if (iconwatchnowJ) {
         break;
      }
   } while (((5 | configure4.length) < 2 && (configure4.length | 5) < 5) && iconwatchnowJ);
   for (let u = 0; u < 3; u++) {
      reactnativejsR = `${parseInt(`${tailK}`)}`;
   }
   while (1 >= yellowtoredo.size) {
      yellowtoredo = new Map([[reactnativejsg, (configure4 == String.fromCharCode(71,0) ? reactnativejsg.length : configure4.length)]]);
      break;
   }
   let basketballdetailsbg5 = configure4 == String.fromCharCode(116,106,118,118,106,100,48,122,116,0);
   do {
      configure4 = `${ajaxT.length - iconsaveimageT.length}`;
      if (basketballdetailsbg5) {
         break;
      }
   } while ((configure4.length > 1) && basketballdetailsbg5);
      template_lpM += parseFloat(`${parseInt(`${tailK}`) ^ kickh.length}`);

  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';

      kickh += `${parseInt(`${bodanB}`) & 1}`;
   if ((iconsaveimageT.length * 1) == 2) {
      template_lpM /= Math.max((parseFloat(`${reactnativejsg == String.fromCharCode(56,0) ? long_zn.length : reactnativejsg.length}`)), 1);
   }
   if (3 == long_zn.length) {
      long_zn = [yellowtoredo.size >> (Math.min(5, Math.abs(parseInt(`${bodanB}`))))];
   }
      tailK *= parseInt(`${tailK}`) & yellowtoredo.size;
   if ((yellowtoredo.size % 4) == 3 && 4 == (ajaxT.length % (Math.max(5, yellowtoredo.size)))) {
       let loadingP = 5.0;
       let playershirtw = String.fromCharCode(116,95,53,55,95,111,103,103,118,111,114,98,105,115,0);
       let connectionP: Map<any, any> = new Map([[String.fromCharCode(114,95,52,51,95,98,111,111,115,116,0),341], [String.fromCharCode(109,117,115,105,99,95,108,95,52,57,0),977]]);
         connectionP = new Map([[`${connectionP.size}`, (playershirtw == String.fromCharCode(120,0) ? connectionP.size : playershirtw.length)]]);
          let tickX = 5.0;
         connectionP.set(playershirtw, parseInt(`${loadingP}`));
         tickX *= parseInt(`${tickX}`);
      for (let c = 0; c < 2; c++) {
         loadingP += parseFloat(`${playershirtw.length}`);
      }
      for (let w = 0; w < 3; w++) {
         playershirtw += `${parseInt(`${loadingP}`) / (Math.max(5, connectionP.size))}`;
      }
         loadingP *= parseFloat(`${2 & connectionP.size}`);
      for (let w = 0; w < 3; w++) {
         connectionP.set(`${playershirtw}`, playershirtw.length * connectionP.size);
      }
      while (2.11 > (5.24 * loadingP) || (loadingP * 5.24) > 4.26) {
         loadingP /= Math.max(parseFloat(`${playershirtw.length | 1}`), 2);
         break;
      }
       let gradlew0 = false;
         connectionP = new Map([[`${connectionP.size}`, ((gradlew0 ? 2 : 4) / (Math.max(7, connectionP.size)))]]);
      ajaxT = `${1 << (Math.min(5, long_zn.length))}`;
   }
       let defaultpredictionprofilet: Map<any, any> = new Map([[String.fromCharCode(111,95,52,56,95,115,121,109,98,111,108,115,0),245], [String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,115,95,54,50,0),200], [String.fromCharCode(115,112,97,114,115,101,110,101,115,115,95,51,95,50,49,0),446]]);
       let iconpointscoren = 2.0;
       let privilegeA = 4.0;
         privilegeA += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${privilegeA}`)), 2))}`);
          let bangP = String.fromCharCode(118,95,51,56,95,102,105,120,117,112,0);
         iconpointscoren -= parseFloat(`${parseInt(`${iconpointscoren}`) - 2}`);
         bangP = `${bangP.length}`;
      iconviewergif1 *= parseFloat(`${3 | parseInt(`${tailK}`)}`);
      defaultpredictionprofilet = new Map([[`${defaultpredictionprofilet.size}`, 2 << (Math.min(2, Math.abs(defaultpredictionprofilet.size)))]]);
   let nterstitialK = kickh.length >= 8198820;
   do {
      kickh += "3";
      if (nterstitialK) {
         break;
      }
   } while ((1.36 > (template_lpM * 4.56)) && nterstitialK);
      long_zn.push(reactnativejsR.length);
      iconsaveimageT += `${yellowtoredo.size + configure4.length}`;
      bodanB /= Math.max(1, configure4.length / (Math.max(kickh.length, 9)));
   while (3 > (parseInt(`${iconviewergif1}`) * ajaxT.length) || 3.2 > (parseFloat(`${ajaxT.length}`) * iconviewergif1)) {
      iconviewergif1 += parseFloat(`${kickh.length - 1}`);
      break;
   }
   while (5 == (2 + parseInt(`${tailK}`)) || (iconsaveimageT.length + 2) == 1) {
      iconsaveimageT = `${reactnativejsg.length + 3}`;
      break;
   }
       let neonZ = 1.0;
       let darkI = String.fromCharCode(110,98,112,112,95,102,95,50,52,0);
          let sportsg = String.fromCharCode(122,95,57,54,95,99,103,105,109,97,103,101,0);
          let encryptorF = String.fromCharCode(98,101,97,116,95,101,95,52,0);
         neonZ -= encryptorF.length;
         sportsg = `${sportsg.length >> (Math.min(sportsg.length, 5))}`;
         encryptorF = "3";
       let libcxxcomponentst: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,119,97,114,100,115,95,110,95,57,50,0),257], [String.fromCharCode(100,95,49,50,95,116,105,109,101,115,116,97,109,112,0),174]]);
      if (1 == darkI.length) {
         libcxxcomponentst.set(darkI, libcxxcomponentst.size ^ 3);
      }
      if (2.96 < (1.69 * neonZ) && (neonZ * 1.69) < 1.49) {
          let graph0 = 1.0;
         neonZ /= Math.max(4, parseInt(`${graph0}`));
      }
      let libnmsQ = String.fromCharCode(120,98,53,117,0) == darkI;
      do {
         darkI = `${darkI.length + parseInt(`${neonZ}`)}`;
         if (libnmsQ) {
            break;
         }
      } while (((libcxxcomponentst.size << (Math.min(Math.abs(2), 2))) <= 1) && libnmsQ);
      for (let q = 0; q < 1; q++) {
          let ccdfbdabcabbbedbs: Array<any> = [145, 528];
          let vipsportW = 0;
          let abidetect_ = String.fromCharCode(115,105,103,110,117,109,95,105,95,53,54,0);
          let iconpointscore6: Array<any> = [String.fromCharCode(116,95,49,57,95,97,99,101,115,115,111,114,121,0), String.fromCharCode(121,95,55,52,95,105,110,100,101,112,101,110,100,101,110,116,0)];
         neonZ += iconpointscore6.length;
         ccdfbdabcabbbedbs.push((abidetect_ == String.fromCharCode(71,0) ? ccdfbdabcabbbedbs.length : abidetect_.length));
         vipsportW -= vipsportW & abidetect_.length;
         iconpointscore6.push(abidetect_.length * 1);
      }
      reactnativejsg += `${2 & parseInt(`${iconviewergif1}`)}`;

  return await RNFetchBlob.fs.exists(apiCacheFilePath);
};

export const getApiCache = async () => {
       let nativeexq = 5;
    let penaltygoalp: Array<any> = [910, 879, 938];
    let floating6 = 4.0;
    let reactnativejs7: Array<any> = [851, 640, 327];
    let yellowvideolives = 3;
    let loginsuccess6 = 3.0;
    let homet = 2.0;
    let closeu = 4.0;
    let disconnectedU = 5;
    let cornerkick5 = String.fromCharCode(114,95,49,52,95,115,116,115,100,0);
    let utilsm = String.fromCharCode(113,95,49,49,95,99,102,104,100,0);
   let predictionactivec = disconnectedU >= 8240557;
   do {
       let iconarrowrightorangeg = 5.0;
       let policyW = String.fromCharCode(104,95,50,49,95,115,101,108,102,105,101,0);
       let small7 = String.fromCharCode(105,110,116,114,101,112,111,108,95,119,95,57,56,0);
       let resultR: Array<any> = [993, 857, 878];
       let configure1 = 3;
       let moduleC = 2;
      let drag9 = resultR.length >= 8866812;
      do {
         resultR = [1 / (Math.max(8, parseInt(`${iconarrowrightorangeg}`)))];
         if (drag9) {
            break;
         }
      } while (drag9 && (resultR.length < 1));
          let reactnativeultimatelistviewL = String.fromCharCode(110,95,57,48,95,115,97,116,105,115,102,105,101,100,0);
          let pauseI = String.fromCharCode(109,98,117,102,95,109,95,53,0);
         small7 = `${1 + parseInt(`${iconarrowrightorangeg}`)}`;
         reactnativeultimatelistviewL = `${pauseI.length / 2}`;
         pauseI += `${reactnativeultimatelistviewL.length}`;
       let nnewarchdefaultsr = 4.0;
         policyW += `${resultR.length | small7.length}`;
         moduleC %= Math.max(configure1, 4);
         nnewarchdefaultsr /= Math.max(parseFloat(`${parseInt(`${iconarrowrightorangeg}`) % (Math.max(2, 8))}`), 1);
      if (3.57 > (moduleC / (Math.max(2, nnewarchdefaultsr)))) {
         moduleC /= Math.max(policyW.length, 1);
      }
          let baidue = false;
          let configs = 1;
          let libfabricjniF = String.fromCharCode(108,111,97,116,95,121,95,51,48,0);
         iconarrowrightorangeg *= parseInt(`${iconarrowrightorangeg}`) - 2;
         baidue = libfabricjniF.length >= 51;
         configs += (libfabricjniF.length >> (Math.min(5, Math.abs((baidue ? 2 : 1)))));
      for (let f = 0; f < 2; f++) {
          let iconclosewhitebgM = 3;
          let reactnavigationi = String.fromCharCode(99,95,52,51,95,99,111,109,112,97,99,116,101,100,0);
          let otherX = String.fromCharCode(98,95,53,49,95,117,110,115,111,114,116,101,100,0);
          let fullscreenmaxj = String.fromCharCode(107,95,52,52,95,118,112,99,120,0);
         moduleC >>= Math.min(5, Math.abs(2 << (Math.min(2, otherX.length))));
         iconclosewhitebgM ^= fullscreenmaxj.length;
         reactnavigationi += `${fullscreenmaxj.length % (Math.max(3, 5))}`;
         otherX += `${reactnavigationi.length}`;
      }
      while ((iconarrowrightorangeg + nnewarchdefaultsr) <= 2.96 && 4.67 <= (2.96 + nnewarchdefaultsr)) {
          let smallW = String.fromCharCode(118,95,49,53,95,97,117,116,111,98,97,110,104,0);
          let episodeq = String.fromCharCode(98,95,51,55,95,115,111,109,101,116,104,105,110,103,0);
          let sports0 = String.fromCharCode(105,110,102,101,114,95,48,95,52,57,0);
          let subbasketballplayerO = String.fromCharCode(104,95,50,49,95,115,116,114,117,99,116,117,114,101,115,0);
          let middlebrightness4 = false;
         iconarrowrightorangeg += sports0.length & subbasketballplayerO.length;
         smallW = `${episodeq.length ^ 1}`;
         episodeq = `${smallW.length << (Math.min(3, episodeq.length))}`;
         sports0 = `${((middlebrightness4 ? 4 : 4) << (Math.min(smallW.length, 4)))}`;
         subbasketballplayerO += `${(3 & (middlebrightness4 ? 5 : 1))}`;
         break;
      }
      for (let g = 0; g < 3; g++) {
          let redgoalQ: Array<any> = [654, 604];
          let stats2 = String.fromCharCode(120,95,49,48,95,115,108,105,100,101,115,104,111,119,0);
         moduleC &= 2;
         redgoalQ = [stats2.length];
         stats2 += `${redgoalQ.length / (Math.max(7, stats2.length))}`;
      }
      disconnectedU <<= Math.min(1, Math.abs(3));
      if (predictionactivec) {
         break;
      }
   } while (((1 >> (Math.min(5, Math.abs(disconnectedU)))) > 4 && (utilsm.length >> (Math.min(3, Math.abs(disconnectedU)))) > 1) && predictionactivec);
   let shirtR = 8535168 <= disconnectedU;
   do {
      disconnectedU |= 1 | yellowvideolives;
      if (shirtR) {
         break;
      }
   } while (shirtR && (disconnectedU < closeu));
      nativeexq &= parseInt(`${floating6}`) << (Math.min(2, Math.abs(nativeexq)));
   for (let a = 0; a < 1; a++) {
      reactnativejs7.push(parseInt(`${closeu}`));
   }

  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';

       let icondownimgY = true;
         icondownimgY = !icondownimgY;
         icondownimgY = !icondownimgY;
      while (icondownimgY) {
         icondownimgY = (!icondownimgY ? icondownimgY : !icondownimgY);
         break;
      }
      closeu /= Math.max(1, parseFloat(`${utilsm.length & 3}`));
       let materialq: Array<any> = [499, 306, 796];
      if ((materialq.length | 1) == 5 && (materialq.length | 1) == 5) {
         materialq = [materialq.length];
      }
       let awayplayeru = String.fromCharCode(99,108,111,115,101,95,106,95,57,53,0);
      if (4 > (materialq.length - 4) || (awayplayeru.length - materialq.length) > 4) {
          let main_pU = 1.0;
          let iconadslinkJ = 3;
          let playE = String.fromCharCode(109,117,115,120,95,115,95,49,49,0);
          let root5 = 5.0;
          let libmapbufferjnir = 2.0;
         awayplayeru += `${parseInt(`${root5}`)}`;
         main_pU -= parseInt(`${main_pU}`);
         iconadslinkJ %= Math.max(2 + playE.length, 3);
         playE = `${iconadslinkJ & 2}`;
         root5 += (parseFloat(`${playE == String.fromCharCode(74,0) ? playE.length : parseInt(`${main_pU}`)}`));
         libmapbufferjnir += (playE == String.fromCharCode(56,0) ? playE.length : parseInt(`${libmapbufferjnir}`));
      }
      loginsuccess6 -= 1;
      yellowvideolives %= Math.max(2, penaltygoalp.length);
   for (let p = 0; p < 2; p++) {
      homet *= parseFloat(`${disconnectedU | parseInt(`${loginsuccess6}`)}`);
   }

  if (await getIsApiCacheExist()) {

       let cleara: Array<any> = [825, 23];
          let gesturess = String.fromCharCode(101,95,56,95,110,105,99,101,108,121,0);
          let predictionwin0 = String.fromCharCode(108,105,110,107,105,110,103,95,52,95,57,49,0);
          let analyticx: Array<any> = [550, 915, 686];
         cleara = [cleara.length >> (Math.min(Math.abs(2), 2))];
         gesturess += `${predictionwin0.length}`;
         predictionwin0 += `${predictionwin0.length - 1}`;
         analyticx.push(2);
         cleara = [cleara.length & 2];
          let benefitc = false;
         cleara.push(cleara.length);
      homet += parseFloat(`${2}`);
   if (cornerkick5.length == parseInt(`${homet}`)) {
      cornerkick5 += `${nativeexq / (Math.max(penaltygoalp.length, 6))}`;
   }
   for (let m = 0; m < 3; m++) {
       let gifgoal_ = String.fromCharCode(111,95,53,56,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
       let eventk = String.fromCharCode(97,95,55,55,95,109,105,112,115,0);
       let icondefaultthumbnailp = false;
         icondefaultthumbnailp = 10 < eventk.length;
         eventk += `${(gifgoal_ == String.fromCharCode(83,0) ? (icondefaultthumbnailp ? 3 : 3) : gifgoal_.length)}`;
      while (!icondefaultthumbnailp) {
          let animationsD = String.fromCharCode(108,95,54,49,95,117,117,105,100,117,115,109,116,0);
          let commonA = String.fromCharCode(99,111,110,110,101,99,116,120,95,121,95,55,49,0);
          let defaultroombgX = String.fromCharCode(116,95,57,55,95,98,117,102,114,101,102,0);
          let notificationr = false;
          let gemfileJ: Map<any, any> = new Map([[String.fromCharCode(114,95,50,49,95,115,112,108,105,116,115,0),914], [String.fromCharCode(117,110,105,119,103,116,95,107,95,52,54,0),249]]);
         icondefaultthumbnailp = eventk.includes(`${icondefaultthumbnailp}`);
         animationsD = `${animationsD.length % (Math.max(6, defaultroombgX.length))}`;
         commonA += `${commonA.length ^ defaultroombgX.length}`;
         notificationr = String.fromCharCode(106,0) == animationsD;
         gemfileJ = new Map([[defaultroombgX, (defaultroombgX.length & (notificationr ? 3 : 3))]]);
         break;
      }
       let foregroundn = 1.0;
         foregroundn -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${foregroundn}`)), 4))}`);
         foregroundn *= (parseFloat(`${eventk == String.fromCharCode(71,0) ? parseInt(`${foregroundn}`) : eventk.length}`));
         eventk = `${parseInt(`${foregroundn}`) / 1}`;
         gifgoal_ += `${parseInt(`${foregroundn}`) & 3}`;
         eventk += `${(gifgoal_ == String.fromCharCode(66,0) ? gifgoal_.length : eventk.length)}`;
      disconnectedU >>= Math.min(utilsm.length, 4);
   }
       let logouserK = String.fromCharCode(109,95,49,49,95,115,119,105,112,101,100,0);
       let livenodatabgimgl = false;
       let tempnodataj = 0.0;
       let model_ = 5.0;
       let defaultprofilepico = 1.0;
         tempnodataj += parseFloat(`${parseInt(`${defaultprofilepico}`)}`);
      while (tempnodataj <= model_) {
          let yellowcirclebgg = String.fromCharCode(104,95,52,55,95,112,117,114,112,111,115,101,0);
          let homeinactivea = 1;
          let basketballmatchdetailbgi = String.fromCharCode(107,95,53,50,95,117,110,114,101,102,101,114,101,110,99,101,0);
          let libreactnativeblobl = 4.0;
         tempnodataj -= parseFloat(`${3 << (Math.min(4, yellowcirclebgg.length))}`);
         yellowcirclebgg = `${parseInt(`${libreactnativeblobl}`) & basketballmatchdetailbgi.length}`;
         homeinactivea >>= Math.min(Math.abs(parseInt(`${libreactnativeblobl}`)), 4);
         basketballmatchdetailbgi += `${basketballmatchdetailbgi.length ^ 2}`;
         break;
      }
      if ((2.75 * defaultprofilepico) > 3.100 && 2.75 > (tempnodataj * defaultprofilepico)) {
          let episode9 = true;
          let buildC = String.fromCharCode(110,95,51,48,95,108,112,99,109,0);
         defaultprofilepico *= parseFloat(`${buildC.length}`);
         episode9 = !episode9 || !episode9;
         buildC += `${((episode9 ? 4 : 2))}`;
      }
      let smallbrightness0 = model_ <= 5999580.0;
      do {
         model_ /= Math.max(parseFloat(`${1}`), 1);
         if (smallbrightness0) {
            break;
         }
      } while ((5.89 >= model_ && 3.80 >= (5.89 / (Math.max(3, model_)))) && smallbrightness0);
         model_ -= (parseFloat(`${(livenodatabgimgl ? 4 : 3) % (Math.max(parseInt(`${model_}`), 9))}`));
          let iconsharefriends4 = 5;
          let iconcurrentmatcht = String.fromCharCode(98,95,55,57,95,114,101,116,114,121,0);
         livenodatabgimgl = (model_ + parseFloat(`${iconcurrentmatcht.length}`)) == 35.74;
         iconsharefriends4 /= Math.max(iconsharefriends4, 2);
         iconcurrentmatcht = "1";
      if (4 < (parseInt(`${model_}`) / (Math.max(logouserK.length, 9)))) {
          let tempnodatagifu: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,97,98,108,101,95,105,95,49,54,0),false ], [String.fromCharCode(116,105,109,101,118,97,108,95,55,95,54,50,0),false ], [String.fromCharCode(112,95,55,49,95,100,101,108,116,97,113,0),true ]]);
         logouserK = `${3 << (Math.min(3, Math.abs(parseInt(`${defaultprofilepico}`))))}`;
         tempnodatagifu.set(`${tempnodatagifu.size}`, tempnodatagifu.size);
      }
      while (2 > logouserK.length && !livenodatabgimgl) {
         livenodatabgimgl = tempnodataj < parseFloat(`${logouserK.length}`);
         break;
      }
      closeu += parseFloat(`${parseInt(`${tempnodataj}`)}`);
    

   let mbridgeW = 6725638 >= nativeexq;
   do {
      nativeexq &= penaltygoalp.length * nativeexq;
      if (mbridgeW) {
         break;
      }
   } while (mbridgeW && ((disconnectedU ^ nativeexq) > 5));
   if (4 <= (nativeexq - 2)) {
       let backiconmask3 = 3;
       let footballfieldA = 1.0;
       let basketballiconN = 0.0;
       let overlay5 = 1.0;
       let popup3 = 0.0;
      if (footballfieldA >= 3.61) {
          let dragclose8 = String.fromCharCode(116,119,111,109,95,55,95,56,48,0);
          let qaagB = String.fromCharCode(110,95,51,95,112,111,116,105,115,105,111,110,0);
         footballfieldA += parseInt(`${basketballiconN}`) % (Math.max(2, 2));
         dragclose8 = `${(String.fromCharCode(67,0) == qaagB ? dragclose8.length : qaagB.length)}`;
      }
          let thailandV: Map<any, any> = new Map([[String.fromCharCode(122,95,55,55,95,115,97,118,105,110,103,115,0),526], [String.fromCharCode(103,109,111,99,107,95,97,95,52,52,0),670], [String.fromCharCode(109,107,100,105,114,95,107,95,56,54,0),129]]);
         backiconmask3 ^= 3 * parseInt(`${basketballiconN}`);
         thailandV = new Map([[`${thailandV.size}`, 1]]);
         footballfieldA /= Math.max(2, backiconmask3 | 1);
         overlay5 -= parseInt(`${popup3}`);
         basketballiconN /= Math.max(parseFloat(`${parseInt(`${overlay5}`) + 3}`), 1);
       let weiboS = String.fromCharCode(111,95,52,52,95,102,105,108,116,101,114,0);
       let runtimea = String.fromCharCode(97,110,97,108,121,116,105,99,115,95,102,95,52,52,0);
       let spinnero = String.fromCharCode(101,95,54,50,95,115,117,109,120,0);
         basketballiconN += parseFloat(`${3}`);
      if (5.6 == (footballfieldA / 5)) {
         overlay5 *= weiboS.length % (Math.max(3, 5));
      }
      let cornerkick6 = footballfieldA <= 6172361.0;
      do {
         footballfieldA -= spinnero.length ^ runtimea.length;
         if (cornerkick6) {
            break;
         }
      } while (cornerkick6 && ((footballfieldA - basketballiconN) == 3.4 && (basketballiconN - 3.4) == 4.87));
      for (let b = 0; b < 2; b++) {
         spinnero = `${runtimea.length * 3}`;
      }
          let teamdetailsbgI = 1.0;
         overlay5 *= parseInt(`${basketballiconN}`) + parseInt(`${popup3}`);
         teamdetailsbgI -= parseFloat(`${parseInt(`${teamdetailsbgI}`)}`);
         popup3 -= parseFloat(`${3}`);
      let showU = weiboS.length >= 5844435;
      do {
          let iconnotificationnewT = 5;
          let bellN: Array<any> = [739, 812];
          let whiteu = String.fromCharCode(121,95,49,54,95,108,111,97,100,105,110,103,0);
          let sport4 = 3;
         weiboS += "1 & sport4";
         iconnotificationnewT <<= Math.min(2, Math.abs(1 ^ bellN.length));
         bellN = [1 % (Math.max(6, iconnotificationnewT))];
         whiteu += `${whiteu.length ^ bellN.length}`;
         sport4 %= Math.max(3, 3 - iconnotificationnewT);
         if (showU) {
            break;
         }
      } while (showU && (5 > (2 ^ weiboS.length) && 2 > (parseInt(`${popup3}`) * weiboS.length)));
       let entrys = String.fromCharCode(116,95,55,53,95,118,114,101,112,0);
      closeu += parseFloat(`${2 % (Math.max(1, backiconmask3))}`);
   }
   for (let s = 0; s < 3; s++) {
      floating6 += 3;
   }
   for (let g = 0; g < 3; g++) {
      floating6 -= reactnativejs7.length | parseInt(`${closeu}`);
   }
    const res = JSON.parse(
      await RNFetchBlob.fs.readFile(apiCacheFilePath, 'utf8'),
    );

   let dicelogoi = 7444756 >= utilsm.length;
   do {
      utilsm = `${(utilsm == String.fromCharCode(121,0) ? disconnectedU : utilsm.length)}`;
      if (dicelogoi) {
         break;
      }
   } while (dicelogoi && (!utilsm.startsWith(`${penaltygoalp.length}`)));
   if ((2 >> (Math.min(5, Math.abs(yellowvideolives)))) <= 5) {
      yellowvideolives -= 3 / (Math.max(parseInt(`${homet}`), 7));
   }
   while (1 > (disconnectedU / 4)) {
       let awayC = String.fromCharCode(99,95,50,49,95,110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0);
       let libffmpegkitW = String.fromCharCode(97,112,112,108,121,105,110,103,95,102,95,55,50,0);
       let libyogaq = 0;
       let inouttargetyellow_ = 3.0;
         inouttargetyellow_ *= libffmpegkitW.length * awayC.length;
         libffmpegkitW = `${3 + awayC.length}`;
      let guidep = libffmpegkitW == String.fromCharCode(50,99,120,53,109,53,117,101,0);
      do {
         libffmpegkitW = `${awayC.length}`;
         if (guidep) {
            break;
         }
      } while (guidep && (libyogaq < 4));
         inouttargetyellow_ *= parseInt(`${inouttargetyellow_}`) | libyogaq;
      while (libffmpegkitW.length == libyogaq) {
          let hometeamfieldu: Array<any> = [660, 79];
         libffmpegkitW = `${hometeamfieldu.length}`;
         break;
      }
      while (1 > libyogaq) {
         libffmpegkitW += `${libffmpegkitW.length / (Math.max(6, libyogaq))}`;
         break;
      }
       let yellowvideolive3: Map<any, any> = new Map([[String.fromCharCode(101,95,53,48,95,97,109,112,108,105,116,117,100,101,0),879], [String.fromCharCode(118,95,52,52,95,115,119,102,112,108,97,121,101,114,0),931], [String.fromCharCode(108,95,56,50,95,115,116,114,105,110,103,101,110,99,111,100,101,0),419]]);
      for (let j = 0; j < 2; j++) {
         inouttargetyellow_ += 1;
      }
      while (libyogaq == inouttargetyellow_) {
         inouttargetyellow_ *= yellowvideolive3.size / (Math.max(libffmpegkitW.length, 10));
         break;
      }
          let area5 = 3.0;
         libffmpegkitW = `${parseInt(`${area5}`) ^ yellowvideolive3.size}`;
          let redcirclebg0 = String.fromCharCode(107,95,57,52,95,103,101,111,109,0);
          let showlessY = String.fromCharCode(113,95,50,52,95,115,105,109,105,108,97,114,0);
          let dialogi = 2.0;
         inouttargetyellow_ *= (String.fromCharCode(48,0) == redcirclebg0 ? yellowvideolive3.size : redcirclebg0.length);
         showlessY += `${1 | showlessY.length}`;
         dialogi -= 2;
         inouttargetyellow_ /= Math.max(parseInt(`${inouttargetyellow_}`), 5);
      floating6 -= parseInt(`${homet}`) & nativeexq;
      break;
   }
   while (utilsm.endsWith(`${reactnativejs7.length}`)) {
      reactnativejs7 = [parseInt(`${loginsuccess6}`)];
      break;
   }
    

      homet /= Math.max(parseFloat(`${parseInt(`${homet}`)}`), 1);
   let footballz = 5268124 >= nativeexq;
   do {
      nativeexq <<= Math.min(2, Math.abs(1 * utilsm.length));
      if (footballz) {
         break;
      }
   } while (footballz && ((5 & reactnativejs7.length) >= 4 || (reactnativejs7.length & 5) >= 1));
       let statsnomoredataB = 2;
       let currents = 5.0;
       let plashl = 1.0;
      for (let a = 0; a < 1; a++) {
         statsnomoredataB |= statsnomoredataB;
      }
       let libglog3 = String.fromCharCode(112,114,105,111,114,95,54,95,53,57,0);
          let basketballiconu = String.fromCharCode(100,95,53,95,105,110,100,101,120,105,110,103,0);
         currents += (String.fromCharCode(97,0) == basketballiconu ? basketballiconu.length : parseInt(`${currents}`));
       let iconcalendarF = 4.0;
       let episodeL = 4.0;
      if (libglog3.includes(`${plashl}`)) {
         libglog3 = `${parseInt(`${iconcalendarF}`)}`;
      }
      if (2 == statsnomoredataB) {
          let statsnomoredata4: Array<any> = [922, 706];
          let phonesharez = 1.0;
          let singleZ = 0;
         statsnomoredataB += 1 >> (Math.min(3, libglog3.length));
         statsnomoredata4.push(singleZ * statsnomoredata4.length);
         phonesharez /= Math.max(parseInt(`${phonesharez}`) ^ 3, 3);
         singleZ *= statsnomoredata4.length;
      }
         libglog3 = `${parseInt(`${iconcalendarF}`)}`;
      let libbufferY = iconcalendarF <= 8840698.0;
      do {
         iconcalendarF /= Math.max(5, parseFloat(`${1 | parseInt(`${iconcalendarF}`)}`));
         if (libbufferY) {
            break;
         }
      } while ((iconcalendarF > 4.13) && libbufferY);
          let refreshx: Map<any, any> = new Map([[String.fromCharCode(113,95,52,48,95,112,114,101,102,105,120,101,100,0),697], [String.fromCharCode(105,95,50,55,95,98,117,99,107,101,116,0),84], [String.fromCharCode(120,95,52,50,95,109,101,116,97,108,0),250]]);
          let u_viewJ = String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,49,95,57,55,0);
          let nbatrophyL = String.fromCharCode(111,95,51,50,95,97,103,101,0);
         libglog3 = `${nbatrophyL.length}`;
         refreshx.set(`${u_viewJ}`, (u_viewJ == String.fromCharCode(78,0) ? refreshx.size : u_viewJ.length));
         nbatrophyL += `${3 << (Math.min(5, Math.abs(refreshx.size)))}`;
      loginsuccess6 += parseInt(`${homet}`) << (Math.min(2, Math.abs(2)));
   while (4.98 == (loginsuccess6 + yellowvideolives)) {
      loginsuccess6 -= 1 % (Math.max(parseInt(`${homet}`), 9));
      break;
   }
    return res;
  } else {

      loginsuccess6 /= Math.max(5, cornerkick5.length);
   for (let n = 0; n < 2; n++) {
      closeu /= Math.max(parseFloat(`${utilsm.length}`), 3);
   }
   for (let j = 0; j < 3; j++) {
      utilsm += `${parseInt(`${closeu}`) % (Math.max(3, 4))}`;
   }
      yellowvideolives |= yellowvideolives / (Math.max(reactnativejs7.length, 10));
    return [];
  }
};

export const batchAddVodToApiCache = async (vod: yysGradle[]) => {
  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';
  try {
    if (!(await getIsApiCacheExist())) {
      await RNFetchBlob.fs.createFile(apiCacheFilePath, '[]', 'utf8');
    }
  } catch (e) {
       let iconcloseH: Array<any> = [531, 678];
    let thumbnailX = String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,95,120,95,56,57,0);
    let basketballtrophyf: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,101,108,95,109,95,56,52,0),String.fromCharCode(114,95,53,49,95,109,111,110,116,103,111,109,101,114,121,0)], [String.fromCharCode(114,101,99,116,97,110,103,108,101,95,99,95,53,50,0),String.fromCharCode(104,95,53,51,95,101,120,112,105,114,101,0)], [String.fromCharCode(114,105,99,101,95,115,95,51,56,0),String.fromCharCode(100,105,115,112,108,97,121,101,100,95,50,95,57,54,0)]]);
    let mbbannerr: Map<any, any> = new Map([[String.fromCharCode(99,100,99,105,95,48,95,54,53,0),String.fromCharCode(115,111,117,110,100,95,50,95,53,0)], [String.fromCharCode(108,115,102,108,115,112,95,98,95,53,55,0),String.fromCharCode(115,112,101,99,95,110,95,49,57,0)]]);
    let iconclosewhitebgd = 3.0;
    let leaguedetailsbgy = String.fromCharCode(118,95,52,56,95,99,104,101,99,107,112,97,99,107,101,116,0);
    let iconplayd: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,95,101,95,56,49,0),false ], [String.fromCharCode(104,95,51,54,95,112,97,103,101,115,105,122,101,0),false ], [String.fromCharCode(101,114,97,95,113,95,56,49,0),false ]]);
    let mbbanner5 = String.fromCharCode(102,95,57,55,95,115,117,98,99,111,110,116,101,110,116,115,0);
    let const_ywr = String.fromCharCode(112,97,110,105,99,95,121,95,49,48,48,0);
    let libturbomodulejsijniG: Map<any, any> = new Map([[String.fromCharCode(110,116,112,95,51,95,50,56,0),41], [String.fromCharCode(118,105,100,101,111,99,111,100,101,99,95,111,95,49,57,0),757]]);
    let mbnativeadvancedy = String.fromCharCode(116,95,57,48,95,109,97,108,108,111,99,122,0);
    let sina4: Array<any> = [String.fromCharCode(99,111,108,111,99,97,116,101,100,95,102,95,50,53,0), String.fromCharCode(105,95,57,57,95,99,104,97,114,116,0), String.fromCharCode(97,114,116,105,102,97,99,116,115,95,115,95,55,51,0)];
    let philippinesK = String.fromCharCode(115,105,103,110,105,110,103,95,57,95,54,49,0);
    let b_imagej = 0;
    let mapbuffer8 = String.fromCharCode(108,95,49,54,95,115,105,100,101,100,97,116,97,0);
   for (let u = 0; u < 1; u++) {
      thumbnailX = `${mbbanner5.length ^ 2}`;
   }
      mbbannerr = new Map([[`${basketballtrophyf.size}`, (String.fromCharCode(106,0) == mbbanner5 ? mbbanner5.length : basketballtrophyf.size)]]);
   while ((leaguedetailsbgy.length % (Math.max(4, 3))) == 5 && (leaguedetailsbgy.length % 4) == 5) {
      iconplayd.set(`${iconcloseH.length}`, iconplayd.size);
      break;
   }
   if (3 >= (5 >> (Math.min(3, Math.abs(iconplayd.size))))) {
      iconplayd = new Map([[`${basketballtrophyf.size}`, 1 % (Math.max(5, basketballtrophyf.size))]]);
   }
   for (let y = 0; y < 3; y++) {
      mbbanner5 = `${mbbanner5.length}`;
   }
       let promotionU = 2.0;
       let uimanagerh: Array<any> = [50, 7];
       let gifgoalbgO = 4.0;
      if (3.62 > (2.3 * promotionU) && (gifgoalbgO + 2.3) > 2.86) {
         gifgoalbgO += parseFloat(`${uimanagerh.length / (Math.max(1, 1))}`);
      }
         gifgoalbgO /= Math.max(2, parseFloat(`${uimanagerh.length}`));
      while ((4.65 - gifgoalbgO) < 4.89 || 3.44 < (4.65 - promotionU)) {
         gifgoalbgO *= parseFloat(`${uimanagerh.length % (Math.max(6, parseInt(`${gifgoalbgO}`)))}`);
         break;
      }
          let exampleimage1 = 3.0;
         uimanagerh.push(uimanagerh.length);
         exampleimage1 /= Math.max(parseFloat(`${parseInt(`${exampleimage1}`)}`), 5);
         uimanagerh = [parseInt(`${gifgoalbgO}`)];
         promotionU += parseFloat(`${uimanagerh.length}`);
      let yellowredcardT = uimanagerh.length <= 5867342;
      do {
          let downloadingG = String.fromCharCode(109,102,114,97,95,105,95,49,48,0);
          let bridgeX = String.fromCharCode(120,95,48,95,114,101,113,117,101,115,116,101,114,0);
         uimanagerh = [bridgeX.length];
         downloadingG = `${downloadingG.length}`;
         bridgeX += `${downloadingG.length & downloadingG.length}`;
         if (yellowredcardT) {
            break;
         }
      } while ((4.50 >= (promotionU * parseFloat(`${uimanagerh.length}`))) && yellowredcardT);
         uimanagerh = [parseInt(`${promotionU}`)];
         promotionU -= parseFloat(`${parseInt(`${gifgoalbgO}`)}`);
      mbbannerr.set(`${const_ywr}`, 3);
      libturbomodulejsijniG.set(mbbanner5, mbbanner5.length >> (Math.min(Math.abs(1), 5)));
   while (libturbomodulejsijniG.size == const_ywr.length) {
      const_ywr = `${1 & const_ywr.length}`;
      break;
   }
   while ((2 + mbbanner5.length) == 2 && 2 == (mbbanner5.length + iconplayd.size)) {
      iconplayd.set(`${thumbnailX}`, thumbnailX.length);
      break;
   }
   let fullscreenminV = thumbnailX == String.fromCharCode(51,107,53,117,109,0);
   do {
       let pangleR = 1;
       let paginationV = String.fromCharCode(99,95,56,56,95,105,110,115,112,101,99,116,97,98,108,101,0);
       let subin5: Map<any, any> = new Map([[String.fromCharCode(118,97,114,121,105,110,103,95,118,95,54,50,0),146], [String.fromCharCode(114,95,49,56,95,116,104,114,111,116,116,108,101,100,0),373]]);
       let a_lockr = false;
       let libgloge = String.fromCharCode(100,101,99,114,101,109,101,110,116,95,114,95,49,48,0);
       let nativeX = String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,49,95,54,52,0);
          let informationF = 4;
          let tickM = String.fromCharCode(115,116,114,105,100,105,110,103,95,101,95,49,48,0);
          let grayp: Map<any, any> = new Map([[String.fromCharCode(114,95,52,49,95,103,101,116,117,114,108,99,111,110,116,101,120,116,0),String.fromCharCode(97,114,109,116,104,95,121,95,53,53,0)], [String.fromCharCode(112,100,102,95,112,95,50,51,0),String.fromCharCode(99,97,110,99,101,108,101,100,95,109,95,55,52,0)], [String.fromCharCode(99,95,49,53,95,109,111,100,101,120,112,0),String.fromCharCode(102,95,54,55,95,114,101,103,105,115,116,101,114,101,114,0)]]);
         subin5.set(`${a_lockr}`, (3 << (Math.min(4, Math.abs((a_lockr ? 3 : 2))))));
         informationF ^= grayp.size;
         tickM = `${tickM.length}`;
         grayp = new Map([[`${grayp.size}`, grayp.size]]);
      if (paginationV.endsWith(`${subin5.size}`)) {
         subin5.set(`${pangleR}`, pangleR);
      }
          let profilepicW = String.fromCharCode(116,95,54,56,95,118,109,112,114,105,110,116,102,0);
          let buildP = 4;
         pangleR *= 2;
         profilepicW += `${buildP}`;
         buildP <<= Math.min(5, Math.abs(buildP % (Math.max(profilepicW.length, 2))));
       let clockl = 0.0;
       let libswresamplem = 0.0;
      if (a_lockr) {
         a_lockr = paginationV.endsWith(`${a_lockr}`);
      }
      while (libgloge != paginationV) {
          let schedulez: Array<any> = [72, 37];
          let fielda: Array<any> = [825, 901];
          let foundB: Map<any, any> = new Map([[String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,113,95,50,0),577], [String.fromCharCode(99,95,52,56,95,117,115,105,110,103,0),47]]);
          let bgvipsportd: Map<any, any> = new Map([[String.fromCharCode(114,95,49,54,95,108,111,99,97,108,0),355], [String.fromCharCode(115,107,101,119,95,102,95,52,0),609]]);
          let iconbell7: Array<any> = [430, 584];
         paginationV += `${parseInt(`${libswresamplem}`) - 3}`;
         schedulez.push(bgvipsportd.size << (Math.min(iconbell7.length, 2)));
         fielda = [bgvipsportd.size];
         foundB = new Map([[`${bgvipsportd.size}`, bgvipsportd.size >> (Math.min(schedulez.length, 2))]]);
         iconbell7 = [iconbell7.length | schedulez.length];
         break;
      }
          let hnewarchdefaultsL: Map<any, any> = new Map([[String.fromCharCode(102,114,111,110,116,95,108,95,54,54,0),String.fromCharCode(110,95,54,52,95,114,101,97,115,109,0)], [String.fromCharCode(99,108,97,115,115,105,102,115,95,105,95,55,0),String.fromCharCode(98,95,55,54,95,113,115,118,118,112,112,0)]]);
          let collections = 5.0;
          let injuryp: Map<any, any> = new Map([[String.fromCharCode(98,105,112,114,101,100,95,102,95,51,53,0),String.fromCharCode(105,110,118,102,95,112,95,54,49,0)], [String.fromCharCode(117,95,56,57,95,115,101,110,100,97,108,108,0),String.fromCharCode(115,117,114,101,95,54,95,51,57,0)]]);
         paginationV = `${libgloge.length * subin5.size}`;
         hnewarchdefaultsL = new Map([[`${injuryp.size}`, injuryp.size]]);
         collections /= Math.max(parseFloat(`${2}`), 3);
      for (let k = 0; k < 3; k++) {
          let notificationgray6: Array<any> = [535, 157, 516];
          let taiwanc: Array<any> = [String.fromCharCode(107,95,55,55,95,102,117,114,116,104,101,114,0), String.fromCharCode(111,110,110,101,99,116,105,111,110,95,54,95,55,57,0)];
          let appsM = 5.0;
          let homeloadingb = true;
          let acceptedx: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,105,110,103,95,122,95,55,54,0),956], [String.fromCharCode(110,95,52,53,95,100,101,99,111,100,101,0),643]]);
         a_lockr = nativeX.includes(`${homeloadingb}`);
         notificationgray6.push(acceptedx.size);
         taiwanc.push(acceptedx.size | parseInt(`${appsM}`));
         appsM += taiwanc.length / (Math.max(7, acceptedx.size));
         homeloadingb = taiwanc.length > 53;
      }
      let p_imagem = clockl <= 7773476.0;
      do {
          let libjsi3 = 4.0;
          let whitesmalltickk = false;
          let libcrashsdkP = String.fromCharCode(112,114,111,109,111,95,49,95,54,54,0);
          let graphU = 4;
         clockl /= Math.max((libgloge == String.fromCharCode(110,0) ? graphU : libgloge.length), 2);
         libjsi3 *= (parseFloat(`${(whitesmalltickk ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${libjsi3}`)), 5))}`));
         whitesmalltickk = !libcrashsdkP.startsWith(`${whitesmalltickk}`);
         libcrashsdkP += `${((whitesmalltickk ? 3 : 3) ^ parseInt(`${libjsi3}`))}`;
         graphU &= ((whitesmalltickk ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${libjsi3}`)), 1)));
         if (p_imagem) {
            break;
         }
      } while (p_imagem && ((1 ^ pangleR) <= 1));
      let lang7 = String.fromCharCode(108,118,48,120,109,103,52,103,0) == paginationV;
      do {
         paginationV += `${3 + pangleR}`;
         if (lang7) {
            break;
         }
      } while ((pangleR > 2) && lang7);
      if (nativeX.length >= 2) {
         nativeX = `${parseInt(`${libswresamplem}`)}`;
      }
      thumbnailX = `${(1 - (a_lockr ? 3 : 3))}`;
      if (fullscreenminV) {
         break;
      }
   } while (fullscreenminV && (!thumbnailX.includes(`${mbbannerr.size}`)));
   while (2 <= iconplayd.size) {
      iconclosewhitebgd *= 1;
      break;
   }
   for (let m = 0; m < 3; m++) {
       let iconsharefriendsZ = 2.0;
       let modulep = String.fromCharCode(114,95,55,53,95,99,111,109,112,108,101,116,101,115,0);
       let emojiheartt = String.fromCharCode(97,118,100,101,118,105,99,101,95,49,95,49,54,0);
      if (4 > emojiheartt.length) {
         emojiheartt = `${modulep.length}`;
      }
         modulep += `${parseInt(`${iconsharefriendsZ}`)}`;
      for (let v = 0; v < 1; v++) {
          let description_sz_ = 2.0;
          let calendarw = String.fromCharCode(106,95,49,95,99,111,108,115,107,105,112,0);
          let sport2 = 3.0;
          let topicU = String.fromCharCode(98,95,50,50,95,108,115,102,108,115,112,0);
          let default_ai8: Array<any> = [633, 587, 339];
         emojiheartt = "3";
         description_sz_ /= Math.max(4, default_ai8.length >> (Math.min(Math.abs(1), 2)));
         calendarw += `${parseInt(`${description_sz_}`) - 2}`;
         sport2 *= parseFloat(`${default_ai8.length}`);
         topicU += `${topicU.length}`;
      }
      if (emojiheartt == modulep) {
         modulep = `${emojiheartt.length | modulep.length}`;
      }
       let vipsportj = 3.0;
       let predictionactivef = 2.0;
         modulep += `${parseInt(`${predictionactivef}`)}`;
         emojiheartt += `${parseInt(`${predictionactivef}`) >> (Math.min(emojiheartt.length, 1))}`;
       let tempnodatag = String.fromCharCode(97,95,54,55,95,99,111,101,102,102,115,112,0);
         predictionactivef += parseInt(`${iconsharefriendsZ}`) * 3;
      mbbannerr = new Map([[modulep, 2 - modulep.length]]);
   }
       let currentJ: Map<any, any> = new Map([[String.fromCharCode(115,101,109,105,95,116,95,53,57,0),33], [String.fromCharCode(118,105,98,114,97,116,101,95,110,95,51,55,0),289], [String.fromCharCode(99,101,114,116,95,100,95,49,48,48,0),789]]);
       let nativemoduleG: Map<any, any> = new Map([[String.fromCharCode(104,95,56,48,95,115,112,107,114,0),165], [String.fromCharCode(122,95,54,95,99,111,117,110,116,101,114,115,0),482], [String.fromCharCode(97,95,49,54,95,108,111,117,100,110,111,114,109,0),88]]);
       let loadingspinnerW: Map<any, any> = new Map([[String.fromCharCode(111,95,53,95,99,100,97,116,101,0),true ], [String.fromCharCode(116,114,97,110,115,105,116,95,102,95,57,53,0),false ]]);
      for (let f = 0; f < 3; f++) {
         loadingspinnerW = new Map([[`${loadingspinnerW.size}`, 1]]);
      }
         nativemoduleG = new Map([[`${nativemoduleG.size}`, currentJ.size ^ nativemoduleG.size]]);
         loadingspinnerW.set(`${currentJ.size}`, loadingspinnerW.size);
         currentJ = new Map([[`${currentJ.size}`, currentJ.size | loadingspinnerW.size]]);
          let rewindH = 5;
          let iconpipexpand_ = 5;
         loadingspinnerW.set(`${loadingspinnerW.size}`, currentJ.size);
         rewindH -= 2;
         iconpipexpand_ *= rewindH;
      mbbannerr = new Map([[`${libturbomodulejsijniG.size}`, 3 & libturbomodulejsijniG.size]]);
       let yellowcirclebgs = 5.0;
      while (1.14 == (yellowcirclebgs / (Math.max(2.43, 2)))) {
         yellowcirclebgs -= parseFloat(`${parseInt(`${yellowcirclebgs}`)}`);
         break;
      }
         yellowcirclebgs += parseFloat(`${parseInt(`${yellowcirclebgs}`) >> (Math.min(2, Math.abs(parseInt(`${yellowcirclebgs}`))))}`);
         yellowcirclebgs *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${yellowcirclebgs}`)), 2))}`);
      iconcloseH = [parseInt(`${iconclosewhitebgd}`) ^ iconcloseH.length];
      iconcloseH = [libturbomodulejsijniG.size ^ 1];
      mbbannerr = new Map([[`${libturbomodulejsijniG.size}`, libturbomodulejsijniG.size - const_ywr.length]]);
       let shareblack_ = false;
      for (let x = 0; x < 2; x++) {
          let profileactiveM = 5.0;
          let leftq = String.fromCharCode(104,95,54,49,95,99,108,111,115,101,115,0);
          let auto_af6 = String.fromCharCode(105,101,101,101,95,108,95,54,51,0);
         shareblack_ = (((!shareblack_ ? 7 : leftq.length) * leftq.length) == 7);
         profileactiveM /= Math.max(parseFloat(`${2}`), 2);
         auto_af6 = `${1 % (Math.max(1, auto_af6.length))}`;
      }
      let renderu = shareblack_ ? !shareblack_ : shareblack_;
      do {
         shareblack_ = (shareblack_ ? !shareblack_ : shareblack_);
         if (renderu) {
            break;
         }
      } while (renderu && (!shareblack_));
      for (let l = 0; l < 2; l++) {
          let commentm = String.fromCharCode(97,95,52,53,0);
          let mimef = String.fromCharCode(119,105,115,101,95,118,95,54,56,0);
          let orangeuparrowA = false;
         shareblack_ = shareblack_ || orangeuparrowA;
         commentm += `${2 & commentm.length}`;
         mimef = `${commentm.length}`;
         orangeuparrowA = 5 == mimef.length && String.fromCharCode(114,0) == commentm;
      }
      const_ywr += `${mbbannerr.size * const_ywr.length}`;
      leaguedetailsbgy = `${libturbomodulejsijniG.size}`;
      iconcloseH.push(2 >> (Math.min(1, iconcloseH.length)));
       let anytimeJ = String.fromCharCode(97,100,105,100,95,101,95,50,55,0);
         anytimeJ = `${anytimeJ.length}`;
         anytimeJ += `${anytimeJ.length * 3}`;
         anytimeJ = "2";
      iconclosewhitebgd -= parseInt(`${iconclosewhitebgd}`);
      mbnativeadvancedy = `${mbnativeadvancedy.length - 2}`;
   let iconwatchA = 7341287 >= sina4.length;
   do {
      sina4 = [(String.fromCharCode(74,0) == mbbanner5 ? mbbanner5.length : libturbomodulejsijniG.size)];
      if (iconwatchA) {
         break;
      }
   } while (((sina4.length + 1) <= 3 && (1 + mbbanner5.length) <= 3) && iconwatchA);

    
  }
  const apiCacheContentStr = await RNFetchBlob.fs.readFile(
    apiCacheFilePath,
    'utf8',
  );
  const apiCacheContent: yysGradle[] = JSON.parse(apiCacheContentStr);
  
  if (apiCacheContent.length < TOTAL_VIDEO_TO_DOWNLOAD) {
    const newArr = removeDuplicateObjects(apiCacheContent.concat(vod));
    
    await RNFetchBlob.fs.writeFile(apiCacheFilePath, JSON.stringify(newArr));
  } else {
    
    
  }
};

function removeDuplicateObjects(array: yysGradle[]): yysGradle[] {
  const seenIds = new Set<number>();

  return array.filter(obj => {
    if (!seenIds.has(obj.mini_video_id)) {
      seenIds.add(obj.mini_video_id);
      return true;
    }
    return false;
  });
}

const deleteVodFromApiCache = async (id: string) => {
  if (!(await getIsApiCacheExist())) return;
  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';
  const apiCacheContentStr = await RNFetchBlob.fs.readFile(
    apiCacheFilePath,
    'utf8',
  );
  const apiCacheContent: yysGradle[] = JSON.parse(apiCacheContentStr);

  console.debug('removing vod from api cache', id);

  const filteredCacheContent = apiCacheContent.filter(
    vod => vod.mini_video_id.toString() !== id,
  );
  await RNFetchBlob.fs.writeFile(
    apiCacheFilePath,
    JSON.stringify(filteredCacheContent),
  );
};

export const clearMinivodApiCache = async () => {
       let typingloadingM = String.fromCharCode(100,119,111,114,100,95,116,95,53,53,0);
    let collectionq = 5.0;
    let footballfiledlayoutW = String.fromCharCode(111,95,51,56,95,115,113,108,105,116,101,112,97,103,101,114,0);
    let predictiondefaultQ = String.fromCharCode(97,115,99,101,110,116,95,122,95,51,50,0);
    let rewindY = String.fromCharCode(112,97,99,107,101,116,115,95,121,95,56,50,0);
    let shareblackX = String.fromCharCode(99,95,50,55,95,100,101,115,101,108,101,99,116,105,111,110,0);
    let searchbarT = 0;
    let guideT = 5.0;
    let yellowD = String.fromCharCode(117,95,55,55,95,102,114,111,110,116,115,105,100,101,0);
    let colorsF = String.fromCharCode(116,95,53,95,115,117,98,116,114,101,101,0);
       let xnewinterstitiali: Map<any, any> = new Map([[String.fromCharCode(109,97,112,112,105,110,103,115,95,115,95,49,51,0),244], [String.fromCharCode(119,95,52,95,114,111,116,97,116,101,0),892]]);
         xnewinterstitiali = new Map([[`${xnewinterstitiali.size}`, 3]]);
         xnewinterstitiali.set(`${xnewinterstitiali.size}`, xnewinterstitiali.size);
      let membershipd = 9279620 >= xnewinterstitiali.size;
      do {
         xnewinterstitiali = new Map([[`${xnewinterstitiali.size}`, 2]]);
         if (membershipd) {
            break;
         }
      } while (membershipd && ((xnewinterstitiali.size / 3) > 1));
      footballfiledlayoutW += "1";
       let incidentf = 5.0;
       let iconsharefriends9: Map<any, any> = new Map([[String.fromCharCode(97,115,110,95,56,95,50,0),504], [String.fromCharCode(109,97,107,101,115,114,112,109,95,116,95,56,49,0),440], [String.fromCharCode(112,95,56,53,95,105,110,112,99,98,0),175]]);
         iconsharefriends9.set(`${incidentf}`, 3 ^ iconsharefriends9.size);
       let short_kvj = 3;
      if ((1 | short_kvj) > 2 && 3 > (1 * short_kvj)) {
         incidentf += 1 ^ short_kvj;
      }
       let graphx = String.fromCharCode(115,116,114,111,107,101,100,95,57,95,49,56,0);
         short_kvj -= iconsharefriends9.size >> (Math.min(Math.abs(3), 5));
      if (5 > graphx.length) {
         graphx += `${short_kvj}`;
      }
      collectionq /= Math.max(2, yellowD.length ^ 3);
   let networkM = 7810310.0 >= collectionq;
   do {
      collectionq /= Math.max(1, typingloadingM.length & predictiondefaultQ.length);
      if (networkM) {
         break;
      }
   } while ((2 < rewindY.length) && networkM);
   let minimize5 = String.fromCharCode(56,112,115,117,55,117,52,0) == predictiondefaultQ;
   do {
       let basketballawayteamJ = String.fromCharCode(105,95,56,53,95,105,103,110,111,114,101,115,0);
       let bgvipsportZ = String.fromCharCode(116,95,56,57,95,114,101,97,100,108,110,0);
       let lessa = 3.0;
       let pingi = String.fromCharCode(105,110,116,101,108,95,122,95,52,51,0);
      for (let w = 0; w < 2; w++) {
         pingi += "1";
      }
       let sans_ = String.fromCharCode(99,95,54,48,95,110,111,116,0);
       let main_t0 = String.fromCharCode(97,95,53,95,103,101,110,101,114,105,99,115,0);
         lessa -= parseFloat(`${3}`);
      for (let j = 0; j < 2; j++) {
         main_t0 += `${sans_.length}`;
      }
      while (basketballawayteamJ.startsWith(main_t0)) {
         basketballawayteamJ = `${basketballawayteamJ.length}`;
         break;
      }
      for (let i = 0; i < 1; i++) {
          let libimagepipelineK = String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,95,54,95,52,56,0);
          let libcrashsdkv = 4.0;
          let mappingU = 0.0;
          let iconlogoutO = 1.0;
          let langx = 5.0;
         lessa -= parseFloat(`${3 - main_t0.length}`);
         libimagepipelineK = `${parseInt(`${iconlogoutO}`)}`;
         libcrashsdkv += parseFloat(`${parseInt(`${libcrashsdkv}`)}`);
         mappingU /= Math.max(1, libimagepipelineK.length * parseInt(`${mappingU}`));
         langx += 3 * parseInt(`${langx}`);
      }
      while (bgvipsportZ.length > pingi.length) {
          let subin5: Map<any, any> = new Map([[String.fromCharCode(105,95,51,54,95,105,101,101,101,0),912], [String.fromCharCode(115,99,104,101,100,117,108,101,100,95,116,95,51,51,0),561]]);
          let klevinM = false;
          let libfileq: Array<any> = [240, 112];
         bgvipsportZ = `${main_t0.length - 3}`;
         subin5.set(`${libfileq.length}`, libfileq.length - subin5.size);
         klevinM = !klevinM;
         break;
      }
      let dplusJ = 4961752 >= bgvipsportZ.length;
      do {
         bgvipsportZ += "2";
         if (dplusJ) {
            break;
         }
      } while (dplusJ && (sans_ != bgvipsportZ));
      if (bgvipsportZ.includes(`${main_t0.length}`)) {
          let zhuboz = 2;
          let hongkongd = String.fromCharCode(122,95,52,57,95,98,100,108,116,0);
          let libcrashsdkn = 3;
          let yellowanimationliveX = false;
         bgvipsportZ += `${bgvipsportZ.length ^ libcrashsdkn}`;
         zhuboz /= Math.max(3, zhuboz);
         hongkongd += `${zhuboz}`;
         libcrashsdkn /= Math.max(1, 2);
         yellowanimationliveX = 63 < zhuboz;
      }
      if (pingi.length < sans_.length) {
         sans_ = `${parseInt(`${lessa}`) << (Math.min(bgvipsportZ.length, 4))}`;
      }
          let wifirouterz = 2;
          let telemetryE: Array<any> = [430, 814, 487];
         pingi = `${bgvipsportZ.length}`;
         wifirouterz <<= Math.min(2, Math.abs(wifirouterz));
         telemetryE = [telemetryE.length ^ 3];
      if (bgvipsportZ.includes(`${basketballawayteamJ.length}`)) {
         basketballawayteamJ += `${sans_.length / (Math.max(5, basketballawayteamJ.length))}`;
      }
      predictiondefaultQ += `${predictiondefaultQ.length}`;
      if (minimize5) {
         break;
      }
   } while (minimize5 && (3 == (searchbarT * predictiondefaultQ.length) && 2 == (3 * searchbarT)));
      predictiondefaultQ += `${(String.fromCharCode(111,0) == yellowD ? typingloadingM.length : yellowD.length)}`;
       let leaguedetailsbg_: Array<any> = [655, 387];
       let indicatorw = String.fromCharCode(114,95,53,54,95,115,97,109,112,108,101,114,97,116,101,115,0);
       let short_tbF = String.fromCharCode(107,95,54,51,95,115,116,97,99,107,101,100,0);
          let mathM = false;
          let imagewatchlived = String.fromCharCode(114,101,118,111,107,101,95,110,95,49,48,48,0);
         indicatorw += `${indicatorw.length}`;
         mathM = !imagewatchlived.endsWith(`${mathM}`);
         imagewatchlived = `${((mathM ? 5 : 5))}`;
       let iconarrowrightblack_ = 2.0;
       let libreactperfloggerjniW = 5.0;
         short_tbF += `${parseInt(`${libreactperfloggerjniW}`)}`;
         iconarrowrightblack_ *= parseFloat(`${3}`);
          let ccdfbdabcabbbedb6: Array<any> = [710, 293];
          let component4 = 1.0;
         iconarrowrightblack_ -= parseFloat(`${indicatorw.length / 1}`);
         ccdfbdabcabbbedb6 = [parseInt(`${component4}`)];
         component4 -= ccdfbdabcabbbedb6.length;
         leaguedetailsbg_.push(indicatorw.length);
         iconarrowrightblack_ += (parseFloat(`${short_tbF == String.fromCharCode(119,0) ? short_tbF.length : leaguedetailsbg_.length}`));
          let yellowanimationlivei = String.fromCharCode(108,97,117,110,99,104,95,50,95,55,50,0);
         indicatorw += `${yellowanimationlivei.length / 3}`;
         iconarrowrightblack_ *= parseFloat(`${1 ^ parseInt(`${iconarrowrightblack_}`)}`);
      shareblackX += `${(String.fromCharCode(69,0) == yellowD ? short_tbF.length : yellowD.length)}`;
      guideT += parseFloat(`${1}`);
   if (searchbarT < 2) {
       let orangetickV = String.fromCharCode(120,95,49,55,95,105,110,116,112,0);
       let downloadingC: Array<any> = [913, 647, 814];
       let baselinej = String.fromCharCode(116,95,52,54,95,100,105,115,116,111,114,116,105,111,110,0);
       let teamq = String.fromCharCode(99,111,100,101,99,105,100,95,115,95,51,52,0);
         downloadingC = [downloadingC.length];
         baselinej = `${(baselinej == String.fromCharCode(81,0) ? downloadingC.length : baselinej.length)}`;
      for (let k = 0; k < 1; k++) {
         baselinej += `${baselinej.length}`;
      }
       let expandC = 2;
       let classesP = 0;
      while (!downloadingC.includes(expandC)) {
          let owngoal_ = String.fromCharCode(109,111,118,101,110,99,95,116,95,53,56,0);
         downloadingC = [classesP];
         owngoal_ = `${owngoal_.length}`;
         break;
      }
          let yingJ = false;
          let down3 = String.fromCharCode(114,101,117,112,108,111,97,100,105,110,103,95,51,95,50,49,0);
          let schedulero = 1.0;
         expandC *= expandC / (Math.max(classesP, 10));
         yingJ = schedulero <= 31.55;
         down3 += `${(parseInt(`${schedulero}`) % (Math.max(2, (yingJ ? 1 : 3))))}`;
      while (teamq.length <= 1) {
          let sharedr = String.fromCharCode(120,95,55,51,95,115,105,103,112,97,115,115,0);
         classesP -= downloadingC.length + sharedr.length;
         break;
      }
          let tooltipsx = String.fromCharCode(116,95,54,95,111,114,116,104,111,103,111,110,97,108,105,122,101,0);
          let redscoreballd = String.fromCharCode(118,95,51,54,95,102,116,118,98,108,97,110,107,0);
          let imagewatchliveC: Array<any> = [872, 175, 90];
         classesP += (String.fromCharCode(86,0) == tooltipsx ? tooltipsx.length : classesP);
         redscoreballd = `${redscoreballd.length - imagewatchliveC.length}`;
         imagewatchliveC.push(redscoreballd.length);
         classesP &= 1;
         downloadingC.push((String.fromCharCode(77,0) == baselinej ? baselinej.length : downloadingC.length));
         expandC /= Math.max(1, 2);
      while (3 <= (downloadingC.length * 2) && (2 * classesP) <= 1) {
         downloadingC = [expandC / 1];
         break;
      }
      searchbarT ^= orangetickV.length << (Math.min(2, teamq.length));
   }

  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';

   while (searchbarT >= predictiondefaultQ.length) {
      predictiondefaultQ = `${predictiondefaultQ.length + yellowD.length}`;
      break;
   }
       let basketballhometeamx: Array<any> = [72, 648];
       let iconviewergifO = 2.0;
       let playm = String.fromCharCode(112,95,56,56,95,118,112,100,97,116,97,0);
         iconviewergifO /= Math.max(2, (parseFloat(`${String.fromCharCode(85,0) == playm ? playm.length : basketballhometeamx.length}`)));
         basketballhometeamx.push(basketballhometeamx.length % 3);
          let homeplayerZ = 4.0;
         iconviewergifO += parseFloat(`${2 >> (Math.min(1, playm.length))}`);
         homeplayerZ += parseFloat(`${2 / (Math.max(1, parseInt(`${homeplayerZ}`)))}`);
      let arrowC = 6347435 >= playm.length;
      do {
          let iconstar3 = String.fromCharCode(115,116,97,99,107,116,114,97,99,101,95,110,95,55,55,0);
          let volumek = 4.0;
          let matchactiveN = String.fromCharCode(100,111,99,115,105,122,101,95,115,95,51,48,0);
         playm += `${(String.fromCharCode(99,0) == iconstar3 ? iconstar3.length : parseInt(`${volumek}`))}`;
         volumek /= Math.max(2 << (Math.min(2, matchactiveN.length)), 5);
         if (arrowC) {
            break;
         }
      } while (arrowC && (5 < (5 >> (Math.min(2, playm.length)))));
      for (let e = 0; e < 3; e++) {
         basketballhometeamx = [parseInt(`${iconviewergifO}`) & 2];
      }
          let selectedj = String.fromCharCode(98,95,56,53,95,108,97,117,110,99,104,101,114,0);
          let reminders = String.fromCharCode(103,115,109,100,101,99,95,99,95,57,56,0);
          let libreactnativejnid = 1.0;
         iconviewergifO *= parseFloat(`${3 << (Math.min(1, selectedj.length))}`);
         selectedj = `${reminders.length & parseInt(`${libreactnativejnid}`)}`;
         reminders = "3";
         libreactnativejnid /= Math.max(2, parseFloat(`${reminders.length >> (Math.min(5, Math.abs(parseInt(`${libreactnativejnid}`))))}`));
          let static_f1Z = false;
          let penaltyshootN = true;
          let heart6 = 1.0;
         basketballhometeamx.push(1);
         static_f1Z = 79.8 >= heart6;
         penaltyshootN = heart6 < 27.40;
         iconviewergifO *= parseFloat(`${parseInt(`${iconviewergifO}`)}`);
      while ((playm.length << (Math.min(Math.abs(1), 4))) > 2) {
          let mapbufferQ: Map<any, any> = new Map([[String.fromCharCode(117,95,57,50,95,99,97,108,99,117,97,108,116,101,0),117], [String.fromCharCode(99,108,101,97,114,101,100,95,102,95,52,54,0),269], [String.fromCharCode(103,95,54,57,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0),539]]);
         playm += `${playm.length + mapbufferQ.size}`;
         break;
      }
      footballfiledlayoutW = `${3 - predictiondefaultQ.length}`;
      rewindY = `${1 + searchbarT}`;
   if (rewindY.length > 5) {
      typingloadingM += `${predictiondefaultQ.length}`;
   }
   if (2 == (searchbarT / (Math.max(yellowD.length, 10))) && 2 == (searchbarT / (Math.max(5, yellowD.length)))) {
      yellowD = `${predictiondefaultQ.length >> (Math.min(2, Math.abs(parseInt(`${guideT}`))))}`;
   }
   for (let i = 0; i < 2; i++) {
      guideT -= parseFloat(`${3 - yellowD.length}`);
   }
   while (predictiondefaultQ != String.fromCharCode(80,0) || shareblackX.length == 3) {
       let scorepopsound1 = 1.0;
       let audiencep: Array<any> = [765, 393];
       let corec = 4.0;
       let imagewatchliveT = 4;
      for (let t = 0; t < 3; t++) {
         audiencep = [audiencep.length];
      }
         corec /= Math.max(parseFloat(`${parseInt(`${corec}`) * 3}`), 2);
          let tempO = String.fromCharCode(116,104,117,109,98,115,117,112,95,52,95,55,53,0);
          let p_lockW = false;
         imagewatchliveT &= tempO.length & 3;
          let wifirouterY = false;
          let qaage = String.fromCharCode(101,95,55,50,95,115,117,98,115,116,114,105,110,103,115,0);
         corec -= parseFloat(`${3 / (Math.max(1, parseInt(`${scorepopsound1}`)))}`);
         wifirouterY = qaage.length == 31;
         qaage += `${qaage.length + 3}`;
         scorepopsound1 -= 3;
         imagewatchliveT %= Math.max(audiencep.length / 2, 5);
         imagewatchliveT /= Math.max(1, parseInt(`${corec}`) << (Math.min(audiencep.length, 3)));
         imagewatchliveT %= Math.max(2, 4);
      if (2 <= (1 >> (Math.min(1, Math.abs(imagewatchliveT))))) {
         corec -= parseFloat(`${3}`);
      }
         audiencep.push(2 & audiencep.length);
         audiencep.push(2);
      for (let q = 0; q < 2; q++) {
         corec += parseFloat(`${2}`);
      }
      shareblackX += `${imagewatchliveT}`;
      break;
   }
   while (yellowD == colorsF) {
       let statisticsinactivey = 4;
      while ((2 % (Math.max(4, statisticsinactivey))) >= 1) {
         statisticsinactivey ^= statisticsinactivey * 1;
         break;
      }
         statisticsinactivey += statisticsinactivey;
      if (statisticsinactivey == statisticsinactivey) {
         statisticsinactivey <<= Math.min(Math.abs(3), 2);
      }
      colorsF = `${rewindY.length}`;
      break;
   }
  await RNFetchBlob.fs.writeFile(
    apiCacheFilePath,
    JSON.stringify([]),
  );
}