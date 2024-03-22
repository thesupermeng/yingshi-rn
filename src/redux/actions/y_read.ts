import { USXGesture, RCCalendarMatches } from "@type/qkf_bell";
import { XVSScoreDark } from "@type/wpk_long";
import { concatPartialVideos, downloadVod, downloadVodImage, getUrlOfVod, pauseDownloadVod, resumeDownloadVod } from "../../utils/a_theme";
import { ThunkAction } from "redux-thunk";
import { RAccepted, BUZTyping, VMReportConstants, ALaunchShrink } from "@type/jx_suggestion";
import { PSmall } from "@redux/fj_prediction_thailand";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility/n_subs_interstitial";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegKit, FFmpegSession } from "ffmpeg-kit-react-native";
import { throttle } from "lodash";
import { RCanvas } from "../../api/k_champion_thailand";

function addVideoToDownload(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean): USXGesture {
  return {
    type: 'ADD_VIDEO_TO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
      vodIsAdult : vodIsAdult ?? false
    }
  }
}

function updateVideoDownload(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number, optional: RCCalendarMatches): USXGesture {
  return {
    type: "UPDATE_VIDEO_DOWNLOAD", 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
      ...optional
    }
  }
}

function startVideoDownload(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number): USXGesture {
  return {
    type: 'START_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function endVideoDownload(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number): USXGesture {
  return {
    type: 'END_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function addDownloadToQueue(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number): USXGesture {
  return {
    type: 'ADD_DOWNLOAD_TO_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeDownloadFromQueue(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number): USXGesture {
  return {
    type: 'REMOVE_DOWNLOAD_FROM_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeVideoFromDownload(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number): USXGesture {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}


export function removeVodFromDownload(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number): USXGesture {
  return {
    type: 'REMOVE_VOD_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function resetQueue(): USXGesture {
  return {
    type: "RESET_QUEUE",
    
    payload: null 
  }
}

function pauseVideoDownload(vod: XVSScoreDark, vodSourceId: number, vodUrlNid: number): USXGesture {
  return {
    type: 'PAUSE_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function updateVodDetails(vod: XVSScoreDark): USXGesture {
  return {
    type: 'UPDATE_VOD_DETAILS', 
    payload: {
      vod, 
      vodSourceId: 0, 
      vodUrlNid: 0, 
    }
  }
}

function startFirstVideoDownload(): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer;
    const firstVod = state.queue.at(0);
    if (!firstVod) return;
    console.debug('first vod is adult',firstVod.vodIsAdult)
    const vod = state.downloads.find(x => x.vod.vod_id === firstVod.vodId)?.vod
    if (!vod) return; 
    dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
  }
}

function resumeFirstVideoDownload(): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer;
    const firstVod = state.queue.at(0);
    if (!firstVod) return;
    const vod = state.downloads.find(x => x.vod.vod_id === firstVod.vodId)?.vod
    if (!vod) return; 
    
    const firstVodProgressPercentage = state.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodUrlNid === firstVod.vodUrlNid && x.vodSourceId === firstVod.vodSourceId)
      ?.progress.percentage

    if (firstVodProgressPercentage === 0){
       let topicS = String.fromCharCode(107,95,55,52,95,109,117,108,116,105,112,97,114,116,0);
    let filterZ = 2.0;
    let brightnessd = false;
    let shrinkG = String.fromCharCode(116,97,98,108,101,99,95,119,95,49,51,0);
    let turnw = 2;
    let specC = String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,95,104,95,49,54,0);
    let emojiJ = 3.0;
    let greyy = String.fromCharCode(115,117,98,115,97,109,112,108,101,95,117,95,49,49,0);
    let expiredp = String.fromCharCode(114,95,57,51,95,98,105,116,118,101,99,116,111,114,0);
    let darkP = String.fromCharCode(120,95,57,52,95,99,111,110,118,115,97,109,112,0);
    let controls9 = 5;
    let macaul = false;
    let expandC = 5;
    let calendarw = 3.0;
      brightnessd = 19 < topicS.length;
   while (2 >= topicS.length) {
      topicS += `${topicS.length}`;
      break;
   }
   let analyticB = 6216475 >= shrinkG.length;
   do {
      shrinkG += "1";
      if (analyticB) {
         break;
      }
   } while ((2 <= (turnw << (Math.min(shrinkG.length, 5)))) && analyticB);
   if ((specC.length / 2) >= 4 && (turnw / 2) >= 4) {
      specC = `${parseInt(`${filterZ}`)}`;
   }
      turnw *= specC.length * turnw;
   if (4 >= topicS.length) {
       let rewindi = 4.0;
       let robotoH = true;
       let statsO = String.fromCharCode(101,95,50,57,95,105,110,116,0);
       let setting2 = 3.0;
       let benefitt = String.fromCharCode(97,98,117,115,101,95,110,95,55,48,0);
      while (benefitt.includes(`${robotoH}`)) {
         benefitt = "3";
         break;
      }
       let logoutM = 2.0;
       let closeA = 0.0;
         benefitt += `${((robotoH ? 5 : 5))}`;
         setting2 += parseFloat(`${parseInt(`${rewindi}`) * 2}`);
          let becomeM = String.fromCharCode(100,95,52,49,95,97,116,99,104,0);
         logoutM -= (parseFloat(`${benefitt == String.fromCharCode(85,0) ? parseInt(`${logoutM}`) : benefitt.length}`));
         becomeM = `${becomeM.length}`;
      let selectl = 5071492.0 <= logoutM;
      do {
         logoutM /= Math.max(5, parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${closeA}`)), 5))}`));
         if (selectl) {
            break;
         }
      } while ((logoutM <= rewindi) && selectl);
      if (3.28 <= (5 * closeA)) {
          let hovert = String.fromCharCode(100,95,54,50,95,109,97,103,110,105,102,105,101,114,0);
          let cornern: Map<any, any> = new Map([[String.fromCharCode(120,109,117,108,116,95,56,95,53,56,0),String.fromCharCode(112,117,108,108,100,111,119,110,95,103,95,57,53,0)], [String.fromCharCode(97,117,120,95,52,95,52,53,0),String.fromCharCode(102,105,102,111,95,52,95,52,48,0)], [String.fromCharCode(99,95,52,54,95,119,114,105,116,101,0),String.fromCharCode(99,97,114,111,117,115,101,108,95,117,95,49,54,0)]]);
          let penalty_ = String.fromCharCode(109,95,51,50,95,115,116,97,114,116,0);
          let with_xro = 2.0;
          let controlW = String.fromCharCode(101,95,56,53,95,100,97,105,108,121,0);
         rewindi += parseFloat(`${1 & parseInt(`${closeA}`)}`);
         hovert = `${controlW.length >> (Math.min(4, Math.abs(parseInt(`${with_xro}`))))}`;
         cornern = new Map([[controlW, penalty_.length ^ 2]]);
         penalty_ += `${cornern.size | parseInt(`${with_xro}`)}`;
      }
       let arrowl = 5.0;
       let suggestion2 = 1.0;
         arrowl += ((robotoH ? 4 : 2) + parseInt(`${suggestion2}`));
          let telegramx: Array<any> = [847, 911, 965];
          let overlayY: Array<any> = [722, 30, 167];
         arrowl /= Math.max(3 ^ overlayY.length, 3);
         telegramx = [telegramx.length];
         overlayY = [telegramx.length];
      if (robotoH) {
          let tickedr = String.fromCharCode(101,95,55,56,95,112,108,97,110,101,100,0);
         rewindi += parseFloat(`${parseInt(`${closeA}`)}`);
         tickedr = `${tickedr.length % 2}`;
      }
      if (4.94 <= (1.56 * setting2) && !robotoH) {
         robotoH = 43.85 >= logoutM || robotoH;
      }
      if (5.87 >= (4.31 + arrowl) || 1.51 >= (arrowl + 4.31)) {
         closeA /= Math.max(4, parseFloat(`${parseInt(`${logoutM}`) >> (Math.min(2, Math.abs(2)))}`));
      }
      for (let t = 0; t < 2; t++) {
         closeA += (parseFloat(`${parseInt(`${setting2}`) - (robotoH ? 5 : 4)}`));
      }
      for (let s = 0; s < 1; s++) {
          let orangew = true;
          let overe = String.fromCharCode(114,117,98,98,101,114,95,108,95,54,49,0);
         arrowl /= Math.max(1, ((robotoH ? 4 : 1) / (Math.max(9, statsO.length))));
         orangew = !overe.startsWith(`${orangew}`);
         overe = `${(String.fromCharCode(99,0) == overe ? overe.length : (orangew ? 4 : 1))}`;
      }
      topicS = `${parseInt(`${setting2}`) << (Math.min(4, Math.abs(3)))}`;
   }
   for (let v = 0; v < 2; v++) {
      shrinkG += `${2 << (Math.min(2, greyy.length))}`;
   }
       let routerm: Array<any> = [String.fromCharCode(102,111,114,109,97,116,117,95,101,95,55,49,0), String.fromCharCode(105,110,116,114,105,110,115,105,99,95,100,95,55,49,0)];
       let tooltipsL = true;
       let topicN = String.fromCharCode(116,95,50,49,95,102,111,114,99,105,110,103,0);
         tooltipsL = routerm.length > 84;
          let specs: Map<any, any> = new Map([[String.fromCharCode(100,101,99,97,121,95,111,95,51,0),true ], [String.fromCharCode(114,95,52,52,95,100,101,102,105,110,101,100,0),false ], [String.fromCharCode(107,95,51,54,95,110,111,110,113,117,111,116,101,100,0),true ]]);
          let favorite3: Array<any> = [749, 558];
          let profileA = 4.0;
         tooltipsL = topicN.length > 12 && 12 > specs.size;
         specs = new Map([[`${favorite3.length}`, favorite3.length]]);
         profileA += parseFloat(`${parseInt(`${profileA}`) - favorite3.length}`);
          let viewerF: Map<any, any> = new Map([[String.fromCharCode(101,115,115,105,111,110,95,120,95,54,0),905], [String.fromCharCode(120,95,51,52,95,101,120,99,101,101,100,0),146], [String.fromCharCode(98,95,56,51,95,99,111,112,121,100,97,116,97,0),194]]);
          let helperL = true;
          let commentf = String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,113,95,49,48,48,0);
         tooltipsL = viewerF.size == 59;
         viewerF.set(`${helperL}`, ((helperL ? 5 : 4) >> (Math.min(Math.abs(1), 4))));
         commentf = `${commentf.length}`;
      let sentryG = tooltipsL ? !tooltipsL : tooltipsL;
      do {
         tooltipsL = tooltipsL || routerm.length < 82;
         if (sentryG) {
            break;
         }
      } while ((topicN.length > 5) && sentryG);
         topicN = `${(1 - (tooltipsL ? 4 : 2))}`;
          let leaguey = String.fromCharCode(102,95,55,49,95,105,113,109,102,0);
          let lighth = 2;
          let back6 = 4.0;
         routerm.push(topicN.length & leaguey.length);
         leaguey += `${parseInt(`${back6}`)}`;
         lighth /= Math.max(3, parseInt(`${back6}`) | 3);
          let expiredM = 3.0;
          let agreementX: Map<any, any> = new Map([[String.fromCharCode(98,111,111,108,95,118,95,57,56,0),String.fromCharCode(105,95,56,48,95,115,105,110,103,108,101,116,97,98,108,101,0)], [String.fromCharCode(103,95,52,50,95,112,111,115,116,105,111,110,0),String.fromCharCode(109,95,54,54,95,115,97,116,105,115,102,105,101,100,0)], [String.fromCharCode(110,95,55,50,95,108,105,98,120,0),String.fromCharCode(115,101,116,114,97,110,103,101,95,49,95,54,53,0)]]);
          let settingU = String.fromCharCode(109,97,114,103,105,110,95,121,95,55,48,0);
         routerm = [topicN.length];
         expiredM /= Math.max(2, parseFloat(`${settingU.length}`));
         agreementX = new Map([[`${agreementX.size}`, parseInt(`${expiredM}`) | agreementX.size]]);
         settingU += `${(settingU == String.fromCharCode(51,0) ? settingU.length : agreementX.size)}`;
      if (!tooltipsL) {
         tooltipsL = routerm.includes(tooltipsL);
      }
          let episodeT = 4;
         topicN = `${routerm.length & 1}`;
         episodeT %= Math.max(episodeT, 3);
      topicS += `${2 & routerm.length}`;
   if (1.2 > (emojiJ - filterZ) && (1.2 - filterZ) > 1.81) {
      emojiJ -= parseInt(`${filterZ}`) * 3;
   }
   if (!brightnessd && shrinkG.length <= 1) {
       let moduleQ = 2.0;
      let benefit2 = moduleQ <= 6163844.0;
      do {
         moduleQ -= parseInt(`${moduleQ}`) / 1;
         if (benefit2) {
            break;
         }
      } while (benefit2 && (1.98 <= (moduleQ * 3.49) || (moduleQ / 3.49) <= 2.77));
      let injury7 = moduleQ >= 6099696.0;
      do {
         moduleQ /= Math.max(1, parseInt(`${moduleQ}`));
         if (injury7) {
            break;
         }
      } while (((moduleQ / 4.11) >= 2.63 && (moduleQ / (Math.max(4.11, 4))) >= 2.63) && injury7);
      if (moduleQ == moduleQ) {
         moduleQ /= Math.max(2, parseInt(`${moduleQ}`) >> (Math.min(1, Math.abs(3))));
      }
      brightnessd = (parseInt(`${moduleQ}`) / (Math.max(5, shrinkG.length))) == 85;
   }
      emojiJ -= turnw | 3;
      controls9 += specC.length << (Math.min(Math.abs(1), 5));
      expiredp += `${controls9 >> (Math.min(greyy.length, 2))}`;
      emojiJ *= 2;
      darkP = `${parseInt(`${filterZ}`) ^ expiredp.length}`;
      controls9 -= parseInt(`${emojiJ}`);
   while (!shrinkG.includes(expiredp)) {
      expiredp = `${parseInt(`${emojiJ}`)}`;
      break;
   }

      dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    } else {
      dispatch(resumeVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    }
  }
}

function startVideoDownloadThunk(
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === RAccepted.RUnselectedDropdown){
       let inactivef = String.fromCharCode(117,95,52,49,95,112,111,115,116,99,111,100,101,0);
    let gift1 = String.fromCharCode(112,115,102,98,95,107,95,50,54,0);
    let appleL = 3.0;
    let splashF = String.fromCharCode(101,95,56,49,95,115,117,114,101,0);
    let loadingw: Map<any, any> = new Map([[String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,55,95,57,54,0),76], [String.fromCharCode(119,95,50,50,95,116,119,114,112,0),708]]);
    let remindern = String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,113,95,54,52,0);
    let privacyQ: Array<any> = [228, 711, 776];
    let dangerH = 4;
    let appleQ = String.fromCharCode(119,95,49,48,95,115,111,114,116,105,110,103,0);
      remindern = `${2 * inactivef.length}`;
   while ((splashF.length - 3) >= 3 || (splashF.length - 3) >= 1) {
       let hooksd = 0;
       let watchq = String.fromCharCode(99,95,51,52,95,102,111,114,119,97,114,100,101,114,0);
       let d_titleC = String.fromCharCode(100,108,114,114,95,49,95,51,52,0);
       let short_eg = String.fromCharCode(101,95,52,57,95,115,117,112,112,108,121,0);
      for (let c = 0; c < 3; c++) {
         hooksd <<= Math.min(3, Math.abs(d_titleC.length % 3));
      }
          let combinedM = 0.0;
          let sell6 = 4.0;
         d_titleC = "3";
         combinedM /= Math.max(1 + parseInt(`${combinedM}`), 1);
         sell6 += parseInt(`${combinedM}`);
         watchq += `${watchq.length % 1}`;
      for (let i = 0; i < 1; i++) {
         watchq += "1";
      }
      if (d_titleC == String.fromCharCode(78,0) || short_eg == String.fromCharCode(115,0)) {
         d_titleC = `${hooksd / (Math.max(2, 2))}`;
      }
          let floaterf = 2.0;
          let suggestionh = true;
         watchq = `${parseInt(`${floaterf}`) % (Math.max(3, hooksd))}`;
         floaterf -= (parseFloat(`${(suggestionh ? 2 : 1)}`));
         short_eg += `${hooksd / (Math.max(2, 10))}`;
         watchq = `${d_titleC.length + watchq.length}`;
       let analytics5 = String.fromCharCode(114,101,111,114,100,101,114,101,100,95,112,95,57,48,0);
          let commone: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,115,95,52,55,0),668], [String.fromCharCode(117,95,48,95,97,110,99,104,111,114,0),682]]);
          let downloadx: Map<any, any> = new Map([[String.fromCharCode(115,95,49,51,95,102,111,114,101,109,97,110,0),String.fromCharCode(98,95,57,95,97,117,116,104,111,114,105,122,101,100,0)], [String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,95,99,95,55,52,0),String.fromCharCode(101,122,111,115,95,106,95,54,57,0)]]);
         hooksd -= watchq.length;
         commone.set(`${commone.size}`, 1 >> (Math.min(1, Math.abs(downloadx.size))));
         downloadx = new Map([[`${commone.size}`, commone.size]]);
       let save8 = 2.0;
       let clubw = String.fromCharCode(117,95,51,49,95,97,108,105,103,110,0);
       let connectionS = String.fromCharCode(105,95,56,95,109,115,101,112,115,110,114,0);
      loadingw = new Map([[`${loadingw.size}`, gift1.length % (Math.max(1, 4))]]);
      break;
   }
   for (let d = 0; d < 1; d++) {
      inactivef += `${splashF.length << (Math.min(Math.abs(2), 3))}`;
   }
       let crowni = false;
          let promotion2 = false;
          let rulesu: Map<any, any> = new Map([[String.fromCharCode(112,117,110,99,104,95,102,95,52,54,0),273], [String.fromCharCode(116,104,105,114,116,121,95,108,95,53,57,0),219]]);
         crowni = !promotion2;
         promotion2 = 73 <= rulesu.size;
         rulesu.set(`${rulesu.size}`, rulesu.size);
         crowni = !crowni && crowni;
      while (crowni || crowni) {
         crowni = !crowni;
         break;
      }
      splashF = `${(3 % (Math.max(8, (crowni ? 2 : 3))))}`;
   while (!splashF.startsWith(`${appleL}`)) {
       let calendarr = 4.0;
       let aboutp = 3.0;
       let rightO = 3.0;
       let stationN = true;
       let viewerv: Map<any, any> = new Map([[String.fromCharCode(114,95,51,52,95,116,121,112,101,110,97,109,101,0),true ], [String.fromCharCode(112,101,114,109,97,110,101,110,116,95,108,95,54,51,0),true ]]);
         stationN = stationN && viewerv.size > 72;
         stationN = stationN || viewerv.size == 60;
       let saveg = 5;
       let dangery = 0;
          let z_imageg = true;
          let line9 = String.fromCharCode(108,95,53,49,95,100,98,111,111,108,104,117,102,102,0);
         saveg |= viewerv.size << (Math.min(Math.abs(3), 4));
         z_imageg = line9.length < 54;
         line9 = `${(line9.length >> (Math.min(3, Math.abs((z_imageg ? 3 : 5)))))}`;
      if (stationN) {
          let bootsplashB = String.fromCharCode(102,95,49,51,95,102,105,108,116,0);
          let gestureP: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,116,114,95,119,95,55,48,0),228], [String.fromCharCode(97,95,54,51,95,112,108,97,99,101,109,97,114,107,0),317]]);
          let halfz = true;
          let detailsQ = 5.0;
          let fastforwardk = String.fromCharCode(97,118,103,115,97,100,95,56,95,50,52,0);
         dangery ^= ((halfz ? 4 : 2) | parseInt(`${aboutp}`));
         bootsplashB += `${parseInt(`${detailsQ}`)}`;
         gestureP.set(`${detailsQ}`, parseInt(`${detailsQ}`));
         halfz = fastforwardk.length <= bootsplashB.length;
         fastforwardk += `${bootsplashB.length}`;
      }
      if ((dangery * saveg) <= 2 && (dangery * saveg) <= 2) {
         saveg /= Math.max(viewerv.size - dangery, 1);
      }
      let cornerd = rightO <= 7894658.0;
      do {
         rightO /= Math.max(5, saveg);
         if (cornerd) {
            break;
         }
      } while (cornerd && ((dangery * 1) >= 2 || 5 >= (1 / (Math.max(10, dangery)))));
      while (dangery < 4) {
         dangery ^= parseInt(`${aboutp}`) | 1;
         break;
      }
         aboutp += parseFloat(`${1}`);
      while (1 > viewerv.size) {
         dangery &= parseInt(`${rightO}`) << (Math.min(Math.abs(parseInt(`${calendarr}`)), 3));
         break;
      }
       let privacyf: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,99,111,110,106,95,54,95,55,0),false ], [String.fromCharCode(105,95,55,48,95,115,111,117,114,99,101,105,100,0),false ]]);
       let crowng: Map<any, any> = new Map([[String.fromCharCode(112,95,56,54,95,112,111,115,116,99,111,100,101,0),274], [String.fromCharCode(106,95,50,48,95,99,108,117,98,0),356], [String.fromCharCode(108,95,52,50,95,119,105,110,116,104,114,101,97,100,0),581]]);
       let philippinesx = String.fromCharCode(120,95,50,49,95,115,105,110,99,101,0);
         saveg |= parseInt(`${aboutp}`) / 1;
         viewerv = new Map([[`${viewerv.size}`, philippinesx.length]]);
         viewerv = new Map([[`${privacyf.size}`, crowng.size]]);
      appleL -= loadingw.size % 1;
      break;
   }
      gift1 = `${privacyQ.length | remindern.length}`;

        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(percentage, 100)
          }
        }))
      }
    }, 2000)
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
      
      
      
      
      
      
      
    }

    const onDownloadEnd = () => {
       let success0 = 3.0;
    let frame__4a = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,121,95,55,57,0);
    let promotionD = 3;
    let selectionE: Array<any> = [751, 898];
    let inviteX: Array<any> = [88, 385];
    let readb: Map<any, any> = new Map([[String.fromCharCode(101,95,56,52,95,115,111,102,114,101,101,0),709], [String.fromCharCode(115,117,98,104,101,97,100,101,114,95,113,95,53,56,0),682], [String.fromCharCode(101,105,112,95,102,95,52,48,0),397]]);
    let guideG = 2;
    let sellg: Map<any, any> = new Map([[String.fromCharCode(99,95,57,48,95,119,97,118,101,115,0),770], [String.fromCharCode(97,110,110,117,108,97,114,95,109,95,53,51,0),330], [String.fromCharCode(115,117,98,99,111,101,102,115,95,112,95,53,55,0),773]]);
    let combineds: Map<any, any> = new Map([[String.fromCharCode(105,110,111,117,116,115,95,116,95,57,55,0),563], [String.fromCharCode(113,110,111,115,95,109,95,56,49,0),365], [String.fromCharCode(112,115,121,109,111,100,101,108,95,103,95,50,54,0),266]]);
    let halfy = true;
    let usernameL = String.fromCharCode(114,102,116,98,115,117,98,95,119,95,50,57,0);
    let favoriteG = 1.0;
       let entryj = String.fromCharCode(98,95,52,54,95,99,100,102,116,0);
       let tumbnailp = 2;
       let roomS = 1.0;
         tumbnailp += tumbnailp << (Math.min(Math.abs(3), 3));
          let pointl: Map<any, any> = new Map([[String.fromCharCode(104,111,116,111,95,105,95,52,57,0),362], [String.fromCharCode(122,95,56,51,95,116,105,109,101,0),735], [String.fromCharCode(111,95,55,52,95,115,116,97,121,0),40]]);
          let subsR = String.fromCharCode(97,95,57,57,95,100,117,109,112,112,97,99,107,101,116,0);
         tumbnailp >>= Math.min(4, Math.abs(entryj.length ^ subsR.length));
         pointl.set(`${pointl.size}`, pointl.size);
         subsR = "1";
          let frame__wq = 2;
          let storez = false;
          let closeq: Array<any> = [439, 314, 777];
         tumbnailp <<= Math.min(Math.abs(parseInt(`${roomS}`) - 3), 2);
         frame__wq <<= Math.min(Math.abs(((storez ? 1 : 5) & 1)), 5);
         storez = closeq.length > 88;
         closeq = [(closeq.length | (storez ? 4 : 1))];
      for (let u = 0; u < 2; u++) {
         entryj += `${tumbnailp}`;
      }
         entryj = `${parseInt(`${roomS}`) | tumbnailp}`;
          let renewZ: Array<any> = [String.fromCharCode(114,100,118,111,95,111,95,53,48,0), String.fromCharCode(116,95,56,53,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0)];
         tumbnailp |= renewZ.length * 3;
      if (4 <= (tumbnailp / 2) && 4.41 <= (4.94 / (Math.max(6, roomS)))) {
         roomS -= (parseFloat(`${entryj == String.fromCharCode(65,0) ? entryj.length : parseInt(`${roomS}`)}`));
      }
      if ((tumbnailp | entryj.length) <= 5 || (5 | tumbnailp) <= 3) {
          let mathj = 3;
          let floaterW = 5.0;
         tumbnailp -= 2;
         mathj <<= Math.min(Math.abs(mathj ^ parseInt(`${floaterW}`)), 2);
         floaterW *= mathj & parseInt(`${floaterW}`);
      }
      if (2 < (4 * tumbnailp) && 4 < (4 * tumbnailp)) {
         tumbnailp *= 2 | tumbnailp;
      }
      selectionE = [selectionE.length];
   if ((4 + combineds.size) == 5 || 2 == (combineds.size + 4)) {
      combineds.set(`${success0}`, sellg.size);
   }
       let verticalL = 3.0;
       let bannerg = String.fromCharCode(119,111,114,107,101,114,95,99,95,55,51,0);
       let tumbnailE = 1.0;
      if ((parseFloat(`${bannerg.length}`) + tumbnailE) <= 5.34 && (5.34 + tumbnailE) <= 3.55) {
          let searchbari: Map<any, any> = new Map([[String.fromCharCode(109,95,53,48,95,99,111,110,118,101,114,115,105,111,110,115,0),966], [String.fromCharCode(112,95,51,51,95,111,112,99,111,100,101,115,0),186]]);
          let specG: Array<any> = [356, 830];
         tumbnailE -= parseFloat(`${parseInt(`${tumbnailE}`) * 3}`);
         searchbari.set(`${specG.length}`, specG.length);
      }
      while ((bannerg.length * 1) <= 2 || (bannerg.length * 1) <= 1) {
         tumbnailE /= Math.max(1, parseFloat(`${2}`));
         break;
      }
         verticalL *= parseFloat(`${bannerg.length + parseInt(`${tumbnailE}`)}`);
      for (let f = 0; f < 3; f++) {
         bannerg += `${1 + parseInt(`${verticalL}`)}`;
      }
         bannerg += `${parseInt(`${verticalL}`) - parseInt(`${tumbnailE}`)}`;
      if ((parseFloat(`${bannerg.length}`) * verticalL) > 5.5) {
          let collection7 = 0.0;
         verticalL *= parseFloat(`${parseInt(`${collection7}`)}`);
      }
      let singleH = verticalL >= 9195463.0;
      do {
         verticalL -= parseFloat(`${parseInt(`${tumbnailE}`)}`);
         if (singleH) {
            break;
         }
      } while (singleH && ((verticalL - tumbnailE) < 2.33));
       let halfR = String.fromCharCode(108,95,51,50,95,116,97,107,101,110,0);
       let source8 = String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,117,95,49,57,0);
      while (1.36 < (verticalL / 2.26) && (bannerg.length >> (Math.min(Math.abs(5), 1))) < 2) {
          let feedbackH = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,113,95,50,56,0);
          let agreementB = 0.0;
          let miniJ = 4.0;
         verticalL -= parseFloat(`${bannerg.length}`);
         feedbackH = `${parseInt(`${agreementB}`)}`;
         agreementB *= parseFloat(`${2 << (Math.min(1, feedbackH.length))}`);
         miniJ *= parseFloat(`${2}`);
         break;
      }
      success0 /= Math.max(parseFloat(`${parseInt(`${success0}`) / 3}`), 4);
   for (let m = 0; m < 3; m++) {
      readb.set(`${selectionE.length}`, selectionE.length);
   }
   if ((frame__4a.length * promotionD) >= 1) {
      frame__4a = `${guideG % 1}`;
   }
       let recommendationc = true;
       let list3 = String.fromCharCode(120,95,54,50,95,114,103,101,110,0);
      let mappingH = list3.length >= 5552926;
      do {
         list3 = "3";
         if (mappingH) {
            break;
         }
      } while (mappingH && (list3.includes(`${recommendationc}`)));
       let profileq = 5.0;
         recommendationc = (list3.length * parseInt(`${profileq}`)) > 80;
         profileq -= 1 ^ list3.length;
      let modalJ = String.fromCharCode(111,50,116,121,50,49,95,118,98,0) == list3;
      do {
         list3 = `${1 * parseInt(`${profileq}`)}`;
         if (modalJ) {
            break;
         }
      } while ((recommendationc && 4 < list3.length) && modalJ);
          let znewsa = String.fromCharCode(102,116,115,116,111,107,95,103,95,57,50,0);
          let iconh = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,100,95,49,53,0);
         list3 += `${list3.length * iconh.length}`;
         znewsa += `${znewsa.length % 2}`;
         iconh = `${(znewsa == String.fromCharCode(105,0) ? znewsa.length : znewsa.length)}`;
      combineds = new Map([[`${combineds.size}`, 3]]);

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

      sellg = new Map([[`${combineds.size}`, 1 ^ inviteX.length]]);
   for (let m = 0; m < 3; m++) {
      combineds.set(`${inviteX.length}`, combineds.size ^ 3);
   }
       let commond = 2.0;
       let helperU = false;
          let bell1 = 5;
         helperU = !helperU;
         bell1 |= 1 & bell1;
      if (helperU) {
         commond -= parseInt(`${commond}`) % 2;
      }
         commond *= (parseInt(`${commond}`) % (Math.max(9, (helperU ? 3 : 4))));
         commond -= parseInt(`${commond}`) * 3;
      for (let l = 0; l < 2; l++) {
         commond -= parseInt(`${commond}`) * 2;
      }
      if (commond == 4.18) {
         commond += (parseInt(`${commond}`) + (helperU ? 3 : 5));
      }
      frame__4a = `${parseInt(`${commond}`) / 2}`;
   for (let n = 0; n < 2; n++) {
      promotionD <<= Math.min(4, Math.abs(1));
   }
      inviteX = [parseInt(`${success0}`) << (Math.min(selectionE.length, 2))];
   for (let s = 0; s < 3; s++) {
      success0 -= parseFloat(`${frame__4a.length ^ 2}`);
   }
      const newState = getState().downloadVideoReducer

   for (let b = 0; b < 3; b++) {
      inviteX.push(combineds.size);
   }
      readb = new Map([[usernameL, (usernameL == String.fromCharCode(67,0) ? usernameL.length : promotionD)]]);
   while (2 >= (readb.size % (Math.max(frame__4a.length, 4)))) {
       let checkboxm = String.fromCharCode(110,111,116,105,99,101,115,95,104,95,49,56,0);
       let dangerk: Array<any> = [919, 816, 763];
       let statisticsU = String.fromCharCode(100,101,114,105,118,97,116,105,111,110,95,103,95,53,49,0);
       let singlef = true;
       let teamN = 0.0;
      for (let g = 0; g < 1; g++) {
         checkboxm = `${statisticsU.length}`;
      }
       let guide6 = String.fromCharCode(97,95,51,51,0);
         singlef = String.fromCharCode(122,0) == checkboxm;
      for (let z = 0; z < 1; z++) {
         statisticsU = `${statisticsU.length - 1}`;
      }
         teamN /= Math.max(dangerk.length | 1, 1);
      let sportc = teamN <= 9117586.0;
      do {
         teamN /= Math.max(2, checkboxm.length);
         if (sportc) {
            break;
         }
      } while ((statisticsU.includes(`${teamN}`)) && sportc);
         teamN *= checkboxm.length;
         dangerk = [(checkboxm == String.fromCharCode(77,0) ? checkboxm.length : dangerk.length)];
         dangerk.push((String.fromCharCode(71,0) == statisticsU ? statisticsU.length : (singlef ? 2 : 3)));
      while (3 < checkboxm.length) {
          let stepC = String.fromCharCode(101,95,53,55,95,112,102,102,102,116,0);
          let backS = 1.0;
         teamN *= (stepC == String.fromCharCode(90,0) ? stepC.length : guide6.length);
         backS += parseFloat(`${3}`);
         break;
      }
       let configs = String.fromCharCode(109,95,57,57,95,115,105,110,113,105,0);
       let countryM = String.fromCharCode(112,114,111,99,101,115,115,111,114,115,95,116,95,49,57,0);
         statisticsU = `${((singlef ? 3 : 3))}`;
         singlef = configs == String.fromCharCode(109,0) && dangerk.length >= 10;
      if (countryM.length <= 2 && statisticsU.length <= 2) {
          let internet9 = String.fromCharCode(98,95,54,55,95,109,105,112,115,0);
          let sportsi = 5;
          let commentS = String.fromCharCode(102,97,114,95,118,95,52,50,0);
          let logoutr = 3;
          let loadinge = String.fromCharCode(100,121,110,97,114,114,97,121,95,120,95,49,48,48,0);
         countryM += `${(commentS == String.fromCharCode(100,0) ? parseInt(`${teamN}`) : commentS.length)}`;
         internet9 += `${sportsi % (Math.max(loadinge.length, 3))}`;
         sportsi |= logoutr;
         logoutr |= (internet9 == String.fromCharCode(103,0) ? internet9.length : sportsi);
         loadinge = `${(String.fromCharCode(108,0) == loadinge ? sportsi : loadinge.length)}`;
      }
      if (statisticsU.length == 5 && !singlef) {
         statisticsU = `${guide6.length}`;
      }
      readb.set(`${teamN}`, 3 + parseInt(`${teamN}`));
      break;
   }
       let screeno: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,103,114,97,109,95,107,95,53,51,0),913], [String.fromCharCode(101,116,101,114,110,105,116,121,95,100,95,51,51,0),490], [String.fromCharCode(98,95,51,95,100,105,103,101,115,116,98,121,110,105,100,0),605]]);
       let over6 = false;
       let sentrys = 0;
      if ((sentrys << (Math.min(Math.abs(3), 5))) < 1 || (sentrys << (Math.min(Math.abs(screeno.size), 2))) < 3) {
          let alertD: Array<any> = [290, 873];
         screeno = new Map([[`${over6}`, sentrys]]);
         alertD = [2 - alertD.length];
      }
      if (1 >= (screeno.size | 1) && 1 >= screeno.size) {
         over6 = sentrys > 73;
      }
       let greyF = 5.0;
       let clockl = 2.0;
       let ball6 = String.fromCharCode(114,95,56,56,95,109,105,110,105,109,97,108,0);
      let rulesn = 5772256.0 <= clockl;
      do {
         clockl -= parseFloat(`${ball6.length}`);
         if (rulesn) {
            break;
         }
      } while (rulesn && (1.38 > (4.56 - clockl) && (parseInt(`${clockl}`) - 3) > 2));
         greyF /= Math.max((parseFloat(`${String.fromCharCode(72,0) == ball6 ? ball6.length : (over6 ? 2 : 1)}`)), 4);
         sentrys -= 2;
       let combined2 = false;
          let downloaderv = false;
         over6 = clockl >= 23.32;
         downloaderv = (!downloaderv ? downloaderv : !downloaderv);
      guideG -= usernameL.length;
      usernameL += `${combineds.size / 3}`;
   for (let n = 0; n < 2; n++) {
       let buttonm = String.fromCharCode(104,95,50,54,95,114,101,102,108,0);
       let modelsf = 1;
      for (let t = 0; t < 2; t++) {
          let redirectN = String.fromCharCode(101,95,55,95,112,111,115,105,116,105,111,110,0);
         modelsf *= (String.fromCharCode(50,0) == buttonm ? modelsf : buttonm.length);
         redirectN += `${1 * redirectN.length}`;
      }
       let contextg = String.fromCharCode(119,95,53,50,95,99,108,111,115,101,99,98,0);
         modelsf += modelsf | 2;
       let downloading7 = 0.0;
       let middle5 = 1.0;
      let commentO = String.fromCharCode(120,57,57,101,118,108,99,102,95,121,0) == buttonm;
      do {
          let filedO = 5.0;
          let infoF = String.fromCharCode(102,95,53,53,95,115,108,105,99,101,0);
          let showe = 1;
         buttonm += "1";
         filedO /= Math.max(4, (infoF == String.fromCharCode(48,0) ? parseInt(`${filedO}`) : infoF.length));
         showe &= showe;
         if (commentO) {
            break;
         }
      } while (commentO && (buttonm.length >= middle5));
          let logout8 = String.fromCharCode(104,111,114,105,122,95,111,95,54,57,0);
          let launchX = 1.0;
          let episoden = 3.0;
         downloading7 /= Math.max(2, 1);
         logout8 = `${logout8.length}`;
         launchX /= Math.max(5, parseFloat(`${logout8.length}`));
         episoden -= parseFloat(`${parseInt(`${launchX}`) * parseInt(`${episoden}`)}`);
      promotionD >>= Math.min(5, Math.abs(guideG | 3));
   }
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
    }

    const handleError = () => {
       let settingd = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,106,95,50,50,0);
    let filedn: Map<any, any> = new Map([[String.fromCharCode(120,112,111,114,116,101,100,95,107,95,51,49,0),false ], [String.fromCharCode(109,95,51,56,95,109,97,115,107,101,100,0),true ], [String.fromCharCode(112,97,115,115,102,98,95,49,95,49,50,0),false ]]);
    let liveT = false;
    let twitterX = 5.0;
    let actiont = String.fromCharCode(114,95,51,48,95,108,117,114,97,108,105,122,97,116,105,111,110,0);
    let hongkong2 = 5.0;
    let z_titleH = 0;
    let brightnessl = 1.0;
    let playq = String.fromCharCode(97,95,57,50,95,114,97,112,112,101,114,0);
    let countdownZ = 1.0;
   while (filedn.size >= settingd.length) {
      filedn = new Map([[`${liveT}`, ((liveT ? 5 : 5) - parseInt(`${twitterX}`))]]);
      break;
   }
      filedn.set(`${hongkong2}`, settingd.length);

      console.debug('error downloading ', vod.vod_name)

   while ((hongkong2 / (Math.max(4.9, 3))) > 2.17 || (parseInt(`${hongkong2}`) / (Math.max(filedn.size, 7))) > 5) {
      hongkong2 *= (parseFloat(`${settingd == String.fromCharCode(120,0) ? settingd.length : actiont.length}`));
      break;
   }
   while (3 <= (filedn.size & z_titleH) && (filedn.size & z_titleH) <= 3) {
       let entry3 = String.fromCharCode(118,102,114,101,101,95,53,95,51,57,0);
      for (let q = 0; q < 2; q++) {
          let streamingd: Array<any> = [878, 628];
          let upgradeh = 1.0;
         entry3 += `${streamingd.length}`;
         streamingd.push(2 / (Math.max(4, parseInt(`${upgradeh}`))));
         upgradeh += parseFloat(`${parseInt(`${upgradeh}`) ^ parseInt(`${upgradeh}`)}`);
      }
       let zhengpian9 = String.fromCharCode(108,95,49,49,95,99,108,108,105,0);
       let friendse = String.fromCharCode(100,111,99,107,101,114,95,113,95,50,57,0);
       let regengC = String.fromCharCode(101,95,55,50,95,110,97,109,101,0);
       let w_titlex = String.fromCharCode(115,116,97,121,95,114,95,54,50,0);
      filedn.set(settingd, settingd.length);
      break;
   }
      const state = getState().downloadVideoReducer

      hongkong2 *= (parseFloat(`${settingd.length << (Math.min(5, Math.abs((liveT ? 2 : 1))))}`));
   for (let s = 0; s < 1; s++) {
       let gesturef = 4;
       let eighteen_ = String.fromCharCode(118,95,55,95,103,101,116,99,0);
       let assistW = 2.0;
         eighteen_ = `${eighteen_.length}`;
          let empty4: Array<any> = [64, 731, 467];
          let castingf = 2.0;
          let changel = 0.0;
         gesturef /= Math.max(5, eighteen_.length);
         empty4 = [parseInt(`${changel}`) | parseInt(`${castingf}`)];
         castingf -= empty4.length;
         changel -= 1;
          let eactm = String.fromCharCode(111,95,55,95,105,109,101,114,0);
          let taiwank = 1.0;
          let floating0 = String.fromCharCode(114,111,117,110,100,95,120,95,50,48,0);
         eighteen_ += `${floating0.length + eactm.length}`;
         eactm = `${parseInt(`${taiwank}`)}`;
         eighteen_ += `${eighteen_.length % (Math.max(1, 1))}`;
      let room6 = eighteen_.length >= 5972943;
      do {
          let mutedX = String.fromCharCode(121,95,49,51,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0);
         eighteen_ = `${(eighteen_ == String.fromCharCode(52,0) ? parseInt(`${assistW}`) : eighteen_.length)}`;
         mutedX += `${mutedX.length >> (Math.min(Math.abs(2), 4))}`;
         if (room6) {
            break;
         }
      } while ((1 == eighteen_.length) && room6);
         eighteen_ = `${gesturef}`;
      let white3 = 6516581.0 <= assistW;
      do {
         assistW /= Math.max(3, parseFloat(`${eighteen_.length >> (Math.min(Math.abs(1), 4))}`));
         if (white3) {
            break;
         }
      } while ((2.22 < (assistW + gesturef)) && white3);
         eighteen_ += `${gesturef}`;
         gesturef <<= Math.min(5, Math.abs(gesturef));
      filedn.set(`${liveT}`, eighteen_.length);
   }
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

   let notificationI = actiont.length >= 7526091;
   do {
      actiont = `${3 & settingd.length}`;
      if (notificationI) {
         break;
      }
   } while (notificationI && (actiont.includes(`${hongkong2}`)));
   while ((settingd.length << (Math.min(Math.abs(4), 3))) < 2) {
      settingd = `${1 ^ parseInt(`${brightnessl}`)}`;
      break;
   }
      if (!targetEpisode) return 
      if (targetEpisode?.status === RAccepted.REditGoal){

       let constantsf: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,114,101,100,111,0),169], [String.fromCharCode(115,98,111,120,95,106,95,55,55,0),652], [String.fromCharCode(97,98,115,120,95,108,95,56,53,0),509]]);
       let eactu = String.fromCharCode(107,95,57,48,95,103,114,97,121,97,0);
          let selectM: Array<any> = [169, 872];
          let emojiG: Array<any> = [35, 123, 532];
          let blacklisti = String.fromCharCode(100,95,54,95,114,111,103,114,101,115,115,0);
         eactu = `${1 >> (Math.min(4, eactu.length))}`;
         selectM.push(emojiG.length % (Math.max(1, 6)));
         emojiG = [emojiG.length];
         blacklisti += "3";
       let incidentG = true;
       let linkv = false;
         eactu = `${((linkv ? 4 : 2) & eactu.length)}`;
      for (let j = 0; j < 3; j++) {
         eactu = `${constantsf.size ^ 1}`;
      }
       let internetq = 3;
       let starC = 2;
       let short_le = String.fromCharCode(103,105,103,97,98,121,116,101,95,113,95,52,54,0);
      liveT = constantsf.size >= 23;
      twitterX /= Math.max(2, parseFloat(`${2}`));
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: RAccepted.RPoint
      }))

      z_titleH &= parseInt(`${hongkong2}`);
      twitterX += parseFloat(`${3}`);

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

      brightnessl += parseFloat(`${1}`);
   let lighty = String.fromCharCode(116,95,114,102,54,116,121,0) == actiont;
   do {
      actiont += `${((liveT ? 1 : 2) << (Math.min(Math.abs(parseInt(`${hongkong2}`)), 4)))}`;
      if (lighty) {
         break;
      }
   } while (lighty && (settingd != String.fromCharCode(105,0) || actiont.length == 2));
    if (!targetVod) return 
    

   let starz = z_titleH <= 6517471;
   do {
      z_titleH %= Math.max(5, 2);
      if (starz) {
         break;
      }
   } while ((3 < z_titleH) && starz);
      brightnessl *= parseFloat(`${settingd.length}`);
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})

   let trophyx = hongkong2 >= 4932924.0;
   do {
       let entryW = 3;
      let sentrys = 7223677 <= entryW;
      do {
         entryW &= entryW;
         if (sentrys) {
            break;
         }
      } while (sentrys && ((3 >> (Math.min(1, Math.abs(entryW)))) > 1 && (entryW >> (Math.min(Math.abs(entryW), 2))) > 3));
         entryW |= entryW;
         entryW ^= entryW;
      hongkong2 -= parseFloat(`${parseInt(`${brightnessl}`)}`);
      if (trophyx) {
         break;
      }
   } while (trophyx && (parseInt(`${hongkong2}`) > actiont.length));
   for (let i = 0; i < 3; i++) {
      playq += `${((liveT ? 3 : 4) | 3)}`;
   }
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return
      if (targetEpisode?.status === RAccepted.REditGoal){
        return 
      }
      
      
      
      
      
      
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: RAccepted.RClearModels, 
        sizeInBytes: finalSizeInBytes, 
        progress: {
          percentage: 100
        }
      }))
      onDownloadEnd()
    }

    

    const handleSessionCreated = ({session}: {session: FFmpegSession}) => {
      const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 

      if (targetEpisode.status === RAccepted.REditGoal) { 
        session.cancel()
      }
      else {
        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {ffmpegSession: session.getSessionId()}))
      }


    }

    const state = getState().downloadVideoReducer

    const isAdult = state.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

    if (!url) return; 
    if (state.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return; 
    if (state.queue.length === 0) return; 

    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(startVideoDownload(vod, vodSourceId, vodUrlNid))
    downloadVod(
      `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
      url, 
      handleUpdate, 
      handleComplete, 
      handleError, 
      handleSessionCreated
    )
  
  }
}

export function addVideoToDownloadThunk(
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid, vodIsAdult));
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: RAccepted.RUnselectedDropdown}))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function removeVideoFromDownloadThunk(
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 
    const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return 

    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})
    const allSession = await FFmpegKit.listSessions() 
    for (const session of allSession) {
      if (await session.getSessionId() === targetEpisode.ffmpegSession){
       let favicono = String.fromCharCode(111,95,52,56,95,115,116,114,105,107,101,0);
    let recommendationa = 0;
    let canvasi: Map<any, any> = new Map([[String.fromCharCode(109,101,109,115,104,105,112,95,111,95,55,52,0),768], [String.fromCharCode(114,95,49,48,95,105,100,97,116,97,0),512]]);
    let showk = 4.0;
    let servicec = 3.0;
    let pageS = true;
    let details0 = String.fromCharCode(115,95,51,48,95,112,114,111,116,101,99,116,101,100,0);
    let borderlessp = String.fromCharCode(99,116,114,95,107,95,52,54,0);
    let privacyX = String.fromCharCode(114,101,115,112,111,110,100,115,95,48,95,56,48,0);
    let favoritem = String.fromCharCode(100,95,55,51,95,98,105,97,115,0);
    let nalyticsW: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,95,104,95,52,50,0),String.fromCharCode(110,95,51,49,95,98,117,110,100,108,101,0)], [String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,113,95,52,50,0),String.fromCharCode(121,95,50,57,95,116,98,117,102,0)], [String.fromCharCode(115,95,55,53,95,99,108,105,112,102,0),String.fromCharCode(110,95,57,57,95,98,117,99,107,101,116,0)]]);
    let entryv = String.fromCharCode(99,104,101,118,114,111,110,95,50,95,50,49,0);
    let nalytics3 = 2;
    let predictionz = String.fromCharCode(120,95,57,51,95,104,101,118,99,100,115,112,0);
       let orange0: Array<any> = [447, 971];
       let currentN = String.fromCharCode(113,95,55,57,95,110,101,97,114,115,101,116,0);
       let time_zf = String.fromCharCode(103,95,49,49,95,121,97,114,110,0);
      let pressure2 = orange0.length <= 5435015;
      do {
          let fieldK = String.fromCharCode(105,95,52,55,95,108,111,103,111,117,114,108,0);
          let taiwanR = false;
          let shrinkt = String.fromCharCode(100,101,97,100,105,110,101,95,107,95,50,54,0);
          let umengC = 2.0;
         orange0.push(currentN.length | time_zf.length);
         fieldK += `${2 % (Math.max(10, parseInt(`${umengC}`)))}`;
         taiwanR = !shrinkt.includes(`${umengC}`);
         shrinkt += `${(String.fromCharCode(66,0) == shrinkt ? parseInt(`${umengC}`) : shrinkt.length)}`;
         if (pressure2) {
            break;
         }
      } while ((3 < (orange0.length * 5) && 1 < (5 * time_zf.length)) && pressure2);
      for (let m = 0; m < 1; m++) {
         orange0 = [time_zf.length];
      }
       let verticalN = 0;
         orange0.push(orange0.length);
      let assistk = verticalN >= 6143780;
      do {
         verticalN &= 2;
         if (assistk) {
            break;
         }
      } while (((5 | verticalN) > 3) && assistk);
      if (1 > orange0.length) {
         verticalN ^= 2 << (Math.min(2, orange0.length));
      }
       let progressM: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,95,54,95,51,57,0),220], [String.fromCharCode(114,95,49,49,95,101,120,116,114,97,102,105,101,108,100,0),645], [String.fromCharCode(104,114,97,109,95,107,95,49,48,48,0),549]]);
         orange0 = [verticalN & 1];
          let read2: Array<any> = [192, 365, 755];
         time_zf += "1";
         read2.push(1 - read2.length);
      borderlessp += `${(String.fromCharCode(117,0) == privacyX ? privacyX.length : borderlessp.length)}`;
      borderlessp += `${recommendationa % (Math.max(4, privacyX.length))}`;
      privacyX += `${3 ^ favicono.length}`;
   for (let i = 0; i < 1; i++) {
      favoritem = `${favicono.length}`;
   }
      favicono += `${(String.fromCharCode(51,0) == details0 ? details0.length : (pageS ? 2 : 1))}`;
       let nextr = 4.0;
       let sellN = 3.0;
       let unreadc = true;
         sellN /= Math.max(parseInt(`${nextr}`), 5);
         sellN /= Math.max(5, parseInt(`${nextr}`) << (Math.min(2, Math.abs(parseInt(`${sellN}`)))));
         sellN *= (parseInt(`${sellN}`) * (unreadc ? 4 : 5));
      if (2.44 < (sellN * nextr)) {
          let type_wV = String.fromCharCode(108,111,103,95,116,95,54,54,0);
          let downloaderU = 3.0;
          let commentA: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,99,111,100,101,99,95,109,95,49,48,0),false ], [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,118,95,51,53,0),false ]]);
          let canvas3 = 3;
          let userm: Array<any> = [933, 674, 920];
         sellN *= canvas3;
         type_wV = `${parseInt(`${downloaderU}`) * 3}`;
         downloaderU += parseFloat(`${2}`);
         commentA.set(`${downloaderU}`, parseInt(`${downloaderU}`));
         canvas3 |= 3 | userm.length;
         userm.push(commentA.size / (Math.max(userm.length, 5)));
      }
          let redirectJ = 4;
         nextr /= Math.max(2, parseFloat(`${redirectJ}`));
      for (let s = 0; s < 3; s++) {
          let play9 = 3.0;
          let emojiz: Map<any, any> = new Map([[String.fromCharCode(103,110,114,101,95,97,95,51,50,0),376], [String.fromCharCode(120,95,52,48,95,98,108,97,107,101,0),313], [String.fromCharCode(111,95,52,56,95,116,101,108,101,116,101,120,116,0),481]]);
          let ewardedP = 5;
          let episodesf = String.fromCharCode(111,102,102,108,105,110,101,95,115,95,51,49,0);
          let gemfileu = String.fromCharCode(115,95,57,49,95,109,105,110,117,115,0);
         sellN += (episodesf == String.fromCharCode(70,0) ? episodesf.length : ewardedP);
         play9 -= emojiz.size;
         emojiz.set(`${play9}`, 1);
         ewardedP += emojiz.size;
         gemfileu += "2";
      }
          let vietnamo = 3.0;
          let philippines9 = 1.0;
          let shirt2 = 2.0;
         unreadc = philippines9 < 47.78;
         vietnamo *= parseFloat(`${parseInt(`${shirt2}`)}`);
         philippines9 /= Math.max(2, 3);
         shirt2 += parseInt(`${vietnamo}`);
      for (let g = 0; g < 1; g++) {
         unreadc = !unreadc;
      }
      for (let c = 0; c < 2; c++) {
         sellN -= 2;
      }
      canvasi = new Map([[borderlessp, 2 * borderlessp.length]]);
       let crossK = 4;
       let componentg = String.fromCharCode(120,95,51,50,95,112,104,111,116,111,115,0);
       let promotionu = String.fromCharCode(115,117,98,109,111,100,117,108,101,95,53,95,52,49,0);
      if (3 <= (componentg.length ^ crossK) || (crossK ^ componentg.length) <= 3) {
         componentg += `${crossK}`;
      }
         crossK ^= (String.fromCharCode(81,0) == promotionu ? crossK : promotionu.length);
       let leagueD = 5.0;
       let tooltipsQ = 3.0;
      while (3 == (parseInt(`${leagueD}`) / (Math.max(promotionu.length, 1)))) {
         promotionu = "3";
         break;
      }
      let appsK = crossK <= 8983240;
      do {
         crossK %= Math.max(3, 5);
         if (appsK) {
            break;
         }
      } while (((crossK & 2) >= 5) && appsK);
      let tooltips2 = componentg.length >= 8157100;
      do {
         componentg += "1";
         if (tooltips2) {
            break;
         }
      } while ((componentg.length == promotionu.length) && tooltips2);
      while ((4.48 * tooltipsQ) == 4.32) {
         componentg += "1";
         break;
      }
         crossK -= promotionu.length;
         tooltipsQ *= parseFloat(`${parseInt(`${tooltipsQ}`) | 1}`);
      servicec /= Math.max(5, componentg.length >> (Math.min(Math.abs(1), 4)));
   while (servicec < 5.23 && (servicec * 5.23) < 3.38) {
       let resendh = String.fromCharCode(114,102,116,98,115,117,98,95,117,95,50,49,0);
       let projectr = 2.0;
       let policyh: Map<any, any> = new Map([[String.fromCharCode(101,95,50,53,95,110,117,109,98,101,114,0),823], [String.fromCharCode(99,95,56,48,95,109,97,114,107,117,112,0),539]]);
       let detailP = 4.0;
       let layout6: Array<any> = [String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,119,95,57,51,0), String.fromCharCode(120,95,49,55,95,102,102,109,112,101,103,0)];
      let grays = resendh.length <= 8025103;
      do {
         resendh = `${(String.fromCharCode(49,0) == resendh ? resendh.length : parseInt(`${projectr}`))}`;
         if (grays) {
            break;
         }
      } while (grays && (resendh.length == 4));
      let pausef = policyh.size <= 7119257;
      do {
          let circlel = true;
         policyh = new Map([[`${circlel}`, ((circlel ? 4 : 4) % (Math.max(parseInt(`${detailP}`), 8)))]]);
         if (pausef) {
            break;
         }
      } while ((Array.from(policyh.values()).includes(layout6.length)) && pausef);
         layout6 = [1];
       let tnewsr = 1;
      for (let e = 0; e < 1; e++) {
         detailP *= parseFloat(`${2 & layout6.length}`);
      }
      for (let f = 0; f < 2; f++) {
         tnewsr /= Math.max(policyh.size - parseInt(`${detailP}`), 3);
      }
          let hongkongh = String.fromCharCode(119,95,49,55,95,100,101,99,105,109,97,116,101,0);
          let anytimeb = true;
          let componentr = false;
         projectr -= (parseFloat(`${(anytimeb ? 4 : 2)}`));
         hongkongh += `${(String.fromCharCode(112,0) == hongkongh ? (componentr ? 3 : 3) : hongkongh.length)}`;
         anytimeb = hongkongh.length < 50;
         componentr = componentr && hongkongh.length >= 76;
      let penaltyv = 5466020 <= layout6.length;
      do {
         layout6 = [parseInt(`${projectr}`)];
         if (penaltyv) {
            break;
         }
      } while (penaltyv && (tnewsr >= 1));
      if (2 > (tnewsr * layout6.length)) {
         layout6.push(policyh.size);
      }
      if (5 < policyh.size) {
         policyh = new Map([[`${layout6.length}`, 1]]);
      }
      for (let f = 0; f < 2; f++) {
         resendh = `${1 | layout6.length}`;
      }
      let turn7 = policyh.size >= 8589247;
      do {
         policyh.set(resendh, 3 - resendh.length);
         if (turn7) {
            break;
         }
      } while (turn7 && (Array.from(policyh.keys()).includes(`${projectr}`)));
          let megaphone1 = false;
          let footballx = 2.0;
         projectr /= Math.max(parseFloat(`${policyh.size}`), 2);
         megaphone1 = 46.72 <= footballx;
         footballx *= parseInt(`${footballx}`) & 3;
         policyh = new Map([[`${projectr}`, parseInt(`${projectr}`)]]);
         projectr += parseFloat(`${layout6.length}`);
      servicec -= resendh.length - 2;
      break;
   }
      showk += parseFloat(`${privacyX.length}`);
   if (borderlessp.startsWith(`${details0.length}`)) {
      borderlessp += "1";
   }
   if (3 >= (borderlessp.length - recommendationa) || 3 >= (recommendationa - borderlessp.length)) {
      recommendationa ^= (String.fromCharCode(89,0) == favicono ? (pageS ? 5 : 3) : favicono.length);
   }
   let spinner0 = pageS ? !pageS : pageS;
   do {
      pageS = 82 <= details0.length && 82 <= favoritem.length;
      if (spinner0) {
         break;
      }
   } while ((!pageS) && spinner0);
   let refreshe = 7135622 <= borderlessp.length;
   do {
      borderlessp = `${(String.fromCharCode(107,0) == favoritem ? favoritem.length : parseInt(`${servicec}`))}`;
      if (refreshe) {
         break;
      }
   } while ((!privacyX.includes(`${borderlessp.length}`)) && refreshe);
   if ((1 ^ recommendationa) == 1 && 1 == (1 ^ details0.length)) {
       let comment2 = 5;
       let progressB: Map<any, any> = new Map([[String.fromCharCode(119,95,55,56,95,103,101,110,104,0),true ], [String.fromCharCode(112,116,104,114,101,97,100,95,113,95,52,56,0),false ]]);
       let sinak = String.fromCharCode(114,95,53,50,95,109,106,112,101,103,106,112,101,103,0);
      for (let h = 0; h < 2; h++) {
         progressB = new Map([[`${progressB.size}`, comment2 % 2]]);
      }
       let umeng1 = String.fromCharCode(99,111,112,116,115,95,120,95,49,48,0);
      for (let t = 0; t < 1; t++) {
          let balll = String.fromCharCode(109,95,50,51,0);
          let shared8: Map<any, any> = new Map([[String.fromCharCode(108,95,49,52,95,112,95,55,50,0),673], [String.fromCharCode(99,114,108,105,115,115,117,101,114,95,119,95,50,49,0),71], [String.fromCharCode(109,95,50,55,95,99,111,108,108,101,99,116,105,98,108,101,115,0),736]]);
         progressB = new Map([[sinak, (balll == String.fromCharCode(72,0) ? sinak.length : balll.length)]]);
         shared8 = new Map([[`${shared8.size}`, shared8.size >> (Math.min(Math.abs(shared8.size), 2))]]);
      }
         sinak = `${progressB.size | sinak.length}`;
         comment2 /= Math.max(2, progressB.size);
          let fastn = String.fromCharCode(107,95,49,55,95,109,97,116,99,104,105,110,103,0);
          let switch_xG = false;
          let acceptedK = 3;
         sinak += `${sinak.length}`;
         fastn = `${(fastn == String.fromCharCode(53,0) ? (switch_xG ? 5 : 3) : fastn.length)}`;
         switch_xG = !switch_xG;
         acceptedK /= Math.max(acceptedK / (Math.max(1, 5)), 1);
      let shrinkv = String.fromCharCode(52,56,122,50,101,57,100,111,0) == umeng1;
      do {
         umeng1 = `${progressB.size % 1}`;
         if (shrinkv) {
            break;
         }
      } while ((2 < (5 - comment2)) && shrinkv);
      let roboton = String.fromCharCode(109,50,122,0) == umeng1;
      do {
         umeng1 = `${progressB.size * 1}`;
         if (roboton) {
            break;
         }
      } while ((sinak.startsWith(`${umeng1.length}`)) && roboton);
         sinak = "2";
      details0 += `${details0.length / 1}`;
   }
      borderlessp += "1";
      favoritem += `${recommendationa}`;
   while (details0.endsWith(`${favoritem.length}`)) {
       let usernameq: Map<any, any> = new Map([[String.fromCharCode(103,114,97,100,105,101,110,116,95,100,95,57,52,0),true ], [String.fromCharCode(100,114,97,119,95,115,95,52,48,0),true ], [String.fromCharCode(99,111,110,115,116,114,117,99,116,95,106,95,55,54,0),false ]]);
          let shrinkv6 = true;
          let uploadh = 5.0;
          let info6 = String.fromCharCode(98,108,101,101,100,95,54,95,56,51,0);
         usernameq.set(`${info6}`, usernameq.size);
         shrinkv6 = uploadh >= 89.51;
         uploadh *= ((shrinkv6 ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${uploadh}`)), 2)));
         info6 = `${3 | parseInt(`${uploadh}`)}`;
      while (usernameq.size <= usernameq.size) {
         usernameq.set(`${usernameq.size}`, usernameq.size % 3);
         break;
      }
          let thumbnailq = 5.0;
         usernameq.set(`${thumbnailq}`, 2 & parseInt(`${thumbnailq}`));
      favoritem = `${favicono.length}`;
      break;
   }
      details0 += `${privacyX.length}`;
   for (let g = 0; g < 2; g++) {
       let turnU = 5.0;
       let loadingu: Map<any, any> = new Map([[String.fromCharCode(113,95,51,56,95,113,112,101,108,0),864], [String.fromCharCode(115,101,116,105,118,95,52,95,55,51,0),117]]);
      while (2.48 == (turnU / (Math.max(loadingu.size, 5))) || 5 == (loadingu.size - 5)) {
          let previewt = String.fromCharCode(117,95,55,48,95,115,116,111,114,101,120,0);
          let viewsg = 1.0;
          let roomM = 0.0;
         turnU /= Math.max(4, 2);
         previewt = `${previewt.length}`;
         viewsg -= previewt.length;
         roomM *= 3 * parseInt(`${viewsg}`);
         break;
      }
         loadingu.set(`${turnU}`, 3);
         loadingu.set(`${turnU}`, 2);
         loadingu = new Map([[`${loadingu.size}`, parseInt(`${turnU}`) / 1]]);
       let gpayk: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,121,95,119,95,50,51,0),668], [String.fromCharCode(115,112,101,99,105,102,105,99,95,100,95,52,49,0),912], [String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,103,95,50,49,0),306]]);
       let langkey9: Map<any, any> = new Map([[String.fromCharCode(120,109,97,115,109,95,109,95,53,52,0),false ], [String.fromCharCode(114,101,108,111,103,105,110,95,113,95,57,53,0),true ], [String.fromCharCode(115,112,97,99,101,100,95,117,95,50,52,0),false ]]);
      for (let j = 0; j < 1; j++) {
          let giftC = 4.0;
         turnU -= parseInt(`${turnU}`) & gpayk.size;
         giftC -= parseFloat(`${parseInt(`${giftC}`)}`);
      }
      privacyX = `${(String.fromCharCode(81,0) == borderlessp ? borderlessp.length : loadingu.size)}`;
   }
   for (let h = 0; h < 1; h++) {
      canvasi = new Map([[`${showk}`, favicono.length]]);
   }
   for (let g = 0; g < 3; g++) {
      details0 += `${(String.fromCharCode(81,0) == borderlessp ? borderlessp.length : canvasi.size)}`;
   }
      pageS = (favicono.length * nalyticsW.size) <= 82;
   let networkY = 7699111 >= recommendationa;
   do {
      recommendationa -= 2 >> (Math.min(4, details0.length));
      if (networkY) {
         break;
      }
   } while (networkY && (recommendationa >= 4));
      favoritem = `${1 - favicono.length}`;

        session.cancel(); 
      }
    }
    dispatch(removeVideoFromDownload(vod, vodSourceId, vodUrlNid))
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function removeVodFromDownloadThunk(
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    for (const episode of targetVod.episodes) {
      const allSession = await FFmpegKit.listSessions() 
      for (const session of allSession) {
        if (await session.getSessionId() === episode.ffmpegSession){
       let loginC = String.fromCharCode(104,105,100,105,110,103,95,50,95,50,57,0);
    let emoji2 = String.fromCharCode(98,95,55,57,95,117,110,105,113,117,101,108,121,0);
    let middleG = String.fromCharCode(119,97,116,99,104,95,110,95,55,51,0);
    let chinaD = String.fromCharCode(115,112,101,108,108,95,57,95,52,50,0);
    let pressureQ = 0.0;
    let crownL = 4.0;
    let subsT = String.fromCharCode(106,95,52,49,95,115,116,114,99,115,112,110,0);
    let clearv: Map<any, any> = new Map([[String.fromCharCode(111,95,57,56,95,99,104,105,114,112,0),792], [String.fromCharCode(118,95,53,95,119,105,100,101,115,99,114,101,101,110,0),48]]);
    let taiwanN = 2.0;
    let views2 = 3.0;
    let langQ = String.fromCharCode(100,95,55,57,95,112,111,108,108,101,100,0);
    let nterstitialw = String.fromCharCode(99,111,110,116,105,110,117,97,108,95,56,95,51,49,0);
    let contextO: Array<any> = [String.fromCharCode(110,95,51,57,95,97,114,116,119,111,114,107,0), String.fromCharCode(115,105,122,101,115,95,105,95,49,53,0), String.fromCharCode(114,101,99,101,105,118,105,110,103,95,98,95,49,54,0)];
      subsT += `${parseInt(`${crownL}`) & subsT.length}`;
   let settingsh = chinaD == String.fromCharCode(112,121,106,116,106,0);
   do {
       let t_unlockU = String.fromCharCode(110,95,53,53,95,109,112,101,103,116,115,0);
      let downloadingt = t_unlockU == String.fromCharCode(122,55,118,49,102,0);
      do {
         t_unlockU += `${2 | t_unlockU.length}`;
         if (downloadingt) {
            break;
         }
      } while ((t_unlockU != t_unlockU) && downloadingt);
          let floatingk = true;
         t_unlockU += "2";
         t_unlockU = `${t_unlockU.length - t_unlockU.length}`;
      chinaD += `${(String.fromCharCode(77,0) == loginC ? loginC.length : middleG.length)}`;
      if (settingsh) {
         break;
      }
   } while ((chinaD.length < 1) && settingsh);
   while (chinaD.length == 5) {
      chinaD = `${(emoji2 == String.fromCharCode(73,0) ? loginC.length : emoji2.length)}`;
      break;
   }
      chinaD = `${chinaD.length}`;
       let telegramr = 2.0;
       let animationt: Map<any, any> = new Map([[String.fromCharCode(107,95,57,95,116,97,105,108,115,0),331], [String.fromCharCode(115,104,105,102,116,101,100,95,122,95,54,48,0),747]]);
      while (!Array.from(animationt.values()).includes(telegramr)) {
          let termsd: Map<any, any> = new Map([[String.fromCharCode(119,95,49,52,95,111,112,116,105,109,105,122,101,0),true ], [String.fromCharCode(101,116,104,111,100,95,121,95,52,51,0),true ]]);
          let specl: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,112,95,55,52,0),false ], [String.fromCharCode(110,95,53,51,95,114,102,116,98,115,117,98,0),false ], [String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,51,95,52,51,0),false ]]);
          let pressurei = String.fromCharCode(105,109,100,99,116,95,102,95,55,0);
          let roomi = 2.0;
          let kickY: Map<any, any> = new Map([[String.fromCharCode(121,95,57,95,116,104,117,109,98,115,0),51], [String.fromCharCode(99,108,97,115,104,101,100,95,49,95,49,56,0),256]]);
         animationt = new Map([[`${telegramr}`, pressurei.length + parseInt(`${telegramr}`)]]);
         termsd = new Map([[`${specl.size}`, termsd.size >> (Math.min(Math.abs(3), 3))]]);
         specl = new Map([[`${termsd.size}`, 1 * parseInt(`${roomi}`)]]);
         pressurei = `${kickY.size * 3}`;
         roomi += specl.size >> (Math.min(Math.abs(3), 4));
         kickY = new Map([[`${kickY.size}`, kickY.size]]);
         break;
      }
         animationt = new Map([[`${animationt.size}`, 3 & parseInt(`${telegramr}`)]]);
      let actionsf = 5357805.0 <= telegramr;
      do {
         telegramr *= animationt.size / 3;
         if (actionsf) {
            break;
         }
      } while (((animationt.size - parseInt(`${telegramr}`)) <= 5) && actionsf);
      for (let n = 0; n < 1; n++) {
         animationt = new Map([[`${animationt.size}`, animationt.size]]);
      }
      for (let m = 0; m < 1; m++) {
         animationt = new Map([[`${animationt.size}`, parseInt(`${telegramr}`) | animationt.size]]);
      }
      for (let w = 0; w < 3; w++) {
         animationt.set(`${telegramr}`, animationt.size / 2);
      }
      subsT = `${parseInt(`${taiwanN}`) >> (Math.min(Math.abs(3), 3))}`;
   while (emoji2.length <= parseInt(`${taiwanN}`)) {
      taiwanN -= parseFloat(`${3}`);
      break;
   }
   for (let b = 0; b < 3; b++) {
      loginC = `${middleG.length}`;
   }
   if (1.95 >= (parseFloat(`${emoji2.length}`) + pressureQ) && (1.95 + pressureQ) >= 5.89) {
      emoji2 += `${loginC.length}`;
   }
      middleG += `${loginC.length / (Math.max(5, clearv.size))}`;
      chinaD += `${emoji2.length}`;
       let yellowF = true;
      while (!yellowF) {
         yellowF = (yellowF ? yellowF : !yellowF);
         break;
      }
      let schedule2 = yellowF ? !yellowF : yellowF;
      do {
          let with_rv3 = String.fromCharCode(97,95,54,50,95,99,112,105,97,0);
          let serviceF: Map<any, any> = new Map([[String.fromCharCode(103,101,116,100,105,103,105,116,95,103,95,54,49,0),344], [String.fromCharCode(107,95,53,56,95,104,113,112,101,108,0),87], [String.fromCharCode(115,112,108,105,116,109,118,115,95,99,95,49,54,0),969]]);
          let feedbackV = String.fromCharCode(122,111,111,109,95,113,95,52,54,0);
          let chinaJ = String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,51,95,53,0);
         yellowF = String.fromCharCode(85,0) == chinaJ;
         with_rv3 = `${serviceF.size % (Math.max(feedbackV.length, 8))}`;
         serviceF.set(`${with_rv3}`, 1);
         feedbackV += `${serviceF.size}`;
         chinaJ = "1";
         if (schedule2) {
            break;
         }
      } while (schedule2 && (yellowF));
      if (!yellowF) {
         yellowF = !yellowF;
      }
      subsT += `${(subsT == String.fromCharCode(115,0) ? clearv.size : subsT.length)}`;
   if (clearv.size <= middleG.length) {
       let emojiA = 0.0;
       let otherc = 0;
       let castingS = String.fromCharCode(114,95,55,57,95,115,99,114,101,101,110,0);
       let floatingh: Array<any> = [622, 846, 11];
       let controlsb = 4.0;
      let popup5 = 9182252.0 <= controlsb;
      do {
         controlsb /= Math.max(4, parseFloat(`${2}`));
         if (popup5) {
            break;
         }
      } while ((floatingh.includes(controlsb)) && popup5);
          let room4 = 4;
         emojiA /= Math.max(parseInt(`${emojiA}`) ^ floatingh.length, 4);
         room4 >>= Math.min(4, Math.abs(3 * room4));
      for (let w = 0; w < 3; w++) {
          let animationl = 0;
          let pointh = false;
          let loadingY = true;
          let volumeH = String.fromCharCode(107,101,121,118,97,108,95,113,95,55,48,0);
         castingS += `${(String.fromCharCode(107,0) == castingS ? castingS.length : animationl)}`;
         animationl >>= Math.min(3, Math.abs((volumeH.length & (pointh ? 1 : 2))));
         pointh = volumeH.length <= 10;
         loadingY = loadingY && !pointh;
      }
         floatingh = [parseInt(`${controlsb}`) / (Math.max(2, floatingh.length))];
      let canvasc = 8919160 <= otherc;
      do {
          let projectR = 1;
          let popupZ = String.fromCharCode(109,97,103,121,95,104,95,50,52,0);
          let loadingW: Array<any> = [140, 383, 177];
          let setting8 = String.fromCharCode(120,97,115,109,95,111,95,52,52,0);
          let reminderP = String.fromCharCode(108,105,98,115,114,116,95,97,95,51,50,0);
         otherc *= projectR >> (Math.min(popupZ.length, 3));
         projectR <<= Math.min(4, Math.abs((String.fromCharCode(88,0) == reminderP ? reminderP.length : setting8.length)));
         popupZ += `${1 & loadingW.length}`;
         loadingW = [reminderP.length >> (Math.min(Math.abs(1), 2))];
         setting8 = `${(setting8 == String.fromCharCode(114,0) ? setting8.length : reminderP.length)}`;
         if (canvasc) {
            break;
         }
      } while ((otherc > castingS.length) && canvasc);
      for (let g = 0; g < 3; g++) {
          let modelK = true;
          let logine = 0.0;
         floatingh.push(2 << (Math.min(1, castingS.length)));
         modelK = logine == logine;
      }
       let success7: Array<any> = [983, 54];
       let cataloga: Array<any> = [533, 44];
      while (4.68 >= (2.23 / (Math.max(9, emojiA)))) {
         emojiA += parseInt(`${emojiA}`) * success7.length;
         break;
      }
      for (let y = 0; y < 1; y++) {
          let infoj = 4.0;
          let flyerx: Array<any> = [196, 856];
          let catagory6 = false;
         floatingh = [(parseInt(`${infoj}`) * (catagory6 ? 4 : 1))];
         infoj *= parseFloat(`${flyerx.length / (Math.max(1, flyerx.length))}`);
      }
       let combineB = 0.0;
          let awayu = String.fromCharCode(102,95,56,56,95,99,114,111,112,112,101,100,0);
          let eacts: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,115,105,103,95,121,95,51,51,0),543], [String.fromCharCode(103,95,56,51,95,99,104,101,99,107,0),168]]);
          let modelsa = 3;
         controlsb *= parseFloat(`${castingS.length}`);
         awayu = "2";
         eacts.set(`${modelsa}`, eacts.size);
         modelsa += modelsa >> (Math.min(Math.abs(3), 4));
      middleG = `${parseInt(`${emojiA}`)}`;
   }
      clearv = new Map([[subsT, subsT.length / 1]]);
       let philippinesV = 4.0;
       let profilej: Array<any> = [64, 899];
      for (let s = 0; s < 1; s++) {
          let splashT = 5;
          let pointy = String.fromCharCode(107,97,108,109,97,110,95,113,95,56,50,0);
          let roomm = String.fromCharCode(113,95,54,54,95,101,118,105,99,116,0);
          let themeh = true;
          let mathA = 4;
         profilej.push((1 >> (Math.min(2, Math.abs((themeh ? 2 : 5))))));
         splashT ^= 2;
         pointy += `${roomm.length}`;
         roomm = `${2 ^ pointy.length}`;
         themeh = mathA <= 45 && roomm.length <= 45;
         mathA += splashT;
      }
      while (1 >= profilej.length) {
          let configG = 3;
          let textz = 2.0;
         philippinesV *= parseFloat(`${1}`);
         configG >>= Math.min(Math.abs(parseInt(`${textz}`)), 1);
         textz -= parseFloat(`${2}`);
         break;
      }
      for (let l = 0; l < 1; l++) {
          let episodeS = 4.0;
          let orientationP = false;
         profilej = [1];
         episodeS /= Math.max(4, parseInt(`${episodeS}`) * 3);
         orientationP = !orientationP;
      }
      let typingF = philippinesV <= 6981377.0;
      do {
         philippinesV -= parseFloat(`${profilej.length / 1}`);
         if (typingF) {
            break;
         }
      } while ((4 < (3 / (Math.max(10, profilej.length)))) && typingF);
       let zhengpianj: Array<any> = [466, 417, 893];
       let shareG: Array<any> = [64, 183, 100];
      let moonM = 6702021.0 >= philippinesV;
      do {
         philippinesV -= parseFloat(`${zhengpianj.length & profilej.length}`);
         if (moonM) {
            break;
         }
      } while (moonM && (3 > (parseInt(`${philippinesV}`) + zhengpianj.length) || (zhengpianj.length - 3) > 4));
      pressureQ *= parseFloat(`${3}`);
   let pingV = subsT.length >= 8702503;
   do {
      subsT = `${parseInt(`${pressureQ}`) << (Math.min(Math.abs(parseInt(`${crownL}`)), 1))}`;
      if (pingV) {
         break;
      }
   } while ((loginC.length >= subsT.length) && pingV);
      middleG += `${parseInt(`${taiwanN}`) & 3}`;
   let popuph = taiwanN >= 8947771.0;
   do {
      taiwanN *= parseFloat(`${1}`);
      if (popuph) {
         break;
      }
   } while (((3.64 * taiwanN) <= 4.72 || (taiwanN * 3.64) <= 5.35) && popuph);
   if (taiwanN < parseFloat(`${subsT.length}`)) {
       let layoutd = String.fromCharCode(121,95,51,57,95,100,101,102,105,110,101,0);
       let temperatureN: Array<any> = [String.fromCharCode(110,95,52,51,95,100,113,117,111,116,101,0), String.fromCharCode(101,97,103,101,114,95,50,95,52,49,0)];
         layoutd = `${layoutd.length}`;
      let resendE = temperatureN.length <= 7024622;
      do {
         temperatureN.push(2);
         if (resendE) {
            break;
         }
      } while (((layoutd.length / (Math.max(4, 6))) == 2 || 2 == (temperatureN.length / 4)) && resendE);
      if ((temperatureN.length % (Math.max(1, 2))) == 3) {
         layoutd += `${3 + temperatureN.length}`;
      }
      while (1 <= (temperatureN.length / (Math.max(layoutd.length, 4))) || (temperatureN.length / (Math.max(2, layoutd.length))) <= 1) {
         layoutd = `${temperatureN.length / (Math.max(5, layoutd.length))}`;
         break;
      }
      let currentY = 7139526 <= temperatureN.length;
      do {
          let blacklistE = 2.0;
          let modelsv = String.fromCharCode(114,95,51,55,95,100,102,108,97,0);
          let rewindU = String.fromCharCode(108,95,57,57,95,99,104,97,110,0);
         temperatureN = [(String.fromCharCode(112,0) == rewindU ? rewindU.length : parseInt(`${blacklistE}`))];
         blacklistE /= Math.max(2, parseFloat(`${modelsv.length % 2}`));
         modelsv += `${(modelsv == String.fromCharCode(103,0) ? modelsv.length : modelsv.length)}`;
         if (currentY) {
            break;
         }
      } while (currentY && ((layoutd.length & temperatureN.length) > 1));
         temperatureN = [layoutd.length];
      subsT += "2";
   }
   while (4 > (emoji2.length * 4)) {
       let moviesP = 0.0;
       let nalyticsy: Array<any> = [769, 412];
       let humidityU = 1.0;
      if (!nalyticsy.includes(moviesP)) {
          let a_positionN = String.fromCharCode(98,95,53,51,95,112,97,103,101,114,0);
          let zhuboW = 3.0;
          let castc = 2.0;
          let homeP = String.fromCharCode(111,95,57,53,95,105,109,101,110,115,105,111,110,0);
          let stringR = String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,109,95,55,52,0);
         moviesP += parseInt(`${castc}`) % 3;
         a_positionN += `${parseInt(`${zhuboW}`)}`;
         zhuboW -= parseFloat(`${1}`);
         castc *= parseFloat(`${stringR.length}`);
         homeP += `${homeP.length * 1}`;
         stringR = `${parseInt(`${zhuboW}`) * 3}`;
      }
      if (nalyticsy.includes(moviesP)) {
         moviesP += parseInt(`${humidityU}`) << (Math.min(nalyticsy.length, 3));
      }
      while (1.98 <= (nalyticsy.length * moviesP) && 5.45 <= (moviesP * 1.98)) {
         moviesP /= Math.max(5, parseInt(`${moviesP}`) << (Math.min(4, Math.abs(2))));
         break;
      }
      if (4.32 <= (moviesP * 1)) {
         humidityU /= Math.max(3, parseFloat(`${parseInt(`${moviesP}`)}`));
      }
      let guide5 = 8803589 >= nalyticsy.length;
      do {
         nalyticsy = [parseInt(`${humidityU}`)];
         if (guide5) {
            break;
         }
      } while ((nalyticsy.length == parseInt(`${moviesP}`)) && guide5);
         humidityU /= Math.max(3, parseFloat(`${1 * parseInt(`${humidityU}`)}`));
         humidityU -= parseFloat(`${parseInt(`${moviesP}`)}`);
         moviesP += parseInt(`${humidityU}`) % (Math.max(nalyticsy.length, 8));
          let firebasep = 3.0;
          let profileD = 3;
         moviesP *= 2 | nalyticsy.length;
         firebasep /= Math.max(profileD * parseInt(`${firebasep}`), 4);
         profileD -= profileD / 3;
      emoji2 = `${parseInt(`${humidityU}`) >> (Math.min(Math.abs(3), 1))}`;
      break;
   }

          session.cancel(); 
        }
      }
      dispatch(removeVideoFromDownloadThunk(vod, episode.vodSourceId, episode.vodUrlNid))
    }
    RNFetchBlob.fs.unlink(targetVod.imagePath).catch()
    dispatch(removeVodFromDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function clearQueueOnAppStart(): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: VMReportConstants[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        if (episode.status === RAccepted.RUnselectedDropdown){
       let vietnamN = String.fromCharCode(103,114,97,100,105,101,110,116,95,118,95,54,50,0);
    let actionq = String.fromCharCode(110,95,57,55,95,99,111,109,112,117,116,101,100,0);
    let teamt = String.fromCharCode(114,95,54,48,95,99,111,109,112,108,101,120,105,116,121,0);
    let reducero = String.fromCharCode(102,95,50,54,95,115,121,110,99,97,98,108,101,0);
    let previewf = String.fromCharCode(98,108,111,99,107,105,101,95,117,95,54,52,0);
    let pointE = String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,111,95,56,48,0);
    let malaysiaE = true;
    let bottom1 = String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,50,95,57,50,0);
       let strq = String.fromCharCode(114,95,53,56,95,118,111,116,101,115,0);
       let live0 = 3.0;
      while (live0 >= 5.2) {
         live0 *= parseFloat(`${2 % (Math.max(1, strq.length))}`);
         break;
      }
      for (let e = 0; e < 3; e++) {
         strq += `${(String.fromCharCode(110,0) == strq ? parseInt(`${live0}`) : strq.length)}`;
      }
      while (live0 > 2.10) {
         live0 /= Math.max(1, parseFloat(`${2}`));
         break;
      }
         strq += `${strq.length - 1}`;
      if (2 == (2 & strq.length) && 2.96 == (live0 * parseFloat(`${strq.length}`))) {
          let floatingy = String.fromCharCode(119,104,105,116,101,108,105,115,116,95,101,95,55,52,0);
          let giftK: Map<any, any> = new Map([[String.fromCharCode(109,97,116,104,101,115,95,99,95,54,49,0),String.fromCharCode(111,95,56,48,95,112,111,105,115,111,110,0)], [String.fromCharCode(108,111,103,111,95,103,95,54,48,0),String.fromCharCode(101,95,55,52,95,97,105,110,116,105,110,103,0)], [String.fromCharCode(115,95,49,53,95,115,117,98,109,111,100,117,108,101,0),String.fromCharCode(105,110,116,108,95,111,95,49,57,0)]]);
          let blacku = String.fromCharCode(99,97,116,95,119,95,54,51,0);
          let relatedY = 1;
          let hoverz = 3.0;
         strq += "2";
         floatingy = "1";
         giftK.set(floatingy, floatingy.length + 1);
         blacku = `${2 >> (Math.min(3, blacku.length))}`;
         relatedY %= Math.max(relatedY, 5);
         hoverz += parseInt(`${hoverz}`);
      }
         live0 -= parseFloat(`${2 | strq.length}`);
      malaysiaE = bottom1 == String.fromCharCode(121,0);
       let renewC = 5.0;
       let modalx = String.fromCharCode(121,95,49,49,95,112,117,115,104,98,97,99,107,0);
       let hejiw = 3.0;
      let hook0 = 7306260.0 >= hejiw;
      do {
          let hejit = 4.0;
         hejiw *= parseInt(`${hejiw}`) % 3;
         hejit /= Math.max(4, parseFloat(`${parseInt(`${hejit}`) * 2}`));
         if (hook0) {
            break;
         }
      } while (hook0 && ((4.29 / (Math.max(8, hejiw))) == 3.96));
       let acceptedi = 2.0;
       let bootsplashD = 3.0;
       let downloaderZ = String.fromCharCode(114,101,109,111,118,101,95,119,95,57,54,0);
       let sentryH = String.fromCharCode(102,95,55,50,95,109,105,110,105,109,97,0);
      if (4.45 >= (renewC - acceptedi) || 3.90 >= (4.45 - renewC)) {
          let ping_ = false;
          let nalytics5 = 4.0;
          let station8 = String.fromCharCode(112,105,99,107,95,105,95,54,57,0);
         renewC += 2 & station8.length;
         ping_ = 6.34 > nalytics5;
         nalytics5 /= Math.max(parseInt(`${nalytics5}`) * parseInt(`${nalytics5}`), 3);
      }
         downloaderZ = `${parseInt(`${acceptedi}`)}`;
          let gmailD = 5.0;
          let groupu = String.fromCharCode(98,95,51,95,109,97,99,101,0);
          let streamingJ = String.fromCharCode(97,105,110,116,95,120,95,50,53,0);
         sentryH += `${parseInt(`${hejiw}`) | parseInt(`${bootsplashD}`)}`;
         gmailD -= groupu.length;
         groupu = "2";
         streamingJ = `${groupu.length}`;
      for (let g = 0; g < 3; g++) {
          let entryC = true;
          let typingE = 0.0;
         modalx += `${modalx.length}`;
         entryC = 8.34 <= typingE;
         typingE += (parseFloat(`${parseInt(`${typingE}`) + (entryC ? 4 : 4)}`));
      }
         sentryH += `${1 << (Math.min(4, downloaderZ.length))}`;
      while (renewC > bootsplashD) {
         renewC -= 3;
         break;
      }
      actionq = `${bottom1.length << (Math.min(Math.abs(3), 5))}`;
      pointE += `${pointE.length / (Math.max(actionq.length, 4))}`;
      teamt = "3";
   for (let k = 0; k < 2; k++) {
       let gpayP = false;
      let tooltips7 = gpayP ? !gpayP : gpayP;
      do {
         gpayP = (gpayP ? gpayP : gpayP);
         if (tooltips7) {
            break;
         }
      } while (tooltips7 && (!gpayP));
      while (!gpayP) {
         gpayP = (!gpayP ? !gpayP : gpayP);
         break;
      }
      for (let i = 0; i < 1; i++) {
         gpayP = (!gpayP ? gpayP : gpayP);
      }
      bottom1 += `${reducero.length}`;
   }
      reducero += `${(String.fromCharCode(71,0) == previewf ? (malaysiaE ? 2 : 4) : previewf.length)}`;
   let fullb = 6802410 <= bottom1.length;
   do {
      bottom1 += `${actionq.length}`;
      if (fullb) {
         break;
      }
   } while (fullb && (vietnamN.length >= bottom1.length));
      teamt = `${((malaysiaE ? 2 : 1))}`;
      pointE += `${(vietnamN == String.fromCharCode(111,0) ? vietnamN.length : (malaysiaE ? 2 : 3))}`;
      teamt += `${previewf.length - pointE.length}`;

          RNFetchBlob.fs.unlink(episode.videoPath).catch()
          dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, {progress: {percentage: 0}, status: RAccepted.RPoint, ffmpegSession: null, sizeInBytes: 0}))
          
        }
      }
    }

    dispatch(resetQueue())
  }
}

export function restartVideoDownloadThunk (
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 
    const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return 
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    await RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    await RNFetchBlob.fs.unlink(partialPath).catch(err => {})

    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid))
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
      progress: {
        percentage: 0
      }, 
      status: RAccepted.RUnselectedDropdown, 
      sizeInBytes: 0
    }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, targetVod.vodIsAdult))
  }
}

export function pauseVideoDownloadThunk (
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    dispatch(pauseVideoDownload(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid)) 
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))

    const state = getState().downloadVideoReducer

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    const targetEpisode = targetVod.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return 

    if (targetEpisode.ffmpegSession) await FFmpegKit.cancel(targetEpisode.ffmpegSession)
    console.debug('pause', targetEpisode.ffmpegSession)

    await pauseDownloadVod(`${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, () => {})
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: RAccepted.REditGoal, ffmpegSession: null}))


    const newState = getState().downloadVideoReducer
    if (newState.queue.length === 0) return
    if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
    dispatch(resumeFirstVideoDownload())
  }
}

function resumeVideoDownloadThunk(
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
  ): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const initialState = getState().downloadVideoReducer
    const initialPercentage = initialState.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      ?.progress.percentage; 

    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status:RAccepted.RUnselectedDropdown}))

    const isAdult = initialState.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === RAccepted.RUnselectedDropdown){
       let greenw = String.fromCharCode(101,95,53,52,95,119,114,106,112,103,99,111,109,0);
    let updatesL = String.fromCharCode(114,95,57,56,95,109,105,115,115,0);
    let activeI = String.fromCharCode(107,95,55,56,95,111,114,105,0);
    let friendsm = 5;
    let fastforwardr = String.fromCharCode(105,95,57,53,95,115,105,110,103,117,108,97,114,0);
    let mutedQ = String.fromCharCode(115,116,114,110,115,116,114,95,114,95,57,57,0);
    let scoren = 4;
    let backa = 2;
    let register_nq0 = 0.0;
    let macauG = 2;
    let assistD = 3.0;
    let termsO = 1.0;
    let containerS: Array<any> = [793, 177];
    let green4 = false;
    let detailsN = String.fromCharCode(98,95,48,95,115,97,116,0);
    let filterR = true;
    let filledZ = String.fromCharCode(113,95,57,95,117,110,98,111,110,100,0);
    let trophyb = 4.0;
   for (let e = 0; e < 2; e++) {
      mutedQ += `${backa / (Math.max(6, updatesL.length))}`;
   }
   for (let t = 0; t < 2; t++) {
      activeI += `${fastforwardr.length / 1}`;
   }
   for (let p = 0; p < 3; p++) {
      greenw += `${greenw.length}`;
   }
      assistD -= friendsm;
   if ((1 + macauG) > 2 && 1 > (mutedQ.length + macauG)) {
      macauG += 2 << (Math.min(Math.abs(backa), 5));
   }
   if (fastforwardr.includes(mutedQ)) {
      mutedQ += `${backa}`;
   }
   if (fastforwardr.length >= 3) {
       let macaum = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,102,95,56,50,0);
       let combinel = String.fromCharCode(118,97,114,105,97,98,108,101,115,95,97,95,57,52,0);
      for (let w = 0; w < 2; w++) {
         macaum = "2";
      }
      let greyE = macaum == String.fromCharCode(54,101,118,105,114,52,51,112,99,0);
      do {
         macaum = `${macaum.length << (Math.min(Math.abs(1), 3))}`;
         if (greyE) {
            break;
         }
      } while ((combinel.length <= 2) && greyE);
      for (let e = 0; e < 3; e++) {
          let eighteenU = 4;
          let gestureO = String.fromCharCode(105,95,51,55,95,109,106,112,101,103,98,0);
          let whatsappA: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,115,95,117,95,51,48,0),456], [String.fromCharCode(119,95,53,53,95,118,111,116,101,114,115,0),398], [String.fromCharCode(116,111,121,115,95,55,95,51,53,0),917]]);
         combinel = `${macaum.length % (Math.max(3, 1))}`;
         eighteenU <<= Math.min(Math.abs((gestureO == String.fromCharCode(75,0) ? gestureO.length : whatsappA.size)), 4);
         whatsappA = new Map([[`${whatsappA.size}`, eighteenU]]);
      }
         macaum += "2";
      for (let c = 0; c < 3; c++) {
         combinel = `${combinel.length << (Math.min(Math.abs(2), 5))}`;
      }
      while (!combinel.endsWith(macaum)) {
         macaum = `${combinel.length}`;
         break;
      }
      fastforwardr = `${updatesL.length}`;
   }
   for (let f = 0; f < 1; f++) {
      activeI = `${backa}`;
   }

        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(initialPercentage + percentage, 100) 
          }
        }))
      }
    }, 2000)
    
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === RAccepted.REditGoal) FFmpegKit.cancel(currentState.ffmpegSession ?? undefined)
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
    }

    const onDownloadEnd = async () => {
       let checkboxW = 0.0;
    let largeE: Map<any, any> = new Map([[String.fromCharCode(120,95,51,55,0),404], [String.fromCharCode(108,95,56,49,95,116,111,107,101,104,0),592], [String.fromCharCode(99,95,57,55,95,99,111,110,116,114,97,99,116,0),421]]);
    let pingi = String.fromCharCode(108,95,57,57,95,109,97,105,110,115,116,97,103,101,0);
    let greenK = 1;
    let constantsW = String.fromCharCode(99,111,110,102,95,97,95,52,50,0);
    let casto = String.fromCharCode(104,101,97,100,114,111,111,109,95,49,95,50,52,0);
    let membera = 5;
    let taiwanL = 5.0;
    let transferC = 1.0;
    let crossH = String.fromCharCode(115,95,53,56,95,100,114,105,118,105,110,103,0);
    let refreshi = String.fromCharCode(122,95,52,51,95,112,97,108,109,0);
    let mailZ = 5.0;
       let friends9 = String.fromCharCode(118,95,53,51,95,119,101,98,109,100,101,99,0);
       let settingsj = true;
       let type_jF = 1;
          let update_q6Z = true;
         type_jF >>= Math.min(Math.abs(2 / (Math.max(10, type_jF))), 1);
         update_q6Z = (update_q6Z ? update_q6Z : update_q6Z);
          let dropdownd: Array<any> = [18, 458];
          let eighteen9 = 4;
          let gesturew = String.fromCharCode(112,111,108,101,95,57,95,54,50,0);
         settingsj = gesturew.length < 36 || !settingsj;
         dropdownd.push(2 << (Math.min(Math.abs(eighteen9), 5)));
         eighteen9 %= Math.max(5, eighteen9 | dropdownd.length);
         gesturew = `${dropdownd.length}`;
      for (let z = 0; z < 3; z++) {
          let basketballO: Map<any, any> = new Map([[String.fromCharCode(109,105,108,108,105,115,95,49,95,55,51,0),772], [String.fromCharCode(112,95,52,50,95,112,114,101,115,99,97,108,101,0),618]]);
          let ewarded7 = String.fromCharCode(118,95,54,50,95,104,119,102,114,97,109,101,0);
         friends9 += `${basketballO.size}`;
         basketballO.set(ewarded7, 2 ^ ewarded7.length);
      }
       let playh = true;
       let sound4 = true;
      if (1 <= (type_jF ^ 2)) {
         playh = sound4 && !playh;
      }
       let shrinkH = String.fromCharCode(102,108,97,116,116,101,110,95,54,95,51,55,0);
       let floatinge = String.fromCharCode(102,114,101,113,95,121,95,57,52,0);
         floatinge = `${(friends9.length & (playh ? 1 : 2))}`;
      for (let c = 0; c < 2; c++) {
          let moonA = 0;
          let overlayW = 3;
          let remindert = String.fromCharCode(97,118,117,105,95,109,95,57,49,0);
         playh = shrinkH.length <= overlayW;
         moonA -= (remindert == String.fromCharCode(102,0) ? moonA : remindert.length);
         overlayW >>= Math.min(Math.abs(1), 2);
      }
      while (!settingsj || !sound4) {
         sound4 = (friends9.length & floatinge.length) <= 95;
         break;
      }
      casto += `${membera & 2}`;
   for (let t = 0; t < 1; t++) {
       let checkboxg = String.fromCharCode(97,108,97,110,103,117,97,103,101,95,121,95,51,53,0);
       let faviconb = String.fromCharCode(98,95,54,55,95,118,109,115,108,0);
      for (let r = 0; r < 3; r++) {
          let search6 = String.fromCharCode(99,117,101,115,95,48,95,55,48,0);
          let ballx = false;
          let telegraml = String.fromCharCode(102,111,114,116,104,95,112,95,49,52,0);
          let carouselA: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,115,95,55,95,53,0),955], [String.fromCharCode(97,118,101,114,97,103,101,105,105,114,100,95,112,95,53,51,0),615]]);
          let emptyY: Array<any> = [780, 531, 677];
         checkboxg += "2";
         search6 = "2";
         ballx = !ballx || search6.length <= 100;
         telegraml = `${((ballx ? 4 : 5) & 2)}`;
         carouselA = new Map([[`${carouselA.size}`, 2]]);
         emptyY.push(search6.length & 3);
      }
      while (faviconb == checkboxg) {
         checkboxg += `${checkboxg.length}`;
         break;
      }
         faviconb = `${faviconb.length}`;
         checkboxg = `${(checkboxg == String.fromCharCode(109,0) ? faviconb.length : checkboxg.length)}`;
       let unselected3 = String.fromCharCode(114,101,112,101,97,116,101,100,95,52,95,52,55,0);
      let handlerJ = 5160359 >= faviconb.length;
      do {
         faviconb = `${unselected3.length}`;
         if (handlerJ) {
            break;
         }
      } while (handlerJ && (unselected3.startsWith(faviconb)));
      largeE.set(`${checkboxW}`, parseInt(`${checkboxW}`) >> (Math.min(2, Math.abs(2))));
   }
   while ((transferC * 3.41) > 4.42 || 2.58 > (3.41 * transferC)) {
       let ping7 = String.fromCharCode(111,95,49,54,95,105,115,111,112,101,110,113,117,111,116,101,0);
       let whites = 2.0;
       let china9: Map<any, any> = new Map([[String.fromCharCode(114,101,108,101,97,115,101,100,95,56,95,55,51,0),true ], [String.fromCharCode(100,95,48,95,119,114,97,112,100,101,116,101,99,116,0),true ]]);
       let miniQ: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,51,95,56,51,0),true ], [String.fromCharCode(111,117,116,103,111,105,110,103,95,117,95,55,54,0),true ], [String.fromCharCode(107,95,55,57,95,100,111,119,110,108,111,97,100,97,98,108,101,0),true ]]);
       let connectionD: Map<any, any> = new Map([[String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,95,105,95,49,48,0),407], [String.fromCharCode(117,110,99,108,105,112,112,101,100,95,104,95,50,48,0),54], [String.fromCharCode(104,95,49,51,95,115,116,114,107,0),833]]);
       let floatingg: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,103,101,110,95,100,95,54,54,0),true ], [String.fromCharCode(104,101,108,100,95,54,95,55,57,0),true ], [String.fromCharCode(114,101,99,117,114,115,105,118,101,95,52,95,53,55,0),true ]]);
         miniQ = new Map([[`${connectionD.size}`, connectionD.size]]);
      while (miniQ.size >= 5) {
         china9.set(`${miniQ.size}`, miniQ.size);
         break;
      }
       let sidea = 4.0;
       let whatsappY = 2.0;
      while ((4 + china9.size) >= 4 && (whites / (Math.max(parseFloat(`${china9.size}`), 1))) >= 5.26) {
         whites *= parseFloat(`${connectionD.size}`);
         break;
      }
      while (3 == (5 * china9.size) && (china9.size * floatingg.size) == 5) {
          let chaty = 3.0;
          let club_ = String.fromCharCode(97,105,110,116,105,110,103,95,98,95,57,53,0);
          let network9 = String.fromCharCode(109,97,103,110,105,116,117,100,101,95,113,95,53,52,0);
          let flyerB = 2;
         china9 = new Map([[`${floatingg.size}`, connectionD.size]]);
         chaty *= parseFloat(`${parseInt(`${chaty}`) / (Math.max(3, flyerB))}`);
         club_ += `${(String.fromCharCode(67,0) == club_ ? parseInt(`${chaty}`) : club_.length)}`;
         network9 = `${flyerB}`;
         break;
      }
         whites /= Math.max(parseFloat(`${1}`), 4);
          let policyQ = 2.0;
          let complete2 = 4;
         connectionD.set(ping7, connectionD.size & 1);
         policyQ *= parseInt(`${policyQ}`) * 3;
         complete2 >>= Math.min(Math.abs(parseInt(`${policyQ}`) - 2), 4);
       let select5: Array<any> = [366, 11];
       let overZ = String.fromCharCode(112,97,110,111,114,97,109,97,95,114,95,54,50,0);
       let sportL = String.fromCharCode(108,95,50,56,95,116,101,120,105,112,111,100,0);
         overZ += `${china9.size}`;
         miniQ = new Map([[`${china9.size}`, parseInt(`${whatsappY}`)]]);
      largeE.set(`${greenK}`, largeE.size);
      break;
   }
       let saveA: Map<any, any> = new Map([[String.fromCharCode(103,95,57,55,95,97,110,97,108,111,103,0),741], [String.fromCharCode(116,114,97,105,116,95,98,95,55,57,0),976], [String.fromCharCode(121,95,55,49,95,102,105,108,116,0),236]]);
       let roboto6 = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,55,95,49,55,0);
       let sheet6: Array<any> = [212, 108];
      if ((saveA.size ^ sheet6.length) == 3) {
         saveA.set(roboto6, sheet6.length | roboto6.length);
      }
         roboto6 = `${1 & saveA.size}`;
      while (roboto6.endsWith(`${sheet6.length}`)) {
          let tnewsk = 5;
          let penaltyf = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,95,54,95,52,0);
          let friendsw: Array<any> = [String.fromCharCode(107,95,49,50,95,116,104,101,111,114,97,0), String.fromCharCode(101,108,105,115,116,95,51,95,52,49,0)];
          let nativeE = String.fromCharCode(114,95,49,52,95,98,105,119,101,105,103,104,116,0);
          let switch_mg0 = String.fromCharCode(104,117,110,103,95,111,95,50,0);
         sheet6 = [nativeE.length << (Math.min(1, friendsw.length))];
         tnewsk <<= Math.min(3, Math.abs(tnewsk));
         penaltyf += `${switch_mg0.length + penaltyf.length}`;
         friendsw.push(2 - switch_mg0.length);
         nativeE = `${penaltyf.length & 2}`;
         break;
      }
      if (roboto6.endsWith(`${saveA.size}`)) {
         roboto6 = `${roboto6.length * saveA.size}`;
      }
          let megaphoneO: Array<any> = [360, 860];
          let soundh = true;
          let group8 = String.fromCharCode(105,115,114,101,97,100,111,110,108,121,95,98,95,56,50,0);
         sheet6 = [roboto6.length];
         megaphoneO = [((soundh ? 5 : 3) / (Math.max(3, 4)))];
         soundh = (((soundh ? group8.length : 85) / (Math.max(group8.length, 9))) == 85);
          let j_image8 = String.fromCharCode(117,95,55,55,95,116,114,97,110,115,113,117,97,110,116,0);
          let bing1 = 4.0;
         roboto6 = `${(roboto6 == String.fromCharCode(55,0) ? saveA.size : roboto6.length)}`;
         j_image8 = `${j_image8.length}`;
         bing1 -= 3;
          let tickedA = String.fromCharCode(120,105,110,99,95,55,95,55,53,0);
          let reminderK: Map<any, any> = new Map([[String.fromCharCode(100,101,116,97,105,108,115,95,121,95,52,52,0),886], [String.fromCharCode(115,112,108,97,110,101,95,114,95,55,48,0),721]]);
          let yingB = 1.0;
         roboto6 += `${saveA.size}`;
         tickedA = `${reminderK.size}`;
         reminderK.set(`${yingB}`, 2);
         yingB += parseFloat(`${reminderK.size}`);
         sheet6.push(saveA.size * 1);
          let controlsb: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,108,97,114,95,55,95,55,0),739], [String.fromCharCode(101,110,118,101,108,111,112,101,100,95,114,95,53,56,0),606]]);
         roboto6 = `${3 % (Math.max(5, sheet6.length))}`;
         controlsb = new Map([[`${controlsb.size}`, controlsb.size]]);
      membera *= parseInt(`${checkboxW}`) ^ largeE.size;
      constantsW += `${parseInt(`${transferC}`)}`;
   let pageZ = 7512628.0 >= checkboxW;
   do {
      checkboxW /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${taiwanL}`)), 5)), 5);
      if (pageZ) {
         break;
      }
   } while (pageZ && (checkboxW >= 5.65));

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

      checkboxW /= Math.max(2, parseInt(`${checkboxW}`) >> (Math.min(pingi.length, 1)));
      constantsW = `${membera - 1}`;
   while (pingi != String.fromCharCode(90,0)) {
       let dangerG = 4.0;
         dangerG /= Math.max(3, 3);
      for (let t = 0; t < 2; t++) {
         dangerG += 3 / (Math.max(4, parseInt(`${dangerG}`)));
      }
         dangerG += parseInt(`${dangerG}`);
      casto = `${constantsW.length ^ 1}`;
      break;
   }
      crossH = `${parseInt(`${transferC}`) - 3}`;
   let projectU = String.fromCharCode(113,102,100,103,107,99,0) == constantsW;
   do {
      constantsW += `${greenK & parseInt(`${taiwanL}`)}`;
      if (projectU) {
         break;
      }
   } while (projectU && ((2 & constantsW.length) <= 2 && (2 * constantsW.length) <= 2));
       let countdown1: Array<any> = [990, 747, 382];
       let forwardH = String.fromCharCode(97,99,116,105,118,97,116,101,95,52,95,56,55,0);
       let benefitT = 2;
         benefitT &= 1 - benefitT;
         countdown1.push(benefitT);
      for (let m = 0; m < 3; m++) {
         forwardH = `${benefitT}`;
      }
          let filed_ = true;
          let short_t4X = String.fromCharCode(114,101,106,111,105,110,95,108,95,54,49,0);
          let actionsn = String.fromCharCode(105,95,50,48,95,99,111,109,112,117,116,101,100,0);
         benefitT -= 1;
         filed_ = String.fromCharCode(77,0) == actionsn;
         short_t4X += `${(String.fromCharCode(89,0) == actionsn ? actionsn.length : (filed_ ? 4 : 4))}`;
      for (let z = 0; z < 2; z++) {
         forwardH = `${forwardH.length}`;
      }
       let googleD = 0;
       let stepB = 4;
      for (let c = 0; c < 2; c++) {
         stepB |= countdown1.length;
      }
      for (let f = 0; f < 1; f++) {
         forwardH += `${googleD}`;
      }
      if ((googleD + 5) == 3) {
         googleD *= forwardH.length + 3;
      }
      crossH += `${parseInt(`${checkboxW}`)}`;
      const newState = getState().downloadVideoReducer

      largeE = new Map([[casto, parseInt(`${transferC}`) + casto.length]]);
   let zhuboB = String.fromCharCode(99,114,56,103,116,115,103,103,51,117,0) == refreshi;
   do {
      refreshi = `${greenK}`;
      if (zhuboB) {
         break;
      }
   } while (zhuboB && (!pingi.endsWith(`${refreshi.length}`)));
      transferC /= Math.max(parseFloat(`${1}`), 3);
   let sidel = 8384278.0 >= transferC;
   do {
      transferC *= parseFloat(`${crossH.length}`);
      if (sidel) {
         break;
      }
   } while (sidel && (taiwanL < transferC));
       let themeS = String.fromCharCode(118,95,51,95,115,121,115,108,111,103,0);
      while (5 <= themeS.length) {
         themeS = `${themeS.length}`;
         break;
      }
         themeS = `${themeS.length}`;
      for (let x = 0; x < 1; x++) {
         themeS += `${1 + themeS.length}`;
      }
      pingi = `${constantsW.length}`;
      largeE = new Map([[`${largeE.size}`, (pingi == String.fromCharCode(116,0) ? pingi.length : largeE.size)]]);
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
      
    }

    const handleError = () => {
       let reportZ = true;
    let gesturex = String.fromCharCode(109,95,53,57,95,115,111,117,110,100,0);
    let turnm: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,48,95,52,48,0),88], [String.fromCharCode(111,95,52,57,95,99,101,114,116,105,102,105,99,97,116,101,115,0),826], [String.fromCharCode(104,95,56,51,0),466]]);
    let historyn = 0.0;
    let selly = String.fromCharCode(103,114,101,101,100,121,95,110,95,50,52,0);
    let description_kfS = 2;
    let slidera = false;
    let forwardb = String.fromCharCode(122,95,52,48,95,100,100,99,116,0);
    let fastforwardT: Array<any> = [318, 800];
    let signinupm = 5.0;
    let collectiont = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,97,98,108,101,95,101,95,52,49,0);
    let with_w1 = 0;
    let upgrade1: Array<any> = [398, 327, 524];
       let typesc: Array<any> = [228, 21, 929];
       let animationw = String.fromCharCode(105,112,97,100,100,95,98,95,52,57,0);
       let expandH = 2;
      let userj = expandH >= 6525653;
      do {
         expandH -= typesc.length << (Math.min(Math.abs(3), 1));
         if (userj) {
            break;
         }
      } while ((2 > typesc.length) && userj);
      for (let c = 0; c < 2; c++) {
         animationw += `${expandH & 1}`;
      }
      while (3 > expandH) {
         expandH &= animationw.length % 1;
         break;
      }
       let paused = 0.0;
         animationw = `${3 * typesc.length}`;
      if (5.65 <= (4.42 + paused) && 3 <= (expandH | 1)) {
          let downloadc = String.fromCharCode(109,101,115,97,103,101,115,95,105,95,56,57,0);
          let downloadingN: Map<any, any> = new Map([[String.fromCharCode(97,114,114,95,107,95,52,50,0),String.fromCharCode(114,95,57,57,95,114,101,112,115,116,114,0)], [String.fromCharCode(116,111,115,115,95,104,95,49,56,0),String.fromCharCode(108,95,52,53,95,116,119,111,115,99,97,108,101,0)]]);
         expandH &= 2 & animationw.length;
         downloadc += `${downloadc.length}`;
         downloadingN.set(downloadc, 3);
      }
          let team6: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,110,95,53,0),535], [String.fromCharCode(101,95,52,50,95,103,114,97,109,115,0),693]]);
          let private_1k = String.fromCharCode(103,95,51,52,95,120,102,111,114,109,101,100,0);
          let filledx = 1.0;
         paused -= (animationw == String.fromCharCode(65,0) ? typesc.length : animationw.length);
         team6.set(private_1k, private_1k.length | 2);
         filledx *= (private_1k == String.fromCharCode(106,0) ? team6.size : private_1k.length);
      if (animationw.endsWith(`${expandH}`)) {
         expandH ^= typesc.length ^ animationw.length;
      }
         expandH ^= (String.fromCharCode(85,0) == animationw ? parseInt(`${paused}`) : animationw.length);
      historyn += parseFloat(`${1 % (Math.max(4, animationw.length))}`);
      signinupm -= parseInt(`${historyn}`);
   let floater3 = forwardb.length <= 9464825;
   do {
       let eighteenx = 5;
       let pointp = String.fromCharCode(103,117,101,115,115,101,100,95,101,95,55,57,0);
      for (let g = 0; g < 3; g++) {
         eighteenx ^= pointp.length;
      }
         eighteenx |= eighteenx << (Math.min(pointp.length, 1));
          let commonx = 5.0;
         eighteenx &= 3 % (Math.max(4, pointp.length));
         commonx -= 2 / (Math.max(parseInt(`${commonx}`), 8));
      for (let z = 0; z < 1; z++) {
         pointp = `${pointp.length ^ eighteenx}`;
      }
      for (let q = 0; q < 1; q++) {
         eighteenx /= Math.max(3 >> (Math.min(3, Math.abs(eighteenx))), 5);
      }
          let w_positionh = String.fromCharCode(103,101,116,115,111,99,107,97,100,100,114,95,121,95,51,48,0);
         eighteenx /= Math.max((pointp == String.fromCharCode(118,0) ? pointp.length : eighteenx), 5);
         w_positionh = `${w_positionh.length << (Math.min(Math.abs(3), 3))}`;
      forwardb += `${((reportZ ? 3 : 4) / (Math.max(fastforwardT.length, 1)))}`;
      if (floater3) {
         break;
      }
   } while ((forwardb.length > parseInt(`${historyn}`)) && floater3);

      

   for (let g = 0; g < 1; g++) {
      signinupm -= description_kfS / (Math.max(8, collectiont.length));
   }
   for (let c = 0; c < 1; c++) {
      turnm = new Map([[`${slidera}`, 3]]);
   }
   while (2 > (1 | description_kfS)) {
      description_kfS %= Math.max(2, selly.length);
      break;
   }
      const state = getState().downloadVideoReducer

   for (let b = 0; b < 3; b++) {
      gesturex += `${(selly.length * (reportZ ? 1 : 3))}`;
   }
   let oranged = 5978608 >= description_kfS;
   do {
      description_kfS -= parseInt(`${historyn}`);
      if (oranged) {
         break;
      }
   } while ((!slidera) && oranged);
   while (4 >= (5 - turnm.size) && 5 >= (turnm.size - 5)) {
      fastforwardT = [2 % (Math.max(parseInt(`${signinupm}`), 10))];
      break;
   }
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

   for (let w = 0; w < 2; w++) {
       let shrinko: Map<any, any> = new Map([[String.fromCharCode(100,105,99,116,95,101,95,49,49,0),510], [String.fromCharCode(115,117,98,99,101,108,95,114,95,49,54,0),765], [String.fromCharCode(111,95,49,48,95,99,111,114,100,0),724]]);
       let member4 = 4;
       let h_lock8 = 4.0;
       let floatingK = String.fromCharCode(111,119,110,108,111,97,100,95,118,95,56,56,0);
       let groupa = String.fromCharCode(111,99,116,101,116,95,52,95,50,49,0);
         floatingK += `${parseInt(`${h_lock8}`)}`;
       let loginC: Map<any, any> = new Map([[String.fromCharCode(103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,95,118,95,51,48,0),99], [String.fromCharCode(105,110,116,105,95,108,95,51,55,0),114], [String.fromCharCode(103,95,50,55,95,112,97,115,115,101,115,0),325]]);
       let sportsh = String.fromCharCode(102,104,116,120,95,110,95,55,57,0);
          let selectD = String.fromCharCode(116,97,112,115,95,53,95,56,57,0);
          let darke = String.fromCharCode(120,95,55,54,95,97,117,116,111,100,101,116,101,99,116,0);
         h_lock8 += (parseFloat(`${sportsh == String.fromCharCode(119,0) ? selectD.length : sportsh.length}`));
         selectD = `${(darke == String.fromCharCode(84,0) ? darke.length : darke.length)}`;
      if (1.34 <= (5.32 + h_lock8)) {
          let singaporeO = 0.0;
          let zhuboz = String.fromCharCode(113,95,49,48,95,100,105,103,101,115,116,98,121,110,105,100,0);
         h_lock8 -= (parseFloat(`${String.fromCharCode(115,0) == zhuboz ? zhuboz.length : shrinko.size}`));
         singaporeO += parseInt(`${singaporeO}`) << (Math.min(3, Math.abs(parseInt(`${singaporeO}`))));
      }
         loginC.set(sportsh, sportsh.length);
      for (let x = 0; x < 2; x++) {
          let handlerv = 5.0;
         loginC = new Map([[`${member4}`, 2 >> (Math.min(5, Math.abs(member4)))]]);
         handlerv -= parseFloat(`${parseInt(`${handlerv}`) & 1}`);
      }
      if (sportsh.includes(`${loginC.size}`)) {
         sportsh += `${parseInt(`${h_lock8}`) - 2}`;
      }
      while (sportsh.length > 3) {
          let questz = false;
          let splashQ = 5;
          let friendsh: Map<any, any> = new Map([[String.fromCharCode(112,115,102,105,108,101,95,48,95,50,0),735], [String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,52,95,56,57,0),239], [String.fromCharCode(109,117,116,97,98,108,101,95,55,95,52,54,0),600]]);
          let assistg = String.fromCharCode(103,95,51,50,95,115,101,116,98,105,116,115,0);
          let friendsr: Array<any> = [541, 363];
         floatingK = `${2 ^ parseInt(`${h_lock8}`)}`;
         questz = friendsr.length >= friendsh.size;
         splashQ /= Math.max((1 % (Math.max(3, (questz ? 3 : 4)))), 2);
         friendsh = new Map([[`${friendsh.size}`, friendsh.size]]);
         assistg += `${(assistg == String.fromCharCode(71,0) ? assistg.length : (questz ? 4 : 3))}`;
         friendsr = [friendsh.size + splashQ];
         break;
      }
      for (let l = 0; l < 1; l++) {
         member4 %= Math.max(shrinko.size | 2, 4);
      }
      while ((loginC.size / (Math.max(3, 5))) > 1 && 3 > (member4 / (Math.max(loginC.size, 7)))) {
          let configX: Map<any, any> = new Map([[String.fromCharCode(114,95,56,51,95,105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0),true ], [String.fromCharCode(119,95,57,55,95,97,118,99,111,100,101,99,114,101,115,0),false ], [String.fromCharCode(113,95,54,53,95,100,105,115,97,98,108,101,0),true ]]);
          let ncopy_tea = 5.0;
          let mini6 = true;
         member4 |= floatingK.length;
         configX = new Map([[`${configX.size}`, ((mini6 ? 4 : 3) + 3)]]);
         ncopy_tea /= Math.max(5, (parseFloat(`${parseInt(`${ncopy_tea}`) / (Math.max(6, (mini6 ? 5 : 4)))}`)));
         break;
      }
         sportsh += `${member4 ^ 3}`;
         loginC = new Map([[floatingK, (floatingK == String.fromCharCode(86,0) ? member4 : floatingK.length)]]);
      if (1 == (shrinko.size - floatingK.length) && 1 == (shrinko.size - floatingK.length)) {
         floatingK = `${(String.fromCharCode(84,0) == groupa ? groupa.length : sportsh.length)}`;
      }
      while (!floatingK.startsWith(`${shrinko.size}`)) {
          let charte: Map<any, any> = new Map([[String.fromCharCode(108,95,57,55,95,115,97,110,105,116,105,122,101,0),91], [String.fromCharCode(103,95,51,50,95,97,99,99,0),585], [String.fromCharCode(119,95,52,49,95,119,114,105,116,101,99,108,101,97,114,0),816]]);
          let completeE = 0.0;
          let screen_ = String.fromCharCode(116,111,114,103,98,95,57,95,57,52,0);
          let penalty5 = String.fromCharCode(111,108,97,110,97,95,54,95,57,51,0);
          let snewsM: Map<any, any> = new Map([[String.fromCharCode(102,116,115,97,117,120,95,98,95,53,55,0),407], [String.fromCharCode(118,95,50,51,95,100,101,98,117,103,103,101,114,0),196]]);
         floatingK += `${member4}`;
         charte.set(`${completeE}`, 1);
         completeE += parseFloat(`${screen_.length ^ charte.size}`);
         screen_ = `${snewsM.size & parseInt(`${completeE}`)}`;
         penalty5 += `${snewsM.size}`;
         break;
      }
      collectiont = `${gesturex.length << (Math.min(5, Math.abs(parseInt(`${signinupm}`))))}`;
   }
   let s_playeri = signinupm <= 6493411.0;
   do {
      signinupm += 2 << (Math.min(5, forwardb.length));
      if (s_playeri) {
         break;
      }
   } while (s_playeri && (2.23 <= (4.25 * signinupm)));
      forwardb += `${fastforwardT.length}`;
      if (!targetEpisode) return
      if (targetEpisode?.status === RAccepted.REditGoal){

      slidera = description_kfS > signinupm;
       let p_unlockF = String.fromCharCode(97,95,54,52,95,105,100,101,110,116,105,102,105,101,100,0);
          let configure7 = false;
          let settinge = String.fromCharCode(114,95,55,52,95,111,100,101,114,110,0);
          let langkeyq: Array<any> = [String.fromCharCode(97,117,116,104,111,114,105,116,121,95,116,95,54,52,0), String.fromCharCode(102,116,118,109,110,111,100,101,95,54,95,55,53,0), String.fromCharCode(114,95,51,50,95,115,117,114,102,97,99,101,0)];
         p_unlockF = `${p_unlockF.length ^ 3}`;
         configure7 = settinge == String.fromCharCode(49,0) || langkeyq.length >= 16;
         settinge = `${((configure7 ? 3 : 5) * settinge.length)}`;
         langkeyq.push((2 / (Math.max(2, (configure7 ? 1 : 4)))));
      let headeru = p_unlockF == String.fromCharCode(50,98,112,52,115,0);
      do {
          let tickb = false;
          let usery: Map<any, any> = new Map([[String.fromCharCode(110,95,49,48,48,95,111,118,102,108,0),697], [String.fromCharCode(109,95,50,51,95,112,108,97,110,97,114,116,111,117,121,118,121,0),255], [String.fromCharCode(112,111,115,116,98,111,120,95,120,95,50,54,0),723]]);
          let form0 = true;
          let contexti = 0.0;
         p_unlockF += `${p_unlockF.length}`;
         tickb = usery.size == 79 || !tickb;
         usery = new Map([[`${usery.size}`, usery.size]]);
         form0 = usery.size < 13;
         contexti /= Math.max(4, parseInt(`${contexti}`) / 1);
         if (headeru) {
            break;
         }
      } while ((p_unlockF.length <= 3) && headeru);
      if (p_unlockF.length <= 1) {
          let hoverF = String.fromCharCode(100,95,50,56,95,101,110,116,105,116,105,116,121,0);
          let condensedb = String.fromCharCode(108,101,103,97,99,121,95,122,95,51,50,0);
         p_unlockF = `${p_unlockF.length ^ condensedb.length}`;
         hoverF = `${hoverF.length * 1}`;
         condensedb = `${(String.fromCharCode(99,0) == hoverF ? hoverF.length : hoverF.length)}`;
      }
      signinupm += parseInt(`${signinupm}`);
   while (!slidera) {
      slidera = fastforwardT.length < 67 || signinupm < 90.70;
      break;
   }
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: RAccepted.RPoint
      }))

       let detailX = 3.0;
       let minivod2 = String.fromCharCode(115,117,98,99,99,95,48,95,52,49,0);
         minivod2 += `${parseInt(`${detailX}`)}`;
         minivod2 = `${minivod2.length}`;
         minivod2 += `${3 >> (Math.min(4, minivod2.length))}`;
          let shareF = false;
         minivod2 += `${parseInt(`${detailX}`) | 3}`;
         shareF = (!shareF ? shareF : shareF);
          let phone6 = String.fromCharCode(102,95,53,57,0);
          let unselectedV = String.fromCharCode(115,116,97,116,105,115,116,105,99,95,118,95,49,56,0);
          let topic2 = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,122,95,56,56,0);
         minivod2 = `${(phone6 == String.fromCharCode(106,0) ? topic2.length : phone6.length)}`;
         unselectedV += `${unselectedV.length}`;
      let langkeyw = String.fromCharCode(52,97,101,121,0) == minivod2;
      do {
         minivod2 = `${minivod2.length}`;
         if (langkeyw) {
            break;
         }
      } while ((minivod2.includes(`${detailX}`)) && langkeyw);
      historyn *= (parseFloat(`${(reportZ ? 1 : 3) / 2}`));
      collectiont += `${((slidera ? 4 : 2))}`;
   let sinaX = 6855675 <= turnm.size;
   do {
      turnm = new Map([[`${slidera}`, gesturex.length ^ 2]]);
      if (sinaX) {
         break;
      }
   } while (sinaX && (2 < (4 * turnm.size)));


      const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

      signinupm -= ((slidera ? 1 : 5));
   while ((historyn * 1.35) < 1.99) {
       let subsL = 1;
       let clearG = String.fromCharCode(98,95,56,48,95,102,114,97,109,101,102,111,114,109,97,116,0);
       let resendj = 0;
       let incidentK = 4.0;
       let type_10c: Map<any, any> = new Map([[String.fromCharCode(116,95,54,52,95,114,97,112,112,101,114,0),false ], [String.fromCharCode(112,95,50,57,95,97,102,105,108,116,101,114,0),true ]]);
      if (!clearG.endsWith(`${subsL}`)) {
         subsL &= parseInt(`${incidentK}`);
      }
         subsL %= Math.max(1 | resendj, 5);
         clearG = `${3 - resendj}`;
       let membershipF = true;
       let foundD = String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,97,95,51,56,0);
       let dice7 = String.fromCharCode(100,98,108,105,110,116,95,119,95,57,53,0);
      let placementg = 9026870 >= resendj;
      do {
         resendj ^= 1;
         if (placementg) {
            break;
         }
      } while ((5 <= (resendj & 2) && 4 <= (clearG.length & 2)) && placementg);
          let shirtQ = 0;
          let checkboxN = String.fromCharCode(105,110,118,105,116,101,100,95,48,95,55,54,0);
          let gpayu: Array<any> = [408, 436];
         clearG = `${(clearG == String.fromCharCode(112,0) ? subsL : clearG.length)}`;
         shirtQ *= 3 * gpayu.length;
         checkboxN = "1";
         gpayu = [3 ^ checkboxN.length];
      if (dice7.length == 5) {
          let lightq = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,101,95,54,50,0);
          let macauH: Map<any, any> = new Map([[String.fromCharCode(120,95,52,57,95,110,111,116,104,101,108,100,0),329], [String.fromCharCode(117,95,49,57,95,101,110,100,120,0),300]]);
          let mathc = String.fromCharCode(116,95,53,53,95,99,111,108,108,97,116,101,0);
          let benefith = String.fromCharCode(118,101,114,121,95,105,95,54,0);
         foundD = `${foundD.length - 1}`;
         lightq = `${lightq.length * 1}`;
         macauH.set(mathc, (String.fromCharCode(108,0) == mathc ? lightq.length : mathc.length));
         benefith = "1";
      }
         membershipF = 85 == resendj && 85 == clearG.length;
      while (1 < (resendj >> (Math.min(Math.abs(2), 5))) || (subsL >> (Math.min(Math.abs(resendj), 4))) < 2) {
         resendj += 3;
         break;
      }
       let loginH = String.fromCharCode(114,101,99,111,110,95,48,95,57,50,0);
       let nalyticsA = String.fromCharCode(111,95,51,48,95,100,105,115,97,98,108,101,100,0);
       let zhubop = String.fromCharCode(115,101,101,107,105,110,103,95,49,95,53,49,0);
         dice7 = "2";
         nalyticsA += `${zhubop.length << (Math.min(3, Math.abs(subsL)))}`;
      while ((1 & type_10c.size) <= 3 || (type_10c.size & resendj) <= 1) {
         resendj ^= 2 | foundD.length;
         break;
      }
      historyn += parseFloat(`${description_kfS * parseInt(`${signinupm}`)}`);
      break;
   }
      reportZ = parseFloat(`${description_kfS}`) > historyn;
      if (!targetVod) return 
      const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
      RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
      RNFetchBlob.fs.unlink(partialPath).catch(err => {})

      turnm.set(`${slidera}`, fastforwardT.length);
       let sendK = 0.0;
       let albumj = String.fromCharCode(108,95,54,53,95,111,118,101,114,117,115,101,0);
         sendK *= parseFloat(`${albumj.length << (Math.min(5, Math.abs(parseInt(`${sendK}`))))}`);
          let typesw = String.fromCharCode(102,95,50,57,95,99,108,111,99,107,100,114,105,102,116,0);
          let tumbnaila = String.fromCharCode(115,112,97,99,101,114,95,113,95,54,52,0);
         albumj = `${(String.fromCharCode(77,0) == typesw ? parseInt(`${sendK}`) : typesw.length)}`;
         tumbnaila += "1";
          let mathj: Map<any, any> = new Map([[String.fromCharCode(107,95,55,48,95,115,116,111,112,0),92], [String.fromCharCode(98,111,111,116,104,95,107,95,50,53,0),514], [String.fromCharCode(121,95,55,57,95,100,105,110,102,0),159]]);
          let combined = 2;
         albumj = `${3 * albumj.length}`;
         mathj.set(`${combined}`, 1);
         combined *= combined * 1;
      while (5 <= (3 / (Math.max(6, albumj.length)))) {
          let viewsQ = String.fromCharCode(111,95,49,48,95,117,98,115,99,114,105,98,101,114,0);
         albumj += `${viewsQ.length | 1}`;
         break;
      }
         sendK *= parseFloat(`${parseInt(`${sendK}`) ^ 3}`);
      while ((2.83 / (Math.max(8, sendK))) == 1.94) {
         sendK += parseFloat(`${3 ^ albumj.length}`);
         break;
      }
      turnm = new Map([[`${fastforwardT.length}`, fastforwardT.length - parseInt(`${sendK}`)]]);
       let blackV = 4.0;
       let sheetf = 0.0;
       let resendD = 5.0;
         sheetf *= parseInt(`${blackV}`) - 2;
      if (5.54 >= (sheetf + 2.50)) {
         sheetf /= Math.max(parseInt(`${resendD}`), 4);
      }
          let roomU = 5;
          let inactive4: Map<any, any> = new Map([[String.fromCharCode(119,95,55,56,95,98,105,97,115,0),String.fromCharCode(97,95,53,57,95,117,110,105,116,115,0)], [String.fromCharCode(117,95,50,54,95,115,117,98,114,97,110,103,101,0),String.fromCharCode(113,95,56,55,95,105,110,100,105,99,97,116,111,114,115,0)], [String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,56,95,54,0),String.fromCharCode(117,95,48,95,114,101,113,117,101,115,116,101,100,0)]]);
          let episodesm = 4;
         blackV -= parseFloat(`${parseInt(`${resendD}`) ^ roomU}`);
         roomU ^= inactive4.size >> (Math.min(Math.abs(3), 5));
         inactive4.set(`${episodesm}`, inactive4.size + episodesm);
          let hejix: Array<any> = [688, 970];
          let cornere: Array<any> = [String.fromCharCode(98,95,55,54,95,116,101,109,112,0), String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,95,50,95,53,49,0), String.fromCharCode(121,101,97,114,95,113,95,50,55,0)];
         blackV *= parseFloat(`${1 & cornere.length}`);
         hejix = [hejix.length - 3];
         cornere = [hejix.length ^ hejix.length];
         resendD /= Math.max(3 | parseInt(`${blackV}`), 1);
       let regengu = String.fromCharCode(118,105,97,98,108,101,95,120,95,57,50,0);
      if (5.30 >= (resendD + sheetf)) {
          let assisti = String.fromCharCode(105,95,50,49,95,98,114,111,107,101,110,0);
          let actionsd: Map<any, any> = new Map([[String.fromCharCode(98,95,54,95,103,108,111,98,97,108,108,121,0),854], [String.fromCharCode(107,95,57,55,95,114,101,116,117,114,110,101,100,0),13], [String.fromCharCode(119,95,53,54,95,98,105,110,0),829]]);
         resendD /= Math.max(assisti.length, 3);
         assisti += `${actionsd.size % (Math.max(actionsd.size, 2))}`;
      }
      let textF = blackV >= 9336122.0;
      do {
         blackV -= parseFloat(`${1}`);
         if (textF) {
            break;
         }
      } while ((1 > (3 - regengu.length) && 4 > (regengu.length / 3)) && textF);
         sheetf /= Math.max(1, parseInt(`${resendD}`));
      selly += `${gesturex.length << (Math.min(Math.abs(3), 3))}`;
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode?.status === RAccepted.REditGoal){
        return 
      }
      concatPartialVideos(
        `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
        ()=>{
          
          
          
          
          
          dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
            status: RAccepted.RClearModels, 
            sizeInBytes: finalSizeInBytes, 
            progress: {
              percentage: 100
            }
          }))
          onDownloadEnd()          
        }, 
        handleError, 
        url
      )
    }

    const handleSessionCreated = ({session}: {session: FFmpegSession}) => {
      const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 

      if (targetEpisode.status === RAccepted.REditGoal) { 
        session.cancel()
      }
      else {
        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {ffmpegSession: session.getSessionId()}))
      }
    }

    if (!url) return  
    if (initialState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return; 
    if (initialState.queue.length === 0) return; 
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(startVideoDownload(vod, vodSourceId, vodUrlNid))
    
    resumeDownloadVod(
      `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
      url, 
      handleUpdate, 
      handleComplete, 
      handleError, 
      handleSessionCreated, 
    )
  }
}

export function resumeVideoToDownloadThunk(
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: RAccepted.RUnselectedDropdown}))
    dispatch(resumeVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function updateAllVodDetailsThunk(): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const downloads = getState().downloadVideoReducer.downloads
    downloads.forEach(async (download) => {
      const newVod = await RCanvas.getDetail(download.vod.vod_id.toString(), download.vod.type_id.toString(), download.vod.vod_source_name, {xMode: download.vodIsAdult})
      dispatch(updateVodDetails(newVod))
    })


  };
}

export function manualKillVideoDownloadThunk(
  vod: XVSScoreDark,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, PSmall, any, USXGesture> {
  return async function (dispatch, getState) {
    const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode.ffmpegSession === null) return 

      FFmpegKit.cancel(targetEpisode.ffmpegSession)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: RAccepted.RPoint}))
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      dispatch(resumeFirstVideoDownload())
  }
}