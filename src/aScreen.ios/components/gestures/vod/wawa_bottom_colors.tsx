import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './wawa_combine';
import BrightnessGestureControl from './wawa_iconclosewhitebg_iconeye';
import BrightnessVolumeSlider from './wawa_whistle';
import ProgressGestureControl from './wawa_phoneshare_defaultplayerimg';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "bellActionsNews",
        hasValue: "mailPauseOthermatchdetailbg"
    },
    [GestureControls.VOLUME]: {
        noValue: "libyogaGesturesSubs",
        hasValue: "subinStatsnomoredata"
    },
}

type wawaAwayShow = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: wawaAwayShow) => {
    const [icon, setIcon] = useState({
        noValue: "libyogaGesturesSubs",
        hasValue: "subinStatsnomoredata"
    })
    const [showSlider, setShowSlider] = useState(false)
    const [value, setValue] = useState(0)

    const sliderTimeout = useRef(0)

    const onPropertyChanged = (gestureType: string, value: number) => {
        setIcon(Icons[gestureType]);
        setValue(parseFloat(value.toFixed(2)));
        setShowSlider(true);

        clearTimeout(sliderTimeout.current);
        sliderTimeout.current = setTimeout(() => {
       let selectT = true;
    let gifgoalbgv = String.fromCharCode(100,95,52,54,95,99,112,105,97,0);
    let pressure9 = true;
    let gmailg = 5.0;
    let reddownarrow0 = String.fromCharCode(110,95,50,52,95,100,98,112,97,103,101,0);
    let bannerm = String.fromCharCode(101,95,56,54,95,99,97,114,100,104,111,108,100,101,114,0);
    let resendT = String.fromCharCode(121,95,57,52,95,117,105,110,116,112,111,119,0);
    let inouttargetyellow3 = 2;
    let editU = String.fromCharCode(120,95,53,52,95,108,105,109,105,116,115,0);
    let moviesy = String.fromCharCode(116,114,97,110,115,112,111,114,116,95,109,95,56,0);
    let verticalH = String.fromCharCode(115,116,117,102,102,110,100,95,113,95,54,51,0);
   for (let k = 0; k < 1; k++) {
       let basketballiconJ = true;
       let unimplementedviewN = 5.0;
       let darkY = 1;
         darkY *= ((basketballiconJ ? 2 : 3) * parseInt(`${unimplementedviewN}`));
      let chinasameX = unimplementedviewN >= 9502879.0;
      do {
          let bing9 = String.fromCharCode(99,109,97,115,107,95,50,95,55,51,0);
          let pingb = 4;
          let controlU = 2.0;
          let release_7B = 3.0;
         unimplementedviewN /= Math.max(parseInt(`${release_7B}`), 5);
         bing9 += `${parseInt(`${controlU}`)}`;
         pingb /= Math.max((String.fromCharCode(99,0) == bing9 ? pingb : bing9.length), 2);
         controlU *= (bing9 == String.fromCharCode(84,0) ? bing9.length : pingb);
         if (chinasameX) {
            break;
         }
      } while ((4 == (darkY * parseInt(`${unimplementedviewN}`)) || 2 == (4 / (Math.max(1, darkY)))) && chinasameX);
         unimplementedviewN *= 3;
      for (let w = 0; w < 3; w++) {
         basketballiconJ = 6 < darkY;
      }
      for (let q = 0; q < 3; q++) {
         darkY >>= Math.min(2, Math.abs(((basketballiconJ ? 5 : 3) + parseInt(`${unimplementedviewN}`))));
      }
      if (basketballiconJ) {
         unimplementedviewN -= 3 + parseInt(`${unimplementedviewN}`);
      }
      let unreadW = darkY <= 6307238;
      do {
         darkY >>= Math.min(Math.abs(1 ^ parseInt(`${unimplementedviewN}`)), 5);
         if (unreadW) {
            break;
         }
      } while (unreadW && (4 <= (2 >> (Math.min(4, Math.abs(darkY)))) && 2.74 <= (unimplementedviewN * darkY)));
      if (unimplementedviewN > darkY) {
         darkY >>= Math.min(Math.abs(((basketballiconJ ? 5 : 3) ^ parseInt(`${unimplementedviewN}`))), 2);
      }
      if (!basketballiconJ) {
         unimplementedviewN += 2 >> (Math.min(Math.abs(parseInt(`${unimplementedviewN}`)), 1));
      }
      inouttargetyellow3 >>= Math.min(Math.abs(darkY >> (Math.min(resendT.length, 4))), 3);
   }
      gifgoalbgv += `${1 >> (Math.min(5, Math.abs(parseInt(`${gmailg}`))))}`;
   let dragb = selectT ? !selectT : selectT;
   do {
       let iconplayz: Array<any> = [824, 273, 748];
       let iconstar5 = 1.0;
       let progressV = 3.0;
       let telegramn = String.fromCharCode(98,95,51,56,95,99,104,97,110,103,101,114,0);
       let detailU = true;
      if (1 <= (iconplayz.length % 4) || (iconstar5 + parseFloat(`${iconplayz.length}`)) <= 3.91) {
         iconstar5 += parseFloat(`${parseInt(`${progressV}`)}`);
      }
         telegramn = `${parseInt(`${iconstar5}`)}`;
         iconstar5 /= Math.max(parseFloat(`${3 * parseInt(`${progressV}`)}`), 1);
      if ((1 - iconplayz.length) <= 4) {
         iconplayz.push(1 * parseInt(`${iconstar5}`));
      }
       let reactnavigationI = 1.0;
       let greyarrowupz = 5.0;
      for (let k = 0; k < 1; k++) {
         iconplayz.push(2);
      }
      while (!detailU) {
          let turnd = 2.0;
          let fullQ: Array<any> = [644, 566, 688];
          let reactnativeratingsQ: Map<any, any> = new Map([[String.fromCharCode(103,114,97,110,116,95,53,95,50,56,0),280], [String.fromCharCode(112,95,57,50,95,114,109,115,116,114,101,97,109,0),173]]);
         detailU = reactnativeratingsQ.size >= 5;
         turnd *= parseFloat(`${parseInt(`${turnd}`)}`);
         fullQ = [1];
         reactnativeratingsQ = new Map([[`${fullQ.length}`, 3 | fullQ.length]]);
         break;
      }
         reactnavigationI -= parseInt(`${iconstar5}`) | 3;
         greyarrowupz += 1 & parseInt(`${reactnavigationI}`);
          let delegate_xhu = String.fromCharCode(104,117,102,102,121,117,118,95,57,95,56,56,0);
          let lessm = 1.0;
         telegramn += `${iconplayz.length}`;
         delegate_xhu += `${parseInt(`${lessm}`) ^ delegate_xhu.length}`;
         lessm += parseInt(`${lessm}`) & delegate_xhu.length;
         reactnavigationI += parseInt(`${iconstar5}`);
         reactnavigationI /= Math.max((parseInt(`${progressV}`) & (detailU ? 3 : 1)), 5);
      let positionfield3 = 7173335.0 >= iconstar5;
      do {
         iconstar5 *= parseFloat(`${parseInt(`${reactnavigationI}`) | 3}`);
         if (positionfield3) {
            break;
         }
      } while (positionfield3 && (greyarrowupz < 2.36));
       let penaltygoalw: Map<any, any> = new Map([[String.fromCharCode(111,95,57,57,95,115,117,110,114,105,115,101,115,101,116,0),false ], [String.fromCharCode(112,101,114,115,105,115,116,101,110,99,101,95,52,95,52,49,0),false ], [String.fromCharCode(105,95,54,52,95,101,120,112,97,110,100,101,100,0),false ]]);
          let tickedg = 1;
         greyarrowupz /= Math.max(telegramn.length, 2);
         tickedg -= tickedg << (Math.min(Math.abs(1), 3));
      selectT = iconstar5 > 10.50;
      if (dragb) {
         break;
      }
   } while (dragb && (!selectT));
      gmailg *= gifgoalbgv.length;
      pressure9 = (bannerm.length >> (Math.min(4, Math.abs(inouttargetyellow3)))) == 96;
   for (let w = 0; w < 1; w++) {
      pressure9 = resendT.length > 66;
   }
      gmailg /= Math.max(3, moviesy.length / (Math.max(1, 4)));
   let score_ = String.fromCharCode(48,101,118,0) == moviesy;
   do {
      moviesy += `${(String.fromCharCode(85,0) == gifgoalbgv ? parseInt(`${gmailg}`) : gifgoalbgv.length)}`;
      if (score_) {
         break;
      }
   } while ((!moviesy.startsWith(`${selectT}`)) && score_);
   let plashi = selectT ? !selectT : selectT;
   do {
      selectT = !editU.endsWith(`${gmailg}`);
      if (plashi) {
         break;
      }
   } while (plashi && (resendT.length <= 1 || selectT));
      editU += `${((selectT ? 3 : 2) - 2)}`;
   if (resendT.endsWith(`${inouttargetyellow3}`)) {
      resendT = `${gifgoalbgv.length ^ 2}`;
   }
   while (moviesy.includes(`${editU.length}`)) {
       let nextu: Map<any, any> = new Map([[String.fromCharCode(117,95,53,55,95,105,115,112,97,116,99,104,0),824], [String.fromCharCode(103,95,49,48,95,114,101,100,105,114,101,99,116,111,114,0),540], [String.fromCharCode(110,95,56,95,99,117,114,114,0),616]]);
       let livenodatabgimgx = 0.0;
       let becomex: Map<any, any> = new Map([[String.fromCharCode(110,95,53,56,95,119,97,105,116,0),String.fromCharCode(111,95,55,54,95,112,105,101,0)], [String.fromCharCode(99,95,57,57,95,109,117,108,116,105,115,101,108,101,99,116,105,111,110,0),String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,121,95,57,49,0)]]);
      while ((becomex.size ^ 3) <= 5 && 3 <= (parseInt(`${livenodatabgimgx}`) + becomex.size)) {
          let logouser5 = 1;
          let preview3 = false;
          let shootyesgoal_ = String.fromCharCode(113,95,49,49,95,118,97,114,105,97,100,105,99,0);
          let mbjscommonR = false;
         becomex.set(`${mbjscommonR}`, ((mbjscommonR ? 1 : 5) >> (Math.min(Math.abs(3), 4))));
         logouser5 /= Math.max(2, ((preview3 ? 3 : 1) * logouser5));
         preview3 = !preview3 && 90 <= logouser5;
         shootyesgoal_ += `${logouser5}`;
         break;
      }
         livenodatabgimgx += parseFloat(`${becomex.size}`);
       let signinupb: Map<any, any> = new Map([[String.fromCharCode(117,95,49,51,95,111,99,116,101,116,0),false ], [String.fromCharCode(121,98,114,105,95,122,95,50,52,0),true ], [String.fromCharCode(118,95,51,56,95,115,101,99,112,107,0),true ]]);
       let predictionwind = 0.0;
          let contextd = 0.0;
          let fullscreenmax3 = false;
         nextu = new Map([[`${becomex.size}`, becomex.size]]);
         contextd /= Math.max(2, ((fullscreenmax3 ? 3 : 1) ^ parseInt(`${contextd}`)));
         fullscreenmax3 = !fullscreenmax3;
      moviesy += `${(inouttargetyellow3 - (pressure9 ? 2 : 2))}`;
      break;
   }
      selectT = moviesy.length <= gifgoalbgv.length;
   for (let p = 0; p < 3; p++) {
       let executorC = String.fromCharCode(105,95,52,95,114,101,99,118,118,0);
       let countdownT = String.fromCharCode(115,109,112,116,101,95,56,95,57,54,0);
       let iconmegaphoneE = String.fromCharCode(112,117,98,108,105,115,104,95,114,95,52,57,0);
       let disconnectedlogoG: Array<any> = [820, 24, 460];
       let penaltymatchicon4 = 3;
         countdownT = "2";
         penaltymatchicon4 += iconmegaphoneE.length;
         iconmegaphoneE = "1";
      if (countdownT.length == iconmegaphoneE.length) {
         countdownT += `${iconmegaphoneE.length + 3}`;
      }
         penaltymatchicon4 >>= Math.min(2, Math.abs(disconnectedlogoG.length | 2));
         disconnectedlogoG = [countdownT.length * disconnectedlogoG.length];
      if (countdownT.length > executorC.length) {
         executorC = `${executorC.length}`;
      }
      let whitebellU = penaltymatchicon4 <= 6382455;
      do {
         penaltymatchicon4 /= Math.max(2 >> (Math.min(3, executorC.length)), 3);
         if (whitebellU) {
            break;
         }
      } while ((countdownT.length <= 2) && whitebellU);
      for (let q = 0; q < 1; q++) {
         countdownT += `${disconnectedlogoG.length}`;
      }
       let bootsplashi: Map<any, any> = new Map([[String.fromCharCode(112,105,112,101,119,105,114,101,95,103,95,51,50,0),String.fromCharCode(114,95,55,95,102,97,115,116,101,115,116,0)], [String.fromCharCode(116,111,120,121,122,95,51,95,54,49,0),String.fromCharCode(119,104,101,116,104,101,114,95,111,95,57,50,0)], [String.fromCharCode(102,114,97,110,100,111,109,95,104,95,49,48,0),String.fromCharCode(109,111,115,116,95,109,95,52,56,0)]]);
       let rulesu: Map<any, any> = new Map([[String.fromCharCode(104,95,55,53,95,115,113,108,105,116,101,114,101,98,97,115,101,114,0),String.fromCharCode(108,97,110,103,117,97,103,101,115,95,98,95,50,54,0)], [String.fromCharCode(116,97,103,103,105,110,103,95,100,95,54,49,0),String.fromCharCode(111,95,55,95,104,101,97,114,116,115,0)], [String.fromCharCode(102,97,110,99,121,95,108,95,54,55,0),String.fromCharCode(98,105,116,118,101,99,95,56,95,55,53,0)]]);
          let libswresampleA = true;
         penaltymatchicon4 &= penaltymatchicon4 % 1;
         libswresampleA = !libswresampleA;
      for (let z = 0; z < 3; z++) {
         executorC = `${executorC.length}`;
      }
      if ((penaltymatchicon4 | countdownT.length) > 4) {
         countdownT = `${penaltymatchicon4}`;
      }
      if (2 == (2 % (Math.max(6, bootsplashi.size))) && 4 == (countdownT.length % 2)) {
         bootsplashi.set(`${penaltymatchicon4}`, 1);
      }
      for (let v = 0; v < 1; v++) {
         countdownT += "1";
      }
      moviesy = `${gifgoalbgv.length & 1}`;
   }
       let othermatchdetailbg6: Array<any> = [942, 381, 920];
       let areap = false;
      if ((othermatchdetailbg6.length << (Math.min(Math.abs(1), 2))) == 4) {
         areap = !areap;
      }
      let bingj = 5081353 <= othermatchdetailbg6.length;
      do {
         othermatchdetailbg6 = [2];
         if (bingj) {
            break;
         }
      } while (bingj && ((5 | othermatchdetailbg6.length) <= 5 || othermatchdetailbg6.length <= 5));
      for (let d = 0; d < 3; d++) {
          let launcher_ = String.fromCharCode(97,99,116,111,114,95,121,95,52,48,0);
         othermatchdetailbg6.push(((areap ? 1 : 2) ^ 2));
         launcher_ += `${1 | launcher_.length}`;
      }
      if (othermatchdetailbg6.length > 2) {
         othermatchdetailbg6.push(othermatchdetailbg6.length);
      }
         othermatchdetailbg6 = [((areap ? 1 : 2) >> (Math.min(Math.abs(3), 4)))];
      let libavfilterK = areap ? !areap : areap;
      do {
         areap = othermatchdetailbg6.length == 81 || areap;
         if (libavfilterK) {
            break;
         }
      } while (libavfilterK && (3 < (5 - othermatchdetailbg6.length)));
      gifgoalbgv = `${((areap ? 1 : 3) ^ parseInt(`${gmailg}`))}`;
   while (resendT.length <= 1) {
      resendT += `${bannerm.length}`;
      break;
   }
       let subbasketballplayer9 = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,95,114,95,52,57,0);
       let updatesW = String.fromCharCode(105,95,48,95,115,117,98,116,101,114,109,0);
       let nativeexb = 0;
      if (2 >= (nativeexb / 4)) {
         nativeexb &= 3 >> (Math.min(3, updatesW.length));
      }
      if (updatesW.length <= subbasketballplayer9.length) {
          let libyogaZ = String.fromCharCode(109,101,115,115,97,103,101,115,95,103,95,53,0);
          let reactnativeultimatelistviewp = true;
          let rewardn = 0.0;
          let selectedy: Array<any> = [991, 78];
          let iconarrowleftw: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,97,95,116,95,54,56,0),true ], [String.fromCharCode(99,111,108,111,114,107,101,121,95,105,95,51,49,0),false ]]);
         updatesW = `${selectedy.length + 2}`;
         libyogaZ = `${(String.fromCharCode(69,0) == libyogaZ ? iconarrowleftw.size : libyogaZ.length)}`;
         reactnativeultimatelistviewp = !libyogaZ.endsWith(`${reactnativeultimatelistviewp}`);
         rewardn += (String.fromCharCode(119,0) == libyogaZ ? libyogaZ.length : parseInt(`${rewardn}`));
         selectedy = [iconarrowleftw.size];
      }
         nativeexb *= 3 & updatesW.length;
         nativeexb ^= updatesW.length - nativeexb;
         subbasketballplayer9 += `${(String.fromCharCode(111,0) == updatesW ? subbasketballplayer9.length : updatesW.length)}`;
         nativeexb &= nativeexb;
      if (!updatesW.includes(subbasketballplayer9)) {
         updatesW += "3";
      }
          let utils5: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,101,95,53,95,52,52,0),873], [String.fromCharCode(115,108,97,118,101,95,122,95,54,54,0),929]]);
         subbasketballplayer9 = `${nativeexb / (Math.max(utils5.size, 10))}`;
          let pauset = 3;
         subbasketballplayer9 += "3";
         pauset *= 2;
      editU += `${(String.fromCharCode(107,0) == gifgoalbgv ? gifgoalbgv.length : inouttargetyellow3)}`;
   for (let w = 0; w < 1; w++) {
      resendT += `${reddownarrow0.length}`;
   }

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let gesturem: Map<any, any> = new Map([[String.fromCharCode(102,105,110,95,122,95,50,48,0),265], [String.fromCharCode(118,101,114,105,102,121,95,102,95,52,57,0),606]]);
    let agreemente = 4.0;
    let router8 = String.fromCharCode(102,97,100,101,111,117,116,95,121,95,50,54,0);
    let incident9: Array<any> = [510, 470, 558];
    let watchnowbgc = 5.0;
    let fastforwardX = String.fromCharCode(120,95,50,52,95,108,97,118,102,117,116,105,108,115,0);
    let libreactnativeblobA: Map<any, any> = new Map([[String.fromCharCode(117,95,55,54,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0),994], [String.fromCharCode(115,95,51,48,95,112,114,111,109,111,116,105,110,103,0),220], [String.fromCharCode(112,95,50,57,95,114,101,109,111,118,97,108,115,0),276]]);
    let vipsport1: Map<any, any> = new Map([[String.fromCharCode(104,119,117,112,108,111,97,100,95,112,95,49,55,0),937], [String.fromCharCode(104,100,97,116,97,95,109,95,55,48,0),70], [String.fromCharCode(106,95,50,54,95,118,99,111,119,112,116,114,0),27]]);
    let eyecloseI: Map<any, any> = new Map([[String.fromCharCode(99,95,56,52,95,103,117,105,100,115,0),641], [String.fromCharCode(97,95,52,95,114,101,110,100,101,114,105,110,103,0),336]]);
    let iconnotificationnewI = 5;
    let bufferP = 5.0;
    let album5 = String.fromCharCode(100,105,114,97,99,95,121,95,49,53,0);
    let tempnodatagifM = 5;
    let modelso: Map<any, any> = new Map([[String.fromCharCode(109,95,48,95,98,108,117,114,114,101,100,0),965], [String.fromCharCode(111,100,101,114,110,95,117,95,57,51,0),916], [String.fromCharCode(114,103,98,121,117,118,95,119,95,56,50,0),728]]);
    let gradlewQ = 4.0;
    let orange8 = false;
    let disconnectedlogoJ = String.fromCharCode(111,95,49,48,95,111,99,97,116,105,111,110,0);
      bufferP += parseInt(`${agreemente}`);
      agreemente -= parseInt(`${agreemente}`);
   for (let r = 0; r < 1; r++) {
      router8 += "1";
   }
      libreactnativeblobA = new Map([[`${vipsport1.size}`, vipsport1.size * 1]]);
   if (eyecloseI.size <= iconnotificationnewI) {
       let pingJ = 5.0;
       let username8: Array<any> = [573, 179, 568];
       let libmapbufferjniL: Map<any, any> = new Map([[String.fromCharCode(97,95,55,50,95,105,110,116,101,114,99,101,112,116,0),753], [String.fromCharCode(99,111,111,107,100,97,116,97,95,116,95,55,48,0),704]]);
       let gifgoall: Map<any, any> = new Map([[String.fromCharCode(101,110,99,97,112,95,116,95,55,52,0),832], [String.fromCharCode(121,95,53,55,95,115,116,114,97,116,101,103,121,0),33]]);
          let condensedh: Array<any> = [727, 845, 866];
          let basketballplayerplaceholderi = false;
         pingJ /= Math.max(1, parseFloat(`${username8.length | parseInt(`${pingJ}`)}`));
         condensedh.push(condensedh.length);
         basketballplayerplaceholderi = condensedh.length <= 27;
      let profileq = gifgoall.size <= 9659536;
      do {
         gifgoall = new Map([[`${libmapbufferjniL.size}`, 1]]);
         if (profileq) {
            break;
         }
      } while (profileq && (Array.from(gifgoall.keys()).includes(`${libmapbufferjniL.size}`)));
      while ((libmapbufferjniL.size - username8.length) <= 4 && (4 - username8.length) <= 5) {
         username8.push(libmapbufferjniL.size << (Math.min(Math.abs(3), 2)));
         break;
      }
         pingJ *= parseFloat(`${gifgoall.size}`);
      while (5 == (gifgoall.size & 1) && (gifgoall.size & 1) == 2) {
         gifgoall.set(`${libmapbufferjniL.size}`, gifgoall.size);
         break;
      }
      if (libmapbufferjniL.get(`${pingJ}`) == null) {
          let n_positionp = String.fromCharCode(114,95,54,51,95,108,105,110,101,98,114,101,97,107,0);
          let bodanj = 1.0;
          let penaltyshootnogoalu = 4.0;
          let backiconmaskW = 4;
          let pointW = String.fromCharCode(110,95,51,53,95,98,117,105,108,100,101,114,0);
         pingJ -= parseFloat(`${1 + parseInt(`${penaltyshootnogoalu}`)}`);
         n_positionp += `${pointW.length - 2}`;
         bodanj += n_positionp.length ^ backiconmaskW;
         penaltyshootnogoalu += n_positionp.length ^ parseInt(`${bodanj}`);
         backiconmaskW &= parseInt(`${bodanj}`);
         pointW += `${1 | pointW.length}`;
      }
         gifgoall = new Map([[`${libmapbufferjniL.size}`, libmapbufferjniL.size / (Math.max(username8.length, 6))]]);
      if (Array.from(gifgoall.keys()).includes(`${pingJ}`)) {
         gifgoall.set(`${gifgoall.size}`, libmapbufferjniL.size);
      }
         gifgoall.set(`${libmapbufferjniL.size}`, 1 | libmapbufferjniL.size);
         gifgoall.set(`${pingJ}`, username8.length << (Math.min(Math.abs(2), 2)));
      let point8 = pingJ <= 9665153.0;
      do {
         pingJ *= parseFloat(`${2}`);
         if (point8) {
            break;
         }
      } while ((gifgoall.get(`${pingJ}`) != null) && point8);
      let buildr = 5159521.0 >= pingJ;
      do {
         pingJ *= parseFloat(`${libmapbufferjniL.size / 1}`);
         if (buildr) {
            break;
         }
      } while (buildr && (Array.from(gifgoall.values()).includes(pingJ)));
      iconnotificationnewI >>= Math.min(4, Math.abs(2));
   }
      bufferP /= Math.max(2, vipsport1.size << (Math.min(Math.abs(3), 3)));
      libreactnativeblobA.set(`${incident9.length}`, incident9.length);
       let shielddone2: Array<any> = [933, 228, 296];
      let bodanw = 6497787 >= shielddone2.length;
      do {
          let yellowcirclebgm = 3.0;
          let nalytics1 = String.fromCharCode(112,95,51,49,95,117,110,105,111,110,101,100,0);
          let launchx = true;
         shielddone2 = [(nalytics1 == String.fromCharCode(77,0) ? nalytics1.length : parseInt(`${yellowcirclebgm}`))];
         yellowcirclebgm /= Math.max(2, ((launchx ? 2 : 5) << (Math.min(2, Math.abs((launchx ? 1 : 4))))));
         if (bodanw) {
            break;
         }
      } while (bodanw && (shielddone2.length == 2));
      for (let w = 0; w < 2; w++) {
          let abidetect8 = 5.0;
          let largea: Map<any, any> = new Map([[String.fromCharCode(103,110,111,95,55,95,55,53,0),false ], [String.fromCharCode(109,95,53,56,95,116,111,107,101,0),false ], [String.fromCharCode(115,95,53,51,95,115,117,112,112,111,114,116,105,110,103,0),true ]]);
         shielddone2.push(shielddone2.length - 3);
         abidetect8 /= Math.max(5, largea.size ^ 2);
         largea.set(`${abidetect8}`, 1);
      }
      while (shielddone2.length > 5) {
         shielddone2.push(shielddone2.length + shielddone2.length);
         break;
      }
      bufferP *= 3;
   if ((5 * libreactnativeblobA.size) >= 1) {
      incident9 = [2 * incident9.length];
   }
   if ((3 + router8.length) >= 1 && 3 >= (parseInt(`${agreemente}`) + router8.length)) {
      agreemente *= 1;
   }
      incident9.push(router8.length);
   let untickk = String.fromCharCode(52,54,104,57,0) == fastforwardX;
   do {
      fastforwardX += `${eyecloseI.size}`;
      if (untickk) {
         break;
      }
   } while (untickk && (album5 == fastforwardX));
      libreactnativeblobA = new Map([[`${eyecloseI.size}`, 3]]);
   if (!Array.from(libreactnativeblobA.values()).includes(incident9.length)) {
      libreactnativeblobA = new Map([[`${libreactnativeblobA.size}`, parseInt(`${bufferP}`) / (Math.max(libreactnativeblobA.size, 4))]]);
   }
   let emojiheartR = 5082037 <= incident9.length;
   do {
       let mappingA: Map<any, any> = new Map([[String.fromCharCode(116,101,97,109,115,95,57,95,51,56,0),false ], [String.fromCharCode(111,95,57,49,95,113,117,101,117,101,100,0),false ]]);
       let y_imageq = true;
       let update_aJ = 1.0;
       let mergerr = 5.0;
         mergerr *= 2;
         mappingA.set(`${mergerr}`, parseInt(`${mergerr}`));
      if (y_imageq && 2 > (mappingA.size % 2)) {
         y_imageq = (5 < ((y_imageq ? mappingA.size : 44) - mappingA.size));
      }
         y_imageq = 16.57 >= mergerr || 98 >= mappingA.size;
          let rncoreT = String.fromCharCode(109,95,54,50,95,97,117,116,104,111,114,0);
         y_imageq = y_imageq && mappingA.size <= 51;
         rncoreT = "1";
       let zinit_mt = 2;
      while (!y_imageq && (1.17 + mergerr) < 3.19) {
         mergerr *= 2 ^ zinit_mt;
         break;
      }
         zinit_mt += zinit_mt << (Math.min(Math.abs(parseInt(`${update_aJ}`)), 5));
      if (2.28 <= (mergerr / (Math.max(1.8, 2))) && 3.91 <= (mergerr / 1.8)) {
         mergerr *= zinit_mt % (Math.max(parseInt(`${update_aJ}`), 3));
      }
      if (y_imageq) {
         y_imageq = 70.64 == mergerr;
      }
          let settingp: Array<any> = [202, 542, 865];
         y_imageq = settingp.length >= 70 || !y_imageq;
         update_aJ -= (parseInt(`${update_aJ}`) * (y_imageq ? 2 : 1));
      incident9.push(parseInt(`${bufferP}`));
      if (emojiheartR) {
         break;
      }
   } while ((incident9.includes(bufferP)) && emojiheartR);
   while ((agreemente - 1.24) <= 5.2 && 5.17 <= (agreemente / 1.24)) {
      agreemente += iconnotificationnewI;
      break;
   }
       let iconorientationZ = 1.0;
       let nodem = String.fromCharCode(112,117,114,103,101,95,56,95,50,0);
       let memberE = 0.0;
      if (memberE <= 2.93) {
         iconorientationZ /= Math.max(parseFloat(`${nodem.length}`), 4);
      }
       let tickF = String.fromCharCode(100,117,112,99,108,95,112,95,53,53,0);
       let iconviewerM: Array<any> = [61, 571];
       let emoji5: Array<any> = [74, 28];
      for (let t = 0; t < 2; t++) {
         nodem += `${1 >> (Math.min(1, tickF.length))}`;
      }
      if (tickF.length < 5) {
          let logousern: Map<any, any> = new Map([[String.fromCharCode(103,95,56,52,95,109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,0),false ], [String.fromCharCode(98,115,102,115,95,118,95,50,51,0),false ], [String.fromCharCode(115,101,116,105,118,95,50,95,49,49,0),true ]]);
          let spinnerl = 3.0;
          let roomA = true;
          let dacccfaabfbcbadeebddcabacdffdba = String.fromCharCode(116,95,51,48,95,100,101,101,112,101,114,0);
          let iconnotificationnewk: Array<any> = [496, 873, 393];
         iconorientationZ /= Math.max(parseFloat(`${iconviewerM.length}`), 4);
         logousern.set(`${spinnerl}`, parseInt(`${spinnerl}`));
         roomA = dacccfaabfbcbadeebddcabacdffdba.length < 12 && spinnerl < 33.9;
         dacccfaabfbcbadeebddcabacdffdba += "2";
         iconnotificationnewk.push(((roomA ? 2 : 5) * 2));
      }
      gesturem = new Map([[`${vipsport1.size}`, parseInt(`${bufferP}`) * 2]]);
   if (!Array.from(vipsport1.values()).includes(libreactnativeblobA.size)) {
       let bang0: Array<any> = [552, 544, 591];
       let reactnativejsc = 3;
         reactnativejsc <<= Math.min(Math.abs(2), 2);
         reactnativejsc += bang0.length;
          let loginsuccessC = 5.0;
          let a_unlockz = String.fromCharCode(121,95,51,49,95,111,112,117,115,102,105,108,101,0);
          let xnewarchdefaultsR = 2.0;
         reactnativejsc %= Math.max(parseInt(`${loginsuccessC}`) / 1, 5);
         loginsuccessC -= parseFloat(`${a_unlockz.length}`);
         a_unlockz += `${(a_unlockz == String.fromCharCode(89,0) ? parseInt(`${xnewarchdefaultsR}`) : a_unlockz.length)}`;
         xnewarchdefaultsR -= parseFloat(`${parseInt(`${xnewarchdefaultsR}`) >> (Math.min(Math.abs(3), 2))}`);
         bang0.push(2 << (Math.min(5, bang0.length)));
       let statisticsactivew = 0.0;
       let eventb = 4.0;
         reactnativejsc += parseInt(`${statisticsactivew}`) << (Math.min(4, Math.abs(parseInt(`${eventb}`))));
      vipsport1 = new Map([[`${modelso.size}`, incident9.length >> (Math.min(1, Math.abs(modelso.size)))]]);
   }
   while (1 < (5 ^ incident9.length)) {
      watchnowbgc -= eyecloseI.size;
      break;
   }
      watchnowbgc *= gesturem.size;
   let render_ = agreemente >= 7171531.0;
   do {
      agreemente /= Math.max(2, incident9.length);
      if (render_) {
         break;
      }
   } while (render_ && (2 <= (vipsport1.size / 4)));
   for (let x = 0; x < 2; x++) {
      fastforwardX = `${modelso.size}`;
   }
      iconnotificationnewI %= Math.max(2, tempnodatagifM / (Math.max(vipsport1.size, 5)));

        onScreenTouched();
    }

    return (
        <View style={!disableFullScreenGesture ? styles.container : { zIndex: -10, position: 'absolute' }}>
            <BrightnessGestureControl
                onChangeBrightness={(value: number) => {
                    onPropertyChanged(GestureControls.BRIGHTNESS, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            {
                vodType === 'vod' && <ProgressGestureControl
                    onTouchScreen={handleScreenTouch}
                    onProgressChange={onSkip}
                />
            }
            <VolumeGestureControl
                onChangeVolume={(value: number) => {
                    onPropertyChanged(GestureControls.VOLUME, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            {showSlider && (
                <BrightnessVolumeSlider
                    percent={100 * value}
                    icon={
                        value === 0 ? icon.noValue : icon.hasValue
                    }
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        zIndex: 20,
        position: 'absolute'
    }
});