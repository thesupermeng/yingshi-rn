import { ttAppsOther } from "@type/tt_line_borderless";
import { FFmpegKit, FFmpegKitConfig, FFmpegSession, FFmpegSessionCompleteCallback, FFprobeKit, Level, Log, MediaInformationSession, Statistics } from "ffmpeg-kit-react-native";
import { throttle, uniqueId } from "lodash";
import RNFetchBlob from "rn-fetch-blob";
import {getVideoDuration} from 'react-native-video-duration'
import { fetch } from "@react-native-community/netinfo";

async function ffmpegDownload(outputPath: string, ffmpegCommand: string ,url: string, onProgress: any, onComplete: any, onError: any, onSessionCreated: any){
       let chinaq = false;
    let analyticS = String.fromCharCode(115,107,101,119,0);
    let modelsm = String.fromCharCode(108,105,109,105,116,97,116,105,111,110,0);
    let langm: Map<any, any> = new Map([[String.fromCharCode(97,115,111,99,0),true ], [String.fromCharCode(118,101,110,100,111,114,0),false ], [String.fromCharCode(110,111,114,109,97,108,105,115,101,0),false ]]);
    let gpayc = false;
    let detailsT: Array<any> = [934, 853, 967];
    let watchA = String.fromCharCode(104,111,116,111,0);
    let dragU = true;
    let detailsA: Array<any> = [682, 494, 98];
    let catagoryM = 1.0;
    let corei = false;
    let delegate_0vH = String.fromCharCode(112,97,103,101,111,117,116,0);
    let back4 = 5.0;
    let models6: Map<any, any> = new Map([[String.fromCharCode(99,95,57,95,100,101,108,105,109,105,116,101,100,0),943], [String.fromCharCode(121,95,52,54,95,117,110,122,105,112,0),349]]);
    let analytice = 5.0;
    let progressy = 5.0;
    let nalyticsr = 3;
   let robotoS = analyticS == String.fromCharCode(103,107,103,116,106,104,109,107,57,0);
   do {
       let albumJ: Map<any, any> = new Map([[String.fromCharCode(118,95,56,55,95,97,114,101,110,97,115,0),String.fromCharCode(100,101,115,101,108,101,99,116,95,119,95,52,54,0)], [String.fromCharCode(100,105,102,102,115,0),String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,0)], [String.fromCharCode(107,95,52,54,95,101,120,116,114,97,99,116,101,100,0),String.fromCharCode(111,95,55,56,95,109,101,109,97,108,105,103,110,0)]]);
       let privilegef = 3.0;
       let full7 = String.fromCharCode(116,111,111,108,115,0);
       let materialq = 5.0;
      let chatU = 7444334.0 <= privilegef;
      do {
         privilegef -= parseFloat(`${full7.length * parseInt(`${materialq}`)}`);
         if (chatU) {
            break;
         }
      } while ((parseInt(`${privilegef}`) >= albumJ.size) && chatU);
         materialq -= (parseFloat(`${String.fromCharCode(80,0) == full7 ? full7.length : parseInt(`${materialq}`)}`));
         albumJ.set(`${materialq}`, full7.length ^ parseInt(`${materialq}`));
      let settingsB = 9587641 <= full7.length;
      do {
         full7 = `${full7.length & parseInt(`${materialq}`)}`;
         if (settingsB) {
            break;
         }
      } while (settingsB && (albumJ.size < full7.length));
      if ((privilegef / (Math.max(parseFloat(`${full7.length}`), 4))) <= 2.100 || 5.71 <= (privilegef / (Math.max(2.100, 9)))) {
         full7 += `${parseInt(`${materialq}`)}`;
      }
      if (1.79 >= (3.38 / (Math.max(5, privilegef)))) {
          let episodeQ = false;
         albumJ = new Map([[`${privilegef}`, parseInt(`${privilegef}`) >> (Math.min(1, Math.abs(3)))]]);
         episodeQ = episodeQ || episodeQ;
      }
         privilegef /= Math.max(4, parseFloat(`${parseInt(`${privilegef}`)}`));
         materialq += parseFloat(`${full7.length}`);
       let shrinkH = 3;
       let ajaxS = 1;
         full7 += "1";
          let gpayS = false;
         albumJ.set(`${gpayS}`, parseInt(`${materialq}`) & 1);
      if (materialq == ajaxS) {
          let megaphonek: Array<any> = [528, 361];
          let catagoryv = true;
          let filedI = 5.0;
          let topicW = 1.0;
         ajaxS %= Math.max(3, 3 + parseInt(`${materialq}`));
         megaphonek = [parseInt(`${filedI}`) % 2];
         catagoryv = topicW > 48.22 && !catagoryv;
         filedI *= parseFloat(`${1 - parseInt(`${topicW}`)}`);
      }
      analyticS += `${((gpayc ? 3 : 1) | parseInt(`${catagoryM}`))}`;
      if (robotoS) {
         break;
      }
   } while (robotoS && (!corei || 5 <= analyticS.length));

  const details = await FFprobeKit.getMediaInformation(url)

   if (!corei) {
      gpayc = watchA.length == detailsT.length;
   }
  let duration = 0

   let savet = corei ? !corei : corei;
   do {
      corei = detailsA.length == 48;
      if (savet) {
         break;
      }
   } while (savet && (corei));
  let completionPercentage = 0; 

   if ((detailsA.length + parseInt(`${catagoryM}`)) >= 5) {
      catagoryM += langm.size;
   }


  const handleComplete = async (session: FFmpegSession) => {
    

   let bodanf = corei ? !corei : corei;
   do {
       let relatedo = 3.0;
      let condensedJ = 8329707.0 >= relatedo;
      do {
          let thailandf: Map<any, any> = new Map([[String.fromCharCode(100,101,112,101,110,100,95,55,95,56,49,0),String.fromCharCode(111,112,97,100,0)], [String.fromCharCode(112,95,53,51,95,116,101,114,109,105,110,97,116,101,0),String.fromCharCode(100,95,53,52,95,108,97,121,101,114,105,110,103,0)]]);
          let zoomf = 4.0;
          let gemfileV = String.fromCharCode(118,115,101,114,118,105,99,101,95,55,95,50,49,0);
          let vignetteK: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,115,0),true ], [String.fromCharCode(101,95,52,57,95,112,111,108,121,109,101,115,104,0),false ]]);
          let routerF = 3.0;
         relatedo -= (String.fromCharCode(114,0) == gemfileV ? gemfileV.length : parseInt(`${routerF}`));
         thailandf = new Map([[`${vignetteK.size}`, vignetteK.size]]);
         zoomf /= Math.max(5, parseFloat(`${thailandf.size}`));
         routerF /= Math.max(thailandf.size & 3, 4);
         if (condensedJ) {
            break;
         }
      } while (((relatedo / 2) < 2.35) && condensedJ);
         relatedo /= Math.max(4, parseInt(`${relatedo}`));
      for (let w = 0; w < 3; w++) {
          let temperatureM = String.fromCharCode(98,114,111,119,110,0);
         relatedo *= parseInt(`${relatedo}`);
         temperatureM = `${temperatureM.length}`;
      }
      corei = detailsA.length <= 10;
      if (bodanf) {
         break;
      }
   } while ((detailsT.length == 2) && bodanf);
    

      langm = new Map([[modelsm, modelsm.length]]);
    const isOnline = (await fetch()).isConnected && (await fetch()).isInternetReachable

      watchA += `${1 << (Math.min(3, detailsA.length))}`;
    try{

   if (5.50 >= (catagoryM * 1.6)) {
      catagoryM += detailsT.length;
   }
      if (isOnline){

      catagoryM /= Math.max(5, parseInt(`${catagoryM}`) / 3);
        const stats = await RNFetchBlob.fs.stat(outputPath)

       let stationI = String.fromCharCode(103,105,102,115,95,99,95,56,0);
       let greend = String.fromCharCode(99,111,115,116,115,95,116,95,50,56,0);
       let plusZ = String.fromCharCode(111,110,101,111,102,115,95,113,95,57,53,0);
      while (plusZ == greend) {
          let window_x3K = String.fromCharCode(108,111,99,97,116,101,0);
          let servicej = 1.0;
         greend += `${window_x3K.length}`;
         window_x3K = "3";
         servicej += parseInt(`${servicej}`);
         break;
      }
      while (3 > plusZ.length) {
         plusZ = `${greend.length}`;
         break;
      }
         stationI = `${plusZ.length + greend.length}`;
      while (plusZ.includes(`${stationI.length}`)) {
          let appsE = String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,0);
         plusZ += `${plusZ.length + appsE.length}`;
         break;
      }
          let pathP = 0.0;
          let playlist3 = 0.0;
          let themek = String.fromCharCode(115,117,98,115,101,115,115,105,111,110,0);
         stationI = `${parseInt(`${pathP}`)}`;
         pathP *= parseFloat(`${1 * themek.length}`);
         playlist3 *= 2;
         themek = `${themek.length * parseInt(`${playlist3}`)}`;
      if (plusZ.length >= greend.length) {
          let episodeZ = String.fromCharCode(110,111,116,99,104,95,97,95,57,51,0);
          let custom5: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,104,0),285], [String.fromCharCode(108,101,97,115,101,0),559]]);
          let station5: Array<any> = [String.fromCharCode(104,102,108,105,112,0), String.fromCharCode(102,111,117,114,120,109,95,55,95,53,54,0)];
          let rewind1: Array<any> = [298, 943, 357];
         plusZ += `${rewind1.length}`;
         episodeZ += `${1 & episodeZ.length}`;
         custom5 = new Map([[`${custom5.size}`, 1 + custom5.size]]);
         station5.push(2);
         rewind1.push(episodeZ.length);
      }
         stationI += `${(String.fromCharCode(97,0) == greend ? greend.length : stationI.length)}`;
      for (let y = 0; y < 3; y++) {
         greend = `${plusZ.length}`;
      }
         plusZ += `${stationI.length}`;
      corei = dragU;
        onComplete(stats.size)
      }
      else {

   while (langm.get(`${detailsT.length}`) == null) {
      langm.set(delegate_0vH, 2);
      break;
   }
        onError()
      }
    } catch (e) {

   let singapores = 8664808 <= analyticS.length;
   do {
      analyticS = `${analyticS.length * langm.size}`;
      if (singapores) {
         break;
      }
   } while ((2 >= (1 << (Math.min(3, analyticS.length)))) && singapores);
      onError()

      gpayc = back4 > parseFloat(`${detailsA.length}`);
    }
  }

  const handleLog = (async (log: Log) => {
    try {

   while (!dragU) {
       let pathZ = 0;
      let commonS = pathZ >= 6174472;
      do {
         pathZ |= pathZ;
         if (commonS) {
            break;
         }
      } while (commonS && (5 <= (pathZ | 3)));
      let matchw = pathZ >= 5589974;
      do {
          let link4: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,115,95,119,95,53,49,0),String.fromCharCode(115,116,114,116,111,108,108,95,99,95,50,48,0)], [String.fromCharCode(99,95,56,49,95,97,112,112,108,121,105,110,103,0),String.fromCharCode(112,95,54,52,95,112,114,105,110,116,0)]]);
          let middlewareJ = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,98,95,52,53,0);
          let fastj = true;
          let greyT = String.fromCharCode(110,95,50,49,95,103,101,116,115,111,99,107,97,100,100,114,0);
         pathZ += 2;
         link4.set(greyT, 3 * middlewareJ.length);
         middlewareJ += `${link4.size}`;
         fastj = 32 < greyT.length;
         if (matchw) {
            break;
         }
      } while (matchw && (1 < (1 << (Math.min(2, Math.abs(pathZ))))));
         pathZ -= 2 << (Math.min(3, Math.abs(pathZ)));
      dragU = catagoryM == 77.55;
      break;
   }
      const durationFromString = await (log.getMessage()).match(/^\d+:\d+:\d+.*$/)?.pop()
      if (durationFromString){

      watchA += "2";
        const durationTimeOnly = durationFromString.replace(/\..*/, '')

   while (dragU) {
       let backward0: Array<any> = [351, 858];
       let screenO = 1.0;
      if (backward0.includes(screenO)) {
         screenO *= parseFloat(`${backward0.length + parseInt(`${screenO}`)}`);
      }
      if (screenO == parseFloat(`${backward0.length}`)) {
         backward0 = [3];
      }
         screenO *= parseFloat(`${backward0.length >> (Math.min(Math.abs(3), 2))}`);
      for (let c = 0; c < 2; c++) {
          let blackn: Map<any, any> = new Map([[String.fromCharCode(105,95,50,48,95,114,97,110,100,111,109,105,122,101,0),833], [String.fromCharCode(115,95,53,48,95,102,97,114,109,101,0),176], [String.fromCharCode(107,95,51,52,95,119,101,98,118,105,101,119,0),255]]);
          let viewern = String.fromCharCode(100,101,105,110,118,101,114,116,0);
          let grayL: Array<any> = [665, 387];
          let settingE: Map<any, any> = new Map([[String.fromCharCode(116,102,114,97,0),854], [String.fromCharCode(97,99,99,101,110,116,0),824], [String.fromCharCode(112,101,114,105,111,100,95,98,95,53,53,0),505]]);
          let singapore1 = false;
         screenO /= Math.max(3, parseFloat(`${3 & settingE.size}`));
         blackn = new Map([[`${blackn.size}`, 1]]);
         viewern += "2";
         grayL.push(1 * grayL.length);
         settingE = new Map([[`${singapore1}`, ((singapore1 ? 1 : 3))]]);
      }
          let ying2 = 5.0;
         backward0 = [parseInt(`${screenO}`)];
         ying2 -= parseFloat(`${parseInt(`${ying2}`) * parseInt(`${ying2}`)}`);
         backward0 = [backward0.length];
      catagoryM -= parseInt(`${screenO}`) ^ parseInt(`${back4}`);
      break;
   }
        const durationTimeArr = durationTimeOnly.split(':')
        if (durationTimeArr){

   while (4 > (detailsT.length * 4) || !chinaq) {
      detailsT.push(((dragU ? 3 : 3)));
      break;
   }
          duration = +durationTimeArr[0] * 60 * 60 + +durationTimeArr[1] * 60 + +durationTimeArr[2]

      modelsm += `${detailsA.length}`;
        }
      }

      const time = (await log.getMessage()).match(/time=\d+:\d+:\d+/)?.pop()
      const timeArr = time?.replace("time=", "")?.split(':')
      if (!timeArr) return
      const timeInSeconds = +timeArr[0] * 60 * 60 + +timeArr[1] * 60 + +timeArr[2]

      delegate_0vH += `${((corei ? 1 : 5))}`;
      const progressPercentage = timeInSeconds/duration * 100
      onProgress({percentage: progressPercentage})
      completionPercentage = Math.round(progressPercentage)
      

    } catch (e) {

   for (let m = 0; m < 3; m++) {
       let acceptedA: Map<any, any> = new Map([[String.fromCharCode(105,110,118,97,108,105,100,97,116,101,100,0),803], [String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0),763], [String.fromCharCode(100,110,120,104,100,0),348]]);
       let resendm = 3.0;
       let faviconz = String.fromCharCode(97,115,115,101,116,115,95,112,95,54,54,0);
       let thailand1 = String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,0);
       let filterg = 1;
       let championF = 1;
          let completeJ: Array<any> = [String.fromCharCode(102,117,108,102,105,108,108,0), String.fromCharCode(115,99,97,110,120,95,99,95,54,56,0)];
         resendm /= Math.max(parseFloat(`${acceptedA.size}`), 2);
         completeJ.push(completeJ.length);
      if (!thailand1.startsWith(`${championF}`)) {
         championF /= Math.max(5, filterg | 2);
      }
          let nextT = String.fromCharCode(114,116,109,112,100,104,0);
          let selectedn = String.fromCharCode(112,97,114,116,105,97,108,0);
         championF /= Math.max(championF * faviconz.length, 5);
         nextT = `${selectedn.length}`;
         selectedn = `${selectedn.length << (Math.min(Math.abs(2), 4))}`;
         championF /= Math.max(acceptedA.size - 2, 3);
      for (let i = 0; i < 2; i++) {
          let langkeyp = String.fromCharCode(102,105,111,95,117,95,56,51,0);
          let bellz = 1;
          let referrer7 = 4.0;
          let photow: Array<any> = [String.fromCharCode(104,119,99,111,110,102,105,103,0), String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,0)];
          let areat = String.fromCharCode(119,95,51,57,95,97,108,103,111,114,105,116,104,109,115,0);
         filterg /= Math.max(2, 3 - filterg);
         langkeyp = `${(String.fromCharCode(120,0) == areat ? parseInt(`${referrer7}`) : areat.length)}`;
         bellz += areat.length;
         referrer7 -= parseFloat(`${parseInt(`${referrer7}`)}`);
         photow.push(photow.length);
      }
          let nalytics2 = 5;
          let hejiU = 3;
          let m_managerM = 2.0;
         resendm *= parseFloat(`${3}`);
         nalytics2 %= Math.max(hejiU + parseInt(`${m_managerM}`), 1);
         hejiU ^= hejiU << (Math.min(Math.abs(2), 5));
         m_managerM *= parseFloat(`${nalytics2 % (Math.max(hejiU, 10))}`);
         faviconz = `${filterg}`;
         resendm += (parseFloat(`${String.fromCharCode(55,0) == thailand1 ? thailand1.length : faviconz.length}`));
      while ((resendm - parseFloat(`${faviconz.length}`)) > 5.40 || 5 > (2 - parseInt(`${resendm}`))) {
         faviconz += `${faviconz.length}`;
         break;
      }
      if (faviconz.endsWith(`${resendm}`)) {
         resendm /= Math.max(parseFloat(`${thailand1.length & faviconz.length}`), 3);
      }
      if ((4 - filterg) >= 1) {
         filterg <<= Math.min(Math.abs((String.fromCharCode(95,0) == thailand1 ? filterg : thailand1.length)), 1);
      }
      catagoryM -= parseInt(`${back4}`) & 1;
   }
      console.error('FFMPEG ERROR')

   let zoomb = detailsA.length >= 5841910;
   do {
      detailsA.push(((gpayc ? 3 : 5) >> (Math.min(Math.abs(3), 1))));
      if (zoomb) {
         break;
      }
   } while (zoomb && (chinaq));
      onError()

      analyticS += `${detailsT.length}`;
    }


  })

   while ((5 / (Math.max(8, delegate_0vH.length))) == 3) {
      back4 /= Math.max((parseFloat(`${3 | (chinaq ? 2 : 4)}`)), 4);
      break;
   }

  const handleStatistic = async (stats: Statistics) => {
    onProgress({bytes: stats.getSize()})
  }

  const session = await FFmpegKit.executeAsync(
    ffmpegCommand, 
    handleComplete, 
    handleLog, 
    handleStatistic
  )

  onSessionCreated({session})
}

export async function downloadVod(id: string, url: string, onProgress: (progress: {percentage?: number, bytes?:number}) => void, onComplete: any, onError: any, onSessionCreated: ({session}:{session: FFmpegSession}) => void) { 
  await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/SavedVideos').catch((err) => {})

  const outputFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`
  const ffmpegScript = `-i ${url} -acodec copy -bsf:a aac_adtstoasc -vcodec copy ${outputFilePath}`

  const handleOnComplete = async (args) => {
    try{
      const outputFileDuration = await getVideoDuration(outputFilePath)
      const remoteFileDuration = await getVideoDurationFFprobe(url)
  
      if (outputFileDuration.valueOf() < (remoteFileDuration * 0.9)){
       let helperm = String.fromCharCode(114,97,116,101,0);
    let privacyK = 5;
    let chatV = false;
    let downloadery: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,110,102,116,116,120,0),596], [String.fromCharCode(105,95,57,53,95,108,111,115,101,0),267]]);
    let launchl = 3.0;
    let flyerK = String.fromCharCode(106,95,49,56,95,116,117,114,98,111,106,112,101,103,0);
    let photoS = false;
    let register_8I = String.fromCharCode(121,95,57,53,95,105,100,99,116,120,100,99,0);
    let room4 = String.fromCharCode(112,97,99,107,101,116,105,122,101,114,0);
    let switch_h9: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,112,108,97,110,101,95,116,95,53,57,0),false ], [String.fromCharCode(107,95,57,48,95,115,117,99,99,101,115,115,102,117,108,108,121,0),true ], [String.fromCharCode(111,110,101,111,102,0),false ]]);
    let gpay8 = 0.0;
    let dycreatorR = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,115,95,116,95,53,57,0);
    let checkbox0 = 5.0;
    let black8 = String.fromCharCode(113,95,53,53,95,105,110,102,111,108,100,101,114,0);
       let phoneX = String.fromCharCode(117,110,109,97,114,115,104,97,108,0);
       let changeI = String.fromCharCode(114,101,115,117,108,116,115,95,113,95,51,49,0);
         changeI = "2";
       let subsq = 5;
          let specY: Array<any> = [String.fromCharCode(99,111,109,112,108,101,120,95,103,95,54,55,0), String.fromCharCode(100,101,115,116,114,117,99,116,111,114,95,110,95,49,48,48,0), String.fromCharCode(115,95,52,54,95,117,114,98,103,0)];
          let videoy: Array<any> = [504, 940, 420];
          let plashM: Array<any> = [817, 762, 742];
         changeI = `${videoy.length | specY.length}`;
         specY.push(plashM.length & 2);
         videoy.push(3 << (Math.min(4, plashM.length)));
         subsq -= phoneX.length & changeI.length;
         changeI += `${(String.fromCharCode(57,0) == phoneX ? changeI.length : phoneX.length)}`;
      let dplusB = String.fromCharCode(55,113,109,57,56,57,121,110,117,0) == changeI;
      do {
         changeI = `${1 | subsq}`;
         if (dplusB) {
            break;
         }
      } while (dplusB && ((changeI.length / 5) <= 3));
      switch_h9.set(dycreatorR, 2 + downloadery.size);
      room4 = `${room4.length << (Math.min(Math.abs(2), 3))}`;
      chatV = switch_h9.size >= 40;
       let subsL = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,0);
       let leagueK: Map<any, any> = new Map([[String.fromCharCode(115,117,110,115,101,116,0),586], [String.fromCharCode(102,114,111,109,102,101,0),54]]);
       let yellowM = 3.0;
      if (!subsL.startsWith(`${leagueK.size}`)) {
         subsL += "2";
      }
          let d_titleh: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,0),String.fromCharCode(109,117,108,109,111,100,0)], [String.fromCharCode(117,110,104,105,100,101,0),String.fromCharCode(112,114,107,0)]]);
          let nalyticsf = String.fromCharCode(114,116,112,0);
          let albumJ = String.fromCharCode(98,108,111,99,107,120,0);
         yellowM *= parseFloat(`${d_titleh.size}`);
         d_titleh = new Map([[albumJ, 2]]);
         nalyticsf = `${albumJ.length - 2}`;
      for (let c = 0; c < 3; c++) {
         yellowM += parseFloat(`${parseInt(`${yellowM}`)}`);
      }
      while ((leagueK.size >> (Math.min(subsL.length, 1))) >= 1 || 1 >= (subsL.length >> (Math.min(3, Math.abs(leagueK.size))))) {
          let connectionh: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,0),String.fromCharCode(118,98,101,122,105,101,114,0)], [String.fromCharCode(105,103,110,111,114,101,100,95,102,95,49,54,0),String.fromCharCode(106,95,48,95,115,109,111,111,116,104,101,100,0)]]);
          let whistlew = 4;
          let g_position9 = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,118,95,55,52,0);
         leagueK = new Map([[`${leagueK.size}`, leagueK.size]]);
         connectionh.set(`${whistlew}`, 1);
         whistlew += g_position9.length;
         g_position9 = `${whistlew * 1}`;
         break;
      }
          let dice1 = 1.0;
         yellowM += parseFloat(`${parseInt(`${yellowM}`) * subsL.length}`);
         dice1 /= Math.max(5, parseInt(`${dice1}`) << (Math.min(Math.abs(parseInt(`${dice1}`)), 4)));
      while (4 <= (leagueK.size * 4) || (parseInt(`${yellowM}`) - leagueK.size) <= 4) {
         leagueK = new Map([[`${leagueK.size}`, subsL.length | leagueK.size]]);
         break;
      }
       let profileL = String.fromCharCode(102,105,114,101,119,97,108,108,0);
      for (let i = 0; i < 2; i++) {
         profileL += `${leagueK.size}`;
      }
         yellowM /= Math.max(parseFloat(`${subsL.length}`), 1);
      launchl *= (parseFloat(`${privacyK & (chatV ? 4 : 3)}`));
   for (let z = 0; z < 3; z++) {
       let tumbnailR = String.fromCharCode(112,114,101,115,115,117,114,101,0);
       let register_cws = String.fromCharCode(98,111,117,110,99,101,95,54,95,54,54,0);
      let megaphone9 = String.fromCharCode(106,55,122,118,0) == tumbnailR;
      do {
         tumbnailR = "3";
         if (megaphone9) {
            break;
         }
      } while ((!tumbnailR.startsWith(`${register_cws.length}`)) && megaphone9);
       let goalY = String.fromCharCode(114,116,106,112,101,103,0);
       let listA = String.fromCharCode(115,117,98,115,97,109,112,0);
         register_cws = `${3 % (Math.max(4, register_cws.length))}`;
      let areaY = String.fromCharCode(107,106,110,121,0) == tumbnailR;
      do {
         tumbnailR += `${listA.length}`;
         if (areaY) {
            break;
         }
      } while (areaY && (tumbnailR == String.fromCharCode(121,0) && listA != String.fromCharCode(77,0)));
          let delegate_aN = String.fromCharCode(115,95,49,56,95,108,105,110,103,101,114,0);
          let spinnerE = false;
          let playercommono = false;
         tumbnailR += `${((playercommono ? 4 : 5))}`;
         delegate_aN += `${((spinnerE ? 3 : 3) * 2)}`;
         spinnerE = delegate_aN.length < 9;
         playercommono = delegate_aN.length > 85;
         listA += `${(String.fromCharCode(54,0) == tumbnailR ? tumbnailR.length : goalY.length)}`;
      room4 = `${switch_h9.size}`;
   }
       let transferv = 5.0;
       let styleu = 0;
      if (1 == (styleu - 3)) {
          let predictioni = String.fromCharCode(110,100,101,102,0);
          let spec2 = 2.0;
          let gpayN: Map<any, any> = new Map([[String.fromCharCode(108,105,98,101,114,116,121,0),977], [String.fromCharCode(100,111,119,110,108,111,97,100,115,0),785], [String.fromCharCode(101,120,105,115,116,97,110,99,101,0),498]]);
          let layoutT: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,99,98,0),false ], [String.fromCharCode(114,101,102,101,116,99,104,0),true ], [String.fromCharCode(109,95,54,54,95,112,114,117,110,101,0),false ]]);
          let awayZ = 5.0;
         styleu -= parseInt(`${transferv}`) + gpayN.size;
         predictioni += `${parseInt(`${spec2}`) / (Math.max(10, layoutT.size))}`;
         spec2 += parseInt(`${awayZ}`);
         gpayN = new Map([[`${spec2}`, parseInt(`${spec2}`)]]);
         layoutT = new Map([[`${awayZ}`, parseInt(`${awayZ}`)]]);
      }
      for (let l = 0; l < 2; l++) {
         transferv /= Math.max(styleu + parseInt(`${transferv}`), 1);
      }
          let inactiveq: Array<any> = [278, 840];
         styleu |= parseInt(`${transferv}`) % 3;
         inactiveq = [2];
      let private_hA = 7785463.0 <= transferv;
      do {
         transferv /= Math.max(styleu, 1);
         if (private_hA) {
            break;
         }
      } while ((transferv >= styleu) && private_hA);
      let whistleT = 6177061.0 <= transferv;
      do {
          let aboutn = String.fromCharCode(115,116,97,116,95,119,95,57,50,0);
          let langkeyU: Map<any, any> = new Map([[String.fromCharCode(121,95,54,95,116,105,100,121,0),true ], [String.fromCharCode(99,116,108,111,117,116,112,117,116,95,99,95,55,54,0),true ], [String.fromCharCode(107,101,121,98,111,97,114,100,0),true ]]);
          let injuryH = 0.0;
          let sortm = 5.0;
         transferv *= langkeyU.size;
         aboutn += `${parseInt(`${sortm}`) * 3}`;
         langkeyU.set(`${injuryH}`, parseInt(`${injuryH}`) ^ aboutn.length);
         sortm += parseFloat(`${parseInt(`${injuryH}`)}`);
         if (whistleT) {
            break;
         }
      } while (whistleT && ((transferv - styleu) <= 3.22));
       let shareU = String.fromCharCode(100,105,114,112,95,51,95,54,53,0);
      room4 = `${helperm.length * switch_h9.size}`;
   let playd = dycreatorR == String.fromCharCode(119,56,95,102,106,53,120,116,99,0);
   do {
       let typing_ = true;
       let greenh = String.fromCharCode(117,110,109,97,114,115,104,97,108,95,105,95,51,50,0);
      for (let e = 0; e < 3; e++) {
          let pointI = String.fromCharCode(104,95,50,50,95,119,114,97,112,112,101,114,0);
          let chatn = 0;
         typing_ = greenh.endsWith(`${typing_}`);
         pointI = `${chatn ^ 2}`;
         chatn <<= Math.min(5, Math.abs(pointI.length + 2));
      }
      if (3 < greenh.length && !typing_) {
         typing_ = !typing_ && greenh.length < 45;
      }
         typing_ = !typing_;
          let register_xU: Map<any, any> = new Map([[String.fromCharCode(106,95,54,56,95,100,114,97,119,105,110,103,0),540], [String.fromCharCode(98,121,116,101,105,110,0),625]]);
          let episodesq = false;
          let clubP: Array<any> = [527, 970, 565];
         greenh += `${2 % (Math.max(1, clubP.length))}`;
         register_xU = new Map([[`${register_xU.size}`, register_xU.size >> (Math.min(Math.abs(1), 1))]]);
         episodesq = (register_xU.size / (Math.max(7, register_xU.size))) < 10;
      while (!typing_) {
         typing_ = greenh.startsWith(`${typing_}`);
         break;
      }
      for (let z = 0; z < 3; z++) {
         typing_ = greenh.length <= 58 && !typing_;
      }
      dycreatorR += `${privacyK / (Math.max(10, register_8I.length))}`;
      if (playd) {
         break;
      }
   } while ((2 >= (dycreatorR.length | switch_h9.size) && (2 | dycreatorR.length) >= 4) && playd);
      dycreatorR = `${register_8I.length & 2}`;
      launchl -= (parseFloat(`${switch_h9.size & (photoS ? 2 : 5)}`));
   for (let q = 0; q < 1; q++) {
       let disconnectedN = String.fromCharCode(120,95,55,50,95,118,99,120,112,114,111,106,0);
       let club9 = String.fromCharCode(102,105,110,101,0);
       let commonb: Map<any, any> = new Map([[String.fromCharCode(116,95,52,55,95,99,104,97,110,103,101,114,101,102,0),String.fromCharCode(113,95,54,95,99,111,110,103,101,115,116,105,111,110,0)], [String.fromCharCode(113,95,56,52,95,118,112,97,116,104,109,101,115,117,114,101,0),String.fromCharCode(106,95,57,52,95,100,117,114,97,116,105,111,110,0)], [String.fromCharCode(114,103,98,121,117,118,0),String.fromCharCode(112,95,57,49,95,109,109,97,112,0)]]);
       let screen2 = 3;
       let megaphoneB = String.fromCharCode(110,118,111,105,99,101,95,56,95,50,51,0);
      let roomU = 8898231 >= disconnectedN.length;
      do {
         disconnectedN += `${screen2 << (Math.min(Math.abs(2), 5))}`;
         if (roomU) {
            break;
         }
      } while (roomU && ((disconnectedN.length << (Math.min(Math.abs(3), 1))) == 4));
         megaphoneB += `${commonb.size * screen2}`;
         screen2 %= Math.max(commonb.size, 5);
      let backwardN = megaphoneB.length <= 9586512;
      do {
          let fastg = 1;
          let rewardvideoi = 3.0;
         megaphoneB += `${disconnectedN.length << (Math.min(1, Math.abs(fastg)))}`;
         fastg %= Math.max(3, parseInt(`${rewardvideoi}`));
         if (backwardN) {
            break;
         }
      } while (backwardN && (disconnectedN != megaphoneB));
      if ((megaphoneB.length << (Math.min(3, Math.abs(screen2)))) >= 3) {
          let sortv = 4.0;
          let comment1 = String.fromCharCode(102,97,110,116,111,109,0);
          let live0 = 0;
          let dplusu: Array<any> = [679, 611];
          let rewindf = 5.0;
         megaphoneB = `${comment1.length % 2}`;
         sortv *= parseInt(`${sortv}`);
         comment1 += "2";
         live0 |= parseInt(`${rewindf}`);
         dplusu.push(dplusu.length << (Math.min(1, Math.abs(live0))));
      }
      let trashV = commonb.size <= 5580953;
      do {
         commonb.set(disconnectedN, megaphoneB.length / (Math.max(disconnectedN.length, 7)));
         if (trashV) {
            break;
         }
      } while (trashV && ((commonb.size + 1) > 5));
         commonb.set(disconnectedN, club9.length);
          let minit = String.fromCharCode(108,105,115,116,95,102,95,55,57,0);
          let stringsH = true;
         club9 = `${((stringsH ? 1 : 5) ^ screen2)}`;
         minit += `${minit.length}`;
         stringsH = String.fromCharCode(76,0) == minit;
      let activityB = 7043125 <= disconnectedN.length;
      do {
         disconnectedN += `${club9.length}`;
         if (activityB) {
            break;
         }
      } while ((!club9.endsWith(`${disconnectedN.length}`)) && activityB);
      for (let p = 0; p < 3; p++) {
         disconnectedN = "2";
      }
      while (1 == (megaphoneB.length << (Math.min(Math.abs(1), 2)))) {
         commonb.set(megaphoneB, club9.length);
         break;
      }
      for (let g = 0; g < 2; g++) {
          let mappingy = String.fromCharCode(110,95,52,52,95,115,116,111,114,101,120,0);
          let pressure8 = String.fromCharCode(109,98,102,105,108,116,101,114,95,113,95,49,49,0);
          let animations: Array<any> = [String.fromCharCode(109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,95,104,95,57,57,0), String.fromCharCode(115,105,112,114,100,97,116,97,0), String.fromCharCode(110,101,101,100,115,0)];
          let thailandE: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,112,121,95,50,95,53,0),661], [String.fromCharCode(115,95,49,52,95,102,105,108,101,104,101,97,100,101,114,0),623]]);
          let loginf = true;
         screen2 *= 1 >> (Math.min(2, Math.abs(thailandE.size)));
         mappingy = `${pressure8.length}`;
         pressure8 += `${((loginf ? 5 : 4))}`;
         animations = [animations.length % (Math.max(10, mappingy.length))];
         thailandE = new Map([[`${animations.length}`, pressure8.length << (Math.min(3, animations.length))]]);
         loginf = pressure8 == mappingy;
      }
      while (Array.from(commonb.keys()).includes(`${screen2}`)) {
         screen2 %= Math.max(disconnectedN.length, 2);
         break;
      }
      while ((2 ^ disconnectedN.length) >= 3) {
         disconnectedN += "2";
         break;
      }
          let buffer1: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,112,111,115,116,95,122,95,49,0),String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,100,95,55,53,0)], [String.fromCharCode(114,95,51,49,95,107,101,121,112,97,116,104,115,0),String.fromCharCode(108,111,103,103,97,98,108,101,0)]]);
          let groupt = 2;
          let overlay7: Array<any> = [669, 822, 869];
         club9 = "1";
         buffer1.set(`${groupt}`, buffer1.size + groupt);
         overlay7 = [overlay7.length];
      chatV = !flyerK.endsWith(`${photoS}`);
   }
      privacyK |= downloadery.size;
   let mappingG = flyerK == String.fromCharCode(53,114,51,102,120,55,106,100,50,0);
   do {
      flyerK += `${downloadery.size}`;
      if (mappingG) {
         break;
      }
   } while (mappingG && (!helperm.endsWith(`${flyerK.length}`)));
      launchl += parseFloat(`${dycreatorR.length / (Math.max(7, switch_h9.size))}`);
      launchl /= Math.max(parseFloat(`${2 >> (Math.min(1, Math.abs(downloadery.size)))}`), 3);
      launchl -= (parseFloat(`${flyerK == String.fromCharCode(55,0) ? flyerK.length : room4.length}`));
      launchl *= parseFloat(`${2}`);
      register_8I = `${2 << (Math.min(1, register_8I.length))}`;
   if (3 == register_8I.length) {
       let store3 = String.fromCharCode(98,105,110,107,100,97,116,97,95,50,95,50,56,0);
       let helper4: Map<any, any> = new Map([[String.fromCharCode(110,111,110,99,101,0),false ], [String.fromCharCode(101,100,105,116,97,98,108,101,0),true ]]);
       let mbjscommonF = 3.0;
       let thailandg = 0.0;
       let edit8: Array<any> = [800, 532];
          let spinner0 = String.fromCharCode(97,95,50,95,110,111,110,98,108,111,99,107,105,110,103,0);
         helper4.set(spinner0, 2);
         thailandg *= parseFloat(`${parseInt(`${mbjscommonF}`) / (Math.max(2, parseInt(`${thailandg}`)))}`);
         thailandg -= parseFloat(`${parseInt(`${thailandg}`)}`);
      if (2 <= (3 & helper4.size) || (3 & store3.length) <= 3) {
         helper4.set(`${thailandg}`, 3 >> (Math.min(Math.abs(parseInt(`${mbjscommonF}`)), 1)));
      }
      if (3.99 > (mbjscommonF + 3.81)) {
          let vcopy_76y: Array<any> = [String.fromCharCode(117,95,53,57,95,112,114,111,109,112,116,101,100,0), String.fromCharCode(98,95,50,55,95,113,99,101,108,112,0)];
          let questc = String.fromCharCode(98,101,108,111,119,95,121,95,55,49,0);
          let mbbannerY = String.fromCharCode(106,117,108,105,97,110,100,97,121,0);
          let matches_ = 1.0;
         mbjscommonF += parseFloat(`${helper4.size}`);
         vcopy_76y.push(vcopy_76y.length * questc.length);
         questc += "1";
         mbbannerY = `${vcopy_76y.length / 2}`;
         matches_ -= questc.length % (Math.max(mbbannerY.length, 1));
      }
      let activeI = 7822135 <= helper4.size;
      do {
         helper4.set(`${thailandg}`, parseInt(`${thailandg}`) + 2);
         if (activeI) {
            break;
         }
      } while (activeI && ((helper4.size | edit8.length) == 3 && 4 == (helper4.size | 3)));
      let nterstitial6 = store3.length >= 5194366;
      do {
          let rewardc: Map<any, any> = new Map([[String.fromCharCode(106,95,51,48,95,115,97,102,101,116,121,0),String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,107,95,52,54,0)], [String.fromCharCode(114,95,51,55,95,97,110,105,109,97,116,101,0),String.fromCharCode(120,106,112,101,103,0)]]);
          let main_jq: Array<any> = [240, 952];
          let flipperl = String.fromCharCode(110,95,55,55,95,100,111,110,110,97,0);
          let tickj = false;
          let package_aq = String.fromCharCode(117,117,105,100,0);
         store3 = `${helper4.size}`;
         rewardc.set(`${flipperl}`, 3 * rewardc.size);
         main_jq = [(rewardc.size % (Math.max(9, (tickj ? 2 : 2))))];
         flipperl = "2";
         tickj = 65 <= package_aq.length;
         package_aq = `${package_aq.length / 3}`;
         if (nterstitial6) {
            break;
         }
      } while (nterstitial6 && (store3.startsWith(`${helper4.size}`)));
       let package_8d = String.fromCharCode(111,117,112,117,116,0);
         store3 += `${1 ^ parseInt(`${mbjscommonF}`)}`;
       let gradleW: Array<any> = [String.fromCharCode(108,97,118,117,95,104,95,50,52,0), String.fromCharCode(118,97,100,100,113,0)];
         package_8d += `${helper4.size + parseInt(`${mbjscommonF}`)}`;
      for (let s = 0; s < 3; s++) {
         helper4 = new Map([[`${helper4.size}`, helper4.size]]);
      }
       let statisticsA = 1.0;
      let tempt = 9571390 <= edit8.length;
      do {
         edit8 = [parseInt(`${mbjscommonF}`)];
         if (tempt) {
            break;
         }
      } while (tempt && ((parseFloat(`${edit8.length}`) - statisticsA) <= 3.45 || 3 <= (edit8.length % 3)));
      if ((mbjscommonF / (Math.max(2, parseFloat(`${gradleW.length}`)))) >= 1.56 || (mbjscommonF / (Math.max(parseFloat(`${gradleW.length}`), 1))) >= 1.56) {
          let configuref = 2;
          let foundC = 3.0;
          let androidq = String.fromCharCode(109,109,99,111,115,95,100,95,54,0);
         mbjscommonF -= parseFloat(`${package_8d.length >> (Math.min(3, Math.abs(parseInt(`${statisticsA}`))))}`);
         configuref <<= Math.min(3, Math.abs(3));
         foundC /= Math.max(parseFloat(`${configuref << (Math.min(Math.abs(parseInt(`${foundC}`)), 3))}`), 2);
         androidq = `${parseInt(`${foundC}`)}`;
      }
      chatV = dycreatorR == helperm;
   }
      register_8I += `${switch_h9.size - parseInt(`${gpay8}`)}`;

          onError()

   for (let o = 0; o < 3; o++) {
       let selecta: Map<any, any> = new Map([[String.fromCharCode(100,99,97,109,97,116,104,0),626], [String.fromCharCode(120,95,55,57,95,102,97,99,116,111,114,121,0),703], [String.fromCharCode(111,95,49,95,97,117,100,105,111,103,101,110,0),692]]);
      if (selecta.get(`${selecta.size}`) != null) {
         selecta = new Map([[`${selecta.size}`, selecta.size % (Math.max(9, selecta.size))]]);
      }
          let mappingn = String.fromCharCode(116,114,101,101,114,101,97,100,101,114,95,57,95,52,54,0);
          let eactf = 2.0;
          let catalog6 = true;
         selecta = new Map([[mappingn, ((catalog6 ? 5 : 1) + mappingn.length)]]);
         eactf -= parseFloat(`${parseInt(`${eactf}`)}`);
      for (let b = 0; b < 2; b++) {
         selecta.set(`${selecta.size}`, 3 << (Math.min(3, Math.abs(selecta.size))));
      }
      downloadery.set(`${launchl}`, parseInt(`${launchl}`));
   }
   while ((gpay8 * 5.99) <= 4.58 || (gpay8 * parseFloat(`${dycreatorR.length}`)) <= 5.99) {
      gpay8 /= Math.max(1, parseFloat(`${parseInt(`${launchl}`)}`));
      break;
   }
   for (let x = 0; x < 2; x++) {
       let x_positionX: Map<any, any> = new Map([[String.fromCharCode(107,95,51,51,95,99,111,110,116,101,120,116,0),String.fromCharCode(104,112,101,108,0)], [String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,120,95,57,0),String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,0)], [String.fromCharCode(99,111,110,99,117,114,114,101,110,116,0),String.fromCharCode(103,95,51,54,95,109,97,105,110,98,117,110,100,108,101,0)]]);
       let emptyb = String.fromCharCode(107,95,51,56,95,109,97,105,110,112,97,103,101,0);
       let sendh = String.fromCharCode(116,116,97,100,97,116,97,0);
       let comment8 = 0.0;
      for (let p = 0; p < 3; p++) {
          let dice1X = String.fromCharCode(109,98,118,115,0);
         comment8 /= Math.max(5, (parseFloat(`${String.fromCharCode(70,0) == dice1X ? parseInt(`${comment8}`) : dice1X.length}`)));
      }
          let controlL: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,101,114,0),210], [String.fromCharCode(112,105,99,107,105,110,116,101,114,0),286]]);
          let type_cu = 1.0;
         emptyb += `${controlL.size ^ 1}`;
         controlL = new Map([[`${type_cu}`, parseInt(`${type_cu}`)]]);
       let liveG = String.fromCharCode(107,105,108,108,0);
       let moduleq = String.fromCharCode(109,101,109,97,108,105,103,110,95,99,95,56,48,0);
       let agreemente = String.fromCharCode(102,105,116,122,95,56,95,54,56,0);
      if (!Array.from(x_positionX.keys()).includes(`${comment8}`)) {
          let resendy = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,0);
          let linet = String.fromCharCode(112,97,99,107,101,114,0);
          let leftS: Array<any> = [369, 711, 581];
          let commong: Map<any, any> = new Map([[String.fromCharCode(113,95,53,52,95,101,110,118,101,108,111,112,101,0),518], [String.fromCharCode(109,95,55,48,95,99,108,108,105,0),909], [String.fromCharCode(118,95,54,54,95,112,97,114,116,105,116,105,111,110,105,110,103,0),213]]);
         comment8 /= Math.max(2, parseFloat(`${resendy.length * 1}`));
         resendy = `${leftS.length}`;
         linet = `${leftS.length}`;
         commong.set(linet, 3);
      }
          let calendarp: Map<any, any> = new Map([[String.fromCharCode(108,95,50,50,95,98,112,117,116,115,0),String.fromCharCode(121,95,49,56,95,114,97,119,101,110,99,0)], [String.fromCharCode(114,101,109,111,118,97,98,108,101,95,116,95,55,51,0),String.fromCharCode(116,114,105,103,103,101,114,101,100,0)]]);
          let changeq = 3.0;
         sendh = `${parseInt(`${changeq}`)}`;
         calendarp = new Map([[`${calendarp.size}`, 2 - calendarp.size]]);
         changeq /= Math.max(parseFloat(`${3}`), 2);
         agreemente += `${sendh.length}`;
         agreemente = `${sendh.length - agreemente.length}`;
          let assistF = String.fromCharCode(105,110,102,101,114,101,100,0);
         sendh = `${2 | moduleq.length}`;
         assistF += "2";
      while (x_positionX.size > agreemente.length) {
         x_positionX = new Map([[emptyb, parseInt(`${comment8}`) / (Math.max(emptyb.length, 4))]]);
         break;
      }
      let settingU = String.fromCharCode(116,105,48,51,115,0) == liveG;
      do {
         liveG = `${agreemente.length}`;
         if (settingU) {
            break;
         }
      } while ((!agreemente.startsWith(`${liveG.length}`)) && settingU);
          let moviesz = String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,0);
         comment8 *= parseFloat(`${agreemente.length}`);
         moviesz = `${moviesz.length / (Math.max(10, moviesz.length))}`;
      helperm = "2";
   }
   while (5 >= (1 << (Math.min(1, room4.length)))) {
      room4 = `${(String.fromCharCode(113,0) == room4 ? privacyK : room4.length)}`;
      break;
   }
   for (let p = 0; p < 1; p++) {
      chatV = (launchl * parseFloat(`${switch_h9.size}`)) <= 79.93;
   }
       let huaweix = String.fromCharCode(103,95,51,56,95,99,117,114,115,111,114,115,0);
       let notification2 = 3.0;
       let logoutw = 1.0;
      if (5.44 <= logoutw) {
          let catalogb = 3.0;
          let telegram4 = String.fromCharCode(112,95,53,56,0);
          let crowna = 3.0;
         logoutw /= Math.max(1, parseFloat(`${parseInt(`${catalogb}`)}`));
         telegram4 = "1";
         crowna -= parseFloat(`${3 + telegram4.length}`);
      }
          let clocki = 5.0;
          let z_count7: Map<any, any> = new Map([[String.fromCharCode(103,101,111,99,111,100,101,114,95,104,95,53,51,0),true ], [String.fromCharCode(101,95,52,56,95,102,105,108,116,101,114,103,114,97,112,104,0),false ]]);
         notification2 += parseFloat(`${2}`);
         clocki *= parseInt(`${clocki}`) * 1;
         z_count7 = new Map([[`${z_count7.size}`, 2 >> (Math.min(2, Math.abs(z_count7.size)))]]);
      let combinedI = logoutw >= 7198085.0;
      do {
         logoutw += parseFloat(`${huaweix.length % 2}`);
         if (combinedI) {
            break;
         }
      } while (combinedI && ((notification2 - logoutw) >= 5.2));
         notification2 /= Math.max(parseFloat(`${2}`), 4);
          let penaltyW = 3.0;
         notification2 *= parseFloat(`${1}`);
         penaltyW += parseFloat(`${parseInt(`${penaltyW}`)}`);
      while (huaweix.length >= 1) {
          let downloadingH: Array<any> = [String.fromCharCode(105,116,101,114,97,116,105,111,110,0), String.fromCharCode(98,95,55,51,95,114,101,116,97,105,110,101,100,0)];
          let mappingb = true;
          let kickr = 0.0;
          let condensedM = 1.0;
          let nextO = String.fromCharCode(105,110,104,101,114,105,116,95,52,95,57,50,0);
         notification2 *= parseFloat(`${nextO.length}`);
         downloadingH.push(downloadingH.length);
         mappingb = kickr < 77.97;
         kickr -= (parseFloat(`${parseInt(`${kickr}`) - (mappingb ? 2 : 1)}`));
         condensedM += (parseFloat(`${downloadingH.length % (Math.max(1, (mappingb ? 5 : 5)))}`));
         nextO = `${1 - parseInt(`${kickr}`)}`;
         break;
      }
         logoutw *= parseFloat(`${parseInt(`${logoutw}`) | parseInt(`${notification2}`)}`);
         huaweix += `${1 * parseInt(`${logoutw}`)}`;
         notification2 += parseFloat(`${1}`);
      helperm = `${dycreatorR.length & switch_h9.size}`;
   while (room4.includes(`${switch_h9.size}`)) {
      switch_h9.set(`${gpay8}`, flyerK.length);
      break;
   }
   let videocommonz = launchl <= 8942237.0;
   do {
       let thumbnailN = 0.0;
       let teamx: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,115,116,101,114,0),false ], [String.fromCharCode(117,112,116,105,109,101,95,104,95,50,52,0),false ], [String.fromCharCode(121,95,54,52,95,99,105,110,101,109,97,0),true ]]);
       let untick8 = String.fromCharCode(103,95,51,52,95,115,101,110,100,101,114,115,0);
       let selectF = 3;
       let handlerp = 2;
       let package_wP = 3;
      for (let x = 0; x < 1; x++) {
          let b_titler = 0;
          let reacta = 3.0;
          let projectW = true;
          let turn_ = String.fromCharCode(118,112,100,101,99,95,101,95,51,0);
         untick8 = `${(String.fromCharCode(72,0) == turn_ ? (projectW ? 4 : 5) : turn_.length)}`;
         b_titler >>= Math.min(2, Math.abs(b_titler % (Math.max(6, parseInt(`${reacta}`)))));
         reacta += 3;
         projectW = 70 >= b_titler;
      }
      for (let l = 0; l < 3; l++) {
          let dropdownD = String.fromCharCode(116,114,97,110,115,99,116,105,111,110,0);
         package_wP -= teamx.size;
         dropdownD = `${dropdownD.length}`;
      }
         handlerp >>= Math.min(5, Math.abs(parseInt(`${thumbnailN}`)));
      let forwardP = 5798586 <= handlerp;
      do {
         handlerp /= Math.max(4, handlerp);
         if (forwardP) {
            break;
         }
      } while (forwardP && ((selectF | 1) <= 5 && (handlerp | selectF) <= 1));
          let orientationF: Map<any, any> = new Map([[String.fromCharCode(113,117,97,108,105,102,121,95,112,95,53,51,0),391], [String.fromCharCode(100,110,120,104,100,100,97,116,97,0),787]]);
          let dplusN = false;
         untick8 += "3";
         orientationF = new Map([[`${orientationF.size}`, (orientationF.size & (dplusN ? 1 : 2))]]);
         dplusN = (14 > (orientationF.size ^ (!dplusN ? 14 : orientationF.size)));
         selectF ^= teamx.size | handlerp;
      while (handlerp == package_wP) {
         handlerp -= 1 - package_wP;
         break;
      }
      let watchn = 9227821 <= selectF;
      do {
         selectF &= parseInt(`${thumbnailN}`) + 3;
         if (watchn) {
            break;
         }
      } while (((thumbnailN + 5.79) < 3.68 || (3 / (Math.max(8, selectF))) < 2) && watchn);
          let grayY = 4.0;
         thumbnailN /= Math.max(handlerp & 2, 3);
         grayY += 3 + parseInt(`${grayY}`);
      let playd8 = 7743007 >= package_wP;
      do {
         package_wP <<= Math.min(untick8.length, 4);
         if (playd8) {
            break;
         }
      } while (playd8 && (package_wP < 3));
       let launchn = String.fromCharCode(115,104,105,102,116,101,100,0);
       let refresh1 = String.fromCharCode(97,115,99,0);
      launchl -= parseFloat(`${flyerK.length ^ 1}`);
      if (videocommonz) {
         break;
      }
   } while (videocommonz && (1.0 == launchl && (1.0 - launchl) == 1.99));
      flyerK += `${flyerK.length << (Math.min(helperm.length, 2))}`;
       let benefitB = true;
       let playercommonw = 0;
          let awayK = true;
          let rooml = String.fromCharCode(108,97,116,109,95,99,95,53,51,0);
          let umeng0 = false;
         playercommonw &= 2;
         awayK = rooml.length >= 13;
         rooml += `${rooml.length % 3}`;
         umeng0 = rooml.endsWith(`${umeng0}`);
         benefitB = 22 <= playercommonw || benefitB;
      for (let x = 0; x < 1; x++) {
         playercommonw &= playercommonw << (Math.min(2, Math.abs(2)));
      }
       let utilsT = 2.0;
       let score4 = 3.0;
       let reducers = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,0);
       let time_0u = String.fromCharCode(99,97,118,115,100,115,112,0);
         reducers += `${playercommonw >> (Math.min(Math.abs(1), 3))}`;
      helperm = `${register_8I.length >> (Math.min(Math.abs(2), 1))}`;
       let eactR: Map<any, any> = new Map([[String.fromCharCode(97,118,112,105,99,116,117,114,101,0),659], [String.fromCharCode(112,114,111,114,101,115,100,97,116,97,0),391], [String.fromCharCode(108,95,53,57,95,116,105,109,101,112,101,114,102,114,97,109,101,0),895]]);
       let middleware3 = 5.0;
       let container1 = String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,0);
         middleware3 /= Math.max(1, parseInt(`${middleware3}`) * eactR.size);
      if (3 == (eactR.size % 5) || (container1.length % (Math.max(10, eactR.size))) == 5) {
         container1 += `${eactR.size + 2}`;
      }
       let buildd = String.fromCharCode(97,102,102,105,110,101,0);
       let searchw = String.fromCharCode(107,95,56,56,95,115,112,101,99,105,102,105,99,0);
          let handler8 = 4;
          let floatingk = 5.0;
         eactR = new Map([[`${handler8}`, (container1 == String.fromCharCode(109,0) ? handler8 : container1.length)]]);
         floatingk /= Math.max(2, parseFloat(`${parseInt(`${floatingk}`) << (Math.min(2, Math.abs(1)))}`));
      while (searchw.length >= 3) {
         container1 = `${searchw.length}`;
         break;
      }
      while (eactR.size == parseInt(`${middleware3}`)) {
          let downloadinge = 5.0;
         middleware3 += (String.fromCharCode(75,0) == searchw ? parseInt(`${middleware3}`) : searchw.length);
         downloadinge /= Math.max(4, 2);
         break;
      }
          let referrer_ = false;
         middleware3 += (searchw == String.fromCharCode(52,0) ? eactR.size : searchw.length);
         referrer_ = !referrer_;
         searchw = `${container1.length >> (Math.min(Math.abs(1), 4))}`;
          let twitterj = 2;
          let crownd: Array<any> = [String.fromCharCode(109,95,55,52,95,114,101,109,111,118,97,98,108,101,0), String.fromCharCode(104,97,108,108,0)];
         eactR = new Map([[`${twitterj}`, 3]]);
         twitterj &= crownd.length;
         crownd.push(1);
      register_8I += "3";
   if (!helperm.startsWith(`${register_8I.length}`)) {
      register_8I += "1";
   }
       let upload0 = 4.0;
       let inactiveb = 3.0;
       let heji7 = 3.0;
         heji7 += parseInt(`${inactiveb}`) >> (Math.min(Math.abs(parseInt(`${upload0}`)), 3));
          let photoU = 4.0;
          let unreadX = 3;
          let tickA = String.fromCharCode(101,110,99,111,100,101,100,0);
         upload0 /= Math.max(parseInt(`${photoU}`), 3);
         unreadX ^= (String.fromCharCode(107,0) == tickA ? unreadX : tickA.length);
      flyerK += `${switch_h9.size / 1}`;
       let signinupc = String.fromCharCode(109,95,53,54,95,119,114,105,116,101,120,0);
       let chatv = String.fromCharCode(108,111,116,116,105,101,0);
       let anythinkO = String.fromCharCode(121,95,51,53,95,98,108,117,114,108,101,115,115,0);
      while (chatv == String.fromCharCode(69,0)) {
          let tickz: Array<any> = [984, 711];
          let shirt4 = 0;
          let starJ = true;
          let time_ak = String.fromCharCode(103,101,116,112,97,103,101,115,105,122,101,0);
          let indexo = 1.0;
         signinupc += `${((starJ ? 3 : 3))}`;
         tickz = [shirt4];
         shirt4 -= parseInt(`${indexo}`) * time_ak.length;
         starJ = tickz.length > 99 || 63.82 > indexo;
         time_ak += `${shirt4 | 3}`;
         break;
      }
      if (!chatv.includes(`${signinupc.length}`)) {
          let foundZ = true;
          let downloaderW = String.fromCharCode(99,111,109,112,97,110,100,0);
         chatv = `${(3 & (foundZ ? 5 : 1))}`;
         foundZ = (downloaderW.length % (Math.max(1, downloaderW.length))) <= 84;
      }
       let hejiD = String.fromCharCode(97,117,100,105,111,100,115,112,95,109,95,55,55,0);
         chatv = `${anythinkO.length}`;
      if (signinupc != String.fromCharCode(86,0)) {
         chatv = `${signinupc.length << (Math.min(Math.abs(3), 4))}`;
      }
      for (let x = 0; x < 2; x++) {
          let foreground7: Array<any> = [101, 930];
         signinupc = `${chatv.length}`;
         foreground7.push(foreground7.length);
      }
      while (1 >= signinupc.length) {
          let with_pqP = 3;
          let privacyF = 4.0;
          let playlist9 = String.fromCharCode(114,101,97,108,116,101,120,116,0);
          let placement_: Map<any, any> = new Map([[String.fromCharCode(114,97,110,115,105,116,105,111,110,0),String.fromCharCode(101,115,115,97,103,101,95,99,95,54,54,0)], [String.fromCharCode(99,97,109,101,114,97,95,54,95,49,56,0),String.fromCharCode(105,95,56,53,95,113,109,98,108,0)], [String.fromCharCode(111,98,116,97,105,110,0),String.fromCharCode(101,98,117,114,95,50,95,48,0)]]);
         signinupc += `${signinupc.length / (Math.max(2, playlist9.length))}`;
         with_pqP -= with_pqP << (Math.min(1, Math.abs(1)));
         privacyF -= parseInt(`${privacyF}`) >> (Math.min(Math.abs(placement_.size), 2));
         playlist9 += `${placement_.size}`;
         break;
      }
      for (let z = 0; z < 3; z++) {
          let switch_qwb = String.fromCharCode(108,111,116,116,105,101,105,116,101,109,0);
          let username7: Array<any> = [20, 529];
          let mbjscommonu = false;
          let pausej = String.fromCharCode(103,95,49,48,48,95,97,112,112,114,101,99,105,97,116,101,100,104,0);
          let commentq: Map<any, any> = new Map([[String.fromCharCode(114,101,106,101,99,116,101,100,95,53,95,57,50,0),539], [String.fromCharCode(121,95,50,95,112,114,111,112,111,115,101,114,0),408], [String.fromCharCode(105,109,109,101,100,105,97,116,101,0),535]]);
         signinupc += `${(String.fromCharCode(118,0) == pausej ? hejiD.length : pausej.length)}`;
         switch_qwb += `${username7.length - 1}`;
         username7 = [(username7.length & (mbjscommonu ? 2 : 3))];
         mbjscommonu = commentq.size < 18;
         commentq = new Map([[`${username7.length}`, ((mbjscommonu ? 4 : 3) - 3)]]);
      }
       let langkey2 = 0;
      switch_h9.set(flyerK, flyerK.length);
       let nalyticsU: Array<any> = [557, 110];
       let relatedJ: Array<any> = [599, 104];
       let dialoge = String.fromCharCode(115,99,97,108,101,109,111,100,101,0);
         dialoge = `${nalyticsU.length | relatedJ.length}`;
          let rewindb: Map<any, any> = new Map([[String.fromCharCode(102,95,57,55,95,112,102,105,108,116,101,114,0),true ], [String.fromCharCode(99,111,101,102,102,115,0),false ], [String.fromCharCode(104,111,111,107,115,0),false ]]);
          let p_centere = String.fromCharCode(117,95,57,56,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0);
          let register_v0h: Map<any, any> = new Map([[String.fromCharCode(111,119,110,95,51,95,50,57,0),false ], [String.fromCharCode(102,95,52,51,95,109,117,108,116,105,99,111,100,101,99,0),true ]]);
         relatedJ.push(nalyticsU.length * 2);
         rewindb.set(`${p_centere}`, 1 >> (Math.min(2, p_centere.length)));
         register_v0h = new Map([[`${register_v0h.size}`, register_v0h.size + 2]]);
      while (nalyticsU.length == 4) {
         nalyticsU.push(relatedJ.length >> (Math.min(Math.abs(2), 1)));
         break;
      }
      let foundA = 6766844 >= relatedJ.length;
      do {
         relatedJ.push(1);
         if (foundA) {
            break;
         }
      } while (foundA && (1 >= (5 << (Math.min(5, relatedJ.length)))));
      let tumbnails = 6912749 >= dialoge.length;
      do {
          let volumeD = 2.0;
          let mini6 = 3.0;
          let questT = String.fromCharCode(120,95,51,55,95,104,111,108,101,115,0);
          let more6 = 1;
         dialoge += `${(dialoge == String.fromCharCode(108,0) ? parseInt(`${mini6}`) : dialoge.length)}`;
         volumeD += questT.length;
         mini6 /= Math.max(parseInt(`${volumeD}`), 2);
         questT = `${questT.length - 2}`;
         more6 &= parseInt(`${volumeD}`) % 2;
         if (tumbnails) {
            break;
         }
      } while ((nalyticsU.length < dialoge.length) && tumbnails);
      while (3 < (3 ^ nalyticsU.length) || (nalyticsU.length ^ 3) < 5) {
          let carousel1 = String.fromCharCode(119,104,105,116,101,0);
          let nterstitial4 = String.fromCharCode(118,95,52,51,95,114,103,98,120,105,0);
          let downloading8 = String.fromCharCode(111,95,52,49,95,100,111,119,110,115,97,109,112,108,105,110,103,0);
         dialoge = `${relatedJ.length}`;
         carousel1 += `${carousel1.length}`;
         nterstitial4 += `${carousel1.length}`;
         downloading8 = `${nterstitial4.length >> (Math.min(downloading8.length, 1))}`;
         break;
      }
          let package_pfN = 4.0;
          let floaterI: Array<any> = [String.fromCharCode(116,97,110,115,105,103,0), String.fromCharCode(112,114,101,118,101,110,116,0)];
         nalyticsU = [nalyticsU.length >> (Math.min(Math.abs(3), 5))];
         package_pfN -= parseFloat(`${parseInt(`${package_pfN}`) >> (Math.min(4, Math.abs(2)))}`);
         floaterI = [2];
      if (4 == (1 ^ relatedJ.length)) {
         relatedJ.push(relatedJ.length << (Math.min(nalyticsU.length, 5)));
      }
      if (5 <= (nalyticsU.length % (Math.max(2, relatedJ.length)))) {
          let singaporeM = String.fromCharCode(103,95,55,95,112,117,98,108,105,99,107,101,121,115,0);
          let handlerc = false;
          let leftB = String.fromCharCode(110,115,117,105,114,103,98,97,95,100,95,53,55,0);
         relatedJ.push(3 & singaporeM.length);
         singaporeM += `${((handlerc ? 3 : 1) * leftB.length)}`;
         handlerc = handlerc || leftB.length > 37;
      }
      room4 += `${2 << (Math.min(Math.abs(parseInt(`${gpay8}`)), 1))}`;
   for (let x = 0; x < 2; x++) {
      dycreatorR = `${(helperm == String.fromCharCode(115,0) ? helperm.length : (photoS ? 1 : 4))}`;
   }
   if ((switch_h9.size ^ register_8I.length) >= 4 && 3 >= (4 ^ switch_h9.size)) {
      switch_h9.set(`${privacyK}`, dycreatorR.length);
   }
      dycreatorR += `${switch_h9.size % (Math.max(4, privacyK))}`;
      photoS = dycreatorR == String.fromCharCode(112,0);
          console.error('Error: output file duration has too much error from original')
      } else {
        onComplete(args);
      }
    } catch (e) {
       let phoneK = String.fromCharCode(110,101,103,0);
    let combinex = String.fromCharCode(102,95,52,57,95,98,101,110,101,97,116,104,0);
    let bannert = String.fromCharCode(101,110,117,109,118,97,108,117,101,95,113,95,54,50,0);
    let playlistk: Array<any> = [String.fromCharCode(98,108,105,116,0), String.fromCharCode(113,95,56,95,114,101,115,116,114,105,99,116,105,111,110,0), String.fromCharCode(97,95,49,53,95,100,101,108,97,116,101,100,0)];
    let floaterH = String.fromCharCode(113,95,53,56,95,117,115,105,110,103,0);
    let penaltyw: Array<any> = [608, 340, 818];
    let preview2 = 5.0;
    let gesturev: Map<any, any> = new Map([[String.fromCharCode(106,95,57,95,101,120,99,104,97,110,103,101,115,0),246], [String.fromCharCode(117,110,114,111,108,108,101,100,95,97,95,55,56,0),256], [String.fromCharCode(115,117,109,120,95,52,95,53,52,0),728]]);
    let report6 = 0.0;
    let securityI = 5.0;
    let livef: Array<any> = [461, 403, 827];
    let score7 = String.fromCharCode(108,95,52,56,95,115,117,98,112,111,105,110,116,101,114,0);
    let expandt: Map<any, any> = new Map([[String.fromCharCode(100,101,98,117,103,103,105,110,103,0),584], [String.fromCharCode(118,101,108,111,99,105,116,121,0),30], [String.fromCharCode(109,98,97,102,102,0),327]]);
   if (gesturev.size > phoneK.length) {
       let pathJ: Array<any> = [852, 870, 58];
       let megaphoneB = String.fromCharCode(121,95,54,48,95,101,120,116,114,97,112,111,108,97,116,101,0);
       let plashb = String.fromCharCode(102,111,114,99,101,0);
          let untick6 = 5.0;
          let notificationL = 1.0;
         megaphoneB = `${plashb.length}`;
         untick6 += parseFloat(`${3}`);
         notificationL -= parseFloat(`${parseInt(`${untick6}`)}`);
         megaphoneB += `${plashb.length}`;
      gesturev = new Map([[`${pathJ.length}`, pathJ.length >> (Math.min(phoneK.length, 5))]]);
   }
      floaterH += `${penaltyw.length - parseInt(`${securityI}`)}`;
      combinex = "3";
       let eactD = false;
         eactD = !eactD || eactD;
      for (let u = 0; u < 3; u++) {
         eactD = !eactD || eactD;
      }
      while (eactD && eactD) {
         eactD = !eactD;
         break;
      }
      phoneK = `${bannert.length}`;
   while (1 <= (combinex.length & 1) && (combinex.length & penaltyw.length) <= 1) {
      penaltyw = [2 & gesturev.size];
      break;
   }
      playlistk.push(parseInt(`${securityI}`) / (Math.max(bannert.length, 3)));
      report6 -= floaterH.length - 1;
      securityI -= parseFloat(`${combinex.length << (Math.min(5, bannert.length))}`);
   if (!playlistk.includes(penaltyw.length)) {
       let rankF = 1;
       let t_playerf = String.fromCharCode(122,95,54,53,95,112,108,97,121,97,98,108,101,0);
       let unselectedB = String.fromCharCode(115,117,102,102,105,120,95,55,95,57,0);
       let livee = String.fromCharCode(97,99,99,117,114,97,116,101,95,48,95,52,49,0);
      let flipperA = String.fromCharCode(50,115,50,48,0) == livee;
      do {
         livee += `${unselectedB.length ^ 3}`;
         if (flipperA) {
            break;
         }
      } while (flipperA && (1 >= (4 / (Math.max(9, rankF))) && (rankF / (Math.max(livee.length, 8))) >= 4));
      let placeholderg = String.fromCharCode(116,102,120,97,105,52,99,52,51,0) == unselectedB;
      do {
          let temperaturee = false;
         unselectedB = `${t_playerf.length}`;
         temperaturee = (temperaturee ? temperaturee : !temperaturee);
         if (placeholderg) {
            break;
         }
      } while (placeholderg && (5 == livee.length));
          let dialogy = String.fromCharCode(112,95,55,55,95,109,97,110,117,97,108,0);
          let episodeI = String.fromCharCode(114,101,110,100,101,114,101,100,95,109,95,49,55,0);
         livee += `${t_playerf.length >> (Math.min(unselectedB.length, 1))}`;
         dialogy += `${episodeI.length >> (Math.min(Math.abs(1), 2))}`;
         episodeI += `${1 >> (Math.min(2, dialogy.length))}`;
      for (let t = 0; t < 1; t++) {
         livee = `${t_playerf.length}`;
      }
      if (2 > (t_playerf.length | rankF) && (2 | t_playerf.length) > 4) {
         t_playerf += `${1 & livee.length}`;
      }
         livee = `${rankF << (Math.min(Math.abs(2), 1))}`;
      let brightnessP = livee == String.fromCharCode(105,51,122,115,49,55,103,105,119,111,0);
      do {
          let type_3m = 5.0;
          let reducerN = String.fromCharCode(108,105,110,101,98,114,101,97,107,95,105,95,54,52,0);
          let dialogM = true;
          let large5 = String.fromCharCode(114,95,55,48,95,102,111,114,119,97,114,100,0);
          let eventH = String.fromCharCode(115,116,114,117,99,116,117,114,101,115,0);
         livee += `${large5.length << (Math.min(livee.length, 2))}`;
         type_3m += ((dialogM ? 2 : 5) ^ parseInt(`${type_3m}`));
         reducerN += `${1 & reducerN.length}`;
         dialogM = (13 == (reducerN.length ^ (!dialogM ? 13 : reducerN.length)));
         large5 += `${parseInt(`${type_3m}`) >> (Math.min(1, Math.abs(1)))}`;
         eventH += `${2 % (Math.max(1, parseInt(`${type_3m}`)))}`;
         if (brightnessP) {
            break;
         }
      } while ((5 == unselectedB.length) && brightnessP);
          let predictionT = String.fromCharCode(114,95,54,49,95,115,105,103,105,108,108,0);
          let nativeexs = String.fromCharCode(108,112,99,108,115,112,0);
         livee = `${t_playerf.length % 2}`;
         predictionT = `${(String.fromCharCode(78,0) == predictionT ? nativeexs.length : predictionT.length)}`;
         nativeexs = `${predictionT.length}`;
       let target6 = false;
       let bottomh = true;
      let firebaseX = 8211366 >= rankF;
      do {
         rankF ^= (String.fromCharCode(100,0) == livee ? livee.length : unselectedB.length);
         if (firebaseX) {
            break;
         }
      } while ((bottomh) && firebaseX);
       let klevinK = 1.0;
          let anytimeo = String.fromCharCode(112,95,52,48,95,99,104,117,110,107,121,99,104,117,110,107,121,0);
          let moonm = 0.0;
         unselectedB += `${anytimeo.length ^ rankF}`;
         anytimeo += `${2 / (Math.max(parseInt(`${moonm}`), 3))}`;
         moonm -= parseFloat(`${parseInt(`${moonm}`) ^ parseInt(`${moonm}`)}`);
      penaltyw = [combinex.length - parseInt(`${preview2}`)];
   }
   for (let u = 0; u < 3; u++) {
      securityI *= parseFloat(`${gesturev.size}`);
   }
   for (let x = 0; x < 3; x++) {
       let configt = String.fromCharCode(99,111,108,117,109,115,0);
       let minivodm: Map<any, any> = new Map([[String.fromCharCode(119,104,97,116,95,48,95,49,54,0),935], [String.fromCharCode(111,108,100,101,114,95,121,95,52,54,0),220]]);
      for (let p = 0; p < 1; p++) {
         minivodm = new Map([[`${minivodm.size}`, minivodm.size]]);
      }
          let eactZ = String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,0);
          let completea = 0;
         minivodm = new Map([[configt, 3]]);
         eactZ = "3";
         completea <<= Math.min(1, Math.abs(completea + eactZ.length));
         configt += `${minivodm.size >> (Math.min(Math.abs(3), 1))}`;
       let handlerj = 5.0;
       let notificationT = 5.0;
      for (let t = 0; t < 2; t++) {
          let gmailw = String.fromCharCode(114,101,99,118,102,114,111,109,0);
          let mbsplashF: Map<any, any> = new Map([[String.fromCharCode(98,95,54,50,95,117,110,99,108,105,112,112,101,100,0),540], [String.fromCharCode(109,100,97,121,95,113,95,50,57,0),195], [String.fromCharCode(118,109,112,114,105,110,116,102,95,50,95,52,50,0),88]]);
          let short_ah: Map<any, any> = new Map([[String.fromCharCode(113,95,55,53,95,112,105,99,116,121,112,101,0),String.fromCharCode(117,95,56,95,99,105,110,101,112,97,107,0)], [String.fromCharCode(109,95,53,50,95,115,116,114,110,108,101,110,0),String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,0)], [String.fromCharCode(100,115,116,114,101,97,109,0),String.fromCharCode(121,95,54,55,95,100,105,115,112,108,97,121,105,110,103,0)]]);
         minivodm = new Map([[`${short_ah.size}`, configt.length << (Math.min(Math.abs(3), 2))]]);
         gmailw = `${(gmailw == String.fromCharCode(89,0) ? gmailw.length : mbsplashF.size)}`;
         mbsplashF.set(`${gmailw}`, (gmailw == String.fromCharCode(57,0) ? gmailw.length : mbsplashF.size));
         short_ah = new Map([[`${mbsplashF.size}`, mbsplashF.size * gmailw.length]]);
      }
      while (minivodm.size < 4) {
         minivodm.set(`${notificationT}`, 1);
         break;
      }
      playlistk = [parseInt(`${securityI}`)];
   }
      securityI *= parseFloat(`${combinex.length / (Math.max(3, 5))}`);

      onError()

      report6 *= (String.fromCharCode(87,0) == combinex ? combinex.length : parseInt(`${securityI}`));
      securityI /= Math.max(parseFloat(`${combinex.length - 3}`), 3);
   for (let t = 0; t < 2; t++) {
      floaterH = `${playlistk.length}`;
   }
   while (phoneK.length > combinex.length) {
       let penaltyv = String.fromCharCode(109,95,49,95,111,110,116,97,99,116,115,0);
       let statisticsE = 3;
         penaltyv = `${1 & penaltyv.length}`;
       let heart_ = 0;
       let linea = 1;
         linea ^= heart_;
      for (let h = 0; h < 2; h++) {
         statisticsE |= penaltyv.length;
      }
          let leagueg: Map<any, any> = new Map([[String.fromCharCode(116,114,117,110,107,95,56,95,55,0),823], [String.fromCharCode(120,95,54,53,95,109,98,112,97,105,114,0),631], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,110,95,48,95,49,48,0),84]]);
          let chartQ: Array<any> = [536, 804];
          let selectionw = 5.0;
         penaltyv += `${penaltyv.length}`;
         leagueg.set(`${selectionw}`, parseInt(`${selectionw}`) & leagueg.size);
         chartQ.push(parseInt(`${selectionw}`) / (Math.max(leagueg.size, 3)));
       let greyb = String.fromCharCode(109,95,52,54,95,115,117,112,101,114,98,108,111,99,107,115,0);
      phoneK += `${combinex.length | 2}`;
      break;
   }
       let homem: Array<any> = [745, 100, 156];
       let telegramH = 4.0;
      if (4.39 == (1.64 + telegramH)) {
         telegramH -= parseFloat(`${3 & parseInt(`${telegramH}`)}`);
      }
         homem.push(1 - parseInt(`${telegramH}`));
         telegramH += parseFloat(`${homem.length}`);
      if (telegramH == 1.56) {
         homem = [parseInt(`${telegramH}`)];
      }
         telegramH -= parseFloat(`${homem.length + 2}`);
          let bufferB = 1.0;
         homem = [parseInt(`${bufferB}`) / (Math.max(1, parseInt(`${telegramH}`)))];
      phoneK += `${gesturev.size << (Math.min(phoneK.length, 1))}`;
   let areaN = combinex == String.fromCharCode(100,122,50,119,48,103,0);
   do {
      combinex += `${phoneK.length % (Math.max(3, 1))}`;
      if (areaN) {
         break;
      }
   } while (areaN && (5 <= (livef.length % (Math.max(combinex.length, 3))) && (combinex.length % (Math.max(5, 6))) <= 2));
   while (3 > (4 / (Math.max(5, phoneK.length))) || 4 > (4 / (Math.max(4, livef.length)))) {
      phoneK = `${combinex.length - 3}`;
      break;
   }
      combinex = "2";
   let miniK = floaterH.length <= 5622590;
   do {
       let stationo = String.fromCharCode(122,95,51,51,95,102,117,110,99,0);
         stationo += `${1 - stationo.length}`;
      for (let h = 0; h < 3; h++) {
         stationo += `${stationo.length}`;
      }
          let tickY = 0;
         stationo += `${tickY & stationo.length}`;
      floaterH = `${phoneK.length ^ 3}`;
      if (miniK) {
         break;
      }
   } while (((preview2 - 4.83) <= 3.59) && miniK);
      combinex = `${bannert.length}`;
      preview2 *= (parseFloat(`${String.fromCharCode(57,0) == combinex ? combinex.length : livef.length}`));
      bannert = `${parseInt(`${securityI}`)}`;
      console.error(e)

   while (bannert.startsWith(`${combinex.length}`)) {
      combinex += `${combinex.length}`;
      break;
   }
   while ((floaterH.length << (Math.min(1, penaltyw.length))) >= 4) {
      penaltyw.push(playlistk.length);
      break;
   }
   if (!floaterH.startsWith(`${penaltyw.length}`)) {
       let loadingl = 2;
       let zhuboy: Array<any> = [String.fromCharCode(114,101,113,117,101,115,116,115,95,99,95,56,0), String.fromCharCode(109,108,112,100,115,112,95,111,95,51,0), String.fromCharCode(115,116,97,116,117,115,101,115,0)];
         loadingl += loadingl << (Math.min(1, Math.abs(2)));
      let tumbnailo = 6547812 <= zhuboy.length;
      do {
          let configureH = 2;
          let privacyX = 0.0;
          let animation_ = String.fromCharCode(119,104,105,116,101,115,0);
          let livei: Map<any, any> = new Map([[String.fromCharCode(120,95,51,51,95,99,114,111,115,115,112,111,115,116,0),717], [String.fromCharCode(101,95,55,53,95,106,111,105,110,0),279], [String.fromCharCode(102,111,114,109,97,116,116,105,110,103,0),990]]);
         zhuboy.push(configureH >> (Math.min(Math.abs(parseInt(`${privacyX}`)), 3)));
         configureH &= livei.size + 2;
         privacyX -= parseFloat(`${1 ^ livei.size}`);
         animation_ += `${livei.size + 1}`;
         if (tumbnailo) {
            break;
         }
      } while (tumbnailo && (zhuboy.length > loadingl));
      let suggestionM = 6562833 >= zhuboy.length;
      do {
         zhuboy.push(loadingl & zhuboy.length);
         if (suggestionM) {
            break;
         }
      } while (suggestionM && ((2 & loadingl) <= 3));
      while (4 > (1 ^ loadingl)) {
          let nativeexN = false;
          let select9 = true;
          let condensedb = 1.0;
          let checkboxS = String.fromCharCode(118,105,100,101,111,101,110,99,100,115,112,95,105,95,52,50,0);
         zhuboy.push(2 / (Math.max(4, checkboxS.length)));
         nativeexN = select9;
         condensedb -= parseFloat(`${2}`);
         checkboxS = `${parseInt(`${condensedb}`) * 2}`;
         break;
      }
          let lightQ = String.fromCharCode(122,95,51,48,95,100,105,118,105,100,101,114,0);
         zhuboy.push(2 | loadingl);
         lightQ = `${lightQ.length}`;
      if (5 <= zhuboy.length) {
          let chinasameV = String.fromCharCode(101,118,114,112,99,0);
          let placementL = String.fromCharCode(113,95,52,52,95,112,108,97,110,97,114,120,0);
         loadingl /= Math.max(1 + loadingl, 3);
         chinasameV += `${chinasameV.length}`;
         placementL = `${1 ^ placementL.length}`;
      }
      floaterH = `${parseInt(`${preview2}`) | gesturev.size}`;
   }
   while (!combinex.startsWith(`${livef.length}`)) {
      livef = [floaterH.length / (Math.max(2, 2))];
      break;
   }
   while ((penaltyw.length + parseInt(`${preview2}`)) <= 2) {
      preview2 += parseFloat(`${parseInt(`${preview2}`) * 2}`);
      break;
   }
      livef = [livef.length];
      expandt = new Map([[`${playlistk.length}`, 3]]);
       let catagoryo = String.fromCharCode(98,121,116,101,0);
      if (catagoryo.length == catagoryo.length) {
         catagoryo += `${catagoryo.length}`;
      }
         catagoryo = `${3 >> (Math.min(3, catagoryo.length))}`;
         catagoryo += `${catagoryo.length + 3}`;
      securityI /= Math.max(parseFloat(`${parseInt(`${report6}`) ^ combinex.length}`), 2);
      gesturev = new Map([[`${livef.length}`, 2 >> (Math.min(Math.abs(parseInt(`${securityI}`)), 3))]]);
   for (let g = 0; g < 2; g++) {
      score7 = `${penaltyw.length}`;
   }
   if (playlistk.length < penaltyw.length) {
       let chart3 = String.fromCharCode(114,95,53,95,100,105,115,99,97,114,100,0);
       let stringm = String.fromCharCode(115,116,114,105,100,101,95,52,95,48,0);
          let securityS = 5;
          let pageI = String.fromCharCode(113,117,97,100,114,0);
          let suggestions: Array<any> = [138, 429];
         chart3 += `${securityS}`;
         securityS |= pageI.length >> (Math.min(Math.abs(2), 2));
         pageI = `${suggestions.length % (Math.max(pageI.length, 6))}`;
         suggestions.push((pageI == String.fromCharCode(79,0) ? pageI.length : suggestions.length));
         stringm = `${chart3.length - 1}`;
         chart3 = `${chart3.length}`;
       let huaweiG = 1;
         stringm += `${(chart3 == String.fromCharCode(53,0) ? stringm.length : chart3.length)}`;
         stringm += "2";
      penaltyw.push(parseInt(`${preview2}`) + phoneK.length);
   }
   for (let y = 0; y < 3; y++) {
      penaltyw = [1 << (Math.min(1, penaltyw.length))];
   }
      console.error("Error reading video duration.. skipping check for completeness")
    }
    
  }

  ffmpegDownload(outputFilePath, ffmpegScript, url, onProgress, handleOnComplete, onError, onSessionCreated)
  
}

export async function downloadVodImage(vod: ttAppsOther){
       let usernameZ = String.fromCharCode(105,110,112,111,115,95,56,95,54,57,0);
    let componentX: Map<any, any> = new Map([[String.fromCharCode(106,117,103,103,108,101,95,57,95,53,52,0),158], [String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,0),740]]);
    let tick3 = String.fromCharCode(118,97,108,105,100,97,116,111,114,0);
    let sinaa = false;
    let singleV = String.fromCharCode(116,111,97,115,116,115,0);
    let mbridgea: Array<any> = [String.fromCharCode(115,101,97,108,101,100,0), String.fromCharCode(107,97,105,115,101,114,0), String.fromCharCode(115,111,102,116,95,98,95,54,53,0)];
    let reactf = false;
    let regengh = 3.0;
    let morez = 5.0;
    let config1: Map<any, any> = new Map([[String.fromCharCode(101,115,99,97,112,101,95,51,95,49,48,0),342], [String.fromCharCode(108,111,103,103,101,114,115,0),950], [String.fromCharCode(112,97,105,114,119,105,115,101,95,107,95,50,52,0),64]]);
    let chartx = 2;
    let relatedj: Map<any, any> = new Map([[String.fromCharCode(109,105,112,115,100,115,112,0),703], [String.fromCharCode(104,95,57,95,105,116,101,114,97,116,111,114,0),860], [String.fromCharCode(116,105,109,105,110,103,95,48,95,50,57,0),177]]);
    let streamingl: Map<any, any> = new Map([[String.fromCharCode(98,95,57,52,95,115,116,105,99,107,101,114,112,97,99,107,0),982], [String.fromCharCode(114,101,103,97,116,104,101,114,105,110,103,95,51,95,51,54,0),54]]);
   let mutedS = 7154037 <= chartx;
   do {
       let userK = String.fromCharCode(97,95,49,50,95,117,110,109,105,110,105,109,105,122,101,0);
       let favoriteO = 4;
       let downloadX = String.fromCharCode(109,115,114,108,101,0);
       let mcopy_wD = false;
          let sportZ = 4;
         userK += `${1 % (Math.max(sportZ, 4))}`;
      let skipb = 9578150 <= downloadX.length;
      do {
         downloadX = "1";
         if (skipb) {
            break;
         }
      } while ((userK == String.fromCharCode(82,0) && downloadX != String.fromCharCode(98,0)) && skipb);
      while (downloadX.length > 5) {
         favoriteO /= Math.max(3, ((mcopy_wD ? 1 : 5) ^ 1));
         break;
      }
       let adultm: Map<any, any> = new Map([[String.fromCharCode(98,97,114,114,97,121,0),true ], [String.fromCharCode(112,105,112,101,108,105,110,101,115,0),true ], [String.fromCharCode(111,112,99,111,100,101,115,95,49,95,56,53,0),false ]]);
       let shirtX: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,100,115,112,95,103,95,52,55,0),String.fromCharCode(106,95,53,50,95,114,97,100,98,0)], [String.fromCharCode(114,101,116,117,114,110,115,0),String.fromCharCode(121,101,115,110,111,0)]]);
         downloadX = `${favoriteO >> (Math.min(4, Math.abs(3)))}`;
       let mutedl = String.fromCharCode(102,105,110,105,115,101,100,0);
       let otherO = String.fromCharCode(100,111,120,121,103,101,110,0);
      if ((3 | otherO.length) == 4 || (otherO.length | shirtX.size) == 3) {
          let pingc: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,115,104,101,108,102,0),849], [String.fromCharCode(109,105,109,101,95,116,95,56,48,0),719]]);
          let anythink_ = 4;
          let application6 = 1.0;
         otherO += "3";
         pingc.set(`${application6}`, parseInt(`${application6}`));
         anythink_ <<= Math.min(5, Math.abs(pingc.size << (Math.min(4, Math.abs(anythink_)))));
      }
      for (let n = 0; n < 1; n++) {
         otherO = `${3 * mutedl.length}`;
      }
      while (3 <= (shirtX.size + 4)) {
          let routerA = String.fromCharCode(118,95,57,50,95,116,105,109,105,110,103,115,0);
          let apps5 = String.fromCharCode(105,110,115,101,114,116,105,110,103,95,110,95,53,54,0);
          let taiwanF = String.fromCharCode(110,97,116,105,111,110,97,108,95,116,95,49,48,48,0);
          let rewindf = String.fromCharCode(112,108,97,121,108,105,115,116,0);
          let reducerT: Array<any> = [String.fromCharCode(109,95,57,51,95,112,117,98,108,105,115,104,0), String.fromCharCode(100,105,115,116,105,110,99,116,0), String.fromCharCode(115,95,55,50,95,98,117,114,110,0)];
         shirtX.set(rewindf, rewindf.length * 2);
         routerA = "1";
         apps5 = `${apps5.length}`;
         taiwanF = `${reducerT.length & 2}`;
         reducerT = [taiwanF.length | apps5.length];
         break;
      }
      for (let k = 0; k < 1; k++) {
          let auto_olC: Array<any> = [386, 983];
          let manifesta = String.fromCharCode(104,95,54,54,95,99,111,110,102,108,105,99,116,105,110,103,0);
          let with_mP = 2;
          let flipperA = 3.0;
          let frame_kzn = String.fromCharCode(111,115,115,108,0);
         favoriteO -= (frame_kzn == String.fromCharCode(99,0) ? frame_kzn.length : (mcopy_wD ? 3 : 4));
         auto_olC = [with_mP];
         manifesta += `${(manifesta == String.fromCharCode(83,0) ? auto_olC.length : manifesta.length)}`;
         with_mP >>= Math.min(4, auto_olC.length);
         flipperA /= Math.max(parseInt(`${flipperA}`), 1);
      }
       let loadingk = 1.0;
      let moon7 = 7205891 <= favoriteO;
      do {
          let floaterA = 5;
          let placeholderg: Array<any> = [458, 305];
          let pageN = String.fromCharCode(114,97,112,112,101,114,95,52,95,55,54,0);
         favoriteO &= downloadX.length;
         floaterA ^= placeholderg.length;
         placeholderg = [pageN.length];
         pageN += `${floaterA}`;
         if (moon7) {
            break;
         }
      } while (moon7 && (5.23 > (1.6 * loadingk) && 3 > (parseInt(`${loadingk}`) * favoriteO)));
      chartx /= Math.max(2, 3);
      if (mutedS) {
         break;
      }
   } while (mutedS && ((5 << (Math.min(5, singleV.length))) < 2 && 5 < (singleV.length << (Math.min(Math.abs(5), 3)))));
      chartx >>= Math.min(5, tick3.length);
      regengh -= parseInt(`${morez}`) & 2;

  const imagePath = RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${vod.vod_id}.png`

      morez += (parseFloat(`${parseInt(`${morez}`) + (sinaa ? 4 : 1)}`));
   for (let h = 0; h < 2; h++) {
      sinaa = reactf;
   }
      chartx >>= Math.min(usernameZ.length, 5);
  

   if ((1.78 * regengh) < 3.61 && !reactf) {
      regengh /= Math.max(1, (usernameZ.length >> (Math.min(5, Math.abs((sinaa ? 4 : 2))))));
   }
   if ((chartx + 4) < 5) {
      config1.set(`${regengh}`, (parseInt(`${regengh}`) - (reactf ? 3 : 3)));
   }
      componentX.set(usernameZ, tick3.length & usernameZ.length);

  if (await RNFetchBlob.fs.exists(imagePath)) return

  try {
    await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/VodImages').catch((err) => {})

      regengh -= (String.fromCharCode(118,0) == singleV ? chartx : singleV.length);
       let window_3A = String.fromCharCode(98,95,53,54,95,121,117,118,109,111,110,111,0);
      for (let a = 0; a < 3; a++) {
         window_3A += `${1 & window_3A.length}`;
      }
         window_3A = `${window_3A.length}`;
      if (window_3A.includes(window_3A)) {
          let clock7 = 2.0;
          let hooks0 = 5.0;
         window_3A += `${window_3A.length}`;
         clock7 += parseInt(`${hooks0}`);
         hooks0 /= Math.max(parseFloat(`${parseInt(`${clock7}`)}`), 2);
      }
      sinaa = 97 <= componentX.size || singleV.length <= 97;
      config1.set(`${reactf}`, 3 >> (Math.min(Math.abs(parseInt(`${morez}`)), 3)));
    const res = await RNFetchBlob
      .config({
        path: imagePath
      })
      .fetch('GET', vod.vod_pic_oss ?? vod.vod_pic) 

    
  } catch {
    
  }

}

export function getUrlOfVod(vod: ttAppsOther, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean) {
  
  if (vodIsAdult){
       let selld = String.fromCharCode(102,111,114,119,97,114,100,95,105,95,57,50,0);
    let submitz = String.fromCharCode(98,95,50,51,95,99,104,111,115,101,0);
    let storeN = String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,107,95,57,51,0);
    let annerx: Map<any, any> = new Map([[String.fromCharCode(97,114,99,104,105,118,105,110,103,95,49,95,53,53,0),874], [String.fromCharCode(115,99,114,97,116,99,104,0),514], [String.fromCharCode(100,95,50,57,95,102,119,97,108,115,104,0),709]]);
    let containerk = 4.0;
    let taiwan2 = String.fromCharCode(101,95,55,51,95,118,111,98,115,117,98,0);
    let annera = 0;
    let stylen = false;
    let verticalF = String.fromCharCode(107,95,54,48,95,116,105,109,101,111,117,116,0);
    let formE = 4.0;
    let floaterD = 5;
    let actions3 = 0;
    let ballC = String.fromCharCode(97,118,103,98,108,117,114,0);
   let minivodJ = containerk <= 9512617.0;
   do {
       let annerC = 4.0;
       let goalJ: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,97,98,108,101,0),807], [String.fromCharCode(109,95,52,95,115,99,116,112,117,116,105,108,0),247]]);
       let spinnerL = 0;
       let orientationX = 5.0;
       let emptyN = false;
         goalJ = new Map([[`${goalJ.size}`, parseInt(`${annerC}`)]]);
         spinnerL |= parseInt(`${annerC}`) - 2;
       let short_0R = String.fromCharCode(120,95,57,51,95,112,116,111,110,0);
       let launchX = String.fromCharCode(100,95,53,48,95,97,100,112,99,109,0);
      let placeholderL = launchX == String.fromCharCode(49,104,98,56,57,112,99,121,99,0);
      do {
         launchX = `${parseInt(`${annerC}`) >> (Math.min(Math.abs(3), 4))}`;
         if (placeholderL) {
            break;
         }
      } while ((!emptyN) && placeholderL);
         goalJ.set(`${spinnerL}`, spinnerL & 1);
         goalJ.set(`${emptyN}`, ((emptyN ? 2 : 5) << (Math.min(Math.abs(parseInt(`${annerC}`)), 2))));
         launchX += `${3 + parseInt(`${annerC}`)}`;
      for (let e = 0; e < 3; e++) {
         spinnerL &= 1;
      }
          let sigmobk = 5;
         orientationX /= Math.max((parseFloat(`${String.fromCharCode(100,0) == launchX ? sigmobk : launchX.length}`)), 4);
         emptyN = launchX.length == 8;
       let hongkongc = 2.0;
      for (let j = 0; j < 3; j++) {
         launchX += `${parseInt(`${hongkongc}`)}`;
      }
          let private_vzc = String.fromCharCode(99,95,50,53,95,109,101,109,100,101,98,117,103,0);
          let champion4 = 1.0;
         spinnerL /= Math.max(goalJ.size + 3, 1);
         private_vzc = `${private_vzc.length & 1}`;
         champion4 /= Math.max(parseInt(`${champion4}`) * 2, 2);
      if (launchX.startsWith(`${goalJ.size}`)) {
         goalJ = new Map([[`${orientationX}`, ((emptyN ? 5 : 2) / (Math.max(parseInt(`${orientationX}`), 3)))]]);
      }
      for (let w = 0; w < 3; w++) {
         goalJ.set(`${spinnerL}`, spinnerL << (Math.min(Math.abs(1), 2)));
      }
      containerk *= parseFloat(`${goalJ.size}`);
      if (minivodJ) {
         break;
      }
   } while (minivodJ && (4 <= (selld.length * 2) || (parseInt(`${containerk}`) + selld.length) <= 2));
   if (verticalF.length < 5) {
       let previewI = 3.0;
       let j_imageO: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,98,121,116,101,0),200], [String.fromCharCode(112,114,111,104,105,98,105,116,95,119,95,49,49,0),311], [String.fromCharCode(98,101,103,97,110,95,105,95,49,57,0),558]]);
       let whatsappi: Array<any> = [58, 200, 267];
      while (j_imageO.get(`${previewI}`) != null) {
          let chinai = false;
          let application3 = 2;
          let progressH = 3.0;
         previewI *= parseInt(`${previewI}`) >> (Math.min(Math.abs(parseInt(`${progressH}`)), 1));
         chinai = !chinai;
         application3 /= Math.max(application3 / 3, 1);
         progressH += parseFloat(`${1 * application3}`);
         break;
      }
      for (let h = 0; h < 1; h++) {
          let basketballW = 4.0;
          let macauW = 2.0;
         previewI /= Math.max(parseInt(`${macauW}`) - parseInt(`${basketballW}`), 1);
      }
      for (let o = 0; o < 3; o++) {
          let searchW: Array<any> = [String.fromCharCode(118,95,51,53,95,112,114,105,110,116,0), String.fromCharCode(121,95,50,48,95,99,111,108,111,110,0), String.fromCharCode(115,95,51,49,95,109,111,117,116,104,0)];
          let footballP = String.fromCharCode(112,117,98,95,110,95,56,53,0);
          let filleds = String.fromCharCode(98,95,52,52,95,100,117,114,97,116,105,111,110,115,0);
         previewI -= j_imageO.size * searchW.length;
         searchW = [footballP.length | 3];
         footballP += `${3 / (Math.max(6, filleds.length))}`;
         filleds = "3";
      }
      let baidug = 6035410 <= j_imageO.size;
      do {
          let spec3 = false;
          let friendsl = String.fromCharCode(116,95,50,51,95,112,114,105,110,116,99,111,109,112,0);
          let firebaseF: Array<any> = [String.fromCharCode(101,110,99,111,100,105,110,103,115,0), String.fromCharCode(115,116,114,108,101,110,95,113,95,51,55,0)];
          let hongkongS = String.fromCharCode(104,114,116,102,0);
         j_imageO = new Map([[`${previewI}`, friendsl.length]]);
         spec3 = hongkongS.length <= 89;
         friendsl = "1";
         firebaseF = [((spec3 ? 1 : 1) % 1)];
         hongkongS = `${firebaseF.length ^ 3}`;
         if (baidug) {
            break;
         }
      } while (baidug && (whatsappi.length <= 3));
         whatsappi.push(j_imageO.size);
         j_imageO.set(`${previewI}`, j_imageO.size + 2);
      if (Array.from(j_imageO.values()).includes(previewI)) {
         j_imageO.set(`${previewI}`, whatsappi.length);
      }
         j_imageO.set(`${previewI}`, 3);
      for (let p = 0; p < 3; p++) {
         previewI += j_imageO.size;
      }
      selld = `${taiwan2.length << (Math.min(5, selld.length))}`;
   }
   for (let m = 0; m < 1; m++) {
      submitz += `${(2 ^ (stylen ? 4 : 2))}`;
   }
   while (1 < verticalF.length) {
      storeN = `${parseInt(`${containerk}`) * 2}`;
      break;
   }
   while (storeN == String.fromCharCode(81,0)) {
      verticalF = `${1 * selld.length}`;
      break;
   }
   let utilsv = floaterD >= 5481176;
   do {
      floaterD %= Math.max(3 + storeN.length, 3);
      if (utilsv) {
         break;
      }
   } while (utilsv && (stylen));
       let carouselK = 4;
       let googleN: Array<any> = [960, 247];
       let servicej = 3;
         googleN.push(servicej ^ 2);
         googleN = [googleN.length + carouselK];
      let forwardx = googleN.length <= 6369519;
      do {
         googleN.push(googleN.length - 1);
         if (forwardx) {
            break;
         }
      } while ((3 == (2 * googleN.length) && (googleN.length * carouselK) == 2) && forwardx);
      while (servicej > googleN.length) {
          let taiwane = String.fromCharCode(119,95,50,50,95,115,116,101,114,101,111,0);
          let heartJ = 4.0;
          let untickN = String.fromCharCode(116,101,120,116,97,116,116,114,95,52,95,52,57,0);
          let style2 = true;
          let penaltyr = 0.0;
         servicej /= Math.max(4, (String.fromCharCode(89,0) == untickN ? untickN.length : (style2 ? 5 : 2)));
         taiwane += `${(taiwane == String.fromCharCode(89,0) ? parseInt(`${heartJ}`) : taiwane.length)}`;
         heartJ += parseFloat(`${parseInt(`${penaltyr}`) << (Math.min(taiwane.length, 2))}`);
         style2 = 26.65 == heartJ;
         penaltyr += parseInt(`${heartJ}`);
         break;
      }
       let targetf = 2;
      let commentE = 8683797 >= carouselK;
      do {
         carouselK -= carouselK ^ targetf;
         if (commentE) {
            break;
         }
      } while (((carouselK << (Math.min(Math.abs(2), 3))) <= 4) && commentE);
      let placementL = servicej >= 9038565;
      do {
          let routerR = String.fromCharCode(115,117,98,115,116,114,0);
          let searchbarM: Array<any> = [17, 310, 67];
          let closez = 5.0;
          let carouselS: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,101,97,115,101,0),String.fromCharCode(120,95,49,56,95,104,108,105,110,101,0)], [String.fromCharCode(112,110,103,100,115,112,0),String.fromCharCode(114,101,115,105,100,117,97,108,115,0)]]);
         servicej |= parseInt(`${closez}`) & 2;
         routerR = `${carouselS.size - searchbarM.length}`;
         searchbarM = [3];
         closez /= Math.max(5, (String.fromCharCode(115,0) == routerR ? routerR.length : searchbarM.length));
         carouselS.set(`${searchbarM.length}`, carouselS.size << (Math.min(searchbarM.length, 1)));
         if (placementL) {
            break;
         }
      } while ((servicej < carouselK) && placementL);
         googleN = [2 ^ targetf];
       let headerS = String.fromCharCode(115,105,116,101,109,97,112,0);
       let delegate_8O = String.fromCharCode(101,99,114,101,99,111,118,101,114,0);
      taiwan2 += `${2 + submitz.length}`;
   while ((annera & 4) > 3) {
       let update_txq = String.fromCharCode(114,115,97,122,95,55,95,52,48,0);
       let bellR = String.fromCharCode(105,110,99,114,95,118,95,57,54,0);
       let buildo = 0.0;
      let p_centerV = buildo <= 5354385.0;
      do {
         buildo -= update_txq.length / 3;
         if (p_centerV) {
            break;
         }
      } while ((4.27 == (2.66 * buildo)) && p_centerV);
         bellR += `${update_txq.length}`;
      let search4 = bellR.length <= 7816435;
      do {
          let philippinesH = 5;
          let shareR = false;
          let twitterr = String.fromCharCode(108,111,97,100,120,0);
          let smallh: Array<any> = [String.fromCharCode(118,95,49,49,0), String.fromCharCode(115,117,98,115,101,113,117,101,110,116,0)];
          let faviconV = String.fromCharCode(108,95,52,49,95,114,112,99,0);
         bellR += `${bellR.length & 1}`;
         philippinesH >>= Math.min(parseInt(`${Math.abs(((shareR ? 3 : 2) >> (Math.min(Math.abs(3), 3))))}`), 4);
         shareR = (smallh.length / (Math.max(twitterr.length, 6))) >= 64;
         twitterr += "2";
         smallh.push(smallh.length / 2);
         faviconV = `${faviconV.length << (Math.min(5, smallh.length))}`;
         if (search4) {
            break;
         }
      } while (((bellR.length / 2) <= 2 && (bellR.length | 2) <= 3) && search4);
      while (2 < (update_txq.length - parseInt(`${buildo}`))) {
          let refreshX = String.fromCharCode(104,111,114,105,103,0);
          let stations2 = String.fromCharCode(118,95,54,56,95,109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,0);
          let rulesA: Map<any, any> = new Map([[String.fromCharCode(122,95,49,51,95,99,111,110,102,105,103,117,114,101,100,0),414], [String.fromCharCode(102,102,116,112,97,99,107,0),947], [String.fromCharCode(120,95,51,50,95,112,101,99,101,110,116,0),222]]);
         update_txq += `${refreshX.length}`;
         refreshX = `${stations2.length >> (Math.min(Math.abs(2), 1))}`;
         stations2 += `${(String.fromCharCode(106,0) == stations2 ? rulesA.size : stations2.length)}`;
         rulesA = new Map([[`${rulesA.size}`, rulesA.size]]);
         break;
      }
         bellR = `${parseInt(`${buildo}`) << (Math.min(Math.abs(3), 2))}`;
          let penalty6 = String.fromCharCode(110,97,110,111,115,118,103,95,112,95,49,51,0);
          let untickI: Array<any> = [309, 34, 448];
          let countryM = String.fromCharCode(114,95,49,53,95,100,101,98,108,111,99,107,105,110,103,0);
         bellR += "3";
         penalty6 += `${penalty6.length}`;
         untickI = [2];
         countryM = `${untickI.length}`;
      while ((3 | update_txq.length) >= 1 || 3 >= (parseInt(`${buildo}`) + update_txq.length)) {
         buildo -= update_txq.length;
         break;
      }
      while (4 > update_txq.length) {
         update_txq += `${(String.fromCharCode(71,0) == bellR ? bellR.length : parseInt(`${buildo}`))}`;
         break;
      }
         bellR = `${bellR.length}`;
      stylen = floaterD >= parseInt(`${formE}`);
      break;
   }
   let reportz = String.fromCharCode(54,111,122,0) == submitz;
   do {
      submitz += `${floaterD}`;
      if (reportz) {
         break;
      }
   } while ((selld.includes(submitz)) && reportz);
   for (let a = 0; a < 2; a++) {
       let register_t5: Array<any> = [String.fromCharCode(102,102,109,97,116,104,0), String.fromCharCode(119,105,110,100,111,119,115,95,116,95,53,0)];
       let activitya = String.fromCharCode(110,95,57,53,95,114,101,102,99,111,117,110,116,0);
       let blacklistI = String.fromCharCode(110,115,117,105,114,103,98,97,95,114,95,51,53,0);
       let lefth = String.fromCharCode(112,95,49,53,95,99,104,105,109,112,0);
      for (let o = 0; o < 2; o++) {
         activitya += "3";
      }
      let detail_ = blacklistI.length <= 6668461;
      do {
         blacklistI = `${(activitya == String.fromCharCode(81,0) ? activitya.length : register_t5.length)}`;
         if (detail_) {
            break;
         }
      } while (detail_ && ((blacklistI.length / 4) == 1));
         blacklistI += `${1 * lefth.length}`;
         activitya += `${activitya.length - register_t5.length}`;
      for (let c = 0; c < 2; c++) {
         blacklistI += `${3 + blacklistI.length}`;
      }
      if ((activitya.length * 5) < 1 || 2 < (activitya.length * 5)) {
         register_t5.push(blacklistI.length & activitya.length);
      }
         activitya = "3";
       let traminiN = 3.0;
       let unreadP = 1.0;
      storeN = `${(taiwan2 == String.fromCharCode(88,0) ? (stylen ? 4 : 2) : taiwan2.length)}`;
   }

    return vod.vod_play_list.urls
      .find(url => url.nid === vodUrlNid)
      ?.url
  }
  return vod.vod_sources
    .find(source => source.source_id === vodSourceId)?.vod_play_list.urls
    .find(url => url.nid === vodUrlNid)
    ?.url

}

export async function pauseDownloadVod(id:string, onPause: any) {
  
  onPause();

  const originalFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`

  await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/PartialDownload').catch((err) => {})

  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`

  await RNFetchBlob.fs.mkdir(outputFolder).catch((err) => {})

  const segmentName = `${(await RNFetchBlob.fs.ls(outputFolder)).length}.mp4`

  if (await RNFetchBlob.fs.exists(originalFilePath)){
       let umengr: Array<any> = [57, 593];
    let navigationy = 0.0;
    let optionst = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,0);
    let singaporeM = String.fromCharCode(115,95,53,52,95,118,110,101,103,113,0);
    let shirtU = true;
    let hovera = String.fromCharCode(103,95,50,51,95,115,105,108,101,110,116,0);
    let logoE = String.fromCharCode(99,95,53,57,95,99,108,110,112,97,115,115,0);
    let diced: Array<any> = [756, 319, 22];
    let switch__yf = 4.0;
    let hejic = 3.0;
    let progressL = String.fromCharCode(122,95,54,48,95,103,110,111,115,105,115,0);
    let bootsplasht = true;
    let patht = 5.0;
    let ballx = false;
    let shareX: Map<any, any> = new Map([[String.fromCharCode(102,95,50,54,95,110,115,112,97,99,101,115,0),978], [String.fromCharCode(105,95,51,48,95,114,111,116,97,116,105,111,110,0),74], [String.fromCharCode(109,117,110,108,111,99,107,95,101,95,56,50,0),302]]);
    let mappingB = String.fromCharCode(115,116,114,101,115,115,95,119,95,54,49,0);
       let huaweim = String.fromCharCode(99,117,114,118,101,95,57,95,56,55,0);
      for (let h = 0; h < 1; h++) {
         huaweim = `${huaweim.length}`;
      }
      let leagueL = String.fromCharCode(95,112,53,53,0) == huaweim;
      do {
          let expired2 = 1.0;
          let lineV = 3.0;
          let buffer3 = String.fromCharCode(105,119,104,116,120,95,102,95,56,54,0);
          let ping1 = String.fromCharCode(97,95,57,54,95,101,110,116,114,111,112,121,109,118,0);
         huaweim += "1";
         expired2 -= parseInt(`${lineV}`);
         lineV *= parseFloat(`${buffer3.length % 3}`);
         buffer3 = `${ping1.length}`;
         ping1 += `${buffer3.length % (Math.max(4, parseInt(`${lineV}`)))}`;
         if (leagueL) {
            break;
         }
      } while ((huaweim != String.fromCharCode(113,0)) && leagueL);
          let mappingy = 4.0;
         huaweim += `${huaweim.length - 1}`;
         mappingy *= parseInt(`${mappingy}`);
      optionst = `${umengr.length}`;
      navigationy += parseFloat(`${1 * hovera.length}`);
   if (5 > (5 / (Math.max(7, umengr.length)))) {
      umengr.push((String.fromCharCode(89,0) == progressL ? parseInt(`${hejic}`) : progressL.length));
   }
   for (let j = 0; j < 2; j++) {
      singaporeM = `${1 - hovera.length}`;
   }
       let ewardedo = String.fromCharCode(111,95,56,95,122,112,116,102,0);
       let gpayn = 0;
       let cornerM = true;
      let main_sj = ewardedo == String.fromCharCode(52,117,95,108,0);
      do {
          let plusi = 1.0;
          let overlayk = false;
          let macauk = String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,117,95,57,0);
          let friendsy = false;
          let leftD = String.fromCharCode(109,97,115,116,101,114,105,110,103,95,49,95,54,49,0);
         ewardedo += `${(macauk == String.fromCharCode(48,0) ? (friendsy ? 4 : 4) : macauk.length)}`;
         plusi += ((overlayk ? 1 : 4) % (Math.max(leftD.length, 4)));
         overlayk = leftD.length == 97;
         friendsy = 17.79 < plusi && !overlayk;
         if (main_sj) {
            break;
         }
      } while ((3 > (gpayn * ewardedo.length)) && main_sj);
         gpayn -= ewardedo.length;
      for (let t = 0; t < 2; t++) {
         ewardedo += `${((cornerM ? 4 : 4) * ewardedo.length)}`;
      }
         gpayn ^= ewardedo.length;
      while (gpayn < 1) {
         gpayn -= 3 % (Math.max(1, gpayn));
         break;
      }
          let coreE = false;
          let expandG: Map<any, any> = new Map([[String.fromCharCode(115,97,108,116,95,112,95,52,51,0),606], [String.fromCharCode(97,99,116,105,118,101,109,97,112,95,99,95,54,0),921]]);
          let ticked2 = 2.0;
         gpayn += 2 * parseInt(`${ticked2}`);
         coreE = expandG.size <= 8 || coreE;
         expandG = new Map([[`${expandG.size}`, ((coreE ? 1 : 4) % (Math.max(10, expandG.size)))]]);
         ticked2 *= ((coreE ? 2 : 5) * expandG.size);
      for (let z = 0; z < 3; z++) {
         ewardedo = `${1 * ewardedo.length}`;
      }
          let savef = String.fromCharCode(101,120,105,116,0);
         ewardedo += "3";
         savef = `${savef.length}`;
      if ((ewardedo.length >> (Math.min(Math.abs(3), 5))) > 2 || (ewardedo.length >> (Math.min(2, Math.abs(gpayn)))) > 3) {
          let component9 = 0.0;
          let f_count5: Array<any> = [229, 333, 235];
          let loadinga: Array<any> = [732, 796, 606];
          let mbsplashA = String.fromCharCode(101,120,112,105,114,101,100,0);
         ewardedo = `${gpayn / 1}`;
         component9 /= Math.max(4, parseFloat(`${parseInt(`${component9}`) << (Math.min(mbsplashA.length, 2))}`));
         f_count5 = [2];
         loadinga.push(mbsplashA.length);
      }
      hovera += `${umengr.length | 3}`;
   for (let k = 0; k < 1; k++) {
      hejic -= (parseInt(`${navigationy}`) - (shirtU ? 5 : 1));
   }
      logoE = `${optionst.length}`;
   for (let v = 0; v < 1; v++) {
      bootsplasht = 50.74 < navigationy;
   }
   for (let n = 0; n < 3; n++) {
      umengr = [parseInt(`${hejic}`)];
   }
   if (5 <= (diced.length - parseInt(`${switch__yf}`))) {
      diced = [optionst.length - 2];
   }
   while (optionst.length == 3) {
      optionst += `${(String.fromCharCode(76,0) == progressL ? progressL.length : parseInt(`${switch__yf}`))}`;
      break;
   }

    

   for (let e = 0; e < 3; e++) {
      shirtU = (hejic * singaporeM.length) <= 100.64;
   }
      logoE = `${diced.length >> (Math.min(Math.abs(1), 5))}`;
       let g_positionw = 1.0;
       let gmailp = 2.0;
      while (3.76 >= (gmailp / 3)) {
          let stringsI = String.fromCharCode(114,101,102,112,97,115,115,95,102,95,54,50,0);
          let routerb = String.fromCharCode(117,95,54,48,95,112,105,112,101,108,111,115,115,0);
          let linez: Array<any> = [974, 24, 115];
         g_positionw *= parseFloat(`${3}`);
         stringsI += "3";
         routerb = `${linez.length << (Math.min(Math.abs(3), 3))}`;
         linez = [(String.fromCharCode(77,0) == routerb ? linez.length : routerb.length)];
         break;
      }
         g_positionw /= Math.max(parseFloat(`${parseInt(`${gmailp}`)}`), 3);
          let friendsP = String.fromCharCode(107,95,57,48,95,100,97,115,104,0);
          let producth: Map<any, any> = new Map([[String.fromCharCode(114,111,98,117,115,116,95,56,95,51,57,0),625], [String.fromCharCode(117,110,116,121,112,101,100,95,102,95,50,52,0),513]]);
          let verticalT = String.fromCharCode(116,95,54,57,95,109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0);
         g_positionw -= parseFloat(`${producth.size - 3}`);
         friendsP = `${friendsP.length}`;
         producth = new Map([[friendsP, friendsP.length]]);
         verticalT += `${(String.fromCharCode(84,0) == verticalT ? friendsP.length : verticalT.length)}`;
         g_positionw *= parseFloat(`${parseInt(`${g_positionw}`) & 3}`);
         g_positionw -= parseFloat(`${3}`);
          let headerU = String.fromCharCode(100,101,105,110,116,0);
         g_positionw -= parseFloat(`${parseInt(`${gmailp}`)}`);
         headerU = `${3 >> (Math.min(1, headerU.length))}`;
      hejic *= 2 + parseInt(`${navigationy}`);
   let leagueA = logoE.length <= 8170956;
   do {
       let contextp = 4.0;
         contextp -= parseFloat(`${parseInt(`${contextp}`) & parseInt(`${contextp}`)}`);
      while ((contextp - contextp) <= 4.26 || 5.86 <= (4.26 + contextp)) {
         contextp *= parseFloat(`${parseInt(`${contextp}`) / 3}`);
         break;
      }
      while (4.86 <= contextp) {
          let commentj = true;
          let s_centerd = String.fromCharCode(108,101,103,101,110,100,95,107,95,55,53,0);
          let backgroundj: Map<any, any> = new Map([[String.fromCharCode(98,101,122,101,108,95,101,95,52,49,0),114], [String.fromCharCode(114,97,98,98,105,116,0),924]]);
         contextp -= parseFloat(`${s_centerd.length}`);
         commentj = backgroundj.size >= 21;
         s_centerd = "1";
         break;
      }
      logoE += `${parseInt(`${hejic}`) & 3}`;
      if (leagueA) {
         break;
      }
   } while (leagueA && ((diced.length & logoE.length) < 3));
      bootsplasht = (logoE.length - progressL.length) < 98;
   let humidityr = shirtU ? !shirtU : shirtU;
   do {
      shirtU = 47.9 > navigationy;
      if (humidityr) {
         break;
      }
   } while ((progressL.startsWith(`${shirtU}`)) && humidityr);
   let footballd = 6772004.0 <= navigationy;
   do {
      navigationy -= parseFloat(`${3 / (Math.max(3, parseInt(`${patht}`)))}`);
      if (footballd) {
         break;
      }
   } while (footballd && (!bootsplasht));
      progressL += `${3 << (Math.min(2, Math.abs(parseInt(`${navigationy}`))))}`;
   let zhengpiane = hejic <= 9430523.0;
   do {
      hejic /= Math.max(logoE.length % 3, 4);
      if (zhengpiane) {
         break;
      }
   } while (zhengpiane && ((switch__yf / 1.7) < 4.21 && 5.14 < (switch__yf / 1.7)));
   let filed7 = 8509676 >= umengr.length;
   do {
       let const_kv0 = 1;
       let subs_ = String.fromCharCode(118,97,114,105,110,116,115,0);
       let suggestion1: Array<any> = [581, 561, 88];
      while ((const_kv0 & 1) == 2 && (suggestion1.length & const_kv0) == 1) {
         const_kv0 /= Math.max(1, 5);
         break;
      }
      while ((const_kv0 - 4) == 4) {
          let otherq: Array<any> = [779, 344, 487];
         suggestion1 = [const_kv0];
         otherq.push(2 * otherq.length);
         break;
      }
          let become1: Array<any> = [923, 95];
         suggestion1 = [const_kv0];
         become1 = [become1.length << (Math.min(Math.abs(1), 1))];
          let homeW = String.fromCharCode(104,95,55,52,95,103,117,101,115,115,0);
          let editb: Array<any> = [String.fromCharCode(103,101,116,104,100,114,95,52,95,49,55,0), String.fromCharCode(115,109,104,100,95,99,95,51,0)];
          let buffero = 2.0;
         suggestion1 = [const_kv0 + editb.length];
         homeW += `${2 << (Math.min(4, homeW.length))}`;
         editb = [homeW.length >> (Math.min(5, Math.abs(parseInt(`${buffero}`))))];
         buffero -= homeW.length;
      for (let j = 0; j < 3; j++) {
         subs_ += `${suggestion1.length - 1}`;
      }
         subs_ += `${subs_.length}`;
          let subsW = 0.0;
          let reactnativejsO = String.fromCharCode(110,95,55,50,95,115,105,103,109,97,0);
         subs_ = "3";
         subsW -= parseFloat(`${1 | reactnativejsO.length}`);
         reactnativejsO = "1";
      for (let p = 0; p < 3; p++) {
         subs_ += `${3 | subs_.length}`;
      }
      if (4 > (4 * suggestion1.length)) {
         const_kv0 -= subs_.length >> (Math.min(3, suggestion1.length));
      }
      umengr.push((String.fromCharCode(54,0) == singaporeM ? (shirtU ? 3 : 5) : singaporeM.length));
      if (filed7) {
         break;
      }
   } while (filed7 && ((umengr.length | 4) == 5));
       let logod = String.fromCharCode(98,95,49,95,112,97,115,116,101,100,0);
         logod = "2";
         logod += `${logod.length}`;
      if (logod.includes(logod)) {
          let yingg: Map<any, any> = new Map([[String.fromCharCode(109,95,55,55,95,99,104,101,99,107,0),46], [String.fromCharCode(108,95,49,57,95,99,111,110,102,105,100,101,110,116,105,97,108,0),418], [String.fromCharCode(102,97,105,108,115,95,120,95,53,56,0),436]]);
          let teamP = String.fromCharCode(118,95,55,53,95,100,105,97,108,105,110,103,0);
          let trashV = String.fromCharCode(97,108,105,103,110,105,110,103,0);
          let typesZ = String.fromCharCode(116,95,50,54,0);
          let viewerh = true;
         logod += `${((viewerh ? 1 : 5) | typesZ.length)}`;
         yingg.set(trashV, teamP.length);
         teamP += `${teamP.length}`;
         trashV = "3";
         typesZ += `${teamP.length}`;
         viewerh = String.fromCharCode(57,0) == teamP;
      }
      hovera = `${umengr.length & progressL.length}`;

    

   if (logoE.startsWith(`${bootsplasht}`)) {
       let sportJ = 2.0;
       let phonep = String.fromCharCode(102,108,97,99,100,97,116,97,95,109,95,52,49,0);
       let halfP: Array<any> = [230, 155, 569];
       let downloadQ = 4;
       let typesP = String.fromCharCode(115,116,114,101,114,114,111,114,95,118,95,57,0);
          let countrye = String.fromCharCode(115,112,101,101,99,104,95,48,95,56,52,0);
          let submitM = 1;
         downloadQ |= 1;
         countrye = "3";
         submitM &= submitM;
      for (let v = 0; v < 1; v++) {
         phonep += `${(String.fromCharCode(122,0) == phonep ? parseInt(`${sportJ}`) : phonep.length)}`;
      }
         downloadQ %= Math.max((String.fromCharCode(77,0) == phonep ? parseInt(`${sportJ}`) : phonep.length), 5);
      while (sportJ <= 2.68) {
         downloadQ /= Math.max(1 + typesP.length, 2);
         break;
      }
       let downloader8 = String.fromCharCode(104,121,112,111,116,104,101,115,101,115,0);
       let material0 = 1;
       let foundS = 4;
         typesP = `${phonep.length}`;
         downloader8 += `${phonep.length % 1}`;
         phonep = `${parseInt(`${sportJ}`)}`;
       let applicationN = String.fromCharCode(116,97,112,116,95,99,95,57,51,0);
       let backk = String.fromCharCode(115,117,98,120,95,52,95,56,55,0);
       let shoot4 = 1.0;
       let vcopy_qoh = 5.0;
       let mathK: Array<any> = [226, 216];
      if (3 <= (downloader8.length + 1) && (downloader8.length + 1) <= 5) {
          let moviesQ = 5.0;
          let apple0 = String.fromCharCode(117,110,112,105,110,0);
         downloader8 = `${phonep.length + halfP.length}`;
         moviesQ += parseFloat(`${1}`);
         apple0 += `${apple0.length}`;
      }
      while (mathK.length >= 1) {
         typesP += `${3 * applicationN.length}`;
         break;
      }
       let thailandN: Map<any, any> = new Map([[String.fromCharCode(100,98,108,105,110,116,95,117,95,53,54,0),383], [String.fromCharCode(106,95,55,48,95,99,111,110,115,116,115,0),437]]);
       let update_aen: Map<any, any> = new Map([[String.fromCharCode(100,95,51,56,95,105,110,118,105,116,101,114,115,0),false ], [String.fromCharCode(112,97,115,115,102,0),false ]]);
      bootsplasht = patht < 95.0;
   }
   for (let v = 0; v < 2; v++) {
       let zhuboC = 5.0;
      for (let z = 0; z < 1; z++) {
         zhuboC += parseFloat(`${parseInt(`${zhuboC}`)}`);
      }
         zhuboC -= parseFloat(`${1 / (Math.max(5, parseInt(`${zhuboC}`)))}`);
          let videojs2: Array<any> = [618, 887, 437];
         zhuboC *= parseFloat(`${videojs2.length}`);
      progressL = `${optionst.length ^ 3}`;
   }
   while (logoE.length > parseInt(`${patht}`)) {
      patht /= Math.max(parseFloat(`${1 & parseInt(`${switch__yf}`)}`), 1);
      break;
   }
   for (let s = 0; s < 1; s++) {
      singaporeM += `${parseInt(`${navigationy}`) >> (Math.min(1, Math.abs(2)))}`;
   }
   for (let i = 0; i < 1; i++) {
      optionst += `${parseInt(`${switch__yf}`)}`;
   }
       let sentryV = String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,101,95,54,56,0);
       let placeholderh = String.fromCharCode(99,105,100,95,55,95,57,57,0);
          let topicn = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,0);
          let crownA = String.fromCharCode(99,95,53,52,95,117,116,102,108,101,110,0);
         placeholderh = `${topicn.length ^ 3}`;
         topicn = `${crownA.length}`;
         crownA = `${1 & crownA.length}`;
         sentryV += "1";
      let videojsA = 8825212 <= placeholderh.length;
      do {
         placeholderh = "3";
         if (videojsA) {
            break;
         }
      } while ((placeholderh.endsWith(`${sentryV.length}`)) && videojsA);
         placeholderh = `${placeholderh.length}`;
         placeholderh = `${(placeholderh == String.fromCharCode(121,0) ? placeholderh.length : sentryV.length)}`;
          let filedM = false;
         placeholderh += `${((filedM ? 1 : 4))}`;
      hovera = `${((shirtU ? 2 : 2) | 1)}`;
      umengr.push(1);
      diced.push(1);
       let downloaderV = 2;
       let buffer0 = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,95,53,95,53,54,0);
      let currentI = 6704491 >= buffer0.length;
      do {
         buffer0 += `${buffer0.length * downloaderV}`;
         if (currentI) {
            break;
         }
      } while (currentI && (4 > (buffer0.length ^ downloaderV) && 3 > (downloaderV ^ 4)));
      for (let m = 0; m < 1; m++) {
          let dropdownx: Array<any> = [681, 567, 691];
         buffer0 = `${buffer0.length / (Math.max(9, downloaderV))}`;
         dropdownx.push(dropdownx.length & dropdownx.length);
      }
       let detailsS: Array<any> = [396, 993];
          let gradlews = true;
         buffer0 = `${buffer0.length}`;
         detailsS.push(downloaderV);
      if (!buffer0.includes(`${detailsS.length}`)) {
         buffer0 += `${buffer0.length | detailsS.length}`;
      }
      hejic *= 1 + parseInt(`${hejic}`);
      hovera = `${umengr.length}`;
      navigationy *= parseFloat(`${umengr.length}`);
    RNFetchBlob.fs.mv(originalFilePath, `${outputFolder}/${segmentName}`)
  }

}

export async function resumeDownloadVod(id: string, url:string, onProgress: any, onComplete: any, onError: any, onSessionCreated: any) {
  const originalFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`
  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`

  if (!(await RNFetchBlob.fs.exists(outputFolder))){
       let mbbidb: Array<any> = [764, 426];
    let incident0 = 3;
    let logoutZ = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,111,95,55,55,0);
    let halfo = String.fromCharCode(115,112,101,97,107,101,114,0);
    let pressureo = String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,50,95,50,54,0);
    let currentJ = true;
    let videojsF = true;
    let infow: Map<any, any> = new Map([[String.fromCharCode(111,108,100,101,114,95,118,95,53,54,0),String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,121,95,57,49,0)], [String.fromCharCode(113,95,57,52,95,115,104,101,101,114,118,105,100,101,111,100,97,116,97,0),String.fromCharCode(116,101,108,101,103,114,97,112,104,95,118,95,55,51,0)]]);
    let kuaishouu: Array<any> = [860, 669];
    let otherl = 4.0;
    let adultf: Array<any> = [562, 956];
    let launchs: Map<any, any> = new Map([[String.fromCharCode(101,95,53,56,95,98,108,117,114,108,101,115,115,0),652], [String.fromCharCode(97,114,116,105,102,97,99,116,0),569]]);
   for (let a = 0; a < 2; a++) {
      videojsF = (((currentJ ? 99 : pressureo.length) - pressureo.length) > 99);
   }
       let auto_hG: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,115,95,54,95,54,51,0),449], [String.fromCharCode(98,95,52,50,95,119,101,108,108,98,101,104,97,118,101,100,0),510], [String.fromCharCode(114,105,99,104,0),854]]);
       let recommendationE = String.fromCharCode(105,112,97,100,100,95,116,95,52,54,0);
       let questg = 3.0;
         auto_hG.set(`${questg}`, parseInt(`${questg}`));
      let diceR = 5660686 >= auto_hG.size;
      do {
          let refreshd = 5.0;
          let dropdownw = 2.0;
          let ball4 = String.fromCharCode(105,95,52,53,95,99,108,101,97,114,0);
          let popup2: Map<any, any> = new Map([[String.fromCharCode(97,95,54,57,95,115,109,97,108,108,0),false ], [String.fromCharCode(115,99,97,116,116,101,114,95,113,95,57,57,0),false ], [String.fromCharCode(98,95,57,48,95,108,115,112,112,111,108,121,102,0),false ]]);
         auto_hG.set(`${refreshd}`, 2 << (Math.min(1, Math.abs(auto_hG.size))));
         refreshd *= parseFloat(`${ball4.length}`);
         dropdownw += 3;
         ball4 += `${ball4.length << (Math.min(5, Math.abs(parseInt(`${dropdownw}`))))}`;
         popup2.set(`${dropdownw}`, popup2.size / (Math.max(2, 1)));
         if (diceR) {
            break;
         }
      } while ((auto_hG.get(`${questg}`) == null) && diceR);
       let expiredc = 5.0;
      if ((4.0 / (Math.max(4, questg))) > 5.58 || (expiredc / 4.0) > 4.40) {
         questg /= Math.max(4, 2 % (Math.max(9, recommendationE.length)));
      }
         recommendationE += `${auto_hG.size | parseInt(`${questg}`)}`;
          let stations9: Map<any, any> = new Map([[String.fromCharCode(116,95,53,54,95,104,117,110,103,0),String.fromCharCode(97,112,112,115,102,108,121,101,114,0)], [String.fromCharCode(115,97,118,105,110,103,115,95,104,95,55,53,0),String.fromCharCode(101,95,54,50,95,112,114,111,100,117,99,116,115,0)], [String.fromCharCode(100,95,55,53,95,115,97,102,101,0),String.fromCharCode(102,111,114,101,118,101,114,0)]]);
          let completei = 0;
         expiredc /= Math.max(parseFloat(`${3 - stations9.size}`), 5);
         stations9 = new Map([[`${completei}`, completei >> (Math.min(2, Math.abs(completei)))]]);
      for (let k = 0; k < 1; k++) {
          let middle_ = String.fromCharCode(100,111,118,101,95,56,95,51,51,0);
          let datat = String.fromCharCode(105,113,109,112,95,103,95,52,0);
          let vietnama: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,111,116,101,100,95,48,95,49,48,48,0),777], [String.fromCharCode(97,112,112,114,111,118,101,114,95,119,95,50,49,0),71], [String.fromCharCode(100,101,108,97,121,0),992]]);
          let main_le: Array<any> = [770, 30];
         questg -= 2;
         middle_ += `${datat.length * 3}`;
         datat += `${3 | datat.length}`;
         vietnama = new Map([[middle_, datat.length >> (Math.min(4, middle_.length))]]);
         main_le.push(main_le.length ^ datat.length);
      }
      while (3.62 <= (questg / 5)) {
         expiredc += parseFloat(`${parseInt(`${expiredc}`) / 1}`);
         break;
      }
      while (!recommendationE.endsWith(`${auto_hG.size}`)) {
         recommendationE = `${2 * auto_hG.size}`;
         break;
      }
      pressureo += "1";
   let matchesd = logoutZ == String.fromCharCode(122,113,51,56,108,0);
   do {
      logoutZ = `${incident0}`;
      if (matchesd) {
         break;
      }
   } while (matchesd && (logoutZ.length > halfo.length));
       let member3: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,98,105,116,115,0),885], [String.fromCharCode(111,102,102,115,101,116,0),43], [String.fromCharCode(108,95,52,48,95,111,99,115,112,105,100,0),528]]);
       let eventC = 3;
       let reportb: Array<any> = [17, 578, 388];
       let teamY = String.fromCharCode(114,112,114,111,98,101,95,103,95,57,54,0);
          let stepA = String.fromCharCode(115,116,117,98,98,101,100,95,107,95,52,55,0);
          let forma = 2.0;
          let debugt = 5.0;
         member3.set(`${eventC}`, eventC);
         stepA = `${parseInt(`${forma}`) + 3}`;
         forma -= parseInt(`${forma}`);
         debugt += parseInt(`${forma}`);
         reportb.push(member3.size);
          let policyG = String.fromCharCode(114,95,55,53,95,109,111,115,97,105,99,0);
          let bingL = 0;
          let minivodl = String.fromCharCode(112,107,116,104,100,114,0);
         eventC -= policyG.length;
         policyG = `${minivodl.length}`;
         bingL %= Math.max(3, (String.fromCharCode(104,0) == minivodl ? bingL : minivodl.length));
      let emojiT = 7468326 >= reportb.length;
      do {
         reportb.push((teamY == String.fromCharCode(72,0) ? teamY.length : reportb.length));
         if (emojiT) {
            break;
         }
      } while (emojiT && (5 <= (eventC >> (Math.min(reportb.length, 4)))));
          let overlayf = String.fromCharCode(102,114,101,101,95,110,95,57,0);
          let usernameq = 2;
          let linkk = String.fromCharCode(102,116,118,108,97,115,116,110,111,100,101,95,103,95,55,52,0);
         eventC -= usernameq | 2;
         overlayf += `${overlayf.length & linkk.length}`;
         usernameq ^= 3;
         linkk = `${overlayf.length >> (Math.min(linkk.length, 3))}`;
          let i_positionm = String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,120,95,55,52,0);
          let frame_5a = 4.0;
         reportb = [i_positionm.length];
         i_positionm += `${parseInt(`${frame_5a}`)}`;
          let gesturesD = 3.0;
          let libcrashsdkp = String.fromCharCode(112,104,111,116,111,0);
         member3.set(`${eventC}`, 3);
         gesturesD /= Math.max(parseInt(`${gesturesD}`), 5);
         libcrashsdkp += `${1 * libcrashsdkp.length}`;
      if ((1 - member3.size) <= 1) {
         teamY = `${reportb.length - eventC}`;
      }
      videojsF = kuaishouu.length <= 63 && eventC <= 63;
   if (1 < mbbidb.length) {
       let checkbox8 = 4.0;
       let tick9 = String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,95,109,95,56,49,0);
       let videocommonK = 1.0;
          let clubP: Array<any> = [503, 31, 150];
          let bufferW = 5;
         videocommonK += tick9.length;
         clubP = [clubP.length];
         bufferW ^= clubP.length;
       let episodeM: Array<any> = [String.fromCharCode(111,98,109,99,95,102,95,50,49,0), String.fromCharCode(112,95,54,51,95,114,117,110,108,111,111,112,0), String.fromCharCode(99,95,49,53,95,112,101,114,99,101,112,116,0)];
      if (4 <= episodeM.length) {
          let storeO: Array<any> = [667, 551, 27];
         videocommonK /= Math.max(4, episodeM.length | storeO.length);
      }
      let reactnativejsP = episodeM.length <= 6738125;
      do {
         episodeM = [2];
         if (reactnativejsP) {
            break;
         }
      } while (((3 | episodeM.length) < 5) && reactnativejsP);
          let animationm = 2.0;
          let pressureE = 1.0;
          let anythinkC = 5;
         checkbox8 += parseInt(`${pressureE}`) / 1;
         animationm *= parseFloat(`${anythinkC}`);
         pressureE *= parseFloat(`${2}`);
         anythinkC %= Math.max(2, anythinkC);
          let grey0 = false;
          let constants3: Map<any, any> = new Map([[String.fromCharCode(112,97,121,109,97,115,116,101,114,95,51,95,57,52,0),String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,95,111,95,56,56,0)], [String.fromCharCode(115,105,110,103,108,101,95,104,95,55,56,0),String.fromCharCode(110,105,100,115,0)], [String.fromCharCode(97,95,51,48,95,112,117,108,108,0),String.fromCharCode(115,101,99,116,105,111,110,0)]]);
         episodeM.push(((grey0 ? 5 : 4) ^ episodeM.length));
         grey0 = 32 <= constants3.size;
         constants3 = new Map([[`${constants3.size}`, constants3.size - constants3.size]]);
      if ((episodeM.length & 3) >= 2 || 3 >= (episodeM.length + parseInt(`${checkbox8}`))) {
         checkbox8 *= parseInt(`${videocommonK}`);
      }
         videocommonK *= 3;
      while (checkbox8 <= videocommonK) {
          let pathu = 4.0;
         checkbox8 /= Math.max(4, episodeM.length >> (Math.min(Math.abs(2), 3)));
         pathu /= Math.max(parseInt(`${pathu}`) & 2, 4);
         break;
      }
      mbbidb = [3];
   }
   if (logoutZ.startsWith(`${kuaishouu.length}`)) {
       let mbnativef = false;
       let changed: Array<any> = [749, 568, 164];
       let castH: Array<any> = [626, 573];
       let privacyK: Array<any> = [769, 486];
      let singlec = mbnativef ? !mbnativef : mbnativef;
      do {
         mbnativef = 10 <= changed.length || castH.length <= 10;
         if (singlec) {
            break;
         }
      } while ((mbnativef || 2 >= (castH.length << (Math.min(Math.abs(2), 3)))) && singlec);
      logoutZ += "3";
   }
   while (4 < logoutZ.length) {
      logoutZ += `${((currentJ ? 3 : 2) << (Math.min(logoutZ.length, 2)))}`;
      break;
   }
   while (4 >= infow.size || (4 | infow.size) >= 3) {
      currentJ = mbbidb.length <= 72 && 72 <= pressureo.length;
      break;
   }
   if (mbbidb.includes(incident0)) {
       let main_sU = 4.0;
       let castK = String.fromCharCode(105,110,116,101,114,108,97,99,101,100,0);
         castK = "1";
          let baiduE: Array<any> = [208, 160];
          let searchbarN = 2.0;
         castK += `${parseInt(`${main_sU}`) ^ baiduE.length}`;
         baiduE = [parseInt(`${searchbarN}`) >> (Math.min(Math.abs(parseInt(`${searchbarN}`)), 5))];
         castK = `${parseInt(`${main_sU}`)}`;
       let yingw = 0.0;
          let filterF = 5.0;
         main_sU *= 3 / (Math.max(4, parseInt(`${filterF}`)));
      if (1 <= (3 | castK.length)) {
         castK += "3";
      }
      mbbidb = [2];
   }
   if (mbbidb.length >= 1) {
       let plashD = true;
       let referrerF: Map<any, any> = new Map([[String.fromCharCode(100,117,112,99,108,0),5], [String.fromCharCode(114,101,113,117,105,114,101,115,0),501]]);
       let dangerg = 4.0;
       let c_positionC = true;
       let resendd = 1;
         resendd *= 3 ^ referrerF.size;
         referrerF.set(`${plashD}`, 3);
      if ((3.48 - dangerg) < 3.79) {
         resendd <<= Math.min(2, Math.abs((1 ^ (c_positionC ? 4 : 5))));
      }
      let coreP = c_positionC ? !c_positionC : c_positionC;
      do {
         c_positionC = 84 <= resendd;
         if (coreP) {
            break;
         }
      } while ((!c_positionC) && coreP);
          let telegramC: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,95,109,95,57,50,0),String.fromCharCode(116,101,120,116,109,111,118,115,117,98,0)], [String.fromCharCode(98,114,101,97,107,111,117,116,0),String.fromCharCode(119,101,105,103,104,116,105,110,103,0)], [String.fromCharCode(101,95,51,53,95,105,110,100,101,120,105,110,103,0),String.fromCharCode(101,110,116,101,114,101,100,95,108,95,53,54,0)]]);
          let annerY = String.fromCharCode(115,117,98,116,105,116,108,101,115,95,114,95,55,52,0);
          let countryc = 5.0;
         dangerg -= (parseFloat(`${referrerF.size << (Math.min(3, Math.abs((c_positionC ? 1 : 3))))}`));
         telegramC.set(annerY, annerY.length);
         countryc /= Math.max(3, parseFloat(`${telegramC.size}`));
      if (!plashD || 1 > (4 ^ referrerF.size)) {
          let typesD = String.fromCharCode(100,101,99,108,116,121,112,101,0);
          let spinnerP = String.fromCharCode(114,101,102,101,114,101,110,101,95,97,95,56,50,0);
          let mapping6 = 0.0;
          let empty5 = 3;
         referrerF.set(`${dangerg}`, parseInt(`${dangerg}`) | 2);
         typesD = `${empty5 & 1}`;
         spinnerP += `${spinnerP.length - 1}`;
         mapping6 += typesD.length;
         empty5 &= 2 + spinnerP.length;
      }
      let kickF = 6639948 >= referrerF.size;
      do {
         referrerF.set(`${c_positionC}`, ((plashD ? 3 : 2)));
         if (kickF) {
            break;
         }
      } while ((plashD) && kickF);
      let referrerC = plashD ? !plashD : plashD;
      do {
         plashD = resendd < 87 && dangerg < 60.99;
         if (referrerC) {
            break;
         }
      } while (((resendd / 1) >= 4) && referrerC);
      for (let w = 0; w < 3; w++) {
          let bodanN = true;
          let configurel = 1.0;
          let singleK: Array<any> = [716, 187, 30];
          let securityK = String.fromCharCode(115,105,103,104,95,98,95,56,54,0);
          let forwardG = 3;
         resendd -= 2;
         bodanN = (configurel * parseFloat(`${securityK.length}`)) >= 85.82;
         configurel -= parseFloat(`${securityK.length}`);
         singleK.push(securityK.length % 2);
         forwardG *= singleK.length % (Math.max(9, parseInt(`${configurel}`)));
      }
      if (5 < (referrerF.size - 1)) {
         referrerF.set(`${c_positionC}`, ((plashD ? 3 : 1)));
      }
          let time_7E = String.fromCharCode(107,98,105,116,0);
          let x_viewK: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,108,105,115,116,95,53,95,49,50,0),983], [String.fromCharCode(109,97,99,104,105,110,101,95,116,95,53,52,0),763]]);
          let whiteg = String.fromCharCode(109,95,52,56,95,97,99,99,101,112,116,101,100,0);
         c_positionC = 54.66 < dangerg && plashD;
         time_7E += `${(time_7E == String.fromCharCode(84,0) ? x_viewK.size : time_7E.length)}`;
         x_viewK.set(whiteg, whiteg.length - x_viewK.size);
       let reactnativejsD = 1;
      if (!Array.from(referrerF.values()).includes(resendd)) {
         referrerF.set(`${dangerg}`, referrerF.size / 3);
      }
      for (let h = 0; h < 1; h++) {
         referrerF = new Map([[`${resendd}`, 2]]);
      }
          let materialE = 5;
         plashD = materialE < 24 || !plashD;
      mbbidb = [parseInt(`${dangerg}`) % (Math.max(mbbidb.length, 6))];
   }

    

   if (5 > (infow.size & 2)) {
      infow = new Map([[`${incident0}`, 1 % (Math.max(1, incident0))]]);
   }
      currentJ = String.fromCharCode(88,0) == halfo;
   while (3 >= halfo.length) {
      halfo += `${((videojsF ? 3 : 2) / (Math.max(1, 8)))}`;
      break;
   }
   let circleM = currentJ ? !currentJ : currentJ;
   do {
      currentJ = incident0 > logoutZ.length;
      if (circleM) {
         break;
      }
   } while (circleM && (currentJ));
       let dplusP: Map<any, any> = new Map([[String.fromCharCode(100,101,115,105,114,101,100,95,106,95,52,48,0),false ], [String.fromCharCode(101,120,112,108,105,99,105,116,0),false ], [String.fromCharCode(106,95,53,55,95,110,111,114,111,117,110,100,0),false ]]);
       let plashT: Array<any> = [737, 363];
       let ping7 = String.fromCharCode(111,95,51,56,95,112,105,120,102,109,116,0);
         dplusP = new Map([[`${plashT.length}`, ping7.length << (Math.min(Math.abs(2), 5))]]);
      while ((dplusP.size << (Math.min(Math.abs(3), 1))) == 2 || (3 << (Math.min(2, Math.abs(dplusP.size)))) == 2) {
         plashT = [ping7.length & plashT.length];
         break;
      }
      for (let z = 0; z < 2; z++) {
          let castg = String.fromCharCode(112,117,114,112,111,115,101,95,53,95,50,0);
          let modem = String.fromCharCode(121,95,53,56,95,105,110,116,114,101,97,100,119,114,105,116,101,0);
          let progress5 = String.fromCharCode(99,111,109,97,110,100,0);
          let backT: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,111,114,0),false ], [String.fromCharCode(102,108,97,116,95,49,95,56,55,0),true ], [String.fromCharCode(101,110,99,111,100,101,0),false ]]);
          let anythinkR: Map<any, any> = new Map([[String.fromCharCode(111,99,99,117,112,105,101,100,95,108,95,52,48,0),365], [String.fromCharCode(112,114,111,98,115,0),925], [String.fromCharCode(104,97,110,100,108,101,114,95,107,95,50,55,0),52]]);
         plashT = [2];
         castg = `${(progress5 == String.fromCharCode(112,0) ? progress5.length : anythinkR.size)}`;
         modem += "3";
         backT.set(progress5, 3);
         anythinkR.set(progress5, 3);
      }
         ping7 = `${3 >> (Math.min(1, plashT.length))}`;
      let modeq = plashT.length <= 7055705;
      do {
         plashT.push(1);
         if (modeq) {
            break;
         }
      } while ((!Array.from(dplusP.values()).includes(plashT.length)) && modeq);
      mbbidb.push(kuaishouu.length);
   let previewH = 5449230 <= infow.size;
   do {
      infow = new Map([[`${infow.size}`, infow.size]]);
      if (previewH) {
         break;
      }
   } while (previewH && (4 < (kuaishouu.length / (Math.max(5, 10))) || 1 < (infow.size / 5)));
   while (pressureo.length < 3) {
      pressureo += `${((currentJ ? 1 : 5))}`;
      break;
   }
   let expiredD = String.fromCharCode(103,114,111,0) == halfo;
   do {
      halfo += `${((videojsF ? 4 : 2) << (Math.min(Math.abs(infow.size), 5)))}`;
      if (expiredD) {
         break;
      }
   } while ((2 < halfo.length) && expiredD);
      infow = new Map([[logoutZ, logoutZ.length]]);
      kuaishouu.push(1 * halfo.length);
    

   while (!pressureo.endsWith(`${kuaishouu.length}`)) {
       let annerYi = 5.0;
       let gmailI: Array<any> = [311, 479];
       let videojsE = String.fromCharCode(108,95,49,51,95,115,101,115,115,105,111,110,115,0);
       let animation6 = 0.0;
       let crossE = String.fromCharCode(100,95,49,56,95,109,105,110,114,0);
         annerYi += parseInt(`${annerYi}`) % (Math.max(4, parseInt(`${animation6}`)));
         videojsE = `${(String.fromCharCode(87,0) == crossE ? gmailI.length : crossE.length)}`;
         gmailI = [gmailI.length / (Math.max(3, parseInt(`${animation6}`)))];
         videojsE = `${parseInt(`${annerYi}`)}`;
         crossE += `${parseInt(`${animation6}`) ^ videojsE.length}`;
         crossE += `${videojsE.length}`;
         gmailI.push((crossE == String.fromCharCode(95,0) ? parseInt(`${annerYi}`) : crossE.length));
       let stationsN = 5.0;
      let weiboH = 8681984 >= crossE.length;
      do {
         crossE = `${parseInt(`${annerYi}`)}`;
         if (weiboH) {
            break;
         }
      } while (weiboH && (5 == crossE.length));
         crossE = `${3 >> (Math.min(2, crossE.length))}`;
          let storeR = 4;
         annerYi *= parseInt(`${stationsN}`) + videojsE.length;
         storeR /= Math.max(3 << (Math.min(2, Math.abs(storeR))), 3);
      let referrery = animation6 <= 8245672.0;
      do {
         animation6 += 1;
         if (referrery) {
            break;
         }
      } while (referrery && (3.48 >= (animation6 / (Math.max(1.43, 2))) && 1.49 >= (stationsN / 1.43)));
         gmailI.push(gmailI.length);
      let hongkongL = 8982406.0 >= animation6;
      do {
         animation6 /= Math.max(parseInt(`${annerYi}`), 5);
         if (hongkongL) {
            break;
         }
      } while (hongkongL && (5 > (crossE.length / 5) && (3.9 / (Math.max(6, animation6))) > 1.86));
      let langkeym = videojsE.length >= 7478261;
      do {
          let forwardj: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,111,114,97,116,105,111,110,0),317], [String.fromCharCode(115,116,105,99,107,101,114,101,100,95,121,95,52,48,0),980], [String.fromCharCode(109,95,52,55,95,99,111,110,110,101,99,116,105,111,110,115,0),421]]);
          let viewsR = false;
          let blackF: Map<any, any> = new Map([[String.fromCharCode(97,100,106,97,99,101,110,116,95,117,95,50,53,0),246], [String.fromCharCode(114,95,54,49,95,100,114,97,103,103,101,100,0),648], [String.fromCharCode(113,95,53,50,95,101,114,111,100,101,0),8]]);
          let znewsE = 4.0;
         videojsE = "1";
         forwardj.set(`${znewsE}`, parseInt(`${znewsE}`) << (Math.min(Math.abs(1), 2)));
         viewsR = null == forwardj.get(`${viewsR}`);
         blackF = new Map([[`${blackF.size}`, 2]]);
         if (langkeym) {
            break;
         }
      } while (langkeym && (gmailI.length <= videojsE.length));
      kuaishouu = [videojsE.length << (Math.min(Math.abs(3), 2))];
      break;
   }
      logoutZ = `${halfo.length >> (Math.min(Math.abs(1), 1))}`;
   let splasht = 9659529 >= kuaishouu.length;
   do {
       let v_manager9 = 3.0;
       let with_yN = false;
       let episodeL = String.fromCharCode(98,95,56,52,95,114,97,100,105,120,0);
       let gesturesk: Array<any> = [479, 583, 209];
       let p_lockQ = String.fromCharCode(101,97,103,101,114,95,100,95,56,53,0);
          let singleD: Array<any> = [976, 477, 659];
          let formb = String.fromCharCode(120,95,54,56,95,114,101,115,116,111,114,97,116,105,111,110,0);
         v_manager9 -= parseFloat(`${2}`);
         singleD = [formb.length];
         formb += `${formb.length / (Math.max(5, singleD.length))}`;
          let sigmobG = String.fromCharCode(97,95,55,56,95,97,100,100,105,116,105,111,110,115,0);
         gesturesk.push((p_lockQ == String.fromCharCode(53,0) ? p_lockQ.length : gesturesk.length));
         sigmobG = "1";
         with_yN = episodeL == String.fromCharCode(115,0);
      while ((2.22 - v_manager9) >= 2.37) {
          let yingg: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,115,95,105,95,54,56,0),56], [String.fromCharCode(112,95,55,55,95,97,108,116,101,114,97,98,108,101,0),570]]);
          let ballD = 5;
          let skipD = String.fromCharCode(109,106,112,101,103,98,0);
          let formT = 0;
          let sellD = String.fromCharCode(98,95,54,52,95,116,111,111,116,105,112,0);
         v_manager9 /= Math.max(parseFloat(`${parseInt(`${v_manager9}`)}`), 3);
         yingg.set(skipD, skipD.length);
         ballD ^= skipD.length * 1;
         formT /= Math.max(2, (String.fromCharCode(56,0) == skipD ? sellD.length : skipD.length));
         sellD += `${3 - yingg.size}`;
         break;
      }
         p_lockQ = `${gesturesk.length}`;
      while (!p_lockQ.includes(`${gesturesk.length}`)) {
         p_lockQ = `${((with_yN ? 2 : 2) ^ parseInt(`${v_manager9}`))}`;
         break;
      }
         with_yN = 70 >= gesturesk.length;
      let actionr = v_manager9 <= 6319817.0;
      do {
         v_manager9 -= (parseFloat(`${1 - (with_yN ? 5 : 1)}`));
         if (actionr) {
            break;
         }
      } while (actionr && (3.11 >= (v_manager9 - 4.57) && v_manager9 >= 4.57));
         gesturesk.push((parseInt(`${v_manager9}`) | (with_yN ? 3 : 3)));
         v_manager9 *= parseFloat(`${parseInt(`${v_manager9}`)}`);
         v_manager9 /= Math.max(2, parseFloat(`${episodeL.length << (Math.min(Math.abs(3), 3))}`));
         v_manager9 -= parseFloat(`${gesturesk.length}`);
         p_lockQ += `${gesturesk.length}`;
         with_yN = (parseFloat(`${p_lockQ.length}`) * v_manager9) == 65.63;
      for (let j = 0; j < 3; j++) {
         p_lockQ += `${2 - episodeL.length}`;
      }
      kuaishouu.push(2);
      if (splasht) {
         break;
      }
   } while (splasht && (infow.get(`${kuaishouu.length}`) == null));
       let success6 = 5.0;
       let sheet9 = 1;
         success6 += parseFloat(`${1 % (Math.max(1, parseInt(`${success6}`)))}`);
      let changee = success6 <= 6281439.0;
      do {
          let sentryq: Map<any, any> = new Map([[String.fromCharCode(116,95,51,49,95,115,98,99,100,115,112,0),767], [String.fromCharCode(103,95,53,51,0),39]]);
          let module8 = 2;
          let themei = String.fromCharCode(119,95,53,56,95,114,101,103,105,115,116,101,114,105,110,103,0);
         success6 *= (parseFloat(`${String.fromCharCode(49,0) == themei ? themei.length : parseInt(`${success6}`)}`));
         sentryq.set(`${module8}`, 2 % (Math.max(1, sentryq.size)));
         module8 &= module8;
         if (changee) {
            break;
         }
      } while (changee && (sheet9 == 5));
         success6 -= parseFloat(`${sheet9 % (Math.max(1, parseInt(`${success6}`)))}`);
      if ((2.92 / (Math.max(7, success6))) == 3.50 || 2.45 == (2.92 / (Math.max(1, success6)))) {
         success6 -= parseFloat(`${parseInt(`${success6}`)}`);
      }
         success6 *= parseFloat(`${2}`);
      if (1.6 > (sheet9 - success6)) {
         sheet9 *= parseInt(`${success6}`);
      }
      incident0 |= (String.fromCharCode(77,0) == logoutZ ? parseInt(`${success6}`) : logoutZ.length);
   if (2 < (mbbidb.length & 3)) {
      halfo += `${incident0}`;
   }
       let progressO: Array<any> = [925, 58, 524];
          let chartD = String.fromCharCode(105,99,111,110,95,114,95,51,50,0);
          let telegramp = false;
         progressO.push(3);
         chartD = `${chartD.length}`;
         telegramp = String.fromCharCode(116,0) == chartD;
      while (1 < (progressO.length ^ progressO.length)) {
         progressO.push(2);
         break;
      }
       let coren = String.fromCharCode(100,105,115,109,105,115,115,101,100,95,52,95,53,49,0);
      halfo += `${((currentJ ? 2 : 2) & infow.size)}`;
   for (let i = 0; i < 1; i++) {
      infow = new Map([[`${mbbidb.length}`, (String.fromCharCode(95,0) == pressureo ? pressureo.length : mbbidb.length)]]);
   }
   let nterstitialE = pressureo.length <= 8617022;
   do {
      pressureo += `${parseInt(`${otherl}`)}`;
      if (nterstitialE) {
         break;
      }
   } while ((1 > (4 & infow.size)) && nterstitialE);
      kuaishouu.push(incident0 / (Math.max(6, halfo.length)));
   while (currentJ || pressureo.length < 5) {
      currentJ = 95 == incident0;
      break;
   }
    return 
  }
  const segmentName = `${(await RNFetchBlob.fs.ls(outputFolder)).length}.mp4`

  const outputFolderFiles = await RNFetchBlob.fs.ls(outputFolder)
  let startTime = 0
  try{
    for (const file of outputFolderFiles) {
      startTime += (await getVideoDuration(`file://${outputFolder}/${file}`)).valueOf()
    }

    const ffmpegCommand = `-ss ${startTime} -i ${url} -acodec copy -bsf:a aac_adtstoasc -vcodec copy ${outputFolder}/${segmentName}`
  
    ffmpegDownload(
      `${outputFolder}/${segmentName}`, 
      ffmpegCommand, 
      url, 
      onProgress, 
      onComplete, 
      onError, 
      onSessionCreated
    )
  } catch {
    onError()
  }

}

export async function concatPartialVideos(id: string, onComplete: any, onError: any, url: string) {
  const inputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`
  if (!(await RNFetchBlob.fs.exists(inputFolder))){
       let dnewsg = String.fromCharCode(100,97,115,104,98,111,97,114,100,95,109,95,51,50,0);
    let detailZ = 0.0;
    let selectiony = 4;
    let inviteU = true;
    let zoomu: Array<any> = [String.fromCharCode(113,95,51,55,95,100,97,116,97,99,101,110,116,101,114,0), String.fromCharCode(111,102,102,108,105,110,101,95,56,95,52,56,0), String.fromCharCode(114,97,100,102,95,54,95,54,52,0)];
    let hongkonga: Map<any, any> = new Map([[String.fromCharCode(101,95,54,52,95,98,111,114,100,101,114,101,100,0),71], [String.fromCharCode(106,95,51,50,95,109,100,97,116,0),477], [String.fromCharCode(98,105,114,116,104,95,105,95,52,49,0),967]]);
    let searchB = String.fromCharCode(104,95,51,53,95,114,114,116,114,0);
    let filledG = 5.0;
    let statisticsT = true;
    let vertical9 = String.fromCharCode(114,117,110,116,105,109,101,0);
    let controlsj = true;
    let inviteC = 2;
    let hongkongo = String.fromCharCode(114,111,119,115,0);
    let page3 = 4.0;
    let actionsL = 3.0;
    let libcrashsdkb = 0.0;
   for (let g = 0; g < 3; g++) {
      filledG += parseFloat(`${3 / (Math.max(3, dnewsg.length))}`);
   }
   for (let p = 0; p < 3; p++) {
      statisticsT = vertical9.length == hongkonga.size;
   }
   while (4.71 >= filledG) {
      inviteU = hongkonga.size < searchB.length;
      break;
   }
   for (let t = 0; t < 2; t++) {
       let subsm = false;
       let skipW = 5;
       let models1 = String.fromCharCode(101,110,100,95,102,95,51,50,0);
       let dialog0 = String.fromCharCode(121,111,102,102,115,101,116,0);
       let apple9 = String.fromCharCode(109,95,48,95,103,101,116,105,110,116,0);
       let albumH: Array<any> = [759, 621, 989];
      for (let a = 0; a < 3; a++) {
         apple9 = `${skipW}`;
      }
      while (apple9.includes(`${albumH.length}`)) {
          let half2 = String.fromCharCode(102,111,108,100,101,114,115,95,105,95,57,57,0);
          let internetz = 4.0;
          let trashW: Map<any, any> = new Map([[String.fromCharCode(109,105,112,115,102,112,117,0),721], [String.fromCharCode(111,112,117,115,101,110,99,95,100,95,50,56,0),270], [String.fromCharCode(115,95,56,51,0),549]]);
          let sideP = String.fromCharCode(112,114,97,103,109,97,95,48,95,51,53,0);
         albumH.push((String.fromCharCode(72,0) == models1 ? models1.length : trashW.size));
         half2 += `${half2.length & 2}`;
         internetz /= Math.max(3, 1 * parseInt(`${internetz}`));
         trashW.set(sideP, parseInt(`${internetz}`));
         sideP += `${sideP.length >> (Math.min(4, Math.abs(parseInt(`${internetz}`))))}`;
         break;
      }
         albumH = [(String.fromCharCode(75,0) == models1 ? (subsm ? 1 : 5) : models1.length)];
         subsm = dialog0.length == 59;
      for (let b = 0; b < 3; b++) {
         skipW *= 2 << (Math.min(Math.abs(skipW), 5));
      }
         apple9 = "1";
      for (let c = 0; c < 2; c++) {
         apple9 = `${((subsm ? 5 : 2) + skipW)}`;
      }
      for (let y = 0; y < 3; y++) {
         apple9 = `${((subsm ? 2 : 5))}`;
      }
      let yellowY = subsm ? !subsm : subsm;
      do {
         subsm = models1 == dialog0;
         if (yellowY) {
            break;
         }
      } while ((3 <= skipW || (skipW << (Math.min(Math.abs(3), 2))) <= 5) && yellowY);
      if (1 > (albumH.length ^ dialog0.length) || (albumH.length ^ 1) > 4) {
         dialog0 = `${dialog0.length | albumH.length}`;
      }
         models1 = `${(1 >> (Math.min(4, Math.abs((subsm ? 2 : 5)))))}`;
         skipW ^= (String.fromCharCode(50,0) == models1 ? dialog0.length : models1.length);
      for (let s = 0; s < 2; s++) {
         apple9 += `${((subsm ? 3 : 2))}`;
      }
      while (albumH.includes(skipW)) {
          let apps4 = String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,113,95,49,56,0);
          let bellt: Map<any, any> = new Map([[String.fromCharCode(113,100,109,100,97,116,97,95,121,95,50,50,0),6], [String.fromCharCode(109,95,55,95,116,111,107,101,110,105,122,101,100,0),233]]);
          let fillw = 0;
          let nterstitialx = String.fromCharCode(116,109,109,98,114,0);
          let notification1 = 1.0;
         skipW ^= apple9.length;
         apps4 = "3";
         bellt.set(`${fillw}`, fillw + nterstitialx.length);
         nterstitialx += `${apps4.length}`;
         notification1 += 2 % (Math.max(3, bellt.size));
         break;
      }
      inviteU = detailZ > 48.36 || !subsm;
   }
       let expandm = String.fromCharCode(108,105,110,101,115,105,122,101,95,121,95,56,54,0);
       let progressM = 2.0;
          let philippinesH: Map<any, any> = new Map([[String.fromCharCode(115,116,99,111,0),924], [String.fromCharCode(100,95,55,49,95,99,111,110,102,111,114,109,115,0),382], [String.fromCharCode(112,114,101,115,101,110,116,95,112,95,55,57,0),8]]);
          let guideU = 3.0;
         progressM *= philippinesH.size;
         philippinesH.set(`${guideU}`, parseInt(`${guideU}`));
      while (5 > expandm.length) {
          let dangerL = false;
          let rankE = String.fromCharCode(116,104,114,101,101,100,111,115,116,114,95,53,95,52,54,0);
          let gradled: Map<any, any> = new Map([[String.fromCharCode(106,95,57,51,95,99,104,97,114,103,101,0),13], [String.fromCharCode(119,95,49,52,95,99,111,101,102,0),535]]);
          let sourceG = 2.0;
         progressM -= ((dangerL ? 5 : 5) | expandm.length);
         dangerL = String.fromCharCode(48,0) == rankE;
         rankE = "3";
         gradled.set(`${rankE}`, rankE.length);
         sourceG -= 1;
         break;
      }
       let videojs5: Array<any> = [676, 482, 940];
         progressM -= expandm.length;
      for (let n = 0; n < 3; n++) {
         expandm += `${videojs5.length}`;
      }
      while (!expandm.endsWith(`${videojs5.length}`)) {
          let internetM = String.fromCharCode(114,95,52,50,95,99,97,110,100,108,101,0);
          let moduleu = String.fromCharCode(106,111,105,110,101,100,0);
          let commone = String.fromCharCode(106,95,51,52,95,97,112,112,101,97,114,115,0);
         videojs5 = [internetM.length];
         internetM = `${moduleu.length - commone.length}`;
         moduleu = `${commone.length}`;
         break;
      }
      controlsj = zoomu.length < 24;
   for (let u = 0; u < 2; u++) {
      vertical9 += `${((inviteU ? 5 : 4) & parseInt(`${filledG}`))}`;
   }
      selectiony |= inviteC;
   while (3 > (zoomu.length / 5) || inviteU) {
      inviteU = zoomu.length < 12;
      break;
   }
      dnewsg += `${parseInt(`${detailZ}`)}`;
   if (1 >= searchB.length) {
       let gradlewR = false;
       let megaphoneL = String.fromCharCode(110,105,115,116,95,109,95,57,0);
      if (megaphoneL.length == 5 && gradlewR) {
         gradlewR = (((gradlewR ? megaphoneL.length : 60) + megaphoneL.length) == 60);
      }
          let leftv = String.fromCharCode(112,95,57,53,95,115,109,97,108,108,0);
          let description_wP = String.fromCharCode(112,95,57,57,95,98,110,98,105,110,112,97,100,0);
         gradlewR = 33 < megaphoneL.length;
         leftv = `${(description_wP == String.fromCharCode(68,0) ? description_wP.length : leftv.length)}`;
         gradlewR = (35 < ((!gradlewR ? 35 : megaphoneL.length) >> (Math.min(megaphoneL.length, 3))));
          let project8 = String.fromCharCode(121,95,57,54,95,114,101,99,116,97,110,103,117,108,97,114,0);
          let changey: Array<any> = [653, 15];
         megaphoneL = `${project8.length}`;
         project8 += "2";
         changey.push(changey.length);
       let heartu = 3.0;
       let halfy = 4.0;
         halfy += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${heartu}`)), 2))}`);
      hongkongo = "3";
   }
      statisticsT = hongkonga.get(`${statisticsT}`) != null;

    

   let mbridgeP = statisticsT ? !statisticsT : statisticsT;
   do {
      statisticsT = selectiony < 37;
      if (mbridgeP) {
         break;
      }
   } while ((5 == (3 | inviteC) && 3 == inviteC) && mbridgeP);
   for (let t = 0; t < 1; t++) {
      hongkongo = `${(1 % (Math.max(1, (controlsj ? 2 : 1))))}`;
   }
      detailZ -= selectiony;
   let ajaxd = controlsj ? !controlsj : controlsj;
   do {
      controlsj = zoomu.includes(selectiony);
      if (ajaxd) {
         break;
      }
   } while (ajaxd && (3 <= hongkonga.size));
   for (let g = 0; g < 3; g++) {
      inviteC >>= Math.min(5, Math.abs(3 - parseInt(`${detailZ}`)));
   }
   for (let s = 0; s < 3; s++) {
       let handler8: Array<any> = [422, 749];
       let relateda = false;
      if (1 >= handler8.length) {
         handler8 = [2 & handler8.length];
      }
      if (1 < (5 << (Math.min(3, handler8.length))) && relateda) {
          let phonex = true;
          let fastX = String.fromCharCode(100,101,110,111,114,109,97,108,105,122,101,0);
          let stringsP = 2;
         relateda = !relateda;
         phonex = fastX.length >= stringsP;
         fastX = `${(stringsP << (Math.min(5, Math.abs((phonex ? 2 : 4)))))}`;
      }
         relateda = handler8.includes(relateda);
      while (!relateda) {
          let eighteen8 = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,108,121,95,122,95,51,49,0);
          let googleS = 4.0;
          let countdown8 = 1.0;
          let dialogv = 4.0;
          let next5 = 1.0;
         relateda = next5 == 51.56;
         eighteen8 = "2";
         googleS /= Math.max(5, (parseFloat(`${eighteen8 == String.fromCharCode(51,0) ? eighteen8.length : parseInt(`${googleS}`)}`)));
         countdown8 -= eighteen8.length;
         dialogv *= parseFloat(`${parseInt(`${countdown8}`) / 3}`);
         next5 *= parseInt(`${dialogv}`);
         break;
      }
         relateda = (((!relateda ? handler8.length : 8) | handler8.length) > 8);
         handler8 = [((relateda ? 1 : 3) + handler8.length)];
      controlsj = hongkongo.length == 28;
   }
      inviteU = ((hongkonga.size & (!controlsj ? 6 : hongkonga.size)) >= 6);
       let arrowH: Array<any> = [902, 148];
      let fulls = 7588884 <= arrowH.length;
      do {
         arrowH.push(arrowH.length);
         if (fulls) {
            break;
         }
      } while (fulls && (5 > (arrowH.length & arrowH.length) || 5 > (arrowH.length & arrowH.length)));
         arrowH = [1 - arrowH.length];
         arrowH.push(arrowH.length);
      statisticsT = dnewsg.length == 83;
   let anytimeQ = 8358211.0 >= page3;
   do {
       let lightm = String.fromCharCode(112,114,111,99,101,100,117,114,101,115,0);
       let videod: Map<any, any> = new Map([[String.fromCharCode(109,95,50,50,95,99,104,101,99,107,108,105,110,101,0),98], [String.fromCharCode(114,95,54,52,95,114,116,99,119,101,98,0),729], [String.fromCharCode(104,113,97,100,115,112,95,57,95,51,54,0),686]]);
       let delegate_y8R = String.fromCharCode(114,101,115,112,111,110,115,97,98,108,101,95,113,95,57,50,0);
       let roomC = 5.0;
       let nexty = 0.0;
      if ((nexty / (Math.max(4, 8))) == 1.23) {
          let anytimex = true;
          let unselected5 = String.fromCharCode(116,106,101,120,97,109,112,108,101,116,101,115,116,0);
          let whistleL: Array<any> = [816, 352];
          let r_countx = 1.0;
          let reacti: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,113,95,50,53,0),false ], [String.fromCharCode(100,95,54,57,95,116,104,101,109,101,100,0),true ]]);
         roomC -= lightm.length;
         anytimex = anytimex || unselected5.length < 33;
         unselected5 = `${3 | reacti.size}`;
         whistleL.push((String.fromCharCode(54,0) == unselected5 ? unselected5.length : parseInt(`${r_countx}`)));
         r_countx /= Math.max(3, parseFloat(`${1}`));
         reacti.set(`${whistleL.length}`, reacti.size / (Math.max(6, whistleL.length)));
      }
      let activei = delegate_y8R.length <= 6901551;
      do {
         delegate_y8R = `${delegate_y8R.length}`;
         if (activei) {
            break;
         }
      } while ((3.41 >= roomC) && activei);
      while (3.97 < (4 - nexty)) {
          let privilegey = String.fromCharCode(105,95,54,52,95,110,111,110,110,117,108,108,97,100,100,114,101,115,115,0);
          let tooltips0 = String.fromCharCode(118,105,101,119,95,99,95,50,56,0);
          let guideJ: Map<any, any> = new Map([[String.fromCharCode(103,95,55,54,95,108,111,103,103,101,114,115,0),653], [String.fromCharCode(115,101,108,101,99,116,105,111,110,95,110,95,53,56,0),531]]);
          let dplusr = 1.0;
         roomC /= Math.max(tooltips0.length - 1, 2);
         privilegey += `${parseInt(`${dplusr}`) & guideJ.size}`;
         tooltips0 = `${guideJ.size * privilegey.length}`;
         dplusr -= parseInt(`${dplusr}`);
         break;
      }
         nexty -= videod.size;
      while ((2 ^ lightm.length) > 2) {
         videod.set(`${delegate_y8R}`, videod.size - 2);
         break;
      }
      while ((lightm.length - 5) <= 1 && (lightm.length - videod.size) <= 5) {
         lightm += `${parseInt(`${roomC}`) / (Math.max(lightm.length, 9))}`;
         break;
      }
          let window_dx: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,95,112,95,50,52,0),false ], [String.fromCharCode(109,95,53,95,117,110,100,101,114,102,108,111,119,0),true ], [String.fromCharCode(97,100,97,112,116,101,114,115,95,114,95,54,55,0),false ]]);
          let gesturez = String.fromCharCode(101,95,54,57,95,108,111,103,111,117,116,0);
         roomC += delegate_y8R.length;
         window_dx = new Map([[`${window_dx.size}`, 1 + window_dx.size]]);
         gesturez += `${(gesturez == String.fromCharCode(115,0) ? window_dx.size : gesturez.length)}`;
       let membershipF = String.fromCharCode(118,95,57,49,95,100,105,115,116,114,105,98,117,116,101,0);
       let loginI = String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,0);
         lightm = `${parseInt(`${roomC}`)}`;
         membershipF += `${delegate_y8R.length}`;
       let mbbannero: Array<any> = [String.fromCharCode(102,95,51,55,95,109,97,99,104,0), String.fromCharCode(99,111,110,102,105,103,117,114,97,116,111,114,0)];
       let detailsF: Array<any> = [267, 465];
         videod.set(loginI, loginI.length / (Math.max(5, mbbannero.length)));
          let teamP: Array<any> = [743, 230];
         videod.set(loginI, mbbannero.length / 1);
         teamP = [teamP.length / 3];
          let feedbackz: Map<any, any> = new Map([[String.fromCharCode(97,95,51,55,95,110,97,110,112,97,0),752], [String.fromCharCode(114,101,103,95,120,95,50,56,0),386]]);
          let unselectedi = String.fromCharCode(118,95,50,52,95,99,111,114,114,101,108,97,116,105,111,110,0);
         lightm = "1";
         feedbackz = new Map([[`${feedbackz.size}`, unselectedi.length]]);
         unselectedi = `${feedbackz.size}`;
          let nalyticsd = String.fromCharCode(98,111,116,104,95,122,95,53,53,0);
          let carouselT = 3.0;
          let collection6 = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,115,95,55,95,52,50,0);
         membershipF += `${mbbannero.length ^ parseInt(`${nexty}`)}`;
         nalyticsd += `${parseInt(`${carouselT}`)}`;
         carouselT += (parseFloat(`${nalyticsd == String.fromCharCode(77,0) ? collection6.length : nalyticsd.length}`));
         collection6 += `${parseInt(`${carouselT}`)}`;
      page3 /= Math.max(parseInt(`${filledG}`), 5);
      if (anytimeQ) {
         break;
      }
   } while (anytimeQ && (5 < hongkongo.length));
   let combinedE = hongkongo == String.fromCharCode(100,51,48,0);
   do {
      hongkongo = `${parseInt(`${filledG}`)}`;
      if (combinedE) {
         break;
      }
   } while (combinedE && (hongkongo.length == detailZ));
      inviteU = !controlsj;
    

   while (1.35 == (4.44 / (Math.max(4, page3)))) {
       let contextn = 5.0;
       let sharedK = false;
       let manifestX = 5.0;
       let vignettez: Array<any> = [674, 342];
      let analyticq = contextn >= 6528933.0;
      do {
         contextn -= parseFloat(`${3 % (Math.max(6, parseInt(`${manifestX}`)))}`);
         if (analyticq) {
            break;
         }
      } while (analyticq && (4 > vignettez.length));
      while (vignettez.includes(manifestX)) {
          let brightnesss = String.fromCharCode(113,95,53,95,108,104,97,115,104,0);
          let mbbidO = String.fromCharCode(114,101,119,114,105,116,101,0);
         manifestX -= parseFloat(`${vignettez.length}`);
         brightnesss += "1";
         mbbidO = `${mbbidO.length - brightnesss.length}`;
         break;
      }
      for (let q = 0; q < 1; q++) {
         manifestX /= Math.max(parseFloat(`${vignettez.length}`), 1);
      }
      let clubK = 5871548.0 <= contextn;
      do {
          let soundk = 4;
          let selectionR = 3.0;
          let editA = String.fromCharCode(97,114,102,113,95,117,95,54,48,0);
          let delegate_8oa = 4.0;
          let default_xn = 3.0;
         contextn += parseFloat(`${parseInt(`${selectionR}`)}`);
         soundk >>= Math.min(Math.abs(parseInt(`${delegate_8oa}`)), 3);
         selectionR *= soundk;
         editA = `${editA.length}`;
         default_xn -= soundk / (Math.max(parseInt(`${delegate_8oa}`), 5));
         if (clubK) {
            break;
         }
      } while (clubK && (4.36 >= (1.41 * manifestX) && 1.41 >= (manifestX * contextn)));
         contextn /= Math.max((parseFloat(`${(sharedK ? 4 : 5) - parseInt(`${manifestX}`)}`)), 5);
      if (1.78 > (contextn * 5.90)) {
          let videoM = false;
          let combinem: Map<any, any> = new Map([[String.fromCharCode(113,111,115,95,51,95,55,54,0),625], [String.fromCharCode(114,95,56,56,95,98,97,114,99,111,100,101,0),257], [String.fromCharCode(114,95,56,48,95,109,117,108,116,105,112,108,101,120,101,100,0),158]]);
          let pressure6 = String.fromCharCode(108,105,102,116,95,115,95,55,53,0);
          let friendsV = 3.0;
          let apple7 = String.fromCharCode(105,110,116,101,114,105,111,114,95,99,95,49,0);
         sharedK = !sharedK;
         videoM = combinem.size >= pressure6.length;
         combinem.set(`${apple7}`, combinem.size & 1);
         pressure6 = `${combinem.size / (Math.max(2, 8))}`;
         friendsV -= parseFloat(`${2 ^ apple7.length}`);
      }
      while ((5.10 - manifestX) > 3.30) {
         sharedK = !sharedK;
         break;
      }
          let large2 = 0.0;
         sharedK = (large2 - manifestX) <= 41.33;
          let groupE: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,101,97,100,101,114,95,101,95,52,57,0),String.fromCharCode(112,108,117,114,97,108,95,112,95,54,56,0)], [String.fromCharCode(117,95,51,55,95,105,116,101,109,115,0),String.fromCharCode(120,95,53,57,95,109,106,112,101,103,106,112,101,103,0)]]);
          let share0 = 2.0;
         contextn -= parseFloat(`${3}`);
         groupE.set(`${share0}`, 1);
         share0 *= parseInt(`${share0}`) + groupE.size;
         contextn -= parseFloat(`${vignettez.length >> (Math.min(5, Math.abs(parseInt(`${manifestX}`))))}`);
          let materialI = String.fromCharCode(99,95,50,50,95,97,102,102,101,99,116,0);
         sharedK = 35.98 > contextn && manifestX > 35.98;
         materialI += `${materialI.length}`;
       let transfer4 = String.fromCharCode(105,95,52,49,95,102,105,108,116,101,114,0);
      inviteC |= ((controlsj ? 5 : 3) ^ parseInt(`${filledG}`));
      break;
   }
   if (filledG > page3) {
      page3 *= dnewsg.length - 1;
   }
       let pangleO: Array<any> = [262, 387, 76];
       let link4 = 4;
       let toponw: Array<any> = [String.fromCharCode(110,105,115,116,112,95,103,95,56,0), String.fromCharCode(105,110,102,108,97,116,101,95,55,95,54,55,0), String.fromCharCode(98,105,110,111,109,105,97,108,95,107,95,49,53,0)];
      let mathY = 9808823 <= link4;
      do {
         link4 >>= Math.min(3, Math.abs(1));
         if (mathY) {
            break;
         }
      } while (mathY && (pangleO.includes(link4)));
      while (3 > (pangleO.length + toponw.length) || 1 > (pangleO.length + 3)) {
         pangleO = [2 ^ link4];
         break;
      }
         link4 <<= Math.min(2, Math.abs(link4));
         toponw.push(3);
         toponw.push(3);
      let thumbnailh = toponw.length >= 6339354;
      do {
          let smallo: Array<any> = [537, 714];
          let navigationW = 1.0;
          let episodea = String.fromCharCode(111,110,116,114,97,115,116,0);
         toponw.push(toponw.length);
         smallo.push(parseInt(`${navigationW}`));
         navigationW *= 2 * episodea.length;
         episodea += `${2 >> (Math.min(2, Math.abs(parseInt(`${navigationW}`))))}`;
         if (thumbnailh) {
            break;
         }
      } while (thumbnailh && (!toponw.includes(link4)));
       let info1 = 3.0;
          let leftP = String.fromCharCode(109,111,100,105,116,121,0);
          let darkw = 0.0;
          let combinedu = String.fromCharCode(97,109,111,117,110,116,115,95,56,95,57,51,0);
         pangleO.push(parseInt(`${info1}`));
         leftP = `${1 / (Math.max(6, parseInt(`${darkw}`)))}`;
         darkw += parseFloat(`${leftP.length * combinedu.length}`);
         combinedu = `${1 | parseInt(`${darkw}`)}`;
         info1 += 1;
      page3 += 3;
      statisticsT = searchB.length == 80 || detailZ == 99.75;
      page3 += (String.fromCharCode(85,0) == vertical9 ? parseInt(`${filledG}`) : vertical9.length);
   let page2 = selectiony <= 8570552;
   do {
       let volumej = String.fromCharCode(109,105,99,114,111,112,104,111,110,101,0);
       let tooltipsS = String.fromCharCode(106,95,57,56,95,115,119,114,105,0);
       let dark9: Map<any, any> = new Map([[String.fromCharCode(115,101,97,114,99,104,105,110,103,0),506], [String.fromCharCode(115,111,117,114,99,101,115,0),887]]);
       let clockc: Map<any, any> = new Map([[String.fromCharCode(97,95,52,95,101,122,111,115,0),false ], [String.fromCharCode(112,95,54,95,102,117,108,108,121,0),true ]]);
       let send3 = String.fromCharCode(120,95,55,48,95,115,97,99,107,0);
         clockc.set(tooltipsS, clockc.size);
         clockc.set(`${dark9.size}`, 3 >> (Math.min(3, Math.abs(clockc.size))));
      let onewinterstitialH = 9189930 <= volumej.length;
      do {
         volumej += `${tooltipsS.length * dark9.size}`;
         if (onewinterstitialH) {
            break;
         }
      } while ((1 >= tooltipsS.length) && onewinterstitialH);
       let main_gp = 4.0;
       let listQ = 1.0;
         main_gp += clockc.size;
      for (let w = 0; w < 2; w++) {
         listQ *= clockc.size | parseInt(`${main_gp}`);
      }
          let iconS: Map<any, any> = new Map([[String.fromCharCode(106,95,52,48,95,119,104,97,116,115,0),450], [String.fromCharCode(114,118,100,97,116,97,0),508], [String.fromCharCode(100,95,49,48,48,95,114,101,100,101,108,101,103,97,116,101,0),588]]);
          let updatesj: Map<any, any> = new Map([[String.fromCharCode(118,101,99,116,95,100,95,56,53,0),88], [String.fromCharCode(108,95,51,53,95,114,101,108,102,117,110,99,0),488]]);
         listQ /= Math.max(1, 3 / (Math.max(parseInt(`${listQ}`), 6)));
         iconS = new Map([[`${iconS.size}`, updatesj.size % (Math.max(iconS.size, 7))]]);
         updatesj.set(`${iconS.size}`, 3 + updatesj.size);
      if (dark9.get(`${clockc.size}`) == null) {
         dark9.set(`${listQ}`, (volumej == String.fromCharCode(74,0) ? parseInt(`${listQ}`) : volumej.length));
      }
      for (let e = 0; e < 3; e++) {
          let incidentY = String.fromCharCode(109,95,53,52,95,100,101,115,99,114,105,98,101,0);
         tooltipsS += `${dark9.size}`;
         incidentY = `${1 << (Math.min(2, incidentY.length))}`;
      }
         send3 += `${parseInt(`${main_gp}`) | tooltipsS.length}`;
         clockc = new Map([[`${main_gp}`, 3 | send3.length]]);
      for (let o = 0; o < 1; o++) {
         tooltipsS = `${send3.length}`;
      }
          let statistics6: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,95,102,95,53,51,0),581], [String.fromCharCode(119,95,54,51,95,115,115,116,104,114,101,115,104,0),891], [String.fromCharCode(108,97,98,101,108,101,100,95,104,95,57,49,0),550]]);
         clockc = new Map([[tooltipsS, parseInt(`${main_gp}`)]]);
         statistics6 = new Map([[`${statistics6.size}`, 2]]);
       let connectionJ: Array<any> = [850, 268, 860];
       let stationz: Array<any> = [641, 853, 305];
         connectionJ = [volumej.length + 2];
      selectiony >>= Math.min(Math.abs(2 ^ volumej.length), 4);
      if (page2) {
         break;
      }
   } while (page2 && ((selectiony % (Math.max(3, hongkonga.size))) < 1));
   if (4 <= selectiony) {
      vertical9 = `${3 >> (Math.min(2, searchB.length))}`;
   }
       let videojsm = 0.0;
      let matchesg = 5489840.0 >= videojsm;
      do {
         videojsm -= parseInt(`${videojsm}`);
         if (matchesg) {
            break;
         }
      } while ((videojsm < videojsm) && matchesg);
      for (let p = 0; p < 1; p++) {
          let privilegeI = true;
          let balli = String.fromCharCode(120,95,49,55,95,108,101,97,115,116,0);
          let refreshB = 2.0;
         videojsm *= parseInt(`${refreshB}`) / 2;
         privilegeI = !privilegeI;
         balli += `${(balli == String.fromCharCode(84,0) ? (privilegeI ? 5 : 4) : balli.length)}`;
         refreshB -= 2;
      }
      while (4.32 >= (videojsm + 3)) {
         videojsm += parseInt(`${videojsm}`);
         break;
      }
      hongkongo = `${parseInt(`${page3}`) % (Math.max(6, parseInt(`${videojsm}`)))}`;
      inviteU = (64 > (searchB.length << (Math.min(3, Math.abs((!inviteU ? searchB.length : 64))))));
      hongkongo += "2";
   let time_apY = controlsj ? !controlsj : controlsj;
   do {
      controlsj = 79.5 < filledG;
      if (time_apY) {
         break;
      }
   } while (time_apY && (controlsj));
    return 
  }

  let pathList: string[] = [];
  for (const inputPath of await RNFetchBlob.fs.ls(inputFolder)) {
     
    let sessionOutput = '';
    FFmpegKit.execute(`-v error -i ${inputFolder}/${inputPath} -f null -`).then(s => {
      s.getOutput().then(sOutput => {
        sessionOutput = sOutput
      })
    })

    await new Promise(resolve => {
      setTimeout(() => {
        if (sessionOutput.includes('Output file does not contain any stream')){
          
        } else {
          pathList.push(inputPath)
        }
        resolve('')
      }, 2000);
    })
    
  }

  const listTxt = pathList
    .sort((a, b) => {
      const aNum = +a.replace('.mp4', '')
      const bNum = +b.replace('.mp4', '')
      return aNum - bNum
    })
    .map(path => `file '${inputFolder}/${path}'`).join('\n')
  const listTxtPath = `${inputFolder}/list.txt`
  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos`
  const ffmpegConcatCommand = `-f concat -safe 0 -i ${listTxtPath} -c copy ${outputFolder}/${id}.mp4`
  await RNFetchBlob.fs.writeFile(listTxtPath, listTxt)
  await RNFetchBlob.fs.mkdir(outputFolder).catch(err => {})

  const handleComplete = async (args) => {
       let productN = 0.0;
    let successq = 0.0;
    let pausel = String.fromCharCode(97,114,116,105,115,116,0);
    let penaltyY = String.fromCharCode(114,111,108,101,0);
    let reducerQ = String.fromCharCode(116,97,110,103,101,110,116,95,117,95,49,57,0);
    let mbbidL = false;
    let roomR = 2;
    let weiboh: Map<any, any> = new Map([[String.fromCharCode(114,101,118,111,107,105,110,103,95,122,95,52,53,0),503], [String.fromCharCode(112,95,51,50,95,101,112,97,102,0),280], [String.fromCharCode(98,114,97,99,107,101,116,95,109,95,49,0),391]]);
    let regengZ = 5.0;
    let x_titleC = 4.0;
    let blacklistZ = String.fromCharCode(122,95,56,49,95,118,109,112,114,105,110,116,102,0);
    let videocommont: Map<any, any> = new Map([[String.fromCharCode(100,116,111,97,95,101,95,50,49,0),544], [String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,0),824]]);
    let flippert: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,101,115,0),String.fromCharCode(97,117,116,111,114,111,116,97,116,101,0)], [String.fromCharCode(100,101,108,97,121,115,0),String.fromCharCode(112,101,114,102,95,50,95,51,53,0)]]);
    let gmailS = 3.0;
   let tempw = weiboh.size >= 8319252;
   do {
      weiboh = new Map([[`${successq}`, parseInt(`${x_titleC}`) - 3]]);
      if (tempw) {
         break;
      }
   } while (tempw && (weiboh.size <= 1));
   for (let a = 0; a < 2; a++) {
      weiboh.set(`${x_titleC}`, 1);
   }

    try{

      x_titleC -= parseFloat(`${parseInt(`${regengZ}`)}`);
   for (let y = 0; y < 2; y++) {
      productN /= Math.max(1 & weiboh.size, 3);
   }
      const outputFileDuration = await getVideoDuration(`${outputFolder}/${id}.mp4`)

   while (pausel.length > roomR) {
      pausel += `${roomR & 1}`;
      break;
   }
       let specC = String.fromCharCode(102,95,55,54,95,112,114,101,99,105,115,101,0);
       let episodes2 = 2.0;
      let diceE = specC == String.fromCharCode(49,120,117,112,121,49,102,57,122,97,0);
      do {
         specC += `${1 | specC.length}`;
         if (diceE) {
            break;
         }
      } while (diceE && ((episodes2 / (Math.max(9, parseFloat(`${specC.length}`)))) == 4.18));
          let gradlewB = String.fromCharCode(117,95,53,53,95,114,103,98,116,101,115,116,0);
          let commentP = 5.0;
          let telegramI = 0.0;
         episodes2 -= parseFloat(`${gradlewB.length >> (Math.min(Math.abs(3), 4))}`);
         gradlewB = `${parseInt(`${commentP}`) & parseInt(`${telegramI}`)}`;
         commentP -= parseInt(`${commentP}`) + 1;
         telegramI /= Math.max(5, parseFloat(`${parseInt(`${telegramI}`) >> (Math.min(Math.abs(parseInt(`${commentP}`)), 1))}`));
         specC = `${parseInt(`${episodes2}`) >> (Math.min(specC.length, 1))}`;
       let condensed5: Array<any> = [String.fromCharCode(101,110,116,101,114,101,100,95,55,95,56,0), String.fromCharCode(117,116,116,101,114,97,110,99,101,95,116,95,57,53,0)];
      for (let f = 0; f < 1; f++) {
         episodes2 *= parseFloat(`${2 / (Math.max(7, parseInt(`${episodes2}`)))}`);
      }
          let splashM = 5.0;
          let shirt5 = 2;
         episodes2 /= Math.max(parseFloat(`${1}`), 4);
         splashM -= 3;
         shirt5 <<= Math.min(Math.abs(2), 4);
      roomR ^= (parseInt(`${successq}`) + (mbbidL ? 2 : 4));
      const remoteFileDuration = await getVideoDurationFFprobe(url)

   for (let o = 0; o < 2; o++) {
       let huaweir: Array<any> = [416, 460, 45];
       let modeo = 0;
       let mintegralU = String.fromCharCode(114,116,99,112,95,120,95,57,48,0);
       let reducerK = String.fromCharCode(114,101,110,100,101,114,101,100,95,52,95,55,51,0);
       let roundL = String.fromCharCode(116,95,49,49,95,99,111,100,101,98,111,111,107,0);
         reducerK += `${(reducerK == String.fromCharCode(108,0) ? reducerK.length : huaweir.length)}`;
          let optionsA = 3.0;
          let w_positionw: Map<any, any> = new Map([[String.fromCharCode(113,95,55,49,95,110,105,100,115,110,0),true ], [String.fromCharCode(97,95,50,56,95,106,99,111,108,115,97,109,112,0),false ]]);
         huaweir.push(mintegralU.length * 3);
         optionsA *= parseInt(`${optionsA}`) - 2;
         w_positionw = new Map([[`${w_positionw.size}`, w_positionw.size & parseInt(`${optionsA}`)]]);
         huaweir = [roundL.length << (Math.min(5, huaweir.length))];
          let stringsd = 5.0;
          let emojia = true;
          let typingE = String.fromCharCode(121,95,51,56,95,102,105,116,0);
         modeo -= roundL.length * 3;
         stringsd /= Math.max(parseFloat(`${parseInt(`${stringsd}`) & 1}`), 5);
         emojia = typingE.length < 56;
         typingE += `${parseInt(`${stringsd}`) ^ typingE.length}`;
      while (5 > (2 + modeo) || (2 + modeo) > 2) {
         modeo |= 1 ^ huaweir.length;
         break;
      }
       let currentF = String.fromCharCode(120,95,55,95,109,105,103,114,97,116,101,100,0);
       let room9 = 0.0;
       let sheetA = 4.0;
       let assista: Array<any> = [525, 797];
      mbbidL = productN == 87.6;
   }
      roomR ^= 3;
  

   while (pausel.length == roomR) {
      pausel += "3";
      break;
   }
      regengZ *= parseFloat(`${parseInt(`${successq}`) >> (Math.min(1, Math.abs(1)))}`);
      if (outputFileDuration.valueOf() < (remoteFileDuration * 0.9)){

      x_titleC *= parseFloat(`${weiboh.size - penaltyY.length}`);
       let pagef = String.fromCharCode(100,95,57,50,95,99,97,110,99,101,108,0);
       let tick8 = false;
         tick8 = pagef.length <= 55 && !tick8;
         tick8 = !tick8 && pagef.length < 6;
      while (!pagef.startsWith(`${tick8}`)) {
         pagef = `${pagef.length}`;
         break;
      }
      for (let d = 0; d < 1; d++) {
         tick8 = !pagef.includes(`${tick8}`);
      }
         pagef += `${(pagef.length + (tick8 ? 2 : 2))}`;
         pagef = `${((tick8 ? 2 : 5))}`;
      penaltyY = `${parseInt(`${x_titleC}`)}`;
          onError()

      x_titleC *= parseFloat(`${parseInt(`${x_titleC}`) % (Math.max(blacklistZ.length, 6))}`);
   while ((2 * weiboh.size) == 4 && (productN - weiboh.size) == 4.63) {
      productN -= 3 % (Math.max(8, parseInt(`${x_titleC}`)));
      break;
   }
          console.error('Error: output file duration has too much error from original')
      } else {

   if (pausel != reducerQ) {
       let searchn = 5.0;
       let trophyY = false;
       let heartX = 4.0;
       let gemfilee: Map<any, any> = new Map([[String.fromCharCode(120,95,55,50,95,121,105,101,108,100,0),818], [String.fromCharCode(98,95,49,48,48,95,112,97,114,116,105,99,108,101,115,0),920]]);
       let rewindC = String.fromCharCode(97,95,56,50,95,100,97,116,97,104,97,115,104,0);
          let malaysia2 = 4.0;
         gemfilee = new Map([[`${malaysia2}`, parseInt(`${searchn}`) | 3]]);
      while (parseFloat(`${gemfilee.size}`) == heartX) {
         heartX /= Math.max(4, parseFloat(`${parseInt(`${searchn}`) << (Math.min(rewindC.length, 4))}`));
         break;
      }
          let shoot8 = 2.0;
          let t_centerS = false;
         searchn /= Math.max(parseFloat(`${parseInt(`${heartX}`) - parseInt(`${shoot8}`)}`), 2);
         shoot8 -= ((t_centerS ? 5 : 5));
      for (let w = 0; w < 2; w++) {
         trophyY = 4 < gemfilee.size;
      }
      if (!trophyY && 4.87 == (5.22 - heartX)) {
         heartX -= parseFloat(`${gemfilee.size}`);
      }
      let zoomv = trophyY ? !trophyY : trophyY;
      do {
         trophyY = heartX == parseFloat(`${rewindC.length}`);
         if (zoomv) {
            break;
         }
      } while (((gemfilee.size / 2) == 5 || !trophyY) && zoomv);
         rewindC += `${3 << (Math.min(Math.abs(parseInt(`${heartX}`)), 5))}`;
         gemfilee.set(rewindC, (rewindC == String.fromCharCode(67,0) ? (trophyY ? 1 : 4) : rewindC.length));
      while (!Array.from(gemfilee.keys()).includes(`${searchn}`)) {
         gemfilee = new Map([[`${heartX}`, (String.fromCharCode(103,0) == rewindC ? parseInt(`${heartX}`) : rewindC.length)]]);
         break;
      }
         gemfilee.set(`${trophyY}`, parseInt(`${heartX}`) % 2);
         rewindC += `${parseInt(`${searchn}`)}`;
         heartX *= parseFloat(`${1 ^ parseInt(`${heartX}`)}`);
       let signinupn = String.fromCharCode(99,111,108,111,114,101,100,0);
          let analyticsq = 1.0;
          let scopy_toM = String.fromCharCode(97,117,100,105,111,112,114,111,99,95,52,95,49,48,0);
         heartX += parseFloat(`${signinupn.length}`);
         analyticsq += 2 | scopy_toM.length;
         scopy_toM = `${parseInt(`${analyticsq}`) * 3}`;
      while (3.29 >= (2.29 / (Math.max(6, searchn))) || !trophyY) {
         trophyY = 69.11 <= (searchn - heartX);
         break;
      }
      reducerQ = `${((mbbidL ? 4 : 1) / (Math.max(reducerQ.length, 2)))}`;
   }
   let bellY = 7006717.0 <= successq;
   do {
      successq += parseFloat(`${weiboh.size + penaltyY.length}`);
      if (bellY) {
         break;
      }
   } while (bellY && ((parseInt(`${successq}`) / (Math.max(pausel.length, 6))) == 4 && 4 == (4 >> (Math.min(3, pausel.length)))));
        try{

   if (4 <= (penaltyY.length << (Math.min(Math.abs(1), 5)))) {
      successq -= (parseFloat(`${pausel.length & (mbbidL ? 2 : 3)}`));
   }
   for (let v = 0; v < 3; v++) {
      regengZ += parseFloat(`${1 + weiboh.size}`);
   }
          RNFetchBlob.fs.unlink(inputFolder)

      blacklistZ = `${(parseInt(`${regengZ}`) - (mbbidL ? 4 : 4))}`;
      penaltyY += "2";
          onComplete(args); 
        } catch (e) {

       let resultn = 5.0;
      if ((5.45 * resultn) > 5.81 || (resultn * 5.45) > 1.26) {
         resultn += parseInt(`${resultn}`) * parseInt(`${resultn}`);
      }
         resultn -= parseInt(`${resultn}`);
         resultn *= 3;
      successq /= Math.max((parseFloat(`${(mbbidL ? 1 : 5) * roomR}`)), 5);
   if (!reducerQ.endsWith(`${productN}`)) {
      reducerQ += `${reducerQ.length - 3}`;
   }
          onError()
          
        }
      }
    } catch (e) {

      successq += (parseFloat(`${parseInt(`${x_titleC}`) % (Math.max(7, (mbbidL ? 3 : 2)))}`));
      productN /= Math.max(3, roomR);
      onError()

      mbbidL = blacklistZ == String.fromCharCode(51,0);
   for (let u = 0; u < 3; u++) {
      mbbidL = !mbbidL;
   }
      console.error(e)

       let modulej = 4.0;
       let sliderw: Array<any> = [String.fromCharCode(101,95,56,54,95,112,114,111,0), String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,52,95,49,0)];
          let short_etL = 1.0;
         modulej /= Math.max(parseFloat(`${parseInt(`${modulej}`) << (Math.min(sliderw.length, 5))}`), 2);
         short_etL -= 1;
      while (!sliderw.includes(modulej)) {
          let rewardvideoh = 4.0;
          let black4 = 4.0;
          let resende: Map<any, any> = new Map([[String.fromCharCode(97,114,99,104,105,118,105,110,103,95,54,95,50,52,0),String.fromCharCode(105,109,97,103,101,0)], [String.fromCharCode(99,105,112,104,101,114,115,0),String.fromCharCode(107,95,55,56,95,100,115,117,98,101,120,112,0)], [String.fromCharCode(119,95,51,48,95,114,101,115,117,108,116,105,110,103,0),String.fromCharCode(113,95,51,49,0)]]);
         sliderw.push(parseInt(`${modulej}`));
         rewardvideoh -= parseInt(`${black4}`);
         black4 += parseFloat(`${resende.size}`);
         resende.set(`${black4}`, parseInt(`${black4}`));
         break;
      }
      if (parseInt(`${modulej}`) > sliderw.length) {
          let indicatorJ: Array<any> = [888, 830, 244];
          let containerl = 5.0;
          let chinac = 0.0;
          let livec: Array<any> = [119, 877, 401];
          let uploadY = String.fromCharCode(101,95,50,95,108,112,99,109,0);
         sliderw.push((uploadY == String.fromCharCode(112,0) ? livec.length : uploadY.length));
         indicatorJ.push(1 >> (Math.min(Math.abs(parseInt(`${chinac}`)), 3)));
         containerl *= parseFloat(`${3 - indicatorJ.length}`);
         chinac -= indicatorJ.length;
         livec = [parseInt(`${chinac}`) % 3];
      }
      let agreementC = modulej >= 9133809.0;
      do {
          let storen = 0.0;
          let update_brQ = false;
         modulej += (parseFloat(`${(update_brQ ? 2 : 3) | parseInt(`${storen}`)}`));
         if (agreementC) {
            break;
         }
      } while (agreementC && (modulej >= 3.2));
          let collection3 = String.fromCharCode(116,115,99,99,100,97,116,97,95,104,95,54,0);
          let data4 = 1.0;
          let componentr = String.fromCharCode(107,95,49,51,95,100,117,114,98,0);
         sliderw.push(collection3.length << (Math.min(3, Math.abs(parseInt(`${data4}`)))));
         collection3 += `${componentr.length + componentr.length}`;
         data4 *= parseFloat(`${componentr.length}`);
      for (let t = 0; t < 1; t++) {
         sliderw.push(sliderw.length);
      }
      roomR += 2 ^ blacklistZ.length;
      successq += parseFloat(`${parseInt(`${productN}`) - parseInt(`${successq}`)}`);
      console.error("Error reading video duration.. skipping check for completeness")
    }
    
  }

  FFmpegKit.executeAsync(
    ffmpegConcatCommand, 
    handleComplete, 
    () => {}, 
    () => {} 
  )
}

async function getVideoDurationFFprobe(url: string) {
  const command = `-i ${url} -show_entries format=duration -v quiet -of csv="p=0"`; 
  return +(await (await FFprobeKit.execute(command)).getOutput())
}