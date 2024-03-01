import { FFmpegSession } from "ffmpeg-kit-react-native"
import { yys_Megaphone, DownloadVideoQueueItem } from "./yys_basketball"
import { yys_Bing } from "./yys_libzeus"

export enum MARTextinputBackground { 
  MARRewardvideoBell, 
  MARInjuryModels, 
  MARSpecProject, 
  MARGpayMintegral,
  MARLibjsi
}

export interface yys_Xvod {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: MARTextinputBackground
  sizeInBytes: number
  videoPath: string
  vodSourceId: number 
  vodUrlNid: number 
  ffmpegSession?: number | null
}

export interface yys_LibsgcorePath {
  vod: yys_Bing
  imagePath: string 
  episodes: yys_Xvod[]
  vodIsAdult: boolean
}

export interface yys_TypeSelection {
  downloads: Array<yys_LibsgcorePath>;
  currentDownloading: Array<DownloadVideoQueueItem>;
  queue: Array<DownloadVideoQueueItem>
}