import { FFmpegSession } from "ffmpeg-kit-react-native"
import { ttGrayTarget, DownloadVideoQueueItem } from "./tt_history_upload"
import { ttAppsOther } from "./tt_line_borderless"

export enum ZRChinasame { 
  ZRSelectedBaidu, 
  ZRBackwardTemp, 
  ZRTrash, 
  ZRGoal,
  ZRControl
}

export interface ttFrame {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: ZRChinasame
  sizeInBytes: number
  videoPath: string
  vodSourceId: number 
  vodUrlNid: number 
  ffmpegSession?: number | null
}

export interface ttTumbnail {
  vod: ttAppsOther
  imagePath: string 
  episodes: ttFrame[]
  vodIsAdult: boolean
}

export interface ttMapping {
  downloads: Array<ttTumbnail>;
  currentDownloading: Array<DownloadVideoQueueItem>;
  queue: Array<DownloadVideoQueueItem>
}