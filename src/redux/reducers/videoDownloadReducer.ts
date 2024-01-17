import { DownloadVideoActionType } from "@type/actionTypes"
import { DownloadVideoReducerState, EpisodeDownloadType, VodDownloadType } from "@type/vodDownloadTypes"

const initialDownloadVideoState : DownloadVideoReducerState = {
  downloads: []
}

export function downloadVideoReducer(state = initialDownloadVideoState, action: DownloadVideoActionType){
  switch (action.type){
    case 'ADD_VIDEO_TO_DOWNLOAD': {
      const newVodDownload: VodDownloadType = {
        vod: action.payload.vod, 
        imagePath: '', 
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
        status: 'downloading', 
        sizeInBytes: 0, 
        videoPath: '', 
        vodSourceId: action.payload.vodSourceId, 
        vodUrlNid: action.payload.vodUrlNid
      }

      const concatEpisodeDownload = targetVod.episodes.concat(newEpisode)
      targetVod = {...targetVod, episodes: concatEpisodeDownload}

      const concatDownloadsList = state.downloads
        .map(download => download.vod.vod_id !== targetVod.vod.vod_id ? download : null)
        .filter(download => download) 
        .concat(targetVod)
        
      return {
        ...state, 
        downloads: concatDownloadsList
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