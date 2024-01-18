import { FFmpegSession } from "ffmpeg-kit-react-native"
import { VodTopicType, VodType } from "./ajaxTypes"
import { DownloadStatus } from "./vodDownloadTypes"

export interface ThemeActionType {
    type: string
}

export interface VodActionType {
    type: string,
    payload: Array<VodType>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
    vodSourceId?: number,
}

export interface FavoriteVodActionType {
    type: string,
    payload: VodType
}

export interface VodPlaylistActionType {
    type: string,
    payload: VodTopicType
}

export interface SearchHistoryActionType {
    type: string,
    payload: string
}

export interface ClearStorageActionType {
    type: string
}

export interface SettingsActionType {
    type: string,
    payload?: any
}

export interface MiniVodActionType {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface OneTimeActionActionType {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}

export interface OptionalUpdateFields {
    imagePath?: string;
    videoPath?: string;
    progress?: {
        percentage?: number;
        bytes?: number;
    }
    sizeInBytes?: number; 
    status?: DownloadStatus; 
    ffmpegSession?: FFmpegSession; 
  }

export interface DownloadVideoActionPayload extends OptionalUpdateFields {
    vod: VodType;
    vodSourceId: number;
    vodUrlNid: number;
}

export interface DownloadVideoActionType {
  type:
    | 'ADD_VIDEO_TO_DOWNLOAD'
    | 'REMOVE_VIDEO_FROM_DOWNLOAD'
    | 'REMOVE_VOD_FROM_DOWNLOAD'
    | 'PAUSE_VIDEO_DOWNLOAD'
    | 'CANCEL_VIDEO_DOWNLOAD'
    | 'UPDATE_VIDEO_DOWNLOAD'
    | 'START_VIDEO_DOWNLOAD'
    | 'END_VIDEO_DOWNLOAD'
    | 'ADD_DOWNLOAD_TO_QUEUE'
    ;
  payload: DownloadVideoActionPayload;
}