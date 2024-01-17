import { DownloadVideoActionType } from "@type/actionTypes"
import { DownloadStatus, DownloadVideoReducerState, EpisodeDownloadType, VodDownloadType } from "@type/vodDownloadTypes"
import RNFetchBlob from "rn-fetch-blob"

const initialDownloadVideoState : DownloadVideoReducerState = {
  downloads: []
}

export function downloadVideoReducer(state = initialDownloadVideoState, action: DownloadVideoActionType): DownloadVideoReducerState{
  switch (action.type){
    case 'ADD_VIDEO_TO_DOWNLOAD': {
      const newVodDownload: VodDownloadType = {
        vod: action.payload.vod, 
        imagePath: 'file:///' + RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${action.payload.vod.vod_id}`, 
        episodes: []
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
        videoPath: '', 
        vodSourceId: action.payload.vodSourceId, 
        vodUrlNid: action.payload.vodUrlNid
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
        vodUrlNid: targetEpisode.vodUrlNid
      } 

      const updatedVod: VodDownloadType = {
        vod: targetVod.vod,
        imagePath: targetVod.imagePath,
        episodes: targetVod.episodes
        .filter(episode => episode.vodSourceId !== targetEpisode.vodSourceId && episode.vodUrlNid !== targetEpisode.vodUrlNid) 
        .concat(updatedEpisode)
      }

      const updatedList = state.downloads
      .filter(download => download.vod.vod_id !== targetVod.vod.vod_id) 
      .concat(updatedVod)

      return {
        downloads: updatedList
      }
    }

    case 'REMOVE_VIDEO_FROM_DOWNLOAD': {
      return {
        ...state, 

      }
    }
    case 'PAUSE_VIDEO_DOWNLOAD':{ 
      return {
        ...state, 

      }
    }
    case 'CANCEL_VIDEO_DOWNLOAD': {
      return {
        ...state, 

      }
    }
    default: {
      return state
    }
  }
}