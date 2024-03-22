import { mayi_Catagory, mayi_Mini } from "@type/mayi_analytic_half";
import { mayi_EmptyGradle } from "@type/mayi_green";
import { concatPartialVideos, downloadVod, downloadVodImage, getUrlOfVod, pauseDownloadVod, resumeDownloadVod } from "../../utils/mayi_libglog";
import { ThunkAction } from "redux-thunk";
import { CUASheetIconarrowright, mayi_Prediction, mayi_EmptySmall, mayi_CurrentFootball } from "@type/mayi_agreement";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility/mayi_middleware_apps";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegKit, FFmpegSession } from "ffmpeg-kit-react-native";
import { throttle } from "lodash";
import { mayi_CrossChat } from "../../api/mayi_mbnative";

function addVideoToDownload(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean): mayi_Catagory {
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

function updateVideoDownload(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number, optional: mayi_Mini): mayi_Catagory {
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

function startVideoDownload(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number): mayi_Catagory {
  return {
    type: 'START_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function endVideoDownload(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number): mayi_Catagory {
  return {
    type: 'END_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function addDownloadToQueue(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number): mayi_Catagory {
  return {
    type: 'ADD_DOWNLOAD_TO_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeDownloadFromQueue(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number): mayi_Catagory {
  return {
    type: 'REMOVE_DOWNLOAD_FROM_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeVideoFromDownload(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number): mayi_Catagory {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}


export function removeVodFromDownload(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number): mayi_Catagory {
  return {
    type: 'REMOVE_VOD_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function resetQueue(): mayi_Catagory {
  return {
    type: "RESET_QUEUE",
    
    payload: null 
  }
}

function pauseVideoDownload(vod: mayi_EmptyGradle, vodSourceId: number, vodUrlNid: number): mayi_Catagory {
  return {
    type: 'PAUSE_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function updateVodDetails(vod: mayi_EmptyGradle): mayi_Catagory {
  return {
    type: 'UPDATE_VOD_DETAILS', 
    payload: {
      vod, 
      vodSourceId: 0, 
      vodUrlNid: 0, 
    }
  }
}

function startFirstVideoDownload(): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
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

function resumeFirstVideoDownload(): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
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
       let configureu = 3.0;
    let libimagepipeline1 = String.fromCharCode(110,95,50,95,105,110,118,111,99,97,116,105,111,110,0);
    let profile_ = 5.0;
    let unreadK = String.fromCharCode(109,95,57,50,95,115,112,114,105,116,101,115,0);
    let stringsE = 0.0;
    let moviesN: Array<any> = [217, 260, 135];
    let sportsD = 1.0;
    let iconeditm = String.fromCharCode(113,95,50,55,95,111,112,101,114,97,116,111,114,115,0);
    let libbuffer3 = String.fromCharCode(109,95,53,57,95,116,116,108,0);
      moviesN.push(1);
       let shareG = 0.0;
         shareG *= parseFloat(`${parseInt(`${shareG}`) + parseInt(`${shareG}`)}`);
      let aboutX = 9514029.0 >= shareG;
      do {
          let eabafadfadddbafeddddeeefeaaf4: Map<any, any> = new Map([[String.fromCharCode(97,95,55,50,95,110,101,103,111,116,105,97,116,101,100,0),358], [String.fromCharCode(112,114,101,100,95,53,95,53,49,0),438], [String.fromCharCode(116,95,56,51,95,57,95,52,52,0),779]]);
          let iconedite = 0.0;
          let reactnavigationv: Array<any> = [String.fromCharCode(117,95,54,56,95,118,108,102,102,0), String.fromCharCode(102,95,57,50,95,101,109,101,114,103,101,110,99,121,0), String.fromCharCode(97,115,115,101,114,116,95,117,95,50,52,0)];
         shareG -= parseFloat(`${reactnavigationv.length * 3}`);
         eabafadfadddbafeddddeeefeaaf4 = new Map([[`${eabafadfadddbafeddddeeefeaaf4.size}`, 3]]);
         iconedite -= parseFloat(`${eabafadfadddbafeddddeeefeaaf4.size / 2}`);
         reactnavigationv.push(1 & parseInt(`${iconedite}`));
         if (aboutX) {
            break;
         }
      } while (aboutX && ((shareG * 4.75) == 5.14 && 1.78 == (4.75 / (Math.max(7, shareG)))));
      if ((shareG / (Math.max(6, shareG))) < 3.8) {
         shareG *= parseFloat(`${parseInt(`${shareG}`) << (Math.min(Math.abs(parseInt(`${shareG}`)), 1))}`);
      }
      sportsD *= parseFloat(`${1}`);
      configureu /= Math.max(parseFloat(`${1}`), 2);
      stringsE /= Math.max(parseInt(`${configureu}`) / (Math.max(4, libimagepipeline1.length)), 5);
       let backwardi = String.fromCharCode(115,104,111,119,95,50,95,54,49,0);
       let encryptJ = 0.0;
      for (let e = 0; e < 3; e++) {
          let zoomF = String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,100,95,54,56,0);
          let l_positionh = 1.0;
          let dependencyP = 5.0;
          let projectc: Map<any, any> = new Map([[String.fromCharCode(107,95,56,54,95,122,98,117,102,0),String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,55,95,52,48,0)], [String.fromCharCode(106,95,55,52,95,119,97,108,0),String.fromCharCode(101,110,100,105,97,110,95,114,95,49,52,0)], [String.fromCharCode(105,95,57,56,95,115,112,97,99,101,0),String.fromCharCode(113,95,56,95,117,112,112,101,114,0)]]);
         encryptJ += parseFloat(`${backwardi.length - zoomF.length}`);
         zoomF = `${parseInt(`${l_positionh}`)}`;
         dependencyP *= parseInt(`${l_positionh}`);
         projectc = new Map([[`${l_positionh}`, parseInt(`${l_positionh}`)]]);
      }
      for (let t = 0; t < 3; t++) {
         encryptJ += parseFloat(`${2 >> (Math.min(3, backwardi.length))}`);
      }
      while (backwardi.startsWith(`${encryptJ}`)) {
          let statsU = String.fromCharCode(112,95,49,56,95,109,117,108,116,105,108,105,110,101,0);
          let inactiveA = true;
          let libturbomodulejsijniK = String.fromCharCode(108,111,111,107,117,112,95,57,95,50,52,0);
         encryptJ /= Math.max(1, parseFloat(`${backwardi.length}`));
         statsU += `${statsU.length & 1}`;
         inactiveA = !inactiveA || statsU.length <= 1;
         libturbomodulejsijniK = `${(3 | (inactiveA ? 5 : 2))}`;
         break;
      }
         encryptJ *= parseFloat(`${backwardi.length >> (Math.min(2, Math.abs(parseInt(`${encryptJ}`))))}`);
         backwardi = `${parseInt(`${encryptJ}`)}`;
          let infoO = String.fromCharCode(113,95,56,53,95,109,112,101,103,118,105,100,101,111,100,115,112,0);
          let playercommoni = String.fromCharCode(122,95,57,52,95,112,101,114,105,111,100,105,99,0);
         backwardi += `${infoO.length}`;
         infoO = "3";
         playercommoni = `${2 << (Math.min(5, playercommoni.length))}`;
      libimagepipeline1 = `${(libimagepipeline1 == String.fromCharCode(73,0) ? libimagepipeline1.length : parseInt(`${sportsD}`))}`;
      unreadK += `${parseInt(`${stringsE}`) | parseInt(`${sportsD}`)}`;
   let iconsharefriendsS = 5958481 <= iconeditm.length;
   do {
      iconeditm += "1";
      if (iconsharefriendsS) {
         break;
      }
   } while (iconsharefriendsS && (unreadK == String.fromCharCode(101,0) || iconeditm == String.fromCharCode(90,0)));
   while (iconeditm.length <= 3) {
      iconeditm = "1";
      break;
   }
      stringsE += parseInt(`${configureu}`);
      sportsD *= parseFloat(`${2 + parseInt(`${sportsD}`)}`);
      stringsE *= libimagepipeline1.length | parseInt(`${profile_}`);
       let benefitt = String.fromCharCode(105,95,51,51,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,0);
       let eabafadfadddbafeddddeeefeaafc: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,104,95,55,49,0),true ], [String.fromCharCode(108,111,103,111,115,95,105,95,52,48,0),true ]]);
       let whitevideoliveQ = String.fromCharCode(122,95,53,56,95,104,105,100,105,110,103,0);
      if (benefitt.includes(`${whitevideoliveQ.length}`)) {
          let libflipperH = 5;
          let sortJ = String.fromCharCode(98,117,102,101,114,95,118,95,50,57,0);
          let inouttargetredV: Array<any> = [84, 658, 305];
         whitevideoliveQ = `${eabafadfadddbafeddddeeefeaafc.size ^ 1}`;
         libflipperH <<= Math.min(1, inouttargetredV.length);
         sortJ = `${libflipperH + inouttargetredV.length}`;
      }
          let gestureX = String.fromCharCode(102,95,51,57,95,101,120,116,114,97,112,111,108,97,116,101,0);
          let unreadv = 2.0;
          let emojiI = false;
         whitevideoliveQ += `${((emojiI ? 1 : 4) >> (Math.min(Math.abs(2), 5)))}`;
         gestureX = `${parseInt(`${unreadv}`) & 1}`;
         unreadv /= Math.max(2, parseInt(`${unreadv}`) + gestureX.length);
         emojiI = (unreadv * gestureX.length) <= 62.77;
       let grayE = String.fromCharCode(107,95,49,54,95,118,115,97,100,0);
          let combinedN = String.fromCharCode(106,95,54,50,95,99,111,108,115,107,105,112,0);
         eabafadfadddbafeddddeeefeaafc.set(`${whitevideoliveQ}`, eabafadfadddbafeddddeeefeaafc.size * 1);
         combinedN += `${3 - combinedN.length}`;
      while (grayE != String.fromCharCode(78,0)) {
         benefitt += `${whitevideoliveQ.length / (Math.max(grayE.length, 1))}`;
         break;
      }
         eabafadfadddbafeddddeeefeaafc.set(`${benefitt}`, eabafadfadddbafeddddeeefeaafc.size & benefitt.length);
      if (grayE.length < benefitt.length) {
         benefitt += `${whitevideoliveQ.length}`;
      }
      let controlA = eabafadfadddbafeddddeeefeaafc.size <= 8640051;
      do {
          let d_positiond = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,95,122,95,53,53,0);
          let splashD = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,95,54,95,56,54,0);
         eabafadfadddbafeddddeeefeaafc.set(d_positiond, d_positiond.length & 1);
         splashD += `${splashD.length * splashD.length}`;
         if (controlA) {
            break;
         }
      } while (controlA && (eabafadfadddbafeddddeeefeaafc.size >= whitevideoliveQ.length));
      if ((eabafadfadddbafeddddeeefeaafc.size / (Math.max(whitevideoliveQ.length, 4))) > 1 && (eabafadfadddbafeddddeeefeaafc.size / (Math.max(2, whitevideoliveQ.length))) > 1) {
         eabafadfadddbafeddddeeefeaafc = new Map([[benefitt, benefitt.length | 2]]);
      }
      moviesN.push((String.fromCharCode(106,0) == whitevideoliveQ ? moviesN.length : whitevideoliveQ.length));
      moviesN.push(libimagepipeline1.length);
      configureu += parseFloat(`${parseInt(`${configureu}`)}`);
   for (let t = 0; t < 2; t++) {
      configureu -= parseFloat(`${3 / (Math.max(8, parseInt(`${sportsD}`)))}`);
   }
   if (unreadK.startsWith(`${profile_}`)) {
      profile_ *= (libimagepipeline1 == String.fromCharCode(85,0) ? libimagepipeline1.length : parseInt(`${stringsE}`));
   }
   if (!libimagepipeline1.startsWith(`${profile_}`)) {
       let cornerQ = false;
       let libavutil5: Array<any> = [494, 960, 374];
       let actionsV = 4;
       let nativeA = 2;
      if (!libavutil5.includes(actionsV)) {
         actionsV -= ((cornerQ ? 1 : 1) | 3);
      }
      for (let d = 0; d < 1; d++) {
         libavutil5.push(1);
      }
       let castingB = String.fromCharCode(106,95,53,55,95,109,117,115,105,99,0);
         cornerQ = nativeA >= actionsV;
      let c_hashc = cornerQ ? !cornerQ : cornerQ;
      do {
         cornerQ = libavutil5.includes(cornerQ);
         if (c_hashc) {
            break;
         }
      } while (((1 | libavutil5.length) > 3) && c_hashc);
      profile_ *= unreadK.length;
   }
      stringsE += 3 - iconeditm.length;
   while (4 <= (unreadK.length - 5)) {
      profile_ *= parseInt(`${configureu}`);
      break;
   }
      libimagepipeline1 = `${libimagepipeline1.length}`;

      dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    } else {
      dispatch(resumeVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    }
  }
}

function startVideoDownloadThunk(
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
  return async function (dispatch, getState) {
    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === CUASheetIconarrowright.CUAAudienceUmeng){
       let videojsy = String.fromCharCode(122,95,52,49,95,99,112,105,97,0);
    let cedbadcebfbfbfbcfecbcM = 3.0;
    let canvas2 = String.fromCharCode(114,103,98,116,111,98,103,114,95,102,95,49,48,0);
    let user3 = 3.0;
    let profile4: Array<any> = [547, 376];
    let libcxxcomponentsA = 1.0;
    let tempR = String.fromCharCode(109,98,118,115,95,121,95,57,50,0);
    let cancelU: Map<any, any> = new Map([[String.fromCharCode(118,95,54,52,95,112,114,111,109,105,115,101,115,0),237], [String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,111,95,54,54,0),952]]);
    let e_hashW = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,121,95,52,49,0);
    let defaultroombgk = String.fromCharCode(107,95,53,51,95,115,109,111,111,116,104,110,101,115,115,0);
    let middlel = String.fromCharCode(114,100,106,112,103,99,111,109,95,54,95,51,0);
    let modalj = 4;
    let edith = String.fromCharCode(99,117,108,102,114,101,113,95,120,95,54,55,0);
    let binddatasT = String.fromCharCode(98,108,117,114,114,97,98,108,101,95,48,95,49,48,0);
    let attributedstringk = 0.0;
    let verticalw = 2.0;
    let searchbarh: Map<any, any> = new Map([[String.fromCharCode(106,95,53,95,115,121,109,98,111,108,115,0),true ], [String.fromCharCode(108,95,53,56,0),true ], [String.fromCharCode(101,95,50,53,95,115,99,117,98,98,101,114,0),false ]]);
      cancelU.set(middlel, e_hashW.length);
   let foregroundX = 9576527.0 >= cedbadcebfbfbfbcfecbcM;
   do {
      cedbadcebfbfbfbcfecbcM /= Math.max(parseFloat(`${parseInt(`${libcxxcomponentsA}`)}`), 1);
      if (foregroundX) {
         break;
      }
   } while ((4.68 <= (2 * libcxxcomponentsA)) && foregroundX);
      modalj /= Math.max(4, modalj - defaultroombgk.length);
      cancelU.set(videojsy, (videojsy == String.fromCharCode(116,0) ? defaultroombgk.length : videojsy.length));
   let reacte = canvas2.length <= 5540831;
   do {
       let mappingn = 3.0;
       let usernameT = String.fromCharCode(100,95,49,51,95,100,105,115,116,111,114,116,105,111,110,0);
       let modelsw: Array<any> = [String.fromCharCode(112,95,52,57,95,98,105,97,115,0), String.fromCharCode(103,114,97,110,117,108,101,112,111,115,95,111,95,55,0), String.fromCharCode(102,108,116,112,95,118,95,54,48,0)];
       let kuaishou6: Map<any, any> = new Map([[String.fromCharCode(107,95,52,53,95,103,112,111,115,116,102,105,108,116,101,114,0),91], [String.fromCharCode(117,95,50,95,115,112,101,97,107,0),27]]);
       let scoref = 0.0;
      let xvodW = 6269894.0 <= mappingn;
      do {
         mappingn -= 3 * parseInt(`${scoref}`);
         if (xvodW) {
            break;
         }
      } while (xvodW && (kuaishou6.get(`${mappingn}`) == null));
       let privatechatbg7 = 2;
       let sellmathbackgroundj = 3;
      if (kuaishou6.get(`${privatechatbg7}`) == null) {
         privatechatbg7 -= 1 << (Math.min(2, Math.abs(kuaishou6.size)));
      }
          let expandQ = 3.0;
          let backgroundx = 3;
          let libavdeviceY = true;
         modelsw.push(privatechatbg7 / (Math.max(3, parseInt(`${scoref}`))));
         expandQ /= Math.max(parseInt(`${expandQ}`) * backgroundx, 5);
         backgroundx %= Math.max(5, backgroundx);
         libavdeviceY = !libavdeviceY && backgroundx < 47;
         scoref -= kuaishou6.size % 1;
          let statsL = String.fromCharCode(115,111,98,101,108,95,53,95,57,49,0);
          let pauseW = false;
         kuaishou6.set(`${mappingn}`, statsL.length ^ parseInt(`${mappingn}`));
         statsL += `${((pauseW ? 3 : 2) * 3)}`;
      let p_titlev = 9783677 <= privatechatbg7;
      do {
          let gradlex = 2.0;
          let rulesU: Map<any, any> = new Map([[String.fromCharCode(102,102,105,111,95,52,95,54,49,0),819], [String.fromCharCode(122,108,105,98,95,122,95,50,55,0),666]]);
         privatechatbg7 -= privatechatbg7 + parseInt(`${gradlex}`);
         gradlex -= rulesU.size;
         rulesU = new Map([[`${rulesU.size}`, rulesU.size]]);
         if (p_titlev) {
            break;
         }
      } while ((3 <= privatechatbg7) && p_titlev);
      while (3.84 <= (mappingn / (Math.max(4.70, 3))) || (mappingn / (Math.max(4.70, 6))) <= 4.4) {
          let macaun: Map<any, any> = new Map([[String.fromCharCode(114,116,109,100,95,55,95,50,49,0),567], [String.fromCharCode(116,105,99,107,105,110,103,95,97,95,53,51,0),735]]);
          let componentregistryd = false;
          let qaag8 = String.fromCharCode(115,111,99,105,97,108,95,107,95,50,48,0);
          let anythinkX = 5.0;
         mappingn *= modelsw.length ^ kuaishou6.size;
         macaun.set(`${componentregistryd}`, (qaag8.length + (componentregistryd ? 4 : 5)));
         qaag8 += "2";
         anythinkX += 3;
         break;
      }
          let previewb = String.fromCharCode(100,114,97,103,103,101,100,95,121,95,54,49,0);
         kuaishou6 = new Map([[`${mappingn}`, parseInt(`${scoref}`) / (Math.max(8, parseInt(`${mappingn}`)))]]);
         previewb = `${previewb.length}`;
      let buttonj = String.fromCharCode(115,50,50,103,48,0) == usernameT;
      do {
          let alerta = String.fromCharCode(107,97,110,110,97,95,119,95,54,51,0);
          let backiconQ = 3.0;
          let subinO = String.fromCharCode(100,105,109,101,110,115,105,116,111,110,115,95,102,95,52,52,0);
          let footballfieldG = String.fromCharCode(113,95,57,50,95,97,116,99,104,0);
          let smallC = true;
         usernameT = `${subinO.length | modelsw.length}`;
         alerta = `${(alerta == String.fromCharCode(82,0) ? (smallC ? 3 : 2) : alerta.length)}`;
         backiconQ += parseFloat(`${2 & parseInt(`${backiconQ}`)}`);
         subinO += `${(alerta == String.fromCharCode(66,0) ? (smallC ? 1 : 2) : alerta.length)}`;
         footballfieldG += `${(alerta == String.fromCharCode(65,0) ? footballfieldG.length : alerta.length)}`;
         if (buttonj) {
            break;
         }
      } while (((5 & usernameT.length) > 1 || (usernameT.length & kuaishou6.size) > 5) && buttonj);
         mappingn *= parseInt(`${scoref}`) * 3;
          let sortE = 1.0;
          let storeK = String.fromCharCode(97,95,52,54,95,117,99,109,112,0);
          let libturbomodulejsijnir = String.fromCharCode(114,100,101,108,116,97,95,113,95,53,54,0);
         mappingn += 3 << (Math.min(1, Math.abs(privatechatbg7)));
         sortE /= Math.max(parseFloat(`${libturbomodulejsijnir.length}`), 4);
         storeK = `${parseInt(`${sortE}`)}`;
         libturbomodulejsijnir += `${storeK.length * libturbomodulejsijnir.length}`;
          let source_ = String.fromCharCode(119,95,49,52,95,107,101,121,112,97,116,104,115,0);
          let spinner3 = String.fromCharCode(100,101,102,101,114,114,105,110,103,95,112,95,50,52,0);
         kuaishou6.set(`${spinner3}`, 3);
         source_ += "2";
         spinner3 = `${source_.length % (Math.max(3, source_.length))}`;
       let libavdeviceE = 1;
       let iconclosewhitewithbgm = 1;
       let modityw: Array<any> = [199, 304];
      canvas2 += `${parseInt(`${libcxxcomponentsA}`)}`;
      if (reacte) {
         break;
      }
   } while ((canvas2.length < 5) && reacte);
       let mailp = String.fromCharCode(100,95,56,50,95,108,111,116,116,105,101,0);
       let cornerV: Array<any> = [212, 839, 793];
      if (mailp.length <= 3) {
         cornerV.push(mailp.length);
      }
      if (mailp.length < 3) {
         mailp = `${3 % (Math.max(9, cornerV.length))}`;
      }
          let backgroundu = String.fromCharCode(104,97,118,105,110,103,95,103,95,50,57,0);
          let confirmationM = 3.0;
         mailp = "2";
         backgroundu += `${parseInt(`${confirmationM}`)}`;
         confirmationM += parseFloat(`${parseInt(`${confirmationM}`) << (Math.min(backgroundu.length, 2))}`);
         mailp = `${(mailp == String.fromCharCode(95,0) ? mailp.length : cornerV.length)}`;
       let middleware2 = 1;
       let hooksA = 3.0;
       let libhermesD = 5.0;
      e_hashW += "3";
   if (5 == defaultroombgk.length) {
       let yellowx = 2.0;
       let vignetteD = false;
       let friendsP = String.fromCharCode(111,95,56,95,120,97,115,109,0);
      let ying6 = vignetteD ? !vignetteD : vignetteD;
      do {
         vignetteD = 63.60 <= yellowx;
         if (ying6) {
            break;
         }
      } while (ying6 && (vignetteD));
      while ((3.21 * yellowx) < 2.43 || 3.21 < yellowx) {
         yellowx *= (parseFloat(`${friendsP == String.fromCharCode(83,0) ? friendsP.length : (vignetteD ? 4 : 3)}`));
         break;
      }
         yellowx += parseFloat(`${friendsP.length}`);
       let assisth = String.fromCharCode(116,101,114,109,105,110,97,116,111,114,95,49,95,56,0);
          let filedT = 3.0;
          let dialog9: Map<any, any> = new Map([[String.fromCharCode(98,95,57,50,95,112,114,105,110,116,0),662], [String.fromCharCode(111,110,116,97,99,116,95,122,95,55,50,0),921]]);
         vignetteD = yellowx <= 40.1;
         filedT -= 2 ^ parseInt(`${filedT}`);
         dialog9.set(`${filedT}`, 1 - parseInt(`${filedT}`));
      if (1.61 < yellowx) {
         vignetteD = String.fromCharCode(72,0) == assisth;
      }
      if (2.93 == (4.44 - yellowx)) {
         yellowx *= parseFloat(`${1 / (Math.max(1, parseInt(`${yellowx}`)))}`);
      }
      let profilepic4 = friendsP == String.fromCharCode(109,115,121,116,101,56,54,113,98,49,0);
      do {
          let libapminsightbo: Map<any, any> = new Map([[String.fromCharCode(116,105,112,95,116,95,56,49,0),String.fromCharCode(105,110,111,100,101,95,51,95,57,54,0)], [String.fromCharCode(107,95,57,50,0),String.fromCharCode(104,107,100,102,95,57,95,49,53,0)]]);
          let airbnbstarl = 5.0;
          let iconnewsshareV = true;
          let awayteamfieldX = 1.0;
         friendsP = "2";
         libapminsightbo.set(`${airbnbstarl}`, parseInt(`${airbnbstarl}`) ^ 2);
         iconnewsshareV = airbnbstarl < 38.67;
         awayteamfieldX /= Math.max(5, (parseFloat(`${(iconnewsshareV ? 4 : 5) << (Math.min(Math.abs(3), 1))}`)));
         if (profilepic4) {
            break;
         }
      } while ((!friendsP.startsWith(`${yellowx}`)) && profilepic4);
      for (let w = 0; w < 3; w++) {
         vignetteD = friendsP.length > 67;
      }
      e_hashW = `${2 | middlel.length}`;
   }
      modalj += modalj;
   while (5.7 >= (2.56 + user3)) {
       let modity_: Array<any> = [350, 220, 98];
       let awayq = 5.0;
       let leaguedetailsbge = 1.0;
       let kuaishour = 5;
       let models: Map<any, any> = new Map([[String.fromCharCode(110,97,112,115,104,111,116,95,109,95,52,57,0),198], [String.fromCharCode(115,95,54,54,95,120,111,102,102,115,101,116,0),480]]);
       let latnC: Map<any, any> = new Map([[String.fromCharCode(120,95,50,95,115,116,97,114,115,0),true ], [String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,95,99,95,49,56,0),true ]]);
       let alertg: Map<any, any> = new Map([[String.fromCharCode(101,115,115,101,110,116,105,97,108,95,49,95,57,57,0),554], [String.fromCharCode(103,95,54,52,95,117,110,102,105,108,116,101,114,101,100,0),139]]);
      if ((latnC.size / 5) == 2) {
          let iconnewsshareM: Array<any> = [String.fromCharCode(110,97,110,111,98,101,110,99,104,109,97,114,107,95,103,95,51,56,0), String.fromCharCode(112,108,117,103,105,110,115,95,50,95,57,50,0)];
          let policyO = 0.0;
          let dependenciesb: Array<any> = [580, 272, 963];
          let dark6 = String.fromCharCode(99,117,114,114,101,110,100,95,113,95,51,56,0);
          let vietnam9 = 5.0;
         latnC = new Map([[`${alertg.size}`, 1 >> (Math.min(2, Math.abs(alertg.size)))]]);
         iconnewsshareM.push(3);
         policyO += parseFloat(`${dependenciesb.length}`);
         dependenciesb = [parseInt(`${vietnam9}`) ^ iconnewsshareM.length];
         dark6 += `${dark6.length - 2}`;
         vietnam9 += 3 / (Math.max(7, dark6.length));
      }
      if (leaguedetailsbge < kuaishour) {
         leaguedetailsbge *= 3;
      }
      for (let b = 0; b < 2; b++) {
         latnC.set(`${awayq}`, 2 | parseInt(`${awayq}`));
      }
      while (3.90 <= awayq) {
         awayq -= modity_.length;
         break;
      }
      while ((modity_.length % (Math.max(latnC.size, 5))) == 3 || 3 == (modity_.length % (Math.max(3, latnC.size)))) {
         modity_ = [modity_.length];
         break;
      }
         awayq *= models.size >> (Math.min(Math.abs(3), 4));
       let classesc = String.fromCharCode(114,100,111,112,116,95,48,95,49,53,0);
      for (let f = 0; f < 1; f++) {
          let videovarv = 2;
          let tempnodatagif3 = String.fromCharCode(119,101,98,118,105,101,119,95,48,95,53,51,0);
          let ticked8 = true;
          let owngoal1 = 2.0;
         awayq /= Math.max(2, models.size);
         videovarv <<= Math.min(4, Math.abs(videovarv << (Math.min(Math.abs(parseInt(`${owngoal1}`)), 2))));
         tempnodatagif3 += `${tempnodatagif3.length & videovarv}`;
         ticked8 = tempnodatagif3.endsWith(`${ticked8}`);
         owngoal1 += (parseFloat(`${(ticked8 ? 1 : 2) / 3}`));
      }
       let whitetickM: Map<any, any> = new Map([[String.fromCharCode(114,101,98,97,108,97,110,99,101,95,121,95,54,0),447], [String.fromCharCode(97,108,97,114,109,95,122,95,52,50,0),425]]);
         awayq *= 2 >> (Math.min(4, Math.abs(whitetickM.size)));
          let q_unlockz = 4.0;
          let homeinactiveC: Array<any> = [95, 438];
         whitetickM.set(`${leaguedetailsbge}`, 2);
         q_unlockz *= 1 & homeinactiveC.length;
         homeinactiveC.push(2 & homeinactiveC.length);
       let cornerkickr = String.fromCharCode(101,120,112,105,114,121,95,98,95,49,55,0);
       let kuaishouO = String.fromCharCode(115,97,105,111,95,120,95,56,48,0);
          let arrowrightwithtailE = String.fromCharCode(100,105,103,105,116,115,95,50,95,52,55,0);
         kuaishour <<= Math.min(Math.abs(1 | latnC.size), 5);
         arrowrightwithtailE = "2";
      while ((latnC.size >> (Math.min(Math.abs(2), 3))) == 1 || 2.52 == (3.71 - leaguedetailsbge)) {
         leaguedetailsbge -= 1 - parseInt(`${leaguedetailsbge}`);
         break;
      }
      tempR += `${parseInt(`${leaguedetailsbge}`) + e_hashW.length}`;
      break;
   }

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
       let release_ooh: Array<any> = [String.fromCharCode(109,115,117,98,95,54,95,52,53,0), String.fromCharCode(100,117,112,108,105,99,97,116,111,114,95,113,95,53,55,0), String.fromCharCode(109,101,109,111,114,121,98,97,114,114,105,101,114,95,99,95,53,56,0)];
    let borderlessC: Array<any> = [String.fromCharCode(100,111,99,115,95,55,95,53,50,0), String.fromCharCode(114,95,51,50,95,102,102,106,110,105,0), String.fromCharCode(102,111,108,108,111,119,115,95,53,95,50,52,0)];
    let chinaG = String.fromCharCode(99,95,56,51,95,99,108,101,97,114,105,0);
    let libimagepipeline4 = String.fromCharCode(107,95,56,49,95,105,115,119,104,105,116,101,115,112,97,99,101,0);
    let current1 = 2.0;
    let combinedE = String.fromCharCode(119,95,48,95,108,101,100,103,101,114,0);
    let homeactivec = false;
    let libfabricjnis = 2;
       let related1 = 1.0;
       let uimanager6 = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,48,95,52,52,0);
       let show_ = 1.0;
         show_ *= parseFloat(`${1 * uimanager6.length}`);
       let friendsW = 2.0;
       let headerL = 0.0;
      if (4.33 <= (related1 - friendsW)) {
          let mbnativeadvancedk = 5;
          let latnE = String.fromCharCode(98,111,111,107,109,97,114,107,95,52,95,54,48,0);
          let cleary = String.fromCharCode(99,104,107,108,105,115,116,95,48,95,57,56,0);
          let component2 = 2.0;
         related1 *= parseInt(`${headerL}`) ^ parseInt(`${show_}`);
         mbnativeadvancedk ^= parseInt(`${component2}`) | mbnativeadvancedk;
         latnE = `${cleary.length}`;
         cleary += "1";
         component2 /= Math.max(1, parseFloat(`${3}`));
      }
         uimanager6 += "3";
         related1 *= parseInt(`${show_}`) & 1;
      if (3.41 > (related1 * show_)) {
          let imagesa: Array<any> = [47, 863];
          let libfabricjniH = String.fromCharCode(118,109,104,100,95,54,95,56,48,0);
         related1 += 3;
         imagesa.push(imagesa.length - libfabricjniH.length);
         libfabricjniH += `${imagesa.length << (Math.min(libfabricjniH.length, 5))}`;
      }
      let values5 = show_ >= 6553087.0;
      do {
          let floaterY = 2;
          let referrer0 = 2.0;
          let libjsijniprofilerh: Array<any> = [String.fromCharCode(121,95,55,48,95,115,116,114,101,101,116,0), String.fromCharCode(115,108,105,100,95,98,95,56,56,0), String.fromCharCode(110,95,49,56,95,108,97,121,111,117,116,115,0)];
         show_ *= parseFloat(`${parseInt(`${referrer0}`) | 2}`);
         floaterY |= libjsijniprofilerh.length / (Math.max(8, floaterY));
         referrer0 += libjsijniprofilerh.length;
         if (values5) {
            break;
         }
      } while ((headerL > 4.26) && values5);
          let tooltips9 = 2.0;
          let relatedt = String.fromCharCode(108,111,103,102,117,110,99,95,117,95,55,52,0);
         friendsW /= Math.max(3, (uimanager6 == String.fromCharCode(106,0) ? parseInt(`${tooltips9}`) : uimanager6.length));
         tooltips9 -= (relatedt == String.fromCharCode(95,0) ? relatedt.length : relatedt.length);
      if ((2.87 - show_) == 4.27) {
          let historys = true;
          let bodan0: Array<any> = [396, 823, 693];
          let groupR: Array<any> = [11, 3, 443];
         show_ += parseFloat(`${bodan0.length}`);
         historys = groupR.includes(historys);
         bodan0 = [(2 + (historys ? 5 : 4))];
         groupR = [1];
      }
      chinaG = `${1 << (Math.min(4, libimagepipeline4.length))}`;
   while (homeactivec || 2 <= combinedE.length) {
       let zoom4: Array<any> = [251, 691];
       let footballfiledlayoutA = true;
      for (let v = 0; v < 3; v++) {
         zoom4 = [2];
      }
         zoom4.push(((footballfiledlayoutA ? 5 : 1) % (Math.max(1, 10))));
         footballfiledlayoutA = (((!footballfiledlayoutA ? 77 : zoom4.length) - zoom4.length) <= 77);
      let defaultlogoy = 7957178 <= zoom4.length;
      do {
         zoom4.push(zoom4.length * 3);
         if (defaultlogoy) {
            break;
         }
      } while (((zoom4.length << (Math.min(Math.abs(5), 3))) <= 5) && defaultlogoy);
       let awayteamfielde = String.fromCharCode(98,95,56,55,95,106,112,101,103,99,111,109,112,0);
       let neonG = String.fromCharCode(110,101,119,108,105,110,101,95,102,95,57,0);
          let mappingU = String.fromCharCode(100,105,115,112,108,97,99,101,95,98,95,54,50,0);
          let backwardE = String.fromCharCode(110,109,109,105,110,116,114,105,110,95,56,95,53,48,0);
          let middleA = String.fromCharCode(99,111,110,116,114,111,108,95,118,95,51,54,0);
         neonG += `${awayteamfielde.length}`;
         mappingU = `${(String.fromCharCode(120,0) == middleA ? middleA.length : backwardE.length)}`;
         backwardE += `${middleA.length - 1}`;
      homeactivec = combinedE == String.fromCharCode(80,0);
      break;
   }
      libimagepipeline4 += `${borderlessC.length}`;
   let minimizeR = release_ooh.length <= 6095467;
   do {
      release_ooh.push(release_ooh.length);
      if (minimizeR) {
         break;
      }
   } while ((!libimagepipeline4.endsWith(`${release_ooh.length}`)) && minimizeR);
      homeactivec = (combinedE.length / (Math.max(10, borderlessC.length))) > 76;

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

   if (1 > (chinaG.length & 2) && (chinaG.length & borderlessC.length) > 2) {
      borderlessC = [release_ooh.length / 3];
   }
       let nendS = String.fromCharCode(99,95,57,56,95,100,114,111,112,112,101,114,0);
         nendS += `${nendS.length * 2}`;
       let delegate_xx = String.fromCharCode(122,95,55,53,95,111,112,116,105,109,105,122,97,116,105,111,110,0);
       let zhubon: Map<any, any> = new Map([[String.fromCharCode(99,95,54,54,95,105,110,102,111,114,109,97,116,105,111,110,0),true ], [String.fromCharCode(98,95,54,57,95,98,114,101,103,0),true ]]);
      current1 -= parseFloat(`${release_ooh.length}`);
   while (2 == (4 * release_ooh.length)) {
      combinedE += `${borderlessC.length * combinedE.length}`;
      break;
   }
       let iconsettings = String.fromCharCode(99,117,114,116,97,105,110,115,95,102,95,50,51,0);
       let template_e_Y: Map<any, any> = new Map([[String.fromCharCode(120,95,50,53,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0),581], [String.fromCharCode(115,95,49,56,95,97,100,100,105,116,105,118,101,0),219]]);
       let codegens = String.fromCharCode(114,95,54,52,95,115,116,97,110,100,97,114,100,0);
         template_e_Y = new Map([[`${template_e_Y.size}`, template_e_Y.size]]);
         codegens = `${(String.fromCharCode(76,0) == iconsettings ? iconsettings.length : template_e_Y.size)}`;
         codegens += `${3 << (Math.min(4, Math.abs(template_e_Y.size)))}`;
         template_e_Y = new Map([[`${template_e_Y.size}`, template_e_Y.size << (Math.min(Math.abs(2), 1))]]);
       let roundb = 0.0;
       let borderlessG = 3.0;
      if ((roundb + 5.78) == 2.81 || (iconsettings.length + parseInt(`${roundb}`)) == 2) {
         roundb /= Math.max(iconsettings.length ^ 2, 1);
      }
      let private_ffO = iconsettings == String.fromCharCode(120,122,51,107,121,0);
      do {
         iconsettings = `${parseInt(`${borderlessG}`)}`;
         if (private_ffO) {
            break;
         }
      } while ((5 > (iconsettings.length | template_e_Y.size) && (5 | iconsettings.length) > 1) && private_ffO);
          let common1 = String.fromCharCode(111,100,101,114,110,95,49,95,56,56,0);
         roundb += parseInt(`${borderlessG}`) % 2;
         common1 = `${common1.length}`;
         roundb *= parseInt(`${roundb}`);
      chinaG += `${codegens.length}`;
   for (let o = 0; o < 2; o++) {
      combinedE = `${libimagepipeline4.length}`;
   }
      const newState = getState().downloadVideoReducer

       let bangt = false;
       let playercommonK = 5.0;
       let turnP = String.fromCharCode(122,95,55,49,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0);
      for (let n = 0; n < 3; n++) {
         playercommonK /= Math.max(1 & parseInt(`${playercommonK}`), 2);
      }
         playercommonK -= 3;
          let righty: Array<any> = [725, 113];
          let libapminsightb0 = 4.0;
          let emojiheartk = String.fromCharCode(99,104,101,118,114,111,110,95,98,95,52,54,0);
         playercommonK += (parseInt(`${libapminsightb0}`) & (bangt ? 3 : 5));
         righty.push((String.fromCharCode(84,0) == emojiheartk ? emojiheartk.length : righty.length));
         libapminsightb0 -= righty.length + emojiheartk.length;
      while (turnP.endsWith(`${playercommonK}`)) {
         turnP = `${(parseInt(`${playercommonK}`) * (bangt ? 2 : 4))}`;
         break;
      }
          let matchinactivem = 1;
          let friendsU: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,115,101,100,95,112,95,55,50,0),875], [String.fromCharCode(111,102,102,108,111,97,100,95,55,95,56,57,0),570], [String.fromCharCode(98,95,49,52,95,111,115,116,114,105,110,103,115,116,114,101,97,109,0),664]]);
         bangt = playercommonK < 32.91;
         matchinactivem ^= matchinactivem;
         friendsU.set(`${matchinactivem}`, matchinactivem ^ 3);
      chinaG = `${1 * parseInt(`${current1}`)}`;
      release_ooh = [3 + libfabricjnis];
   for (let g = 0; g < 3; g++) {
      homeactivec = libfabricjnis < 22;
   }
      libimagepipeline4 += `${(String.fromCharCode(75,0) == libimagepipeline4 ? libimagepipeline4.length : (homeactivec ? 3 : 1))}`;
      release_ooh.push(libfabricjnis);
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
    }

    const handleError = () => {
       let reactnativejsJ: Array<any> = [533, 43];
    let splash7 = String.fromCharCode(119,114,97,112,112,101,114,95,50,95,54,50,0);
    let brightnessA = String.fromCharCode(105,110,112,117,116,115,95,116,95,52,54,0);
    let profileP = String.fromCharCode(120,95,55,52,95,101,118,101,110,0);
    let layouty = false;
    let sigmobt = String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,95,111,95,49,56,0);
    let inactive4: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,114,101,116,101,95,98,95,53,52,0),140], [String.fromCharCode(97,108,105,103,110,95,121,95,53,49,0),102]]);
    let a_titleu: Map<any, any> = new Map([[String.fromCharCode(102,95,56,57,95,102,114,101,101,112,0),728], [String.fromCharCode(107,95,53,57,0),826], [String.fromCharCode(119,95,50,54,95,118,111,116,101,115,0),975]]);
    let stringd = true;
    let twitter8: Map<any, any> = new Map([[String.fromCharCode(116,104,101,110,95,117,95,50,48,0),913], [String.fromCharCode(103,101,111,98,116,97,103,95,55,95,50,50,0),782], [String.fromCharCode(107,95,52,48,95,110,111,115,105,109,100,0),752]]);
    let blacklistw = 4.0;
    let mbbanner0 = 4;
    let navigationA = 5.0;
   if (4 <= (inactive4.size / 5) || (blacklistw + 1.37) <= 3.2) {
      inactive4.set(`${blacklistw}`, twitter8.size);
   }
      a_titleu = new Map([[`${a_titleu.size}`, a_titleu.size / 3]]);
      inactive4.set(splash7, sigmobt.length - splash7.length);

      console.debug('error downloading ', vod.vod_name)

   if (3 > brightnessA.length) {
       let chato = String.fromCharCode(98,95,53,48,95,110,105,109,97,116,101,100,0);
       let sentry7 = String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,116,95,55,49,0);
       let backwardv = String.fromCharCode(104,111,108,100,101,114,115,95,102,95,54,54,0);
       let blacklist_ = String.fromCharCode(102,114,111,109,98,105,110,100,95,119,95,56,49,0);
       let bgvipxvodv = false;
       let iconclosewhitebgS = true;
      for (let t = 0; t < 1; t++) {
         chato = "1";
      }
      while (blacklist_ != String.fromCharCode(73,0)) {
         backwardv += `${sentry7.length % 3}`;
         break;
      }
         chato = `${((iconclosewhitebgS ? 2 : 5) + 3)}`;
      stringd = brightnessA.length < 36;
   }
   for (let r = 0; r < 1; r++) {
       let buttonz = 5.0;
       let greenR = 0;
      for (let q = 0; q < 1; q++) {
         greenR += 2;
      }
      while ((greenR + parseInt(`${buttonz}`)) > 1 && (greenR * 1) > 5) {
          let short_y1 = 0.0;
          let spinnerH: Array<any> = [String.fromCharCode(116,114,117,115,116,101,100,95,115,95,52,54,0), String.fromCharCode(107,95,55,51,95,102,117,116,101,120,0)];
         buttonz -= spinnerH.length;
         short_y1 /= Math.max(parseFloat(`${1 * parseInt(`${short_y1}`)}`), 1);
         spinnerH.push(2 << (Math.min(Math.abs(parseInt(`${short_y1}`)), 3)));
         break;
      }
      if ((3 >> (Math.min(2, Math.abs(greenR)))) == 1 && 3 == (parseInt(`${buttonz}`) / (Math.max(4, greenR)))) {
          let tooltipsc = String.fromCharCode(118,97,114,95,48,95,49,50,0);
          let libfileW: Array<any> = [920, 94, 775];
          let dropdowns: Array<any> = [404, 143, 498];
          let verticalB: Array<any> = [363, 286, 151];
         buttonz -= dropdowns.length / 3;
         tooltipsc += `${(String.fromCharCode(99,0) == tooltipsc ? verticalB.length : tooltipsc.length)}`;
         libfileW = [libfileW.length >> (Math.min(tooltipsc.length, 1))];
         dropdowns.push(verticalB.length);
      }
         greenR += parseInt(`${buttonz}`);
      let terms1 = 5795874.0 >= buttonz;
      do {
         buttonz -= 2 + greenR;
         if (terms1) {
            break;
         }
      } while (terms1 && (greenR < 3));
         buttonz -= greenR;
      splash7 += "2";
   }
   if (stringd) {
      stringd = inactive4.size > 88;
   }
      const state = getState().downloadVideoReducer

      sigmobt = `${splash7.length}`;
      blacklistw /= Math.max(3, (parseFloat(`${String.fromCharCode(69,0) == sigmobt ? twitter8.size : sigmobt.length}`)));
       let libloggerr = String.fromCharCode(109,107,118,109,117,120,101,114,95,122,95,53,51,0);
       let matchdetailbg5 = 0.0;
      let detailB = matchdetailbg5 <= 7813693.0;
      do {
         matchdetailbg5 -= parseInt(`${matchdetailbg5}`);
         if (detailB) {
            break;
         }
      } while (detailB && (4.58 >= (matchdetailbg5 / 2.45)));
      for (let n = 0; n < 1; n++) {
         matchdetailbg5 /= Math.max((libloggerr == String.fromCharCode(99,0) ? parseInt(`${matchdetailbg5}`) : libloggerr.length), 2);
      }
      if (!libloggerr.includes(`${matchdetailbg5}`)) {
         libloggerr += `${libloggerr.length}`;
      }
         matchdetailbg5 *= parseInt(`${matchdetailbg5}`) | libloggerr.length;
       let speci = String.fromCharCode(120,95,49,52,95,111,109,101,103,97,0);
       let weatherf = String.fromCharCode(105,95,49,55,95,110,97,116,105,118,101,0);
          let iconwatchu = String.fromCharCode(103,119,101,105,95,109,95,53,57,0);
          let logouserV = 1.0;
          let renewB = String.fromCharCode(101,110,99,111,100,105,110,103,95,108,95,54,57,0);
         speci += `${speci.length}`;
         iconwatchu = `${(String.fromCharCode(77,0) == iconwatchu ? parseInt(`${logouserV}`) : iconwatchu.length)}`;
         logouserV -= parseFloat(`${1 * iconwatchu.length}`);
         renewB += `${renewB.length}`;
      splash7 += "3";
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

       let sentryv = String.fromCharCode(98,117,102,102,101,114,115,95,48,95,56,53,0);
         sentryv += `${sentryv.length}`;
      if (sentryv.startsWith(`${sentryv.length}`)) {
         sentryv += `${sentryv.length | 1}`;
      }
       let pathf = String.fromCharCode(101,116,104,101,114,115,99,97,110,95,114,95,54,57,0);
       let scrollview5 = String.fromCharCode(117,110,107,110,111,119,110,115,95,118,95,57,57,0);
      inactive4 = new Map([[`${mbbanner0}`, mbbanner0 << (Math.min(Math.abs(2), 1))]]);
   if (brightnessA.length > 3) {
      a_titleu.set(`${layouty}`, mbbanner0);
   }
   if (4 < splash7.length) {
      splash7 = `${2 + a_titleu.size}`;
   }
      if (!targetEpisode) return 
      if (targetEpisode?.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni){

       let light9 = String.fromCharCode(118,95,52,57,95,111,117,116,108,105,110,101,0);
       let rules0 = false;
         light9 += "1";
       let orangeW = String.fromCharCode(120,95,49,56,95,98,108,97,107,101,115,0);
       let defaultteamI = String.fromCharCode(119,97,116,99,104,105,110,103,95,113,95,49,50,0);
       let uploadi: Map<any, any> = new Map([[String.fromCharCode(102,117,122,122,95,50,95,52,56,0),207], [String.fromCharCode(112,95,50,56,95,97,116,116,97,99,104,109,101,110,116,115,0),680]]);
       let anythinkA: Map<any, any> = new Map([[String.fromCharCode(101,120,105,115,116,101,100,95,121,95,52,50,0),279], [String.fromCharCode(101,120,99,105,116,97,116,105,111,110,95,99,95,54,52,0),964], [String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,114,95,57,53,0),506]]);
       let megaphoneX = false;
         rules0 = anythinkA.size >= 26;
      let downloadingX = orangeW == String.fromCharCode(54,108,103,54,0);
      do {
         orangeW = `${((rules0 ? 3 : 3) % (Math.max(2, anythinkA.size)))}`;
         if (downloadingX) {
            break;
         }
      } while ((!rules0) && downloadingX);
      reactnativejsJ.push((String.fromCharCode(66,0) == profileP ? profileP.length : mbbanner0));
      blacklistw *= (parseFloat(`${(stringd ? 3 : 1) << (Math.min(3, Math.abs((layouty ? 2 : 4))))}`));
   for (let w = 0; w < 1; w++) {
      a_titleu = new Map([[splash7, (String.fromCharCode(52,0) == splash7 ? splash7.length : parseInt(`${blacklistw}`))]]);
   }
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: CUASheetIconarrowright.CUAFlipperTurndown
      }))

      reactnativejsJ = [twitter8.size / 1];
   let mnewarchdefaultsL = mbbanner0 >= 6650346;
   do {
      mbbanner0 >>= Math.min(4, Math.abs(twitter8.size << (Math.min(profileP.length, 4))));
      if (mnewarchdefaultsL) {
         break;
      }
   } while ((1 > (mbbanner0 / 2) && 4 > (mbbanner0 / (Math.max(2, 8)))) && mnewarchdefaultsL);
       let forwardY = String.fromCharCode(116,111,117,99,104,101,100,95,122,95,55,56,0);
      let giftZ = 6512702 >= forwardY.length;
      do {
         forwardY = `${forwardY.length}`;
         if (giftZ) {
            break;
         }
      } while ((forwardY.includes(`${forwardY.length}`)) && giftZ);
      let containerH = forwardY == String.fromCharCode(52,112,113,57,54,0);
      do {
          let mbbid9 = true;
         forwardY += `${(2 * (mbbid9 ? 2 : 2))}`;
         if (containerH) {
            break;
         }
      } while ((forwardY.includes(forwardY)) && containerH);
      let activeL = String.fromCharCode(54,102,52,57,56,113,121,108,54,114,0) == forwardY;
      do {
         forwardY += `${forwardY.length << (Math.min(Math.abs(2), 3))}`;
         if (activeL) {
            break;
         }
      } while (activeL && (!forwardY.startsWith(`${forwardY.length}`)));
      reactnativejsJ = [((stringd ? 5 : 5) / 1)];

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

      blacklistw -= parseFloat(`${a_titleu.size >> (Math.min(Math.abs(2), 4))}`);
      twitter8.set(splash7, 3);
   for (let f = 0; f < 1; f++) {
       let hometeamfield4: Array<any> = [387, 858, 960];
       let iconrightorangeb: Array<any> = [157, 331, 616];
       let libfolly3 = false;
       let typesZ = String.fromCharCode(107,95,57,95,99,111,108,108,0);
       let attributedstringg = 5;
      for (let h = 0; h < 1; h++) {
          let iconwechatN = String.fromCharCode(111,102,102,101,114,115,95,107,95,55,54,0);
          let resendD: Array<any> = [String.fromCharCode(108,105,98,120,109,108,95,53,95,56,57,0), String.fromCharCode(112,108,117,103,103,101,100,95,122,95,54,55,0)];
          let bgvipxvodL = 5.0;
          let librrc0: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,56,95,49,50,0),false ], [String.fromCharCode(115,101,115,115,105,111,110,105,100,95,50,95,51,57,0),false ]]);
         attributedstringg += 3;
         iconwechatN += `${iconwechatN.length + 2}`;
         resendD.push(librrc0.size >> (Math.min(1, Math.abs(parseInt(`${bgvipxvodL}`)))));
         bgvipxvodL -= resendD.length * 3;
         librrc0.set(`${bgvipxvodL}`, 3);
      }
       let single7 = 5.0;
      while (5 < attributedstringg) {
         typesZ += `${(typesZ == String.fromCharCode(116,0) ? iconrightorangeb.length : typesZ.length)}`;
         break;
      }
         attributedstringg /= Math.max(3, 2 / (Math.max(8, iconrightorangeb.length)));
          let baselineM = String.fromCharCode(102,95,54,57,95,109,97,99,114,111,0);
          let ewarded0 = String.fromCharCode(116,95,54,49,95,117,95,49,57,0);
          let values1 = 4.0;
         single7 -= 1 ^ attributedstringg;
         baselineM += "1";
         ewarded0 += `${baselineM.length}`;
         values1 -= parseInt(`${values1}`);
         typesZ += `${iconrightorangeb.length}`;
      if (single7 > 3.9) {
         attributedstringg /= Math.max(5, hometeamfield4.length);
      }
         attributedstringg -= ((libfolly3 ? 3 : 2) * hometeamfield4.length);
      let sellm = libfolly3 ? !libfolly3 : libfolly3;
      do {
         libfolly3 = typesZ.length < 87;
         if (sellm) {
            break;
         }
      } while (sellm && (4.82 <= (single7 / 2.13)));
       let libffmpegkitw = false;
       let placeholders = false;
          let iconschedulem = 4.0;
          let plusm = false;
          let materialh: Map<any, any> = new Map([[String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,116,95,53,0),false ], [String.fromCharCode(113,95,50,48,95,107,108,97,121,116,110,0),false ]]);
         iconrightorangeb = [attributedstringg];
         iconschedulem /= Math.max(1 | parseInt(`${iconschedulem}`), 2);
         plusm = !plusm;
         materialh.set(`${iconschedulem}`, materialh.size);
         iconrightorangeb.push(hometeamfield4.length & parseInt(`${single7}`));
      let smallbrightnessO = attributedstringg >= 9244148;
      do {
          let buildi = true;
         attributedstringg %= Math.max(1, 3 % (Math.max(3, parseInt(`${single7}`))));
         buildi = buildi && !buildi;
         if (smallbrightnessO) {
            break;
         }
      } while ((attributedstringg == 4) && smallbrightnessO);
      let shoot0 = attributedstringg >= 7498132;
      do {
         attributedstringg -= (parseInt(`${single7}`) / (Math.max(1, (placeholders ? 2 : 1))));
         if (shoot0) {
            break;
         }
      } while (shoot0 && ((1 / (Math.max(8, attributedstringg))) >= 3 && 1 >= (hometeamfield4.length / (Math.max(1, attributedstringg)))));
      let anytime2 = single7 <= 6168797.0;
      do {
         single7 /= Math.max(1, 1);
         if (anytime2) {
            break;
         }
      } while ((4.74 <= single7 || 1.40 <= (4.74 - single7)) && anytime2);
      splash7 = `${a_titleu.size}`;
   }
    if (!targetVod) return 
    

      reactnativejsJ = [1 - inactive4.size];
      a_titleu = new Map([[`${layouty}`, (String.fromCharCode(87,0) == profileP ? (layouty ? 4 : 5) : profileP.length)]]);
      profileP += `${brightnessA.length}`;
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})

   let application5 = brightnessA == String.fromCharCode(103,52,100,0);
   do {
      brightnessA += `${profileP.length << (Math.min(Math.abs(3), 5))}`;
      if (application5) {
         break;
      }
   } while (application5 && (!profileP.endsWith(brightnessA)));
      sigmobt += `${sigmobt.length}`;
   while (profileP != String.fromCharCode(102,0) && brightnessA.length == 1) {
       let user2 = 5.0;
       let librrch: Map<any, any> = new Map([[String.fromCharCode(122,95,51,95,97,98,115,116,114,97,99,116,0),794], [String.fromCharCode(116,97,107,101,95,48,95,53,51,0),974], [String.fromCharCode(115,95,55,50,95,109,102,114,97,0),634]]);
       let iconarrowrightorange3 = false;
      if (1.7 >= user2) {
         iconarrowrightorange3 = !iconarrowrightorange3 && librrch.size >= 22;
      }
       let mimef = String.fromCharCode(99,107,112,116,95,120,95,53,0);
       let cornerF = String.fromCharCode(112,114,111,99,99,101,115,115,95,108,95,56,49,0);
      while (5 <= (librrch.size << (Math.min(Math.abs(1), 4))) && (user2 * 3.48) <= 5.16) {
          let libreactX = true;
          let helperc = String.fromCharCode(108,95,57,49,95,111,114,103,0);
         user2 *= 1;
         libreactX = (20 <= (helperc.length + (libreactX ? 20 : helperc.length)));
         break;
      }
      if (user2 > 4.51) {
          let downarrowH = String.fromCharCode(122,95,53,51,95,104,101,120,98,115,0);
          let iconwatchD = false;
          let audience6 = 1;
         librrch.set(mimef, (String.fromCharCode(121,0) == mimef ? audience6 : mimef.length));
         downarrowH = `${downarrowH.length ^ 1}`;
         iconwatchD = (3 == (downarrowH.length >> (Math.min(2, Math.abs((iconwatchD ? downarrowH.length : 3))))));
         audience6 *= ((iconwatchD ? 5 : 4) | 1);
      }
      let sentry0 = mimef == String.fromCharCode(56,97,48,113,57,120,117,0);
      do {
         mimef += `${2 * parseInt(`${user2}`)}`;
         if (sentry0) {
            break;
         }
      } while (sentry0 && ((parseInt(`${user2}`) + mimef.length) == 3));
      let contextx = 7409766 >= librrch.size;
      do {
          let graphicsX: Array<any> = [String.fromCharCode(107,95,55,95,105,112,99,0), String.fromCharCode(112,114,111,118,105,115,105,111,110,95,49,95,55,51,0), String.fromCharCode(98,95,56,57,95,108,105,110,109,97,116,104,0)];
         librrch = new Map([[`${librrch.size}`, librrch.size | 2]]);
         graphicsX.push(graphicsX.length);
         if (contextx) {
            break;
         }
      } while (((2 + librrch.size) < 5 && 2 < (cornerF.length + librrch.size)) && contextx);
      for (let v = 0; v < 2; v++) {
         cornerF = `${(String.fromCharCode(99,0) == mimef ? mimef.length : parseInt(`${user2}`))}`;
      }
      if (mimef.length <= 2) {
         librrch = new Map([[cornerF, cornerF.length - 1]]);
      }
         librrch = new Map([[`${iconarrowrightorange3}`, 1]]);
      profileP += `${reactnativejsJ.length}`;
      break;
   }
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return
      if (targetEpisode?.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni){
        return 
      }
      
      
      
      
      
      
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: CUASheetIconarrowright.CUAAttributedstring, 
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

      if (targetEpisode.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni) { 
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
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid, vodIsAdult));
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: CUASheetIconarrowright.CUAAudienceUmeng}))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function removeVideoFromDownloadThunk(
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
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
       let whatsappb = false;
    let libswscales = 2.0;
    let gmailt = 3;
    let yellowanimationliveH: Map<any, any> = new Map([[String.fromCharCode(99,111,100,97,98,108,101,95,118,95,55,56,0),912], [String.fromCharCode(116,116,97,99,104,109,101,110,116,95,109,95,55,51,0),957], [String.fromCharCode(115,95,57,57,95,116,97,100,100,0),680]]);
    let predictionw: Map<any, any> = new Map([[String.fromCharCode(113,95,56,51,95,118,109,97,102,109,111,116,105,111,110,100,115,112,0),474], [String.fromCharCode(117,95,56,50,95,114,101,115,105,122,105,110,103,0),824], [String.fromCharCode(97,95,56,57,95,114,101,101,110,97,98,108,101,0),647]]);
    let runtimeschedulerV = 1;
    let canvasE = false;
    let libturbomodulejsijniE = String.fromCharCode(100,99,116,95,102,95,57,53,0);
    let homeiconX = String.fromCharCode(104,111,115,116,115,95,54,95,49,0);
    let flipperY = 1;
    let guideQ = String.fromCharCode(114,103,98,116,111,95,106,95,53,49,0);
    let settingsI = String.fromCharCode(106,95,50,55,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
      canvasE = homeiconX == String.fromCharCode(51,0);
      whatsappb = !libturbomodulejsijniE.startsWith(`${canvasE}`);
   let homeactivei = 9284997.0 <= libswscales;
   do {
      libswscales /= Math.max(gmailt / (Math.max(runtimeschedulerV, 3)), 5);
      if (homeactivei) {
         break;
      }
   } while ((4 >= (2 >> (Math.min(5, homeiconX.length))) && (2.19 - libswscales) >= 5.81) && homeactivei);
   for (let f = 0; f < 1; f++) {
       let trophyL = String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,116,95,57,55,0);
       let mailr = true;
         mailr = !mailr;
          let libfabricjnid = false;
          let gifgoalbg7: Array<any> = [142, 658, 189];
         trophyL += `${gifgoalbg7.length}`;
         libfabricjnid = (!libfabricjnid ? libfabricjnid : libfabricjnid);
         gifgoalbg7.push(2);
      runtimeschedulerV <<= Math.min(5, Math.abs(((whatsappb ? 4 : 4))));
   }
       let bottomr: Array<any> = [String.fromCharCode(122,95,49,48,95,111,98,115,101,114,118,101,100,0), String.fromCharCode(115,117,98,109,118,95,51,95,57,49,0), String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,120,95,52,52,0)];
         bottomr.push(bottomr.length);
      if (3 > bottomr.length) {
         bottomr.push(bottomr.length);
      }
      while (4 == bottomr.length) {
         bottomr.push(bottomr.length & 1);
         break;
      }
      homeiconX += `${parseInt(`${libswscales}`)}`;
      libturbomodulejsijniE += `${(parseInt(`${libswscales}`) * (whatsappb ? 2 : 1))}`;
   while (Array.from(yellowanimationliveH.values()).includes(libswscales)) {
      yellowanimationliveH.set(`${whatsappb}`, ((whatsappb ? 4 : 5) >> (Math.min(2, Math.abs((canvasE ? 1 : 3))))));
      break;
   }
   for (let q = 0; q < 2; q++) {
      runtimeschedulerV -= parseInt(`${libswscales}`);
   }
      libswscales += parseInt(`${libswscales}`);
   while (gmailt > 1) {
       let iconarrowrightorangeN = 1;
       let assistn = 4;
       let fastforward1 = false;
         fastforward1 = 77 >= assistn && iconarrowrightorangeN >= 77;
         assistn >>= Math.min(Math.abs(iconarrowrightorangeN & assistn), 2);
         assistn ^= ((fastforward1 ? 3 : 5) | assistn);
         fastforward1 = iconarrowrightorangeN == 21 || 21 == assistn;
          let mime4 = 5.0;
         assistn >>= Math.min(Math.abs(2), 4);
         mime4 /= Math.max(2, 1 * parseInt(`${mime4}`));
      let g_imageT = assistn >= 6101417;
      do {
         assistn /= Math.max((iconarrowrightorangeN * (fastforward1 ? 4 : 1)), 2);
         if (g_imageT) {
            break;
         }
      } while (g_imageT && (iconarrowrightorangeN > 5));
      while ((iconarrowrightorangeN + assistn) <= 5 || 5 <= (5 + assistn)) {
         assistn %= Math.max(3, 2);
         break;
      }
         iconarrowrightorangeN %= Math.max(3, 5);
         assistn >>= Math.min(3, Math.abs((assistn | (fastforward1 ? 5 : 4))));
      runtimeschedulerV &= ((canvasE ? 3 : 2) - homeiconX.length);
      break;
   }
   if (homeiconX.startsWith(`${canvasE}`)) {
      canvasE = (((!whatsappb ? libturbomodulejsijniE.length : 60) - libturbomodulejsijniE.length) > 60);
   }
   let theme8 = 6441541 >= predictionw.size;
   do {
       let privilegeu = true;
       let rocketh = false;
      for (let p = 0; p < 3; p++) {
          let imagenetworkerr0: Array<any> = [928, 524];
          let subtextu = String.fromCharCode(115,111,110,111,95,122,95,56,52,0);
         rocketh = 36 == imagenetworkerr0.length || subtextu.length == 36;
      }
         rocketh = (!rocketh ? !privilegeu : !rocketh);
      let tumbnailB = rocketh ? !rocketh : rocketh;
      do {
         rocketh = !rocketh && privilegeu;
         if (tumbnailB) {
            break;
         }
      } while ((privilegeu) && tumbnailB);
      for (let k = 0; k < 2; k++) {
         privilegeu = privilegeu || !rocketh;
      }
      let klevinA = privilegeu ? !privilegeu : privilegeu;
      do {
         privilegeu = !rocketh;
         if (klevinA) {
            break;
         }
      } while ((!rocketh && !privilegeu) && klevinA);
      while (rocketh) {
         rocketh = (!rocketh ? !privilegeu : !rocketh);
         break;
      }
      predictionw = new Map([[libturbomodulejsijniE, 1 * runtimeschedulerV]]);
      if (theme8) {
         break;
      }
   } while (theme8 && (4 > (gmailt | predictionw.size) && 2 > (4 | gmailt)));
   while (5 == (gmailt << (Math.min(libturbomodulejsijniE.length, 5))) && (gmailt << (Math.min(libturbomodulejsijniE.length, 5))) == 5) {
      libturbomodulejsijniE += `${predictionw.size / 3}`;
      break;
   }
   if (3.92 <= (libswscales / (Math.max(5.81, 10)))) {
       let time_yzk = String.fromCharCode(108,95,49,49,95,103,101,110,101,114,97,116,101,0);
      let libbufferU = time_yzk.length >= 5499512;
      do {
          let disconnectedT: Array<any> = [563, 89];
          let thailandG: Map<any, any> = new Map([[String.fromCharCode(107,95,51,57,95,117,112,115,97,109,112,108,101,0),String.fromCharCode(101,120,105,115,116,95,55,95,50,54,0)], [String.fromCharCode(115,111,114,101,99,118,109,115,103,95,106,95,57,54,0),String.fromCharCode(118,101,99,116,95,48,95,50,57,0)]]);
         time_yzk += `${thailandG.size << (Math.min(disconnectedT.length, 5))}`;
         if (libbufferU) {
            break;
         }
      } while ((time_yzk.length >= 5) && libbufferU);
      let userT = time_yzk == String.fromCharCode(108,119,108,98,117,114,95,0);
      do {
         time_yzk = `${time_yzk.length / (Math.max(6, time_yzk.length))}`;
         if (userT) {
            break;
         }
      } while (userT && (time_yzk.length == time_yzk.length));
         time_yzk = `${time_yzk.length + time_yzk.length}`;
      gmailt %= Math.max(((canvasE ? 1 : 3) ^ (whatsappb ? 3 : 3)), 5);
   }
   let modeg = 8234492 >= runtimeschedulerV;
   do {
      runtimeschedulerV *= predictionw.size;
      if (modeg) {
         break;
      }
   } while ((2 > (predictionw.size * runtimeschedulerV) || (predictionw.size * runtimeschedulerV) > 2) && modeg);
   let private_m5 = 5318809.0 <= libswscales;
   do {
      libswscales /= Math.max(1, 3);
      if (private_m5) {
         break;
      }
   } while (private_m5 && (1 == predictionw.size));
   if ((3 % (Math.max(10, runtimeschedulerV))) == 1 && (yellowanimationliveH.size % 3) == 1) {
      yellowanimationliveH.set(libturbomodulejsijniE, runtimeschedulerV);
   }
      whatsappb = libturbomodulejsijniE.length < homeiconX.length;
      homeiconX = `${yellowanimationliveH.size}`;
      yellowanimationliveH = new Map([[`${flipperY}`, 3]]);
      predictionw.set(homeiconX, (homeiconX == String.fromCharCode(122,0) ? yellowanimationliveH.size : homeiconX.length));

        session.cancel(); 
      }
    }
    dispatch(removeVideoFromDownload(vod, vodSourceId, vodUrlNid))
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function removeVodFromDownloadThunk(
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    for (const episode of targetVod.episodes) {
      const allSession = await FFmpegKit.listSessions() 
      for (const session of allSession) {
        if (await session.getSessionId() === episode.ffmpegSession){
       let inewarchdefaultsb = false;
    let friendsJ = String.fromCharCode(103,101,116,112,97,100,100,114,115,95,48,95,49,48,0);
    let componentI = String.fromCharCode(109,95,50,48,95,112,114,105,118,107,101,121,0);
    let zhengpianY = false;
    let runtimescheduler8: Map<any, any> = new Map([[String.fromCharCode(109,105,120,95,51,95,53,54,0),false ], [String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,49,95,52,52,0),false ], [String.fromCharCode(115,116,114,103,108,111,98,95,52,95,56,52,0),false ]]);
    let iconarrowrightwhitem = 2.0;
    let libsentryu = 3;
    let iconsaveimageR = false;
    let relatedg = true;
    let vipsport1: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,99,112,121,95,100,95,53,54,0),String.fromCharCode(105,100,120,95,103,95,54,54,0)], [String.fromCharCode(100,105,114,101,99,116,105,111,110,95,114,95,57,54,0),String.fromCharCode(116,102,117,101,108,95,101,95,54,54,0)]]);
    let vietnamo = 1.0;
    let currentw: Array<any> = [635, 41, 791];
    let teamdetailsbgp = 1.0;
    let relatedG: Map<any, any> = new Map([[String.fromCharCode(118,95,54,48,95,101,120,105,102,0),696], [String.fromCharCode(119,95,52,48,95,97,114,114,97,121,0),195], [String.fromCharCode(102,111,111,116,98,97,108,108,95,117,95,50,55,0),444]]);
    let greenS = 2.0;
    let bannerM = String.fromCharCode(115,95,55,0);
    let changeV = String.fromCharCode(101,95,52,52,95,101,110,103,108,105,115,104,0);
      friendsJ += `${(2 - (inewarchdefaultsb ? 1 : 2))}`;
      iconsaveimageR = (iconarrowrightwhitem / (Math.max(runtimescheduler8.size, 4))) > 15.38;
      componentI = `${((inewarchdefaultsb ? 1 : 1) - 3)}`;
   while (friendsJ != String.fromCharCode(98,0)) {
       let libfollyk = false;
         libfollyk = libfollyk || libfollyk;
       let configQ = true;
      if (!libfollyk || configQ) {
          let views5 = String.fromCharCode(110,95,52,55,95,116,104,114,111,119,0);
         configQ = !configQ;
         views5 = `${views5.length >> (Math.min(Math.abs(2), 1))}`;
      }
      componentI += `${((zhengpianY ? 2 : 2) * runtimescheduler8.size)}`;
      break;
   }
       let template_g6 = String.fromCharCode(99,117,109,101,95,54,95,57,49,0);
       let turndownj = String.fromCharCode(112,95,52,52,95,105,110,116,101,103,114,105,116,121,0);
      if (template_g6 != turndownj) {
         turndownj += `${turndownj.length << (Math.min(Math.abs(1), 3))}`;
      }
      if (turndownj != String.fromCharCode(90,0) || template_g6 == String.fromCharCode(84,0)) {
         template_g6 = `${turndownj.length}`;
      }
       let runtimeschedulery = String.fromCharCode(107,95,53,95,106,97,99,107,0);
      for (let g = 0; g < 1; g++) {
          let whistleorange_: Map<any, any> = new Map([[String.fromCharCode(103,95,51,49,95,118,116,101,115,116,0),true ], [String.fromCharCode(102,105,108,116,95,48,95,51,49,0),false ], [String.fromCharCode(109,95,54,50,95,112,114,111,118,105,100,101,114,115,0),true ]]);
          let modelsS = false;
          let analyticj = 3.0;
          let zhengpianI = false;
          let cornerkicke = String.fromCharCode(109,95,57,55,95,115,99,114,101,101,110,112,114,101,115,115,111,0);
         turndownj = `${turndownj.length}`;
         whistleorange_ = new Map([[`${zhengpianI}`, 3 / (Math.max(2, cornerkicke.length))]]);
         modelsS = cornerkicke.length <= 49 || 25.57 <= analyticj;
         analyticj += ((zhengpianI ? 3 : 1) << (Math.min(Math.abs(1), 5)));
      }
         template_g6 = `${(String.fromCharCode(70,0) == turndownj ? template_g6.length : turndownj.length)}`;
      let eactf = turndownj.length <= 9433809;
      do {
          let typesl = false;
         turndownj = `${template_g6.length * turndownj.length}`;
         typesl = (!typesl ? typesl : !typesl);
         if (eactf) {
            break;
         }
      } while ((runtimeschedulery == String.fromCharCode(71,0) && turndownj != String.fromCharCode(71,0)) && eactf);
      libsentryu -= friendsJ.length / 2;
   if (2 <= (1 * libsentryu)) {
      inewarchdefaultsb = (22 > (runtimescheduler8.size << (Math.min(3, Math.abs((!zhengpianY ? 22 : runtimescheduler8.size))))));
   }
   while (vipsport1.size >= componentI.length) {
      componentI += `${parseInt(`${iconarrowrightwhitem}`)}`;
      break;
   }
   let runtimeI = zhengpianY ? !zhengpianY : zhengpianY;
   do {
      zhengpianY = (parseFloat(`${friendsJ.length}`) * vietnamo) >= 73.30;
      if (runtimeI) {
         break;
      }
   } while ((!zhengpianY || (1.29 + iconarrowrightwhitem) <= 5.53) && runtimeI);
   for (let j = 0; j < 1; j++) {
      libsentryu -= vipsport1.size;
   }
   if (4.90 < (3.69 + iconarrowrightwhitem)) {
      relatedg = inewarchdefaultsb;
   }
   for (let n = 0; n < 3; n++) {
       let types5 = String.fromCharCode(120,95,52,49,95,109,97,110,97,103,101,0);
       let whitetickJ: Array<any> = [739, 975, 626];
       let nbatrophyV = String.fromCharCode(100,95,55,95,112,117,110,99,116,117,97,116,105,111,110,0);
       let typingV = 2.0;
      let shrink3 = String.fromCharCode(102,109,53,0) == types5;
      do {
         types5 += `${types5.length | parseInt(`${typingV}`)}`;
         if (shrink3) {
            break;
         }
      } while (((5 >> (Math.min(2, types5.length))) >= 1 || 3 >= (whitetickJ.length >> (Math.min(Math.abs(5), 3)))) && shrink3);
      while (2 <= (types5.length % (Math.max(1, 9))) || 5 <= (1 % (Math.max(2, types5.length)))) {
          let green1 = String.fromCharCode(111,95,57,53,95,105,102,111,114,109,97,116,0);
          let layoutK = 4;
         whitetickJ.push(parseInt(`${typingV}`));
         green1 = `${layoutK & 1}`;
         layoutK ^= 3;
         break;
      }
          let sliderS = 0;
          let sharewhitet: Map<any, any> = new Map([[String.fromCharCode(104,117,100,95,113,95,51,49,0),String.fromCharCode(110,95,53,55,95,118,111,105,99,101,109,97,105,108,0)], [String.fromCharCode(119,95,53,53,95,112,97,99,107,105,110,103,0),String.fromCharCode(109,97,107,101,100,112,107,103,95,115,95,52,49,0)], [String.fromCharCode(105,109,100,99,116,95,120,95,56,50,0),String.fromCharCode(100,112,110,97,109,101,95,99,95,57,53,0)]]);
         whitetickJ.push(sharewhitet.size % 2);
         sliderS |= sliderS * 1;
         sharewhitet = new Map([[`${sliderS}`, sliderS & 2]]);
       let step1: Map<any, any> = new Map([[String.fromCharCode(101,120,112,97,110,100,101,100,95,120,95,49,55,0),String.fromCharCode(100,95,53,51,95,109,115,109,112,101,103,100,97,116,97,0)], [String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,99,95,52,48,0),String.fromCharCode(113,117,111,116,105,101,110,116,95,100,95,53,53,0)]]);
       let videocommonJ: Map<any, any> = new Map([[String.fromCharCode(108,95,52,0),String.fromCharCode(116,114,120,116,95,104,95,52,49,0)], [String.fromCharCode(103,114,97,100,105,101,110,116,115,95,117,95,54,50,0),String.fromCharCode(98,105,110,100,105,110,103,95,56,95,49,0)], [String.fromCharCode(117,110,98,111,120,101,100,95,116,95,49,56,0),String.fromCharCode(104,119,97,99,99,101,108,115,95,120,95,53,52,0)]]);
          let questA = 1.0;
          let descT = String.fromCharCode(114,95,52,55,95,116,101,115,116,114,97,110,115,0);
         types5 += `${(String.fromCharCode(52,0) == types5 ? nbatrophyV.length : types5.length)}`;
         questA -= descT.length;
         descT = `${parseInt(`${questA}`)}`;
         step1 = new Map([[`${step1.size}`, nbatrophyV.length]]);
         step1 = new Map([[`${whitetickJ.length}`, 3 | types5.length]]);
       let scorepopsoundJ = 5.0;
      let iconclosewhite3 = 7955963 >= nbatrophyV.length;
      do {
          let weiboS = String.fromCharCode(120,95,55,49,95,105,110,100,105,99,105,101,115,0);
          let reminderY = 5;
         nbatrophyV += `${reminderY + 1}`;
         weiboS += `${weiboS.length * 1}`;
         reminderY *= 2 << (Math.min(4, weiboS.length));
         if (iconclosewhite3) {
            break;
         }
      } while ((!nbatrophyV.startsWith(`${typingV}`)) && iconclosewhite3);
         scorepopsoundJ *= parseInt(`${scorepopsoundJ}`) ^ 1;
      let checkbox3 = 9370920 >= nbatrophyV.length;
      do {
          let defaultlogoG = 3.0;
          let bridgeS = 3;
          let selected4 = 2.0;
          let libcxxcomponentsb = String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,110,95,55,57,0);
          let librrcw: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,115,95,110,95,52,55,0),115], [String.fromCharCode(121,109,111,100,101,95,116,95,55,57,0),446]]);
         nbatrophyV += "1";
         defaultlogoG *= parseFloat(`${3 % (Math.max(4, libcxxcomponentsb.length))}`);
         bridgeS >>= Math.min(4, Math.abs(librrcw.size / (Math.max(libcxxcomponentsb.length, 1))));
         selected4 += (parseFloat(`${libcxxcomponentsb == String.fromCharCode(66,0) ? parseInt(`${selected4}`) : libcxxcomponentsb.length}`));
         librrcw.set(`${defaultlogoG}`, libcxxcomponentsb.length);
         if (checkbox3) {
            break;
         }
      } while ((nbatrophyV.length > parseInt(`${typingV}`)) && checkbox3);
      while (scorepopsoundJ == 5.17) {
          let whistleorangeV = String.fromCharCode(113,95,57,51,95,105,112,118,0);
          let privacyK = 4;
          let x_playerG: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,113,95,105,95,56,49,0),694], [String.fromCharCode(97,110,121,95,51,95,53,50,0),193]]);
         scorepopsoundJ += (String.fromCharCode(68,0) == types5 ? parseInt(`${scorepopsoundJ}`) : types5.length);
         whistleorangeV += "1";
         privacyK /= Math.max(4, whistleorangeV.length);
         x_playerG = new Map([[`${x_playerG.size}`, x_playerG.size]]);
         break;
      }
      libsentryu %= Math.max((types5.length & (zhengpianY ? 2 : 5)), 2);
   }
       let privatechatbg9 = true;
       let componentU = 1.0;
       let indicatorC: Map<any, any> = new Map([[String.fromCharCode(122,95,55,52,95,105,112,112,108,101,0),738], [String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,95,118,95,57,51,0),224]]);
         componentU -= 2 & parseInt(`${componentU}`);
      for (let v = 0; v < 3; v++) {
          let championI = String.fromCharCode(114,95,56,51,95,110,111,110,110,101,103,97,116,105,118,101,0);
          let morex: Map<any, any> = new Map([[String.fromCharCode(106,95,57,54,95,98,97,115,105,99,115,0),true ], [String.fromCharCode(117,95,57,56,95,105,110,116,101,114,111,112,0),true ]]);
         privatechatbg9 = !privatechatbg9 && 93.44 > componentU;
         championI = "1";
         morex = new Map([[`${morex.size}`, morex.size | 1]]);
      }
         privatechatbg9 = indicatorC.size <= 80;
      while (3.87 < (componentU + 3.31)) {
          let debugy = String.fromCharCode(114,101,109,111,118,101,95,118,95,53,55,0);
          let connectionR: Array<any> = [String.fromCharCode(100,105,102,102,95,121,95,55,48,0), String.fromCharCode(118,95,56,48,95,105,110,111,117,116,115,0)];
          let bodanZ = String.fromCharCode(98,95,52,50,95,114,101,97,99,116,105,111,110,115,0);
         privatechatbg9 = connectionR.length > 19 && debugy.length > 19;
         debugy += `${bodanZ.length}`;
         connectionR.push(3 >> (Math.min(3, bodanZ.length)));
         break;
      }
         componentU -= parseInt(`${componentU}`) * indicatorC.size;
       let filledb = String.fromCharCode(117,95,55,55,95,109,97,114,107,115,0);
         componentU /= Math.max(4, 3);
         indicatorC.set(`${filledb}`, 3 >> (Math.min(3, Math.abs(indicatorC.size))));
          let rulesF = 3;
          let lefti = String.fromCharCode(102,95,57,49,95,110,119,105,115,101,0);
          let libloggerL = 0.0;
         indicatorC.set(`${privatechatbg9}`, (2 >> (Math.min(1, Math.abs((privatechatbg9 ? 5 : 2))))));
         rulesF &= parseInt(`${libloggerL}`) + rulesF;
         lefti = `${parseInt(`${libloggerL}`) & rulesF}`;
      inewarchdefaultsb = 94.17 >= iconarrowrightwhitem;
       let private_6J = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,95,110,95,49,48,0);
       let showlessH = String.fromCharCode(99,104,97,110,103,105,110,103,95,109,95,56,50,0);
      for (let x = 0; x < 1; x++) {
          let reneww = 4.0;
         showlessH += `${(showlessH == String.fromCharCode(105,0) ? parseInt(`${reneww}`) : showlessH.length)}`;
      }
      for (let g = 0; g < 1; g++) {
         showlessH += `${(showlessH == String.fromCharCode(111,0) ? private_6J.length : showlessH.length)}`;
      }
      libsentryu >>= Math.min(3, Math.abs(parseInt(`${iconarrowrightwhitem}`)));
   for (let a = 0; a < 3; a++) {
      zhengpianY = !relatedg;
   }
   while (inewarchdefaultsb) {
       let iconorientatione = String.fromCharCode(109,95,53,57,95,115,104,97,114,112,101,110,105,110,103,0);
       let pathf = true;
       let blackL: Map<any, any> = new Map([[String.fromCharCode(107,95,57,95,115,119,105,116,99,104,98,97,115,101,0),String.fromCharCode(109,111,110,111,116,111,110,105,116,121,95,119,95,49,53,0)], [String.fromCharCode(107,95,53,53,95,114,101,99,111,103,110,105,116,105,111,110,0),String.fromCharCode(112,111,115,101,115,95,105,95,57,52,0)], [String.fromCharCode(110,111,100,111,119,110,95,113,95,49,53,0),String.fromCharCode(117,110,100,101,102,105,110,101,100,95,98,95,51,55,0)]]);
       let yingb = String.fromCharCode(115,95,52,48,95,105,115,110,97,110,0);
      let minimizeV = yingb.length <= 5054776;
      do {
          let floatingG = 3.0;
          let unselectedU = String.fromCharCode(99,97,110,99,101,108,95,104,95,49,51,0);
         yingb += `${parseInt(`${floatingG}`)}`;
         floatingG -= unselectedU.length;
         unselectedU += `${unselectedU.length / (Math.max(unselectedU.length, 4))}`;
         if (minimizeV) {
            break;
         }
      } while (minimizeV && ((yingb.length / 2) == 1 || 2 == (blackL.size / (Math.max(yingb.length, 2)))));
         blackL = new Map([[yingb, (String.fromCharCode(106,0) == yingb ? yingb.length : (pathf ? 5 : 1))]]);
         iconorientatione += `${((pathf ? 4 : 3) + 2)}`;
         blackL = new Map([[`${blackL.size}`, blackL.size]]);
          let logink = String.fromCharCode(97,95,53,54,95,115,116,97,114,116,0);
          let combineQ = 3;
          let imagenomoredataf: Array<any> = [String.fromCharCode(101,108,105,115,105,111,110,95,52,95,56,55,0), String.fromCharCode(119,102,101,120,95,50,95,55,56,0)];
         iconorientatione = `${yingb.length}`;
         logink = `${imagenomoredataf.length ^ 3}`;
         combineQ += logink.length;
         imagenomoredataf.push(logink.length - imagenomoredataf.length);
         yingb += `${((pathf ? 4 : 1))}`;
      for (let t = 0; t < 1; t++) {
         blackL = new Map([[`${pathf}`, (iconorientatione == String.fromCharCode(122,0) ? (pathf ? 3 : 2) : iconorientatione.length)]]);
      }
      let playercommono = yingb.length <= 7489909;
      do {
          let disconnectedk: Map<any, any> = new Map([[String.fromCharCode(99,104,111,112,95,116,95,56,54,0),213], [String.fromCharCode(97,95,57,57,95,102,105,108,108,112,0),808], [String.fromCharCode(118,95,55,95,97,112,112,101,110,100,0),306]]);
          let rocketQ = String.fromCharCode(115,95,56,48,95,98,105,110,107,100,115,112,0);
          let termsk = false;
          let invitea: Array<any> = [764, 101, 454];
         yingb = `${(rocketQ == String.fromCharCode(82,0) ? rocketQ.length : (termsk ? 3 : 2))}`;
         disconnectedk.set(`${invitea.length}`, invitea.length >> (Math.min(Math.abs(2), 3)));
         termsk = (invitea.length % (Math.max(disconnectedk.size, 3))) <= 60;
         if (playercommono) {
            break;
         }
      } while ((!pathf || 3 >= yingb.length) && playercommono);
      let shirtP = pathf ? !pathf : pathf;
      do {
         pathf = !iconorientatione.startsWith(`${pathf}`);
         if (shirtP) {
            break;
         }
      } while ((pathf) && shirtP);
      if (yingb.startsWith(`${pathf}`)) {
          let borderlessX = String.fromCharCode(109,109,105,117,116,105,108,115,95,116,95,54,53,0);
         yingb += `${((pathf ? 1 : 2) >> (Math.min(Math.abs(1), 5)))}`;
         borderlessX += `${borderlessX.length << (Math.min(Math.abs(2), 3))}`;
      }
          let guide9 = String.fromCharCode(99,108,97,122,122,95,108,95,49,51,0);
          let langkey5 = String.fromCharCode(98,111,116,116,108,101,110,101,99,107,95,112,95,50,54,0);
         yingb += `${blackL.size}`;
         guide9 = `${langkey5.length}`;
         langkey5 = `${langkey5.length}`;
      if (!pathf) {
         blackL.set(`${yingb}`, (String.fromCharCode(72,0) == yingb ? yingb.length : blackL.size));
      }
      inewarchdefaultsb = !inewarchdefaultsb;
      break;
   }
      vietnamo *= parseFloat(`${parseInt(`${iconarrowrightwhitem}`) * 2}`);
   if (iconsaveimageR) {
      iconsaveimageR = 84 <= componentI.length;
   }
   if (iconarrowrightwhitem > 4.1) {
      iconarrowrightwhitem *= friendsJ.length;
   }
   for (let q = 0; q < 1; q++) {
      componentI += "2";
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

export function clearQueueOnAppStart(): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: mayi_EmptySmall[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        if (episode.status === CUASheetIconarrowright.CUAAudienceUmeng){
       let nextA = String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,113,95,52,50,0);
    let whatsappf = String.fromCharCode(104,95,52,50,95,112,108,97,99,101,104,111,108,100,101,114,0);
    let iconstarR = 0;
    let incidentt = 0;
    let googlev = 3.0;
    let kickn = 0.0;
    let predictionbannerF = 2;
    let report4 = false;
    let footballtrophy7 = 2.0;
    let shirtc: Map<any, any> = new Map([[String.fromCharCode(107,95,54,95,114,111,108,108,105,110,103,0),66], [String.fromCharCode(99,115,99,104,101,109,101,95,106,95,57,56,0),257]]);
       let middlewareY = 4;
       let executorX = 3.0;
       let nativemoduleF = String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,95,119,95,53,0);
      let iconqqg = nativemoduleF == String.fromCharCode(57,107,114,115,100,101,108,0);
      do {
         nativemoduleF += `${nativemoduleF.length | middlewareY}`;
         if (iconqqg) {
            break;
         }
      } while ((nativemoduleF.length >= 2) && iconqqg);
      while (executorX > 4.75) {
         nativemoduleF += `${nativemoduleF.length << (Math.min(Math.abs(2), 5))}`;
         break;
      }
      if (nativemoduleF.length >= 3) {
         nativemoduleF += `${middlewareY ^ 3}`;
      }
         nativemoduleF = "1";
      while (5 >= (parseInt(`${executorX}`) / (Math.max(nativemoduleF.length, 4)))) {
         nativemoduleF = `${nativemoduleF.length - parseInt(`${executorX}`)}`;
         break;
      }
          let logoY: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,101,110,100,95,104,95,50,0),false ], [String.fromCharCode(100,95,53,50,95,111,118,101,114,105,100,100,101,110,0),true ]]);
          let dependenciesy = String.fromCharCode(121,95,53,57,95,121,100,97,121,0);
          let photoy = String.fromCharCode(109,97,105,108,95,110,95,53,57,0);
         nativemoduleF = `${(photoy == String.fromCharCode(50,0) ? dependenciesy.length : photoy.length)}`;
         logoY = new Map([[`${logoY.size}`, logoY.size << (Math.min(Math.abs(3), 5))]]);
         dependenciesy = `${2 & logoY.size}`;
      while ((executorX / (Math.max(nativemoduleF.length, 10))) >= 2.84) {
         executorX -= middlewareY;
         break;
      }
      for (let d = 0; d < 2; d++) {
         executorX += 1;
      }
          let signinupl = 0.0;
          let iconnewssharet = String.fromCharCode(116,95,56,55,95,100,101,118,112,111,108,108,0);
          let mappingh = String.fromCharCode(105,95,49,55,95,111,112,101,114,97,116,111,114,0);
         executorX *= iconnewssharet.length;
         signinupl += parseFloat(`${1 & mappingh.length}`);
         iconnewssharet = `${1 >> (Math.min(1, mappingh.length))}`;
      incidentt &= nativemoduleF.length;
      whatsappf += "2";
       let telemetry1 = 1.0;
       let inactiveI = 4;
       let g_countP = String.fromCharCode(105,115,115,117,101,115,95,101,95,52,54,0);
          let libavutilx = String.fromCharCode(106,95,50,55,95,114,101,112,108,97,99,105,110,103,0);
         g_countP = `${inactiveI / 2}`;
         libavutilx = `${3 * libavutilx.length}`;
          let ecopy_kuk: Array<any> = [941, 422];
          let darkS = 4.0;
          let othery = false;
         telemetry1 -= parseFloat(`${2}`);
         ecopy_kuk.push(parseInt(`${darkS}`) * 1);
         darkS -= parseFloat(`${ecopy_kuk.length * parseInt(`${darkS}`)}`);
         othery = 47.15 <= darkS;
         telemetry1 -= parseFloat(`${2}`);
         telemetry1 /= Math.max(parseFloat(`${inactiveI}`), 2);
      let tailq = 6755862 <= g_countP.length;
      do {
         g_countP += `${parseInt(`${telemetry1}`) << (Math.min(1, Math.abs(1)))}`;
         if (tailq) {
            break;
         }
      } while (tailq && (2.52 > telemetry1));
         g_countP = "1";
         g_countP += `${inactiveI}`;
      if (1 <= inactiveI) {
          let c_hashy = 0;
          let hoverC: Array<any> = [979, 372, 137];
          let uploadP: Array<any> = [373, 294];
          let analyticsi = false;
          let predictionbannersharedt = 5.0;
         inactiveI /= Math.max(4, uploadP.length);
         c_hashy %= Math.max(5, hoverC.length >> (Math.min(Math.abs(3), 3)));
         hoverC = [c_hashy];
         uploadP = [c_hashy % 1];
         analyticsi = !analyticsi || 99.17 >= predictionbannersharedt;
         predictionbannersharedt += c_hashy + hoverC.length;
      }
      let layoutT = telemetry1 >= 9392232.0;
      do {
         telemetry1 -= parseFloat(`${inactiveI | parseInt(`${telemetry1}`)}`);
         if (layoutT) {
            break;
         }
      } while ((4.96 == telemetry1) && layoutT);
      incidentt >>= Math.min(Math.abs((String.fromCharCode(86,0) == whatsappf ? parseInt(`${kickn}`) : whatsappf.length)), 3);
      whatsappf = `${parseInt(`${googlev}`)}`;
       let iconrightorangeU = 5.0;
       let whatsapp4: Array<any> = [380, 5];
       let userB = false;
         iconrightorangeU *= (parseFloat(`${3 >> (Math.min(5, Math.abs((userB ? 1 : 4))))}`));
      let indicatorR = userB ? !userB : userB;
      do {
          let cricketI: Map<any, any> = new Map([[String.fromCharCode(101,120,112,97,110,115,105,111,110,95,50,95,51,57,0),true ], [String.fromCharCode(120,99,111,100,101,95,105,95,53,57,0),true ]]);
          let orangeuparrowq = 4.0;
         userB = whatsapp4.includes(iconrightorangeU);
         cricketI = new Map([[`${cricketI.size}`, parseInt(`${orangeuparrowq}`) / (Math.max(1, cricketI.size))]]);
         orangeuparrowq += cricketI.size;
         if (indicatorR) {
            break;
         }
      } while ((2.47 >= (2.20 + iconrightorangeU) || !userB) && indicatorR);
      let tempnodataw = userB ? !userB : userB;
      do {
          let homeplayerk = false;
         userB = whatsapp4.length > 35 && homeplayerk;
         if (tempnodataw) {
            break;
         }
      } while ((1.56 >= (iconrightorangeU + 5.68) || !userB) && tempnodataw);
      if (parseInt(`${iconrightorangeU}`) == whatsapp4.length) {
         whatsapp4 = [3 >> (Math.min(Math.abs(parseInt(`${iconrightorangeU}`)), 2))];
      }
         iconrightorangeU += parseFloat(`${parseInt(`${iconrightorangeU}`) % (Math.max(8, whatsapp4.length))}`);
         whatsapp4 = [parseInt(`${iconrightorangeU}`) ^ 3];
          let iconviewergifY = 3.0;
          let componentregistryG = 3;
         whatsapp4 = [parseInt(`${iconviewergifY}`) % (Math.max(10, whatsapp4.length))];
         iconviewergifY -= parseFloat(`${componentregistryG}`);
       let filedG = true;
       let live9 = true;
       let basketballtrophyW = 0.0;
      nextA = "3";
      incidentt <<= Math.min(Math.abs(iconstarR - 2), 2);
       let fastforwardh = String.fromCharCode(118,95,51,52,95,109,97,114,107,101,114,0);
       let rulesd = String.fromCharCode(114,111,117,116,101,95,56,95,54,50,0);
       let ajaxT = String.fromCharCode(101,95,52,52,95,101,120,112,105,114,101,100,0);
         ajaxT = `${1 + fastforwardh.length}`;
      if (ajaxT.length > 1) {
          let humidityo: Array<any> = [156, 946];
          let videojsm = 2;
          let t_countr = String.fromCharCode(109,97,105,110,115,116,97,103,101,95,113,95,57,54,0);
         rulesd += `${videojsm / (Math.max(4, humidityo.length))}`;
         humidityo.push(t_countr.length * t_countr.length);
         videojsm -= 1;
      }
      let user8 = String.fromCharCode(103,118,50,106,104,109,97,0) == rulesd;
      do {
         rulesd += `${ajaxT.length}`;
         if (user8) {
            break;
         }
      } while ((1 <= rulesd.length || fastforwardh.length <= 1) && user8);
      for (let d = 0; d < 3; d++) {
          let plusi = 0.0;
          let headerP = 1.0;
          let orientationu = 3.0;
          let nativemoduleu = 1.0;
          let areaw = 2;
         fastforwardh = `${ajaxT.length % (Math.max(2, 7))}`;
         plusi += parseInt(`${plusi}`) << (Math.min(3, Math.abs(parseInt(`${orientationu}`))));
         headerP /= Math.max(1, 4);
         orientationu -= parseFloat(`${2}`);
         nativemoduleu *= parseInt(`${headerP}`) & parseInt(`${nativemoduleu}`);
         areaw *= 1 / (Math.max(parseInt(`${plusi}`), 9));
      }
          let sinah = String.fromCharCode(120,95,53,48,95,114,101,102,101,114,0);
          let rewardvideoj = false;
         rulesd += `${rulesd.length}`;
         sinah += `${2 >> (Math.min(2, sinah.length))}`;
         rewardvideoj = sinah.length <= sinah.length;
      let renewX = String.fromCharCode(117,121,53,53,95,103,104,119,55,0) == fastforwardh;
      do {
         fastforwardh = `${rulesd.length}`;
         if (renewX) {
            break;
         }
      } while ((fastforwardh != String.fromCharCode(51,0) && 2 <= rulesd.length) && renewX);
         ajaxT = `${(String.fromCharCode(81,0) == ajaxT ? rulesd.length : ajaxT.length)}`;
         ajaxT = "3";
      if (rulesd == String.fromCharCode(121,0) && ajaxT.length == 3) {
         rulesd += `${1 | rulesd.length}`;
      }
      nextA += `${rulesd.length * ajaxT.length}`;
   while (nextA.length <= 1) {
      iconstarR *= parseInt(`${googlev}`) + predictionbannerF;
      break;
   }
      report4 = 38.51 <= kickn || whatsappf.length <= 85;
      whatsappf = `${nextA.length}`;

          RNFetchBlob.fs.unlink(episode.videoPath).catch()
          dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, {progress: {percentage: 0}, status: CUASheetIconarrowright.CUAFlipperTurndown, ffmpegSession: null, sizeInBytes: 0}))
          
        }
      }
    }

    dispatch(resetQueue())
  }
}

export function restartVideoDownloadThunk (
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
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
      status: CUASheetIconarrowright.CUAAudienceUmeng, 
      sizeInBytes: 0
    }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, targetVod.vodIsAdult))
  }
}

export function pauseVideoDownloadThunk (
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
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
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni, ffmpegSession: null}))


    const newState = getState().downloadVideoReducer
    if (newState.queue.length === 0) return
    if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
    dispatch(resumeFirstVideoDownload())
  }
}

function resumeVideoDownloadThunk(
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
  ): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
  return async function (dispatch, getState) {
    const initialState = getState().downloadVideoReducer
    const initialPercentage = initialState.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      ?.progress.percentage; 

    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status:CUASheetIconarrowright.CUAAudienceUmeng}))

    const isAdult = initialState.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === CUASheetIconarrowright.CUAAudienceUmeng){
       let auto_ta = true;
    let small9: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,95,110,95,51,53,0),523], [String.fromCharCode(111,95,48,95,109,101,109,98,101,114,115,104,105,112,0),166], [String.fromCharCode(105,110,118,101,114,115,101,95,97,95,49,54,0),252]]);
    let yellowtoredu: Map<any, any> = new Map([[String.fromCharCode(112,95,51,53,95,99,109,105,111,0),String.fromCharCode(103,95,51,55,95,110,105,100,99,98,98,0)], [String.fromCharCode(105,95,51,52,95,118,111,116,101,115,0),String.fromCharCode(109,95,49,52,95,105,110,102,105,110,105,116,101,0)], [String.fromCharCode(114,101,115,105,100,117,97,108,95,112,95,50,57,0),String.fromCharCode(107,95,53,55,95,117,112,100,97,116,101,0)]]);
    let yellowtoredv = String.fromCharCode(108,97,118,117,95,53,95,56,53,0);
    let refreshborderlessO = 2.0;
    let borderlessI = 3.0;
    let stylesl: Array<any> = [757, 121, 817];
   while (yellowtoredv.length > parseInt(`${borderlessI}`)) {
      borderlessI -= parseInt(`${borderlessI}`) / (Math.max(7, parseInt(`${refreshborderlessO}`)));
      break;
   }
      refreshborderlessO += stylesl.length * 1;
   let basketballP = yellowtoredv.length >= 8922467;
   do {
      yellowtoredv += `${yellowtoredu.size}`;
      if (basketballP) {
         break;
      }
   } while ((stylesl.length == 1) && basketballP);
   while (yellowtoredv.length < 1 || !auto_ta) {
       let reducerQ = String.fromCharCode(105,95,49,56,95,97,108,103,115,0);
       let dialog8 = 3;
       let elementsz = String.fromCharCode(107,95,49,54,95,99,108,97,115,104,0);
       let googlem = 3.0;
       let rnewarchdefaultso: Map<any, any> = new Map([[String.fromCharCode(116,95,51,52,95,100,101,99,111,100,101,0),109], [String.fromCharCode(97,110,115,119,101,114,115,95,120,95,56,49,0),457], [String.fromCharCode(115,104,117,116,116,101,114,95,116,95,56,0),249]]);
          let countdown6 = String.fromCharCode(106,95,52,54,95,109,117,108,116,105,112,108,121,120,0);
          let saveR = 4.0;
         rnewarchdefaultso.set(`${elementsz}`, elementsz.length);
         countdown6 = `${parseInt(`${saveR}`)}`;
         saveR /= Math.max(parseInt(`${saveR}`) | 3, 4);
      while (rnewarchdefaultso.size >= 2) {
          let uimanagerG = 2.0;
         reducerQ = `${parseInt(`${googlem}`) >> (Math.min(Math.abs(2), 3))}`;
         uimanagerG -= parseFloat(`${parseInt(`${uimanagerG}`) | parseInt(`${uimanagerG}`)}`);
         break;
      }
      for (let i = 0; i < 1; i++) {
         rnewarchdefaultso.set(`${dialog8}`, rnewarchdefaultso.size % 1);
      }
      for (let r = 0; r < 1; r++) {
          let matchinactivea: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,111,114,95,117,95,49,53,0),true ], [String.fromCharCode(112,114,105,118,97,116,101,95,119,95,56,53,0),true ]]);
          let placeholderx = String.fromCharCode(100,105,103,105,116,95,121,95,50,50,0);
          let gradlewk = String.fromCharCode(112,115,100,115,112,95,110,95,52,49,0);
          let spinnerM: Array<any> = [645, 493, 922];
          let classess = 0.0;
         reducerQ = `${dialog8}`;
         matchinactivea.set(`${placeholderx}`, matchinactivea.size * placeholderx.length);
         gradlewk += `${spinnerM.length}`;
         spinnerM = [1 + placeholderx.length];
         classess += parseFloat(`${spinnerM.length}`);
      }
         rnewarchdefaultso.set(elementsz, 3 << (Math.min(5, Math.abs(parseInt(`${googlem}`)))));
       let bootsplashe = 2.0;
       let floater_ = 1.0;
      for (let s = 0; s < 3; s++) {
          let filledg = String.fromCharCode(109,111,117,116,104,95,120,95,55,55,0);
          let become5: Map<any, any> = new Map([[String.fromCharCode(98,95,49,53,95,99,111,110,99,101,97,108,109,101,110,116,0),772], [String.fromCharCode(116,101,114,109,95,121,95,51,49,0),649]]);
          let incidentI = String.fromCharCode(100,101,115,99,114,95,116,95,52,50,0);
         dialog8 -= rnewarchdefaultso.size ^ reducerQ.length;
         filledg += `${filledg.length}`;
         become5 = new Map([[`${become5.size}`, 2 ^ filledg.length]]);
         incidentI = `${incidentI.length * 1}`;
      }
      let penaltyshootj = bootsplashe <= 6455297.0;
      do {
          let topong: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,104,95,56,0),645], [String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,103,95,55,52,0),214]]);
          let shirtK = String.fromCharCode(117,95,50,49,95,97,100,97,112,116,115,0);
          let mappingL: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,115,105,100,101,95,103,95,56,56,0),String.fromCharCode(119,95,50,53,95,104,111,114,105,122,111,110,116,97,108,0)], [String.fromCharCode(104,112,114,101,100,95,121,95,49,49,0),String.fromCharCode(102,117,110,103,105,98,108,101,95,52,95,49,48,48,0)]]);
         bootsplashe *= (parseFloat(`${String.fromCharCode(70,0) == elementsz ? mappingL.size : elementsz.length}`));
         topong.set(shirtK, topong.size);
         shirtK += `${topong.size ^ shirtK.length}`;
         mappingL = new Map([[`${topong.size}`, shirtK.length % 1]]);
         if (penaltyshootj) {
            break;
         }
      } while (penaltyshootj && ((2.92 * bootsplashe) == 2.69 && 1.7 == (bootsplashe + 2.92)));
      if (reducerQ.includes(`${googlem}`)) {
         reducerQ = `${1 * parseInt(`${bootsplashe}`)}`;
      }
      while ((floater_ + parseFloat(`${reducerQ.length}`)) == 4.43 || 1 == (reducerQ.length + parseInt(`${floater_}`))) {
         reducerQ += `${(elementsz == String.fromCharCode(72,0) ? dialog8 : elementsz.length)}`;
         break;
      }
         rnewarchdefaultso.set(elementsz, reducerQ.length);
          let episodesw: Array<any> = [150, 281, 490];
          let phonesharej = 1.0;
         reducerQ = `${2 << (Math.min(5, reducerQ.length))}`;
         episodesw = [1];
         phonesharej += parseFloat(`${episodesw.length}`);
      let sheetR = bootsplashe <= 8326482.0;
      do {
         bootsplashe += parseFloat(`${dialog8 / 1}`);
         if (sheetR) {
            break;
         }
      } while ((1.29 <= (floater_ / (Math.max(bootsplashe, 1))) || (floater_ / 1.29) <= 2.20) && sheetR);
          let q_hashR = 4.0;
          let playercommonD = true;
         elementsz = `${dialog8}`;
         q_hashR -= (parseFloat(`${parseInt(`${q_hashR}`) - (playercommonD ? 2 : 1)}`));
         playercommonD = playercommonD && q_hashR == 44.41;
      let gradle5 = 7153559.0 >= bootsplashe;
      do {
         bootsplashe *= parseFloat(`${reducerQ.length}`);
         if (gradle5) {
            break;
         }
      } while (gradle5 && (5 <= elementsz.length));
      yellowtoredv = `${(reducerQ == String.fromCharCode(115,0) ? reducerQ.length : stylesl.length)}`;
      break;
   }
   while (1.60 == refreshborderlessO) {
      refreshborderlessO -= parseInt(`${refreshborderlessO}`);
      break;
   }
      stylesl.push(small9.size);

        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(initialPercentage + percentage, 100) 
          }
        }))
      }
    }, 2000)
    
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni) FFmpegKit.cancel(currentState.ffmpegSession ?? undefined)
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
    }

    const onDownloadEnd = async () => {
       let tickedE: Map<any, any> = new Map([[String.fromCharCode(109,111,116,99,111,109,112,95,113,95,56,57,0),false ], [String.fromCharCode(115,95,55,49,95,115,116,97,116,105,99,0),true ], [String.fromCharCode(99,104,97,110,103,101,100,104,95,120,95,49,56,0),true ]]);
    let completeL = String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,52,95,53,50,0);
    let foregroundM = 2.0;
    let libreactnativeblobJ = String.fromCharCode(98,95,52,49,95,100,105,97,109,101,116,101,114,0);
    let footballv = String.fromCharCode(112,111,105,110,116,99,98,98,95,112,95,54,57,0);
    let productL = String.fromCharCode(101,95,53,95,115,116,114,105,107,101,116,104,114,111,117,103,104,0);
    let imagenetworkerrd = String.fromCharCode(114,116,115,112,99,111,100,101,115,95,57,95,57,56,0);
    let imagenetworkerrr = 5.0;
    let checkbox8 = 5;
   if (libreactnativeblobJ.length >= foregroundM) {
      foregroundM /= Math.max(1, 1 | parseInt(`${foregroundM}`));
   }
   for (let q = 0; q < 2; q++) {
      libreactnativeblobJ = `${1 + footballv.length}`;
   }
       let configure5 = String.fromCharCode(99,111,117,110,116,114,105,101,115,95,98,95,57,57,0);
       let libyogai = 5;
       let models9 = 0;
          let descr: Map<any, any> = new Map([[String.fromCharCode(107,95,54,57,95,108,111,111,112,115,0),50], [String.fromCharCode(104,111,110,101,121,115,119,97,112,95,97,95,53,0),695], [String.fromCharCode(113,95,53,50,95,111,112,99,111,100,101,115,0),729]]);
          let iconlogoutS = String.fromCharCode(105,115,115,117,101,95,110,95,53,48,0);
          let iconorientationR = 3;
         libyogai /= Math.max(3, models9 - 1);
         descr.set(iconlogoutS, 3);
         iconlogoutS = `${1 >> (Math.min(5, iconlogoutS.length))}`;
         iconorientationR += descr.size;
         libyogai ^= 2;
      for (let e = 0; e < 1; e++) {
         configure5 = `${(configure5 == String.fromCharCode(55,0) ? libyogai : configure5.length)}`;
      }
         libyogai += libyogai / (Math.max(2, 5));
         libyogai *= 2 << (Math.min(1, Math.abs(libyogai)));
      let leaguedetailsbg0 = String.fromCharCode(100,101,105,0) == configure5;
      do {
         configure5 = `${libyogai | 2}`;
         if (leaguedetailsbg0) {
            break;
         }
      } while (leaguedetailsbg0 && (5 > configure5.length));
      if ((libyogai ^ configure5.length) <= 4 && 4 <= (configure5.length ^ libyogai)) {
         libyogai |= 2 >> (Math.min(4, Math.abs(models9)));
      }
      if (2 <= (4 >> (Math.min(4, Math.abs(libyogai))))) {
          let grapht = String.fromCharCode(118,95,49,55,95,114,101,102,112,105,99,0);
          let profilek = 5;
         models9 %= Math.max(4, profilek / (Math.max(9, libyogai)));
         grapht += `${grapht.length & grapht.length}`;
         profilek >>= Math.min(4, grapht.length);
      }
      if (2 < (libyogai - configure5.length) && 2 < (configure5.length - 2)) {
         libyogai <<= Math.min(5, Math.abs(models9));
      }
      tickedE.set(`${configure5}`, configure5.length & 3);
      libreactnativeblobJ += `${parseInt(`${foregroundM}`) ^ 2}`;
   while (productL.length > 2) {
      productL += `${(String.fromCharCode(78,0) == completeL ? footballv.length : completeL.length)}`;
      break;
   }
   while (4 < completeL.length) {
       let lnewarchdefaultsz = 1;
       let predictiondefaultS = 0.0;
       let predictionbannersharedC = 2.0;
          let iconwechatp = String.fromCharCode(116,95,52,95,100,111,109,97,105,110,115,0);
          let orientationr = String.fromCharCode(101,95,54,52,95,97,116,111,109,115,0);
          let currentj = 4.0;
         predictiondefaultS -= parseFloat(`${orientationr.length / (Math.max(2, 10))}`);
         iconwechatp = "1";
         orientationr = `${iconwechatp.length / (Math.max(1, 7))}`;
         currentj /= Math.max(iconwechatp.length, 3);
      let eventn = 7134620 <= lnewarchdefaultsz;
      do {
         lnewarchdefaultsz >>= Math.min(Math.abs(parseInt(`${predictionbannersharedC}`) << (Math.min(Math.abs(parseInt(`${predictiondefaultS}`)), 3))), 1);
         if (eventn) {
            break;
         }
      } while ((2.12 >= (predictiondefaultS * 2.72)) && eventn);
      while (5.15 < (parseFloat(`${lnewarchdefaultsz}`) + predictiondefaultS) && (5 % (Math.max(5, lnewarchdefaultsz))) < 1) {
         lnewarchdefaultsz |= 1 & lnewarchdefaultsz;
         break;
      }
          let nativemodulek = 5;
          let pointX = String.fromCharCode(115,95,56,57,95,108,97,110,100,115,99,97,112,101,0);
          let rocket4: Array<any> = [976, 243, 789];
         predictiondefaultS -= parseFloat(`${lnewarchdefaultsz << (Math.min(Math.abs(parseInt(`${predictiondefaultS}`)), 1))}`);
         nativemodulek += rocket4.length ^ pointX.length;
         pointX += `${(pointX == String.fromCharCode(104,0) ? rocket4.length : pointX.length)}`;
          let mbnativem = String.fromCharCode(103,100,115,112,95,120,95,52,55,0);
         predictiondefaultS *= parseFloat(`${3 ^ parseInt(`${predictiondefaultS}`)}`);
         mbnativem += `${(mbnativem == String.fromCharCode(65,0) ? mbnativem.length : mbnativem.length)}`;
      if (5 <= (5 + lnewarchdefaultsz) && 5.74 <= (predictiondefaultS * 1.100)) {
         lnewarchdefaultsz *= lnewarchdefaultsz >> (Math.min(Math.abs(parseInt(`${predictiondefaultS}`)), 1));
      }
      let libapminsightbo = lnewarchdefaultsz <= 5008120;
      do {
         lnewarchdefaultsz *= lnewarchdefaultsz;
         if (libapminsightbo) {
            break;
         }
      } while (libapminsightbo && ((1.55 / (Math.max(1, predictiondefaultS))) <= 2.0));
       let libavdeviceA: Array<any> = [385, 564];
      while (predictiondefaultS > lnewarchdefaultsz) {
          let zoomY = 2.0;
          let unimplementedviewN = true;
          let albumO = false;
         predictiondefaultS -= parseFloat(`${2}`);
         zoomY /= Math.max(4, parseFloat(`${parseInt(`${zoomY}`) - 1}`));
         unimplementedviewN = zoomY < 1.33 && albumO;
         albumO = (unimplementedviewN ? !albumO : !unimplementedviewN);
         break;
      }
      completeL += `${parseInt(`${predictiondefaultS}`) + footballv.length}`;
      break;
   }

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

   for (let b = 0; b < 1; b++) {
      productL = `${parseInt(`${foregroundM}`) / (Math.max(footballv.length, 3))}`;
   }
      libreactnativeblobJ += `${imagenetworkerrd.length ^ 1}`;
   while (1.21 <= (imagenetworkerrr + 1.55) || (imagenetworkerrr + foregroundM) <= 1.55) {
      foregroundM *= parseInt(`${foregroundM}`);
      break;
   }
       let selectedL = false;
       let combineK = 2;
          let navigation0 = String.fromCharCode(101,95,53,53,95,105,110,115,116,114,117,99,116,105,111,110,0);
          let matchesk: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,101,95,103,95,51,50,0),String.fromCharCode(107,95,51,54,95,100,101,112,108,111,121,109,101,110,116,0)], [String.fromCharCode(112,111,119,101,114,102,117,108,95,112,95,55,56,0),String.fromCharCode(99,111,100,101,98,111,111,107,115,95,53,95,50,48,0)]]);
         selectedL = navigation0.length > 97;
         navigation0 = `${2 - matchesk.size}`;
         matchesk.set(`${matchesk.size}`, matchesk.size);
         selectedL = combineK == 70 && selectedL;
          let nalyticsa = false;
          let nterstitial9: Array<any> = [500, 152];
         selectedL = nalyticsa;
         nterstitial9 = [3];
         selectedL = !selectedL || 23 == combineK;
      while ((4 - combineK) >= 4) {
          let libswresample4 = String.fromCharCode(108,111,111,112,95,112,95,54,53,0);
          let lang8 = true;
          let screenf: Array<any> = [261, 685, 953];
          let templateprocessort = 0;
          let storeb = false;
         selectedL = lang8;
         libswresample4 = `${(3 ^ (storeb ? 2 : 4))}`;
         screenf.push(3);
         templateprocessort %= Math.max(3, 3);
         break;
      }
         selectedL = 44 == combineK;
      imagenetworkerrr *= parseFloat(`${2}`);
   while (5 == footballv.length) {
      footballv += `${productL.length % (Math.max(6, tickedE.size))}`;
      break;
   }
   let penaltymatchiconO = String.fromCharCode(97,51,119,48,107,100,101,114,95,0) == footballv;
   do {
      footballv += `${imagenetworkerrd.length}`;
      if (penaltymatchiconO) {
         break;
      }
   } while ((2 > footballv.length) && penaltymatchiconO);
      const newState = getState().downloadVideoReducer

      productL += `${(completeL == String.fromCharCode(118,0) ? tickedE.size : completeL.length)}`;
   for (let h = 0; h < 3; h++) {
      footballv = `${2 & libreactnativeblobJ.length}`;
   }
      completeL = `${(String.fromCharCode(121,0) == footballv ? footballv.length : parseInt(`${imagenetworkerrr}`))}`;
       let dycreatorP = true;
       let bellR = String.fromCharCode(108,95,53,54,95,109,111,114,101,0);
      if (!dycreatorP) {
         bellR += `${1 % (Math.max(2, bellR.length))}`;
      }
         dycreatorP = !dycreatorP;
      while (bellR.startsWith(`${dycreatorP}`)) {
         bellR += `${bellR.length ^ 2}`;
         break;
      }
      if (!bellR.includes(`${dycreatorP}`)) {
          let hoverJ = 0.0;
          let iconpointscore3 = String.fromCharCode(97,95,50,57,95,116,105,108,101,104,100,114,0);
          let appleZ = 3.0;
         dycreatorP = bellR.startsWith(`${hoverJ}`);
         hoverJ *= parseFloat(`${iconpointscore3.length}`);
         iconpointscore3 = `${2 + parseInt(`${appleZ}`)}`;
         appleZ /= Math.max(3, parseInt(`${appleZ}`));
      }
       let subino = false;
         bellR = `${2 - bellR.length}`;
      tickedE = new Map([[imagenetworkerrd, (imagenetworkerrd.length % (Math.max(8, (dycreatorP ? 4 : 5))))]]);
      foregroundM -= (productL == String.fromCharCode(117,0) ? productL.length : parseInt(`${foregroundM}`));
       let previewX: Array<any> = [String.fromCharCode(103,95,54,54,95,112,114,101,116,99,104,0), String.fromCharCode(120,95,53,53,95,114,101,105,109,112,111,114,116,0), String.fromCharCode(103,101,110,101,114,97,116,105,111,110,95,108,95,55,55,0)];
         previewX.push(previewX.length * 2);
          let mimeX = 4.0;
         previewX = [parseInt(`${mimeX}`)];
          let flippert = 2.0;
          let philippiness = true;
          let fastforwardG = 5;
         previewX = [parseInt(`${flippert}`)];
         flippert /= Math.max((parseFloat(`${fastforwardG >> (Math.min(2, Math.abs((philippiness ? 4 : 1))))}`)), 1);
         philippiness = fastforwardG > 12;
      completeL = `${libreactnativeblobJ.length}`;
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
      
    }

    const handleError = () => {
       let libtobX = String.fromCharCode(118,99,111,109,98,105,110,101,95,116,95,49,50,0);
    let viewsI = 4;
    let exampleimageM = String.fromCharCode(112,95,50,57,95,114,101,99,101,105,118,101,0);
    let predictioni: Array<any> = [553, 813];
    let over6: Map<any, any> = new Map([[String.fromCharCode(113,95,56,53,95,102,112,117,116,115,0),381], [String.fromCharCode(101,95,54,48,95,121,117,118,109,112,101,103,0),512]]);
    let privatechatbg2 = 5.0;
    let relatedv = 0;
    let loginO = String.fromCharCode(112,101,114,115,105,115,116,95,106,95,55,48,0);
    let combinedM = String.fromCharCode(116,95,50,48,95,115,115,101,100,105,102,102,0);
    let redirectU = true;
    let indicatorn = String.fromCharCode(119,95,51,52,95,118,109,97,102,0);
    let package_5L = String.fromCharCode(103,95,50,49,95,109,97,103,121,0);
    let libapminsightaJ = 5;
    let chinasameN = 1.0;
   if ((5 + relatedv) > 2 || (5 + relatedv) > 2) {
      relatedv *= over6.size >> (Math.min(2, Math.abs(parseInt(`${privatechatbg2}`))));
   }
      package_5L += "2";
   while ((privatechatbg2 / (Math.max(parseFloat(`${package_5L.length}`), 8))) < 1.15 || (parseInt(`${privatechatbg2}`) / (Math.max(package_5L.length, 9))) < 3) {
       let progressZ = false;
       let long_pP: Array<any> = [32, 0, 9];
       let y_positiong = String.fromCharCode(102,111,114,101,105,103,110,95,114,95,52,54,0);
      while (2 > y_positiong.length) {
          let notificationZ = false;
          let downarrowf = String.fromCharCode(105,114,100,102,116,95,103,95,50,56,0);
         y_positiong = "2";
         notificationZ = downarrowf == downarrowf;
         break;
      }
         long_pP.push(y_positiong.length);
      for (let j = 0; j < 3; j++) {
         progressZ = 60 < long_pP.length || y_positiong.length < 60;
      }
       let injuryz = String.fromCharCode(107,95,49,51,95,119,97,105,116,105,110,103,0);
       let progresso = String.fromCharCode(99,100,99,105,95,100,95,56,49,0);
      if (!progresso.startsWith(`${y_positiong.length}`)) {
         y_positiong = `${progresso.length}`;
      }
      while (long_pP.length < 3) {
         long_pP = [3 & long_pP.length];
         break;
      }
          let imagesI: Array<any> = [844, 139];
         long_pP = [3];
         imagesI.push(imagesI.length - imagesI.length);
      if (5 >= (long_pP.length << (Math.min(Math.abs(4), 2)))) {
          let iconA = String.fromCharCode(117,95,54,54,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0);
          let flipperb = String.fromCharCode(115,105,108,101,110,116,108,121,95,102,95,57,48,0);
         progresso += `${(String.fromCharCode(104,0) == progresso ? progresso.length : long_pP.length)}`;
         iconA = `${flipperb.length}`;
         flipperb += `${iconA.length - flipperb.length}`;
      }
         progresso += "3";
      package_5L = `${parseInt(`${privatechatbg2}`)}`;
      break;
   }

      

      privatechatbg2 *= parseFloat(`${exampleimageM.length & loginO.length}`);
      relatedv /= Math.max(over6.size ^ parseInt(`${privatechatbg2}`), 5);
   while (4 >= predictioni.length) {
      libapminsightaJ %= Math.max(4, 2 + loginO.length);
      break;
   }
      const state = getState().downloadVideoReducer

       let button6 = String.fromCharCode(98,95,49,51,95,104,101,120,100,117,109,112,0);
       let gesturem = 3.0;
       let langkeyO: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,101,95,108,95,53,54,0),String.fromCharCode(119,95,54,56,95,112,114,105,118,97,99,121,0)], [String.fromCharCode(110,95,49,95,112,108,97,99,101,104,111,108,100,101,114,0),String.fromCharCode(116,95,54,48,95,115,112,101,99,116,114,97,0)]]);
      if ((button6.length * 2) < 5 && (gesturem / (Math.max(button6.length, 7))) < 1.12) {
         gesturem -= parseInt(`${gesturem}`) ^ langkeyO.size;
      }
         langkeyO.set(button6, 3);
          let classesM = String.fromCharCode(103,95,57,52,95,115,116,114,111,107,101,115,0);
          let homeplayeri = String.fromCharCode(104,111,116,105,122,111,110,116,108,95,110,95,52,56,0);
          let iconwatchnoww = false;
         gesturem /= Math.max(classesM.length ^ langkeyO.size, 5);
         classesM += `${(homeplayeri.length ^ (iconwatchnoww ? 1 : 2))}`;
         homeplayeri += `${(1 / (Math.max(3, (iconwatchnoww ? 1 : 2))))}`;
      if (1.99 < (gesturem * 5.50) || 1 < (button6.length & 1)) {
         gesturem -= parseInt(`${gesturem}`);
      }
      let checkbox7 = 6550183 >= langkeyO.size;
      do {
         langkeyO.set(`${gesturem}`, 2 | parseInt(`${gesturem}`));
         if (checkbox7) {
            break;
         }
      } while (checkbox7 && (Array.from(langkeyO.values()).includes(gesturem)));
      while (button6.length == langkeyO.size) {
         langkeyO = new Map([[button6, button6.length]]);
         break;
      }
       let buttonx = String.fromCharCode(100,95,57,50,95,116,114,97,112,0);
       let member3 = String.fromCharCode(121,95,54,50,95,97,99,116,97,98,0);
          let arrowh = String.fromCharCode(118,95,51,51,0);
         member3 = `${buttonx.length % 3}`;
         arrowh += `${arrowh.length / (Math.max(7, arrowh.length))}`;
      let gesturesH = member3 == String.fromCharCode(110,114,102,98,115,114,54,0);
      do {
          let sendH = 4.0;
          let penaltyshootnogoalG: Array<any> = [39, 2, 555];
          let playS: Map<any, any> = new Map([[String.fromCharCode(119,95,57,48,95,101,109,98,101,100,0),String.fromCharCode(118,97,110,99,95,122,95,51,51,0)], [String.fromCharCode(100,105,114,101,99,116,105,111,110,95,113,95,57,51,0),String.fromCharCode(112,114,111,102,105,108,101,115,95,104,95,54,51,0)]]);
         member3 += `${parseInt(`${sendH}`)}`;
         sendH *= penaltyshootnogoalG.length / 1;
         penaltyshootnogoalG.push(1);
         playS = new Map([[`${playS.size}`, penaltyshootnogoalG.length / 1]]);
         if (gesturesH) {
            break;
         }
      } while (gesturesH && (member3.length < buttonx.length));
      libtobX = `${langkeyO.size % (Math.max(5, over6.size))}`;
      viewsI += libtobX.length - 1;
       let privilegeF = 3.0;
       let zhengpian0 = String.fromCharCode(122,111,109,98,105,101,95,102,95,49,51,0);
       let upgrade3 = String.fromCharCode(116,95,49,50,95,117,110,99,111,109,112,114,101,115,115,0);
         zhengpian0 += `${upgrade3.length << (Math.min(zhengpian0.length, 2))}`;
      let annerv = privilegeF >= 6241123.0;
      do {
         privilegeF -= parseInt(`${privilegeF}`);
         if (annerv) {
            break;
         }
      } while ((5.30 < (privilegeF * upgrade3.length) || (privilegeF * 5.30) < 2.24) && annerv);
      relatedv <<= Math.min(3, parseInt(`${Math.abs((parseInt(`${privilegeF}`) >> (Math.min(3, Math.abs((redirectU ? 5 : 4))))))}`));
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

       let bang4 = String.fromCharCode(114,101,103,95,104,95,50,54,0);
       let goallogoB = String.fromCharCode(117,95,56,55,95,105,109,103,117,116,105,108,115,0);
       let router8 = true;
         router8 = !router8;
      for (let w = 0; w < 3; w++) {
         goallogoB = "3";
      }
          let teami = String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,108,95,50,56,0);
          let subinY: Array<any> = [793, 446, 66];
          let sellmathbackgroundr = 5.0;
         router8 = !teami.startsWith(`${router8}`);
         teami += `${subinY.length % 3}`;
         subinY.push(parseInt(`${sellmathbackgroundr}`));
         sellmathbackgroundr -= subinY.length;
      while (5 <= bang4.length && !router8) {
          let textlayoutmanagery = 0;
         router8 = textlayoutmanagery < goallogoB.length;
         break;
      }
         goallogoB = `${(goallogoB.length | (router8 ? 4 : 5))}`;
          let time_aY: Map<any, any> = new Map([[String.fromCharCode(101,120,116,109,97,112,95,114,95,52,54,0),true ], [String.fromCharCode(111,95,50,54,95,114,111,103,114,101,115,115,0),true ]]);
         bang4 += `${3 | goallogoB.length}`;
         time_aY = new Map([[`${time_aY.size}`, time_aY.size | time_aY.size]]);
      if (goallogoB != String.fromCharCode(76,0)) {
         bang4 = `${bang4.length | 3}`;
      }
         router8 = (bang4.length << (Math.min(1, goallogoB.length))) >= 40;
      for (let q = 0; q < 2; q++) {
         goallogoB = `${bang4.length % 1}`;
      }
      redirectU = goallogoB.length == 41;
   let logoutF = predictioni.length <= 6349091;
   do {
      predictioni = [combinedM.length];
      if (logoutF) {
         break;
      }
   } while ((!predictioni.includes(relatedv)) && logoutF);
      libtobX += `${viewsI}`;
      if (!targetEpisode) return
      if (targetEpisode?.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni){

      redirectU = 88 == libtobX.length && 88 == libapminsightaJ;
   if (package_5L.length <= libtobX.length) {
      libtobX = `${loginO.length & predictioni.length}`;
   }
      redirectU = String.fromCharCode(102,0) == loginO && over6.size <= 27;
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: CUASheetIconarrowright.CUAFlipperTurndown
      }))

   for (let c = 0; c < 3; c++) {
       let embedB = 0.0;
       let libswresampleY = 5;
       let bodanx = 4.0;
       let whistle8 = 0.0;
       let promotionb: Map<any, any> = new Map([[String.fromCharCode(121,95,54,57,95,117,110,112,111,105,115,111,110,0),35], [String.fromCharCode(119,95,54,56,95,115,121,115,108,111,103,0),438], [String.fromCharCode(115,95,53,50,95,112,114,101,99,0),863]]);
       let iconsharefriendsY: Array<any> = [804, 14, 827];
       let sportst: Array<any> = [511, 22, 256];
         whistle8 += parseFloat(`${iconsharefriendsY.length << (Math.min(4, Math.abs(parseInt(`${whistle8}`))))}`);
         promotionb = new Map([[`${sportst.length}`, parseInt(`${bodanx}`) % 3]]);
      while (!iconsharefriendsY.includes(libswresampleY)) {
         iconsharefriendsY.push(libswresampleY);
         break;
      }
         bodanx *= libswresampleY;
          let unimplementedviewf = String.fromCharCode(112,95,49,57,95,102,105,116,116,105,110,103,0);
          let expandR: Array<any> = [976, 894, 676];
         promotionb.set(`${iconsharefriendsY.length}`, 3 >> (Math.min(2, iconsharefriendsY.length)));
         unimplementedviewf += `${2 << (Math.min(3, unimplementedviewf.length))}`;
         expandR = [unimplementedviewf.length & 3];
          let reddownarrowx = 1.0;
          let watch2 = 0.0;
         libswresampleY ^= parseInt(`${embedB}`) - 3;
         reddownarrowx -= parseFloat(`${1 - parseInt(`${reddownarrowx}`)}`);
         watch2 -= 1 % (Math.max(parseInt(`${watch2}`), 4));
         promotionb = new Map([[`${libswresampleY}`, libswresampleY << (Math.min(Math.abs(parseInt(`${embedB}`)), 2))]]);
         libswresampleY += 1 ^ promotionb.size;
       let hometeamfieldQ = 1.0;
      let episodesQ = 7518113 <= promotionb.size;
      do {
         promotionb = new Map([[`${hometeamfieldQ}`, parseInt(`${whistle8}`) % (Math.max(7, parseInt(`${hometeamfieldQ}`)))]]);
         if (episodesQ) {
            break;
         }
      } while (episodesQ && (!Array.from(promotionb.keys()).includes(`${sportst.length}`)));
      if (4 <= (sportst.length - 3) && (3 - sportst.length) <= 1) {
          let codeh = String.fromCharCode(118,95,55,51,95,115,117,98,118,105,100,101,111,0);
          let greytick1 = 1;
          let cricketM: Array<any> = [742, 292];
          let iconnotificationnew5: Array<any> = [219, 896, 338];
          let sportsm = String.fromCharCode(117,95,50,54,95,97,112,110,103,0);
         libswresampleY ^= iconnotificationnew5.length & 2;
         codeh = "3";
         greytick1 <<= Math.min(Math.abs(sportsm.length + 2), 3);
         cricketM.push(1 | sportsm.length);
         iconnotificationnew5 = [3];
      }
         sportst = [parseInt(`${embedB}`)];
         sportst.push(libswresampleY - 3);
      let selectI = 7634713.0 >= embedB;
      do {
         embedB *= iconsharefriendsY.length ^ 1;
         if (selectI) {
            break;
         }
      } while (selectI && (whistle8 < embedB));
      over6 = new Map([[`${libapminsightaJ}`, parseInt(`${whistle8}`) | 1]]);
   }
   while (4 > (1 / (Math.max(2, libapminsightaJ))) && (relatedv / 1) > 3) {
      relatedv /= Math.max(3, 2);
      break;
   }
       let resendA = String.fromCharCode(110,95,49,54,95,112,111,119,101,114,0);
       let projectG: Map<any, any> = new Map([[String.fromCharCode(98,117,109,112,95,113,95,55,52,0),false ], [String.fromCharCode(105,95,56,49,95,112,117,114,103,101,0),true ]]);
      if (resendA.length <= 1) {
         resendA += `${1 + resendA.length}`;
      }
      while (resendA.length <= projectG.size) {
          let auto_ta = 4.0;
          let securityJ = String.fromCharCode(99,95,52,49,95,115,113,108,105,116,101,114,98,117,0);
         projectG = new Map([[`${projectG.size}`, (String.fromCharCode(52,0) == securityJ ? securityJ.length : projectG.size)]]);
         auto_ta -= parseInt(`${auto_ta}`);
         break;
      }
         projectG = new Map([[`${projectG.size}`, resendA.length]]);
      if (projectG.size == 5) {
         resendA += `${1 - resendA.length}`;
      }
      while (1 == projectG.size) {
         resendA += `${resendA.length << (Math.min(2, Math.abs(projectG.size)))}`;
         break;
      }
          let reactnativeratingsZ: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,114,115,95,108,95,57,49,0),String.fromCharCode(121,95,56,52,95,115,105,109,117,108,97,116,105,111,110,0)], [String.fromCharCode(115,101,97,108,101,100,95,50,95,55,52,0),String.fromCharCode(110,95,55,51,95,109,97,114,107,101,114,115,0)], [String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,114,95,54,48,0),String.fromCharCode(109,107,118,109,117,120,101,114,95,102,95,52,52,0)]]);
          let robotou = String.fromCharCode(103,101,110,101,114,97,108,95,110,95,55,55,0);
         resendA = `${resendA.length ^ 2}`;
         reactnativeratingsZ.set(robotou, reactnativeratingsZ.size | robotou.length);
      predictioni.push(relatedv);


      const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

      relatedv %= Math.max(2 | parseInt(`${chinasameN}`), 1);
   while (!loginO.endsWith(`${combinedM.length}`)) {
      combinedM = `${viewsI}`;
      break;
   }
      predictioni = [libtobX.length << (Math.min(Math.abs(2), 5))];
      if (!targetVod) return 
      const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
      RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
      RNFetchBlob.fs.unlink(partialPath).catch(err => {})

   if (indicatorn != loginO) {
      loginO = `${exampleimageM.length - 1}`;
   }
   let googleC = over6.size >= 5248355;
   do {
      over6 = new Map([[`${redirectU}`, (parseInt(`${privatechatbg2}`) - (redirectU ? 4 : 4))]]);
      if (googleC) {
         break;
      }
   } while (googleC && (3 == (parseInt(`${privatechatbg2}`) * over6.size) || 4.23 == (privatechatbg2 * 2.94)));
   for (let m = 0; m < 2; m++) {
      indicatorn += "2";
   }
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode?.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni){
        return 
      }
      concatPartialVideos(
        `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
        ()=>{
          
          
          
          
          
          dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
            status: CUASheetIconarrowright.CUAAttributedstring, 
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

      if (targetEpisode.status === CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni) { 
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
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
  return async function (dispatch, getState) {
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: CUASheetIconarrowright.CUAAudienceUmeng}))
    dispatch(resumeVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function updateAllVodDetailsThunk(): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
  return async function (dispatch, getState) {
    const downloads = getState().downloadVideoReducer.downloads
    downloads.forEach(async (download) => {
      const newVod = await mayi_CrossChat.getDetail(download.vod.vod_id.toString(), download.vod.type_id.toString(), download.vod.vod_source_name, {xMode: download.vodIsAdult})
      dispatch(updateVodDetails(newVod))
    })


  };
}

export function manualKillVideoDownloadThunk(
  vod: mayi_EmptyGradle,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, mayi_Libapminsightb, any, mayi_Catagory> {
  return async function (dispatch, getState) {
    const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode.ffmpegSession === null) return 

      FFmpegKit.cancel(targetEpisode.ffmpegSession)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: CUASheetIconarrowright.CUAFlipperTurndown}))
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      dispatch(resumeFirstVideoDownload())
  }
}