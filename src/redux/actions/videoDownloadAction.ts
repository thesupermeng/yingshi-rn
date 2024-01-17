import { DownloadVideoActionType } from "@type/actionTypes";
import { VodType } from "@type/ajaxTypes";

export function addVideoToDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  // TODO : add download for vod image 
  return {
    type: 'ADD_VIDEO_TO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid
    }
  }
}