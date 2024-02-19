import { yysRegister, yysAppsRenew } from "@type";
import { yysPenaltyshoot } from "@type";
import { concatPartialVideos, downloadVod, downloadVodImage, getUrlOfVod, pauseDownloadVod, resumeDownloadVod } from "../../utils/yys_short";
import { ThunkAction } from "redux-thunk";
import { IConfirmationLibffmpegkit, yysStatistics, yysEdit, yysStoreService } from "@type";
import { yysIconclosewhiteBaiduads } from "@redux";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegKit, FFmpegSession } from "ffmpeg-kit-react-native";
import { throttle } from "lodash";
import { yysInactive } from "../../api/yys_found";

function addVideoToDownload(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean): yysRegister {
  return {
    type: 'ADD_VIDEO_TO_DOWNLOAD',
    payload: {
      vod,
      vodSourceId,
      vodUrlNid,
      vodIsAdult: vodIsAdult ?? false
    }
  }
}

function updateVideoDownload(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number, optional: yysAppsRenew): yysRegister {
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

function startVideoDownload(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number): yysRegister {
  return {
    type: 'START_VIDEO_DOWNLOAD',
    payload: {
      vod,
      vodSourceId,
      vodUrlNid,
    }
  }
}

function endVideoDownload(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number): yysRegister {
  return {
    type: 'END_VIDEO_DOWNLOAD',
    payload: {
      vod,
      vodSourceId,
      vodUrlNid,
    }
  }
}

export function addDownloadToQueue(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number): yysRegister {
  return {
    type: 'ADD_DOWNLOAD_TO_QUEUE',
    payload: {
      vod,
      vodSourceId,
      vodUrlNid,
    }
  }
}

export function removeDownloadFromQueue(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number): yysRegister {
  return {
    type: 'REMOVE_DOWNLOAD_FROM_QUEUE',
    payload: {
      vod,
      vodSourceId,
      vodUrlNid,
    }
  }
}

export function removeVideoFromDownload(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number): yysRegister {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD',
    payload: {
      vod,
      vodSourceId,
      vodUrlNid,
    }
  }
}


export function removeVodFromDownload(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number): yysRegister {
  return {
    type: 'REMOVE_VOD_FROM_DOWNLOAD',
    payload: {
      vod,
      vodSourceId,
      vodUrlNid,
    }
  }
}

function resetQueue(): yysRegister {
  return {
    type: "RESET_QUEUE",
    
    payload: null 
  }
}

function pauseVideoDownload(vod: yysPenaltyshoot, vodSourceId: number, vodUrlNid: number): yysRegister {
  return {
    type: 'PAUSE_VIDEO_DOWNLOAD',
    payload: {
      vod,
      vodSourceId,
      vodUrlNid,
    }
  }
}

function updateVodDetails(vod: yysPenaltyshoot): yysRegister {
  return {
    type: 'UPDATE_VOD_DETAILS',
    payload: {
      vod,
      vodSourceId: 0, 
      vodUrlNid: 0, 
    }
  }
}

function startFirstVideoDownload(): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer;
    const firstVod = state.queue.at(0);
    if (!firstVod) return;
    console.debug('first vod is adult', firstVod.vodIsAdult)
    const vod = state.downloads.find(x => x.vod.vod_id === firstVod.vodId)?.vod
    if (!vod) return;
    dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
  }
}

function resumeFirstVideoDownload(): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
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

    if (firstVodProgressPercentage === 0) {
      dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    } else {
      dispatch(resumeVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    }
  }
}

function startVideoDownloadThunk(
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const throttledUpdate = throttle((percentage) => {
       let macauL = true;
    let attributedstringg = String.fromCharCode(107,95,51,51,95,101,118,98,117,102,102,101,114,0);
    let vipsporti = 3;
    let b_managerI = false;
    let iconcloseh = 3.0;
    let r_managerO = 5.0;
    let episodeg = 5.0;
    let weatherz = 3.0;
    let iconsaveimagec = 1.0;
    let modalU = true;
      vipsporti %= Math.max(vipsporti, 1);
   while ((iconsaveimagec / 1.34) < 4.14) {
      b_managerI = vipsporti > 77 || !b_managerI;
      break;
   }
   let coreZ = 5959077 <= vipsporti;
   do {
       let annerO = 2.0;
       let iconcurrentmatchB = 5.0;
          let componentsh: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,100,95,50,95,52,48,0),true ], [String.fromCharCode(112,95,51,57,95,100,114,97,103,103,101,100,0),false ], [String.fromCharCode(100,101,99,111,100,101,100,95,113,95,57,53,0),true ]]);
          let rewardvideo3 = String.fromCharCode(99,101,108,116,95,122,95,50,56,0);
         annerO -= rewardvideo3.length;
         componentsh = new Map([[`${componentsh.size}`, componentsh.size]]);
         rewardvideo3 += `${componentsh.size}`;
      for (let r = 0; r < 1; r++) {
         iconcurrentmatchB /= Math.max(parseFloat(`${parseInt(`${annerO}`) % (Math.max(4, parseInt(`${iconcurrentmatchB}`)))}`), 4);
      }
      if ((annerO / 5.82) < 4.88) {
         annerO -= 2 & parseInt(`${annerO}`);
      }
       let orangeh = String.fromCharCode(100,111,103,0);
         iconcurrentmatchB += parseFloat(`${orangeh.length - 1}`);
      let refreshJ = iconcurrentmatchB >= 5949544.0;
      do {
         iconcurrentmatchB -= parseFloat(`${orangeh.length << (Math.min(2, Math.abs(parseInt(`${iconcurrentmatchB}`))))}`);
         if (refreshJ) {
            break;
         }
      } while ((!orangeh.endsWith(`${iconcurrentmatchB}`)) && refreshJ);
      vipsporti >>= Math.min(Math.abs(parseInt(`${episodeg}`)), 2);
      if (coreZ) {
         break;
      }
   } while ((iconsaveimagec >= vipsporti) && coreZ);
   let progressH = 7192875 <= vipsporti;
   do {
      vipsporti += parseInt(`${r_managerO}`) & 3;
      if (progressH) {
         break;
      }
   } while ((4 < (2 - vipsporti)) && progressH);
   while (!macauL || (4.59 + iconsaveimagec) >= 2.14) {
      macauL = iconcloseh > 61.58;
      break;
   }

      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)

       let config3: Map<any, any> = new Map([[String.fromCharCode(100,101,102,108,105,99,107,101,114,0),true ], [String.fromCharCode(116,97,107,101,95,121,95,51,50,0),false ], [String.fromCharCode(100,116,100,102,95,55,95,52,55,0),false ]]);
       let plusy = 5;
       let thailandM: Array<any> = [String.fromCharCode(97,95,52,51,95,114,101,103,105,115,116,101,114,101,114,0), String.fromCharCode(105,112,109,111,118,105,101,0), String.fromCharCode(99,104,101,99,107,109,109,0)];
      if ((config3.size - 1) >= 5) {
         config3 = new Map([[`${config3.size}`, thailandM.length]]);
      }
         thailandM = [config3.size >> (Math.min(thailandM.length, 5))];
      while (1 >= (3 << (Math.min(5, Math.abs(plusy)))) && (plusy << (Math.min(Math.abs(3), 3))) >= 3) {
          let baiduadsx = 4.0;
         thailandM = [thailandM.length];
         baiduadsx += parseInt(`${baiduadsx}`) * 1;
         break;
      }
      for (let f = 0; f < 3; f++) {
         plusy <<= Math.min(Math.abs(config3.size / 2), 4);
      }
         thailandM = [plusy << (Math.min(thailandM.length, 5))];
          let playercommonb = String.fromCharCode(114,105,110,103,116,111,110,101,115,95,102,95,55,48,0);
          let thailandm = 3.0;
          let cricketx = 2;
         plusy -= cricketx ^ 2;
         playercommonb += `${playercommonb.length}`;
         thailandm /= Math.max(playercommonb.length ^ 2, 3);
         cricketx += (playercommonb == String.fromCharCode(112,0) ? playercommonb.length : parseInt(`${thailandm}`));
      while (Array.from(config3.values()).includes(plusy)) {
         plusy ^= plusy << (Math.min(Math.abs(2), 1));
         break;
      }
         config3.set(`${plusy}`, 2 << (Math.min(3, thailandM.length)));
         plusy >>= Math.min(4, thailandM.length);
      vipsporti &= plusy ^ 1;
      attributedstringg += `${parseInt(`${iconsaveimagec}`) + 3}`;
      weatherz += 2;
   if (5.66 >= (weatherz - iconcloseh)) {
      weatherz *= ((macauL ? 5 : 3) - parseInt(`${weatherz}`));
   }
   if (4.79 >= (episodeg / 2.15)) {
       let scrollviewM = String.fromCharCode(105,109,99,100,97,116,97,0);
       let defaultteamA = 2.0;
       let const_o5U: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,105,116,95,51,95,54,0),true ], [String.fromCharCode(99,95,49,53,95,112,98,108,111,99,107,115,0),false ]]);
       let config0: Array<any> = [String.fromCharCode(104,95,56,95,115,101,114,118,101,114,115,0), String.fromCharCode(111,95,54,95,114,101,115,111,108,117,116,105,111,110,0)];
       let penaltyY: Array<any> = [646, 169];
      let soundk = 5440793 >= config0.length;
      do {
          let yingg = 0.0;
          let loadingE = false;
         config0 = [1 | parseInt(`${yingg}`)];
         yingg -= ((loadingE ? 5 : 5));
         if (soundk) {
            break;
         }
      } while ((4 < config0.length) && soundk);
      if (penaltyY.length > 3) {
         penaltyY.push(config0.length);
      }
      for (let l = 0; l < 1; l++) {
          let libavformatL = true;
          let hoveru = 1;
          let downx = 4.0;
         config0 = [hoveru - penaltyY.length];
         libavformatL = !libavformatL;
         hoveru <<= Math.min(Math.abs(((libavformatL ? 5 : 4) + parseInt(`${downx}`))), 4);
         downx -= parseFloat(`${1 / (Math.max(parseInt(`${downx}`), 6))}`);
      }
      if ((4 & config0.length) > 1 || (4 & config0.length) > 2) {
         scrollviewM = `${config0.length}`;
      }
       let headerM = 5.0;
       let lessH = 3.0;
          let bannerN = String.fromCharCode(109,97,103,110,105,116,117,100,101,95,97,95,55,55,0);
         const_o5U = new Map([[`${config0.length}`, config0.length * parseInt(`${headerM}`)]]);
         bannerN = `${bannerN.length}`;
      for (let l = 0; l < 2; l++) {
         config0 = [3 | parseInt(`${lessH}`)];
      }
      let libturbomodulejsijnig = const_o5U.size <= 7240293;
      do {
         const_o5U = new Map([[`${lessH}`, 3 + parseInt(`${lessH}`)]]);
         if (libturbomodulejsijnig) {
            break;
         }
      } while ((3.84 < (const_o5U.size - defaultteamA)) && libturbomodulejsijnig);
      episodeg -= 2;
   }
      if (currentState?.status === IConfirmationLibffmpegkit.ICrown) {

      r_managerO += (attributedstringg.length >> (Math.min(1, Math.abs((macauL ? 3 : 2)))));
   let networkU = 9179526.0 <= iconcloseh;
   do {
       let playershirtq = 1;
         playershirtq >>= Math.min(Math.abs(playershirtq), 2);
      let away1 = 7361369 <= playershirtq;
      do {
          let iconcalendarg = 2.0;
          let penaltyshootS = String.fromCharCode(115,99,97,110,116,97,98,108,101,0);
          let videocommon5 = String.fromCharCode(121,95,56,49,95,100,105,100,0);
          let notificationZ: Array<any> = [583, 992, 452];
          let play_ = String.fromCharCode(99,95,54,55,95,115,116,111,119,0);
         playershirtq -= play_.length + 3;
         iconcalendarg *= videocommon5.length & 2;
         penaltyshootS = `${penaltyshootS.length}`;
         videocommon5 = `${videocommon5.length << (Math.min(penaltyshootS.length, 3))}`;
         notificationZ.push(2 - videocommon5.length);
         play_ = `${notificationZ.length}`;
         if (away1) {
            break;
         }
      } while (away1 && (4 <= (playershirtq & 5)));
         playershirtq /= Math.max(playershirtq, 2);
      iconcloseh /= Math.max(parseFloat(`${2}`), 2);
      if (networkU) {
         break;
      }
   } while (networkU && (2 > (attributedstringg.length % 2)));
   if (4.80 > (weatherz / 4.42)) {
      weatherz += (parseInt(`${r_managerO}`) & (b_managerI ? 5 : 1));
   }
      r_managerO /= Math.max(1, (String.fromCharCode(82,0) == attributedstringg ? (macauL ? 3 : 3) : attributedstringg.length));
      b_managerI = 66 <= (vipsporti / (Math.max(episodeg, 1)));
        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(percentage, 100)
          }
        }))
      }
    }, 2000)
    const handleUpdate = ({ percentage, bytes }: { percentage?: number, bytes?: number }) => {
      
      if (percentage !== undefined) {
        throttledUpdate(percentage)
      }
      
      
      
      
      
      
      
    }

    const onDownloadEnd = () => {
       let yellowscoreball7 = String.fromCharCode(107,95,57,50,95,97,116,97,99,101,110,116,101,114,0);
    let downloadT: Map<any, any> = new Map([[String.fromCharCode(101,109,109,105,110,116,114,105,110,0),true ], [String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,106,95,55,54,0),false ], [String.fromCharCode(104,95,54,50,95,101,97,99,115,0),true ]]);
    let iconcalendarl = 1;
    let footballfiledlayoutg = String.fromCharCode(102,105,110,97,108,105,122,101,95,101,95,49,50,0);
    let pathn = String.fromCharCode(106,95,57,48,95,102,108,105,99,0);
    let dragcloseg = String.fromCharCode(114,97,105,110,95,117,95,53,50,0);
    let predictionbutton2 = String.fromCharCode(112,95,55,54,95,98,97,100,0);
    let backiconmaskg = 5;
    let nterstitialt: Map<any, any> = new Map([[String.fromCharCode(101,95,54,52,95,100,97,116,97,104,97,115,104,0),false ], [String.fromCharCode(121,95,53,57,95,103,101,116,99,114,101,100,0),true ], [String.fromCharCode(98,117,102,102,101,114,101,100,95,111,95,50,49,0),true ]]);
    let megaphoner: Array<any> = [102, 400, 807];
    let iconlogout_ = false;
    let buildw: Map<any, any> = new Map([[String.fromCharCode(116,101,120,105,100,101,112,0),21], [String.fromCharCode(113,95,50,56,95,97,108,105,97,115,0),461]]);
    let type_5B: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,49,95,54,0),912], [String.fromCharCode(108,111,103,109,111,110,111,95,103,95,53,54,0),169]]);
   let helper6 = 9844293 >= iconcalendarl;
   do {
       let spinnerr = 4.0;
       let bgvipsport5 = String.fromCharCode(108,105,99,101,110,115,101,0);
      for (let e = 0; e < 1; e++) {
         bgvipsport5 += `${bgvipsport5.length}`;
      }
         spinnerr += bgvipsport5.length & 1;
      while (bgvipsport5.length >= 1) {
          let predictionwinT: Array<any> = [String.fromCharCode(115,95,50,56,95,99,111,110,116,97,105,110,115,0), String.fromCharCode(103,95,54,54,95,109,98,115,116,114,105,110,103,0)];
          let membern = String.fromCharCode(97,117,116,111,102,105,108,108,95,54,95,52,51,0);
          let predictiondefaulto = 2;
          let leakcheckerK = String.fromCharCode(106,95,57,57,0);
          let pointE: Array<any> = [711, 454, 734];
         bgvipsport5 += `${leakcheckerK.length}`;
         predictionwinT = [predictiondefaulto];
         membern += `${membern.length}`;
         predictiondefaulto |= 1;
         leakcheckerK += `${3 & membern.length}`;
         pointE = [predictiondefaulto & pointE.length];
         break;
      }
       let gradlej: Array<any> = [603, 759, 886];
       let modules_: Array<any> = [394, 489];
         bgvipsport5 += `${bgvipsport5.length - parseInt(`${spinnerr}`)}`;
      let mimeF = gradlej.length <= 8439712;
      do {
          let bellreminderG = 0.0;
          let interstitial8 = String.fromCharCode(112,114,111,103,114,97,109,0);
          let heartk = String.fromCharCode(98,111,100,101,114,95,98,95,49,49,0);
          let borderlessz = true;
         gradlej.push(((borderlessz ? 4 : 1) ^ bgvipsport5.length));
         bellreminderG -= parseFloat(`${3}`);
         interstitial8 += `${interstitial8.length}`;
         heartk += `${interstitial8.length * heartk.length}`;
         borderlessz = bellreminderG >= 29.89;
         if (mimeF) {
            break;
         }
      } while (((4 << (Math.min(2, modules_.length))) < 1 || (gradlej.length << (Math.min(Math.abs(4), 5))) < 1) && mimeF);
      iconcalendarl %= Math.max(4, predictionbutton2.length);
      if (helper6) {
         break;
      }
   } while ((2 >= (4 | iconcalendarl) && (iconcalendarl | 4) >= 2) && helper6);
   for (let q = 0; q < 3; q++) {
      megaphoner = [3 - backiconmaskg];
   }
   let short_f1 = 7616792 <= yellowscoreball7.length;
   do {
      yellowscoreball7 = `${(yellowscoreball7 == String.fromCharCode(122,0) ? pathn.length : yellowscoreball7.length)}`;
      if (short_f1) {
         break;
      }
   } while ((downloadT.size >= 5) && short_f1);
   while (backiconmaskg < nterstitialt.size) {
       let libffmpegkitK = 3;
       let bgvipxvodg = String.fromCharCode(103,115,109,100,101,99,0);
      while (3 < libffmpegkitK) {
         libffmpegkitK |= libffmpegkitK | 1;
         break;
      }
      if (bgvipxvodg.length < libffmpegkitK) {
         bgvipxvodg = `${1 / (Math.max(3, libffmpegkitK))}`;
      }
      if (3 < (bgvipxvodg.length ^ 5)) {
         libffmpegkitK %= Math.max(2, 3);
      }
         bgvipxvodg += `${libffmpegkitK >> (Math.min(bgvipxvodg.length, 3))}`;
         bgvipxvodg = `${libffmpegkitK}`;
         libffmpegkitK >>= Math.min(Math.abs(2), 3);
      nterstitialt.set(`${iconlogout_}`, libffmpegkitK);
      break;
   }
      footballfiledlayoutg = "1";
       let thumbnail2: Map<any, any> = new Map([[String.fromCharCode(115,95,54,49,95,97,117,116,111,100,101,116,101,99,116,0),173], [String.fromCharCode(115,117,98,115,101,108,101,99,116,0),304]]);
          let googleh = 3.0;
          let trophyM = 5.0;
          let pauseY = String.fromCharCode(104,97,112,113,97,0);
         thumbnail2 = new Map([[`${googleh}`, parseInt(`${googleh}`) << (Math.min(pauseY.length, 5))]]);
         trophyM -= parseInt(`${trophyM}`);
          let acceptedO = 1.0;
          let arrowdownk = 3.0;
         thumbnail2 = new Map([[`${thumbnail2.size}`, thumbnail2.size - 1]]);
         acceptedO -= parseInt(`${arrowdownk}`) / 3;
         arrowdownk /= Math.max(parseInt(`${acceptedO}`), 2);
          let brightnessK = false;
          let defaultlogo6: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,49,95,53,57,0),617], [String.fromCharCode(110,95,48,95,117,115,101,100,0),98], [String.fromCharCode(112,114,105,109,101,114,0),734]]);
          let matchdetailbgc = 5.0;
         thumbnail2.set(`${brightnessK}`, (1 * (brightnessK ? 3 : 2)));
         defaultlogo6 = new Map([[`${defaultlogo6.size}`, 1]]);
         matchdetailbgc /= Math.max(2 >> (Math.min(2, Math.abs(defaultlogo6.size))), 4);
      iconlogout_ = megaphoner.length >= thumbnail2.size;
      dragcloseg = `${3 >> (Math.min(3, Math.abs(downloadT.size)))}`;
       let footballfieldQ = 4.0;
         footballfieldQ -= parseFloat(`${parseInt(`${footballfieldQ}`)}`);
         footballfieldQ *= parseFloat(`${parseInt(`${footballfieldQ}`) >> (Math.min(2, Math.abs(2)))}`);
         footballfieldQ -= parseFloat(`${2 | parseInt(`${footballfieldQ}`)}`);
      downloadT.set(`${iconcalendarl}`, 2);
      dragcloseg += `${(String.fromCharCode(97,0) == dragcloseg ? dragcloseg.length : predictionbutton2.length)}`;

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

      predictionbutton2 += `${3 * backiconmaskg}`;
      pathn = `${megaphoner.length}`;
   while (1 >= (megaphoner.length - 1)) {
      megaphoner.push(megaphoner.length);
      break;
   }
   let yingv = 8922377 >= buildw.size;
   do {
      buildw = new Map([[`${megaphoner.length}`, dragcloseg.length]]);
      if (yingv) {
         break;
      }
   } while (yingv && ((megaphoner.length % (Math.max(2, 8))) <= 2));
   while (Array.from(downloadT.keys()).includes(`${nterstitialt.size}`)) {
       let defaultprofilepica = String.fromCharCode(114,100,98,120,0);
       let trashv = String.fromCharCode(101,110,100,97,95,108,95,57,52,0);
       let rncoren = 4;
      if (2 > rncoren) {
         rncoren |= defaultprofilepica.length / (Math.max(1, 4));
      }
       let privatechatbgx: Array<any> = [String.fromCharCode(107,112,115,0), String.fromCharCode(113,95,54,48,95,100,99,116,114,101,102,0), String.fromCharCode(99,111,111,114,100,115,95,121,95,53,55,0)];
       let langkeyk: Map<any, any> = new Map([[String.fromCharCode(99,117,118,105,100,0),539], [String.fromCharCode(114,105,103,104,116,109,111,115,116,0),392]]);
      while (!defaultprofilepica.includes(`${rncoren}`)) {
         rncoren ^= 3 - privatechatbgx.length;
         break;
      }
      let minimizeV = 5577305 >= langkeyk.size;
      do {
         langkeyk.set(defaultprofilepica, (defaultprofilepica == String.fromCharCode(90,0) ? defaultprofilepica.length : privatechatbgx.length));
         if (minimizeV) {
            break;
         }
      } while (minimizeV && (langkeyk.size >= defaultprofilepica.length));
       let ewarded6 = false;
       let commentN = true;
         privatechatbgx = [(String.fromCharCode(52,0) == defaultprofilepica ? defaultprofilepica.length : privatechatbgx.length)];
         privatechatbgx = [rncoren >> (Math.min(5, Math.abs(1)))];
         commentN = 27 <= privatechatbgx.length;
      downloadT.set(`${yellowscoreball7}`, yellowscoreball7.length | downloadT.size);
      trashv += "2";
      break;
   }
      footballfiledlayoutg += `${downloadT.size}`;
   while ((yellowscoreball7.length | iconcalendarl) <= 3 && 3 <= (yellowscoreball7.length | iconcalendarl)) {
       let shareT: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,101,110,101,100,0),881], [String.fromCharCode(99,100,97,116,101,95,48,95,51,56,0),922], [String.fromCharCode(112,108,97,121,101,114,95,106,95,54,54,0),427]]);
       let filed0: Map<any, any> = new Map([[String.fromCharCode(113,95,57,52,95,101,99,111,117,110,116,0),918], [String.fromCharCode(110,95,57,53,95,111,117,116,112,117,116,0),530]]);
       let securityr = String.fromCharCode(97,105,102,102,95,111,95,53,48,0);
          let orangeuparrowP = String.fromCharCode(100,105,115,99,97,114,100,95,102,95,54,57,0);
          let fastS = 2;
         filed0.set(`${fastS}`, 3);
         orangeuparrowP += `${(orangeuparrowP == String.fromCharCode(89,0) ? orangeuparrowP.length : orangeuparrowP.length)}`;
         fastS ^= orangeuparrowP.length ^ 3;
          let greyarrowupa = 5.0;
          let iconchatsend5: Map<any, any> = new Map([[String.fromCharCode(101,115,115,105,111,110,0),22], [String.fromCharCode(101,112,122,115,0),289], [String.fromCharCode(102,95,52,52,95,101,120,116,114,97,99,102,103,0),588]]);
          let downc = true;
         shareT = new Map([[`${iconchatsend5.size}`, 3 % (Math.max(8, shareT.size))]]);
         greyarrowupa /= Math.max((parseFloat(`${parseInt(`${greyarrowupa}`) << (Math.min(3, Math.abs((downc ? 2 : 5))))}`)), 2);
         iconchatsend5.set(`${greyarrowupa}`, parseInt(`${greyarrowupa}`) - 1);
         downc = !downc;
          let defaultlogoD = false;
          let friendsI = 3.0;
          let constantsL = 2;
         securityr += "2";
         defaultlogoD = 38 >= (friendsI * constantsL);
         friendsI -= 3 + constantsL;
      while (1 == filed0.size) {
          let iconbellF = String.fromCharCode(100,95,51,50,95,108,112,99,109,0);
          let blackz = 1;
          let airbnbstarQ = true;
         filed0.set(securityr, iconbellF.length - 2);
         iconbellF += `${blackz << (Math.min(5, Math.abs(3)))}`;
         blackz &= 2 & blackz;
         airbnbstarQ = blackz > 55 && airbnbstarQ;
         break;
      }
      while ((filed0.size / (Math.max(7, shareT.size))) > 2) {
         filed0 = new Map([[`${shareT.size}`, 2]]);
         break;
      }
      for (let x = 0; x < 2; x++) {
         securityr = `${filed0.size * securityr.length}`;
      }
       let iconchatsend7: Array<any> = [642, 473];
       let lefti: Array<any> = [String.fromCharCode(104,119,100,111,119,110,108,111,97,100,0), String.fromCharCode(119,101,98,115,0)];
      if (!Array.from(filed0.keys()).includes(`${shareT.size}`)) {
         filed0 = new Map([[`${filed0.size}`, 3 >> (Math.min(2, Math.abs(filed0.size)))]]);
      }
       let gradlewI: Array<any> = [102, 544];
       let predictionbannerf: Array<any> = [567, 40];
      iconcalendarl /= Math.max(1, buildw.size ^ 1);
      break;
   }
      iconlogout_ = footballfiledlayoutg.length == 14 || buildw.size == 14;
      iconlogout_ = 60 >= footballfiledlayoutg.length;
      const newState = getState().downloadVideoReducer

   while (!iconlogout_) {
      iconlogout_ = buildw.size < footballfiledlayoutg.length;
      break;
   }
      iconlogout_ = 98 >= footballfiledlayoutg.length;
   for (let o = 0; o < 3; o++) {
      pathn += `${iconcalendarl - 2}`;
   }
   if ((downloadT.size >> (Math.min(Math.abs(2), 1))) == 5 && 2 == (downloadT.size >> (Math.min(2, megaphoner.length)))) {
      megaphoner.push(nterstitialt.size / (Math.max(1, 10)));
   }
   while (yellowscoreball7.length <= 1) {
       let orientation1 = false;
       let defaultroombgR = String.fromCharCode(100,105,114,101,99,116,105,111,110,0);
       let iconchatsendD = 5;
       let awayplayerP = 0;
      let malaysiaz = awayplayerP >= 8614953;
      do {
          let arrowrightwithtailV = String.fromCharCode(108,111,103,103,101,114,115,95,120,95,52,54,0);
          let macauq = String.fromCharCode(97,109,101,114,97,95,106,95,51,53,0);
         awayplayerP ^= awayplayerP * 2;
         arrowrightwithtailV += `${(macauq == String.fromCharCode(57,0) ? arrowrightwithtailV.length : macauq.length)}`;
         if (malaysiaz) {
            break;
         }
      } while (malaysiaz && (5 >= (2 / (Math.max(4, awayplayerP)))));
      while (3 > iconchatsendD) {
          let downloaderf: Array<any> = [532, 380, 307];
         awayplayerP /= Math.max(5, awayplayerP % (Math.max(downloaderf.length, 3)));
         break;
      }
       let theme9 = 5.0;
      while ((awayplayerP & iconchatsendD) == 1 && 3 == (1 & awayplayerP)) {
         iconchatsendD ^= iconchatsendD % (Math.max(awayplayerP, 5));
         break;
      }
      if (theme9 < 4.63) {
         awayplayerP ^= defaultroombgR.length;
      }
      megaphoner.push(((orientation1 ? 2 : 2) * 3));
      break;
   }
      backiconmaskg |= pathn.length;
      pathn = `${backiconmaskg & pathn.length}`;
   while (backiconmaskg >= 4) {
       let schedulers = true;
       let iconarrowleft0 = false;
       let predictionarrowY: Map<any, any> = new Map([[String.fromCharCode(104,95,56,50,95,118,99,100,115,112,0),String.fromCharCode(101,95,57,48,95,118,105,100,101,111,101,110,99,100,115,112,0)], [String.fromCharCode(110,111,116,105,102,105,101,114,0),String.fromCharCode(108,101,97,118,101,95,49,95,56,56,0)], [String.fromCharCode(105,110,102,0),String.fromCharCode(121,95,52,50,95,104,101,120,105,110,116,0)]]);
       let updatesD: Array<any> = [264, 147, 635];
       let libcrashsdkY = String.fromCharCode(105,102,97,100,100,114,115,95,112,95,57,56,0);
         libcrashsdkY = `${predictionarrowY.size}`;
         predictionarrowY.set(`${libcrashsdkY}`, (String.fromCharCode(74,0) == libcrashsdkY ? libcrashsdkY.length : predictionarrowY.size));
      let libturbomodulejsijniW = 6713856 >= updatesD.length;
      do {
         updatesD.push(2);
         if (libturbomodulejsijniW) {
            break;
         }
      } while ((iconarrowleft0) && libturbomodulejsijniW);
          let episodesX = 3;
          let penaltyQ = false;
          let basex = String.fromCharCode(100,95,52,51,95,111,110,116,111,0);
         iconarrowleft0 = updatesD.includes(schedulers);
         episodesX -= 1;
         penaltyQ = basex.includes(`${penaltyQ}`);
         basex += "3";
          let unreada = 4;
          let darkO: Map<any, any> = new Map([[String.fromCharCode(102,114,97,103,109,101,110,116,115,0),false ], [String.fromCharCode(115,116,111,114,101,120,0),false ], [String.fromCharCode(97,108,116,101,114,110,97,116,101,0),true ]]);
         libcrashsdkY += `${darkO.size}`;
         unreada *= unreada;
         darkO.set(`${unreada}`, 1 >> (Math.min(2, Math.abs(unreada))));
      let iconclose8 = schedulers ? !schedulers : schedulers;
      do {
         schedulers = (!schedulers ? iconarrowleft0 : schedulers);
         if (iconclose8) {
            break;
         }
      } while ((1 <= (4 | updatesD.length) && updatesD.length <= 4) && iconclose8);
         updatesD = [((iconarrowleft0 ? 2 : 2) - 1)];
      while ((updatesD.length % 4) < 2 || iconarrowleft0) {
          let whiteJ = 5;
          let iconwatchnown: Array<any> = [589, 495, 47];
          let regengQ: Array<any> = [752, 567, 186];
          let floaterR = String.fromCharCode(104,102,121,117,95,107,95,55,51,0);
          let temp6 = String.fromCharCode(98,95,55,49,0);
         iconarrowleft0 = 70 > whiteJ;
         whiteJ -= 1;
         iconwatchnown = [regengQ.length];
         regengQ.push(iconwatchnown.length);
         floaterR = `${regengQ.length}`;
         temp6 = `${regengQ.length * 3}`;
         break;
      }
      if (4 < (updatesD.length + 5)) {
         updatesD.push(1);
      }
      for (let d = 0; d < 3; d++) {
          let sourceo: Map<any, any> = new Map([[String.fromCharCode(99,95,52,56,95,98,121,116,101,115,104,117,109,97,110,0),true ], [String.fromCharCode(114,101,113,117,105,114,101,95,112,95,51,52,0),true ], [String.fromCharCode(100,105,115,97,98,108,101,115,95,110,95,53,55,0),true ]]);
          let libfbjniH: Array<any> = [String.fromCharCode(100,111,110,116,95,109,95,56,55,0), String.fromCharCode(100,114,111,112,115,95,105,95,49,53,0), String.fromCharCode(97,112,97,114,97,109,115,0)];
          let predictionlossL = 1.0;
          let bggradientQ: Array<any> = [String.fromCharCode(99,111,110,102,105,103,117,114,101,95,108,95,52,53,0), String.fromCharCode(107,95,53,48,95,112,111,114,116,97,108,0), String.fromCharCode(112,97,114,97,109,95,53,95,57,48,0)];
         updatesD = [sourceo.size / (Math.max(2, 7))];
         sourceo = new Map([[`${libfbjniH.length}`, parseInt(`${predictionlossL}`)]]);
         libfbjniH.push(parseInt(`${predictionlossL}`));
         bggradientQ.push(3);
      }
      let penaltyshootL = libcrashsdkY == String.fromCharCode(113,99,112,117,95,48,105,107,121,0);
      do {
         libcrashsdkY = `${updatesD.length}`;
         if (penaltyshootL) {
            break;
         }
      } while (penaltyshootL && (!libcrashsdkY.endsWith(`${schedulers}`)));
      while (3 < updatesD.length || (updatesD.length / (Math.max(3, 6))) < 2) {
          let libreactnativejnik: Array<any> = [672, 754];
         updatesD = [libcrashsdkY.length];
         libreactnativejnik.push(libreactnativejnik.length);
         break;
      }
          let emojihearte = String.fromCharCode(118,95,52,95,101,120,101,99,117,116,101,100,0);
          let whitevideoliveN = 1;
         schedulers = 90 <= predictionarrowY.size && 90 <= libcrashsdkY.length;
         emojihearte = `${emojihearte.length}`;
         whitevideoliveN >>= Math.min(emojihearte.length, 2);
         iconarrowleft0 = (3 < ((schedulers ? libcrashsdkY.length : 3) / (Math.max(libcrashsdkY.length, 9))));
       let predictionactiveI: Map<any, any> = new Map([[String.fromCharCode(113,95,57,49,95,99,117,98,101,100,0),true ], [String.fromCharCode(115,116,121,108,101,115,0),false ]]);
       let targetu: Map<any, any> = new Map([[String.fromCharCode(109,95,56,48,95,99,111,109,112,111,115,101,105,0),String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,51,95,55,56,0)], [String.fromCharCode(99,117,114,114,101,110,116,108,121,95,110,95,55,0),String.fromCharCode(117,116,120,111,0)]]);
      predictionbutton2 += `${1 / (Math.max(1, yellowscoreball7.length))}`;
      break;
   }
       let merger4 = String.fromCharCode(112,111,119,116,97,98,108,101,95,117,95,57,55,0);
       let recommendationY = 3;
       let loading5 = String.fromCharCode(116,95,52,49,95,99,104,101,99,107,105,110,0);
      let shareblack8 = recommendationY >= 7970192;
      do {
          let sinaW = 0;
          let tooltipsU = 2.0;
          let basketballJ = String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,0);
          let bridgeY = 0.0;
          let orangeclockv = 5.0;
         recommendationY &= recommendationY;
         sinaW *= parseInt(`${tooltipsU}`) % 2;
         tooltipsU += basketballJ.length;
         basketballJ = "2";
         bridgeY -= parseInt(`${bridgeY}`);
         orangeclockv /= Math.max(4, parseFloat(`${parseInt(`${orangeclockv}`) / 3}`));
         if (shareblack8) {
            break;
         }
      } while (shareblack8 && ((3 - recommendationY) > 2 || 5 > (recommendationY - 3)));
      for (let i = 0; i < 3; i++) {
         merger4 = `${recommendationY}`;
      }
       let graya = String.fromCharCode(114,101,109,97,112,0);
       let hooks0 = String.fromCharCode(99,111,110,116,114,97,99,116,0);
      let tumbnailk = 6988816 >= recommendationY;
      do {
          let libavfilterZ = false;
          let productl = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,0);
          let iconorientationr: Array<any> = [137, 301];
          let combinedk = String.fromCharCode(99,111,110,102,101,116,116,105,95,119,95,57,57,0);
          let selectedh: Array<any> = [143, 694, 706];
         recommendationY /= Math.max(1 * recommendationY, 2);
         libavfilterZ = libavfilterZ && combinedk.length <= 29;
         productl = `${productl.length}`;
         iconorientationr.push(3 / (Math.max(1, iconorientationr.length)));
         combinedk = `${(String.fromCharCode(67,0) == combinedk ? combinedk.length : selectedh.length)}`;
         selectedh = [1 >> (Math.min(1, selectedh.length))];
         if (tumbnailk) {
            break;
         }
      } while (tumbnailk && ((recommendationY >> (Math.min(Math.abs(1), 5))) < 4 || 5 < (1 >> (Math.min(3, graya.length)))));
      while (!loading5.endsWith(graya)) {
          let sendE = 0.0;
          let libfileB: Array<any> = [572, 101, 817];
          let downarrow4: Array<any> = [49, 637, 450];
         graya = `${libfileB.length % (Math.max(1, 6))}`;
         sendE *= 3 >> (Math.min(2, downarrow4.length));
         libfileB = [parseInt(`${sendE}`) / 3];
         downarrow4.push(downarrow4.length);
         break;
      }
      for (let c = 0; c < 2; c++) {
         recommendationY /= Math.max(3 + graya.length, 4);
      }
          let combinedh = String.fromCharCode(113,95,49,51,95,99,111,110,116,105,110,117,101,0);
         merger4 += `${(hooks0 == String.fromCharCode(101,0) ? graya.length : hooks0.length)}`;
         combinedh += "1";
      let backgroundq = graya.length >= 5598518;
      do {
         graya += `${3 << (Math.min(5, hooks0.length))}`;
         if (backgroundq) {
            break;
         }
      } while (backgroundq && (merger4 == String.fromCharCode(66,0)));
          let controlsN: Map<any, any> = new Map([[String.fromCharCode(106,95,57,54,95,111,98,106,101,99,116,105,118,101,0),true ], [String.fromCharCode(102,95,49,52,95,98,97,110,0),false ], [String.fromCharCode(112,105,99,116,117,114,101,0),true ]]);
         loading5 += `${controlsN.size / 3}`;
      pathn += `${downloadT.size}`;
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
    }

    const handleError = () => {
       let zoome = 3.0;
    let referrer4 = 4.0;
    let flipperi = 5.0;
    let soundM = String.fromCharCode(115,101,116,95,112,95,56,49,0);
    let cornerkickB = false;
    let abidetectD = String.fromCharCode(101,100,116,115,95,49,95,57,51,0);
    let showmoreH: Map<any, any> = new Map([[String.fromCharCode(114,95,52,53,95,99,97,110,111,112,117,115,0),548], [String.fromCharCode(103,111,100,101,112,115,95,121,95,49,54,0),784]]);
    let encryptu = 3.0;
    let profileframec = String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,0);
    let playershirt4: Array<any> = [String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,112,95,54,52,0), String.fromCharCode(108,97,109,112,95,117,95,50,49,0), String.fromCharCode(115,116,114,101,97,109,95,106,95,51,48,0)];
    let carouselA = String.fromCharCode(103,95,54,54,95,109,101,97,115,117,114,101,115,0);
    let positionfieldx = 2.0;
    let arrowrightwithtail_ = 0;
    let typesk = String.fromCharCode(112,95,55,54,95,118,97,114,105,110,116,115,0);
       let iconfeedbackq = 4.0;
       let attributedstringV: Map<any, any> = new Map([[String.fromCharCode(99,101,108,101,98,114,97,116,101,0),String.fromCharCode(98,95,52,51,95,108,105,109,105,116,101,100,0)], [String.fromCharCode(117,95,52,53,95,102,111,111,0),String.fromCharCode(112,114,101,102,101,114,115,95,103,95,49,49,0)]]);
      for (let c = 0; c < 2; c++) {
          let typingn = 5.0;
          let yellowvideoliveo = 2.0;
          let whitevideoliveT = 2.0;
         attributedstringV = new Map([[`${whitevideoliveT}`, 3]]);
         typingn *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${yellowvideoliveo}`)), 4))}`);
         yellowvideoliveo -= parseFloat(`${parseInt(`${typingn}`) >> (Math.min(2, Math.abs(1)))}`);
         whitevideoliveT -= parseFloat(`${parseInt(`${yellowvideoliveo}`) * parseInt(`${typingn}`)}`);
      }
      if (attributedstringV.get(`${iconfeedbackq}`) == null) {
         iconfeedbackq /= Math.max(2, 3 + attributedstringV.size);
      }
      if (!Array.from(attributedstringV.values()).includes(iconfeedbackq)) {
         iconfeedbackq *= attributedstringV.size / (Math.max(1, 2));
      }
      let bgvipsporti = 7036131.0 <= iconfeedbackq;
      do {
          let whitevideolives: Map<any, any> = new Map([[String.fromCharCode(119,95,54,48,95,105,103,104,108,105,103,104,116,115,0),true ], [String.fromCharCode(99,117,115,116,111,109,0),true ]]);
          let dataf = 3;
          let plus6: Map<any, any> = new Map([[String.fromCharCode(121,95,57,48,95,114,101,116,114,105,101,118,105,110,103,0),942], [String.fromCharCode(97,103,103,105,110,102,111,0),442]]);
          let inouttargetredm = String.fromCharCode(101,95,55,50,95,101,120,99,101,112,116,0);
         iconfeedbackq /= Math.max(3 + plus6.size, 3);
         whitevideolives.set(`${dataf}`, dataf / (Math.max(inouttargetredm.length, 6)));
         plus6 = new Map([[`${whitevideolives.size}`, dataf]]);
         inouttargetredm = `${dataf}`;
         if (bgvipsporti) {
            break;
         }
      } while (bgvipsporti && ((1 & attributedstringV.size) >= 1));
          let pingu = String.fromCharCode(121,95,56,56,95,99,111,109,109,111,110,0);
          let entrye = String.fromCharCode(101,99,114,101,99,111,118,101,114,0);
          let textlayoutmanager9 = 4.0;
         attributedstringV = new Map([[entrye, parseInt(`${textlayoutmanager9}`) * entrye.length]]);
         pingu = `${pingu.length}`;
          let countryP: Map<any, any> = new Map([[String.fromCharCode(118,95,54,52,95,114,101,116,114,105,101,118,101,0),true ], [String.fromCharCode(113,95,51,55,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0),false ]]);
          let transferc = 4;
          let setting5 = 0.0;
         attributedstringV = new Map([[`${iconfeedbackq}`, parseInt(`${iconfeedbackq}`) - parseInt(`${setting5}`)]]);
         countryP = new Map([[`${countryP.size}`, 3]]);
         transferc ^= transferc;
         setting5 /= Math.max(parseFloat(`${1}`), 3);
      referrer4 += 1;
   if ((referrer4 * positionfieldx) >= 2.52) {
       let const_iR: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,0),135], [String.fromCharCode(116,114,105,99,107,108,101,0),748]]);
       let smalle = 0.0;
       let basketballtrophyL = 3;
      let hejiE = basketballtrophyL >= 8433888;
      do {
          let icontransferclubF = 2.0;
         basketballtrophyL *= 3 % (Math.max(9, const_iR.size));
         icontransferclubF /= Math.max(4, parseInt(`${icontransferclubF}`) | parseInt(`${icontransferclubF}`));
         if (hejiE) {
            break;
         }
      } while (hejiE && ((basketballtrophyL / (Math.max(5, smalle))) >= 2.35));
         smalle += parseFloat(`${parseInt(`${smalle}`) - 1}`);
         basketballtrophyL -= const_iR.size;
          let iconclosewhitebgt = false;
          let chatbotphotoh = String.fromCharCode(112,97,110,101,0);
          let referrerD = String.fromCharCode(97,108,108,111,119,105,0);
         basketballtrophyL *= referrerD.length;
         iconclosewhitebgt = chatbotphotoh == chatbotphotoh;
      for (let v = 0; v < 2; v++) {
         const_iR = new Map([[`${const_iR.size}`, const_iR.size]]);
      }
         const_iR.set(`${smalle}`, parseInt(`${smalle}`) | basketballtrophyL);
          let rewardZ = 3;
         basketballtrophyL &= 3;
         rewardZ <<= Math.min(1, Math.abs(3 & rewardZ));
         const_iR.set(`${basketballtrophyL}`, basketballtrophyL);
          let defaultprofilepicq = String.fromCharCode(119,95,56,55,95,110,105,108,115,0);
          let matchdetailbgx = String.fromCharCode(114,101,99,118,109,115,103,0);
         const_iR = new Map([[`${basketballtrophyL}`, 2 & basketballtrophyL]]);
         defaultprofilepicq += `${defaultprofilepicq.length}`;
         matchdetailbgx = "2";
      referrer4 -= 1;
   }
   if ((2 * parseInt(`${flipperi}`)) >= 2 && (profileframec.length / 2) >= 1) {
      flipperi -= parseFloat(`${abidetectD.length}`);
   }

      console.debug('error downloading ', vod.vod_name)

       let specn = 3.0;
          let emojiI = String.fromCharCode(98,97,116,116,101,114,121,95,102,95,55,52,0);
          let gestureX = 2;
          let gpayW = String.fromCharCode(115,117,98,112,101,108,95,115,95,57,48,0);
         specn -= parseFloat(`${1}`);
         emojiI = `${gpayW.length}`;
         gestureX /= Math.max(1, (emojiI == String.fromCharCode(122,0) ? gestureX : emojiI.length));
         gpayW += `${gestureX * gpayW.length}`;
         specn -= parseFloat(`${parseInt(`${specn}`)}`);
      let chatg = 8362104.0 <= specn;
      do {
         specn += parseFloat(`${parseInt(`${specn}`)}`);
         if (chatg) {
            break;
         }
      } while ((specn < specn) && chatg);
      referrer4 += parseInt(`${flipperi}`) << (Math.min(2, Math.abs(1)));
   if (positionfieldx <= 4.51) {
      positionfieldx /= Math.max(parseFloat(`${2 & parseInt(`${positionfieldx}`)}`), 5);
   }
      playershirt4 = [parseInt(`${referrer4}`)];
      const state = getState().downloadVideoReducer

       let baidub = false;
       let league2 = 5.0;
       let libturbomodulejsijnic: Map<any, any> = new Map([[String.fromCharCode(115,117,98,95,121,95,53,53,0),798], [String.fromCharCode(99,114,111,115,115,102,97,100,101,95,105,95,53,50,0),451]]);
      for (let d = 0; d < 1; d++) {
         baidub = !baidub;
      }
         baidub = !baidub;
      let codeN = league2 <= 7548081.0;
      do {
         league2 -= parseFloat(`${parseInt(`${league2}`)}`);
         if (codeN) {
            break;
         }
      } while (codeN && (league2 > 1.60));
      while ((1.91 * league2) <= 2.56) {
         league2 /= Math.max(2, parseFloat(`${libturbomodulejsijnic.size ^ 2}`));
         break;
      }
      if (5 <= (2 - libturbomodulejsijnic.size) || 2 <= libturbomodulejsijnic.size) {
         libturbomodulejsijnic.set(`${league2}`, 3);
      }
      while (league2 < 1.56) {
         league2 /= Math.max(parseFloat(`${libturbomodulejsijnic.size + parseInt(`${league2}`)}`), 2);
         break;
      }
         league2 /= Math.max(parseFloat(`${parseInt(`${league2}`) >> (Math.min(Math.abs(3), 4))}`), 2);
      while ((3.33 * league2) < 5.99) {
         league2 /= Math.max((parseFloat(`${libturbomodulejsijnic.size + (baidub ? 1 : 5)}`)), 5);
         break;
      }
          let baidu0: Array<any> = [899, 170, 219];
          let launcheru = 5.0;
         league2 /= Math.max(2, parseFloat(`${parseInt(`${league2}`) & 1}`));
         baidu0 = [parseInt(`${launcheru}`) - baidu0.length];
         launcheru *= parseInt(`${launcheru}`) % (Math.max(4, baidu0.length));
      zoome -= parseInt(`${positionfieldx}`);
   if (1 < (carouselA.length + 2)) {
       let statisticsm = String.fromCharCode(105,110,116,101,103,101,114,95,103,95,50,57,0);
      if (statisticsm.length == statisticsm.length) {
         statisticsm = `${(statisticsm == String.fromCharCode(81,0) ? statisticsm.length : statisticsm.length)}`;
      }
          let transferS = String.fromCharCode(114,111,119,107,101,121,95,97,95,55,49,0);
         statisticsm = `${statisticsm.length}`;
         transferS = `${(transferS == String.fromCharCode(72,0) ? transferS.length : transferS.length)}`;
         statisticsm = `${(String.fromCharCode(89,0) == statisticsm ? statisticsm.length : statisticsm.length)}`;
      carouselA = `${parseInt(`${referrer4}`) & 3}`;
   }
   let iconsharefriends8 = 9526080.0 >= positionfieldx;
   do {
      positionfieldx *= parseFloat(`${3 ^ soundM.length}`);
      if (iconsharefriends8) {
         break;
      }
   } while ((3.1 == (4.58 + referrer4) || (positionfieldx - 4.58) == 5.66) && iconsharefriends8);
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

      playershirt4.push(playershirt4.length);
   let libjsinspectora = referrer4 >= 6881642.0;
   do {
      referrer4 /= Math.max(3, 3);
      if (libjsinspectora) {
         break;
      }
   } while (libjsinspectora && (!playershirt4.includes(referrer4)));
      positionfieldx /= Math.max((parseFloat(`${String.fromCharCode(57,0) == profileframec ? (cornerkickB ? 5 : 3) : profileframec.length}`)), 2);
      if (!targetEpisode) return
      if (targetEpisode?.status === IConfirmationLibffmpegkit.IRedirectLibyoga) {

      carouselA = `${playershirt4.length}`;
      positionfieldx -= parseFloat(`${2}`);
      carouselA = `${parseInt(`${zoome}`) / 1}`;
        return
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: IConfirmationLibffmpegkit.IRightTerms
      }))

      cornerkickB = showmoreH.size < 31;
      showmoreH.set(soundM, parseInt(`${flipperi}`));
       let launchQ = 2.0;
      let episodes6 = launchQ <= 8882553.0;
      do {
         launchQ /= Math.max(2, parseFloat(`${1}`));
         if (episodes6) {
            break;
         }
      } while ((4.18 <= (launchQ - 4.66) || (4.66 - launchQ) <= 1.36) && episodes6);
      if (launchQ < 4.34) {
         launchQ *= parseFloat(`${parseInt(`${launchQ}`) | 3}`);
      }
      let iconcloses = launchQ <= 9040837.0;
      do {
          let audienceC = true;
          let bridgeV = 2.0;
          let yellowredcardJ: Map<any, any> = new Map([[String.fromCharCode(98,108,117,114,114,101,100,95,51,95,51,55,0),false ], [String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,120,95,52,57,0),false ], [String.fromCharCode(101,110,118,101,108,111,112,101,100,95,119,95,50,52,0),false ]]);
          let showmoreX = false;
          let foregroundc = 2;
         launchQ += parseFloat(`${parseInt(`${bridgeV}`) % (Math.max(yellowredcardJ.size, 6))}`);
         audienceC = !audienceC;
         bridgeV /= Math.max(foregroundc - 1, 4);
         yellowredcardJ.set(`${audienceC}`, ((showmoreX ? 2 : 5)));
         showmoreX = !audienceC;
         foregroundc %= Math.max((foregroundc - (audienceC ? 2 : 2)), 5);
         if (iconcloses) {
            break;
         }
      } while ((launchQ <= launchQ) && iconcloses);
      abidetectD = `${1 % (Math.max(5, playershirt4.length))}`;

      const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

       let volumeN: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,115,95,111,95,49,49,0),false ], [String.fromCharCode(111,95,50,52,95,115,121,110,116,104,101,115,105,122,101,100,0),true ], [String.fromCharCode(98,95,55,48,95,108,111,99,97,116,105,111,110,0),true ]]);
      if (volumeN.get(`${volumeN.size}`) == null) {
          let hnewinterstitialJ = 3.0;
         volumeN.set(`${hnewinterstitialJ}`, volumeN.size / (Math.max(2, parseInt(`${hnewinterstitialJ}`))));
      }
       let iconviewerf = String.fromCharCode(115,116,105,99,107,101,114,115,95,112,95,52,49,0);
         volumeN.set(iconviewerf, 3);
      cornerkickB = String.fromCharCode(90,0) == carouselA;
   while ((2 | showmoreH.size) >= 4 || 2 >= (carouselA.length | showmoreH.size)) {
       let membershipd = String.fromCharCode(101,115,115,97,103,101,0);
       let libavdevicet = String.fromCharCode(100,120,116,121,115,0);
       let homeactive1 = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,0);
       let middleB = String.fromCharCode(100,111,119,110,108,105,110,107,95,101,95,51,52,0);
         membershipd += `${libavdevicet.length % (Math.max(1, homeactive1.length))}`;
       let qnewarchdefaultsV = 1.0;
         middleB = `${membershipd.length - parseInt(`${qnewarchdefaultsV}`)}`;
      let libloggerN = 6399751 >= homeactive1.length;
      do {
         homeactive1 += `${parseInt(`${qnewarchdefaultsV}`) | homeactive1.length}`;
         if (libloggerN) {
            break;
         }
      } while ((2 < homeactive1.length && membershipd != String.fromCharCode(50,0)) && libloggerN);
         homeactive1 = `${parseInt(`${qnewarchdefaultsV}`) % 2}`;
      while (5 <= libavdevicet.length) {
         middleB = `${homeactive1.length + 3}`;
         break;
      }
         middleB += `${middleB.length}`;
          let right7: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,95,105,111,115,117,114,102,97,99,101,0),411], [String.fromCharCode(104,117,110,103,95,103,95,57,50,0),526]]);
          let updatesv = String.fromCharCode(117,95,53,57,95,117,110,102,111,99,117,115,101,100,0);
          let greenarrowupC = 5.0;
         middleB += `${homeactive1.length | membershipd.length}`;
         right7 = new Map([[`${right7.size}`, updatesv.length]]);
         updatesv += `${parseInt(`${greenarrowupC}`) << (Math.min(Math.abs(right7.size), 4))}`;
         greenarrowupC /= Math.max(4, (parseFloat(`${String.fromCharCode(110,0) == updatesv ? parseInt(`${greenarrowupC}`) : updatesv.length}`)));
         homeactive1 = `${(String.fromCharCode(81,0) == middleB ? parseInt(`${qnewarchdefaultsV}`) : middleB.length)}`;
      let iconplayi = libavdevicet.length <= 7326944;
      do {
          let areaN = 0;
          let subs5: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,110,0),103], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,95,57,95,57,52,0),266], [String.fromCharCode(119,95,53,49,95,114,101,97,99,104,97,98,108,101,0),79]]);
          let about8: Array<any> = [332, 989, 42];
          let runtimeO: Array<any> = [String.fromCharCode(111,95,49,95,112,114,101,115,101,110,116,0), String.fromCharCode(118,95,52,56,95,100,101,99,114,101,97,115,105,110,103,0)];
          let annern: Map<any, any> = new Map([[String.fromCharCode(105,95,53,54,95,119,105,115,101,0),String.fromCharCode(109,95,52,49,95,105,110,100,101,102,105,110,105,116,101,0)], [String.fromCharCode(119,104,97,116,95,116,95,50,55,0),String.fromCharCode(117,95,50,49,95,102,97,115,116,101,115,116,0)], [String.fromCharCode(114,111,103,114,97,109,0),String.fromCharCode(114,101,116,114,121,0)]]);
         libavdevicet += `${1 << (Math.min(3, middleB.length))}`;
         areaN %= Math.max(3, subs5.size);
         subs5.set(`${about8.length}`, subs5.size);
         about8.push(2 >> (Math.min(3, about8.length)));
         runtimeO = [3];
         annern.set(`${runtimeO.length}`, runtimeO.length & 2);
         if (iconplayi) {
            break;
         }
      } while (iconplayi && (5 == (1 ^ libavdevicet.length) && (libavdevicet.length * parseInt(`${qnewarchdefaultsV}`)) == 1));
      let matchesW = qnewarchdefaultsV >= 5551100.0;
      do {
         qnewarchdefaultsV *= membershipd.length;
         if (matchesW) {
            break;
         }
      } while (matchesW && (2 > (parseInt(`${qnewarchdefaultsV}`) + libavdevicet.length) || 5 > (libavdevicet.length << (Math.min(Math.abs(2), 1)))));
      let zhubor = String.fromCharCode(56,110,102,122,52,0) == homeactive1;
      do {
         homeactive1 = `${1 + membershipd.length}`;
         if (zhubor) {
            break;
         }
      } while (zhubor && (4 < libavdevicet.length));
      showmoreH = new Map([[`${showmoreH.size}`, 2]]);
      break;
   }
   while (arrowrightwithtail_ < showmoreH.size) {
      arrowrightwithtail_ /= Math.max(parseInt(`${flipperi}`) / (Math.max(parseInt(`${referrer4}`), 1)), 3);
      break;
   }
      if (!targetVod) return

      const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
      RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => { })
      RNFetchBlob.fs.unlink(partialPath).catch(err => { })

   while (positionfieldx >= encryptu) {
       let videobufferloadingG = true;
       let rulesR = String.fromCharCode(99,95,54,49,95,101,108,101,109,0);
         rulesR += `${rulesR.length}`;
      for (let m = 0; m < 1; m++) {
          let regengp: Map<any, any> = new Map([[String.fromCharCode(111,112,101,114,97,116,111,114,115,95,118,95,54,51,0),String.fromCharCode(102,114,111,109,102,101,95,118,95,53,52,0)], [String.fromCharCode(121,95,53,54,95,109,97,99,104,105,110,101,0),String.fromCharCode(109,111,122,97,114,116,95,117,95,53,48,0)], [String.fromCharCode(98,117,98,98,108,101,0),String.fromCharCode(97,99,115,107,105,112,0)]]);
         rulesR += "2";
         regengp = new Map([[`${regengp.size}`, regengp.size]]);
      }
      let catalogH = rulesR.length <= 7839348;
      do {
         rulesR += `${1 | rulesR.length}`;
         if (catalogH) {
            break;
         }
      } while ((rulesR.length < 4 || videobufferloadingG) && catalogH);
       let iconpipshrinkP: Map<any, any> = new Map([[String.fromCharCode(118,95,54,56,95,99,111,110,118,101,114,116,101,100,0),650], [String.fromCharCode(120,109,117,108,116,95,111,95,56,51,0),797]]);
       let searchj: Map<any, any> = new Map([[String.fromCharCode(107,95,52,95,102,97,115,116,102,105,114,115,116,112,97,115,115,0),String.fromCharCode(119,105,112,101,95,97,95,57,55,0)], [String.fromCharCode(112,114,101,102,105,120,0),String.fromCharCode(119,95,52,53,0)]]);
      while (rulesR.endsWith(`${videobufferloadingG}`)) {
         videobufferloadingG = rulesR.length > 47;
         break;
      }
         searchj = new Map([[`${videobufferloadingG}`, rulesR.length | 1]]);
      encryptu += parseFloat(`${2 + showmoreH.size}`);
      break;
   }
      encryptu /= Math.max(parseFloat(`${parseInt(`${flipperi}`) | 1}`), 2);
      showmoreH.set(`${positionfieldx}`, parseInt(`${positionfieldx}`) / (Math.max(abidetectD.length, 7)));
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return
      if (targetEpisode?.status === IConfirmationLibffmpegkit.IRedirectLibyoga) {
        return
      }
      
      if (targetEpisode?.progress.percentage < 95) {
        
        handleError(); 
        return
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: IConfirmationLibffmpegkit.IPointStar,
        sizeInBytes: finalSizeInBytes,
        progress: {
          percentage: 100
        }
      }))
      onDownloadEnd()
    }



    const handleSessionCreated = ({ session }: { session: FFmpegSession }) => {
      const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return

      if (targetEpisode.status === IConfirmationLibffmpegkit.IRedirectLibyoga) { 
        session.cancel()
      }
      else {
        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, { ffmpegSession: session.getSessionId() }))
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
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid, vodIsAdult));
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid));
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, { status: IConfirmationLibffmpegkit.ICrown }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function removeVideoFromDownloadThunk(
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return
    const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return

    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => { })
    RNFetchBlob.fs.unlink(partialPath).catch(err => { })
    const allSession = await FFmpegKit.listSessions()
    for (const session of allSession) {
      if (await session.getSessionId() === targetEpisode.ffmpegSession) {
        session.cancel();
      }
    }
    dispatch(removeVideoFromDownload(vod, vodSourceId, vodUrlNid))
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function removeVodFromDownloadThunk(
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return

    for (const episode of targetVod.episodes) {
      const allSession = await FFmpegKit.listSessions()
      for (const session of allSession) {
        if (await session.getSessionId() === episode.ffmpegSession) {
          session.cancel();
        }
      }
      dispatch(removeVideoFromDownloadThunk(vod, episode.vodSourceId, episode.vodUrlNid))
    }
    RNFetchBlob.fs.unlink(targetVod.imagePath).catch()
    dispatch(removeVodFromDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function clearQueueOnAppStart(): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: yysEdit[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        if (episode.status === IConfirmationLibffmpegkit.ICrown) {
          RNFetchBlob.fs.unlink(episode.videoPath).catch()
          dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, { progress: { percentage: 0 }, status: IConfirmationLibffmpegkit.IRightTerms, ffmpegSession: null, sizeInBytes: 0 }))
          
        }
      }
    }

    dispatch(resetQueue())
  }
}

export function restartVideoDownloadThunk(
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return
    const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    await RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => { })
    await RNFetchBlob.fs.unlink(partialPath).catch(err => { })

    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid))
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
      progress: {
        percentage: 0
      },
      status: IConfirmationLibffmpegkit.ICrown,
      sizeInBytes: 0
    }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, targetVod.vodIsAdult))
  }
}

export function pauseVideoDownloadThunk(
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
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

    await pauseDownloadVod(`${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, () => { })
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, { status: IConfirmationLibffmpegkit.IRedirectLibyoga, ffmpegSession: null }))


    const newState = getState().downloadVideoReducer
    if (newState.queue.length === 0) return
    if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
    dispatch(resumeFirstVideoDownload())
  }
}

function resumeVideoDownloadThunk(
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const initialState = getState().downloadVideoReducer
    const initialPercentage = initialState.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      ?.progress.percentage;

    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, { status: IConfirmationLibffmpegkit.ICrown }))

    const throttledUpdate = throttle((percentage) => {
       let showH = String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,95,120,95,54,51,0);
    let link8 = 5.0;
    let pushh = String.fromCharCode(116,111,103,103,108,101,95,49,95,51,55,0);
    let mimoj = String.fromCharCode(99,104,105,114,112,95,106,95,53,54,0);
    let gifgoalK = String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,49,95,52,53,0);
    let imagemanagerM: Map<any, any> = new Map([[String.fromCharCode(113,95,57,55,95,108,101,116,116,101,114,115,0),141], [String.fromCharCode(97,112,115,0),753]]);
    let whiteanimationliveL = 1;
   for (let b = 0; b < 3; b++) {
      pushh += "2";
   }
   while (pushh != showH) {
      showH = `${showH.length % 1}`;
      break;
   }
      pushh += "1";
   for (let h = 0; h < 1; h++) {
      gifgoalK = `${showH.length + pushh.length}`;
   }

      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)

   let disconnectedr = pushh.length >= 6036288;
   do {
       let ewardedB: Map<any, any> = new Map([[String.fromCharCode(101,95,57,53,95,99,104,111,105,99,101,0),877], [String.fromCharCode(111,118,101,114,108,97,112,115,0),760], [String.fromCharCode(105,103,110,111,114,105,110,103,95,103,95,56,57,0),932]]);
       let saveR = true;
       let shootB = true;
      while (!shootB) {
         saveR = !shootB;
         break;
      }
      for (let m = 0; m < 3; m++) {
         ewardedB.set(`${shootB}`, 3);
      }
          let orangedownarrowY = true;
          let launch0 = String.fromCharCode(118,95,51,56,95,110,101,115,116,0);
         saveR = ((ewardedB.size * (!saveR ? ewardedB.size : 61)) >= 31);
         orangedownarrowY = !launch0.startsWith(`${orangedownarrowY}`);
         launch0 += `${(launch0 == String.fromCharCode(80,0) ? (orangedownarrowY ? 4 : 2) : launch0.length)}`;
      let penaltyu = shootB ? !shootB : shootB;
      do {
         shootB = (((saveR ? ewardedB.size : 8) - ewardedB.size) == 96);
         if (penaltyu) {
            break;
         }
      } while (penaltyu && (!shootB));
      let colors1 = shootB ? !shootB : shootB;
      do {
         shootB = ewardedB.size > 52 || !shootB;
         if (colors1) {
            break;
         }
      } while (colors1 && (!shootB));
         ewardedB = new Map([[`${shootB}`, 2]]);
          let libswscaleJ = 3;
          let logini: Array<any> = [String.fromCharCode(118,95,55,56,95,115,104,111,114,116,101,110,0), String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,95,109,95,52,48,0)];
         ewardedB = new Map([[`${saveR}`, 1]]);
         libswscaleJ -= libswscaleJ % (Math.max(logini.length, 2));
         logini = [logini.length * 1];
          let fieldG = String.fromCharCode(112,111,111,112,95,121,95,49,48,0);
         ewardedB = new Map([[`${ewardedB.size}`, ewardedB.size]]);
         fieldG += `${fieldG.length}`;
      while (3 <= ewardedB.size) {
         saveR = ewardedB.size <= 68;
         break;
      }
      pushh += `${ewardedB.size}`;
      if (disconnectedr) {
         break;
      }
   } while (((whiteanimationliveL & pushh.length) < 2 || 2 < (pushh.length & whiteanimationliveL)) && disconnectedr);
   for (let f = 0; f < 1; f++) {
       let watchu: Array<any> = [746, 955];
       let libavformat8 = 5.0;
       let popupK = String.fromCharCode(105,95,54,56,95,111,117,116,98,111,117,110,100,0);
       let gestures0 = true;
       let roomt = String.fromCharCode(120,95,54,50,95,112,97,99,101,100,0);
      if ((roomt.length & 5) == 4 || (libavformat8 * 4.95) == 2.27) {
         roomt += "2";
      }
      let selectionU = gestures0 ? !gestures0 : gestures0;
      do {
         gestures0 = watchu.includes(gestures0);
         if (selectionU) {
            break;
         }
      } while ((!gestures0 || roomt.length == 4) && selectionU);
      if (roomt.endsWith(`${watchu.length}`)) {
          let rncorei = 3.0;
         watchu.push(popupK.length ^ roomt.length);
         rncorei *= parseInt(`${rncorei}`) - parseInt(`${rncorei}`);
      }
         popupK = "1";
      while (popupK.endsWith(`${gestures0}`)) {
         popupK = `${(popupK == String.fromCharCode(71,0) ? popupK.length : roomt.length)}`;
         break;
      }
      for (let j = 0; j < 3; j++) {
          let shareblack5 = String.fromCharCode(102,105,110,97,108,105,122,101,95,99,95,49,56,0);
          let referrerN = 2;
         watchu = [shareblack5.length & popupK.length];
         shareblack5 += `${referrerN}`;
      }
         popupK += `${3 >> (Math.min(3, popupK.length))}`;
          let yellowvideolivez = 4.0;
          let libsentryy = String.fromCharCode(106,95,54,49,95,104,111,114,105,103,0);
         popupK += "3";
         yellowvideolivez += parseFloat(`${3}`);
         libsentryy += `${libsentryy.length}`;
      let nbatrophye = libavformat8 <= 8831645.0;
      do {
         libavformat8 += parseFloat(`${3}`);
         if (nbatrophye) {
            break;
         }
      } while ((1.47 <= (libavformat8 / 5.99) || (popupK.length / 4) <= 4) && nbatrophye);
         popupK = `${((gestures0 ? 2 : 1) >> (Math.min(roomt.length, 4)))}`;
      let detailA = 9017290.0 >= libavformat8;
      do {
          let libfabricjniL: Array<any> = [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,111,114,95,116,95,57,0), String.fromCharCode(112,117,114,112,108,101,95,110,95,54,48,0)];
          let qnewinterstitialk = String.fromCharCode(102,105,101,108,100,95,101,95,54,56,0);
          let mbbannerQ = String.fromCharCode(118,112,115,104,97,114,101,100,0);
          let encryptorW = 0.0;
         libavformat8 *= (parseFloat(`${String.fromCharCode(90,0) == qnewinterstitialk ? watchu.length : qnewinterstitialk.length}`));
         libfabricjniL = [parseInt(`${encryptorW}`)];
         mbbannerQ = `${libfabricjniL.length}`;
         encryptorW += parseFloat(`${libfabricjniL.length}`);
         if (detailA) {
            break;
         }
      } while (detailA && (parseInt(`${libavformat8}`) <= roomt.length));
          let placement0 = String.fromCharCode(109,97,120,98,105,116,114,97,116,101,95,55,95,57,55,0);
          let combine7 = 3.0;
          let combinedw = String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,95,104,95,50,55,0);
         libavformat8 /= Math.max(5, parseFloat(`${watchu.length / (Math.max(2, 4))}`));
         placement0 += `${combinedw.length}`;
         combine7 += (parseFloat(`${String.fromCharCode(54,0) == combinedw ? parseInt(`${combine7}`) : combinedw.length}`));
         popupK = `${(watchu.length - (gestures0 ? 1 : 1))}`;
          let trashw = 5.0;
          let videovar7 = true;
         gestures0 = 67.7 < libavformat8;
         trashw -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${trashw}`)), 1))}`);
         videovar7 = 32.100 == trashw && videovar7;
       let changen = String.fromCharCode(104,95,51,49,95,113,117,97,114,116,122,0);
       let showless6 = String.fromCharCode(111,117,116,103,111,105,110,103,95,101,95,55,57,0);
      imagemanagerM = new Map([[roomt, mimoj.length >> (Math.min(Math.abs(2), 5))]]);
   }
   let iconorientation8 = link8 <= 6060181.0;
   do {
      link8 /= Math.max(3, gifgoalK.length | mimoj.length);
      if (iconorientation8) {
         break;
      }
   } while (iconorientation8 && (!pushh.startsWith(`${link8}`)));
       let iconsharefriendsx = true;
         iconsharefriendsx = (!iconsharefriendsx ? iconsharefriendsx : !iconsharefriendsx);
         iconsharefriendsx = (!iconsharefriendsx ? iconsharefriendsx : iconsharefriendsx);
       let flipper8 = String.fromCharCode(99,104,97,112,95,103,95,57,55,0);
       let saveS = String.fromCharCode(97,108,112,110,95,48,95,50,53,0);
      imagemanagerM.set(pushh, mimoj.length & 2);
      if (currentState?.status === IConfirmationLibffmpegkit.ICrown) {

      whiteanimationliveL >>= Math.min(Math.abs(imagemanagerM.size), 2);
   let imagenomoredatak = 8173457 >= imagemanagerM.size;
   do {
       let yellowvideolivet = 1.0;
      for (let o = 0; o < 3; o++) {
         yellowvideolivet /= Math.max(1, parseInt(`${yellowvideolivet}`) & parseInt(`${yellowvideolivet}`));
      }
      if ((yellowvideolivet * 3.60) <= 2.49 || 2.65 <= (3.60 * yellowvideolivet)) {
         yellowvideolivet *= parseInt(`${yellowvideolivet}`);
      }
         yellowvideolivet -= parseInt(`${yellowvideolivet}`) * 1;
      imagemanagerM = new Map([[`${link8}`, parseInt(`${link8}`) + 2]]);
      if (imagenomoredatak) {
         break;
      }
   } while ((imagemanagerM.get(`${whiteanimationliveL}`) == null) && imagenomoredatak);
      gifgoalK += `${pushh.length}`;
       let expiredg = String.fromCharCode(114,116,112,112,108,97,121,0);
       let activitys: Map<any, any> = new Map([[String.fromCharCode(99,116,114,108,95,108,95,53,57,0),357], [String.fromCharCode(107,95,54,53,95,113,111,115,0),167]]);
       let redscoreballM = 3;
      while ((2 >> (Math.min(5, expiredg.length))) < 2 || 2 < (expiredg.length >> (Math.min(1, Math.abs(activitys.size))))) {
         activitys = new Map([[`${activitys.size}`, 3 ^ activitys.size]]);
         break;
      }
      for (let h = 0; h < 1; h++) {
         activitys = new Map([[`${activitys.size}`, 2]]);
      }
         expiredg = `${expiredg.length}`;
      while (activitys.get(`${redscoreballM}`) == null) {
          let bottomH = String.fromCharCode(102,114,111,110,116,115,105,100,101,95,122,95,54,52,0);
          let androidQ = 0.0;
          let dicelogov: Array<any> = [210, 476, 67];
          let basketballtrophy5 = 3;
         activitys.set(`${androidQ}`, activitys.size % 1);
         bottomH = `${3 / (Math.max(1, basketballtrophy5))}`;
         androidQ -= parseFloat(`${basketballtrophy5}`);
         dicelogov = [dicelogov.length];
         break;
      }
       let langa = 4.0;
         activitys = new Map([[`${redscoreballM}`, parseInt(`${langa}`) ^ 2]]);
         redscoreballM -= expiredg.length;
      for (let c = 0; c < 3; c++) {
          let modalH = String.fromCharCode(99,111,110,116,97,99,116,115,95,121,95,49,57,0);
          let matches7: Array<any> = [564, 353, 206];
          let runtimescheduler6 = 4.0;
          let modal7 = true;
          let configureM: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,115,115,111,114,0),352], [String.fromCharCode(110,95,57,48,95,101,110,103,105,110,101,0),213], [String.fromCharCode(110,111,114,109,97,108,105,122,101,114,0),719]]);
         langa /= Math.max((parseFloat(`${(modal7 ? 1 : 2)}`)), 3);
         modalH = `${parseInt(`${runtimescheduler6}`) / (Math.max(2, configureM.size))}`;
         matches7.push(modalH.length);
         runtimescheduler6 += parseFloat(`${parseInt(`${runtimescheduler6}`)}`);
         modal7 = runtimescheduler6 > 39.37;
         configureM = new Map([[`${matches7.length}`, 1]]);
      }
      while (3 > (expiredg.length | 4) && (langa + 2.90) > 3.41) {
          let turnQ = String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,98,95,52,52,0);
          let gifgoalH = 0.0;
          let friendsL: Array<any> = [951, 831];
         langa /= Math.max(parseFloat(`${friendsL.length}`), 4);
         turnQ += `${parseInt(`${gifgoalH}`)}`;
         gifgoalH /= Math.max(3, 3);
         friendsL.push(parseInt(`${gifgoalH}`) / (Math.max(turnQ.length, 3)));
         break;
      }
      gifgoalK = `${pushh.length}`;
        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(initialPercentage + percentage, 100) 
          }
        }))
      }
    }, 2000)

    const handleUpdate = ({ percentage, bytes }: { percentage?: number, bytes?: number }) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === IConfirmationLibffmpegkit.IRedirectLibyoga) FFmpegKit.cancel(currentState.ffmpegSession ?? undefined)
      if (percentage !== undefined) {
        throttledUpdate(percentage)
      }
    }

    const onDownloadEnd = async () => {
       let iconarrowrightv = String.fromCharCode(114,95,57,57,95,97,108,97,109,111,102,105,114,101,0);
    let chart0 = 2.0;
    let securityh = 3;
    let trophyz = String.fromCharCode(101,112,108,121,0);
    let template_uR: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,99,105,112,97,108,95,52,95,50,56,0),255], [String.fromCharCode(116,95,56,50,95,109,97,116,116,101,0),939], [String.fromCharCode(118,101,114,105,102,105,101,114,0),885]]);
    let thailand2: Array<any> = [83, 90, 933];
    let materialW = 2;
    let iconcalendarE: Map<any, any> = new Map([[String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,119,95,55,57,0),String.fromCharCode(113,95,52,95,100,101,102,97,117,108,116,115,0)], [String.fromCharCode(97,108,112,104,97,110,117,109,95,57,95,56,56,0),String.fromCharCode(117,110,115,111,114,116,101,100,0)]]);
    let dark5: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,119,95,50,56,0),393], [String.fromCharCode(114,111,116,97,116,105,110,103,95,116,95,56,56,0),632]]);
    let activityd: Map<any, any> = new Map([[String.fromCharCode(109,105,110,102,0),false ], [String.fromCharCode(100,101,108,105,109,95,112,95,55,53,0),false ], [String.fromCharCode(102,95,54,55,95,99,102,109,116,0),false ]]);
    let bing1 = String.fromCharCode(101,95,53,57,95,114,115,99,99,0);
    let google7 = String.fromCharCode(122,95,51,57,95,110,116,111,108,111,103,121,0);
    let placeholderc: Map<any, any> = new Map([[String.fromCharCode(112,95,52,56,95,116,108,117,116,0),String.fromCharCode(112,97,105,114,105,110,103,95,55,95,56,56,0)], [String.fromCharCode(119,105,116,104,111,117,116,95,112,95,53,55,0),String.fromCharCode(105,110,116,105,95,104,95,50,51,0)], [String.fromCharCode(97,98,105,95,99,95,57,54,0),String.fromCharCode(102,97,105,108,95,54,95,55,54,0)]]);
    let predictiona = String.fromCharCode(103,95,52,48,95,100,101,99,111,100,101,100,0);
   let countryd = activityd.size >= 7647363;
   do {
      activityd.set(`${chart0}`, activityd.size);
      if (countryd) {
         break;
      }
   } while (countryd && ((3 * iconcalendarE.size) >= 5 || (3 * activityd.size) >= 3));
   if (materialW > 3) {
       let imagemanagerW = String.fromCharCode(122,95,55,54,95,120,121,119,104,0);
       let controlsO = String.fromCharCode(97,102,105,114,95,54,95,53,50,0);
       let cornerkickH: Array<any> = [640, 735, 113];
       let cornershoot6 = 1;
      let material3 = controlsO == String.fromCharCode(120,51,110,116,95,53,50,95,111,100,0);
      do {
          let awayteamfield8 = 3;
          let tail5 = String.fromCharCode(101,114,115,105,111,110,95,117,95,50,57,0);
         controlsO = `${1 % (Math.max(2, cornerkickH.length))}`;
         awayteamfield8 >>= Math.min(1, tail5.length);
         tail5 = `${tail5.length}`;
         if (material3) {
            break;
         }
      } while ((imagemanagerW.length == controlsO.length) && material3);
       let rightB = String.fromCharCode(120,99,116,101,115,116,0);
       let notificationL = String.fromCharCode(111,117,116,108,105,110,107,95,57,95,53,54,0);
         cornerkickH.push(imagemanagerW.length + cornerkickH.length);
      if (3 > imagemanagerW.length) {
         imagemanagerW = `${notificationL.length}`;
      }
         cornershoot6 |= 1 * controlsO.length;
      while ((1 | cornerkickH.length) >= 5) {
         cornershoot6 <<= Math.min(4, Math.abs(3 ^ rightB.length));
         break;
      }
       let carouself = String.fromCharCode(97,118,99,99,95,109,95,51,55,0);
       let morew = String.fromCharCode(101,95,49,48,48,95,117,110,100,101,114,115,99,111,114,101,0);
       let bootsplashJ = String.fromCharCode(116,95,50,48,95,98,101,104,97,118,105,111,114,115,0);
       let smallN = String.fromCharCode(97,95,56,48,95,104,111,114,105,122,111,110,116,97,108,108,121,0);
         carouself = `${morew.length & bootsplashJ.length}`;
         cornershoot6 %= Math.max(1, 1 >> (Math.min(3, Math.abs(cornershoot6))));
      while (5 == (carouself.length - 1) || (cornershoot6 - 1) == 5) {
         cornershoot6 &= notificationL.length / (Math.max(controlsO.length, 7));
         break;
      }
      let scorepopsoundf = imagemanagerW.length <= 7742465;
      do {
          let baiduadst: Map<any, any> = new Map([[String.fromCharCode(112,95,50,52,95,106,100,104,117,102,102,0),String.fromCharCode(112,114,101,97,109,98,108,101,95,104,95,55,57,0)], [String.fromCharCode(99,95,49,48,95,111,118,101,114,114,105,100,101,115,0),String.fromCharCode(97,95,56,48,95,112,111,115,116,114,101,113,117,101,115,116,0)], [String.fromCharCode(102,95,51,57,95,116,117,112,108,101,115,0),String.fromCharCode(102,114,101,101,112,0)]]);
          let championC: Array<any> = [63, 645];
         imagemanagerW = `${morew.length * 2}`;
         baiduadst.set(`${championC.length}`, championC.length);
         if (scorepopsoundf) {
            break;
         }
      } while ((!imagemanagerW.endsWith(notificationL)) && scorepopsoundf);
      iconarrowrightv += `${activityd.size >> (Math.min(Math.abs(1), 1))}`;
   }
       let videocommonQ: Array<any> = [541, 730, 209];
      while (2 < videocommonQ.length) {
         videocommonQ.push(videocommonQ.length);
         break;
      }
         videocommonQ.push(videocommonQ.length - 2);
         videocommonQ = [videocommonQ.length];
      activityd.set(`${materialW}`, template_uR.size | materialW);
   let textinputQ = 6641074 <= template_uR.size;
   do {
      template_uR.set(bing1, bing1.length);
      if (textinputQ) {
         break;
      }
   } while (textinputQ && (1 < (4 * thailand2.length) || (thailand2.length * 4) < 2));
      iconcalendarE.set(`${template_uR.size}`, activityd.size % 1);
   let iconnewsshareo = trophyz == String.fromCharCode(103,115,54,118,108,54,48,95,56,0);
   do {
      trophyz = `${thailand2.length}`;
      if (iconnewsshareo) {
         break;
      }
   } while ((bing1 == String.fromCharCode(90,0)) && iconnewsshareo);
   let hover6 = chart0 <= 5346997.0;
   do {
       let configureC = String.fromCharCode(112,95,57,52,95,100,105,115,112,111,115,101,100,0);
       let networkZ = String.fromCharCode(97,100,116,115,116,111,97,115,99,95,121,95,50,56,0);
         networkZ = `${networkZ.length >> (Math.min(configureC.length, 4))}`;
      let basketballmatchdetailbgZ = 8349776 <= configureC.length;
      do {
         configureC = `${networkZ.length ^ configureC.length}`;
         if (basketballmatchdetailbgZ) {
            break;
         }
      } while (basketballmatchdetailbgZ && (configureC.includes(`${networkZ.length}`)));
      let iconbellactiveQ = configureC == String.fromCharCode(112,115,113,103,99,102,110,114,97,54,0);
      do {
         configureC = `${configureC.length << (Math.min(Math.abs(1), 3))}`;
         if (iconbellactiveQ) {
            break;
         }
      } while ((!networkZ.includes(`${configureC.length}`)) && iconbellactiveQ);
      for (let u = 0; u < 1; u++) {
         configureC += `${configureC.length - networkZ.length}`;
      }
       let unimplementedviewG = 3;
       let profiler = 0;
         networkZ += `${profiler}`;
      chart0 += parseFloat(`${2 | parseInt(`${chart0}`)}`);
      if (hover6) {
         break;
      }
   } while (hover6 && (5 == iconcalendarE.size));

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

   while (!Array.from(template_uR.values()).includes(chart0)) {
       let closeI: Map<any, any> = new Map([[String.fromCharCode(97,100,100,114,101,115,115,101,115,95,110,95,55,51,0),18], [String.fromCharCode(104,95,50,57,95,104,99,104,97,99,104,97,0),667]]);
      for (let p = 0; p < 3; p++) {
         closeI = new Map([[`${closeI.size}`, 2 >> (Math.min(3, Math.abs(closeI.size)))]]);
      }
          let scorepopsoundR = String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,121,95,57,50,0);
          let memberS = 3.0;
         closeI = new Map([[`${closeI.size}`, (scorepopsoundR == String.fromCharCode(90,0) ? closeI.size : scorepopsoundR.length)]]);
         memberS += parseInt(`${memberS}`) + 2;
         closeI.set(`${closeI.size}`, 1 + closeI.size);
      template_uR.set(iconarrowrightv, bing1.length / (Math.max(7, iconarrowrightv.length)));
      break;
   }
       let smallt = String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,0);
      let auto_muR = smallt.length >= 7905161;
      do {
          let animationsB = 5;
         smallt += `${smallt.length >> (Math.min(1, Math.abs(animationsB)))}`;
         if (auto_muR) {
            break;
         }
      } while ((3 == smallt.length || smallt.length == 3) && auto_muR);
      let sharemodaly = smallt.length >= 5169433;
      do {
         smallt += `${(String.fromCharCode(52,0) == smallt ? smallt.length : smallt.length)}`;
         if (sharemodaly) {
            break;
         }
      } while ((!smallt.includes(smallt)) && sharemodaly);
          let videocommonr = 3.0;
         smallt += `${parseInt(`${videocommonr}`)}`;
      iconcalendarE = new Map([[`${dark5.size}`, 1]]);
      activityd.set(`${securityh}`, iconcalendarE.size ^ 1);
      thailand2.push(securityh * 3);
   if (Array.from(dark5.keys()).includes(`${iconcalendarE.size}`)) {
      dark5 = new Map([[iconarrowrightv, iconarrowrightv.length | parseInt(`${chart0}`)]]);
   }
      securityh %= Math.max(2, materialW ^ parseInt(`${chart0}`));
   let mbnativeU = 6897319 >= securityh;
   do {
      securityh %= Math.max(5, iconarrowrightv.length >> (Math.min(3, bing1.length)));
      if (mbnativeU) {
         break;
      }
   } while (mbnativeU && (trophyz.length > securityh));
      const newState = getState().downloadVideoReducer

   if ((materialW * bing1.length) > 3 || (3 * materialW) > 5) {
       let roote: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,95,117,95,50,55,0),String.fromCharCode(114,95,52,52,95,98,117,116,116,101,114,119,111,114,116,104,0)], [String.fromCharCode(118,105,115,97,95,98,95,53,57,0),String.fromCharCode(103,101,111,0)], [String.fromCharCode(114,101,97,100,102,117,108,108,95,49,95,57,49,0),String.fromCharCode(117,95,56,50,95,110,111,110,110,101,103,0)]]);
         roote = new Map([[`${roote.size}`, 3 & roote.size]]);
          let iconarrowright5 = String.fromCharCode(111,95,53,55,0);
          let macauy = false;
          let dependencies1: Array<any> = [582, 879];
         roote.set(`${macauy}`, roote.size);
         iconarrowright5 += "1";
         dependencies1 = [3 >> (Math.min(1, dependencies1.length))];
         roote.set(`${roote.size}`, roote.size | 1);
      materialW %= Math.max(1 >> (Math.min(4, Math.abs(iconcalendarE.size))), 2);
   }
      trophyz += `${(bing1 == String.fromCharCode(99,0) ? dark5.size : bing1.length)}`;
      chart0 -= parseFloat(`${materialW}`);
   for (let f = 0; f < 1; f++) {
      bing1 = `${trophyz.length}`;
   }
      bing1 = `${securityh >> (Math.min(Math.abs(1), 1))}`;
      iconcalendarE.set(`${materialW}`, 2 << (Math.min(4, Math.abs(materialW))));
      activityd.set(bing1, 2 * bing1.length);
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())

    }

    const handleError = () => {
       let tempc = 2.0;
    let goallogoJ = 3.0;
    let incident6 = String.fromCharCode(98,95,52,49,95,121,100,97,121,0);
    let iconstarK = 3.0;
    let dragcloseO = String.fromCharCode(115,112,105,110,110,101,114,0);
    let penaltygoalx = 1;
    let settingQ = String.fromCharCode(111,109,105,116,116,105,110,103,0);
    let libfbR = String.fromCharCode(115,95,57,48,95,115,116,111,114,121,98,111,97,114,100,0);
    let smallsoundA: Array<any> = [103, 191, 338];
    let scorey: Map<any, any> = new Map([[String.fromCharCode(111,95,54,55,95,100,101,115,99,101,110,116,0),false ], [String.fromCharCode(102,111,114,103,111,116,116,101,110,0),true ], [String.fromCharCode(108,115,112,105,0),true ]]);
    let mbbanner4: Array<any> = [894, 863];
   if (goallogoJ <= 2.78) {
      goallogoJ *= 3 >> (Math.min(1, Math.abs(parseInt(`${tempc}`))));
   }
      settingQ = `${penaltygoalx}`;
       let latnh: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,114,116,115,95,99,95,55,56,0),true ], [String.fromCharCode(107,101,121,115,116,111,114,101,95,54,95,56,57,0),false ]]);
       let agreementw = String.fromCharCode(121,95,51,57,95,109,99,111,109,112,0);
       let minimizeJ = true;
         agreementw = `${((minimizeJ ? 3 : 2) | 3)}`;
      let feedbackg = agreementw == String.fromCharCode(49,119,117,0);
      do {
         agreementw += `${agreementw.length}`;
         if (feedbackg) {
            break;
         }
      } while (feedbackg && (agreementw.length == 5));
       let libjsijniprofilerK = 0.0;
       let colorsM = 1.0;
      let modulesl = String.fromCharCode(57,55,109,115,57,0) == agreementw;
      do {
         agreementw += "3";
         if (modulesl) {
            break;
         }
      } while (modulesl && (!agreementw.includes(`${latnh.size}`)));
         libjsijniprofilerK += parseInt(`${libjsijniprofilerK}`) >> (Math.min(2, Math.abs(parseInt(`${colorsM}`))));
      if (1.58 > (libjsijniprofilerK - 3.70)) {
          let crown1: Array<any> = [88, 588];
          let turn5 = String.fromCharCode(118,116,101,110,99,95,103,95,51,56,0);
          let klevinI = 3;
         latnh = new Map([[`${latnh.size}`, 2]]);
         crown1.push(klevinI << (Math.min(Math.abs(3), 1)));
         turn5 = `${klevinI ^ 2}`;
      }
          let iconcalendarL = String.fromCharCode(104,95,50,49,95,112,114,111,116,111,98,117,102,0);
          let libmapbufferjniI: Array<any> = [68, 829, 620];
          let v_lockv = false;
         libjsijniprofilerK += 3;
         iconcalendarL = `${iconcalendarL.length}`;
         libmapbufferjniI.push((String.fromCharCode(116,0) == iconcalendarL ? iconcalendarL.length : libmapbufferjniI.length));
         v_lockv = iconcalendarL.length <= 94 || 94 <= libmapbufferjniI.length;
      if (1 < (4 ^ latnh.size) || !minimizeJ) {
         minimizeJ = !minimizeJ;
      }
          let basketballhometeamu = 0.0;
          let predictionwinR: Array<any> = [104, 856];
         libjsijniprofilerK += latnh.size / 3;
         basketballhometeamu /= Math.max(parseInt(`${basketballhometeamu}`), 3);
         predictionwinR = [predictionwinR.length / 2];
      goallogoJ *= parseInt(`${tempc}`) ^ 3;

      

   if ((parseInt(`${goallogoJ}`) + 5) <= 5 && 2.96 <= (incident6.length + goallogoJ)) {
      incident6 = `${penaltygoalx}`;
   }
   let subsh = tempc <= 7723292.0;
   do {
      tempc -= parseInt(`${tempc}`) % 2;
      if (subsh) {
         break;
      }
   } while (((4.75 + tempc) > 2.80) && subsh);
   let homeloadingb = 6141351 <= dragcloseO.length;
   do {
       let libloggerK = String.fromCharCode(110,97,109,101,116,111,105,110,100,101,120,95,117,95,54,56,0);
         libloggerK += `${libloggerK.length}`;
      let carouselS = libloggerK == String.fromCharCode(112,117,109,56,0);
      do {
         libloggerK = `${libloggerK.length}`;
         if (carouselS) {
            break;
         }
      } while ((libloggerK.length > libloggerK.length) && carouselS);
      while (!libloggerK.endsWith(`${libloggerK.length}`)) {
          let privacyZ = String.fromCharCode(116,114,116,97,98,108,101,95,117,95,53,56,0);
          let play3 = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,117,95,55,55,0);
          let modeS: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,98,95,54,56,0),650], [String.fromCharCode(114,95,53,55,95,108,115,98,102,117,108,108,0),887]]);
         libloggerK = `${libloggerK.length % (Math.max(5, play3.length))}`;
         privacyZ = `${(String.fromCharCode(86,0) == privacyZ ? privacyZ.length : modeS.size)}`;
         play3 = `${2 | modeS.size}`;
         break;
      }
      dragcloseO += `${1 ^ dragcloseO.length}`;
      if (homeloadingb) {
         break;
      }
   } while ((settingQ == String.fromCharCode(86,0)) && homeloadingb);
      const state = getState().downloadVideoReducer

   let ocopy_sq = goallogoJ <= 5717087.0;
   do {
       let penaltygoal9 = String.fromCharCode(108,95,49,95,103,117,97,114,97,110,116,101,101,115,0);
      while (penaltygoal9.startsWith(`${penaltygoal9.length}`)) {
         penaltygoal9 += `${2 & penaltygoal9.length}`;
         break;
      }
          let alertU: Map<any, any> = new Map([[String.fromCharCode(121,95,57,48,95,103,105,102,0),363], [String.fromCharCode(98,101,110,99,104,95,118,95,57,0),467], [String.fromCharCode(99,97,114,100,97,110,111,95,52,95,54,0),611]]);
         penaltygoal9 = `${alertU.size / (Math.max(penaltygoal9.length, 8))}`;
      let theme_ = penaltygoal9 == String.fromCharCode(112,50,111,115,105,0);
      do {
         penaltygoal9 += `${penaltygoal9.length}`;
         if (theme_) {
            break;
         }
      } while (theme_ && (3 > penaltygoal9.length));
      goallogoJ *= 1;
      if (ocopy_sq) {
         break;
      }
   } while (ocopy_sq && (settingQ.includes(`${goallogoJ}`)));
   let debugU = dragcloseO == String.fromCharCode(113,103,98,112,98,115,101,0);
   do {
       let huawei1 = 5.0;
       let videou = String.fromCharCode(97,99,111,108,111,114,115,95,109,95,53,55,0);
       let libreactx = 3.0;
       let placementk = true;
         videou = `${parseInt(`${libreactx}`) << (Math.min(Math.abs(parseInt(`${huawei1}`)), 2))}`;
      if (libreactx < 3.52) {
         videou = `${(String.fromCharCode(100,0) == videou ? videou.length : parseInt(`${libreactx}`))}`;
      }
          let showS = 4;
          let fileJ = 5;
          let iconorientationf = 0;
         placementk = 53 <= fileJ || 53 <= iconorientationf;
         showS &= 3;
         fileJ /= Math.max(2, showS / (Math.max(showS, 6)));
         huawei1 /= Math.max(3, videou.length + 2);
      let arrowrightwithtailK = libreactx >= 7975096.0;
      do {
         libreactx *= (parseFloat(`${(placementk ? 5 : 1) / 2}`));
         if (arrowrightwithtailK) {
            break;
         }
      } while ((placementk) && arrowrightwithtailK);
         placementk = libreactx > 92.44;
      while ((1.70 - libreactx) > 5.18) {
          let iconuser2 = false;
          let clubo = String.fromCharCode(104,95,53,57,95,115,111,114,116,101,100,0);
          let chatY = String.fromCharCode(122,95,53,49,95,110,101,118,101,114,0);
         placementk = !iconuser2;
         clubo += `${(chatY == String.fromCharCode(110,0) ? chatY.length : clubo.length)}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
         libreactx += parseFloat(`${parseInt(`${libreactx}`)}`);
      }
      let whistler = libreactx <= 7677674.0;
      do {
          let volumea = String.fromCharCode(115,117,98,116,108,101,0);
          let gifgoalbgf: Map<any, any> = new Map([[String.fromCharCode(109,95,53,53,95,101,115,99,97,112,101,0),false ], [String.fromCharCode(114,95,53,54,95,112,97,105,114,119,105,115,101,0),true ], [String.fromCharCode(120,95,49,95,116,97,98,108,101,105,110,105,116,0),false ]]);
          let reducer6 = 3;
         libreactx -= parseFloat(`${volumea.length - parseInt(`${libreactx}`)}`);
         volumea = `${gifgoalbgf.size | 1}`;
         gifgoalbgf.set(`${reducer6}`, reducer6 % 1);
         if (whistler) {
            break;
         }
      } while (whistler && (placementk || 4.58 < (5.82 * libreactx)));
          let libtobJ = true;
         huawei1 -= 2;
         libtobJ = libtobJ || !libtobJ;
      while ((libreactx / 3.43) >= 1.27) {
         placementk = (75 <= ((placementk ? 75 : videou.length) & videou.length));
         break;
      }
      while (placementk) {
          let iconnewchat1 = String.fromCharCode(114,101,108,117,95,102,95,51,55,0);
          let signinupc = String.fromCharCode(104,97,115,104,102,114,101,101,100,101,115,116,114,111,121,0);
          let floatingf = 3.0;
          let detailv = String.fromCharCode(98,101,116,119,101,101,110,0);
         placementk = 25 >= detailv.length && 16.55 >= huawei1;
         iconnewchat1 = `${signinupc.length + 1}`;
         signinupc += `${parseInt(`${floatingf}`) & 1}`;
         floatingf += (String.fromCharCode(83,0) == signinupc ? signinupc.length : parseInt(`${floatingf}`));
         detailv += `${signinupc.length << (Math.min(Math.abs(2), 1))}`;
         break;
      }
      dragcloseO += `${penaltygoalx}`;
      if (debugU) {
         break;
      }
   } while (debugU && (3 > (1 ^ dragcloseO.length) && (dragcloseO.length ^ penaltygoalx) > 1));
   let k_playerE = settingQ.length >= 9730201;
   do {
       let forwardI = String.fromCharCode(118,95,54,56,95,99,111,115,105,0);
         forwardI += `${forwardI.length >> (Math.min(Math.abs(2), 3))}`;
         forwardI += `${(forwardI == String.fromCharCode(77,0) ? forwardI.length : forwardI.length)}`;
      let libturbomodulejsijnip = forwardI.length >= 5619794;
      do {
         forwardI = `${forwardI.length & forwardI.length}`;
         if (libturbomodulejsijnip) {
            break;
         }
      } while ((forwardI.length > 1) && libturbomodulejsijnip);
      settingQ += `${libfbR.length}`;
      if (k_playerE) {
         break;
      }
   } while (k_playerE && (settingQ.startsWith(`${dragcloseO.length}`)));
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

   if (5 > (smallsoundA.length - penaltygoalx) && 5 > (smallsoundA.length - penaltygoalx)) {
      smallsoundA.push(parseInt(`${goallogoJ}`));
   }
       let homee = 3;
       let javaw = 0;
         javaw += javaw << (Math.min(Math.abs(2), 1));
      let verticalq = 5527779 >= homee;
      do {
         homee &= homee ^ 1;
         if (verticalq) {
            break;
         }
      } while (verticalq && (2 < (2 << (Math.min(1, Math.abs(homee))))));
      let goalf = homee >= 9297467;
      do {
         homee *= javaw;
         if (goalf) {
            break;
         }
      } while (goalf && (javaw == homee));
         javaw += homee % (Math.max(4, javaw));
      if ((4 % (Math.max(7, javaw))) >= 4 || 4 >= (javaw % (Math.max(7, homee)))) {
         javaw |= 3;
      }
      while (1 >= (homee % 2) || 2 >= (javaw % (Math.max(7, homee)))) {
         javaw += homee & 3;
         break;
      }
      dragcloseO = `${parseInt(`${iconstarK}`) % 2}`;
      penaltygoalx -= parseInt(`${goallogoJ}`) & penaltygoalx;
      if (!targetEpisode) return
      if (targetEpisode?.status === IConfirmationLibffmpegkit.IRedirectLibyoga) {

   for (let j = 0; j < 3; j++) {
       let bufferu: Map<any, any> = new Map([[String.fromCharCode(97,110,111,110,121,109,111,117,115,95,51,95,55,53,0),401], [String.fromCharCode(100,95,49,55,0),779]]);
       let goallogoz: Map<any, any> = new Map([[String.fromCharCode(100,101,110,105,101,100,95,106,95,53,48,0),668], [String.fromCharCode(122,95,55,51,95,101,118,101,114,121,111,110,101,0),914]]);
       let iconwatchnowJ = String.fromCharCode(105,110,102,111,108,100,101,114,0);
       let hooksk = String.fromCharCode(109,105,116,101,114,95,119,95,56,52,0);
       let libhermesr = 3.0;
         hooksk += `${goallogoz.size}`;
      let u_manager1 = bufferu.size <= 9245789;
      do {
         bufferu = new Map([[`${goallogoz.size}`, 1]]);
         if (u_manager1) {
            break;
         }
      } while (u_manager1 && ((bufferu.size * 2) <= 5));
         goallogoz.set(hooksk, 2 ^ goallogoz.size);
      let leftT = 7663210.0 <= libhermesr;
      do {
         libhermesr += iconwatchnowJ.length;
         if (leftT) {
            break;
         }
      } while (leftT && (libhermesr > 5.55));
      let modulej = hooksk == String.fromCharCode(108,105,52,117,50,99,52,109,109,50,0);
      do {
          let shrinkv = 1.0;
          let videoE = 1.0;
          let minimizev = true;
          let stringsK = false;
          let libavdeviceU = String.fromCharCode(97,110,105,109,97,116,111,114,0);
         hooksk += `${bufferu.size}`;
         shrinkv += ((minimizev ? 4 : 4));
         videoE -= parseFloat(`${libavdeviceU.length}`);
         minimizev = shrinkv > 38.77;
         libavdeviceU += `${3 << (Math.min(Math.abs(parseInt(`${videoE}`)), 5))}`;
         if (modulej) {
            break;
         }
      } while (modulej && (2 <= (hooksk.length ^ 2) || 5.88 <= (hooksk.length + libhermesr)));
      let traminif = libhermesr >= 8507600.0;
      do {
         libhermesr -= 3 | bufferu.size;
         if (traminif) {
            break;
         }
      } while (traminif && (5 > (bufferu.size - parseInt(`${libhermesr}`)) && 4.18 > (3.19 - libhermesr)));
          let nativeexl = 1;
          let submitw = 5.0;
          let logoutb = 5.0;
         goallogoz.set(`${logoutb}`, parseInt(`${logoutb}`) ^ bufferu.size);
         nativeexl |= nativeexl;
         submitw += parseFloat(`${1}`);
          let gradlex = String.fromCharCode(111,110,116,97,99,116,115,95,99,95,56,55,0);
          let custom5 = 1.0;
          let armvaA: Map<any, any> = new Map([[String.fromCharCode(119,114,97,112,95,105,95,56,51,0),false ], [String.fromCharCode(117,112,112,101,114,99,97,115,101,95,114,95,48,0),true ]]);
         hooksk = `${3 / (Math.max(4, parseInt(`${libhermesr}`)))}`;
         gradlex = `${gradlex.length}`;
         custom5 *= parseFloat(`${1}`);
         armvaA.set(`${custom5}`, armvaA.size);
          let bggradientX = String.fromCharCode(107,95,51,49,95,101,120,116,114,99,0);
          let backiconh: Array<any> = [904, 450];
         hooksk += `${1 ^ iconwatchnowJ.length}`;
         bggradientX += `${2 << (Math.min(4, backiconh.length))}`;
         backiconh.push(3 << (Math.min(5, backiconh.length)));
          let privacyJ = 1.0;
          let othermatchdetailbgk = String.fromCharCode(103,101,116,109,97,120,114,115,115,0);
          let resendz = 5;
         bufferu = new Map([[`${libhermesr}`, 1 * parseInt(`${libhermesr}`)]]);
         privacyJ -= parseFloat(`${3 * resendz}`);
         othermatchdetailbgk = `${othermatchdetailbgk.length ^ 2}`;
         resendz |= resendz;
      let sinaz = String.fromCharCode(53,54,119,114,113,49,0) == hooksk;
      do {
         hooksk = `${3 * goallogoz.size}`;
         if (sinaz) {
            break;
         }
      } while (((bufferu.size << (Math.min(Math.abs(4), 1))) < 3 || 1 < (4 << (Math.min(5, Math.abs(bufferu.size))))) && sinaz);
         goallogoz.set(`${iconwatchnowJ}`, iconwatchnowJ.length);
      let yellowcirclebgC = libhermesr >= 6354364.0;
      do {
          let episodes = 5.0;
          let typesZ = true;
          let dice5 = 4.0;
          let playlistt = 3;
          let iconadslinkq: Array<any> = [String.fromCharCode(116,114,117,115,116,95,112,95,55,48,0), String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,119,95,51,50,0), String.fromCharCode(102,95,49,48,48,95,97,99,99,117,114,97,116,101,0)];
         libhermesr -= 1;
         episodes *= parseInt(`${dice5}`);
         typesZ = (playlistt + dice5) < 34;
         playlistt &= (parseInt(`${episodes}`) << (Math.min(5, Math.abs((typesZ ? 2 : 4)))));
         iconadslinkq = [3];
         if (yellowcirclebgC) {
            break;
         }
      } while (((1 - hooksk.length) < 5) && yellowcirclebgC);
         hooksk += `${goallogoz.size}`;
          let nalyticsV = 2;
         bufferu = new Map([[`${goallogoz.size}`, nalyticsV]]);
      goallogoJ += parseInt(`${libhermesr}`) ^ settingQ.length;
   }
   if (3 > libfbR.length) {
      libfbR = `${smallsoundA.length % 2}`;
   }
      settingQ += `${(String.fromCharCode(66,0) == libfbR ? libfbR.length : incident6.length)}`;
        return
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: IConfirmationLibffmpegkit.IRightTerms
      }))

       let runtimeschedulerp = String.fromCharCode(99,95,53,56,95,116,101,114,109,105,110,97,116,101,0);
      while (runtimeschedulerp == runtimeschedulerp) {
         runtimeschedulerp = "3";
         break;
      }
         runtimeschedulerp += `${runtimeschedulerp.length - runtimeschedulerp.length}`;
      for (let o = 0; o < 2; o++) {
          let penaltyshootnogoalu = String.fromCharCode(105,95,55,51,95,117,110,109,117,116,101,0);
          let dependenciesa = String.fromCharCode(120,95,50,56,95,97,114,111,117,110,100,0);
         runtimeschedulerp = `${(dependenciesa == String.fromCharCode(72,0) ? penaltyshootnogoalu.length : dependenciesa.length)}`;
      }
      dragcloseO = `${settingQ.length + dragcloseO.length}`;
   if (4 > (smallsoundA.length & 3) && 1 > (3 & penaltygoalx)) {
      penaltygoalx -= incident6.length;
   }
   while (incident6.endsWith(`${tempc}`)) {
      tempc /= Math.max(1 - penaltygoalx, 1);
      break;
   }


      const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

       let expiredi: Array<any> = [697, 885];
      if (expiredi.length == 5) {
          let gesturesB = String.fromCharCode(114,95,56,57,95,114,101,102,99,111,117,110,116,101,100,0);
         expiredi.push(gesturesB.length ^ expiredi.length);
      }
         expiredi.push(1 + expiredi.length);
         expiredi.push(expiredi.length);
      iconstarK -= 1 / (Math.max(5, parseInt(`${tempc}`)));
   let humidityb = 7792407 >= libfbR.length;
   do {
       let jcopy_osf = 2;
      for (let n = 0; n < 3; n++) {
         jcopy_osf <<= Math.min(1, Math.abs(3));
      }
      let show7 = 6301048 <= jcopy_osf;
      do {
         jcopy_osf ^= 1 + jcopy_osf;
         if (show7) {
            break;
         }
      } while (show7 && (3 >= (jcopy_osf & jcopy_osf)));
         jcopy_osf %= Math.max(2 + jcopy_osf, 1);
      libfbR += `${2 & parseInt(`${tempc}`)}`;
      if (humidityb) {
         break;
      }
   } while ((libfbR.length == 2) && humidityb);
   while (1.15 <= (tempc - 3.100) || 3.100 <= (tempc - iconstarK)) {
      tempc *= penaltygoalx;
      break;
   }
      if (!targetVod) return
      const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
      RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => { })
      RNFetchBlob.fs.unlink(partialPath).catch(err => { })

   if (4.56 == (iconstarK * libfbR.length)) {
       let greytick9: Array<any> = [320, 870, 867];
       let downloadI: Array<any> = [582, 536];
      if (2 >= (downloadI.length - greytick9.length) || 3 >= (greytick9.length - 2)) {
         downloadI = [downloadI.length];
      }
         downloadI = [3];
      if (greytick9.length == 2) {
          let agreementI = 3.0;
          let spinnerz = String.fromCharCode(116,97,116,105,99,95,99,95,49,48,48,0);
          let feedback6 = 5.0;
         downloadI.push((spinnerz == String.fromCharCode(112,0) ? spinnerz.length : parseInt(`${agreementI}`)));
         agreementI *= 2;
      }
         downloadI = [1];
          let recommendationx = 4.0;
          let matchactive3 = 0.0;
          let sheet9 = String.fromCharCode(118,105,115,117,97,108,0);
         downloadI.push((sheet9 == String.fromCharCode(108,0) ? sheet9.length : parseInt(`${recommendationx}`)));
         recommendationx += parseInt(`${matchactive3}`) * parseInt(`${matchactive3}`);
      let complete7 = 8938511 <= greytick9.length;
      do {
          let reactD = false;
          let libjsiU = String.fromCharCode(112,97,97,100,95,110,95,51,56,0);
          let countryL = 4.0;
          let profileR = 5.0;
         greytick9 = [((reactD ? 1 : 2) ^ 3)];
         reactD = 1.88 <= (profileR + countryL);
         libjsiU = `${parseInt(`${profileR}`) | 2}`;
         countryL /= Math.max(2, parseFloat(`${parseInt(`${profileR}`)}`));
         if (complete7) {
            break;
         }
      } while (((downloadI.length << (Math.min(2, greytick9.length))) < 5 && (greytick9.length << (Math.min(downloadI.length, 4))) < 5) && complete7);
      iconstarK *= greytick9.length / 2;
   }
      scorey = new Map([[`${smallsoundA.length}`, smallsoundA.length % 1]]);
      goallogoJ += parseInt(`${goallogoJ}`);
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return
      if (targetEpisode?.status === IConfirmationLibffmpegkit.IRedirectLibyoga) {
        return
      }
      concatPartialVideos(
        `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`,
        () => {
          
          
          
          
          
          dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
            status: IConfirmationLibffmpegkit.IPointStar,
            sizeInBytes: finalSizeInBytes,
            progress: {
              percentage: 100
            }
          }))
          onDownloadEnd()
        },
        handleError
      )
    }

    const handleSessionCreated = ({ session }: { session: FFmpegSession }) => {
      const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return

      if (targetEpisode.status === IConfirmationLibffmpegkit.IRedirectLibyoga) { 
        session.cancel()
      }
      else {
        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, { ffmpegSession: session.getSessionId() }))
      }
    }

    const isAdult = initialState.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

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
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid));
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, { status: IConfirmationLibffmpegkit.ICrown }))
    dispatch(resumeVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function updateAllVodDetailsThunk(): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const downloads = getState().downloadVideoReducer.downloads
    downloads.forEach(async (download) => {
      const newVod = await yysInactive.getDetail(download.vod.vod_id.toString(), { xMode: download.vodIsAdult })
      dispatch(updateVodDetails(newVod))
    })


  };
}

export function manualKillVideoDownloadThunk(
  vod: yysPenaltyshoot,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, yysIconclosewhiteBaiduads, any, yysRegister> {
  return async function (dispatch, getState) {
    const currentState = getState().downloadVideoReducer
    const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return
    const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return
    if (targetEpisode.ffmpegSession === null) return

    FFmpegKit.cancel(targetEpisode.ffmpegSession)
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, { status: IConfirmationLibffmpegkit.IRightTerms }))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
    dispatch(resumeFirstVideoDownload())
  }
}