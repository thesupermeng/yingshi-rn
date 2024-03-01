import { yys_ServiceViews } from "@type/yys_basketball"
import { MARTextinputBackground, yys_TypeSelection, yys_Xvod, yys_LibsgcorePath } from "@type/yys_fast"
import RNFetchBlob from "rn-fetch-blob"

const initialDownloadVideoState: yys_TypeSelection = {
  downloads: [],
  currentDownloading: [],
  queue: []
}

export function downloadVideoReducer(state = initialDownloadVideoState, action: yys_ServiceViews): yys_TypeSelection {
  let libzeusA = true;
  let dark5: Array<any> = [124, 410];
  let guideg = String.fromCharCode(102, 105, 108, 116, 101, 114, 0);
  let foundW: Array<any> = [611, 414, 437];
  let with_ri4 = String.fromCharCode(100, 101, 109, 117, 120, 101, 114, 0);
  let delegate_07 = String.fromCharCode(116, 114, 117, 110, 99, 112, 97, 115, 115, 101, 115, 0);
  let send_: Array<any> = [772, 732, 411];
  let orangeJ = String.fromCharCode(103, 114, 97, 121, 0);
  let macaur = 0.0;
  let window_p5o = 5.0;
  let googlee: Array<any> = [247, 529, 368];
  let clear9 = String.fromCharCode(115, 119, 105, 116, 99, 104, 105, 110, 103, 0);
  let popupY = send_.length <= 6491239;
  do {
    send_ = [delegate_07.length];
    if (popupY) {
      break;
    }
  } while (popupY && (5 >= (2 % (Math.max(4, googlee.length)))));

  switch (action.type) {
    case 'ADD_VIDEO_TO_DOWNLOAD': {

      const newVodDownload: yys_LibsgcorePath = {
        vod: action.payload.vod,
        imagePath: 'file:///' + RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${action.payload.vod.vod_id}.png`,
        episodes: [],
        vodIsAdult: action.payload.vodIsAdult ?? false
      }
      let targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id) ?? newVodDownload

      for (let y = 0; y < 2; y++) {
        let animationsd = false;
        let libsgcoree = String.fromCharCode(114, 105, 112, 101, 109, 100, 0);
        let rewardM = String.fromCharCode(114, 101, 110, 100, 101, 114, 98, 117, 102, 102, 101, 114, 0);
        while (!animationsd || 1 < rewardM.length) {
          rewardM += `${(rewardM == String.fromCharCode(73, 0) ? (animationsd ? 4 : 1) : rewardM.length)}`;
          break;
        }
        while (rewardM.length >= libsgcoree.length) {
          let xvodK = true;
          let whiteN = String.fromCharCode(101, 110, 99, 111, 100, 97, 98, 108, 101, 0);
          let topic8 = 0;
          rewardM += `${topic8}`;
          xvodK = whiteN.length < 49;
          whiteN = `${whiteN.length}`;
          topic8 -= (String.fromCharCode(82, 0) == whiteN ? whiteN.length : (xvodK ? 5 : 4));
          break;
        }
        if (rewardM.length > 4) {
          rewardM += `${((animationsd ? 2 : 3) >> (Math.min(Math.abs(1), 2)))}`;
        }
        let logo6 = 7621399 >= rewardM.length;
        do {
          let vietnaml = 0.0;
          let leagueK = String.fromCharCode(115, 97, 110, 105, 116, 121, 0);
          let turnK = String.fromCharCode(115, 105, 109, 112, 108, 101, 115, 105, 103, 110, 97, 108, 0);
          rewardM = `${parseInt(`${vietnaml}`)}`;
          vietnaml /= Math.max(3, 3 % (Math.max(7, turnK.length)));
          leagueK = `${(leagueK == String.fromCharCode(55, 0) ? turnK.length : leagueK.length)}`;
          if (logo6) {
            break;
          }
        } while (logo6 && (!rewardM.endsWith(`${animationsd}`)));
        let thailandT: Array<any> = [787, 49, 955];
        rewardM += `${(libsgcoree == String.fromCharCode(116, 0) ? (animationsd ? 3 : 1) : libsgcoree.length)}`;
        thailandT.push(2 ^ thailandT.length);
        let disconnectedT = 5.0;
        rewardM += `${(libsgcoree.length - (animationsd ? 2 : 5))}`;
        libsgcoree = `${rewardM.length / (Math.max(1, 7))}`;
        while (!animationsd || 1.70 > (disconnectedT - 4.66)) {
          disconnectedT *= 1;
          break;
        }
        googlee.push((guideg == String.fromCharCode(100, 0) ? parseInt(`${macaur}`) : guideg.length));
      }
      const videoExist = targetVod?.episodes.some(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      window_p5o /= Math.max(delegate_07.length & send_.length, 1);

      if (videoExist) return state

      const newEpisode: yys_Xvod = {
        progress: {
          percentage: 0,
          bytes: 0,
        },
        status: MARTextinputBackground.MARRewardvideoBell,
        sizeInBytes: 0,
        videoPath: `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${action.payload.vod.vod_id}-${action.payload.vodSourceId}-${action.payload.vodUrlNid}.mp4`,
        vodSourceId: action.payload.vodSourceId,
        vodUrlNid: action.payload.vodUrlNid,
        ffmpegSession: action.payload.ffmpegSession
      }

      const concatEpisodeDownload = targetVod.episodes.concat(newEpisode)
      targetVod = { ...targetVod, episodes: concatEpisodeDownload }

      const concatDownloadsList = state.downloads
        .filter(download => download.vod.vod_id !== targetVod.vod.vod_id)
        .concat(targetVod)

      return {
        ...state,
        downloads: concatDownloadsList
      }
    }

    case "UPDATE_VIDEO_DOWNLOAD": {


      window_p5o *= foundW.length;

      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

      window_p5o *= 1 | delegate_07.length;
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      delegate_07 += `${orangeJ.length & parseInt(`${window_p5o}`)}`;
      if (!targetEpisode) return state

      const updatedEpisode: yys_Xvod = {
        status: action.payload.status ?? targetEpisode.status,
        progress: {
          percentage: action.payload.progress?.percentage ?? targetEpisode.progress.percentage,
          bytes: action.payload.progress?.bytes ?? targetEpisode.progress.bytes,
        },
        sizeInBytes: action.payload.sizeInBytes ?? targetEpisode.sizeInBytes,
        videoPath: action.payload.videoPath ?? targetEpisode.videoPath,
        vodSourceId: targetEpisode.vodSourceId,
        vodUrlNid: targetEpisode.vodUrlNid,
        ffmpegSession: action.payload.ffmpegSession === undefined ? targetEpisode.ffmpegSession : action.payload.ffmpegSession
      }

      const updatedVod: yys_LibsgcorePath = {
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
      const { vod, ...payloadOmitVod } = action.payload

      window_p5o /= Math.max((guideg == String.fromCharCode(71, 0) ? foundW.length : guideg.length), 4);
      return {
        ...state,
        currentDownloading: state.currentDownloading.concat({ ...payloadOmitVod, vodId: action.payload.vod.vod_id }),
      }
    }

    case 'END_VIDEO_DOWNLOAD': {
      return {
        ...state,
        currentDownloading: state.currentDownloading.filter(item => !(item.vodSourceId === action.payload.vodSourceId && item.vodUrlNid === action.payload.vodUrlNid && item.vodId === action.payload.vod.vod_id)),
      }
    }

    case 'ADD_DOWNLOAD_TO_QUEUE': {
      const { vod, ...payloadOmitVod } = action.payload

      with_ri4 = "2";
      return {
        ...state,
        queue: state.queue.concat({ ...payloadOmitVod, vodId: action.payload.vod.vod_id }),
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

      let sinaB = 2;
      let detailM = false;
      let policyN = String.fromCharCode(111, 116, 111, 102, 0);
      for (let o = 0; o < 3; o++) {
        sinaB -= 2;
      }
      let episodesi = 2.0;
      let mintegralV = 2.0;
      let zhengpianO = String.fromCharCode(115, 99, 104, 101, 109, 101, 115, 0);
      detailM = zhengpianO == String.fromCharCode(72, 0);
      episodesi += parseFloat(`${parseInt(`${episodesi}`) | 1}`);
      mintegralV += parseInt(`${episodesi}`);
      zhengpianO = `${parseInt(`${episodesi}`) & 3}`;
      let agreementL = detailM ? !detailM : detailM;
      do {
        detailM = sinaB >= 73;
        if (agreementL) {
          break;
        }
      } while ((sinaB <= 2 && 1 <= (sinaB + 2)) && agreementL);
      detailM = !policyN.includes(`${detailM}`);
      for (let j = 0; j < 3; j++) {
        let private_2J: Array<any> = [604, 492, 904];
        let androidL = String.fromCharCode(114, 101, 115, 105, 103, 110, 0);
        let unselected8 = String.fromCharCode(98, 111, 111, 115, 116, 0);
        let directe = String.fromCharCode(102, 111, 114, 103, 111, 116, 0);
        policyN += `${1 + androidL.length}`;
        private_2J = [private_2J.length * 2];
        androidL += `${directe.length + private_2J.length}`;
        unselected8 = `${(String.fromCharCode(84, 0) == unselected8 ? unselected8.length : private_2J.length)}`;
        directe += `${directe.length ^ private_2J.length}`;
      }
      if (detailM || policyN.length >= 1) {
        let transferM = String.fromCharCode(112, 101, 114, 115, 111, 110, 115, 0);
        let volumet = String.fromCharCode(115, 116, 101, 114, 101, 111, 100, 0);
        let analyticsD = 2;
        let gpayS = String.fromCharCode(112, 98, 107, 100, 102, 0);
        detailM = gpayS.length < transferM.length;
        transferM += `${volumet.length * analyticsD}`;
        volumet += "3";
        analyticsD %= Math.max(2, volumet.length);
        gpayS = `${(volumet == String.fromCharCode(70, 0) ? volumet.length : analyticsD)}`;
      }
      policyN = `${policyN.length << (Math.min(5, Math.abs(sinaB)))}`;
      while (policyN.endsWith(`${detailM}`)) {
        let anytimeB = String.fromCharCode(111, 98, 118, 105, 111, 117, 115, 108, 121, 0);
        detailM = (policyN.length + anytimeB.length) < 57;
        break;
      }
      policyN += `${sinaB}`;
      googlee.push(foundW.length ^ 1);
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      googlee = [guideg.length | dark5.length];
      if (!targetEpisode) return state

      const updatedVod: yys_LibsgcorePath = {
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

      if (orangeJ.startsWith(`${dark5.length}`)) {
        dark5 = [orangeJ.length];
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

    case 'PAUSE_VIDEO_DOWNLOAD': {
      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)

      while ((window_p5o - 5.94) > 3.58 || 5 > (delegate_07.length >> (Math.min(Math.abs(5), 1)))) {
        window_p5o += (String.fromCharCode(116, 0) == guideg ? guideg.length : send_.length);
        break;
      }
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      for (let l = 0; l < 2; l++) {
        foundW.push(with_ri4.length);
      }
      if (!targetEpisode) return state

      const updatedEpisode: yys_Xvod = {
        ...targetEpisode,
        status: MARTextinputBackground.MARInjuryModels,
      }

      const updatedVod: yys_LibsgcorePath = {
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

      let settingh = false;
      let container0: Array<any> = [201, 798, 912];
      settingh = container0.includes(settingh);
      settingh = (!settingh ? settingh : settingh);
      let containerC: Map<any, any> = new Map([[String.fromCharCode(116, 101, 109, 112, 102, 105, 108, 101, 0), String.fromCharCode(103, 101, 116, 115, 103, 110, 99, 116, 120, 110, 111, 0)], [String.fromCharCode(115, 105, 103, 102, 105, 103, 0), String.fromCharCode(97, 115, 100, 107, 0)]]);
      let confige = false;
      settingh = !settingh;
      containerC = new Map([[`${containerC.size}`, containerC.size]]);
      confige = !confige;
      guideg += `${(guideg == String.fromCharCode(117, 0) ? (settingh ? 4 : 3) : guideg.length)}`;
      if (!targetVod) return state

      const updatedVod: typeof targetVod = {
        ...targetVod,
        vod: action.payload.vod ?? targetVod.vod
      }


      while (with_ri4 != String.fromCharCode(71, 0)) {
        let vietnamj = String.fromCharCode(114, 101, 113, 117, 101, 115, 116, 101, 100, 0);
        let wind4 = false;
        if (wind4) {
          vietnamj += `${((wind4 ? 2 : 3))}`;
        }
        while (1 <= vietnamj.length || !wind4) {
          let gpay7: Map<any, any> = new Map([[String.fromCharCode(112, 111, 105, 110, 116, 111, 99, 116, 0), String.fromCharCode(105, 109, 103, 117, 116, 105, 108, 115, 0)], [String.fromCharCode(108, 111, 103, 103, 101, 114, 115, 0), String.fromCharCode(114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 0)], [String.fromCharCode(98, 105, 103, 100, 105, 97, 0), String.fromCharCode(105, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121, 0)]]);
          wind4 = !wind4;
          gpay7.set(`${gpay7.size}`, gpay7.size);
          break;
        }
        if (!wind4 && 5 < vietnamj.length) {
          let homeO = String.fromCharCode(110, 105, 109, 97, 116, 101, 100, 0);
          let twitterB = 4.0;
          let pressureb = String.fromCharCode(116, 119, 111, 112, 111, 105, 110, 116, 0);
          let usernames = String.fromCharCode(118, 101, 99, 116, 111, 114, 0);
          let flyerC = String.fromCharCode(100, 105, 116, 104, 101, 114, 105, 110, 103, 0);
          wind4 = pressureb.length == 25 || 25 == usernames.length;
          homeO = "3";
          twitterB /= Math.max(4, parseInt(`${twitterB}`));
          pressureb += `${homeO.length * parseInt(`${twitterB}`)}`;
          usernames = `${(String.fromCharCode(108, 0) == flyerC ? flyerC.length : parseInt(`${twitterB}`))}`;
        }
        wind4 = vietnamj.endsWith(`${wind4}`);
        let debugR = 4.0;
        let fillr = true;
        let huaweik = String.fromCharCode(104, 101, 105, 103, 104, 116, 0);
        wind4 = 74.70 == debugR;
        debugR -= ((fillr ? 4 : 4));
        fillr = fillr || huaweik.length < 23;
        huaweik = `${huaweik.length - 1}`;
        let langkeyT: Map<any, any> = new Map([[String.fromCharCode(102, 105, 110, 97, 108, 105, 122, 101, 114, 0), String.fromCharCode(97, 116, 97, 98, 108, 101, 115, 0)], [String.fromCharCode(109, 112, 101, 103, 118, 105, 100, 101, 111, 101, 110, 99, 100, 115, 112, 0), String.fromCharCode(115, 104, 97, 112, 101, 115, 0)], [String.fromCharCode(116, 119, 111, 108, 97, 109, 101, 0), String.fromCharCode(116, 101, 109, 112, 111, 114, 97, 108, 0)]]);
        vietnamj += `${vietnamj.length}`;
        langkeyT.set(`${langkeyT.size}`, langkeyT.size >> (Math.min(Math.abs(3), 1)));
        guideg += `${dark5.length}`;
        break;
      }
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