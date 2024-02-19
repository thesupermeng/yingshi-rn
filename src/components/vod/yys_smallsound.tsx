import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { yysSpinner, yysScrollviewBaseline } from '@type';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

interface yysIconarrowrightorangeStation {
    onConfirm: any,
    onCancel: any,
    episodes?: yysSpinner
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: yysIconarrowrightorangeStation) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = rangeSize;
    const [sortBy, setSortBy] = useState('asc');
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const [currentIndex, setCurrentIndex] = useState(Math.floor(activeEpisode / EPISODE_RANGE_SIZE));
    const showEpisodeRangeStart = useMemo(() => currentIndex * EPISODE_RANGE_SIZE, [activeEpisode, currentIndex]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );
    const displayEpisodes = useMemo(() => {
       let penaltyc: Map<any, any> = new Map([[String.fromCharCode(106,95,54,54,95,109,115,101,112,115,110,114,0),839], [String.fromCharCode(99,95,54,55,95,110,111,99,104,97,110,103,101,0),855]]);
    let langkeym: Array<any> = [String.fromCharCode(102,95,56,50,95,117,112,108,105,110,107,0), String.fromCharCode(104,105,115,116,111,114,121,95,108,95,51,56,0), String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,116,95,57,48,0)];
    let applicatione: Map<any, any> = new Map([[String.fromCharCode(103,95,49,52,95,114,101,112,101,97,116,101,100,0),String.fromCharCode(107,95,52,55,0)], [String.fromCharCode(115,117,103,103,101,115,116,101,100,95,122,95,56,54,0),String.fromCharCode(112,95,54,56,95,116,101,120,116,115,0)]]);
    let core_ = String.fromCharCode(103,95,49,55,95,114,101,99,111,118,101,114,101,100,0);
    let imagenomoredataV = 3;
    let basketballawayteamP: Map<any, any> = new Map([[String.fromCharCode(115,105,110,113,102,95,100,95,56,49,0),678], [String.fromCharCode(107,95,55,50,95,115,99,116,112,0),306], [String.fromCharCode(117,105,110,116,95,111,95,55,55,0),92]]);
    let ajaxi: Array<any> = [307, 40];
    let sound7 = true;
    let bellreminder0 = 0.0;
    let arrowrightwithtailG = false;
    let backgroundP: Array<any> = [146, 930, 898];
    let submitB = String.fromCharCode(111,95,50,53,95,117,112,108,111,97,100,0);
    let suggestionv: Array<any> = [352, 958, 898];
      bellreminder0 += parseFloat(`${core_.length + 3}`);
      basketballawayteamP = new Map([[core_, 1 << (Math.min(3, core_.length))]]);
      langkeym.push(langkeym.length);
       let checkboxn = String.fromCharCode(116,117,110,110,101,108,95,97,95,57,54,0);
       let stylee = 3;
       let viewsE = String.fromCharCode(105,95,50,55,95,99,97,116,101,103,111,114,121,0);
         stylee &= stylee;
       let predictionbuttonK = 5;
       let privilegen = 5;
      for (let j = 0; j < 1; j++) {
          let inouttargetredq = String.fromCharCode(99,104,101,99,107,95,54,95,49,54,0);
          let tailc = 3.0;
          let privatechatbgd: Array<any> = [String.fromCharCode(120,99,108,105,95,105,95,51,0), String.fromCharCode(103,95,49,95,97,115,99,0)];
          let backiconmaskx = 0.0;
         predictionbuttonK >>= Math.min(Math.abs(1 & privilegen), 5);
         inouttargetredq = `${privatechatbgd.length * 2}`;
         tailc *= parseInt(`${backiconmaskx}`);
         privatechatbgd = [inouttargetredq.length];
         backiconmaskx /= Math.max(3, privatechatbgd.length / (Math.max(2, 10)));
      }
      if (viewsE.includes(`${privilegen}`)) {
         viewsE += `${(String.fromCharCode(104,0) == checkboxn ? checkboxn.length : stylee)}`;
      }
         checkboxn = `${checkboxn.length << (Math.min(Math.abs(3), 3))}`;
      let roundC = String.fromCharCode(110,118,51,0) == viewsE;
      do {
         viewsE += `${3 | checkboxn.length}`;
         if (roundC) {
            break;
         }
      } while ((4 > (stylee * viewsE.length)) && roundC);
      while (2 <= stylee) {
         stylee /= Math.max(4, stylee);
         break;
      }
          let codegenH = 5.0;
          let middlesound0: Map<any, any> = new Map([[String.fromCharCode(109,105,110,113,95,115,95,55,49,0),true ], [String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,115,95,49,54,0),false ], [String.fromCharCode(120,95,55,48,95,97,115,99,0),true ]]);
          let positionfieldO = String.fromCharCode(109,95,52,50,95,114,101,117,112,108,111,97,100,0);
         predictionbuttonK -= privilegen ^ parseInt(`${codegenH}`);
         codegenH += parseFloat(`${2 ^ positionfieldO.length}`);
         middlesound0 = new Map([[`${middlesound0.size}`, middlesound0.size & positionfieldO.length]]);
          let carouselJ = String.fromCharCode(115,101,108,102,95,101,95,49,57,0);
          let mini7 = 5.0;
         checkboxn = `${carouselJ.length / (Math.max(1, 7))}`;
         carouselJ = "3";
         mini7 *= parseInt(`${mini7}`);
      sound7 = penaltyc.size <= langkeym.length;
      langkeym.push(penaltyc.size);
      backgroundP.push(((sound7 ? 4 : 2) * parseInt(`${bellreminder0}`)));
   while (3 <= basketballawayteamP.size) {
      basketballawayteamP = new Map([[`${basketballawayteamP.size}`, basketballawayteamP.size | 2]]);
      break;
   }
   for (let b = 0; b < 2; b++) {
      applicatione.set(`${imagenomoredataV}`, applicatione.size / 3);
   }

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

   if (!sound7) {
      basketballawayteamP = new Map([[`${langkeym.length}`, langkeym.length]]);
   }
       let libimagepipelineo = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,95,51,95,53,52,0);
       let mbbida = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,115,95,55,52,0);
         libimagepipelineo += `${libimagepipelineo.length}`;
         libimagepipelineo += `${libimagepipelineo.length + 1}`;
      while (3 == libimagepipelineo.length && 3 == mbbida.length) {
         libimagepipelineo = `${libimagepipelineo.length}`;
         break;
      }
          let playlistp = 2.0;
          let subsR: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,95,55,95,54,53,0),false ], [String.fromCharCode(97,95,51,54,95,99,111,110,110,101,99,116,105,111,110,0),true ]]);
          let libreactnativeblobL = 1;
         libimagepipelineo += `${libreactnativeblobL}`;
         playlistp *= parseFloat(`${subsR.size}`);
         subsR.set(`${playlistp}`, 1 + subsR.size);
         libreactnativeblobL *= parseInt(`${playlistp}`) * 2;
      while (libimagepipelineo == mbbida) {
          let mappinge = 3.0;
         mbbida = `${mbbida.length}`;
         mappinge *= parseFloat(`${parseInt(`${mappinge}`)}`);
         break;
      }
         mbbida = `${mbbida.length}`;
      sound7 = core_.length > 40;
      applicatione.set(core_, langkeym.length ^ 3);
   for (let l = 0; l < 3; l++) {
      applicatione.set(`${backgroundP.length}`, applicatione.size | 3);
   }
   while ((3.6 - bellreminder0) == 5.50) {
      arrowrightwithtailG = langkeym.length >= 17 || 17 >= penaltyc.size;
      break;
   }
   if (5 < penaltyc.size) {
      submitB += `${(String.fromCharCode(89,0) == core_ ? backgroundP.length : core_.length)}`;
   }
   let rootK = applicatione.size <= 6693673;
   do {
       let progressd = String.fromCharCode(97,95,53,49,95,99,111,109,112,97,114,101,0);
       let subini = 4.0;
       let temperatureZ = String.fromCharCode(100,101,113,117,101,117,101,95,53,95,49,57,0);
       let icontransferclubv: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,95,100,95,50,0),26], [String.fromCharCode(99,97,110,99,101,108,95,101,95,51,53,0),985], [String.fromCharCode(101,115,116,105,109,97,116,101,115,95,105,95,53,49,0),162]]);
         subini /= Math.max(1, parseFloat(`${icontransferclubv.size % 1}`));
         subini /= Math.max(parseFloat(`${parseInt(`${subini}`) * 2}`), 4);
         temperatureZ = `${icontransferclubv.size}`;
      for (let x = 0; x < 3; x++) {
         progressd = `${(progressd == String.fromCharCode(109,0) ? temperatureZ.length : progressd.length)}`;
      }
         progressd += `${parseInt(`${subini}`)}`;
      if ((parseInt(`${subini}`) / 3) <= 5 || 3 <= (progressd.length / (Math.max(9, parseInt(`${subini}`))))) {
          let basketballmatchdetailbgb = true;
          let whiteanimationliveU = String.fromCharCode(122,95,54,56,95,100,101,99,111,109,112,114,101,115,115,0);
          let u_positionL = 5;
          let baiduads4 = 4;
          let lefth = String.fromCharCode(112,95,52,54,95,97,114,116,105,102,97,99,116,115,0);
         subini *= parseFloat(`${2}`);
         basketballmatchdetailbgb = String.fromCharCode(90,0) == whiteanimationliveU;
         whiteanimationliveU += `${2 - lefth.length}`;
         u_positionL /= Math.max(3, ((basketballmatchdetailbgb ? 5 : 3) - whiteanimationliveU.length));
         baiduads4 /= Math.max(1, 2);
         lefth += `${3 / (Math.max(u_positionL, 1))}`;
      }
      if (3 >= (5 - parseInt(`${subini}`)) && (5 & progressd.length) >= 5) {
         progressd = `${2 ^ temperatureZ.length}`;
      }
       let footballfiledlayouts = String.fromCharCode(117,95,48,95,109,111,118,101,100,0);
       let countdownR = String.fromCharCode(101,118,97,108,117,97,116,105,111,110,95,52,95,57,0);
      while (progressd.endsWith(`${subini}`)) {
          let activityu = 0;
          let orientation4 = String.fromCharCode(117,95,56,57,95,116,97,103,103,105,110,103,0);
          let bodanM = false;
         subini -= parseFloat(`${countdownR.length}`);
         activityu += activityu;
         orientation4 += `${orientation4.length}`;
         bodanM = !orientation4.includes(`${bodanM}`);
         break;
      }
      while (4.98 < (subini - 4.51)) {
         footballfiledlayouts = "1";
         break;
      }
         footballfiledlayouts = `${countdownR.length + progressd.length}`;
      if ((temperatureZ.length % 3) < 2 || (subini * parseFloat(`${temperatureZ.length}`)) < 4.100) {
         temperatureZ += `${footballfiledlayouts.length}`;
      }
      applicatione.set(`${ajaxi.length}`, ajaxi.length % 3);
      if (rootK) {
         break;
      }
   } while (((5 - imagenomoredataV) <= 1 && 5 <= (5 - imagenomoredataV)) && rootK);
   if ((submitB.length / 5) >= 3 && 3 >= (langkeym.length / 5)) {
      submitB = `${((sound7 ? 1 : 3) + parseInt(`${bellreminder0}`))}`;
   }
        if (sortBy === 'desc') {

      penaltyc = new Map([[submitB, imagenomoredataV / (Math.max(3, 4))]]);
      applicatione = new Map([[`${penaltyc.size}`, penaltyc.size << (Math.min(Math.abs(2), 4))]]);
      imagenomoredataV ^= imagenomoredataV % 2;
   let basketballhometeamk = imagenomoredataV >= 7419559;
   do {
       let switch_3S = 2.0;
       let wifirouterf: Map<any, any> = new Map([[String.fromCharCode(115,112,105,108,108,115,105,122,101,95,114,95,56,48,0),195], [String.fromCharCode(117,95,51,48,95,100,101,99,111,109,112,114,101,115,115,111,114,0),750]]);
       let macau9 = String.fromCharCode(109,95,57,95,98,105,116,111,112,115,0);
       let fullscreenmaxJ: Array<any> = [632, 882, 971];
         macau9 = `${3 & parseInt(`${switch_3S}`)}`;
       let predictionbuttonH = true;
      if (!predictionbuttonH) {
         switch_3S += parseFloat(`${1}`);
      }
      while (3 < (1 & wifirouterf.size) || 1.91 < (switch_3S / (Math.max(2, parseFloat(`${wifirouterf.size}`))))) {
          let catagoryM: Map<any, any> = new Map([[String.fromCharCode(111,110,110,101,99,116,105,111,110,95,98,95,51,52,0),237], [String.fromCharCode(118,95,49,57,95,98,97,116,99,104,0),553]]);
          let progressp = 2.0;
         wifirouterf.set(macau9, macau9.length);
         catagoryM = new Map([[`${catagoryM.size}`, catagoryM.size << (Math.min(4, Math.abs(parseInt(`${progressp}`))))]]);
         progressp += parseFloat(`${parseInt(`${progressp}`) % (Math.max(catagoryM.size, 4))}`);
         break;
      }
      if (!fullscreenmaxJ.includes(switch_3S)) {
          let libapminsightaN = String.fromCharCode(118,95,53,95,97,99,107,117,112,0);
         switch_3S *= parseFloat(`${wifirouterf.size}`);
         libapminsightaN = `${libapminsightaN.length >> (Math.min(Math.abs(1), 4))}`;
      }
         fullscreenmaxJ = [((predictionbuttonH ? 2 : 4) << (Math.min(Math.abs(1), 5)))];
      if (wifirouterf.get(`${switch_3S}`) == null) {
         switch_3S += parseFloat(`${wifirouterf.size}`);
      }
      while (macau9.includes(`${switch_3S}`)) {
         switch_3S -= parseFloat(`${wifirouterf.size | parseInt(`${switch_3S}`)}`);
         break;
      }
          let nbatrophyD = 3.0;
         switch_3S /= Math.max(3, parseFloat(`${parseInt(`${nbatrophyD}`)}`));
         fullscreenmaxJ = [wifirouterf.size << (Math.min(3, Math.abs(parseInt(`${switch_3S}`))))];
         switch_3S -= parseFloat(`${macau9.length * parseInt(`${switch_3S}`)}`);
      while (!Array.from(wifirouterf.values()).includes(fullscreenmaxJ.length)) {
         fullscreenmaxJ.push(((predictionbuttonH ? 2 : 1) * 3));
         break;
      }
      imagenomoredataV %= Math.max(2, backgroundP.length);
      if (basketballhometeamk) {
         break;
      }
   } while (((imagenomoredataV << (Math.min(Math.abs(basketballawayteamP.size), 3))) == 3 || (3 << (Math.min(1, Math.abs(basketballawayteamP.size)))) == 2) && basketballhometeamk);
      imagenomoredataV >>= Math.min(Math.abs(langkeym.length >> (Math.min(5, Math.abs(imagenomoredataV)))), 2);
   while ((bellreminder0 / 2.90) >= 1.14) {
      ajaxi.push(1 >> (Math.min(1, Math.abs(imagenomoredataV))));
      break;
   }
      sound7 = applicatione.get(`${arrowrightwithtailG}`) == null;
       let kuaishouG = false;
       let sort7 = 4.0;
         kuaishouG = !kuaishouG;
      while (2.0 > sort7 && (2.0 / (Math.max(1, sort7))) > 4.70) {
         sort7 -= 3 + parseInt(`${sort7}`);
         break;
      }
      if (sort7 >= 1.41) {
          let popupY = String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,99,95,51,55,0);
          let iconsaveimageq = String.fromCharCode(118,109,104,100,95,120,95,55,56,0);
          let libreactperfloggerjniH = 3;
          let recommendationh = String.fromCharCode(99,95,54,48,95,114,101,105,110,100,101,120,0);
         kuaishouG = iconsaveimageq.length == 22;
         popupY = `${libreactperfloggerjniH - 3}`;
         iconsaveimageq = `${recommendationh.length}`;
         libreactperfloggerjniH /= Math.max(2, popupY.length | 3);
         recommendationh = `${popupY.length << (Math.min(Math.abs(3), 3))}`;
      }
         kuaishouG = !kuaishouG;
          let profileinactive2: Array<any> = [172, 473, 391];
         sort7 += (parseInt(`${sort7}`) / (Math.max(9, (kuaishouG ? 4 : 1))));
         profileinactive2 = [profileinactive2.length];
      if (kuaishouG) {
         sort7 /= Math.max(parseInt(`${sort7}`) % 1, 4);
      }
      core_ += "2";
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let middlebrightnessj = String.fromCharCode(115,99,114,97,112,101,95,108,95,49,48,48,0);
    let iconpipexpanda = String.fromCharCode(116,104,114,101,97,100,115,95,113,95,52,51,0);
    let entry2 = 4.0;
    let iconrightorangeI = 4;
    let thailanda = true;
    let tailb: Map<any, any> = new Map([[String.fromCharCode(101,95,56,55,95,119,119,119,0),816], [String.fromCharCode(97,99,99,101,112,116,97,98,108,101,95,107,95,54,48,0),824]]);
    let humidityU = 2.0;
    let binddatasp = 3.0;
    let thailandw = 3;
    let predictionbanner0 = 2;
   for (let x = 0; x < 3; x++) {
      iconpipexpanda += `${((thailanda ? 2 : 5) & iconpipexpanda.length)}`;
   }
   while ((5 ^ tailb.size) == 1) {
       let searchr = String.fromCharCode(120,110,97,115,109,95,108,95,52,57,0);
       let predictionactivef = 5;
       let reddownarrowj = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,104,95,54,53,0);
       let reactI = String.fromCharCode(113,95,52,56,95,112,114,101,102,101,114,115,0);
       let dplusV = true;
      let eactX = reactI == String.fromCharCode(98,56,121,0);
      do {
         reactI += `${predictionactivef}`;
         if (eactX) {
            break;
         }
      } while (eactX && (reactI.length <= 5));
         reactI += `${reddownarrowj.length * 1}`;
         reactI += `${predictionactivef ^ searchr.length}`;
         reactI += `${(String.fromCharCode(85,0) == reactI ? (dplusV ? 4 : 2) : reactI.length)}`;
         reddownarrowj += `${predictionactivef}`;
         predictionactivef >>= Math.min(5, Math.abs(((dplusV ? 2 : 4))));
      for (let r = 0; r < 2; r++) {
         reactI = "3";
      }
      while (!dplusV) {
          let selectM = false;
          let iconclosea = String.fromCharCode(107,101,114,110,101,114,95,57,95,52,52,0);
          let matchactiveW = 0.0;
          let textlayoutmanagert = 5;
          let skip0 = 5.0;
         reactI += `${((selectM ? 1 : 4) << (Math.min(4, Math.abs(1))))}`;
         selectM = 61.30 >= skip0 && 43 >= textlayoutmanagert;
         iconclosea += "2";
         matchactiveW *= parseFloat(`${parseInt(`${skip0}`)}`);
         textlayoutmanagert -= parseInt(`${skip0}`);
         break;
      }
      while (dplusV && 5 <= searchr.length) {
         searchr = `${reactI.length ^ reddownarrowj.length}`;
         break;
      }
       let c_positionF = 2;
      let backgroundw = 9786600 <= searchr.length;
      do {
         searchr += `${predictionactivef}`;
         if (backgroundw) {
            break;
         }
      } while ((searchr.length < 4) && backgroundw);
         c_positionF *= reactI.length;
      let yinit_6R = c_positionF <= 9872446;
      do {
          let configurej = false;
          let iconwatchnoww: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,95,109,111,110,105,116,111,114,105,110,103,0),153], [String.fromCharCode(117,95,54,51,95,110,111,116,103,101,116,0),501]]);
          let smallorangeman2 = 2.0;
         c_positionF += reddownarrowj.length;
         configurej = iconwatchnoww.size > 70 || smallorangeman2 > 30.13;
         iconwatchnoww = new Map([[`${iconwatchnoww.size}`, parseInt(`${smallorangeman2}`) + 3]]);
         if (yinit_6R) {
            break;
         }
      } while (yinit_6R && (!dplusV && (c_positionF - 1) >= 5));
         searchr += `${2 / (Math.max(8, c_positionF))}`;
         dplusV = reactI.length == 82;
      entry2 += parseFloat(`${1 << (Math.min(4, reddownarrowj.length))}`);
      break;
   }
      thailanda = parseFloat(`${thailandw}`) >= entry2;
   if (3 >= (thailandw & 3)) {
      thailandw &= tailb.size;
   }
   if ((1 << (Math.min(1, Math.abs(iconrightorangeI)))) > 3) {
       let tumbnailY = String.fromCharCode(116,101,97,114,95,121,95,54,57,0);
       let downloadj = String.fromCharCode(118,115,99,97,108,101,95,114,95,57,52,0);
       let orangeH = String.fromCharCode(118,95,56,55,95,109,107,118,109,117,120,101,114,117,116,105,108,0);
          let playlistI: Map<any, any> = new Map([[String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,51,95,56,56,0),String.fromCharCode(121,95,57,51,95,116,105,109,101,115,0)], [String.fromCharCode(115,95,52,57,95,97,116,116,114,97,99,116,0),String.fromCharCode(97,99,116,105,111,110,115,95,105,95,50,50,0)], [String.fromCharCode(116,114,97,110,115,112,111,110,101,100,95,106,95,55,54,0),String.fromCharCode(107,95,53,57,95,109,101,115,115,97,103,101,0)]]);
          let bodan6: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,114,95,56,95,50,54,0),String.fromCharCode(122,95,53,53,95,115,101,116,116,97,98,108,101,0)], [String.fromCharCode(117,116,105,108,115,95,99,95,50,49,0),String.fromCharCode(102,102,109,112,101,103,95,104,95,49,51,0)], [String.fromCharCode(104,95,49,53,95,112,114,101,118,105,101,119,115,0),String.fromCharCode(120,105,112,104,95,55,95,56,56,0)]]);
         tumbnailY = `${3 & tumbnailY.length}`;
         playlistI.set(`${bodan6.size}`, bodan6.size % 1);
      while (downloadj.length <= 3 || orangeH != String.fromCharCode(52,0)) {
         downloadj += `${orangeH.length | downloadj.length}`;
         break;
      }
         tumbnailY += `${(orangeH == String.fromCharCode(77,0) ? orangeH.length : downloadj.length)}`;
         tumbnailY = `${(tumbnailY == String.fromCharCode(113,0) ? tumbnailY.length : orangeH.length)}`;
      if (orangeH.length <= downloadj.length) {
         orangeH = `${tumbnailY.length}`;
      }
          let wifirouterw: Array<any> = [478, 626];
          let modalv = true;
         orangeH += `${downloadj.length * wifirouterw.length}`;
         wifirouterw = [((modalv ? 1 : 2))];
         tumbnailY = `${2 | tumbnailY.length}`;
       let gifgoalbgN: Map<any, any> = new Map([[String.fromCharCode(108,104,97,115,104,95,98,95,49,49,0),false ], [String.fromCharCode(121,95,49,52,95,98,101,97,116,105,110,103,0),true ]]);
       let h_unlocki: Map<any, any> = new Map([[String.fromCharCode(118,112,100,120,95,54,95,57,56,0),true ], [String.fromCharCode(122,95,54,50,95,104,112,101,108,0),true ]]);
         tumbnailY += `${orangeH.length % 1}`;
      iconrightorangeI |= parseInt(`${entry2}`) + 3;
   }
      thailanda = 52 < tailb.size;
   let rewindg = iconrightorangeI <= 7380576;
   do {
      iconrightorangeI <<= Math.min(5, Math.abs(iconrightorangeI));
      if (rewindg) {
         break;
      }
   } while (rewindg && (Array.from(tailb.keys()).includes(`${iconrightorangeI}`)));
       let windb = String.fromCharCode(97,116,116,114,97,99,116,105,110,103,95,120,95,51,56,0);
       let actionse = false;
       let themeP = String.fromCharCode(99,104,112,108,95,48,95,52,54,0);
      for (let n = 0; n < 1; n++) {
          let penaltymatchiconi = true;
          let incident0 = true;
          let chatk = String.fromCharCode(99,101,114,116,112,111,108,95,55,95,56,54,0);
          let predictionwinq = true;
          let navigationz = 4;
         actionse = (incident0 ? actionse : incident0);
         penaltymatchiconi = chatk.startsWith(`${penaltymatchiconi}`);
         chatk += `${2 >> (Math.min(Math.abs(navigationz), 2))}`;
         predictionwinq = !chatk.includes(`${penaltymatchiconi}`);
         navigationz -= (navigationz ^ (predictionwinq ? 4 : 1));
      }
         actionse = ((themeP.length >> (Math.min(3, Math.abs((actionse ? themeP.length : 55))))) == 55);
      if (5 <= windb.length && !actionse) {
         actionse = ((windb.length / (Math.max(5, (actionse ? windb.length : 54)))) == 54);
      }
         actionse = themeP.length >= 81;
      while (actionse && 3 == windb.length) {
         actionse = themeP.length <= 16;
         break;
      }
          let editW = String.fromCharCode(118,95,49,49,95,109,97,105,110,112,97,103,101,0);
          let heartJ = String.fromCharCode(109,95,53,51,95,99,111,110,110,101,99,116,105,111,110,115,0);
          let floating3 = true;
         windb += `${(String.fromCharCode(80,0) == heartJ ? (actionse ? 1 : 3) : heartJ.length)}`;
         editW += `${((floating3 ? 3 : 2))}`;
         floating3 = floating3 || editW.length <= 23;
      let halft = actionse ? !actionse : actionse;
      do {
          let mbsplashi: Array<any> = [676, 934, 535];
          let binga: Array<any> = [String.fromCharCode(100,95,51,95,117,112,100,97,116,101,114,0), String.fromCharCode(104,95,57,52,95,110,111,110,98,108,111,99,107,0), String.fromCharCode(104,97,115,104,101,115,95,119,95,52,51,0)];
          let reducerI = String.fromCharCode(112,95,55,50,95,115,97,109,112,108,101,114,0);
         actionse = binga.length == 20;
         mbsplashi = [1 - mbsplashi.length];
         binga = [(String.fromCharCode(113,0) == reducerI ? mbsplashi.length : reducerI.length)];
         if (halft) {
            break;
         }
      } while ((themeP.length >= 1) && halft);
      while (windb.startsWith(`${actionse}`)) {
          let renderk = 4.0;
          let lists: Array<any> = [796, 992];
          let projectc = 1.0;
          let episodesB = String.fromCharCode(117,110,109,97,116,99,104,101,100,95,57,95,49,50,0);
          let penaltygoalT = String.fromCharCode(110,111,109,105,110,97,108,95,104,95,51,53,0);
         actionse = 28.57 <= projectc;
         renderk /= Math.max(1, 5);
         lists = [lists.length];
         projectc /= Math.max(2, parseFloat(`${1 << (Math.min(1, episodesB.length))}`));
         episodesB = "3";
         penaltygoalT = `${lists.length >> (Math.min(Math.abs(1), 3))}`;
         break;
      }
      while (!actionse) {
          let zhuboL = String.fromCharCode(106,95,57,48,95,115,116,100,111,117,116,0);
          let iconuserh = String.fromCharCode(109,95,53,51,95,109,98,114,116,104,114,101,97,100,0);
         actionse = !windb.includes(`${actionse}`);
         zhuboL = "3";
         iconuserh = `${2 & zhuboL.length}`;
         break;
      }
      entry2 /= Math.max(parseFloat(`${parseInt(`${binddatasp}`)}`), 1);

        if (sortBy === 'asc') {

   if (parseFloat(`${iconpipexpanda.length}`) <= entry2) {
      entry2 += parseFloat(`${middlebrightnessj.length / (Math.max(3, 3))}`);
   }
   for (let r = 0; r < 1; r++) {
      predictionbanner0 &= middlebrightnessj.length % 2;
   }
   for (let j = 0; j < 1; j++) {
      iconrightorangeI -= (String.fromCharCode(97,0) == iconpipexpanda ? iconpipexpanda.length : thailandw);
   }
   while (thailanda && 4 <= middlebrightnessj.length) {
      thailanda = (middlebrightnessj.length << (Math.min(2, Math.abs(thailandw)))) >= 38;
      break;
   }
   if ((5 >> (Math.min(5, Math.abs(predictionbanner0)))) < 5) {
       let placeholderO: Map<any, any> = new Map([[String.fromCharCode(116,95,50,50,95,109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,0),String.fromCharCode(100,95,54,57,95,99,111,118,101,114,115,0)], [String.fromCharCode(111,98,118,105,111,117,115,108,121,95,111,95,51,48,0),String.fromCharCode(115,119,101,101,112,95,114,95,49,0)], [String.fromCharCode(117,110,101,120,112,101,99,116,101,100,95,106,95,53,49,0),String.fromCharCode(109,98,115,116,114,105,110,103,95,108,95,56,50,0)]]);
       let areas = true;
       let chatQ = false;
         areas = !areas;
         areas = ((placeholderO.size + (!areas ? 73 : placeholderO.size)) <= 73);
      entry2 /= Math.max(parseFloat(`${1}`), 1);
   }
   if ((tailb.size % 3) > 1 && 5 > (predictionbanner0 % 3)) {
      tailb = new Map([[`${predictionbanner0}`, 1 << (Math.min(Math.abs(parseInt(`${binddatasp}`)), 2))]]);
   }
   while (3 <= (3 + iconrightorangeI) && !thailanda) {
       let iconnewsshareE = String.fromCharCode(104,114,115,115,95,109,95,55,54,0);
       let show9: Map<any, any> = new Map([[String.fromCharCode(121,95,50,50,95,97,114,112,101,100,0),String.fromCharCode(115,105,103,102,105,103,95,101,95,56,53,0)], [String.fromCharCode(112,97,116,104,115,95,52,95,54,0),String.fromCharCode(112,97,105,110,116,115,95,121,95,51,49,0)], [String.fromCharCode(112,95,56,48,95,111,112,116,105,109,97,108,0),String.fromCharCode(100,95,49,48,95,115,107,101,121,108,105,115,116,0)]]);
      if (iconnewsshareE.length >= show9.size) {
          let encryptorz: Map<any, any> = new Map([[String.fromCharCode(111,99,107,105,110,103,95,120,95,52,57,0),342], [String.fromCharCode(100,105,114,101,99,116,120,95,111,95,56,54,0),934]]);
         iconnewsshareE += `${iconnewsshareE.length}`;
         encryptorz = new Map([[`${encryptorz.size}`, encryptorz.size]]);
      }
      let otherZ = iconnewsshareE.length <= 5377452;
      do {
         iconnewsshareE = `${3 ^ iconnewsshareE.length}`;
         if (otherZ) {
            break;
         }
      } while (((iconnewsshareE.length - 4) >= 4) && otherZ);
          let awayiconx = String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,102,95,50,48,0);
          let volumeE = String.fromCharCode(112,108,116,101,95,101,95,52,50,0);
         iconnewsshareE += "2";
         awayiconx = `${volumeE.length * awayiconx.length}`;
         volumeE = `${1 ^ awayiconx.length}`;
          let type_eyi = 5;
          let arrowrightwithtailc = 1.0;
         show9.set(`${type_eyi}`, show9.size % 3);
         type_eyi /= Math.max(parseInt(`${arrowrightwithtailc}`) >> (Math.min(2, Math.abs(1))), 4);
         arrowrightwithtailc -= parseFloat(`${parseInt(`${arrowrightwithtailc}`)}`);
      while ((show9.size << (Math.min(Math.abs(1), 2))) > 2) {
         iconnewsshareE = `${iconnewsshareE.length}`;
         break;
      }
         show9 = new Map([[`${show9.size}`, iconnewsshareE.length % (Math.max(3, 7))]]);
      thailanda = 36 > thailandw;
      break;
   }
      binddatasp /= Math.max(3, parseFloat(`${2}`));
            setSortBy('desc');
        } else {

   for (let x = 0; x < 3; x++) {
       let stationsV = String.fromCharCode(111,95,51,95,115,104,97,114,101,100,107,101,121,0);
       let carousela = String.fromCharCode(102,95,50,48,95,115,117,112,112,114,101,115,115,101,115,0);
       let penaltyshootnogoal8 = String.fromCharCode(105,110,115,101,114,116,101,114,95,101,95,53,57,0);
      let styleC = String.fromCharCode(57,112,111,107,0) == carousela;
      do {
         carousela += `${(String.fromCharCode(88,0) == stationsV ? stationsV.length : penaltyshootnogoal8.length)}`;
         if (styleC) {
            break;
         }
      } while ((carousela.length < 4) && styleC);
         penaltyshootnogoal8 += `${penaltyshootnogoal8.length - stationsV.length}`;
      while (carousela == String.fromCharCode(89,0)) {
         stationsV = `${carousela.length}`;
         break;
      }
         penaltyshootnogoal8 += `${penaltyshootnogoal8.length}`;
      if (penaltyshootnogoal8.length >= 1 || 1 >= carousela.length) {
         penaltyshootnogoal8 += "1";
      }
          let sendH = String.fromCharCode(114,117,110,116,105,109,101,95,49,95,49,48,0);
          let leaguedetailsbgK: Map<any, any> = new Map([[String.fromCharCode(119,95,50,51,95,99,97,112,97,98,105,108,105,116,121,0),58], [String.fromCharCode(98,108,111,98,115,105,122,101,95,97,95,56,50,0),729], [String.fromCharCode(112,114,111,104,105,98,105,116,95,98,95,56,53,0),874]]);
         penaltyshootnogoal8 = `${(String.fromCharCode(104,0) == stationsV ? leaguedetailsbgK.size : stationsV.length)}`;
         sendH += `${sendH.length | sendH.length}`;
         leaguedetailsbgK.set(sendH, 3 & sendH.length);
         penaltyshootnogoal8 = `${penaltyshootnogoal8.length / (Math.max(2, carousela.length))}`;
      for (let d = 0; d < 1; d++) {
         carousela += "2";
      }
      for (let a = 0; a < 1; a++) {
          let defaultfootballbgG = 0.0;
          let homeinactiveI = false;
          let encryptorG = String.fromCharCode(119,95,51,49,95,99,111,108,108,97,112,115,105,110,103,0);
         carousela = `${((homeinactiveI ? 3 : 1) & penaltyshootnogoal8.length)}`;
         defaultfootballbgG *= parseFloat(`${1 % (Math.max(3, encryptorG.length))}`);
         homeinactiveI = encryptorG.length > 47;
      }
      iconrightorangeI -= (3 * (thailanda ? 3 : 5));
   }
   if (2 < (thailandw & 5) && 3 < (5 & thailandw)) {
      iconrightorangeI >>= Math.min(Math.abs(2), 1);
   }
       let starq = String.fromCharCode(121,95,55,48,95,109,101,109,106,114,110,108,0);
       let inviteU: Array<any> = [970, 884, 744];
       let videojsg = String.fromCharCode(106,95,54,51,95,97,108,108,101,116,0);
      for (let i = 0; i < 2; i++) {
          let descb = 3.0;
          let dicelogox = String.fromCharCode(119,97,105,116,101,114,95,51,95,57,49,0);
          let gradlew6 = String.fromCharCode(116,114,120,116,95,55,95,52,54,0);
         inviteU.push(parseInt(`${descb}`));
         descb *= (gradlew6 == String.fromCharCode(74,0) ? gradlew6.length : dicelogox.length);
         dicelogox += `${gradlew6.length}`;
      }
         videojsg = `${inviteU.length}`;
      while (inviteU.length <= 3) {
          let eventS = 4.0;
          let statsI = String.fromCharCode(101,95,57,95,99,111,110,102,108,105,99,116,115,0);
         inviteU.push(2 ^ starq.length);
         eventS /= Math.max(3, statsI.length + 3);
         statsI += `${statsI.length / (Math.max(2, 7))}`;
         break;
      }
      while ((starq.length * inviteU.length) <= 4 && (4 * inviteU.length) <= 1) {
         starq = `${2 ^ inviteU.length}`;
         break;
      }
       let changee = true;
       let gesture_ = false;
       let gemfileJ: Map<any, any> = new Map([[String.fromCharCode(116,114,105,103,103,101,114,101,100,95,114,95,56,48,0),400], [String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,95,100,95,56,50,0),772], [String.fromCharCode(119,95,49,95,99,105,118,105,108,0),888]]);
      while (!starq.includes(`${inviteU.length}`)) {
         starq = `${2 & starq.length}`;
         break;
      }
         starq += `${inviteU.length * 2}`;
         gesture_ = (inviteU.length | starq.length) == 35;
      iconpipexpanda = "1";
       let imagemanagerS = 5.0;
       let leagueJ = 3.0;
      for (let m = 0; m < 2; m++) {
         imagemanagerS += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${imagemanagerS}`)), 1))}`);
      }
         imagemanagerS += parseFloat(`${parseInt(`${imagemanagerS}`) * parseInt(`${leagueJ}`)}`);
       let libglogm: Array<any> = [230, 98, 543];
       let libglogr: Array<any> = [955, 659];
         imagemanagerS -= parseFloat(`${libglogr.length + libglogm.length}`);
       let unselectedj = false;
       let configuret = true;
          let sharemodalY = 2.0;
          let dycreatorO = 1;
          let umengh: Array<any> = [793, 121, 524];
         imagemanagerS -= parseFloat(`${umengh.length & 3}`);
         sharemodalY += parseFloat(`${parseInt(`${sharemodalY}`)}`);
         dycreatorO <<= Math.min(5, Math.abs(dycreatorO + 2));
         umengh = [dycreatorO];
      middlebrightnessj = "2";
      binddatasp -= parseFloat(`${predictionbanner0 << (Math.min(2, Math.abs(1)))}`);
       let customD = String.fromCharCode(116,104,101,111,114,97,95,104,95,51,56,0);
       let shareblackr: Array<any> = [503, 513, 491];
         shareblackr.push(customD.length);
      for (let j = 0; j < 2; j++) {
         shareblackr = [shareblackr.length];
      }
      let privacyr = shareblackr.length <= 6342697;
      do {
         shareblackr = [3 << (Math.min(2, customD.length))];
         if (privacyr) {
            break;
         }
      } while ((3 < (3 & shareblackr.length)) && privacyr);
      if (1 == customD.length) {
          let whitetick9 = 5;
          let register_b8 = true;
          let holderV = 2.0;
          let libnmsB = String.fromCharCode(102,105,116,116,105,110,103,95,100,95,53,54,0);
         customD = `${((register_b8 ? 2 : 3) - 3)}`;
         whitetick9 &= (String.fromCharCode(54,0) == libnmsB ? libnmsB.length : whitetick9);
         register_b8 = whitetick9 == 78;
         holderV += (parseFloat(`${String.fromCharCode(111,0) == libnmsB ? parseInt(`${holderV}`) : libnmsB.length}`));
      }
          let basketballhometeamO: Array<any> = [String.fromCharCode(103,95,50,56,95,115,104,101,101,114,118,105,100,101,111,100,97,116,97,0), String.fromCharCode(114,101,118,101,114,116,95,109,95,51,56,0), String.fromCharCode(117,95,57,55,95,100,101,102,97,117,108,0)];
          let telegramn = String.fromCharCode(106,112,101,103,108,105,98,95,113,95,54,57,0);
          let middlebrightnesss = 4.0;
         shareblackr = [telegramn.length];
         basketballhometeamO.push(parseInt(`${middlebrightnesss}`));
         telegramn += `${basketballhometeamO.length}`;
         middlebrightnesss += basketballhometeamO.length | parseInt(`${middlebrightnesss}`);
         customD = `${customD.length + shareblackr.length}`;
      iconpipexpanda += `${1 - thailandw}`;
   while (thailanda) {
       let mbnativeadvancedY = 4.0;
       let small0 = String.fromCharCode(108,95,57,95,117,110,114,101,109,111,118,97,98,108,101,0);
         mbnativeadvancedY /= Math.max(1, small0.length * parseInt(`${mbnativeadvancedY}`));
      while (5.34 <= mbnativeadvancedY) {
         mbnativeadvancedY -= parseInt(`${mbnativeadvancedY}`);
         break;
      }
         small0 += `${parseInt(`${mbnativeadvancedY}`)}`;
       let icontransferclub6: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,100,101,108,101,116,101,100,0),177], [String.fromCharCode(111,95,49,53,95,118,105,100,101,111,114,101,110,100,101,114,101,114,0),546], [String.fromCharCode(116,111,108,101,114,97,110,99,101,95,110,95,52,48,0),239]]);
         mbnativeadvancedY += 2;
      while (1 < (1 * small0.length)) {
          let eventw = 5;
          let footballfield_ = 5.0;
         mbnativeadvancedY *= small0.length >> (Math.min(3, Math.abs(icontransferclub6.size)));
         eventw *= parseInt(`${footballfield_}`);
         footballfield_ /= Math.max(parseFloat(`${eventw & 1}`), 5);
         break;
      }
      thailanda = middlebrightnessj == String.fromCharCode(79,0) || 98.64 > humidityU;
      break;
   }
   while ((thailandw - 2) < 2) {
       let libsentryb = String.fromCharCode(102,95,51,49,95,108,105,109,105,116,0);
          let defaultroombg1: Map<any, any> = new Map([[String.fromCharCode(105,95,51,52,95,112,111,112,112,101,100,0),881], [String.fromCharCode(120,95,56,48,95,112,108,116,101,0),41]]);
         libsentryb = `${libsentryb.length}`;
         defaultroombg1.set(`${defaultroombg1.size}`, defaultroombg1.size);
          let p_imageZ = String.fromCharCode(117,105,110,116,98,101,95,112,95,50,54,0);
          let modityT = String.fromCharCode(100,108,115,121,109,95,120,95,49,50,0);
         libsentryb += `${modityT.length}`;
         p_imageZ = `${p_imageZ.length}`;
         modityT += "3";
         libsentryb = `${libsentryb.length * 3}`;
      thailandw &= iconrightorangeI;
      break;
   }
            setSortBy('asc');
        }
    }

    return (
        <View
            style={{
                ...styles.container,
                paddingLeft: spacing.sideOffset,
                paddingRight: spacing.sideOffset,
                gap: spacing.m
            }}
        >
            <View style={styles.episodeList}>
                <FlatList
                    horizontal
                    data={ranges}
                    renderItem={({ item, index }: { item: string, index: number }) => {
                        return <TouchableOpacity style={styles.btn} onPress={() => setCurrentIndex(index)}>
                            <Text
                                style={{
                                    textAlign: 'center', ...textVariants.header,
                                    color: index === currentIndex ? colors.text : colors.muted,
                                    fontSize: index === currentIndex ? 18 : 15
                                }}>
                                {`${item}集`}
                            </Text>
                        </TouchableOpacity>
                    }}
                />
                {/* <TouchableOpacity style={styles.sortBtn} onPress={sort}>
                    <View style={{ paddingTop: 4 }}>
                        {
                            sortBy === 'asc'
                                ? <SortAscIcon />
                                : <SortDescIcon />
                        }
                    </View>
                    <Text
                        style={{
                            textAlign: 'center', ...textVariants.header,
                            color: colors.muted,
                            fontSize: 15
                        }}>
                        顺序
                    </Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView contentContainerStyle={styles.episodeList}>
                {
                    displayEpisodes?.map((ep, idx) =>
                        <TouchableOpacity key={`expand-${idx}`} onPress={() => {
                            onConfirm(ep.nid);
                            onCancel();
                        }} style={{ paddingRight: spacing.s }}>
                            <View style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                minWidth: 70,
                                marginRight: 'auto',
                                marginBottom: spacing.s,
                                borderRadius: 8
                            }} >
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: 13,
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        color: ep.nid === activeEpisode ? colors.selected : colors.muted,
                                    }}>
                                    {`${ep.name}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    );
};

export default memo(VodEpisodeSelection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    sortBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});