import { FFmpegSession } from "ffmpeg-kit-react-native"
import { mayi_AdultIconsharefriends, DownloadVideoQueueItem } from "./mayi_analytic_half"
import { mayi_EmptyGradle } from "./mayi_green"

export enum CUASheetIconarrowright { 
  CUAAudienceUmeng, 
  CUATextlayoutmanagerLibreactperfloggerjni, 
  CUASettingsIconwatch, 
  CUAFlipperTurndown,
  CUAAttributedstring
}

export interface mayi_EmptySmall {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: CUASheetIconarrowright
  sizeInBytes: number
  videoPath: string
  vodSourceId: number 
  vodUrlNid: number 
  ffmpegSession?: number | null
}

export interface mayi_CurrentFootball {
  vod: mayi_EmptyGradle
  imagePath: string 
  episodes: mayi_EmptySmall[]
  vodIsAdult: boolean
}

export interface mayi_Prediction {
  downloads: Array<mayi_CurrentFootball>;
  currentDownloading: Array<DownloadVideoQueueItem>;
  queue: Array<DownloadVideoQueueItem>
}