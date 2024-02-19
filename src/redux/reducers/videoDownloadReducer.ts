import { DownloadVideoActionType } from "@type"
import { DownloadStatus, DownloadVideoReducerState, EpisodeDownloadType, VodDownloadType } from "@type"
import RNFetchBlob from "rn-fetch-blob"

const initialDownloadVideoState: DownloadVideoReducerState = {
  downloads: [],
  currentDownloading: [],
  queue: []
}

export function downloadVideoReducer(state = initialDownloadVideoState, action: DownloadVideoActionType): DownloadVideoReducerState {
  switch (action.type) {
    case 'ADD_VIDEO_TO_DOWNLOAD': {

      const newVodDownload: VodDownloadType = {
        vod: action.payload.vod,
        imagePath: 'file:///' + RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${action.payload.vod.vod_id}.png`,
        episodes: [],
        vodIsAdult: action.payload.vodIsAdult ?? false
      }
      let targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id) ?? newVodDownload
      const videoExist = targetVod?.episodes.some(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)

      if (videoExist) return state

      const newEpisode: EpisodeDownloadType = {
        progress: {
          percentage: 0,
          bytes: 0,
        },
        status: DownloadStatus.DOWNLOADING,
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
      /**
       * find vod from download 
       * find episode from vod 
       * 
       * update episode field if provided, if not provided, no update 
       * 
       * remove target episode from original list, then add back updated one, 
       * remove target vod from original list, then add back update one 
       * return state
       */

      const targetVod = state.downloads.find(download => download.vod.vod_id === action.payload.vod.vod_id)
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)
      if (!targetEpisode) return state

      const updatedEpisode: EpisodeDownloadType = {
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

      const updatedVod: VodDownloadType = {
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
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)
      if (!targetEpisode) return state

      const updatedVod: VodDownloadType = {
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
      if (!targetVod) return state
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === action.payload.vodSourceId && episode.vodUrlNid === action.payload.vodUrlNid)
      if (!targetEpisode) return state

      const updatedEpisode: EpisodeDownloadType = {
        ...targetEpisode,
        status: DownloadStatus.PAUSED,
      }

      const updatedVod: VodDownloadType = {
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
      if (!targetVod) return state

      const updatedVod: typeof targetVod = {
        ...targetVod,
        vod: action.payload.vod ?? targetVod.vod
      }

      const updatedList = state.downloads
        .filter(download => download.vod.vod_id !== targetVod.vod.vod_id)
        .concat(updatedVod)


      return {
        ...state,
        downloads: updatedList
      }
    }

    // case 'CANCEL_VIDEO_DOWNLOAD': { // TODO : currently not implementing
    //   return {
    //     ...state, 

    //   }
    // }

    default: {
      return state
    }
  }
}