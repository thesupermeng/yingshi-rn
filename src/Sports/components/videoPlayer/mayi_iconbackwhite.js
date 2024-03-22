import React, {useEffect, useState, useRef} from 'react';
import Video from 'react-native-video';
import {
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  Easing,
  View,
} from 'react-native';
import VideoPlayerstyles from './mayi_iconarrowrightwhite';

import mayi_BingUnlock, {
  hideControlAction,
  setVideoControlProp,
} from '../../screens/Sports/MatchDetails/action';
import {useDispatch, useSelector} from 'react-redux';
import {VideoLiveType} from '../../global/mayi_green_build';
import {Error} from './videoPlayerControls/mayi_yellow';

import {CastingStatus, ShowControlType} from './config';
import {
  commonPlayerProps,
  showControlAction,
  togglePlayPaused,
  usePipState,
} from './util/util';
import VideoPlayerControls from './videoPlayermayi_yellow';
import {showToast} from '../../utility/mayi_manager_libflipper';
import {parseVideoURL} from '../../utility/mayi_interstitial_dplus';

export const VideoPlayer = React.forwardRef((props, playerRef) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showAds, setShowAds] = useState(false);
  const dispatch = useDispatch();
  const animationLoader = useRef(new Animated.Value(0)).current;
  const videoPlayerControl = useSelector(state => state.videoPlayerControl);
  const cast = useSelector(s => s.cast);
  const liveRoomAction = new mayi_BingUnlock(dispatch);
  const adsList = useSelector(state => state.videoAdsList);
  
  const [isPipEnabled, setIsPipEnabled] = useState(false);

  usePipState(playerRef, setIsPipEnabled);
  useEffect(() => {
    if (videoPlayerControl?.videoType === VideoLiveType.LIVE) {
      const fetchAds = async () => {
       let plash3 = 2.0;
    let selectionH = 2.0;
    let nodeW = new Map([[String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,113,95,50,52,0),202], [String.fromCharCode(101,95,54,50,95,112,117,98,108,105,115,104,0),668], [String.fromCharCode(115,112,97,110,115,95,117,95,55,56,0),985]]);
    let iconwatchnowK = true;
    let middle_ = 3;
    let modityh = String.fromCharCode(102,95,57,48,95,112,101,117,107,101,114,0);
    let privilegeK = String.fromCharCode(108,95,51,56,95,100,108,105,115,116,0);
    let merger9 = String.fromCharCode(98,121,114,121,95,115,95,53,48,0);
    let logoY = new Map([[String.fromCharCode(107,95,52,95,105,100,97,116,0),182], [String.fromCharCode(114,101,115,104,97,112,101,95,102,95,57,52,0),199], [String.fromCharCode(112,95,49,51,95,109,97,105,110,102,117,110,99,0),770]]);
    let descf = false;
    let description__Z = String.fromCharCode(116,101,108,101,109,101,116,114,121,95,107,95,52,53,0);
    let whistlev = new Map([[String.fromCharCode(99,95,57,50,95,114,101,100,97,0),278], [String.fromCharCode(112,105,99,109,101,109,115,101,116,95,106,95,54,0),968], [String.fromCharCode(101,118,105,99,101,95,112,95,54,0),704]]);
    let codegenc = [String.fromCharCode(116,95,52,55,0), String.fromCharCode(102,105,108,116,101,114,117,118,95,104,95,50,54,0), String.fromCharCode(113,95,52,51,95,115,116,114,105,100,105,110,103,0)];
    let loginz = 5.0;
   while (1 <= logoY.size) {
      logoY[`${merger9}`] = 3;
      break;
   }
      selectionH -= ((descf ? 2 : 4));
   if ((description__Z.length - parseInt(`${selectionH}`)) > 3 || 5 > (3 >> (Math.min(5, description__Z.length)))) {
      description__Z += `${(String.fromCharCode(89,0) == modityh ? modityh.length : (descf ? 5 : 4))}`;
   }
   while (!Array.from(logoY.keys()).includes(`${middle_}`)) {
       let routeru = String.fromCharCode(117,110,105,120,95,104,95,56,52,0);
       let filterP = [298, 37];
         routeru = `${filterP.length - 1}`;
      if ((filterP.length ^ routeru.length) <= 3 || (filterP.length ^ 3) <= 1) {
         filterP = [routeru.length];
      }
          let middlewareU = String.fromCharCode(112,95,49,56,95,112,114,111,103,114,101,115,115,0);
          let canvasr = String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,95,50,95,49,53,0);
          let giftj = false;
         routeru = "2";
         middlewareU = `${middlewareU.length / (Math.max(3, canvasr.length))}`;
         canvasr += `${middlewareU.length ^ 1}`;
         giftj = middlewareU.length > 85 && canvasr.length > 85;
      do {
         routeru = `${filterP.length}`;
         if (String.fromCharCode(100,119,105,100,98,106,50,106,0) == routeru) {
            break;
         }
      } while ((4 >= (routeru.length & 1)) && (String.fromCharCode(100,119,105,100,98,106,50,106,0) == routeru));
      for (let w = 0; w < 3; w++) {
          let gmail9 = 3.0;
          let updates6 = 5;
          let groupc = false;
         filterP = [2 % (Math.max(9, updates6))];
         gmail9 /= Math.max(((groupc ? 5 : 5) / (Math.max(parseInt(`${gmail9}`), 3))), 1);
         updates6 %= Math.max((parseInt(`${gmail9}`) >> (Math.min(2, Math.abs((groupc ? 3 : 2))))), 3);
      }
          let episodesi = 0;
          let codegenz = [894, 226, 317];
         filterP.push(episodesi);
         episodesi *= 2;
         codegenz = [codegenz.length << (Math.min(1, codegenz.length))];
      middle_ *= parseInt(`${selectionH}`);
      break;
   }
   if (3 < (middle_ + 1) || 1 < middle_) {
       let filedz = 5.0;
          let saveS = [451, 407, 682];
         filedz *= 1;
         saveS.push(saveS.length / (Math.max(2, 9)));
      while ((5.78 - filedz) >= 3.75) {
          let episodeS = String.fromCharCode(112,97,103,95,98,95,51,50,0);
         filedz += parseInt(`${filedz}`);
         episodeS += `${episodeS.length}`;
         break;
      }
      while ((filedz + filedz) < 1.19) {
         filedz -= parseInt(`${filedz}`);
         break;
      }
      descf = logoY.size < parseInt(`${plash3}`);
   }
      logoY[`${selectionH}`] = 3;
       let fieldL = true;
       let libturbomodulejsijni2 = 0;
         fieldL = libturbomodulejsijni2 < 80 || !fieldL;
      for (let b = 0; b < 3; b++) {
         libturbomodulejsijni2 -= (libturbomodulejsijni2 / (Math.max(7, (fieldL ? 2 : 3))));
      }
         libturbomodulejsijni2 &= libturbomodulejsijni2;
          let sportsf = 1.0;
         libturbomodulejsijni2 &= (libturbomodulejsijni2 % (Math.max(3, (fieldL ? 5 : 1))));
         sportsf += parseFloat(`${parseInt(`${sportsf}`) >> (Math.min(2, Math.abs(parseInt(`${sportsf}`))))}`);
      for (let x = 0; x < 3; x++) {
          let rulesn = true;
          let iconarrowleftH = 1;
         fieldL = iconarrowleftH == 2;
         rulesn = !rulesn;
         iconarrowleftH += ((rulesn ? 1 : 3) - 2);
      }
         fieldL = fieldL || 12 >= libturbomodulejsijni2;
      middle_ /= Math.max(2, 3);
   do {
       let bannerW = 3.0;
       let informationj = 5.0;
       let layout8 = new Map([[String.fromCharCode(98,108,97,99,107,108,105,115,116,95,121,95,57,54,0),true ], [String.fromCharCode(106,95,54,49,95,115,112,101,99,105,102,105,101,114,0),true ], [String.fromCharCode(99,111,117,112,108,105,110,103,95,52,95,55,53,0),true ]]);
       let buttonn = String.fromCharCode(103,101,116,98,121,116,101,95,99,95,50,0);
          let iconsaveimageV = 2;
         layout8 = new Map([[`${informationj}`, 3]]);
         iconsaveimageV >>= Math.min(2, Math.abs(iconsaveimageV + iconsaveimageV));
         layout8[`${informationj}`] = parseInt(`${informationj}`);
      for (let h = 0; h < 2; h++) {
         buttonn += "3";
      }
      for (let i = 0; i < 3; i++) {
         informationj *= parseFloat(`${parseInt(`${bannerW}`) ^ parseInt(`${informationj}`)}`);
      }
      if (5 == (2 + buttonn.length) || (buttonn.length + 2) == 2) {
         layout8[buttonn] = buttonn.length;
      }
          let package_0tJ = String.fromCharCode(102,95,57,50,95,115,111,117,110,100,0);
          let adultW = [934, 384];
          let libruntimeexecutorw = String.fromCharCode(99,95,49,57,95,117,112,112,101,114,99,97,115,101,0);
         bannerW /= Math.max(parseFloat(`${2}`), 5);
         package_0tJ += "2";
         adultW.push(2);
         libruntimeexecutorw += "2";
      if (3 <= (layout8.size / (Math.max(buttonn.length, 3))) || 3 <= (buttonn.length / (Math.max(5, layout8.size)))) {
         layout8 = new Map([[`${layout8.size}`, layout8.size]]);
      }
      while (buttonn.length < 3) {
          let leaguedetailsbge = 4;
         buttonn += `${layout8.size - 1}`;
         leaguedetailsbge *= leaguedetailsbge + 1;
         break;
      }
      do {
         buttonn = `${3 & parseInt(`${informationj}`)}`;
         if (buttonn.length == 2594217) {
            break;
         }
      } while ((buttonn.length == 2594217) && (4 == (2 - layout8.size)));
      for (let w = 0; w < 3; w++) {
          let basketballawayteamR = String.fromCharCode(110,111,110,115,101,99,117,114,101,95,105,95,56,48,0);
          let giftbuttonj = String.fromCharCode(115,117,98,116,105,116,108,101,115,95,118,95,57,52,0);
          let expiredB = 1;
          let rncoreF = [380, 233];
          let fullP = [959, 860];
         layout8[`${bannerW}`] = parseInt(`${informationj}`);
         basketballawayteamR += `${expiredB * basketballawayteamR.length}`;
         giftbuttonj += "2";
         expiredB &= 3;
         rncoreF = [(giftbuttonj == String.fromCharCode(98,0) ? rncoreF.length : giftbuttonj.length)];
         fullP = [giftbuttonj.length / 2];
      }
         informationj += parseFloat(`${parseInt(`${informationj}`) * 1}`);
      if (3.48 < (informationj / (Math.max(2.88, 1))) && (informationj / 2.88) < 4.64) {
          let becomej = String.fromCharCode(99,109,97,99,95,54,95,50,57,0);
          let usernamez = false;
         bannerW *= parseFloat(`${layout8.size / 2}`);
         becomej += `${(String.fromCharCode(89,0) == becomej ? becomej.length : (usernamez ? 1 : 1))}`;
         usernamez = becomej.length == 80 || !usernamez;
      }
      privilegeK = `${parseInt(`${bannerW}`)}`;
      if (privilegeK.length == 2995723) {
         break;
      }
   } while ((privilegeK.startsWith(`${middle_}`)) && (privilegeK.length == 2995723));
      merger9 = `${1 + nodeW.size}`;

        await liveRoomAction.getVideoAdsList();
   for (let y = 0; y < 1; y++) {
      privilegeK += `${3 | modityh.length}`;
   }
      middle_ *= ((descf ? 3 : 2) / 1);
      privilegeK = `${logoY.size + modityh.length}`;
      middle_ |= parseInt(`${plash3}`) * 2;
       let imagenetworkerrP = true;
       let imagemanagera = 5.0;
      if (5.1 == (imagemanagera * 4.82)) {
          let classesT = new Map([[String.fromCharCode(98,95,53,51,95,100,111,99,108,105,115,116,115,0),String.fromCharCode(114,101,103,105,115,116,101,114,101,100,95,112,95,51,54,0)], [String.fromCharCode(112,111,108,121,95,121,95,56,0),String.fromCharCode(114,101,103,117,108,97,114,95,114,95,54,53,0)], [String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,57,95,51,53,0),String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,110,95,56,55,0)]]);
          let volumeo = 4;
         imagemanagera /= Math.max(5, parseFloat(`${parseInt(`${imagemanagera}`) << (Math.min(3, Math.abs(3)))}`));
         classesT[`${volumeo}`] = classesT.size + 3;
         volumeo *= volumeo;
      }
      while ((imagemanagera * 5.18) > 2.94 || 5.18 > imagemanagera) {
          let gemfileQ = [705, 684, 627];
          let backiconS = new Map([[String.fromCharCode(119,95,50,95,99,111,109,112,97,114,105,115,111,110,0),507], [String.fromCharCode(115,116,117,98,98,101,100,95,97,95,52,50,0),164]]);
         imagenetworkerrP = 83 <= backiconS.size;
         gemfileQ = [1 + gemfileQ.length];
         backiconS = new Map([[`${gemfileQ.length}`, gemfileQ.length]]);
         break;
      }
       let left4 = String.fromCharCode(115,104,105,102,116,115,95,114,95,50,0);
      while (2.6 >= (imagemanagera / (Math.max(1.80, 2))) && imagemanagera >= 1.80) {
          let notificationfillemptyI = String.fromCharCode(117,110,105,95,103,95,54,55,0);
          let iconcalendar6 = true;
          let fullscreenminr = 5.0;
         imagemanagera /= Math.max(parseFloat(`${1}`), 4);
         notificationfillemptyI = `${notificationfillemptyI.length}`;
         iconcalendar6 = 75.23 <= fullscreenminr;
         fullscreenminr -= ((iconcalendar6 ? 3 : 3) | 3);
         break;
      }
      do {
          let airbnbstarp = 1;
          let iconuser3 = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,57,95,52,49,0);
         imagenetworkerrP = imagenetworkerrP || airbnbstarp <= 30;
         airbnbstarp *= iconuser3.length & 2;
         iconuser3 += `${2 % (Math.max(1, iconuser3.length))}`;
         if (imagenetworkerrP ? !imagenetworkerrP : imagenetworkerrP) {
            break;
         }
      } while ((imagenetworkerrP ? !imagenetworkerrP : imagenetworkerrP) && (1.89 >= imagemanagera));
      while (2 < left4.length || !imagenetworkerrP) {
          let upgradeq = 3.0;
          let libavutils = 5;
          let buttonA = 2.0;
          let sharea = 2.0;
          let yingT = new Map([[String.fromCharCode(103,101,110,102,105,108,101,115,95,109,95,52,0),337], [String.fromCharCode(99,95,50,50,95,99,108,117,116,115,0),869], [String.fromCharCode(118,101,99,95,109,95,56,48,0),725]]);
         imagenetworkerrP = 88.43 == sharea || buttonA == 88.43;
         upgradeq += parseInt(`${upgradeq}`);
         libavutils <<= Math.min(3, Math.abs(libavutils));
         buttonA += libavutils / (Math.max(parseInt(`${upgradeq}`), 8));
         sharea -= parseFloat(`${1}`);
         yingT[`${upgradeq}`] = 3 & parseInt(`${upgradeq}`);
         break;
      }
      iconwatchnowK = 89 <= privilegeK.length;
       let filterD = [887, 173, 108];
       let gmailW = new Map([[String.fromCharCode(97,95,53,51,95,110,116,101,114,102,97,99,101,0),874], [String.fromCharCode(103,97,116,101,95,116,95,54,52,0),827]]);
         gmailW = new Map([[`${gmailW.size}`, 3]]);
      while (3 < gmailW.size) {
         filterD.push(filterD.length / (Math.max(3, 8)));
         break;
      }
      do {
          let reactnativeratingso = new Map([[String.fromCharCode(112,95,53,51,95,100,101,116,101,99,116,101,100,0),true ], [String.fromCharCode(121,95,57,52,95,116,101,120,116,117,114,101,100,115,112,0),false ], [String.fromCharCode(114,95,50,57,95,100,101,99,111,114,97,116,111,114,115,0),false ]]);
          let neon_ = 5;
          let libreactperfloggerjniB = String.fromCharCode(119,95,54,57,95,115,112,101,108,108,0);
          let libhermes2 = String.fromCharCode(113,95,55,50,95,111,114,100,101,114,105,110,103,0);
         gmailW = new Map([[libhermes2, (String.fromCharCode(72,0) == libreactperfloggerjniB ? libreactperfloggerjniB.length : libhermes2.length)]]);
         reactnativeratingso[`${neon_}`] = neon_;
         if (1657995 == gmailW.size) {
            break;
         }
      } while ((Array.from(gmailW.keys()).includes(`${filterD.length}`)) && (1657995 == gmailW.size));
         gmailW = new Map([[`${gmailW.size}`, filterD.length]]);
         filterD.push(filterD.length);
         gmailW = new Map([[`${gmailW.size}`, 1 >> (Math.min(2, Math.abs(gmailW.size)))]]);
      selectionH /= Math.max(nodeW.size * 2, 2);
      selectionH /= Math.max(4, 2);
   do {
       let iconviewergifz = 1.0;
       let mime8 = [708, 339];
      if ((iconviewergifz / 4.30) >= 1.67) {
          let cast3 = String.fromCharCode(109,111,100,105,102,105,101,114,115,95,116,95,57,53,0);
          let defaultteamY = String.fromCharCode(114,95,50,50,95,117,115,101,114,110,97,109,101,0);
          let iconwechat5 = [746, 951, 704];
          let layout4 = false;
         iconviewergifz *= parseFloat(`${cast3.length % 1}`);
         cast3 += `${iconwechat5.length + 2}`;
         defaultteamY += `${(defaultteamY == String.fromCharCode(76,0) ? iconwechat5.length : defaultteamY.length)}`;
         layout4 = iconwechat5.length > 29;
      }
          let contextW = [866, 223];
          let singaporea = String.fromCharCode(114,95,53,55,95,98,108,97,107,101,98,0);
         mime8.push(parseInt(`${iconviewergifz}`));
         contextW = [(singaporea == String.fromCharCode(83,0) ? contextW.length : singaporea.length)];
      if (5 > (2 * mime8.length)) {
         mime8 = [parseInt(`${iconviewergifz}`) * 1];
      }
       let debugy = [251, 752];
       let contextf = [930, 236, 257];
          let baiduw = String.fromCharCode(100,95,52,57,95,97,98,117,115,101,0);
          let privacye = 3;
          let areaH = true;
         mime8 = [baiduw.length];
         baiduw += `${privacye}`;
         privacye *= privacye;
         areaH = !areaH;
          let with_yiq = false;
          let cricketm = String.fromCharCode(115,111,114,116,101,100,95,103,95,51,57,0);
          let detailI = String.fromCharCode(112,95,53,55,95,108,111,119,101,114,99,97,115,101,100,0);
         contextf.push((parseInt(`${iconviewergifz}`) << (Math.min(3, Math.abs((with_yiq ? 2 : 5))))));
         with_yiq = String.fromCharCode(70,0) == detailI;
         cricketm += `${detailI.length}`;
      nodeW[description__Z] = description__Z.length;
      if (743079 == nodeW.size) {
         break;
      }
   } while ((2 >= (nodeW.size + merger9.length) && (nodeW.size + 2) >= 3) && (743079 == nodeW.size));
   while (merger9.startsWith(`${plash3}`)) {
      merger9 = "1";
      break;
   }

        setShowAds(true);
      merger9 = `${modityh.length}`;
   if (logoY.size < 3) {
       let iconfeedbackH = 4.0;
       let greyG = false;
       let holderY = String.fromCharCode(119,97,105,116,105,110,103,95,56,95,49,0);
      for (let g = 0; g < 3; g++) {
         iconfeedbackH -= 1 | parseInt(`${iconfeedbackH}`);
      }
         iconfeedbackH += parseInt(`${iconfeedbackH}`) - 2;
      while (!greyG) {
          let auto_gK = new Map([[String.fromCharCode(107,109,101,97,110,115,95,110,95,54,56,0),483], [String.fromCharCode(120,95,55,50,0),437], [String.fromCharCode(117,95,56,56,95,116,111,112,105,99,0),246]]);
          let androidj = false;
          let textG = 5;
         iconfeedbackH /= Math.max(1, 2 * parseInt(`${iconfeedbackH}`));
         auto_gK = new Map([[`${androidj}`, textG / 3]]);
         androidj = !androidj;
         textG *= textG;
         break;
      }
       let profileactiveY = new Map([[String.fromCharCode(109,95,55,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0),String.fromCharCode(119,95,57,95,100,114,97,119,108,105,110,101,0)], [String.fromCharCode(114,95,51,53,95,115,116,100,108,105,98,0),String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,107,95,54,51,0)], [String.fromCharCode(121,95,54,56,95,102,97,105,108,105,110,103,0),String.fromCharCode(109,95,49,95,114,101,115,101,116,117,112,0)]]);
       let tempnodatagifn = new Map([[String.fromCharCode(111,95,57,48,95,100,105,115,112,108,97,121,101,100,0),869], [String.fromCharCode(116,95,50,56,95,100,101,115,105,103,110,0),736]]);
      do {
          let foregroundF = new Map([[String.fromCharCode(114,101,118,111,107,101,95,55,95,56,54,0),917], [String.fromCharCode(107,95,55,53,95,99,108,117,115,116,101,114,115,0),969]]);
         profileactiveY[`${tempnodatagifn.size}`] = profileactiveY.size;
         foregroundF = new Map([[`${foregroundF.size}`, foregroundF.size % 2]]);
         if (760547 == profileactiveY.size) {
            break;
         }
      } while ((!Array.from(profileactiveY.keys()).includes(`${tempnodatagifn.size}`)) && (760547 == profileactiveY.size));
          let paginationW = String.fromCharCode(99,97,112,97,99,105,116,121,95,112,95,49,48,0);
          let matchinactiveL = String.fromCharCode(101,110,103,105,110,101,95,49,95,54,50,0);
         holderY = `${paginationW.length << (Math.min(Math.abs(1), 2))}`;
         paginationW = `${(String.fromCharCode(85,0) == matchinactiveL ? matchinactiveL.length : matchinactiveL.length)}`;
          let nodet = String.fromCharCode(97,114,99,104,105,118,101,95,52,95,56,55,0);
          let albump = 0.0;
          let imagesg = String.fromCharCode(111,115,116,114,105,110,103,115,116,114,101,97,109,95,110,95,52,52,0);
         profileactiveY = new Map([[`${iconfeedbackH}`, holderY.length / (Math.max(2, 1))]]);
         nodet += `${imagesg.length | parseInt(`${albump}`)}`;
         albump /= Math.max(4, imagesg.length);
         greyG = iconfeedbackH < 22.67 || greyG;
      do {
         holderY = `${(holderY.length & (greyG ? 3 : 4))}`;
         if (holderY.length == 1481046) {
            break;
         }
      } while ((holderY.length == 1481046) && (!holderY.startsWith(`${greyG}`)));
      descf = nodeW.size < whistlev.size;
   }
      middle_ /= Math.max((modityh == String.fromCharCode(65,0) ? whistlev.size : modityh.length), 4);
   if (3 <= (privilegeK.length - parseInt(`${selectionH}`)) || 2.73 <= (selectionH - privilegeK.length)) {
       let yellowcirclebgA = 5.0;
       let templateprocessorf = String.fromCharCode(104,95,57,54,95,98,105,116,97,108,108,111,99,0);
       let yellowanimationlivev = String.fromCharCode(104,95,56,49,95,100,108,116,97,0);
       let ajax4 = new Map([[String.fromCharCode(101,120,112,95,110,95,57,0),376], [String.fromCharCode(100,95,55,48,95,111,98,109,99,0),815]]);
       let bufferN = String.fromCharCode(114,101,102,105,110,101,114,95,109,95,51,48,0);
         templateprocessorf += `${yellowanimationlivev.length & 2}`;
      while (5 >= ajax4.size) {
          let bgvipxvod3 = 2.0;
          let friendsF = 0.0;
          let unread6 = String.fromCharCode(105,95,51,57,95,100,97,116,97,114,0);
         ajax4[unread6] = unread6.length - 1;
         bgvipxvod3 *= parseFloat(`${parseInt(`${friendsF}`)}`);
         break;
      }
          let reducer_ = new Map([[String.fromCharCode(114,101,118,105,101,119,95,101,95,49,52,0),617], [String.fromCharCode(99,95,57,52,95,114,101,115,111,108,118,101,114,115,0),294], [String.fromCharCode(115,105,116,101,109,97,112,95,117,95,49,49,0),503]]);
          let predictionbannerO = 1.0;
          let stringu = 5.0;
         yellowanimationlivev = `${(templateprocessorf == String.fromCharCode(100,0) ? templateprocessorf.length : parseInt(`${stringu}`))}`;
         reducer_[`${predictionbannerO}`] = 3;
         predictionbannerO -= parseFloat(`${parseInt(`${predictionbannerO}`) >> (Math.min(Math.abs(1), 4))}`);
         stringu /= Math.max(1, parseFloat(`${reducer_.size - parseInt(`${predictionbannerO}`)}`));
          let iconviewergifb = String.fromCharCode(117,95,49,53,95,98,108,105,116,0);
          let chartw = 0;
          let canvasK = false;
         yellowcirclebgA -= parseFloat(`${bufferN.length - ajax4.size}`);
         iconviewergifb += `${iconviewergifb.length}`;
         chartw %= Math.max((iconviewergifb == String.fromCharCode(115,0) ? iconviewergifb.length : chartw), 3);
         canvasK = !canvasK;
         bufferN = `${templateprocessorf.length >> (Math.min(Math.abs(1), 4))}`;
      while (!bufferN.includes(`${ajax4.size}`)) {
          let injuryr = [213, 803];
          let mbnativeadvanced0 = String.fromCharCode(102,108,111,97,116,95,48,95,50,49,0);
          let profilepicr = 4.0;
         ajax4[`${profilepicr}`] = mbnativeadvanced0.length >> (Math.min(1, Math.abs(parseInt(`${profilepicr}`))));
         injuryr.push(injuryr.length);
         mbnativeadvanced0 = `${injuryr.length >> (Math.min(Math.abs(1), 3))}`;
         break;
      }
      for (let s = 0; s < 3; s++) {
         bufferN += `${(String.fromCharCode(113,0) == templateprocessorf ? ajax4.size : templateprocessorf.length)}`;
      }
       let detailR = 5.0;
      for (let k = 0; k < 3; k++) {
          let ticks = new Map([[String.fromCharCode(112,95,52,55,95,109,105,99,114,111,112,104,111,110,101,0),String.fromCharCode(99,117,101,112,111,105,110,116,95,117,95,53,54,0)], [String.fromCharCode(114,101,115,111,108,117,116,105,111,110,95,104,95,50,51,0),String.fromCharCode(122,95,53,53,95,115,111,100,101,97,108,108,111,99,0)]]);
          let profilepicg = 5.0;
          let hookj = String.fromCharCode(112,114,101,116,116,121,95,54,95,55,50,0);
          let whistleX = false;
         yellowcirclebgA /= Math.max(5, (parseFloat(`${(whistleX ? 5 : 3) >> (Math.min(templateprocessorf.length, 1))}`)));
         ticks[`${profilepicg}`] = ticks.size;
         profilepicg /= Math.max(ticks.size, 5);
         hookj += `${hookj.length ^ 2}`;
         whistleX = 70 >= ticks.size && hookj == String.fromCharCode(48,0);
      }
      if (5.27 >= detailR) {
         ajax4 = new Map([[bufferN, bufferN.length]]);
      }
       let sendD = 4;
       let mounting6 = false;
         mounting6 = 13 > yellowanimationlivev.length && ajax4.size > 13;
       let iconbackwhiteg = String.fromCharCode(121,95,55,54,95,108,97,121,101,114,115,0);
       let gpayq = String.fromCharCode(122,95,51,57,95,98,117,116,116,101,114,0);
         ajax4 = new Map([[bufferN, bufferN.length]]);
      privilegeK = `${(String.fromCharCode(78,0) == privilegeK ? privilegeK.length : logoY.size)}`;
   }
       let zhengpianV = 4;
      do {
         zhengpianV /= Math.max(zhengpianV % (Math.max(8, zhengpianV)), 2);
         if (1511810 == zhengpianV) {
            break;
         }
      } while ((1511810 == zhengpianV) && (zhengpianV >= zhengpianV));
         zhengpianV *= zhengpianV | 1;
         zhengpianV += 1;
      middle_ &= 3 ^ privilegeK.length;
       let agreementg = [919, 700, 598];
         agreementg = [agreementg.length * agreementg.length];
          let package_wxH = String.fromCharCode(117,95,53,95,119,97,108,107,101,114,0);
         agreementg.push((package_wxH == String.fromCharCode(110,0) ? agreementg.length : package_wxH.length));
      do {
          let libreactperfloggerjnim = String.fromCharCode(120,95,53,48,95,109,115,117,98,0);
          let l_positionO = 4;
          let subbasketballplayert = 4;
          let gradleQ = [525, 135];
         agreementg = [subbasketballplayert];
         libreactperfloggerjnim = `${2 - l_positionO}`;
         l_positionO *= l_positionO % (Math.max(libreactperfloggerjnim.length, 9));
         subbasketballplayert |= 3 * l_positionO;
         gradleQ.push(gradleQ.length);
         if (agreementg.length == 1781984) {
            break;
         }
      } while ((agreementg.length > 2) && (agreementg.length == 1781984));
      description__Z = `${whistlev.size}`;
   do {
      modityh += `${(whistlev.size >> (Math.min(4, Math.abs((iconwatchnowK ? 2 : 2)))))}`;
      if (String.fromCharCode(112,51,50,0) == modityh) {
         break;
      }
   } while ((String.fromCharCode(112,51,50,0) == modityh) && (modityh.startsWith(`${iconwatchnowK}`)));
      descf = whistlev.size == selectionH;
   if (merger9 != privilegeK) {
      privilegeK = `${codegenc.length * parseInt(`${selectionH}`)}`;
   }

      };
      fetchAds();
    }
  }, [videoPlayerControl?.source, videoPlayerControl?.videoType]);

  
  useEffect(() => {
    switch (videoPlayerControl.action) {
      case 'refresh':
        playerRef.current?.seek?.(0);
        dispatch(setVideoControlProp({isPaused: false, action: ''}));
        break;
    }
  }, [videoPlayerControl.action]);

  useEffect(() => {
    if (videoPlayerControl.isPaused) {
      props.onPause?.();
    } else {
      props.onPlay?.();
    }
  }, [videoPlayerControl.isPaused]);

  useEffect(() => {
    if (isLoading) {
       let downl = 4.0;
    let gemfilel = new Map([[String.fromCharCode(115,112,97,99,101,114,115,95,97,95,49,0),233], [String.fromCharCode(99,111,109,112,97,114,95,100,95,49,52,0),786]]);
    let hometeamfieldH = String.fromCharCode(109,95,50,48,95,101,120,99,108,117,115,105,118,101,0);
    let teamu = String.fromCharCode(117,95,56,52,95,112,114,101,118,111,105,117,115,0);
    let images2 = [String.fromCharCode(100,114,105,118,101,114,115,95,105,95,49,49,0), String.fromCharCode(99,95,55,54,95,100,101,98,117,103,0), String.fromCharCode(115,111,114,101,115,101,114,118,101,95,116,95,55,51,0)];
    let middlewarer = [String.fromCharCode(117,95,53,95,99,97,99,104,101,100,0), String.fromCharCode(101,95,51,56,95,114,101,112,108,97,99,101,115,0)];
    let actionsN = String.fromCharCode(114,95,50,54,95,118,97,114,105,97,110,99,101,115,0);
    let zoom5 = true;
    let iconqq4 = [255, 845, 489];
    let kick4 = String.fromCharCode(105,95,55,95,99,97,112,105,116,97,108,105,122,105,110,103,0);
    let predictionbannerR = new Map([[String.fromCharCode(99,97,99,104,101,102,108,117,115,104,95,57,95,54,52,0),true ], [String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,108,95,53,50,0),false ], [String.fromCharCode(112,114,111,100,117,99,116,95,53,95,55,53,0),false ]]);
    let shielddoneb = true;
    let nterstitiala = false;
    let malaysia0 = new Map([[String.fromCharCode(102,95,53,54,95,115,110,100,105,111,0),253], [String.fromCharCode(99,97,112,97,99,105,116,121,95,116,95,51,50,0),695]]);
    let nextX = String.fromCharCode(118,95,55,49,95,109,97,115,116,101,114,105,110,103,0);
    let weiboO = 1.0;
    let zoomA = String.fromCharCode(119,95,52,56,95,112,114,111,104,105,98,105,116,0);
    let switch_ruW = String.fromCharCode(111,110,116,101,120,116,95,118,95,51,56,0);
      shielddoneb = iconqq4.length >= hometeamfieldH.length;
   do {
      downl /= Math.max(5, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${downl}`)), 4))}`));
      if (downl == 3150645.0) {
         break;
      }
   } while (((2.42 * downl) > 4.64) && (downl == 3150645.0));
      actionsN += `${teamu.length * middlewarer.length}`;

      Animated.loop(
        Animated.sequence([
          Animated.timing(animationLoader, {
            toValue: 360,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animationLoader, {
            toValue: 0,
            duration: 0,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ).start();
       let release_5F = String.fromCharCode(112,97,114,101,110,116,115,95,106,95,52,56,0);
         release_5F = `${release_5F.length}`;
      if (!release_5F.startsWith(release_5F)) {
          let modulesO = [198, 567];
          let league3 = 1.0;
          let sportG = new Map([[String.fromCharCode(116,95,50,53,95,108,101,103,97,99,121,0),653], [String.fromCharCode(112,111,105,110,116,101,114,95,102,95,49,52,0),237]]);
         release_5F += `${sportG.size - modulesO.length}`;
         modulesO = [parseInt(`${league3}`) + 1];
         league3 -= 2;
      }
         release_5F += `${release_5F.length}`;
      images2.push(nextX.length / 3);
   do {
      actionsN += `${actionsN.length}`;
      if (1727429 == actionsN.length) {
         break;
      }
   } while ((nextX == String.fromCharCode(111,0)) && (1727429 == actionsN.length));
       let iconorientationC = 4.0;
       let soundd = [945, 279];
         iconorientationC /= Math.max(3 | parseInt(`${iconorientationC}`), 2);
         soundd.push(soundd.length);
          let moon4 = String.fromCharCode(101,116,97,100,97,116,97,95,112,95,50,55,0);
         soundd.push(moon4.length);
         soundd = [parseInt(`${iconorientationC}`)];
         soundd = [parseInt(`${iconorientationC}`)];
         soundd.push(parseInt(`${iconorientationC}`) | 2);
      kick4 = "1";

    } else {
      Animated.timing(animationLoader).stop();
    }
  }, [isLoading]);

  const onScreenTouch = () => {
       let homea = false;
    let preview_ = String.fromCharCode(116,95,56,54,95,114,101,99,111,103,110,105,116,105,111,110,115,0);
    let dialogd = String.fromCharCode(99,111,110,116,101,120,116,95,110,95,52,57,0);
    let arrowrightwithtailC = String.fromCharCode(112,114,101,100,105,99,116,111,114,115,95,118,95,52,51,0);
    let thumbnailC = 4;
    let savef = new Map([[String.fromCharCode(105,110,116,114,97,120,95,53,95,53,53,0),String.fromCharCode(116,119,111,108,97,109,101,95,119,95,50,49,0)], [String.fromCharCode(108,95,51,54,95,103,117,101,115,115,0),String.fromCharCode(97,117,116,111,117,112,100,97,116,101,95,106,95,50,49,0)], [String.fromCharCode(100,121,108,105,98,115,95,56,95,49,55,0),String.fromCharCode(104,97,110,100,115,104,97,107,101,95,51,95,57,54,0)]]);
    let whistleorangeD = 4.0;
    let sellmathbackgroundE = new Map([[String.fromCharCode(103,95,49,52,95,116,104,114,101,97,100,115,97,102,101,0),494], [String.fromCharCode(106,111,105,110,116,95,121,95,55,56,0),553], [String.fromCharCode(109,95,52,55,95,102,97,100,101,100,0),768]]);
    let statsb = 0;
    let downB = 4.0;
    let s_unlockn = 5.0;
    let weiboJ = String.fromCharCode(118,95,57,52,95,109,106,112,101,103,100,101,99,0);
    let filedp = String.fromCharCode(105,95,57,52,95,115,114,112,0);
    let attributedstringP = String.fromCharCode(107,95,55,53,95,99,97,109,101,114,97,0);
    let renderJ = 2.0;
   if (downB == s_unlockn) {
      s_unlockn -= parseFloat(`${parseInt(`${whistleorangeD}`)}`);
   }
      weiboJ = `${sellmathbackgroundE.size}`;
      whistleorangeD *= parseInt(`${s_unlockn}`) >> (Math.min(Math.abs(savef.size), 1));
   for (let v = 0; v < 2; v++) {
      downB += parseFloat(`${1 >> (Math.min(2, Math.abs(statsb)))}`);
   }

    if (videoPlayerControl.isLocked) {

   do {
       let foundm = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,54,95,53,50,0);
       let splashL = true;
       let hejiT = String.fromCharCode(121,95,55,49,95,108,101,114,112,102,0);
       let eactJ = String.fromCharCode(115,117,98,108,97,121,101,114,115,95,106,95,55,56,0);
       let subin_ = 3;
      for (let d = 0; d < 2; d++) {
         splashL = !hejiT.startsWith(`${splashL}`);
      }
      do {
         hejiT = "1";
         if (hejiT.length == 1448605) {
            break;
         }
      } while ((!eactJ.startsWith(hejiT)) && (hejiT.length == 1448605));
          let subinC = String.fromCharCode(111,100,100,95,118,95,57,49,0);
         splashL = eactJ.length < foundm.length;
         subinC += `${subinC.length | 1}`;
      do {
         hejiT = `${((splashL ? 1 : 1) / (Math.max(foundm.length, 1)))}`;
         if (2501875 == hejiT.length) {
            break;
         }
      } while ((eactJ.length <= hejiT.length) && (2501875 == hejiT.length));
          let showz = 5.0;
         eactJ += `${subin_ / 2}`;
         showz -= parseInt(`${showz}`) + 1;
          let iconwatchnowj = [805, 440];
          let libimagepipelinej = String.fromCharCode(106,95,51,51,95,102,98,100,101,118,0);
         eactJ = `${iconwatchnowj.length / 1}`;
         iconwatchnowj = [libimagepipelinej.length >> (Math.min(1, libimagepipelinej.length))];
         subin_ *= 3;
       let imagenetworkerrE = new Map([[String.fromCharCode(112,114,111,98,101,95,118,95,49,53,0),276], [String.fromCharCode(109,95,54,55,95,110,97,118,105,103,97,116,101,0),952]]);
       let langl = new Map([[String.fromCharCode(114,101,97,110,97,108,121,122,101,95,56,95,49,51,0),false ], [String.fromCharCode(104,95,52,50,95,109,97,107,101,0),false ]]);
      do {
          let largez = [859, 147];
          let c_titleD = new Map([[String.fromCharCode(97,114,101,95,108,95,49,56,0),34], [String.fromCharCode(122,95,55,55,95,104,101,97,100,114,111,111,109,0),615], [String.fromCharCode(103,95,54,51,0),216]]);
          let textinputw = 0.0;
         imagenetworkerrE = new Map([[eactJ, (String.fromCharCode(78,0) == foundm ? foundm.length : eactJ.length)]]);
         largez.push(c_titleD.size * 3);
         c_titleD = new Map([[`${largez.length}`, parseInt(`${textinputw}`) | 2]]);
         textinputw /= Math.max(5, parseInt(`${textinputw}`) % 1);
         if (800969 == imagenetworkerrE.size) {
            break;
         }
      } while ((800969 == imagenetworkerrE.size) && (1 > (imagenetworkerrE.size / (Math.max(5, 10)))));
         foundm = `${((splashL ? 4 : 3))}`;
         imagenetworkerrE = new Map([[hejiT, hejiT.length & eactJ.length]]);
      for (let m = 0; m < 3; m++) {
         splashL = String.fromCharCode(101,0) == foundm;
      }
         foundm = `${hejiT.length}`;
         imagenetworkerrE = new Map([[`${langl.size}`, foundm.length]]);
      do {
         imagenetworkerrE[hejiT] = ((splashL ? 3 : 3));
         if (4139025 == imagenetworkerrE.size) {
            break;
         }
      } while ((4139025 == imagenetworkerrE.size) && (foundm.length > 1));
      thumbnailC *= 2 << (Math.min(5, Math.abs(parseInt(`${downB}`))));
      if (thumbnailC == 3604214) {
         break;
      }
   } while ((thumbnailC == 3604214) && (thumbnailC == s_unlockn));
   for (let u = 0; u < 2; u++) {
      whistleorangeD /= Math.max(sellmathbackgroundE.size - thumbnailC, 2);
   }
      downB /= Math.max(1, parseFloat(`${1}`));
       let routerb = String.fromCharCode(108,95,52,57,95,108,111,99,107,105,110,103,0);
          let dplusz = String.fromCharCode(104,95,55,52,95,100,105,97,108,108,105,110,103,0);
         routerb = `${routerb.length}`;
         dplusz += `${dplusz.length}`;
      do {
         routerb += "1";
         if (2762552 == routerb.length) {
            break;
         }
      } while ((5 == routerb.length) && (2762552 == routerb.length));
      do {
          let minimizeA = 0.0;
          let shootz = [637, 99, 568];
          let livesharec = [String.fromCharCode(101,95,49,48,48,95,118,98,108,101,0), String.fromCharCode(100,95,49,53,95,108,111,99,107,115,0), String.fromCharCode(103,95,56,51,95,108,111,103,103,101,114,0)];
          let temperaturer = String.fromCharCode(109,95,56,56,95,97,100,114,109,0);
          let rocketc = String.fromCharCode(121,97,98,101,95,98,95,51,57,0);
         routerb = `${parseInt(`${minimizeA}`) * 1}`;
         minimizeA *= temperaturer.length + shootz.length;
         shootz.push((temperaturer == String.fromCharCode(81,0) ? temperaturer.length : shootz.length));
         livesharec.push(livesharec.length);
         rocketc = `${rocketc.length + 1}`;
         if (4181225 == routerb.length) {
            break;
         }
      } while ((routerb != routerb) && (4181225 == routerb.length));
      downB -= parseFloat(`${routerb.length & savef.size}`);
      

   do {
       let libimagepipelinen = String.fromCharCode(117,95,53,95,112,105,120,99,116,120,0);
       let informationu = 1.0;
      if (4 >= libimagepipelinen.length) {
         informationu /= Math.max(parseFloat(`${libimagepipelinen.length}`), 2);
      }
          let profilepicg = String.fromCharCode(118,95,51,49,95,98,97,100,0);
          let const_jsd = false;
          let configurec = 1.0;
         informationu /= Math.max((parseFloat(`${(const_jsd ? 2 : 5)}`)), 4);
         profilepicg = `${profilepicg.length}`;
         const_jsd = 19.98 < configurec;
         configurec /= Math.max(2, parseFloat(`${1}`));
      for (let k = 0; k < 2; k++) {
          let homek = String.fromCharCode(98,108,117,114,114,97,98,108,101,95,51,95,53,57,0);
          let expandZ = false;
          let shielddoneB = new Map([[String.fromCharCode(102,95,50,52,95,118,115,105,110,107,0),String.fromCharCode(116,95,49,50,95,109,98,117,118,0)], [String.fromCharCode(109,97,116,116,101,95,114,95,57,49,0),String.fromCharCode(103,95,54,54,95,102,111,114,119,97,114,100,0)]]);
          let attributedstringu = [482, 564];
          let icontransferclubs = false;
         libimagepipelinen = `${(libimagepipelinen == String.fromCharCode(99,0) ? attributedstringu.length : libimagepipelinen.length)}`;
         homek = "1";
         expandZ = String.fromCharCode(48,0) == homek || shielddoneB.size >= 10;
         shielddoneB = new Map([[`${icontransferclubs}`, ((expandZ ? 2 : 4) + 2)]]);
         attributedstringu = [1];
      }
         informationu /= Math.max(parseFloat(`${libimagepipelinen.length >> (Math.min(Math.abs(1), 3))}`), 1);
      if (!libimagepipelinen.startsWith(`${informationu}`)) {
         libimagepipelinen += `${(libimagepipelinen == String.fromCharCode(103,0) ? libimagepipelinen.length : parseInt(`${informationu}`))}`;
      }
      do {
         informationu += parseFloat(`${parseInt(`${informationu}`) / (Math.max(2, 1))}`);
         if (4645985.0 == informationu) {
            break;
         }
      } while ((!libimagepipelinen.startsWith(`${informationu}`)) && (4645985.0 == informationu));
      s_unlockn /= Math.max(3, parseFloat(`${1 | preview_.length}`));
      if (s_unlockn == 821504.0) {
         break;
      }
   } while ((4.90 >= (parseFloat(`${arrowrightwithtailC.length}`) + s_unlockn) && (arrowrightwithtailC.length | 4) >= 3) && (s_unlockn == 821504.0));
   if (5.39 > (s_unlockn / (Math.max(1.40, 9))) && (thumbnailC & 4) > 2) {
       let fill9 = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,115,95,52,51,0);
          let whiteanimationliveX = 4.0;
         fill9 += `${fill9.length}`;
         whiteanimationliveX -= parseFloat(`${parseInt(`${whiteanimationliveX}`)}`);
       let greenZ = new Map([[String.fromCharCode(114,95,49,51,95,112,105,120,109,102,116,115,0),747], [String.fromCharCode(105,100,119,116,95,102,95,56,49,0),318], [String.fromCharCode(116,95,51,55,95,111,117,116,102,105,108,101,0),779]]);
      while (fill9.startsWith(`${greenZ.size}`)) {
          let libfabricjnij = 4.0;
          let crownI = String.fromCharCode(114,102,102,116,102,95,48,95,56,55,0);
          let reportx = 4.0;
          let audiencel = new Map([[String.fromCharCode(105,110,105,116,118,95,104,95,51,48,0),String.fromCharCode(117,116,102,116,111,95,122,95,56,54,0)], [String.fromCharCode(109,101,109,111,95,109,95,49,52,0),String.fromCharCode(97,121,117,118,108,101,95,102,95,50,51,0)], [String.fromCharCode(111,95,49,56,95,99,97,114,114,121,0),String.fromCharCode(117,110,98,111,110,100,101,100,95,116,95,52,54,0)]]);
          let type_akm = [789, 767];
         greenZ = new Map([[fill9, parseInt(`${reportx}`) - 3]]);
         libfabricjnij += type_akm.length;
         crownI += `${crownI.length % 1}`;
         reportx -= parseFloat(`${2}`);
         audiencel[`${crownI}`] = (crownI == String.fromCharCode(122,0) ? crownI.length : audiencel.size);
         type_akm.push(crownI.length);
         break;
      }
      s_unlockn *= parseFloat(`${1}`);
   }
   for (let b = 0; b < 3; b++) {
      preview_ = `${((homea ? 1 : 2))}`;
   }
   do {
       let hometeamfieldt = 2.0;
       let fieldX = 0.0;
       let models4 = new Map([[String.fromCharCode(102,95,51,56,95,114,101,97,100,0),634], [String.fromCharCode(116,95,50,50,95,116,100,101,99,111,100,101,0),106], [String.fromCharCode(110,101,101,100,101,100,95,108,95,56,49,0),88]]);
      if (1.38 > hometeamfieldt) {
         hometeamfieldt -= parseFloat(`${parseInt(`${fieldX}`)}`);
      }
      for (let l = 0; l < 3; l++) {
         models4[`${fieldX}`] = parseInt(`${fieldX}`);
      }
          let bgvipsportF = String.fromCharCode(102,108,101,120,102,101,99,95,117,95,55,50,0);
          let anythinkp = 5;
         models4 = new Map([[bgvipsportF, 3 - anythinkp]]);
         hometeamfieldt /= Math.max(5, parseFloat(`${models4.size}`));
      for (let g = 0; g < 2; g++) {
         hometeamfieldt *= parseFloat(`${3 & models4.size}`);
      }
      while ((fieldX * 4.36) > 2.33 && 1.56 > (4.36 * fieldX)) {
         fieldX -= parseFloat(`${models4.size}`);
         break;
      }
      if (hometeamfieldt >= 2.36) {
          let statione = [String.fromCharCode(102,95,51,56,95,111,117,116,103,111,105,110,103,0), String.fromCharCode(115,97,109,105,95,116,95,53,55,0), String.fromCharCode(105,95,53,49,95,111,110,97,118,99,0)];
          let controlN = String.fromCharCode(97,95,50,51,95,105,110,118,101,114,115,101,100,0);
          let shrinkm = new Map([[String.fromCharCode(106,95,55,55,95,116,109,112,108,0),852], [String.fromCharCode(99,97,115,101,95,52,95,57,0),796], [String.fromCharCode(98,95,49,54,95,116,114,97,110,115,109,105,115,115,105,111,110,0),11]]);
          let buttonr = [650, 262];
          let expandB = String.fromCharCode(112,104,121,115,105,99,97,108,95,112,95,52,53,0);
         hometeamfieldt += (parseFloat(`${controlN == String.fromCharCode(121,0) ? controlN.length : parseInt(`${fieldX}`)}`));
         statione.push(buttonr.length);
         shrinkm[`${statione.length}`] = shrinkm.size;
         buttonr = [3];
         expandB = `${buttonr.length | statione.length}`;
      }
       let iconuserZ = [String.fromCharCode(102,101,97,116,117,114,101,95,109,95,57,54,0), String.fromCharCode(100,121,108,105,98,115,95,51,95,50,52,0), String.fromCharCode(115,95,55,56,95,104,101,114,101,0)];
      while (1 < (models4.size ^ iconuserZ.length) && 1 < (models4.size ^ iconuserZ.length)) {
          let yellowtoredo = String.fromCharCode(100,101,99,105,112,104,101,114,95,115,95,55,51,0);
          let reactnativeultimatelistviewC = [String.fromCharCode(122,95,55,56,95,97,117,116,111,114,111,116,97,116,105,111,110,0), String.fromCharCode(114,95,57,49,95,118,97,108,117,101,100,0)];
         iconuserZ = [models4.size];
         yellowtoredo += `${yellowtoredo.length & reactnativeultimatelistviewC.length}`;
         reactnativeultimatelistviewC = [yellowtoredo.length];
         break;
      }
      sellmathbackgroundE = new Map([[`${homea}`, (parseInt(`${whistleorangeD}`) & (homea ? 5 : 3))]]);
      if (sellmathbackgroundE.size == 3749028) {
         break;
      }
   } while ((sellmathbackgroundE[`${s_unlockn}`] != null) && (sellmathbackgroundE.size == 3749028));
      dispatch(showControlAction(ShowControlType.Locker));
   while (!homea) {
      homea = weiboJ.length == 8;
      break;
   }
   do {
      whistleorangeD += 1 % (Math.max(2, parseInt(`${s_unlockn}`)));
      if (1225061.0 == whistleorangeD) {
         break;
      }
   } while ((1225061.0 == whistleorangeD) && (5 == (sellmathbackgroundE.size << (Math.min(Math.abs(2), 2))) || 1 == (sellmathbackgroundE.size % 2)));
   if (3 >= (1 - arrowrightwithtailC.length)) {
      arrowrightwithtailC = `${arrowrightwithtailC.length << (Math.min(4, Math.abs(parseInt(`${s_unlockn}`))))}`;
   }
      savef = new Map([[arrowrightwithtailC, arrowrightwithtailC.length * parseInt(`${s_unlockn}`)]]);

      showToast('请先解除屏幕锁定');
    } else if (!videoPlayerControl.showControl?.type) {

       let viewerO = new Map([[String.fromCharCode(100,101,97,99,116,95,119,95,53,0),false ], [String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,110,95,50,48,0),false ]]);
       let libimagepipelinee = String.fromCharCode(107,95,57,52,95,112,105,99,107,105,110,103,0);
      for (let s = 0; s < 2; s++) {
         viewerO[`${libimagepipelinee}`] = libimagepipelinee.length;
      }
      for (let c = 0; c < 2; c++) {
         libimagepipelinee = `${libimagepipelinee.length & 3}`;
      }
      do {
          let predictionwinS = new Map([[String.fromCharCode(100,105,115,99,117,115,115,95,116,95,56,50,0),String.fromCharCode(100,111,116,116,101,100,95,118,95,53,0)], [String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,98,95,51,48,0),String.fromCharCode(112,114,111,99,101,101,100,95,119,95,52,51,0)], [String.fromCharCode(117,95,57,52,95,111,112,116,105,109,105,115,109,0),String.fromCharCode(108,95,57,53,95,104,97,115,120,0)]]);
         libimagepipelinee += `${viewerO.size & 1}`;
         predictionwinS = new Map([[`${predictionwinS.size}`, predictionwinS.size]]);
         if (2185790 == libimagepipelinee.length) {
            break;
         }
      } while (((5 | viewerO.size) < 4) && (2185790 == libimagepipelinee.length));
          let langX = true;
         libimagepipelinee = `${libimagepipelinee.length % (Math.max(1, 2))}`;
         langX = !langX;
      if (3 > (libimagepipelinee.length - viewerO.size) || 5 > (3 - viewerO.size)) {
         libimagepipelinee += `${libimagepipelinee.length}`;
      }
      if ((viewerO.size % (Math.max(libimagepipelinee.length, 6))) > 1 && (libimagepipelinee.length % (Math.max(1, 1))) > 3) {
         viewerO = new Map([[`${viewerO.size}`, 2 >> (Math.min(1, libimagepipelinee.length))]]);
      }
      s_unlockn += parseFloat(`${parseInt(`${downB}`) & dialogd.length}`);
   do {
       let privilege8 = 3.0;
       let bootf = 2;
       let darkD = [125, 562, 804];
       let uimanagerZ = true;
      while (bootf <= 3) {
         uimanagerZ = bootf > parseInt(`${privilege8}`);
         break;
      }
       let iconv = 3.0;
       let inouttargetredb = 2.0;
          let videoh = 4.0;
          let homeplayerf = [292, 905];
         iconv *= homeplayerf.length;
         videoh += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${videoh}`)), 5))}`);
         homeplayerf = [parseInt(`${videoh}`)];
      while (iconv > inouttargetredb) {
         iconv += parseInt(`${privilege8}`);
         break;
      }
      for (let y = 0; y < 3; y++) {
         iconv -= (parseInt(`${iconv}`) & (uimanagerZ ? 4 : 2));
      }
      while (5.22 >= iconv) {
          let networkK = String.fromCharCode(105,112,108,99,111,110,118,107,101,114,110,101,108,95,103,95,52,54,0);
          let dangerf = String.fromCharCode(115,117,114,101,95,103,95,55,51,0);
         uimanagerZ = 47.43 > privilege8;
         networkK += `${networkK.length}`;
         dangerf = `${networkK.length / 1}`;
         break;
      }
      for (let f = 0; f < 2; f++) {
         iconv *= darkD.length * 3;
      }
      do {
         bootf -= ((uimanagerZ ? 3 : 2) ^ parseInt(`${iconv}`));
         if (3189122 == bootf) {
            break;
         }
      } while ((uimanagerZ && 4 > (bootf + 4)) && (3189122 == bootf));
         inouttargetredb /= Math.max(3, 2 - parseInt(`${privilege8}`));
          let libimagepipelineq = false;
          let google1 = String.fromCharCode(98,95,52,48,95,109,112,101,103,118,105,100,101,111,0);
          let defaultroombgA = 3;
         bootf &= (parseInt(`${iconv}`) & (libimagepipelineq ? 3 : 1));
         libimagepipelineq = google1 == String.fromCharCode(122,0);
         google1 = `${defaultroombgA * 2}`;
         defaultroombgA |= 2;
      for (let q = 0; q < 3; q++) {
         iconv -= 1;
      }
         iconv /= Math.max(parseInt(`${privilege8}`), 4);
      statsb <<= Math.min(3, Math.abs(savef.size * 2));
      if (2537206 == statsb) {
         break;
      }
   } while ((homea) && (2537206 == statsb));
       let logousero = 3.0;
       let type_kf8 = new Map([[String.fromCharCode(107,105,116,95,102,95,54,54,0),508], [String.fromCharCode(108,95,55,48,95,117,112,112,101,114,99,97,115,101,0),564]]);
      while ((3.93 - logousero) < 2.31 || (logousero - type_kf8.size) < 3.93) {
         type_kf8 = new Map([[`${type_kf8.size}`, 2]]);
         break;
      }
         type_kf8 = new Map([[`${type_kf8.size}`, parseInt(`${logousero}`) >> (Math.min(Math.abs(type_kf8.size), 3))]]);
      sellmathbackgroundE = new Map([[`${whistleorangeD}`, 2 - parseInt(`${whistleorangeD}`)]]);
      s_unlockn /= Math.max(parseFloat(`${arrowrightwithtailC.length}`), 4);
      

      downB += parseFloat(`${3 % (Math.max(thumbnailC, 6))}`);
   do {
      sellmathbackgroundE = new Map([[preview_, preview_.length]]);
      if (sellmathbackgroundE.size == 3250889) {
         break;
      }
   } while ((sellmathbackgroundE.size == 3250889) && (dialogd.startsWith(`${sellmathbackgroundE.size}`)));
   while (Array.from(sellmathbackgroundE.keys()).includes(`${downB}`)) {
      sellmathbackgroundE[preview_] = preview_.length;
      break;
   }
      whistleorangeD /= Math.max(4, parseInt(`${downB}`));
      dispatch(showControlAction(ShowControlType.TopBottom));
    } else {

   while (4.29 < (3.45 * whistleorangeD)) {
      whistleorangeD -= 1 - parseInt(`${s_unlockn}`);
      break;
   }
   do {
      savef[`${statsb}`] = 2 ^ parseInt(`${downB}`);
      if (savef.size == 4035034) {
         break;
      }
   } while ((savef.size == 4035034) && (!Array.from(savef.keys()).includes(`${s_unlockn}`)));
      weiboJ = `${3 >> (Math.min(3, preview_.length))}`;
      thumbnailC %= Math.max(4, (String.fromCharCode(55,0) == filedp ? filedp.length : parseInt(`${downB}`)));
      

      dialogd = "3";
   for (let m = 0; m < 2; m++) {
      downB -= parseFloat(`${2 | thumbnailC}`);
   }
      thumbnailC /= Math.max(weiboJ.length ^ 2, 1);
   while (4 >= (3 | statsb) || 1 >= (3 | statsb)) {
      arrowrightwithtailC += `${weiboJ.length}`;
      break;
   }
      dispatch(hideControlAction());
      preview_ += `${2 >> (Math.min(Math.abs(parseInt(`${downB}`)), 4))}`;
      dialogd += `${thumbnailC >> (Math.min(Math.abs(3), 5))}`;
   if (weiboJ.endsWith(`${savef.size}`)) {
       let countdowng = 5;
       let typinga = [String.fromCharCode(115,116,97,116,117,115,111,114,95,54,95,54,56,0), String.fromCharCode(113,95,50,95,102,114,97,103,109,101,110,116,115,0)];
      for (let f = 0; f < 1; f++) {
          let switch_u7 = [856, 561, 890];
         typinga = [countdowng >> (Math.min(typinga.length, 3))];
         switch_u7.push(switch_u7.length / (Math.max(4, switch_u7.length)));
      }
      if ((3 - typinga.length) >= 1 || 3 >= (typinga.length - countdowng)) {
         typinga.push(countdowng);
      }
      do {
         countdowng |= countdowng;
         if (4373620 == countdowng) {
            break;
         }
      } while ((4373620 == countdowng) && (typinga.includes(countdowng)));
         typinga = [typinga.length];
      for (let w = 0; w < 2; w++) {
         countdowng |= 1;
      }
       let dialogh = 2;
       let megaphoneo = 1;
      savef[`${downB}`] = parseInt(`${downB}`) >> (Math.min(Math.abs(2), 3));
   }
   for (let j = 0; j < 2; j++) {
       let alertv = String.fromCharCode(114,101,102,117,110,100,95,52,95,49,57,0);
       let expandV = [797, 792];
       let progressb = 4.0;
         expandV.push(expandV.length);
      if ((4 * expandV.length) <= 1 || 5 <= (4 >> (Math.min(5, expandV.length)))) {
         progressb *= parseFloat(`${alertv.length}`);
      }
         alertv = `${3 - parseInt(`${progressb}`)}`;
      do {
          let iconarrowrightz = true;
          let refreshborderlessJ = String.fromCharCode(101,95,50,53,95,116,105,99,107,101,114,115,0);
          let networkN = [622, 596, 610];
         expandV = [expandV.length ^ alertv.length];
         iconarrowrightz = !iconarrowrightz;
         refreshborderlessJ += `${((iconarrowrightz ? 2 : 2))}`;
         networkN = [refreshborderlessJ.length | networkN.length];
         if (expandV.length == 1506245) {
            break;
         }
      } while ((alertv.startsWith(`${expandV.length}`)) && (expandV.length == 1506245));
         alertv += `${1 ^ alertv.length}`;
      do {
          let watchi = 4;
          let drag6 = [476, 353, 53];
          let iconrightorangeZ = String.fromCharCode(109,115,109,112,101,103,95,106,95,55,57,0);
          let sentryJ = String.fromCharCode(106,95,52,57,95,112,114,101,115,115,117,114,101,0);
          let chatroombackground1 = String.fromCharCode(105,116,101,109,95,98,95,52,51,0);
         progressb /= Math.max((parseFloat(`${String.fromCharCode(73,0) == sentryJ ? sentryJ.length : parseInt(`${progressb}`)}`)), 2);
         watchi <<= Math.min(Math.abs((chatroombackground1 == String.fromCharCode(74,0) ? chatroombackground1.length : iconrightorangeZ.length)), 3);
         drag6 = [1];
         iconrightorangeZ += `${watchi / 3}`;
         if (progressb == 1491788.0) {
            break;
         }
      } while ((expandV.length == parseInt(`${progressb}`)) && (progressb == 1491788.0));
      do {
         expandV.push(alertv.length);
         if (2448690 == expandV.length) {
            break;
         }
      } while ((alertv.length >= 2) && (2448690 == expandV.length));
          let internetw = 4.0;
          let manifestJ = String.fromCharCode(105,118,115,101,116,117,112,95,113,95,57,48,0);
         alertv += `${(alertv == String.fromCharCode(68,0) ? expandV.length : alertv.length)}`;
         internetw += parseFloat(`${manifestJ.length}`);
         manifestJ += `${parseInt(`${internetw}`) ^ manifestJ.length}`;
         expandV.push(2 % (Math.max(8, alertv.length)));
      filedp += `${arrowrightwithtailC.length}`;
   }

    }
  };
  const onLoadStart = () => {
       let predictiono = String.fromCharCode(100,95,49,56,95,97,114,110,114,0);
    let iconpointscoreu = new Map([[String.fromCharCode(103,95,54,53,95,115,115,114,99,115,0),289], [String.fromCharCode(101,114,111,100,101,95,119,95,49,52,0),314]]);
    let predictionarrowl = new Map([[String.fromCharCode(103,95,51,52,95,116,112,101,108,0),79], [String.fromCharCode(115,97,100,120,95,105,95,51,55,0),904]]);
    let runtimeschedulerr = 4.0;
    let chatk = 5.0;
    let libturbomodulejsijni9 = String.fromCharCode(111,95,51,54,95,108,105,110,109,97,116,104,0);
    let lightI = 5.0;
    let libapminsightaN = [494, 607];
    let iconnewssharep = String.fromCharCode(108,95,53,50,95,101,100,105,116,111,114,0);
    let plusC = 2.0;
    let greytick4 = String.fromCharCode(107,95,50,54,95,117,110,105,109,112,111,114,116,97,110,116,0);
    let inouttargetreds = 3.0;
    let projectM = 3;
       let rewardO = String.fromCharCode(101,118,101,110,116,95,107,95,57,49,0);
      for (let e = 0; e < 2; e++) {
         rewardO += `${rewardO.length}`;
      }
         rewardO += `${rewardO.length}`;
       let moonv = 3.0;
       let cornerkick6 = 5.0;
      predictiono += `${parseInt(`${plusC}`) * 1}`;
       let transfer2 = String.fromCharCode(119,95,56,54,95,99,97,112,116,117,114,101,0);
       let libyogaT = String.fromCharCode(113,95,55,50,95,103,97,117,115,115,105,97,110,105,105,114,100,0);
      do {
          let penaltyi = String.fromCharCode(116,105,99,107,101,114,115,95,113,95,50,48,0);
          let downloadedq = String.fromCharCode(103,95,56,49,95,101,122,105,101,114,0);
          let c_countG = [52, 661];
          let libglogY = String.fromCharCode(99,111,110,116,114,97,99,116,95,49,95,53,48,0);
         transfer2 = `${c_countG.length % (Math.max(2, penaltyi.length))}`;
         penaltyi += `${libglogY.length}`;
         downloadedq = `${libglogY.length}`;
         c_countG = [libglogY.length / 1];
         if (transfer2.length == 3111951) {
            break;
         }
      } while ((!transfer2.startsWith(`${libyogaT.length}`)) && (transfer2.length == 3111951));
       let readP = String.fromCharCode(115,101,116,116,105,103,110,115,95,108,95,55,57,0);
       let libruntimeexecutorH = String.fromCharCode(99,111,115,112,105,95,109,95,56,51,0);
         libruntimeexecutorH += `${3 + readP.length}`;
      for (let j = 0; j < 2; j++) {
          let bella = String.fromCharCode(118,116,114,107,95,120,95,49,57,0);
          let iconpointscore7 = String.fromCharCode(115,97,110,101,95,115,95,56,52,0);
          let other0 = 5;
         libruntimeexecutorH = `${1 ^ transfer2.length}`;
         bella += `${2 << (Math.min(3, iconpointscore7.length))}`;
         iconpointscore7 += `${other0}`;
         other0 >>= Math.min(3, bella.length);
      }
      if (!libyogaT.includes(`${transfer2.length}`)) {
         libyogaT += `${readP.length >> (Math.min(4, libruntimeexecutorH.length))}`;
      }
       let arrowrightwithtail_ = 1.0;
       let predictionb = 2.0;
      chatk -= parseFloat(`${2 << (Math.min(2, Math.abs(parseInt(`${plusC}`))))}`);
      plusC += parseFloat(`${iconnewssharep.length}`);
   while ((predictiono.length * libapminsightaN.length) == 1 || 1 == (predictiono.length * libapminsightaN.length)) {
       let icontransferclubD = 3.0;
       let reactnativejsn = String.fromCharCode(103,95,49,52,95,115,101,101,107,97,98,108,101,0);
       let relatedg = 5.0;
       let graphicsY = String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,113,95,49,50,0);
       let x_titlee = [319, 821];
      do {
         relatedg *= parseInt(`${icontransferclubD}`) - graphicsY.length;
         if (2636026.0 == relatedg) {
            break;
         }
      } while (((icontransferclubD - 1) >= 2.60) && (2636026.0 == relatedg));
         icontransferclubD -= parseInt(`${relatedg}`) / (Math.max(2, 6));
          let singlev = 3;
          let whiteanimationlive1 = String.fromCharCode(101,95,51,95,114,101,116,114,121,97,98,108,101,0);
          let package_qwj = String.fromCharCode(118,95,50,56,95,100,101,99,111,117,112,108,101,0);
         relatedg *= reactnativejsn.length;
         singlev |= 2 & singlev;
         whiteanimationlive1 += `${whiteanimationlive1.length * singlev}`;
         package_qwj += "1";
         reactnativejsn = `${(graphicsY == String.fromCharCode(82,0) ? reactnativejsn.length : graphicsY.length)}`;
         graphicsY += `${parseInt(`${icontransferclubD}`)}`;
      if (4.31 >= (5.60 + icontransferclubD) || 5 >= (x_titlee.length | 1)) {
          let homeplayerI = String.fromCharCode(114,101,111,114,100,101,114,101,100,95,122,95,49,0);
          let chatL = String.fromCharCode(121,95,57,51,95,109,101,109,115,121,115,0);
          let tempnodataK = true;
          let android3 = 3;
         x_titlee = [(chatL == String.fromCharCode(106,0) ? android3 : chatL.length)];
         homeplayerI += `${homeplayerI.length << (Math.min(Math.abs(2), 2))}`;
         tempnodataK = (84 == (homeplayerI.length + (tempnodataK ? homeplayerI.length : 84)));
         android3 >>= Math.min(2, Math.abs((String.fromCharCode(51,0) == homeplayerI ? homeplayerI.length : (tempnodataK ? 2 : 4))));
      }
      if (graphicsY.length > 1) {
         relatedg /= Math.max(1, 3);
      }
          let field_ = true;
          let clock1 = 2.0;
         reactnativejsn = `${parseInt(`${icontransferclubD}`)}`;
         field_ = !field_;
         clock1 -= parseInt(`${clock1}`) >> (Math.min(5, Math.abs(3)));
       let bannerS = String.fromCharCode(99,97,109,112,97,105,103,110,95,114,95,54,57,0);
         bannerS += "3";
         relatedg += reactnativejsn.length;
      predictiono += "1";
      break;
   }
   if (!libturbomodulejsijni9.startsWith(`${iconpointscoreu.size}`)) {
      libturbomodulejsijni9 = `${predictionarrowl.size}`;
   }

    

   do {
       let stationsL = false;
       let incidentB = false;
      for (let d = 0; d < 3; d++) {
          let iconwatcht = String.fromCharCode(120,95,49,54,95,109,117,109,98,97,105,0);
          let tickedG = [478, 396, 120];
          let crosse = String.fromCharCode(104,95,55,54,95,114,101,115,111,108,118,0);
         incidentB = String.fromCharCode(82,0) == crosse && 65 <= tickedG.length;
         iconwatcht += `${iconwatcht.length >> (Math.min(Math.abs(3), 1))}`;
         tickedG.push(iconwatcht.length % 3);
      }
       let mimeM = 3.0;
       let libreactnativeblobb = 1.0;
      if (!incidentB) {
         incidentB = !stationsL || !incidentB;
      }
          let orangeP = String.fromCharCode(100,95,56,55,95,116,111,110,101,0);
          let uploadN = 0;
         mimeM *= (parseFloat(`${(stationsL ? 4 : 3) % (Math.max((incidentB ? 2 : 3), 9))}`));
         orangeP += `${orangeP.length + uploadN}`;
         uploadN *= orangeP.length / 2;
         mimeM *= parseFloat(`${1}`);
      if (2.29 > (5.61 + libreactnativeblobb)) {
         stationsL = 80.33 > libreactnativeblobb;
      }
      plusC += parseFloat(`${parseInt(`${runtimeschedulerr}`)}`);
      if (plusC == 4388639.0) {
         break;
      }
   } while ((plusC == 4388639.0) && (iconnewssharep.endsWith(`${plusC}`)));
       let selectionw = String.fromCharCode(120,95,56,53,95,115,116,117,102,102,105,110,103,0);
       let notificationfillemptyI = String.fromCharCode(106,95,50,55,95,99,102,102,116,105,0);
       let cedbadcebfbfbfbcfecbcY = String.fromCharCode(122,95,57,55,95,110,111,116,105,99,101,0);
      while (selectionw != String.fromCharCode(54,0)) {
         notificationfillemptyI += `${cedbadcebfbfbfbcfecbcY.length - notificationfillemptyI.length}`;
         break;
      }
      for (let w = 0; w < 3; w++) {
          let confirmationu = String.fromCharCode(99,95,50,50,95,118,109,100,97,117,100,105,111,0);
          let othero = 5;
          let basketballiconR = false;
          let libswscaleJ = 4;
         selectionw += `${((basketballiconR ? 2 : 1) % (Math.max(libswscaleJ, 5)))}`;
         confirmationu += `${confirmationu.length % 3}`;
         othero >>= Math.min(Math.abs((String.fromCharCode(109,0) == confirmationu ? confirmationu.length : othero)), 5);
         basketballiconR = (confirmationu.length + othero) > 73;
         libswscaleJ *= confirmationu.length ^ 3;
      }
          let libreactperfloggerjnig = new Map([[String.fromCharCode(107,95,50,54,95,108,105,98,114,97,114,105,101,115,0),777], [String.fromCharCode(108,95,55,48,95,99,111,109,112,108,101,116,101,115,0),144], [String.fromCharCode(119,95,57,52,95,102,111,108,108,111,119,101,114,115,0),385]]);
          let yellowscoreballz = false;
          let libtobS = String.fromCharCode(118,95,54,50,95,105,110,115,116,97,110,99,101,0);
         selectionw += `${notificationfillemptyI.length / (Math.max(8, libtobS.length))}`;
         libreactperfloggerjnig = new Map([[`${libreactperfloggerjnig.size}`, libreactperfloggerjnig.size]]);
         yellowscoreballz = libreactperfloggerjnig.size <= 7;
         libtobS += "2";
         notificationfillemptyI = `${selectionw.length}`;
         cedbadcebfbfbfbcfecbcY += `${selectionw.length}`;
          let basketballawayteamw = String.fromCharCode(97,95,57,56,95,108,105,102,101,99,121,99,108,101,0);
         notificationfillemptyI += "1";
         basketballawayteamw = "1";
         notificationfillemptyI = `${notificationfillemptyI.length}`;
      do {
         selectionw += `${cedbadcebfbfbfbcfecbcY.length}`;
         if (String.fromCharCode(107,50,114,104,112,99,111,122,117,0) == selectionw) {
            break;
         }
      } while ((!notificationfillemptyI.includes(selectionw)) && (String.fromCharCode(107,50,114,104,112,99,111,122,117,0) == selectionw));
         selectionw = `${cedbadcebfbfbfbcfecbcY.length - notificationfillemptyI.length}`;
      libapminsightaN.push(1 - predictionarrowl.size);
   do {
       let libcrashsdkL = [728, 642, 587];
       let greyarrowup5 = [String.fromCharCode(105,110,116,102,105,95,105,95,50,49,0), String.fromCharCode(99,114,111,108,108,95,57,95,57,54,0), String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,103,95,52,48,0)];
       let profilepicX = true;
       let sellA = false;
       let reactnativeratings0 = 3.0;
      if (!profilepicX) {
          let countdowno = String.fromCharCode(116,105,109,101,103,109,95,106,95,55,49,0);
          let zhubo_ = 1.0;
          let phonel = String.fromCharCode(105,95,55,54,95,99,111,110,102,105,103,117,114,97,116,105,110,0);
          let videobufferloadingA = true;
         profilepicX = 47 >= phonel.length || zhubo_ >= 50.99;
         countdowno = `${((videobufferloadingA ? 3 : 1))}`;
         zhubo_ /= Math.max(5, parseFloat(`${countdowno.length}`));
         phonel = `${countdowno.length}`;
      }
      if (sellA || profilepicX) {
         sellA = !sellA;
      }
       let package_sc = 2;
       let stringM = 4;
      for (let x = 0; x < 1; x++) {
          let update_nsN = 4.0;
         reactnativeratings0 /= Math.max(3 / (Math.max(6, stringM)), 5);
         update_nsN /= Math.max(parseFloat(`${3}`), 5);
      }
      for (let l = 0; l < 3; l++) {
         profilepicX = sellA || 17 >= package_sc;
      }
         reactnativeratings0 *= 1 / (Math.max(9, package_sc));
         stringM >>= Math.min(2, Math.abs(parseInt(`${reactnativeratings0}`)));
       let lineO = String.fromCharCode(112,111,112,117,108,97,116,101,100,95,114,95,57,53,0);
      for (let d = 0; d < 2; d++) {
          let backwardg = 3;
          let gemfileS = 5.0;
          let iconbackwhiteF = String.fromCharCode(104,97,110,100,101,114,95,110,95,52,52,0);
          let index_ = String.fromCharCode(105,95,54,48,95,104,117,103,103,105,110,103,0);
          let sigmoby = 5;
         package_sc &= 1 & iconbackwhiteF.length;
         backwardg ^= 1 >> (Math.min(4, Math.abs(backwardg)));
         gemfileS *= parseFloat(`${2}`);
         iconbackwhiteF += `${(String.fromCharCode(73,0) == index_ ? backwardg : index_.length)}`;
         sigmoby >>= Math.min(1, Math.abs(parseInt(`${gemfileS}`) * backwardg));
      }
      while (sellA && 3 > (2 * package_sc)) {
          let penaltyr = String.fromCharCode(99,108,111,110,101,95,118,95,57,51,0);
          let footballtrophyZ = 2.0;
          let thumbnailJ = [String.fromCharCode(117,110,105,102,105,101,100,95,102,95,53,54,0), String.fromCharCode(102,105,110,100,101,112,95,105,95,53,0)];
          let cricketZ = 0.0;
         package_sc &= (lineO.length * (profilepicX ? 5 : 1));
         penaltyr += `${3 * penaltyr.length}`;
         footballtrophyZ -= parseFloat(`${1}`);
         thumbnailJ.push(parseInt(`${cricketZ}`));
         cricketZ -= parseFloat(`${parseInt(`${footballtrophyZ}`)}`);
         break;
      }
      do {
         stringM *= ((profilepicX ? 2 : 2) - parseInt(`${reactnativeratings0}`));
         if (1136696 == stringM) {
            break;
         }
      } while ((1136696 == stringM) && (lineO.length > stringM));
      while ((package_sc >> (Math.min(Math.abs(2), 3))) <= 5 && 3 <= (2 >> (Math.min(2, Math.abs(package_sc))))) {
         package_sc -= libcrashsdkL.length;
         break;
      }
         reactnativeratings0 *= 2;
      if ((reactnativeratings0 * libcrashsdkL.length) == 4.32 || 1.1 == (reactnativeratings0 * 4.32)) {
          let mailp = String.fromCharCode(121,95,54,50,95,99,101,108,108,115,0);
          let libhermesa = [31, 889];
          let circleI = String.fromCharCode(99,95,52,51,0);
          let bang3 = 4.0;
         libcrashsdkL = [3 >> (Math.min(Math.abs(stringM), 3))];
         mailp = `${mailp.length ^ libhermesa.length}`;
         libhermesa = [circleI.length];
         circleI += `${circleI.length ^ libhermesa.length}`;
         bang3 /= Math.max(4, (String.fromCharCode(68,0) == circleI ? libhermesa.length : circleI.length));
      }
         stringM *= 3;
      plusC += parseFloat(`${iconpointscoreu.size}`);
      greyarrowup5 = [greyarrowup5.length];
      if (1924628.0 == plusC) {
         break;
      }
   } while ((1924628.0 == plusC) && ((2.16 + plusC) == 3.55));
       let libswscale0 = String.fromCharCode(105,112,113,102,95,57,95,50,52,0);
       let incidentn = [655, 93];
       let hometeamfield2 = true;
      while (3 <= (incidentn.length | libswscale0.length)) {
          let libapminsightbe = false;
          let signinupq = new Map([[String.fromCharCode(100,95,56,55,95,114,101,118,101,114,98,0),949], [String.fromCharCode(107,95,50,50,95,97,117,116,111,114,101,118,101,114,115,101,115,0),371], [String.fromCharCode(116,111,109,105,99,95,48,95,57,52,0),78]]);
         incidentn.push(((libapminsightbe ? 3 : 1)));
         libapminsightbe = (signinupq.size | signinupq.size) > 64;
         break;
      }
         libswscale0 = `${((hometeamfield2 ? 4 : 4) / 3)}`;
      while (1 > (incidentn.length - 3)) {
          let catalogK = String.fromCharCode(111,95,57,54,0);
         hometeamfield2 = 77 <= incidentn.length;
         catalogK += "3";
         break;
      }
      do {
         hometeamfield2 = libswscale0.length >= 38 || !hometeamfield2;
         if (hometeamfield2 ? !hometeamfield2 : hometeamfield2) {
            break;
         }
      } while ((4 <= (2 - incidentn.length)) && (hometeamfield2 ? !hometeamfield2 : hometeamfield2));
      for (let k = 0; k < 2; k++) {
         libswscale0 += `${incidentn.length}`;
      }
      libapminsightaN.push(iconnewssharep.length);
   do {
      lightI /= Math.max(parseFloat(`${iconnewssharep.length - 1}`), 2);
      if (2006905.0 == lightI) {
         break;
      }
   } while (((2 % (Math.max(3, libturbomodulejsijni9.length))) < 4) && (2006905.0 == lightI));
    

       let chatroombackgroundK = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,48,95,54,50,0);
       let productS = String.fromCharCode(115,98,119,97,105,116,95,104,95,55,52,0);
         chatroombackgroundK = `${productS.length >> (Math.min(chatroombackgroundK.length, 5))}`;
      while (productS != String.fromCharCode(112,0)) {
          let downloadl = 1.0;
          let iconmore3 = true;
         chatroombackgroundK = `${(parseInt(`${downloadl}`) / (Math.max(9, (iconmore3 ? 5 : 3))))}`;
         break;
      }
          let detailse = false;
         chatroombackgroundK += `${((detailse ? 3 : 5) % (Math.max(productS.length, 10)))}`;
          let eighteenP = new Map([[String.fromCharCode(112,97,99,107,101,116,105,122,101,114,95,113,95,53,56,0),true ], [String.fromCharCode(109,95,51,52,95,117,110,105,118,101,114,115,97,108,0),false ], [String.fromCharCode(100,95,51,50,95,115,101,114,105,97,108,105,122,97,98,108,101,0),true ]]);
         chatroombackgroundK = `${chatroombackgroundK.length}`;
         eighteenP = new Map([[`${eighteenP.size}`, eighteenP.size]]);
      if (productS.length == 1 || chatroombackgroundK == String.fromCharCode(54,0)) {
         productS += `${productS.length >> (Math.min(chatroombackgroundK.length, 2))}`;
      }
         productS = `${(String.fromCharCode(99,0) == productS ? chatroombackgroundK.length : productS.length)}`;
      predictiono = `${parseInt(`${runtimeschedulerr}`) * chatroombackgroundK.length}`;
   do {
      greytick4 += `${iconnewssharep.length}`;
      if (4244286 == greytick4.length) {
         break;
      }
   } while ((4244286 == greytick4.length) && (4 <= (parseInt(`${runtimeschedulerr}`) * greytick4.length) && (runtimeschedulerr * parseFloat(`${greytick4.length}`)) <= 1.66));
       let f_countg = 3;
      if (2 < f_countg) {
         f_countg %= Math.max(1, 2);
      }
          let countdownc = true;
          let phoneT = 5;
         f_countg &= 2;
         countdownc = !countdownc;
         phoneT -= 2;
          let iconbackwhitei = new Map([[String.fromCharCode(115,95,57,51,95,97,117,116,111,114,101,118,101,114,115,101,115,0),200], [String.fromCharCode(107,95,57,53,95,100,111,119,110,115,97,109,112,108,101,0),808]]);
          let productw = 5;
          let reminderE = String.fromCharCode(108,95,54,52,0);
         f_countg <<= Math.min(5, Math.abs(1));
         iconbackwhitei[`${productw}`] = productw / (Math.max(10, iconbackwhitei.size));
         reminderE += "3";
      predictionarrowl[`${runtimeschedulerr}`] = predictionarrowl.size;
   for (let n = 0; n < 2; n++) {
      iconpointscoreu[`${plusC}`] = predictiono.length % (Math.max(5, parseInt(`${plusC}`)));
   }
      greytick4 += `${libapminsightaN.length + 2}`;
    setIsLoading(true);
   while ((predictionarrowl.size * parseInt(`${runtimeschedulerr}`)) <= 5 && 5 <= (predictionarrowl.size * parseInt(`${runtimeschedulerr}`))) {
       let defaultfootballbgk = 4;
       let successj = String.fromCharCode(110,95,52,50,95,115,105,103,105,108,108,0);
      for (let r = 0; r < 2; r++) {
          let become7 = 1;
          let mbnative0 = new Map([[String.fromCharCode(108,95,50,55,95,99,111,110,118,101,114,116,101,114,0),String.fromCharCode(116,95,53,56,95,100,105,114,101,99,116,111,114,105,101,115,0)], [String.fromCharCode(105,110,116,120,120,95,115,95,49,53,0),String.fromCharCode(105,95,51,55,95,98,114,105,100,103,101,97,98,108,101,0)]]);
          let iconarrowrighth = 5;
         successj += `${become7}`;
         become7 |= iconarrowrighth % (Math.max(6, mbnative0.size));
         mbnative0[`${iconarrowrighth}`] = 2 | iconarrowrighth;
      }
          let whatsapp2 = false;
          let leagueD = new Map([[String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,114,95,53,51,0),759], [String.fromCharCode(117,112,103,114,97,100,101,100,95,50,95,49,49,0),202], [String.fromCharCode(108,101,109,111,110,95,117,95,54,51,0),180]]);
         successj += `${defaultfootballbgk}`;
         whatsapp2 = !whatsapp2;
         leagueD[`${whatsapp2}`] = 2;
      do {
         successj += `${successj.length << (Math.min(5, Math.abs(defaultfootballbgk)))}`;
         if (1923449 == successj.length) {
            break;
         }
      } while ((1923449 == successj.length) && ((defaultfootballbgk >> (Math.min(successj.length, 5))) > 5));
      do {
         successj += `${defaultfootballbgk}`;
         if (3417401 == successj.length) {
            break;
         }
      } while ((3417401 == successj.length) && (5 >= (defaultfootballbgk ^ successj.length) && (successj.length ^ 5) >= 4));
          let classest = 0.0;
         successj += `${2 + defaultfootballbgk}`;
         classest *= parseInt(`${classest}`) << (Math.min(3, Math.abs(parseInt(`${classest}`))));
         successj += `${successj.length}`;
      runtimeschedulerr /= Math.max(4, parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${runtimeschedulerr}`)), 1))}`));
      break;
   }
      runtimeschedulerr += parseFloat(`${predictionarrowl.size / (Math.max(3, 3))}`);
   while (3 <= (2 % (Math.max(2, libturbomodulejsijni9.length))) || (libturbomodulejsijni9.length % (Math.max(2, iconpointscoreu.size))) <= 2) {
       let storeM = 0;
       let baselinem = 3.0;
      if (4 > storeM) {
         storeM *= parseInt(`${baselinem}`) - 2;
      }
         baselinem += parseFloat(`${parseInt(`${baselinem}`) | 3}`);
      for (let n = 0; n < 2; n++) {
          let androidk = String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,51,95,50,51,0);
         baselinem += parseFloat(`${parseInt(`${baselinem}`)}`);
         androidk += `${androidk.length}`;
      }
          let emojiu = 4.0;
         storeM *= 2 - parseInt(`${emojiu}`);
      if (2.15 > (baselinem * parseFloat(`${storeM}`)) && 4 > (4 & storeM)) {
          let penaltyshootb = String.fromCharCode(108,95,49,54,95,115,117,98,99,101,108,0);
          let homeiconu = 1.0;
          let basketballiconV = [623, 931];
          let currentQ = String.fromCharCode(105,103,110,101,116,116,101,95,118,95,56,51,0);
          let nterstitialX = String.fromCharCode(114,111,117,116,105,110,115,95,116,95,52,56,0);
         storeM ^= currentQ.length + 1;
         penaltyshootb += `${basketballiconV.length % (Math.max(3, 10))}`;
         homeiconu -= parseFloat(`${3 + basketballiconV.length}`);
         currentQ += "2";
         nterstitialX += "1";
      }
         storeM -= parseInt(`${baselinem}`) << (Math.min(2, Math.abs(storeM)));
      iconpointscoreu[`${storeM}`] = storeM;
      break;
   }
   while (parseFloat(`${predictiono.length}`) <= chatk) {
       let successR = true;
       let selection0 = [String.fromCharCode(115,104,97,114,112,110,101,115,115,95,98,95,49,53,0), String.fromCharCode(114,95,49,49,0)];
       let data8 = 2.0;
       let borderlessI = 1.0;
       let regeng0 = String.fromCharCode(107,95,49,57,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0);
      do {
         borderlessI *= parseInt(`${borderlessI}`) >> (Math.min(Math.abs(3), 3));
         if (borderlessI == 3596706.0) {
            break;
         }
      } while ((borderlessI == 3596706.0) && ((3.98 - borderlessI) == 1.29));
      do {
         successR = !successR;
         if (successR ? !successR : successR) {
            break;
         }
      } while ((successR ? !successR : successR) && ((data8 / 1.10) < 5.80 || successR));
      for (let g = 0; g < 1; g++) {
          let philippines3 = new Map([[String.fromCharCode(112,97,103,101,111,117,116,95,114,95,54,51,0),371], [String.fromCharCode(99,95,52,56,95,114,101,115,111,117,114,99,101,115,0),375]]);
          let matchg = 0.0;
          let libavfilterZ = true;
          let leagueM = String.fromCharCode(109,115,109,112,101,103,118,95,54,95,49,0);
         regeng0 = `${philippines3.size}`;
         philippines3[`${libavfilterZ}`] = ((libavfilterZ ? 4 : 1) >> (Math.min(Math.abs(parseInt(`${matchg}`)), 5)));
         matchg += ((libavfilterZ ? 1 : 2) + parseInt(`${matchg}`));
         leagueM += `${(parseInt(`${matchg}`) | (libavfilterZ ? 2 : 1))}`;
      }
      while (data8 >= borderlessI) {
          let referrerL = String.fromCharCode(101,120,112,108,97,105,110,95,101,95,53,57,0);
          let upgradeY = [8, 741, 849];
          let modules9 = 2;
          let executorT = 0.0;
          let rncoreI = [925, 946, 963];
         borderlessI += regeng0.length + upgradeY.length;
         referrerL += `${referrerL.length / 2}`;
         upgradeY = [parseInt(`${executorT}`)];
         modules9 <<= Math.min(1, Math.abs(2 ^ referrerL.length));
         executorT += parseFloat(`${2}`);
         rncoreI = [3];
         break;
      }
          let libswresamplex = String.fromCharCode(108,95,50,48,95,115,117,98,100,97,116,97,0);
         borderlessI /= Math.max((String.fromCharCode(98,0) == regeng0 ? regeng0.length : (successR ? 4 : 3)), 1);
         libswresamplex = `${libswresamplex.length - 3}`;
          let settingT = String.fromCharCode(97,99,114,111,110,121,109,115,95,101,95,56,50,0);
          let iconeditm = String.fromCharCode(120,95,54,53,95,109,111,110,111,116,111,110,105,116,121,0);
          let searchbar2 = String.fromCharCode(119,101,108,108,98,101,104,97,118,101,100,95,119,95,57,0);
         borderlessI /= Math.max(settingT.length % (Math.max(searchbar2.length, 7)), 3);
         settingT += `${iconeditm.length}`;
         iconeditm += "1";
         selection0 = [selection0.length + 2];
      for (let o = 0; o < 3; o++) {
          let teamdetailsbg1 = 2.0;
          let screenY = [67, 845, 900];
         borderlessI *= screenY.length - parseInt(`${borderlessI}`);
         teamdetailsbg1 *= parseFloat(`${3 ^ parseInt(`${teamdetailsbg1}`)}`);
         screenY.push(parseInt(`${teamdetailsbg1}`));
      }
      for (let s = 0; s < 1; s++) {
          let delegate_qn = String.fromCharCode(100,105,114,97,99,100,115,112,95,99,95,54,52,0);
         selection0.push((regeng0 == String.fromCharCode(110,0) ? parseInt(`${borderlessI}`) : regeng0.length));
         delegate_qn = `${delegate_qn.length}`;
      }
         borderlessI /= Math.max(4, 1 ^ selection0.length);
      do {
         selection0.push(parseInt(`${data8}`) - 3);
         if (selection0.length == 846103) {
            break;
         }
      } while ((successR || (1 & selection0.length) < 1) && (selection0.length == 846103));
          let customx = String.fromCharCode(101,95,56,50,95,99,111,110,115,116,114,97,105,110,0);
          let selectedn = [411, 355];
          let brightnessS = String.fromCharCode(116,114,110,115,95,51,95,53,54,0);
         borderlessI -= selectedn.length;
         customx += `${customx.length}`;
         selectedn.push(customx.length);
         brightnessS = `${brightnessS.length}`;
      for (let f = 0; f < 1; f++) {
         regeng0 = `${regeng0.length | 2}`;
      }
      for (let p = 0; p < 1; p++) {
         regeng0 += `${selection0.length}`;
      }
      if (selection0.includes(borderlessI)) {
         borderlessI += 1 % (Math.max(8, parseInt(`${data8}`)));
      }
      chatk += parseFloat(`${parseInt(`${borderlessI}`)}`);
      break;
   }
   do {
       let gmail2 = String.fromCharCode(116,95,55,50,95,117,112,100,97,116,101,0);
       let rocketJ = 3.0;
       let homeplayerG = 5.0;
      do {
         homeplayerG /= Math.max(4, parseInt(`${rocketJ}`));
         if (homeplayerG == 3089631.0) {
            break;
         }
      } while ((homeplayerG == 3089631.0) && (4.65 > (homeplayerG + rocketJ)));
         rocketJ *= 2;
      chatk /= Math.max(parseFloat(`${predictiono.length + gmail2.length}`), 3);
      if (chatk == 406895.0) {
         break;
      }
   } while (((iconpointscoreu.size - 4) < 3 && (1.81 / (Math.max(4, chatk))) < 4.77) && (chatk == 406895.0));

    if (typeof props.onLoadStart === 'function') {

   for (let q = 0; q < 3; q++) {
      lightI /= Math.max(4, parseFloat(`${2}`));
   }
   while (lightI >= parseFloat(`${iconpointscoreu.size}`)) {
       let backO = true;
       let long_6S = String.fromCharCode(101,95,49,95,101,108,105,103,105,98,108,101,0);
       let defaultroombgA = false;
       let libflipperX = String.fromCharCode(100,95,49,51,95,105,110,100,101,110,116,101,100,0);
       let editk = false;
      for (let p = 0; p < 1; p++) {
          let libreanimatedN = false;
          let nativemoduleY = String.fromCharCode(100,95,52,49,95,110,111,109,105,110,97,116,101,0);
         defaultroombgA = !libflipperX.includes(`${editk}`);
         libreanimatedN = nativemoduleY.length == 74;
         nativemoduleY += `${(String.fromCharCode(80,0) == nativemoduleY ? (libreanimatedN ? 1 : 2) : nativemoduleY.length)}`;
      }
         editk = long_6S.includes(`${backO}`);
         defaultroombgA = !defaultroombgA || backO;
      if (!libflipperX.endsWith(`${editk}`)) {
         editk = (defaultroombgA ? !editk : defaultroombgA);
      }
          let kuaishoul = new Map([[String.fromCharCode(112,97,99,107,95,109,95,50,56,0),String.fromCharCode(97,95,54,51,95,101,118,101,110,116,0)], [String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,57,95,57,49,0),String.fromCharCode(108,101,103,101,110,100,95,112,95,56,49,0)], [String.fromCharCode(111,112,116,105,109,105,122,101,100,95,54,95,51,49,0),String.fromCharCode(99,111,111,114,100,115,95,104,95,53,52,0)]]);
          let headerB = String.fromCharCode(109,95,52,56,95,114,101,115,105,108,105,101,110,99,101,0);
         long_6S = `${3 + long_6S.length}`;
         kuaishoul = new Map([[`${kuaishoul.size}`, kuaishoul.size | headerB.length]]);
         headerB += `${kuaishoul.size}`;
       let dependencyG = 3.0;
       let targetA = 4.0;
         editk = !defaultroombgA;
         editk = !long_6S.endsWith(`${dependencyG}`);
          let navigationT = String.fromCharCode(119,95,50,52,95,115,121,110,116,104,101,115,105,115,0);
          let manifesto = String.fromCharCode(108,95,57,57,95,97,108,115,101,0);
         dependencyG /= Math.max((parseFloat(`${1 % (Math.max(9, (backO ? 2 : 5)))}`)), 4);
         navigationT += `${navigationT.length}`;
         manifesto = "3";
      do {
          let config1 = String.fromCharCode(104,95,48,95,100,111,116,108,111,99,107,0);
         backO = long_6S.endsWith(`${backO}`);
         config1 = `${config1.length << (Math.min(Math.abs(3), 5))}`;
         if (backO ? !backO : backO) {
            break;
         }
      } while ((!long_6S.endsWith(`${backO}`)) && (backO ? !backO : backO));
       let imagenetworkerrM = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,95,107,95,55,50,0),String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,95,49,95,54,0)], [String.fromCharCode(117,95,50,52,95,109,101,97,115,117,114,101,0),String.fromCharCode(114,95,54,55,95,105,115,111,112,101,110,113,117,111,116,101,0)]]);
         defaultroombgA = long_6S.length >= 62;
         imagenetworkerrM[`${defaultroombgA}`] = 3;
          let playH = [526, 364, 258];
          let whiteS = 0.0;
         editk = null != imagenetworkerrM[`${backO}`];
         playH = [playH.length | 1];
         whiteS -= parseFloat(`${2 + playH.length}`);
         long_6S += `${3 * parseInt(`${targetA}`)}`;
      lightI -= parseFloat(`${projectM}`);
      break;
   }
       let neonB = new Map([[String.fromCharCode(102,95,55,51,95,107,101,114,110,101,114,0),true ], [String.fromCharCode(112,114,101,115,117,109,101,95,118,95,52,55,0),true ]]);
       let dangers = String.fromCharCode(107,95,53,55,95,101,120,112,97,110,100,97,98,108,101,0);
       let runtimeschedulerU = false;
         dangers = `${(1 | (runtimeschedulerU ? 3 : 3))}`;
       let kickG = String.fromCharCode(101,95,50,56,95,118,114,108,101,0);
      do {
         runtimeschedulerU = kickG == String.fromCharCode(111,0);
         if (runtimeschedulerU ? !runtimeschedulerU : runtimeschedulerU) {
            break;
         }
      } while ((5 >= neonB.size) && (runtimeschedulerU ? !runtimeschedulerU : runtimeschedulerU));
          let settings6 = [914, 33, 344];
          let currento = 4;
          let acceptedF = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,111,95,52,50,0);
         neonB = new Map([[`${settings6.length}`, dangers.length ^ 2]]);
         settings6 = [1 >> (Math.min(3, Math.abs(currento)))];
         currento &= acceptedF.length;
         acceptedF = `${1 - acceptedF.length}`;
      do {
          let verticalc = true;
          let turndownV = String.fromCharCode(121,95,52,52,95,120,99,101,112,116,105,111,110,0);
          let bottomk = String.fromCharCode(112,95,49,56,95,112,114,101,115,101,114,118,101,115,0);
          let statisticsinactivee = String.fromCharCode(115,101,101,107,95,115,95,55,50,0);
          let referrerW = 3.0;
         neonB[turndownV] = 2;
         verticalc = bottomk.length <= 6;
         turndownV = `${(String.fromCharCode(55,0) == bottomk ? (verticalc ? 2 : 3) : bottomk.length)}`;
         statisticsinactivee += `${statisticsinactivee.length}`;
         referrerW += (parseFloat(`${bottomk == String.fromCharCode(75,0) ? (verticalc ? 1 : 5) : bottomk.length}`));
         if (2442788 == neonB.size) {
            break;
         }
      } while ((2442788 == neonB.size) && ((neonB.size + 4) < 1));
         kickG = `${dangers.length}`;
         runtimeschedulerU = neonB.size >= 62;
      for (let m = 0; m < 1; m++) {
          let handler8 = 0.0;
          let routerC = String.fromCharCode(100,111,119,110,108,105,110,107,95,54,95,52,48,0);
          let entryr = String.fromCharCode(99,97,114,114,121,95,52,95,52,48,0);
          let twitter6 = String.fromCharCode(105,110,111,100,101,115,95,104,95,50,51,0);
          let baselineW = 2.0;
         dangers += `${(entryr == String.fromCharCode(54,0) ? entryr.length : neonB.size)}`;
         handler8 /= Math.max(parseFloat(`${1 & routerC.length}`), 4);
         routerC = "1";
         twitter6 = `${parseInt(`${handler8}`) & 1}`;
         baselineW /= Math.max(parseFloat(`${twitter6.length}`), 5);
      }
         dangers += `${neonB.size << (Math.min(Math.abs(1), 1))}`;
      libapminsightaN.push(projectM >> (Math.min(Math.abs(predictionarrowl.size), 3)));
       let homeiconC = String.fromCharCode(103,95,52,95,99,97,112,116,117,114,101,0);
       let turndownx = String.fromCharCode(102,95,49,95,104,97,100,97,109,97,114,100,0);
         turndownx = "1";
      while (homeiconC.length > turndownx.length) {
         homeiconC += `${turndownx.length}`;
         break;
      }
         turndownx += `${(turndownx == String.fromCharCode(95,0) ? turndownx.length : homeiconC.length)}`;
       let handler3 = 4;
          let cornerr = false;
          let hooku = 5;
          let countryM = 1;
         turndownx = "1";
         cornerr = countryM == 5;
         hooku += countryM;
      for (let q = 0; q < 3; q++) {
         homeiconC += `${turndownx.length}`;
      }
      inouttargetreds -= libturbomodulejsijni9.length;
   do {
       let rankF = 3.0;
       let awayteamfieldN = String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,95,56,95,56,57,0);
      if (2.81 > (awayteamfieldN.length + rankF)) {
         rankF += parseInt(`${rankF}`);
      }
      do {
          let launcherc = 3;
         awayteamfieldN = `${launcherc}`;
         if (String.fromCharCode(107,48,50,121,56,99,0) == awayteamfieldN) {
            break;
         }
      } while ((1 >= awayteamfieldN.length) && (String.fromCharCode(107,48,50,121,56,99,0) == awayteamfieldN));
      if (rankF == 4.100) {
         rankF += parseInt(`${rankF}`);
      }
      if (awayteamfieldN.endsWith(`${rankF}`)) {
         rankF -= awayteamfieldN.length >> (Math.min(2, Math.abs(parseInt(`${rankF}`))));
      }
       let with_2b = String.fromCharCode(112,111,105,110,116,115,95,121,95,52,57,0);
       let buildk = String.fromCharCode(103,95,49,48,95,115,109,111,111,116,104,101,110,0);
      do {
         rankF *= with_2b.length;
         if (rankF == 48389.0) {
            break;
         }
      } while ((3 > (with_2b.length + parseInt(`${rankF}`))) && (rankF == 48389.0));
      projectM &= projectM % (Math.max(2, libapminsightaN.length));
      if (1806631 == projectM) {
         break;
      }
   } while ((1 <= (1 & iconnewssharep.length) && (1 & projectM) <= 3) && (1806631 == projectM));
      props.onLoadStart(...arguments);
      iconpointscoreu[`${projectM}`] = 1 * iconpointscoreu.size;
       let liver = 0.0;
       let heart7 = 4;
       let collection4 = String.fromCharCode(115,95,57,95,112,97,100,100,101,100,0);
      for (let f = 0; f < 1; f++) {
         liver *= parseFloat(`${parseInt(`${liver}`)}`);
      }
          let expiredq = 2.0;
          let eabafadfadddbafeddddeeefeaafh = String.fromCharCode(97,117,116,111,109,97,116,105,99,95,121,95,50,54,0);
         heart7 |= heart7;
         expiredq *= (parseFloat(`${eabafadfadddbafeddddeeefeaafh == String.fromCharCode(117,0) ? parseInt(`${expiredq}`) : eabafadfadddbafeddddeeefeaafh.length}`));
         liver += parseFloat(`${heart7 + 3}`);
          let u_unlockp = 3;
         heart7 <<= Math.min(Math.abs(parseInt(`${liver}`)), 3);
         u_unlockp += 3 >> (Math.min(4, Math.abs(u_unlockp)));
         collection4 = `${heart7 % (Math.max(parseInt(`${liver}`), 9))}`;
          let cancelC = [926, 168, 556];
          let typingR = 5;
         heart7 &= (collection4 == String.fromCharCode(98,0) ? parseInt(`${liver}`) : collection4.length);
         cancelC = [typingR];
         typingR -= 3 - typingR;
      if ((heart7 & 4) == 2 && (heart7 % 4) == 1) {
         heart7 >>= Math.min(Math.abs(2), 2);
      }
      do {
         liver += parseFloat(`${heart7}`);
         if (3154169.0 == liver) {
            break;
         }
      } while ((3154169.0 == liver) && (heart7 > liver));
      for (let b = 0; b < 2; b++) {
         collection4 += `${(String.fromCharCode(107,0) == collection4 ? heart7 : collection4.length)}`;
      }
      libapminsightaN.push(iconnewssharep.length * libapminsightaN.length);
      predictiono = `${parseInt(`${inouttargetreds}`)}`;
       let hooksr = 3;
         hooksr %= Math.max(1, hooksr & 2);
       let b_titlej = 1;
      if ((4 << (Math.min(4, Math.abs(b_titlej)))) > 3 || 2 > (hooksr << (Math.min(Math.abs(4), 5)))) {
          let catalog0 = new Map([[String.fromCharCode(97,95,51,52,95,97,118,114,101,115,97,109,112,108,101,0),527], [String.fromCharCode(115,101,110,100,101,114,95,116,95,52,53,0),406], [String.fromCharCode(110,95,53,57,95,99,101,110,116,114,97,108,0),225]]);
          let showlessr = String.fromCharCode(109,111,118,101,95,53,95,49,53,0);
          let sinaX = String.fromCharCode(112,95,49,51,95,112,114,101,115,101,110,99,101,0);
          let heartD = 5;
         hooksr >>= Math.min(Math.abs(heartD), 5);
         catalog0 = new Map([[`${catalog0.size}`, catalog0.size ^ 3]]);
         showlessr += "2";
         sinaX = `${2 / (Math.max(1, catalog0.size))}`;
         heartD %= Math.max(1, 2 + showlessr.length);
      }
      predictiono = `${3 - libapminsightaN.length}`;
   do {
      libapminsightaN = [parseInt(`${runtimeschedulerr}`)];
      if (libapminsightaN.length == 865546) {
         break;
      }
   } while ((chatk <= 2.20) && (libapminsightaN.length == 865546));

    }
  };
  const onLoad = () => {
       let tailM = 4.0;
    let cornershootX = new Map([[String.fromCharCode(97,95,55,50,95,100,101,110,111,105,115,101,114,0),String.fromCharCode(97,95,50,55,95,120,100,99,97,109,0)], [String.fromCharCode(110,111,116,103,101,116,95,112,95,50,48,0),String.fromCharCode(113,95,53,50,95,112,105,110,110,101,114,0)], [String.fromCharCode(102,111,114,103,101,116,95,102,95,54,52,0),String.fromCharCode(98,114,111,107,101,110,95,48,95,52,51,0)]]);
    let predictionarrowT = false;
    let q_positionU = true;
    let single6 = String.fromCharCode(115,116,114,110,115,116,114,95,117,95,56,57,0);
    let iconshareO = 4;
    let whitetickj = true;
    let typinge = String.fromCharCode(116,114,101,110,100,105,110,103,95,49,95,55,57,0);
    let xnews_ = String.fromCharCode(115,109,111,111,116,104,95,109,95,52,57,0);
    let awayiconi = String.fromCharCode(114,109,115,105,112,114,95,113,95,55,50,0);
    let zhubom = new Map([[String.fromCharCode(98,95,54,56,95,114,101,100,101,116,101,99,116,0),395], [String.fromCharCode(115,101,110,116,101,110,99,101,95,102,95,51,0),607], [String.fromCharCode(118,95,55,56,95,110,101,111,110,0),853]]);
    let libfb0 = 1.0;
    let iconadslinkT = [String.fromCharCode(107,95,57,54,95,98,117,116,116,101,114,119,111,114,116,104,0), String.fromCharCode(100,95,51,48,95,117,115,101,0)];
    let friendsc = 0;
   for (let v = 0; v < 1; v++) {
      zhubom[single6] = ((q_positionU ? 5 : 4) % 2);
   }
   do {
      zhubom = new Map([[`${iconshareO}`, iconshareO]]);
      if (zhubom.size == 1012037) {
         break;
      }
   } while ((zhubom.size == 1012037) && (5.16 <= (parseFloat(`${zhubom.size}`) + libfb0)));
   do {
      iconshareO -= parseInt(`${tailM}`);
      if (2698855 == iconshareO) {
         break;
      }
   } while ((2698855 == iconshareO) && (iconshareO == 5));
   for (let l = 0; l < 1; l++) {
      xnews_ = "3";
   }
   while (predictionarrowT) {
      predictionarrowT = whitetickj || 38.100 < tailM;
      break;
   }
   for (let i = 0; i < 3; i++) {
       let bgvipxvodP = String.fromCharCode(97,95,50,56,0);
       let hongkongD = String.fromCharCode(118,97,108,117,101,100,95,116,95,52,48,0);
      while (hongkongD == String.fromCharCode(80,0)) {
         bgvipxvodP += `${bgvipxvodP.length}`;
         break;
      }
      for (let p = 0; p < 2; p++) {
          let libswresampled = 2.0;
          let tumbnailo = 4.0;
          let incidentU = [606, 942];
          let libfbjnic = 2.0;
          let mimeh = String.fromCharCode(112,114,111,109,105,115,105,102,121,95,101,95,53,56,0);
         hongkongD = `${parseInt(`${libfbjnic}`) << (Math.min(3, Math.abs(1)))}`;
         libswresampled *= 3 % (Math.max(parseInt(`${libswresampled}`), 6));
         tumbnailo *= incidentU.length;
         incidentU.push(incidentU.length);
         libfbjnic += 2 << (Math.min(5, mimeh.length));
         mimeh = `${parseInt(`${tumbnailo}`) / (Math.max(8, parseInt(`${libswresampled}`)))}`;
      }
      for (let b = 0; b < 1; b++) {
          let loading4 = new Map([[String.fromCharCode(105,95,54,49,95,115,116,101,112,0),957], [String.fromCharCode(114,116,99,119,101,98,95,109,95,53,55,0),91], [String.fromCharCode(110,101,116,101,113,95,100,95,57,52,0),173]]);
         bgvipxvodP += "1";
         loading4 = new Map([[`${loading4.size}`, loading4.size + loading4.size]]);
      }
       let goalc = String.fromCharCode(100,105,115,99,95,104,95,49,48,48,0);
          let filedC = String.fromCharCode(115,101,99,111,110,100,97,114,121,95,113,95,49,48,48,0);
         hongkongD = `${bgvipxvodP.length / (Math.max(goalc.length, 5))}`;
         filedC = `${3 | filedC.length}`;
      while (goalc.length <= 5) {
         hongkongD = `${hongkongD.length}`;
         break;
      }
      awayiconi += `${1 & typinge.length}`;
   }

    

      whitetickj = String.fromCharCode(122,0) == awayiconi || xnews_.length > 100;
   while (xnews_.startsWith(`${cornershootX.size}`)) {
      cornershootX = new Map([[`${whitetickj}`, ((whitetickj ? 5 : 2))]]);
      break;
   }
   for (let p = 0; p < 2; p++) {
      libfb0 *= parseFloat(`${awayiconi.length}`);
   }
      whitetickj = single6.length >= 94 && !q_positionU;
       let iconadslinkb = false;
       let baselineq = 3;
       let shielddoneY = String.fromCharCode(115,95,52,54,95,97,117,100,105,111,99,111,110,118,101,114,116,0);
      while (baselineq >= shielddoneY.length) {
         baselineq >>= Math.min(Math.abs(baselineq), 3);
         break;
      }
      for (let o = 0; o < 2; o++) {
         iconadslinkb = baselineq >= 14;
      }
          let sans9 = 0.0;
          let basketballiconh = String.fromCharCode(111,114,97,110,103,101,95,54,95,57,51,0);
          let libyogaJ = String.fromCharCode(121,95,54,55,95,100,108,105,100,120,0);
         iconadslinkb = 12 == shielddoneY.length || 12 == baselineq;
         sans9 /= Math.max(basketballiconh.length, 1);
         basketballiconh += "1";
         libyogaJ = `${parseInt(`${sans9}`) ^ libyogaJ.length}`;
      while (shielddoneY.length == baselineq) {
          let heartq = String.fromCharCode(119,95,52,95,111,118,97,108,0);
          let teamdetailsbgF = String.fromCharCode(116,95,52,48,95,98,101,97,116,105,110,103,0);
          let fastI = false;
          let smallbrightnessX = String.fromCharCode(99,97,109,112,97,105,103,110,95,98,95,55,0);
         shielddoneY += `${baselineq}`;
         heartq = `${heartq.length}`;
         teamdetailsbgF += `${teamdetailsbgF.length ^ 1}`;
         fastI = teamdetailsbgF == heartq;
         smallbrightnessX += `${teamdetailsbgF.length ^ smallbrightnessX.length}`;
         break;
      }
         baselineq |= baselineq & shielddoneY.length;
      do {
         baselineq -= baselineq;
         if (baselineq == 2982858) {
            break;
         }
      } while ((2 >= shielddoneY.length) && (baselineq == 2982858));
         baselineq &= baselineq;
      while (5 >= (baselineq / 1) || 1 >= baselineq) {
         iconadslinkb = !iconadslinkb;
         break;
      }
      while (5 <= (2 - baselineq) || baselineq <= 2) {
          let vignetteJ = 5.0;
          let imagemanager6 = 3.0;
          let sentryU = true;
          let groupn = true;
          let libtob3 = 3.0;
         iconadslinkb = 20 >= shielddoneY.length && vignetteJ >= 25.72;
         vignetteJ -= parseFloat(`${parseInt(`${libtob3}`) / 3}`);
         imagemanager6 -= 2 & parseInt(`${libtob3}`);
         sentryU = 37.39 >= libtob3;
         groupn = !sentryU;
         break;
      }
      awayiconi = `${(typinge == String.fromCharCode(77,0) ? typinge.length : (iconadslinkb ? 4 : 2))}`;
      whitetickj = single6.length < 63 && q_positionU;
    setIsLoading(false);
   for (let k = 0; k < 1; k++) {
      awayiconi += `${iconshareO}`;
   }
   do {
      libfb0 += parseFloat(`${typinge.length / 3}`);
      if (3090529.0 == libfb0) {
         break;
      }
   } while ((libfb0 <= 3.87 && 4.85 <= (libfb0 / 3.87)) && (3090529.0 == libfb0));
      cornershootX = new Map([[xnews_, awayiconi.length * xnews_.length]]);
   while (single6.endsWith(`${zhubom.size}`)) {
      single6 += `${parseInt(`${tailM}`)}`;
      break;
   }
   if (whitetickj) {
       let clubO = 5.0;
      for (let k = 0; k < 2; k++) {
         clubO /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${clubO}`)), 2)), 3);
      }
      if ((3 / (Math.max(4, clubO))) > 1.54) {
         clubO += parseInt(`${clubO}`) * 1;
      }
      do {
         clubO -= parseInt(`${clubO}`);
         if (clubO == 2874513.0) {
            break;
         }
      } while ((clubO == clubO) && (clubO == 2874513.0));
      whitetickj = libfb0 >= 73.22;
   }
   for (let a = 0; a < 2; a++) {
       let macaud = new Map([[String.fromCharCode(114,95,53,54,95,103,114,97,100,0),870], [String.fromCharCode(106,95,54,55,95,114,103,98,120,0),450]]);
      do {
         macaud = new Map([[`${macaud.size}`, macaud.size]]);
         if (macaud.size == 3722821) {
            break;
         }
      } while ((macaud.size == 3722821) && ((macaud.size % (Math.max(4, 6))) > 3));
         macaud[`${macaud.size}`] = macaud.size - macaud.size;
         macaud[`${macaud.size}`] = macaud.size;
      xnews_ += `${xnews_.length}`;
   }

    setIsError(false);
   for (let m = 0; m < 3; m++) {
       let backgroundV = 5.0;
       let away8 = 2.0;
       let stylem = String.fromCharCode(97,98,108,101,95,98,95,57,48,0);
       let holderN = false;
         away8 /= Math.max(parseFloat(`${1 % (Math.max(5, parseInt(`${away8}`)))}`), 4);
         stylem = `${3 & stylem.length}`;
         backgroundV -= (parseFloat(`${parseInt(`${away8}`) << (Math.min(5, Math.abs((holderN ? 3 : 2))))}`));
      if (stylem.length == 5) {
          let networkG = [427, 145];
         backgroundV -= parseFloat(`${3}`);
         networkG.push(3 % (Math.max(10, networkG.length)));
      }
      if (stylem.length < 3 || holderN) {
         holderN = 80.39 > away8 && backgroundV > 80.39;
      }
      do {
         stylem += `${parseInt(`${away8}`)}`;
         if (stylem == String.fromCharCode(111,53,49,0)) {
            break;
         }
      } while ((!stylem.endsWith(`${backgroundV}`)) && (stylem == String.fromCharCode(111,53,49,0)));
      while (holderN) {
          let iconsettingZ = String.fromCharCode(111,110,101,105,110,99,104,95,98,95,49,0);
         away8 *= parseFloat(`${3}`);
         iconsettingZ = `${iconsettingZ.length}`;
         break;
      }
          let circleL = String.fromCharCode(105,95,57,57,95,116,114,97,99,101,114,0);
          let currentw = new Map([[String.fromCharCode(97,99,116,105,118,101,109,97,112,95,118,95,55,49,0),799], [String.fromCharCode(97,99,116,105,111,110,95,112,95,49,51,0),414]]);
         stylem = `${((holderN ? 4 : 4) & 3)}`;
         circleL = `${circleL.length}`;
         currentw = new Map([[`${currentw.size}`, currentw.size]]);
      whitetickj = String.fromCharCode(117,0) == typinge || 13 == stylem.length;
   }
      whitetickj = 15 > iconshareO;
   if (zhubom[`${cornershootX.size}`] == null) {
      zhubom = new Map([[`${cornershootX.size}`, 2]]);
   }
      q_positionU = !predictionarrowT;
   while (2 > (zhubom.size ^ 4)) {
      typinge += `${3 << (Math.min(4, typinge.length))}`;
      break;
   }
   do {
      predictionarrowT = 48.10 <= tailM;
      if (predictionarrowT ? !predictionarrowT : predictionarrowT) {
         break;
      }
   } while ((predictionarrowT) && (predictionarrowT ? !predictionarrowT : predictionarrowT));

    if (typeof props.onLoad === 'function') {

      libfb0 -= parseFloat(`${cornershootX.size % (Math.max(1, iconshareO))}`);
      cornershootX[typinge] = 2 & typinge.length;
      libfb0 += parseFloat(`${xnews_.length | 3}`);
      typinge += `${zhubom.size}`;
      xnews_ += "2";
   while (1 < (zhubom.size / 5) || 5 < zhubom.size) {
       let libhermes5 = 2.0;
       let libswresample_ = 2.0;
       let utils7 = 3;
       let backwhitem = String.fromCharCode(115,117,98,115,116,114,101,97,109,95,112,95,49,50,0);
          let showlessv = new Map([[String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,49,95,51,57,0),String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,95,105,95,54,55,0)], [String.fromCharCode(115,112,108,97,110,101,95,98,95,57,52,0),String.fromCharCode(101,95,56,53,95,112,97,117,115,101,0)]]);
          let loading9 = 0;
         utils7 /= Math.max(4, parseInt(`${libswresample_}`) >> (Math.min(Math.abs(showlessv.size), 5)));
         showlessv[`${loading9}`] = 1 | loading9;
       let blackh = String.fromCharCode(97,117,100,105,111,112,114,111,99,95,56,95,57,57,0);
       let sortM = 0.0;
       let attributedstring1 = 1.0;
         backwhitem = `${utils7 << (Math.min(backwhitem.length, 2))}`;
      for (let f = 0; f < 2; f++) {
          let iconcalendarq = 0.0;
          let aboutb = String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,53,95,56,50,0);
          let baseline5 = 1.0;
         attributedstring1 *= utils7 / (Math.max(8, backwhitem.length));
         iconcalendarq += parseFloat(`${parseInt(`${iconcalendarq}`)}`);
         aboutb += `${(String.fromCharCode(105,0) == aboutb ? aboutb.length : parseInt(`${baseline5}`))}`;
         baseline5 += parseInt(`${iconcalendarq}`);
      }
         libswresample_ -= 2 ^ blackh.length;
         sortM += 3;
          let dycreatorY = String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,95,100,95,49,55,0);
         attributedstring1 += parseInt(`${libswresample_}`) + parseInt(`${libhermes5}`);
         dycreatorY = `${dycreatorY.length}`;
      if (3.91 >= (5.12 * libswresample_)) {
         blackh = "2";
      }
          let iconscheduleB = String.fromCharCode(108,105,115,116,105,110,103,115,95,101,95,52,0);
          let mergerb = false;
         sortM += 2;
         iconscheduleB = `${iconscheduleB.length - 1}`;
         mergerb = iconscheduleB.length < 39;
         sortM -= parseInt(`${libswresample_}`) << (Math.min(blackh.length, 5));
         libhermes5 /= Math.max(5, blackh.length);
      zhubom = new Map([[awayiconi, ((q_positionU ? 3 : 2))]]);
      break;
   }
      props.onLoad(...arguments);
   do {
      xnews_ = `${(2 << (Math.min(Math.abs((whitetickj ? 1 : 4)), 2)))}`;
      if (String.fromCharCode(52,115,104,49,0) == xnews_) {
         break;
      }
   } while ((4 <= (xnews_.length << (Math.min(1, iconadslinkT.length))) && (xnews_.length << (Math.min(Math.abs(4), 3))) <= 3) && (String.fromCharCode(52,115,104,49,0) == xnews_));
      iconadslinkT = [single6.length];
   while (!whitetickj) {
       let profileactivek = String.fromCharCode(100,101,108,105,109,105,116,101,100,95,49,95,56,55,0);
         profileactivek += `${profileactivek.length << (Math.min(profileactivek.length, 1))}`;
         profileactivek += `${profileactivek.length}`;
      do {
         profileactivek = `${profileactivek.length ^ 2}`;
         if (1400811 == profileactivek.length) {
            break;
         }
      } while ((1400811 == profileactivek.length) && (profileactivek.length >= 1));
      whitetickj = !profileactivek.startsWith(`${q_positionU}`);
      break;
   }
   while (tailM < 5.76) {
      xnews_ = `${((whitetickj ? 1 : 5) & 2)}`;
      break;
   }
   for (let a = 0; a < 2; a++) {
      typinge = `${(String.fromCharCode(88,0) == single6 ? (q_positionU ? 2 : 5) : single6.length)}`;
   }
   while (q_positionU) {
      q_positionU = (predictionarrowT ? !q_positionU : predictionarrowT);
      break;
   }

    }
  };

  const onBuffer = (data = {}) => {
    console.log('onbufffer', data);
    setIsError(false);
    if (data.isBuffering) {
      
    }
    if (!data.isBuffering) {
      
      
    }
  };

  const Loader = () => {
       let minivodw = [String.fromCharCode(105,110,102,108,97,116,101,95,97,95,53,57,0), String.fromCharCode(105,95,54,52,0), String.fromCharCode(117,95,51,51,95,108,105,98,120,0)];
    let watchf = 4.0;
    let description_pn = 0.0;
    let dataL = [String.fromCharCode(100,101,108,105,118,101,114,95,122,95,55,57,0), String.fromCharCode(116,97,115,107,115,95,99,95,54,56,0), String.fromCharCode(105,110,116,102,114,95,116,95,52,50,0)];
    let defaultlogoi = new Map([[String.fromCharCode(115,117,110,114,97,115,116,95,97,95,55,50,0),700], [String.fromCharCode(97,110,111,110,121,109,111,117,115,95,108,95,51,51,0),76], [String.fromCharCode(99,95,56,57,95,98,105,110,115,0),760]]);
    let libavdevice_ = [String.fromCharCode(103,101,109,102,105,108,101,95,104,95,49,53,0), String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,120,95,51,50,0), String.fromCharCode(99,111,100,101,98,111,111,107,115,95,101,95,54,49,0)];
    let footballfiledlayoutA = String.fromCharCode(107,95,52,95,116,105,109,101,111,117,116,0);
    let turn3 = String.fromCharCode(102,116,118,109,111,95,100,95,49,50,0);
    let phoneshareA = String.fromCharCode(99,95,53,57,95,98,111,114,100,101,114,108,101,115,115,0);
    let mbnativeadvanced0 = 2.0;
    let favicona = String.fromCharCode(107,95,57,56,95,99,97,110,118,97,115,0);
    let libbufferO = String.fromCharCode(105,119,104,116,120,95,56,95,52,53,0);
    let filterG = String.fromCharCode(99,95,54,48,95,110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0);
    let matchw = [726, 924, 294];
    let gifgoalbgu = String.fromCharCode(99,111,110,99,101,97,108,95,107,95,57,48,0);
    let bgvipsportT = new Map([[String.fromCharCode(103,101,116,95,110,95,57,55,0),420], [String.fromCharCode(101,95,55,52,95,102,117,108,108,121,0),118]]);
      libavdevice_ = [parseInt(`${description_pn}`) & footballfiledlayoutA.length];
   while (1 < (dataL.length ^ 5) && 5 < (phoneshareA.length ^ dataL.length)) {
      dataL.push(2 % (Math.max(3, libavdevice_.length)));
      break;
   }
   if (3 > (parseInt(`${watchf}`) + turn3.length) && 1.39 > (watchf + 5.92)) {
      turn3 = `${favicona.length}`;
   }

    if (!isLoading) {

   do {
      libavdevice_ = [phoneshareA.length];
      if (2675455 == libavdevice_.length) {
         break;
      }
   } while ((2675455 == libavdevice_.length) && (description_pn < libavdevice_.length));
       let debugj = String.fromCharCode(117,97,110,95,110,95,57,57,0);
         debugj = `${debugj.length + 3}`;
         debugj = `${debugj.length}`;
      do {
         debugj += `${debugj.length / 1}`;
         if (String.fromCharCode(108,122,113,110,122,0) == debugj) {
            break;
         }
      } while ((debugj.includes(debugj)) && (String.fromCharCode(108,122,113,110,122,0) == debugj));
      defaultlogoi = new Map([[`${defaultlogoi.size}`, minivodw.length * 3]]);
   for (let f = 0; f < 2; f++) {
      footballfiledlayoutA = `${3 & filterG.length}`;
   }
      return null;
      watchf -= (String.fromCharCode(87,0) == libbufferO ? turn3.length : libbufferO.length);
       let halffieldimageE = 1.0;
       let handlera = 5;
       let danger1 = 0;
      while (2 >= (danger1 * parseInt(`${halffieldimageE}`)) || (halffieldimageE * 1.14) >= 5.19) {
         halffieldimageE += parseFloat(`${danger1}`);
         break;
      }
         danger1 |= 1 & handlera;
          let applew = String.fromCharCode(118,100,112,97,117,95,109,95,50,55,0);
          let halffieldimageq = 0;
         danger1 >>= Math.min(2, Math.abs(handlera * 3));
         applew = `${applew.length}`;
         halffieldimageq += 2;
       let libreactperfloggerjniV = [116, 652];
      do {
          let controlX = String.fromCharCode(99,95,49,57,95,115,99,114,111,108,108,101,114,0);
          let sellmathbackgroundi = String.fromCharCode(105,95,52,56,95,100,105,116,104,101,114,0);
          let scorepopsounda = String.fromCharCode(110,95,57,95,97,108,115,97,0);
          let filledG = 4;
          let eventg = new Map([[String.fromCharCode(121,95,57,51,95,112,97,114,116,105,99,108,101,0),834], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,95,98,95,57,52,0),107]]);
         libreactperfloggerjniV = [(scorepopsounda == String.fromCharCode(109,0) ? libreactperfloggerjniV.length : scorepopsounda.length)];
         controlX = `${sellmathbackgroundi.length}`;
         sellmathbackgroundi = `${sellmathbackgroundi.length}`;
         filledG /= Math.max(2, controlX.length * 1);
         eventg = new Map([[`${filledG}`, 3]]);
         if (libreactperfloggerjniV.length == 3768551) {
            break;
         }
      } while ((libreactperfloggerjniV.includes(handlera)) && (libreactperfloggerjniV.length == 3768551));
         handlera *= handlera % (Math.max(parseInt(`${halffieldimageE}`), 5));
      do {
          let dice5 = true;
         danger1 *= parseInt(`${halffieldimageE}`);
         dice5 = !dice5;
         if (1257398 == danger1) {
            break;
         }
      } while ((1257398 == danger1) && ((danger1 & 4) > 1 && 1 > (4 & danger1)));
      do {
          let langkeym = String.fromCharCode(98,97,99,107,114,111,117,110,100,95,117,95,56,48,0);
          let yellowcirclebgV = 1.0;
          let telemetryL = String.fromCharCode(117,95,57,56,95,117,114,112,111,115,101,0);
          let predictionarrowE = [392, 538, 1000];
         danger1 /= Math.max(3, (String.fromCharCode(98,0) == langkeym ? langkeym.length : libreactperfloggerjniV.length));
         yellowcirclebgV /= Math.max(predictionarrowE.length ^ 3, 5);
         telemetryL += `${parseInt(`${yellowcirclebgV}`) ^ predictionarrowE.length}`;
         if (3897505 == danger1) {
            break;
         }
      } while ((3897505 == danger1) && (1 >= (2 * danger1)));
         handlera |= handlera >> (Math.min(Math.abs(parseInt(`${halffieldimageE}`)), 3));
      libbufferO += "2";
   while (matchw.length > turn3.length) {
      turn3 = "2";
      break;
   }

    }
    return (
      <View style={VideoPlayerstyles.loader.container}>
        <Animated.Image
          source={require('./images/icons/productBuildTarget.png')}
          style={[
            VideoPlayerstyles.loader.icon,
            {
              transform: [
                {
                  rotate: animationLoader.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    );
   if (4.67 == (mbnativeadvanced0 + parseFloat(`${dataL.length}`))) {
      dataL.push(matchw.length);
   }
       let collectionw = 2.0;
      if (collectionw <= 1.14) {
          let philippinesC = String.fromCharCode(121,95,49,48,48,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0);
          let station7 = 3;
          let libturbomodulejsijniL = 5;
          let overn = String.fromCharCode(110,101,116,119,111,114,107,110,101,119,95,51,95,51,49,0);
         collectionw /= Math.max(2, (String.fromCharCode(88,0) == overn ? parseInt(`${collectionw}`) : overn.length));
         philippinesC = `${2 * libturbomodulejsijniL}`;
         station7 ^= 3 + libturbomodulejsijniL;
      }
      do {
         collectionw /= Math.max(parseInt(`${collectionw}`), 4);
         if (collectionw == 777124.0) {
            break;
         }
      } while (((collectionw / (Math.max(4, 3))) >= 5.88) && (collectionw == 777124.0));
       let ewardedp = 0.0;
       let iconE = 2.0;
      mbnativeadvanced0 /= Math.max(parseFloat(`${minivodw.length / (Math.max(7, parseInt(`${watchf}`)))}`), 4);
   while (dataL.includes(mbnativeadvanced0)) {
      dataL = [dataL.length & parseInt(`${description_pn}`)];
      break;
   }

  };

  const onEnd = () => {
       let mutedf = false;
    let modelsa = 4.0;
    let blacklistu = String.fromCharCode(106,95,55,51,95,116,111,110,101,115,0);
    let templateprocessorm = 4.0;
    let libavutilN = String.fromCharCode(112,105,112,101,95,102,95,50,57,0);
    let whiteanimationlive7 = 3.0;
    let libyogaI = 4;
    let friendsu = [571, 441];
    let fillp = true;
    let userw = String.fromCharCode(100,95,51,95,117,112,108,111,97,100,0);
    let miniV = String.fromCharCode(119,95,57,57,95,101,97,114,108,105,101,114,0);
    let bottom8 = String.fromCharCode(107,95,55,50,95,117,110,109,97,115,107,0);
    let cornershootG = 5.0;
    let greenB = 0.0;
    let iconpointscored = [951, 159];
    let defaultlogok = 5.0;
    let whistleorange0 = [739, 210];
    let smallbrightnessy = true;
   do {
       let loadingx = String.fromCharCode(119,95,50,56,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0);
         loadingx = `${loadingx.length % 1}`;
          let basketballawayteamT = new Map([[String.fromCharCode(98,95,54,57,95,116,117,114,98,111,106,112,101,103,0),String.fromCharCode(100,108,105,115,116,95,52,95,49,52,0)], [String.fromCharCode(116,95,50,55,95,109,97,116,114,105,99,101,115,0),String.fromCharCode(115,115,114,99,95,117,95,50,48,0)], [String.fromCharCode(115,95,56,54,95,100,105,118,105,115,105,111,110,0),String.fromCharCode(107,95,57,51,95,108,105,98,111,112,117,115,0)]]);
          let humidityg = 1.0;
         loadingx = "2";
         basketballawayteamT[`${humidityg}`] = parseInt(`${humidityg}`) / (Math.max(2, 2));
      for (let a = 0; a < 1; a++) {
          let libhermesS = false;
          let ajax7 = 5.0;
          let stationQ = 0.0;
          let comment2 = String.fromCharCode(109,115,109,112,101,103,118,95,54,95,50,53,0);
          let mbbid_ = new Map([[String.fromCharCode(99,95,55,48,95,104,111,115,116,112,111,114,116,102,105,108,101,0),999], [String.fromCharCode(115,101,116,102,105,101,108,100,95,49,95,56,52,0),4], [String.fromCharCode(118,99,114,101,97,116,101,95,107,95,54,55,0),709]]);
         loadingx += `${((libhermesS ? 1 : 3) + parseInt(`${stationQ}`))}`;
         libhermesS = mbbid_.size >= 90 && comment2 == String.fromCharCode(76,0);
         ajax7 -= parseFloat(`${mbbid_.size / 1}`);
         stationQ *= parseFloat(`${mbbid_.size >> (Math.min(Math.abs(2), 2))}`);
         comment2 = `${2 % (Math.max(1, comment2.length))}`;
      }
      fillp = !miniV.startsWith(`${fillp}`);
      if (fillp ? !fillp : fillp) {
         break;
      }
   } while ((!fillp) && (fillp ? !fillp : fillp));
      friendsu = [(miniV == String.fromCharCode(81,0) ? (mutedf ? 3 : 2) : miniV.length)];
   while ((bottom8.length * 5) == 2 && 1 == (libyogaI * 5)) {
      libyogaI /= Math.max((String.fromCharCode(81,0) == bottom8 ? bottom8.length : miniV.length), 4);
      break;
   }
      bottom8 += `${libavutilN.length / 2}`;
   if (miniV.endsWith(bottom8)) {
      bottom8 = `${1 / (Math.max(9, miniV.length))}`;
   }
      greenB -= userw.length ^ 3;
      userw = "3";
      libyogaI &= 3 - userw.length;

    console.log('onend');
   do {
      iconpointscored = [bottom8.length + 2];
      if (455388 == iconpointscored.length) {
         break;
      }
   } while (((4 - blacklistu.length) > 5) && (455388 == iconpointscored.length));
   if (libavutilN.length <= 5) {
       let reportt = new Map([[String.fromCharCode(115,95,54,49,95,99,100,108,109,115,0),662], [String.fromCharCode(114,101,98,117,99,107,101,116,95,122,95,53,49,0),512]]);
       let package_d6C = new Map([[String.fromCharCode(98,111,100,101,114,95,50,95,52,54,0),458], [String.fromCharCode(99,95,52,51,95,100,101,102,115,0),845], [String.fromCharCode(115,95,57,50,95,102,108,97,99,100,97,116,97,0),296]]);
       let stringH = 2.0;
       let greenL = 1;
       let analyticsq = false;
         analyticsq = (((!analyticsq ? reportt.size : 74) | reportt.size) == 100);
          let predictionbannerp = new Map([[String.fromCharCode(100,95,56,50,95,112,114,105,109,97,108,105,116,121,0),String.fromCharCode(103,95,53,56,95,108,112,99,109,0)], [String.fromCharCode(100,95,52,52,95,111,112,117,115,101,110,99,0),String.fromCharCode(117,112,100,97,116,101,95,101,95,52,54,0)], [String.fromCharCode(108,111,116,116,105,101,95,101,95,55,55,0),String.fromCharCode(119,95,49,54,95,97,118,102,111,114,109,97,116,0)]]);
          let appsA = new Map([[String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,95,52,95,50,54,0),12], [String.fromCharCode(106,111,105,110,116,95,108,95,53,55,0),556]]);
         greenL ^= package_d6C.size >> (Math.min(Math.abs(reportt.size), 3));
         predictionbannerp[`${predictionbannerp.size}`] = appsA.size - 1;
         appsA[`${appsA.size}`] = predictionbannerp.size ^ 1;
      for (let r = 0; r < 1; r++) {
         reportt[`${reportt.size}`] = package_d6C.size & 2;
      }
      while (reportt.size > 1) {
          let privilegeV = String.fromCharCode(116,95,56,49,95,108,108,118,105,100,100,115,112,0);
         reportt[`${privilegeV}`] = privilegeV.length % 3;
         break;
      }
      do {
         reportt = new Map([[`${package_d6C.size}`, 1]]);
         if (3945875 == reportt.size) {
            break;
         }
      } while (((package_d6C.size | reportt.size) < 2 && (package_d6C.size | reportt.size) < 2) && (3945875 == reportt.size));
          let iconpipexpandH = new Map([[String.fromCharCode(115,116,101,112,112,101,114,95,50,95,51,51,0),String.fromCharCode(106,95,51,57,95,100,97,116,97,99,101,110,116,101,114,115,0)], [String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,95,54,95,50,53,0),String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,106,95,49,49,0)]]);
          let profilepice = 3;
          let watch_ = 5;
         stringH /= Math.max(4, parseFloat(`${3}`));
         iconpipexpandH = new Map([[`${profilepice}`, watch_]]);
         profilepice >>= Math.min(Math.abs(3), 4);
      for (let k = 0; k < 1; k++) {
          let stringC = new Map([[String.fromCharCode(109,106,112,101,103,100,101,99,95,117,95,51,55,0),false ], [String.fromCharCode(104,95,53,54,95,105,110,100,101,112,101,110,100,101,110,116,0),true ], [String.fromCharCode(100,114,105,118,105,110,103,95,103,95,51,57,0),false ]]);
          let profilepicT = 4.0;
          let owngoalo = false;
          let i_playerB = 2;
         stringH *= parseFloat(`${2 - reportt.size}`);
         stringC[`${profilepicT}`] = i_playerB;
         profilepicT /= Math.max(parseFloat(`${parseInt(`${profilepicT}`) >> (Math.min(2, Math.abs(2)))}`), 3);
         owngoalo = 39.75 >= profilepicT && 98 >= i_playerB;
      }
          let iconclosewhitebgV = new Map([[String.fromCharCode(122,95,54,48,95,112,114,101,116,99,104,0),506], [String.fromCharCode(98,117,102,102,101,114,115,95,48,95,55,52,0),930]]);
          let transferT = 0.0;
         analyticsq = (greenL % (Math.max(iconclosewhitebgV.size, 3))) == 79;
         iconclosewhitebgV[`${transferT}`] = parseInt(`${transferT}`);
       let reactI = 1;
          let bangI = 3;
         greenL *= (1 & (analyticsq ? 1 : 3));
         bangI ^= bangI % 1;
         greenL |= greenL;
          let reddownarrowt = new Map([[String.fromCharCode(97,99,114,111,110,121,109,115,95,105,95,56,57,0),String.fromCharCode(108,95,51,52,95,103,101,116,99,114,101,100,0)], [String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,109,95,53,53,0),String.fromCharCode(98,105,116,112,97,99,107,101,100,95,98,95,54,52,0)], [String.fromCharCode(114,116,112,112,114,111,116,111,95,113,95,50,55,0),String.fromCharCode(105,109,112,114,105,110,116,95,54,95,56,53,0)]]);
          let stringz = 0;
         reactI <<= Math.min(Math.abs(reactI), 2);
         reddownarrowt = new Map([[`${reddownarrowt.size}`, stringz << (Math.min(Math.abs(reddownarrowt.size), 5))]]);
         stringz /= Math.max(2, 3);
          let reminderr = 5.0;
          let iconcloseL = new Map([[String.fromCharCode(101,95,52,53,95,116,114,105,108,105,110,101,97,114,0),334], [String.fromCharCode(103,95,50,53,95,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0),290]]);
          let redscoreballH = new Map([[String.fromCharCode(115,101,103,100,97,116,97,95,112,95,53,48,0),41], [String.fromCharCode(108,95,57,57,95,116,114,105,103,103,101,114,0),842], [String.fromCharCode(120,95,53,49,95,97,116,104,0),767]]);
         stringH += parseFloat(`${redscoreballH.size | 3}`);
         reminderr *= parseInt(`${reminderr}`);
         iconcloseL = new Map([[`${iconcloseL.size}`, 2 * parseInt(`${reminderr}`)]]);
         redscoreballH[`${reminderr}`] = parseInt(`${reminderr}`) % (Math.max(1, 3));
          let iconadslink0 = [199, 878];
          let liner = 1.0;
         reactI ^= 2;
         iconadslink0.push(1 ^ iconadslink0.length);
         liner /= Math.max(parseFloat(`${iconadslink0.length}`), 5);
      while (1 <= (2 - reportt.size) || 2 <= (reactI - reportt.size)) {
         reactI %= Math.max(1, package_d6C.size + reactI);
         break;
      }
      fillp = String.fromCharCode(78,0) == bottom8 || package_d6C.size > 15;
   }
      defaultlogok /= Math.max(4, parseFloat(`${iconpointscored.length}`));
      whiteanimationlive7 /= Math.max(2 & parseInt(`${cornershootG}`), 1);
      friendsu = [iconpointscored.length % (Math.max(bottom8.length, 2))];
   if ((bottom8.length & 3) <= 3 && (3 << (Math.min(2, bottom8.length))) <= 4) {
      bottom8 += `${friendsu.length}`;
   }
      bottom8 = "1";
   do {
      defaultlogok -= parseFloat(`${2 + miniV.length}`);
      if (defaultlogok == 2739022.0) {
         break;
      }
   } while ((defaultlogok == 2739022.0) && ((defaultlogok * 3.29) > 4.20 && fillp));

    setIsLoading(false);
      fillp = friendsu.length == 28;
      bottom8 += `${parseInt(`${modelsa}`) | 2}`;
   while (libavutilN == String.fromCharCode(87,0)) {
       let nativemoduleN = String.fromCharCode(104,105,101,114,97,114,99,104,121,95,97,95,57,53,0);
      if (1 >= nativemoduleN.length) {
          let fillm = String.fromCharCode(113,95,52,51,95,109,111,118,101,112,97,103,101,0);
          let yingq = [661, 782, 930];
          let viewerj = false;
          let privatechatbg6 = String.fromCharCode(97,118,102,109,116,95,112,95,55,51,0);
         nativemoduleN += `${yingq.length % 2}`;
         fillm += "1";
         yingq = [fillm.length];
         privatechatbg6 = `${(3 ^ (viewerj ? 2 : 1))}`;
      }
      if (nativemoduleN.length > nativemoduleN.length) {
          let libtobq = String.fromCharCode(103,95,49,51,95,111,112,99,111,100,101,115,0);
         nativemoduleN += "2";
         libtobq = `${libtobq.length}`;
      }
          let telemetryx = 4.0;
          let footballh = true;
          let stationse = String.fromCharCode(120,95,56,49,95,106,99,115,97,109,112,108,101,0);
         nativemoduleN = `${nativemoduleN.length}`;
         telemetryx /= Math.max(2, parseFloat(`${parseInt(`${telemetryx}`)}`));
         footballh = !footballh;
         stationse += `${(String.fromCharCode(113,0) == stationse ? stationse.length : parseInt(`${telemetryx}`))}`;
      userw += `${2 & parseInt(`${cornershootG}`)}`;
      break;
   }
      libavutilN += `${blacklistu.length}`;
       let basketballtrophyC = new Map([[String.fromCharCode(100,101,110,111,105,115,105,110,103,95,103,95,49,50,0),456], [String.fromCharCode(105,112,108,105,109,97,103,101,95,106,95,56,54,0),939], [String.fromCharCode(99,120,100,97,116,97,95,50,95,50,51,0),754]]);
       let imagesO = String.fromCharCode(119,95,57,52,95,110,101,105,103,104,98,111,117,114,0);
      if (1 >= (4 ^ imagesO.length) || (imagesO.length ^ 4) >= 2) {
         basketballtrophyC = new Map([[`${basketballtrophyC.size}`, basketballtrophyC.size ^ 2]]);
      }
         basketballtrophyC = new Map([[`${basketballtrophyC.size}`, basketballtrophyC.size - imagesO.length]]);
          let stationsV = new Map([[String.fromCharCode(114,101,100,97,99,116,101,100,95,111,95,50,57,0),579], [String.fromCharCode(102,95,53,54,95,109,97,116,114,105,99,101,115,0),541], [String.fromCharCode(102,95,50,49,0),89]]);
         imagesO = `${3 | basketballtrophyC.size}`;
         stationsV = new Map([[`${stationsV.size}`, stationsV.size]]);
         imagesO = `${basketballtrophyC.size % (Math.max(8, imagesO.length))}`;
      for (let n = 0; n < 2; n++) {
         imagesO = "3";
      }
      do {
         imagesO = `${basketballtrophyC.size + imagesO.length}`;
         if (3854605 == imagesO.length) {
            break;
         }
      } while ((1 >= (4 * imagesO.length) || (basketballtrophyC.size * 4) >= 5) && (3854605 == imagesO.length));
      friendsu.push(friendsu.length);
   if (userw.length <= libavutilN.length) {
      libavutilN = `${blacklistu.length >> (Math.min(4, Math.abs(parseInt(`${templateprocessorm}`))))}`;
   }
   while (3.68 == (templateprocessorm * 5.2) && 3.40 == (templateprocessorm * 5.2)) {
      templateprocessorm -= miniV.length << (Math.min(Math.abs(2), 3));
      break;
   }
   while (miniV.startsWith(blacklistu)) {
      miniV += `${parseInt(`${defaultlogok}`) >> (Math.min(1, Math.abs(parseInt(`${cornershootG}`))))}`;
      break;
   }

    props.onLiveEnd?.();
   if (userw.startsWith(`${greenB}`)) {
      userw = `${((mutedf ? 5 : 3) - 2)}`;
   }
      libavutilN += `${(userw == String.fromCharCode(85,0) ? userw.length : (fillp ? 1 : 2))}`;
   do {
      libavutilN = `${miniV.length % (Math.max(9, libyogaI))}`;
      if (libavutilN == String.fromCharCode(108,98,121,0)) {
         break;
      }
   } while ((!mutedf) && (libavutilN == String.fromCharCode(108,98,121,0)));
      libyogaI |= 2 ^ libyogaI;
      blacklistu = `${parseInt(`${defaultlogok}`) >> (Math.min(miniV.length, 1))}`;
       let historyJ = 0.0;
       let fullq = String.fromCharCode(121,95,55,52,0);
          let langX = String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,115,95,121,95,49,0);
          let basketballplayerplaceholderp = String.fromCharCode(109,97,105,108,95,53,95,53,48,0);
         historyJ /= Math.max((String.fromCharCode(68,0) == fullq ? parseInt(`${historyJ}`) : fullq.length), 4);
         langX += `${langX.length * basketballplayerplaceholderp.length}`;
         basketballplayerplaceholderp = `${basketballplayerplaceholderp.length}`;
      do {
         historyJ += 3;
         if (2576878.0 == historyJ) {
            break;
         }
      } while ((2576878.0 == historyJ) && (3.19 <= (historyJ * 1.67)));
         fullq = `${fullq.length / (Math.max(1, 8))}`;
      do {
         fullq += `${parseInt(`${historyJ}`) << (Math.min(Math.abs(3), 5))}`;
         if (String.fromCharCode(54,121,103,105,103,53,97,103,110,0) == fullq) {
            break;
         }
      } while ((fullq.length >= parseInt(`${historyJ}`)) && (String.fromCharCode(54,121,103,105,103,53,97,103,110,0) == fullq));
      do {
         historyJ += fullq.length;
         if (772498.0 == historyJ) {
            break;
         }
      } while ((parseInt(`${historyJ}`) <= fullq.length) && (772498.0 == historyJ));
          let actionsY = 1.0;
          let annerP = String.fromCharCode(108,95,51,52,95,99,97,108,99,108,117,108,97,116,101,0);
         historyJ /= Math.max((annerP == String.fromCharCode(81,0) ? annerP.length : fullq.length), 2);
         actionsY += parseInt(`${actionsY}`);
      friendsu.push(parseInt(`${modelsa}`));
   for (let o = 0; o < 3; o++) {
       let bangZ = 5.0;
       let privatechatbgm = [393, 477, 602];
       let baseline9 = String.fromCharCode(114,101,97,100,98,121,116,101,95,51,95,54,54,0);
      for (let f = 0; f < 2; f++) {
         bangZ -= parseInt(`${bangZ}`);
      }
       let successM = 0;
       let schedulen = String.fromCharCode(97,95,55,51,95,98,121,116,101,114,117,110,0);
       let mbnativeadvancedc = String.fromCharCode(109,97,115,107,105,110,103,95,107,95,53,49,0);
      if (baseline9.length < privatechatbgm.length) {
          let transferU = String.fromCharCode(110,98,105,116,115,95,52,95,49,54,0);
          let greytickL = 0;
          let interstitial_ = String.fromCharCode(100,100,114,97,110,103,101,95,109,95,50,51,0);
          let foundL = String.fromCharCode(105,95,54,51,95,100,97,118,100,0);
          let inouttargetredH = [213, 227];
         privatechatbgm = [foundL.length & 2];
         transferU = `${inouttargetredH.length}`;
         greytickL -= (interstitial_ == String.fromCharCode(116,0) ? inouttargetredH.length : interstitial_.length);
         foundL = "1";
      }
         schedulen = `${mbnativeadvancedc.length / 3}`;
         successM -= privatechatbgm.length;
      do {
          let temperatureq = 5.0;
          let abidetectw = new Map([[String.fromCharCode(102,97,116,101,95,110,95,54,0),true ], [String.fromCharCode(100,111,119,110,108,105,110,107,95,110,95,57,52,0),true ], [String.fromCharCode(113,95,55,55,95,102,111,114,98,105,100,100,101,110,0),false ]]);
         mbnativeadvancedc += `${parseInt(`${bangZ}`)}`;
         temperatureq += parseFloat(`${parseInt(`${temperatureq}`)}`);
         abidetectw = new Map([[`${abidetectw.size}`, 2]]);
         if (mbnativeadvancedc.length == 1297534) {
            break;
         }
      } while ((mbnativeadvancedc.length == 1297534) && (baseline9.length >= mbnativeadvancedc.length));
      for (let k = 0; k < 1; k++) {
          let sellmathbackgroundS = new Map([[String.fromCharCode(102,108,111,111,114,115,95,120,95,56,57,0),false ], [String.fromCharCode(114,101,108,105,97,98,108,101,95,55,95,49,48,48,0),false ], [String.fromCharCode(99,111,110,102,105,103,117,114,101,114,95,107,95,50,56,0),true ]]);
         baseline9 += "3";
         sellmathbackgroundS = new Map([[`${sellmathbackgroundS.size}`, sellmathbackgroundS.size & 3]]);
      }
          let eactH = String.fromCharCode(112,95,53,51,95,99,101,105,108,0);
          let mbnativeadvancedy = String.fromCharCode(118,95,49,49,95,109,105,110,114,0);
          let sansJ = String.fromCharCode(112,95,50,48,95,115,117,98,115,99,114,105,112,116,0);
         successM |= 2;
         eactH = `${2 | sansJ.length}`;
         mbnativeadvancedy += "3";
         sansJ = `${sansJ.length + 2}`;
      modelsa *= parseFloat(`${friendsu.length}`);
   }
      defaultlogok += parseFloat(`${bottom8.length}`);

  };

  const onError = () => {
       let iconbackwhiteb = [351, 835];
    let scheduler2 = String.fromCharCode(100,95,49,48,48,95,115,119,105,116,99,104,101,100,0);
    let taiwan4 = String.fromCharCode(111,103,103,101,114,95,122,95,54,56,0);
    let spinner8 = 1.0;
    let greyQ = [675, 512];
    let submitg = [123, 88];
    let iconnotificationnewT = [691, 163, 698];
    let pathr = String.fromCharCode(107,95,54,53,95,104,115,116,114,105,110,103,0);
    let guide5 = String.fromCharCode(98,95,55,51,95,100,101,108,101,116,105,111,110,0);
    let customq = String.fromCharCode(114,101,102,114,101,115,104,95,49,95,55,53,0);
    let canceln = 0;
    let router1 = 5;
    let application4 = String.fromCharCode(97,105,109,105,110,103,95,105,95,53,49,0);
    let latn5 = [String.fromCharCode(115,117,98,116,114,97,99,116,95,56,95,52,49,0), String.fromCharCode(116,95,53,48,0), String.fromCharCode(98,105,103,116,114,101,101,95,101,95,49,52,0)];
    let imagenomoredatap = String.fromCharCode(106,95,49,56,95,114,101,115,116,114,97,105,110,0);
      iconnotificationnewT = [submitg.length];
   for (let p = 0; p < 1; p++) {
      iconbackwhiteb.push(iconbackwhiteb.length * iconnotificationnewT.length);
   }
      taiwan4 = `${guide5.length}`;
   do {
      spinner8 /= Math.max((parseFloat(`${guide5 == String.fromCharCode(71,0) ? guide5.length : scheduler2.length}`)), 4);
      if (spinner8 == 916702.0) {
         break;
      }
   } while ((spinner8 == 916702.0) && (greyQ.length >= parseInt(`${spinner8}`)));
       let owngoalQ = new Map([[String.fromCharCode(121,95,52,56,0),232], [String.fromCharCode(114,101,103,95,110,95,52,56,0),214]]);
       let windM = String.fromCharCode(98,95,57,53,95,97,116,111,109,105,99,115,0);
       let libloggerA = String.fromCharCode(100,105,114,110,97,109,101,95,53,95,53,53,0);
       let sliderh = String.fromCharCode(99,98,115,110,105,100,95,111,95,49,54,0);
         libloggerA += `${owngoalQ.size % (Math.max(8, windM.length))}`;
          let detailsw = [142, 254, 854];
          let profileactiveQ = 5.0;
          let profilepict = 4.0;
         windM += "3";
         detailsw = [detailsw.length];
         profileactiveQ += 3;
         profilepict -= detailsw.length;
         libloggerA += `${sliderh.length ^ 3}`;
          let baiduR = String.fromCharCode(114,101,109,111,118,97,98,108,101,95,112,95,51,52,0);
          let awayiconG = String.fromCharCode(116,105,99,107,115,95,113,95,49,51,0);
          let fullscreenminZ = String.fromCharCode(120,95,57,56,95,102,111,114,0);
         windM += `${baiduR.length | 1}`;
         baiduR += `${fullscreenminZ.length % 3}`;
         awayiconG += `${(fullscreenminZ == String.fromCharCode(112,0) ? awayiconG.length : fullscreenminZ.length)}`;
         libloggerA = `${owngoalQ.size + windM.length}`;
      if (owngoalQ.size < 4) {
         owngoalQ = new Map([[sliderh, windM.length % (Math.max(2, 8))]]);
      }
      for (let l = 0; l < 2; l++) {
         sliderh += `${owngoalQ.size}`;
      }
      do {
         windM += `${1 | libloggerA.length}`;
         if (windM.length == 3672265) {
            break;
         }
      } while ((3 > windM.length && 3 > libloggerA.length) && (windM.length == 3672265));
      submitg.push(2 << (Math.min(1, guide5.length)));
   do {
       let time_se = [44, 65, 904];
      while (time_se.length == time_se.length) {
          let securityz = String.fromCharCode(115,101,116,116,105,110,103,115,95,122,95,51,48,0);
          let tickl = String.fromCharCode(98,105,110,100,101,114,95,98,95,53,51,0);
          let refreshW = 5;
          let time_mJ = 0.0;
          let orientationh = true;
         time_se = [parseInt(`${time_mJ}`) / 1];
         securityz += `${securityz.length / 2}`;
         tickl = `${2 ^ tickl.length}`;
         refreshW += securityz.length;
         time_mJ *= (parseFloat(`${(orientationh ? 1 : 3) % (Math.max(securityz.length, 10))}`));
         orientationh = !orientationh;
         break;
      }
      do {
         time_se.push(2 | time_se.length);
         if (319611 == time_se.length) {
            break;
         }
      } while (((time_se.length % 3) >= 4 || (3 % (Math.max(4, time_se.length))) >= 2) && (319611 == time_se.length));
       let fastn = String.fromCharCode(114,101,98,97,115,101,95,51,95,53,53,0);
       let incident3 = String.fromCharCode(111,95,55,53,95,111,110,116,114,111,108,0);
      customq = `${iconnotificationnewT.length}`;
      if (String.fromCharCode(57,114,50,104,57,98,55,104,0) == customq) {
         break;
      }
   } while ((scheduler2.length >= customq.length) && (String.fromCharCode(57,114,50,104,57,98,55,104,0) == customq));

    setIsError(true);
   if (3 > (greyQ.length / (Math.max(3, 7)))) {
       let libbuffery = new Map([[String.fromCharCode(118,95,55,57,95,100,105,103,101,115,116,0),false ], [String.fromCharCode(104,95,57,54,95,115,113,108,105,116,101,114,98,117,0),true ], [String.fromCharCode(120,95,52,50,95,112,114,101,118,105,101,119,115,0),true ]]);
       let fillL = 5.0;
       let orangeE = String.fromCharCode(108,95,54,52,95,100,101,99,107,108,105,110,107,0);
      if (libbuffery.size == fillL) {
          let huaweiL = 2.0;
          let pointW = String.fromCharCode(119,95,52,54,95,115,111,98,101,108,0);
         fillL *= (orangeE == String.fromCharCode(104,0) ? orangeE.length : parseInt(`${fillL}`));
         huaweiL -= parseFloat(`${2}`);
         pointW += "2";
      }
      while (orangeE.startsWith(`${libbuffery.size}`)) {
         libbuffery[`${orangeE}`] = 1 % (Math.max(5, libbuffery.size));
         break;
      }
          let libnmsx = 2;
          let libavformatp = String.fromCharCode(108,111,110,103,98,105,103,95,103,95,52,56,0);
         fillL += libavformatp.length;
         libnmsx &= 2;
         libavformatp += `${libnmsx}`;
          let privacyL = new Map([[String.fromCharCode(107,95,53,51,95,100,112,114,105,110,116,0),true ], [String.fromCharCode(108,116,97,98,108,101,95,111,95,49,51,0),true ]]);
          let editq = String.fromCharCode(115,99,104,101,109,97,95,53,95,57,0);
         fillL /= Math.max(privacyL.size, 1);
         privacyL = new Map([[editq, editq.length]]);
       let xnewsx = 1.0;
       let downloadingv = 0.0;
      while (2.67 < (2 - fillL)) {
          let typesN = false;
          let footballl = 4.0;
          let checkboxB = String.fromCharCode(114,101,109,97,112,95,109,95,54,57,0);
          let clockW = String.fromCharCode(116,114,97,110,115,102,101,114,101,100,95,56,95,55,55,0);
         downloadingv += parseInt(`${fillL}`);
         typesN = !typesN;
         footballl /= Math.max(parseFloat(`${clockW.length % 1}`), 5);
         checkboxB += `${checkboxB.length}`;
         clockW += `${((typesN ? 4 : 3) + parseInt(`${footballl}`))}`;
         break;
      }
      if (1.31 >= xnewsx) {
         xnewsx /= Math.max(parseInt(`${fillL}`) - orangeE.length, 2);
      }
         fillL /= Math.max(4, parseInt(`${fillL}`) | 1);
         libbuffery = new Map([[`${xnewsx}`, parseInt(`${xnewsx}`)]]);
      iconbackwhiteb.push(2);
   }
      router1 %= Math.max(1 * greyQ.length, 4);
   while (3 == (submitg.length & 1)) {
       let nativeexN = 3.0;
       let iconarrowrightB = 2.0;
       let libavformata = new Map([[String.fromCharCode(114,95,56,51,95,111,118,101,114,108,97,121,115,0),349], [String.fromCharCode(97,112,112,108,105,101,100,95,55,95,57,57,0),386], [String.fromCharCode(113,95,51,54,95,115,97,100,120,120,0),362]]);
       let audienceS = String.fromCharCode(97,100,109,105,110,101,100,95,120,95,52,57,0);
         audienceS = "3";
      if (4.92 < (libavformata.size - iconarrowrightB) || (iconarrowrightB - 4.92) < 2.82) {
          let bootz = false;
          let roundx = new Map([[String.fromCharCode(103,95,57,50,95,99,97,105,112,0),449], [String.fromCharCode(108,115,102,108,115,112,95,118,95,49,54,0),517], [String.fromCharCode(109,101,97,115,117,114,101,115,95,99,95,57,48,0),569]]);
          let delegate_rk = false;
          let materialb = [33, 223];
          let libturbomodulejsijni4 = 2;
         iconarrowrightB *= parseInt(`${nativeexN}`) & materialb.length;
         bootz = (6 < ((!bootz ? roundx.size : 80) * roundx.size));
         delegate_rk = (bootz ? delegate_rk : !bootz);
         materialb = [(3 >> (Math.min(Math.abs((delegate_rk ? 5 : 5)), 1)))];
         libturbomodulejsijni4 &= ((delegate_rk ? 3 : 2) & (bootz ? 2 : 4));
      }
         libavformata[audienceS] = parseInt(`${iconarrowrightB}`);
          let reddownarrowF = 2.0;
         iconarrowrightB /= Math.max(1, parseInt(`${reddownarrowF}`) | parseInt(`${nativeexN}`));
      submitg.push(parseInt(`${spinner8}`) % 3);
      break;
   }
       let emojiheartF = 5;
       let formn = true;
       let vietnamJ = true;
      if (!formn) {
         formn = !formn;
      }
      for (let m = 0; m < 1; m++) {
         formn = formn || 98 == emojiheartF;
      }
      do {
         vietnamJ = !formn && emojiheartF == 60;
         if (vietnamJ ? !vietnamJ : vietnamJ) {
            break;
         }
      } while ((vietnamJ ? !vietnamJ : vietnamJ) && (!formn));
         emojiheartF <<= Math.min(5, Math.abs(emojiheartF % 1));
         formn = !vietnamJ;
      if (!formn) {
          let eventM = String.fromCharCode(99,95,50,95,103,105,103,97,98,121,116,101,115,0);
          let popupu = 2.0;
          let iconwatchc = 1;
         formn = popupu == 36.70 && vietnamJ;
         eventM = `${eventM.length}`;
         popupu += (parseFloat(`${String.fromCharCode(85,0) == eventM ? iconwatchc : eventM.length}`));
         iconwatchc %= Math.max((String.fromCharCode(71,0) == eventM ? iconwatchc : eventM.length), 3);
      }
          let defaultlogoS = 4;
          let penaltyshootnogoalw = [588, 310];
         formn = 30 <= emojiheartF && !vietnamJ;
         defaultlogoS %= Math.max(penaltyshootnogoalw.length, 4);
         penaltyshootnogoalw = [penaltyshootnogoalw.length];
          let iconnewsshareu = String.fromCharCode(100,111,103,95,112,95,56,53,0);
         vietnamJ = !iconnewsshareu.includes(`${vietnamJ}`);
      if (3 < (emojiheartF * 4) || emojiheartF < 4) {
         emojiheartF |= (emojiheartF + (formn ? 4 : 4));
      }
      router1 ^= scheduler2.length - 2;
   while (2 < (3 + iconnotificationnewT.length) && 1 < (iconnotificationnewT.length + 3)) {
      customq = `${router1 + 1}`;
      break;
   }
      submitg = [iconbackwhiteb.length >> (Math.min(taiwan4.length, 1))];

    setIsLoading(false);
       let rewardf = new Map([[String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,51,95,50,53,0),String.fromCharCode(105,95,53,53,95,116,105,109,101,115,116,97,109,112,101,100,0)], [String.fromCharCode(97,108,105,103,110,95,51,95,55,48,0),String.fromCharCode(117,95,56,54,95,97,108,115,111,0)], [String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,115,95,102,95,55,50,0),String.fromCharCode(112,97,116,104,95,115,95,53,55,0)]]);
       let playercommonM = [458, 441, 494];
         playercommonM.push(rewardf.size);
          let iconnotificationnewt = String.fromCharCode(111,95,53,56,95,101,114,114,111,114,99,98,0);
         rewardf[`${playercommonM.length}`] = playercommonM.length;
         iconnotificationnewt += `${iconnotificationnewt.length}`;
      if (1 > (4 ^ playercommonM.length) || (rewardf.size ^ 4) > 2) {
          let halfg = [479, 136];
         rewardf[`${halfg.length}`] = halfg.length;
      }
      if (rewardf.size == playercommonM.length) {
          let codegenn = String.fromCharCode(105,97,116,95,122,95,57,52,0);
          let libffmpegkith = 1.0;
          let layoutn = 4.0;
         playercommonM.push(codegenn.length);
         codegenn = `${parseInt(`${libffmpegkith}`)}`;
         layoutn *= 3;
      }
       let dangerF = String.fromCharCode(97,95,53,95,99,111,114,114,101,108,97,116,101,0);
      do {
         dangerF += `${rewardf.size >> (Math.min(Math.abs(2), 3))}`;
         if (dangerF == String.fromCharCode(107,116,98,54,121,97,99,100,0)) {
            break;
         }
      } while (((dangerF.length << (Math.min(Math.abs(3), 4))) <= 1 && 3 <= (rewardf.size << (Math.min(dangerF.length, 2)))) && (dangerF == String.fromCharCode(107,116,98,54,121,97,99,100,0)));
      spinner8 *= parseFloat(`${1 - pathr.length}`);
      scheduler2 = `${customq.length + iconnotificationnewT.length}`;
   for (let i = 0; i < 1; i++) {
      iconbackwhiteb.push(application4.length ^ 3);
   }
   if (canceln >= iconbackwhiteb.length) {
      canceln |= 2;
   }
      guide5 = "1";
      iconnotificationnewT = [3];

    props.onLiveEnd?.();
   if ((1 >> (Math.min(3, scheduler2.length))) == 4) {
      greyQ = [canceln / 3];
   }
   do {
      iconbackwhiteb.push(1);
      if (3341562 == iconbackwhiteb.length) {
         break;
      }
   } while ((!latn5.includes(iconbackwhiteb.length)) && (3341562 == iconbackwhiteb.length));
       let storee = 0;
       let libfollys = new Map([[String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,55,95,57,54,0),true ], [String.fromCharCode(101,95,54,55,95,105,110,115,101,114,116,0),false ], [String.fromCharCode(115,95,51,53,95,117,110,119,105,110,100,0),false ]]);
       let cedbadcebfbfbfbcfecbcv = String.fromCharCode(114,97,110,115,102,111,114,109,95,101,95,49,56,0);
      if (Array.from(libfollys.values()).includes(storee)) {
         storee &= 3;
      }
       let transferP = String.fromCharCode(115,103,105,114,108,101,95,112,95,55,55,0);
       let cornerkick3 = String.fromCharCode(99,95,49,52,95,111,118,101,114,114,105,100,105,110,103,0);
         libfollys[cedbadcebfbfbfbcfecbcv] = 2 & transferP.length;
         storee |= (cornerkick3 == String.fromCharCode(49,0) ? cornerkick3.length : transferP.length);
      for (let w = 0; w < 1; w++) {
         libfollys = new Map([[`${libfollys.size}`, cornerkick3.length | libfollys.size]]);
      }
      do {
         storee |= (cornerkick3 == String.fromCharCode(105,0) ? cornerkick3.length : transferP.length);
         if (storee == 2103530) {
            break;
         }
      } while (((2 % (Math.max(6, storee))) < 3) && (storee == 2103530));
      if (transferP.startsWith(`${cornerkick3.length}`)) {
          let mintegralo = true;
          let videojs9 = false;
          let libtobP = 3.0;
          let libapminsightbD = String.fromCharCode(108,111,97,100,105,110,103,95,109,95,57,56,0);
         cornerkick3 += `${libapminsightbD.length}`;
         mintegralo = libtobP >= 2.37;
         videojs9 = !videojs9;
         libtobP -= (parseFloat(`${parseInt(`${libtobP}`) - (videojs9 ? 2 : 1)}`));
         libapminsightbD += `${((mintegralo ? 4 : 1) >> (Math.min(2, Math.abs((videojs9 ? 2 : 4)))))}`;
      }
         libfollys = new Map([[cedbadcebfbfbfbcfecbcv, (String.fromCharCode(115,0) == cedbadcebfbfbfbcfecbcv ? storee : cedbadcebfbfbfbcfecbcv.length)]]);
         transferP += `${(String.fromCharCode(97,0) == cedbadcebfbfbfbcfecbcv ? storee : cedbadcebfbfbfbcfecbcv.length)}`;
      scheduler2 += "1";
   do {
      scheduler2 = `${guide5.length}`;
      if (3486144 == scheduler2.length) {
         break;
      }
   } while ((3486144 == scheduler2.length) && (1 == (3 | scheduler2.length) || (latn5.length | 3) == 2));
      iconbackwhiteb = [customq.length + 1];
       let filterx = true;
         filterx = (filterx ? !filterx : !filterx);
      for (let r = 0; r < 2; r++) {
         filterx = !filterx;
      }
      while (!filterx) {
          let chinaI = [412, 698];
         filterx = chinaI.includes(filterx);
         break;
      }
      iconbackwhiteb = [iconnotificationnewT.length - pathr.length];

  };

  const onFullscreenPlayerDidDismiss = () => {
       let formU = String.fromCharCode(115,95,49,55,95,106,100,104,117,102,102,0);
    let whistleorangea = false;
    let stationY = 2.0;
    let vignette1 = String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,108,95,55,57,0);
    let graphicsC = true;
    let robotoj = String.fromCharCode(121,109,101,110,99,95,119,95,52,50,0);
    let appsu = 4.0;
    let reactnavigationS = String.fromCharCode(114,97,110,103,101,99,111,100,101,114,95,104,95,53,57,0);
       let popupc = [133, 212, 272];
       let video5 = [String.fromCharCode(116,97,100,100,95,122,95,52,50,0), String.fromCharCode(100,95,56,54,95,97,112,115,0), String.fromCharCode(120,95,55,49,95,120,99,104,97,99,104,97,0)];
          let blacklistN = 1;
         video5.push(2 | popupc.length);
         blacklistN += blacklistN >> (Math.min(Math.abs(3), 5));
      if (5 == (video5.length + popupc.length)) {
         popupc = [3];
      }
         popupc = [1 * popupc.length];
      if (video5.length < 2) {
          let basketballmatchdetailbg1 = String.fromCharCode(115,117,98,109,105,116,95,100,95,52,54,0);
          let imagesK = String.fromCharCode(111,95,49,50,95,97,97,97,97,0);
          let goal5 = String.fromCharCode(106,95,54,53,95,112,114,101,118,111,117,115,0);
          let castx = new Map([[String.fromCharCode(114,95,55,48,95,105,110,102,111,108,100,101,114,0),false ], [String.fromCharCode(99,95,57,51,95,112,114,111,99,101,115,115,0),false ], [String.fromCharCode(105,95,57,55,95,112,111,108,121,109,111,100,0),true ]]);
         video5.push(3 * goal5.length);
         basketballmatchdetailbg1 += `${imagesK.length}`;
         imagesK += "1";
         goal5 += `${basketballmatchdetailbg1.length << (Math.min(Math.abs(2), 1))}`;
         castx[`${imagesK}`] = 3;
      }
      while ((4 ^ popupc.length) < 4 && (video5.length ^ 4) < 4) {
         popupc.push(3 * popupc.length);
         break;
      }
      do {
         popupc = [video5.length];
         if (popupc.length == 1099007) {
            break;
         }
      } while ((popupc.length == 1099007) && (video5.includes(popupc.length)));
      formU = `${(2 / (Math.max(6, (whistleorangea ? 3 : 5))))}`;
   do {
      appsu += parseFloat(`${vignette1.length}`);
      if (886563.0 == appsu) {
         break;
      }
   } while ((886563.0 == appsu) && ((5 - formU.length) > 2 || 2.64 > (parseFloat(`${formU.length}`) / (Math.max(10, appsu)))));
   while (vignette1 != String.fromCharCode(83,0) || robotoj != String.fromCharCode(106,0)) {
      vignette1 += `${1 | parseInt(`${appsu}`)}`;
      break;
   }
       let applev = true;
          let linkV = String.fromCharCode(100,95,51,55,95,116,101,114,109,115,101,116,0);
          let benefitj = new Map([[String.fromCharCode(119,121,99,104,101,112,114,111,111,102,95,102,95,57,55,0),String.fromCharCode(121,117,118,112,99,95,104,95,49,48,48,0)], [String.fromCharCode(108,95,54,95,112,114,111,116,111,99,111,108,0),String.fromCharCode(103,108,121,112,104,115,95,106,95,51,50,0)], [String.fromCharCode(107,95,56,48,95,116,101,115,116,99,108,101,97,110,0),String.fromCharCode(109,97,107,101,119,116,95,113,95,51,0)]]);
         applev = 50 <= linkV.length;
         linkV = `${benefitj.size - 3}`;
         benefitj = new Map([[`${benefitj.size}`, benefitj.size]]);
       let rankD = 2;
      for (let i = 0; i < 1; i++) {
         applev = !applev;
      }
      vignette1 += `${(parseInt(`${stationY}`) + (graphicsC ? 5 : 5))}`;
      stationY -= parseFloat(`${3 / (Math.max(4, formU.length))}`);
   while (2 >= robotoj.length || whistleorangea) {
       let iconarrowrightq = String.fromCharCode(117,110,117,115,101,100,95,101,95,55,53,0);
       let statsnomoredataR = [858, 446, 685];
      if (1 > (statsnomoredataR.length + iconarrowrightq.length) || 4 > (1 + statsnomoredataR.length)) {
          let reactnativeultimatelistview5 = 3.0;
          let weatheru = new Map([[String.fromCharCode(99,95,49,95,99,111,108,111,117,114,0),738], [String.fromCharCode(99,108,105,112,98,111,97,114,100,95,49,95,56,53,0),348]]);
          let libfbjniT = 5;
          let dplusC = String.fromCharCode(108,95,53,57,95,119,114,105,116,101,99,98,0);
         iconarrowrightq += `${(iconarrowrightq == String.fromCharCode(115,0) ? statsnomoredataR.length : iconarrowrightq.length)}`;
         reactnativeultimatelistview5 *= parseFloat(`${3 + parseInt(`${reactnativeultimatelistview5}`)}`);
         weatheru[`${reactnativeultimatelistview5}`] = parseInt(`${reactnativeultimatelistview5}`);
         libfbjniT ^= 3 ^ libfbjniT;
         dplusC = `${dplusC.length}`;
      }
      do {
         iconarrowrightq = `${statsnomoredataR.length | 1}`;
         if (String.fromCharCode(55,53,119,116,55,49,113,0) == iconarrowrightq) {
            break;
         }
      } while ((String.fromCharCode(55,53,119,116,55,49,113,0) == iconarrowrightq) && ((statsnomoredataR.length * 3) == 2 || (statsnomoredataR.length * 3) == 1));
      for (let i = 0; i < 2; i++) {
         iconarrowrightq += `${iconarrowrightq.length >> (Math.min(Math.abs(1), 3))}`;
      }
         statsnomoredataR = [3];
         statsnomoredataR.push(iconarrowrightq.length);
         statsnomoredataR = [iconarrowrightq.length];
      robotoj = `${3 * robotoj.length}`;
      break;
   }
   if (formU.length == robotoj.length) {
       let upgradeG = [407, 688];
       let phonem = true;
      for (let n = 0; n < 3; n++) {
          let ying8 = new Map([[String.fromCharCode(99,111,112,121,102,100,95,114,95,56,52,0),false ], [String.fromCharCode(99,97,108,108,111,99,95,111,95,52,0),false ]]);
          let baseo = new Map([[String.fromCharCode(100,101,108,105,118,101,114,121,95,52,95,49,53,0),775], [String.fromCharCode(105,95,57,54,95,114,101,112,101,97,116,0),486]]);
          let audienceO = 2.0;
          let thailandV = String.fromCharCode(112,111,112,117,108,97,114,95,122,95,51,48,0);
          let modityl = String.fromCharCode(114,95,57,53,95,116,97,103,115,116,114,0);
         upgradeG.push(ying8.size);
         ying8[`${audienceO}`] = 1 << (Math.min(1, Math.abs(parseInt(`${audienceO}`))));
         baseo = new Map([[`${baseo.size}`, parseInt(`${audienceO}`) / 2]]);
         thailandV = "2";
         modityl += `${baseo.size}`;
      }
         phonem = upgradeG.includes(phonem);
         phonem = upgradeG.includes(phonem);
      do {
          let assistc = false;
          let eabafadfadddbafeddddeeefeaafy = [251, 926, 298];
          let clockp = String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,52,95,52,54,0);
          let footballtrophyh = 4.0;
         phonem = upgradeG.length <= 61 || 20.1 <= footballtrophyh;
         assistc = !clockp.includes(`${assistc}`);
         eabafadfadddbafeddddeeefeaafy = [clockp.length ^ 1];
         footballtrophyh -= (parseFloat(`${eabafadfadddbafeddddeeefeaafy.length | (assistc ? 4 : 5)}`));
         if (phonem ? !phonem : phonem) {
            break;
         }
      } while (((upgradeG.length & 3) > 2) && (phonem ? !phonem : phonem));
         phonem = upgradeG.includes(phonem);
       let condensed4 = String.fromCharCode(98,95,55,56,95,106,112,101,103,116,114,97,110,0);
       let starh = String.fromCharCode(103,95,51,50,95,102,114,97,109,101,102,111,114,109,97,116,0);
      robotoj += `${robotoj.length << (Math.min(Math.abs(1), 2))}`;
   }
   while (2 >= robotoj.length) {
       let placeholderV = String.fromCharCode(103,95,57,53,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0);
         placeholderV += `${placeholderV.length * placeholderV.length}`;
         placeholderV = `${placeholderV.length}`;
      while (placeholderV.includes(`${placeholderV.length}`)) {
          let subsM = String.fromCharCode(122,95,55,54,95,115,107,105,112,0);
         placeholderV = `${subsM.length}`;
         break;
      }
      graphicsC = !formU.startsWith(`${whistleorangea}`);
      break;
   }
   if (!whistleorangea) {
       let leakcheckere = 4;
       let graphicsB = 5.0;
       let h_playerZ = String.fromCharCode(115,111,99,107,101,116,95,114,95,57,52,0);
       let statisticsinactive0 = new Map([[String.fromCharCode(105,110,100,105,114,101,99,116,95,119,95,56,49,0),90], [String.fromCharCode(112,95,50,55,95,109,101,109,110,114,0),659], [String.fromCharCode(115,95,50,57,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0),573]]);
          let downloada = 5.0;
          let libreactperfloggerjnik = true;
         graphicsB /= Math.max(3, parseFloat(`${leakcheckere}`));
         downloada += 1 | parseInt(`${downloada}`);
         libreactperfloggerjnik = downloada >= 45.43 && !libreactperfloggerjnik;
         leakcheckere &= 2 ^ h_playerZ.length;
      do {
         graphicsB *= parseFloat(`${statisticsinactive0.size / (Math.max(1, leakcheckere))}`);
         if (463072.0 == graphicsB) {
            break;
         }
      } while ((h_playerZ.length >= 5) && (463072.0 == graphicsB));
      for (let n = 0; n < 2; n++) {
         graphicsB *= parseFloat(`${parseInt(`${graphicsB}`) + 2}`);
      }
         statisticsinactive0 = new Map([[h_playerZ, h_playerZ.length - 3]]);
      for (let r = 0; r < 3; r++) {
         statisticsinactive0 = new Map([[`${leakcheckere}`, leakcheckere % (Math.max(2, parseInt(`${graphicsB}`)))]]);
      }
         graphicsB *= parseFloat(`${3}`);
      if (!Array.from(statisticsinactive0.keys()).includes(`${graphicsB}`)) {
         graphicsB *= parseFloat(`${h_playerZ.length | statisticsinactive0.size}`);
      }
      for (let u = 0; u < 2; u++) {
          let turnW = String.fromCharCode(119,95,48,95,102,117,110,103,105,98,108,101,0);
          let phoneshareP = 1;
          let clubm = [String.fromCharCode(114,95,57,95,114,97,99,105,110,103,0), String.fromCharCode(105,95,51,49,95,103,114,97,100,0)];
          let iconsharey = String.fromCharCode(99,95,54,57,95,100,101,105,110,105,116,0);
         h_playerZ += `${leakcheckere}`;
         turnW += `${(String.fromCharCode(51,0) == iconsharey ? iconsharey.length : phoneshareP)}`;
         phoneshareP *= turnW.length;
         clubm = [3];
      }
         leakcheckere /= Math.max(2, 2);
         leakcheckere ^= 1 - statisticsinactive0.size;
      do {
          let iconscheduleP = new Map([[String.fromCharCode(122,95,52,50,95,99,116,120,116,0),105], [String.fromCharCode(109,97,115,107,105,110,103,95,104,95,50,50,0),414]]);
          let subbasketballplayerB = String.fromCharCode(118,95,49,54,95,103,105,103,97,98,121,116,101,115,0);
          let activeY = String.fromCharCode(99,95,55,52,95,114,100,111,112,116,0);
          let hongkong6 = [999, 872, 212];
          let ballO = 1.0;
         graphicsB /= Math.max(parseFloat(`${iconscheduleP.size}`), 1);
         iconscheduleP[activeY] = activeY.length;
         subbasketballplayerB = `${(String.fromCharCode(48,0) == subbasketballplayerB ? subbasketballplayerB.length : hongkong6.length)}`;
         hongkong6.push(parseInt(`${ballO}`) * hongkong6.length);
         ballO -= (parseFloat(`${String.fromCharCode(102,0) == subbasketballplayerB ? subbasketballplayerB.length : parseInt(`${ballO}`)}`));
         if (graphicsB == 3318427.0) {
            break;
         }
      } while ((graphicsB == 3318427.0) && (5 < (statisticsinactive0.size << (Math.min(Math.abs(4), 4))) || 5.51 < (graphicsB / 2.11)));
      graphicsC = leakcheckere <= 56;
   }
   for (let x = 0; x < 3; x++) {
       let memberQ = String.fromCharCode(112,95,52,95,102,108,105,103,104,116,0);
       let gradlep = String.fromCharCode(109,95,54,51,95,115,111,99,107,97,100,100,114,0);
         memberQ = `${gradlep.length << (Math.min(Math.abs(2), 5))}`;
      for (let o = 0; o < 2; o++) {
         gradlep += `${2 ^ memberQ.length}`;
      }
          let baseline9 = false;
          let footballtrophyN = true;
          let dialogI = String.fromCharCode(120,95,52,50,95,117,114,108,0);
         gradlep = `${gradlep.length >> (Math.min(2, memberQ.length))}`;
         baseline9 = (footballtrophyN ? !baseline9 : footballtrophyN);
         dialogI = `${((footballtrophyN ? 1 : 5) << (Math.min(Math.abs((baseline9 ? 4 : 3)), 2)))}`;
          let viewers = new Map([[String.fromCharCode(101,121,101,100,114,111,112,112,101,114,95,49,95,51,57,0),999], [String.fromCharCode(117,112,108,111,97,100,95,115,95,56,0),679]]);
          let release_yg = 2.0;
         memberQ = `${1 & gradlep.length}`;
         viewers[`${release_yg}`] = 1;
         release_yg -= parseFloat(`${1}`);
         gradlep = `${gradlep.length - 2}`;
          let backx = 3.0;
          let zhuboM = String.fromCharCode(117,98,108,105,99,95,52,95,51,49,0);
         gradlep = `${parseInt(`${backx}`)}`;
         backx /= Math.max(1, 3);
         zhuboM += "3";
      formU = `${(vignette1 == String.fromCharCode(109,0) ? vignette1.length : (graphicsC ? 5 : 1))}`;
   }
      vignette1 += `${(String.fromCharCode(104,0) == vignette1 ? vignette1.length : parseInt(`${stationY}`))}`;

    dispatch(togglePlayPaused());
      appsu -= parseFloat(`${2}`);
       let modityR = 5.0;
       let photou = String.fromCharCode(105,109,109,101,100,105,97,116,101,95,48,95,51,57,0);
          let animationsu = false;
          let unselectedt = String.fromCharCode(108,95,49,53,95,102,105,116,0);
          let hejih = String.fromCharCode(113,95,55,50,95,115,117,99,99,101,115,115,99,98,0);
         modityR /= Math.max(4, parseFloat(`${hejih.length + photou.length}`));
         animationsu = !animationsu;
         unselectedt = `${(unselectedt.length & (animationsu ? 3 : 1))}`;
         hejih += `${((animationsu ? 5 : 2))}`;
      while (modityR <= 3.30) {
         photou = `${(String.fromCharCode(65,0) == photou ? photou.length : parseInt(`${modityR}`))}`;
         break;
      }
      while (4 > (parseInt(`${modityR}`) + photou.length) && 3 > (photou.length / (Math.max(4, 6)))) {
         modityR += parseFloat(`${parseInt(`${modityR}`) ^ 1}`);
         break;
      }
         photou += "3";
       let statisticsinactiveZ = 5;
       let anythinkX = 3;
         statisticsinactiveZ |= anythinkX / 3;
      appsu += parseFloat(`${formU.length | 3}`);
       let footballt = [752, 785];
       let colorss = 5.0;
      do {
         footballt = [footballt.length];
         if (footballt.length == 2046799) {
            break;
         }
      } while ((footballt.length == 2046799) && (4 > (footballt.length >> (Math.min(Math.abs(2), 3)))));
      if (!footballt.includes(colorss)) {
          let bootsplashj = 4.0;
          let sentryW = new Map([[String.fromCharCode(103,108,111,98,97,108,116,101,109,95,118,95,51,56,0),468], [String.fromCharCode(104,95,49,48,48,95,112,101,114,102,111,114,109,97,110,99,101,0),585]]);
          let cedbadcebfbfbfbcfecbcI = new Map([[String.fromCharCode(114,95,53,52,95,115,101,116,108,105,115,116,0),902], [String.fromCharCode(110,95,51,49,95,115,117,98,111,98,106,101,99,116,0),288], [String.fromCharCode(97,117,116,111,103,101,110,95,100,95,57,52,0),383]]);
          let yellowscoreballJ = false;
         colorss /= Math.max(3, parseFloat(`${footballt.length}`));
         bootsplashj /= Math.max(1, cedbadcebfbfbfbcfecbcI.size | 1);
         sentryW[`${sentryW.size}`] = cedbadcebfbfbfbcfecbcI.size;
         yellowscoreballJ = cedbadcebfbfbfbcfecbcI.size < 38 || sentryW.size < 38;
      }
      do {
         colorss -= parseFloat(`${footballt.length << (Math.min(5, Math.abs(parseInt(`${colorss}`))))}`);
         if (colorss == 161640.0) {
            break;
         }
      } while ((colorss == 161640.0) && (4.64 >= colorss));
          let iconarrowrightwhitec = String.fromCharCode(97,108,108,95,118,95,56,53,0);
          let lessm = 1.0;
         footballt = [footballt.length];
         iconarrowrightwhitec += `${iconarrowrightwhitec.length}`;
         lessm += (String.fromCharCode(87,0) == iconarrowrightwhitec ? iconarrowrightwhitec.length : parseInt(`${lessm}`));
         footballt.push(parseInt(`${colorss}`));
      for (let p = 0; p < 1; p++) {
         footballt = [1 * footballt.length];
      }
      vignette1 += "1";
      appsu /= Math.max((parseFloat(`${formU == String.fromCharCode(68,0) ? (graphicsC ? 2 : 1) : formU.length}`)), 3);
       let progressh = true;
      while (progressh) {
         progressh = !progressh;
         break;
      }
      while (!progressh && !progressh) {
         progressh = !progressh;
         break;
      }
      if (!progressh) {
         progressh = (progressh ? !progressh : progressh);
      }
      appsu -= parseFloat(`${1 * robotoj.length}`);
   for (let u = 0; u < 2; u++) {
       let sendV = String.fromCharCode(99,95,49,56,95,108,111,99,97,108,101,0);
       let shareda = 5.0;
       let icontransferclubM = true;
       let subtext6 = 1.0;
      while (!sendV.startsWith(`${icontransferclubM}`)) {
         icontransferclubM = icontransferclubM && subtext6 > 67.54;
         break;
      }
      while (!icontransferclubM) {
         subtext6 *= parseInt(`${shareda}`);
         break;
      }
      do {
         shareda -= parseFloat(`${parseInt(`${subtext6}`) - 1}`);
         if (shareda == 1402448.0) {
            break;
         }
      } while ((shareda == 1402448.0) && ((5 * sendV.length) < 2 && (parseFloat(`${sendV.length}`) * shareda) < 5.71));
       let predictionbanner_ = true;
         predictionbanner_ = 50.37 == subtext6;
         icontransferclubM = 53.2 >= subtext6;
         subtext6 -= sendV.length ^ 3;
         sendV += `${((icontransferclubM ? 5 : 5))}`;
      if (icontransferclubM) {
         icontransferclubM = subtext6 < 18.48;
      }
      if (sendV.length >= parseInt(`${shareda}`)) {
         shareda /= Math.max(parseFloat(`${2 / (Math.max(parseInt(`${subtext6}`), 5))}`), 3);
      }
      for (let n = 0; n < 1; n++) {
          let holderC = new Map([[String.fromCharCode(97,95,55,48,95,111,115,116,104,114,101,97,100,115,0),897], [String.fromCharCode(108,95,57,53,95,112,97,99,107,101,116,0),985], [String.fromCharCode(98,95,48,95,114,115,99,99,0),675]]);
         icontransferclubM = predictionbanner_;
         holderC = new Map([[`${holderC.size}`, holderC.size | 1]]);
      }
      while (2.99 < subtext6) {
          let whiteanimationliveg = String.fromCharCode(97,97,99,116,97,98,95,99,95,50,55,0);
          let mimoR = String.fromCharCode(101,95,57,57,95,116,104,114,101,97,100,101,100,0);
          let turndownS = 1.0;
          let sharei = 4;
         subtext6 -= 3 | parseInt(`${turndownS}`);
         whiteanimationliveg = `${mimoR.length & whiteanimationliveg.length}`;
         mimoR = `${(mimoR == String.fromCharCode(81,0) ? sharei : mimoR.length)}`;
         turndownS *= mimoR.length;
         sharei <<= Math.min(4, Math.abs(1));
         break;
      }
      stationY -= parseFloat(`${vignette1.length & robotoj.length}`);
   }
       let quest6 = [175, 652, 909];
       let sports5 = 5.0;
      if ((quest6.length + 4) > 3) {
         sports5 /= Math.max(5, quest6.length / 2);
      }
          let penaltymatchiconI = false;
          let imagenetworkerrD = new Map([[String.fromCharCode(97,95,53,95,110,115,117,105,114,103,98,97,0),true ], [String.fromCharCode(112,95,54,51,95,104,111,110,101,121,0),false ], [String.fromCharCode(97,118,99,116,120,95,54,95,54,53,0),false ]]);
          let rncoret = [818, 764, 163];
         quest6.push(3);
         penaltymatchiconI = rncoret.includes(penaltymatchiconI);
         imagenetworkerrD = new Map([[`${imagenetworkerrD.size}`, imagenetworkerrD.size]]);
         rncoret = [2];
      while (5.13 < (sports5 - 3.30) && (3.30 - sports5) < 1.73) {
         sports5 -= 1 ^ quest6.length;
         break;
      }
       let templateprocessorB = false;
      do {
         quest6 = [(parseInt(`${sports5}`) & (templateprocessorB ? 3 : 3))];
         if (quest6.length == 1180205) {
            break;
         }
      } while ((parseInt(`${sports5}`) >= quest6.length) && (quest6.length == 1180205));
         templateprocessorB = (sports5 - quest6.length) > 12.81;
      vignette1 += `${((graphicsC ? 3 : 1) / (Math.max(2, parseInt(`${appsu}`))))}`;
      appsu /= Math.max(2, (parseFloat(`${vignette1.length + (graphicsC ? 1 : 2)}`)));
   while (2 > vignette1.length && formU != String.fromCharCode(108,0)) {
       let detailS = new Map([[String.fromCharCode(120,95,49,53,95,102,112,101,108,0),926], [String.fromCharCode(120,109,97,115,109,95,121,95,56,0),407], [String.fromCharCode(113,95,53,95,97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,0),472]]);
      do {
         detailS[`${detailS.size}`] = detailS.size | detailS.size;
         if (110376 == detailS.size) {
            break;
         }
      } while ((110376 == detailS.size) && (5 > (detailS.size >> (Math.min(5, Math.abs(detailS.size))))));
      while (detailS[`${detailS.size}`] != null) {
         detailS = new Map([[`${detailS.size}`, detailS.size | detailS.size]]);
         break;
      }
         detailS = new Map([[`${detailS.size}`, detailS.size]]);
      vignette1 = `${1 * parseInt(`${stationY}`)}`;
      break;
   }
      graphicsC = robotoj.length == 6;
      graphicsC = !graphicsC;

  };

  const onRetry = () => {
       let actionJ = String.fromCharCode(100,95,49,48,48,95,105,110,105,116,97,108,0);
    let leftb = 0.0;
    let moduleB = String.fromCharCode(109,115,103,115,95,117,95,51,54,0);
    let analytic9 = String.fromCharCode(122,95,53,51,95,102,109,115,117,98,0);
    let benefitv = 4.0;
    let controlsl = 5.0;
    let description_8iZ = 5;
    let borderlessd = String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,121,95,50,53,0);
    let register_0J = 3.0;
    let type_lL = 4.0;
    let backiconu = 5.0;
    let actions4 = String.fromCharCode(100,95,57,51,95,100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0);
   if (description_8iZ >= 4) {
      description_8iZ *= parseInt(`${controlsl}`);
   }
       let acopy_jF = 5;
      if (4 > (acopy_jF + acopy_jF)) {
         acopy_jF *= 2;
      }
      while ((acopy_jF / (Math.max(8, acopy_jF))) < 3) {
         acopy_jF %= Math.max(2, 1 & acopy_jF);
         break;
      }
      do {
         acopy_jF |= acopy_jF;
         if (acopy_jF == 219014) {
            break;
         }
      } while ((acopy_jF >= acopy_jF) && (acopy_jF == 219014));
      actionJ += `${description_8iZ | borderlessd.length}`;
   do {
      borderlessd += "1";
      if (String.fromCharCode(99,121,117,97,110,121,120,56,0) == borderlessd) {
         break;
      }
   } while ((4 <= description_8iZ) && (String.fromCharCode(99,121,117,97,110,121,120,56,0) == borderlessd));
      controlsl -= parseFloat(`${description_8iZ}`);
   do {
      controlsl /= Math.max(parseFloat(`${3}`), 5);
      if (controlsl == 4461185.0) {
         break;
      }
   } while (((register_0J * 1.0) < 3.86 && 5.10 < (controlsl * 1.0)) && (controlsl == 4461185.0));
       let turndownI = 2;
       let sharewhitey = 1;
       let libffmpegkitW = String.fromCharCode(99,111,109,112,117,116,101,95,53,95,50,49,0);
      for (let j = 0; j < 3; j++) {
          let phone2 = 0;
          let applek = String.fromCharCode(117,95,56,51,95,99,111,117,110,116,113,117,97,110,116,0);
          let sheetl = 2.0;
          let untick9 = new Map([[String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,54,95,54,0),String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,48,95,57,50,0)], [String.fromCharCode(104,95,50,51,95,102,116,118,98,108,97,110,107,0),String.fromCharCode(102,95,55,95,109,100,97,116,0)]]);
         sharewhitey |= phone2 << (Math.min(applek.length, 1));
         phone2 /= Math.max(1, 2 & untick9.size);
         applek += "2";
         sheetl += 2 | parseInt(`${sheetl}`);
         untick9 = new Map([[`${untick9.size}`, parseInt(`${sheetl}`)]]);
      }
         sharewhitey <<= Math.min(4, Math.abs(sharewhitey >> (Math.min(1, Math.abs(turndownI)))));
      for (let j = 0; j < 3; j++) {
         sharewhitey |= 1 << (Math.min(2, Math.abs(sharewhitey)));
      }
      if (turndownI == 1) {
         sharewhitey ^= turndownI;
      }
         sharewhitey <<= Math.min(libffmpegkitW.length, 3);
      while (5 <= (libffmpegkitW.length ^ sharewhitey)) {
         sharewhitey <<= Math.min(Math.abs((libffmpegkitW == String.fromCharCode(68,0) ? libffmpegkitW.length : turndownI)), 3);
         break;
      }
         sharewhitey &= 2 ^ libffmpegkitW.length;
      if (5 == (sharewhitey % 2)) {
         sharewhitey >>= Math.min(Math.abs(turndownI), 3);
      }
          let analyticss = new Map([[String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,116,95,54,57,0),259], [String.fromCharCode(97,118,102,114,97,109,101,95,48,95,50,56,0),493], [String.fromCharCode(99,97,99,97,95,110,95,50,54,0),444]]);
          let transfery = [307, 3];
          let gifgoalp = String.fromCharCode(98,95,52,56,95,97,108,109,111,115,116,0);
         sharewhitey %= Math.max(sharewhitey, 4);
         analyticss[`${transfery.length}`] = analyticss.size & 1;
         transfery = [(String.fromCharCode(82,0) == gifgoalp ? gifgoalp.length : analyticss.size)];
      benefitv *= turndownI % 1;
   for (let m = 0; m < 1; m++) {
      benefitv += analytic9.length;
   }
      actionJ += `${parseInt(`${type_lL}`) % (Math.max(2, analytic9.length))}`;
   do {
      borderlessd += `${(String.fromCharCode(68,0) == actionJ ? actionJ.length : analytic9.length)}`;
      if (borderlessd == String.fromCharCode(98,57,49,102,49,51,0)) {
         break;
      }
   } while ((borderlessd == String.fromCharCode(98,57,49,102,49,51,0)) && (moduleB == String.fromCharCode(73,0)));

    playerRef.current?.seek?.(0);
      controlsl -= parseFloat(`${actionJ.length % 2}`);
      register_0J -= parseFloat(`${description_8iZ}`);
      controlsl *= parseFloat(`${analytic9.length ^ 3}`);
      leftb /= Math.max(3, 2 ^ description_8iZ);
      benefitv += 2 + moduleB.length;
      benefitv += 2 & parseInt(`${benefitv}`);
   do {
       let libcxxcomponentss = String.fromCharCode(104,117,109,97,110,95,99,95,53,48,0);
          let minix = true;
         libcxxcomponentss += `${libcxxcomponentss.length}`;
       let short_q5_ = true;
      if (short_q5_) {
          let weathert = String.fromCharCode(104,97,110,100,108,101,115,95,121,95,49,57,0);
          let settingsA = 5;
          let rulesy = new Map([[String.fromCharCode(100,95,51,48,95,115,117,98,111,98,106,101,99,116,0),129], [String.fromCharCode(115,104,111,114,116,108,121,95,115,95,50,57,0),42]]);
         libcxxcomponentss += "2";
         weathert += `${(weathert == String.fromCharCode(89,0) ? weathert.length : settingsA)}`;
         settingsA &= (String.fromCharCode(99,0) == weathert ? settingsA : weathert.length);
         rulesy[`${settingsA}`] = 1 | settingsA;
      }
      moduleB = `${libcxxcomponentss.length}`;
      if (moduleB == String.fromCharCode(109,113,53,117,0)) {
         break;
      }
   } while ((moduleB == String.fromCharCode(109,113,53,117,0)) && (moduleB == String.fromCharCode(102,0) || analytic9.length > 2));
       let unreadP = String.fromCharCode(117,112,99,111,109,105,110,103,95,118,95,53,52,0);
       let gesturesY = String.fromCharCode(122,95,50,53,95,116,117,114,110,0);
       let nbatrophyP = String.fromCharCode(116,95,51,56,95,115,117,98,109,105,116,0);
      for (let c = 0; c < 1; c++) {
         unreadP += "3";
      }
      while (2 == nbatrophyP.length) {
          let greytickr = new Map([[String.fromCharCode(115,104,97,114,112,110,101,115,115,95,54,95,50,54,0),String.fromCharCode(105,95,49,51,95,107,105,110,103,0)], [String.fromCharCode(111,95,57,55,95,99,111,110,116,111,117,114,0),String.fromCharCode(101,120,112,114,101,115,115,95,120,95,54,54,0)], [String.fromCharCode(106,95,51,48,95,102,114,101,101,108,105,115,116,0),String.fromCharCode(120,95,57,52,95,114,111,117,116,101,0)]]);
          let chatroombackgroundo = 3;
         nbatrophyP += "2";
         greytickr = new Map([[`${greytickr.size}`, greytickr.size]]);
         chatroombackgroundo -= 2;
         break;
      }
      if (nbatrophyP.length <= 1) {
          let sansy = [String.fromCharCode(102,105,110,101,95,113,95,55,48,0), String.fromCharCode(112,111,108,121,115,116,97,114,95,53,95,51,48,0), String.fromCharCode(100,101,108,105,109,105,116,101,114,95,53,95,52,0)];
          let matchinactiver = new Map([[String.fromCharCode(102,114,97,109,101,100,95,102,95,50,56,0),583], [String.fromCharCode(107,95,57,50,95,105,116,101,114,0),234]]);
          let store6 = true;
          let predictionbannersharedW = 0;
          let base2 = 0;
         nbatrophyP = `${gesturesY.length >> (Math.min(Math.abs(1), 2))}`;
         sansy.push(matchinactiver.size);
         matchinactiver[`${base2}`] = matchinactiver.size ^ 3;
         store6 = null == matchinactiver[`${store6}`];
         predictionbannersharedW %= Math.max(2, 1);
         base2 >>= Math.min(Math.abs(base2), 1);
      }
      if (!nbatrophyP.endsWith(`${gesturesY.length}`)) {
         gesturesY = `${3 ^ gesturesY.length}`;
      }
          let sentrym = 3.0;
          let downloadedL = String.fromCharCode(98,95,55,49,95,112,114,111,112,97,103,97,116,105,111,110,0);
          let castingJ = String.fromCharCode(97,95,52,48,95,111,98,115,101,114,118,97,116,105,111,110,115,0);
         nbatrophyP = `${nbatrophyP.length + 1}`;
         sentrym /= Math.max(parseInt(`${sentrym}`) - 2, 4);
         downloadedL += `${castingJ.length}`;
         castingJ += `${downloadedL.length - 2}`;
       let iconarrowrightwhiteR = String.fromCharCode(112,105,99,107,101,114,115,95,53,95,51,0);
       let fieldQ = String.fromCharCode(106,95,51,55,95,114,101,100,101,108,105,118,101,114,121,0);
      for (let h = 0; h < 2; h++) {
         unreadP += `${nbatrophyP.length}`;
      }
         gesturesY += `${unreadP.length}`;
          let sporta = String.fromCharCode(99,111,112,121,102,100,95,116,95,51,56,0);
          let holderR = 2;
          let combineZ = false;
         gesturesY = `${1 ^ fieldQ.length}`;
         sporta += `${sporta.length & holderR}`;
         holderR %= Math.max(holderR, 4);
         combineZ = holderR >= 11 || combineZ;
      leftb /= Math.max(unreadP.length | 3, 1);
       let teamdetailsbgl = String.fromCharCode(99,95,57,51,95,109,106,112,101,103,106,112,101,103,0);
       let minimizew = String.fromCharCode(110,95,51,53,95,109,101,103,97,103,114,111,117,112,0);
       let megaphoneR = new Map([[String.fromCharCode(121,95,53,51,95,105,110,116,101,114,0),665], [String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,105,95,54,52,0),776], [String.fromCharCode(97,95,52,49,95,103,101,116,115,103,110,99,116,120,110,111,0),427]]);
         minimizew += `${teamdetailsbgl.length}`;
         teamdetailsbgl = `${minimizew.length % 2}`;
      do {
         megaphoneR = new Map([[`${megaphoneR.size}`, 1]]);
         if (megaphoneR.size == 663782) {
            break;
         }
      } while ((megaphoneR.size == teamdetailsbgl.length) && (megaphoneR.size == 663782));
      while (minimizew.length >= 4 || teamdetailsbgl == String.fromCharCode(74,0)) {
         minimizew += `${(String.fromCharCode(116,0) == minimizew ? minimizew.length : megaphoneR.size)}`;
         break;
      }
      while (1 >= minimizew.length) {
         minimizew += `${teamdetailsbgl.length}`;
         break;
      }
      for (let h = 0; h < 1; h++) {
          let update_13 = String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,48,95,52,49,0);
         teamdetailsbgl = `${teamdetailsbgl.length % 2}`;
         update_13 = `${update_13.length << (Math.min(Math.abs(1), 1))}`;
      }
      for (let e = 0; e < 1; e++) {
         teamdetailsbgl = "2";
      }
         teamdetailsbgl = `${teamdetailsbgl.length / 2}`;
          let buttonz = String.fromCharCode(99,95,52,57,95,114,101,103,105,111,110,0);
         minimizew += `${minimizew.length * teamdetailsbgl.length}`;
         buttonz += `${buttonz.length}`;
      benefitv /= Math.max(2, moduleB.length);

    dispatch(setVideoControlProp({isPaused: false, action: ''}));
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={onScreenTouch}
        style={[VideoPlayerstyles.player.container, props.containerStyle]}>
        <SafeAreaView
          style={[VideoPlayerstyles.player.container, props.containerStyle]}>
          {videoPlayerControl.videoType === VideoLiveType.ANIMATION ? (
            <View style={[VideoPlayerstyles.player.video, props.videoStyle]}>
              {/* <WebView
                resizeMode={'contain' || videoPlayerControl.resizeMode}
                source={props.source}
                style={[
                  {backgroundColor: 'black'},
                  videoPlayerControl.isFullScreen
                    ? {
                        aspectRatio: 803 / 464,
                        alignSelf: 'center',
                      }
                    : {},
                ]}
                onLoad={onLoad}
                onLoadEnd={onEnd}
                renderError={onError}
                renderLoading={<Loader />}
              /> */}
            </View>
          ) : (
            <Video
              {...commonPlayerProps(playerRef, setIsLoading)}
              ref={playerRef}
              key={JSON.stringify(props.source)}
              paused={videoPlayerControl.isPaused}
              onLoadStart={onLoadStart}
              onError={onError}
              onBuffer={onBuffer}
              onLoad={onLoad}
              onEnd={onEnd}
              onSeek={() => {}}
              style={[VideoPlayerstyles.player.video, props.videoStyle]}
              source={parseVideoURL(props.source?.uri)}
              onFullscreenPlayerDidDismiss={onFullscreenPlayerDidDismiss}
              pictureInPicture={isPipEnabled}
            />
          )}

          {isLoading ? <Loader /> : null}

          <VideoPlayerControls
            isError={isError}
            isCast={
              cast?.status === CastingStatus.Casting ||
              cast?.lastCastInfo?.matchId === videoPlayerControl.matchId
            }
            videoTitle={props.videoTitle}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Error display={isError} onClick={onRetry} />
      {/* {showAds && ads && (
        <VideoAdsComp
          item={ads}
          videoPlayerControl={videoPlayerControl}
          callBack={() => {
            setShowAds(false);
            liveRoomAction.clearVideoAdsList();
          }}></VideoAdsComp>
      )} */}
    </>
  );
});
