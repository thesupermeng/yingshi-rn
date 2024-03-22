import { FFmpegSession } from "ffmpeg-kit-react-native"
import { RBEmojiEwarded, XVSScoreDark } from "./wpk_long"
import { RAccepted } from "./jx_suggestion"

export interface MAgreement {
    type: string
}

export interface GCViews {
    type: string,
    payload: Array<XVSScoreDark>
    timeWatched?: number,
    episodeWatched?: number
    fromMiniVodCollectionItemIndex?: number
    miniVodCollectionItemIndex?: number,
    isAdultVideo?: boolean,
    vodSourceId?: number,
}

export interface MDSource {
    type: string,
    payload: XVSScoreDark
}

export interface SZCInfoTurn {
    type: string,
    payload: RBEmojiEwarded
}

export interface YJHMegaphone {
    type: string,
    payload: string
}

export interface YMath {
    type: string
}

export interface LGRefreshRedirect {
    type: string,
    payload?: any
}

export interface ETheme {
    type: string,
    payload?: string,
    fromMiniVodCollectionItemIndex?: number,
    miniVodCollectionItemIndex?: number
}

export interface QTHTyping {
    type: string,
    payload?: string,
    showFirstLaunchVIPPrompt: boolean
}

export interface RCCalendarMatches {
    imagePath?: string;
    videoPath?: string;
    progress?: {
        percentage?: number;
        bytes?: number;
    }
    sizeInBytes?: number; 
    status?: RAccepted; 
    ffmpegSession?: number | null; 
  }

export interface MCheckbox extends RCCalendarMatches {
    vod: XVSScoreDark;
    vodSourceId: number;
    vodUrlNid: number;
    vodIsAdult?: boolean; 
}

export interface DownloadVideoQueueItem extends Omit<MCheckbox, 'vod'> {
    vodId: number
}

export interface USXGesture {
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
  payload: MCheckbox;
}