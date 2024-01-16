import { VodType } from "./ajaxTypes"

export interface VodDownloadModel {
  progress: {
    percentage: number, 
    bytes: number
  }
  status: 'downloading' | 'paused' | 'cancelled' | 'error'
  sizeInBytes: number
  videoPath: string
  imagePath: string 
  vod: VodType
  vodSourceId: number // determine the source
  vodUrlNid: number // determine the episode

}