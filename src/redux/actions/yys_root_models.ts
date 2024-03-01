import { yys_ServiceViews, yys_SkipSide } from "@type/yys_basketball";
import { yys_Bing } from "@type/yys_libzeus";
import { concatPartialVideos, downloadVod, downloadVodImage, getUrlOfVod, pauseDownloadVod, resumeDownloadVod } from "../../utils/yys_binddatas_rewardvideo";
import { ThunkAction } from "redux-thunk";
import { MARTextinputBackground, yys_TypeSelection, yys_Xvod, yys_LibsgcorePath } from "@type/yys_fast";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { MAX_CONCURRENT_VIDEO_DOWNLOAD } from "@utility/yys_ajax_switch";
import RNFetchBlob from "rn-fetch-blob";
import { FFmpegKit, FFmpegSession } from "ffmpeg-kit-react-native";
import { throttle } from "lodash";
import { yys_Downloader } from "../../api/yys_zoom_actions";

function addVideoToDownload(vod: yys_Bing, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean): yys_ServiceViews {
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

function updateVideoDownload(vod: yys_Bing, vodSourceId: number, vodUrlNid: number, optional: yys_SkipSide): yys_ServiceViews {
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

function startVideoDownload(vod: yys_Bing, vodSourceId: number, vodUrlNid: number): yys_ServiceViews {
  return {
    type: 'START_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function endVideoDownload(vod: yys_Bing, vodSourceId: number, vodUrlNid: number): yys_ServiceViews {
  return {
    type: 'END_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function addDownloadToQueue(vod: yys_Bing, vodSourceId: number, vodUrlNid: number): yys_ServiceViews {
  return {
    type: 'ADD_DOWNLOAD_TO_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeDownloadFromQueue(vod: yys_Bing, vodSourceId: number, vodUrlNid: number): yys_ServiceViews {
  return {
    type: 'REMOVE_DOWNLOAD_FROM_QUEUE', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

export function removeVideoFromDownload(vod: yys_Bing, vodSourceId: number, vodUrlNid: number): yys_ServiceViews {
  return {
    type: 'REMOVE_VIDEO_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}


export function removeVodFromDownload(vod: yys_Bing, vodSourceId: number, vodUrlNid: number): yys_ServiceViews {
  return {
    type: 'REMOVE_VOD_FROM_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function resetQueue(): yys_ServiceViews {
  return {
    type: "RESET_QUEUE",
    
    payload: null 
  }
}

function pauseVideoDownload(vod: yys_Bing, vodSourceId: number, vodUrlNid: number): yys_ServiceViews {
  return {
    type: 'PAUSE_VIDEO_DOWNLOAD', 
    payload: {
      vod, 
      vodSourceId, 
      vodUrlNid, 
    }
  }
}

function updateVodDetails(vod: yys_Bing): yys_ServiceViews {
  return {
    type: 'UPDATE_VOD_DETAILS', 
    payload: {
      vod, 
      vodSourceId: 0, 
      vodUrlNid: 0, 
    }
  }
}

function startFirstVideoDownload(): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
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

function resumeFirstVideoDownload(): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
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
       let headeri = String.fromCharCode(115,95,50,95,118,102,108,97,103,0);
    let placeholder9 = String.fromCharCode(101,120,112,101,99,116,115,95,111,95,48,0);
    let animationX = 4.0;
    let helpert: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,109,112,101,103,117,116,105,108,115,0),710], [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,119,95,56,57,0),172], [String.fromCharCode(102,111,110,116,95,120,95,56,57,0),162]]);
    let dangerl = 3.0;
    let wcopy_qf = String.fromCharCode(109,95,56,50,95,115,105,110,103,117,108,97,114,0);
    let debugg: Map<any, any> = new Map([[String.fromCharCode(97,95,54,52,95,115,116,97,114,116,0),108], [String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,98,95,51,48,0),93], [String.fromCharCode(103,95,49,53,95,109,97,110,117,97,108,0),990]]);
    let malaysiaN = false;
    let dragR = String.fromCharCode(116,104,117,109,98,115,117,112,95,110,95,51,56,0);
    let bdxadsdkq: Array<any> = [856, 325, 22];
    let sinaA: Map<any, any> = new Map([[String.fromCharCode(108,111,119,99,111,109,112,95,111,95,55,53,0),603], [String.fromCharCode(102,95,49,48,48,95,115,116,114,105,112,101,0),262], [String.fromCharCode(101,120,112,105,114,101,115,95,111,95,55,49,0),726]]);
    let goalq = 4;
    let dialogO = String.fromCharCode(115,117,98,112,101,108,95,48,95,50,51,0);
    let containerQ = 0;
    let libruntimeexecutorE: Map<any, any> = new Map([[String.fromCharCode(101,95,56,57,95,114,101,118,101,114,115,101,100,0),String.fromCharCode(114,97,105,110,95,101,95,50,54,0)], [String.fromCharCode(102,114,101,101,122,101,95,98,95,50,55,0),String.fromCharCode(113,95,53,95,119,97,108,107,105,110,103,0)]]);
   for (let l = 0; l < 2; l++) {
      sinaA = new Map([[`${helpert.size}`, parseInt(`${animationX}`) & 1]]);
   }
   for (let o = 0; o < 3; o++) {
      debugg.set(`${malaysiaN}`, ((malaysiaN ? 1 : 1) >> (Math.min(Math.abs(helpert.size), 1))));
   }
   let package_faP = 6849419 >= debugg.size;
   do {
      debugg.set(`${wcopy_qf}`, 1 / (Math.max(5, wcopy_qf.length)));
      if (package_faP) {
         break;
      }
   } while ((!Array.from(debugg.values()).includes(sinaA.size)) && package_faP);
       let private_ch = 0.0;
       let bodan0 = String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,106,95,57,52,0);
       let hookH = 2.0;
      for (let n = 0; n < 1; n++) {
         bodan0 += `${(bodan0 == String.fromCharCode(81,0) ? parseInt(`${private_ch}`) : bodan0.length)}`;
      }
          let sourcea = true;
          let modalM = 0;
          let package_kV = String.fromCharCode(112,95,55,54,95,99,111,110,110,0);
         hookH /= Math.max(parseFloat(`${bodan0.length}`), 4);
         sourcea = package_kV.startsWith(`${sourcea}`);
         modalM &= package_kV.length;
         private_ch += parseInt(`${hookH}`) + 3;
      for (let b = 0; b < 2; b++) {
         private_ch -= 3;
      }
      if ((1.41 * hookH) < 2.5 || (private_ch * hookH) < 1.41) {
          let carouselh = 4;
          let whitet: Array<any> = [132, 125, 50];
          let philippinesF = 0.0;
         private_ch -= carouselh;
         carouselh ^= whitet.length;
         whitet.push(whitet.length);
         philippinesF /= Math.max(3, 1);
      }
          let activityp: Array<any> = [401, 228, 736];
         bodan0 += `${activityp.length}`;
         hookH += parseFloat(`${1 | parseInt(`${private_ch}`)}`);
         bodan0 += `${(String.fromCharCode(113,0) == bodan0 ? bodan0.length : parseInt(`${hookH}`))}`;
       let mbnativeO = true;
       let libturbomodulejsijniw = false;
      sinaA = new Map([[`${animationX}`, parseInt(`${animationX}`) - 3]]);
       let playlistN: Map<any, any> = new Map([[String.fromCharCode(120,95,54,55,95,106,97,99,111,98,105,0),515], [String.fromCharCode(104,97,115,104,116,97,98,108,101,122,95,120,95,55,0),135]]);
         playlistN = new Map([[`${playlistN.size}`, 1 >> (Math.min(5, Math.abs(playlistN.size)))]]);
      for (let h = 0; h < 1; h++) {
         playlistN = new Map([[`${playlistN.size}`, 2]]);
      }
         playlistN = new Map([[`${playlistN.size}`, playlistN.size - playlistN.size]]);
      debugg = new Map([[`${playlistN.size}`, playlistN.size / (Math.max(2, parseInt(`${animationX}`)))]]);
   for (let z = 0; z < 3; z++) {
      debugg = new Map([[`${helpert.size}`, helpert.size]]);
   }
       let shareS = String.fromCharCode(112,111,107,101,114,95,121,95,57,54,0);
       let gpay1 = String.fromCharCode(98,114,105,103,104,116,110,101,115,115,95,122,95,49,0);
       let lessq: Array<any> = [668, 15, 149];
         shareS += `${lessq.length >> (Math.min(Math.abs(1), 3))}`;
      let libglogX = 9851669 <= lessq.length;
      do {
         lessq.push(shareS.length >> (Math.min(Math.abs(3), 4)));
         if (libglogX) {
            break;
         }
      } while (((1 & gpay1.length) < 2) && libglogX);
         gpay1 = "2";
      while (1 <= (5 + gpay1.length)) {
         lessq = [lessq.length << (Math.min(gpay1.length, 1))];
         break;
      }
      let project6 = gpay1 == String.fromCharCode(114,118,101,117,109,54,101,56,114,121,0);
      do {
          let philippinesY: Array<any> = [178, 453];
         gpay1 += `${(String.fromCharCode(77,0) == shareS ? philippinesY.length : shareS.length)}`;
         if (project6) {
            break;
         }
      } while (project6 && (gpay1 == String.fromCharCode(77,0) || 1 > shareS.length));
      for (let y = 0; y < 2; y++) {
         shareS = "2";
      }
      while (4 <= (2 << (Math.min(2, gpay1.length)))) {
         gpay1 = `${(shareS == String.fromCharCode(72,0) ? gpay1.length : shareS.length)}`;
         break;
      }
      let chartL = String.fromCharCode(118,52,113,49,48,57,99,0) == gpay1;
      do {
          let kickS = 0.0;
          let navigationZ = 1.0;
         gpay1 += `${shareS.length >> (Math.min(1, Math.abs(parseInt(`${kickS}`))))}`;
         kickS += parseInt(`${navigationZ}`);
         if (chartL) {
            break;
         }
      } while ((!gpay1.includes(`${shareS.length}`)) && chartL);
      if (gpay1.length >= 3) {
         lessq = [2 / (Math.max(2, gpay1.length))];
      }
      sinaA.set(gpay1, ((malaysiaN ? 1 : 3)));
   while (malaysiaN || 1 < dragR.length) {
       let carousel0 = String.fromCharCode(116,111,107,101,104,95,114,95,50,53,0);
       let libfollyq = 0.0;
       let style9 = 3;
       let megaphone9 = String.fromCharCode(105,95,55,52,95,101,120,116,109,97,112,0);
      if (megaphone9.includes(`${style9}`)) {
         style9 *= megaphone9.length ^ style9;
      }
         libfollyq += parseFloat(`${2}`);
      while (carousel0.endsWith(`${libfollyq}`)) {
         carousel0 = "1";
         break;
      }
      while (!megaphone9.startsWith(`${libfollyq}`)) {
          let miniv = String.fromCharCode(119,120,109,109,116,101,115,116,95,49,95,57,0);
          let livep = String.fromCharCode(110,116,112,95,52,95,57,48,0);
         megaphone9 += `${carousel0.length >> (Math.min(livep.length, 3))}`;
         miniv += `${miniv.length % (Math.max(3, 4))}`;
         livep += "3";
         break;
      }
      if (megaphone9.length <= 3) {
         style9 <<= Math.min(carousel0.length, 5);
      }
      for (let u = 0; u < 3; u++) {
          let stepw = 5.0;
          let libcxxcomponentsP = 4;
         style9 |= style9;
         stepw -= parseFloat(`${2}`);
         libcxxcomponentsP &= libcxxcomponentsP;
      }
      while (4 == (style9 >> (Math.min(Math.abs(5), 1)))) {
         style9 |= megaphone9.length ^ parseInt(`${libfollyq}`);
         break;
      }
      let episodes0 = 5988329 <= carousel0.length;
      do {
         carousel0 += `${style9}`;
         if (episodes0) {
            break;
         }
      } while ((megaphone9.length == carousel0.length) && episodes0);
         style9 &= carousel0.length | parseInt(`${libfollyq}`);
      for (let q = 0; q < 1; q++) {
         carousel0 = `${carousel0.length >> (Math.min(5, Math.abs(parseInt(`${libfollyq}`))))}`;
      }
      while (4 >= (style9 | megaphone9.length)) {
          let combineC = 5;
          let livec = String.fromCharCode(112,95,54,52,95,118,114,108,101,0);
          let module3 = 4.0;
         style9 ^= 1;
         combineC >>= Math.min(5, Math.abs(combineC - parseInt(`${module3}`)));
         livec = `${parseInt(`${module3}`)}`;
         break;
      }
      if (3 > (4 & megaphone9.length)) {
         style9 += style9;
      }
      dragR += `${bdxadsdkq.length}`;
      break;
   }
   if ((3.82 * dangerl) >= 5.40) {
      headeri += `${parseInt(`${dangerl}`) ^ sinaA.size}`;
   }
   for (let r = 0; r < 2; r++) {
       let mbnativea: Array<any> = [String.fromCharCode(108,105,116,116,108,101,95,117,95,50,50,0), String.fromCharCode(119,95,53,51,95,109,109,99,111,0)];
       let assistH = String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,52,95,55,55,0);
         assistH += `${assistH.length}`;
         mbnativea.push((assistH == String.fromCharCode(111,0) ? assistH.length : mbnativea.length));
         mbnativea = [mbnativea.length | assistH.length];
         assistH = `${mbnativea.length % 1}`;
         mbnativea.push(assistH.length);
         assistH += `${mbnativea.length}`;
      bdxadsdkq.push(((malaysiaN ? 5 : 2) * bdxadsdkq.length));
   }
      sinaA = new Map([[`${dangerl}`, (String.fromCharCode(75,0) == headeri ? headeri.length : parseInt(`${dangerl}`))]]);
   let analyticS = wcopy_qf == String.fromCharCode(107,113,122,108,98,49,114,116,95,110,0);
   do {
      wcopy_qf = `${((malaysiaN ? 1 : 4))}`;
      if (analyticS) {
         break;
      }
   } while (((wcopy_qf.length + 2) >= 5 || 4 >= (wcopy_qf.length + 2)) && analyticS);
   let themeT = headeri.length >= 6074825;
   do {
      headeri = `${parseInt(`${animationX}`) % (Math.max(helpert.size, 6))}`;
      if (themeT) {
         break;
      }
   } while ((headeri.includes(`${debugg.size}`)) && themeT);
   if ((dialogO.length % 3) <= 3 || 1.94 <= (dialogO.length + dangerl)) {
       let untickn = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,97,95,57,55,0);
       let dangerj = String.fromCharCode(105,95,49,56,95,117,110,112,97,99,107,101,100,0);
       let register_aj: Array<any> = [String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,114,95,50,48,0), String.fromCharCode(122,95,51,48,95,115,105,109,105,108,97,114,0)];
       let basketballh: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,117,105,110,116,0),895], [String.fromCharCode(118,101,114,116,105,99,97,108,95,97,95,50,55,0),248]]);
         dangerj += `${untickn.length}`;
          let large0 = String.fromCharCode(104,95,52,49,95,118,111,119,101,108,115,0);
          let singlev = 5;
         dangerj = `${untickn.length - 1}`;
         large0 = `${singlev}`;
         singlev &= large0.length << (Math.min(2, Math.abs(singlev)));
         basketballh = new Map([[`${register_aj.length}`, 3 & register_aj.length]]);
      for (let i = 0; i < 3; i++) {
         dangerj = "2";
      }
      while ((4 - register_aj.length) > 1 && 2 > (dangerj.length - 4)) {
          let plus4 = String.fromCharCode(112,95,52,54,95,108,111,99,107,115,0);
          let placeholderC = String.fromCharCode(116,95,53,50,95,115,116,97,98,105,108,105,116,121,0);
          let notificationM = 0.0;
          let linky = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,117,95,56,52,0);
          let buildf = 2.0;
         register_aj = [linky.length];
         plus4 = `${parseInt(`${notificationM}`)}`;
         placeholderC += `${plus4.length & 1}`;
         linky = `${placeholderC.length}`;
         buildf /= Math.max(parseFloat(`${parseInt(`${notificationM}`)}`), 3);
         break;
      }
         basketballh.set(dangerj, dangerj.length);
          let analyticsj: Array<any> = [623, 131, 885];
          let typingl = String.fromCharCode(103,95,52,55,95,99,111,110,116,97,99,116,0);
          let backx = 0;
         register_aj = [typingl.length % (Math.max(1, 1))];
         analyticsj.push(analyticsj.length << (Math.min(Math.abs(2), 4)));
         typingl = "3";
         backx &= backx ^ analyticsj.length;
         untickn = `${register_aj.length}`;
      for (let g = 0; g < 3; g++) {
         register_aj = [1];
      }
      for (let t = 0; t < 1; t++) {
         untickn += `${dangerj.length}`;
      }
         register_aj.push(untickn.length);
         basketballh = new Map([[dangerj, dangerj.length]]);
      dialogO = `${bdxadsdkq.length + 2}`;
   }
       let sentryK = String.fromCharCode(118,95,54,48,95,98,117,116,116,101,114,119,111,114,116,104,0);
       let specs = 5;
      for (let k = 0; k < 1; k++) {
          let binddatas1 = String.fromCharCode(110,111,110,98,95,101,95,53,57,0);
         sentryK += `${specs}`;
         binddatas1 = `${(binddatas1 == String.fromCharCode(78,0) ? binddatas1.length : binddatas1.length)}`;
      }
      while (sentryK.length >= specs) {
          let pressureo = 1.0;
          let promotionD = String.fromCharCode(98,114,110,103,95,99,95,55,50,0);
          let videojsJ = 3;
          let splashu = String.fromCharCode(100,101,116,97,99,104,101,100,95,104,95,49,48,0);
          let macauX = String.fromCharCode(97,115,112,101,99,116,95,97,95,52,54,0);
         specs /= Math.max(3, 1 | parseInt(`${pressureo}`));
         pressureo /= Math.max(2, videojsJ);
         promotionD = `${(macauX == String.fromCharCode(51,0) ? promotionD.length : macauX.length)}`;
         videojsJ /= Math.max(1 >> (Math.min(5, Math.abs(videojsJ))), 5);
         splashu += `${(splashu == String.fromCharCode(68,0) ? splashu.length : promotionD.length)}`;
         break;
      }
         specs *= 3 % (Math.max(8, sentryK.length));
      for (let h = 0; h < 2; h++) {
         sentryK += `${specs}`;
      }
         specs /= Math.max(2, (sentryK == String.fromCharCode(65,0) ? sentryK.length : specs));
          let brightnessu = 2.0;
          let largeC: Map<any, any> = new Map([[String.fromCharCode(121,95,49,51,95,99,104,97,105,110,105,100,0),171], [String.fromCharCode(97,100,106,117,115,116,101,114,95,109,95,57,55,0),138]]);
         specs *= parseInt(`${brightnessu}`) ^ 3;
         brightnessu += parseFloat(`${largeC.size}`);
         largeC.set(`${largeC.size}`, largeC.size);
      animationX *= parseFloat(`${debugg.size % (Math.max(bdxadsdkq.length, 5))}`);
      bdxadsdkq = [(parseInt(`${animationX}`) ^ (malaysiaN ? 3 : 1))];
      debugg = new Map([[`${helpert.size}`, helpert.size]]);
      dragR = "1";
   for (let r = 0; r < 2; r++) {
      headeri = `${sinaA.size}`;
   }
      dialogO += `${parseInt(`${animationX}`) + sinaA.size}`;
   let spinnerc = malaysiaN ? !malaysiaN : malaysiaN;
   do {
      malaysiaN = (debugg.size ^ dialogO.length) > 28;
      if (spinnerc) {
         break;
      }
   } while (spinnerc && (4 == headeri.length));
      dangerl -= ((malaysiaN ? 2 : 3) << (Math.min(Math.abs(2), 2)));
      bdxadsdkq.push(bdxadsdkq.length);
   if (wcopy_qf.length >= 4) {
      animationX /= Math.max(2, parseFloat(`${dialogO.length / (Math.max(7, parseInt(`${animationX}`)))}`));
   }
       let libcxxcomponentsE = 3.0;
       let modelst = String.fromCharCode(117,110,99,108,105,112,112,101,100,95,99,95,54,54,0);
       let editQ = String.fromCharCode(97,95,49,56,95,99,100,108,109,115,0);
      for (let w = 0; w < 1; w++) {
         editQ += `${parseInt(`${libcxxcomponentsE}`) & modelst.length}`;
      }
         libcxxcomponentsE *= 2 >> (Math.min(1, Math.abs(parseInt(`${libcxxcomponentsE}`))));
      let rncore5 = 8082513 <= modelst.length;
      do {
          let frame_iax = 3.0;
          let gmail6 = String.fromCharCode(98,97,99,107,101,100,95,98,95,56,55,0);
         modelst += `${modelst.length & editQ.length}`;
         frame_iax *= parseInt(`${frame_iax}`);
         gmail6 = `${2 - parseInt(`${frame_iax}`)}`;
         if (rncore5) {
            break;
         }
      } while ((modelst.length <= editQ.length) && rncore5);
      let turnT = 5184310 <= modelst.length;
      do {
         modelst += `${modelst.length * 2}`;
         if (turnT) {
            break;
         }
      } while (((libcxxcomponentsE / 4.48) == 5.48 && 4 == (modelst.length ^ 2)) && turnT);
          let nativemodulew = true;
          let movies_ = 2.0;
         modelst += `${parseInt(`${libcxxcomponentsE}`) ^ modelst.length}`;
         nativemodulew = 10.12 <= movies_;
         movies_ += (parseFloat(`${parseInt(`${movies_}`) + (nativemodulew ? 4 : 2)}`));
      for (let w = 0; w < 1; w++) {
         editQ = "2";
      }
      while (libcxxcomponentsE >= editQ.length) {
         editQ = `${1 + modelst.length}`;
         break;
      }
      while ((editQ.length | 3) == 2) {
         libcxxcomponentsE += modelst.length % (Math.max(1, 1));
         break;
      }
      while (!editQ.includes(modelst)) {
         modelst += `${2 << (Math.min(1, Math.abs(parseInt(`${libcxxcomponentsE}`))))}`;
         break;
      }
      dangerl += sinaA.size / 1;

      dispatch(startVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    } else {
      dispatch(resumeVideoDownloadThunk(vod, firstVod.vodSourceId, firstVod.vodUrlNid, firstVod.vodIsAdult ?? false))
    }
  }
}

function startVideoDownloadThunk(
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
  return async function (dispatch, getState) {
    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === MARTextinputBackground.MARRewardvideoBell){
       let directz = String.fromCharCode(97,102,102,101,99,116,95,53,95,53,54,0);
    let recommendationy: Map<any, any> = new Map([[String.fromCharCode(117,95,54,49,95,108,105,110,101,115,105,122,101,0),730], [String.fromCharCode(122,95,55,52,95,118,105,100,101,111,115,116,114,101,97,109,0),543]]);
    let klevinf = 3.0;
    let stringsR = true;
    let mbnativeW = false;
    let hoverQ = 0;
    let corer = 3;
    let runtimeschedulero = String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,101,95,53,54,0);
    let mutedh: Array<any> = [255, 684, 140];
    let tickM = 3.0;
    let short_qm8 = false;
    let gnewst = 1.0;
    let uimanagerz = String.fromCharCode(99,95,53,51,95,102,105,108,108,105,110,0);
    let activityk = String.fromCharCode(102,114,97,110,100,111,109,95,53,95,53,57,0);
   while ((4 & recommendationy.size) >= 1 && 4 >= recommendationy.size) {
      recommendationy = new Map([[`${hoverQ}`, 2 & directz.length]]);
      break;
   }
   for (let h = 0; h < 1; h++) {
      mbnativeW = runtimeschedulero.length > 35 || stringsR;
   }
      corer ^= mutedh.length;
      directz = `${corer}`;
   let loginU = recommendationy.size >= 6856657;
   do {
      recommendationy.set(`${corer}`, corer | 1);
      if (loginU) {
         break;
      }
   } while (loginU && (5 == recommendationy.size || (recommendationy.size ^ 5) == 5));
   for (let y = 0; y < 1; y++) {
       let edity = String.fromCharCode(98,95,57,56,95,101,120,99,101,101,100,115,0);
       let icon2 = String.fromCharCode(102,95,51,49,95,114,101,118,111,107,101,0);
       let feedbackA = String.fromCharCode(104,95,56,95,97,108,108,111,99,97,116,101,0);
       let brightnesse = 1.0;
         feedbackA += `${parseInt(`${brightnesse}`) - feedbackA.length}`;
       let subsc = 4;
      for (let v = 0; v < 3; v++) {
         brightnesse -= parseFloat(`${1}`);
      }
      let vignetteo = 6352158 >= subsc;
      do {
         subsc *= edity.length << (Math.min(2, Math.abs(subsc)));
         if (vignetteo) {
            break;
         }
      } while (vignetteo && (2 == (feedbackA.length + 4) && (subsc + feedbackA.length) == 4));
         edity += `${icon2.length >> (Math.min(Math.abs(3), 4))}`;
         edity += "2";
       let crownZ = String.fromCharCode(119,95,51,48,95,105,110,115,101,114,116,105,111,110,0);
       let libreactnativeblobL = 3;
       let muteda = 5;
      for (let t = 0; t < 2; t++) {
         crownZ = `${muteda}`;
      }
      if (edity != String.fromCharCode(114,0) && icon2 == String.fromCharCode(108,0)) {
         icon2 += `${crownZ.length}`;
      }
       let enewinterstitialw = String.fromCharCode(110,95,54,57,95,108,97,112,112,101,100,0);
      for (let x = 0; x < 1; x++) {
          let full1 = 3.0;
          let live7 = 4;
          let appsg = String.fromCharCode(102,95,50,51,95,120,102,111,114,109,101,100,0);
          let dropdownN = 2.0;
         crownZ += `${2 & parseInt(`${dropdownN}`)}`;
         full1 -= parseFloat(`${3 * live7}`);
         live7 -= (String.fromCharCode(65,0) == appsg ? appsg.length : live7);
         dropdownN *= appsg.length % 3;
      }
      mutedh = [((stringsR ? 1 : 1))];
   }
   for (let j = 0; j < 3; j++) {
      hoverQ |= 1;
   }
   for (let i = 0; i < 1; i++) {
       let handlerb = 3.0;
       let routerQ: Map<any, any> = new Map([[String.fromCharCode(117,95,49,48,95,114,101,115,105,122,101,0),128], [String.fromCharCode(109,95,49,48,95,115,110,112,114,105,110,116,102,0),754], [String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,116,95,57,57,0),257]]);
       let codegenD = 3.0;
      let episodess = handlerb <= 7246713.0;
      do {
          let xvod3 = 4.0;
          let yellow0 = false;
          let weibon = String.fromCharCode(115,99,101,110,101,99,117,116,95,122,95,50,50,0);
         handlerb += parseInt(`${handlerb}`) >> (Math.min(1, Math.abs(3)));
         xvod3 += 2;
         yellow0 = weibon == String.fromCharCode(90,0) && 54.19 <= xvod3;
         weibon += `${((yellow0 ? 5 : 1) / (Math.max(9, parseInt(`${xvod3}`))))}`;
         if (episodess) {
            break;
         }
      } while ((handlerb <= codegenD) && episodess);
      for (let r = 0; r < 2; r++) {
         codegenD *= parseFloat(`${3 + routerQ.size}`);
      }
         routerQ.set(`${handlerb}`, parseInt(`${handlerb}`) >> (Math.min(Math.abs(routerQ.size), 5)));
      let placementX = handlerb <= 5186104.0;
      do {
         handlerb /= Math.max(2, parseInt(`${codegenD}`));
         if (placementX) {
            break;
         }
      } while (placementX && (2.56 < (handlerb - 4.22) && 2.85 < (handlerb - 4.22)));
       let helper4 = String.fromCharCode(97,95,57,95,118,109,97,102,0);
       let selectionm = String.fromCharCode(116,95,49,53,95,97,114,101,97,0);
      if (helper4.startsWith(`${handlerb}`)) {
          let transferm = String.fromCharCode(122,95,50,50,95,109,111,100,112,108,117,103,0);
          let rewardvideoH = true;
          let serviceR: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,95,119,95,49,56,0),String.fromCharCode(109,105,110,105,109,105,122,101,100,95,122,95,53,54,0)], [String.fromCharCode(119,95,55,57,95,97,99,116,111,114,0),String.fromCharCode(122,95,54,51,95,110,112,112,116,114,97,110,115,112,111,115,101,0)], [String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,109,95,49,48,0),String.fromCharCode(115,101,108,101,99,116,101,100,95,122,95,53,55,0)]]);
          let mounting9 = String.fromCharCode(99,95,51,48,95,115,116,117,102,102,105,110,103,0);
          let libglogT: Array<any> = [698, 983];
         handlerb /= Math.max(5, 3);
         transferm += `${3 << (Math.min(3, libglogT.length))}`;
         rewardvideoH = mounting9.length < 5 && serviceR.size < 5;
         serviceR = new Map([[`${serviceR.size}`, serviceR.size + mounting9.length]]);
         libglogT.push(serviceR.size | 1);
      }
          let overV = 4;
          let animationsD = false;
          let libreactperfloggerjni0: Map<any, any> = new Map([[String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,119,95,55,55,0),false ], [String.fromCharCode(103,95,57,57,95,115,101,112,97,114,97,116,101,115,0),false ], [String.fromCharCode(99,104,111,111,115,101,114,95,53,95,52,51,0),false ]]);
         selectionm = `${parseInt(`${handlerb}`)}`;
         overV /= Math.max(libreactperfloggerjni0.size, 5);
         animationsD = libreactperfloggerjni0.size > 29 || !animationsD;
      if ((2 >> (Math.min(4, Math.abs(routerQ.size)))) <= 2) {
         routerQ.set(`${handlerb}`, parseInt(`${handlerb}`));
      }
         selectionm = `${3 & helper4.length}`;
      recommendationy.set(directz, parseInt(`${tickM}`));
   }
       let userk = String.fromCharCode(102,116,118,99,108,95,52,95,53,55,0);
       let siden = String.fromCharCode(99,108,97,110,103,95,122,95,49,50,0);
       let fastT = 1.0;
         siden += `${(String.fromCharCode(122,0) == siden ? parseInt(`${fastT}`) : siden.length)}`;
      for (let f = 0; f < 2; f++) {
         fastT -= parseFloat(`${siden.length}`);
      }
      if (siden.length <= 4) {
          let final_kZ: Map<any, any> = new Map([[String.fromCharCode(101,95,51,49,95,109,101,115,111,110,0),733], [String.fromCharCode(115,117,109,100,95,56,95,55,50,0),668]]);
          let vietnam8 = String.fromCharCode(116,101,115,116,111,114,105,103,95,97,95,54,50,0);
          let routern: Array<any> = [String.fromCharCode(117,112,108,111,97,100,95,115,95,51,57,0), String.fromCharCode(115,108,105,99,101,97,110,103,108,101,95,121,95,52,0), String.fromCharCode(114,95,49,55,95,113,101,120,112,110,101,103,0)];
          let libflipper5 = String.fromCharCode(106,95,49,57,95,105,110,102,105,110,105,116,101,0);
          let goal2 = 5.0;
         userk += "2";
         final_kZ = new Map([[`${final_kZ.size}`, 1 + final_kZ.size]]);
         vietnam8 += `${(libflipper5 == String.fromCharCode(87,0) ? parseInt(`${goal2}`) : libflipper5.length)}`;
         routern.push(3);
         goal2 *= 3 << (Math.min(3, libflipper5.length));
      }
       let libtanh = String.fromCharCode(102,95,55,50,95,114,101,102,99,111,117,110,116,0);
       let pageJ = String.fromCharCode(102,117,100,103,101,95,108,95,49,56,0);
       let half3 = 2.0;
       let popupI = 5.0;
          let pageh: Map<any, any> = new Map([[String.fromCharCode(100,101,114,105,118,97,116,105,118,101,95,50,95,54,54,0),String.fromCharCode(116,104,97,119,95,118,95,57,55,0)], [String.fromCharCode(103,114,97,110,117,108,97,114,105,116,121,95,51,95,55,49,0),String.fromCharCode(115,112,97,109,95,50,95,51,53,0)], [String.fromCharCode(112,95,56,48,95,110,117,109,101,114,97,108,115,0),String.fromCharCode(102,95,49,53,95,97,118,102,111,114,109,97,116,114,101,115,0)]]);
         siden = `${1 & siden.length}`;
         pageh.set(`${pageh.size}`, pageh.size);
      for (let u = 0; u < 1; u++) {
          let internetZ = 1.0;
          let delegate_8R = String.fromCharCode(112,95,57,49,95,109,111,100,101,109,118,99,111,115,116,0);
          let upgradeS = false;
         popupI += 1 * parseInt(`${popupI}`);
         internetZ /= Math.max(parseFloat(`${delegate_8R.length | 3}`), 4);
         delegate_8R += `${1 >> (Math.min(1, delegate_8R.length))}`;
         upgradeS = delegate_8R.length < 86;
      }
      for (let e = 0; e < 3; e++) {
         siden = `${userk.length - 2}`;
      }
          let setting4: Array<any> = [563, 608];
         half3 -= parseInt(`${half3}`);
         setting4 = [setting4.length];
      runtimeschedulero += `${((short_qm8 ? 4 : 1) % (Math.max(parseInt(`${tickM}`), 9)))}`;
      gnewst *= parseFloat(`${2}`);

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
       let utilsV = String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,56,95,49,53,0);
    let libreactperfloggerjniP: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,119,95,52,50,0),671], [String.fromCharCode(118,95,57,56,95,105,110,115,101,114,116,105,111,110,0),593]]);
    let lightX = String.fromCharCode(101,121,101,100,114,111,112,112,101,114,95,55,95,55,0);
    let reducer8: Array<any> = [506, 73, 393];
    let holderQ = String.fromCharCode(102,95,52,55,95,103,115,117,98,0);
    let libflipper4 = 0.0;
    let main_vq = String.fromCharCode(104,95,55,53,95,100,101,112,114,101,99,105,97,116,101,100,104,0);
    let sinaf = false;
    let fadfdeebbbfdabbbabdadfaaddaaj = String.fromCharCode(114,95,51,52,95,99,111,100,101,0);
    let windc = false;
    let libsgcore1 = 4.0;
    let vnewsu: Map<any, any> = new Map([[String.fromCharCode(115,95,52,95,105,116,101,114,97,116,105,118,101,0),String.fromCharCode(97,116,99,104,95,114,95,53,49,0)], [String.fromCharCode(115,95,50,49,95,117,110,105,110,105,116,0),String.fromCharCode(106,95,51,55,95,109,101,97,115,117,114,101,109,101,110,116,0)]]);
    let progressH: Map<any, any> = new Map([[String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,95,120,95,51,0),825], [String.fromCharCode(103,108,111,98,97,108,115,95,99,95,55,49,0),16]]);
   for (let e = 0; e < 3; e++) {
      sinaf = sinaf || 5.22 < libflipper4;
   }
   while (1.29 == (1.21 - libflipper4)) {
      main_vq += `${parseInt(`${libsgcore1}`)}`;
      break;
   }
   for (let g = 0; g < 3; g++) {
      libreactperfloggerjniP.set(`${libflipper4}`, 2);
   }
      holderQ += `${((windc ? 4 : 3) ^ 3)}`;
   while (fadfdeebbbfdabbbabdadfaaddaaj.length <= 5) {
       let textlayoutmanagerQ = String.fromCharCode(113,95,56,50,95,100,105,115,112,111,115,101,0);
       let yellow2 = 3.0;
      while ((parseInt(`${yellow2}`) - textlayoutmanagerQ.length) < 1 || (yellow2 - 4.91) < 3.43) {
         yellow2 *= parseInt(`${yellow2}`);
         break;
      }
         textlayoutmanagerQ = `${parseInt(`${yellow2}`) / (Math.max(textlayoutmanagerQ.length, 9))}`;
      let friendsr = textlayoutmanagerQ.length >= 5430354;
      do {
         textlayoutmanagerQ = `${parseInt(`${yellow2}`) << (Math.min(Math.abs(3), 1))}`;
         if (friendsr) {
            break;
         }
      } while (((textlayoutmanagerQ.length << (Math.min(Math.abs(2), 4))) < 2) && friendsr);
         textlayoutmanagerQ += `${parseInt(`${yellow2}`)}`;
       let main_s8 = String.fromCharCode(114,119,110,100,95,97,95,51,51,0);
         yellow2 *= 1;
      fadfdeebbbfdabbbabdadfaaddaaj = "3";
      break;
   }
   while ((5 << (Math.min(3, Math.abs(libreactperfloggerjniP.size)))) < 5 && (libreactperfloggerjniP.size / (Math.max(2, parseInt(`${libsgcore1}`)))) < 5) {
      libreactperfloggerjniP = new Map([[`${libreactperfloggerjniP.size}`, libreactperfloggerjniP.size]]);
      break;
   }
   if ((parseInt(`${libflipper4}`) - holderQ.length) < 2) {
       let screenV = String.fromCharCode(99,111,110,116,101,120,116,115,95,114,95,55,49,0);
       let mintegralk: Array<any> = [300, 740, 617];
       let chat4 = 3.0;
       let connectiona = String.fromCharCode(115,95,52,49,95,112,97,103,0);
         connectiona += `${3 | mintegralk.length}`;
          let eactm = false;
          let incidentS: Array<any> = [539, 334, 580];
          let libreactnativejni5 = 3;
         chat4 -= parseFloat(`${2 - connectiona.length}`);
         eactm = incidentS.length >= 92;
         incidentS.push(incidentS.length >> (Math.min(1, Math.abs(libreactnativejni5))));
         libreactnativejni5 %= Math.max(2, libreactnativejni5);
      while (screenV.length < parseInt(`${chat4}`)) {
         screenV = `${screenV.length}`;
         break;
      }
      if (4 < (mintegralk.length / (Math.max(4, parseInt(`${chat4}`)))) || 2 < (4 & mintegralk.length)) {
         mintegralk.push(parseInt(`${chat4}`) - 2);
      }
          let pathO: Array<any> = [735, 835];
         mintegralk.push(parseInt(`${chat4}`) | 3);
         pathO = [3];
         chat4 /= Math.max(parseFloat(`${1}`), 4);
         mintegralk.push(mintegralk.length ^ 1);
      if ((5 << (Math.min(3, connectiona.length))) < 4 || 5 < (connectiona.length << (Math.min(1, mintegralk.length)))) {
         mintegralk.push(mintegralk.length + parseInt(`${chat4}`));
      }
         mintegralk.push(mintegralk.length - 2);
         screenV += `${2 | parseInt(`${chat4}`)}`;
       let manifestx = 4.0;
       let plash8 = 1.0;
      for (let g = 0; g < 3; g++) {
          let hookQ = String.fromCharCode(120,95,57,53,95,115,104,111,117,121,97,99,104,111,0);
          let libreactperfloggerjniB = String.fromCharCode(112,114,101,117,112,100,97,116,101,95,100,95,55,49,0);
          let inviteB = 0.0;
          let graphE = String.fromCharCode(103,95,50,56,95,97,108,105,97,115,101,115,0);
         manifestx /= Math.max(3 ^ parseInt(`${manifestx}`), 2);
         hookQ = `${libreactperfloggerjniB.length & graphE.length}`;
         libreactperfloggerjniB = `${(String.fromCharCode(112,0) == libreactperfloggerjniB ? graphE.length : libreactperfloggerjniB.length)}`;
         inviteB *= parseFloat(`${graphE.length << (Math.min(Math.abs(2), 1))}`);
      }
      holderQ = "3";
   }
      utilsV += `${holderQ.length}`;
   if (!holderQ.startsWith(utilsV)) {
      holderQ += `${reducer8.length}`;
   }
   for (let d = 0; d < 1; d++) {
       let shrinkS: Map<any, any> = new Map([[String.fromCharCode(100,111,112,115,95,118,95,52,56,0),356], [String.fromCharCode(103,95,52,51,95,117,110,114,111,108,108,101,100,0),451]]);
       let hiadF = 2;
       let inactivek: Array<any> = [664, 159, 910];
       let langkeyh = 1.0;
       let libzeusc = String.fromCharCode(122,95,53,50,95,115,99,97,110,116,97,98,108,101,115,0);
       let recommendationX = String.fromCharCode(98,95,54,56,95,99,108,97,115,104,0);
      let pressure7 = String.fromCharCode(106,113,48,56,110,116,51,97,105,109,0) == recommendationX;
      do {
         recommendationX = "3";
         if (pressure7) {
            break;
         }
      } while (pressure7 && (recommendationX.startsWith(`${hiadF}`)));
      for (let m = 0; m < 3; m++) {
         inactivek = [libzeusc.length];
      }
         langkeyh += parseFloat(`${libzeusc.length}`);
       let nalyticsE = String.fromCharCode(109,97,120,120,95,50,95,51,53,0);
       let renderj = String.fromCharCode(105,95,55,54,0);
      let libcrashsdkt = langkeyh <= 7178820.0;
      do {
         langkeyh *= parseFloat(`${2 & renderj.length}`);
         if (libcrashsdkt) {
            break;
         }
      } while (libcrashsdkt && (1 == (inactivek.length * parseInt(`${langkeyh}`)) && 5.96 == (langkeyh * parseFloat(`${inactivek.length}`))));
      let unimplementedviewS = langkeyh >= 5551387.0;
      do {
         langkeyh -= parseFloat(`${parseInt(`${langkeyh}`)}`);
         if (unimplementedviewS) {
            break;
         }
      } while (unimplementedviewS && (!nalyticsE.includes(`${langkeyh}`)));
         recommendationX += "2";
      main_vq = `${((windc ? 3 : 2) % (Math.max(parseInt(`${libflipper4}`), 10)))}`;
      shrinkS.set(`${shrinkS.size}`, shrinkS.size);
      hiadF &= shrinkS.size;
   }

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

      holderQ += `${((windc ? 4 : 1) * parseInt(`${libsgcore1}`))}`;
       let downloadt: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,104,101,97,100,101,114,95,48,95,53,49,0),String.fromCharCode(111,95,55,56,95,115,117,110,112,111,115,0)], [String.fromCharCode(98,105,116,118,101,99,116,111,114,95,49,95,56,48,0),String.fromCharCode(103,95,56,49,95,119,114,105,116,116,101,110,0)], [String.fromCharCode(110,95,51,53,95,103,114,101,97,116,101,114,0),String.fromCharCode(98,105,110,100,95,108,95,57,52,0)]]);
         downloadt = new Map([[`${downloadt.size}`, downloadt.size % 1]]);
      while (downloadt.get(`${downloadt.size}`) != null) {
          let popupk: Map<any, any> = new Map([[String.fromCharCode(99,111,110,97,110,102,105,108,101,95,104,95,51,52,0),true ], [String.fromCharCode(106,95,52,54,95,97,99,100,115,112,0),false ], [String.fromCharCode(115,116,114,110,105,99,109,112,95,118,95,49,53,0),true ]]);
         downloadt = new Map([[`${popupk.size}`, 2]]);
         break;
      }
      for (let g = 0; g < 3; g++) {
         downloadt = new Map([[`${downloadt.size}`, downloadt.size - 3]]);
      }
      vnewsu = new Map([[`${vnewsu.size}`, 3 | vnewsu.size]]);
   if ((4 - fadfdeebbbfdabbbabdadfaaddaaj.length) > 5 || (4 - progressH.size) > 4) {
       let plusz: Map<any, any> = new Map([[String.fromCharCode(107,95,54,53,95,109,101,116,97,100,97,116,97,0),String.fromCharCode(114,111,116,97,116,105,110,103,95,122,95,55,49,0)], [String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,115,95,119,95,56,50,0),String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,118,95,49,54,0)], [String.fromCharCode(118,95,54,48,95,111,117,116,0),String.fromCharCode(117,95,49,51,95,118,112,100,120,0)]]);
       let modulet = true;
       let annerw: Array<any> = [413, 599];
          let forwardp: Map<any, any> = new Map([[String.fromCharCode(118,95,54,55,95,100,114,97,105,110,0),471], [String.fromCharCode(112,107,101,121,95,97,95,54,57,0),312], [String.fromCharCode(97,95,55,56,95,108,111,99,97,108,97,100,100,114,0),43]]);
         annerw.push(plusz.size ^ 1);
         forwardp.set(`${forwardp.size}`, forwardp.size);
      for (let h = 0; h < 1; h++) {
         plusz = new Map([[`${plusz.size}`, plusz.size * annerw.length]]);
      }
         modulet = (plusz.size << (Math.min(4, annerw.length))) > 56;
      let libreactnativeblobA = 4951498 >= annerw.length;
      do {
         annerw = [1];
         if (libreactnativeblobA) {
            break;
         }
      } while (libreactnativeblobA && (2 > annerw.length));
          let viewerH = 1.0;
         plusz.set(`${modulet}`, 1);
         viewerH /= Math.max(parseFloat(`${parseInt(`${viewerH}`)}`), 1);
       let yingj = String.fromCharCode(111,95,57,57,95,121,98,114,105,0);
       let rightT = String.fromCharCode(103,110,117,116,108,115,95,103,95,57,0);
          let projectb = 5;
          let gradleB: Map<any, any> = new Map([[String.fromCharCode(101,95,53,50,95,98,121,116,101,115,0),563], [String.fromCharCode(106,95,51,52,95,98,111,117,110,99,105,110,101,115,115,0),806]]);
         annerw.push(3);
         projectb *= projectb | gradleB.size;
         gradleB.set(`${projectb}`, projectb << (Math.min(Math.abs(1), 3)));
      if (5 >= rightT.length) {
         annerw = [(rightT == String.fromCharCode(49,0) ? rightT.length : plusz.size)];
      }
       let manifestR = 0;
      progressH.set(`${libflipper4}`, (parseInt(`${libflipper4}`) & (sinaf ? 5 : 2)));
   }
   while (fadfdeebbbfdabbbabdadfaaddaaj.includes(`${windc}`)) {
       let darkM = 2;
       let checkboxf = String.fromCharCode(113,95,57,54,95,114,101,99,111,110,0);
       let textinputg = 2.0;
       let liveP = 1;
       let pausej: Array<any> = [654, 799, 612];
          let taiwanX: Array<any> = [782, 79];
          let latnn = 3.0;
         pausej.push(pausej.length & taiwanX.length);
         taiwanX = [parseInt(`${latnn}`)];
      while (textinputg < 1.16) {
         textinputg += 3;
         break;
      }
         liveP -= 2;
       let sorts = 1.0;
       let predictionO = 3.0;
         sorts /= Math.max(5, parseFloat(`${parseInt(`${textinputg}`) - 2}`));
         liveP -= 1;
      if (pausej.includes(liveP)) {
          let whatsappZ: Array<any> = [255, 487, 276];
          let libzeusN = String.fromCharCode(111,95,57,53,95,113,117,97,108,105,102,121,0);
         pausej.push(parseInt(`${sorts}`));
         whatsappZ = [whatsappZ.length];
         libzeusN += `${1 - libzeusN.length}`;
      }
      for (let n = 0; n < 2; n++) {
         checkboxf += `${darkM}`;
      }
         sorts *= parseFloat(`${1 + parseInt(`${sorts}`)}`);
      let arrows = textinputg >= 6387804.0;
      do {
          let sends = String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,105,95,57,57,0);
         textinputg *= pausej.length * parseInt(`${textinputg}`);
         sends = `${sends.length | 3}`;
         if (arrows) {
            break;
         }
      } while ((4 > (darkM << (Math.min(Math.abs(4), 2)))) && arrows);
         predictionO *= parseFloat(`${3 + parseInt(`${textinputg}`)}`);
       let traminin = String.fromCharCode(102,95,55,48,95,115,97,105,122,0);
       let connectionS: Map<any, any> = new Map([[String.fromCharCode(120,95,53,95,99,111,114,114,101,99,116,101,100,0),false ], [String.fromCharCode(104,95,49,56,95,100,101,99,111,114,114,0),true ], [String.fromCharCode(97,100,109,105,110,115,95,102,95,53,56,0),false ]]);
       let libflipper9: Map<any, any> = new Map([[String.fromCharCode(98,95,55,49,0),478], [String.fromCharCode(115,116,111,112,112,105,110,103,95,98,95,49,49,0),926]]);
      let countdownt = pausej.length >= 6335330;
      do {
         pausej = [darkM + traminin.length];
         if (countdownt) {
            break;
         }
      } while (countdownt && (5 > liveP));
      let commentp = checkboxf == String.fromCharCode(105,52,105,57,95,119,0);
      do {
         checkboxf += `${parseInt(`${sorts}`)}`;
         if (commentp) {
            break;
         }
      } while (((connectionS.size << (Math.min(Math.abs(1), 5))) >= 4 && 2 >= (1 << (Math.min(4, Math.abs(connectionS.size))))) && commentp);
      windc = (textinputg / (Math.max(3, vnewsu.size))) >= 38.62;
      break;
   }
   if (5 <= (libreactperfloggerjniP.size << (Math.min(Math.abs(4), 1)))) {
      libsgcore1 += (parseFloat(`${fadfdeebbbfdabbbabdadfaaddaaj == String.fromCharCode(106,0) ? (windc ? 1 : 1) : fadfdeebbbfdabbbabdadfaaddaaj.length}`));
   }
       let subsv = false;
       let libswresamplen = true;
      let executorS = libswresamplen ? !libswresamplen : libswresamplen;
      do {
          let pointC = 5;
         libswresamplen = !subsv || pointC < 9;
         if (executorS) {
            break;
         }
      } while (executorS && (!libswresamplen || !subsv));
      while (!subsv) {
         subsv = (libswresamplen ? !subsv : libswresamplen);
         break;
      }
      for (let b = 0; b < 2; b++) {
          let winda: Map<any, any> = new Map([[String.fromCharCode(103,95,54,53,95,109,98,99,110,116,0),768], [String.fromCharCode(108,95,49,52,95,112,108,105,115,116,0),598]]);
          let mathh = String.fromCharCode(103,101,111,109,95,122,95,53,0);
         libswresamplen = !subsv;
         winda = new Map([[`${winda.size}`, winda.size ^ mathh.length]]);
         mathh = `${winda.size ^ mathh.length}`;
      }
          let context0 = String.fromCharCode(110,95,56,95,100,101,114,105,118,101,100,0);
          let mbsplashO: Map<any, any> = new Map([[String.fromCharCode(103,95,51,53,95,114,116,99,0),674], [String.fromCharCode(104,95,56,55,95,115,97,118,101,0),950]]);
          let pointt: Array<any> = [376, 299];
         subsv = !subsv || pointt.length <= 27;
         context0 = `${(context0 == String.fromCharCode(83,0) ? context0.length : mbsplashO.size)}`;
         mbsplashO.set(`${context0}`, mbsplashO.size / (Math.max(8, context0.length)));
         pointt.push(context0.length * 2);
          let encryptf = String.fromCharCode(99,116,114,120,95,111,95,50,56,0);
          let readX = 4.0;
         libswresamplen = encryptf.length <= 6 || libswresamplen;
         encryptf = `${parseInt(`${readX}`)}`;
      for (let y = 0; y < 1; y++) {
         subsv = !libswresamplen;
      }
      fadfdeebbbfdabbbabdadfaaddaaj = `${main_vq.length * progressH.size}`;
   for (let r = 0; r < 1; r++) {
      lightX += `${vnewsu.size}`;
   }
      holderQ += `${((windc ? 5 : 3) >> (Math.min(Math.abs(parseInt(`${libflipper4}`)), 1)))}`;
      vnewsu = new Map([[`${progressH.size}`, 3 - progressH.size]]);
       let libimagepipeline6 = 1;
      for (let y = 0; y < 3; y++) {
         libimagepipeline6 >>= Math.min(4, Math.abs(libimagepipeline6));
      }
         libimagepipeline6 >>= Math.min(2, Math.abs(libimagepipeline6));
      for (let e = 0; e < 3; e++) {
         libimagepipeline6 &= libimagepipeline6 >> (Math.min(1, Math.abs(libimagepipeline6)));
      }
      reducer8.push(main_vq.length % (Math.max(utilsV.length, 1)));
      const newState = getState().downloadVideoReducer

      reducer8.push(((sinaf ? 1 : 2) % (Math.max(6, holderQ.length))));
   while (3 <= (1 | reducer8.length)) {
      reducer8.push(2);
      break;
   }
   while (holderQ.length <= 5) {
      utilsV = "1";
      break;
   }
   while (2 >= (vnewsu.size - 1)) {
      vnewsu = new Map([[main_vq, (main_vq.length % (Math.max(6, (sinaf ? 2 : 5))))]]);
      break;
   }
       let mapbufferI: Map<any, any> = new Map([[String.fromCharCode(109,97,114,115,104,97,108,95,52,95,51,54,0),509], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,95,54,95,50,53,0),694], [String.fromCharCode(118,115,121,110,99,95,50,95,54,55,0),700]]);
       let playlista: Map<any, any> = new Map([[String.fromCharCode(109,97,103,101,95,115,95,50,48,0),false ], [String.fromCharCode(97,95,51,54,95,108,101,114,112,114,103,98,0),false ]]);
       let spinneri: Map<any, any> = new Map([[String.fromCharCode(103,95,54,54,95,114,101,102,105,110,101,109,101,110,116,0),699], [String.fromCharCode(122,95,49,49,95,112,114,101,118,111,117,115,0),158]]);
         playlista = new Map([[`${spinneri.size}`, playlista.size]]);
      while ((spinneri.size & 4) >= 4 || 4 >= (4 & playlista.size)) {
         playlista.set(`${spinneri.size}`, playlista.size ^ 3);
         break;
      }
          let philippinesB = 0;
          let privacy_ = String.fromCharCode(113,117,97,114,116,122,95,55,95,51,56,0);
          let langkeyH = 4;
         spinneri.set(`${philippinesB}`, philippinesB);
         privacy_ += `${langkeyH}`;
         langkeyH <<= Math.min(privacy_.length, 5);
      if (3 > (4 >> (Math.min(2, Math.abs(playlista.size)))) || 4 > (playlista.size >> (Math.min(Math.abs(4), 2)))) {
         spinneri.set(`${playlista.size}`, spinneri.size);
      }
         spinneri = new Map([[`${spinneri.size}`, spinneri.size | 2]]);
      progressH.set(main_vq, progressH.size << (Math.min(Math.abs(1), 1)));
      mapbufferI = new Map([[`${mapbufferI.size}`, mapbufferI.size]]);
      libreactperfloggerjniP = new Map([[`${progressH.size}`, progressH.size << (Math.min(Math.abs(1), 5))]]);
       let buttonT: Map<any, any> = new Map([[String.fromCharCode(104,95,51,50,95,99,101,110,99,0),502], [String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,102,95,49,49,0),43], [String.fromCharCode(116,95,51,52,95,97,109,101,114,97,0),574]]);
       let episodesT = true;
         buttonT = new Map([[`${buttonT.size}`, 2]]);
      while (!episodesT) {
         buttonT.set(`${episodesT}`, buttonT.size);
         break;
      }
      for (let j = 0; j < 2; j++) {
          let contextc: Map<any, any> = new Map([[String.fromCharCode(100,119,97,114,102,95,104,95,50,0),335], [String.fromCharCode(117,95,51,52,95,98,103,109,99,0),942], [String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,117,95,53,55,0),433]]);
          let ksadS = 5.0;
         buttonT = new Map([[`${buttonT.size}`, contextc.size ^ buttonT.size]]);
         contextc.set(`${ksadS}`, 2 * parseInt(`${ksadS}`));
      }
      if (5 > (5 - buttonT.size)) {
         episodesT = (13 <= ((episodesT ? buttonT.size : 15) - buttonT.size));
      }
      if (episodesT) {
         buttonT = new Map([[`${buttonT.size}`, ((episodesT ? 3 : 5) / (Math.max(2, 2)))]]);
      }
      while (2 > (3 % (Math.max(7, buttonT.size)))) {
         episodesT = buttonT.get(`${episodesT}`) == null;
         break;
      }
      libreactperfloggerjniP = new Map([[fadfdeebbbfdabbbabdadfaaddaaj, (holderQ == String.fromCharCode(111,0) ? holderQ.length : fadfdeebbbfdabbbabdadfaaddaaj.length)]]);
   while (holderQ.startsWith(`${windc}`)) {
      windc = vnewsu.size > parseInt(`${libsgcore1}`);
      break;
   }
   if (utilsV == lightX) {
       let sheeth = String.fromCharCode(101,95,56,56,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
       let scoren = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,95,99,95,56,54,0);
      let baiduq = 7670010 >= sheeth.length;
      do {
         sheeth += `${scoren.length}`;
         if (baiduq) {
            break;
         }
      } while (baiduq && (!scoren.endsWith(sheeth)));
      while (sheeth != String.fromCharCode(57,0)) {
         scoren += `${sheeth.length}`;
         break;
      }
      if (sheeth == String.fromCharCode(102,0)) {
         scoren += `${sheeth.length % (Math.max(scoren.length, 6))}`;
      }
      let countdownc = 9189772 >= sheeth.length;
      do {
         sheeth = `${sheeth.length >> (Math.min(Math.abs(2), 1))}`;
         if (countdownc) {
            break;
         }
      } while ((3 <= sheeth.length) && countdownc);
       let xadsdkH = String.fromCharCode(106,95,55,52,95,119,97,116,99,104,100,111,103,0);
      if (scoren.length == 2) {
          let user4 = false;
         scoren = "2";
         user4 = (!user4 ? user4 : user4);
      }
      lightX = `${((windc ? 5 : 3) + 1)}`;
   }
   if (!fadfdeebbbfdabbbabdadfaaddaaj.includes(`${reducer8.length}`)) {
      fadfdeebbbfdabbbabdadfaaddaaj = `${fadfdeebbbfdabbbabdadfaaddaaj.length}`;
   }
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
    }

    const handleError = () => {
       let eighteeni = 4.0;
    let gdtadvN: Map<any, any> = new Map([[String.fromCharCode(99,95,54,52,95,115,119,97,112,112,101,114,0),997], [String.fromCharCode(103,95,52,50,95,112,116,115,101,115,0),319]]);
    let runtimeW = 5;
    let floatingH = 1.0;
    let typingG: Map<any, any> = new Map([[String.fromCharCode(98,95,52,54,95,110,111,100,101,0),150], [String.fromCharCode(97,95,57,54,95,115,97,102,101,0),154]]);
    let bingU: Array<any> = [660, 474];
    let directH = String.fromCharCode(116,97,115,107,95,101,95,56,53,0);
    let updatess: Array<any> = [958, 655, 909];
    let countdownR = 3.0;
    let bodanP = 4;
       let hongkongn = String.fromCharCode(103,95,53,57,95,115,119,97,112,112,101,114,0);
      for (let r = 0; r < 1; r++) {
         hongkongn = `${(String.fromCharCode(80,0) == hongkongn ? hongkongn.length : hongkongn.length)}`;
      }
         hongkongn += `${(hongkongn == String.fromCharCode(80,0) ? hongkongn.length : hongkongn.length)}`;
      while (hongkongn != String.fromCharCode(81,0)) {
          let libavutil2 = 1.0;
          let customT = 0.0;
          let libfollyo: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,108,105,110,101,95,98,95,57,56,0),String.fromCharCode(101,95,53,49,95,108,117,97,0)], [String.fromCharCode(107,95,51,53,95,102,97,99,116,0),String.fromCharCode(112,101,114,109,117,116,101,95,53,95,52,52,0)]]);
         hongkongn = `${libfollyo.size ^ 2}`;
         libavutil2 += parseFloat(`${2 - parseInt(`${libavutil2}`)}`);
         customT -= parseFloat(`${1 / (Math.max(8, parseInt(`${customT}`)))}`);
         libfollyo.set(`${libavutil2}`, parseInt(`${libavutil2}`) * parseInt(`${customT}`));
         break;
      }
      eighteeni -= parseFloat(`${parseInt(`${floatingH}`) % (Math.max(7, hongkongn.length))}`);
       let playlistI = String.fromCharCode(117,95,50,48,95,116,101,115,116,0);
       let modulev = false;
       let active1 = 2;
         playlistI += "2";
       let light2 = String.fromCharCode(113,95,49,55,95,100,101,99,111,114,97,116,101,0);
      for (let m = 0; m < 3; m++) {
         modulev = 42 <= light2.length;
      }
      for (let k = 0; k < 2; k++) {
          let transferD = 2.0;
          let dragZ = 4.0;
          let unimplementedviewu = 5.0;
         active1 ^= parseInt(`${transferD}`) + 2;
         transferD += parseInt(`${unimplementedviewu}`);
         dragZ /= Math.max(3, parseFloat(`${parseInt(`${unimplementedviewu}`)}`));
      }
      for (let t = 0; t < 2; t++) {
          let mailU = true;
          let store6 = String.fromCharCode(100,95,51,52,95,119,105,116,104,0);
          let robotoY = String.fromCharCode(119,105,116,104,105,110,95,55,95,49,56,0);
          let notification1 = 0.0;
          let containerK = String.fromCharCode(109,111,100,95,114,95,49,50,0);
         playlistI = `${light2.length}`;
         mailU = 31 < robotoY.length;
         store6 += `${(String.fromCharCode(65,0) == store6 ? robotoY.length : store6.length)}`;
         notification1 *= parseFloat(`${1}`);
         containerK = "3";
      }
      for (let k = 0; k < 3; k++) {
         active1 |= (playlistI == String.fromCharCode(113,0) ? playlistI.length : active1);
      }
          let frame_oF = String.fromCharCode(118,95,52,54,95,112,97,112,101,114,115,0);
          let brightnessw = true;
         modulev = playlistI == String.fromCharCode(119,0);
         frame_oF = `${((brightnessw ? 5 : 4) + 1)}`;
         brightnessw = frame_oF.startsWith(`${brightnessw}`);
         modulev = light2.length <= 31 && playlistI.length <= 31;
         modulev = String.fromCharCode(65,0) == light2;
      directH = `${playlistI.length}`;

      console.debug('error downloading ', vod.vod_name)

   if ((runtimeW ^ directH.length) > 3) {
      directH += `${runtimeW}`;
   }
   for (let c = 0; c < 1; c++) {
      runtimeW += 3;
   }
      const state = getState().downloadVideoReducer

   while ((typingG.size % (Math.max(4, 8))) > 5 && 4 > (typingG.size % (Math.max(directH.length, 5)))) {
      directH = "3";
      break;
   }
      floatingH /= Math.max(parseFloat(`${bingU.length}`), 3);
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

   if ((1.89 + eighteeni) >= 3.51 || (eighteeni + floatingH) >= 1.89) {
      floatingH += parseFloat(`${updatess.length | typingG.size}`);
   }
       let utilsw: Array<any> = [986, 441];
       let sinaJ = String.fromCharCode(121,95,57,57,0);
      let wcopy_0o = 9248804 <= sinaJ.length;
      do {
         sinaJ += `${3 - sinaJ.length}`;
         if (wcopy_0o) {
            break;
         }
      } while (wcopy_0o && (1 >= (sinaJ.length / 3) && (3 / (Math.max(8, utilsw.length))) >= 2));
          let profile7 = String.fromCharCode(107,95,52,50,95,122,108,105,98,112,114,105,109,101,0);
          let lang3 = 5;
         sinaJ = `${profile7.length}`;
         profile7 = `${lang3}`;
         sinaJ += `${utilsw.length >> (Math.min(sinaJ.length, 5))}`;
         utilsw.push(utilsw.length);
         sinaJ = `${utilsw.length}`;
          let target8: Array<any> = [173, 784];
         utilsw.push(2);
         target8.push(target8.length << (Math.min(Math.abs(1), 1)));
      eighteeni -= parseFloat(`${runtimeW & 1}`);
      if (!targetEpisode) return 
      if (targetEpisode?.status === MARTextinputBackground.MARInjuryModels){

      floatingH /= Math.max(parseFloat(`${gdtadvN.size ^ 2}`), 4);
      updatess.push(runtimeW);
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: MARTextinputBackground.MARGpayMintegral
      }))

   for (let u = 0; u < 1; u++) {
      bingU = [2];
   }
       let default_mwh = String.fromCharCode(105,95,53,53,95,112,105,101,99,101,119,105,115,101,0);
       let borderlessU = 2.0;
         borderlessU *= parseFloat(`${parseInt(`${borderlessU}`)}`);
      if (borderlessU >= 5.50) {
          let dataV: Array<any> = [923, 377];
          let anythinks: Array<any> = [561, 141, 976];
          let runtimeU = String.fromCharCode(112,97,108,108,101,116,101,95,101,95,55,48,0);
          let temperatureg = String.fromCharCode(98,97,110,100,105,110,103,95,55,95,57,54,0);
         borderlessU -= parseFloat(`${temperatureg.length}`);
         dataV.push(dataV.length / (Math.max(anythinks.length, 7)));
         anythinks = [runtimeU.length];
         runtimeU += `${1 >> (Math.min(5, runtimeU.length))}`;
         temperatureg = `${runtimeU.length}`;
      }
      let mbsplashr = default_mwh == String.fromCharCode(104,119,122,113,51,0);
      do {
          let faviconI = 3.0;
          let philippinesM: Array<any> = [564, 716, 396];
          let librrcG = String.fromCharCode(101,95,51,50,95,120,108,97,98,101,108,119,105,100,116,104,0);
          let score2 = String.fromCharCode(104,95,56,55,95,98,117,105,108,116,0);
          let skipo = 3.0;
         default_mwh = "2";
         faviconI -= parseFloat(`${librrcG.length}`);
         philippinesM = [2 - parseInt(`${skipo}`)];
         librrcG = `${librrcG.length}`;
         score2 = `${parseInt(`${skipo}`) + 2}`;
         if (mbsplashr) {
            break;
         }
      } while (mbsplashr && (!default_mwh.startsWith(`${borderlessU}`)));
          let shareU = String.fromCharCode(117,95,54,50,95,108,97,98,101,108,110,115,0);
          let stored = String.fromCharCode(108,95,54,95,116,114,116,97,98,108,101,0);
          let clearB = 2;
         default_mwh = `${2 + parseInt(`${borderlessU}`)}`;
         shareU = `${clearB ^ 2}`;
         stored = `${stored.length}`;
         clearB *= shareU.length;
         borderlessU -= parseFloat(`${default_mwh.length}`);
          let floatingG = true;
          let roundz = false;
         borderlessU /= Math.max((parseFloat(`${(floatingG ? 5 : 3)}`)), 5);
      floatingH += (parseFloat(`${String.fromCharCode(84,0) == default_mwh ? runtimeW : default_mwh.length}`));

    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

   if (floatingH < 1.38) {
      floatingH *= parseFloat(`${parseInt(`${floatingH}`) - typingG.size}`);
   }
       let w_unlockc = 4.0;
       let projectW = String.fromCharCode(99,95,53,53,95,99,111,110,116,114,97,105,110,116,115,0);
       let vignette8 = String.fromCharCode(97,98,101,108,95,53,95,56,51,0);
      if (projectW.length == 5) {
         vignette8 = "2";
      }
       let videoj = String.fromCharCode(122,95,56,51,95,115,121,110,116,104,101,115,105,122,101,0);
       let servicef = String.fromCharCode(108,95,52,50,95,115,99,104,101,100,117,108,101,114,0);
         videoj = `${3 - projectW.length}`;
      while (parseInt(`${w_unlockc}`) > projectW.length) {
         w_unlockc *= 2 ^ vignette8.length;
         break;
      }
      let taiwanl = String.fromCharCode(105,117,49,0) == projectW;
      do {
         projectW += `${(projectW == String.fromCharCode(99,0) ? projectW.length : servicef.length)}`;
         if (taiwanl) {
            break;
         }
      } while ((!projectW.includes(vignette8)) && taiwanl);
          let mappingq = String.fromCharCode(116,101,115,115,95,104,95,56,52,0);
         servicef += `${parseInt(`${w_unlockc}`) << (Math.min(servicef.length, 5))}`;
         mappingq = `${mappingq.length & mappingq.length}`;
      for (let n = 0; n < 2; n++) {
         projectW += "2";
      }
         w_unlockc += parseInt(`${w_unlockc}`);
         w_unlockc -= videoj.length;
      bingU.push(3 & vignette8.length);
    if (!targetVod) return 
    

   while (!Array.from(typingG.keys()).includes(`${countdownR}`)) {
      countdownR -= parseFloat(`${directH.length + runtimeW}`);
      break;
   }
      bingU.push(typingG.size);
    const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
    RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
    RNFetchBlob.fs.unlink(partialPath).catch(err => {})

   let toponq = 6280580.0 <= eighteeni;
   do {
       let private_6Z = 4.0;
       let reducerO = String.fromCharCode(113,95,56,55,95,112,114,111,103,114,101,115,115,0);
       let buttonE = 1;
       let favoritea = false;
       let valuesX = 0;
         buttonE *= 2;
      while (reducerO.length == 3) {
         reducerO += `${reducerO.length}`;
         break;
      }
      let becomez = reducerO == String.fromCharCode(108,115,122,50,57,52,0);
      do {
          let favicont = String.fromCharCode(99,95,50,50,95,109,117,116,97,116,105,110,103,0);
          let neonI: Map<any, any> = new Map([[String.fromCharCode(117,95,51,55,95,101,120,97,99,116,108,121,0),String.fromCharCode(98,108,117,101,95,57,95,50,50,0)], [String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,105,95,57,54,0),String.fromCharCode(100,95,49,48,48,95,115,111,99,105,97,108,0)], [String.fromCharCode(114,97,103,103,97,98,108,101,95,111,95,56,52,0),String.fromCharCode(99,111,101,102,115,95,109,95,54,50,0)]]);
          let final_46 = String.fromCharCode(103,95,55,48,95,104,105,103,104,119,97,116,101,114,0);
          let overlayW = String.fromCharCode(120,95,50,54,95,116,114,97,110,115,108,97,116,105,111,110,0);
         reducerO = `${buttonE}`;
         favicont += "3";
         neonI = new Map([[final_46, overlayW.length - final_46.length]]);
         overlayW += `${neonI.size % (Math.max(2, 3))}`;
         if (becomez) {
            break;
         }
      } while (becomez && (!reducerO.includes(`${private_6Z}`)));
       let statsj: Array<any> = [String.fromCharCode(97,116,114,97,99,112,108,117,115,95,97,95,53,51,0), String.fromCharCode(115,109,112,116,101,95,118,95,50,49,0), String.fromCharCode(114,95,53,51,95,98,97,107,101,0)];
      for (let i = 0; i < 2; i++) {
         reducerO = `${buttonE}`;
      }
         private_6Z /= Math.max(parseInt(`${private_6Z}`) + 2, 4);
         buttonE >>= Math.min(3, Math.abs(reducerO.length % 2));
         reducerO += "3";
         favoritea = (reducerO.length & statsj.length) > 34;
          let main_xA = false;
         reducerO = "1";
         main_xA = (!main_xA ? !main_xA : !main_xA);
         favoritea = (valuesX + statsj.length) > 11;
         private_6Z += 1 + reducerO.length;
       let nativeexE = 5.0;
       let bingG: Map<any, any> = new Map([[String.fromCharCode(113,95,49,52,95,114,97,110,103,101,0),String.fromCharCode(113,95,53,48,95,99,97,108,101,110,100,97,114,0)], [String.fromCharCode(110,95,55,95,114,101,108,97,116,101,100,0),String.fromCharCode(121,95,55,48,95,98,105,116,101,120,97,99,116,0)], [String.fromCharCode(114,118,100,97,116,97,95,104,95,55,53,0),String.fromCharCode(105,95,57,52,95,97,108,116,101,114,110,97,116,101,0)]]);
          let annerW = String.fromCharCode(115,116,114,110,100,117,112,95,111,95,52,52,0);
          let proxyk = String.fromCharCode(114,95,53,49,95,114,101,103,105,115,116,114,121,0);
          let libreanimatedf = 3.0;
         buttonE &= statsj.length;
         annerW += `${3 - parseInt(`${libreanimatedf}`)}`;
         proxyk += "1";
         libreanimatedf -= proxyk.length << (Math.min(Math.abs(2), 3));
      eighteeni *= parseFloat(`${1}`);
      if (toponq) {
         break;
      }
   } while ((parseInt(`${eighteeni}`) > updatess.length) && toponq);
       let model3 = 3.0;
      while (5.93 > (model3 / 2)) {
         model3 += parseFloat(`${parseInt(`${model3}`)}`);
         break;
      }
          let sentryu = String.fromCharCode(107,101,121,104,97,115,104,95,101,95,54,51,0);
         model3 += parseFloat(`${parseInt(`${model3}`) % (Math.max(4, sentryu.length))}`);
         model3 += parseFloat(`${parseInt(`${model3}`) >> (Math.min(2, Math.abs(parseInt(`${model3}`))))}`);
      updatess = [updatess.length / (Math.max(2, 2))];
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return
      if (targetEpisode?.status === MARTextinputBackground.MARInjuryModels){
        return 
      }
      
      
      
      
      
      
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: MARTextinputBackground.MARLibjsi, 
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

      if (targetEpisode.status === MARTextinputBackground.MARInjuryModels) { 
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
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
  return async function (dispatch, getState) {
    dispatch(addVideoToDownload(vod, vodSourceId, vodUrlNid, vodIsAdult));
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: MARTextinputBackground.MARRewardvideoBell}))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function removeVideoFromDownloadThunk(
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
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
       let action3 = String.fromCharCode(115,97,102,101,95,114,95,49,53,0);
    let topic2 = 1.0;
    let gradlel = String.fromCharCode(114,95,51,56,95,120,115,117,98,0);
    let typesv: Array<any> = [55, 310, 282];
    let codegeny = String.fromCharCode(98,95,53,49,95,107,109,101,97,110,115,0);
    let control3 = 5.0;
    let androidK: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,112,104,111,110,121,95,56,95,55,52,0),693], [String.fromCharCode(99,95,57,55,95,108,105,98,112,104,111,110,101,110,117,109,98,101,114,0),97], [String.fromCharCode(109,95,53,54,95,111,110,108,121,0),623]]);
    let agreementI = false;
    let expiredq = 5;
    let linec = false;
    let proxyc = String.fromCharCode(122,95,49,55,95,117,110,105,119,103,116,0);
    let alertn = 1.0;
    let membershipZ = 4;
    let containerr = String.fromCharCode(121,95,49,57,95,109,97,106,0);
    let launchh = String.fromCharCode(114,95,49,53,95,105,110,116,112,0);
    let scorez = false;
   while (!linec && 2 >= proxyc.length) {
      proxyc += `${androidK.size | 3}`;
      break;
   }
   if (2 == (1 >> (Math.min(2, action3.length)))) {
      action3 = "3";
   }
      action3 = `${codegeny.length}`;
       let libimagepipelinec = 4;
       let mbridgeD = String.fromCharCode(118,97,108,105,100,97,116,111,114,95,110,95,50,48,0);
       let volume3 = 1.0;
       let libreactperfloggerjniT = String.fromCharCode(114,101,99,101,105,118,105,110,103,95,114,95,51,56,0);
       let hiada = String.fromCharCode(117,95,57,57,95,113,117,97,108,105,102,105,101,114,115,0);
          let playJ = 5.0;
         volume3 += parseFloat(`${parseInt(`${playJ}`)}`);
          let bootsplashu: Array<any> = [String.fromCharCode(115,95,51,51,95,102,117,122,122,101,114,115,0), String.fromCharCode(101,95,53,54,95,97,118,102,111,114,109,97,116,114,101,115,0), String.fromCharCode(106,95,51,48,95,116,105,110,116,101,100,0)];
          let downloaders = 0.0;
          let strings7 = true;
         mbridgeD = `${(hiada.length & (strings7 ? 2 : 1))}`;
         bootsplashu = [parseInt(`${downloaders}`)];
         downloaders /= Math.max(bootsplashu.length << (Math.min(5, Math.abs(parseInt(`${downloaders}`)))), 1);
         strings7 = bootsplashu.length < 67;
      for (let y = 0; y < 1; y++) {
         libimagepipelinec >>= Math.min(1, libreactperfloggerjniT.length);
      }
         hiada += `${parseInt(`${volume3}`)}`;
      if (libreactperfloggerjniT.length == 3) {
         libimagepipelinec |= mbridgeD.length;
      }
      let componentregistry0 = 9377752 <= libimagepipelinec;
      do {
          let navigations = 1;
          let thailandu = String.fromCharCode(121,117,118,112,95,57,95,48,0);
          let shirtd = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,109,95,56,0);
          let matchesy = String.fromCharCode(99,111,110,116,97,105,110,101,100,95,51,95,57,50,0);
          let bannerw = 3;
         libimagepipelinec *= parseInt(`${volume3}`);
         navigations %= Math.max(1, (matchesy == String.fromCharCode(110,0) ? matchesy.length : shirtd.length));
         thailandu = `${(thailandu == String.fromCharCode(118,0) ? thailandu.length : shirtd.length)}`;
         bannerw /= Math.max(4, 1 | navigations);
         if (componentregistry0) {
            break;
         }
      } while (((mbridgeD.length - 1) < 3 || 2 < (mbridgeD.length - 1)) && componentregistry0);
         libreactperfloggerjniT += `${(String.fromCharCode(95,0) == hiada ? parseInt(`${volume3}`) : hiada.length)}`;
      for (let k = 0; k < 2; k++) {
         libimagepipelinec %= Math.max((String.fromCharCode(73,0) == hiada ? libimagepipelinec : hiada.length), 3);
      }
      typesv = [((linec ? 2 : 5) - parseInt(`${topic2}`))];
       let comment9 = 1.0;
          let sidek = String.fromCharCode(118,105,115,97,95,108,95,49,55,0);
          let interstitial8 = 3.0;
         comment9 += (String.fromCharCode(87,0) == sidek ? parseInt(`${interstitial8}`) : sidek.length);
         comment9 /= Math.max(2, 1);
         comment9 -= 3;
      androidK = new Map([[`${typesv.length}`, 2 % (Math.max(expiredq, 6))]]);
   for (let j = 0; j < 1; j++) {
       let textinputj = String.fromCharCode(107,95,52,53,95,103,101,110,101,114,97,116,101,0);
       let clearu: Map<any, any> = new Map([[String.fromCharCode(99,95,52,51,95,105,110,116,114,111,0),63], [String.fromCharCode(112,95,57,95,114,116,114,101,101,110,111,100,101,0),737], [String.fromCharCode(121,95,50,49,95,100,121,110,98,117,102,0),872]]);
       let filledJ = String.fromCharCode(115,95,56,53,95,114,101,97,100,98,121,116,101,0);
       let libavutilA: Map<any, any> = new Map([[String.fromCharCode(115,95,55,49,95,119,101,98,112,97,103,101,0),697], [String.fromCharCode(97,108,116,101,114,101,100,95,105,95,55,51,0),374]]);
       let dataw = String.fromCharCode(117,95,49,95,99,111,108,115,112,97,110,0);
       let androidL = String.fromCharCode(99,104,97,114,97,99,116,101,114,115,95,97,95,49,54,0);
         clearu.set(`${libavutilA.size}`, clearu.size ^ 3);
      for (let t = 0; t < 1; t++) {
         libavutilA.set(androidL, dataw.length * 3);
      }
         textinputj = `${(dataw == String.fromCharCode(90,0) ? dataw.length : clearu.size)}`;
      while (!Array.from(libavutilA.keys()).includes(`${clearu.size}`)) {
          let main_qL = String.fromCharCode(97,95,53,52,95,100,114,105,118,101,114,115,0);
          let readK = String.fromCharCode(115,121,109,108,105,110,107,95,111,95,54,0);
          let libglogw = String.fromCharCode(121,95,55,54,95,109,97,105,110,110,101,116,0);
          let quest6 = String.fromCharCode(115,117,103,103,101,115,116,95,106,95,54,48,0);
          let libffmpegkitQ = String.fromCharCode(117,112,100,97,116,101,95,120,95,57,50,0);
         libavutilA = new Map([[`${libavutilA.size}`, libglogw.length >> (Math.min(5, Math.abs(libavutilA.size)))]]);
         main_qL += `${libffmpegkitQ.length}`;
         readK += `${quest6.length + 2}`;
         libglogw = `${3 ^ quest6.length}`;
         libffmpegkitQ += `${(quest6 == String.fromCharCode(75,0) ? quest6.length : readK.length)}`;
         break;
      }
          let livef = 2.0;
          let specc = 1;
          let searchP = String.fromCharCode(98,108,111,99,107,101,100,95,103,95,50,56,0);
         libavutilA = new Map([[`${libavutilA.size}`, filledJ.length]]);
         livef *= specc | searchP.length;
         specc += 1 << (Math.min(1, searchP.length));
      let updatesx = clearu.size >= 6407080;
      do {
         clearu = new Map([[textinputj, dataw.length]]);
         if (updatesx) {
            break;
         }
      } while ((!filledJ.includes(`${clearu.size}`)) && updatesx);
      while ((clearu.size / (Math.max(libavutilA.size, 7))) > 1 && (libavutilA.size / (Math.max(1, clearu.size))) > 1) {
          let collectionA = false;
          let kuaishouo: Array<any> = [480, 55];
          let loadingy = String.fromCharCode(114,101,115,101,110,100,95,122,95,54,0);
          let chartF: Map<any, any> = new Map([[String.fromCharCode(111,95,53,95,100,101,97,108,108,111,99,97,116,101,100,0),632], [String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,111,95,55,57,0),253]]);
          let libavfilterm: Array<any> = [558, 440, 467];
         libavutilA.set(`${loadingy}`, (loadingy == String.fromCharCode(50,0) ? loadingy.length : libavutilA.size));
         collectionA = !collectionA && libavfilterm.length >= 25;
         kuaishouo.push(libavfilterm.length ^ kuaishouo.length);
         chartF.set(`${kuaishouo.length}`, 2 % (Math.max(4, kuaishouo.length)));
         break;
      }
          let yellowi = String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,97,95,57,51,0);
         filledJ = `${1 >> (Math.min(1, Math.abs(clearu.size)))}`;
         yellowi += `${yellowi.length + yellowi.length}`;
          let zhuboE = 0.0;
          let logoo: Map<any, any> = new Map([[String.fromCharCode(100,95,57,55,95,122,111,111,109,0),true ], [String.fromCharCode(100,101,115,116,114,111,121,101,100,95,99,95,54,55,0),false ]]);
         textinputj += `${logoo.size + androidL.length}`;
         zhuboE += 3;
         logoo = new Map([[`${zhuboE}`, 3 | parseInt(`${zhuboE}`)]]);
      if (androidL.startsWith(textinputj)) {
          let colorsY = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,55,95,52,48,0);
          let collectionE = 5;
          let penalty0 = 3.0;
          let gemfileN = String.fromCharCode(110,101,97,114,101,115,116,95,53,95,54,54,0);
          let textinputX = String.fromCharCode(112,95,49,53,95,114,97,116,101,99,111,110,116,114,111,108,0);
         androidL += "1";
         colorsY += "3";
         collectionE -= textinputX.length - colorsY.length;
         penalty0 *= parseFloat(`${collectionE}`);
         gemfileN += `${parseInt(`${penalty0}`) & gemfileN.length}`;
         textinputX += "1";
      }
         androidL += "3";
      agreementI = (codegeny.length - expiredq) == 3;
   }
      expiredq |= (2 ^ (linec ? 3 : 4));
   let reactc = control3 <= 8452159.0;
   do {
      control3 += codegeny.length;
      if (reactc) {
         break;
      }
   } while (reactc && (!typesv.includes(control3)));
   while (Array.from(androidK.keys()).includes(`${alertn}`)) {
       let hoverF = 1.0;
       let schedule_ = 4.0;
       let settingsY: Array<any> = [369, 684, 654];
       let lessD = String.fromCharCode(113,95,53,49,95,109,105,110,105,109,105,122,101,97,98,108,101,0);
       let rewardV: Array<any> = [125, 313, 717];
         schedule_ += parseFloat(`${parseInt(`${hoverF}`) | 3}`);
         settingsY.push(parseInt(`${schedule_}`));
       let delegate_5x = 3.0;
       let graphz = 1.0;
          let libturbomodulejsijniT: Map<any, any> = new Map([[String.fromCharCode(120,95,48,95,102,105,120,115,116,114,105,100,101,0),23], [String.fromCharCode(99,111,112,105,101,100,95,117,95,51,52,0),337], [String.fromCharCode(99,111,114,101,95,105,95,51,56,0),875]]);
          let libcrashsdkU = 4.0;
          let shirtn: Array<any> = [String.fromCharCode(111,112,117,115,95,100,95,50,50,0), String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,56,95,53,55,0), String.fromCharCode(106,95,53,51,95,112,97,115,116,101,100,0)];
         schedule_ -= parseFloat(`${parseInt(`${delegate_5x}`) << (Math.min(Math.abs(2), 3))}`);
         libturbomodulejsijniT.set(`${shirtn.length}`, 1);
         libcrashsdkU /= Math.max(2, shirtn.length);
      for (let q = 0; q < 1; q++) {
         lessD += `${lessD.length | 1}`;
      }
         lessD += `${parseInt(`${hoverF}`) % (Math.max(6, lessD.length))}`;
       let filedL: Array<any> = [494, 125, 139];
       let bodany: Array<any> = [519, 188];
      while (5 >= (lessD.length + 5) || 1.54 >= (graphz - parseFloat(`${lessD.length}`))) {
          let checkboxA = true;
          let j_lockH = 0;
          let libreactnativejniS: Map<any, any> = new Map([[String.fromCharCode(109,95,56,49,95,99,108,105,112,102,0),602], [String.fromCharCode(105,115,116,115,95,101,95,50,55,0),873], [String.fromCharCode(116,97,98,108,101,105,110,105,116,95,105,95,49,51,0),79]]);
          let sheetP = String.fromCharCode(109,95,52,55,95,97,112,105,99,0);
         lessD += `${libreactnativejniS.size ^ bodany.length}`;
         checkboxA = !checkboxA;
         j_lockH |= j_lockH;
         libreactnativejniS.set(sheetP, j_lockH ^ 2);
         sheetP = `${1 | j_lockH}`;
         break;
      }
      while (1 >= bodany.length) {
         settingsY.push(parseInt(`${schedule_}`) * rewardV.length);
         break;
      }
         hoverF /= Math.max(parseInt(`${graphz}`), 3);
      if (1 >= (1 | filedL.length)) {
         bodany.push(rewardV.length % (Math.max(settingsY.length, 5)));
      }
      let comment6 = 7019829 >= rewardV.length;
      do {
          let nalyticsn: Map<any, any> = new Map([[String.fromCharCode(100,117,114,97,116,105,111,110,115,95,109,95,52,55,0),false ], [String.fromCharCode(97,118,99,105,110,116,114,97,95,100,95,54,55,0),true ]]);
         rewardV.push(parseInt(`${schedule_}`));
         nalyticsn.set(`${nalyticsn.size}`, nalyticsn.size);
         if (comment6) {
            break;
         }
      } while (comment6 && (1 < rewardV.length));
      if (hoverF <= 3.82) {
         bodany.push(rewardV.length);
      }
      if ((graphz + 3.17) > 1.73 || 3.17 > (parseFloat(`${filedL.length}`) + graphz)) {
         graphz *= parseFloat(`${3}`);
      }
       let gdtadvd = true;
      alertn -= (gradlel == String.fromCharCode(75,0) ? typesv.length : gradlel.length);
      break;
   }
       let usernameT = 1.0;
      if ((5.53 + usernameT) < 3.38) {
          let umengD: Array<any> = [459, 816, 983];
          let mailK = String.fromCharCode(119,97,116,101,114,109,97,114,107,115,95,55,95,50,50,0);
          let descS = String.fromCharCode(115,101,99,117,114,101,100,95,48,95,57,51,0);
         usernameT -= parseFloat(`${umengD.length}`);
         umengD = [descS.length + mailK.length];
         mailK += `${mailK.length + descS.length}`;
      }
       let libavutilb = String.fromCharCode(107,95,54,95,116,114,97,110,115,108,97,116,105,111,110,0);
       let nativemoduler = 3;
       let backwardC = 0;
      gradlel = `${1 - gradlel.length}`;
   let become9 = androidK.size >= 6331197;
   do {
       let active_ = true;
       let scrollviewN = false;
       let zhengpiang = 2;
         scrollviewN = active_;
      for (let d = 0; d < 1; d++) {
         active_ = !active_;
      }
      while (5 < (zhengpiang - 3) && !scrollviewN) {
         scrollviewN = !active_;
         break;
      }
      for (let m = 0; m < 2; m++) {
          let zoom_ = 5.0;
          let rncore1 = 4.0;
          let values_ = String.fromCharCode(121,95,52,49,95,100,105,115,97,98,108,101,114,0);
         scrollviewN = scrollviewN || zhengpiang == 63;
         zoom_ -= 3 >> (Math.min(1, values_.length));
         rncore1 -= parseFloat(`${parseInt(`${zoom_}`)}`);
         values_ = `${parseInt(`${rncore1}`) ^ 3}`;
      }
      for (let b = 0; b < 2; b++) {
         active_ = scrollviewN;
      }
      androidK.set(`${active_}`, 2 | parseInt(`${alertn}`));
      if (become9) {
         break;
      }
   } while (((gradlel.length * androidK.size) < 4 || (gradlel.length * 4) < 1) && become9);
   while ((3 << (Math.min(4, typesv.length))) <= 3) {
      typesv = [(String.fromCharCode(88,0) == codegeny ? parseInt(`${control3}`) : codegeny.length)];
      break;
   }
      topic2 += proxyc.length;
      alertn *= action3.length;
      agreementI = proxyc.length >= 4;
   while (!linec) {
      membershipZ /= Math.max(4, 1 - expiredq);
      break;
   }
   if (!linec || gradlel.length <= 2) {
       let playercommonq = 2;
       let scoreM: Array<any> = [324, 12];
      if (scoreM.length == playercommonq) {
          let baiduM = String.fromCharCode(109,95,57,48,95,115,110,105,112,112,101,116,0);
          let dialogI = false;
          let macaur: Map<any, any> = new Map([[String.fromCharCode(99,95,51,56,95,109,97,110,97,103,101,115,0),true ], [String.fromCharCode(109,95,50,51,95,116,97,103,110,99,111,109,112,97,114,101,0),false ], [String.fromCharCode(116,114,117,116,104,95,112,95,51,0),false ]]);
          let switch_7y = 3;
          let combinex = true;
         playercommonq /= Math.max(baiduM.length % (Math.max(3, 2)), 4);
         baiduM = "2";
         dialogI = switch_7y == macaur.size;
         macaur.set(`${switch_7y}`, ((combinex ? 2 : 3) << (Math.min(Math.abs(switch_7y), 4))));
      }
      for (let y = 0; y < 2; y++) {
          let checkboxp = 2.0;
          let invitef = 4;
          let modez = String.fromCharCode(111,95,55,57,95,121,118,116,111,121,117,121,0);
          let shirta = String.fromCharCode(115,109,111,111,116,104,105,110,103,95,113,95,55,51,0);
          let transfer3 = String.fromCharCode(101,109,105,116,95,100,95,55,55,0);
         playercommonq %= Math.max(3 | scoreM.length, 3);
         checkboxp += transfer3.length;
         invitef >>= Math.min(Math.abs(3), 5);
         modez += "3";
         shirta = `${parseInt(`${checkboxp}`)}`;
         transfer3 += `${shirta.length & parseInt(`${checkboxp}`)}`;
      }
          let xadsdk4: Array<any> = [991, 981];
         scoreM.push(playercommonq);
         xadsdk4 = [2];
       let mimoJ = String.fromCharCode(97,95,55,53,95,97,114,105,98,0);
       let serviceJ = String.fromCharCode(114,101,97,100,102,114,97,109,101,95,121,95,50,51,0);
      while (2 > serviceJ.length && 2 > mimoJ.length) {
          let register_qj3: Map<any, any> = new Map([[String.fromCharCode(117,95,55,50,95,112,101,114,115,105,115,116,97,110,116,0),247], [String.fromCharCode(109,95,56,52,95,99,114,111,119,100,105,110,0),912], [String.fromCharCode(114,95,55,55,95,112,117,116,99,0),308]]);
          let redirectf = String.fromCharCode(115,95,55,53,95,114,101,108,105,97,98,108,101,0);
          let matchN = String.fromCharCode(114,95,49,48,95,115,108,111,112,0);
          let libyogaD = String.fromCharCode(102,95,54,54,95,116,102,120,100,0);
          let annerd = String.fromCharCode(105,110,100,101,120,105,110,103,95,116,95,56,54,0);
         mimoJ += `${2 + serviceJ.length}`;
         register_qj3.set(`${redirectf}`, register_qj3.size);
         redirectf = `${2 / (Math.max(9, register_qj3.size))}`;
         matchN = `${(matchN == String.fromCharCode(118,0) ? matchN.length : annerd.length)}`;
         libyogaD += `${libyogaD.length}`;
         annerd = `${3 >> (Math.min(4, matchN.length))}`;
         break;
      }
      if (scoreM.length < serviceJ.length) {
         scoreM.push(2);
      }
      gradlel += `${1 | parseInt(`${topic2}`)}`;
   }
      gradlel = `${typesv.length}`;
       let unticke = String.fromCharCode(103,95,55,49,95,115,101,113,110,111,0);
          let codegenZ: Map<any, any> = new Map([[String.fromCharCode(103,108,111,115,115,95,121,95,53,54,0),String.fromCharCode(110,95,48,95,108,105,98,115,114,116,0)], [String.fromCharCode(119,95,49,50,95,110,116,111,108,111,103,121,0),String.fromCharCode(97,110,97,110,100,97,110,95,52,95,57,50,0)], [String.fromCharCode(106,95,52,52,95,117,99,104,97,114,0),String.fromCharCode(102,95,57,50,95,111,118,101,114,114,105,100,101,110,0)]]);
          let sansK = 0.0;
         unticke = `${parseInt(`${sansK}`)}`;
         codegenZ.set(`${codegenZ.size}`, codegenZ.size);
         sansK -= 3;
         unticke = `${unticke.length}`;
         unticke += `${2 | unticke.length}`;
      androidK = new Map([[`${agreementI}`, parseInt(`${control3}`) % 2]]);
   for (let t = 0; t < 1; t++) {
       let module_ = String.fromCharCode(109,101,115,111,110,95,52,95,49,53,0);
       let fasta = 1.0;
       let bdxadsdkP: Array<any> = [32, 411];
       let flyerL = String.fromCharCode(116,95,51,55,95,115,117,98,116,97,115,107,0);
      for (let d = 0; d < 2; d++) {
          let twitterM = 1;
          let armvae = String.fromCharCode(120,95,54,50,95,108,105,102,101,99,121,99,108,101,0);
          let statisticsW = String.fromCharCode(115,95,57,51,95,97,118,112,105,99,116,117,114,101,0);
          let temperatureK = 5.0;
          let textlayoutmanager2 = 0;
         bdxadsdkP.push(parseInt(`${temperatureK}`) + statisticsW.length);
         twitterM %= Math.max(3, textlayoutmanager2 >> (Math.min(Math.abs(twitterM), 2)));
         armvae = `${(armvae == String.fromCharCode(114,0) ? armvae.length : textlayoutmanager2)}`;
         statisticsW += `${armvae.length & textlayoutmanager2}`;
         temperatureK -= textlayoutmanager2;
      }
         bdxadsdkP = [1];
          let mbjscommon8 = true;
          let appsz = true;
          let checkbox4 = 2;
         bdxadsdkP.push(((mbjscommon8 ? 4 : 1)));
         mbjscommon8 = 94 <= checkbox4;
         appsz = !appsz;
         checkbox4 &= checkbox4;
         module_ += `${3 % (Math.max(10, parseInt(`${fasta}`)))}`;
         bdxadsdkP = [parseInt(`${fasta}`)];
         module_ = `${flyerL.length}`;
         flyerL += `${3 * flyerL.length}`;
      if (1 < bdxadsdkP.length) {
         fasta /= Math.max(3, parseInt(`${fasta}`));
      }
         bdxadsdkP.push(flyerL.length);
      let save5 = String.fromCharCode(57,99,54,108,111,50,0) == module_;
      do {
         module_ += `${flyerL.length}`;
         if (save5) {
            break;
         }
      } while ((flyerL.includes(module_)) && save5);
          let delegate_5a = String.fromCharCode(116,95,49,56,95,105,110,118,102,0);
          let libjsiM = 4.0;
          let loadinge = String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,55,95,54,0);
         module_ = `${2 ^ module_.length}`;
         delegate_5a = `${3 & delegate_5a.length}`;
         libjsiM -= parseFloat(`${loadinge.length}`);
         loadinge = `${parseInt(`${libjsiM}`)}`;
      while ((bdxadsdkP.length / (Math.max(4, module_.length))) == 4) {
         bdxadsdkP.push(flyerL.length);
         break;
      }
      agreementI = flyerL == String.fromCharCode(49,0);
   }
   let leftd = agreementI ? !agreementI : agreementI;
   do {
       let stations6: Array<any> = [716, 782];
       let infoW = String.fromCharCode(118,95,49,52,95,115,109,112,116,101,104,100,98,97,114,115,0);
       let armvaN = String.fromCharCode(106,95,55,52,95,98,117,102,102,101,114,105,110,103,0);
         armvaN = `${infoW.length}`;
      let private_wZ = 6481603 <= armvaN.length;
      do {
         armvaN = `${infoW.length}`;
         if (private_wZ) {
            break;
         }
      } while (private_wZ && ((armvaN.length - stations6.length) > 1 && (1 - stations6.length) > 4));
      agreementI = (proxyc.length * parseInt(`${alertn}`)) > 79;
      if (leftd) {
         break;
      }
   } while (leftd && (!agreementI));
       let klevin3: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,97,116,116,114,97,99,116,111,114,0),String.fromCharCode(98,95,54,48,95,97,99,113,117,105,114,101,0)], [String.fromCharCode(120,95,55,95,108,97,109,112,0),String.fromCharCode(100,113,99,111,101,102,102,95,109,95,51,57,0)], [String.fromCharCode(105,95,52,55,95,115,109,112,116,101,0),String.fromCharCode(103,95,51,55,95,108,115,112,112,111,108,121,0)]]);
       let tickedp = 5;
       let profileg: Array<any> = [317, 406, 95];
      for (let p = 0; p < 2; p++) {
         profileg = [klevin3.size >> (Math.min(Math.abs(1), 3))];
      }
      if (Array.from(klevin3.keys()).includes(`${profileg.length}`)) {
          let langkeyb = String.fromCharCode(110,111,114,109,97,108,95,56,95,55,49,0);
          let floaterE = String.fromCharCode(97,95,54,50,95,102,119,97,108,115,104,0);
          let reducerO = String.fromCharCode(106,95,52,56,95,118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0);
          let read7 = 3.0;
         klevin3 = new Map([[`${tickedp}`, tickedp / 1]]);
         langkeyb = `${(floaterE == String.fromCharCode(87,0) ? parseInt(`${read7}`) : floaterE.length)}`;
         reducerO = `${(langkeyb == String.fromCharCode(65,0) ? reducerO.length : langkeyb.length)}`;
         read7 -= (String.fromCharCode(76,0) == reducerO ? reducerO.length : langkeyb.length);
      }
       let product0 = true;
       let confirmationF = true;
         product0 = confirmationF || profileg.length == 47;
         product0 = !product0;
         profileg = [(tickedp >> (Math.min(2, Math.abs((confirmationF ? 4 : 1)))))];
      while (confirmationF) {
          let recommendationy = String.fromCharCode(106,95,49,51,95,115,101,116,115,0);
          let xadsdkA = 0.0;
          let fastJ = true;
          let connectionP: Map<any, any> = new Map([[String.fromCharCode(108,95,55,95,114,115,104,105,102,116,0),102], [String.fromCharCode(122,95,56,53,95,100,97,115,104,101,110,99,0),226], [String.fromCharCode(111,95,53,51,95,99,111,108,111,117,114,0),23]]);
          let playercommonO = String.fromCharCode(105,110,112,117,116,120,95,109,95,52,52,0);
         tickedp |= connectionP.size;
         recommendationy = `${playercommonO.length / (Math.max(9, recommendationy.length))}`;
         xadsdkA -= ((fastJ ? 2 : 1) | parseInt(`${xadsdkA}`));
         fastJ = (xadsdkA + playercommonO.length) <= 86.66;
         connectionP = new Map([[`${xadsdkA}`, ((fastJ ? 1 : 4) & parseInt(`${xadsdkA}`))]]);
         break;
      }
       let calendar4 = String.fromCharCode(103,102,109,117,108,95,53,95,50,50,0);
       let temperature0 = String.fromCharCode(117,95,56,49,95,100,105,118,105,100,101,110,100,0);
      for (let x = 0; x < 3; x++) {
         profileg = [temperature0.length];
      }
      expiredq ^= action3.length & 2;
   let handlere = String.fromCharCode(107,102,57,99,115,51,54,117,0) == containerr;
   do {
      containerr += "1";
      if (handlere) {
         break;
      }
   } while (handlere && (containerr.length < 2));
   let u_unlock1 = 8633609 >= androidK.size;
   do {
      androidK = new Map([[action3, (containerr == String.fromCharCode(77,0) ? action3.length : containerr.length)]]);
      if (u_unlock1) {
         break;
      }
   } while (u_unlock1 && ((4 ^ expiredq) == 5));
   for (let n = 0; n < 2; n++) {
      containerr += `${(codegeny.length + (linec ? 1 : 5))}`;
   }
       let grayn = 2;
         grayn += 2;
      for (let s = 0; s < 1; s++) {
         grayn |= grayn;
      }
      if (grayn == grayn) {
         grayn %= Math.max(grayn, 4);
      }
      expiredq /= Math.max(containerr.length * 2, 1);
       let spinnerK: Map<any, any> = new Map([[String.fromCharCode(121,95,49,49,95,105,110,100,105,114,101,99,116,0),String.fromCharCode(99,95,56,53,95,116,101,97,114,0)], [String.fromCharCode(100,112,99,109,95,57,95,49,52,0),String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,95,100,95,51,57,0)]]);
      while (spinnerK.size > spinnerK.size) {
         spinnerK = new Map([[`${spinnerK.size}`, spinnerK.size]]);
         break;
      }
      while (!Array.from(spinnerK.values()).includes(spinnerK.size)) {
          let langkeyM = String.fromCharCode(121,95,49,48,48,95,110,111,110,0);
          let a_center0: Map<any, any> = new Map([[String.fromCharCode(109,101,109,115,101,116,95,98,95,51,54,0),114], [String.fromCharCode(118,99,97,114,100,95,116,95,51,55,0),75]]);
          let containerc = 4.0;
         spinnerK = new Map([[`${spinnerK.size}`, spinnerK.size & 2]]);
         langkeyM += `${2 >> (Math.min(5, langkeyM.length))}`;
         a_center0.set(langkeyM, a_center0.size % (Math.max(3, langkeyM.length)));
         containerc -= parseFloat(`${2}`);
         break;
      }
         spinnerK = new Map([[`${spinnerK.size}`, 3 * spinnerK.size]]);
      codegeny = `${typesv.length}`;

        session.cancel(); 
      }
    }
    dispatch(removeVideoFromDownload(vod, vodSourceId, vodUrlNid))
    dispatch(removeDownloadFromQueue(vod, vodSourceId, vodUrlNid))
    dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function removeVodFromDownloadThunk(
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)
    if (!targetVod) return 

    for (const episode of targetVod.episodes) {
      const allSession = await FFmpegKit.listSessions() 
      for (const session of allSession) {
        if (await session.getSessionId() === episode.ffmpegSession){
       let relatedq = String.fromCharCode(119,95,56,56,95,104,111,114,105,103,0);
    let libzeusV = String.fromCharCode(108,95,56,54,95,112,111,115,116,112,114,111,99,114,101,115,0);
    let nativeb = String.fromCharCode(119,95,49,95,118,97,108,105,100,97,116,105,111,110,115,0);
    let mapbufferl: Map<any, any> = new Map([[String.fromCharCode(106,95,53,56,95,103,114,97,121,97,0),false ], [String.fromCharCode(115,95,49,55,95,100,118,118,105,100,101,111,0),false ], [String.fromCharCode(103,95,54,51,95,105,103,110,111,114,101,100,0),false ]]);
    let reminderE = 3;
    let nexti = 2.0;
    let controlk = 2.0;
    let mbbidh = 5;
    let crowne = 4.0;
    let sells = false;
    let heartg = true;
    let subsH = String.fromCharCode(119,114,105,116,105,110,103,95,57,95,53,56,0);
    let splash4 = 4.0;
   if (5.30 > (crowne - 3.32)) {
      mbbidh ^= (nativeb == String.fromCharCode(86,0) ? nativeb.length : parseInt(`${nexti}`));
   }
      relatedq += `${libzeusV.length}`;
      crowne += reminderE >> (Math.min(relatedq.length, 3));
      nexti /= Math.max((parseFloat(`${String.fromCharCode(98,0) == libzeusV ? parseInt(`${nexti}`) : libzeusV.length}`)), 4);
      crowne -= (String.fromCharCode(95,0) == nativeb ? nativeb.length : reminderE);
       let streamingx = false;
       let projectg = 1.0;
       let countryC = 5.0;
      for (let a = 0; a < 2; a++) {
         streamingx = projectg > 24.69;
      }
      while ((projectg - 2.81) >= 1.63 && 2.81 >= projectg) {
         streamingx = streamingx && 46.74 <= projectg;
         break;
      }
         countryC -= 1 % (Math.max(4, parseInt(`${projectg}`)));
         countryC -= (parseInt(`${countryC}`) / (Math.max(8, (streamingx ? 3 : 2))));
         streamingx = projectg == 70.68;
         projectg -= parseInt(`${projectg}`) % 1;
         countryC /= Math.max(4, parseInt(`${projectg}`));
         streamingx = !streamingx;
       let side8 = 1.0;
      reminderE %= Math.max(1 * reminderE, 2);
   if (nativeb == libzeusV) {
      libzeusV = `${reminderE}`;
   }
   if (!relatedq.endsWith(`${crowne}`)) {
      relatedq += "3";
   }
       let reactnativejsZ: Array<any> = [157, 201, 480];
       let away1 = 4;
       let philippinesS = String.fromCharCode(120,95,55,53,95,122,98,117,102,0);
      for (let t = 0; t < 2; t++) {
         reactnativejsZ = [philippinesS.length];
      }
         reactnativejsZ = [away1 | 2];
      let detail5 = reactnativejsZ.length <= 7525645;
      do {
         reactnativejsZ = [(String.fromCharCode(82,0) == philippinesS ? philippinesS.length : reactnativejsZ.length)];
         if (detail5) {
            break;
         }
      } while (((away1 - reactnativejsZ.length) == 2 || (2 - away1) == 1) && detail5);
      if (2 <= (reactnativejsZ.length | away1) && 3 <= (reactnativejsZ.length | 2)) {
         away1 <<= Math.min(5, Math.abs(2));
      }
      let goal3 = away1 >= 7177038;
      do {
         away1 -= 1;
         if (goal3) {
            break;
         }
      } while (goal3 && ((away1 % (Math.max(3, 7))) > 1 && (philippinesS.length % 3) > 1));
      let modalW = reactnativejsZ.length <= 8718332;
      do {
          let favoritet = String.fromCharCode(100,101,108,97,121,115,95,56,95,51,52,0);
          let mbsplashr = true;
          let mbnativep = String.fromCharCode(119,95,50,56,95,97,118,103,98,108,117,114,0);
         reactnativejsZ.push(away1 ^ 3);
         favoritet = `${(1 | (mbsplashr ? 5 : 3))}`;
         mbsplashr = favoritet.length == mbnativep.length;
         mbnativep += `${favoritet.length}`;
         if (modalW) {
            break;
         }
      } while (modalW && ((reactnativejsZ.length & away1) < 1));
          let analyticsN = String.fromCharCode(105,95,56,53,95,114,101,99,111,110,110,101,99,116,0);
         away1 += 2 - philippinesS.length;
         analyticsN = "2";
      let moduleC = 9672749 >= away1;
      do {
         away1 |= away1 * 1;
         if (moduleC) {
            break;
         }
      } while (moduleC && (!philippinesS.endsWith(`${away1}`)));
      while ((reactnativejsZ.length % 4) < 5 || (reactnativejsZ.length % (Math.max(4, 6))) < 3) {
         reactnativejsZ.push(philippinesS.length);
         break;
      }
      relatedq += `${mbbidh}`;
       let nativemoduler: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,105,110,103,95,120,95,53,0),341], [String.fromCharCode(115,105,100,120,95,109,95,49,48,48,0),656], [String.fromCharCode(114,116,112,101,110,99,95,116,95,57,57,0),600]]);
      while (nativemoduler.get(`${nativemoduler.size}`) != null) {
         nativemoduler = new Map([[`${nativemoduler.size}`, nativemoduler.size - 1]]);
         break;
      }
      if (nativemoduler.size <= 1) {
          let vignetteZ = false;
          let bridgeo = String.fromCharCode(115,95,52,56,95,101,108,108,105,103,105,98,108,101,0);
          let imagemanagerl: Map<any, any> = new Map([[String.fromCharCode(102,105,108,108,101,100,95,98,95,50,48,0),255], [String.fromCharCode(107,95,53,49,95,99,111,110,116,114,105,98,0),943]]);
          let show4 = String.fromCharCode(110,111,110,99,101,95,110,95,51,52,0);
         nativemoduler.set(show4, show4.length << (Math.min(Math.abs(2), 4)));
         vignetteZ = 60 == imagemanagerl.size;
         bridgeo = `${3 & bridgeo.length}`;
         imagemanagerl.set(`${bridgeo}`, 3);
      }
         nativemoduler.set(`${nativemoduler.size}`, nativemoduler.size + nativemoduler.size);
      nativeb += "3";
      crowne += libzeusV.length << (Math.min(3, relatedq.length));
      mbbidh -= 2;
   while (libzeusV.length >= 4) {
      libzeusV += `${mbbidh | parseInt(`${crowne}`)}`;
      break;
   }
   let stepA = 8873221 >= mbbidh;
   do {
      mbbidh <<= Math.min(Math.abs((String.fromCharCode(51,0) == libzeusV ? nativeb.length : libzeusV.length)), 5);
      if (stepA) {
         break;
      }
   } while (((reminderE << (Math.min(Math.abs(mbbidh), 3))) < 1) && stepA);
   for (let w = 0; w < 1; w++) {
      mbbidh <<= Math.min(1, Math.abs(reminderE));
   }
      reminderE %= Math.max(4, 1 | parseInt(`${nexti}`));
      nativeb = `${mbbidh % 3}`;
   let gestureF = 7742210 <= reminderE;
   do {
       let arroww = false;
          let path6: Array<any> = [String.fromCharCode(112,95,52,52,95,110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0), String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,103,95,56,50,0), String.fromCharCode(106,95,55,48,95,109,105,110,105,109,105,122,101,100,0)];
          let privacyY = String.fromCharCode(108,105,110,101,115,95,98,95,57,0);
         arroww = path6.length >= 37;
         path6 = [1];
         privacyY = `${privacyY.length}`;
         arroww = !arroww;
         arroww = (!arroww ? !arroww : !arroww);
      reminderE /= Math.max((libzeusV == String.fromCharCode(75,0) ? libzeusV.length : parseInt(`${crowne}`)), 3);
      if (gestureF) {
         break;
      }
   } while ((3 == (relatedq.length - 5) || 5 == (relatedq.length - reminderE)) && gestureF);
   while (1 >= (reminderE & 5) || 1.16 >= (controlk - parseFloat(`${reminderE}`))) {
      controlk += parseFloat(`${parseInt(`${nexti}`) | 2}`);
      break;
   }
   let signinupW = sells ? !sells : sells;
   do {
      sells = 93 <= nativeb.length;
      if (signinupW) {
         break;
      }
   } while ((heartg) && signinupW);
       let indicatorR: Map<any, any> = new Map([[String.fromCharCode(102,102,117,114,108,95,120,95,56,51,0),true ], [String.fromCharCode(104,95,56,48,95,112,107,103,99,111,110,102,105,103,0),false ], [String.fromCharCode(118,95,48,95,115,121,115,99,116,108,0),false ]]);
       let filterR = String.fromCharCode(97,116,114,105,109,95,48,95,57,54,0);
       let textlayoutmanager5 = true;
      if (5 < (indicatorR.size >> (Math.min(Math.abs(3), 2))) && !textlayoutmanager5) {
          let backwardE = 4.0;
          let phonee = 5.0;
          let backwardv = String.fromCharCode(98,97,116,116,101,114,121,95,54,95,55,49,0);
         textlayoutmanager5 = filterR.length <= indicatorR.size;
         backwardE *= parseFloat(`${backwardv.length >> (Math.min(Math.abs(2), 2))}`);
         phonee /= Math.max(3, parseFloat(`${parseInt(`${phonee}`) + 2}`));
         backwardv += `${parseInt(`${backwardE}`) % 1}`;
      }
         filterR = `${2 * filterR.length}`;
         textlayoutmanager5 = indicatorR.size == 2;
      while (3 >= indicatorR.size) {
          let settingh = String.fromCharCode(101,95,56,50,95,99,111,109,112,97,114,0);
          let tnewarchdefaultsi = 1.0;
          let photo6 = String.fromCharCode(114,101,113,117,105,117,114,101,115,95,57,95,54,50,0);
          let roomg = 2.0;
          let anytimeW = String.fromCharCode(109,95,50,95,108,97,117,110,99,104,0);
         indicatorR = new Map([[`${indicatorR.size}`, filterR.length]]);
         settingh += "2";
         tnewarchdefaultsi += parseFloat(`${anytimeW.length * parseInt(`${tnewarchdefaultsi}`)}`);
         photo6 += "1";
         roomg /= Math.max(3, parseFloat(`${parseInt(`${tnewarchdefaultsi}`)}`));
         anytimeW = `${parseInt(`${roomg}`) % 3}`;
         break;
      }
      if (!textlayoutmanager5) {
         textlayoutmanager5 = !textlayoutmanager5 || filterR.length > 70;
      }
          let subsl = String.fromCharCode(122,95,49,55,95,117,110,98,111,110,100,101,100,0);
          let encryptE = String.fromCharCode(116,104,97,119,95,99,95,51,0);
         filterR += `${indicatorR.size}`;
         subsl += `${2 | encryptE.length}`;
         encryptE += `${1 - subsl.length}`;
      let yellowj = textlayoutmanager5 ? !textlayoutmanager5 : textlayoutmanager5;
      do {
         textlayoutmanager5 = (((!textlayoutmanager5 ? 78 : filterR.length) - filterR.length) > 78);
         if (yellowj) {
            break;
         }
      } while ((!textlayoutmanager5) && yellowj);
         indicatorR.set(`${textlayoutmanager5}`, 2);
         filterR = `${indicatorR.size}`;
      relatedq += `${(String.fromCharCode(109,0) == libzeusV ? filterR.length : libzeusV.length)}`;
   let edit4 = sells ? !sells : sells;
   do {
      sells = nexti >= 49.14;
      if (edit4) {
         break;
      }
   } while (edit4 && (sells));
   while (5 >= (relatedq.length * parseInt(`${nexti}`))) {
       let trophyN = String.fromCharCode(108,95,51,49,95,102,105,110,101,0);
       let detailsO = 3.0;
       let halfu = String.fromCharCode(97,102,105,114,95,104,95,51,54,0);
       let tooltipsE = true;
       let pingh = String.fromCharCode(109,95,51,48,95,102,114,97,109,101,115,121,110,99,0);
         trophyN += `${pingh.length / (Math.max(1, trophyN.length))}`;
      if (1 < (trophyN.length - parseInt(`${detailsO}`)) || 1 < (parseInt(`${detailsO}`) - trophyN.length)) {
          let halfj = 0.0;
         detailsO /= Math.max((parseFloat(`${2 & (tooltipsE ? 4 : 4)}`)), 5);
         halfj *= 2;
      }
         halfu += `${halfu.length}`;
      let cinit_0R = tooltipsE ? !tooltipsE : tooltipsE;
      do {
         tooltipsE = 24.98 > detailsO && tooltipsE;
         if (cinit_0R) {
            break;
         }
      } while (cinit_0R && (trophyN.includes(`${tooltipsE}`)));
         pingh += `${pingh.length}`;
      if (halfu.length < 1) {
         halfu += `${parseInt(`${detailsO}`)}`;
      }
      for (let v = 0; v < 1; v++) {
         pingh += `${halfu.length}`;
      }
      for (let i = 0; i < 2; i++) {
         pingh += `${pingh.length}`;
      }
         tooltipsE = detailsO > 91.37;
       let updatesR: Array<any> = [658, 637];
       let assistP: Array<any> = [624, 915];
          let history4 = 3.0;
         halfu = `${parseInt(`${history4}`)}`;
         tooltipsE = trophyN.length >= 4;
      if (!pingh.includes(`${detailsO}`)) {
          let splash6 = String.fromCharCode(100,105,118,105,100,101,114,115,95,119,95,52,57,0);
          let overlayC = 3;
          let diceI = String.fromCharCode(112,95,50,57,95,103,105,102,0);
          let currentX: Map<any, any> = new Map([[String.fromCharCode(97,95,53,95,114,100,98,120,0),329], [String.fromCharCode(98,95,51,50,95,97,114,101,113,117,101,115,116,0),980]]);
          let debugM = String.fromCharCode(112,116,105,111,110,115,95,56,95,55,54,0);
         detailsO += parseFloat(`${1}`);
         splash6 += `${debugM.length ^ splash6.length}`;
         overlayC ^= diceI.length & currentX.size;
         diceI = `${(debugM == String.fromCharCode(52,0) ? splash6.length : debugM.length)}`;
         currentX.set(`${overlayC}`, currentX.size * overlayC);
      }
         updatesR = [((tooltipsE ? 4 : 5) / (Math.max(8, halfu.length)))];
       let temperatureb = String.fromCharCode(121,95,50,50,95,108,105,98,120,0);
       let ksadH = String.fromCharCode(102,95,52,95,99,112,117,105,100,0);
      nexti *= parseFloat(`${pingh.length & libzeusV.length}`);
      break;
   }
   let friends_ = nexti <= 8069092.0;
   do {
       let libreactnativejnim = false;
       let sentryi: Array<any> = [749, 14, 630];
       let internet8 = 5.0;
       let e_playerR = String.fromCharCode(105,95,49,53,95,99,97,108,108,98,97,99,107,115,0);
       let security4 = String.fromCharCode(99,108,111,117,100,95,52,95,57,57,0);
         sentryi = [1];
      for (let r = 0; r < 1; r++) {
         internet8 += security4.length * parseInt(`${internet8}`);
      }
         sentryi.push(security4.length / 1);
      if ((sentryi.length / (Math.max(5, e_playerR.length))) <= 2 || 1 <= (e_playerR.length / 2)) {
         sentryi.push(2 + parseInt(`${internet8}`));
      }
      if (!libreactnativejnim) {
          let dataA = String.fromCharCode(100,95,53,52,95,116,114,97,110,115,117,112,112,0);
          let cricketB = String.fromCharCode(114,95,57,57,95,117,110,97,118,97,105,98,108,101,0);
          let typesP = false;
         libreactnativejnim = security4.length == e_playerR.length;
         dataA += `${dataA.length * 2}`;
         cricketB += `${1 & cricketB.length}`;
         typesP = (dataA.length << (Math.min(2, cricketB.length))) < 83;
      }
      if (security4.includes(`${sentryi.length}`)) {
         security4 = `${(String.fromCharCode(49,0) == security4 ? (libreactnativejnim ? 4 : 1) : security4.length)}`;
      }
         internet8 += security4.length;
      if (4 < e_playerR.length && !libreactnativejnim) {
          let fadfdeebbbfdabbbabdadfaaddaas = 5;
          let episodesO = String.fromCharCode(115,95,51,50,95,98,111,117,110,100,97,108,108,0);
          let borderlessZ: Array<any> = [742, 166];
          let classesn = String.fromCharCode(101,95,49,56,0);
          let libpangleflippedC = 0.0;
         e_playerR = `${classesn.length}`;
         fadfdeebbbfdabbbabdadfaaddaas += borderlessZ.length;
         episodesO = `${fadfdeebbbfdabbbabdadfaaddaas}`;
         borderlessZ = [episodesO.length * parseInt(`${libpangleflippedC}`)];
         classesn += `${1 | episodesO.length}`;
         libpangleflippedC -= episodesO.length;
      }
         libreactnativejnim = 73 <= e_playerR.length && sentryi.length <= 73;
         libreactnativejnim = parseInt(`${internet8}`) >= e_playerR.length;
       let hookm = String.fromCharCode(101,95,50,95,114,101,99,118,102,114,111,109,0);
         sentryi = [((libreactnativejnim ? 3 : 4) / 1)];
         hookm += `${e_playerR.length >> (Math.min(5, hookm.length))}`;
      while (3 == security4.length || !libreactnativejnim) {
          let launche = String.fromCharCode(115,109,111,111,116,104,101,110,95,102,95,54,56,0);
          let delegate_81: Map<any, any> = new Map([[String.fromCharCode(120,95,49,50,95,97,112,116,120,104,100,0),String.fromCharCode(108,95,56,57,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0)], [String.fromCharCode(98,121,116,101,99,111,100,101,95,52,95,57,52,0),String.fromCharCode(102,111,117,110,100,95,120,95,51,0)]]);
          let checkboxm: Array<any> = [998, 426, 612];
          let helperF = true;
          let modex = 4.0;
         libreactnativejnim = (checkboxm.length >> (Math.min(Math.abs(delegate_81.size), 3))) <= 100;
         launche = `${2 * launche.length}`;
         delegate_81.set(`${modex}`, parseInt(`${modex}`) ^ 3);
         checkboxm.push(parseInt(`${modex}`) & 1);
         helperF = !helperF;
         break;
      }
       let const_7bu = true;
      nexti += parseFloat(`${sentryi.length}`);
      if (friends_) {
         break;
      }
   } while (friends_ && ((mapbufferl.size / (Math.max(9, parseInt(`${nexti}`)))) <= 3 || 2.29 <= (nexti / 4.90)));

          session.cancel(); 
        }
      }
      dispatch(removeVideoFromDownloadThunk(vod, episode.vodSourceId, episode.vodUrlNid))
    }
    RNFetchBlob.fs.unlink(targetVod.imagePath).catch()
    dispatch(removeVodFromDownload(vod, vodSourceId, vodUrlNid))
  }
}

export function clearQueueOnAppStart(): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
  return async function (dispatch, getState) {
    const state = getState().downloadVideoReducer
    const targetEpisodes: yys_Xvod[] = []

    for (const download of state.downloads) {
      for (const episode of download.episodes) {
        if (episode.status === MARTextinputBackground.MARRewardvideoBell){
       let contextj = String.fromCharCode(119,114,105,116,101,99,98,95,101,95,54,53,0);
    let zhengpianz = 4.0;
    let libjsijniprofilerL = true;
    let linkf = String.fromCharCode(105,95,49,48,48,95,97,118,97,105,108,0);
    let leakcheckerI = String.fromCharCode(99,97,116,99,104,105,110,103,95,50,95,50,56,0);
    let pauseF = 4;
    let h_managerE = 5.0;
    let productM = String.fromCharCode(122,95,51,52,95,121,117,118,112,108,97,110,101,0);
    let bootsplashu = 4;
    let libtanK = false;
    let with_r3 = 2;
       let stationsK: Map<any, any> = new Map([[String.fromCharCode(111,95,52,57,95,104,111,116,105,122,111,110,116,108,0),String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,121,95,55,54,0)], [String.fromCharCode(97,95,57,54,95,115,116,114,105,107,101,116,104,114,111,117,103,104,0),String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,95,117,95,50,48,0)], [String.fromCharCode(122,95,49,48,48,95,114,101,102,105,110,101,109,101,110,116,0),String.fromCharCode(111,95,51,52,95,105,110,104,105,98,105,116,0)]]);
       let reminder8 = String.fromCharCode(110,111,116,104,105,110,103,95,53,95,49,52,0);
         reminder8 += `${stationsK.size}`;
         stationsK.set(`${reminder8}`, 1 - reminder8.length);
       let yellowe: Array<any> = [602, 855, 921];
       let sansm: Array<any> = [529, 211, 598];
         yellowe.push(stationsK.size);
      let nterstitialU = sansm.length >= 9577707;
      do {
         sansm = [yellowe.length];
         if (nterstitialU) {
            break;
         }
      } while (nterstitialU && (4 >= (sansm.length * stationsK.size) || 4 >= (stationsK.size * sansm.length)));
      if (5 == stationsK.size) {
          let sliderR = 4.0;
          let taiwanY = 4.0;
         stationsK.set(`${sliderR}`, parseInt(`${sliderR}`) ^ 2);
         taiwanY /= Math.max(3, parseInt(`${taiwanY}`) + parseInt(`${taiwanY}`));
      }
      h_managerE /= Math.max(parseFloat(`${leakcheckerI.length << (Math.min(Math.abs(1), 1))}`), 1);
      zhengpianz *= parseFloat(`${linkf.length}`);
   while (zhengpianz <= 1.17) {
      zhengpianz /= Math.max(5, parseFloat(`${2}`));
      break;
   }
   while (!libjsijniprofilerL) {
       let hiadp = String.fromCharCode(108,111,111,112,105,110,103,95,108,95,53,48,0);
       let langj = true;
         langj = !langj;
       let logout7 = String.fromCharCode(116,121,112,101,100,95,98,95,57,53,0);
         hiadp += `${(logout7 == String.fromCharCode(106,0) ? (langj ? 4 : 4) : logout7.length)}`;
      if (4 > logout7.length) {
         hiadp += "1";
      }
         logout7 += `${(logout7.length | (langj ? 2 : 2))}`;
          let libfabricjni_ = String.fromCharCode(102,108,111,111,100,95,57,95,53,53,0);
          let policyw = 4;
          let connectionm: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,114,101,110,101,119,0),530], [String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,49,95,56,0),825]]);
         logout7 += `${policyw}`;
         libfabricjni_ += `${(String.fromCharCode(107,0) == libfabricjni_ ? connectionm.size : libfabricjni_.length)}`;
         policyw += libfabricjni_.length;
         connectionm = new Map([[`${connectionm.size}`, (libfabricjni_ == String.fromCharCode(67,0) ? connectionm.size : libfabricjni_.length)]]);
      contextj = `${(linkf == String.fromCharCode(99,0) ? linkf.length : contextj.length)}`;
      break;
   }
      productM += `${leakcheckerI.length + 3}`;
   let kuaishout = String.fromCharCode(109,117,109,0) == leakcheckerI;
   do {
       let suggestionh: Array<any> = [961, 453, 555];
       let with_wl = 2;
       let otherc = 3.0;
       let toponX = true;
          let libpangleflippedl: Array<any> = [770, 459];
         with_wl -= libpangleflippedl.length >> (Math.min(2, suggestionh.length));
       let a_lockX: Array<any> = [95, 790, 8];
       let favorite3: Array<any> = [35, 489, 741];
         otherc -= favorite3.length;
      while ((5 >> (Math.min(1, suggestionh.length))) == 4) {
         suggestionh.push(with_wl | suggestionh.length);
         break;
      }
      for (let h = 0; h < 3; h++) {
         with_wl >>= Math.min(Math.abs(suggestionh.length + parseInt(`${otherc}`)), 1);
      }
      for (let e = 0; e < 1; e++) {
         suggestionh.push(with_wl);
      }
         otherc += 2;
         a_lockX.push(((toponX ? 2 : 2) >> (Math.min(a_lockX.length, 1))));
         suggestionh.push(with_wl >> (Math.min(5, Math.abs(2))));
      if (5 <= (4 >> (Math.min(4, a_lockX.length)))) {
         toponX = 77 >= a_lockX.length;
      }
         with_wl += (parseInt(`${otherc}`) + (toponX ? 4 : 4));
       let selectZ: Map<any, any> = new Map([[String.fromCharCode(118,95,55,54,95,111,99,99,117,114,114,101,110,99,101,115,0),572], [String.fromCharCode(100,95,56,56,95,115,117,112,101,114,110,111,100,101,115,0),61]]);
       let typing1: Map<any, any> = new Map([[String.fromCharCode(98,114,97,110,100,95,122,95,57,52,0),String.fromCharCode(118,105,100,101,111,99,111,100,101,99,95,50,95,50,55,0)], [String.fromCharCode(111,105,100,97,110,121,95,52,95,56,49,0),String.fromCharCode(105,112,109,111,118,105,101,95,118,95,52,50,0)]]);
      leakcheckerI += `${parseInt(`${h_managerE}`) * 3}`;
      if (kuaishout) {
         break;
      }
   } while (kuaishout && (linkf.length > leakcheckerI.length));
      zhengpianz *= parseFloat(`${1 * contextj.length}`);
   for (let p = 0; p < 1; p++) {
       let whatsapp9 = 0;
      while (3 >= whatsapp9) {
         whatsapp9 -= whatsapp9;
         break;
      }
         whatsapp9 <<= Math.min(4, Math.abs(whatsapp9 | 1));
       let filln = 3.0;
       let dialogk = 4.0;
      leakcheckerI = `${(String.fromCharCode(86,0) == contextj ? parseInt(`${zhengpianz}`) : contextj.length)}`;
   }
      pauseF -= productM.length * 2;
      h_managerE -= parseFloat(`${parseInt(`${zhengpianz}`)}`);

          RNFetchBlob.fs.unlink(episode.videoPath).catch()
          dispatch(updateVideoDownload(download.vod, episode.vodSourceId, episode.vodUrlNid, {progress: {percentage: 0}, status: MARTextinputBackground.MARGpayMintegral, ffmpegSession: null, sizeInBytes: 0}))
          
        }
      }
    }

    dispatch(resetQueue())
  }
}

export function restartVideoDownloadThunk (
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
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
      status: MARTextinputBackground.MARRewardvideoBell, 
      sizeInBytes: 0
    }))
    dispatch(startVideoDownloadThunk(vod, vodSourceId, vodUrlNid, targetVod.vodIsAdult))
  }
}

export function pauseVideoDownloadThunk (
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
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
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: MARTextinputBackground.MARInjuryModels, ffmpegSession: null}))


    const newState = getState().downloadVideoReducer
    if (newState.queue.length === 0) return
    if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
    dispatch(resumeFirstVideoDownload())
  }
}

function resumeVideoDownloadThunk(
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean,
  ): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
  return async function (dispatch, getState) {
    const initialState = getState().downloadVideoReducer
    const initialPercentage = initialState.downloads
      .find(x => x.vod.vod_id === vod.vod_id)?.episodes
      .find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      ?.progress.percentage; 

    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status:MARTextinputBackground.MARRewardvideoBell}))

    const isAdult = initialState.downloads.find(x => x.vod.vod_id === vod.vod_id)?.vodIsAdult
    const url = getUrlOfVod(vod, vodSourceId, vodUrlNid, isAdult)

    const throttledUpdate = throttle((percentage) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === MARTextinputBackground.MARRewardvideoBell){
       let adult9 = 4.0;
    let textlayoutmanagerJ = 4.0;
    let logoutC: Map<any, any> = new Map([[String.fromCharCode(97,116,117,114,97,116,105,111,110,95,110,95,52,54,0),395], [String.fromCharCode(102,105,108,116,101,114,101,100,95,119,95,50,48,0),392], [String.fromCharCode(114,101,113,117,101,115,116,101,100,95,57,95,53,52,0),251]]);
    let gradlewQ = String.fromCharCode(110,117,108,108,115,95,121,95,50,48,0);
    let libpangleflippedW = String.fromCharCode(99,101,110,116,114,101,95,116,95,49,56,0);
    let castP: Array<any> = [476, 327, 703];
    let filterX = 3.0;
    let videocommon_ = String.fromCharCode(113,95,54,55,95,104,97,110,100,108,101,0);
    let cnewinterstitialu = String.fromCharCode(108,111,117,100,110,111,114,109,95,51,95,52,56,0);
    let close3: Map<any, any> = new Map([[String.fromCharCode(120,95,51,48,95,115,105,110,101,119,105,110,0),937], [String.fromCharCode(119,95,51,50,95,115,105,110,101,115,0),280]]);
    let xvodd = String.fromCharCode(104,97,108,108,95,53,95,55,51,0);
    let disconnectedv = String.fromCharCode(99,95,50,49,95,115,112,101,99,116,114,97,108,0);
       let downloadz = 5.0;
       let updatesJ = String.fromCharCode(97,116,116,114,95,115,95,57,55,0);
       let inactived = 2;
      for (let j = 0; j < 3; j++) {
         updatesJ = "3";
      }
         inactived %= Math.max(updatesJ.length % (Math.max(6, inactived)), 5);
          let arrowu: Array<any> = [824, 563, 819];
          let plus2 = false;
          let mbbannerb: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,105,111,110,95,49,95,55,49,0),String.fromCharCode(107,101,121,112,97,116,104,115,95,103,95,52,54,0)], [String.fromCharCode(105,95,50,95,117,99,108,111,99,107,0),String.fromCharCode(122,95,53,54,95,108,105,98,0)]]);
         downloadz -= parseInt(`${downloadz}`) ^ arrowu.length;
         arrowu = [1];
         plus2 = mbbannerb.size == 79;
         mbbannerb.set(`${plus2}`, (3 + (plus2 ? 3 : 5)));
          let indicatorj = false;
          let textinput0: Map<any, any> = new Map([[String.fromCharCode(99,95,54,56,95,108,111,103,111,117,116,0),false ], [String.fromCharCode(115,112,101,99,105,102,105,101,100,95,54,95,52,48,0),true ], [String.fromCharCode(115,95,49,48,95,101,120,116,109,97,112,0),false ]]);
          let buttonM: Array<any> = [String.fromCharCode(121,95,50,57,95,99,97,99,104,101,102,108,117,115,104,0), String.fromCharCode(111,112,101,110,115,115,108,118,95,102,95,56,55,0), String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,119,95,56,56,0)];
         updatesJ += `${updatesJ.length}`;
         indicatorj = buttonM.length <= 86 && 86 <= textinput0.size;
         textinput0 = new Map([[`${textinput0.size}`, 1]]);
         buttonM = [2 ^ textinput0.size];
          let lessy = String.fromCharCode(115,95,57,56,95,108,111,111,107,0);
         inactived <<= Math.min(1, Math.abs((String.fromCharCode(122,0) == updatesJ ? lessy.length : updatesJ.length)));
      let blacky = downloadz <= 6984594.0;
      do {
          let componentd = String.fromCharCode(113,95,57,51,95,100,110,120,104,100,101,110,99,0);
          let loginR = String.fromCharCode(105,111,101,114,114,110,111,109,101,109,95,100,95,50,55,0);
          let short_w7: Map<any, any> = new Map([[String.fromCharCode(109,105,115,115,101,115,95,98,95,53,51,0),954], [String.fromCharCode(100,99,113,117,97,110,116,95,50,95,55,57,0),413]]);
          let hongkong9 = 3;
          let buttong = 3;
         downloadz /= Math.max(1, 3);
         componentd = `${short_w7.size * loginR.length}`;
         loginR = `${buttong}`;
         short_w7.set(`${buttong}`, hongkong9);
         if (blacky) {
            break;
         }
      } while (blacky && (inactived <= downloadz));
         downloadz /= Math.max(2, 2 << (Math.min(4, Math.abs(parseInt(`${downloadz}`)))));
      for (let h = 0; h < 2; h++) {
         updatesJ = `${(String.fromCharCode(54,0) == updatesJ ? inactived : updatesJ.length)}`;
      }
         updatesJ = `${updatesJ.length | inactived}`;
      libpangleflippedW += `${cnewinterstitialu.length}`;
      libpangleflippedW += `${logoutC.size / (Math.max(8, castP.length))}`;
   while ((parseInt(`${filterX}`) / (Math.max(7, logoutC.size))) <= 3 || 3 <= (parseInt(`${filterX}`) / (Math.max(4, logoutC.size)))) {
      filterX += (parseFloat(`${libpangleflippedW == String.fromCharCode(90,0) ? libpangleflippedW.length : gradlewQ.length}`));
      break;
   }
   for (let c = 0; c < 2; c++) {
       let mbridgeF = String.fromCharCode(100,101,102,105,110,105,116,105,111,110,95,112,95,54,49,0);
      for (let m = 0; m < 2; m++) {
         mbridgeF += `${(String.fromCharCode(69,0) == mbridgeF ? mbridgeF.length : mbridgeF.length)}`;
      }
         mbridgeF = `${mbridgeF.length / (Math.max(3, 4))}`;
      for (let y = 0; y < 2; y++) {
          let encrypt1 = String.fromCharCode(122,111,111,109,105,110,103,95,53,95,53,54,0);
          let basketballW = String.fromCharCode(109,98,117,102,115,95,97,95,54,0);
         mbridgeF += `${basketballW.length}`;
         encrypt1 = `${encrypt1.length}`;
         basketballW = `${encrypt1.length & 3}`;
      }
      textlayoutmanagerJ += parseInt(`${filterX}`);
   }
   for (let a = 0; a < 1; a++) {
      textlayoutmanagerJ -= 1 ^ videocommon_.length;
   }
      gradlewQ = `${parseInt(`${filterX}`) ^ libpangleflippedW.length}`;
   while (3 < (1 / (Math.max(6, castP.length)))) {
      videocommon_ += "2";
      break;
   }

        dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
          progress: {
            percentage: Math.min(initialPercentage + percentage, 100) 
          }
        }))
      }
    }, 2000)
    
    const handleUpdate = ({percentage, bytes}: {percentage?: number, bytes?: number}) => {
      const currentState = getState().downloadVideoReducer.downloads.find(x => x.vod.vod_id === vod.vod_id)?.episodes.find(x => x.vodSourceId === vodSourceId && x.vodUrlNid === vodUrlNid)
      if (currentState?.status === MARTextinputBackground.MARInjuryModels) FFmpegKit.cancel(currentState.ffmpegSession ?? undefined)
      if (percentage !== undefined){
        throttledUpdate(percentage)
      }
    }

    const onDownloadEnd = async () => {
       let screenn = 5;
    let injuryI = 5.0;
    let libglogX: Array<any> = [283, 527, 565];
    let canvasd: Map<any, any> = new Map([[String.fromCharCode(105,95,57,54,95,111,98,118,105,111,117,115,108,121,0),163], [String.fromCharCode(106,95,54,48,95,109,100,112,114,0),929], [String.fromCharCode(121,95,52,56,95,104,102,121,117,0),639]]);
    let expando = 4.0;
    let larged: Array<any> = [String.fromCharCode(107,95,56,57,95,112,114,111,116,111,99,111,108,0), String.fromCharCode(115,95,55,49,95,100,101,108,97,0)];
    let flipperl = 5.0;
    let pauseo = 4.0;
    let textlayoutmanagerv: Array<any> = [String.fromCharCode(102,95,49,54,95,114,101,103,105,115,116,101,114,105,110,103,0), String.fromCharCode(111,95,50,48,95,105,118,102,101,110,99,0)];
    let libyogab = String.fromCharCode(104,105,100,99,116,95,115,95,57,52,0);
    let notificationB = String.fromCharCode(99,95,51,49,95,114,111,117,116,101,115,0);
    let fadfdeebbbfdabbbabdadfaaddaal = 5.0;
    let hiadL = String.fromCharCode(109,117,108,116,105,102,114,97,109,101,95,100,95,57,57,0);
    let attributedstring6: Array<any> = [531, 870, 504];
    let screen6: Map<any, any> = new Map([[String.fromCharCode(97,95,52,53,95,99,111,110,100,101,110,115,97,98,108,101,0),806], [String.fromCharCode(113,95,51,51,0),843]]);
    let soundg = 2.0;
    let mbjscommona = 1.0;
       let modelI = String.fromCharCode(103,97,116,101,95,120,95,56,50,0);
       let zoomr = String.fromCharCode(115,105,110,99,95,101,95,55,52,0);
          let connectiont: Array<any> = [605, 34];
          let colorsA = 2.0;
         modelI += `${connectiont.length}`;
         connectiont = [parseInt(`${colorsA}`)];
       let soundu = 1.0;
       let resendh = 1.0;
       let filledR = 0.0;
       let upgradeW = 2.0;
       let backgroundZ = String.fromCharCode(111,95,52,48,95,108,122,109,97,0);
      for (let p = 0; p < 1; p++) {
         resendh += parseFloat(`${zoomr.length}`);
      }
      let androidS = zoomr.length <= 6148665;
      do {
         zoomr += `${parseInt(`${upgradeW}`)}`;
         if (androidS) {
            break;
         }
      } while ((modelI != zoomr) && androidS);
      screenn |= 1;
   if (libyogab == String.fromCharCode(111,0)) {
      notificationB += `${1 - parseInt(`${fadfdeebbbfdabbbabdadfaaddaal}`)}`;
   }
      libglogX.push(3);
   let gdtadvH = 6701247 >= screenn;
   do {
      screenn /= Math.max(3, 3);
      if (gdtadvH) {
         break;
      }
   } while ((screenn >= 4) && gdtadvH);
       let agreementV = 2.0;
          let cricket3: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,116,99,104,101,100,95,115,95,56,51,0),String.fromCharCode(121,95,55,56,95,119,97,116,99,104,101,114,0)], [String.fromCharCode(98,101,103,105,110,95,101,95,49,52,0),String.fromCharCode(114,95,49,51,95,112,105,120,115,99,111,112,101,0)]]);
         agreementV /= Math.max(5, parseFloat(`${cricket3.size - 2}`));
      let stylesa = agreementV >= 8582797.0;
      do {
         agreementV *= parseFloat(`${parseInt(`${agreementV}`)}`);
         if (stylesa) {
            break;
         }
      } while ((4.10 >= agreementV) && stylesa);
         agreementV += parseFloat(`${parseInt(`${agreementV}`) & 3}`);
      textlayoutmanagerv = [textlayoutmanagerv.length >> (Math.min(Math.abs(3), 1))];
      expando /= Math.max(parseFloat(`${2 << (Math.min(1, larged.length))}`), 4);
      fadfdeebbbfdabbbabdadfaaddaal *= parseFloat(`${parseInt(`${fadfdeebbbfdabbbabdadfaaddaal}`) >> (Math.min(Math.abs(1), 4))}`);
      pauseo /= Math.max(3, screenn);

      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))

      canvasd = new Map([[`${canvasd.size}`, (String.fromCharCode(113,0) == libyogab ? libyogab.length : canvasd.size)]]);
      injuryI *= 1;
      injuryI /= Math.max(2, 1);
      canvasd.set(`${expando}`, parseInt(`${fadfdeebbbfdabbbabdadfaaddaal}`));
      libyogab += `${parseInt(`${injuryI}`) & 1}`;
      larged = [3 | canvasd.size];
       let contextZ = String.fromCharCode(122,95,49,54,95,110,101,105,103,104,98,111,114,0);
       let shirtI = String.fromCharCode(116,95,56,56,95,100,105,121,102,112,0);
         contextZ += `${shirtI.length}`;
         contextZ = `${shirtI.length % 2}`;
      while (contextZ.length == shirtI.length) {
         shirtI = `${shirtI.length + 2}`;
         break;
      }
      for (let g = 0; g < 2; g++) {
         shirtI += `${shirtI.length}`;
      }
         contextZ = `${(String.fromCharCode(69,0) == contextZ ? contextZ.length : shirtI.length)}`;
      for (let p = 0; p < 1; p++) {
          let mutedp = String.fromCharCode(110,95,49,48,95,112,117,116,110,117,109,112,97,115,115,101,115,0);
          let mbbanner8 = String.fromCharCode(101,95,55,50,95,108,105,98,97,118,99,111,100,101,99,0);
          let successB = String.fromCharCode(105,95,56,54,95,115,117,112,112,111,114,116,115,0);
          let modityM = String.fromCharCode(109,101,108,116,95,101,95,53,54,0);
         contextZ = `${shirtI.length << (Math.min(Math.abs(1), 3))}`;
         mutedp = `${2 % (Math.max(8, modityM.length))}`;
         mbbanner8 += "3";
         successB += `${mbbanner8.length}`;
         modityM = `${modityM.length}`;
      }
      flipperl *= parseInt(`${expando}`);
       let othern = 0.0;
       let changeF = String.fromCharCode(109,97,106,95,106,95,55,52,0);
       let libjsinspectorS: Array<any> = [String.fromCharCode(98,105,116,109,97,115,107,95,121,95,54,48,0), String.fromCharCode(117,112,108,111,97,100,97,98,108,101,95,115,95,55,56,0), String.fromCharCode(102,97,118,105,99,111,110,95,116,95,55,49,0)];
      let libyogau = libjsinspectorS.length <= 6584910;
      do {
         libjsinspectorS = [parseInt(`${othern}`)];
         if (libyogau) {
            break;
         }
      } while ((!libjsinspectorS.includes(othern)) && libyogau);
      for (let a = 0; a < 1; a++) {
          let libflipperB = String.fromCharCode(98,95,50,54,95,119,101,108,99,111,109,101,0);
          let stepH = String.fromCharCode(112,95,54,57,95,112,100,102,0);
          let listP = String.fromCharCode(100,115,116,115,117,98,95,102,95,53,50,0);
          let catalogT = String.fromCharCode(111,95,57,53,0);
          let langB = String.fromCharCode(108,95,52,48,95,116,114,105,99,107,108,101,0);
         libjsinspectorS.push(2);
         libflipperB = `${listP.length - libflipperB.length}`;
         stepH = `${listP.length}`;
         catalogT += `${catalogT.length >> (Math.min(Math.abs(1), 4))}`;
         langB += `${(langB == String.fromCharCode(103,0) ? catalogT.length : langB.length)}`;
      }
         changeF = `${1 % (Math.max(3, parseInt(`${othern}`)))}`;
      let clock2 = libjsinspectorS.length >= 5357812;
      do {
          let toponw = String.fromCharCode(109,98,117,102,115,95,110,95,49,54,0);
          let showy: Map<any, any> = new Map([[String.fromCharCode(114,95,51,57,95,97,118,99,105,0),312], [String.fromCharCode(109,95,52,51,95,115,112,97,119,110,97,98,108,101,0),139]]);
         libjsinspectorS = [3];
         toponw += `${showy.size & 3}`;
         showy = new Map([[`${showy.size}`, showy.size | toponw.length]]);
         if (clock2) {
            break;
         }
      } while ((libjsinspectorS.length > 2) && clock2);
          let rewardW = false;
          let baidus = String.fromCharCode(114,101,108,111,97,100,105,110,103,95,118,95,57,56,0);
          let telegramb = String.fromCharCode(115,95,52,55,95,99,111,109,112,108,101,120,105,116,121,0);
         changeF = `${changeF.length}`;
         rewardW = !rewardW;
         baidus = `${telegramb.length}`;
         telegramb = `${telegramb.length << (Math.min(Math.abs(2), 3))}`;
      if ((changeF.length + othern) > 1.87 && 3 > (changeF.length / 4)) {
         changeF += `${changeF.length - parseInt(`${othern}`)}`;
      }
      let bootsplashx = 9075426 <= libjsinspectorS.length;
      do {
         libjsinspectorS = [parseInt(`${othern}`) * changeF.length];
         if (bootsplashx) {
            break;
         }
      } while (((libjsinspectorS.length ^ changeF.length) == 4 || 3 == (4 ^ libjsinspectorS.length)) && bootsplashx);
       let libglogI: Array<any> = [String.fromCharCode(112,97,103,101,114,95,122,95,54,48,0), String.fromCharCode(111,95,52,95,119,105,110,100,111,119,101,100,0)];
       let target2: Array<any> = [456, 905];
      if (othern <= changeF.length) {
         othern += libjsinspectorS.length ^ parseInt(`${othern}`);
      }
      flipperl *= attributedstring6.length % 1;
      const newState = getState().downloadVideoReducer

       let sportf = String.fromCharCode(108,95,57,49,95,99,117,114,0);
       let constants4 = String.fromCharCode(112,95,57,49,95,101,113,117,97,108,0);
       let moong = String.fromCharCode(114,103,98,95,51,95,49,48,0);
          let assist7 = true;
          let handlery = false;
         sportf += `${moong.length}`;
         assist7 = (!assist7 ? assist7 : assist7);
         handlery = assist7;
      while (moong.endsWith(constants4)) {
         moong += "2";
         break;
      }
         moong += `${sportf.length << (Math.min(Math.abs(3), 4))}`;
         sportf = `${sportf.length / (Math.max(3, constants4.length))}`;
         constants4 += `${moong.length + constants4.length}`;
         constants4 = `${moong.length >> (Math.min(Math.abs(2), 1))}`;
      while (4 <= sportf.length) {
         constants4 = `${moong.length * 3}`;
         break;
      }
      for (let q = 0; q < 2; q++) {
         sportf += `${3 + moong.length}`;
      }
      while (!constants4.startsWith(`${moong.length}`)) {
          let s_positionL = 0;
         constants4 = `${moong.length}`;
         s_positionL >>= Math.min(Math.abs(s_positionL / (Math.max(s_positionL, 3))), 4);
         break;
      }
      canvasd.set(sportf, sportf.length);
      flipperl -= notificationB.length / (Math.max(2, 5));
       let statisticsZ: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,52,95,50,52,0),String.fromCharCode(120,95,53,51,95,116,105,109,101,117,116,105,108,115,0)], [String.fromCharCode(110,95,55,50,95,100,105,115,97,98,108,101,114,0),String.fromCharCode(103,114,97,110,116,95,116,95,54,56,0)], [String.fromCharCode(114,101,118,111,107,105,110,103,95,50,95,53,48,0),String.fromCharCode(104,95,51,51,95,97,117,116,104,105,110,102,111,0)]]);
       let zoomp = String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,111,95,49,53,0);
         zoomp += "2";
         statisticsZ = new Map([[`${statisticsZ.size}`, (String.fromCharCode(50,0) == zoomp ? statisticsZ.size : zoomp.length)]]);
      if (2 > (zoomp.length / 4)) {
         statisticsZ.set(zoomp, zoomp.length);
      }
      if (!zoomp.endsWith(`${statisticsZ.size}`)) {
         zoomp += `${zoomp.length}`;
      }
         zoomp = `${1 % (Math.max(8, zoomp.length))}`;
         zoomp = `${statisticsZ.size}`;
      notificationB = `${parseInt(`${fadfdeebbbfdabbbabdadfaaddaal}`)}`;
   if (hiadL.includes(`${expando}`)) {
       let vietnamw = String.fromCharCode(104,95,57,95,121,117,118,103,98,114,112,0);
       let temperatureb = 3.0;
       let resendha = String.fromCharCode(103,95,51,52,95,101,109,117,108,97,116,101,0);
       let watchI = 3.0;
       let interstitiali = 3;
          let toponl = String.fromCharCode(98,95,54,54,95,99,111,108,108,101,99,116,105,111,110,0);
          let subsJ = String.fromCharCode(105,95,56,95,115,116,97,116,117,115,111,114,0);
         vietnamw = `${parseInt(`${watchI}`)}`;
         toponl += `${(String.fromCharCode(72,0) == subsJ ? subsJ.length : toponl.length)}`;
         resendha += `${parseInt(`${watchI}`)}`;
      while (2 >= (vietnamw.length << (Math.min(Math.abs(5), 1))) || 5 >= (vietnamw.length * 5)) {
         vietnamw = `${(resendha == String.fromCharCode(112,0) ? vietnamw.length : resendha.length)}`;
         break;
      }
         temperatureb /= Math.max(parseFloat(`${resendha.length}`), 2);
       let anytime_: Array<any> = [294, 469];
          let debugQ = String.fromCharCode(107,95,56,50,95,98,97,111,98,97,98,0);
          let showyQ: Map<any, any> = new Map([[String.fromCharCode(107,95,56,49,95,98,97,99,107,103,114,111,117,110,100,105,110,103,0),false ], [String.fromCharCode(113,95,53,49,95,97,118,97,115,115,101,114,116,0),false ]]);
          let downloadY = false;
         vietnamw += "3";
         debugQ = `${showyQ.size}`;
         showyQ.set(`${downloadY}`, (3 % (Math.max(3, (downloadY ? 4 : 4)))));
      let clockL = 9056602 <= interstitiali;
      do {
         interstitiali |= anytime_.length ^ 2;
         if (clockL) {
            break;
         }
      } while (clockL && (4 < anytime_.length));
         interstitiali %= Math.max(parseInt(`${watchI}`) / 2, 3);
       let termsA = 5;
       let formS = 3;
          let manifest8 = 3;
         resendha = `${1 ^ parseInt(`${temperatureb}`)}`;
         manifest8 -= 2 << (Math.min(5, Math.abs(manifest8)));
         anytime_ = [interstitiali - formS];
         watchI *= 3 >> (Math.min(Math.abs(parseInt(`${temperatureb}`)), 2));
         watchI *= 2;
         interstitiali -= interstitiali;
      for (let i = 0; i < 2; i++) {
          let nextB: Map<any, any> = new Map([[String.fromCharCode(102,95,51,51,95,112,116,115,101,115,0),236], [String.fromCharCode(109,111,99,107,101,100,95,99,95,49,48,0),550]]);
          let scrollview0 = String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,114,95,54,50,0);
          let launchF: Map<any, any> = new Map([[String.fromCharCode(102,95,57,56,95,97,99,108,114,0),204], [String.fromCharCode(121,95,56,54,95,99,104,97,110,103,101,114,101,102,0),512], [String.fromCharCode(111,95,52,57,95,115,97,109,101,0),469]]);
          let unimplementedview2 = 2;
         termsA %= Math.max(nextB.size + 1, 1);
         nextB = new Map([[`${launchF.size}`, launchF.size]]);
         scrollview0 += `${launchF.size}`;
         unimplementedview2 %= Math.max(3, 3);
      }
      hiadL = `${parseInt(`${injuryI}`) | 3}`;
   }
      screenn <<= Math.min(Math.abs(attributedstring6.length | libyogab.length), 5);
   while (5 <= notificationB.length) {
      injuryI += parseInt(`${flipperl}`);
      break;
   }
   if (!libyogab.startsWith(`${libglogX.length}`)) {
      libyogab += "3";
   }
       let injury1 = String.fromCharCode(104,95,54,51,95,101,110,99,111,100,97,98,108,101,0);
      if (injury1 != String.fromCharCode(112,0)) {
         injury1 = `${injury1.length | injury1.length}`;
      }
      while (injury1 != String.fromCharCode(54,0) && injury1.length < 2) {
         injury1 = `${1 - injury1.length}`;
         break;
      }
       let mbsplashg = String.fromCharCode(99,121,117,118,95,97,95,53,55,0);
       let mail6 = String.fromCharCode(99,95,54,51,95,103,101,116,116,105,109,101,0);
      injuryI += 3;
      if (newState.queue.length === 0) return
      if (newState.currentDownloading.length >= MAX_CONCURRENT_VIDEO_DOWNLOAD) return
      dispatch(resumeFirstVideoDownload())
      
    }

    const handleError = () => {
       let clearE: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,98,111,100,121,95,48,95,50,49,0),String.fromCharCode(107,95,56,50,95,103,101,116,0)], [String.fromCharCode(100,101,112,108,111,121,95,107,95,53,49,0),String.fromCharCode(98,95,51,52,95,99,114,108,115,0)], [String.fromCharCode(112,114,105,109,97,114,121,95,119,95,49,55,0),String.fromCharCode(107,95,49,48,48,95,102,116,118,108,105,110,107,0)]]);
    let window_zQ = String.fromCharCode(105,95,56,54,95,115,119,97,112,121,118,98,117,102,102,101,114,0);
    let listp: Array<any> = [454, 934, 122];
    let stepZ = String.fromCharCode(99,105,112,104,101,114,95,113,95,54,57,0);
    let malaysia0 = String.fromCharCode(112,95,56,48,95,101,108,97,112,115,101,100,0);
    let valuesM = 1.0;
    let inactiveg = 3.0;
    let overlays: Map<any, any> = new Map([[String.fromCharCode(117,95,52,95,100,105,100,0),String.fromCharCode(110,111,104,101,97,100,101,114,95,110,95,57,49,0)], [String.fromCharCode(108,95,54,51,95,117,110,101,115,99,97,112,101,0),String.fromCharCode(98,95,55,49,95,118,105,111,108,101,116,0)]]);
    let heji3 = false;
    let transferA: Array<any> = [496, 777];
    let graphv = true;
    let episodey = String.fromCharCode(97,95,56,56,95,109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0);
    let typingP: Array<any> = [String.fromCharCode(120,95,50,50,95,111,111,108,98,97,114,0), String.fromCharCode(122,95,49,56,95,114,111,111,109,0), String.fromCharCode(112,101,114,95,117,95,55,49,0)];
    let tick2 = String.fromCharCode(108,101,116,116,101,114,95,105,95,56,54,0);
    let refreshB = 2.0;
      clearE = new Map([[window_zQ, window_zQ.length]]);
   while (malaysia0.length > 5) {
       let cornerh = true;
       let phonet = String.fromCharCode(110,95,55,54,95,97,100,97,112,116,0);
       let bodanP = true;
       let zhubo1 = 3.0;
         cornerh = phonet.length == 93;
         cornerh = bodanP && cornerh;
      while (zhubo1 >= 3.57) {
         zhubo1 -= (parseFloat(`${phonet == String.fromCharCode(52,0) ? phonet.length : (bodanP ? 2 : 1)}`));
         break;
      }
      if ((zhubo1 + 5.49) <= 1.28 || 5.49 <= zhubo1) {
         bodanP = 9.27 <= zhubo1;
      }
      let settingsF = bodanP ? !bodanP : bodanP;
      do {
          let tickZ = String.fromCharCode(116,111,108,101,114,97,110,99,101,95,117,95,55,49,0);
         bodanP = !bodanP && phonet.length <= 81;
         tickZ = `${tickZ.length & 2}`;
         if (settingsF) {
            break;
         }
      } while ((zhubo1 <= 3.10) && settingsF);
       let libflipperm = 3.0;
       let untickH = true;
       let righty = true;
          let controlsH = 1;
          let time_1U = String.fromCharCode(116,97,98,108,101,105,110,105,116,95,98,95,49,48,0);
          let combiner = String.fromCharCode(100,105,115,112,97,116,99,104,95,50,95,50,54,0);
         cornerh = phonet.length > 79 && !untickH;
         controlsH ^= controlsH;
         time_1U += "1";
         combiner += "3";
          let phoneM = 3;
         cornerh = !cornerh || righty;
         phoneM ^= phoneM >> (Math.min(Math.abs(1), 5));
         cornerh = !bodanP && righty;
          let libsgcoreI = String.fromCharCode(122,95,55,49,95,119,109,97,112,114,111,0);
          let hejis: Array<any> = [742, 859, 25];
         righty = ((hejis.length << (Math.min(3, Math.abs((!cornerh ? 79 : hejis.length))))) == 79);
         libsgcoreI += `${2 | libsgcoreI.length}`;
      let huaweiu = libflipperm <= 9663713.0;
      do {
          let aboutz = 4;
         libflipperm += parseFloat(`${1 % (Math.max(9, parseInt(`${zhubo1}`)))}`);
         aboutz &= aboutz | 2;
         if (huaweiu) {
            break;
         }
      } while (((phonet.length << (Math.min(Math.abs(4), 2))) <= 1) && huaweiu);
      malaysia0 = `${window_zQ.length << (Math.min(3, listp.length))}`;
      break;
   }
   let mbnative9 = graphv ? !graphv : graphv;
   do {
      graphv = clearE.size > 42;
      if (mbnative9) {
         break;
      }
   } while ((stepZ.length >= 5) && mbnative9);

      

      graphv = stepZ == String.fromCharCode(120,0);
      heji3 = 44 <= window_zQ.length;
   for (let v = 0; v < 2; v++) {
       let libjsi_ = String.fromCharCode(108,95,56,51,95,100,97,118,115,0);
       let controlp: Array<any> = [String.fromCharCode(109,95,54,57,95,101,110,116,101,114,101,100,0), String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,56,95,52,52,0), String.fromCharCode(117,110,105,119,103,116,95,119,95,55,50,0)];
       let detailY = String.fromCharCode(119,95,49,95,98,101,103,105,110,0);
       let mbbanner8 = 1.0;
       let libloggerp = 2;
       let armvaR = 0.0;
       let small7 = 2.0;
      let crown5 = 7852624.0 <= armvaR;
      do {
         armvaR /= Math.max(2, parseInt(`${small7}`) % 3);
         if (crown5) {
            break;
         }
      } while ((1.7 > (4.20 - armvaR) || 3.90 > (4.20 - armvaR)) && crown5);
          let become5: Array<any> = [421, 592, 597];
         small7 /= Math.max(4, libloggerp & 3);
         become5.push(become5.length >> (Math.min(1, become5.length)));
         libjsi_ = "1";
      for (let m = 0; m < 1; m++) {
         controlp.push(controlp.length);
      }
      let basketball5 = 9695578 >= controlp.length;
      do {
          let over_ = String.fromCharCode(113,95,57,50,95,112,101,99,101,110,116,0);
          let backgroundu: Array<any> = [560, 980];
          let schedulerW: Array<any> = [805, 326, 63];
          let sentryW = String.fromCharCode(121,95,51,53,95,112,108,97,121,0);
         controlp.push(3 % (Math.max(9, schedulerW.length)));
         over_ += `${over_.length}`;
         backgroundu = [over_.length];
         schedulerW = [backgroundu.length << (Math.min(Math.abs(2), 5))];
         sentryW = `${sentryW.length}`;
         if (basketball5) {
            break;
         }
      } while (basketball5 && ((parseFloat(`${controlp.length}`) - mbbanner8) >= 1.14 && (1.14 - mbbanner8) >= 1.5));
         mbbanner8 += parseFloat(`${3}`);
      let with_59b = 5886384.0 >= small7;
      do {
         small7 -= libjsi_.length;
         if (with_59b) {
            break;
         }
      } while ((armvaR <= 5.47) && with_59b);
          let langkeyg = String.fromCharCode(101,100,105,116,105,110,103,95,109,95,54,0);
         controlp = [libloggerp | 3];
         langkeyg += `${langkeyg.length}`;
          let iconw: Array<any> = [533, 897];
          let rewindT = 1.0;
         libjsi_ = `${libjsi_.length}`;
         iconw = [parseInt(`${rewindT}`) + 3];
         rewindT += 1;
         libloggerp %= Math.max(1, libjsi_.length);
      let countdownP = armvaR >= 5085145.0;
      do {
          let colorsL = false;
          let mbbidU: Map<any, any> = new Map([[String.fromCharCode(101,95,52,50,95,115,105,103,109,97,0),919], [String.fromCharCode(98,95,56,48,95,100,101,105,110,116,101,114,108,97,99,101,0),712]]);
          let libcrashsdkN = String.fromCharCode(121,95,51,50,95,115,99,114,97,112,101,0);
          let default_4m = true;
         armvaR -= 1 << (Math.min(2, libjsi_.length));
         colorsL = default_4m && libcrashsdkN.length > 68;
         mbbidU = new Map([[`${mbbidU.size}`, 1]]);
         libcrashsdkN = "2";
         if (countdownP) {
            break;
         }
      } while (((2 * small7) == 5.40) && countdownP);
      if ((parseInt(`${mbbanner8}`) * controlp.length) > 5) {
         mbbanner8 *= parseFloat(`${parseInt(`${small7}`) + 3}`);
      }
         controlp.push(3);
      let armvaD = 5890678.0 <= mbbanner8;
      do {
          let delegate_lfx = 5.0;
          let crossv: Map<any, any> = new Map([[String.fromCharCode(108,95,50,50,95,114,101,115,116,0),581], [String.fromCharCode(118,111,105,100,95,99,95,52,52,0),714], [String.fromCharCode(119,95,56,56,95,110,111,111,112,0),247]]);
          let mintegralF = String.fromCharCode(97,95,49,53,95,109,97,120,107,101,121,115,105,122,101,0);
          let connectionl = String.fromCharCode(98,105,116,114,97,116,101,115,95,110,95,55,55,0);
         mbbanner8 *= parseFloat(`${3}`);
         delegate_lfx += parseFloat(`${1 & parseInt(`${delegate_lfx}`)}`);
         crossv = new Map([[mintegralF, 3]]);
         mintegralF = `${(mintegralF == String.fromCharCode(104,0) ? crossv.size : mintegralF.length)}`;
         connectionl = "2";
         if (armvaD) {
            break;
         }
      } while ((small7 >= mbbanner8) && armvaD);
      listp.push(parseInt(`${mbbanner8}`));
   }
      const state = getState().downloadVideoReducer

   if (!episodey.includes(`${overlays.size}`)) {
      episodey += `${stepZ.length}`;
   }
       let lessh = String.fromCharCode(104,97,114,100,99,111,100,101,100,95,54,95,56,56,0);
       let sharen = true;
          let projectq: Array<any> = [String.fromCharCode(113,95,54,51,95,100,105,115,112,111,115,97,108,0), String.fromCharCode(99,111,110,110,101,99,116,105,110,103,95,110,95,49,52,0)];
          let classesm = String.fromCharCode(122,95,54,56,95,114,101,112,111,114,116,115,0);
          let photod = 2;
         sharen = classesm.startsWith(`${photod}`);
         projectq.push(projectq.length);
         classesm += `${1 * projectq.length}`;
         lessh += `${((sharen ? 1 : 2))}`;
          let componentregistry4 = true;
         sharen = lessh.endsWith(`${sharen}`);
         componentregistry4 = (!componentregistry4 ? componentregistry4 : !componentregistry4);
          let render2: Array<any> = [String.fromCharCode(100,118,118,105,100,101,111,95,112,95,56,54,0), String.fromCharCode(101,95,55,55,95,99,111,109,98,105,110,101,114,0)];
          let textinputY = 1.0;
         lessh += "1";
         render2 = [parseInt(`${textinputY}`) - 3];
         textinputY /= Math.max(4, render2.length >> (Math.min(5, Math.abs(parseInt(`${textinputY}`)))));
       let castingq: Map<any, any> = new Map([[String.fromCharCode(117,118,114,100,95,101,95,53,0),String.fromCharCode(113,95,51,54,95,106,111,117,114,110,97,108,110,97,109,101,0)], [String.fromCharCode(119,95,50,54,95,107,116,111,112,0),String.fromCharCode(97,95,56,48,95,112,114,101,115,101,110,99,101,0)], [String.fromCharCode(102,95,50,57,95,117,110,112,114,111,99,101,115,115,101,100,0),String.fromCharCode(98,101,110,105,103,110,95,106,95,55,52,0)]]);
       let eighteen7: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,101,114,115,95,52,95,53,53,0),String.fromCharCode(111,110,101,99,104,95,120,95,54,49,0)], [String.fromCharCode(121,95,56,51,95,115,116,105,99,107,101,114,112,97,99,107,0),String.fromCharCode(118,105,101,119,101,100,95,97,95,56,52,0)]]);
          let stringsb = String.fromCharCode(106,95,50,48,95,101,118,101,114,121,111,110,101,0);
          let rulesE = false;
         eighteen7 = new Map([[`${sharen}`, (String.fromCharCode(81,0) == lessh ? (sharen ? 1 : 2) : lessh.length)]]);
         stringsb = `${stringsb.length & 1}`;
         rulesE = stringsb.includes(`${rulesE}`);
      transferA.push(overlays.size << (Math.min(Math.abs(3), 1)));
       let hiadQ = String.fromCharCode(113,95,55,57,95,103,117,97,114,97,110,116,101,101,115,0);
       let sortf = String.fromCharCode(118,95,51,57,95,112,97,99,107,101,116,101,100,0);
       let borderlessD = String.fromCharCode(101,120,112,108,111,114,101,114,95,108,95,54,48,0);
          let confirmationw = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,54,95,53,48,0);
          let malaysiaf = String.fromCharCode(111,95,51,57,95,105,100,101,110,116,105,116,105,101,115,0);
          let taiwane = 0.0;
         hiadQ = `${1 << (Math.min(3, confirmationw.length))}`;
         confirmationw += `${parseInt(`${taiwane}`)}`;
         malaysiaf = `${2 - parseInt(`${taiwane}`)}`;
         hiadQ += `${2 / (Math.max(3, sortf.length))}`;
      while (2 > borderlessD.length) {
         sortf = `${(borderlessD == String.fromCharCode(111,0) ? hiadQ.length : borderlessD.length)}`;
         break;
      }
      let e_lockm = 7891951 >= hiadQ.length;
      do {
         hiadQ += `${hiadQ.length ^ borderlessD.length}`;
         if (e_lockm) {
            break;
         }
      } while ((borderlessD.length >= hiadQ.length) && e_lockm);
         hiadQ += `${3 >> (Math.min(5, hiadQ.length))}`;
         borderlessD += "2";
         borderlessD += `${hiadQ.length / 2}`;
         hiadQ = `${borderlessD.length}`;
      let rewindo = 5206298 >= hiadQ.length;
      do {
          let with_aD = 0.0;
          let time_9J = false;
         hiadQ += `${borderlessD.length * 3}`;
         with_aD += parseFloat(`${parseInt(`${with_aD}`) & 1}`);
         time_9J = (with_aD * with_aD) == 25.23;
         if (rewindo) {
            break;
         }
      } while ((hiadQ.length <= sortf.length) && rewindo);
      overlays = new Map([[`${transferA.length}`, 1 + transferA.length]]);
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)

   let lessR = 9281567.0 <= valuesM;
   do {
      valuesM *= 3 % (Math.max(parseInt(`${inactiveg}`), 4));
      if (lessR) {
         break;
      }
   } while (lessR && (inactiveg < valuesM));
   let updatest = malaysia0.length <= 9161138;
   do {
      malaysia0 = "1";
      if (updatest) {
         break;
      }
   } while ((malaysia0.length > 3) && updatest);
       let libavdevicei = String.fromCharCode(114,95,50,95,97,110,105,109,97,116,105,110,103,0);
       let dycreatorh: Map<any, any> = new Map([[String.fromCharCode(115,101,116,117,112,100,95,122,95,55,56,0),String.fromCharCode(99,117,98,101,100,95,113,95,49,50,0)], [String.fromCharCode(121,95,54,57,95,116,105,100,121,0),String.fromCharCode(109,95,55,52,95,116,105,112,115,0)]]);
       let qnewinterstitialb = String.fromCharCode(116,105,109,101,115,116,97,109,112,95,121,95,57,51,0);
       let type_yt = 3;
       let libfbs = 3;
      let type_oR = String.fromCharCode(53,106,51,0) == libavdevicei;
      do {
         libavdevicei = `${2 + dycreatorh.size}`;
         if (type_oR) {
            break;
         }
      } while ((libavdevicei.length <= 1) && type_oR);
         libfbs %= Math.max(4, libavdevicei.length + dycreatorh.size);
         type_yt ^= type_yt - 2;
      for (let d = 0; d < 2; d++) {
         dycreatorh.set(`${libfbs}`, dycreatorh.size - libfbs);
      }
         libfbs %= Math.max(dycreatorh.size / (Math.max(libavdevicei.length, 7)), 3);
      for (let n = 0; n < 3; n++) {
          let yellowB = String.fromCharCode(97,98,105,95,100,95,54,56,0);
          let emptyB = String.fromCharCode(110,95,53,55,95,117,100,112,0);
          let catalogp = 2.0;
          let animationsu = 5.0;
          let save9: Array<any> = [157, 105, 253];
         type_yt -= parseInt(`${animationsu}`) >> (Math.min(save9.length, 5));
         yellowB = `${parseInt(`${catalogp}`)}`;
         emptyB = `${parseInt(`${catalogp}`)}`;
         animationsu /= Math.max(5, parseFloat(`${emptyB.length}`));
         save9 = [parseInt(`${catalogp}`) * 3];
      }
      if ((3 ^ type_yt) > 3 && (qnewinterstitialb.length ^ 3) > 3) {
         type_yt %= Math.max(1, qnewinterstitialb.length % (Math.max(10, type_yt)));
      }
      while (3 == (2 ^ libfbs)) {
          let textu = 4;
          let circleA = 4.0;
          let gesturesH = String.fromCharCode(104,95,49,48,48,95,110,116,101,114,102,97,99,101,0);
          let commonr = 4;
         qnewinterstitialb += `${gesturesH.length}`;
         textu += commonr & parseInt(`${circleA}`);
         circleA -= parseFloat(`${commonr | 3}`);
         gesturesH = `${commonr ^ parseInt(`${circleA}`)}`;
         break;
      }
      stepZ += `${(malaysia0 == String.fromCharCode(65,0) ? malaysia0.length : typingP.length)}`;
      if (!targetEpisode) return
      if (targetEpisode?.status === MARTextinputBackground.MARInjuryModels){

   if (overlays.size > 4 && 1 > (overlays.size % 4)) {
      overlays.set(`${valuesM}`, parseInt(`${valuesM}`) | 1);
   }
   while ((5 & window_zQ.length) > 1 || 3 > (window_zQ.length & 5)) {
       let schedules = String.fromCharCode(121,95,50,55,95,102,114,97,109,101,104,97,115,104,0);
      if (schedules.includes(schedules)) {
         schedules = `${schedules.length - schedules.length}`;
      }
      for (let z = 0; z < 2; z++) {
         schedules += `${2 - schedules.length}`;
      }
         schedules += "2";
      transferA.push(1);
      break;
   }
      typingP = [parseInt(`${inactiveg}`) | listp.length];
        return 
      }
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
        status: MARTextinputBackground.MARGpayMintegral
      }))

       let textlayoutmanagerC = 5;
      while (1 == (textlayoutmanagerC >> (Math.min(2, Math.abs(textlayoutmanagerC)))) || (textlayoutmanagerC >> (Math.min(Math.abs(textlayoutmanagerC), 5))) == 1) {
          let circlev = 4.0;
          let floating7 = String.fromCharCode(102,119,104,116,95,110,95,56,50,0);
         textlayoutmanagerC /= Math.max(2 ^ parseInt(`${circlev}`), 1);
         circlev *= parseFloat(`${floating7.length}`);
         floating7 = `${floating7.length}`;
         break;
      }
      let bdxadsdkJ = 5714179 >= textlayoutmanagerC;
      do {
         textlayoutmanagerC >>= Math.min(5, Math.abs(textlayoutmanagerC | 3));
         if (bdxadsdkJ) {
            break;
         }
      } while (((1 + textlayoutmanagerC) == 4 && 3 == (textlayoutmanagerC + 1)) && bdxadsdkJ);
         textlayoutmanagerC %= Math.max(2, 3 >> (Math.min(3, Math.abs(textlayoutmanagerC))));
      graphv = overlays.size == 62;
   for (let o = 0; o < 1; o++) {
      episodey = `${clearE.size}`;
   }
   for (let y = 0; y < 2; y++) {
      inactiveg += parseFloat(`${clearE.size}`);
   }


      const targetVod = state.downloads.find(download => download.vod.vod_id === vod.vod_id)

      episodey += `${parseInt(`${inactiveg}`) | 3}`;
       let networkN = 4.0;
         networkN -= parseFloat(`${parseInt(`${networkN}`)}`);
       let dataa = 3;
      for (let y = 0; y < 1; y++) {
         networkN /= Math.max(5, parseFloat(`${1}`));
      }
      clearE = new Map([[`${clearE.size}`, (stepZ == String.fromCharCode(80,0) ? clearE.size : stepZ.length)]]);
      listp.push(malaysia0.length);
      if (!targetVod) return 
      const partialPath = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${vod.vod_id}-${vodSourceId}-${vodUrlNid}`
      RNFetchBlob.fs.unlink(targetEpisode.videoPath).catch(err => {})
      RNFetchBlob.fs.unlink(partialPath).catch(err => {})

   let analytics_ = 9587803.0 >= valuesM;
   do {
       let combinedB = String.fromCharCode(105,95,52,55,95,119,104,101,110,0);
          let logoutl = String.fromCharCode(116,95,53,55,95,113,116,115,0);
          let n_center6 = String.fromCharCode(116,97,98,95,97,95,55,52,0);
         combinedB = "2";
         logoutl = `${(logoutl == String.fromCharCode(50,0) ? logoutl.length : n_center6.length)}`;
         n_center6 = `${logoutl.length}`;
      let uimanagerf = combinedB == String.fromCharCode(120,122,114,51,99,48,0);
      do {
         combinedB = "3";
         if (uimanagerf) {
            break;
         }
      } while ((combinedB.includes(`${combinedB.length}`)) && uimanagerf);
          let tooltipsu: Array<any> = [715, 932];
         combinedB += `${(combinedB == String.fromCharCode(104,0) ? tooltipsu.length : combinedB.length)}`;
      valuesM += ((heji3 ? 2 : 4) - 3);
      if (analytics_) {
         break;
      }
   } while ((1.11 <= (2.28 * valuesM) || (parseInt(`${valuesM}`) * typingP.length) <= 3) && analytics_);
       let formM = String.fromCharCode(98,95,50,95,114,97,116,105,110,103,0);
       let libreactnativeblobI = String.fromCharCode(116,101,115,116,101,114,95,57,95,51,57,0);
       let q_viewf: Map<any, any> = new Map([[String.fromCharCode(100,101,99,107,108,105,110,107,95,52,95,50,57,0),293], [String.fromCharCode(105,95,56,52,95,112,114,101,112,97,114,105,110,103,0),479]]);
       let sinaV: Map<any, any> = new Map([[String.fromCharCode(97,95,55,57,95,110,111,116,104,101,108,100,0),false ], [String.fromCharCode(109,95,52,54,95,100,111,101,115,0),false ]]);
          let bootsplashM: Map<any, any> = new Map([[String.fromCharCode(102,97,114,95,107,95,53,54,0),String.fromCharCode(99,95,49,95,118,105,101,119,0)], [String.fromCharCode(97,100,100,101,100,95,100,95,55,55,0),String.fromCharCode(120,95,51,49,95,97,115,111,108,117,116,101,0)]]);
         libreactnativeblobI = `${libreactnativeblobI.length << (Math.min(3, Math.abs(q_viewf.size)))}`;
         bootsplashM = new Map([[`${bootsplashM.size}`, 1]]);
         libreactnativeblobI += `${formM.length}`;
         sinaV.set(libreactnativeblobI, libreactnativeblobI.length);
         formM += `${2 << (Math.min(3, formM.length))}`;
          let switch_ilN: Array<any> = [832, 441, 397];
          let playercommonP = 3.0;
          let default_wxu = String.fromCharCode(115,95,55,55,95,109,112,100,98,0);
         q_viewf.set(default_wxu, 1);
         switch_ilN.push(parseInt(`${playercommonP}`) / (Math.max(switch_ilN.length, 8)));
         playercommonP /= Math.max(parseFloat(`${parseInt(`${playercommonP}`)}`), 1);
         default_wxu += "2";
      while (libreactnativeblobI.startsWith(`${formM.length}`)) {
          let applicationh = 5.0;
          let catalogJ = 3.0;
         formM += `${q_viewf.size / 2}`;
         applicationh -= parseFloat(`${parseInt(`${catalogJ}`) * parseInt(`${applicationh}`)}`);
         catalogJ -= parseInt(`${applicationh}`);
         break;
      }
      let textlayoutmanagerL = sinaV.size <= 5209329;
      do {
         sinaV.set(`${formM}`, 2);
         if (textlayoutmanagerL) {
            break;
         }
      } while (textlayoutmanagerL && ((2 - sinaV.size) >= 4 && 3 >= (sinaV.size - 2)));
          let userk = false;
         q_viewf = new Map([[`${q_viewf.size}`, 2 - q_viewf.size]]);
         userk = !userk;
      listp.push(malaysia0.length);
   for (let m = 0; m < 3; m++) {
       let libyogaW = String.fromCharCode(105,112,109,111,118,105,101,95,51,95,51,49,0);
       let scrollvieww = false;
       let libreactnativejnig: Array<any> = [681, 878, 307];
       let q_titlea = String.fromCharCode(108,97,117,110,99,104,95,108,95,55,49,0);
       let foregroundj = String.fromCharCode(100,95,52,51,95,115,99,104,101,100,117,108,101,100,0);
      if (!q_titlea.endsWith(`${scrollvieww}`)) {
          let telemetryl = String.fromCharCode(110,97,118,105,103,97,116,111,114,95,114,95,55,0);
          let libjsijniprofilerb = false;
          let tumbnailm = String.fromCharCode(100,95,51,57,95,110,108,115,116,0);
         q_titlea += "3";
         telemetryl = `${tumbnailm.length << (Math.min(telemetryl.length, 2))}`;
         libjsijniprofilerb = tumbnailm.length <= 16 || 16 <= telemetryl.length;
      }
      if (libyogaW.startsWith(`${libreactnativejnig.length}`)) {
          let china3 = 1;
          let scoreq: Map<any, any> = new Map([[String.fromCharCode(98,95,49,57,95,108,105,102,116,0),true ], [String.fromCharCode(97,95,51,95,114,101,97,108,108,121,0),false ], [String.fromCharCode(100,95,56,57,95,97,115,112,101,99,116,115,0),true ]]);
          let ksadO = true;
          let verticalb = 3.0;
         libyogaW += `${china3}`;
         china3 &= 3;
         scoreq.set(`${verticalb}`, parseInt(`${verticalb}`) | scoreq.size);
         ksadO = verticalb <= 3.58;
      }
      for (let m = 0; m < 3; m++) {
         scrollvieww = libyogaW.length <= 95;
      }
       let codegent: Array<any> = [String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,99,95,54,52,0), String.fromCharCode(121,95,53,55,95,112,97,99,107,101,116,111,117,116,0), String.fromCharCode(115,104,111,114,116,108,121,95,106,95,56,56,0)];
       let dragd: Array<any> = [534, 63];
      if (2 > (codegent.length + 4)) {
         codegent = [1 ^ dragd.length];
      }
         libreactnativejnig.push((String.fromCharCode(101,0) == foregroundj ? codegent.length : foregroundj.length));
      for (let l = 0; l < 1; l++) {
         scrollvieww = (codegent.length * dragd.length) > 87;
      }
      if (foregroundj.length < 2) {
         q_titlea = `${(libyogaW == String.fromCharCode(85,0) ? (scrollvieww ? 4 : 5) : libyogaW.length)}`;
      }
      while (q_titlea.length < codegent.length) {
          let klevinc: Map<any, any> = new Map([[String.fromCharCode(115,116,114,111,107,101,100,95,118,95,51,51,0),String.fromCharCode(108,95,49,48,95,115,116,116,115,0)], [String.fromCharCode(105,95,53,54,95,116,114,105,99,107,108,101,0),String.fromCharCode(108,105,99,101,110,115,101,95,103,95,52,50,0)], [String.fromCharCode(115,95,51,51,95,112,105,99,116,117,114,101,0),String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,106,95,57,52,0)]]);
          let fieldH = String.fromCharCode(116,111,117,99,104,101,100,95,111,95,51,0);
         q_titlea += `${fieldH.length << (Math.min(Math.abs(2), 2))}`;
         klevinc.set(`${klevinc.size}`, klevinc.size);
         fieldH = "1";
         break;
      }
      for (let y = 0; y < 1; y++) {
         dragd.push(((scrollvieww ? 4 : 1) & 1));
      }
         foregroundj = `${libreactnativejnig.length}`;
         scrollvieww = 77 <= libreactnativejnig.length;
      while (scrollvieww) {
          let contextS = String.fromCharCode(109,95,57,54,95,116,114,97,102,0);
          let runtimek = false;
         scrollvieww = libyogaW.length < dragd.length;
         contextS += `${contextS.length & 2}`;
         runtimek = runtimek || contextS.length >= 67;
         break;
      }
       let linkc: Map<any, any> = new Map([[String.fromCharCode(100,95,54,48,95,114,101,118,101,114,116,0),677], [String.fromCharCode(103,95,51,56,95,116,104,105,114,100,0),793]]);
      while (q_titlea == libyogaW) {
         libyogaW = `${libreactnativejnig.length | 2}`;
         break;
      }
      transferA = [2];
   }
      onDownloadEnd()
    }

    const handleComplete = (finalSizeInBytes: number) => {
      const state = getState().downloadVideoReducer
      const targetEpisode = state.downloads.find(dl => dl.vod.vod_id === vod.vod_id)?.episodes.find(ep => ep.vodSourceId === vodSourceId && ep.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode?.status === MARTextinputBackground.MARInjuryModels){
        return 
      }
      concatPartialVideos(
        `${vod.vod_id}-${vodSourceId}-${vodUrlNid}`, 
        ()=>{
          
          
          
          
          
          dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {
            status: MARTextinputBackground.MARLibjsi, 
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

      if (targetEpisode.status === MARTextinputBackground.MARInjuryModels) { 
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
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,
  vodIsAdult?: boolean
): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
  return async function (dispatch, getState) {
    dispatch(addDownloadToQueue(vod, vodSourceId, vodUrlNid)); 
    dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: MARTextinputBackground.MARRewardvideoBell}))
    dispatch(resumeVideoDownloadThunk(vod, vodSourceId, vodUrlNid, vodIsAdult))
    await downloadVodImage(vod);
  };
}

export function updateAllVodDetailsThunk(): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
  return async function (dispatch, getState) {
    const downloads = getState().downloadVideoReducer.downloads
    downloads.forEach(async (download) => {
      const newVod = await yys_Downloader.getDetail(download.vod.vod_id.toString(), {xMode: download.vodIsAdult})
      dispatch(updateVodDetails(newVod))
    })


  };
}

export function manualKillVideoDownloadThunk(
  vod: yys_Bing,
  vodSourceId: number,
  vodUrlNid: number,
): ThunkAction<void, yys_MintegralLibavdevice, any, yys_ServiceViews> {
  return async function (dispatch, getState) {
    const currentState = getState().downloadVideoReducer
      const targetVod = currentState.downloads.find(download => download.vod.vod_id === vod.vod_id)
      if (!targetVod) return 
      const targetEpisode = targetVod.episodes.find(episode => episode.vodSourceId === vodSourceId && episode.vodUrlNid === vodUrlNid)
      if (!targetEpisode) return 
      if (targetEpisode.ffmpegSession === null) return 

      FFmpegKit.cancel(targetEpisode.ffmpegSession)
      dispatch(updateVideoDownload(vod, vodSourceId, vodUrlNid, {status: MARTextinputBackground.MARGpayMintegral}))
      dispatch(endVideoDownload(vod, vodSourceId, vodUrlNid))
      dispatch(resumeFirstVideoDownload())
  }
}