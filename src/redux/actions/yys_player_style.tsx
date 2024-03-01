import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, CLEAR_HISTORY, PLAY_VOD, TOGGLE_VOD_FAVORITES, SELECT_MINI_VOD_COLLECTION_ITEM,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, REMOVE_VOD_HISTORY
} from "@utility/yys_ajax_switch";
import { yys_AndroidConfigure } from "@type/yys_basketball";
import { yys_Gemfile, yys_BrightnessCopy, yys_Bing } from "@type/yys_libzeus";

export const addVodToFavorites = (vod: yys_Bing, playMode: 'adult'|'normal'='normal') => {
    console.debug('playmode added', playMode)
    return (
    {
        type: ADD_VOD_TO_FAVORITES,
        payload: {...vod, playMode: playMode}, 
        playMode: playMode
    }
)
}
export const removeVodFromFavorites = (vod: yys_Bing) => (
    {
        type: REMOVE_VOD_FROM_FAVORITES,
        payload: vod
    }
)

// export const toggleVodFavorites = (vod: yys_Bing) => (

export const playVod = (vod: yys_Bing, timeWatched?: number, episodeToPlay?: number, vodSourceId?: number) => {
    return {
        type: PLAY_VOD,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeToPlay, 
        vodSourceId: vodSourceId
    }
}

export const togglePlaylistFavorites = (playlist: yys_BrightnessCopy) => (
    {
        type: TOGGLE_PLAYLIST_FAVORITES,
        payload: playlist
    }
)

export const viewPlaylistDetails = (playlist: yys_BrightnessCopy) => (
    {
        type: VIEW_PLAYLIST,
        payload: playlist
    }
)

export const addVodToHistory = (vod: yys_Bing, timeWatched: number, episodeWatched: number = 0, isAdultMode = false, vodSourceId: number = 0) => {
       let dialog3: Array<any> = [196, 145, 119];
    let xadsdkq: Array<any> = [167, 258];
    let kuaishoub: Array<any> = [822, 782, 607];
    let windN = 3.0;
    let dpluse: Map<any, any> = new Map([[String.fromCharCode(109,115,115,100,115,112,95,102,95,49,52,0),305], [String.fromCharCode(105,110,116,109,97,116,104,95,109,95,55,0),682]]);
    let windu = false;
    let rewindg = String.fromCharCode(97,95,53,51,95,98,112,117,116,115,0);
    let homeZ = 4.0;
    let emojiC = String.fromCharCode(104,95,49,49,95,102,105,110,105,115,104,0);
   if ((xadsdkq.length >> (Math.min(Math.abs(5), 2))) == 2) {
      xadsdkq = [2];
   }
   let chinasameI = windu ? !windu : windu;
   do {
      windu = kuaishoub.length > 61;
      if (chinasameI) {
         break;
      }
   } while (chinasameI && (windu));
      windN += 2;
      windu = xadsdkq.length >= 12;

    return {
        type: ADD_VOD_TO_HISTORY,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeWatched,
        isAdultVideo: isAdultMode,
        vodSourceId: vodSourceId
    }
}

export const removeVodsFromHistory = (vods: Array<yys_Bing>) => (
    {
        type: REMOVE_VOD_HISTORY,
        payload: vods
    }
)

export const clearHistory = () => (
    {
        type: CLEAR_HISTORY,
        payload: null
    }
)