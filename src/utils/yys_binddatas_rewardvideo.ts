import { yys_Bing } from "@type/yys_libzeus";
import { FFmpegKit, FFmpegKitConfig, FFmpegSession, FFmpegSessionCompleteCallback, FFprobeKit, Level, Log, MediaInformationSession, Statistics } from "ffmpeg-kit-react-native";
import { throttle, uniqueId } from "lodash";
import RNFetchBlob from "rn-fetch-blob";
import {getVideoDuration} from 'react-native-video-duration'
import { fetch } from "@react-native-community/netinfo";

async function ffmpegDownload(outputPath: string, ffmpegCommand: string ,url: string, onProgress: any, onComplete: any, onError: any, onSessionCreated: any){
       let videojsr = true;
    let textJ = 5.0;
    let blackF = false;
    let scoree: Map<any, any> = new Map([[String.fromCharCode(109,120,112,101,103,95,116,95,48,0),true ], [String.fromCharCode(116,95,49,50,95,115,117,109,102,0),true ]]);
    let changet: Map<any, any> = new Map([[String.fromCharCode(112,115,115,104,95,52,95,54,56,0),String.fromCharCode(122,95,53,95,112,110,105,101,108,115,0)], [String.fromCharCode(112,114,111,99,101,115,115,111,114,115,95,103,95,50,52,0),String.fromCharCode(103,95,52,48,0)]]);
    let libfollyO = String.fromCharCode(116,95,56,53,95,99,111,110,102,105,103,117,114,97,116,105,111,110,0);
    let directf = true;
    let constantsE: Array<any> = [String.fromCharCode(105,100,101,111,95,106,95,53,53,0), String.fromCharCode(111,108,100,101,114,95,56,95,54,52,0)];
    let register_07O = String.fromCharCode(98,95,56,57,95,99,104,97,112,116,101,114,0);
    let targetd: Map<any, any> = new Map([[String.fromCharCode(120,95,57,52,95,115,111,108,105,115,116,101,110,0),827], [String.fromCharCode(109,112,101,103,118,105,100,101,111,100,115,112,95,113,95,56,57,0),87]]);
      textJ /= Math.max(2, (parseFloat(`${parseInt(`${textJ}`) * (videojsr ? 5 : 4)}`)));

  const details = await FFprobeKit.getMediaInformation(url)

       let relatedk = String.fromCharCode(99,111,114,110,101,114,95,56,95,55,53,0);
       let bell0 = 5.0;
       let gdtadvt = String.fromCharCode(107,105,116,116,121,95,111,95,50,51,0);
       let updatesf: Map<any, any> = new Map([[String.fromCharCode(105,95,54,48,95,114,101,116,114,97,110,115,0),285], [String.fromCharCode(108,104,97,115,104,95,120,95,55,52,0),92], [String.fromCharCode(107,95,54,54,95,100,100,115,116,0),856]]);
      for (let d = 0; d < 1; d++) {
         updatesf.set(`${bell0}`, (relatedk == String.fromCharCode(121,0) ? relatedk.length : parseInt(`${bell0}`)));
      }
      if (3.46 < bell0) {
         relatedk = `${gdtadvt.length}`;
      }
          let moone: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,48,95,121,111,117,0),String.fromCharCode(121,95,53,52,95,105,110,99,114,101,109,101,110,116,101,100,0)], [String.fromCharCode(112,95,50,51,95,119,100,101,99,0),String.fromCharCode(107,95,52,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0)], [String.fromCharCode(113,95,54,56,95,98,101,108,111,110,103,115,0),String.fromCharCode(115,105,103,102,105,103,95,120,95,57,0)]]);
          let middlef = String.fromCharCode(122,95,52,48,95,99,114,111,115,115,102,97,100,101,0);
         gdtadvt += "1";
         moone = new Map([[`${moone.size}`, 1]]);
         middlef = "2";
      for (let a = 0; a < 3; a++) {
         gdtadvt = `${(relatedk == String.fromCharCode(67,0) ? parseInt(`${bell0}`) : relatedk.length)}`;
      }
      let textlayoutmanageru = gdtadvt.length >= 7256041;
      do {
         gdtadvt += "2";
         if (textlayoutmanageru) {
            break;
         }
      } while (textlayoutmanageru && (4 <= (updatesf.size | 2)));
      let s_count2 = updatesf.size >= 5789038;
      do {
         updatesf = new Map([[`${updatesf.size}`, 3]]);
         if (s_count2) {
            break;
         }
      } while (s_count2 && (3 < (updatesf.size * 1) && (4.66 - bell0) < 1.35));
      if ((bell0 + parseFloat(`${updatesf.size}`)) >= 4.51 && (bell0 + 4.51) >= 2.96) {
         bell0 += parseFloat(`${parseInt(`${bell0}`)}`);
      }
      while (5 > (3 ^ updatesf.size) || 4 > (3 ^ gdtadvt.length)) {
          let reducer2: Map<any, any> = new Map([[String.fromCharCode(112,95,53,51,95,100,99,97,100,101,99,0),681], [String.fromCharCode(106,95,49,54,95,118,105,101,119,101,114,115,0),488]]);
          let rightB = String.fromCharCode(114,95,51,49,95,115,108,102,0);
         updatesf = new Map([[`${bell0}`, parseInt(`${bell0}`)]]);
         reducer2.set(rightB, rightB.length - 2);
         break;
      }
      register_07O = `${((videojsr ? 4 : 3) | register_07O.length)}`;
  let duration = 0

      changet.set(`${directf}`, ((directf ? 5 : 5) | scoree.size));
  let completionPercentage = 0; 

   let expandl = videojsr ? !videojsr : videojsr;
   do {
      videojsr = changet.size == libfollyO.length;
      if (expandl) {
         break;
      }
   } while ((!directf) && expandl);


  const handleComplete = async (session: FFmpegSession) => {
    

   if (textJ <= 4.4) {
      blackF = !directf;
   }
    

       let backgroundW = 1.0;
         backgroundW -= 3 % (Math.max(3, parseInt(`${backgroundW}`)));
         backgroundW -= parseInt(`${backgroundW}`) * parseInt(`${backgroundW}`);
      while (backgroundW >= 5.28) {
          let handlerC = 3.0;
          let xadsdkv = true;
         backgroundW *= parseInt(`${backgroundW}`) & 1;
         handlerC *= (parseFloat(`${(xadsdkv ? 4 : 3) * parseInt(`${handlerC}`)}`));
         xadsdkv = !xadsdkv || 59.95 < handlerC;
         break;
      }
      libfollyO += `${parseInt(`${backgroundW}`) ^ 2}`;
    const isOnline = (await fetch()).isConnected && (await fetch()).isInternetReachable

       let usernameA = 1;
       let episodese = 5.0;
       let signinupD = String.fromCharCode(113,95,55,48,95,103,114,97,110,117,108,97,114,0);
       let classeso: Array<any> = [28, 960];
      let mbnativeadvanced9 = classeso.length <= 7717486;
      do {
          let gesturesx = String.fromCharCode(112,108,97,99,101,115,95,52,95,56,51,0);
          let philippinesc = false;
          let fastforwardA = String.fromCharCode(114,95,50,50,95,102,97,116,101,0);
          let reducerL = 3;
         classeso = [fastforwardA.length + usernameA];
         gesturesx = `${reducerL}`;
         philippinesc = !philippinesc;
         fastforwardA = "1";
         reducerL *= gesturesx.length;
         if (mbnativeadvanced9) {
            break;
         }
      } while ((signinupD.includes(`${classeso.length}`)) && mbnativeadvanced9);
         signinupD = `${usernameA}`;
      let streaming8 = signinupD.length >= 8197500;
      do {
         signinupD = `${parseInt(`${episodese}`)}`;
         if (streaming8) {
            break;
         }
      } while (streaming8 && (signinupD.endsWith(`${classeso.length}`)));
         classeso = [signinupD.length / (Math.max(2, 2))];
          let activityl = String.fromCharCode(112,105,120,101,108,115,120,95,113,95,52,57,0);
          let greyv: Map<any, any> = new Map([[String.fromCharCode(111,95,57,51,95,103,101,110,101,114,97,116,101,0),451], [String.fromCharCode(101,95,57,55,95,116,108,115,0),709], [String.fromCharCode(118,112,100,97,116,97,95,55,95,55,56,0),725]]);
         usernameA &= usernameA;
         activityl += `${activityl.length}`;
         greyv = new Map([[`${greyv.size}`, (String.fromCharCode(110,0) == activityl ? activityl.length : greyv.size)]]);
      if (2 >= (classeso.length + parseInt(`${episodese}`)) || 3.3 >= (3.81 + episodese)) {
         classeso = [usernameA + 2];
      }
      while (1 <= (usernameA | classeso.length)) {
         classeso = [classeso.length - parseInt(`${episodese}`)];
         break;
      }
       let string4 = true;
      textJ += (parseFloat(`${(blackF ? 3 : 2)}`));
    try{

   for (let e = 0; e < 3; e++) {
      register_07O += `${(String.fromCharCode(65,0) == libfollyO ? (videojsr ? 1 : 3) : libfollyO.length)}`;
   }
      if (isOnline){

   let stringV = textJ <= 6552038.0;
   do {
      textJ /= Math.max(2, parseFloat(`${scoree.size}`));
      if (stringV) {
         break;
      }
   } while ((Array.from(changet.values()).includes(textJ)) && stringV);
        const stats = await RNFetchBlob.fs.stat(outputPath)

      textJ *= (parseFloat(`${(directf ? 5 : 5) % (Math.max(6, (blackF ? 3 : 2)))}`));
        onComplete(stats.size)
      }
      else {

      scoree.set(register_07O, (String.fromCharCode(68,0) == register_07O ? constantsE.length : register_07O.length));
        onError()
      }
    } catch (e) {

   for (let h = 0; h < 1; h++) {
      constantsE.push(2 | changet.size);
   }
      onError()

      register_07O += `${parseInt(`${textJ}`) << (Math.min(3, Math.abs(3)))}`;
    }
  }

  const handleLog = (async (log: Log) => {
    try {

       let gesturesL: Map<any, any> = new Map([[String.fromCharCode(98,95,55,54,95,108,111,111,112,105,110,103,0),433], [String.fromCharCode(112,95,49,50,95,97,118,100,101,118,105,99,101,114,101,115,0),760]]);
      for (let o = 0; o < 2; o++) {
         gesturesL = new Map([[`${gesturesL.size}`, 2 | gesturesL.size]]);
      }
         gesturesL = new Map([[`${gesturesL.size}`, gesturesL.size]]);
         gesturesL.set(`${gesturesL.size}`, 3 | gesturesL.size);
      constantsE.push((3 / (Math.max(8, (directf ? 2 : 4)))));
      const durationFromString = await (log.getMessage()).match(/^\d+:\d+:\d+.*$/)?.pop()
      if (durationFromString){

       let feedbackW = String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,56,95,49,57,0);
       let feedbackt = 4.0;
         feedbackW += `${parseInt(`${feedbackt}`) - feedbackW.length}`;
      if (feedbackW.includes(`${feedbackt}`)) {
         feedbackW = `${1 & parseInt(`${feedbackt}`)}`;
      }
      while (feedbackW.includes(`${feedbackt}`)) {
         feedbackt *= 2;
         break;
      }
       let confirmationm: Map<any, any> = new Map([[String.fromCharCode(109,95,50,49,95,97,102,102,105,110,105,116,105,101,115,0),146], [String.fromCharCode(115,95,50,57,95,109,97,107,101,119,116,0),393], [String.fromCharCode(101,118,101,114,95,115,95,54,50,0),655]]);
         feedbackW = "1";
         confirmationm.set(`${feedbackt}`, feedbackW.length | parseInt(`${feedbackt}`));
      constantsE.push(2);
        const durationTimeOnly = durationFromString.replace(/\..*/, '')

      scoree = new Map([[`${blackF}`, ((blackF ? 3 : 4) / (Math.max(3, parseInt(`${textJ}`))))]]);
        const durationTimeArr = durationTimeOnly.split(':')
        if (durationTimeArr){

   if (5 > (1 & changet.size)) {
      changet = new Map([[`${videojsr}`, (parseInt(`${textJ}`) + (videojsr ? 2 : 4))]]);
   }
          duration = +durationTimeArr[0] * 60 * 60 + +durationTimeArr[1] * 60 + +durationTimeArr[2]

   for (let e = 0; e < 1; e++) {
       let videocommon2 = String.fromCharCode(97,117,103,109,101,110,116,95,104,95,57,53,0);
       let rootH = String.fromCharCode(115,95,50,95,104,101,97,100,101,114,0);
       let common7 = 0.0;
       let moduleZ = 1.0;
       let contextl = false;
         moduleZ /= Math.max(((contextl ? 4 : 3)), 2);
      for (let k = 0; k < 2; k++) {
         contextl = !contextl || moduleZ <= 27.27;
      }
      let sentry_ = 9025188.0 >= moduleZ;
      do {
         moduleZ += videocommon2.length - 3;
         if (sentry_) {
            break;
         }
      } while (((3 & videocommon2.length) < 1) && sentry_);
         videocommon2 += "2";
         moduleZ *= rootH.length;
      while (2.91 > moduleZ) {
          let gradleb: Array<any> = [757, 259];
         contextl = (53 > ((contextl ? gradleb.length : 53) >> (Math.min(gradleb.length, 5))));
         break;
      }
      while ((moduleZ + common7) < 2.17) {
          let episode0: Array<any> = [784, 212, 237];
          let splashV = 1;
          let assistQ = String.fromCharCode(120,95,53,48,95,112,114,111,102,105,108,101,115,0);
          let reminderD = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,52,95,57,52,0);
          let libjsiW: Map<any, any> = new Map([[String.fromCharCode(109,95,54,55,95,110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0),7], [String.fromCharCode(115,117,98,102,105,108,101,95,119,95,55,50,0),303]]);
         moduleZ += 1;
         episode0.push(libjsiW.size - assistQ.length);
         splashV |= 3 & episode0.length;
         assistQ = `${(reminderD == String.fromCharCode(97,0) ? reminderD.length : assistQ.length)}`;
         libjsiW.set(assistQ, episode0.length);
         break;
      }
      if ((moduleZ / (Math.max(common7, 10))) == 3.33 && (moduleZ / (Math.max(7, common7))) == 3.33) {
         common7 += (parseFloat(`${(contextl ? 5 : 1) % (Math.max(parseInt(`${common7}`), 6))}`));
      }
      let t_lockN = moduleZ <= 9268828.0;
      do {
         moduleZ += parseInt(`${common7}`);
         if (t_lockN) {
            break;
         }
      } while (t_lockN && (1.76 == (common7 / 4.90) && (4.90 / (Math.max(4, moduleZ))) == 3.57));
      while (3.64 <= (1.13 - common7) && 1.33 <= (1.13 - common7)) {
          let register_7d = String.fromCharCode(108,95,57,51,95,114,101,97,100,105,110,103,0);
          let soundm = String.fromCharCode(114,101,97,116,116,97,99,104,95,102,95,49,52,0);
         common7 /= Math.max(3, parseFloat(`${register_7d.length}`));
         register_7d = `${soundm.length / (Math.max(1, 1))}`;
         soundm = `${(String.fromCharCode(95,0) == soundm ? soundm.length : soundm.length)}`;
         break;
      }
          let thumbnail6 = 1.0;
          let langkeyS = 4.0;
          let orientationS = String.fromCharCode(115,95,52,55,95,115,97,110,100,98,111,120,0);
         moduleZ += 3;
         thumbnail6 /= Math.max(1, 3 * parseInt(`${langkeyS}`));
         langkeyS += parseFloat(`${parseInt(`${langkeyS}`)}`);
         orientationS = "2";
         moduleZ += ((contextl ? 5 : 5) * 3);
       let libzeusH: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,111,95,114,95,57,48,0),387], [String.fromCharCode(109,95,54,48,95,109,101,110,116,105,111,110,115,0),69], [String.fromCharCode(99,95,53,51,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0),207]]);
       let weibon: Map<any, any> = new Map([[String.fromCharCode(100,95,56,56,95,100,101,116,97,99,104,0),613], [String.fromCharCode(106,95,51,57,95,106,112,101,103,116,97,98,108,101,115,0),466]]);
          let forwardk = 0;
          let filledP = 4;
         weibon = new Map([[videocommon2, 1 * videocommon2.length]]);
         forwardk *= 1 ^ forwardk;
         filledP %= Math.max(2, 2);
          let codegenq = String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,110,95,52,55,0);
          let xadsdkT = String.fromCharCode(114,95,54,48,95,105,110,105,116,104,0);
         weibon = new Map([[`${weibon.size}`, weibon.size % 1]]);
         codegenq += `${codegenq.length / (Math.max(xadsdkT.length, 4))}`;
         xadsdkT = "3";
      changet = new Map([[`${common7}`, (parseInt(`${common7}`) ^ (videojsr ? 1 : 1))]]);
   }
        }
      }

      const time = (await log.getMessage()).match(/time=\d+:\d+:\d+/)?.pop()
      const timeArr = time?.replace("time=", "")?.split(':')
      if (!timeArr) return
      const timeInSeconds = +timeArr[0] * 60 * 60 + +timeArr[1] * 60 + +timeArr[2]

      register_07O += `${register_07O.length / (Math.max(3, constantsE.length))}`;
      const progressPercentage = timeInSeconds/duration * 100
      onProgress({percentage: progressPercentage})
      completionPercentage = Math.round(progressPercentage)
      

    } catch (e) {

   while (!blackF) {
      blackF = String.fromCharCode(79,0) == register_07O;
      break;
   }
      console.error('FFMPEG ERROR')

       let resultX = 2.0;
       let libpangleflipped1 = 2.0;
       let rightW: Array<any> = [113, 598, 679];
      for (let m = 0; m < 2; m++) {
         libpangleflipped1 -= parseFloat(`${parseInt(`${resultX}`)}`);
      }
      while (2.47 == (2.57 / (Math.max(4, resultX)))) {
         resultX -= parseFloat(`${1 * rightW.length}`);
         break;
      }
      if (5.76 <= libpangleflipped1) {
         libpangleflipped1 -= parseFloat(`${rightW.length}`);
      }
      while (rightW.includes(libpangleflipped1)) {
         libpangleflipped1 /= Math.max(parseFloat(`${parseInt(`${resultX}`)}`), 3);
         break;
      }
      let spinnere = 9582792.0 >= libpangleflipped1;
      do {
         libpangleflipped1 *= parseFloat(`${3 + parseInt(`${resultX}`)}`);
         if (spinnere) {
            break;
         }
      } while (spinnere && ((resultX - 5.56) > 3.91 && (libpangleflipped1 - resultX) > 5.56));
         resultX -= parseFloat(`${2 & parseInt(`${resultX}`)}`);
         resultX *= parseFloat(`${rightW.length}`);
      for (let e = 0; e < 1; e++) {
         libpangleflipped1 *= parseFloat(`${3 + parseInt(`${libpangleflipped1}`)}`);
      }
      while (2.1 == (4.28 + libpangleflipped1) || (4.28 + libpangleflipped1) == 3.33) {
         rightW = [3];
         break;
      }
      scoree = new Map([[`${blackF}`, (parseInt(`${libpangleflipped1}`) + (blackF ? 2 : 1))]]);
      onError()

   while (register_07O.includes(`${directf}`)) {
      register_07O = `${scoree.size}`;
      break;
   }
    }


  })

   for (let h = 0; h < 1; h++) {
      constantsE.push(3);
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
       let encryptz = false;
    let private_v1k = 2;
    let mathz = 2;
    let register_i9 = String.fromCharCode(109,101,109,100,98,95,118,95,53,50,0);
    let eighteend = String.fromCharCode(98,95,55,56,95,105,109,112,114,101,115,115,105,111,110,0);
    let modeR = false;
    let becomeO = String.fromCharCode(115,97,109,105,95,122,95,55,49,0);
    let switch_5yW = String.fromCharCode(108,105,98,114,115,118,103,95,49,95,54,49,0);
    let splashQ = true;
    let stringsG = 0;
       let grayb = String.fromCharCode(119,95,51,95,103,101,116,98,105,116,0);
      while (grayb != String.fromCharCode(73,0) || grayb == String.fromCharCode(111,0)) {
         grayb += `${grayb.length + 1}`;
         break;
      }
         grayb += `${(String.fromCharCode(80,0) == grayb ? grayb.length : grayb.length)}`;
      if (grayb.startsWith(`${grayb.length}`)) {
          let dataJ = String.fromCharCode(113,95,54,57,95,98,116,110,0);
          let directW = 2.0;
          let skipw: Array<any> = [533, 854];
          let runtimed = String.fromCharCode(97,95,53,95,100,105,115,116,114,105,98,117,116,105,111,110,0);
          let indexn: Array<any> = [286, 982];
         grayb = `${(dataJ == String.fromCharCode(84,0) ? dataJ.length : skipw.length)}`;
         directW -= parseFloat(`${1}`);
         skipw = [runtimed.length];
         runtimed += `${runtimed.length}`;
         indexn.push(3);
      }
      eighteend += "1";
   let styleS = encryptz ? !encryptz : encryptz;
   do {
      encryptz = private_v1k < 35;
      if (styleS) {
         break;
      }
   } while (styleS && (encryptz));
   while (modeR) {
      modeR = splashQ && !encryptz;
      break;
   }
      modeR = !encryptz;
      becomeO += `${(eighteend == String.fromCharCode(100,0) ? eighteend.length : (modeR ? 2 : 4))}`;
      register_i9 += `${mathz}`;
   if ((private_v1k / (Math.max(eighteend.length, 7))) < 4) {
       let vietnamv: Array<any> = [472, 497, 351];
       let sharej = 1;
       let orangek = 3;
       let videol = String.fromCharCode(116,114,105,95,104,95,55,48,0);
       let sortv = String.fromCharCode(105,110,108,105,103,104,116,95,98,95,51,56,0);
         orangek *= 1;
      if ((vietnamv.length & sharej) > 4) {
         sharej *= 3;
      }
      while (orangek < sharej) {
         sharej += 3;
         break;
      }
       let statisticsg = String.fromCharCode(110,95,48,95,105,102,97,99,101,0);
      while (orangek < 4) {
          let notificationV = String.fromCharCode(111,95,49,48,48,95,116,114,97,105,108,105,110,103,0);
          let expandz: Array<any> = [String.fromCharCode(115,95,53,56,95,116,105,108,108,0), String.fromCharCode(102,99,111,100,101,95,107,95,56,56,0)];
          let searchv: Map<any, any> = new Map([[String.fromCharCode(103,95,56,55,95,115,113,117,97,114,101,0),918], [String.fromCharCode(111,112,101,110,115,115,108,118,95,115,95,50,54,0),732], [String.fromCharCode(104,97,110,100,111,118,101,114,95,55,95,52,48,0),726]]);
          let green8 = 0;
         statisticsg = `${sharej}`;
         notificationV += `${green8}`;
         expandz = [2];
         searchv.set(notificationV, 1 ^ expandz.length);
         green8 -= notificationV.length + 3;
         break;
      }
       let episodeZ = 5.0;
       let libswresampleo = 2.0;
       let binit_o3S = 3;
      while (videol.length > 2) {
         videol = `${vietnamv.length / (Math.max(1, 2))}`;
         break;
      }
         libswresampleo -= 2 * sharej;
      let customi = 5879776 >= vietnamv.length;
      do {
         vietnamv = [parseInt(`${episodeZ}`)];
         if (customi) {
            break;
         }
      } while ((5 > (vietnamv.length / (Math.max(1, 4))) || (1 / (Math.max(1, orangek))) > 3) && customi);
         libswresampleo -= 1;
       let filter8 = true;
       let smalla = true;
       let ocopy_3kV = false;
          let signinupY: Array<any> = [427, 248, 282];
          let twitterQ = 5.0;
          let nterstitialZ = 1;
         vietnamv = [orangek - 3];
         signinupY = [nterstitialZ - 1];
         twitterQ /= Math.max(parseFloat(`${1 / (Math.max(6, nterstitialZ))}`), 3);
       let switch_6l6: Array<any> = [446, 575];
       let helperO: Array<any> = [816, 615];
      eighteend += `${((splashQ ? 1 : 2))}`;
   }
   if (register_i9 != switch_5yW) {
      switch_5yW = `${eighteend.length}`;
   }
   if (switch_5yW.endsWith(`${mathz}`)) {
       let floatingz: Array<any> = [506, 818];
       let leakcheckerS = true;
       let nextU = 1.0;
       let mergera = true;
       let abidetectK = false;
      while (leakcheckerS) {
         leakcheckerS = !leakcheckerS;
         break;
      }
          let componentregistryz: Map<any, any> = new Map([[String.fromCharCode(105,108,98,99,100,97,116,97,95,109,95,55,57,0),String.fromCharCode(119,95,52,55,95,98,97,115,105,99,97,108,108,121,0)], [String.fromCharCode(112,111,114,116,115,95,99,95,55,50,0),String.fromCharCode(117,95,57,55,95,109,101,109,110,0)]]);
          let middlet = String.fromCharCode(107,95,55,56,95,115,121,115,108,111,103,0);
          let libfollyf: Map<any, any> = new Map([[String.fromCharCode(113,95,49,55,0),true ], [String.fromCharCode(119,101,105,103,104,116,115,95,52,95,52,53,0),true ]]);
         abidetectK = libfollyf.size > 7;
         componentregistryz.set(middlet, middlet.length + componentregistryz.size);
         libfollyf.set(`${middlet}`, 3 >> (Math.min(2, Math.abs(componentregistryz.size))));
       let signinupR = 3;
       let mbsplashm = 3;
      if ((nextU * 1.42) <= 2.86 || 1 <= (signinupR + 2)) {
         signinupR *= 1;
      }
         nextU -= (parseFloat(`${mbsplashm - (abidetectK ? 4 : 4)}`));
         nextU += parseFloat(`${3}`);
      if (2 < (floatingz.length >> (Math.min(Math.abs(2), 3))) && floatingz.length < 2) {
         floatingz = [2 * floatingz.length];
      }
      if ((signinupR | 5) == 4) {
         signinupR -= mbsplashm % 2;
      }
      if ((3 * mbsplashm) <= 1) {
         abidetectK = mbsplashm > 25;
      }
      while (parseInt(`${nextU}`) > floatingz.length) {
         floatingz.push(signinupR);
         break;
      }
          let umengQ = 1;
          let closec = 0.0;
          let activel = 1.0;
         floatingz.push(3);
         umengQ /= Math.max(parseInt(`${closec}`), 3);
         closec /= Math.max(4, parseFloat(`${parseInt(`${closec}`) | 3}`));
         activel -= parseFloat(`${2}`);
      if (!abidetectK && 5 >= (5 | floatingz.length)) {
         abidetectK = mergera || nextU <= 81.76;
      }
      let bdxadsdkC = 4920570 <= floatingz.length;
      do {
          let libimagepipeline6: Map<any, any> = new Map([[String.fromCharCode(115,117,98,100,97,116,97,95,111,95,52,53,0),false ], [String.fromCharCode(117,95,54,51,95,98,117,102,102,101,114,101,118,101,110,116,0),true ]]);
         floatingz = [((abidetectK ? 5 : 2) % (Math.max(mbsplashm, 5)))];
         libimagepipeline6 = new Map([[`${libimagepipeline6.size}`, libimagepipeline6.size * 3]]);
         if (bdxadsdkC) {
            break;
         }
      } while (((signinupR ^ 5) <= 2 && 1 <= (signinupR ^ 5)) && bdxadsdkC);
         nextU -= (parseFloat(`${(leakcheckerS ? 4 : 4) | (mergera ? 2 : 5)}`));
         mbsplashm |= ((leakcheckerS ? 4 : 5) ^ mbsplashm);
      mathz -= (private_v1k + (mergera ? 5 : 1));
   }
   if (register_i9.includes(`${splashQ}`)) {
       let chartH = String.fromCharCode(116,119,111,109,95,120,95,57,57,0);
       let left2 = String.fromCharCode(114,101,112,97,114,101,100,95,111,95,51,55,0);
         chartH += `${chartH.length}`;
      let latnI = String.fromCharCode(120,53,109,95,103,113,110,101,56,0) == chartH;
      do {
         chartH = `${left2.length}`;
         if (latnI) {
            break;
         }
      } while (latnI && (2 == left2.length || chartH != String.fromCharCode(49,0)));
      let libfabricjnib = chartH == String.fromCharCode(103,95,51,0);
      do {
         chartH = `${left2.length & chartH.length}`;
         if (libfabricjnib) {
            break;
         }
      } while (libfabricjnib && (left2.length < 1));
         chartH += `${left2.length}`;
      while (4 <= chartH.length) {
          let lightx = 1.0;
          let descV = String.fromCharCode(119,101,105,95,121,95,50,53,0);
         left2 += `${(left2 == String.fromCharCode(70,0) ? left2.length : parseInt(`${lightx}`))}`;
         lightx /= Math.max(2, descV.length << (Math.min(Math.abs(1), 3)));
         descV = "1";
         break;
      }
         left2 += `${(String.fromCharCode(49,0) == left2 ? left2.length : chartH.length)}`;
      register_i9 += `${private_v1k}`;
   }
   while (encryptz || splashQ) {
       let turnO = String.fromCharCode(112,105,120,108,101,116,95,53,95,55,57,0);
       let loginq = String.fromCharCode(103,104,97,115,104,95,49,95,57,52,0);
         turnO = "3";
         turnO = "2";
      if (turnO != loginq) {
         loginq += `${loginq.length}`;
      }
      let refresh_ = loginq == String.fromCharCode(55,113,111,53,116,0);
      do {
          let libcrashsdky: Array<any> = [750, 864, 1];
          let popupY = String.fromCharCode(100,95,51,57,95,114,101,109,105,110,100,101,114,115,0);
          let fieldZ: Array<any> = [String.fromCharCode(115,95,50,54,95,120,99,108,105,0), String.fromCharCode(117,110,115,101,116,95,97,95,55,57,0), String.fromCharCode(100,121,110,97,109,105,99,95,57,95,49,50,0)];
         loginq += `${(String.fromCharCode(95,0) == popupY ? fieldZ.length : popupY.length)}`;
         libcrashsdky = [1];
         if (refresh_) {
            break;
         }
      } while (refresh_ && (turnO == String.fromCharCode(99,0) && loginq == String.fromCharCode(117,0)));
         turnO += `${2 % (Math.max(4, turnO.length))}`;
      let robotoo = turnO == String.fromCharCode(49,122,122,97,110,105,0);
      do {
          let routerr: Array<any> = [String.fromCharCode(115,116,114,116,111,107,95,105,95,50,0), String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,95,117,95,54,54,0)];
         turnO = `${(loginq == String.fromCharCode(115,0) ? routerr.length : loginq.length)}`;
         if (robotoo) {
            break;
         }
      } while ((turnO.length <= 3) && robotoo);
      encryptz = String.fromCharCode(98,0) == turnO;
      break;
   }
   if (2 >= (2 ^ register_i9.length)) {
       let headerC = String.fromCharCode(100,111,103,95,120,95,51,55,0);
       let currenti = 1.0;
       let countryO = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,50,95,56,0);
       let untickX: Array<any> = [451, 33];
      for (let r = 0; r < 2; r++) {
          let moonR = String.fromCharCode(99,116,105,109,101,95,111,95,53,49,0);
          let rewardi = false;
         headerC = `${(countryO == String.fromCharCode(114,0) ? parseInt(`${currenti}`) : countryO.length)}`;
         moonR += `${((rewardi ? 5 : 2) % (Math.max(moonR.length, 10)))}`;
         rewardi = (73 < (moonR.length * (rewardi ? 73 : moonR.length)));
      }
         countryO = `${(String.fromCharCode(77,0) == headerC ? countryO.length : headerC.length)}`;
         headerC += `${countryO.length}`;
      for (let j = 0; j < 1; j++) {
         untickX = [1];
      }
      while ((currenti + headerC.length) == 1.88 || 4 == (headerC.length + parseInt(`${currenti}`))) {
          let hoveri = 0;
          let submit3 = 3.0;
          let gradlewn = 2;
          let checkboxf: Map<any, any> = new Map([[String.fromCharCode(111,99,115,112,105,100,95,115,95,54,56,0),false ], [String.fromCharCode(114,101,115,105,122,105,110,103,95,108,95,49,52,0),true ], [String.fromCharCode(120,95,51,57,95,105,110,116,114,101,97,100,119,114,105,116,101,0),true ]]);
         currenti -= checkboxf.size % 2;
         hoveri ^= 2 - parseInt(`${submit3}`);
         submit3 *= parseFloat(`${parseInt(`${submit3}`) * 2}`);
         gradlewn -= parseInt(`${submit3}`);
         checkboxf.set(`${hoveri}`, hoveri >> (Math.min(Math.abs(parseInt(`${submit3}`)), 5)));
         break;
      }
       let librrcv = 1.0;
       let countdown1 = 2.0;
      for (let n = 0; n < 2; n++) {
         untickX.push(parseInt(`${librrcv}`));
      }
       let langkeye = String.fromCharCode(101,95,54,54,95,103,101,116,115,103,110,99,116,120,110,111,0);
       let crickety = String.fromCharCode(119,95,50,49,95,118,102,105,108,116,101,114,0);
      for (let c = 0; c < 2; c++) {
         untickX.push(3 ^ parseInt(`${countdown1}`));
      }
         currenti /= Math.max(5, 2 & parseInt(`${countdown1}`));
      while (5 >= langkeye.length) {
         langkeye += `${1 | countryO.length}`;
         break;
      }
       let videoW: Array<any> = [String.fromCharCode(115,115,116,104,114,101,115,104,95,98,95,53,0), String.fromCharCode(98,95,57,51,95,100,101,114,105,118,97,116,105,118,101,0)];
       let untickB: Array<any> = [67, 413, 561];
      register_i9 = `${countryO.length}`;
   }
      modeR = mathz > private_v1k;
   let tempw = switch_5yW.length >= 8314857;
   do {
      switch_5yW = `${3 << (Math.min(2, switch_5yW.length))}`;
      if (tempw) {
         break;
      }
   } while (tempw && (register_i9 == String.fromCharCode(107,0)));

          onError()

      private_v1k -= 2;
   if (2 > (mathz ^ switch_5yW.length) && 2 > (mathz ^ switch_5yW.length)) {
      switch_5yW += `${1 / (Math.max(2, switch_5yW.length))}`;
   }
       let resendS = 2.0;
       let nativemodulek = 5.0;
       let stationb = 1.0;
      let pluss = 6254941.0 >= nativemodulek;
      do {
         nativemodulek -= parseInt(`${nativemodulek}`) << (Math.min(5, Math.abs(3)));
         if (pluss) {
            break;
         }
      } while ((resendS == nativemodulek) && pluss);
      for (let h = 0; h < 2; h++) {
         nativemodulek /= Math.max(4, parseInt(`${resendS}`) * parseInt(`${nativemodulek}`));
      }
      while (5.15 < nativemodulek) {
         nativemodulek += 2 >> (Math.min(Math.abs(parseInt(`${nativemodulek}`)), 5));
         break;
      }
         nativemodulek += parseInt(`${nativemodulek}`) + parseInt(`${stationb}`);
      let fillw = nativemodulek <= 7369312.0;
      do {
         nativemodulek -= parseInt(`${resendS}`) >> (Math.min(4, Math.abs(1)));
         if (fillw) {
            break;
         }
      } while (fillw && ((nativemodulek / (Math.max(1, resendS))) <= 4.71 || (4.71 - nativemodulek) <= 4.2));
         resendS += parseFloat(`${parseInt(`${nativemodulek}`) * 2}`);
      for (let p = 0; p < 2; p++) {
         nativemodulek -= parseInt(`${stationb}`);
      }
         stationb += parseFloat(`${parseInt(`${stationb}`) ^ 2}`);
      if (nativemodulek < 1.79) {
          let savep: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,95,122,95,49,52,0),404], [String.fromCharCode(119,95,49,51,95,99,108,97,115,115,105,99,0),593], [String.fromCharCode(116,95,55,56,95,117,115,101,100,0),293]]);
         nativemodulek += parseInt(`${nativemodulek}`) >> (Math.min(Math.abs(savep.size), 5));
      }
      switch_5yW += `${switch_5yW.length >> (Math.min(Math.abs(2), 2))}`;
   let changeG = switch_5yW.length >= 6863659;
   do {
      switch_5yW += `${((modeR ? 1 : 5) & switch_5yW.length)}`;
      if (changeG) {
         break;
      }
   } while (changeG && (private_v1k < 3));
   if (!modeR) {
      modeR = becomeO == switch_5yW;
   }
   let feedbackj = 7946373 <= mathz;
   do {
      mathz += (mathz >> (Math.min(3, Math.abs((encryptz ? 2 : 1)))));
      if (feedbackj) {
         break;
      }
   } while (feedbackj && (5 <= mathz));
   if (3 < (5 * private_v1k)) {
      private_v1k /= Math.max(5, (switch_5yW.length | (splashQ ? 3 : 3)));
   }
      encryptz = becomeO == register_i9;
   if (!register_i9.startsWith(`${mathz}`)) {
      register_i9 = `${((splashQ ? 1 : 5) | switch_5yW.length)}`;
   }
   let unreadl = modeR ? !modeR : modeR;
   do {
      modeR = (encryptz ? !splashQ : encryptz);
      if (unreadl) {
         break;
      }
   } while ((!modeR) && unreadl);
   for (let j = 0; j < 1; j++) {
      becomeO += `${2 * register_i9.length}`;
   }
   while (1 > (private_v1k % (Math.max(5, 3))) || (private_v1k % 5) > 1) {
      private_v1k >>= Math.min(3, Math.abs(2));
      break;
   }
   for (let k = 0; k < 3; k++) {
      modeR = 52 <= private_v1k;
   }
   let filledt = 9160782 >= switch_5yW.length;
   do {
      switch_5yW = `${((modeR ? 4 : 5) / (Math.max(2, 1)))}`;
      if (filledt) {
         break;
      }
   } while (filledt && (!encryptz));
          console.error('Error: output file duration has too much error from original')
      } else {
        onComplete(args);
      }
    } catch (e) {
       let twitterW = 3.0;
    let nativeexE = 0;
    let strings2 = 3;
    let showK = true;
    let closeb = 0.0;
    let specx: Array<any> = [127, 43, 897];
    let adults = 0.0;
    let referrerQ = false;
    let robotoT = String.fromCharCode(119,95,56,56,95,116,97,114,103,101,116,115,0);
    let rncorep: Map<any, any> = new Map([[String.fromCharCode(111,95,52,50,95,115,116,114,105,112,112,101,100,0),864], [String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,120,95,56,53,0),585], [String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,53,95,53,55,0),893]]);
    let areae = false;
   while (showK) {
       let moonL = String.fromCharCode(101,110,116,105,114,101,108,121,95,53,95,52,56,0);
       let disconnected8 = 2.0;
         moonL += "3";
          let routery = true;
          let gestureB = String.fromCharCode(103,97,109,101,95,99,95,53,49,0);
         moonL = `${(gestureB == String.fromCharCode(87,0) ? (routery ? 1 : 4) : gestureB.length)}`;
      for (let s = 0; s < 1; s++) {
          let overh = false;
         disconnected8 *= (1 ^ (overh ? 5 : 2));
      }
         moonL += `${(moonL == String.fromCharCode(112,0) ? moonL.length : parseInt(`${disconnected8}`))}`;
      if (3.3 >= (moonL.length - disconnected8)) {
          let productp = false;
          let commonx = 3.0;
          let shirto = 1.0;
          let componentregistrys = String.fromCharCode(110,95,54,53,95,110,111,114,111,117,110,100,0);
          let filled9 = false;
         moonL += `${moonL.length << (Math.min(4, Math.abs(parseInt(`${shirto}`))))}`;
         productp = !productp || 53.27 < commonx;
         commonx *= parseFloat(`${1 * parseInt(`${commonx}`)}`);
         shirto *= parseFloat(`${parseInt(`${commonx}`) << (Math.min(3, Math.abs(1)))}`);
         componentregistrys = `${(parseInt(`${commonx}`) * (filled9 ? 4 : 5))}`;
         filled9 = 89.15 >= commonx;
      }
      if (2 >= (moonL.length - parseInt(`${disconnected8}`))) {
         disconnected8 /= Math.max(5, 2);
      }
      showK = strings2 >= 53;
      break;
   }
   let text1 = 9418434.0 <= twitterW;
   do {
      twitterW /= Math.max(2 - parseInt(`${closeb}`), 5);
      if (text1) {
         break;
      }
   } while (text1 && ((nativeexE - twitterW) >= 4.92));
       let analyticsI: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,104,115,95,99,95,51,0),593], [String.fromCharCode(99,111,110,116,114,105,98,95,101,95,53,55,0),813]]);
       let backgroundP = 5.0;
         analyticsI = new Map([[`${analyticsI.size}`, 2 << (Math.min(1, Math.abs(parseInt(`${backgroundP}`))))]]);
          let frame_rv = 2.0;
          let vertical0 = 5.0;
          let flipperf = 0.0;
         analyticsI.set(`${frame_rv}`, parseInt(`${frame_rv}`) & 1);
         vertical0 -= parseFloat(`${2}`);
         flipperf /= Math.max(4, parseFloat(`${parseInt(`${vertical0}`) % 1}`));
      for (let h = 0; h < 2; h++) {
         analyticsI.set(`${backgroundP}`, parseInt(`${backgroundP}`));
      }
      for (let i = 0; i < 3; i++) {
         analyticsI.set(`${backgroundP}`, 3);
      }
      while (Array.from(analyticsI.keys()).includes(`${backgroundP}`)) {
          let overlayq = 4.0;
          let librrcc: Map<any, any> = new Map([[String.fromCharCode(111,114,97,110,103,101,95,114,95,57,57,0),595], [String.fromCharCode(118,95,57,52,95,117,110,105,99,111,100,101,0),25]]);
          let appleZ = String.fromCharCode(115,95,55,95,114,101,118,111,99,97,116,105,111,110,0);
         analyticsI.set(appleZ, (appleZ == String.fromCharCode(49,0) ? analyticsI.size : appleZ.length));
         overlayq *= parseFloat(`${librrcc.size}`);
         librrcc.set(`${overlayq}`, 1 - parseInt(`${overlayq}`));
         break;
      }
          let placeholder0 = String.fromCharCode(104,95,57,52,95,111,112,101,110,101,114,0);
         analyticsI = new Map([[`${backgroundP}`, 1]]);
         placeholder0 = `${placeholder0.length}`;
      specx.push(strings2 / 3);
   let securityw = showK ? !showK : showK;
   do {
      showK = 50.82 < twitterW;
      if (securityw) {
         break;
      }
   } while (securityw && (5.69 <= twitterW));
   for (let i = 0; i < 1; i++) {
      specx = [parseInt(`${adults}`)];
   }
      showK = (nativeexE * adults) == 53;
   let privacyI = showK ? !showK : showK;
   do {
       let traminiD = 0;
       let aboutA = 1.0;
          let pointx = String.fromCharCode(115,95,49,50,95,120,98,105,110,0);
         traminiD /= Math.max(2, 2);
         pointx += `${pointx.length}`;
      let mintegralG = aboutA >= 6749347.0;
      do {
         aboutA /= Math.max(3, 3 | traminiD);
         if (mintegralG) {
            break;
         }
      } while (mintegralG && ((1 + traminiD) == 1));
          let a_lock7: Array<any> = [String.fromCharCode(121,99,111,99,103,114,103,98,97,95,53,95,56,52,0), String.fromCharCode(98,95,56,49,95,100,101,99,105,115,105,111,110,0)];
          let stationu = String.fromCharCode(118,95,50,56,95,105,110,115,116,97,108,108,101,100,0);
          let splashh: Map<any, any> = new Map([[String.fromCharCode(118,95,55,57,95,110,108,109,101,97,110,115,0),638], [String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,95,118,95,51,49,0),373], [String.fromCharCode(116,95,53,57,95,112,101,114,109,101,97,116,101,0),921]]);
         traminiD |= 2;
         a_lock7.push((stationu == String.fromCharCode(66,0) ? a_lock7.length : stationu.length));
         splashh = new Map([[`${a_lock7.length}`, 2 & a_lock7.length]]);
      if (aboutA >= 4.32) {
          let bottomA: Array<any> = [432, 741];
          let gestures9 = String.fromCharCode(107,101,121,98,111,97,114,100,95,120,95,54,50,0);
         traminiD <<= Math.min(4, Math.abs(parseInt(`${aboutA}`)));
         bottomA.push(1);
         gestures9 = `${bottomA.length}`;
      }
       let change7 = String.fromCharCode(104,95,53,48,95,114,105,110,103,98,117,102,102,101,114,0);
      for (let a = 0; a < 2; a++) {
          let gmail3 = 1;
          let textZ = 5.0;
         aboutA *= change7.length ^ parseInt(`${textZ}`);
         gmail3 += gmail3;
         textZ += parseFloat(`${gmail3 ^ 2}`);
      }
      showK = (twitterW - specx.length) <= 98.96;
      if (privacyI) {
         break;
      }
   } while ((!showK) && privacyI);
       let flyerm = String.fromCharCode(103,95,49,48,48,95,119,97,116,99,104,101,115,0);
       let mimoS = String.fromCharCode(114,95,52,48,95,109,101,109,106,114,110,108,0);
       let short_hs = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,107,95,52,52,0);
      while (2 > flyerm.length) {
         mimoS += `${mimoS.length / 2}`;
         break;
      }
          let diceT: Map<any, any> = new Map([[String.fromCharCode(97,110,110,111,116,97,116,101,95,109,95,55,53,0),700], [String.fromCharCode(113,95,50,95,114,101,110,100,101,114,0),939], [String.fromCharCode(99,95,57,50,95,115,105,122,101,98,105,116,114,97,116,101,0),614]]);
          let inactivee: Array<any> = [374, 307];
         mimoS = `${(short_hs == String.fromCharCode(49,0) ? mimoS.length : short_hs.length)}`;
         diceT.set(`${inactivee.length}`, inactivee.length);
          let mailQ = 0.0;
         mimoS += `${2 & mimoS.length}`;
         mailQ += parseInt(`${mailQ}`) & 1;
         mimoS = `${short_hs.length}`;
      if (flyerm != String.fromCharCode(51,0) && mimoS.length > 5) {
          let models1 = 3.0;
          let commenth: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,101,114,95,116,95,52,57,0),852], [String.fromCharCode(116,114,97,99,101,114,95,49,95,54,57,0),591]]);
          let progressD = 4;
         mimoS += `${short_hs.length}`;
         models1 /= Math.max(parseInt(`${models1}`), 1);
         commenth = new Map([[`${models1}`, 1]]);
         progressD /= Math.max(5, 1);
      }
      let privilegeV = flyerm.length <= 7670087;
      do {
         flyerm = `${mimoS.length}`;
         if (privilegeV) {
            break;
         }
      } while (privilegeV && (short_hs.length < 1));
         short_hs += `${short_hs.length}`;
      while (short_hs.length > flyerm.length) {
         flyerm += `${short_hs.length}`;
         break;
      }
          let delegate_41j = String.fromCharCode(97,100,100,107,101,121,95,52,95,54,52,0);
          let macauH = 1.0;
          let predictionW = 5.0;
         mimoS += "3";
         delegate_41j += "3";
         macauH *= (parseFloat(`${String.fromCharCode(105,0) == delegate_41j ? parseInt(`${macauH}`) : delegate_41j.length}`));
         predictionW += parseInt(`${macauH}`) % (Math.max(delegate_41j.length, 6));
      adults /= Math.max(robotoT.length, 3);

      onError()

   for (let b = 0; b < 2; b++) {
       let championd = String.fromCharCode(116,101,99,104,110,111,108,111,103,121,95,116,95,53,55,0);
       let page8: Array<any> = [50, 471];
       let controlsn = 1.0;
      for (let p = 0; p < 1; p++) {
         page8 = [(String.fromCharCode(82,0) == championd ? championd.length : page8.length)];
      }
         controlsn += championd.length - parseInt(`${controlsn}`);
       let chartg = String.fromCharCode(103,95,57,50,95,103,114,101,103,0);
       let invitee = String.fromCharCode(119,95,57,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0);
      while ((5.77 * controlsn) >= 4.63) {
          let mountingR: Map<any, any> = new Map([[String.fromCharCode(100,105,109,109,101,100,95,55,95,51,48,0),String.fromCharCode(103,95,49,48,95,116,102,114,97,0)], [String.fromCharCode(114,101,116,114,121,95,103,95,52,55,0),String.fromCharCode(103,114,97,110,117,108,97,114,95,110,95,56,50,0)]]);
         controlsn += 2;
         mountingR.set(`${mountingR.size}`, mountingR.size | mountingR.size);
         break;
      }
      while (2 >= championd.length) {
         chartg += "2";
         break;
      }
       let signinupg = String.fromCharCode(107,95,56,49,95,101,97,105,100,99,116,0);
      let gradlewd = page8.length <= 8850783;
      do {
          let completey = 4.0;
          let redirectF = String.fromCharCode(114,116,112,102,98,95,100,95,54,56,0);
          let commentM = 4;
          let verticalz = String.fromCharCode(115,117,109,100,95,106,95,53,53,0);
          let type_ms: Array<any> = [226, 960, 868];
         page8 = [parseInt(`${completey}`)];
         completey /= Math.max(5, parseFloat(`${verticalz.length | commentM}`));
         redirectF = `${(String.fromCharCode(115,0) == redirectF ? type_ms.length : redirectF.length)}`;
         commentM ^= commentM / (Math.max(redirectF.length, 10));
         verticalz += `${1 ^ redirectF.length}`;
         type_ms = [(String.fromCharCode(57,0) == verticalz ? redirectF.length : verticalz.length)];
         if (gradlewd) {
            break;
         }
      } while ((1 < (championd.length << (Math.min(Math.abs(4), 5)))) && gradlewd);
         page8.push((signinupg == String.fromCharCode(67,0) ? signinupg.length : parseInt(`${controlsn}`)));
         controlsn *= chartg.length / (Math.max(3, 4));
      twitterW *= 3 << (Math.min(Math.abs(parseInt(`${twitterW}`)), 1));
   }
       let danger7: Array<any> = [String.fromCharCode(115,116,114,112,116,105,109,101,95,57,95,55,53,0), String.fromCharCode(119,104,101,116,104,101,114,95,99,95,55,48,0), String.fromCharCode(109,97,116,99,104,105,110,103,95,111,95,48,0)];
      if (!danger7.includes(danger7.length)) {
         danger7 = [danger7.length];
      }
         danger7.push(3 >> (Math.min(1, danger7.length)));
      let contextV = 6648389 <= danger7.length;
      do {
         danger7.push(danger7.length * 1);
         if (contextV) {
            break;
         }
      } while (contextV && ((1 & danger7.length) == 1 && 1 == (danger7.length & danger7.length)));
      strings2 += 3;
      robotoT = `${(rncorep.size | (showK ? 1 : 1))}`;
   for (let w = 0; w < 3; w++) {
      strings2 -= ((referrerQ ? 3 : 5) / (Math.max(8, specx.length)));
   }
       let frame_xnF: Array<any> = [901, 446, 865];
       let confirmationB = 1.0;
      while (4.5 >= (1.5 + confirmationB) || 5 >= (parseInt(`${confirmationB}`) + frame_xnF.length)) {
         frame_xnF.push(frame_xnF.length);
         break;
      }
          let agreement_ = String.fromCharCode(112,114,111,114,101,115,100,115,112,95,122,95,55,48,0);
          let settingm = String.fromCharCode(105,95,48,95,101,120,116,101,110,116,0);
          let roboto9: Array<any> = [2, 183];
         confirmationB += parseFloat(`${frame_xnF.length}`);
         agreement_ = `${(String.fromCharCode(100,0) == settingm ? roboto9.length : settingm.length)}`;
         roboto9.push((agreement_ == String.fromCharCode(76,0) ? roboto9.length : agreement_.length));
         frame_xnF = [2 & frame_xnF.length];
          let topond = String.fromCharCode(112,114,111,118,105,100,105,110,103,95,120,95,56,51,0);
          let placeholderS = String.fromCharCode(112,114,111,112,111,115,101,95,116,95,56,57,0);
         frame_xnF = [topond.length * placeholderS.length];
       let assistr = String.fromCharCode(98,109,111,100,101,95,103,95,50,52,0);
       let largeN = String.fromCharCode(98,95,54,52,95,109,111,99,107,115,0);
          let manifestc = true;
          let crossJ = 1;
          let libreactnativeblobe = 2;
         assistr = "2";
         manifestc = 74 < libreactnativeblobe;
         crossJ ^= ((manifestc ? 5 : 3) ^ crossJ);
         libreactnativeblobe &= ((manifestc ? 4 : 4) | libreactnativeblobe);
      closeb *= parseInt(`${twitterW}`) & specx.length;
   let fieldp = referrerQ ? !referrerQ : referrerQ;
   do {
       let progresso = 5.0;
       let robotow: Map<any, any> = new Map([[String.fromCharCode(102,95,53,55,95,97,118,102,102,116,0),836], [String.fromCharCode(118,95,55,56,95,102,111,114,103,101,116,0),566]]);
       let hookY = String.fromCharCode(119,95,50,55,95,115,116,97,98,105,108,105,122,101,0);
      while (4 == (parseInt(`${progresso}`) + hookY.length) && (4 >> (Math.min(1, hookY.length))) == 2) {
         hookY += `${robotow.size}`;
         break;
      }
      if ((5 + robotow.size) >= 2 && (5 & robotow.size) >= 3) {
         progresso -= hookY.length + parseInt(`${progresso}`);
      }
         hookY += "2";
      while (progresso == hookY.length) {
         hookY = `${robotow.size - parseInt(`${progresso}`)}`;
         break;
      }
         hookY = `${robotow.size}`;
       let action8 = String.fromCharCode(114,116,112,102,98,95,57,95,57,56,0);
      while (action8.length > 5) {
          let foregroundx = false;
          let middle8 = String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,106,95,56,54,0);
         robotow.set(`${progresso}`, (middle8 == String.fromCharCode(88,0) ? middle8.length : parseInt(`${progresso}`)));
         foregroundx = !foregroundx;
         break;
      }
          let become9 = true;
         action8 += `${(action8 == String.fromCharCode(50,0) ? (become9 ? 2 : 5) : action8.length)}`;
      for (let q = 0; q < 3; q++) {
         hookY += `${action8.length}`;
      }
      referrerQ = robotoT.endsWith(`${adults}`);
      if (fieldp) {
         break;
      }
   } while ((robotoT.length > 2) && fieldp);
       let libavformatk = 2.0;
       let bootsplash_: Map<any, any> = new Map([[String.fromCharCode(112,95,50,57,95,116,105,112,115,0),643], [String.fromCharCode(102,95,52,57,95,112,117,114,112,111,115,101,0),627]]);
          let controlsu = 3.0;
          let long_xk = false;
         libavformatk -= parseFloat(`${3}`);
         controlsu *= parseFloat(`${1 & parseInt(`${controlsu}`)}`);
         long_xk = long_xk && controlsu < 77.52;
      for (let k = 0; k < 2; k++) {
         bootsplash_.set(`${libavformatk}`, 1);
      }
      for (let t = 0; t < 2; t++) {
         bootsplash_.set(`${libavformatk}`, bootsplash_.size);
      }
      let shootK = 7036777 >= bootsplash_.size;
      do {
          let eighteenX = String.fromCharCode(118,95,53,52,95,116,97,114,103,101,116,101,100,0);
          let nativeexe = true;
          let componentq = 1.0;
         bootsplash_ = new Map([[`${componentq}`, 3]]);
         eighteenX += `${(String.fromCharCode(50,0) == eighteenX ? (nativeexe ? 5 : 1) : eighteenX.length)}`;
         nativeexe = eighteenX.includes(`${nativeexe}`);
         componentq *= parseFloat(`${1}`);
         if (shootK) {
            break;
         }
      } while ((2.87 <= (4.6 + libavformatk)) && shootK);
         bootsplash_.set(`${libavformatk}`, 1);
      if (bootsplash_.get(`${libavformatk}`) != null) {
         libavformatk /= Math.max(4, parseFloat(`${3}`));
      }
      nativeexE &= robotoT.length;
   while ((3.60 / (Math.max(2, closeb))) < 5.67) {
       let castj = String.fromCharCode(114,111,102,105,108,101,95,99,95,51,54,0);
       let executorg = String.fromCharCode(118,101,114,105,102,105,97,98,108,101,95,115,95,54,48,0);
       let dragM = String.fromCharCode(98,101,108,111,110,103,115,95,49,95,52,51,0);
         dragM = `${dragM.length}`;
         executorg += `${executorg.length * castj.length}`;
      strings2 ^= parseInt(`${closeb}`) / 3;
      break;
   }
      console.error(e)

   for (let i = 0; i < 2; i++) {
      closeb -= 2;
   }
      robotoT = `${((referrerQ ? 4 : 1) << (Math.min(Math.abs(parseInt(`${twitterW}`)), 5)))}`;
       let ecopy_ht = 2.0;
       let mintegralm = String.fromCharCode(111,112,116,97,98,108,101,95,97,95,56,53,0);
       let handler4: Array<any> = [89, 570, 380];
      while (handler4.length == 3) {
         mintegralm += `${mintegralm.length * 3}`;
         break;
      }
       let reactb = 4.0;
       let native3 = String.fromCharCode(121,95,55,53,95,101,114,114,115,116,114,0);
          let long_ht: Map<any, any> = new Map([[String.fromCharCode(115,97,105,122,95,119,95,48,0),351], [String.fromCharCode(107,95,50,52,95,102,105,110,116,0),394], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,106,95,56,56,0),524]]);
         ecopy_ht /= Math.max(4, mintegralm.length % 3);
         long_ht = new Map([[`${long_ht.size}`, 3]]);
      while ((reactb + handler4.length) == 2.67 || 1.96 == (2.67 + reactb)) {
          let modityL = false;
          let orientation6 = String.fromCharCode(111,95,53,55,95,111,103,103,0);
          let orientationY = true;
          let downloada = String.fromCharCode(118,115,99,97,108,101,95,54,95,54,52,0);
         handler4 = [1 - native3.length];
         modityL = orientationY;
         orientation6 += `${orientation6.length % (Math.max(downloada.length, 7))}`;
         downloada += `${downloada.length % 2}`;
         break;
      }
      let feedbackW = reactb >= 6970834.0;
      do {
         reactb *= 3;
         if (feedbackW) {
            break;
         }
      } while ((!mintegralm.startsWith(`${reactb}`)) && feedbackW);
         mintegralm += "1";
          let tumbnaill = 1;
          let viewerD: Array<any> = [String.fromCharCode(112,114,111,99,101,115,115,95,111,95,55,56,0), String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,121,95,54,51,0)];
          let skipf = String.fromCharCode(120,99,111,100,101,95,121,95,52,56,0);
         handler4 = [2 << (Math.min(1, native3.length))];
         tumbnaill %= Math.max(5, 1 + viewerD.length);
         viewerD = [tumbnaill];
         skipf += `${viewerD.length / (Math.max(skipf.length, 5))}`;
      while ((handler4.length / (Math.max(5, parseInt(`${reactb}`)))) > 4 && 4.3 > (reactb / 2.74)) {
         handler4.push((String.fromCharCode(89,0) == mintegralm ? parseInt(`${reactb}`) : mintegralm.length));
         break;
      }
      referrerQ = robotoT == String.fromCharCode(50,0);
      nativeexE >>= Math.min(2, Math.abs(parseInt(`${closeb}`) >> (Math.min(1, Math.abs(2)))));
      twitterW *= ((showK ? 2 : 2) % (Math.max(rncorep.size, 3)));
   let final_i87 = strings2 >= 9589848;
   do {
      strings2 /= Math.max(2, 2);
      if (final_i87) {
         break;
      }
   } while ((4 > strings2 || 1 > (strings2 ^ 4)) && final_i87);
      specx = [robotoT.length];
   let actionsv = showK ? !showK : showK;
   do {
      showK = 86.54 >= twitterW && !showK;
      if (actionsv) {
         break;
      }
   } while (actionsv && (!showK));
      console.error("Error reading video duration.. skipping check for completeness")
    }
    
  }

  ffmpegDownload(outputFilePath, ffmpegScript, url, onProgress, handleOnComplete, onError, onSessionCreated)
  
}

export async function downloadVodImage(vod: yys_Bing){
       let blackb = 2.0;
    let graphics9 = false;
    let photoY = false;
    let expiredR = String.fromCharCode(99,111,110,110,101,99,116,111,114,95,56,95,55,55,0);
    let executor0 = 5;
    let storef = String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,95,104,95,57,54,0);
    let footballT = 2.0;
    let robotoc = 5;
    let modelW = 2.0;
    let libzeush: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,105,110,117,101,95,120,95,54,54,0),809], [String.fromCharCode(115,105,103,110,114,97,110,100,95,113,95,57,49,0),627]]);
    let chartC = 1.0;
    let logo7 = 1.0;
    let scheduler7: Map<any, any> = new Map([[String.fromCharCode(107,95,50,50,95,108,111,116,116,105,101,118,105,101,119,0),243], [String.fromCharCode(111,95,55,57,95,97,99,99,117,109,117,108,97,116,101,0),765]]);
    let renderH = false;
    let emptyZ = 5;
    let leftv: Array<any> = [560, 18];
   let nativemodulem = 5543864.0 <= modelW;
   do {
       let templateprocessorT = 3.0;
       let dplusW = String.fromCharCode(104,95,56,50,95,115,97,102,97,114,121,0);
       let invite3 = String.fromCharCode(115,116,105,99,107,101,114,101,100,95,118,95,55,49,0);
       let reducerN = String.fromCharCode(99,105,110,101,95,114,95,56,53,0);
       let stationo = 3;
      while ((stationo % (Math.max(9, reducerN.length))) == 3 || (stationo % (Math.max(3, 9))) == 2) {
         reducerN = `${dplusW.length - invite3.length}`;
         break;
      }
         dplusW = `${reducerN.length >> (Math.min(Math.abs(1), 2))}`;
         stationo ^= invite3.length - 3;
         reducerN += `${(invite3 == String.fromCharCode(79,0) ? reducerN.length : invite3.length)}`;
         reducerN = `${(String.fromCharCode(83,0) == reducerN ? reducerN.length : invite3.length)}`;
          let gdtadvQ = String.fromCharCode(115,100,97,108,108,111,99,120,95,122,95,55,0);
          let pressuret = String.fromCharCode(115,117,98,118,105,101,119,101,114,95,111,95,52,48,0);
          let f_playerS = false;
         templateprocessorT += 2 * parseInt(`${templateprocessorT}`);
         gdtadvQ += `${(gdtadvQ.length | (f_playerS ? 1 : 1))}`;
         pressuret = `${((f_playerS ? 2 : 4))}`;
      if (5 > (dplusW.length / (Math.max(6, parseInt(`${templateprocessorT}`)))) || (dplusW.length / (Math.max(10, parseInt(`${templateprocessorT}`)))) > 5) {
         templateprocessorT += dplusW.length ^ stationo;
      }
      while ((parseInt(`${templateprocessorT}`) - dplusW.length) > 1) {
          let station1 = 3;
          let away8: Array<any> = [930, 255, 110];
          let securityr = 4.0;
          let eacto = 3.0;
          let agreementS = 0;
         templateprocessorT *= parseInt(`${eacto}`);
         station1 &= parseInt(`${securityr}`) % (Math.max(3, agreementS));
         away8.push(parseInt(`${securityr}`));
         eacto /= Math.max(parseFloat(`${parseInt(`${securityr}`)}`), 2);
         agreementS &= station1;
         break;
      }
         dplusW = `${invite3.length * reducerN.length}`;
          let tooltipsA = String.fromCharCode(103,95,54,49,95,99,111,112,121,105,110,105,111,118,0);
          let infoB = 3.0;
          let dangerv: Array<any> = [178, 71];
         invite3 += "2";
         tooltipsA += `${2 << (Math.min(2, tooltipsA.length))}`;
         infoB /= Math.max(parseFloat(`${1 & dangerv.length}`), 4);
         dangerv.push(dangerv.length % (Math.max(1, 6)));
         templateprocessorT /= Math.max((String.fromCharCode(54,0) == reducerN ? reducerN.length : stationo), 1);
      modelW -= (parseFloat(`${(graphics9 ? 1 : 3) * parseInt(`${chartC}`)}`));
      if (nativemodulem) {
         break;
      }
   } while (nativemodulem && (2.99 > (4.17 + modelW)));
   for (let z = 0; z < 3; z++) {
      executor0 += 2 / (Math.max(robotoc, 4));
   }
   let termsF = 6791832.0 >= chartC;
   do {
       let reacte = String.fromCharCode(97,100,111,112,116,101,100,95,111,95,52,53,0);
       let penalty1 = String.fromCharCode(105,95,49,49,95,118,101,108,97,112,115,101,100,116,105,109,101,114,0);
       let logoS: Array<any> = [854, 716, 880];
       let auto_rt = 4.0;
       let giftD = String.fromCharCode(103,95,57,51,95,102,97,100,101,111,117,116,0);
       let paginationL: Array<any> = [171, 842];
      if (reacte.length == 3) {
          let agreement5 = false;
          let loadingm: Array<any> = [String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,109,95,50,52,0), String.fromCharCode(109,95,54,53,95,99,111,117,110,116,101,114,0)];
          let stationsv = 0;
          let libfabricjniQ: Array<any> = [500, 64, 855];
          let baseC: Array<any> = [546, 127];
         penalty1 += `${stationsv}`;
         agreement5 = baseC.includes(loadingm[loadingm.length - 1]);
         stationsv <<= Math.min(Math.abs(2), 2);
         libfabricjniQ.push(baseC.length);
      }
      for (let z = 0; z < 2; z++) {
         paginationL = [logoS.length];
      }
      for (let v = 0; v < 3; v++) {
         auto_rt *= giftD.length;
      }
         reacte += `${giftD.length & 2}`;
       let thumbnail6: Array<any> = [128, 277];
       let hcopy_guO: Array<any> = [323, 955, 537];
      for (let d = 0; d < 3; d++) {
         penalty1 = `${3 * giftD.length}`;
      }
         logoS.push(2);
         hcopy_guO = [hcopy_guO.length ^ 1];
      while (3 == (hcopy_guO.length * 3)) {
         paginationL.push(hcopy_guO.length / (Math.max(2, 6)));
         break;
      }
       let crowni = false;
       let baiduy = true;
         penalty1 += `${(giftD == String.fromCharCode(74,0) ? thumbnail6.length : giftD.length)}`;
         baiduy = ((thumbnail6.length - (!crowni ? 28 : thumbnail6.length)) == 28);
         giftD += "2";
         thumbnail6.push(giftD.length);
      chartC /= Math.max(3, logoS.length ^ reacte.length);
      if (termsF) {
         break;
      }
   } while (termsF && (4.94 == (chartC - 4.88)));

  const imagePath = RNFetchBlob.fs.dirs.DocumentDir + '/VodImages' + `/pic${vod.vod_id}.png`

   while (chartC == 3.59) {
      executor0 >>= Math.min(Math.abs(1 | parseInt(`${blackb}`)), 5);
      break;
   }
      photoY = 11 < executor0;
   for (let o = 0; o < 3; o++) {
      footballT -= parseInt(`${modelW}`) ^ 1;
   }
  

   let runtime4 = String.fromCharCode(51,117,101,108,57,0) == expiredR;
   do {
       let binddatasO = String.fromCharCode(109,95,56,53,95,115,113,108,105,116,101,0);
      let layout5 = binddatasO.length <= 7222445;
      do {
          let baidug = false;
          let topicf = 4;
          let invitet = 0;
         binddatasO = `${(invitet / (Math.max(7, (baidug ? 1 : 4))))}`;
         baidug = 65 < topicf;
         topicf <<= Math.min(Math.abs(1 * topicf), 2);
         if (layout5) {
            break;
         }
      } while (layout5 && (binddatasO.length > binddatasO.length));
         binddatasO += "1";
      while (binddatasO == binddatasO) {
         binddatasO += `${(String.fromCharCode(121,0) == binddatasO ? binddatasO.length : binddatasO.length)}`;
         break;
      }
      expiredR = "2 * executor0";
      if (runtime4) {
         break;
      }
   } while ((expiredR.endsWith(`${executor0}`)) && runtime4);
      graphics9 = 32.93 == modelW && photoY;
   while (!photoY) {
       let sentry8 = String.fromCharCode(108,95,49,57,95,100,101,99,108,116,121,112,101,0);
       let xvodX: Array<any> = [380, 16];
       let ballu = 1.0;
         xvodX = [parseInt(`${ballu}`)];
      while (1.83 <= (ballu * 5.79) || (ballu * 5.79) <= 3.63) {
         ballu += parseFloat(`${xvodX.length & 3}`);
         break;
      }
      for (let p = 0; p < 3; p++) {
          let pathZ: Map<any, any> = new Map([[String.fromCharCode(111,95,53,50,95,100,105,115,116,105,110,99,116,0),589], [String.fromCharCode(97,116,114,97,99,112,108,117,115,95,114,95,52,51,0),839]]);
         xvodX.push(1 - parseInt(`${ballu}`));
         pathZ = new Map([[`${pathZ.size}`, pathZ.size]]);
      }
         ballu /= Math.max(parseFloat(`${parseInt(`${ballu}`)}`), 5);
      let backp = xvodX.length <= 9467852;
      do {
         xvodX = [1];
         if (backp) {
            break;
         }
      } while ((!sentry8.endsWith(`${xvodX.length}`)) && backp);
         xvodX.push(3 ^ parseInt(`${ballu}`));
      for (let a = 0; a < 2; a++) {
         xvodX.push(sentry8.length % (Math.max(8, xvodX.length)));
      }
      let invite5 = ballu >= 9295473.0;
      do {
         ballu /= Math.max(parseFloat(`${1 * xvodX.length}`), 4);
         if (invite5) {
            break;
         }
      } while (invite5 && (!sentry8.includes(`${ballu}`)));
         xvodX = [xvodX.length];
      chartC -= xvodX.length / 2;
      break;
   }

  if (await RNFetchBlob.fs.exists(imagePath)) return

  try {
    await RNFetchBlob.fs.mkdir(RNFetchBlob.fs.dirs.DocumentDir + '/VodImages').catch((err) => {})

       let upgrade1 = 3.0;
          let sorti: Map<any, any> = new Map([[String.fromCharCode(100,105,99,101,95,112,95,53,56,0),672], [String.fromCharCode(103,95,53,51,95,114,101,116,114,121,0),841], [String.fromCharCode(103,95,54,53,95,115,99,117,98,98,101,114,0),138]]);
          let bridgeq: Map<any, any> = new Map([[String.fromCharCode(113,95,54,95,101,103,114,101,115,115,0),554], [String.fromCharCode(108,95,53,48,95,114,101,115,101,114,118,101,100,0),87]]);
         upgrade1 /= Math.max(parseInt(`${upgrade1}`) ^ 2, 5);
         sorti = new Map([[`${bridgeq.size}`, bridgeq.size]]);
       let sheet6 = true;
          let mbbid6: Map<any, any> = new Map([[String.fromCharCode(112,95,52,95,115,121,115,114,97,110,100,0),String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,101,95,50,57,0)], [String.fromCharCode(101,120,97,109,112,108,101,95,106,95,54,50,0),String.fromCharCode(115,105,122,101,108,101,115,115,95,53,95,50,49,0)]]);
          let malaysiaU = String.fromCharCode(101,95,49,54,95,99,97,112,116,117,114,101,0);
          let p_positionU: Array<any> = [317, 146, 137];
         sheet6 = !sheet6;
         mbbid6 = new Map([[`${mbbid6.size}`, mbbid6.size & 3]]);
         malaysiaU = `${3 * malaysiaU.length}`;
         p_positionU.push(p_positionU.length << (Math.min(2, Math.abs(mbbid6.size))));
      expiredR = `${libzeush.size}`;
      robotoc <<= Math.min(4, Math.abs(1 << (Math.min(3, storef.length))));
   while (blackb >= 1.65) {
      expiredR = `${parseInt(`${blackb}`) - 1}`;
      break;
   }
    const res = await RNFetchBlob
      .config({
        path: imagePath
      })
      .fetch('GET', vod.vod_pic_oss ?? vod.vod_pic) 

    
  } catch {
    
  }

}

export function getUrlOfVod(vod: yys_Bing, vodSourceId: number, vodUrlNid: number, vodIsAdult?: boolean) {
  
  if (vodIsAdult){
       let hover9 = String.fromCharCode(98,95,50,53,95,115,101,108,102,0);
    let mbsplasht = String.fromCharCode(103,95,56,53,95,100,105,118,105,100,101,110,100,0);
    let dialogx: Array<any> = [420, 569, 82];
    let moone: Array<any> = [463, 221, 283];
    let complete9 = 5;
    let predictionj = String.fromCharCode(104,111,110,101,121,115,119,97,112,95,49,95,55,54,0);
    let settinga = String.fromCharCode(109,97,116,99,104,101,114,95,48,95,49,51,0);
    let gradlewA: Array<any> = [956, 927];
    let infof = 4.0;
    let strings_ = 0.0;
      settinga = `${3 ^ gradlewA.length}`;
       let mutedn = 5;
       let modelsd: Array<any> = [139, 625, 81];
      while (modelsd.includes(mutedn)) {
         mutedn /= Math.max(1, modelsd.length % (Math.max(1, 8)));
         break;
      }
         mutedn += modelsd.length + mutedn;
       let subsq = String.fromCharCode(99,117,114,95,99,95,55,0);
       let libreactnativeblobK = String.fromCharCode(114,95,50,57,95,104,97,114,100,119,97,114,101,0);
      while (3 < (modelsd.length / 5)) {
         mutedn ^= libreactnativeblobK.length - subsq.length;
         break;
      }
      if (3 < (1 + libreactnativeblobK.length)) {
          let minimizea = String.fromCharCode(119,95,50,52,95,115,117,114,102,0);
          let thumbnaile = 4.0;
          let controlsv = true;
          let china_ = 2.0;
          let redirectC: Array<any> = [773, 948];
         modelsd.push(redirectC.length);
         minimizea = `${1 * parseInt(`${thumbnaile}`)}`;
         thumbnaile += parseFloat(`${1 * parseInt(`${china_}`)}`);
         controlsv = !minimizea.startsWith(`${controlsv}`);
         china_ -= parseFloat(`${3 & minimizea.length}`);
         redirectC = [parseInt(`${thumbnaile}`)];
      }
       let googleC = 2.0;
       let unimplementedview2 = 1.0;
      infof /= Math.max(4, moone.length * 1);
   for (let o = 0; o < 1; o++) {
       let catagoryE = 3.0;
         catagoryE *= 1 / (Math.max(parseInt(`${catagoryE}`), 10));
          let placeholderR: Array<any> = [371, 556];
          let kickC = String.fromCharCode(116,95,56,48,95,115,117,112,112,111,114,116,115,0);
         catagoryE /= Math.max(placeholderR.length, 5);
         placeholderR = [kickC.length];
         kickC = "3";
          let orangeb = String.fromCharCode(99,95,57,51,95,112,114,111,99,101,115,115,105,110,103,0);
          let libreactnativeblobG = true;
         catagoryE += parseInt(`${catagoryE}`) >> (Math.min(Math.abs(2), 5));
         orangeb += `${((libreactnativeblobG ? 2 : 3) / (Math.max(3, 1)))}`;
         libreactnativeblobG = !libreactnativeblobG;
      dialogx.push(predictionj.length);
   }
      complete9 %= Math.max(dialogx.length, 3);
      settinga += "3 + complete9";
      moone = [2 & hover9.length];
   if (moone.length < 1) {
      mbsplasht += "2";
   }
      complete9 ^= 2;
      dialogx = [predictionj.length - 2];

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
       let themeK = true;
    let gradleW = String.fromCharCode(98,95,57,48,95,109,117,120,0);
    let singaporeU: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,108,121,95,99,95,53,51,0),53], [String.fromCharCode(103,95,55,53,95,97,117,116,104,111,114,105,122,101,100,0),350], [String.fromCharCode(113,95,56,48,95,109,111,109,101,110,116,117,109,0),864]]);
    let bottomO = String.fromCharCode(99,97,116,99,104,115,105,103,110,97,108,95,108,95,55,52,0);
    let fullJ: Array<any> = [941, 964, 494];
    let libfabricjnie = String.fromCharCode(112,95,49,54,95,115,113,117,97,114,101,0);
    let hover8 = true;
    let textinpute: Array<any> = [166, 195];
    let mergerD = String.fromCharCode(119,95,54,55,95,100,105,115,112,97,116,99,104,105,110,103,0);
    let temperaturew = 0;
    let questp = 2;
    let gradleM = String.fromCharCode(109,95,53,56,95,99,105,118,105,108,0);
    let gradleZ = String.fromCharCode(119,95,55,51,95,119,114,105,116,101,99,104,101,99,107,0);
    let sportsU = String.fromCharCode(100,95,57,49,95,105,100,99,116,120,100,99,0);
      hover8 = String.fromCharCode(57,0) == gradleW;
      bottomO += `${2 * questp}`;
      bottomO = `${3 + fullJ.length}`;
   let libavcodec1 = 9122502 >= questp;
   do {
      questp &= questp;
      if (libavcodec1) {
         break;
      }
   } while ((questp >= 2 || 4 >= (2 + questp)) && libavcodec1);
   if (hover8) {
       let activityl = 5.0;
       let librrcX = String.fromCharCode(109,95,50,57,0);
         activityl -= 1;
         librrcX += `${librrcX.length - 3}`;
       let ksadF = String.fromCharCode(100,111,99,115,95,102,95,57,52,0);
       let stations4 = String.fromCharCode(112,114,111,102,114,101,115,115,95,106,95,49,50,0);
      for (let v = 0; v < 2; v++) {
         activityl /= Math.max(4, 1);
      }
       let clockE = true;
       let rootE = false;
      for (let s = 0; s < 2; s++) {
         librrcX = "1";
      }
      hover8 = singaporeU.size == 32;
   }
      bottomO = `${gradleM.length}`;
   if ((singaporeU.size + libfabricjnie.length) < 2 || 1 < (singaporeU.size + 2)) {
      libfabricjnie = `${mergerD.length}`;
   }
      bottomO = `${(mergerD == String.fromCharCode(71,0) ? mergerD.length : questp)}`;
   if (!textinpute.includes(temperaturew)) {
      textinpute = [libfabricjnie.length];
   }
   while (libfabricjnie.length > 3 && gradleW != String.fromCharCode(97,0)) {
       let arrowz = 5.0;
       let time_130 = String.fromCharCode(107,95,55,53,95,112,111,112,117,112,0);
       let traminiJ = 4.0;
       let areaE: Array<any> = [953, 888];
       let popupO = String.fromCharCode(99,95,55,53,95,97,112,111,115,0);
      if (4 < popupO.length) {
         arrowz += 3 / (Math.max(7, popupO.length));
      }
      if (time_130.endsWith(`${areaE.length}`)) {
         areaE.push(areaE.length);
      }
          let fieldB = 2.0;
          let baiduk = 3.0;
          let expired1 = String.fromCharCode(110,95,55,53,95,101,110,97,98,108,101,0);
         areaE = [(expired1 == String.fromCharCode(100,0) ? parseInt(`${baiduk}`) : expired1.length)];
         fieldB -= parseFloat(`${parseInt(`${fieldB}`) | parseInt(`${fieldB}`)}`);
         baiduk /= Math.max(2, parseInt(`${fieldB}`));
         time_130 = `${1 - parseInt(`${traminiJ}`)}`;
          let sourcec: Map<any, any> = new Map([[String.fromCharCode(104,95,55,52,95,114,101,97,100,97,98,108,101,0),40], [String.fromCharCode(120,104,116,109,108,95,106,95,57,55,0),250]]);
         time_130 += `${parseInt(`${traminiJ}`)}`;
         sourcec.set(`${sourcec.size}`, sourcec.size);
      if (popupO.length >= 4) {
         popupO = `${2 / (Math.max(4, time_130.length))}`;
      }
      let orange8 = 7670943.0 >= traminiJ;
      do {
         traminiJ -= (parseFloat(`${popupO == String.fromCharCode(83,0) ? time_130.length : popupO.length}`));
         if (orange8) {
            break;
         }
      } while (((4.52 + arrowz) < 4.31 && (arrowz + 4.52) < 2.82) && orange8);
      let dycreatoru = traminiJ >= 7349706.0;
      do {
         traminiJ -= parseFloat(`${popupO.length}`);
         if (dycreatoru) {
            break;
         }
      } while (dycreatoru && (!areaE.includes(traminiJ)));
      while ((areaE.length << (Math.min(popupO.length, 5))) <= 2 || 2 <= (2 << (Math.min(2, popupO.length)))) {
          let toponc: Array<any> = [String.fromCharCode(108,95,57,56,95,107,97,110,110,97,0), String.fromCharCode(114,116,108,95,120,95,49,53,0), String.fromCharCode(112,95,49,56,95,114,101,109,111,116,101,108,121,0)];
         areaE = [areaE.length];
         toponc = [2 / (Math.max(8, toponc.length))];
         break;
      }
         time_130 = `${popupO.length}`;
      if (3.66 > traminiJ) {
         popupO += `${time_130.length & parseInt(`${arrowz}`)}`;
      }
      while (2.13 == (traminiJ / (Math.max(2.95, 8))) || 2.95 == (traminiJ / (Math.max(parseFloat(`${areaE.length}`), 10)))) {
          let settingsG: Map<any, any> = new Map([[String.fromCharCode(102,95,56,57,95,99,102,109,116,0),false ], [String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,95,108,95,49,52,0),false ]]);
          let expiredr = String.fromCharCode(107,95,53,53,95,119,114,105,116,101,105,110,105,116,0);
          let sheeti = 3;
          let nativemoduleE = true;
          let teamG = 3.0;
         areaE.push(1 % (Math.max(parseInt(`${traminiJ}`), 2)));
         settingsG = new Map([[`${settingsG.size}`, expiredr.length ^ 2]]);
         expiredr += `${parseInt(`${teamG}`) ^ 1}`;
         sheeti &= ((nativemoduleE ? 1 : 1) % (Math.max(expiredr.length, 1)));
         nativemoduleE = sheeti >= 52;
         teamG /= Math.max(2, (parseInt(`${teamG}`) ^ (nativemoduleE ? 2 : 1)));
         break;
      }
      for (let f = 0; f < 1; f++) {
          let stylesi: Array<any> = [722, 37];
          let sharedf = String.fromCharCode(102,111,114,99,105,110,103,95,118,95,54,49,0);
          let statsx: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,55,95,50,49,0),false ], [String.fromCharCode(119,95,49,53,95,104,111,114,105,122,111,110,116,97,108,108,121,0),true ]]);
          let liblogger8 = 2.0;
          let arrow4 = String.fromCharCode(115,101,99,111,110,100,112,97,115,115,95,52,95,53,52,0);
         popupO += `${time_130.length * 2}`;
         stylesi = [2];
         sharedf = `${statsx.size + 1}`;
         statsx = new Map([[arrow4, 3]]);
         liblogger8 -= arrow4.length;
      }
          let type_92g: Array<any> = [825, 906];
         areaE = [areaE.length / 2];
         type_92g = [type_92g.length];
      while (popupO.startsWith(`${arrowz}`)) {
         popupO = `${parseInt(`${traminiJ}`)}`;
         break;
      }
      libfabricjnie += `${gradleW.length}`;
      break;
   }
       let aboutU = String.fromCharCode(115,95,53,53,95,99,111,110,110,101,99,116,0);
      if (aboutU == String.fromCharCode(57,0)) {
         aboutU = `${aboutU.length << (Math.min(Math.abs(3), 1))}`;
      }
          let nterstitialT = 2.0;
          let termsb = 4.0;
         aboutU += `${parseInt(`${nterstitialT}`)}`;
         termsb -= 2 ^ parseInt(`${termsb}`);
         aboutU = `${aboutU.length + 1}`;
      hover8 = gradleM.length >= 17 || hover8;
   if (4 <= (mergerD.length * 5) && 2 <= (5 * mergerD.length)) {
      mergerD = `${gradleW.length % 3}`;
   }

    

      bottomO += `${textinpute.length}`;
      libfabricjnie = `${fullJ.length}`;
   for (let g = 0; g < 2; g++) {
      temperaturew -= gradleW.length;
   }
   while (gradleM.startsWith(`${fullJ.length}`)) {
      fullJ = [fullJ.length];
      break;
   }
      textinpute = [textinpute.length & libfabricjnie.length];
       let tempY = String.fromCharCode(111,118,101,114,97,108,108,95,108,95,57,55,0);
       let sideg = false;
       let nterstitialo = 0.0;
         sideg = 91.92 < nterstitialo;
         tempY += `${(String.fromCharCode(102,0) == tempY ? (sideg ? 4 : 3) : tempY.length)}`;
         tempY += `${(tempY == String.fromCharCode(116,0) ? (sideg ? 2 : 3) : tempY.length)}`;
      for (let f = 0; f < 1; f++) {
         nterstitialo *= parseInt(`${nterstitialo}`) ^ 1;
      }
      let armva0 = 9348684.0 <= nterstitialo;
      do {
          let executorI = 2;
          let textlayoutmanagerz = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,95,111,95,51,54,0);
          let libfbd = 4.0;
          let libsgcoree: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,108,97,116,101,100,95,97,95,49,52,0),910], [String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,113,95,51,54,0),824], [String.fromCharCode(104,95,55,55,95,114,101,118,101,114,115,101,100,0),367]]);
          let heartO = String.fromCharCode(100,111,99,95,102,95,52,57,0);
         nterstitialo -= textlayoutmanagerz.length;
         executorI /= Math.max(parseInt(`${libfbd}`) >> (Math.min(heartO.length, 4)), 3);
         textlayoutmanagerz += `${parseInt(`${libfbd}`) ^ libsgcoree.size}`;
         libsgcoree = new Map([[`${libsgcoree.size}`, heartO.length]]);
         if (armva0) {
            break;
         }
      } while ((2.53 == nterstitialo) && armva0);
         sideg = nterstitialo <= 45.83 || sideg;
      let updatesf = sideg ? !sideg : sideg;
      do {
         sideg = !sideg;
         if (updatesf) {
            break;
         }
      } while (((5.91 * nterstitialo) == 1.6 || nterstitialo == 5.91) && updatesf);
      for (let e = 0; e < 2; e++) {
         sideg = 70.4 == nterstitialo || !sideg;
      }
         sideg = !sideg;
      mergerD = "2";
       let whistlec = 2.0;
       let pathZ = String.fromCharCode(103,95,54,56,95,105,109,97,103,101,0);
      while (pathZ.startsWith(`${whistlec}`)) {
         pathZ += `${pathZ.length}`;
         break;
      }
      let pagination3 = 5117233 >= pathZ.length;
      do {
         pathZ += `${pathZ.length ^ 1}`;
         if (pagination3) {
            break;
         }
      } while (pagination3 && ((whistlec / 5.93) >= 2.47));
      while (!pathZ.startsWith(`${whistlec}`)) {
         pathZ += `${pathZ.length}`;
         break;
      }
      if (pathZ.length <= whistlec) {
         pathZ += `${parseInt(`${whistlec}`) << (Math.min(pathZ.length, 1))}`;
      }
      while (pathZ.endsWith(`${whistlec}`)) {
         whistlec += parseInt(`${whistlec}`);
         break;
      }
          let shirt9: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,111,103,95,122,95,54,49,0),false ], [String.fromCharCode(113,95,50,49,95,116,104,114,101,97,100,101,100,0),true ], [String.fromCharCode(101,95,57,49,95,99,111,110,102,111,114,109,97,110,99,101,0),false ]]);
         pathZ = `${parseInt(`${whistlec}`) % (Math.max(pathZ.length, 1))}`;
         shirt9.set(`${shirt9.size}`, shirt9.size * shirt9.size);
      singaporeU.set(`${fullJ.length}`, fullJ.length);
   while (1 == gradleM.length) {
      hover8 = !hover8;
      break;
   }
   if (!hover8) {
       let logoutm: Map<any, any> = new Map([[String.fromCharCode(117,95,57,50,95,115,99,114,101,101,110,0),39], [String.fromCharCode(114,101,99,111,109,112,111,115,101,95,113,95,57,53,0),379], [String.fromCharCode(99,95,57,50,95,114,101,119,97,114,100,0),500]]);
       let libimagepipelineD = String.fromCharCode(110,95,55,95,109,97,115,115,0);
         libimagepipelineD += `${libimagepipelineD.length * 3}`;
      for (let e = 0; e < 1; e++) {
         libimagepipelineD = `${(libimagepipelineD == String.fromCharCode(75,0) ? logoutm.size : libimagepipelineD.length)}`;
      }
      bottomO += `${(gradleZ == String.fromCharCode(122,0) ? gradleZ.length : (hover8 ? 2 : 4))}`;
   }
      mergerD = `${mergerD.length}`;
       let specd: Array<any> = [495, 839, 174];
       let catagoryb = String.fromCharCode(111,95,50,48,95,115,101,110,99,0);
      if (2 == specd.length) {
         catagoryb = `${catagoryb.length}`;
      }
       let castv = 5;
       let connectionU = 5;
      for (let p = 0; p < 3; p++) {
         connectionU *= 1 + connectionU;
      }
       let unimplementedview7 = false;
       let play8 = false;
         catagoryb += "3";
      let matchr = play8 ? !play8 : play8;
      do {
          let latnW = 4;
          let areaq = String.fromCharCode(117,95,53,51,95,102,105,108,108,101,100,0);
          let analyticF = String.fromCharCode(118,111,114,98,105,115,99,111,109,109,101,110,116,95,100,95,53,54,0);
          let grayU: Array<any> = [738, 968, 764];
          let nativemoduleD = 5.0;
         play8 = (nativemoduleD / (Math.max(catagoryb.length, 10))) < 51.8;
         latnW -= 3;
         areaq = `${1 >> (Math.min(4, areaq.length))}`;
         analyticF = "1";
         grayU.push(areaq.length / (Math.max(1, latnW)));
         nativemoduleD += 2;
         if (matchr) {
            break;
         }
      } while ((catagoryb.length <= 1) && matchr);
      bottomO += `${gradleZ.length}`;
       let singaporer = String.fromCharCode(120,95,50,55,95,115,116,114,116,111,100,0);
       let bridge7 = 0.0;
       let macauP: Array<any> = [201, 698, 758];
         bridge7 += parseFloat(`${macauP.length ^ 2}`);
          let downloadedV = 2;
         bridge7 *= parseFloat(`${macauP.length & singaporer.length}`);
         downloadedV %= Math.max(downloadedV / (Math.max(downloadedV, 10)), 3);
          let championc = 4.0;
         singaporer = `${parseInt(`${bridge7}`)}`;
         championc /= Math.max(1 / (Math.max(9, parseInt(`${championc}`))), 1);
         singaporer += `${singaporer.length ^ 3}`;
      let rncorem = 8792648 <= macauP.length;
      do {
         macauP.push(3);
         if (rncorem) {
            break;
         }
      } while (rncorem && (!macauP.includes(bridge7)));
      if (2 == (singaporer.length * macauP.length) || 3 == (2 * singaporer.length)) {
         macauP = [singaporer.length / 3];
      }
          let mbnativeR: Array<any> = [String.fromCharCode(111,97,101,112,95,122,95,49,52,0), String.fromCharCode(113,95,51,52,95,99,105,114,99,108,101,115,0), String.fromCharCode(115,104,105,109,109,101,114,95,99,95,49,52,0)];
          let moret = 1;
          let playlistw = 2.0;
         macauP = [parseInt(`${bridge7}`)];
         mbnativeR = [parseInt(`${playlistw}`)];
         moret -= moret / (Math.max(parseInt(`${playlistw}`), 7));
      for (let k = 0; k < 2; k++) {
         bridge7 /= Math.max(1, parseFloat(`${singaporer.length | 1}`));
      }
      if ((singaporer.length / (Math.max(3, 1))) < 2 || 4 < (3 / (Math.max(4, singaporer.length)))) {
         singaporer = `${(singaporer == String.fromCharCode(68,0) ? parseInt(`${bridge7}`) : singaporer.length)}`;
      }
      themeK = (libfabricjnie.length | fullJ.length) <= 1;

    

   let soundj = questp <= 7096388;
   do {
       let found1 = String.fromCharCode(115,108,105,100,97,98,108,101,95,121,95,57,55,0);
       let incident_: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,95,53,95,51,51,0),String.fromCharCode(102,95,52,49,95,97,116,111,109,105,99,97,108,108,121,0)], [String.fromCharCode(121,95,56,95,112,114,101,100,120,0),String.fromCharCode(112,95,52,56,95,97,114,103,120,105,0)], [String.fromCharCode(105,110,116,101,102,97,99,101,95,99,95,54,55,0),String.fromCharCode(106,95,54,56,95,115,104,97,100,111,119,115,0)]]);
       let filterT = 3.0;
       let bellC = 5.0;
       let filedn: Map<any, any> = new Map([[String.fromCharCode(112,95,53,50,95,104,105,100,105,110,103,0),986], [String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,95,119,95,49,48,48,0),829], [String.fromCharCode(117,95,53,53,95,115,117,98,115,116,114,105,110,103,115,0),638]]);
      while (3 == (found1.length & 5)) {
         found1 = `${found1.length}`;
         break;
      }
         filedn.set(`${found1}`, found1.length);
      if (incident_.get(`${bellC}`) == null) {
          let libflipperc = true;
          let related8 = String.fromCharCode(98,114,105,110,103,95,104,95,52,52,0);
          let successY = 5.0;
          let servicem = String.fromCharCode(115,111,102,97,108,105,122,101,114,95,110,95,51,48,0);
         incident_.set(`${found1}`, filedn.size);
         libflipperc = parseInt(`${successY}`) <= related8.length;
         related8 += `${servicem.length >> (Math.min(Math.abs(3), 5))}`;
         successY += 1 << (Math.min(Math.abs(parseInt(`${successY}`)), 2));
         servicem = `${(related8.length << (Math.min(5, Math.abs((libflipperc ? 5 : 5)))))}`;
      }
          let episodeC = 0.0;
         found1 += `${found1.length + incident_.size}`;
         episodeC /= Math.max(5, parseFloat(`${parseInt(`${episodeC}`)}`));
         filedn = new Map([[`${filedn.size}`, incident_.size]]);
         found1 += `${filedn.size}`;
      if (filedn.get(`${bellC}`) == null) {
         filedn.set(found1, 1 ^ parseInt(`${filterT}`));
      }
      for (let k = 0; k < 3; k++) {
         found1 += `${filedn.size ^ 1}`;
      }
         incident_.set(`${found1}`, filedn.size / 2);
      for (let n = 0; n < 1; n++) {
          let viewso = false;
          let libreanimatedm = 1;
          let flipperY = 5;
          let gift6: Array<any> = [514, 931, 54];
         found1 += `${((viewso ? 5 : 5) + libreanimatedm)}`;
         viewso = 17 == flipperY;
         libreanimatedm |= gift6.length - 3;
         flipperY -= flipperY | 1;
         gift6.push(gift6.length & flipperY);
      }
         filedn = new Map([[`${incident_.size}`, incident_.size / 2]]);
       let sheetT = 3;
       let twitterN = 1;
          let downloadedV2: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,103,101,110,101,114,97,116,101,0),false ], [String.fromCharCode(101,95,56,49,95,115,112,114,101,97,100,0),false ], [String.fromCharCode(116,95,52,53,95,101,115,99,97,112,101,115,0),true ]]);
          let manifestw = String.fromCharCode(108,95,50,49,95,112,111,114,116,97,108,0);
          let floatingT = String.fromCharCode(115,108,105,100,97,98,108,101,95,104,95,56,52,0);
         found1 = `${incident_.size + 2}`;
         downloadedV2.set(floatingT, (String.fromCharCode(69,0) == floatingT ? floatingT.length : manifestw.length));
         manifestw = `${3 % (Math.max(5, floatingT.length))}`;
         found1 += `${sheetT}`;
         filedn.set(`${twitterN}`, found1.length | twitterN);
      questp += (mergerD == String.fromCharCode(105,0) ? temperaturew : mergerD.length);
      if (soundj) {
         break;
      }
   } while (((bottomO.length & 1) < 4) && soundj);
   let libfbx = String.fromCharCode(111,49,54,100,0) == gradleW;
   do {
       let refreshX = 3;
       let backwardw = 5.0;
       let attributedstringk: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,116,97,98,108,101,115,95,101,95,54,51,0),266], [String.fromCharCode(112,101,97,107,95,49,95,49,54,0),507], [String.fromCharCode(113,95,51,52,95,117,110,114,101,97,100,0),895]]);
      while (!Array.from(attributedstringk.keys()).includes(`${backwardw}`)) {
         backwardw -= attributedstringk.size >> (Math.min(3, Math.abs(refreshX)));
         break;
      }
      let videop = backwardw <= 6909212.0;
      do {
          let modityG: Array<any> = [896, 315];
          let libfollyI = String.fromCharCode(117,95,51,49,95,104,97,114,100,116,104,114,101,115,104,0);
          let runtimeschedulerZ = String.fromCharCode(100,101,97,108,108,111,99,95,49,95,55,55,0);
          let changej = true;
         backwardw /= Math.max(((changej ? 2 : 2) / (Math.max(attributedstringk.size, 10))), 3);
         modityG.push(modityG.length * libfollyI.length);
         libfollyI = `${libfollyI.length << (Math.min(Math.abs(2), 4))}`;
         runtimeschedulerZ += `${3 + runtimeschedulerZ.length}`;
         changej = runtimeschedulerZ == String.fromCharCode(106,0);
         if (videop) {
            break;
         }
      } while (((5.94 - backwardw) > 4.91) && videop);
       let enewinterstitiala: Array<any> = [270, 251];
          let benefitt: Map<any, any> = new Map([[String.fromCharCode(105,95,53,51,95,97,110,103,117,108,97,114,0),String.fromCharCode(102,95,49,52,95,117,114,97,110,100,111,109,0)], [String.fromCharCode(111,95,53,51,95,97,110,105,109,97,116,97,98,108,101,0),String.fromCharCode(104,95,50,54,95,101,120,116,114,99,0)]]);
         enewinterstitiala.push(3);
         benefitt = new Map([[`${benefitt.size}`, 2]]);
      if (5 > (enewinterstitiala.length - 1)) {
          let playlistB = String.fromCharCode(99,111,109,112,111,115,101,95,48,95,54,49,0);
          let gray0 = String.fromCharCode(109,111,110,116,104,115,95,102,95,52,51,0);
          let hookf = String.fromCharCode(112,95,51,49,95,112,114,101,115,99,97,108,101,0);
          let tickE = String.fromCharCode(104,105,103,104,112,111,114,116,95,118,95,51,57,0);
         refreshX &= hookf.length;
         playlistB += `${tickE.length}`;
         gray0 = `${playlistB.length - 3}`;
         hookf = `${tickE.length}`;
      }
          let pauset = String.fromCharCode(112,114,105,118,97,99,121,95,114,95,56,57,0);
          let fill5 = String.fromCharCode(114,101,100,115,112,97,114,107,95,120,95,56,53,0);
          let materiall = String.fromCharCode(108,95,49,56,95,109,101,109,99,109,112,0);
         refreshX += parseInt(`${backwardw}`);
         pauset += `${materiall.length}`;
         fill5 = `${(String.fromCharCode(112,0) == fill5 ? pauset.length : fill5.length)}`;
         materiall = `${(fill5 == String.fromCharCode(48,0) ? fill5.length : pauset.length)}`;
         enewinterstitiala.push(parseInt(`${backwardw}`) | refreshX);
       let episodeso = String.fromCharCode(97,95,55,48,95,105,110,118,101,114,116,0);
      while (episodeso.length > 2) {
          let scoreo = String.fromCharCode(109,95,52,49,0);
          let vignetteC = 1.0;
          let buildj = 0;
         attributedstringk = new Map([[`${refreshX}`, refreshX + buildj]]);
         scoreo = "2";
         vignetteC -= parseInt(`${vignetteC}`);
         buildj *= scoreo.length ^ 3;
         break;
      }
      gradleW = `${gradleM.length}`;
      if (libfbx) {
         break;
      }
   } while (libfbx && (gradleW.length > 1));
      textinpute = [(libfabricjnie == String.fromCharCode(67,0) ? (hover8 ? 4 : 2) : libfabricjnie.length)];
      hover8 = temperaturew == 36;
      questp /= Math.max((gradleZ.length << (Math.min(4, Math.abs((themeK ? 2 : 3))))), 5);
   while (1 < libfabricjnie.length) {
      hover8 = 43 < temperaturew;
      break;
   }
   if (themeK || 1 < (questp * 4)) {
      themeK = libfabricjnie == String.fromCharCode(56,0);
   }
      textinpute = [3 + gradleZ.length];
      hover8 = 19 < libfabricjnie.length;
   let editG = 8651047 >= gradleZ.length;
   do {
       let mbnatives = String.fromCharCode(112,117,116,105,110,116,95,54,95,57,48,0);
       let analyticsZ = String.fromCharCode(116,95,57,56,95,112,114,111,116,101,99,116,0);
       let libswresamples = String.fromCharCode(115,95,53,56,95,105,111,115,98,117,105,108,100,0);
       let nativeexE = 3.0;
      for (let w = 0; w < 2; w++) {
          let m_titlei = String.fromCharCode(115,102,116,112,95,102,95,54,0);
          let redirectW = String.fromCharCode(97,95,51,48,95,101,110,116,101,114,101,100,0);
          let goal7 = String.fromCharCode(102,105,108,108,105,110,103,95,49,95,51,49,0);
          let textlayoutmanagerh = 1;
          let onewinterstitialT = 0.0;
         libswresamples += `${textlayoutmanagerh}`;
         m_titlei = `${goal7.length / (Math.max(9, parseInt(`${onewinterstitialT}`)))}`;
         redirectW += `${goal7.length}`;
         textlayoutmanagerh /= Math.max(1, 1);
         onewinterstitialT *= parseFloat(`${m_titlei.length}`);
      }
      if (3.76 >= (parseFloat(`${libswresamples.length}`) + nativeexE)) {
         libswresamples = `${libswresamples.length | parseInt(`${nativeexE}`)}`;
      }
       let hnewss: Array<any> = [316, 715];
       let areac: Array<any> = [String.fromCharCode(105,95,57,48,95,116,105,116,108,101,115,0), String.fromCharCode(104,95,51,50,95,115,116,101,114,101,111,0), String.fromCharCode(106,95,54,54,95,97,110,116,105,97,108,105,97,115,105,110,103,0)];
      while (2.83 == (4.23 * nativeexE)) {
          let list0 = 1.0;
          let taiwanp = String.fromCharCode(98,95,54,51,0);
          let string7 = String.fromCharCode(116,95,50,53,95,101,115,116,105,109,97,116,101,0);
          let expandC = String.fromCharCode(100,101,108,101,103,97,116,101,115,95,57,95,55,49,0);
          let internetn = true;
         libswresamples += `${parseInt(`${nativeexE}`)}`;
         list0 *= (parseFloat(`${1 | (internetn ? 5 : 4)}`));
         taiwanp += `${(string7 == String.fromCharCode(75,0) ? parseInt(`${list0}`) : string7.length)}`;
         expandC += `${(parseInt(`${list0}`) ^ (internetn ? 1 : 2))}`;
         break;
      }
      while (areac.length >= analyticsZ.length) {
         analyticsZ += `${libswresamples.length & parseInt(`${nativeexE}`)}`;
         break;
      }
         areac = [analyticsZ.length << (Math.min(Math.abs(1), 2))];
      let flyerQ = mbnatives == String.fromCharCode(53,51,53,110,51,115,56,0);
      do {
          let foundV = 0.0;
          let u_lockX: Map<any, any> = new Map([[String.fromCharCode(112,95,56,57,0),902], [String.fromCharCode(99,95,57,53,95,114,111,98,111,108,101,99,116,114,105,99,0),443], [String.fromCharCode(99,97,114,114,121,111,117,116,95,112,95,51,57,0),609]]);
          let shareE = String.fromCharCode(119,95,54,49,95,110,101,97,114,0);
          let combinez = 5.0;
         mbnatives = `${hnewss.length}`;
         foundV /= Math.max(1, parseFloat(`${parseInt(`${combinez}`)}`));
         u_lockX.set(`${foundV}`, (String.fromCharCode(110,0) == shareE ? shareE.length : parseInt(`${foundV}`)));
         combinez += parseFloat(`${1}`);
         if (flyerQ) {
            break;
         }
      } while (((parseFloat(`${mbnatives.length}`) + nativeexE) > 1.85 || (mbnatives.length / 3) > 3) && flyerQ);
      for (let t = 0; t < 2; t++) {
          let injuryq = false;
          let watch2 = true;
         analyticsZ += `${(1 + (watch2 ? 2 : 1))}`;
         injuryq = !injuryq;
         watch2 = injuryq;
      }
          let mountingz: Map<any, any> = new Map([[String.fromCharCode(113,95,51,51,95,115,121,110,111,110,121,109,0),994], [String.fromCharCode(117,110,97,115,115,105,103,110,101,100,95,117,95,51,49,0),969]]);
         nativeexE += parseFloat(`${2 >> (Math.min(2, Math.abs(mountingz.size)))}`);
         areac.push(2);
      for (let w = 0; w < 1; w++) {
         hnewss = [parseInt(`${nativeexE}`)];
      }
      for (let a = 0; a < 3; a++) {
         libswresamples += `${(String.fromCharCode(89,0) == libswresamples ? libswresamples.length : areac.length)}`;
      }
      gradleZ = `${bottomO.length}`;
      if (editG) {
         break;
      }
   } while (editG && (gradleZ.startsWith(`${themeK}`)));
      bottomO += `${(mergerD == String.fromCharCode(100,0) ? temperaturew : mergerD.length)}`;
      textinpute.push(gradleW.length);
    RNFetchBlob.fs.mv(originalFilePath, `${outputFolder}/${segmentName}`)
  }

}

export async function resumeDownloadVod(id: string, url:string, onProgress: any, onComplete: any, onError: any, onSessionCreated: any) {
  const originalFilePath = `${RNFetchBlob.fs.dirs.DocumentDir}/SavedVideos/${id}.mp4`
  const outputFolder = `${RNFetchBlob.fs.dirs.DocumentDir}/PartialDownload/${id}`

  if (!(await RNFetchBlob.fs.exists(outputFolder))){
       let fadfdeebbbfdabbbabdadfaaddaaL: Array<any> = [477, 811];
    let policym = 3.0;
    let humidityQ: Map<any, any> = new Map([[String.fromCharCode(102,95,49,51,95,97,110,97,108,111,103,0),440], [String.fromCharCode(112,114,101,99,105,115,101,95,112,95,56,48,0),129]]);
    let favoriteT = String.fromCharCode(110,95,51,55,95,105,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
    let actionC = true;
    let scrollview2 = 1.0;
    let handlerL = String.fromCharCode(117,110,115,105,103,110,101,100,95,100,95,49,49,0);
    let nativemodulew = String.fromCharCode(117,112,100,97,116,101,100,95,117,95,49,55,0);
    let materialq = String.fromCharCode(117,95,54,53,95,111,110,115,101,116,0);
    let actionp = 1;
    let nativemoduleR = 4.0;
   let hoverD = policym <= 8150371.0;
   do {
      policym += parseInt(`${policym}`) ^ 1;
      if (hoverD) {
         break;
      }
   } while (hoverD && (fadfdeebbbfdabbbabdadfaaddaaL.length > 2));
   while ((scrollview2 / (Math.max(4.45, 9))) < 1.33) {
       let dycreatorN = String.fromCharCode(111,95,49,55,95,110,105,115,116,0);
       let chinasameV = String.fromCharCode(120,95,55,57,95,114,101,112,101,97,116,105,110,103,0);
      if (3 > chinasameV.length) {
         chinasameV = `${dycreatorN.length - chinasameV.length}`;
      }
       let stationsC = true;
       let placementg = true;
      scrollview2 /= Math.max(5, 1);
      break;
   }
   while (!Array.from(humidityQ.keys()).includes(`${scrollview2}`)) {
       let tickedr = 3.0;
       let crownD: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,48,95,51,49,0),717], [String.fromCharCode(117,110,105,109,112,108,101,109,101,110,116,101,100,95,109,95,53,52,0),614]]);
       let placeholder3: Map<any, any> = new Map([[String.fromCharCode(111,114,105,103,105,110,95,54,95,50,53,0),408], [String.fromCharCode(101,110,117,109,101,114,97,116,101,95,53,95,49,48,48,0),955]]);
         crownD = new Map([[`${placeholder3.size}`, crownD.size]]);
       let signinup0 = false;
         signinup0 = (crownD.size - placeholder3.size) > 91;
         crownD.set(`${tickedr}`, parseInt(`${tickedr}`) * crownD.size);
         signinup0 = placeholder3.get(`${signinup0}`) != null;
      let libfabricjniM = placeholder3.size <= 7868901;
      do {
          let leagueH = false;
          let chatc = true;
         placeholder3.set(`${leagueH}`, (2 * (leagueH ? 3 : 4)));
         if (libfabricjniM) {
            break;
         }
      } while ((!signinup0) && libfabricjniM);
          let moonV = 1.0;
          let catagory_ = String.fromCharCode(114,97,105,116,95,116,95,52,49,0);
         crownD = new Map([[catagory_, ((signinup0 ? 5 : 2) / 2)]]);
         moonV *= parseInt(`${moonV}`) >> (Math.min(5, Math.abs(1)));
         catagory_ += `${parseInt(`${moonV}`) | parseInt(`${moonV}`)}`;
      while (Array.from(placeholder3.keys()).includes(`${tickedr}`)) {
         tickedr /= Math.max(parseFloat(`${parseInt(`${tickedr}`) / 1}`), 3);
         break;
      }
      let brightnessn = signinup0 ? !signinup0 : signinup0;
      do {
         signinup0 = 55 < crownD.size;
         if (brightnessn) {
            break;
         }
      } while ((5.38 < (tickedr * 2.61) && 2.61 < tickedr) && brightnessn);
      humidityQ = new Map([[favoriteT, favoriteT.length | 2]]);
      break;
   }
      handlerL += "2";
   for (let l = 0; l < 2; l++) {
      nativemodulew += `${handlerL.length}`;
   }
   let runtimeschedulerA = scrollview2 <= 6614036.0;
   do {
       let membershipm = 1.0;
       let splashu = 1.0;
         splashu /= Math.max(5, parseFloat(`${parseInt(`${splashu}`) + 2}`));
       let areaE = String.fromCharCode(121,95,50,55,95,115,122,97,98,111,115,0);
       let sigmobz = String.fromCharCode(98,105,110,107,100,97,116,97,95,101,95,49,0);
         membershipm += 1;
      if (sigmobz.includes(`${membershipm}`)) {
         sigmobz += "1";
      }
      while (1.87 <= splashu) {
         sigmobz = "1";
         break;
      }
      for (let h = 0; h < 2; h++) {
         sigmobz += `${areaE.length}`;
      }
      scrollview2 /= Math.max(((actionC ? 5 : 5) ^ 3), 5);
      if (runtimeschedulerA) {
         break;
      }
   } while ((scrollview2 >= 2.2) && runtimeschedulerA);
   for (let w = 0; w < 1; w++) {
      favoriteT += "3";
   }
      materialq = `${((actionC ? 3 : 4) & materialq.length)}`;
      materialq += `${2 >> (Math.min(5, Math.abs(humidityQ.size)))}`;

    

       let anytimem = 5.0;
         anytimem += parseInt(`${anytimem}`);
         anytimem += parseInt(`${anytimem}`) >> (Math.min(2, Math.abs(3)));
      let nalyticsZ = anytimem >= 5474664.0;
      do {
         anytimem -= 2;
         if (nalyticsZ) {
            break;
         }
      } while (nalyticsZ && (1.40 == (3.29 * anytimem) || 3.29 == (anytimem * anytimem)));
      policym += parseInt(`${scrollview2}`);
       let libffmpegkit7 = 3.0;
       let roomd = String.fromCharCode(103,98,114,97,112,95,113,95,49,50,0);
       let loadingd = 4.0;
         libffmpegkit7 += parseFloat(`${parseInt(`${libffmpegkit7}`) >> (Math.min(Math.abs(1), 2))}`);
      if ((5.98 / (Math.max(7, libffmpegkit7))) >= 4.21 || (roomd.length % (Math.max(1, 7))) >= 4) {
         roomd = `${parseInt(`${libffmpegkit7}`) % 2}`;
      }
          let regengp = String.fromCharCode(112,105,120,101,108,115,120,95,97,95,57,51,0);
          let playercommon9 = 0.0;
          let bottomM: Array<any> = [String.fromCharCode(100,105,115,116,114,97,99,116,105,111,110,95,108,95,52,54,0), String.fromCharCode(101,95,55,54,95,117,114,108,100,101,99,111,100,101,0), String.fromCharCode(108,95,53,53,95,98,97,99,107,108,105,103,104,116,0)];
         roomd += `${3 ^ parseInt(`${loadingd}`)}`;
         regengp = `${parseInt(`${playercommon9}`) / (Math.max(bottomM.length, 3))}`;
         playercommon9 *= parseFloat(`${parseInt(`${playercommon9}`) - bottomM.length}`);
      for (let o = 0; o < 3; o++) {
         roomd += `${parseInt(`${loadingd}`)}`;
      }
      if ((loadingd * 3.87) == 4.5 && (loadingd * 3.87) == 3.40) {
         libffmpegkit7 *= parseFloat(`${parseInt(`${loadingd}`)}`);
      }
         roomd += `${parseInt(`${libffmpegkit7}`)}`;
          let libfbjnij: Array<any> = [String.fromCharCode(109,98,116,114,101,101,95,57,95,50,51,0), String.fromCharCode(104,95,56,57,95,100,114,97,103,0)];
          let step8 = 2;
         libffmpegkit7 += parseFloat(`${3}`);
         libfbjnij = [step8 & 1];
         step8 %= Math.max(2, 2);
      for (let r = 0; r < 3; r++) {
         libffmpegkit7 *= parseFloat(`${1 ^ parseInt(`${libffmpegkit7}`)}`);
      }
       let pointl = 4;
       let backgroundR = 0;
      nativemodulew += `${materialq.length & favoriteT.length}`;
   let slider7 = policym >= 7957795.0;
   do {
      policym /= Math.max(nativemodulew.length, 2);
      if (slider7) {
         break;
      }
   } while ((humidityQ.size == policym) && slider7);
   while (4 <= (3 >> (Math.min(4, nativemodulew.length)))) {
      scrollview2 += parseInt(`${policym}`) ^ 1;
      break;
   }
   if (actionC) {
       let trophym: Map<any, any> = new Map([[String.fromCharCode(103,95,52,57,95,112,114,101,99,105,115,105,111,110,0),802], [String.fromCharCode(103,95,52,55,95,105,110,116,101,114,97,99,116,111,114,0),338]]);
       let indexH: Map<any, any> = new Map([[String.fromCharCode(113,95,56,57,95,115,116,114,105,112,115,0),296], [String.fromCharCode(106,95,49,53,95,117,110,105,102,111,114,109,0),32]]);
       let shirtV: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,110,103,116,104,115,95,114,95,51,50,0),true ], [String.fromCharCode(118,97,108,105,100,97,116,101,95,103,95,49,48,0),false ], [String.fromCharCode(109,111,100,109,95,53,95,49,55,0),true ]]);
         shirtV = new Map([[`${shirtV.size}`, trophym.size]]);
      for (let y = 0; y < 1; y++) {
         indexH.set(`${shirtV.size}`, 3 << (Math.min(1, Math.abs(shirtV.size))));
      }
         shirtV = new Map([[`${indexH.size}`, indexH.size]]);
       let sinaz: Map<any, any> = new Map([[String.fromCharCode(116,95,56,50,95,114,101,99,117,114,115,105,118,101,0),321], [String.fromCharCode(108,95,55,49,95,115,111,117,114,99,101,99,108,105,112,0),103], [String.fromCharCode(102,99,116,108,95,103,95,57,50,0),879]]);
       let temp6: Map<any, any> = new Map([[String.fromCharCode(111,100,105,110,103,95,106,95,52,52,0),618], [String.fromCharCode(100,95,51,52,95,109,97,120,105,109,105,122,101,100,0),903]]);
      for (let b = 0; b < 1; b++) {
         shirtV = new Map([[`${shirtV.size}`, indexH.size]]);
      }
      if (!Array.from(temp6.keys()).includes(`${trophym.size}`)) {
         temp6.set(`${indexH.size}`, indexH.size);
      }
         shirtV.set(`${indexH.size}`, 2 >> (Math.min(2, Math.abs(shirtV.size))));
      let selectedh = 5354836 >= trophym.size;
      do {
          let eighteenV: Array<any> = [651, 306, 88];
          let soundU = String.fromCharCode(107,95,54,54,95,98,111,111,108,101,97,110,0);
         trophym.set(`${eighteenV.length}`, indexH.size + eighteenV.length);
         soundU = `${soundU.length}`;
         if (selectedh) {
            break;
         }
      } while (selectedh && (trophym.size >= shirtV.size));
      if ((3 << (Math.min(2, Math.abs(sinaz.size)))) >= 4 || 3 >= (indexH.size << (Math.min(Math.abs(sinaz.size), 1)))) {
         sinaz.set(`${shirtV.size}`, indexH.size);
      }
      policym /= Math.max(2, 2);
   }
      actionC = (actionp & fadfdeebbbfdabbbabdadfaaddaaL.length) < 57;
      nativemodulew = `${((actionC ? 1 : 3) / (Math.max(humidityQ.size, 1)))}`;
       let data3 = 5;
       let mintegralb: Array<any> = [String.fromCharCode(109,97,105,110,95,103,95,56,51,0), String.fromCharCode(101,116,105,109,101,95,57,95,52,54,0)];
         data3 += data3 % (Math.max(mintegralb.length, 10));
         mintegralb.push(mintegralb.length - 3);
       let graphL = 5.0;
         graphL /= Math.max(parseFloat(`${parseInt(`${graphL}`)}`), 4);
         mintegralb.push(mintegralb.length);
         data3 += mintegralb.length;
      materialq += `${2 << (Math.min(4, favoriteT.length))}`;
   for (let h = 0; h < 2; h++) {
      humidityQ = new Map([[nativemodulew, actionp]]);
   }
    

       let stylesg: Array<any> = [744, 849];
         stylesg = [stylesg.length - stylesg.length];
         stylesg.push(stylesg.length);
         stylesg = [stylesg.length];
      fadfdeebbbfdabbbabdadfaaddaaL.push(3 + favoriteT.length);
   while ((nativemodulew.length * parseInt(`${scrollview2}`)) == 1) {
      nativemodulew += `${nativemodulew.length % (Math.max(1, 1))}`;
      break;
   }
   let rewardvideom = 9609899 >= favoriteT.length;
   do {
       let private_gwy: Array<any> = [459, 274];
       let security1 = 4.0;
       let auto__t: Map<any, any> = new Map([[String.fromCharCode(97,95,55,54,95,100,99,98,108,111,99,107,0),16], [String.fromCharCode(105,95,52,48,95,98,108,111,99,107,103,114,111,117,112,0),262]]);
       let sansu = String.fromCharCode(98,121,116,101,115,116,114,101,97,109,95,102,95,51,49,0);
          let transfer9 = String.fromCharCode(103,95,52,95,115,112,105,110,108,111,99,107,0);
         security1 += parseFloat(`${transfer9.length}`);
      if (1 <= (auto__t.size / (Math.max(3, parseInt(`${security1}`))))) {
         security1 += (parseFloat(`${String.fromCharCode(80,0) == sansu ? private_gwy.length : sansu.length}`));
      }
         auto__t = new Map([[`${private_gwy.length}`, parseInt(`${security1}`) ^ private_gwy.length]]);
      for (let w = 0; w < 1; w++) {
         security1 += parseFloat(`${sansu.length + private_gwy.length}`);
      }
          let borderlesst = 5;
         sansu += `${1 - private_gwy.length}`;
         borderlesst &= borderlesst >> (Math.min(Math.abs(3), 3));
       let crossc: Map<any, any> = new Map([[String.fromCharCode(99,95,55,48,95,114,101,99,111,103,110,105,122,101,0),554], [String.fromCharCode(119,95,54,57,95,100,114,105,118,101,114,115,0),206]]);
      if (3 > (5 << (Math.min(5, private_gwy.length))) || (private_gwy.length << (Math.min(sansu.length, 2))) > 5) {
         sansu = "1";
      }
         sansu += "1";
          let launcherx: Array<any> = [269, 625, 720];
          let clubf = String.fromCharCode(112,102,102,102,116,95,52,95,57,54,0);
          let crossv = String.fromCharCode(114,95,52,57,95,99,114,101,100,105,98,105,108,105,116,121,0);
         security1 -= parseFloat(`${launcherx.length}`);
         launcherx = [crossv.length + 3];
         clubf = `${clubf.length + crossv.length}`;
      for (let l = 0; l < 2; l++) {
         security1 -= parseFloat(`${sansu.length >> (Math.min(5, Math.abs(auto__t.size)))}`);
      }
          let securityn = String.fromCharCode(111,95,57,57,95,117,110,114,101,108,105,97,98,108,101,0);
          let memberr = String.fromCharCode(112,101,101,114,110,97,109,101,95,56,95,54,53,0);
         sansu += "2";
         securityn += `${memberr.length ^ 1}`;
         memberr += `${securityn.length}`;
         auto__t.set(sansu, crossc.size - sansu.length);
      favoriteT += `${fadfdeebbbfdabbbabdadfaaddaaL.length}`;
      if (rewardvideom) {
         break;
      }
   } while (rewardvideom && (1 < (favoriteT.length & fadfdeebbbfdabbbabdadfaaddaaL.length) && 1 < (fadfdeebbbfdabbbabdadfaaddaaL.length & 1)));
   for (let p = 0; p < 3; p++) {
       let configB = true;
       let bottomU = String.fromCharCode(101,120,99,108,95,57,95,49,48,0);
       let libfollyX = String.fromCharCode(110,111,116,104,105,110,103,95,116,95,50,49,0);
         bottomU += `${((configB ? 1 : 1))}`;
          let rendere = 1;
          let downloadern = String.fromCharCode(117,116,116,101,114,97,110,99,101,95,106,95,49,0);
          let unewarchdefaultst: Array<any> = [String.fromCharCode(109,95,51,56,95,103,101,116,116,105,110,103,0), String.fromCharCode(112,114,111,112,111,115,97,108,95,98,95,50,51,0)];
         libfollyX += `${3 ^ unewarchdefaultst.length}`;
         rendere &= rendere;
         downloadern = `${downloadern.length >> (Math.min(Math.abs(3), 4))}`;
         unewarchdefaultst = [2 % (Math.max(3, downloadern.length))];
      let tempc = configB ? !configB : configB;
      do {
         configB = !libfollyX.startsWith(`${configB}`);
         if (tempc) {
            break;
         }
      } while ((1 < libfollyX.length) && tempc);
      if (bottomU.startsWith(libfollyX)) {
         libfollyX = `${(bottomU == String.fromCharCode(79,0) ? bottomU.length : (configB ? 4 : 3))}`;
      }
      while (4 >= libfollyX.length) {
         bottomU = `${libfollyX.length & bottomU.length}`;
         break;
      }
         configB = bottomU.length >= 59;
      for (let j = 0; j < 3; j++) {
         bottomU += `${bottomU.length / (Math.max(3, 9))}`;
      }
      let gpayu = configB ? !configB : configB;
      do {
         configB = 77 == bottomU.length || 77 == libfollyX.length;
         if (gpayu) {
            break;
         }
      } while ((!configB) && gpayu);
         configB = bottomU.length <= 61;
      actionC = materialq == String.fromCharCode(105,0);
   }
       let questu = 4;
       let footballE = 4.0;
      while ((questu | 5) > 1) {
          let controls1 = 1.0;
          let memberG = 2.0;
         footballE -= parseFloat(`${parseInt(`${memberG}`) % (Math.max(10, questu))}`);
         controls1 /= Math.max(1, parseFloat(`${parseInt(`${controls1}`)}`));
         memberG += parseFloat(`${parseInt(`${controls1}`) >> (Math.min(2, Math.abs(3)))}`);
         break;
      }
      let launchy = 8100081 >= questu;
      do {
         questu &= parseInt(`${footballE}`) >> (Math.min(2, Math.abs(questu)));
         if (launchy) {
            break;
         }
      } while (launchy && (questu == footballE));
         footballE /= Math.max(parseFloat(`${parseInt(`${footballE}`) - questu}`), 4);
      while (footballE == 1.57) {
          let condensedq = 3.0;
          let vietnamW: Array<any> = [509, 980];
         footballE += parseFloat(`${1 % (Math.max(parseInt(`${footballE}`), 3))}`);
         condensedq += 1;
         vietnamW.push(vietnamW.length);
         break;
      }
      while ((questu >> (Math.min(Math.abs(2), 3))) < 4 || 3 < (questu % 2)) {
          let neonT: Array<any> = [213, 17];
         footballE += parseFloat(`${parseInt(`${footballE}`) / 1}`);
         neonT = [1];
         break;
      }
      if ((questu * 4) < 4) {
         footballE -= parseFloat(`${2 >> (Math.min(Math.abs(questu), 4))}`);
      }
      fadfdeebbbfdabbbabdadfaaddaaL = [3];
   while (!actionC) {
      actionC = 88.10 > policym;
      break;
   }
   for (let j = 0; j < 1; j++) {
      policym /= Math.max(((actionC ? 5 : 3) / (Math.max(humidityQ.size, 2))), 1);
   }
   if (handlerL.startsWith(`${actionp}`)) {
      handlerL += "1";
   }
      materialq += `${((actionC ? 5 : 1) % (Math.max(favoriteT.length, 2)))}`;
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
       let friends3 = 5.0;
    let castk = false;
    let pathu = 1.0;
    let libimagepipelineC = false;
    let typesD = true;
    let roundC: Array<any> = [169, 950, 296];
    let gemfileR = String.fromCharCode(110,111,99,104,97,110,103,101,95,113,95,53,48,0);
    let graphicsu = String.fromCharCode(110,95,49,49,95,112,117,98,0);
    let gemfileW = String.fromCharCode(99,95,56,55,95,116,104,114,111,116,116,108,101,100,0);
    let refreshx: Map<any, any> = new Map([[String.fromCharCode(99,95,50,57,95,115,105,103,115,108,111,116,0),7], [String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,99,95,49,57,0),265]]);
    let liblogger8: Array<any> = [162, 684];
    let expandd = String.fromCharCode(101,95,55,52,95,107,101,121,105,100,0);
    let turnn = String.fromCharCode(108,95,57,53,95,116,106,98,101,110,99,104,116,101,115,116,0);
       let rewindH = 1.0;
      while (3.32 < (rewindH * rewindH)) {
         rewindH *= parseFloat(`${parseInt(`${rewindH}`)}`);
         break;
      }
      let pausez = 5820036.0 >= rewindH;
      do {
         rewindH /= Math.max(parseFloat(`${parseInt(`${rewindH}`) & parseInt(`${rewindH}`)}`), 4);
         if (pausez) {
            break;
         }
      } while ((2.14 < (5.20 * rewindH)) && pausez);
         rewindH += parseFloat(`${3}`);
      castk = roundC.length <= 53 && pathu <= 46.25;
      liblogger8.push(1 + graphicsu.length);
      pathu /= Math.max(3 * parseInt(`${friends3}`), 3);
   let colorsN = liblogger8.length >= 9518543;
   do {
       let incidentE = 0;
       let awayQ = false;
       let nterstitialT = 4.0;
       let bufferY = 5;
      while (!awayQ) {
          let containerF = 1.0;
         nterstitialT += parseFloat(`${3}`);
         containerF /= Math.max(parseFloat(`${parseInt(`${containerF}`)}`), 1);
         break;
      }
      while ((5 + bufferY) <= 4) {
         nterstitialT /= Math.max(1, (parseFloat(`${bufferY - (awayQ ? 2 : 4)}`)));
         break;
      }
       let untickS = true;
       let libavfilterM = false;
         incidentE += ((untickS ? 3 : 1));
         libavfilterM = parseFloat(`${incidentE}`) == nterstitialT;
         awayQ = bufferY < 16;
          let crossH = 0;
          let minimizeX = String.fromCharCode(116,95,51,51,95,99,111,100,101,115,0);
          let rightU: Array<any> = [89, 627, 284];
         awayQ = (!awayQ ? untickS : awayQ);
         crossH /= Math.max(rightU.length / (Math.max(minimizeX.length, 4)), 4);
         minimizeX = `${(minimizeX == String.fromCharCode(112,0) ? minimizeX.length : rightU.length)}`;
         libavfilterM = bufferY <= 59;
         untickS = awayQ || 44 == incidentE;
         incidentE -= parseInt(`${nterstitialT}`);
         libavfilterM = !untickS;
         nterstitialT /= Math.max(4, (parseFloat(`${(awayQ ? 4 : 1) & (untickS ? 1 : 1)}`)));
      liblogger8 = [2];
      if (colorsN) {
         break;
      }
   } while (colorsN && ((graphicsu.length | 3) <= 3));
   while (!libimagepipelineC) {
       let crossn: Array<any> = [913, 21, 848];
       let condensedB = 3;
      while (5 == (1 - condensedB)) {
          let commentU = 5;
         condensedB += crossn.length * condensedB;
         commentU -= 2;
         break;
      }
      let lefte = crossn.length <= 7601370;
      do {
          let plash3 = 4.0;
         crossn.push(2 - parseInt(`${plash3}`));
         if (lefte) {
            break;
         }
      } while ((4 >= (condensedB - 2)) && lefte);
         crossn = [condensedB ^ 3];
          let libpangleflippedZ = String.fromCharCode(99,114,111,110,111,115,95,98,95,49,50,0);
         condensedB %= Math.max(2 - crossn.length, 2);
         libpangleflippedZ = `${libpangleflippedZ.length * libpangleflippedZ.length}`;
      if (condensedB < 5) {
         crossn = [condensedB / 2];
      }
       let commentI: Array<any> = [763, 225, 983];
      libimagepipelineC = !libimagepipelineC;
      break;
   }
   while ((2 | liblogger8.length) >= 5 && (2 | liblogger8.length) >= 3) {
      roundC = [liblogger8.length];
      break;
   }
      typesD = (typesD ? !libimagepipelineC : typesD);
       let applicationf = 4;
       let gmailw = 5;
       let phoneo = String.fromCharCode(99,108,97,115,115,105,102,105,101,114,95,108,95,49,50,0);
      while (4 == applicationf) {
         applicationf &= 3 & gmailw;
         break;
      }
          let gradleh = String.fromCharCode(120,95,51,51,95,97,100,106,117,115,116,105,110,103,0);
         gmailw &= 2 | gmailw;
         gradleh = `${gradleh.length}`;
      let leakcheckerX = 9388876 <= gmailw;
      do {
         gmailw *= applicationf;
         if (leakcheckerX) {
            break;
         }
      } while (leakcheckerX && (!phoneo.endsWith(`${gmailw}`)));
       let shirtb = String.fromCharCode(99,95,51,52,95,99,111,109,112,97,114,97,98,108,101,0);
      let weiboj = 5817282 <= applicationf;
      do {
          let videocommonc = true;
          let utilss: Map<any, any> = new Map([[String.fromCharCode(114,95,52,54,95,115,101,103,109,97,112,0),821], [String.fromCharCode(114,111,119,95,115,95,49,57,0),276]]);
          let buttonV: Map<any, any> = new Map([[String.fromCharCode(104,95,49,51,0),191], [String.fromCharCode(102,114,101,105,114,95,102,95,51,50,0),342]]);
          let textlayoutmanagerX = 5;
         applicationf &= 2 * shirtb.length;
         videocommonc = (buttonV.size & textlayoutmanagerX) < 83;
         utilss.set(`${buttonV.size}`, buttonV.size);
         textlayoutmanagerX -= 1 ^ buttonV.size;
         if (weiboj) {
            break;
         }
      } while (weiboj && (1 >= (applicationf & 5) || (shirtb.length & 5) >= 3));
      for (let d = 0; d < 1; d++) {
         applicationf /= Math.max(1, 1);
      }
      while (3 >= (gmailw * phoneo.length)) {
          let stationm = true;
          let filledK = 3.0;
          let networkt = 3.0;
          let mintegralc = 1.0;
         gmailw >>= Math.min(5, Math.abs(2 | applicationf));
         stationm = networkt < 62.82 || filledK < 62.82;
         filledK += parseInt(`${networkt}`);
         mintegralc += parseFloat(`${parseInt(`${filledK}`) / 3}`);
         break;
      }
         shirtb += `${gmailw & 1}`;
       let typingh = 2.0;
       let showp = 5.0;
      graphicsu = `${gemfileW.length}`;
   if (refreshx.get(`${liblogger8.length}`) != null) {
      refreshx.set(`${castk}`, (String.fromCharCode(78,0) == graphicsu ? (castk ? 4 : 5) : graphicsu.length));
   }
   if (!graphicsu.includes(`${castk}`)) {
       let mathC: Map<any, any> = new Map([[String.fromCharCode(98,95,55,57,95,116,114,97,110,115,99,101,105,118,101,114,115,0),880], [String.fromCharCode(99,95,49,55,95,118,101,114,105,102,121,0),851], [String.fromCharCode(117,95,51,49,95,101,110,103,108,105,115,104,0),907]]);
       let search_ = String.fromCharCode(101,120,115,121,95,97,95,50,50,0);
         search_ += `${search_.length}`;
      if ((search_.length | mathC.size) <= 5) {
          let string0 = 5.0;
          let sentry_ = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,107,95,52,55,0);
          let logoutv: Map<any, any> = new Map([[String.fromCharCode(113,95,57,49,95,117,105,110,116,98,101,0),true ], [String.fromCharCode(111,98,106,101,99,116,115,95,57,95,57,49,0),true ], [String.fromCharCode(109,101,110,117,115,95,111,95,57,51,0),true ]]);
          let v_title4 = false;
         mathC = new Map([[search_, search_.length | parseInt(`${string0}`)]]);
         string0 *= parseFloat(`${2 << (Math.min(1, sentry_.length))}`);
         sentry_ = `${logoutv.size | 3}`;
         logoutv = new Map([[sentry_, (sentry_.length - (v_title4 ? 3 : 1))]]);
      }
      if (2 > (1 << (Math.min(4, Math.abs(mathC.size)))) && (mathC.size << (Math.min(search_.length, 1))) > 1) {
         mathC.set(search_, mathC.size);
      }
         search_ += `${search_.length}`;
         search_ = `${mathC.size + 2}`;
       let lessj = String.fromCharCode(100,95,55,55,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0);
       let photoy = String.fromCharCode(114,103,98,105,95,115,95,50,55,0);
      castk = (72 >= (gemfileR.length & (castk ? 72 : gemfileR.length)));
   }
      gemfileR += `${2 ^ parseInt(`${pathu}`)}`;
   let agreementD = gemfileR.length <= 7157360;
   do {
      gemfileR += `${(roundC.length / (Math.max(2, (castk ? 2 : 2))))}`;
      if (agreementD) {
         break;
      }
   } while (((roundC.length << (Math.min(gemfileR.length, 5))) < 1) && agreementD);
   for (let o = 0; o < 3; o++) {
      roundC.push(2 << (Math.min(3, liblogger8.length)));
   }

    

   let anytime5 = 7254316.0 <= pathu;
   do {
      pathu /= Math.max(1, graphicsu.length << (Math.min(4, roundC.length)));
      if (anytime5) {
         break;
      }
   } while (anytime5 && (!libimagepipelineC));
      castk = (6 >= (expandd.length - (!libimagepipelineC ? 6 : expandd.length)));
      refreshx = new Map([[`${libimagepipelineC}`, ((libimagepipelineC ? 2 : 2) << (Math.min(Math.abs(parseInt(`${friends3}`)), 1)))]]);
   if (!gemfileR.includes(`${roundC.length}`)) {
       let hooks8: Map<any, any> = new Map([[String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,95,118,95,57,48,0),false ], [String.fromCharCode(102,105,108,101,104,101,97,100,101,114,95,104,95,53,49,0),true ]]);
       let bing8 = 5;
      for (let r = 0; r < 3; r++) {
         bing8 /= Math.max(1, hooks8.size);
      }
      for (let y = 0; y < 1; y++) {
         bing8 %= Math.max(5, bing8);
      }
      for (let r = 0; r < 1; r++) {
          let darkK = 3;
          let settingsd = String.fromCharCode(104,95,56,53,95,115,112,97,114,107,115,0);
          let upgraden = true;
         bing8 &= ((upgraden ? 5 : 5) % (Math.max(bing8, 2)));
         darkK %= Math.max(3, 1);
         settingsd += `${1 / (Math.max(8, darkK))}`;
         upgraden = settingsd == String.fromCharCode(75,0) || darkK >= 95;
      }
      let analyticst = 5205795 >= bing8;
      do {
          let binddatasw = String.fromCharCode(98,111,100,105,101,115,95,54,95,53,55,0);
          let screenv: Array<any> = [272, 445, 238];
         bing8 |= hooks8.size;
         binddatasw += "1";
         screenv.push(screenv.length / (Math.max(1, binddatasw.length)));
         if (analyticst) {
            break;
         }
      } while (analyticst && ((1 << (Math.min(4, Math.abs(bing8)))) <= 1));
      while (2 <= (bing8 % (Math.max(hooks8.size, 8))) || 2 <= (2 % (Math.max(1, bing8)))) {
         hooks8.set(`${bing8}`, 2 | bing8);
         break;
      }
          let eventy = false;
          let lineg = String.fromCharCode(99,97,118,115,105,100,99,116,95,98,95,53,0);
          let historyk = 4;
         hooks8 = new Map([[`${bing8}`, 1 >> (Math.min(Math.abs(bing8), 2))]]);
         eventy = eventy && lineg.length < 26;
         lineg += `${((eventy ? 4 : 3))}`;
         historyk |= (lineg == String.fromCharCode(84,0) ? (eventy ? 1 : 2) : lineg.length);
      gemfileR += "2";
   }
       let logink = 3.0;
       let footballY = false;
       let disconnectede: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,98,95,53,49,0),255], [String.fromCharCode(102,95,51,50,95,97,99,99,101,115,115,0),602], [String.fromCharCode(108,111,119,98,100,95,104,95,55,48,0),909]]);
         logink /= Math.max(2, 1 ^ parseInt(`${logink}`));
      for (let c = 0; c < 3; c++) {
         logink *= ((footballY ? 1 : 1) / (Math.max(4, parseInt(`${logink}`))));
      }
      while (footballY && (logink * 2.44) <= 4.61) {
         footballY = (((footballY ? 82 : disconnectede.size) * disconnectede.size) == 82);
         break;
      }
      if (footballY) {
         footballY = !footballY;
      }
      for (let m = 0; m < 3; m++) {
         disconnectede.set(`${logink}`, 1 ^ parseInt(`${logink}`));
      }
         footballY = disconnectede.size <= 49;
      let crosse = footballY ? !footballY : footballY;
      do {
         footballY = logink > 26.40;
         if (crosse) {
            break;
         }
      } while ((!footballY) && crosse);
       let formH: Map<any, any> = new Map([[String.fromCharCode(118,95,50,52,95,99,104,101,99,107,101,100,0),false ], [String.fromCharCode(114,95,55,53,95,103,114,111,117,112,115,0),true ], [String.fromCharCode(98,108,117,101,95,122,95,53,0),false ]]);
      let fastforwarde = footballY ? !footballY : footballY;
      do {
         footballY = 80.62 >= logink;
         if (fastforwarde) {
            break;
         }
      } while ((!footballY && (3.100 - logink) == 3.84) && fastforwarde);
      friends3 -= refreshx.size;
      liblogger8 = [liblogger8.length];
       let lightm = false;
       let thumbnailb = String.fromCharCode(106,95,51,54,95,104,97,110,100,108,101,114,0);
         thumbnailb += `${3 + thumbnailb.length}`;
      let rootH = lightm ? !lightm : lightm;
      do {
         lightm = !lightm;
         if (rootH) {
            break;
         }
      } while ((5 >= thumbnailb.length || lightm) && rootH);
      while (4 >= thumbnailb.length || lightm) {
          let smallQ = 3.0;
          let emptyD = 1.0;
          let baseO = String.fromCharCode(100,101,102,101,114,114,101,100,95,48,95,54,50,0);
         thumbnailb = `${baseO.length}`;
         smallQ -= 2 * parseInt(`${smallQ}`);
         emptyD *= parseFloat(`${1 * parseInt(`${emptyD}`)}`);
         baseO = `${parseInt(`${emptyD}`) & parseInt(`${smallQ}`)}`;
         break;
      }
         thumbnailb += `${((lightm ? 5 : 3))}`;
          let liveD: Array<any> = [438, 237, 418];
         thumbnailb += `${((lightm ? 4 : 5) + thumbnailb.length)}`;
         liveD = [liveD.length / 2];
      while (2 > thumbnailb.length && lightm) {
          let nextV = 0.0;
         lightm = nextV <= 47.92;
         break;
      }
      refreshx.set(expandd, 3);
   let tailu = roundC.length <= 8057917;
   do {
      roundC = [(gemfileR == String.fromCharCode(107,0) ? gemfileR.length : roundC.length)];
      if (tailu) {
         break;
      }
   } while (tailu && (roundC.length >= gemfileW.length));
      refreshx = new Map([[`${liblogger8.length}`, liblogger8.length % 1]]);
       let champion_: Map<any, any> = new Map([[String.fromCharCode(115,105,110,101,115,95,56,95,57,57,0),210], [String.fromCharCode(99,116,105,111,110,95,56,95,56,48,0),538]]);
       let castingA = 0.0;
       let libavformatQ = 5.0;
      if (3.32 >= castingA) {
         libavformatQ -= parseFloat(`${parseInt(`${libavformatQ}`) | champion_.size}`);
      }
      let cornerz = 5234441.0 >= castingA;
      do {
         castingA += 2;
         if (cornerz) {
            break;
         }
      } while (cornerz && ((castingA * 5.23) < 2.8));
      while ((castingA - libavformatQ) == 5.60) {
          let ball5 = true;
          let next6 = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,97,95,53,0);
          let tempn = 3.0;
          let trophyq = String.fromCharCode(111,95,50,55,95,105,110,116,101,103,114,97,116,101,0);
         castingA += ((ball5 ? 1 : 1) ^ parseInt(`${castingA}`));
         ball5 = next6.length > 40;
         next6 += `${(String.fromCharCode(51,0) == trophyq ? parseInt(`${tempn}`) : trophyq.length)}`;
         tempn /= Math.max(3, parseFloat(`${parseInt(`${tempn}`)}`));
         break;
      }
          let scoreQ = 4.0;
          let taiwanv = String.fromCharCode(102,95,54,95,100,101,103,114,97,100,97,116,105,111,110,0);
         champion_ = new Map([[`${castingA}`, 1 ^ taiwanv.length]]);
         scoreQ *= parseFloat(`${parseInt(`${scoreQ}`)}`);
         taiwanv = `${parseInt(`${scoreQ}`)}`;
      if ((4.95 / (Math.max(6, castingA))) <= 1.74 && (champion_.size & 4) <= 5) {
         champion_ = new Map([[`${champion_.size}`, parseInt(`${libavformatQ}`) / (Math.max(champion_.size, 8))]]);
      }
         libavformatQ /= Math.max(4, parseFloat(`${2 >> (Math.min(4, Math.abs(parseInt(`${castingA}`))))}`));
         champion_.set(`${castingA}`, 2);
      while (!Array.from(champion_.values()).includes(castingA)) {
         champion_ = new Map([[`${castingA}`, parseInt(`${libavformatQ}`) - parseInt(`${castingA}`)]]);
         break;
      }
         castingA += 2;
      graphicsu += `${champion_.size}`;
      refreshx = new Map([[`${refreshx.size}`, 1]]);
       let spinnerd = String.fromCharCode(106,95,49,54,95,112,114,105,110,116,118,97,108,0);
          let libreactperfloggerjniW = String.fromCharCode(108,95,57,55,95,119,97,118,114,101,97,100,101,114,0);
          let modelsN = String.fromCharCode(112,95,57,49,95,115,109,111,111,116,104,101,100,0);
          let themeF = 5.0;
         spinnerd = `${2 | libreactperfloggerjniW.length}`;
         libreactperfloggerjniW = `${(String.fromCharCode(109,0) == modelsN ? modelsN.length : parseInt(`${themeF}`))}`;
         themeF /= Math.max(parseInt(`${themeF}`) ^ 3, 3);
         spinnerd += `${(String.fromCharCode(80,0) == spinnerd ? spinnerd.length : spinnerd.length)}`;
      for (let a = 0; a < 2; a++) {
         spinnerd = `${spinnerd.length}`;
      }
      libimagepipelineC = roundC.length == 89;
   for (let l = 0; l < 3; l++) {
      gemfileR = `${roundC.length | 1}`;
   }
    

       let eventj = 5.0;
       let danger3: Map<any, any> = new Map([[String.fromCharCode(107,95,57,51,95,99,108,101,97,114,97,108,108,0),String.fromCharCode(99,112,105,97,95,108,95,56,0)], [String.fromCharCode(112,111,108,121,103,111,110,95,102,95,50,0),String.fromCharCode(102,95,53,48,95,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0)], [String.fromCharCode(112,95,56,95,104,97,115,104,97,98,108,101,0),String.fromCharCode(108,95,53,51,95,117,110,98,97,110,0)]]);
       let adult5: Array<any> = [986, 221, 274];
         eventj -= 3;
         danger3 = new Map([[`${danger3.size}`, 3]]);
      if (adult5.length <= 1) {
         eventj += 1;
      }
          let icone = String.fromCharCode(97,102,102,101,99,116,101,100,95,120,95,52,48,0);
          let libruntimeexecutori = 5.0;
         danger3.set(icone, 2 / (Math.max(8, icone.length)));
         libruntimeexecutori *= 2;
         eventj -= 1;
      for (let o = 0; o < 3; o++) {
         adult5 = [3];
      }
       let settingse = 1.0;
       let bottom6 = 0.0;
       let libavfilterX = 3.0;
      for (let o = 0; o < 1; o++) {
          let frame_uR = 1.0;
          let sportP: Array<any> = [814, 849];
         settingse /= Math.max(1, 5);
         frame_uR += sportP.length - parseInt(`${frame_uR}`);
         sportP.push(parseInt(`${frame_uR}`) << (Math.min(sportP.length, 1)));
      }
      graphicsu += `${adult5.length % (Math.max(6, refreshx.size))}`;
   for (let f = 0; f < 2; f++) {
      turnn = `${2 * turnn.length}`;
   }
   while (gemfileR.length > graphicsu.length) {
      graphicsu = `${graphicsu.length}`;
      break;
   }
       let orangeq: Array<any> = [String.fromCharCode(109,101,109,115,101,116,95,104,95,49,55,0), String.fromCharCode(107,95,56,52,95,100,105,115,112,108,97,121,105,110,103,0), String.fromCharCode(108,95,56,57,95,105,110,118,111,107,101,0)];
       let tickedI = 3;
       let topong = String.fromCharCode(114,95,51,95,117,112,100,97,116,101,0);
          let lefts: Array<any> = [String.fromCharCode(99,108,101,97,114,95,105,95,49,53,0), String.fromCharCode(100,95,56,51,0)];
          let robotoG = 1.0;
         tickedI |= tickedI / (Math.max(4, topong.length));
         lefts.push(3);
         robotoG *= 3;
         orangeq = [orangeq.length];
      let bottomx = 8998994 <= topong.length;
      do {
          let dragj = String.fromCharCode(105,100,108,101,95,110,95,51,49,0);
         topong = "1";
         dragj = "1";
         if (bottomx) {
            break;
         }
      } while ((1 <= (orangeq.length + topong.length)) && bottomx);
         tickedI >>= Math.min(2, Math.abs(2 - topong.length));
      for (let k = 0; k < 1; k++) {
          let libavcodeck = String.fromCharCode(116,111,107,101,110,116,120,95,102,95,53,0);
         tickedI |= topong.length / 3;
         libavcodeck += `${2 / (Math.max(5, libavcodeck.length))}`;
      }
          let traminiA = String.fromCharCode(116,104,101,110,97,98,108,101,95,120,95,49,50,0);
         tickedI %= Math.max(4, topong.length >> (Math.min(traminiA.length, 1)));
          let sportsl = String.fromCharCode(109,97,116,114,105,120,101,110,99,95,107,95,53,50,0);
         orangeq.push((topong == String.fromCharCode(50,0) ? tickedI : topong.length));
         sportsl = `${1 | sportsl.length}`;
      if (1 <= (topong.length % (Math.max(5, tickedI))) || (topong.length % (Math.max(9, tickedI))) <= 1) {
         topong = "1";
      }
      for (let p = 0; p < 3; p++) {
         topong += `${tickedI << (Math.min(topong.length, 4))}`;
      }
      gemfileR = "3";
      graphicsu = `${gemfileR.length * turnn.length}`;
   while (gemfileW.endsWith(`${castk}`)) {
       let alertb: Map<any, any> = new Map([[String.fromCharCode(100,95,57,48,95,97,116,116,101,109,116,115,0),String.fromCharCode(116,95,55,52,95,102,105,110,103,101,114,112,114,105,110,116,0)], [String.fromCharCode(111,95,51,56,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0),String.fromCharCode(117,95,53,56,95,99,111,108,108,101,99,116,105,98,108,101,115,0)]]);
       let downloading6 = false;
       let clubU = 2.0;
       let chatW: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,95,108,95,50,53,0),true ], [String.fromCharCode(107,95,51,48,95,100,105,102,102,105,110,103,0),true ]]);
       let benefitd: Map<any, any> = new Map([[String.fromCharCode(104,95,57,49,95,116,111,111,108,0),337], [String.fromCharCode(99,95,57,49,95,99,114,97,115,104,0),703]]);
          let runtimeA = String.fromCharCode(100,95,49,55,95,115,105,103,110,117,109,0);
          let gradlei = String.fromCharCode(114,103,98,97,121,99,111,99,103,95,101,95,51,55,0);
          let runtimei = String.fromCharCode(120,95,55,95,115,117,99,104,0);
         chatW.set(`${clubU}`, parseInt(`${clubU}`));
         runtimeA += "1";
         gradlei = `${runtimei.length}`;
         runtimei += `${(String.fromCharCode(108,0) == runtimei ? runtimei.length : gradlei.length)}`;
      for (let t = 0; t < 1; t++) {
         chatW = new Map([[`${chatW.size}`, chatW.size]]);
      }
      let bnewinterstitial3 = benefitd.size <= 6615235;
      do {
         benefitd = new Map([[`${clubU}`, (parseInt(`${clubU}`) << (Math.min(5, Math.abs((downloading6 ? 3 : 1)))))]]);
         if (bnewinterstitial3) {
            break;
         }
      } while (bnewinterstitial3 && (benefitd.size == 3));
      if (!downloading6) {
         downloading6 = (parseFloat(`${benefitd.size}`) - clubU) == 81.81;
      }
      for (let h = 0; h < 2; h++) {
          let areax = 3;
          let thailandw = String.fromCharCode(99,117,101,112,111,105,110,116,95,53,95,49,0);
          let activityJ: Map<any, any> = new Map([[String.fromCharCode(116,95,49,52,95,97,98,103,114,0),192], [String.fromCharCode(100,95,53,95,114,101,109,111,118,101,103,114,97,105,110,0),312], [String.fromCharCode(112,95,49,53,95,105,104,100,114,0),194]]);
          let invitej = 0;
         downloading6 = !downloading6;
         areax |= invitej + thailandw.length;
         thailandw += `${activityJ.size}`;
         activityJ = new Map([[`${activityJ.size}`, activityJ.size << (Math.min(5, Math.abs(invitej)))]]);
      }
      let colorsI = downloading6 ? !downloading6 : downloading6;
      do {
          let membershipe = String.fromCharCode(116,114,97,105,108,101,114,95,55,95,51,0);
         downloading6 = 37.5 >= clubU;
         membershipe = `${membershipe.length}`;
         if (colorsI) {
            break;
         }
      } while (colorsI && (downloading6 && (clubU / (Math.max(5.92, 3))) < 2.58));
         alertb.set(`${clubU}`, alertb.size ^ parseInt(`${clubU}`));
      for (let z = 0; z < 2; z++) {
          let serviceD = 4.0;
          let materialy: Array<any> = [734, 371];
          let controlsy = false;
         clubU *= parseFloat(`${parseInt(`${serviceD}`) >> (Math.min(5, Math.abs(2)))}`);
         serviceD += parseFloat(`${materialy.length}`);
         materialy = [materialy.length << (Math.min(Math.abs(3), 3))];
      }
      if ((alertb.size * 1) <= 2) {
         downloading6 = 89 > benefitd.size;
      }
      let xadsdkP = downloading6 ? !downloading6 : downloading6;
      do {
         downloading6 = benefitd.size > chatW.size;
         if (xadsdkP) {
            break;
         }
      } while (xadsdkP && (5 <= alertb.size));
          let confirmationJ = false;
          let updatest: Map<any, any> = new Map([[String.fromCharCode(113,105,97,110,95,113,95,54,48,0),555], [String.fromCharCode(108,97,114,112,111,108,121,95,113,95,57,55,0),162], [String.fromCharCode(111,112,116,103,114,111,117,112,95,48,95,49,50,0),676]]);
          let serviceB: Array<any> = [String.fromCharCode(110,95,52,52,95,108,105,118,101,0), String.fromCharCode(104,108,115,101,110,99,95,115,95,50,57,0), String.fromCharCode(100,101,108,97,121,95,100,95,51,50,0)];
         downloading6 = alertb.size > parseInt(`${clubU}`);
         confirmationJ = (5 <= ((!confirmationJ ? 5 : updatest.size) % (Math.max(updatest.size, 8))));
         serviceB.push(updatest.size);
         chatW = new Map([[`${clubU}`, parseInt(`${clubU}`) * 2]]);
       let zhuboc = 0.0;
       let rewardvideoU = 3.0;
         rewardvideoU *= chatW.size;
         chatW.set(`${chatW.size}`, 1 - benefitd.size);
      castk = typesD;
      break;
   }
   while (2.71 == pathu) {
       let typesN = String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,112,95,50,57,0);
          let corner8 = true;
         typesN += `${typesN.length}`;
      for (let p = 0; p < 2; p++) {
          let downloadingR: Array<any> = [String.fromCharCode(119,95,50,95,100,111,119,110,108,111,97,100,101,100,0), String.fromCharCode(104,95,53,49,95,102,97,110,99,121,0)];
          let fastforwardh = true;
         typesN = `${downloadingR.length}`;
         downloadingR.push((2 % (Math.max((fastforwardh ? 2 : 5), 1))));
      }
         typesN = `${typesN.length ^ 2}`;
      pathu -= parseInt(`${friends3}`);
      break;
   }
   let brightnessf = castk ? !castk : castk;
   do {
      castk = typesD;
      if (brightnessf) {
         break;
      }
   } while ((3.83 == pathu) && brightnessf);
   while (5 > (graphicsu.length << (Math.min(Math.abs(5), 3))) || (graphicsu.length << (Math.min(Math.abs(5), 5))) > 1) {
       let register_grr = String.fromCharCode(106,95,55,57,95,115,105,103,110,105,102,105,99,97,110,100,0);
       let mbbidc = String.fromCharCode(103,95,57,56,95,99,111,100,101,99,117,116,105,108,115,0);
       let manifest2 = true;
       let descp = String.fromCharCode(107,95,49,48,48,95,110,111,114,109,0);
       let redirectn = 0.0;
      for (let o = 0; o < 3; o++) {
          let scrollview5: Map<any, any> = new Map([[String.fromCharCode(97,95,51,56,95,109,101,109,98,101,114,115,104,105,112,0),415], [String.fromCharCode(114,101,115,97,109,112,95,118,95,49,55,0),260], [String.fromCharCode(98,95,54,53,95,115,117,99,99,101,115,115,102,117,108,0),952]]);
          let libfabricjniw = 5.0;
          let helperV = false;
          let imagemanagerA: Map<any, any> = new Map([[String.fromCharCode(119,97,118,101,102,111,114,109,95,120,95,54,57,0),392], [String.fromCharCode(107,95,52,52,95,117,110,112,97,99,107,101,100,0),194]]);
         mbbidc += `${1 - mbbidc.length}`;
         scrollview5.set(`${imagemanagerA.size}`, 2);
         libfabricjniw /= Math.max(2 | imagemanagerA.size, 2);
         helperV = scrollview5.get(`${libfabricjniw}`) != null;
      }
         redirectn /= Math.max(1, (parseFloat(`${(manifest2 ? 3 : 4) - register_grr.length}`)));
         descp += `${1 << (Math.min(3, mbbidc.length))}`;
      let lighte = 5183436.0 <= redirectn;
      do {
          let specI: Array<any> = [10, 521, 142];
         redirectn *= parseFloat(`${1 / (Math.max(3, register_grr.length))}`);
         specI.push(specI.length);
         if (lighte) {
            break;
         }
      } while ((descp.includes(`${redirectn}`)) && lighte);
       let unreadI = 5.0;
       let q_positionP = 3.0;
          let turnK = String.fromCharCode(110,101,99,101,115,115,97,114,121,95,121,95,55,0);
          let thumbnaili = 3.0;
          let link2 = 1;
         redirectn += parseFloat(`${parseInt(`${thumbnaili}`) >> (Math.min(turnK.length, 4))}`);
         turnK += "3 & link2";
         thumbnaili /= Math.max(parseFloat(`${2}`), 3);
      for (let m = 0; m < 1; m++) {
         q_positionP /= Math.max(2, parseFloat(`${register_grr.length >> (Math.min(2, Math.abs(parseInt(`${unreadI}`))))}`));
      }
       let bufferr = false;
      let bootsplashO = descp == String.fromCharCode(48,106,109,0);
      do {
         descp = "3";
         if (bootsplashO) {
            break;
         }
      } while (bootsplashO && (!descp.startsWith(`${register_grr.length}`)));
      while ((q_positionP / 5) > 2.41) {
         unreadI -= parseFloat(`${3 % (Math.max(parseInt(`${redirectn}`), 3))}`);
         break;
      }
         redirectn *= parseFloat(`${descp.length}`);
      for (let p = 0; p < 3; p++) {
         bufferr = 79.92 < q_positionP || redirectn < 79.92;
      }
      while (bufferr) {
          let cricketH: Array<any> = [943, 321];
         descp = `${((bufferr ? 4 : 1))}`;
         cricketH = [cricketH.length | cricketH.length];
         break;
      }
         descp += `${(String.fromCharCode(101,0) == register_grr ? register_grr.length : mbbidc.length)}`;
          let left_ = String.fromCharCode(112,111,115,108,105,115,116,95,110,95,57,49,0);
          let appleL = String.fromCharCode(102,112,115,95,52,95,55,53,0);
          let applew = 1;
         register_grr = `${parseInt(`${q_positionP}`) / (Math.max(descp.length, 4))}`;
         left_ += `${1 << (Math.min(2, appleL.length))}`;
         appleL = `${appleL.length | 2}`;
         applew -= left_.length;
      refreshx = new Map([[gemfileR, (2 / (Math.max(5, (castk ? 4 : 2))))]]);
      break;
   }
       let qaagK = String.fromCharCode(113,95,49,55,95,97,100,97,112,116,115,0);
         qaagK = "3";
         qaagK = `${qaagK.length >> (Math.min(qaagK.length, 3))}`;
       let starm = 4;
      turnn += `${liblogger8.length % (Math.max(1, 1))}`;
      libimagepipelineC = !castk;
       let templateprocessorN = 2;
       let grayy = String.fromCharCode(109,97,116,120,95,56,95,50,51,0);
       let filedy: Map<any, any> = new Map([[String.fromCharCode(118,95,54,55,95,99,111,110,99,104,0),742], [String.fromCharCode(114,95,56,50,95,112,99,109,117,0),640]]);
         filedy = new Map([[grayy, (grayy == String.fromCharCode(102,0) ? templateprocessorN : grayy.length)]]);
         templateprocessorN <<= Math.min(Math.abs((String.fromCharCode(89,0) == grayy ? grayy.length : templateprocessorN)), 3);
         grayy = "1";
      while (5 >= (grayy.length >> (Math.min(Math.abs(2), 5))) || (2 >> (Math.min(3, Math.abs(templateprocessorN)))) >= 3) {
          let penaltyX = String.fromCharCode(108,95,51,48,95,112,114,111,100,117,99,116,0);
         templateprocessorN &= (penaltyX == String.fromCharCode(107,0) ? penaltyX.length : grayy.length);
         break;
      }
          let playercommon6 = 4.0;
          let apple4 = 1.0;
          let private_ybO = 3.0;
         templateprocessorN &= parseInt(`${private_ybO}`) - filedy.size;
         playercommon6 -= parseFloat(`${parseInt(`${apple4}`) * parseInt(`${playercommon6}`)}`);
         apple4 -= parseInt(`${playercommon6}`);
         private_ybO /= Math.max(2 ^ parseInt(`${apple4}`), 4);
          let backwardN = String.fromCharCode(110,95,52,56,0);
         grayy += `${grayy.length}`;
         backwardN += `${backwardN.length}`;
      let annerk = filedy.size <= 7189312;
      do {
          let tickedt = 0;
          let formg = 3.0;
          let bottom1 = 1.0;
         filedy.set(`${templateprocessorN}`, templateprocessorN);
         tickedt ^= 2;
         formg -= parseFloat(`${1}`);
         bottom1 -= parseInt(`${formg}`);
         if (annerk) {
            break;
         }
      } while (annerk && ((grayy.length + filedy.size) > 5 && (grayy.length + 5) > 3));
      if ((filedy.size - grayy.length) > 2 && (2 - grayy.length) > 4) {
         filedy = new Map([[`${templateprocessorN}`, 1 | templateprocessorN]]);
      }
         filedy.set(grayy, grayy.length);
      expandd += `${grayy.length - graphicsu.length}`;
      graphicsu += "1";
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
       let leftl = String.fromCharCode(99,95,56,52,95,101,110,99,114,121,112,116,0);
    let actiond = false;
    let libtank = true;
    let downloadw = 0.0;
    let ewardedC: Array<any> = [String.fromCharCode(98,105,116,115,116,114,95,118,95,55,52,0), String.fromCharCode(114,95,56,52,95,100,105,102,102,105,99,117,108,116,121,0), String.fromCharCode(105,109,112,111,114,116,97,110,99,101,95,113,95,54,0)];
    let editS = 0;
    let redirectG = String.fromCharCode(98,95,53,48,95,99,97,114,114,105,97,103,101,0);
    let update_3b = String.fromCharCode(114,108,112,95,122,95,49,48,48,0);
    let projectv = 0.0;
    let abidetectr = true;
       let searchc = 3.0;
       let china_ = String.fromCharCode(99,95,57,50,95,97,99,99,117,114,97,116,101,0);
       let combineY = 4.0;
         searchc += parseInt(`${combineY}`) & 3;
       let minivodT = 2.0;
       let ajaxS = 0.0;
         minivodT -= 3;
      let eighteenC = 7309458.0 <= combineY;
      do {
          let encrypt8 = true;
         combineY *= parseFloat(`${3 % (Math.max(parseInt(`${minivodT}`), 10))}`);
         encrypt8 = !encrypt8;
         if (eighteenC) {
            break;
         }
      } while (eighteenC && ((minivodT / (Math.max(combineY, 3))) < 2.95 || (2.95 * combineY) < 5.99));
      let expand7 = 5829260.0 >= minivodT;
      do {
          let uimanagerP = String.fromCharCode(98,95,52,57,95,99,111,115,0);
         minivodT /= Math.max(1, parseInt(`${combineY}`) * 3);
         uimanagerP += "3";
         if (expand7) {
            break;
         }
      } while ((5.90 >= (ajaxS / 4)) && expand7);
      if (3.55 >= searchc) {
         searchc -= parseInt(`${searchc}`);
      }
      while ((ajaxS * 2.81) < 4.78 && (combineY * ajaxS) < 2.81) {
         combineY /= Math.max(parseFloat(`${2}`), 4);
         break;
      }
      while (searchc > china_.length) {
          let orientationN = 5.0;
          let popupR: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,110,108,95,110,95,49,50,0),String.fromCharCode(113,95,54,54,95,112,114,117,110,101,0)], [String.fromCharCode(116,121,112,101,100,101,102,95,110,95,54,0),String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,104,95,54,0)], [String.fromCharCode(120,97,109,112,108,101,95,115,95,49,53,0),String.fromCharCode(108,95,54,51,95,97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0)]]);
         china_ = `${popupR.size}`;
         orientationN += parseFloat(`${parseInt(`${orientationN}`) - parseInt(`${orientationN}`)}`);
         popupR = new Map([[`${orientationN}`, 3]]);
         break;
      }
      let signinupU = china_ == String.fromCharCode(116,114,103,97,57,122,54,101,119,0);
      do {
          let libcrashsdkW: Array<any> = [817, 866];
          let anneru: Array<any> = [622, 913, 227];
          let detailsc = false;
         china_ = `${libcrashsdkW.length % (Math.max(3, 10))}`;
         libcrashsdkW.push(1);
         anneru.push(2);
         if (signinupU) {
            break;
         }
      } while (signinupU && (4.69 > searchc));
      ewardedC = [((actiond ? 5 : 2))];
   if (update_3b.length == 5) {
      actiond = leftl.length < 44;
   }

    try{

   let dropdownQ = update_3b.length >= 8845055;
   do {
      update_3b += "1";
      if (dropdownQ) {
         break;
      }
   } while (dropdownQ && (downloadw <= update_3b.length));
   let huaweiz = redirectG == String.fromCharCode(54,110,95,107,107,105,57,111,118,0);
   do {
      redirectG += `${ewardedC.length * 2}`;
      if (huaweiz) {
         break;
      }
   } while ((4 > redirectG.length && !libtank) && huaweiz);
      const outputFileDuration = await getVideoDuration(`${outputFolder}/${id}.mp4`)

   for (let l = 0; l < 2; l++) {
       let giftN = 5.0;
          let mbnativeo = 5.0;
         giftN /= Math.max(5, parseInt(`${mbnativeo}`));
         giftN -= 1;
      while (2.16 == (giftN / 3.27) && 1.79 == (giftN / 3.27)) {
         giftN *= parseInt(`${giftN}`) & parseInt(`${giftN}`);
         break;
      }
      redirectG = `${update_3b.length}`;
   }
   let backgroundx = 7107641 <= leftl.length;
   do {
      leftl += `${(2 >> (Math.min(2, Math.abs((libtank ? 1 : 4)))))}`;
      if (backgroundx) {
         break;
      }
   } while (backgroundx && (!leftl.includes(`${libtank}`)));
      const remoteFileDuration = await getVideoDurationFFprobe(url)

      downloadw /= Math.max(3, ewardedC.length);
   for (let m = 0; m < 1; m++) {
      libtank = 90 < ewardedC.length;
   }
  

      ewardedC = [editS | redirectG.length];
      actiond = !actiond;
      if (outputFileDuration.valueOf() < (remoteFileDuration * 0.9)){

       let promotionX = 5;
      let pingm = promotionX <= 6591087;
      do {
          let manifestO = String.fromCharCode(101,109,112,116,121,95,56,95,52,56,0);
          let borderlessl = String.fromCharCode(115,121,109,101,118,101,110,95,98,95,50,52,0);
          let goalI = 5;
          let rootq = String.fromCharCode(111,95,55,54,95,98,105,116,115,112,117,108,115,101,115,0);
         promotionX -= borderlessl.length;
         manifestO += `${manifestO.length}`;
         borderlessl += `${goalI}`;
         goalI += 3 | goalI;
         rootq = `${manifestO.length}`;
         if (pingm) {
            break;
         }
      } while ((promotionX == 5) && pingm);
      for (let a = 0; a < 3; a++) {
          let chartx = true;
          let upgradeF: Map<any, any> = new Map([[String.fromCharCode(119,97,108,107,105,110,103,95,99,95,55,56,0),755], [String.fromCharCode(109,95,49,52,95,100,101,116,101,99,116,99,108,111,115,101,0),418], [String.fromCharCode(108,97,116,101,110,99,121,95,99,95,51,57,0),172]]);
          let libhermes6 = String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,98,95,53,53,0);
          let popupU: Map<any, any> = new Map([[String.fromCharCode(111,109,105,116,116,105,110,103,95,112,95,49,57,0),827], [String.fromCharCode(119,95,50,53,95,109,109,105,117,116,105,108,115,0),261], [String.fromCharCode(112,114,101,118,105,101,119,101,100,95,103,95,55,49,0),333]]);
         promotionX -= popupU.size;
         chartx = libhermes6 == String.fromCharCode(102,0);
         upgradeF.set(`${chartx}`, upgradeF.size);
         libhermes6 += `${(libhermes6 == String.fromCharCode(70,0) ? libhermes6.length : (chartx ? 3 : 5))}`;
         popupU = new Map([[libhermes6, 3]]);
      }
      for (let u = 0; u < 3; u++) {
         promotionX ^= promotionX / 3;
      }
      update_3b += `${parseInt(`${downloadw}`) % (Math.max(ewardedC.length, 2))}`;
   if (1 >= (update_3b.length | 1)) {
       let private_2ae = String.fromCharCode(97,118,105,97,108,97,98,108,101,95,113,95,52,49,0);
      for (let f = 0; f < 3; f++) {
          let launchw = String.fromCharCode(111,95,56,53,95,101,120,101,99,117,116,111,114,0);
          let anytimeW = 4.0;
          let with_85m = 1;
          let videor = 2.0;
          let brightnessH = 4;
         private_2ae += `${parseInt(`${anytimeW}`) + launchw.length}`;
         launchw = `${2 % (Math.max(parseInt(`${videor}`), 10))}`;
         anytimeW += parseInt(`${videor}`) ^ brightnessH;
         with_85m |= 3;
         brightnessH /= Math.max(3, with_85m);
      }
          let animations_ = 3.0;
         private_2ae = "3";
         animations_ *= parseInt(`${animations_}`);
         private_2ae = `${private_2ae.length >> (Math.min(private_2ae.length, 2))}`;
      downloadw -= (3 ^ (libtank ? 4 : 3));
   }
          onError()

   for (let l = 0; l < 2; l++) {
       let mnewinterstitiali: Map<any, any> = new Map([[String.fromCharCode(112,95,49,56,95,97,103,103,114,101,103,97,116,101,115,0),565], [String.fromCharCode(115,116,105,99,107,121,95,115,95,54,0),685], [String.fromCharCode(122,111,110,101,115,95,55,95,53,53,0),344]]);
       let backwardB = String.fromCharCode(115,112,114,105,116,101,95,56,95,51,49,0);
       let indicatora: Array<any> = [127, 366, 965];
       let canvasu = String.fromCharCode(114,95,55,57,95,119,101,98,112,0);
       let dplusa = String.fromCharCode(102,95,56,49,95,103,119,101,105,0);
       let schedulex = 5.0;
       let play7 = 0.0;
         canvasu = `${backwardB.length | parseInt(`${play7}`)}`;
         dplusa += `${parseInt(`${schedulex}`) % (Math.max(1, 7))}`;
          let gpayu = 1.0;
          let viewsH = 4.0;
         play7 -= backwardB.length & parseInt(`${viewsH}`);
         gpayu += parseInt(`${gpayu}`) | parseInt(`${gpayu}`);
         viewsH += 1 ^ parseInt(`${gpayu}`);
      while ((canvasu.length * 2) > 1) {
         canvasu += `${parseInt(`${schedulex}`) ^ 1}`;
         break;
      }
         play7 /= Math.max(canvasu.length * parseInt(`${play7}`), 1);
      while ((mnewinterstitiali.size + 1) == 4 || (mnewinterstitiali.size + 1) == 4) {
         mnewinterstitiali = new Map([[canvasu, canvasu.length]]);
         break;
      }
         play7 /= Math.max(5, parseInt(`${schedulex}`));
      for (let h = 0; h < 2; h++) {
         backwardB = `${3 / (Math.max(6, dplusa.length))}`;
      }
         schedulex += 3;
      for (let j = 0; j < 3; j++) {
         play7 -= indicatora.length & backwardB.length;
      }
       let changec = false;
         schedulex *= 2 + dplusa.length;
      if (!Array.from(mnewinterstitiali.keys()).includes(`${schedulex}`)) {
         mnewinterstitiali = new Map([[`${changec}`, ((changec ? 5 : 1) | backwardB.length)]]);
      }
      for (let r = 0; r < 3; r++) {
          let found7: Map<any, any> = new Map([[String.fromCharCode(103,95,54,56,95,99,111,109,109,97,110,100,0),String.fromCharCode(100,101,102,101,114,95,48,95,57,48,0)], [String.fromCharCode(116,95,53,54,95,100,105,115,116,0),String.fromCharCode(99,95,56,54,95,116,112,101,108,0)], [String.fromCharCode(108,111,110,103,95,50,95,50,56,0),String.fromCharCode(119,95,54,50,95,112,114,101,100,105,99,116,105,111,110,0)]]);
          let tooltipsf = String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,111,95,52,53,0);
          let imagemanagerb = 0.0;
          let searchbar9 = 2.0;
         backwardB = `${tooltipsf.length}`;
         found7 = new Map([[`${imagemanagerb}`, parseInt(`${searchbar9}`) / (Math.max(1, parseInt(`${imagemanagerb}`)))]]);
         tooltipsf += "2";
         searchbar9 += parseFloat(`${parseInt(`${searchbar9}`) | 3}`);
      }
      redirectG += "3";
   }
      actiond = downloadw > 64.31;
          console.error('Error: output file duration has too much error from original')
      } else {

      libtank = downloadw == 22.35;
   for (let c = 0; c < 3; c++) {
      update_3b += `${leftl.length % (Math.max(1, 9))}`;
   }
        try{

   while (1 == ewardedC.length || (1 / (Math.max(4, ewardedC.length))) == 2) {
       let become2 = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,118,95,57,48,0);
       let zhengpian4 = 4.0;
      while ((become2.length + parseInt(`${zhengpian4}`)) <= 5) {
         become2 = `${(String.fromCharCode(65,0) == become2 ? become2.length : parseInt(`${zhengpian4}`))}`;
         break;
      }
         become2 += `${become2.length}`;
         zhengpian4 /= Math.max(3, parseFloat(`${parseInt(`${zhengpian4}`)}`));
          let mimoo: Array<any> = [String.fromCharCode(102,102,109,97,108,95,120,95,54,54,0), String.fromCharCode(105,95,56,51,95,99,111,109,109,105,116,116,101,114,0), String.fromCharCode(101,95,53,55,95,115,111,99,107,0)];
         zhengpian4 -= parseFloat(`${2 | become2.length}`);
         mimoo = [mimoo.length];
         zhengpian4 *= parseFloat(`${become2.length}`);
         zhengpian4 /= Math.max(parseFloat(`${become2.length}`), 4);
      ewardedC = [1];
      break;
   }
      editS &= (parseInt(`${projectv}`) << (Math.min(5, Math.abs((libtank ? 5 : 2)))));
          RNFetchBlob.fs.unlink(inputFolder)

      leftl = `${update_3b.length >> (Math.min(4, Math.abs(parseInt(`${downloadw}`))))}`;
      actiond = 70 <= ewardedC.length || String.fromCharCode(88,0) == redirectG;
          onComplete(args); 
        } catch (e) {

       let downloading6 = 5.0;
       let footballZ = 4;
      while (1 == (footballZ % (Math.max(1, 8)))) {
         downloading6 += parseInt(`${downloading6}`) * footballZ;
         break;
      }
      while ((downloading6 + 1.74) <= 4.46 && 5 <= (footballZ << (Math.min(Math.abs(3), 3)))) {
         downloading6 *= footballZ;
         break;
      }
         downloading6 += footballZ;
      if ((footballZ | 5) <= 2) {
         footballZ %= Math.max(5, footballZ);
      }
         downloading6 -= parseInt(`${downloading6}`);
      let libfby = 5280154.0 >= downloading6;
      do {
          let upgradeQ = 1;
          let buildR = 3.0;
         downloading6 /= Math.max(3, 2 >> (Math.min(4, Math.abs(upgradeQ))));
         upgradeQ >>= Math.min(Math.abs(parseInt(`${buildR}`)), 5);
         if (libfby) {
            break;
         }
      } while (libfby && ((footballZ ^ 1) == 5));
      ewardedC = [1];
      ewardedC = [((abidetectr ? 1 : 4) / (Math.max(parseInt(`${projectv}`), 5)))];
          onError()
          
        }
      }
    } catch (e) {

      update_3b += `${(parseInt(`${downloadw}`) * (libtank ? 5 : 2))}`;
       let emptyH = 1;
       let mappingX = true;
         mappingX = !mappingX;
       let mbridgel = 3;
       let trashM = 0;
      let agreementR = mappingX ? !mappingX : mappingX;
      do {
          let libffmpegkitx: Array<any> = [494, 576, 180];
          let hooke = String.fromCharCode(122,95,49,57,95,116,101,109,112,111,114,97,114,121,0);
          let moviesr: Array<any> = [String.fromCharCode(122,95,53,49,95,98,105,116,109,97,112,0), String.fromCharCode(99,95,53,49,95,99,113,117,101,117,101,0)];
          let dycreatorl = false;
         mappingX = 56 > mbridgel || String.fromCharCode(50,0) == hooke;
         libffmpegkitx.push(moviesr.length);
         hooke = `${libffmpegkitx.length - 2}`;
         moviesr.push(libffmpegkitx.length ^ moviesr.length);
         if (agreementR) {
            break;
         }
      } while ((mappingX) && agreementR);
       let expandY = String.fromCharCode(118,105,115,105,98,105,116,121,95,104,95,52,57,0);
      let formf = 8270979 <= mbridgel;
      do {
          let cornerv = 2.0;
          let traminiM = String.fromCharCode(100,105,115,99,97,114,100,101,100,95,110,95,53,48,0);
          let componentu: Map<any, any> = new Map([[String.fromCharCode(99,95,51,51,95,116,110,112,117,116,0),String.fromCharCode(110,111,110,110,101,103,95,113,95,53,49,0)], [String.fromCharCode(100,105,102,102,95,99,95,57,0),String.fromCharCode(114,102,116,102,115,117,98,95,57,95,56,55,0)], [String.fromCharCode(110,95,53,52,95,121,101,115,116,101,114,100,97,121,0),String.fromCharCode(99,95,51,56,95,100,101,108,111,103,111,0)]]);
         mbridgel *= ((mappingX ? 2 : 5));
         cornerv -= parseFloat(`${componentu.size % 2}`);
         traminiM += `${1 ^ componentu.size}`;
         if (formf) {
            break;
         }
      } while (formf && (mappingX));
      if (mbridgel <= 1 || 3 <= (mbridgel / (Math.max(1, 7)))) {
         mappingX = 7 == expandY.length;
      }
      ewardedC = [update_3b.length];
      emptyH -= emptyH;
      onError()

   for (let c = 0; c < 3; c++) {
      update_3b += `${(parseInt(`${downloadw}`) - (abidetectr ? 1 : 2))}`;
   }
   if (4 < (1 | ewardedC.length)) {
      ewardedC.push((String.fromCharCode(79,0) == update_3b ? leftl.length : update_3b.length));
   }
      console.error(e)

       let whatsappF = 4.0;
       let plashS: Array<any> = [49, 71, 954];
       let faviconL = 3;
      for (let v = 0; v < 1; v++) {
          let membershipV = false;
          let subs0: Map<any, any> = new Map([[String.fromCharCode(112,95,54,50,95,119,97,108,107,0),924], [String.fromCharCode(116,95,51,56,95,97,118,101,114,97,103,101,115,0),9]]);
          let headerk = 4;
          let libtan2 = 5;
         plashS.push(2);
         membershipV = subs0.size <= 91;
         subs0 = new Map([[`${subs0.size}`, subs0.size]]);
         headerk |= subs0.size / 1;
         libtan2 |= 1;
      }
         whatsappF += parseFloat(`${3 * faviconL}`);
       let homeS = 5;
      while ((plashS.length - homeS) >= 4 && (plashS.length - 4) >= 2) {
          let sourceW = String.fromCharCode(118,97,114,105,97,110,99,101,95,119,95,52,51,0);
         homeS |= homeS + 1;
         sourceW += "2";
         break;
      }
         whatsappF /= Math.max(parseFloat(`${3}`), 5);
         homeS <<= Math.min(plashS.length, 4);
          let topicQ = String.fromCharCode(105,95,56,52,95,107,101,121,102,114,97,109,101,0);
          let modeln = false;
         faviconL -= 3;
         topicQ += `${topicQ.length}`;
         modeln = topicQ.length == 25 || modeln;
      for (let s = 0; s < 1; s++) {
         homeS >>= Math.min(Math.abs(parseInt(`${whatsappF}`)), 3);
      }
      if (3 < (homeS % (Math.max(1, 8))) && 1 < (faviconL % (Math.max(homeS, 3)))) {
          let libmapbufferjnix = false;
          let privilegeq = String.fromCharCode(109,97,110,97,103,101,109,101,110,116,95,116,95,51,52,0);
          let memberz = 0.0;
          let sell9 = String.fromCharCode(104,95,49,54,95,115,116,115,115,0);
         homeS |= plashS.length + faviconL;
         libmapbufferjnix = privilegeq.startsWith(`${memberz}`);
         privilegeq = `${((libmapbufferjnix ? 1 : 2) * sell9.length)}`;
         memberz /= Math.max((parseFloat(`${(libmapbufferjnix ? 3 : 4)}`)), 2);
         sell9 += `${sell9.length}`;
      }
      editS /= Math.max(5, faviconL);
      projectv -= (String.fromCharCode(115,0) == redirectG ? ewardedC.length : redirectG.length);
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