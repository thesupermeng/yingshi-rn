import React, { useCallback, useEffect, useState, memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import MainHeader from "../../components/header/wawa_favorite_header";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { useInfiniteQuery } from "@tanstack/react-query";
import { wawaQuestIconsubssuccess, wawaWithCrown } from "@type/wawa_gradlew";
import VodPlaylist from "../../components/playlist/wawa_arrowright";
import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN } from "@utility/wawa_iconpointscore";
import FastImage from "../../components/common/wawa_iconarrowrightblack";
import { useIsFocused } from "@react-navigation/native";
import NoConnection from "./../../components/common/wawa_filed_privacy";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { useAppSelector } from "@hooks/wawa_root";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { wawaWhitetickAway } from "@api";
import VodWithDescriptionListRank from "../../components/vod/wawa_textinput_center";

type wawaBellreminderDisconnected = {
  item: any;
  index: number;
};

function Rank() {
       let eventS: Map<any, any> = new Map([[String.fromCharCode(113,95,53,53,95,116,120,102,109,0),755], [String.fromCharCode(100,105,97,108,111,103,117,101,95,110,95,52,57,0),751], [String.fromCharCode(100,98,111,111,108,104,117,102,102,95,114,95,53,55,0),337]]);
    let backwhiteJ = String.fromCharCode(116,95,49,50,95,116,114,97,110,115,112,97,114,101,110,116,0);
    let shootyesgoalK: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,98,105,108,105,116,121,95,110,95,52,54,0),1], [String.fromCharCode(117,110,101,100,105,116,97,98,108,101,95,104,95,56,52,0),189]]);
    let imageactionliveY = String.fromCharCode(98,95,55,53,95,108,111,99,111,0);
    let reducery: Array<any> = [19, 564, 199];
    let iconbellq = String.fromCharCode(108,95,56,52,95,100,111,99,107,101,114,0);
    let productR = String.fromCharCode(100,95,55,48,95,116,105,99,107,101,114,115,0);
    let libtany = 3.0;
    let clock_ = String.fromCharCode(100,97,105,108,121,95,50,95,49,0);
    let textlayoutmanager1: Array<any> = [758, 411];
    let white_ = String.fromCharCode(99,111,99,111,115,100,120,95,100,95,56,56,0);
    let whiteY = false;
    let giflivestreamingW: Map<any, any> = new Map([[String.fromCharCode(110,111,116,104,101,108,100,95,49,95,52,0),967], [String.fromCharCode(102,109,115,117,98,95,114,95,56,55,0),432], [String.fromCharCode(103,95,50,52,95,114,101,115,105,122,101,114,0),328]]);
    let airbnbstarselectedi = String.fromCharCode(110,112,97,116,99,104,101,115,95,116,95,51,57,0);
       let libjsiT = String.fromCharCode(115,116,114,101,97,109,115,95,112,95,49,49,0);
          let dataX = 3.0;
          let settingK = 2;
          let iconwatchnow0 = String.fromCharCode(109,95,49,57,95,98,110,104,101,120,0);
         libjsiT = `${settingK << (Math.min(libjsiT.length, 2))}`;
         dataX /= Math.max(2, parseFloat(`${2 * iconwatchnow0.length}`));
         settingK <<= Math.min(5, Math.abs(parseInt(`${dataX}`) / 3));
         iconwatchnow0 = `${(String.fromCharCode(48,0) == iconwatchnow0 ? iconwatchnow0.length : parseInt(`${dataX}`))}`;
         libjsiT += `${(String.fromCharCode(65,0) == libjsiT ? libjsiT.length : libjsiT.length)}`;
         libjsiT = `${(String.fromCharCode(116,0) == libjsiT ? libjsiT.length : libjsiT.length)}`;
      backwhiteJ += "3";

  const navigation = useNavigation();

      imageactionliveY += `${productR.length >> (Math.min(3, Math.abs(parseInt(`${libtany}`))))}`;
  const { textVariants, colors, spacing } = useTheme();

   if (!backwhiteJ.startsWith(productR)) {
       let moonP = 1;
       let rooth = 2.0;
         moonP *= 3;
      let gmailE = 9447684.0 <= rooth;
      do {
          let unreadn: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,95,99,95,57,50,0),129], [String.fromCharCode(103,95,56,52,95,115,116,97,108,108,0),728]]);
          let libreactC = 2.0;
          let predictiondefaultG = true;
          let chinasamej = 5.0;
          let libhermesg = 2.0;
         rooth /= Math.max(parseFloat(`${parseInt(`${libreactC}`) - 3}`), 3);
         unreadn.set(`${predictiondefaultG}`, ((predictiondefaultG ? 4 : 2) - parseInt(`${libhermesg}`)));
         libreactC /= Math.max(2, parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${chinasamej}`)), 1))}`));
         chinasamej /= Math.max(5, parseFloat(`${unreadn.size}`));
         libhermesg /= Math.max(parseFloat(`${unreadn.size ^ 3}`), 1);
         if (gmailE) {
            break;
         }
      } while (gmailE && ((rooth + 1.43) <= 1.6));
      for (let m = 0; m < 3; m++) {
         rooth /= Math.max(1, parseFloat(`${3}`));
      }
      for (let o = 0; o < 1; o++) {
         rooth -= parseFloat(`${2}`);
      }
      while (1.23 <= (rooth - moonP)) {
         rooth *= parseFloat(`${1}`);
         break;
      }
      while ((moonP ^ 4) >= 2) {
         rooth -= parseFloat(`${1}`);
         break;
      }
      backwhiteJ = "2";
   }
  const LIMIT_PER_PAGE = 10;

   if (eventS.size < 5) {
      eventS = new Map([[`${reducery.length}`, 2]]);
   }

  const [totalPage, setTotalPage] = useState(0);

   for (let o = 0; o < 3; o++) {
       let iconschedule8 = 2.0;
       let schedulert = 5.0;
      let chat_ = 9477423.0 <= schedulert;
      do {
         schedulert -= parseFloat(`${parseInt(`${iconschedule8}`)}`);
         if (chat_) {
            break;
         }
      } while ((2.25 < (3.58 * schedulert)) && chat_);
         iconschedule8 += parseInt(`${schedulert}`);
       let forwardl = String.fromCharCode(118,95,57,48,95,108,111,117,112,101,0);
       let telemetry7 = 5;
       let sansS: Array<any> = [String.fromCharCode(112,97,114,115,101,95,117,95,57,48,0), String.fromCharCode(121,101,108,108,111,119,95,117,95,54,49,0)];
       let stre: Array<any> = [138, 306];
      while (telemetry7 == iconschedule8) {
          let sort8 = String.fromCharCode(100,105,115,116,97,110,99,101,95,107,95,53,53,0);
          let theme9 = 2.0;
         iconschedule8 += telemetry7 ^ 2;
         sort8 = `${sort8.length - parseInt(`${theme9}`)}`;
         theme9 += parseFloat(`${sort8.length}`);
         break;
      }
      backwhiteJ += `${2 << (Math.min(1, clock_.length))}`;
   }

  const isFocused = useIsFocused();

   if ((shootyesgoalK.size % 1) == 3 || (shootyesgoalK.size % 1) == 5) {
      shootyesgoalK = new Map([[iconbellq, 3]]);
   }
  const [isOffline, setIsOffline] = useState(false);

   for (let j = 0; j < 2; j++) {
      shootyesgoalK.set(backwhiteJ, backwhiteJ.length);
   }

  const [isLoading, setIsLoading] = useState(false);

       let wifirouterz: Map<any, any> = new Map([[String.fromCharCode(113,95,52,53,95,100,105,115,99,108,111,115,117,114,101,0),String.fromCharCode(97,114,99,104,95,50,95,54,57,0)], [String.fromCharCode(115,101,116,114,97,110,103,101,95,121,95,57,55,0),String.fromCharCode(100,95,49,50,95,108,111,115,101,0)]]);
       let libimagepipelinee = false;
       let successA = String.fromCharCode(113,111,115,95,55,95,55,50,0);
      for (let o = 0; o < 2; o++) {
         libimagepipelinee = successA.length > 73;
      }
      while (3 >= (wifirouterz.size | 1) && !libimagepipelinee) {
         libimagepipelinee = !successA.endsWith(`${libimagepipelinee}`);
         break;
      }
          let volumes = 5.0;
          let referrer6: Array<any> = [130, 295];
          let xadsdkO = 0;
         libimagepipelinee = String.fromCharCode(99,0) == successA;
         volumes *= parseFloat(`${referrer6.length ^ parseInt(`${volumes}`)}`);
         referrer6.push(referrer6.length * 3);
         xadsdkO -= referrer6.length;
         libimagepipelinee = successA.length >= 89 || !libimagepipelinee;
         libimagepipelinee = wifirouterz.get(`${libimagepipelinee}`) != null;
      if (libimagepipelinee && 3 >= successA.length) {
          let subsl = false;
          let penaltyshootG: Array<any> = [661, 784];
          let anewsshareb = String.fromCharCode(109,95,52,48,95,100,105,102,102,115,0);
          let logouserq: Array<any> = [621, 254];
         successA = `${(String.fromCharCode(84,0) == anewsshareb ? logouserq.length : anewsshareb.length)}`;
         subsl = (91 >= (penaltyshootG.length / (Math.max(1, (subsl ? 91 : penaltyshootG.length)))));
         logouserq.push(3);
      }
          let libavutilf = String.fromCharCode(119,95,51,52,95,116,97,107,100,115,112,0);
         wifirouterz = new Map([[`${wifirouterz.size}`, libavutilf.length + wifirouterz.size]]);
      if (libimagepipelinee || successA.length >= 5) {
         successA = `${successA.length * wifirouterz.size}`;
      }
         wifirouterz = new Map([[`${wifirouterz.size}`, 1 % (Math.max(10, wifirouterz.size))]]);
      shootyesgoalK = new Map([[iconbellq, iconbellq.length]]);

  const [selectedRankIndex, setSelectedRankIndex] = useState(0);

      libtany += productR.length % (Math.max(backwhiteJ.length, 9));
  const [rankVodList, setRankVodList] = useState([]);

      textlayoutmanager1 = [2];

  const [tabList, setTabList] = useState([]);

   let dependency8 = 6259524 >= productR.length;
   do {
       let long_oX = String.fromCharCode(101,103,114,101,115,115,95,102,95,52,54,0);
       let statisticsinactivem = String.fromCharCode(116,121,112,101,95,48,95,52,55,0);
       let rewardW = 3.0;
      let referrerl = String.fromCharCode(55,54,103,119,102,116,49,51,0) == long_oX;
      do {
         long_oX = `${statisticsinactivem.length}`;
         if (referrerl) {
            break;
         }
      } while (referrerl && (statisticsinactivem != long_oX));
          let regengb: Array<any> = [161, 340, 199];
          let string1 = true;
          let rewindA = String.fromCharCode(110,95,52,95,115,117,98,111,98,106,101,99,116,0);
         rewardW *= parseFloat(`${statisticsinactivem.length % (Math.max(1, 1))}`);
         regengb = [1];
         string1 = regengb.length > 14;
         rewindA = "2";
      let hejiu = String.fromCharCode(115,107,98,97,117,48,55,118,110,117,0) == statisticsinactivem;
      do {
         statisticsinactivem += `${long_oX.length - 1}`;
         if (hejiu) {
            break;
         }
      } while ((4 == statisticsinactivem.length) && hejiu);
          let final_5j = String.fromCharCode(100,101,108,101,116,105,110,103,95,110,95,57,48,0);
          let privatechatbgU = String.fromCharCode(100,101,108,97,121,115,95,55,95,51,0);
         long_oX += `${statisticsinactivem.length + 1}`;
         final_5j += `${3 / (Math.max(4, privatechatbgU.length))}`;
         privatechatbgU += `${privatechatbgU.length & final_5j.length}`;
         rewardW /= Math.max(parseFloat(`${2}`), 2);
          let filter5 = 0.0;
         statisticsinactivem = `${parseInt(`${filter5}`)}`;
       let guideL: Array<any> = [600, 555, 876];
          let fullscreenmax2 = String.fromCharCode(109,97,110,117,97,108,108,121,95,101,95,56,54,0);
          let blackA = String.fromCharCode(109,99,108,109,115,95,111,95,57,57,0);
         rewardW += parseFloat(`${long_oX.length + blackA.length}`);
         fullscreenmax2 += `${fullscreenmax2.length << (Math.min(3, fullscreenmax2.length))}`;
         blackA += `${fullscreenmax2.length}`;
         statisticsinactivem = `${(String.fromCharCode(77,0) == statisticsinactivem ? long_oX.length : statisticsinactivem.length)}`;
      productR += `${iconbellq.length ^ eventS.size}`;
      if (dependency8) {
         break;
      }
   } while (dependency8 && (iconbellq != productR));
  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

   let greyarrowupk = iconbellq == String.fromCharCode(122,52,49,98,114,100,98,0);
   do {
      iconbellq += "3";
      if (greyarrowupk) {
         break;
      }
   } while (greyarrowupk && (iconbellq.endsWith(`${textlayoutmanager1.length}`)));

  

   for (let l = 0; l < 3; l++) {
      white_ += "1";
   }
  useFocusEffect(
    useCallback(() => {

   let controlo = iconbellq == String.fromCharCode(101,106,103,106,52,57,0);
   do {
       let iconqqu = 3.0;
       let codeR = String.fromCharCode(111,105,100,95,117,95,55,56,0);
      for (let v = 0; v < 2; v++) {
         codeR += `${parseInt(`${iconqqu}`)}`;
      }
      for (let d = 0; d < 1; d++) {
         iconqqu *= parseFloat(`${codeR.length}`);
      }
      let colorsh = codeR.length >= 8518100;
      do {
         codeR = `${codeR.length - 1}`;
         if (colorsh) {
            break;
         }
      } while (colorsh && ((codeR.length >> (Math.min(Math.abs(5), 4))) >= 3));
          let iconsettingL = 4;
         codeR = `${(String.fromCharCode(73,0) == codeR ? iconsettingL : codeR.length)}`;
         codeR += `${2 << (Math.min(1, Math.abs(parseInt(`${iconqqu}`))))}`;
         codeR = `${parseInt(`${iconqqu}`) >> (Math.min(codeR.length, 4))}`;
      iconbellq = `${productR.length}`;
      if (controlo) {
         break;
      }
   } while ((!iconbellq.includes(`${textlayoutmanager1.length}`)) && controlo);
      console.log("rank");

   for (let z = 0; z < 1; z++) {
      backwhiteJ += `${(iconbellq == String.fromCharCode(74,0) ? iconbellq.length : clock_.length)}`;
   }
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playlistViewsAnalytics();

       let thumbnailU = String.fromCharCode(100,97,114,116,115,95,105,95,56,51,0);
      for (let k = 0; k < 1; k++) {
         thumbnailU += `${thumbnailU.length >> (Math.min(Math.abs(3), 1))}`;
      }
         thumbnailU += `${(thumbnailU == String.fromCharCode(105,0) ? thumbnailU.length : thumbnailU.length)}`;
       let headerC = String.fromCharCode(115,116,97,110,100,97,108,111,110,101,95,105,95,56,56,0);
       let libreact8 = String.fromCharCode(122,95,55,56,95,114,101,99,116,97,110,103,108,101,0);
      libtany /= Math.max(3, imageactionliveY.length);
    }, [])
  );

      imageactionliveY += `${clock_.length * iconbellq.length}`;
  

   if (1.31 < (1.95 * libtany) && 2 < (shootyesgoalK.size | 2)) {
      shootyesgoalK = new Map([[`${eventS.size}`, eventS.size / (Math.max(backwhiteJ.length, 8))]]);
   }

  

   while (1 < (iconbellq.length / (Math.max(8, reducery.length)))) {
      reducery = [((whiteY ? 5 : 2) - 1)];
      break;
   }
  const handleTabPress = () => {

      clock_ += `${imageactionliveY.length + 1}`;
    if (isFocused) {

   for (let v = 0; v < 1; v++) {
      white_ += `${textlayoutmanager1.length}`;
   }
      handleRefresh();

   if (4.74 < libtany) {
      reducery = [productR.length];
   }
    }
  };

      productR += `${airbnbstarselectedi.length}`;

  const checkConnection = useCallback(async () => {

       let iconscheduleC: Map<any, any> = new Map([[String.fromCharCode(101,120,112,110,97,100,101,100,95,53,95,51,56,0),true ], [String.fromCharCode(121,95,49,52,95,100,105,109,109,105,110,103,0),true ], [String.fromCharCode(105,110,118,105,116,101,95,54,95,49,50,0),false ]]);
       let typesZ = String.fromCharCode(121,95,49,48,48,95,100,105,115,112,97,116,99,104,101,114,0);
      if (2 > (1 | iconscheduleC.size) && (1 | typesZ.length) > 2) {
         typesZ += `${(String.fromCharCode(66,0) == typesZ ? iconscheduleC.size : typesZ.length)}`;
      }
       let arrowu = 2;
      let fastforwardf = String.fromCharCode(110,118,116,57,117,111,49,108,57,0) == typesZ;
      do {
          let pingq = String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,95,106,95,56,48,0);
          let predictionM = String.fromCharCode(97,114,109,99,97,112,95,111,95,57,49,0);
          let regengT: Array<any> = [39, 173];
          let hiad9 = true;
         typesZ = `${1 & predictionM.length}`;
         pingq = "2";
         predictionM += `${((hiad9 ? 4 : 1) - 1)}`;
         regengT.push(regengT.length & 1);
         if (fastforwardf) {
            break;
         }
      } while (fastforwardf && (typesZ.startsWith(`${iconscheduleC.size}`)));
      while (5 == (4 >> (Math.min(4, typesZ.length))) && (arrowu >> (Math.min(Math.abs(4), 4))) == 3) {
          let uimanagerq = true;
          let clock6 = String.fromCharCode(99,109,115,103,115,95,103,95,57,51,0);
          let defaultfootballbg7 = String.fromCharCode(111,112,101,114,97,116,111,114,95,120,95,57,52,0);
          let downloadingi = 5;
          let codegenl = 4;
         typesZ += `${defaultfootballbg7.length}`;
         uimanagerq = !uimanagerq;
         clock6 += `${((uimanagerq ? 3 : 3) | downloadingi)}`;
         defaultfootballbg7 += `${codegenl + downloadingi}`;
         codegenl <<= Math.min(5, Math.abs(clock6.length | 1));
         break;
      }
         iconscheduleC.set(typesZ, 3);
      for (let l = 0; l < 1; l++) {
         iconscheduleC.set(`${arrowu}`, arrowu | 1);
      }
      imageactionliveY += `${(String.fromCharCode(114,0) == airbnbstarselectedi ? airbnbstarselectedi.length : clock_.length)}`;
    const state = await NetInfo.fetch();

       let delegate_vt = 3.0;
      if (delegate_vt >= delegate_vt) {
         delegate_vt *= parseFloat(`${parseInt(`${delegate_vt}`) & 2}`);
      }
         delegate_vt /= Math.max(parseFloat(`${parseInt(`${delegate_vt}`)}`), 5);
      let predictionactiver = delegate_vt <= 7640725.0;
      do {
         delegate_vt += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${delegate_vt}`)), 2))}`);
         if (predictionactiver) {
            break;
         }
      } while (predictionactiver && (1.7 > delegate_vt));
      eventS.set(`${whiteY}`, eventS.size / (Math.max(1, 3)));
    const offline = !(state.isConnected && state.isInternetReachable);

      white_ += `${(white_ == String.fromCharCode(99,0) ? shootyesgoalK.size : white_.length)}`;
    setIsOffline(offline);

   while (3 >= (airbnbstarselectedi.length + textlayoutmanager1.length) || 3 >= (textlayoutmanager1.length + airbnbstarselectedi.length)) {
      airbnbstarselectedi += `${white_.length}`;
      break;
   }
    if (!offline) {

   if (1 <= airbnbstarselectedi.length && !whiteY) {
      airbnbstarselectedi += `${(String.fromCharCode(57,0) == white_ ? white_.length : giflivestreamingW.size)}`;
   }
      handleRefresh();
    }
  }, []);

   if (3 <= reducery.length) {
      reducery.push(shootyesgoalK.size & 1);
   }

  useEffect(() => {

      eventS.set(airbnbstarselectedi, (String.fromCharCode(50,0) == airbnbstarselectedi ? airbnbstarselectedi.length : iconbellq.length));
    setIsOffline(settingsReducer.isOffline);

   let umengo = clock_.length >= 8771514;
   do {
      clock_ = "3";
      if (umengo) {
         break;
      }
   } while (umengo && ((giflivestreamingW.size * clock_.length) >= 3));
    console.log("rank ");

       let videojsz = String.fromCharCode(97,95,55,95,97,98,115,100,105,102,102,0);
          let iconarrowrightorangeo = String.fromCharCode(115,97,118,101,112,111,105,110,116,115,95,121,95,55,54,0);
          let become0 = true;
         videojsz = `${((become0 ? 1 : 4) | iconarrowrightorangeo.length)}`;
      for (let b = 0; b < 2; b++) {
         videojsz += `${videojsz.length & videojsz.length}`;
      }
         videojsz += `${videojsz.length}`;
      giflivestreamingW.set(productR, 1);
    handleRefresh();
  }, []);

      libtany += (eventS.size + (whiteY ? 4 : 5));

  useFocusEffect(
    useCallback(() => {

   for (let y = 0; y < 2; y++) {
      libtany *= 1;
   }
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {

   let register_nj = 9691049 >= shootyesgoalK.size;
   do {
      shootyesgoalK.set(`${libtany}`, 2 & parseInt(`${libtany}`));
      if (register_nj) {
         break;
      }
   } while (register_nj && ((giflivestreamingW.size | 4) == 3));
        setIsOffline(settingsReducer.isOffline);

   for (let d = 0; d < 3; d++) {
       let expiredR = 3.0;
       let greyarrowupz = 0.0;
       let gmaili = String.fromCharCode(115,95,53,56,95,99,97,108,108,98,97,99,107,0);
       let iconeditt = 3.0;
       let pingP = String.fromCharCode(100,95,51,95,97,110,110,117,108,97,114,0);
         greyarrowupz *= 1 & parseInt(`${iconeditt}`);
         greyarrowupz -= parseInt(`${greyarrowupz}`) / (Math.max(pingP.length, 6));
         greyarrowupz -= gmaili.length + 1;
      for (let s = 0; s < 2; s++) {
         greyarrowupz += pingP.length % 1;
      }
         greyarrowupz /= Math.max(5, parseInt(`${expiredR}`));
      for (let f = 0; f < 1; f++) {
          let iconwechath = false;
          let pathL = 2.0;
          let goallogon = 2.0;
          let showZ = String.fromCharCode(105,110,116,101,114,95,120,95,57,51,0);
         gmaili += `${parseInt(`${iconeditt}`)}`;
         iconwechath = showZ.length >= goallogon;
         pathL += parseInt(`${goallogon}`);
         showZ += `${parseInt(`${pathL}`)}`;
      }
          let awayicona = 0.0;
         iconeditt /= Math.max(1, 5);
         awayicona /= Math.max(parseInt(`${awayicona}`) << (Math.min(1, Math.abs(1))), 5);
      for (let x = 0; x < 3; x++) {
         expiredR -= parseInt(`${greyarrowupz}`);
      }
      for (let u = 0; u < 1; u++) {
          let liblogger0: Array<any> = [820, 950, 587];
          let networki = 1;
          let resend6 = 5.0;
          let inouttargetyellowc = 1.0;
          let inouttargetredT = true;
         iconeditt -= parseInt(`${resend6}`);
         liblogger0 = [parseInt(`${inouttargetyellowc}`) / (Math.max(1, networki))];
         networki &= 3 + networki;
         resend6 -= liblogger0.length;
         inouttargetyellowc += networki % 1;
         inouttargetredT = 42.74 < inouttargetyellowc;
      }
      while (gmaili.length < parseInt(`${expiredR}`)) {
          let shielddonei = 0;
          let langkeyw = String.fromCharCode(101,95,51,95,111,118,101,114,108,97,112,0);
          let popupz: Array<any> = [769, 614, 816];
          let libfollyP = String.fromCharCode(97,118,112,114,111,103,114,97,109,95,53,95,52,49,0);
         gmaili = "1";
         shielddonei &= langkeyw.length | shielddonei;
         langkeyw = "3";
         popupz = [shielddonei];
         libfollyP += `${shielddonei}`;
         break;
      }
      if (greyarrowupz >= 2.54) {
          let component8 = String.fromCharCode(117,95,49,50,95,115,101,103,102,101,97,116,117,114,101,115,0);
          let hoverz = 5.0;
          let iconarrowleftS = String.fromCharCode(121,95,53,48,95,97,99,113,117,105,114,101,0);
         pingP += `${component8.length}`;
         component8 += `${parseInt(`${hoverz}`) ^ iconarrowleftS.length}`;
         hoverz += 2;
         iconarrowleftS = `${parseInt(`${hoverz}`)}`;
      }
          let connection4 = String.fromCharCode(101,95,52,56,95,101,120,104,97,117,115,116,0);
         pingP = `${3 * parseInt(`${iconeditt}`)}`;
         connection4 += "2";
          let historyM = false;
         gmaili += `${(pingP == String.fromCharCode(79,0) ? (historyM ? 2 : 5) : pingP.length)}`;
      let encrypt7 = iconeditt >= 6195116.0;
      do {
         iconeditt += parseInt(`${expiredR}`) * 3;
         if (encrypt7) {
            break;
         }
      } while (encrypt7 && (2 > (parseInt(`${iconeditt}`) - pingP.length)));
      while (3.25 >= (expiredR - iconeditt) || (expiredR - iconeditt) >= 3.25) {
         iconeditt += parseInt(`${iconeditt}`) ^ 3;
         break;
      }
      reducery = [airbnbstarselectedi.length << (Math.min(5, Math.abs(eventS.size)))];
   }
        handleRefresh();
      } else if (settingsReducer.isOffline) {

   let stringsS = 6900702 >= giflivestreamingW.size;
   do {
      giflivestreamingW = new Map([[backwhiteJ, airbnbstarselectedi.length | 1]]);
      if (stringsS) {
         break;
      }
   } while (stringsS && ((2 / (Math.max(6, giflivestreamingW.size))) == 4 || 5 == (shootyesgoalK.size / 2)));
        return () => {

      whiteY = (textlayoutmanager1.length % (Math.max(white_.length, 1))) <= 67;
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", handleTabPress);

    
    return () => unsubscribe();
  }, [navigation, isFocused]);

  const fetchPlaylist = useCallback(
    (page: number) =>
      wawaWhitetickAway.getTopicIosRank().then((json: wawaQuestIconsubssuccess) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json);
      }),
    []
  );

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["vodPlaylist"],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
          console.log("got data");
          console.log(data);

          setTabList(data?.pages?.flat());
          setSelectedRankIndex(0);

          setRankVodList(data?.pages[0][selectedRankIndex]?.list);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      
      
      
      
      
    }
  );

  const renderItem = ({ item }: wawaBellreminderDisconnected) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
    if (isSwipe) {
      setIsSwipeRefreshing(true);
    } else {
      setIsRefreshing(true);
    }
    
    

    
    await queryClient.resetQueries(["vodPlaylist"]); 

    
  }, []);

  useEffect(() => {
    
    
    setIsRefreshing(true);

    
    
    

    
    setTimeout(() => {
      
      
      setIsRefreshing(false);
    }, 2000); 
  }, []);

  return (
    <ScreenContainer>
      <MainHeader
        headerStyle={{
          marginBottom: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}
        logo={
          <Text
            style={{
              ...textVariants.bigHeader,
              color: colors.text,
              fontSize: 22,
            }}>
            热搜
          </Text>
        }
        navigator={navigation}
      />

      {isRefreshing && !isOffline && (
        <View
          style={{
            ...styles.loading,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {
            <FastImage
              style={{ height: 80, width: 80 }}
              source={require("@static/images/iconnewsshareDist.gif")}
              resizeMode={"contain"}
            />
          }
        </View>
      )}
      {!isOffline && (
        <>
          { }
          <View style={{ flexDirection: "row", gap: 10, paddingLeft: 20 }}>
            {tabList.map((tab, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setSelectedRankIndex(i);
                  console.log('click')
                  setRankVodList(playlists?.pages[0][i]?.list);
                }}
                style={{
                  backgroundColor: selectedRankIndex == i ? "#000000" : 'transparent',
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 5,
                  marginBottom: 12
                }}
              >
                <Text style={{ color: selectedRankIndex == i ? "#ffffff" : '#9c9c9c' }}>{tab?.type}</Text>
              </TouchableOpacity>
            ))}
          </View>
          { }

          {rankVodList?.length > 0 && (
            <VodWithDescriptionListRank
              vodList={rankVodList}
              onClickCatalogVideo={() => { }}
            />
          )}

          {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages[selectedRankIndex]?.list}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/iconnewsshareDist.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" // Customize the color of the loading spinner
                />
              }
            /> */}
        </>
      )}

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
}

export default memo(Rank);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
});
