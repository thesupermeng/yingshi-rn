import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, CLEAR_HISTORY, PLAY_VOD, TOGGLE_VOD_FAVORITES, SELECT_MINI_VOD_COLLECTION_ITEM,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, REMOVE_VOD_HISTORY
} from "@utility/mayi_middleware_apps";
import { mayi_PromotionComponent } from "@type/mayi_analytic_half";
import { mayi_PrivacyImage, mayi_Runtime, mayi_EmptyGradle } from "@type/mayi_green";

export const addVodToFavorites = (vod: mayi_EmptyGradle, playMode: 'adult'|'normal'='normal') => {
    console.debug('playmode added', playMode)
    return (
    {
        type: ADD_VOD_TO_FAVORITES,
        payload: {...vod, playMode: playMode}, 
        playMode: playMode
    }
)
}
export const removeVodFromFavorites = (vod: mayi_EmptyGradle) => (
    {
        type: REMOVE_VOD_FROM_FAVORITES,
        payload: vod
    }
)

// export const toggleVodFavorites = (vod: mayi_EmptyGradle) => (

export const playVod = (vod: mayi_EmptyGradle, timeWatched?: number, episodeToPlay?: number, vodSourceId?: number) => {
    return {
        type: PLAY_VOD,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeToPlay, 
        vodSourceId: vodSourceId
    }
}

export const togglePlaylistFavorites = (playlist: mayi_Runtime) => (
    {
        type: TOGGLE_PLAYLIST_FAVORITES,
        payload: playlist
    }
)

export const viewPlaylistDetails = (playlist: mayi_Runtime) => (
    {
        type: VIEW_PLAYLIST,
        payload: playlist
    }
)

export const addVodToHistory = (vod: mayi_EmptyGradle, timeWatched: number, episodeWatched: number = 0, isAdultMode = false, vodSourceId: number = 0) => {
       let rewindA = 0.0;
    let mimeB = String.fromCharCode(114,101,103,95,112,95,49,50,0);
    let componentc = String.fromCharCode(105,110,99,114,98,108,111,98,95,104,95,53,51,0);
    let dicew = true;
    let libswresamplef = String.fromCharCode(118,115,97,100,95,122,95,50,51,0);
    let becomeY = true;
    let redirectw = String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,119,95,54,52,0);
    let container8 = String.fromCharCode(109,95,51,51,95,115,111,114,101,99,101,105,118,101,0);
    let iconlogoutR: Map<any, any> = new Map([[String.fromCharCode(116,95,50,95,109,97,112,108,105,109,105,116,0),204], [String.fromCharCode(98,95,54,54,95,100,105,97,103,111,110,97,108,0),164]]);
    let libglogR = String.fromCharCode(117,112,99,97,108,108,95,51,95,57,52,0);
    let codegenM = 1.0;
   if (container8 == String.fromCharCode(73,0)) {
      libswresamplef += `${(String.fromCharCode(55,0) == libswresamplef ? (becomeY ? 4 : 4) : libswresamplef.length)}`;
   }
   if (componentc.length > 2) {
      componentc = `${2 << (Math.min(5, libswresamplef.length))}`;
   }
      rewindA += 3 >> (Math.min(1, redirectw.length));
   while (mimeB != libswresamplef) {
      libswresamplef += `${libswresamplef.length & mimeB.length}`;
      break;
   }

    return {
        type: ADD_VOD_TO_HISTORY,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeWatched,
        isAdultVideo: isAdultMode,
        vodSourceId: vodSourceId
    }
}

export const removeVodsFromHistory = (vods: Array<mayi_EmptyGradle>) => (
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