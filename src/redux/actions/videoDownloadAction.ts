import { DownloadVideoActionType, OptionalUpdateFields } from "@type/actionTypes";
import { VodType } from "@type/ajaxTypes";
import { downloadVod, downloadVodImage } from "../../utils/vodDownloader";
import { ThunkAction } from "redux-thunk";
import { DownloadStatus, DownloadVideoReducerState, EpisodeDownloadType, VodDownloadType } from "@type/vodDownloadTypes";
import { RootState } from "@redux/store";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility/constants";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegSession } from "ffmpeg-kit-react-native";

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

export function startVideoDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'START_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function endVideoDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'END_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function addDownloadToQueue(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'ADD_DOWNLOAD_TO_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function removeVideoFromDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}


function removeVodFromDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'REMOVE_VOD_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function resetQueue(): DownloadVideoActionType {
  return {
    type: "RESET_QUEUE",
    // @ts-ignore 
    payload: null // TODO : fix this type 
  }
}

export function startFirstVideoDownload(): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer;
    const firstVod = state.queue.at(0);
    if (!firstVod) return;
    dispatch(startVideoDownloadThunk(firstVod.vod, firstVod.vodSourceId, firstVod.vodUrlNid))
  }
}

function getUrlOfVod(vod: VodType, vodSourceId: number, vodUrlNid: number) {
  // console.log(vod)
  return vod.vod_sources
    .find(source => source.source_id === vodSourceId)?.vod_play_list.urls
    .find(url => url.nid === vodUrlNid)
    ?.url

}

export function startVideoDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const handleUpdate = ({percentage}: {percentage: number}) => {
      // console.debug('downloaded ', percentage, '%')
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        progress: {
          percentage: percentage
        }
      }))
    }

    const onDownloadEnd = () => {
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      const newState = getState().downloadVideoReducer
      if (newState.queue.length === 0) return
      if (newState.currentDownloading >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(startFirstVideoDownload())
    }

    const handleComplete = (finalSizeInBytes: number) => {
      console.debug('download complete for ', vod.vod_name)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DownloadStatus.COMPLETED, 
        sizeInBytes: finalSizeInBytes
      }))
      onDownloadEnd()
    }

    const handleError = () => {
      console.debug('error downloading ', vod.vod_name)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DownloadStatus.ERROR
      }))
      onDownloadEnd()
    }

    const handleSessionCreated = ({session}: {session: FFmpegSession}) => {
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {ffmpegSession: session}))
    }

    const state = getState().downloadVideoReducer

    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid)

    if (!url) return; 
    if (state.currentDownloading >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return; 
    if (state.queue.length === 0) return; 

    dispatch(startVideoDownload(vod, vodSourceId, vodUrlNid))
    downloadVod(
      `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
      url, 
      handleUpdate, 
      handleComplete, 
      handleError, 
      handleSessionCreated
    )
  
  }
}

export function addVideoToDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid));
    await downloadVodImage(vod);
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid))


  };
}

export function removeVideoFromDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 
    const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return 

    await RNFetchBlob.fs.unlink(targetEpisode.videoPath)
    dispatch(removeVideoFromDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function removeVodFromDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    for (const episode of targetVod.episodes) {
      await RNFetchBlob.fs.unlink(episode.videoPath)
    }
    await RNFetchBlob.fs.unlink(targetVod.imagePath)
    dispatch(removeVodFromDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function clearQueueOnAppStart(): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: EpisodeDownloadType[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        RNFetchBlob.fs.unlink(episode.videoPath)
        dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, {progress: {percentage: 0}, status: DownloadStatus.ERROR, ffmpegSession: null, sizeInBytes: 0}))
      }
    }

    dispatch(resetQueue())
  }
}