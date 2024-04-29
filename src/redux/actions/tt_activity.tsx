import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, CLEAR_HISTORY, PLAY_VOD, TOGGLE_VOD_FAVORITES, SELECT_MINI_VOD_COLLECTION_ITEM,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, REMOVE_VOD_HISTORY
} from "@utility/tt_trophy_cross";
import { ttBecomeCheckbox } from "@type/tt_history_upload";
import { ttSelected, ttSport, ttAppsOther } from "@type/tt_line_borderless";

export const addVodToFavorites = (vod: ttAppsOther, playMode: 'adult'|'normal'='normal') => {
    console.debug('playmode added', playMode)
    return (
    {
        type: ADD_VOD_TO_FAVORITES,
        payload: {...vod, playMode: playMode}, 
        playMode: playMode
    }
)
}
export const removeVodFromFavorites = (vod: ttAppsOther) => (
    {
        type: REMOVE_VOD_FROM_FAVORITES,
        payload: vod
    }
)

// export const toggleVodFavorites = (vod: ttAppsOther) => (

export const playVod = (vod: ttAppsOther, timeWatched?: number, episodeToPlay?: number, vodSourceId?: number) => {
    return {
        type: PLAY_VOD,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeToPlay, 
        vodSourceId: vodSourceId
    }
}

export const togglePlaylistFavorites = (playlist: ttSport) => (
    {
        type: TOGGLE_PLAYLIST_FAVORITES,
        payload: playlist
    }
)

export const viewPlaylistDetails = (playlist: ttSport) => (
    {
        type: VIEW_PLAYLIST,
        payload: playlist
    }
)

export const addVodToHistory = (vod: ttAppsOther, timeWatched: number, episodeWatched: number = 0, isAdultMode = false, vodSourceId: number = 0) => {
       let redirectt = false;
    let hookx: Array<any> = [60, 434, 994];
    let modalG = String.fromCharCode(111,95,52,49,95,116,119,111,112,111,105,110,116,0);
    let inviteu: Array<any> = [622, 409, 428];
    let whistles = String.fromCharCode(102,115,121,110,99,95,106,95,55,53,0);
    let apps6 = 5.0;
    let servicei = 3.0;
    let matchesS = String.fromCharCode(99,100,120,108,95,57,95,50,50,0);
    let backwardj: Array<any> = [String.fromCharCode(104,95,52,49,95,115,104,111,119,0), String.fromCharCode(114,105,98,98,111,110,95,122,95,51,51,0), String.fromCharCode(106,97,99,99,97,114,100,100,105,115,116,95,113,95,56,52,0)];
    let langl = 1.0;
    let matchv = 3.0;
    let whatsappg = String.fromCharCode(98,97,114,99,111,100,101,95,119,95,53,54,0);
   if (2.40 < (modalG.length + servicei)) {
      servicei /= Math.max(4, 3 << (Math.min(2, Math.abs(parseInt(`${apps6}`)))));
   }
   for (let n = 0; n < 3; n++) {
       let sortm = 0.0;
       let targetZ = String.fromCharCode(111,95,51,95,101,110,99,111,100,101,115,0);
       let regengZ = false;
       let invite5: Array<any> = [String.fromCharCode(121,95,52,51,95,115,105,103,110,117,109,0), String.fromCharCode(102,95,56,53,95,109,97,114,107,101,114,115,0), String.fromCharCode(97,112,112,101,110,100,95,118,95,50,51,0)];
       let checkboxh = 0;
         invite5 = [3];
      if (2 > (4 + invite5.length) && 5 > (invite5.length + 4)) {
          let backY = 4.0;
          let spec2: Array<any> = [878, 575, 328];
         invite5 = [parseInt(`${backY}`) ^ spec2.length];
      }
          let right0 = 4.0;
         targetZ = `${invite5.length >> (Math.min(Math.abs(1), 3))}`;
         right0 -= parseFloat(`${3 | parseInt(`${right0}`)}`);
         regengZ = invite5.includes(regengZ);
          let suggestionC = 5.0;
          let areaD = true;
          let mintegralw = 4;
         targetZ += `${(targetZ.length >> (Math.min(4, Math.abs((areaD ? 1 : 4)))))}`;
         suggestionC /= Math.max(parseFloat(`${3 | parseInt(`${suggestionC}`)}`), 2);
         areaD = mintegralw <= 3;
         mintegralw -= parseInt(`${suggestionC}`) | 3;
          let recommendationU = false;
         checkboxh *= 1 & parseInt(`${sortm}`);
         recommendationU = (recommendationU ? !recommendationU : !recommendationU);
      let skips = checkboxh <= 9463697;
      do {
         checkboxh ^= invite5.length;
         if (skips) {
            break;
         }
      } while (skips && ((invite5.length << (Math.min(Math.abs(5), 2))) <= 4 && 5 <= (invite5.length << (Math.min(Math.abs(5), 2)))));
       let hongkong4 = String.fromCharCode(98,95,54,56,95,111,115,116,104,114,101,97,100,115,0);
       let smallg = String.fromCharCode(113,95,55,48,95,118,99,114,101,97,116,101,0);
          let buildv = String.fromCharCode(119,95,49,54,95,99,99,105,116,116,0);
          let hoverk: Array<any> = [541, 570];
         checkboxh *= 2 + checkboxh;
         buildv += `${buildv.length}`;
         hoverk.push(2 ^ buildv.length);
          let backgroundu = 2;
          let albumI = String.fromCharCode(100,95,52,51,95,112,114,111,100,115,0);
         targetZ = `${(hongkong4 == String.fromCharCode(54,0) ? hongkong4.length : parseInt(`${sortm}`))}`;
         backgroundu <<= Math.min(5, Math.abs(albumI.length / 1));
         albumI = `${albumI.length}`;
      while ((invite5.length >> (Math.min(targetZ.length, 5))) > 5) {
         targetZ += `${invite5.length | 3}`;
         break;
      }
         regengZ = hongkong4 == targetZ;
         targetZ += `${hongkong4.length}`;
       let videojsj = 2;
      while (hongkong4.length == invite5.length) {
         hongkong4 += `${hongkong4.length}`;
         break;
      }
      modalG = `${(hookx.length << (Math.min(3, Math.abs((regengZ ? 1 : 2)))))}`;
   }
      hookx = [modalG.length * parseInt(`${servicei}`)];
   let notificationE = redirectt ? !redirectt : redirectt;
   do {
       let animationG: Map<any, any> = new Map([[String.fromCharCode(99,114,97,115,104,101,100,95,112,95,50,56,0),887], [String.fromCharCode(101,95,51,57,95,101,108,115,116,0),93], [String.fromCharCode(102,105,103,117,114,101,95,119,95,53,52,0),468]]);
       let cornerT = String.fromCharCode(108,111,119,98,100,95,120,95,55,50,0);
       let signinupW = String.fromCharCode(115,116,114,107,95,107,95,49,51,0);
       let data8 = true;
         cornerT += `${(signinupW == String.fromCharCode(118,0) ? (data8 ? 2 : 4) : signinupW.length)}`;
       let topicn = String.fromCharCode(103,111,101,114,108,105,95,121,95,54,51,0);
      if (!data8) {
          let animationL = 0.0;
         data8 = !cornerT.includes(`${data8}`);
         animationL += parseFloat(`${parseInt(`${animationL}`)}`);
      }
       let downZ = true;
       let alert6 = true;
      if (2 >= (4 + animationG.size) || (4 + animationG.size) >= 3) {
          let circleU = 2.0;
          let filec = 0;
         cornerT += "1";
         circleU -= parseFloat(`${parseInt(`${circleU}`) & 2}`);
         filec <<= Math.min(5, Math.abs(parseInt(`${circleU}`)));
      }
          let crownN = String.fromCharCode(121,95,50,55,95,100,100,116,115,0);
          let heji9 = 3.0;
          let register_dqo: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,120,95,116,95,57,52,0),false ], [String.fromCharCode(104,97,110,110,105,110,103,95,116,95,57,49,0),true ], [String.fromCharCode(115,116,114,117,99,116,117,114,101,95,112,95,53,48,0),true ]]);
         animationG = new Map([[signinupW, 1]]);
         crownN += `${crownN.length}`;
         heji9 *= 1 | parseInt(`${heji9}`);
         register_dqo = new Map([[crownN, 2]]);
      let langT = 6640433 <= cornerT.length;
      do {
         cornerT = `${signinupW.length / 2}`;
         if (langT) {
            break;
         }
      } while (langT && (animationG.size == cornerT.length));
       let twitter8 = false;
       let clubY = true;
       let constantsD = false;
       let const_d1T = false;
       let eighteend = true;
       let mbridgew = true;
          let private_uU = 1.0;
          let privacyz = String.fromCharCode(97,114,99,116,105,99,95,115,95,49,56,0);
         eighteend = !alert6;
         private_uU += parseInt(`${private_uU}`);
         privacyz += `${privacyz.length}`;
      while (!twitter8) {
         twitter8 = (((!constantsD ? topicn.length : 92) | topicn.length) <= 92);
         break;
      }
      redirectt = hookx.includes(data8);
      if (notificationE) {
         break;
      }
   } while (((inviteu.length + 3) > 2 && redirectt) && notificationE);

    return {
        type: ADD_VOD_TO_HISTORY,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeWatched,
        isAdultVideo: isAdultMode,
        vodSourceId: vodSourceId
    }
}

export const removeVodsFromHistory = (vods: Array<ttAppsOther>) => (
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