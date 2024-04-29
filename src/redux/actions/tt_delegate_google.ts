import { ttPlaceholder, ttGemfilePhone } from "@type/tt_history_upload";
import { ttAppsOther } from "@type/tt_line_borderless";
import { concatPartialVideos, downloadVod, downloadVodImage, getUrlOfVod, pauseDownloadVod, resumeDownloadVod } from "../../utils/tt_pagination_banner";
import { ThunkAction } from "redux-thunk";
import { ZRChinasame, ttMapping, ttFrame, ttTumbnail } from "@type/tt_const_videocommon";
import { ttOrange } from "@redux/tt_updates_bottom";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility/tt_trophy_cross";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegKit, FFmpegSession } from "ffmpeg-kit-react-native";
import { throttle } from "lodash";
import { ttConfirmationChinasame } from "../../api/tt_favorite_manifest";

function addVideoToDownload(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean): ttPlaceholder {
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

function updateVideoDownload(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number, optional: ttGemfilePhone): ttPlaceholder {
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

function startVideoDownload(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number): ttPlaceholder {
  return {
    type: 'START_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function endVideoDownload(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number): ttPlaceholder {
  return {
    type: 'END_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function addDownloadToQueue(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number): ttPlaceholder {
  return {
    type: 'ADD_DOWNLOAD_TO_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeDownloadFromQueue(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number): ttPlaceholder {
  return {
    type: 'REMOVE_DOWNLOAD_FROM_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeVideoFromDownload(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number): ttPlaceholder {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}


export function removeVodFromDownload(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number): ttPlaceholder {
  return {
    type: 'REMOVE_VOD_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function resetQueue(): ttPlaceholder {
  return {
    type: "RESET_QUEUE",
    
    payload: null 
  }
}

function pauseVideoDownload(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number): ttPlaceholder {
  return {
    type: 'PAUSE_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function updateVodDetails(vod: ttAppsOther): ttPlaceholder {
  return {
    type: 'UPDATE_VOD_DETAILS', 
    payload: {
      vod, 
      vodSourceId: 0, 
      vodUrlNid: 0, 
    }
  }
}

function startFirstVideoDownload(): ThunkAction<void, ttOrange, any, ttPlaceholder> {
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

function resumeFirstVideoDownload(): ThunkAction<void, ttOrange, any, ttPlaceholder> {
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
       let placeholderw = String.fromCharCode(105,110,115,116,97,108,108,101,100,95,119,95,54,54,0);
    let appst = true;
    let pageL = false;
    let blacklistJ: Array<any> = [864, 748];
    let taila: Map<any, any> = new Map([[String.fromCharCode(99,97,114,116,101,115,105,97,110,95,50,95,56,48,0),String.fromCharCode(108,95,53,54,95,109,97,105,110,0)], [String.fromCharCode(99,97,115,116,115,95,97,95,55,51,0),String.fromCharCode(115,119,114,95,50,95,53,53,0)], [String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,115,95,54,57,0),String.fromCharCode(112,95,56,48,95,100,101,108,111,103,111,0)]]);
    let debuga = 2.0;
    let combineQ = false;
    let buttonE: Map<any, any> = new Map([[String.fromCharCode(97,99,102,105,108,116,101,114,95,99,95,49,48,48,0),String.fromCharCode(102,108,97,99,100,115,112,95,99,95,50,50,0)], [String.fromCharCode(99,95,52,55,95,104,101,97,100,101,114,0),String.fromCharCode(105,110,99,111,114,114,101,99,116,95,98,95,51,56,0)]]);
    let previewQ = false;
    let customu = 0.0;
    let transfere: Map<any, any> = new Map([[String.fromCharCode(108,95,57,56,95,114,97,110,115,112,111,114,116,0),String.fromCharCode(115,116,101,112,115,105,122,101,95,119,95,50,53,0)], [String.fromCharCode(100,95,52,95,116,101,120,116,108,101,0),String.fromCharCode(97,108,103,111,114,105,116,104,109,95,54,95,50,57,0)], [String.fromCharCode(115,95,55,51,95,99,104,117,110,107,121,99,104,117,110,107,121,0),String.fromCharCode(111,117,112,117,116,95,104,95,56,48,0)]]);
    let downloadingP: Map<any, any> = new Map([[String.fromCharCode(103,97,109,117,116,115,95,111,95,51,57,0),true ], [String.fromCharCode(119,95,51,51,95,104,111,114,110,0),true ]]);
    let acceptedy: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,95,109,117,108,116,105,112,108,101,120,101,100,0),String.fromCharCode(104,105,103,104,98,100,95,109,95,55,50,0)], [String.fromCharCode(105,95,56,51,95,111,103,103,118,111,114,98,105,115,0),String.fromCharCode(106,95,52,55,95,100,114,98,103,0)]]);
       let module8 = String.fromCharCode(107,95,53,50,95,102,114,101,101,108,97,100,100,114,115,0);
       let giftc = 3.0;
         giftc -= parseFloat(`${parseInt(`${giftc}`)}`);
      while (5.29 < (giftc / (Math.max(2.49, 6)))) {
         module8 = `${3 + parseInt(`${giftc}`)}`;
         break;
      }
      while ((parseInt(`${giftc}`) / 1) == 1 && 1.15 == (parseFloat(`${module8.length}`) / (Math.max(8, giftc)))) {
         giftc -= parseFloat(`${3 - module8.length}`);
         break;
      }
         module8 += `${1 << (Math.min(2, Math.abs(parseInt(`${giftc}`))))}`;
      while ((giftc / 5.20) >= 1.75) {
          let ewarded8 = 1.0;
          let areaZ = String.fromCharCode(116,106,101,120,97,109,112,108,101,116,101,115,116,95,121,95,52,51,0);
          let light5: Array<any> = [327, 240, 825];
          let eventX = 4.0;
         module8 += `${parseInt(`${giftc}`)}`;
         ewarded8 -= parseInt(`${eventX}`) * areaZ.length;
         areaZ += `${light5.length << (Math.min(Math.abs(1), 5))}`;
         light5 = [3];
         eventX /= Math.max(1 << (Math.min(Math.abs(parseInt(`${ewarded8}`)), 2)), 2);
         break;
      }
      let upgradeE = module8 == String.fromCharCode(52,104,105,0);
      do {
         module8 = `${parseInt(`${giftc}`) % 1}`;
         if (upgradeE) {
            break;
         }
      } while ((giftc < parseFloat(`${module8.length}`)) && upgradeE);
      previewQ = 50.84 >= debuga && buttonE.size >= 72;
   if ((placeholderw.length | 1) == 2) {
       let clearV = 4.0;
      for (let u = 0; u < 2; u++) {
         clearV *= parseFloat(`${parseInt(`${clearV}`)}`);
      }
         clearV -= parseFloat(`${parseInt(`${clearV}`) + 2}`);
      while (3.50 == (clearV / (Math.max(clearV, 1))) || (clearV / (Math.max(7, clearV))) == 3.50) {
         clearV *= parseFloat(`${3}`);
         break;
      }
      buttonE.set(`${combineQ}`, 2);
   }
   for (let j = 0; j < 2; j++) {
      combineQ = customu >= debuga;
   }
   let holderX = blacklistJ.length >= 9252762;
   do {
      blacklistJ = [((combineQ ? 1 : 3) | parseInt(`${debuga}`))];
      if (holderX) {
         break;
      }
   } while (((5 - blacklistJ.length) == 1) && holderX);
      pageL = previewQ;
      blacklistJ = [((previewQ ? 3 : 3) << (Math.min(5, Math.abs((pageL ? 2 : 2)))))];
      taila = new Map([[`${buttonE.size}`, parseInt(`${debuga}`) % (Math.max(buttonE.size, 7))]]);
   let trophyC = customu >= 8860545.0;
   do {
       let chat2: Map<any, any> = new Map([[String.fromCharCode(102,95,53,53,95,116,100,115,102,0),5], [String.fromCharCode(98,111,117,110,99,105,110,103,95,49,95,50,51,0),999], [String.fromCharCode(99,104,97,112,116,101,114,95,104,95,53,57,0),389]]);
       let moonO = String.fromCharCode(99,97,118,112,95,122,95,55,55,0);
       let mbbid6 = 3;
       let verticall: Array<any> = [546, 934];
       let handlero: Map<any, any> = new Map([[String.fromCharCode(112,97,116,116,101,114,110,95,120,95,56,52,0),505], [String.fromCharCode(118,95,56,53,95,109,111,115,97,105,99,0),896], [String.fromCharCode(110,111,116,105,102,121,105,110,103,95,114,95,53,57,0),826]]);
      for (let v = 0; v < 2; v++) {
         verticall.push(verticall.length - handlero.size);
      }
          let foregroundL = false;
         verticall.push(moonO.length);
      for (let k = 0; k < 1; k++) {
          let headerO = 2.0;
          let sportg: Array<any> = [58, 51, 33];
         handlero = new Map([[`${handlero.size}`, handlero.size << (Math.min(sportg.length, 3))]]);
         headerO /= Math.max(parseFloat(`${parseInt(`${headerO}`)}`), 5);
         sportg = [1 - parseInt(`${headerO}`)];
      }
         mbbid6 <<= Math.min(3, Math.abs(chat2.size));
      if ((moonO.length * 1) >= 4 || 4 >= (moonO.length * 1)) {
         handlero.set(moonO, (String.fromCharCode(107,0) == moonO ? handlero.size : moonO.length));
      }
      let whistler = chat2.size >= 6434807;
      do {
          let twitterF = String.fromCharCode(115,95,50,49,95,115,116,114,116,111,107,0);
          let minivodN = String.fromCharCode(109,95,52,54,95,119,104,105,116,101,0);
          let roundd = 0.0;
          let description_9p9: Array<any> = [String.fromCharCode(104,105,115,116,111,114,121,95,54,95,49,53,0), String.fromCharCode(116,95,55,48,95,105,100,99,116,108,108,109,0)];
          let grayy: Array<any> = [365, 822];
         chat2 = new Map([[minivodN, 1]]);
         twitterF = `${(twitterF == String.fromCharCode(117,0) ? parseInt(`${roundd}`) : twitterF.length)}`;
         minivodN = `${3 << (Math.min(2, description_9p9.length))}`;
         roundd += twitterF.length;
         description_9p9 = [grayy.length];
         grayy.push(twitterF.length);
         if (whistler) {
            break;
         }
      } while (((handlero.size % (Math.max(chat2.size, 7))) > 3) && whistler);
         mbbid6 /= Math.max(moonO.length ^ handlero.size, 4);
      if (chat2.get(`${mbbid6}`) == null) {
         mbbid6 &= handlero.size % (Math.max(moonO.length, 2));
      }
         mbbid6 %= Math.max(3 * handlero.size, 2);
      let readK = 7418716 >= handlero.size;
      do {
          let screens = false;
          let fieldi = String.fromCharCode(108,95,48,95,121,105,101,108,100,0);
         handlero = new Map([[fieldi, fieldi.length ^ 1]]);
         screens = screens && screens;
         if (readK) {
            break;
         }
      } while (readK && (4 == (1 % (Math.max(2, handlero.size))) || (handlero.size % 1) == 2));
      for (let o = 0; o < 3; o++) {
         verticall = [mbbid6 & 3];
      }
      for (let m = 0; m < 2; m++) {
         chat2 = new Map([[`${verticall.length}`, 2]]);
      }
          let flyerQ = String.fromCharCode(98,95,49,95,104,97,118,101,101,118,101,110,116,115,0);
          let infoe: Array<any> = [685, 40];
          let k_titled: Array<any> = [String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,102,95,53,57,0), String.fromCharCode(111,95,50,52,95,98,105,110,107,98,0), String.fromCharCode(114,95,53,52,95,118,112,120,100,101,99,0)];
         mbbid6 >>= Math.min(Math.abs(handlero.size), 5);
         flyerQ = `${k_titled.length + infoe.length}`;
         infoe.push(infoe.length >> (Math.min(flyerQ.length, 1)));
         k_titled.push(flyerQ.length ^ infoe.length);
      if (verticall.length == 2) {
         verticall = [moonO.length << (Math.min(1, Math.abs(mbbid6)))];
      }
      for (let m = 0; m < 2; m++) {
         moonO += `${mbbid6}`;
      }
      customu += verticall.length;
      if (trophyC) {
         break;
      }
   } while ((1.31 >= (2.78 * customu)) && trophyC);
   if ((5.86 * debuga) >= 1.4 && (1 + placeholderw.length) >= 3) {
      placeholderw += `${buttonE.size}`;
   }
      blacklistJ = [parseInt(`${customu}`) ^ 3];
   while (downloadingP.size > 4) {
       let streamingM = String.fromCharCode(118,95,54,53,95,109,97,110,97,103,101,100,0);
      if (streamingM.endsWith(`${streamingM.length}`)) {
          let fastforwardW = String.fromCharCode(118,95,54,48,95,115,119,114,101,115,97,109,112,108,101,114,101,115,0);
          let starP = 2.0;
          let awayR: Map<any, any> = new Map([[String.fromCharCode(99,95,55,55,95,99,111,109,98,105,110,97,116,105,111,110,115,0),705], [String.fromCharCode(106,95,50,51,95,115,121,110,111,110,121,109,115,0),522]]);
         streamingM += `${streamingM.length | 3}`;
         fastforwardW = `${fastforwardW.length | 3}`;
         starP -= parseFloat(`${3}`);
         awayR = new Map([[`${starP}`, fastforwardW.length]]);
      }
      while (streamingM != streamingM) {
         streamingM += `${streamingM.length}`;
         break;
      }
          let selectionh = 5.0;
         streamingM += "3";
         selectionh *= parseInt(`${selectionh}`);
      previewQ = appst;
      break;
   }
   let gradlev = 9276477 >= downloadingP.size;
   do {
      downloadingP = new Map([[`${appst}`, ((appst ? 3 : 2) - placeholderw.length)]]);
      if (gradlev) {
         break;
      }
   } while (gradlev && (4 < downloadingP.size));
   for (let y = 0; y < 2; y++) {
       let storeu = String.fromCharCode(114,101,102,112,105,99,95,119,95,54,52,0);
       let bannerB = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,95,110,95,52,53,0);
         storeu += `${storeu.length | bannerB.length}`;
      let middleware2 = 7804990 <= bannerB.length;
      do {
          let searchbarz = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,95,102,95,51,54,0);
         bannerB += `${(storeu == String.fromCharCode(65,0) ? bannerB.length : storeu.length)}`;
         searchbarz = `${(String.fromCharCode(54,0) == searchbarz ? searchbarz.length : searchbarz.length)}`;
         if (middleware2) {
            break;
         }
      } while ((storeu.includes(`${bannerB.length}`)) && middleware2);
          let plashU = String.fromCharCode(118,120,119,111,114,107,115,95,119,95,52,51,0);
          let moonU: Array<any> = [71, 839];
         bannerB += `${bannerB.length & 2}`;
         plashU = `${(plashU == String.fromCharCode(85,0) ? plashU.length : moonU.length)}`;
         moonU = [(plashU == String.fromCharCode(73,0) ? moonU.length : plashU.length)];
          let settingsN: Array<any> = [812, 437, 497];
         bannerB += `${(storeu == String.fromCharCode(115,0) ? storeu.length : bannerB.length)}`;
         settingsN.push(3);
      for (let d = 0; d < 2; d++) {
         storeu = `${bannerB.length / (Math.max(3, storeu.length))}`;
      }
         storeu = `${storeu.length >> (Math.min(bannerB.length, 4))}`;
      placeholderw = `${downloadingP.size % 3}`;
   }
   while (!Array.from(buttonE.keys()).includes(`${customu}`)) {
      buttonE = new Map([[`${taila.size}`, taila.size * 2]]);
      break;
   }
   if ((buttonE.size + 5) < 5 || (buttonE.size + 5) < 3) {
       let apps6: Array<any> = [686, 247];
       let filterL = String.fromCharCode(102,97,118,111,114,105,116,101,95,108,95,54,51,0);
       let mbbannerz: Array<any> = [528, 594];
       let bootsplashy = 0.0;
       let huaweiE = 2.0;
         huaweiE -= parseFloat(`${apps6.length}`);
         mbbannerz.push(2 / (Math.max(2, parseInt(`${huaweiE}`))));
      if ((bootsplashy * 4.74) >= 3.91 || (huaweiE * bootsplashy) >= 4.74) {
         huaweiE *= parseFloat(`${filterL.length}`);
      }
         apps6.push(mbbannerz.length);
      while (5 == (mbbannerz.length + parseInt(`${bootsplashy}`))) {
          let loadingR: Array<any> = [String.fromCharCode(101,95,54,49,95,100,105,115,112,108,97,99,101,0), String.fromCharCode(114,95,56,56,95,115,110,111,119,0), String.fromCharCode(101,95,57,57,95,115,101,101,110,0)];
          let reportO: Array<any> = [String.fromCharCode(115,95,52,52,95,112,101,114,115,105,115,116,101,110,116,0), String.fromCharCode(101,95,49,52,95,100,111,117,98,108,105,110,103,0)];
          let usernameO = 1.0;
         mbbannerz = [1];
         loadingR.push(reportO.length << (Math.min(Math.abs(1), 2)));
         reportO = [3];
         usernameO /= Math.max(2, parseFloat(`${1}`));
         break;
      }
      for (let v = 0; v < 1; v++) {
          let profiley = String.fromCharCode(114,101,102,111,99,117,115,95,112,95,52,56,0);
          let tickm = String.fromCharCode(115,105,103,110,95,49,95,51,57,0);
          let baiduK = true;
         mbbannerz = [parseInt(`${huaweiE}`) / 3];
         profiley += `${(profiley.length | (baiduK ? 1 : 2))}`;
         tickm = `${((baiduK ? 3 : 4) % (Math.max(3, 1)))}`;
      }
         bootsplashy /= Math.max(3 ^ parseInt(`${huaweiE}`), 3);
      let flipperU = huaweiE <= 5916171.0;
      do {
          let matches5 = 3.0;
          let currentn = 5;
          let stationS = 1.0;
          let securityK = String.fromCharCode(101,121,101,115,95,112,95,56,48,0);
         huaweiE += parseFloat(`${parseInt(`${bootsplashy}`)}`);
         matches5 += parseInt(`${stationS}`);
         currentn |= currentn;
         stationS *= (parseFloat(`${String.fromCharCode(67,0) == securityK ? securityK.length : parseInt(`${matches5}`)}`));
         if (flipperU) {
            break;
         }
      } while (flipperU && (huaweiE == parseFloat(`${apps6.length}`)));
      if ((bootsplashy * 1) == 4.62) {
          let nativeexc = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,48,95,52,51,0);
          let dangerw: Map<any, any> = new Map([[String.fromCharCode(98,114,105,101,102,108,121,95,53,95,56,54,0),false ], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,114,95,57,56,0),true ], [String.fromCharCode(106,95,49,52,95,99,111,110,118,101,110,105,101,110,99,101,0),true ]]);
          let matchx: Map<any, any> = new Map([[String.fromCharCode(114,95,51,95,102,114,97,103,109,101,110,116,0),String.fromCharCode(109,95,54,50,95,109,101,109,122,101,114,111,0)], [String.fromCharCode(101,95,57,52,95,98,111,111,107,107,101,101,112,105,110,103,0),String.fromCharCode(122,95,52,50,95,101,120,112,111,110,101,110,116,0)]]);
          let downloaderW = 1;
         huaweiE += parseFloat(`${1}`);
         nativeexc = `${matchx.size / 2}`;
         dangerw = new Map([[`${dangerw.size}`, (String.fromCharCode(54,0) == nativeexc ? dangerw.size : nativeexc.length)]]);
         matchx = new Map([[`${dangerw.size}`, (String.fromCharCode(78,0) == nativeexc ? dangerw.size : nativeexc.length)]]);
         downloaderW %= Math.max(5, 1 - dangerw.size);
      }
      if (4.42 < (bootsplashy + huaweiE)) {
         bootsplashy += parseInt(`${huaweiE}`) / 1;
      }
      let combineQO = 9240224 <= apps6.length;
      do {
         apps6.push(parseInt(`${huaweiE}`));
         if (combineQO) {
            break;
         }
      } while (combineQO && (1 >= (filterL.length >> (Math.min(1, apps6.length))) || 5 >= (filterL.length >> (Math.min(Math.abs(1), 1)))));
      while ((2 * mbbannerz.length) >= 2 && 2 >= (apps6.length * mbbannerz.length)) {
         apps6 = [2 % (Math.max(7, filterL.length))];
         break;
      }
       let bridge8 = 4.0;
      for (let w = 0; w < 1; w++) {
          let adultS = 0.0;
          let carouselL = true;
          let m_managerT = 5.0;
          let window_5zD = false;
          let strings9 = 0;
         mbbannerz.push(parseInt(`${adultS}`) ^ 1);
         adultS /= Math.max(1, (parseFloat(`${parseInt(`${m_managerT}`) / (Math.max(8, (carouselL ? 1 : 5)))}`)));
         carouselL = !window_5zD;
         m_managerT -= strings9;
         strings9 >>= Math.min(4, Math.abs(strings9));
      }
      let heji0 = bootsplashy <= 6763715.0;
      do {
         bootsplashy += mbbannerz.length << (Math.min(filterL.length, 3));
         if (heji0) {
            break;
         }
      } while (heji0 && ((2 | mbbannerz.length) > 5 && (parseInt(`${bootsplashy}`) / (Math.max(mbbannerz.length, 6))) > 2));
      buttonE.set(`${bootsplashy}`, parseInt(`${bootsplashy}`) - 2);
   }
      appst = String.fromCharCode(102,0) == placeholderw;
       let singaporeu = 4.0;
       let tempL = 3;
       let sportX = false;
      let sources = tempL >= 8788616;
      do {
         tempL >>= Math.min(Math.abs(tempL | parseInt(`${singaporeu}`)), 3);
         if (sources) {
            break;
         }
      } while (sources && (tempL < 3));
      for (let z = 0; z < 1; z++) {
         sportX = tempL > 47;
      }
       let e_titleX = 5.0;
       let watch0 = 0.0;
         singaporeu -= parseFloat(`${1 / (Math.max(3, parseInt(`${e_titleX}`)))}`);
          let episodesk: Map<any, any> = new Map([[String.fromCharCode(119,95,57,54,95,111,114,100,101,114,115,0),413], [String.fromCharCode(99,111,110,116,111,117,114,115,95,102,95,52,53,0),531], [String.fromCharCode(110,95,51,50,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0),390]]);
         sportX = episodesk.size >= tempL;
          let lineQ: Map<any, any> = new Map([[String.fromCharCode(113,95,54,51,95,102,109,116,112,0),634], [String.fromCharCode(102,95,51,95,108,111,103,103,105,110,103,0),743]]);
          let annerg = 0.0;
         singaporeu += parseFloat(`${parseInt(`${e_titleX}`) * 2}`);
         lineQ = new Map([[`${lineQ.size}`, parseInt(`${annerg}`) - lineQ.size]]);
         annerg += lineQ.size;
          let videow = String.fromCharCode(110,95,52,49,95,119,101,105,103,104,116,0);
         sportX = parseFloat(`${tempL}`) < singaporeu;
         videow = `${videow.length % (Math.max(4, videow.length))}`;
         tempL >>= Math.min(Math.abs(parseInt(`${e_titleX}`) % 3), 1);
      appst = ((placeholderw.length ^ (previewQ ? placeholderw.length : 30)) > 30);
      placeholderw += `${(2 >> (Math.min(2, Math.abs((pageL ? 3 : 4)))))}`;
   if (Array.from(buttonE.values()).includes(debuga)) {
      debuga -= blacklistJ.length;
   }
   if (combineQ) {
      debuga /= Math.max(1, placeholderw.length / (Math.max(1, 3)));
   }
       let turnE = 5;
       let pingg = String.fromCharCode(108,95,52,52,95,102,114,101,101,102,111,114,109,0);
       let renewB = String.fromCharCode(111,95,54,49,95,98,105,110,107,100,97,116,97,0);
         turnE += pingg.length ^ 1;
      if (4 >= turnE) {
         turnE <<= Math.min(renewB.length, 1);
      }
          let halfV = false;
          let huaweiH = String.fromCharCode(108,95,50,53,95,100,101,115,116,114,111,121,0);
         turnE += turnE;
         halfV = !huaweiH.startsWith(`${halfV}`);
         huaweiH += `${huaweiH.length}`;
      for (let r = 0; r < 1; r++) {
          let minivodX = String.fromCharCode(121,95,49,52,95,117,110,97,115,115,105,103,110,101,100,0);
          let starf: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,95,111,110,101,116,105,109,101,97,117,116,104,0),834], [String.fromCharCode(118,95,51,50,95,117,110,115,111,114,116,101,100,0),964]]);
         pingg = `${pingg.length}`;
         minivodX = "2";
         starf = new Map([[`${starf.size}`, starf.size % (Math.max(9, minivodX.length))]]);
      }
      if (pingg.startsWith(renewB)) {
         pingg = `${(String.fromCharCode(117,0) == pingg ? pingg.length : turnE)}`;
      }
      if ((turnE >> (Math.min(Math.abs(5), 1))) <= 4 && (turnE >> (Math.min(Math.abs(5), 4))) <= 2) {
         turnE += 3;
      }
      while (pingg.length == 4) {
         pingg += `${turnE * 3}`;
         break;
      }
          let skipz = String.fromCharCode(119,95,49,54,0);
          let firebase_ = 4.0;
         turnE /= Math.max(renewB.length - 2, 2);
         skipz += `${parseInt(`${firebase_}`) * 2}`;
         firebase_ /= Math.max(parseFloat(`${parseInt(`${firebase_}`) >> (Math.min(skipz.length, 4))}`), 4);
      if (pingg != String.fromCharCode(89,0)) {
         renewB += `${turnE & renewB.length}`;
      }
      taila = new Map([[`${buttonE.size}`, 2 ^ renewB.length]]);
   let blackV = debuga >= 5522964.0;
   do {
      debuga += parseInt(`${customu}`);
      if (blackV) {
         break;
      }
   } while (((debuga - downloadingP.size) >= 5.94 && 1 >= (downloadingP.size - parseInt(`${debuga}`))) && blackV);
      transfere.set(`${appst}`, 2);

      dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    } else {
      dispatch(resumeVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    }
  }
}

function startVideoDownloadThunk(
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, ttOrange, any, ttPlaceholder> {
  return async function (dispatch, getState) {
    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === ZRChinasame.ZRSelectedBaidu){
       let bodanm: Array<any> = [574, 757];
    let types7 = 3;
    let mbridge7 = String.fromCharCode(104,95,56,52,95,107,101,121,112,97,116,104,0);
    let zhubor = String.fromCharCode(111,95,54,53,95,108,111,99,97,108,104,111,115,116,0);
    let regengt = 5.0;
    let regengO = 4.0;
    let subs3 = String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,95,110,95,56,53,0);
    let mbjscommon7: Map<any, any> = new Map([[String.fromCharCode(117,95,54,48,95,99,101,110,116,114,101,0),828], [String.fromCharCode(112,95,55,51,95,114,101,108,97,121,101,100,0),868], [String.fromCharCode(109,116,97,102,95,109,95,50,56,0),612]]);
    let reducer6 = String.fromCharCode(110,95,52,49,95,98,111,116,116,111,109,0);
      zhubor += `${bodanm.length}`;
       let switch_7eu = String.fromCharCode(100,111,119,110,115,104,105,102,116,95,111,95,52,51,0);
       let whatsappk = true;
       let mbsplashf = String.fromCharCode(115,104,105,102,116,101,100,95,112,95,57,54,0);
         switch_7eu += `${switch_7eu.length}`;
          let stepk = 0.0;
         switch_7eu = `${3 * parseInt(`${stepk}`)}`;
          let refreshW = 4.0;
         whatsappk = (66 < (switch_7eu.length & (whatsappk ? 66 : switch_7eu.length)));
         refreshW *= parseFloat(`${2}`);
      while (whatsappk || 2 >= switch_7eu.length) {
         whatsappk = switch_7eu.length <= 54 && !whatsappk;
         break;
      }
      if (whatsappk || 3 >= mbsplashf.length) {
         whatsappk = switch_7eu.includes(`${whatsappk}`);
      }
         mbsplashf = "3";
          let dplusC: Map<any, any> = new Map([[String.fromCharCode(100,95,49,56,95,105,110,116,101,103,114,97,108,0),707], [String.fromCharCode(101,95,54,49,95,112,105,112,101,0),13]]);
         switch_7eu = `${2 ^ dplusC.size}`;
          let suggestionZ = true;
          let statsj = String.fromCharCode(105,110,112,117,116,121,95,100,95,51,0);
          let configure7 = 2;
         whatsappk = (suggestionZ ? !whatsappk : !suggestionZ);
         statsj += `${statsj.length}`;
         configure7 += 1 ^ configure7;
         switch_7eu += `${((whatsappk ? 1 : 2))}`;
      types7 &= subs3.length | 2;
   for (let t = 0; t < 3; t++) {
       let stylesC = 3.0;
       let rank9 = true;
       let penalty3 = 5;
       let dialogP: Map<any, any> = new Map([[String.fromCharCode(114,111,103,114,97,109,95,57,95,49,54,0),321], [String.fromCharCode(114,95,50,53,95,101,120,112,114,108,105,115,116,0),817], [String.fromCharCode(115,95,52,48,95,114,105,115,101,0),782]]);
       let scoreV = 3.0;
      for (let s = 0; s < 3; s++) {
          let datao: Array<any> = [508, 141, 590];
         stylesC += parseInt(`${scoreV}`);
         datao = [datao.length];
      }
         penalty3 /= Math.max((parseInt(`${scoreV}`) << (Math.min(4, Math.abs((rank9 ? 3 : 4))))), 2);
          let pingb = String.fromCharCode(102,95,57,54,95,98,114,101,97,107,112,111,105,110,116,0);
          let gesturen: Array<any> = [String.fromCharCode(99,111,100,101,119,111,114,100,95,99,95,55,57,0), String.fromCharCode(101,95,53,50,95,115,97,116,100,0), String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,118,95,54,55,0)];
         dialogP = new Map([[`${dialogP.size}`, dialogP.size + 3]]);
         pingb = `${3 & gesturen.length}`;
         gesturen = [gesturen.length << (Math.min(pingb.length, 2))];
         stylesC += penalty3;
      if (penalty3 < 5 && 4 < (penalty3 >> (Math.min(Math.abs(5), 4)))) {
          let searchf = 2.0;
          let mored = true;
          let file8 = 5.0;
          let shareu = 2.0;
          let ewardedb = String.fromCharCode(108,95,53,56,95,116,114,117,110,107,0);
         penalty3 &= parseInt(`${shareu}`);
         searchf *= (parseFloat(`${(mored ? 3 : 3) & parseInt(`${file8}`)}`));
         mored = !mored;
         file8 /= Math.max(2, parseFloat(`${2 + parseInt(`${file8}`)}`));
         shareu *= (parseFloat(`${String.fromCharCode(75,0) == ewardedb ? ewardedb.length : parseInt(`${searchf}`)}`));
      }
         penalty3 >>= Math.min(Math.abs((parseInt(`${scoreV}`) + (rank9 ? 1 : 2))), 5);
         scoreV += parseFloat(`${parseInt(`${scoreV}`)}`);
          let awaym = String.fromCharCode(121,95,57,50,95,99,97,116,99,104,115,105,103,110,97,108,0);
          let placeholderz = 1.0;
         rank9 = dialogP.size <= stylesC;
         awaym += `${parseInt(`${placeholderz}`)}`;
         placeholderz += parseInt(`${placeholderz}`) / 1;
      while ((1 & dialogP.size) == 2 && 2.75 == (scoreV + 5.62)) {
         dialogP.set(`${rank9}`, 1 >> (Math.min(Math.abs(parseInt(`${stylesC}`)), 5)));
         break;
      }
         dialogP = new Map([[`${dialogP.size}`, ((rank9 ? 2 : 5) * dialogP.size)]]);
         rank9 = 5.44 < (stylesC * scoreV);
      if (2 <= (penalty3 % (Math.max(dialogP.size, 9)))) {
         penalty3 <<= Math.min(Math.abs(dialogP.size >> (Math.min(Math.abs(2), 1))), 4);
      }
      while (scoreV < 1.66) {
          let mutedb = String.fromCharCode(112,111,110,103,95,122,95,48,0);
          let viewsu = true;
          let plashd = String.fromCharCode(111,95,48,95,101,121,101,115,0);
          let minik: Array<any> = [String.fromCharCode(108,95,53,57,95,112,101,114,109,101,97,116,101,0), String.fromCharCode(110,95,55,50,95,115,99,101,110,101,0)];
         dialogP = new Map([[`${rank9}`, 3 << (Math.min(Math.abs(penalty3), 1))]]);
         mutedb = `${1 >> (Math.min(5, minik.length))}`;
         viewsu = String.fromCharCode(113,0) == plashd;
         plashd += `${((viewsu ? 4 : 5) + plashd.length)}`;
         minik = [3];
         break;
      }
         penalty3 |= penalty3 / 1;
      while (4.81 >= scoreV) {
          let component5 = String.fromCharCode(101,120,116,101,110,116,95,99,95,51,55,0);
         rank9 = (component5.length * parseInt(`${scoreV}`)) < 36;
         break;
      }
      subs3 = `${mbridge7.length << (Math.min(1, Math.abs(dialogP.size)))}`;
   }
       let gradlewm = String.fromCharCode(98,95,51,48,95,114,101,113,117,101,115,116,97,98,108,101,0);
       let auto_uN: Map<any, any> = new Map([[String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,101,95,57,53,0),362], [String.fromCharCode(105,110,105,116,100,101,99,95,112,95,49,0),84]]);
       let m_managerK = 0.0;
         m_managerK *= parseFloat(`${2 | parseInt(`${m_managerK}`)}`);
         m_managerK += parseFloat(`${parseInt(`${m_managerK}`)}`);
      for (let e = 0; e < 1; e++) {
          let fastforwardb: Array<any> = [97, 744];
          let infoh = String.fromCharCode(112,114,101,100,105,99,97,116,101,95,48,95,54,54,0);
         m_managerK /= Math.max((parseFloat(`${String.fromCharCode(95,0) == infoh ? infoh.length : auto_uN.size}`)), 2);
         fastforwardb.push(fastforwardb.length);
      }
      while (auto_uN.size >= 1) {
         auto_uN.set(gradlewm, 3);
         break;
      }
      for (let h = 0; h < 1; h++) {
         gradlewm += "3";
      }
      while ((parseFloat(`${auto_uN.size}`) / (Math.max(2, m_managerK))) < 4.43 || (2 - auto_uN.size) < 3) {
         auto_uN = new Map([[gradlewm, 2 + gradlewm.length]]);
         break;
      }
      let mbnativeadvancedN = 6357072 <= auto_uN.size;
      do {
         auto_uN = new Map([[`${auto_uN.size}`, auto_uN.size]]);
         if (mbnativeadvancedN) {
            break;
         }
      } while ((Array.from(auto_uN.keys()).includes(`${m_managerK}`)) && mbnativeadvancedN);
      for (let y = 0; y < 1; y++) {
         m_managerK /= Math.max(parseFloat(`${parseInt(`${m_managerK}`) ^ auto_uN.size}`), 2);
      }
         m_managerK += parseFloat(`${gradlewm.length}`);
      regengt -= 1;
      regengO *= parseFloat(`${bodanm.length}`);
   while (3.62 < (regengO / 5.76) && 5.76 < (regengO / (Math.max(regengt, 9)))) {
       let editg = String.fromCharCode(106,95,52,95,104,97,110,100,108,101,0);
          let plashc = 3.0;
         editg += "3";
         plashc += parseFloat(`${parseInt(`${plashc}`) % 3}`);
         editg += `${editg.length / 1}`;
         editg += `${1 << (Math.min(4, editg.length))}`;
      regengt += 3;
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
       let filedE = 1.0;
    let lessK = String.fromCharCode(99,95,55,53,95,104,97,114,100,119,97,114,101,0);
    let fileU = true;
    let borderlessi: Array<any> = [803, 760];
    let zoomS = String.fromCharCode(112,114,111,102,105,108,101,95,120,95,51,48,0);
    let moduleq = true;
    let traminij = String.fromCharCode(98,117,105,108,100,95,100,95,50,51,0);
    let catagory1 = true;
    let liveB = 1;
    let share1: Map<any, any> = new Map([[String.fromCharCode(116,95,57,54,95,97,114,101,113,117,101,115,116,0),true ], [String.fromCharCode(106,95,49,49,0),true ], [String.fromCharCode(98,95,57,48,95,97,116,117,114,97,116,105,111,110,0),true ]]);
    let spinnerm = String.fromCharCode(113,95,49,95,114,102,99,116,0);
    let downloaded4 = String.fromCharCode(99,104,97,99,104,97,112,111,108,121,95,122,95,50,0);
    let backwardH = 3.0;
    let moonK: Map<any, any> = new Map([[String.fromCharCode(113,112,102,105,108,101,95,102,95,49,52,0),809], [String.fromCharCode(103,101,110,99,102,103,115,95,101,95,57,49,0),862], [String.fromCharCode(115,95,53,54,95,109,97,110,100,97,116,111,114,121,0),689]]);
      liveB &= (3 * (catagory1 ? 1 : 3));
      catagory1 = zoomS.startsWith(`${moduleq}`);
   let rewardvideoO = traminij.length >= 8493547;
   do {
       let register_2b = 3;
       let firebase6 = String.fromCharCode(100,105,115,109,105,115,115,105,110,103,95,115,95,53,57,0);
       let reminderk: Array<any> = [102, 175, 268];
       let colorso: Map<any, any> = new Map([[String.fromCharCode(110,117,108,108,95,121,95,55,55,0),false ], [String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,95,53,95,53,49,0),false ], [String.fromCharCode(109,117,108,116,120,95,54,95,50,51,0),false ]]);
       let customu = 2.0;
         customu *= parseFloat(`${colorso.size}`);
      if (4 >= (4 + firebase6.length)) {
         colorso.set(firebase6, (String.fromCharCode(99,0) == firebase6 ? firebase6.length : reminderk.length));
      }
       let debug4 = false;
       let zhengpiank = 2.0;
       let react9 = 2.0;
       let report2 = String.fromCharCode(100,95,54,57,95,98,97,99,107,115,112,97,99,101,0);
       let anythinkH = String.fromCharCode(99,95,53,49,95,115,97,99,107,0);
         register_2b &= (1 - (debug4 ? 1 : 2));
         firebase6 = `${anythinkH.length - colorso.size}`;
      while (firebase6.length < reminderk.length) {
          let weiboI = String.fromCharCode(121,117,118,112,108,97,110,101,95,119,95,55,53,0);
          let chinam = 3;
          let light7 = String.fromCharCode(119,104,105,116,101,108,105,115,116,101,100,95,115,95,53,57,0);
         reminderk = [2 & anythinkH.length];
         weiboI += `${3 >> (Math.min(5, Math.abs(chinam)))}`;
         chinam %= Math.max(1 ^ weiboI.length, 5);
         light7 += `${(String.fromCharCode(118,0) == light7 ? light7.length : weiboI.length)}`;
         break;
      }
      while (react9 < 5.63) {
          let actiond = 3.0;
          let gemfile9 = 0.0;
          let annerk = 2;
         react9 -= parseInt(`${zhengpiank}`) + 1;
         actiond /= Math.max(parseFloat(`${parseInt(`${gemfile9}`) * parseInt(`${actiond}`)}`), 3);
         gemfile9 += 1;
         annerk &= 1 << (Math.min(Math.abs(annerk), 1));
         break;
      }
      if ((zhengpiank + 3.33) <= 3.21 || 2.20 <= (3.33 + react9)) {
         react9 /= Math.max(4, report2.length >> (Math.min(5, Math.abs(parseInt(`${react9}`)))));
      }
      if (anythinkH.length > reminderk.length) {
          let confirmationR = 5;
          let bellH = String.fromCharCode(99,95,49,51,95,112,105,120,100,101,115,99,0);
          let vietnamI = String.fromCharCode(107,95,55,50,95,109,117,108,0);
          let gradled = 0.0;
          let smallJ: Array<any> = [253, 505];
         reminderk = [confirmationR];
         confirmationR ^= 1;
         bellH = `${smallJ.length}`;
         vietnamI += `${vietnamI.length}`;
         gradled *= parseFloat(`${smallJ.length % (Math.max(bellH.length, 1))}`);
      }
         debug4 = 14 >= anythinkH.length;
      while ((anythinkH.length * zhengpiank) >= 5.80) {
         anythinkH += `${parseInt(`${react9}`) / (Math.max(2, parseInt(`${zhengpiank}`)))}`;
         break;
      }
         anythinkH += `${firebase6.length}`;
      if ((1 * firebase6.length) > 2 || (1 * register_2b) > 4) {
         firebase6 += `${3 << (Math.min(1, Math.abs(colorso.size)))}`;
      }
      traminij += "1";
      if (rewardvideoO) {
         break;
      }
   } while ((!catagory1 && 1 == traminij.length) && rewardvideoO);
      borderlessi.push(2 << (Math.min(3, traminij.length)));
      share1.set(spinnerm, (2 - (fileU ? 5 : 2)));
   let long_5qm = 8111125 >= borderlessi.length;
   do {
      borderlessi = [(share1.size | (moduleq ? 5 : 1))];
      if (long_5qm) {
         break;
      }
   } while ((3 <= (liveB + 5) && 2 <= (5 + borderlessi.length)) && long_5qm);
       let lightg = String.fromCharCode(109,97,110,117,97,108,95,119,95,52,48,0);
       let long_29C: Array<any> = [543, 247, 890];
      for (let s = 0; s < 2; s++) {
         long_29C.push(long_29C.length << (Math.min(lightg.length, 2)));
      }
      while (1 >= (lightg.length & 2) || (long_29C.length & 2) >= 3) {
          let windV = String.fromCharCode(102,117,110,99,116,105,111,110,95,117,95,49,54,0);
          let untick6 = String.fromCharCode(98,95,53,57,95,112,101,101,107,0);
          let reactnativejsM = false;
          let mbnative7 = String.fromCharCode(102,101,108,101,109,95,111,95,54,52,0);
         lightg = `${long_29C.length}`;
         windV += `${(mbnative7 == String.fromCharCode(105,0) ? mbnative7.length : windV.length)}`;
         untick6 += `${((reactnativejsM ? 2 : 5) & mbnative7.length)}`;
         reactnativejsM = untick6.length >= 26 && !reactnativejsM;
         break;
      }
      while (2 >= (long_29C.length * 4)) {
          let reminderC = 3;
          let matchd = 4.0;
          let muted5 = 3;
          let productl = 4.0;
          let telegramP = 3;
         lightg += `${telegramP}`;
         reminderC |= muted5;
         matchd /= Math.max(parseFloat(`${muted5 * parseInt(`${matchd}`)}`), 2);
         productl += parseInt(`${productl}`) / 2;
         telegramP &= parseInt(`${matchd}`);
         break;
      }
       let emptyV = 0.0;
       let roboto5 = 3;
       let dplus7 = 5;
         dplus7 <<= Math.min(Math.abs(parseInt(`${emptyV}`)), 3);
      fileU = (lightg.length << (Math.min(zoomS.length, 4))) < 93;
   while ((5.96 + filedE) >= 5.79 || 1.45 >= (5.96 + filedE)) {
      filedE += lessK.length - 1;
      break;
   }

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

      traminij += `${3 + zoomS.length}`;
   while (4 == spinnerm.length) {
      traminij = `${traminij.length}`;
      break;
   }
   let stepg = moduleq ? !moduleq : moduleq;
   do {
      moduleq = traminij.includes(`${catagory1}`);
      if (stepg) {
         break;
      }
   } while ((moduleq) && stepg);
      filedE /= Math.max(2 * borderlessi.length, 4);
       let streaming1: Array<any> = [565, 586];
       let homec = String.fromCharCode(118,95,53,56,95,112,99,109,98,0);
       let albumc: Map<any, any> = new Map([[String.fromCharCode(102,95,57,51,95,100,97,116,97,98,108,111,99,107,0),true ], [String.fromCharCode(109,111,110,116,104,95,116,95,56,0),true ], [String.fromCharCode(117,95,56,52,95,109,105,110,117,116,101,115,0),false ]]);
       let sideG = 3.0;
       let middlex = String.fromCharCode(102,95,54,53,95,116,104,114,111,119,0);
         streaming1.push((homec == String.fromCharCode(106,0) ? streaming1.length : homec.length));
         middlex += `${streaming1.length & middlex.length}`;
      let styleX = middlex.length <= 8546561;
      do {
          let shrinkP = String.fromCharCode(102,108,111,111,114,95,118,95,49,49,0);
         middlex += `${homec.length}`;
         shrinkP += `${shrinkP.length}`;
         if (styleX) {
            break;
         }
      } while ((middlex.length > 5) && styleX);
      if (sideG <= streaming1.length) {
          let shirtr = 0.0;
         sideG *= (String.fromCharCode(114,0) == middlex ? parseInt(`${sideG}`) : middlex.length);
         shirtr *= parseFloat(`${parseInt(`${shirtr}`) >> (Math.min(3, Math.abs(3)))}`);
      }
      while (albumc.get(`${sideG}`) != null) {
         sideG /= Math.max(3, albumc.size);
         break;
      }
      if (!middlex.includes(`${homec.length}`)) {
          let stats8 = String.fromCharCode(120,95,54,55,95,111,112,101,114,97,116,105,111,110,115,0);
         homec += `${homec.length}`;
         stats8 = `${(stats8 == String.fromCharCode(83,0) ? stats8.length : stats8.length)}`;
      }
          let inviteD: Map<any, any> = new Map([[String.fromCharCode(119,105,102,105,95,49,95,51,50,0),196], [String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,54,95,52,49,0),431]]);
          let termss = 3.0;
          let gift8 = String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,99,95,52,49,0);
         streaming1.push(3 * middlex.length);
         inviteD.set(`${termss}`, gift8.length + 2);
         termss -= (parseFloat(`${gift8 == String.fromCharCode(48,0) ? gift8.length : parseInt(`${termss}`)}`));
      share1.set(`${moduleq}`, albumc.size);
   if (catagory1 || 1 < zoomS.length) {
      zoomS = `${lessK.length << (Math.min(Math.abs(3), 5))}`;
   }
   for (let m = 0; m < 1; m++) {
       let traminiH = 1.0;
       let thumbnailQ = 4.0;
       let shoot2 = String.fromCharCode(116,95,53,57,95,100,105,115,101,109,118,111,119,101,108,101,100,0);
          let kuaishouk = String.fromCharCode(99,104,97,110,103,101,100,104,95,99,95,56,53,0);
         shoot2 += "1";
         kuaishouk += "1";
      for (let k = 0; k < 1; k++) {
         thumbnailQ /= Math.max(parseInt(`${traminiH}`), 3);
      }
          let page_ = String.fromCharCode(97,99,99,114,117,101,95,101,95,57,48,0);
          let completex = false;
          let downd: Map<any, any> = new Map([[String.fromCharCode(119,95,54,48,95,119,114,105,116,101,99,108,101,97,114,0),false ], [String.fromCharCode(104,101,108,112,95,106,95,53,56,0),true ], [String.fromCharCode(97,95,54,57,95,99,111,109,112,108,105,99,97,116,105,111,110,0),true ]]);
         thumbnailQ *= parseInt(`${traminiH}`);
         page_ += "1";
         completex = 27 <= downd.size;
         downd = new Map([[`${downd.size}`, downd.size]]);
         traminiH += parseFloat(`${2 << (Math.min(2, Math.abs(parseInt(`${thumbnailQ}`))))}`);
      let trophyb = shoot2 == String.fromCharCode(120,111,112,100,50,122,116,50,109,108,0);
      do {
         shoot2 += `${parseInt(`${traminiH}`) / (Math.max(shoot2.length, 8))}`;
         if (trophyb) {
            break;
         }
      } while (trophyb && (1 >= shoot2.length));
         shoot2 = `${parseInt(`${traminiH}`) + parseInt(`${thumbnailQ}`)}`;
      for (let c = 0; c < 2; c++) {
          let crownT = 4;
          let phonea = String.fromCharCode(106,112,101,103,108,115,95,114,95,51,56,0);
         traminiH *= (parseFloat(`${String.fromCharCode(100,0) == phonea ? phonea.length : parseInt(`${thumbnailQ}`)}`));
         crownT %= Math.max(4, 1);
      }
      for (let r = 0; r < 3; r++) {
          let filedS = 3.0;
          let s_titleq = String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,57,95,57,56,0);
         shoot2 = `${3 << (Math.min(1, shoot2.length))}`;
         filedS *= parseFloat(`${s_titleq.length >> (Math.min(Math.abs(3), 1))}`);
         s_titleq = `${s_titleq.length & 1}`;
      }
          let eactN = 2.0;
          let androidE: Array<any> = [276, 266, 566];
         thumbnailQ += androidE.length | 1;
         eactN /= Math.max(5, parseInt(`${eactN}`) & 3);
         androidE = [parseInt(`${eactN}`)];
      traminij += `${(parseInt(`${filedE}`) * (moduleq ? 5 : 4))}`;
   }
       let actionJ = String.fromCharCode(118,95,53,56,95,115,101,101,107,104,101,97,100,0);
       let privilegeg: Map<any, any> = new Map([[String.fromCharCode(121,95,55,51,95,116,121,112,101,0),false ], [String.fromCharCode(112,95,50,49,95,116,119,111,119,97,121,0),true ], [String.fromCharCode(102,95,50,54,95,108,105,102,101,0),false ]]);
       let module0 = String.fromCharCode(108,111,97,100,95,122,95,54,55,0);
         privilegeg = new Map([[`${privilegeg.size}`, 1 + actionJ.length]]);
         actionJ = `${module0.length}`;
      for (let o = 0; o < 3; o++) {
         actionJ = `${3 >> (Math.min(2, Math.abs(privilegeg.size)))}`;
      }
         module0 = `${privilegeg.size}`;
         module0 = `${module0.length}`;
      for (let p = 0; p < 2; p++) {
          let indexj = 0.0;
          let register_97C: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,105,118,101,95,105,95,51,53,0),416], [String.fromCharCode(121,95,51,49,95,116,102,100,116,0),508]]);
          let appsp: Map<any, any> = new Map([[String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,95,52,95,49,51,0),true ], [String.fromCharCode(117,110,98,105,110,100,95,114,95,57,55,0),false ]]);
         module0 += `${appsp.size % (Math.max(actionJ.length, 3))}`;
         indexj += parseFloat(`${register_97C.size}`);
         register_97C.set(`${indexj}`, parseInt(`${indexj}`));
         appsp = new Map([[`${register_97C.size}`, register_97C.size & 1]]);
      }
      while (4 < module0.length) {
         module0 = `${privilegeg.size / 3}`;
         break;
      }
      if (actionJ.length >= privilegeg.size) {
         privilegeg.set(module0, (module0 == String.fromCharCode(112,0) ? module0.length : actionJ.length));
      }
      let groupx = module0.length >= 5408853;
      do {
          let uploadz = 1.0;
          let phonew = false;
          let eventw = String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,118,95,55,49,0);
          let countdownb: Array<any> = [928, 975];
         module0 = `${module0.length ^ 1}`;
         uploadz /= Math.max(1, parseFloat(`${3 + parseInt(`${uploadz}`)}`));
         phonew = 22.30 <= uploadz;
         eventw += `${(String.fromCharCode(53,0) == eventw ? (phonew ? 5 : 4) : eventw.length)}`;
         countdownb.push(countdownb.length >> (Math.min(eventw.length, 5)));
         if (groupx) {
            break;
         }
      } while (groupx && (actionJ != String.fromCharCode(99,0)));
      downloaded4 = "1";
      const newState = getState().downloadVideoReducer

       let loginE = 1.0;
      if (2.53 > (4.79 + loginE) || (loginE - 4.79) > 3.86) {
          let fullq: Array<any> = [641, 721];
         loginE += 1;
         fullq = [fullq.length % 2];
      }
       let zhengpianC = String.fromCharCode(98,95,55,55,95,98,114,101,97,100,99,114,117,109,98,115,0);
       let circlej = String.fromCharCode(111,95,51,54,95,115,99,97,108,97,98,108,101,0);
      while (!zhengpianC.includes(circlej)) {
         circlej = `${1 ^ zhengpianC.length}`;
         break;
      }
      liveB ^= 3;
       let module7: Map<any, any> = new Map([[String.fromCharCode(110,117,109,101,114,97,108,115,95,120,95,50,50,0),759], [String.fromCharCode(99,111,110,116,101,120,116,99,111,110,102,105,103,95,111,95,48,0),117], [String.fromCharCode(107,95,52,51,95,115,110,97,112,115,104,111,116,116,101,114,0),458]]);
       let screen6 = String.fromCharCode(100,95,54,95,100,98,111,111,108,104,117,102,102,0);
      let down2 = String.fromCharCode(48,50,120,106,102,121,50,95,118,103,0) == screen6;
      do {
         screen6 = `${1 >> (Math.min(2, screen6.length))}`;
         if (down2) {
            break;
         }
      } while (((screen6.length | 2) > 3 || 1 > (screen6.length | 2)) && down2);
         screen6 += "2";
      let navigation6 = 7149155 <= module7.size;
      do {
         module7.set(`${screen6}`, 3 + module7.size);
         if (navigation6) {
            break;
         }
      } while ((screen6.length >= module7.size) && navigation6);
      for (let w = 0; w < 2; w++) {
         screen6 += "2";
      }
      let header5 = String.fromCharCode(116,104,49,108,122,0) == screen6;
      do {
         screen6 = "1";
         if (header5) {
            break;
         }
      } while (header5 && (2 > (screen6.length & 5) || 5 > (module7.size & screen6.length)));
      if (3 >= (module7.size - 5) && (screen6.length - 5) >= 4) {
         module7.set(`${screen6}`, screen6.length);
      }
      zoomS = `${parseInt(`${filedE}`) & 2}`;
      downloaded4 += `${(2 % (Math.max(2, (fileU ? 2 : 2))))}`;
   if (moduleq && downloaded4.length < 4) {
       let collection0 = 4.0;
      for (let g = 0; g < 1; g++) {
         collection0 += parseInt(`${collection0}`);
      }
      let empty5 = 6894400.0 <= collection0;
      do {
         collection0 /= Math.max(parseInt(`${collection0}`), 3);
         if (empty5) {
            break;
         }
      } while ((collection0 >= 3.62) && empty5);
      if ((collection0 + collection0) <= 1.78) {
         collection0 -= parseInt(`${collection0}`) * parseInt(`${collection0}`);
      }
      downloaded4 += "2";
   }
   while (catagory1) {
      moduleq = (lessK.length & liveB) == 85;
      break;
   }
       let yellows = String.fromCharCode(101,120,112,108,105,99,105,116,108,121,95,108,95,55,50,0);
       let save1 = String.fromCharCode(108,95,57,51,95,115,116,97,103,105,110,103,0);
       let xvodJ = 3.0;
      if (!save1.startsWith(yellows)) {
         yellows += `${save1.length ^ yellows.length}`;
      }
      for (let w = 0; w < 1; w++) {
         save1 += `${yellows.length >> (Math.min(3, save1.length))}`;
      }
          let mimoV = true;
          let pagec = 5.0;
         yellows = `${(3 + (mimoV ? 1 : 2))}`;
         mimoV = 89.56 < pagec || pagec < 89.56;
          let whistle6: Map<any, any> = new Map([[String.fromCharCode(116,95,54,48,95,97,99,116,105,118,105,116,121,0),501], [String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,56,95,54,53,0),887]]);
          let backn: Array<any> = [String.fromCharCode(102,95,57,57,95,115,113,108,105,116,101,115,101,115,115,105,111,110,0), String.fromCharCode(101,110,117,109,115,95,107,95,52,0)];
          let previewu: Map<any, any> = new Map([[String.fromCharCode(119,95,52,48,95,117,100,105,111,0),977], [String.fromCharCode(112,108,97,121,101,100,95,51,95,57,52,0),81]]);
         yellows += `${previewu.size * 3}`;
         whistle6.set(`${backn.length}`, whistle6.size);
         backn = [whistle6.size - backn.length];
         previewu.set(`${backn.length}`, 1 % (Math.max(4, whistle6.size)));
         save1 = `${yellows.length ^ 3}`;
      for (let d = 0; d < 1; d++) {
         xvodJ += parseInt(`${xvodJ}`);
      }
      while (yellows == save1) {
          let episodesL = String.fromCharCode(107,95,49,57,95,97,118,115,117,98,116,105,116,108,101,0);
          let chatP: Map<any, any> = new Map([[String.fromCharCode(119,95,57,48,95,115,116,97,114,116,114,101,101,0),String.fromCharCode(111,112,116,105,109,105,115,109,95,51,95,51,57,0)], [String.fromCharCode(118,95,50,53,95,112,116,114,109,97,112,0),String.fromCharCode(99,111,114,100,95,56,95,54,52,0)]]);
          let pressurer: Array<any> = [587, 691, 717];
         save1 += "3";
         episodesL += `${chatP.size}`;
         chatP = new Map([[`${chatP.size}`, pressurer.length]]);
         pressurer = [episodesL.length];
         break;
      }
         save1 = `${parseInt(`${xvodJ}`)}`;
         save1 = `${yellows.length | 1}`;
      catagory1 = ((lessK.length - (!fileU ? lessK.length : 3)) <= 3);
      filedE /= Math.max(1, 1 | share1.size);
       let configureR = 2.0;
       let toponv = 4;
       let zhengpiani = 1;
         configureR -= parseFloat(`${2}`);
         toponv /= Math.max(3, zhengpiani);
      catagory1 = (filedE * lessK.length) == 75.32;
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
    }

    const handleError = () => {
       let wind3 = 2.0;
    let debugZ: Array<any> = [485, 929];
    let phone0 = 5;
    let pathp: Array<any> = [90, 47, 723];
    let largep = 1.0;
    let sentrym = String.fromCharCode(104,95,50,50,95,105,110,105,116,104,0);
    let stepA = false;
    let commonY: Map<any, any> = new Map([[String.fromCharCode(101,120,112,114,95,101,95,53,57,0),321], [String.fromCharCode(97,100,106,97,99,101,110,116,95,119,95,52,55,0),454]]);
    let leaguel = 1.0;
    let bufferR = String.fromCharCode(100,95,49,49,95,119,97,116,101,114,0);
    let rewindP: Map<any, any> = new Map([[String.fromCharCode(115,97,110,105,116,105,122,101,95,99,95,54,51,0),false ], [String.fromCharCode(97,99,114,111,110,121,109,115,95,105,95,53,0),true ], [String.fromCharCode(105,116,101,114,97,116,101,95,98,95,53,51,0),false ]]);
    let miniJ = String.fromCharCode(97,95,50,54,95,116,105,99,107,101,114,0);
       let selectedg: Array<any> = [String.fromCharCode(97,100,100,105,95,99,95,54,53,0), String.fromCharCode(102,95,57,57,95,112,111,119,101,114,0), String.fromCharCode(105,110,116,101,114,95,108,95,53,50,0)];
      while ((selectedg.length ^ 3) == 3 && 1 == (3 ^ selectedg.length)) {
         selectedg = [selectedg.length];
         break;
      }
      if ((selectedg.length ^ selectedg.length) >= 5) {
         selectedg = [selectedg.length >> (Math.min(Math.abs(2), 5))];
      }
       let castingV = true;
      pathp.push(1);
   for (let v = 0; v < 1; v++) {
      sentrym += `${2 | sentrym.length}`;
   }

      console.debug('error downloading ', vod.vod_name)

       let p_player7 = false;
      while (p_player7 || !p_player7) {
         p_player7 = !p_player7;
         break;
      }
      let frame_1lc = p_player7 ? !p_player7 : p_player7;
      do {
         p_player7 = (!p_player7 ? !p_player7 : !p_player7);
         if (frame_1lc) {
            break;
         }
      } while ((!p_player7) && frame_1lc);
          let commonT = false;
          let condensedq: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,53,95,54,57,0),29], [String.fromCharCode(114,95,50,51,95,97,97,99,101,110,99,0),255], [String.fromCharCode(99,117,100,97,115,99,97,108,101,95,97,95,54,56,0),23]]);
          let rewardC = String.fromCharCode(107,95,49,56,95,112,105,99,107,101,114,115,0);
         p_player7 = rewardC.startsWith(`${commonT}`);
         commonT = condensedq.size > condensedq.size;
      commonY.set(sentrym, commonY.size >> (Math.min(Math.abs(3), 2)));
   while (largep >= 4.94) {
      sentrym += `${((stepA ? 5 : 2) * parseInt(`${wind3}`))}`;
      break;
   }
      const state = getState().downloadVideoReducer

   if (!stepA) {
      debugZ = [commonY.size >> (Math.min(5, Math.abs(parseInt(`${wind3}`))))];
   }
       let pagek = String.fromCharCode(104,95,50,55,95,112,115,115,104,0);
       let playercommonj = 1.0;
       let countdown_ = String.fromCharCode(102,108,111,111,114,115,95,49,95,50,53,0);
         countdown_ = "2";
      while ((playercommonj / (Math.max(parseFloat(`${pagek.length}`), 7))) > 5.42 && 4 > (pagek.length + 5)) {
         playercommonj /= Math.max(parseFloat(`${pagek.length}`), 4);
         break;
      }
      if ((playercommonj * parseFloat(`${countdown_.length}`)) <= 1.71 || 1 <= (1 + countdown_.length)) {
         playercommonj -= parseFloat(`${pagek.length}`);
      }
       let serviceC: Map<any, any> = new Map([[String.fromCharCode(98,97,100,103,101,115,95,55,95,56,49,0),341], [String.fromCharCode(107,95,51,56,95,99,111,108,111,114,115,112,97,99,101,0),781]]);
         playercommonj -= parseFloat(`${2 & pagek.length}`);
      if (!countdown_.includes(`${serviceC.size}`)) {
          let matchesX = 0;
          let analytics1: Map<any, any> = new Map([[String.fromCharCode(100,111,109,97,105,110,95,114,95,52,51,0),true ], [String.fromCharCode(110,101,116,105,115,114,95,52,95,52,50,0),true ]]);
         serviceC = new Map([[countdown_, countdown_.length % (Math.max(10, matchesX))]]);
         matchesX |= 2 / (Math.max(7, analytics1.size));
         analytics1 = new Map([[`${analytics1.size}`, analytics1.size]]);
      }
      let mutedg = String.fromCharCode(50,54,100,56,0) == pagek;
      do {
         pagek = `${pagek.length}`;
         if (mutedg) {
            break;
         }
      } while (((serviceC.size << (Math.min(Math.abs(1), 4))) <= 3) && mutedg);
          let renewK = String.fromCharCode(104,95,50,53,95,115,108,105,100,101,0);
          let coret = 1.0;
         pagek += "2";
         renewK = `${parseInt(`${coret}`) / (Math.max(renewK.length, 9))}`;
         coret -= parseInt(`${coret}`) << (Math.min(renewK.length, 1));
         countdown_ = `${countdown_.length >> (Math.min(Math.abs(2), 2))}`;
      stepA = debugZ.length == pathp.length;
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

      commonY.set(`${largep}`, 3 / (Math.max(3, parseInt(`${largep}`))));
   if (debugZ.length <= 1) {
       let selectedV: Array<any> = [String.fromCharCode(116,111,100,97,121,115,95,50,95,53,57,0), String.fromCharCode(107,95,56,57,95,115,104,111,117,108,100,0), String.fromCharCode(116,107,104,100,95,111,95,53,55,0)];
       let philippinesX = String.fromCharCode(121,95,54,56,95,99,114,108,102,0);
       let scheduleP: Array<any> = [String.fromCharCode(111,95,53,50,95,99,97,109,101,108,108,105,97,0), String.fromCharCode(113,95,49,57,95,114,101,115,117,109,101,0)];
       let storef = 1.0;
       let albumK: Map<any, any> = new Map([[String.fromCharCode(99,114,121,115,116,97,108,104,100,95,101,95,51,53,0),String.fromCharCode(109,101,109,117,116,105,108,95,97,95,54,53,0)], [String.fromCharCode(101,95,52,50,95,111,112,116,105,111,110,115,0),String.fromCharCode(100,99,116,95,102,95,49,49,0)], [String.fromCharCode(97,95,55,52,95,109,97,110,117,97,108,108,121,0),String.fromCharCode(115,95,57,51,95,107,101,121,102,114,97,109,101,0)]]);
          let long_gcI = String.fromCharCode(114,101,112,108,105,99,97,116,101,100,95,104,95,54,56,0);
          let twitterr = 3.0;
         albumK.set(`${storef}`, albumK.size >> (Math.min(Math.abs(1), 1)));
         long_gcI = `${2 << (Math.min(3, Math.abs(parseInt(`${twitterr}`))))}`;
         twitterr += parseInt(`${twitterr}`) * 3;
       let profilev = String.fromCharCode(119,95,56,53,95,116,101,114,109,105,110,97,116,101,0);
         profilev += `${(String.fromCharCode(57,0) == profilev ? profilev.length : selectedV.length)}`;
       let calendard = String.fromCharCode(116,95,55,52,95,103,100,115,112,0);
       let appleb = String.fromCharCode(103,95,52,55,95,99,111,108,108,101,99,116,97,98,108,101,0);
         scheduleP.push(3);
         storef /= Math.max(parseInt(`${storef}`) - 1, 4);
         profilev += `${appleb.length & albumK.size}`;
      let ajaxk = String.fromCharCode(101,112,113,97,120,112,50,0) == calendard;
      do {
         calendard = `${calendard.length}`;
         if (ajaxk) {
            break;
         }
      } while ((profilev != String.fromCharCode(101,0)) && ajaxk);
      while (!profilev.includes(appleb)) {
         appleb += "2";
         break;
      }
      let langkeyx = storef >= 8034526.0;
      do {
         storef -= parseInt(`${storef}`);
         if (langkeyx) {
            break;
         }
      } while (((5.8 * storef) >= 5.24) && langkeyx);
       let privacyT = String.fromCharCode(98,105,119,101,105,103,104,116,95,110,95,51,55,0);
       let regengT = String.fromCharCode(121,95,49,51,95,107,110,111,99,107,111,117,116,0);
          let actionH = String.fromCharCode(118,95,54,56,95,117,110,112,117,98,108,105,115,104,0);
         profilev += `${appleb.length}`;
         actionH = `${3 - actionH.length}`;
          let with_xrC = 3;
          let default_1aE = true;
          let themeV: Map<any, any> = new Map([[String.fromCharCode(101,95,49,56,95,112,117,98,108,105,99,107,101,121,115,0),848], [String.fromCharCode(119,95,50,54,95,117,110,99,111,109,112,114,101,115,115,101,100,0),967], [String.fromCharCode(100,111,120,121,103,101,110,95,53,95,56,52,0),20]]);
         albumK = new Map([[appleb, 2 ^ calendard.length]]);
         with_xrC -= 1;
         default_1aE = with_xrC < themeV.size;
         themeV.set(`${default_1aE}`, ((default_1aE ? 2 : 1) | 3));
      for (let z = 0; z < 3; z++) {
         philippinesX += `${selectedV.length / (Math.max(7, parseInt(`${storef}`)))}`;
      }
      while (scheduleP.length < 2) {
          let p_titleh: Map<any, any> = new Map([[String.fromCharCode(109,111,110,103,111,95,50,95,49,56,0),true ], [String.fromCharCode(113,95,57,55,95,97,108,111,99,0),false ], [String.fromCharCode(115,110,97,112,104,111,116,95,112,95,51,52,0),true ]]);
          let usernamee: Array<any> = [String.fromCharCode(121,95,51,48,95,111,108,97,110,97,0), String.fromCharCode(99,95,51,53,95,122,111,109,98,105,101,0), String.fromCharCode(118,95,52,55,95,116,116,97,101,110,99,100,115,112,0)];
         philippinesX = `${parseInt(`${storef}`) & usernamee.length}`;
         p_titleh.set(`${p_titleh.size}`, p_titleh.size / (Math.max(3, 7)));
         usernamee.push(p_titleh.size - p_titleh.size);
         break;
      }
      debugZ.push(1);
   }
      if (!targetEpisode) return 
      if (targetEpisode?.status === ZRChinasame.ZRBackwardTemp){

      pathp.push(debugZ.length / (Math.max(2, 6)));
   let texta = 8724137.0 >= largep;
   do {
      largep /= Math.max(3, (parseFloat(`${sentrym.length * (stepA ? 4 : 1)}`)));
      if (texta) {
         break;
      }
   } while (texta && (2.88 < (largep * 3.81)));
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: ZRChinasame.ZRGoal
      }))

   if (phone0 <= 4) {
      phone0 ^= ((stepA ? 3 : 1) ^ parseInt(`${wind3}`));
   }
      commonY.set(`${stepA}`, (sentrym.length % (Math.max(4, (stepA ? 5 : 4)))));

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

   let emptyU = phone0 >= 8085657;
   do {
      phone0 >>= Math.min(3, Math.abs(phone0 - 1));
      if (emptyU) {
         break;
      }
   } while (emptyU && (2 >= (1 * commonY.size) || 5 >= (1 * commonY.size)));
   if ((4 % (Math.max(10, pathp.length))) >= 4 && !stepA) {
       let nterstitialw = 2.0;
       let path3: Array<any> = [110, 422, 775];
          let tooltipsj = String.fromCharCode(119,95,53,57,95,100,101,109,97,110,100,0);
          let animationg: Array<any> = [411, 52];
         nterstitialw *= parseInt(`${nterstitialw}`);
         tooltipsj = `${tooltipsj.length % 1}`;
         animationg = [animationg.length % (Math.max(tooltipsj.length, 6))];
      while ((nterstitialw / (Math.max(path3.length, 2))) < 3.31 || (path3.length & 1) < 2) {
          let cast3: Map<any, any> = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,95,102,95,49,51,0),523], [String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,54,95,49,49,0),512], [String.fromCharCode(111,95,56,54,95,112,114,101,99,0),465]]);
          let u_centeri = false;
          let hejit = 1.0;
          let configure5: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,122,95,54,56,0),String.fromCharCode(98,95,54,55,95,99,108,103,101,116,0)], [String.fromCharCode(99,108,101,97,114,105,110,103,95,108,95,56,51,0),String.fromCharCode(120,95,55,55,95,108,105,98,121,117,118,0)], [String.fromCharCode(99,104,114,111,110,111,95,108,95,53,51,0),String.fromCharCode(103,95,50,95,121,100,97,121,0)]]);
          let search3 = 3.0;
         nterstitialw -= parseInt(`${search3}`);
         cast3.set(`${u_centeri}`, ((u_centeri ? 5 : 4) + cast3.size));
         hejit *= parseFloat(`${configure5.size}`);
         configure5.set(`${cast3.size}`, 2 * cast3.size);
         break;
      }
         nterstitialw *= path3.length;
      while ((nterstitialw / (Math.max(path3.length, 1))) == 4.84 && 5.78 == (4.84 / (Math.max(3, nterstitialw)))) {
          let calendar5 = String.fromCharCode(99,97,110,99,101,108,95,56,95,49,54,0);
          let infoE = String.fromCharCode(100,105,114,112,95,106,95,54,57,0);
          let internetO = 2.0;
          let kuaishouV: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,99,97,116,101,100,95,99,95,55,55,0),655], [String.fromCharCode(106,95,51,51,0),713], [String.fromCharCode(107,95,49,48,95,114,117,110,108,111,111,112,0),379]]);
          let connectionK = String.fromCharCode(118,95,53,55,95,109,111,110,116,0);
         path3 = [1];
         calendar5 = `${connectionK.length / (Math.max(3, 4))}`;
         infoE = `${(calendar5 == String.fromCharCode(104,0) ? calendar5.length : connectionK.length)}`;
         internetO /= Math.max(4, parseFloat(`${3}`));
         kuaishouV = new Map([[calendar5, infoE.length >> (Math.min(Math.abs(2), 3))]]);
         break;
      }
      for (let m = 0; m < 3; m++) {
          let b_countF = String.fromCharCode(119,95,51,95,114,97,105,115,101,100,0);
         nterstitialw *= b_countF.length;
      }
      let indicatorh = path3.length >= 8272584;
      do {
         path3.push(path3.length - parseInt(`${nterstitialw}`));
         if (indicatorh) {
            break;
         }
      } while (indicatorh && ((nterstitialw / (Math.max(path3.length, 1))) == 1.70 && 4 == (parseInt(`${nterstitialw}`) / (Math.max(path3.length, 2)))));
      stepA = 100.22 == leaguel || commonY.size == 38;
   }
    if (!targetVod) return 
    

   while (5.97 < (2.5 * leaguel)) {
      leaguel -= debugZ.length;
      break;
   }
   while (stepA) {
      stepA = commonY.size <= 13;
      break;
   }
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})

      leaguel -= parseInt(`${wind3}`);
   while (largep <= 2.16) {
      sentrym = "2";
      break;
   }
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return
      if (targetEpisode?.status === ZRChinasame.ZRBackwardTemp){
        return 
      }
      
      
      
      
      
      
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: ZRChinasame.ZRControl, 
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

      if (targetEpisode.status === ZRChinasame.ZRBackwardTemp) { 
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
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, ttOrange, any, ttPlaceholder> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid, vodIsAdult));
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: ZRChinasame.ZRSelectedBaidu}))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function removeVideoFromDownloadThunk(
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, ttOrange, any, ttPlaceholder> {
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
       let assistH: Map<any, any> = new Map([[String.fromCharCode(107,95,54,51,95,116,115,114,0),0], [String.fromCharCode(105,95,57,57,95,116,114,97,110,102,115,101,114,0),81], [String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,115,95,51,48,0),458]]);
    let green4 = String.fromCharCode(115,101,116,98,105,116,115,95,50,95,57,56,0);
    let tempm = 4;
    let l_playerZ = 1.0;
    let historyS = 2;
    let detaili = String.fromCharCode(120,95,54,49,95,98,101,104,97,118,105,111,114,0);
    let dropdownB = String.fromCharCode(112,97,110,110,105,110,103,95,110,95,50,50,0);
    let historyf = 0.0;
    let recommendation4 = 1;
    let actionX = 0.0;
    let sellg = String.fromCharCode(98,95,54,48,95,115,116,114,101,97,109,99,111,112,121,0);
   if (detaili.endsWith(`${dropdownB.length}`)) {
       let sideu = String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,112,95,49,54,0);
       let acceptedq = String.fromCharCode(99,95,56,52,95,101,120,112,111,110,101,110,116,0);
       let football4 = 2.0;
      for (let u = 0; u < 1; u++) {
          let megaphones = String.fromCharCode(105,95,57,54,95,114,97,110,115,102,111,114,109,101,114,0);
          let feedback3 = String.fromCharCode(114,116,112,102,98,95,122,95,57,50,0);
          let bridgep = String.fromCharCode(102,102,116,115,95,120,95,50,53,0);
          let lightO = String.fromCharCode(108,95,53,52,95,100,105,97,108,108,105,110,103,0);
          let pangleY = 2.0;
         football4 -= (parseFloat(`${lightO == String.fromCharCode(65,0) ? parseInt(`${pangleY}`) : lightO.length}`));
         megaphones += "2";
         feedback3 += `${(String.fromCharCode(71,0) == bridgep ? bridgep.length : feedback3.length)}`;
         pangleY += 2;
      }
      while ((football4 / (Math.max(2.5, 1))) >= 1.7) {
         acceptedq = `${(String.fromCharCode(71,0) == sideu ? sideu.length : acceptedq.length)}`;
         break;
      }
          let whatsappy = 3.0;
         football4 /= Math.max(parseFloat(`${parseInt(`${football4}`) & 1}`), 4);
         whatsappy -= parseFloat(`${parseInt(`${whatsappy}`)}`);
      let rankz = String.fromCharCode(95,54,110,117,113,107,53,0) == sideu;
      do {
         sideu += "2";
         if (rankz) {
            break;
         }
      } while (rankz && (2 < sideu.length));
          let appse = 2.0;
          let navigationm = 0.0;
          let cornerq = String.fromCharCode(101,95,49,53,95,100,111,108,108,97,114,0);
         sideu += `${1 ^ parseInt(`${appse}`)}`;
         appse -= parseFloat(`${3}`);
         navigationm /= Math.max(parseFloat(`${1 % (Math.max(5, parseInt(`${navigationm}`)))}`), 2);
         cornerq = `${parseInt(`${navigationm}`)}`;
      for (let u = 0; u < 3; u++) {
         acceptedq = `${acceptedq.length * 1}`;
      }
          let update_7ox = 3.0;
         sideu = `${2 % (Math.max(9, sideu.length))}`;
         update_7ox /= Math.max(3, parseInt(`${update_7ox}`) / 2);
      if (5 == sideu.length) {
         football4 -= (parseFloat(`${String.fromCharCode(54,0) == acceptedq ? parseInt(`${football4}`) : acceptedq.length}`));
      }
      for (let d = 0; d < 3; d++) {
         acceptedq = `${parseInt(`${football4}`)}`;
      }
      dropdownB = "2";
   }
   for (let u = 0; u < 3; u++) {
       let sharedv = true;
       let securityl = true;
       let e_position5 = false;
       let catalogw = String.fromCharCode(111,95,51,53,95,104,97,115,104,105,110,105,116,0);
       let clearA: Array<any> = [689, 822];
          let holderZ = true;
          let untickV: Map<any, any> = new Map([[String.fromCharCode(107,95,53,53,95,100,111,101,115,0),453], [String.fromCharCode(101,115,115,101,110,116,105,97,108,95,106,95,50,57,0),266]]);
          let default_xsy = String.fromCharCode(98,105,116,118,101,99,115,95,99,95,57,0);
         sharedv = holderZ;
         untickV.set(default_xsy, untickV.size - default_xsy.length);
      if (e_position5 || !sharedv) {
          let combineA: Map<any, any> = new Map([[String.fromCharCode(115,95,54,56,0),946], [String.fromCharCode(112,95,51,53,95,98,99,104,101,99,107,0),137]]);
          let roundy = true;
          let smallF = 1.0;
          let rewardvideoH = 2.0;
          let nalyticsV = 2.0;
         e_position5 = (securityl ? !e_position5 : !securityl);
         combineA.set(`${roundy}`, ((roundy ? 4 : 1) - parseInt(`${nalyticsV}`)));
         smallF /= Math.max(parseInt(`${rewardvideoH}`), 3);
         nalyticsV /= Math.max(2, parseFloat(`${2}`));
      }
      let configureu = securityl ? !securityl : securityl;
      do {
          let membershipe = 5;
          let largeT = 1;
          let pressureX: Array<any> = [700, 476];
          let sourced = false;
         securityl = !sharedv;
         membershipe &= membershipe >> (Math.min(1, Math.abs(1)));
         largeT += pressureX.length;
         pressureX.push(1);
         sourced = (pressureX.length / (Math.max(9, largeT))) == 23;
         if (configureu) {
            break;
         }
      } while ((sharedv && securityl) && configureu);
       let adult7 = 4;
       let previewp = 3;
      while ((previewp | 1) < 3) {
         adult7 <<= Math.min(5, Math.abs(((e_position5 ? 4 : 5) * previewp)));
         break;
      }
         adult7 %= Math.max(3, (2 + (securityl ? 4 : 3)));
          let guide3 = String.fromCharCode(101,95,50,95,104,101,105,103,104,116,115,0);
          let tumbnailm = false;
          let window_rB = 1;
         previewp *= ((e_position5 ? 1 : 5) >> (Math.min(Math.abs(3), 2)));
         guide3 += `${((tumbnailm ? 2 : 4))}`;
         tumbnailm = !tumbnailm;
         window_rB /= Math.max(window_rB, 1);
      for (let h = 0; h < 1; h++) {
          let twitterD: Map<any, any> = new Map([[String.fromCharCode(108,105,110,107,115,95,110,95,51,48,0),174], [String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,106,95,49,55,0),124], [String.fromCharCode(114,95,49,53,95,99,114,97,115,104,101,100,0),679]]);
          let huaweiO: Array<any> = [String.fromCharCode(101,95,52,95,110,101,116,0), String.fromCharCode(106,111,105,110,101,100,95,52,95,54,53,0)];
         adult7 *= ((e_position5 ? 4 : 3) ^ previewp);
         twitterD.set(`${huaweiO.length}`, huaweiO.length / 1);
      }
      for (let c = 0; c < 2; c++) {
         catalogw = "2";
      }
         securityl = (sharedv ? securityl : sharedv);
       let filter3 = 3.0;
       let tooltips4 = 1.0;
      for (let p = 0; p < 3; p++) {
         filter3 /= Math.max(adult7 / 1, 4);
      }
      for (let f = 0; f < 3; f++) {
          let handlerP = String.fromCharCode(100,97,109,112,105,110,103,95,114,95,52,55,0);
          let mbridgeV = String.fromCharCode(119,95,56,52,95,99,97,114,100,104,111,108,100,101,114,0);
          let signinupJ = String.fromCharCode(103,100,115,112,95,51,95,53,54,0);
         tooltips4 *= signinupJ.length;
         handlerP = `${(mbridgeV == String.fromCharCode(84,0) ? mbridgeV.length : handlerP.length)}`;
         signinupJ = "2";
      }
      while (sharedv) {
          let sourceK = false;
          let favorited = String.fromCharCode(118,95,49,50,95,116,104,114,101,97,100,115,0);
          let hooksW: Array<any> = [473, 363];
          let layout7 = String.fromCharCode(110,95,51,55,95,115,117,114,112,114,105,115,101,100,0);
         sharedv = securityl || catalogw.length < 49;
         sourceK = !favorited.includes(`${sourceK}`);
         favorited += `${hooksW.length}`;
         hooksW = [layout7.length];
         layout7 = `${3 - favorited.length}`;
         break;
      }
          let vietnamg = String.fromCharCode(103,95,49,55,95,112,117,116,115,116,114,0);
          let singleO = String.fromCharCode(102,105,108,108,95,118,95,53,50,0);
          let helperG: Array<any> = [451, 19];
         filter3 /= Math.max(5, 2);
         vietnamg += `${(vietnamg == String.fromCharCode(118,0) ? vietnamg.length : helperG.length)}`;
         singleO = `${(singleO == String.fromCharCode(109,0) ? singleO.length : vietnamg.length)}`;
         helperG.push(helperG.length | singleO.length);
      dropdownB += "1";
   }
      green4 = `${recommendation4}`;
      green4 += "1 - recommendation4";
      detaili += "1 | recommendation4";
      detaili = `${(String.fromCharCode(112,0) == green4 ? parseInt(`${l_playerZ}`) : green4.length)}`;
      tempm /= Math.max(historyS, 3);
       let termsW = String.fromCharCode(117,95,52,49,95,99,106,112,101,103,0);
          let flipper2 = String.fromCharCode(107,101,121,103,101,110,95,57,95,55,56,0);
         termsW += `${termsW.length | flipper2.length}`;
      if (!termsW.includes(termsW)) {
         termsW += `${termsW.length % 2}`;
      }
      if (termsW.length >= termsW.length) {
         termsW += `${termsW.length}`;
      }
      recommendation4 /= Math.max(1, 3);
       let k_image0: Array<any> = [216, 718, 302];
       let hoverm = String.fromCharCode(112,95,50,50,95,97,99,116,105,118,101,0);
       let mappingG = String.fromCharCode(119,95,57,56,95,108,111,97,115,0);
         mappingG = `${(mappingG == String.fromCharCode(104,0) ? k_image0.length : mappingG.length)}`;
      for (let u = 0; u < 2; u++) {
         k_image0.push(hoverm.length ^ 3);
      }
      while (mappingG == String.fromCharCode(56,0) || hoverm != String.fromCharCode(68,0)) {
         hoverm += `${hoverm.length << (Math.min(Math.abs(1), 5))}`;
         break;
      }
      if (hoverm == String.fromCharCode(115,0) && mappingG != String.fromCharCode(109,0)) {
         hoverm = "1";
      }
          let interstitialw = 0.0;
          let kuaishouV = 2;
          let anytimeM = String.fromCharCode(103,95,52,49,95,111,114,103,0);
         hoverm = `${(String.fromCharCode(71,0) == hoverm ? hoverm.length : k_image0.length)}`;
         interstitialw *= kuaishouV;
         kuaishouV &= (anytimeM == String.fromCharCode(114,0) ? anytimeM.length : kuaishouV);
      while ((k_image0.length - mappingG.length) > 3 && (mappingG.length - k_image0.length) > 3) {
          let listT = String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,95,122,95,51,55,0);
          let materialb = 3.0;
          let ying0: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,103,95,56,56,0),false ], [String.fromCharCode(102,95,57,54,95,111,112,101,110,115,108,101,115,0),false ], [String.fromCharCode(112,117,112,105,108,95,53,95,57,48,0),true ]]);
          let sound2 = String.fromCharCode(115,116,117,102,102,115,116,95,57,95,52,51,0);
         mappingG += `${parseInt(`${materialb}`)}`;
         listT = `${(String.fromCharCode(82,0) == sound2 ? ying0.size : sound2.length)}`;
         materialb *= parseFloat(`${1 * ying0.size}`);
         break;
      }
         mappingG = `${hoverm.length}`;
      for (let m = 0; m < 1; m++) {
          let submitX = 0.0;
          let placeholderf = 1.0;
         k_image0 = [(String.fromCharCode(84,0) == mappingG ? mappingG.length : parseInt(`${submitX}`))];
         submitX *= parseFloat(`${3}`);
         placeholderf /= Math.max(parseInt(`${placeholderf}`) ^ parseInt(`${placeholderf}`), 3);
      }
          let screenW = String.fromCharCode(111,95,51,54,95,114,103,98,121,117,118,0);
         hoverm = `${mappingG.length + screenW.length}`;
      assistH.set(green4, 1 + green4.length);
   while (3 == tempm) {
      tempm %= Math.max(3 | green4.length, 3);
      break;
   }
   for (let x = 0; x < 3; x++) {
       let arrowK: Map<any, any> = new Map([[String.fromCharCode(101,95,50,53,95,108,115,98,102,117,108,108,0),877], [String.fromCharCode(112,111,105,115,115,111,110,95,108,95,48,0),553]]);
       let package_997 = String.fromCharCode(120,95,51,95,98,101,104,97,118,105,111,114,0);
       let submiti: Array<any> = [646, 170, 196];
      if (arrowK.size <= submiti.length) {
          let eventU = true;
          let full_: Map<any, any> = new Map([[String.fromCharCode(100,95,55,53,95,102,114,97,109,101,113,117,101,117,101,0),585], [String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,109,95,55,49,0),435], [String.fromCharCode(111,103,103,95,112,95,52,56,0),170]]);
          let sigmoba = 2.0;
          let lessi = 4.0;
          let coreA: Map<any, any> = new Map([[String.fromCharCode(117,95,52,50,95,116,105,109,101,105,110,116,101,114,118,97,108,0),115], [String.fromCharCode(121,95,54,52,95,101,120,116,115,107,0),41]]);
         arrowK = new Map([[`${coreA.size}`, coreA.size]]);
         eventU = lessi == 63.15 && sigmoba == 63.15;
         full_ = new Map([[`${lessi}`, parseInt(`${lessi}`) * 1]]);
         sigmoba *= parseFloat(`${3}`);
      }
      if (!Array.from(arrowK.keys()).includes(`${submiti.length}`)) {
          let securityB = 2.0;
          let chinaI: Map<any, any> = new Map([[String.fromCharCode(109,98,98,108,111,99,107,95,119,95,49,51,0),false ], [String.fromCharCode(114,95,54,48,95,112,97,114,116,121,0),true ]]);
         submiti.push(submiti.length);
         securityB *= parseFloat(`${parseInt(`${securityB}`)}`);
         chinaI.set(`${securityB}`, 2 - chinaI.size);
      }
         package_997 += "1";
      let projectt = arrowK.size <= 5953405;
      do {
         arrowK.set(`${package_997}`, arrowK.size / (Math.max(3, 4)));
         if (projectt) {
            break;
         }
      } while ((2 < (arrowK.size % (Math.max(6, submiti.length))) || 2 < (2 % (Math.max(4, arrowK.size)))) && projectt);
      while ((package_997.length + 2) == 4 && 2 == (package_997.length + arrowK.size)) {
         package_997 = `${submiti.length}`;
         break;
      }
      let anytime6 = arrowK.size >= 6705374;
      do {
         arrowK.set(`${submiti.length}`, submiti.length);
         if (anytime6) {
            break;
         }
      } while (anytime6 && (arrowK.size < 3));
      while (package_997.startsWith(`${arrowK.size}`)) {
          let splashf: Array<any> = [643, 718, 940];
          let selln: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,109,101,114,103,101,95,56,95,53,49,0),String.fromCharCode(99,108,108,99,95,114,95,51,52,0)], [String.fromCharCode(122,95,57,57,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0),String.fromCharCode(104,97,108,116,95,51,95,56,53,0)]]);
          let controls_ = String.fromCharCode(116,104,114,101,97,100,109,101,115,115,97,103,101,95,112,95,51,53,0);
          let casth = String.fromCharCode(114,118,118,108,99,95,115,95,57,53,0);
         arrowK.set(package_997, package_997.length | submiti.length);
         splashf.push(casth.length);
         selln = new Map([[`${selln.size}`, 3 << (Math.min(5, Math.abs(selln.size)))]]);
         controls_ += "2";
         casth = `${splashf.length + 3}`;
         break;
      }
         arrowK = new Map([[`${arrowK.size}`, submiti.length]]);
          let policyB = false;
         package_997 += `${(3 & (policyB ? 2 : 2))}`;
      historyS %= Math.max(detaili.length * assistH.size, 3);
   }
   while (4 > tempm) {
       let mbnativeJ = 5.0;
       let stylesY = String.fromCharCode(108,95,51,56,95,100,120,103,105,0);
      let componente = mbnativeJ <= 9820819.0;
      do {
         mbnativeJ /= Math.max(parseFloat(`${stylesY.length}`), 2);
         if (componente) {
            break;
         }
      } while (componente && (3.46 < (mbnativeJ / (Math.max(4.51, 6)))));
          let dialogt = String.fromCharCode(116,104,114,111,117,103,104,95,112,95,55,56,0);
         mbnativeJ -= parseFloat(`${parseInt(`${mbnativeJ}`)}`);
         dialogt = `${dialogt.length}`;
      if ((parseInt(`${mbnativeJ}`) - 1) >= 2 && (1 - stylesY.length) >= 2) {
          let tooltipsW = String.fromCharCode(114,101,113,115,116,97,116,101,95,107,95,51,55,0);
          let shoote = 2.0;
         mbnativeJ /= Math.max(parseFloat(`${1 % (Math.max(4, stylesY.length))}`), 1);
         tooltipsW = `${(tooltipsW == String.fromCharCode(69,0) ? parseInt(`${shoote}`) : tooltipsW.length)}`;
         shoote *= 1;
      }
      while (stylesY.startsWith(`${mbnativeJ}`)) {
         stylesY = `${stylesY.length}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
          let playC = String.fromCharCode(104,119,99,97,112,95,55,95,56,52,0);
         mbnativeJ += parseFloat(`${parseInt(`${mbnativeJ}`) + playC.length}`);
      }
      let apple0 = stylesY.length >= 6619874;
      do {
          let filled1: Map<any, any> = new Map([[String.fromCharCode(122,95,56,55,95,112,114,101,115,99,97,108,105,110,103,0),String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,98,95,51,57,0)], [String.fromCharCode(100,101,99,108,105,110,101,95,116,95,57,54,0),String.fromCharCode(111,95,57,51,95,115,107,97,100,0)], [String.fromCharCode(99,95,50,54,95,105,100,101,97,108,0),String.fromCharCode(97,115,100,107,95,56,95,54,0)]]);
          let commonN = String.fromCharCode(114,97,100,105,97,108,95,114,95,57,49,0);
         stylesY += `${commonN.length}`;
         filled1 = new Map([[`${filled1.size}`, filled1.size | filled1.size]]);
         commonN = `${1 + filled1.size}`;
         if (apple0) {
            break;
         }
      } while ((stylesY.length < 3) && apple0);
      detaili = `${tempm | 2}`;
      break;
   }
      tempm ^= recommendation4;
   let playx = tempm >= 7704087;
   do {
      tempm += assistH.size;
      if (playx) {
         break;
      }
   } while (playx && ((tempm << (Math.min(1, Math.abs(recommendation4)))) > 5));
       let stationu = 4;
       let modely: Map<any, any> = new Map([[String.fromCharCode(100,95,49,52,95,110,99,111,110,102,0),false ], [String.fromCharCode(109,95,55,50,95,109,121,113,114,0),false ]]);
       let untickC = true;
          let soundR: Map<any, any> = new Map([[String.fromCharCode(106,95,51,56,95,102,117,122,122,121,0),222], [String.fromCharCode(115,116,97,116,117,115,101,115,95,98,95,53,52,0),233], [String.fromCharCode(112,108,97,105,110,95,98,95,53,55,0),900]]);
          let download5: Map<any, any> = new Map([[String.fromCharCode(105,95,51,50,95,111,117,116,112,117,116,0),false ], [String.fromCharCode(119,95,51,95,109,117,108,116,105,112,108,101,120,0),true ], [String.fromCharCode(108,95,50,50,95,115,101,97,114,99,104,0),true ]]);
          let controlT = 2.0;
         stationu %= Math.max(2, download5.size & 3);
         soundR = new Map([[`${soundR.size}`, soundR.size]]);
         download5 = new Map([[`${soundR.size}`, 3]]);
         controlT /= Math.max(soundR.size >> (Math.min(1, Math.abs(parseInt(`${controlT}`)))), 5);
          let injuryX: Array<any> = [451, 159, 307];
          let field2: Array<any> = [771, 670, 433];
         untickC = injuryX.length == 51 || !untickC;
         injuryX = [field2.length];
         field2.push(field2.length);
      for (let y = 0; y < 3; y++) {
         untickC = (modely.size - stationu) <= 69;
      }
       let sourceF = String.fromCharCode(104,95,54,54,95,105,110,116,114,97,120,0);
      while (3 >= (2 + stationu) && !untickC) {
         untickC = 48 >= stationu;
         break;
      }
       let ballh = 3.0;
      let telegramm = untickC ? !untickC : untickC;
      do {
          let styleH = String.fromCharCode(107,95,50,53,95,120,99,98,103,114,97,98,0);
          let playh = String.fromCharCode(105,95,56,50,95,115,121,115,99,116,108,115,0);
          let mbsplashc = String.fromCharCode(113,95,54,95,114,100,102,116,0);
          let gestureF = 3;
         untickC = 96 >= playh.length;
         styleH = `${gestureF}`;
         playh = `${mbsplashc.length / (Math.max(styleH.length, 2))}`;
         mbsplashc += `${mbsplashc.length % 2}`;
         gestureF |= mbsplashc.length - gestureF;
         if (telegramm) {
            break;
         }
      } while ((sourceF.endsWith(`${untickC}`)) && telegramm);
         untickC = modely.size >= 58;
          let weiboo = 0.0;
         sourceF = `${(1 - (untickC ? 4 : 2))}`;
         weiboo /= Math.max(2, parseFloat(`${parseInt(`${weiboo}`) + 1}`));
      historyf -= ((untickC ? 5 : 5) << (Math.min(Math.abs(stationu), 4)));
      tempm |= (String.fromCharCode(122,0) == detaili ? detaili.length : assistH.size);
   while (!green4.endsWith(`${l_playerZ}`)) {
      green4 = "3";
      break;
   }
   while (1 <= recommendation4) {
      recommendation4 |= tempm & dropdownB.length;
      break;
   }
      detaili = "3 - recommendation4";
      green4 = `${tempm}`;
      historyS >>= Math.min(4, Math.abs((String.fromCharCode(88,0) == dropdownB ? dropdownB.length : assistH.size)));

        session.cancel(); 
      }
    }
    dispatch(removeVideoFromDownload(vod, vodSourceId, vodUrlNid))
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function removeVodFromDownloadThunk(
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, ttOrange, any, ttPlaceholder> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    for (const episode of targetVod.episodes) {
      const allSession = await FFmpegKit.listSessions() 
      for (const session of allSession) {
        if (await session.getSessionId() === episode.ffmpegSession){
       let controlsL: Map<any, any> = new Map([[String.fromCharCode(97,118,115,115,95,114,95,53,57,0),893], [String.fromCharCode(106,95,51,57,95,102,114,97,109,101,0),273]]);
    let kuaishoue = 1;
    let serviceh = String.fromCharCode(102,105,97,116,95,97,95,54,50,0);
    let placement2 = 1;
    let anytimex = String.fromCharCode(99,104,115,99,97,108,101,95,122,95,57,49,0);
    let materialk = String.fromCharCode(111,95,56,57,95,97,110,110,111,116,97,116,105,111,110,115,0);
    let backX = 2.0;
    let u_imageE: Map<any, any> = new Map([[String.fromCharCode(117,117,105,100,112,114,111,102,95,116,95,50,50,0),false ], [String.fromCharCode(119,95,56,56,95,98,111,117,110,100,115,0),false ], [String.fromCharCode(100,95,49,50,95,114,101,112,111,114,116,115,0),true ]]);
    let more_ = String.fromCharCode(110,95,52,55,95,99,104,101,99,107,97,115,109,0);
    let fileW: Map<any, any> = new Map([[String.fromCharCode(98,95,50,53,95,115,117,98,108,101,110,103,116,104,0),507], [String.fromCharCode(112,105,112,101,108,111,115,115,95,57,95,51,53,0),542], [String.fromCharCode(97,108,103,95,49,95,50,48,0),255]]);
    let orangew = String.fromCharCode(98,95,57,55,95,99,111,110,102,101,116,116,105,0);
    let eactl = 5.0;
    let signinupH: Array<any> = [766, 681, 488];
    let left5: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,109,101,110,116,105,110,103,95,100,95,51,55,0),21], [String.fromCharCode(109,111,110,107,101,121,115,97,117,100,105,111,95,48,95,53,57,0),126], [String.fromCharCode(121,95,53,54,95,102,109,116,112,0),467]]);
    let stringt = String.fromCharCode(122,95,52,95,97,117,100,0);
    let topice = String.fromCharCode(98,95,55,54,95,98,121,116,101,99,111,100,101,0);
    let securityL = String.fromCharCode(107,101,121,98,111,97,114,100,95,103,95,52,0);
   let umengn = u_imageE.size >= 5223665;
   do {
      u_imageE = new Map([[`${u_imageE.size}`, u_imageE.size]]);
      if (umengn) {
         break;
      }
   } while ((5 >= (u_imageE.size & 5) || 5 >= (placement2 & u_imageE.size)) && umengn);
      backX /= Math.max(5, parseFloat(`${1}`));
   while ((4 - placement2) > 5 && 2 > (4 | placement2)) {
      backX *= parseFloat(`${2 ^ anytimex.length}`);
      break;
   }
       let sport9 = String.fromCharCode(120,95,55,49,95,101,97,114,108,105,101,115,116,0);
       let splashl = 3;
       let settingsJ = true;
          let completeS = true;
         settingsJ = sport9.length <= 16;
         completeS = completeS || !completeS;
      if (!settingsJ) {
         splashl ^= 3;
      }
         sport9 += "1";
         settingsJ = sport9.includes(`${splashl}`);
       let dropdownk = 0.0;
       let areaY = 5.0;
          let memberT: Map<any, any> = new Map([[String.fromCharCode(106,95,50,53,95,110,105,100,111,98,106,0),String.fromCharCode(106,95,57,49,95,117,112,103,114,97,100,101,115,0)], [String.fromCharCode(110,105,115,116,95,119,95,51,51,0),String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,115,95,54,55,0)], [String.fromCharCode(100,95,53,48,95,100,101,113,117,97,110,116,0),String.fromCharCode(117,116,116,111,110,95,101,95,50,57,0)]]);
          let l_imageM = String.fromCharCode(115,112,111,105,108,101,114,115,95,101,95,56,54,0);
          let window_mH = 1.0;
         splashl /= Math.max(2, sport9.length * 2);
         memberT = new Map([[`${memberT.size}`, (l_imageM == String.fromCharCode(88,0) ? memberT.size : l_imageM.length)]]);
         window_mH *= parseFloat(`${l_imageM.length >> (Math.min(Math.abs(1), 4))}`);
         dropdownk -= parseFloat(`${splashl}`);
      while (3.57 <= (splashl / (Math.max(dropdownk, 3)))) {
          let bannerm: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,99,97,108,101,95,116,95,55,49,0),999], [String.fromCharCode(115,117,98,116,114,101,101,95,98,95,55,57,0),36], [String.fromCharCode(112,98,107,100,102,95,116,95,55,52,0),776]]);
         splashl %= Math.max(1, 1 | parseInt(`${dropdownk}`));
         bannerm = new Map([[`${bannerm.size}`, bannerm.size]]);
         break;
      }
      if (3 >= (1 ^ splashl)) {
         dropdownk += parseFloat(`${parseInt(`${areaY}`) | 1}`);
      }
      materialk = "3";
   while (u_imageE.get(`${placement2}`) == null) {
      placement2 >>= Math.min(serviceh.length, 3);
      break;
   }
      more_ = `${serviceh.length << (Math.min(2, Math.abs(controlsL.size)))}`;
      more_ += `${kuaishoue}`;
   while (materialk != String.fromCharCode(74,0)) {
      serviceh = "3";
      break;
   }
   while (!serviceh.startsWith(`${kuaishoue}`)) {
       let blacki = 5.0;
       let savew = false;
       let blacklistA: Array<any> = [534, 875, 163];
       let thailandY = String.fromCharCode(112,95,51,51,95,119,112,101,110,100,105,110,103,0);
          let debugp = 5.0;
         blacki *= parseFloat(`${blacklistA.length}`);
         debugp /= Math.max(parseInt(`${debugp}`), 4);
      if (blacki <= 2.26) {
         blacklistA.push(((savew ? 4 : 1) % (Math.max(3, thailandY.length))));
      }
      if (savew) {
         savew = !savew;
      }
         blacklistA.push(((savew ? 2 : 3) / (Math.max(3, 6))));
         thailandY = `${blacklistA.length}`;
         savew = 29.50 < blacki;
      if (!savew) {
          let heartT = String.fromCharCode(102,95,51,52,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0);
          let watchz = true;
          let internetC: Map<any, any> = new Map([[String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,116,95,53,57,0),String.fromCharCode(116,95,49,52,95,115,101,99,115,0)], [String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,48,95,54,49,0),String.fromCharCode(112,104,111,110,101,95,53,95,57,56,0)]]);
          let leftk = 0;
          let lineD = String.fromCharCode(117,95,54,53,95,114,101,102,108,101,99,116,111,114,0);
         savew = (!watchz ? !savew : !watchz);
         heartT = "1";
         internetC = new Map([[`${leftk}`, leftk ^ heartT.length]]);
         lineD = `${internetC.size}`;
      }
          let temperature8: Array<any> = [38, 814];
          let controlg = String.fromCharCode(109,95,57,95,100,117,112,108,105,99,97,116,111,114,0);
         blacki -= parseFloat(`${thailandY.length / 2}`);
         temperature8 = [temperature8.length];
         controlg = `${temperature8.length + controlg.length}`;
         thailandY += `${(parseInt(`${blacki}`) - (savew ? 3 : 5))}`;
         blacki += (parseFloat(`${(savew ? 1 : 4) % (Math.max(thailandY.length, 8))}`));
      for (let h = 0; h < 3; h++) {
         blacki *= (parseFloat(`${parseInt(`${blacki}`) ^ (savew ? 2 : 2)}`));
      }
      while (1.18 < (1.21 + blacki)) {
         blacki -= (parseFloat(`${(savew ? 4 : 1) % (Math.max(6, thailandY.length))}`));
         break;
      }
      serviceh += "2";
      break;
   }
      placement2 /= Math.max(placement2, 1);
      kuaishoue -= parseInt(`${backX}`);
       let sansU = 5;
      let groupu = 6322778 >= sansU;
      do {
         sansU |= 2 >> (Math.min(2, Math.abs(sansU)));
         if (groupu) {
            break;
         }
      } while ((2 == (4 * sansU)) && groupu);
      while (3 >= sansU) {
         sansU >>= Math.min(Math.abs(sansU), 2);
         break;
      }
         sansU /= Math.max(2, sansU);
      serviceh = `${parseInt(`${backX}`) + 3}`;
      backX -= parseFloat(`${materialk.length}`);
   while (5 <= (5 + materialk.length)) {
      placement2 |= serviceh.length;
      break;
   }
   while (5 == (fileW.size / (Math.max(orangew.length, 2)))) {
      orangew = `${serviceh.length ^ 3}`;
      break;
   }
   let updatesj = 9737282 <= orangew.length;
   do {
      orangew += `${kuaishoue & 2}`;
      if (updatesj) {
         break;
      }
   } while ((orangew.length == serviceh.length) && updatesj);
   if (2 <= (placement2 | 4) && 4 <= (4 | placement2)) {
       let layoutV = String.fromCharCode(108,95,52,48,95,102,105,101,108,100,115,0);
       let kleviny = false;
      let feedbackB = 5052103 >= layoutV.length;
      do {
         layoutV += `${layoutV.length / (Math.max(1, 7))}`;
         if (feedbackB) {
            break;
         }
      } while (feedbackB && (kleviny && layoutV.length <= 4));
         layoutV += `${((kleviny ? 5 : 4))}`;
      while (kleviny) {
         kleviny = layoutV.length >= 63;
         break;
      }
       let unticku: Array<any> = [386, 906];
       let shared2: Array<any> = [String.fromCharCode(104,95,55,54,95,100,105,115,116,114,97,99,116,105,111,110,0), String.fromCharCode(101,110,106,105,110,95,102,95,51,54,0)];
      for (let v = 0; v < 3; v++) {
          let user6 = String.fromCharCode(108,95,55,48,95,115,121,115,108,111,103,0);
          let hookO = false;
          let rightj = 1.0;
          let catagorye = 5.0;
         unticku.push(((hookO ? 2 : 1) % 1));
         user6 = "2";
         hookO = !user6.startsWith(`${rightj}`);
         rightj *= parseInt(`${rightj}`) % 1;
         catagorye -= parseFloat(`${user6.length}`);
      }
      for (let k = 0; k < 2; k++) {
         kleviny = unticku.length > 67 || kleviny;
      }
      placement2 ^= placement2 + 1;
   }
      backX *= parseFloat(`${placement2}`);
   if (1 >= (controlsL.size + 4)) {
      serviceh = `${fileW.size / 3}`;
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

export function clearQueueOnAppStart(): ThunkAction<void, ttOrange, any, ttPlaceholder> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: ttFrame[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        if (episode.status === ZRChinasame.ZRSelectedBaidu){
       let left5 = 1;
    let tick3 = 0;
    let diceb = String.fromCharCode(100,95,56,55,95,111,110,101,111,102,0);
    let expired4 = String.fromCharCode(100,95,50,54,95,110,111,99,111,108,115,101,116,0);
    let auto_9n = 2.0;
    let gesturesd = String.fromCharCode(116,95,55,51,95,106,99,111,110,102,105,103,0);
    let sellz = true;
    let typesb: Array<any> = [554, 847, 611];
    let sportd = 3.0;
   if (!gesturesd.startsWith(`${auto_9n}`)) {
      gesturesd = `${((sellz ? 1 : 5))}`;
   }
   for (let i = 0; i < 3; i++) {
      expired4 += `${gesturesd.length << (Math.min(Math.abs(3), 2))}`;
   }
   for (let c = 0; c < 3; c++) {
      typesb = [left5 << (Math.min(4, Math.abs(1)))];
   }
      sellz = 78 < typesb.length;
      left5 ^= parseInt(`${auto_9n}`);
   for (let k = 0; k < 2; k++) {
      auto_9n += typesb.length;
   }
   while (gesturesd.includes(`${sellz}`)) {
      sellz = diceb == String.fromCharCode(88,0);
      break;
   }
      sellz = tick3 < gesturesd.length;
      gesturesd += `${left5}`;

          RNFetchBlob.fs.unlink(episode.videoPath).catch()
          dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, {progress: {percentage: 0}, status: ZRChinasame.ZRGoal, ffmpegSession: null, sizeInBytes: 0}))
          
        }
      }
    }

    dispatch(resetQueue())
  }
}

export function restartVideoDownloadThunk (
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, ttOrange, any, ttPlaceholder> {
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
      status: ZRChinasame.ZRSelectedBaidu, 
      sizeInBytes: 0
    }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, targetVod.vodIsAdult))
  }
}

export function pauseVideoDownloadThunk (
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, ttOrange, any, ttPlaceholder> {
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
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: ZRChinasame.ZRBackwardTemp, ffmpegSession: null}))


    const newState = getState().downloadVideoReducer
    if (newState.queue.length === 0) return
    if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
    dispatch(resumeFirstVideoDownload())
  }
}

function resumeVideoDownloadThunk(
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
  ): ThunkAction<void, ttOrange, any, ttPlaceholder> {
  return async function (dispatch, getState) {
    const initialState = getState().downloadVideoReducer
    const initialPercentage = initialState.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      ?.progress.percentage; 

    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status:ZRChinasame.ZRSelectedBaidu}))

    const isAdult = initialState.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === ZRChinasame.ZRSelectedBaidu){
       let changeL = 4;
    let b_titlet = 5.0;
    let lineK = 3.0;
    let sheetL = 2.0;
    let searchZ = String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,106,95,56,52,0);
    let invite4: Array<any> = [95, 768, 978];
    let currentt = true;
    let tempd = false;
   while (2 == (searchZ.length & changeL) && (2 & searchZ.length) == 4) {
       let wcopy_u8 = 2.0;
       let gpayM = 3.0;
         gpayM /= Math.max(3 - parseInt(`${wcopy_u8}`), 2);
      for (let c = 0; c < 1; c++) {
         wcopy_u8 *= 3 * parseInt(`${gpayM}`);
      }
         gpayM *= 3;
       let reactS = String.fromCharCode(103,95,49,54,95,114,101,116,114,105,101,118,101,100,0);
       let notificationM = String.fromCharCode(112,114,110,103,95,119,95,56,52,0);
      while ((notificationM.length % 3) >= 5 || 4.91 >= (5.38 / (Math.max(10, wcopy_u8)))) {
          let turnf = false;
          let rulesm = 0;
          let layout9: Array<any> = [String.fromCharCode(101,118,101,114,121,98,111,100,121,95,48,95,49,54,0), String.fromCharCode(108,111,103,103,101,114,115,95,111,95,52,54,0), String.fromCharCode(109,111,111,102,95,121,95,53,57,0)];
         notificationM = `${rulesm % (Math.max(parseInt(`${gpayM}`), 3))}`;
         turnf = (((turnf ? layout9.length : 67) ^ layout9.length) == 67);
         rulesm /= Math.max(3, ((turnf ? 1 : 3) - 1));
         break;
      }
       let internetv = 2.0;
      changeL %= Math.max(5, parseInt(`${wcopy_u8}`));
      break;
   }
   let inactiveM = invite4.length <= 6825194;
   do {
      invite4.push(changeL);
      if (inactiveM) {
         break;
      }
   } while (inactiveM && (invite4.length >= 5));
      changeL <<= Math.min(Math.abs(parseInt(`${lineK}`)), 3);
       let spinner2 = 0;
       let sheety = 2;
      for (let p = 0; p < 3; p++) {
          let utilsT = true;
          let episodesO = String.fromCharCode(103,95,56,95,116,101,97,114,100,111,119,110,0);
          let materialP: Map<any, any> = new Map([[String.fromCharCode(107,95,53,56,95,100,105,115,109,105,115,115,97,108,0),String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,95,116,95,52,53,0)], [String.fromCharCode(97,95,52,57,95,109,97,112,115,0),String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,95,112,95,52,0)], [String.fromCharCode(118,112,105,116,120,102,109,95,57,95,52,54,0),String.fromCharCode(105,95,54,56,95,116,114,105,109,109,105,110,103,0)]]);
          let borderlessK = false;
          let listI = String.fromCharCode(116,101,109,112,111,114,97,108,95,119,95,54,53,0);
         spinner2 |= ((utilsT ? 2 : 2) / 3);
         utilsT = 35 == materialP.size;
         episodesO = "1";
         materialP = new Map([[listI, 3 & episodesO.length]]);
         borderlessK = ((listI.length >> (Math.min(4, Math.abs((borderlessK ? listI.length : 29))))) >= 29);
      }
      let searchbar0 = spinner2 >= 7275238;
      do {
         spinner2 >>= Math.min(Math.abs(sheety - spinner2), 2);
         if (searchbar0) {
            break;
         }
      } while ((2 >= (1 % (Math.max(8, sheety))) && (spinner2 % 1) >= 3) && searchbar0);
      if (4 < (sheety % 5) && 4 < (spinner2 % 5)) {
         sheety *= spinner2;
      }
          let downloadA = 3.0;
          let videocommonF = 2.0;
         sheety /= Math.max(2, 3);
         downloadA *= parseFloat(`${parseInt(`${downloadA}`) / 3}`);
         videocommonF /= Math.max(2, parseInt(`${downloadA}`));
         spinner2 &= sheety * 3;
         spinner2 %= Math.max(3, sheety);
      changeL *= (String.fromCharCode(79,0) == searchZ ? parseInt(`${sheetL}`) : searchZ.length);
      searchZ += `${parseInt(`${b_titlet}`) * 1}`;
   let networkX = invite4.length >= 6395888;
   do {
       let homei = 1.0;
       let with_f22 = 1.0;
       let largev = 4.0;
      while (homei > 4.1) {
          let gpayH = String.fromCharCode(100,95,51,54,95,108,105,110,109,97,116,104,0);
          let yingw = 0;
          let layoutz: Array<any> = [366, 440, 252];
         with_f22 /= Math.max(3, 1);
         gpayH = `${yingw}`;
         yingw %= Math.max(3, yingw * layoutz.length);
         layoutz = [layoutz.length];
         break;
      }
      while ((4.65 / (Math.max(1, largev))) > 1.51 || 5.23 > (with_f22 / (Math.max(4.65, 5)))) {
         with_f22 -= parseInt(`${homei}`);
         break;
      }
      if (with_f22 == 4.49) {
         largev /= Math.max(parseInt(`${largev}`) | 1, 4);
      }
         with_f22 /= Math.max(parseInt(`${homei}`), 5);
         with_f22 -= 3;
      while (3.57 <= (with_f22 * 3.42) && (with_f22 * largev) <= 3.42) {
         with_f22 += parseInt(`${largev}`) * parseInt(`${with_f22}`);
         break;
      }
      while (with_f22 > 1.15) {
          let blackJ = String.fromCharCode(101,100,105,116,97,98,108,101,95,52,95,52,52,0);
          let thailand5: Array<any> = [464, 626, 354];
          let dycreatorR = String.fromCharCode(102,95,55,55,95,115,109,104,100,0);
          let controlss = false;
         with_f22 *= parseInt(`${with_f22}`) % (Math.max(8, parseInt(`${homei}`)));
         blackJ += `${2 + thailand5.length}`;
         thailand5.push((String.fromCharCode(115,0) == dycreatorR ? thailand5.length : dycreatorR.length));
         controlss = dycreatorR.length <= 70;
         break;
      }
         with_f22 += parseInt(`${homei}`) | 2;
      while (4.44 >= largev) {
          let d_titleU = true;
          let assisti = 5.0;
          let headeri = 4.0;
          let statss = String.fromCharCode(115,116,105,99,107,95,57,95,54,54,0);
          let clockN = 4.0;
         largev *= 2;
         d_titleU = assisti <= clockN;
         assisti += (parseInt(`${assisti}`) * (d_titleU ? 2 : 1));
         headeri -= parseInt(`${assisti}`) << (Math.min(4, Math.abs(1)));
         statss = "2";
         clockN *= (parseFloat(`${parseInt(`${clockN}`) << (Math.min(5, Math.abs((d_titleU ? 2 : 3))))}`));
         break;
      }
      invite4 = [parseInt(`${b_titlet}`)];
      if (networkX) {
         break;
      }
   } while (((invite4.length ^ 3) < 4) && networkX);

        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(initialPercentage + percentage, 100) 
          }
        }))
      }
    }, 2000)
    
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === ZRChinasame.ZRBackwardTemp) FFmpegKit.cancel(currentState.ffmpegSession ?? undefined)
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
    }

    const onDownloadEnd = async () => {
       let ncopy_zs = 2.0;
    let previewD = false;
    let backgroundU = String.fromCharCode(111,95,56,95,112,115,102,105,108,101,0);
    let hookB = String.fromCharCode(98,95,51,52,95,112,114,111,99,99,101,115,115,0);
    let materialL = String.fromCharCode(97,100,100,105,116,105,118,101,95,97,95,55,50,0);
    let type_aks = 4.0;
    let shrink4 = 5;
    let sourceD = String.fromCharCode(119,95,53,49,95,116,101,120,116,97,116,116,114,0);
      backgroundU += `${(String.fromCharCode(69,0) == backgroundU ? parseInt(`${type_aks}`) : backgroundU.length)}`;
       let selection6: Array<any> = [991, 562];
      while ((selection6.length << (Math.min(selection6.length, 4))) == 3) {
         selection6 = [selection6.length];
         break;
      }
      for (let i = 0; i < 2; i++) {
         selection6.push(selection6.length | selection6.length);
      }
      let verticali = selection6.length >= 5828975;
      do {
          let time_mor = String.fromCharCode(100,105,114,112,95,112,95,51,53,0);
          let streamingP: Map<any, any> = new Map([[String.fromCharCode(108,95,49,49,95,114,111,102,105,108,101,0),363], [String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,95,105,95,51,50,0),731]]);
          let manifesto: Map<any, any> = new Map([[String.fromCharCode(104,95,54,51,95,106,100,104,117,102,102,0),570], [String.fromCharCode(103,95,51,48,95,105,110,105,116,104,0),553], [String.fromCharCode(107,95,52,53,95,109,111,99,107,115,0),357]]);
          let typesg = false;
         selection6 = [selection6.length];
         time_mor = `${streamingP.size}`;
         streamingP.set(time_mor, streamingP.size << (Math.min(time_mor.length, 3)));
         manifesto = new Map([[`${streamingP.size}`, 1 & time_mor.length]]);
         typesg = time_mor.length >= 78 || streamingP.size >= 78;
         if (verticali) {
            break;
         }
      } while (verticali && ((1 << (Math.min(2, selection6.length))) > 4 && 3 > (1 << (Math.min(1, selection6.length)))));
      backgroundU = `${hookB.length}`;
      type_aks /= Math.max((hookB == String.fromCharCode(110,0) ? hookB.length : parseInt(`${type_aks}`)), 5);
   let bufferu = 7015580 >= shrink4;
   do {
      shrink4 ^= 3 & hookB.length;
      if (bufferu) {
         break;
      }
   } while (bufferu && (2 <= (shrink4 % (Math.max(2, 8))) || !previewD));
   if ((shrink4 / (Math.max(backgroundU.length, 6))) <= 5 && 5 <= (backgroundU.length / (Math.max(5, 4)))) {
       let reducer7 = 3;
       let inactivet = 2.0;
       let largeH = String.fromCharCode(106,95,50,51,95,102,105,110,100,110,101,97,114,109,118,0);
       let kickD = String.fromCharCode(116,97,107,101,95,117,95,55,55,0);
       let darkl: Map<any, any> = new Map([[String.fromCharCode(101,95,54,54,95,99,97,98,97,99,0),67], [String.fromCharCode(112,105,112,101,95,55,95,50,57,0),434], [String.fromCharCode(101,122,105,101,114,95,52,95,50,57,0),55]]);
      while (inactivet >= 3.57) {
         largeH = `${parseInt(`${inactivet}`)}`;
         break;
      }
         inactivet *= largeH.length % (Math.max(2, 9));
      for (let x = 0; x < 2; x++) {
         inactivet -= reducer7;
      }
          let actionsp = 3.0;
          let stationO = 3.0;
          let ajaxj: Array<any> = [226, 874, 493];
         largeH = "3 ^ reducer7";
         actionsp *= 3;
         stationO *= parseFloat(`${parseInt(`${actionsp}`)}`);
         ajaxj = [parseInt(`${stationO}`) >> (Math.min(ajaxj.length, 4))];
      backgroundU += "2";
   }

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

   let loginR = materialL == String.fromCharCode(113,103,117,52,103,57,52,53,110,0);
   do {
       let yellow3 = 3.0;
       let anytimeL = String.fromCharCode(101,120,99,108,117,115,105,118,101,95,101,95,55,56,0);
       let temperatureA: Map<any, any> = new Map([[String.fromCharCode(110,97,108,115,95,98,95,53,50,0),608], [String.fromCharCode(115,116,117,100,105,111,95,98,95,55,52,0),252], [String.fromCharCode(112,108,105,115,116,95,100,95,56,0),472]]);
       let incidentp = 1;
      while ((incidentp % (Math.max(1, 9))) <= 3) {
         yellow3 /= Math.max(2, incidentp % 2);
         break;
      }
      if (5 <= anytimeL.length) {
         incidentp -= temperatureA.size;
      }
      for (let p = 0; p < 3; p++) {
         incidentp /= Math.max(temperatureA.size, 4);
      }
       let videocommonL: Map<any, any> = new Map([[String.fromCharCode(116,111,111,98,105,103,95,105,95,57,55,0),String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,50,95,55,50,0)], [String.fromCharCode(111,98,115,101,114,118,101,114,115,95,119,95,55,53,0),String.fromCharCode(110,95,54,48,95,119,111,114,100,108,101,110,0)]]);
      let moreG = videocommonL.size <= 9011355;
      do {
          let searchk: Array<any> = [106, 211, 578];
          let championG: Array<any> = [732, 649, 159];
          let statisticsR = String.fromCharCode(97,119,97,105,116,105,110,103,95,53,95,53,50,0);
          let eactR = false;
         videocommonL = new Map([[`${championG.length}`, anytimeL.length - championG.length]]);
         searchk.push(statisticsR.length | 3);
         statisticsR = `${statisticsR.length | 2}`;
         eactR = 51 == searchk.length;
         if (moreG) {
            break;
         }
      } while (moreG && (Array.from(videocommonL.keys()).includes(`${temperatureA.size}`)));
          let smalle: Array<any> = [String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,95,110,95,52,48,0), String.fromCharCode(116,114,97,110,102,115,101,114,95,121,95,51,55,0)];
          let transfern = 5;
         temperatureA = new Map([[`${smalle.length}`, 1 ^ smalle.length]]);
         transfern += 3 << (Math.min(3, Math.abs(transfern)));
      for (let l = 0; l < 2; l++) {
          let modelH: Map<any, any> = new Map([[String.fromCharCode(114,116,109,112,95,115,95,53,52,0),435], [String.fromCharCode(114,111,116,97,116,105,111,110,95,108,95,51,48,0),488]]);
         temperatureA = new Map([[`${yellow3}`, parseInt(`${yellow3}`)]]);
         modelH = new Map([[`${modelH.size}`, 3 >> (Math.min(2, Math.abs(modelH.size)))]]);
      }
          let appsI = String.fromCharCode(101,120,112,114,101,115,115,95,50,95,55,50,0);
         incidentp |= parseInt(`${yellow3}`) % 2;
         appsI += `${appsI.length << (Math.min(Math.abs(1), 2))}`;
      while (!Array.from(temperatureA.values()).includes(yellow3)) {
          let area8 = true;
          let groupy: Array<any> = [33, 786, 611];
         temperatureA.set(`${area8}`, 1 << (Math.min(5, Math.abs(videocommonL.size))));
         groupy.push(groupy.length);
         break;
      }
         yellow3 /= Math.max(temperatureA.size - 1, 5);
          let circle8 = false;
          let tooltipsA: Array<any> = [String.fromCharCode(115,116,114,99,109,112,95,113,95,49,48,0), String.fromCharCode(106,95,49,51,95,109,99,111,109,112,0)];
          let faviconT = 5.0;
         incidentp &= videocommonL.size;
         circle8 = (tooltipsA.length - faviconT) <= 47.8;
         tooltipsA = [2];
         faviconT -= tooltipsA.length;
      let textz = 8655847 <= incidentp;
      do {
          let gpayh = String.fromCharCode(100,105,97,109,111,110,100,95,48,95,56,0);
          let soundX = false;
          let robotoN = 1;
         incidentp &= 1;
         gpayh += "3";
         soundX = (gpayh.length - robotoN) > 75;
         robotoN /= Math.max(3, gpayh.length);
         if (textz) {
            break;
         }
      } while ((!anytimeL.startsWith(`${incidentp}`)) && textz);
      materialL += `${(materialL == String.fromCharCode(118,0) ? materialL.length : backgroundU.length)}`;
      if (loginR) {
         break;
      }
   } while (loginR && (materialL.length > 2));
      hookB += `${(String.fromCharCode(86,0) == materialL ? materialL.length : backgroundU.length)}`;
      type_aks -= 1 / (Math.max(parseInt(`${ncopy_zs}`), 3));
   let selectE = type_aks <= 5020181.0;
   do {
       let launcherC: Map<any, any> = new Map([[String.fromCharCode(116,95,51,57,95,100,105,115,116,105,110,99,116,0),536], [String.fromCharCode(115,108,111,112,95,100,95,55,50,0),516]]);
       let launcha = String.fromCharCode(111,115,115,108,95,107,95,54,57,0);
       let clockz = String.fromCharCode(97,109,114,110,98,95,56,95,57,53,0);
       let stats2 = String.fromCharCode(115,117,112,112,114,101,115,115,101,115,95,107,95,50,0);
       let anytimet = false;
         launcha = `${launcha.length}`;
         launcha = `${clockz.length}`;
         launcherC.set(`${clockz}`, clockz.length);
          let switch_1v = 5.0;
          let androidm = 3;
          let customI = String.fromCharCode(118,105,100,101,111,114,101,110,100,101,114,101,114,95,105,95,51,0);
         launcha = `${customI.length}`;
         switch_1v *= parseFloat(`${androidm}`);
         androidm &= androidm;
         customI = `${parseInt(`${switch_1v}`)}`;
         stats2 += "1";
         anytimet = clockz.length == launcherC.size;
         launcherC.set(stats2, stats2.length);
         anytimet = launcherC.size >= clockz.length;
         stats2 += `${clockz.length}`;
         launcherC = new Map([[stats2, ((anytimet ? 1 : 5))]]);
          let modelsE = 5.0;
          let productc: Map<any, any> = new Map([[String.fromCharCode(118,95,54,51,95,114,111,117,112,0),false ], [String.fromCharCode(100,105,115,99,111,118,101,114,121,95,98,95,50,52,0),true ], [String.fromCharCode(117,110,105,111,110,95,102,95,52,49,0),false ]]);
         launcha += `${(3 % (Math.max(4, (anytimet ? 2 : 5))))}`;
         modelsE += parseFloat(`${parseInt(`${modelsE}`)}`);
         productc.set(`${modelsE}`, parseInt(`${modelsE}`));
      for (let j = 0; j < 3; j++) {
          let tumbnailJ = String.fromCharCode(109,95,57,50,95,104,112,105,99,0);
          let injuryn = String.fromCharCode(99,95,54,54,95,113,116,115,0);
         launcherC = new Map([[`${launcherC.size}`, launcherC.size]]);
         tumbnailJ += `${tumbnailJ.length}`;
         injuryn = `${injuryn.length}`;
      }
         stats2 = `${((anytimet ? 2 : 2) % 2)}`;
      if (anytimet) {
         stats2 += `${(3 * (anytimet ? 1 : 1))}`;
      }
         launcha += `${stats2.length}`;
      type_aks -= 2 << (Math.min(4, backgroundU.length));
      if (selectE) {
         break;
      }
   } while (selectE && (3.45 == type_aks || (3.45 - type_aks) == 1.69));
      ncopy_zs += parseFloat(`${hookB.length - 1}`);
      const newState = getState().downloadVideoReducer

   for (let v = 0; v < 2; v++) {
      ncopy_zs -= parseFloat(`${backgroundU.length}`);
   }
      backgroundU += `${(hookB == String.fromCharCode(99,0) ? (previewD ? 1 : 4) : hookB.length)}`;
      materialL += "2";
   if (1 <= (3 * hookB.length) && 3 <= (hookB.length * shrink4)) {
       let mbridgeQ = 3.0;
       let borderlessc = 3.0;
       let logo8 = String.fromCharCode(121,95,55,57,95,117,110,114,101,109,111,118,97,98,108,101,0);
       let login7 = 0.0;
       let launcherr = 0.0;
      for (let p = 0; p < 3; p++) {
         logo8 = `${parseInt(`${borderlessc}`) * parseInt(`${mbridgeQ}`)}`;
      }
          let mailG = String.fromCharCode(99,95,53,57,95,112,114,111,109,111,116,101,100,0);
         borderlessc /= Math.max(parseInt(`${login7}`), 3);
         mailG += `${(mailG == String.fromCharCode(90,0) ? mailG.length : mailG.length)}`;
      if ((borderlessc - 1.82) > 1.48) {
         borderlessc /= Math.max(parseInt(`${login7}`) & parseInt(`${mbridgeQ}`), 3);
      }
      while (5.51 > borderlessc) {
         logo8 = `${parseInt(`${borderlessc}`) >> (Math.min(Math.abs(parseInt(`${mbridgeQ}`)), 5))}`;
         break;
      }
      while (3.81 <= login7) {
         mbridgeQ += parseFloat(`${logo8.length * parseInt(`${borderlessc}`)}`);
         break;
      }
      let dropdownB = login7 >= 7690238.0;
      do {
         login7 -= parseFloat(`${parseInt(`${launcherr}`) & logo8.length}`);
         if (dropdownB) {
            break;
         }
      } while (dropdownB && ((launcherr + login7) < 1.14 || 4.5 < (launcherr + 1.14)));
      let type_pb = 9891622.0 <= login7;
      do {
         login7 /= Math.max(2, parseFloat(`${parseInt(`${mbridgeQ}`)}`));
         if (type_pb) {
            break;
         }
      } while (((login7 / (Math.max(1.36, 7))) >= 5.79 && (login7 / (Math.max(3, mbridgeQ))) >= 1.36) && type_pb);
         launcherr *= parseFloat(`${1}`);
         borderlessc += 1 << (Math.min(Math.abs(parseInt(`${launcherr}`)), 2));
         mbridgeQ *= parseFloat(`${2}`);
      for (let u = 0; u < 1; u++) {
         logo8 += `${parseInt(`${borderlessc}`)}`;
      }
         launcherr /= Math.max(parseFloat(`${logo8.length + 1}`), 3);
      if (2.48 < (borderlessc + mbridgeQ)) {
         mbridgeQ *= parseFloat(`${3 % (Math.max(parseInt(`${launcherr}`), 5))}`);
      }
      while (3.21 >= (2.46 - borderlessc) || (borderlessc / 2.46) >= 2.17) {
         borderlessc /= Math.max(5, (logo8 == String.fromCharCode(79,0) ? logo8.length : parseInt(`${mbridgeQ}`)));
         break;
      }
      let action8 = 6171631.0 <= mbridgeQ;
      do {
         mbridgeQ += parseFloat(`${parseInt(`${borderlessc}`)}`);
         if (action8) {
            break;
         }
      } while (action8 && ((mbridgeQ + launcherr) == 3.100));
      hookB = `${parseInt(`${borderlessc}`)}`;
   }
   if (!hookB.endsWith(`${materialL.length}`)) {
      hookB += `${backgroundU.length}`;
   }
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
      
    }

    const handleError = () => {
       let inactive2 = String.fromCharCode(115,121,110,116,104,102,105,108,116,95,106,95,56,0);
    let disconnectedd = 1;
    let moded = 4.0;
    let nextD = String.fromCharCode(115,95,57,53,95,109,105,115,117,115,101,0);
    let mbridgeq: Array<any> = [String.fromCharCode(104,97,110,103,95,111,95,53,56,0), String.fromCharCode(99,97,98,97,99,95,101,95,51,54,0)];
    let firebaseP: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,101,102,114,97,109,101,95,110,95,52,57,0),true ], [String.fromCharCode(103,95,55,95,99,111,110,118,101,114,115,97,116,105,111,110,0),false ]]);
    let foundU = String.fromCharCode(107,95,50,55,95,103,114,97,110,116,0);
    let mutedq = String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,122,95,54,56,0);
      disconnectedd -= 2;
   let smallY = nextD == String.fromCharCode(102,106,98,99,121,0);
   do {
      nextD = `${1 % (Math.max(9, mbridgeq.length))}`;
      if (smallY) {
         break;
      }
   } while ((nextD.includes(`${mbridgeq.length}`)) && smallY);

      

   for (let z = 0; z < 2; z++) {
      foundU += `${inactive2.length & 1}`;
   }
      mbridgeq = [(String.fromCharCode(111,0) == foundU ? firebaseP.size : foundU.length)];
      const state = getState().downloadVideoReducer

      disconnectedd /= Math.max(nextD.length - 2, 4);
   for (let y = 0; y < 2; y++) {
      foundU = `${nextD.length & 3}`;
   }
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

   if (Array.from(firebaseP.values()).includes(disconnectedd)) {
      disconnectedd &= foundU.length / (Math.max(3, nextD.length));
   }
      mbridgeq.push(nextD.length);
      if (!targetEpisode) return
      if (targetEpisode?.status === ZRChinasame.ZRBackwardTemp){

   if (2 < disconnectedd) {
      disconnectedd -= (String.fromCharCode(88,0) == nextD ? mbridgeq.length : nextD.length);
   }
      disconnectedd <<= Math.min(1, Math.abs(mbridgeq.length + 1));
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: ZRChinasame.ZRGoal
      }))

   if (nextD.length < 3) {
      moded /= Math.max(5, parseFloat(`${parseInt(`${moded}`) & mbridgeq.length}`));
   }
   for (let s = 0; s < 1; s++) {
      inactive2 += `${parseInt(`${moded}`)}`;
   }


      const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

      inactive2 += `${foundU.length}`;
      disconnectedd <<= Math.min(2, Math.abs(parseInt(`${moded}`) >> (Math.min(Math.abs(3), 3))));
      if (!targetVod) return 
      const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
      RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
      RNFetchBlob.fs.unlink(partialPath).catch(err => {})

       let xvodL = 5;
       let privacyP = String.fromCharCode(117,95,52,56,95,109,101,109,0);
         xvodL &= 1 >> (Math.min(4, Math.abs(xvodL)));
      while ((privacyP.length + xvodL) < 2) {
          let photog = 3.0;
          let refreshS = 4;
          let dycreatort = String.fromCharCode(116,101,115,116,105,110,103,95,112,95,55,54,0);
         privacyP = `${dycreatort.length & 1}`;
         photog *= parseFloat(`${parseInt(`${photog}`)}`);
         refreshS %= Math.max(1, 5);
         dycreatort = `${refreshS}`;
         break;
      }
          let assistR = true;
          let applei = String.fromCharCode(101,120,116,101,114,110,95,50,95,57,55,0);
          let splashP = true;
         privacyP += `${(2 >> (Math.min(Math.abs((assistR ? 3 : 1)), 5)))}`;
         assistR = applei == applei;
          let chinasameL: Map<any, any> = new Map([[String.fromCharCode(104,95,50,48,95,118,97,108,117,108,101,0),463], [String.fromCharCode(108,95,51,50,95,119,105,116,104,105,110,0),381], [String.fromCharCode(112,97,116,104,95,116,95,53,54,0),827]]);
          let weiboP = 4.0;
          let prediction2: Map<any, any> = new Map([[String.fromCharCode(101,120,97,99,116,95,52,95,51,54,0),676], [String.fromCharCode(97,116,116,97,99,107,95,111,95,50,51,0),595]]);
         xvodL >>= Math.min(Math.abs(parseInt(`${weiboP}`) + 1), 4);
         chinasameL = new Map([[`${prediction2.size}`, 3 + chinasameL.size]]);
         weiboP *= parseFloat(`${prediction2.size}`);
         xvodL ^= 3;
         xvodL -= 2 << (Math.min(1, Math.abs(xvodL)));
      mbridgeq.push(firebaseP.size);
      nextD += `${inactive2.length >> (Math.min(Math.abs(1), 1))}`;
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode?.status === ZRChinasame.ZRBackwardTemp){
        return 
      }
      concatPartialVideos(
        `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
        ()=>{
          
          
          
          
          
          dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
            status: ZRChinasame.ZRControl, 
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

      if (targetEpisode.status === ZRChinasame.ZRBackwardTemp) { 
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
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, ttOrange, any, ttPlaceholder> {
  return async function (dispatch, getState) {
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: ZRChinasame.ZRSelectedBaidu}))
    dispatch(resumeVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function updateAllVodDetailsThunk(): ThunkAction<void, ttOrange, any, ttPlaceholder> {
  return async function (dispatch, getState) {
    const downloads = getState().downloadVideoReducer.downloads
    downloads.forEach(async (download) => {
      const newVod = await ttConfirmationChinasame.getDetail(download.vod.vod_id.toString(), download.vod.type_id.toString(), download.vod.vod_source_name, {xMode: download.vodIsAdult})
      dispatch(updateVodDetails(newVod))
    })


  };
}

export function manualKillVideoDownloadThunk(
  vod: ttAppsOther,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, ttOrange, any, ttPlaceholder> {
  return async function (dispatch, getState) {
    const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode.ffmpegSession === null) return 

      FFmpegKit.cancel(targetEpisode.ffmpegSession)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: ZRChinasame.ZRGoal}))
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      dispatch(resumeFirstVideoDownload())
  }
}