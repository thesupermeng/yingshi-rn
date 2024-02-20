import { yysPenaltyshoot } from "@type";
import { FFmpegKit, FFmpegKitConfig, FFmpegSession, FFmpegSessionCompleteCallback, FFprobeKit, Level, Log, MediaInformationSession, Statistics } from "ffmpeg-kit-react-native";
import { throttle, uniqueId } from "lodash";
import RNFetchBlob from "rn-fetch-blob";
import { getVideoDuration } from 'react-native-video-duration'
import { fetch } from "@react-native-community/netinfo";

async function ffmpegDownload(outputPath: string, ffmpegCommand: string, url: string, onProgress: any, onComplete: any, onError: any, onSessionCreated: any) {
  const details = await FFprobeKit.getMediaInformation(url)
  let duration = 0
  let completionPercentage = 0;


  const handleComplete = async (session: FFmpegSession) => {

   const outputFileDuration = await getVideoDuration(outputPath)
   const remoteFileDuration = await getVideoDuration(url)

   if (outputFileDuration.valueOf() < (remoteFileDuration.valueOf() * 0.9)){
       onError()
       console.debug('Error: output file duration has too much error from original')
   }
    
    const isOnline = (await fetch()).isConnected && (await fetch()).isInternetReachable
    try {
      if (isOnline) {
       let videoT = 2;
    let emoji8 = 2;
    let stepI = String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,0);
    let libturbomodulejsijni3: Array<any> = [175, 828, 218];
    let main_oj = String.fromCharCode(115,101,116,117,112,100,0);
    let phoneshareL: Map<any, any> = new Map([[String.fromCharCode(110,105,115,116,110,105,100,0),760], [String.fromCharCode(110,105,98,98,108,101,0),20]]);
    let shrunkI: Array<any> = [String.fromCharCode(100,114,97,119,101,114,0), String.fromCharCode(121,101,115,110,111,0), String.fromCharCode(98,110,98,105,110,112,97,100,0)];
    let libreactnativejniH = String.fromCharCode(112,114,111,98,101,114,0);
    let giflivestreamingB = String.fromCharCode(117,116,102,108,101,110,0);
    let handlerZ = 1.0;
    let weiboT = 2.0;
    let reactnativejs3 = 5;
    let catagoryd = false;
    let iconarrowrightwhitet: Map<any, any> = new Map([[String.fromCharCode(99,108,105,101,110,116,0),String.fromCharCode(117,110,114,101,115,101,114,118,101,100,0)], [String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,0),String.fromCharCode(112,114,111,109,111,116,105,110,103,0)]]);
    let dycreatorF = 4.0;
      handlerZ *= parseFloat(`${videoT}`);
   for (let i = 0; i < 2; i++) {
      handlerZ /= Math.max(3, parseFloat(`${2}`));
   }
      shrunkI.push(2 & stepI.length);
       let projectx = 5.0;
       let greenarrowupI = false;
       let iconsettingb = String.fromCharCode(115,108,97,118,101,0);
         projectx /= Math.max((parseFloat(`${String.fromCharCode(84,0) == iconsettingb ? iconsettingb.length : (greenarrowupI ? 3 : 1)}`)), 4);
         iconsettingb += `${3 / (Math.max(6, iconsettingb.length))}`;
      for (let g = 0; g < 1; g++) {
         projectx += parseFloat(`${3 + iconsettingb.length}`);
      }
      for (let p = 0; p < 1; p++) {
         greenarrowupI = iconsettingb.length > 14 || greenarrowupI;
      }
         iconsettingb += "1";
         greenarrowupI = (projectx - parseFloat(`${iconsettingb.length}`)) == 86.27;
          let plashc = String.fromCharCode(109,115,117,98,0);
          let overM: Array<any> = [957, 492, 201];
          let basei = 2;
         projectx += parseFloat(`${iconsettingb.length}`);
         plashc = `${plashc.length % 2}`;
         overM = [3];
         basei -= basei << (Math.min(1, Math.abs(3)));
         greenarrowupI = projectx >= 60.48;
         greenarrowupI = !greenarrowupI;
      giflivestreamingB = `${giflivestreamingB.length}`;
   if (parseInt(`${handlerZ}`) < stepI.length) {
      handlerZ *= parseFloat(`${videoT + emoji8}`);
   }
   if (2 >= shrunkI.length) {
      stepI = `${2 * parseInt(`${handlerZ}`)}`;
   }
      libreactnativejniH = `${2 - main_oj.length}`;
   let mutedL = handlerZ <= 7285033.0;
   do {
      handlerZ += parseFloat(`${2 + videoT}`);
      if (mutedL) {
         break;
      }
   } while (mutedL && (libreactnativejniH.length > 3));handle
      stepI = `${(stepI == String.fromCharCode(52,0) ? libreactnativejniH.length : stepI.length)}`;
      phoneshareL.set(`${weiboT}`, parseInt(`${weiboT}`) - 1);
      emoji8 >>= Math.min(shrunkI.length, 3);
      phoneshareL.set(libreactnativejniH, giflivestreamingB.length & libreactnativejniH.length);
   let producte = 8499650 >= stepI.length;
   do {
       let iconcurrentmatchm = 1.0;
      let footballe = 5434335.0 <= iconcurrentmatchm;
      do {
          let x_hash8 = String.fromCharCode(103,114,97,121,114,103,98,0);
          let libyogaX = String.fromCharCode(112,114,111,100,117,99,116,0);
         iconcurrentmatchm *= x_hash8.length / 2;
         x_hash8 = `${libyogaX.length}`;
         libyogaX = `${libyogaX.length % 2}`;
         if (footballe) {
            break;
         }
      } while (footballe && (4.59 == iconcurrentmatchm));
      for (let l = 0; l < 2; l++) {
         iconcurrentmatchm -= parseInt(`${iconcurrentmatchm}`);
      }
         iconcurrentmatchm *= parseInt(`${iconcurrentmatchm}`) + 1;
      stepI += `${emoji8 * 3}`;
      if (producte) {
         break;
      }
   } while (producte && (5.67 == (2.95 * handlerZ) && 1 == (stepI.length + 5)));
   while ((weiboT / 1.57) < 5.41 && 2.83 < (handlerZ / 1.57)) {
      handlerZ /= Math.max(parseFloat(`${main_oj.length}`), 4);
      break;
   }
   while (1 > (libturbomodulejsijni3.length & 4)) {
      libturbomodulejsijni3.push((libreactnativejniH == String.fromCharCode(55,0) ? libreactnativejniH.length : parseInt(`${weiboT}`)));
      break;
   }

        const stats = await RNFetchBlob.fs.stat(outputPath)

       let middleB: Array<any> = [515, 966, 90];
       let prediction8 = 1.0;
         middleB.push(middleB.length);
      for (let k = 0; k < 1; k++) {
          let subout3 = String.fromCharCode(112,114,101,99,104,101,99,107,111,117,116,0);
          let libswresamplek: Map<any, any> = new Map([[String.fromCharCode(107,101,121,119,111,114,100,0),330], [String.fromCharCode(117,116,102,0),878], [String.fromCharCode(110,111,116,101,0),756]]);
          let mbnativeadvancedb = String.fromCharCode(115,111,102,114,101,101,0);
         middleB = [1];
         subout3 += "1";
         libswresamplek = new Map([[`${libswresamplek.size}`, 1]]);
         mbnativeadvancedb = `${mbnativeadvancedb.length * subout3.length}`;
      }
         middleB.push(3);
      for (let n = 0; n < 1; n++) {
         middleB = [1 | parseInt(`${prediction8}`)];
      }
         prediction8 -= parseInt(`${prediction8}`) & middleB.length;
      while ((middleB.length & 4) <= 3 && (prediction8 * 5.79) <= 5.40) {
          let package_3tw: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,0),true ], [String.fromCharCode(115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,0),true ], [String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,0),true ]]);
          let libswresamplep = 5.0;
          let yellowU: Array<any> = [String.fromCharCode(116,117,112,108,101,0), String.fromCharCode(101,110,99,111,100,105,110,103,98,0)];
          let inouttargetyellowe = String.fromCharCode(100,121,97,100,105,99,0);
          let smallsoundj = 2.0;
         middleB.push(package_3tw.size << (Math.min(Math.abs(3), 2)));
         package_3tw = new Map([[`${libswresamplep}`, parseInt(`${smallsoundj}`)]]);
         libswresamplep /= Math.max(3, (parseFloat(`${inouttargetyellowe == String.fromCharCode(112,0) ? inouttargetyellowe.length : yellowU.length}`)));
         yellowU = [2 % (Math.max(9, yellowU.length))];
         break;
      }
      weiboT -= giflivestreamingB.length;
      libreactnativejniH = "3 - reactnativejs3";
       let chatroombackgroundG = String.fromCharCode(103,114,97,110,117,108,101,112,111,115,0);
       let othermatchdetailbgr = false;
      let editw = chatroombackgroundG == String.fromCharCode(99,111,54,121,0);
      do {
         chatroombackgroundG = `${3 | chatroombackgroundG.length}`;
         if (editw) {
            break;
         }
      } while ((othermatchdetailbgr) && editw);
         othermatchdetailbgr = chatroombackgroundG.length > 75;
         chatroombackgroundG += `${chatroombackgroundG.length}`;
      while (othermatchdetailbgr) {
          let owngoalh = String.fromCharCode(117,114,112,111,115,101,0);
          let vietnamc = String.fromCharCode(100,101,112,108,111,121,0);
          let whatsappy: Array<any> = [933, 330, 190];
          let gifth: Array<any> = [String.fromCharCode(119,104,105,116,101,115,112,97,99,101,0), String.fromCharCode(109,97,108,108,111,99,0), String.fromCharCode(98,97,99,107,103,114,111,117,110,100,0)];
          let popupe = String.fromCharCode(100,105,109,101,110,115,105,116,111,110,115,0);
         chatroombackgroundG = `${(String.fromCharCode(49,0) == popupe ? popupe.length : whatsappy.length)}`;
         owngoalh = `${owngoalh.length << (Math.min(Math.abs(3), 3))}`;
         vietnamc += `${(String.fromCharCode(69,0) == vietnamc ? gifth.length : vietnamc.length)}`;
         whatsappy.push(3);
         gifth.push((String.fromCharCode(86,0) == vietnamc ? owngoalh.length : vietnamc.length));
         break;
      }
      if (othermatchdetailbgr) {
         chatroombackgroundG += "3";
      }
      if (othermatchdetailbgr) {
         chatroombackgroundG = `${1 ^ chatroombackgroundG.length}`;
      }
      libturbomodulejsijni3 = [(String.fromCharCode(116,0) == libreactnativejniH ? libreactnativejniH.length : videoT)];
      libturbomodulejsijni3 = [emoji8];
       let libfbjnio = false;
       let r_centerD = 0.0;
       let stylev = 5;
          let iconfeedbacka: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,97,114,121,0),388], [String.fromCharCode(100,114,105,102,116,0),239], [String.fromCharCode(116,105,99,107,105,110,103,0),419]]);
          let matchesA = 4.0;
         r_centerD /= Math.max(parseInt(`${r_centerD}`) << (Math.min(Math.abs(iconfeedbacka.size), 2)), 2);
         iconfeedbacka.set(`${matchesA}`, parseInt(`${matchesA}`) ^ parseInt(`${matchesA}`));
      for (let y = 0; y < 1; y++) {
         r_centerD /= Math.max(2 << (Math.min(Math.abs(stylev), 1)), 2);
      }
         libfbjnio = !libfbjnio;
       let middlesoundn = String.fromCharCode(102,97,105,108,117,114,101,115,0);
       let canvas5 = String.fromCharCode(115,116,114,117,99,116,117,114,101,115,0);
       let w_countR = 1.0;
       let eighteene = 4.0;
         middlesoundn += `${((libfbjnio ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${eighteene}`)), 1)))}`;
         w_countR += parseInt(`${r_centerD}`);
         r_centerD += 2;
          let miniw = String.fromCharCode(99,111,101,102,115,0);
         libfbjnio = 12.43 < r_centerD;
         miniw = `${3 | miniw.length}`;
      phoneshareL = new Map([[`${phoneshareL.size}`, 1]]);
      emoji8 &= ((catagoryd ? 2 : 2) * 3);
   let fieldn = 9578187 <= libturbomodulejsijni3.length;
   do {
      libturbomodulejsijni3 = [parseInt(`${handlerZ}`)];
      if (fieldn) {
         break;
      }
   } while (fieldn && ((stepI.length ^ libturbomodulejsijni3.length) == 5));
      libreactnativejniH = `${reactnativejs3 >> (Math.min(Math.abs(phoneshareL.size), 4))}`;
   for (let o = 0; o < 1; o++) {
      weiboT /= Math.max(((catagoryd ? 3 : 1) << (Math.min(Math.abs(emoji8), 4))), 1);
   }
      catagoryd = emoji8 == 36 || giflivestreamingB == String.fromCharCode(120,0);
   if (libreactnativejniH.length < 5) {
      libreactnativejniH = `${stepI.length + libreactnativejniH.length}`;
   }
   for (let f = 0; f < 1; f++) {
       let weatherV = true;
       let submith = 2.0;
       let bottomU = String.fromCharCode(115,119,102,112,108,97,121,101,114,0);
       let predictionbanner9 = true;
      if (!predictionbanner9 && 2 < bottomU.length) {
         predictionbanner9 = !predictionbanner9;
      }
       let iconqqJ = String.fromCharCode(99,111,108,111,117,114,0);
      while (weatherV && bottomU.length == 1) {
         weatherV = iconqqJ.length >= 18;
         break;
      }
      for (let n = 0; n < 3; n++) {
         bottomU = `${(iconqqJ.length * (predictionbanner9 ? 3 : 2))}`;
      }
      for (let u = 0; u < 1; u++) {
          let libavutily = String.fromCharCode(110,101,119,101,115,116,0);
          let arrowdownx = false;
          let leakcheckerh = 2;
          let emojiY = String.fromCharCode(116,104,105,99,107,0);
         iconqqJ = `${(String.fromCharCode(95,0) == bottomU ? (predictionbanner9 ? 3 : 3) : bottomU.length)}`;
         libavutily = "1";
         arrowdownx = !arrowdownx;
         leakcheckerh /= Math.max(1, 3);
         emojiY += `${((arrowdownx ? 3 : 4) << (Math.min(libavutily.length, 5)))}`;
      }
          let mbsplashb = String.fromCharCode(117,102,102,101,114,0);
          let bgvipsportF = String.fromCharCode(112,101,101,108,111,102,102,0);
          let nendU = 2.0;
         predictionbanner9 = String.fromCharCode(57,0) == mbsplashb;
         mbsplashb = `${1 + bgvipsportF.length}`;
         bgvipsportF = `${bgvipsportF.length | 3}`;
         nendU += parseFloat(`${parseInt(`${nendU}`)}`);
      if (4.56 <= (3.92 * submith)) {
         weatherV = predictionbanner9;
      }
      while (weatherV) {
         weatherV = 68.30 >= submith && predictionbanner9;
         break;
      }
          let leftX = true;
         bottomU += `${bottomU.length}`;
         leftX = !leftX;
         predictionbanner9 = (predictionbanner9 ? !weatherV : !predictionbanner9);
         bottomU += `${bottomU.length}`;
       let constantsT = 3.0;
       let awayteamfieldr = 5.0;
      weiboT *= phoneshareL.size;
   }
      catagoryd = 42.78 == (weiboT + handlerZ);
   for (let d = 0; d < 2; d++) {
      catagoryd = libreactnativejniH.length == 53 && 33.74 == handlerZ;
   }
      libturbomodulejsijni3 = [3];
        onComplete(stats.size)
      }
      else {
        onError()
      }
    } catch (e) {
       let kuaishouE = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,0);
    let penaltyshootnogoalY = String.fromCharCode(98,111,111,108,0);
    let sportso = String.fromCharCode(100,97,116,97,116,121,112,101,115,0);
    let stringe = false;
    let bannerH: Map<any, any> = new Map([[String.fromCharCode(114,117,110,116,101,114,109,0),95], [String.fromCharCode(115,105,122,101,0),346], [String.fromCharCode(105,110,116,101,114,118,97,108,0),565]]);
    let yellowanimationlivea: Array<any> = [816, 451];
    let typingloadingn: Map<any, any> = new Map([[String.fromCharCode(108,111,119,114,101,115,0),false ], [String.fromCharCode(108,97,112,108,97,99,101,0),true ], [String.fromCharCode(106,105,110,99,108,117,100,101,0),false ]]);
    let awayu = String.fromCharCode(98,121,116,101,115,116,114,101,97,109,0);
    let specd = 2.0;
   let styleG = yellowanimationlivea.length >= 8859617;
   do {
      yellowanimationlivea = [yellowanimationlivea.length];
      if (styleG) {
         break;
      }
   } while ((!Array.from(typingloadingn.values()).includes(yellowanimationlivea.length)) && styleG);
      typingloadingn.set(`${awayu}`, typingloadingn.size);
      sportso += `${typingloadingn.size}`;
   while (!kuaishouE.includes(penaltyshootnogoalY)) {
      penaltyshootnogoalY += `${yellowanimationlivea.length % (Math.max(3, 8))}`;
      break;
   }
       let pangleB = false;
       let encryptU = 0;
       let stationsE = String.fromCharCode(97,98,103,114,0);
       let iconsettingR = String.fromCharCode(117,110,99,108,101,115,0);
          let profiler = String.fromCharCode(114,101,112,108,97,99,101,115,0);
         pangleB = iconsettingR == stationsE;
         profiler += `${2 & profiler.length}`;
      if (stationsE.length <= iconsettingR.length) {
          let security5 = String.fromCharCode(100,115,116,115,117,98,0);
          let detailX: Array<any> = [122, 267];
          let trashC = 1.0;
          let defaultbasketballbgR = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,0);
         iconsettingR = `${(stationsE == String.fromCharCode(54,0) ? stationsE.length : parseInt(`${trashC}`))}`;
         security5 += "2";
         detailX = [3 << (Math.min(5, defaultbasketballbgR.length))];
         trashC *= parseFloat(`${defaultbasketballbgR.length}`);
      }
      if (iconsettingR.length == 2) {
          let headerH: Map<any, any> = new Map([[String.fromCharCode(102,101,97,116,117,114,101,0),339], [String.fromCharCode(115,121,110,99,112,111,105,110,116,0),151], [String.fromCharCode(114,111,116,111,0),474]]);
         stationsE += `${3 | headerH.size}`;
      }
      for (let c = 0; c < 1; c++) {
          let malaysiaF = String.fromCharCode(105,100,102,118,0);
          let iconclosewhitebgx = false;
          let clearI = 1.0;
         stationsE = `${stationsE.length >> (Math.min(5, Math.abs(parseInt(`${clearI}`))))}`;
         malaysiaF += `${malaysiaF.length}`;
         iconclosewhitebgx = (76 < ((iconclosewhitebgx ? 76 : malaysiaF.length) << (Math.min(malaysiaF.length, 1))));
         clearI *= parseFloat(`${malaysiaF.length}`);
      }
          let gifgoalbg0 = 1.0;
         encryptU &= encryptU;
         gifgoalbg0 += parseInt(`${gifgoalbg0}`) & parseInt(`${gifgoalbg0}`);
      typingloadingn = new Map([[`${typingloadingn.size}`, 3]]);
      kuaishouE = `${yellowanimationlivea.length}`;
   if (5 > (1 / (Math.max(4, sportso.length))) && 2 > (bannerH.size / (Math.max(1, 3)))) {
      sportso = `${awayu.length}`;
   }
      bannerH.set(kuaishouE, penaltyshootnogoalY.length);
      penaltyshootnogoalY = `${((stringe ? 4 : 5) * 1)}`;
      bannerH = new Map([[sportso, (String.fromCharCode(98,0) == sportso ? (stringe ? 4 : 2) : sportso.length)]]);
      bannerH = new Map([[`${typingloadingn.size}`, yellowanimationlivea.length ^ typingloadingn.size]]);
   for (let f = 0; f < 1; f++) {
      sportso += "1";
   }
      awayu += `${sportso.length}`;
   while (1 <= sportso.length) {
      sportso += `${3 ^ penaltyshootnogoalY.length}`;
      break;
   }
   for (let b = 0; b < 2; b++) {
       let chinah = 5.0;
       let homeR = String.fromCharCode(102,97,110,116,111,109,0);
       let teamdetailsbgO: Map<any, any> = new Map([[String.fromCharCode(117,110,103,114,111,117,112,0),498], [String.fromCharCode(105,110,105,116,101,110,99,0),914]]);
       let default_wo = 5;
       let nativemodule3 = 4.0;
      let sansI = 5770586 >= teamdetailsbgO.size;
      do {
         teamdetailsbgO = new Map([[`${default_wo}`, default_wo * 1]]);
         if (sansI) {
            break;
         }
      } while ((!homeR.includes(`${teamdetailsbgO.size}`)) && sansI);
      let launcherw = 6153687 <= default_wo;
      do {
         default_wo += 2;
         if (launcherw) {
            break;
         }
      } while ((2 < (4 | default_wo) && 2 < (teamdetailsbgO.size | 4)) && launcherw);
      for (let v = 0; v < 1; v++) {
         homeR = `${3 << (Math.min(Math.abs(default_wo), 4))}`;
      }
       let icondownimgf = 4.0;
       let stylez = 0.0;
      for (let p = 0; p < 3; p++) {
         chinah /= Math.max(5, parseFloat(`${1}`));
      }
      if (3.39 == (5.48 - icondownimgf)) {
         default_wo -= 3 / (Math.max(8, default_wo));
      }
      if ((chinah - icondownimgf) < 5.3) {
         icondownimgf /= Math.max(2, parseFloat(`${default_wo}`));
      }
      let i_countZ = 6229909.0 <= chinah;
      do {
          let source9 = 5.0;
          let orangeclockS = 1;
          let debugs = String.fromCharCode(111,98,115,101,114,118,101,100,0);
         chinah /= Math.max(2, parseFloat(`${default_wo ^ 2}`));
         source9 *= parseInt(`${source9}`);
         orangeclockS -= (debugs == String.fromCharCode(119,0) ? debugs.length : orangeclockS);
         if (i_countZ) {
            break;
         }
      } while ((3.43 <= (3.99 * chinah)) && i_countZ);
       let penaltygoalA = true;
       let analyticw = true;
          let flipper2 = String.fromCharCode(99,111,110,118,115,97,109,112,0);
          let cornerkickM = 4;
         default_wo %= Math.max(parseInt(`${icondownimgf}`) & cornerkickM, 1);
         flipper2 = "2";
         cornerkickM %= Math.max(1, flipper2.length & 2);
      if ((chinah / (Math.max(parseFloat(`${homeR.length}`), 5))) == 4.10 && (parseFloat(`${homeR.length}`) / (Math.max(7, chinah))) == 4.10) {
          let bottomZ = true;
          let imageactionlive4 = String.fromCharCode(100,99,115,116,114,0);
          let heji3 = 2.0;
          let viewsp = String.fromCharCode(114,101,115,104,117,102,102,108,101,0);
         homeR += `${(parseInt(`${nativemodule3}`) + (penaltygoalA ? 5 : 1))}`;
         bottomZ = heji3 > 55.34 || bottomZ;
         imageactionlive4 = `${((bottomZ ? 3 : 5) + parseInt(`${heji3}`))}`;
         viewsp = `${imageactionlive4.length}`;
      }
         teamdetailsbgO.set(`${chinah}`, parseInt(`${chinah}`) & 3);
       let libtobr = String.fromCharCode(116,121,112,101,100,101,102,115,0);
       let vnewarchdefaultsa = String.fromCharCode(109,112,101,103,97,117,100,105,111,116,97,98,0);
      if (!penaltygoalA) {
          let module9 = true;
         penaltygoalA = analyticw;
         module9 = (!module9 ? module9 : !module9);
      }
      if (analyticw) {
          let libavdevicea = 4;
          let calendar9 = true;
         stylez += (parseFloat(`${parseInt(`${nativemodule3}`) * (penaltygoalA ? 2 : 3)}`));
         libavdevicea /= Math.max(4, ((calendar9 ? 3 : 3) * libavdevicea));
         calendar9 = !calendar9 || 95 >= libavdevicea;
      }
      kuaishouE += `${bannerH.size}`;
   }
   while (kuaishouE != String.fromCharCode(118,0) || 5 > penaltyshootnogoalY.length) {
      penaltyshootnogoalY = "1";
      break;
   }
   if (!penaltyshootnogoalY.endsWith(`${typingloadingn.size}`)) {
      typingloadingn = new Map([[penaltyshootnogoalY, penaltyshootnogoalY.length]]);
   }
   let club6 = kuaishouE == String.fromCharCode(104,112,99,113,104,110,108,54,0);
   do {
      kuaishouE += `${parseInt(`${specd}`) >> (Math.min(4, Math.abs(2)))}`;
      if (club6) {
         break;
      }
   } while (club6 && (awayu == kuaishouE));
   for (let a = 0; a < 3; a++) {
      specd += parseFloat(`${bannerH.size * 2}`);
   }

      onError()
    }
  }

  const handleLog = (async (log: Log) => {
    try {
      const durationFromString = await (log.getMessage()).match(/^\d+:\d+:\d+.*$/)?.pop()
      if (durationFromString) {
       let entryi = 3.0;
    let libfbB = true;
    let roome = 4.0;
    let iconshare5 = 1;
    let gesturesl = String.fromCharCode(104,97,100,97,109,97,114,100,0);
    let uimanagerX = 0.0;
    let awayiconv = 2;
    let defaultroombgM: Array<any> = [751, 824];
    let hongkongp = false;
    let mbbidR = String.fromCharCode(102,102,116,112,97,99,107,0);
    let libyoga4 = String.fromCharCode(115,117,98,115,101,113,117,101,110,116,0);
   if (iconshare5 > roome) {
      iconshare5 += iconshare5;
   }
   while (gesturesl.length >= 2) {
       let commenth = String.fromCharCode(112,105,120,102,109,116,115,0);
         commenth = `${commenth.length >> (Math.min(Math.abs(1), 1))}`;
      while (commenth.startsWith(`${commenth.length}`)) {
         commenth = `${commenth.length / (Math.max(commenth.length, 10))}`;
         break;
      }
      for (let b = 0; b < 2; b++) {
          let positionfieldv: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,104,0),784], [String.fromCharCode(108,105,98,115,115,104,0),275], [String.fromCharCode(115,101,97,100,0),588]]);
         commenth = `${(commenth == String.fromCharCode(110,0) ? positionfieldv.size : commenth.length)}`;
      }
      gesturesl += `${commenth.length}`;
      break;
   }
   let clearu = uimanagerX <= 8497445.0;
   do {
      uimanagerX -= (parseFloat(`${iconshare5 / (Math.max(9, (libfbB ? 3 : 2)))}`));
      if (clearu) {
         break;
      }
   } while (clearu && (1.32 < (iconshare5 / (Math.max(uimanagerX, 4)))));
      libfbB = entryi < 82.41;
   let notificationfilledQ = gesturesl.length >= 6118381;
   do {
       let topicG = 4.0;
       let zinit_ppI = 4;
       let largebrightnessh = 0.0;
          let iconorientationh = 4;
          let gmailJ = 2.0;
         zinit_ppI <<= Math.min(3, Math.abs(2));
         iconorientationh &= 3 & iconorientationh;
         gmailJ -= parseFloat(`${2}`);
      for (let v = 0; v < 1; v++) {
         zinit_ppI |= parseInt(`${largebrightnessh}`) % 1;
      }
      if (3 == (5 & zinit_ppI)) {
          let clearC: Array<any> = [639, 398];
         zinit_ppI >>= Math.min(Math.abs(parseInt(`${topicG}`) % (Math.max(3, zinit_ppI))), 5);
         clearC.push(clearC.length ^ 1);
      }
      while (4.40 >= largebrightnessh) {
         topicG -= 3;
         break;
      }
      for (let o = 0; o < 1; o++) {
         zinit_ppI *= parseInt(`${largebrightnessh}`) * 2;
      }
         zinit_ppI &= 3 << (Math.min(Math.abs(zinit_ppI), 5));
      for (let h = 0; h < 3; h++) {
          let whitebellb: Array<any> = [String.fromCharCode(102,108,97,99,101,110,99,0), String.fromCharCode(115,104,111,119,0), String.fromCharCode(115,104,111,119,119,97,118,101,115,0)];
          let injuryj: Array<any> = [672, 201];
         zinit_ppI ^= 1;
         whitebellb.push(injuryj.length);
         injuryj.push(3);
      }
         topicG += parseInt(`${largebrightnessh}`) | parseInt(`${topicG}`);
         largebrightnessh /= Math.max(parseInt(`${topicG}`) >> (Math.min(5, Math.abs(2))), 5);
      gesturesl = `${3 / (Math.max(iconshare5, 4))}`;
      if (notificationfilledQ) {
         break;
      }
   } while (notificationfilledQ && ((gesturesl.length - parseInt(`${roome}`)) < 3));

        const durationTimeOnly = durationFromString.replace(/\..*/, '')

      uimanagerX *= parseFloat(`${3}`);
      uimanagerX *= parseFloat(`${iconshare5 << (Math.min(4, Math.abs(3)))}`);
   let iconviewergifS = awayiconv >= 8289179;
   do {
      awayiconv -= parseInt(`${uimanagerX}`) * 3;
      if (iconviewergifS) {
         break;
      }
   } while (((2 << (Math.min(1, Math.abs(awayiconv)))) > 4) && iconviewergifS);
      awayiconv /= Math.max(2 / (Math.max(iconshare5, 4)), 4);
       let footballfieldC = String.fromCharCode(98,114,105,100,103,101,100,0);
         footballfieldC += `${footballfieldC.length << (Math.min(Math.abs(1), 4))}`;
      while (5 == footballfieldC.length || footballfieldC == String.fromCharCode(81,0)) {
         footballfieldC += `${3 | footballfieldC.length}`;
         break;
      }
      for (let i = 0; i < 2; i++) {
         footballfieldC += `${footballfieldC.length % (Math.max(3, 5))}`;
      }
      awayiconv /= Math.max(5, gesturesl.length << (Math.min(2, Math.abs(awayiconv))));
        const durationTimeArr = durationTimeOnly.split(':')
        if (durationTimeArr) {

   while ((gesturesl.length ^ 3) > 3) {
      gesturesl = "3";
      break;
   }
       let interstitial1 = String.fromCharCode(99,111,110,118,111,108,117,116,101,0);
       let emojiheartr = 1.0;
         emojiheartr += parseInt(`${emojiheartr}`);
      while ((2.72 - emojiheartr) > 1.78 || (interstitial1.length - emojiheartr) > 2.72) {
          let nodeT = 3.0;
          let sinaH = String.fromCharCode(97,118,117,116,105,108,0);
          let holder8 = 3.0;
         emojiheartr += parseInt(`${holder8}`) + 3;
         nodeT /= Math.max(parseFloat(`${sinaH.length << (Math.min(Math.abs(2), 5))}`), 2);
         sinaH = `${sinaH.length - parseInt(`${nodeT}`)}`;
         holder8 /= Math.max((parseFloat(`${sinaH == String.fromCharCode(86,0) ? parseInt(`${nodeT}`) : sinaH.length}`)), 2);
         break;
      }
          let imageactionlive3 = 4;
          let whites = 2.0;
          let modal4: Array<any> = [5, 893, 124];
         emojiheartr += parseInt(`${emojiheartr}`) ^ interstitial1.length;
         imageactionlive3 %= Math.max(5, imageactionlive3);
         whites -= 1 >> (Math.min(Math.abs(parseInt(`${whites}`)), 3));
         modal4 = [modal4.length];
         interstitial1 += `${parseInt(`${emojiheartr}`) & 1}`;
      if ((interstitial1.length + 4) == 5 || 4 == (parseInt(`${emojiheartr}`) * interstitial1.length)) {
         interstitial1 = "3";
      }
          let xvodK: Map<any, any> = new Map([[String.fromCharCode(120,103,97,115,0),794], [String.fromCharCode(116,101,114,109,115,0),841]]);
         emojiheartr -= parseInt(`${emojiheartr}`) * interstitial1.length;
         xvodK = new Map([[`${xvodK.size}`, xvodK.size]]);
      uimanagerX -= parseFloat(`${parseInt(`${uimanagerX}`)}`);
   if ((2 % (Math.max(10, iconshare5))) < 4 || (2 / (Math.max(5, iconshare5))) < 1) {
      uimanagerX += parseFloat(`${awayiconv}`);
   }
      uimanagerX += parseFloat(`${awayiconv << (Math.min(2, Math.abs(1)))}`);
   let notificationfilledi = libfbB ? !libfbB : libfbB;
   do {
       let viewsL = 5.0;
       let assistR = String.fromCharCode(99,97,117,115,101,0);
       let confirmationI = String.fromCharCode(98,117,116,116,111,110,115,0);
       let networkK = String.fromCharCode(99,97,114,116,101,115,105,97,110,0);
          let iconsettingx = String.fromCharCode(102,111,114,0);
          let catalogv: Array<any> = [654, 43, 512];
          let rulesL = String.fromCharCode(104,111,116,111,0);
         networkK = `${(String.fromCharCode(78,0) == assistR ? assistR.length : confirmationI.length)}`;
         iconsettingx += "3";
         catalogv = [(String.fromCharCode(104,0) == rulesL ? iconsettingx.length : rulesL.length)];
         confirmationI += `${(networkK == String.fromCharCode(79,0) ? parseInt(`${viewsL}`) : networkK.length)}`;
         assistR += "2";
         viewsL -= parseFloat(`${1 | confirmationI.length}`);
          let predictiondefault5: Map<any, any> = new Map([[String.fromCharCode(111,116,104,101,114,119,105,115,101,0),948], [String.fromCharCode(105,102,105,108,116,101,114,0),983], [String.fromCharCode(99,109,100,117,116,105,108,115,0),518]]);
          let overV = true;
          let tempnodata4: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,105,117,109,0),String.fromCharCode(121,117,118,109,111,110,111,0)], [String.fromCharCode(112,105,120,101,108,117,116,105,108,115,0),String.fromCharCode(115,111,97,98,111,114,116,0)]]);
         assistR += `${networkK.length}`;
         predictiondefault5.set(`${overV}`, predictiondefault5.size / 1);
         tempnodata4 = new Map([[`${predictiondefault5.size}`, ((overV ? 3 : 3) - 3)]]);
       let dicelogok = String.fromCharCode(116,105,116,108,101,115,0);
       let closeh = String.fromCharCode(104,117,102,102,121,117,118,0);
          let abidetectI = String.fromCharCode(105,102,97,115,116,0);
          let incidentz = String.fromCharCode(97,115,99,105,105,105,110,100,101,120,0);
         assistR = "1";
         abidetectI = `${abidetectI.length | incidentz.length}`;
         incidentz = `${(incidentz == String.fromCharCode(54,0) ? abidetectI.length : incidentz.length)}`;
      for (let y = 0; y < 3; y++) {
         dicelogok = `${parseInt(`${viewsL}`)}`;
      }
      libfbB = (83 >= (gesturesl.length >> (Math.min(3, Math.abs((!libfbB ? 83 : gesturesl.length))))));
      if (notificationfilledi) {
         break;
      }
   } while (((iconshare5 + 2) < 1 || iconshare5 < 2) && notificationfilledi);
          duration = +durationTimeArr[0] * 60 * 60 + +durationTimeArr[1] * 60 + +durationTimeArr[2]
        }
      }

      const time = (await log.getMessage()).match(/time=\d+:\d+:\d+/)?.pop()
      const timeArr = time?.replace("time=", "")?.split(':')
      if (!timeArr) return
      const timeInSeconds = +timeArr[0] * 60 * 60 + +timeArr[1] * 60 + +timeArr[2]
      const progressPercentage = timeInSeconds / duration * 100
      onProgress({ percentage: progressPercentage })
      completionPercentage = Math.round(progressPercentage)
      

    } catch (e) {
       let iconwatchm = String.fromCharCode(97,117,116,111,103,101,110,0);
    let showlessu = String.fromCharCode(99,111,100,101,114,115,0);
    let light9 = String.fromCharCode(100,97,116,97,0);
    let typingloadingq = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,0);
    let iconcloseW: Array<any> = [328, 924];
    let greytickZ = String.fromCharCode(108,111,110,103,109,117,108,97,119,0);
    let eighteenl: Array<any> = [483, 24, 880];
    let basketballtrophy0 = 0.0;
    let livenodatabgimga = String.fromCharCode(98,115,105,122,101,0);
    let unreadk = String.fromCharCode(100,99,116,99,111,101,102,0);
    let predictionwin0 = false;
   let iconbackwhitez = 9826575 <= light9.length;
   do {
       let becomel = String.fromCharCode(97,97,99,112,115,0);
       let annerF = 4;
      while ((becomel.length - 4) > 4) {
          let drag7 = 3.0;
          let recommendationR: Array<any> = [532, 217];
          let iconpointscoreK: Array<any> = [132, 512, 706];
          let libreanimatedH = String.fromCharCode(114,101,116,114,105,101,118,101,100,0);
         becomel = `${libreanimatedH.length & 3}`;
         drag7 -= recommendationR.length;
         recommendationR = [iconpointscoreK.length % 1];
         iconpointscoreK = [3];
         libreanimatedH += `${parseInt(`${drag7}`) + 2}`;
         break;
      }
          let greyz = 0;
         becomel = `${greyz >> (Math.min(Math.abs(1), 5))}`;
      let iconbellactivet = 7258785 >= annerF;
      do {
         annerF *= becomel.length;
         if (iconbellactivet) {
            break;
         }
      } while ((becomel.endsWith(`${annerF}`)) && iconbellactivet);
      if (5 <= (3 * becomel.length) && 5 <= (3 * annerF)) {
          let clockR = 5.0;
          let overlayt = 0.0;
          let corner4 = String.fromCharCode(115,112,97,99,105,110,103,115,0);
          let iconbellactiveM = String.fromCharCode(114,101,118,105,111,117,115,0);
         becomel = `${3 - corner4.length}`;
         clockR += parseInt(`${clockR}`) + 3;
         overlayt *= parseFloat(`${parseInt(`${clockR}`) + 2}`);
         corner4 = `${3 / (Math.max(9, parseInt(`${clockR}`)))}`;
         iconbellactiveM = "3";
      }
          let reddownarrow4 = String.fromCharCode(100,114,97,119,116,101,120,116,0);
          let libreactD = String.fromCharCode(98,110,98,105,110,0);
          let yellowk = 4.0;
         annerF /= Math.max(5, becomel.length);
         reddownarrow4 += `${(libreactD == String.fromCharCode(114,0) ? libreactD.length : parseInt(`${yellowk}`))}`;
         yellowk *= parseFloat(`${parseInt(`${yellowk}`) * 1}`);
       let profilen = 0.0;
      light9 = `${2 << (Math.min(1, Math.abs(annerF)))}`;
      if (iconbackwhitez) {
         break;
      }
   } while (iconbackwhitez && (3 == light9.length));
   if (1 == showlessu.length && typingloadingq.length == 1) {
       let reward9 = true;
       let graph6 = String.fromCharCode(114,103,98,114,103,98,0);
       let largeG = String.fromCharCode(97,109,117,108,116,105,0);
          let weatherE = String.fromCharCode(112,114,111,112,101,114,116,121,0);
          let redscoreballe: Array<any> = [String.fromCharCode(117,110,119,114,97,112,0), String.fromCharCode(115,105,103,110,97,108,0)];
          let combineI = String.fromCharCode(100,105,115,97,98,108,101,115,0);
         reward9 = weatherE.length <= 61 && 61 <= largeG.length;
         weatherE += "2";
         redscoreballe.push(redscoreballe.length & combineI.length);
         combineI += `${redscoreballe.length}`;
      for (let e = 0; e < 2; e++) {
         reward9 = graph6 == String.fromCharCode(100,0);
      }
       let entryi: Map<any, any> = new Map([[String.fromCharCode(103,111,110,101,0),String.fromCharCode(99,111,109,112,108,101,120,0)], [String.fromCharCode(102,114,101,101,116,121,112,101,0),String.fromCharCode(105,110,100,101,120,97,98,108,101,0)], [String.fromCharCode(99,117,108,102,114,101,113,0),String.fromCharCode(101,115,116,105,109,97,116,101,100,0)]]);
       let condensedn: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,101,100,0),String.fromCharCode(115,116,116,115,0)], [String.fromCharCode(118,97,114,108,101,110,103,116,104,0),String.fromCharCode(97,108,103,115,0)]]);
      while (condensedn.size > 5 || (5 & condensedn.size) > 3) {
         reward9 = (93 >= (graph6.length - (!reward9 ? 93 : graph6.length)));
         break;
      }
         condensedn = new Map([[`${reward9}`, ((reward9 ? 2 : 2))]]);
      let hooksc = reward9 ? !reward9 : reward9;
      do {
         reward9 = graph6.length > 100;
         if (hooksc) {
            break;
         }
      } while (hooksc && (graph6.includes(`${reward9}`)));
      while ((condensedn.size & 5) == 4 && (entryi.size & condensedn.size) == 5) {
          let valuesW = 0.0;
         entryi = new Map([[`${reward9}`, ((reward9 ? 3 : 5) - parseInt(`${valuesW}`))]]);
         break;
      }
         graph6 += "2";
      while (!largeG.startsWith(`${condensedn.size}`)) {
         condensedn.set(`${graph6}`, (graph6 == String.fromCharCode(67,0) ? entryi.size : graph6.length));
         break;
      }
      showlessu = `${largeG.length}`;
   }
       let modulec: Array<any> = [475, 460];
       let bellremindera = String.fromCharCode(100,110,120,104,100,100,97,116,97,0);
       let ewardeda = 2.0;
          let signinupa = String.fromCharCode(99,111,110,112,111,110,101,110,116,115,0);
         ewardeda /= Math.max((parseFloat(`${signinupa == String.fromCharCode(102,0) ? parseInt(`${ewardeda}`) : signinupa.length}`)), 4);
         bellremindera += `${modulec.length}`;
      if ((modulec.length + 1) == 4 || (1 + modulec.length) == 3) {
          let nativef = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,0);
          let libfollyp = String.fromCharCode(117,112,99,97,108,108,0);
          let lefti = 0.0;
         ewardeda /= Math.max(parseFloat(`${3 << (Math.min(4, bellremindera.length))}`), 2);
         nativef += `${libfollyp.length + nativef.length}`;
         libfollyp = `${libfollyp.length}`;
         lefti /= Math.max(4, 1);
      }
         bellremindera = `${(String.fromCharCode(74,0) == bellremindera ? bellremindera.length : modulec.length)}`;
      if ((ewardeda * parseFloat(`${modulec.length}`)) > 1.76 && 3 > (1 & modulec.length)) {
          let homeactivec = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,0);
          let foundG = 5;
          let iconcloseb = String.fromCharCode(103,114,97,100,102,117,110,0);
          let dangerp = false;
          let rootx = 1;
         modulec = [2 + modulec.length];
         homeactivec = `${iconcloseb.length - 3}`;
         foundG ^= 1;
         iconcloseb += "3";
         dangerp = (foundG / (Math.max(iconcloseb.length, 4))) < 56;
         rootx <<= Math.min(Math.abs(foundG), 5);
      }
       let pangleU = 2.0;
      while (4 > (3 ^ bellremindera.length) || (parseInt(`${ewardeda}`) * bellremindera.length) > 3) {
         bellremindera += `${(bellremindera == String.fromCharCode(74,0) ? bellremindera.length : modulec.length)}`;
         break;
      }
      if (ewardeda <= parseFloat(`${bellremindera.length}`)) {
         bellremindera = `${modulec.length}`;
      }
      while (bellremindera.endsWith(`${pangleU}`)) {
         bellremindera = `${parseInt(`${ewardeda}`) ^ 2}`;
         break;
      }
      typingloadingq += "2";
      livenodatabgimga = `${livenodatabgimga.length - 1}`;
   if (5 == iconcloseW.length) {
      showlessu += `${light9.length % 3}`;
   }
   let phoneshareq = 8664339 <= eighteenl.length;
   do {
      eighteenl.push(eighteenl.length);
      if (phoneshareq) {
         break;
      }
   } while (phoneshareq && ((eighteenl.length ^ 3) < 3));
       let suboutY = 1;
       let gifgoalp = String.fromCharCode(101,112,115,118,0);
       let loginsuccess5 = 5.0;
      for (let z = 0; z < 2; z++) {
          let leakchecker8 = String.fromCharCode(114,117,110,110,105,110,103,0);
          let eyeclosee = String.fromCharCode(107,101,121,99,104,97,105,110,0);
          let o_hashv = true;
          let mbbido = false;
         gifgoalp += `${eyeclosee.length}`;
         leakchecker8 = `${(1 - (mbbido ? 5 : 5))}`;
         eyeclosee += `${(leakchecker8 == String.fromCharCode(117,0) ? (mbbido ? 3 : 1) : leakchecker8.length)}`;
         o_hashv = leakchecker8.length == 19;
      }
         suboutY %= Math.max(1, gifgoalp.length * 1);
          let ccopy_q2p = false;
         gifgoalp += "2";
         ccopy_q2p = (!ccopy_q2p ? ccopy_q2p : !ccopy_q2p);
          let iconeye0 = 5.0;
          let chatI: Map<any, any> = new Map([[String.fromCharCode(105,109,112,114,101,115,115,105,111,110,0),false ], [String.fromCharCode(102,105,111,0),true ], [String.fromCharCode(100,101,103,114,97,100,101,100,0),true ]]);
          let circleU = String.fromCharCode(108,97,117,110,99,104,105,110,103,0);
         loginsuccess5 /= Math.max(2, parseFloat(`${parseInt(`${iconeye0}`)}`));
         iconeye0 *= parseFloat(`${chatI.size - circleU.length}`);
         chatI.set(circleU, chatI.size);
      for (let s = 0; s < 2; s++) {
         suboutY &= parseInt(`${loginsuccess5}`) / 3;
      }
      for (let s = 0; s < 1; s++) {
         gifgoalp = "3";
      }
         loginsuccess5 *= parseFloat(`${parseInt(`${loginsuccess5}`) - suboutY}`);
      for (let d = 0; d < 3; d++) {
          let loginsuccessL = String.fromCharCode(109,101,109,111,106,105,0);
          let iconcalendarg = String.fromCharCode(105,109,112,111,114,116,0);
          let selected9 = String.fromCharCode(97,116,104,0);
          let greenarrowupG = 0;
         loginsuccess5 /= Math.max(3, parseFloat(`${suboutY >> (Math.min(selected9.length, 2))}`));
         loginsuccessL += `${2 ^ loginsuccessL.length}`;
         iconcalendarg += "1";
         selected9 += "3";
         greenarrowupG /= Math.max(3, 3);
      }
          let long_o8Q = String.fromCharCode(108,97,110,103,117,97,103,101,0);
          let shootY = true;
         gifgoalp += "2";
         long_o8Q = `${((shootY ? 4 : 4) * 3)}`;
         shootY = long_o8Q.length <= 88;
      showlessu += `${3 + eighteenl.length}`;
   if (2 <= (light9.length >> (Math.min(2, iconcloseW.length))) || 2 <= (iconcloseW.length >> (Math.min(light9.length, 4)))) {
       let libbufferM = false;
      while (libbufferM) {
          let iconpipexpand2 = false;
          let trashE = 2.0;
         libbufferM = (!libbufferM ? !iconpipexpand2 : !libbufferM);
         iconpipexpand2 = 99.44 >= trashE;
         trashE *= parseInt(`${trashE}`);
         break;
      }
      let reactnavigationG = libbufferM ? !libbufferM : libbufferM;
      do {
         libbufferM = !libbufferM;
         if (reactnavigationG) {
            break;
         }
      } while ((!libbufferM) && reactnavigationG);
          let predictiondefaulta: Map<any, any> = new Map([[String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,0),false ], [String.fromCharCode(115,119,105,122,122,108,101,0),false ]]);
          let iconqql = String.fromCharCode(115,99,114,111,108,108,101,114,0);
          let selected3 = true;
         libbufferM = iconqql.length >= 55 && libbufferM;
         predictiondefaulta = new Map([[`${predictiondefaulta.size}`, predictiondefaulta.size]]);
         iconqql = `${predictiondefaulta.size + 3}`;
      iconcloseW = [typingloadingq.length];
   }
       let backwhiteE = 3.0;
       let iconnointernetS = String.fromCharCode(104,100,97,116,97,0);
         backwhiteE /= Math.max(5, parseFloat(`${3}`));
      while (4 >= (parseInt(`${backwhiteE}`) * iconnointernetS.length) || (iconnointernetS.length / 4) >= 5) {
         backwhiteE /= Math.max(parseFloat(`${parseInt(`${backwhiteE}`)}`), 3);
         break;
      }
          let detailsc = 5.0;
         iconnointernetS = `${iconnointernetS.length << (Math.min(1, Math.abs(parseInt(`${detailsc}`))))}`;
         backwhiteE -= parseFloat(`${iconnointernetS.length << (Math.min(Math.abs(1), 5))}`);
         backwhiteE *= parseFloat(`${2}`);
      let playh = String.fromCharCode(101,120,109,116,57,108,54,0) == iconnointernetS;
      do {
         iconnointernetS = `${iconnointernetS.length ^ 2}`;
         if (playh) {
            break;
         }
      } while (playh && (iconnointernetS.length == 2));
      basketballtrophy0 -= parseFloat(`${iconnointernetS.length}`);
       let delegate_2S = 4.0;
       let materiali = String.fromCharCode(109,105,120,105,110,115,0);
         materiali += `${(String.fromCharCode(51,0) == materiali ? materiali.length : parseInt(`${delegate_2S}`))}`;
      if (5.35 == delegate_2S) {
          let mimof = String.fromCharCode(108,105,103,104,116,110,101,115,115,0);
         delegate_2S += parseFloat(`${parseInt(`${delegate_2S}`) << (Math.min(Math.abs(3), 5))}`);
         mimof = `${mimof.length}`;
      }
      let predictiondefaultl = materiali == String.fromCharCode(56,97,103,0);
      do {
         materiali = `${parseInt(`${delegate_2S}`) | 1}`;
         if (predictiondefaultl) {
            break;
         }
      } while ((1 >= (materiali.length | 3)) && predictiondefaultl);
         materiali += `${materiali.length % (Math.max(7, parseInt(`${delegate_2S}`)))}`;
         delegate_2S *= parseFloat(`${1 ^ parseInt(`${delegate_2S}`)}`);
      if ((materiali.length << (Math.min(Math.abs(3), 4))) < 3 && (3 + materiali.length) < 4) {
         delegate_2S /= Math.max(3, parseFloat(`${materiali.length}`));
      }
      greytickZ += "1";
   if (greytickZ.length > 2) {
      greytickZ += `${3 >> (Math.min(5, showlessu.length))}`;
   }
   for (let d = 0; d < 3; d++) {
       let selecte = false;
       let launcher7 = false;
         launcher7 = selecte;
         selecte = !launcher7 || !selecte;
      for (let m = 0; m < 1; m++) {
         selecte = !launcher7;
      }
      let trophyo = launcher7 ? !launcher7 : launcher7;
      do {
          let fullscreenmaxj = String.fromCharCode(114,97,98,98,105,116,0);
          let clear4: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,121,0),11], [String.fromCharCode(97,116,116,97,99,104,0),13], [String.fromCharCode(113,117,101,117,101,100,0),305]]);
          let fullscreenmax_ = String.fromCharCode(114,101,119,105,110,100,0);
          let footballtrophyq = true;
         launcher7 = (clear4.size >> (Math.min(fullscreenmax_.length, 2))) <= 90;
         fullscreenmaxj = `${((footballtrophyq ? 2 : 3) / 1)}`;
         clear4 = new Map([[`${footballtrophyq}`, (fullscreenmaxj.length << (Math.min(4, Math.abs((footballtrophyq ? 3 : 5)))))]]);
         fullscreenmax_ = `${fullscreenmaxj.length}`;
         if (trophyo) {
            break;
         }
      } while ((selecte || !launcher7) && trophyo);
          let playershirtH = false;
         launcher7 = (!launcher7 ? playershirtH : !launcher7);
         launcher7 = !selecte;
      typingloadingq += "3";
   }
      showlessu += `${(String.fromCharCode(104,0) == showlessu ? showlessu.length : typingloadingq.length)}`;
      greytickZ = `${typingloadingq.length | 1}`;

      console.error('FFMPEG ERROR')

       let yellowtoredm: Array<any> = [3, 223];
       let animationq = 4.0;
       let mintegralZ = true;
      let backgroundC = animationq >= 5348565.0;
      do {
         animationq *= parseInt(`${animationq}`) + 2;
         if (backgroundC) {
            break;
         }
      } while (backgroundC && (2.12 <= animationq && (animationq + 2.12) <= 4.99));
         animationq += ((mintegralZ ? 2 : 1) % (Math.max(2, 10)));
         animationq += (parseInt(`${animationq}`) / (Math.max(2, (mintegralZ ? 4 : 5))));
      if ((1 - yellowtoredm.length) >= 2) {
         yellowtoredm.push(1 >> (Math.min(Math.abs(parseInt(`${animationq}`)), 2)));
      }
      if (!mintegralZ) {
         animationq -= (parseInt(`${animationq}`) & (mintegralZ ? 3 : 2));
      }
      for (let a = 0; a < 3; a++) {
         animationq += ((mintegralZ ? 4 : 1) - yellowtoredm.length);
      }
       let phoneY = String.fromCharCode(102,105,110,97,108,108,121,0);
         mintegralZ = (22 > (yellowtoredm.length & (mintegralZ ? 22 : yellowtoredm.length)));
      while ((yellowtoredm.length << (Math.min(phoneY.length, 1))) < 4) {
         yellowtoredm.push(phoneY.length);
         break;
      }
      iconwatchm += `${parseInt(`${basketballtrophy0}`) % 1}`;
      eighteenl = [typingloadingq.length];
      basketballtrophy0 *= parseFloat(`${iconwatchm.length}`);
   for (let q = 0; q < 3; q++) {
       let yellowvideoliveZ = 0;
      let arrowdowny = 8875562 <= yellowvideoliveZ;
      do {
          let androidL = 1;
          let login0 = String.fromCharCode(116,111,107,101,104,0);
          let libfileW = String.fromCharCode(102,105,101,108,0);
          let selectedn = false;
         yellowvideoliveZ -= ((selectedn ? 2 : 3) << (Math.min(libfileW.length, 4)));
         androidL &= login0.length;
         login0 += `${login0.length}`;
         libfileW += `${androidL}`;
         selectedn = login0.startsWith(`${androidL}`);
         if (arrowdowny) {
            break;
         }
      } while ((1 < (yellowvideoliveZ >> (Math.min(Math.abs(yellowvideoliveZ), 3)))) && arrowdowny);
      for (let g = 0; g < 1; g++) {
         yellowvideoliveZ &= 1;
      }
      for (let o = 0; o < 1; o++) {
          let championG = 4;
         yellowvideoliveZ += championG ^ 3;
      }
      livenodatabgimga = `${showlessu.length / (Math.max(4, iconwatchm.length))}`;
   }
      showlessu += `${typingloadingq.length / 1}`;
   for (let z = 0; z < 1; z++) {
       let loginK = 4.0;
       let dragcloseU = String.fromCharCode(109,112,101,103,112,115,0);
          let p_unlockj = String.fromCharCode(119,101,108,115,101,110,99,0);
          let iconstar9: Array<any> = [870, 211, 92];
          let floaterE = String.fromCharCode(100,101,112,101,110,100,0);
         dragcloseU = `${(String.fromCharCode(111,0) == p_unlockj ? parseInt(`${loginK}`) : p_unlockj.length)}`;
         iconstar9.push(1 >> (Math.min(5, floaterE.length)));
         floaterE += `${iconstar9.length}`;
      if ((parseFloat(`${dragcloseU.length}`) / (Math.max(4, loginK))) == 3.8) {
         loginK += parseFloat(`${parseInt(`${loginK}`)}`);
      }
      while (1 < dragcloseU.length) {
         loginK *= (parseFloat(`${String.fromCharCode(76,0) == dragcloseU ? parseInt(`${loginK}`) : dragcloseU.length}`));
         break;
      }
          let utils9: Map<any, any> = new Map([[String.fromCharCode(97,116,116,97,99,104,101,100,0),549], [String.fromCharCode(112,97,99,107,101,116,105,122,101,114,0),624]]);
          let libcrashsdkc = 2.0;
         dragcloseU = `${parseInt(`${loginK}`)}`;
         utils9.set(`${libcrashsdkc}`, utils9.size + 2);
         libcrashsdkc -= utils9.size;
       let detail3 = 1.0;
         detail3 /= Math.max((parseFloat(`${dragcloseU == String.fromCharCode(76,0) ? dragcloseU.length : parseInt(`${loginK}`)}`)), 3);
      iconcloseW.push(1);
   }
   let homeplayerf = 6659194 >= livenodatabgimga.length;
   do {
      livenodatabgimga = "2";
      if (homeplayerf) {
         break;
      }
   } while (homeplayerf && (light9 == livenodatabgimga));
   if (4.45 == (basketballtrophy0 - 5.83) || 2 == (eighteenl.length ^ 5)) {
      basketballtrophy0 += parseFloat(`${showlessu.length | light9.length}`);
   }
      iconwatchm = `${(greytickZ == String.fromCharCode(121,0) ? showlessu.length : greytickZ.length)}`;
   if (showlessu.includes(livenodatabgimga)) {
       let playercommon2: Array<any> = [158, 122];
       let animationqZ = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,0);
       let countdownW = 2.0;
          let iconclosewhite4 = 3.0;
          let exampleimageN = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,0);
         animationqZ = `${parseInt(`${iconclosewhite4}`)}`;
         exampleimageN = `${exampleimageN.length - 3}`;
      for (let c = 0; c < 2; c++) {
          let product8 = 3.0;
          let otherk = 2.0;
          let libjsinspectorR = String.fromCharCode(97,112,116,120,0);
          let bridgeH = false;
          let adultG = String.fromCharCode(115,116,114,100,117,112,0);
         playercommon2.push(3 & adultG.length);
         product8 /= Math.max(3, (parseFloat(`${libjsinspectorR == String.fromCharCode(53,0) ? parseInt(`${otherk}`) : libjsinspectorR.length}`)));
         otherk *= libjsinspectorR.length & 1;
         bridgeH = !libjsinspectorR.includes(`${product8}`);
         adultG = `${parseInt(`${otherk}`) ^ parseInt(`${product8}`)}`;
      }
         countdownW += parseFloat(`${playercommon2.length / (Math.max(4, parseInt(`${countdownW}`)))}`);
         animationqZ = `${animationqZ.length - playercommon2.length}`;
      if (playercommon2.length < 4) {
          let blackt = true;
          let policyW: Map<any, any> = new Map([[String.fromCharCode(115,101,109,105,0),true ], [String.fromCharCode(108,111,99,97,108,105,122,101,100,0),true ]]);
          let manifestA = String.fromCharCode(112,101,114,102,111,114,109,0);
          let combineds = 5;
         animationqZ = `${(manifestA == String.fromCharCode(101,0) ? manifestA.length : combineds)}`;
         blackt = !blackt;
         policyW = new Map([[`${policyW.size}`, policyW.size]]);
         combineds |= (policyW.size | (blackt ? 2 : 2));
      }
       let topicM = 4;
       let readd = 5;
      let yellowtoredC = 8261612 >= topicM;
      do {
         topicM %= Math.max(2, (animationqZ == String.fromCharCode(87,0) ? animationqZ.length : playercommon2.length));
         if (yellowtoredC) {
            break;
         }
      } while ((4 > topicM) && yellowtoredC);
         playercommon2.push(readd);
          let borderlessR: Array<any> = [283, 146];
         countdownW -= parseFloat(`${3 | borderlessR.length}`);
      livenodatabgimga = `${livenodatabgimga.length}`;
   }
   let roomQ = 6128675 >= iconcloseW.length;
   do {
      iconcloseW = [3 + greytickZ.length];
      if (roomQ) {
         break;
      }
   } while (roomQ && (3 >= (showlessu.length * iconcloseW.length)));
   while (unreadk.startsWith(`${livenodatabgimga.length}`)) {
      unreadk += `${iconwatchm.length | 1}`;
      break;
   }
   for (let j = 0; j < 2; j++) {
      greytickZ += `${light9.length}`;
   }
      livenodatabgimga += `${3 & iconcloseW.length}`;
      onError()
    }


  })

  const handleStatistic = async (stats: Statistics) => {
    onProgress({ bytes: stats.getSize() })
  }

  const session = await FFmpegKit.executeAsync(
    ffmpegCommand,
    handleComplete,
    handleLog,
    handleStatistic
  )

  onSessionCreated({ session })
}

export async function downloadVod(id: string, url: string, onProgress: (progress: { percentage?: number, bytes?: number }) => void, onComplete: any, onError: any, onSessionCreated: ({ session }: { session: FFmpegSession }) => void) {
  await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/SavedVideos').catch((err) => { })

  const outputFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`
  const ffmpegScript = `-i ${url} -acodec copy -bsf:a aac_adtstoasc -vcodec copy ${outputFilePath}`

  ffmpegDownload(outputFilePath, ffmpegScript, url, onProgress, onComplete, onError, onSessionCreated)

}

export async function downloadVodImage(vod: yysPenaltyshoot) {
  const imagePath = RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${vod.vod_id}.png`
  

  if (await RNFetchBlob.fs.exists(imagePath)) return

  try {
    await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/VodImages').catch((err) => { })
    const res = await RNFetchBlob
      .config({
        path: imagePath
      })
      .fetch('GET', vod.vod_pic_oss ?? vod.vod_pic)


  } catch {
    
  }

}

export function getUrlOfVod(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean) {
  
  if (vodIsAdult) {
       let arrowselectdownP = 2.0;
    let defaultpredictionprofileU = 1;
    let libfileo = String.fromCharCode(112,111,115,101,0);
    let carouselB: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,97,110,116,105,122,101,114,0),835], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,0),311], [String.fromCharCode(102,97,115,116,115,115,105,109,0),206]]);
    let adult3 = String.fromCharCode(98,111,108,100,0);
    let subsY = String.fromCharCode(97,112,112,114,111,118,97,108,0);
    let movies2: Map<any, any> = new Map([[String.fromCharCode(115,107,105,112,0),String.fromCharCode(114,101,115,101,101,107,0)], [String.fromCharCode(117,98,115,99,114,105,98,101,114,0),String.fromCharCode(100,101,99,114,101,97,115,101,0)]]);
    let iconwatchu = String.fromCharCode(103,101,110,101,115,105,115,0);
    let constantsA = String.fromCharCode(108,101,98,110,0);
    let checkbox6 = false;
    let inviteD = 3;
    let iconpointscoreO = 5.0;
    let debugk = String.fromCharCode(115,116,100,0);
    let empty2 = String.fromCharCode(116,105,116,110,116,0);
    let matchY = String.fromCharCode(116,105,109,101,114,0);
    let profileb = String.fromCharCode(115,99,97,110,115,116,97,116,117,115,0);
    let iconR = 4.0;
      arrowselectdownP += parseFloat(`${parseInt(`${iconpointscoreO}`)}`);
       let mailf: Array<any> = [528, 37];
       let eventG: Array<any> = [String.fromCharCode(119,97,114,110,0), String.fromCharCode(101,102,102,101,99,116,115,0)];
         eventG.push(eventG.length);
         mailf.push(mailf.length & eventG.length);
      while ((eventG.length - 5) >= 5 && 2 >= (eventG.length - 5)) {
         mailf = [mailf.length];
         break;
      }
         eventG = [mailf.length * 2];
      if ((2 << (Math.min(4, mailf.length))) <= 2) {
         eventG = [3];
      }
          let sharewhiteE = 5.0;
          let apps4: Array<any> = [451, 996, 809];
         mailf.push(eventG.length + 2);
         sharewhiteE *= 1;
         apps4.push(apps4.length);
      iconwatchu += `${inviteD}`;
   for (let x = 0; x < 2; x++) {
       let tickedv = String.fromCharCode(116,104,101,110,97,98,108,101,0);
       let a_managere = String.fromCharCode(109,111,110,116,104,0);
       let launchT: Map<any, any> = new Map([[String.fromCharCode(101,110,99,108,97,118,101,0),212], [String.fromCharCode(97,97,99,112,115,100,115,112,0),851]]);
       let tick3: Map<any, any> = new Map([[String.fromCharCode(109,99,111,109,112,97,110,100,0),525], [String.fromCharCode(116,104,114,111,116,116,108,101,114,0),265]]);
      while (3 == (3 * a_managere.length) && 4 == (a_managere.length * 3)) {
          let iconsubssuccessb = true;
          let robotou = 1.0;
          let imagesp: Map<any, any> = new Map([[String.fromCharCode(105,110,110,100,101,114,0),String.fromCharCode(115,116,97,109,112,0)], [String.fromCharCode(104,97,110,100,101,114,0),String.fromCharCode(118,101,114,98,111,115,101,0)], [String.fromCharCode(103,101,116,101,110,118,0),String.fromCharCode(115,116,111,114,97,103,101,115,0)]]);
          let iconplayi = String.fromCharCode(109,101,97,115,117,114,101,114,0);
         launchT = new Map([[iconplayi, (String.fromCharCode(95,0) == iconplayi ? (iconsubssuccessb ? 3 : 5) : iconplayi.length)]]);
         iconsubssuccessb = (robotou * parseFloat(`${imagesp.size}`)) > 47.63;
         robotou /= Math.max(parseFloat(`${imagesp.size / 2}`), 4);
         break;
      }
      for (let n = 0; n < 1; n++) {
         tick3 = new Map([[`${launchT.size}`, tick3.size ^ launchT.size]]);
      }
         launchT.set(`${tick3.size}`, 3);
         launchT = new Map([[`${tick3.size}`, tick3.size]]);
      if ((launchT.size >> (Math.min(Math.abs(2), 4))) < 5 || (2 >> (Math.min(4, Math.abs(launchT.size)))) < 3) {
         a_managere = `${a_managere.length << (Math.min(tickedv.length, 5))}`;
      }
      iconpointscoreO += carouselB.size / 2;
   }
      constantsA += `${subsY.length & parseInt(`${arrowselectdownP}`)}`;
       let notificationgrayA = String.fromCharCode(115,115,108,114,111,111,116,115,0);
       let viewsJ = 4;
       let n_unlockS = String.fromCharCode(119,114,105,116,116,101,110,0);
      for (let l = 0; l < 1; l++) {
          let private_kz: Array<any> = [92, 857, 460];
         n_unlockS += `${notificationgrayA.length << (Math.min(2, n_unlockS.length))}`;
         private_kz.push(private_kz.length + 2);
      }
      if (5 >= (viewsJ - 2) && (viewsJ - n_unlockS.length) >= 2) {
         viewsJ <<= Math.min(n_unlockS.length, 3);
      }
      let expand0 = notificationgrayA.length >= 9350304;
      do {
         notificationgrayA += `${notificationgrayA.length << (Math.min(n_unlockS.length, 5))}`;
         if (expand0) {
            break;
         }
      } while ((notificationgrayA.endsWith(`${viewsJ}`)) && expand0);
         notificationgrayA = "3";
          let m_viewd = String.fromCharCode(105,110,100,101,120,105,110,103,0);
          let malaysiaO = 2.0;
          let reactnativeultimatelistviewz = String.fromCharCode(112,99,98,105,110,102,111,0);
         notificationgrayA += "1";
         m_viewd += `${m_viewd.length}`;
         malaysiaO -= m_viewd.length;
         reactnativeultimatelistviewz += "3";
      while ((2 + viewsJ) < 5 && 3 < (n_unlockS.length + 2)) {
         n_unlockS = `${n_unlockS.length}`;
         break;
      }
          let homeinactive2 = 1;
          let iconwechatk = 1;
          let searchbarW: Map<any, any> = new Map([[String.fromCharCode(115,119,114,105,0),String.fromCharCode(108,105,109,105,116,97,116,105,111,110,0)], [String.fromCharCode(116,114,105,97,110,103,108,101,115,0),String.fromCharCode(115,117,98,102,105,101,108,100,115,0)], [String.fromCharCode(115,116,114,101,116,99,104,0),String.fromCharCode(115,97,110,115,0)]]);
         notificationgrayA += "3";
         homeinactive2 &= 3;
         iconwechatk -= homeinactive2;
         searchbarW.set(`${iconwechatk}`, iconwechatk);
      while (2 <= (4 ^ notificationgrayA.length)) {
         notificationgrayA += `${notificationgrayA.length | viewsJ}`;
         break;
      }
          let favoritec = 0.0;
          let huaweio = String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,0);
         notificationgrayA += `${viewsJ}`;
         favoritec += parseFloat(`${huaweio.length / 2}`);
         huaweio += `${parseInt(`${favoritec}`)}`;
      arrowselectdownP -= parseFloat(`${parseInt(`${arrowselectdownP}`) % (Math.max(subsY.length, 8))}`);
      inviteD %= Math.max(2, parseInt(`${arrowselectdownP}`) + defaultpredictionprofileU);
      constantsA = `${parseInt(`${iconpointscoreO}`) / (Math.max(8, defaultpredictionprofileU))}`;
      arrowselectdownP -= parseFloat(`${2 + libfileo.length}`);
   if (adult3 == libfileo) {
      libfileo += `${carouselB.size / 3}`;
   }
      arrowselectdownP /= Math.max(2, parseFloat(`${inviteD}`));
   let reactnativeratingsp = carouselB.size <= 6788086;
   do {
      carouselB.set(`${checkbox6}`, ((checkbox6 ? 4 : 3) | adult3.length));
      if (reactnativeratingsp) {
         break;
      }
   } while ((!Array.from(carouselB.values()).includes(defaultpredictionprofileU)) && reactnativeratingsp);
      defaultpredictionprofileU /= Math.max(2 & parseInt(`${iconpointscoreO}`), 1);
   if (2 == inviteD) {
       let teamdetailsbgR: Map<any, any> = new Map([[String.fromCharCode(97,108,98,117,109,115,0),114], [String.fromCharCode(115,116,97,110,100,97,114,100,0),169], [String.fromCharCode(100,108,105,100,120,0),992]]);
       let iconviewerL = 1;
       let linkG = 2.0;
       let j_unlockl = String.fromCharCode(97,100,97,112,116,115,0);
       let iconlogouth = String.fromCharCode(100,97,116,97,104,97,115,104,0);
          let libjsijniprofilerH = 1.0;
          let orangeuparrowW: Map<any, any> = new Map([[String.fromCharCode(118,105,97,0),830], [String.fromCharCode(115,116,117,98,98,101,100,0),682], [String.fromCharCode(105,110,116,114,97,120,109,98,117,118,0),835]]);
          let home3 = true;
         j_unlockl += `${j_unlockl.length}`;
         libjsijniprofilerH -= parseFloat(`${3 - parseInt(`${libjsijniprofilerH}`)}`);
         orangeuparrowW.set(`${libjsijniprofilerH}`, orangeuparrowW.size * parseInt(`${libjsijniprofilerH}`));
         home3 = (libjsijniprofilerH - parseFloat(`${orangeuparrowW.size}`)) > 99.94;
         j_unlockl += `${2 * iconviewerL}`;
         j_unlockl += "1";
      for (let p = 0; p < 2; p++) {
         j_unlockl += `${parseInt(`${linkG}`) << (Math.min(Math.abs(2), 5))}`;
      }
      for (let s = 0; s < 1; s++) {
         iconviewerL &= parseInt(`${linkG}`) % 2;
      }
       let iconstar2: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,116,105,112,115,0),39], [String.fromCharCode(97,121,117,118,108,101,0),776], [String.fromCharCode(97,118,97,116,97,114,0),407]]);
       let overs: Map<any, any> = new Map([[String.fromCharCode(109,117,108,104,105,0),413], [String.fromCharCode(104,112,101,108,0),479], [String.fromCharCode(105,99,111,110,105,102,105,101,100,0),823]]);
         j_unlockl = "2";
      while (4 > (iconviewerL * parseInt(`${linkG}`)) || (3.50 * linkG) > 4.48) {
          let gifgoalf = 1;
          let delegate_hk: Array<any> = [385, 166];
         linkG /= Math.max(2 / (Math.max(7, iconstar2.size)), 1);
         gifgoalf <<= Math.min(Math.abs(1 >> (Math.min(4, delegate_hk.length))), 2);
         delegate_hk = [delegate_hk.length - gifgoalf];
         break;
      }
      let soundW = 8268412 >= iconlogouth.length;
      do {
          let crownh = 4;
          let mimeI = String.fromCharCode(104,99,109,99,0);
         iconlogouth = `${iconstar2.size}`;
         crownh <<= Math.min(5, mimeI.length);
         mimeI += `${mimeI.length}`;
         if (soundW) {
            break;
         }
      } while ((4 >= (4 << (Math.min(3, iconlogouth.length)))) && soundW);
         iconlogouth = `${teamdetailsbgR.size}`;
       let playlistg: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,116,105,116,117,116,101,0),false ], [String.fromCharCode(108,101,118,97,114,105,110,116,0),false ], [String.fromCharCode(112,117,98,0),true ]]);
       let controlsg: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,115,101,99,116,115,0),132], [String.fromCharCode(112,97,114,115,101,114,0),718]]);
         iconlogouth += `${overs.size | playlistg.size}`;
         teamdetailsbgR = new Map([[`${controlsg.size}`, controlsg.size]]);
         iconlogouth += "1";
          let twittere: Map<any, any> = new Map([[String.fromCharCode(115,112,101,101,120,0),398], [String.fromCharCode(101,97,99,101,110,99,0),984]]);
          let googleI = String.fromCharCode(111,112,101,110,115,115,108,118,0);
          let template_0u = 3.0;
         iconlogouth += `${playlistg.size}`;
         twittere.set(googleI, googleI.length);
         template_0u -= twittere.size;
      inviteD *= (String.fromCharCode(102,0) == debugk ? debugk.length : parseInt(`${linkG}`));
   }

    return vod.vod_play_list.urls
      .find(url => url.nid === vodUrlNid)
      ?.url
  }
  return vod.vod_sources
    .find(source => source.source_id === vodSourceId)?.vod_play_list.urls
    .find(url => url.nid === vodUrlNid)
    ?.url

}

export async function pauseDownloadVod(id: string, onPause: any) {
  
  onPause();

  const originalFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`

  await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/PartialDownload').catch((err) => { })

  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`

  await RNFetchBlob.fs.mkdir(outputFolder).catch((err) => { })

  const segmentName = `${(await RNFetchBlob.fs.ls(outputFolder)).length}.mp4`

  if (await RNFetchBlob.fs.exists(originalFilePath)) {
    

    
    RNFetchBlob.fs.mv(originalFilePath, `${outputFolder}/${segmentName}`)
  }

}

export async function resumeDownloadVod(id: string, url: string, onProgress: any, onComplete: any, onError: any, onSessionCreated: any) {
  const originalFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`
  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`

  if (!(await RNFetchBlob.fs.exists(outputFolder))) {
    
    
    return
  }
  const segmentName = `${(await RNFetchBlob.fs.ls(outputFolder)).length}.mp4`

  const outputFolderFiles = await RNFetchBlob.fs.ls(outputFolder)
  let startTime = 0
  try {
    for (const file of outputFolderFiles) {
      startTime += (await getVideoDuration(`file://${outputFolder}/${file}`)).valueOf()
    }

    const ffmpegCommand = `-ss ${startTime} -i ${url} -acodec copy -bsf:a aac_adtstoasc -vcodec copy ${outputFolder}/${segmentName}`

    ffmpegDownload(
      `${outputFolder}/${segmentName}`,
      ffmpegCommand,
      url,
      onProgress,
      onComplete,
      onError,
      onSessionCreated
    )
  } catch {
    onError()
  }

}

export async function concatPartialVideos(id: string, onComplete: any, onError: any,) {
  const inputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`
  if (!(await RNFetchBlob.fs.exists(inputFolder))) {
    
    
    return
  }

  let pathList: string[] = [];
  for (const inputPath of await RNFetchBlob.fs.ls(inputFolder)) {
     
    let sessionOutput = '';
    FFmpegKit.execute(`-v error -i ${inputFolder}/${inputPath} -f null -`).then(s => {
      s.getOutput().then(sOutput => {
        sessionOutput = sOutput
      })
    })

    await new Promise(resolve => {
      setTimeout(() => {
        if (sessionOutput.includes('Output file does not contain any stream')) {
          
        } else {
          pathList.push(inputPath)
        }
        resolve('')
      }, 2000);
    })

  }

  const listTxt = pathList
    .sort((a, b) => {
      const aNum = +a.replace('.mp4', '')
      const bNum = +b.replace('.mp4', '')
      return aNum - bNum
    })
    .map(path => `file '${inputFolder}/${path}'`).join('\n')
  const listTxtPath = `${inputFolder}/list.txt`
  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos`
  const ffmpegConcatCommand = `-f concat -safe 0 -i ${listTxtPath} -c copy ${outputFolder}/${id}.mp4`
  await RNFetchBlob.fs.writeFile(listTxtPath, listTxt)
  await RNFetchBlob.fs.mkdir(outputFolder).catch(err => { })

  const handleComplete = async () => {
       let basketballawayteamv = 0;
    let greenarrowupg = 2.0;
    let plashn = 2.0;
    let chatI: Map<any, any> = new Map([[String.fromCharCode(104,117,101,115,0),1], [String.fromCharCode(99,111,110,99,114,101,116,101,0),641]]);
    let controle: Map<any, any> = new Map([[String.fromCharCode(106,115,111,110,114,112,99,0),String.fromCharCode(105,110,116,101,114,112,111,108,0)], [String.fromCharCode(115,116,111,114,105,110,103,0),String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,0)], [String.fromCharCode(98,103,114,97,0),String.fromCharCode(112,97,108,109,0)]]);
    let upgradeR: Array<any> = [String.fromCharCode(109,111,114,112,104,101,100,0), String.fromCharCode(99,97,112,105,116,97,108,115,0), String.fromCharCode(108,105,98,99,101,108,116,0)];
    let renewW = String.fromCharCode(116,117,114,110,111,102,102,0);
    let matchactive2 = 0;
    let smallr = String.fromCharCode(104,119,99,97,112,0);
    let pointX: Map<any, any> = new Map([[String.fromCharCode(117,110,114,105,115,101,0),false ], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,0),true ]]);
    let renderp = 0;
    let fillg = 2;
    let telemetry1: Array<any> = [375, 580, 122];
    let videovarr = String.fromCharCode(108,105,98,111,112,117,115,0);
    let securitya = 4;
   while ((3 >> (Math.min(3, Math.abs(controle.size)))) > 3 && (upgradeR.length >> (Math.min(Math.abs(3), 5))) > 2) {
       let mappingH = false;
       let resendt = String.fromCharCode(98,105,116,118,101,99,116,111,114,0);
       let circlet: Map<any, any> = new Map([[String.fromCharCode(109,100,99,116,0),true ], [String.fromCharCode(114,101,115,111,108,118,105,110,103,0),true ], [String.fromCharCode(115,111,117,110,100,0),false ]]);
       let holder0 = 1.0;
      let gradleo = mappingH ? !mappingH : mappingH;
      do {
         mappingH = resendt.length < 16 || mappingH;
         if (gradleo) {
            break;
         }
      } while ((!mappingH) && gradleo);
         holder0 *= parseInt(`${holder0}`) ^ circlet.size;
      let splashd = 6338670 >= circlet.size;
      do {
          let yellowscoreball_ = 0;
          let basketballhometeam3: Array<any> = [714, 138, 820];
         circlet = new Map([[`${circlet.size}`, parseInt(`${holder0}`) - circlet.size]]);
         yellowscoreball_ ^= yellowscoreball_;
         basketballhometeam3 = [2 % (Math.max(8, basketballhometeam3.length))];
         if (splashd) {
            break;
         }
      } while (splashd && (Array.from(circlet.keys()).includes(`${holder0}`)));
      if (holder0 < 5.46 && (5.46 - holder0) < 4.90) {
         holder0 *= circlet.size | 2;
      }
      while ((3 * circlet.size) == 3 || 3 == (circlet.size * parseInt(`${holder0}`))) {
          let commonq = 1.0;
          let incidentF = true;
          let mathY: Map<any, any> = new Map([[String.fromCharCode(115,115,108,0),140], [String.fromCharCode(99,97,108,99,108,117,108,97,116,101,0),681], [String.fromCharCode(97,118,101,114,0),948]]);
          let fullv: Array<any> = [650, 396, 601];
          let b_hashd = true;
         circlet = new Map([[`${circlet.size}`, parseInt(`${holder0}`) + circlet.size]]);
         commonq *= parseFloat(`${mathY.size ^ 3}`);
         incidentF = !incidentF;
         mathY = new Map([[`${fullv.length}`, parseInt(`${commonq}`)]]);
         fullv = [2 & parseInt(`${commonq}`)];
         b_hashd = fullv.length >= 32;
         break;
      }
      if (!mappingH) {
         resendt += `${(resendt == String.fromCharCode(90,0) ? (mappingH ? 4 : 3) : resendt.length)}`;
      }
      while (5.37 >= (holder0 - 2.93) || (circlet.size - 5) >= 2) {
         circlet.set(`${holder0}`, parseInt(`${holder0}`));
         break;
      }
          let update_0d = String.fromCharCode(112,105,99,107,0);
         resendt += `${resendt.length}`;
         update_0d += `${update_0d.length}`;
      controle = new Map([[`${matchactive2}`, ((mappingH ? 3 : 2) ^ matchactive2)]]);
      break;
   }
   while (!Array.from(chatI.keys()).includes(`${plashn}`)) {
      chatI.set(`${plashn}`, smallr.length & 2);
      break;
   }
       let mimeY = String.fromCharCode(100,105,109,105,115,115,0);
       let penaltygoal4 = false;
       let mimok: Array<any> = [729, 61];
      if ((5 | mimok.length) == 2 && mimok.length == 5) {
          let libjsijniprofilern: Array<any> = [372, 203];
          let cricket9 = 5.0;
         mimok = [mimeY.length / 2];
         libjsijniprofilern.push(3);
         cricket9 /= Math.max(1, parseFloat(`${1 - libjsijniprofilern.length}`));
      }
      let owngoalF = mimeY.length <= 8923837;
      do {
         mimeY = `${((penaltygoal4 ? 2 : 2) ^ mimeY.length)}`;
         if (owngoalF) {
            break;
         }
      } while ((penaltygoal4) && owngoalF);
      if ((5 + mimeY.length) <= 2) {
         mimeY = `${((penaltygoal4 ? 5 : 4) & 1)}`;
      }
      while (penaltygoal4) {
          let homeU = String.fromCharCode(103,109,116,105,109,101,0);
          let wnews7: Array<any> = [244, 849, 209];
          let subsz = String.fromCharCode(100,111,99,115,105,122,101,0);
          let greenF = String.fromCharCode(108,111,111,112,115,0);
         penaltygoal4 = (greenF.length << (Math.min(subsz.length, 1))) >= 79;
         homeU = `${wnews7.length}`;
         wnews7 = [2 >> (Math.min(1, wnews7.length))];
         subsz += `${homeU.length + 1}`;
         greenF = `${homeU.length}`;
         break;
      }
      for (let z = 0; z < 2; z++) {
          let iconnewchatF = String.fromCharCode(112,105,99,107,108,112,102,0);
          let crowny = String.fromCharCode(102,97,99,116,111,114,121,0);
          let basketballd = String.fromCharCode(117,110,109,117,116,101,100,0);
          let goalU = 5.0;
         penaltygoal4 = mimeY == String.fromCharCode(77,0);
         iconnewchatF = `${crowny.length}`;
         crowny += `${1 + basketballd.length}`;
         basketballd += `${1 * crowny.length}`;
         goalU /= Math.max(2, iconnewchatF.length);
      }
      if (mimeY.startsWith(`${penaltygoal4}`)) {
         mimeY = `${(1 ^ (penaltygoal4 ? 5 : 5))}`;
      }
         mimeY += `${mimeY.length - 3}`;
          let inewinterstitialq: Map<any, any> = new Map([[String.fromCharCode(115,116,101,114,101,111,100,0),613], [String.fromCharCode(114,115,97,122,0),279]]);
          let malaysia8 = 5.0;
          let resultT: Array<any> = [541, 857, 264];
         mimok = [resultT.length << (Math.min(2, Math.abs(inewinterstitialq.size)))];
         inewinterstitialq = new Map([[`${malaysia8}`, parseInt(`${malaysia8}`)]]);
         mimok.push(((penaltygoal4 ? 3 : 2)));
      renewW += `${parseInt(`${greenarrowupg}`) - parseInt(`${plashn}`)}`;
   let encrypt5 = 6493023 >= chatI.size;
   do {
      chatI.set(`${matchactive2}`, matchactive2 >> (Math.min(Math.abs(1), 5)));
      if (encrypt5) {
         break;
      }
   } while (encrypt5 && (1 <= (chatI.size + 5)));
      matchactive2 *= matchactive2;

    try {

   if (1.80 < (basketballawayteamv / (Math.max(greenarrowupg, 4)))) {
      greenarrowupg -= 3;
   }
      basketballawayteamv &= upgradeR.length;
       let greyarrowup_ = 4.0;
       let matchx = 5.0;
         matchx += parseFloat(`${parseInt(`${matchx}`) + parseInt(`${greyarrowup_}`)}`);
          let defaultroombgY = 5;
         matchx *= parseFloat(`${3}`);
         defaultroombgY <<= Math.min(5, Math.abs(defaultroombgY));
         greyarrowup_ -= parseInt(`${greyarrowup_}`) & 2;
         matchx -= parseFloat(`${3}`);
         matchx -= parseFloat(`${3 & parseInt(`${greyarrowup_}`)}`);
      if (greyarrowup_ > matchx) {
          let internetj = String.fromCharCode(112,116,114,115,0);
          let whatsapp7 = true;
          let crossi = 3.0;
         greyarrowup_ *= 2 & internetj.length;
         internetj += `${1 ^ parseInt(`${crossi}`)}`;
         whatsapp7 = crossi > crossi;
      }
      upgradeR = [2 ^ parseInt(`${greenarrowupg}`)];
      plashn -= parseFloat(`${pointX.size >> (Math.min(Math.abs(3), 4))}`);
      matchactive2 *= renewW.length;
      RNFetchBlob.fs.unlink(inputFolder)

   let bottomY = 9479122 >= smallr.length;
   do {
      smallr += `${smallr.length}`;
      if (bottomY) {
         break;
      }
   } while (bottomY && (3 == (chatI.size ^ 2) || (chatI.size ^ 2) == 2));
       let profileframes: Array<any> = [689, 357, 97];
       let orangetickA = String.fromCharCode(122,111,111,109,105,110,103,0);
      let whistleorangeH = profileframes.length <= 7823457;
      do {
         profileframes.push(profileframes.length);
         if (whistleorangeH) {
            break;
         }
      } while ((orangetickA.startsWith(`${profileframes.length}`)) && whistleorangeH);
      for (let e = 0; e < 1; e++) {
          let expando: Array<any> = [176, 844, 846];
          let libfolly6 = 5.0;
          let roomT = 3;
         profileframes = [expando.length];
         expando = [roomT & 3];
         libfolly6 *= roomT << (Math.min(Math.abs(parseInt(`${libfolly6}`)), 2));
      }
      let cancelg = 4906802 >= profileframes.length;
      do {
         profileframes = [2];
         if (cancelg) {
            break;
         }
      } while (cancelg && (!orangetickA.includes(`${profileframes.length}`)));
      for (let q = 0; q < 2; q++) {
          let scheduler4 = String.fromCharCode(113,117,97,110,116,105,122,101,114,0);
         orangetickA = `${orangetickA.length}`;
         scheduler4 = `${scheduler4.length}`;
      }
          let resendx = String.fromCharCode(118,110,101,103,113,0);
          let libmapbufferjni_ = false;
          let miniD: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,0),798], [String.fromCharCode(104,97,110,110,101,108,0),752], [String.fromCharCode(112,117,98,108,105,99,0),875]]);
         orangetickA += `${profileframes.length % (Math.max(3, 2))}`;
         resendx = `${resendx.length}`;
         libmapbufferjni_ = resendx.length > 41;
         miniD = new Map([[`${miniD.size}`, miniD.size * 1]]);
       let shielddonew = true;
      greenarrowupg += basketballawayteamv;
   if ((5 & matchactive2) == 1 || (5 & upgradeR.length) == 1) {
      upgradeR.push(3);
   }
   while (chatI.get(`${plashn}`) == null) {
       let searchu = String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,0);
       let pagex = false;
       let hooksQ: Array<any> = [329, 966];
       let guideo = String.fromCharCode(99,97,115,101,0);
         hooksQ.push(searchu.length & hooksQ.length);
       let gifgoalu = 0.0;
       let chatbotphotom = 2.0;
      let collectioni = gifgoalu >= 6057493.0;
      do {
          let backD = 1;
          let predictiondefaultb = String.fromCharCode(97,112,112,114,116,99,0);
          let leaguedetailsbg6 = String.fromCharCode(115,113,117,97,114,101,0);
          let animationso = 4;
         gifgoalu += parseFloat(`${1}`);
         backD |= animationso;
         predictiondefaultb += `${backD >> (Math.min(leaguedetailsbg6.length, 3))}`;
         leaguedetailsbg6 += `${(String.fromCharCode(117,0) == predictiondefaultb ? leaguedetailsbg6.length : predictiondefaultb.length)}`;
         animationso += predictiondefaultb.length;
         if (collectioni) {
            break;
         }
      } while (collectioni && (3.59 == (gifgoalu - 4.30) || (gifgoalu - 4.30) == 3.28));
      let turnF = 6686869.0 >= gifgoalu;
      do {
         gifgoalu /= Math.max(4, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${gifgoalu}`)), 4))}`));
         if (turnF) {
            break;
         }
      } while ((1.79 > (1.19 - chatbotphotom) || (1.19 - chatbotphotom) > 2.26) && turnF);
      if (3 >= (guideo.length % (Math.max(9, hooksQ.length))) || 3 >= (hooksQ.length % (Math.max(guideo.length, 9)))) {
         hooksQ = [hooksQ.length * guideo.length];
      }
       let googlee = String.fromCharCode(111,99,116,101,116,0);
       let megaphoneW = String.fromCharCode(100,101,99,111,100,101,112,108,97,110,101,0);
          let defaultfootballbgS = 1;
          let greyarrowupZ = false;
          let iconclosewhitec = 5;
         hooksQ.push(2);
         defaultfootballbgS /= Math.max(5, defaultfootballbgS);
         greyarrowupZ = !greyarrowupZ;
         iconclosewhitec %= Math.max(3 ^ iconclosewhitec, 1);
         pagex = 56.96 == chatbotphotom || String.fromCharCode(104,0) == googlee;
       let tumbnailE = 4.0;
       let helperd = 3.0;
         pagex = String.fromCharCode(84,0) == googlee && 92.93 == helperd;
         searchu += `${parseInt(`${chatbotphotom}`)}`;
         tumbnailE *= parseFloat(`${parseInt(`${chatbotphotom}`)}`);
      chatI.set(`${plashn}`, parseInt(`${plashn}`) + basketballawayteamv);
      break;
   }
      chatI = new Map([[`${pointX.size}`, 1]]);
      onComplete();
    } catch (e) {

   if (chatI.get(`${upgradeR.length}`) != null) {
      upgradeR.push(smallr.length);
   }
   if (1 < (upgradeR.length ^ renderp)) {
      renderp ^= controle.size;
   }
   for (let l = 0; l < 3; l++) {
      basketballawayteamv -= upgradeR.length;
   }
       let notificationgrayc = String.fromCharCode(106,117,108,105,97,110,0);
         notificationgrayc = `${(String.fromCharCode(66,0) == notificationgrayc ? notificationgrayc.length : notificationgrayc.length)}`;
       let areaf = 5.0;
      for (let d = 0; d < 1; d++) {
         areaf *= notificationgrayc.length;
      }
      greenarrowupg *= basketballawayteamv | pointX.size;
      plashn *= parseFloat(`${pointX.size}`);
      onError()
      
    }

  }

  FFmpegKit.executeAsync(
    ffmpegConcatCommand,
    handleComplete,
    () => { }, 
    () => { } 
  )
}