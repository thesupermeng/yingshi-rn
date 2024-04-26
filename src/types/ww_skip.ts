import { FFmpegSession } from "ffmpeg-kit-react-native"
import { wwCountryStatic, DownloadVideoQueueItem } from "./ww_bang"
import { wwControl } from "./ww_dycreator_result"

export enum DVGGrayTeamdetailsbg { 
  DVGNalyticsTextinput, 
  DVGUpgradeLibfbjni, 
  DVGButton, 
  DVGCurrent,
  DVGRoom
}

export interface wwAndroid {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: DVGGrayTeamdetailsbg
  sizeInBytes: number
  videoPath: string
  vodSourceId: number 
  vodUrlNid: number 
  ffmpegSession?: number | null
}

export interface wwTextinputDirect {
  vod: wwControl
  imagePath: string 
  episodes: wwAndroid[]
  vodIsAdult: boolean
}

export interface wwResendTextlayoutmanager {
  downloads: Array<wwTextinputDirect>;
  currentDownloading: Array<DownloadVideoQueueItem>;
  queue: Array<DownloadVideoQueueItem>
}