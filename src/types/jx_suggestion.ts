import { FFmpegSession } from "ffmpeg-kit-react-native"
import { MCheckbox, DownloadVideoQueueItem } from "./qkf_bell"
import { XVSScoreDark } from "./wpk_long"

export enum RAccepted { 
  RUnselectedDropdown, 
  REditGoal, 
  RDownloadedSound, 
  RPoint,
  RClearModels
}

export interface VMReportConstants {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: RAccepted
  sizeInBytes: number
  videoPath: string
  vodSourceId: number 
  vodUrlNid: number 
  ffmpegSession?: number | null
}

export interface ALaunchShrink {
  vod: XVSScoreDark
  imagePath: string 
  episodes: VMReportConstants[]
  vodIsAdult: boolean
}

export interface BUZTyping {
  downloads: Array<ALaunchShrink>;
  currentDownloading: Array<DownloadVideoQueueItem>;
  queue: Array<DownloadVideoQueueItem>
}