import { VodType } from "./ajaxTypes"

export enum DownloadStatus { 
  DOWNLOADING, 
  PAUSED, 
  CANCELLED, 
  ERROR,
}

export interface EpisodeDownloadType {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: DownloadStatus
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