import { wwMoon } from "@type/ww_bang"
import { DVGGrayTeamdetailsbg, wwResendTextlayoutmanager, wwAndroid, wwTextinputDirect } from "@type/ww_skip"
import RNFetchBlob from "rn-fetch-blob"

const initialDownloadVideoState : wwResendTextlayoutmanager = {
  downloads: [], 
  currentDownloading: [], 
  queue: []
}

export function downloadVideoReducer(state = initialDownloadVideoState, action: wwMoon): wwResendTextlayoutmanager{
  switch (action.type){
       let nativej = 3.0;
    let sellG = 3.0;
    let pathe = 3;
    let canvasV = false;
    let reviewt = 0.0;
    let anythinkm = String.fromCharCode(114,101,115,101,114,118,101,100,95,116,95,54,0);
    let huaweid = String.fromCharCode(121,95,54,56,95,97,110,100,0);
    let animationg = 0.0;
    let edit0 = String.fromCharCode(116,101,120,116,108,101,95,117,95,51,49,0);
    let mappingS: Array<any> = [428, 180, 226];
    let securityU: Array<any> = [881, 138];
    let applicationQ = String.fromCharCode(99,117,114,95,99,95,53,57,0);
    let resultI = false;
    let tempnodatagifi = 0.0;
    let analytics1: Array<any> = [195, 857, 610];
   let borderlessT = sellG <= 9781228.0;
   do {
      sellG -= parseFloat(`${1}`);
      if (borderlessT) {
         break;
      }
   } while ((4.89 < (sellG - nativej)) && borderlessT);

    case 'ADD_VIDEO_TO_DOWNLOAD': {

      const newVodDownload: wwTextinputDirect = {
        vod: action.payload.vod, 
        imagePath: 'file:///' + RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${action.payload.vod.vod_id}.png`, 
        episodes: [], 
        vodIsAdult: action.payload.vodIsAdult ?? false
      }
      let targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id) ?? newVodDownload

       let sortR: Array<any> = [124, 456, 656];
          let gradleV = 5;
          let orange5 = String.fromCharCode(112,95,50,55,95,115,109,97,108,108,0);
         sortR = [gradleV << (Math.min(sortR.length, 4))];
         gradleV >>= Math.min(orange5.length, 1);
         orange5 = `${orange5.length ^ 1}`;
         sortR = [3];
       let chinan = 2.0;
       let main_jB = 1.0;
      nativej *= parseFloat(`${parseInt(`${reviewt}`)}`);
      const videoExist = targetVod?.episodes.some(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

       let logoutX = 5;
       let iconnointernetm = true;
       let routerN: Map<any, any> = new Map([[String.fromCharCode(116,95,50,52,95,108,111,115,116,0),600], [String.fromCharCode(97,115,115,101,114,116,105,111,110,95,111,95,53,0),100], [String.fromCharCode(99,95,51,54,95,107,115,101,116,0),886]]);
      let profileactivel = 6159402 >= routerN.size;
      do {
          let chat4 = 5.0;
         routerN = new Map([[`${iconnointernetm}`, logoutX]]);
         chat4 /= Math.max(1, parseFloat(`${parseInt(`${chat4}`) | parseInt(`${chat4}`)}`));
         if (profileactivel) {
            break;
         }
      } while (profileactivel && (5 > (4 << (Math.min(3, Math.abs(routerN.size)))) && 4 > (logoutX << (Math.min(Math.abs(routerN.size), 1)))));
         routerN = new Map([[`${logoutX}`, 2 % (Math.max(logoutX, 7))]]);
         logoutX %= Math.max((logoutX << (Math.min(1, Math.abs((iconnointernetm ? 4 : 5))))), 4);
         iconnointernetm = routerN.size <= 28 && !iconnointernetm;
         logoutX *= logoutX;
      while ((routerN.size | 2) < 1 || 2 < routerN.size) {
         iconnointernetm = routerN.size >= 28;
         break;
      }
       let sigmob5 = String.fromCharCode(115,95,49,55,95,101,110,104,97,110,99,101,114,0);
       let middleZ = String.fromCharCode(106,95,49,56,95,97,114,99,104,105,118,101,0);
          let text2 = 5.0;
         sigmob5 = `${logoutX}`;
         text2 *= parseInt(`${text2}`);
         sigmob5 = `${routerN.size}`;
      huaweid = `${huaweid.length | 3}`;

      if (videoExist) return state

      const newEpisode: wwAndroid = {
        progress: {
          percentage: 0, 
          bytes: 0, 
        }, 
        status: DVGGrayTeamdetailsbg.DVGNalyticsTextinput, 
        sizeInBytes: 0, 
        videoPath: `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${action.payload.vod.vod_id}-${action.payload.vodSourceId}-${action.payload.vodUrlNid}.mp4`, 
        vodSourceId: action.payload.vodSourceId, 
        vodUrlNid: action.payload.vodUrlNid, 
        ffmpegSession: action.payload.ffmpegSession
      }

      const concatEpisodeDownload = targetVod.episodes.concat(newEpisode)
      targetVod = {...targetVod, episodes: concatEpisodeDownload}

      const concatDownloadsList = state.downloads
        .filter(download => download.vod.vod_id !== targetVod.vod.vod_id) 
        .concat(targetVod)

      return {
        ...state, 
        downloads: concatDownloadsList
      } 
    }

    case "UPDATE_VIDEO_DOWNLOAD": {
       

   while (!securityU.includes(reviewt)) {
      reviewt /= Math.max(1 - parseInt(`${reviewt}`), 1);
      break;
   }

      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

   let diceq = edit0 == String.fromCharCode(51,100,117,104,102,48,122,0);
   do {
      edit0 = `${(String.fromCharCode(83,0) == applicationQ ? applicationQ.length : anythinkm.length)}`;
      if (diceq) {
         break;
      }
   } while ((!edit0.endsWith(`${securityU.length}`)) && diceq);
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

   for (let q = 0; q < 2; q++) {
      pathe -= 1;
   }
      if (!targetEpisode) return state

      const updatedEpisode: wwAndroid = {
        status: action.payload.status ?? targetEpisode.status, 
        progress: {
          percentage: action.payload.progress?.percentage ?? targetEpisode.progress.percentage,
          bytes: action.payload.progress?.bytes ?? targetEpisode.progress.bytes,
        }, 
        sizeInBytes: action.payload.sizeInBytes ?? targetEpisode.sizeInBytes, 
        videoPath: action.payload.videoPath ?? targetEpisode.videoPath, 
        vodSourceId: targetEpisode.vodSourceId, 
        vodUrlNid: targetEpisode.vodUrlNid, 
        ffmpegSession : action.payload.ffmpegSession === undefined ? targetEpisode.ffmpegSession : action.payload.ffmpegSession
      } 

      const updatedVod: wwTextinputDirect = {
        ...targetVod,
        vod: targetVod.vod,
        imagePath: targetVod.imagePath,
        episodes: targetVod.episodes
          .filter(episode => !(episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)) 
          .concat(updatedEpisode)
      }

      const updatedList = state.downloads
      .filter(download => download.vod.vod_id !== targetVod.vod.vod_id) 
      .concat(updatedVod)

      return {
        ...state, 
        downloads: updatedList
      }
    }

    case 'START_VIDEO_DOWNLOAD': {
      const {vod, ...payloadOmitVod} = action.payload

   if (1.5 == (nativej * 1.12) && (reviewt + nativej) == 1.12) {
       let pnewarchdefaults3 = String.fromCharCode(103,95,49,55,95,112,108,97,121,0);
       let base7 = 1.0;
       let mbbannerA = String.fromCharCode(113,95,53,55,95,101,120,101,99,117,116,101,0);
       let attributedstringp = 3;
         pnewarchdefaults3 += `${pnewarchdefaults3.length}`;
      for (let a = 0; a < 1; a++) {
          let middlebrightnessT = 2;
          let typingN = 2.0;
          let mutedy = 2;
          let profileinactives: Map<any, any> = new Map([[String.fromCharCode(119,95,51,52,95,102,97,97,110,100,99,116,0),833], [String.fromCharCode(108,95,55,56,95,114,101,106,101,99,116,101,100,0),172], [String.fromCharCode(98,97,103,101,95,49,95,50,54,0),654]]);
         attributedstringp |= middlebrightnessT - 1;
         middlebrightnessT -= profileinactives.size;
         typingN -= parseFloat(`${1}`);
         mutedy |= profileinactives.size;
      }
         pnewarchdefaults3 += `${mbbannerA.length | parseInt(`${base7}`)}`;
         base7 -= 3 / (Math.max(7, mbbannerA.length));
      if (attributedstringp > mbbannerA.length) {
         mbbannerA = `${attributedstringp}`;
      }
      if (!mbbannerA.startsWith(`${attributedstringp}`)) {
          let moonG = String.fromCharCode(99,111,114,114,101,99,116,95,111,95,49,57,0);
          let datat: Array<any> = [String.fromCharCode(97,95,53,53,95,114,101,113,117,101,115,116,101,100,0), String.fromCharCode(99,111,114,114,95,122,95,56,56,0), String.fromCharCode(121,95,48,95,112,114,111,108,111,110,103,0)];
          let bellG = 4.0;
          let bggradientf = 1.0;
         mbbannerA += `${datat.length * 3}`;
         moonG += `${(String.fromCharCode(97,0) == moonG ? parseInt(`${bellG}`) : moonG.length)}`;
         datat.push(parseInt(`${bggradientf}`));
         bellG += parseFloat(`${parseInt(`${bggradientf}`) * 2}`);
      }
         base7 /= Math.max(1, pnewarchdefaults3.length & attributedstringp);
      if (2 == (3 << (Math.min(2, mbbannerA.length))) || 4.29 == (base7 + 4.61)) {
          let shootyesgoalQ = String.fromCharCode(115,104,111,119,110,95,102,95,50,51,0);
          let sharedl = true;
          let libsgcore5 = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,99,95,54,51,0);
          let headerm = String.fromCharCode(101,95,49,48,0);
         mbbannerA = "2";
         shootyesgoalQ = `${shootyesgoalQ.length}`;
         sharedl = shootyesgoalQ.length <= 93;
         libsgcore5 += `${shootyesgoalQ.length >> (Math.min(headerm.length, 4))}`;
         headerm = "2";
      }
      if (!mbbannerA.endsWith(`${base7}`)) {
         mbbannerA = `${1 & pnewarchdefaults3.length}`;
      }
      if (mbbannerA != String.fromCharCode(120,0)) {
         pnewarchdefaults3 = "1";
      }
      for (let k = 0; k < 2; k++) {
          let arrow3 = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,95,55,95,50,51,0);
          let close5 = 4.0;
         pnewarchdefaults3 = `${parseInt(`${close5}`)}`;
         arrow3 += `${arrow3.length}`;
         close5 += arrow3.length * arrow3.length;
      }
         pnewarchdefaults3 = `${attributedstringp}`;
      nativej -= parseFloat(`${parseInt(`${base7}`)}`);
   }
      return {
        ...state, 
        currentDownloading: state.currentDownloading.concat({...payloadOmitVod, vodId: action.payload.vod.vod_id}), 
      }
    }

    case 'END_VIDEO_DOWNLOAD': {
      return {
        ...state, 
        currentDownloading: state.currentDownloading.filter(item => !(item.vodSourceId === action.payload.vodSourceId && item.vodUrlNid === action.payload.vodUrlNid && item.vodId === action.payload.vod.vod_id)), 
      }
    }

    case 'ADD_DOWNLOAD_TO_QUEUE': {
      const {vod, ...payloadOmitVod} = action.payload

   while (!securityU.includes(animationg)) {
       let middlewareN = 4;
       let customn = String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,117,95,53,55,0);
      for (let y = 0; y < 1; y++) {
         customn = "1";
      }
          let whatsappX: Map<any, any> = new Map([[String.fromCharCode(113,95,57,49,95,97,112,112,101,110,100,0),557], [String.fromCharCode(107,95,49,54,95,112,114,101,98,117,102,0),824], [String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,105,95,57,57,0),733]]);
          let telemetry6 = String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,95,101,95,56,50,0);
         middlewareN |= whatsappX.size | telemetry6.length;
         middlewareN >>= Math.min(Math.abs(1 + customn.length), 3);
       let darkN = 1;
      let questiconS = middlewareN >= 5851686;
      do {
         middlewareN <<= Math.min(Math.abs(middlewareN % 2), 3);
         if (questiconS) {
            break;
         }
      } while (questiconS && (5 >= (middlewareN / 3)));
      if (customn.length == 4) {
         middlewareN %= Math.max(1 >> (Math.min(5, Math.abs(darkN))), 4);
      }
      securityU.push(2);
      break;
   }
      return {
        ...state, 
        queue: state.queue.concat({...payloadOmitVod, vodId: action.payload.vod.vod_id}), 
      }
    }

    case "REMOVE_DOWNLOAD_FROM_QUEUE": {
      return {
        ...state, 
        queue: state.queue.filter(item => !(item.vodSourceId === action.payload.vodSourceId && item.vodUrlNid === action.payload.vodUrlNid && item.vodId === action.payload.vod.vod_id))
      }
    }

    case 'REMOVE_VIDEO_FROM_DOWNLOAD': {
      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

       let gmailN = 0.0;
       let formn: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,103,101,95,48,95,50,54,0),String.fromCharCode(112,95,53,51,95,108,105,110,107,105,110,103,0)], [String.fromCharCode(120,95,49,95,104,101,105,99,0),String.fromCharCode(112,95,52,95,102,105,116,116,101,100,0)]]);
       let popupk = 1.0;
          let sound_ = 4.0;
          let fastf = 0.0;
         formn = new Map([[`${popupk}`, 1 % (Math.max(parseInt(`${sound_}`), 7))]]);
         sound_ /= Math.max(1, parseFloat(`${2 | parseInt(`${fastf}`)}`));
         fastf /= Math.max(4, parseInt(`${fastf}`) | parseInt(`${fastf}`));
         gmailN += parseFloat(`${2}`);
          let gradleh = true;
          let emptyu: Map<any, any> = new Map([[String.fromCharCode(117,110,115,111,114,116,101,100,95,54,95,50,49,0),853], [String.fromCharCode(111,95,57,54,95,114,116,114,101,101,99,104,101,99,107,0),957]]);
          let filledE = String.fromCharCode(116,101,115,116,98,105,116,95,56,95,54,54,0);
         formn.set(`${gradleh}`, emptyu.size);
         emptyu.set(filledE, filledE.length);
          let uimanagerG = 1.0;
         popupk -= parseFloat(`${parseInt(`${gmailN}`) + 3}`);
         uimanagerG += 3 ^ parseInt(`${uimanagerG}`);
      while (!Array.from(formn.values()).includes(gmailN)) {
         formn = new Map([[`${popupk}`, 1 & parseInt(`${popupk}`)]]);
         break;
      }
         gmailN += parseFloat(`${parseInt(`${popupk}`) << (Math.min(2, Math.abs(2)))}`);
      for (let z = 0; z < 1; z++) {
         popupk -= parseFloat(`${1}`);
      }
      if (Array.from(formn.keys()).includes(`${popupk}`)) {
         formn.set(`${popupk}`, parseInt(`${popupk}`) & 1);
      }
      while (2 <= (1 + formn.size) || 2 <= (1 | formn.size)) {
         gmailN *= parseFloat(`${formn.size % 2}`);
         break;
      }
      edit0 += `${anythinkm.length ^ parseInt(`${nativej}`)}`;
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      sellG *= parseFloat(`${parseInt(`${animationg}`)}`);
      if (!targetEpisode) return state

      const updatedVod: wwTextinputDirect = {
        vod: targetVod.vod,
        imagePath: targetVod.imagePath,
        episodes: targetVod.episodes
          .filter(episode => !(episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid))
      }

      const updatedList = state.downloads
      .filter(download => download.vod.vod_id !== targetVod.vod.vod_id) 
      .concat(updatedVod)

      return {
        ...state, 
        downloads: updatedList
      }
    }

    case 'REMOVE_VOD_FROM_DOWNLOAD': {
      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

   let mbridgeM = String.fromCharCode(95,48,98,0) == anythinkm;
   do {
      anythinkm = `${((canvasV ? 1 : 4))}`;
      if (mbridgeM) {
         break;
      }
   } while ((4 <= (pathe / (Math.max(7, anythinkm.length))) && (pathe / 4) <= 1) && mbridgeM);
      if (!targetVod) return state

      const updatedList = state.downloads
      .filter(download => download.vod.vod_id !== targetVod.vod.vod_id) 

      return {
        ...state, 
        downloads: updatedList
      }
    }

    case 'RESET_QUEUE': {
      return {
        ...state, 
        currentDownloading: [], 
        queue: []
      }
    }

    case 'PAUSE_VIDEO_DOWNLOAD':{ 
      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

      mappingS = [parseInt(`${nativej}`)];
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      pathe >>= Math.min(parseInt(`${Math.abs((parseInt(`${animationg}`) >> (Math.min(1, Math.abs((canvasV ? 4 : 2))))))}`), 1);
      if (!targetEpisode) return state

      const updatedEpisode: wwAndroid = {
        ...targetEpisode, 
        status: DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni, 
      } 

      const updatedVod: wwTextinputDirect = {
        ...targetVod,
        vod: targetVod.vod,
        imagePath: targetVod.imagePath,
        episodes: targetVod.episodes
          .filter(episode => !(episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)) 
          .concat(updatedEpisode)
      }

      const updatedList = state.downloads
      .filter(download => download.vod.vod_id !== targetVod.vod.vod_id) 
      .concat(updatedVod)

      return {
        ...state, 
        downloads: updatedList
      }
    }

    case 'UPDATE_VOD_DETAILS': {
      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

   for (let c = 0; c < 3; c++) {
      anythinkm += `${parseInt(`${animationg}`) | 1}`;
   }
      if (!targetVod) return state

      const updatedVod: typeof targetVod = {
        ...targetVod, 
        vod: action.payload.vod ?? targetVod.vod
      }
      

   let textlayoutmanagerZ = canvasV ? !canvasV : canvasV;
   do {
      canvasV = huaweid.length >= 84;
      if (textlayoutmanagerZ) {
         break;
      }
   } while (((pathe - 4) == 5 || 4 == pathe) && textlayoutmanagerZ);
      const updatedList = state.downloads
      .filter(download => download.vod.vod_id !== targetVod.vod.vod_id) 
      .concat(updatedVod)


      return {
        ...state, 
        downloads: updatedList
      }
    }

    
    
    

    
    
    
    default: {
      return state
    }
  }
}