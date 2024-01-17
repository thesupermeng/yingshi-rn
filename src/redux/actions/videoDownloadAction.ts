import { DownloadVideoActionType } from "@type/actionTypes";
import { VodType } from "@type/ajaxTypes";
import { downloadVodImage } from "../../utils/vodDownloader";
import { ThunkAction } from "redux-thunk";
import { DownloadVideoReducerState } from "@type/vodDownloadTypes";
import { RootState } from "@redux/store";

function addVideoToDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  // TODO : add download for vod image 
  downloadVodImage(vod)

  return {
    type: 'ADD_VIDEO_TO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid
    }
  }
}

export function addVideoToDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    await downloadVodImage(vod);
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid));

  };
}