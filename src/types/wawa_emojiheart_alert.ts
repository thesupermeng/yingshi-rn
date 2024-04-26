import { FFmpegSession } from "ffmpeg-kit-react-native"
import { wawaCancelConfirmation, DownloadVideoQueueItem } from "./wawa_reward_logo"
import { wawaSellProfileinactive } from "./wawa_gradlew"

export enum KVCarouselSort { 
  KVIconchatsend, 
  KVSharemodal, 
  KVMiddlesound, 
  KVFlipperForward,
  KVImagesPlaceholder
}

export interface wawaGemfileFinal {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: KVCarouselSort
  sizeInBytes: number
  videoPath: string
  vodSourceId: number 
  vodUrlNid: number 
  ffmpegSession?: number | null
}

export interface wawaWhiteanimationlive {
  vod: wawaSellProfileinactive
  imagePath: string 
  episodes: wawaGemfileFinal[]
  vodIsAdult: boolean
}

export interface wawaModalEpisode {
  downloads: Array<wawaWhiteanimationlive>;
  currentDownloading: Array<DownloadVideoQueueItem>;
  queue: Array<DownloadVideoQueueItem>
}