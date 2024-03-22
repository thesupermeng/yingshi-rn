import { mayi_Catagory } from "@type/mayi_analytic_half"
import { CUASheetIconarrowright, mayi_Prediction, mayi_EmptySmall, mayi_CurrentFootball } from "@type/mayi_agreement"
import RNFetchBlob from "rn-fetch-blob"

const initialDownloadVideoState : mayi_Prediction = {
  downloads: [], 
  currentDownloading: [], 
  queue: []
}

export function downloadVideoReducer(state = initialDownloadVideoState, action: mayi_Catagory): mayi_Prediction{
  switch (action.type){
       let nextS = String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,108,95,54,48,0);
    let sendO = 4.0;
    let iconviewergif3: Map<any, any> = new Map([[String.fromCharCode(115,95,50,57,95,103,114,97,121,114,103,98,0),String.fromCharCode(122,95,52,50,95,109,101,116,97,100,97,116,97,115,101,116,0)], [String.fromCharCode(115,105,122,101,109,109,95,48,95,57,54,0),String.fromCharCode(105,110,100,105,99,105,101,115,95,103,95,53,53,0)], [String.fromCharCode(112,95,54,95,99,108,111,115,117,114,101,0),String.fromCharCode(115,95,57,54,95,100,101,99,111,100,101,120,0)]]);
    let predictiondefaultT: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,102,105,120,116,117,114,101,0),224], [String.fromCharCode(101,120,116,101,116,110,100,101,100,95,107,95,50,53,0),732]]);
    let rootR = String.fromCharCode(106,95,54,49,95,109,117,108,114,101,115,0);
    let libreanimatedf: Map<any, any> = new Map([[String.fromCharCode(107,95,56,51,95,114,101,115,116,114,105,99,116,0),false ], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,95,113,95,55,54,0),true ]]);
    let yellowcirclebgg = 5.0;
    let backwhiteg = String.fromCharCode(97,95,52,95,112,97,115,119,111,114,100,0);
    let ballf = true;
      sendO /= Math.max(5, nextS.length + 3);

    case 'ADD_VIDEO_TO_DOWNLOAD': {

      const newVodDownload: mayi_CurrentFootball = {
        vod: action.payload.vod, 
        imagePath: 'file:///' + RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${action.payload.vod.vod_id}.png`, 
        episodes: [], 
        vodIsAdult: action.payload.vodIsAdult ?? false
      }
      let targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id) ?? newVodDownload

   if (5.54 >= (yellowcirclebgg / (Math.max(libreanimatedf.size, 4))) || 2.79 >= (yellowcirclebgg / 5.54)) {
      libreanimatedf.set(`${yellowcirclebgg}`, 1 % (Math.max(6, parseInt(`${yellowcirclebgg}`))));
   }
      const videoExist = targetVod?.episodes.some(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      backwhiteg = `${backwhiteg.length ^ 3}`;

      if (videoExist) return state

      const newEpisode: mayi_EmptySmall = {
        progress: {
          percentage: 0, 
          bytes: 0, 
        }, 
        status: CUASheetIconarrowright.CUAAudienceUmeng, 
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
       

      rootR += `${(String.fromCharCode(90,0) == nextS ? iconviewergif3.size : nextS.length)}`;

      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

      predictiondefaultT = new Map([[`${predictiondefaultT.size}`, rootR.length]]);
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      sendO *= libreanimatedf.size | 3;
      if (!targetEpisode) return state

      const updatedEpisode: mayi_EmptySmall = {
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

      const updatedVod: mayi_CurrentFootball = {
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

   for (let n = 0; n < 1; n++) {
      nextS += `${rootR.length}`;
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

   let resultX = 5005157 >= rootR.length;
   do {
      rootR += "3";
      if (resultX) {
         break;
      }
   } while (((rootR.length ^ 3) <= 3 && 4.29 <= (rootR.length - sendO)) && resultX);
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

   if (!backwhiteg.endsWith(`${libreanimatedf.size}`)) {
       let subtextp = true;
       let downloadT: Array<any> = [559, 156];
         subtextp = !subtextp;
       let redirectu = String.fromCharCode(105,95,48,0);
       let customK = String.fromCharCode(121,95,53,95,112,105,120,98,108,111,99,107,100,115,112,0);
          let iconclosewhitewithbgL = String.fromCharCode(117,97,110,95,55,95,49,51,0);
          let reactnavigationD = String.fromCharCode(102,105,114,115,116,95,104,95,57,52,0);
         subtextp = !subtextp;
         iconclosewhitewithbgL = `${iconclosewhitewithbgL.length ^ 1}`;
         reactnavigationD = `${iconclosewhitewithbgL.length}`;
      for (let y = 0; y < 1; y++) {
         customK += `${((subtextp ? 5 : 2) ^ 1)}`;
      }
      for (let c = 0; c < 2; c++) {
         downloadT = [downloadT.length];
      }
      let areaH = redirectu.length >= 9606655;
      do {
         redirectu += "1";
         if (areaH) {
            break;
         }
      } while ((!customK.startsWith(`${redirectu.length}`)) && areaH);
      backwhiteg += `${(String.fromCharCode(86,0) == nextS ? nextS.length : libreanimatedf.size)}`;
   }
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

   let gifgoal8 = yellowcirclebgg >= 8293002.0;
   do {
      yellowcirclebgg /= Math.max(nextS.length >> (Math.min(backwhiteg.length, 2)), 5);
      if (gifgoal8) {
         break;
      }
   } while (gifgoal8 && ((libreanimatedf.size + 2) >= 1 || (libreanimatedf.size * yellowcirclebgg) >= 4.28));
      if (!targetEpisode) return state

      const updatedVod: mayi_CurrentFootball = {
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

   if (nextS == backwhiteg) {
       let anner7 = 0.0;
       let umengQ: Map<any, any> = new Map([[String.fromCharCode(122,95,49,49,95,115,109,118,106,112,101,103,0),String.fromCharCode(102,109,116,99,111,110,118,101,114,116,95,114,95,50,51,0)], [String.fromCharCode(117,95,56,53,95,100,114,97,103,103,97,98,108,101,0),String.fromCharCode(108,95,53,53,95,116,105,110,116,0)]]);
       let eighteena = String.fromCharCode(112,111,108,108,95,48,95,49,49,0);
       let unselected0: Map<any, any> = new Map([[String.fromCharCode(115,95,57,95,118,100,97,115,104,101,114,0),true ], [String.fromCharCode(107,95,54,50,95,99,97,112,116,117,114,101,0),true ]]);
       let abidetectG: Array<any> = [351, 123];
         anner7 /= Math.max(parseFloat(`${eighteena.length}`), 2);
      let projectp = umengQ.size >= 6819776;
      do {
         umengQ = new Map([[`${abidetectG.length}`, 3]]);
         if (projectp) {
            break;
         }
      } while (projectp && (Array.from(umengQ.keys()).includes(`${abidetectG.length}`)));
       let libglogZ: Array<any> = [604, 576];
       let usernameL = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,115,95,117,95,53,53,0);
       let libjsiQ = String.fromCharCode(111,95,50,50,95,100,105,109,101,110,115,105,116,111,110,115,0);
      while ((unselected0.size >> (Math.min(Math.abs(1), 5))) == 5) {
         libglogZ.push(parseInt(`${anner7}`));
         break;
      }
          let clearH = String.fromCharCode(109,111,100,117,108,101,109,97,112,95,122,95,54,55,0);
          let footballtrophyF: Array<any> = [899, 606];
         anner7 += parseFloat(`${unselected0.size}`);
         clearH += `${2 | footballtrophyF.length}`;
         footballtrophyF = [footballtrophyF.length ^ 3];
         eighteena += "1";
      while ((unselected0.size / 3) >= 5) {
          let downloaderi = String.fromCharCode(121,95,50,50,95,114,101,102,99,111,117,110,116,101,100,0);
          let libturbomodulejsijniu = true;
          let template_xB = 5.0;
          let gemfileU = String.fromCharCode(103,114,97,112,104,113,108,95,121,95,55,52,0);
          let hooksx = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,115,112,95,53,95,53,54,0);
         libglogZ = [parseInt(`${template_xB}`) % (Math.max(7, gemfileU.length))];
         downloaderi += `${hooksx.length << (Math.min(Math.abs(1), 2))}`;
         libturbomodulejsijniu = hooksx.length < 48;
         template_xB *= parseFloat(`${downloaderi.length % 1}`);
         gemfileU += `${hooksx.length << (Math.min(Math.abs(3), 4))}`;
         break;
      }
      for (let j = 0; j < 2; j++) {
         abidetectG.push(umengQ.size);
      }
       let stringsM = 5.0;
       let agreementm = 5.0;
      for (let s = 0; s < 1; s++) {
         eighteena += `${usernameL.length % (Math.max(2, 10))}`;
      }
         libglogZ.push(1);
      let textinput9 = 6854773.0 <= stringsM;
      do {
         stringsM -= (eighteena == String.fromCharCode(121,0) ? parseInt(`${agreementm}`) : eighteena.length);
         if (textinput9) {
            break;
         }
      } while ((2 == (eighteena.length * parseInt(`${stringsM}`))) && textinput9);
         umengQ.set(libjsiQ, 3);
       let iconbackwhite3 = true;
       let mbsplashm = true;
      backwhiteg = `${umengQ.size}`;
   }
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

   if (!nextS.startsWith(`${sendO}`)) {
      sendO /= Math.max(2, iconviewergif3.size);
   }
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      sendO /= Math.max(parseInt(`${yellowcirclebgg}`), 2);
      if (!targetEpisode) return state

      const updatedEpisode: mayi_EmptySmall = {
        ...targetEpisode, 
        status: CUASheetIconarrowright.CUATextlayoutmanagerLibreactperfloggerjni, 
      } 

      const updatedVod: mayi_CurrentFootball = {
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

      ballf = 5 == iconviewergif3.size && 42.40 == sendO;
      if (!targetVod) return state

      const updatedVod: typeof targetVod = {
        ...targetVod, 
        vod: action.payload.vod ?? targetVod.vod
      }
      

      ballf = rootR == backwhiteg;
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