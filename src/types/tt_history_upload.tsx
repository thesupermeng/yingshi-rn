import { FFmpegSession } from "ffmpeg-kit-react-native"
import { ttSport, ttAppsOther } from "./tt_line_borderless"
import { ZRChinasame } from "./tt_const_videocommon"

export interface ttHejiCross {
    type: string
}

export interface ttBecomeCheckbox {
    type: string,
    payload: Array<ttAppsOther>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
    vodSourceId?: number,
}

export interface ttRouter {
    type: string,
    payload: ttAppsOther
}

export interface ttBuild {
    type: string,
    payload: ttSport
}

export interface ttBodanMacau {
    type: string,
    payload: string
}

export interface ttHolder {
    type: string
}

export interface ttIncidentShrink {
    type: string,
    payload?: any
}

export interface ttWind {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface ttTime {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}

export interface ttGemfilePhone {
    imagePath?: string;
    videoPath?: string;
    progress?: {
        percentage?: number;
        bytes?: number;
    }
    sizeInBytes?: number; 
    status?: ZRChinasame; 
    ffmpegSession?: number | null; 
  }

export interface ttGrayTarget extends ttGemfilePhone {
    vod: ttAppsOther;
    vodSourceId: number;
    vodUrlNid: number;
    vodIsAdult?: boolean; 
}

export interface DownloadVideoQueueItem extends Omit<ttGrayTarget, 'vod'> {
    vodId: number
}

export interface ttPlaceholder {
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
  payload: ttGrayTarget;
}