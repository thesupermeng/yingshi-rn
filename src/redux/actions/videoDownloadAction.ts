import { DownloadVideoActionType } from "@type/actionTypes";
import { VodType } from "@type/ajaxTypes";
import { downloadVod, downloadVodImage } from "../../utils/vodDownloader";
import { ThunkAction } from "redux-thunk";
import { DownloadVideoReducerState } from "@type/vodDownloadTypes";
import { RootState } from "@redux/store";

function addVideoToDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'ADD_VIDEO_TO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid
    }
  }
}

// function updateImagePath(vod: VodType, filepath: string): DownloadVideoActionType{

//   return {
//     type: 'UPDATE_VOD_IMAGE', 
//     payload: {
//       vod: vod, 
//       vodSourceId: NaN, // doesnt matter
//       vodUrlNid: NaN, // doesnt matter 
//       imagePath: filepath
//     }
//   }
// }

function getUrlOfVod(vod: VodType, vodSourceId: number, vodUrlNid: number) {
  console.log(vod)
  return vod.vod_sources
    .find(source => source.source_id === vodSourceId)?.vod_play_list.urls
    .find(url => url.nid === vodUrlNid)
    ?.url

}

export function addVideoToDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid));
    await downloadVodImage(vod);
    // here can dispatch updateImagePath () //
    
    downloadVod(
      `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
      getUrlOfVod(vod, vodSourceId, vodUrlNid), 
      ({percentage}) => {console.debug('downloaded', percentage)}, 
      () => console.debug('download complete for ', vod.vod_name), 
      () => console.debug('error downloading ', vod.vod_name)
    )

  };
}