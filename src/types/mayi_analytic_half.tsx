import { FFmpegSession } from "ffmpeg-kit-react-native"
import { mayi_Runtime, mayi_EmptyGradle } from "./mayi_green"
import { CUASheetIconarrowright } from "./mayi_agreement"

export interface mayi_Langkey {
    type: string
}

export interface mayi_PromotionComponent {
    type: string,
    payload: Array<mayi_EmptyGradle>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
    vodSourceId?: number,
}

export interface mayi_LibapminsightaPlayer {
    type: string,
    payload: mayi_EmptyGradle
}

export interface mayi_DownDefaultfootballbg {
    type: string,
    payload: mayi_Runtime
}

export interface mayi_MbsplashStats {
    type: string,
    payload: string
}

export interface mayi_IconscheduleRoot {
    type: string
}

export interface mayi_StylesList {
    type: string,
    payload?: any
}

export interface mayi_Close {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface mayi_China {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}

export interface mayi_Mini {
    imagePath?: string;
    videoPath?: string;
    progress?: {
        percentage?: number;
        bytes?: number;
    }
    sizeInBytes?: number; 
    status?: CUASheetIconarrowright; 
    ffmpegSession?: number | null; 
  }

export interface mayi_AdultIconsharefriends extends mayi_Mini {
    vod: mayi_EmptyGradle;
    vodSourceId: number;
    vodUrlNid: number;
    vodIsAdult?: boolean; 
}

export interface DownloadVideoQueueItem extends Omit<mayi_AdultIconsharefriends, 'vod'> {
    vodId: number
}

export interface mayi_Catagory {
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
  payload: mayi_AdultIconsharefriends;
}