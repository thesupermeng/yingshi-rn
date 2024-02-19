import { FFmpegSession } from "ffmpeg-kit-react-native"
import { yysArrowup, yysPenaltyshoot } from "./yys_ajax"
import { IConfirmationLibffmpegkit } from "./yys_anytime_back"

export interface yysTrash {
    type: string
}

export interface yysTypes {
    type: string,
    payload: Array<yysPenaltyshoot>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
    vodSourceId?: number,
}

export interface yysSearchbar {
    type: string,
    payload: yysPenaltyshoot
}

export interface yysBackwardConfig {
    type: string,
    payload: yysArrowup
}

export interface yysChart {
    type: string,
    payload: string
}

export interface yysHomeLibfb {
    type: string
}

export interface yysStation {
    type: string,
    payload?: any
}

export interface yysLibavdevice {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface yysBaiduads {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}

export interface yysAppsRenew {
    imagePath?: string;
    videoPath?: string;
    progress?: {
        percentage?: number;
        bytes?: number;
    }
    sizeInBytes?: number; 
    status?: IConfirmationLibffmpegkit; 
    ffmpegSession?: number | null; 
  }

export interface yysLeakcheckerIconstar extends yysAppsRenew {
    vod: yysPenaltyshoot;
    vodSourceId: number;
    vodUrlNid: number;
    vodIsAdult?: boolean; 
}

export interface DownloadVideoQueueItem extends Omit<yysLeakcheckerIconstar, 'vod'> {
    vodId: number
}

export interface yysRegister {
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
  payload: yysLeakcheckerIconstar;
}