import { ttPlaceholder } from "@type/tt_history_upload"
import { ZRChinasame, ttMapping, ttFrame, ttTumbnail } from "@type/tt_const_videocommon"
import RNFetchBlob from "rn-fetch-blob"

const initialDownloadVideoState : ttMapping = {
  downloads: [], 
  currentDownloading: [], 
  queue: []
}

export function downloadVideoReducer(state = initialDownloadVideoState, action: ttPlaceholder): ttMapping{
  let string8q: Map<any, any> = new Map([[String.fromCharCode(122,95,52,51,95,103,117,97,114,100,0),String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,95,111,95,56,55,0)], [String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,119,95,49,57,0),String.fromCharCode(100,105,115,99,97,114,100,95,111,95,53,55,0)]]);
    let changeH = 0;
    let countryA: Array<any> = [231, 222, 203];
    let blackl = String.fromCharCode(115,116,97,99,107,101,100,95,57,95,56,57,0);
    let episodeP: Array<any> = [299, 29, 278];
    let benefitM = String.fromCharCode(106,95,54,95,103,114,111,117,112,101,100,0);
    let zhuboR: Map<any, any> = new Map([[String.fromCharCode(110,101,109,111,110,105,99,95,51,95,50,54,0),681], [String.fromCharCode(98,121,116,101,105,110,95,102,95,55,49,0),244]]);
    let minis: Array<any> = [24, 633];
    let guidey = true;
    let description_pG = 0.0;
    let carouselV = String.fromCharCode(98,105,119,101,105,103,104,116,95,52,95,50,50,0);
    let crossT = 0.0;
    let background1 = 3.0;
    let sigmobp = false;
   while (3.42 > description_pG) {
      minis = [episodeP.length >> (Math.min(Math.abs(1), 5))];
      break;
   }
  switch (action.type) {
    case 'ADD_VIDEO_TO_DOWNLOAD': {

      const newVodDownload: ttTumbnail = {
        vod: action.payload.vod, 
        imagePath: 'file:///' + RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${action.payload.vod.vod_id}.png`, 
        episodes: [], 
        vodIsAdult: action.payload.vodIsAdult ?? false
      }
      let targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id) ?? newVodDownload
      let rewindw = 9055102 <= episodeP.length;
      do {
         episodeP.push(parseInt(`${description_pG}`));
         if (rewindw) {
            break;
         }
      } while (rewindw && (1 == (3 | benefitM.length) || 2 == (3 | benefitM.length)));
   
      const videoExist = targetVod?.episodes.some(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      carouselV = `${parseInt(`${description_pG}`) / 2}`;

      if (videoExist) return state

      const newEpisode: ttFrame = {
        progress: {
          percentage: 0, 
          bytes: 0, 
        }, 
        status: ZRChinasame.ZRSelectedBaidu, 
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
       

       let cornerQ = String.fromCharCode(99,111,110,116,114,105,98,95,107,95,56,49,0);
      if (cornerQ.length > cornerQ.length) {
          let manifestg = String.fromCharCode(111,95,53,56,95,100,111,102,102,115,101,116,115,0);
          let internet1 = 0.0;
          let specG = 1;
          let heartc = String.fromCharCode(115,95,49,50,95,111,102,102,108,105,110,101,0);
          let history7 = 1.0;
         cornerQ = `${heartc.length}`;
         manifestg += "3";
         internet1 -= parseFloat(`${parseInt(`${history7}`) / (Math.max(9, manifestg.length))}`);
         specG |= (String.fromCharCode(68,0) == manifestg ? parseInt(`${internet1}`) : manifestg.length);
         heartc = `${parseInt(`${history7}`) * 3}`;
      }
      for (let n = 0; n < 3; n++) {
         cornerQ = `${2 ^ cornerQ.length}`;
      }
         cornerQ += `${cornerQ.length >> (Math.min(cornerQ.length, 5))}`;
      countryA = [changeH];

      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

      carouselV += `${countryA.length % (Math.max(carouselV.length, 1))}`;
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

   while ((changeH % (Math.max(blackl.length, 2))) >= 3) {
      changeH *= (3 - (guidey ? 4 : 2));
      break;
   }
      if (!targetEpisode) return state

      const updatedEpisode: ttFrame = {
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

      const updatedVod: ttTumbnail = {
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

       let bootsplashg = 5;
       let trash3 = 3;
      if ((3 * bootsplashg) > 3 || (3 * trash3) > 2) {
          let const_t3y = true;
          let singapored = String.fromCharCode(109,95,49,54,95,100,105,115,112,115,97,98,108,101,0);
          let chatX: Array<any> = [244, 891, 263];
          let philippinesk = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,108,95,57,48,0);
          let projectj = String.fromCharCode(106,115,111,110,114,112,99,95,98,95,51,54,0);
         bootsplashg <<= Math.min(Math.abs(projectj.length + singapored.length), 4);
         const_t3y = !const_t3y;
         singapored = `${chatX.length}`;
         chatX = [1];
         philippinesk += `${2 | chatX.length}`;
         projectj += `${(philippinesk == String.fromCharCode(76,0) ? (const_t3y ? 3 : 3) : philippinesk.length)}`;
      }
         bootsplashg -= trash3 ^ 3;
         trash3 += bootsplashg;
      for (let z = 0; z < 1; z++) {
         trash3 <<= Math.min(Math.abs(bootsplashg), 1);
      }
      if (5 > bootsplashg) {
         bootsplashg /= Math.max(bootsplashg >> (Math.min(Math.abs(trash3), 5)), 3);
      }
      let emptyv = 6212699 >= bootsplashg;
      do {
          let colorsq = 1.0;
          let dice9: Array<any> = [String.fromCharCode(114,101,110,97,109,101,95,118,95,51,51,0), String.fromCharCode(99,95,55,57,95,102,111,114,119,97,114,100,115,0)];
         bootsplashg <<= Math.min(2, Math.abs(1 >> (Math.min(Math.abs(parseInt(`${colorsq}`)), 4))));
         colorsq /= Math.max(parseFloat(`${dice9.length}`), 3);
         dice9.push(dice9.length << (Math.min(dice9.length, 1)));
         if (emptyv) {
            break;
         }
      } while ((4 < (trash3 & 2) && (bootsplashg & 2) < 1) && emptyv);
      minis = [2 / (Math.max(3, countryA.length))];
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

       let sharedk = 4.0;
       let showd: Map<any, any> = new Map([[String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,103,95,51,51,0),394], [String.fromCharCode(103,101,111,99,111,100,101,100,95,110,95,56,48,0),908], [String.fromCharCode(100,101,99,111,100,101,102,95,55,95,49,56,0),157]]);
      let closeE = sharedk <= 9494726.0;
      do {
         sharedk *= 3;
         if (closeE) {
            break;
         }
      } while (closeE && ((showd.size | 2) <= 5 && 3.84 <= (3.50 * sharedk)));
         showd = new Map([[`${showd.size}`, 1 ^ showd.size]]);
      while (Array.from(showd.values()).includes(sharedk)) {
         sharedk += 1;
         break;
      }
       let modeS = 0.0;
      for (let w = 0; w < 3; w++) {
         showd = new Map([[`${sharedk}`, parseInt(`${sharedk}`)]]);
      }
      while (showd.size <= sharedk) {
         showd = new Map([[`${modeS}`, parseInt(`${modeS}`) % 3]]);
         break;
      }
      guidey = 35.98 <= description_pG;
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

      minis = [3 | zhuboR.size];
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

       let launchery = String.fromCharCode(106,95,50,57,95,100,101,114,101,102,0);
       let backJ = String.fromCharCode(112,95,57,56,95,102,111,99,117,115,97,98,108,101,0);
       let scorew = String.fromCharCode(97,95,52,54,95,113,117,97,108,105,102,105,101,114,115,0);
      for (let r = 0; r < 2; r++) {
          let eighteenJ = String.fromCharCode(117,95,51,49,95,114,111,108,108,98,97,99,107,0);
          let actionsV = String.fromCharCode(109,95,57,57,95,108,111,103,102,117,110,99,0);
          let mbbidW = 5;
          let match1 = 0.0;
          let membershipr = 0.0;
         backJ += `${(String.fromCharCode(53,0) == launchery ? launchery.length : parseInt(`${membershipr}`))}`;
         eighteenJ = `${mbbidW}`;
         actionsV = `${eighteenJ.length / 2}`;
         mbbidW |= mbbidW;
         match1 /= Math.max(parseFloat(`${actionsV.length}`), 4);
         membershipr -= parseInt(`${match1}`) << (Math.min(Math.abs(3), 4));
      }
         backJ = `${(String.fromCharCode(80,0) == scorew ? scorew.length : launchery.length)}`;
      while (backJ.endsWith(`${scorew.length}`)) {
         backJ = `${(String.fromCharCode(110,0) == backJ ? launchery.length : backJ.length)}`;
         break;
      }
          let sentryy = 3.0;
         scorew += `${parseInt(`${sentryy}`)}`;
      while (backJ.includes(launchery)) {
         launchery += `${scorew.length}`;
         break;
      }
          let area3 = 0.0;
          let animationQ = String.fromCharCode(114,101,99,108,97,105,109,95,56,95,49,54,0);
         scorew += `${scorew.length}`;
         area3 += parseFloat(`${animationQ.length}`);
         animationQ = `${1 ^ animationQ.length}`;
      if (backJ != String.fromCharCode(107,0)) {
         launchery = `${launchery.length}`;
      }
      while (launchery.length == 3) {
         launchery = `${scorew.length | backJ.length}`;
         break;
      }
      for (let b = 0; b < 2; b++) {
         launchery = `${backJ.length}`;
      }
      blackl += `${backJ.length}`;
      if (!targetEpisode) return state

      const updatedVod: ttTumbnail = {
        vod: targetVod.vod,
        imagePath: targetVod.imagePath,
        episodes: targetVod.episodes
          .filter(episode => !(episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)),
        vodIsAdult: false
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

       let stard = 1.0;
         stard += parseInt(`${stard}`) << (Math.min(3, Math.abs(3)));
      for (let p = 0; p < 2; p++) {
         stard -= parseInt(`${stard}`);
      }
          let gradleG = 1;
          let sortj = String.fromCharCode(100,95,54,55,95,97,116,111,109,0);
          let projectD = 5;
         stard /= Math.max(2, projectD << (Math.min(5, Math.abs(gradleG))));
         gradleG += (String.fromCharCode(66,0) == sortj ? sortj.length : sortj.length);
      countryA.push(carouselV.length);
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

      description_pG -= parseFloat(`${2 >> (Math.min(1, minis.length))}`);
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      countryA = [3 + carouselV.length];
      if (!targetEpisode) return state

      const updatedEpisode: ttFrame = {
        ...targetEpisode, 
        status: ZRChinasame.ZRBackwardTemp, 
      } 

      const updatedVod: ttTumbnail = {
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

   for (let m = 0; m < 2; m++) {
      blackl = `${(parseInt(`${description_pG}`) * (guidey ? 5 : 5))}`;
   }
      if (!targetVod) return state

      const updatedVod: typeof targetVod = {
        ...targetVod, 
        vod: action.payload.vod ?? targetVod.vod
      }
      

      episodeP = [carouselV.length % (Math.max(2, 5))];
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