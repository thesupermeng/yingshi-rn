

class SpinnerLibsentry {
  static tickLessFeedbackRefresh = (contents: [number], key: number, hasEmoji: boolean) => {
    const newList = [];
    for (let i = 0; i < contents.length; i++) {
      var v = contents[i];
      v ^= key;
      v &= 0xff;
      if (v == 0 && i == contents.length - 1) {
        break;
      }
      newList.push(v);
    }
    let result = "";
    for (let i = 0; i < newList.length; i++) {
      result += '%' + newList[i].toString(16);
    }
    result = decodeURIComponent(result);
    if (hasEmoji) {
      return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
    }
    return result;
  }
}
import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  PanResponder,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  Platform,
  Image,
} from 'react-native';
import FullScreen from '@static/images/nterstitialCore.svg';
import MoreMoviesIcon from '@static/images/kickShoot.svg';
import MinimizeScreen from '@static/images/nextZhubo.svg';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import NextEpisodeIcon from '@static/images/reactNativemodule.svg';
import SelectEpisodesIcon from '@static/images/unselectedArmvaEact.svg';
import LockScreenIcon from '@static/images/newarchdefaultsBuild.svg';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './yys_dropdown_turn';

type yys_ConfigureUimanager = {
  currentTime: number;
  duration: number;
  onSlideCapture: (params: any) => any;
  onSlideStart: (params: any) => any;
  onSlideComplete: (params: any) => any;
  onToggleFullScreen: () => any;
  isFullScreen: boolean;
  videoType: string;
  onPlaybackRateChange: () => any;
  onEpisodeSelection: () => any;
  playbackRate?: number,
  onNextEpisode?: () => any,
  onLock: () => any,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  showSliderThumbnail: boolean,
};

export default ({
  currentTime,
  duration,
  playbackRate = 1,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
  onToggleFullScreen,
  isFullScreen,
  videoType,
  onPlaybackRateChange,
  onEpisodeSelection,
  onNextEpisode,
  onLock,
  showMoreType = 'episodes',
  showSliderThumbnail = false,
}: yys_ConfigureUimanager) => {
  useEffect(() => { }, []);
  const { textVariants, colors } = useTheme();
  const getMinutesFromSeconds = (time: number) => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds
      }`;
  };

  const onSlideProgressBar = (time: any) => {
    console.log('time:', time)
    onSlideCapture(time);
  };

  const onPressFullScreenBtn = () => {
    let eactr = String.fromCharCode(116, 114, 97, 102, 102, 105, 99, 95, 108, 95, 50, 48, 0);
    let nativemodule3 = 0;
    let suggestionb = 2.0;
    let graya = String.fromCharCode(114, 101, 97, 108, 109, 95, 99, 95, 52, 49, 0);
    let libavdeviceJ = false;
    let shrink4 = String.fromCharCode(112, 111, 112, 112, 101, 100, 95, 101, 95, 54, 50, 0);
    let rightY = String.fromCharCode(114, 101, 103, 101, 116, 95, 120, 95, 56, 50, 0);
    let libtanm: Array<any> = [959, 354];
    let stationsC: Array<any> = [930, 410, 690];
    while ((eactr.length << (Math.min(3, Math.abs(nativemodule3)))) >= 3 || (eactr.length << (Math.min(3, Math.abs(nativemodule3)))) >= 3) {
      nativemodule3 |= parseInt(`${suggestionb}`);
      break;
    }
    let penaltyu = nativemodule3 <= 7468982;
    do {
      nativemodule3 <<= Math.min(Math.abs(2), 1);
      if (penaltyu) {
        break;
      }
    } while (((graya.length + nativemodule3) <= 5) && penaltyu);
    for (let d = 0; d < 3; d++) {
      let holder2: Array<any> = [395, 750, 673];
      let quest7: Map<any, any> = new Map([[String.fromCharCode(118, 95, 55, 56, 95, 99, 104, 111, 111, 115, 101, 114, 0), 731], [String.fromCharCode(100, 95, 55, 53, 95, 100, 105, 102, 102, 101, 114, 101, 110, 99, 101, 115, 0), 63]]);
      let libfolly7: Array<any> = [967, 419];
      let episode_ = 3;
      holder2.push(holder2.length);
      episode_ <<= Math.min(4, libfolly7.length);
      quest7 = new Map([[`${quest7.size}`, holder2.length]]);
      episode_ >>= Math.min(libfolly7.length, 2);
      if (1 <= (3 >> (Math.min(3, holder2.length)))) {
        holder2 = [quest7.size - libfolly7.length];
      }
      while (1 >= (libfolly7.length << (Math.min(Math.abs(quest7.size), 5))) && (libfolly7.length << (Math.min(Math.abs(1), 4))) >= 2) {
        let favorite5 = true;
        let overB = String.fromCharCode(99, 95, 51, 56, 95, 100, 105, 102, 102, 105, 99, 117, 108, 116, 121, 0);
        quest7 = new Map([[`${quest7.size}`, 2]]);
        favorite5 = (46 < (overB.length ^ (!favorite5 ? overB.length : 46)));
        break;
      }
      let buildl = 5127630 <= episode_;
      do {
        episode_ /= Math.max(3, libfolly7.length ^ quest7.size);
        if (buildl) {
          break;
        }
      } while (buildl && ((1 & episode_) >= 5 || 1 >= (holder2.length & 1)));
      for (let m = 0; m < 1; m++) {
        let containerO = String.fromCharCode(115, 95, 52, 51, 95, 105, 118, 97, 114, 115, 0);
        episode_ %= Math.max(episode_ + 1, 1);
        containerO += `${containerO.length >> (Math.min(Math.abs(2), 4))}`;
      }
      if (2 >= (episode_ % (Math.max(holder2.length, 5))) || 4 >= (episode_ % 2)) {
        holder2.push(3 + libfolly7.length);
      }
      if (3 >= (5 + quest7.size)) {
        let tumbnailY = true;
        let classesq = String.fromCharCode(100, 119, 97, 114, 102, 95, 54, 95, 49, 49, 0);
        episode_ >>= Math.min(Math.abs(1), 3);
        tumbnailY = classesq.startsWith(`${tumbnailY}`);
        classesq += `${((tumbnailY ? 4 : 4) | classesq.length)}`;
      }
      let uimanagerl = false;
      let fadfdeebbbfdabbbabdadfaaddaaj = true;
      while ((2 << (Math.min(1, Math.abs(quest7.size)))) >= 3 && quest7.size >= 2) {
        quest7 = new Map([[`${libfolly7.length}`, ((fadfdeebbbfdabbbabdadfaaddaaj ? 4 : 5) | libfolly7.length)]]);
        break;
      }
      libavdeviceJ = nativemodule3 > 89 && eactr.length > 89;
    }
    graya = `${rightY.length / 3}`;
    let canvass = true;
    let fullU = String.fromCharCode(102, 114, 101, 101, 112, 97, 100, 100, 114, 115, 95, 114, 95, 52, 48, 0);
    fullU = `${(fullU.length * (canvass ? 1 : 3))}`;
    if (1 > fullU.length) {
      let langkeyS = true;
      let libtanc = 2.0;
      let typingJ = 3;
      fullU += "2";
      langkeyS = 33 <= (typingJ - libtanc);
      libtanc -= typingJ << (Math.min(Math.abs(parseInt(`${libtanc}`)), 3));
    }
    while (!fullU.startsWith(`${canvass}`)) {
      let usernamef = 4.0;
      let photoR = String.fromCharCode(109, 111, 100, 101, 108, 115, 95, 100, 95, 49, 49, 0);
      let libruntimeexecutorj = 2.0;
      fullU = `${(parseInt(`${libruntimeexecutorj}`) + (canvass ? 1 : 5))}`;
      usernamef /= Math.max(parseFloat(`${3}`), 3);
      photoR = `${(photoR == String.fromCharCode(111, 0) ? photoR.length : parseInt(`${usernamef}`))}`;
      libruntimeexecutorj /= Math.max(5, (parseFloat(`${photoR == String.fromCharCode(114, 0) ? parseInt(`${usernamef}`) : photoR.length}`)));
      break;
    }
    for (let m = 0; m < 3; m++) {
      let bottomj: Map<any, any> = new Map([[String.fromCharCode(104, 95, 56, 55, 95, 105, 110, 108, 101, 110, 0), false], [String.fromCharCode(102, 99, 104, 111, 119, 110, 95, 54, 95, 55, 49, 0), false]]);
      let catagoryM = String.fromCharCode(117, 110, 105, 115, 119, 97, 112, 95, 116, 95, 55, 56, 0);
      let nativeexL = String.fromCharCode(98, 114, 101, 97, 100, 95, 53, 95, 50, 48, 0);
      canvass = bottomj.size < fullU.length;
      bottomj.set(catagoryM, nativeexL.length);
      catagoryM = `${catagoryM.length}`;
      nativeexL += "3";
    }
    let faviconW = String.fromCharCode(98, 105, 110, 97, 114, 121, 95, 117, 95, 53, 56, 0);
    let chartW = String.fromCharCode(112, 95, 54, 55, 95, 109, 117, 108, 116, 105, 102, 114, 97, 109, 101, 0);
    fullU = `${faviconW.length / (Math.max(chartW.length, 3))}`;
    eactr += `${rightY.length * 3}`;
    let changeT = eactr == String.fromCharCode(110, 98, 111, 98, 95, 122, 115, 108, 95, 111, 0);
    do {
      eactr = "2";
      if (changeT) {
        break;
      }
    } while (changeT && (3 <= (4 + nativemodule3) && (nativemodule3 + eactr.length) <= 4));
    while (3.9 >= (suggestionb / 4.7)) {
      libavdeviceJ = 27.71 > suggestionb && shrink4 == String.fromCharCode(104, 0);
      break;
    }
    eactr += "2";
    rightY += `${shrink4.length ^ rightY.length}`;
    while (!libavdeviceJ) {
      suggestionb *= ((libavdeviceJ ? 4 : 5) | rightY.length);
      break;
    }
    for (let i = 0; i < 2; i++) {
      let nterstitialc: Map<any, any> = new Map([[String.fromCharCode(112, 101, 114, 109, 117, 116, 97, 116, 105, 111, 110, 115, 95, 107, 95, 56, 49, 0), 270], [String.fromCharCode(105, 95, 51, 54, 95, 100, 111, 119, 110, 108, 111, 97, 100, 0), 256]]);
      let splashE = 0.0;
      while (2 <= (nterstitialc.size * 2)) {
        let leagueA = String.fromCharCode(101, 95, 49, 55, 95, 108, 105, 115, 116, 101, 110, 105, 110, 103, 0);
        let membershipf = 5;
        let accepteds: Map<any, any> = new Map([[String.fromCharCode(112, 114, 101, 100, 111, 119, 110, 108, 111, 97, 100, 95, 112, 95, 53, 56, 0), true], [String.fromCharCode(97, 95, 49, 56, 95, 104, 111, 117, 114, 0), true]]);
        let sportS = 0.0;
        nterstitialc.set(`${sportS}`, accepteds.size | 2);
        leagueA += `${2 - leagueA.length}`;
        membershipf &= 1;
        accepteds.set(leagueA, membershipf >> (Math.min(Math.abs(3), 1)));
        sportS *= leagueA.length / (Math.max(8, membershipf));
        break;
      }
      let filledr = 8858470.0 <= splashE;
      do {
        let libffmpegkitl = 2.0;
        splashE -= parseFloat(`${nterstitialc.size}`);
        libffmpegkitl *= parseInt(`${libffmpegkitl}`) | parseInt(`${libffmpegkitl}`);
        if (filledr) {
          break;
        }
      } while (filledr && (3.24 > (splashE - 3.59) && (splashE - 3.59) > 2.3));
      nterstitialc.set(`${splashE}`, nterstitialc.size % 1);
      let update_5C = String.fromCharCode(108, 95, 54, 50, 95, 115, 112, 107, 114, 0);
      let clubf = false;
      splashE -= (parseFloat(`${(clubf ? 4 : 4) << (Math.min(Math.abs(nterstitialc.size), 5))}`));
      update_5C = `${update_5C.length}`;
      clubf = update_5C == String.fromCharCode(103, 0);
      while ((parseInt(`${splashE}`) - nterstitialc.size) < 5) {
        let activityr = true;
        nterstitialc.set(`${splashE}`, nterstitialc.size);
        activityr = !activityr;
        break;
      }
      splashE += parseFloat(`${nterstitialc.size}`);
      nativemodule3 %= Math.max(1, (graya == String.fromCharCode(84, 0) ? parseInt(`${splashE}`) : graya.length));
    }
    libavdeviceJ = suggestionb == 48.74 && shrink4 == String.fromCharCode(67, 0);
    eactr = `${3 / (Math.max(9, graya.length))}`;
    if (graya.endsWith(`${shrink4.length}`)) {
      let mergerD: Map<any, any> = new Map([[String.fromCharCode(101, 108, 97, 115, 116, 105, 99, 95, 104, 95, 52, 57, 0), true], [String.fromCharCode(112, 95, 57, 56, 0), true]]);
      let castingh = String.fromCharCode(114, 101, 108, 117, 95, 57, 95, 51, 50, 0);
      let libruntimeexecutora = true;
      let r_positiond: Map<any, any> = new Map([[String.fromCharCode(98, 121, 116, 101, 99, 111, 100, 101, 95, 116, 95, 50, 49, 0), false], [String.fromCharCode(102, 116, 118, 118, 101, 114, 116, 108, 105, 110, 101, 95, 122, 95, 54, 0), true], [String.fromCharCode(105, 108, 98, 99, 100, 97, 116, 97, 95, 48, 95, 49, 0), true]]);
      let pingK = 2.0;
      let chartF = String.fromCharCode(117, 110, 108, 111, 99, 107, 101, 100, 95, 119, 95, 57, 49, 0);
      let shareT = 4;
      libruntimeexecutora = chartF == String.fromCharCode(80, 0);
      chartF += `${shareT & shareT}`;
      let subsV = 1.0;
      let collectionp: Array<any> = [378, 84, 576];
      pingK -= parseFloat(`${parseInt(`${pingK}`) + collectionp.length}`);
      subsV *= parseFloat(`${1}`);
      collectionp.push(parseInt(`${subsV}`) & 3);
      if ((pingK / (Math.max(parseFloat(`${r_positiond.size}`), 5))) > 2.43) {
        r_positiond.set(`${castingh}`, 1 & castingh.length);
      }
      r_positiond.set(`${libruntimeexecutora}`, r_positiond.size);
      let mbnativeadvancedd = pingK <= 7953704.0;
      do {
        pingK += parseFloat(`${parseInt(`${pingK}`) ^ 3}`);
        if (mbnativeadvancedd) {
          break;
        }
      } while ((!libruntimeexecutora) && mbnativeadvancedd);
      let trashf = 9594083 >= mergerD.size;
      do {
        let fadfdeebbbfdabbbabdadfaaddaak: Map<any, any> = new Map([[String.fromCharCode(98, 95, 54, 52, 95, 114, 101, 115, 105, 122, 101, 114, 0), true], [String.fromCharCode(120, 95, 51, 57, 95, 110, 111, 110, 122, 101, 114, 111, 0), true]]);
        mergerD = new Map([[`${mergerD.size}`, mergerD.size ^ 2]]);
        fadfdeebbbfdabbbabdadfaaddaak = new Map([[`${fadfdeebbbfdabbbabdadfaaddaak.size}`, fadfdeebbbfdabbbabdadfaaddaak.size % 3]]);
        if (trashf) {
          break;
        }
      } while (trashf && (libruntimeexecutora));
      mergerD.set(`${castingh}`, 2 - castingh.length);
      for (let q = 0; q < 3; q++) {
        r_positiond.set(`${libruntimeexecutora}`, parseInt(`${pingK}`) - 3);
      }
      if (castingh.length >= 2) {
        castingh = `${parseInt(`${pingK}`) >> (Math.min(Math.abs(r_positiond.size), 2))}`;
      }
      if (4 > (4 >> (Math.min(3, Math.abs(mergerD.size)))) && mergerD.size > 4) {
        libruntimeexecutora = (parseFloat(`${castingh.length}`) / (Math.max(8, pingK))) <= 94.35;
      }
      r_positiond = new Map([[`${r_positiond.size}`, 3 % (Math.max(4, r_positiond.size))]]);
      castingh = `${castingh.length}`;
      let holderT: Array<any> = [229, 886];
      let topon_: Map<any, any> = new Map([[String.fromCharCode(97, 110, 105, 109, 97, 116, 111, 114, 115, 95, 54, 95, 52, 48, 0), 756], [String.fromCharCode(104, 95, 51, 95, 105, 110, 100, 101, 120, 97, 98, 108, 101, 0), 393]]);
      let philippinesh = String.fromCharCode(101, 95, 53, 95, 106, 117, 108, 105, 97, 110, 0);
      pingK -= parseFloat(`${r_positiond.size}`);
      holderT.push(3 | philippinesh.length);
      topon_ = new Map([[`${topon_.size}`, philippinesh.length]]);
      let interstitiale = String.fromCharCode(109, 95, 57, 53, 95, 115, 99, 104, 101, 109, 101, 115, 0);
      let friendsq: Map<any, any> = new Map([[String.fromCharCode(118, 95, 57, 56, 95, 102, 97, 100, 101, 111, 117, 116, 0), 399], [String.fromCharCode(101, 95, 54, 52, 95, 112, 117, 108, 115, 101, 115, 98, 105, 116, 115, 0), 341], [String.fromCharCode(111, 98, 117, 115, 95, 108, 95, 56, 50, 0), 206]]);
      let plusl = 1.0;
      libruntimeexecutora = plusl < 33.66 && 35 < friendsq.size;
      interstitiale = `${interstitiale.length >> (Math.min(Math.abs(1), 2))}`;
      friendsq = new Map([[interstitiale, 3]]);
      let placeholderZ = libruntimeexecutora ? !libruntimeexecutora : libruntimeexecutora;
      do {
        let binit_6y9 = String.fromCharCode(100, 101, 99, 105, 109, 97, 108, 115, 95, 113, 95, 49, 51, 0);
        let vietnamD = String.fromCharCode(97, 105, 109, 105, 110, 103, 95, 97, 95, 49, 48, 0);
        let taiwanG = 3.0;
        libruntimeexecutora = binit_6y9.length == vietnamD.length;
        binit_6y9 += "2";
        vietnamD += `${2 << (Math.min(Math.abs(parseInt(`${taiwanG}`)), 1))}`;
        if (placeholderZ) {
          break;
        }
      } while (placeholderZ && (!libruntimeexecutora));
      shrink4 = "1";
    }
    nativemodule3 &= 3 | rightY.length;
    while (graya.endsWith(`${libavdeviceJ}`)) {
      graya = `${3 >> (Math.min(1, shrink4.length))}`;
      break;
    }
    while (4 < shrink4.length) {
      let binddatasD = 5.0;
      let reactnativejsh = String.fromCharCode(115, 95, 55, 50, 95, 97, 108, 116, 101, 114, 101, 100, 0);
      let source4 = String.fromCharCode(98, 95, 53, 55, 95, 116, 111, 111, 108, 116, 105, 112, 115, 0);
      let dycreatorH: Map<any, any> = new Map([[String.fromCharCode(117, 110, 122, 105, 112, 95, 108, 95, 50, 57, 0), true], [String.fromCharCode(103, 108, 121, 112, 104, 115, 95, 113, 95, 57, 52, 0), false]]);
      let proxyx = 4.0;
      while (4 == (dycreatorH.size + parseInt(`${proxyx}`))) {
        let hooksN = true;
        let memberJ = 1.0;
        let pointo: Array<any> = [645, 364, 211];
        dycreatorH.set(`${memberJ}`, source4.length);
        hooksN = hooksN && pointo.length >= 26;
        memberJ /= Math.max(5, (parseFloat(`${pointo.length - (hooksN ? 5 : 4)}`)));
        break;
      }
      dycreatorH = new Map([[reactnativejsh, reactnativejsh.length]]);
      let reminderu = 2;
      let send2 = 3;
      if ((proxyx + 2.53) >= 5.49) {
        proxyx /= Math.max(parseFloat(`${parseInt(`${proxyx}`) & send2}`), 4);
      }
      let forme = reactnativejsh == String.fromCharCode(55, 115, 106, 117, 103, 51, 48, 95, 0);
      do {
        let changep = String.fromCharCode(109, 95, 55, 51, 95, 105, 109, 112, 108, 105, 99, 105, 116, 108, 121, 0);
        let binddatasx = String.fromCharCode(104, 119, 97, 101, 115, 95, 113, 95, 57, 54, 0);
        let libavfilterF = String.fromCharCode(99, 97, 117, 115, 101, 95, 115, 95, 52, 56, 0);
        let commonb = true;
        reactnativejsh += "3";
        changep += `${(changep.length - (commonb ? 4 : 4))}`;
        binddatasx = `${libavfilterF.length}`;
        libavfilterF += `${binddatasx.length % (Math.max(8, changep.length))}`;
        if (forme) {
          break;
        }
      } while ((1 == reactnativejsh.length) && forme);
      while (dycreatorH.size == 4) {
        dycreatorH = new Map([[`${reminderu}`, reactnativejsh.length]]);
        break;
      }
      let launchB = dycreatorH.size <= 5671712;
      do {
        dycreatorH.set(`${proxyx}`, parseInt(`${proxyx}`));
        if (launchB) {
          break;
        }
      } while (launchB && ((dycreatorH.size - reactnativejsh.length) < 2));
      let screenn: Map<any, any> = new Map([[String.fromCharCode(98, 97, 99, 107, 100, 114, 111, 112, 95, 115, 95, 53, 52, 0), String.fromCharCode(112, 95, 54, 54, 95, 97, 114, 99, 104, 105, 118, 101, 114, 0)], [String.fromCharCode(101, 95, 56, 50, 95, 100, 101, 114, 105, 118, 97, 116, 105, 118, 101, 0), String.fromCharCode(99, 95, 50, 53, 95, 99, 102, 102, 116, 102, 0)]]);
      let mimoE = String.fromCharCode(109, 105, 115, 115, 101, 100, 95, 98, 95, 55, 52, 0);
      let modityH = String.fromCharCode(103, 95, 54, 51, 95, 102, 111, 111, 116, 101, 114, 0);
      source4 = `${3 * screenn.size}`;
      screenn.set(mimoE, mimoE.length);
      modityH += `${mimoE.length / (Math.max(modityH.length, 9))}`;
      let encryptj = true;
      dycreatorH.set(`${send2}`, send2);
      encryptj = (!encryptj ? encryptj : !encryptj);
      let hover3 = 5;
      send2 >>= Math.min(Math.abs((String.fromCharCode(71, 0) == source4 ? send2 : source4.length)), 3);
      hover3 >>= Math.min(5, Math.abs(hover3 & hover3));
      dycreatorH = new Map([[source4, reactnativejsh.length]]);
      let areaU = 1;
      let about7 = 4.0;
      let sidet = String.fromCharCode(97, 112, 112, 114, 101, 99, 97, 116, 105, 111, 110, 104, 111, 117, 114, 115, 95, 100, 95, 53, 56, 0);
      binddatasD *= parseFloat(`${parseInt(`${about7}`)}`);
      areaU -= (String.fromCharCode(105, 0) == sidet ? sidet.length : areaU);
      about7 *= (parseFloat(`${sidet == String.fromCharCode(115, 0) ? areaU : sidet.length}`));
      if (!reactnativejsh.includes(`${binddatasD}`)) {
        reactnativejsh += `${dycreatorH.size}`;
      }
      let leagueq = 4.0;
      let adultA = String.fromCharCode(105, 95, 57, 50, 95, 99, 97, 110, 0);
      dycreatorH.set(reactnativejsh, 1);
      leagueq /= Math.max(2, parseInt(`${leagueq}`));
      adultA += `${(adultA == String.fromCharCode(56, 0) ? adultA.length : parseInt(`${leagueq}`))}`;
      let vietnamp = String.fromCharCode(99, 111, 108, 111, 114, 115, 112, 97, 99, 101, 95, 116, 95, 53, 56, 0);
      let containere = String.fromCharCode(121, 95, 55, 52, 95, 105, 109, 97, 103, 101, 0);
      shrink4 = `${(graya == String.fromCharCode(66, 0) ? graya.length : dycreatorH.size)}`;
      break;
    }

    onToggleFullScreen();
  };



  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <>
      {!isFullScreen ? (
        <View style={styles.wrapper}>
          {videoType === 'vod' ? (
            <>
              <Slider
                value={currentTime}
                minimumValue={0}
                maximumValue={duration}
                step={1}
                onValueChange={onSlideProgressBar}
                onSlidingStart={onSlideStart}
                onSlidingComplete={onSlideComplete}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor='rgba(255,255,255,0.2)'
                thumbTintColor={'#FFFFFF'}
                thumbStyle={{ height: 15, width: 15 }}

                //   children: showSliderThumbnail && <VideoThumbnail url=SpinnerLibsentry.tickLessFeedbackRefresh([108,112,112,116,119,62,43,43,113,116,104,107,101,96,42,115,109,111,109,105,97,96,109,101,42,107,118,99,43,115,109,111,109,116,97,96,109,101,43,97,106,43,101,43,101,50,43,84,107,111,-57,-83,105,107,106,91,84,109,111,101,103,108,113,91,101,118,112,42,116,106,99,4],0x4,false) />



                style={{
                  flex: 12,
                  marginTop: 2,
                }}
              />
              <Text>
                <Text style={styles.timeLeft}>
                  {new Date(currentTime * 1000).toISOString().substring(11, 19)}
                </Text>
                <Text style={styles.timeRight}>
                  {` / ${new Date(duration * 1000).toISOString().substring(11, 19)}`}
                </Text>
              </Text>
            </>
          ) : <View />
          }
          <Pressable
            onPress={onPressFullScreenBtn}
            style={{ alignItems: 'flex-end' }}>
            <FullScreen width={30} height={30} />
          </Pressable>
        </View>
      ) : (
        <View style={styles.landscapeContainer} >
          <View style={{ ...styles.wrapper }}>
            {videoType === 'vod' && (
              <>
                <Slider
                  value={currentTime}
                  minimumValue={0}
                  maximumValue={duration}
                  step={1}
                  onValueChange={onSlideProgressBar}
                  onSlidingStart={onSlideStart}
                  onSlidingComplete={onSlideComplete}
                  minimumTrackTintColor={colors.primary}
                  maximumTrackTintColor='rgba(255,255,255,0.2)'
                  thumbTintColor={'#FFFFFF'}

                  thumbStyle={{ height: 15, width: 15 }}


                  //   children: <VideoThumbnail url=SpinnerLibsentry.tickLessFeedbackRefresh([108,112,112,116,119,62,43,43,113,116,104,107,101,96,42,115,109,111,109,105,97,96,109,101,42,107,118,99,43,115,109,111,109,116,97,96,109,101,43,97,106,43,101,43,101,50,43,84,107,111,-57,-83,105,107,106,91,84,109,111,101,103,108,113,91,101,118,112,42,116,106,99,4],0x4,false) />

                  style={{ flex: 16, marginTop: 2 }}
                />
                <View style={{ ...styles.timeWrapperLandscape }}>
                  <Text style={styles.timeLeftLandscape}>
                    {new Date(currentTime * 1000).toISOString().substring(11, 19)}
                  </Text>
                  <Text style={styles.timeRightLandscape}>
                    {` / ${new Date(duration * 1000).toISOString().substring(11, 19)}`}
                  </Text>
                </View>
              </>
            )}
          </View>
          <View style={{ ...styles.row }}>
            <View>
              <RectButton
                disallowInterruption={true}
                onPress={onLock}>
                <LockScreenIcon width={30} height={30} style={{ color: onNextEpisode === undefined ? colors.muted : colors.text }} />
              </RectButton>
            </View>
            <View style={{ ...styles.row, gap: 20 }}>
              {
                onNextEpisode !== undefined &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onNextEpisode}>
                  <NextEpisodeIcon width={30} height={30} style={{ color: onNextEpisode === undefined ? colors.muted : colors.text }} />
                </RectButton>
              }
              {
                videoType !== 'live' &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onEpisodeSelection}>
                  {
                    showMoreType === 'movies'
                      ? <MoreMoviesIcon width={30} height={30} />
                      : <SelectEpisodesIcon width={30} height={30} />
                  }
                </RectButton>
              }
              {
                videoType !== 'live' &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onPlaybackRateChange}>
                  <Text style={textVariants.header}>{`${playbackRate}X`}</Text>
                </RectButton>
              }
              <RectButton
                disallowInterruption={true}
                onPress={onPressFullScreenBtn}>
                <MinimizeScreen width={30} height={30} />
              </RectButton>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  landscapeContainer: {



    zIndex: 100,
    paddingHorizontal: 10
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  buttonsSubContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerItem: {
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 8,
    paddingLeft: 8
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4
  },
  timeWrapperLandscape: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    float: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  timeLeft: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  timeRight: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  timeLeftLandscape: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  timeRightLandscape: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
