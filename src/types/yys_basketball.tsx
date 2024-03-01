import { FFmpegSession } from "ffmpeg-kit-react-native"
import { yys_BrightnessCopy, yys_Bing } from "./yys_libzeus"
import { MARTextinputBackground } from "./yys_fast"

export interface yys_LoginPlayercommon {
    type: string
}

export interface yys_AndroidConfigure {
    type: string,
    payload: Array<yys_Bing>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
    vodSourceId?: number,
}

export interface yys_StoreTooltips {
    type: string,
    payload: yys_Bing
}

export interface yys_Cricket {
    type: string,
    payload: yys_BrightnessCopy
}

export interface yys_MiniOverlay {
    type: string,
    payload: string
}

export interface yys_Gradle {
    type: string
}

export interface yys_RegisterUpgrade {
    type: string,
    payload?: any
}

export interface yys_Reminder {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface yys_Mode {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}

export interface yys_SkipSide {
    imagePath?: string;
    videoPath?: string;
    progress?: {
        percentage?: number;
        bytes?: number;
    }
    sizeInBytes?: number; 
    status?: MARTextinputBackground; 
    ffmpegSession?: number | null; 
  }

export interface yys_Megaphone extends yys_SkipSide {
    vod: yys_Bing;
    vodSourceId: number;
    vodUrlNid: number;
    vodIsAdult?: boolean; 
}

export interface DownloadVideoQueueItem extends Omit<yys_Megaphone, 'vod'> {
    vodId: number
}

export interface yys_ServiceViews {
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
  payload: yys_Megaphone;
}