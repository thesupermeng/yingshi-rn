import { wwMoon, wwCountryService } from "@type/ww_bang";
import { wwControl } from "@type/ww_dycreator_result";
import { concatPartialVideos, downloadVod, downloadVodImage, getUrlOfVod, pauseDownloadVod, resumeDownloadVod } from "../../utils/ww_ksad";
import { ThunkAction } from "redux-thunk";
import { DVGGrayTeamdetailsbg, wwResendTextlayoutmanager, wwAndroid, wwTextinputDirect } from "@type/ww_skip";
import { wwEighteenShirt } from "@redux/ww_small";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility/ww_icon";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegKit, FFmpegSession } from "ffmpeg-kit-react-native";
import { throttle } from "lodash";
import { wwIconedit } from "../../api/ww_init_dependencies";

function addVideoToDownload(vod: wwControl, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean): wwMoon {
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

function updateVideoDownload(vod: wwControl, vodSourceId: number, vodUrlNid: number, optional: wwCountryService): wwMoon {
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

function startVideoDownload(vod: wwControl, vodSourceId: number, vodUrlNid: number): wwMoon {
  return {
    type: 'START_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function endVideoDownload(vod: wwControl, vodSourceId: number, vodUrlNid: number): wwMoon {
  return {
    type: 'END_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function addDownloadToQueue(vod: wwControl, vodSourceId: number, vodUrlNid: number): wwMoon {
  return {
    type: 'ADD_DOWNLOAD_TO_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeDownloadFromQueue(vod: wwControl, vodSourceId: number, vodUrlNid: number): wwMoon {
  return {
    type: 'REMOVE_DOWNLOAD_FROM_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeVideoFromDownload(vod: wwControl, vodSourceId: number, vodUrlNid: number): wwMoon {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}


export function removeVodFromDownload(vod: wwControl, vodSourceId: number, vodUrlNid: number): wwMoon {
  return {
    type: 'REMOVE_VOD_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function resetQueue(): wwMoon {
  return {
    type: "RESET_QUEUE",
    
    payload: null 
  }
}

function pauseVideoDownload(vod: wwControl, vodSourceId: number, vodUrlNid: number): wwMoon {
  return {
    type: 'PAUSE_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function updateVodDetails(vod: wwControl): wwMoon {
  return {
    type: 'UPDATE_VOD_DETAILS', 
    payload: {
      vod, 
      vodSourceId: 0, 
      vodUrlNid: 0, 
    }
  }
}

function startFirstVideoDownload(): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
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

function resumeFirstVideoDownload(): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
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
       let predictionarrow4: Array<any> = [555, 220, 338];
    let rulesl = 3;
    let iconstar7 = 3.0;
    let notification_ = 1.0;
    let handlerj: Map<any, any> = new Map([[String.fromCharCode(101,95,55,49,95,104,97,114,100,119,97,114,101,0),636], [String.fromCharCode(111,95,55,51,0),365]]);
    let componentregistryp = true;
    let submit2 = 1.0;
    let sorty = 0.0;
    let inactiveY: Map<any, any> = new Map([[String.fromCharCode(102,97,108,115,101,95,107,95,57,56,0),978], [String.fromCharCode(110,95,53,49,95,115,112,101,101,100,104,113,0),286]]);
    let productY: Array<any> = [810, 464, 522];
    let libcrashsdk2: Array<any> = [344, 315, 330];
    let trashX: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,110,99,101,95,111,95,52,49,0),false ], [String.fromCharCode(97,95,57,95,109,117,115,105,99,0),false ], [String.fromCharCode(107,101,121,99,104,97,105,110,95,122,95,56,53,0),false ]]);
       let latnp = String.fromCharCode(110,95,57,50,95,115,112,105,108,108,115,105,122,101,0);
      while (latnp != latnp) {
          let inouttargetredq: Array<any> = [824, 930, 139];
         latnp = `${inouttargetredq.length}`;
         break;
      }
      while (latnp.includes(`${latnp.length}`)) {
         latnp = `${3 & latnp.length}`;
         break;
      }
      for (let x = 0; x < 2; x++) {
         latnp = `${latnp.length}`;
      }
      handlerj.set(`${rulesl}`, handlerj.size % (Math.max(6, rulesl)));
   for (let w = 0; w < 2; w++) {
      handlerj.set(`${sorty}`, parseInt(`${sorty}`));
   }
       let arrowi = String.fromCharCode(101,95,51,52,95,98,101,97,116,0);
       let mountingM = String.fromCharCode(117,95,54,52,95,105,110,100,97,116,97,0);
       let eighteenF = 3.0;
      for (let n = 0; n < 1; n++) {
          let layoutq = 3.0;
         eighteenF /= Math.max(parseFloat(`${2}`), 3);
         layoutq -= parseFloat(`${1}`);
      }
      if ((parseInt(`${eighteenF}`) * mountingM.length) < 2) {
         eighteenF -= (parseFloat(`${String.fromCharCode(72,0) == mountingM ? parseInt(`${eighteenF}`) : mountingM.length}`));
      }
      for (let q = 0; q < 1; q++) {
          let dialog9: Array<any> = [607, 206];
         mountingM += `${mountingM.length / 2}`;
         dialog9.push(1);
      }
      if (2 >= (mountingM.length - parseInt(`${eighteenF}`)) && 1.16 >= (4.53 - eighteenF)) {
         mountingM = `${parseInt(`${eighteenF}`) | mountingM.length}`;
      }
      let textY = eighteenF <= 9071031.0;
      do {
         eighteenF += parseFloat(`${arrowi.length}`);
         if (textY) {
            break;
         }
      } while (textY && (2 > (arrowi.length >> (Math.min(Math.abs(1), 3)))));
         eighteenF -= (parseFloat(`${String.fromCharCode(112,0) == arrowi ? mountingM.length : arrowi.length}`));
      if (1.66 >= (eighteenF * 4.11) || (3 << (Math.min(2, mountingM.length))) >= 4) {
         eighteenF /= Math.max((parseFloat(`${mountingM == String.fromCharCode(71,0) ? mountingM.length : parseInt(`${eighteenF}`)}`)), 1);
      }
       let statsM: Map<any, any> = new Map([[String.fromCharCode(120,95,53,55,95,102,105,102,111,0),966], [String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,114,95,55,51,0),489], [String.fromCharCode(115,121,110,99,95,106,95,51,53,0),678]]);
      while ((statsM.size % (Math.max(arrowi.length, 3))) < 1) {
         statsM.set(`${eighteenF}`, 1);
         break;
      }
      handlerj = new Map([[`${predictionarrow4.length}`, predictionarrow4.length]]);
      iconstar7 *= predictionarrow4.length % (Math.max(6, parseInt(`${iconstar7}`)));
      submit2 /= Math.max(parseFloat(`${parseInt(`${iconstar7}`)}`), 1);
      componentregistryp = (sorty * parseFloat(`${predictionarrow4.length}`)) < 36.96;
      notification_ *= parseInt(`${submit2}`) + predictionarrow4.length;
   for (let d = 0; d < 2; d++) {
       let scoreN = false;
       let pauseb = String.fromCharCode(118,95,57,53,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0);
       let androidF: Map<any, any> = new Map([[String.fromCharCode(103,95,50,51,95,115,117,98,98,108,111,99,107,0),String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,95,110,95,52,52,0)], [String.fromCharCode(99,121,112,114,101,115,115,95,51,95,50,48,0),String.fromCharCode(109,95,56,56,95,109,111,110,111,115,112,97,99,101,100,0)], [String.fromCharCode(104,101,118,109,97,115,107,95,103,95,57,56,0),String.fromCharCode(109,97,107,101,119,116,95,117,95,51,48,0)]]);
       let iconarrowrightd = 2;
          let logouser3 = String.fromCharCode(112,105,110,110,105,110,103,95,51,95,57,57,0);
          let sheetE = 2.0;
         iconarrowrightd -= 2 | androidF.size;
         logouser3 = `${1 << (Math.min(4, Math.abs(parseInt(`${sheetE}`))))}`;
         sheetE /= Math.max(1, (parseFloat(`${String.fromCharCode(116,0) == logouser3 ? parseInt(`${sheetE}`) : logouser3.length}`)));
         pauseb += `${androidF.size}`;
         pauseb += `${androidF.size << (Math.min(pauseb.length, 5))}`;
      if (1 >= (iconarrowrightd + 5) && 5 >= (androidF.size + iconarrowrightd)) {
          let zoomI: Map<any, any> = new Map([[String.fromCharCode(102,95,54,52,95,119,97,108,108,112,97,112,101,114,0),376], [String.fromCharCode(105,95,52,48,95,112,97,108,109,0),831], [String.fromCharCode(99,111,110,115,116,113,112,95,48,95,49,54,0),891]]);
          let containerB = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,117,95,50,50,0);
         androidF.set(`${containerB}`, (String.fromCharCode(86,0) == containerB ? containerB.length : zoomI.size));
      }
          let activey: Map<any, any> = new Map([[String.fromCharCode(103,114,97,121,97,95,110,95,54,51,0),188], [String.fromCharCode(107,95,49,48,48,95,117,112,99,111,109,105,110,103,0),781]]);
          let release_y3W = String.fromCharCode(108,105,115,116,115,95,107,95,52,57,0);
         iconarrowrightd <<= Math.min(Math.abs((pauseb == String.fromCharCode(79,0) ? (scoreN ? 1 : 3) : pauseb.length)), 3);
         activey = new Map([[`${activey.size}`, activey.size % (Math.max(1, 1))]]);
         release_y3W = `${release_y3W.length}`;
      if (3 > (androidF.size ^ 2)) {
         scoreN = 75 >= iconarrowrightd;
      }
         androidF = new Map([[`${androidF.size}`, androidF.size | 2]]);
          let malaysiaY = String.fromCharCode(98,95,52,51,95,115,116,121,108,101,100,0);
          let footballU = 2;
         scoreN = malaysiaY.startsWith(`${footballU}`);
         scoreN = androidF.get(`${iconarrowrightd}`) != null;
         scoreN = pauseb.startsWith(`${scoreN}`);
          let heartI = true;
          let downloadedE: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,105,110,103,95,116,95,50,0),String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,95,105,95,57,56,0)], [String.fromCharCode(118,112,105,116,120,102,109,95,52,95,52,56,0),String.fromCharCode(98,114,111,119,110,95,121,95,54,56,0)]]);
          let armvaf: Array<any> = [465, 569, 179];
         scoreN = (((!scoreN ? 55 : pauseb.length) - pauseb.length) > 55);
         heartI = (downloadedE.size << (Math.min(3, armvaf.length))) > 37;
         downloadedE = new Map([[`${downloadedE.size}`, 3 ^ downloadedE.size]]);
         armvaf = [armvaf.length];
      if ((5 & androidF.size) < 4 && !scoreN) {
          let updatesq = String.fromCharCode(115,104,111,119,119,97,118,101,115,112,105,99,95,110,95,55,57,0);
          let configG = String.fromCharCode(97,95,50,0);
          let hejiO = String.fromCharCode(118,95,57,50,95,109,101,109,110,0);
          let ucopy_a1R = 3.0;
         scoreN = pauseb == String.fromCharCode(83,0);
         updatesq += `${configG.length}`;
         configG += `${(String.fromCharCode(105,0) == configG ? hejiO.length : configG.length)}`;
         hejiO = `${hejiO.length - 2}`;
         ucopy_a1R *= parseInt(`${ucopy_a1R}`) >> (Math.min(Math.abs(3), 2));
      }
      iconstar7 -= parseInt(`${notification_}`);
   }
      iconstar7 /= Math.max(3 & parseInt(`${sorty}`), 4);
   while (Array.from(handlerj.keys()).includes(`${productY.length}`)) {
       let libswresampley = String.fromCharCode(100,97,114,107,101,110,105,110,103,95,106,95,57,50,0);
         libswresampley += `${libswresampley.length + libswresampley.length}`;
       let yingg = String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,52,95,49,50,0);
       let acceptedk = String.fromCharCode(103,111,108,100,101,110,95,97,95,49,52,0);
         acceptedk = `${yingg.length - 2}`;
      productY.push(parseInt(`${notification_}`) ^ 3);
      break;
   }
      componentregistryp = productY.length <= 80;
      inactiveY.set(`${productY.length}`, 1);
   while (3.13 < (submit2 * 3.47)) {
      predictionarrow4.push(3 / (Math.max(2, productY.length)));
      break;
   }
      submit2 -= parseFloat(`${handlerj.size}`);
   for (let d = 0; d < 1; d++) {
       let stringT = String.fromCharCode(97,114,99,104,105,118,101,95,56,95,56,48,0);
      let footballg = 9701975 >= stringT.length;
      do {
         stringT += "1";
         if (footballg) {
            break;
         }
      } while ((stringT == String.fromCharCode(75,0)) && footballg);
      let libruntimeexecutor5 = stringT.length >= 6837846;
      do {
         stringT = `${(stringT == String.fromCharCode(117,0) ? stringT.length : stringT.length)}`;
         if (libruntimeexecutor5) {
            break;
         }
      } while (libruntimeexecutor5 && (stringT != stringT));
      let expiredz = stringT == String.fromCharCode(115,56,105,48,55,109,0);
      do {
          let iconplaym = 2.0;
          let libyogaU = String.fromCharCode(115,117,105,116,101,98,95,110,95,50,52,0);
         stringT = `${2 ^ libyogaU.length}`;
         iconplaym -= 2;
         libyogaU = `${2 + parseInt(`${iconplaym}`)}`;
         if (expiredz) {
            break;
         }
      } while ((!stringT.endsWith(stringT)) && expiredz);
      componentregistryp = inactiveY.size >= productY.length;
   }
   while (productY.length > 3) {
       let thumbnail7 = String.fromCharCode(99,111,110,115,111,108,101,95,50,95,54,0);
       let anytimeb = true;
       let unimplementedview9 = 5.0;
       let defaultplayerimgO = false;
       let sportU = String.fromCharCode(119,95,52,48,95,111,111,108,116,105,112,0);
      for (let a = 0; a < 2; a++) {
         anytimeb = 58.66 < unimplementedview9 && !anytimeb;
      }
         unimplementedview9 -= (parseFloat(`${(anytimeb ? 5 : 3)}`));
         sportU += `${((defaultplayerimgO ? 1 : 3) >> (Math.min(1, Math.abs(2))))}`;
         anytimeb = 9.36 == unimplementedview9 && defaultplayerimgO;
      while ((unimplementedview9 + parseFloat(`${sportU.length}`)) > 2.70) {
          let sentryY = 1;
          let config2 = false;
          let greyarrowup5: Array<any> = [String.fromCharCode(108,111,119,112,97,115,115,95,103,95,56,52,0), String.fromCharCode(98,95,52,53,95,114,102,99,116,0)];
         unimplementedview9 /= Math.max(2, (parseFloat(`${(defaultplayerimgO ? 3 : 1)}`)));
         sentryY += ((config2 ? 3 : 2) * 2);
         config2 = ((greyarrowup5.length - (config2 ? greyarrowup5.length : 54)) <= 54);
         break;
      }
       let libfollyi = 4.0;
      for (let k = 0; k < 3; k++) {
         defaultplayerimgO = !anytimeb;
      }
         unimplementedview9 /= Math.max((parseFloat(`${3 % (Math.max(9, (defaultplayerimgO ? 4 : 2)))}`)), 4);
       let footballb: Map<any, any> = new Map([[String.fromCharCode(104,95,57,95,102,97,117,108,116,121,0),false ], [String.fromCharCode(97,95,49,55,95,99,111,112,121,118,0),false ], [String.fromCharCode(117,115,108,101,101,112,95,117,95,52,48,0),true ]]);
       let giflivestreamingR = String.fromCharCode(116,95,54,52,95,112,104,111,116,111,115,0);
      let fulld = String.fromCharCode(116,105,121,48,114,49,114,99,118,0) == giflivestreamingR;
      do {
          let short_v2O = String.fromCharCode(109,95,55,49,95,112,97,117,115,101,0);
          let kuaishoum = String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,101,95,56,53,0);
          let moviesM: Map<any, any> = new Map([[String.fromCharCode(104,95,56,53,95,116,114,101,101,116,111,107,0),false ], [String.fromCharCode(100,105,114,101,99,116,108,121,95,54,95,50,48,0),true ], [String.fromCharCode(111,95,56,56,95,109,98,117,118,101,114,114,111,114,0),true ]]);
          let drage = 4.0;
         giflivestreamingR = "2";
         short_v2O = `${1 ^ short_v2O.length}`;
         kuaishoum += `${kuaishoum.length}`;
         moviesM = new Map([[`${moviesM.size}`, parseInt(`${drage}`) << (Math.min(Math.abs(moviesM.size), 3))]]);
         drage *= kuaishoum.length;
         if (fulld) {
            break;
         }
      } while (fulld && (!sportU.endsWith(giflivestreamingR)));
      let yellowvideolive4 = 7517935 >= giflivestreamingR.length;
      do {
          let pointU: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,117,114,101,110,116,95,106,95,56,52,0),523], [String.fromCharCode(97,95,56,52,95,111,99,116,112,111,105,110,116,0),968], [String.fromCharCode(103,95,53,48,95,114,101,97,108,108,111,99,112,0),395]]);
          let arrowo = false;
         giflivestreamingR = `${((anytimeb ? 2 : 1) << (Math.min(Math.abs(1), 2)))}`;
         pointU.set(`${arrowo}`, ((arrowo ? 5 : 5) + pointU.size));
         if (yellowvideolive4) {
            break;
         }
      } while (yellowvideolive4 && ((parseFloat(`${giflivestreamingR.length}`) - libfollyi) <= 1.76));
         footballb = new Map([[`${defaultplayerimgO}`, ((defaultplayerimgO ? 4 : 2) / (Math.max(parseInt(`${unimplementedview9}`), 8)))]]);
      if (!giflivestreamingR.startsWith(thumbnail7)) {
          let runtimescheduler9 = 1.0;
          let taiwanH = 4.0;
          let reactnavigationg: Array<any> = [887, 130, 620];
          let profileinactiveh: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,57,95,57,56,0),true ], [String.fromCharCode(99,104,97,110,103,101,104,95,105,95,57,51,0),true ]]);
          let favicon1: Map<any, any> = new Map([[String.fromCharCode(97,95,51,54,95,115,99,97,110,0),String.fromCharCode(101,120,112,105,114,101,95,103,95,53,49,0)], [String.fromCharCode(117,95,50,57,95,107,105,110,100,115,0),String.fromCharCode(105,110,102,111,95,101,95,53,50,0)], [String.fromCharCode(97,95,56,50,95,105,110,116,101,114,120,121,0),String.fromCharCode(117,121,118,121,95,52,95,57,52,0)]]);
         thumbnail7 += `${sportU.length}`;
         runtimescheduler9 += reactnavigationg.length % 2;
         taiwanH += reactnavigationg.length | profileinactiveh.size;
         profileinactiveh = new Map([[`${profileinactiveh.size}`, 1]]);
         favicon1.set(`${runtimescheduler9}`, reactnavigationg.length);
      }
          let live9 = 4;
         defaultplayerimgO = libfollyi >= 94.55 || String.fromCharCode(108,0) == thumbnail7;
         live9 %= Math.max(live9, 1);
      productY = [sportU.length];
      break;
   }
   while (2.35 == (5.15 * submit2) && 5.15 == (parseFloat(`${rulesl}`) * submit2)) {
      rulesl -= parseInt(`${iconstar7}`);
      break;
   }

      dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    } else {
      dispatch(resumeVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    }
  }
}

function startVideoDownloadThunk(
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
  return async function (dispatch, getState) {
    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === DVGGrayTeamdetailsbg.DVGNalyticsTextinput){
       let feedbacku = false;
    let model2 = 0.0;
    let umengT = 4;
    let dycreatorF = true;
    let securitye: Array<any> = [81, 394];
    let whistleorangeL = String.fromCharCode(102,109,116,115,95,53,95,48,0);
    let m_countu: Array<any> = [501, 264];
    let main_iZ: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,99,116,105,111,110,95,102,95,51,52,0),25], [String.fromCharCode(109,97,103,101,95,111,95,57,56,0),560], [String.fromCharCode(118,114,101,112,95,56,95,57,52,0),264]]);
    let greytickZ = false;
    let libavformat0 = String.fromCharCode(103,95,57,50,95,112,111,112,112,101,100,0);
    let pagination3 = 2;
    let gifgoalj: Array<any> = [348, 900, 439];
    let abidetectn = false;
    let matchE: Map<any, any> = new Map([[String.fromCharCode(100,101,98,117,103,95,103,95,52,56,0),603], [String.fromCharCode(99,111,108,105,110,101,97,114,95,115,95,49,52,0),41], [String.fromCharCode(113,95,57,95,97,112,105,99,0),299]]);
    let subtextO = 5.0;
    let iconnointernetj = String.fromCharCode(112,117,98,108,105,115,104,95,102,95,57,57,0);
      model2 += libavformat0.length;
   while ((1 ^ m_countu.length) >= 2 && 2 >= (1 ^ m_countu.length)) {
       let delegate_ky = 3.0;
       let controlsk = 4.0;
       let penaltygoalQ = 3.0;
       let footballfieldB = 5.0;
       let foundk: Array<any> = [208, 810, 541];
       let awayteamfieldm: Array<any> = [331, 520];
         penaltygoalQ += parseFloat(`${1}`);
      for (let j = 0; j < 2; j++) {
         controlsk *= parseFloat(`${1}`);
      }
      while ((4 + awayteamfieldm.length) >= 4 || (penaltygoalQ * 5.41) >= 3.51) {
         awayteamfieldm = [awayteamfieldm.length - 1];
         break;
      }
          let chinasame5: Array<any> = [String.fromCharCode(105,109,97,103,101,121,117,118,99,111,110,102,105,103,95,53,95,54,57,0), String.fromCharCode(107,95,54,95,115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0), String.fromCharCode(107,95,54,50,95,100,97,115,104,0)];
          let guideK = 5.0;
         penaltygoalQ += parseFloat(`${parseInt(`${footballfieldB}`)}`);
         chinasame5 = [chinasame5.length];
         guideK += parseFloat(`${chinasame5.length + 2}`);
      main_iZ.set(`${pagination3}`, libavformat0.length / (Math.max(1, pagination3)));
      delegate_ky -= parseFloat(`${parseInt(`${delegate_ky}`) >> (Math.min(5, Math.abs(2)))}`);
      break;
   }
   while ((4.39 * model2) < 2.95 && 4.39 < model2) {
      model2 += securitye.length;
      break;
   }
   if (5 >= (1 + pagination3)) {
       let activeT = 5.0;
       let l_viewj = false;
      let libimagepipelineZ = activeT <= 6931175.0;
      do {
         activeT += 2 / (Math.max(parseInt(`${activeT}`), 6));
         if (libimagepipelineZ) {
            break;
         }
      } while ((4.65 == activeT || 2.93 == (activeT / 4.65)) && libimagepipelineZ);
         activeT -= ((l_viewj ? 2 : 3) % (Math.max(parseInt(`${activeT}`), 5)));
       let listo = 0.0;
       let calendarq = 5.0;
          let shielddone9 = 5.0;
         activeT *= 2;
         shielddone9 /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${shielddone9}`)), 3))}`), 4);
          let iconarrowrightQ = 0.0;
         listo /= Math.max(5, (parseFloat(`${(l_viewj ? 1 : 5) % (Math.max(parseInt(`${iconarrowrightQ}`), 6))}`)));
      let hnews4 = l_viewj ? !l_viewj : l_viewj;
      do {
         l_viewj = 38.78 > listo && !l_viewj;
         if (hnews4) {
            break;
         }
      } while (hnews4 && (l_viewj && (calendarq / 1.75) < 1.84));
      pagination3 |= 1 % (Math.max(7, parseInt(`${activeT}`)));
   }
   let forwardb = gifgoalj.length <= 5867352;
   do {
      gifgoalj.push(gifgoalj.length | 1);
      if (forwardb) {
         break;
      }
   } while ((1 >= (1 % (Math.max(3, main_iZ.size)))) && forwardb);
      whistleorangeL += `${libavformat0.length + gifgoalj.length}`;
       let grayA: Array<any> = [237, 651, 802];
       let acceptedk = 1.0;
         acceptedk *= parseFloat(`${parseInt(`${acceptedk}`) * 2}`);
       let predictionbannershared2 = String.fromCharCode(100,105,118,105,100,101,114,115,95,54,95,56,57,0);
       let cancelu = String.fromCharCode(114,101,99,101,110,116,101,114,95,116,95,49,50,0);
          let libjsia: Map<any, any> = new Map([[String.fromCharCode(118,95,55,52,95,112,117,112,105,108,0),String.fromCharCode(97,108,112,104,97,110,117,109,95,105,95,49,0)], [String.fromCharCode(120,109,117,108,95,50,95,53,56,0),String.fromCharCode(118,110,101,103,113,95,111,95,52,50,0)], [String.fromCharCode(110,111,110,100,99,95,116,95,57,49,0),String.fromCharCode(107,95,49,52,95,98,97,100,0)]]);
         cancelu += `${parseInt(`${acceptedk}`)}`;
         libjsia = new Map([[`${libjsia.size}`, 1 / (Math.max(5, libjsia.size))]]);
          let clocky = String.fromCharCode(103,95,54,57,95,116,101,115,115,101,108,97,116,101,0);
          let hejif = String.fromCharCode(107,95,49,95,102,116,115,116,111,107,0);
          let injury1 = true;
         acceptedk /= Math.max(4, parseFloat(`${3 & clocky.length}`));
         clocky += `${2 ^ hejif.length}`;
         hejif += `${((injury1 ? 4 : 3) & hejif.length)}`;
          let heartE = String.fromCharCode(108,111,97,116,95,102,95,53,52,0);
         acceptedk -= parseFloat(`${predictionbannershared2.length}`);
         heartE += `${heartE.length}`;
       let libhermesh = true;
      securitye = [grayA.length % 2];
      pagination3 >>= Math.min(2, Math.abs(1));
   for (let d = 0; d < 2; d++) {
      m_countu = [1];
   }
      greytickZ = 49 >= pagination3;

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
       let frame_e0r = String.fromCharCode(116,95,55,52,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0);
    let yellowredcardi = 1.0;
    let bootsplashY = 4.0;
    let iconsharez = 2.0;
    let dropdownG = 5.0;
    let analyticsU = String.fromCharCode(108,105,98,101,118,101,110,116,95,48,95,57,55,0);
    let profileframeM = 2;
    let anneri = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,54,95,55,55,0);
    let ballH = true;
    let reactnativejse = true;
    let imagemanagere = 4;
       let iconrefresh_ = String.fromCharCode(107,101,121,119,111,114,100,115,95,119,95,52,57,0);
          let placeholderB = String.fromCharCode(100,111,117,98,108,101,105,110,116,115,116,114,95,122,95,54,51,0);
         iconrefresh_ = `${placeholderB.length}`;
         iconrefresh_ = `${iconrefresh_.length / (Math.max(1, 7))}`;
      let calendarT = String.fromCharCode(108,54,101,119,99,105,55,0) == iconrefresh_;
      do {
          let libsentryk: Array<any> = [360, 52, 122];
         iconrefresh_ += `${iconrefresh_.length}`;
         libsentryk.push(libsentryk.length);
         if (calendarT) {
            break;
         }
      } while ((iconrefresh_.length < iconrefresh_.length) && calendarT);
      yellowredcardi /= Math.max(1, (parseFloat(`${(ballH ? 4 : 1) + (reactnativejse ? 4 : 1)}`)));
      ballH = 15.29 < bootsplashY;
   if (!anneri.startsWith(`${profileframeM}`)) {
       let videocommonu = 2;
       let sendO: Map<any, any> = new Map([[String.fromCharCode(98,95,52,52,95,99,105,110,101,112,97,107,0),String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,117,95,55,49,0)], [String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,102,95,52,54,0),String.fromCharCode(100,105,115,112,111,115,101,100,95,119,95,57,55,0)], [String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,112,95,57,49,0),String.fromCharCode(119,95,52,50,95,115,110,97,109,101,0)]]);
       let giflivestreamingi = String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,113,95,51,52,0);
       let halffieldimageR = true;
       let previewQ: Array<any> = [985, 134];
          let spinner7 = String.fromCharCode(115,117,112,112,114,101,115,115,111,114,95,50,95,50,54,0);
          let topica: Array<any> = [752, 595];
         videocommonu %= Math.max(sendO.size - 2, 5);
         spinner7 = "2";
         topica = [3 >> (Math.min(2, spinner7.length))];
       let navigation_ = 4.0;
       let root6 = 0.0;
      if ((navigation_ - 5.11) < 2.0 && (parseInt(`${navigation_}`) - sendO.size) < 2) {
         navigation_ /= Math.max((parseFloat(`${giflivestreamingi == String.fromCharCode(119,0) ? (halffieldimageR ? 3 : 1) : giflivestreamingi.length}`)), 3);
      }
          let spec8 = String.fromCharCode(115,108,105,99,101,115,95,55,95,55,56,0);
          let network_: Map<any, any> = new Map([[String.fromCharCode(116,95,49,56,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0),331], [String.fromCharCode(122,95,56,56,95,99,109,115,103,115,0),832]]);
          let accepted4 = String.fromCharCode(115,116,97,103,101,95,117,95,56,48,0);
         root6 /= Math.max(3, (parseFloat(`${String.fromCharCode(90,0) == spec8 ? spec8.length : parseInt(`${root6}`)}`)));
         network_ = new Map([[`${network_.size}`, 1]]);
         accepted4 = `${network_.size}`;
      for (let j = 0; j < 3; j++) {
         halffieldimageR = 9.53 > root6;
      }
      for (let n = 0; n < 3; n++) {
          let basketballhometeamz = 4;
         navigation_ *= parseFloat(`${parseInt(`${root6}`) & 3}`);
         basketballhometeamz -= 2;
      }
       let d_viewj = 5.0;
       let umeng8 = 0.0;
          let libyoga7: Map<any, any> = new Map([[String.fromCharCode(119,95,50,53,95,99,111,110,118,101,114,116,101,100,0),false ], [String.fromCharCode(102,101,109,97,108,101,95,122,95,50,52,0),true ], [String.fromCharCode(108,95,57,56,95,109,101,116,97,98,111,100,121,0),true ]]);
          let final_gc9 = String.fromCharCode(109,97,112,115,95,108,95,56,57,0);
         giflivestreamingi += `${videocommonu * parseInt(`${umeng8}`)}`;
         libyoga7 = new Map([[`${libyoga7.size}`, libyoga7.size >> (Math.min(Math.abs(2), 4))]]);
         final_gc9 += `${libyoga7.size * final_gc9.length}`;
      while (!halffieldimageR) {
         halffieldimageR = giflivestreamingi.includes(`${halffieldimageR}`);
         break;
      }
      if (2.24 >= (umeng8 - 1.98) || 3.21 >= (1.98 - umeng8)) {
          let mailF = 1.0;
          let default_0G: Array<any> = [240, 815, 145];
         giflivestreamingi += `${parseInt(`${umeng8}`)}`;
         mailF /= Math.max(1, 2 / (Math.max(3, default_0G.length)));
         default_0G.push(parseInt(`${mailF}`) + default_0G.length);
      }
         umeng8 *= parseFloat(`${parseInt(`${umeng8}`) - 3}`);
         previewQ = [parseInt(`${root6}`)];
         halffieldimageR = sendO.size == videocommonu;
      for (let y = 0; y < 1; y++) {
         d_viewj -= parseFloat(`${parseInt(`${umeng8}`) - 1}`);
      }
         giflivestreamingi = `${parseInt(`${umeng8}`)}`;
      anneri = `${3 - parseInt(`${yellowredcardi}`)}`;
   }
   while (reactnativejse) {
      reactnativejse = iconsharez == 66.28 || 66.28 == bootsplashY;
      break;
   }
      dropdownG *= parseFloat(`${parseInt(`${bootsplashY}`)}`);
   let valuesZ = 8271359.0 <= yellowredcardi;
   do {
      yellowredcardi *= parseFloat(`${parseInt(`${iconsharez}`) << (Math.min(4, Math.abs(2)))}`);
      if (valuesZ) {
         break;
      }
   } while ((5.90 == (bootsplashY - 5.50) && (yellowredcardi * 5.50) == 4.68) && valuesZ);
      ballH = anneri == String.fromCharCode(90,0);
      anneri = `${parseInt(`${iconsharez}`) << (Math.min(2, Math.abs(3)))}`;

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

      frame_e0r = `${parseInt(`${dropdownG}`) | parseInt(`${bootsplashY}`)}`;
   while (frame_e0r.length < anneri.length) {
       let dataZ = 3.0;
       let basketballhometeamR: Array<any> = [697, 106];
       let refresh3 = 2.0;
       let coden = String.fromCharCode(104,119,99,111,110,116,101,120,116,95,115,95,49,56,0);
       let linit_slr = String.fromCharCode(115,121,115,114,97,110,100,95,107,95,53,53,0);
          let androidT: Array<any> = [719, 620];
         dataZ += parseFloat(`${parseInt(`${dataZ}`)}`);
         androidT = [androidT.length * 2];
         coden += `${linit_slr.length}`;
          let tickS = 3.0;
         linit_slr += `${parseInt(`${dataZ}`)}`;
         tickS -= 2 & parseInt(`${tickS}`);
      for (let w = 0; w < 2; w++) {
         basketballhometeamR = [2];
      }
       let graphicsV = String.fromCharCode(103,95,49,49,95,116,114,105,103,103,101,114,0);
      let colorso = 8014201.0 <= refresh3;
      do {
         refresh3 /= Math.max(4, 2 << (Math.min(2, coden.length)));
         if (colorso) {
            break;
         }
      } while (colorso && (linit_slr.endsWith(`${refresh3}`)));
      for (let a = 0; a < 1; a++) {
         graphicsV += "3";
      }
      if (2 > basketballhometeamR.length) {
          let statsD = 3.0;
          let penaltyE: Array<any> = [623, 994, 952];
          let becomeg = String.fromCharCode(117,95,50,50,95,115,99,104,101,109,101,0);
         graphicsV += `${becomeg.length ^ 1}`;
         statsD /= Math.max(2, parseInt(`${statsD}`));
         penaltyE = [penaltyE.length >> (Math.min(1, Math.abs(parseInt(`${statsD}`))))];
         becomeg += `${parseInt(`${statsD}`)}`;
      }
      while (graphicsV == linit_slr) {
          let lightm: Array<any> = [String.fromCharCode(98,95,54,48,95,115,105,100,101,100,97,116,97,0), String.fromCharCode(115,95,50,55,95,102,105,108,108,101,100,0)];
         linit_slr += `${parseInt(`${refresh3}`) + parseInt(`${dataZ}`)}`;
         lightm.push(2);
         break;
      }
       let leftK: Array<any> = [155, 92, 859];
      let confign = 7516302 >= linit_slr.length;
      do {
          let descH = String.fromCharCode(99,117,114,108,95,97,95,55,56,0);
         linit_slr += `${graphicsV.length / (Math.max(2, 7))}`;
         descH += "3";
         if (confign) {
            break;
         }
      } while (confign && (graphicsV == String.fromCharCode(88,0)));
      for (let r = 0; r < 1; r++) {
          let gemfile0 = String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,119,95,49,57,0);
          let gradlewx = String.fromCharCode(99,95,52,50,95,102,111,99,117,115,97,98,108,101,0);
          let unselectedl = 5.0;
          let eyeopenG = false;
         dataZ *= (parseFloat(`${String.fromCharCode(54,0) == linit_slr ? linit_slr.length : parseInt(`${unselectedl}`)}`));
         gemfile0 = "1";
         gradlewx += `${gemfile0.length << (Math.min(gradlewx.length, 4))}`;
         unselectedl /= Math.max(((eyeopenG ? 3 : 1)), 4);
      }
      while (!linit_slr.startsWith(`${basketballhometeamR.length}`)) {
          let dpluss = 5.0;
          let transferJ = 3;
          let rewardI = String.fromCharCode(109,97,114,107,101,114,115,95,102,95,52,55,0);
          let saveT = true;
          let weatherx = String.fromCharCode(118,95,56,51,95,97,110,105,109,97,116,101,100,0);
         linit_slr += `${basketballhometeamR.length}`;
         dpluss *= 2 << (Math.min(1, Math.abs(transferJ)));
         transferJ &= 1;
         rewardI = `${3 % (Math.max(5, parseInt(`${dpluss}`)))}`;
         saveT = 51 >= transferJ;
         weatherx = "3";
         break;
      }
      for (let t = 0; t < 3; t++) {
         refresh3 /= Math.max(coden.length, 1);
      }
      let awayteamfieldg = String.fromCharCode(100,111,56,103,0) == coden;
      do {
         coden += `${linit_slr.length >> (Math.min(Math.abs(1), 4))}`;
         if (awayteamfieldg) {
            break;
         }
      } while (awayteamfieldg && (!linit_slr.startsWith(coden)));
      anneri = `${profileframeM - linit_slr.length}`;
      break;
   }
   let albumh = reactnativejse ? !reactnativejse : reactnativejse;
   do {
       let temperaturem = String.fromCharCode(97,95,49,50,95,112,114,111,109,111,116,101,100,0);
       let libavutila = 4.0;
       let catalog4 = 0;
      while (libavutila > 5.5) {
         libavutila -= parseFloat(`${temperaturem.length}`);
         break;
      }
       let zoomQ = String.fromCharCode(111,114,103,97,110,105,122,97,116,105,111,110,95,111,95,57,49,0);
       let episodeS = String.fromCharCode(115,95,54,52,95,116,114,105,101,0);
       let selectionC = true;
       let sigmob4 = true;
         sigmob4 = libavutila <= 6.5;
          let whiteanimationliveA = String.fromCharCode(110,95,52,50,95,100,101,112,111,115,105,116,0);
          let huaweiq = 1.0;
         selectionC = !temperaturem.startsWith(`${sigmob4}`);
         whiteanimationliveA += `${parseInt(`${huaweiq}`) << (Math.min(whiteanimationliveA.length, 1))}`;
         huaweiq /= Math.max(parseFloat(`${parseInt(`${huaweiq}`)}`), 4);
      while (3 == temperaturem.length) {
         temperaturem += `${episodeS.length}`;
         break;
      }
         temperaturem = "3";
      for (let g = 0; g < 1; g++) {
         selectionC = String.fromCharCode(78,0) == episodeS;
      }
          let mountingP = 5.0;
          let mbnativeC = 4.0;
          let imagesf = String.fromCharCode(120,95,54,49,95,105,113,109,102,0);
         selectionC = mbnativeC == 24.78;
         mountingP -= 2 | parseInt(`${mountingP}`);
         mbnativeC -= imagesf.length ^ parseInt(`${mountingP}`);
         imagesf += `${parseInt(`${mountingP}`) >> (Math.min(Math.abs(1), 4))}`;
      reactnativejse = frame_e0r == String.fromCharCode(122,0);
      if (albumh) {
         break;
      }
   } while (albumh && (!frame_e0r.endsWith(`${reactnativejse}`)));
      frame_e0r = `${((ballH ? 3 : 5) / (Math.max((reactnativejse ? 5 : 3), 5)))}`;
   for (let r = 0; r < 3; r++) {
      yellowredcardi += parseFloat(`${frame_e0r.length}`);
   }
   while (3.59 < yellowredcardi) {
       let whatsappc = 0;
         whatsappc /= Math.max(5, whatsappc);
      for (let l = 0; l < 3; l++) {
         whatsappc *= whatsappc >> (Math.min(Math.abs(1), 1));
      }
          let webview4: Array<any> = [String.fromCharCode(115,111,99,105,97,108,95,114,95,56,52,0), String.fromCharCode(117,110,109,97,114,115,104,97,108,95,104,95,54,49,0), String.fromCharCode(118,97,114,105,97,110,116,115,95,99,95,50,50,0)];
         whatsappc >>= Math.min(5, Math.abs(whatsappc ^ webview4.length));
      ballH = ballH || anneri.length == 47;
      break;
   }
   while (5.34 == (bootsplashY / 1.80) && 1.80 == (yellowredcardi / (Math.max(bootsplashY, 9)))) {
       let q_imagee: Array<any> = [141, 788];
       let tickm: Array<any> = [570, 340];
       let infoo = String.fromCharCode(101,97,115,101,95,102,95,54,50,0);
       let libfollyw = 4;
       let codegenv = String.fromCharCode(105,100,108,101,95,51,95,52,54,0);
         libfollyw %= Math.max(3, (codegenv == String.fromCharCode(113,0) ? tickm.length : codegenv.length));
      let hiadJ = infoo.length >= 6258080;
      do {
         infoo = "3";
         if (hiadJ) {
            break;
         }
      } while (hiadJ && (1 > infoo.length));
      while ((1 + libfollyw) <= 1) {
         codegenv += `${infoo.length - libfollyw}`;
         break;
      }
      while (5 < (codegenv.length + q_imagee.length) || 3 < (5 + codegenv.length)) {
         codegenv = `${libfollyw}`;
         break;
      }
      let wind2 = libfollyw <= 6600198;
      do {
         libfollyw -= libfollyw - 2;
         if (wind2) {
            break;
         }
      } while (((infoo.length * libfollyw) == 3 && (infoo.length * libfollyw) == 3) && wind2);
      if (1 < (libfollyw | infoo.length) || (libfollyw | 1) < 3) {
         libfollyw /= Math.max(3, tickm.length);
      }
         tickm.push(infoo.length);
      let eventa = 7655312 >= libfollyw;
      do {
         libfollyw >>= Math.min(1, codegenv.length);
         if (eventa) {
            break;
         }
      } while (eventa && (!tickm.includes(libfollyw)));
      for (let y = 0; y < 1; y++) {
         tickm = [2 & libfollyw];
      }
       let modeQ = 5.0;
       let signinupq = 3.0;
      if (3 > libfollyw) {
         tickm.push(3);
      }
         tickm = [parseInt(`${modeQ}`)];
      if (4 <= q_imagee.length) {
         q_imagee.push(infoo.length % (Math.max(9, parseInt(`${signinupq}`))));
      }
      while (4.13 >= signinupq) {
         signinupq += (parseFloat(`${String.fromCharCode(114,0) == codegenv ? codegenv.length : parseInt(`${modeQ}`)}`));
         break;
      }
         q_imagee = [2 - libfollyw];
      bootsplashY += parseFloat(`${1 << (Math.min(5, tickm.length))}`);
      break;
   }
       let iconscheduleu = String.fromCharCode(100,105,109,95,103,95,53,52,0);
      let detailU = 9294335 <= iconscheduleu.length;
      do {
         iconscheduleu += `${iconscheduleu.length * 2}`;
         if (detailU) {
            break;
         }
      } while ((iconscheduleu != iconscheduleu) && detailU);
          let images1 = true;
         iconscheduleu = `${((images1 ? 5 : 4) * iconscheduleu.length)}`;
      let selectionH = iconscheduleu == String.fromCharCode(55,95,100,97,106,49,49,0);
      do {
          let disconnectedlogo7 = 5.0;
          let footballZ = String.fromCharCode(98,117,99,107,101,116,115,95,114,95,51,54,0);
         iconscheduleu = `${iconscheduleu.length & 2}`;
         disconnectedlogo7 /= Math.max(parseFloat(`${1}`), 2);
         footballZ = `${2 ^ parseInt(`${disconnectedlogo7}`)}`;
         if (selectionH) {
            break;
         }
      } while ((iconscheduleu.length == iconscheduleu.length) && selectionH);
      frame_e0r += `${(anneri == String.fromCharCode(83,0) ? anneri.length : parseInt(`${bootsplashY}`))}`;
      const newState = getState().downloadVideoReducer

   if (frame_e0r != String.fromCharCode(75,0)) {
      anneri += "2";
   }
   while ((iconsharez + bootsplashY) > 1.2) {
      iconsharez += (parseInt(`${iconsharez}`) >> (Math.min(1, Math.abs((ballH ? 2 : 5)))));
      break;
   }
   let showL = String.fromCharCode(119,119,50,106,122,101,102,0) == analyticsU;
   do {
      analyticsU = `${1 | parseInt(`${iconsharez}`)}`;
      if (showL) {
         break;
      }
   } while (showL && ((1.86 * iconsharez) < 3.55));
      bootsplashY += parseFloat(`${analyticsU.length}`);
   while (anneri.length <= 5) {
      frame_e0r += "1";
      break;
   }
       let huaweig: Map<any, any> = new Map([[String.fromCharCode(104,114,115,115,95,51,95,50,53,0),true ], [String.fromCharCode(102,95,50,52,95,110,97,99,107,0),true ], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,106,95,53,50,0),true ]]);
          let foundZ = false;
         huaweig.set(`${foundZ}`, huaweig.size);
      if ((3 + huaweig.size) <= 4 && (3 + huaweig.size) <= 1) {
          let activityN = String.fromCharCode(109,100,112,114,95,103,95,51,0);
         huaweig.set(`${activityN}`, activityN.length);
      }
      for (let n = 0; n < 1; n++) {
         huaweig.set(`${huaweig.size}`, 1 | huaweig.size);
      }
      frame_e0r += `${(frame_e0r == String.fromCharCode(73,0) ? profileframeM : frame_e0r.length)}`;
      dropdownG *= parseFloat(`${3 + parseInt(`${dropdownG}`)}`);
   if (!frame_e0r.startsWith(`${yellowredcardi}`)) {
       let libreactnativejnij = 3.0;
       let reminderT = String.fromCharCode(111,95,53,54,95,101,120,116,114,97,115,0);
       let volumeZ = 3.0;
       let e_unlockb = 5.0;
       let bangG = 4;
         reminderT += `${bangG >> (Math.min(reminderT.length, 3))}`;
       let ksadW = String.fromCharCode(99,97,112,105,116,97,108,115,95,122,95,54,52,0);
         bangG -= bangG + 3;
      for (let m = 0; m < 2; m++) {
         bangG &= reminderT.length - 2;
      }
         ksadW += `${1 / (Math.max(5, parseInt(`${e_unlockb}`)))}`;
      for (let t = 0; t < 3; t++) {
         e_unlockb *= (parseFloat(`${ksadW == String.fromCharCode(90,0) ? ksadW.length : bangG}`));
      }
      for (let x = 0; x < 2; x++) {
         volumeZ -= 2 >> (Math.min(Math.abs(bangG), 2));
      }
         bangG *= 3;
         libreactnativejnij /= Math.max(2, parseFloat(`${ksadW.length}`));
         libreactnativejnij += parseFloat(`${2}`);
      for (let c = 0; c < 1; c++) {
         e_unlockb *= parseFloat(`${parseInt(`${libreactnativejnij}`)}`);
      }
         ksadW += `${parseInt(`${e_unlockb}`)}`;
      if (3.14 > (e_unlockb * 1)) {
         volumeZ -= parseInt(`${volumeZ}`) * parseInt(`${e_unlockb}`);
      }
         bangG <<= Math.min(Math.abs((String.fromCharCode(121,0) == reminderT ? reminderT.length : bangG)), 4);
       let aboutE = 1.0;
       let sportsx = 1.0;
      yellowredcardi += parseFloat(`${parseInt(`${bootsplashY}`) + 3}`);
   }
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
    }

    const handleError = () => {
       let nbatrophy7: Map<any, any> = new Map([[String.fromCharCode(97,95,56,53,95,105,100,101,111,0),115], [String.fromCharCode(118,105,115,98,108,101,95,102,95,51,49,0),575]]);
    let topicz = 1.0;
    let pointq = 5;
    let morec = String.fromCharCode(112,95,53,49,95,100,101,115,116,114,111,121,101,100,0);
    let weibo9 = String.fromCharCode(100,101,108,115,117,112,101,114,95,53,95,57,48,0);
    let loadingd: Map<any, any> = new Map([[String.fromCharCode(106,95,55,57,95,109,111,115,116,0),632], [String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,104,95,54,48,0),883]]);
    let actionsU = false;
    let sheeta = 5;
    let controlsa = String.fromCharCode(100,95,52,52,95,109,97,112,112,101,100,0);
    let langkey9: Array<any> = [929, 291, 767];
    let sportd = 4.0;
    let ksadj = String.fromCharCode(117,95,53,95,114,101,112,108,97,121,101,114,0);
    let fcdaebecbcbafcdfceaaeccfeacdbg: Array<any> = [271, 163];
   while (2 < (3 - sheeta) && sheeta < 3) {
      sheeta -= nbatrophy7.size * 1;
      break;
   }
   if (5 > (4 << (Math.min(4, Math.abs(pointq))))) {
      pointq /= Math.max(3 ^ weibo9.length, 3);
   }
      sheeta <<= Math.min(5, morec.length);

      console.debug('error downloading ', vod.vod_name)

   let latn8 = langkey9.length <= 8719289;
   do {
      langkey9.push(morec.length);
      if (latn8) {
         break;
      }
   } while ((controlsa.length <= langkey9.length) && latn8);
   let helperW = actionsU ? !actionsU : actionsU;
   do {
      actionsU = loadingd.get(`${sheeta}`) == null;
      if (helperW) {
         break;
      }
   } while ((!actionsU) && helperW);
      controlsa = `${(String.fromCharCode(120,0) == controlsa ? parseInt(`${topicz}`) : controlsa.length)}`;
      const state = getState().downloadVideoReducer

      pointq |= loadingd.size - 1;
   let expand9 = 8818148 <= sheeta;
   do {
      sheeta ^= (String.fromCharCode(73,0) == morec ? morec.length : pointq);
      if (expand9) {
         break;
      }
   } while (expand9 && (1 >= (controlsa.length + sheeta) && (controlsa.length + 1) >= 4));
   if (2 < sheeta) {
      loadingd = new Map([[`${sportd}`, parseInt(`${sportd}`) / (Math.max(parseInt(`${topicz}`), 4))]]);
   }
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

      pointq += 3;
   while (Array.from(nbatrophy7.values()).includes(loadingd.size)) {
      nbatrophy7.set(`${actionsU}`, 1 * morec.length);
      break;
   }
   while ((sportd / 5.24) < 4.14 || 2.13 < (5.24 / (Math.max(1, sportd)))) {
       let gmailK = true;
       let holdert: Map<any, any> = new Map([[String.fromCharCode(104,95,49,55,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0),941], [String.fromCharCode(99,95,56,49,95,112,114,101,97,108,108,111,99,0),465]]);
       let countryA = 3.0;
       let logouts = String.fromCharCode(115,99,114,111,108,108,105,110,103,95,52,95,49,49,0);
       let libfollyo = 3.0;
      while (!Array.from(holdert.values()).includes(countryA)) {
          let episodesF: Array<any> = [272, 380];
          let textZ: Array<any> = [407, 233, 224];
          let rewardH = String.fromCharCode(110,95,51,52,95,115,117,98,99,101,108,0);
          let homeU = false;
          let fastforwardj = 2;
         holdert.set(`${libfollyo}`, 1 % (Math.max(7, parseInt(`${libfollyo}`))));
         episodesF = [fastforwardj];
         textZ.push(textZ.length + 1);
         rewardH = `${episodesF.length}`;
         homeU = (episodesF.length >> (Math.min(3, Math.abs(fastforwardj)))) <= 91;
         break;
      }
      if ((3.77 + countryA) < 1.78 || (countryA + 3.77) < 1.67) {
         libfollyo -= parseFloat(`${2 << (Math.min(2, Math.abs(holdert.size)))}`);
      }
         logouts += `${parseInt(`${libfollyo}`)}`;
      if ((logouts.length + parseInt(`${libfollyo}`)) < 2 || 1 < (logouts.length ^ 2)) {
         libfollyo += (parseFloat(`${parseInt(`${countryA}`) << (Math.min(3, Math.abs((gmailK ? 4 : 2))))}`));
      }
       let circle5 = 2.0;
       let loginsuccessp = 1.0;
       let lessG = String.fromCharCode(115,104,105,101,108,100,95,99,95,53,51,0);
       let condensedg = String.fromCharCode(100,105,118,105,100,101,95,116,95,54,0);
      while (libfollyo < 2.28) {
         libfollyo /= Math.max(2, parseFloat(`${3}`));
         break;
      }
      for (let r = 0; r < 1; r++) {
         loginsuccessp += parseFloat(`${condensedg.length}`);
      }
      while (condensedg.length >= 2) {
         gmailK = lessG.length >= 57;
         break;
      }
         condensedg += `${1 - holdert.size}`;
       let activeS = true;
       let libavformatc = false;
          let statisticsinactiveJ = String.fromCharCode(98,95,53,53,95,115,117,112,112,111,114,116,105,110,103,0);
          let einit_0iU: Array<any> = [String.fromCharCode(105,95,51,53,95,116,111,110,101,115,0), String.fromCharCode(99,95,55,95,112,114,101,115,115,101,115,0)];
          let selectedW = 5.0;
         libfollyo *= parseFloat(`${parseInt(`${circle5}`) * 1}`);
         statisticsinactiveJ += `${einit_0iU.length | 1}`;
         einit_0iU.push(1);
         selectedW /= Math.max(parseFloat(`${3 * einit_0iU.length}`), 1);
          let unfillf = String.fromCharCode(108,105,98,115,115,104,95,54,95,49,51,0);
          let clear_ = 1.0;
          let delegate_gds = 1;
         circle5 -= (parseFloat(`${(libavformatc ? 3 : 3) / (Math.max(parseInt(`${countryA}`), 10))}`));
         unfillf += `${parseInt(`${clear_}`) * 2}`;
         clear_ += (String.fromCharCode(77,0) == unfillf ? parseInt(`${clear_}`) : unfillf.length);
         delegate_gds -= 2 * delegate_gds;
       let gifgoalu = 4.0;
       let selections = 1.0;
          let neonk = String.fromCharCode(97,95,54,55,95,109,97,115,107,101,100,0);
          let stringsf = String.fromCharCode(111,119,110,101,100,95,114,95,55,49,0);
         gifgoalu -= parseFloat(`${1 & holdert.size}`);
         neonk += "2";
         stringsf = `${neonk.length}`;
      sportd /= Math.max(3, parseFloat(`${loadingd.size >> (Math.min(2, Math.abs(parseInt(`${sportd}`))))}`));
      break;
   }
      if (!targetEpisode) return 
      if (targetEpisode?.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni){

      pointq += loadingd.size & pointq;
   let ranka = 6313608 >= langkey9.length;
   do {
      langkey9.push(controlsa.length);
      if (ranka) {
         break;
      }
   } while (ranka && (3 < (1 >> (Math.min(1, langkey9.length))) && 2 < (langkey9.length >> (Math.min(Math.abs(1), 5)))));
   if (1 < (loadingd.size * parseInt(`${sportd}`))) {
      loadingd = new Map([[`${langkey9.length}`, 2 * parseInt(`${sportd}`)]]);
   }
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DVGGrayTeamdetailsbg.DVGCurrent
      }))

   while (!weibo9.endsWith(`${controlsa.length}`)) {
      weibo9 += `${langkey9.length}`;
      break;
   }
      controlsa += `${3 | loadingd.size}`;
      controlsa = `${sheeta}`;

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

       let stylei = 3;
       let launch6: Map<any, any> = new Map([[String.fromCharCode(107,95,51,53,95,117,112,100,97,116,101,0),728], [String.fromCharCode(109,101,115,97,103,101,115,95,118,95,49,48,48,0),472]]);
       let animation4: Array<any> = [570, 373, 606];
      for (let p = 0; p < 2; p++) {
         stylei <<= Math.min(Math.abs(launch6.size ^ stylei), 5);
      }
      let sportsR = 9521174 >= stylei;
      do {
         stylei |= stylei ^ animation4.length;
         if (sportsR) {
            break;
         }
      } while (sportsR && ((launch6.size / (Math.max(4, 3))) > 3 && (stylei / 4) > 2));
      for (let w = 0; w < 2; w++) {
         stylei |= animation4.length;
      }
      while (4 <= launch6.size) {
         stylei %= Math.max(1, 1 / (Math.max(4, stylei)));
         break;
      }
          let regenga = 5.0;
          let logoutm = 4;
         stylei ^= 2;
         regenga += parseFloat(`${logoutm}`);
         logoutm -= 1;
      if ((2 * animation4.length) >= 1 || (launch6.size * animation4.length) >= 2) {
          let foreground3 = 3.0;
          let foregroundA = String.fromCharCode(116,105,109,105,110,103,115,97,102,101,95,113,95,56,0);
         launch6 = new Map([[`${launch6.size}`, launch6.size >> (Math.min(Math.abs(2), 3))]]);
         foreground3 *= parseFloat(`${3}`);
         foregroundA += `${foregroundA.length}`;
      }
      for (let w = 0; w < 1; w++) {
          let castingz = 3.0;
          let stationsO = 4.0;
          let libyogah: Array<any> = [349, 575];
          let time_oE = String.fromCharCode(109,95,55,49,95,114,101,97,100,98,105,116,115,0);
          let material0 = String.fromCharCode(116,114,120,116,95,53,95,48,0);
         animation4.push(time_oE.length / 2);
         castingz += parseFloat(`${parseInt(`${stationsO}`)}`);
         stationsO *= parseFloat(`${3 << (Math.min(2, material0.length))}`);
         libyogah = [parseInt(`${stationsO}`) | libyogah.length];
         time_oE = `${libyogah.length}`;
         material0 += `${parseInt(`${stationsO}`) * 2}`;
      }
          let iconmore8 = 0;
          let contextV = false;
         launch6 = new Map([[`${iconmore8}`, iconmore8]]);
         contextV = !contextV;
      while (!Array.from(launch6.values()).includes(animation4.length)) {
         launch6 = new Map([[`${launch6.size}`, 1 ^ animation4.length]]);
         break;
      }
      sheeta %= Math.max(3, 1 + weibo9.length);
       let orangel = 1.0;
      if (1.59 <= (orangel - 4)) {
          let incidentQ = String.fromCharCode(97,95,56,54,95,119,105,110,100,111,119,105,110,103,0);
          let videojsf = String.fromCharCode(108,115,98,115,95,98,95,51,52,0);
         orangel -= parseFloat(`${incidentQ.length >> (Math.min(videojsf.length, 3))}`);
      }
      while (4.11 < (orangel * orangel) || 2.74 < (orangel * 4.11)) {
          let cornerkick3 = 3.0;
          let signinupi = 0;
          let libmapbufferjnif = 0.0;
         orangel += parseFloat(`${3 ^ parseInt(`${cornerkick3}`)}`);
         cornerkick3 -= parseFloat(`${parseInt(`${libmapbufferjnif}`) % (Math.max(7, signinupi))}`);
         signinupi += 3;
         libmapbufferjnif -= parseFloat(`${2}`);
         break;
      }
         orangel /= Math.max(5, parseFloat(`${parseInt(`${orangel}`)}`));
      weibo9 = `${1 | nbatrophy7.size}`;
   if (loadingd.get(`${pointq}`) != null) {
       let matchesG = String.fromCharCode(99,105,114,99,108,101,100,95,51,95,55,0);
       let main_kI = String.fromCharCode(104,95,56,54,95,115,116,111,112,112,105,110,103,0);
       let textinputm = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,52,95,53,53,0);
      let iconstarU = 8099346 <= main_kI.length;
      do {
         main_kI = `${main_kI.length}`;
         if (iconstarU) {
            break;
         }
      } while ((main_kI.length >= textinputm.length) && iconstarU);
          let matchesC = false;
         main_kI = `${((matchesC ? 5 : 2) - 3)}`;
      while (main_kI.length <= textinputm.length) {
         main_kI = `${main_kI.length}`;
         break;
      }
      if (main_kI.length < textinputm.length) {
         main_kI = `${matchesG.length}`;
      }
         textinputm = "2";
         main_kI += "3";
       let verticalx = 0.0;
         main_kI = `${main_kI.length}`;
       let component0 = String.fromCharCode(116,95,51,95,109,102,104,100,0);
       let type_aX = String.fromCharCode(99,111,110,99,101,97,108,101,100,95,52,95,53,52,0);
      pointq /= Math.max(pointq, 4);
   }
    if (!targetVod) return 
    

   let redgoalN = String.fromCharCode(56,106,48,108,48,112,113,105,56,113,0) == morec;
   do {
      morec = `${controlsa.length}`;
      if (redgoalN) {
         break;
      }
   } while (redgoalN && (morec.startsWith(`${sportd}`)));
       let phoneshareZ = String.fromCharCode(113,95,54,57,95,112,97,110,101,115,0);
          let profileinactiveg = 4.0;
          let dependenciesF = 2.0;
          let selection2 = 2.0;
         phoneshareZ = `${phoneshareZ.length}`;
         profileinactiveg *= parseInt(`${selection2}`) | 2;
         dependenciesF -= parseFloat(`${1}`);
         selection2 += parseFloat(`${2}`);
      for (let j = 0; j < 2; j++) {
         phoneshareZ += `${phoneshareZ.length + phoneshareZ.length}`;
      }
         phoneshareZ += `${phoneshareZ.length}`;
      sportd /= Math.max(parseFloat(`${2 << (Math.min(4, morec.length))}`), 5);
      topicz /= Math.max(2, parseFloat(`${langkey9.length}`));
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})

      morec = `${parseInt(`${topicz}`) - pointq}`;
      morec += `${nbatrophy7.size % (Math.max(2, parseInt(`${sportd}`)))}`;
   while ((weibo9.length + sheeta) < 1) {
       let sigmobS = 4;
       let greyarrowupu = false;
       let predictionactiveR = 5.0;
       let select3 = true;
       let foregroundF = 3.0;
      if (3.4 <= (5.30 + foregroundF) || !select3) {
          let signinupZ = String.fromCharCode(99,105,110,118,105,100,101,111,95,102,95,54,57,0);
          let rnewinterstitialc = String.fromCharCode(107,110,111,99,107,111,117,116,95,48,95,53,49,0);
          let iconeditw = 1.0;
          let button3 = 1;
         foregroundF /= Math.max(sigmobS, 2);
         signinupZ += `${signinupZ.length}`;
         rnewinterstitialc = `${1 << (Math.min(2, signinupZ.length))}`;
         iconeditw /= Math.max(3, parseFloat(`${parseInt(`${iconeditw}`) & signinupZ.length}`));
         button3 <<= Math.min(Math.abs(rnewinterstitialc.length * parseInt(`${iconeditw}`)), 1);
      }
          let home6 = 1;
         foregroundF *= 2;
         home6 >>= Math.min(2, Math.abs(home6 / (Math.max(3, home6))));
      let clockD = greyarrowupu ? !greyarrowupu : greyarrowupu;
      do {
          let greenw = String.fromCharCode(114,95,53,56,95,107,101,112,116,0);
          let carousel_ = 5.0;
         greyarrowupu = greenw == String.fromCharCode(74,0);
         greenw = `${parseInt(`${carousel_}`)}`;
         if (clockD) {
            break;
         }
      } while ((greyarrowupu) && clockD);
      let blackr = foregroundF <= 7933720.0;
      do {
         foregroundF /= Math.max(2, 1);
         if (blackr) {
            break;
         }
      } while ((foregroundF > sigmobS) && blackr);
          let executorI = 0.0;
          let libjsinspectorq = String.fromCharCode(114,111,117,110,100,115,95,105,95,53,49,0);
         predictionactiveR -= 1 % (Math.max(parseInt(`${predictionactiveR}`), 5));
         executorI -= parseFloat(`${libjsinspectorq.length}`);
         libjsinspectorq = `${1 >> (Math.min(5, libjsinspectorq.length))}`;
       let auto_fz = String.fromCharCode(122,95,49,48,95,110,97,118,0);
       let chinasamev = String.fromCharCode(115,116,114,101,97,109,95,111,95,57,0);
      while (3 == (sigmobS / 3) && !greyarrowupu) {
          let step2 = String.fromCharCode(97,100,97,112,116,101,114,115,95,112,95,56,55,0);
          let switch_vH = 5.0;
          let jingdong4 = 1.0;
          let componenti = 1;
          let componentregistryO: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,108,95,56,55,0),646], [String.fromCharCode(118,111,105,99,101,115,95,120,95,56,53,0),519], [String.fromCharCode(115,117,99,99,101,115,115,95,111,95,49,52,0),435]]);
         sigmobS /= Math.max(2, parseInt(`${switch_vH}`));
         step2 = "3";
         switch_vH -= (parseFloat(`${String.fromCharCode(82,0) == step2 ? componenti : step2.length}`));
         jingdong4 *= parseFloat(`${parseInt(`${jingdong4}`) % 2}`);
         componenti *= parseInt(`${jingdong4}`);
         componentregistryO = new Map([[`${componentregistryO.size}`, parseInt(`${jingdong4}`)]]);
         break;
      }
      if (sigmobS == auto_fz.length) {
         auto_fz = `${2 >> (Math.min(4, chinasamev.length))}`;
      }
         auto_fz = `${(chinasamev.length >> (Math.min(4, Math.abs((greyarrowupu ? 2 : 3)))))}`;
      let predictionbannersharedX = greyarrowupu ? !greyarrowupu : greyarrowupu;
      do {
          let reminder3 = String.fromCharCode(97,95,55,54,95,115,101,116,116,108,101,0);
          let heartn = String.fromCharCode(103,114,97,100,105,101,110,116,115,95,103,95,50,50,0);
         greyarrowupu = auto_fz == heartn;
         reminder3 = "3";
         heartn = `${reminder3.length}`;
         if (predictionbannersharedX) {
            break;
         }
      } while (predictionbannersharedX && (!greyarrowupu));
      for (let e = 0; e < 1; e++) {
         auto_fz += `${sigmobS >> (Math.min(1, Math.abs(2)))}`;
      }
          let verticalJ = 3;
         auto_fz += `${3 * parseInt(`${foregroundF}`)}`;
         verticalJ |= 2 | verticalJ;
       let libsentryq = 1.0;
         chinasamev += `${(String.fromCharCode(107,0) == chinasamev ? auto_fz.length : chinasamev.length)}`;
      for (let z = 0; z < 1; z++) {
          let neonM = 2.0;
          let eighteenz = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,48,95,57,48,0);
          let sheetS: Map<any, any> = new Map([[String.fromCharCode(102,105,118,101,95,117,95,55,50,0),776], [String.fromCharCode(113,95,56,56,95,105,115,102,105,110,105,116,101,0),30], [String.fromCharCode(104,97,114,100,101,110,101,100,95,119,95,57,48,0),918]]);
          let nativeexM = String.fromCharCode(109,116,97,102,95,55,95,50,51,0);
          let constantsA = String.fromCharCode(121,95,51,55,95,111,110,116,97,99,116,115,0);
         libsentryq -= parseFloat(`${parseInt(`${predictionactiveR}`) & parseInt(`${neonM}`)}`);
         neonM += parseFloat(`${2}`);
         eighteenz = `${(nativeexM == String.fromCharCode(84,0) ? constantsA.length : nativeexM.length)}`;
         sheetS.set(constantsA, (constantsA == String.fromCharCode(112,0) ? eighteenz.length : constantsA.length));
      }
      sheeta |= loadingd.size;
      break;
   }
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return
      if (targetEpisode?.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni){
        return 
      }
      
      
      
      
      
      
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DVGGrayTeamdetailsbg.DVGRoom, 
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

      if (targetEpisode.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni) { 
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
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid, vodIsAdult));
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: DVGGrayTeamdetailsbg.DVGNalyticsTextinput}))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function removeVideoFromDownloadThunk(
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
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
       let predictionwina = String.fromCharCode(101,95,55,49,95,117,115,114,115,99,116,112,0);
    let dplus_ = String.fromCharCode(104,95,52,48,95,99,114,108,102,0);
    let watchv = String.fromCharCode(121,95,55,54,95,110,101,119,108,105,110,101,0);
    let texte: Map<any, any> = new Map([[String.fromCharCode(106,95,54,52,95,99,108,101,97,114,101,100,0),644], [String.fromCharCode(114,111,98,105,110,95,118,95,52,0),264], [String.fromCharCode(98,97,115,105,99,97,108,108,121,95,54,95,57,56,0),514]]);
    let privilegej = String.fromCharCode(100,101,109,111,100,117,108,97,116,101,95,99,95,56,52,0);
    let iconpipexpanda: Map<any, any> = new Map([[String.fromCharCode(120,95,50,57,95,108,105,98,119,101,98,112,0),402], [String.fromCharCode(116,95,52,57,95,116,104,114,101,115,104,111,108,100,101,100,0),116]]);
    let roboto1 = 1.0;
    let iconrefreshJ = String.fromCharCode(105,105,110,116,95,49,95,54,0);
    let attributedstring8 = String.fromCharCode(116,95,54,48,95,97,101,115,111,112,116,0);
    let imagesH = String.fromCharCode(112,114,111,98,97,98,108,101,95,48,95,55,56,0);
    let greytickw = String.fromCharCode(101,120,116,114,97,102,105,101,108,100,95,104,95,50,51,0);
    let googlel: Map<any, any> = new Map([[String.fromCharCode(113,95,54,54,95,99,111,117,110,116,113,117,97,110,116,0),145], [String.fromCharCode(113,95,50,95,101,110,99,111,100,101,100,102,114,97,109,101,0),776], [String.fromCharCode(119,95,51,51,95,103,101,116,116,101,114,0),154]]);
       let whistleorangef = String.fromCharCode(99,111,118,114,95,48,95,55,56,0);
      for (let m = 0; m < 2; m++) {
         whistleorangef += `${(String.fromCharCode(99,0) == whistleorangef ? whistleorangef.length : whistleorangef.length)}`;
      }
         whistleorangef = `${(whistleorangef == String.fromCharCode(66,0) ? whistleorangef.length : whistleorangef.length)}`;
      let hooks7 = 7888650 <= whistleorangef.length;
      do {
         whistleorangef = `${whistleorangef.length}`;
         if (hooks7) {
            break;
         }
      } while (hooks7 && (whistleorangef.length >= 4 || whistleorangef == String.fromCharCode(121,0)));
      iconpipexpanda.set(privilegej, 2);
   let libpangleflipped5 = 9378932 <= dplus_.length;
   do {
      dplus_ = `${1 * iconpipexpanda.size}`;
      if (libpangleflipped5) {
         break;
      }
   } while (libpangleflipped5 && (dplus_.length > 3));
   let whiteZ = predictionwina.length >= 9471821;
   do {
      predictionwina += "2";
      if (whiteZ) {
         break;
      }
   } while (whiteZ && (2 >= predictionwina.length));
      imagesH = `${imagesH.length * iconpipexpanda.size}`;
       let libhermesO = String.fromCharCode(114,102,102,116,105,95,54,95,54,52,0);
       let fastforwarde = String.fromCharCode(122,95,53,54,95,99,111,108,111,117,114,0);
       let mbnativeadvancedP = 1.0;
      while (3.77 > (4.79 - mbnativeadvancedP) && (4.79 - mbnativeadvancedP) > 3.29) {
          let iconpipexpand7: Array<any> = [76, 974];
          let mutedl = 3;
          let unimplementedviewG = String.fromCharCode(119,95,55,55,0);
          let vertical5 = 3.0;
         mbnativeadvancedP -= parseFloat(`${2 * mutedl}`);
         iconpipexpand7.push(iconpipexpand7.length);
         mutedl %= Math.max((String.fromCharCode(112,0) == unimplementedviewG ? iconpipexpand7.length : unimplementedviewG.length), 2);
         vertical5 *= parseFloat(`${3 * unimplementedviewG.length}`);
         break;
      }
         mbnativeadvancedP -= (parseFloat(`${String.fromCharCode(80,0) == fastforwarde ? fastforwarde.length : parseInt(`${mbnativeadvancedP}`)}`));
         mbnativeadvancedP += parseFloat(`${3 | libhermesO.length}`);
         fastforwarde += `${(String.fromCharCode(57,0) == fastforwarde ? fastforwarde.length : parseInt(`${mbnativeadvancedP}`))}`;
      for (let u = 0; u < 1; u++) {
         mbnativeadvancedP -= parseFloat(`${fastforwarde.length}`);
      }
      let penaltyI = libhermesO.length <= 6344145;
      do {
          let awayd = String.fromCharCode(99,104,117,110,107,101,100,95,49,95,50,53,0);
          let guideT = String.fromCharCode(111,95,52,57,95,98,105,110,107,97,117,100,105,111,0);
          let penaltyW = true;
         libhermesO += `${1 & parseInt(`${mbnativeadvancedP}`)}`;
         awayd = "3";
         guideT += `${guideT.length >> (Math.min(Math.abs(3), 2))}`;
         penaltyW = !guideT.endsWith(`${penaltyW}`);
         if (penaltyI) {
            break;
         }
      } while (penaltyI && (fastforwarde != String.fromCharCode(113,0)));
         fastforwarde = `${parseInt(`${mbnativeadvancedP}`) << (Math.min(Math.abs(2), 2))}`;
      let libcrashsdk5 = mbnativeadvancedP >= 9441151.0;
      do {
         mbnativeadvancedP += parseFloat(`${parseInt(`${mbnativeadvancedP}`)}`);
         if (libcrashsdk5) {
            break;
         }
      } while ((!libhermesO.startsWith(`${mbnativeadvancedP}`)) && libcrashsdk5);
      while (libhermesO.length == 3) {
          let agreementL = String.fromCharCode(112,111,108,121,95,115,95,56,49,0);
          let teamdetailsbg9 = String.fromCharCode(118,95,50,53,95,117,110,105,110,115,116,97,108,108,0);
          let downloady: Map<any, any> = new Map([[String.fromCharCode(104,97,100,111,119,115,95,100,95,52,54,0),96], [String.fromCharCode(112,108,97,99,101,109,97,114,107,95,55,95,54,49,0),702]]);
          let downloadedb = false;
          let unfillC = String.fromCharCode(105,110,100,105,99,101,115,95,111,95,51,55,0);
         libhermesO = `${unfillC.length}`;
         agreementL += `${2 * teamdetailsbg9.length}`;
         teamdetailsbg9 += `${downloady.size >> (Math.min(Math.abs(3), 3))}`;
         downloady = new Map([[`${downloady.size}`, downloady.size * teamdetailsbg9.length]]);
         downloadedb = !agreementL.includes(`${downloadedb}`);
         unfillC += `${((downloadedb ? 5 : 3) * downloady.size)}`;
         break;
      }
      attributedstring8 += `${2 << (Math.min(4, Math.abs(iconpipexpanda.size)))}`;
      attributedstring8 = "3";
      iconrefreshJ += `${imagesH.length << (Math.min(5, dplus_.length))}`;
      dplus_ = "1";
   if (!attributedstring8.startsWith(`${dplus_.length}`)) {
       let leaguex = String.fromCharCode(100,105,102,102,101,114,95,109,95,51,52,0);
       let injuryk = 3.0;
       let emojii = true;
       let whistleorangeP: Array<any> = [String.fromCharCode(97,95,55,56,95,102,114,97,109,101,114,97,116,101,0), String.fromCharCode(112,114,111,99,99,101,115,115,95,109,95,53,49,0), String.fromCharCode(115,95,55,49,95,115,112,97,114,107,115,0)];
      let sliderh = 8032690.0 >= injuryk;
      do {
         injuryk *= parseFloat(`${parseInt(`${injuryk}`) | 3}`);
         if (sliderh) {
            break;
         }
      } while ((leaguex.length < parseInt(`${injuryk}`)) && sliderh);
         injuryk -= parseFloat(`${1 ^ parseInt(`${injuryk}`)}`);
      for (let a = 0; a < 2; a++) {
         whistleorangeP.push(parseInt(`${injuryk}`));
      }
      let rewardv = whistleorangeP.length >= 6000024;
      do {
          let reactb = 3.0;
          let descc = String.fromCharCode(106,95,51,95,105,110,111,117,116,115,0);
          let filed2 = 4.0;
         whistleorangeP.push(1);
         reactb -= parseInt(`${reactb}`) % 1;
         descc += `${(descc == String.fromCharCode(113,0) ? descc.length : parseInt(`${filed2}`))}`;
         filed2 -= parseFloat(`${parseInt(`${filed2}`) << (Math.min(Math.abs(3), 5))}`);
         if (rewardv) {
            break;
         }
      } while (rewardv && ((5 ^ leaguex.length) >= 5));
         leaguex = `${leaguex.length ^ 1}`;
         emojii = !emojii;
      if (leaguex.length > 1) {
          let unreadT: Array<any> = [183, 362, 974];
          let minimize9: Array<any> = [780, 420, 695];
          let iconbellactiveQ = String.fromCharCode(100,111,99,116,111,116,97,108,95,118,95,51,49,0);
          let style4 = 0;
         leaguex += `${parseInt(`${injuryk}`)}`;
         unreadT = [1];
         minimize9 = [style4];
         iconbellactiveQ = `${iconbellactiveQ.length ^ 2}`;
         style4 |= minimize9.length;
      }
         injuryk /= Math.max(4, (parseFloat(`${String.fromCharCode(82,0) == leaguex ? parseInt(`${injuryk}`) : leaguex.length}`)));
      let cornerkickS = whistleorangeP.length >= 9524231;
      do {
          let sigmobt: Array<any> = [168, 956, 838];
          let whistleq = 5;
          let membership9: Map<any, any> = new Map([[String.fromCharCode(120,95,56,55,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0),816], [String.fromCharCode(105,95,53,50,95,112,114,111,100,117,99,101,114,0),423], [String.fromCharCode(100,101,108,101,103,97,116,111,114,95,111,95,56,52,0),44]]);
          let libavutile = true;
          let bodanb = 2;
         whistleorangeP.push(whistleq);
         sigmobt = [bodanb * 1];
         whistleq &= sigmobt.length & 2;
         membership9 = new Map([[`${bodanb}`, bodanb % 2]]);
         libavutile = (((!libavutile ? membership9.size : 60) / (Math.max(2, membership9.size))) == 4);
         if (cornerkickS) {
            break;
         }
      } while (cornerkickS && (3 > (whistleorangeP.length ^ 2) && (whistleorangeP.length * 2) > 4));
          let rootX = 0;
          let gesturesa = String.fromCharCode(119,95,54,52,95,99,97,110,116,111,112,101,110,0);
          let switch_23D = 0.0;
         injuryk *= parseFloat(`${1 >> (Math.min(3, gesturesa.length))}`);
         rootX %= Math.max(parseInt(`${switch_23D}`), 1);
         gesturesa += `${2 + parseInt(`${switch_23D}`)}`;
      let notificationfillemptyx = 5261987 >= whistleorangeP.length;
      do {
         whistleorangeP.push(3);
         if (notificationfillemptyx) {
            break;
         }
      } while ((1.63 < (injuryk * 5.95) && 3 < (whistleorangeP.length | 3)) && notificationfillemptyx);
          let roomg = String.fromCharCode(120,118,105,100,105,100,99,116,95,107,95,49,49,0);
         leaguex += `${parseInt(`${injuryk}`) / 2}`;
         roomg = `${roomg.length ^ roomg.length}`;
      dplus_ += "1";
   }
       let catalogx = 4.0;
       let hooksc = String.fromCharCode(99,97,108,108,98,97,99,107,95,49,95,54,53,0);
          let configW = String.fromCharCode(100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,95,114,95,51,53,0);
          let uploadT = 0.0;
         hooksc = `${configW.length + 3}`;
         configW += `${parseInt(`${uploadT}`) & 2}`;
         uploadT /= Math.max(4, parseInt(`${uploadT}`) & parseInt(`${uploadT}`));
          let statisticsinactiveN = String.fromCharCode(101,114,114,99,111,100,101,95,98,95,52,55,0);
          let change3 = 0;
          let windD = 5;
         hooksc = "2 & change3";
         statisticsinactiveN += `${statisticsinactiveN.length}`;
         change3 |= (String.fromCharCode(90,0) == statisticsinactiveN ? statisticsinactiveN.length : windD);
         windD *= 3 - windD;
      if ((catalogx / (Math.max(10, parseFloat(`${hooksc.length}`)))) <= 3.15 || (hooksc.length * 4) <= 4) {
         catalogx /= Math.max(parseFloat(`${hooksc.length & 2}`), 3);
      }
          let windm = true;
          let ksadS = String.fromCharCode(108,97,109,101,95,50,95,57,0);
         hooksc = `${(hooksc == String.fromCharCode(112,0) ? hooksc.length : (windm ? 3 : 2))}`;
         windm = (ksadS.length << (Math.min(1, ksadS.length))) == 41;
      if (1 <= hooksc.length) {
         catalogx -= parseFloat(`${hooksc.length / 1}`);
      }
      if (4.93 > (catalogx + 5.63)) {
          let y_playerA = 3.0;
          let foundb: Array<any> = [String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,117,95,50,54,0), String.fromCharCode(97,95,52,95,115,101,101,107,116,97,98,108,101,0)];
          let matchactive8: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,95,105,95,55,56,0),275], [String.fromCharCode(108,111,99,111,95,52,95,56,56,0),942], [String.fromCharCode(112,111,108,121,115,116,97,114,95,114,95,54,57,0),226]]);
         catalogx *= parseFloat(`${parseInt(`${catalogx}`)}`);
         y_playerA += matchactive8.size;
         foundb.push(2 << (Math.min(3, Math.abs(matchactive8.size))));
      }
      iconrefreshJ = `${3 ^ parseInt(`${roboto1}`)}`;
      dplus_ += `${predictionwina.length * 3}`;
   for (let j = 0; j < 2; j++) {
      attributedstring8 = `${1 << (Math.min(4, attributedstring8.length))}`;
   }
       let iconclosewhitebgr = 1.0;
       let thumbnailI = String.fromCharCode(105,95,53,48,95,116,119,111,108,97,109,101,0);
       let statisticsinactivez = 4.0;
       let libreactperfloggerjniO: Array<any> = [107, 782];
       let p_playerl: Array<any> = [812, 64, 859];
      if (libreactperfloggerjniO.includes(statisticsinactivez)) {
          let subbasketballplayerk: Map<any, any> = new Map([[String.fromCharCode(115,116,114,100,117,112,95,101,95,51,51,0),String.fromCharCode(100,111,117,103,108,97,115,95,49,95,49,48,48,0)], [String.fromCharCode(103,101,111,109,101,116,114,121,95,109,95,55,55,0),String.fromCharCode(102,95,49,56,95,114,97,119,100,101,99,0)], [String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,53,95,50,49,0),String.fromCharCode(120,95,52,48,95,100,97,114,116,115,0)]]);
          let ksadD: Map<any, any> = new Map([[String.fromCharCode(105,95,51,52,95,112,114,105,118,97,116,101,0),true ], [String.fromCharCode(102,95,53,95,112,97,115,112,0),false ], [String.fromCharCode(112,105,120,101,108,102,108,111,97,116,95,120,95,50,53,0),true ]]);
          let membershipF = 4.0;
          let firebaset: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,118,97,108,95,109,95,57,57,0),String.fromCharCode(99,111,110,115,101,99,117,116,105,118,101,95,111,95,56,52,0)], [String.fromCharCode(109,95,56,56,95,116,114,97,110,115,117,112,112,0),String.fromCharCode(112,114,111,118,105,100,105,110,103,95,53,95,56,55,0)]]);
          let privatechatbg_ = 2;
         libreactperfloggerjniO = [p_playerl.length];
         subbasketballplayerk = new Map([[`${firebaset.size}`, ksadD.size | firebaset.size]]);
         ksadD.set(`${privatechatbg_}`, 3);
         membershipF += parseFloat(`${ksadD.size << (Math.min(Math.abs(1), 1))}`);
         privatechatbg_ |= ksadD.size;
      }
      let nativeex4 = 7924324 >= libreactperfloggerjniO.length;
      do {
         libreactperfloggerjniO.push(2);
         if (nativeex4) {
            break;
         }
      } while ((3 < (thumbnailI.length * libreactperfloggerjniO.length) || 3 < (libreactperfloggerjniO.length * thumbnailI.length)) && nativeex4);
         iconclosewhitebgr -= parseFloat(`${parseInt(`${iconclosewhitebgr}`) % (Math.max(thumbnailI.length, 4))}`);
         p_playerl = [p_playerl.length];
         statisticsinactivez *= 3;
         thumbnailI += `${libreactperfloggerjniO.length * 1}`;
      for (let b = 0; b < 3; b++) {
         iconclosewhitebgr /= Math.max(2, parseFloat(`${1}`));
      }
          let executorf: Array<any> = [524, 588];
          let playercommong = 2.0;
          let defaultprofilepicq = String.fromCharCode(100,105,115,112,95,99,95,57,51,0);
         thumbnailI = "3";
         executorf = [parseInt(`${playercommong}`)];
         playercommong -= parseFloat(`${defaultprofilepicq.length}`);
         defaultprofilepicq = `${executorf.length}`;
      iconrefreshJ += "1";
   for (let v = 0; v < 3; v++) {
       let componentregistryb = 3.0;
       let libsentryw: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,97,118,97,116,97,114,115,0),692], [String.fromCharCode(98,95,55,49,95,98,108,97,99,107,0),811], [String.fromCharCode(102,105,108,108,95,100,95,51,57,0),824]]);
       let arrowrightG = 3.0;
       let xnewarchdefaultso = 5.0;
       let libavdeviceN = 2;
          let baselineI = false;
          let libfba = String.fromCharCode(108,95,49,48,95,110,101,116,0);
         libsentryw = new Map([[`${baselineI}`, libfba.length | 1]]);
      for (let k = 0; k < 2; k++) {
         xnewarchdefaultso -= parseFloat(`${parseInt(`${componentregistryb}`)}`);
      }
         xnewarchdefaultso *= parseFloat(`${parseInt(`${xnewarchdefaultso}`)}`);
         libsentryw.set(`${componentregistryb}`, libsentryw.size);
         xnewarchdefaultso *= parseFloat(`${libsentryw.size}`);
         xnewarchdefaultso *= parseFloat(`${libavdeviceN + 2}`);
          let lefto: Array<any> = [842, 638, 215];
          let nterstitialq = String.fromCharCode(99,108,117,98,95,101,95,57,53,0);
         arrowrightG *= parseInt(`${xnewarchdefaultso}`);
         lefto.push((String.fromCharCode(56,0) == nterstitialq ? lefto.length : nterstitialq.length));
         xnewarchdefaultso *= parseFloat(`${parseInt(`${arrowrightG}`) / (Math.max(2, parseInt(`${componentregistryb}`)))}`);
         componentregistryb /= Math.max(parseFloat(`${3}`), 5);
         arrowrightG /= Math.max(4, 2);
      for (let i = 0; i < 2; i++) {
          let application1 = String.fromCharCode(120,95,49,57,95,104,97,118,105,110,103,0);
          let reactnativeratingsq = 5;
          let splashZ = String.fromCharCode(109,117,114,109,117,114,95,112,95,49,49,0);
          let cancelh = String.fromCharCode(109,95,49,48,95,115,97,102,101,116,121,0);
         arrowrightG += reactnativeratingsq;
         application1 += `${cancelh.length / (Math.max(application1.length, 8))}`;
         reactnativeratingsq %= Math.max(4, cancelh.length);
         splashZ = `${cancelh.length}`;
      }
      while (1.12 == (3.63 - arrowrightG) && (xnewarchdefaultso - arrowrightG) == 3.63) {
         arrowrightG *= 3 | parseInt(`${componentregistryb}`);
         break;
      }
      for (let l = 0; l < 2; l++) {
         libsentryw = new Map([[`${libsentryw.size}`, libavdeviceN << (Math.min(Math.abs(3), 2))]]);
      }
      let y_managery = 6098110.0 <= componentregistryb;
      do {
         componentregistryb -= parseFloat(`${libsentryw.size / (Math.max(1, 6))}`);
         if (y_managery) {
            break;
         }
      } while (y_managery && (1 > libsentryw.size));
       let launcherk = 4.0;
       let modulez = 0.0;
      greytickw += `${watchv.length}`;
   }
      predictionwina = `${(String.fromCharCode(57,0) == greytickw ? parseInt(`${roboto1}`) : greytickw.length)}`;
      roboto1 *= imagesH.length * 1;
      imagesH += `${iconrefreshJ.length}`;
   while ((iconpipexpanda.size / (Math.max(6, attributedstring8.length))) <= 2) {
      attributedstring8 += `${dplus_.length}`;
      break;
   }
   let basketballu = iconpipexpanda.size >= 8086594;
   do {
       let previewA = String.fromCharCode(115,117,99,99,101,101,100,101,100,95,97,95,50,56,0);
       let dependencies5: Array<any> = [152, 877, 547];
       let left2 = String.fromCharCode(110,117,108,108,105,102,95,98,95,56,52,0);
       let expiredu: Array<any> = [516, 915, 887];
       let phoneshare2 = String.fromCharCode(116,95,50,56,95,110,97,116,105,111,110,97,108,0);
      for (let e = 0; e < 1; e++) {
         dependencies5.push(phoneshare2.length);
      }
      while (5 >= (3 << (Math.min(3, dependencies5.length))) || 3 >= (3 << (Math.min(3, phoneshare2.length)))) {
         phoneshare2 = "2";
         break;
      }
          let currentN = 4;
          let gpayl = 1;
          let toponi: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,97,98,108,101,95,52,95,56,54,0),308], [String.fromCharCode(100,101,99,105,112,104,101,114,95,113,95,52,53,0),529]]);
         expiredu = [gpayl - 2];
         currentN |= 1 << (Math.min(5, Math.abs(toponi.size)));
         gpayl <<= Math.min(1, Math.abs(currentN - toponi.size));
         previewA = `${2 << (Math.min(3, phoneshare2.length))}`;
         phoneshare2 += `${(String.fromCharCode(70,0) == phoneshare2 ? phoneshare2.length : expiredu.length)}`;
         left2 += `${previewA.length}`;
      let type_0R = 6124164 <= dependencies5.length;
      do {
         dependencies5.push(1);
         if (type_0R) {
            break;
         }
      } while (type_0R && (!phoneshare2.includes(`${dependencies5.length}`)));
      let update_wn = left2.length >= 7616291;
      do {
         left2 += `${(String.fromCharCode(86,0) == previewA ? dependencies5.length : previewA.length)}`;
         if (update_wn) {
            break;
         }
      } while ((1 >= (left2.length / 4)) && update_wn);
      let favoriteP = expiredu.length <= 5420505;
      do {
         expiredu = [3 + phoneshare2.length];
         if (favoriteP) {
            break;
         }
      } while (favoriteP && (3 < (expiredu.length * 1) || (dependencies5.length * 1) < 3));
      while (previewA.length <= 4) {
          let dacccfaabfbcbadeebddcabacdffdbb = String.fromCharCode(117,112,108,111,97,100,105,110,103,95,99,95,53,48,0);
          let canvas8 = 5;
          let stringd = String.fromCharCode(98,95,57,53,95,112,108,116,101,0);
          let modules4 = String.fromCharCode(109,95,52,50,95,97,99,99,101,115,115,105,98,105,108,105,116,121,0);
          let o_unlockG = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,95,111,95,54,55,0);
         previewA += `${modules4.length / (Math.max(8, left2.length))}`;
         dacccfaabfbcbadeebddcabacdffdbb += `${canvas8 >> (Math.min(Math.abs(3), 4))}`;
         canvas8 <<= Math.min(Math.abs(stringd.length / (Math.max(o_unlockG.length, 8))), 2);
         stringd += `${stringd.length >> (Math.min(Math.abs(3), 2))}`;
         modules4 += "3";
         o_unlockG = `${dacccfaabfbcbadeebddcabacdffdbb.length ^ canvas8}`;
         break;
      }
      let assistG = 9471515 <= expiredu.length;
      do {
          let referrer3 = 1.0;
          let confirmation0 = 5.0;
         expiredu.push(2);
         referrer3 *= parseFloat(`${parseInt(`${confirmation0}`) >> (Math.min(5, Math.abs(2)))}`);
         confirmation0 /= Math.max(parseFloat(`${parseInt(`${referrer3}`) & parseInt(`${confirmation0}`)}`), 2);
         if (assistG) {
            break;
         }
      } while ((5 < (expiredu.length ^ 3)) && assistG);
      for (let t = 0; t < 2; t++) {
         left2 += `${left2.length}`;
      }
       let emojie: Array<any> = [416, 297];
      while ((dependencies5.length - 3) >= 2 && 3 >= (dependencies5.length - previewA.length)) {
          let condensedC = String.fromCharCode(98,95,55,54,95,117,115,101,115,0);
         dependencies5 = [condensedC.length];
         break;
      }
         dependencies5.push(3);
      iconpipexpanda.set(predictionwina, predictionwina.length & 2);
      if (basketballu) {
         break;
      }
   } while (basketballu && ((iconpipexpanda.size * dplus_.length) > 5));
       let trashN = String.fromCharCode(104,95,57,52,95,121,118,99,111,110,102,105,103,0);
       let predictionbannersharedV = String.fromCharCode(104,95,56,53,95,105,109,112,108,105,101,115,0);
       let assisth = 1;
         predictionbannersharedV = `${assisth}`;
      while (!trashN.startsWith(`${assisth}`)) {
          let orangeM = String.fromCharCode(109,97,114,107,95,53,95,54,0);
          let schedule0 = 0.0;
          let diceC = 0.0;
          let ewardedk = String.fromCharCode(107,109,118,99,95,53,95,51,53,0);
         trashN = `${assisth >> (Math.min(predictionbannersharedV.length, 3))}`;
         orangeM += `${ewardedk.length + 3}`;
         schedule0 /= Math.max(1, parseFloat(`${parseInt(`${diceC}`)}`));
         diceC *= parseFloat(`${ewardedk.length / 3}`);
         break;
      }
      if (!predictionbannersharedV.startsWith(`${assisth}`)) {
          let modelR = 0.0;
          let penaltyE = String.fromCharCode(107,95,55,54,95,116,114,97,105,108,101,114,0);
         predictionbannersharedV += `${predictionbannersharedV.length & trashN.length}`;
         modelR += parseFloat(`${parseInt(`${modelR}`)}`);
         penaltyE = "3";
      }
          let string_ = String.fromCharCode(117,95,56,52,95,114,97,116,105,111,110,97,108,0);
          let sportsN = String.fromCharCode(100,105,114,112,95,98,95,51,55,0);
         predictionbannersharedV += `${assisth + string_.length}`;
         string_ = "1";
         sportsN += "1";
         predictionbannersharedV = `${(predictionbannersharedV == String.fromCharCode(102,0) ? predictionbannersharedV.length : trashN.length)}`;
          let downloaderu: Array<any> = [351, 217, 888];
         assisth += predictionbannersharedV.length;
         downloaderu = [3 % (Math.max(3, downloaderu.length))];
      let interstitialv = 8533521 <= trashN.length;
      do {
         trashN += `${predictionbannersharedV.length % 1}`;
         if (interstitialv) {
            break;
         }
      } while (interstitialv && (predictionbannersharedV == trashN));
      for (let z = 0; z < 1; z++) {
          let predictionwinS = String.fromCharCode(115,101,99,111,110,100,95,105,95,57,48,0);
          let tooltipsr = 1.0;
          let h_positionF: Map<any, any> = new Map([[String.fromCharCode(115,95,49,49,95,110,111,110,101,0),String.fromCharCode(112,114,117,110,101,95,106,95,56,57,0)], [String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,95,102,95,56,52,0),String.fromCharCode(109,118,112,114,101,100,95,116,95,54,0)]]);
          let resultF = true;
         assisth /= Math.max(4, (parseInt(`${tooltipsr}`) ^ (resultF ? 3 : 2)));
         predictionwinS = `${h_positionF.size >> (Math.min(Math.abs(2), 3))}`;
         tooltipsr /= Math.max(1, parseFloat(`${predictionwinS.length & 2}`));
         h_positionF.set(predictionwinS, h_positionF.size);
         resultF = h_positionF.size == predictionwinS.length;
      }
         predictionbannersharedV += `${3 << (Math.min(5, trashN.length))}`;
      texte = new Map([[`${iconpipexpanda.size}`, (String.fromCharCode(106,0) == iconrefreshJ ? iconrefreshJ.length : iconpipexpanda.size)]]);
   for (let n = 0; n < 2; n++) {
       let sharemodal7: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,115,112,111,116,0),false ], [String.fromCharCode(100,95,53,52,95,102,99,111,100,101,0),true ], [String.fromCharCode(105,113,109,102,95,106,95,49,49,0),true ]]);
       let cornerkickq = 0.0;
       let alertp = String.fromCharCode(115,101,116,115,111,99,107,111,112,116,95,109,95,52,53,0);
         sharemodal7.set(alertp, parseInt(`${cornerkickq}`));
         cornerkickq /= Math.max(parseFloat(`${2}`), 2);
         cornerkickq *= parseFloat(`${parseInt(`${cornerkickq}`)}`);
          let libfbg = true;
          let predictionwinK = 5;
         alertp += `${((libfbg ? 2 : 3) << (Math.min(Math.abs(3), 4)))}`;
         libfbg = 20 > (predictionwinK - predictionwinK);
         cornerkickq /= Math.max(parseFloat(`${2}`), 3);
         cornerkickq += parseFloat(`${sharemodal7.size}`);
         sharemodal7 = new Map([[`${cornerkickq}`, parseInt(`${cornerkickq}`) | 3]]);
       let libpangleflipped5a = true;
      for (let h = 0; h < 2; h++) {
          let plusM: Array<any> = [435, 284, 504];
          let forwardH = 3.0;
         libpangleflipped5a = alertp.length >= parseInt(`${cornerkickq}`);
         plusM = [plusM.length - 2];
         forwardH /= Math.max(parseFloat(`${3 / (Math.max(3, plusM.length))}`), 1);
      }
      greytickw += `${dplus_.length}`;
   }
       let store2 = 0;
       let store8 = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,114,95,55,55,0);
       let tumbnail6 = true;
      let yellowredcardx = store2 <= 8848237;
      do {
         store2 *= store2;
         if (yellowredcardx) {
            break;
         }
      } while ((4 <= (store2 >> (Math.min(Math.abs(2), 5))) && 2 <= store2) && yellowredcardx);
      for (let m = 0; m < 3; m++) {
         tumbnail6 = !tumbnail6;
      }
      while ((3 * store2) < 1) {
         tumbnail6 = store2 >= store8.length;
         break;
      }
          let predictionk = 1;
         store2 += 3;
         predictionk &= predictionk & predictionk;
         store2 *= (String.fromCharCode(110,0) == store8 ? store8.length : store2);
      while (store8.length > 1) {
          let eventv: Array<any> = [521, 603];
          let matho = true;
          let rightN = 3.0;
         store8 = `${(String.fromCharCode(122,0) == store8 ? store8.length : (matho ? 3 : 5))}`;
         eventv = [parseInt(`${rightN}`)];
         matho = (rightN / (Math.max(1, eventv.length))) > 81.67;
         break;
      }
      while ((store8.length * store2) == 1 && 1 == (store2 * 1)) {
         store2 -= 3;
         break;
      }
      while (!store8.endsWith(`${tumbnail6}`)) {
         store8 = "2";
         break;
      }
      let modulep = String.fromCharCode(50,113,53,102,0) == store8;
      do {
          let halfQ = 1.0;
          let back8 = String.fromCharCode(111,95,53,53,95,105,110,99,114,101,109,101,110,116,0);
          let arrowrightf = true;
          let analytice = String.fromCharCode(115,116,114,101,115,115,95,52,95,57,53,0);
          let actionI = String.fromCharCode(105,109,112,108,105,101,115,95,114,95,55,0);
         store8 += `${1 | back8.length}`;
         halfQ *= parseFloat(`${parseInt(`${halfQ}`) ^ 2}`);
         back8 = `${(3 / (Math.max(5, (arrowrightf ? 4 : 5))))}`;
         arrowrightf = actionI.length > analytice.length;
         analytice += `${actionI.length % 2}`;
         if (modulep) {
            break;
         }
      } while ((!store8.includes(`${store2}`)) && modulep);
      imagesH += `${texte.size}`;
   while (2 <= (parseInt(`${roboto1}`) / (Math.max(attributedstring8.length, 4)))) {
      attributedstring8 += `${(String.fromCharCode(109,0) == greytickw ? greytickw.length : iconpipexpanda.size)}`;
      break;
   }
      privilegej += `${3 << (Math.min(1, watchv.length))}`;

        session.cancel(); 
      }
    }
    dispatch(removeVideoFromDownload(vod, vodSourceId, vodUrlNid))
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function removeVodFromDownloadThunk(
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    for (const episode of targetVod.episodes) {
      const allSession = await FFmpegKit.listSessions() 
      for (const session of allSession) {
        if (await session.getSessionId() === episode.ffmpegSession){
       let runtimescheduler7 = String.fromCharCode(105,95,55,50,95,97,109,112,108,105,116,117,100,101,0);
    let moduleb: Array<any> = [143, 84, 144];
    let libimagepipelinek = String.fromCharCode(108,95,48,95,113,101,120,112,0);
    let orientation_ = String.fromCharCode(112,95,49,48,48,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0);
    let utils_ = 5.0;
    let mountingz = 1.0;
    let predictionwinz = String.fromCharCode(100,95,49,53,95,97,110,97,108,121,122,105,110,103,0);
    let orangeclocky = false;
    let balle: Array<any> = [103, 566];
    let robotop: Map<any, any> = new Map([[String.fromCharCode(99,95,55,51,95,100,118,97,117,100,105,111,0),189], [String.fromCharCode(99,104,114,111,109,97,95,117,95,53,55,0),87], [String.fromCharCode(109,95,49,57,95,98,111,116,116,108,101,110,101,99,107,0),785]]);
   for (let x = 0; x < 1; x++) {
       let debug_ = String.fromCharCode(117,116,120,111,115,95,115,95,56,55,0);
      if (debug_ != String.fromCharCode(49,0)) {
          let sina7 = 0;
          let googleP = 3.0;
          let typingG = String.fromCharCode(99,95,50,51,95,117,110,102,111,99,117,115,101,100,0);
          let bodanR = String.fromCharCode(100,111,110,101,95,52,95,55,48,0);
          let pauseG = false;
         debug_ = `${(debug_ == String.fromCharCode(66,0) ? debug_.length : bodanR.length)}`;
         sina7 *= 1;
         googleP /= Math.max(2, ((pauseG ? 3 : 5) >> (Math.min(typingG.length, 1))));
         typingG += `${2 & parseInt(`${googleP}`)}`;
         bodanR += `${(typingG.length >> (Math.min(2, Math.abs((pauseG ? 2 : 4)))))}`;
      }
         debug_ = `${3 * debug_.length}`;
      let left_ = debug_.length <= 8766842;
      do {
         debug_ = `${debug_.length / (Math.max(debug_.length, 7))}`;
         if (left_) {
            break;
         }
      } while (left_ && (debug_ == String.fromCharCode(80,0) && debug_ != String.fromCharCode(76,0)));
      libimagepipelinek = "3";
   }
   if (!libimagepipelinek.endsWith(`${utils_}`)) {
      utils_ += parseInt(`${utils_}`) % (Math.max(4, balle.length));
   }
       let gesturesa = String.fromCharCode(99,116,108,111,117,116,112,117,116,95,112,95,49,49,0);
         gesturesa += `${gesturesa.length}`;
      if (gesturesa == String.fromCharCode(85,0)) {
         gesturesa += `${gesturesa.length >> (Math.min(Math.abs(2), 3))}`;
      }
      if (gesturesa.length < gesturesa.length) {
         gesturesa += `${gesturesa.length >> (Math.min(Math.abs(1), 2))}`;
      }
      predictionwinz = `${libimagepipelinek.length - 3}`;
      mountingz *= parseFloat(`${balle.length * 3}`);
   while (orientation_ == String.fromCharCode(105,0)) {
       let rootC = String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,95,97,95,50,0);
      for (let g = 0; g < 1; g++) {
          let successP = 3.0;
          let mapbufferr = String.fromCharCode(100,95,48,95,109,97,114,107,105,110,103,0);
          let libavutilM = true;
          let fill5 = 5;
          let penaltyr = 3;
         rootC += `${3 * parseInt(`${successP}`)}`;
         successP += mapbufferr.length & fill5;
         mapbufferr += `${fill5 & 3}`;
         libavutilM = fill5 == 96;
         penaltyr ^= 3;
      }
         rootC = `${rootC.length / (Math.max(rootC.length, 9))}`;
      while (rootC == String.fromCharCode(52,0)) {
         rootC = `${rootC.length}`;
         break;
      }
      predictionwinz = `${(predictionwinz == String.fromCharCode(80,0) ? balle.length : predictionwinz.length)}`;
      break;
   }
   while (orientation_.endsWith(`${balle.length}`)) {
      balle.push(2);
      break;
   }
   for (let q = 0; q < 2; q++) {
      orangeclocky = moduleb.includes(mountingz);
   }
      moduleb = [2 * orientation_.length];
   let round4 = balle.length <= 8714878;
   do {
       let overlayk = false;
       let libcrashsdkS = 1;
       let layoutA = String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,51,95,55,49,0);
       let grayH: Array<any> = [337, 406, 498];
       let calendaro = 3.0;
      while (3 == libcrashsdkS) {
          let mimoU = 3.0;
          let resendx = String.fromCharCode(102,97,105,108,115,95,105,95,53,50,0);
         grayH = [resendx.length];
         mimoU += parseInt(`${mimoU}`);
         resendx = `${parseInt(`${mimoU}`)}`;
         break;
      }
      let basep = grayH.length <= 7209448;
      do {
         grayH.push(2);
         if (basep) {
            break;
         }
      } while (basep && (layoutA.includes(`${grayH.length}`)));
          let register_1tr = 3.0;
         overlayk = (register_1tr / (Math.max(7, calendaro))) <= 50.73;
          let termsq = String.fromCharCode(112,95,49,54,95,111,98,109,99,0);
         overlayk = layoutA.length > 65;
         termsq = `${termsq.length}`;
       let uploadu: Array<any> = [String.fromCharCode(100,95,54,54,95,108,97,110,103,117,97,103,101,115,0), String.fromCharCode(101,95,56,53,95,100,97,98,97,115,101,0)];
       let anythinko = false;
       let cornerY = false;
         libcrashsdkS ^= parseInt(`${calendaro}`) / (Math.max(uploadu.length, 4));
         layoutA += `${(layoutA == String.fromCharCode(82,0) ? layoutA.length : (cornerY ? 3 : 3))}`;
         calendaro *= parseFloat(`${3 ^ grayH.length}`);
          let policyU = String.fromCharCode(114,101,102,108,101,99,116,95,102,95,57,50,0);
         anythinko = calendaro <= 32.18 && !overlayk;
         policyU = `${1 >> (Math.min(5, policyU.length))}`;
      let pageQ = 6835101 >= layoutA.length;
      do {
         layoutA += "2";
         if (pageQ) {
            break;
         }
      } while (pageQ && (layoutA.length <= 2));
      while (2 >= (grayH.length | 4)) {
         grayH = [3 * layoutA.length];
         break;
      }
         grayH = [1];
         layoutA = `${((anythinko ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${calendaro}`)), 5)))}`;
         overlayk = !overlayk;
      balle.push(parseInt(`${mountingz}`));
      if (round4) {
         break;
      }
   } while (round4 && (balle.length >= 1));
      runtimescheduler7 = `${libimagepipelinek.length >> (Math.min(Math.abs(3), 5))}`;
      balle = [1 / (Math.max(8, parseInt(`${mountingz}`)))];
   while (!predictionwinz.includes(`${mountingz}`)) {
       let bottomR: Map<any, any> = new Map([[String.fromCharCode(100,95,50,55,95,97,112,110,115,0),346], [String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,49,95,49,54,0),592]]);
       let reactnavigationW = String.fromCharCode(122,95,56,48,95,99,102,102,116,98,0);
       let otherT = 3.0;
      let libfbjnif = String.fromCharCode(110,119,118,97,102,0) == reactnavigationW;
      do {
          let ksad2: Map<any, any> = new Map([[String.fromCharCode(109,95,56,56,95,98,101,99,97,109,101,0),399], [String.fromCharCode(121,95,49,54,95,100,101,102,114,97,103,109,101,110,116,0),657], [String.fromCharCode(99,121,97,110,95,112,95,54,48,0),502]]);
         reactnavigationW += `${reactnavigationW.length}`;
         ksad2.set(`${ksad2.size}`, ksad2.size ^ ksad2.size);
         if (libfbjnif) {
            break;
         }
      } while (libfbjnif && (3 < bottomR.size));
      for (let t = 0; t < 2; t++) {
         otherT *= reactnavigationW.length;
      }
      while (4.74 > (otherT * 4.70)) {
         reactnavigationW = "1";
         break;
      }
          let questq = String.fromCharCode(115,116,114,104,97,115,104,95,121,95,54,49,0);
          let matchactiveS: Map<any, any> = new Map([[String.fromCharCode(111,95,52,52,95,115,110,111,119,100,97,116,97,0),952], [String.fromCharCode(105,95,50,52,95,100,111,109,97,105,110,115,0),721]]);
         reactnavigationW = `${(reactnavigationW == String.fromCharCode(51,0) ? reactnavigationW.length : bottomR.size)}`;
         questq = `${questq.length}`;
         matchactiveS = new Map([[`${matchactiveS.size}`, 3]]);
      while ((otherT + 2.69) >= 2.49) {
          let transferW: Map<any, any> = new Map([[String.fromCharCode(103,114,101,97,116,101,114,95,107,95,51,48,0),68], [String.fromCharCode(112,111,112,117,108,97,116,101,95,120,95,52,57,0),782]]);
          let countdownc = String.fromCharCode(109,111,118,101,95,106,95,55,56,0);
         otherT -= bottomR.size << (Math.min(reactnavigationW.length, 3));
         transferW = new Map([[`${transferW.size}`, countdownc.length]]);
         countdownc += `${countdownc.length & 3}`;
         break;
      }
          let filledO = String.fromCharCode(118,97,114,105,97,98,105,108,105,116,121,95,110,95,50,49,0);
          let source_ = String.fromCharCode(114,111,119,115,112,97,110,95,50,95,49,48,48,0);
         reactnavigationW = `${(String.fromCharCode(107,0) == source_ ? source_.length : parseInt(`${otherT}`))}`;
         filledO = `${(filledO == String.fromCharCode(111,0) ? filledO.length : filledO.length)}`;
         bottomR = new Map([[`${bottomR.size}`, reactnavigationW.length * bottomR.size]]);
      let utilsy = 8697127.0 >= otherT;
      do {
          let watchnowbgz = String.fromCharCode(97,95,54,55,95,114,101,112,111,114,116,105,110,103,0);
          let chinasamew = String.fromCharCode(120,95,49,48,95,115,100,101,115,0);
          let reducer7 = 5.0;
          let ewardedQ: Array<any> = [332, 818, 420];
          let mapbufferh: Map<any, any> = new Map([[String.fromCharCode(102,95,54,50,95,112,97,116,99,104,0),530], [String.fromCharCode(100,95,55,48,95,99,97,99,97,0),572], [String.fromCharCode(106,95,49,53,95,121,111,102,102,115,101,116,0),368]]);
         otherT /= Math.max(3, 3 << (Math.min(1, ewardedQ.length)));
         watchnowbgz += `${watchnowbgz.length - parseInt(`${reducer7}`)}`;
         chinasamew = `${chinasamew.length}`;
         reducer7 -= parseInt(`${reducer7}`) << (Math.min(Math.abs(1), 5));
         ewardedQ.push(1 / (Math.max(5, mapbufferh.size)));
         mapbufferh.set(`${reducer7}`, 2 / (Math.max(2, parseInt(`${reducer7}`))));
         if (utilsy) {
            break;
         }
      } while (utilsy && (5 > (1 << (Math.min(5, Math.abs(bottomR.size))))));
          let nalytics2: Array<any> = [903, 52, 249];
         reactnavigationW = `${(String.fromCharCode(105,0) == reactnavigationW ? reactnavigationW.length : nalytics2.length)}`;
      mountingz *= parseFloat(`${orientation_.length}`);
      break;
   }
      moduleb.push(((orangeclocky ? 5 : 2)));
      orientation_ = `${orientation_.length - 1}`;
   if ((3.49 - mountingz) > 4.19 && 1.93 > (mountingz - 3.49)) {
       let gmailg = 1;
       let dropdowng = String.fromCharCode(115,117,98,115,116,114,105,110,103,95,98,95,51,57,0);
       let proxyG = String.fromCharCode(106,99,104,117,102,102,95,52,95,51,50,0);
       let colors6 = String.fromCharCode(101,95,55,95,102,111,117,114,0);
          let greyarrowupw = 0.0;
         dropdowng += `${(String.fromCharCode(87,0) == colors6 ? parseInt(`${greyarrowupw}`) : colors6.length)}`;
      let dicea = proxyG.length >= 9527025;
      do {
         proxyG = `${1 & gmailg}`;
         if (dicea) {
            break;
         }
      } while (dicea && (proxyG.startsWith(colors6)));
      while (dropdowng.length < 2) {
         dropdowng += `${gmailg}`;
         break;
      }
         dropdowng += `${(String.fromCharCode(112,0) == dropdowng ? dropdowng.length : gmailg)}`;
      if (colors6 == String.fromCharCode(122,0)) {
          let application3: Map<any, any> = new Map([[String.fromCharCode(103,100,105,103,114,97,98,95,106,95,49,53,0),true ], [String.fromCharCode(103,95,56,48,95,102,105,110,100,110,101,116,0),false ]]);
          let zoom0 = String.fromCharCode(122,108,105,98,112,114,105,109,101,95,53,95,57,48,0);
          let founda = false;
          let interstitialf = true;
         proxyG += `${((founda ? 1 : 4) * 1)}`;
         application3 = new Map([[zoom0, (zoom0 == String.fromCharCode(52,0) ? zoom0.length : (interstitialf ? 3 : 1))]]);
         founda = zoom0.length < 11;
         interstitialf = zoom0.length < 10;
      }
         proxyG += `${gmailg + colors6.length}`;
         proxyG += `${1 ^ proxyG.length}`;
      while (proxyG == String.fromCharCode(119,0) || dropdowng == String.fromCharCode(56,0)) {
         proxyG += "1";
         break;
      }
       let libfbjniR = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,119,95,50,49,0);
         libfbjniR += `${colors6.length ^ 3}`;
      if (colors6.includes(`${gmailg}`)) {
         gmailg <<= Math.min(Math.abs(3), 3);
      }
         colors6 += `${(colors6 == String.fromCharCode(69,0) ? colors6.length : gmailg)}`;
      mountingz -= parseFloat(`${colors6.length - 2}`);
   }
   for (let r = 0; r < 3; r++) {
      mountingz -= parseFloat(`${balle.length + 1}`);
   }
   let handler9 = String.fromCharCode(119,105,116,56,101,121,0) == libimagepipelinek;
   do {
       let modityr = String.fromCharCode(108,101,114,116,95,57,95,53,0);
       let photoT = 5;
       let strt = String.fromCharCode(117,95,56,54,95,108,117,109,98,101,114,106,97,99,107,0);
       let successI = String.fromCharCode(115,116,117,110,95,122,95,57,48,0);
       let gdtadvl = String.fromCharCode(110,95,49,50,95,98,117,105,108,116,105,110,0);
         gdtadvl = `${photoT << (Math.min(strt.length, 4))}`;
      let home2 = String.fromCharCode(50,56,113,121,49,111,102,118,48,0) == modityr;
      do {
         modityr += `${successI.length % (Math.max(1, 5))}`;
         if (home2) {
            break;
         }
      } while ((modityr.length >= successI.length) && home2);
      for (let k = 0; k < 3; k++) {
         photoT &= strt.length;
      }
      let formH = String.fromCharCode(114,120,53,109,53,0) == successI;
      do {
          let manifestb = String.fromCharCode(98,105,103,117,105,110,116,95,53,95,53,53,0);
         successI = "3";
         manifestb = `${manifestb.length - manifestb.length}`;
         if (formH) {
            break;
         }
      } while (formH && ((successI.length + photoT) < 2 || 5 < (2 + photoT)));
         successI += `${strt.length * 2}`;
      let combine1 = modityr.length >= 8473211;
      do {
         modityr = `${gdtadvl.length >> (Math.min(Math.abs(1), 4))}`;
         if (combine1) {
            break;
         }
      } while ((successI != modityr) && combine1);
       let whiteZ = String.fromCharCode(97,95,55,52,95,115,101,116,102,105,101,108,100,0);
         successI += "1";
          let livej = String.fromCharCode(120,95,53,56,95,114,105,115,101,0);
          let subbasketballplayerH = 3;
          let thumbnail4: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,95,121,95,49,52,0),false ], [String.fromCharCode(120,95,49,95,108,115,112,114,0),true ]]);
         gdtadvl = `${photoT % (Math.max(strt.length, 8))}`;
         livej += `${subbasketballplayerH << (Math.min(Math.abs(3), 4))}`;
         subbasketballplayerH /= Math.max(1, livej.length);
         thumbnail4 = new Map([[livej, 3]]);
         modityr += `${(String.fromCharCode(116,0) == gdtadvl ? gdtadvl.length : successI.length)}`;
      for (let e = 0; e < 1; e++) {
         strt += `${successI.length}`;
      }
         modityr += `${gdtadvl.length + modityr.length}`;
       let nalyticsQ = 0;
          let ballc = 2.0;
          let expiredp = 1.0;
         strt += `${nalyticsQ >> (Math.min(whiteZ.length, 2))}`;
         ballc -= parseFloat(`${parseInt(`${expiredp}`) << (Math.min(5, Math.abs(parseInt(`${ballc}`))))}`);
         expiredp *= 1 / (Math.max(parseInt(`${expiredp}`), 3));
         whiteZ = `${nalyticsQ >> (Math.min(Math.abs(1), 5))}`;
      libimagepipelinek += `${strt.length & predictionwinz.length}`;
      if (handler9) {
         break;
      }
   } while (handler9 && (!libimagepipelinek.startsWith(orientation_)));
       let mappingR: Map<any, any> = new Map([[String.fromCharCode(101,95,49,50,95,100,101,105,110,118,101,114,116,0),886], [String.fromCharCode(118,95,56,56,95,115,105,102,116,0),587], [String.fromCharCode(99,121,99,108,101,95,52,95,54,49,0),75]]);
       let upload8: Map<any, any> = new Map([[String.fromCharCode(112,117,108,108,100,111,119,110,95,115,95,54,57,0),String.fromCharCode(99,111,109,112,97,115,115,95,107,95,57,51,0)], [String.fromCharCode(98,97,114,101,95,52,95,51,54,0),String.fromCharCode(101,95,57,54,95,111,117,116,102,105,108,101,0)]]);
       let mbnativeadvancedt = String.fromCharCode(114,95,56,49,95,99,111,110,100,101,110,115,97,98,108,101,0);
         upload8 = new Map([[`${mappingR.size}`, 3 - mappingR.size]]);
      if ((upload8.size * 4) < 5 || (upload8.size * 4) < 3) {
         mbnativeadvancedt = `${upload8.size - 2}`;
      }
       let unfilly = 1.0;
       let searchu = 5.0;
      while (3.26 >= (unfilly / 5.99)) {
          let h_playerC: Map<any, any> = new Map([[String.fromCharCode(114,97,110,100,111,109,95,120,95,51,54,0),41], [String.fromCharCode(103,95,49,95,116,116,116,0),229]]);
          let libjsijniprofilerZ = String.fromCharCode(121,95,55,0);
          let transfer7: Array<any> = [578, 788, 446];
         unfilly /= Math.max(parseFloat(`${libjsijniprofilerZ.length}`), 1);
         h_playerC = new Map([[`${h_playerC.size}`, transfer7.length - 3]]);
         libjsijniprofilerZ += `${transfer7.length}`;
         break;
      }
          let ballQ: Map<any, any> = new Map([[String.fromCharCode(111,98,106,99,95,119,95,53,55,0),780], [String.fromCharCode(100,101,110,111,114,109,97,108,105,122,101,95,105,95,51,50,0),111]]);
         mappingR = new Map([[`${ballQ.size}`, ballQ.size]]);
         searchu *= parseFloat(`${3 - mappingR.size}`);
          let lineG = String.fromCharCode(98,101,104,105,110,100,95,55,95,50,50,0);
          let stationsx = false;
          let sanso: Map<any, any> = new Map([[String.fromCharCode(108,95,55,57,95,114,101,115,117,108,116,115,0),String.fromCharCode(109,111,100,101,114,110,95,109,95,49,51,0)], [String.fromCharCode(120,95,56,54,95,114,101,99,121,99,108,101,0),String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,95,56,95,56,56,0)], [String.fromCharCode(107,95,50,56,95,109,101,115,97,103,101,115,0),String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,100,95,55,49,0)]]);
         upload8 = new Map([[`${upload8.size}`, mbnativeadvancedt.length]]);
         lineG = `${((stationsx ? 5 : 1) / 1)}`;
         stationsx = sanso.size <= 53 || 53 <= lineG.length;
         sanso = new Map([[`${stationsx}`, ((stationsx ? 5 : 3) * 3)]]);
          let dicep = 2.0;
          let sinab = true;
         unfilly += (parseFloat(`${(sinab ? 1 : 1) >> (Math.min(Math.abs(upload8.size), 1))}`));
         dicep -= parseInt(`${dicep}`) / 2;
         sinab = (dicep / (Math.max(dicep, 6))) >= 49.1;
         mbnativeadvancedt = `${parseInt(`${unfilly}`)}`;
      balle = [2 ^ moduleb.length];
   let renewQ = runtimescheduler7 == String.fromCharCode(117,53,120,114,0);
   do {
      runtimescheduler7 = `${runtimescheduler7.length & 1}`;
      if (renewQ) {
         break;
      }
   } while ((orientation_.includes(`${runtimescheduler7.length}`)) && renewQ);
   if ((utils_ * orientation_.length) <= 2.24 || 2.24 <= (utils_ * orientation_.length)) {
      orientation_ = `${moduleb.length}`;
   }
   for (let b = 0; b < 3; b++) {
      utils_ /= Math.max(3, moduleb.length + runtimescheduler7.length);
   }
   for (let s = 0; s < 3; s++) {
      orientation_ += `${2 * parseInt(`${utils_}`)}`;
   }

          session.cancel(); 
        }
      }
      dispatch(removeVideoFromDownloadThunk(vod, episode.vodSourceId, episode.vodUrlNid))
    }
    RNFetchBlob.fs.unlink(targetVod.imagePath).catch()
    dispatch(removeVodFromDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function clearQueueOnAppStart(): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: wwAndroid[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        if (episode.status === DVGGrayTeamdetailsbg.DVGNalyticsTextinput){
       let subtextn = 4.0;
    let textlayoutmanagerw: Array<any> = [924, 803, 111];
    let otherz: Array<any> = [String.fromCharCode(116,95,53,48,0), String.fromCharCode(103,95,50,48,95,115,97,108,116,115,0)];
    let headerQ: Array<any> = [831, 68];
    let chinax = 4.0;
    let circlel = String.fromCharCode(101,95,54,56,95,99,104,117,110,107,0);
    let modules7 = 1;
    let skipB = false;
    let guidei = String.fromCharCode(112,97,114,116,95,102,95,56,55,0);
       let defaultpredictionprofileB = String.fromCharCode(105,95,52,52,95,114,101,100,117,99,101,114,0);
         defaultpredictionprofileB += "2";
          let userL = String.fromCharCode(115,116,111,112,95,119,95,50,48,0);
          let philippinesh = 3;
         defaultpredictionprofileB += `${defaultpredictionprofileB.length}`;
         userL = `${philippinesh}`;
         philippinesh &= 2 >> (Math.min(2, Math.abs(philippinesh)));
         defaultpredictionprofileB += `${3 ^ defaultpredictionprofileB.length}`;
      textlayoutmanagerw = [otherz.length];
   while (3.89 >= (5.82 + chinax) || 3 >= (headerQ.length << (Math.min(Math.abs(4), 1)))) {
       let yellowp = false;
       let stylef: Array<any> = [273, 899, 588];
      if (2 <= (2 & stylef.length) && yellowp) {
         yellowp = stylef.length == 75;
      }
         yellowp = stylef.length <= 42 || yellowp;
      for (let m = 0; m < 1; m++) {
          let phone6 = String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,95,118,95,55,56,0);
          let detail6 = String.fromCharCode(116,95,49,95,100,101,108,97,117,110,97,121,0);
         stylef = [(phone6 == String.fromCharCode(50,0) ? phone6.length : (yellowp ? 5 : 4))];
         detail6 += `${detail6.length & 3}`;
      }
         yellowp = stylef.length < 74 && !yellowp;
      for (let j = 0; j < 3; j++) {
         stylef.push((1 * (yellowp ? 3 : 1)));
      }
      while (stylef.length <= 2) {
          let successq = String.fromCharCode(103,95,55,48,95,114,101,102,101,114,101,110,101,0);
          let xadsdkt = String.fromCharCode(112,114,111,102,114,101,115,115,95,101,95,51,53,0);
          let dragclosey = 3;
         stylef.push((xadsdkt == String.fromCharCode(81,0) ? xadsdkt.length : stylef.length));
         successq += "1";
         dragclosey |= dragclosey + successq.length;
         break;
      }
      headerQ.push(((skipB ? 5 : 1) ^ headerQ.length));
      break;
   }
       let detaile = String.fromCharCode(115,95,57,95,99,114,101,97,116,101,100,0);
         detaile += `${(String.fromCharCode(105,0) == detaile ? detaile.length : detaile.length)}`;
         detaile = `${detaile.length}`;
         detaile = `${detaile.length}`;
      chinax += ((skipB ? 5 : 5) << (Math.min(Math.abs(parseInt(`${chinax}`)), 5)));
   if (circlel.endsWith(`${subtextn}`)) {
      subtextn *= 3 >> (Math.min(Math.abs(modules7), 1));
   }
      circlel += `${1 >> (Math.min(3, textlayoutmanagerw.length))}`;
   for (let t = 0; t < 2; t++) {
      circlel = `${circlel.length % (Math.max(1, 10))}`;
   }
       let subso = String.fromCharCode(103,111,116,111,95,117,95,51,53,0);
       let flyers = String.fromCharCode(116,95,56,52,95,116,114,97,110,115,112,111,114,116,115,0);
       let mintegralQ = false;
         mintegralQ = mintegralQ && flyers.length == 66;
      while (!flyers.startsWith(subso)) {
          let configureW = String.fromCharCode(110,95,51,51,95,97,108,105,118,101,0);
         flyers += `${configureW.length << (Math.min(subso.length, 3))}`;
         break;
      }
      for (let w = 0; w < 2; w++) {
          let questiconi: Array<any> = [824, 306];
         subso = `${(2 >> (Math.min(2, Math.abs((mintegralQ ? 3 : 1)))))}`;
         questiconi.push(3);
      }
      let ksadv = 9766292 <= subso.length;
      do {
          let inouttargetredN = 2;
          let hejiF = 2.0;
          let navigationF = 2.0;
          let info4: Map<any, any> = new Map([[String.fromCharCode(97,114,103,115,95,109,95,50,0),907], [String.fromCharCode(112,95,55,53,95,115,105,98,108,105,110,103,115,0),621], [String.fromCharCode(117,110,108,111,99,107,95,55,95,54,57,0),307]]);
         subso = `${subso.length}`;
         inouttargetredN |= inouttargetredN - info4.size;
         hejiF += 1;
         navigationF += parseFloat(`${info4.size}`);
         if (ksadv) {
            break;
         }
      } while ((subso.length >= flyers.length) && ksadv);
          let downloadz = false;
         flyers += `${subso.length / (Math.max(3, 9))}`;
         downloadz = (downloadz ? !downloadz : !downloadz);
       let mountingL = 5;
       let klevinQ = 2;
         flyers = `${mountingL}`;
      while (4 >= (1 & mountingL) && 5 >= (flyers.length & 1)) {
         flyers = `${(String.fromCharCode(84,0) == flyers ? (mintegralQ ? 5 : 4) : flyers.length)}`;
         break;
      }
       let room3 = String.fromCharCode(119,95,53,57,95,112,114,111,98,97,98,105,108,105,116,121,0);
       let mappingG = String.fromCharCode(115,105,109,105,108,97,114,105,116,121,95,53,95,56,51,0);
      circlel += `${modules7 / 2}`;
   while (3.69 > (subtextn + textlayoutmanagerw.length)) {
       let recommendationx = String.fromCharCode(106,95,49,54,95,97,100,100,102,0);
       let gdtadvA = String.fromCharCode(109,105,116,101,114,95,57,95,50,54,0);
       let carousel8 = 2;
       let untickt = 1.0;
       let commonr = true;
      if (recommendationx != gdtadvA) {
          let heji7 = 0.0;
          let scrollview9 = 2;
          let invitem = String.fromCharCode(109,95,52,48,95,108,105,110,107,101,100,0);
         gdtadvA += "2";
         heji7 *= 3;
         scrollview9 <<= Math.min(3, Math.abs(scrollview9 | 1));
         invitem = `${scrollview9 | parseInt(`${heji7}`)}`;
      }
      if ((2.47 + untickt) <= 3.84 || 3 <= (parseInt(`${untickt}`) + gdtadvA.length)) {
         gdtadvA += `${carousel8 >> (Math.min(Math.abs(2), 5))}`;
      }
      while (gdtadvA.endsWith(`${commonr}`)) {
         commonr = untickt == parseFloat(`${recommendationx.length}`);
         break;
      }
      if (5 <= (5 - recommendationx.length)) {
          let sider: Map<any, any> = new Map([[String.fromCharCode(108,95,55,55,95,108,105,98,120,0),847], [String.fromCharCode(99,95,51,48,95,116,111,107,101,110,116,120,0),565], [String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,49,95,56,48,0),843]]);
          let catalogO = String.fromCharCode(100,121,110,108,105,110,107,95,49,95,57,56,0);
          let libreactnativeblobZ: Map<any, any> = new Map([[String.fromCharCode(115,95,51,52,95,104,101,120,98,110,0),true ], [String.fromCharCode(110,95,56,52,95,99,97,116,97,108,111,103,0),false ], [String.fromCharCode(119,97,116,99,104,105,110,103,95,117,95,50,55,0),false ]]);
         carousel8 -= 3;
         sider.set(`${catalogO}`, sider.size);
         catalogO += `${sider.size + 2}`;
         libreactnativeblobZ = new Map([[`${libreactnativeblobZ.size}`, catalogO.length]]);
      }
      let attributedstringo = 6984132 <= carousel8;
      do {
         carousel8 <<= Math.min(5, Math.abs(carousel8 % (Math.max(3, parseInt(`${untickt}`)))));
         if (attributedstringo) {
            break;
         }
      } while ((2 >= (2 / (Math.max(4, gdtadvA.length)))) && attributedstringo);
      while (!commonr) {
          let gmailz = 1.0;
          let dnewsshared = String.fromCharCode(99,111,110,103,95,110,95,49,54,0);
         untickt += parseFloat(`${dnewsshared.length / 3}`);
         gmailz /= Math.max(parseFloat(`${parseInt(`${gmailz}`)}`), 2);
         dnewsshared = "2";
         break;
      }
      for (let c = 0; c < 3; c++) {
          let saveN = String.fromCharCode(97,95,52,49,95,112,97,115,115,102,98,0);
          let selected2 = 3.0;
         recommendationx += `${parseInt(`${untickt}`) | 3}`;
         saveN += `${2 / (Math.max(5, saveN.length))}`;
         selected2 /= Math.max(2 % (Math.max(6, parseInt(`${selected2}`))), 2);
      }
      while ((carousel8 + parseInt(`${untickt}`)) > 2 && 2 > (carousel8 + parseInt(`${untickt}`))) {
          let statisticsinactivet: Map<any, any> = new Map([[String.fromCharCode(98,95,50,48,95,100,105,97,103,111,110,97,108,0),String.fromCharCode(98,95,53,48,95,104,111,108,100,115,0)], [String.fromCharCode(103,95,50,48,95,113,122,98,105,110,0),String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,95,122,95,56,56,0)]]);
          let renewm = false;
          let sportsr: Array<any> = [24, 851];
         untickt += parseFloat(`${statisticsinactivet.size & 1}`);
         statisticsinactivet = new Map([[`${sportsr.length}`, ((renewm ? 4 : 5) << (Math.min(Math.abs(1), 4)))]]);
         renewm = !renewm;
         sportsr.push(((renewm ? 2 : 3) << (Math.min(sportsr.length, 3))));
         break;
      }
      if (3 <= gdtadvA.length || 3 <= recommendationx.length) {
         recommendationx += "3";
      }
          let plus6: Map<any, any> = new Map([[String.fromCharCode(109,95,50,95,115,116,97,103,101,0),14], [String.fromCharCode(117,95,57,55,95,114,101,108,97,121,0),752], [String.fromCharCode(105,110,100,101,120,101,115,95,119,95,52,55,0),161]]);
          let libmapbufferjnie = 3.0;
          let greyarrowup4: Map<any, any> = new Map([[String.fromCharCode(112,103,110,111,95,110,95,51,49,0),false ], [String.fromCharCode(98,95,55,51,95,115,121,110,111,110,121,109,115,0),true ]]);
         untickt -= parseFloat(`${plus6.size}`);
         plus6 = new Map([[`${greyarrowup4.size}`, 1]]);
         libmapbufferjnie -= parseFloat(`${greyarrowup4.size}`);
      for (let t = 0; t < 2; t++) {
         untickt -= parseFloat(`${parseInt(`${untickt}`)}`);
      }
         gdtadvA = `${recommendationx.length - parseInt(`${untickt}`)}`;
         recommendationx += `${parseInt(`${untickt}`) - carousel8}`;
      while (5.29 <= (5.98 - untickt) && commonr) {
         commonr = recommendationx == String.fromCharCode(122,0);
         break;
      }
      while (recommendationx.length >= carousel8) {
         carousel8 *= (parseInt(`${untickt}`) + (commonr ? 5 : 3));
         break;
      }
      textlayoutmanagerw = [parseInt(`${untickt}`)];
      break;
   }
   let flipperV = 5197279.0 <= chinax;
   do {
      chinax -= circlel.length & 1;
      if (flipperV) {
         break;
      }
   } while ((circlel.length < 2) && flipperV);
      otherz.push(2);

          RNFetchBlob.fs.unlink(episode.videoPath).catch()
          dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, {progress: {percentage: 0}, status: DVGGrayTeamdetailsbg.DVGCurrent, ffmpegSession: null, sizeInBytes: 0}))
          
        }
      }
    }

    dispatch(resetQueue())
  }
}

export function restartVideoDownloadThunk (
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
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
      status: DVGGrayTeamdetailsbg.DVGNalyticsTextinput, 
      sizeInBytes: 0
    }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, targetVod.vodIsAdult))
  }
}

export function pauseVideoDownloadThunk (
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
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
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni, ffmpegSession: null}))


    const newState = getState().downloadVideoReducer
    if (newState.queue.length === 0) return
    if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
    dispatch(resumeFirstVideoDownload())
  }
}

function resumeVideoDownloadThunk(
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
  ): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
  return async function (dispatch, getState) {
    const initialState = getState().downloadVideoReducer
    const initialPercentage = initialState.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      ?.progress.percentage; 

    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status:DVGGrayTeamdetailsbg.DVGNalyticsTextinput}))

    const isAdult = initialState.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === DVGGrayTeamdetailsbg.DVGNalyticsTextinput){
       let questiconO = String.fromCharCode(115,95,56,55,95,99,111,110,116,97,105,110,115,0);
    let ajaxY: Array<any> = [865, 593, 207];
    let brightnessB = 3.0;
    let side0 = 2;
    let chatz = String.fromCharCode(118,100,115,111,95,48,95,52,50,0);
    let contextb: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,115,117,99,99,101,115,115,99,98,0),703], [String.fromCharCode(99,104,97,110,110,101,108,115,95,98,95,54,51,0),938], [String.fromCharCode(97,98,98,114,95,113,95,55,57,0),432]]);
    let libavfilterf = String.fromCharCode(108,95,57,55,95,112,111,108,121,103,111,110,0);
    let hookse = 1.0;
    let codegenZ = 3.0;
    let giftZ: Map<any, any> = new Map([[String.fromCharCode(105,95,52,49,95,101,115,112,111,110,100,101,114,0),676], [String.fromCharCode(116,99,102,105,108,101,95,55,95,57,51,0),140]]);
    let castingi = false;
       let scoreP = false;
       let libreactnativejnix = 4.0;
       let playlist4 = String.fromCharCode(97,95,57,49,95,115,116,97,108,101,0);
         playlist4 += `${1 / (Math.max(7, playlist4.length))}`;
      for (let o = 0; o < 1; o++) {
         libreactnativejnix -= parseFloat(`${parseInt(`${libreactnativejnix}`) - 1}`);
      }
      while ((libreactnativejnix + 4.79) >= 1.49 && libreactnativejnix >= 4.79) {
         scoreP = !scoreP || 62.53 < libreactnativejnix;
         break;
      }
      let statisticsx = String.fromCharCode(103,95,117,56,102,49,0) == playlist4;
      do {
         playlist4 = `${2 + parseInt(`${libreactnativejnix}`)}`;
         if (statisticsx) {
            break;
         }
      } while (statisticsx && ((parseInt(`${libreactnativejnix}`) * playlist4.length) >= 2 && (parseInt(`${libreactnativejnix}`) * playlist4.length) >= 2));
      while ((libreactnativejnix - 3.52) > 4.22 || scoreP) {
          let cross9: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,116,121,95,51,95,51,52,0),false ], [String.fromCharCode(97,95,53,55,95,98,111,111,107,109,97,114,107,0),true ], [String.fromCharCode(122,95,57,57,95,115,112,104,101,114,105,99,97,108,0),true ]]);
          let mailX = 1.0;
          let mappingn = false;
          let relatedP: Map<any, any> = new Map([[String.fromCharCode(97,95,51,53,95,110,111,116,0),268], [String.fromCharCode(97,95,51,51,95,97,108,112,110,0),923], [String.fromCharCode(99,95,54,95,112,108,117,114,97,108,105,122,101,100,0),705]]);
          let basketballhometeamc = 3;
         scoreP = playlist4.length > 12;
         cross9.set(`${mailX}`, 3 % (Math.max(parseInt(`${mailX}`), 4)));
         mappingn = basketballhometeamc <= 68;
         relatedP.set(`${mappingn}`, (relatedP.size / (Math.max(5, (mappingn ? 5 : 4)))));
         basketballhometeamc <<= Math.min(Math.abs(1 + parseInt(`${mailX}`)), 1);
         break;
      }
         scoreP = playlist4.length == 23 || 100.68 == libreactnativejnix;
      while (!scoreP) {
         libreactnativejnix *= (parseFloat(`${String.fromCharCode(120,0) == playlist4 ? playlist4.length : parseInt(`${libreactnativejnix}`)}`));
         break;
      }
         scoreP = !playlist4.endsWith(`${libreactnativejnix}`);
      let statisticsC = 8649562.0 >= libreactnativejnix;
      do {
         libreactnativejnix -= (parseFloat(`${(scoreP ? 1 : 5) / (Math.max(1, parseInt(`${libreactnativejnix}`)))}`));
         if (statisticsC) {
            break;
         }
      } while ((1.61 < (parseFloat(`${playlist4.length}`) * libreactnativejnix) || (4 + playlist4.length) < 2) && statisticsC);
      giftZ.set(playlist4, 3);
   while (4 < (questiconO.length * 2)) {
      contextb = new Map([[`${contextb.size}`, contextb.size]]);
      break;
   }
   if (3.71 >= (1.93 - codegenZ)) {
      chatz = `${(String.fromCharCode(113,0) == libavfilterf ? libavfilterf.length : side0)}`;
   }
       let shielddoneq = 2.0;
         shielddoneq /= Math.max(parseFloat(`${parseInt(`${shielddoneq}`)}`), 3);
         shielddoneq *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${shielddoneq}`)), 4))}`);
         shielddoneq += parseFloat(`${parseInt(`${shielddoneq}`)}`);
      libavfilterf = `${side0 | parseInt(`${codegenZ}`)}`;
   while (chatz.startsWith(`${codegenZ}`)) {
      codegenZ += chatz.length;
      break;
   }
      codegenZ /= Math.max(5, parseInt(`${codegenZ}`));
   for (let u = 0; u < 3; u++) {
      libavfilterf += `${2 * giftZ.size}`;
   }
      giftZ = new Map([[`${ajaxY.length}`, chatz.length]]);

        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(initialPercentage + percentage, 100) 
          }
        }))
      }
    }, 2000)
    
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni) FFmpegKit.cancel(currentState.ffmpegSession ?? undefined)
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
    }

    const onDownloadEnd = async () => {
       let indicatorN = 1.0;
    let runtimeschedulerE = 3;
    let zooml = 0.0;
    let relatedo: Array<any> = [String.fromCharCode(115,95,56,49,95,98,108,111,99,107,100,115,112,0), String.fromCharCode(99,95,53,52,95,119,109,118,100,97,116,97,0)];
    let dragN = String.fromCharCode(101,95,49,49,95,111,112,101,114,97,116,111,114,0);
    let release_4xg: Map<any, any> = new Map([[String.fromCharCode(106,95,49,54,95,109,97,110,121,0),943], [String.fromCharCode(99,95,52,49,95,115,99,104,101,109,97,0),381], [String.fromCharCode(103,95,51,54,95,114,101,99,101,105,118,101,114,0),90]]);
    let const_cds = String.fromCharCode(112,101,114,109,97,110,101,110,116,95,99,95,55,48,0);
    let bodanp = true;
    let imagesk = 5.0;
    let jinit_6zF = String.fromCharCode(113,95,52,55,95,99,104,97,112,0);
    let xadsdkN = 1;
    let castr: Map<any, any> = new Map([[String.fromCharCode(110,117,109,98,105,116,115,95,99,95,54,52,0),546], [String.fromCharCode(112,105,99,109,101,109,115,101,116,95,98,95,51,56,0),834], [String.fromCharCode(119,95,53,57,95,101,112,111,108,108,0),686]]);
    let baiduQ = String.fromCharCode(110,95,51,57,95,115,113,114,116,0);
    let back1: Array<any> = [817, 159];
    let buffern: Map<any, any> = new Map([[String.fromCharCode(113,95,51,53,95,115,117,98,109,111,100,101,108,0),false ], [String.fromCharCode(99,111,110,116,95,51,95,56,48,0),false ]]);
   let reactx = dragN.length <= 7691508;
   do {
      dragN = `${release_4xg.size % (Math.max(10, const_cds.length))}`;
      if (reactx) {
         break;
      }
   } while ((2 == (3 & dragN.length) && (3 & dragN.length) == 4) && reactx);
   while (4.5 <= (imagesk * 2.86) && imagesk <= 2.86) {
       let refresha = 3;
       let scrollviewl = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,114,95,52,53,0);
       let taiwanq = String.fromCharCode(110,95,52,95,112,114,111,106,101,99,116,0);
       let popupS = String.fromCharCode(122,95,52,55,95,103,114,101,103,111,114,105,97,110,0);
       let settingsg = 5;
       let containerM = 2;
         popupS += `${3 * popupS.length}`;
          let footballI = false;
         containerM &= popupS.length << (Math.min(Math.abs(3), 4));
         footballI = !footballI && footballI;
      while (5 < (popupS.length / (Math.max(2, settingsg))) && (popupS.length / 5) < 2) {
         popupS = `${scrollviewl.length % (Math.max(taiwanq.length, 4))}`;
         break;
      }
          let graphF: Map<any, any> = new Map([[String.fromCharCode(105,95,53,52,95,99,116,120,116,0),519], [String.fromCharCode(115,116,114,97,116,101,103,105,101,115,95,97,95,55,48,0),638], [String.fromCharCode(109,95,55,52,95,97,100,100,107,101,121,0),400]]);
          let nbatrophyr = 5;
         refresha <<= Math.min(Math.abs(refresha + scrollviewl.length), 4);
         graphF = new Map([[`${graphF.size}`, graphF.size << (Math.min(1, Math.abs(nbatrophyr)))]]);
         nbatrophyr &= 2;
      while (2 <= (4 ^ settingsg)) {
          let renewC = String.fromCharCode(114,101,100,95,100,95,56,51,0);
          let static_pB = String.fromCharCode(112,111,115,116,97,108,95,121,95,52,55,0);
         settingsg -= containerM;
         renewC = `${renewC.length * static_pB.length}`;
         static_pB += `${static_pB.length >> (Math.min(Math.abs(2), 5))}`;
         break;
      }
         taiwanq = `${scrollviewl.length | taiwanq.length}`;
       let libjsijniprofilera = String.fromCharCode(98,101,122,101,108,95,106,95,54,50,0);
       let sheetw = String.fromCharCode(101,95,54,48,95,109,111,100,117,108,101,109,97,112,0);
         containerM %= Math.max(2, 2 + popupS.length);
         taiwanq = `${(libjsijniprofilera == String.fromCharCode(108,0) ? popupS.length : libjsijniprofilera.length)}`;
         containerM >>= Math.min(Math.abs(2 / (Math.max(2, libjsijniprofilera.length))), 5);
         scrollviewl = `${(String.fromCharCode(114,0) == scrollviewl ? containerM : scrollviewl.length)}`;
      bodanp = taiwanq.length > 41;
      break;
   }
   if (bodanp) {
       let colorsf = 4.0;
       let screenH: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,115,101,109,98,108,101,114,95,97,95,57,57,0),String.fromCharCode(116,95,49,52,95,100,101,115,116,114,117,99,116,0)], [String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,55,95,53,55,0),String.fromCharCode(101,95,51,51,95,119,97,108,108,112,97,112,101,114,115,0)]]);
       let imagesL = String.fromCharCode(114,101,116,117,114,110,115,95,51,95,50,51,0);
       let logouserM = String.fromCharCode(115,116,114,105,100,101,115,95,120,95,54,52,0);
       let s_unlockS: Map<any, any> = new Map([[String.fromCharCode(109,95,52,55,95,119,114,105,116,97,98,108,101,0),String.fromCharCode(102,95,50,95,99,111,112,121,116,111,0)], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,95,51,95,56,55,0),String.fromCharCode(114,101,109,97,105,110,105,110,103,95,118,95,57,54,0)], [String.fromCharCode(116,95,57,50,95,99,111,110,118,101,114,103,101,110,99,101,0),String.fromCharCode(113,95,56,56,95,100,101,114,101,102,0)]]);
      if (4 >= imagesL.length || logouserM != String.fromCharCode(106,0)) {
         logouserM += `${(logouserM == String.fromCharCode(106,0) ? imagesL.length : logouserM.length)}`;
      }
         imagesL = "2";
         imagesL = `${imagesL.length << (Math.min(4, Math.abs(screenH.size)))}`;
         logouserM = "3";
          let runtimescheduler1: Map<any, any> = new Map([[String.fromCharCode(104,97,100,97,109,97,114,100,95,56,95,51,51,0),185], [String.fromCharCode(103,100,97,116,97,95,118,95,50,57,0),619]]);
          let dacccfaabfbcbadeebddcabacdffdb5 = String.fromCharCode(98,95,55,53,95,109,117,110,109,97,112,0);
         screenH.set(`${imagesL}`, imagesL.length);
         runtimescheduler1.set(`${dacccfaabfbcbadeebddcabacdffdb5}`, 3 ^ dacccfaabfbcbadeebddcabacdffdb5.length);
         screenH.set(`${imagesL}`, s_unlockS.size);
      if ((parseInt(`${colorsf}`) * s_unlockS.size) >= 3 && 5.61 >= (colorsf * 1.87)) {
         s_unlockS.set(logouserM, 2);
      }
         logouserM += `${parseInt(`${colorsf}`)}`;
      let singleC = s_unlockS.size >= 5295460;
      do {
         s_unlockS = new Map([[`${s_unlockS.size}`, s_unlockS.size]]);
         if (singleC) {
            break;
         }
      } while ((2 >= (imagesL.length >> (Math.min(1, Math.abs(s_unlockS.size))))) && singleC);
       let sideU: Array<any> = [581, 124];
       let targetj: Array<any> = [756, 174];
      for (let j = 0; j < 2; j++) {
         colorsf += sideU.length % 2;
      }
      while (4 > screenH.size) {
         screenH = new Map([[`${targetj.length}`, targetj.length]]);
         break;
      }
          let topicD = false;
          let dplusz: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,115,116,95,111,95,56,50,0),398], [String.fromCharCode(97,95,55,55,95,97,99,116,105,118,97,116,101,0),342], [String.fromCharCode(98,95,49,53,95,118,97,110,99,0),774]]);
          let favoriteK = String.fromCharCode(99,95,49,50,95,112,111,115,105,116,105,118,101,0);
         screenH.set(favoriteK, favoriteK.length);
         topicD = !topicD && dplusz.size == 90;
         dplusz = new Map([[`${dplusz.size}`, dplusz.size / 3]]);
      for (let x = 0; x < 1; x++) {
          let gifgoalh = 4.0;
          let weiboj: Array<any> = [337, 713];
          let commonW = 2.0;
          let data1 = true;
         colorsf += imagesL.length % 3;
         gifgoalh *= 3 << (Math.min(Math.abs(parseInt(`${gifgoalh}`)), 3));
         weiboj.push(((data1 ? 1 : 3) * parseInt(`${gifgoalh}`)));
         commonW /= Math.max(4, parseFloat(`${parseInt(`${gifgoalh}`) | 1}`));
         data1 = 98.17 <= commonW || data1;
      }
          let mintegralm: Map<any, any> = new Map([[String.fromCharCode(100,95,52,55,95,109,112,101,103,112,105,99,116,117,114,101,0),47], [String.fromCharCode(116,95,50,49,95,99,107,112,116,0),133], [String.fromCharCode(98,111,114,100,101,114,95,122,95,54,51,0),362]]);
          let filledT = true;
          let zhengpianF = 5.0;
         sideU.push(s_unlockS.size | 1);
         mintegralm = new Map([[`${mintegralm.size}`, mintegralm.size - 1]]);
         filledT = mintegralm.get(`${zhengpianF}`) != null;
         zhengpianF += parseFloat(`${parseInt(`${zhengpianF}`)}`);
      const_cds = `${release_4xg.size}`;
   }
       let progressj: Array<any> = [839, 928];
       let libreactperfloggerjnic = 0.0;
       let webviewe = String.fromCharCode(121,95,55,50,95,99,117,116,101,115,116,0);
         libreactperfloggerjnic *= webviewe.length - 2;
         webviewe = `${1 >> (Math.min(1, progressj.length))}`;
      while (webviewe.length > 3) {
          let storep = String.fromCharCode(108,95,49,50,95,109,111,114,112,104,101,100,0);
          let dialog0 = true;
          let subbasketballplayerv = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,48,95,50,49,0);
          let private_sT = 5.0;
          let whistleT = String.fromCharCode(99,95,54,53,95,109,97,120,105,109,105,122,101,100,0);
         libreactperfloggerjnic -= storep.length;
         storep += "1";
         dialog0 = subbasketballplayerv.length == 4;
         subbasketballplayerv += `${whistleT.length}`;
         private_sT += (parseInt(`${private_sT}`) + (dialog0 ? 4 : 4));
         whistleT += `${whistleT.length * 3}`;
         break;
      }
          let loginsuccessT = String.fromCharCode(114,95,49,57,95,98,105,110,111,109,105,97,108,0);
          let turnY = String.fromCharCode(115,105,109,112,108,101,116,97,103,95,110,95,55,55,0);
          let submitG = String.fromCharCode(116,95,54,53,95,106,111,98,115,0);
         libreactperfloggerjnic -= 1 - loginsuccessT.length;
         loginsuccessT = `${(String.fromCharCode(80,0) == submitG ? turnY.length : submitG.length)}`;
         turnY = `${submitG.length & 1}`;
      if (webviewe.includes(`${progressj.length}`)) {
          let yingB = 2;
          let plashM = String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,107,95,51,52,0);
          let injuryx = String.fromCharCode(102,95,51,95,99,108,97,109,112,101,100,0);
          let hooksR = 1.0;
          let unreadx: Array<any> = [900, 844, 443];
         progressj = [yingB << (Math.min(Math.abs(1), 2))];
         yingB %= Math.max(unreadx.length, 4);
         plashM = `${unreadx.length + parseInt(`${hooksR}`)}`;
         injuryx += `${(String.fromCharCode(100,0) == plashM ? plashM.length : parseInt(`${hooksR}`))}`;
      }
      while (1 <= (parseInt(`${libreactperfloggerjnic}`) / (Math.max(webviewe.length, 10)))) {
          let zhuboV: Array<any> = [String.fromCharCode(111,95,52,53,95,116,117,114,110,0), String.fromCharCode(104,95,54,52,95,97,100,100,114,101,115,115,0)];
          let productd = 2.0;
          let profileframeg: Map<any, any> = new Map([[String.fromCharCode(97,115,115,105,103,110,95,115,95,52,48,0),505], [String.fromCharCode(108,95,55,54,95,101,110,101,114,103,121,0),376]]);
          let libswscaleU = false;
         webviewe += `${3 * parseInt(`${libreactperfloggerjnic}`)}`;
         zhuboV = [2];
         productd += 3 >> (Math.min(4, zhuboV.length));
         profileframeg = new Map([[`${zhuboV.length}`, 2 | zhuboV.length]]);
         break;
      }
      for (let g = 0; g < 1; g++) {
         webviewe += "3";
      }
         libreactperfloggerjnic /= Math.max(5, webviewe.length);
      for (let a = 0; a < 2; a++) {
         webviewe = `${parseInt(`${libreactperfloggerjnic}`) >> (Math.min(progressj.length, 5))}`;
      }
      const_cds += "2";
   for (let x = 0; x < 3; x++) {
       let backwardF = String.fromCharCode(97,95,57,49,95,99,111,110,103,101,115,116,105,111,110,0);
       let playlist4 = false;
       let hookz = true;
       let saveC = true;
       let policy6 = false;
      if (!policy6 || 4 >= backwardF.length) {
          let editw = String.fromCharCode(122,95,56,55,95,116,114,97,105,116,115,0);
          let shielddone8: Map<any, any> = new Map([[String.fromCharCode(116,95,56,95,117,118,109,118,0),String.fromCharCode(109,95,52,57,95,99,114,99,116,97,98,108,101,0)], [String.fromCharCode(119,104,101,114,101,95,52,95,53,54,0),String.fromCharCode(99,104,97,110,103,101,100,95,114,95,49,49,0)]]);
          let belln = String.fromCharCode(98,95,56,57,95,109,98,105,110,116,114,97,0);
         policy6 = 18 == backwardF.length;
         editw = `${(belln == String.fromCharCode(49,0) ? belln.length : editw.length)}`;
         shielddone8 = new Map([[belln, editw.length >> (Math.min(Math.abs(1), 4))]]);
      }
       let componentregistryU = 1.0;
       let codey = 5.0;
          let security7: Array<any> = [608, 23, 793];
          let anythinke = 4.0;
          let videoj: Map<any, any> = new Map([[String.fromCharCode(100,95,53,55,95,97,112,102,115,0),704], [String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,119,95,53,53,0),510]]);
         codey -= 3;
         security7 = [security7.length];
         anythinke += parseFloat(`${parseInt(`${anythinke}`)}`);
         videoj = new Map([[`${videoj.size}`, 3]]);
      while (hookz) {
         componentregistryU *= backwardF.length;
         break;
      }
         codey *= ((saveC ? 1 : 4) + 3);
      while (!playlist4 && !policy6) {
          let libfollyu = true;
          let targetg = String.fromCharCode(97,114,99,116,105,99,95,97,95,54,48,0);
         policy6 = componentregistryU >= 15.78;
         libfollyu = libfollyu || targetg.length > 41;
         targetg += `${((libfollyu ? 4 : 4))}`;
         break;
      }
          let mappingQ = 0.0;
          let editu = String.fromCharCode(97,95,50,95,112,97,115,115,101,100,0);
         backwardF = `${2 - parseInt(`${componentregistryU}`)}`;
         mappingQ *= parseInt(`${mappingQ}`) ^ 1;
         editu += `${(String.fromCharCode(80,0) == editu ? parseInt(`${mappingQ}`) : editu.length)}`;
       let thumbnaill: Array<any> = [809, 818, 142];
       let progressJ: Array<any> = [String.fromCharCode(116,95,49,50,95,101,109,109,105,110,116,114,105,110,0), String.fromCharCode(99,95,53,49,95,97,100,106,117,115,116,101,100,0), String.fromCharCode(99,111,110,118,101,114,116,111,114,95,97,95,52,49,0)];
      const_cds = `${parseInt(`${zooml}`)}`;
   }
   let eactc = 7174207.0 <= imagesk;
   do {
       let templateprocessorr: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,116,121,95,114,95,53,0),String.fromCharCode(98,97,108,97,110,99,101,115,95,49,95,53,49,0)], [String.fromCharCode(97,95,51,95,118,97,114,105,110,116,115,0),String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,95,118,95,56,56,0)]]);
       let gdtadvw = 1.0;
       let iconuser6 = 0.0;
       let rewardvideoN = String.fromCharCode(112,95,50,50,95,108,97,115,116,110,111,100,101,0);
         iconuser6 /= Math.max(2, parseInt(`${iconuser6}`) / 2);
      for (let h = 0; h < 1; h++) {
         rewardvideoN += `${templateprocessorr.size}`;
      }
          let minivodt = String.fromCharCode(112,95,52,54,95,115,119,97,98,0);
          let agreemento = String.fromCharCode(98,95,54,50,95,98,97,100,0);
          let paginationf = String.fromCharCode(108,97,98,101,108,115,95,53,95,51,52,0);
         rewardvideoN += `${parseInt(`${iconuser6}`)}`;
         minivodt = `${agreemento.length << (Math.min(Math.abs(1), 5))}`;
         agreemento = `${3 - paginationf.length}`;
         paginationf = "3";
       let libpangleflippede = String.fromCharCode(109,95,48,95,97,100,100,105,116,105,111,110,97,108,0);
       let matchactive7 = String.fromCharCode(114,101,99,101,110,116,101,114,95,101,95,55,52,0);
         rewardvideoN = `${parseInt(`${iconuser6}`)}`;
       let moreD = String.fromCharCode(117,95,56,55,95,112,114,101,99,111,109,112,117,116,101,0);
       let ajaxb = String.fromCharCode(115,116,97,98,105,108,105,122,101,95,108,95,57,55,0);
          let n_lockE = true;
         ajaxb += "1";
         n_lockE = !n_lockE;
      let components = 6140016 <= rewardvideoN.length;
      do {
         rewardvideoN = `${ajaxb.length + 3}`;
         if (components) {
            break;
         }
      } while ((4 < (3 - parseInt(`${iconuser6}`)) && 1.33 < (5.11 - iconuser6)) && components);
         templateprocessorr.set(ajaxb, ajaxb.length);
      let cornerT = templateprocessorr.size >= 7649323;
      do {
         templateprocessorr.set(matchactive7, 1);
         if (cornerT) {
            break;
         }
      } while (((3 ^ templateprocessorr.size) > 4 || (moreD.length ^ 3) > 3) && cornerT);
         rewardvideoN = `${ajaxb.length}`;
      if (!rewardvideoN.includes(`${templateprocessorr.size}`)) {
         rewardvideoN = `${rewardvideoN.length & 1}`;
      }
      imagesk += parseFloat(`${jinit_6zF.length + 2}`);
      gdtadvw *= parseFloat(`${parseInt(`${gdtadvw}`) << (Math.min(3, Math.abs(1)))}`);
      if (eactc) {
         break;
      }
   } while (eactc && (imagesk == 4.87));
   for (let l = 0; l < 3; l++) {
      zooml *= 2 & parseInt(`${imagesk}`);
   }

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

      indicatorN /= Math.max(2, release_4xg.size);
   for (let a = 0; a < 3; a++) {
      imagesk += (parseFloat(`${jinit_6zF == String.fromCharCode(65,0) ? jinit_6zF.length : const_cds.length}`));
   }
      relatedo.push(parseInt(`${imagesk}`) & 3);
       let combined7 = false;
         combined7 = combined7 && combined7;
      for (let z = 0; z < 2; z++) {
          let regengb = 4.0;
          let yellowanimationlivei = false;
          let shareU = 2.0;
          let libsentryH = 3.0;
          let regengf = String.fromCharCode(98,95,51,53,95,105,99,119,114,115,105,0);
         combined7 = yellowanimationlivei;
         regengb -= (parseFloat(`${regengf == String.fromCharCode(83,0) ? parseInt(`${regengb}`) : regengf.length}`));
         shareU -= parseFloat(`${2}`);
         libsentryH *= parseInt(`${libsentryH}`) * 3;
      }
      while (!combined7) {
         combined7 = combined7 || !combined7;
         break;
      }
      jinit_6zF = "2";
       let turndownF = 1.0;
          let episodeC = false;
          let short_42 = String.fromCharCode(117,116,117,114,101,95,49,95,55,52,0);
         turndownF -= parseInt(`${turndownF}`);
         episodeC = short_42.length < 29 || !episodeC;
         short_42 += `${((episodeC ? 4 : 2) ^ 1)}`;
      let iconfeedback5 = turndownF >= 8759250.0;
      do {
          let pathr = 3.0;
          let release_92 = 4.0;
          let sportsC = true;
         turndownF -= ((sportsC ? 2 : 1) & parseInt(`${release_92}`));
         pathr += 3 * parseInt(`${pathr}`);
         release_92 -= parseFloat(`${parseInt(`${pathr}`) | 3}`);
         if (iconfeedback5) {
            break;
         }
      } while (iconfeedback5 && (4.87 <= (turndownF / 4.16) || 3.39 <= (turndownF / 4.16)));
      let mbjscommonl = 5500691.0 <= turndownF;
      do {
         turndownF /= Math.max(parseInt(`${turndownF}`) + parseInt(`${turndownF}`), 2);
         if (mbjscommonl) {
            break;
         }
      } while (((turndownF * 2.87) <= 4.23 && 3.37 <= (2.87 * turndownF)) && mbjscommonl);
      bodanp = release_4xg.size < 5;
      dragN += `${runtimeschedulerE}`;
      indicatorN += relatedo.length;
      const newState = getState().downloadVideoReducer

       let graphO = String.fromCharCode(98,95,55,50,95,112,114,111,108,111,110,103,0);
       let unfillf = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,122,95,56,52,0);
       let leakchecker5 = 2;
         graphO = `${unfillf.length ^ graphO.length}`;
          let searchbaro = String.fromCharCode(122,95,52,51,95,99,104,117,110,107,101,100,0);
         leakchecker5 >>= Math.min(4, Math.abs(3));
         searchbaro += `${searchbaro.length >> (Math.min(Math.abs(1), 5))}`;
       let greyticka = true;
         leakchecker5 += (String.fromCharCode(71,0) == unfillf ? leakchecker5 : unfillf.length);
         greyticka = (graphO.length / (Math.max(5, unfillf.length))) > 95;
      while ((leakchecker5 ^ unfillf.length) <= 5 && (unfillf.length ^ 5) <= 1) {
         leakchecker5 /= Math.max(3, (unfillf == String.fromCharCode(88,0) ? graphO.length : unfillf.length));
         break;
      }
         leakchecker5 *= unfillf.length;
      while (graphO.length == unfillf.length) {
          let fastf = String.fromCharCode(99,97,116,99,104,105,110,103,95,107,95,48,0);
          let dropdown3: Map<any, any> = new Map([[String.fromCharCode(118,97,100,100,113,95,106,95,53,53,0),319], [String.fromCharCode(107,101,121,101,100,95,57,95,51,57,0),217], [String.fromCharCode(119,95,56,56,95,114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),908]]);
          let hook8 = String.fromCharCode(115,119,105,116,99,104,105,110,103,95,102,95,56,53,0);
         graphO = `${(unfillf == String.fromCharCode(116,0) ? unfillf.length : leakchecker5)}`;
         fastf = `${(String.fromCharCode(72,0) == hook8 ? hook8.length : fastf.length)}`;
         dropdown3 = new Map([[`${dropdown3.size}`, fastf.length + dropdown3.size]]);
         break;
      }
      let filedb = graphO == String.fromCharCode(56,108,98,53,98,122,57,112,0);
      do {
         graphO += `${graphO.length + 1}`;
         if (filedb) {
            break;
         }
      } while (filedb && (graphO.length > leakchecker5));
      zooml -= xadsdkN | 1;
   if (dragN.length > parseInt(`${indicatorN}`)) {
       let libglogZ = String.fromCharCode(117,95,50,53,95,97,115,112,101,99,116,115,0);
       let shrinkq = String.fromCharCode(122,95,50,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0);
         libglogZ += `${2 >> (Math.min(5, shrinkq.length))}`;
      if (shrinkq.endsWith(libglogZ)) {
         libglogZ += `${shrinkq.length / 2}`;
      }
          let libffmpegkitC = 3;
          let active2 = 3.0;
         libglogZ = `${libffmpegkitC}`;
         libffmpegkitC <<= Math.min(Math.abs(3 << (Math.min(Math.abs(parseInt(`${active2}`)), 3))), 1);
         active2 /= Math.max(4, 1 | parseInt(`${active2}`));
         shrinkq += `${1 + libglogZ.length}`;
          let dicer: Array<any> = [474, 776, 296];
          let loginsuccessW = String.fromCharCode(109,97,120,105,109,105,122,101,100,95,119,95,53,49,0);
         shrinkq += `${libglogZ.length * 3}`;
         dicer.push(dicer.length);
         loginsuccessW = `${dicer.length}`;
         shrinkq = `${libglogZ.length & 3}`;
      dragN += `${libglogZ.length & castr.size}`;
   }
       let assistt = 5;
       let predictionarrowN = String.fromCharCode(108,104,115,95,98,95,57,52,0);
          let backgroundG = 1.0;
          let colorsy = String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,49,95,57,48,0);
          let libsgcoreH = 0.0;
         assistt *= predictionarrowN.length;
         backgroundG -= 3;
         colorsy += `${(colorsy == String.fromCharCode(54,0) ? parseInt(`${backgroundG}`) : colorsy.length)}`;
         libsgcoreH += parseInt(`${libsgcoreH}`) | parseInt(`${backgroundG}`);
      if (4 < (assistt | predictionarrowN.length)) {
         assistt -= 1;
      }
          let videocommond = 5;
          let eighteenf: Array<any> = [506, 135, 475];
         assistt -= videocommond;
         videocommond += eighteenf.length ^ eighteenf.length;
      let mountingR = 9039303 <= assistt;
      do {
          let catagory2 = 0.0;
          let expiredn: Map<any, any> = new Map([[String.fromCharCode(112,95,51,56,95,98,105,116,120,0),String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,115,95,55,54,0)], [String.fromCharCode(102,95,56,54,95,97,117,116,111,114,101,115,105,122,105,110,103,0),String.fromCharCode(120,95,55,53,95,97,117,120,105,108,105,97,114,121,0)]]);
          let emptyw = 4.0;
          let awayteamfieldu = 0.0;
         assistt *= parseInt(`${catagory2}`) % 3;
         catagory2 += parseInt(`${emptyw}`) & parseInt(`${awayteamfieldu}`);
         expiredn.set(`${emptyw}`, 3 >> (Math.min(Math.abs(parseInt(`${awayteamfieldu}`)), 3)));
         if (mountingR) {
            break;
         }
      } while (mountingR && (assistt >= 5));
      for (let i = 0; i < 3; i++) {
          let hejiz = false;
          let formh = 0;
         assistt |= formh;
         hejiz = !hejiz;
      }
      for (let x = 0; x < 3; x++) {
         assistt >>= Math.min(1, Math.abs((predictionarrowN == String.fromCharCode(109,0) ? assistt : predictionarrowN.length)));
      }
      zooml *= runtimeschedulerE + parseInt(`${zooml}`);
   let assist0 = bodanp ? !bodanp : bodanp;
   do {
      bodanp = relatedo.length == 87;
      if (assist0) {
         break;
      }
   } while ((4.62 < (imagesk / 3.47) || imagesk < 3.47) && assist0);
       let renderL = 3.0;
       let darka = 4;
         darka -= darka;
          let contextt = 1.0;
          let tinit_eb = 5;
         renderL *= parseFloat(`${parseInt(`${renderL}`) ^ 2}`);
         contextt /= Math.max(2, parseFloat(`${parseInt(`${contextt}`) / 1}`));
         tinit_eb += tinit_eb << (Math.min(Math.abs(parseInt(`${contextt}`)), 5));
         darka ^= 2 - parseInt(`${renderL}`);
       let videocommonP = 1.0;
       let tickV = 1.0;
      if ((2.58 * videocommonP) > 3.23) {
         videocommonP *= parseFloat(`${darka - parseInt(`${renderL}`)}`);
      }
         renderL *= parseFloat(`${1 ^ parseInt(`${renderL}`)}`);
      castr.set(const_cds, 1 << (Math.min(1, Math.abs(xadsdkN))));
   if (!Array.from(castr.keys()).includes(`${xadsdkN}`)) {
      xadsdkN >>= Math.min(Math.abs((dragN == String.fromCharCode(100,0) ? jinit_6zF.length : dragN.length)), 2);
   }
   if (!bodanp) {
       let circle6 = 4.0;
       let userL: Array<any> = [207, 661, 560];
       let less5 = 2;
      let righty = less5 <= 8369369;
      do {
         less5 += userL.length | 3;
         if (righty) {
            break;
         }
      } while (((less5 ^ userL.length) == 4) && righty);
      if (userL.length == 1) {
         userL.push(userL.length * parseInt(`${circle6}`));
      }
      if (1 >= (4 % (Math.max(1, userL.length))) || 4 >= (userL.length * parseInt(`${circle6}`))) {
         userL = [less5 << (Math.min(4, Math.abs(1)))];
      }
      while (!userL.includes(circle6)) {
         circle6 += less5 >> (Math.min(3, Math.abs(2)));
         break;
      }
      for (let t = 0; t < 1; t++) {
         userL.push(3);
      }
      bodanp = (relatedo.length | xadsdkN) >= 79;
   }
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
      
    }

    const handleError = () => {
       let playlistZ = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,95,98,95,50,0);
    let flipperI = 2.0;
    let trophyu = 5.0;
    let yellowE = 2.0;
    let formo: Array<any> = [965, 418, 915];
    let chatZ = String.fromCharCode(112,97,114,101,110,116,115,95,103,95,55,54,0);
    let backwardG = String.fromCharCode(101,120,97,99,116,95,116,95,55,55,0);
    let iconmoreK = 5;
    let whatsappV = String.fromCharCode(98,95,53,54,95,98,102,114,97,99,116,105,111,110,0);
    let whatsappK = false;
    let feedbacks = String.fromCharCode(114,101,108,97,121,101,100,95,53,95,54,0);
       let themeC = 5;
       let predictionwina = true;
       let episodess: Array<any> = [942, 6];
      if (themeC <= 1) {
         predictionwina = 54 < themeC;
      }
      if (!episodess.includes(themeC)) {
         themeC |= 3;
      }
          let nativee = String.fromCharCode(109,95,57,52,95,115,98,105,116,115,0);
          let bgvipxvodo = false;
          let nterstitialg = String.fromCharCode(117,95,52,52,95,100,105,97,103,0);
         themeC *= (nativee.length << (Math.min(4, Math.abs((bgvipxvodo ? 2 : 4)))));
         nativee += `${(nterstitialg == String.fromCharCode(117,0) ? nterstitialg.length : nterstitialg.length)}`;
         bgvipxvodo = (nterstitialg.length | nterstitialg.length) == 85;
          let half_ = 0.0;
          let linef: Map<any, any> = new Map([[String.fromCharCode(97,95,56,53,95,114,101,115,105,100,117,101,115,0),346], [String.fromCharCode(114,101,116,114,121,97,98,108,101,95,103,95,53,57,0),428], [String.fromCharCode(101,95,54,49,95,105,115,97,99,102,105,120,0),375]]);
          let zhubo4: Map<any, any> = new Map([[String.fromCharCode(97,95,49,53,95,99,111,110,118,111,108,117,116,101,0),433], [String.fromCharCode(104,97,114,112,101,110,95,55,95,54,56,0),338]]);
         episodess = [zhubo4.size | linef.size];
         half_ -= parseFloat(`${parseInt(`${half_}`) / (Math.max(6, parseInt(`${half_}`)))}`);
         linef.set(`${half_}`, parseInt(`${half_}`));
         predictionwina = episodess.length == themeC;
       let middlebrightnessp = 1.0;
       let membershipR = 0.0;
      while ((3 | themeC) > 3 && 5 > (3 | episodess.length)) {
         episodess.push(1);
         break;
      }
      let annerF = episodess.length <= 4943218;
      do {
          let mapbufferb = 4.0;
          let casti = 4.0;
          let referrerG = String.fromCharCode(105,95,52,0);
          let gemfilel = 4.0;
         episodess.push(3 << (Math.min(Math.abs(parseInt(`${membershipR}`)), 2)));
         mapbufferb *= parseInt(`${gemfilel}`);
         casti *= parseInt(`${gemfilel}`);
         referrerG += "1";
         if (annerF) {
            break;
         }
      } while ((!episodess.includes(middlebrightnessp)) && annerF);
      let weiboc = 7015792.0 <= middlebrightnessp;
      do {
          let targetI = true;
          let componentb = String.fromCharCode(119,95,53,56,95,99,97,108,99,117,108,97,116,101,0);
          let short_qn = 5;
         middlebrightnessp -= episodess.length;
         targetI = componentb.includes(`${short_qn}`);
         componentb += `${short_qn}`;
         if (weiboc) {
            break;
         }
      } while ((middlebrightnessp >= 3.88) && weiboc);
      backwardG += `${((predictionwina ? 2 : 4) % (Math.max(5, parseInt(`${yellowE}`))))}`;
       let eyeopenJ = String.fromCharCode(116,101,108,101,116,101,120,116,95,113,95,53,0);
       let zoomU = 2.0;
       let refreshn = String.fromCharCode(102,101,101,100,95,111,95,51,55,0);
      while ((zoomU * 2.98) < 2.22) {
          let fast9 = String.fromCharCode(105,110,105,116,95,109,95,49,51,0);
          let graphr = 1.0;
          let tick1 = 0;
         eyeopenJ += `${fast9.length / (Math.max(refreshn.length, 8))}`;
         fast9 += `${parseInt(`${graphr}`) << (Math.min(4, Math.abs(tick1)))}`;
         graphr *= 1 * parseInt(`${graphr}`);
         tick1 += parseInt(`${graphr}`) << (Math.min(4, Math.abs(tick1)));
         break;
      }
      if (eyeopenJ == refreshn) {
          let long_gxx: Map<any, any> = new Map([[String.fromCharCode(108,95,49,53,95,100,101,108,105,118,101,114,0),529], [String.fromCharCode(121,95,49,95,115,112,108,105,116,116,105,110,103,0),205], [String.fromCharCode(117,95,57,48,95,112,97,114,97,109,101,116,101,114,0),67]]);
         refreshn += `${1 - eyeopenJ.length}`;
         long_gxx.set(`${long_gxx.size}`, long_gxx.size);
      }
      let defaultroombg1 = refreshn == String.fromCharCode(122,103,108,98,122,110,0);
      do {
         refreshn += `${2 & parseInt(`${zoomU}`)}`;
         if (defaultroombg1) {
            break;
         }
      } while ((5.89 < zoomU) && defaultroombg1);
          let aboutN = String.fromCharCode(97,118,117,116,105,108,95,120,95,57,52,0);
          let teamy = 5.0;
         refreshn += `${parseInt(`${zoomU}`)}`;
         aboutN = `${aboutN.length}`;
         teamy += (parseFloat(`${aboutN == String.fromCharCode(99,0) ? aboutN.length : parseInt(`${teamy}`)}`));
         refreshn += `${refreshn.length}`;
      for (let c = 0; c < 2; c++) {
         eyeopenJ = `${1 << (Math.min(1, Math.abs(parseInt(`${zoomU}`))))}`;
      }
      while (eyeopenJ != refreshn) {
          let iconwechatp = 4.0;
          let iconsaveimageb = String.fromCharCode(121,95,52,95,116,105,109,101,118,97,108,0);
         refreshn = "1";
         iconwechatp /= Math.max(1, iconsaveimageb.length);
         iconsaveimageb = `${iconsaveimageb.length}`;
         break;
      }
          let libreactnativeblobE = String.fromCharCode(103,95,53,55,0);
          let clears = 1.0;
          let attributedstringY = 2.0;
         zoomU *= parseInt(`${clears}`) / 1;
         libreactnativeblobE = `${2 ^ libreactnativeblobE.length}`;
         clears /= Math.max((parseFloat(`${libreactnativeblobE == String.fromCharCode(56,0) ? parseInt(`${attributedstringY}`) : libreactnativeblobE.length}`)), 1);
         attributedstringY /= Math.max(2, parseFloat(`${3 % (Math.max(2, libreactnativeblobE.length))}`));
      let yellowj = String.fromCharCode(56,118,100,117,114,122,122,119,103,0) == eyeopenJ;
      do {
         eyeopenJ += `${1 << (Math.min(2, eyeopenJ.length))}`;
         if (yellowj) {
            break;
         }
      } while ((refreshn != String.fromCharCode(114,0)) && yellowj);
      whatsappK = trophyu >= 16.33;
       let yellowanimationliveQ = String.fromCharCode(116,117,110,110,101,108,105,110,103,95,103,95,57,0);
       let setting3 = String.fromCharCode(117,110,97,114,99,104,105,118,101,95,53,95,57,49,0);
      while (yellowanimationliveQ.length == setting3.length) {
          let verticalE = 5;
          let libjsijniprofilerQ = false;
          let expireds = String.fromCharCode(115,99,101,110,101,95,108,95,54,48,0);
          let goale = 4.0;
          let basketballR = 2.0;
         yellowanimationliveQ = `${(setting3.length & (libjsijniprofilerQ ? 2 : 1))}`;
         verticalE <<= Math.min(Math.abs(1 << (Math.min(Math.abs(parseInt(`${goale}`)), 4))), 2);
         libjsijniprofilerQ = expireds.includes(`${goale}`);
         expireds = `${parseInt(`${basketballR}`)}`;
         break;
      }
      let calendar2 = String.fromCharCode(55,50,56,48,101,115,54,119,108,0) == yellowanimationliveQ;
      do {
         yellowanimationliveQ += `${(String.fromCharCode(98,0) == setting3 ? yellowanimationliveQ.length : setting3.length)}`;
         if (calendar2) {
            break;
         }
      } while ((setting3.length >= 2) && calendar2);
      while (setting3.length == 2 && yellowanimationliveQ != String.fromCharCode(56,0)) {
          let temperaturef: Array<any> = [526, 625];
         setting3 += `${(String.fromCharCode(70,0) == yellowanimationliveQ ? setting3.length : yellowanimationliveQ.length)}`;
         temperaturef.push(2 * temperaturef.length);
         break;
      }
       let jingdong4 = 0;
      let dplusg = String.fromCharCode(110,97,103,97,103,121,118,0) == setting3;
      do {
         setting3 += `${(yellowanimationliveQ == String.fromCharCode(71,0) ? yellowanimationliveQ.length : setting3.length)}`;
         if (dplusg) {
            break;
         }
      } while (dplusg && (setting3.length >= jingdong4));
      if ((1 << (Math.min(3, setting3.length))) == 4) {
          let selectX: Array<any> = [526, 176];
          let clearF = 5.0;
          let release_lgw = String.fromCharCode(100,95,52,53,95,119,111,114,100,108,105,115,116,0);
          let scrollviewu: Array<any> = [87, 406, 445];
          let leakcheckerY = false;
         jingdong4 >>= Math.min(1, release_lgw.length);
         selectX.push(scrollviewu.length << (Math.min(Math.abs(2), 3)));
         clearF /= Math.max(4, parseFloat(`${parseInt(`${clearF}`)}`));
         release_lgw += `${selectX.length >> (Math.min(1, Math.abs(parseInt(`${clearF}`))))}`;
         scrollviewu.push(2 % (Math.max(parseInt(`${clearF}`), 10)));
         leakcheckerY = scrollviewu.length >= 55;
      }
      formo = [parseInt(`${flipperI}`)];

      

   for (let f = 0; f < 2; f++) {
       let dependenciesp = String.fromCharCode(113,95,49,52,0);
       let huawei_ = 1.0;
       let reminderv = 2.0;
       let optionsP = String.fromCharCode(111,117,116,98,111,117,110,100,95,104,95,53,56,0);
          let debugd = 3.0;
          let n_managerA = 1.0;
         huawei_ += parseInt(`${reminderv}`);
         debugd /= Math.max(parseInt(`${n_managerA}`), 1);
         n_managerA *= parseInt(`${debugd}`);
         reminderv /= Math.max(3, parseFloat(`${dependenciesp.length - optionsP.length}`));
      for (let d = 0; d < 3; d++) {
         dependenciesp += "2";
      }
         dependenciesp += `${dependenciesp.length | 1}`;
       let carouselE = 0.0;
       let firebase3 = 2.0;
          let castingF = 5;
         dependenciesp += `${2 >> (Math.min(1, Math.abs(castingF)))}`;
       let headerw: Map<any, any> = new Map([[String.fromCharCode(112,95,50,50,95,117,110,105,118,101,114,115,97,108,0),840], [String.fromCharCode(108,95,50,51,95,112,97,115,115,112,111,114,116,0),235], [String.fromCharCode(101,120,116,115,107,95,49,95,57,56,0),724]]);
       let stepa: Map<any, any> = new Map([[String.fromCharCode(113,117,111,116,105,101,110,116,95,53,95,55,50,0),String.fromCharCode(114,101,97,116,116,97,99,104,95,117,95,53,54,0)], [String.fromCharCode(105,110,118,101,114,115,105,111,110,95,120,95,56,0),String.fromCharCode(110,109,104,100,95,105,95,56,57,0)]]);
         optionsP += `${stepa.size}`;
         optionsP = `${optionsP.length}`;
      let questiconk = reminderv <= 5706629.0;
      do {
         reminderv += parseFloat(`${1 >> (Math.min(2, dependenciesp.length))}`);
         if (questiconk) {
            break;
         }
      } while (questiconk && (4 <= optionsP.length));
      for (let k = 0; k < 1; k++) {
         reminderv *= parseFloat(`${2 | dependenciesp.length}`);
      }
         reminderv *= parseFloat(`${parseInt(`${firebase3}`) & parseInt(`${reminderv}`)}`);
      whatsappV += `${backwardG.length ^ iconmoreK}`;
   }
      whatsappK = playlistZ.includes(`${iconmoreK}`);
   let libjsijniprofiler7 = String.fromCharCode(53,115,48,55,113,99,113,111,49,0) == feedbacks;
   do {
       let libavformatD = String.fromCharCode(119,95,52,95,100,117,112,115,0);
       let logoutz = String.fromCharCode(114,101,100,117,99,101,95,111,95,50,52,0);
       let resultW = 2.0;
      while (logoutz == String.fromCharCode(68,0)) {
          let enewarchdefaultsl = 1.0;
          let bannerZ = String.fromCharCode(102,111,112,101,110,95,49,95,50,57,0);
          let topon0: Map<any, any> = new Map([[String.fromCharCode(116,95,52,57,95,109,97,105,110,0),String.fromCharCode(115,101,108,101,99,116,105,111,110,115,95,56,95,51,53,0)], [String.fromCharCode(100,95,55,48,95,117,115,114,99,0),String.fromCharCode(97,110,110,111,116,97,116,101,95,119,95,57,48,0)]]);
          let kuaishoup = 0;
          let guideE = true;
         libavformatD = `${topon0.size ^ parseInt(`${resultW}`)}`;
         enewarchdefaultsl *= bannerZ.length - parseInt(`${enewarchdefaultsl}`);
         bannerZ = "3";
         topon0 = new Map([[`${enewarchdefaultsl}`, parseInt(`${enewarchdefaultsl}`)]]);
         kuaishoup += 1 >> (Math.min(Math.abs(parseInt(`${enewarchdefaultsl}`)), 5));
         guideE = bannerZ.length < 88 || guideE;
         break;
      }
         resultW += parseFloat(`${logoutz.length}`);
      let holderT = resultW >= 6186723.0;
      do {
         resultW /= Math.max(parseFloat(`${libavformatD.length % (Math.max(10, parseInt(`${resultW}`)))}`), 1);
         if (holderT) {
            break;
         }
      } while (holderT && (2 == (libavformatD.length + parseInt(`${resultW}`)) && (resultW + 2.48) == 1.19));
       let megaphoney = false;
       let listN = false;
          let gestureG = 5.0;
          let trophyA = String.fromCharCode(99,110,116,95,114,95,53,57,0);
          let fastU = 5.0;
         logoutz += `${(3 - (listN ? 4 : 4))}`;
         gestureG -= (trophyA == String.fromCharCode(112,0) ? trophyA.length : parseInt(`${fastU}`));
         fastU /= Math.max(2, 4);
      for (let m = 0; m < 2; m++) {
         listN = resultW > 6.23 && !listN;
      }
         logoutz += `${((megaphoney ? 1 : 4) ^ 2)}`;
      let valuesf = String.fromCharCode(51,52,97,0) == logoutz;
      do {
         logoutz = `${(3 % (Math.max(10, (megaphoney ? 2 : 2))))}`;
         if (valuesf) {
            break;
         }
      } while (valuesf && (libavformatD.length <= logoutz.length));
      for (let w = 0; w < 1; w++) {
         resultW += parseFloat(`${parseInt(`${resultW}`)}`);
      }
      feedbacks += "1";
      if (libjsijniprofiler7) {
         break;
      }
   } while (libjsijniprofiler7 && (!whatsappK));
      const state = getState().downloadVideoReducer

   while (iconmoreK <= 1) {
      iconmoreK -= iconmoreK;
      break;
   }
   while (2 >= backwardG.length) {
      trophyu *= (parseFloat(`${(whatsappK ? 2 : 3)}`));
      break;
   }
   if ((flipperI / (Math.max(backwardG.length, 7))) >= 3.58) {
       let libanep = true;
       let firebaseU: Map<any, any> = new Map([[String.fromCharCode(118,95,49,95,121,97,98,101,0),581], [String.fromCharCode(99,98,108,107,95,51,95,54,56,0),949], [String.fromCharCode(112,97,115,112,95,110,95,57,55,0),286]]);
       let i_player4 = false;
       let styleD = String.fromCharCode(114,101,108,97,121,115,95,55,95,52,53,0);
         styleD += `${firebaseU.size}`;
      for (let v = 0; v < 2; v++) {
         i_player4 = libanep;
      }
       let q_viewu = String.fromCharCode(99,111,109,109,101,110,116,115,95,122,95,49,57,0);
      let filed1 = libanep ? !libanep : libanep;
      do {
         libanep = firebaseU.size < 34 && i_player4;
         if (filed1) {
            break;
         }
      } while ((!libanep) && filed1);
         i_player4 = firebaseU.size == 67;
          let listP = 3.0;
          let gmailr: Array<any> = [821, 429, 363];
         firebaseU.set(`${libanep}`, ((libanep ? 5 : 3) | gmailr.length));
         listP += 1;
         gmailr = [1];
         q_viewu += `${(2 ^ (libanep ? 3 : 5))}`;
       let codegeny = false;
         libanep = q_viewu.includes(`${libanep}`);
      if (i_player4) {
         styleD = `${q_viewu.length}`;
      }
       let backgroundJ = 0.0;
       let disconnectedlogoR = 4.0;
         styleD = `${((libanep ? 5 : 1) >> (Math.min(Math.abs(1), 3)))}`;
      flipperI -= backwardG.length;
   }
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

       let signinupx = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,118,95,53,53,0);
      while (signinupx.length < 5) {
          let heartY = String.fromCharCode(105,110,116,101,114,120,121,95,119,95,50,50,0);
          let hoverN = 1.0;
          let libreacts = String.fromCharCode(100,101,118,112,111,108,108,95,101,95,55,55,0);
         signinupx += `${signinupx.length >> (Math.min(Math.abs(1), 5))}`;
         heartY += `${parseInt(`${hoverN}`)}`;
         hoverN -= heartY.length ^ libreacts.length;
         libreacts += `${parseInt(`${hoverN}`)}`;
         break;
      }
       let downloading8: Map<any, any> = new Map([[String.fromCharCode(112,111,115,115,105,98,108,101,95,106,95,52,56,0),String.fromCharCode(102,114,111,109,98,121,116,101,115,95,109,95,54,48,0)], [String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,95,100,95,50,56,0),String.fromCharCode(98,108,111,99,107,115,105,122,101,95,118,95,52,54,0)], [String.fromCharCode(107,95,51,55,95,112,97,105,114,0),String.fromCharCode(118,95,57,48,95,98,105,116,109,97,112,0)]]);
      for (let w = 0; w < 3; w++) {
         downloading8.set(signinupx, signinupx.length * downloading8.size);
      }
      feedbacks += `${iconmoreK % (Math.max(3, backwardG.length))}`;
      iconmoreK /= Math.max(4, ((whatsappK ? 1 : 2) ^ backwardG.length));
   if (backwardG.startsWith(`${formo.length}`)) {
      formo.push(parseInt(`${yellowE}`));
   }
      if (!targetEpisode) return
      if (targetEpisode?.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni){

      playlistZ = `${((whatsappK ? 1 : 3) % (Math.max(4, iconmoreK)))}`;
       let libimagepipelineT = 4;
       let hnews6 = String.fromCharCode(112,104,111,116,111,115,95,56,95,49,54,0);
       let sourceA: Map<any, any> = new Map([[String.fromCharCode(105,95,52,52,95,102,97,99,101,0),false ], [String.fromCharCode(103,95,52,95,115,97,109,112,108,101,114,0),false ]]);
         sourceA.set(`${hnews6}`, 3 & hnews6.length);
      if ((hnews6.length | sourceA.size) <= 5) {
         hnews6 += `${hnews6.length % 2}`;
      }
      for (let q = 0; q < 1; q++) {
         libimagepipelineT ^= hnews6.length % 1;
      }
      while ((sourceA.size << (Math.min(Math.abs(5), 1))) > 4 && 5 > (5 << (Math.min(4, Math.abs(sourceA.size))))) {
         sourceA.set(`${libimagepipelineT}`, 1);
         break;
      }
      while (!hnews6.includes(`${sourceA.size}`)) {
         sourceA.set(hnews6, 1 << (Math.min(5, Math.abs(sourceA.size))));
         break;
      }
         sourceA.set(hnews6, hnews6.length);
      while (libimagepipelineT >= hnews6.length) {
         hnews6 = `${3 | hnews6.length}`;
         break;
      }
         hnews6 += `${sourceA.size}`;
      for (let p = 0; p < 2; p++) {
         hnews6 = `${hnews6.length >> (Math.min(Math.abs(1), 3))}`;
      }
      chatZ = `${libimagepipelineT % (Math.max(feedbacks.length, 7))}`;
       let hongkongP = 4.0;
       let ksad8: Array<any> = [941, 490, 454];
       let downZ = false;
          let libmapbufferjniy = String.fromCharCode(108,111,119,98,105,116,115,95,49,95,53,55,0);
          let forwardU = 5.0;
          let shirtQ = 4.0;
         hongkongP -= (parseFloat(`${(downZ ? 4 : 1) + ksad8.length}`));
         libmapbufferjniy += `${parseInt(`${forwardU}`) >> (Math.min(Math.abs(parseInt(`${shirtQ}`)), 1))}`;
         forwardU *= libmapbufferjniy.length / (Math.max(1, 7));
         shirtQ /= Math.max(3, 2);
         ksad8 = [parseInt(`${hongkongP}`) - 1];
      while (downZ) {
          let redgoaln: Array<any> = [793, 191, 708];
          let shrinkJ = 5.0;
         ksad8.push(parseInt(`${hongkongP}`));
         redgoaln.push(redgoaln.length);
         shrinkJ *= parseFloat(`${parseInt(`${shrinkJ}`)}`);
         break;
      }
       let footballfieldI = 4.0;
          let nalyticsP = true;
         footballfieldI += ksad8.length;
         nalyticsP = !nalyticsP;
          let saveT = 4.0;
         hongkongP /= Math.max(3, (parseFloat(`${parseInt(`${footballfieldI}`) >> (Math.min(3, Math.abs((downZ ? 1 : 2))))}`)));
         saveT += parseFloat(`${parseInt(`${saveT}`) - parseInt(`${saveT}`)}`);
      let models_ = downZ ? !downZ : downZ;
      do {
         downZ = (parseInt(`${hongkongP}`) - ksad8.length) >= 46;
         if (models_) {
            break;
         }
      } while ((3 >= (1 << (Math.min(1, ksad8.length))) && ksad8.length >= 1) && models_);
      for (let e = 0; e < 2; e++) {
         downZ = !downZ;
      }
       let minivodM = String.fromCharCode(111,95,53,57,95,101,120,112,97,110,100,97,98,108,101,0);
      formo = [iconmoreK];
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: DVGGrayTeamdetailsbg.DVGCurrent
      }))

   let anytimeP = 9201904.0 >= trophyu;
   do {
      trophyu += parseFloat(`${chatZ.length / 2}`);
      if (anytimeP) {
         break;
      }
   } while ((trophyu > flipperI) && anytimeP);
       let middlewareF = false;
       let mbjscommonC = true;
       let bootH: Array<any> = [80, 952];
       let bingV = 4;
          let gesture8 = String.fromCharCode(118,95,54,56,95,109,97,105,110,100,98,0);
          let smallM = 1.0;
          let dplusd = String.fromCharCode(98,95,57,49,95,100,105,109,101,110,115,0);
         bootH.push(((middlewareF ? 2 : 5) & bingV));
         gesture8 += `${2 - dplusd.length}`;
         smallM *= parseFloat(`${parseInt(`${smallM}`)}`);
         dplusd = `${gesture8.length / (Math.max(2, 10))}`;
      let greens = 6668013 <= bootH.length;
      do {
         bootH = [((mbjscommonC ? 4 : 4) >> (Math.min(bootH.length, 1)))];
         if (greens) {
            break;
         }
      } while (greens && (!bootH.includes(bingV)));
         mbjscommonC = !mbjscommonC;
          let subbasketballplayerb: Array<any> = [774, 984, 689];
         middlewareF = 41 > bingV;
         subbasketballplayerb.push(3);
      formo = [playlistZ.length >> (Math.min(Math.abs(1), 2))];
   if (3 > (feedbacks.length * 3)) {
      feedbacks = `${3 / (Math.max(7, parseInt(`${flipperI}`)))}`;
   }


      const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

   for (let q = 0; q < 2; q++) {
      whatsappV = `${2 + formo.length}`;
   }
   for (let b = 0; b < 2; b++) {
      flipperI *= 2 - parseInt(`${flipperI}`);
   }
       let descO = 1.0;
       let sportQ = String.fromCharCode(118,97,114,109,97,115,107,95,52,95,51,54,0);
       let unimplementedviewr = String.fromCharCode(112,105,120,102,109,116,95,113,95,54,53,0);
         sportQ = `${parseInt(`${descO}`) >> (Math.min(sportQ.length, 1))}`;
      for (let d = 0; d < 2; d++) {
         sportQ = `${(unimplementedviewr == String.fromCharCode(50,0) ? parseInt(`${descO}`) : unimplementedviewr.length)}`;
      }
      for (let o = 0; o < 2; o++) {
          let iconshare9 = true;
          let kuaishouk = 5.0;
          let profileinactiven: Map<any, any> = new Map([[String.fromCharCode(114,101,103,100,101,102,95,110,95,50,50,0),946], [String.fromCharCode(113,100,101,108,116,97,95,116,95,53,52,0),606], [String.fromCharCode(116,95,51,95,100,105,118,105,100,105,110,103,0),876]]);
          let mutedH: Map<any, any> = new Map([[String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,100,95,50,55,0),135], [String.fromCharCode(99,114,111,115,115,98,97,114,95,48,95,56,56,0),598], [String.fromCharCode(99,95,57,56,95,115,121,109,109,101,116,114,105,99,0),297]]);
         sportQ = "2";
         iconshare9 = profileinactiven.get(`${kuaishouk}`) == null;
         kuaishouk -= (parseInt(`${kuaishouk}`) << (Math.min(3, Math.abs((iconshare9 ? 5 : 4)))));
         profileinactiven = new Map([[`${mutedH.size}`, (mutedH.size + (iconshare9 ? 3 : 4))]]);
      }
      for (let u = 0; u < 2; u++) {
          let phonea = String.fromCharCode(109,95,50,51,95,109,97,107,101,0);
         descO += parseFloat(`${phonea.length}`);
      }
      if (3 == unimplementedviewr.length) {
         unimplementedviewr = "3";
      }
         sportQ = `${unimplementedviewr.length * 3}`;
          let libavdevice6: Map<any, any> = new Map([[String.fromCharCode(115,100,101,115,95,116,95,49,57,0),String.fromCharCode(114,101,99,111,109,98,105,110,101,95,122,95,52,48,0)], [String.fromCharCode(97,116,104,95,111,95,48,0),String.fromCharCode(101,113,117,97,108,105,122,101,114,95,100,95,51,0)]]);
          let iconz = String.fromCharCode(102,95,57,49,95,115,99,97,110,0);
         descO /= Math.max(3, parseFloat(`${libavdevice6.size}`));
         libavdevice6.set(iconz, iconz.length);
          let main_oK = String.fromCharCode(122,95,54,50,95,102,97,97,110,105,100,99,116,0);
          let networkt = String.fromCharCode(102,95,51,57,95,101,108,101,109,101,110,116,115,0);
          let benefit5 = String.fromCharCode(103,117,101,115,115,95,116,95,52,53,0);
         descO += parseFloat(`${1 >> (Math.min(5, benefit5.length))}`);
         main_oK += `${main_oK.length + 2}`;
         networkt = `${(networkt == String.fromCharCode(100,0) ? main_oK.length : networkt.length)}`;
         benefit5 = `${networkt.length}`;
      let gifgoalf = 8281670.0 <= descO;
      do {
          let editH = 1.0;
          let catagoryq: Map<any, any> = new Map([[String.fromCharCode(104,114,97,109,95,52,95,57,49,0),890], [String.fromCharCode(99,104,101,99,107,115,95,51,95,53,48,0),149], [String.fromCharCode(107,95,53,50,95,103,95,52,51,0),605]]);
         descO -= parseFloat(`${3 & unimplementedviewr.length}`);
         editH /= Math.max(5, parseInt(`${editH}`) | catagoryq.size);
         catagoryq = new Map([[`${catagoryq.size}`, 2]]);
         if (gifgoalf) {
            break;
         }
      } while ((3.9 >= (descO + 1.89)) && gifgoalf);
      feedbacks += "2";
      if (!targetVod) return 
      const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
      RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
      RNFetchBlob.fs.unlink(partialPath).catch(err => {})

      yellowE *= parseFloat(`${1}`);
       let save3: Array<any> = [699, 284];
         save3.push(save3.length);
      for (let o = 0; o < 2; o++) {
          let yellowvideoliveS = 4.0;
         save3.push(save3.length);
         yellowvideoliveS += parseFloat(`${1 % (Math.max(parseInt(`${yellowvideoliveS}`), 1))}`);
      }
         save3.push(1);
      chatZ = "1";
      iconmoreK |= 2;
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode?.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni){
        return 
      }
      concatPartialVideos(
        `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
        ()=>{
          
          
          
          
          
          dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
            status: DVGGrayTeamdetailsbg.DVGRoom, 
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

      if (targetEpisode.status === DVGGrayTeamdetailsbg.DVGUpgradeLibfbjni) { 
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
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
  return async function (dispatch, getState) {
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: DVGGrayTeamdetailsbg.DVGNalyticsTextinput}))
    dispatch(resumeVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function updateAllVodDetailsThunk(): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
  return async function (dispatch, getState) {
    const downloads = getState().downloadVideoReducer.downloads
    downloads.forEach(async (download) => {
      const newVod = await wwIconedit.getDetail(download.vod.vod_id.toString(), download.vod.type_id.toString(), download.vod.vod_source_name, {xMode: download.vodIsAdult})
      dispatch(updateVodDetails(newVod))
    })


  };
}

export function manualKillVideoDownloadThunk(
  vod: wwControl,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, wwEighteenShirt, any, wwMoon> {
  return async function (dispatch, getState) {
    const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode.ffmpegSession === null) return 

      FFmpegKit.cancel(targetEpisode.ffmpegSession)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: DVGGrayTeamdetailsbg.DVGCurrent}))
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      dispatch(resumeFirstVideoDownload())
  }
}