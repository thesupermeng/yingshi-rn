import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native';
import ScreenContainer from '../../components/container/yys_matches';
import { RootStackScreenProps } from '@type';
import { useTheme } from '@react-navigation/native';
import { yysIconclosewhiteBaiduads } from '@redux';

import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';
import axios from 'axios';
import { Keyboard } from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '@utility';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import InviteStep from '../../components/invite/yys_iconviewergif';
import InviteCard from '../../components/invite/yys_referrer';

import InviteHeader from '../../components/invite/yys_inactive_header';
import FastImage from '../../components/common/yys_alert_backwhite';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useSelector } from '@hooks';
import {
  updateUserAuth,
  updateUserReferral,
} from '@redux';
import { useDispatch } from 'react-redux';
import { yysHomeloading } from '@api';
import { yysIconplaySuggestion } from '@redux';
export default ({ navigation }: RootStackScreenProps<'邀请详情'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [inviteList, setInviteList] = useState([]);

  const handleRefresh = async () => {
       let giftbutton9 = String.fromCharCode(98,97,99,107,108,105,103,104,116,95,104,95,50,56,0);
    let black2 = 2;
    let infoT = 3.0;
    let maths = true;
    let unreadc = String.fromCharCode(113,95,57,56,95,114,101,112,108,105,99,97,116,101,0);
    let transferQ = true;
    let libcxxcomponentsS = String.fromCharCode(116,114,97,105,116,95,120,95,50,57,0);
    let moonD: Array<any> = [548, 524, 441];
    let areaE = true;
    let mbbidJ = 4;
    let arrowP = 4.0;
       let iconplayY = String.fromCharCode(100,105,114,97,99,116,97,98,95,98,95,53,55,0);
       let sentryG = String.fromCharCode(114,95,52,95,112,117,116,98,105,116,98,117,102,102,101,114,0);
      while (!iconplayY.startsWith(sentryG)) {
         iconplayY += `${(String.fromCharCode(104,0) == iconplayY ? iconplayY.length : sentryG.length)}`;
         break;
      }
          let defaultprofilepic0 = String.fromCharCode(99,111,101,102,115,95,99,95,53,57,0);
          let modalL = 3;
         sentryG = "2";
         defaultprofilepic0 = "3";
         modalL ^= (defaultprofilepic0 == String.fromCharCode(68,0) ? modalL : defaultprofilepic0.length);
          let sortl = true;
          let disconnectedZ = 5;
         iconplayY += `${((sortl ? 4 : 2))}`;
         sortl = 95 == disconnectedZ || disconnectedZ == 95;
          let component6 = String.fromCharCode(103,119,103,116,95,115,95,57,0);
         iconplayY += `${(sentryG == String.fromCharCode(77,0) ? sentryG.length : iconplayY.length)}`;
         component6 += `${component6.length}`;
      let libavfiltere = iconplayY.length <= 6683831;
      do {
         iconplayY += "1";
         if (libavfiltere) {
            break;
         }
      } while (libavfiltere && (sentryG == iconplayY));
         sentryG += `${sentryG.length / (Math.max(3, 3))}`;
      transferQ = 14 == black2;
      areaE = !libcxxcomponentsS.endsWith(`${areaE}`);
   let ballD = transferQ ? !transferQ : transferQ;
   do {
      transferQ = areaE;
      if (ballD) {
         break;
      }
   } while ((!transferQ && 3 == libcxxcomponentsS.length) && ballD);
      areaE = (18 <= (moonD.length / (Math.max(2, (areaE ? 18 : moonD.length)))));
   let sell3 = 8828409 <= unreadc.length;
   do {
      unreadc += `${mbbidJ % 3}`;
      if (sell3) {
         break;
      }
   } while ((4.62 >= (infoT * 4.35) || 4.35 >= (infoT * unreadc.length)) && sell3);
      giftbutton9 += `${parseInt(`${infoT}`) / 3}`;
   if (areaE) {
       let castingF = false;
       let resulta = 5.0;
       let untick8 = String.fromCharCode(119,95,50,51,95,97,108,115,97,0);
       let logouserp = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,117,95,57,52,0);
       let streamingu = String.fromCharCode(110,95,57,95,111,99,116,112,111,105,110,116,0);
      let castingA = 7510750.0 >= resulta;
      do {
          let classes0: Array<any> = [468, 538];
          let h_titlea = 3.0;
          let sentryc = 5;
          let mime2 = true;
          let libfbjnin: Map<any, any> = new Map([[String.fromCharCode(97,115,111,108,117,116,101,95,98,95,51,51,0),907], [String.fromCharCode(105,95,56,55,95,111,102,102,108,111,97,100,0),313]]);
         resulta -= streamingu.length;
         classes0 = [parseInt(`${h_titlea}`) ^ 3];
         h_titlea /= Math.max(5, ((mime2 ? 3 : 4) + 2));
         sentryc |= libfbjnin.size % 1;
         libfbjnin = new Map([[`${classes0.length}`, parseInt(`${h_titlea}`) % (Math.max(3, classes0.length))]]);
         if (castingA) {
            break;
         }
      } while (castingA && (castingF));
          let arrowrightwithtailE = 1.0;
          let phoneW = 0.0;
         logouserp = `${logouserp.length}`;
         arrowrightwithtailE *= parseInt(`${phoneW}`) | 2;
         phoneW /= Math.max(parseInt(`${phoneW}`) << (Math.min(3, Math.abs(3))), 1);
      if (4 == streamingu.length) {
         streamingu = `${streamingu.length + 2}`;
      }
      if (untick8.length < 4) {
         untick8 += `${logouserp.length}`;
      }
       let customC = String.fromCharCode(107,95,52,51,0);
       let stylesv = String.fromCharCode(117,95,49,48,95,109,98,101,100,103,101,0);
      if (untick8.length >= 1) {
          let modity7 = 1;
         untick8 = `${modity7}`;
      }
       let project0 = String.fromCharCode(102,95,51,53,95,106,107,101,110,99,0);
      if (logouserp != String.fromCharCode(85,0) || streamingu == String.fromCharCode(74,0)) {
         streamingu = `${untick8.length}`;
      }
      while (resulta == 2.93 || (2.93 + resulta) == 5.2) {
         resulta /= Math.max(2, stylesv.length % 2);
         break;
      }
          let carouselp = 3.0;
          let guide9 = String.fromCharCode(97,99,116,117,97,108,95,100,95,53,51,0);
         untick8 = `${2 ^ project0.length}`;
         carouselp += guide9.length >> (Math.min(Math.abs(3), 3));
         guide9 = `${parseInt(`${carouselp}`) * guide9.length}`;
      let predictionbannersharedE = castingF ? !castingF : castingF;
      do {
          let dicelogo_ = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,95,114,95,53,57,0);
          let layoutV = 5.0;
          let libapminsighta4 = String.fromCharCode(119,95,51,57,95,100,101,99,108,0);
          let hookss = String.fromCharCode(118,95,51,53,95,99,97,117,116,101,114,105,122,101,0);
         castingF = logouserp.length <= 24;
         dicelogo_ += "3";
         layoutV /= Math.max(4, parseFloat(`${libapminsighta4.length}`));
         libapminsighta4 = `${hookss.length << (Math.min(Math.abs(2), 1))}`;
         hookss += "1";
         if (predictionbannersharedE) {
            break;
         }
      } while ((!castingF) && predictionbannersharedE);
          let mbbidt = String.fromCharCode(112,111,105,110,116,99,98,98,95,118,95,51,0);
         logouserp = `${streamingu.length * customC.length}`;
         mbbidt = `${mbbidt.length}`;
       let iconeyex: Map<any, any> = new Map([[String.fromCharCode(101,95,50,55,95,108,97,121,111,121,116,0),false ], [String.fromCharCode(110,95,53,50,95,109,105,110,105,109,105,122,101,0),true ]]);
       let rncoreP: Map<any, any> = new Map([[String.fromCharCode(97,112,112,118,101,121,111,114,95,53,95,54,57,0),false ], [String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,95,121,95,57,55,0),false ], [String.fromCharCode(121,95,50,53,95,119,104,105,116,101,108,105,115,116,0),true ]]);
      while (streamingu == project0) {
         project0 = `${(String.fromCharCode(120,0) == untick8 ? untick8.length : parseInt(`${resulta}`))}`;
         break;
      }
          let dialogt = 1.0;
         castingF = project0.length < 78;
         dialogt -= parseFloat(`${parseInt(`${dialogt}`)}`);
      areaE = transferQ;
   }
   if ((mbbidJ << (Math.min(Math.abs(4), 5))) > 3 && 4 > (mbbidJ << (Math.min(libcxxcomponentsS.length, 5)))) {
      libcxxcomponentsS = `${(1 ^ (transferQ ? 2 : 5))}`;
   }
   for (let x = 0; x < 1; x++) {
      infoT /= Math.max(1, 2);
   }
   let projectk = moonD.length >= 8529411;
   do {
      moonD = [giftbutton9.length << (Math.min(Math.abs(1), 3))];
      if (projectk) {
         break;
      }
   } while ((!moonD.includes(black2)) && projectk);
       let home0: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,116,115,95,103,95,57,48,0),978], [String.fromCharCode(118,105,97,98,108,101,95,98,95,51,53,0),839]]);
         home0.set(`${home0.size}`, home0.size % 2);
          let greenarrowupr = 2.0;
         home0.set(`${greenarrowupr}`, parseInt(`${greenarrowupr}`) + home0.size);
      if (home0.get(`${home0.size}`) == null) {
         home0 = new Map([[`${home0.size}`, home0.size / (Math.max(8, home0.size))]]);
      }
      mbbidJ += black2;
   while (2 == (moonD.length / (Math.max(1, 1))) && 3.31 == (2.20 + infoT)) {
      moonD.push((parseInt(`${infoT}`) >> (Math.min(5, Math.abs((areaE ? 5 : 2))))));
      break;
   }

    setRefreshing(true);

   let defaultprofilepicd = moonD.length <= 9788941;
   do {
      moonD = [(black2 ^ (transferQ ? 1 : 2))];
      if (defaultprofilepicd) {
         break;
      }
   } while (defaultprofilepicd && (5.71 < (moonD.length - arrowP)));
       let lightN = String.fromCharCode(98,101,122,101,108,95,51,95,54,51,0);
       let singapores: Map<any, any> = new Map([[String.fromCharCode(102,105,116,115,95,106,95,56,53,0),false ], [String.fromCharCode(99,111,108,111,114,101,100,95,105,95,53,52,0),false ]]);
       let thailand8: Array<any> = [653, 835, 733];
      let animationb = 6173734 >= singapores.size;
      do {
         singapores.set(`${lightN}`, (String.fromCharCode(102,0) == lightN ? singapores.size : lightN.length));
         if (animationb) {
            break;
         }
      } while ((1 < (1 - singapores.size) || (1 - singapores.size) < 2) && animationb);
         lightN += `${thailand8.length ^ singapores.size}`;
      while (5 >= lightN.length) {
          let predictiondefault4 = false;
          let searchH = false;
          let graphicsS = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,116,95,52,49,0);
         singapores.set(graphicsS, 3);
         predictiondefault4 = searchH && predictiondefault4;
         searchH = predictiondefault4 || !searchH;
         graphicsS += `${((predictiondefault4 ? 1 : 3) >> (Math.min(Math.abs((searchH ? 4 : 1)), 1)))}`;
         break;
      }
         lightN = `${3 & lightN.length}`;
      if (5 == (thailand8.length / (Math.max(lightN.length, 2))) || 4 == (thailand8.length / 5)) {
          let indicator_ = 0;
          let middlesoundO = 1.0;
          let c_countp = String.fromCharCode(108,95,55,57,95,97,117,116,104,107,101,121,0);
          let weatheru = 2;
         lightN = `${thailand8.length}`;
         indicator_ += c_countp.length - 3;
         middlesoundO -= weatheru ^ parseInt(`${middlesoundO}`);
         c_countp = `${indicator_ ^ 3}`;
         weatheru += 2;
      }
       let filterF = true;
       let type_mN = 1;
      let libavformatd = singapores.size >= 8640234;
      do {
         singapores = new Map([[lightN, ((filterF ? 5 : 3) / 2)]]);
         if (libavformatd) {
            break;
         }
      } while (libavformatd && (singapores.get(`${type_mN}`) == null));
         filterF = null != singapores.get(`${filterF}`);
      areaE = 74 <= thailand8.length && unreadc.length <= 74;
   for (let w = 0; w < 3; w++) {
      mbbidJ *= moonD.length;
   }
   if (3.12 >= (1.82 / (Math.max(10, infoT))) || infoT >= 1.82) {
       let network7 = String.fromCharCode(115,117,98,118,105,101,119,95,103,95,49,55,0);
       let moviesa: Array<any> = [127, 839];
       let watchnowbg4: Array<any> = [895, 239];
       let gemfile_: Map<any, any> = new Map([[String.fromCharCode(120,95,51,55,95,114,101,119,114,105,116,101,114,0),false ], [String.fromCharCode(112,111,116,105,115,105,111,110,95,55,95,57,49,0),true ]]);
      if (!Array.from(gemfile_.keys()).includes(`${watchnowbg4.length}`)) {
         gemfile_ = new Map([[`${moviesa.length}`, 3 & moviesa.length]]);
      }
      while (network7.length < 2) {
         moviesa = [moviesa.length >> (Math.min(network7.length, 2))];
         break;
      }
      for (let j = 0; j < 3; j++) {
         moviesa.push(1 + network7.length);
      }
      while (gemfile_.get(`${watchnowbg4.length}`) == null) {
          let basketballmatchdetailbga: Array<any> = [964, 850, 394];
         watchnowbg4 = [1];
         basketballmatchdetailbga.push(basketballmatchdetailbga.length);
         break;
      }
       let airbnbstarselectedY = true;
          let scrollviewP = 2;
         moviesa = [1];
         scrollviewP /= Math.max(2, 2 & scrollviewP);
       let singleX = 5.0;
      while (singleX <= 4.100) {
         watchnowbg4 = [2 - parseInt(`${singleX}`)];
         break;
      }
         gemfile_ = new Map([[`${moviesa.length}`, 1]]);
      let playliste = airbnbstarselectedY ? !airbnbstarselectedY : airbnbstarselectedY;
      do {
         airbnbstarselectedY = !airbnbstarselectedY;
         if (playliste) {
            break;
         }
      } while ((watchnowbg4.length <= 1) && playliste);
          let leakcheckerG = true;
         airbnbstarselectedY = !airbnbstarselectedY;
         leakcheckerG = !leakcheckerG;
      while ((network7.length >> (Math.min(Math.abs(2), 3))) >= 3) {
         singleX /= Math.max(moviesa.length % (Math.max(3, network7.length)), 5);
         break;
      }
      infoT -= watchnowbg4.length & gemfile_.size;
   }
   if (1 <= (mbbidJ >> (Math.min(Math.abs(5), 1))) && 5 <= (parseInt(`${infoT}`) - mbbidJ)) {
       let trashQ = 0.0;
       let clockq = 0;
      let currentF = 6607388.0 <= trashQ;
      do {
         trashQ *= 2 & clockq;
         if (currentF) {
            break;
         }
      } while (currentF && (trashQ <= clockq));
         clockq <<= Math.min(Math.abs(clockq >> (Math.min(5, Math.abs(2)))), 5);
       let miniI = 3.0;
      for (let i = 0; i < 2; i++) {
         trashQ -= 3 - parseInt(`${miniI}`);
      }
       let sporti = String.fromCharCode(102,95,55,53,95,97,99,107,110,111,119,108,101,100,103,109,101,110,116,0);
         sporti = `${parseInt(`${miniI}`) << (Math.min(Math.abs(3), 4))}`;
      infoT *= ((maths ? 2 : 1));
   }
       let iconarrowrightorangeL: Map<any, any> = new Map([[String.fromCharCode(119,105,116,104,111,117,116,95,54,95,51,53,0),521], [String.fromCharCode(103,95,52,49,95,112,97,103,101,0),370], [String.fromCharCode(107,95,53,51,95,99,108,101,97,114,0),874]]);
       let icondefaultthumbnailT = 2;
      while (5 == (icondefaultthumbnailT * iconarrowrightorangeL.size) && (icondefaultthumbnailT * iconarrowrightorangeL.size) == 5) {
          let resultt = true;
          let smallorangemanF: Array<any> = [String.fromCharCode(97,112,112,114,116,99,95,106,95,57,49,0), String.fromCharCode(100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,95,111,95,52,56,0), String.fromCharCode(105,95,57,51,95,112,114,97,112,97,114,101,0)];
          let imagenomoredataQ = String.fromCharCode(119,95,50,55,95,115,99,104,110,111,114,114,0);
         icondefaultthumbnailT -= smallorangemanF.length | icondefaultthumbnailT;
         resultt = ((imagenomoredataQ.length + (resultt ? 85 : imagenomoredataQ.length)) > 85);
         smallorangemanF.push((imagenomoredataQ == String.fromCharCode(100,0) ? (resultt ? 3 : 5) : imagenomoredataQ.length));
         break;
      }
         icondefaultthumbnailT %= Math.max(2, 2);
      for (let w = 0; w < 1; w++) {
         icondefaultthumbnailT += 1;
      }
      if (2 > (2 * icondefaultthumbnailT) && 2 > (icondefaultthumbnailT * iconarrowrightorangeL.size)) {
          let football7 = 1.0;
          let headerM: Array<any> = [String.fromCharCode(110,95,49,53,95,104,112,105,99,0), String.fromCharCode(100,95,57,56,95,99,101,110,116,114,101,0)];
          let logoutB = String.fromCharCode(107,95,55,56,95,116,101,115,116,105,109,103,97,114,105,0);
         iconarrowrightorangeL.set(`${headerM.length}`, 3 * iconarrowrightorangeL.size);
         football7 *= parseFloat(`${3}`);
         headerM = [logoutB.length / 1];
         logoutB = `${parseInt(`${football7}`) - logoutB.length}`;
      }
      while (Array.from(iconarrowrightorangeL.values()).includes(icondefaultthumbnailT)) {
         iconarrowrightorangeL = new Map([[`${iconarrowrightorangeL.size}`, icondefaultthumbnailT]]);
         break;
      }
         iconarrowrightorangeL = new Map([[`${iconarrowrightorangeL.size}`, icondefaultthumbnailT >> (Math.min(Math.abs(iconarrowrightorangeL.size), 1))]]);
      moonD.push(1);
      arrowP -= 1;
      areaE = !maths;
   while (areaE) {
      giftbutton9 += `${giftbutton9.length}`;
      break;
   }
       let starO = String.fromCharCode(100,101,99,108,105,110,101,95,103,95,56,50,0);
      if (starO == String.fromCharCode(112,0) || 4 < starO.length) {
          let anythinkP: Array<any> = [392, 511];
          let logout4: Array<any> = [379, 148];
          let nativeexK = String.fromCharCode(103,97,109,117,116,115,95,105,95,50,57,0);
          let expandS: Map<any, any> = new Map([[String.fromCharCode(105,119,97,108,115,104,95,114,95,50,49,0),581], [String.fromCharCode(99,97,115,99,97,100,101,100,95,119,95,57,54,0),253], [String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,121,95,57,51,0),696]]);
          let dplus6 = String.fromCharCode(111,116,111,98,95,117,95,56,56,0);
         starO += `${nativeexK.length}`;
         anythinkP.push(expandS.size);
         logout4 = [anythinkP.length + 3];
         nativeexK = `${expandS.size}`;
         dplus6 += "3";
      }
      for (let h = 0; h < 2; h++) {
          let penaltyshootb = 3.0;
          let latn6 = 2.0;
          let iconarrowrightorangeF = 3.0;
          let phonec = 1.0;
         starO = `${3 | parseInt(`${phonec}`)}`;
         penaltyshootb *= 1 + parseInt(`${latn6}`);
         latn6 /= Math.max(2, parseFloat(`${parseInt(`${penaltyshootb}`)}`));
         iconarrowrightorangeF += parseInt(`${iconarrowrightorangeF}`) / (Math.max(3, parseInt(`${latn6}`)));
         phonec *= parseInt(`${penaltyshootb}`) - parseInt(`${iconarrowrightorangeF}`);
      }
      while (starO != starO) {
         starO += `${(starO == String.fromCharCode(70,0) ? starO.length : starO.length)}`;
         break;
      }
      areaE = black2 < 56 && 56 < giftbutton9.length;
      unreadc += `${(unreadc.length >> (Math.min(3, Math.abs((areaE ? 3 : 4)))))}`;
      arrowP *= (String.fromCharCode(85,0) == unreadc ? unreadc.length : libcxxcomponentsS.length);
    await refreshUserState();

   while (2 <= unreadc.length) {
      unreadc += `${mbbidJ}`;
      break;
   }
   if (!maths) {
       let predictionbuttonc = true;
       let predictionbuttonZ = false;
       let bangC = String.fromCharCode(97,95,53,95,97,116,116,105,98,117,116,101,115,0);
      if (!predictionbuttonc) {
          let homeactiveo = String.fromCharCode(120,95,51,53,95,99,111,117,110,116,100,111,119,110,0);
          let profileinactive8 = false;
          let zhengpiane: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,114,105,99,104,0),String.fromCharCode(110,95,50,95,98,111,117,110,100,115,112,101,99,105,102,105,99,0)], [String.fromCharCode(98,105,103,103,101,115,116,95,121,95,52,57,0),String.fromCharCode(99,95,52,55,95,98,121,116,101,99,111,100,101,0)], [String.fromCharCode(100,109,97,98,117,102,95,122,95,49,48,0),String.fromCharCode(101,120,99,101,101,100,115,95,110,95,57,0)]]);
          let emptyl = 3;
         predictionbuttonc = 40 > emptyl && zhengpiane.size > 40;
         homeactiveo += `${(1 % (Math.max(5, (profileinactive8 ? 3 : 3))))}`;
         profileinactive8 = homeactiveo.startsWith(`${profileinactive8}`);
         zhengpiane = new Map([[`${profileinactive8}`, 1]]);
         emptyl ^= 3;
      }
       let halffieldimage4 = false;
          let mbjscommonz: Array<any> = [250, 529];
          let register_72 = 1;
         halffieldimage4 = predictionbuttonc;
         mbjscommonz = [mbjscommonz.length];
         register_72 >>= Math.min(5, Math.abs(3));
       let loadingd = 0.0;
       let disconnectedlogol = 0.0;
       let signinupA = 3.0;
         predictionbuttonZ = !predictionbuttonc;
      while (halffieldimage4 || predictionbuttonZ) {
         halffieldimage4 = bangC.startsWith(`${halffieldimage4}`);
         break;
      }
      while (!halffieldimage4 || 4.4 == (5.98 * signinupA)) {
         signinupA += (1 | (halffieldimage4 ? 3 : 3));
         break;
      }
          let collection0 = 2.0;
         predictionbuttonZ = (predictionbuttonc ? !predictionbuttonZ : predictionbuttonc);
         collection0 /= Math.max(3, parseFloat(`${1 + parseInt(`${collection0}`)}`));
      maths = bangC.length == moonD.length;
   }
      areaE = (libcxxcomponentsS.length % (Math.max(5, unreadc.length))) > 45;
       let plashI = String.fromCharCode(100,95,55,56,95,115,105,109,100,0);
       let shootyesgoalf = String.fromCharCode(105,95,56,49,95,115,117,98,115,97,109,112,108,101,0);
       let champion_ = String.fromCharCode(101,95,49,52,95,116,101,115,116,105,109,103,105,110,116,0);
          let less1 = String.fromCharCode(113,95,55,48,95,115,112,97,99,101,0);
         plashI += `${2 + less1.length}`;
      for (let q = 0; q < 3; q++) {
          let redscoreballE: Map<any, any> = new Map([[String.fromCharCode(115,105,109,112,108,101,114,101,97,100,95,56,95,53,50,0),true ], [String.fromCharCode(109,95,57,51,95,103,97,117,103,101,0),false ]]);
          let libavcodech = false;
          let scheduleS = String.fromCharCode(111,95,53,95,97,100,105,100,0);
         champion_ = `${redscoreballE.size | 1}`;
         redscoreballE.set(scheduleS, scheduleS.length);
         libavcodech = !libavcodech;
      }
      let chatroombackgroundM = 8992638 >= champion_.length;
      do {
         champion_ += `${champion_.length | plashI.length}`;
         if (chatroombackgroundM) {
            break;
         }
      } while (chatroombackgroundM && (4 <= champion_.length));
      let lessj = champion_.length >= 6821138;
      do {
         champion_ = `${shootyesgoalf.length}`;
         if (lessj) {
            break;
         }
      } while ((champion_.length <= plashI.length) && lessj);
         plashI += `${plashI.length}`;
      for (let j = 0; j < 2; j++) {
         champion_ = `${champion_.length}`;
      }
      let fieldh = plashI == String.fromCharCode(48,106,110,100,95,121,53,0);
      do {
         plashI += `${plashI.length}`;
         if (fieldh) {
            break;
         }
      } while ((!champion_.includes(plashI)) && fieldh);
         shootyesgoalf += `${plashI.length}`;
         champion_ = `${2 / (Math.max(1, champion_.length))}`;
      arrowP += ((transferQ ? 1 : 1) / 2);
   for (let h = 0; h < 1; h++) {
       let hooksD = 1.0;
         hooksD *= parseFloat(`${2}`);
      while (hooksD == hooksD) {
         hooksD -= parseFloat(`${parseInt(`${hooksD}`)}`);
         break;
      }
      if (hooksD >= 5.60) {
         hooksD /= Math.max(5, parseFloat(`${3 % (Math.max(7, parseInt(`${hooksD}`)))}`));
      }
      maths = 34 >= black2;
   }
   while (areaE || !transferQ) {
      transferQ = (parseInt(`${infoT}`) - moonD.length) >= 36;
      break;
   }
      transferQ = libcxxcomponentsS.length >= black2;
      unreadc += `${parseInt(`${infoT}`) >> (Math.min(5, Math.abs(3)))}`;
   while (!transferQ) {
      transferQ = (36 > ((!transferQ ? 36 : unreadc.length) | unreadc.length));
      break;
   }
   for (let c = 0; c < 1; c++) {
      libcxxcomponentsS += `${mbbidJ | 2}`;
   }
   let awayteamfieldu = maths ? !maths : maths;
   do {
       let reactnavigationl = String.fromCharCode(106,95,57,51,95,100,105,115,112,108,97,121,0);
      if (!reactnavigationl.includes(reactnavigationl)) {
         reactnavigationl += `${reactnavigationl.length | reactnavigationl.length}`;
      }
         reactnavigationl = `${reactnavigationl.length + reactnavigationl.length}`;
      let yellowtored1 = 7722130 >= reactnavigationl.length;
      do {
         reactnavigationl = "2";
         if (yellowtored1) {
            break;
         }
      } while (yellowtored1 && (reactnavigationl.length > reactnavigationl.length));
      maths = arrowP <= 92.57;
      if (awayteamfieldu) {
         break;
      }
   } while ((5.66 < infoT) && awayteamfieldu);
   while (!unreadc.includes(`${maths}`)) {
      maths = black2 <= 65 || 65 <= libcxxcomponentsS.length;
      break;
   }
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let bottoml = String.fromCharCode(108,95,52,48,95,99,111,110,116,105,110,117,111,117,115,0);
    let private_15d = String.fromCharCode(112,95,57,51,95,114,116,114,101,101,0);
    let related5 = String.fromCharCode(97,95,50,57,95,112,97,114,101,110,0);
    let minimizel = 0.0;
    let basketballmatchdetailbgE = 2.0;
    let iconpointscorex: Map<any, any> = new Map([[String.fromCharCode(118,95,55,48,95,101,112,122,115,0),String.fromCharCode(97,114,98,105,116,114,117,109,95,102,95,50,52,0)], [String.fromCharCode(116,95,57,53,95,114,116,99,119,101,98,0),String.fromCharCode(121,95,56,54,95,115,117,109,115,113,0)], [String.fromCharCode(105,110,102,117,114,97,95,53,95,55,54,0),String.fromCharCode(120,95,53,51,95,109,101,109,98,101,114,0)]]);
    let iconS = 3.0;
    let moreP = String.fromCharCode(108,117,116,115,95,108,95,51,55,0);
    let constantsM = String.fromCharCode(97,97,110,100,99,116,116,97,98,95,108,95,55,55,0);
    let penaltyU = 1.0;
    let constantsj = true;
       let mutedn = String.fromCharCode(110,95,52,55,95,99,117,101,112,111,105,110,116,0);
          let signinupT: Array<any> = [486, 47];
          let mimeR = String.fromCharCode(97,95,49,48,48,95,99,111,101,102,102,105,99,105,101,110,116,115,0);
         mutedn = `${(String.fromCharCode(122,0) == mutedn ? mutedn.length : signinupT.length)}`;
         signinupT = [2 | mimeR.length];
         mimeR += `${mimeR.length * mimeR.length}`;
         mutedn += `${2 << (Math.min(5, mutedn.length))}`;
       let gnewsN: Array<any> = [437, 938, 676];
       let slidert: Array<any> = [610, 952, 956];
      basketballmatchdetailbgE += parseFloat(`${mutedn.length / (Math.max(1, iconpointscorex.size))}`);
      iconS /= Math.max(parseFloat(`${3}`), 5);
   for (let s = 0; s < 3; s++) {
      iconpointscorex.set(`${moreP}`, moreP.length);
   }
      moreP = `${bottoml.length}`;
       let spinnerm = 4.0;
       let combinedu = true;
       let watchnowbgI = 3.0;
      if (4.94 >= (5.4 / (Math.max(1, spinnerm))) || combinedu) {
         spinnerm += 1;
      }
         combinedu = spinnerm >= 66.80;
          let statsnomoredataq = String.fromCharCode(121,95,50,49,95,99,97,115,99,97,100,101,100,0);
          let connectionK = String.fromCharCode(99,95,54,54,95,110,115,117,105,0);
         spinnerm *= ((combinedu ? 2 : 2) << (Math.min(Math.abs(parseInt(`${watchnowbgI}`)), 2)));
         statsnomoredataq += `${statsnomoredataq.length}`;
         connectionK += `${statsnomoredataq.length / 1}`;
         spinnerm *= parseInt(`${watchnowbgI}`) | 3;
         watchnowbgI *= (parseInt(`${watchnowbgI}`) | (combinedu ? 2 : 5));
         combinedu = !combinedu;
      while (5.32 < spinnerm && 5.45 < (spinnerm * 5.32)) {
         combinedu = watchnowbgI <= spinnerm;
         break;
      }
          let bellreminderC = 0.0;
          let homeplayerD = 3;
          let policyc = 4;
         spinnerm /= Math.max(3, policyc & 2);
         bellreminderC += homeplayerD - 3;
         homeplayerD ^= parseInt(`${bellreminderC}`) | homeplayerD;
         policyc >>= Math.min(3, Math.abs(homeplayerD & parseInt(`${bellreminderC}`)));
          let libsentryZ = String.fromCharCode(114,97,110,107,95,121,95,53,51,0);
          let footballfieldt = true;
         watchnowbgI += 1;
         libsentryZ += `${(String.fromCharCode(87,0) == libsentryZ ? (footballfieldt ? 2 : 5) : libsentryZ.length)}`;
         footballfieldt = (1 <= (libsentryZ.length / (Math.max(10, (footballfieldt ? libsentryZ.length : 1)))));
      private_15d = `${parseInt(`${basketballmatchdetailbgE}`) >> (Math.min(Math.abs(3), 4))}`;

    const result = await yysHomeloading.getUserDetails();

   while (bottoml == String.fromCharCode(54,0)) {
      related5 += `${(constantsM == String.fromCharCode(99,0) ? private_15d.length : constantsM.length)}`;
      break;
   }
   let anythinkI = constantsM.length >= 7178539;
   do {
      constantsM += "1";
      if (anythinkI) {
         break;
      }
   } while ((constantsM.length < 2) && anythinkI);
   let renewD = 5936889 <= constantsM.length;
   do {
       let libturbomodulejsijnid: Map<any, any> = new Map([[String.fromCharCode(109,95,49,49,95,117,118,109,118,0),441], [String.fromCharCode(106,95,49,48,95,99,111,110,118,101,120,0),827], [String.fromCharCode(110,95,56,54,95,112,114,101,118,105,111,117,115,0),402]]);
       let clearo = 4.0;
         clearo /= Math.max(3, 5);
      let rewardI = 5594027.0 <= clearo;
      do {
         clearo -= libturbomodulejsijnid.size;
         if (rewardI) {
            break;
         }
      } while (rewardI && (4 == (4 - libturbomodulejsijnid.size) && (parseInt(`${clearo}`) - libturbomodulejsijnid.size) == 4));
          let animationsH = String.fromCharCode(97,109,114,119,98,100,101,99,95,103,95,50,53,0);
          let countryY = String.fromCharCode(102,105,110,97,108,105,122,101,114,95,99,95,53,48,0);
         clearo += 2 / (Math.max(10, countryY.length));
         animationsH = `${1 >> (Math.min(5, animationsH.length))}`;
         countryY += `${animationsH.length ^ animationsH.length}`;
      if (4 < (4 - libturbomodulejsijnid.size) || (clearo * 5.7) < 3.87) {
         clearo -= 2;
      }
         libturbomodulejsijnid.set(`${clearo}`, libturbomodulejsijnid.size & 1);
      if (Array.from(libturbomodulejsijnid.values()).includes(clearo)) {
         libturbomodulejsijnid.set(`${clearo}`, libturbomodulejsijnid.size);
      }
      constantsM = `${libturbomodulejsijnid.size & private_15d.length}`;
      if (renewD) {
         break;
      }
   } while (renewD && (3.79 == (5.14 * basketballmatchdetailbgE)));
   let orientationc = moreP == String.fromCharCode(107,120,52,119,54,53,122,0);
   do {
      moreP = `${parseInt(`${minimizel}`)}`;
      if (orientationc) {
         break;
      }
   } while (orientationc && (constantsM != moreP));
   for (let r = 0; r < 2; r++) {
      basketballmatchdetailbgE -= parseFloat(`${parseInt(`${iconS}`)}`);
   }
    if (result == null) {

       let redirectJ = 4;
      if ((5 & redirectJ) < 1) {
          let tickx = 4;
          let catalogy = 3.0;
          let launcherD = false;
         redirectJ >>= Math.min(4, Math.abs(3));
         tickx >>= Math.min(2, Math.abs(parseInt(`${catalogy}`)));
         catalogy /= Math.max(5, parseFloat(`${parseInt(`${catalogy}`) - 2}`));
         launcherD = !launcherD || 51 <= tickx;
      }
      while ((redirectJ % 4) < 2) {
         redirectJ += 1 - redirectJ;
         break;
      }
         redirectJ <<= Math.min(1, Math.abs(1 >> (Math.min(3, Math.abs(redirectJ)))));
      private_15d = `${parseInt(`${basketballmatchdetailbgE}`)}`;
      moreP += `${parseInt(`${iconS}`)}`;
      iconS -= parseFloat(`${2 | parseInt(`${iconS}`)}`);
       let register_g8 = false;
       let subtextH = String.fromCharCode(119,97,110,116,115,95,98,95,54,55,0);
       let libhermesE = String.fromCharCode(99,95,49,48,48,95,114,97,100,97,114,0);
      while (5 <= libhermesE.length || subtextH.length <= 5) {
         libhermesE = "2";
         break;
      }
      if (libhermesE.endsWith(`${register_g8}`)) {
         register_g8 = subtextH.startsWith(`${register_g8}`);
      }
      iconS -= parseFloat(`${private_15d.length * related5.length}`);
   for (let l = 0; l < 2; l++) {
      basketballmatchdetailbgE += parseFloat(`${3}`);
   }
      return;
    }

    await dispatch(updateUserAuth(result));

      minimizel -= parseFloat(`${parseInt(`${iconS}`) ^ moreP.length}`);
      related5 = `${private_15d.length / (Math.max(constantsM.length, 3))}`;
       let matchactiveJ = String.fromCharCode(112,97,117,115,101,95,100,95,52,53,0);
       let libtobq = String.fromCharCode(107,95,57,55,95,103,97,116,101,100,0);
       let whitebell3 = 4.0;
         libtobq = `${parseInt(`${whitebell3}`)}`;
         matchactiveJ += "3";
      while ((whitebell3 * libtobq.length) >= 4.53) {
          let becomeM = String.fromCharCode(113,95,50,49,95,101,108,97,115,116,105,99,0);
          let bggradientH: Array<any> = [970, 506];
          let submitY = String.fromCharCode(118,95,52,57,95,99,108,101,97,114,0);
          let buttonL = String.fromCharCode(114,111,116,97,116,105,110,103,95,113,95,53,55,0);
         libtobq = `${parseInt(`${whitebell3}`)}`;
         becomeM = `${submitY.length - 1}`;
         bggradientH = [(String.fromCharCode(53,0) == submitY ? becomeM.length : submitY.length)];
         buttonL = `${buttonL.length / (Math.max(9, becomeM.length))}`;
         break;
      }
      let watchi = libtobq.length >= 5481444;
      do {
         libtobq = `${parseInt(`${whitebell3}`)}`;
         if (watchi) {
            break;
         }
      } while ((2.58 >= whitebell3) && watchi);
      if (matchactiveJ.length <= parseInt(`${whitebell3}`)) {
         matchactiveJ = `${matchactiveJ.length}`;
      }
      while (matchactiveJ.endsWith(`${whitebell3}`)) {
          let penaltygoalM = 2.0;
          let shareZ = true;
          let othermatchdetailbgI: Map<any, any> = new Map([[String.fromCharCode(102,95,50,50,95,110,111,116,105,102,105,101,114,0),384], [String.fromCharCode(118,95,57,95,99,111,110,110,105,110,112,117,116,0),141]]);
         matchactiveJ += `${(String.fromCharCode(67,0) == libtobq ? libtobq.length : parseInt(`${whitebell3}`))}`;
         penaltygoalM *= (parseFloat(`${othermatchdetailbgI.size >> (Math.min(5, Math.abs((shareZ ? 3 : 4))))}`));
         shareZ = null == othermatchdetailbgI.get(`${penaltygoalM}`);
         break;
      }
         libtobq = `${(String.fromCharCode(97,0) == matchactiveJ ? libtobq.length : matchactiveJ.length)}`;
      let moona = 6025338 <= libtobq.length;
      do {
         libtobq += `${parseInt(`${whitebell3}`)}`;
         if (moona) {
            break;
         }
      } while (moona && (matchactiveJ.length <= libtobq.length));
      let liveshareh = libtobq.length >= 7615590;
      do {
          let yellowcirclebg0: Array<any> = [String.fromCharCode(111,95,56,55,95,105,110,116,115,0), String.fromCharCode(119,95,49,49,0), String.fromCharCode(109,95,52,48,95,97,116,104,0)];
          let iconbellactivej = true;
          let editO = String.fromCharCode(108,95,55,49,95,99,111,117,112,108,105,110,103,0);
          let whistleorangel: Array<any> = [589, 352];
          let greyS = String.fromCharCode(97,110,111,116,104,101,114,95,105,95,56,56,0);
         libtobq = "1";
         yellowcirclebg0 = [whistleorangel.length + greyS.length];
         iconbellactivej = iconbellactivej || greyS.length == 70;
         editO += `${((iconbellactivej ? 3 : 4) - editO.length)}`;
         whistleorangel = [greyS.length % (Math.max(1, 5))];
         if (liveshareh) {
            break;
         }
      } while (liveshareh && (matchactiveJ.length > 5 && 5 > libtobq.length));
      private_15d += `${parseInt(`${iconS}`)}`;
   while (2.14 == basketballmatchdetailbgE) {
      basketballmatchdetailbgE /= Math.max(2, parseFloat(`${iconpointscorex.size}`));
      break;
   }
       let privilegeA = String.fromCharCode(115,95,56,52,95,97,110,115,119,101,114,115,0);
      for (let m = 0; m < 3; m++) {
         privilegeA = `${(privilegeA == String.fromCharCode(74,0) ? privilegeA.length : privilegeA.length)}`;
      }
         privilegeA = `${1 | privilegeA.length}`;
         privilegeA = `${privilegeA.length}`;
      moreP += `${(String.fromCharCode(85,0) == privilegeA ? privilegeA.length : constantsM.length)}`;

    return;
  };

  useEffect(() => {
    

    let mergedArray;

    if (userState.user?.userUpline.created_at != '') {
      mergedArray = userState.user?.userInvitedUserList.concat(userState.user?.userUpline);
    } else {
      mergedArray = userState.user.userInvitedUserList;
    }

    mergedArray.sort((a: any, b: any) => {
      let dateA: any;
      dateA = new Date(a.created_at);
      let dateB: any;

      dateB = new Date(b.created_at);
      return dateB - dateA;
    });

    mergedArray = mergedArray.map((item: any) => {
      let displayText = '';
      if (item.text) {
        displayText = item.text;
        item.invited_vip_reward_day = item.vip_reward_day;
      } else {
        displayText = item.title;
      }

      return { ...item, displayText: displayText };
    });
    console.log('mergedArray');
    console.log(mergedArray);
    setInviteList(mergedArray);
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="累计奖励明细" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        { }
        <LinearGradient
          colors={['#323638', '#1a1d20']} 
          locations={[0.1, 1]}
          start={{ x: 1, y: 0 }} 
          end={{ x: 0, y: 1 }} 
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 120,
          }}>
          <View style={styles.container}>
            { }
            <Text style={styles.title}>{userState.user?.userTotalInvite}</Text>
            <Text style={styles.subTitle}>已邀请人数</Text>
          </View>

          <View style={styles.container}>
            { }
            <Text style={styles.title}>
              {userState.user?.userAccumulateRewardDay}
            </Text>
            <Text style={styles.subTitle}>累计获得天数</Text>
          </View>
        </LinearGradient>

        { }
        <View style={{ marginTop: 40, alignItems: 'center' }}>
          <Text
            style={{ ...textVariants.header, fontSize: 16, fontWeight: '700' }}>
            邀请记录
          </Text>

          {inviteList.length > 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              {inviteList.map(item => (
                <View
                  key={item.displayText}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                  }}>
                  <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text
                      style={{ fontSize: 16, color: '#fff' }}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.displayText}
                    </Text>
                    <Text style={{ color: '#9c9c9c' }}>{item.created_at}</Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 16,
                        flex: 1,
                      }}>
                      +{item.invited_vip_reward_day}天
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {inviteList.length == 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  alignContent: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                }}>
                <View>
                  <Text style={{ color: '#fff' }}>暂时无邀请记录</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundImage: {
    flex: 1, 
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 25,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9C9C9C',
  },
});
