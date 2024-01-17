import { DownloadVideoActionType } from "@type/actionTypes";
import { VodType } from "@type/ajaxTypes";

export function addVideoToDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType{
  return {
    type: 'ADD_VIDEO_TO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid
    }
  }
}