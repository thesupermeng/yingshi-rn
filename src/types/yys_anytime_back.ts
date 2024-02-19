import { FFmpegSession } from "ffmpeg-kit-react-native"
import { yysLeakcheckerIconstar, DownloadVideoQueueItem } from "./yys_reminder"
import { yysPenaltyshoot } from "./yys_ajax"

export enum IConfirmationLibffmpegkit { 
  ICrown, 
  IRedirectLibyoga, 
  IFootballfield, 
  IRightTerms,
  IPointStar
}

export interface yysEdit {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: IConfirmationLibffmpegkit
  sizeInBytes: number
  videoPath: string
  vodSourceId: number 
  vodUrlNid: number 
  ffmpegSession?: number | null
}

export interface yysStoreService {
  vod: yysPenaltyshoot
  imagePath: string 
  episodes: yysEdit[]
  vodIsAdult: boolean
}

export interface yysStatistics {
  downloads: Array<yysStoreService>;
  currentDownloading: Array<DownloadVideoQueueItem>;
  queue: Array<DownloadVideoQueueItem>
}