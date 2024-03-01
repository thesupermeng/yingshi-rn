import React, { useState, memo, useCallback } from 'react';
import ShortVideoPlayer from '../../components/videoPlayer/yys_sigmob';
import CollectionBottomSheet from '../../../components/miniCollection/yys_fadfdeebbbfdabbbabdadfaaddaa';

interface yys_ConfigureUimanager {
    thumbnail?: string;
    displayHeight: number;
    vod: any;
    inCollectionView?: boolean;
    setCollectionEpisode?: any;
    isPause: boolean;
    onManualPause: (value: boolean) => void;
    isShowVideo: boolean,
    currentDuration: number,
    updateVideoDuration: (duration: number) => any,
}

function ShortVod({
    vod,
    thumbnail,
    displayHeight = 0,
    inCollectionView = false,
    setCollectionEpisode,
    isPause = true,
    onManualPause,
    isShowVideo,
    currentDuration,
    updateVideoDuration,
}: yys_ConfigureUimanager) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [currentVod, setVod] = useState(vod);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        setCollectionEpisode(index);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
       let pressureh = String.fromCharCode(99,111,110,116,105,110,117,101,100,95,51,95,56,52,0);
    let build_ = String.fromCharCode(122,95,48,95,113,116,112,97,108,101,116,116,101,0);
    let eactc = String.fromCharCode(99,111,109,109,101,110,116,95,52,95,52,49,0);
    let selectionr = String.fromCharCode(102,105,108,108,101,114,95,99,95,54,56,0);
    let viewsl = 3.0;
    let tickedT = String.fromCharCode(118,111,112,101,110,95,117,95,53,56,0);
    let proxyg = String.fromCharCode(112,111,108,101,95,118,95,48,0);
    let closeT = String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,95,54,95,49,52,0);
    let googlet: Map<any, any> = new Map([[String.fromCharCode(98,101,103,105,110,110,105,110,103,95,117,95,57,0),338], [String.fromCharCode(97,110,103,108,101,115,95,56,95,49,50,0),987], [String.fromCharCode(101,95,49,50,95,117,110,99,108,101,115,0),576]]);
    let libtanz: Array<any> = [String.fromCharCode(99,111,112,105,101,100,95,103,95,52,48,0), String.fromCharCode(112,109,107,95,115,95,55,53,0)];
    let routerK: Map<any, any> = new Map([[String.fromCharCode(113,95,55,51,95,115,112,105,110,108,111,99,107,0),String.fromCharCode(104,97,115,104,116,97,103,95,105,95,53,49,0)], [String.fromCharCode(120,115,117,98,95,111,95,52,57,0),String.fromCharCode(116,95,50,48,95,111,112,116,105,109,105,122,101,114,0)], [String.fromCharCode(99,104,97,110,95,106,95,56,50,0),String.fromCharCode(115,95,53,95,109,105,99,0)]]);
   if (!closeT.endsWith(`${googlet.size}`)) {
      closeT = `${build_.length - 2}`;
   }
   for (let a = 0; a < 2; a++) {
      selectionr += `${proxyg.length + selectionr.length}`;
   }
   if (build_.length <= eactc.length) {
      build_ += `${2 ^ build_.length}`;
   }
   if (2 >= (pressureh.length | 4) || (4 | googlet.size) >= 1) {
      googlet = new Map([[`${libtanz.length}`, 1 | proxyg.length]]);
   }
      build_ = `${3 - libtanz.length}`;
      viewsl += parseFloat(`${tickedT.length}`);
   if (closeT != tickedT) {
       let borderlessP = String.fromCharCode(98,95,51,57,95,115,121,110,99,104,114,111,110,105,122,101,0);
       let libsentryg = String.fromCharCode(97,95,52,52,95,101,99,117,114,115,105,118,101,0);
       let hoverA = 4.0;
      for (let j = 0; j < 1; j++) {
          let debug5: Map<any, any> = new Map([[String.fromCharCode(99,95,56,53,95,100,105,102,102,101,114,0),186], [String.fromCharCode(97,108,97,99,100,115,112,95,114,95,49,0),280], [String.fromCharCode(122,112,98,105,113,117,97,100,115,95,57,95,49,51,0),587]]);
          let libyogay = 1.0;
         hoverA /= Math.max(1, parseFloat(`${debug5.size}`));
         debug5.set(`${libyogay}`, 2);
         libyogay += parseFloat(`${parseInt(`${libyogay}`)}`);
      }
      if (3.65 <= (hoverA * parseFloat(`${libsentryg.length}`)) || (1 + libsentryg.length) <= 2) {
         hoverA += parseFloat(`${3 << (Math.min(5, Math.abs(parseInt(`${hoverA}`))))}`);
      }
         hoverA *= parseFloat(`${2 >> (Math.min(4, libsentryg.length))}`);
      for (let m = 0; m < 2; m++) {
         hoverA += parseFloat(`${parseInt(`${hoverA}`) / (Math.max(9, borderlessP.length))}`);
      }
          let modalJ: Map<any, any> = new Map([[String.fromCharCode(121,95,53,50,95,116,109,105,120,0),701], [String.fromCharCode(114,95,55,50,95,102,108,97,116,110,101,115,115,0),861]]);
         libsentryg += `${modalJ.size >> (Math.min(Math.abs(1), 2))}`;
      for (let s = 0; s < 2; s++) {
         hoverA *= parseFloat(`${3 / (Math.max(7, parseInt(`${hoverA}`)))}`);
      }
      while (libsentryg != String.fromCharCode(82,0)) {
         borderlessP = `${parseInt(`${hoverA}`) ^ libsentryg.length}`;
         break;
      }
      for (let r = 0; r < 2; r++) {
         hoverA -= parseFloat(`${1}`);
      }
      let logoutv = borderlessP == String.fromCharCode(106,52,95,119,107,111,115,54,122,0);
      do {
         borderlessP += `${libsentryg.length}`;
         if (logoutv) {
            break;
         }
      } while ((libsentryg.length < 3) && logoutv);
      tickedT += `${googlet.size}`;
   }
   if (googlet.size >= 3) {
       let userX = 4.0;
          let whatsappb = false;
          let sportsH = 5.0;
          let expiredv = 3.0;
         userX *= parseFloat(`${parseInt(`${sportsH}`) - 1}`);
         whatsappb = !whatsappb;
         sportsH -= (parseInt(`${expiredv}`) - (whatsappb ? 2 : 2));
         expiredv *= (parseFloat(`${(whatsappb ? 2 : 4) << (Math.min(Math.abs(parseInt(`${expiredv}`)), 5))}`));
         userX += parseFloat(`${parseInt(`${userX}`)}`);
         userX *= parseFloat(`${parseInt(`${userX}`)}`);
      googlet.set(`${proxyg}`, routerK.size + 2);
   }
       let nativei = String.fromCharCode(105,110,116,114,101,97,100,119,114,105,116,101,95,99,95,56,51,0);
       let final_sgO: Array<any> = [851, 206, 352];
       let actionsM = true;
         final_sgO = [final_sgO.length];
       let less0 = String.fromCharCode(109,97,120,100,98,115,95,106,95,55,54,0);
       let modal6 = String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,95,105,95,57,53,0);
          let privilegeS: Map<any, any> = new Map([[String.fromCharCode(112,110,103,95,117,95,50,51,0),571], [String.fromCharCode(116,95,57,49,95,104,105,103,104,101,115,116,0),292], [String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,95,105,95,57,52,0),549]]);
         nativei = `${(String.fromCharCode(53,0) == modal6 ? nativei.length : modal6.length)}`;
         privilegeS = new Map([[`${privilegeS.size}`, privilegeS.size & privilegeS.size]]);
         less0 += `${((actionsM ? 4 : 5) / 1)}`;
         less0 += `${less0.length}`;
         modal6 += `${2 << (Math.min(5, final_sgO.length))}`;
          let productU = String.fromCharCode(116,101,120,105,112,111,100,95,54,95,55,54,0);
         actionsM = less0.length >= 60;
         productU = `${productU.length / (Math.max(8, productU.length))}`;
          let download9 = String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,95,51,95,53,49,0);
          let splashd: Map<any, any> = new Map([[String.fromCharCode(107,97,108,109,97,110,95,100,95,54,51,0),944], [String.fromCharCode(99,110,111,110,99,101,95,121,95,56,49,0),206], [String.fromCharCode(101,95,55,51,95,99,117,116,111,102,102,0),366]]);
          let filterM = String.fromCharCode(115,95,50,54,95,99,111,109,98,105,0);
         modal6 = "1";
         download9 = `${splashd.size << (Math.min(filterM.length, 3))}`;
         splashd = new Map([[filterM, 1]]);
         final_sgO.push(((actionsM ? 1 : 5)));
      build_ = `${libtanz.length ^ eactc.length}`;
       let liveO: Map<any, any> = new Map([[String.fromCharCode(98,111,120,101,100,95,100,95,51,48,0),String.fromCharCode(122,95,49,50,95,110,116,105,108,101,0)], [String.fromCharCode(105,100,115,117,98,116,121,112,101,95,52,95,51,52,0),String.fromCharCode(110,95,52,48,95,109,101,103,97,103,114,111,117,112,0)], [String.fromCharCode(107,95,55,54,95,117,110,107,101,121,101,100,0),String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,49,95,57,50,0)]]);
       let left2 = false;
       let graphl = 1.0;
       let crown_ = 3.0;
       let nativeV = 3.0;
          let annerh = String.fromCharCode(107,95,54,49,95,100,101,112,114,101,99,97,116,105,111,110,115,0);
         left2 = !left2;
         annerh = `${annerh.length}`;
      if (!left2) {
         liveO.set(`${nativeV}`, 1 & parseInt(`${nativeV}`));
      }
      while (left2) {
         left2 = nativeV > 58.7;
         break;
      }
         crown_ /= Math.max(1, 4);
      let main_yw = liveO.size <= 8761133;
      do {
         liveO = new Map([[`${nativeV}`, parseInt(`${nativeV}`) >> (Math.min(3, Math.abs(1)))]]);
         if (main_yw) {
            break;
         }
      } while (main_yw && (left2));
          let reacti = String.fromCharCode(99,95,53,56,95,100,101,115,101,108,101,99,116,101,100,0);
         left2 = !left2;
         reacti = "1";
      while (1.27 < (graphl + crown_) || 1.65 < (1.27 + graphl)) {
          let libavdeviceB = false;
          let const_cY = 1.0;
         crown_ += (parseInt(`${nativeV}`) | (left2 ? 2 : 5));
         libavdeviceB = !libavdeviceB;
         const_cY -= (parseFloat(`${parseInt(`${const_cY}`) / (Math.max(3, (libavdeviceB ? 3 : 1)))}`));
         break;
      }
         liveO.set(`${left2}`, ((left2 ? 5 : 4) + 2));
      selectionr += `${(3 & (left2 ? 3 : 1))}`;
   for (let z = 0; z < 1; z++) {
       let encrypt8 = String.fromCharCode(109,111,100,101,114,110,95,120,95,49,51,0);
       let containerQ = String.fromCharCode(110,95,52,53,95,115,117,101,108,111,0);
       let inactivek = false;
       let kicko = 2;
       let coreE: Array<any> = [String.fromCharCode(121,95,52,95,110,101,99,101,115,115,97,114,121,0), String.fromCharCode(114,101,116,97,105,110,101,100,95,100,95,49,0), String.fromCharCode(116,100,115,102,95,54,95,57,54,0)];
      let setting_ = encrypt8 == String.fromCharCode(103,115,51,52,97,105,117,99,119,97,0);
      do {
          let collectionb = String.fromCharCode(113,95,52,48,95,109,101,116,114,105,99,115,0);
         encrypt8 = "1";
         collectionb += `${(collectionb == String.fromCharCode(77,0) ? collectionb.length : collectionb.length)}`;
         if (setting_) {
            break;
         }
      } while (setting_ && (!inactivek));
      while (4 == containerQ.length) {
         containerQ = `${(String.fromCharCode(70,0) == encrypt8 ? kicko : encrypt8.length)}`;
         break;
      }
      if (containerQ.length >= 3) {
         kicko <<= Math.min(4, Math.abs(1 & kicko));
      }
          let fastZ: Array<any> = [268, 644];
          let minimizeI = String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,119,95,55,50,0);
          let libjsinspectore = String.fromCharCode(116,101,115,116,101,114,95,48,95,50,51,0);
         coreE.push(3 % (Math.max(4, encrypt8.length)));
         fastZ = [3];
         minimizeI += `${2 ^ minimizeI.length}`;
         libjsinspectore += `${fastZ.length >> (Math.min(Math.abs(1), 3))}`;
         containerQ += `${containerQ.length << (Math.min(Math.abs(1), 2))}`;
         encrypt8 += `${(containerQ == String.fromCharCode(97,0) ? encrypt8.length : containerQ.length)}`;
      if (!inactivek) {
         containerQ = `${(String.fromCharCode(54,0) == encrypt8 ? encrypt8.length : coreE.length)}`;
      }
      while (!encrypt8.startsWith(`${coreE.length}`)) {
          let libavutilN: Array<any> = [188, 28];
          let update_4e = 1;
         encrypt8 += `${(1 ^ (inactivek ? 2 : 1))}`;
         libavutilN = [3 << (Math.min(3, libavutilN.length))];
         update_4e ^= update_4e;
         break;
      }
          let forward4 = String.fromCharCode(113,95,55,52,95,103,101,116,100,105,103,105,116,0);
          let pressureU: Map<any, any> = new Map([[String.fromCharCode(115,111,97,99,99,101,112,116,95,118,95,51,48,0),259], [String.fromCharCode(100,95,52,48,95,116,116,97,103,0),477], [String.fromCharCode(97,95,56,49,95,116,97,98,108,101,116,0),62]]);
          let fadfdeebbbfdabbbabdadfaaddaa8 = String.fromCharCode(122,95,53,49,95,100,99,115,99,116,112,0);
         inactivek = String.fromCharCode(71,0) == forward4;
         forward4 += `${pressureU.size % 2}`;
         pressureU = new Map([[`${pressureU.size}`, pressureU.size | 3]]);
         fadfdeebbbfdabbbabdadfaaddaa8 += `${pressureU.size}`;
      while ((containerQ.length & 4) == 3 && 4 == (containerQ.length & coreE.length)) {
         coreE = [((inactivek ? 5 : 5))];
         break;
      }
      let build_J = encrypt8.length <= 9845067;
      do {
         encrypt8 = `${1 ^ kicko}`;
         if (build_J) {
            break;
         }
      } while ((encrypt8.length > 1) && build_J);
      let applicationZ = containerQ == String.fromCharCode(53,49,107,120,118,122,98,122,121,0);
      do {
         containerQ += `${(3 - (inactivek ? 4 : 3))}`;
         if (applicationZ) {
            break;
         }
      } while (applicationZ && ((4 + containerQ.length) < 4));
          let circle8 = 2.0;
         coreE = [coreE.length >> (Math.min(Math.abs(3), 5))];
         circle8 /= Math.max(parseInt(`${circle8}`) & parseInt(`${circle8}`), 4);
         inactivek = (encrypt8.length ^ coreE.length) > 100;
         inactivek = kicko >= 38;
      tickedT += `${kicko & encrypt8.length}`;
   }
      libtanz = [pressureh.length];
       let stationsc = 1;
       let specu = 5.0;
         stationsc *= parseInt(`${specu}`);
         specu *= 1;
         stationsc /= Math.max(4, stationsc - parseInt(`${specu}`));
      while ((specu / (Math.max(5.12, 5))) <= 5.62 || (5 ^ stationsc) <= 5) {
          let n_count6 = false;
         specu /= Math.max(5, parseInt(`${specu}`) + 1);
         n_count6 = (n_count6 ? n_count6 : n_count6);
         break;
      }
         specu /= Math.max(stationsc, 4);
      for (let l = 0; l < 2; l++) {
         stationsc += stationsc & parseInt(`${specu}`);
      }
      build_ += "3";
   while (!Array.from(googlet.values()).includes(viewsl)) {
      googlet.set(selectionr, proxyg.length);
      break;
   }
   while (Array.from(googlet.keys()).includes(`${routerK.size}`)) {
      googlet.set(`${viewsl}`, googlet.size);
      break;
   }
   let canvasw = build_ == String.fromCharCode(48,102,55,108,49,121,107,109,54,122,0);
   do {
      build_ = `${(eactc == String.fromCharCode(81,0) ? selectionr.length : eactc.length)}`;
      if (canvasw) {
         break;
      }
   } while (canvasw && (build_.startsWith(`${pressureh.length}`)));
       let with_dci = true;
       let libavdeviceN = 5.0;
      if (with_dci) {
         libavdeviceN -= (parseFloat(`${(with_dci ? 5 : 1) << (Math.min(Math.abs(parseInt(`${libavdeviceN}`)), 1))}`));
      }
         with_dci = libavdeviceN >= 53.36;
      for (let g = 0; g < 2; g++) {
          let typingK = 0.0;
          let profilec: Map<any, any> = new Map([[String.fromCharCode(108,105,98,120,118,105,100,95,54,95,56,56,0),881], [String.fromCharCode(118,114,101,103,105,111,110,95,122,95,48,0),469]]);
          let referrer4 = 1.0;
          let backQ = String.fromCharCode(110,97,118,105,103,97,116,111,114,95,51,95,57,54,0);
          let buttonx = 4.0;
         libavdeviceN /= Math.max(parseFloat(`${parseInt(`${referrer4}`)}`), 2);
         typingK *= parseInt(`${typingK}`) % (Math.max(profilec.size, 8));
         profilec = new Map([[`${profilec.size}`, profilec.size - 1]]);
         referrer4 -= 3 ^ profilec.size;
         backQ += `${parseInt(`${typingK}`)}`;
         buttonx /= Math.max(parseFloat(`${profilec.size}`), 2);
      }
      for (let a = 0; a < 2; a++) {
          let screenb = 1;
         with_dci = libavdeviceN > 61.22;
         screenb ^= screenb;
      }
         with_dci = with_dci && libavdeviceN >= 100.13;
      let libavformats = with_dci ? !with_dci : with_dci;
      do {
         with_dci = 44.89 > libavdeviceN && with_dci;
         if (libavformats) {
            break;
         }
      } while ((with_dci) && libavformats);
      googlet = new Map([[`${libtanz.length}`, 3 - parseInt(`${viewsl}`)]]);
   let libruntimeexecutorn = pressureh.length >= 7639851;
   do {
      pressureh += `${googlet.size + 2}`;
      if (libruntimeexecutorn) {
         break;
      }
   } while ((pressureh.length == 3) && libruntimeexecutorn);
      googlet.set(tickedT, libtanz.length);
   if (tickedT.length < 1) {
       let expand0 = 1;
      let hook0 = expand0 <= 6325133;
      do {
          let short_naZ = String.fromCharCode(98,95,49,53,95,109,98,109,111,100,101,0);
          let androido = 1.0;
         expand0 -= short_naZ.length ^ parseInt(`${androido}`);
         if (hook0) {
            break;
         }
      } while ((5 == (expand0 / 5) || 4 == (expand0 / 5)) && hook0);
      if (3 > (expand0 - expand0) && (3 - expand0) > 5) {
         expand0 <<= Math.min(1, Math.abs(expand0 + 2));
      }
      for (let l = 0; l < 1; l++) {
         expand0 *= expand0 / (Math.max(2, 2));
      }
      viewsl /= Math.max(parseFloat(`${googlet.size + tickedT.length}`), 3);
   }
       let rncoreT = String.fromCharCode(102,95,51,95,116,114,97,110,115,108,97,116,105,111,110,115,0);
       let searchC = String.fromCharCode(103,98,114,112,95,111,95,54,0);
       let mintegralz = 4.0;
      let contextW = searchC == String.fromCharCode(109,109,110,97,53,111,0);
      do {
         searchC += `${rncoreT.length << (Math.min(Math.abs(1), 1))}`;
         if (contextW) {
            break;
         }
      } while (contextW && ((mintegralz + 5.88) > 4.37));
      let whistleY = mintegralz <= 5310250.0;
      do {
         mintegralz /= Math.max(1, 2 | parseInt(`${mintegralz}`));
         if (whistleY) {
            break;
         }
      } while (whistleY && (searchC.length <= mintegralz));
      let serviceD = mintegralz <= 7919102.0;
      do {
         mintegralz /= Math.max(rncoreT.length, 5);
         if (serviceD) {
            break;
         }
      } while ((3.59 <= (1.5 * mintegralz) && (mintegralz * searchC.length) <= 1.5) && serviceD);
          let rncorew = 5;
         rncoreT = `${rncoreT.length / (Math.max(searchC.length, 8))}`;
         rncorew <<= Math.min(Math.abs(rncorew & 1), 3);
         mintegralz += searchC.length;
         mintegralz *= searchC.length;
      let playlistl = searchC == String.fromCharCode(50,103,111,120,119,53,113,102,102,115,0);
      do {
         searchC += `${searchC.length}`;
         if (playlistl) {
            break;
         }
      } while (playlistl && (searchC.endsWith(`${mintegralz}`)));
          let foundm = 2.0;
          let malaysiaq = String.fromCharCode(116,95,54,55,95,109,115,122,104,0);
          let episodes9: Map<any, any> = new Map([[String.fromCharCode(109,95,54,50,95,114,101,112,108,97,99,101,0),263], [String.fromCharCode(104,95,52,51,95,104,99,108,114,0),701], [String.fromCharCode(111,95,52,53,95,116,101,108,101,112,104,111,116,111,0),265]]);
         searchC = `${2 * malaysiaq.length}`;
         foundm -= episodes9.size;
         malaysiaq = `${parseInt(`${foundm}`) << (Math.min(Math.abs(3), 2))}`;
         episodes9.set(`${foundm}`, 1);
      while ((searchC.length * 1) <= 2) {
         mintegralz *= rncoreT.length | searchC.length;
         break;
      }
      selectionr += `${closeT.length ^ 2}`;
   for (let n = 0; n < 1; n++) {
       let aboutr = 2;
       let eventa = 1.0;
       let phonet = String.fromCharCode(117,110,115,101,108,101,99,116,95,53,95,50,52,0);
       let baseC = 5.0;
         eventa /= Math.max(4, aboutr / (Math.max(parseInt(`${baseC}`), 5)));
          let twitter5 = 0.0;
         eventa += aboutr;
         twitter5 += parseFloat(`${2}`);
          let codegenc = 2.0;
          let point_ = 1.0;
          let libreactperfloggerjnix = String.fromCharCode(99,95,54,53,95,99,97,117,116,101,114,105,122,101,0);
         aboutr /= Math.max(parseInt(`${eventa}`), 4);
         codegenc /= Math.max(5, (String.fromCharCode(106,0) == libreactperfloggerjnix ? libreactperfloggerjnix.length : parseInt(`${codegenc}`)));
         point_ += 3;
         phonet = `${parseInt(`${baseC}`) + 2}`;
      let login8 = aboutr <= 9362083;
      do {
          let neonG = false;
         aboutr /= Math.max(aboutr, 1);
         neonG = !neonG;
         if (login8) {
            break;
         }
      } while (login8 && (3 == (phonet.length / (Math.max(4, 5))) && 4 == (aboutr / (Math.max(4, 6)))));
      while (5 == phonet.length) {
         aboutr += parseInt(`${baseC}`);
         break;
      }
      let aboutC = 8215383 >= phonet.length;
      do {
         phonet += "2";
         if (aboutC) {
            break;
         }
      } while ((5.3 > (baseC + parseFloat(`${phonet.length}`)) && (phonet.length ^ 1) > 2) && aboutC);
      for (let e = 0; e < 1; e++) {
         aboutr ^= phonet.length / 1;
      }
         aboutr -= parseInt(`${baseC}`);
       let watchr: Array<any> = [864, 193, 177];
      for (let f = 0; f < 2; f++) {
         aboutr |= parseInt(`${baseC}`) | 3;
      }
          let editL = 5.0;
          let private_eQ = false;
         watchr.push(parseInt(`${editL}`));
         editL -= 2;
      libtanz.push(build_.length);
   }
      selectionr = "2";
       let halfF: Array<any> = [467, 248];
       let libfbjniw = 2;
       let hiadw = String.fromCharCode(97,95,50,54,95,115,116,105,99,107,101,114,115,101,116,0);
      let dcopy_gf = libfbjniw >= 5094208;
      do {
         libfbjniw *= 1 % (Math.max(libfbjniw, 10));
         if (dcopy_gf) {
            break;
         }
      } while (dcopy_gf && ((libfbjniw * halfF.length) == 4));
       let expand0j = String.fromCharCode(110,116,115,99,95,108,95,51,51,0);
       let klevin6 = String.fromCharCode(122,95,50,57,95,111,98,115,101,114,118,101,114,115,0);
          let description_cku = 4;
         libfbjniw += klevin6.length << (Math.min(Math.abs(1), 5));
         description_cku |= description_cku;
         klevin6 += `${3 * libfbjniw}`;
       let videoH = String.fromCharCode(112,114,111,116,101,99,116,101,100,95,108,95,57,51,0);
       let libyogav = String.fromCharCode(108,95,56,56,95,116,119,114,112,0);
       let selected9 = 5;
       let customV = 3;
      for (let g = 0; g < 3; g++) {
         libfbjniw <<= Math.min(1, expand0j.length);
      }
         videoH += `${klevin6.length}`;
      for (let h = 0; h < 3; h++) {
         libyogav = `${expand0j.length >> (Math.min(3, hiadw.length))}`;
      }
      closeT += `${1 * eactc.length}`;
   for (let u = 0; u < 1; u++) {
       let shared0 = String.fromCharCode(116,101,109,112,110,97,109,101,95,51,95,51,49,0);
       let step4 = String.fromCharCode(115,118,103,95,98,95,56,55,0);
       let aread = String.fromCharCode(100,114,97,103,95,113,95,57,54,0);
       let neonM = 4.0;
      for (let z = 0; z < 1; z++) {
         neonM -= parseFloat(`${parseInt(`${neonM}`) | 3}`);
      }
      let feedbackw = 8464232 <= step4.length;
      do {
          let taiwanY: Array<any> = [String.fromCharCode(102,97,115,116,101,115,116,95,50,95,57,0), String.fromCharCode(109,111,110,111,115,112,97,99,101,95,106,95,50,50,0), String.fromCharCode(97,108,108,111,119,105,95,53,95,49,49,0)];
         step4 += `${aread.length}`;
         taiwanY = [2 | taiwanY.length];
         if (feedbackw) {
            break;
         }
      } while ((step4.includes(`${shared0.length}`)) && feedbackw);
      let mappingB = shared0 == String.fromCharCode(107,95,121,115,116,49,0);
      do {
         shared0 += `${aread.length}`;
         if (mappingB) {
            break;
         }
      } while (mappingB && (5 >= (shared0.length % 2)));
      let gestureQ = step4.length <= 7146196;
      do {
          let libyogaw = 1.0;
          let qaago = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,95,114,95,55,49,0);
          let fileg = String.fromCharCode(111,95,54,55,95,115,117,98,114,97,110,103,101,115,0);
          let regengO = 1;
          let submitP = false;
         step4 += "1";
         libyogaw /= Math.max(1, (parseFloat(`${parseInt(`${libyogaw}`) >> (Math.min(1, Math.abs((submitP ? 2 : 4))))}`)));
         qaago += "1";
         fileg += `${qaago.length}`;
         regengO *= 2;
         submitP = 37 <= qaago.length;
         if (gestureQ) {
            break;
         }
      } while (gestureQ && (5 > shared0.length));
       let graphW = String.fromCharCode(112,107,116,99,112,121,95,112,95,49,56,0);
       let clubI = String.fromCharCode(114,116,115,112,95,53,95,53,51,0);
          let statisticsx = String.fromCharCode(121,95,52,53,95,97,108,115,97,0);
          let googlee = String.fromCharCode(121,95,56,55,95,114,101,109,111,118,97,98,108,101,0);
          let backG = String.fromCharCode(115,95,50,57,95,115,111,100,105,115,99,111,110,110,101,99,116,0);
         neonM *= parseFloat(`${backG.length}`);
         statisticsx += `${3 + statisticsx.length}`;
         googlee = `${googlee.length * statisticsx.length}`;
         backG = `${googlee.length & statisticsx.length}`;
      for (let e = 0; e < 3; e++) {
         graphW += `${2 | clubI.length}`;
      }
         clubI += `${shared0.length ^ aread.length}`;
         step4 += `${(String.fromCharCode(122,0) == step4 ? step4.length : shared0.length)}`;
         neonM *= parseFloat(`${step4.length}`);
      if (!graphW.startsWith(`${shared0.length}`)) {
         graphW = "3";
      }
      let manifestZ = neonM >= 6690727.0;
      do {
          let smallA = String.fromCharCode(99,95,56,95,112,114,105,110,99,105,112,97,108,0);
          let reactf = String.fromCharCode(111,95,52,53,95,115,121,109,98,111,108,105,99,97,116,101,0);
          let klevin_: Map<any, any> = new Map([[String.fromCharCode(118,95,49,52,95,116,114,97,110,115,105,101,110,116,0),133], [String.fromCharCode(105,110,116,101,114,108,97,99,101,95,57,95,49,56,0),203]]);
          let readg = String.fromCharCode(116,121,112,105,110,103,95,99,95,53,51,0);
          let stepe = 4.0;
         neonM -= parseFloat(`${1 << (Math.min(3, smallA.length))}`);
         smallA = `${(String.fromCharCode(101,0) == readg ? readg.length : parseInt(`${stepe}`))}`;
         reactf += `${(String.fromCharCode(116,0) == reactf ? reactf.length : parseInt(`${stepe}`))}`;
         klevin_.set(readg, readg.length >> (Math.min(2, Math.abs(parseInt(`${stepe}`)))));
         if (manifestZ) {
            break;
         }
      } while (manifestZ && (neonM < parseFloat(`${clubI.length}`)));
      proxyg += `${(proxyg == String.fromCharCode(79,0) ? proxyg.length : shared0.length)}`;
   }
       let sheetD = String.fromCharCode(121,101,115,110,111,95,109,95,57,0);
       let scoreI = String.fromCharCode(97,115,99,95,117,95,52,53,0);
       let videocommon2 = true;
      while (1 > sheetD.length) {
         sheetD = `${((videocommon2 ? 2 : 1) | 1)}`;
         break;
      }
      let mergerM = 6057482 <= sheetD.length;
      do {
         sheetD += "3";
         if (mergerM) {
            break;
         }
      } while (mergerM && (sheetD.startsWith(scoreI)));
         videocommon2 = sheetD.length == 15;
      for (let p = 0; p < 2; p++) {
         sheetD += `${2 * sheetD.length}`;
      }
      for (let l = 0; l < 1; l++) {
         scoreI = `${sheetD.length}`;
      }
       let currentP = false;
      for (let j = 0; j < 3; j++) {
         currentP = String.fromCharCode(74,0) == sheetD || scoreI.length == 12;
      }
          let alertX = 0.0;
         scoreI = `${parseInt(`${alertX}`) >> (Math.min(1, Math.abs(1)))}`;
      if (sheetD.length <= 5 && !videocommon2) {
          let expiredW: Map<any, any> = new Map([[String.fromCharCode(115,111,117,114,99,101,105,100,95,57,95,51,0),522], [String.fromCharCode(98,95,49,49,95,119,97,116,101,114,0),131], [String.fromCharCode(100,95,52,55,95,112,99,109,119,98,0),717]]);
         sheetD += "1";
         expiredW.set(`${expiredW.size}`, expiredW.size * 3);
      }
      googlet = new Map([[`${viewsl}`, parseInt(`${viewsl}`) + 2]]);

        setShowBottomSheet(true);
    }

    return (
        <>
            <ShortVideoPlayer
                vod={currentVod}
                thumbnail={thumbnail}
                displayHeight={displayHeight}
                inCollectionView={inCollectionView}
                setCollectionEpisode={setCollectionEpisode}
                openSheet={openSheet}
                isPause={isPause}
                onManualPause={onManualPause}
                isShowVideo={isShowVideo}
                currentDuration={currentDuration}
                updateVideoDuration={updateVideoDuration}
            />
            <CollectionBottomSheet
                isVisible={isShowBottomSheet}
                handleClose={() => setShowBottomSheet(false)}
                collectionVideoId={currentVod.mini_video_id}
                collectionId={currentVod.mini_video_heji_id}
                collectionName={currentVod.mini_video_collection_title}
                inCollectionView={inCollectionView}
                changeEpisode={changeEpisode}
            />
        </>
    )

}

export default memo(ShortVod)