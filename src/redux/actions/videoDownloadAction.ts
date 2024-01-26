import { DownloadVideoActionType, OptionalUpdateFields } from "@type/actionTypes";
import { VodType } from "@type/ajaxTypes";
import { concatPartialVideos, downloadVod, downloadVodImage, getUrlOfVod, pauseDownloadVod, resumeDownloadVod } from "../../utils/vodDownloader";
import { ThunkAction } from "redux-thunk";
import { DownloadStatus, DownloadVideoReducerState, EpisodeDownloadType, VodDownloadType } from "@type/vodDownloadTypes";
import { RootState } from "@redux/store";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility/constants";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegKit, FFmpegSession } from "ffmpeg-kit-react-native";
import { throttle } from "lodash";

function addVideoToDownload(vod: VodType, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean): DownloadVideoActionType {
  return {
    type: 'ADD_VIDEO_TO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
      vodIsAdult : vodIsAdult ?? false
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

function startVideoDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'START_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function endVideoDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
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

export function removeDownloadFromQueue(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'REMOVE_DOWNLOAD_FROM_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeVideoFromDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}


export function removeVodFromDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
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

function pauseVideoDownload(vod: VodType, vodSourceId: number, vodUrlNid: number): DownloadVideoActionType {
  return {
    type: 'PAUSE_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function startFirstVideoDownload(): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer;
    const firstVod = state.queue.at(0);
    if (!firstVod) return;
    dispatch(startVideoDownloadThunk(firstVod.vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
  }
}

function startVideoDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const throttledUpdate = throttle((percentage) => dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
      progress: {
        percentage: Math.min(percentage, 100)
      }
    })), 2000)
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      // console.debug('downloaded ', percentage, '%')
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
      // if (bytes !== undefined) {
      //   dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
      //     progress: {
      //       bytes: bytes
      //     }
      //   }))
      // }
    }

    const onDownloadEnd = () => {
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      const newState = getState().downloadVideoReducer
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(startFirstVideoDownload())
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (targetEpisode?.status === DownloadStatus.PAUSED){
        return 
      }
      // console.debug('download complete for ', vod.vod_name)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DownloadStatus.COMPLETED, 
        sizeInBytes: finalSizeInBytes, 
        progress: {
          percentage: 100
        }
      }))
      onDownloadEnd()
    }

    const handleError = () => {
      console.debug('error downloading ', vod.vod_name)
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (targetEpisode?.status === DownloadStatus.PAUSED){
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DownloadStatus.ERROR
      }))
      onDownloadEnd()
    }

    const handleSessionCreated = ({session}: {session: FFmpegSession}) => {
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {ffmpegSession: session.getSessionId()}))
    }

    const state = getState().downloadVideoReducer

    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, vodIsAdult)

    if (!url) return; 
    if (state.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return; 
    if (state.queue.length === 0) return; 

    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
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
  vodIsAdult?: boolean
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid, vodIsAdult));
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: DownloadStatus.DOWNLOADING}))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function removeVideoFromDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 
    const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return 

    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})
    const allSession = await FFmpegKit.listSessions() 
    for (const session of allSession) {
      if (await session.getSessionId() === targetEpisode.ffmpegSession){
        session.cancel(); 
      }
    }
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
      const allSession = await FFmpegKit.listSessions() 
      for (const session of allSession) {
        if (await session.getSessionId() === episode.ffmpegSession){
          session.cancel(); 
        }
      }
      dispatch(removeVideoFromDownloadThunk(vod, episode.vodSourceId, episode.vodUrlNid))
    }
    RNFetchBlob.fs.unlink(targetVod.imagePath).catch()
    dispatch(removeVodFromDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function clearQueueOnAppStart(): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: EpisodeDownloadType[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        if (episode.status === DownloadStatus.DOWNLOADING){
          RNFetchBlob.fs.unlink(episode.videoPath).catch()
          dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, {progress: {percentage: 0}, status: DownloadStatus.ERROR, ffmpegSession: null, sizeInBytes: 0}))
          // dispatch(addVideoToDownloadThunk(download.vod, episode.vodSourceId, episode.vodUrlNid))
        }
      }
    }

    dispatch(resetQueue())
  }
}

export function restartVideoDownloadThunk (
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid))
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
      progress: {
        percentage: 0
      }, 
      status: DownloadStatus.DOWNLOADING, 
      sizeInBytes: 0
    }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid))
  }
}

export function pauseVideoDownloadThunk (
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    dispatch(pauseVideoDownload(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid)) //* when pause video, remove it from the 'downloading' array

    const state = getState().downloadVideoReducer

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    for (const episode of targetVod.episodes) {
      // RNFetchBlob.fs.unlink(episode.videoPath).catch()
      const allSession = await FFmpegKit.listSessions() 
      for (const session of allSession) {
        if (session.getSessionId() === episode.ffmpegSession){
          await session.cancel(); 
        }
      }
    }

    await pauseDownloadVod(`${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, () => {})
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: DownloadStatus.PAUSED}))

  }
}

export function resumeVideoDownloadThunk(
  vod: VodType,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, RootState, any, DownloadVideoActionType> {
  return async function (dispatch, getState) {
    const initialState = getState().downloadVideoReducer
    const initialPercentage = initialState.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      ?.progress.percentage; 

    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, false)

    if (!url) return 

    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status:DownloadStatus.DOWNLOADING}))

    const throttledUpdate = throttle((percentage) => dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
      progress: {
        percentage: Math.min(initialPercentage + percentage, 100) //* because is resume, not restart 
      }
    })), 2000)
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
    }

    const onDownloadEnd = async () => {
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      const newState = getState().downloadVideoReducer
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(startFirstVideoDownload())
    }

    const handleError = () => {
      // console.debug('error downloading ', vod.vod_name)
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (targetEpisode?.status === DownloadStatus.PAUSED){
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DownloadStatus.ERROR
      }))
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (targetEpisode?.status === DownloadStatus.PAUSED){
        return 
      }
      concatPartialVideos(
        `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
        ()=>{
          dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
            status: DownloadStatus.COMPLETED, 
            sizeInBytes: finalSizeInBytes, 
            progress: {
              percentage: 100
            }
          }))
          onDownloadEnd()          
        }, 
        handleError
      )
    }

    const handleSessionCreated = ({session}: {session: FFmpegSession}) => {
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {ffmpegSession: session.getSessionId()}))
    }

    resumeDownloadVod(
      `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
      url, 
      handleUpdate, 
      handleComplete, 
      handleError, 
      handleSessionCreated, 
    )
  }
}