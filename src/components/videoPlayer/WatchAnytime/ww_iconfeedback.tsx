import React, { useState, memo, useCallback, useEffect } from 'react';
import ShortVideoPlayer from './ww_step';
import CollectionBottomSheet from '../../miniCollection/ww_animation_libcrashsdk';

interface wwIndexDice {
    thumbnail?: string;
    displayHeight: number;
    vod: any;
    isPause: boolean;
    onManualPause: (value: boolean) => void;
    isShowVideo: boolean,
    currentDuration: number,
    updateVideoDuration: (duration: number) => any,
    isActive: boolean,
}

function ShortVod({
    vod,
    thumbnail,
    displayHeight = 0,
    isPause = true,
    onManualPause,
    isShowVideo,
    currentDuration,
    updateVideoDuration,
    isActive,
}: wwIndexDice) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [currentVod, setVod] = useState(vod);
    const [showVod, setShowVod] = useState(true);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
       let volumeC = 1.0;
    let notificationfillemptyM = 4.0;
    let iconmoree: Array<any> = [String.fromCharCode(102,95,50,57,95,111,98,115,101,114,118,105,110,103,0), String.fromCharCode(115,95,56,51,95,114,117,108,101,115,0)];
    let libavformatE: Map<any, any> = new Map([[String.fromCharCode(98,95,54,49,95,115,104,97,108,108,0),542], [String.fromCharCode(104,95,53,52,95,105,100,99,116,99,111,108,0),127], [String.fromCharCode(98,95,54,55,95,112,101,114,109,117,116,101,115,0),347]]);
    let feedbackX = 1.0;
    let middleO: Map<any, any> = new Map([[String.fromCharCode(115,95,52,49,95,118,97,114,121,0),false ], [String.fromCharCode(115,95,55,95,110,101,97,114,98,121,0),true ]]);
    let data4 = true;
    let catagoryv = String.fromCharCode(104,105,110,116,101,100,95,103,95,51,55,0);
    let iconstarx = 0.0;
    let unticka = 4.0;
    let arrowupK: Array<any> = [630, 321, 968];
    let orangeclockS = String.fromCharCode(101,105,112,118,95,54,95,55,48,0);
      middleO = new Map([[`${iconmoree.length}`, catagoryv.length / (Math.max(3, 6))]]);
       let awayZ = String.fromCharCode(97,108,108,111,119,115,95,112,95,57,48,0);
       let libfbjniK = false;
       let bufferN = String.fromCharCode(104,95,53,53,95,99,111,109,112,111,110,101,110,116,0);
         libfbjniK = ((bufferN.length ^ (libfbjniK ? bufferN.length : 29)) > 29);
       let dropdownA: Array<any> = [140, 537, 670];
       let clear8: Array<any> = [35, 424, 4];
         bufferN += `${awayZ.length}`;
       let libjsijniprofilerI = String.fromCharCode(99,108,111,115,101,95,52,95,52,48,0);
         clear8 = [3];
          let predictionarrowr = 3.0;
          let description_pb: Array<any> = [372, 185, 986];
         libfbjniK = dropdownA.includes(description_pb[description_pb.length - 1]);
         predictionarrowr *= parseInt(`${predictionarrowr}`);
         clear8 = [libjsijniprofilerI.length * clear8.length];
      if (libfbjniK && awayZ.length < 2) {
          let internet2 = String.fromCharCode(114,95,52,54,95,99,97,116,101,103,111,114,121,0);
          let homel = true;
          let string8 = false;
          let xadsdkn = 0;
          let becomeI = String.fromCharCode(102,105,110,116,95,49,95,52,48,0);
         libfbjniK = (((!libfbjniK ? clear8.length : 3) | clear8.length) == 3);
         internet2 += `${((homel ? 2 : 3) / 2)}`;
         homel = !string8;
         xadsdkn |= ((homel ? 5 : 3) ^ 3);
         becomeI = `${becomeI.length >> (Math.min(Math.abs(2), 3))}`;
      }
       let becomea = 2.0;
      notificationfillemptyM -= parseFloat(`${3 & parseInt(`${unticka}`)}`);
      iconmoree = [parseInt(`${feedbackX}`)];
      unticka /= Math.max(5, parseFloat(`${parseInt(`${notificationfillemptyM}`)}`));
   let zoomG = 5824518.0 >= unticka;
   do {
       let paginationZ = String.fromCharCode(119,95,53,52,95,115,99,114,101,101,110,115,0);
       let long_0S = 3;
         paginationZ = "2";
      if (long_0S >= 2) {
         long_0S /= Math.max(1, paginationZ.length);
      }
         paginationZ += `${paginationZ.length % (Math.max(4, long_0S))}`;
      while (paginationZ.length >= long_0S) {
          let reactnativeultimatelistviewo = true;
          let pathN = false;
          let graphics1 = String.fromCharCode(109,97,116,99,104,105,110,103,95,106,95,55,48,0);
         paginationZ += `${paginationZ.length}`;
         reactnativeultimatelistviewo = !graphics1.includes(`${pathN}`);
         pathN = graphics1.endsWith(`${pathN}`);
         break;
      }
      if (3 >= (2 / (Math.max(3, long_0S)))) {
         long_0S += 3 - paginationZ.length;
      }
         long_0S >>= Math.min(1, Math.abs(paginationZ.length + long_0S));
      unticka *= parseFloat(`${parseInt(`${volumeC}`)}`);
      if (zoomG) {
         break;
      }
   } while ((Array.from(libavformatE.values()).includes(unticka)) && zoomG);
      arrowupK.push(parseInt(`${notificationfillemptyM}`));
   let guides = middleO.size >= 8763459;
   do {
       let w_countF: Map<any, any> = new Map([[String.fromCharCode(115,104,97,108,108,95,106,95,56,48,0),485], [String.fromCharCode(105,95,54,53,95,112,114,101,118,105,101,119,101,100,0),8]]);
       let round6 = 4.0;
      let final_2v = w_countF.size <= 9397383;
      do {
         w_countF.set(`${round6}`, w_countF.size);
         if (final_2v) {
            break;
         }
      } while (final_2v && (1.11 >= (w_countF.size / (Math.max(6, round6))) && (w_countF.size / (Math.max(4, round6))) >= 1.11));
      let string_ = 7099515 <= w_countF.size;
      do {
         w_countF.set(`${round6}`, parseInt(`${round6}`));
         if (string_) {
            break;
         }
      } while ((w_countF.size >= 5) && string_);
      if (!Array.from(w_countF.values()).includes(round6)) {
         round6 /= Math.max(4, parseInt(`${round6}`));
      }
      let stepj = round6 >= 9042199.0;
      do {
         round6 -= w_countF.size;
         if (stepj) {
            break;
         }
      } while (((w_countF.size * 2) < 2 && (2.71 * round6) < 4.25) && stepj);
         w_countF = new Map([[`${w_countF.size}`, parseInt(`${round6}`) << (Math.min(Math.abs(2), 1))]]);
         round6 /= Math.max(5, parseInt(`${round6}`));
      middleO.set(`${unticka}`, parseInt(`${unticka}`));
      if (guides) {
         break;
      }
   } while (((middleO.size * libavformatE.size) > 2) && guides);
      libavformatE.set(`${volumeC}`, middleO.size);
   for (let w = 0; w < 1; w++) {
       let static_e07 = 3.0;
      if (3.46 < static_e07) {
         static_e07 *= parseInt(`${static_e07}`);
      }
      let fastforwardr = static_e07 >= 5620663.0;
      do {
          let iconedit3 = 0.0;
          let attributedstringA = 2;
          let baiduF: Array<any> = [String.fromCharCode(108,95,55,50,95,117,110,99,111,100,101,100,0), String.fromCharCode(114,101,109,97,114,107,95,116,95,51,49,0)];
         static_e07 *= baiduF.length;
         iconedit3 += 2 * parseInt(`${iconedit3}`);
         attributedstringA /= Math.max(5, parseInt(`${iconedit3}`) >> (Math.min(1, Math.abs(attributedstringA))));
         baiduF = [parseInt(`${iconedit3}`)];
         if (fastforwardr) {
            break;
         }
      } while (fastforwardr && (4.78 >= (static_e07 * 3.70) || 2.38 >= (3.70 + static_e07)));
         static_e07 -= parseInt(`${static_e07}`) >> (Math.min(Math.abs(parseInt(`${static_e07}`)), 1));
      libavformatE = new Map([[`${arrowupK.length}`, parseInt(`${notificationfillemptyM}`) >> (Math.min(arrowupK.length, 3))]]);
   }
       let prediction9 = 1;
       let optionsp = String.fromCharCode(122,95,51,51,95,117,116,105,108,105,116,121,0);
         optionsp += `${(optionsp == String.fromCharCode(75,0) ? optionsp.length : prediction9)}`;
      let libjsinspectorh = 9495629 <= prediction9;
      do {
          let x_managere = 5.0;
          let fieldW: Map<any, any> = new Map([[String.fromCharCode(102,95,54,95,115,116,101,108,108,97,114,0),580], [String.fromCharCode(111,95,54,55,95,112,114,111,120,121,0),278]]);
          let zhubo_ = 1;
          let playk = String.fromCharCode(113,117,97,108,105,102,121,95,113,95,57,52,0);
         prediction9 &= fieldW.size;
         x_managere -= parseFloat(`${2}`);
         fieldW.set(playk, playk.length >> (Math.min(Math.abs(1), 5)));
         zhubo_ &= zhubo_ ^ playk.length;
         if (libjsinspectorh) {
            break;
         }
      } while (libjsinspectorh && (4 >= (prediction9 + optionsp.length) || 4 >= (prediction9 + optionsp.length)));
      for (let k = 0; k < 2; k++) {
          let button8: Array<any> = [306, 256];
          let models8 = 4.0;
          let castingM = 0.0;
          let gray8 = String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,95,56,95,51,57,0);
         prediction9 *= prediction9 ^ 1;
         button8 = [parseInt(`${models8}`)];
         models8 -= parseInt(`${castingM}`);
         castingM /= Math.max(4, 3);
         gray8 = `${parseInt(`${models8}`) >> (Math.min(Math.abs(parseInt(`${castingM}`)), 2))}`;
      }
      if (5 == (optionsp.length + 2)) {
         optionsp += `${prediction9}`;
      }
          let t_imageC = 4;
          let umengm: Array<any> = [114, 410];
         optionsp = `${t_imageC % 3}`;
         t_imageC &= umengm.length;
         umengm.push(umengm.length & 2);
       let toponU = 4.0;
       let orangeclockK = 1.0;
      libavformatE.set(`${data4}`, (parseInt(`${notificationfillemptyM}`) | (data4 ? 2 : 1)));
      iconmoree = [3];
      volumeC /= Math.max(5, (catagoryv == String.fromCharCode(95,0) ? parseInt(`${volumeC}`) : catagoryv.length));
   let defaultroombgY = unticka >= 5553772.0;
   do {
      unticka *= parseFloat(`${2}`);
      if (defaultroombgY) {
         break;
      }
   } while (defaultroombgY && (2.47 < (4.34 - unticka) && (parseInt(`${unticka}`) - middleO.size) < 4));
       let vipsportu = String.fromCharCode(97,112,99,109,95,55,95,52,54,0);
         vipsportu += `${(vipsportu == String.fromCharCode(77,0) ? vipsportu.length : vipsportu.length)}`;
      let videovarK = vipsportu.length <= 8533415;
      do {
          let libavdevices = String.fromCharCode(105,99,101,95,102,95,55,48,0);
          let f_lockk = true;
          let rncoreG = String.fromCharCode(108,111,111,107,95,56,95,52,56,0);
          let greytickn = String.fromCharCode(118,95,52,55,95,112,111,115,108,105,115,116,115,0);
         vipsportu = `${((f_lockk ? 1 : 2))}`;
         libavdevices += `${libavdevices.length & 3}`;
         f_lockk = greytickn.length >= 55 || 55 >= rncoreG.length;
         rncoreG = `${greytickn.length * libavdevices.length}`;
         if (videovarK) {
            break;
         }
      } while (videovarK && (!vipsportu.endsWith(`${vipsportu.length}`)));
         vipsportu += "2";
      data4 = !catagoryv.startsWith(`${feedbackX}`);
   for (let z = 0; z < 3; z++) {
      volumeC *= parseInt(`${iconstarx}`);
   }
   let libfollyv = middleO.size <= 8175260;
   do {
       let popupd = false;
       let agreementQ = 0.0;
       let basketballhometeamm = String.fromCharCode(112,95,49,51,95,103,97,109,117,116,115,0);
       let libfbF: Array<any> = [271, 321, 347];
       let model9: Array<any> = [294, 252, 150];
      while (libfbF.length > model9.length) {
         libfbF.push(model9.length & 1);
         break;
      }
      for (let r = 0; r < 1; r++) {
         model9 = [parseInt(`${agreementQ}`)];
      }
         popupd = (45 <= (libfbF.length * (popupd ? 45 : libfbF.length)));
      for (let e = 0; e < 1; e++) {
          let renew1: Map<any, any> = new Map([[String.fromCharCode(100,95,49,57,95,109,97,110,97,103,101,115,0),String.fromCharCode(104,97,115,104,97,98,108,101,95,54,95,54,52,0)], [String.fromCharCode(109,95,56,48,95,115,104,97,114,112,101,110,105,110,103,0),String.fromCharCode(98,95,52,57,95,111,110,101,111,102,0)]]);
          let libsentryq = 3;
         libfbF.push(3 | parseInt(`${agreementQ}`));
         renew1 = new Map([[`${renew1.size}`, renew1.size & 2]]);
         libsentryq <<= Math.min(Math.abs(renew1.size / (Math.max(4, libsentryq))), 1);
      }
       let combinedH = String.fromCharCode(122,95,49,56,95,112,97,115,99,97,108,0);
       let webviewM = String.fromCharCode(112,95,54,55,95,105,114,114,101,108,101,118,97,110,116,0);
      let moon_ = String.fromCharCode(99,120,51,56,55,99,111,116,0) == basketballhometeamm;
      do {
         basketballhometeamm = `${1 & parseInt(`${agreementQ}`)}`;
         if (moon_) {
            break;
         }
      } while (moon_ && (basketballhometeamm.endsWith(`${libfbF.length}`)));
          let scoreN: Array<any> = [String.fromCharCode(99,97,112,115,95,118,95,51,48,0), String.fromCharCode(109,111,100,105,102,121,95,50,95,50,55,0)];
          let m_hash8: Map<any, any> = new Map([[String.fromCharCode(103,114,97,112,104,113,108,95,114,95,55,50,0),String.fromCharCode(114,112,99,103,101,110,95,99,95,55,52,0)], [String.fromCharCode(121,95,53,57,95,97,108,103,115,0),String.fromCharCode(97,110,97,108,121,122,105,110,103,95,103,95,52,57,0)], [String.fromCharCode(116,111,110,97,108,95,119,95,51,53,0),String.fromCharCode(108,95,54,56,95,118,112,99,99,0)]]);
         combinedH = `${parseInt(`${agreementQ}`) ^ m_hash8.size}`;
         scoreN = [2 % (Math.max(5, scoreN.length))];
         m_hash8.set(`${scoreN.length}`, scoreN.length);
         basketballhometeamm = `${(String.fromCharCode(85,0) == combinedH ? combinedH.length : parseInt(`${agreementQ}`))}`;
      while ((agreementQ + 5.53) > 2.54) {
         agreementQ *= 1;
         break;
      }
         combinedH = `${parseInt(`${agreementQ}`) * webviewM.length}`;
      if (5.52 < (3.5 * agreementQ)) {
          let country3 = String.fromCharCode(103,95,56,55,95,114,101,113,117,105,114,101,0);
          let controlsr = false;
          let termsO = String.fromCharCode(99,108,101,97,110,117,112,95,121,95,50,51,0);
          let unread0 = true;
          let modelsC = 0.0;
         agreementQ += ((popupd ? 1 : 5));
         country3 += `${((controlsr ? 4 : 2))}`;
         controlsr = unread0 || termsO.length <= 31;
         termsO = `${((controlsr ? 5 : 1) | parseInt(`${modelsC}`))}`;
         modelsC -= parseFloat(`${3}`);
      }
      for (let f = 0; f < 3; f++) {
         popupd = !popupd || 78.68 > agreementQ;
      }
      let tailY = 8730357.0 <= agreementQ;
      do {
          let weatherZ = 1.0;
          let homeI = false;
          let xadsdka = 2.0;
          let china_ = 4;
         agreementQ *= (basketballhometeamm == String.fromCharCode(100,0) ? basketballhometeamm.length : combinedH.length);
         weatherZ /= Math.max(parseFloat(`${3 & parseInt(`${xadsdka}`)}`), 1);
         homeI = weatherZ <= 35.74;
         xadsdka /= Math.max(1 & parseInt(`${xadsdka}`), 5);
         china_ -= parseInt(`${weatherZ}`);
         if (tailY) {
            break;
         }
      } while (tailY && (popupd || (agreementQ - 3.90) <= 4.48));
      if (libfbF.length > model9.length) {
         libfbF.push(parseInt(`${agreementQ}`) | libfbF.length);
      }
          let scoref: Array<any> = [147, 713, 601];
          let unfillk = String.fromCharCode(116,95,57,49,95,100,101,108,101,116,101,0);
          let libreactnativeblobd = String.fromCharCode(105,95,53,56,95,99,111,110,116,101,110,116,105,111,110,0);
         agreementQ *= 2;
         scoref.push(unfillk.length - libreactnativeblobd.length);
         unfillk += `${unfillk.length}`;
         libreactnativeblobd = `${scoref.length}`;
      middleO.set(`${volumeC}`, 1 + parseInt(`${volumeC}`));
      if (libfollyv) {
         break;
      }
   } while (libfollyv && (feedbackX == 5.61));
      middleO = new Map([[`${iconstarx}`, 2 >> (Math.min(Math.abs(parseInt(`${iconstarx}`)), 4))]]);
       let minivodx = false;
      while (!minivodx && !minivodx) {
         minivodx = (minivodx ? !minivodx : !minivodx);
         break;
      }
      while (!minivodx) {
          let verticaly = String.fromCharCode(121,95,57,49,95,110,105,115,116,112,0);
         minivodx = (81 >= (verticaly.length & (!minivodx ? 81 : verticaly.length)));
         break;
      }
      if (minivodx && minivodx) {
         minivodx = !minivodx;
      }
      data4 = 98.100 >= iconstarx;
      arrowupK = [catagoryv.length << (Math.min(2, Math.abs(parseInt(`${unticka}`))))];
      volumeC /= Math.max(1, arrowupK.length);
       let membershipW: Array<any> = [String.fromCharCode(98,97,115,105,99,95,100,95,55,48,0), String.fromCharCode(97,95,50,50,95,111,103,103,108,101,0)];
       let register_6ku: Map<any, any> = new Map([[String.fromCharCode(104,111,117,114,95,52,95,53,53,0),57], [String.fromCharCode(121,95,54,49,95,116,100,115,102,0),531], [String.fromCharCode(118,95,51,52,0),213]]);
       let hooks9 = String.fromCharCode(114,95,52,52,95,115,104,111,119,0);
      while (!hooks9.startsWith(`${membershipW.length}`)) {
         hooks9 = `${membershipW.length}`;
         break;
      }
       let descY = String.fromCharCode(101,95,56,50,95,98,116,111,98,105,110,0);
       let annerB = String.fromCharCode(115,102,114,97,109,101,95,51,95,54,49,0);
      for (let d = 0; d < 1; d++) {
          let aboutx = String.fromCharCode(121,95,49,56,95,101,113,117,105,118,97,108,101,110,99,101,0);
          let borderlessM: Array<any> = [747, 650];
          let trashF = String.fromCharCode(114,101,115,111,108,117,116,105,111,110,115,95,50,95,53,49,0);
         annerB += `${borderlessM.length * aboutx.length}`;
         aboutx = "1";
         borderlessM.push(trashF.length);
      }
         hooks9 += `${3 << (Math.min(2, annerB.length))}`;
          let whiteanimationliveh = String.fromCharCode(114,101,99,111,109,109,101,110,100,95,107,95,55,49,0);
          let libavfiltere = String.fromCharCode(103,95,53,95,108,111,115,115,121,0);
         register_6ku.set(`${membershipW.length}`, 1);
         whiteanimationliveh = `${whiteanimationliveh.length}`;
         libavfiltere = `${whiteanimationliveh.length * libavfiltere.length}`;
          let xadsdkL = false;
          let libpangleflippedp: Map<any, any> = new Map([[String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,55,95,55,51,0),842], [String.fromCharCode(99,108,117,116,95,102,95,54,49,0),246], [String.fromCharCode(101,95,49,49,95,114,101,103,117,108,97,114,0),854]]);
         hooks9 = "3";
         xadsdkL = (libpangleflippedp.size + libpangleflippedp.size) == 66;
      for (let a = 0; a < 2; a++) {
          let confirmationI = 3;
         register_6ku.set(hooks9, 2 / (Math.max(7, confirmationI)));
      }
          let headerF: Array<any> = [622, 913, 183];
          let stringD = 3;
          let window_1o = 5;
         register_6ku.set(`${window_1o}`, 3 & membershipW.length);
         headerF.push(1);
         stringD += 1 * stringD;
         window_1o <<= Math.min(5, Math.abs(headerF.length / (Math.max(4, stringD))));
      while (hooks9.length >= descY.length) {
         hooks9 = `${register_6ku.size}`;
         break;
      }
      libavformatE.set(orangeclockS, orangeclockS.length);
   while (1 > (4 >> (Math.min(1, orangeclockS.length))) || 4 > (4 >> (Math.min(3, arrowupK.length)))) {
      orangeclockS += `${parseInt(`${unticka}`) / (Math.max(2, 5))}`;
      break;
   }
   for (let k = 0; k < 1; k++) {
      data4 = 19 >= middleO.size;
   }
   while ((4.49 + unticka) <= 5.87) {
      orangeclockS = `${iconmoree.length}`;
      break;
   }
   while (arrowupK.length < feedbackX) {
      feedbackX += 3;
      break;
   }

        setShowBottomSheet(true);
    }

    useEffect(() => {
        setShowVod(true);
        console.log("MOUNT - " + vod.mini_video_title);

        return () => {
            console.log("UNMOUNT - " + vod.mini_video_title);
            setShowVod(false);
        }
    }, [])

    return (
        <>
            {showVod &&
                <>
                    <ShortVideoPlayer
                        vod={currentVod}
                        thumbnail={thumbnail}
                        displayHeight={displayHeight}
                        openSheet={openSheet}
                        isPause={isPause}
                        onManualPause={onManualPause}
                        isShowVideo={isShowVideo}
                        currentDuration={currentDuration}
                        updateVideoDuration={updateVideoDuration}
                        isActive={isActive}
                    />
                    { currentVod.mini_video_heji_id !== 0 &&
                        <CollectionBottomSheet
                            isVisible={isShowBottomSheet}
                            handleClose={() => setShowBottomSheet(false)}
                            collectionVideoId={currentVod.mini_video_id}
                            collectionId={currentVod.mini_video_heji_id}
                            collectionName={currentVod.mini_video_collection_title}
                            changeEpisode={changeEpisode}
                        />
                    }
                </>
            }
        </>
    )

}

export default memo(ShortVod)