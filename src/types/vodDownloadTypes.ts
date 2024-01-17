import { VodType } from "./ajaxTypes"

export interface EpisodeDownloadType {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: 'downloading' | 'paused' | 'cancelled' | 'error'
  sizeInBytes: number
  videoPath: string
  vodSourceId: number // determine the source
  vodUrlNid: number // determine the episode

}

export interface VodDownloadType {
  vod: VodType
  imagePath: string 
  episodes: EpisodeDownloadType[]
}

export interface DownloadVideoReducerState {
  downloads: Array<VodDownloadType>
}