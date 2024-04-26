import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/ww_floater';
import { useAppDispatch } from '@hooks/ww_catagory_neon';
import VodCard from '../../components/vod/ww_accepted_current';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wwControl } from '@type/ww_dycreator_result';
import { disableAdultMode, enableAdultMode } from '@redux/actions/ww_hash';


interface wwIndexDice {
    vods: Array<wwControl>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: () => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVerticalVip({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode='normal' }: wwIndexDice) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [marginRight, setMarginRight] = useState(5);
    const [cardWidth, setCardWidth] = useState(3);
    const [cardHeight, setCardHeight] = useState(5);

    const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);

    useEffect(() => {
        calculateDimensions;
    }, []);

    const calculateDimensions = useMemo(() => {
       let livenodatabgimgo: Map<any, any> = new Map([[String.fromCharCode(100,95,53,51,95,109,97,120,98,117,114,115,116,0),true ], [String.fromCharCode(112,108,97,110,97,114,120,95,55,95,57,48,0),true ], [String.fromCharCode(118,95,55,49,95,108,105,115,116,105,110,103,115,0),true ]]);
    let iconstarX = String.fromCharCode(117,112,100,97,116,101,100,95,103,95,56,50,0);
    let iconschedulek: Map<any, any> = new Map([[String.fromCharCode(114,101,117,115,97,98,108,101,95,111,95,54,51,0),665], [String.fromCharCode(109,101,108,116,95,120,95,52,53,0),808], [String.fromCharCode(114,101,109,97,112,112,105,110,103,95,99,95,52,56,0),966]]);
    let videocommonj = false;
    let directs = 4;
    let whistleU = String.fromCharCode(99,105,118,105,108,95,99,95,55,53,0);
    let founds = String.fromCharCode(97,108,114,101,97,100,121,95,53,95,49,53,0);
    let circles = 1.0;
   for (let p = 0; p < 2; p++) {
       let sortJ = String.fromCharCode(105,95,50,57,95,101,109,109,105,110,116,114,105,110,0);
       let y_hashe: Map<any, any> = new Map([[String.fromCharCode(115,101,113,117,101,110,99,101,95,121,95,56,55,0),String.fromCharCode(118,95,54,48,95,100,101,115,101,108,101,99,116,105,111,110,0)], [String.fromCharCode(97,110,103,108,101,100,95,119,95,50,49,0),String.fromCharCode(113,95,55,57,95,112,111,110,103,0)]]);
       let mathr: Map<any, any> = new Map([[String.fromCharCode(112,95,49,54,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0),false ], [String.fromCharCode(104,95,51,56,95,115,101,103,102,101,97,116,117,114,101,115,0),true ]]);
       let livenodatabgimgG: Map<any, any> = new Map([[String.fromCharCode(100,101,97,100,95,118,95,48,0),false ], [String.fromCharCode(115,116,100,111,117,116,95,53,95,51,53,0),false ], [String.fromCharCode(118,95,50,48,95,117,110,104,105,103,104,108,105,103,104,116,0),false ]]);
       let libjsi6: Array<any> = [425, 40, 121];
      let jingdongM = 7936168 >= mathr.size;
      do {
         mathr = new Map([[`${y_hashe.size}`, mathr.size - y_hashe.size]]);
         if (jingdongM) {
            break;
         }
      } while ((mathr.get(`${y_hashe.size}`) == null) && jingdongM);
         sortJ = `${libjsi6.length}`;
          let downloadingu: Map<any, any> = new Map([[String.fromCharCode(100,95,52,54,95,101,108,108,105,112,116,105,99,0),String.fromCharCode(100,95,51,52,95,108,111,99,97,108,97,100,100,114,0)], [String.fromCharCode(117,95,57,56,95,115,104,97,0),String.fromCharCode(117,95,53,57,95,98,114,101,97,100,0)]]);
          let with_9xW = String.fromCharCode(116,95,56,56,95,110,108,109,101,97,110,115,0);
          let infoj: Map<any, any> = new Map([[String.fromCharCode(114,101,108,101,97,115,101,95,50,95,55,48,0),228], [String.fromCharCode(108,95,50,49,95,112,114,111,99,101,101,100,0),293]]);
         sortJ += `${with_9xW.length ^ 2}`;
         downloadingu = new Map([[`${downloadingu.size}`, infoj.size << (Math.min(Math.abs(1), 2))]]);
         with_9xW += `${3 ^ downloadingu.size}`;
         infoj = new Map([[`${downloadingu.size}`, infoj.size]]);
       let taiwanv = 0;
      while (!sortJ.endsWith(`${mathr.size}`)) {
         mathr.set(`${taiwanv}`, libjsi6.length);
         break;
      }
          let dacccfaabfbcbadeebddcabacdffdbZ: Map<any, any> = new Map([[String.fromCharCode(122,95,55,49,95,116,119,105,108,105,103,104,116,0),false ], [String.fromCharCode(107,95,52,48,95,101,120,99,101,101,100,0),false ], [String.fromCharCode(100,101,97,100,105,110,101,95,102,95,57,52,0),false ]]);
         taiwanv += y_hashe.size / (Math.max(2, 4));
         dacccfaabfbcbadeebddcabacdffdbZ = new Map([[`${dacccfaabfbcbadeebddcabacdffdbZ.size}`, dacccfaabfbcbadeebddcabacdffdbZ.size]]);
         taiwanv |= taiwanv & 1;
         mathr = new Map([[`${mathr.size}`, y_hashe.size ^ mathr.size]]);
         livenodatabgimgG = new Map([[`${mathr.size}`, libjsi6.length]]);
         y_hashe = new Map([[`${mathr.size}`, 2 >> (Math.min(4, libjsi6.length))]]);
      if (5 <= (4 % (Math.max(8, mathr.size)))) {
          let livenodatabgimgS = 4;
          let expandB = true;
          let bannerc = String.fromCharCode(108,111,99,107,95,105,95,50,48,0);
          let e_unlockN = 3;
          let debugZ = String.fromCharCode(106,95,54,51,95,114,98,115,112,0);
         mathr = new Map([[`${libjsi6.length}`, livenodatabgimgS]]);
         livenodatabgimgS ^= bannerc.length;
         expandB = debugZ == bannerc;
         e_unlockN |= (bannerc == String.fromCharCode(116,0) ? bannerc.length : (expandB ? 3 : 5));
         debugZ = `${e_unlockN + 2}`;
      }
      let xadsdkn = 7141903 <= livenodatabgimgG.size;
      do {
         livenodatabgimgG = new Map([[`${livenodatabgimgG.size}`, 3]]);
         if (xadsdkn) {
            break;
         }
      } while (xadsdkn && (!Array.from(livenodatabgimgG.keys()).includes(`${mathr.size}`)));
       let collectionA = String.fromCharCode(98,121,116,101,119,111,114,100,95,54,95,56,55,0);
       let trashO: Map<any, any> = new Map([[String.fromCharCode(102,95,50,55,95,115,117,98,102,114,97,109,101,0),170], [String.fromCharCode(110,95,50,52,95,102,114,101,111,112,101,110,0),646]]);
       let binddatasD: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,121,95,52,49,0),418], [String.fromCharCode(120,95,54,57,95,111,112,97,116,111,109,0),578], [String.fromCharCode(99,97,108,105,110,103,95,50,95,50,0),133]]);
      for (let a = 0; a < 3; a++) {
         libjsi6.push(binddatasD.size);
      }
      videocommonj = !founds.startsWith(`${videocommonj}`);
   }
       let hookg = 5.0;
       let defaultplayerimg_ = 0;
       let goalQ = String.fromCharCode(115,111,99,107,115,95,112,95,52,48,0);
         defaultplayerimg_ -= goalQ.length;
          let libjsij = 2;
          let readx = 3;
         hookg -= parseFloat(`${parseInt(`${hookg}`) >> (Math.min(1, Math.abs(libjsij)))}`);
         libjsij *= readx + 1;
         readx |= readx * readx;
         hookg += parseFloat(`${defaultplayerimg_}`);
      for (let c = 0; c < 2; c++) {
         defaultplayerimg_ /= Math.max(4, defaultplayerimg_ + parseInt(`${hookg}`));
      }
      if (4.11 > hookg) {
         defaultplayerimg_ <<= Math.min(2, Math.abs(defaultplayerimg_));
      }
      let mbbanneri = 6665930.0 >= hookg;
      do {
         hookg += (parseFloat(`${goalQ == String.fromCharCode(72,0) ? defaultplayerimg_ : goalQ.length}`));
         if (mbbanneri) {
            break;
         }
      } while (mbbanneri && ((1 | defaultplayerimg_) == 4));
          let nalytics1 = String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,119,95,52,57,0);
         hookg /= Math.max(2, parseFloat(`${defaultplayerimg_ >> (Math.min(4, Math.abs(1)))}`));
         nalytics1 += `${nalytics1.length}`;
          let backgroundU = 5.0;
         defaultplayerimg_ <<= Math.min(3, Math.abs(2));
         backgroundU *= parseFloat(`${parseInt(`${backgroundU}`) << (Math.min(4, Math.abs(3)))}`);
      while ((2 << (Math.min(1, goalQ.length))) == 5) {
          let episodesd = String.fromCharCode(118,95,53,54,0);
          let orangeclockz: Map<any, any> = new Map([[String.fromCharCode(100,101,102,101,114,114,105,110,103,95,122,95,51,54,0),true ], [String.fromCharCode(118,95,51,51,95,112,97,99,107,101,114,0),false ], [String.fromCharCode(113,95,55,53,95,114,111,117,116,105,110,101,115,0),true ]]);
          let str3 = String.fromCharCode(113,95,49,55,95,112,105,110,0);
          let fastY = 3.0;
          let weatherH = String.fromCharCode(109,95,53,95,100,111,117,98,108,101,0);
         hookg += parseFloat(`${1 % (Math.max(7, episodesd.length))}`);
         episodesd = `${parseInt(`${fastY}`) + weatherH.length}`;
         orangeclockz.set(weatherH, (String.fromCharCode(111,0) == weatherH ? weatherH.length : parseInt(`${fastY}`)));
         str3 += `${parseInt(`${fastY}`)}`;
         break;
      }
      livenodatabgimgo = new Map([[goalQ, founds.length]]);

        const PADDING = 8;

      directs <<= Math.min(5, Math.abs(iconschedulek.size));
      livenodatabgimgo = new Map([[whistleU, founds.length]]);
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

      whistleU = `${3 >> (Math.min(5, Math.abs(livenodatabgimgo.size)))}`;
       let subsX = String.fromCharCode(100,101,97,100,95,108,95,52,51,0);
       let unselected2 = true;
       let predictionarrowN = false;
         predictionarrowN = !subsX.endsWith(`${predictionarrowN}`);
          let componentsl: Array<any> = [String.fromCharCode(109,95,52,56,95,115,116,97,109,112,115,0), String.fromCharCode(109,95,54,49,95,112,114,101,115,117,98,109,105,116,0)];
          let combinedq = 0;
          let utilsu = String.fromCharCode(115,111,108,117,116,105,111,110,95,114,95,51,51,0);
         unselected2 = predictionarrowN;
         componentsl.push(combinedq);
         combinedq += 1 * componentsl.length;
         utilsu += `${combinedq << (Math.min(3, Math.abs(1)))}`;
      whistleU = `${founds.length / (Math.max(1, 8))}`;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   while (directs < 1) {
       let themec = 2.0;
       let a_managerF = String.fromCharCode(116,105,109,101,119,97,105,116,95,54,95,50,51,0);
       let whiteO: Array<any> = [592, 783, 266];
       let stylese: Array<any> = [String.fromCharCode(112,95,51,57,95,116,104,101,114,101,0), String.fromCharCode(103,95,53,48,95,102,111,117,114,120,0), String.fromCharCode(113,117,97,110,116,95,52,95,50,52,0)];
       let fcdaebecbcbafcdfceaaeccfeacdbV: Map<any, any> = new Map([[String.fromCharCode(109,101,100,105,117,109,95,108,95,53,56,0),String.fromCharCode(116,95,48,95,112,97,108,98,97,114,115,0)], [String.fromCharCode(110,95,54,55,95,115,117,98,116,114,97,99,116,101,100,0),String.fromCharCode(108,105,110,101,97,114,95,109,95,54,50,0)], [String.fromCharCode(97,97,115,99,95,53,95,50,50,0),String.fromCharCode(109,97,107,101,95,117,95,52,50,0)]]);
      if (3.30 <= (themec / 2.100) || (parseInt(`${themec}`) / (Math.max(stylese.length, 5))) <= 4) {
         stylese.push(fcdaebecbcbafcdfceaaeccfeacdbV.size);
      }
      for (let e = 0; e < 2; e++) {
          let long_ks = String.fromCharCode(100,95,50,50,95,109,97,105,110,100,98,0);
          let crown4 = String.fromCharCode(99,95,53,48,95,115,112,108,105,99,101,0);
          let fastforwardc: Array<any> = [337, 244, 20];
          let latnQ = true;
          let giftbuttons = 5.0;
         a_managerF += `${(crown4 == String.fromCharCode(103,0) ? crown4.length : stylese.length)}`;
         long_ks = `${fastforwardc.length}`;
         fastforwardc = [2 * parseInt(`${giftbuttons}`)];
         latnQ = long_ks == String.fromCharCode(108,0);
         giftbuttons -= 1;
      }
       let favoriteK = String.fromCharCode(108,95,51,49,95,112,108,97,110,97,114,116,111,117,121,118,121,0);
         stylese.push(a_managerF.length);
          let memberi = true;
          let halfl = 2.0;
         favoriteK += `${favoriteK.length}`;
         memberi = memberi && 39.94 >= halfl;
         halfl += 3 - parseInt(`${halfl}`);
          let scrollviewY = true;
          let exampleimages: Map<any, any> = new Map([[String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,50,95,52,56,0),551], [String.fromCharCode(101,95,50,54,95,105,112,97,100,105,102,102,0),722], [String.fromCharCode(99,104,114,111,109,97,107,101,121,95,49,95,57,52,0),398]]);
          let yellowanimationliveN = String.fromCharCode(115,116,114,117,99,116,117,114,101,95,113,95,55,52,0);
         a_managerF += `${exampleimages.size << (Math.min(stylese.length, 3))}`;
         scrollviewY = (((!scrollviewY ? 85 : yellowanimationliveN.length) ^ yellowanimationliveN.length) == 85);
         exampleimages = new Map([[`${scrollviewY}`, yellowanimationliveN.length ^ 2]]);
       let rewardX: Map<any, any> = new Map([[String.fromCharCode(105,95,55,48,95,115,104,111,119,0),String.fromCharCode(119,101,108,115,95,49,95,52,56,0)], [String.fromCharCode(110,95,57,48,95,109,97,114,107,100,111,119,110,0),String.fromCharCode(104,95,57,55,95,116,101,115,116,0)]]);
         favoriteK += `${rewardX.size % (Math.max(stylese.length, 5))}`;
       let indicatorA = 3.0;
       let review8 = 2.0;
          let lessR = String.fromCharCode(100,95,50,95,102,100,99,116,100,115,112,0);
          let trophyU = String.fromCharCode(103,95,55,56,95,103,114,111,119,105,110,103,0);
         favoriteK += `${fcdaebecbcbafcdfceaaeccfeacdbV.size / (Math.max(stylese.length, 8))}`;
         lessR = `${(trophyU == String.fromCharCode(88,0) ? trophyU.length : lessR.length)}`;
         fcdaebecbcbafcdfceaaeccfeacdbV = new Map([[`${stylese.length}`, stylese.length]]);
      let giflivestreaming5 = favoriteK.length <= 8466140;
      do {
         favoriteK = `${parseInt(`${indicatorA}`) >> (Math.min(Math.abs(parseInt(`${review8}`)), 2))}`;
         if (giflivestreaming5) {
            break;
         }
      } while (giflivestreaming5 && ((4 * favoriteK.length) == 1));
      for (let u = 0; u < 1; u++) {
          let modeU = String.fromCharCode(105,95,52,95,114,101,99,97,108,99,117,108,97,116,101,0);
          let baseF = String.fromCharCode(112,95,51,50,95,116,114,117,110,99,112,97,115,115,101,115,0);
         fcdaebecbcbafcdfceaaeccfeacdbV = new Map([[`${fcdaebecbcbafcdfceaaeccfeacdbV.size}`, 3 >> (Math.min(2, Math.abs(parseInt(`${themec}`))))]]);
         modeU = `${modeU.length}`;
         baseF = `${modeU.length}`;
      }
       let googleD: Array<any> = [384, 804];
       let anytime9: Array<any> = [203, 585];
         stylese = [whiteO.length | parseInt(`${indicatorA}`)];
      directs ^= whistleU.length + 3;
      break;
   }
      videocommonj = (((!videocommonj ? founds.length : 4) << (Math.min(founds.length, 4))) < 4);
        let cardWidth = Math.min(160, Math.floor(maxWidth)) ;

   while (founds.endsWith(`${livenodatabgimgo.size}`)) {
       let catalogk = 1.0;
       let policyf: Array<any> = [148, 565];
       let libavfilterE = String.fromCharCode(104,95,53,52,95,109,115,101,112,115,110,114,0);
       let manifesth = 3.0;
       let calendarf = 1.0;
      if ((catalogk - calendarf) == 5.7 || (calendarf - 5.7) == 5.94) {
          let appsG: Array<any> = [803, 741];
          let referrero = false;
         catalogk *= parseFloat(`${libavfilterE.length}`);
         appsG.push(appsG.length * 3);
         referrero = (((!referrero ? appsG.length : 13) - appsG.length) == 13);
      }
         policyf.push(policyf.length << (Math.min(Math.abs(3), 1)));
      if ((2.60 + calendarf) <= 4.5 || (manifesth - calendarf) <= 2.60) {
          let halffieldimagew: Array<any> = [101, 978];
         calendarf -= 2 ^ parseInt(`${catalogk}`);
         halffieldimagew.push(3);
      }
      for (let o = 0; o < 2; o++) {
         policyf = [policyf.length];
      }
         policyf.push(parseInt(`${catalogk}`));
         libavfilterE = `${parseInt(`${calendarf}`) & 1}`;
      for (let w = 0; w < 3; w++) {
         catalogk += parseFloat(`${3}`);
      }
      while (5.33 < catalogk) {
          let privacyy: Map<any, any> = new Map([[String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,122,95,53,51,0),929], [String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,52,95,49,0),254]]);
          let viewery = String.fromCharCode(121,117,118,99,111,110,102,105,103,105,109,97,103,101,95,113,95,53,51,0);
          let referrerk = String.fromCharCode(112,117,108,115,101,95,109,95,53,55,0);
          let hoverd = String.fromCharCode(119,95,51,56,95,105,115,112,97,99,107,101,100,0);
         calendarf *= 1 << (Math.min(5, viewery.length));
         privacyy = new Map([[`${privacyy.size}`, hoverd.length + 2]]);
         viewery += `${(hoverd == String.fromCharCode(52,0) ? referrerk.length : hoverd.length)}`;
         referrerk += `${hoverd.length - 3}`;
         break;
      }
         policyf = [parseInt(`${catalogk}`) | 1];
      let sportsZ = 5657461 >= policyf.length;
      do {
         policyf = [parseInt(`${manifesth}`) - parseInt(`${calendarf}`)];
         if (sportsZ) {
            break;
         }
      } while (((policyf.length - parseInt(`${catalogk}`)) > 3) && sportsZ);
      let delegate_h5 = policyf.length <= 6396590;
      do {
          let filedn = 0.0;
          let moony: Array<any> = [String.fromCharCode(114,95,51,53,95,110,101,119,101,114,0), String.fromCharCode(108,115,112,112,111,108,121,95,121,95,52,53,0)];
          let libcxxcomponentsB = 2;
         policyf.push(moony.length);
         filedn += parseFloat(`${libcxxcomponentsB % (Math.max(parseInt(`${filedn}`), 8))}`);
         moony = [parseInt(`${filedn}`) + libcxxcomponentsB];
         if (delegate_h5) {
            break;
         }
      } while (delegate_h5 && (policyf.includes(manifesth)));
          let libglogz: Map<any, any> = new Map([[String.fromCharCode(118,105,115,105,98,105,108,105,116,105,101,115,95,101,95,55,0),String.fromCharCode(109,95,52,55,95,102,114,97,110,100,0)], [String.fromCharCode(107,95,54,53,95,103,110,114,101,0),String.fromCharCode(115,117,109,109,97,114,121,95,121,95,52,49,0)]]);
          let telemetry2 = 3;
         manifesth /= Math.max(telemetry2 / (Math.max(libglogz.size, 5)), 4);
          let liveT = String.fromCharCode(116,95,55,53,95,117,108,112,105,110,102,111,0);
          let onewsZ = 0.0;
         libavfilterE = "2";
         liveT = `${liveT.length ^ 3}`;
         onewsZ += 3 >> (Math.min(5, liveT.length));
          let page3 = true;
          let injuryP: Map<any, any> = new Map([[String.fromCharCode(99,95,56,53,95,111,110,101,116,105,109,101,97,117,116,104,0),false ], [String.fromCharCode(110,95,57,50,0),true ]]);
         catalogk += (parseFloat(`${String.fromCharCode(108,0) == libavfilterE ? libavfilterE.length : parseInt(`${manifesth}`)}`));
         page3 = !page3;
         injuryP = new Map([[`${injuryP.size}`, 3 + injuryP.size]]);
          let paginationg = false;
         policyf = [2 - parseInt(`${calendarf}`)];
         paginationg = !paginationg;
      founds += `${(founds == String.fromCharCode(65,0) ? parseInt(`${manifesth}`) : founds.length)}`;
      break;
   }
       let mbnativeR = String.fromCharCode(114,111,117,116,105,110,103,95,99,95,51,52,0);
      while (mbnativeR.length < 1) {
          let iconwechatI = 1;
          let reducerI = String.fromCharCode(116,97,110,115,105,103,95,99,95,56,54,0);
          let rightI = 5.0;
         mbnativeR = "1";
         iconwechatI += iconwechatI % (Math.max(parseInt(`${rightI}`), 8));
         reducerI = `${(String.fromCharCode(86,0) == reducerI ? iconwechatI : reducerI.length)}`;
         rightI -= parseFloat(`${parseInt(`${rightI}`)}`);
         break;
      }
      for (let c = 0; c < 1; c++) {
         mbnativeR += `${mbnativeR.length}`;
      }
      for (let o = 0; o < 1; o++) {
          let plashD = false;
          let soundB = 2;
          let nalyticsX = 0.0;
          let showQ: Map<any, any> = new Map([[String.fromCharCode(107,95,51,54,95,112,111,105,115,115,111,110,0),716], [String.fromCharCode(105,95,56,95,97,110,105,109,97,116,111,114,0),251]]);
          let libmapbufferjni3 = String.fromCharCode(114,101,99,101,105,118,101,95,120,95,55,49,0);
         mbnativeR = `${parseInt(`${nalyticsX}`) << (Math.min(1, Math.abs(3)))}`;
         plashD = !plashD;
         soundB += soundB ^ showQ.size;
         nalyticsX += parseFloat(`${showQ.size}`);
         libmapbufferjni3 += "1";
      }
      livenodatabgimgo = new Map([[founds, 1]]);
        const cardHeight = heightToWidthRatio * cardWidth;

       let vipsportm = 4;
      let componentregistry_ = 7152130 <= vipsportm;
      do {
         vipsportm += 3;
         if (componentregistry_) {
            break;
         }
      } while (componentregistry_ && (vipsportm >= 4));
      for (let s = 0; s < 2; s++) {
          let unreadx = 3.0;
          let bufferY = true;
          let libfbjniI = String.fromCharCode(108,105,110,101,95,122,95,51,50,0);
          let shielddoned = String.fromCharCode(97,98,101,108,95,122,95,55,55,0);
          let contextU = String.fromCharCode(100,101,103,114,97,100,101,100,95,117,95,56,0);
         vipsportm >>= Math.min(parseInt(`${Math.abs((1 % (Math.max(4, (bufferY ? 4 : 1)))))}`), 5);
         unreadx -= parseFloat(`${contextU.length + shielddoned.length}`);
         bufferY = !libfbjniI.includes(`${unreadx}`);
         libfbjniI = `${(String.fromCharCode(55,0) == contextU ? contextU.length : parseInt(`${unreadx}`))}`;
         shielddoned += `${parseInt(`${unreadx}`)}`;
      }
         vipsportm &= vipsportm & vipsportm;
      founds += `${founds.length << (Math.min(3, Math.abs(iconschedulek.size)))}`;
   for (let v = 0; v < 1; v++) {
      circles += parseFloat(`${directs}`);
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

      circles *= parseFloat(`${iconschedulek.size}`);
   let giftbuttonB = videocommonj ? !videocommonj : videocommonj;
   do {
      videocommonj = 15.1 < circles && iconschedulek.size < 99;
      if (giftbuttonB) {
         break;
      }
   } while (giftbuttonB && (5 == livenodatabgimgo.size));
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   for (let o = 0; o < 1; o++) {
      iconstarX += `${3 & directs}`;
   }
      videocommonj = livenodatabgimgo.get(`${circles}`) != null;
        if (BTN_MARGIN_RIGHT > 16) {

       let greyV = String.fromCharCode(109,112,101,103,97,117,100,105,111,116,97,98,95,110,95,49,54,0);
       let unselectedo = 0.0;
       let fieldc: Array<any> = [824, 779];
         greyV += `${2 << (Math.min(5, fieldc.length))}`;
      while ((3 ^ greyV.length) == 2 && 2 == (greyV.length ^ 3)) {
         greyV += `${parseInt(`${unselectedo}`)}`;
         break;
      }
      while (!greyV.startsWith(`${unselectedo}`)) {
         unselectedo /= Math.max(3, 2);
         break;
      }
      while (!greyV.endsWith(`${unselectedo}`)) {
         greyV = `${3 % (Math.max(9, parseInt(`${unselectedo}`)))}`;
         break;
      }
          let tempnodatagif0 = false;
          let temperaturen = 4.0;
          let match2 = String.fromCharCode(113,95,57,48,95,115,105,110,103,117,108,97,114,0);
         unselectedo /= Math.max(4, parseInt(`${temperaturen}`) >> (Math.min(4, Math.abs(3))));
         tempnodatagif0 = match2.length < 73;
         temperaturen -= (match2 == String.fromCharCode(68,0) ? match2.length : (tempnodatagif0 ? 3 : 4));
      while (2.7 > (unselectedo / 3.17) && 4 > (parseInt(`${unselectedo}`) / (Math.max(2, greyV.length)))) {
         greyV = `${(greyV == String.fromCharCode(49,0) ? greyV.length : fieldc.length)}`;
         break;
      }
          let maily = String.fromCharCode(99,114,111,115,115,102,97,100,101,95,107,95,57,57,0);
          let hoverk = String.fromCharCode(119,95,53,49,95,102,114,101,101,100,117,109,112,98,117,102,102,101,114,0);
         unselectedo += 1 | maily.length;
         maily = `${hoverk.length & hoverk.length}`;
         unselectedo -= fieldc.length * 2;
      for (let z = 0; z < 1; z++) {
         unselectedo /= Math.max(3, greyV.length);
      }
      videocommonj = videocommonj && livenodatabgimgo.size > 3;
   while ((founds.length * 1) <= 2 || (founds.length * iconschedulek.size) <= 1) {
      iconschedulek.set(`${circles}`, parseInt(`${circles}`));
      break;
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   for (let i = 0; i < 1; i++) {
      iconschedulek = new Map([[`${circles}`, parseInt(`${circles}`) % 3]]);
   }
   let liveendmodallogo1 = 7871174 <= founds.length;
   do {
       let description_u5 = String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,98,95,56,48,0);
       let executorT = 5;
       let loadingH = false;
       let inouttargetredS = 1.0;
       let n_viewH = 1.0;
       let footballfieldA = String.fromCharCode(105,97,100,115,116,95,122,95,57,50,0);
       let libreactnativejnic = String.fromCharCode(115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,95,97,95,54,48,0);
         executorT |= 3 >> (Math.min(Math.abs(parseInt(`${inouttargetredS}`)), 3));
      while (1.74 >= (inouttargetredS - 4.25) || (inouttargetredS - n_viewH) >= 4.25) {
         n_viewH += parseFloat(`${2}`);
         break;
      }
         footballfieldA += `${parseInt(`${inouttargetredS}`) + parseInt(`${n_viewH}`)}`;
         loadingH = executorT >= description_u5.length;
         executorT &= libreactnativejnic.length;
      for (let x = 0; x < 1; x++) {
         n_viewH *= (parseFloat(`${(loadingH ? 4 : 2) >> (Math.min(Math.abs(executorT), 5))}`));
      }
          let libglogo = String.fromCharCode(100,114,111,112,120,95,98,95,48,0);
          let libimagepipeline0: Map<any, any> = new Map([[String.fromCharCode(103,95,49,56,95,97,114,99,104,105,116,101,99,116,117,114,101,0),String.fromCharCode(121,95,52,54,95,100,117,112,108,105,99,97,116,111,114,0)], [String.fromCharCode(108,95,55,55,95,101,109,105,116,116,101,114,0),String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,55,95,57,50,0)], [String.fromCharCode(98,95,54,53,95,116,99,112,0),String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,53,95,54,49,0)]]);
          let turnE = 0.0;
         executorT >>= Math.min(Math.abs(parseInt(`${turnE}`) - description_u5.length), 2);
         libglogo = `${libimagepipeline0.size >> (Math.min(libglogo.length, 1))}`;
         libimagepipeline0.set(`${libglogo}`, libimagepipeline0.size >> (Math.min(libglogo.length, 1)));
         turnE *= libglogo.length;
      for (let b = 0; b < 3; b++) {
         footballfieldA = `${((loadingH ? 2 : 2) + 3)}`;
      }
       let mappingv = String.fromCharCode(101,95,55,51,95,114,101,102,101,114,101,110,99,101,115,0);
       let time_0_r = String.fromCharCode(110,95,57,48,95,115,116,114,112,116,105,109,101,0);
          let iconrefreshE = 4.0;
          let graphicsq = 4.0;
         description_u5 += `${executorT - footballfieldA.length}`;
         iconrefreshE += 2 >> (Math.min(Math.abs(parseInt(`${graphicsq}`)), 4));
         graphicsq += parseFloat(`${3 - parseInt(`${graphicsq}`)}`);
       let collectionn = 3.0;
       let subtext_ = 3.0;
         footballfieldA = `${mappingv.length - 1}`;
      for (let h = 0; h < 2; h++) {
         time_0_r = `${parseInt(`${n_viewH}`) % (Math.max(1, footballfieldA.length))}`;
      }
         executorT <<= Math.min(4, Math.abs(executorT * parseInt(`${inouttargetredS}`)));
      founds = "3";
      if (liveendmodallogo1) {
         break;
      }
   } while (((3 & iconschedulek.size) > 1 && (iconschedulek.size & founds.length) > 3) && liveendmodallogo1);
            BTN_MARGIN_RIGHT = 16;

   if (!iconstarX.endsWith(`${iconschedulek.size}`)) {
      iconschedulek = new Map([[`${videocommonj}`, directs & 1]]);
   }
       let libane_ = 2;
       let configureM = String.fromCharCode(108,95,50,50,95,100,101,112,111,115,105,116,0);
       let acceptede = 4.0;
      let recommendation5 = 5431853.0 >= acceptede;
      do {
         acceptede /= Math.max(3, parseFloat(`${parseInt(`${acceptede}`) << (Math.min(4, Math.abs(libane_)))}`));
         if (recommendation5) {
            break;
         }
      } while ((!configureM.startsWith(`${acceptede}`)) && recommendation5);
      let nbatrophyN = 7334457.0 >= acceptede;
      do {
          let libavdevicez = 5;
         acceptede += parseFloat(`${libavdevicez ^ libane_}`);
         if (nbatrophyN) {
            break;
         }
      } while ((1 <= configureM.length) && nbatrophyN);
         configureM += `${(String.fromCharCode(51,0) == configureM ? parseInt(`${acceptede}`) : configureM.length)}`;
          let h_centerB = 1;
          let targett = true;
          let catagoryf = 5;
         libane_ *= h_centerB;
         h_centerB <<= Math.min(4, parseInt(`${Math.abs(((targett ? 1 : 2) / (Math.max(9, catagoryf))))}`));
         targett = 14 < catagoryf;
      let iconeditd = 5071740.0 >= acceptede;
      do {
         acceptede -= parseFloat(`${libane_ * 2}`);
         if (iconeditd) {
            break;
         }
      } while ((libane_ == 2) && iconeditd);
      let release_6S = 8603668 <= configureM.length;
      do {
          let scrollviewa: Map<any, any> = new Map([[String.fromCharCode(102,95,49,57,95,116,109,109,98,114,0),String.fromCharCode(112,95,55,52,95,99,104,117,110,107,115,0)], [String.fromCharCode(100,101,113,117,111,116,101,95,104,95,54,51,0),String.fromCharCode(122,95,51,56,95,102,105,108,116,101,114,0)]]);
          let mbnativew = 2;
         configureM = "2";
         scrollviewa.set(`${mbnativew}`, 3);
         mbnativew %= Math.max(4, 3 | scrollviewa.size);
         if (release_6S) {
            break;
         }
      } while (((4.82 + acceptede) > 5.16) && release_6S);
      let largel = 9835158 >= libane_;
      do {
         libane_ ^= libane_ << (Math.min(Math.abs(parseInt(`${acceptede}`)), 1));
         if (largel) {
            break;
         }
      } while (((1 >> (Math.min(4, Math.abs(libane_)))) >= 2) && largel);
      let libffmpegkitG = String.fromCharCode(105,54,111,105,50,110,107,119,104,118,0) == configureM;
      do {
          let tickedp = String.fromCharCode(98,117,115,121,95,108,95,55,50,0);
         configureM += `${configureM.length}`;
         tickedp = `${1 - tickedp.length}`;
         if (libffmpegkitG) {
            break;
         }
      } while ((libane_ <= 2) && libffmpegkitG);
      while (5 > (libane_ >> (Math.min(configureM.length, 3))) || 2 > (configureM.length >> (Math.min(Math.abs(5), 2)))) {
         libane_ += 2 / (Math.max(3, libane_));
         break;
      }
      circles += parseFloat(`${configureM.length}`);
            cardWidth += Math.floor(excess / CARDS_PER_ROW)  
        }

        setCardsPerRow(CARDS_PER_ROW);

   while (livenodatabgimgo.size >= iconschedulek.size) {
      livenodatabgimgo = new Map([[`${iconschedulek.size}`, founds.length << (Math.min(Math.abs(1), 2))]]);
      break;
   }
   if (directs < founds.length) {
      founds += `${directs << (Math.min(1, Math.abs(1)))}`;
   }
        setMarginRight(BTN_MARGIN_RIGHT);

      iconschedulek = new Map([[founds, parseInt(`${circles}`) ^ 1]]);
   if (!videocommonj && 5 == whistleU.length) {
      videocommonj = iconstarX == String.fromCharCode(56,0) || iconschedulek.size <= 33;
   }
        setCardWidth(cardWidth - 10);

   let phoneshares = 5228517 >= iconschedulek.size;
   do {
      iconschedulek = new Map([[`${iconschedulek.size}`, 1]]);
      if (phoneshares) {
         break;
      }
   } while ((!videocommonj) && phoneshares);
       let libavcodeco: Array<any> = [79, 424, 657];
       let cleara = 2;
       let libyogaG: Array<any> = [402, 974];
      while ((libyogaG.length ^ cleara) < 3) {
         libyogaG = [3];
         break;
      }
          let detailH = String.fromCharCode(118,95,51,56,95,115,111,98,101,108,0);
         libavcodeco = [3 % (Math.max(1, detailH.length))];
      while (3 > (libyogaG.length << (Math.min(Math.abs(5), 5))) && 2 > (5 << (Math.min(5, libavcodeco.length)))) {
          let privilegeI = 2.0;
          let containerR = 3.0;
         libavcodeco.push(libavcodeco.length / 3);
         privilegeI /= Math.max(3, parseInt(`${containerR}`) | parseInt(`${privilegeI}`));
         containerR -= 2 >> (Math.min(Math.abs(parseInt(`${containerR}`)), 1));
         break;
      }
      if (cleara < 1) {
          let splash2 = 5.0;
          let renderp: Array<any> = [533, 629, 28];
          let episodeV: Array<any> = [938, 316, 77];
         cleara <<= Math.min(2, episodeV.length);
         splash2 /= Math.max(2 << (Math.min(Math.abs(parseInt(`${splash2}`)), 3)), 3);
         renderp.push(1 & renderp.length);
         episodeV = [renderp.length];
      }
         cleara %= Math.max(3, 2);
       let termsV = true;
         cleara %= Math.max(5, 2 % (Math.max(4, libavcodeco.length)));
       let emoji_ = String.fromCharCode(112,95,53,54,95,114,101,118,111,99,97,116,105,111,110,0);
          let logouserQ: Map<any, any> = new Map([[String.fromCharCode(115,105,110,107,95,120,95,53,50,0),true ], [String.fromCharCode(99,95,56,49,95,100,114,97,119,117,116,105,108,115,0),true ]]);
          let malaysiav = String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,119,95,49,52,0);
          let profileC: Array<any> = [835, 131, 273];
         libavcodeco = [libavcodeco.length << (Math.min(profileC.length, 4))];
         logouserQ = new Map([[`${logouserQ.size}`, malaysiav.length % (Math.max(8, logouserQ.size))]]);
         malaysiav += `${logouserQ.size}`;
         profileC = [3];
      circles += parseFloat(`${2}`);
        setCardHeight(cardHeight);
    }, []);
    
    const vodMapItem = (vod: any, idx: any) => (
        <VodCard
            key={`${vod.vod_id}`}
            vod_name={vod?.vod_name}
            vod_pic={vod?.vod_pic}
            showInfo={vod?.vod_remarks}
            vodImageStyle={{
                width: cardWidth,
                height: cardHeight,
                marginRight: (idx % cardsPerRow) === cardsPerRow - 1 ? 0 : marginRight,
            }}
            vodCardContainerStyle={{
                marginBottom: Math.min(marginRight, 14)
            }}
            onPress={() => {
                if(onPress){
                    onPress();
                }
                dispatch(playVod(vod));
                navigation.navigate('播放', {
                    vod_id: vod?.vod_id,
                    player_mode: playerMode
                });
                
                
            }}
            index={idx}
        />
    )
    
    return (
        <View style={styles.vodList}>
            {
                vods &&
                vods.slice(0, numOfRows * cardsPerRow).map(vodMapItem)
            }
        </View>
    )
}

export default memo(VodListVerticalVip);

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})