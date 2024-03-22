import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/mayi_goallogo';
import { useAppDispatch } from '@hooks/mayi_redirect';
import VodCard from '../../components/vod/mayi_pressure_footballfiledlayout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mayi_EmptyGradle } from '@type/mayi_green';
import { disableAdultMode, enableAdultMode } from '@redux/actions/mayi_iconorientation_chatroombackground';
import DeviceInfo from 'react-native-device-info';


interface mayi_GoogleViews {
    vods: Array<mayi_EmptyGradle>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: ({ vodId }: { vodId: any }) => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode = 'normal' }: mayi_GoogleViews) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [marginRight, setMarginRight] = useState(5);
    const [cardWidth, setCardWidth] = useState(3);
    const [cardHeight, setCardHeight] = useState(5);

    const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);


    const [deviceName, setDeviceName] = useState("");

    DeviceInfo.getDeviceName().then((d) => {
        setDeviceName(d.toLowerCase());
    });
    
    useEffect(() => {
        calculateDimensions;
        
        
        
        
        
        
    }, []);
    const calculateDimensions = useMemo(() => {
       let binddatasi: Map<any, any> = new Map([[String.fromCharCode(120,95,49,52,95,114,101,112,114,101,115,101,110,116,105,110,103,0),String.fromCharCode(119,109,118,100,115,112,95,105,95,49,57,0)], [String.fromCharCode(98,108,105,110,107,95,48,95,56,0),String.fromCharCode(101,95,53,54,95,102,105,108,116,101,114,103,114,97,112,104,0)], [String.fromCharCode(102,95,55,56,95,115,97,102,97,114,121,0),String.fromCharCode(122,95,54,52,95,110,101,120,116,108,0)]]);
    let iconadslinkA = 2;
    let storeu = 3;
    let fastforwardy = String.fromCharCode(119,95,51,50,95,119,97,108,0);
    let predictionactiveg = 5.0;
    let reward7 = 0;
    let hook7 = 0.0;
    let basketballmatchdetailbgv = 5.0;
    let emojiheart7 = 2.0;
    let expiredA: Array<any> = [String.fromCharCode(99,117,114,116,97,105,110,115,95,108,95,53,53,0), String.fromCharCode(101,108,105,109,105,110,97,116,105,111,110,95,48,95,56,48,0), String.fromCharCode(97,108,105,97,115,95,112,95,56,51,0)];
    let librrcI = String.fromCharCode(100,101,102,105,110,101,115,95,106,95,57,50,0);
    let heji6 = String.fromCharCode(120,95,54,95,99,105,112,104,101,114,98,121,110,97,109,101,0);
    let shootD = 1.0;
    let footballfieldn: Map<any, any> = new Map([[String.fromCharCode(119,95,49,49,95,115,105,103,110,114,97,110,100,0),16], [String.fromCharCode(104,111,108,101,95,52,95,56,53,0),465], [String.fromCharCode(114,101,111,114,100,101,114,105,110,103,95,110,95,52,56,0),131]]);
    let untickz = 4.0;
    let component8: Array<any> = [882, 315];
   for (let d = 0; d < 1; d++) {
       let headerL = String.fromCharCode(99,111,108,108,101,99,116,101,100,95,107,95,50,0);
       let redscoreball5 = String.fromCharCode(118,95,52,54,95,116,114,101,101,114,101,97,100,101,114,0);
       let ajaxx = 1.0;
       let private_brB = String.fromCharCode(114,97,105,110,95,98,95,50,53,0);
         redscoreball5 = "3";
      let data2 = 6358391 >= private_brB.length;
      do {
          let questm: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,101,100,95,104,95,51,48,0),231], [String.fromCharCode(115,101,116,95,108,95,50,53,0),931], [String.fromCharCode(107,95,51,54,95,111,115,109,111,115,0),286]]);
          let chartf = false;
          let jnewso: Map<any, any> = new Map([[String.fromCharCode(101,95,56,53,95,115,104,117,102,102,108,101,112,108,97,110,101,115,0),618], [String.fromCharCode(103,101,116,116,105,110,103,95,117,95,55,55,0),932]]);
          let s_imageG = String.fromCharCode(121,95,57,52,95,122,112,98,105,113,117,97,100,115,0);
         private_brB += `${private_brB.length + 1}`;
         questm = new Map([[`${questm.size}`, questm.size]]);
         chartf = s_imageG.length < 46;
         jnewso = new Map([[`${questm.size}`, questm.size / 3]]);
         s_imageG = `${questm.size}`;
         if (data2) {
            break;
         }
      } while ((headerL == String.fromCharCode(72,0)) && data2);
         ajaxx *= parseFloat(`${headerL.length}`);
         ajaxx += (parseFloat(`${String.fromCharCode(75,0) == private_brB ? private_brB.length : redscoreball5.length}`));
         private_brB += `${redscoreball5.length >> (Math.min(4, headerL.length))}`;
      while (2.44 > (2.53 * ajaxx) || (2.53 * ajaxx) > 2.84) {
         ajaxx /= Math.max(parseFloat(`${parseInt(`${ajaxx}`) - private_brB.length}`), 5);
         break;
      }
      let c_hashT = String.fromCharCode(116,50,50,107,111,0) == private_brB;
      do {
         private_brB = "1";
         if (c_hashT) {
            break;
         }
      } while (c_hashT && (3.57 <= (5.30 - ajaxx) && (ajaxx - parseFloat(`${private_brB.length}`)) <= 5.30));
      let basketballicone = private_brB.length <= 8773179;
      do {
          let coreM = String.fromCharCode(112,101,105,114,115,95,106,95,57,57,0);
          let weatherl: Map<any, any> = new Map([[String.fromCharCode(104,95,56,51,95,115,105,122,101,115,0),true ], [String.fromCharCode(101,95,51,53,95,99,114,117,110,0),false ]]);
          let iconsetting9 = true;
          let notificationS = 5;
          let footballP = 1.0;
         private_brB += `${notificationS & 1}`;
         coreM += `${weatherl.size >> (Math.min(Math.abs(1), 4))}`;
         weatherl = new Map([[coreM, parseInt(`${footballP}`)]]);
         iconsetting9 = iconsetting9 || 15.71 == footballP;
         notificationS /= Math.max(4, coreM.length * 3);
         if (basketballicone) {
            break;
         }
      } while (basketballicone && (5 < headerL.length));
       let runtimeJ: Array<any> = [283, 452, 341];
      if (private_brB.length > 1) {
         headerL += "1";
      }
      let ewardedU = redscoreball5.length <= 6243653;
      do {
         redscoreball5 = `${private_brB.length & parseInt(`${ajaxx}`)}`;
         if (ewardedU) {
            break;
         }
      } while ((5.10 == (ajaxx / 2.29) || 2 == (parseInt(`${ajaxx}`) / (Math.max(10, redscoreball5.length)))) && ewardedU);
      let profilepicY = String.fromCharCode(55,99,116,54,0) == redscoreball5;
      do {
         redscoreball5 += `${headerL.length + 3}`;
         if (profilepicY) {
            break;
         }
      } while (profilepicY && (redscoreball5.length < 4 || private_brB.length < 4));
      iconadslinkA -= 3 - iconadslinkA;
   }
       let grayb = 2;
          let yellowscoreballE = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,115,95,52,52,0);
          let refreshborderlessN = String.fromCharCode(109,111,110,103,111,95,54,95,52,52,0);
         grayb &= (yellowscoreballE == String.fromCharCode(119,0) ? yellowscoreballE.length : grayb);
         refreshborderlessN = `${(String.fromCharCode(118,0) == refreshborderlessN ? refreshborderlessN.length : refreshborderlessN.length)}`;
      while (2 > (grayb >> (Math.min(Math.abs(2), 3)))) {
         grayb /= Math.max(3 >> (Math.min(5, Math.abs(grayb))), 3);
         break;
      }
       let backwardO: Array<any> = [510, 111, 471];
      librrcI = `${3 << (Math.min(Math.abs(iconadslinkA), 1))}`;
   if (3 >= (reward7 + storeu) || 1 >= (reward7 + 3)) {
      storeu %= Math.max(3, storeu << (Math.min(Math.abs(reward7), 4)));
   }

        const PADDING = 8;

       let hometeamfield0: Array<any> = [137, 507];
      while (hometeamfield0.length < 2) {
          let smallbrightnessH = String.fromCharCode(117,110,115,101,110,116,95,98,95,51,51,0);
          let whistlep = 3;
          let robotot = 0;
          let formK: Array<any> = [599, 500];
          let update_2e: Map<any, any> = new Map([[String.fromCharCode(117,95,50,57,0),893], [String.fromCharCode(121,95,54,56,95,99,111,101,102,115,0),474], [String.fromCharCode(105,110,111,117,116,95,119,95,56,55,0),543]]);
         hometeamfield0.push(formK.length);
         smallbrightnessH = `${1 % (Math.max(9, robotot))}`;
         whistlep ^= whistlep >> (Math.min(5, Math.abs(robotot)));
         formK = [smallbrightnessH.length - 2];
         update_2e = new Map([[`${update_2e.size}`, robotot]]);
         break;
      }
      if (hometeamfield0.length <= 3) {
         hometeamfield0 = [hometeamfield0.length];
      }
       let fullscreenmaxi = String.fromCharCode(120,95,50,50,95,116,97,98,108,101,99,0);
       let pointG = String.fromCharCode(100,101,99,105,109,97,108,115,95,111,95,53,48,0);
      binddatasi = new Map([[`${expiredA.length}`, expiredA.length + parseInt(`${hook7}`)]]);
       let rightV = String.fromCharCode(100,95,55,49,95,102,109,97,99,0);
       let verticalR = false;
      if (rightV.length >= 1 && verticalR) {
         rightV += "2";
      }
      if (3 >= rightV.length) {
         rightV += `${((verticalR ? 5 : 4))}`;
      }
      if (!verticalR) {
         rightV += `${(2 >> (Math.min(3, Math.abs((verticalR ? 2 : 4)))))}`;
      }
          let sellI = 4.0;
          let predictionwinn: Array<any> = [444, 136, 390];
          let libhermes7 = String.fromCharCode(114,95,55,56,95,121,112,114,101,100,105,99,116,105,111,110,0);
         verticalR = (rightV.length - parseInt(`${sellI}`)) > 41;
         sellI += parseFloat(`${1 - libhermes7.length}`);
         predictionwinn = [libhermes7.length ^ 1];
         rightV += `${rightV.length}`;
      while (!rightV.endsWith(`${verticalR}`)) {
          let libapminsightas = String.fromCharCode(114,101,115,105,103,110,105,110,103,95,109,95,54,54,0);
          let zhengpiang = 2;
          let humidityO = true;
          let indicatorb = false;
          let lessq = true;
         rightV = `${zhengpiang}`;
         libapminsightas += `${((indicatorb ? 4 : 5) % (Math.max(6, libapminsightas.length)))}`;
         zhengpiang ^= ((indicatorb ? 5 : 5) * (lessq ? 5 : 4));
         humidityO = !lessq;
         break;
      }
      basketballmatchdetailbgv += parseFloat(`${binddatasi.size}`);
   while ((5 - reward7) >= 2 || (reward7 | 5) >= 1) {
      reward7 >>= Math.min(5, Math.abs(parseInt(`${emojiheart7}`)));
      break;
   }
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

       let orangeuparrowg = 5.0;
       let viewerX = 0.0;
       let stylesZ: Array<any> = [102, 712, 651];
      while ((orangeuparrowg - viewerX) > 2.25) {
         viewerX *= parseInt(`${orangeuparrowg}`);
         break;
      }
         orangeuparrowg -= parseFloat(`${parseInt(`${viewerX}`) << (Math.min(2, Math.abs(parseInt(`${orangeuparrowg}`))))}`);
      for (let r = 0; r < 3; r++) {
         stylesZ = [2];
      }
      for (let o = 0; o < 1; o++) {
          let launcherc = String.fromCharCode(100,101,108,105,118,101,114,95,111,95,50,50,0);
          let iconcloseN: Array<any> = [215, 793];
         viewerX -= parseInt(`${orangeuparrowg}`);
         launcherc += `${iconcloseN.length}`;
         iconcloseN.push(iconcloseN.length);
      }
       let smallorangemanU = String.fromCharCode(120,95,52,53,95,105,116,117,110,101,115,0);
      for (let x = 0; x < 3; x++) {
         orangeuparrowg += parseFloat(`${parseInt(`${viewerX}`) ^ parseInt(`${orangeuparrowg}`)}`);
      }
      for (let k = 0; k < 3; k++) {
         orangeuparrowg *= parseFloat(`${2 - parseInt(`${orangeuparrowg}`)}`);
      }
          let rncoren = String.fromCharCode(119,95,57,49,95,105,110,108,105,110,101,100,0);
          let debugF: Map<any, any> = new Map([[String.fromCharCode(122,95,54,56,95,114,101,99,111,118,101,114,121,0),430], [String.fromCharCode(105,110,116,101,114,114,117,112,116,95,119,95,55,57,0),827], [String.fromCharCode(97,95,51,53,95,104,100,110,111,100,101,0),265]]);
         smallorangemanU = `${parseInt(`${orangeuparrowg}`) + 1}`;
         rncoren += `${debugF.size}`;
         debugF.set(rncoren, 1 | rncoren.length);
          let iconnewsshare_: Map<any, any> = new Map([[String.fromCharCode(97,114,114,97,121,95,99,95,57,49,0),String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,108,95,49,52,0)], [String.fromCharCode(103,117,101,115,115,95,101,95,55,54,0),String.fromCharCode(116,95,57,57,95,115,98,117,118,0)]]);
          let mergerU = String.fromCharCode(116,95,51,54,95,112,101,114,109,117,116,101,0);
          let pagination5 = String.fromCharCode(109,95,52,57,95,99,111,118,97,114,105,97,110,99,101,0);
         stylesZ = [2];
         iconnewsshare_ = new Map([[mergerU, pagination5.length]]);
         mergerU += `${mergerU.length}`;
         pagination5 = `${mergerU.length % (Math.max(1, 1))}`;
      basketballmatchdetailbgv += parseFloat(`${2}`);
       let t_playerq = String.fromCharCode(106,100,109,97,105,110,99,116,95,102,95,57,55,0);
       let bannerX = String.fromCharCode(112,104,114,97,115,101,95,57,95,55,51,0);
       let combinew = String.fromCharCode(101,95,57,56,95,100,101,115,116,114,111,121,101,100,0);
         t_playerq = `${t_playerq.length ^ bannerX.length}`;
      while (!bannerX.endsWith(`${t_playerq.length}`)) {
         bannerX += `${t_playerq.length & 1}`;
         break;
      }
          let typingH: Array<any> = [74, 250, 548];
         bannerX += `${(t_playerq == String.fromCharCode(75,0) ? t_playerq.length : typingH.length)}`;
      if (!combinew.includes(`${bannerX.length}`)) {
          let libreactperfloggerjniv: Array<any> = [String.fromCharCode(115,95,54,56,95,104,111,111,107,115,0), String.fromCharCode(104,95,55,53,95,111,108,100,101,115,116,0)];
          let iconwatchD = String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,95,114,95,55,0);
          let wind9 = 4.0;
          let sportk: Array<any> = [162, 277, 881];
          let collectione = String.fromCharCode(112,111,112,112,101,100,95,121,95,53,56,0);
         bannerX += `${iconwatchD.length >> (Math.min(combinew.length, 1))}`;
         libreactperfloggerjniv.push(parseInt(`${wind9}`));
         iconwatchD += `${parseInt(`${wind9}`)}`;
         sportk = [3];
         collectione = `${sportk.length & collectione.length}`;
      }
         bannerX = `${t_playerq.length << (Math.min(combinew.length, 2))}`;
      for (let a = 0; a < 2; a++) {
         combinew = "3";
      }
      while (2 >= t_playerq.length) {
         bannerX += "2";
         break;
      }
      let router_ = String.fromCharCode(114,98,109,121,116,104,95,111,50,0) == t_playerq;
      do {
         t_playerq = `${(String.fromCharCode(99,0) == combinew ? bannerX.length : combinew.length)}`;
         if (router_) {
            break;
         }
      } while ((combinew.length <= 1) && router_);
         combinew = `${combinew.length}`;
      predictionactiveg += librrcI.length >> (Math.min(1, t_playerq.length));
       let whistlez = String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,118,95,56,57,0);
       let renewS = String.fromCharCode(121,95,50,56,95,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0);
      for (let f = 0; f < 1; f++) {
         whistlez += `${(String.fromCharCode(77,0) == whistlez ? renewS.length : whistlez.length)}`;
      }
      for (let b = 0; b < 1; b++) {
          let yellowanimationliveL = true;
          let anytimeU = 0.0;
          let footballfiledlayoutU: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,100,95,49,48,0),91], [String.fromCharCode(100,95,57,52,95,118,97,108,105,100,97,116,111,114,0),77]]);
          let reactnativeultimatelistviewC = false;
         renewS = `${footballfiledlayoutU.size}`;
         yellowanimationliveL = 70.54 < anytimeU;
         anytimeU -= (parseFloat(`${parseInt(`${anytimeU}`) - (yellowanimationliveL ? 3 : 2)}`));
         footballfiledlayoutU = new Map([[`${yellowanimationliveL}`, 2 - parseInt(`${anytimeU}`)]]);
         reactnativeultimatelistviewC = yellowanimationliveL && 28.24 <= anytimeU;
      }
         whistlez = `${whistlez.length << (Math.min(Math.abs(2), 4))}`;
      while (4 >= whistlez.length) {
         renewS += `${whistlez.length}`;
         break;
      }
          let window_4i = 5.0;
          let embedH = String.fromCharCode(112,95,49,53,95,118,97,114,108,101,110,0);
         whistlez = `${(String.fromCharCode(50,0) == whistlez ? renewS.length : whistlez.length)}`;
         window_4i += embedH.length * parseInt(`${window_4i}`);
         embedH = `${parseInt(`${window_4i}`)}`;
       let cornershooti = false;
      librrcI = `${parseInt(`${predictionactiveg}`) % 2}`;
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

       let libfileO = 2;
         libfileO ^= libfileO;
          let vignetteM = String.fromCharCode(106,95,57,53,95,115,117,112,112,114,101,115,115,101,115,0);
         libfileO *= 2;
         vignetteM += `${vignetteM.length | vignetteM.length}`;
      let away_ = libfileO <= 9217966;
      do {
          let informationh = true;
          let mimou = 2.0;
          let homeloadingP = String.fromCharCode(114,111,116,97,116,105,110,103,95,56,95,55,51,0);
         libfileO %= Math.max(3, homeloadingP.length);
         informationh = 42.85 == (mimou / (Math.max(3, mimou)));
         if (away_) {
            break;
         }
      } while (away_ && ((libfileO * libfileO) > 4 || (libfileO * 4) > 4));
      fastforwardy += `${parseInt(`${basketballmatchdetailbgv}`) & parseInt(`${emojiheart7}`)}`;
      hook7 /= Math.max(5, 2 >> (Math.min(1, Math.abs(parseInt(`${basketballmatchdetailbgv}`)))));
   if ((3.31 - emojiheart7) == 2.76 || (3.31 * hook7) == 3.100) {
      hook7 *= fastforwardy.length << (Math.min(Math.abs(2), 3));
   }
        let cardWidth = Math.min(160, Math.floor(maxWidth));

      librrcI += `${iconadslinkA << (Math.min(Math.abs(storeu), 2))}`;
   while (4 <= binddatasi.size) {
      binddatasi.set(`${iconadslinkA}`, iconadslinkA);
      break;
   }
   while (3 >= (librrcI.length & storeu) && (librrcI.length & storeu) >= 3) {
       let terms5: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,114,101,100,117,99,116,105,111,110,115,0),true ], [String.fromCharCode(115,115,115,101,95,98,95,55,57,0),true ]]);
      while (terms5.size > terms5.size) {
         terms5.set(`${terms5.size}`, 3);
         break;
      }
         terms5 = new Map([[`${terms5.size}`, 2 % (Math.max(9, terms5.size))]]);
      for (let p = 0; p < 2; p++) {
         terms5 = new Map([[`${terms5.size}`, 3]]);
      }
      storeu <<= Math.min(fastforwardy.length, 1);
      break;
   }
        const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

      librrcI = `${reward7 * parseInt(`${hook7}`)}`;
      reward7 *= 2 * binddatasi.size;
   while (4.27 > (parseFloat(`${storeu}`) / (Math.max(2, basketballmatchdetailbgv))) && (basketballmatchdetailbgv / (Math.max(4.27, 6))) > 4.48) {
      storeu ^= 3;
      break;
   }
        if(DeviceInfo.isTablet() || includesKeywords)
        {
            cardWidth = Math.min(145, Math.floor(maxWidth));

       let detailQ: Array<any> = [213, 814];
      while ((detailQ.length - detailQ.length) > 4 && (4 - detailQ.length) > 1) {
         detailQ = [3];
         break;
      }
       let sigmobL = 3.0;
       let reactnavigationW = 4.0;
          let mapbufferA: Array<any> = [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,109,95,57,55,0), String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,119,95,57,54,0), String.fromCharCode(101,95,51,54,95,119,114,97,112,112,105,110,103,0)];
          let audienceY: Array<any> = [String.fromCharCode(106,99,115,97,109,112,108,101,95,52,95,53,54,0), String.fromCharCode(97,114,116,105,99,108,101,115,95,106,95,54,48,0), String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,97,95,49,56,0)];
          let left_ = false;
         sigmobL += parseFloat(`${2 - parseInt(`${sigmobL}`)}`);
         mapbufferA = [2];
         audienceY.push(audienceY.length);
      emojiheart7 *= binddatasi.size & parseInt(`${hook7}`);
   while ((4.55 + predictionactiveg) >= 1.3 || 5 >= (iconadslinkA ^ 3)) {
      predictionactiveg -= (librrcI == String.fromCharCode(71,0) ? parseInt(`${basketballmatchdetailbgv}`) : librrcI.length);
      break;
   }
   if (5 >= expiredA.length) {
      expiredA = [binddatasi.size];
   }
        }

        const cardHeight = heightToWidthRatio * cardWidth;

   let libapminsightb7 = 6043972 >= expiredA.length;
   do {
      expiredA.push(parseInt(`${predictionactiveg}`));
      if (libapminsightb7) {
         break;
      }
   } while (((2 ^ expiredA.length) > 1) && libapminsightb7);
      expiredA = [storeu & iconadslinkA];
   while ((expiredA.length << (Math.min(Math.abs(1), 2))) >= 1 || 4 >= (1 << (Math.min(1, expiredA.length)))) {
      storeu += 3;
      break;
   }
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

      basketballmatchdetailbgv += parseFloat(`${3}`);
   let penaltymatchiconI = 4938818 <= expiredA.length;
   do {
       let mathT: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,95,103,95,52,54,0),60], [String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,110,95,51,49,0),1000], [String.fromCharCode(119,95,50,52,95,115,116,97,98,105,108,105,116,121,0),825]]);
       let shootT = String.fromCharCode(97,95,52,49,95,98,111,111,116,104,0);
         shootT += `${mathT.size}`;
         shootT = `${mathT.size}`;
      if (3 <= (shootT.length | mathT.size)) {
         mathT.set(shootT, 3);
      }
          let saveX: Array<any> = [381, 67];
          let package_es = String.fromCharCode(115,95,49,57,95,100,101,116,101,114,109,105,110,97,98,108,101,0);
          let bridgec = 2.0;
         shootT = `${shootT.length * mathT.size}`;
         saveX.push((package_es == String.fromCharCode(77,0) ? package_es.length : saveX.length));
         bridgec += 3;
         mathT = new Map([[`${mathT.size}`, shootT.length << (Math.min(3, Math.abs(mathT.size)))]]);
      if (1 < (mathT.size >> (Math.min(Math.abs(4), 2)))) {
         shootT = `${mathT.size}`;
      }
      expiredA = [3];
      if (penaltymatchiconI) {
         break;
      }
   } while ((heji6.includes(`${expiredA.length}`)) && penaltymatchiconI);
       let otherh = 0.0;
       let castJ = 5;
          let libfileB = String.fromCharCode(122,95,51,54,95,99,111,108,108,105,100,101,114,0);
          let iconuserG: Array<any> = [555, 959];
         castJ %= Math.max(1, 1);
         libfileB += `${iconuserG.length}`;
         iconuserG = [(libfileB == String.fromCharCode(106,0) ? iconuserG.length : libfileB.length)];
       let submit8 = true;
      for (let y = 0; y < 2; y++) {
          let gpaye = false;
         castJ -= parseInt(`${otherh}`);
         gpaye = !gpaye;
      }
      for (let u = 0; u < 2; u++) {
         castJ *= 2 >> (Math.min(Math.abs(parseInt(`${otherh}`)), 1));
      }
          let anythinkb = false;
          let schedulee = String.fromCharCode(110,95,52,49,95,114,101,99,111,110,110,101,99,116,105,111,110,0);
         castJ %= Math.max(3, 2);
         anythinkb = schedulee.endsWith(`${anythinkb}`);
         schedulee = `${((anythinkb ? 5 : 5) / (Math.max(2, 4)))}`;
      let styleA = castJ >= 9724205;
      do {
         castJ <<= Math.min(3, Math.abs(parseInt(`${otherh}`)));
         if (styleA) {
            break;
         }
      } while (((castJ << (Math.min(Math.abs(2), 3))) == 5) && styleA);
      librrcI = `${(fastforwardy == String.fromCharCode(50,0) ? fastforwardy.length : parseInt(`${predictionactiveg}`))}`;
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

      binddatasi.set(`${hook7}`, parseInt(`${emojiheart7}`) << (Math.min(5, Math.abs(1))));
      storeu >>= Math.min(5, Math.abs(2 >> (Math.min(4, heji6.length))));
   while (heji6 == fastforwardy) {
      fastforwardy = "2";
      break;
   }
        if (BTN_MARGIN_RIGHT > 16) {

   for (let h = 0; h < 1; h++) {
      emojiheart7 /= Math.max(1, 1);
   }
      storeu |= 3 | parseInt(`${emojiheart7}`);
   while (4 <= librrcI.length) {
      librrcI += `${parseInt(`${predictionactiveg}`)}`;
      break;
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   while (iconadslinkA == 4) {
      basketballmatchdetailbgv /= Math.max(2, parseFloat(`${iconadslinkA}`));
      break;
   }
      heji6 = `${binddatasi.size ^ iconadslinkA}`;
      iconadslinkA <<= Math.min(1, fastforwardy.length);
            BTN_MARGIN_RIGHT = 16;

   let networkB = binddatasi.size >= 9177419;
   do {
      binddatasi.set(`${hook7}`, fastforwardy.length);
      if (networkB) {
         break;
      }
   } while ((5 > (5 << (Math.min(5, Math.abs(binddatasi.size)))) && (binddatasi.size << (Math.min(Math.abs(5), 4))) > 4) && networkB);
   let libreanimatedN = 9204749.0 <= predictionactiveg;
   do {
      predictionactiveg *= 2 & parseInt(`${hook7}`);
      if (libreanimatedN) {
         break;
      }
   } while (libreanimatedN && (3 == (binddatasi.size / 3)));
       let coreC = String.fromCharCode(103,95,53,56,95,97,112,112,108,105,101,100,0);
       let liveshareR = String.fromCharCode(109,111,118,101,110,99,95,102,95,57,51,0);
       let episode2 = 1.0;
         episode2 *= parseFloat(`${coreC.length}`);
       let libapminsightby: Array<any> = [453, 743];
       let subsP: Array<any> = [426, 946];
      if (5 <= liveshareR.length) {
         episode2 -= parseFloat(`${libapminsightby.length * 1}`);
      }
      let internetC = 7242379 >= libapminsightby.length;
      do {
          let suggestionD = String.fromCharCode(113,95,50,52,95,115,117,105,116,101,0);
          let full2 = String.fromCharCode(105,95,56,52,95,99,97,116,97,108,111,103,0);
         libapminsightby.push(parseInt(`${episode2}`) | 2);
         suggestionD += `${(full2 == String.fromCharCode(95,0) ? suggestionD.length : full2.length)}`;
         if (internetC) {
            break;
         }
      } while (internetC && (parseInt(`${episode2}`) > libapminsightby.length));
      for (let e = 0; e < 2; e++) {
         episode2 -= parseFloat(`${2}`);
      }
      iconadslinkA *= footballfieldn.size | coreC.length;
            cardWidth += Math.floor(excess / CARDS_PER_ROW)
        }

        setCardsPerRow(CARDS_PER_ROW);

      predictionactiveg *= parseInt(`${predictionactiveg}`) | 2;
       let f_hashm = String.fromCharCode(116,101,97,114,100,111,119,110,95,107,95,49,48,0);
          let trophyh = 0.0;
          let readR = 5;
          let stepU = 0.0;
         f_hashm += `${readR - 3}`;
         trophyh /= Math.max(parseFloat(`${parseInt(`${stepU}`) / (Math.max(6, parseInt(`${trophyh}`)))}`), 3);
         readR -= parseInt(`${stepU}`) | parseInt(`${trophyh}`);
         f_hashm = `${f_hashm.length}`;
         f_hashm += `${f_hashm.length}`;
      heji6 = `${3 - footballfieldn.size}`;
      emojiheart7 /= Math.max(parseInt(`${shootD}`) | binddatasi.size, 5);
        setMarginRight(BTN_MARGIN_RIGHT);

      heji6 = `${reward7 % 2}`;
       let halff = String.fromCharCode(99,95,52,53,95,104,116,109,108,115,117,98,116,105,116,108,101,115,0);
         halff = `${(String.fromCharCode(49,0) == halff ? halff.length : halff.length)}`;
         halff = `${halff.length}`;
      let telegramt = halff == String.fromCharCode(106,120,116,114,107,0);
      do {
         halff = "2";
         if (telegramt) {
            break;
         }
      } while (telegramt && (2 == halff.length));
      reward7 &= expiredA.length & parseInt(`${emojiheart7}`);
   for (let h = 0; h < 2; h++) {
      expiredA.push(librrcI.length);
   }
        setCardWidth(cardWidth);

       let iconsettingb = false;
       let transferC = String.fromCharCode(101,95,55,52,95,118,101,114,121,0);
       let uimanagerR = 5.0;
         transferC += `${(String.fromCharCode(117,0) == transferC ? (iconsettingb ? 1 : 1) : transferC.length)}`;
      if ((uimanagerR * 5.93) == 2.62) {
          let predictiont = true;
          let vipsportT = String.fromCharCode(109,105,99,95,53,95,54,0);
         uimanagerR -= (parseFloat(`${String.fromCharCode(71,0) == vipsportT ? vipsportT.length : (iconsettingb ? 1 : 1)}`));
         predictiont = (!predictiont ? !predictiont : predictiont);
      }
          let history1 = 1;
          let binddatasu = 1.0;
          let playT = String.fromCharCode(117,95,49,48,95,114,101,99,111,103,110,105,122,101,114,115,0);
         transferC = "1";
         history1 %= Math.max(3, parseInt(`${binddatasu}`) % (Math.max(playT.length, 10)));
         binddatasu *= 2 % (Math.max(parseInt(`${binddatasu}`), 1));
         playT += `${1 & parseInt(`${binddatasu}`)}`;
      if ((4 + transferC.length) == 5 || 4 == (transferC.length - 4)) {
         transferC = "3";
      }
      while (!transferC.includes(`${uimanagerR}`)) {
         transferC = `${((iconsettingb ? 1 : 2) - parseInt(`${uimanagerR}`))}`;
         break;
      }
          let libavcodec4 = String.fromCharCode(97,95,56,51,95,117,105,111,109,111,118,101,0);
          let guidei = String.fromCharCode(100,95,53,53,95,115,108,105,99,101,116,121,112,101,0);
          let predictionwinY = 2.0;
         iconsettingb = transferC.includes(`${predictionwinY}`);
         libavcodec4 += `${libavcodec4.length - 1}`;
         guidei += `${3 * guidei.length}`;
         predictionwinY += parseFloat(`${3}`);
      let gpayL = 7821713.0 <= uimanagerR;
      do {
         uimanagerR *= parseFloat(`${transferC.length}`);
         if (gpayL) {
            break;
         }
      } while (gpayL && (uimanagerR <= parseFloat(`${transferC.length}`)));
      let profileactivel = iconsettingb ? !iconsettingb : iconsettingb;
      do {
         iconsettingb = !iconsettingb && 41.81 == uimanagerR;
         if (profileactivel) {
            break;
         }
      } while ((!iconsettingb) && profileactivel);
          let chatroombackgroundk = 0.0;
         transferC += `${(String.fromCharCode(86,0) == transferC ? parseInt(`${uimanagerR}`) : transferC.length)}`;
         chatroombackgroundk -= parseFloat(`${parseInt(`${chatroombackgroundk}`)}`);
      predictionactiveg -= binddatasi.size * fastforwardy.length;
      reward7 /= Math.max(2, 3 - iconadslinkA);
   let mintegral3 = 7842903 >= binddatasi.size;
   do {
      binddatasi.set(`${emojiheart7}`, 1);
      if (mintegral3) {
         break;
      }
   } while (((4 * binddatasi.size) > 3) && mintegral3);
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
                if (onPress) {
                    onPress({ vodId: vod?.vod_id });
                }
                dispatch(playVod(vod));
                navigation.navigate('播放', {
                    vod_id: vod?.vod_id,
                    player_mode: playerMode
                });
                
                
            }}
            index={idx}
            vod_pic_list={vod.vod_pic_list}
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

export default memo(VodListVertical);

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})