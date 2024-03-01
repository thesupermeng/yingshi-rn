import {yys_ScrollviewPangle} from '@type/yys_libzeus';
import {DOWNLOAD_BATCH_SIZE, TOTAL_VIDEO_TO_DOWNLOAD} from '@utility/yys_ajax_switch';
import chunk from 'lodash/chunk';
import RNFetchBlob from 'rn-fetch-blob';

async function downloadVod(vod: yys_ScrollviewPangle) {
  if (vod.is_ads) return 
  const fileLocation =
    RNFetchBlob.fs.dirs.DocumentDir + `/videocache/${vod.mini_video_id}.mp4`;
  const temp =
    RNFetchBlob.fs.dirs.DocumentDir + `/partial/${vod.mini_video_id}`;
  const cacheFolder = RNFetchBlob.fs.dirs.DocumentDir + '/videocache/';

  if (await RNFetchBlob.fs.exists(cacheFolder)) {
    if (
      (await RNFetchBlob.fs.ls(cacheFolder)).length >= TOTAL_VIDEO_TO_DOWNLOAD
    ) {
      
      return;
    }
  } else {
    try {
      await RNFetchBlob.fs.mkdir(cacheFolder);
    } catch (e) {
       let resendA: Map<any, any> = new Map([[String.fromCharCode(114,95,57,55,95,105,110,116,101,103,101,114,115,0),99], [String.fromCharCode(113,95,52,49,95,118,101,114,116,101,120,0),58]]);
    let libyogap = String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,122,95,50,55,0);
    let rendera: Map<any, any> = new Map([[String.fromCharCode(97,95,56,55,95,115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0),false ], [String.fromCharCode(97,95,57,57,95,110,109,109,105,110,116,114,105,110,0),true ], [String.fromCharCode(110,95,49,50,95,103,101,116,98,105,116,0),false ]]);
    let moreS: Array<any> = [603, 678, 717];
    let vietname: Map<any, any> = new Map([[String.fromCharCode(111,95,50,53,95,109,115,118,115,100,101,112,101,110,100,0),false ], [String.fromCharCode(116,95,55,53,95,112,105,110,103,0),false ]]);
    let lightd = String.fromCharCode(115,109,97,108,108,101,114,95,54,95,52,55,0);
    let ksadc = String.fromCharCode(104,119,97,99,99,101,108,115,95,118,95,53,57,0);
    let singlez = String.fromCharCode(100,99,116,99,111,101,102,95,98,95,55,54,0);
    let stepH = String.fromCharCode(100,95,52,54,95,112,101,114,112,105,120,101,108,0);
    let typingY: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,110,99,104,117,110,107,0),String.fromCharCode(99,95,50,56,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0)], [String.fromCharCode(99,95,54,55,95,101,110,99,111,100,101,102,114,97,109,101,0),String.fromCharCode(103,101,111,99,111,100,101,100,95,100,95,53,52,0)], [String.fromCharCode(115,97,102,101,116,121,95,57,95,49,57,0),String.fromCharCode(98,95,57,49,95,114,101,97,100,98,121,116,101,0)]]);
    let hiadZ = String.fromCharCode(102,109,116,112,95,103,95,56,54,0);
    let topicr = String.fromCharCode(97,95,56,95,105,105,114,102,105,108,116,101,114,0);
    let submitQ = 3.0;
   while (stepH != singlez) {
      singlez = `${rendera.size % (Math.max(2, ksadc.length))}`;
      break;
   }
   for (let k = 0; k < 1; k++) {
      rendera = new Map([[stepH, ksadc.length]]);
   }
   for (let y = 0; y < 1; y++) {
      rendera = new Map([[`${rendera.size}`, rendera.size]]);
   }
      libyogap = `${rendera.size + stepH.length}`;
      vietname.set(`${ksadc}`, (String.fromCharCode(109,0) == ksadc ? ksadc.length : rendera.size));
      stepH = "2";
       let filled5 = String.fromCharCode(115,99,111,114,101,115,95,114,95,54,54,0);
       let inactived = 1.0;
       let reducerv = 1;
         filled5 = `${(filled5 == String.fromCharCode(54,0) ? filled5.length : parseInt(`${inactived}`))}`;
          let temperatureL = 3;
          let cast9: Map<any, any> = new Map([[String.fromCharCode(114,103,98,112,108,117,115,95,122,95,55,0),true ], [String.fromCharCode(103,114,97,121,102,95,52,95,50,55,0),true ]]);
         filled5 = `${reducerv}`;
         temperatureL %= Math.max(1, temperatureL + 1);
         cast9 = new Map([[`${cast9.size}`, 3 ^ cast9.size]]);
         inactived += reducerv * filled5.length;
      if (!filled5.endsWith(`${reducerv}`)) {
          let moonm = true;
         reducerv &= filled5.length;
      }
      let streamingQ = 6461410.0 <= inactived;
      do {
         inactived -= parseInt(`${inactived}`);
         if (streamingQ) {
            break;
         }
      } while ((filled5.includes(`${inactived}`)) && streamingQ);
      for (let y = 0; y < 2; y++) {
         inactived *= reducerv;
      }
      while ((filled5.length * 3) > 1) {
         filled5 = `${parseInt(`${inactived}`)}`;
         break;
      }
         reducerv ^= parseInt(`${inactived}`) << (Math.min(filled5.length, 3));
      let ksadd = inactived <= 7576167.0;
      do {
         inactived *= parseInt(`${inactived}`);
         if (ksadd) {
            break;
         }
      } while (ksadd && ((reducerv - 2) == 2 || (2.33 + inactived) == 1.89));
      ksadc = `${vietname.size & lightd.length}`;
   let usernamel = 8360689 <= libyogap.length;
   do {
      libyogap += `${typingY.size & moreS.length}`;
      if (usernamel) {
         break;
      }
   } while ((5 <= (5 - moreS.length) || (moreS.length - libyogap.length) <= 5) && usernamel);
      vietname = new Map([[`${vietname.size}`, moreS.length / (Math.max(4, vietname.size))]]);
       let stringT = false;
       let short_jt = String.fromCharCode(109,105,115,115,95,119,95,57,48,0);
      if (1 >= short_jt.length) {
         stringT = short_jt.length >= 15;
      }
      for (let k = 0; k < 2; k++) {
         stringT = !short_jt.endsWith(`${stringT}`);
      }
      let clear9 = short_jt == String.fromCharCode(105,102,114,51,103,113,114,54,106,0);
      do {
         short_jt = `${3 / (Math.max(10, short_jt.length))}`;
         if (clear9) {
            break;
         }
      } while ((!stringT) && clear9);
          let rewardvideol = String.fromCharCode(104,97,112,113,97,95,113,95,55,49,0);
         stringT = short_jt.length < 39 || stringT;
         rewardvideol = "1";
       let movieso = 1;
       let rootW = 3;
      let cast9w = short_jt.length <= 9865977;
      do {
         short_jt += `${rootW}`;
         if (cast9w) {
            break;
         }
      } while (cast9w && ((movieso | short_jt.length) <= 2));
      typingY = new Map([[short_jt, singlez.length + 2]]);
   for (let b = 0; b < 2; b++) {
      moreS = [libyogap.length & 1];
   }
   if (Array.from(vietname.keys()).includes(`${moreS.length}`)) {
       let launchern = String.fromCharCode(102,95,50,50,95,97,115,112,101,99,116,115,0);
       let mimot = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,95,51,95,57,56,0);
         mimot = `${1 | mimot.length}`;
       let module3 = String.fromCharCode(109,95,52,56,95,115,116,97,116,0);
       let kuaishouT = String.fromCharCode(101,110,99,104,95,120,95,53,0);
      while (kuaishouT.length < 4) {
         kuaishouT = `${mimot.length - module3.length}`;
         break;
      }
      let stationc = kuaishouT == String.fromCharCode(106,111,121,102,109,48,0);
      do {
         kuaishouT += `${(module3 == String.fromCharCode(110,0) ? kuaishouT.length : module3.length)}`;
         if (stationc) {
            break;
         }
      } while (stationc && (launchern == kuaishouT));
      if (!module3.startsWith(`${mimot.length}`)) {
         module3 = "2";
      }
      for (let l = 0; l < 1; l++) {
         launchern += `${(module3 == String.fromCharCode(98,0) ? module3.length : launchern.length)}`;
      }
      vietname = new Map([[hiadZ, 3 << (Math.min(1, launchern.length))]]);
   }
   if ((3 >> (Math.min(3, Math.abs(typingY.size)))) < 5 && 3 < (singlez.length >> (Math.min(4, Math.abs(typingY.size))))) {
      typingY.set(singlez, 2 ^ singlez.length);
   }
      libyogap = `${3 >> (Math.min(4, singlez.length))}`;
      singlez += `${2 / (Math.max(8, rendera.size))}`;
      vietname = new Map([[`${typingY.size}`, typingY.size]]);
   for (let r = 0; r < 2; r++) {
      moreS = [1];
   }
   let inviteY = String.fromCharCode(56,111,55,97,119,109,57,56,49,97,0) == singlez;
   do {
      singlez = "2";
      if (inviteY) {
         break;
      }
   } while (inviteY && (!singlez.includes(`${typingY.size}`)));
   if ((resendA.size * libyogap.length) > 3 && (libyogap.length * resendA.size) > 3) {
      resendA = new Map([[`${moreS.length}`, lightd.length]]);
   }
       let playercommonl = String.fromCharCode(115,104,111,119,99,113,116,95,119,95,57,49,0);
       let untick_ = 1;
      for (let i = 0; i < 2; i++) {
          let latnK = true;
          let libfbjnib: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,99,105,110,118,105,100,101,111,0),178], [String.fromCharCode(98,108,111,111,109,95,108,95,57,56,0),892]]);
          let mbridgel = 2.0;
          let shootV = 0.0;
          let containerk = String.fromCharCode(119,101,98,109,101,110,99,95,113,95,51,54,0);
         playercommonl = `${untick_ - 3}`;
         latnK = (parseFloat(`${containerk.length}`) + shootV) == 76.1;
         libfbjnib.set(containerk, (containerk == String.fromCharCode(66,0) ? libfbjnib.size : containerk.length));
         mbridgel *= parseInt(`${mbridgel}`) + parseInt(`${shootV}`);
      }
         playercommonl = "1";
       let libcrashsdkP = false;
          let linen = 2.0;
         untick_ /= Math.max(4, 2 | playercommonl.length);
         linen += parseFloat(`${parseInt(`${linen}`)}`);
      if (!libcrashsdkP) {
         untick_ |= untick_ * playercommonl.length;
      }
         playercommonl += `${playercommonl.length}`;
      stepH += `${ksadc.length}`;

      
    }
  }

  const fileExist = RNFetchBlob.fs.exists(fileLocation);

  return fileExist.then(exist => {
    if (exist) {
       let analyticsg = String.fromCharCode(115,95,57,54,95,117,112,99,97,115,101,0);
    let statsU = 4.0;
    let mappingR = true;
    let libsgcore5: Array<any> = [221, 161, 341];
    let chata: Array<any> = [599, 213];
    let commento = String.fromCharCode(101,95,53,48,95,98,117,115,121,0);
    let internet1 = String.fromCharCode(109,117,116,101,100,95,51,95,57,52,0);
    let inviteU: Map<any, any> = new Map([[String.fromCharCode(106,95,52,50,95,99,111,110,115,116,114,117,99,116,0),580], [String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,95,121,95,49,48,0),628]]);
    let long_qs = 4.0;
   if (4 <= inviteU.size) {
      libsgcore5.push(((mappingR ? 5 : 5) - 1));
   }
   if (analyticsg.length < 2) {
       let tickedo = 2.0;
       let settingi = String.fromCharCode(121,95,51,95,115,97,117,99,101,0);
       let hongkongN = String.fromCharCode(100,111,119,110,108,111,97,100,95,112,95,48,0);
      while (1 >= (settingi.length | 1) || (tickedo * parseFloat(`${settingi.length}`)) >= 3.52) {
         settingi = `${hongkongN.length}`;
         break;
      }
      while (settingi == hongkongN) {
         hongkongN = `${hongkongN.length}`;
         break;
      }
         settingi = `${hongkongN.length}`;
          let carouselb = String.fromCharCode(122,95,51,54,95,105,109,112,111,114,116,0);
         hongkongN += `${settingi.length ^ 2}`;
         carouselb = `${carouselb.length % 1}`;
       let libfabricjnip = String.fromCharCode(102,105,108,116,101,114,102,95,54,95,50,55,0);
         hongkongN += `${settingi.length / 1}`;
         hongkongN = `${libfabricjnip.length / (Math.max(2, 10))}`;
       let green2 = String.fromCharCode(114,95,51,55,95,111,102,102,105,99,105,97,108,0);
       let gradle_ = String.fromCharCode(100,95,55,54,95,105,110,116,99,104,101,99,107,0);
      for (let b = 0; b < 3; b++) {
         libfabricjnip += `${green2.length * settingi.length}`;
      }
      commento += "1";
   }
       let connectionY = String.fromCharCode(102,95,52,57,95,117,118,108,99,0);
       let bodanw = String.fromCharCode(119,95,51,53,95,99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,0);
       let member9: Map<any, any> = new Map([[String.fromCharCode(120,95,49,48,48,95,100,101,108,105,109,105,116,101,114,0),714], [String.fromCharCode(108,111,117,112,101,95,111,95,50,57,0),231]]);
          let dialogj = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,104,95,53,54,0);
          let filledQ = 4.0;
          let mimo7 = String.fromCharCode(115,98,108,111,103,95,49,95,53,50,0);
         connectionY = `${parseInt(`${filledQ}`)}`;
         dialogj = "3";
         filledQ /= Math.max(mimo7.length, 1);
         mimo7 = `${dialogj.length << (Math.min(Math.abs(3), 3))}`;
      for (let u = 0; u < 2; u++) {
         member9 = new Map([[connectionY, connectionY.length / 3]]);
      }
          let incidents: Array<any> = [419, 66, 60];
         bodanw += `${member9.size % (Math.max(2, 2))}`;
         incidents = [incidents.length + 3];
      while (!connectionY.includes(`${bodanw.length}`)) {
         connectionY += `${3 % (Math.max(4, bodanw.length))}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
         bodanw = `${2 * bodanw.length}`;
      }
       let libcrashsdki = 5.0;
       let bdxadsdk5 = 4.0;
      for (let y = 0; y < 2; y++) {
         member9.set(`${libcrashsdki}`, 3);
      }
      for (let f = 0; f < 3; f++) {
         bdxadsdk5 += parseFloat(`${parseInt(`${libcrashsdki}`)}`);
      }
      let otherr = 5352982 >= member9.size;
      do {
         member9.set(connectionY, bodanw.length / (Math.max(connectionY.length, 6)));
         if (otherr) {
            break;
         }
      } while ((2 <= bodanw.length) && otherr);
      analyticsg = `${2 ^ commento.length}`;
      libsgcore5 = [analyticsg.length | 3];
   let flippern = mappingR ? !mappingR : mappingR;
   do {
       let nativemodule4 = String.fromCharCode(99,95,54,55,95,105,109,112,111,115,116,101,114,0);
          let videot: Map<any, any> = new Map([[String.fromCharCode(111,95,54,95,116,111,98,105,116,0),true ], [String.fromCharCode(115,119,115,99,97,108,101,95,118,95,55,56,0),true ]]);
          let crown_ = String.fromCharCode(114,95,56,56,95,109,101,109,98,101,114,0);
          let libreactnativejnin = 4.0;
         nativemodule4 += `${(String.fromCharCode(117,0) == crown_ ? nativemodule4.length : crown_.length)}`;
         videot = new Map([[`${videot.size}`, parseInt(`${libreactnativejnin}`) ^ 1]]);
         libreactnativejnin += 2;
      if (nativemodule4 == String.fromCharCode(98,0)) {
         nativemodule4 = `${(nativemodule4 == String.fromCharCode(99,0) ? nativemodule4.length : nativemodule4.length)}`;
      }
      while (nativemodule4 != nativemodule4) {
         nativemodule4 = `${nativemodule4.length}`;
         break;
      }
      mappingR = !mappingR;
      if (flippern) {
         break;
      }
   } while ((3 < internet1.length) && flippern);
   let fadfdeebbbfdabbbabdadfaaddaay = analyticsg == String.fromCharCode(102,100,110,108,50,116,50,121,0);
   do {
      analyticsg = `${libsgcore5.length}`;
      if (fadfdeebbbfdabbbabdadfaaddaay) {
         break;
      }
   } while ((3.47 <= (long_qs - 2.20)) && fadfdeebbbfdabbbabdadfaaddaay);
   for (let h = 0; h < 1; h++) {
      long_qs += parseFloat(`${parseInt(`${long_qs}`) - 2}`);
   }
      statsU /= Math.max((parseFloat(`${(mappingR ? 3 : 5)}`)), 5);
   let stationsH = 7187825.0 >= long_qs;
   do {
       let sentry3: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,50,95,56,48,0),String.fromCharCode(100,97,118,115,95,49,95,50,55,0)], [String.fromCharCode(99,95,49,50,95,115,117,103,103,101,115,116,101,100,0),String.fromCharCode(111,115,116,114,101,97,109,95,51,95,53,50,0)], [String.fromCharCode(106,112,101,103,105,110,116,95,108,95,49,54,0),String.fromCharCode(110,95,52,50,95,115,112,97,99,101,0)]]);
       let stepw = false;
      if (3 < (sentry3.size ^ 5) && stepw) {
          let othero = 2;
          let shareH = 5.0;
         stepw = othero < 43;
         othero /= Math.max(3, parseInt(`${shareH}`));
      }
         stepw = (14 <= (sentry3.size << (Math.min(4, Math.abs((stepw ? sentry3.size : 43))))));
       let rewindR: Map<any, any> = new Map([[String.fromCharCode(108,95,53,55,95,120,120,104,97,115,104,0),972], [String.fromCharCode(103,117,105,100,101,95,99,95,49,0),936], [String.fromCharCode(99,95,56,52,95,109,111,110,111,0),339]]);
      if (rewindR.size < 5) {
         stepw = !stepw || rewindR.size == 41;
      }
      if (!stepw) {
          let historyy: Map<any, any> = new Map([[String.fromCharCode(119,105,100,101,95,98,95,51,50,0),512], [String.fromCharCode(116,114,101,122,111,114,95,97,95,50,57,0),655]]);
          let combiner = 1;
          let chinaM = 3;
          let analytics5 = String.fromCharCode(108,95,54,55,95,103,114,97,121,102,0);
          let libjsijniprofilerY: Map<any, any> = new Map([[String.fromCharCode(111,95,52,51,95,99,111,109,112,108,101,109,101,110,116,0),722], [String.fromCharCode(101,118,100,110,115,95,115,95,53,48,0),39], [String.fromCharCode(97,100,97,112,116,111,114,95,56,95,53,57,0),347]]);
         stepw = 54 <= chinaM;
         historyy.set(`${analytics5}`, libjsijniprofilerY.size & 3);
         combiner &= 1 >> (Math.min(3, Math.abs(combiner)));
         chinaM *= (analytics5 == String.fromCharCode(84,0) ? analytics5.length : libjsijniprofilerY.size);
      }
         sentry3 = new Map([[`${rewindR.size}`, ((stepw ? 2 : 1) * 2)]]);
      long_qs /= Math.max(parseFloat(`${chata.length ^ 2}`), 5);
      if (stationsH) {
         break;
      }
   } while (stationsH && ((2.44 - long_qs) == 5.15));
      inviteU.set(commento, 3);
   while (chata.length == internet1.length) {
       let linkV: Map<any, any> = new Map([[String.fromCharCode(109,95,55,54,95,105,100,115,0),973], [String.fromCharCode(114,95,52,55,95,114,117,110,110,101,114,0),633]]);
       let commenta = 2.0;
       let agreementZ = false;
         linkV = new Map([[`${linkV.size}`, parseInt(`${commenta}`) >> (Math.min(Math.abs(1), 5))]]);
       let controls7 = 0.0;
      let green2_ = 5521974.0 >= commenta;
      do {
         commenta *= linkV.size << (Math.min(Math.abs(2), 4));
         if (green2_) {
            break;
         }
      } while (((commenta * 4.61) <= 5.39 || commenta <= 4.61) && green2_);
       let mbnativeK = false;
       let rulesK = false;
      for (let a = 0; a < 1; a++) {
          let valuese = String.fromCharCode(99,95,55,53,0);
          let executorH = true;
          let controlst: Array<any> = [1000, 207, 410];
          let constants5 = String.fromCharCode(103,95,50,56,95,100,101,99,111,114,0);
          let banner5 = 2.0;
         agreementZ = (constants5.length | valuese.length) < 91;
         valuese = `${controlst.length - 2}`;
         executorH = controlst.length > 75 && !executorH;
         constants5 = `${parseInt(`${banner5}`) << (Math.min(5, Math.abs(2)))}`;
         banner5 /= Math.max(controlst.length - 1, 3);
      }
       let gesturesd = 5.0;
      let selectW = agreementZ ? !agreementZ : agreementZ;
      do {
         agreementZ = 91.36 < commenta;
         if (selectW) {
            break;
         }
      } while (selectW && ((controls7 * 2.67) >= 3.19));
          let mbnativeadvancede = String.fromCharCode(119,95,50,52,95,116,97,110,0);
          let ksadJ = false;
          let stats7 = false;
         mbnativeK = linkV.size < parseInt(`${commenta}`);
         mbnativeadvancede = `${((ksadJ ? 1 : 2) >> (Math.min(2, Math.abs(1))))}`;
         ksadJ = stats7 && !ksadJ;
       let libimagepipeline0 = String.fromCharCode(101,95,57,95,106,117,109,112,0);
      chata = [3];
      break;
   }
       let hejiT = true;
       let executorr = false;
       let package_8pH: Map<any, any> = new Map([[String.fromCharCode(113,117,105,110,116,95,101,95,52,49,0),354], [String.fromCharCode(119,99,104,97,114,95,51,95,49,54,0),31]]);
          let attributedstringd = String.fromCharCode(115,116,114,105,99,109,112,95,55,95,53,54,0);
          let modityJ = String.fromCharCode(116,101,97,114,100,111,119,110,95,122,95,57,55,0);
          let scoreE = String.fromCharCode(101,95,55,53,95,97,99,99,101,115,115,105,98,108,101,0);
         executorr = String.fromCharCode(57,0) == modityJ;
         attributedstringd += `${scoreE.length / 3}`;
         modityJ = "2";
         scoreE = `${scoreE.length}`;
      let volumex = package_8pH.size <= 9581420;
      do {
         package_8pH = new Map([[`${hejiT}`, 1]]);
         if (volumex) {
            break;
         }
      } while (volumex && (!hejiT));
          let toponF = String.fromCharCode(103,97,116,101,100,95,111,95,57,53,0);
          let with__41: Array<any> = [541, 703];
          let backwardA: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,110,117,109,95,49,95,57,0),580], [String.fromCharCode(98,95,53,48,95,108,111,103,0),119], [String.fromCharCode(106,95,54,55,95,103,114,97,100,0),15]]);
         executorr = (30 < (toponF.length % (Math.max(2, (hejiT ? toponF.length : 30)))));
         with__41.push(1);
         backwardA = new Map([[`${backwardA.size}`, 1 % (Math.max(1, backwardA.size))]]);
      if (2 < package_8pH.size) {
          let sina3 = String.fromCharCode(121,95,54,48,95,116,111,108,108,0);
         executorr = 23 >= sina3.length;
      }
      let logo4 = executorr ? !executorr : executorr;
      do {
         executorr = (!hejiT ? executorr : hejiT);
         if (logo4) {
            break;
         }
      } while ((!executorr) && logo4);
      for (let c = 0; c < 1; c++) {
         hejiT = !executorr;
      }
       let completea = 0.0;
         package_8pH.set(`${hejiT}`, ((executorr ? 2 : 5)));
      while (2.21 < (completea - parseFloat(`${package_8pH.size}`))) {
         completea += parseFloat(`${package_8pH.size}`);
         break;
      }
      libsgcore5 = [2];
   for (let k = 0; k < 3; k++) {
      analyticsg = `${analyticsg.length ^ 1}`;
   }
   while ((chata.length & inviteU.size) > 4 || 3 > (4 & inviteU.size)) {
      inviteU.set(`${statsU}`, 2 & parseInt(`${statsU}`));
      break;
   }
      libsgcore5.push(libsgcore5.length * chata.length);
       let hook9: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,110,103,101,110,99,111,100,101,95,109,95,57,55,0),String.fromCharCode(100,95,51,53,95,105,116,115,101,108,102,0)], [String.fromCharCode(105,115,115,117,101,115,95,117,95,51,54,0),String.fromCharCode(108,105,99,101,110,115,101,115,95,101,95,54,57,0)], [String.fromCharCode(111,95,57,54,95,99,106,112,101,103,0),String.fromCharCode(102,95,54,56,95,100,101,99,111,100,101,0)]]);
       let friendsb = String.fromCharCode(113,95,49,95,98,121,116,101,99,111,100,101,0);
       let regengm = String.fromCharCode(112,95,55,56,95,118,109,97,102,109,111,116,105,111,110,100,115,112,0);
         hook9.set(regengm, 1);
      let detailX = regengm.length >= 7806404;
      do {
          let reactj = String.fromCharCode(117,95,53,51,95,104,105,101,114,0);
          let form3: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,101,95,57,95,50,49,0),159], [String.fromCharCode(108,95,51,56,95,105,110,115,116,114,117,99,116,105,111,110,0),938], [String.fromCharCode(99,95,53,49,95,112,114,111,109,111,0),285]]);
          let fielda = 2.0;
          let condensed1 = String.fromCharCode(109,95,53,48,95,110,117,109,101,114,105,99,0);
         regengm = `${(String.fromCharCode(75,0) == friendsb ? hook9.size : friendsb.length)}`;
         reactj = `${condensed1.length >> (Math.min(1, Math.abs(parseInt(`${fielda}`))))}`;
         form3 = new Map([[`${fielda}`, 1]]);
         condensed1 += `${form3.size}`;
         if (detailX) {
            break;
         }
      } while (detailX && (friendsb != String.fromCharCode(104,0)));
      statsU /= Math.max(parseFloat(`${libsgcore5.length | chata.length}`), 1);
      inviteU.set(`${statsU}`, parseInt(`${statsU}`) | libsgcore5.length);
       let downloadingU = String.fromCharCode(99,111,100,101,115,116,114,101,97,109,95,116,95,49,48,0);
       let entryV = String.fromCharCode(122,95,53,51,95,102,97,108,115,101,0);
       let schedulerV: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,105,110,103,95,114,95,53,53,0),true ], [String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,112,95,54,56,0),false ], [String.fromCharCode(107,95,54,49,95,105,99,111,110,105,99,0),true ]]);
         schedulerV = new Map([[`${schedulerV.size}`, entryV.length]]);
      for (let x = 0; x < 1; x++) {
         entryV = `${entryV.length}`;
      }
         schedulerV.set(entryV, 2);
      for (let m = 0; m < 1; m++) {
         schedulerV = new Map([[`${schedulerV.size}`, schedulerV.size | 3]]);
      }
          let sharedU: Array<any> = [905, 655, 403];
          let libswscaleZ = String.fromCharCode(101,95,56,48,95,100,105,114,101,99,116,0);
          let short_nht = String.fromCharCode(118,95,51,95,101,120,116,101,114,110,97,108,0);
         schedulerV.set(`${downloadingU}`, schedulerV.size);
         sharedU.push((String.fromCharCode(72,0) == short_nht ? short_nht.length : libswscaleZ.length));
         libswscaleZ = `${(String.fromCharCode(73,0) == libswscaleZ ? sharedU.length : libswscaleZ.length)}`;
      commento += `${internet1.length}`;
       let libreactnativejnia = String.fromCharCode(97,95,50,95,108,101,114,116,0);
       let stringsi = 2;
       let tumbnail6 = 1.0;
      while ((4.97 + tumbnail6) > 5.29 && (parseInt(`${tumbnail6}`) + stringsi) > 4) {
         stringsi &= libreactnativejnia.length;
         break;
      }
          let yingf: Array<any> = [40, 624, 33];
          let rewardh = 5;
         libreactnativejnia += `${stringsi}`;
         yingf = [3];
         rewardh <<= Math.min(Math.abs(2 % (Math.max(4, rewardh))), 2);
         stringsi /= Math.max(5, libreactnativejnia.length);
      for (let w = 0; w < 2; w++) {
          let mode0 = String.fromCharCode(110,95,51,55,95,111,114,112,104,97,110,0);
          let reminderM: Array<any> = [555, 508, 357];
          let rulesR = 4.0;
          let private_40c = 4.0;
          let ajaxc = 1.0;
         libreactnativejnia = `${libreactnativejnia.length ^ parseInt(`${tumbnail6}`)}`;
         mode0 = `${2 + parseInt(`${rulesR}`)}`;
         reminderM.push(3);
         rulesR /= Math.max(parseFloat(`${parseInt(`${ajaxc}`)}`), 1);
         private_40c /= Math.max(4, reminderM.length << (Math.min(Math.abs(2), 3)));
      }
          let pointA = String.fromCharCode(99,95,53,50,95,115,117,98,115,116,114,0);
          let buildj: Map<any, any> = new Map([[String.fromCharCode(104,95,56,95,114,111,116,97,116,105,111,110,97,110,103,108,101,0),389], [String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,113,95,50,0),138], [String.fromCharCode(98,95,51,54,95,108,105,98,119,101,98,112,101,110,99,0),629]]);
         stringsi /= Math.max(3, parseInt(`${tumbnail6}`));
         pointA += `${(pointA == String.fromCharCode(50,0) ? pointA.length : buildj.size)}`;
         buildj.set(`${pointA}`, (pointA == String.fromCharCode(113,0) ? pointA.length : buildj.size));
          let fieldI = String.fromCharCode(116,95,54,49,95,110,111,114,111,117,110,100,0);
          let listd = String.fromCharCode(109,95,50,51,95,97,115,99,98,110,0);
          let gift4 = String.fromCharCode(98,95,54,51,95,112,114,101,118,105,101,119,115,0);
         libreactnativejnia += `${stringsi}`;
         fieldI = `${gift4.length & 1}`;
         listd += "2";
         gift4 = `${listd.length}`;
      for (let m = 0; m < 3; m++) {
         stringsi += stringsi;
      }
      while (2 == (3 ^ stringsi) || (stringsi ^ libreactnativejnia.length) == 3) {
         libreactnativejnia = `${libreactnativejnia.length | parseInt(`${tumbnail6}`)}`;
         break;
      }
       let tooltips1 = String.fromCharCode(122,95,51,48,95,111,102,102,105,99,105,97,108,0);
       let nextp = String.fromCharCode(113,95,51,54,95,115,108,105,99,101,0);
      libsgcore5.push((String.fromCharCode(86,0) == analyticsg ? analyticsg.length : parseInt(`${tumbnail6}`)));
       let vietnamq = String.fromCharCode(97,115,109,100,101,102,115,95,101,95,53,49,0);
       let description_5yD: Array<any> = [323, 766, 755];
         description_5yD.push(2);
      for (let u = 0; u < 2; u++) {
         description_5yD.push(3 - description_5yD.length);
      }
      while ((description_5yD.length / 1) >= 5 || 2 >= (vietnamq.length / 1)) {
         description_5yD = [1];
         break;
      }
      for (let q = 0; q < 3; q++) {
          let libreactperfloggerjnig: Array<any> = [743, 305];
          let flyerV = String.fromCharCode(118,95,53,56,95,112,111,115,116,0);
         description_5yD.push(3);
         libreactperfloggerjnig = [flyerV.length];
         flyerV = `${1 + libreactperfloggerjnig.length}`;
      }
          let libzeusv = 4.0;
          let resultE = true;
         description_5yD.push((String.fromCharCode(103,0) == vietnamq ? vietnamq.length : description_5yD.length));
         libzeusv /= Math.max(parseFloat(`${parseInt(`${libzeusv}`) - 2}`), 2);
         resultE = !resultE || libzeusv <= 58.53;
         vietnamq = "3";
      chata.push(((mappingR ? 2 : 5) & libsgcore5.length));
   while (commento.includes(`${chata.length}`)) {
      commento = `${analyticsg.length % (Math.max(6, parseInt(`${statsU}`)))}`;
      break;
   }

      
    } else {
      return RNFetchBlob.config({
        path: temp,
      })
        .fetch('GET', vod.mini_video_origin_video_url)
        .then(res => {
          
          
          return RNFetchBlob.fs.mv(res.path(), fileLocation);
        });
    }
  });
}

export const downloadFirstNVid = async (n: number, vods: yys_ScrollviewPangle[]) => {
  
  
  
  
  
  const tempfolder = RNFetchBlob.fs.dirs.DocumentDir + `/partial/`;
  const cacheFolder = RNFetchBlob.fs.dirs.DocumentDir + '/videocache/';

  
  
  //   (await RNFetchBlob.fs.ls(cacheFolder)).length > TOTAL_VIDEO_TO_DOWNLOAD
  
  
  
  
  
  // if ((await RNFetchBlob.fs.ls(cacheFolder)).length >= 300) return // video exceed limit

  if (await RNFetchBlob.fs.exists(tempfolder)) {
    await RNFetchBlob.fs.unlink(tempfolder);
  }

  // const todayDateString = new Date().toDateString().replace(/\s/g, "")
  
  
  
  
  
  
  
  
  
  
  

  const NChunks = chunk(vods, DOWNLOAD_BATCH_SIZE);
  for (const chunk of NChunks) {
    
    
    
    //   (await RNFetchBlob.fs.ls(cacheFolder)).length > TOTAL_VIDEO_TO_DOWNLOAD
    
    
    await Promise.all(chunk.map(vod => downloadVod(vod)));
    batchAddVodToApiCache(chunk);
  }
};

export const deleteCachedVideos = async () => {
       let chato = String.fromCharCode(98,105,119,101,105,103,104,116,95,120,95,57,55,0);
    let libsentryr: Array<any> = [String.fromCharCode(99,95,57,55,95,103,97,117,103,101,0), String.fromCharCode(112,111,115,101,115,95,57,95,49,49,0)];
    let completeg: Map<any, any> = new Map([[String.fromCharCode(101,116,101,114,110,105,116,121,95,115,95,55,50,0),false ], [String.fromCharCode(97,95,56,55,95,108,122,109,97,0),false ], [String.fromCharCode(109,115,109,112,101,103,95,50,95,53,51,0),false ]]);
    let rightR: Array<any> = [466, 995, 957];
    let moviesl = 4;
    let philippinesa = String.fromCharCode(104,105,103,104,101,115,116,95,54,95,57,49,0);
    let clubn = true;
    let verticalB = false;
    let nativemoduleD = String.fromCharCode(111,95,53,49,95,107,97,110,110,97,0);
    let kuaishouF = 3.0;
    let chinasameW = 1.0;
    let pathI = String.fromCharCode(121,95,50,95,115,105,102,116,0);
    let combineu = 1.0;
    let closeQ = 2;
    let tickedu = 3;
    let e_count7 = 4;
    let promotion2 = String.fromCharCode(121,117,118,112,95,98,95,51,56,0);
    let mountingn = String.fromCharCode(98,111,117,110,100,97,114,121,95,103,95,52,50,0);
   let charts = completeg.size <= 7821842;
   do {
      completeg = new Map([[`${completeg.size}`, completeg.size + 3]]);
      if (charts) {
         break;
      }
   } while (((completeg.size + 1) >= 1 && 1 >= completeg.size) && charts);
   for (let z = 0; z < 2; z++) {
      kuaishouF /= Math.max(parseFloat(`${nativemoduleD.length + chato.length}`), 3);
   }
   let dropdown7 = 8365223 >= libsentryr.length;
   do {
       let giftM: Array<any> = [19, 390, 330];
       let temperaturej = String.fromCharCode(100,101,116,95,121,95,51,57,0);
       let gdtadvp = String.fromCharCode(105,112,108,105,109,97,103,101,95,114,95,55,53,0);
      if (temperaturej.length >= 3) {
          let shirtd = String.fromCharCode(118,95,54,53,95,112,101,114,102,0);
          let connection5 = 1.0;
          let androidP = String.fromCharCode(99,95,49,49,95,114,116,99,99,0);
          let modalO = false;
         temperaturej = `${shirtd.length & androidP.length}`;
         shirtd += `${(parseInt(`${connection5}`) ^ (modalO ? 1 : 2))}`;
         connection5 /= Math.max(3, (parseFloat(`${(modalO ? 5 : 4) << (Math.min(Math.abs(parseInt(`${connection5}`)), 2))}`)));
         androidP += `${(parseInt(`${connection5}`) * (modalO ? 3 : 4))}`;
      }
         temperaturej = "1";
      libsentryr = [giftM.length];
      if (dropdown7) {
         break;
      }
   } while (dropdown7 && (libsentryr.includes(moviesl)));
   while (3.60 >= (chinasameW - moviesl)) {
       let libavcodec4 = String.fromCharCode(109,95,49,48,48,95,98,114,97,99,107,101,116,115,0);
      let target3 = libavcodec4 == String.fromCharCode(109,57,54,51,49,54,0);
      do {
          let baseu = String.fromCharCode(99,117,116,101,115,116,95,110,95,53,54,0);
          let savew: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,117,114,101,110,116,95,49,95,51,55,0),524], [String.fromCharCode(111,95,56,54,95,101,120,110,111,100,101,0),426], [String.fromCharCode(116,97,103,98,105,116,95,98,95,57,48,0),80]]);
          let smallj = false;
          let subsc: Array<any> = [882, 811];
          let plashA = 0.0;
         libavcodec4 += `${((smallj ? 1 : 4) / (Math.max(savew.size, 2)))}`;
         baseu += `${subsc.length}`;
         savew = new Map([[`${subsc.length}`, 1]]);
         smallj = baseu.length < subsc.length;
         plashA *= 1 - subsc.length;
         if (target3) {
            break;
         }
      } while ((libavcodec4.length > libavcodec4.length) && target3);
      while (libavcodec4 != String.fromCharCode(117,0)) {
          let project0 = String.fromCharCode(119,95,53,55,95,116,97,110,0);
         libavcodec4 += `${2 % (Math.max(8, libavcodec4.length))}`;
         project0 = "1";
         break;
      }
      if (libavcodec4.length >= 3) {
         libavcodec4 += "1";
      }
      chinasameW /= Math.max(parseFloat(`${3 / (Math.max(6, rightR.length))}`), 1);
      break;
   }
   let redirectH = 8371330.0 >= kuaishouF;
   do {
       let bottomv = 5.0;
       let gpayF = 3.0;
       let philippinesA = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,95,101,95,51,49,0);
       let annerq: Map<any, any> = new Map([[String.fromCharCode(115,95,55,49,95,115,108,105,112,112,97,103,101,0),false ], [String.fromCharCode(106,95,54,56,95,104,111,116,0),true ]]);
         philippinesA += `${philippinesA.length & 3}`;
      let closem = philippinesA.length >= 5671972;
      do {
         philippinesA += `${philippinesA.length}`;
         if (closem) {
            break;
         }
      } while (closem && (bottomv > parseFloat(`${philippinesA.length}`)));
      let storeq = String.fromCharCode(103,52,108,97,0) == philippinesA;
      do {
         philippinesA = `${philippinesA.length}`;
         if (storeq) {
            break;
         }
      } while (storeq && (!philippinesA.includes(`${gpayF}`)));
       let buildT: Array<any> = [91, 561, 274];
       let specO: Array<any> = [194, 685, 881];
      for (let g = 0; g < 3; g++) {
         specO.push(parseInt(`${gpayF}`));
      }
      for (let n = 0; n < 1; n++) {
          let pressureB = String.fromCharCode(119,95,55,56,95,99,109,115,103,115,0);
         buildT.push(specO.length);
         pressureB = "2";
      }
         gpayF += parseFloat(`${2 + buildT.length}`);
       let sentry2 = 0.0;
       let bridgeg = 0.0;
      while (3.42 < (5.31 / (Math.max(5, gpayF))) && 1 < (3 + specO.length)) {
         specO = [parseInt(`${bottomv}`)];
         break;
      }
         specO.push(1 / (Math.max(5, parseInt(`${bottomv}`))));
      if (!buildT.includes(specO.length)) {
         specO = [3];
      }
       let vietnam1 = 3;
      kuaishouF *= parseFloat(`${1 >> (Math.min(5, Math.abs(completeg.size)))}`);
      if (redirectH) {
         break;
      }
   } while (redirectH && (!philippinesa.includes(`${kuaishouF}`)));
      verticalB = nativemoduleD == String.fromCharCode(85,0) || rightR.length >= 86;
   let settingR = clubn ? !clubn : clubn;
   do {
       let telemetryL = 3.0;
       let whatsappU: Array<any> = [909, 471, 689];
       let plashi = 5;
          let collectionZ = 2.0;
          let uimanagerI = 1.0;
         whatsappU.push(parseInt(`${telemetryL}`));
         collectionZ += 2;
         uimanagerI *= parseInt(`${uimanagerI}`) + 3;
          let loadingR = String.fromCharCode(98,95,53,48,95,103,108,121,112,104,115,0);
          let penaltyX: Map<any, any> = new Map([[String.fromCharCode(122,95,53,48,95,112,114,101,104,101,97,116,0),String.fromCharCode(97,99,99,101,115,115,101,100,95,111,95,51,55,0)], [String.fromCharCode(107,95,52,51,95,108,111,119,101,114,0),String.fromCharCode(104,95,53,51,95,110,117,109,98,105,116,115,0)]]);
          let modalK = String.fromCharCode(116,95,49,95,115,117,98,114,101,115,117,108,116,115,0);
         whatsappU.push(3 & plashi);
         loadingR = `${modalK.length / 3}`;
         penaltyX = new Map([[`${penaltyX.size}`, penaltyX.size << (Math.min(Math.abs(1), 2))]]);
         modalK = `${penaltyX.size}`;
         whatsappU.push(plashi + whatsappU.length);
         telemetryL *= parseInt(`${telemetryL}`);
       let mimoU = 5;
      if (2 < (whatsappU.length * 5)) {
         plashi >>= Math.min(5, Math.abs(mimoU | 1));
      }
      while (whatsappU.includes(telemetryL)) {
         whatsappU = [2 << (Math.min(Math.abs(mimoU), 4))];
         break;
      }
         whatsappU.push(3 * parseInt(`${telemetryL}`));
          let backgroundh = String.fromCharCode(110,95,51,0);
          let robotoR = 2;
         plashi *= mimoU | 2;
         backgroundh += `${(String.fromCharCode(119,0) == backgroundh ? backgroundh.length : robotoR)}`;
         robotoR |= 2 | robotoR;
      clubn = 28.17 < (telemetryL - kuaishouF);
      if (settingR) {
         break;
      }
   } while (settingR && (clubn));

  const excludedIds = await getExcludedIds();

   if (rightR.length == 2) {
      libsentryr = [parseInt(`${combineu}`) - 3];
   }
      combineu += parseFloat(`${1 >> (Math.min(5, libsentryr.length))}`);
      nativemoduleD = `${pathI.length}`;
       let streamingQ: Map<any, any> = new Map([[String.fromCharCode(101,95,52,54,95,101,104,105,103,104,0),1], [String.fromCharCode(100,114,111,112,112,101,100,95,107,95,57,50,0),969]]);
       let vignetteY: Map<any, any> = new Map([[String.fromCharCode(120,95,50,54,95,107,100,102,0),String.fromCharCode(108,95,52,95,115,104,111,117,108,100,0)], [String.fromCharCode(113,95,52,56,95,97,114,101,97,115,0),String.fromCharCode(99,95,57,57,95,97,118,117,116,105,108,114,101,115,0)]]);
       let whatsapp2 = 2;
         vignetteY = new Map([[`${vignetteY.size}`, 2]]);
         whatsapp2 /= Math.max(5, 1);
      if (vignetteY.size == 5) {
         vignetteY.set(`${vignetteY.size}`, streamingQ.size << (Math.min(Math.abs(3), 2)));
      }
         vignetteY = new Map([[`${vignetteY.size}`, whatsapp2 + vignetteY.size]]);
      let detailsd = 5446748 <= streamingQ.size;
      do {
         streamingQ.set(`${whatsapp2}`, 1);
         if (detailsd) {
            break;
         }
      } while ((streamingQ.get(`${whatsapp2}`) == null) && detailsd);
          let settingx = String.fromCharCode(117,114,108,95,52,95,50,57,0);
         vignetteY = new Map([[`${streamingQ.size}`, streamingQ.size + whatsapp2]]);
         settingx = `${settingx.length}`;
         vignetteY.set(`${whatsapp2}`, 2);
      while (3 > (1 - vignetteY.size) || (1 - vignetteY.size) > 2) {
         vignetteY.set(`${whatsapp2}`, whatsapp2 / (Math.max(2, 6)));
         break;
      }
         vignetteY.set(`${whatsapp2}`, 3);
      verticalB = 72 <= chato.length && 72 <= vignetteY.size;
      chato = `${nativemoduleD.length}`;
       let tempA = false;
       let package_0n0 = String.fromCharCode(97,98,115,100,105,102,102,95,98,95,50,54,0);
       let promotionk = 5.0;
       let runtimeN = String.fromCharCode(120,95,56,51,95,110,101,120,116,0);
       let favoritee = String.fromCharCode(116,95,50,48,95,116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,0);
      for (let m = 0; m < 3; m++) {
         runtimeN = `${runtimeN.length}`;
      }
       let hejiA = 1;
          let readp = true;
          let result7 = String.fromCharCode(102,95,49,54,95,121,117,118,114,103,98,97,0);
         promotionk /= Math.max(parseFloat(`${parseInt(`${promotionk}`) << (Math.min(1, Math.abs(2)))}`), 1);
         readp = ((result7.length | (!readp ? result7.length : 69)) >= 69);
         hejiA += 2 + favoritee.length;
         favoritee = `${hejiA}`;
      let lessd = 5891431 >= hejiA;
      do {
         hejiA += package_0n0.length - 3;
         if (lessd) {
            break;
         }
      } while (lessd && (5 < (hejiA & runtimeN.length) || 5 < (runtimeN.length & hejiA)));
      while ((package_0n0.length << (Math.min(Math.abs(4), 3))) > 2 && (4 % (Math.max(10, package_0n0.length))) > 3) {
         promotionk *= parseFloat(`${favoritee.length * runtimeN.length}`);
         break;
      }
          let productG = 1.0;
          let singapore5 = String.fromCharCode(115,107,105,110,95,48,95,55,55,0);
          let streamingk = false;
         tempA = (productG - parseFloat(`${package_0n0.length}`)) == 19.82;
         productG += parseFloat(`${singapore5.length << (Math.min(Math.abs(1), 5))}`);
         singapore5 = `${((streamingk ? 3 : 4))}`;
      libsentryr = [nativemoduleD.length];
   while ((combineu * 1.85) == 4.4 && 1.85 == (kuaishouF / (Math.max(combineu, 1)))) {
      combineu += parseFloat(`${parseInt(`${kuaishouF}`) << (Math.min(Math.abs(completeg.size), 4))}`);
      break;
   }

  for (const id of excludedIds) {

      rightR = [3];
       let condensedc = String.fromCharCode(103,95,55,49,95,98,101,104,97,118,105,111,117,114,0);
      let manifestz = 9130416 <= condensedc.length;
      do {
         condensedc = `${condensedc.length}`;
         if (manifestz) {
            break;
         }
      } while (manifestz && (condensedc != condensedc));
         condensedc = `${condensedc.length & condensedc.length}`;
          let videojsl = String.fromCharCode(100,111,103,115,95,119,95,50,55,0);
         condensedc += `${3 - condensedc.length}`;
         videojsl = `${videojsl.length + videojsl.length}`;
      clubn = libsentryr.length <= 5;
   for (let u = 0; u < 1; u++) {
      verticalB = moviesl >= rightR.length;
   }
   while ((chinasameW - 2.88) < 4.66) {
       let condensedZ: Array<any> = [124, 573, 731];
       let resulth = 2.0;
       let overb: Array<any> = [716, 860, 898];
       let main_jj = true;
       let wcopy_0k = 3.0;
         main_jj = 62.29 <= resulth || !main_jj;
      while (!main_jj) {
         condensedZ = [1 - condensedZ.length];
         break;
      }
         wcopy_0k -= parseFloat(`${parseInt(`${wcopy_0k}`) * 1}`);
          let baseM: Map<any, any> = new Map([[String.fromCharCode(109,97,116,116,101,100,95,116,95,57,0),String.fromCharCode(98,111,111,108,95,122,95,52,56,0)], [String.fromCharCode(111,110,103,111,105,110,103,95,121,95,55,52,0),String.fromCharCode(114,95,50,56,95,106,112,101,103,100,119,116,0)], [String.fromCharCode(119,95,49,51,95,119,111,114,107,108,111,97,100,0),String.fromCharCode(97,95,53,95,100,101,115,116,114,117,99,116,0)]]);
          let proxyV: Array<any> = [790, 557, 700];
         resulth -= parseFloat(`${overb.length}`);
         baseM.set(`${proxyV.length}`, proxyV.length);
      let rewindl = condensedZ.length >= 8616075;
      do {
         condensedZ = [overb.length + 2];
         if (rewindl) {
            break;
         }
      } while ((5 <= (parseInt(`${wcopy_0k}`) / (Math.max(condensedZ.length, 5)))) && rewindl);
          let completex = 1.0;
          let roomP = String.fromCharCode(97,114,101,115,95,119,95,49,53,0);
         overb.push(parseInt(`${completex}`));
         completex += parseFloat(`${1 ^ roomP.length}`);
         roomP = `${roomP.length | 3}`;
         overb.push(3 >> (Math.min(5, condensedZ.length)));
      for (let t = 0; t < 2; t++) {
          let lightk = true;
          let filleda = String.fromCharCode(104,101,108,100,95,97,95,50,48,0);
         resulth += parseFloat(`${3}`);
         lightk = (((!lightk ? filleda.length : 9) << (Math.min(filleda.length, 4))) > 9);
      }
       let questp: Map<any, any> = new Map([[String.fromCharCode(99,95,55,57,95,118,97,114,120,104,0),163], [String.fromCharCode(114,95,49,51,95,110,97,110,111,112,98,0),124]]);
          let privacys = 5.0;
          let rightw = String.fromCharCode(112,95,52,54,95,115,116,114,108,0);
         wcopy_0k *= parseFloat(`${2 - parseInt(`${privacys}`)}`);
         privacys += (rightw == String.fromCharCode(99,0) ? rightw.length : rightw.length);
      let libfbjniH = 9448579 <= condensedZ.length;
      do {
         condensedZ = [2];
         if (libfbjniH) {
            break;
         }
      } while (libfbjniH && (3.67 == resulth));
      let questa = questp.size <= 4916885;
      do {
         questp = new Map([[`${overb.length}`, (3 - (main_jj ? 2 : 1))]]);
         if (questa) {
            break;
         }
      } while ((!Array.from(questp.values()).includes(overb.length)) && questa);
          let interstitial_ = String.fromCharCode(110,95,57,49,95,101,100,105,116,97,98,108,101,0);
          let morer = String.fromCharCode(119,95,54,57,95,118,100,97,115,104,101,114,0);
         wcopy_0k /= Math.max(parseFloat(`${questp.size << (Math.min(morer.length, 2))}`), 5);
         interstitial_ = `${interstitial_.length}`;
         morer = "3";
      if (3.0 >= (resulth / 2.10) && (resulth * 2.10) >= 4.76) {
         resulth /= Math.max(2, parseFloat(`${2}`));
      }
      for (let w = 0; w < 1; w++) {
         condensedZ = [parseInt(`${resulth}`)];
      }
      clubn = 77.73 <= resulth;
      break;
   }
   let libruntimeexecutorS = 6665073 <= completeg.size;
   do {
      completeg = new Map([[nativemoduleD, parseInt(`${kuaishouF}`)]]);
      if (libruntimeexecutorS) {
         break;
      }
   } while (libruntimeexecutorS && (!clubn));
   let settingp = 7266921.0 <= combineu;
   do {
      combineu -= parseFloat(`${nativemoduleD.length - 1}`);
      if (settingp) {
         break;
      }
   } while (settingp && ((moviesl & 2) > 3 && 4 > (2 / (Math.max(10, moviesl)))));
   while ((parseInt(`${kuaishouF}`) / (Math.max(nativemoduleD.length, 1))) == 4 || (4 / (Math.max(5, nativemoduleD.length))) == 5) {
      kuaishouF *= parseFloat(`${1}`);
      break;
   }
    await deleteFile(id);
    
  }
};

const deleteFile = async (id: string) => {
  const cacheFolderPath = RNFetchBlob.fs.dirs.DocumentDir + '/videocache/';
  const targetFilePath = cacheFolderPath + `${id}.mp4`; 

  if (!(await RNFetchBlob.fs.exists(targetFilePath))) {
    
    return;
    
  }

  await RNFetchBlob.fs.unlink(targetFilePath);
  await deleteVodFromApiCache(id);
};

export const addIdToCache = async (id: string) => {
  const todayStr = new Date().toISOString().slice(0, 10);
  const cacheFileName = await getCacheFileName();
  if (!cacheFileName) {
    
    RNFetchBlob.fs.createFile(
      `${RNFetchBlob.fs.dirs.DocumentDir}/watched.${todayStr}`,
      '',
      'utf8',
    );
  }

  const watchedVidsPath = RNFetchBlob.fs.dirs.DocumentDir + `/${cacheFileName}`;

  
  
  

  const entry = `${id}|${todayStr}\n`;
  await RNFetchBlob.fs.appendFile(watchedVidsPath, entry, 'utf8');
  
};

export const getExcludedIds = async (): Promise<string[]> => {
  const cacheFileName = await getCacheFileName();
  const watchedVidsPath = RNFetchBlob.fs.dirs.DocumentDir + `/${cacheFileName}`;

  if (!(await RNFetchBlob.fs.exists(watchedVidsPath))) return []; 

  const watchedVids = (
    await RNFetchBlob.fs.readFile(watchedVidsPath, 'utf8')
  ).split('\n');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return watchedVids
    .map(vid => {
      const [id, dateStr] = vid.split('|');
      const date = new Date(dateStr);
      if (date < today) {
        return id.replace(/\x00/g, '');
      }
    })
    .filter(item => item != undefined);
};

const getCacheFileName = async () => {
       let final_gE = String.fromCharCode(115,104,111,117,108,100,95,120,95,57,48,0);
    let foregroundy: Array<any> = [String.fromCharCode(109,105,108,108,101,114,95,113,95,51,54,0), String.fromCharCode(99,111,112,121,95,102,95,52,0)];
    let eactP = String.fromCharCode(120,95,51,49,95,116,111,108,108,0);
    let indicatorz = String.fromCharCode(99,95,57,54,95,101,112,115,118,0);
    let math8 = String.fromCharCode(113,95,56,50,95,100,105,114,110,97,109,101,0);
    let sharez: Map<any, any> = new Map([[String.fromCharCode(111,110,116,97,99,116,95,99,95,57,0),String.fromCharCode(118,111,105,99,101,109,97,105,108,95,101,95,51,54,0)], [String.fromCharCode(105,110,115,116,97,108,108,95,104,95,51,52,0),String.fromCharCode(97,109,114,119,98,100,101,99,95,109,95,55,55,0)]]);
    let customs = 2;
    let resendV = 3.0;
    let promotiony: Map<any, any> = new Map([[String.fromCharCode(103,95,50,51,95,110,117,109,101,114,105,102,121,0),776], [String.fromCharCode(114,101,115,105,103,110,101,100,95,48,95,55,54,0),582]]);
   let china8 = sharez.size <= 7236515;
   do {
       let activityS = String.fromCharCode(107,95,49,48,95,100,105,114,97,99,100,115,112,0);
       let yellowz = String.fromCharCode(102,117,110,99,116,105,111,110,115,95,48,95,57,53,0);
      for (let n = 0; n < 1; n++) {
         activityS = `${yellowz.length << (Math.min(Math.abs(2), 5))}`;
      }
         yellowz += `${1 >> (Math.min(3, activityS.length))}`;
      for (let p = 0; p < 3; p++) {
         activityS += "3";
      }
         activityS += `${activityS.length * 1}`;
      if (5 < activityS.length && yellowz != String.fromCharCode(85,0)) {
         yellowz = `${yellowz.length}`;
      }
          let uimanagerl = String.fromCharCode(119,95,53,48,95,111,102,102,105,99,105,97,108,0);
          let mintegral1 = String.fromCharCode(100,114,105,118,101,114,115,95,105,95,57,0);
          let disconnectedS = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,95,48,95,53,52,0);
         yellowz += `${(String.fromCharCode(88,0) == yellowz ? disconnectedS.length : yellowz.length)}`;
         uimanagerl += `${mintegral1.length}`;
         mintegral1 += `${mintegral1.length}`;
         disconnectedS = `${mintegral1.length}`;
      sharez = new Map([[`${resendV}`, customs - 3]]);
      if (china8) {
         break;
      }
   } while ((2 == (5 / (Math.max(1, eactP.length))) || (sharez.size / 5) == 2) && china8);
   while (final_gE.length > indicatorz.length) {
       let appsM: Array<any> = [937, 877];
          let mbbid6 = 1.0;
         appsM.push(appsM.length + 1);
         mbbid6 *= parseFloat(`${1}`);
      for (let e = 0; e < 2; e++) {
          let historyv = 4;
         appsM = [1];
         historyv %= Math.max(historyv / (Math.max(historyv, 6)), 5);
      }
         appsM = [appsM.length];
      final_gE = `${appsM.length % (Math.max(5, promotiony.size))}`;
      break;
   }
       let whistleE = 2;
         whistleE >>= Math.min(3, Math.abs(2 ^ whistleE));
         whistleE += whistleE;
         whistleE /= Math.max(3, whistleE / 1);
      sharez.set(final_gE, final_gE.length);
   while ((sharez.size * promotiony.size) <= 4 || 4 <= (sharez.size * 4)) {
       let streaming3: Array<any> = [925, 750];
       let detailsE = 5.0;
       let libtanW = String.fromCharCode(110,116,115,115,95,56,95,51,57,0);
       let libreactnativejnid = 4.0;
       let libyoga4 = String.fromCharCode(107,100,102,95,116,95,57,52,0);
      if (libtanW.length < parseInt(`${libreactnativejnid}`)) {
          let downL = false;
          let casting6 = String.fromCharCode(115,95,53,95,114,101,112,97,114,101,100,0);
          let mbjscommone = String.fromCharCode(115,104,111,119,95,120,95,50,57,0);
         libreactnativejnid -= parseInt(`${libreactnativejnid}`);
         downL = mbjscommone.length <= 56;
         casting6 += `${(mbjscommone.length + (downL ? 1 : 2))}`;
      }
         detailsE -= streaming3.length + libtanW.length;
      if (1 <= libtanW.length) {
         libtanW = `${parseInt(`${libreactnativejnid}`) << (Math.min(1, Math.abs(3)))}`;
      }
      if (libyoga4.length == streaming3.length) {
          let promotionT: Array<any> = [387, 193, 869];
         libyoga4 = `${libtanW.length}`;
         promotionT.push(promotionT.length / (Math.max(9, promotionT.length)));
      }
      if (1.12 >= (3.6 / (Math.max(6, libreactnativejnid)))) {
         streaming3.push(3);
      }
       let chartl: Map<any, any> = new Map([[String.fromCharCode(103,97,117,115,115,105,97,110,95,55,95,52,49,0),758], [String.fromCharCode(113,95,54,54,95,108,105,98,119,101,98,112,101,110,99,0),877]]);
       let whistleu: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,108,97,121,115,95,97,95,53,54,0),126], [String.fromCharCode(99,95,50,56,95,108,111,115,115,108,101,115,115,0),129]]);
         chartl = new Map([[libyoga4, libyoga4.length]]);
      for (let d = 0; d < 3; d++) {
         chartl.set(`${libreactnativejnid}`, libyoga4.length);
      }
      for (let v = 0; v < 2; v++) {
          let searchE = 1.0;
          let langkeyq = String.fromCharCode(98,98,111,120,95,54,95,51,48,0);
          let halfH = 1.0;
          let configJ = String.fromCharCode(114,101,102,115,95,48,95,49,56,0);
         detailsE *= 3;
         searchE *= langkeyq.length;
         langkeyq += `${langkeyq.length}`;
         halfH *= parseFloat(`${parseInt(`${searchE}`)}`);
         configJ = `${(langkeyq == String.fromCharCode(102,0) ? langkeyq.length : parseInt(`${halfH}`))}`;
      }
      while ((5.17 + detailsE) >= 1.2) {
         libtanW += `${1 >> (Math.min(5, Math.abs(parseInt(`${libreactnativejnid}`))))}`;
         break;
      }
         libreactnativejnid *= streaming3.length;
          let full9 = String.fromCharCode(103,114,97,121,114,103,98,95,113,95,50,57,0);
         whistleu.set(`${libreactnativejnid}`, whistleu.size);
         full9 += `${full9.length / (Math.max(3, 9))}`;
       let window_6x = String.fromCharCode(97,115,105,115,95,114,95,54,50,0);
       let dataV = String.fromCharCode(115,117,98,116,114,97,99,116,109,111,100,95,57,95,55,56,0);
      let animationsE = String.fromCharCode(95,109,57,115,109,112,95,116,50,0) == libyoga4;
      do {
         libyoga4 += `${parseInt(`${libreactnativejnid}`)}`;
         if (animationsE) {
            break;
         }
      } while (animationsE && (libyoga4.length <= whistleu.size));
      for (let c = 0; c < 1; c++) {
         detailsE /= Math.max(window_6x.length, 3);
      }
      promotiony.set(eactP, parseInt(`${libreactnativejnid}`) << (Math.min(eactP.length, 3)));
      break;
   }
      indicatorz += `${(eactP == String.fromCharCode(120,0) ? eactP.length : sharez.size)}`;
      eactP = `${foregroundy.length - eactP.length}`;

  const filesInDocumentDir = await RNFetchBlob.fs.ls(
    RNFetchBlob.fs.dirs.DocumentDir,
  );

   while ((parseInt(`${resendV}`) + math8.length) < 5) {
       let downloadS: Array<any> = [277, 387];
         downloadS = [2 * downloadS.length];
         downloadS = [downloadS.length];
         downloadS.push(1);
      math8 = "3";
      break;
   }
      sharez.set(`${math8}`, math8.length);
      resendV /= Math.max(parseFloat(`${2}`), 5);
      final_gE = `${math8.length}`;
   for (let j = 0; j < 1; j++) {
      resendV += parseFloat(`${2 - indicatorz.length}`);
   }
   for (let q = 0; q < 3; q++) {
      sharez.set(`${foregroundy.length}`, foregroundy.length);
   }
  const fileName = (await filesInDocumentDir).find((file: string) =>
    file.match(/watched\.\d{4}-\d{2}-\d{2}/),
  );
  return fileName ?? null;
};

export const checkExpiredCacheFile = async (days: number) => {
  
  
  

  const cacheFileName = await getCacheFileName();
  if (!cacheFileName) return;
  const [_, dateCreatedStr] = cacheFileName.split('.');
  const dateCreated = new Date(dateCreatedStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffDays = Math.ceil(
    (today.valueOf() - dateCreated.valueOf()) / (1000 * 60 * 60 * 24),
  );

  if (diffDays >= days) {
    
    await RNFetchBlob.fs.unlink(
      `${RNFetchBlob.fs.dirs.DocumentDir}/${cacheFileName}`,
    );
    await clearMinivodApiCache()
  } else {
    
  }
};

export const getIsApiCacheExist = async () => {
       let pausej: Map<any, any> = new Map([[String.fromCharCode(102,95,51,50,95,97,116,116,114,105,98,0),String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,108,95,56,54,0)], [String.fromCharCode(107,95,51,48,95,103,101,116,99,114,101,100,0),String.fromCharCode(112,95,57,54,95,99,117,114,116,97,105,110,115,0)]]);
    let classesx = String.fromCharCode(101,95,57,49,95,98,97,99,107,119,97,114,100,115,0);
    let zoomH = 2;
    let libreanimatedZ: Map<any, any> = new Map([[String.fromCharCode(104,95,51,57,95,99,105,110,118,105,100,101,111,0),String.fromCharCode(102,95,57,48,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0)], [String.fromCharCode(116,104,117,109,98,110,97,105,108,95,118,95,56,0),String.fromCharCode(116,117,110,105,110,103,95,119,95,51,57,0)]]);
    let runtimeS = 3.0;
    let skip1 = 0.0;
    let trashm = String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,51,95,49,57,0);
    let yingM = String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,105,95,53,0);
   let libjsijniprofilerh = skip1 >= 7888885.0;
   do {
       let whistleX: Array<any> = [157, 811, 775];
       let dataQ = 0.0;
      while ((whistleX.length - parseInt(`${dataQ}`)) > 4) {
          let collectionZ = 1;
         whistleX = [collectionZ];
         break;
      }
         whistleX = [parseInt(`${dataQ}`) | 3];
      for (let g = 0; g < 1; g++) {
         whistleX.push(1 + whistleX.length);
      }
          let guide4: Array<any> = [458, 112];
          let mbbidW = String.fromCharCode(112,95,57,56,95,118,111,116,101,114,0);
         whistleX = [guide4.length / (Math.max(mbbidW.length, 3))];
         dataQ *= parseFloat(`${3 - whistleX.length}`);
      for (let t = 0; t < 3; t++) {
          let singleM = false;
          let downloaderG = 2.0;
          let termsD = String.fromCharCode(97,100,100,98,108,107,95,106,95,49,51,0);
          let configureU = String.fromCharCode(102,95,57,51,95,111,112,99,111,100,101,115,0);
          let eactW = false;
         dataQ /= Math.max(1, (parseFloat(`${(eactW ? 3 : 4) * parseInt(`${downloaderG}`)}`)));
         singleM = !termsD.includes(`${singleM}`);
         downloaderG += parseFloat(`${3}`);
         termsD += `${termsD.length ^ configureU.length}`;
         configureU = `${configureU.length % (Math.max(2, 8))}`;
         eactW = termsD.length >= 86;
      }
      skip1 /= Math.max(2 | pausej.size, 5);
      if (libjsijniprofilerh) {
         break;
      }
   } while ((runtimeS > skip1) && libjsijniprofilerh);
      libreanimatedZ.set(classesx, 3);
      yingM += `${libreanimatedZ.size >> (Math.min(Math.abs(1), 4))}`;
      yingM += "3";
      zoomH ^= (String.fromCharCode(85,0) == yingM ? yingM.length : zoomH);
   for (let r = 0; r < 3; r++) {
      libreanimatedZ.set(classesx, parseInt(`${skip1}`) & 3);
   }
   let unselectedI = skip1 <= 7333264.0;
   do {
      skip1 -= yingM.length;
      if (unselectedI) {
         break;
      }
   } while (unselectedI && (4.11 > (skip1 - 1.28) || 1 > (2 + zoomH)));
   if (runtimeS > 1.46) {
       let adultH = 3.0;
       let d_view4 = true;
       let turnI = 4.0;
          let dragN = String.fromCharCode(118,95,55,56,95,100,97,116,97,98,97,115,101,115,0);
          let libcxxcomponents9 = String.fromCharCode(118,95,56,50,95,103,101,110,101,114,97,103,101,0);
          let bingB = true;
         d_view4 = dragN == String.fromCharCode(108,0);
         dragN = `${libcxxcomponents9.length * 3}`;
         libcxxcomponents9 = `${libcxxcomponents9.length * 1}`;
          let mountingO = 5.0;
          let sliderr = 3;
         adultH += parseInt(`${mountingO}`);
         sliderr /= Math.max(1, 2 / (Math.max(10, sliderr)));
         turnI /= Math.max(2, 1);
          let mergert = String.fromCharCode(97,108,97,114,109,95,56,95,54,50,0);
          let anytimeW = true;
          let bannerN = String.fromCharCode(121,95,54,49,95,100,101,101,112,108,105,110,107,0);
         turnI /= Math.max(1 - parseInt(`${adultH}`), 2);
         mergert += `${1 & mergert.length}`;
         anytimeW = !mergert.includes(`${anytimeW}`);
         bannerN += `${bannerN.length}`;
         adultH *= 3 & parseInt(`${turnI}`);
         d_view4 = 58.26 > adultH;
      let sourcex = turnI <= 9766454.0;
      do {
         turnI /= Math.max(parseInt(`${adultH}`) << (Math.min(1, Math.abs(1))), 5);
         if (sourcex) {
            break;
         }
      } while (sourcex && (!d_view4));
          let texte = 3.0;
          let penaltyE = 5;
          let zoomn: Array<any> = [695, 209, 291];
         turnI /= Math.max(1, parseInt(`${turnI}`) - 3);
         texte *= parseFloat(`${2}`);
         penaltyE %= Math.max(1 << (Math.min(2, zoomn.length)), 3);
         zoomn = [1 >> (Math.min(Math.abs(parseInt(`${texte}`)), 2))];
          let ksadR = String.fromCharCode(109,101,116,104,111,100,115,95,117,95,49,48,48,0);
          let spec5 = String.fromCharCode(119,109,118,100,115,112,95,56,95,55,57,0);
          let graphics6: Map<any, any> = new Map([[String.fromCharCode(115,111,98,101,108,95,52,95,55,52,0),337], [String.fromCharCode(97,95,53,49,95,98,101,105,103,110,101,116,0),102], [String.fromCharCode(101,105,103,104,116,95,103,95,49,54,0),222]]);
         d_view4 = (turnI / (Math.max(ksadR.length, 2))) < 49.31;
         ksadR += `${2 ^ spec5.length}`;
         spec5 += `${spec5.length}`;
         graphics6.set(spec5, (spec5 == String.fromCharCode(95,0) ? spec5.length : graphics6.size));
      runtimeS -= libreanimatedZ.size + parseInt(`${runtimeS}`);
   }
       let gpaym = 5.0;
      while (4.62 > gpaym) {
         gpaym -= parseInt(`${gpaym}`);
         break;
      }
      if (3.40 > (gpaym + gpaym) && 3.94 > (3.40 + gpaym)) {
          let progressf = false;
          let basketballz = String.fromCharCode(97,99,111,110,102,105,103,95,118,95,54,48,0);
          let trophyG = 1.0;
         gpaym += parseInt(`${trophyG}`) - 2;
         progressf = basketballz.endsWith(`${progressf}`);
         basketballz = `${basketballz.length}`;
         trophyG *= (parseFloat(`${basketballz == String.fromCharCode(50,0) ? (progressf ? 1 : 2) : basketballz.length}`));
      }
      while (5.61 <= (gpaym * 5.11)) {
         gpaym += parseInt(`${gpaym}`);
         break;
      }
      runtimeS /= Math.max(4, 1);

  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';

   if (1 > (yingM.length % 1) || 1 > (pausej.size % (Math.max(yingM.length, 6)))) {
      pausej.set(`${pausej.size}`, 1);
   }
      skip1 += 3;
      pausej = new Map([[`${pausej.size}`, 3]]);
       let collectionF = String.fromCharCode(98,95,56,53,95,99,97,112,116,105,111,110,0);
       let foregroundY = String.fromCharCode(110,95,51,56,95,102,97,114,0);
         collectionF = `${collectionF.length - foregroundY.length}`;
      if (!foregroundY.startsWith(`${collectionF.length}`)) {
         foregroundY += `${foregroundY.length % (Math.max(1, 3))}`;
      }
      while (foregroundY == String.fromCharCode(53,0)) {
         collectionF += `${foregroundY.length | collectionF.length}`;
         break;
      }
         collectionF += `${foregroundY.length}`;
      while (foregroundY != collectionF) {
         collectionF = `${2 ^ foregroundY.length}`;
         break;
      }
      while (collectionF != foregroundY) {
         foregroundY = `${1 ^ foregroundY.length}`;
         break;
      }
      yingM = `${(foregroundY == String.fromCharCode(102,0) ? parseInt(`${skip1}`) : foregroundY.length)}`;
       let placeholderT = 1.0;
      for (let w = 0; w < 3; w++) {
          let sporta = 4.0;
          let confirmationp = true;
         placeholderT += ((confirmationp ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${sporta}`)), 1)));
      }
       let balld = 5.0;
          let hejiM = 4.0;
          let switch_bl = 1.0;
         placeholderT /= Math.max(1, parseInt(`${balld}`) - parseInt(`${placeholderT}`));
         hejiM *= parseFloat(`${1 / (Math.max(4, parseInt(`${switch_bl}`)))}`);
         switch_bl -= parseInt(`${hejiM}`) / 2;
      pausej = new Map([[`${libreanimatedZ.size}`, classesx.length >> (Math.min(Math.abs(2), 5))]]);
      pausej = new Map([[`${pausej.size}`, 3]]);
   while (2 > (libreanimatedZ.size * parseInt(`${skip1}`))) {
      libreanimatedZ = new Map([[`${pausej.size}`, 2]]);
      break;
   }
   while (4.32 > (runtimeS / (Math.max(2.63, 8))) || (runtimeS / 2.63) > 1.31) {
       let benefitB: Map<any, any> = new Map([[String.fromCharCode(100,95,51,54,95,114,101,110,101,119,97,98,108,101,0),963], [String.fromCharCode(116,95,53,48,95,115,117,112,112,114,101,115,115,105,110,103,0),246]]);
       let securityb = 0.0;
       let moona = 3;
         securityb /= Math.max(moona / 3, 5);
      let whatsappy = securityb >= 9135193.0;
      do {
         securityb -= 2;
         if (whatsappy) {
            break;
         }
      } while (((securityb / 3.3) > 2.100 && (benefitB.size + 2) > 4) && whatsappy);
         moona %= Math.max(2, moona ^ 2);
      while (1 >= (benefitB.size - 1) || 3.91 >= (securityb - 4.15)) {
          let backy = 0;
          let libreacto = 3.0;
          let selectionn = 2;
         securityb *= parseInt(`${securityb}`);
         backy &= selectionn;
         libreacto += parseFloat(`${3}`);
         break;
      }
      while (5.90 >= securityb) {
         benefitB.set(`${securityb}`, benefitB.size);
         break;
      }
          let moduler = 4;
          let fadfdeebbbfdabbbabdadfaaddaaP = 2.0;
         benefitB = new Map([[`${moduler}`, 3 % (Math.max(9, moduler))]]);
         fadfdeebbbfdabbbabdadfaaddaaP /= Math.max(5, parseInt(`${fadfdeebbbfdabbbabdadfaaddaaP}`) - parseInt(`${fadfdeebbbfdabbbabdadfaaddaaP}`));
      for (let y = 0; y < 2; y++) {
         securityb *= 1;
      }
      if (2.93 == securityb) {
         securityb -= parseInt(`${securityb}`);
      }
          let xadsdka: Map<any, any> = new Map([[String.fromCharCode(115,105,114,105,95,104,95,56,0),false ], [String.fromCharCode(100,105,115,112,108,97,121,101,100,95,49,95,54,51,0),true ]]);
          let editf: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,117,95,54,50,0),438], [String.fromCharCode(100,95,54,95,99,104,101,99,107,109,97,114,107,115,0),555]]);
          let catalogB: Map<any, any> = new Map([[String.fromCharCode(112,105,101,99,101,119,105,115,101,95,119,95,51,55,0),156], [String.fromCharCode(98,101,116,97,95,121,95,52,48,0),379], [String.fromCharCode(97,95,53,55,95,115,101,99,116,111,114,0),406]]);
         securityb /= Math.max(xadsdka.size, 1);
         xadsdka = new Map([[`${editf.size}`, catalogB.size | editf.size]]);
         catalogB.set(`${editf.size}`, editf.size);
      runtimeS *= benefitB.size - libreanimatedZ.size;
      break;
   }
      yingM += `${zoomH << (Math.min(classesx.length, 1))}`;

  return await RNFetchBlob.fs.exists(apiCacheFilePath);
};

export const getApiCache = async () => {
       let chinaL = String.fromCharCode(111,95,50,53,95,116,97,103,103,105,110,103,0);
    let indicatorK = 4;
    let right3: Map<any, any> = new Map([[String.fromCharCode(118,95,55,54,0),680], [String.fromCharCode(112,105,101,95,107,95,57,50,0),477]]);
    let skipi = 1.0;
    let pageg = false;
    let agreementM = 0;
    let areaw: Array<any> = [846, 935, 892];
    let pressureF = false;
    let fastforwardV = String.fromCharCode(118,95,57,49,0);
    let t_locka = 4;
    let back9 = 3.0;
    let splash8: Array<any> = [700, 847, 51];
    let stationsp = 4;
    let members = 1;
   while (!chinaL.startsWith(`${fastforwardV.length}`)) {
      chinaL = `${fastforwardV.length}`;
      break;
   }
   while ((skipi / (Math.max(areaw.length, 5))) == 2.48 || 3 == (areaw.length | 4)) {
       let weiboV = 5;
       let sheeth = String.fromCharCode(104,95,49,48,48,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0);
       let mailp: Array<any> = [406, 868];
       let apps5 = 3.0;
       let rewardvideoN = 0.0;
       let stationc = 1.0;
       let inviteo = 1.0;
      for (let d = 0; d < 1; d++) {
         mailp = [parseInt(`${apps5}`) - 2];
      }
          let renew8 = 0;
          let gemfileI: Array<any> = [350, 704, 703];
         stationc -= parseFloat(`${3}`);
         renew8 >>= Math.min(Math.abs(gemfileI.length + 3), 3);
         gemfileI.push(2 - gemfileI.length);
          let pathb = 0.0;
         rewardvideoN *= parseInt(`${apps5}`) * 3;
         pathb += parseInt(`${pathb}`);
         weiboV >>= Math.min(Math.abs(parseInt(`${inviteo}`) / (Math.max(2, 8))), 4);
       let suggestione = 3.0;
      let catalogp = 6604701.0 <= suggestione;
      do {
         suggestione /= Math.max(parseFloat(`${parseInt(`${inviteo}`) & mailp.length}`), 2);
         if (catalogp) {
            break;
         }
      } while (catalogp && (4.70 < (rewardvideoN - suggestione)));
      for (let f = 0; f < 3; f++) {
         suggestione *= parseFloat(`${parseInt(`${inviteo}`)}`);
      }
      for (let p = 0; p < 1; p++) {
          let splashB: Array<any> = [54, 437];
          let reminderQ = String.fromCharCode(112,95,52,56,95,99,111,112,121,97,100,100,0);
         weiboV |= parseInt(`${apps5}`);
         splashB = [1 + splashB.length];
         reminderQ = `${1 - reminderQ.length}`;
      }
      if (sheeth.length >= 2) {
         sheeth = `${2 & sheeth.length}`;
      }
         rewardvideoN -= 1 + parseInt(`${inviteo}`);
          let miniy = 1.0;
         weiboV += parseInt(`${inviteo}`);
         miniy -= parseInt(`${miniy}`);
          let soundi = String.fromCharCode(120,95,52,48,95,100,116,115,109,0);
          let shirt0 = 2;
          let filterK = String.fromCharCode(104,101,118,99,95,115,95,53,50,0);
         inviteo /= Math.max(2, parseFloat(`${soundi.length}`));
         soundi += "1";
         shirt0 %= Math.max(filterK.length, 2);
         filterK = `${shirt0}`;
      let video0 = sheeth == String.fromCharCode(112,113,118,57,121,98,102,103,97,0);
      do {
          let libreanimatedm = false;
          let calendarg = 3.0;
          let libruntimeexecutorK = String.fromCharCode(99,105,110,97,117,100,105,111,95,98,95,54,50,0);
          let fastforwardM: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,115,95,52,95,53,51,0),333], [String.fromCharCode(118,95,52,48,95,102,111,117,114,120,0),158]]);
         sheeth += `${libruntimeexecutorK.length % (Math.max(3, 3))}`;
         libreanimatedm = null == fastforwardM.get(`${calendarg}`);
         calendarg *= parseInt(`${calendarg}`);
         libruntimeexecutorK += `${parseInt(`${calendarg}`) - fastforwardM.size}`;
         if (video0) {
            break;
         }
      } while ((3 == weiboV) && video0);
       let hooksW: Array<any> = [String.fromCharCode(101,109,98,101,100,100,105,110,103,95,118,95,57,50,0), String.fromCharCode(110,95,51,95,104,97,115,104,97,98,108,101,0)];
      areaw = [weiboV];
      break;
   }
      pressureF = !pageg;

  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';

      agreementM += agreementM << (Math.min(2, Math.abs(1)));
   let libjsinspectorT = fastforwardV == String.fromCharCode(99,112,104,97,0);
   do {
      fastforwardV = `${(2 % (Math.max(6, (pressureF ? 3 : 1))))}`;
      if (libjsinspectorT) {
         break;
      }
   } while (libjsinspectorT && (1 >= t_locka));
      pageg = !pageg;

  if (await getIsApiCacheExist()) {

       let point4 = String.fromCharCode(105,110,118,101,114,116,95,116,95,51,51,0);
       let componentQ = false;
       let injuryF = 4.0;
          let temperatureJ: Map<any, any> = new Map([[String.fromCharCode(115,95,52,53,95,97,99,111,110,102,105,103,0),String.fromCharCode(116,105,108,108,95,102,95,48,0)], [String.fromCharCode(114,101,118,111,107,105,110,103,95,121,95,50,49,0),String.fromCharCode(107,95,54,57,95,111,103,103,112,97,99,107,0)], [String.fromCharCode(118,95,51,49,95,106,111,121,102,117,108,0),String.fromCharCode(109,105,114,114,111,114,105,110,103,95,105,95,56,54,0)]]);
         componentQ = (temperatureJ.size & point4.length) >= 13;
      for (let n = 0; n < 2; n++) {
         point4 += `${((componentQ ? 5 : 4) % (Math.max(point4.length, 3)))}`;
      }
      while (componentQ) {
         componentQ = 52.48 >= injuryF;
         break;
      }
      if (2 >= point4.length) {
          let private_4rY = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,97,95,49,51,0);
          let productQ = 4.0;
          let catagoryB = 4;
          let whiteZ = false;
          let windx = 5.0;
         componentQ = !private_4rY.startsWith(`${injuryF}`);
         private_4rY = "1";
         productQ *= (parseFloat(`${catagoryB >> (Math.min(2, Math.abs((whiteZ ? 2 : 3))))}`));
         catagoryB ^= 1 & parseInt(`${productQ}`);
         whiteZ = !whiteZ;
         windx -= parseFloat(`${catagoryB << (Math.min(Math.abs(parseInt(`${windx}`)), 5))}`);
      }
       let register_bt: Map<any, any> = new Map([[String.fromCharCode(110,95,54,54,95,99,114,111,115,115,102,97,100,101,0),false ], [String.fromCharCode(110,95,55,53,95,115,109,112,116,101,98,97,114,115,0),true ]]);
       let cricketC: Map<any, any> = new Map([[String.fromCharCode(115,113,117,101,101,122,101,95,53,95,51,51,0),true ], [String.fromCharCode(118,95,51,95,97,97,99,112,115,100,115,112,0),true ], [String.fromCharCode(100,95,53,48,95,105,100,101,110,116,105,102,101,114,0),true ]]);
          let customm = String.fromCharCode(108,111,99,97,116,105,111,110,115,95,99,95,50,56,0);
          let areas = String.fromCharCode(99,97,108,108,111,117,116,95,99,95,54,50,0);
         cricketC = new Map([[customm, customm.length * areas.length]]);
         register_bt = new Map([[`${cricketC.size}`, cricketC.size]]);
         injuryF /= Math.max(2, parseFloat(`${2 % (Math.max(parseInt(`${injuryF}`), 6))}`));
      while (Array.from(register_bt.values()).includes(injuryF)) {
          let untickZ: Array<any> = [989, 593, 282];
          let libjsinspectorH = 1.0;
         injuryF -= parseFloat(`${3}`);
         untickZ = [untickZ.length];
         libjsinspectorH += parseInt(`${libjsinspectorH}`) | 3;
         break;
      }
      t_locka += (1 & (componentQ ? 5 : 2));
       let encrypt2 = 1;
       let final_iZ: Map<any, any> = new Map([[String.fromCharCode(104,95,49,95,99,111,108,120,0),211], [String.fromCharCode(97,95,54,48,95,100,105,115,115,111,108,118,101,0),192]]);
      while (3 == (encrypt2 % 2) || 2 == (encrypt2 % (Math.max(final_iZ.size, 5)))) {
          let launche = String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,99,95,54,53,0);
          let temperaturec = 5.0;
          let libtanh = String.fromCharCode(98,115,116,114,97,99,116,95,104,95,56,57,0);
          let dplusE = String.fromCharCode(118,97,108,105,100,97,116,111,114,115,95,114,95,51,49,0);
          let agreementY: Map<any, any> = new Map([[String.fromCharCode(115,97,109,112,108,101,114,97,116,101,95,120,95,56,50,0),false ], [String.fromCharCode(98,105,110,100,101,114,95,114,95,52,48,0),true ]]);
         encrypt2 /= Math.max(1, launche.length);
         launche = `${(String.fromCharCode(99,0) == libtanh ? parseInt(`${temperaturec}`) : libtanh.length)}`;
         temperaturec += 1 / (Math.max(8, dplusE.length));
         dplusE += `${(libtanh == String.fromCharCode(116,0) ? libtanh.length : dplusE.length)}`;
         agreementY = new Map([[libtanh, dplusE.length]]);
         break;
      }
      for (let a = 0; a < 1; a++) {
          let feedback8: Map<any, any> = new Map([[String.fromCharCode(108,95,51,51,95,111,115,116,104,114,101,97,100,115,0),false ], [String.fromCharCode(119,95,52,50,95,112,97,105,114,105,110,103,115,0),true ], [String.fromCharCode(102,95,57,53,95,120,98,105,110,0),true ]]);
          let main_s6 = 3.0;
          let sendl = 0;
         final_iZ.set(`${final_iZ.size}`, final_iZ.size / 2);
         feedback8 = new Map([[`${feedback8.size}`, feedback8.size * parseInt(`${main_s6}`)]]);
         main_s6 *= parseInt(`${main_s6}`) ^ feedback8.size;
         sendl <<= Math.min(Math.abs(sendl), 3);
      }
         encrypt2 *= encrypt2;
      for (let a = 0; a < 1; a++) {
         final_iZ = new Map([[`${final_iZ.size}`, encrypt2]]);
      }
         final_iZ = new Map([[`${final_iZ.size}`, encrypt2 % (Math.max(final_iZ.size, 3))]]);
         encrypt2 -= 2 - final_iZ.size;
      fastforwardV += `${encrypt2}`;
       let huaweiE = 1.0;
       let chinasameo = 4.0;
       let penaltyU = false;
          let blackg = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,95,101,95,57,0);
          let description_cf = String.fromCharCode(101,110,116,105,116,105,116,121,95,99,95,57,49,0);
         chinasameo += 3 - parseInt(`${huaweiE}`);
         blackg += `${description_cf.length}`;
         description_cf = `${description_cf.length}`;
      while (penaltyU && 3.16 == (2.10 - chinasameo)) {
         chinasameo *= ((penaltyU ? 3 : 1) ^ parseInt(`${chinasameo}`));
         break;
      }
         chinasameo *= parseInt(`${chinasameo}`) % 3;
      let securityl = 7136135.0 >= huaweiE;
      do {
         huaweiE *= parseInt(`${chinasameo}`);
         if (securityl) {
            break;
         }
      } while ((penaltyU) && securityl);
       let matchq = String.fromCharCode(101,95,49,55,95,105,103,110,101,116,116,101,0);
       let libflipperH = String.fromCharCode(119,95,52,55,95,99,111,110,102,105,103,117,114,101,0);
      indicatorK %= Math.max(indicatorK, 1);
    

   let pingK = pageg ? !pageg : pageg;
   do {
      pageg = areaw.length == 59;
      if (pingK) {
         break;
      }
   } while (pingK && ((agreementM << (Math.min(Math.abs(4), 2))) > 1 || !pageg));
      right3.set(`${agreementM}`, agreementM * 1);
   for (let q = 0; q < 3; q++) {
       let fastforward7: Map<any, any> = new Map([[String.fromCharCode(114,111,117,116,101,95,119,95,56,51,0),866], [String.fromCharCode(111,95,54,48,95,115,117,98,109,101,115,115,97,103,101,0),550]]);
       let libimagepipelineL: Array<any> = [594, 187, 699];
       let roundZ = 4.0;
      for (let k = 0; k < 1; k++) {
         fastforward7.set(`${libimagepipelineL.length}`, libimagepipelineL.length);
      }
      if ((fastforward7.size & 3) == 2 || (libimagepipelineL.length & fastforward7.size) == 3) {
          let textp: Array<any> = [137, 859, 598];
         fastforward7.set(`${roundZ}`, 3);
         textp = [textp.length];
      }
         fastforward7 = new Map([[`${libimagepipelineL.length}`, parseInt(`${roundZ}`)]]);
         roundZ /= Math.max(parseFloat(`${1 * parseInt(`${roundZ}`)}`), 4);
         roundZ += parseFloat(`${parseInt(`${roundZ}`) | 3}`);
      let huaweiZ = roundZ <= 8120055.0;
      do {
         roundZ -= parseFloat(`${3 * libimagepipelineL.length}`);
         if (huaweiZ) {
            break;
         }
      } while (huaweiZ && ((libimagepipelineL.length / 2) <= 5 && 5.100 <= (roundZ / 1.75)));
      while (roundZ > parseFloat(`${fastforward7.size}`)) {
          let project3: Map<any, any> = new Map([[String.fromCharCode(102,116,118,110,111,100,101,95,55,95,52,57,0),false ], [String.fromCharCode(119,114,105,116,101,99,98,95,98,95,49,52,0),true ], [String.fromCharCode(112,95,49,50,95,115,101,110,100,0),true ]]);
          let charte = String.fromCharCode(99,108,97,115,115,110,97,109,101,95,52,95,50,48,0);
          let commonG = String.fromCharCode(98,95,54,55,95,119,97,115,0);
          let yellowK = String.fromCharCode(116,95,52,95,115,97,108,116,115,0);
         fastforward7.set(`${yellowK}`, fastforward7.size);
         project3 = new Map([[`${project3.size}`, charte.length]]);
         charte += `${project3.size}`;
         commonG += `${commonG.length}`;
         yellowK += `${commonG.length % (Math.max(3, 2))}`;
         break;
      }
      while (!Array.from(fastforward7.values()).includes(roundZ)) {
         fastforward7.set(`${roundZ}`, 3);
         break;
      }
      let telemetry2 = 7133957 <= libimagepipelineL.length;
      do {
         libimagepipelineL = [libimagepipelineL.length - 1];
         if (telemetry2) {
            break;
         }
      } while (telemetry2 && (1 >= libimagepipelineL.length));
      indicatorK ^= 3 & fastforward7.size;
   }
    const res = JSON.parse(
      await RNFetchBlob.fs.readFile(apiCacheFilePath, 'utf8'),
    );

   let nativeex3 = skipi <= 5289306.0;
   do {
      skipi *= (parseInt(`${skipi}`) + (pressureF ? 4 : 4));
      if (nativeex3) {
         break;
      }
   } while (((skipi + fastforwardV.length) > 3.8 && 4 > (fastforwardV.length | 2)) && nativeex3);
      chinaL += `${indicatorK << (Math.min(Math.abs(right3.size), 3))}`;
      agreementM ^= 3;
    

   while ((t_locka * 1) < 1 || (1 * t_locka) < 1) {
      t_locka >>= Math.min(Math.abs(((pressureF ? 4 : 4) | (pageg ? 5 : 5))), 2);
      break;
   }
   let sourceV = 8753633 >= fastforwardV.length;
   do {
      fastforwardV += `${indicatorK}`;
      if (sourceV) {
         break;
      }
   } while (sourceV && (fastforwardV.includes(`${pressureF}`)));
   let zhengpianY = agreementM >= 7030138;
   do {
       let tnewarchdefaults9 = 5;
         tnewarchdefaults9 |= tnewarchdefaults9 / 3;
      for (let l = 0; l < 3; l++) {
         tnewarchdefaults9 |= 1 + tnewarchdefaults9;
      }
      let logo_ = tnewarchdefaults9 >= 7017682;
      do {
          let annerF = 3.0;
          let libimagepipeline9 = String.fromCharCode(99,104,105,108,100,95,109,95,49,51,0);
         tnewarchdefaults9 |= tnewarchdefaults9 % (Math.max(parseInt(`${annerF}`), 3));
         annerF += libimagepipeline9.length >> (Math.min(Math.abs(1), 4));
         libimagepipeline9 += "2";
         if (logo_) {
            break;
         }
      } while (logo_ && (tnewarchdefaults9 > tnewarchdefaults9));
      agreementM -= areaw.length;
      if (zhengpianY) {
         break;
      }
   } while (zhengpianY && ((agreementM + 1) <= 5));
    return res;
  } else {

   while ((3.52 * skipi) <= 3.5) {
      skipi *= areaw.length;
      break;
   }
   if (1 < (fastforwardV.length - t_locka) && 1 < (t_locka - fastforwardV.length)) {
      fastforwardV += `${(chinaL == String.fromCharCode(67,0) ? fastforwardV.length : chinaL.length)}`;
   }
       let whiteb = String.fromCharCode(99,95,55,95,114,108,118,108,99,0);
         whiteb = `${whiteb.length % (Math.max(whiteb.length, 8))}`;
      while (whiteb.length > whiteb.length) {
          let singaporei = String.fromCharCode(98,105,110,100,120,95,121,95,57,48,0);
          let encryptT = true;
         whiteb = `${1 / (Math.max(1, singaporei.length))}`;
         singaporei = "3";
         break;
      }
          let libjsim = 4.0;
         whiteb += `${whiteb.length}`;
         libjsim -= 2;
      t_locka *= t_locka + areaw.length;
    return [];
  }
};

export const batchAddVodToApiCache = async (vod: yys_ScrollviewPangle[]) => {
  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';
  try {
    if (!(await getIsApiCacheExist())) {
      await RNFetchBlob.fs.createFile(apiCacheFilePath, '[]', 'utf8');
    }
  } catch (e) {
       let traminiy = String.fromCharCode(116,95,56,50,95,118,115,97,100,0);
    let turnj = 0.0;
    let colorse: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,95,114,95,53,49,0),948], [String.fromCharCode(115,95,56,52,95,108,117,109,105,110,97,110,99,101,0),687], [String.fromCharCode(102,116,115,97,117,120,95,115,95,52,55,0),766]]);
    let settingH = String.fromCharCode(103,95,56,49,95,99,111,110,102,0);
    let datah = true;
    let schedulerm: Map<any, any> = new Map([[String.fromCharCode(116,111,114,103,98,95,113,95,56,55,0),String.fromCharCode(116,106,117,116,105,108,95,110,95,50,53,0)], [String.fromCharCode(116,117,110,101,95,119,95,52,51,0),String.fromCharCode(118,111,105,99,101,115,95,108,95,56,54,0)]]);
    let type_hc = String.fromCharCode(99,95,53,57,95,109,105,110,109,97,120,0);
    let androidm = String.fromCharCode(115,95,57,56,95,100,105,109,101,110,115,105,111,110,0);
    let placeholdery = String.fromCharCode(107,95,54,54,95,104,97,115,104,116,97,98,108,101,0);
    let libfbj = 1.0;
    let stepI = String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,50,95,54,57,0);
    let flyerp = 3.0;
    let imagemanagerP = true;
    let expandx = 5;
    let trophy2 = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,108,95,50,50,0);
    let volumeu = 3;
    let completeJ = true;
    let mimou: Array<any> = [328, 746, 578];
       let applicationx = String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,106,95,54,52,0);
      let baiduM = applicationx == String.fromCharCode(120,121,103,100,100,0);
      do {
          let pnewinterstitialg = 1;
          let root8: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,102,95,53,95,54,51,0),true ], [String.fromCharCode(107,95,50,55,95,119,97,116,99,104,105,110,103,0),false ], [String.fromCharCode(99,95,49,53,95,115,116,114,105,100,101,0),true ]]);
          let catagorye: Map<any, any> = new Map([[String.fromCharCode(122,95,50,95,121,97,98,101,0),285], [String.fromCharCode(117,105,110,116,112,111,119,95,114,95,55,50,0),815]]);
         applicationx += `${(applicationx == String.fromCharCode(97,0) ? applicationx.length : pnewinterstitialg)}`;
         pnewinterstitialg <<= Math.min(Math.abs(root8.size - 1), 3);
         root8.set(`${root8.size}`, root8.size * catagorye.size);
         catagorye.set(`${catagorye.size}`, catagorye.size / (Math.max(10, root8.size)));
         if (baiduM) {
            break;
         }
      } while (baiduM && (applicationx == applicationx));
      for (let t = 0; t < 3; t++) {
          let feedbackY = 3.0;
          let trashi = String.fromCharCode(99,104,97,110,110,101,108,95,117,95,51,51,0);
          let productH: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,99,101,115,115,95,107,95,51,57,0),false ], [String.fromCharCode(101,120,112,108,97,105,110,95,116,95,55,49,0),false ], [String.fromCharCode(114,101,111,114,100,101,114,105,110,103,95,119,95,51,57,0),true ]]);
          let nalytics2 = true;
          let sides: Map<any, any> = new Map([[String.fromCharCode(103,95,53,55,95,114,101,117,112,108,111,97,100,101,100,0),710], [String.fromCharCode(111,95,48,95,111,117,116,98,111,117,110,100,0),762], [String.fromCharCode(115,95,53,95,115,111,102,116,102,108,111,97,116,0),11]]);
         applicationx = `${2 + applicationx.length}`;
         feedbackY *= parseFloat(`${sides.size}`);
         trashi += `${parseInt(`${feedbackY}`)}`;
         productH.set(`${nalytics2}`, ((nalytics2 ? 5 : 2) << (Math.min(Math.abs(1), 5))));
         sides = new Map([[`${productH.size}`, 1]]);
      }
         applicationx += `${applicationx.length}`;
      androidm = `${parseInt(`${turnj}`)}`;
   for (let f = 0; f < 2; f++) {
      datah = 58.74 > flyerp;
   }
   while (flyerp == 1.59) {
      datah = !placeholdery.startsWith(`${libfbj}`);
      break;
   }
   if (type_hc != androidm) {
       let rootp = String.fromCharCode(97,114,103,117,109,101,110,116,95,54,95,49,51,0);
       let libpangleflipped7: Map<any, any> = new Map([[String.fromCharCode(102,95,50,54,95,101,110,99,104,0),String.fromCharCode(118,95,50,54,95,99,111,108,115,101,116,0)], [String.fromCharCode(118,95,52,51,95,116,105,109,101,114,115,0),String.fromCharCode(102,95,52,48,95,109,111,100,105,102,105,101,114,115,0)], [String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,95,103,95,55,57,0),String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,104,95,55,52,0)]]);
          let sinaL: Map<any, any> = new Map([[String.fromCharCode(101,95,55,56,95,101,118,114,99,100,97,116,97,0),String.fromCharCode(97,99,113,117,105,114,101,100,95,102,95,57,53,0)], [String.fromCharCode(102,97,97,110,100,99,116,95,104,95,56,50,0),String.fromCharCode(98,95,51,53,95,108,112,99,108,115,112,0)]]);
         rootp = `${(String.fromCharCode(110,0) == rootp ? sinaL.size : rootp.length)}`;
         libpangleflipped7 = new Map([[`${libpangleflipped7.size}`, libpangleflipped7.size * 2]]);
      if (4 <= rootp.length) {
         libpangleflipped7.set(rootp, libpangleflipped7.size - 2);
      }
       let flyerV: Array<any> = [0, 682];
         rootp += `${libpangleflipped7.size}`;
      if (!Array.from(libpangleflipped7.values()).includes(flyerV.length)) {
         libpangleflipped7.set(`${flyerV.length}`, libpangleflipped7.size & flyerV.length);
      }
      androidm += `${(1 >> (Math.min(5, Math.abs((imagemanagerP ? 3 : 3)))))}`;
   }
       let anythinks = String.fromCharCode(108,111,119,101,114,99,97,115,101,100,95,122,95,50,49,0);
       let memberK = String.fromCharCode(119,114,105,116,101,99,104,101,99,107,95,122,95,55,56,0);
       let inactiveU = String.fromCharCode(106,111,105,110,105,110,103,95,116,95,51,53,0);
      let jinit_0O = String.fromCharCode(97,49,122,114,104,102,0) == memberK;
      do {
         memberK += `${2 ^ inactiveU.length}`;
         if (jinit_0O) {
            break;
         }
      } while ((memberK != String.fromCharCode(100,0) && anythinks != String.fromCharCode(53,0)) && jinit_0O);
      if (anythinks.length == 4) {
          let dropdownk: Array<any> = [95, 606];
          let slider0 = String.fromCharCode(103,95,55,57,95,102,105,108,101,116,105,109,101,0);
          let bdxadsdkV: Map<any, any> = new Map([[String.fromCharCode(110,95,55,50,95,110,111,116,99,104,0),791], [String.fromCharCode(105,95,49,52,95,115,112,114,105,110,103,0),855], [String.fromCharCode(99,111,118,97,114,105,97,110,99,101,95,122,95,56,53,0),618]]);
         anythinks = `${(String.fromCharCode(48,0) == memberK ? dropdownk.length : memberK.length)}`;
         dropdownk.push((String.fromCharCode(122,0) == slider0 ? bdxadsdkV.size : slider0.length));
         bdxadsdkV.set(`${slider0}`, bdxadsdkV.size >> (Math.min(Math.abs(1), 2)));
      }
      colorse.set(traminiy, 2 + traminiy.length);
      placeholdery = `${3 / (Math.max(4, settingH.length))}`;
      expandx += traminiy.length;
      colorse = new Map([[settingH, 2]]);
   for (let w = 0; w < 3; w++) {
      flyerp *= androidm.length + trophy2.length;
   }
       let executorc = true;
      let videocommonX = executorc ? !executorc : executorc;
      do {
          let gesturesK = 1.0;
          let livek = String.fromCharCode(113,95,54,51,95,112,101,111,112,108,101,0);
          let resultK = 1.0;
         executorc = !executorc;
         gesturesK /= Math.max(parseFloat(`${parseInt(`${resultK}`) << (Math.min(2, Math.abs(1)))}`), 3);
         livek += `${1 & parseInt(`${gesturesK}`)}`;
         resultK /= Math.max(2, parseFloat(`${parseInt(`${gesturesK}`)}`));
         if (videocommonX) {
            break;
         }
      } while ((!executorc) && videocommonX);
      if (executorc) {
         executorc = !executorc;
      }
          let popupP = String.fromCharCode(121,95,57,51,95,112,97,99,107,101,116,111,117,116,0);
          let fieldd = 5.0;
          let specY = 5;
         executorc = popupP == String.fromCharCode(90,0);
         popupP += `${specY >> (Math.min(Math.abs(parseInt(`${fieldd}`)), 2))}`;
         fieldd *= parseInt(`${fieldd}`);
         specY >>= Math.min(5, Math.abs(1 - specY));
      libfbj *= parseFloat(`${parseInt(`${turnj}`) | 1}`);
       let userf: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,115,97,109,112,95,109,95,49,56,0),161], [String.fromCharCode(108,95,49,54,95,100,114,97,119,101,114,0),786], [String.fromCharCode(116,99,112,95,98,95,50,51,0),175]]);
      for (let m = 0; m < 2; m++) {
         userf.set(`${userf.size}`, userf.size);
      }
         userf = new Map([[`${userf.size}`, userf.size]]);
      if ((5 * userf.size) <= 3) {
         userf.set(`${userf.size}`, userf.size >> (Math.min(3, Math.abs(userf.size))));
      }
      libfbj += parseFloat(`${type_hc.length}`);
      imagemanagerP = stepI.startsWith(`${libfbj}`);
      libfbj *= parseFloat(`${type_hc.length}`);
       let configurea = 0.0;
      while (configurea > configurea) {
         configurea -= parseInt(`${configurea}`) >> (Math.min(2, Math.abs(2)));
         break;
      }
      if ((configurea - 1.73) == 3.71 || (configurea - configurea) == 1.73) {
         configurea += parseInt(`${configurea}`);
      }
         configurea += parseInt(`${configurea}`) + parseInt(`${configurea}`);
      imagemanagerP = (androidm.length % (Math.max(5, traminiy.length))) <= 14;
       let c_centerm = false;
       let androidJ = 3.0;
          let large_ = 0.0;
          let interstitialf = 2.0;
         androidJ += parseInt(`${large_}`);
         interstitialf /= Math.max(1, 1);
         androidJ += 1 + parseInt(`${androidJ}`);
      let mapbufferL = c_centerm ? !c_centerm : c_centerm;
      do {
          let mathf = String.fromCharCode(97,116,97,98,108,101,115,95,109,95,49,48,0);
         c_centerm = mathf.startsWith(`${androidJ}`);
         if (mapbufferL) {
            break;
         }
      } while ((4.68 >= androidJ && 1.30 >= (androidJ * 4.68)) && mapbufferL);
         c_centerm = androidJ < 55.50 || c_centerm;
      for (let q = 0; q < 3; q++) {
          let stylesw = String.fromCharCode(111,95,56,57,95,100,114,111,112,120,0);
          let proxyU: Map<any, any> = new Map([[String.fromCharCode(103,95,54,56,95,118,111,114,98,105,115,0),50], [String.fromCharCode(110,95,54,52,95,115,116,105,99,107,101,114,0),823]]);
         c_centerm = androidJ <= 40.100;
         stylesw += `${proxyU.size ^ 1}`;
         proxyU.set(stylesw, proxyU.size);
      }
         c_centerm = androidJ > 87.2;
      trophy2 += "2";
      expandx /= Math.max(1, 1);
       let currentY: Array<any> = [329, 464];
       let paginationj = String.fromCharCode(110,95,52,51,95,101,120,99,101,112,116,105,111,110,115,0);
      for (let l = 0; l < 2; l++) {
         currentY.push((String.fromCharCode(113,0) == paginationj ? paginationj.length : currentY.length));
      }
         paginationj += `${currentY.length}`;
         paginationj = `${(paginationj == String.fromCharCode(110,0) ? currentY.length : paginationj.length)}`;
      while (currentY.length > 4) {
         paginationj = `${paginationj.length % 3}`;
         break;
      }
          let libsentryG = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,54,95,55,56,0);
         currentY = [currentY.length];
         libsentryG += `${libsentryG.length}`;
      let libcxxcomponentsv = String.fromCharCode(115,118,52,100,54,101,110,102,0) == paginationj;
      do {
         paginationj = `${paginationj.length}`;
         if (libcxxcomponentsv) {
            break;
         }
      } while (((4 << (Math.min(5, currentY.length))) == 3 && 4 == (4 << (Math.min(1, currentY.length)))) && libcxxcomponentsv);
      colorse = new Map([[stepI, 2]]);
      turnj *= parseFloat(`${type_hc.length}`);
   if (!settingH.includes(`${datah}`)) {
       let linkz = false;
       let whatsapp1 = 1.0;
       let neonx = 3.0;
       let successy: Map<any, any> = new Map([[String.fromCharCode(115,101,116,100,97,114,95,48,95,52,55,0),470], [String.fromCharCode(111,95,51,50,95,116,102,114,102,0),639], [String.fromCharCode(98,108,111,98,115,95,118,95,57,55,0),299]]);
      for (let w = 0; w < 2; w++) {
         successy.set(`${linkz}`, 1 % (Math.max(parseInt(`${whatsapp1}`), 5)));
      }
         linkz = successy.size > 58 || !linkz;
       let blacka = String.fromCharCode(111,95,53,56,95,99,111,110,102,105,103,117,114,101,0);
      while (blacka.length == 1) {
         successy.set(`${neonx}`, 3 - successy.size);
         break;
      }
      for (let k = 0; k < 2; k++) {
         whatsapp1 *= 3 + parseInt(`${neonx}`);
      }
       let chinaA = String.fromCharCode(109,111,118,101,115,95,57,95,49,48,48,0);
       let smallO = String.fromCharCode(119,95,52,50,95,115,119,105,116,99,104,97,98,108,101,0);
      while (4 >= (blacka.length * parseInt(`${neonx}`)) || 3.96 >= (parseFloat(`${blacka.length}`) * neonx)) {
         neonx *= parseFloat(`${2 | parseInt(`${neonx}`)}`);
         break;
      }
       let default_h4x = 0;
         successy.set(chinaA, chinaA.length);
      let moonB = default_h4x <= 7162991;
      do {
          let h_managerx = String.fromCharCode(99,108,117,98,95,100,95,49,48,0);
         default_h4x /= Math.max(1, 3);
         h_managerx += `${2 % (Math.max(10, h_managerx.length))}`;
         if (moonB) {
            break;
         }
      } while ((successy.get(`${default_h4x}`) == null) && moonB);
         whatsapp1 *= parseInt(`${neonx}`);
       let pathX: Array<any> = [259, 444, 546];
       let appsb: Array<any> = [511, 130, 662];
      settingH = `${successy.size + type_hc.length}`;
   }
       let telegramH = 4;
         telegramH |= telegramH >> (Math.min(Math.abs(3), 1));
       let login8 = 5.0;
      while ((4.41 - login8) == 2.17) {
         telegramH >>= Math.min(5, Math.abs(parseInt(`${login8}`)));
         break;
      }
      placeholdery = "2";
   while (androidm.length < 1) {
      schedulerm.set(trophy2, trophy2.length >> (Math.min(5, Math.abs(colorse.size))));
      break;
   }
   let helperl = String.fromCharCode(118,102,121,107,0) == type_hc;
   do {
      type_hc += "3";
      if (helperl) {
         break;
      }
   } while ((type_hc.endsWith(`${libfbj}`)) && helperl);
       let anytimed = false;
          let placementl = 3;
          let unimplementedviewM = 5.0;
         anytimed = placementl == 42 || anytimed;
         placementl *= 1 >> (Math.min(Math.abs(parseInt(`${unimplementedviewM}`)), 4));
         unimplementedviewM -= parseInt(`${unimplementedviewM}`);
      let orientationf = anytimed ? !anytimed : anytimed;
      do {
         anytimed = anytimed && !anytimed;
         if (orientationf) {
            break;
         }
      } while ((anytimed) && orientationf);
         anytimed = (anytimed ? anytimed : !anytimed);
      stepI += `${expandx}`;
   for (let d = 0; d < 2; d++) {
      trophy2 = `${(settingH.length - (datah ? 4 : 5))}`;
   }
   for (let w = 0; w < 2; w++) {
       let promotionX = String.fromCharCode(119,95,53,49,95,102,111,114,101,104,101,97,100,0);
       let gestureT = 1.0;
       let kuaishouh = true;
       let libreactperfloggerjnif: Map<any, any> = new Map([[String.fromCharCode(105,95,55,56,95,115,117,98,116,114,97,99,116,111,114,0),false ], [String.fromCharCode(115,101,115,115,111,110,95,102,95,51,51,0),false ]]);
       let gpayw = String.fromCharCode(122,95,50,55,95,97,100,100,115,0);
         gestureT /= Math.max(2, 5);
          let annerF = true;
         gpayw += `${gpayw.length}`;
         annerF = !annerF;
      for (let g = 0; g < 1; g++) {
          let graphicsP = 0;
          let chinasamey: Map<any, any> = new Map([[String.fromCharCode(111,95,51,95,100,105,97,108,105,110,103,0),353], [String.fromCharCode(103,95,50,95,115,105,122,101,115,0),147], [String.fromCharCode(104,95,55,52,95,109,97,107,101,99,116,0),963]]);
          let borderlessf = 3;
          let libcrashsdkD = true;
          let with_wU = 1.0;
         promotionX += `${(gpayw == String.fromCharCode(113,0) ? chinasamey.size : gpayw.length)}`;
         graphicsP += (borderlessf ^ (libcrashsdkD ? 5 : 1));
         chinasamey = new Map([[`${borderlessf}`, graphicsP]]);
         libcrashsdkD = graphicsP <= 28;
         with_wU += parseFloat(`${2 >> (Math.min(4, Math.abs(borderlessf)))}`);
      }
         promotionX += `${promotionX.length | 2}`;
       let successW = 3;
      let fileM = successW <= 8863756;
      do {
         successW <<= Math.min(Math.abs(3 ^ promotionX.length), 2);
         if (fileM) {
            break;
         }
      } while (((successW % 4) <= 4) && fileM);
          let zhuboh = String.fromCharCode(109,101,116,97,108,95,51,95,52,57,0);
          let gemfiler: Array<any> = [908, 140];
         promotionX += `${1 << (Math.min(2, gpayw.length))}`;
         zhuboh = `${gemfiler.length % (Math.max(zhuboh.length, 9))}`;
         gemfiler = [zhuboh.length << (Math.min(Math.abs(3), 2))];
         gpayw += "3";
       let reminderU = String.fromCharCode(105,95,57,53,95,97,115,115,111,99,105,97,116,105,111,110,115,0);
       let selectionA = String.fromCharCode(102,105,110,105,115,104,95,121,95,51,55,0);
      if (gpayw.includes(`${kuaishouh}`)) {
         gpayw += `${(parseInt(`${gestureT}`) << (Math.min(3, Math.abs((kuaishouh ? 3 : 1)))))}`;
      }
         successW %= Math.max(1 + parseInt(`${gestureT}`), 4);
      while (1 < gpayw.length) {
         gpayw = `${successW * 1}`;
         break;
      }
          let switch_1nd = 4.0;
          let becomes: Map<any, any> = new Map([[String.fromCharCode(116,114,97,118,101,108,95,54,95,54,54,0),String.fromCharCode(106,95,56,55,95,97,116,116,114,97,99,116,105,110,103,0)], [String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,49,95,50,48,0),String.fromCharCode(100,118,98,115,117,98,95,114,95,50,50,0)], [String.fromCharCode(100,95,50,57,95,105,110,116,101,114,110,101,100,0),String.fromCharCode(110,95,56,95,112,114,111,98,0)]]);
          let arrowK: Array<any> = [410, 920];
         reminderU += `${successW}`;
         switch_1nd += becomes.size;
         becomes = new Map([[`${becomes.size}`, 3]]);
         arrowK = [3];
          let huawei8 = false;
          let libfolly0 = false;
         successW += 2;
         huawei8 = !libfolly0;
         libfolly0 = huawei8;
      if (4 <= (parseInt(`${gestureT}`) * 5) && 5 <= (parseInt(`${gestureT}`) * gpayw.length)) {
         gpayw = `${((kuaishouh ? 1 : 1) ^ selectionA.length)}`;
      }
      schedulerm = new Map([[`${volumeu}`, placeholdery.length]]);
   }
   if (2.33 > (libfbj - turnj) || (turnj - 2.33) > 1.30) {
      turnj += parseFloat(`${volumeu}`);
   }

    
  }
  const apiCacheContentStr = await RNFetchBlob.fs.readFile(
    apiCacheFilePath,
    'utf8',
  );
  const apiCacheContent: yys_ScrollviewPangle[] = JSON.parse(apiCacheContentStr);
  
  if (apiCacheContent.length < TOTAL_VIDEO_TO_DOWNLOAD) {
    const newArr = removeDuplicateObjects(apiCacheContent.concat(vod));
    
    await RNFetchBlob.fs.writeFile(apiCacheFilePath, JSON.stringify(newArr));
  } else {
    
    
  }
};

function removeDuplicateObjects(array: yys_ScrollviewPangle[]): yys_ScrollviewPangle[] {
  const seenIds = new Set<number>();

  return array.filter(obj => {
    if (!seenIds.has(obj.mini_video_id)) {
      seenIds.add(obj.mini_video_id);
      return true;
    }
    return false;
  });
}

const deleteVodFromApiCache = async (id: string) => {
  if (!(await getIsApiCacheExist())) return;
  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';
  const apiCacheContentStr = await RNFetchBlob.fs.readFile(
    apiCacheFilePath,
    'utf8',
  );
  const apiCacheContent: yys_ScrollviewPangle[] = JSON.parse(apiCacheContentStr);

  console.debug('removing vod from api cache', id);

  const filteredCacheContent = apiCacheContent.filter(
    vod => vod.mini_video_id.toString() !== id,
  );
  await RNFetchBlob.fs.writeFile(
    apiCacheFilePath,
    JSON.stringify(filteredCacheContent),
  );
};

export const clearMinivodApiCache = async () => {
       let libsentrym = String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,56,95,49,57,0);
    let binddatas7 = String.fromCharCode(100,95,51,50,95,115,97,109,112,108,101,102,109,116,0);
    let settingi = false;
    let chinasame3 = 1.0;
    let notificationS = String.fromCharCode(116,115,114,95,105,95,51,57,0);
    let backQ = String.fromCharCode(108,95,52,51,0);
    let basketballI = true;
    let favoriteP = String.fromCharCode(112,95,53,50,95,97,108,112,104,97,98,101,116,115,0);
    let historyg = String.fromCharCode(97,115,115,101,114,116,95,53,95,50,51,0);
      libsentrym = `${3 | libsentrym.length}`;
      binddatas7 += `${(parseInt(`${chinasame3}`) - (settingi ? 4 : 2))}`;
       let placementm = String.fromCharCode(109,95,56,95,98,108,111,111,109,0);
       let kuaishouM = String.fromCharCode(115,111,114,101,99,118,109,115,103,95,106,95,50,50,0);
       let frame_bv7 = false;
      for (let c = 0; c < 1; c++) {
          let predictionE: Map<any, any> = new Map([[String.fromCharCode(107,95,52,52,95,100,105,102,102,0),254], [String.fromCharCode(108,95,48,95,115,107,101,119,0),18], [String.fromCharCode(101,95,49,55,95,115,117,98,0),240]]);
          let proxyX = 2.0;
         placementm = "3";
         predictionE.set(`${proxyX}`, parseInt(`${proxyX}`) & predictionE.size);
      }
      if (2 <= kuaishouM.length || !frame_bv7) {
         frame_bv7 = kuaishouM.length >= 91;
      }
       let flipperJ = 0.0;
       let taiwanM = String.fromCharCode(107,95,53,48,95,110,101,103,111,116,105,97,116,101,100,0);
       let bdxadsdkH = String.fromCharCode(111,95,56,54,95,103,114,97,100,0);
      while (1 < kuaishouM.length && !frame_bv7) {
         kuaishouM += `${1 >> (Math.min(1, placementm.length))}`;
         break;
      }
      let register_ltY = kuaishouM == String.fromCharCode(120,122,55,106,116,48,95,48,111,95,0);
      do {
          let pageU = String.fromCharCode(113,95,50,53,95,103,114,97,121,114,103,98,0);
          let foregrounds = String.fromCharCode(97,95,50,48,95,99,97,108,99,119,0);
          let episodeP = String.fromCharCode(106,95,54,55,95,111,118,101,114,114,105,100,101,0);
         kuaishouM = `${parseInt(`${flipperJ}`)}`;
         pageU = "1";
         foregrounds += `${pageU.length}`;
         episodeP += `${3 & episodeP.length}`;
         if (register_ltY) {
            break;
         }
      } while (register_ltY && (2 < kuaishouM.length || taiwanM != String.fromCharCode(100,0)));
          let forwardX: Array<any> = [452, 532];
         taiwanM = `${forwardX.length}`;
         bdxadsdkH += `${3 ^ parseInt(`${flipperJ}`)}`;
          let fileG = 4;
          let historyV = true;
          let xvodU = 4.0;
         flipperJ -= parseInt(`${flipperJ}`) << (Math.min(3, Math.abs(1)));
         fileG -= fileG;
         historyV = 92 < (fileG / (Math.max(xvodU, 2)));
         xvodU += (parseFloat(`${(historyV ? 3 : 3) + fileG}`));
      basketballI = 44.72 > chinasame3;
   let t_centerC = 6033682 <= binddatas7.length;
   do {
      binddatas7 = `${((basketballI ? 3 : 3) * backQ.length)}`;
      if (t_centerC) {
         break;
      }
   } while ((binddatas7.includes(`${settingi}`)) && t_centerC);
   while (backQ.startsWith(`${chinasame3}`)) {
      chinasame3 /= Math.max(5, ((basketballI ? 4 : 2) % (Math.max(parseInt(`${chinasame3}`), 3))));
      break;
   }
   while (1 >= favoriteP.length || 1 >= libsentrym.length) {
      favoriteP = `${((basketballI ? 3 : 3))}`;
      break;
   }

  const apiCacheFilePath = RNFetchBlob.fs.dirs.DocumentDir + '/apicache.json';

      basketballI = backQ.length <= 16;
   if (basketballI || historyg.length <= 4) {
      basketballI = (chinasame3 / (Math.max(historyg.length, 8))) == 27.79;
   }
      historyg = `${(String.fromCharCode(50,0) == backQ ? (basketballI ? 5 : 5) : backQ.length)}`;
       let debug1 = 3;
       let libreactnativejnis: Map<any, any> = new Map([[String.fromCharCode(107,95,52,54,95,115,99,97,108,97,114,109,117,108,116,0),175], [String.fromCharCode(105,95,51,54,95,109,111,110,111,116,111,110,105,116,121,0),986], [String.fromCharCode(121,95,55,50,95,117,116,118,105,100,101,111,100,115,112,0),33]]);
         debug1 %= Math.max(1, 2);
          let tnewarchdefaultsx = String.fromCharCode(115,105,108,101,110,116,108,121,95,110,95,54,56,0);
          let closeo = String.fromCharCode(98,95,52,54,95,112,117,116,99,0);
         debug1 /= Math.max(closeo.length, 4);
         tnewarchdefaultsx += `${tnewarchdefaultsx.length | 3}`;
         closeo = `${(tnewarchdefaultsx == String.fromCharCode(54,0) ? tnewarchdefaultsx.length : tnewarchdefaultsx.length)}`;
          let bufferw = String.fromCharCode(113,95,51,50,95,109,99,100,101,99,0);
         debug1 ^= libreactnativejnis.size * 3;
         bufferw += `${bufferw.length}`;
      while ((debug1 ^ libreactnativejnis.size) == 5 || 5 == (debug1 ^ 5)) {
          let miniA = String.fromCharCode(108,95,54,95,115,115,116,104,114,101,115,104,0);
         debug1 -= libreactnativejnis.size;
         miniA = `${miniA.length}`;
         break;
      }
         debug1 |= libreactnativejnis.size + debug1;
      if (Array.from(libreactnativejnis.values()).includes(debug1)) {
          let shootD = String.fromCharCode(115,112,101,99,105,102,105,101,100,95,102,95,54,57,0);
         libreactnativejnis.set(`${debug1}`, 3);
         shootD += `${shootD.length ^ shootD.length}`;
      }
      binddatas7 = `${backQ.length}`;
   if (binddatas7.startsWith(`${settingi}`)) {
      settingi = favoriteP.length >= 63;
   }
      binddatas7 += `${(String.fromCharCode(115,0) == binddatas7 ? favoriteP.length : binddatas7.length)}`;
  await RNFetchBlob.fs.writeFile(
    apiCacheFilePath,
    JSON.stringify([]),
  );
}