import { DownloadVideoActionType, OptionalUpdateFields } from "@type/actionTypes";
import { VodType } from "@type/ajaxTypes";
import { downloadVod, downloadVodImage } from "../../utils/vodDownloader";
import { ThunkAction } from "redux-thunk";
import { DownloadStatus, DownloadVideoReducerState, EpisodeDownloadType, VodDownloadType } from "@type/vodDownloadTypes";
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

function updateVideoDownload(vod: VodType, vodSourceId: number, vodUrlNid: number, optional: OptionalUpdateFields): DownloadVideoActionType {
  return {
    type: "UPDATE_VIDEO_DOWNLOAD", 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
      ...optional
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
  // console.log(vod)
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

    const handleUpdate = ({percentage}: {percentage: number}) => {
      // console.debug('downloaded ', percentage, '%')
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        progress: {
          percentage: percentage
        }
      }))
    }

    const handleComplete = () => {
      console.debug('download complete for ', vod.vod_name)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DownloadStatus.COMPLETED
      }))
    }

    const handleError = () => {
      console.debug('error downloading ', vod.vod_name)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DownloadStatus.ERROR
      }))
    }

    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid)

    if (!url) return; 
    
    downloadVod(
      `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
      url, 
      handleUpdate, 
      handleComplete, 
      handleError
    )

  };
}