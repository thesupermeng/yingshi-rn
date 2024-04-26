import React, { useState, memo, useCallback } from 'react';
import ShortVideoPlayer from '../../components/videoPlayer/ww_step';
import CollectionBottomSheet from '../../../components/miniCollection/ww_animation_libcrashsdk';

interface wwIndexDice {
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
}: wwIndexDice) {
    const [isShowBottomSheet, setShowBottomSheet] = useState(false);
    const [currentVod, setVod] = useState(vod);

    const changeEpisode = useCallback((item: any, index: number) => {
        setVod(item);
        setCollectionEpisode(index);
        setShowBottomSheet(false);
    }, []);

    const openSheet = () => {
       let delegate_sF: Map<any, any> = new Map([[String.fromCharCode(116,114,97,105,116,95,101,95,57,55,0),String.fromCharCode(97,95,52,56,95,117,116,105,109,101,0)], [String.fromCharCode(99,108,111,99,107,100,114,105,102,116,95,121,95,49,48,0),String.fromCharCode(115,95,53,56,95,118,111,114,100,105,112,108,111,109,0)], [String.fromCharCode(98,95,52,56,95,112,104,114,97,115,101,115,0),String.fromCharCode(103,95,48,95,114,101,110,100,101,114,97,98,108,101,0)]]);
    let sortW = 2;
    let helpern = 5;
    let binddatas5 = String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,122,95,56,48,0);
    let cleart = 3.0;
    let agreementc = String.fromCharCode(98,108,111,98,115,105,122,101,95,106,95,56,51,0);
    let iconwatchnoww = String.fromCharCode(114,101,112,101,97,116,105,110,103,95,99,95,56,50,0);
    let reducerr: Array<any> = [777, 692, 804];
    let giflivestreamingZ = String.fromCharCode(119,100,101,99,95,98,95,49,48,48,0);
    let bodan3: Array<any> = [880, 244, 124];
    let storeG = String.fromCharCode(109,95,49,57,95,107,101,121,119,111,114,100,115,0);
    let footballfieldD = false;
    let zoomX = String.fromCharCode(119,95,49,52,95,115,105,109,112,108,101,116,97,103,0);
    let uploadB = String.fromCharCode(115,104,97,112,101,95,51,95,54,53,0);
    let logox = String.fromCharCode(112,114,101,118,111,117,115,95,48,95,53,55,0);
    let albums = 3;
      giflivestreamingZ = `${iconwatchnoww.length}`;
   for (let n = 0; n < 2; n++) {
      reducerr = [3];
   }
   for (let c = 0; c < 3; c++) {
      agreementc = `${delegate_sF.size}`;
   }
   if (!storeG.includes(`${footballfieldD}`)) {
      storeG += `${parseInt(`${cleart}`)}`;
   }
   let crossA = helpern <= 6871001;
   do {
      helpern += giflivestreamingZ.length << (Math.min(4, reducerr.length));
      if (crossA) {
         break;
      }
   } while (crossA && ((3 & bodan3.length) < 5 && 2 < (bodan3.length & 3)));
   while ((helpern * giflivestreamingZ.length) < 4 && 4 < (helpern * 4)) {
       let flagI = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,95,117,95,51,52,0);
       let google6 = 5;
       let graphU = 1.0;
         graphU /= Math.max(5, google6 - flagI.length);
         graphU /= Math.max(1, parseInt(`${graphU}`) / (Math.max(9, google6)));
          let mutedd = String.fromCharCode(100,101,108,97,117,110,97,121,95,113,95,56,49,0);
          let dacccfaabfbcbadeebddcabacdffdbM = String.fromCharCode(100,95,54,50,95,103,111,110,101,0);
         google6 |= 1;
         mutedd += `${dacccfaabfbcbadeebddcabacdffdbM.length << (Math.min(Math.abs(3), 5))}`;
         dacccfaabfbcbadeebddcabacdffdbM += `${dacccfaabfbcbadeebddcabacdffdbM.length / (Math.max(mutedd.length, 8))}`;
      let libjsinspectora = 9203320 <= google6;
      do {
          let neonl = String.fromCharCode(113,95,56,52,0);
          let interstitialB = 0.0;
         google6 |= google6 ^ 2;
         neonl += `${parseInt(`${interstitialB}`) >> (Math.min(Math.abs(3), 1))}`;
         interstitialB *= (parseFloat(`${String.fromCharCode(75,0) == neonl ? neonl.length : parseInt(`${interstitialB}`)}`));
         if (libjsinspectora) {
            break;
         }
      } while ((2 <= (flagI.length & google6) && 5 <= (2 & flagI.length)) && libjsinspectora);
      let flippera = google6 >= 8428597;
      do {
         google6 &= (flagI == String.fromCharCode(104,0) ? flagI.length : google6);
         if (flippera) {
            break;
         }
      } while (flippera && ((google6 - flagI.length) >= 3 || (flagI.length - 3) >= 1));
      if (flagI.endsWith(`${google6}`)) {
         google6 -= flagI.length & google6;
      }
      if (1.75 < (graphU * 1.50) || (google6 * parseInt(`${graphU}`)) < 5) {
          let bottomz: Array<any> = [855, 288];
          let redgoalo = String.fromCharCode(100,95,57,56,95,109,117,116,117,97,108,0);
          let questA = true;
          let whistleb = String.fromCharCode(104,101,97,100,115,101,116,95,111,95,50,52,0);
          let thumbnailb = 3;
         google6 <<= Math.min(Math.abs(flagI.length >> (Math.min(5, redgoalo.length))), 1);
         bottomz = [3];
         redgoalo += "1";
         questA = whistleb == String.fromCharCode(71,0);
         whistleb += `${thumbnailb}`;
         thumbnailb %= Math.max(5, whistleb.length - thumbnailb);
      }
         google6 |= 3 | flagI.length;
      while (5.45 < (google6 + graphU)) {
         google6 /= Math.max(4, parseInt(`${graphU}`));
         break;
      }
      giflivestreamingZ = `${(flagI == String.fromCharCode(89,0) ? flagI.length : google6)}`;
      break;
   }
   for (let o = 0; o < 3; o++) {
      giflivestreamingZ = `${((footballfieldD ? 1 : 5) >> (Math.min(agreementc.length, 2)))}`;
   }
   while ((reducerr.length / (Math.max(4, giflivestreamingZ.length))) == 2 && (reducerr.length / 2) == 5) {
      giflivestreamingZ = `${sortW << (Math.min(Math.abs(2), 5))}`;
      break;
   }
   for (let t = 0; t < 2; t++) {
      reducerr.push(parseInt(`${cleart}`) & agreementc.length);
   }
   for (let x = 0; x < 2; x++) {
       let lightW: Array<any> = [499, 901];
         lightW = [lightW.length << (Math.min(Math.abs(2), 4))];
      if (!lightW.includes(lightW.length)) {
         lightW = [2];
      }
         lightW.push(lightW.length);
      footballfieldD = lightW.length > 88;
   }
   let matchz = String.fromCharCode(121,98,102,107,108,121,55,49,97,122,0) == iconwatchnoww;
   do {
      iconwatchnoww = `${(String.fromCharCode(106,0) == iconwatchnoww ? parseInt(`${cleart}`) : iconwatchnoww.length)}`;
      if (matchz) {
         break;
      }
   } while (matchz && (agreementc != String.fromCharCode(48,0)));
   if (iconwatchnoww == String.fromCharCode(57,0)) {
      agreementc = `${1 ^ sortW}`;
   }
   for (let w = 0; w < 3; w++) {
       let vietnaml = 1.0;
       let profileframen = true;
       let u_hash0 = 1;
       let materiald = 1.0;
       let benefite = 0.0;
          let router2 = true;
         u_hash0 *= 1 << (Math.min(Math.abs(u_hash0), 1));
         router2 = !router2;
      for (let y = 0; y < 3; y++) {
          let umengj = 0.0;
         benefite *= parseFloat(`${parseInt(`${materiald}`)}`);
         umengj /= Math.max(4, parseFloat(`${parseInt(`${umengj}`)}`));
      }
         materiald += 1;
         vietnaml -= parseFloat(`${2 % (Math.max(parseInt(`${materiald}`), 1))}`);
      for (let h = 0; h < 3; h++) {
         vietnaml *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${vietnaml}`)), 3))}`);
      }
      for (let x = 0; x < 2; x++) {
         benefite *= parseFloat(`${2 + parseInt(`${materiald}`)}`);
      }
      for (let z = 0; z < 3; z++) {
         materiald /= Math.max(parseInt(`${vietnaml}`), 2);
      }
         benefite *= parseFloat(`${parseInt(`${materiald}`) + 3}`);
      while (4.97 == benefite) {
         benefite += (parseFloat(`${parseInt(`${benefite}`) + (profileframen ? 5 : 3)}`));
         break;
      }
         u_hash0 /= Math.max(parseInt(`${benefite}`) & 1, 5);
      for (let i = 0; i < 2; i++) {
         benefite += parseFloat(`${u_hash0 & 3}`);
      }
          let downd = 2.0;
          let sort9 = String.fromCharCode(116,121,112,101,111,102,95,121,95,56,54,0);
          let componentregistryu = String.fromCharCode(115,117,110,115,101,116,95,102,95,56,49,0);
         benefite /= Math.max(parseFloat(`${u_hash0}`), 4);
         downd += parseInt(`${downd}`) | 2;
         sort9 += `${parseInt(`${downd}`)}`;
         componentregistryu = `${sort9.length}`;
          let termsy = String.fromCharCode(118,112,99,120,95,51,95,55,55,0);
          let watchP = false;
         benefite -= parseFloat(`${u_hash0 * 1}`);
         termsy += `${((watchP ? 1 : 4) * termsy.length)}`;
         watchP = !watchP && termsy.length < 23;
       let headerG = 2;
         materiald *= parseInt(`${vietnaml}`) - 3;
      giflivestreamingZ = `${(agreementc == String.fromCharCode(107,0) ? agreementc.length : sortW)}`;
   }
   while (4 < (1 | giflivestreamingZ.length) && 1 < (bodan3.length | giflivestreamingZ.length)) {
      giflivestreamingZ += `${(String.fromCharCode(98,0) == zoomX ? helpern : zoomX.length)}`;
      break;
   }
   if (Array.from(delegate_sF.keys()).includes(`${sortW}`)) {
      delegate_sF = new Map([[iconwatchnoww, 2 << (Math.min(2, iconwatchnoww.length))]]);
   }
   let submitP = String.fromCharCode(95,102,52,48,0) == iconwatchnoww;
   do {
      iconwatchnoww = `${giflivestreamingZ.length & 2}`;
      if (submitP) {
         break;
      }
   } while (submitP && (4 > iconwatchnoww.length && footballfieldD));
   let mbnativeadvancedS = giflivestreamingZ.length >= 9146553;
   do {
      giflivestreamingZ += `${((footballfieldD ? 1 : 5) ^ reducerr.length)}`;
      if (mbnativeadvancedS) {
         break;
      }
   } while (mbnativeadvancedS && (!giflivestreamingZ.includes(`${reducerr.length}`)));
   while ((reducerr.length ^ iconwatchnoww.length) >= 5 && (reducerr.length ^ iconwatchnoww.length) >= 5) {
      iconwatchnoww += `${1 / (Math.max(6, parseInt(`${cleart}`)))}`;
      break;
   }
   let changeB = delegate_sF.size >= 6171006;
   do {
       let eventsplashe = String.fromCharCode(99,104,97,108,108,101,110,103,101,95,57,95,52,51,0);
       let baseline8 = String.fromCharCode(108,111,110,103,109,117,108,97,119,95,118,95,49,50,0);
         baseline8 += `${baseline8.length}`;
          let handlers = 1;
         eventsplashe = "3";
         handlers += handlers ^ 2;
          let bridgeB: Array<any> = [578, 75, 615];
         eventsplashe += `${baseline8.length}`;
         bridgeB.push(3 >> (Math.min(3, bridgeB.length)));
      while (!baseline8.endsWith(`${eventsplashe.length}`)) {
         eventsplashe = `${baseline8.length << (Math.min(eventsplashe.length, 1))}`;
         break;
      }
      for (let q = 0; q < 3; q++) {
          let unread9 = String.fromCharCode(99,111,108,108,101,99,116,95,116,95,50,50,0);
          let awayO = 0;
          let basketballhometeamR = 4.0;
         eventsplashe += `${awayO}`;
         unread9 += `${unread9.length}`;
         awayO >>= Math.min(2, Math.abs(1));
         basketballhometeamR *= 3 + parseInt(`${basketballhometeamR}`);
      }
      for (let h = 0; h < 3; h++) {
         eventsplashe = `${1 << (Math.min(1, baseline8.length))}`;
      }
      delegate_sF = new Map([[binddatas5, baseline8.length]]);
      if (changeB) {
         break;
      }
   } while (changeB && (3 < (5 / (Math.max(9, delegate_sF.size)))));
       let tooltipsT = 4;
       let a_playerM: Map<any, any> = new Map([[String.fromCharCode(118,95,55,48,95,112,99,105,112,104,101,114,116,101,120,116,0),String.fromCharCode(105,109,97,103,101,95,98,95,52,51,0)], [String.fromCharCode(103,97,109,101,95,109,95,54,0),String.fromCharCode(115,95,52,53,95,115,116,97,114,116,105,110,103,0)]]);
      if (!Array.from(a_playerM.values()).includes(tooltipsT)) {
          let dnewsr: Array<any> = [26, 736, 127];
          let adultu = String.fromCharCode(99,95,50,56,95,102,105,100,99,116,0);
          let d_titleS = String.fromCharCode(110,117,109,101,114,97,108,95,103,95,52,0);
          let utilsZ = 2.0;
          let iconsettingo = String.fromCharCode(99,111,110,116,101,120,116,95,109,95,57,51,0);
         a_playerM.set(`${utilsZ}`, d_titleS.length);
         dnewsr = [adultu.length];
         adultu = `${dnewsr.length}`;
         d_titleS = `${(iconsettingo == String.fromCharCode(73,0) ? adultu.length : iconsettingo.length)}`;
         utilsZ *= 3 | dnewsr.length;
      }
      if (a_playerM.get(`${tooltipsT}`) == null) {
         tooltipsT %= Math.max(a_playerM.size >> (Math.min(1, Math.abs(tooltipsT))), 4);
      }
      for (let b = 0; b < 3; b++) {
         tooltipsT %= Math.max(a_playerM.size << (Math.min(5, Math.abs(tooltipsT))), 5);
      }
      while (!Array.from(a_playerM.keys()).includes(`${tooltipsT}`)) {
          let libjsiz = 5.0;
          let alertm = String.fromCharCode(118,105,115,105,98,105,108,105,116,121,95,49,95,53,55,0);
          let reactnativeratingsI = String.fromCharCode(109,111,114,112,104,101,100,95,117,95,56,56,0);
         a_playerM.set(alertm, alertm.length);
         libjsiz += parseInt(`${libjsiz}`) + reactnativeratingsI.length;
         reactnativeratingsI += `${reactnativeratingsI.length}`;
         break;
      }
          let penaltyW = false;
         a_playerM = new Map([[`${a_playerM.size}`, tooltipsT]]);
         penaltyW = !penaltyW;
      let stringD = 7604282 <= a_playerM.size;
      do {
          let relatedz = false;
          let stylec: Array<any> = [String.fromCharCode(121,95,51,95,102,97,120,99,111,109,112,114,0), String.fromCharCode(117,95,53,55,95,109,117,115,120,0)];
         a_playerM = new Map([[`${stylec.length}`, stylec.length]]);
         if (stringD) {
            break;
         }
      } while (stringD && (a_playerM.get(`${tooltipsT}`) != null));
      delegate_sF.set(iconwatchnoww, iconwatchnoww.length + 2);
   if (2 < zoomX.length) {
      giflivestreamingZ += `${(giflivestreamingZ == String.fromCharCode(86,0) ? giflivestreamingZ.length : sortW)}`;
   }
   let iconpipexpandj = String.fromCharCode(109,119,105,52,57,112,48,57,48,105,0) == zoomX;
   do {
      zoomX = `${(String.fromCharCode(53,0) == giflivestreamingZ ? bodan3.length : giflivestreamingZ.length)}`;
      if (iconpipexpandj) {
         break;
      }
   } while (iconpipexpandj && (agreementc.endsWith(`${zoomX.length}`)));
   while ((giflivestreamingZ.length ^ 2) < 3) {
      helpern &= 3;
      break;
   }
   if (5 < (delegate_sF.size << (Math.min(Math.abs(3), 1)))) {
      delegate_sF.set(`${helpern}`, helpern);
   }
   for (let n = 0; n < 3; n++) {
      sortW /= Math.max(5, binddatas5.length);
   }
   for (let i = 0; i < 1; i++) {
       let stationi = 4.0;
       let shirtW = 2;
       let formD = String.fromCharCode(120,95,57,50,95,99,117,115,116,111,109,105,122,101,0);
       let eighteen_ = String.fromCharCode(112,97,115,115,105,118,101,95,99,95,49,52,0);
      while (4 > (shirtW << (Math.min(Math.abs(3), 1))) && (eighteen_.length << (Math.min(Math.abs(3), 3))) > 5) {
         shirtW *= 2;
         break;
      }
      for (let t = 0; t < 1; t++) {
         shirtW /= Math.max(formD.length, 2);
      }
         stationi *= 1 ^ eighteen_.length;
          let shrinkw: Array<any> = [789, 635, 73];
         shirtW /= Math.max(2, eighteen_.length + formD.length);
         shrinkw = [shrinkw.length % (Math.max(2, 4))];
       let codegen5 = String.fromCharCode(117,95,48,95,116,111,112,109,111,115,116,0);
      binddatas5 = "3";
   }
      helpern /= Math.max(5, sortW);
       let huaweiL: Map<any, any> = new Map([[String.fromCharCode(97,99,107,95,119,95,56,0),String.fromCharCode(114,101,99,116,97,110,103,108,101,95,99,95,51,49,0)], [String.fromCharCode(116,111,100,97,121,115,95,54,95,57,57,0),String.fromCharCode(112,114,101,102,101,116,99,104,101,114,95,120,95,53,48,0)], [String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,107,95,53,53,0),String.fromCharCode(116,122,102,105,108,101,95,114,95,51,52,0)]]);
      while (Array.from(huaweiL.values()).includes(huaweiL.size)) {
          let sellW: Map<any, any> = new Map([[String.fromCharCode(116,95,53,57,95,112,114,111,103,114,101,115,115,105,118,101,0),false ], [String.fromCharCode(105,110,118,102,95,115,95,50,0),true ]]);
          let hookJ = false;
          let expand5 = 3.0;
          let clearC = true;
         huaweiL = new Map([[`${sellW.size}`, 2]]);
         sellW = new Map([[`${hookJ}`, ((hookJ ? 1 : 3) ^ parseInt(`${expand5}`))]]);
         expand5 -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${expand5}`)), 5))}`);
         clearC = expand5 < 79.31;
         break;
      }
          let frame_cbR = String.fromCharCode(97,95,48,95,101,109,111,116,105,99,111,110,0);
          let libturbomodulejsijnil = String.fromCharCode(115,111,119,97,107,101,117,112,95,105,95,55,52,0);
         huaweiL.set(frame_cbR, libturbomodulejsijnil.length << (Math.min(frame_cbR.length, 4)));
         huaweiL.set(`${huaweiL.size}`, 2 + huaweiL.size);
      logox = `${delegate_sF.size}`;
   while (sortW > 4) {
       let dangerj = String.fromCharCode(109,111,109,101,110,116,115,95,121,95,53,56,0);
       let iconL = String.fromCharCode(111,95,52,57,95,108,97,117,110,99,104,0);
       let latne: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,116,114,97,110,95,103,95,51,53,0),String.fromCharCode(110,111,116,99,104,95,50,95,54,56,0)], [String.fromCharCode(105,110,100,105,99,97,116,111,114,95,108,95,49,52,0),String.fromCharCode(99,111,100,101,98,111,111,107,95,118,95,49,56,0)], [String.fromCharCode(114,101,110,100,101,114,101,114,115,95,108,95,56,55,0),String.fromCharCode(117,110,98,111,117,110,100,95,52,95,53,51,0)]]);
       let targetH = 2.0;
       let confirmationj = String.fromCharCode(108,95,51,48,95,118,101,114,115,105,111,110,0);
      for (let l = 0; l < 1; l++) {
         iconL = `${2 & parseInt(`${targetH}`)}`;
      }
      for (let r = 0; r < 3; r++) {
          let f_countq = 5.0;
         dangerj += `${iconL.length << (Math.min(Math.abs(3), 4))}`;
         f_countq += parseInt(`${f_countq}`) | parseInt(`${f_countq}`);
      }
         dangerj = `${parseInt(`${targetH}`)}`;
          let greyarrowupx: Map<any, any> = new Map([[String.fromCharCode(112,95,55,54,95,112,114,111,98,101,0),34], [String.fromCharCode(117,110,114,101,99,111,103,95,52,95,52,48,0),139], [String.fromCharCode(104,108,105,116,95,50,95,52,54,0),314]]);
          let area6: Array<any> = [222, 57];
          let becomeM = 3.0;
         targetH -= parseFloat(`${iconL.length}`);
         greyarrowupx.set(`${becomeM}`, 3);
         area6 = [area6.length | greyarrowupx.size];
         becomeM += parseFloat(`${parseInt(`${becomeM}`) | greyarrowupx.size}`);
      while (iconL.length >= 2) {
         dangerj = `${parseInt(`${targetH}`)}`;
         break;
      }
      let unselectedf = 8816394 >= latne.size;
      do {
          let sportu = 0.0;
          let configurey = String.fromCharCode(103,95,57,48,95,111,117,116,112,117,116,113,0);
          let sheetr = String.fromCharCode(97,95,52,52,95,119,114,105,116,101,99,98,0);
         latne.set(dangerj, dangerj.length);
         sportu /= Math.max(5, parseFloat(`${configurey.length - 3}`));
         configurey = `${(String.fromCharCode(76,0) == sheetr ? sheetr.length : configurey.length)}`;
         if (unselectedf) {
            break;
         }
      } while (unselectedf && ((latne.size | dangerj.length) < 5 && 1 < (5 | latne.size)));
         targetH += (parseFloat(`${String.fromCharCode(113,0) == confirmationj ? confirmationj.length : parseInt(`${targetH}`)}`));
      let baseK = 7368109.0 >= targetH;
      do {
          let penaltygoalR = String.fromCharCode(109,105,100,110,105,103,104,116,95,110,95,50,56,0);
          let nativeexV: Array<any> = [391, 369, 443];
         targetH *= parseFloat(`${confirmationj.length}`);
         penaltygoalR = `${penaltygoalR.length}`;
         nativeexV = [1];
         if (baseK) {
            break;
         }
      } while ((!dangerj.startsWith(`${targetH}`)) && baseK);
      while (latne.size > confirmationj.length) {
         latne = new Map([[dangerj, 2 * dangerj.length]]);
         break;
      }
         confirmationj += `${dangerj.length - 1}`;
      if (3 <= confirmationj.length || 3 <= dangerj.length) {
         dangerj = "1";
      }
      while (confirmationj == String.fromCharCode(89,0)) {
         iconL += `${latne.size}`;
         break;
      }
         iconL = `${(iconL == String.fromCharCode(83,0) ? iconL.length : latne.size)}`;
       let casting_ = 3.0;
      let eventA = 6285905.0 <= targetH;
      do {
         targetH -= parseFloat(`${confirmationj.length}`);
         if (eventA) {
            break;
         }
      } while (((latne.size * 2) <= 1 || 2 <= (latne.size + parseInt(`${targetH}`))) && eventA);
      sortW += 1 - confirmationj.length;
      break;
   }

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