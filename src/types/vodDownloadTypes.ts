import { FFmpegSession } from "ffmpeg-kit-react-native"
import { DownloadVideoActionPayload, DownloadVideoQueueItem } from "./actionTypes"
import { Vod } from "@models"

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
  vod: Vod
  imagePath: string
  episodes: EpisodeDownloadType[]
  vodIsAdult: boolean
}

export interface DownloadVideoReducerState {
  downloads: Array<VodDownloadType>;
  currentDownloading: Array<DownloadVideoQueueItem>;
  queue: Array<DownloadVideoQueueItem>
}