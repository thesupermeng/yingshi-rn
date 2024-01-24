import { FFmpegSession } from "ffmpeg-kit-react-native"
import { DownloadVideoActionPayload } from "./actionTypes"
import { VodType } from "./ajaxTypes"

export enum DownloadStatus { 
  DOWNLOADING, 
  PAUSED, 
  CANCELLED, 
  ERROR,
  COMPLETED
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
  ffmpegSession?: number | null
}

export interface VodDownloadType {
  vod: VodType
  imagePath: string 
  episodes: EpisodeDownloadType[]
  vodIsAdult: boolean
}

export interface DownloadVideoReducerState {
  downloads: Array<VodDownloadType>;
  currentDownloading: Array<DownloadVideoActionPayload>;
  queue: Array<DownloadVideoActionPayload>
}