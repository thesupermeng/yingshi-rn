import { wawaPackage, wawaIconstar } from "@type/wawa_reward_logo";
import { wawaSellProfileinactive } from "@type/wawa_gradlew";
import { concatPartialVideos, downloadVod, downloadVodImage, getUrlOfVod, pauseDownloadVod, resumeDownloadVod } from "../../utils/wawa_matches";
import { ThunkAction } from "redux-thunk";
import { KVCarouselSort, wawaModalEpisode, wawaGemfileFinal, wawaWhiteanimationlive } from "@type/wawa_emojiheart_alert";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility/wawa_iconpointscore";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegKit, FFmpegSession } from "ffmpeg-kit-react-native";
import { throttle } from "lodash";
import { wawaUsernameAdult } from "../../api/wawa_root_textinput";

function addVideoToDownload(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean): wawaPackage {
  return {
    type: 'ADD_VIDEO_TO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
      vodIsAdult : vodIsAdult ?? false
    }
  }
}

function updateVideoDownload(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number, optional: wawaIconstar): wawaPackage {
  return {
    type: "UPDATE_VIDEO_DOWNLOAD", 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
      ...optional
    }
  }
}

function startVideoDownload(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number): wawaPackage {
  return {
    type: 'START_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function endVideoDownload(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number): wawaPackage {
  return {
    type: 'END_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function addDownloadToQueue(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number): wawaPackage {
  return {
    type: 'ADD_DOWNLOAD_TO_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeDownloadFromQueue(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number): wawaPackage {
  return {
    type: 'REMOVE_DOWNLOAD_FROM_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeVideoFromDownload(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number): wawaPackage {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}


export function removeVodFromDownload(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number): wawaPackage {
  return {
    type: 'REMOVE_VOD_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function resetQueue(): wawaPackage {
  return {
    type: "RESET_QUEUE",
    
    payload: null 
  }
}

function pauseVideoDownload(vod: wawaSellProfileinactive, vodSourceId: number, vodUrlNid: number): wawaPackage {
  return {
    type: 'PAUSE_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function updateVodDetails(vod: wawaSellProfileinactive): wawaPackage {
  return {
    type: 'UPDATE_VOD_DETAILS', 
    payload: {
      vod, 
      vodSourceId: 0, 
      vodUrlNid: 0, 
    }
  }
}

function startFirstVideoDownload(): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer;
    const firstVod = state.queue.at(0);
    if (!firstVod) return;
    console.debug('first vod is adult',firstVod.vodIsAdult)
    const vod = state.downloads.find(x => x.vod.vod_id === firstVod.vodId)?.vod
    if (!vod) return; 
    dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
  }
}

function resumeFirstVideoDownload(): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer;
    const firstVod = state.queue.at(0);
    if (!firstVod) return;
    const vod = state.downloads.find(x => x.vod.vod_id === firstVod.vodId)?.vod
    if (!vod) return; 
    
    const firstVodProgressPercentage = state.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodUrlNid === firstVod.vodUrlNid && x.vodSourceId === firstVod.vodSourceId)
      ?.progress.percentage

    if (firstVodProgressPercentage === 0){
       let crossv = 5.0;
    let iconchatsendG = String.fromCharCode(117,95,49,49,95,100,112,99,109,0);
    let orangeclockJ = String.fromCharCode(103,97,117,115,115,95,106,95,53,49,0);
    let questiconN: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,101,95,116,95,53,53,0),918], [String.fromCharCode(101,97,99,104,95,56,95,55,57,0),389], [String.fromCharCode(102,114,97,109,101,99,114,99,95,101,95,55,49,0),274]]);
    let indicatorS = String.fromCharCode(120,95,51,56,95,104,112,105,99,0);
    let smallbrightnessF = String.fromCharCode(112,114,101,99,101,110,99,101,95,112,95,51,0);
    let transferq = 4.0;
    let actionz = String.fromCharCode(103,122,105,112,112,101,100,95,105,95,53,54,0);
    let iconarrowrightq = 4;
    let catalogI = String.fromCharCode(106,95,57,95,115,116,97,114,116,109,97,114,107,101,114,0);
      questiconN.set(`${transferq}`, parseInt(`${transferq}`) * 2);
      smallbrightnessF = `${(String.fromCharCode(75,0) == orangeclockJ ? iconchatsendG.length : orangeclockJ.length)}`;
      questiconN.set(actionz, parseInt(`${crossv}`) & actionz.length);
      iconchatsendG += `${parseInt(`${crossv}`) << (Math.min(Math.abs(parseInt(`${transferq}`)), 1))}`;
      orangeclockJ += `${1 >> (Math.min(3, smallbrightnessF.length))}`;
      actionz += `${(indicatorS == String.fromCharCode(76,0) ? parseInt(`${crossv}`) : indicatorS.length)}`;
   let eventsplash0 = transferq >= 9166887.0;
   do {
      transferq += parseFloat(`${actionz.length}`);
      if (eventsplash0) {
         break;
      }
   } while (eventsplash0 && (5.0 >= transferq));
      transferq += parseFloat(`${orangeclockJ.length >> (Math.min(Math.abs(2), 3))}`);
   if ((iconarrowrightq * 4) <= 1 || (4 * orangeclockJ.length) <= 5) {
       let dycreatorm = 0;
       let basketballmatchdetailbgS = 5.0;
         basketballmatchdetailbgS += parseFloat(`${dycreatorm ^ 3}`);
         basketballmatchdetailbgS /= Math.max(4, parseFloat(`${parseInt(`${basketballmatchdetailbgS}`) & 3}`));
          let lang6: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,105,115,107,101,121,95,49,95,55,48,0),519], [String.fromCharCode(114,101,102,108,95,108,95,53,49,0),726]]);
          let side3 = String.fromCharCode(115,101,116,115,111,99,107,111,112,116,95,109,95,50,55,0);
          let floatinga = String.fromCharCode(101,95,56,57,95,116,106,98,101,110,99,104,116,101,115,116,0);
         basketballmatchdetailbgS /= Math.max(5, parseFloat(`${parseInt(`${basketballmatchdetailbgS}`)}`));
         lang6 = new Map([[`${lang6.size}`, 3 + lang6.size]]);
         side3 += `${3 | side3.length}`;
         floatinga = `${side3.length ^ lang6.size}`;
       let coreF = String.fromCharCode(117,95,50,56,95,105,100,101,110,116,105,102,105,97,98,108,101,0);
         coreF += `${dycreatorm | parseInt(`${basketballmatchdetailbgS}`)}`;
      let predictionbannersharedF = String.fromCharCode(122,48,101,49,110,114,109,113,113,50,0) == coreF;
      do {
         coreF += `${parseInt(`${basketballmatchdetailbgS}`) ^ 3}`;
         if (predictionbannersharedF) {
            break;
         }
      } while (predictionbannersharedF && (3 < coreF.length));
      orangeclockJ += `${dycreatorm >> (Math.min(4, Math.abs(2)))}`;
   }
   while (crossv >= 3.67) {
      indicatorS = `${iconchatsendG.length % (Math.max(1, smallbrightnessF.length))}`;
      break;
   }
      crossv -= parseFloat(`${parseInt(`${crossv}`) ^ iconchatsendG.length}`);
       let cancel_ = 2.0;
       let moonb = String.fromCharCode(102,95,54,57,95,98,105,110,107,0);
      let moonj = cancel_ >= 9527291.0;
      do {
          let colorsc: Map<any, any> = new Map([[String.fromCharCode(119,95,55,52,95,105,100,97,116,0),957], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,106,95,54,53,0),744], [String.fromCharCode(113,95,56,49,95,104,105,110,116,101,100,0),961]]);
          let teamT: Array<any> = [740, 165];
          let release_2N = 3.0;
         cancel_ -= parseInt(`${cancel_}`) % (Math.max(1, colorsc.size));
         colorsc = new Map([[`${teamT.length}`, parseInt(`${release_2N}`)]]);
         teamT = [parseInt(`${release_2N}`) + 3];
         if (moonj) {
            break;
         }
      } while ((2 >= moonb.length) && moonj);
          let downarrowc = String.fromCharCode(120,99,116,101,115,116,95,53,95,52,0);
          let scorepopsoundY = String.fromCharCode(115,117,98,112,97,116,104,95,112,95,53,51,0);
         cancel_ -= parseInt(`${cancel_}`);
         downarrowc += `${scorepopsoundY.length}`;
         scorepopsoundY += `${downarrowc.length | scorepopsoundY.length}`;
         moonb = `${parseInt(`${cancel_}`)}`;
      for (let l = 0; l < 2; l++) {
         cancel_ /= Math.max(3, 2);
      }
       let libswscalei = String.fromCharCode(101,120,112,101,99,116,95,115,95,53,49,0);
         libswscalei += `${libswscalei.length}`;
      crossv *= parseFloat(`${parseInt(`${transferq}`)}`);
       let iconwatchk = String.fromCharCode(116,101,120,116,117,114,101,100,95,50,95,51,52,0);
       let actionsG = true;
       let connectione = String.fromCharCode(106,95,52,50,95,115,111,117,114,99,101,115,0);
      for (let k = 0; k < 2; k++) {
         actionsG = (43 > (connectione.length / (Math.max(1, (actionsG ? 43 : connectione.length)))));
      }
         iconwatchk += `${(1 >> (Math.min(2, Math.abs((actionsG ? 4 : 4)))))}`;
      if (actionsG) {
         actionsG = connectione.length == 80 && !actionsG;
      }
         connectione += `${connectione.length}`;
         actionsG = iconwatchk.startsWith(`${actionsG}`);
         actionsG = !actionsG;
       let predictionu: Map<any, any> = new Map([[String.fromCharCode(109,110,101,109,111,110,105,99,95,102,95,57,50,0),889], [String.fromCharCode(120,95,49,49,95,114,101,99,101,110,116,101,114,0),954], [String.fromCharCode(113,95,56,55,95,116,105,109,101,119,97,105,116,0),978]]);
      let grayQ = 8670928 >= iconwatchk.length;
      do {
         iconwatchk += `${predictionu.size}`;
         if (grayQ) {
            break;
         }
      } while (grayQ && (2 > iconwatchk.length && !actionsG));
       let componentsr = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,110,95,49,52,0);
      smallbrightnessF += `${2 | iconarrowrightq}`;
   let toponK = String.fromCharCode(48,50,95,112,49,118,57,106,48,0) == iconchatsendG;
   do {
      iconchatsendG += `${3 % (Math.max(3, smallbrightnessF.length))}`;
      if (toponK) {
         break;
      }
   } while (((5.68 + transferq) <= 3.72 && 5.68 <= (parseFloat(`${iconchatsendG.length}`) + transferq)) && toponK);
      indicatorS = "2";
      crossv *= parseFloat(`${2 >> (Math.min(4, indicatorS.length))}`);
   for (let c = 0; c < 2; c++) {
      iconarrowrightq += iconarrowrightq - iconchatsendG.length;
   }
   let tumbnailP = smallbrightnessF == String.fromCharCode(98,109,50,50,49,114,51,100,52,108,0);
   do {
       let loginv = 5.0;
       let signinupS = 3.0;
       let suggestionc: Map<any, any> = new Map([[String.fromCharCode(109,110,101,109,111,110,105,99,95,97,95,57,55,0),197], [String.fromCharCode(114,95,53,57,95,100,114,98,103,0),592]]);
       let unimplementedviewC = 1.0;
      for (let r = 0; r < 3; r++) {
         signinupS += 1 % (Math.max(parseInt(`${signinupS}`), 10));
      }
      let penaltyZ = 6301449.0 >= signinupS;
      do {
         signinupS -= suggestionc.size;
         if (penaltyZ) {
            break;
         }
      } while (penaltyZ && (3.83 >= (signinupS + unimplementedviewC) || (unimplementedviewC + 3.83) >= 2.89));
       let areaP = String.fromCharCode(98,95,52,50,95,116,114,97,110,115,105,116,105,111,110,0);
       let x_centerd = String.fromCharCode(110,95,51,48,95,107,105,108,111,98,121,116,101,0);
      for (let v = 0; v < 1; v++) {
          let modelsu = 2.0;
         unimplementedviewC /= Math.max(parseFloat(`${1}`), 2);
         modelsu *= parseFloat(`${parseInt(`${modelsu}`)}`);
      }
      while ((parseInt(`${unimplementedviewC}`) - suggestionc.size) == 4 || (suggestionc.size * 4) == 3) {
         unimplementedviewC *= parseFloat(`${2 % (Math.max(7, parseInt(`${unimplementedviewC}`)))}`);
         break;
      }
      for (let j = 0; j < 3; j++) {
         x_centerd += `${(x_centerd == String.fromCharCode(117,0) ? parseInt(`${loginv}`) : x_centerd.length)}`;
      }
          let disconnectedlogo4 = String.fromCharCode(106,114,101,102,95,55,95,55,57,0);
         areaP += `${suggestionc.size - 1}`;
         disconnectedlogo4 += `${1 ^ disconnectedlogo4.length}`;
      while (2 < (1 + areaP.length) && (areaP.length << (Math.min(Math.abs(1), 2))) < 2) {
         areaP += `${parseInt(`${signinupS}`)}`;
         break;
      }
         suggestionc.set(`${signinupS}`, suggestionc.size << (Math.min(Math.abs(1), 5)));
       let inouttargetredC = String.fromCharCode(98,95,52,95,111,110,116,97,99,116,115,0);
         areaP = `${suggestionc.size}`;
      if (x_centerd.length < inouttargetredC.length) {
         x_centerd = `${suggestionc.size}`;
      }
      smallbrightnessF += `${(String.fromCharCode(122,0) == orangeclockJ ? orangeclockJ.length : questiconN.size)}`;
      if (tumbnailP) {
         break;
      }
   } while (tumbnailP && (smallbrightnessF.endsWith(`${iconarrowrightq}`)));
      smallbrightnessF = `${iconarrowrightq - indicatorS.length}`;

      dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    } else {
      dispatch(resumeVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    }
  }
}

function startVideoDownloadThunk(
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === KVCarouselSort.KVIconchatsend){
       let icontransferclubF = String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,116,95,53,49,0);
    let iconadslinkO: Array<any> = [979, 839];
    let dacccfaabfbcbadeebddcabacdffdbe = String.fromCharCode(115,111,117,110,100,95,114,95,53,0);
    let shielddoneG = String.fromCharCode(110,95,55,54,95,112,114,105,110,116,0);
    let chinat = 5.0;
    let mail2 = String.fromCharCode(106,95,55,95,112,114,111,103,114,101,115,105,118,101,0);
    let combineS = String.fromCharCode(114,95,53,50,95,112,111,115,116,102,105,120,0);
    let short_uM = 0.0;
    let moditym: Map<any, any> = new Map([[String.fromCharCode(100,101,108,111,103,111,95,111,95,56,55,0),665], [String.fromCharCode(115,112,97,99,101,95,109,95,51,0),604]]);
    let uimanagerf = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,95,49,95,49,49,0);
    let servicec: Array<any> = [312, 738];
    let libavformatP = String.fromCharCode(103,100,105,103,114,97,98,95,113,95,48,0);
    let smallsoundI = String.fromCharCode(97,97,99,99,111,100,101,114,95,53,95,50,57,0);
    let scorepopsoundS = String.fromCharCode(114,111,117,116,101,115,95,112,95,51,51,0);
   let largesoundV = 9121624 <= uimanagerf.length;
   do {
      uimanagerf = `${servicec.length * dacccfaabfbcbadeebddcabacdffdbe.length}`;
      if (largesoundV) {
         break;
      }
   } while (largesoundV && (uimanagerf.length < combineS.length));
   for (let g = 0; g < 2; g++) {
      dacccfaabfbcbadeebddcabacdffdbe += `${1 | iconadslinkO.length}`;
   }
      iconadslinkO = [1];
   for (let e = 0; e < 3; e++) {
      mail2 += "1";
   }
   for (let r = 0; r < 1; r++) {
      dacccfaabfbcbadeebddcabacdffdbe += `${dacccfaabfbcbadeebddcabacdffdbe.length}`;
   }
      iconadslinkO = [parseInt(`${short_uM}`)];
   let x_animation2 = 5522922 <= icontransferclubF.length;
   do {
       let downloadedI = String.fromCharCode(101,97,99,104,95,116,95,55,55,0);
      let injuryJ = downloadedI.length >= 6625364;
      do {
          let tempnodatar = String.fromCharCode(119,95,51,95,118,97,114,105,97,98,105,108,105,116,121,0);
          let mathT = 5.0;
         downloadedI += `${(String.fromCharCode(80,0) == tempnodatar ? tempnodatar.length : parseInt(`${mathT}`))}`;
         if (injuryJ) {
            break;
         }
      } while ((downloadedI != String.fromCharCode(68,0) && downloadedI.length < 5) && injuryJ);
      while (!downloadedI.includes(downloadedI)) {
         downloadedI += "1";
         break;
      }
          let imagenomoredataf = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,95,53,95,50,52,0);
         downloadedI = `${downloadedI.length}`;
         imagenomoredataf += "1";
      icontransferclubF += `${(String.fromCharCode(120,0) == uimanagerf ? parseInt(`${chinat}`) : uimanagerf.length)}`;
      if (x_animation2) {
         break;
      }
   } while (x_animation2 && (icontransferclubF == String.fromCharCode(80,0) && shielddoneG.length == 5));
   if (3.62 > (chinat / (Math.max(shielddoneG.length, 4))) || (parseInt(`${chinat}`) / (Math.max(shielddoneG.length, 7))) > 3) {
      shielddoneG = `${combineS.length}`;
   }
   if (combineS.length <= 2) {
      uimanagerf += `${(dacccfaabfbcbadeebddcabacdffdbe == String.fromCharCode(74,0) ? parseInt(`${chinat}`) : dacccfaabfbcbadeebddcabacdffdbe.length)}`;
   }

        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(percentage, 100)
          }
        }))
      }
    }, 2000)
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
      
      
      
      
      
      
      
    }

    const onDownloadEnd = () => {
       let heji5 = String.fromCharCode(101,110,99,111,100,101,109,118,95,101,95,50,51,0);
    let spinners = String.fromCharCode(115,95,57,53,95,112,97,116,116,101,114,110,115,0);
    let iconuserK: Array<any> = [515, 775, 340];
    let unfillB = String.fromCharCode(120,100,97,105,95,113,95,53,49,0);
    let thailandt = 0;
    let register_us = String.fromCharCode(115,112,111,116,108,105,103,104,116,95,101,95,52,55,0);
    let greenarrowupk: Map<any, any> = new Map([[String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,95,49,95,55,56,0),533], [String.fromCharCode(115,95,49,95,115,105,110,101,119,105,110,0),278], [String.fromCharCode(118,105,98,114,97,116,101,95,52,95,51,48,0),680]]);
    let qaagu = false;
    let time_b8 = 2.0;
      unfillB += `${(String.fromCharCode(53,0) == register_us ? register_us.length : unfillB.length)}`;
      qaagu = 31 >= heji5.length;
      iconuserK = [iconuserK.length >> (Math.min(register_us.length, 4))];
      iconuserK = [register_us.length / 3];
   let castingm = 8017855 <= iconuserK.length;
   do {
      iconuserK.push((String.fromCharCode(77,0) == unfillB ? unfillB.length : iconuserK.length));
      if (castingm) {
         break;
      }
   } while (castingm && (!qaagu));
      heji5 = `${register_us.length | spinners.length}`;
   for (let e = 0; e < 2; e++) {
       let halffieldimageu = String.fromCharCode(116,95,49,95,114,101,102,114,101,115,104,0);
       let imagesp = String.fromCharCode(114,101,112,111,114,116,101,100,95,53,95,55,55,0);
       let hejiP = String.fromCharCode(112,114,111,100,117,99,116,95,116,95,55,54,0);
       let roboto9 = 0;
       let read6 = String.fromCharCode(101,110,116,114,111,112,121,109,118,95,118,95,51,49,0);
      for (let h = 0; h < 3; h++) {
          let imagesv = String.fromCharCode(117,95,50,57,95,99,101,108,101,98,114,97,116,101,0);
          let mbjscommonr = false;
          let styleX: Map<any, any> = new Map([[String.fromCharCode(107,105,99,107,101,100,95,49,95,50,57,0),610], [String.fromCharCode(114,116,99,119,101,98,95,50,95,54,49,0),73]]);
         roboto9 /= Math.max(hejiP.length << (Math.min(5, imagesv.length)), 1);
         imagesv += `${styleX.size}`;
         mbjscommonr = mbjscommonr && styleX.size > 15;
      }
         roboto9 <<= Math.min(read6.length, 2);
          let pingw = String.fromCharCode(121,95,53,50,95,111,112,116,97,114,103,0);
          let statisticsactive8 = 5.0;
          let predictionI: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,95,122,95,49,57,0),328], [String.fromCharCode(100,98,105,115,95,119,95,55,55,0),974]]);
         imagesp = "1";
         pingw = "1";
         statisticsactive8 *= (pingw == String.fromCharCode(103,0) ? pingw.length : parseInt(`${statisticsactive8}`));
         predictionI = new Map([[`${predictionI.size}`, parseInt(`${statisticsactive8}`) + 3]]);
         roboto9 /= Math.max(3, 3 * read6.length);
      let paginatione = read6.length >= 9796352;
      do {
         read6 = `${hejiP.length}`;
         if (paginatione) {
            break;
         }
      } while ((!read6.includes(hejiP)) && paginatione);
      for (let s = 0; s < 2; s++) {
         read6 += "2";
      }
      while (read6.length == roboto9) {
         roboto9 /= Math.max(4, hejiP.length * roboto9);
         break;
      }
      for (let i = 0; i < 1; i++) {
         imagesp = `${halffieldimageu.length}`;
      }
      let profilen = halffieldimageu.length <= 9466855;
      do {
          let awayplayerx = 1.0;
          let greyarrowupp: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,57,95,55,55,0),String.fromCharCode(114,101,115,105,122,101,100,95,112,95,48,0)], [String.fromCharCode(98,95,52,51,95,108,111,103,111,117,116,0),String.fromCharCode(105,95,50,55,95,110,111,110,99,111,110,116,97,99,116,0)]]);
          let webviewj = 4.0;
         halffieldimageu += `${greyarrowupp.size / (Math.max(imagesp.length, 9))}`;
         awayplayerx += parseFloat(`${parseInt(`${webviewj}`)}`);
         greyarrowupp.set(`${awayplayerx}`, parseInt(`${awayplayerx}`) << (Math.min(4, Math.abs(parseInt(`${webviewj}`)))));
         if (profilen) {
            break;
         }
      } while ((4 >= imagesp.length) && profilen);
          let currentX = String.fromCharCode(111,95,53,53,95,112,114,111,99,99,101,115,115,0);
         roboto9 += read6.length;
         currentX = `${currentX.length}`;
         roboto9 *= 1;
          let imagesM = String.fromCharCode(98,101,115,115,101,108,95,103,95,50,52,0);
          let iconstarB: Array<any> = [566, 230, 653];
         imagesp = `${roboto9 & iconstarB.length}`;
         imagesM += "1";
         iconstarB = [3];
      while (!imagesp.includes(`${halffieldimageu.length}`)) {
         imagesp += `${imagesp.length}`;
         break;
      }
          let imagewatchliveb = 3.0;
         imagesp += "3";
         imagewatchliveb -= parseInt(`${imagewatchliveb}`);
         imagesp = `${(halffieldimageu == String.fromCharCode(53,0) ? halffieldimageu.length : roboto9)}`;
      spinners += `${read6.length >> (Math.min(Math.abs(1), 5))}`;
   }

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

       let register_p1 = String.fromCharCode(99,111,110,115,101,110,116,95,100,95,50,56,0);
      let libfollyy = 5886216 >= register_p1.length;
      do {
          let buttonZ = String.fromCharCode(100,105,118,105,100,101,95,57,95,50,49,0);
          let memberg = false;
         register_p1 = "2";
         buttonZ += `${buttonZ.length | 3}`;
         memberg = buttonZ == String.fromCharCode(57,0);
         if (libfollyy) {
            break;
         }
      } while ((register_p1.length > 4) && libfollyy);
       let q_centerz = String.fromCharCode(106,95,55,49,95,121,111,110,108,121,0);
       let awayicons = String.fromCharCode(112,97,99,107,95,98,95,52,57,0);
       let splashJ = String.fromCharCode(108,97,121,101,114,105,110,103,95,53,95,53,55,0);
      register_us = `${register_us.length}`;
      register_us = `${register_us.length - heji5.length}`;
   if (register_us.length > 2) {
       let selectedt = 4.0;
      for (let r = 0; r < 3; r++) {
          let showA = String.fromCharCode(120,95,49,50,95,109,101,116,97,100,97,116,97,115,101,116,0);
          let nbatrophyW = true;
         selectedt -= parseFloat(`${2}`);
         showA = `${showA.length}`;
         nbatrophyW = showA == showA;
      }
         selectedt *= parseFloat(`${parseInt(`${selectedt}`)}`);
      if ((selectedt - 1.60) < 5.4 || 1.60 < (selectedt - selectedt)) {
         selectedt /= Math.max(parseFloat(`${parseInt(`${selectedt}`)}`), 4);
      }
      register_us = `${greenarrowupk.size << (Math.min(spinners.length, 2))}`;
   }
      unfillB = "1";
       let colorsk: Array<any> = [966, 541];
       let penaltymatchiconH = true;
       let favoritez = String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,95,120,95,54,53,0);
      while (penaltymatchiconH) {
         penaltymatchiconH = !penaltymatchiconH;
         break;
      }
      for (let c = 0; c < 1; c++) {
         penaltymatchiconH = (27 < (favoritez.length & (penaltymatchiconH ? favoritez.length : 27)));
      }
      for (let s = 0; s < 3; s++) {
         penaltymatchiconH = colorsk.length <= favoritez.length;
      }
          let acceptedl: Map<any, any> = new Map([[String.fromCharCode(110,95,50,56,0),true ], [String.fromCharCode(107,95,53,49,95,97,100,97,112,116,97,116,105,111,110,0),true ]]);
          let iconnotificationnewI = String.fromCharCode(101,95,56,52,95,118,97,105,108,97,98,105,108,105,116,121,0);
          let penaltyshootnogoalj = 2.0;
         favoritez += `${3 + iconnotificationnewI.length}`;
         acceptedl.set(`${penaltyshootnogoalj}`, acceptedl.size);
         iconnotificationnewI += `${acceptedl.size}`;
         penaltyshootnogoalj -= parseInt(`${penaltyshootnogoalj}`) % 3;
          let nativeex3: Array<any> = [991, 711];
          let iconeyeb: Map<any, any> = new Map([[String.fromCharCode(104,95,49,55,95,115,117,109,109,101,100,0),475], [String.fromCharCode(98,97,99,107,112,116,114,95,116,95,57,0),492]]);
          let termsO = 3;
         colorsk = [(2 / (Math.max(8, (penaltymatchiconH ? 4 : 5))))];
         nativeex3 = [termsO];
         iconeyeb.set(`${termsO}`, nativeex3.length);
         penaltymatchiconH = ((favoritez.length >> (Math.min(3, Math.abs((penaltymatchiconH ? favoritez.length : 31))))) > 31);
      for (let n = 0; n < 2; n++) {
         penaltymatchiconH = colorsk.includes(penaltymatchiconH);
      }
         penaltymatchiconH = favoritez.length <= 15 || penaltymatchiconH;
          let libturbomodulejsijni7 = String.fromCharCode(119,95,50,55,95,97,108,105,118,101,0);
         colorsk.push(libturbomodulejsijni7.length);
      register_us = `${iconuserK.length}`;
      heji5 += `${(unfillB == String.fromCharCode(49,0) ? register_us.length : unfillB.length)}`;
      greenarrowupk.set(register_us, (register_us == String.fromCharCode(118,0) ? register_us.length : spinners.length));
      const newState = getState().downloadVideoReducer

      spinners += "2";
       let iconcalendary = 2.0;
       let smallorangemanJ: Array<any> = [885, 789];
         iconcalendary += parseInt(`${iconcalendary}`) & 3;
      for (let y = 0; y < 1; y++) {
         smallorangemanJ.push(parseInt(`${iconcalendary}`) | smallorangemanJ.length);
      }
          let nextF = String.fromCharCode(118,95,52,48,95,108,105,98,119,101,98,112,101,110,99,0);
          let bufferW = String.fromCharCode(110,101,111,110,116,101,115,116,95,100,95,54,49,0);
          let analyticB = String.fromCharCode(111,95,56,49,95,115,101,103,109,101,110,116,101,100,0);
         smallorangemanJ = [parseInt(`${iconcalendary}`)];
         nextF += `${analyticB.length}`;
         bufferW = `${analyticB.length}`;
      let videovar2 = 9437217.0 >= iconcalendary;
      do {
         iconcalendary += smallorangemanJ.length;
         if (videovar2) {
            break;
         }
      } while (videovar2 && (smallorangemanJ.includes(iconcalendary)));
      let libfabricjni0 = 7059669 <= smallorangemanJ.length;
      do {
         smallorangemanJ.push(smallorangemanJ.length);
         if (libfabricjni0) {
            break;
         }
      } while (libfabricjni0 && ((5.88 - iconcalendary) >= 1.81 || (smallorangemanJ.length - parseInt(`${iconcalendary}`)) >= 3));
          let bgvipsportL = false;
          let smallo = String.fromCharCode(116,114,117,110,99,97,116,105,111,110,95,110,95,52,48,0);
         smallorangemanJ = [(smallo == String.fromCharCode(114,0) ? smallorangemanJ.length : smallo.length)];
         bgvipsportL = !bgvipsportL;
      qaagu = 68.75 > iconcalendary;
   while (5 < (greenarrowupk.size + spinners.length)) {
      spinners = "2";
      break;
   }
   if (!heji5.endsWith(`${qaagu}`)) {
      qaagu = 64 >= heji5.length || spinners.length >= 64;
   }
   for (let x = 0; x < 3; x++) {
       let volumeY: Array<any> = [768, 243, 263];
       let smallsoundd = String.fromCharCode(118,95,53,55,95,108,111,103,115,0);
      for (let e = 0; e < 2; e++) {
         smallsoundd += `${2 - smallsoundd.length}`;
      }
      if (smallsoundd.endsWith(`${volumeY.length}`)) {
         volumeY.push(smallsoundd.length);
      }
         smallsoundd = `${smallsoundd.length}`;
          let penaltyshoot2 = false;
          let handlerk = 2.0;
         volumeY.push(volumeY.length);
         penaltyshoot2 = handlerk < handlerk;
       let backgroundB: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,97,108,95,99,95,50,51,0),false ], [String.fromCharCode(111,98,115,101,114,118,101,114,95,102,95,54,49,0),true ]]);
       let playercommon6: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,105,110,103,95,118,95,56,57,0),950], [String.fromCharCode(104,95,57,56,95,98,110,104,101,120,0),53]]);
         backgroundB.set(`${smallsoundd}`, 3);
      spinners += `${greenarrowupk.size}`;
   }
      qaagu = (thailandt / (Math.max(register_us.length, 2))) == 100;
   while (1 > unfillB.length && !qaagu) {
       let subinw = 1.0;
         subinw += parseInt(`${subinw}`) * parseInt(`${subinw}`);
          let countdownl = 0;
          let shirtU = String.fromCharCode(112,114,111,116,101,99,116,105,111,110,95,109,95,55,49,0);
          let uinit_gk = 2.0;
         subinw /= Math.max(3, 1 % (Math.max(2, countdownl)));
         countdownl >>= Math.min(Math.abs((String.fromCharCode(110,0) == shirtU ? shirtU.length : parseInt(`${uinit_gk}`))), 3);
         uinit_gk *= 2 + parseInt(`${uinit_gk}`);
         subinw -= 2;
      qaagu = heji5.length <= 60 && !qaagu;
      break;
   }
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
    }

    const handleError = () => {
       let selectionh = String.fromCharCode(99,95,56,57,95,116,97,110,115,105,103,0);
    let launcherI = String.fromCharCode(116,95,52,52,95,114,101,105,109,112,111,114,116,0);
    let details7 = String.fromCharCode(100,101,116,97,105,108,115,95,54,95,50,49,0);
    let star_: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,99,116,95,104,95,49,57,0),963], [String.fromCharCode(98,108,111,99,107,100,95,51,95,50,56,0),423]]);
    let castu = String.fromCharCode(117,95,49,53,95,115,101,113,117,101,110,99,101,115,0);
    let ksadj: Array<any> = [505, 762];
    let entryL = String.fromCharCode(114,101,109,111,118,105,110,103,95,105,95,57,50,0);
    let libaney = String.fromCharCode(111,98,106,101,99,116,115,95,109,95,51,55,0);
    let filedp: Array<any> = [String.fromCharCode(97,95,55,54,95,111,117,116,102,105,108,101,115,0), String.fromCharCode(98,105,110,116,101,120,116,95,101,95,49,57,0), String.fromCharCode(112,95,49,50,95,110,111,110,110,117,108,108,0)];
   for (let z = 0; z < 3; z++) {
      launcherI += `${selectionh.length / 3}`;
   }
   for (let t = 0; t < 1; t++) {
      ksadj.push(1);
   }

      console.debug('error downloading ', vod.vod_name)

      ksadj = [ksadj.length >> (Math.min(launcherI.length, 2))];
   for (let m = 0; m < 3; m++) {
      entryL = `${star_.size}`;
   }
      const state = getState().downloadVideoReducer

   while ((star_.size + entryL.length) == 5) {
      entryL = `${selectionh.length + entryL.length}`;
      break;
   }
      libaney += `${(String.fromCharCode(68,0) == libaney ? selectionh.length : libaney.length)}`;
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

   while ((5 % (Math.max(9, entryL.length))) > 5) {
      ksadj.push(details7.length * star_.size);
      break;
   }
      castu += "1";
      if (!targetEpisode) return 
      if (targetEpisode?.status === KVCarouselSort.KVSharemodal){

   while (details7.length < star_.size) {
      star_.set(details7, 3 >> (Math.min(4, libaney.length)));
      break;
   }
      launcherI += "3";
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: KVCarouselSort.KVFlipperForward
      }))

      libaney += `${selectionh.length % (Math.max(3, 10))}`;
       let defaultbasketballbgi = 5;
       let libffmpegkitb: Array<any> = [595, 786, 670];
         libffmpegkitb.push(libffmpegkitb.length);
          let scoreb: Array<any> = [711, 706, 780];
          let whiteanimationliveT = String.fromCharCode(97,115,115,101,109,98,108,101,100,95,105,95,54,56,0);
          let headerp = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,109,95,50,51,0);
         libffmpegkitb.push(scoreb.length << (Math.min(whiteanimationliveT.length, 2)));
         scoreb = [headerp.length >> (Math.min(Math.abs(1), 5))];
         whiteanimationliveT = `${headerp.length}`;
         libffmpegkitb.push(2);
      for (let u = 0; u < 1; u++) {
         defaultbasketballbgi /= Math.max(1, 4);
      }
      for (let w = 0; w < 1; w++) {
          let anytimeo: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,115,115,95,57,95,50,0),669], [String.fromCharCode(120,95,51,51,95,99,101,110,116,114,97,108,105,116,121,0),874], [String.fromCharCode(102,97,110,116,111,109,95,109,95,49,52,0),591]]);
          let settingV = 1.0;
          let catalogW = String.fromCharCode(102,111,114,109,97,110,116,95,120,95,54,54,0);
          let switch_inF = String.fromCharCode(118,95,55,48,95,97,114,99,104,105,118,101,100,0);
          let bdxadsdkp = String.fromCharCode(105,95,49,57,95,98,97,115,101,100,0);
         libffmpegkitb = [(catalogW == String.fromCharCode(95,0) ? catalogW.length : parseInt(`${settingV}`))];
         anytimeo.set(switch_inF, bdxadsdkp.length);
         settingV *= bdxadsdkp.length << (Math.min(Math.abs(2), 5));
         switch_inF = "1";
      }
          let iconsaveimagec = String.fromCharCode(97,95,51,95,112,104,114,97,115,101,115,0);
          let loadingspinnerf: Map<any, any> = new Map([[String.fromCharCode(116,114,105,99,107,108,101,95,113,95,53,50,0),true ], [String.fromCharCode(100,95,57,57,95,101,100,103,101,115,0),true ], [String.fromCharCode(112,97,99,105,110,103,95,101,95,50,55,0),false ]]);
         libffmpegkitb = [2];
         iconsaveimagec = `${loadingspinnerf.size}`;
         loadingspinnerf.set(iconsaveimagec, iconsaveimagec.length ^ loadingspinnerf.size);
      ksadj.push(libaney.length + entryL.length);

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

      selectionh = "1";
   for (let o = 0; o < 2; o++) {
      libaney += `${(castu == String.fromCharCode(87,0) ? castu.length : ksadj.length)}`;
   }
    if (!targetVod) return 
    

      launcherI += `${star_.size - ksadj.length}`;
      star_.set(entryL, ksadj.length);
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})

      castu = `${(String.fromCharCode(77,0) == castu ? filedp.length : castu.length)}`;
      libaney = `${entryL.length}`;
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return
      if (targetEpisode?.status === KVCarouselSort.KVSharemodal){
        return 
      }
      
      
      
      
      
      
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: KVCarouselSort.KVImagesPlaceholder, 
        sizeInBytes: finalSizeInBytes, 
        progress: {
          percentage: 100
        }
      }))
      onDownloadEnd()
    }

    

    const handleSessionCreated = ({session}: {session: FFmpegSession}) => {
      const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 

      if (targetEpisode.status === KVCarouselSort.KVSharemodal) { 
        session.cancel()
      }
      else {
        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {ffmpegSession: session.getSessionId()}))
      }


    }

    const state = getState().downloadVideoReducer

    const isAdult = state.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

    if (!url) return; 
    if (state.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return; 
    if (state.queue.length === 0) return; 

    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(startVideoDownload(vod, vodSourceId, vodUrlNid))
    downloadVod(
      `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
      url, 
      handleUpdate, 
      handleComplete, 
      handleError, 
      handleSessionCreated
    )
  
  }
}

export function addVideoToDownloadThunk(
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid, vodIsAdult));
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: KVCarouselSort.KVIconchatsend}))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function removeVideoFromDownloadThunk(
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 
    const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return 

    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})
    const allSession = await FFmpegKit.listSessions() 
    for (const session of allSession) {
      if (await session.getSessionId() === targetEpisode.ffmpegSession){
       let pangleE = String.fromCharCode(101,95,53,53,95,106,111,121,102,117,108,0);
    let typingloadingM = 1.0;
    let smallorangemani: Map<any, any> = new Map([[String.fromCharCode(116,95,49,57,95,107,98,112,115,0),String.fromCharCode(100,101,99,111,114,97,116,101,95,111,95,54,52,0)], [String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,95,113,95,49,50,0),String.fromCharCode(111,108,100,101,114,95,111,95,52,49,0)], [String.fromCharCode(119,95,54,48,95,103,105,102,115,0),String.fromCharCode(111,119,110,101,114,115,95,118,95,50,50,0)]]);
    let calendar9 = 1.0;
    let predictionwin7 = 0.0;
    let routerK = 3.0;
    let statsL = String.fromCharCode(114,101,99,111,110,105,110,116,101,114,95,119,95,56,53,0);
    let livenodatabgimgh = 4;
    let mintegral8 = 1;
    let injury0: Array<any> = [231, 706, 592];
    let reactQ: Map<any, any> = new Map([[String.fromCharCode(109,101,114,103,101,95,120,95,57,0),String.fromCharCode(116,95,54,48,95,97,118,112,114,111,103,114,97,109,0)], [String.fromCharCode(102,95,55,57,95,115,119,105,122,122,108,101,0),String.fromCharCode(102,95,51,53,95,109,97,107,101,102,105,108,101,0)]]);
    let handlera = String.fromCharCode(100,105,110,101,114,115,95,113,95,57,50,0);
    let chinaQ = String.fromCharCode(117,110,115,101,110,116,95,108,95,49,52,0);
      smallorangemani = new Map([[`${predictionwin7}`, 2 % (Math.max(3, parseInt(`${predictionwin7}`)))]]);
   while (5 == (statsL.length + injury0.length) || 4 == (5 + statsL.length)) {
       let logoutW = 3;
       let phoney = 4;
          let configm = String.fromCharCode(102,117,122,122,95,48,95,53,48,0);
          let iconchatsendN = 1.0;
          let resend3 = false;
         phoney *= 1 & parseInt(`${iconchatsendN}`);
         configm += `${(configm.length * (resend3 ? 1 : 1))}`;
         iconchatsendN -= (parseFloat(`${String.fromCharCode(119,0) == configm ? (resend3 ? 3 : 1) : configm.length}`));
      let currentL = 6606911 >= logoutW;
      do {
          let closex = String.fromCharCode(115,105,108,101,110,116,108,121,95,103,95,57,57,0);
          let loginO = String.fromCharCode(100,101,102,101,114,114,105,110,103,95,108,95,56,51,0);
          let mathM = true;
          let logoL: Array<any> = [224, 616];
          let libreactnativeblobm = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,120,95,49,51,0);
         logoutW &= 3;
         closex = `${1 * loginO.length}`;
         loginO += "1";
         mathM = !mathM && loginO.length == 30;
         logoL.push((closex.length << (Math.min(4, Math.abs((mathM ? 2 : 2))))));
         libreactnativeblobm = `${closex.length / (Math.max(1, 6))}`;
         if (currentL) {
            break;
         }
      } while ((2 <= (logoutW << (Math.min(3, Math.abs(phoney))))) && currentL);
      let iconwatchnowC = logoutW >= 5798940;
      do {
         logoutW += phoney;
         if (iconwatchnowC) {
            break;
         }
      } while ((5 < (1 ^ logoutW) && (phoney ^ logoutW) < 1) && iconwatchnowC);
      if ((logoutW + phoney) < 4) {
         logoutW += phoney * logoutW;
      }
         phoney ^= logoutW ^ phoney;
         phoney *= logoutW;
      statsL = `${logoutW}`;
      break;
   }
      smallorangemani = new Map([[`${predictionwin7}`, 1]]);
      mintegral8 &= parseInt(`${routerK}`);
      predictionwin7 += parseInt(`${predictionwin7}`) * mintegral8;
   while (3 > mintegral8) {
      mintegral8 >>= Math.min(3, statsL.length);
      break;
   }
       let reactnativejs2 = 3;
         reactnativejs2 += reactnativejs2 % (Math.max(2, 10));
         reactnativejs2 >>= Math.min(5, Math.abs(3 << (Math.min(4, Math.abs(reactnativejs2)))));
      if (reactnativejs2 >= 3) {
          let wnewinterstitialN: Array<any> = [964, 510];
         reactnativejs2 /= Math.max(wnewinterstitialN.length, 4);
      }
      calendar9 += reactnativejs2;
   for (let s = 0; s < 3; s++) {
       let backwhites = 2;
       let carouseld = String.fromCharCode(97,95,54,53,95,102,108,111,97,116,105,110,103,0);
       let libswresampleE = 5.0;
       let spinnerA: Array<any> = [308, 878];
         backwhites += spinnerA.length + backwhites;
         backwhites ^= spinnerA.length;
         carouseld = `${carouseld.length ^ backwhites}`;
      for (let a = 0; a < 3; a++) {
          let gradlewN = false;
          let rewindX: Map<any, any> = new Map([[String.fromCharCode(97,95,49,54,95,115,109,112,116,101,0),String.fromCharCode(120,95,49,54,95,114,101,109,117,120,101,114,0)], [String.fromCharCode(104,95,52,56,95,109,111,100,101,99,111,110,116,0),String.fromCharCode(117,95,52,55,95,99,121,99,108,101,100,0)], [String.fromCharCode(103,114,97,112,104,105,99,95,116,95,56,51,0),String.fromCharCode(112,103,110,111,95,48,95,56,50,0)]]);
         spinnerA.push(rewindX.size);
         gradlewN = (gradlewN ? !gradlewN : gradlewN);
         rewindX = new Map([[`${gradlewN}`, 3]]);
      }
      while ((carouseld.length + parseInt(`${libswresampleE}`)) == 2) {
          let defaultlogoi = String.fromCharCode(100,97,105,95,122,95,55,48,0);
          let iconcurrentmatche = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,95,110,95,55,49,0);
         libswresampleE *= defaultlogoi.length;
         defaultlogoi += `${iconcurrentmatche.length + 1}`;
         iconcurrentmatche += `${iconcurrentmatche.length}`;
         break;
      }
       let reducerA: Map<any, any> = new Map([[String.fromCharCode(106,95,56,55,95,110,112,97,116,99,104,101,115,0),444], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,95,98,95,54,50,0),132]]);
      if (5 > (backwhites | 1) || (carouseld.length | 1) > 5) {
         carouseld += `${(String.fromCharCode(114,0) == carouseld ? parseInt(`${libswresampleE}`) : carouseld.length)}`;
      }
      let emptyi = libswresampleE >= 9646712.0;
      do {
         libswresampleE -= 1;
         if (emptyi) {
            break;
         }
      } while ((2 > (backwhites * 4)) && emptyi);
      if (parseInt(`${libswresampleE}`) >= reducerA.size) {
         libswresampleE /= Math.max(3, backwhites + parseInt(`${libswresampleE}`));
      }
      if ((carouseld.length / (Math.max(10, libswresampleE))) >= 5.95) {
         libswresampleE += 3;
      }
      for (let p = 0; p < 3; p++) {
          let typingloading9 = String.fromCharCode(104,95,49,56,95,114,115,112,0);
          let changeS = 1.0;
         reducerA = new Map([[typingloading9, (String.fromCharCode(49,0) == typingloading9 ? typingloading9.length : backwhites)]]);
         changeS *= parseFloat(`${1 & parseInt(`${changeS}`)}`);
      }
          let downarrowf: Map<any, any> = new Map([[String.fromCharCode(102,95,53,51,95,112,101,114,115,111,110,115,0),String.fromCharCode(101,95,52,49,95,116,111,114,101,100,0)], [String.fromCharCode(105,109,101,110,115,105,111,110,95,100,95,51,57,0),String.fromCharCode(108,95,52,49,95,111,102,102,101,114,115,0)]]);
          let whiteanimationliveF: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,116,101,100,95,56,95,49,49,0),979], [String.fromCharCode(114,101,115,111,108,117,116,105,111,110,95,113,95,54,0),112]]);
          let acceptedx: Array<any> = [885, 578, 693];
         reducerA = new Map([[`${acceptedx.length}`, 3 - acceptedx.length]]);
         downarrowf.set(`${whiteanimationliveF.size}`, 2);
         whiteanimationliveF = new Map([[`${whiteanimationliveF.size}`, 1 & whiteanimationliveF.size]]);
      routerK += injury0.length;
   }
      pangleE = `${parseInt(`${typingloadingM}`)}`;
      injury0.push(injury0.length);
       let largeG: Map<any, any> = new Map([[String.fromCharCode(100,101,110,111,105,115,101,95,121,95,53,52,0),String.fromCharCode(101,95,52,50,95,116,115,101,113,0)], [String.fromCharCode(114,117,115,115,105,97,110,95,55,95,54,54,0),String.fromCharCode(116,105,110,105,116,95,100,95,49,56,0)], [String.fromCharCode(98,105,100,105,114,101,99,116,105,111,110,97,108,95,50,95,55,52,0),String.fromCharCode(115,119,102,112,108,97,121,101,114,95,101,95,50,53,0)]]);
       let sinap: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,115,117,112,101,114,98,108,111,99,107,115,0),472], [String.fromCharCode(105,95,54,50,95,112,101,114,99,101,110,116,105,108,101,0),190], [String.fromCharCode(113,95,51,50,95,107,101,114,110,101,108,0),195]]);
       let predictionwinv: Array<any> = [608, 619];
          let accepted4 = String.fromCharCode(111,110,101,99,104,95,102,95,50,0);
          let analyticK = 0;
         sinap = new Map([[`${sinap.size}`, sinap.size & analyticK]]);
         accepted4 += `${accepted4.length}`;
         analyticK ^= accepted4.length;
         sinap = new Map([[`${largeG.size}`, largeG.size >> (Math.min(predictionwinv.length, 2))]]);
      if (1 == (sinap.size << (Math.min(1, predictionwinv.length))) || (sinap.size << (Math.min(Math.abs(1), 4))) == 3) {
         sinap.set(`${predictionwinv.length}`, sinap.size);
      }
         sinap.set(`${sinap.size}`, largeG.size + sinap.size);
       let libglogE: Array<any> = [430, 469];
         predictionwinv = [2];
         largeG.set(`${predictionwinv.length}`, 2);
      let layoutU = predictionwinv.length <= 9095739;
      do {
         predictionwinv.push(sinap.size);
         if (layoutU) {
            break;
         }
      } while ((sinap.get(`${predictionwinv.length}`) == null) && layoutU);
         predictionwinv = [3];
      smallorangemani.set(`${calendar9}`, pangleE.length);
   let rulesy = 5380424.0 <= predictionwin7;
   do {
      predictionwin7 -= 3;
      if (rulesy) {
         break;
      }
   } while (rulesy && (5.6 <= (predictionwin7 * 2.78) || (mintegral8 + 4) <= 1));
   while (livenodatabgimgh <= 5) {
      livenodatabgimgh -= statsL.length;
      break;
   }
   let basketballicon2 = 5180171 <= livenodatabgimgh;
   do {
      livenodatabgimgh &= 1;
      if (basketballicon2) {
         break;
      }
   } while (basketballicon2 && (mintegral8 == 5));
   let floatingc = 7134306 <= smallorangemani.size;
   do {
      smallorangemani.set(`${livenodatabgimgh}`, statsL.length);
      if (floatingc) {
         break;
      }
   } while ((smallorangemani.get(`${calendar9}`) == null) && floatingc);
   while (2 == (4 + livenodatabgimgh)) {
      livenodatabgimgh &= parseInt(`${predictionwin7}`) / (Math.max(smallorangemani.size, 8));
      break;
   }
   let refreshx = 5765722 >= smallorangemani.size;
   do {
       let over9 = 5.0;
       let typing4 = String.fromCharCode(104,95,52,95,115,117,98,112,97,114,116,0);
      for (let d = 0; d < 3; d++) {
          let xvodL = String.fromCharCode(109,105,110,111,114,95,121,95,53,53,0);
          let hongkongP = 0.0;
         typing4 = `${typing4.length ^ parseInt(`${hongkongP}`)}`;
         xvodL += "1";
         hongkongP -= (xvodL == String.fromCharCode(82,0) ? xvodL.length : xvodL.length);
      }
       let componenta = String.fromCharCode(112,95,56,53,95,102,114,97,110,100,111,109,0);
         over9 -= parseFloat(`${componenta.length}`);
      for (let d = 0; d < 3; d++) {
         typing4 = `${typing4.length}`;
      }
      while (typing4.length >= componenta.length) {
         typing4 += "1";
         break;
      }
       let iconmegaphoneR = String.fromCharCode(112,111,108,121,108,105,110,101,95,99,95,56,0);
       let nodeo = String.fromCharCode(108,111,110,103,105,116,117,100,101,95,48,95,53,53,0);
      smallorangemani = new Map([[`${routerK}`, 3]]);
      if (refreshx) {
         break;
      }
   } while (refreshx && (typingloadingM > 5.40));
      predictionwin7 -= injury0.length & 3;
      livenodatabgimgh ^= smallorangemani.size;
       let yellowvideolivet = false;
         yellowvideolivet = yellowvideolivet && !yellowvideolivet;
          let zoom1 = String.fromCharCode(121,95,57,55,95,120,102,111,114,109,0);
         yellowvideolivet = !yellowvideolivet;
         zoom1 = `${(String.fromCharCode(97,0) == zoom1 ? zoom1.length : zoom1.length)}`;
          let yellowanimationliveT = 0;
          let matchdetailbgK = String.fromCharCode(121,95,57,52,95,112,114,101,118,105,101,119,105,110,103,0);
         yellowvideolivet = yellowanimationliveT > 3;
         yellowanimationliveT ^= matchdetailbgK.length;
         matchdetailbgK = `${matchdetailbgK.length * 1}`;
      smallorangemani.set(pangleE, pangleE.length);
   for (let y = 0; y < 2; y++) {
       let fillu: Array<any> = [615, 922, 136];
       let eyecloset: Array<any> = [713, 352];
       let leaguedetailsbgd = 0;
       let annerB = String.fromCharCode(112,111,108,105,99,121,95,52,95,49,53,0);
       let reactv = String.fromCharCode(105,95,54,54,95,109,111,118,101,110,99,0);
      let libswresampleD = reactv.length <= 9606260;
      do {
         reactv += `${eyecloset.length}`;
         if (libswresampleD) {
            break;
         }
      } while ((5 < annerB.length || reactv == String.fromCharCode(105,0)) && libswresampleD);
       let diceY = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,50,95,57,57,0);
       let malaysiau = String.fromCharCode(122,95,53,95,99,111,115,0);
          let refreshl = String.fromCharCode(105,116,120,102,109,95,106,95,54,54,0);
          let layoutd: Array<any> = [825, 432];
         malaysiau = `${layoutd.length / 1}`;
         refreshl = `${refreshl.length}`;
         layoutd = [(refreshl == String.fromCharCode(89,0) ? refreshl.length : refreshl.length)];
      if (5 < malaysiau.length || diceY == String.fromCharCode(84,0)) {
         malaysiau += `${reactv.length + annerB.length}`;
      }
       let libswresampleq: Map<any, any> = new Map([[String.fromCharCode(115,118,103,95,112,95,55,50,0),139], [String.fromCharCode(98,108,105,110,107,95,53,95,49,50,0),401], [String.fromCharCode(113,95,53,49,95,109,117,108,120,0),338]]);
       let iconsettingC: Map<any, any> = new Map([[String.fromCharCode(115,116,115,115,95,111,95,55,50,0),243], [String.fromCharCode(100,97,97,108,97,95,114,95,53,56,0),497]]);
      while (2 == (leaguedetailsbgd - malaysiau.length) || 5 == (2 - leaguedetailsbgd)) {
          let rocket8 = false;
          let iconarrowrightblackM = String.fromCharCode(113,105,97,110,95,52,95,55,0);
          let borderlessv = 1.0;
          let gemfilez = String.fromCharCode(103,95,55,57,95,100,97,116,97,98,97,115,101,115,0);
         leaguedetailsbgd *= gemfilez.length + 2;
         rocket8 = !iconarrowrightblackM.endsWith(`${rocket8}`);
         iconarrowrightblackM = `${parseInt(`${borderlessv}`) >> (Math.min(Math.abs(2), 5))}`;
         borderlessv += (iconarrowrightblackM.length - (rocket8 ? 5 : 3));
         gemfilez = `${iconarrowrightblackM.length | parseInt(`${borderlessv}`)}`;
         break;
      }
       let videovarV = String.fromCharCode(99,95,57,57,95,112,114,101,102,101,114,114,101,100,0);
       let floaterS = String.fromCharCode(97,95,48,95,99,111,110,100,105,116,105,111,110,115,0);
      for (let y = 0; y < 2; y++) {
          let footballfiledlayoutK = 1.0;
         fillu.push(3 * malaysiau.length);
         footballfiledlayoutK /= Math.max(parseInt(`${footballfiledlayoutK}`), 5);
      }
      let defaultplayerimgV = malaysiau.length >= 5132262;
      do {
         malaysiau = `${2 | reactv.length}`;
         if (defaultplayerimgV) {
            break;
         }
      } while (defaultplayerimgV && (3 > (malaysiau.length % (Math.max(6, fillu.length))) && (malaysiau.length % 3) > 1));
         videovarV += `${fillu.length}`;
      let navigationp = fillu.length <= 7757836;
      do {
         fillu = [reactv.length];
         if (navigationp) {
            break;
         }
      } while (navigationp && ((4 + fillu.length) < 3 || 4 < (floaterS.length + fillu.length)));
         floaterS += `${diceY.length}`;
          let morem: Array<any> = [317, 738, 395];
         malaysiau += `${videovarV.length}`;
         morem.push(morem.length >> (Math.min(morem.length, 5)));
         annerB = "2";
      for (let r = 0; r < 2; r++) {
         videovarV = `${eyecloset.length | malaysiau.length}`;
      }
      calendar9 += 2;
   }
      routerK += (pangleE == String.fromCharCode(50,0) ? pangleE.length : smallorangemani.size);
   if ((smallorangemani.size | 5) < 4 && 1.88 < (2.66 + routerK)) {
       let cornerk = false;
          let libffmpegkitj = false;
          let predictionh = 2;
         cornerk = !libffmpegkitj && predictionh < 60;
         cornerk = (cornerk ? cornerk : !cornerk);
       let iconmoreg: Map<any, any> = new Map([[String.fromCharCode(106,95,54,51,95,102,101,116,99,104,105,110,103,0),970], [String.fromCharCode(112,114,101,99,97,108,99,117,108,97,116,101,95,104,95,57,52,0),26]]);
       let subinV: Map<any, any> = new Map([[String.fromCharCode(122,95,49,95,113,116,97,98,108,101,115,0),342], [String.fromCharCode(98,95,57,57,95,97,115,99,101,110,100,105,110,103,0),280]]);
      routerK /= Math.max(1, 3);
   }

        session.cancel(); 
      }
    }
    dispatch(removeVideoFromDownload(vod, vodSourceId, vodUrlNid))
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function removeVodFromDownloadThunk(
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    for (const episode of targetVod.episodes) {
      const allSession = await FFmpegKit.listSessions() 
      for (const session of allSession) {
        if (await session.getSessionId() === episode.ffmpegSession){
       let libreact1 = String.fromCharCode(122,95,57,57,95,114,111,116,97,116,101,100,0);
    let contextz = String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,122,95,52,52,0);
    let statsnomoredatae = 1.0;
    let bang1 = 3.0;
    let downloadert = String.fromCharCode(108,95,54,54,95,114,101,116,117,114,110,105,110,103,0);
    let fcdaebecbcbafcdfceaaeccfeacdb6 = String.fromCharCode(112,111,108,108,105,110,103,95,101,95,57,50,0);
    let favicong: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,115,95,57,95,51,48,0),369], [String.fromCharCode(118,97,114,95,105,95,50,48,0),599], [String.fromCharCode(101,110,99,111,100,101,100,95,52,95,50,53,0),922]]);
    let yellowanimationlivei = String.fromCharCode(120,95,57,49,95,97,103,103,114,101,103,97,116,101,115,0);
    let sourceV = String.fromCharCode(97,108,97,109,111,102,105,114,101,95,120,95,49,57,0);
    let giftbuttonV = String.fromCharCode(109,95,56,56,95,114,101,98,117,105,108,100,0);
    let adultC = String.fromCharCode(97,95,53,52,95,101,97,105,100,99,116,0);
    let graphe = String.fromCharCode(114,101,100,95,50,95,51,55,0);
   for (let y = 0; y < 3; y++) {
       let libruntimeexecutor7: Array<any> = [551, 523];
      let with_ss = 6413637 >= libruntimeexecutor7.length;
      do {
          let storek = String.fromCharCode(104,117,103,103,105,110,103,95,53,95,50,53,0);
         libruntimeexecutor7.push(1);
         storek = `${storek.length >> (Math.min(5, storek.length))}`;
         if (with_ss) {
            break;
         }
      } while (with_ss && (libruntimeexecutor7.length > libruntimeexecutor7.length));
      for (let c = 0; c < 1; c++) {
          let senda = 4;
          let greenarrowupb = String.fromCharCode(117,95,51,50,95,112,114,101,118,105,101,119,0);
         libruntimeexecutor7 = [senda];
         senda ^= 1;
         greenarrowupb += `${(greenarrowupb == String.fromCharCode(76,0) ? greenarrowupb.length : greenarrowupb.length)}`;
      }
      while (1 == (5 + libruntimeexecutor7.length) && (libruntimeexecutor7.length + 5) == 3) {
          let config4 = String.fromCharCode(107,95,53,51,95,104,102,121,117,0);
          let benefitL = true;
          let assistg = false;
          let suggestion2 = false;
          let searchbarz = String.fromCharCode(100,95,56,57,95,101,110,97,98,108,101,115,0);
         libruntimeexecutor7 = [libruntimeexecutor7.length];
         config4 += `${((suggestion2 ? 5 : 5) * searchbarz.length)}`;
         benefitL = !suggestion2;
         assistg = config4.length >= searchbarz.length;
         break;
      }
      favicong.set(`${libruntimeexecutor7.length}`, 2 * favicong.size);
   }
      libreact1 += `${yellowanimationlivei.length}`;
   if ((contextz.length + 3) >= 3) {
       let redscoreballc = 0.0;
       let abidetectm = 1.0;
       let libturbomodulejsijniA = String.fromCharCode(100,95,53,53,95,116,116,97,99,104,109,101,110,116,0);
       let catalogI: Array<any> = [999, 324];
       let robotop = String.fromCharCode(118,95,51,95,116,121,112,105,110,103,0);
         abidetectm *= 3 | parseInt(`${redscoreballc}`);
      while (2 <= (parseInt(`${abidetectm}`) + libturbomodulejsijniA.length) || (abidetectm + 5.77) <= 1.15) {
          let bellK = 2;
          let libruntimeexecutorD = 2.0;
         libturbomodulejsijniA += `${3 << (Math.min(1, Math.abs(parseInt(`${redscoreballc}`))))}`;
         bellK <<= Math.min(Math.abs(parseInt(`${libruntimeexecutorD}`) + 1), 1);
         libruntimeexecutorD /= Math.max(parseFloat(`${bellK}`), 3);
         break;
      }
         catalogI.push(parseInt(`${redscoreballc}`));
      let halffieldimageV = 9385546.0 >= redscoreballc;
      do {
          let whatsappA = 1.0;
         redscoreballc *= 3;
         whatsappA /= Math.max(2, parseInt(`${whatsappA}`) | parseInt(`${whatsappA}`));
         if (halffieldimageV) {
            break;
         }
      } while (((redscoreballc / 3.0) < 4.21) && halffieldimageV);
      while (1 >= (libturbomodulejsijniA.length ^ catalogI.length)) {
          let iconsubssuccess9 = 1.0;
          let imageactionlivez = 3;
         libturbomodulejsijniA = `${parseInt(`${iconsubssuccess9}`) ^ parseInt(`${abidetectm}`)}`;
         iconsubssuccess9 -= 3;
         imageactionlivez *= 3;
         break;
      }
      for (let o = 0; o < 1; o++) {
         redscoreballc += libturbomodulejsijniA.length << (Math.min(Math.abs(3), 4));
      }
         redscoreballc /= Math.max(4, libturbomodulejsijniA.length % (Math.max(9, parseInt(`${abidetectm}`))));
      for (let l = 0; l < 2; l++) {
         abidetectm /= Math.max(libturbomodulejsijniA.length, 1);
      }
      if (libturbomodulejsijniA.length == parseInt(`${abidetectm}`)) {
         abidetectm -= robotop.length + 1;
      }
      while (3 <= (robotop.length % 4) && (parseInt(`${redscoreballc}`) / (Math.max(robotop.length, 5))) <= 4) {
         robotop = `${catalogI.length & 3}`;
         break;
      }
      if (1 >= (parseInt(`${redscoreballc}`) / (Math.max(2, robotop.length))) || 4.68 >= (redscoreballc / (Math.max(robotop.length, 2)))) {
         redscoreballc -= 1;
      }
       let iconwatchp = String.fromCharCode(114,95,51,54,95,99,111,114,112,117,115,0);
      if (abidetectm >= iconwatchp.length) {
         abidetectm /= Math.max(2, 3);
      }
      if (!robotop.endsWith(`${libturbomodulejsijniA.length}`)) {
         libturbomodulejsijniA = `${catalogI.length}`;
      }
          let appleq = 0.0;
          let friendsO = 1.0;
         libturbomodulejsijniA += `${(String.fromCharCode(85,0) == libturbomodulejsijniA ? parseInt(`${abidetectm}`) : libturbomodulejsijniA.length)}`;
         appleq -= parseInt(`${appleq}`) & 2;
         friendsO /= Math.max(4, parseFloat(`${parseInt(`${appleq}`)}`));
      statsnomoredatae += 3;
   }
       let awayC = false;
         awayC = !awayC;
         awayC = (awayC ? awayC : awayC);
          let selectB = String.fromCharCode(119,95,51,53,95,102,101,101,100,0);
          let middlesoundd = false;
         awayC = !selectB.startsWith(`${awayC}`);
         selectB += `${((middlesoundd ? 2 : 4) - 3)}`;
      favicong = new Map([[sourceV, sourceV.length]]);
   let mergerh = 4974293.0 <= statsnomoredatae;
   do {
       let sheetH = String.fromCharCode(101,95,54,54,95,98,101,108,111,119,0);
         sheetH += `${sheetH.length}`;
         sheetH += `${sheetH.length * 1}`;
         sheetH = `${(String.fromCharCode(79,0) == sheetH ? sheetH.length : sheetH.length)}`;
      statsnomoredatae /= Math.max(3, favicong.size ^ 1);
      if (mergerh) {
         break;
      }
   } while ((!downloadert.startsWith(`${statsnomoredatae}`)) && mergerh);
   let libpangleflippeds = String.fromCharCode(104,49,108,119,52,113,116,0) == yellowanimationlivei;
   do {
      yellowanimationlivei = `${3 << (Math.min(3, downloadert.length))}`;
      if (libpangleflippeds) {
         break;
      }
   } while ((!libreact1.endsWith(`${yellowanimationlivei.length}`)) && libpangleflippeds);
   if ((5.79 / (Math.max(7, statsnomoredatae))) < 1.63) {
       let unimplementedviewG: Array<any> = [String.fromCharCode(120,95,50,54,95,110,109,104,100,0), String.fromCharCode(112,97,114,97,115,101,116,95,117,95,50,53,0), String.fromCharCode(117,95,53,48,0)];
       let coreS = 1.0;
       let downarrowL = String.fromCharCode(106,112,101,103,99,111,109,112,95,121,95,54,55,0);
       let backgroundp = 5.0;
      while (!downarrowL.includes(`${backgroundp}`)) {
         downarrowL = `${parseInt(`${backgroundp}`)}`;
         break;
      }
      while ((downarrowL.length + 4) <= 3 && 3 <= (4 ^ downarrowL.length)) {
          let encryptZ = 1.0;
         backgroundp /= Math.max(4, 1 * parseInt(`${coreS}`));
         encryptZ /= Math.max(4, 3 - parseInt(`${encryptZ}`));
         break;
      }
         backgroundp += downarrowL.length;
         unimplementedviewG = [parseInt(`${backgroundp}`)];
         downarrowL += `${parseInt(`${backgroundp}`)}`;
      while (1 == (downarrowL.length & 4) && 2 == (4 & unimplementedviewG.length)) {
          let comment2 = String.fromCharCode(120,95,53,95,112,111,119,101,114,102,117,108,0);
          let iconwatchnowl = String.fromCharCode(114,100,101,108,116,97,95,98,95,52,52,0);
          let catagoryy = String.fromCharCode(118,95,49,57,95,99,111,109,98,105,110,101,0);
         downarrowL = `${iconwatchnowl.length}`;
         comment2 += `${1 ^ comment2.length}`;
         iconwatchnowl = "3";
         catagoryy += `${comment2.length}`;
         break;
      }
      while (backgroundp >= 3.39) {
         unimplementedviewG.push(parseInt(`${backgroundp}`) & 3);
         break;
      }
      while (4 >= (2 ^ downarrowL.length)) {
         backgroundp -= downarrowL.length / 3;
         break;
      }
         coreS -= 2;
      while (2 < (1 + downarrowL.length) && (downarrowL.length << (Math.min(Math.abs(1), 4))) < 1) {
         backgroundp += downarrowL.length;
         break;
      }
         coreS += parseInt(`${backgroundp}`);
      for (let h = 0; h < 1; h++) {
         unimplementedviewG = [unimplementedviewG.length >> (Math.min(Math.abs(1), 5))];
      }
      statsnomoredatae /= Math.max(1, 1);
   }
      contextz = `${downloadert.length / (Math.max(4, fcdaebecbcbafcdfceaaeccfeacdb6.length))}`;
   let gradlewb = 8040066 <= favicong.size;
   do {
      favicong.set(`${statsnomoredatae}`, sourceV.length | parseInt(`${statsnomoredatae}`));
      if (gradlewb) {
         break;
      }
   } while (gradlewb && ((sourceV.length ^ favicong.size) >= 4 || (favicong.size ^ sourceV.length) >= 4));
   while (libreact1.endsWith(`${statsnomoredatae}`)) {
       let predictionarrowW = String.fromCharCode(122,95,53,56,95,117,110,105,102,111,114,109,0);
       let iconbellY = 5.0;
       let iconrightorangei: Array<any> = [852, 565];
       let iconlogoutP = String.fromCharCode(97,108,97,99,95,114,95,49,55,0);
         iconrightorangei = [2];
      for (let w = 0; w < 1; w++) {
         iconlogoutP += "3";
      }
      if (5 < iconlogoutP.length) {
         predictionarrowW += `${parseInt(`${iconbellY}`) - 2}`;
      }
         iconlogoutP += `${parseInt(`${iconbellY}`)}`;
      for (let z = 0; z < 1; z++) {
         iconrightorangei = [2];
      }
       let analytic5 = 3.0;
       let lesss = 0.0;
         lesss /= Math.max(2, parseFloat(`${iconrightorangei.length | parseInt(`${iconbellY}`)}`));
         iconlogoutP += `${iconrightorangei.length << (Math.min(2, Math.abs(parseInt(`${analytic5}`))))}`;
         iconlogoutP = `${(iconlogoutP == String.fromCharCode(88,0) ? iconlogoutP.length : iconrightorangei.length)}`;
         iconrightorangei.push(parseInt(`${analytic5}`) + 3);
      while (lesss >= analytic5) {
         analytic5 /= Math.max(2, parseFloat(`${3}`));
         break;
      }
         lesss += parseFloat(`${parseInt(`${iconbellY}`)}`);
      statsnomoredatae -= predictionarrowW.length % (Math.max(1, 2));
      break;
   }
       let xadsdkP = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,110,95,50,0);
       let unfillW: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,100,95,50,55,0),334], [String.fromCharCode(120,95,53,50,95,115,101,101,100,101,100,0),407], [String.fromCharCode(101,95,56,51,95,115,97,100,98,0),658]]);
      for (let g = 0; g < 3; g++) {
          let goallogo0 = 4.0;
          let reducerr = 4;
          let libjsijniprofilerl = String.fromCharCode(102,109,115,117,98,95,57,95,56,52,0);
         unfillW = new Map([[`${unfillW.size}`, 3]]);
         goallogo0 *= parseInt(`${goallogo0}`) - libjsijniprofilerl.length;
         reducerr &= reducerr;
         libjsijniprofilerl = `${(String.fromCharCode(55,0) == libjsijniprofilerl ? libjsijniprofilerl.length : reducerr)}`;
      }
       let long_wF = 3.0;
       let baseH = 2.0;
      while (1.86 == baseH) {
          let cancely = String.fromCharCode(103,95,51,56,95,114,101,115,117,108,116,115,0);
          let inouttargetred7 = String.fromCharCode(110,95,52,50,95,103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,0);
          let incidentp: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,101,110,115,101,114,95,98,95,49,57,0),35], [String.fromCharCode(106,95,57,52,95,103,114,97,100,105,101,110,116,115,0),721], [String.fromCharCode(103,95,50,53,95,109,105,110,105,0),112]]);
          let dropdownm: Map<any, any> = new Map([[String.fromCharCode(99,117,114,108,95,115,95,52,48,0),99], [String.fromCharCode(121,95,57,49,95,115,116,116,115,0),996]]);
         xadsdkP = `${parseInt(`${baseH}`)}`;
         cancely = `${(cancely == String.fromCharCode(113,0) ? incidentp.size : cancely.length)}`;
         inouttargetred7 += `${inouttargetred7.length / (Math.max(7, cancely.length))}`;
         incidentp = new Map([[cancely, 2]]);
         dropdownm = new Map([[`${dropdownm.size}`, incidentp.size]]);
         break;
      }
       let clubx = false;
      let incidentb = long_wF <= 9617150.0;
      do {
         long_wF /= Math.max(parseFloat(`${3 - xadsdkP.length}`), 1);
         if (incidentb) {
            break;
         }
      } while (((long_wF - 2.30) < 3.31) && incidentb);
         xadsdkP += `${unfillW.size}`;
      favicong = new Map([[`${unfillW.size}`, unfillW.size]]);
      contextz = `${parseInt(`${statsnomoredatae}`) & 3}`;
   let moviesK = libreact1.length <= 6831630;
   do {
      libreact1 += `${parseInt(`${bang1}`)}`;
      if (moviesK) {
         break;
      }
   } while ((libreact1.includes(`${bang1}`)) && moviesK);
      fcdaebecbcbafcdfceaaeccfeacdb6 = `${contextz.length}`;
   while (sourceV.startsWith(`${yellowanimationlivei.length}`)) {
      yellowanimationlivei += "1";
      break;
   }
      yellowanimationlivei += `${parseInt(`${bang1}`)}`;
      fcdaebecbcbafcdfceaaeccfeacdb6 = `${libreact1.length}`;
   while ((favicong.size | yellowanimationlivei.length) == 4 || 5 == (4 | yellowanimationlivei.length)) {
       let libavformatl = String.fromCharCode(110,95,54,57,95,115,111,119,97,107,101,117,112,0);
       let sinaq = String.fromCharCode(101,118,116,97,103,95,97,95,55,54,0);
      while (libavformatl.length >= 3) {
         libavformatl += `${(libavformatl == String.fromCharCode(76,0) ? sinaq.length : libavformatl.length)}`;
         break;
      }
         sinaq = "2";
       let containerb: Array<any> = [361, 648];
       let mergeru: Array<any> = [String.fromCharCode(120,95,56,53,95,112,114,111,114,101,115,0), String.fromCharCode(103,95,51,53,95,115,101,108,101,99,116,111,112,0), String.fromCharCode(105,110,108,105,110,107,95,102,95,50,51,0)];
       let zoomO: Array<any> = [167, 476, 546];
         sinaq += `${(String.fromCharCode(54,0) == sinaq ? sinaq.length : zoomO.length)}`;
         containerb.push(containerb.length - zoomO.length);
      yellowanimationlivei += `${1 & libavformatl.length}`;
      break;
   }
   let pingv = 5518604 >= contextz.length;
   do {
       let videovar6 = false;
      if (videovar6) {
          let single8 = true;
          let yellowtoredh = String.fromCharCode(108,95,56,48,95,115,110,110,105,100,0);
          let componentsS = 1.0;
          let suggestion3 = 1.0;
          let assistG = String.fromCharCode(114,95,49,56,95,105,116,108,101,0);
         videovar6 = 26.97 >= suggestion3;
         single8 = yellowtoredh.endsWith(`${single8}`);
         yellowtoredh += `${((single8 ? 5 : 5))}`;
         componentsS /= Math.max(1, assistG.length / (Math.max(yellowtoredh.length, 7)));
         suggestion3 -= (parseFloat(`${assistG == String.fromCharCode(78,0) ? parseInt(`${componentsS}`) : assistG.length}`));
      }
      while (!videovar6) {
         videovar6 = !videovar6;
         break;
      }
          let libreactz = 3.0;
          let iconclosewhite9 = String.fromCharCode(103,97,116,104,101,114,105,110,103,95,119,95,49,0);
          let settingv = 1.0;
         videovar6 = settingv <= 20.90;
         libreactz += iconclosewhite9.length;
         iconclosewhite9 += `${iconclosewhite9.length | 1}`;
         settingv *= 1;
      contextz += `${((videovar6 ? 3 : 5))}`;
      if (pingv) {
         break;
      }
   } while (pingv && (contextz.length <= 2 && 2 <= libreact1.length));
       let dycreatorE = String.fromCharCode(99,111,110,115,117,109,101,114,95,107,95,57,52,0);
       let backo = String.fromCharCode(113,95,57,51,95,98,117,105,108,100,115,0);
      let suboutw = 9209829 >= backo.length;
      do {
         backo += `${dycreatorE.length}`;
         if (suboutw) {
            break;
         }
      } while (suboutw && (backo.length >= dycreatorE.length));
      while (backo.length < dycreatorE.length) {
          let videou: Array<any> = [769, 196, 914];
          let shielddoner = String.fromCharCode(115,95,54,54,0);
         dycreatorE = "3";
         videou.push(videou.length % 3);
         shielddoner += `${videou.length / (Math.max(shielddoner.length, 7))}`;
         break;
      }
         backo += `${dycreatorE.length}`;
      while (2 >= dycreatorE.length) {
          let imagemanager1 = 5.0;
          let shirtK = 3.0;
          let notificationfilledJ = 3.0;
         backo = "3";
         imagemanager1 += parseFloat(`${parseInt(`${shirtK}`) - 1}`);
         shirtK += parseFloat(`${1}`);
         notificationfilledJ -= parseFloat(`${2}`);
         break;
      }
       let rulesO = String.fromCharCode(104,97,114,101,95,119,95,51,0);
         backo = `${rulesO.length * dycreatorE.length}`;
      contextz = "3";

          session.cancel(); 
        }
      }
      dispatch(removeVideoFromDownloadThunk(vod, episode.vodSourceId, episode.vodUrlNid))
    }
    RNFetchBlob.fs.unlink(targetVod.imagePath).catch()
    dispatch(removeVodFromDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function clearQueueOnAppStart(): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: wawaGemfileFinal[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        if (episode.status === KVCarouselSort.KVIconchatsend){
       let bodanv: Map<any, any> = new Map([[String.fromCharCode(122,95,56,52,95,97,100,100,105,116,105,111,110,97,108,0),999], [String.fromCharCode(110,95,51,57,95,97,115,112,101,99,116,115,0),239], [String.fromCharCode(112,114,101,115,101,110,116,95,48,95,53,49,0),170]]);
    let shootnogoalG = 2.0;
    let giftbutton3 = 0.0;
    let yellowredcardq = false;
    let signinupM = 5;
    let robotoF = 0;
    let armvaG = 4;
    let iconnewsshareB = 2;
    let imagemanageru = 5.0;
    let stringso = false;
    let grayL = 1.0;
    let homeiconE = String.fromCharCode(98,114,111,97,100,99,97,115,116,115,95,57,95,51,51,0);
    let libavformatS: Array<any> = [946, 475];
    let uimanagerx = String.fromCharCode(97,97,99,112,115,121,95,122,95,49,49,0);
    let playy = 3.0;
    let carouseln = String.fromCharCode(118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,95,120,95,56,0);
    let storeP = String.fromCharCode(115,109,112,116,101,98,97,114,115,95,122,95,55,52,0);
    let roomv = 2.0;
    let episodes2 = 1;
    let flipperE: Map<any, any> = new Map([[String.fromCharCode(118,95,55,95,116,101,115,116,98,114,105,100,103,101,0),520], [String.fromCharCode(112,95,56,54,95,98,117,102,0),941], [String.fromCharCode(110,95,50,49,95,120,120,104,97,115,104,0),768]]);
       let proxyI = 4.0;
       let tickedZ = String.fromCharCode(120,95,55,53,95,105,102,97,100,100,114,115,0);
       let playercommonl = 5.0;
         playercommonl -= (parseFloat(`${tickedZ == String.fromCharCode(105,0) ? tickedZ.length : parseInt(`${playercommonl}`)}`));
         tickedZ = `${parseInt(`${playercommonl}`) % (Math.max(parseInt(`${proxyI}`), 2))}`;
      if (parseFloat(`${tickedZ.length}`) <= proxyI) {
         proxyI *= parseFloat(`${3}`);
      }
      if (tickedZ.length < 3) {
         tickedZ = `${tickedZ.length}`;
      }
      for (let k = 0; k < 2; k++) {
          let mountingc: Map<any, any> = new Map([[String.fromCharCode(119,95,54,49,95,99,111,110,110,101,99,116,115,0),201], [String.fromCharCode(105,114,114,101,108,118,97,110,116,95,122,95,51,51,0),947], [String.fromCharCode(118,99,120,112,114,111,106,95,120,95,56,54,0),961]]);
          let indexT: Array<any> = [13, 802];
          let iconcalendar0: Array<any> = [703, 95];
          let videojsA = String.fromCharCode(114,97,114,105,116,121,95,56,95,51,51,0);
         playercommonl += parseFloat(`${3}`);
         mountingc = new Map([[`${mountingc.size}`, 2]]);
         indexT = [iconcalendar0.length];
         iconcalendar0 = [3];
         videojsA = `${3 ^ videojsA.length}`;
      }
      if (2.94 < (5.11 - proxyI)) {
         tickedZ += `${parseInt(`${playercommonl}`) | 3}`;
      }
      let predictionlossA = 9577173 >= tickedZ.length;
      do {
         tickedZ += "3";
         if (predictionlossA) {
            break;
         }
      } while ((5 < (1 - parseInt(`${proxyI}`)) && 1.34 < (4.30 - proxyI)) && predictionlossA);
          let orangeuparrowE = String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,95,48,95,51,51,0);
          let xvody: Array<any> = [595, 211, 846];
          let vinit_cbZ: Array<any> = [String.fromCharCode(108,95,54,50,95,115,99,104,109,0), String.fromCharCode(102,111,114,116,104,95,116,95,54,57,0), String.fromCharCode(97,108,108,112,97,115,115,95,101,95,54,54,0)];
         tickedZ += `${1 + orangeuparrowE.length}`;
         orangeuparrowE = `${xvody.length / (Math.max(vinit_cbZ.length, 5))}`;
         xvody.push(vinit_cbZ.length);
          let chinasameb: Array<any> = [889, 777];
          let goalP = String.fromCharCode(114,101,99,116,105,102,121,95,54,95,50,56,0);
         playercommonl /= Math.max(parseFloat(`${chinasameb.length + goalP.length}`), 4);
      robotoF %= Math.max(3, robotoF);
       let q_imagej = 4.0;
      for (let x = 0; x < 2; x++) {
         q_imagej += parseInt(`${q_imagej}`);
      }
          let sharew = 4;
         q_imagej -= 1;
         sharew /= Math.max(sharew | sharew, 2);
          let index9 = 4.0;
          let indexL: Array<any> = [712, 42];
          let iconarrowrightwhitev = false;
         q_imagej -= (parseInt(`${index9}`) * (iconarrowrightwhitev ? 3 : 3));
         index9 += indexL.length;
         indexL = [2];
      imagemanageru *= 2 % (Math.max(parseInt(`${q_imagej}`), 10));
      armvaG &= 3 % (Math.max(7, parseInt(`${imagemanageru}`)));
   while (signinupM <= robotoF) {
       let sellt = String.fromCharCode(120,95,57,56,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0);
       let stepX: Array<any> = [433, 931, 679];
       let resend6 = 2.0;
         stepX = [(sellt == String.fromCharCode(82,0) ? stepX.length : sellt.length)];
      if (4 > (5 + sellt.length) && 1 > (parseInt(`${resend6}`) * 5)) {
          let yellowvideoliveR = 3.0;
          let indicatoru = String.fromCharCode(105,95,49,95,116,114,97,110,115,99,116,105,111,110,0);
          let predictionbuttone: Map<any, any> = new Map([[String.fromCharCode(115,95,50,56,95,115,119,105,112,101,100,0),true ], [String.fromCharCode(101,95,54,54,95,102,99,110,116,108,0),false ], [String.fromCharCode(112,111,115,116,114,101,113,117,101,115,116,95,57,95,49,48,48,0),true ]]);
         resend6 /= Math.max(indicatoru.length | 2, 2);
         yellowvideoliveR /= Math.max(parseFloat(`${2}`), 5);
         indicatoru = `${parseInt(`${yellowvideoliveR}`) - 1}`;
         predictionbuttone.set(`${yellowvideoliveR}`, parseInt(`${yellowvideoliveR}`) & 3);
      }
         resend6 -= stepX.length & parseInt(`${resend6}`);
       let codegen8 = String.fromCharCode(109,95,54,48,95,114,101,97,115,115,101,109,98,108,121,0);
       let liveendmodallogop = String.fromCharCode(111,115,100,101,112,95,113,95,51,57,0);
      for (let l = 0; l < 2; l++) {
          let hongkongh = String.fromCharCode(113,95,54,57,95,104,97,114,100,116,104,114,101,115,104,0);
          let hooksT: Map<any, any> = new Map([[String.fromCharCode(116,95,56,50,95,97,108,116,101,114,110,97,116,105,111,110,0),true ], [String.fromCharCode(115,105,103,110,114,97,110,100,95,122,95,53,51,0),true ], [String.fromCharCode(119,95,55,52,95,111,99,116,112,111,105,110,116,0),false ]]);
          let progressf: Array<any> = [471, 66, 781];
          let modal0: Array<any> = [22, 883, 51];
         codegen8 += `${parseInt(`${resend6}`) % (Math.max(stepX.length, 6))}`;
         hongkongh = `${modal0.length}`;
         hooksT = new Map([[`${modal0.length}`, progressf.length | modal0.length]]);
         progressf = [hongkongh.length ^ 1];
      }
       let eactc = String.fromCharCode(107,95,57,95,115,117,98,115,97,109,112,108,101,0);
       let flyerb = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,119,95,49,56,0);
      while (eactc.length < liveendmodallogop.length) {
         liveendmodallogop += "3";
         break;
      }
      for (let f = 0; f < 2; f++) {
          let defaultfootballbgx: Array<any> = [114, 704];
          let penaltygoalF = 1.0;
          let iconrefreshw = 3;
          let stringt = String.fromCharCode(115,95,50,50,95,100,97,105,108,121,0);
          let bangd: Array<any> = [660, 857, 66];
         codegen8 += `${3 << (Math.min(1, sellt.length))}`;
         defaultfootballbgx = [(String.fromCharCode(54,0) == stringt ? bangd.length : stringt.length)];
         penaltygoalF *= parseFloat(`${bangd.length}`);
         iconrefreshw ^= 2;
      }
          let matchactivem = String.fromCharCode(103,101,116,95,120,95,53,50,0);
          let banners: Map<any, any> = new Map([[String.fromCharCode(112,95,52,52,95,97,100,100,0),false ], [String.fromCharCode(115,108,111,112,101,95,99,95,56,53,0),true ]]);
         liveendmodallogop += `${(codegen8 == String.fromCharCode(48,0) ? codegen8.length : eactc.length)}`;
         matchactivem = `${(matchactivem == String.fromCharCode(98,0) ? banners.size : matchactivem.length)}`;
         banners = new Map([[`${banners.size}`, 2]]);
      robotoF |= parseInt(`${imagemanageru}`);
      break;
   }
       let datah = false;
       let iconarrowleftN = String.fromCharCode(107,95,53,51,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0);
         iconarrowleftN = `${(iconarrowleftN.length % (Math.max(6, (datah ? 1 : 1))))}`;
          let iconnointerneta: Map<any, any> = new Map([[String.fromCharCode(116,95,49,95,116,104,117,109,98,0),982], [String.fromCharCode(116,95,56,55,95,105,110,116,101,114,120,121,0),358]]);
          let changea = true;
          let views2 = String.fromCharCode(104,115,118,97,95,117,95,49,48,0);
         datah = views2.length >= 64;
         iconnointerneta = new Map([[`${iconnointerneta.size}`, (iconnointerneta.size % (Math.max(5, (changea ? 1 : 1))))]]);
         changea = iconnointerneta.size < 13 && changea;
         views2 = "1";
         datah = iconarrowleftN.length < 39 && !datah;
      let iconbellactiveC = datah ? !datah : datah;
      do {
          let gesture5 = 2.0;
          let playercommonH = true;
          let upgradeV = 0.0;
          let owngoalW = 0.0;
         datah = iconarrowleftN.length <= 91;
         gesture5 += parseFloat(`${1 + parseInt(`${gesture5}`)}`);
         playercommonH = playercommonH && owngoalW < 63.85;
         upgradeV += parseFloat(`${3 * parseInt(`${gesture5}`)}`);
         owngoalW += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${gesture5}`)), 3))}`);
         if (iconbellactiveC) {
            break;
         }
      } while (iconbellactiveC && (datah && 4 > iconarrowleftN.length));
         iconarrowleftN += `${(iconarrowleftN.length / (Math.max(2, (datah ? 2 : 3))))}`;
      let iconclosewhiteC = 5010621 >= iconarrowleftN.length;
      do {
         iconarrowleftN += `${(iconarrowleftN.length + (datah ? 3 : 5))}`;
         if (iconclosewhiteC) {
            break;
         }
      } while ((datah) && iconclosewhiteC);
      giftbutton3 += parseInt(`${grayL}`) - 1;
   if (4 <= (iconnewsshareB & 1) && 1.29 <= (giftbutton3 * 4.57)) {
       let friendsY: Map<any, any> = new Map([[String.fromCharCode(115,110,112,114,105,110,116,102,95,50,95,56,49,0),false ], [String.fromCharCode(111,95,57,55,95,109,97,110,97,103,101,109,101,110,116,0),true ]]);
       let playershirt1 = 1.0;
      let nextF = playershirt1 >= 5540783.0;
      do {
         playershirt1 += 2;
         if (nextF) {
            break;
         }
      } while (nextF && (3 <= (parseInt(`${playershirt1}`) / (Math.max(5, friendsY.size))) && 1.68 <= (playershirt1 / 1.54)));
      for (let v = 0; v < 2; v++) {
          let productw = String.fromCharCode(98,95,55,57,95,101,103,111,108,111,109,98,0);
         friendsY.set(`${playershirt1}`, parseInt(`${playershirt1}`));
         productw = `${1 * productw.length}`;
      }
         playershirt1 /= Math.max(1, friendsY.size % (Math.max(10, parseInt(`${playershirt1}`))));
         friendsY.set(`${playershirt1}`, parseInt(`${playershirt1}`));
      if (4 <= (friendsY.size | 3) || (parseInt(`${playershirt1}`) + friendsY.size) <= 3) {
         friendsY = new Map([[`${friendsY.size}`, friendsY.size << (Math.min(1, Math.abs(parseInt(`${playershirt1}`))))]]);
      }
      while (3 <= (1 - friendsY.size)) {
         friendsY = new Map([[`${friendsY.size}`, parseInt(`${playershirt1}`)]]);
         break;
      }
      giftbutton3 -= 2;
   }
      imagemanageru -= libavformatS.length;
      yellowredcardq = signinupM >= 5 && 5 >= robotoF;
   let libjsinspectore = 5931698.0 >= giftbutton3;
   do {
       let playg = 3.0;
       let playM = 3.0;
       let mutedw = 2;
      let runtimeschedulerm = playg >= 7701856.0;
      do {
         playg /= Math.max(1, parseInt(`${playM}`) - 2);
         if (runtimeschedulerm) {
            break;
         }
      } while (runtimeschedulerm && (2.79 > (playM / (Math.max(playg, 2))) && (playM / (Math.max(2.79, 7))) > 1.72));
      while (3.96 == (playM - 5.94) && 3.32 == (playg - 5.94)) {
         playM /= Math.max(parseFloat(`${parseInt(`${playg}`)}`), 5);
         break;
      }
      for (let p = 0; p < 3; p++) {
         mutedw += mutedw / (Math.max(6, parseInt(`${playM}`)));
      }
         mutedw <<= Math.min(3, Math.abs(mutedw));
      for (let s = 0; s < 3; s++) {
         playg /= Math.max(3, mutedw);
      }
      let homeloadingH = mutedw >= 9560017;
      do {
         mutedw -= 3;
         if (homeloadingH) {
            break;
         }
      } while (((4 | mutedw) == 2) && homeloadingH);
      if ((playg * playM) < 1.22 || 4.46 < (1.22 * playM)) {
         playg -= parseInt(`${playM}`) * parseInt(`${playg}`);
      }
          let moduless = String.fromCharCode(97,116,111,109,95,49,95,56,0);
         playM *= parseFloat(`${mutedw}`);
         moduless = `${moduless.length | moduless.length}`;
         playM /= Math.max(parseFloat(`${3 - mutedw}`), 4);
      giftbutton3 /= Math.max(((yellowredcardq ? 2 : 3) >> (Math.min(Math.abs(mutedw), 4))), 3);
      if (libjsinspectore) {
         break;
      }
   } while (((shootnogoalG / (Math.max(4, giftbutton3))) < 2.64) && libjsinspectore);
       let frame_uyH: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,105,111,110,95,101,95,49,52,0),439], [String.fromCharCode(117,95,51,57,95,97,114,101,115,0),539]]);
       let modityz = 3.0;
         modityz += parseFloat(`${3 - frame_uyH.size}`);
          let x_animationK = 5.0;
          let taill = String.fromCharCode(112,111,119,95,99,95,54,48,0);
         frame_uyH.set(`${modityz}`, parseInt(`${modityz}`) / (Math.max(frame_uyH.size, 9)));
         x_animationK *= parseFloat(`${3}`);
         taill += `${taill.length}`;
          let smallsound2 = String.fromCharCode(99,95,49,51,95,110,97,117,116,105,99,97,108,0);
          let runtimeschedulert = 3.0;
         modityz *= parseFloat(`${frame_uyH.size % 3}`);
         smallsound2 += `${3 | smallsound2.length}`;
         runtimeschedulert /= Math.max(parseFloat(`${parseInt(`${runtimeschedulert}`) % 3}`), 2);
      if (2 == (frame_uyH.size + parseInt(`${modityz}`))) {
         frame_uyH.set(`${modityz}`, parseInt(`${modityz}`));
      }
      while (3.78 <= (modityz / 1.31)) {
         frame_uyH.set(`${modityz}`, parseInt(`${modityz}`) + frame_uyH.size);
         break;
      }
      for (let p = 0; p < 3; p++) {
         modityz -= parseFloat(`${frame_uyH.size}`);
      }
      stringso = !yellowredcardq && shootnogoalG > 43.43;
   while (4 == (bodanv.size % 5)) {
      stringso = shootnogoalG >= 43.61;
      break;
   }
       let downloadM = String.fromCharCode(109,95,56,57,95,111,118,101,114,102,108,111,119,0);
         downloadM += `${(downloadM == String.fromCharCode(112,0) ? downloadM.length : downloadM.length)}`;
          let iconplayf = String.fromCharCode(115,121,115,114,97,110,100,95,48,95,57,50,0);
          let largebrightnessS = String.fromCharCode(102,95,54,50,0);
          let uimanagerI = 1.0;
         downloadM += `${largebrightnessS.length | 1}`;
         iconplayf += "1";
         largebrightnessS += `${1 % (Math.max(10, iconplayf.length))}`;
         uimanagerI += parseFloat(`${iconplayf.length}`);
         downloadM = `${downloadM.length}`;
      signinupM ^= parseInt(`${giftbutton3}`) & 1;

          RNFetchBlob.fs.unlink(episode.videoPath).catch()
          dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, {progress: {percentage: 0}, status: KVCarouselSort.KVFlipperForward, ffmpegSession: null, sizeInBytes: 0}))
          
        }
      }
    }

    dispatch(resetQueue())
  }
}

export function restartVideoDownloadThunk (
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 
    const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return 
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    await RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    await RNFetchBlob.fs.unlink(partialPath).catch(err => {})

    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid))
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
      progress: {
        percentage: 0
      }, 
      status: KVCarouselSort.KVIconchatsend, 
      sizeInBytes: 0
    }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, targetVod.vodIsAdult))
  }
}

export function pauseVideoDownloadThunk (
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    dispatch(pauseVideoDownload(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid)) 
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))

    const state = getState().downloadVideoReducer

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    const targetEpisode = targetVod.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
    if (!targetEpisode) return 

    if (targetEpisode.ffmpegSession) await FFmpegKit.cancel(targetEpisode.ffmpegSession)
    console.debug('pause', targetEpisode.ffmpegSession)

    await pauseDownloadVod(`${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, () => {})
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: KVCarouselSort.KVSharemodal, ffmpegSession: null}))


    const newState = getState().downloadVideoReducer
    if (newState.queue.length === 0) return
    if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
    dispatch(resumeFirstVideoDownload())
  }
}

function resumeVideoDownloadThunk(
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
  ): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const initialState = getState().downloadVideoReducer
    const initialPercentage = initialState.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      ?.progress.percentage; 

    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status:KVCarouselSort.KVIconchatsend}))

    const isAdult = initialState.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === KVCarouselSort.KVIconchatsend){
       let nativeJ = String.fromCharCode(121,95,57,54,95,115,105,103,110,105,102,105,99,97,110,116,0);
    let clockc = String.fromCharCode(119,95,56,55,95,114,101,102,105,108,108,0);
    let alertB = String.fromCharCode(120,95,51,53,95,114,101,99,101,105,118,105,110,103,0);
    let scorec: Map<any, any> = new Map([[String.fromCharCode(119,95,53,54,95,104,121,112,104,101,110,97,116,101,100,0),54], [String.fromCharCode(107,95,49,56,95,112,97,99,107,101,116,115,0),348]]);
    let dialogo = 4;
    let iconsubssuccessw = 0.0;
    let manifest6 = 4.0;
    let smallbrightnessW = 3.0;
    let footballfieldU = String.fromCharCode(121,95,54,57,95,116,111,98,105,116,0);
    let iconbell0 = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,120,95,49,48,48,0);
    let interstitialn: Array<any> = [77, 656, 563];
    let sliderD = String.fromCharCode(115,95,52,95,116,104,97,119,101,100,0);
    let robotor = String.fromCharCode(110,101,120,116,108,95,99,95,54,48,0);
    let iconqq3 = false;
    let greenarrowupX: Array<any> = [39, 582, 374];
    let showmorer: Array<any> = [583, 803];
    let static_6p = 5.0;
   let iconcloseN = 8261445 <= dialogo;
   do {
      dialogo /= Math.max(5, 3 & clockc.length);
      if (iconcloseN) {
         break;
      }
   } while (((iconsubssuccessw / (Math.max(4, dialogo))) == 1.2) && iconcloseN);
   if (!iconbell0.endsWith(`${dialogo}`)) {
      dialogo >>= Math.min(5, Math.abs(3));
   }
      nativeJ = `${(footballfieldU == String.fromCharCode(104,0) ? dialogo : footballfieldU.length)}`;
   if (4 == (scorec.size + 3)) {
       let iconnotificationnewP = 3.0;
       let reactnativeratingsO = 3.0;
       let strh = 0;
         strh -= strh;
      let notificationfilledz = reactnativeratingsO >= 8560283.0;
      do {
         reactnativeratingsO /= Math.max(3, parseFloat(`${parseInt(`${reactnativeratingsO}`)}`));
         if (notificationfilledz) {
            break;
         }
      } while (notificationfilledz && ((reactnativeratingsO + 4.44) <= 2.37 && 2 <= (3 ^ strh)));
      if (iconnotificationnewP <= reactnativeratingsO) {
         iconnotificationnewP *= parseInt(`${reactnativeratingsO}`);
      }
       let selectionB = 4.0;
       let armvaC = 1.0;
          let leaguedetailsbgU: Array<any> = [594, 499];
         iconnotificationnewP -= parseInt(`${armvaC}`) >> (Math.min(leaguedetailsbgU.length, 2));
       let langd = String.fromCharCode(104,100,108,114,95,98,95,50,0);
      for (let y = 0; y < 3; y++) {
          let notificationfillemptyt = 3.0;
          let mathr: Array<any> = [982, 872, 858];
          let dicelogoA = 0.0;
          let read_ = 2.0;
          let goallogoN = true;
         langd = "2";
         notificationfillemptyt *= parseFloat(`${parseInt(`${read_}`)}`);
         mathr.push(parseInt(`${dicelogoA}`) ^ parseInt(`${notificationfillemptyt}`));
         dicelogoA /= Math.max(2, parseFloat(`${parseInt(`${read_}`)}`));
         goallogoN = read_ > 3.87 && 99 > mathr.length;
      }
         strh <<= Math.min(2, Math.abs(1 % (Math.max(parseInt(`${iconnotificationnewP}`), 2))));
         selectionB *= parseFloat(`${parseInt(`${selectionB}`) * 3}`);
      interstitialn = [3];
   }
       let subbasketballplayerN = 0.0;
       let imageactionliveQ = 2.0;
       let viewsM = true;
       let mergerV = true;
      let arrowa = 7871286.0 <= subbasketballplayerN;
      do {
         subbasketballplayerN *= parseFloat(`${1}`);
         if (arrowa) {
            break;
         }
      } while ((mergerV) && arrowa);
         subbasketballplayerN += parseFloat(`${2 + parseInt(`${imageactionliveQ}`)}`);
      while (!viewsM) {
         viewsM = !viewsM;
         break;
      }
      if (subbasketballplayerN >= 2.62) {
         imageactionliveQ += (3 + (mergerV ? 4 : 3));
      }
       let switch_65 = String.fromCharCode(112,95,49,55,95,97,100,100,98,108,107,0);
      let resultf = mergerV ? !mergerV : mergerV;
      do {
          let uimanager0: Map<any, any> = new Map([[String.fromCharCode(115,101,99,117,114,101,100,95,48,95,50,49,0),150], [String.fromCharCode(108,95,50,50,95,118,100,112,97,117,99,111,110,116,101,120,116,0),902]]);
          let backiconk = String.fromCharCode(117,95,55,95,99,111,109,112,108,101,116,101,100,0);
          let becomeP = String.fromCharCode(102,101,97,116,117,114,101,100,95,108,95,51,56,0);
          let updatesq = String.fromCharCode(115,116,97,116,95,106,95,54,52,0);
          let iconarrowrightwhitee: Map<any, any> = new Map([[String.fromCharCode(112,95,52,50,95,100,101,99,114,121,112,116,105,111,110,0),String.fromCharCode(104,95,54,56,95,112,111,108,113,97,0)], [String.fromCharCode(103,95,52,49,0),String.fromCharCode(98,105,116,115,116,114,101,97,109,95,56,95,52,56,0)]]);
         mergerV = 94.40 > imageactionliveQ;
         uimanager0 = new Map([[`${uimanager0.size}`, uimanager0.size]]);
         backiconk += `${(backiconk == String.fromCharCode(68,0) ? backiconk.length : iconarrowrightwhitee.size)}`;
         becomeP += `${becomeP.length}`;
         updatesq += "1";
         iconarrowrightwhitee = new Map([[becomeP, becomeP.length << (Math.min(Math.abs(2), 2))]]);
         if (resultf) {
            break;
         }
      } while (resultf && (mergerV && 5 >= switch_65.length));
      if ((1.11 * imageactionliveQ) > 5.13) {
         imageactionliveQ += (String.fromCharCode(90,0) == switch_65 ? switch_65.length : (mergerV ? 1 : 3));
      }
         switch_65 += `${parseInt(`${imageactionliveQ}`) ^ 1}`;
      interstitialn.push(2);
       let specd: Array<any> = [595, 358];
       let matchactiveD = false;
      let short_ha = 9376534 <= specd.length;
      do {
         specd.push(3 | specd.length);
         if (short_ha) {
            break;
         }
      } while (short_ha && (3 > (specd.length & 3)));
      while (5 >= specd.length && 2 >= (specd.length % (Math.max(5, 5)))) {
          let libruntimeexecutorJ = 4.0;
          let moreg = 2;
          let videobufferloadingi: Array<any> = [String.fromCharCode(106,95,50,57,95,115,121,115,108,111,103,0), String.fromCharCode(100,101,98,117,103,98,111,120,95,101,95,51,56,0), String.fromCharCode(107,95,53,57,95,99,111,108,108,97,103,101,0)];
         matchactiveD = !matchactiveD;
         libruntimeexecutorJ -= parseFloat(`${videobufferloadingi.length | 1}`);
         moreg <<= Math.min(1, videobufferloadingi.length);
         break;
      }
          let dplusc: Array<any> = [563, 553, 681];
         specd = [specd.length];
         dplusc = [dplusc.length << (Math.min(dplusc.length, 2))];
      if (matchactiveD || 4 < (specd.length * 5)) {
          let iconsubssuccessS = String.fromCharCode(115,104,111,119,95,56,95,56,56,0);
          let greyarrowupS = String.fromCharCode(115,95,54,51,95,101,109,111,116,105,99,111,110,115,0);
         matchactiveD = iconsubssuccessS.length == 4;
         iconsubssuccessS = `${greyarrowupS.length >> (Math.min(Math.abs(1), 4))}`;
         greyarrowupS += "2";
      }
         specd.push((1 | (matchactiveD ? 4 : 3)));
       let condensedn = 3;
       let profilepic_ = 3;
      scorec.set(clockc, parseInt(`${manifest6}`) ^ 1);
   while (sliderD.length >= nativeJ.length) {
      sliderD += `${clockc.length << (Math.min(Math.abs(1), 3))}`;
      break;
   }
   if (clockc.includes(robotor)) {
       let chatroombackgroundS: Array<any> = [398, 755, 687];
       let playlistL = 5.0;
       let reminder_ = String.fromCharCode(107,95,50,49,95,112,97,105,114,105,110,103,0);
       let countryz = 1.0;
       let iconsharefriends0 = 3.0;
         reminder_ += `${parseInt(`${playlistL}`) >> (Math.min(3, Math.abs(parseInt(`${iconsharefriends0}`))))}`;
       let penaltyshootnogoals: Map<any, any> = new Map([[String.fromCharCode(98,105,110,97,115,99,105,105,95,113,95,55,52,0),301], [String.fromCharCode(119,95,54,51,95,98,105,116,118,101,99,0),623]]);
       let mapbufferx: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,95,52,95,52,48,0),147], [String.fromCharCode(98,95,54,50,95,115,105,108,101,110,99,101,100,0),65]]);
       let stylesa: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,101,121,99,104,97,105,110,0),635], [String.fromCharCode(98,108,97,109,101,100,95,56,95,53,48,0),317], [String.fromCharCode(115,95,51,53,95,114,101,99,111,109,112,117,116,101,0),813]]);
       let proxyA: Map<any, any> = new Map([[String.fromCharCode(110,95,49,51,95,97,117,116,111,100,101,108,101,116,101,0),false ], [String.fromCharCode(119,95,50,57,95,99,97,108,99,117,97,108,116,101,0),false ], [String.fromCharCode(113,95,50,48,95,118,101,114,116,101,120,0),false ]]);
      while (4 >= (mapbufferx.size * parseInt(`${iconsharefriends0}`))) {
         mapbufferx = new Map([[reminder_, reminder_.length >> (Math.min(Math.abs(3), 5))]]);
         break;
      }
         playlistL += parseFloat(`${2 | reminder_.length}`);
         playlistL /= Math.max(5, parseFloat(`${3}`));
      let mintegralG = 6388084 >= stylesa.size;
      do {
         stylesa.set(`${countryz}`, penaltyshootnogoals.size * parseInt(`${countryz}`));
         if (mintegralG) {
            break;
         }
      } while (((2 & stylesa.size) > 3 || 2 > (parseInt(`${countryz}`) / (Math.max(stylesa.size, 6)))) && mintegralG);
         chatroombackgroundS = [mapbufferx.size / 2];
      for (let a = 0; a < 3; a++) {
         chatroombackgroundS = [parseInt(`${iconsharefriends0}`) * proxyA.size];
      }
      let scrollviewp = 7458012 <= penaltyshootnogoals.size;
      do {
          let inouttargetredi = 0.0;
          let release__hU: Array<any> = [String.fromCharCode(104,97,114,112,101,110,95,110,95,51,52,0), String.fromCharCode(102,114,101,101,102,111,114,109,95,106,95,52,52,0), String.fromCharCode(118,95,52,55,95,115,101,114,105,97,108,110,111,0)];
          let bottomX = String.fromCharCode(97,95,56,57,95,97,100,97,112,116,0);
          let castg: Array<any> = [167, 458, 646];
          let owngoalX = String.fromCharCode(111,98,115,101,114,118,101,100,95,119,95,53,48,0);
         penaltyshootnogoals.set(`${release__hU.length}`, penaltyshootnogoals.size);
         inouttargetredi -= (String.fromCharCode(90,0) == owngoalX ? castg.length : owngoalX.length);
         release__hU = [(String.fromCharCode(97,0) == bottomX ? bottomX.length : castg.length)];
         if (scrollviewp) {
            break;
         }
      } while (((1 * penaltyshootnogoals.size) < 4 && 1 < (chatroombackgroundS.length * penaltyshootnogoals.size)) && scrollviewp);
          let scorepopsound6 = String.fromCharCode(118,95,51,53,95,117,110,115,101,110,100,0);
          let forwardC = 0.0;
         countryz += (parseFloat(`${String.fromCharCode(118,0) == reminder_ ? mapbufferx.size : reminder_.length}`));
         scorepopsound6 += `${(scorepopsound6 == String.fromCharCode(85,0) ? scorepopsound6.length : parseInt(`${forwardC}`))}`;
         forwardC -= 1;
      if (4 == stylesa.size) {
         stylesa = new Map([[`${penaltyshootnogoals.size}`, penaltyshootnogoals.size]]);
      }
      if (2.72 < playlistL) {
         countryz -= parseFloat(`${mapbufferx.size * reminder_.length}`);
      }
         stylesa = new Map([[`${proxyA.size}`, chatroombackgroundS.length]]);
         reminder_ = "1";
      clockc += `${dialogo}`;
   }
       let defaultplayerimg_ = 1;
      let iconwatchU = defaultplayerimg_ >= 7743847;
      do {
         defaultplayerimg_ >>= Math.min(4, Math.abs(defaultplayerimg_));
         if (iconwatchU) {
            break;
         }
      } while (iconwatchU && (3 <= defaultplayerimg_));
         defaultplayerimg_ /= Math.max(3, defaultplayerimg_);
      for (let i = 0; i < 2; i++) {
         defaultplayerimg_ *= defaultplayerimg_ | defaultplayerimg_;
      }
      smallbrightnessW /= Math.max((parseFloat(`${robotor == String.fromCharCode(88,0) ? robotor.length : scorec.size}`)), 3);

        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(initialPercentage + percentage, 100) 
          }
        }))
      }
    }, 2000)
    
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === KVCarouselSort.KVSharemodal) FFmpegKit.cancel(currentState.ffmpegSession ?? undefined)
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
    }

    const onDownloadEnd = async () => {
       let libfabricjnit = 5.0;
    let iconschedule8 = 2.0;
    let orangeN = String.fromCharCode(117,95,49,50,95,100,105,114,110,97,109,101,0);
    let greyarrowup3 = false;
    let codegen0: Map<any, any> = new Map([[String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,117,95,50,53,0),63], [String.fromCharCode(114,111,116,97,116,105,110,103,95,119,95,53,55,0),431], [String.fromCharCode(115,95,50,52,95,102,105,108,108,105,110,0),334]]);
    let mbbannerd = String.fromCharCode(97,114,109,118,95,56,95,51,54,0);
    let mintegralt: Array<any> = [423, 605, 888];
    let sellK = 4.0;
    let libturbomodulejsijniP = 1.0;
    let homeiconk = 2;
    let runtimec = 1.0;
    let dicelogoA: Array<any> = [String.fromCharCode(114,95,57,53,95,97,118,100,101,118,105,99,101,114,101,115,0), String.fromCharCode(102,97,100,101,95,53,95,49,48,0), String.fromCharCode(108,95,56,95,109,97,108,108,111,99,122,0)];
   let hook7 = 5833672.0 <= libturbomodulejsijniP;
   do {
      libturbomodulejsijniP *= (parseFloat(`${parseInt(`${iconschedule8}`) % (Math.max(1, (greyarrowup3 ? 5 : 4)))}`));
      if (hook7) {
         break;
      }
   } while ((!orangeN.endsWith(`${libturbomodulejsijniP}`)) && hook7);
   while ((libturbomodulejsijniP / (Math.max(sellK, 2))) == 5.49) {
       let modity5 = String.fromCharCode(115,116,114,116,121,112,101,95,52,95,50,53,0);
       let cancelc = String.fromCharCode(100,95,50,57,95,109,121,115,101,108,102,0);
         modity5 = `${modity5.length << (Math.min(Math.abs(3), 1))}`;
         cancelc += `${1 | cancelc.length}`;
       let carouselr = String.fromCharCode(116,95,56,51,95,105,110,105,116,105,97,108,105,122,101,114,0);
         cancelc = `${modity5.length / (Math.max(cancelc.length, 5))}`;
         modity5 = `${2 ^ cancelc.length}`;
      for (let d = 0; d < 1; d++) {
         carouselr = `${modity5.length >> (Math.min(cancelc.length, 3))}`;
      }
      sellK += parseFloat(`${mbbannerd.length % (Math.max(4, modity5.length))}`);
      break;
   }
   if (mintegralt.length <= 5) {
       let window_bkg = String.fromCharCode(114,95,55,51,95,97,112,112,101,110,100,105,110,103,0);
       let predictionactive1 = String.fromCharCode(99,95,52,52,95,99,114,111,112,112,101,100,0);
         predictionactive1 += `${predictionactive1.length}`;
          let bodana: Array<any> = [833, 208];
         predictionactive1 += `${1 & window_bkg.length}`;
         bodana = [bodana.length * 2];
         predictionactive1 += `${window_bkg.length}`;
       let mbridgeQ: Array<any> = [String.fromCharCode(118,95,52,53,95,99,111,112,121,120,0), String.fromCharCode(105,110,105,95,100,95,51,56,0)];
       let neonp: Array<any> = [110, 252];
         mbridgeQ = [neonp.length];
          let crownX = String.fromCharCode(111,95,56,56,95,117,110,109,97,112,102,105,108,101,0);
         neonp.push((String.fromCharCode(116,0) == predictionactive1 ? mbridgeQ.length : predictionactive1.length));
         crownX += "1";
      greyarrowup3 = !greyarrowup3;
   }
   for (let t = 0; t < 3; t++) {
      libturbomodulejsijniP += parseFloat(`${1 % (Math.max(9, codegen0.size))}`);
   }
      mbbannerd += "2";
   let iconarrowrightR = 9654208.0 <= libturbomodulejsijniP;
   do {
      libturbomodulejsijniP /= Math.max(parseFloat(`${3}`), 4);
      if (iconarrowrightR) {
         break;
      }
   } while ((1.31 > (1.47 + libturbomodulejsijniP) && 1 > (3 << (Math.min(4, Math.abs(codegen0.size))))) && iconarrowrightR);

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

       let fastforwardQ = true;
         fastforwardQ = !fastforwardQ;
      let emojiheartp = fastforwardQ ? !fastforwardQ : fastforwardQ;
      do {
         fastforwardQ = (fastforwardQ ? fastforwardQ : !fastforwardQ);
         if (emojiheartp) {
            break;
         }
      } while ((!fastforwardQ) && emojiheartp);
      while (fastforwardQ && !fastforwardQ) {
          let hookf = 4;
         fastforwardQ = !fastforwardQ;
         hookf &= hookf;
         break;
      }
      codegen0.set(`${mbbannerd}`, codegen0.size * 2);
      mintegralt.push(mintegralt.length);
   while ((5 << (Math.min(2, mbbannerd.length))) == 2 && (5 << (Math.min(5, Math.abs(codegen0.size)))) == 2) {
       let privatechatbgb = String.fromCharCode(119,97,118,101,108,101,116,95,101,95,49,53,0);
       let gradlewz = String.fromCharCode(98,111,117,110,100,95,97,95,56,48,0);
       let matchesc = String.fromCharCode(104,95,57,57,95,99,97,110,99,101,108,108,101,114,0);
         privatechatbgb += `${gradlewz.length}`;
          let volumeS = String.fromCharCode(109,101,109,106,114,110,108,95,105,95,54,53,0);
          let nativeP = String.fromCharCode(114,95,50,49,95,115,116,97,109,112,115,0);
          let short_5C: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,105,110,103,95,54,95,49,50,0),String.fromCharCode(103,95,56,95,97,112,112,108,105,101,100,0)], [String.fromCharCode(109,95,53,57,95,116,114,97,110,115,109,105,116,0),String.fromCharCode(103,95,50,55,95,102,111,117,110,100,0)], [String.fromCharCode(101,95,54,56,95,109,97,116,101,114,105,97,108,0),String.fromCharCode(104,95,50,48,95,112,117,98,0)]]);
         privatechatbgb = `${(volumeS == String.fromCharCode(52,0) ? volumeS.length : privatechatbgb.length)}`;
         nativeP = `${1 >> (Math.min(5, Math.abs(short_5C.size)))}`;
         short_5C = new Map([[`${short_5C.size}`, nativeP.length / 1]]);
         matchesc += `${gradlewz.length}`;
          let reducero = 0.0;
         matchesc += `${(gradlewz == String.fromCharCode(120,0) ? gradlewz.length : parseInt(`${reducero}`))}`;
       let minimizeA: Map<any, any> = new Map([[String.fromCharCode(102,95,57,50,95,104,105,103,104,108,105,103,104,116,101,114,0),String.fromCharCode(97,100,100,111,112,95,117,95,57,51,0)], [String.fromCharCode(115,95,54,56,95,100,116,100,102,0),String.fromCharCode(114,101,118,105,111,117,115,95,52,95,53,56,0)]]);
         matchesc += `${(privatechatbgb == String.fromCharCode(53,0) ? privatechatbgb.length : gradlewz.length)}`;
      while (gradlewz == String.fromCharCode(87,0)) {
         matchesc += "3";
         break;
      }
          let fastforwardo = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,122,95,53,49,0);
         gradlewz = `${(matchesc == String.fromCharCode(74,0) ? matchesc.length : minimizeA.size)}`;
         fastforwardo = `${1 << (Math.min(5, fastforwardo.length))}`;
       let penaltygoall: Array<any> = [312, 136, 698];
      codegen0 = new Map([[`${iconschedule8}`, 3 / (Math.max(parseInt(`${iconschedule8}`), 2))]]);
      break;
   }
   while (4.46 <= (iconschedule8 + 5.83)) {
      orangeN += `${parseInt(`${libfabricjnit}`)}`;
      break;
   }
   let auto_867 = mintegralt.length <= 9664835;
   do {
      mintegralt.push(3 & codegen0.size);
      if (auto_867) {
         break;
      }
   } while (((mintegralt.length / (Math.max(8, libfabricjnit))) > 2.46) && auto_867);
      codegen0 = new Map([[orangeN, orangeN.length << (Math.min(5, Math.abs(parseInt(`${iconschedule8}`))))]]);
      const newState = getState().downloadVideoReducer

   let attributedstringC = 6790719.0 <= sellK;
   do {
      sellK -= parseFloat(`${parseInt(`${libfabricjnit}`)}`);
      if (attributedstringC) {
         break;
      }
   } while (((5 >> (Math.min(3, Math.abs(homeiconk)))) <= 4 || (homeiconk << (Math.min(Math.abs(5), 3))) <= 1) && attributedstringC);
   let leakchecker_ = 9041157.0 >= iconschedule8;
   do {
       let arrowdownD = String.fromCharCode(119,95,55,51,95,115,101,97,108,98,111,120,0);
       let icondefaultthumbnail2 = String.fromCharCode(102,105,110,100,101,112,95,102,95,57,51,0);
          let roboto7 = String.fromCharCode(116,95,55,53,0);
          let libyoga1 = String.fromCharCode(116,95,49,48,48,95,112,116,114,109,97,112,115,0);
          let privatechatbgf = 1;
         arrowdownD += `${arrowdownD.length - icondefaultthumbnail2.length}`;
         roboto7 += "2";
         libyoga1 += `${3 & libyoga1.length}`;
         privatechatbgf += 1;
          let webviewV: Array<any> = [88, 670, 628];
          let skipo = false;
         arrowdownD += `${icondefaultthumbnail2.length >> (Math.min(arrowdownD.length, 5))}`;
         webviewV.push(3 * webviewV.length);
         skipo = webviewV.length > 89 && skipo;
         icondefaultthumbnail2 = `${arrowdownD.length}`;
         arrowdownD += `${3 >> (Math.min(3, arrowdownD.length))}`;
      while (2 >= icondefaultthumbnail2.length) {
         arrowdownD += `${(arrowdownD == String.fromCharCode(78,0) ? arrowdownD.length : icondefaultthumbnail2.length)}`;
         break;
      }
      for (let t = 0; t < 1; t++) {
          let libfbs: Array<any> = [498, 800, 686];
          let middlebrightnessf: Array<any> = [88, 965];
          let iconrightorange9 = 4;
         icondefaultthumbnail2 += "1 * iconrightorange9";
         libfbs.push(2);
         middlebrightnessf = [libfbs.length - middlebrightnessf.length];
         iconrightorange9 |= libfbs.length & 2;
      }
      iconschedule8 += parseFloat(`${parseInt(`${iconschedule8}`)}`);
      if (leakchecker_) {
         break;
      }
   } while (leakchecker_ && (2 < (4 * mbbannerd.length) || 2 < (mbbannerd.length ^ 4)));
   for (let d = 0; d < 1; d++) {
      libfabricjnit *= parseInt(`${iconschedule8}`) | mintegralt.length;
   }
   let signinupX = orangeN.length <= 8313025;
   do {
       let adults = true;
       let modeG: Map<any, any> = new Map([[String.fromCharCode(105,95,57,54,95,97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0),347], [String.fromCharCode(115,109,117,115,104,95,48,95,57,57,0),388]]);
       let verticalW = true;
       let entryz = 1.0;
      let usernamep = 8037123 >= modeG.size;
      do {
         modeG.set(`${entryz}`, 3);
         if (usernamep) {
            break;
         }
      } while (usernamep && (verticalW));
          let libjsiX = String.fromCharCode(120,95,57,57,95,98,105,116,115,104,105,102,116,0);
         adults = verticalW;
         libjsiX = `${libjsiX.length - libjsiX.length}`;
      for (let u = 0; u < 2; u++) {
          let nextA = 4.0;
          let libavfilterS = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,102,95,53,53,0);
          let switch_guh: Array<any> = [243, 966];
          let readu = String.fromCharCode(108,95,52,52,95,100,110,120,104,100,100,97,116,97,0);
          let footballfieldn = String.fromCharCode(119,95,52,54,95,117,110,115,101,108,101,99,116,0);
         adults = entryz >= 100.87;
         nextA -= parseFloat(`${parseInt(`${nextA}`)}`);
         libavfilterS = `${2 + libavfilterS.length}`;
         switch_guh = [footballfieldn.length ^ parseInt(`${nextA}`)];
         readu += `${libavfilterS.length | switch_guh.length}`;
         footballfieldn = `${3 & switch_guh.length}`;
      }
         entryz += parseFloat(`${2}`);
       let action7: Array<any> = [String.fromCharCode(110,95,50,95,111,117,116,0), String.fromCharCode(112,114,111,102,105,108,105,110,103,95,103,95,53,54,0), String.fromCharCode(102,105,108,108,105,110,103,95,52,95,54,53,0)];
       let tnewarchdefaultsi = false;
          let awayplayero = String.fromCharCode(118,95,52,50,95,121,97,98,101,0);
          let refreshV = 3.0;
         adults = verticalW;
         awayplayero += `${awayplayero.length}`;
         refreshV *= parseFloat(`${awayplayero.length}`);
         adults = !adults && action7.length <= 15;
          let predictionlossP: Map<any, any> = new Map([[String.fromCharCode(109,101,109,98,101,114,115,95,48,95,50,0),String.fromCharCode(104,95,53,95,112,114,101,109,117,108,116,105,112,108,121,0)], [String.fromCharCode(97,95,52,53,95,119,105,110,101,114,114,110,111,0),String.fromCharCode(101,109,98,101,100,100,105,110,103,95,98,95,54,49,0)], [String.fromCharCode(122,95,53,53,0),String.fromCharCode(104,95,49,53,95,117,110,108,105,109,105,116,101,100,0)]]);
          let unreadd = 1.0;
         verticalW = (action7.length / (Math.max(7, modeG.size))) > 82;
         predictionlossP = new Map([[`${predictionlossP.size}`, parseInt(`${unreadd}`)]]);
         unreadd += parseFloat(`${2}`);
         verticalW = null != modeG.get(`${adults}`);
         modeG = new Map([[`${modeG.size}`, 1]]);
       let middlebrightness1 = String.fromCharCode(117,112,108,111,97,100,101,114,95,122,95,49,55,0);
       let q_county = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,105,95,56,51,0);
      orangeN = `${mintegralt.length}`;
      if (signinupX) {
         break;
      }
   } while ((3 <= (mintegralt.length + 1) || 1 <= (1 + orangeN.length)) && signinupX);
   if (orangeN.length < parseInt(`${libfabricjnit}`)) {
      orangeN = `${mbbannerd.length}`;
   }
   while ((2.73 * runtimec) < 5.48) {
      runtimec += (String.fromCharCode(106,0) == orangeN ? orangeN.length : parseInt(`${runtimec}`));
      break;
   }
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
      
    }

    const handleError = () => {
       let styleH = String.fromCharCode(100,101,108,105,109,105,116,101,100,95,103,95,55,52,0);
    let nalyticse: Map<any, any> = new Map([[String.fromCharCode(110,101,116,119,111,114,107,115,95,98,95,55,55,0),945], [String.fromCharCode(98,105,119,103,116,95,54,95,49,52,0),979], [String.fromCharCode(102,95,52,57,95,104,117,100,0),83]]);
    let orangedownarrowr = 3.0;
    let iconcalendart = String.fromCharCode(98,95,52,57,95,116,105,109,101,117,116,105,108,115,0);
    let libavutilg = 0.0;
    let privilegeY = String.fromCharCode(105,95,54,53,0);
    let playW = 4;
    let questiconh = true;
    let phoneu = 1;
    let robotov = String.fromCharCode(103,95,55,52,95,114,101,106,101,99,116,105,111,110,0);
    let settingd = 5;
      libavutilg *= parseFloat(`${3 << (Math.min(Math.abs(playW), 5))}`);
       let header8 = String.fromCharCode(116,95,50,52,95,114,101,99,111,110,115,116,114,117,99,116,105,111,110,0);
      for (let i = 0; i < 2; i++) {
         header8 += `${(header8 == String.fromCharCode(122,0) ? header8.length : header8.length)}`;
      }
      let arrowrighth = 7257470 <= header8.length;
      do {
          let unread7 = String.fromCharCode(122,95,53,51,95,112,111,116,105,115,105,111,110,0);
          let subsh = 3;
          let libruntimeexecutorB = String.fromCharCode(115,108,117,103,95,117,95,50,53,0);
          let dycreators = String.fromCharCode(122,95,54,54,95,112,111,105,110,116,101,114,0);
          let mbsplashv: Map<any, any> = new Map([[String.fromCharCode(113,95,49,52,95,117,110,115,97,102,101,0),String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,103,95,53,56,0)], [String.fromCharCode(112,95,55,51,95,97,116,116,114,97,99,116,0),String.fromCharCode(101,99,117,114,115,105,118,101,95,103,95,54,56,0)]]);
         header8 = `${2 - header8.length}`;
         unread7 += `${unread7.length}`;
         subsh /= Math.max(dycreators.length + unread7.length, 1);
         libruntimeexecutorB = `${(String.fromCharCode(117,0) == dycreators ? dycreators.length : mbsplashv.size)}`;
         mbsplashv.set(`${subsh}`, 2 + subsh);
         if (arrowrighth) {
            break;
         }
      } while (arrowrighth && (header8 == header8));
      for (let k = 0; k < 2; k++) {
         header8 += "2";
      }
      questiconh = privilegeY == styleH;
   while ((parseInt(`${orangedownarrowr}`) / (Math.max(nalyticse.size, 1))) <= 1 && 1.84 <= (orangedownarrowr / (Math.max(3.81, 3)))) {
       let goallogoy: Array<any> = [String.fromCharCode(121,95,54,56,95,117,110,100,111,116,116,101,100,0), String.fromCharCode(122,95,53,54,95,100,101,97,108,108,111,99,97,116,105,111,110,0)];
       let faviconf: Array<any> = [436, 413];
         faviconf.push(goallogoy.length);
         faviconf = [goallogoy.length * faviconf.length];
       let libglogQ = 5.0;
         libglogQ -= faviconf.length;
          let codegend = 4.0;
         faviconf = [faviconf.length];
         codegend += parseFloat(`${parseInt(`${codegend}`) & parseInt(`${codegend}`)}`);
         goallogoy.push(goallogoy.length);
      nalyticse.set(`${orangedownarrowr}`, playW ^ parseInt(`${orangedownarrowr}`));
      break;
   }

      

   let greym = questiconh ? !questiconh : questiconh;
   do {
      questiconh = playW > 87;
      if (greym) {
         break;
      }
   } while (((2 ^ phoneu) >= 2) && greym);
      iconcalendart += `${parseInt(`${orangedownarrowr}`) - iconcalendart.length}`;
   while (5.29 <= (libavutilg * 2.46)) {
       let anytimeV = String.fromCharCode(99,95,53,54,95,97,118,103,121,0);
       let videobufferloading7: Array<any> = [String.fromCharCode(98,110,109,112,105,95,107,95,53,50,0), String.fromCharCode(105,104,100,114,95,98,95,56,49,0)];
       let libmapbufferjni0 = 0.0;
       let linkZ = String.fromCharCode(118,101,114,116,105,99,101,115,95,119,95,52,54,0);
      let splashX = libmapbufferjni0 >= 5311626.0;
      do {
          let componentsC = String.fromCharCode(109,101,109,115,101,116,95,115,95,52,54,0);
          let windF = false;
          let const_qX = false;
         libmapbufferjni0 += parseFloat(`${videobufferloading7.length}`);
         componentsC = `${1 | componentsC.length}`;
         windF = componentsC.length >= 97;
         const_qX = (windF ? !const_qX : !windF);
         if (splashX) {
            break;
         }
      } while (splashX && (!linkZ.includes(`${libmapbufferjni0}`)));
      for (let d = 0; d < 1; d++) {
          let basketballhometeam7 = false;
          let resendn = String.fromCharCode(112,97,99,107,97,103,101,115,95,121,95,57,50,0);
          let albumv = String.fromCharCode(101,95,56,51,95,116,104,101,105,114,0);
          let logouser0 = false;
          let inactiveC = 0;
         anytimeV += `${videobufferloading7.length}`;
         basketballhometeam7 = resendn.length > 71 && !logouser0;
         resendn += `${resendn.length}`;
         albumv = "1";
         logouser0 = basketballhometeam7;
         inactiveC -= albumv.length << (Math.min(5, resendn.length));
      }
      if (5 > (parseInt(`${libmapbufferjni0}`) * linkZ.length) && (parseInt(`${libmapbufferjni0}`) * 5) > 5) {
         libmapbufferjni0 *= parseFloat(`${videobufferloading7.length & parseInt(`${libmapbufferjni0}`)}`);
      }
      for (let q = 0; q < 2; q++) {
         linkZ += `${linkZ.length}`;
      }
      if (videobufferloading7.includes(libmapbufferjni0)) {
         videobufferloading7.push(2 | anytimeV.length);
      }
      let favicona = 8087283.0 >= libmapbufferjni0;
      do {
         libmapbufferjni0 /= Math.max(4, parseFloat(`${anytimeV.length}`));
         if (favicona) {
            break;
         }
      } while ((2 < (2 ^ linkZ.length) || (libmapbufferjni0 + 4.65) < 1.10) && favicona);
      if (3 < anytimeV.length) {
         anytimeV = `${1 << (Math.min(5, linkZ.length))}`;
      }
         libmapbufferjni0 -= parseFloat(`${videobufferloading7.length}`);
          let defaultroombge = 1.0;
         libmapbufferjni0 *= parseFloat(`${videobufferloading7.length ^ 1}`);
         defaultroombge -= parseFloat(`${parseInt(`${defaultroombge}`)}`);
      for (let l = 0; l < 2; l++) {
         linkZ += `${(String.fromCharCode(72,0) == anytimeV ? videobufferloading7.length : anytimeV.length)}`;
      }
       let notificationfilledu = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,111,95,53,57,0);
       let alert9 = String.fromCharCode(116,95,49,52,95,98,117,105,108,100,105,110,103,0);
         alert9 += `${(anytimeV == String.fromCharCode(114,0) ? notificationfilledu.length : anytimeV.length)}`;
      libavutilg -= parseFloat(`${parseInt(`${libmapbufferjni0}`)}`);
      break;
   }
      const state = getState().downloadVideoReducer

   if (5 <= (playW + styleH.length) && 3 <= (playW + 5)) {
      playW ^= parseInt(`${libavutilg}`);
   }
   if (privilegeY.length <= 4 && !questiconh) {
      questiconh = iconcalendart.length >= 40 && !questiconh;
   }
       let description_xQ = 4.0;
       let loading_ = String.fromCharCode(115,104,114,117,110,107,95,103,95,50,51,0);
       let zhengpianh: Array<any> = [245, 382];
         description_xQ *= 1 << (Math.min(4, Math.abs(parseInt(`${description_xQ}`))));
         description_xQ += parseInt(`${description_xQ}`) >> (Math.min(loading_.length, 2));
      for (let d = 0; d < 1; d++) {
         zhengpianh.push(3 % (Math.max(9, parseInt(`${description_xQ}`))));
      }
      while (4.60 <= (1.69 / (Math.max(1, description_xQ))) && (description_xQ / (Math.max(zhengpianh.length, 9))) <= 1.69) {
          let assistm = String.fromCharCode(101,95,52,53,95,105,110,102,111,114,109,97,116,105,111,110,0);
          let klevinm = 2.0;
          let description_g7j = String.fromCharCode(108,111,115,115,121,95,119,95,57,56,0);
          let stylem = 4.0;
         zhengpianh.push(assistm.length << (Math.min(Math.abs(2), 3)));
         assistm = `${description_g7j.length}`;
         klevinm /= Math.max(3, parseFloat(`${2}`));
         description_g7j = `${1 >> (Math.min(5, Math.abs(parseInt(`${klevinm}`))))}`;
         stylem -= parseFloat(`${description_g7j.length}`);
         break;
      }
         description_xQ -= 2;
         zhengpianh = [2];
      while (4 >= (zhengpianh.length / (Math.max(9, loading_.length))) && (4 / (Math.max(8, loading_.length))) >= 4) {
         loading_ = `${zhengpianh.length & loading_.length}`;
         break;
      }
       let footballfieldv = 4;
      if (parseInt(`${description_xQ}`) > zhengpianh.length) {
         description_xQ *= footballfieldv ^ 3;
      }
      iconcalendart = `${styleH.length}`;
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

   while (3 >= (5 ^ nalyticse.size) && (styleH.length ^ nalyticse.size) >= 5) {
      styleH += `${styleH.length}`;
      break;
   }
       let dependencies7 = String.fromCharCode(109,95,57,52,95,100,101,115,99,114,0);
      let vignette8 = String.fromCharCode(56,107,52,103,98,57,0) == dependencies7;
      do {
         dependencies7 = `${(String.fromCharCode(106,0) == dependencies7 ? dependencies7.length : dependencies7.length)}`;
         if (vignette8) {
            break;
         }
      } while (vignette8 && (dependencies7.length >= 1));
      while (2 >= dependencies7.length && dependencies7 == String.fromCharCode(53,0)) {
          let cataloga = String.fromCharCode(109,95,53,50,95,104,111,114,105,122,111,110,116,97,108,108,121,0);
          let issubk = 1.0;
          let m_countj = String.fromCharCode(112,114,111,100,117,99,116,102,95,105,95,52,53,0);
         dependencies7 = "3";
         cataloga = `${cataloga.length}`;
         issubk -= parseInt(`${issubk}`);
         m_countj += `${2 | parseInt(`${issubk}`)}`;
         break;
      }
      let valueso = dependencies7.length >= 6215432;
      do {
         dependencies7 += `${dependencies7.length & 3}`;
         if (valueso) {
            break;
         }
      } while ((1 >= dependencies7.length) && valueso);
      robotov = `${phoneu}`;
      robotov += `${(privilegeY == String.fromCharCode(100,0) ? playW : privilegeY.length)}`;
      if (!targetEpisode) return
      if (targetEpisode?.status === KVCarouselSort.KVSharemodal){

   if (orangedownarrowr > libavutilg) {
       let libffmpegkitD = String.fromCharCode(115,95,52,57,95,121,105,101,108,100,0);
       let bellreminder7 = true;
       let slider6 = false;
          let unfill8 = 1.0;
          let auto_lov = 0.0;
          let rewardU = String.fromCharCode(111,102,111,114,109,97,116,95,110,95,55,0);
         bellreminder7 = 22.28 >= (unfill8 * auto_lov);
         unfill8 -= parseFloat(`${1 >> (Math.min(5, rewardU.length))}`);
         auto_lov /= Math.max(parseFloat(`${rewardU.length}`), 5);
      if (bellreminder7) {
          let kickt = String.fromCharCode(102,95,51,50,95,99,114,121,115,116,97,108,104,100,0);
         bellreminder7 = (36 <= (libffmpegkitD.length & (slider6 ? 36 : libffmpegkitD.length)));
         kickt += `${kickt.length}`;
      }
      libavutilg -= (parseFloat(`${String.fromCharCode(104,0) == iconcalendart ? iconcalendart.length : nalyticse.size}`));
   }
      libavutilg /= Math.max(3, parseFloat(`${privilegeY.length % (Math.max(3, 5))}`));
   while (questiconh) {
      questiconh = libavutilg > 81.5 || iconcalendart == String.fromCharCode(87,0);
      break;
   }
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: KVCarouselSort.KVFlipperForward
      }))

       let backwarda: Array<any> = [796, 341, 890];
       let views6 = String.fromCharCode(119,105,116,104,100,114,97,119,95,122,95,50,54,0);
          let twitterC = String.fromCharCode(108,95,51,49,95,120,112,111,114,116,101,100,0);
          let emojiN = String.fromCharCode(109,95,50,56,95,114,101,102,112,108,97,110,101,0);
         views6 = `${views6.length}`;
         twitterC += `${emojiN.length * twitterC.length}`;
         emojiN = `${(String.fromCharCode(113,0) == emojiN ? emojiN.length : twitterC.length)}`;
      for (let q = 0; q < 2; q++) {
         backwarda.push(backwarda.length * 3);
      }
      while (backwarda.length <= views6.length) {
          let iconviewergifd = String.fromCharCode(99,95,56,53,95,113,117,101,117,101,115,0);
         backwarda.push(iconviewergifd.length + backwarda.length);
         break;
      }
      let iconshare6 = 9274857 <= backwarda.length;
      do {
          let linkw = String.fromCharCode(98,95,56,57,95,115,116,105,114,110,103,0);
          let imagewatchliveg = false;
          let iconarrowrightwhite8 = false;
          let owngoalc: Map<any, any> = new Map([[String.fromCharCode(109,111,110,103,111,95,116,95,54,55,0),585], [String.fromCharCode(100,95,50,57,95,114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),286]]);
         backwarda = [views6.length];
         linkw = `${(3 | (imagewatchliveg ? 4 : 3))}`;
         imagewatchliveg = (!iconarrowrightwhite8 ? imagewatchliveg : !iconarrowrightwhite8);
         owngoalc = new Map([[`${iconarrowrightwhite8}`, linkw.length]]);
         if (iconshare6) {
            break;
         }
      } while (iconshare6 && (4 == (backwarda.length ^ 4) && 4 == (views6.length ^ backwarda.length)));
         views6 = `${views6.length ^ backwarda.length}`;
          let dangerx: Map<any, any> = new Map([[String.fromCharCode(105,95,50,57,95,105,110,100,101,112,101,110,100,101,100,0),String.fromCharCode(108,95,52,51,95,97,116,114,97,99,97,108,0)], [String.fromCharCode(103,117,116,116,101,114,95,99,95,56,55,0),String.fromCharCode(99,97,115,116,101,100,95,57,95,54,57,0)]]);
          let iconarrowrightG = 0.0;
         views6 = `${1 / (Math.max(4, views6.length))}`;
         dangerx = new Map([[`${dangerx.size}`, 1]]);
         iconarrowrightG += parseFloat(`${parseInt(`${iconarrowrightG}`)}`);
      settingd &= views6.length;
   for (let b = 0; b < 2; b++) {
      libavutilg *= (parseFloat(`${privilegeY == String.fromCharCode(56,0) ? phoneu : privilegeY.length}`));
   }
   for (let x = 0; x < 3; x++) {
       let classesw = 3.0;
       let smallorangemanR: Array<any> = [149, 37];
         classesw /= Math.max(2, parseInt(`${classesw}`));
      for (let s = 0; s < 1; s++) {
         classesw += 1 << (Math.min(Math.abs(parseInt(`${classesw}`)), 3));
      }
      if ((smallorangemanR.length & 3) == 3 || 1.0 == (classesw / 5.63)) {
          let foregroundt = 1.0;
         smallorangemanR.push(3 * parseInt(`${classesw}`));
         foregroundt -= 3 & parseInt(`${foregroundt}`);
      }
       let connectionK = 0.0;
       let e_unlocke = 3.0;
       let countdownf: Array<any> = [833, 417, 41];
         classesw -= parseInt(`${connectionK}`) ^ 2;
      iconcalendart = `${2 + robotov.length}`;
   }


      const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

   while (!robotov.startsWith(`${questiconh}`)) {
      questiconh = libavutilg > 83.80;
      break;
   }
       let predictionE = 2;
       let liveshareq = String.fromCharCode(98,95,51,52,0);
       let leakcheckerL: Map<any, any> = new Map([[String.fromCharCode(109,117,116,117,97,108,95,112,95,50,49,0),585], [String.fromCharCode(117,110,101,109,112,116,121,95,106,95,53,57,0),300], [String.fromCharCode(121,95,53,53,0),265]]);
      if (3 <= (2 / (Math.max(7, liveshareq.length))) || (liveshareq.length / (Math.max(5, predictionE))) <= 2) {
          let iconR = String.fromCharCode(121,95,55,54,95,108,111,110,103,101,115,116,0);
          let clocki = String.fromCharCode(118,112,109,116,95,105,95,51,57,0);
          let mbridgex = String.fromCharCode(110,111,116,104,105,110,103,95,51,95,52,49,0);
          let basketballv = String.fromCharCode(116,95,51,53,95,102,114,97,109,101,114,97,116,101,0);
          let indicator5 = 2.0;
         predictionE &= 2 * mbridgex.length;
         iconR += `${iconR.length}`;
         clocki = `${iconR.length << (Math.min(clocki.length, 4))}`;
         mbridgex = `${(String.fromCharCode(67,0) == basketballv ? basketballv.length : parseInt(`${indicator5}`))}`;
         indicator5 -= parseFloat(`${parseInt(`${indicator5}`)}`);
      }
       let thailand_: Array<any> = [String.fromCharCode(109,95,55,52,95,105,102,111,114,109,97,116,0), String.fromCharCode(121,95,55,55,95,98,101,116,119,101,101,110,0), String.fromCharCode(119,101,101,107,100,97,121,115,95,52,95,53,57,0)];
      if (5 < (liveshareq.length % 3) && 2 < (leakcheckerL.size % (Math.max(3, 8)))) {
         leakcheckerL.set(`${thailand_.length}`, leakcheckerL.size);
      }
          let libfbF = String.fromCharCode(107,95,53,50,95,109,111,100,105,102,105,101,114,0);
          let dplusm = 2.0;
         predictionE /= Math.max(4, 3);
         libfbF = `${(String.fromCharCode(51,0) == libfbF ? parseInt(`${dplusm}`) : libfbF.length)}`;
         dplusm -= parseFloat(`${libfbF.length & parseInt(`${dplusm}`)}`);
      if (liveshareq.length > predictionE) {
          let profileframeC = String.fromCharCode(100,95,49,56,95,114,101,116,114,105,101,118,101,0);
         predictionE <<= Math.min(Math.abs(predictionE / 2), 5);
         profileframeC = "3";
      }
      let iconarrowrightwhitee = 8418410 >= liveshareq.length;
      do {
          let submit4 = 0.0;
          let infoq = false;
          let assistC: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,100,98,95,98,95,49,53,0),931], [String.fromCharCode(116,121,112,101,115,116,114,95,122,95,55,50,0),601], [String.fromCharCode(122,95,52,50,95,112,102,114,97,109,101,0),961]]);
          let backiconN = 4.0;
          let overlayi: Map<any, any> = new Map([[String.fromCharCode(112,95,57,54,95,104,116,108,116,0),false ], [String.fromCharCode(98,97,115,101,110,97,109,101,95,112,95,53,50,0),true ], [String.fromCharCode(114,101,99,116,97,110,103,108,101,115,95,115,95,52,57,0),true ]]);
         liveshareq += `${predictionE / 1}`;
         submit4 *= parseInt(`${backiconN}`);
         infoq = 84 < assistC.size;
         assistC.set(`${infoq}`, 2);
         backiconN /= Math.max(assistC.size >> (Math.min(3, Math.abs(parseInt(`${backiconN}`)))), 1);
         overlayi = new Map([[`${submit4}`, parseInt(`${backiconN}`) + parseInt(`${submit4}`)]]);
         if (iconarrowrightwhitee) {
            break;
         }
      } while (((liveshareq.length % (Math.max(1, 9))) <= 4) && iconarrowrightwhitee);
      let distv = String.fromCharCode(120,103,99,114,0) == liveshareq;
      do {
          let private_sB = 3.0;
          let libswresample2 = String.fromCharCode(114,101,99,111,109,112,117,116,101,95,117,95,55,48,0);
         liveshareq = `${parseInt(`${private_sB}`) / (Math.max(liveshareq.length, 6))}`;
         private_sB *= parseFloat(`${3 | libswresample2.length}`);
         libswresample2 += `${libswresample2.length}`;
         if (distv) {
            break;
         }
      } while (distv && (thailand_.length < 1));
      while (1 <= (leakcheckerL.size & thailand_.length) || 1 <= (thailand_.length & leakcheckerL.size)) {
         leakcheckerL.set(`${predictionE}`, (String.fromCharCode(117,0) == liveshareq ? liveshareq.length : predictionE));
         break;
      }
         leakcheckerL = new Map([[`${thailand_.length}`, liveshareq.length]]);
      playW += iconcalendart.length / 3;
   for (let y = 0; y < 3; y++) {
       let championa = 1;
         championa -= 1 - championa;
       let checkboxL = String.fromCharCode(106,95,54,52,95,99,97,110,99,101,108,0);
         championa %= Math.max(championa - 3, 3);
      libavutilg *= parseFloat(`${styleH.length - 2}`);
   }
      if (!targetVod) return 
      const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
      RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
      RNFetchBlob.fs.unlink(partialPath).catch(err => {})

      libavutilg /= Math.max(parseFloat(`${parseInt(`${libavutilg}`) * 3}`), 2);
      privilegeY += `${nalyticse.size << (Math.min(styleH.length, 4))}`;
       let libreactZ = String.fromCharCode(98,95,52,57,95,110,111,116,104,105,110,103,0);
       let shielddonex: Map<any, any> = new Map([[String.fromCharCode(108,105,98,99,101,108,116,95,103,95,50,49,0),123], [String.fromCharCode(112,114,111,109,112,101,103,95,119,95,51,55,0),176], [String.fromCharCode(108,95,53,55,95,99,111,110,116,101,120,116,115,0),188]]);
      while (2 <= libreactZ.length) {
         shielddonex.set(`${libreactZ}`, libreactZ.length << (Math.min(Math.abs(2), 2)));
         break;
      }
      if (1 > shielddonex.size) {
         shielddonex.set(libreactZ, 1 / (Math.max(1, shielddonex.size)));
      }
      while (!libreactZ.includes(`${shielddonex.size}`)) {
         shielddonex.set(`${libreactZ}`, 2);
         break;
      }
       let yellowl: Array<any> = [893, 685];
       let iconpipexpandr: Array<any> = [778, 687, 823];
      while (shielddonex.get(`${iconpipexpandr.length}`) == null) {
         iconpipexpandr.push((String.fromCharCode(72,0) == libreactZ ? libreactZ.length : shielddonex.size));
         break;
      }
      if (1 <= (4 ^ libreactZ.length) && 5 <= (shielddonex.size ^ 4)) {
         libreactZ += "2";
      }
      playW ^= 2 * libreactZ.length;
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode?.status === KVCarouselSort.KVSharemodal){
        return 
      }
      concatPartialVideos(
        `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
        ()=>{
          
          
          
          
          
          dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
            status: KVCarouselSort.KVImagesPlaceholder, 
            sizeInBytes: finalSizeInBytes, 
            progress: {
              percentage: 100
            }
          }))
          onDownloadEnd()          
        }, 
        handleError, 
        url
      )
    }

    const handleSessionCreated = ({session}: {session: FFmpegSession}) => {
      const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 

      if (targetEpisode.status === KVCarouselSort.KVSharemodal) { 
        session.cancel()
      }
      else {
        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {ffmpegSession: session.getSessionId()}))
      }
    }

    if (!url) return  
    if (initialState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return; 
    if (initialState.queue.length === 0) return; 
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(startVideoDownload(vod, vodSourceId, vodUrlNid))
    
    resumeDownloadVod(
      `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
      url, 
      handleUpdate, 
      handleComplete, 
      handleError, 
      handleSessionCreated, 
    )
  }
}

export function resumeVideoToDownloadThunk(
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: KVCarouselSort.KVIconchatsend}))
    dispatch(resumeVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function updateAllVodDetailsThunk(): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const downloads = getState().downloadVideoReducer.downloads
    downloads.forEach(async (download) => {
      const newVod = await wawaUsernameAdult.getDetail(download.vod.vod_id.toString(), download.vod.type_id.toString(), download.vod.vod_source_name, {xMode: download.vodIsAdult})
      dispatch(updateVodDetails(newVod))
    })


  };
}

export function manualKillVideoDownloadThunk(
  vod: wawaSellProfileinactive,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, wawaIconsubssuccess, any, wawaPackage> {
  return async function (dispatch, getState) {
    const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode.ffmpegSession === null) return 

      FFmpegKit.cancel(targetEpisode.ffmpegSession)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: KVCarouselSort.KVFlipperForward}))
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      dispatch(resumeFirstVideoDownload())
  }
}