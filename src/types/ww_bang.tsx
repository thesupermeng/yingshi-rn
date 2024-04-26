import { FFmpegSession } from "ffmpeg-kit-react-native"
import { wwFirebase, wwControl } from "./ww_dycreator_result"
import { DVGGrayTeamdetailsbg } from "./ww_skip"

export interface wwAlbumProfileinactive {
    type: string
}

export interface wwStationsConstants {
    type: string,
    payload: Array<wwControl>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
    vodSourceId?: number,
}

export interface wwLibreactnativeblob {
    type: string,
    payload: wwControl
}

export interface wwVideovar {
    type: string,
    payload: wwFirebase
}

export interface wwZoomInvite {
    type: string,
    payload: string
}

export interface wwTelegramTeamdetailsbg {
    type: string
}

export interface wwStoreAnalytic {
    type: string,
    payload?: any
}

export interface wwMinimize {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface wwData {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}

export interface wwCountryService {
    imagePath?: string;
    videoPath?: string;
    progress?: {
        percentage?: number;
        bytes?: number;
    }
    sizeInBytes?: number; 
    status?: DVGGrayTeamdetailsbg; 
    ffmpegSession?: number | null; 
  }

export interface wwCountryStatic extends wwCountryService {
    vod: wwControl;
    vodSourceId: number;
    vodUrlNid: number;
    vodIsAdult?: boolean; 
}

export interface DownloadVideoQueueItem extends Omit<wwCountryStatic, 'vod'> {
    vodId: number
}

export interface wwMoon {
  type:
    | 'ADD_VIDEO_TO_DOWNLOAD'
    | 'REMOVE_VIDEO_FROM_DOWNLOAD'
    | 'REMOVE_VOD_FROM_DOWNLOAD'
    | 'PAUSE_VIDEO_DOWNLOAD'
    
    | 'UPDATE_VIDEO_DOWNLOAD'
    | 'START_VIDEO_DOWNLOAD'
    | 'END_VIDEO_DOWNLOAD'
    | 'ADD_DOWNLOAD_TO_QUEUE'
    | 'REMOVE_DOWNLOAD_FROM_QUEUE'
    | 'RESET_QUEUE'
    | 'UPDATE_VOD_DETAILS'
    ;
  payload: wwCountryStatic;
}