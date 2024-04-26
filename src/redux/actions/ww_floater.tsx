import {
    ADD_VOD_TO_FAVORITES, REMOVE_VOD_FROM_FAVORITES, CLEAR_HISTORY, PLAY_VOD, TOGGLE_VOD_FAVORITES, SELECT_MINI_VOD_COLLECTION_ITEM,
    TOGGLE_PLAYLIST_FAVORITES, VIEW_PLAYLIST, ADD_VOD_TO_HISTORY, REMOVE_VOD_HISTORY
} from "@utility/ww_icon";
import { wwStationsConstants } from "@type/ww_bang";
import { wwWith, wwFirebase, wwControl } from "@type/ww_dycreator_result";
import { SUFloatingManifest } from "@redux/reducers/ww_shared";

export const addVodToFavorites = (vod: wwControl, playMode: 'adult' | 'normal' = 'normal') => {
    console.debug('playmode added', playMode)
    return (
        {
            type: ADD_VOD_TO_FAVORITES,
            payload: { ...vod, playMode: playMode },
            playMode: playMode
        }
    )
}
export const removeVodFromFavorites = (vod: wwControl) => (
    {
        type: REMOVE_VOD_FROM_FAVORITES,
        payload: vod
    }
)

// export const toggleVodFavorites = (vod: wwControl) => (

export const playVod = (vod: wwControl, timeWatched?: number, episodeToPlay?: number, vodSourceId?: number) => {
    return {
        type: PLAY_VOD,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeToPlay,
        vodSourceId: vodSourceId
    }
}

export const togglePlaylistFavorites = (playlist: wwFirebase) => (
    {
        type: TOGGLE_PLAYLIST_FAVORITES,
        payload: playlist
    }
)

export const viewPlaylistDetails = (playlist: wwFirebase) => (
    {
        type: VIEW_PLAYLIST,
        payload: playlist
    }
)

export const addVodToHistory = (vod: wwControl, timeWatched: number, episodeWatched: number = 0, isAdultMode = false, vodSourceId: number = 0) => {
       let iconmorem: Array<any> = [535, 956];
    let toponC = 0;
    let thailandO = 1.0;
    let footballw = 4.0;
    let downarrowZ: Map<any, any> = new Map([[String.fromCharCode(121,95,55,49,95,115,99,97,108,101,100,0),109], [String.fromCharCode(109,118,115,97,100,95,120,95,55,51,0),894]]);
    let moviesy = 2.0;
    let iconbellactivel: Map<any, any> = new Map([[String.fromCharCode(118,95,52,56,95,116,110,112,117,116,0),674], [String.fromCharCode(103,109,116,105,109,101,95,53,95,56,50,0),24], [String.fromCharCode(97,100,100,105,110,103,95,97,95,54,49,0),699]]);
    let arrowup2 = 1.0;
    let reactw: Map<any, any> = new Map([[String.fromCharCode(97,95,50,52,95,116,105,99,107,101,114,115,0),170], [String.fromCharCode(99,95,54,55,95,110,111,116,105,99,101,115,0),631]]);
    let imagemanagerb = String.fromCharCode(112,95,56,95,98,117,99,107,101,116,0);
    let predictionactive6 = String.fromCharCode(99,95,56,48,95,105,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
    let sendn = String.fromCharCode(113,95,55,51,95,97,114,98,105,116,101,114,0);
    let libavutilg: Array<any> = [951, 516, 392];
    let livenodatabgimga = true;
    let foregroundm = String.fromCharCode(98,95,55,50,95,112,105,120,101,108,117,116,105,108,115,0);
       let regengJ: Map<any, any> = new Map([[String.fromCharCode(110,95,52,53,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0),String.fromCharCode(106,95,54,51,95,112,111,105,110,116,101,114,0)], [String.fromCharCode(100,105,118,105,100,105,110,103,95,100,95,49,48,0),String.fromCharCode(99,95,51,53,95,98,117,105,108,100,115,0)]]);
       let binddatasN = String.fromCharCode(116,95,51,54,95,118,105,115,105,116,111,114,0);
      if (binddatasN.includes(`${regengJ.size}`)) {
         binddatasN += `${binddatasN.length << (Math.min(Math.abs(1), 5))}`;
      }
          let homey: Array<any> = [625, 345, 587];
         regengJ.set(`${homey.length}`, 3);
       let stationsX = 1.0;
       let root8 = 3.0;
      if (2.32 >= (stationsX * 1.0)) {
          let shrinkH = 5;
          let privilegeZ = 3;
          let editg: Array<any> = [412, 922];
          let searchW = 1;
         binddatasN = `${parseInt(`${stationsX}`) ^ 3}`;
         shrinkH ^= privilegeZ;
         privilegeZ -= editg.length >> (Math.min(5, Math.abs(searchW)));
         editg = [privilegeZ << (Math.min(5, Math.abs(searchW)))];
      }
      let foregroundA = 9388355 >= regengJ.size;
      do {
         regengJ = new Map([[`${regengJ.size}`, regengJ.size]]);
         if (foregroundA) {
            break;
         }
      } while ((4 >= (binddatasN.length / 3) || 2 >= (binddatasN.length / (Math.max(3, 1)))) && foregroundA);
         stationsX /= Math.max((String.fromCharCode(112,0) == binddatasN ? binddatasN.length : parseInt(`${root8}`)), 4);
      reactw.set(`${arrowup2}`, binddatasN.length + 1);
   for (let d = 0; d < 1; d++) {
       let referrerV: Array<any> = [String.fromCharCode(109,95,54,55,95,100,98,111,111,108,104,117,102,102,0), String.fromCharCode(113,95,56,49,95,99,111,109,112,97,114,101,112,111,119,0)];
       let gemfilee: Map<any, any> = new Map([[String.fromCharCode(120,95,56,53,95,101,109,117,108,97,116,101,0),480], [String.fromCharCode(98,101,105,103,110,101,116,95,117,95,49,55,0),705]]);
       let baselineI = 2.0;
       let libfabricjniF = String.fromCharCode(99,95,50,56,95,115,101,99,111,110,100,112,97,115,115,0);
         referrerV.push(gemfilee.size ^ parseInt(`${baselineI}`));
      while ((gemfilee.size / 4) > 4 && 2 > (4 / (Math.max(1, referrerV.length)))) {
          let screenv = 3.0;
          let searchf = String.fromCharCode(103,95,56,53,95,117,110,122,105,112,0);
         gemfilee.set(libfabricjniF, (libfabricjniF == String.fromCharCode(79,0) ? libfabricjniF.length : gemfilee.size));
         screenv *= (String.fromCharCode(112,0) == searchf ? searchf.length : parseInt(`${screenv}`));
         break;
      }
       let saveC = 2;
         baselineI *= parseFloat(`${1 % (Math.max(7, libfabricjniF.length))}`);
      let telegrama = 5267033 >= libfabricjniF.length;
      do {
          let iconclosewhitebgw = String.fromCharCode(111,95,57,48,95,99,111,110,116,111,108,108,101,114,0);
          let libimagepipeline9 = String.fromCharCode(101,110,100,95,97,95,49,52,0);
          let h_positionm = String.fromCharCode(100,95,56,52,95,103,101,110,101,114,97,116,111,114,0);
          let acceptedu = String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,95,52,95,51,48,0);
          let subtextQ = 2;
         libfabricjniF = `${(String.fromCharCode(114,0) == acceptedu ? acceptedu.length : iconclosewhitebgw.length)}`;
         iconclosewhitebgw = `${(String.fromCharCode(66,0) == libimagepipeline9 ? libimagepipeline9.length : h_positionm.length)}`;
         h_positionm = `${libimagepipeline9.length}`;
         subtextQ *= h_positionm.length ^ 3;
         if (telegrama) {
            break;
         }
      } while (telegrama && (libfabricjniF.endsWith(`${baselineI}`)));
          let rewindx: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,117,99,116,95,52,95,57,0),843], [String.fromCharCode(98,95,54,48,95,117,112,97,116,101,100,0),456], [String.fromCharCode(99,95,49,49,95,109,101,109,110,114,0),836]]);
         libfabricjniF = `${libfabricjniF.length | gemfilee.size}`;
         rewindx.set(`${rewindx.size}`, rewindx.size / 2);
      if (5 >= (2 + referrerV.length) || 5 >= (2 + libfabricjniF.length)) {
         referrerV = [gemfilee.size + 1];
      }
          let defaultfootballbg0: Map<any, any> = new Map([[String.fromCharCode(109,110,101,109,111,110,105,99,95,101,95,52,53,0),true ], [String.fromCharCode(106,95,50,57,95,97,108,116,0),false ]]);
          let incidentT = 4.0;
         baselineI *= parseFloat(`${3 ^ defaultfootballbg0.size}`);
         defaultfootballbg0 = new Map([[`${incidentT}`, parseInt(`${incidentT}`) >> (Math.min(5, Math.abs(parseInt(`${incidentT}`))))]]);
      moviesy -= parseFloat(`${downarrowZ.size << (Math.min(Math.abs(iconbellactivel.size), 4))}`);
   }
      iconbellactivel = new Map([[`${iconbellactivel.size}`, iconbellactivel.size - imagemanagerb.length]]);
       let verticalr: Array<any> = [695, 726];
       let downs = String.fromCharCode(114,95,57,56,95,97,98,99,115,0);
       let iconnointernetb: Array<any> = [963, 72, 595];
      let logouseri = verticalr.length <= 7095063;
      do {
          let lineX = String.fromCharCode(108,95,54,56,95,99,108,117,116,115,0);
          let gesturesR = 1;
          let resends: Map<any, any> = new Map([[String.fromCharCode(116,111,114,101,100,95,120,95,51,0),String.fromCharCode(122,95,57,95,112,114,105,110,116,101,100,0)], [String.fromCharCode(114,116,99,95,108,95,53,55,0),String.fromCharCode(98,95,54,53,95,115,117,98,118,105,101,119,0)], [String.fromCharCode(99,97,108,108,115,95,117,95,50,48,0),String.fromCharCode(99,95,48,95,117,110,99,108,97,109,112,101,100,0)]]);
         verticalr = [2];
         lineX += `${resends.size % 3}`;
         gesturesR *= 3 * resends.size;
         if (logouseri) {
            break;
         }
      } while (logouseri && ((verticalr.length & 4) > 5 && (4 & verticalr.length) > 3));
      let hookv = downs.length >= 5016686;
      do {
          let settingJ = String.fromCharCode(107,95,50,57,95,105,109,112,111,114,116,101,114,0);
          let mapbufferW = String.fromCharCode(119,95,55,51,95,117,110,112,97,99,107,104,105,0);
          let eyeopeni = String.fromCharCode(111,95,55,56,95,104,119,100,101,118,105,99,101,0);
         downs += `${(String.fromCharCode(89,0) == eyeopeni ? iconnointernetb.length : eyeopeni.length)}`;
         settingJ += `${1 & mapbufferW.length}`;
         mapbufferW = `${(String.fromCharCode(105,0) == settingJ ? settingJ.length : mapbufferW.length)}`;
         if (hookv) {
            break;
         }
      } while ((!downs.startsWith(`${verticalr.length}`)) && hookv);
         verticalr = [1];
      while ((4 | downs.length) >= 4) {
         downs = `${iconnointernetb.length}`;
         break;
      }
      let canvaso = 8377885 >= verticalr.length;
      do {
         verticalr = [downs.length >> (Math.min(2, verticalr.length))];
         if (canvaso) {
            break;
         }
      } while (((1 ^ downs.length) >= 1 || 4 >= (1 ^ downs.length)) && canvaso);
      if (3 >= (iconnointernetb.length << (Math.min(Math.abs(1), 3))) && 5 >= (1 << (Math.min(1, downs.length)))) {
         downs = `${downs.length & iconnointernetb.length}`;
      }
       let mode0 = 5;
       let libreactnativeblobB = 1;
       let interstitial2 = String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,95,57,95,57,55,0);
       let transferL = String.fromCharCode(99,104,97,112,116,101,114,115,95,51,95,54,51,0);
         interstitial2 = "1";
      arrowup2 += downarrowZ.size ^ iconnointernetb.length;
   let manifest6 = iconmorem.length >= 8001785;
   do {
      iconmorem.push(2);
      if (manifest6) {
         break;
      }
   } while (manifest6 && (Array.from(downarrowZ.keys()).includes(`${iconmorem.length}`)));
      reactw.set(`${toponC}`, toponC * 3);
      sendn = `${iconbellactivel.size / (Math.max(5, iconmorem.length))}`;

    return {
        type: ADD_VOD_TO_HISTORY,
        payload: [vod],
        timeWatched: timeWatched,
        episodeWatched: episodeWatched,
        isAdultVideo: isAdultMode,
        vodSourceId: vodSourceId
    }
}

export const removeVodsFromHistory = (vods: Array<wwControl>) => (
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

export const onViewShortVod = () => (
    {
        type: SUFloatingManifest.SUJingdong,
    }
)