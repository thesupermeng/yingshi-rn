import { FFmpegSession } from "ffmpeg-kit-react-native"
import { wawaWithCrown, wawaSellProfileinactive } from "./wawa_gradlew"
import { KVCarouselSort } from "./wawa_emojiheart_alert"

export interface wawaPolicyRelated {
    type: string
}

export interface wawaDark {
    type: string,
    payload: Array<wawaSellProfileinactive>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
    vodSourceId?: number,
}

export interface wawaRead {
    type: string,
    payload: wawaSellProfileinactive
}

export interface wawaImagemanager {
    type: string,
    payload: wawaWithCrown
}

export interface wawaChinasameIncident {
    type: string,
    payload: string
}

export interface wawaNext {
    type: string
}

export interface wawaSubsFlag {
    type: string,
    payload?: any
}

export interface wawaWifirouter {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface wawaUpdatesFootballfield {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}

export interface wawaIconstar {
    imagePath?: string;
    videoPath?: string;
    progress?: {
        percentage?: number;
        bytes?: number;
    }
    sizeInBytes?: number; 
    status?: KVCarouselSort; 
    ffmpegSession?: number | null; 
  }

export interface wawaCancelConfirmation extends wawaIconstar {
    vod: wawaSellProfileinactive;
    vodSourceId: number;
    vodUrlNid: number;
    vodIsAdult?: boolean; 
}

export interface DownloadVideoQueueItem extends Omit<wawaCancelConfirmation, 'vod'> {
    vodId: number
}

export interface wawaPackage {
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
  payload: wawaCancelConfirmation;
}